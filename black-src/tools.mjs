import fs from "fs";
import fsp from "fs/promises";
import os from "os";
import path from "path";
import { spawn } from "child_process";

import {
  loadPlan,
  loadTasks,
  loadTeams,
  readJsonlFile,
  savePlan,
  saveTasks,
  saveTeams,
} from "./storage.mjs";

const BUILTIN_TOOL_NAMES = [
  "agent",
  "bash",
  "read_file",
  "write_file",
  "edit_file",
  "glob",
  "grep",
  "web_fetch",
  "web_search",
  "mcp_list_servers",
  "mcp_list_tools",
  "mcp_call_tool",
  "skill",
  "plan",
  "worktree_list",
  "worktree_create",
  "worktree_remove",
  "team_create",
  "team_run",
  "team_delete",
  "task_create",
  "task_update",
  "task_list",
  "compact_context",
  "session_history",
  "list_dir",
];

function truncateText(text, maxChars = 12_000) {
  if (text.length <= maxChars) {
    return text;
  }
  return `${text.slice(0, maxChars)}\n\n[truncated ${text.length - maxChars} chars]`;
}

function resolvePath(cwd, targetPath = ".") {
  return path.isAbsolute(targetPath) ? targetPath : path.resolve(cwd, targetPath);
}

function formatDirectoryEntries(basePath, entries) {
  return entries
    .map((entry) => `${entry.isDirectory() ? "dir " : "file"} ${path.join(basePath, entry.name)}`)
    .join("\n");
}

async function collectStream(stream, maxChars) {
  return new Promise((resolve, reject) => {
    let output = "";
    stream.setEncoding("utf8");
    stream.on("data", (chunk) => {
      if (output.length < maxChars) {
        output += chunk;
      }
    });
    stream.on("end", () => resolve(output));
    stream.on("error", reject);
  });
}

export async function runLocalCommand(
  command,
  { cwd, env, shell, timeoutMs = 60_000, maxOutputChars = 12_000 },
) {
  return new Promise((resolve, reject) => {
    const child = spawn(shell, ["-lc", command], {
      cwd,
      env,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) {
        child.kill("SIGTERM");
      }
    }, timeoutMs);

    Promise.all([
      collectStream(child.stdout, maxOutputChars),
      collectStream(child.stderr, maxOutputChars),
    ])
      .then(([stdout, stderr]) => {
        child.on("close", (code, signal) => {
          settled = true;
          clearTimeout(timer);
          resolve({
            code: code ?? 0,
            signal: signal ?? null,
            stdout: truncateText(stdout, maxOutputChars),
            stderr: truncateText(stderr, maxOutputChars),
          });
        });
      })
      .catch((error) => {
        settled = true;
        clearTimeout(timer);
        reject(error);
      });
  });
}

function addLineNumbers(text, startLine = 1) {
  return text
    .split("\n")
    .map((line, index) => `${String(startLine + index).padStart(4, " ")} | ${line}`)
    .join("\n");
}

async function grepFallback(pattern, basePath, caseSensitive, maxResults) {
  const regex = new RegExp(pattern, caseSensitive ? "g" : "gi");
  const matches = [];

  async function walk(currentPath) {
    if (matches.length >= maxResults) {
      return;
    }
    const entries = await fsp.readdir(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      if (matches.length >= maxResults) {
        return;
      }
      const entryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        if ([".git", "node_modules", "dist"].includes(entry.name)) {
          continue;
        }
        await walk(entryPath);
        continue;
      }
      const content = await fsp.readFile(entryPath, "utf8").catch(() => null);
      if (content === null) {
        continue;
      }
      const lines = content.split("\n");
      for (let lineIndex = 0; lineIndex < lines.length && matches.length < maxResults; lineIndex += 1) {
        if (regex.test(lines[lineIndex])) {
          matches.push(`${entryPath}:${lineIndex + 1}:${lines[lineIndex]}`);
        }
        regex.lastIndex = 0;
      }
    }
  }

  await walk(basePath);
  return matches.join("\n");
}

async function runRg(args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn("rg", args, {
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
    });

    Promise.all([collectStream(child.stdout, 20_000), collectStream(child.stderr, 20_000)])
      .then(([stdout, stderr]) => {
        child.on("close", (code) => {
          resolve({ code: code ?? 0, stdout, stderr });
        });
      })
      .catch(reject);

    child.on("error", reject);
  });
}

function stripHtml(text) {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchText(url, maxChars = 20_000) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "blaude/99.99.99-black.1",
    },
  });
  const rawText = await response.text();
  const contentType = response.headers.get("content-type") || "text/plain";
  const text = contentType.includes("html") ? stripHtml(rawText) : rawText;
  return {
    url: response.url,
    status: response.status,
    contentType,
    text: truncateText(text, maxChars),
  };
}

function parseDuckDuckGoResults(html, maxResults) {
  const results = [];
  const regex = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g;
  let match;
  while ((match = regex.exec(html)) !== null && results.length < maxResults) {
    const title = stripHtml(match[2]);
    const url = match[1];
    if (!title || !url) {
      continue;
    }
    results.push({ title, url });
  }
  return results;
}

function normalizeSkillSearchPaths(runtime) {
  const cwdPaths = [
    path.join(runtime.cwd, ".claude", "skills"),
    path.join(runtime.cwd, "skills"),
  ];
  const homePaths = [
    path.join(os.homedir(), ".codex", "skills"),
  ];
  return [...(runtime.skillPaths ?? []), ...cwdPaths, ...homePaths];
}

async function resolveSkillFile(runtime, skillNameOrPath) {
  if (!skillNameOrPath || typeof skillNameOrPath !== "string") {
    return null;
  }

  const directPath = resolvePath(runtime.cwd, skillNameOrPath);
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  const normalized = skillNameOrPath.endsWith(".md") ? skillNameOrPath : `${skillNameOrPath}.md`;
  for (const basePath of normalizeSkillSearchPaths(runtime)) {
    const candidate = path.join(basePath, normalized);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    const nestedCandidate = path.join(basePath, skillNameOrPath, "SKILL.md");
    if (fs.existsSync(nestedCandidate)) {
      return nestedCandidate;
    }
  }

  return null;
}

function formatPlan(plan) {
  const title = plan.title || "Untitled plan";
  const items = Array.isArray(plan.items) ? plan.items : [];
  return [
    `title: ${title}`,
    `updatedAt: ${plan.updatedAt ?? "<never>"}`,
    "",
    ...(items.length === 0
      ? ["No plan items."]
      : items.map((item, index) => `${index + 1}. [${item.status || "pending"}] ${item.step || item}`)),
  ].join("\n");
}

function normalizePlanItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }
  return items
    .map((item) => {
      if (typeof item === "string") {
        return { step: item, status: "pending" };
      }
      if (item && typeof item === "object") {
        return {
          step: typeof item.step === "string" ? item.step : "",
          status: typeof item.status === "string" ? item.status : "pending",
        };
      }
      return null;
    })
    .filter((item) => item && item.step);
}

function formatTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return "No tasks.";
  }
  return tasks
    .map((task) => `${task.status === "done" ? "[x]" : "[ ]"} ${task.id} ${task.text}`)
    .join("\n");
}

function formatTeams(teams) {
  if (!Array.isArray(teams) || teams.length === 0) {
    return "No teams.";
  }
  return teams
    .map((team) => `${team.name}: agent=${team.agent} model=${team.model || "<default>"} ${team.description || ""}`.trim())
    .join("\n");
}

async function runGitWorktree(runtime, args) {
  const command = `git worktree ${args.join(" ")}`;
  const result = await runLocalCommand(command, {
    cwd: runtime.cwd,
    env: runtime.env,
    shell: runtime.shell,
    timeoutMs: 120_000,
    maxOutputChars: 20_000,
  });
  return [
    `command: ${command}`,
    `exit_code: ${result.code}`,
    result.stdout ? `stdout:\n${result.stdout}` : "stdout: <empty>",
    result.stderr ? `stderr:\n${result.stderr}` : "stderr: <empty>",
  ].join("\n\n");
}

export function getAllToolDefinitions(runtime) {
  return [
    {
      name: "bash",
      description: "Run a shell command in the current workspace and return stdout/stderr.",
      input_schema: {
        type: "object",
        properties: {
          command: { type: "string" },
          cwd: { type: "string" },
          timeout_ms: { type: "number" },
          max_output_chars: { type: "number" },
        },
        required: ["command"],
      },
      async run(input) {
        const resolvedCwd = resolvePath(runtime.cwd, input.cwd || ".");
        const result = await runLocalCommand(input.command, {
          cwd: resolvedCwd,
          env: runtime.env,
          shell: runtime.shell,
          timeoutMs: Number.isFinite(input.timeout_ms) ? input.timeout_ms : 60_000,
          maxOutputChars: Number.isFinite(input.max_output_chars) ? input.max_output_chars : 12_000,
        });
        return [
          `cwd: ${resolvedCwd}`,
          `exit_code: ${result.code}`,
          result.signal ? `signal: ${result.signal}` : null,
          result.stdout ? `stdout:\n${result.stdout}` : "stdout: <empty>",
          result.stderr ? `stderr:\n${result.stderr}` : "stderr: <empty>",
        ]
          .filter(Boolean)
          .join("\n\n");
      },
    },
    {
      name: "list_dir",
      description: "List directory contents in the workspace.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
        },
      },
      async run(input) {
        const requestedPath = resolvePath(runtime.cwd, input.path || ".");
        const entries = await fsp.readdir(requestedPath, { withFileTypes: true });
        return formatDirectoryEntries(requestedPath, entries.slice(0, 500));
      },
    },
    {
      name: "read_file",
      description: "Read a UTF-8 text file with line numbers, start/end lines, or offset/limit.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
          start_line: { type: "number" },
          end_line: { type: "number" },
          offset: { type: "number" },
          limit: { type: "number" },
        },
        required: ["path"],
      },
      async run(input) {
        const filePath = resolvePath(runtime.cwd, input.path);
        const stat = await fsp.stat(filePath);
        if (stat.isDirectory()) {
          const entries = await fsp.readdir(filePath, { withFileTypes: true });
          return [
            `Path is a directory, not a file: ${filePath}`,
            "",
            "Directory contents:",
            formatDirectoryEntries(filePath, entries.slice(0, 200)),
            "",
            "Use list_dir for directory inspection or read_file on a specific file inside this directory.",
          ].join("\n");
        }
        const buffer = await fsp.readFile(filePath);
        if (buffer.includes(0)) {
          return `Binary file detected: ${filePath}`;
        }
        const text = buffer.toString("utf8");
        const lines = text.split("\n");
        const offset = Number.isFinite(input.offset) ? Math.max(0, Math.trunc(input.offset)) : null;
        const limit = Number.isFinite(input.limit) ? Math.max(1, Math.trunc(input.limit)) : null;
        const startLine = offset !== null
          ? offset + 1
          : Number.isFinite(input.start_line)
            ? Math.max(1, Math.trunc(input.start_line))
            : 1;
        const endLine = limit !== null
          ? Math.min(lines.length, startLine + limit - 1)
          : Number.isFinite(input.end_line)
            ? Math.max(startLine, Math.trunc(input.end_line))
            : lines.length;
        const excerpt = lines.slice(startLine - 1, endLine);
        return `${filePath}\n\n${addLineNumbers(excerpt.join("\n"), startLine)}`;
      },
    },
    {
      name: "write_file",
      description: "Write or append UTF-8 file content.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
          content: { type: "string" },
          append: { type: "boolean" },
          create_directories: { type: "boolean" },
        },
        required: ["path", "content"],
      },
      async run(input) {
        const filePath = resolvePath(runtime.cwd, input.path);
        if (input.create_directories !== false) {
          await fsp.mkdir(path.dirname(filePath), { recursive: true });
        }
        if (input.append) {
          await fsp.appendFile(filePath, input.content, "utf8");
          return `Appended ${input.content.length} characters to ${filePath}`;
        }
        await fsp.writeFile(filePath, input.content, "utf8");
        return `Wrote ${input.content.length} characters to ${filePath}`;
      },
    },
    {
      name: "edit_file",
      description: "Edit a file by replacing a target string.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
          old_string: { type: "string" },
          new_string: { type: "string" },
          replace_all: { type: "boolean" },
        },
        required: ["path", "old_string", "new_string"],
      },
      async run(input) {
        const filePath = resolvePath(runtime.cwd, input.path);
        const original = await fsp.readFile(filePath, "utf8");
        if (!original.includes(input.old_string)) {
          return `Target string was not found in ${filePath}`;
        }
        let next;
        let replacementCount = 0;
        if (input.replace_all) {
          replacementCount = original.split(input.old_string).length - 1;
          next = original.split(input.old_string).join(input.new_string);
        } else {
          replacementCount = 1;
          next = original.replace(input.old_string, input.new_string);
        }
        await fsp.writeFile(filePath, next, "utf8");
        return `Updated ${filePath} with ${replacementCount} replacement(s).`;
      },
    },
    {
      name: "glob",
      description: "Find files with a glob pattern, using rg when available.",
      input_schema: {
        type: "object",
        properties: {
          pattern: { type: "string" },
          path: { type: "string" },
        },
        required: ["pattern"],
      },
      async run(input) {
        const basePath = resolvePath(runtime.cwd, input.path || ".");
        try {
          const result = await runRg(["--files", basePath, "-g", input.pattern], runtime.cwd);
          return result.stdout.trim() || result.stderr.trim() || "No files matched.";
        } catch {
          const matches = [];
          async function walk(currentPath) {
            const entries = await fsp.readdir(currentPath, { withFileTypes: true });
            for (const entry of entries) {
              const entryPath = path.join(currentPath, entry.name);
              if (entry.isDirectory()) {
                if ([".git", "node_modules", "dist"].includes(entry.name)) {
                  continue;
                }
                await walk(entryPath);
              } else if (entryPath.includes(input.pattern.replaceAll("*", ""))) {
                matches.push(entryPath);
              }
              if (matches.length >= 500) {
                return;
              }
            }
          }
          await walk(basePath);
          return matches.join("\n") || "No files matched.";
        }
      },
    },
    {
      name: "grep",
      description: "Search file contents with ripgrep, falling back to a JS regex scan.",
      input_schema: {
        type: "object",
        properties: {
          pattern: { type: "string" },
          path: { type: "string" },
          case_sensitive: { type: "boolean" },
          max_results: { type: "number" },
        },
        required: ["pattern"],
      },
      async run(input) {
        const basePath = resolvePath(runtime.cwd, input.path || ".");
        const caseSensitive = !!input.case_sensitive;
        const maxResults = Number.isFinite(input.max_results) ? Math.max(1, Math.trunc(input.max_results)) : 200;
        try {
          const args = ["-n", "--max-count", String(maxResults)];
          if (!caseSensitive) {
            args.push("-i");
          }
          args.push(input.pattern, basePath);
          const result = await runRg(args, runtime.cwd);
          return result.stdout.trim() || result.stderr.trim() || "No matches found.";
        } catch {
          return (await grepFallback(input.pattern, basePath, caseSensitive, maxResults)) || "No matches found.";
        }
      },
    },
    {
      name: "web_fetch",
      description: "Fetch a web page or text resource and return text content.",
      input_schema: {
        type: "object",
        properties: {
          url: { type: "string" },
          max_chars: { type: "number" },
        },
        required: ["url"],
      },
      async run(input) {
        const result = await fetchText(input.url, Number.isFinite(input.max_chars) ? Math.trunc(input.max_chars) : 20_000);
        return [
          `url: ${result.url}`,
          `status: ${result.status}`,
          `content_type: ${result.contentType}`,
          "",
          result.text || "<empty>",
        ].join("\n");
      },
    },
    {
      name: "web_search",
      description: "Search the web and return top result URLs and titles.",
      input_schema: {
        type: "object",
        properties: {
          query: { type: "string" },
          max_results: { type: "number" },
          search_url: { type: "string" },
        },
        required: ["query"],
      },
      async run(input) {
        const maxResults = Number.isFinite(input.max_results) ? Math.max(1, Math.min(10, Math.trunc(input.max_results))) : 5;
        const url =
          typeof input.search_url === "string" && input.search_url.trim()
            ? input.search_url.trim()
            : `https://html.duckduckgo.com/html/?q=${encodeURIComponent(input.query)}`;
        const response = await fetch(url, {
          headers: {
            "user-agent": "blaude/99.99.99-black.1",
          },
        });
        const html = await response.text();
        const results = parseDuckDuckGoResults(html, maxResults);
        if (results.length === 0) {
          return "No search results found.";
        }
        return results.map((result, index) => `${index + 1}. ${result.title}\n${result.url}`).join("\n\n");
      },
    },
    {
      name: "mcp_list_servers",
      description: "List configured MCP servers.",
      input_schema: {
        type: "object",
        properties: {},
      },
      async run() {
        const servers = runtime.mcpManager.listServers();
        if (servers.length === 0) {
          return "No MCP servers configured.";
        }
        return servers
          .map((server) => `${server.name}: ${server.command} ${server.args.join(" ")}`.trim())
          .join("\n");
      },
    },
    {
      name: "mcp_list_tools",
      description: "List tools exposed by a configured MCP server.",
      input_schema: {
        type: "object",
        properties: {
          server: { type: "string" },
        },
        required: ["server"],
      },
      async run(input) {
        const tools = await runtime.mcpManager.listTools(input.server);
        if (tools.length === 0) {
          return `No tools exposed by MCP server ${input.server}.`;
        }
        return tools
          .map((tool) => `${tool.name}: ${tool.description || "No description"}`)
          .join("\n");
      },
    },
    {
      name: "mcp_call_tool",
      description: "Call an MCP tool on a configured server.",
      input_schema: {
        type: "object",
        properties: {
          server: { type: "string" },
          tool: { type: "string" },
          arguments: { type: "object" },
        },
        required: ["server", "tool"],
      },
      async run(input) {
        const result = await runtime.mcpManager.callTool(input.server, input.tool, input.arguments ?? {});
        return JSON.stringify(result, null, 2);
      },
    },
    {
      name: "skill",
      description: "Load a local skill file or SKILL.md document.",
      input_schema: {
        type: "object",
        properties: {
          skill: { type: "string" },
        },
        required: ["skill"],
      },
      async run(input) {
        const skillPath = await resolveSkillFile(runtime, input.skill);
        if (!skillPath) {
          return `Skill not found: ${input.skill}`;
        }
        const content = await fsp.readFile(skillPath, "utf8");
        return `${skillPath}\n\n${truncateText(content, 20_000)}`;
      },
    },
    {
      name: "plan",
      description: "Create, append, show, or clear the persistent workspace plan.",
      input_schema: {
        type: "object",
        properties: {
          action: { type: "string" },
          title: { type: "string" },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                step: { type: "string" },
                status: { type: "string" },
              },
            },
          },
        },
      },
      async run(input) {
        const plan = await loadPlan(runtime.statePaths);
        const action = typeof input.action === "string" ? input.action : "show";

        if (action === "clear") {
          await savePlan(runtime.statePaths, { title: "", items: [], updatedAt: new Date().toISOString() });
          return "Plan cleared.";
        }

        if (action === "create") {
          const nextPlan = {
            title: typeof input.title === "string" ? input.title : plan.title,
            items: normalizePlanItems(input.items),
            updatedAt: new Date().toISOString(),
          };
          await savePlan(runtime.statePaths, nextPlan);
          return formatPlan(nextPlan);
        }

        if (action === "append") {
          const nextPlan = {
            title: typeof input.title === "string" ? input.title : plan.title,
            items: [...plan.items, ...normalizePlanItems(input.items)],
            updatedAt: new Date().toISOString(),
          };
          await savePlan(runtime.statePaths, nextPlan);
          return formatPlan(nextPlan);
        }

        return formatPlan(plan);
      },
    },
    {
      name: "worktree_list",
      description: "List git worktrees for the current repository.",
      input_schema: {
        type: "object",
        properties: {},
      },
      async run() {
        return runGitWorktree(runtime, ["list", "--porcelain"]);
      },
    },
    {
      name: "worktree_create",
      description: "Create a git worktree for a branch or detached HEAD.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
          branch: { type: "string" },
          ref: { type: "string" },
          detach: { type: "boolean" },
        },
        required: ["path"],
      },
      async run(input) {
        const args = ["add"];
        if (input.detach) {
          args.push("--detach");
        } else if (typeof input.branch === "string" && input.branch.trim()) {
          args.push("-b", input.branch.trim());
        }
        args.push(resolvePath(runtime.cwd, input.path));
        if (typeof input.ref === "string" && input.ref.trim()) {
          args.push(input.ref.trim());
        }
        return runGitWorktree(runtime, args);
      },
    },
    {
      name: "worktree_remove",
      description: "Remove a git worktree path.",
      input_schema: {
        type: "object",
        properties: {
          path: { type: "string" },
          force: { type: "boolean" },
        },
        required: ["path"],
      },
      async run(input) {
        const args = ["remove"];
        if (input.force) {
          args.push("--force");
        }
        args.push(resolvePath(runtime.cwd, input.path));
        return runGitWorktree(runtime, args);
      },
    },
    {
      name: "team_create",
      description: "Create or update a named team member backed by an agent profile.",
      input_schema: {
        type: "object",
        properties: {
          name: { type: "string" },
          agent: { type: "string" },
          model: { type: "string" },
          description: { type: "string" },
        },
        required: ["name", "agent"],
      },
      async run(input) {
        const teams = await loadTeams(runtime.statePaths);
        const existing = teams.find((team) => team.name === input.name);
        const next = {
          name: input.name,
          agent: input.agent,
          model: typeof input.model === "string" ? input.model : null,
          description: typeof input.description === "string" ? input.description : "",
        };
        if (existing) {
          Object.assign(existing, next);
        } else {
          teams.push(next);
        }
        await saveTeams(runtime.statePaths, teams);
        return formatTeams(teams);
      },
    },
    {
      name: "team_run",
      description: "Run a task through a named team member definition.",
      input_schema: {
        type: "object",
        properties: {
          name: { type: "string" },
          task: { type: "string" },
        },
        required: ["name", "task"],
      },
      async run(input) {
        const teams = await loadTeams(runtime.statePaths);
        const team = teams.find((item) => item.name === input.name);
        if (!team) {
          return `Unknown team member: ${input.name}`;
        }
        return runtime.runSubAgent({
          task: input.task,
          agent: team.agent,
          model: team.model || undefined,
        });
      },
    },
    {
      name: "team_delete",
      description: "Delete a named team member definition.",
      input_schema: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
        required: ["name"],
      },
      async run(input) {
        const teams = await loadTeams(runtime.statePaths);
        const remaining = teams.filter((team) => team.name !== input.name);
        await saveTeams(runtime.statePaths, remaining);
        return formatTeams(remaining);
      },
    },
    {
      name: "task_create",
      description: "Create a persistent workspace task.",
      input_schema: {
        type: "object",
        properties: {
          text: { type: "string" },
        },
        required: ["text"],
      },
      async run(input) {
        const tasks = await loadTasks(runtime.statePaths);
        const nextId = tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1;
        tasks.push({
          id: nextId,
          text: input.text,
          status: "open",
          createdAt: new Date().toISOString(),
        });
        await saveTasks(runtime.statePaths, tasks);
        return formatTasks(tasks);
      },
    },
    {
      name: "task_update",
      description: "Update or remove a persistent workspace task.",
      input_schema: {
        type: "object",
        properties: {
          id: { type: "number" },
          status: { type: "string" },
          text: { type: "string" },
          remove: { type: "boolean" },
        },
        required: ["id"],
      },
      async run(input) {
        const tasks = await loadTasks(runtime.statePaths);
        if (input.remove) {
          const remaining = tasks.filter((task) => task.id !== input.id);
          await saveTasks(runtime.statePaths, remaining);
          return formatTasks(remaining);
        }

        const task = tasks.find((item) => item.id === input.id);
        if (!task) {
          return `Task ${input.id} not found.`;
        }
        if (typeof input.status === "string" && input.status.trim()) {
          task.status = input.status.trim();
        }
        if (typeof input.text === "string" && input.text.trim()) {
          task.text = input.text.trim();
        }
        task.updatedAt = new Date().toISOString();
        await saveTasks(runtime.statePaths, tasks);
        return formatTasks(tasks);
      },
    },
    {
      name: "task_list",
      description: "List persistent workspace tasks.",
      input_schema: {
        type: "object",
        properties: {},
      },
      async run() {
        const tasks = await loadTasks(runtime.statePaths);
        return formatTasks(tasks);
      },
    },
    {
      name: "compact_context",
      description: "Compact the active agent conversation into a continuation summary.",
      input_schema: {
        type: "object",
        properties: {},
      },
      async run() {
        return runtime.compactConversation();
      },
    },
    {
      name: "session_history",
      description: "Read recent JSONL session history entries.",
      input_schema: {
        type: "object",
        properties: {
          limit: { type: "number" },
        },
      },
      async run(input) {
        const limit = Number.isFinite(input.limit) ? Math.max(1, Math.min(500, Math.trunc(input.limit))) : 50;
        const entries = await readJsonlFile(runtime.statePaths.sessionJsonlFile, limit);
        return entries.length === 0 ? "No session history entries." : JSON.stringify(entries, null, 2);
      },
    },
    {
      name: "agent",
      description: "Delegate a bounded task to a sub-agent with its own tool loop.",
      input_schema: {
        type: "object",
        properties: {
          task: { type: "string" },
          agent: { type: "string" },
          model: { type: "string" },
          max_turns: { type: "number" },
        },
        required: ["task"],
      },
      async run(input) {
        return runtime.runSubAgent({
          task: input.task,
          agent: input.agent,
          model: input.model,
          maxTurns: Number.isFinite(input.max_turns) ? Math.trunc(input.max_turns) : undefined,
        });
      },
    },
  ];
}

export function getToolNames() {
  return [...BUILTIN_TOOL_NAMES];
}

export function resolveToolSelection(agentDefinition, toolDefinitions, depth = 0) {
  const allowedNames = new Set(agentDefinition?.tools ?? getToolNames());
  if (depth >= 2) {
    allowedNames.delete("agent");
  }
  return toolDefinitions.filter((tool) => allowedNames.has(tool.name));
}
