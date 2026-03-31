import readline from "readline/promises";
import process from "process";

import { getInputCompletions, handleSlashCommand } from "./commands.mjs";
import { expandPromptFileMentions } from "./input.mjs";
import { createLogStore, formatLogEntry } from "./logs.mjs";
import { providerSummary } from "./providers.mjs";
import {
  appendJsonlRecord,
  ensureProjectStateDir,
  formatRecentActivityEntries,
  getProjectStatePaths,
  loadInputHistory,
  loadSession,
  pushRecentActivity,
  saveInputHistory,
  saveSession,
} from "./storage.mjs";
import { runLocalCommand } from "./tools.mjs";
import { BLACK_VERSION } from "./version.mjs";

function supportsColor(noColor) {
  return !noColor && process.stdout.isTTY;
}

function color(text, code, noColor) {
  if (!supportsColor(noColor)) {
    return text;
  }
  return `\u001b[${code}m${text}\u001b[0m`;
}

function padRight(text, width) {
  const clean = text.length > width ? text.slice(0, width) : text;
  return `${clean}${" ".repeat(Math.max(0, width - clean.length))}`;
}

function wrapText(text, width) {
  const words = String(text).split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return [""];
  }

  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > width && current) {
      lines.push(current);
      current = word;
      continue;
    }
    current = candidate;
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}

function summarizeText(text, maxChars = 120) {
  const normalized = String(text ?? "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return "<empty>";
  }
  if (normalized.length <= maxChars) {
    return normalized;
  }
  return `${normalized.slice(0, maxChars - 3)}...`;
}

function summarizeToolInput(name, input = {}) {
  if (name === "bash" && typeof input.command === "string") {
    return summarizeText(input.command, 90);
  }
  if (typeof input.path === "string") {
    return input.path;
  }
  if (typeof input.pattern === "string") {
    return `pattern=${summarizeText(input.pattern, 60)}`;
  }
  return summarizeText(JSON.stringify(input), 90);
}

function formatPreviewLines(text, width, maxLines = 6) {
  const normalized = String(text ?? "").replace(/\r/g, "");
  const rawLines = normalized.split("\n").filter((line) => line.length > 0);
  const previewLines = rawLines.length === 0 ? ["<empty>"] : rawLines;
  const result = [];

  for (const line of previewLines) {
    if (result.length >= maxLines) {
      break;
    }
    if (line.length <= width) {
      result.push(line);
      continue;
    }
    for (let index = 0; index < line.length; index += width) {
      result.push(line.slice(index, index + width));
      if (result.length >= maxLines) {
        break;
      }
    }
  }

  if (previewLines.length > result.length) {
    result.push("...");
  }
  return result;
}

function buildPanelLines(title, bodyLines, width) {
  const innerWidth = Math.max(58, width - 2);
  const lines = [`╭${"─".repeat(innerWidth)}╮`, `│${padRight(` ${title}`, innerWidth)}│`];
  for (const line of bodyLines) {
    for (const wrapped of formatPreviewLines(line, innerWidth, 4)) {
      lines.push(`│${padRight(wrapped, innerWidth)}│`);
    }
  }
  lines.push(`╰${"─".repeat(innerWidth)}╯`);
  return lines;
}

function printPanel(title, bodyLines, config, colorCode = "90") {
  const width = Math.min(process.stdout.columns || 100, 110);
  const lines = buildPanelLines(title, bodyLines, width);
  process.stdout.write(`${color(lines.join("\n"), colorCode, config.noColor)}\n`);
}

function formatToolPanelLines(event) {
  const lines = [];
  if (event.type === "tool_start") {
    lines.push(`status   running`);
    lines.push(`input    ${summarizeToolInput(event.name, event.input)}`);
    return lines;
  }
  if (event.type === "tool_end") {
    lines.push(`status   completed in ${event.durationMs}ms`);
    lines.push("output");
    return [...lines, ...formatPreviewLines(event.output, 94, 6)];
  }
  if (event.type === "tool_error") {
    lines.push(`status   failed in ${event.durationMs}ms`);
    lines.push(`error    ${event.error}`);
  }
  return lines;
}

function printStructuredEvent(event, config) {
  switch (event.type) {
    case "model_request":
      process.stdout.write(
        `${color(`· thinking with ${event.agent} on ${event.model}`, "90", config.noColor)}\n`,
      );
      return true;
    case "tool_start":
      printPanel(` Tool · ${event.name} `, formatToolPanelLines(event), config, "33");
      return true;
    case "tool_end":
      printPanel(` Tool Done · ${event.name} `, formatToolPanelLines(event), config, "33");
      return true;
    case "tool_error":
      printPanel(` Tool Error · ${event.name} `, formatToolPanelLines(event), config, "31");
      return true;
    case "agent_start":
      printPanel(
        ` Agent · ${event.agent} `,
        ["status   delegated", `task     ${summarizeText(event.task, 220)}`],
        config,
        "36",
      );
      return true;
    case "agent_end":
      printPanel(
        ` Agent Done · ${event.agent} `,
        ["status   completed", "result", ...formatPreviewLines(event.result, 94, 5)],
        config,
        "36",
      );
      return true;
    case "compact":
      printPanel(
        " Context Compacted ",
        [`strategy ${event.strategy || "manual"}`, "Older conversation has been summarized into memory notes."],
        config,
        "36",
      );
      return true;
    case "permission_denied":
      printPanel(
        ` Tool Blocked · ${event.name} `,
        ["status   blocked by policy", `reason   ${event.reason}`],
        config,
        "31",
      );
      return true;
    case "stream_error":
      printPanel(" Stream Fallback ", [`error    ${event.error}`], config, "31");
      return true;
    default:
      return false;
  }
}

function buildDashboardLines(config, providerContext, session, logStore) {
  const totalWidth = Math.min(process.stdout.columns || 100, 110);
  const innerWidth = Math.max(80, totalWidth - 2);
  const leftWidth = 34;
  const rightWidth = innerWidth - leftWidth - 1;
  const logSnapshot = logStore.snapshot();
  const runtimeLines = logStore
    .recent(4)
    .map((entry) => formatLogEntry(entry))
    .map((line) => summarizeText(line, rightWidth));

  const leftLines = [
    "",
    "      Welcome back!",
    "",
    "        _.--''''''--._",
    "     .-'  _..__.._  '-.",
    "   .'   .'-.  .-'.   '.",
    "  /   .'  _ \\/ _  '.   \\",
    " |   /   (_)  (_)   \\   |",
    " |  |       /\\       |  |",
    "  \\  \\   .-'  '-.   /  /",
    "   '. '._   __   _.' .'",
    "     '-._'------'_.-'",
    "",
    `${providerContext.model} · ${providerSummary(providerContext.provider)}`,
    `agent: ${config.defaultAgent}`,
    `logs: ${logSnapshot.verbose ? "on" : "off"}`,
    config.cwd,
  ];

  const rightLines = [
    "Tips for getting started",
    ...wrapText("Type / for commands, Tab to complete, !<cmd> for shell mode, and @file to attach context.", rightWidth),
    "",
    "Recent activity",
    ...formatRecentActivityEntries(session.recentActivity, 5),
    "",
    "Runtime panel",
    ...(runtimeLines.length > 0 ? runtimeLines : ["No runtime events yet"]),
  ];

  const rows = Math.max(leftLines.length, rightLines.length);
  const lines = [];
  lines.push(`╭${"─".repeat(innerWidth)}╮`);
  lines.push(`│${padRight(` Blaude v${BLACK_VERSION}`, innerWidth)}│`);
  for (let index = 0; index < rows; index += 1) {
    const left = padRight(leftLines[index] ?? "", leftWidth);
    const right = padRight(rightLines[index] ?? "", rightWidth);
    lines.push(`│${left}│${right}│`);
  }
  lines.push(`╰${"─".repeat(innerWidth)}╯`);
  lines.push(
    color(
      `? shortcuts · / commands · Tab complete · ! shell · @ file · ${config.defaultAgent}`,
      "90",
      config.noColor,
    ),
  );
  return lines;
}

function printDashboard(config, providerContext, session, logStore) {
  process.stdout.write(`${buildDashboardLines(config, providerContext, session, logStore).join("\n")}\n`);
}

function printRuntimeLog(entry, config) {
  const levelColor =
    entry.level === "error"
      ? "31"
      : entry.category === "tool" || entry.category === "shell"
        ? "33"
        : entry.category === "model"
          ? "35"
          : entry.category === "context"
            ? "36"
            : "90";
  process.stdout.write(`${color(formatLogEntry(entry), levelColor, config.noColor)}\n`);
}

function eventToLogEntry(event) {
  switch (event.type) {
    case "user":
      return { category: "prompt", message: event.text };
    case "assistant_delta":
      return null;
    case "model_request":
      return {
        category: "model",
        message: `request agent=${event.agent} depth=${event.depth} model=${event.model} messages=${event.messages}`,
      };
    case "model_response":
      return {
        category: "model",
        message:
          `response agent=${event.agent} depth=${event.depth} model=${event.model} ` +
          `in=${event.inputTokens} out=${event.outputTokens} stop=${event.stopReason ?? "unknown"} ${event.durationMs}ms`,
      };
    case "tool_start":
      return {
        category: "tool",
        message: `start ${event.name} ${summarizeToolInput(event.name, event.input)}`,
      };
    case "tool_end":
      return {
        category: "tool",
        message: `done ${event.name} ${event.durationMs}ms ${summarizeText(event.output, 100)}`,
      };
    case "tool_error":
      return {
        category: "tool",
        level: "error",
        message: `error ${event.name} ${event.durationMs}ms ${event.error}`,
      };
    case "agent_start":
      return { category: "agent", message: `start ${event.agent} ${summarizeText(event.task, 90)}` };
    case "agent_end":
      return { category: "agent", message: `done ${event.agent} ${summarizeText(event.result, 90)}` };
    case "compact":
      return { category: "compact", message: `${event.strategy || "manual"} conversation compacted` };
    case "permission_denied":
      return { category: "policy", level: "error", message: `blocked ${event.name} ${event.reason}` };
    case "stream_error":
      return { category: "model", level: "error", message: `stream fallback ${event.error}` };
    default:
      return null;
  }
}

function printAssistantEvent(event, config) {
  process.stdout.write(`\n${color("⏺ blaude", "1;36", config.noColor)}\n\n${event.text}\n`);
}

function printShellResult(command, result, durationMs, config) {
  const outputLines = [
    "",
    color(`$ ${command}`, "1;33", config.noColor),
    result.stdout ? result.stdout : color("stdout: <empty>", "90", config.noColor),
    result.stderr ? color(`stderr:\n${result.stderr}`, "31", config.noColor) : "",
    color(`exit ${result.code} · ${durationMs}ms`, result.code === 0 ? "90" : "31", config.noColor),
  ].filter(Boolean);
  process.stdout.write(`${outputLines.join("\n")}\n`);
}

export async function startInteractiveTui(engine, config, providerContext) {
  const statePaths = getProjectStatePaths(config.cwd);
  await ensureProjectStateDir(statePaths);
  const session = await loadSession(statePaths);
  let inputHistory = await loadInputHistory(statePaths);
  let lastAssistantText = "";
  let lastShellCommand = "";
  let isStreamingAssistant = false;
  const logStore = createLogStore({ verbose: false });
  logStore.setPersistPath(statePaths.runtimeLogFile);
  session.lastStartedAt = new Date().toISOString();
  session.lastModel = providerContext.model;
  session.lastAgent = config.defaultAgent;
  if (session.compactionNotes?.length) {
    engine.setCompactionNotes(session.compactionNotes);
  }
  await saveSession(statePaths, session);

  const completer = (line) => {
    const completions = getInputCompletions(line, {
      config,
      providerContext,
    });
    return [completions.length > 0 ? completions : [], line];
  };

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    historySize: 500,
    completer,
  });

  if (Array.isArray(rl.history) && inputHistory.length > 0) {
    rl.history = [...inputHistory].slice(-200).reverse();
  }

  async function rememberInput(input) {
    const normalized = String(input ?? "").trim();
    if (!normalized) {
      return;
    }
    if (inputHistory.at(-1) !== normalized) {
      inputHistory = [...inputHistory, normalized].slice(-200);
      await saveInputHistory(statePaths, inputHistory);
      if (Array.isArray(rl.history)) {
        rl.history = [...inputHistory].slice(-200).reverse();
      }
    }
  }

  function addLog(entry, { echo = logStore.isVerbose() } = {}) {
    const persisted = logStore.add(entry);
    void appendJsonlRecord(statePaths.sessionJsonlFile, {
      time: persisted.time,
      type: "log",
      level: persisted.level,
      category: persisted.category,
      message: persisted.message,
    });
    if (echo) {
      printRuntimeLog(persisted, config);
    }
    return persisted;
  }

  const onEvent = (event) => {
    if (event.type === "assistant_delta" && typeof event.text === "string") {
      if (!isStreamingAssistant) {
        process.stdout.write(`\n${color("⏺ blaude", "1;36", config.noColor)}\n\n`);
        isStreamingAssistant = true;
      }
      process.stdout.write(event.text);
      lastAssistantText = event.snapshot.trim();
      void appendJsonlRecord(statePaths.sessionJsonlFile, {
        time: new Date().toISOString(),
        type: "assistant_delta",
        text: event.text,
        snapshot: event.snapshot,
        agent: event.agent,
      });
      return;
    }

    if (event.type === "assistant" && typeof event.text === "string") {
      lastAssistantText = event.text.trim();
      if (isStreamingAssistant) {
        process.stdout.write("\n");
        isStreamingAssistant = false;
      } else {
        printAssistantEvent(event, config);
      }
      void appendJsonlRecord(statePaths.sessionJsonlFile, {
        time: new Date().toISOString(),
        type: "assistant",
        text: event.text,
        agent: event.agent,
      });
      return;
    }

    const logEntry = eventToLogEntry(event);
    if (logEntry) {
      const rendered = printStructuredEvent(event, config);
      addLog(logEntry, { echo: !rendered });
    }
    if (event.type === "user") {
      void appendJsonlRecord(statePaths.sessionJsonlFile, {
        time: new Date().toISOString(),
        type: "user",
        text: event.text,
        agent: event.agent,
      });
    }
  };
  engine.runtimeHooks.onEvent = onEvent;

  addLog({
    category: "session",
    message: `started agent=${config.defaultAgent} provider=${providerSummary(providerContext.provider)} model=${providerContext.model}`,
  }, { echo: false });
  printDashboard(config, providerContext, session, logStore);

  async function handleShellShortcut(input) {
    const rerunLast = input === "!!";
    const command = rerunLast ? lastShellCommand : input.slice(1).trim();
    if (!command) {
      process.stdout.write("Usage: !<command> or !! to rerun the previous shell command.\n");
      return true;
    }

    lastShellCommand = command;
    await rememberInput(input);
    pushRecentActivity(session, {
      kind: "shell",
      label: `!${command.length > 74 ? `${command.slice(0, 71)}...` : command}`,
    });
    await saveSession(statePaths, session);

    addLog({
      category: "shell",
      message: `run ${command}`,
    }, { echo: false });

    const startedAt = Date.now();
    const result = await runLocalCommand(command, {
      cwd: config.cwd,
      env: config.env,
      shell: config.shell,
      timeoutMs: 10 * 60_000,
      maxOutputChars: 80_000,
    });
    const durationMs = Date.now() - startedAt;
    addLog({
      category: "shell",
      level: result.code === 0 ? "info" : "error",
      message: `exit=${result.code} ${durationMs}ms ${command}`,
    }, { echo: false });
    printShellResult(command, result, durationMs, config);
    return true;
  }

  async function handleInput(input) {
    const trimmedInput = String(input ?? "").trim();
    lastAssistantText = "";
    if (!trimmedInput) {
      return true;
    }

    if (trimmedInput === "?" || trimmedInput.startsWith("/")) {
      await rememberInput(trimmedInput);
      addLog({
        category: "command",
        message: trimmedInput,
      }, { echo: false });
      pushRecentActivity(session, {
        kind: "command",
        label: trimmedInput.length > 60 ? `${trimmedInput.slice(0, 57)}...` : trimmedInput,
      });
      await saveSession(statePaths, session);

      const result = await handleSlashCommand(trimmedInput, {
        engine,
        config,
        providerContext,
        session,
        statePaths,
        logStore,
        formatLogEntry,
      });

      if (result?.action === "exit") {
        return false;
      }
      if (result?.action === "clear") {
        process.stdout.write("\u001bc");
        printDashboard(config, providerContext, session, logStore);
        return true;
      }
      if (result?.output) {
        if (String(result.output).trim() !== lastAssistantText) {
          process.stdout.write(`${result.output}\n`);
        }
      }
      return true;
    }

    if (trimmedInput.startsWith("!")) {
      return handleShellShortcut(trimmedInput);
    }

    try {
      await rememberInput(trimmedInput);
      const mentionExpansion = await expandPromptFileMentions(trimmedInput, {
        cwd: config.cwd,
      });
      for (const warning of mentionExpansion.warnings) {
        process.stdout.write(`${color("warning", "33", config.noColor)} ${warning}\n`);
      }
      if (mentionExpansion.attached.length > 0) {
        addLog({
          category: "context",
          message: `attached ${mentionExpansion.attached.map((entry) => entry.token).join(", ")}`,
        }, { echo: false });
      }
      pushRecentActivity(session, {
        kind: "prompt",
        label: trimmedInput.length > 80 ? `${trimmedInput.slice(0, 77)}...` : trimmedInput,
      });
      await saveSession(statePaths, session);
      await engine.ask(mentionExpansion.prompt, { displayText: trimmedInput });
      session.lastModel = providerContext.model;
      session.lastAgent = config.defaultAgent;
      session.compactionNotes = engine.getCompactionNotes();
      await saveSession(statePaths, session);
      return true;
    } catch (error) {
      addLog({
        category: "runtime",
        level: "error",
        message: error instanceof Error ? error.message : String(error),
      }, { echo: false });
      process.stdout.write(
        `${color("error", "31", config.noColor)} ${error instanceof Error ? error.message : String(error)}\n`,
      );
      return true;
    }
  }

  try {
    if (!process.stdin.isTTY) {
      for await (const line of rl) {
        const shouldContinue = await handleInput(line);
        if (!shouldContinue) {
          break;
        }
      }
      return;
    }

    while (true) {
      let input;
      try {
        input = await rl.question(color("\n❯ ", "1;32", config.noColor));
      } catch (error) {
        if (error && error.code === "ERR_USE_AFTER_CLOSE") {
          break;
        }
        throw error;
      }
      const shouldContinue = await handleInput(input);
      if (!shouldContinue) {
        break;
      }
    }
  } finally {
    addLog({
      category: "session",
      message: "ended",
    }, { echo: false });
    rl.close();
    await engine.close();
  }
}
