import fs from "fs";
import fsp from "fs/promises";
import path from "path";

import { getFileMentionCompletions } from "./input.mjs";
import { resolveModelName } from "./models.mjs";
import { providerSummary } from "./providers.mjs";
import { getToolNames, runLocalCommand } from "./tools.mjs";
import {
  appendMemory,
  loadInputHistory,
  loadTasks,
  readMemory,
  saveSession,
  saveTasks,
  writeMemory,
} from "./storage.mjs";
import { BLACK_VERSION } from "./version.mjs";

export const COMMAND_DEFINITIONS = [
  { name: "/", description: "Open the slash-command palette", category: "Navigation" },
  { name: "/help", description: "Show the built-in slash commands", category: "Navigation" },
  { name: "/status", description: "Show session status, model, provider, and usage", category: "Runtime" },
  { name: "/init", description: "Create a CLAUDE.md workspace instruction file", category: "Workspace" },
  { name: "/review", description: "Review the current git diff with the reviewer agent", category: "Review" },
  { name: "/diff", description: "Print the current git diff", category: "Review" },
  { name: "/doctor", description: "Run environment diagnostics", category: "Runtime" },
  { name: "/compact", description: "Compact the active conversation into a summary note", category: "Session" },
  { name: "/memory", description: "Manage persistent project memory", category: "Workspace" },
  { name: "/tasks", description: "Manage simple persistent tasks", category: "Workspace" },
  { name: "/history", description: "Show recent activity from the local session store", category: "Session" },
  { name: "/logs", description: "Show runtime logs or toggle inline log streaming", category: "Runtime" },
  { name: "/agents", description: "List available agents", category: "Agent" },
  { name: "/agent NAME", description: "Switch the default agent", category: "Agent" },
  { name: "/model NAME", description: "Switch the active model", category: "Agent" },
  { name: "/tools", description: "List exposed tools", category: "Runtime" },
  { name: "/config", description: "Print resolved runtime config", category: "Runtime" },
  { name: "/cost", description: "Show accumulated token usage when available", category: "Runtime" },
  { name: "/usage", description: "Alias for /cost", category: "Runtime" },
  { name: "/reset", description: "Clear the in-memory conversation", category: "Session" },
  { name: "/clear", description: "Clear the terminal and redraw the dashboard", category: "Navigation" },
  { name: "/exit", description: "Exit Blaude", category: "Navigation" },
];

const COMMAND_CATEGORY_ORDER = ["Navigation", "Agent", "Review", "Workspace", "Session", "Runtime"];

function formatCommandHelp() {
  return [
    "Shortcuts:",
    "/                Open the slash-command palette",
    "Tab              Complete slash commands and @file mentions",
    "!cmd             Run a shell command directly",
    "!!               Re-run the previous shell command",
    "@path            Attach a workspace file to the next prompt",
    "?                Show this help",
    "",
    "Commands:",
    COMMAND_DEFINITIONS.map((command) => `${command.name.padEnd(16, " ")} ${command.description}`).join("\n"),
  ].join("\n");
}

function renderPanel(title, lines, width = 88) {
  const innerWidth = Math.max(58, width - 2);
  const boxLines = [`╭${"─".repeat(innerWidth)}╮`, `│${title.padEnd(innerWidth, " ")}│`];
  for (const line of lines) {
    const value = String(line ?? "");
    if (value.length <= innerWidth) {
      boxLines.push(`│${value.padEnd(innerWidth, " ")}│`);
      continue;
    }
    for (let index = 0; index < value.length; index += innerWidth) {
      boxLines.push(`│${value.slice(index, index + innerWidth).padEnd(innerWidth, " ")}│`);
    }
  }
  boxLines.push(`╰${"─".repeat(innerWidth)}╯`);
  return boxLines.join("\n");
}

function scoreCommandMatch(command, normalizedQuery) {
  const name = command.name.toLowerCase();
  const description = command.description.toLowerCase();
  const category = String(command.category ?? "").toLowerCase();

  if (!normalizedQuery || normalizedQuery === "/") {
    return 1;
  }
  if (name === normalizedQuery) {
    return 100;
  }
  if (name.startsWith(normalizedQuery)) {
    return 80;
  }
  if (name.includes(normalizedQuery)) {
    return 60;
  }
  if (description.includes(normalizedQuery)) {
    return 40;
  }
  if (category.includes(normalizedQuery)) {
    return 20;
  }
  return 0;
}

function filterCommandDefinitions(query = "") {
  const normalized = query.trim().toLowerCase();
  return COMMAND_DEFINITIONS.map((command) => ({
    ...command,
    score: scoreCommandMatch(command, normalized),
  }))
    .filter((command) => command.score > 0)
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }
      const leftCategory = COMMAND_CATEGORY_ORDER.indexOf(left.category);
      const rightCategory = COMMAND_CATEGORY_ORDER.indexOf(right.category);
      if (leftCategory !== rightCategory) {
        return leftCategory - rightCategory;
      }
      return left.name.localeCompare(right.name);
    });
}

export function formatCommandPalette(query = "") {
  const commands = filterCommandDefinitions(query);
  if (commands.length === 0) {
    return renderPanel(" Slash Commands ", [
      "No matching commands.",
      "Try /help or press Tab after typing a slash prefix.",
    ]);
  }

  const lines = [
    `Matches: ${commands.length}${query.trim() ? `  ·  filter: ${query.trim()}` : ""}`,
    "Press Tab to complete the current slash command.",
    "",
  ];

  for (const category of COMMAND_CATEGORY_ORDER) {
    const group = commands.filter((command) => command.category === category);
    if (group.length === 0) {
      continue;
    }
    lines.push(`${category}`);
    for (const command of group.slice(0, 6)) {
      lines.push(`  ${command.name.padEnd(16, " ")} ${command.description}`);
    }
    lines.push("");
  }

  return renderPanel(" Slash Commands ", lines.slice(0, -1));
}

function collectCommandSuggestions(input) {
  return filterCommandDefinitions(input)
    .map((command) => command.name)
    .filter((name) => name !== "/")
    .slice(0, 5);
}

function buildCompletionValues(command, context) {
  switch (command) {
    case "/agent":
      return Array.from(context.config.agentCatalog.keys());
    case "/model":
      return [
        "default",
        "haiku",
        "sonnet",
        "opus",
        context.providerContext.model,
        context.config.settings.model,
        context.config.env.ANTHROPIC_MODEL,
        context.config.env.ANTHROPIC_DEFAULT_HAIKU_MODEL,
        context.config.env.ANTHROPIC_DEFAULT_SONNET_MODEL,
        context.config.env.ANTHROPIC_DEFAULT_OPUS_MODEL,
      ].filter((value, index, list) => typeof value === "string" && value.trim() && list.indexOf(value) === index);
    case "/tasks":
      return ["add", "done", "remove", "clear"];
    case "/memory":
      return ["add", "clear"];
    case "/logs":
      return ["panel", "recent", "tail", "on", "off", "clear", "status", "path"];
    case "/review":
    case "/diff":
      return ["--staged"];
    default:
      return [];
  }
}

export function getInputCompletions(line, context) {
  if (!line.startsWith("/")) {
    return getFileMentionCompletions(line, context.config.cwd);
  }

  const trimmed = line.trimStart();
  const parts = trimmed.split(/\s+/);
  const command = parts[0];

  if (trimmed === "/" || (parts.length === 1 && !trimmed.endsWith(" "))) {
    return filterCommandDefinitions(command)
      .map((item) => item.name)
      .filter((name) => name !== "/");
  }

  const valuePrefix = trimmed.endsWith(" ") ? "" : parts.at(-1) ?? "";
  const values = buildCompletionValues(command, context);
  return values
    .filter((value) => value.startsWith(valuePrefix))
    .map((value) => {
      const head = trimmed.endsWith(" ") ? trimmed : trimmed.slice(0, trimmed.length - valuePrefix.length);
      const suffix = command === "/tasks" && value !== "add" ? "" : "";
      return `${head}${value}${suffix}`;
    });
}

function parseCommand(input) {
  const [command = "", ...restTokens] = input.trim().split(/\s+/);
  const rest = input.trim().slice(command.length).trim();
  return {
    command,
    args: restTokens,
    rest,
  };
}

function truncate(text, maxChars = 16_000) {
  if (text.length <= maxChars) {
    return text;
  }
  return `${text.slice(0, maxChars)}\n\n[truncated ${text.length - maxChars} chars]`;
}

async function readGitDiff(config, { staged = false } = {}) {
  const statCommand = staged ? "git diff --cached --stat --no-color" : "git diff --stat --no-color";
  const diffCommand = staged
    ? "git diff --cached --no-ext-diff --no-color --unified=3"
    : "git diff --no-ext-diff --no-color --unified=3";

  const [statResult, diffResult] = await Promise.all([
    runLocalCommand(statCommand, {
      cwd: config.cwd,
      env: config.env,
      shell: config.shell,
      timeoutMs: 30_000,
      maxOutputChars: 40_000,
    }),
    runLocalCommand(diffCommand, {
      cwd: config.cwd,
      env: config.env,
      shell: config.shell,
      timeoutMs: 30_000,
      maxOutputChars: 120_000,
    }),
  ]);

  return {
    stat: statResult.stdout.trim(),
    diff: diffResult.stdout.trim(),
    statCode: statResult.code,
    diffCode: diffResult.code,
  };
}

async function buildDoctorReport(context) {
  const { config, providerContext, statePaths } = context;
  const authMode = config.env.ANTHROPIC_API_KEY
    ? "apiKey"
    : config.env.ANTHROPIC_AUTH_TOKEN
      ? "authToken"
      : "none";

  const commands = [
    { key: "node", command: "node -v" },
    { key: "pnpm", command: "pnpm -v" },
    { key: "git", command: "git --version" },
    { key: "rg", command: "rg --version" },
    { key: "gitStatus", command: "git status --short" },
  ];

  const results = {};
  for (const entry of commands) {
    results[entry.key] = await runLocalCommand(entry.command, {
      cwd: config.cwd,
      env: config.env,
      shell: config.shell,
      timeoutMs: 20_000,
      maxOutputChars: 16_000,
    });
  }

  const tasks = await loadTasks(statePaths);
  const memoryText = await readMemory(statePaths);
  const inputHistory = await loadInputHistory(statePaths);
  const gitDirtyCount = results.gitStatus.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean).length;

  return [
    `version: ${BLACK_VERSION}`,
    `provider: ${providerSummary(providerContext.provider)}`,
    `model: ${providerContext.model}`,
    `workspace: ${config.cwd}`,
    `settings_path: ${config.settingsPath}`,
    `settings_loaded: ${config.settingsExists}`,
    `auth_mode: ${authMode}`,
    `node: ${results.node.stdout.trim() || "<unavailable>"}`,
    `pnpm: ${results.pnpm.stdout.trim() || "<unavailable>"}`,
    `git: ${(results.git.stdout.trim().split("\n")[0] || "<unavailable>")}`,
    `rg: ${(results.rg.stdout.trim().split("\n")[0] || "<unavailable>")}`,
    `git_dirty_entries: ${gitDirtyCount}`,
    `tasks_count: ${tasks.length}`,
    `memory_lines: ${memoryText ? memoryText.split("\n").filter(Boolean).length : 0}`,
    `history_entries: ${inputHistory.length}`,
    `session_messages: ${context.engine.getConversationSize()}`,
    `input_tokens: ${context.engine.getUsageSummary().inputTokens}`,
    `output_tokens: ${context.engine.getUsageSummary().outputTokens}`,
  ].join("\n");
}

async function handleMemoryCommand(parsed, context) {
  const { statePaths } = context;
  const action = parsed.args[0] ?? "show";

  if (action === "add") {
    const text = parsed.rest.slice("add".length).trim();
    if (!text) {
      return { output: "Usage: /memory add <text>" };
    }
    await appendMemory(statePaths, text);
    return { output: "Memory saved." };
  }

  if (action === "clear") {
    await writeMemory(statePaths, "");
    return { output: "Memory cleared." };
  }

  const memoryText = await readMemory(statePaths);
  return { output: memoryText.trim() || "No memory saved for this project yet." };
}

function formatTasks(tasks) {
  if (tasks.length === 0) {
    return "No tasks.";
  }
  return tasks
    .map((task) => {
      const marker = task.status === "done" ? "[x]" : "[ ]";
      return `${marker} ${task.id} ${task.text}`;
    })
    .join("\n");
}

async function handleTasksCommand(parsed, context) {
  const { statePaths } = context;
  const tasks = await loadTasks(statePaths);
  const action = parsed.args[0] ?? "list";

  if (action === "add") {
    const text = parsed.rest.slice("add".length).trim();
    if (!text) {
      return { output: "Usage: /tasks add <text>" };
    }
    const nextId = tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1;
    tasks.push({
      id: nextId,
      text,
      status: "open",
      createdAt: new Date().toISOString(),
    });
    await saveTasks(statePaths, tasks);
    return { output: `Task ${nextId} added.` };
  }

  if (action === "done") {
    const id = Number.parseInt(parsed.args[1], 10);
    if (!Number.isFinite(id)) {
      return { output: "Usage: /tasks done <id>" };
    }
    const task = tasks.find((item) => item.id === id);
    if (!task) {
      return { output: `Task ${id} was not found.` };
    }
    task.status = "done";
    task.completedAt = new Date().toISOString();
    await saveTasks(statePaths, tasks);
    return { output: `Task ${id} marked done.` };
  }

  if (action === "remove") {
    const id = Number.parseInt(parsed.args[1], 10);
    if (!Number.isFinite(id)) {
      return { output: "Usage: /tasks remove <id>" };
    }
    const remaining = tasks.filter((item) => item.id !== id);
    await saveTasks(statePaths, remaining);
    return { output: `Task ${id} removed.` };
  }

  if (action === "clear") {
    await saveTasks(statePaths, []);
    return { output: "All tasks cleared." };
  }

  return { output: formatTasks(tasks) };
}

async function handleInitCommand(context) {
  const claudeMdPath = path.join(context.config.cwd, "CLAUDE.md");
  if (fs.existsSync(claudeMdPath)) {
    return { output: `CLAUDE.md already exists at ${claudeMdPath}` };
  }

  const template = [
    "# CLAUDE.md",
    "",
    "## Project Overview",
    "- Describe the project and its goals.",
    "",
    "## Development Commands",
    "- Add build, test, lint, and run commands here.",
    "",
    "## Code Style",
    "- Explain formatting, architecture, and naming expectations.",
    "",
    "## Review Checklist",
    "- Note the most important correctness or product risks.",
    "",
  ].join("\n");

  await fsp.writeFile(claudeMdPath, template, "utf8");
  return { output: `Created ${claudeMdPath}` };
}

export async function handleSlashCommand(input, context) {
  const parsed = parseCommand(input);
  const { config, providerContext, engine, session, statePaths } = context;

  switch (parsed.command) {
    case "/":
      return { output: formatCommandPalette(parsed.rest) };
    case "?":
    case "/help":
      return { output: formatCommandHelp() };
    case "/status": {
      const tasks = await loadTasks(statePaths);
      const memoryText = await readMemory(statePaths);
      const inputHistory = await loadInputHistory(statePaths);
      const logSnapshot = context.logStore.snapshot();
      const usage = engine.getUsageSummary();
      return {
        output: [
          `version: ${BLACK_VERSION}`,
          `provider: ${providerSummary(providerContext.provider)}`,
          `model: ${providerContext.model}`,
          `cwd: ${config.cwd}`,
          `default_agent: ${config.defaultAgent}`,
          `messages: ${engine.getConversationSize()}`,
          `compactions: ${engine.getCompactionNotes().length}`,
          `tasks: ${tasks.length}`,
          `memory_present: ${memoryText.trim() ? "yes" : "no"}`,
          `history_entries: ${inputHistory.length}`,
          `inline_logs: ${logSnapshot.verbose ? "on" : "off"}`,
          `log_buffer: ${logSnapshot.size}`,
          `log_file: ${statePaths.runtimeLogFile}`,
          `session_jsonl: ${statePaths.sessionJsonlFile}`,
          `tool_count: ${getToolNames().length}`,
          `mcp_servers: ${Object.keys(config.mcpServers || {}).length}`,
          `input_tokens: ${usage.inputTokens}`,
          `output_tokens: ${usage.outputTokens}`,
          `available_agents: ${Array.from(config.agentCatalog.keys()).join(", ")}`,
        ].join("\n"),
      };
    }
    case "/agents":
      return {
        output: Array.from(config.agentCatalog.values())
          .map((agent) => `${agent.name}: ${agent.description || "No description"}`)
          .join("\n"),
      };
    case "/agent": {
      const nextAgent = parsed.rest;
      if (!nextAgent) {
        return { output: `Current agent: ${config.defaultAgent}` };
      }
      if (!config.agentCatalog.has(nextAgent)) {
        return { output: `Unknown agent: ${nextAgent}` };
      }
      engine.setAgent(nextAgent);
      config.defaultAgent = nextAgent;
      session.lastAgent = nextAgent;
      await saveSession(statePaths, session);
      return { output: `Default agent set to ${nextAgent}` };
    }
    case "/model": {
      const nextModel = resolveModelName(parsed.rest, config.env, providerContext.provider);
      if (!parsed.rest) {
        return { output: `Current model: ${providerContext.model}` };
      }
      engine.setModel(nextModel);
      session.lastModel = nextModel;
      await saveSession(statePaths, session);
      return { output: `Model set to ${nextModel}` };
    }
    case "/tools":
      return { output: getToolNames().join("\n") };
    case "/config":
      return {
        output: JSON.stringify(
          {
            cwd: config.cwd,
            provider: providerContext.provider,
            model: providerContext.model,
            defaultAgent: config.defaultAgent,
            maxTurns: config.maxTurns,
            maxTokens: config.maxTokens,
            settingsPath: config.settingsPath,
            stateDir: statePaths.baseDir,
            historyFile: statePaths.historyFile,
            runtimeLogFile: statePaths.runtimeLogFile,
            sessionJsonlFile: statePaths.sessionJsonlFile,
            permissions: config.permissions,
            mcpServers: Object.keys(config.mcpServers || {}),
          },
          null,
          2,
        ),
      };
    case "/init":
      return handleInitCommand(context);
    case "/doctor":
      return { output: await buildDoctorReport(context) };
    case "/compact": {
      const summary = engine.compactConversation();
      session.compactionNotes = engine.getCompactionNotes();
      await saveSession(statePaths, session);
      return { output: `Conversation compacted.\n\n${truncate(summary, 4000)}` };
    }
    case "/memory":
      return handleMemoryCommand(parsed, context);
    case "/tasks":
      return handleTasksCommand(parsed, context);
    case "/history":
      return {
        output: (session.recentActivity ?? [])
          .slice(-10)
          .reverse()
          .map((entry) => `${entry.time ?? ""} ${entry.label ?? entry.kind ?? "activity"}`.trim())
          .join("\n") || "No recent activity.",
      };
    case "/logs": {
      const action = parsed.args[0] ?? "recent";
      const numericLimit = Number.parseInt(parsed.args[1] ?? parsed.args[0], 10);
      const recentLimit = Number.isFinite(numericLimit) ? Math.max(1, Math.min(200, numericLimit)) : 40;
      if (action === "on") {
        context.logStore.setVerbose(true);
        return { output: "Inline runtime log streaming is on." };
      }
      if (action === "off") {
        context.logStore.setVerbose(false);
        return { output: "Inline runtime log streaming is off." };
      }
      if (action === "clear") {
        context.logStore.clear();
        return { output: "Runtime logs cleared." };
      }
      if (action === "status") {
        const snapshot = context.logStore.snapshot();
        return {
          output: [
            `inline_logs: ${snapshot.verbose ? "on" : "off"}`,
            `buffered_entries: ${snapshot.size}`,
            `log_file: ${snapshot.persistPath || statePaths.runtimeLogFile}`,
          ].join("\n"),
        };
      }
      if (action === "path" || action === "file") {
        return {
          output: statePaths.runtimeLogFile,
        };
      }
      const entries = context.logStore.recent(recentLimit);
      if (entries.length === 0) {
        return { output: "No runtime logs yet." };
      }
      if (action === "panel") {
        return {
          output: renderPanel(" Runtime Logs ", entries.map((entry) => context.formatLogEntry(entry))),
        };
      }
      return {
        output: entries.map((entry) => context.formatLogEntry(entry)).join("\n"),
      };
    }
    case "/cost": {
      const usage = engine.getUsageSummary();
      return {
        output: [
          `input_tokens: ${usage.inputTokens}`,
          `output_tokens: ${usage.outputTokens}`,
          `requests: ${usage.requests}`,
        ].join("\n"),
      };
    }
    case "/usage":
      return handleSlashCommand("/cost", context);
    case "/diff": {
      const staged = parsed.args.includes("--staged");
      const diff = await readGitDiff(config, { staged });
      if (!diff.diff) {
        return { output: `No ${staged ? "staged" : "working tree"} diff to show.` };
      }
      return {
        output: [
          diff.stat ? diff.stat : `No ${staged ? "staged" : "working tree"} stat available.`,
          "",
          truncate(diff.diff, 32_000),
        ].join("\n"),
      };
    }
    case "/review": {
      const staged = parsed.args.includes("--staged");
      const extraInstructions = parsed.rest.replace("--staged", "").trim();
      const diff = await readGitDiff(config, { staged });
      if (!diff.diff) {
        return { output: `No ${staged ? "staged" : "working tree"} changes to review.` };
      }
      const reviewPrompt = [
        "Review the following git diff like a code review.",
        "Prioritize bugs, regressions, risky assumptions, and missing tests.",
        "If there are no findings, say that explicitly and mention residual risk.",
        extraInstructions ? `Extra instructions: ${extraInstructions}` : null,
        `Review target: ${staged ? "staged diff" : "working tree diff"}`,
        diff.stat ? `Diff stat:\n${diff.stat}` : null,
        `Diff:\n${truncate(diff.diff, 40_000)}`,
      ]
        .filter(Boolean)
        .join("\n\n");
      const result = await engine.ask(reviewPrompt, { agentName: "reviewer" });
      return { output: result };
    }
    case "/reset":
      engine.resetConversation({ clearCompaction: true });
      session.compactionNotes = [];
      await saveSession(statePaths, session);
      return { output: "Conversation reset." };
    case "/clear":
      return { action: "clear" };
    case "/exit":
    case "/quit":
      return { action: "exit" };
    default:
      if (filterCommandDefinitions(parsed.command).length > 0) {
        return { output: formatCommandPalette(parsed.command) };
      }
      return {
        output: [
          `Unknown command: ${parsed.command}`,
          ...(() => {
            const suggestions = collectCommandSuggestions(parsed.command);
            if (suggestions.length === 0) {
              return ["Run /help to see available commands."];
            }
            return ["Did you mean:", ...suggestions.map((item) => `- ${item}`)];
          })(),
        ].join("\n"),
      };
  }
}
