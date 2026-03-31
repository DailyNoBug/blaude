import fs from "fs";
import fsp from "fs/promises";
import path from "path";

export function getProjectStatePaths(cwd) {
  const baseDir = path.join(cwd, ".claude", "blaude");
  const legacyBaseDir = path.join(cwd, ".claude", "black-code");

  return {
    baseDir,
    legacyBaseDir,
    sessionFile: path.join(baseDir, "session.json"),
    sessionJsonlFile: path.join(baseDir, "session.jsonl"),
    tasksFile: path.join(baseDir, "tasks.json"),
    planFile: path.join(baseDir, "plan.json"),
    teamsFile: path.join(baseDir, "teams.json"),
    memoryFile: path.join(baseDir, "memory.md"),
    historyFile: path.join(baseDir, "history.json"),
    runtimeLogFile: path.join(baseDir, "runtime.log"),
    legacySessionFile: path.join(legacyBaseDir, "session.json"),
    legacySessionJsonlFile: path.join(legacyBaseDir, "session.jsonl"),
    legacyTasksFile: path.join(legacyBaseDir, "tasks.json"),
    legacyPlanFile: path.join(legacyBaseDir, "plan.json"),
    legacyTeamsFile: path.join(legacyBaseDir, "teams.json"),
    legacyMemoryFile: path.join(legacyBaseDir, "memory.md"),
    legacyHistoryFile: path.join(legacyBaseDir, "history.json"),
    legacyRuntimeLogFile: path.join(legacyBaseDir, "runtime.log"),
  };
}

export async function ensureProjectStateDir(paths) {
  await fsp.mkdir(paths.baseDir, { recursive: true });
  const legacyPairs = [
    [paths.legacySessionFile, paths.sessionFile],
    [paths.legacySessionJsonlFile, paths.sessionJsonlFile],
    [paths.legacyTasksFile, paths.tasksFile],
    [paths.legacyPlanFile, paths.planFile],
    [paths.legacyTeamsFile, paths.teamsFile],
    [paths.legacyMemoryFile, paths.memoryFile],
    [paths.legacyHistoryFile, paths.historyFile],
    [paths.legacyRuntimeLogFile, paths.runtimeLogFile],
  ];
  for (const [legacyFile, nextFile] of legacyPairs) {
    if (fs.existsSync(legacyFile) && !fs.existsSync(nextFile)) {
      await fsp.copyFile(legacyFile, nextFile);
    }
  }
}

export async function readJsonFile(filePath, fallback) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }
  try {
    const raw = await fsp.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export async function writeJsonFile(filePath, value) {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function readTextFile(filePath, fallback = "") {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }
  try {
    return await fsp.readFile(filePath, "utf8");
  } catch {
    return fallback;
  }
}

export async function writeTextFile(filePath, text) {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.writeFile(filePath, text, "utf8");
}

export async function appendJsonlRecord(filePath, value) {
  await fsp.mkdir(path.dirname(filePath), { recursive: true });
  await fsp.appendFile(filePath, `${JSON.stringify(value)}\n`, "utf8");
}

export async function readJsonlFile(filePath, limit = 200) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const raw = await fsp.readFile(filePath, "utf8");
    return raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .slice(-limit);
  } catch {
    return [];
  }
}

export async function loadSession(paths) {
  const session = await readJsonFile(paths.sessionFile, {});
  return {
    recentActivity: Array.isArray(session.recentActivity) ? session.recentActivity : [],
    compactionNotes: Array.isArray(session.compactionNotes) ? session.compactionNotes : [],
    lastStartedAt: typeof session.lastStartedAt === "string" ? session.lastStartedAt : null,
    lastModel: typeof session.lastModel === "string" ? session.lastModel : null,
    lastAgent: typeof session.lastAgent === "string" ? session.lastAgent : null,
  };
}

export async function saveSession(paths, session) {
  return writeJsonFile(paths.sessionFile, {
    recentActivity: Array.isArray(session.recentActivity) ? session.recentActivity.slice(-12) : [],
    compactionNotes: Array.isArray(session.compactionNotes) ? session.compactionNotes.slice(-4) : [],
    lastStartedAt: session.lastStartedAt ?? null,
    lastModel: session.lastModel ?? null,
    lastAgent: session.lastAgent ?? null,
  });
}

export function pushRecentActivity(session, entry) {
  const nextEntry = {
    time: new Date().toISOString(),
    label: typeof entry.label === "string" ? entry.label : "",
    kind: typeof entry.kind === "string" ? entry.kind : "event",
  };
  session.recentActivity = [...(session.recentActivity ?? []), nextEntry].slice(-12);
  return session.recentActivity;
}

export function formatRecentActivityEntries(entries, maxItems = 5) {
  const selected = (entries ?? []).slice(-maxItems).reverse();
  if (selected.length === 0) {
    return ["No recent activity"];
  }
  return selected.map((entry) => {
    const time = typeof entry.time === "string" ? entry.time.slice(11, 16) : "--:--";
    return `${time}  ${entry.label || entry.kind || "activity"}`;
  });
}

export async function loadTasks(paths) {
  const tasks = await readJsonFile(paths.tasksFile, []);
  return Array.isArray(tasks) ? tasks : [];
}

export async function saveTasks(paths, tasks) {
  return writeJsonFile(paths.tasksFile, tasks);
}

export async function loadPlan(paths) {
  const plan = await readJsonFile(paths.planFile, {
    title: "",
    updatedAt: null,
    items: [],
  });
  return {
    title: typeof plan.title === "string" ? plan.title : "",
    updatedAt: typeof plan.updatedAt === "string" ? plan.updatedAt : null,
    items: Array.isArray(plan.items) ? plan.items : [],
  };
}

export async function savePlan(paths, plan) {
  return writeJsonFile(paths.planFile, {
    title: typeof plan.title === "string" ? plan.title : "",
    updatedAt: typeof plan.updatedAt === "string" ? plan.updatedAt : new Date().toISOString(),
    items: Array.isArray(plan.items) ? plan.items : [],
  });
}

export async function loadTeams(paths) {
  const teams = await readJsonFile(paths.teamsFile, []);
  return Array.isArray(teams) ? teams : [];
}

export async function saveTeams(paths, teams) {
  return writeJsonFile(paths.teamsFile, Array.isArray(teams) ? teams : []);
}

export async function loadInputHistory(paths) {
  const history = await readJsonFile(paths.historyFile, []);
  return Array.isArray(history) ? history.filter((entry) => typeof entry === "string" && entry.trim()) : [];
}

export async function saveInputHistory(paths, history) {
  const normalized = Array.isArray(history)
    ? history.filter((entry) => typeof entry === "string" && entry.trim()).slice(-200)
    : [];
  return writeJsonFile(paths.historyFile, normalized);
}

export async function readMemory(paths) {
  return readTextFile(paths.memoryFile, "");
}

export async function writeMemory(paths, text) {
  return writeTextFile(paths.memoryFile, text);
}

export async function appendMemory(paths, text) {
  const existing = await readMemory(paths);
  const prefix = existing.trim() ? `${existing.trimEnd()}\n` : "# Memory\n\n";
  const line = `- ${new Date().toISOString()} ${text}\n`;
  await writeMemory(paths, `${prefix}${line}`);
}
