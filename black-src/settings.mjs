import fs from "fs";
import os from "os";
import path from "path";

import { buildAgentCatalog } from "./agents.mjs";
import { createCanUseTool } from "./permissions.mjs";
import { BLACK_VERSION } from "./version.mjs";

function isFlag(value, ...names) {
  return names.includes(value);
}

function readTextIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

function parseInteger(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function stringifyEnv(env = {}) {
  return Object.fromEntries(Object.entries(env).map(([key, value]) => [key, String(value)]));
}

export function parseCliArgs(argv = []) {
  const options = {
    prompt: null,
    settingsPath: null,
    model: null,
    agent: null,
    cwd: null,
    system: null,
    maxTurns: null,
    help: false,
    version: false,
    debug: false,
    dryRun: false,
    listAgents: false,
    listTools: false,
    noColor: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (isFlag(arg, "-h", "--help")) {
      options.help = true;
      continue;
    }
    if (isFlag(arg, "-v", "--version")) {
      options.version = true;
      continue;
    }
    if (isFlag(arg, "--debug")) {
      options.debug = true;
      continue;
    }
    if (isFlag(arg, "--dry-run")) {
      options.dryRun = true;
      continue;
    }
    if (isFlag(arg, "--list-agents")) {
      options.listAgents = true;
      continue;
    }
    if (isFlag(arg, "--list-tools")) {
      options.listTools = true;
      continue;
    }
    if (isFlag(arg, "--no-color")) {
      options.noColor = true;
      continue;
    }

    if (isFlag(arg, "-p", "--prompt")) {
      options.prompt = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (arg.startsWith("--prompt=")) {
      options.prompt = arg.slice("--prompt=".length);
      continue;
    }

    if (arg === "--settings") {
      options.settingsPath = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (arg.startsWith("--settings=")) {
      options.settingsPath = arg.slice("--settings=".length);
      continue;
    }

    if (arg === "--model") {
      options.model = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (arg.startsWith("--model=")) {
      options.model = arg.slice("--model=".length);
      continue;
    }

    if (arg === "--agent") {
      options.agent = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (arg.startsWith("--agent=")) {
      options.agent = arg.slice("--agent=".length);
      continue;
    }

    if (arg === "--cwd") {
      options.cwd = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (arg.startsWith("--cwd=")) {
      options.cwd = arg.slice("--cwd=".length);
      continue;
    }

    if (arg === "--system") {
      options.system = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (arg.startsWith("--system=")) {
      options.system = arg.slice("--system=".length);
      continue;
    }

    if (arg === "--max-turns") {
      options.maxTurns = parseInteger(argv[index + 1], null);
      index += 1;
      continue;
    }
    if (arg.startsWith("--max-turns=")) {
      options.maxTurns = parseInteger(arg.slice("--max-turns=".length), null);
      continue;
    }
  }

  return options;
}

export function loadSettingsFile(settingsPath) {
  if (!settingsPath || !fs.existsSync(settingsPath)) {
    return { exists: false, path: settingsPath, data: {} };
  }

  const raw = fs.readFileSync(settingsPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Settings file must contain a JSON object: ${settingsPath}`);
  }
  return { exists: true, path: settingsPath, data: parsed };
}

function expandUserPath(inputPath, baseCwd) {
  if (!inputPath) {
    return null;
  }
  if (inputPath === "~") {
    return os.homedir();
  }
  if (inputPath.startsWith("~/")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return path.resolve(baseCwd, inputPath);
}

function getDefaultSettingsCandidates(baseCwd) {
  const home = os.homedir();
  return [
    path.resolve(baseCwd, ".claude/settings.json"),
    path.resolve(baseCwd, ".cursor/settings.json"),
    path.join(home, ".claude/settings.json"),
    path.join(home, ".cursor/settings.json"),
    path.join(home, "Library/Application Support/Cursor/User/settings.json"),
  ];
}

function resolveSettingsPath(cliOptions, baseCwd) {
  if (cliOptions.settingsPath) {
    return expandUserPath(cliOptions.settingsPath, baseCwd);
  }

  for (const candidate of getDefaultSettingsCandidates(baseCwd)) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return getDefaultSettingsCandidates(baseCwd)[0];
}

function normalizeInstructions(data) {
  if (typeof data.instructions === "string") {
    return data.instructions;
  }
  if (typeof data.systemPrompt === "string") {
    return data.systemPrompt;
  }
  if (typeof data.system === "string") {
    return data.system;
  }
  return "";
}

function normalizeSkillPaths(value, cwd) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter((item) => typeof item === "string" && item.trim())
    .map((item) => expandUserPath(item, cwd))
    .filter(Boolean);
}

export function resolveRuntimeConfig(cliOptions, baseCwd = process.cwd()) {
  const settingsPath = resolveSettingsPath(cliOptions, baseCwd);
  const settingsFile = loadSettingsFile(settingsPath);
  const settings = settingsFile.data;

  const cwd = path.resolve(
    baseCwd,
    cliOptions.cwd || settings.cwd || ".",
  );

  const env = {
    ...process.env,
    ...stringifyEnv(settings.env ?? {}),
  };

  const claudeMdPath = path.resolve(cwd, "CLAUDE.md");
  const workspaceInstructions = readTextIfExists(claudeMdPath) ?? "";
  const settingsInstructions = normalizeInstructions(settings);
  const agentCatalog = buildAgentCatalog(settings.agents);
  const permissions = settings.permissions && typeof settings.permissions === "object" ? settings.permissions : {};

  return {
    cliOptions,
    baseCwd,
    cwd,
    shell: process.env.SHELL || "/bin/zsh",
    env,
    settingsPath,
    settingsExists: settingsFile.exists,
    settings,
    workspaceInstructions,
    settingsInstructions,
    claudeMdPath,
    model: cliOptions.model || settings.model || null,
    defaultAgent: cliOptions.agent || settings.agent || "general-purpose",
    maxTurns:
      cliOptions.maxTurns ??
      (Number.isFinite(settings.maxTurns) ? Math.trunc(settings.maxTurns) : 24),
    maxTokens:
      Number.isFinite(settings.maxTokens) && settings.maxTokens > 0
        ? Math.trunc(settings.maxTokens)
        : 4096,
    temperature:
      typeof settings.temperature === "number" ? settings.temperature : undefined,
    thinking:
      settings.thinking && typeof settings.thinking === "object" ? settings.thinking : undefined,
    extraSystem: cliOptions.system || "",
    debug: cliOptions.debug,
    noColor: cliOptions.noColor,
    agentCatalog,
    permissions,
    canUseTool: createCanUseTool(permissions),
    mcpServers:
      settings.mcpServers && typeof settings.mcpServers === "object"
        ? settings.mcpServers
        : settings.mcp && typeof settings.mcp === "object"
          ? settings.mcp
          : {},
    skillPaths: normalizeSkillPaths(settings.skillPaths, cwd),
    streamResponses: settings.streamResponses !== false,
  };
}

export function summarizeRuntimeConfig(config, providerContext) {
  return {
    version: BLACK_VERSION,
    cwd: config.cwd,
    shell: config.shell,
    settingsPath: config.settingsPath,
    settingsExists: config.settingsExists,
    model: providerContext.model,
    provider: providerContext.provider,
    defaultAgent: config.defaultAgent,
    maxTurns: config.maxTurns,
    maxTokens: config.maxTokens,
    claudeMdPath: config.workspaceInstructions ? config.claudeMdPath : null,
    availableAgents: Array.from(config.agentCatalog.keys()),
  };
}
