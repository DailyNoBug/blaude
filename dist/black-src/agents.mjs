import { getToolNames } from "./tools.mjs";

const ALL_TOOLS = getToolNames();
const READ_ONLY_TOOLS = [
  "list_dir",
  "glob",
  "grep",
  "read_file",
  "web_fetch",
  "web_search",
  "session_history",
  "mcp_list_servers",
  "mcp_list_tools",
  "skill",
  "bash",
];

const BUILTIN_AGENT_DEFINITIONS = {
  "general-purpose": {
    name: "general-purpose",
    description: "Balanced coding agent for analysis, editing, and shell work.",
    prompt: [
      "You are a terminal-based software engineering agent.",
      "Work end-to-end when possible: inspect, edit, run commands, and verify.",
      "Prefer reading the codebase before making assumptions.",
      "When editing, keep changes minimal and preserve user intent.",
      "For repository-analysis requests, inspect a few representative files and then synthesize instead of touring every folder.",
    ].join(" "),
    tools: [...ALL_TOOLS],
    maxTurns: 20,
  },
  planner: {
    name: "planner",
    description: "Planning-heavy agent that decomposes work before acting.",
    prompt: [
      "You are a planning-focused coding agent.",
      "Start by clarifying the task structure, risks, and execution order.",
      "Use tools when needed, but optimize for crisp plans and summaries.",
    ].join(" "),
    tools: [...ALL_TOOLS],
    maxTurns: 18,
  },
  explorer: {
    name: "explorer",
    description: "Read-only repository explorer for codebase investigation.",
    prompt: [
      "You are a read-focused repository explorer.",
      "Inspect files, search the tree, explain behavior, and avoid edits unless explicitly necessary.",
      "Aim for high signal: use a small number of representative files, avoid redundant listing, and conclude once the architecture is clear.",
    ].join(" "),
    tools: [...READ_ONLY_TOOLS],
    maxTurns: 12,
  },
  reviewer: {
    name: "reviewer",
    description: "Code review agent focused on correctness, regressions, and test gaps.",
    prompt: [
      "You are a code review agent.",
      "Prioritize bugs, behavioral regressions, risky assumptions, and missing tests.",
      "Be concrete and reference code precisely.",
    ].join(" "),
    tools: [...READ_ONLY_TOOLS],
    maxTurns: 18,
  },
  editor: {
    name: "editor",
    description: "Implementation-focused agent optimized for file changes.",
    prompt: [
      "You are an implementation-focused coding agent.",
      "Bias toward making the requested edits cleanly and verifying with targeted commands.",
    ].join(" "),
    tools: [...ALL_TOOLS],
    maxTurns: 20,
  },
};

function normalizeToolList(value, fallback) {
  if (!Array.isArray(value)) {
    return fallback;
  }
  return value.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
}

function normalizeAgentDefinition(name, value = {}) {
  const safeName = typeof name === "string" && name.trim() ? name.trim() : "unnamed-agent";
  return {
    name: safeName,
    description: typeof value.description === "string" ? value.description : "",
    prompt: typeof value.prompt === "string" ? value.prompt : "",
    tools: normalizeToolList(value.tools, BUILTIN_AGENT_DEFINITIONS["general-purpose"].tools),
    maxTurns:
      Number.isFinite(value.maxTurns) && value.maxTurns > 0
        ? Math.min(64, Math.trunc(value.maxTurns))
        : BUILTIN_AGENT_DEFINITIONS["general-purpose"].maxTurns,
    model: typeof value.model === "string" && value.model.trim() ? value.model.trim() : null,
  };
}

export function getBuiltinAgents() {
  return Object.values(BUILTIN_AGENT_DEFINITIONS).map((agent) => ({ ...agent, tools: [...agent.tools] }));
}

export function normalizeCustomAgents(rawAgents) {
  if (!rawAgents) {
    return [];
  }

  if (Array.isArray(rawAgents)) {
    return rawAgents
      .filter((agent) => agent && typeof agent === "object")
      .map((agent, index) =>
        normalizeAgentDefinition(
          typeof agent.name === "string" ? agent.name : `custom-agent-${index + 1}`,
          agent,
        ),
      );
  }

  if (typeof rawAgents === "object") {
    return Object.entries(rawAgents)
      .filter(([, value]) => value && typeof value === "object")
      .map(([name, value]) => normalizeAgentDefinition(name, value));
  }

  return [];
}

export function buildAgentCatalog(rawAgents) {
  const catalog = new Map();
  for (const agent of getBuiltinAgents()) {
    catalog.set(agent.name, agent);
  }
  for (const agent of normalizeCustomAgents(rawAgents)) {
    catalog.set(agent.name, agent);
  }
  return catalog;
}

export function resolveAgent(catalog, requestedAgent) {
  if (requestedAgent && catalog.has(requestedAgent)) {
    return catalog.get(requestedAgent);
  }
  return catalog.get("general-purpose");
}
