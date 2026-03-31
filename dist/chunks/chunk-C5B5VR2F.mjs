#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  TEAM_LEAD_NAME,
  init_constants
} from "./chunk-27EOXKZU.mjs";
import {
  getAgentName,
  getTeamName,
  getTeammateContext,
  init_array,
  init_lockfile,
  init_teammate,
  init_teammateContext,
  isTeammate,
  lock
} from "./chunk-GC6TKYZ3.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  gitExe,
  init_git
} from "./chunk-7SC6PTLR.mjs";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  getErrnoCode,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  createSignal,
  getIsNonInteractiveSession,
  getSessionCreatedTeams,
  getSessionId,
  init_signal,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  getTeamsDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/tasks.ts
import { mkdir, readdir, readFile, unlink, writeFile } from "fs/promises";
import { join } from "path";
function setLeaderTeamName(teamName) {
  if (leaderTeamName === teamName) return;
  leaderTeamName = teamName;
  notifyTasksUpdated();
}
function clearLeaderTeamName() {
  if (leaderTeamName === void 0) return;
  leaderTeamName = void 0;
  notifyTasksUpdated();
}
function notifyTasksUpdated() {
  try {
    tasksUpdated.emit();
  } catch {
  }
}
function getHighWaterMarkPath(taskListId) {
  return join(getTasksDir(taskListId), HIGH_WATER_MARK_FILE);
}
async function readHighWaterMark(taskListId) {
  const path = getHighWaterMarkPath(taskListId);
  try {
    const content = (await readFile(path, "utf-8")).trim();
    const value = parseInt(content, 10);
    return isNaN(value) ? 0 : value;
  } catch {
    return 0;
  }
}
async function writeHighWaterMark(taskListId, value) {
  const path = getHighWaterMarkPath(taskListId);
  await writeFile(path, String(value));
}
function isTodoV2Enabled() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_TASKS)) {
    return true;
  }
  return !getIsNonInteractiveSession();
}
async function resetTaskList(taskListId) {
  const dir = getTasksDir(taskListId);
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const currentHighest = await findHighestTaskIdFromFiles(taskListId);
    if (currentHighest > 0) {
      const existingMark = await readHighWaterMark(taskListId);
      if (currentHighest > existingMark) {
        await writeHighWaterMark(taskListId, currentHighest);
      }
    }
    let files;
    try {
      files = await readdir(dir);
    } catch {
      files = [];
    }
    for (const file of files) {
      if (file.endsWith(".json") && !file.startsWith(".")) {
        const filePath = join(dir, file);
        try {
          await unlink(filePath);
        } catch {
        }
      }
    }
    notifyTasksUpdated();
  } finally {
    if (release) {
      await release();
    }
  }
}
function getTaskListId() {
  if (process.env.CLAUDE_CODE_TASK_LIST_ID) {
    return process.env.CLAUDE_CODE_TASK_LIST_ID;
  }
  const teammateCtx = getTeammateContext();
  if (teammateCtx) {
    return teammateCtx.teamName;
  }
  return getTeamName() || leaderTeamName || getSessionId();
}
function sanitizePathComponent(input) {
  return input.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function getTasksDir(taskListId) {
  return join(
    getClaudeConfigHomeDir(),
    "tasks",
    sanitizePathComponent(taskListId)
  );
}
function getTaskPath(taskListId, taskId) {
  return join(getTasksDir(taskListId), `${sanitizePathComponent(taskId)}.json`);
}
async function ensureTasksDir(taskListId) {
  const dir = getTasksDir(taskListId);
  try {
    await mkdir(dir, { recursive: true });
  } catch {
  }
}
async function findHighestTaskIdFromFiles(taskListId) {
  const dir = getTasksDir(taskListId);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return 0;
  }
  let highest = 0;
  for (const file of files) {
    if (!file.endsWith(".json")) {
      continue;
    }
    const taskId = parseInt(file.replace(".json", ""), 10);
    if (!isNaN(taskId) && taskId > highest) {
      highest = taskId;
    }
  }
  return highest;
}
async function findHighestTaskId(taskListId) {
  const [fromFiles, fromMark] = await Promise.all([
    findHighestTaskIdFromFiles(taskListId),
    readHighWaterMark(taskListId)
  ]);
  return Math.max(fromFiles, fromMark);
}
async function createTask(taskListId, taskData) {
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const highestId = await findHighestTaskId(taskListId);
    const id = String(highestId + 1);
    const task = { id, ...taskData };
    const path = getTaskPath(taskListId, id);
    await writeFile(path, jsonStringify(task, null, 2));
    notifyTasksUpdated();
    return id;
  } finally {
    if (release) {
      await release();
    }
  }
}
async function getTask(taskListId, taskId) {
  const path = getTaskPath(taskListId, taskId);
  try {
    const content = await readFile(path, "utf-8");
    const data = jsonParse(content);
    if (process.env.USER_TYPE === "ant") {
      if (data.status === "open") data.status = "pending";
      else if (data.status === "resolved") data.status = "completed";
      else if (data.status && ["planning", "implementing", "reviewing", "verifying"].includes(
        data.status
      )) {
        data.status = "in_progress";
      }
    }
    const parsed = TaskSchema().safeParse(data);
    if (!parsed.success) {
      logForDebugging(
        `[Tasks] Task ${taskId} failed schema validation: ${parsed.error.message}`
      );
      return null;
    }
    return parsed.data;
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT") {
      return null;
    }
    logForDebugging(`[Tasks] Failed to read task ${taskId}: ${errorMessage(e)}`);
    logError(e);
    return null;
  }
}
async function updateTaskUnsafe(taskListId, taskId, updates) {
  const existing = await getTask(taskListId, taskId);
  if (!existing) {
    return null;
  }
  const updated = { ...existing, ...updates, id: taskId };
  const path = getTaskPath(taskListId, taskId);
  await writeFile(path, jsonStringify(updated, null, 2));
  notifyTasksUpdated();
  return updated;
}
async function updateTask(taskListId, taskId, updates) {
  const path = getTaskPath(taskListId, taskId);
  const taskBeforeLock = await getTask(taskListId, taskId);
  if (!taskBeforeLock) {
    return null;
  }
  let release;
  try {
    release = await lock(path, LOCK_OPTIONS);
    return await updateTaskUnsafe(taskListId, taskId, updates);
  } finally {
    await release?.();
  }
}
async function deleteTask(taskListId, taskId) {
  const path = getTaskPath(taskListId, taskId);
  try {
    const numericId = parseInt(taskId, 10);
    if (!isNaN(numericId)) {
      const currentMark = await readHighWaterMark(taskListId);
      if (numericId > currentMark) {
        await writeHighWaterMark(taskListId, numericId);
      }
    }
    try {
      await unlink(path);
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        return false;
      }
      throw e;
    }
    const allTasks = await listTasks(taskListId);
    for (const task of allTasks) {
      const newBlocks = task.blocks.filter((id) => id !== taskId);
      const newBlockedBy = task.blockedBy.filter((id) => id !== taskId);
      if (newBlocks.length !== task.blocks.length || newBlockedBy.length !== task.blockedBy.length) {
        await updateTask(taskListId, task.id, {
          blocks: newBlocks,
          blockedBy: newBlockedBy
        });
      }
    }
    notifyTasksUpdated();
    return true;
  } catch {
    return false;
  }
}
async function listTasks(taskListId) {
  const dir = getTasksDir(taskListId);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }
  const taskIds = files.filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", ""));
  const results = await Promise.all(taskIds.map((id) => getTask(taskListId, id)));
  return results.filter((t) => t !== null);
}
async function blockTask(taskListId, fromTaskId, toTaskId) {
  const [fromTask, toTask] = await Promise.all([
    getTask(taskListId, fromTaskId),
    getTask(taskListId, toTaskId)
  ]);
  if (!fromTask || !toTask) {
    return false;
  }
  if (!fromTask.blocks.includes(toTaskId)) {
    await updateTask(taskListId, fromTaskId, {
      blocks: [...fromTask.blocks, toTaskId]
    });
  }
  if (!toTask.blockedBy.includes(fromTaskId)) {
    await updateTask(taskListId, toTaskId, {
      blockedBy: [...toTask.blockedBy, fromTaskId]
    });
  }
  return true;
}
function getTaskListLockPath(taskListId) {
  return join(getTasksDir(taskListId), ".lock");
}
async function ensureTaskListLockFile(taskListId) {
  await ensureTasksDir(taskListId);
  const lockPath = getTaskListLockPath(taskListId);
  try {
    await writeFile(lockPath, "", { flag: "wx" });
  } catch {
  }
  return lockPath;
}
async function claimTask(taskListId, taskId, claimantAgentId, options = {}) {
  const taskPath = getTaskPath(taskListId, taskId);
  const taskBeforeLock = await getTask(taskListId, taskId);
  if (!taskBeforeLock) {
    return { success: false, reason: "task_not_found" };
  }
  if (options.checkAgentBusy) {
    return claimTaskWithBusyCheck(taskListId, taskId, claimantAgentId);
  }
  let release;
  try {
    release = await lock(taskPath, LOCK_OPTIONS);
    const task = await getTask(taskListId, taskId);
    if (!task) {
      return { success: false, reason: "task_not_found" };
    }
    if (task.owner && task.owner !== claimantAgentId) {
      return { success: false, reason: "already_claimed", task };
    }
    if (task.status === "completed") {
      return { success: false, reason: "already_resolved", task };
    }
    const allTasks = await listTasks(taskListId);
    const unresolvedTaskIds = new Set(
      allTasks.filter((t) => t.status !== "completed").map((t) => t.id)
    );
    const blockedByTasks = task.blockedBy.filter(
      (id) => unresolvedTaskIds.has(id)
    );
    if (blockedByTasks.length > 0) {
      return { success: false, reason: "blocked", task, blockedByTasks };
    }
    const updated = await updateTaskUnsafe(taskListId, taskId, {
      owner: claimantAgentId
    });
    return { success: true, task: updated };
  } catch (error) {
    logForDebugging(
      `[Tasks] Failed to claim task ${taskId}: ${errorMessage(error)}`
    );
    logError(error);
    return { success: false, reason: "task_not_found" };
  } finally {
    if (release) {
      await release();
    }
  }
}
async function claimTaskWithBusyCheck(taskListId, taskId, claimantAgentId) {
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const allTasks = await listTasks(taskListId);
    const task = allTasks.find((t) => t.id === taskId);
    if (!task) {
      return { success: false, reason: "task_not_found" };
    }
    if (task.owner && task.owner !== claimantAgentId) {
      return { success: false, reason: "already_claimed", task };
    }
    if (task.status === "completed") {
      return { success: false, reason: "already_resolved", task };
    }
    const unresolvedTaskIds = new Set(
      allTasks.filter((t) => t.status !== "completed").map((t) => t.id)
    );
    const blockedByTasks = task.blockedBy.filter(
      (id) => unresolvedTaskIds.has(id)
    );
    if (blockedByTasks.length > 0) {
      return { success: false, reason: "blocked", task, blockedByTasks };
    }
    const agentOpenTasks = allTasks.filter(
      (t) => t.status !== "completed" && t.owner === claimantAgentId && t.id !== taskId
    );
    if (agentOpenTasks.length > 0) {
      return {
        success: false,
        reason: "agent_busy",
        task,
        busyWithTasks: agentOpenTasks.map((t) => t.id)
      };
    }
    const updated = await updateTask(taskListId, taskId, {
      owner: claimantAgentId
    });
    return { success: true, task: updated };
  } catch (error) {
    logForDebugging(
      `[Tasks] Failed to claim task ${taskId} with busy check: ${errorMessage(error)}`
    );
    logError(error);
    return { success: false, reason: "task_not_found" };
  } finally {
    if (release) {
      await release();
    }
  }
}
async function unassignTeammateTasks(teamName, teammateId, teammateName, reason) {
  const tasks = await listTasks(teamName);
  const unresolvedAssignedTasks = tasks.filter(
    (t) => t.status !== "completed" && (t.owner === teammateId || t.owner === teammateName)
  );
  for (const task of unresolvedAssignedTasks) {
    await updateTask(teamName, task.id, { owner: void 0, status: "pending" });
  }
  if (unresolvedAssignedTasks.length > 0) {
    logForDebugging(
      `[Tasks] Unassigned ${unresolvedAssignedTasks.length} task(s) from ${teammateName}`
    );
  }
  const actionVerb = reason === "terminated" ? "was terminated" : "has shut down";
  let notificationMessage = `${teammateName} ${actionVerb}.`;
  if (unresolvedAssignedTasks.length > 0) {
    const taskList = unresolvedAssignedTasks.map((t) => `#${t.id} "${t.subject}"`).join(", ");
    notificationMessage += ` ${unresolvedAssignedTasks.length} task(s) were unassigned: ${taskList}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: unresolvedAssignedTasks.map((t) => ({
      id: t.id,
      subject: t.subject
    })),
    notificationMessage
  };
}
var tasksUpdated, leaderTeamName, onTasksUpdated, TaskStatusSchema, TaskSchema, HIGH_WATER_MARK_FILE, LOCK_OPTIONS, DEFAULT_TASKS_MODE_TASK_LIST_ID;
var init_tasks = __esm({
  "src/utils/tasks.ts"() {
    init_v4();
    init_state();
    init_array();
    init_debug();
    init_envUtils();
    init_errors();
    init_lazySchema();
    init_lockfile();
    init_log();
    init_signal();
    init_slowOperations();
    init_teammate();
    init_teammateContext();
    tasksUpdated = createSignal();
    onTasksUpdated = tasksUpdated.subscribe;
    TaskStatusSchema = lazySchema(
      () => external_exports.enum(["pending", "in_progress", "completed"])
    );
    TaskSchema = lazySchema(
      () => external_exports.object({
        id: external_exports.string(),
        subject: external_exports.string(),
        description: external_exports.string(),
        activeForm: external_exports.string().optional(),
        // present continuous form for spinner (e.g., "Running tests")
        owner: external_exports.string().optional(),
        // agent ID
        status: TaskStatusSchema(),
        blocks: external_exports.array(external_exports.string()),
        // task IDs this task blocks
        blockedBy: external_exports.array(external_exports.string()),
        // task IDs that block this task
        metadata: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
        // arbitrary metadata
      })
    );
    HIGH_WATER_MARK_FILE = ".highwatermark";
    LOCK_OPTIONS = {
      retries: {
        retries: 30,
        minTimeout: 5,
        maxTimeout: 100
      }
    };
    DEFAULT_TASKS_MODE_TASK_LIST_ID = "tasklist";
  }
});

// src/utils/swarm/backends/types.ts
function isPaneBackend(type) {
  return type === "tmux" || type === "iterm2";
}
var init_types = __esm({
  "src/utils/swarm/backends/types.ts"() {
  }
});

// src/utils/swarm/teamHelpers.ts
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { mkdir as mkdir2, readFile as readFile2, rm, writeFile as writeFile2 } from "fs/promises";
import { join as join2 } from "path";
function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function sanitizeAgentName(name) {
  return name.replace(/@/g, "-");
}
function getTeamDir(teamName) {
  return join2(getTeamsDir(), sanitizeName(teamName));
}
function getTeamFilePath(teamName) {
  return join2(getTeamDir(teamName), "config.json");
}
function readTeamFile(teamName) {
  try {
    const content = readFileSync(getTeamFilePath(teamName), "utf-8");
    return jsonParse(content);
  } catch (e) {
    if (getErrnoCode(e) === "ENOENT") return null;
    logForDebugging(
      `[TeammateTool] Failed to read team file for ${teamName}: ${errorMessage(e)}`
    );
    return null;
  }
}
async function readTeamFileAsync(teamName) {
  try {
    const content = await readFile2(getTeamFilePath(teamName), "utf-8");
    return jsonParse(content);
  } catch (e) {
    if (getErrnoCode(e) === "ENOENT") return null;
    logForDebugging(
      `[TeammateTool] Failed to read team file for ${teamName}: ${errorMessage(e)}`
    );
    return null;
  }
}
function writeTeamFile(teamName, teamFile) {
  const teamDir = getTeamDir(teamName);
  mkdirSync(teamDir, { recursive: true });
  writeFileSync(getTeamFilePath(teamName), jsonStringify(teamFile, null, 2));
}
async function writeTeamFileAsync(teamName, teamFile) {
  const teamDir = getTeamDir(teamName);
  await mkdir2(teamDir, { recursive: true });
  await writeFile2(getTeamFilePath(teamName), jsonStringify(teamFile, null, 2));
}
function removeTeammateFromTeamFile(teamName, identifier) {
  const identifierStr = identifier.agentId || identifier.name;
  if (!identifierStr) {
    logForDebugging(
      "[TeammateTool] removeTeammateFromTeamFile called with no identifier"
    );
    return false;
  }
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logForDebugging(
      `[TeammateTool] Cannot remove teammate ${identifierStr}: failed to read team file for "${teamName}"`
    );
    return false;
  }
  const originalLength = teamFile.members.length;
  teamFile.members = teamFile.members.filter((m) => {
    if (identifier.agentId && m.agentId === identifier.agentId) return false;
    if (identifier.name && m.name === identifier.name) return false;
    return true;
  });
  if (teamFile.members.length === originalLength) {
    logForDebugging(
      `[TeammateTool] Teammate ${identifierStr} not found in team file for "${teamName}"`
    );
    return false;
  }
  writeTeamFile(teamName, teamFile);
  logForDebugging(
    `[TeammateTool] Removed teammate from team file: ${identifierStr}`
  );
  return true;
}
function addHiddenPaneId(teamName, paneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const hiddenPaneIds = teamFile.hiddenPaneIds ?? [];
  if (!hiddenPaneIds.includes(paneId)) {
    hiddenPaneIds.push(paneId);
    teamFile.hiddenPaneIds = hiddenPaneIds;
    writeTeamFile(teamName, teamFile);
    logForDebugging(
      `[TeammateTool] Added ${paneId} to hidden panes for team ${teamName}`
    );
  }
  return true;
}
function removeHiddenPaneId(teamName, paneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const hiddenPaneIds = teamFile.hiddenPaneIds ?? [];
  const index = hiddenPaneIds.indexOf(paneId);
  if (index !== -1) {
    hiddenPaneIds.splice(index, 1);
    teamFile.hiddenPaneIds = hiddenPaneIds;
    writeTeamFile(teamName, teamFile);
    logForDebugging(
      `[TeammateTool] Removed ${paneId} from hidden panes for team ${teamName}`
    );
  }
  return true;
}
function removeMemberFromTeam(teamName, tmuxPaneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const memberIndex = teamFile.members.findIndex(
    (m) => m.tmuxPaneId === tmuxPaneId
  );
  if (memberIndex === -1) {
    return false;
  }
  teamFile.members.splice(memberIndex, 1);
  if (teamFile.hiddenPaneIds) {
    const hiddenIndex = teamFile.hiddenPaneIds.indexOf(tmuxPaneId);
    if (hiddenIndex !== -1) {
      teamFile.hiddenPaneIds.splice(hiddenIndex, 1);
    }
  }
  writeTeamFile(teamName, teamFile);
  logForDebugging(
    `[TeammateTool] Removed member with pane ${tmuxPaneId} from team ${teamName}`
  );
  return true;
}
function removeMemberByAgentId(teamName, agentId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const memberIndex = teamFile.members.findIndex((m) => m.agentId === agentId);
  if (memberIndex === -1) {
    return false;
  }
  teamFile.members.splice(memberIndex, 1);
  writeTeamFile(teamName, teamFile);
  logForDebugging(
    `[TeammateTool] Removed member ${agentId} from team ${teamName}`
  );
  return true;
}
function setMemberMode(teamName, memberName, mode) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const member = teamFile.members.find((m) => m.name === memberName);
  if (!member) {
    logForDebugging(
      `[TeammateTool] Cannot set member mode: member ${memberName} not found in team ${teamName}`
    );
    return false;
  }
  if (member.mode === mode) {
    return true;
  }
  const updatedMembers = teamFile.members.map(
    (m) => m.name === memberName ? { ...m, mode } : m
  );
  writeTeamFile(teamName, { ...teamFile, members: updatedMembers });
  logForDebugging(
    `[TeammateTool] Set member ${memberName} in team ${teamName} to mode: ${mode}`
  );
  return true;
}
function syncTeammateMode(mode, teamNameOverride) {
  if (!isTeammate()) return;
  const teamName = teamNameOverride ?? getTeamName();
  const agentName = getAgentName();
  if (teamName && agentName) {
    setMemberMode(teamName, agentName, mode);
  }
}
function setMultipleMemberModes(teamName, modeUpdates) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const updateMap = new Map(modeUpdates.map((u) => [u.memberName, u.mode]));
  let anyChanged = false;
  const updatedMembers = teamFile.members.map((member) => {
    const newMode = updateMap.get(member.name);
    if (newMode !== void 0 && member.mode !== newMode) {
      anyChanged = true;
      return { ...member, mode: newMode };
    }
    return member;
  });
  if (anyChanged) {
    writeTeamFile(teamName, { ...teamFile, members: updatedMembers });
    logForDebugging(
      `[TeammateTool] Set ${modeUpdates.length} member modes in team ${teamName}`
    );
  }
  return true;
}
async function setMemberActive(teamName, memberName, isActive) {
  const teamFile = await readTeamFileAsync(teamName);
  if (!teamFile) {
    logForDebugging(
      `[TeammateTool] Cannot set member active: team ${teamName} not found`
    );
    return;
  }
  const member = teamFile.members.find((m) => m.name === memberName);
  if (!member) {
    logForDebugging(
      `[TeammateTool] Cannot set member active: member ${memberName} not found in team ${teamName}`
    );
    return;
  }
  if (member.isActive === isActive) {
    return;
  }
  member.isActive = isActive;
  await writeTeamFileAsync(teamName, teamFile);
  logForDebugging(
    `[TeammateTool] Set member ${memberName} in team ${teamName} to ${isActive ? "active" : "idle"}`
  );
}
async function destroyWorktree(worktreePath) {
  const gitFilePath = join2(worktreePath, ".git");
  let mainRepoPath = null;
  try {
    const gitFileContent = (await readFile2(gitFilePath, "utf-8")).trim();
    const match = gitFileContent.match(/^gitdir:\s*(.+)$/);
    if (match && match[1]) {
      const worktreeGitDir = match[1];
      const mainGitDir = join2(worktreeGitDir, "..", "..");
      mainRepoPath = join2(mainGitDir, "..");
    }
  } catch {
  }
  if (mainRepoPath) {
    const result = await execFileNoThrowWithCwd(
      gitExe(),
      ["worktree", "remove", "--force", worktreePath],
      { cwd: mainRepoPath }
    );
    if (result.code === 0) {
      logForDebugging(
        `[TeammateTool] Removed worktree via git: ${worktreePath}`
      );
      return;
    }
    if (result.stderr?.includes("not a working tree")) {
      logForDebugging(
        `[TeammateTool] Worktree already removed: ${worktreePath}`
      );
      return;
    }
    logForDebugging(
      `[TeammateTool] git worktree remove failed, falling back to rm: ${result.stderr}`
    );
  }
  try {
    await rm(worktreePath, { recursive: true, force: true });
    logForDebugging(
      `[TeammateTool] Removed worktree directory manually: ${worktreePath}`
    );
  } catch (error) {
    logForDebugging(
      `[TeammateTool] Failed to remove worktree ${worktreePath}: ${errorMessage(error)}`
    );
  }
}
function registerTeamForSessionCleanup(teamName) {
  getSessionCreatedTeams().add(teamName);
}
function unregisterTeamForSessionCleanup(teamName) {
  getSessionCreatedTeams().delete(teamName);
}
async function cleanupSessionTeams() {
  const sessionCreatedTeams = getSessionCreatedTeams();
  if (sessionCreatedTeams.size === 0) return;
  const teams = Array.from(sessionCreatedTeams);
  logForDebugging(
    `cleanupSessionTeams: removing ${teams.length} orphan team dir(s): ${teams.join(", ")}`
  );
  await Promise.allSettled(teams.map((name) => killOrphanedTeammatePanes(name)));
  await Promise.allSettled(teams.map((name) => cleanupTeamDirectories(name)));
  sessionCreatedTeams.clear();
}
async function killOrphanedTeammatePanes(teamName) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) return;
  const paneMembers = teamFile.members.filter(
    (m) => m.name !== TEAM_LEAD_NAME && m.tmuxPaneId && m.backendType && isPaneBackend(m.backendType)
  );
  if (paneMembers.length === 0) return;
  const [{ ensureBackendsRegistered, getBackendByType }, { isInsideTmux }] = await Promise.all([
    import("./registry-B36C4V3E.mjs"),
    import("./detection-D2PCR236.mjs")
  ]);
  await ensureBackendsRegistered();
  const useExternalSession = !await isInsideTmux();
  await Promise.allSettled(
    paneMembers.map(async (m) => {
      if (!m.tmuxPaneId || !m.backendType || !isPaneBackend(m.backendType)) {
        return;
      }
      const ok = await getBackendByType(m.backendType).killPane(
        m.tmuxPaneId,
        useExternalSession
      );
      logForDebugging(
        `cleanupSessionTeams: killPane ${m.name} (${m.backendType} ${m.tmuxPaneId}) \u2192 ${ok}`
      );
    })
  );
}
async function cleanupTeamDirectories(teamName) {
  const sanitizedName = sanitizeName(teamName);
  const teamFile = readTeamFile(teamName);
  const worktreePaths = [];
  if (teamFile) {
    for (const member of teamFile.members) {
      if (member.worktreePath) {
        worktreePaths.push(member.worktreePath);
      }
    }
  }
  for (const worktreePath of worktreePaths) {
    await destroyWorktree(worktreePath);
  }
  const teamDir = getTeamDir(teamName);
  try {
    await rm(teamDir, { recursive: true, force: true });
    logForDebugging(`[TeammateTool] Cleaned up team directory: ${teamDir}`);
  } catch (error) {
    logForDebugging(
      `[TeammateTool] Failed to clean up team directory ${teamDir}: ${errorMessage(error)}`
    );
  }
  const tasksDir = getTasksDir(sanitizedName);
  try {
    await rm(tasksDir, { recursive: true, force: true });
    logForDebugging(`[TeammateTool] Cleaned up tasks directory: ${tasksDir}`);
    notifyTasksUpdated();
  } catch (error) {
    logForDebugging(
      `[TeammateTool] Failed to clean up tasks directory ${tasksDir}: ${errorMessage(error)}`
    );
  }
}
var inputSchema;
var init_teamHelpers = __esm({
  "src/utils/swarm/teamHelpers.ts"() {
    init_v4();
    init_state();
    init_debug();
    init_envUtils();
    init_errors();
    init_execFileNoThrow();
    init_git();
    init_lazySchema();
    init_slowOperations();
    init_tasks();
    init_teammate();
    init_types();
    init_constants();
    inputSchema = lazySchema(
      () => external_exports.strictObject({
        operation: external_exports.enum(["spawnTeam", "cleanup"]).describe(
          "Operation: spawnTeam to create a team, cleanup to remove team and task directories."
        ),
        agent_type: external_exports.string().optional().describe(
          'Type/role of the team lead (e.g., "researcher", "test-runner"). Used for team file and inter-agent coordination.'
        ),
        team_name: external_exports.string().optional().describe("Name for the new team to create (required for spawnTeam)."),
        description: external_exports.string().optional().describe("Team description/purpose (only used with spawnTeam).")
      })
    );
  }
});

export {
  setLeaderTeamName,
  clearLeaderTeamName,
  onTasksUpdated,
  TaskStatusSchema,
  isTodoV2Enabled,
  resetTaskList,
  getTaskListId,
  sanitizePathComponent,
  getTasksDir,
  ensureTasksDir,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  listTasks,
  blockTask,
  claimTask,
  unassignTeammateTasks,
  DEFAULT_TASKS_MODE_TASK_LIST_ID,
  init_tasks,
  isPaneBackend,
  init_types,
  inputSchema,
  sanitizeName,
  sanitizeAgentName,
  getTeamDir,
  getTeamFilePath,
  readTeamFile,
  readTeamFileAsync,
  writeTeamFileAsync,
  removeTeammateFromTeamFile,
  addHiddenPaneId,
  removeHiddenPaneId,
  removeMemberFromTeam,
  removeMemberByAgentId,
  setMemberMode,
  syncTeammateMode,
  setMultipleMemberModes,
  setMemberActive,
  registerTeamForSessionCleanup,
  unregisterTeamForSessionCleanup,
  cleanupSessionTeams,
  cleanupTeamDirectories,
  init_teamHelpers
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3Rhc2tzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9zd2FybS9iYWNrZW5kcy90eXBlcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvc3dhcm0vdGVhbUhlbHBlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IG1rZGlyLCByZWFkZGlyLCByZWFkRmlsZSwgdW5saW5rLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uLCBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyB1bmlxIH0gZnJvbSAnLi9hcnJheS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5pbXBvcnQgeyBnZXRDbGF1ZGVDb25maWdIb21lRGlyLCBnZXRUZWFtc0RpciwgaXNFbnZUcnV0aHkgfSBmcm9tICcuL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCBnZXRFcnJub0NvZGUgfSBmcm9tICcuL2Vycm9ycy5qcydcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuL2xhenlTY2hlbWEuanMnXG5pbXBvcnQgKiBhcyBsb2NrZmlsZSBmcm9tICcuL2xvY2tmaWxlLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmltcG9ydCB7IGNyZWF0ZVNpZ25hbCB9IGZyb20gJy4vc2lnbmFsLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGdldFRlYW1OYW1lIH0gZnJvbSAnLi90ZWFtbWF0ZS5qcydcbmltcG9ydCB7IGdldFRlYW1tYXRlQ29udGV4dCB9IGZyb20gJy4vdGVhbW1hdGVDb250ZXh0LmpzJ1xuXG4vLyBMaXN0ZW5lcnMgZm9yIHRhc2sgbGlzdCB1cGRhdGVzICh1c2VkIGZvciBpbW1lZGlhdGUgVUkgcmVmcmVzaCBpbiBzYW1lIHByb2Nlc3MpXG5jb25zdCB0YXNrc1VwZGF0ZWQgPSBjcmVhdGVTaWduYWwoKVxuXG4vKipcbiAqIFRlYW0gbmFtZSBzZXQgYnkgdGhlIGxlYWRlciB3aGVuIGNyZWF0aW5nIGEgdGVhbS5cbiAqIFVzZWQgYnkgZ2V0VGFza0xpc3RJZCgpIHNvIHRoZSBsZWFkZXIncyB0YXNrcyBhcmUgc3RvcmVkIHVuZGVyIHRoZSB0ZWFtIG5hbWVcbiAqIChtYXRjaGluZyB3aGVyZSB0bXV4L2lUZXJtMiB0ZWFtbWF0ZXMgbG9vayksIG5vdCB1bmRlciB0aGUgc2Vzc2lvbiBJRC5cbiAqL1xubGV0IGxlYWRlclRlYW1OYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuLyoqXG4gKiBTZXRzIHRoZSBsZWFkZXIncyB0ZWFtIG5hbWUgZm9yIHRhc2sgbGlzdCByZXNvbHV0aW9uLlxuICogQ2FsbGVkIGJ5IFRlYW1DcmVhdGVUb29sIHdoZW4gYSB0ZWFtIGlzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMZWFkZXJUZWFtTmFtZSh0ZWFtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChsZWFkZXJUZWFtTmFtZSA9PT0gdGVhbU5hbWUpIHJldHVyblxuICBsZWFkZXJUZWFtTmFtZSA9IHRlYW1OYW1lXG4gIC8vIENoYW5naW5nIHRoZSB0YXNrIGxpc3QgSUQgaXMgYSBcInRhc2tzIHVwZGF0ZWRcIiBldmVudCBmb3Igc3Vic2NyaWJlcnMgXHUyMDE0XG4gIC8vIHRoZXkncmUgbm93IGxvb2tpbmcgYXQgYSBkaWZmZXJlbnQgZGlyZWN0b3J5LlxuICBub3RpZnlUYXNrc1VwZGF0ZWQoKVxufVxuXG4vKipcbiAqIENsZWFycyB0aGUgbGVhZGVyJ3MgdGVhbSBuYW1lLlxuICogQ2FsbGVkIHdoZW4gYSB0ZWFtIGlzIGRlbGV0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxlYWRlclRlYW1OYW1lKCk6IHZvaWQge1xuICBpZiAobGVhZGVyVGVhbU5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gIGxlYWRlclRlYW1OYW1lID0gdW5kZWZpbmVkXG4gIG5vdGlmeVRhc2tzVXBkYXRlZCgpXG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0YXNrcyBhcmUgdXBkYXRlZCBpbiB0aGlzIHByb2Nlc3MuXG4gKiBSZXR1cm5zIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgb25UYXNrc1VwZGF0ZWQgPSB0YXNrc1VwZGF0ZWQuc3Vic2NyaWJlXG5cbi8qKlxuICogTm90aWZ5IGxpc3RlbmVycyB0aGF0IHRhc2tzIGhhdmUgYmVlbiB1cGRhdGVkLlxuICogQ2FsbGVkIGludGVybmFsbHkgYWZ0ZXIgY3JlYXRlVGFzaywgdXBkYXRlVGFzaywgZXRjLlxuICogV3JhcHMgZW1pdCBpbiB0cnkvY2F0Y2ggc28gbGlzdGVuZXIgZmFpbHVyZXMgbmV2ZXIgcHJvcGFnYXRlIHRvIGNhbGxlcnNcbiAqICh0YXNrIG11dGF0aW9ucyBtdXN0IHN1Y2NlZWQgZnJvbSB0aGUgY2FsbGVyJ3MgcGVyc3BlY3RpdmUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5VGFza3NVcGRhdGVkKCk6IHZvaWQge1xuICB0cnkge1xuICAgIHRhc2tzVXBkYXRlZC5lbWl0KClcbiAgfSBjYXRjaCB7XG4gICAgLy8gSWdub3JlIGxpc3RlbmVyIGVycm9ycyBcdTIwMTQgdGFzayBtdXRhdGlvbnMgbXVzdCBub3QgZmFpbCBkdWUgdG8gbm90aWZpY2F0aW9uIGlzc3Vlc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUQVNLX1NUQVRVU0VTID0gWydwZW5kaW5nJywgJ2luX3Byb2dyZXNzJywgJ2NvbXBsZXRlZCddIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBUYXNrU3RhdHVzU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6LmVudW0oWydwZW5kaW5nJywgJ2luX3Byb2dyZXNzJywgJ2NvbXBsZXRlZCddKSxcbilcbmV4cG9ydCB0eXBlIFRhc2tTdGF0dXMgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIFRhc2tTdGF0dXNTY2hlbWE+PlxuXG5leHBvcnQgY29uc3QgVGFza1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLFxuICAgIHN1YmplY3Q6IHouc3RyaW5nKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gICAgYWN0aXZlRm9ybTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBwcmVzZW50IGNvbnRpbnVvdXMgZm9ybSBmb3Igc3Bpbm5lciAoZS5nLiwgXCJSdW5uaW5nIHRlc3RzXCIpXG4gICAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSwgLy8gYWdlbnQgSURcbiAgICBzdGF0dXM6IFRhc2tTdGF0dXNTY2hlbWEoKSxcbiAgICBibG9ja3M6IHouYXJyYXkoei5zdHJpbmcoKSksIC8vIHRhc2sgSURzIHRoaXMgdGFzayBibG9ja3NcbiAgICBibG9ja2VkQnk6IHouYXJyYXkoei5zdHJpbmcoKSksIC8vIHRhc2sgSURzIHRoYXQgYmxvY2sgdGhpcyB0YXNrXG4gICAgbWV0YWRhdGE6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5vcHRpb25hbCgpLCAvLyBhcmJpdHJhcnkgbWV0YWRhdGFcbiAgfSksXG4pXG5leHBvcnQgdHlwZSBUYXNrID0gei5pbmZlcjxSZXR1cm5UeXBlPHR5cGVvZiBUYXNrU2NoZW1hPj5cblxuLy8gSGlnaCB3YXRlciBtYXJrIGZpbGUgbmFtZSAtIHN0b3JlcyB0aGUgbWF4aW11bSB0YXNrIElEIGV2ZXIgYXNzaWduZWRcbmNvbnN0IEhJR0hfV0FURVJfTUFSS19GSUxFID0gJy5oaWdod2F0ZXJtYXJrJ1xuXG4vLyBMb2NrIG9wdGlvbnM6IHJldHJ5IHdpdGggYmFja29mZiBzbyBjb25jdXJyZW50IGNhbGxlcnMgKG11bHRpcGxlIENsYXVkZXNcbi8vIGluIGEgc3dhcm0pIHdhaXQgZm9yIHRoZSBsb2NrIGluc3RlYWQgb2YgZmFpbGluZyBpbW1lZGlhdGVseS4gVGhlIHN5bmNcbi8vIGxvY2tTeW5jIEFQSSBibG9ja2VkIHRoZSBldmVudCBsb29wOyB0aGUgYXN5bmMgQVBJIG5lZWRzIGV4cGxpY2l0IHJldHJpZXNcbi8vIHRvIGFjaGlldmUgdGhlIHNhbWUgc2VyaWFsaXphdGlvbiBzZW1hbnRpY3MuXG4vL1xuLy8gQnVkZ2V0IHNpemVkIGZvciB+MTArIGNvbmN1cnJlbnQgc3dhcm0gYWdlbnRzOiBlYWNoIGNyaXRpY2FsIHNlY3Rpb24gZG9lc1xuLy8gcmVhZGRpciArIE5cdTAwRDdyZWFkRmlsZSArIHdyaXRlRmlsZSAofjUwLTEwMG1zIG9uIHNsb3cgZGlza3MpLCBzbyB0aGUgbGFzdFxuLy8gY2FsbGVyIGluIGEgMTAtd2F5IHJhY2UgbmVlZHMgfjkwMG1zLiByZXRyaWVzPTMwIGdpdmVzIH4yLjZzIHRvdGFsIHdhaXQuXG5jb25zdCBMT0NLX09QVElPTlMgPSB7XG4gIHJldHJpZXM6IHtcbiAgICByZXRyaWVzOiAzMCxcbiAgICBtaW5UaW1lb3V0OiA1LFxuICAgIG1heFRpbWVvdXQ6IDEwMCxcbiAgfSxcbn1cblxuZnVuY3Rpb24gZ2V0SGlnaFdhdGVyTWFya1BhdGgodGFza0xpc3RJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0VGFza3NEaXIodGFza0xpc3RJZCksIEhJR0hfV0FURVJfTUFSS19GSUxFKVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBwYXRoID0gZ2V0SGlnaFdhdGVyTWFya1BhdGgodGFza0xpc3RJZClcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gKGF3YWl0IHJlYWRGaWxlKHBhdGgsICd1dGYtOCcpKS50cmltKClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGNvbnRlbnQsIDEwKVxuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyAwIDogdmFsdWVcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB3cml0ZUhpZ2hXYXRlck1hcmsoXG4gIHRhc2tMaXN0SWQ6IHN0cmluZyxcbiAgdmFsdWU6IG51bWJlcixcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBwYXRoID0gZ2V0SGlnaFdhdGVyTWFya1BhdGgodGFza0xpc3RJZClcbiAgYXdhaXQgd3JpdGVGaWxlKHBhdGgsIFN0cmluZyh2YWx1ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZG9WMkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gIC8vIEZvcmNlLWVuYWJsZSB0YXNrcyBpbiBub24taW50ZXJhY3RpdmUgbW9kZSAoZS5nLiBTREsgdXNlcnMgd2hvIHdhbnQgVGFzayB0b29scyBvdmVyIFRvZG9Xcml0ZSlcbiAgaWYgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOQUJMRV9UQVNLUykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24oKVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgdGFzayBsaXN0IGZvciBhIG5ldyBzd2FybSAtIGNsZWFycyBhbnkgZXhpc3RpbmcgdGFza3MuXG4gKiBXcml0ZXMgYSBoaWdoIHdhdGVyIG1hcmsgZmlsZSB0byBwcmV2ZW50IElEIHJldXNlIGFmdGVyIHJlc2V0LlxuICogU2hvdWxkIGJlIGNhbGxlZCB3aGVuIGEgbmV3IHN3YXJtIGlzIGNyZWF0ZWQgdG8gZW5zdXJlIHRhc2sgbnVtYmVyaW5nIHN0YXJ0cyBhdCAxLlxuICogVXNlcyBmaWxlIGxvY2tpbmcgdG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnMgd2hlbiBtdWx0aXBsZSBDbGF1ZGVzIHJ1biBpbiBwYXJhbGxlbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0VGFza0xpc3QodGFza0xpc3RJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRpciA9IGdldFRhc2tzRGlyKHRhc2tMaXN0SWQpXG4gIGNvbnN0IGxvY2tQYXRoID0gYXdhaXQgZW5zdXJlVGFza0xpc3RMb2NrRmlsZSh0YXNrTGlzdElkKVxuXG4gIGxldCByZWxlYXNlOiAoKCkgPT4gUHJvbWlzZTx2b2lkPikgfCB1bmRlZmluZWRcbiAgdHJ5IHtcbiAgICAvLyBBY3F1aXJlIGV4Y2x1c2l2ZSBsb2NrIG9uIHRoZSB0YXNrIGxpc3RcbiAgICByZWxlYXNlID0gYXdhaXQgbG9ja2ZpbGUubG9jayhsb2NrUGF0aCwgTE9DS19PUFRJT05TKVxuXG4gICAgLy8gRmluZCB0aGUgY3VycmVudCBoaWdoZXN0IElEIGFuZCBzYXZlIGl0IHRvIHRoZSBoaWdoIHdhdGVyIG1hcmsgZmlsZVxuICAgIGNvbnN0IGN1cnJlbnRIaWdoZXN0ID0gYXdhaXQgZmluZEhpZ2hlc3RUYXNrSWRGcm9tRmlsZXModGFza0xpc3RJZClcbiAgICBpZiAoY3VycmVudEhpZ2hlc3QgPiAwKSB7XG4gICAgICBjb25zdCBleGlzdGluZ01hcmsgPSBhd2FpdCByZWFkSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkKVxuICAgICAgaWYgKGN1cnJlbnRIaWdoZXN0ID4gZXhpc3RpbmdNYXJrKSB7XG4gICAgICAgIGF3YWl0IHdyaXRlSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkLCBjdXJyZW50SGlnaGVzdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgYWxsIHRhc2sgZmlsZXNcbiAgICBsZXQgZmlsZXM6IHN0cmluZ1tdXG4gICAgdHJ5IHtcbiAgICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihkaXIpXG4gICAgfSBjYXRjaCB7XG4gICAgICBmaWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoJy5qc29uJykgJiYgIWZpbGUuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gam9pbihkaXIsIGZpbGUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdW5saW5rKGZpbGVQYXRoKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzLCBmaWxlIG1heSBhbHJlYWR5IGJlIGRlbGV0ZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBub3RpZnlUYXNrc1VwZGF0ZWQoKVxuICB9IGZpbmFsbHkge1xuICAgIGlmIChyZWxlYXNlKSB7XG4gICAgICBhd2FpdCByZWxlYXNlKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB0YXNrIGxpc3QgSUQgYmFzZWQgb24gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIFByaW9yaXR5OlxuICogMS4gQ0xBVURFX0NPREVfVEFTS19MSVNUX0lEIC0gZXhwbGljaXQgdGFzayBsaXN0IElEXG4gKiAyLiBJbi1wcm9jZXNzIHRlYW1tYXRlOiBsZWFkZXIncyB0ZWFtIG5hbWUgKHNvIHRlYW1tYXRlcyBzaGFyZSB0aGUgbGVhZGVyJ3MgdGFzayBsaXN0KVxuICogMy4gQ0xBVURFX0NPREVfVEVBTV9OQU1FIC0gc2V0IHdoZW4gcnVubmluZyBhcyBhIHByb2Nlc3MtYmFzZWQgdGVhbW1hdGVcbiAqIDQuIExlYWRlciB0ZWFtIG5hbWUgLSBzZXQgd2hlbiB0aGUgbGVhZGVyIGNyZWF0ZXMgYSB0ZWFtIHZpYSBUZWFtQ3JlYXRlXG4gKiA1LiBTZXNzaW9uIElEIC0gZmFsbGJhY2sgZm9yIHN0YW5kYWxvbmUgc2Vzc2lvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tMaXN0SWQoKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RBU0tfTElTVF9JRCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UQVNLX0xJU1RfSURcbiAgfVxuICAvLyBJbi1wcm9jZXNzIHRlYW1tYXRlcyB1c2UgdGhlIGxlYWRlcidzIHRlYW0gbmFtZSBzbyB0aGV5IHNoYXJlIHRoZSBzYW1lXG4gIC8vIHRhc2sgbGlzdCB0aGF0IHRtdXgvaVRlcm0yIHRlYW1tYXRlcyBhbHNvIHJlc29sdmUgdG8uXG4gIGNvbnN0IHRlYW1tYXRlQ3R4ID0gZ2V0VGVhbW1hdGVDb250ZXh0KClcbiAgaWYgKHRlYW1tYXRlQ3R4KSB7XG4gICAgcmV0dXJuIHRlYW1tYXRlQ3R4LnRlYW1OYW1lXG4gIH1cbiAgcmV0dXJuIGdldFRlYW1OYW1lKCkgfHwgbGVhZGVyVGVhbU5hbWUgfHwgZ2V0U2Vzc2lvbklkKClcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZXMgYSBzdHJpbmcgZm9yIHNhZmUgdXNlIGluIGZpbGUgcGF0aHMuXG4gKiBSZW1vdmVzIHBhdGggdHJhdmVyc2FsIGNoYXJhY3RlcnMgYW5kIG90aGVyIHBvdGVudGlhbGx5IGRhbmdlcm91cyBjaGFyYWN0ZXJzLlxuICogT25seSBhbGxvd3MgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIGh5cGhlbnMsIGFuZCB1bmRlcnNjb3Jlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplUGF0aENvbXBvbmVudChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1teYS16QS1aMC05Xy1dL2csICctJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRGlyKHRhc2tMaXN0SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKFxuICAgIGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSxcbiAgICAndGFza3MnLFxuICAgIHNhbml0aXplUGF0aENvbXBvbmVudCh0YXNrTGlzdElkKSxcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1BhdGgodGFza0xpc3RJZDogc3RyaW5nLCB0YXNrSWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldFRhc2tzRGlyKHRhc2tMaXN0SWQpLCBgJHtzYW5pdGl6ZVBhdGhDb21wb25lbnQodGFza0lkKX0uanNvbmApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVUYXNrc0Rpcih0YXNrTGlzdElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZGlyID0gZ2V0VGFza3NEaXIodGFza0xpc3RJZClcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH0gY2F0Y2gge1xuICAgIC8vIERpcmVjdG9yeSBhbHJlYWR5IGV4aXN0cyBvciBjcmVhdGlvbiBmYWlsZWQ7IGNhbGxlcnMgd2lsbCBzdXJmYWNlXG4gICAgLy8gZXJyb3JzIGZyb20gc3Vic2VxdWVudCBvcGVyYXRpb25zLlxuICB9XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGhpZ2hlc3QgdGFzayBJRCBmcm9tIGV4aXN0aW5nIHRhc2sgZmlsZXMgKG5vdCBpbmNsdWRpbmcgaGlnaCB3YXRlciBtYXJrKS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmluZEhpZ2hlc3RUYXNrSWRGcm9tRmlsZXModGFza0xpc3RJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgZGlyID0gZ2V0VGFza3NEaXIodGFza0xpc3RJZClcbiAgbGV0IGZpbGVzOiBzdHJpbmdbXVxuICB0cnkge1xuICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihkaXIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAwXG4gIH1cbiAgbGV0IGhpZ2hlc3QgPSAwXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzb24nKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3QgdGFza0lkID0gcGFyc2VJbnQoZmlsZS5yZXBsYWNlKCcuanNvbicsICcnKSwgMTApXG4gICAgaWYgKCFpc05hTih0YXNrSWQpICYmIHRhc2tJZCA+IGhpZ2hlc3QpIHtcbiAgICAgIGhpZ2hlc3QgPSB0YXNrSWRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGhpZ2hlc3Rcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgaGlnaGVzdCB0YXNrIElEIGV2ZXIgYXNzaWduZWQsIGNvbnNpZGVyaW5nIGJvdGggZXhpc3RpbmcgZmlsZXNcbiAqIGFuZCB0aGUgaGlnaCB3YXRlciBtYXJrIChmb3IgZGVsZXRlZC9yZXNldCB0YXNrcykuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZpbmRIaWdoZXN0VGFza0lkKHRhc2tMaXN0SWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IFtmcm9tRmlsZXMsIGZyb21NYXJrXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmaW5kSGlnaGVzdFRhc2tJZEZyb21GaWxlcyh0YXNrTGlzdElkKSxcbiAgICByZWFkSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkKSxcbiAgXSlcbiAgcmV0dXJuIE1hdGgubWF4KGZyb21GaWxlcywgZnJvbU1hcmspXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHdpdGggYSB1bmlxdWUgSUQuXG4gKiBVc2VzIGZpbGUgbG9ja2luZyB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9ucyB3aGVuIG11bHRpcGxlIHByb2Nlc3Nlc1xuICogY3JlYXRlIHRhc2tzIGNvbmN1cnJlbnRseS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRhc2tMaXN0SWQ6IHN0cmluZyxcbiAgdGFza0RhdGE6IE9taXQ8VGFzaywgJ2lkJz4sXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBsb2NrUGF0aCA9IGF3YWl0IGVuc3VyZVRhc2tMaXN0TG9ja0ZpbGUodGFza0xpc3RJZClcblxuICBsZXQgcmVsZWFzZTogKCgpID0+IFByb21pc2U8dm9pZD4pIHwgdW5kZWZpbmVkXG4gIHRyeSB7XG4gICAgLy8gQWNxdWlyZSBleGNsdXNpdmUgbG9jayBvbiB0aGUgdGFzayBsaXN0XG4gICAgcmVsZWFzZSA9IGF3YWl0IGxvY2tmaWxlLmxvY2sobG9ja1BhdGgsIExPQ0tfT1BUSU9OUylcblxuICAgIC8vIFJlYWQgaGlnaGVzdCBJRCBmcm9tIGRpc2sgd2hpbGUgaG9sZGluZyB0aGUgbG9ja1xuICAgIGNvbnN0IGhpZ2hlc3RJZCA9IGF3YWl0IGZpbmRIaWdoZXN0VGFza0lkKHRhc2tMaXN0SWQpXG4gICAgY29uc3QgaWQgPSBTdHJpbmcoaGlnaGVzdElkICsgMSlcbiAgICBjb25zdCB0YXNrOiBUYXNrID0geyBpZCwgLi4udGFza0RhdGEgfVxuICAgIGNvbnN0IHBhdGggPSBnZXRUYXNrUGF0aCh0YXNrTGlzdElkLCBpZClcbiAgICBhd2FpdCB3cml0ZUZpbGUocGF0aCwganNvblN0cmluZ2lmeSh0YXNrLCBudWxsLCAyKSlcbiAgICBub3RpZnlUYXNrc1VwZGF0ZWQoKVxuICAgIHJldHVybiBpZFxuICB9IGZpbmFsbHkge1xuICAgIGlmIChyZWxlYXNlKSB7XG4gICAgICBhd2FpdCByZWxlYXNlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soXG4gIHRhc2tMaXN0SWQ6IHN0cmluZyxcbiAgdGFza0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPFRhc2sgfCBudWxsPiB7XG4gIGNvbnN0IHBhdGggPSBnZXRUYXNrUGF0aCh0YXNrTGlzdElkLCB0YXNrSWQpXG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKHBhdGgsICd1dGYtOCcpXG4gICAgY29uc3QgZGF0YSA9IGpzb25QYXJzZShjb250ZW50KSBhcyB7IHN0YXR1cz86IHN0cmluZyB9XG5cbiAgICAvLyBURU1QT1JBUlk6IE1pZ3JhdGUgb2xkIHN0YXR1cyBuYW1lcyBmb3IgZXhpc3Rpbmcgc2Vzc2lvbnMgKGFudC1vbmx5KVxuICAgIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnKSB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdvcGVuJykgZGF0YS5zdGF0dXMgPSAncGVuZGluZydcbiAgICAgIGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAncmVzb2x2ZWQnKSBkYXRhLnN0YXR1cyA9ICdjb21wbGV0ZWQnXG4gICAgICAvLyBNaWdyYXRlIGRldmVsb3BtZW50IHRhc2sgc3RhdHVzZXMgdG8gaW5fcHJvZ3Jlc3NcbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBkYXRhLnN0YXR1cyAmJlxuICAgICAgICBbJ3BsYW5uaW5nJywgJ2ltcGxlbWVudGluZycsICdyZXZpZXdpbmcnLCAndmVyaWZ5aW5nJ10uaW5jbHVkZXMoXG4gICAgICAgICAgZGF0YS5zdGF0dXMsXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9ICdpbl9wcm9ncmVzcydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyc2VkID0gVGFza1NjaGVtYSgpLnNhZmVQYXJzZShkYXRhKVxuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtUYXNrc10gVGFzayAke3Rhc2tJZH0gZmFpbGVkIHNjaGVtYSB2YWxpZGF0aW9uOiAke3BhcnNlZC5lcnJvci5tZXNzYWdlfWAsXG4gICAgICApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkLmRhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICBpZiAoY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW1Rhc2tzXSBGYWlsZWQgdG8gcmVhZCB0YXNrICR7dGFza0lkfTogJHtlcnJvck1lc3NhZ2UoZSl9YClcbiAgICBsb2dFcnJvcihlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLy8gSW50ZXJuYWw6IG5vIGxvY2suIENhbGxlcnMgYWxyZWFkeSBob2xkaW5nIGEgbG9jayBvbiB0YXNrUGF0aCBtdXN0IHVzZSB0aGlzXG4vLyB0byBhdm9pZCBkZWFkbG9jayAoY2xhaW1UYXNrLCBkZWxldGVUYXNrIGNhc2NhZGUsIGV0Yy4pLlxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFza1Vuc2FmZShcbiAgdGFza0xpc3RJZDogc3RyaW5nLFxuICB0YXNrSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxPbWl0PFRhc2ssICdpZCc+Pixcbik6IFByb21pc2U8VGFzayB8IG51bGw+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBnZXRUYXNrKHRhc2tMaXN0SWQsIHRhc2tJZClcbiAgaWYgKCFleGlzdGluZykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgdXBkYXRlZDogVGFzayA9IHsgLi4uZXhpc3RpbmcsIC4uLnVwZGF0ZXMsIGlkOiB0YXNrSWQgfVxuICBjb25zdCBwYXRoID0gZ2V0VGFza1BhdGgodGFza0xpc3RJZCwgdGFza0lkKVxuICBhd2FpdCB3cml0ZUZpbGUocGF0aCwganNvblN0cmluZ2lmeSh1cGRhdGVkLCBudWxsLCAyKSlcbiAgbm90aWZ5VGFza3NVcGRhdGVkKClcbiAgcmV0dXJuIHVwZGF0ZWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRhc2soXG4gIHRhc2tMaXN0SWQ6IHN0cmluZyxcbiAgdGFza0lkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8T21pdDxUYXNrLCAnaWQnPj4sXG4pOiBQcm9taXNlPFRhc2sgfCBudWxsPiB7XG4gIGNvbnN0IHBhdGggPSBnZXRUYXNrUGF0aCh0YXNrTGlzdElkLCB0YXNrSWQpXG5cbiAgLy8gQ2hlY2sgZXhpc3RlbmNlIGJlZm9yZSBsb2NraW5nIFx1MjAxNCBwcm9wZXItbG9ja2ZpbGUgdGhyb3dzIGlmIHRoZVxuICAvLyB0YXJnZXQgZmlsZSBkb2Vzbid0IGV4aXN0LCBhbmQgd2Ugd2FudCBhIGNsZWFuIG51bGwgcmVzdWx0LlxuICBjb25zdCB0YXNrQmVmb3JlTG9jayA9IGF3YWl0IGdldFRhc2sodGFza0xpc3RJZCwgdGFza0lkKVxuICBpZiAoIXRhc2tCZWZvcmVMb2NrKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxldCByZWxlYXNlOiAoKCkgPT4gUHJvbWlzZTx2b2lkPikgfCB1bmRlZmluZWRcbiAgdHJ5IHtcbiAgICByZWxlYXNlID0gYXdhaXQgbG9ja2ZpbGUubG9jayhwYXRoLCBMT0NLX09QVElPTlMpXG4gICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVRhc2tVbnNhZmUodGFza0xpc3RJZCwgdGFza0lkLCB1cGRhdGVzKVxuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHJlbGVhc2U/LigpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhc2soXG4gIHRhc2tMaXN0SWQ6IHN0cmluZyxcbiAgdGFza0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgcGF0aCA9IGdldFRhc2tQYXRoKHRhc2tMaXN0SWQsIHRhc2tJZClcblxuICB0cnkge1xuICAgIC8vIFVwZGF0ZSBoaWdoIHdhdGVyIG1hcmsgYmVmb3JlIGRlbGV0aW5nIHRvIHByZXZlbnQgSUQgcmV1c2VcbiAgICBjb25zdCBudW1lcmljSWQgPSBwYXJzZUludCh0YXNrSWQsIDEwKVxuICAgIGlmICghaXNOYU4obnVtZXJpY0lkKSkge1xuICAgICAgY29uc3QgY3VycmVudE1hcmsgPSBhd2FpdCByZWFkSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkKVxuICAgICAgaWYgKG51bWVyaWNJZCA+IGN1cnJlbnRNYXJrKSB7XG4gICAgICAgIGF3YWl0IHdyaXRlSGlnaFdhdGVyTWFyayh0YXNrTGlzdElkLCBudW1lcmljSWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSB0YXNrIGZpbGVcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdW5saW5rKHBhdGgpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgICAgaWYgKGNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSByZWZlcmVuY2VzIHRvIHRoaXMgdGFzayBmcm9tIG90aGVyIHRhc2tzXG4gICAgY29uc3QgYWxsVGFza3MgPSBhd2FpdCBsaXN0VGFza3ModGFza0xpc3RJZClcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICAgIGNvbnN0IG5ld0Jsb2NrcyA9IHRhc2suYmxvY2tzLmZpbHRlcihpZCA9PiBpZCAhPT0gdGFza0lkKVxuICAgICAgY29uc3QgbmV3QmxvY2tlZEJ5ID0gdGFzay5ibG9ja2VkQnkuZmlsdGVyKGlkID0+IGlkICE9PSB0YXNrSWQpXG4gICAgICBpZiAoXG4gICAgICAgIG5ld0Jsb2Nrcy5sZW5ndGggIT09IHRhc2suYmxvY2tzLmxlbmd0aCB8fFxuICAgICAgICBuZXdCbG9ja2VkQnkubGVuZ3RoICE9PSB0YXNrLmJsb2NrZWRCeS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBhd2FpdCB1cGRhdGVUYXNrKHRhc2tMaXN0SWQsIHRhc2suaWQsIHtcbiAgICAgICAgICBibG9ja3M6IG5ld0Jsb2NrcyxcbiAgICAgICAgICBibG9ja2VkQnk6IG5ld0Jsb2NrZWRCeSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlUYXNrc1VwZGF0ZWQoKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0VGFza3ModGFza0xpc3RJZDogc3RyaW5nKTogUHJvbWlzZTxUYXNrW10+IHtcbiAgY29uc3QgZGlyID0gZ2V0VGFza3NEaXIodGFza0xpc3RJZClcbiAgbGV0IGZpbGVzOiBzdHJpbmdbXVxuICB0cnkge1xuICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihkaXIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGNvbnN0IHRhc2tJZHMgPSBmaWxlc1xuICAgIC5maWx0ZXIoZiA9PiBmLmVuZHNXaXRoKCcuanNvbicpKVxuICAgIC5tYXAoZiA9PiBmLnJlcGxhY2UoJy5qc29uJywgJycpKVxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwodGFza0lkcy5tYXAoaWQgPT4gZ2V0VGFzayh0YXNrTGlzdElkLCBpZCkpKVxuICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHQpOiB0IGlzIFRhc2sgPT4gdCAhPT0gbnVsbClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJsb2NrVGFzayhcbiAgdGFza0xpc3RJZDogc3RyaW5nLFxuICBmcm9tVGFza0lkOiBzdHJpbmcsXG4gIHRvVGFza0lkOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgW2Zyb21UYXNrLCB0b1Rhc2tdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFRhc2sodGFza0xpc3RJZCwgZnJvbVRhc2tJZCksXG4gICAgZ2V0VGFzayh0YXNrTGlzdElkLCB0b1Rhc2tJZCksXG4gIF0pXG4gIGlmICghZnJvbVRhc2sgfHwgIXRvVGFzaykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVXBkYXRlIHNvdXJjZSB0YXNrOiBBIGJsb2NrcyBCXG4gIGlmICghZnJvbVRhc2suYmxvY2tzLmluY2x1ZGVzKHRvVGFza0lkKSkge1xuICAgIGF3YWl0IHVwZGF0ZVRhc2sodGFza0xpc3RJZCwgZnJvbVRhc2tJZCwge1xuICAgICAgYmxvY2tzOiBbLi4uZnJvbVRhc2suYmxvY2tzLCB0b1Rhc2tJZF0sXG4gICAgfSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0YXJnZXQgdGFzazogQiBpcyBibG9ja2VkQnkgQVxuICBpZiAoIXRvVGFzay5ibG9ja2VkQnkuaW5jbHVkZXMoZnJvbVRhc2tJZCkpIHtcbiAgICBhd2FpdCB1cGRhdGVUYXNrKHRhc2tMaXN0SWQsIHRvVGFza0lkLCB7XG4gICAgICBibG9ja2VkQnk6IFsuLi50b1Rhc2suYmxvY2tlZEJ5LCBmcm9tVGFza0lkXSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IHR5cGUgQ2xhaW1UYXNrUmVzdWx0ID0ge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIHJlYXNvbj86XG4gICAgfCAndGFza19ub3RfZm91bmQnXG4gICAgfCAnYWxyZWFkeV9jbGFpbWVkJ1xuICAgIHwgJ2FscmVhZHlfcmVzb2x2ZWQnXG4gICAgfCAnYmxvY2tlZCdcbiAgICB8ICdhZ2VudF9idXN5J1xuICB0YXNrPzogVGFza1xuICBidXN5V2l0aFRhc2tzPzogc3RyaW5nW10gLy8gdGFzayBJRHMgdGhlIGFnZW50IGlzIGJ1c3kgd2l0aCAod2hlbiByZWFzb24gaXMgJ2FnZW50X2J1c3knKVxuICBibG9ja2VkQnlUYXNrcz86IHN0cmluZ1tdIC8vIHRhc2sgSURzIGJsb2NraW5nIHRoaXMgdGFzayAod2hlbiByZWFzb24gaXMgJ2Jsb2NrZWQnKVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGxvY2sgZmlsZSBwYXRoIGZvciBhIHRhc2sgbGlzdCAodXNlZCBmb3IgbGlzdC1sZXZlbCBsb2NraW5nKVxuICovXG5mdW5jdGlvbiBnZXRUYXNrTGlzdExvY2tQYXRoKHRhc2tMaXN0SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldFRhc2tzRGlyKHRhc2tMaXN0SWQpLCAnLmxvY2snKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhlIGxvY2sgZmlsZSBleGlzdHMgZm9yIGEgdGFzayBsaXN0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhc2tMaXN0TG9ja0ZpbGUodGFza0xpc3RJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgYXdhaXQgZW5zdXJlVGFza3NEaXIodGFza0xpc3RJZClcbiAgY29uc3QgbG9ja1BhdGggPSBnZXRUYXNrTGlzdExvY2tQYXRoKHRhc2tMaXN0SWQpXG4gIC8vIHByb3Blci1sb2NrZmlsZSByZXF1aXJlcyB0aGUgdGFyZ2V0IGZpbGUgdG8gZXhpc3QuIENyZWF0ZSBpdCB3aXRoIHRoZVxuICAvLyAnd3gnIGZsYWcgKHdyaXRlLWV4Y2x1c2l2ZSkgc28gY29uY3VycmVudCBjYWxsZXJzIGRvbid0IGJvdGggY3JlYXRlIGl0LFxuICAvLyBhbmQgdGhlIGZpcnN0IG9uZSB0byBjcmVhdGUgd2lucyBzaWxlbnRseS5cbiAgdHJ5IHtcbiAgICBhd2FpdCB3cml0ZUZpbGUobG9ja1BhdGgsICcnLCB7IGZsYWc6ICd3eCcgfSlcbiAgfSBjYXRjaCB7XG4gICAgLy8gRUVYSVNUIG9yIG90aGVyIFx1MjAxNCBmaWxlIGFscmVhZHkgZXhpc3RzLCB3aGljaCBpcyBmaW5lLlxuICB9XG4gIHJldHVybiBsb2NrUGF0aFxufVxuXG5leHBvcnQgdHlwZSBDbGFpbVRhc2tPcHRpb25zID0ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgY2hlY2tzIHdoZXRoZXIgdGhlIGFnZW50IGlzIGFscmVhZHkgYnVzeSAob3ducyBvdGhlciBvcGVuIHRhc2tzKVxuICAgKiBiZWZvcmUgYWxsb3dpbmcgdGhlIGNsYWltLiBUaGlzIGNoZWNrIGlzIHBlcmZvcm1lZCBhdG9taWNhbGx5IHdpdGggdGhlIGNsYWltXG4gICAqIHVzaW5nIGEgdGFzay1saXN0LWxldmVsIGxvY2sgdG8gcHJldmVudCBUT0NUT1UgcmFjZSBjb25kaXRpb25zLlxuICAgKi9cbiAgY2hlY2tBZ2VudEJ1c3k/OiBib29sZWFuXG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gY2xhaW0gYSB0YXNrIGZvciBhbiBhZ2VudCB3aXRoIGZpbGUgbG9ja2luZyB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9ucy5cbiAqIFJldHVybnMgc3VjY2VzcyBpZiB0aGUgdGFzayB3YXMgY2xhaW1lZCwgb3IgYSByZWFzb24gaWYgaXQgd2Fzbid0LlxuICpcbiAqIFdoZW4gY2hlY2tBZ2VudEJ1c3kgaXMgdHJ1ZSwgdXNlcyBhIHRhc2stbGlzdC1sZXZlbCBsb2NrIHRvIGF0b21pY2FsbHkgY2hlY2tcbiAqIGlmIHRoZSBhZ2VudCBvd25zIGFueSBvdGhlciBvcGVuIHRhc2tzIGJlZm9yZSBjbGFpbWluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsYWltVGFzayhcbiAgdGFza0xpc3RJZDogc3RyaW5nLFxuICB0YXNrSWQ6IHN0cmluZyxcbiAgY2xhaW1hbnRBZ2VudElkOiBzdHJpbmcsXG4gIG9wdGlvbnM6IENsYWltVGFza09wdGlvbnMgPSB7fSxcbik6IFByb21pc2U8Q2xhaW1UYXNrUmVzdWx0PiB7XG4gIGNvbnN0IHRhc2tQYXRoID0gZ2V0VGFza1BhdGgodGFza0xpc3RJZCwgdGFza0lkKVxuXG4gIC8vIENoZWNrIGV4aXN0ZW5jZSBiZWZvcmUgbG9ja2luZyBcdTIwMTQgcHJvcGVyLWxvY2tmaWxlLmxvY2sgdGhyb3dzIGlmIHRoZVxuICAvLyB0YXJnZXQgZmlsZSBkb2Vzbid0IGV4aXN0LCBhbmQgd2Ugd2FudCBhIGNsZWFuIHRhc2tfbm90X2ZvdW5kIHJlc3VsdC5cbiAgY29uc3QgdGFza0JlZm9yZUxvY2sgPSBhd2FpdCBnZXRUYXNrKHRhc2tMaXN0SWQsIHRhc2tJZClcbiAgaWYgKCF0YXNrQmVmb3JlTG9jaykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCByZWFzb246ICd0YXNrX25vdF9mb3VuZCcgfVxuICB9XG5cbiAgLy8gSWYgd2UgbmVlZCB0byBjaGVjayBhZ2VudCBidXN5IHN0YXR1cywgdXNlIHRhc2stbGlzdC1sZXZlbCBsb2NrXG4gIC8vIHRvIHByZXZlbnQgVE9DVE9VIHJhY2UgY29uZGl0aW9uc1xuICBpZiAob3B0aW9ucy5jaGVja0FnZW50QnVzeSkge1xuICAgIHJldHVybiBjbGFpbVRhc2tXaXRoQnVzeUNoZWNrKHRhc2tMaXN0SWQsIHRhc2tJZCwgY2xhaW1hbnRBZ2VudElkKVxuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCB1c2UgdGFzay1sZXZlbCBsb2NrIChvcmlnaW5hbCBiZWhhdmlvcilcbiAgbGV0IHJlbGVhc2U6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KSB8IHVuZGVmaW5lZFxuICB0cnkge1xuICAgIC8vIEFjcXVpcmUgZXhjbHVzaXZlIGxvY2sgb24gdGhlIHRhc2sgZmlsZVxuICAgIHJlbGVhc2UgPSBhd2FpdCBsb2NrZmlsZS5sb2NrKHRhc2tQYXRoLCBMT0NLX09QVElPTlMpXG5cbiAgICAvLyBSZWFkIGN1cnJlbnQgdGFzayBzdGF0ZVxuICAgIGNvbnN0IHRhc2sgPSBhd2FpdCBnZXRUYXNrKHRhc2tMaXN0SWQsIHRhc2tJZClcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCByZWFzb246ICd0YXNrX25vdF9mb3VuZCcgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgY2xhaW1lZCBieSBhbm90aGVyIGFnZW50XG4gICAgaWYgKHRhc2sub3duZXIgJiYgdGFzay5vd25lciAhPT0gY2xhaW1hbnRBZ2VudElkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgcmVhc29uOiAnYWxyZWFkeV9jbGFpbWVkJywgdGFzayB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYWxyZWFkeSByZXNvbHZlZFxuICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCByZWFzb246ICdhbHJlYWR5X3Jlc29sdmVkJywgdGFzayB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHVucmVzb2x2ZWQgYmxvY2tlcnMgKG9wZW4gb3IgaW5fcHJvZ3Jlc3MgdGFza3MgYmxvY2spXG4gICAgY29uc3QgYWxsVGFza3MgPSBhd2FpdCBsaXN0VGFza3ModGFza0xpc3RJZClcbiAgICBjb25zdCB1bnJlc29sdmVkVGFza0lkcyA9IG5ldyBTZXQoXG4gICAgICBhbGxUYXNrcy5maWx0ZXIodCA9PiB0LnN0YXR1cyAhPT0gJ2NvbXBsZXRlZCcpLm1hcCh0ID0+IHQuaWQpLFxuICAgIClcbiAgICBjb25zdCBibG9ja2VkQnlUYXNrcyA9IHRhc2suYmxvY2tlZEJ5LmZpbHRlcihpZCA9PlxuICAgICAgdW5yZXNvbHZlZFRhc2tJZHMuaGFzKGlkKSxcbiAgICApXG4gICAgaWYgKGJsb2NrZWRCeVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCByZWFzb246ICdibG9ja2VkJywgdGFzaywgYmxvY2tlZEJ5VGFza3MgfVxuICAgIH1cblxuICAgIC8vIENsYWltIHRoZSB0YXNrIChhbHJlYWR5IGhvbGRpbmcgdGFza1BhdGggbG9jayBcdTIwMTQgdXNlIHVuc2FmZSB2YXJpYW50KVxuICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVUYXNrVW5zYWZlKHRhc2tMaXN0SWQsIHRhc2tJZCwge1xuICAgICAgb3duZXI6IGNsYWltYW50QWdlbnRJZCxcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHRhc2s6IHVwZGF0ZWQhIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1Rhc2tzXSBGYWlsZWQgdG8gY2xhaW0gdGFzayAke3Rhc2tJZH06ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgIClcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgcmVhc29uOiAndGFza19ub3RfZm91bmQnIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocmVsZWFzZSkge1xuICAgICAgYXdhaXQgcmVsZWFzZSgpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2xhaW1zIGEgdGFzayB3aXRoIGFuIGF0b21pYyBjaGVjayBmb3IgYWdlbnQgYnVzeSBzdGF0dXMuXG4gKiBVc2VzIGEgdGFzay1saXN0LWxldmVsIGxvY2sgdG8gZW5zdXJlIHRoZSBidXN5IGNoZWNrIGFuZCBjbGFpbSBhcmUgYXRvbWljLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGFpbVRhc2tXaXRoQnVzeUNoZWNrKFxuICB0YXNrTGlzdElkOiBzdHJpbmcsXG4gIHRhc2tJZDogc3RyaW5nLFxuICBjbGFpbWFudEFnZW50SWQ6IHN0cmluZyxcbik6IFByb21pc2U8Q2xhaW1UYXNrUmVzdWx0PiB7XG4gIGNvbnN0IGxvY2tQYXRoID0gYXdhaXQgZW5zdXJlVGFza0xpc3RMb2NrRmlsZSh0YXNrTGlzdElkKVxuXG4gIGxldCByZWxlYXNlOiAoKCkgPT4gUHJvbWlzZTx2b2lkPikgfCB1bmRlZmluZWRcbiAgdHJ5IHtcbiAgICAvLyBBY3F1aXJlIGV4Y2x1c2l2ZSBsb2NrIG9uIHRoZSB0YXNrIGxpc3RcbiAgICByZWxlYXNlID0gYXdhaXQgbG9ja2ZpbGUubG9jayhsb2NrUGF0aCwgTE9DS19PUFRJT05TKVxuXG4gICAgLy8gUmVhZCBhbGwgdGFza3MgdG8gY2hlY2sgYWdlbnQgc3RhdHVzIGFuZCB0YXNrIHN0YXRlIGF0b21pY2FsbHlcbiAgICBjb25zdCBhbGxUYXNrcyA9IGF3YWl0IGxpc3RUYXNrcyh0YXNrTGlzdElkKVxuXG4gICAgLy8gRmluZCB0aGUgdGFzayB3ZSB3YW50IHRvIGNsYWltXG4gICAgY29uc3QgdGFzayA9IGFsbFRhc2tzLmZpbmQodCA9PiB0LmlkID09PSB0YXNrSWQpXG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgcmVhc29uOiAndGFza19ub3RfZm91bmQnIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGNsYWltZWQgYnkgYW5vdGhlciBhZ2VudFxuICAgIGlmICh0YXNrLm93bmVyICYmIHRhc2sub3duZXIgIT09IGNsYWltYW50QWdlbnRJZCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHJlYXNvbjogJ2FscmVhZHlfY2xhaW1lZCcsIHRhc2sgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgcmVzb2x2ZWRcbiAgICBpZiAodGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgcmVhc29uOiAnYWxyZWFkeV9yZXNvbHZlZCcsIHRhc2sgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciB1bnJlc29sdmVkIGJsb2NrZXJzIChvcGVuIG9yIGluX3Byb2dyZXNzIHRhc2tzIGJsb2NrKVxuICAgIGNvbnN0IHVucmVzb2x2ZWRUYXNrSWRzID0gbmV3IFNldChcbiAgICAgIGFsbFRhc2tzLmZpbHRlcih0ID0+IHQuc3RhdHVzICE9PSAnY29tcGxldGVkJykubWFwKHQgPT4gdC5pZCksXG4gICAgKVxuICAgIGNvbnN0IGJsb2NrZWRCeVRhc2tzID0gdGFzay5ibG9ja2VkQnkuZmlsdGVyKGlkID0+XG4gICAgICB1bnJlc29sdmVkVGFza0lkcy5oYXMoaWQpLFxuICAgIClcbiAgICBpZiAoYmxvY2tlZEJ5VGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHJlYXNvbjogJ2Jsb2NrZWQnLCB0YXNrLCBibG9ja2VkQnlUYXNrcyB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYWdlbnQgaXMgYnVzeSB3aXRoIG90aGVyIHVucmVzb2x2ZWQgdGFza3NcbiAgICBjb25zdCBhZ2VudE9wZW5UYXNrcyA9IGFsbFRhc2tzLmZpbHRlcihcbiAgICAgIHQgPT5cbiAgICAgICAgdC5zdGF0dXMgIT09ICdjb21wbGV0ZWQnICYmXG4gICAgICAgIHQub3duZXIgPT09IGNsYWltYW50QWdlbnRJZCAmJlxuICAgICAgICB0LmlkICE9PSB0YXNrSWQsXG4gICAgKVxuICAgIGlmIChhZ2VudE9wZW5UYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgcmVhc29uOiAnYWdlbnRfYnVzeScsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIGJ1c3lXaXRoVGFza3M6IGFnZW50T3BlblRhc2tzLm1hcCh0ID0+IHQuaWQpLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYWltIHRoZSB0YXNrXG4gICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHVwZGF0ZVRhc2sodGFza0xpc3RJZCwgdGFza0lkLCB7XG4gICAgICBvd25lcjogY2xhaW1hbnRBZ2VudElkLFxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFzazogdXBkYXRlZCEgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGFza3NdIEZhaWxlZCB0byBjbGFpbSB0YXNrICR7dGFza0lkfSB3aXRoIGJ1c3kgY2hlY2s6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgIClcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgcmVhc29uOiAndGFza19ub3RfZm91bmQnIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocmVsZWFzZSkge1xuICAgICAgYXdhaXQgcmVsZWFzZSgpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGVhbSBtZW1iZXIgaW5mbyAoc3Vic2V0IG9mIFRlYW1GaWxlIG1lbWJlciBzdHJ1Y3R1cmUpXG4gKi9cbmV4cG9ydCB0eXBlIFRlYW1NZW1iZXIgPSB7XG4gIGFnZW50SWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgYWdlbnRUeXBlPzogc3RyaW5nXG59XG5cbi8qKlxuICogQWdlbnQgc3RhdHVzIGJhc2VkIG9uIHRhc2sgb3duZXJzaGlwXG4gKi9cbmV4cG9ydCB0eXBlIEFnZW50U3RhdHVzID0ge1xuICBhZ2VudElkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGFnZW50VHlwZT86IHN0cmluZ1xuICBzdGF0dXM6ICdpZGxlJyB8ICdidXN5J1xuICBjdXJyZW50VGFza3M6IHN0cmluZ1tdIC8vIHRhc2sgSURzIHRoZSBhZ2VudCBvd25zXG59XG5cbi8qKlxuICogU2FuaXRpemVzIGEgbmFtZSBmb3IgdXNlIGluIGZpbGUgcGF0aHNcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnLScpLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBSZWFkcyB0ZWFtIG1lbWJlcnMgZnJvbSB0aGUgdGVhbSBmaWxlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlYWRUZWFtTWVtYmVycyhcbiAgdGVhbU5hbWU6IHN0cmluZyxcbik6IFByb21pc2U8eyBsZWFkQWdlbnRJZDogc3RyaW5nOyBtZW1iZXJzOiBUZWFtTWVtYmVyW10gfSB8IG51bGw+IHtcbiAgY29uc3QgdGVhbXNEaXIgPSBnZXRUZWFtc0RpcigpXG4gIGNvbnN0IHRlYW1GaWxlUGF0aCA9IGpvaW4odGVhbXNEaXIsIHNhbml0aXplTmFtZSh0ZWFtTmFtZSksICdjb25maWcuanNvbicpXG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKHRlYW1GaWxlUGF0aCwgJ3V0Zi04JylcbiAgICBjb25zdCB0ZWFtRmlsZSA9IGpzb25QYXJzZShjb250ZW50KSBhcyB7XG4gICAgICBsZWFkQWdlbnRJZDogc3RyaW5nXG4gICAgICBtZW1iZXJzOiBUZWFtTWVtYmVyW11cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlYWRBZ2VudElkOiB0ZWFtRmlsZS5sZWFkQWdlbnRJZCxcbiAgICAgIG1lbWJlcnM6IHRlYW1GaWxlLm1lbWJlcnMubWFwKG0gPT4gKHtcbiAgICAgICAgYWdlbnRJZDogbS5hZ2VudElkLFxuICAgICAgICBuYW1lOiBtLm5hbWUsXG4gICAgICAgIGFnZW50VHlwZTogbS5hZ2VudFR5cGUsXG4gICAgICB9KSksXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgIGlmIChjb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUYXNrc10gRmFpbGVkIHRvIHJlYWQgdGVhbSBmaWxlIGZvciAke3RlYW1OYW1lfTogJHtlcnJvck1lc3NhZ2UoZSl9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YXR1cyBvZiBhbGwgYWdlbnRzIGluIGEgdGVhbSBiYXNlZCBvbiB0YXNrIG93bmVyc2hpcC5cbiAqIEFuIGFnZW50IGlzIGNvbnNpZGVyZWQgXCJpZGxlXCIgaWYgdGhleSBkb24ndCBvd24gYW55IG9wZW4gdGFza3MuXG4gKiBBbiBhZ2VudCBpcyBjb25zaWRlcmVkIFwiYnVzeVwiIGlmIHRoZXkgb3duIGF0IGxlYXN0IG9uZSBvcGVuIHRhc2suXG4gKlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW0gKGFsc28gdXNlZCBhcyB0YXNrTGlzdElkKVxuICogQHJldHVybnMgQXJyYXkgb2YgYWdlbnQgc3RhdHVzZXMsIG9yIG51bGwgaWYgdGVhbSBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50U3RhdHVzZXMoXG4gIHRlYW1OYW1lOiBzdHJpbmcsXG4pOiBQcm9taXNlPEFnZW50U3RhdHVzW10gfCBudWxsPiB7XG4gIGNvbnN0IHRlYW1EYXRhID0gYXdhaXQgcmVhZFRlYW1NZW1iZXJzKHRlYW1OYW1lKVxuICBpZiAoIXRlYW1EYXRhKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHRhc2tMaXN0SWQgPSBzYW5pdGl6ZU5hbWUodGVhbU5hbWUpXG4gIGNvbnN0IGFsbFRhc2tzID0gYXdhaXQgbGlzdFRhc2tzKHRhc2tMaXN0SWQpXG5cbiAgLy8gR2V0IHVucmVzb2x2ZWQgdGFza3MgZ3JvdXBlZCBieSBvd25lciAob3BlbiBvciBpbl9wcm9ncmVzcylcbiAgY29uc3QgdW5yZXNvbHZlZFRhc2tzQnlPd25lciA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKVxuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAodGFzay5zdGF0dXMgIT09ICdjb21wbGV0ZWQnICYmIHRhc2sub3duZXIpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gdW5yZXNvbHZlZFRhc2tzQnlPd25lci5nZXQodGFzay5vd25lcikgfHwgW11cbiAgICAgIGV4aXN0aW5nLnB1c2godGFzay5pZClcbiAgICAgIHVucmVzb2x2ZWRUYXNrc0J5T3duZXIuc2V0KHRhc2sub3duZXIsIGV4aXN0aW5nKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJ1aWxkIHN0YXR1cyBmb3IgZWFjaCBhZ2VudCAobGVhZGVyIGlzIGFscmVhZHkgaW4gbWVtYmVycylcbiAgcmV0dXJuIHRlYW1EYXRhLm1lbWJlcnMubWFwKG1lbWJlciA9PiB7XG4gICAgLy8gQ2hlY2sgYm90aCBuYW1lIChuZXcpIGFuZCBhZ2VudElkIChsZWdhY3kpIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIGNvbnN0IHRhc2tzQnlOYW1lID0gdW5yZXNvbHZlZFRhc2tzQnlPd25lci5nZXQobWVtYmVyLm5hbWUpIHx8IFtdXG4gICAgY29uc3QgdGFza3NCeUlkID0gdW5yZXNvbHZlZFRhc2tzQnlPd25lci5nZXQobWVtYmVyLmFnZW50SWQpIHx8IFtdXG4gICAgY29uc3QgY3VycmVudFRhc2tzID0gdW5pcShbLi4udGFza3NCeU5hbWUsIC4uLnRhc2tzQnlJZF0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50SWQ6IG1lbWJlci5hZ2VudElkLFxuICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXG4gICAgICBhZ2VudFR5cGU6IG1lbWJlci5hZ2VudFR5cGUsXG4gICAgICBzdGF0dXM6IGN1cnJlbnRUYXNrcy5sZW5ndGggPT09IDAgPyAnaWRsZScgOiAnYnVzeScsXG4gICAgICBjdXJyZW50VGFza3MsXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFJlc3VsdCBvZiB1bmFzc2lnbmluZyB0YXNrcyBmcm9tIGEgdGVhbW1hdGVcbiAqL1xuZXhwb3J0IHR5cGUgVW5hc3NpZ25UYXNrc1Jlc3VsdCA9IHtcbiAgdW5hc3NpZ25lZFRhc2tzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHN1YmplY3Q6IHN0cmluZyB9PlxuICBub3RpZmljYXRpb25NZXNzYWdlOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBVbmFzc2lnbnMgYWxsIG9wZW4gdGFza3MgZnJvbSBhIHRlYW1tYXRlIGFuZCBidWlsZHMgYSBub3RpZmljYXRpb24gbWVzc2FnZS5cbiAqIFVzZWQgd2hlbiBhIHRlYW1tYXRlIGlzIGtpbGxlZCBvciBncmFjZWZ1bGx5IHNodXRzIGRvd24uXG4gKlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIHRlYW0vdGFzayBsaXN0IG5hbWVcbiAqIEBwYXJhbSB0ZWFtbWF0ZUlkIC0gVGhlIHRlYW1tYXRlJ3MgYWdlbnQgSURcbiAqIEBwYXJhbSB0ZWFtbWF0ZU5hbWUgLSBUaGUgdGVhbW1hdGUncyBkaXNwbGF5IG5hbWVcbiAqIEBwYXJhbSByZWFzb24gLSBIb3cgdGhlIHRlYW1tYXRlIGV4aXRlZCAoJ3Rlcm1pbmF0ZWQnIHwgJ3NodXRkb3duJylcbiAqIEByZXR1cm5zIFRoZSB1bmFzc2lnbmVkIHRhc2tzIGFuZCBhIGZvcm1hdHRlZCBub3RpZmljYXRpb24gbWVzc2FnZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5hc3NpZ25UZWFtbWF0ZVRhc2tzKFxuICB0ZWFtTmFtZTogc3RyaW5nLFxuICB0ZWFtbWF0ZUlkOiBzdHJpbmcsXG4gIHRlYW1tYXRlTmFtZTogc3RyaW5nLFxuICByZWFzb246ICd0ZXJtaW5hdGVkJyB8ICdzaHV0ZG93bicsXG4pOiBQcm9taXNlPFVuYXNzaWduVGFza3NSZXN1bHQ+IHtcbiAgY29uc3QgdGFza3MgPSBhd2FpdCBsaXN0VGFza3ModGVhbU5hbWUpXG4gIGNvbnN0IHVucmVzb2x2ZWRBc3NpZ25lZFRhc2tzID0gdGFza3MuZmlsdGVyKFxuICAgIHQgPT5cbiAgICAgIHQuc3RhdHVzICE9PSAnY29tcGxldGVkJyAmJlxuICAgICAgKHQub3duZXIgPT09IHRlYW1tYXRlSWQgfHwgdC5vd25lciA9PT0gdGVhbW1hdGVOYW1lKSxcbiAgKVxuXG4gIC8vIFVuYXNzaWduIGVhY2ggdGFzayBhbmQgcmVzZXQgc3RhdHVzIHRvIG9wZW5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHVucmVzb2x2ZWRBc3NpZ25lZFRhc2tzKSB7XG4gICAgYXdhaXQgdXBkYXRlVGFzayh0ZWFtTmFtZSwgdGFzay5pZCwgeyBvd25lcjogdW5kZWZpbmVkLCBzdGF0dXM6ICdwZW5kaW5nJyB9KVxuICB9XG5cbiAgaWYgKHVucmVzb2x2ZWRBc3NpZ25lZFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1Rhc2tzXSBVbmFzc2lnbmVkICR7dW5yZXNvbHZlZEFzc2lnbmVkVGFza3MubGVuZ3RofSB0YXNrKHMpIGZyb20gJHt0ZWFtbWF0ZU5hbWV9YCxcbiAgICApXG4gIH1cblxuICAvLyBCdWlsZCBub3RpZmljYXRpb24gbWVzc2FnZVxuICBjb25zdCBhY3Rpb25WZXJiID1cbiAgICByZWFzb24gPT09ICd0ZXJtaW5hdGVkJyA/ICd3YXMgdGVybWluYXRlZCcgOiAnaGFzIHNodXQgZG93bidcbiAgbGV0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBgJHt0ZWFtbWF0ZU5hbWV9ICR7YWN0aW9uVmVyYn0uYFxuICBpZiAodW5yZXNvbHZlZEFzc2lnbmVkVGFza3MubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gdW5yZXNvbHZlZEFzc2lnbmVkVGFza3NcbiAgICAgIC5tYXAodCA9PiBgIyR7dC5pZH0gXCIke3Quc3ViamVjdH1cImApXG4gICAgICAuam9pbignLCAnKVxuICAgIG5vdGlmaWNhdGlvbk1lc3NhZ2UgKz0gYCAke3VucmVzb2x2ZWRBc3NpZ25lZFRhc2tzLmxlbmd0aH0gdGFzayhzKSB3ZXJlIHVuYXNzaWduZWQ6ICR7dGFza0xpc3R9LiBVc2UgVGFza0xpc3QgdG8gY2hlY2sgYXZhaWxhYmlsaXR5IGFuZCBUYXNrVXBkYXRlIHdpdGggb3duZXIgdG8gcmVhc3NpZ24gdGhlbSB0byBpZGxlIHRlYW1tYXRlcy5gXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuYXNzaWduZWRUYXNrczogdW5yZXNvbHZlZEFzc2lnbmVkVGFza3MubWFwKHQgPT4gKHtcbiAgICAgIGlkOiB0LmlkLFxuICAgICAgc3ViamVjdDogdC5zdWJqZWN0LFxuICAgIH0pKSxcbiAgICBub3RpZmljYXRpb25NZXNzYWdlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RBU0tTX01PREVfVEFTS19MSVNUX0lEID0gJ3Rhc2tsaXN0J1xuIiwgImltcG9ydCB0eXBlIHsgQWdlbnRDb2xvck5hbWUgfSBmcm9tICcuLi8uLi8uLi90b29scy9BZ2VudFRvb2wvYWdlbnRDb2xvck1hbmFnZXIuanMnXG5cbi8qKlxuICogVHlwZXMgb2YgYmFja2VuZHMgYXZhaWxhYmxlIGZvciB0ZWFtbWF0ZSBleGVjdXRpb24uXG4gKiAtICd0bXV4JzogVXNlcyB0bXV4IGZvciBwYW5lIG1hbmFnZW1lbnQgKHdvcmtzIGluIHRtdXggb3Igc3RhbmRhbG9uZSlcbiAqIC0gJ2l0ZXJtMic6IFVzZXMgaVRlcm0yIG5hdGl2ZSBzcGxpdCBwYW5lcyB2aWEgdGhlIGl0MiBDTElcbiAqIC0gJ2luLXByb2Nlc3MnOiBSdW5zIHRlYW1tYXRlIGluIHRoZSBzYW1lIE5vZGUuanMgcHJvY2VzcyB3aXRoIGlzb2xhdGVkIGNvbnRleHRcbiAqL1xuZXhwb3J0IHR5cGUgQmFja2VuZFR5cGUgPSAndG11eCcgfCAnaXRlcm0yJyB8ICdpbi1wcm9jZXNzJ1xuXG4vKipcbiAqIFN1YnNldCBvZiBCYWNrZW5kVHlwZSBmb3IgcGFuZS1iYXNlZCBiYWNrZW5kcyBvbmx5LlxuICogVXNlZCBpbiBtZXNzYWdlcyBhbmQgdHlwZXMgdGhhdCBzcGVjaWZpY2FsbHkgZGVhbCB3aXRoIHRlcm1pbmFsIHBhbmVzLlxuICovXG5leHBvcnQgdHlwZSBQYW5lQmFja2VuZFR5cGUgPSAndG11eCcgfCAnaXRlcm0yJ1xuXG4vKipcbiAqIE9wYXF1ZSBpZGVudGlmaWVyIGZvciBhIHBhbmUgbWFuYWdlZCBieSBhIGJhY2tlbmQuXG4gKiBGb3IgdG11eCwgdGhpcyBpcyB0aGUgdG11eCBwYW5lIElEIChlLmcuLCBcIiUxXCIpLlxuICogRm9yIGlUZXJtMiwgdGhpcyBpcyB0aGUgc2Vzc2lvbiBJRCByZXR1cm5lZCBieSBpdDIuXG4gKi9cbmV4cG9ydCB0eXBlIFBhbmVJZCA9IHN0cmluZ1xuXG4vKipcbiAqIFJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyB0ZWFtbWF0ZSBwYW5lLlxuICovXG5leHBvcnQgdHlwZSBDcmVhdGVQYW5lUmVzdWx0ID0ge1xuICAvKiogVGhlIHBhbmUgSUQgZm9yIHRoZSBuZXdseSBjcmVhdGVkIHBhbmUgKi9cbiAgcGFuZUlkOiBQYW5lSWRcbiAgLyoqIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgdGVhbW1hdGUgcGFuZSAoYWZmZWN0cyBsYXlvdXQgc3RyYXRlZ3kpICovXG4gIGlzRmlyc3RUZWFtbWF0ZTogYm9vbGVhblxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgcGFuZSBtYW5hZ2VtZW50IGJhY2tlbmRzLlxuICogQWJzdHJhY3RzIG9wZXJhdGlvbnMgZm9yIGNyZWF0aW5nIGFuZCBtYW5hZ2luZyB0ZXJtaW5hbCBwYW5lc1xuICogZm9yIHRlYW1tYXRlIHZpc3VhbGl6YXRpb24gaW4gc3dhcm0gbW9kZS5cbiAqL1xuZXhwb3J0IHR5cGUgUGFuZUJhY2tlbmQgPSB7XG4gIC8qKiBUaGUgdHlwZSBpZGVudGlmaWVyIGZvciB0aGlzIGJhY2tlbmQgKi9cbiAgcmVhZG9ubHkgdHlwZTogQmFja2VuZFR5cGVcblxuICAvKiogSHVtYW4tcmVhZGFibGUgZGlzcGxheSBuYW1lIGZvciB0aGlzIGJhY2tlbmQgKi9cbiAgcmVhZG9ubHkgZGlzcGxheU5hbWU6IHN0cmluZ1xuXG4gIC8qKiBXaGV0aGVyIHRoaXMgYmFja2VuZCBzdXBwb3J0cyBoaWRpbmcgYW5kIHNob3dpbmcgcGFuZXMgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydHNIaWRlU2hvdzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyBiYWNrZW5kIGlzIGF2YWlsYWJsZSBvbiB0aGUgc3lzdGVtLlxuICAgKiBGb3IgdG11eDogY2hlY2tzIGlmIHRtdXggY29tbWFuZCBleGlzdHMuXG4gICAqIEZvciBpVGVybTI6IGNoZWNrcyBpZiBpdDIgQ0xJIGlzIGluc3RhbGxlZCBhbmQgY29uZmlndXJlZC5cbiAgICovXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj5cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGluc2lkZSB0aGlzIGJhY2tlbmQncyBlbnZpcm9ubWVudC5cbiAgICogRm9yIHRtdXg6IGNoZWNrcyBpZiB3ZSdyZSBpbiBhIHRtdXggc2Vzc2lvbi5cbiAgICogRm9yIGlUZXJtMjogY2hlY2tzIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gaVRlcm0yLlxuICAgKi9cbiAgaXNSdW5uaW5nSW5zaWRlKCk6IFByb21pc2U8Ym9vbGVhbj5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwYW5lIGZvciBhIHRlYW1tYXRlIGluIHRoZSBzd2FybSB2aWV3LlxuICAgKiBUaGUgYmFja2VuZCBoYW5kbGVzIGxheW91dCBzdHJhdGVneSAod2l0aC93aXRob3V0IGxlYWRlciBwYW5lKS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgLSBUaGUgdGVhbW1hdGUncyBuYW1lIGZvciBkaXNwbGF5XG4gICAqIEBwYXJhbSBjb2xvciAtIFRoZSBjb2xvciB0byB1c2UgZm9yIHRoZSBwYW5lIGJvcmRlci90aXRsZVxuICAgKiBAcmV0dXJucyBUaGUgcGFuZSBJRCBhbmQgd2hldGhlciB0aGlzIHdhcyB0aGUgZmlyc3QgdGVhbW1hdGVcbiAgICovXG4gIGNyZWF0ZVRlYW1tYXRlUGFuZUluU3dhcm1WaWV3KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb2xvcjogQWdlbnRDb2xvck5hbWUsXG4gICk6IFByb21pc2U8Q3JlYXRlUGFuZVJlc3VsdD5cblxuICAvKipcbiAgICogU2VuZHMgYSBjb21tYW5kIHRvIGV4ZWN1dGUgaW4gYSBzcGVjaWZpYyBwYW5lLlxuICAgKlxuICAgKiBAcGFyYW0gcGFuZUlkIC0gVGhlIHBhbmUgdG8gc2VuZCB0aGUgY29tbWFuZCB0b1xuICAgKiBAcGFyYW0gY29tbWFuZCAtIFRoZSBjb21tYW5kIHN0cmluZyB0byBleGVjdXRlXG4gICAqIEBwYXJhbSB1c2VFeHRlcm5hbFNlc3Npb24gLSBJZiB0cnVlLCB1c2VzIGV4dGVybmFsIHNlc3Npb24gc29ja2V0ICh0bXV4LXNwZWNpZmljKVxuICAgKi9cbiAgc2VuZENvbW1hbmRUb1BhbmUoXG4gICAgcGFuZUlkOiBQYW5lSWQsXG4gICAgY29tbWFuZDogc3RyaW5nLFxuICAgIHVzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD5cblxuICAvKipcbiAgICogU2V0cyB0aGUgYm9yZGVyIGNvbG9yIGZvciBhIHBhbmUuXG4gICAqXG4gICAqIEBwYXJhbSBwYW5lSWQgLSBUaGUgcGFuZSB0byBzdHlsZVxuICAgKiBAcGFyYW0gY29sb3IgLSBUaGUgY29sb3IgdG8gYXBwbHkgdG8gdGhlIGJvcmRlclxuICAgKiBAcGFyYW0gdXNlRXh0ZXJuYWxTZXNzaW9uIC0gSWYgdHJ1ZSwgdXNlcyBleHRlcm5hbCBzZXNzaW9uIHNvY2tldCAodG11eC1zcGVjaWZpYylcbiAgICovXG4gIHNldFBhbmVCb3JkZXJDb2xvcihcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICBjb2xvcjogQWdlbnRDb2xvck5hbWUsXG4gICAgdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPlxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0aXRsZSBmb3IgYSBwYW5lIChkaXNwbGF5ZWQgaW4gcGFuZSBib3JkZXIvaGVhZGVyKS5cbiAgICpcbiAgICogQHBhcmFtIHBhbmVJZCAtIFRoZSBwYW5lIHRvIHRpdGxlXG4gICAqIEBwYXJhbSBuYW1lIC0gVGhlIHRpdGxlIHRvIGRpc3BsYXlcbiAgICogQHBhcmFtIGNvbG9yIC0gVGhlIGNvbG9yIGZvciB0aGUgdGl0bGUgdGV4dFxuICAgKiBAcGFyYW0gdXNlRXh0ZXJuYWxTZXNzaW9uIC0gSWYgdHJ1ZSwgdXNlcyBleHRlcm5hbCBzZXNzaW9uIHNvY2tldCAodG11eC1zcGVjaWZpYylcbiAgICovXG4gIHNldFBhbmVUaXRsZShcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgY29sb3I6IEFnZW50Q29sb3JOYW1lLFxuICAgIHVzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD5cblxuICAvKipcbiAgICogRW5hYmxlcyBwYW5lIGJvcmRlciBzdGF0dXMgZGlzcGxheSAoc2hvd3MgdGl0bGVzIGluIGJvcmRlcnMpLlxuICAgKlxuICAgKiBAcGFyYW0gd2luZG93VGFyZ2V0IC0gVGhlIHdpbmRvdyB0byBlbmFibGUgc3RhdHVzIGZvciAob3B0aW9uYWwpXG4gICAqIEBwYXJhbSB1c2VFeHRlcm5hbFNlc3Npb24gLSBJZiB0cnVlLCB1c2VzIGV4dGVybmFsIHNlc3Npb24gc29ja2V0ICh0bXV4LXNwZWNpZmljKVxuICAgKi9cbiAgZW5hYmxlUGFuZUJvcmRlclN0YXR1cyhcbiAgICB3aW5kb3dUYXJnZXQ/OiBzdHJpbmcsXG4gICAgdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPlxuXG4gIC8qKlxuICAgKiBSZWJhbGFuY2VzIHBhbmVzIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgbGF5b3V0LlxuICAgKlxuICAgKiBAcGFyYW0gd2luZG93VGFyZ2V0IC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYW5lc1xuICAgKiBAcGFyYW0gaGFzTGVhZGVyIC0gV2hldGhlciB0aGVyZSdzIGEgbGVhZGVyIHBhbmUgKGFmZmVjdHMgbGF5b3V0IHN0cmF0ZWd5KVxuICAgKi9cbiAgcmViYWxhbmNlUGFuZXMod2luZG93VGFyZ2V0OiBzdHJpbmcsIGhhc0xlYWRlcjogYm9vbGVhbik6IFByb21pc2U8dm9pZD5cblxuICAvKipcbiAgICogS2lsbHMvY2xvc2VzIGEgc3BlY2lmaWMgcGFuZS5cbiAgICpcbiAgICogQHBhcmFtIHBhbmVJZCAtIFRoZSBwYW5lIHRvIGtpbGxcbiAgICogQHBhcmFtIHVzZUV4dGVybmFsU2Vzc2lvbiAtIElmIHRydWUsIHVzZXMgZXh0ZXJuYWwgc2Vzc2lvbiBzb2NrZXQgKHRtdXgtc3BlY2lmaWMpXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHBhbmUgd2FzIGtpbGxlZCBzdWNjZXNzZnVsbHksIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAga2lsbFBhbmUocGFuZUlkOiBQYW5lSWQsIHVzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4pOiBQcm9taXNlPGJvb2xlYW4+XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgcGFuZSBieSBicmVha2luZyBpdCBvdXQgaW50byBhIGhpZGRlbiB3aW5kb3cuXG4gICAqIFRoZSBwYW5lIHJlbWFpbnMgcnVubmluZyBidXQgaXMgbm90IHZpc2libGUgaW4gdGhlIG1haW4gbGF5b3V0LlxuICAgKlxuICAgKiBAcGFyYW0gcGFuZUlkIC0gVGhlIHBhbmUgdG8gaGlkZVxuICAgKiBAcGFyYW0gdXNlRXh0ZXJuYWxTZXNzaW9uIC0gSWYgdHJ1ZSwgdXNlcyBleHRlcm5hbCBzZXNzaW9uIHNvY2tldCAodG11eC1zcGVjaWZpYylcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcGFuZSB3YXMgaGlkZGVuIHN1Y2Nlc3NmdWxseSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBoaWRlUGFuZShwYW5lSWQ6IFBhbmVJZCwgdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj5cblxuICAvKipcbiAgICogU2hvd3MgYSBwcmV2aW91c2x5IGhpZGRlbiBwYW5lIGJ5IGpvaW5pbmcgaXQgYmFjayBpbnRvIHRoZSBtYWluIHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIHBhbmVJZCAtIFRoZSBwYW5lIHRvIHNob3dcbiAgICogQHBhcmFtIHRhcmdldFdpbmRvd09yUGFuZSAtIFRoZSB3aW5kb3cgb3IgcGFuZSB0byBqb2luIGludG9cbiAgICogQHBhcmFtIHVzZUV4dGVybmFsU2Vzc2lvbiAtIElmIHRydWUsIHVzZXMgZXh0ZXJuYWwgc2Vzc2lvbiBzb2NrZXQgKHRtdXgtc3BlY2lmaWMpXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHBhbmUgd2FzIHNob3duIHN1Y2Nlc3NmdWxseSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBzaG93UGFuZShcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICB0YXJnZXRXaW5kb3dPclBhbmU6IHN0cmluZyxcbiAgICB1c2VFeHRlcm5hbFNlc3Npb24/OiBib29sZWFuLFxuICApOiBQcm9taXNlPGJvb2xlYW4+XG59XG5cbi8qKlxuICogUmVzdWx0IGZyb20gYmFja2VuZCBkZXRlY3Rpb24uXG4gKi9cbmV4cG9ydCB0eXBlIEJhY2tlbmREZXRlY3Rpb25SZXN1bHQgPSB7XG4gIC8qKiBUaGUgYmFja2VuZCB0aGF0IHNob3VsZCBiZSB1c2VkICovXG4gIGJhY2tlbmQ6IFBhbmVCYWNrZW5kXG4gIC8qKiBXaGV0aGVyIHdlJ3JlIHJ1bm5pbmcgaW5zaWRlIHRoZSBiYWNrZW5kJ3MgbmF0aXZlIGVudmlyb25tZW50ICovXG4gIGlzTmF0aXZlOiBib29sZWFuXG4gIC8qKiBJZiBpVGVybTIgaXMgZGV0ZWN0ZWQgYnV0IGl0MiBub3QgaW5zdGFsbGVkLCB0aGlzIHdpbGwgYmUgdHJ1ZSAqL1xuICBuZWVkc0l0MlNldHVwPzogYm9vbGVhblxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW4tUHJvY2VzcyBUZWFtbWF0ZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBJZGVudGl0eSBmaWVsZHMgZm9yIGEgdGVhbW1hdGUuXG4gKiBUaGlzIGlzIGEgc3Vic2V0IHNoYXJlZCB3aXRoIFRlYW1tYXRlQ29udGV4dCAoVGFzayAjNCkgdG8gYXZvaWQgY2lyY3VsYXIgZGVwcy5cbiAqIGxpZmVjeWNsZS1zcGVjaWFsaXN0IGRlZmluZXMgdGhlIGZ1bGwgVGVhbW1hdGVDb250ZXh0IHdpdGggYWRkaXRpb25hbCBmaWVsZHMuXG4gKi9cbmV4cG9ydCB0eXBlIFRlYW1tYXRlSWRlbnRpdHkgPSB7XG4gIC8qKiBBZ2VudCBuYW1lIChlLmcuLCBcInJlc2VhcmNoZXJcIiwgXCJ0ZXN0ZXJcIikgKi9cbiAgbmFtZTogc3RyaW5nXG4gIC8qKiBUZWFtIG5hbWUgdGhpcyB0ZWFtbWF0ZSBiZWxvbmdzIHRvICovXG4gIHRlYW1OYW1lOiBzdHJpbmdcbiAgLyoqIEFzc2lnbmVkIGNvbG9yIGZvciBVSSBkaWZmZXJlbnRpYXRpb24gKi9cbiAgY29sb3I/OiBBZ2VudENvbG9yTmFtZVxuICAvKiogV2hldGhlciBwbGFuIG1vZGUgYXBwcm92YWwgaXMgcmVxdWlyZWQgYmVmb3JlIGltcGxlbWVudGF0aW9uICovXG4gIHBsYW5Nb2RlUmVxdWlyZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3Igc3Bhd25pbmcgYSB0ZWFtbWF0ZSAoYW55IGV4ZWN1dGlvbiBtb2RlKS5cbiAqL1xuZXhwb3J0IHR5cGUgVGVhbW1hdGVTcGF3bkNvbmZpZyA9IFRlYW1tYXRlSWRlbnRpdHkgJiB7XG4gIC8qKiBJbml0aWFsIHByb21wdCB0byBzZW5kIHRvIHRoZSB0ZWFtbWF0ZSAqL1xuICBwcm9tcHQ6IHN0cmluZ1xuICAvKiogV29ya2luZyBkaXJlY3RvcnkgZm9yIHRoZSB0ZWFtbWF0ZSAqL1xuICBjd2Q6IHN0cmluZ1xuICAvKiogTW9kZWwgdG8gdXNlIGZvciB0aGlzIHRlYW1tYXRlICovXG4gIG1vZGVsPzogc3RyaW5nXG4gIC8qKiBTeXN0ZW0gcHJvbXB0IGZvciB0aGlzIHRlYW1tYXRlIChyZXNvbHZlZCBmcm9tIHdvcmtmbG93IGNvbmZpZykgKi9cbiAgc3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIC8qKiBIb3cgdG8gYXBwbHkgdGhlIHN5c3RlbSBwcm9tcHQ6ICdyZXBsYWNlJyBvciAnYXBwZW5kJyB0byBkZWZhdWx0ICovXG4gIHN5c3RlbVByb21wdE1vZGU/OiAnZGVmYXVsdCcgfCAncmVwbGFjZScgfCAnYXBwZW5kJ1xuICAvKiogT3B0aW9uYWwgZ2l0IHdvcmt0cmVlIHBhdGggKi9cbiAgd29ya3RyZWVQYXRoPzogc3RyaW5nXG4gIC8qKiBQYXJlbnQgc2Vzc2lvbiBJRCAoZm9yIGNvbnRleHQgbGlua2luZykgKi9cbiAgcGFyZW50U2Vzc2lvbklkOiBzdHJpbmdcbiAgLyoqIFRvb2wgcGVybWlzc2lvbnMgdG8gZ3JhbnQgdGhpcyB0ZWFtbWF0ZSAqL1xuICBwZXJtaXNzaW9ucz86IHN0cmluZ1tdXG4gIC8qKiBXaGV0aGVyIHRoaXMgdGVhbW1hdGUgY2FuIHNob3cgcGVybWlzc2lvbiBwcm9tcHRzIGZvciB1bmxpc3RlZCB0b29scy5cbiAgICogV2hlbiBmYWxzZSAoZGVmYXVsdCksIHVubGlzdGVkIHRvb2xzIGFyZSBhdXRvLWRlbmllZC4gKi9cbiAgYWxsb3dQZXJtaXNzaW9uUHJvbXB0cz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBSZXN1bHQgZnJvbSBzcGF3bmluZyBhIHRlYW1tYXRlLlxuICovXG5leHBvcnQgdHlwZSBUZWFtbWF0ZVNwYXduUmVzdWx0ID0ge1xuICAvKiogV2hldGhlciBzcGF3biB3YXMgc3VjY2Vzc2Z1bCAqL1xuICBzdWNjZXNzOiBib29sZWFuXG4gIC8qKiBVbmlxdWUgYWdlbnQgSUQgKGZvcm1hdDogYWdlbnROYW1lQHRlYW1OYW1lKSAqL1xuICBhZ2VudElkOiBzdHJpbmdcbiAgLyoqIEVycm9yIG1lc3NhZ2UgaWYgc3Bhd24gZmFpbGVkICovXG4gIGVycm9yPzogc3RyaW5nXG5cbiAgLyoqXG4gICAqIEFib3J0IGNvbnRyb2xsZXIgZm9yIGxpZmVjeWNsZSBtYW5hZ2VtZW50IChpbi1wcm9jZXNzIG9ubHkpLlxuICAgKiBMZWFkZXIgdXNlcyB0aGlzIHRvIGNhbmNlbC9raWxsIHRoZSB0ZWFtbWF0ZS5cbiAgICogRm9yIHBhbmUtYmFzZWQgdGVhbW1hdGVzLCB1c2Uga2lsbCgpIG1ldGhvZCBpbnN0ZWFkLlxuICAgKi9cbiAgYWJvcnRDb250cm9sbGVyPzogQWJvcnRDb250cm9sbGVyXG5cbiAgLyoqXG4gICAqIFRhc2sgSUQgaW4gQXBwU3RhdGUudGFza3MgKGluLXByb2Nlc3Mgb25seSkuXG4gICAqIFVzZWQgZm9yIFVJIHJlbmRlcmluZyBhbmQgcHJvZ3Jlc3MgdHJhY2tpbmcuXG4gICAqIGFnZW50SWQgaXMgdGhlIGxvZ2ljYWwgaWRlbnRpZmllcjsgdGFza0lkIGlzIGZvciBBcHBTdGF0ZSBpbmRleGluZy5cbiAgICovXG4gIHRhc2tJZD86IHN0cmluZ1xuXG4gIC8qKiBQYW5lIElEIChwYW5lLWJhc2VkIG9ubHkpICovXG4gIHBhbmVJZD86IFBhbmVJZFxufVxuXG4vKipcbiAqIE1lc3NhZ2UgdG8gc2VuZCB0byBhIHRlYW1tYXRlLlxuICovXG5leHBvcnQgdHlwZSBUZWFtbWF0ZU1lc3NhZ2UgPSB7XG4gIC8qKiBNZXNzYWdlIGNvbnRlbnQgKi9cbiAgdGV4dDogc3RyaW5nXG4gIC8qKiBTZW5kZXIgYWdlbnQgSUQgKi9cbiAgZnJvbTogc3RyaW5nXG4gIC8qKiBTZW5kZXIgZGlzcGxheSBjb2xvciAqL1xuICBjb2xvcj86IHN0cmluZ1xuICAvKiogTWVzc2FnZSB0aW1lc3RhbXAgKElTTyBzdHJpbmcpICovXG4gIHRpbWVzdGFtcD86IHN0cmluZ1xuICAvKiogNS0xMCB3b3JkIHN1bW1hcnkgc2hvd24gYXMgcHJldmlldyBpbiB0aGUgVUkgKi9cbiAgc3VtbWFyeT86IHN0cmluZ1xufVxuXG4vKipcbiAqIENvbW1vbiBpbnRlcmZhY2UgZm9yIHRlYW1tYXRlIGV4ZWN1dGlvbiBiYWNrZW5kcy5cbiAqIEFic3RyYWN0cyB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBwYW5lLWJhc2VkICh0bXV4L2lUZXJtMikgYW5kIGluLXByb2Nlc3MgZXhlY3V0aW9uLlxuICpcbiAqIFBhbmVCYWNrZW5kIGhhbmRsZXMgbG93LWxldmVsIHBhbmUgb3BlcmF0aW9uczsgVGVhbW1hdGVFeGVjdXRvciBoYW5kbGVzXG4gKiBoaWdoLWxldmVsIHRlYW1tYXRlIGxpZmVjeWNsZSBvcGVyYXRpb25zIHRoYXQgd29yayBhY3Jvc3MgYWxsIGJhY2tlbmRzLlxuICovXG5leHBvcnQgdHlwZSBUZWFtbWF0ZUV4ZWN1dG9yID0ge1xuICAvKiogQmFja2VuZCB0eXBlIGlkZW50aWZpZXIgKi9cbiAgcmVhZG9ubHkgdHlwZTogQmFja2VuZFR5cGVcblxuICAvKiogQ2hlY2sgaWYgdGhpcyBleGVjdXRvciBpcyBhdmFpbGFibGUgb24gdGhlIHN5c3RlbSAqL1xuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+XG5cbiAgLyoqIFNwYXduIGEgbmV3IHRlYW1tYXRlIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24gKi9cbiAgc3Bhd24oY29uZmlnOiBUZWFtbWF0ZVNwYXduQ29uZmlnKTogUHJvbWlzZTxUZWFtbWF0ZVNwYXduUmVzdWx0PlxuXG4gIC8qKiBTZW5kIGEgbWVzc2FnZSB0byBhIHRlYW1tYXRlICovXG4gIHNlbmRNZXNzYWdlKGFnZW50SWQ6IHN0cmluZywgbWVzc2FnZTogVGVhbW1hdGVNZXNzYWdlKTogUHJvbWlzZTx2b2lkPlxuXG4gIC8qKiBUZXJtaW5hdGUgYSB0ZWFtbWF0ZSAoZ3JhY2VmdWwgc2h1dGRvd24gcmVxdWVzdCkgKi9cbiAgdGVybWluYXRlKGFnZW50SWQ6IHN0cmluZywgcmVhc29uPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPlxuXG4gIC8qKiBGb3JjZSBraWxsIGEgdGVhbW1hdGUgKGltbWVkaWF0ZSB0ZXJtaW5hdGlvbikgKi9cbiAga2lsbChhZ2VudElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+XG5cbiAgLyoqIENoZWNrIGlmIGEgdGVhbW1hdGUgaXMgc3RpbGwgYWN0aXZlICovXG4gIGlzQWN0aXZlKGFnZW50SWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj5cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFR5cGUgR3VhcmRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIFR5cGUgZ3VhcmQgdG8gY2hlY2sgaWYgYSBiYWNrZW5kIHR5cGUgdXNlcyB0ZXJtaW5hbCBwYW5lcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGFuZUJhY2tlbmQodHlwZTogQmFja2VuZFR5cGUpOiB0eXBlIGlzICd0bXV4JyB8ICdpdGVybTInIHtcbiAgcmV0dXJuIHR5cGUgPT09ICd0bXV4JyB8fCB0eXBlID09PSAnaXRlcm0yJ1xufVxuIiwgImltcG9ydCB7IG1rZGlyU3luYywgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBta2RpciwgcmVhZEZpbGUsIHJtLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGdldFNlc3Npb25DcmVhdGVkVGVhbXMgfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGdldFRlYW1zRGlyIH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIGdldEVycm5vQ29kZSB9IGZyb20gJy4uL2Vycm9ycy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvd1dpdGhDd2QgfSBmcm9tICcuLi9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBnaXRFeGUgfSBmcm9tICcuLi9naXQuanMnXG5pbXBvcnQgeyBsYXp5U2NoZW1hIH0gZnJvbSAnLi4vbGF6eVNjaGVtYS5qcydcbmltcG9ydCB0eXBlIHsgUGVybWlzc2lvbk1vZGUgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uTW9kZS5qcydcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZ2V0VGFza3NEaXIsIG5vdGlmeVRhc2tzVXBkYXRlZCB9IGZyb20gJy4uL3Rhc2tzLmpzJ1xuaW1wb3J0IHsgZ2V0QWdlbnROYW1lLCBnZXRUZWFtTmFtZSwgaXNUZWFtbWF0ZSB9IGZyb20gJy4uL3RlYW1tYXRlLmpzJ1xuaW1wb3J0IHsgdHlwZSBCYWNrZW5kVHlwZSwgaXNQYW5lQmFja2VuZCB9IGZyb20gJy4vYmFja2VuZHMvdHlwZXMuanMnXG5pbXBvcnQgeyBURUFNX0xFQURfTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgY29uc3QgaW5wdXRTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHouc3RyaWN0T2JqZWN0KHtcbiAgICBvcGVyYXRpb246IHpcbiAgICAgIC5lbnVtKFsnc3Bhd25UZWFtJywgJ2NsZWFudXAnXSlcbiAgICAgIC5kZXNjcmliZShcbiAgICAgICAgJ09wZXJhdGlvbjogc3Bhd25UZWFtIHRvIGNyZWF0ZSBhIHRlYW0sIGNsZWFudXAgdG8gcmVtb3ZlIHRlYW0gYW5kIHRhc2sgZGlyZWN0b3JpZXMuJyxcbiAgICAgICksXG4gICAgYWdlbnRfdHlwZTogelxuICAgICAgLnN0cmluZygpXG4gICAgICAub3B0aW9uYWwoKVxuICAgICAgLmRlc2NyaWJlKFxuICAgICAgICAnVHlwZS9yb2xlIG9mIHRoZSB0ZWFtIGxlYWQgKGUuZy4sIFwicmVzZWFyY2hlclwiLCBcInRlc3QtcnVubmVyXCIpLiAnICtcbiAgICAgICAgICAnVXNlZCBmb3IgdGVhbSBmaWxlIGFuZCBpbnRlci1hZ2VudCBjb29yZGluYXRpb24uJyxcbiAgICAgICksXG4gICAgdGVhbV9uYW1lOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5vcHRpb25hbCgpXG4gICAgICAuZGVzY3JpYmUoJ05hbWUgZm9yIHRoZSBuZXcgdGVhbSB0byBjcmVhdGUgKHJlcXVpcmVkIGZvciBzcGF3blRlYW0pLicpLFxuICAgIGRlc2NyaXB0aW9uOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5vcHRpb25hbCgpXG4gICAgICAuZGVzY3JpYmUoJ1RlYW0gZGVzY3JpcHRpb24vcHVycG9zZSAob25seSB1c2VkIHdpdGggc3Bhd25UZWFtKS4nKSxcbiAgfSksXG4pXG5cbi8vIE91dHB1dCB0eXBlcyBmb3IgZGlmZmVyZW50IG9wZXJhdGlvbnNcbmV4cG9ydCB0eXBlIFNwYXduVGVhbU91dHB1dCA9IHtcbiAgdGVhbV9uYW1lOiBzdHJpbmdcbiAgdGVhbV9maWxlX3BhdGg6IHN0cmluZ1xuICBsZWFkX2FnZW50X2lkOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ2xlYW51cE91dHB1dCA9IHtcbiAgc3VjY2VzczogYm9vbGVhblxuICBtZXNzYWdlOiBzdHJpbmdcbiAgdGVhbV9uYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFRlYW1BbGxvd2VkUGF0aCA9IHtcbiAgcGF0aDogc3RyaW5nIC8vIERpcmVjdG9yeSBwYXRoIChhYnNvbHV0ZSlcbiAgdG9vbE5hbWU6IHN0cmluZyAvLyBUaGUgdG9vbCB0aGlzIGFwcGxpZXMgdG8gKGUuZy4sIFwiRWRpdFwiLCBcIldyaXRlXCIpXG4gIGFkZGVkQnk6IHN0cmluZyAvLyBBZ2VudCBuYW1lIHdobyBhZGRlZCB0aGlzIHJ1bGVcbiAgYWRkZWRBdDogbnVtYmVyIC8vIFRpbWVzdGFtcCB3aGVuIGFkZGVkXG59XG5cbmV4cG9ydCB0eXBlIFRlYW1GaWxlID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgY3JlYXRlZEF0OiBudW1iZXJcbiAgbGVhZEFnZW50SWQ6IHN0cmluZ1xuICBsZWFkU2Vzc2lvbklkPzogc3RyaW5nIC8vIEFjdHVhbCBzZXNzaW9uIFVVSUQgb2YgdGhlIGxlYWRlciAoZm9yIGRpc2NvdmVyeSlcbiAgaGlkZGVuUGFuZUlkcz86IHN0cmluZ1tdIC8vIFBhbmUgSURzIHRoYXQgYXJlIGN1cnJlbnRseSBoaWRkZW4gZnJvbSB0aGUgVUlcbiAgdGVhbUFsbG93ZWRQYXRocz86IFRlYW1BbGxvd2VkUGF0aFtdIC8vIFBhdGhzIGFsbCB0ZWFtbWF0ZXMgY2FuIGVkaXQgd2l0aG91dCBhc2tpbmdcbiAgbWVtYmVyczogQXJyYXk8e1xuICAgIGFnZW50SWQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGFnZW50VHlwZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgcHJvbXB0Pzogc3RyaW5nXG4gICAgY29sb3I/OiBzdHJpbmdcbiAgICBwbGFuTW9kZVJlcXVpcmVkPzogYm9vbGVhblxuICAgIGpvaW5lZEF0OiBudW1iZXJcbiAgICB0bXV4UGFuZUlkOiBzdHJpbmdcbiAgICBjd2Q6IHN0cmluZ1xuICAgIHdvcmt0cmVlUGF0aD86IHN0cmluZ1xuICAgIHNlc3Npb25JZD86IHN0cmluZ1xuICAgIHN1YnNjcmlwdGlvbnM6IHN0cmluZ1tdXG4gICAgYmFja2VuZFR5cGU/OiBCYWNrZW5kVHlwZVxuICAgIGlzQWN0aXZlPzogYm9vbGVhbiAvLyBmYWxzZSB3aGVuIGlkbGUsIHVuZGVmaW5lZC90cnVlIHdoZW4gYWN0aXZlXG4gICAgbW9kZT86IFBlcm1pc3Npb25Nb2RlIC8vIEN1cnJlbnQgcGVybWlzc2lvbiBtb2RlIGZvciB0aGlzIHRlYW1tYXRlXG4gIH0+XG59XG5cbmV4cG9ydCB0eXBlIElucHV0ID0gei5pbmZlcjxSZXR1cm5UeXBlPHR5cGVvZiBpbnB1dFNjaGVtYT4+XG4vLyBFeHBvcnQgU3Bhd25UZWFtT3V0cHV0IGFzIE91dHB1dCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuZXhwb3J0IHR5cGUgT3V0cHV0ID0gU3Bhd25UZWFtT3V0cHV0XG5cbi8qKlxuICogU2FuaXRpemVzIGEgbmFtZSBmb3IgdXNlIGluIHRtdXggd2luZG93IG5hbWVzLCB3b3JrdHJlZSBwYXRocywgYW5kIGZpbGUgcGF0aHMuXG4gKiBSZXBsYWNlcyBhbGwgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpdGggaHlwaGVucyBhbmQgbG93ZXJjYXNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJy0nKS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogU2FuaXRpemVzIGFuIGFnZW50IG5hbWUgZm9yIHVzZSBpbiBkZXRlcm1pbmlzdGljIGFnZW50IElEcy5cbiAqIFJlcGxhY2VzIEAgd2l0aCAtIHRvIHByZXZlbnQgYW1iaWd1aXR5IGluIHRoZSBhZ2VudE5hbWVAdGVhbU5hbWUgZm9ybWF0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVBZ2VudE5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvQC9nLCAnLScpXG59XG5cbi8qKlxuICogR2V0cyB0aGUgcGF0aCB0byBhIHRlYW0ncyBkaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW1EaXIodGVhbU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldFRlYW1zRGlyKCksIHNhbml0aXplTmFtZSh0ZWFtTmFtZSkpXG59XG5cbi8qKlxuICogR2V0cyB0aGUgcGF0aCB0byBhIHRlYW0ncyBjb25maWcuanNvbiBmaWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtRmlsZVBhdGgodGVhbU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldFRlYW1EaXIodGVhbU5hbWUpLCAnY29uZmlnLmpzb24nKVxufVxuXG4vKipcbiAqIFJlYWRzIGEgdGVhbSBmaWxlIGJ5IG5hbWUgKHN5bmMgXHUyMDE0IGZvciBzeW5jIGNvbnRleHRzIGxpa2UgUmVhY3QgcmVuZGVyIHBhdGhzKVxuICogQGludGVybmFsIEV4cG9ydGVkIGZvciB0ZWFtIGRpc2NvdmVyeSBVSVxuICovXG4vLyBzeW5jIElPOiBjYWxsZWQgZnJvbSBzeW5jIGNvbnRleHRcbmV4cG9ydCBmdW5jdGlvbiByZWFkVGVhbUZpbGUodGVhbU5hbWU6IHN0cmluZyk6IFRlYW1GaWxlIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlU3luYyhnZXRUZWFtRmlsZVBhdGgodGVhbU5hbWUpLCAndXRmLTgnKVxuICAgIHJldHVybiBqc29uUGFyc2UoY29udGVudCkgYXMgVGVhbUZpbGVcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChnZXRFcnJub0NvZGUoZSkgPT09ICdFTk9FTlQnKSByZXR1cm4gbnVsbFxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBGYWlsZWQgdG8gcmVhZCB0ZWFtIGZpbGUgZm9yICR7dGVhbU5hbWV9OiAke2Vycm9yTWVzc2FnZShlKX1gLFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVhZHMgYSB0ZWFtIGZpbGUgYnkgbmFtZSAoYXN5bmMgXHUyMDE0IGZvciB0b29sIGhhbmRsZXJzIGFuZCBvdGhlciBhc3luYyBjb250ZXh0cylcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRUZWFtRmlsZUFzeW5jKFxuICB0ZWFtTmFtZTogc3RyaW5nLFxuKTogUHJvbWlzZTxUZWFtRmlsZSB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZ2V0VGVhbUZpbGVQYXRoKHRlYW1OYW1lKSwgJ3V0Zi04JylcbiAgICByZXR1cm4ganNvblBhcnNlKGNvbnRlbnQpIGFzIFRlYW1GaWxlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZ2V0RXJybm9Db2RlKGUpID09PSAnRU5PRU5UJykgcmV0dXJuIG51bGxcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1RlYW1tYXRlVG9vbF0gRmFpbGVkIHRvIHJlYWQgdGVhbSBmaWxlIGZvciAke3RlYW1OYW1lfTogJHtlcnJvck1lc3NhZ2UoZSl9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFdyaXRlcyBhIHRlYW0gZmlsZSAoc3luYyBcdTIwMTQgZm9yIHN5bmMgY29udGV4dHMpXG4gKi9cbi8vIHN5bmMgSU86IGNhbGxlZCBmcm9tIHN5bmMgY29udGV4dFxuZnVuY3Rpb24gd3JpdGVUZWFtRmlsZSh0ZWFtTmFtZTogc3RyaW5nLCB0ZWFtRmlsZTogVGVhbUZpbGUpOiB2b2lkIHtcbiAgY29uc3QgdGVhbURpciA9IGdldFRlYW1EaXIodGVhbU5hbWUpXG4gIG1rZGlyU3luYyh0ZWFtRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB3cml0ZUZpbGVTeW5jKGdldFRlYW1GaWxlUGF0aCh0ZWFtTmFtZSksIGpzb25TdHJpbmdpZnkodGVhbUZpbGUsIG51bGwsIDIpKVxufVxuXG4vKipcbiAqIFdyaXRlcyBhIHRlYW0gZmlsZSAoYXN5bmMgXHUyMDE0IGZvciB0b29sIGhhbmRsZXJzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVUZWFtRmlsZUFzeW5jKFxuICB0ZWFtTmFtZTogc3RyaW5nLFxuICB0ZWFtRmlsZTogVGVhbUZpbGUsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGVhbURpciA9IGdldFRlYW1EaXIodGVhbU5hbWUpXG4gIGF3YWl0IG1rZGlyKHRlYW1EaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIGF3YWl0IHdyaXRlRmlsZShnZXRUZWFtRmlsZVBhdGgodGVhbU5hbWUpLCBqc29uU3RyaW5naWZ5KHRlYW1GaWxlLCBudWxsLCAyKSlcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgdGVhbW1hdGUgZnJvbSB0aGUgdGVhbSBmaWxlIGJ5IGFnZW50IElEIG9yIG5hbWUuXG4gKiBVc2VkIGJ5IHRoZSBsZWFkZXIgd2hlbiBwcm9jZXNzaW5nIHNodXRkb3duIGFwcHJvdmFscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1tYXRlRnJvbVRlYW1GaWxlKFxuICB0ZWFtTmFtZTogc3RyaW5nLFxuICBpZGVudGlmaWVyOiB7IGFnZW50SWQ/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmcgfSxcbik6IGJvb2xlYW4ge1xuICBjb25zdCBpZGVudGlmaWVyU3RyID0gaWRlbnRpZmllci5hZ2VudElkIHx8IGlkZW50aWZpZXIubmFtZVxuICBpZiAoIWlkZW50aWZpZXJTdHIpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAnW1RlYW1tYXRlVG9vbF0gcmVtb3ZlVGVhbW1hdGVGcm9tVGVhbUZpbGUgY2FsbGVkIHdpdGggbm8gaWRlbnRpZmllcicsXG4gICAgKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgdGVhbUZpbGUgPSByZWFkVGVhbUZpbGUodGVhbU5hbWUpXG4gIGlmICghdGVhbUZpbGUpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1RlYW1tYXRlVG9vbF0gQ2Fubm90IHJlbW92ZSB0ZWFtbWF0ZSAke2lkZW50aWZpZXJTdHJ9OiBmYWlsZWQgdG8gcmVhZCB0ZWFtIGZpbGUgZm9yIFwiJHt0ZWFtTmFtZX1cImAsXG4gICAgKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3Qgb3JpZ2luYWxMZW5ndGggPSB0ZWFtRmlsZS5tZW1iZXJzLmxlbmd0aFxuICB0ZWFtRmlsZS5tZW1iZXJzID0gdGVhbUZpbGUubWVtYmVycy5maWx0ZXIobSA9PiB7XG4gICAgaWYgKGlkZW50aWZpZXIuYWdlbnRJZCAmJiBtLmFnZW50SWQgPT09IGlkZW50aWZpZXIuYWdlbnRJZCkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKGlkZW50aWZpZXIubmFtZSAmJiBtLm5hbWUgPT09IGlkZW50aWZpZXIubmFtZSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHRydWVcbiAgfSlcblxuICBpZiAodGVhbUZpbGUubWVtYmVycy5sZW5ndGggPT09IG9yaWdpbmFsTGVuZ3RoKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUZWFtbWF0ZVRvb2xdIFRlYW1tYXRlICR7aWRlbnRpZmllclN0cn0gbm90IGZvdW5kIGluIHRlYW0gZmlsZSBmb3IgXCIke3RlYW1OYW1lfVwiYCxcbiAgICApXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB3cml0ZVRlYW1GaWxlKHRlYW1OYW1lLCB0ZWFtRmlsZSlcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbVGVhbW1hdGVUb29sXSBSZW1vdmVkIHRlYW1tYXRlIGZyb20gdGVhbSBmaWxlOiAke2lkZW50aWZpZXJTdHJ9YCxcbiAgKVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSBwYW5lIElEIHRvIHRoZSBoaWRkZW4gcGFuZXMgbGlzdCBpbiB0aGUgdGVhbSBmaWxlLlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAqIEBwYXJhbSBwYW5lSWQgLSBUaGUgcGFuZSBJRCB0byBoaWRlXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwYW5lIHdhcyBhZGRlZCB0byBoaWRkZW4gbGlzdCwgZmFsc2UgaWYgdGVhbSBkb2Vzbid0IGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRIaWRkZW5QYW5lSWQodGVhbU5hbWU6IHN0cmluZywgcGFuZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdGVhbUZpbGUgPSByZWFkVGVhbUZpbGUodGVhbU5hbWUpXG4gIGlmICghdGVhbUZpbGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGhpZGRlblBhbmVJZHMgPSB0ZWFtRmlsZS5oaWRkZW5QYW5lSWRzID8/IFtdXG4gIGlmICghaGlkZGVuUGFuZUlkcy5pbmNsdWRlcyhwYW5lSWQpKSB7XG4gICAgaGlkZGVuUGFuZUlkcy5wdXNoKHBhbmVJZClcbiAgICB0ZWFtRmlsZS5oaWRkZW5QYW5lSWRzID0gaGlkZGVuUGFuZUlkc1xuICAgIHdyaXRlVGVhbUZpbGUodGVhbU5hbWUsIHRlYW1GaWxlKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBBZGRlZCAke3BhbmVJZH0gdG8gaGlkZGVuIHBhbmVzIGZvciB0ZWFtICR7dGVhbU5hbWV9YCxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgcGFuZSBJRCBmcm9tIHRoZSBoaWRkZW4gcGFuZXMgbGlzdCBpbiB0aGUgdGVhbSBmaWxlLlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAqIEBwYXJhbSBwYW5lSWQgLSBUaGUgcGFuZSBJRCB0byBzaG93IChyZW1vdmUgZnJvbSBoaWRkZW4gbGlzdClcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHBhbmUgd2FzIHJlbW92ZWQgZnJvbSBoaWRkZW4gbGlzdCwgZmFsc2UgaWYgdGVhbSBkb2Vzbid0IGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaWRkZW5QYW5lSWQodGVhbU5hbWU6IHN0cmluZywgcGFuZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdGVhbUZpbGUgPSByZWFkVGVhbUZpbGUodGVhbU5hbWUpXG4gIGlmICghdGVhbUZpbGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGhpZGRlblBhbmVJZHMgPSB0ZWFtRmlsZS5oaWRkZW5QYW5lSWRzID8/IFtdXG4gIGNvbnN0IGluZGV4ID0gaGlkZGVuUGFuZUlkcy5pbmRleE9mKHBhbmVJZClcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGhpZGRlblBhbmVJZHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRlYW1GaWxlLmhpZGRlblBhbmVJZHMgPSBoaWRkZW5QYW5lSWRzXG4gICAgd3JpdGVUZWFtRmlsZSh0ZWFtTmFtZSwgdGVhbUZpbGUpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUZWFtbWF0ZVRvb2xdIFJlbW92ZWQgJHtwYW5lSWR9IGZyb20gaGlkZGVuIHBhbmVzIGZvciB0ZWFtICR7dGVhbU5hbWV9YCxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgdGVhbW1hdGUgZnJvbSB0aGUgdGVhbSBjb25maWcgZmlsZSBieSBwYW5lIElELlxuICogQWxzbyByZW1vdmVzIGZyb20gaGlkZGVuUGFuZUlkcyBpZiBwcmVzZW50LlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAqIEBwYXJhbSB0bXV4UGFuZUlkIC0gVGhlIHBhbmUgSUQgb2YgdGhlIHRlYW1tYXRlIHRvIHJlbW92ZVxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbWVtYmVyIHdhcyByZW1vdmVkLCBmYWxzZSBpZiB0ZWFtIG9yIG1lbWJlciBkb2Vzbid0IGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNZW1iZXJGcm9tVGVhbShcbiAgdGVhbU5hbWU6IHN0cmluZyxcbiAgdG11eFBhbmVJZDogc3RyaW5nLFxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRlYW1GaWxlID0gcmVhZFRlYW1GaWxlKHRlYW1OYW1lKVxuICBpZiAoIXRlYW1GaWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBtZW1iZXJJbmRleCA9IHRlYW1GaWxlLm1lbWJlcnMuZmluZEluZGV4KFxuICAgIG0gPT4gbS50bXV4UGFuZUlkID09PSB0bXV4UGFuZUlkLFxuICApXG4gIGlmIChtZW1iZXJJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFJlbW92ZSBmcm9tIG1lbWJlcnMgYXJyYXlcbiAgdGVhbUZpbGUubWVtYmVycy5zcGxpY2UobWVtYmVySW5kZXgsIDEpXG5cbiAgLy8gQWxzbyByZW1vdmUgZnJvbSBoaWRkZW5QYW5lSWRzIGlmIHByZXNlbnRcbiAgaWYgKHRlYW1GaWxlLmhpZGRlblBhbmVJZHMpIHtcbiAgICBjb25zdCBoaWRkZW5JbmRleCA9IHRlYW1GaWxlLmhpZGRlblBhbmVJZHMuaW5kZXhPZih0bXV4UGFuZUlkKVxuICAgIGlmIChoaWRkZW5JbmRleCAhPT0gLTEpIHtcbiAgICAgIHRlYW1GaWxlLmhpZGRlblBhbmVJZHMuc3BsaWNlKGhpZGRlbkluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlVGVhbUZpbGUodGVhbU5hbWUsIHRlYW1GaWxlKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFtUZWFtbWF0ZVRvb2xdIFJlbW92ZWQgbWVtYmVyIHdpdGggcGFuZSAke3RtdXhQYW5lSWR9IGZyb20gdGVhbSAke3RlYW1OYW1lfWAsXG4gIClcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgdGVhbW1hdGUgZnJvbSBhIHRlYW0ncyBtZW1iZXIgbGlzdCBieSBhZ2VudCBJRC5cbiAqIFVzZSB0aGlzIGZvciBpbi1wcm9jZXNzIHRlYW1tYXRlcyB3aGljaCBhbGwgc2hhcmUgdGhlIHNhbWUgdG11eFBhbmVJZC5cbiAqIEBwYXJhbSB0ZWFtTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0ZWFtXG4gKiBAcGFyYW0gYWdlbnRJZCAtIFRoZSBhZ2VudCBJRCBvZiB0aGUgdGVhbW1hdGUgdG8gcmVtb3ZlIChlLmcuLCBcInJlc2VhcmNoZXJAbXktdGVhbVwiKVxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbWVtYmVyIHdhcyByZW1vdmVkLCBmYWxzZSBpZiB0ZWFtIG9yIG1lbWJlciBkb2Vzbid0IGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNZW1iZXJCeUFnZW50SWQoXG4gIHRlYW1OYW1lOiBzdHJpbmcsXG4gIGFnZW50SWQ6IHN0cmluZyxcbik6IGJvb2xlYW4ge1xuICBjb25zdCB0ZWFtRmlsZSA9IHJlYWRUZWFtRmlsZSh0ZWFtTmFtZSlcbiAgaWYgKCF0ZWFtRmlsZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgbWVtYmVySW5kZXggPSB0ZWFtRmlsZS5tZW1iZXJzLmZpbmRJbmRleChtID0+IG0uYWdlbnRJZCA9PT0gYWdlbnRJZClcbiAgaWYgKG1lbWJlckluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gUmVtb3ZlIGZyb20gbWVtYmVycyBhcnJheVxuICB0ZWFtRmlsZS5tZW1iZXJzLnNwbGljZShtZW1iZXJJbmRleCwgMSlcblxuICB3cml0ZVRlYW1GaWxlKHRlYW1OYW1lLCB0ZWFtRmlsZSlcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbVGVhbW1hdGVUb29sXSBSZW1vdmVkIG1lbWJlciAke2FnZW50SWR9IGZyb20gdGVhbSAke3RlYW1OYW1lfWAsXG4gIClcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBTZXRzIGEgdGVhbSBtZW1iZXIncyBwZXJtaXNzaW9uIG1vZGUuXG4gKiBDYWxsZWQgd2hlbiB0aGUgdGVhbSBsZWFkZXIgY2hhbmdlcyBhIHRlYW1tYXRlJ3MgbW9kZSB2aWEgdGhlIFRlYW1zRGlhbG9nLlxuICogQHBhcmFtIHRlYW1OYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAqIEBwYXJhbSBtZW1iZXJOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIG1lbWJlciB0byB1cGRhdGVcbiAqIEBwYXJhbSBtb2RlIC0gVGhlIG5ldyBwZXJtaXNzaW9uIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbWJlck1vZGUoXG4gIHRlYW1OYW1lOiBzdHJpbmcsXG4gIG1lbWJlck5hbWU6IHN0cmluZyxcbiAgbW9kZTogUGVybWlzc2lvbk1vZGUsXG4pOiBib29sZWFuIHtcbiAgY29uc3QgdGVhbUZpbGUgPSByZWFkVGVhbUZpbGUodGVhbU5hbWUpXG4gIGlmICghdGVhbUZpbGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IG1lbWJlciA9IHRlYW1GaWxlLm1lbWJlcnMuZmluZChtID0+IG0ubmFtZSA9PT0gbWVtYmVyTmFtZSlcbiAgaWYgKCFtZW1iZXIpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1RlYW1tYXRlVG9vbF0gQ2Fubm90IHNldCBtZW1iZXIgbW9kZTogbWVtYmVyICR7bWVtYmVyTmFtZX0gbm90IGZvdW5kIGluIHRlYW0gJHt0ZWFtTmFtZX1gLFxuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIE9ubHkgd3JpdGUgaWYgdGhlIHZhbHVlIGlzIGFjdHVhbGx5IGNoYW5naW5nXG4gIGlmIChtZW1iZXIubW9kZSA9PT0gbW9kZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBDcmVhdGUgdXBkYXRlZCBtZW1iZXJzIGFycmF5IGltbXV0YWJseVxuICBjb25zdCB1cGRhdGVkTWVtYmVycyA9IHRlYW1GaWxlLm1lbWJlcnMubWFwKG0gPT5cbiAgICBtLm5hbWUgPT09IG1lbWJlck5hbWUgPyB7IC4uLm0sIG1vZGUgfSA6IG0sXG4gIClcbiAgd3JpdGVUZWFtRmlsZSh0ZWFtTmFtZSwgeyAuLi50ZWFtRmlsZSwgbWVtYmVyczogdXBkYXRlZE1lbWJlcnMgfSlcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbVGVhbW1hdGVUb29sXSBTZXQgbWVtYmVyICR7bWVtYmVyTmFtZX0gaW4gdGVhbSAke3RlYW1OYW1lfSB0byBtb2RlOiAke21vZGV9YCxcbiAgKVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIFN5bmMgdGhlIGN1cnJlbnQgdGVhbW1hdGUncyBtb2RlIHRvIGNvbmZpZy5qc29uIHNvIHRlYW0gbGVhZCBzZWVzIGl0LlxuICogTm8tb3AgaWYgbm90IHJ1bm5pbmcgYXMgYSB0ZWFtbWF0ZS5cbiAqIEBwYXJhbSBtb2RlIC0gVGhlIHBlcm1pc3Npb24gbW9kZSB0byBzeW5jXG4gKiBAcGFyYW0gdGVhbU5hbWVPdmVycmlkZSAtIE9wdGlvbmFsIHRlYW0gbmFtZSBvdmVycmlkZSAodXNlcyBlbnYgdmFyIGlmIG5vdCBwcm92aWRlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN5bmNUZWFtbWF0ZU1vZGUoXG4gIG1vZGU6IFBlcm1pc3Npb25Nb2RlLFxuICB0ZWFtTmFtZU92ZXJyaWRlPzogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGlmICghaXNUZWFtbWF0ZSgpKSByZXR1cm5cbiAgY29uc3QgdGVhbU5hbWUgPSB0ZWFtTmFtZU92ZXJyaWRlID8/IGdldFRlYW1OYW1lKClcbiAgY29uc3QgYWdlbnROYW1lID0gZ2V0QWdlbnROYW1lKClcbiAgaWYgKHRlYW1OYW1lICYmIGFnZW50TmFtZSkge1xuICAgIHNldE1lbWJlck1vZGUodGVhbU5hbWUsIGFnZW50TmFtZSwgbW9kZSlcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgbXVsdGlwbGUgdGVhbSBtZW1iZXJzJyBwZXJtaXNzaW9uIG1vZGVzIGluIGEgc2luZ2xlIGF0b21pYyBvcGVyYXRpb24uXG4gKiBBdm9pZHMgcmFjZSBjb25kaXRpb25zIHdoZW4gdXBkYXRpbmcgbXVsdGlwbGUgdGVhbW1hdGVzIGF0IG9uY2UuXG4gKiBAcGFyYW0gdGVhbU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGVhbVxuICogQHBhcmFtIG1vZGVVcGRhdGVzIC0gQXJyYXkgb2Yge21lbWJlck5hbWUsIG1vZGV9IHRvIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TXVsdGlwbGVNZW1iZXJNb2RlcyhcbiAgdGVhbU5hbWU6IHN0cmluZyxcbiAgbW9kZVVwZGF0ZXM6IEFycmF5PHsgbWVtYmVyTmFtZTogc3RyaW5nOyBtb2RlOiBQZXJtaXNzaW9uTW9kZSB9Pixcbik6IGJvb2xlYW4ge1xuICBjb25zdCB0ZWFtRmlsZSA9IHJlYWRUZWFtRmlsZSh0ZWFtTmFtZSlcbiAgaWYgKCF0ZWFtRmlsZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBtYXAgb2YgdXBkYXRlcyBmb3IgZWZmaWNpZW50IGxvb2t1cFxuICBjb25zdCB1cGRhdGVNYXAgPSBuZXcgTWFwKG1vZGVVcGRhdGVzLm1hcCh1ID0+IFt1Lm1lbWJlck5hbWUsIHUubW9kZV0pKVxuXG4gIC8vIENyZWF0ZSB1cGRhdGVkIG1lbWJlcnMgYXJyYXkgaW1tdXRhYmx5XG4gIGxldCBhbnlDaGFuZ2VkID0gZmFsc2VcbiAgY29uc3QgdXBkYXRlZE1lbWJlcnMgPSB0ZWFtRmlsZS5tZW1iZXJzLm1hcChtZW1iZXIgPT4ge1xuICAgIGNvbnN0IG5ld01vZGUgPSB1cGRhdGVNYXAuZ2V0KG1lbWJlci5uYW1lKVxuICAgIGlmIChuZXdNb2RlICE9PSB1bmRlZmluZWQgJiYgbWVtYmVyLm1vZGUgIT09IG5ld01vZGUpIHtcbiAgICAgIGFueUNoYW5nZWQgPSB0cnVlXG4gICAgICByZXR1cm4geyAuLi5tZW1iZXIsIG1vZGU6IG5ld01vZGUgfVxuICAgIH1cbiAgICByZXR1cm4gbWVtYmVyXG4gIH0pXG5cbiAgaWYgKGFueUNoYW5nZWQpIHtcbiAgICB3cml0ZVRlYW1GaWxlKHRlYW1OYW1lLCB7IC4uLnRlYW1GaWxlLCBtZW1iZXJzOiB1cGRhdGVkTWVtYmVycyB9KVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBTZXQgJHttb2RlVXBkYXRlcy5sZW5ndGh9IG1lbWJlciBtb2RlcyBpbiB0ZWFtICR7dGVhbU5hbWV9YCxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBTZXRzIGEgdGVhbSBtZW1iZXIncyBhY3RpdmUgc3RhdHVzLlxuICogQ2FsbGVkIHdoZW4gYSB0ZWFtbWF0ZSBiZWNvbWVzIGlkbGUgKGlzQWN0aXZlPWZhbHNlKSBvciBzdGFydHMgYSBuZXcgdHVybiAoaXNBY3RpdmU9dHJ1ZSkuXG4gKiBAcGFyYW0gdGVhbU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGVhbVxuICogQHBhcmFtIG1lbWJlck5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgbWVtYmVyIHRvIHVwZGF0ZVxuICogQHBhcmFtIGlzQWN0aXZlIC0gV2hldGhlciB0aGUgbWVtYmVyIGlzIGFjdGl2ZSAodHJ1ZSkgb3IgaWRsZSAoZmFsc2UpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW1iZXJBY3RpdmUoXG4gIHRlYW1OYW1lOiBzdHJpbmcsXG4gIG1lbWJlck5hbWU6IHN0cmluZyxcbiAgaXNBY3RpdmU6IGJvb2xlYW4sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGVhbUZpbGUgPSBhd2FpdCByZWFkVGVhbUZpbGVBc3luYyh0ZWFtTmFtZSlcbiAgaWYgKCF0ZWFtRmlsZSkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBDYW5ub3Qgc2V0IG1lbWJlciBhY3RpdmU6IHRlYW0gJHt0ZWFtTmFtZX0gbm90IGZvdW5kYCxcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBtZW1iZXIgPSB0ZWFtRmlsZS5tZW1iZXJzLmZpbmQobSA9PiBtLm5hbWUgPT09IG1lbWJlck5hbWUpXG4gIGlmICghbWVtYmVyKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUZWFtbWF0ZVRvb2xdIENhbm5vdCBzZXQgbWVtYmVyIGFjdGl2ZTogbWVtYmVyICR7bWVtYmVyTmFtZX0gbm90IGZvdW5kIGluIHRlYW0gJHt0ZWFtTmFtZX1gLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIE9ubHkgd3JpdGUgaWYgdGhlIHZhbHVlIGlzIGFjdHVhbGx5IGNoYW5naW5nXG4gIGlmIChtZW1iZXIuaXNBY3RpdmUgPT09IGlzQWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtZW1iZXIuaXNBY3RpdmUgPSBpc0FjdGl2ZVxuICBhd2FpdCB3cml0ZVRlYW1GaWxlQXN5bmModGVhbU5hbWUsIHRlYW1GaWxlKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFtUZWFtbWF0ZVRvb2xdIFNldCBtZW1iZXIgJHttZW1iZXJOYW1lfSBpbiB0ZWFtICR7dGVhbU5hbWV9IHRvICR7aXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpZGxlJ31gLFxuICApXG59XG5cbi8qKlxuICogRGVzdHJveXMgYSBnaXQgd29ya3RyZWUgYXQgdGhlIGdpdmVuIHBhdGguXG4gKiBGaXJzdCBhdHRlbXB0cyB0byB1c2UgYGdpdCB3b3JrdHJlZSByZW1vdmVgLCB0aGVuIGZhbGxzIGJhY2sgdG8gcm0gLXJmLlxuICogU2FmZSB0byBjYWxsIG9uIG5vbi1leGlzdGVudCBwYXRocy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGVzdHJveVdvcmt0cmVlKHdvcmt0cmVlUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFJlYWQgdGhlIC5naXQgZmlsZSBpbiB0aGUgd29ya3RyZWUgdG8gZmluZCB0aGUgbWFpbiByZXBvXG4gIGNvbnN0IGdpdEZpbGVQYXRoID0gam9pbih3b3JrdHJlZVBhdGgsICcuZ2l0JylcbiAgbGV0IG1haW5SZXBvUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICB0cnkge1xuICAgIGNvbnN0IGdpdEZpbGVDb250ZW50ID0gKGF3YWl0IHJlYWRGaWxlKGdpdEZpbGVQYXRoLCAndXRmLTgnKSkudHJpbSgpXG4gICAgLy8gVGhlIC5naXQgZmlsZSBjb250YWlucyBzb21ldGhpbmcgbGlrZTogZ2l0ZGlyOiAvcGF0aC90by9yZXBvLy5naXQvd29ya3RyZWVzL3dvcmt0cmVlLW5hbWVcbiAgICBjb25zdCBtYXRjaCA9IGdpdEZpbGVDb250ZW50Lm1hdGNoKC9eZ2l0ZGlyOlxccyooLispJC8pXG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBtYWluIHJlcG8gLmdpdCBkaXJlY3RvcnkgKGdvIHVwIGZyb20gLmdpdC93b3JrdHJlZXMvbmFtZSB0byAuZ2l0KVxuICAgICAgY29uc3Qgd29ya3RyZWVHaXREaXIgPSBtYXRjaFsxXVxuICAgICAgLy8gR28gdXAgMiBsZXZlbHMgZnJvbSAuZ2l0L3dvcmt0cmVlcy9uYW1lIHRvIGdldCB0byAuZ2l0LCB0aGVuIGdldCBwYXJlbnQgZm9yIHJlcG8gcm9vdFxuICAgICAgY29uc3QgbWFpbkdpdERpciA9IGpvaW4od29ya3RyZWVHaXREaXIsICcuLicsICcuLicpXG4gICAgICBtYWluUmVwb1BhdGggPSBqb2luKG1haW5HaXREaXIsICcuLicpXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBJZ25vcmUgZXJyb3JzIHJlYWRpbmcgLmdpdCBmaWxlIChwYXRoIGRvZXNuJ3QgZXhpc3QsIG5vdCBhIGZpbGUsIGV0Yy4pXG4gIH1cblxuICAvLyBUcnkgdG8gcmVtb3ZlIHVzaW5nIGdpdCB3b3JrdHJlZSByZW1vdmUgY29tbWFuZFxuICBpZiAobWFpblJlcG9QYXRoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChcbiAgICAgIGdpdEV4ZSgpLFxuICAgICAgWyd3b3JrdHJlZScsICdyZW1vdmUnLCAnLS1mb3JjZScsIHdvcmt0cmVlUGF0aF0sXG4gICAgICB7IGN3ZDogbWFpblJlcG9QYXRoIH0sXG4gICAgKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbVGVhbW1hdGVUb29sXSBSZW1vdmVkIHdvcmt0cmVlIHZpYSBnaXQ6ICR7d29ya3RyZWVQYXRofWAsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZXJyb3IgaXMgXCJub3QgYSB3b3JraW5nIHRyZWVcIiAoYWxyZWFkeSByZW1vdmVkKVxuICAgIGlmIChyZXN1bHQuc3RkZXJyPy5pbmNsdWRlcygnbm90IGEgd29ya2luZyB0cmVlJykpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtUZWFtbWF0ZVRvb2xdIFdvcmt0cmVlIGFscmVhZHkgcmVtb3ZlZDogJHt3b3JrdHJlZVBhdGh9YCxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBnaXQgd29ya3RyZWUgcmVtb3ZlIGZhaWxlZCwgZmFsbGluZyBiYWNrIHRvIHJtOiAke3Jlc3VsdC5zdGRlcnJ9YCxcbiAgICApXG4gIH1cblxuICAvLyBGYWxsYmFjazogbWFudWFsbHkgcmVtb3ZlIHRoZSBkaXJlY3RvcnlcbiAgdHJ5IHtcbiAgICBhd2FpdCBybSh3b3JrdHJlZVBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVGVhbW1hdGVUb29sXSBSZW1vdmVkIHdvcmt0cmVlIGRpcmVjdG9yeSBtYW51YWxseTogJHt3b3JrdHJlZVBhdGh9YCxcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUZWFtbWF0ZVRvb2xdIEZhaWxlZCB0byByZW1vdmUgd29ya3RyZWUgJHt3b3JrdHJlZVBhdGh9OiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBNYXJrIGEgdGVhbSBhcyBjcmVhdGVkIHRoaXMgc2Vzc2lvbiBzbyBpdCBnZXRzIGNsZWFuZWQgdXAgb24gZXhpdC5cbiAqIENhbGwgdGhpcyByaWdodCBhZnRlciB0aGUgaW5pdGlhbCB3cml0ZVRlYW1GaWxlLiBUZWFtRGVsZXRlIHNob3VsZFxuICogY2FsbCB1bnJlZ2lzdGVyVGVhbUZvclNlc3Npb25DbGVhbnVwIHRvIHByZXZlbnQgZG91YmxlLWNsZWFudXAuXG4gKiBCYWNraW5nIFNldCBsaXZlcyBpbiBib290c3RyYXAvc3RhdGUudHMgc28gcmVzZXRTdGF0ZUZvclRlc3RzKClcbiAqIGNsZWFycyBpdCBiZXR3ZWVuIHRlc3RzIChhdm9pZHMgdGhlIFBSICMxNzYxNSBjcm9zcy1zaGFyZCBsZWFrIGNsYXNzKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVGVhbUZvclNlc3Npb25DbGVhbnVwKHRlYW1OYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgZ2V0U2Vzc2lvbkNyZWF0ZWRUZWFtcygpLmFkZCh0ZWFtTmFtZSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSB0ZWFtIGZyb20gc2Vzc2lvbiBjbGVhbnVwIHRyYWNraW5nIChlLmcuLCBhZnRlciBleHBsaWNpdFxuICogVGVhbURlbGV0ZSBcdTIwMTQgYWxyZWFkeSBjbGVhbmVkLCBkb24ndCB0cnkgYWdhaW4gb24gc2h1dGRvd24pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlclRlYW1Gb3JTZXNzaW9uQ2xlYW51cCh0ZWFtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGdldFNlc3Npb25DcmVhdGVkVGVhbXMoKS5kZWxldGUodGVhbU5hbWUpXG59XG5cbi8qKlxuICogQ2xlYW4gdXAgYWxsIHRlYW1zIGNyZWF0ZWQgdGhpcyBzZXNzaW9uIHRoYXQgd2VyZW4ndCBleHBsaWNpdGx5IGRlbGV0ZWQuXG4gKiBSZWdpc3RlcmVkIHdpdGggZ3JhY2VmdWxTaHV0ZG93biBmcm9tIGluaXQudHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwU2Vzc2lvblRlYW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZXNzaW9uQ3JlYXRlZFRlYW1zID0gZ2V0U2Vzc2lvbkNyZWF0ZWRUZWFtcygpXG4gIGlmIChzZXNzaW9uQ3JlYXRlZFRlYW1zLnNpemUgPT09IDApIHJldHVyblxuICBjb25zdCB0ZWFtcyA9IEFycmF5LmZyb20oc2Vzc2lvbkNyZWF0ZWRUZWFtcylcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBjbGVhbnVwU2Vzc2lvblRlYW1zOiByZW1vdmluZyAke3RlYW1zLmxlbmd0aH0gb3JwaGFuIHRlYW0gZGlyKHMpOiAke3RlYW1zLmpvaW4oJywgJyl9YCxcbiAgKVxuICAvLyBLaWxsIHBhbmVzIGZpcnN0IFx1MjAxNCBvbiBTSUdJTlQgdGhlIHRlYW1tYXRlIHByb2Nlc3NlcyBhcmUgc3RpbGwgcnVubmluZztcbiAgLy8gZGVsZXRpbmcgZGlyZWN0b3JpZXMgYWxvbmUgd291bGQgb3JwaGFuIHRoZW0gaW4gb3BlbiB0bXV4L2lUZXJtMiBwYW5lcy5cbiAgLy8gKFRlYW1EZWxldGVUb29sJ3MgcGF0aCBkb2Vzbid0IG5lZWQgdGhpcyBcdTIwMTQgYnkgdGhlbiB0ZWFtbWF0ZXMgaGF2ZVxuICAvLyBncmFjZWZ1bGx5IGV4aXRlZCBhbmQgdXNlSW5ib3hQb2xsZXIgaGFzIGFscmVhZHkgY2xvc2VkIHRoZWlyIHBhbmVzLilcbiAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKHRlYW1zLm1hcChuYW1lID0+IGtpbGxPcnBoYW5lZFRlYW1tYXRlUGFuZXMobmFtZSkpKVxuICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQodGVhbXMubWFwKG5hbWUgPT4gY2xlYW51cFRlYW1EaXJlY3RvcmllcyhuYW1lKSkpXG4gIHNlc3Npb25DcmVhdGVkVGVhbXMuY2xlYXIoKVxufVxuXG4vKipcbiAqIEJlc3QtZWZmb3J0IGtpbGwgb2YgYWxsIHBhbmUtYmFja2VkIHRlYW1tYXRlIHBhbmVzIGZvciBhIHRlYW0uXG4gKiBDYWxsZWQgZnJvbSBjbGVhbnVwU2Vzc2lvblRlYW1zIG9uIHVuZ3JhY2VmdWwgbGVhZGVyIGV4aXQgKFNJR0lOVC9TSUdURVJNKS5cbiAqIER5bmFtaWMgaW1wb3J0cyBhdm9pZCBhZGRpbmcgcmVnaXN0cnkvZGV0ZWN0aW9uIHRvIHRoaXMgbW9kdWxlJ3Mgc3RhdGljXG4gKiBkZXAgZ3JhcGggXHUyMDE0IHRoaXMgb25seSBydW5zIGF0IHNodXRkb3duLCBzbyB0aGUgaW1wb3J0IGNvc3QgaXMgaXJyZWxldmFudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24ga2lsbE9ycGhhbmVkVGVhbW1hdGVQYW5lcyh0ZWFtTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRlYW1GaWxlID0gcmVhZFRlYW1GaWxlKHRlYW1OYW1lKVxuICBpZiAoIXRlYW1GaWxlKSByZXR1cm5cblxuICBjb25zdCBwYW5lTWVtYmVycyA9IHRlYW1GaWxlLm1lbWJlcnMuZmlsdGVyKFxuICAgIG0gPT5cbiAgICAgIG0ubmFtZSAhPT0gVEVBTV9MRUFEX05BTUUgJiZcbiAgICAgIG0udG11eFBhbmVJZCAmJlxuICAgICAgbS5iYWNrZW5kVHlwZSAmJlxuICAgICAgaXNQYW5lQmFja2VuZChtLmJhY2tlbmRUeXBlKSxcbiAgKVxuICBpZiAocGFuZU1lbWJlcnMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBjb25zdCBbeyBlbnN1cmVCYWNrZW5kc1JlZ2lzdGVyZWQsIGdldEJhY2tlbmRCeVR5cGUgfSwgeyBpc0luc2lkZVRtdXggfV0gPVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGltcG9ydCgnLi9iYWNrZW5kcy9yZWdpc3RyeS5qcycpLFxuICAgICAgaW1wb3J0KCcuL2JhY2tlbmRzL2RldGVjdGlvbi5qcycpLFxuICAgIF0pXG4gIGF3YWl0IGVuc3VyZUJhY2tlbmRzUmVnaXN0ZXJlZCgpXG4gIGNvbnN0IHVzZUV4dGVybmFsU2Vzc2lvbiA9ICEoYXdhaXQgaXNJbnNpZGVUbXV4KCkpXG5cbiAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgIHBhbmVNZW1iZXJzLm1hcChhc3luYyBtID0+IHtcbiAgICAgIC8vIGZpbHRlciBhYm92ZSBndWFyYW50ZWVzIHRoZXNlOyBuYXJyb3cgZm9yIHRoZSB0eXBlIHN5c3RlbVxuICAgICAgaWYgKCFtLnRtdXhQYW5lSWQgfHwgIW0uYmFja2VuZFR5cGUgfHwgIWlzUGFuZUJhY2tlbmQobS5iYWNrZW5kVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBvayA9IGF3YWl0IGdldEJhY2tlbmRCeVR5cGUobS5iYWNrZW5kVHlwZSkua2lsbFBhbmUoXG4gICAgICAgIG0udG11eFBhbmVJZCxcbiAgICAgICAgdXNlRXh0ZXJuYWxTZXNzaW9uLFxuICAgICAgKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgY2xlYW51cFNlc3Npb25UZWFtczoga2lsbFBhbmUgJHttLm5hbWV9ICgke20uYmFja2VuZFR5cGV9ICR7bS50bXV4UGFuZUlkfSkgXHUyMTkyICR7b2t9YCxcbiAgICAgIClcbiAgICB9KSxcbiAgKVxufVxuXG4vKipcbiAqIENsZWFucyB1cCB0ZWFtIGFuZCB0YXNrIGRpcmVjdG9yaWVzIGZvciBhIGdpdmVuIHRlYW0gbmFtZS5cbiAqIEFsc28gY2xlYW5zIHVwIGdpdCB3b3JrdHJlZXMgY3JlYXRlZCBmb3IgdGVhbW1hdGVzLlxuICogQ2FsbGVkIHdoZW4gYSBzd2FybSBzZXNzaW9uIGlzIHRlcm1pbmF0ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwVGVhbURpcmVjdG9yaWVzKHRlYW1OYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IHNhbml0aXplTmFtZSh0ZWFtTmFtZSlcblxuICAvLyBSZWFkIHRlYW0gZmlsZSB0byBnZXQgd29ya3RyZWUgcGF0aHMgQkVGT1JFIGRlbGV0aW5nIHRoZSB0ZWFtIGRpcmVjdG9yeVxuICBjb25zdCB0ZWFtRmlsZSA9IHJlYWRUZWFtRmlsZSh0ZWFtTmFtZSlcbiAgY29uc3Qgd29ya3RyZWVQYXRoczogc3RyaW5nW10gPSBbXVxuICBpZiAodGVhbUZpbGUpIHtcbiAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiB0ZWFtRmlsZS5tZW1iZXJzKSB7XG4gICAgICBpZiAobWVtYmVyLndvcmt0cmVlUGF0aCkge1xuICAgICAgICB3b3JrdHJlZVBhdGhzLnB1c2gobWVtYmVyLndvcmt0cmVlUGF0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDbGVhbiB1cCB3b3JrdHJlZXMgZmlyc3RcbiAgZm9yIChjb25zdCB3b3JrdHJlZVBhdGggb2Ygd29ya3RyZWVQYXRocykge1xuICAgIGF3YWl0IGRlc3Ryb3lXb3JrdHJlZSh3b3JrdHJlZVBhdGgpXG4gIH1cblxuICAvLyBDbGVhbiB1cCB0ZWFtIGRpcmVjdG9yeSAofi8uY2xhdWRlL3RlYW1zL3t0ZWFtLW5hbWV9LylcbiAgY29uc3QgdGVhbURpciA9IGdldFRlYW1EaXIodGVhbU5hbWUpXG4gIHRyeSB7XG4gICAgYXdhaXQgcm0odGVhbURpciwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbVGVhbW1hdGVUb29sXSBDbGVhbmVkIHVwIHRlYW0gZGlyZWN0b3J5OiAke3RlYW1EaXJ9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1RlYW1tYXRlVG9vbF0gRmFpbGVkIHRvIGNsZWFuIHVwIHRlYW0gZGlyZWN0b3J5ICR7dGVhbURpcn06ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgIClcbiAgfVxuXG4gIC8vIENsZWFuIHVwIHRhc2tzIGRpcmVjdG9yeSAofi8uY2xhdWRlL3Rhc2tzL3t0YXNrTGlzdElkfS8pXG4gIC8vIFRoZSBsZWFkZXIgYW5kIHRlYW1tYXRlcyBhbGwgc3RvcmUgdGFza3MgdW5kZXIgdGhlIHNhbml0aXplZCB0ZWFtIG5hbWUuXG4gIGNvbnN0IHRhc2tzRGlyID0gZ2V0VGFza3NEaXIoc2FuaXRpemVkTmFtZSlcbiAgdHJ5IHtcbiAgICBhd2FpdCBybSh0YXNrc0RpciwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbVGVhbW1hdGVUb29sXSBDbGVhbmVkIHVwIHRhc2tzIGRpcmVjdG9yeTogJHt0YXNrc0Rpcn1gKVxuICAgIG5vdGlmeVRhc2tzVXBkYXRlZCgpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtUZWFtbWF0ZVRvb2xdIEZhaWxlZCB0byBjbGVhbiB1cCB0YXNrcyBkaXJlY3RvcnkgJHt0YXNrc0Rpcn06ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgIClcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxPQUFPLFNBQVMsVUFBVSxRQUFRLGlCQUFpQjtBQUM1RCxTQUFTLFlBQVk7QUE2QmQsU0FBUyxrQkFBa0IsVUFBd0I7QUFDeEQsTUFBSSxtQkFBbUIsU0FBVTtBQUNqQyxtQkFBaUI7QUFHakIscUJBQW1CO0FBQ3JCO0FBTU8sU0FBUyxzQkFBNEI7QUFDMUMsTUFBSSxtQkFBbUIsT0FBVztBQUNsQyxtQkFBaUI7QUFDakIscUJBQW1CO0FBQ3JCO0FBY08sU0FBUyxxQkFBMkI7QUFDekMsTUFBSTtBQUNGLGlCQUFhLEtBQUs7QUFBQSxFQUNwQixRQUFRO0FBQUEsRUFFUjtBQUNGO0FBMkNBLFNBQVMscUJBQXFCLFlBQTRCO0FBQ3hELFNBQU8sS0FBSyxZQUFZLFVBQVUsR0FBRyxvQkFBb0I7QUFDM0Q7QUFFQSxlQUFlLGtCQUFrQixZQUFxQztBQUNwRSxRQUFNLE9BQU8scUJBQXFCLFVBQVU7QUFDNUMsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxPQUFPLEdBQUcsS0FBSztB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ZUFBc0IsdUJBQXVCLFVBQWlDO0FBQzVFLFFBQU0sZ0JBQWdCLGFBQWEsUUFBUTtBQUczQyxRQUFNLFdBQVcsYUFBYSxRQUFRO0FBQ3RDLFFBQU0sZ0JBQTBCLENBQUM7QUFDakMsTUFBSSxVQUFVO0FBQ1osZUFBVyxVQUFVLFNBQVMsU0FBUztBQUNyQyxVQUFJLE9BQU8sY0FBYztBQUN2QixzQkFBYyxLQUFLLE9BQU8sWUFBWTtBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSxhQUFXLGdCQUFnQixlQUFlO0FBQ3hDLFVBQU0sZ0JBQWdCLFlBQVk7QUFBQSxFQUNwQztBQUdBLFFBQU0sVUFBVSxXQUFXLFFBQVE7QUFDbkMsTUFBSTtBQUNGLFVBQU0sR0FBRyxTQUFTLEVBQUUsV0FBVyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ2xELG9CQUFnQiw2Q0FBNkMsT0FBTyxFQUFFO0FBQUEsRUFDeEUsU0FBUyxPQUFPO0FBQ2Q7QUFBQSxNQUNFLG9EQUFvRCxPQUFPLEtBQUssYUFBYSxLQUFLLENBQUM7QUFBQSxJQUNyRjtBQUFBLEVBQ0Y7QUFJQSxRQUFNLFdBQVcsWUFBWSxhQUFhO0FBQzFDLE1BQUk7QUFDRixVQUFNLEdBQUcsVUFBVSxFQUFFLFdBQVcsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuRCxvQkFBZ0IsOENBQThDLFFBQVEsRUFBRTtBQUN4RSx1QkFBbUI7QUFBQSxFQUNyQixTQUFTLE9BQU87QUFDZDtBQUFBLE1BQ0UscURBQXFELFFBQVEsS0FBSyxhQUFhLEtBQUssQ0FBQztBQUFBLElBQ3ZGO0FBQUEsRUFDRjtBQUNGO0FBMXFCQSxJQWtCYTtBQWxCYjtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNLGNBQWM7QUFBQSxNQUFXLE1BQ3BDLGlCQUFFLGFBQWE7QUFBQSxRQUNiLFdBQVcsaUJBQ1IsS0FBSyxDQUFDLGFBQWEsU0FBUyxDQUFDLEVBQzdCO0FBQUEsVUFDQztBQUFBLFFBQ0Y7QUFBQSxRQUNGLFlBQVksaUJBQ1QsT0FBTyxFQUNQLFNBQVMsRUFDVDtBQUFBLFVBQ0M7QUFBQSxRQUVGO0FBQUEsUUFDRixXQUFXLGlCQUNSLE9BQU8sRUFDUCxTQUFTLEVBQ1QsU0FBUywyREFBMkQ7QUFBQSxRQUN2RSxhQUFhLGlCQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsU0FBUyxzREFBc0Q7QUFBQSxNQUNwRSxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIm1rZGlyIiwgInJlYWRGaWxlIiwgIndyaXRlRmlsZSIsICJqb2luIl0KfQo=
