#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  renameRecordingForSession
} from "./chunk-2DQW4FBS.mjs";
import {
  TODO_WRITE_TOOL_NAME,
  TodoListSchema,
  adoptResumedSessionFile,
  asSessionId,
  clearCommandMemoizationCaches,
  clearCommandsCache,
  clearMemoryFileCaches,
  clearSkillCaches,
  createSystemMessage,
  executeConfigChangeHooks,
  fileHistoryRestoreStateFromLog,
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  getCurrentWorktreeSession,
  getPlansDirectory,
  getSkillsPath,
  hasBlockingResult,
  init_Shell,
  init_attachments,
  init_claudemd,
  init_commands2 as init_commands,
  init_concurrentSessions,
  init_constants5 as init_constants,
  init_cost_tracker,
  init_fileHistory,
  init_hooks2 as init_hooks,
  init_ids,
  init_loadAgentsDir,
  init_loadSkillsDir,
  init_messages2 as init_messages,
  init_plans,
  init_sessionStorage,
  init_types4 as init_types,
  init_worktree,
  onDynamicSkillsLoaded,
  recordContentReplacement,
  resetSentSkillNames,
  resetSessionFilePointer,
  restoreCostStateForSession,
  restoreSessionMetadata,
  restoreWorktreeSession,
  saveMode,
  saveWorktreeState,
  setCwd,
  updateSessionName
} from "./chunk-BQ2W5UUK.mjs";
import {
  clearSystemPromptSections,
  init_systemPromptSections
} from "./chunk-ORS2TTME.mjs";
import {
  init_tasks,
  isTodoV2Enabled
} from "./chunk-AKNFPKUI.mjs";
import {
  attributionRestoreStateFromLog,
  init_commitAttribution,
  restoreAttributionStateFromSnapshots
} from "./chunk-GRYB5GTK.mjs";
import {
  chokidar_default,
  init_chokidar
} from "./chunk-P7DIEGS5.mjs";
import {
  init_model,
  parseUserSpecifiedModel
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_fsOperations,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  createSignal,
  getAdditionalDirectoriesForClaudeMd,
  getMainLoopModelOverride,
  getSessionId,
  init_signal,
  init_state,
  setMainLoopModelOverride,
  setMainThreadAgentType,
  setOriginalCwd,
  switchSession
} from "./chunk-NGSB34MB.mjs";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/services/contextCollapse/persist.ts
var persist_exports = {};
__export(persist_exports, {
  restoreFromEntries: () => restoreFromEntries
});
function restoreFromEntries(_entries, _snapshot) {
}
var init_persist = __esm({
  "src/services/contextCollapse/persist.ts"() {
  }
});

// src/utils/skills/skillChangeDetector.ts
init_chokidar();
init_state();
init_commands();
init_analytics();
init_loadSkillsDir();
init_attachments();
init_cleanupRegistry();
init_debug();
init_fsOperations();
init_hooks();
init_signal();
import * as platformPath from "path";
var FILE_STABILITY_THRESHOLD_MS = 1e3;
var FILE_STABILITY_POLL_INTERVAL_MS = 500;
var RELOAD_DEBOUNCE_MS = 300;
var POLLING_INTERVAL_MS = 2e3;
var USE_POLLING = typeof Bun !== "undefined";
var watcher = null;
var reloadTimer = null;
var pendingChangedPaths = /* @__PURE__ */ new Set();
var initialized = false;
var disposed = false;
var dynamicSkillsCallbackRegistered = false;
var unregisterCleanup = null;
var skillsChanged = createSignal();
var testOverrides = null;
async function initialize() {
  if (initialized || disposed) return;
  initialized = true;
  if (!dynamicSkillsCallbackRegistered) {
    dynamicSkillsCallbackRegistered = true;
    onDynamicSkillsLoaded(() => {
      clearCommandMemoizationCaches();
      skillsChanged.emit();
    });
  }
  const paths = await getWatchablePaths();
  if (paths.length === 0) return;
  logForDebugging(
    `Watching for changes in skill/command directories: ${paths.join(", ")}...`
  );
  watcher = chokidar_default.watch(paths, {
    persistent: true,
    ignoreInitial: true,
    depth: 2,
    // Skills use skill-name/SKILL.md format
    awaitWriteFinish: {
      stabilityThreshold: testOverrides?.stabilityThreshold ?? FILE_STABILITY_THRESHOLD_MS,
      pollInterval: testOverrides?.pollInterval ?? FILE_STABILITY_POLL_INTERVAL_MS
    },
    // Ignore special file types (sockets, FIFOs, devices) - they cannot be watched
    // and will error with EOPNOTSUPP on macOS. Only allow regular files and directories.
    ignored: (path, stats) => {
      if (stats && !stats.isFile() && !stats.isDirectory()) return true;
      return path.split(platformPath.sep).some((dir) => dir === ".git");
    },
    ignorePermissionErrors: true,
    usePolling: USE_POLLING,
    interval: testOverrides?.chokidarInterval ?? POLLING_INTERVAL_MS,
    atomic: true
  });
  watcher.on("add", handleChange);
  watcher.on("change", handleChange);
  watcher.on("unlink", handleChange);
  unregisterCleanup = registerCleanup(async () => {
    await dispose();
  });
}
function dispose() {
  disposed = true;
  if (unregisterCleanup) {
    unregisterCleanup();
    unregisterCleanup = null;
  }
  let closePromise = Promise.resolve();
  if (watcher) {
    closePromise = watcher.close();
    watcher = null;
  }
  if (reloadTimer) {
    clearTimeout(reloadTimer);
    reloadTimer = null;
  }
  pendingChangedPaths.clear();
  skillsChanged.clear();
  return closePromise;
}
var subscribe = skillsChanged.subscribe;
async function getWatchablePaths() {
  const fs = getFsImplementation();
  const paths = [];
  const userSkillsPath = getSkillsPath("userSettings", "skills");
  if (userSkillsPath) {
    try {
      await fs.stat(userSkillsPath);
      paths.push(userSkillsPath);
    } catch {
    }
  }
  const userCommandsPath = getSkillsPath("userSettings", "commands");
  if (userCommandsPath) {
    try {
      await fs.stat(userCommandsPath);
      paths.push(userCommandsPath);
    } catch {
    }
  }
  const projectSkillsPath = getSkillsPath("projectSettings", "skills");
  if (projectSkillsPath) {
    try {
      const absolutePath = platformPath.resolve(projectSkillsPath);
      await fs.stat(absolutePath);
      paths.push(absolutePath);
    } catch {
    }
  }
  const projectCommandsPath = getSkillsPath("projectSettings", "commands");
  if (projectCommandsPath) {
    try {
      const absolutePath = platformPath.resolve(projectCommandsPath);
      await fs.stat(absolutePath);
      paths.push(absolutePath);
    } catch {
    }
  }
  for (const dir of getAdditionalDirectoriesForClaudeMd()) {
    const additionalSkillsPath = platformPath.join(dir, ".claude", "skills");
    try {
      await fs.stat(additionalSkillsPath);
      paths.push(additionalSkillsPath);
    } catch {
    }
  }
  return paths;
}
function handleChange(path) {
  logForDebugging(`Detected skill change: ${path}`);
  logEvent("tengu_skill_file_changed", {
    source: "chokidar"
  });
  scheduleReload(path);
}
function scheduleReload(changedPath) {
  pendingChangedPaths.add(changedPath);
  if (reloadTimer) clearTimeout(reloadTimer);
  reloadTimer = setTimeout(async () => {
    reloadTimer = null;
    const paths = [...pendingChangedPaths];
    pendingChangedPaths.clear();
    const results = await executeConfigChangeHooks("skills", paths[0]);
    if (hasBlockingResult(results)) {
      logForDebugging(
        `ConfigChange hook blocked skill reload (${paths.length} paths)`
      );
      return;
    }
    clearSkillCaches();
    clearCommandsCache();
    resetSentSkillNames();
    skillsChanged.emit();
  }, testOverrides?.reloadDebounce ?? RELOAD_DEBOUNCE_MS);
}
async function resetForTesting(overrides) {
  if (watcher) {
    await watcher.close();
    watcher = null;
  }
  if (reloadTimer) {
    clearTimeout(reloadTimer);
    reloadTimer = null;
  }
  pendingChangedPaths.clear();
  skillsChanged.clear();
  initialized = false;
  disposed = false;
  testOverrides = overrides ?? null;
}
var skillChangeDetector = {
  initialize,
  dispose,
  subscribe,
  resetForTesting
};

// src/utils/sessionRestore.ts
init_bun_bundle();
init_state();
init_systemPromptSections();
init_cost_tracker();
init_loadAgentsDir();
init_constants();
init_ids();
import { dirname } from "path";
init_claudemd();
init_commitAttribution();
init_concurrentSessions();
init_cwd();
init_debug();
init_fileHistory();
init_messages();
init_model();
init_plans();
init_Shell();
init_sessionStorage();
init_tasks();
init_types();
init_worktree();
function extractTodosFromTranscript(messages) {
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg?.type !== "assistant") continue;
    const toolUse = msg.message.content.find(
      (block) => block.type === "tool_use" && block.name === TODO_WRITE_TOOL_NAME
    );
    if (!toolUse || toolUse.type !== "tool_use") continue;
    const input = toolUse.input;
    if (input === null || typeof input !== "object") return [];
    const parsed = TodoListSchema().safeParse(
      input.todos
    );
    return parsed.success ? parsed.data : [];
  }
  return [];
}
function restoreSessionStateFromLog(result, setAppState) {
  if (result.fileHistorySnapshots && result.fileHistorySnapshots.length > 0) {
    fileHistoryRestoreStateFromLog(result.fileHistorySnapshots, (newState) => {
      setAppState((prev) => ({ ...prev, fileHistory: newState }));
    });
  }
  if (feature("COMMIT_ATTRIBUTION") && result.attributionSnapshots && result.attributionSnapshots.length > 0) {
    attributionRestoreStateFromLog(result.attributionSnapshots, (newState) => {
      setAppState((prev) => ({ ...prev, attribution: newState }));
    });
  }
  if (feature("CONTEXT_COLLAPSE")) {
    ;
    (init_persist(), __toCommonJS(persist_exports)).restoreFromEntries(
      result.contextCollapseCommits ?? [],
      result.contextCollapseSnapshot
    );
  }
  if (!isTodoV2Enabled() && result.messages && result.messages.length > 0) {
    const todos = extractTodosFromTranscript(result.messages);
    if (todos.length > 0) {
      const agentId = getSessionId();
      setAppState((prev) => ({
        ...prev,
        todos: { ...prev.todos, [agentId]: todos }
      }));
    }
  }
}
function computeRestoredAttributionState(result) {
  if (feature("COMMIT_ATTRIBUTION") && result.attributionSnapshots && result.attributionSnapshots.length > 0) {
    return restoreAttributionStateFromSnapshots(result.attributionSnapshots);
  }
  return void 0;
}
function computeStandaloneAgentContext(agentName, agentColor) {
  if (!agentName && !agentColor) {
    return void 0;
  }
  return {
    name: agentName ?? "",
    color: agentColor === "default" ? void 0 : agentColor
  };
}
function restoreAgentFromSession(agentSetting, currentAgentDefinition, agentDefinitions) {
  if (currentAgentDefinition) {
    return { agentDefinition: currentAgentDefinition, agentType: void 0 };
  }
  if (!agentSetting) {
    setMainThreadAgentType(void 0);
    return { agentDefinition: void 0, agentType: void 0 };
  }
  const resumedAgent = agentDefinitions.activeAgents.find(
    (agent) => agent.agentType === agentSetting
  );
  if (!resumedAgent) {
    logForDebugging(
      `Resumed session had agent "${agentSetting}" but it is no longer available. Using default behavior.`
    );
    setMainThreadAgentType(void 0);
    return { agentDefinition: void 0, agentType: void 0 };
  }
  setMainThreadAgentType(resumedAgent.agentType);
  if (!getMainLoopModelOverride() && resumedAgent.model && resumedAgent.model !== "inherit") {
    setMainLoopModelOverride(parseUserSpecifiedModel(resumedAgent.model));
  }
  return { agentDefinition: resumedAgent, agentType: resumedAgent.agentType };
}
async function refreshAgentDefinitionsForModeSwitch(modeWasSwitched, currentCwd, cliAgents, currentAgentDefinitions) {
  if (!feature("COORDINATOR_MODE") || !modeWasSwitched) {
    return currentAgentDefinitions;
  }
  getAgentDefinitionsWithOverrides.cache.clear?.();
  const freshAgentDefs = await getAgentDefinitionsWithOverrides(currentCwd);
  const freshAllAgents = [...freshAgentDefs.allAgents, ...cliAgents];
  return {
    ...freshAgentDefs,
    allAgents: freshAllAgents,
    activeAgents: getActiveAgentsFromList(freshAllAgents)
  };
}
function restoreWorktreeForResume(worktreeSession) {
  const fresh = getCurrentWorktreeSession();
  if (fresh) {
    saveWorktreeState(fresh);
    return;
  }
  if (!worktreeSession) return;
  try {
    process.chdir(worktreeSession.worktreePath);
  } catch {
    saveWorktreeState(null);
    return;
  }
  setCwd(worktreeSession.worktreePath);
  setOriginalCwd(getCwd());
  restoreWorktreeSession(worktreeSession);
  clearMemoryFileCaches();
  clearSystemPromptSections();
  getPlansDirectory.cache.clear?.();
}
function exitRestoredWorktree() {
  const current = getCurrentWorktreeSession();
  if (!current) return;
  restoreWorktreeSession(null);
  clearMemoryFileCaches();
  clearSystemPromptSections();
  getPlansDirectory.cache.clear?.();
  try {
    process.chdir(current.originalCwd);
  } catch {
    return;
  }
  setCwd(current.originalCwd);
  setOriginalCwd(getCwd());
}
async function processResumedConversation(result, opts, context) {
  let modeWarning;
  if (feature("COORDINATOR_MODE")) {
    modeWarning = context.modeApi?.matchSessionMode(result.mode);
    if (modeWarning) {
      result.messages.push(createSystemMessage(modeWarning, "warning"));
    }
  }
  if (!opts.forkSession) {
    const sid = opts.sessionIdOverride ?? result.sessionId;
    if (sid) {
      switchSession(
        asSessionId(sid),
        opts.transcriptPath ? dirname(opts.transcriptPath) : null
      );
      await renameRecordingForSession();
      await resetSessionFilePointer();
      restoreCostStateForSession(sid);
    }
  } else if (result.contentReplacements?.length) {
    await recordContentReplacement(result.contentReplacements);
  }
  restoreSessionMetadata(
    opts.forkSession ? { ...result, worktreeSession: void 0 } : result
  );
  if (!opts.forkSession) {
    restoreWorktreeForResume(result.worktreeSession);
    adoptResumedSessionFile();
  }
  if (feature("CONTEXT_COLLAPSE")) {
    ;
    (init_persist(), __toCommonJS(persist_exports)).restoreFromEntries(
      result.contextCollapseCommits ?? [],
      result.contextCollapseSnapshot
    );
  }
  const { agentDefinition: restoredAgent, agentType: resumedAgentType } = restoreAgentFromSession(
    result.agentSetting,
    context.mainThreadAgentDefinition,
    context.agentDefinitions
  );
  if (feature("COORDINATOR_MODE")) {
    saveMode(context.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  }
  const restoredAttribution = opts.includeAttribution ? computeRestoredAttributionState(result) : void 0;
  const standaloneAgentContext = computeStandaloneAgentContext(
    result.agentName,
    result.agentColor
  );
  void updateSessionName(result.agentName);
  const refreshedAgentDefs = await refreshAgentDefinitionsForModeSwitch(
    !!modeWarning,
    context.currentCwd,
    context.cliAgents,
    context.agentDefinitions
  );
  return {
    messages: result.messages,
    fileHistorySnapshots: result.fileHistorySnapshots,
    contentReplacements: result.contentReplacements,
    agentName: result.agentName,
    agentColor: result.agentColor === "default" ? void 0 : result.agentColor,
    restoredAgentDef: restoredAgent,
    initialState: {
      ...context.initialState,
      ...resumedAgentType && { agent: resumedAgentType },
      ...restoredAttribution && { attribution: restoredAttribution },
      ...standaloneAgentContext && { standaloneAgentContext },
      agentDefinitions: refreshedAgentDefs
    }
  };
}

export {
  skillChangeDetector,
  persist_exports,
  init_persist,
  restoreSessionStateFromLog,
  computeStandaloneAgentContext,
  restoreAgentFromSession,
  restoreWorktreeForResume,
  exitRestoredWorktree,
  processResumedConversation
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9wZXJzaXN0LnRzIiwgIi4uLy4uL3NyYy91dGlscy9za2lsbHMvc2tpbGxDaGFuZ2VEZXRlY3Rvci50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2Vzc2lvblJlc3RvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBmdW5jdGlvbiByZXN0b3JlRnJvbUVudHJpZXMoXG4gIF9lbnRyaWVzOiB1bmtub3duW10sXG4gIF9zbmFwc2hvdDogdW5rbm93bixcbik6IHZvaWQge31cbiIsICJpbXBvcnQgY2hva2lkYXIsIHsgdHlwZSBGU1dhdGNoZXIgfSBmcm9tICdjaG9raWRhcidcbmltcG9ydCAqIGFzIHBsYXRmb3JtUGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0QWRkaXRpb25hbERpcmVjdG9yaWVzRm9yQ2xhdWRlTWQgfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQge1xuICBjbGVhckNvbW1hbmRNZW1vaXphdGlvbkNhY2hlcyxcbiAgY2xlYXJDb21tYW5kc0NhY2hlLFxufSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIGNsZWFyU2tpbGxDYWNoZXMsXG4gIGdldFNraWxsc1BhdGgsXG4gIG9uRHluYW1pY1NraWxsc0xvYWRlZCxcbn0gZnJvbSAnLi4vLi4vc2tpbGxzL2xvYWRTa2lsbHNEaXIuanMnXG5pbXBvcnQgeyByZXNldFNlbnRTa2lsbE5hbWVzIH0gZnJvbSAnLi4vYXR0YWNobWVudHMuanMnXG5pbXBvcnQgeyByZWdpc3RlckNsZWFudXAgfSBmcm9tICcuLi9jbGVhbnVwUmVnaXN0cnkuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuLi9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBleGVjdXRlQ29uZmlnQ2hhbmdlSG9va3MsIGhhc0Jsb2NraW5nUmVzdWx0IH0gZnJvbSAnLi4vaG9va3MuanMnXG5pbXBvcnQgeyBjcmVhdGVTaWduYWwgfSBmcm9tICcuLi9zaWduYWwuanMnXG5cbi8qKlxuICogVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgZmlsZSB3cml0ZXMgdG8gc3RhYmlsaXplIGJlZm9yZSBwcm9jZXNzaW5nLlxuICovXG5jb25zdCBGSUxFX1NUQUJJTElUWV9USFJFU0hPTERfTVMgPSAxMDAwXG5cbi8qKlxuICogUG9sbGluZyBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMgZm9yIGNoZWNraW5nIGZpbGUgc3RhYmlsaXR5LlxuICovXG5jb25zdCBGSUxFX1NUQUJJTElUWV9QT0xMX0lOVEVSVkFMX01TID0gNTAwXG5cbi8qKlxuICogVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZGVib3VuY2UgcmFwaWQgc2tpbGwgY2hhbmdlIGV2ZW50cyBpbnRvIGEgc2luZ2xlXG4gKiByZWxvYWQuIFByZXZlbnRzIGNhc2NhZGluZyByZWxvYWRzIHdoZW4gbWFueSBza2lsbCBmaWxlcyBjaGFuZ2UgYXQgb25jZVxuICogKGUuZy4gZHVyaW5nIGF1dG8tdXBkYXRlIG9yIHdoZW4gYW5vdGhlciBzZXNzaW9uIG1vZGlmaWVzIHNraWxsIGRpcmVjdG9yaWVzKS5cbiAqIFdpdGhvdXQgdGhpcywgZWFjaCBmaWxlIGNoYW5nZSB0cmlnZ2VycyBhIGZ1bGwgY2xlYXJTa2lsbENhY2hlcygpICtcbiAqIGNsZWFyQ29tbWFuZHNDYWNoZSgpICsgbGlzdGVuZXIgbm90aWZpY2F0aW9uIGN5Y2xlLCB3aGljaCBjYW4gZGVhZGxvY2sgdGhlXG4gKiBldmVudCBsb29wIHdoZW4gZG96ZW5zIG9mIGV2ZW50cyBmaXJlIGluIHJhcGlkIHN1Y2Nlc3Npb24uXG4gKi9cbmNvbnN0IFJFTE9BRF9ERUJPVU5DRV9NUyA9IDMwMFxuXG4vKipcbiAqIFBvbGxpbmcgaW50ZXJ2YWwgZm9yIGNob2tpZGFyIHdoZW4gdXNlUG9sbGluZyBpcyBlbmFibGVkLlxuICogU2tpbGwgZmlsZXMgY2hhbmdlIHJhcmVseSAobWFudWFsIGVkaXRzLCBnaXQgb3BlcmF0aW9ucyksIHNvIGEgMnMgaW50ZXJ2YWxcbiAqIHRyYWRlcyBuZWdsaWdpYmxlIGxhdGVuY3kgZm9yIGZhciBmZXdlciBzdGF0KCkgY2FsbHMgdGhhbiB0aGUgZGVmYXVsdCAxMDBtcy5cbiAqL1xuY29uc3QgUE9MTElOR19JTlRFUlZBTF9NUyA9IDIwMDBcblxuLyoqXG4gKiBCdW4ncyBuYXRpdmUgZnMud2F0Y2goKSBoYXMgYSBQYXRoV2F0Y2hlck1hbmFnZXIgZGVhZGxvY2sgKG92ZW4tc2gvYnVuIzI3NDY5LFxuICogIzI2Mzg1KTogY2xvc2luZyBhIHdhdGNoZXIgb24gdGhlIG1haW4gdGhyZWFkIHdoaWxlIHRoZSBGaWxlIFdhdGNoZXIgdGhyZWFkXG4gKiBpcyBkZWxpdmVyaW5nIGV2ZW50cyBjYW4gaGFuZyBib3RoIHRocmVhZHMgaW4gX191bG9ja193YWl0MiBmb3JldmVyLiBDaG9raWRhclxuICogd2l0aCBkZXB0aDogMiBvbiBsYXJnZSBza2lsbCB0cmVlcyAoaHVuZHJlZHMgb2Ygc3ViZGlycykgdHJpZ2dlcnMgdGhpc1xuICogcmVsaWFibHkgd2hlbiBhIGdpdCBvcGVyYXRpb24gdG91Y2hlcyBtYW55IGRpcmVjdG9yaWVzIGF0IG9uY2UgXHUyMDE0IGNob2tpZGFyXG4gKiBpbnRlcm5hbGx5IGNsb3Nlcy9yZW9wZW5zIHBlci1kaXJlY3RvcnkgRlNXYXRjaGVycyBhcyBkaXJzIGFyZSBhZGRlZC9yZW1vdmVkLlxuICpcbiAqIFdvcmthcm91bmQ6IHVzZSBzdGF0KCkgcG9sbGluZyB1bmRlciBCdW4uIE5vIEZTV2F0Y2hlciA9IG5vIGRlYWRsb2NrLlxuICogVGhlIGZpeCBpcyBwZW5kaW5nIHVwc3RyZWFtOyByZW1vdmUgdGhpcyBvbmNlIHRoZSBCdW4gUFIgbGFuZHMuXG4gKi9cbmNvbnN0IFVTRV9QT0xMSU5HID0gdHlwZW9mIEJ1biAhPT0gJ3VuZGVmaW5lZCdcblxubGV0IHdhdGNoZXI6IEZTV2F0Y2hlciB8IG51bGwgPSBudWxsXG5sZXQgcmVsb2FkVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGxcbmNvbnN0IHBlbmRpbmdDaGFuZ2VkUGF0aHMgPSBuZXcgU2V0PHN0cmluZz4oKVxubGV0IGluaXRpYWxpemVkID0gZmFsc2VcbmxldCBkaXNwb3NlZCA9IGZhbHNlXG5sZXQgZHluYW1pY1NraWxsc0NhbGxiYWNrUmVnaXN0ZXJlZCA9IGZhbHNlXG5sZXQgdW5yZWdpc3RlckNsZWFudXA6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsXG5jb25zdCBza2lsbHNDaGFuZ2VkID0gY3JlYXRlU2lnbmFsKClcblxuLy8gVGVzdCBvdmVycmlkZXMgZm9yIHRpbWluZyBjb25zdGFudHNcbmxldCB0ZXN0T3ZlcnJpZGVzOiB7XG4gIHN0YWJpbGl0eVRocmVzaG9sZD86IG51bWJlclxuICBwb2xsSW50ZXJ2YWw/OiBudW1iZXJcbiAgcmVsb2FkRGVib3VuY2U/OiBudW1iZXJcbiAgLyoqIENob2tpZGFyIGZzLnN0YXQgcG9sbGluZyBpbnRlcnZhbCB3aGVuIFVTRV9QT0xMSU5HIGlzIGFjdGl2ZS4gKi9cbiAgY2hva2lkYXJJbnRlcnZhbD86IG51bWJlclxufSB8IG51bGwgPSBudWxsXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBmaWxlIHdhdGNoaW5nIGZvciBza2lsbCBkaXJlY3Rvcmllc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGluaXRpYWxpemVkIHx8IGRpc3Bvc2VkKSByZXR1cm5cbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG5cbiAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgZm9yIHdoZW4gZHluYW1pYyBza2lsbHMgYXJlIGxvYWRlZCAob25seSBvbmNlKVxuICBpZiAoIWR5bmFtaWNTa2lsbHNDYWxsYmFja1JlZ2lzdGVyZWQpIHtcbiAgICBkeW5hbWljU2tpbGxzQ2FsbGJhY2tSZWdpc3RlcmVkID0gdHJ1ZVxuICAgIG9uRHluYW1pY1NraWxsc0xvYWRlZCgoKSA9PiB7XG4gICAgICAvLyBDbGVhciBtZW1vaXphdGlvbiBjYWNoZXMgc28gbmV3IHNraWxscyBhcmUgcGlja2VkIHVwXG4gICAgICAvLyBOb3RlOiB3ZSB1c2UgY2xlYXJDb21tYW5kTWVtb2l6YXRpb25DYWNoZXMgKG5vdCBjbGVhckNvbW1hbmRzQ2FjaGUpXG4gICAgICAvLyBiZWNhdXNlIGNsZWFyQ29tbWFuZHNDYWNoZSB3b3VsZCBjYWxsIGNsZWFyU2tpbGxDYWNoZXMgd2hpY2hcbiAgICAgIC8vIHdpcGVzIG91dCB0aGUgZHluYW1pYyBza2lsbHMgd2UganVzdCBsb2FkZWRcbiAgICAgIGNsZWFyQ29tbWFuZE1lbW9pemF0aW9uQ2FjaGVzKClcbiAgICAgIC8vIE5vdGlmeSBsaXN0ZW5lcnMgdGhhdCBza2lsbHMgY2hhbmdlZFxuICAgICAgc2tpbGxzQ2hhbmdlZC5lbWl0KClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRXYXRjaGFibGVQYXRocygpXG4gIGlmIChwYXRocy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgV2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gc2tpbGwvY29tbWFuZCBkaXJlY3RvcmllczogJHtwYXRocy5qb2luKCcsICcpfS4uLmAsXG4gIClcblxuICB3YXRjaGVyID0gY2hva2lkYXIud2F0Y2gocGF0aHMsIHtcbiAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICAgIGlnbm9yZUluaXRpYWw6IHRydWUsXG4gICAgZGVwdGg6IDIsIC8vIFNraWxscyB1c2Ugc2tpbGwtbmFtZS9TS0lMTC5tZCBmb3JtYXRcbiAgICBhd2FpdFdyaXRlRmluaXNoOiB7XG4gICAgICBzdGFiaWxpdHlUaHJlc2hvbGQ6XG4gICAgICAgIHRlc3RPdmVycmlkZXM/LnN0YWJpbGl0eVRocmVzaG9sZCA/PyBGSUxFX1NUQUJJTElUWV9USFJFU0hPTERfTVMsXG4gICAgICBwb2xsSW50ZXJ2YWw6XG4gICAgICAgIHRlc3RPdmVycmlkZXM/LnBvbGxJbnRlcnZhbCA/PyBGSUxFX1NUQUJJTElUWV9QT0xMX0lOVEVSVkFMX01TLFxuICAgIH0sXG4gICAgLy8gSWdub3JlIHNwZWNpYWwgZmlsZSB0eXBlcyAoc29ja2V0cywgRklGT3MsIGRldmljZXMpIC0gdGhleSBjYW5ub3QgYmUgd2F0Y2hlZFxuICAgIC8vIGFuZCB3aWxsIGVycm9yIHdpdGggRU9QTk9UU1VQUCBvbiBtYWNPUy4gT25seSBhbGxvdyByZWd1bGFyIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cbiAgICBpZ25vcmVkOiAocGF0aCwgc3RhdHMpID0+IHtcbiAgICAgIGlmIChzdGF0cyAmJiAhc3RhdHMuaXNGaWxlKCkgJiYgIXN0YXRzLmlzRGlyZWN0b3J5KCkpIHJldHVybiB0cnVlXG4gICAgICAvLyBJZ25vcmUgLmdpdCBkaXJlY3Rvcmllc1xuICAgICAgcmV0dXJuIHBhdGguc3BsaXQocGxhdGZvcm1QYXRoLnNlcCkuc29tZShkaXIgPT4gZGlyID09PSAnLmdpdCcpXG4gICAgfSxcbiAgICBpZ25vcmVQZXJtaXNzaW9uRXJyb3JzOiB0cnVlLFxuICAgIHVzZVBvbGxpbmc6IFVTRV9QT0xMSU5HLFxuICAgIGludGVydmFsOiB0ZXN0T3ZlcnJpZGVzPy5jaG9raWRhckludGVydmFsID8/IFBPTExJTkdfSU5URVJWQUxfTVMsXG4gICAgYXRvbWljOiB0cnVlLFxuICB9KVxuXG4gIHdhdGNoZXIub24oJ2FkZCcsIGhhbmRsZUNoYW5nZSlcbiAgd2F0Y2hlci5vbignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICB3YXRjaGVyLm9uKCd1bmxpbmsnLCBoYW5kbGVDaGFuZ2UpXG5cbiAgLy8gUmVnaXN0ZXIgY2xlYW51cCB0byBwcm9wZXJseSBkaXNwb3NlIG9mIHRoZSBmaWxlIHdhdGNoZXIgZHVyaW5nIGdyYWNlZnVsIHNodXRkb3duXG4gIHVucmVnaXN0ZXJDbGVhbnVwID0gcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkaXNwb3NlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmaWxlIHdhdGNoZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGRpc3Bvc2VkID0gdHJ1ZVxuICBpZiAodW5yZWdpc3RlckNsZWFudXApIHtcbiAgICB1bnJlZ2lzdGVyQ2xlYW51cCgpXG4gICAgdW5yZWdpc3RlckNsZWFudXAgPSBudWxsXG4gIH1cbiAgbGV0IGNsb3NlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiA9IFByb21pc2UucmVzb2x2ZSgpXG4gIGlmICh3YXRjaGVyKSB7XG4gICAgY2xvc2VQcm9taXNlID0gd2F0Y2hlci5jbG9zZSgpXG4gICAgd2F0Y2hlciA9IG51bGxcbiAgfVxuICBpZiAocmVsb2FkVGltZXIpIHtcbiAgICBjbGVhclRpbWVvdXQocmVsb2FkVGltZXIpXG4gICAgcmVsb2FkVGltZXIgPSBudWxsXG4gIH1cbiAgcGVuZGluZ0NoYW5nZWRQYXRocy5jbGVhcigpXG4gIHNraWxsc0NoYW5nZWQuY2xlYXIoKVxuICByZXR1cm4gY2xvc2VQcm9taXNlXG59XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIHNraWxsIGNoYW5nZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHN1YnNjcmliZSA9IHNraWxsc0NoYW5nZWQuc3Vic2NyaWJlXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdhdGNoYWJsZVBhdGhzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgZnMgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcbiAgY29uc3QgcGF0aHM6IHN0cmluZ1tdID0gW11cblxuICAvLyBVc2VyIHNraWxscyBkaXJlY3RvcnkgKH4vLmNsYXVkZS9za2lsbHMpXG4gIGNvbnN0IHVzZXJTa2lsbHNQYXRoID0gZ2V0U2tpbGxzUGF0aCgndXNlclNldHRpbmdzJywgJ3NraWxscycpXG4gIGlmICh1c2VyU2tpbGxzUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmcy5zdGF0KHVzZXJTa2lsbHNQYXRoKVxuICAgICAgcGF0aHMucHVzaCh1c2VyU2tpbGxzUGF0aClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFBhdGggZG9lc24ndCBleGlzdCwgc2tpcCBpdFxuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXIgY29tbWFuZHMgZGlyZWN0b3J5ICh+Ly5jbGF1ZGUvY29tbWFuZHMpXG4gIGNvbnN0IHVzZXJDb21tYW5kc1BhdGggPSBnZXRTa2lsbHNQYXRoKCd1c2VyU2V0dGluZ3MnLCAnY29tbWFuZHMnKVxuICBpZiAodXNlckNvbW1hbmRzUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmcy5zdGF0KHVzZXJDb21tYW5kc1BhdGgpXG4gICAgICBwYXRocy5wdXNoKHVzZXJDb21tYW5kc1BhdGgpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBQYXRoIGRvZXNuJ3QgZXhpc3QsIHNraXAgaXRcbiAgICB9XG4gIH1cblxuICAvLyBQcm9qZWN0IHNraWxscyBkaXJlY3RvcnkgKC5jbGF1ZGUvc2tpbGxzKVxuICBjb25zdCBwcm9qZWN0U2tpbGxzUGF0aCA9IGdldFNraWxsc1BhdGgoJ3Byb2plY3RTZXR0aW5ncycsICdza2lsbHMnKVxuICBpZiAocHJvamVjdFNraWxsc1BhdGgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIHByb2plY3Qgc2V0dGluZ3MsIHJlc29sdmUgdG8gYWJzb2x1dGUgcGF0aFxuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGxhdGZvcm1QYXRoLnJlc29sdmUocHJvamVjdFNraWxsc1BhdGgpXG4gICAgICBhd2FpdCBmcy5zdGF0KGFic29sdXRlUGF0aClcbiAgICAgIHBhdGhzLnB1c2goYWJzb2x1dGVQYXRoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gUGF0aCBkb2Vzbid0IGV4aXN0LCBza2lwIGl0XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvamVjdCBjb21tYW5kcyBkaXJlY3RvcnkgKC5jbGF1ZGUvY29tbWFuZHMpXG4gIGNvbnN0IHByb2plY3RDb21tYW5kc1BhdGggPSBnZXRTa2lsbHNQYXRoKCdwcm9qZWN0U2V0dGluZ3MnLCAnY29tbWFuZHMnKVxuICBpZiAocHJvamVjdENvbW1hbmRzUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3IgcHJvamVjdCBzZXR0aW5ncywgcmVzb2x2ZSB0byBhYnNvbHV0ZSBwYXRoXG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwbGF0Zm9ybVBhdGgucmVzb2x2ZShwcm9qZWN0Q29tbWFuZHNQYXRoKVxuICAgICAgYXdhaXQgZnMuc3RhdChhYnNvbHV0ZVBhdGgpXG4gICAgICBwYXRocy5wdXNoKGFic29sdXRlUGF0aClcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFBhdGggZG9lc24ndCBleGlzdCwgc2tpcCBpdFxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgZGlyZWN0b3JpZXMgKC0tYWRkLWRpcikgc2tpbGxzXG4gIGZvciAoY29uc3QgZGlyIG9mIGdldEFkZGl0aW9uYWxEaXJlY3Rvcmllc0ZvckNsYXVkZU1kKCkpIHtcbiAgICBjb25zdCBhZGRpdGlvbmFsU2tpbGxzUGF0aCA9IHBsYXRmb3JtUGF0aC5qb2luKGRpciwgJy5jbGF1ZGUnLCAnc2tpbGxzJylcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZnMuc3RhdChhZGRpdGlvbmFsU2tpbGxzUGF0aClcbiAgICAgIHBhdGhzLnB1c2goYWRkaXRpb25hbFNraWxsc1BhdGgpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBQYXRoIGRvZXNuJ3QgZXhpc3QsIHNraXAgaXRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aHNcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBsb2dGb3JEZWJ1Z2dpbmcoYERldGVjdGVkIHNraWxsIGNoYW5nZTogJHtwYXRofWApXG4gIGxvZ0V2ZW50KCd0ZW5ndV9za2lsbF9maWxlX2NoYW5nZWQnLCB7XG4gICAgc291cmNlOlxuICAgICAgJ2Nob2tpZGFyJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB9KVxuXG4gIHNjaGVkdWxlUmVsb2FkKHBhdGgpXG59XG5cbi8qKlxuICogRGVib3VuY2UgcmFwaWQgc2tpbGwgY2hhbmdlcyBpbnRvIGEgc2luZ2xlIHJlbG9hZC4gV2hlbiBtYW55IHNraWxsIGZpbGVzXG4gKiBjaGFuZ2UgYXQgb25jZSAoZS5nLiBhdXRvLXVwZGF0ZSBpbnN0YWxscyBhIG5ldyBiaW5hcnkgYW5kIGEgbmV3IHNlc3Npb25cbiAqIHRvdWNoZXMgc2tpbGwgZGlyZWN0b3JpZXMpLCBlYWNoIGZpbGUgZmlyZXMgaXRzIG93biBjaG9raWRhciBldmVudC4gV2l0aG91dFxuICogZGVib3VuY2luZywgZWFjaCBldmVudCB0cmlnZ2VycyBjbGVhclNraWxsQ2FjaGVzKCkgKyBjbGVhckNvbW1hbmRzQ2FjaGUoKSArXG4gKiBsaXN0ZW5lciBub3RpZmljYXRpb24gXHUyMDE0IDMwIGV2ZW50cyBtZWFucyAzMCBmdWxsIHJlbG9hZCBjeWNsZXMsIHdoaWNoIGNhblxuICogZGVhZGxvY2sgdGhlIEJ1biBldmVudCBsb29wIHZpYSByYXBpZCBGU1dhdGNoZXIgd2F0Y2gvdW53YXRjaCBjaHVybi5cbiAqL1xuZnVuY3Rpb24gc2NoZWR1bGVSZWxvYWQoY2hhbmdlZFBhdGg6IHN0cmluZyk6IHZvaWQge1xuICBwZW5kaW5nQ2hhbmdlZFBhdGhzLmFkZChjaGFuZ2VkUGF0aClcbiAgaWYgKHJlbG9hZFRpbWVyKSBjbGVhclRpbWVvdXQocmVsb2FkVGltZXIpXG4gIHJlbG9hZFRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgcmVsb2FkVGltZXIgPSBudWxsXG4gICAgY29uc3QgcGF0aHMgPSBbLi4ucGVuZGluZ0NoYW5nZWRQYXRoc11cbiAgICBwZW5kaW5nQ2hhbmdlZFBhdGhzLmNsZWFyKClcbiAgICAvLyBGaXJlIENvbmZpZ0NoYW5nZSBob29rIG9uY2UgZm9yIHRoZSBiYXRjaCBcdTIwMTQgdGhlIGhvb2sgcXVlcnkgaXMgYWx3YXlzXG4gICAgLy8gJ3NraWxscycgc28gZmlyaW5nIHBlci1wYXRoICh3aGljaCBjYW4gYmUgaHVuZHJlZHMgZHVyaW5nIGEgZ2l0XG4gICAgLy8gb3BlcmF0aW9uKSBqdXN0IHNwYW1zIHRoZSBob29rIG1hdGNoZXIgd2l0aCBpZGVudGljYWwgcXVlcmllcy4gUGFzcyB0aGVcbiAgICAvLyBmaXJzdCBwYXRoIGFzIGEgcmVwcmVzZW50YXRpdmU7IGhvb2tzIGNhbiBpbnNwZWN0IGFsbCBwYXRocyB2aWEgdGhlXG4gICAgLy8gc2tpbGxzIGRpcmVjdG9yeSBpZiB0aGV5IG5lZWQgdGhlIGZ1bGwgc2V0LlxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlQ29uZmlnQ2hhbmdlSG9va3MoJ3NraWxscycsIHBhdGhzWzBdISlcbiAgICBpZiAoaGFzQmxvY2tpbmdSZXN1bHQocmVzdWx0cykpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYENvbmZpZ0NoYW5nZSBob29rIGJsb2NrZWQgc2tpbGwgcmVsb2FkICgke3BhdGhzLmxlbmd0aH0gcGF0aHMpYCxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjbGVhclNraWxsQ2FjaGVzKClcbiAgICBjbGVhckNvbW1hbmRzQ2FjaGUoKVxuICAgIHJlc2V0U2VudFNraWxsTmFtZXMoKVxuICAgIHNraWxsc0NoYW5nZWQuZW1pdCgpXG4gIH0sIHRlc3RPdmVycmlkZXM/LnJlbG9hZERlYm91bmNlID8/IFJFTE9BRF9ERUJPVU5DRV9NUylcbn1cblxuLyoqXG4gKiBSZXNldCBpbnRlcm5hbCBzdGF0ZSBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRGb3JUZXN0aW5nKG92ZXJyaWRlcz86IHtcbiAgc3RhYmlsaXR5VGhyZXNob2xkPzogbnVtYmVyXG4gIHBvbGxJbnRlcnZhbD86IG51bWJlclxuICByZWxvYWREZWJvdW5jZT86IG51bWJlclxuICBjaG9raWRhckludGVydmFsPzogbnVtYmVyXG59KTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIENsZWFuIHVwIGV4aXN0aW5nIHdhdGNoZXIgaWYgcHJlc2VudCB0byBhdm9pZCByZXNvdXJjZSBsZWFrc1xuICBpZiAod2F0Y2hlcikge1xuICAgIGF3YWl0IHdhdGNoZXIuY2xvc2UoKVxuICAgIHdhdGNoZXIgPSBudWxsXG4gIH1cbiAgaWYgKHJlbG9hZFRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KHJlbG9hZFRpbWVyKVxuICAgIHJlbG9hZFRpbWVyID0gbnVsbFxuICB9XG4gIHBlbmRpbmdDaGFuZ2VkUGF0aHMuY2xlYXIoKVxuICBza2lsbHNDaGFuZ2VkLmNsZWFyKClcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuICBkaXNwb3NlZCA9IGZhbHNlXG4gIHRlc3RPdmVycmlkZXMgPSBvdmVycmlkZXMgPz8gbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgc2tpbGxDaGFuZ2VEZXRlY3RvciA9IHtcbiAgaW5pdGlhbGl6ZSxcbiAgZGlzcG9zZSxcbiAgc3Vic2NyaWJlLFxuICByZXNldEZvclRlc3RpbmcsXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGdldE1haW5Mb29wTW9kZWxPdmVycmlkZSxcbiAgZ2V0U2Vzc2lvbklkLFxuICBzZXRNYWluTG9vcE1vZGVsT3ZlcnJpZGUsXG4gIHNldE1haW5UaHJlYWRBZ2VudFR5cGUsXG4gIHNldE9yaWdpbmFsQ3dkLFxuICBzd2l0Y2hTZXNzaW9uLFxufSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBjbGVhclN5c3RlbVByb21wdFNlY3Rpb25zIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N5c3RlbVByb21wdFNlY3Rpb25zLmpzJ1xuaW1wb3J0IHsgcmVzdG9yZUNvc3RTdGF0ZUZvclNlc3Npb24gfSBmcm9tICcuLi9jb3N0LXRyYWNrZXIuanMnXG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50Q29sb3JOYW1lIH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50Q29sb3JNYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBZ2VudERlZmluaXRpb24sXG4gIHR5cGUgQWdlbnREZWZpbml0aW9uc1Jlc3VsdCxcbiAgZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QsXG4gIGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzLFxufSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IFRPRE9fV1JJVEVfVE9PTF9OQU1FIH0gZnJvbSAnLi4vdG9vbHMvVG9kb1dyaXRlVG9vbC9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBhc1Nlc3Npb25JZCB9IGZyb20gJy4uL3R5cGVzL2lkcy5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXR0cmlidXRpb25TbmFwc2hvdE1lc3NhZ2UsXG4gIENvbnRleHRDb2xsYXBzZUNvbW1pdEVudHJ5LFxuICBDb250ZXh0Q29sbGFwc2VTbmFwc2hvdEVudHJ5LFxuICBQZXJzaXN0ZWRXb3JrdHJlZVNlc3Npb24sXG59IGZyb20gJy4uL3R5cGVzL2xvZ3MuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgcmVuYW1lUmVjb3JkaW5nRm9yU2Vzc2lvbiB9IGZyb20gJy4vYXNjaWljYXN0LmpzJ1xuaW1wb3J0IHsgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzIH0gZnJvbSAnLi9jbGF1ZGVtZC5qcydcbmltcG9ydCB7XG4gIHR5cGUgQXR0cmlidXRpb25TdGF0ZSxcbiAgYXR0cmlidXRpb25SZXN0b3JlU3RhdGVGcm9tTG9nLFxuICByZXN0b3JlQXR0cmlidXRpb25TdGF0ZUZyb21TbmFwc2hvdHMsXG59IGZyb20gJy4vY29tbWl0QXR0cmlidXRpb24uanMnXG5pbXBvcnQgeyB1cGRhdGVTZXNzaW9uTmFtZSB9IGZyb20gJy4vY29uY3VycmVudFNlc3Npb25zLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi9jd2QuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHR5cGUgeyBGaWxlSGlzdG9yeVNuYXBzaG90IH0gZnJvbSAnLi9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7IGZpbGVIaXN0b3J5UmVzdG9yZVN0YXRlRnJvbUxvZyB9IGZyb20gJy4vZmlsZUhpc3RvcnkuanMnXG5pbXBvcnQgeyBjcmVhdGVTeXN0ZW1NZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcy5qcydcbmltcG9ydCB7IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IGdldFBsYW5zRGlyZWN0b3J5IH0gZnJvbSAnLi9wbGFucy5qcydcbmltcG9ydCB7IHNldEN3ZCB9IGZyb20gJy4vU2hlbGwuanMnXG5pbXBvcnQge1xuICBhZG9wdFJlc3VtZWRTZXNzaW9uRmlsZSxcbiAgcmVjb3JkQ29udGVudFJlcGxhY2VtZW50LFxuICByZXNldFNlc3Npb25GaWxlUG9pbnRlcixcbiAgcmVzdG9yZVNlc3Npb25NZXRhZGF0YSxcbiAgc2F2ZU1vZGUsXG4gIHNhdmVXb3JrdHJlZVN0YXRlLFxufSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsgaXNUb2RvVjJFbmFibGVkIH0gZnJvbSAnLi90YXNrcy5qcydcbmltcG9ydCB0eXBlIHsgVG9kb0xpc3QgfSBmcm9tICcuL3RvZG8vdHlwZXMuanMnXG5pbXBvcnQgeyBUb2RvTGlzdFNjaGVtYSB9IGZyb20gJy4vdG9kby90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQ29udGVudFJlcGxhY2VtZW50UmVjb3JkIH0gZnJvbSAnLi90b29sUmVzdWx0U3RvcmFnZS5qcydcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRXb3JrdHJlZVNlc3Npb24sXG4gIHJlc3RvcmVXb3JrdHJlZVNlc3Npb24sXG59IGZyb20gJy4vd29ya3RyZWUuanMnXG5cbnR5cGUgUmVzdW1lUmVzdWx0ID0ge1xuICBtZXNzYWdlcz86IE1lc3NhZ2VbXVxuICBmaWxlSGlzdG9yeVNuYXBzaG90cz86IEZpbGVIaXN0b3J5U25hcHNob3RbXVxuICBhdHRyaWJ1dGlvblNuYXBzaG90cz86IEF0dHJpYnV0aW9uU25hcHNob3RNZXNzYWdlW11cbiAgY29udGV4dENvbGxhcHNlQ29tbWl0cz86IENvbnRleHRDb2xsYXBzZUNvbW1pdEVudHJ5W11cbiAgY29udGV4dENvbGxhcHNlU25hcHNob3Q/OiBDb250ZXh0Q29sbGFwc2VTbmFwc2hvdEVudHJ5XG59XG5cbi8qKlxuICogU2NhbiB0aGUgdHJhbnNjcmlwdCBmb3IgdGhlIGxhc3QgVG9kb1dyaXRlIHRvb2xfdXNlIGJsb2NrIGFuZCByZXR1cm4gaXRzIHRvZG9zLlxuICogVXNlZCB0byBoeWRyYXRlIEFwcFN0YXRlLnRvZG9zIG9uIFNESyAtLXJlc3VtZSBzbyB0aGUgbW9kZWwncyB0b2RvIGxpc3RcbiAqIHN1cnZpdmVzIHNlc3Npb24gcmVzdGFydHMgd2l0aG91dCBmaWxlIHBlcnNpc3RlbmNlLlxuICovXG5mdW5jdGlvbiBleHRyYWN0VG9kb3NGcm9tVHJhbnNjcmlwdChtZXNzYWdlczogTWVzc2FnZVtdKTogVG9kb0xpc3Qge1xuICBmb3IgKGxldCBpID0gbWVzc2FnZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXVxuICAgIGlmIChtc2c/LnR5cGUgIT09ICdhc3Npc3RhbnQnKSBjb250aW51ZVxuICAgIGNvbnN0IHRvb2xVc2UgPSBtc2cubWVzc2FnZS5jb250ZW50LmZpbmQoXG4gICAgICBibG9jayA9PiBibG9jay50eXBlID09PSAndG9vbF91c2UnICYmIGJsb2NrLm5hbWUgPT09IFRPRE9fV1JJVEVfVE9PTF9OQU1FLFxuICAgIClcbiAgICBpZiAoIXRvb2xVc2UgfHwgdG9vbFVzZS50eXBlICE9PSAndG9vbF91c2UnKSBjb250aW51ZVxuICAgIGNvbnN0IGlucHV0ID0gdG9vbFVzZS5pbnB1dFxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnKSByZXR1cm4gW11cbiAgICBjb25zdCBwYXJzZWQgPSBUb2RvTGlzdFNjaGVtYSgpLnNhZmVQYXJzZShcbiAgICAgIChpbnB1dCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikudG9kb3MsXG4gICAgKVxuICAgIHJldHVybiBwYXJzZWQuc3VjY2VzcyA/IHBhcnNlZC5kYXRhIDogW11cbiAgfVxuICByZXR1cm4gW11cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHNlc3Npb24gc3RhdGUgKGZpbGUgaGlzdG9yeSwgYXR0cmlidXRpb24sIHRvZG9zKSBmcm9tIGxvZyBvbiByZXN1bWUuXG4gKiBVc2VkIGJ5IGJvdGggU0RLIChwcmludC50cykgYW5kIGludGVyYWN0aXZlIChSRVBMLnRzeCwgbWFpbi50c3gpIHJlc3VtZSBwYXRocy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTZXNzaW9uU3RhdGVGcm9tTG9nKFxuICByZXN1bHQ6IFJlc3VtZVJlc3VsdCxcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuKTogdm9pZCB7XG4gIC8vIFJlc3RvcmUgZmlsZSBoaXN0b3J5IHN0YXRlXG4gIGlmIChyZXN1bHQuZmlsZUhpc3RvcnlTbmFwc2hvdHMgJiYgcmVzdWx0LmZpbGVIaXN0b3J5U25hcHNob3RzLmxlbmd0aCA+IDApIHtcbiAgICBmaWxlSGlzdG9yeVJlc3RvcmVTdGF0ZUZyb21Mb2cocmVzdWx0LmZpbGVIaXN0b3J5U25hcHNob3RzLCBuZXdTdGF0ZSA9PiB7XG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGZpbGVIaXN0b3J5OiBuZXdTdGF0ZSB9KSlcbiAgICB9KVxuICB9XG5cbiAgLy8gUmVzdG9yZSBhdHRyaWJ1dGlvbiBzdGF0ZSAoYW50LW9ubHkgZmVhdHVyZSlcbiAgaWYgKFxuICAgIGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpICYmXG4gICAgcmVzdWx0LmF0dHJpYnV0aW9uU25hcHNob3RzICYmXG4gICAgcmVzdWx0LmF0dHJpYnV0aW9uU25hcHNob3RzLmxlbmd0aCA+IDBcbiAgKSB7XG4gICAgYXR0cmlidXRpb25SZXN0b3JlU3RhdGVGcm9tTG9nKHJlc3VsdC5hdHRyaWJ1dGlvblNuYXBzaG90cywgbmV3U3RhdGUgPT4ge1xuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBhdHRyaWJ1dGlvbjogbmV3U3RhdGUgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFJlc3RvcmUgY29udGV4dC1jb2xsYXBzZSBjb21taXQgbG9nICsgc3RhZ2VkIHNuYXBzaG90LiBNdXN0IHJ1biBiZWZvcmVcbiAgLy8gdGhlIGZpcnN0IHF1ZXJ5KCkgc28gcHJvamVjdFZpZXcoKSBjYW4gcmVidWlsZCB0aGUgY29sbGFwc2VkIHZpZXcgZnJvbVxuICAvLyB0aGUgcmVzdW1lZCBNZXNzYWdlW10uIENhbGxlZCB1bmNvbmRpdGlvbmFsbHkgKGV2ZW4gd2l0aFxuICAvLyB1bmRlZmluZWQvZW1wdHkgZW50cmllcykgYmVjYXVzZSByZXN0b3JlRnJvbUVudHJpZXMgcmVzZXRzIHRoZSBzdG9yZVxuICAvLyBmaXJzdCBcdTIwMTQgd2l0aG91dCB0aGF0LCBhbiBpbi1zZXNzaW9uIC9yZXN1bWUgaW50byBhIHNlc3Npb24gd2l0aCBub1xuICAvLyBjb21taXRzIHdvdWxkIGxlYXZlIHRoZSBwcmlvciBzZXNzaW9uJ3Mgc3RhbGUgY29tbWl0IGxvZyBpbnRhY3QuXG4gIGlmIChmZWF0dXJlKCdDT05URVhUX0NPTExBUFNFJykpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgOyhcbiAgICAgIHJlcXVpcmUoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9wZXJzaXN0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvY29udGV4dENvbGxhcHNlL3BlcnNpc3QuanMnKVxuICAgICkucmVzdG9yZUZyb21FbnRyaWVzKFxuICAgICAgcmVzdWx0LmNvbnRleHRDb2xsYXBzZUNvbW1pdHMgPz8gW10sXG4gICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlU25hcHNob3QsXG4gICAgKVxuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICB9XG5cbiAgLy8gUmVzdG9yZSBUb2RvV3JpdGUgc3RhdGUgZnJvbSB0cmFuc2NyaXB0IChTREsvbm9uLWludGVyYWN0aXZlIG9ubHkpLlxuICAvLyBJbnRlcmFjdGl2ZSBtb2RlIHVzZXMgZmlsZS1iYWNrZWQgdjIgdGFza3MsIHNvIEFwcFN0YXRlLnRvZG9zIGlzIHVudXNlZCB0aGVyZS5cbiAgaWYgKCFpc1RvZG9WMkVuYWJsZWQoKSAmJiByZXN1bHQubWVzc2FnZXMgJiYgcmVzdWx0Lm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB0b2RvcyA9IGV4dHJhY3RUb2Rvc0Zyb21UcmFuc2NyaXB0KHJlc3VsdC5tZXNzYWdlcylcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWdlbnRJZCA9IGdldFNlc3Npb25JZCgpXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHRvZG9zOiB7IC4uLnByZXYudG9kb3MsIFthZ2VudElkXTogdG9kb3MgfSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXB1dGUgcmVzdG9yZWQgYXR0cmlidXRpb24gc3RhdGUgZnJvbSBsb2cgc25hcHNob3RzLlxuICogVXNlZCBmb3IgY29tcHV0aW5nIGluaXRpYWwgc3RhdGUgYmVmb3JlIHJlbmRlciAoZS5nLiwgbWFpbi50c3ggLS1jb250aW51ZSkuXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBhdHRyaWJ1dGlvbiBmZWF0dXJlIGlzIGRpc2FibGVkIG9yIG5vIHNuYXBzaG90cyBleGlzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVSZXN0b3JlZEF0dHJpYnV0aW9uU3RhdGUoXG4gIHJlc3VsdDogUmVzdW1lUmVzdWx0LFxuKTogQXR0cmlidXRpb25TdGF0ZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChcbiAgICBmZWF0dXJlKCdDT01NSVRfQVRUUklCVVRJT04nKSAmJlxuICAgIHJlc3VsdC5hdHRyaWJ1dGlvblNuYXBzaG90cyAmJlxuICAgIHJlc3VsdC5hdHRyaWJ1dGlvblNuYXBzaG90cy5sZW5ndGggPiAwXG4gICkge1xuICAgIHJldHVybiByZXN0b3JlQXR0cmlidXRpb25TdGF0ZUZyb21TbmFwc2hvdHMocmVzdWx0LmF0dHJpYnV0aW9uU25hcHNob3RzKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBDb21wdXRlIHN0YW5kYWxvbmUgYWdlbnQgY29udGV4dCAobmFtZS9jb2xvcikgZm9yIHNlc3Npb24gcmVzdW1lLlxuICogVXNlZCBmb3IgY29tcHV0aW5nIGluaXRpYWwgc3RhdGUgYmVmb3JlIHJlbmRlciAocGVyIENMQVVERS5tZCBndWlkZWxpbmVzKS5cbiAqIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vIG5hbWUvY29sb3IgaXMgc2V0IG9uIHRoZSBzZXNzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVN0YW5kYWxvbmVBZ2VudENvbnRleHQoXG4gIGFnZW50TmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBhZ2VudENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4pOiBBcHBTdGF0ZVsnc3RhbmRhbG9uZUFnZW50Q29udGV4dCddIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFhZ2VudE5hbWUgJiYgIWFnZW50Q29sb3IpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBhZ2VudE5hbWUgPz8gJycsXG4gICAgY29sb3I6IChhZ2VudENvbG9yID09PSAnZGVmYXVsdCcgPyB1bmRlZmluZWQgOiBhZ2VudENvbG9yKSBhc1xuICAgICAgfCBBZ2VudENvbG9yTmFtZVxuICAgICAgfCB1bmRlZmluZWQsXG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIGFnZW50IHNldHRpbmcgZnJvbSBhIHJlc3VtZWQgc2Vzc2lvbi5cbiAqXG4gKiBXaGVuIHJlc3VtaW5nIGEgY29udmVyc2F0aW9uIHRoYXQgdXNlZCBhIGN1c3RvbSBhZ2VudCwgdGhpcyByZS1hcHBsaWVzIHRoZVxuICogYWdlbnQgdHlwZSBhbmQgbW9kZWwgb3ZlcnJpZGUgKHVubGVzcyB0aGUgdXNlciBzcGVjaWZpZWQgLS1hZ2VudCBvbiB0aGUgQ0xJKS5cbiAqIE11dGF0ZXMgYm9vdHN0cmFwIHN0YXRlIHZpYSBzZXRNYWluVGhyZWFkQWdlbnRUeXBlIC8gc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlLlxuICpcbiAqIFJldHVybnMgdGhlIHJlc3RvcmVkIGFnZW50IGRlZmluaXRpb24gYW5kIGl0cyBhZ2VudFR5cGUgc3RyaW5nLCBvciB1bmRlZmluZWRcbiAqIGlmIG5vIGFnZW50IHdhcyByZXN0b3JlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVBZ2VudEZyb21TZXNzaW9uKFxuICBhZ2VudFNldHRpbmc6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgY3VycmVudEFnZW50RGVmaW5pdGlvbjogQWdlbnREZWZpbml0aW9uIHwgdW5kZWZpbmVkLFxuICBhZ2VudERlZmluaXRpb25zOiBBZ2VudERlZmluaXRpb25zUmVzdWx0LFxuKToge1xuICBhZ2VudERlZmluaXRpb246IEFnZW50RGVmaW5pdGlvbiB8IHVuZGVmaW5lZFxuICBhZ2VudFR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZFxufSB7XG4gIC8vIElmIHVzZXIgYWxyZWFkeSBzcGVjaWZpZWQgLS1hZ2VudCBvbiBDTEksIGtlZXAgdGhhdCBkZWZpbml0aW9uXG4gIGlmIChjdXJyZW50QWdlbnREZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHsgYWdlbnREZWZpbml0aW9uOiBjdXJyZW50QWdlbnREZWZpbml0aW9uLCBhZ2VudFR5cGU6IHVuZGVmaW5lZCB9XG4gIH1cblxuICAvLyBJZiBzZXNzaW9uIGhhZCBubyBhZ2VudCwgY2xlYXIgYW55IHN0YWxlIGJvb3RzdHJhcCBzdGF0ZVxuICBpZiAoIWFnZW50U2V0dGluZykge1xuICAgIHNldE1haW5UaHJlYWRBZ2VudFR5cGUodW5kZWZpbmVkKVxuICAgIHJldHVybiB7IGFnZW50RGVmaW5pdGlvbjogdW5kZWZpbmVkLCBhZ2VudFR5cGU6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCByZXN1bWVkQWdlbnQgPSBhZ2VudERlZmluaXRpb25zLmFjdGl2ZUFnZW50cy5maW5kKFxuICAgIGFnZW50ID0+IGFnZW50LmFnZW50VHlwZSA9PT0gYWdlbnRTZXR0aW5nLFxuICApXG4gIGlmICghcmVzdW1lZEFnZW50KSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFJlc3VtZWQgc2Vzc2lvbiBoYWQgYWdlbnQgXCIke2FnZW50U2V0dGluZ31cIiBidXQgaXQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZS4gVXNpbmcgZGVmYXVsdCBiZWhhdmlvci5gLFxuICAgIClcbiAgICBzZXRNYWluVGhyZWFkQWdlbnRUeXBlKHVuZGVmaW5lZClcbiAgICByZXR1cm4geyBhZ2VudERlZmluaXRpb246IHVuZGVmaW5lZCwgYWdlbnRUeXBlOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgc2V0TWFpblRocmVhZEFnZW50VHlwZShyZXN1bWVkQWdlbnQuYWdlbnRUeXBlKVxuXG4gIC8vIEFwcGx5IGFnZW50J3MgbW9kZWwgaWYgdXNlciBkaWRuJ3Qgc3BlY2lmeSBvbmVcbiAgaWYgKFxuICAgICFnZXRNYWluTG9vcE1vZGVsT3ZlcnJpZGUoKSAmJlxuICAgIHJlc3VtZWRBZ2VudC5tb2RlbCAmJlxuICAgIHJlc3VtZWRBZ2VudC5tb2RlbCAhPT0gJ2luaGVyaXQnXG4gICkge1xuICAgIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZShwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbChyZXN1bWVkQWdlbnQubW9kZWwpKVxuICB9XG5cbiAgcmV0dXJuIHsgYWdlbnREZWZpbml0aW9uOiByZXN1bWVkQWdlbnQsIGFnZW50VHlwZTogcmVzdW1lZEFnZW50LmFnZW50VHlwZSB9XG59XG5cbi8qKlxuICogUmVmcmVzaCBhZ2VudCBkZWZpbml0aW9ucyBhZnRlciBhIGNvb3JkaW5hdG9yL25vcm1hbCBtb2RlIHN3aXRjaC5cbiAqXG4gKiBXaGVuIHJlc3VtaW5nIGEgc2Vzc2lvbiB0aGF0IHdhcyBpbiBhIGRpZmZlcmVudCBtb2RlIChjb29yZGluYXRvciB2cyBub3JtYWwpLFxuICogdGhlIGJ1aWx0LWluIGFnZW50cyBuZWVkIHRvIGJlIHJlLWRlcml2ZWQgdG8gbWF0Y2ggdGhlIG5ldyBtb2RlLiBDTEktcHJvdmlkZWRcbiAqIGFnZW50cyAoZnJvbSAtLWFnZW50cyBmbGFnKSBhcmUgbWVyZ2VkIGJhY2sgaW4uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQWdlbnREZWZpbml0aW9uc0Zvck1vZGVTd2l0Y2goXG4gIG1vZGVXYXNTd2l0Y2hlZDogYm9vbGVhbixcbiAgY3VycmVudEN3ZDogc3RyaW5nLFxuICBjbGlBZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdLFxuICBjdXJyZW50QWdlbnREZWZpbml0aW9uczogQWdlbnREZWZpbml0aW9uc1Jlc3VsdCxcbik6IFByb21pc2U8QWdlbnREZWZpbml0aW9uc1Jlc3VsdD4ge1xuICBpZiAoIWZlYXR1cmUoJ0NPT1JESU5BVE9SX01PREUnKSB8fCAhbW9kZVdhc1N3aXRjaGVkKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRBZ2VudERlZmluaXRpb25zXG4gIH1cblxuICAvLyBSZS1kZXJpdmUgYWdlbnQgZGVmaW5pdGlvbnMgYWZ0ZXIgbW9kZSBzd2l0Y2ggc28gYnVpbHQtaW4gYWdlbnRzXG4gIC8vIHJlZmxlY3QgdGhlIG5ldyBjb29yZGluYXRvci9ub3JtYWwgbW9kZVxuICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcy5jYWNoZS5jbGVhcj8uKClcbiAgY29uc3QgZnJlc2hBZ2VudERlZnMgPSBhd2FpdCBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcyhjdXJyZW50Q3dkKVxuICBjb25zdCBmcmVzaEFsbEFnZW50cyA9IFsuLi5mcmVzaEFnZW50RGVmcy5hbGxBZ2VudHMsIC4uLmNsaUFnZW50c11cbiAgcmV0dXJuIHtcbiAgICAuLi5mcmVzaEFnZW50RGVmcyxcbiAgICBhbGxBZ2VudHM6IGZyZXNoQWxsQWdlbnRzLFxuICAgIGFjdGl2ZUFnZW50czogZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QoZnJlc2hBbGxBZ2VudHMpLFxuICB9XG59XG5cbi8qKlxuICogUmVzdWx0IG9mIHByb2Nlc3NpbmcgYSByZXN1bWVkL2NvbnRpbnVlZCBjb252ZXJzYXRpb24gZm9yIHJlbmRlcmluZy5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2Vzc2VkUmVzdW1lID0ge1xuICBtZXNzYWdlczogTWVzc2FnZVtdXG4gIGZpbGVIaXN0b3J5U25hcHNob3RzPzogRmlsZUhpc3RvcnlTbmFwc2hvdFtdXG4gIGNvbnRlbnRSZXBsYWNlbWVudHM/OiBDb250ZW50UmVwbGFjZW1lbnRSZWNvcmRbXVxuICBhZ2VudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBhZ2VudENvbG9yOiBBZ2VudENvbG9yTmFtZSB8IHVuZGVmaW5lZFxuICByZXN0b3JlZEFnZW50RGVmOiBBZ2VudERlZmluaXRpb24gfCB1bmRlZmluZWRcbiAgaW5pdGlhbFN0YXRlOiBBcHBTdGF0ZVxufVxuXG4vKipcbiAqIFN1YnNldCBvZiB0aGUgY29vcmRpbmF0b3IgbW9kZSBtb2R1bGUgQVBJIG5lZWRlZCBmb3Igc2Vzc2lvbiByZXN1bWUuXG4gKi9cbnR5cGUgQ29vcmRpbmF0b3JNb2RlQXBpID0ge1xuICBtYXRjaFNlc3Npb25Nb2RlKG1vZGU/OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgaXNDb29yZGluYXRvck1vZGUoKTogYm9vbGVhblxufVxuXG4vKipcbiAqIFRoZSBsb2FkZWQgY29udmVyc2F0aW9uIGRhdGEgKHJldHVybiB0eXBlIG9mIGxvYWRDb252ZXJzYXRpb25Gb3JSZXN1bWUpLlxuICovXG50eXBlIFJlc3VtZUxvYWRSZXN1bHQgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgZmlsZUhpc3RvcnlTbmFwc2hvdHM/OiBGaWxlSGlzdG9yeVNuYXBzaG90W11cbiAgYXR0cmlidXRpb25TbmFwc2hvdHM/OiBBdHRyaWJ1dGlvblNuYXBzaG90TWVzc2FnZVtdXG4gIGNvbnRlbnRSZXBsYWNlbWVudHM/OiBDb250ZW50UmVwbGFjZW1lbnRSZWNvcmRbXVxuICBjb250ZXh0Q29sbGFwc2VDb21taXRzPzogQ29udGV4dENvbGxhcHNlQ29tbWl0RW50cnlbXVxuICBjb250ZXh0Q29sbGFwc2VTbmFwc2hvdD86IENvbnRleHRDb2xsYXBzZVNuYXBzaG90RW50cnlcbiAgc2Vzc2lvbklkOiBVVUlEIHwgdW5kZWZpbmVkXG4gIGFnZW50TmFtZT86IHN0cmluZ1xuICBhZ2VudENvbG9yPzogc3RyaW5nXG4gIGFnZW50U2V0dGluZz86IHN0cmluZ1xuICBjdXN0b21UaXRsZT86IHN0cmluZ1xuICB0YWc/OiBzdHJpbmdcbiAgbW9kZT86ICdjb29yZGluYXRvcicgfCAnbm9ybWFsJ1xuICB3b3JrdHJlZVNlc3Npb24/OiBQZXJzaXN0ZWRXb3JrdHJlZVNlc3Npb24gfCBudWxsXG4gIHByTnVtYmVyPzogbnVtYmVyXG4gIHByVXJsPzogc3RyaW5nXG4gIHByUmVwb3NpdG9yeT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIHdvcmt0cmVlIHdvcmtpbmcgZGlyZWN0b3J5IG9uIHJlc3VtZS4gVGhlIHRyYW5zY3JpcHQgcmVjb3Jkc1xuICogdGhlIGxhc3Qgd29ya3RyZWUgZW50ZXIvZXhpdDsgaWYgdGhlIHNlc3Npb24gY3Jhc2hlZCB3aGlsZSBpbnNpZGUgYVxuICogd29ya3RyZWUgKGxhc3QgZW50cnkgPSBzZXNzaW9uIG9iamVjdCwgbm90IG51bGwpLCBjZCBiYWNrIGludG8gaXQuXG4gKlxuICogcHJvY2Vzcy5jaGRpciBpcyB0aGUgVE9DVE9VLXNhZmUgZXhpc3RlbmNlIGNoZWNrIFx1MjAxNCBpdCB0aHJvd3MgRU5PRU5UIGlmXG4gKiB0aGUgL2V4aXQgZGlhbG9nIHJlbW92ZWQgdGhlIGRpcmVjdG9yeSwgb3IgaWYgdGhlIHVzZXIgZGVsZXRlZCBpdFxuICogbWFudWFsbHkgYmV0d2VlbiBzZXNzaW9ucy5cbiAqXG4gKiBXaGVuIC0td29ya3RyZWUgYWxyZWFkeSBjcmVhdGVkIGEgZnJlc2ggd29ya3RyZWUsIHRoYXQgdGFrZXMgcHJlY2VkZW5jZVxuICogb3ZlciB0aGUgcmVzdW1lZCBzZXNzaW9uJ3Mgc3RhdGUuIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEganVzdCBvdmVyd3JvdGVcbiAqIHByb2plY3QuY3VycmVudFNlc3Npb25Xb3JrdHJlZSB3aXRoIHRoZSBzdGFsZSB0cmFuc2NyaXB0IHZhbHVlLCBzb1xuICogcmUtYXNzZXJ0IHRoZSBmcmVzaCB3b3JrdHJlZSBoZXJlIGJlZm9yZSBhZG9wdFJlc3VtZWRTZXNzaW9uRmlsZSB3cml0ZXNcbiAqIGl0IGJhY2sgdG8gZGlzay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVXb3JrdHJlZUZvclJlc3VtZShcbiAgd29ya3RyZWVTZXNzaW9uOiBQZXJzaXN0ZWRXb3JrdHJlZVNlc3Npb24gfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogdm9pZCB7XG4gIGNvbnN0IGZyZXNoID0gZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbigpXG4gIGlmIChmcmVzaCkge1xuICAgIHNhdmVXb3JrdHJlZVN0YXRlKGZyZXNoKVxuICAgIHJldHVyblxuICB9XG4gIGlmICghd29ya3RyZWVTZXNzaW9uKSByZXR1cm5cblxuICB0cnkge1xuICAgIHByb2Nlc3MuY2hkaXIod29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aClcbiAgfSBjYXRjaCB7XG4gICAgLy8gRGlyZWN0b3J5IGlzIGdvbmUuIE92ZXJyaWRlIHRoZSBzdGFsZSBjYWNoZSBzbyB0aGUgbmV4dFxuICAgIC8vIHJlQXBwZW5kU2Vzc2lvbk1ldGFkYXRhIHJlY29yZHMgXCJleGl0ZWRcIiBpbnN0ZWFkIG9mIHJlLXBlcnNpc3RpbmdcbiAgICAvLyBhIHBhdGggdGhhdCBubyBsb25nZXIgZXhpc3RzLlxuICAgIHNhdmVXb3JrdHJlZVN0YXRlKG51bGwpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzZXRDd2Qod29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aClcbiAgc2V0T3JpZ2luYWxDd2QoZ2V0Q3dkKCkpXG4gIC8vIHByb2plY3RSb290IGlzIGludGVudGlvbmFsbHkgTk9UIHNldCBoZXJlLiBUaGUgdHJhbnNjcmlwdCBkb2Vzbid0IHJlY29yZFxuICAvLyB3aGV0aGVyIHRoZSB3b3JrdHJlZSB3YXMgZW50ZXJlZCB2aWEgLS13b3JrdHJlZSAod2hpY2ggc2V0cyBwcm9qZWN0Um9vdClcbiAgLy8gb3IgRW50ZXJXb3JrdHJlZVRvb2wgKHdoaWNoIGRvZXNuJ3QpLiBMZWF2aW5nIHByb2plY3RSb290IHN0YWJsZSBtYXRjaGVzXG4gIC8vIEVudGVyV29ya3RyZWVUb29sJ3MgYmVoYXZpb3IgXHUyMDE0IHNraWxscy9oaXN0b3J5IHN0YXkgYW5jaG9yZWQgdG8gdGhlXG4gIC8vIG9yaWdpbmFsIHByb2plY3QuXG4gIHJlc3RvcmVXb3JrdHJlZVNlc3Npb24od29ya3RyZWVTZXNzaW9uKVxuICAvLyBUaGUgL3Jlc3VtZSBzbGFzaCBjb21tYW5kIGNhbGxzIHRoaXMgbWlkLXNlc3Npb24gYWZ0ZXIgY2FjaGVzIGhhdmUgYmVlblxuICAvLyBwb3B1bGF0ZWQgYWdhaW5zdCB0aGUgb2xkIGN3ZC4gQ2hlYXAgbm8tb3BzIGZvciB0aGUgQ0xJLWZsYWcgcGF0aFxuICAvLyAoY2FjaGVzIGFyZW4ndCBwb3B1bGF0ZWQgeWV0IHRoZXJlKS5cbiAgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzKClcbiAgY2xlYXJTeXN0ZW1Qcm9tcHRTZWN0aW9ucygpXG4gIGdldFBsYW5zRGlyZWN0b3J5LmNhY2hlLmNsZWFyPy4oKVxufVxuXG4vKipcbiAqIFVuZG8gcmVzdG9yZVdvcmt0cmVlRm9yUmVzdW1lIGJlZm9yZSBhIG1pZC1zZXNzaW9uIC9yZXN1bWUgc3dpdGNoZXMgdG9cbiAqIGFub3RoZXIgc2Vzc2lvbi4gV2l0aG91dCB0aGlzLCAvcmVzdW1lIGZyb20gYSB3b3JrdHJlZSBzZXNzaW9uIHRvIGFcbiAqIG5vbi13b3JrdHJlZSBzZXNzaW9uIGxlYXZlcyB0aGUgdXNlciBpbiB0aGUgb2xkIHdvcmt0cmVlIGRpcmVjdG9yeSB3aXRoXG4gKiBjdXJyZW50V29ya3RyZWVTZXNzaW9uIHN0aWxsIHBvaW50aW5nIGF0IHRoZSBwcmlvciBzZXNzaW9uLiAvcmVzdW1lIHRvIGFcbiAqICpkaWZmZXJlbnQqIHdvcmt0cmVlIGZhaWxzIGVudGlyZWx5IFx1MjAxNCB0aGUgZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbigpXG4gKiBndWFyZCBhYm92ZSBibG9ja3MgdGhlIHN3aXRjaC5cbiAqXG4gKiBOb3QgbmVlZGVkIGJ5IENMSSAtLXJlc3VtZS8tLWNvbnRpbnVlOiB0aG9zZSBydW4gb25jZSBhdCBzdGFydHVwIHdoZXJlXG4gKiBnZXRDdXJyZW50V29ya3RyZWVTZXNzaW9uKCkgaXMgb25seSB0cnV0aHkgaWYgLS13b3JrdHJlZSB3YXMgdXNlZCAoZnJlc2hcbiAqIHdvcmt0cmVlIHRoYXQgc2hvdWxkIHRha2UgcHJlY2VkZW5jZSwgaGFuZGxlZCBieSB0aGUgcmUtYXNzZXJ0IGFib3ZlKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXRSZXN0b3JlZFdvcmt0cmVlKCk6IHZvaWQge1xuICBjb25zdCBjdXJyZW50ID0gZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbigpXG4gIGlmICghY3VycmVudCkgcmV0dXJuXG5cbiAgcmVzdG9yZVdvcmt0cmVlU2Vzc2lvbihudWxsKVxuICAvLyBXb3JrdHJlZSBzdGF0ZSBjaGFuZ2VkLCBzbyBjYWNoZWQgcHJvbXB0IHNlY3Rpb25zIHRoYXQgcmVmZXJlbmNlIGl0IGFyZVxuICAvLyBzdGFsZSB3aGV0aGVyIG9yIG5vdCBjaGRpciBzdWNjZWVkcyBiZWxvdy5cbiAgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzKClcbiAgY2xlYXJTeXN0ZW1Qcm9tcHRTZWN0aW9ucygpXG4gIGdldFBsYW5zRGlyZWN0b3J5LmNhY2hlLmNsZWFyPy4oKVxuXG4gIHRyeSB7XG4gICAgcHJvY2Vzcy5jaGRpcihjdXJyZW50Lm9yaWdpbmFsQ3dkKVxuICB9IGNhdGNoIHtcbiAgICAvLyBPcmlnaW5hbCBkaXIgaXMgZ29uZSAocmFyZSkuIFN0YXkgcHV0IFx1MjAxNCByZXN0b3JlV29ya3RyZWVGb3JSZXN1bWVcbiAgICAvLyB3aWxsIGNkIGludG8gdGhlIHRhcmdldCB3b3JrdHJlZSBuZXh0IGlmIHRoZXJlIGlzIG9uZS5cbiAgICByZXR1cm5cbiAgfVxuICBzZXRDd2QoY3VycmVudC5vcmlnaW5hbEN3ZClcbiAgc2V0T3JpZ2luYWxDd2QoZ2V0Q3dkKCkpXG59XG5cbi8qKlxuICogUHJvY2VzcyBhIGxvYWRlZCBjb252ZXJzYXRpb24gZm9yIHJlc3VtZS9jb250aW51ZS5cbiAqXG4gKiBIYW5kbGVzIGNvb3JkaW5hdG9yIG1vZGUgbWF0Y2hpbmcsIHNlc3Npb24gSUQgc2V0dXAsIGFnZW50IHJlc3RvcmF0aW9uLFxuICogbW9kZSBwZXJzaXN0ZW5jZSwgYW5kIGluaXRpYWwgc3RhdGUgY29tcHV0YXRpb24uIENhbGxlZCBieSBib3RoIC0tY29udGludWVcbiAqIGFuZCAtLXJlc3VtZSBwYXRocyBpbiBtYWluLnRzeC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NSZXN1bWVkQ29udmVyc2F0aW9uKFxuICByZXN1bHQ6IFJlc3VtZUxvYWRSZXN1bHQsXG4gIG9wdHM6IHtcbiAgICBmb3JrU2Vzc2lvbjogYm9vbGVhblxuICAgIHNlc3Npb25JZE92ZXJyaWRlPzogc3RyaW5nXG4gICAgdHJhbnNjcmlwdFBhdGg/OiBzdHJpbmdcbiAgICBpbmNsdWRlQXR0cmlidXRpb24/OiBib29sZWFuXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICBtb2RlQXBpOiBDb29yZGluYXRvck1vZGVBcGkgfCBudWxsXG4gICAgbWFpblRocmVhZEFnZW50RGVmaW5pdGlvbjogQWdlbnREZWZpbml0aW9uIHwgdW5kZWZpbmVkXG4gICAgYWdlbnREZWZpbml0aW9uczogQWdlbnREZWZpbml0aW9uc1Jlc3VsdFxuICAgIGN1cnJlbnRDd2Q6IHN0cmluZ1xuICAgIGNsaUFnZW50czogQWdlbnREZWZpbml0aW9uW11cbiAgICBpbml0aWFsU3RhdGU6IEFwcFN0YXRlXG4gIH0sXG4pOiBQcm9taXNlPFByb2Nlc3NlZFJlc3VtZT4ge1xuICAvLyBNYXRjaCBjb29yZGluYXRvci9ub3JtYWwgbW9kZSB0byB0aGUgcmVzdW1lZCBzZXNzaW9uXG4gIGxldCBtb2RlV2FybmluZzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykpIHtcbiAgICBtb2RlV2FybmluZyA9IGNvbnRleHQubW9kZUFwaT8ubWF0Y2hTZXNzaW9uTW9kZShyZXN1bHQubW9kZSlcbiAgICBpZiAobW9kZVdhcm5pbmcpIHtcbiAgICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKGNyZWF0ZVN5c3RlbU1lc3NhZ2UobW9kZVdhcm5pbmcsICd3YXJuaW5nJykpXG4gICAgfVxuICB9XG5cbiAgLy8gUmV1c2UgdGhlIHJlc3VtZWQgc2Vzc2lvbidzIElEIHVubGVzcyAtLWZvcmstc2Vzc2lvbiBpcyBzcGVjaWZpZWRcbiAgaWYgKCFvcHRzLmZvcmtTZXNzaW9uKSB7XG4gICAgY29uc3Qgc2lkID0gb3B0cy5zZXNzaW9uSWRPdmVycmlkZSA/PyByZXN1bHQuc2Vzc2lvbklkXG4gICAgaWYgKHNpZCkge1xuICAgICAgLy8gV2hlbiByZXN1bWluZyBmcm9tIGEgZGlmZmVyZW50IHByb2plY3QgZGlyZWN0b3J5IChnaXQgd29ya3RyZWVzLFxuICAgICAgLy8gY3Jvc3MtcHJvamVjdCksIHRyYW5zY3JpcHRQYXRoIHBvaW50cyB0byB0aGUgYWN0dWFsIGZpbGU7IGl0cyBkaXJuYW1lXG4gICAgICAvLyBpcyB0aGUgcHJvamVjdCBkaXIuIE90aGVyd2lzZSB0aGUgc2Vzc2lvbiBsaXZlcyBpbiB0aGUgY3VycmVudCBwcm9qZWN0LlxuICAgICAgc3dpdGNoU2Vzc2lvbihcbiAgICAgICAgYXNTZXNzaW9uSWQoc2lkKSxcbiAgICAgICAgb3B0cy50cmFuc2NyaXB0UGF0aCA/IGRpcm5hbWUob3B0cy50cmFuc2NyaXB0UGF0aCkgOiBudWxsLFxuICAgICAgKVxuICAgICAgLy8gUmVuYW1lIGFzY2lpY2FzdCByZWNvcmRpbmcgdG8gbWF0Y2ggdGhlIHJlc3VtZWQgc2Vzc2lvbiBJRCBzb1xuICAgICAgLy8gZ2V0U2Vzc2lvblJlY29yZGluZ1BhdGhzKCkgY2FuIGRpc2NvdmVyIGl0IGR1cmluZyAvc2hhcmVcbiAgICAgIGF3YWl0IHJlbmFtZVJlY29yZGluZ0ZvclNlc3Npb24oKVxuICAgICAgYXdhaXQgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIoKVxuICAgICAgcmVzdG9yZUNvc3RTdGF0ZUZvclNlc3Npb24oc2lkKVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXN1bHQuY29udGVudFJlcGxhY2VtZW50cz8ubGVuZ3RoKSB7XG4gICAgLy8gLS1mb3JrLXNlc3Npb24ga2VlcHMgdGhlIGZyZXNoIHN0YXJ0dXAgc2Vzc2lvbiBJRC4gdXNlTG9nTWVzc2FnZXMgd2lsbFxuICAgIC8vIGNvcHkgc291cmNlIG1lc3NhZ2VzIGludG8gdGhlIG5ldyBKU09OTCB2aWEgcmVjb3JkVHJhbnNjcmlwdCwgYnV0XG4gICAgLy8gY29udGVudC1yZXBsYWNlbWVudCBlbnRyaWVzIGFyZSBhIHNlcGFyYXRlIGVudHJ5IHR5cGUgb25seSB3cml0dGVuIGJ5XG4gICAgLy8gcmVjb3JkQ29udGVudFJlcGxhY2VtZW50ICh3aGljaCBxdWVyeS50cyBjYWxscyBmb3IgbmV3bHlSZXBsYWNlZCwgbmV2ZXJcbiAgICAvLyB0aGUgcHJlLWxvYWRlZCByZWNvcmRzKS4gV2l0aG91dCB0aGlzIHNlZWQsIGBjbGF1ZGUgLXIge25ld1Nlc3Npb25JZH1gXG4gICAgLy8gZmluZHMgc291cmNlIHRvb2xfdXNlX2lkcyBpbiBtZXNzYWdlcyBidXQgbm8gbWF0Y2hpbmcgcmVwbGFjZW1lbnQgcmVjb3Jkc1xuICAgIC8vIFx1MjE5MiB0aGV5J3JlIGNsYXNzaWZpZWQgYXMgRlJPWkVOIFx1MjE5MiBmdWxsIGNvbnRlbnQgc2VudCAoY2FjaGUgbWlzcywgcGVybWFuZW50XG4gICAgLy8gb3ZlcmFnZSkuIGluc2VydENvbnRlbnRSZXBsYWNlbWVudCBzdGFtcHMgc2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkKCkgPVxuICAgIC8vIHRoZSBmcmVzaCBJRCwgc28gbG9hZFRyYW5zY3JpcHRGaWxlJ3Mga2V5ZWQgbG9va3VwIHdpbGwgbWF0Y2guXG4gICAgYXdhaXQgcmVjb3JkQ29udGVudFJlcGxhY2VtZW50KHJlc3VsdC5jb250ZW50UmVwbGFjZW1lbnRzKVxuICB9XG5cbiAgLy8gUmVzdG9yZSBzZXNzaW9uIG1ldGFkYXRhIHNvIC9zdGF0dXMgc2hvd3MgdGhlIHNhdmVkIG5hbWUgYW5kIG1ldGFkYXRhXG4gIC8vIGlzIHJlLWFwcGVuZGVkIG9uIHNlc3Npb24gZXhpdC4gRm9yayBkb2Vzbid0IHRha2Ugb3duZXJzaGlwIG9mIHRoZVxuICAvLyBvcmlnaW5hbCBzZXNzaW9uJ3Mgd29ya3RyZWUgXHUyMDE0IGEgXCJSZW1vdmVcIiBvbiB0aGUgZm9yaydzIGV4aXQgZGlhbG9nXG4gIC8vIHdvdWxkIGRlbGV0ZSBhIHdvcmt0cmVlIHRoZSBvcmlnaW5hbCBzZXNzaW9uIHN0aWxsIHJlZmVyZW5jZXMgXHUyMDE0IHNvXG4gIC8vIHN0cmlwIHdvcmt0cmVlU2Vzc2lvbiBmcm9tIHRoZSBmb3JrIHBhdGggc28gdGhlIGNhY2hlIHN0YXlzIHVuc2V0LlxuICByZXN0b3JlU2Vzc2lvbk1ldGFkYXRhKFxuICAgIG9wdHMuZm9ya1Nlc3Npb24gPyB7IC4uLnJlc3VsdCwgd29ya3RyZWVTZXNzaW9uOiB1bmRlZmluZWQgfSA6IHJlc3VsdCxcbiAgKVxuXG4gIGlmICghb3B0cy5mb3JrU2Vzc2lvbikge1xuICAgIC8vIENkIGJhY2sgaW50byB0aGUgd29ya3RyZWUgdGhlIHNlc3Npb24gd2FzIGluIHdoZW4gaXQgbGFzdCBleGl0ZWQuXG4gICAgLy8gRG9uZSBhZnRlciByZXN0b3JlU2Vzc2lvbk1ldGFkYXRhICh3aGljaCBjYWNoZXMgdGhlIHdvcmt0cmVlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgdHJhbnNjcmlwdCkgc28gaWYgdGhlIGRpcmVjdG9yeSBpcyBnb25lIHdlIGNhbiBvdmVycmlkZVxuICAgIC8vIHRoZSBjYWNoZSBiZWZvcmUgYWRvcHRSZXN1bWVkU2Vzc2lvbkZpbGUgd3JpdGVzIGl0LlxuICAgIHJlc3RvcmVXb3JrdHJlZUZvclJlc3VtZShyZXN1bHQud29ya3RyZWVTZXNzaW9uKVxuXG4gICAgLy8gUG9pbnQgc2Vzc2lvbkZpbGUgYXQgdGhlIHJlc3VtZWQgdHJhbnNjcmlwdCBhbmQgcmUtYXBwZW5kIG1ldGFkYXRhXG4gICAgLy8gbm93LiByZXNldFNlc3Npb25GaWxlUG9pbnRlciBhYm92ZSBudWxsZWQgaXQgKHNvIHRoZSBvbGQgZnJlc2gtc2Vzc2lvblxuICAgIC8vIHBhdGggZG9lc24ndCBsZWFrKSwgYnV0IHRoYXQgYmxvY2tzIHJlQXBwZW5kU2Vzc2lvbk1ldGFkYXRhIFx1MjAxNCB3aGljaFxuICAgIC8vIGJhaWxzIG9uIG51bGwgXHUyMDE0IGZyb20gcnVubmluZyBpbiB0aGUgZXhpdCBjbGVhbnVwIGhhbmRsZXIuIEZvciBmb3JrLFxuICAgIC8vIHVzZUxvZ01lc3NhZ2VzIHBvcHVsYXRlcyBhICpuZXcqIGZpbGUgdmlhIHJlY29yZFRyYW5zY3JpcHQgb24gUkVQTFxuICAgIC8vIG1vdW50OyB0aGUgbm9ybWFsIGxhenktbWF0ZXJpYWxpemUgcGF0aCBpcyBjb3JyZWN0IHRoZXJlLlxuICAgIGFkb3B0UmVzdW1lZFNlc3Npb25GaWxlKClcbiAgfVxuXG4gIC8vIFJlc3RvcmUgY29udGV4dC1jb2xsYXBzZSBjb21taXQgbG9nICsgc3RhZ2VkIHNuYXBzaG90LiBUaGUgaW50ZXJhY3RpdmVcbiAgLy8gL3Jlc3VtZSBwYXRoIGdvZXMgdGhyb3VnaCByZXN0b3JlU2Vzc2lvblN0YXRlRnJvbUxvZyAoUkVQTC50c3gpOyBDTElcbiAgLy8gLS1jb250aW51ZS8tLXJlc3VtZSBnb2VzIHRocm91Z2ggaGVyZSBpbnN0ZWFkLiBDYWxsZWQgdW5jb25kaXRpb25hbGx5XG4gIC8vIFx1MjAxNCBzZWUgdGhlIHJlc3RvcmVTZXNzaW9uU3RhdGVGcm9tTG9nIGNhbGxzaXRlIGFib3ZlIGZvciB3aHkuXG4gIGlmIChmZWF0dXJlKCdDT05URVhUX0NPTExBUFNFJykpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgOyhcbiAgICAgIHJlcXVpcmUoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9wZXJzaXN0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvY29udGV4dENvbGxhcHNlL3BlcnNpc3QuanMnKVxuICAgICkucmVzdG9yZUZyb21FbnRyaWVzKFxuICAgICAgcmVzdWx0LmNvbnRleHRDb2xsYXBzZUNvbW1pdHMgPz8gW10sXG4gICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlU25hcHNob3QsXG4gICAgKVxuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICB9XG5cbiAgLy8gUmVzdG9yZSBhZ2VudCBzZXR0aW5nIGZyb20gcmVzdW1lZCBzZXNzaW9uXG4gIGNvbnN0IHsgYWdlbnREZWZpbml0aW9uOiByZXN0b3JlZEFnZW50LCBhZ2VudFR5cGU6IHJlc3VtZWRBZ2VudFR5cGUgfSA9XG4gICAgcmVzdG9yZUFnZW50RnJvbVNlc3Npb24oXG4gICAgICByZXN1bHQuYWdlbnRTZXR0aW5nLFxuICAgICAgY29udGV4dC5tYWluVGhyZWFkQWdlbnREZWZpbml0aW9uLFxuICAgICAgY29udGV4dC5hZ2VudERlZmluaXRpb25zLFxuICAgIClcblxuICAvLyBQZXJzaXN0IHRoZSBjdXJyZW50IG1vZGUgc28gZnV0dXJlIHJlc3VtZXMga25vdyB3aGF0IG1vZGUgdGhpcyBzZXNzaW9uIHdhcyBpblxuICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpKSB7XG4gICAgc2F2ZU1vZGUoY29udGV4dC5tb2RlQXBpPy5pc0Nvb3JkaW5hdG9yTW9kZSgpID8gJ2Nvb3JkaW5hdG9yJyA6ICdub3JtYWwnKVxuICB9XG5cbiAgLy8gQ29tcHV0ZSBpbml0aWFsIHN0YXRlIGJlZm9yZSByZW5kZXIgKHBlciBDTEFVREUubWQgZ3VpZGVsaW5lcylcbiAgY29uc3QgcmVzdG9yZWRBdHRyaWJ1dGlvbiA9IG9wdHMuaW5jbHVkZUF0dHJpYnV0aW9uXG4gICAgPyBjb21wdXRlUmVzdG9yZWRBdHRyaWJ1dGlvblN0YXRlKHJlc3VsdClcbiAgICA6IHVuZGVmaW5lZFxuICBjb25zdCBzdGFuZGFsb25lQWdlbnRDb250ZXh0ID0gY29tcHV0ZVN0YW5kYWxvbmVBZ2VudENvbnRleHQoXG4gICAgcmVzdWx0LmFnZW50TmFtZSxcbiAgICByZXN1bHQuYWdlbnRDb2xvcixcbiAgKVxuICB2b2lkIHVwZGF0ZVNlc3Npb25OYW1lKHJlc3VsdC5hZ2VudE5hbWUpXG4gIGNvbnN0IHJlZnJlc2hlZEFnZW50RGVmcyA9IGF3YWl0IHJlZnJlc2hBZ2VudERlZmluaXRpb25zRm9yTW9kZVN3aXRjaChcbiAgICAhIW1vZGVXYXJuaW5nLFxuICAgIGNvbnRleHQuY3VycmVudEN3ZCxcbiAgICBjb250ZXh0LmNsaUFnZW50cyxcbiAgICBjb250ZXh0LmFnZW50RGVmaW5pdGlvbnMsXG4gIClcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiByZXN1bHQubWVzc2FnZXMsXG4gICAgZmlsZUhpc3RvcnlTbmFwc2hvdHM6IHJlc3VsdC5maWxlSGlzdG9yeVNuYXBzaG90cyxcbiAgICBjb250ZW50UmVwbGFjZW1lbnRzOiByZXN1bHQuY29udGVudFJlcGxhY2VtZW50cyxcbiAgICBhZ2VudE5hbWU6IHJlc3VsdC5hZ2VudE5hbWUsXG4gICAgYWdlbnRDb2xvcjogKHJlc3VsdC5hZ2VudENvbG9yID09PSAnZGVmYXVsdCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHJlc3VsdC5hZ2VudENvbG9yKSBhcyBBZ2VudENvbG9yTmFtZSB8IHVuZGVmaW5lZCxcbiAgICByZXN0b3JlZEFnZW50RGVmOiByZXN0b3JlZEFnZW50LFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgLi4uY29udGV4dC5pbml0aWFsU3RhdGUsXG4gICAgICAuLi4ocmVzdW1lZEFnZW50VHlwZSAmJiB7IGFnZW50OiByZXN1bWVkQWdlbnRUeXBlIH0pLFxuICAgICAgLi4uKHJlc3RvcmVkQXR0cmlidXRpb24gJiYgeyBhdHRyaWJ1dGlvbjogcmVzdG9yZWRBdHRyaWJ1dGlvbiB9KSxcbiAgICAgIC4uLihzdGFuZGFsb25lQWdlbnRDb250ZXh0ICYmIHsgc3RhbmRhbG9uZUFnZW50Q29udGV4dCB9KSxcbiAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHJlZnJlc2hlZEFnZW50RGVmcyxcbiAgICB9LFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBUyxtQkFDZCxVQUNBLFdBQ007QUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBLFlBQVksa0JBQWtCO0FBeUI5QixJQUFNLDhCQUE4QjtBQUtwQyxJQUFNLGtDQUFrQztBQVV4QyxJQUFNLHFCQUFxQjtBQU8zQixJQUFNLHNCQUFzQjtBQWE1QixJQUFNLGNBQWMsT0FBTyxRQUFRO0FBRW5DLElBQUksVUFBNEI7QUFDaEMsSUFBSSxjQUFvRDtBQUN4RCxJQUFNLHNCQUFzQixvQkFBSSxJQUFZO0FBQzVDLElBQUksY0FBYztBQUNsQixJQUFJLFdBQVc7QUFDZixJQUFJLGtDQUFrQztBQUN0QyxJQUFJLG9CQUF5QztBQUM3QyxJQUFNLGdCQUFnQixhQUFhO0FBR25DLElBQUksZ0JBTU87QUFLWCxlQUFzQixhQUE0QjtBQUNoRCxNQUFJLGVBQWUsU0FBVTtBQUM3QixnQkFBYztBQUdkLE1BQUksQ0FBQyxpQ0FBaUM7QUFDcEMsc0NBQWtDO0FBQ2xDLDBCQUFzQixNQUFNO0FBSzFCLG9DQUE4QjtBQUU5QixvQkFBYyxLQUFLO0FBQUEsSUFDckIsQ0FBQztBQUFBLEVBQ0g7QUFFQSxRQUFNLFFBQVEsTUFBTSxrQkFBa0I7QUFDdEMsTUFBSSxNQUFNLFdBQVcs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
