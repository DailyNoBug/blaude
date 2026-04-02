#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  initSinks
} from "./chunk-SPDUM4H3.mjs";
import {
  getRecentActivity,
  init_logoV2Utils
} from "./chunk-7XWSOXGK.mjs";
import {
  checkForReleaseNotes,
  init_releaseNotes
} from "./chunk-3CKXPEPP.mjs";
import "./chunk-57A2KPHN.mjs";
import {
  DEFAULT_SESSION_MEMORY_CONFIG,
  FILE_EDIT_TOOL_NAME,
  FileReadTool,
  asSessionId,
  buildSessionMemoryUpdatePrompt,
  captureHooksConfigSnapshot,
  clearMemoryFileCaches,
  contextCollapse_exports,
  createCacheSafeParams,
  createSubagentContext,
  createTmuxSessionForWorktree,
  createUserMessage,
  createWorktreeForSession,
  generateTmuxSessionName,
  getCommands,
  getPlanSlug,
  getSessionMemoryConfig,
  getSessionMemoryDir,
  getSessionMemoryPath,
  getTokenUsage,
  getToolCallsBetweenUpdates,
  hasMetInitializationThreshold,
  hasMetUpdateThreshold,
  hasToolCallsInLastAssistantTurn,
  hasWorktreeCreateHook,
  init_FileReadTool,
  init_Shell,
  init_autoCompact,
  init_claudemd,
  init_commands2 as init_commands,
  init_constants,
  init_context,
  init_contextCollapse,
  init_fileChangedWatcher,
  init_filesystem,
  init_forkedAgent,
  init_hooks2 as init_hooks,
  init_hooksConfigSnapshot,
  init_ids,
  init_messages2 as init_messages,
  init_nativeInstaller,
  init_plans,
  init_postSamplingHooks,
  init_prompts,
  init_prompts2,
  init_sessionMemoryUtils,
  init_sessionStorage,
  init_systemPromptType,
  init_tokens,
  init_worktree,
  initializeFileChangedWatcher,
  isAutoCompactEnabled,
  isSessionMemoryInitialized,
  loadSessionMemoryTemplate,
  lockCurrentVersion,
  markExtractionCompleted,
  markExtractionStarted,
  markSessionMemoryInitialized,
  recordExtractionTokenCount,
  registerPostSamplingHook,
  runForkedAgent,
  saveWorktreeState,
  setCwd,
  setLastSummarizedMessageId,
  setSessionMemoryConfig,
  tokenCountWithEstimation,
  updateHooksConfigSnapshot,
  worktreeBranchName
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import {
  checkAndRestoreTerminalBackup,
  init_appleTerminalBackup
} from "./chunk-H474P6P2.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  envDynamic,
  getCurrentProjectConfig,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  init_agentSwarmsEnabled,
  init_auth,
  init_config2 as init_config,
  init_envDynamic,
  init_growthbook,
  init_sequential,
  init_source,
  isAgentSwarmsEnabled,
  prefetchApiKeyFromApiKeyHelperIfSafe,
  saveGlobalConfig,
  sequential,
  source_default
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import {
  env,
  init_env
} from "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import {
  findCanonicalGitRoot,
  findGitRoot,
  getIsGit,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init_errors,
  init_fsOperations
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getIsNonInteractiveSession,
  getIsRemoteMode,
  getProjectRoot,
  getSessionId,
  init_state,
  setOriginalCwd,
  setProjectRoot,
  switchSession
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isBareMode,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/setup.ts
init_bun_bundle();
init_source();
init_analytics();
init_cwd();
init_releaseNotes();
init_Shell();
init_state();
init_commands();

// src/services/SessionMemory/sessionMemory.ts
init_memoize();
init_state();
init_prompts2();
init_context();
init_constants();
init_FileReadTool();
init_array();
init_forkedAgent();
init_fsOperations();
init_postSamplingHooks();
init_messages();
init_filesystem();
init_sequential();
init_systemPromptType();
init_tokens();
init_analytics();
init_autoCompact();
init_prompts();
init_sessionMemoryUtils();
init_errors();
init_growthbook();
import { writeFile } from "fs/promises";
function isSessionMemoryGateEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_session_memory", false);
}
function getSessionMemoryRemoteConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(
    "tengu_sm_config",
    {}
  );
}
var lastMemoryMessageUuid;
function countToolCallsSince(messages, sinceUuid) {
  let toolCallCount = 0;
  let foundStart = sinceUuid === null || sinceUuid === void 0;
  for (const message of messages) {
    if (!foundStart) {
      if (message.uuid === sinceUuid) {
        foundStart = true;
      }
      continue;
    }
    if (message.type === "assistant") {
      const content = message.message.content;
      if (Array.isArray(content)) {
        toolCallCount += count(content, (block) => block.type === "tool_use");
      }
    }
  }
  return toolCallCount;
}
function shouldExtractMemory(messages) {
  const currentTokenCount = tokenCountWithEstimation(messages);
  if (!isSessionMemoryInitialized()) {
    if (!hasMetInitializationThreshold(currentTokenCount)) {
      return false;
    }
    markSessionMemoryInitialized();
  }
  const hasMetTokenThreshold = hasMetUpdateThreshold(currentTokenCount);
  const toolCallsSinceLastUpdate = countToolCallsSince(
    messages,
    lastMemoryMessageUuid
  );
  const hasMetToolCallThreshold = toolCallsSinceLastUpdate >= getToolCallsBetweenUpdates();
  const hasToolCallsInLastTurn = hasToolCallsInLastAssistantTurn(messages);
  const shouldExtract = hasMetTokenThreshold && hasMetToolCallThreshold || hasMetTokenThreshold && !hasToolCallsInLastTurn;
  if (shouldExtract) {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.uuid) {
      lastMemoryMessageUuid = lastMessage.uuid;
    }
    return true;
  }
  return false;
}
async function setupSessionMemoryFile(toolUseContext) {
  const fs = getFsImplementation();
  const sessionMemoryDir = getSessionMemoryDir();
  await fs.mkdir(sessionMemoryDir, { mode: 448 });
  const memoryPath = getSessionMemoryPath();
  try {
    await writeFile(memoryPath, "", {
      encoding: "utf-8",
      mode: 384,
      flag: "wx"
    });
    const template = await loadSessionMemoryTemplate();
    await writeFile(memoryPath, template, {
      encoding: "utf-8",
      mode: 384
    });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "EEXIST") {
      throw e;
    }
  }
  toolUseContext.readFileState.delete(memoryPath);
  const result = await FileReadTool.call(
    { file_path: memoryPath },
    toolUseContext
  );
  let currentMemory = "";
  const output = result.data;
  if (output.type === "text") {
    currentMemory = output.file.content;
  }
  logEvent("tengu_session_memory_file_read", {
    content_length: currentMemory.length
  });
  return { memoryPath, currentMemory };
}
var initSessionMemoryConfigIfNeeded = memoize_default(() => {
  const remoteConfig = getSessionMemoryRemoteConfig();
  const config = {
    minimumMessageTokensToInit: remoteConfig.minimumMessageTokensToInit && remoteConfig.minimumMessageTokensToInit > 0 ? remoteConfig.minimumMessageTokensToInit : DEFAULT_SESSION_MEMORY_CONFIG.minimumMessageTokensToInit,
    minimumTokensBetweenUpdate: remoteConfig.minimumTokensBetweenUpdate && remoteConfig.minimumTokensBetweenUpdate > 0 ? remoteConfig.minimumTokensBetweenUpdate : DEFAULT_SESSION_MEMORY_CONFIG.minimumTokensBetweenUpdate,
    toolCallsBetweenUpdates: remoteConfig.toolCallsBetweenUpdates && remoteConfig.toolCallsBetweenUpdates > 0 ? remoteConfig.toolCallsBetweenUpdates : DEFAULT_SESSION_MEMORY_CONFIG.toolCallsBetweenUpdates
  };
  setSessionMemoryConfig(config);
});
var hasLoggedGateFailure = false;
var extractSessionMemory = sequential(async function(context) {
  const { messages, toolUseContext, querySource } = context;
  if (querySource !== "repl_main_thread") {
    return;
  }
  if (!isSessionMemoryGateEnabled()) {
    if (process.env.USER_TYPE === "ant" && !hasLoggedGateFailure) {
      hasLoggedGateFailure = true;
      logEvent("tengu_session_memory_gate_disabled", {});
    }
    return;
  }
  initSessionMemoryConfigIfNeeded();
  if (!shouldExtractMemory(messages)) {
    return;
  }
  markExtractionStarted();
  const setupContext = createSubagentContext(toolUseContext);
  const { memoryPath, currentMemory } = await setupSessionMemoryFile(setupContext);
  const userPrompt = await buildSessionMemoryUpdatePrompt(
    currentMemory,
    memoryPath
  );
  await runForkedAgent({
    promptMessages: [createUserMessage({ content: userPrompt })],
    cacheSafeParams: createCacheSafeParams(context),
    canUseTool: createMemoryFileCanUseTool(memoryPath),
    querySource: "session_memory",
    forkLabel: "session_memory",
    overrides: { readFileState: setupContext.readFileState }
  });
  const lastMessage = messages[messages.length - 1];
  const usage = lastMessage ? getTokenUsage(lastMessage) : void 0;
  const config = getSessionMemoryConfig();
  logEvent("tengu_session_memory_extraction", {
    input_tokens: usage?.input_tokens,
    output_tokens: usage?.output_tokens,
    cache_read_input_tokens: usage?.cache_read_input_tokens ?? void 0,
    cache_creation_input_tokens: usage?.cache_creation_input_tokens ?? void 0,
    config_min_message_tokens_to_init: config.minimumMessageTokensToInit,
    config_min_tokens_between_update: config.minimumTokensBetweenUpdate,
    config_tool_calls_between_updates: config.toolCallsBetweenUpdates
  });
  recordExtractionTokenCount(tokenCountWithEstimation(messages));
  updateLastSummarizedMessageIdIfSafe(messages);
  markExtractionCompleted();
});
function initSessionMemory() {
  if (getIsRemoteMode()) return;
  const autoCompactEnabled = isAutoCompactEnabled();
  if (process.env.USER_TYPE === "ant") {
    logEvent("tengu_session_memory_init", {
      auto_compact_enabled: autoCompactEnabled
    });
  }
  if (!autoCompactEnabled) {
    return;
  }
  registerPostSamplingHook(extractSessionMemory);
}
function createMemoryFileCanUseTool(memoryPath) {
  return async (tool, input) => {
    if (tool.name === FILE_EDIT_TOOL_NAME && typeof input === "object" && input !== null && "file_path" in input) {
      const filePath = input.file_path;
      if (typeof filePath === "string" && filePath === memoryPath) {
        return { behavior: "allow", updatedInput: input };
      }
    }
    return {
      behavior: "deny",
      message: `only ${FILE_EDIT_TOOL_NAME} on ${memoryPath} is allowed`,
      decisionReason: {
        type: "other",
        reason: `only ${FILE_EDIT_TOOL_NAME} on ${memoryPath} is allowed`
      }
    };
  };
}
function updateLastSummarizedMessageIdIfSafe(messages) {
  if (!hasToolCallsInLastAssistantTurn(messages)) {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.uuid) {
      setLastSummarizedMessageId(lastMessage.uuid);
    }
  }
}

// src/setup.ts
init_ids();
init_agentSwarmsEnabled();
init_appleTerminalBackup();
init_auth();
init_claudemd();
init_config();
init_diagLogs();
init_env();
init_envDynamic();
init_envUtils();
init_errors();
init_git();
init_fileChangedWatcher();
init_hooksConfigSnapshot();
init_hooks();

// src/utils/iTermBackup.ts
init_config();
init_log();
import { copyFile, stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
function markITerm2SetupComplete() {
  saveGlobalConfig((current) => ({
    ...current,
    iterm2SetupInProgress: false
  }));
}
function getIterm2RecoveryInfo() {
  const config = getGlobalConfig();
  return {
    inProgress: config.iterm2SetupInProgress ?? false,
    backupPath: config.iterm2BackupPath || null
  };
}
function getITerm2PlistPath() {
  return join(
    homedir(),
    "Library",
    "Preferences",
    "com.googlecode.iterm2.plist"
  );
}
async function checkAndRestoreITerm2Backup() {
  const { inProgress, backupPath } = getIterm2RecoveryInfo();
  if (!inProgress) {
    return { status: "no_backup" };
  }
  if (!backupPath) {
    markITerm2SetupComplete();
    return { status: "no_backup" };
  }
  try {
    await stat(backupPath);
  } catch {
    markITerm2SetupComplete();
    return { status: "no_backup" };
  }
  try {
    await copyFile(backupPath, getITerm2PlistPath());
    markITerm2SetupComplete();
    return { status: "restored" };
  } catch (restoreError) {
    logError(
      new Error(`Failed to restore iTerm2 settings with: ${restoreError}`)
    );
    markITerm2SetupComplete();
    return { status: "failed", backupPath };
  }
}

// src/setup.ts
init_log();
init_logoV2Utils();
init_nativeInstaller();
init_plans();
init_sessionStorage();
init_startupProfiler();
init_worktree();
async function setup(cwd, permissionMode, allowDangerouslySkipPermissions, worktreeEnabled, worktreeName, tmuxEnabled, customSessionId, worktreePRNumber, messagingSocketPath) {
  logForDiagnosticsNoPII("info", "setup_started");
  const nodeVersion = process.version.match(/^v(\d+)\./)?.[1];
  if (!nodeVersion || parseInt(nodeVersion) < 18) {
    console.error(
      source_default.bold.red(
        "Error: Blaude requires Node.js version 18 or higher."
      )
    );
    process.exit(1);
  }
  if (customSessionId) {
    switchSession(asSessionId(customSessionId));
  }
  if (!isBareMode() || messagingSocketPath !== void 0) {
    if (feature("UDS_INBOX")) {
      const m = await import("./udsMessaging-RPUQRNBO.mjs");
      await m.startUdsMessaging(
        messagingSocketPath ?? m.getDefaultUdsSocketPath(),
        { isExplicit: messagingSocketPath !== void 0 }
      );
    }
  }
  if (!isBareMode() && isAgentSwarmsEnabled()) {
    const { captureTeammateModeSnapshot } = await import("./teammateModeSnapshot-L2NGB6AU.mjs");
    captureTeammateModeSnapshot();
  }
  if (!getIsNonInteractiveSession()) {
    if (isAgentSwarmsEnabled()) {
      const restoredIterm2Backup = await checkAndRestoreITerm2Backup();
      if (restoredIterm2Backup.status === "restored") {
        console.log(
          source_default.yellow(
            "Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect."
          )
        );
      } else if (restoredIterm2Backup.status === "failed") {
        console.error(
          source_default.red(
            `Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${restoredIterm2Backup.backupPath}.`
          )
        );
      }
    }
    try {
      const restoredTerminalBackup = await checkAndRestoreTerminalBackup();
      if (restoredTerminalBackup.status === "restored") {
        console.log(
          source_default.yellow(
            "Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect."
          )
        );
      } else if (restoredTerminalBackup.status === "failed") {
        console.error(
          source_default.red(
            `Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${restoredTerminalBackup.backupPath}.`
          )
        );
      }
    } catch (error) {
      logError(error);
    }
  }
  setCwd(cwd);
  const hooksStart = Date.now();
  captureHooksConfigSnapshot();
  logForDiagnosticsNoPII("info", "setup_hooks_captured", {
    duration_ms: Date.now() - hooksStart
  });
  initializeFileChangedWatcher(cwd);
  if (worktreeEnabled) {
    const hasHook = hasWorktreeCreateHook();
    const inGit = await getIsGit();
    if (!hasHook && !inGit) {
      process.stderr.write(
        source_default.red(
          `Error: Can only use --worktree in a git repository, but ${source_default.bold(cwd)} is not a git repository. Configure a WorktreeCreate hook in settings.json to use --worktree with other VCS systems.
`
        )
      );
      process.exit(1);
    }
    const slug = worktreePRNumber ? `pr-${worktreePRNumber}` : worktreeName ?? getPlanSlug();
    let tmuxSessionName;
    if (inGit) {
      const mainRepoRoot = findCanonicalGitRoot(getCwd());
      if (!mainRepoRoot) {
        process.stderr.write(
          source_default.red(
            `Error: Could not determine the main git repository root.
`
          )
        );
        process.exit(1);
      }
      if (mainRepoRoot !== (findGitRoot(getCwd()) ?? getCwd())) {
        logForDiagnosticsNoPII("info", "worktree_resolved_to_main_repo");
        process.chdir(mainRepoRoot);
        setCwd(mainRepoRoot);
      }
      tmuxSessionName = tmuxEnabled ? generateTmuxSessionName(mainRepoRoot, worktreeBranchName(slug)) : void 0;
    } else {
      tmuxSessionName = tmuxEnabled ? generateTmuxSessionName(getCwd(), worktreeBranchName(slug)) : void 0;
    }
    let worktreeSession;
    try {
      worktreeSession = await createWorktreeForSession(
        getSessionId(),
        slug,
        tmuxSessionName,
        worktreePRNumber ? { prNumber: worktreePRNumber } : void 0
      );
    } catch (error) {
      process.stderr.write(
        source_default.red(`Error creating worktree: ${errorMessage(error)}
`)
      );
      process.exit(1);
    }
    logEvent("tengu_worktree_created", { tmux_enabled: tmuxEnabled });
    if (tmuxEnabled && tmuxSessionName) {
      const tmuxResult = await createTmuxSessionForWorktree(
        tmuxSessionName,
        worktreeSession.worktreePath
      );
      if (tmuxResult.created) {
        console.log(
          source_default.green(
            `Created tmux session: ${source_default.bold(tmuxSessionName)}
To attach: ${source_default.bold(`tmux attach -t ${tmuxSessionName}`)}`
          )
        );
      } else {
        console.error(
          source_default.yellow(
            `Warning: Failed to create tmux session: ${tmuxResult.error}`
          )
        );
      }
    }
    process.chdir(worktreeSession.worktreePath);
    setCwd(worktreeSession.worktreePath);
    setOriginalCwd(getCwd());
    setProjectRoot(getCwd());
    saveWorktreeState(worktreeSession);
    clearMemoryFileCaches();
    updateHooksConfigSnapshot();
  }
  logForDiagnosticsNoPII("info", "setup_background_jobs_starting");
  if (!isBareMode()) {
    initSessionMemory();
    if (feature("CONTEXT_COLLAPSE")) {
      ;
      (init_contextCollapse(), __toCommonJS(contextCollapse_exports)).initContextCollapse();
    }
  }
  void lockCurrentVersion();
  logForDiagnosticsNoPII("info", "setup_background_jobs_launched");
  profileCheckpoint("setup_before_prefetch");
  logForDiagnosticsNoPII("info", "setup_prefetch_starting");
  const skipPluginPrefetch = getIsNonInteractiveSession() && isEnvTruthy(process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) || // --bare: loadPluginHooks → loadAllPlugins is filesystem work that's
  // wasted when executeHooks early-returns under --bare anyway.
  isBareMode();
  if (!skipPluginPrefetch) {
    void getCommands(getProjectRoot());
  }
  void import("./loadPluginHooks-LW7RGQT6.mjs").then((m) => {
    if (!skipPluginPrefetch) {
      void m.loadPluginHooks();
      m.setupPluginHookHotReload();
    }
  });
  if (!isBareMode()) {
    if (process.env.USER_TYPE === "ant") {
      void import("./commitAttribution-LUDCO2NW.mjs").then(async (m) => {
        if (await m.isInternalModelRepo()) {
          const { clearSystemPromptSections } = await import("./systemPromptSections-SMS7BQYQ.mjs");
          clearSystemPromptSections();
        }
      });
    }
    if (feature("COMMIT_ATTRIBUTION")) {
      setImmediate(() => {
        void import("./attributionHooks-AUEEVTFA.mjs").then(
          ({ registerAttributionHooks }) => {
            registerAttributionHooks();
          }
        );
      });
    }
    void import("./sessionFileAccessHooks-3GF7F5RS.mjs").then(
      (m) => m.registerSessionFileAccessHooks()
    );
    if (feature("TEAMMEM")) {
      void import("./watcher-2G3HL36N.mjs").then(
        (m) => m.startTeamMemoryWatcher()
      );
    }
  }
  initSinks();
  logEvent("tengu_started", {});
  void prefetchApiKeyFromApiKeyHelperIfSafe(getIsNonInteractiveSession());
  profileCheckpoint("setup_after_prefetch");
  if (!isBareMode()) {
    const { hasReleaseNotes } = await checkForReleaseNotes(
      getGlobalConfig().lastReleaseNotesSeen
    );
    if (hasReleaseNotes) {
      await getRecentActivity();
    }
  }
  if (permissionMode === "bypassPermissions" || allowDangerouslySkipPermissions) {
    if (process.platform !== "win32" && typeof process.getuid === "function" && process.getuid() === 0 && process.env.IS_SANDBOX !== "1" && !isEnvTruthy(process.env.CLAUDE_CODE_BUBBLEWRAP)) {
      console.error(
        `--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons`
      );
      process.exit(1);
    }
    if (process.env.USER_TYPE === "ant" && // Skip for Desktop's local agent mode — same trust model as CCR/BYOC
    // (trusted Anthropic-managed launcher intentionally pre-approving everything).
    // Precedent: permissionSetup.ts:861, applySettingsChange.ts:55 (PR #19116)
    process.env.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && // Same for CCD (Claude Code in Desktop) — apps#29127 passes the flag
    // unconditionally to unlock mid-session bypass switching
    process.env.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop") {
      const [isDocker, hasInternet] = await Promise.all([
        envDynamic.getIsDocker(),
        env.hasInternetAccess()
      ]);
      const isBubblewrap = envDynamic.getIsBubblewrapSandbox();
      const isSandbox = process.env.IS_SANDBOX === "1";
      const isSandboxed = isDocker || isBubblewrap || isSandbox;
      if (!isSandboxed || hasInternet) {
        console.error(
          `--dangerously-skip-permissions can only be used in Docker/sandbox containers with no internet access but got Docker: ${isDocker}, Bubblewrap: ${isBubblewrap}, IS_SANDBOX: ${isSandbox}, hasInternet: ${hasInternet}`
        );
        process.exit(1);
      }
    }
  }
  if (process.env.NODE_ENV === "test") {
    return;
  }
  const projectConfig = getCurrentProjectConfig();
  if (projectConfig.lastCost !== void 0 && projectConfig.lastDuration !== void 0) {
    logEvent("tengu_exit", {
      last_session_cost: projectConfig.lastCost,
      last_session_api_duration: projectConfig.lastAPIDuration,
      last_session_tool_duration: projectConfig.lastToolDuration,
      last_session_duration: projectConfig.lastDuration,
      last_session_lines_added: projectConfig.lastLinesAdded,
      last_session_lines_removed: projectConfig.lastLinesRemoved,
      last_session_total_input_tokens: projectConfig.lastTotalInputTokens,
      last_session_total_output_tokens: projectConfig.lastTotalOutputTokens,
      last_session_total_cache_creation_input_tokens: projectConfig.lastTotalCacheCreationInputTokens,
      last_session_total_cache_read_input_tokens: projectConfig.lastTotalCacheReadInputTokens,
      last_session_fps_average: projectConfig.lastFpsAverage,
      last_session_fps_low_1_pct: projectConfig.lastFpsLow1Pct,
      last_session_id: projectConfig.lastSessionId,
      ...projectConfig.lastSessionMetrics
    });
  }
}
export {
  setup
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NldHVwLnRzIiwgIi4uLy4uL3NyYy9zZXJ2aWNlcy9TZXNzaW9uTWVtb3J5L3Nlc3Npb25NZW1vcnkudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2lUZXJtQmFja3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBlc2xpbnQtZGlzYWJsZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0ICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJ3NyYy91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBjaGVja0ZvclJlbGVhc2VOb3RlcyB9IGZyb20gJ3NyYy91dGlscy9yZWxlYXNlTm90ZXMuanMnXG5pbXBvcnQgeyBzZXRDd2QgfSBmcm9tICdzcmMvdXRpbHMvU2hlbGwuanMnXG5pbXBvcnQgeyBpbml0U2lua3MgfSBmcm9tICdzcmMvdXRpbHMvc2lua3MuanMnXG5pbXBvcnQge1xuICBnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbixcbiAgZ2V0UHJvamVjdFJvb3QsXG4gIGdldFNlc3Npb25JZCxcbiAgc2V0T3JpZ2luYWxDd2QsXG4gIHNldFByb2plY3RSb290LFxuICBzd2l0Y2hTZXNzaW9uLFxufSBmcm9tICcuL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldENvbW1hbmRzIH0gZnJvbSAnLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IGluaXRTZXNzaW9uTWVtb3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9TZXNzaW9uTWVtb3J5L3Nlc3Npb25NZW1vcnkuanMnXG5pbXBvcnQgeyBhc1Nlc3Npb25JZCB9IGZyb20gJy4vdHlwZXMvaWRzLmpzJ1xuaW1wb3J0IHsgaXNBZ2VudFN3YXJtc0VuYWJsZWQgfSBmcm9tICcuL3V0aWxzL2FnZW50U3dhcm1zRW5hYmxlZC5qcydcbmltcG9ydCB7IGNoZWNrQW5kUmVzdG9yZVRlcm1pbmFsQmFja3VwIH0gZnJvbSAnLi91dGlscy9hcHBsZVRlcm1pbmFsQmFja3VwLmpzJ1xuaW1wb3J0IHsgcHJlZmV0Y2hBcGlLZXlGcm9tQXBpS2V5SGVscGVySWZTYWZlIH0gZnJvbSAnLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzIH0gZnJvbSAnLi91dGlscy9jbGF1ZGVtZC5qcydcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0Q29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi91dGlscy9lbnYuanMnXG5pbXBvcnQgeyBlbnZEeW5hbWljIH0gZnJvbSAnLi91dGlscy9lbnZEeW5hbWljLmpzJ1xuaW1wb3J0IHsgaXNCYXJlTW9kZSwgaXNFbnZUcnV0aHkgfSBmcm9tICcuL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBmaW5kQ2Fub25pY2FsR2l0Um9vdCwgZmluZEdpdFJvb3QsIGdldElzR2l0IH0gZnJvbSAnLi91dGlscy9naXQuanMnXG5pbXBvcnQgeyBpbml0aWFsaXplRmlsZUNoYW5nZWRXYXRjaGVyIH0gZnJvbSAnLi91dGlscy9ob29rcy9maWxlQ2hhbmdlZFdhdGNoZXIuanMnXG5pbXBvcnQge1xuICBjYXB0dXJlSG9va3NDb25maWdTbmFwc2hvdCxcbiAgdXBkYXRlSG9va3NDb25maWdTbmFwc2hvdCxcbn0gZnJvbSAnLi91dGlscy9ob29rcy9ob29rc0NvbmZpZ1NuYXBzaG90LmpzJ1xuaW1wb3J0IHsgaGFzV29ya3RyZWVDcmVhdGVIb29rIH0gZnJvbSAnLi91dGlscy9ob29rcy5qcydcbmltcG9ydCB7IGNoZWNrQW5kUmVzdG9yZUlUZXJtMkJhY2t1cCB9IGZyb20gJy4vdXRpbHMvaVRlcm1CYWNrdXAuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UmVjZW50QWN0aXZpdHkgfSBmcm9tICcuL3V0aWxzL2xvZ29WMlV0aWxzLmpzJ1xuaW1wb3J0IHsgbG9ja0N1cnJlbnRWZXJzaW9uIH0gZnJvbSAnLi91dGlscy9uYXRpdmVJbnN0YWxsZXIvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uTW9kZS5qcydcbmltcG9ydCB7IGdldFBsYW5TbHVnIH0gZnJvbSAnLi91dGlscy9wbGFucy5qcydcbmltcG9ydCB7IHNhdmVXb3JrdHJlZVN0YXRlIH0gZnJvbSAnLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IHByb2ZpbGVDaGVja3BvaW50IH0gZnJvbSAnLi91dGlscy9zdGFydHVwUHJvZmlsZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVUbXV4U2Vzc2lvbkZvcldvcmt0cmVlLFxuICBjcmVhdGVXb3JrdHJlZUZvclNlc3Npb24sXG4gIGdlbmVyYXRlVG11eFNlc3Npb25OYW1lLFxuICB3b3JrdHJlZUJyYW5jaE5hbWUsXG59IGZyb20gJy4vdXRpbHMvd29ya3RyZWUuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cChcbiAgY3dkOiBzdHJpbmcsXG4gIHBlcm1pc3Npb25Nb2RlOiBQZXJtaXNzaW9uTW9kZSxcbiAgYWxsb3dEYW5nZXJvdXNseVNraXBQZXJtaXNzaW9uczogYm9vbGVhbixcbiAgd29ya3RyZWVFbmFibGVkOiBib29sZWFuLFxuICB3b3JrdHJlZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdG11eEVuYWJsZWQ6IGJvb2xlYW4sXG4gIGN1c3RvbVNlc3Npb25JZD86IHN0cmluZyB8IG51bGwsXG4gIHdvcmt0cmVlUFJOdW1iZXI/OiBudW1iZXIsXG4gIG1lc3NhZ2luZ1NvY2tldFBhdGg/OiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9zdGFydGVkJylcblxuICAvLyBDaGVjayBmb3IgTm9kZS5qcyB2ZXJzaW9uIDwgMThcbiAgY29uc3Qgbm9kZVZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb24ubWF0Y2goL152KFxcZCspXFwuLyk/LlsxXVxuICBpZiAoIW5vZGVWZXJzaW9uIHx8IHBhcnNlSW50KG5vZGVWZXJzaW9uKSA8IDE4KSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBjaGFsay5ib2xkLnJlZChcbiAgICAgICAgJ0Vycm9yOiBCbGF1ZGUgcmVxdWlyZXMgTm9kZS5qcyB2ZXJzaW9uIDE4IG9yIGhpZ2hlci4nLFxuICAgICAgKSxcbiAgICApXG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICAvLyBTZXQgY3VzdG9tIHNlc3Npb24gSUQgaWYgcHJvdmlkZWRcbiAgaWYgKGN1c3RvbVNlc3Npb25JZCkge1xuICAgIHN3aXRjaFNlc3Npb24oYXNTZXNzaW9uSWQoY3VzdG9tU2Vzc2lvbklkKSlcbiAgfVxuXG4gIC8vIC0tYmFyZSAvIFNJTVBMRTogc2tpcCBVRFMgbWVzc2FnaW5nIHNlcnZlciBhbmQgdGVhbW1hdGUgc25hcHNob3QuXG4gIC8vIFNjcmlwdGVkIGNhbGxzIGRvbid0IHJlY2VpdmUgaW5qZWN0ZWQgbWVzc2FnZXMgYW5kIGRvbid0IHVzZSBzd2FybSB0ZWFtbWF0ZXMuXG4gIC8vIEV4cGxpY2l0IC0tbWVzc2FnaW5nLXNvY2tldC1wYXRoIGlzIHRoZSBlc2NhcGUgaGF0Y2ggKHBlciAjMjMyMjIgZ2F0ZSBwYXR0ZXJuKS5cbiAgaWYgKCFpc0JhcmVNb2RlKCkgfHwgbWVzc2FnaW5nU29ja2V0UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gU3RhcnQgVURTIG1lc3NhZ2luZyBzZXJ2ZXIgKE1hYy9MaW51eCBvbmx5KS5cbiAgICAvLyBFbmFibGVkIGJ5IGRlZmF1bHQgZm9yIGFudHMgXHUyMDE0IGNyZWF0ZXMgYSBzb2NrZXQgaW4gdG1wZGlyIGlmIG5vXG4gICAgLy8gLS1tZXNzYWdpbmctc29ja2V0LXBhdGggaXMgcGFzc2VkLiBBd2FpdGVkIHNvIHRoZSBzZXJ2ZXIgaXMgYm91bmRcbiAgICAvLyBhbmQgJENMQVVERV9DT0RFX01FU1NBR0lOR19TT0NLRVQgaXMgZXhwb3J0ZWQgYmVmb3JlIGFueSBob29rXG4gICAgLy8gKFNlc3Npb25TdGFydCBpbiBwYXJ0aWN1bGFyKSBjYW4gc3Bhd24gYW5kIHNuYXBzaG90IHByb2Nlc3MuZW52LlxuICAgIGlmIChmZWF0dXJlKCdVRFNfSU5CT1gnKSkge1xuICAgICAgY29uc3QgbSA9IGF3YWl0IGltcG9ydCgnLi91dGlscy91ZHNNZXNzYWdpbmcuanMnKVxuICAgICAgYXdhaXQgbS5zdGFydFVkc01lc3NhZ2luZyhcbiAgICAgICAgbWVzc2FnaW5nU29ja2V0UGF0aCA/PyBtLmdldERlZmF1bHRVZHNTb2NrZXRQYXRoKCksXG4gICAgICAgIHsgaXNFeHBsaWNpdDogbWVzc2FnaW5nU29ja2V0UGF0aCAhPT0gdW5kZWZpbmVkIH0sXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLy8gVGVhbW1hdGUgc25hcHNob3QgXHUyMDE0IFNJTVBMRS1vbmx5IGdhdGUgKG5vIGVzY2FwZSBoYXRjaCwgc3dhcm0gbm90IHVzZWQgaW4gYmFyZSlcbiAgaWYgKCFpc0JhcmVNb2RlKCkgJiYgaXNBZ2VudFN3YXJtc0VuYWJsZWQoKSkge1xuICAgIGNvbnN0IHsgY2FwdHVyZVRlYW1tYXRlTW9kZVNuYXBzaG90IH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAnLi91dGlscy9zd2FybS9iYWNrZW5kcy90ZWFtbWF0ZU1vZGVTbmFwc2hvdC5qcydcbiAgICApXG4gICAgY2FwdHVyZVRlYW1tYXRlTW9kZVNuYXBzaG90KClcbiAgfVxuXG4gIC8vIFRlcm1pbmFsIGJhY2t1cCByZXN0b3JhdGlvbiBcdTIwMTQgaW50ZXJhY3RpdmUgb25seS4gUHJpbnQgbW9kZSBkb2Vzbid0XG4gIC8vIGludGVyYWN0IHdpdGggdGVybWluYWwgc2V0dGluZ3M7IHRoZSBuZXh0IGludGVyYWN0aXZlIHNlc3Npb24gd2lsbFxuICAvLyBkZXRlY3QgYW5kIHJlc3RvcmUgYW55IGludGVycnVwdGVkIHNldHVwLlxuICBpZiAoIWdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uKCkpIHtcbiAgICAvLyBpVGVybTIgYmFja3VwIGNoZWNrIG9ubHkgd2hlbiBzd2FybXMgZW5hYmxlZFxuICAgIGlmIChpc0FnZW50U3dhcm1zRW5hYmxlZCgpKSB7XG4gICAgICBjb25zdCByZXN0b3JlZEl0ZXJtMkJhY2t1cCA9IGF3YWl0IGNoZWNrQW5kUmVzdG9yZUlUZXJtMkJhY2t1cCgpXG4gICAgICBpZiAocmVzdG9yZWRJdGVybTJCYWNrdXAuc3RhdHVzID09PSAncmVzdG9yZWQnKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgY2hhbGsueWVsbG93KFxuICAgICAgICAgICAgJ0RldGVjdGVkIGFuIGludGVycnVwdGVkIGlUZXJtMiBzZXR1cC4gWW91ciBvcmlnaW5hbCBzZXR0aW5ncyBoYXZlIGJlZW4gcmVzdG9yZWQuIFlvdSBtYXkgbmVlZCB0byByZXN0YXJ0IGlUZXJtMiBmb3IgdGhlIGNoYW5nZXMgdG8gdGFrZSBlZmZlY3QuJyxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHJlc3RvcmVkSXRlcm0yQmFja3VwLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gcmVzdG9yZSBpVGVybTIgc2V0dGluZ3MuIFBsZWFzZSBtYW51YWxseSByZXN0b3JlIHlvdXIgb3JpZ2luYWwgc2V0dGluZ3Mgd2l0aDogZGVmYXVsdHMgaW1wb3J0IGNvbS5nb29nbGVjb2RlLml0ZXJtMiAke3Jlc3RvcmVkSXRlcm0yQmFja3VwLmJhY2t1cFBhdGh9LmAsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGFuZCByZXN0b3JlIFRlcm1pbmFsLmFwcCBiYWNrdXAgaWYgc2V0dXAgd2FzIGludGVycnVwdGVkXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3RvcmVkVGVybWluYWxCYWNrdXAgPSBhd2FpdCBjaGVja0FuZFJlc3RvcmVUZXJtaW5hbEJhY2t1cCgpXG4gICAgICBpZiAocmVzdG9yZWRUZXJtaW5hbEJhY2t1cC5zdGF0dXMgPT09ICdyZXN0b3JlZCcpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBjaGFsay55ZWxsb3coXG4gICAgICAgICAgICAnRGV0ZWN0ZWQgYW4gaW50ZXJydXB0ZWQgVGVybWluYWwuYXBwIHNldHVwLiBZb3VyIG9yaWdpbmFsIHNldHRpbmdzIGhhdmUgYmVlbiByZXN0b3JlZC4gWW91IG1heSBuZWVkIHRvIHJlc3RhcnQgVGVybWluYWwuYXBwIGZvciB0aGUgY2hhbmdlcyB0byB0YWtlIGVmZmVjdC4nLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAocmVzdG9yZWRUZXJtaW5hbEJhY2t1cC5zdGF0dXMgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBjaGFsay5yZWQoXG4gICAgICAgICAgICBgRmFpbGVkIHRvIHJlc3RvcmUgVGVybWluYWwuYXBwIHNldHRpbmdzLiBQbGVhc2UgbWFudWFsbHkgcmVzdG9yZSB5b3VyIG9yaWdpbmFsIHNldHRpbmdzIHdpdGg6IGRlZmF1bHRzIGltcG9ydCBjb20uYXBwbGUuVGVybWluYWwgJHtyZXN0b3JlZFRlcm1pbmFsQmFja3VwLmJhY2t1cFBhdGh9LmAsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBMb2cgYnV0IGRvbid0IGNyYXNoIGlmIFRlcm1pbmFsLmFwcCBiYWNrdXAgcmVzdG9yYXRpb24gZmFpbHNcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIElNUE9SVEFOVDogc2V0Q3dkKCkgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGFueSBvdGhlciBjb2RlIHRoYXQgZGVwZW5kcyBvbiB0aGUgY3dkXG4gIHNldEN3ZChjd2QpXG5cbiAgLy8gQ2FwdHVyZSBob29rcyBjb25maWd1cmF0aW9uIHNuYXBzaG90IHRvIGF2b2lkIGhpZGRlbiBob29rIG1vZGlmaWNhdGlvbnMuXG4gIC8vIElNUE9SVEFOVDogTXVzdCBiZSBjYWxsZWQgQUZURVIgc2V0Q3dkKCkgc28gaG9va3MgYXJlIGxvYWRlZCBmcm9tIHRoZSBjb3JyZWN0IGRpcmVjdG9yeVxuICBjb25zdCBob29rc1N0YXJ0ID0gRGF0ZS5ub3coKVxuICBjYXB0dXJlSG9va3NDb25maWdTbmFwc2hvdCgpXG4gIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dXBfaG9va3NfY2FwdHVyZWQnLCB7XG4gICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBob29rc1N0YXJ0LFxuICB9KVxuXG4gIC8vIEluaXRpYWxpemUgRmlsZUNoYW5nZWQgaG9vayB3YXRjaGVyIFx1MjAxNCBzeW5jLCByZWFkcyBob29rIGNvbmZpZyBzbmFwc2hvdFxuICBpbml0aWFsaXplRmlsZUNoYW5nZWRXYXRjaGVyKGN3ZClcblxuICAvLyBIYW5kbGUgd29ya3RyZWUgY3JlYXRpb24gaWYgcmVxdWVzdGVkXG4gIC8vIElNUE9SVEFOVDogdGhpcyBtdXN0IGJlIGNhbGxlZCBiZWZpb3JlIGdldENvbW1hbmRzKCksIG90aGVyd2lzZSAvZWplY3Qgd29uJ3QgYmUgYXZhaWxhYmxlLlxuICBpZiAod29ya3RyZWVFbmFibGVkKSB7XG4gICAgLy8gTWlycm9ycyBicmlkZ2VNYWluLnRzOiBob29rLWNvbmZpZ3VyZWQgc2Vzc2lvbnMgY2FuIHByb2NlZWQgd2l0aG91dCBnaXRcbiAgICAvLyBzbyBjcmVhdGVXb3JrdHJlZUZvclNlc3Npb24oKSBjYW4gZGVsZWdhdGUgdG8gdGhlIGhvb2sgKG5vbi1naXQgVkNTKS5cbiAgICBjb25zdCBoYXNIb29rID0gaGFzV29ya3RyZWVDcmVhdGVIb29rKClcbiAgICBjb25zdCBpbkdpdCA9IGF3YWl0IGdldElzR2l0KClcbiAgICBpZiAoIWhhc0hvb2sgJiYgIWluR2l0KSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgY2hhbGsucmVkKFxuICAgICAgICAgIGBFcnJvcjogQ2FuIG9ubHkgdXNlIC0td29ya3RyZWUgaW4gYSBnaXQgcmVwb3NpdG9yeSwgYnV0ICR7Y2hhbGsuYm9sZChjd2QpfSBpcyBub3QgYSBnaXQgcmVwb3NpdG9yeS4gYCArXG4gICAgICAgICAgICBgQ29uZmlndXJlIGEgV29ya3RyZWVDcmVhdGUgaG9vayBpbiBzZXR0aW5ncy5qc29uIHRvIHVzZSAtLXdvcmt0cmVlIHdpdGggb3RoZXIgVkNTIHN5c3RlbXMuXFxuYCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cblxuICAgIGNvbnN0IHNsdWcgPSB3b3JrdHJlZVBSTnVtYmVyXG4gICAgICA/IGBwci0ke3dvcmt0cmVlUFJOdW1iZXJ9YFxuICAgICAgOiAod29ya3RyZWVOYW1lID8/IGdldFBsYW5TbHVnKCkpXG5cbiAgICAvLyBHaXQgcHJlYW1ibGUgcnVucyB3aGVuZXZlciB3ZSdyZSBpbiBhIGdpdCByZXBvIFx1MjAxNCBldmVuIGlmIGEgaG9vayBpc1xuICAgIC8vIGNvbmZpZ3VyZWQgXHUyMDE0IHNvIC0tdG11eCBrZWVwcyB3b3JraW5nIGZvciBnaXQgdXNlcnMgd2hvIGFsc28gaGF2ZSBhXG4gICAgLy8gV29ya3RyZWVDcmVhdGUgaG9vay4gT25seSBob29rLW9ubHkgKG5vbi1naXQpIG1vZGUgc2tpcHMgaXQuXG4gICAgbGV0IHRtdXhTZXNzaW9uTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgaWYgKGluR2l0KSB7XG4gICAgICAvLyBSZXNvbHZlIHRvIG1haW4gcmVwbyByb290IChoYW5kbGVzIGJlaW5nIGludm9rZWQgZnJvbSB3aXRoaW4gYSB3b3JrdHJlZSkuXG4gICAgICAvLyBmaW5kQ2Fub25pY2FsR2l0Um9vdCBpcyBzeW5jL2ZpbGVzeXN0ZW0tb25seS9tZW1vaXplZDsgdGhlIHVuZGVybHlpbmdcbiAgICAgIC8vIGZpbmRHaXRSb290IGNhY2hlIHdhcyBhbHJlYWR5IHdhcm1lZCBieSBnZXRJc0dpdCgpIGFib3ZlLCBzbyB0aGlzIGlzIH5mcmVlLlxuICAgICAgY29uc3QgbWFpblJlcG9Sb290ID0gZmluZENhbm9uaWNhbEdpdFJvb3QoZ2V0Q3dkKCkpXG4gICAgICBpZiAoIW1haW5SZXBvUm9vdCkge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgICBjaGFsay5yZWQoXG4gICAgICAgICAgICBgRXJyb3I6IENvdWxkIG5vdCBkZXRlcm1pbmUgdGhlIG1haW4gZ2l0IHJlcG9zaXRvcnkgcm9vdC5cXG5gLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGluc2lkZSBhIHdvcmt0cmVlLCBzd2l0Y2ggdG8gdGhlIG1haW4gcmVwbyBmb3Igd29ya3RyZWUgY3JlYXRpb25cbiAgICAgIGlmIChtYWluUmVwb1Jvb3QgIT09IChmaW5kR2l0Um9vdChnZXRDd2QoKSkgPz8gZ2V0Q3dkKCkpKSB7XG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnd29ya3RyZWVfcmVzb2x2ZWRfdG9fbWFpbl9yZXBvJylcbiAgICAgICAgcHJvY2Vzcy5jaGRpcihtYWluUmVwb1Jvb3QpXG4gICAgICAgIHNldEN3ZChtYWluUmVwb1Jvb3QpXG4gICAgICB9XG5cbiAgICAgIHRtdXhTZXNzaW9uTmFtZSA9IHRtdXhFbmFibGVkXG4gICAgICAgID8gZ2VuZXJhdGVUbXV4U2Vzc2lvbk5hbWUobWFpblJlcG9Sb290LCB3b3JrdHJlZUJyYW5jaE5hbWUoc2x1ZykpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vbi1naXQgaG9vayBtb2RlOiBubyBjYW5vbmljYWwgcm9vdCB0byByZXNvbHZlLCBzbyBuYW1lIHRoZSB0bXV4XG4gICAgICAvLyBzZXNzaW9uIGZyb20gY3dkIFx1MjAxNCBnZW5lcmF0ZVRtdXhTZXNzaW9uTmFtZSBvbmx5IGJhc2VuYW1lcyB0aGUgcGF0aC5cbiAgICAgIHRtdXhTZXNzaW9uTmFtZSA9IHRtdXhFbmFibGVkXG4gICAgICAgID8gZ2VuZXJhdGVUbXV4U2Vzc2lvbk5hbWUoZ2V0Q3dkKCksIHdvcmt0cmVlQnJhbmNoTmFtZShzbHVnKSlcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBsZXQgd29ya3RyZWVTZXNzaW9uOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVdvcmt0cmVlRm9yU2Vzc2lvbj4+XG4gICAgdHJ5IHtcbiAgICAgIHdvcmt0cmVlU2Vzc2lvbiA9IGF3YWl0IGNyZWF0ZVdvcmt0cmVlRm9yU2Vzc2lvbihcbiAgICAgICAgZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgIHNsdWcsXG4gICAgICAgIHRtdXhTZXNzaW9uTmFtZSxcbiAgICAgICAgd29ya3RyZWVQUk51bWJlciA/IHsgcHJOdW1iZXI6IHdvcmt0cmVlUFJOdW1iZXIgfSA6IHVuZGVmaW5lZCxcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgIGNoYWxrLnJlZChgRXJyb3IgY3JlYXRpbmcgd29ya3RyZWU6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1cXG5gKSxcbiAgICAgIClcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV93b3JrdHJlZV9jcmVhdGVkJywgeyB0bXV4X2VuYWJsZWQ6IHRtdXhFbmFibGVkIH0pXG5cbiAgICAvLyBDcmVhdGUgdG11eCBzZXNzaW9uIGZvciB0aGUgd29ya3RyZWUgaWYgZW5hYmxlZFxuICAgIGlmICh0bXV4RW5hYmxlZCAmJiB0bXV4U2Vzc2lvbk5hbWUpIHtcbiAgICAgIGNvbnN0IHRtdXhSZXN1bHQgPSBhd2FpdCBjcmVhdGVUbXV4U2Vzc2lvbkZvcldvcmt0cmVlKFxuICAgICAgICB0bXV4U2Vzc2lvbk5hbWUsXG4gICAgICAgIHdvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZVBhdGgsXG4gICAgICApXG4gICAgICBpZiAodG11eFJlc3VsdC5jcmVhdGVkKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgY2hhbGsuZ3JlZW4oXG4gICAgICAgICAgICBgQ3JlYXRlZCB0bXV4IHNlc3Npb246ICR7Y2hhbGsuYm9sZCh0bXV4U2Vzc2lvbk5hbWUpfVxcblRvIGF0dGFjaDogJHtjaGFsay5ib2xkKGB0bXV4IGF0dGFjaCAtdCAke3RtdXhTZXNzaW9uTmFtZX1gKX1gLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBjaGFsay55ZWxsb3coXG4gICAgICAgICAgICBgV2FybmluZzogRmFpbGVkIHRvIGNyZWF0ZSB0bXV4IHNlc3Npb246ICR7dG11eFJlc3VsdC5lcnJvcn1gLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzLmNoZGlyKHdvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZVBhdGgpXG4gICAgc2V0Q3dkKHdvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZVBhdGgpXG4gICAgc2V0T3JpZ2luYWxDd2QoZ2V0Q3dkKCkpXG4gICAgLy8gLS13b3JrdHJlZSBtZWFucyB0aGUgd29ya3RyZWUgSVMgdGhlIHNlc3Npb24ncyBwcm9qZWN0LCBzbyBza2lsbHMvaG9va3MvXG4gICAgLy8gY3Jvbi9ldGMuIHNob3VsZCByZXNvbHZlIGhlcmUuIChFbnRlcldvcmt0cmVlVG9vbCBtaWQtc2Vzc2lvbiBkb2VzIE5PVFxuICAgIC8vIHRvdWNoIHByb2plY3RSb290IFx1MjAxNCB0aGF0J3MgYSB0aHJvd2F3YXkgd29ya3RyZWUsIHByb2plY3Qgc3RheXMgc3RhYmxlLilcbiAgICBzZXRQcm9qZWN0Um9vdChnZXRDd2QoKSlcbiAgICBzYXZlV29ya3RyZWVTdGF0ZSh3b3JrdHJlZVNlc3Npb24pXG4gICAgLy8gQ2xlYXIgbWVtb3J5IGZpbGVzIGNhY2hlIHNpbmNlIG9yaWdpbmFsQ3dkIGhhcyBjaGFuZ2VkXG4gICAgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzKClcbiAgICAvLyBTZXR0aW5ncyBjYWNoZSB3YXMgcG9wdWxhdGVkIGluIGluaXQoKSAodmlhIGFwcGx5U2FmZUNvbmZpZ0Vudmlyb25tZW50VmFyaWFibGVzKVxuICAgIC8vIGFuZCBhZ2FpbiBhdCBjYXB0dXJlSG9va3NDb25maWdTbmFwc2hvdCgpIGFib3ZlLCBib3RoIGZyb20gdGhlIG9yaWdpbmFsIGRpcidzXG4gICAgLy8gLmNsYXVkZS9zZXR0aW5ncy5qc29uLiBSZS1yZWFkIGZyb20gdGhlIHdvcmt0cmVlIGFuZCByZS1jYXB0dXJlIGhvb2tzLlxuICAgIHVwZGF0ZUhvb2tzQ29uZmlnU25hcHNob3QoKVxuICB9XG5cbiAgLy8gQmFja2dyb3VuZCBqb2JzIC0gb25seSBjcml0aWNhbCByZWdpc3RyYXRpb25zIHRoYXQgbXVzdCBoYXBwZW4gYmVmb3JlIGZpcnN0IHF1ZXJ5XG4gIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dXBfYmFja2dyb3VuZF9qb2JzX3N0YXJ0aW5nJylcbiAgLy8gQnVuZGxlZCBza2lsbHMvcGx1Z2lucyBhcmUgcmVnaXN0ZXJlZCBpbiBtYWluLnRzeCBiZWZvcmUgdGhlIHBhcmFsbGVsXG4gIC8vIGdldENvbW1hbmRzKCkga2ljayBcdTIwMTQgc2VlIGNvbW1lbnQgdGhlcmUuIE1vdmVkIG91dCBvZiBzZXR1cCgpIGJlY2F1c2VcbiAgLy8gdGhlIGF3YWl0IHBvaW50cyBhYm92ZSAoc3RhcnRVZHNNZXNzYWdpbmcsIH4yMG1zKSBtZWFudCBnZXRDb21tYW5kcygpXG4gIC8vIHJhY2VkIGFoZWFkIGFuZCBtZW1vaXplZCBhbiBlbXB0eSBidW5kbGVkU2tpbGxzIGxpc3QuXG4gIGlmICghaXNCYXJlTW9kZSgpKSB7XG4gICAgaW5pdFNlc3Npb25NZW1vcnkoKSAvLyBTeW5jaHJvbm91cyAtIHJlZ2lzdGVycyBob29rLCBnYXRlIGNoZWNrIGhhcHBlbnMgbGF6aWx5XG4gICAgaWYgKGZlYXR1cmUoJ0NPTlRFWFRfQ09MTEFQU0UnKSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgOyhcbiAgICAgICAgcmVxdWlyZSgnLi9zZXJ2aWNlcy9jb250ZXh0Q29sbGFwc2UvaW5kZXguanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpXG4gICAgICApLmluaXRDb250ZXh0Q29sbGFwc2UoKVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgfVxuICB9XG4gIHZvaWQgbG9ja0N1cnJlbnRWZXJzaW9uKCkgLy8gTG9jayBjdXJyZW50IHZlcnNpb24gdG8gcHJldmVudCBkZWxldGlvbiBieSBvdGhlciBwcm9jZXNzZXNcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9iYWNrZ3JvdW5kX2pvYnNfbGF1bmNoZWQnKVxuXG4gIHByb2ZpbGVDaGVja3BvaW50KCdzZXR1cF9iZWZvcmVfcHJlZmV0Y2gnKVxuICAvLyBQcmUtZmV0Y2ggcHJvbWlzZXMgLSBvbmx5IGl0ZW1zIG5lZWRlZCBiZWZvcmUgcmVuZGVyXG4gIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dXBfcHJlZmV0Y2hfc3RhcnRpbmcnKVxuICAvLyBXaGVuIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTEwgaXMgc2V0LCBza2lwIGFsbCBwbHVnaW4gcHJlZmV0Y2guXG4gIC8vIFRoZSBzeW5jIGluc3RhbGwgcGF0aCBpbiBwcmludC50cyBjYWxscyByZWZyZXNoUGx1Z2luU3RhdGUoKSBhZnRlclxuICAvLyBpbnN0YWxsaW5nLCB3aGljaCByZWxvYWRzIGNvbW1hbmRzLCBob29rcywgYW5kIGFnZW50cy4gUHJlZmV0Y2hpbmcgaGVyZVxuICAvLyByYWNlcyB3aXRoIHRoZSBpbnN0YWxsIChjb25jdXJyZW50IGNvcHlQbHVnaW5Ub1ZlcnNpb25lZENhY2hlIC8gY2FjaGVQbHVnaW5cbiAgLy8gb24gdGhlIHNhbWUgZGlyZWN0b3JpZXMpLCBhbmQgdGhlIGhvdC1yZWxvYWQgaGFuZGxlciBmaXJlcyBjbGVhclBsdWdpbkNhY2hlKClcbiAgLy8gbWlkLWluc3RhbGwgd2hlbiBwb2xpY3lTZXR0aW5ncyBhcnJpdmVzLlxuICBjb25zdCBza2lwUGx1Z2luUHJlZmV0Y2ggPVxuICAgIChnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbigpICYmXG4gICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMKSkgfHxcbiAgICAvLyAtLWJhcmU6IGxvYWRQbHVnaW5Ib29rcyBcdTIxOTIgbG9hZEFsbFBsdWdpbnMgaXMgZmlsZXN5c3RlbSB3b3JrIHRoYXQnc1xuICAgIC8vIHdhc3RlZCB3aGVuIGV4ZWN1dGVIb29rcyBlYXJseS1yZXR1cm5zIHVuZGVyIC0tYmFyZSBhbnl3YXkuXG4gICAgaXNCYXJlTW9kZSgpXG4gIGlmICghc2tpcFBsdWdpblByZWZldGNoKSB7XG4gICAgdm9pZCBnZXRDb21tYW5kcyhnZXRQcm9qZWN0Um9vdCgpKVxuICB9XG4gIHZvaWQgaW1wb3J0KCcuL3V0aWxzL3BsdWdpbnMvbG9hZFBsdWdpbkhvb2tzLmpzJykudGhlbihtID0+IHtcbiAgICBpZiAoIXNraXBQbHVnaW5QcmVmZXRjaCkge1xuICAgICAgdm9pZCBtLmxvYWRQbHVnaW5Ib29rcygpIC8vIFByZS1sb2FkIHBsdWdpbiBob29rcyAoY29uc3VtZWQgYnkgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzIGJlZm9yZSByZW5kZXIpXG4gICAgICBtLnNldHVwUGx1Z2luSG9va0hvdFJlbG9hZCgpIC8vIFNldCB1cCBob3QgcmVsb2FkIGZvciBwbHVnaW4gaG9va3Mgd2hlbiBzZXR0aW5ncyBjaGFuZ2VcbiAgICB9XG4gIH0pXG4gIC8vIC0tYmFyZTogc2tpcCBhdHRyaWJ1dGlvbiBob29rIGluc3RhbGwgKyByZXBvIGNsYXNzaWZpY2F0aW9uICtcbiAgLy8gc2Vzc2lvbi1maWxlLWFjY2VzcyBhbmFseXRpY3MgKyB0ZWFtIG1lbW9yeSB3YXRjaGVyLiBUaGVzZSBhcmUgYmFja2dyb3VuZFxuICAvLyBib29ra2VlcGluZyBmb3IgY29tbWl0IGF0dHJpYnV0aW9uICsgdXNhZ2UgbWV0cmljcyBcdTIwMTQgc2NyaXB0ZWQgY2FsbHMgZG9uJ3RcbiAgLy8gY29tbWl0IGNvZGUsIGFuZCB0aGUgNDltcyBhdHRyaWJ1dGlvbiBob29rIHN0YXQgY2hlY2sgKG1lYXN1cmVkKSBpcyBwdXJlXG4gIC8vIG92ZXJoZWFkLiBOT1QgYW4gZWFybHktcmV0dXJuOiB0aGUgLS1kYW5nZXJvdXNseS1za2lwLXBlcm1pc3Npb25zIHNhZmV0eVxuICAvLyBnYXRlLCB0ZW5ndV9zdGFydGVkIGJlYWNvbiwgYW5kIGFwaUtleUhlbHBlciBwcmVmZXRjaCBiZWxvdyBtdXN0IHN0aWxsIHJ1bi5cbiAgaWYgKCFpc0JhcmVNb2RlKCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgLy8gUHJpbWUgcmVwbyBjbGFzc2lmaWNhdGlvbiBjYWNoZSBmb3IgYXV0by11bmRlcmNvdmVyIG1vZGUuIERlZmF1bHQgaXNcbiAgICAgIC8vIHVuZGVyY292ZXIgT04gdW50aWwgcHJvdmVuIGludGVybmFsOyBpZiB0aGlzIHJlc29sdmVzIHRvIGludGVybmFsLCBjbGVhclxuICAgICAgLy8gdGhlIHByb21wdCBjYWNoZSBzbyB0aGUgbmV4dCB0dXJuIHBpY2tzIHVwIHRoZSBPRkYgc3RhdGUuXG4gICAgICB2b2lkIGltcG9ydCgnLi91dGlscy9jb21taXRBdHRyaWJ1dGlvbi5qcycpLnRoZW4oYXN5bmMgbSA9PiB7XG4gICAgICAgIGlmIChhd2FpdCBtLmlzSW50ZXJuYWxNb2RlbFJlcG8oKSkge1xuICAgICAgICAgIGNvbnN0IHsgY2xlYXJTeXN0ZW1Qcm9tcHRTZWN0aW9ucyB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgJy4vY29uc3RhbnRzL3N5c3RlbVByb21wdFNlY3Rpb25zLmpzJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjbGVhclN5c3RlbVByb21wdFNlY3Rpb25zKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpKSB7XG4gICAgICAvLyBEeW5hbWljIGltcG9ydCB0byBlbmFibGUgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIChtb2R1bGUgY29udGFpbnMgZXhjbHVkZWQgc3RyaW5ncykuXG4gICAgICAvLyBEZWZlciB0byBuZXh0IHRpY2sgc28gdGhlIGdpdCBzdWJwcm9jZXNzIHNwYXduIHJ1bnMgYWZ0ZXIgZmlyc3QgcmVuZGVyXG4gICAgICAvLyByYXRoZXIgdGhhbiBkdXJpbmcgdGhlIHNldHVwKCkgbWljcm90YXNrIHdpbmRvdy5cbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHZvaWQgaW1wb3J0KCcuL3V0aWxzL2F0dHJpYnV0aW9uSG9va3MuanMnKS50aGVuKFxuICAgICAgICAgICh7IHJlZ2lzdGVyQXR0cmlidXRpb25Ib29rcyB9KSA9PiB7XG4gICAgICAgICAgICByZWdpc3RlckF0dHJpYnV0aW9uSG9va3MoKSAvLyBSZWdpc3RlciBhdHRyaWJ1dGlvbiB0cmFja2luZyBob29rcyAoYW50LW9ubHkgZmVhdHVyZSlcbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgICB2b2lkIGltcG9ydCgnLi91dGlscy9zZXNzaW9uRmlsZUFjY2Vzc0hvb2tzLmpzJykudGhlbihtID0+XG4gICAgICBtLnJlZ2lzdGVyU2Vzc2lvbkZpbGVBY2Nlc3NIb29rcygpLFxuICAgICkgLy8gUmVnaXN0ZXIgc2Vzc2lvbiBmaWxlIGFjY2VzcyBhbmFseXRpY3MgaG9va3NcbiAgICBpZiAoZmVhdHVyZSgnVEVBTU1FTScpKSB7XG4gICAgICB2b2lkIGltcG9ydCgnLi9zZXJ2aWNlcy90ZWFtTWVtb3J5U3luYy93YXRjaGVyLmpzJykudGhlbihtID0+XG4gICAgICAgIG0uc3RhcnRUZWFtTWVtb3J5V2F0Y2hlcigpLFxuICAgICAgKSAvLyBTdGFydCB0ZWFtIG1lbW9yeSBzeW5jIHdhdGNoZXJcbiAgICB9XG4gIH1cbiAgaW5pdFNpbmtzKCkgLy8gQXR0YWNoIGVycm9yIGxvZyArIGFuYWx5dGljcyBzaW5rcyBhbmQgZHJhaW4gcXVldWVkIGV2ZW50c1xuXG4gIC8vIFNlc3Npb24tc3VjY2Vzcy1yYXRlIGRlbm9taW5hdG9yLiBFbWl0IGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBhbmFseXRpY3NcbiAgLy8gc2luayBpcyBhdHRhY2hlZCBcdTIwMTQgYmVmb3JlIGFueSBwYXJzaW5nLCBmZXRjaGluZywgb3IgSS9PIHRoYXQgY291bGQgdGhyb3cuXG4gIC8vIGluYy0zNjk0IChQMCBDSEFOR0VMT0cgY3Jhc2gpIHRocmV3IGF0IGNoZWNrRm9yUmVsZWFzZU5vdGVzIGJlbG93OyBldmVyeVxuICAvLyBldmVudCBhZnRlciB0aGlzIHBvaW50IHdhcyBkZWFkLiBUaGlzIGJlYWNvbiBpcyB0aGUgZWFybGllc3QgcmVsaWFibGVcbiAgLy8gXCJwcm9jZXNzIHN0YXJ0ZWRcIiBzaWduYWwgZm9yIHJlbGVhc2UgaGVhbHRoIG1vbml0b3JpbmcuXG4gIGxvZ0V2ZW50KCd0ZW5ndV9zdGFydGVkJywge30pXG5cbiAgdm9pZCBwcmVmZXRjaEFwaUtleUZyb21BcGlLZXlIZWxwZXJJZlNhZmUoZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24oKSkgLy8gUHJlZmV0Y2ggc2FmZWx5IC0gb25seSBleGVjdXRlcyBpZiB0cnVzdCBhbHJlYWR5IGNvbmZpcm1lZFxuICBwcm9maWxlQ2hlY2twb2ludCgnc2V0dXBfYWZ0ZXJfcHJlZmV0Y2gnKVxuXG4gIC8vIFByZS1mZXRjaCBkYXRhIGZvciBMb2dvIHYyIC0gYXdhaXQgdG8gZW5zdXJlIGl0J3MgcmVhZHkgYmVmb3JlIGxvZ28gcmVuZGVycy5cbiAgLy8gLS1iYXJlIC8gU0lNUExFOiBza2lwIFx1MjAxNCByZWxlYXNlIG5vdGVzIGFyZSBpbnRlcmFjdGl2ZS1VSSBkaXNwbGF5IGRhdGEsXG4gIC8vIGFuZCBnZXRSZWNlbnRBY3Rpdml0eSgpIHJlYWRzIHVwIHRvIDEwIHNlc3Npb24gSlNPTkwgZmlsZXMuXG4gIGlmICghaXNCYXJlTW9kZSgpKSB7XG4gICAgY29uc3QgeyBoYXNSZWxlYXNlTm90ZXMgfSA9IGF3YWl0IGNoZWNrRm9yUmVsZWFzZU5vdGVzKFxuICAgICAgZ2V0R2xvYmFsQ29uZmlnKCkubGFzdFJlbGVhc2VOb3Rlc1NlZW4sXG4gICAgKVxuICAgIGlmIChoYXNSZWxlYXNlTm90ZXMpIHtcbiAgICAgIGF3YWl0IGdldFJlY2VudEFjdGl2aXR5KClcbiAgICB9XG4gIH1cblxuICAvLyBJZiBwZXJtaXNzaW9uIG1vZGUgaXMgc2V0IHRvIGJ5cGFzcywgdmVyaWZ5IHdlJ3JlIGluIGEgc2FmZSBlbnZpcm9ubWVudFxuICBpZiAoXG4gICAgcGVybWlzc2lvbk1vZGUgPT09ICdieXBhc3NQZXJtaXNzaW9ucycgfHxcbiAgICBhbGxvd0Rhbmdlcm91c2x5U2tpcFBlcm1pc3Npb25zXG4gICkge1xuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgYXMgcm9vdC9zdWRvIG9uIFVuaXgtbGlrZSBzeXN0ZW1zXG4gICAgLy8gQWxsb3cgcm9vdCBpZiBpbiBhIHNhbmRib3ggKGUuZy4sIFRQVSBkZXZzcGFjZXMgdGhhdCByZXF1aXJlIHJvb3QpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJyAmJlxuICAgICAgdHlwZW9mIHByb2Nlc3MuZ2V0dWlkID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBwcm9jZXNzLmdldHVpZCgpID09PSAwICYmXG4gICAgICBwcm9jZXNzLmVudi5JU19TQU5EQk9YICE9PSAnMScgJiZcbiAgICAgICFpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9CVUJCTEVXUkFQKVxuICAgICkge1xuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYC0tZGFuZ2Vyb3VzbHktc2tpcC1wZXJtaXNzaW9ucyBjYW5ub3QgYmUgdXNlZCB3aXRoIHJvb3Qvc3VkbyBwcml2aWxlZ2VzIGZvciBzZWN1cml0eSByZWFzb25zYCxcbiAgICAgIClcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiZcbiAgICAgIC8vIFNraXAgZm9yIERlc2t0b3AncyBsb2NhbCBhZ2VudCBtb2RlIFx1MjAxNCBzYW1lIHRydXN0IG1vZGVsIGFzIENDUi9CWU9DXG4gICAgICAvLyAodHJ1c3RlZCBBbnRocm9waWMtbWFuYWdlZCBsYXVuY2hlciBpbnRlbnRpb25hbGx5IHByZS1hcHByb3ZpbmcgZXZlcnl0aGluZykuXG4gICAgICAvLyBQcmVjZWRlbnQ6IHBlcm1pc3Npb25TZXR1cC50czo4NjEsIGFwcGx5U2V0dGluZ3NDaGFuZ2UudHM6NTUgKFBSICMxOTExNilcbiAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQgIT09ICdsb2NhbC1hZ2VudCcgJiZcbiAgICAgIC8vIFNhbWUgZm9yIENDRCAoQ2xhdWRlIENvZGUgaW4gRGVza3RvcCkgXHUyMDE0IGFwcHMjMjkxMjcgcGFzc2VzIHRoZSBmbGFnXG4gICAgICAvLyB1bmNvbmRpdGlvbmFsbHkgdG8gdW5sb2NrIG1pZC1zZXNzaW9uIGJ5cGFzcyBzd2l0Y2hpbmdcbiAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQgIT09ICdjbGF1ZGUtZGVza3RvcCdcbiAgICApIHtcbiAgICAgIC8vIE9ubHkgYXdhaXQgaWYgcGVybWlzc2lvbiBtb2RlIGlzIHNldCB0byBieXBhc3NcbiAgICAgIGNvbnN0IFtpc0RvY2tlciwgaGFzSW50ZXJuZXRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBlbnZEeW5hbWljLmdldElzRG9ja2VyKCksXG4gICAgICAgIGVudi5oYXNJbnRlcm5ldEFjY2VzcygpLFxuICAgICAgXSlcbiAgICAgIGNvbnN0IGlzQnViYmxld3JhcCA9IGVudkR5bmFtaWMuZ2V0SXNCdWJibGV3cmFwU2FuZGJveCgpXG4gICAgICBjb25zdCBpc1NhbmRib3ggPSBwcm9jZXNzLmVudi5JU19TQU5EQk9YID09PSAnMSdcbiAgICAgIGNvbnN0IGlzU2FuZGJveGVkID0gaXNEb2NrZXIgfHwgaXNCdWJibGV3cmFwIHx8IGlzU2FuZGJveFxuICAgICAgaWYgKCFpc1NhbmRib3hlZCB8fCBoYXNJbnRlcm5ldCkge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYC0tZGFuZ2Vyb3VzbHktc2tpcC1wZXJtaXNzaW9ucyBjYW4gb25seSBiZSB1c2VkIGluIERvY2tlci9zYW5kYm94IGNvbnRhaW5lcnMgd2l0aCBubyBpbnRlcm5ldCBhY2Nlc3MgYnV0IGdvdCBEb2NrZXI6ICR7aXNEb2NrZXJ9LCBCdWJibGV3cmFwOiAke2lzQnViYmxld3JhcH0sIElTX1NBTkRCT1g6ICR7aXNTYW5kYm94fSwgaGFzSW50ZXJuZXQ6ICR7aGFzSW50ZXJuZXR9YCxcbiAgICAgICAgKVxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gTG9nIHRlbmd1X2V4aXQgZXZlbnQgZnJvbSB0aGUgbGFzdCBzZXNzaW9uP1xuICBjb25zdCBwcm9qZWN0Q29uZmlnID0gZ2V0Q3VycmVudFByb2plY3RDb25maWcoKVxuICBpZiAoXG4gICAgcHJvamVjdENvbmZpZy5sYXN0Q29zdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgcHJvamVjdENvbmZpZy5sYXN0RHVyYXRpb24gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfZXhpdCcsIHtcbiAgICAgIGxhc3Rfc2Vzc2lvbl9jb3N0OiBwcm9qZWN0Q29uZmlnLmxhc3RDb3N0LFxuICAgICAgbGFzdF9zZXNzaW9uX2FwaV9kdXJhdGlvbjogcHJvamVjdENvbmZpZy5sYXN0QVBJRHVyYXRpb24sXG4gICAgICBsYXN0X3Nlc3Npb25fdG9vbF9kdXJhdGlvbjogcHJvamVjdENvbmZpZy5sYXN0VG9vbER1cmF0aW9uLFxuICAgICAgbGFzdF9zZXNzaW9uX2R1cmF0aW9uOiBwcm9qZWN0Q29uZmlnLmxhc3REdXJhdGlvbixcbiAgICAgIGxhc3Rfc2Vzc2lvbl9saW5lc19hZGRlZDogcHJvamVjdENvbmZpZy5sYXN0TGluZXNBZGRlZCxcbiAgICAgIGxhc3Rfc2Vzc2lvbl9saW5lc19yZW1vdmVkOiBwcm9qZWN0Q29uZmlnLmxhc3RMaW5lc1JlbW92ZWQsXG4gICAgICBsYXN0X3Nlc3Npb25fdG90YWxfaW5wdXRfdG9rZW5zOiBwcm9qZWN0Q29uZmlnLmxhc3RUb3RhbElucHV0VG9rZW5zLFxuICAgICAgbGFzdF9zZXNzaW9uX3RvdGFsX291dHB1dF90b2tlbnM6IHByb2plY3RDb25maWcubGFzdFRvdGFsT3V0cHV0VG9rZW5zLFxuICAgICAgbGFzdF9zZXNzaW9uX3RvdGFsX2NhY2hlX2NyZWF0aW9uX2lucHV0X3Rva2VuczpcbiAgICAgICAgcHJvamVjdENvbmZpZy5sYXN0VG90YWxDYWNoZUNyZWF0aW9uSW5wdXRUb2tlbnMsXG4gICAgICBsYXN0X3Nlc3Npb25fdG90YWxfY2FjaGVfcmVhZF9pbnB1dF90b2tlbnM6XG4gICAgICAgIHByb2plY3RDb25maWcubGFzdFRvdGFsQ2FjaGVSZWFkSW5wdXRUb2tlbnMsXG4gICAgICBsYXN0X3Nlc3Npb25fZnBzX2F2ZXJhZ2U6IHByb2plY3RDb25maWcubGFzdEZwc0F2ZXJhZ2UsXG4gICAgICBsYXN0X3Nlc3Npb25fZnBzX2xvd18xX3BjdDogcHJvamVjdENvbmZpZy5sYXN0RnBzTG93MVBjdCxcbiAgICAgIGxhc3Rfc2Vzc2lvbl9pZDpcbiAgICAgICAgcHJvamVjdENvbmZpZy5sYXN0U2Vzc2lvbklkIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAuLi5wcm9qZWN0Q29uZmlnLmxhc3RTZXNzaW9uTWV0cmljcyxcbiAgICB9KVxuICAgIC8vIE5vdGU6IFdlIGludGVudGlvbmFsbHkgZG9uJ3QgY2xlYXIgdGhlc2UgdmFsdWVzIGFmdGVyIGxvZ2dpbmcuXG4gICAgLy8gVGhleSdyZSBuZWVkZWQgZm9yIGNvc3QgcmVzdG9yYXRpb24gd2hlbiByZXN1bWluZyBzZXNzaW9ucy5cbiAgICAvLyBUaGUgdmFsdWVzIHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2hlbiB0aGUgbmV4dCBzZXNzaW9uIGV4aXRzLlxuICB9XG59XG4iLCAiLyoqXG4gKiBTZXNzaW9uIE1lbW9yeSBhdXRvbWF0aWNhbGx5IG1haW50YWlucyBhIG1hcmtkb3duIGZpbGUgd2l0aCBub3RlcyBhYm91dCB0aGUgY3VycmVudCBjb252ZXJzYXRpb24uXG4gKiBJdCBydW5zIHBlcmlvZGljYWxseSBpbiB0aGUgYmFja2dyb3VuZCB1c2luZyBhIGZvcmtlZCBzdWJhZ2VudCB0byBleHRyYWN0IGtleSBpbmZvcm1hdGlvblxuICogd2l0aG91dCBpbnRlcnJ1cHRpbmcgdGhlIG1haW4gY29udmVyc2F0aW9uIGZsb3cuXG4gKi9cblxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gtZXMvbWVtb2l6ZS5qcydcbmltcG9ydCB7IGdldElzUmVtb3RlTW9kZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldFN5c3RlbVByb21wdCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9tcHRzLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtQ29udGV4dCwgZ2V0VXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0LmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICcuLi8uLi9ob29rcy91c2VDYW5Vc2VUb29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgeyBGSUxFX0VESVRfVE9PTF9OQU1FIH0gZnJvbSAnLi4vLi4vdG9vbHMvRmlsZUVkaXRUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7XG4gIEZpbGVSZWFkVG9vbCxcbiAgdHlwZSBPdXRwdXQgYXMgRmlsZVJlYWRUb29sT3V0cHV0LFxufSBmcm9tICcuLi8uLi90b29scy9GaWxlUmVhZFRvb2wvRmlsZVJlYWRUb29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQge1xuICBjcmVhdGVDYWNoZVNhZmVQYXJhbXMsXG4gIGNyZWF0ZVN1YmFnZW50Q29udGV4dCxcbiAgcnVuRm9ya2VkQWdlbnQsXG59IGZyb20gJy4uLy4uL3V0aWxzL2ZvcmtlZEFnZW50LmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7XG4gIHR5cGUgUkVQTEhvb2tDb250ZXh0LFxuICByZWdpc3RlclBvc3RTYW1wbGluZ0hvb2ssXG59IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzL3Bvc3RTYW1wbGluZ0hvb2tzLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlck1lc3NhZ2UsXG4gIGhhc1Rvb2xDYWxsc0luTGFzdEFzc2lzdGFudFR1cm4sXG59IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2Vzc2lvbk1lbW9yeURpcixcbiAgZ2V0U2Vzc2lvbk1lbW9yeVBhdGgsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL2ZpbGVzeXN0ZW0uanMnXG5pbXBvcnQgeyBzZXF1ZW50aWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2VxdWVudGlhbC5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc3lzdGVtUHJvbXB0VHlwZS5qcydcbmltcG9ydCB7IGdldFRva2VuVXNhZ2UsIHRva2VuQ291bnRXaXRoRXN0aW1hdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Rva2Vucy5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgaXNBdXRvQ29tcGFjdEVuYWJsZWQgfSBmcm9tICcuLi9jb21wYWN0L2F1dG9Db21wYWN0LmpzJ1xuaW1wb3J0IHtcbiAgYnVpbGRTZXNzaW9uTWVtb3J5VXBkYXRlUHJvbXB0LFxuICBsb2FkU2Vzc2lvbk1lbW9yeVRlbXBsYXRlLFxufSBmcm9tICcuL3Byb21wdHMuanMnXG5pbXBvcnQge1xuICBERUZBVUxUX1NFU1NJT05fTUVNT1JZX0NPTkZJRyxcbiAgZ2V0U2Vzc2lvbk1lbW9yeUNvbmZpZyxcbiAgZ2V0VG9vbENhbGxzQmV0d2VlblVwZGF0ZXMsXG4gIGhhc01ldEluaXRpYWxpemF0aW9uVGhyZXNob2xkLFxuICBoYXNNZXRVcGRhdGVUaHJlc2hvbGQsXG4gIGlzU2Vzc2lvbk1lbW9yeUluaXRpYWxpemVkLFxuICBtYXJrRXh0cmFjdGlvbkNvbXBsZXRlZCxcbiAgbWFya0V4dHJhY3Rpb25TdGFydGVkLFxuICBtYXJrU2Vzc2lvbk1lbW9yeUluaXRpYWxpemVkLFxuICByZWNvcmRFeHRyYWN0aW9uVG9rZW5Db3VudCxcbiAgdHlwZSBTZXNzaW9uTWVtb3J5Q29uZmlnLFxuICBzZXRMYXN0U3VtbWFyaXplZE1lc3NhZ2VJZCxcbiAgc2V0U2Vzc2lvbk1lbW9yeUNvbmZpZyxcbn0gZnJvbSAnLi9zZXNzaW9uTWVtb3J5VXRpbHMuanMnXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZlYXR1cmUgR2F0ZSBhbmQgQ29uZmlnIChDYWNoZWQgLSBOb24tYmxvY2tpbmcpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUaGVzZSBmdW5jdGlvbnMgcmV0dXJuIGNhY2hlZCB2YWx1ZXMgZnJvbSBkaXNrIGltbWVkaWF0ZWx5IHdpdGhvdXQgYmxvY2tpbmdcbi8vIG9uIEdyb3d0aEJvb2sgaW5pdGlhbGl6YXRpb24uIFZhbHVlcyBtYXkgYmUgc3RhbGUgYnV0IGFyZSB1cGRhdGVkIGluIGJhY2tncm91bmQuXG5cbmltcG9ydCB7IGVycm9yTWVzc2FnZSwgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0RHluYW1pY0NvbmZpZ19DQUNIRURfTUFZX0JFX1NUQUxFLFxuICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSxcbn0gZnJvbSAnLi4vYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5cbi8qKlxuICogQ2hlY2sgaWYgc2Vzc2lvbiBtZW1vcnkgZmVhdHVyZSBpcyBlbmFibGVkLlxuICogVXNlcyBjYWNoZWQgZ2F0ZSB2YWx1ZSAtIHJldHVybnMgaW1tZWRpYXRlbHkgd2l0aG91dCBibG9ja2luZy5cbiAqL1xuZnVuY3Rpb24gaXNTZXNzaW9uTWVtb3J5R2F0ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnknLCBmYWxzZSlcbn1cblxuLyoqXG4gKiBHZXQgc2Vzc2lvbiBtZW1vcnkgY29uZmlnIGZyb20gY2FjaGUuXG4gKiBSZXR1cm5zIGltbWVkaWF0ZWx5IHdpdGhvdXQgYmxvY2tpbmcgLSB2YWx1ZSBtYXkgYmUgc3RhbGUuXG4gKi9cbmZ1bmN0aW9uIGdldFNlc3Npb25NZW1vcnlSZW1vdGVDb25maWcoKTogUGFydGlhbDxTZXNzaW9uTWVtb3J5Q29uZmlnPiB7XG4gIHJldHVybiBnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEU8UGFydGlhbDxTZXNzaW9uTWVtb3J5Q29uZmlnPj4oXG4gICAgJ3Rlbmd1X3NtX2NvbmZpZycsXG4gICAge30sXG4gIClcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9kdWxlIFN0YXRlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBsYXN0TWVtb3J5TWVzc2FnZVV1aWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4vKipcbiAqIFJlc2V0IHRoZSBsYXN0IG1lbW9yeSBtZXNzYWdlIFVVSUQgKGZvciB0ZXN0aW5nKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMYXN0TWVtb3J5TWVzc2FnZVV1aWQoKTogdm9pZCB7XG4gIGxhc3RNZW1vcnlNZXNzYWdlVXVpZCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBjb3VudFRvb2xDYWxsc1NpbmNlKFxuICBtZXNzYWdlczogTWVzc2FnZVtdLFxuICBzaW5jZVV1aWQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbik6IG51bWJlciB7XG4gIGxldCB0b29sQ2FsbENvdW50ID0gMFxuICBsZXQgZm91bmRTdGFydCA9IHNpbmNlVXVpZCA9PT0gbnVsbCB8fCBzaW5jZVV1aWQgPT09IHVuZGVmaW5lZFxuXG4gIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xuICAgIGlmICghZm91bmRTdGFydCkge1xuICAgICAgaWYgKG1lc3NhZ2UudXVpZCA9PT0gc2luY2VVdWlkKSB7XG4gICAgICAgIGZvdW5kU3RhcnQgPSB0cnVlXG4gICAgICB9XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIHRvb2xDYWxsQ291bnQgKz0gY291bnQoY29udGVudCwgYmxvY2sgPT4gYmxvY2sudHlwZSA9PT0gJ3Rvb2xfdXNlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9vbENhbGxDb3VudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRXh0cmFjdE1lbW9yeShtZXNzYWdlczogTWVzc2FnZVtdKTogYm9vbGVhbiB7XG4gIC8vIENoZWNrIGlmIHdlJ3ZlIG1ldCB0aGUgaW5pdGlhbGl6YXRpb24gdGhyZXNob2xkXG4gIC8vIFVzZXMgdG90YWwgY29udGV4dCB3aW5kb3cgdG9rZW5zIChzYW1lIGFzIGF1dG9jb21wYWN0KSBmb3IgY29uc2lzdGVudCBiZWhhdmlvclxuICBjb25zdCBjdXJyZW50VG9rZW5Db3VudCA9IHRva2VuQ291bnRXaXRoRXN0aW1hdGlvbihtZXNzYWdlcylcbiAgaWYgKCFpc1Nlc3Npb25NZW1vcnlJbml0aWFsaXplZCgpKSB7XG4gICAgaWYgKCFoYXNNZXRJbml0aWFsaXphdGlvblRocmVzaG9sZChjdXJyZW50VG9rZW5Db3VudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBtYXJrU2Vzc2lvbk1lbW9yeUluaXRpYWxpemVkKClcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlJ3ZlIG1ldCB0aGUgbWluaW11bSB0b2tlbnMgYmV0d2VlbiB1cGRhdGVzIHRocmVzaG9sZFxuICAvLyBVc2VzIGNvbnRleHQgd2luZG93IGdyb3d0aCBzaW5jZSBsYXN0IGV4dHJhY3Rpb24gKHNhbWUgbWV0cmljIGFzIGluaXQgdGhyZXNob2xkKVxuICBjb25zdCBoYXNNZXRUb2tlblRocmVzaG9sZCA9IGhhc01ldFVwZGF0ZVRocmVzaG9sZChjdXJyZW50VG9rZW5Db3VudClcblxuICAvLyBDaGVjayBpZiB3ZSd2ZSBtZXQgdGhlIHRvb2wgY2FsbHMgdGhyZXNob2xkXG4gIGNvbnN0IHRvb2xDYWxsc1NpbmNlTGFzdFVwZGF0ZSA9IGNvdW50VG9vbENhbGxzU2luY2UoXG4gICAgbWVzc2FnZXMsXG4gICAgbGFzdE1lbW9yeU1lc3NhZ2VVdWlkLFxuICApXG4gIGNvbnN0IGhhc01ldFRvb2xDYWxsVGhyZXNob2xkID1cbiAgICB0b29sQ2FsbHNTaW5jZUxhc3RVcGRhdGUgPj0gZ2V0VG9vbENhbGxzQmV0d2VlblVwZGF0ZXMoKVxuXG4gIC8vIENoZWNrIGlmIHRoZSBsYXN0IGFzc2lzdGFudCB0dXJuIGhhcyBubyB0b29sIGNhbGxzIChzYWZlIHRvIGV4dHJhY3QpXG4gIGNvbnN0IGhhc1Rvb2xDYWxsc0luTGFzdFR1cm4gPSBoYXNUb29sQ2FsbHNJbkxhc3RBc3Npc3RhbnRUdXJuKG1lc3NhZ2VzKVxuXG4gIC8vIFRyaWdnZXIgZXh0cmFjdGlvbiB3aGVuOlxuICAvLyAxLiBCb3RoIHRocmVzaG9sZHMgYXJlIG1ldCAodG9rZW5zIEFORCB0b29sIGNhbGxzKSwgT1JcbiAgLy8gMi4gTm8gdG9vbCBjYWxscyBpbiBsYXN0IHR1cm4gQU5EIHRva2VuIHRocmVzaG9sZCBpcyBtZXRcbiAgLy8gICAgKHRvIGVuc3VyZSB3ZSBleHRyYWN0IGF0IG5hdHVyYWwgY29udmVyc2F0aW9uIGJyZWFrcylcbiAgLy9cbiAgLy8gSU1QT1JUQU5UOiBUaGUgdG9rZW4gdGhyZXNob2xkIChtaW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZSkgaXMgQUxXQVlTIHJlcXVpcmVkLlxuICAvLyBFdmVuIGlmIHRoZSB0b29sIGNhbGwgdGhyZXNob2xkIGlzIG1ldCwgZXh0cmFjdGlvbiB3b24ndCBoYXBwZW4gdW50aWwgdGhlXG4gIC8vIHRva2VuIHRocmVzaG9sZCBpcyBhbHNvIHNhdGlzZmllZC4gVGhpcyBwcmV2ZW50cyBleGNlc3NpdmUgZXh0cmFjdGlvbnMuXG4gIGNvbnN0IHNob3VsZEV4dHJhY3QgPVxuICAgIChoYXNNZXRUb2tlblRocmVzaG9sZCAmJiBoYXNNZXRUb29sQ2FsbFRocmVzaG9sZCkgfHxcbiAgICAoaGFzTWV0VG9rZW5UaHJlc2hvbGQgJiYgIWhhc1Rvb2xDYWxsc0luTGFzdFR1cm4pXG5cbiAgaWYgKHNob3VsZEV4dHJhY3QpIHtcbiAgICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RNZXNzYWdlPy51dWlkKSB7XG4gICAgICBsYXN0TWVtb3J5TWVzc2FnZVV1aWQgPSBsYXN0TWVzc2FnZS51dWlkXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBTZXNzaW9uTWVtb3J5RmlsZShcbiAgdG9vbFVzZUNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuKTogUHJvbWlzZTx7IG1lbW9yeVBhdGg6IHN0cmluZzsgY3VycmVudE1lbW9yeTogc3RyaW5nIH0+IHtcbiAgY29uc3QgZnMgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcblxuICAvLyBTZXQgdXAgZGlyZWN0b3J5IGFuZCBmaWxlXG4gIGNvbnN0IHNlc3Npb25NZW1vcnlEaXIgPSBnZXRTZXNzaW9uTWVtb3J5RGlyKClcbiAgYXdhaXQgZnMubWtkaXIoc2Vzc2lvbk1lbW9yeURpciwgeyBtb2RlOiAwbzcwMCB9KVxuXG4gIGNvbnN0IG1lbW9yeVBhdGggPSBnZXRTZXNzaW9uTWVtb3J5UGF0aCgpXG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW1vcnkgZmlsZSBpZiBpdCBkb2Vzbid0IGV4aXN0ICh3eCA9IE9fQ1JFQVR8T19FWENMKVxuICB0cnkge1xuICAgIGF3YWl0IHdyaXRlRmlsZShtZW1vcnlQYXRoLCAnJywge1xuICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgICBtb2RlOiAwbzYwMCxcbiAgICAgIGZsYWc6ICd3eCcsXG4gICAgfSlcbiAgICAvLyBPbmx5IGxvYWQgdGVtcGxhdGUgaWYgZmlsZSB3YXMganVzdCBjcmVhdGVkXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBsb2FkU2Vzc2lvbk1lbW9yeVRlbXBsYXRlKClcbiAgICBhd2FpdCB3cml0ZUZpbGUobWVtb3J5UGF0aCwgdGVtcGxhdGUsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgbW9kZTogMG82MDAsXG4gICAgfSlcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICBpZiAoY29kZSAhPT0gJ0VFWElTVCcpIHtcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH1cblxuICAvLyBEcm9wIGFueSBjYWNoZWQgZW50cnkgc28gRmlsZVJlYWRUb29sJ3MgZGVkdXAgZG9lc24ndCByZXR1cm4gYVxuICAvLyBmaWxlX3VuY2hhbmdlZCBzdHViIFx1MjAxNCB3ZSBuZWVkIHRoZSBhY3R1YWwgY29udGVudC4gVGhlIFJlYWQgcmVwb3B1bGF0ZXMgaXQuXG4gIHRvb2xVc2VDb250ZXh0LnJlYWRGaWxlU3RhdGUuZGVsZXRlKG1lbW9yeVBhdGgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZpbGVSZWFkVG9vbC5jYWxsKFxuICAgIHsgZmlsZV9wYXRoOiBtZW1vcnlQYXRoIH0sXG4gICAgdG9vbFVzZUNvbnRleHQsXG4gIClcbiAgbGV0IGN1cnJlbnRNZW1vcnkgPSAnJ1xuXG4gIGNvbnN0IG91dHB1dCA9IHJlc3VsdC5kYXRhIGFzIEZpbGVSZWFkVG9vbE91dHB1dFxuICBpZiAob3V0cHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGN1cnJlbnRNZW1vcnkgPSBvdXRwdXQuZmlsZS5jb250ZW50XG4gIH1cblxuICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnlfZmlsZV9yZWFkJywge1xuICAgIGNvbnRlbnRfbGVuZ3RoOiBjdXJyZW50TWVtb3J5Lmxlbmd0aCxcbiAgfSlcblxuICByZXR1cm4geyBtZW1vcnlQYXRoLCBjdXJyZW50TWVtb3J5IH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNlc3Npb24gbWVtb3J5IGNvbmZpZyBmcm9tIHJlbW90ZSBjb25maWcgKGxhenkgaW5pdGlhbGl6YXRpb24pLlxuICogTWVtb2l6ZWQgLSBvbmx5IHJ1bnMgb25jZSBwZXIgc2Vzc2lvbiwgc3Vic2VxdWVudCBjYWxscyByZXR1cm4gaW1tZWRpYXRlbHkuXG4gKiBVc2VzIGNhY2hlZCBjb25maWcgdmFsdWVzIC0gbm9uLWJsb2NraW5nLlxuICovXG5jb25zdCBpbml0U2Vzc2lvbk1lbW9yeUNvbmZpZ0lmTmVlZGVkID0gbWVtb2l6ZSgoKTogdm9pZCA9PiB7XG4gIC8vIExvYWQgY29uZmlnIGZyb20gY2FjaGUgKG5vbi1ibG9ja2luZywgbWF5IGJlIHN0YWxlKVxuICBjb25zdCByZW1vdGVDb25maWcgPSBnZXRTZXNzaW9uTWVtb3J5UmVtb3RlQ29uZmlnKClcblxuICAvLyBPbmx5IHVzZSByZW1vdGUgdmFsdWVzIGlmIHRoZXkgYXJlIGV4cGxpY2l0bHkgc2V0IChub24temVybyBwb3NpdGl2ZSBudW1iZXJzKVxuICAvLyBUaGlzIGVuc3VyZXMgc2Vuc2libGUgZGVmYXVsdHMgYXJlbid0IG92ZXJyaWRkZW4gYnkgemVybyB2YWx1ZXNcbiAgY29uc3QgY29uZmlnOiBTZXNzaW9uTWVtb3J5Q29uZmlnID0ge1xuICAgIG1pbmltdW1NZXNzYWdlVG9rZW5zVG9Jbml0OlxuICAgICAgcmVtb3RlQ29uZmlnLm1pbmltdW1NZXNzYWdlVG9rZW5zVG9Jbml0ICYmXG4gICAgICByZW1vdGVDb25maWcubWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXQgPiAwXG4gICAgICAgID8gcmVtb3RlQ29uZmlnLm1pbmltdW1NZXNzYWdlVG9rZW5zVG9Jbml0XG4gICAgICAgIDogREVGQVVMVF9TRVNTSU9OX01FTU9SWV9DT05GSUcubWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXQsXG4gICAgbWluaW11bVRva2Vuc0JldHdlZW5VcGRhdGU6XG4gICAgICByZW1vdGVDb25maWcubWluaW11bVRva2Vuc0JldHdlZW5VcGRhdGUgJiZcbiAgICAgIHJlbW90ZUNvbmZpZy5taW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZSA+IDBcbiAgICAgICAgPyByZW1vdGVDb25maWcubWluaW11bVRva2Vuc0JldHdlZW5VcGRhdGVcbiAgICAgICAgOiBERUZBVUxUX1NFU1NJT05fTUVNT1JZX0NPTkZJRy5taW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZSxcbiAgICB0b29sQ2FsbHNCZXR3ZWVuVXBkYXRlczpcbiAgICAgIHJlbW90ZUNvbmZpZy50b29sQ2FsbHNCZXR3ZWVuVXBkYXRlcyAmJlxuICAgICAgcmVtb3RlQ29uZmlnLnRvb2xDYWxsc0JldHdlZW5VcGRhdGVzID4gMFxuICAgICAgICA/IHJlbW90ZUNvbmZpZy50b29sQ2FsbHNCZXR3ZWVuVXBkYXRlc1xuICAgICAgICA6IERFRkFVTFRfU0VTU0lPTl9NRU1PUllfQ09ORklHLnRvb2xDYWxsc0JldHdlZW5VcGRhdGVzLFxuICB9XG4gIHNldFNlc3Npb25NZW1vcnlDb25maWcoY29uZmlnKVxufSlcblxuLyoqXG4gKiBTZXNzaW9uIG1lbW9yeSBwb3N0LXNhbXBsaW5nIGhvb2sgdGhhdCBleHRyYWN0cyBhbmQgdXBkYXRlcyBzZXNzaW9uIG5vdGVzXG4gKi9cbi8vIFRyYWNrIGlmIHdlJ3ZlIGxvZ2dlZCB0aGUgZ2F0ZSBjaGVjayBmYWlsdXJlIHRoaXMgc2Vzc2lvbiAodG8gYXZvaWQgc3BhbSlcbmxldCBoYXNMb2dnZWRHYXRlRmFpbHVyZSA9IGZhbHNlXG5cbmNvbnN0IGV4dHJhY3RTZXNzaW9uTWVtb3J5ID0gc2VxdWVudGlhbChhc3luYyBmdW5jdGlvbiAoXG4gIGNvbnRleHQ6IFJFUExIb29rQ29udGV4dCxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IG1lc3NhZ2VzLCB0b29sVXNlQ29udGV4dCwgcXVlcnlTb3VyY2UgfSA9IGNvbnRleHRcblxuICAvLyBPbmx5IHJ1biBzZXNzaW9uIG1lbW9yeSBvbiBtYWluIFJFUEwgdGhyZWFkXG4gIGlmIChxdWVyeVNvdXJjZSAhPT0gJ3JlcGxfbWFpbl90aHJlYWQnKSB7XG4gICAgLy8gRG9uJ3QgbG9nIHRoaXMgLSBpdCdzIGV4cGVjdGVkIGZvciBzdWJhZ2VudHMsIHRlYW1tYXRlcywgZXRjLlxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ2hlY2sgZ2F0ZSBsYXppbHkgd2hlbiBob29rIHJ1bnMgKGNhY2hlZCwgbm9uLWJsb2NraW5nKVxuICBpZiAoIWlzU2Vzc2lvbk1lbW9yeUdhdGVFbmFibGVkKCkpIHtcbiAgICAvLyBMb2cgZ2F0ZSBmYWlsdXJlIG9uY2UgcGVyIHNlc3Npb24gKGFudC1vbmx5KVxuICAgIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmICFoYXNMb2dnZWRHYXRlRmFpbHVyZSkge1xuICAgICAgaGFzTG9nZ2VkR2F0ZUZhaWx1cmUgPSB0cnVlXG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnlfZ2F0ZV9kaXNhYmxlZCcsIHt9KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgY29uZmlnIGZyb20gcmVtb3RlIChsYXp5LCBvbmx5IG9uY2UpXG4gIGluaXRTZXNzaW9uTWVtb3J5Q29uZmlnSWZOZWVkZWQoKVxuXG4gIGlmICghc2hvdWxkRXh0cmFjdE1lbW9yeShtZXNzYWdlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hcmtFeHRyYWN0aW9uU3RhcnRlZCgpXG5cbiAgLy8gQ3JlYXRlIGlzb2xhdGVkIGNvbnRleHQgZm9yIHNldHVwIHRvIGF2b2lkIHBvbGx1dGluZyBwYXJlbnQncyBjYWNoZVxuICBjb25zdCBzZXR1cENvbnRleHQgPSBjcmVhdGVTdWJhZ2VudENvbnRleHQodG9vbFVzZUNvbnRleHQpXG5cbiAgLy8gU2V0IHVwIGZpbGUgc3lzdGVtIGFuZCByZWFkIGN1cnJlbnQgc3RhdGUgd2l0aCBpc29sYXRlZCBjb250ZXh0XG4gIGNvbnN0IHsgbWVtb3J5UGF0aCwgY3VycmVudE1lbW9yeSB9ID1cbiAgICBhd2FpdCBzZXR1cFNlc3Npb25NZW1vcnlGaWxlKHNldHVwQ29udGV4dClcblxuICAvLyBDcmVhdGUgZXh0cmFjdGlvbiBtZXNzYWdlXG4gIGNvbnN0IHVzZXJQcm9tcHQgPSBhd2FpdCBidWlsZFNlc3Npb25NZW1vcnlVcGRhdGVQcm9tcHQoXG4gICAgY3VycmVudE1lbW9yeSxcbiAgICBtZW1vcnlQYXRoLFxuICApXG5cbiAgLy8gUnVuIHNlc3Npb24gbWVtb3J5IGV4dHJhY3Rpb24gdXNpbmcgcnVuRm9ya2VkQWdlbnQgZm9yIHByb21wdCBjYWNoaW5nXG4gIC8vIHJ1bkZvcmtlZEFnZW50IGNyZWF0ZXMgYW4gaXNvbGF0ZWQgY29udGV4dCB0byBwcmV2ZW50IG11dGF0aW9uIG9mIHBhcmVudCBzdGF0ZVxuICAvLyBQYXNzIHNldHVwQ29udGV4dC5yZWFkRmlsZVN0YXRlIHNvIHRoZSBmb3JrZWQgYWdlbnQgY2FuIGVkaXQgdGhlIG1lbW9yeSBmaWxlXG4gIGF3YWl0IHJ1bkZvcmtlZEFnZW50KHtcbiAgICBwcm9tcHRNZXNzYWdlczogW2NyZWF0ZVVzZXJNZXNzYWdlKHsgY29udGVudDogdXNlclByb21wdCB9KV0sXG4gICAgY2FjaGVTYWZlUGFyYW1zOiBjcmVhdGVDYWNoZVNhZmVQYXJhbXMoY29udGV4dCksXG4gICAgY2FuVXNlVG9vbDogY3JlYXRlTWVtb3J5RmlsZUNhblVzZVRvb2wobWVtb3J5UGF0aCksXG4gICAgcXVlcnlTb3VyY2U6ICdzZXNzaW9uX21lbW9yeScsXG4gICAgZm9ya0xhYmVsOiAnc2Vzc2lvbl9tZW1vcnknLFxuICAgIG92ZXJyaWRlczogeyByZWFkRmlsZVN0YXRlOiBzZXR1cENvbnRleHQucmVhZEZpbGVTdGF0ZSB9LFxuICB9KVxuXG4gIC8vIExvZyBleHRyYWN0aW9uIGV2ZW50IGZvciB0cmFja2luZyBmcmVxdWVuY3lcbiAgLy8gVXNlIHRoZSB0b2tlbiB1c2FnZSBmcm9tIHRoZSBsYXN0IG1lc3NhZ2UgaW4gdGhlIGNvbnZlcnNhdGlvblxuICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gIGNvbnN0IHVzYWdlID0gbGFzdE1lc3NhZ2UgPyBnZXRUb2tlblVzYWdlKGxhc3RNZXNzYWdlKSA6IHVuZGVmaW5lZFxuICBjb25zdCBjb25maWcgPSBnZXRTZXNzaW9uTWVtb3J5Q29uZmlnKClcbiAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fbWVtb3J5X2V4dHJhY3Rpb24nLCB7XG4gICAgaW5wdXRfdG9rZW5zOiB1c2FnZT8uaW5wdXRfdG9rZW5zLFxuICAgIG91dHB1dF90b2tlbnM6IHVzYWdlPy5vdXRwdXRfdG9rZW5zLFxuICAgIGNhY2hlX3JlYWRfaW5wdXRfdG9rZW5zOiB1c2FnZT8uY2FjaGVfcmVhZF9pbnB1dF90b2tlbnMgPz8gdW5kZWZpbmVkLFxuICAgIGNhY2hlX2NyZWF0aW9uX2lucHV0X3Rva2VuczpcbiAgICAgIHVzYWdlPy5jYWNoZV9jcmVhdGlvbl9pbnB1dF90b2tlbnMgPz8gdW5kZWZpbmVkLFxuICAgIGNvbmZpZ19taW5fbWVzc2FnZV90b2tlbnNfdG9faW5pdDogY29uZmlnLm1pbmltdW1NZXNzYWdlVG9rZW5zVG9Jbml0LFxuICAgIGNvbmZpZ19taW5fdG9rZW5zX2JldHdlZW5fdXBkYXRlOiBjb25maWcubWluaW11bVRva2Vuc0JldHdlZW5VcGRhdGUsXG4gICAgY29uZmlnX3Rvb2xfY2FsbHNfYmV0d2Vlbl91cGRhdGVzOiBjb25maWcudG9vbENhbGxzQmV0d2VlblVwZGF0ZXMsXG4gIH0pXG5cbiAgLy8gUmVjb3JkIHRoZSBjb250ZXh0IHNpemUgYXQgZXh0cmFjdGlvbiBmb3IgdHJhY2tpbmcgbWluaW11bVRva2Vuc0JldHdlZW5VcGRhdGVcbiAgcmVjb3JkRXh0cmFjdGlvblRva2VuQ291bnQodG9rZW5Db3VudFdpdGhFc3RpbWF0aW9uKG1lc3NhZ2VzKSlcblxuICAvLyBVcGRhdGUgbGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQgYWZ0ZXIgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uXG4gIHVwZGF0ZUxhc3RTdW1tYXJpemVkTWVzc2FnZUlkSWZTYWZlKG1lc3NhZ2VzKVxuXG4gIG1hcmtFeHRyYWN0aW9uQ29tcGxldGVkKClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXNzaW9uIG1lbW9yeSBieSByZWdpc3RlcmluZyB0aGUgcG9zdC1zYW1wbGluZyBob29rLlxuICogVGhpcyBpcyBzeW5jaHJvbm91cyB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHN0YXJ0dXAuXG4gKiBUaGUgZ2F0ZSBjaGVjayBhbmQgY29uZmlnIGxvYWRpbmcgaGFwcGVuIGxhemlseSB3aGVuIHRoZSBob29rIHJ1bnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2Vzc2lvbk1lbW9yeSgpOiB2b2lkIHtcbiAgaWYgKGdldElzUmVtb3RlTW9kZSgpKSByZXR1cm5cbiAgLy8gU2Vzc2lvbiBtZW1vcnkgaXMgdXNlZCBmb3IgY29tcGFjdGlvbiwgc28gcmVzcGVjdCBhdXRvLWNvbXBhY3Qgc2V0dGluZ3NcbiAgY29uc3QgYXV0b0NvbXBhY3RFbmFibGVkID0gaXNBdXRvQ29tcGFjdEVuYWJsZWQoKVxuXG4gIC8vIExvZyBpbml0aWFsaXphdGlvbiBzdGF0ZSAoYW50LW9ubHkgdG8gYXZvaWQgbm9pc2UgaW4gZXh0ZXJuYWwgbG9ncylcbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnlfaW5pdCcsIHtcbiAgICAgIGF1dG9fY29tcGFjdF9lbmFibGVkOiBhdXRvQ29tcGFjdEVuYWJsZWQsXG4gICAgfSlcbiAgfVxuXG4gIGlmICghYXV0b0NvbXBhY3RFbmFibGVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBSZWdpc3RlciBob29rIHVuY29uZGl0aW9uYWxseSAtIGdhdGUgY2hlY2sgaGFwcGVucyBsYXppbHkgd2hlbiBob29rIHJ1bnNcbiAgcmVnaXN0ZXJQb3N0U2FtcGxpbmdIb29rKGV4dHJhY3RTZXNzaW9uTWVtb3J5KVxufVxuXG5leHBvcnQgdHlwZSBNYW51YWxFeHRyYWN0aW9uUmVzdWx0ID0ge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIG1lbW9yeVBhdGg/OiBzdHJpbmdcbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBNYW51YWxseSB0cmlnZ2VyIHNlc3Npb24gbWVtb3J5IGV4dHJhY3Rpb24sIGJ5cGFzc2luZyB0aHJlc2hvbGQgY2hlY2tzLlxuICogVXNlZCBieSB0aGUgL3N1bW1hcnkgY29tbWFuZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hbnVhbGx5RXh0cmFjdFNlc3Npb25NZW1vcnkoXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gIHRvb2xVc2VDb250ZXh0OiBUb29sVXNlQ29udGV4dCxcbik6IFByb21pc2U8TWFudWFsRXh0cmFjdGlvblJlc3VsdD4ge1xuICBpZiAobWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm8gbWVzc2FnZXMgdG8gc3VtbWFyaXplJyB9XG4gIH1cbiAgbWFya0V4dHJhY3Rpb25TdGFydGVkKClcblxuICB0cnkge1xuICAgIC8vIENyZWF0ZSBpc29sYXRlZCBjb250ZXh0IGZvciBzZXR1cCB0byBhdm9pZCBwb2xsdXRpbmcgcGFyZW50J3MgY2FjaGVcbiAgICBjb25zdCBzZXR1cENvbnRleHQgPSBjcmVhdGVTdWJhZ2VudENvbnRleHQodG9vbFVzZUNvbnRleHQpXG5cbiAgICAvLyBTZXQgdXAgZmlsZSBzeXN0ZW0gYW5kIHJlYWQgY3VycmVudCBzdGF0ZSB3aXRoIGlzb2xhdGVkIGNvbnRleHRcbiAgICBjb25zdCB7IG1lbW9yeVBhdGgsIGN1cnJlbnRNZW1vcnkgfSA9XG4gICAgICBhd2FpdCBzZXR1cFNlc3Npb25NZW1vcnlGaWxlKHNldHVwQ29udGV4dClcblxuICAgIC8vIENyZWF0ZSBleHRyYWN0aW9uIG1lc3NhZ2VcbiAgICBjb25zdCB1c2VyUHJvbXB0ID0gYXdhaXQgYnVpbGRTZXNzaW9uTWVtb3J5VXBkYXRlUHJvbXB0KFxuICAgICAgY3VycmVudE1lbW9yeSxcbiAgICAgIG1lbW9yeVBhdGgsXG4gICAgKVxuXG4gICAgLy8gR2V0IHN5c3RlbSBwcm9tcHQgZm9yIGNhY2hlLXNhZmUgcGFyYW1zXG4gICAgY29uc3QgeyB0b29scywgbWFpbkxvb3BNb2RlbCB9ID0gdG9vbFVzZUNvbnRleHQub3B0aW9uc1xuICAgIGNvbnN0IFtyYXdTeXN0ZW1Qcm9tcHQsIHVzZXJDb250ZXh0LCBzeXN0ZW1Db250ZXh0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldFN5c3RlbVByb21wdCh0b29scywgbWFpbkxvb3BNb2RlbCksXG4gICAgICBnZXRVc2VyQ29udGV4dCgpLFxuICAgICAgZ2V0U3lzdGVtQ29udGV4dCgpLFxuICAgIF0pXG4gICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYXNTeXN0ZW1Qcm9tcHQocmF3U3lzdGVtUHJvbXB0KVxuXG4gICAgLy8gUnVuIHNlc3Npb24gbWVtb3J5IGV4dHJhY3Rpb24gdXNpbmcgcnVuRm9ya2VkQWdlbnRcbiAgICBhd2FpdCBydW5Gb3JrZWRBZ2VudCh7XG4gICAgICBwcm9tcHRNZXNzYWdlczogW2NyZWF0ZVVzZXJNZXNzYWdlKHsgY29udGVudDogdXNlclByb21wdCB9KV0sXG4gICAgICBjYWNoZVNhZmVQYXJhbXM6IHtcbiAgICAgICAgc3lzdGVtUHJvbXB0LFxuICAgICAgICB1c2VyQ29udGV4dCxcbiAgICAgICAgc3lzdGVtQ29udGV4dCxcbiAgICAgICAgdG9vbFVzZUNvbnRleHQ6IHNldHVwQ29udGV4dCxcbiAgICAgICAgZm9ya0NvbnRleHRNZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICB9LFxuICAgICAgY2FuVXNlVG9vbDogY3JlYXRlTWVtb3J5RmlsZUNhblVzZVRvb2wobWVtb3J5UGF0aCksXG4gICAgICBxdWVyeVNvdXJjZTogJ3Nlc3Npb25fbWVtb3J5JyxcbiAgICAgIGZvcmtMYWJlbDogJ3Nlc3Npb25fbWVtb3J5X21hbnVhbCcsXG4gICAgICBvdmVycmlkZXM6IHsgcmVhZEZpbGVTdGF0ZTogc2V0dXBDb250ZXh0LnJlYWRGaWxlU3RhdGUgfSxcbiAgICB9KVxuXG4gICAgLy8gTG9nIG1hbnVhbCBleHRyYWN0aW9uIGV2ZW50XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fbWVtb3J5X21hbnVhbF9leHRyYWN0aW9uJywge30pXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbnRleHQgc2l6ZSBhdCBleHRyYWN0aW9uIGZvciB0cmFja2luZyBtaW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZVxuICAgIHJlY29yZEV4dHJhY3Rpb25Ub2tlbkNvdW50KHRva2VuQ291bnRXaXRoRXN0aW1hdGlvbihtZXNzYWdlcykpXG5cbiAgICAvLyBVcGRhdGUgbGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQgYWZ0ZXIgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uXG4gICAgdXBkYXRlTGFzdFN1bW1hcml6ZWRNZXNzYWdlSWRJZlNhZmUobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW1vcnlQYXRoIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogZXJyb3JNZXNzYWdlKGVycm9yKSxcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgbWFya0V4dHJhY3Rpb25Db21wbGV0ZWQoKVxuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2FuVXNlVG9vbCBmdW5jdGlvbiB0aGF0IG9ubHkgYWxsb3dzIEVkaXQgZm9yIHRoZSBleGFjdCBtZW1vcnkgZmlsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUZpbGVDYW5Vc2VUb29sKG1lbW9yeVBhdGg6IHN0cmluZyk6IENhblVzZVRvb2xGbiB7XG4gIHJldHVybiBhc3luYyAodG9vbDogVG9vbCwgaW5wdXQ6IHVua25vd24pID0+IHtcbiAgICBpZiAoXG4gICAgICB0b29sLm5hbWUgPT09IEZJTEVfRURJVF9UT09MX05BTUUgJiZcbiAgICAgIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIGlucHV0ICE9PSBudWxsICYmXG4gICAgICAnZmlsZV9wYXRoJyBpbiBpbnB1dFxuICAgICkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBpbnB1dC5maWxlX3BhdGhcbiAgICAgIGlmICh0eXBlb2YgZmlsZVBhdGggPT09ICdzdHJpbmcnICYmIGZpbGVQYXRoID09PSBtZW1vcnlQYXRoKSB7XG4gICAgICAgIHJldHVybiB7IGJlaGF2aW9yOiAnYWxsb3cnIGFzIGNvbnN0LCB1cGRhdGVkSW5wdXQ6IGlucHV0IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlaGF2aW9yOiAnZGVueScgYXMgY29uc3QsXG4gICAgICBtZXNzYWdlOiBgb25seSAke0ZJTEVfRURJVF9UT09MX05BTUV9IG9uICR7bWVtb3J5UGF0aH0gaXMgYWxsb3dlZGAsXG4gICAgICBkZWNpc2lvblJlYXNvbjoge1xuICAgICAgICB0eXBlOiAnb3RoZXInIGFzIGNvbnN0LFxuICAgICAgICByZWFzb246IGBvbmx5ICR7RklMRV9FRElUX1RPT0xfTkFNRX0gb24gJHttZW1vcnlQYXRofSBpcyBhbGxvd2VkYCxcbiAgICAgIH0sXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVXBkYXRlcyBsYXN0U3VtbWFyaXplZE1lc3NhZ2VJZCBhZnRlciBzdWNjZXNzZnVsIGV4dHJhY3Rpb24uXG4gKiBPbmx5IHNldHMgaXQgaWYgdGhlIGxhc3QgbWVzc2FnZSBkb2Vzbid0IGhhdmUgdG9vbCBjYWxscyAodG8gYXZvaWQgb3JwaGFuZWQgdG9vbF9yZXN1bHRzKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlTGFzdFN1bW1hcml6ZWRNZXNzYWdlSWRJZlNhZmUobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IHZvaWQge1xuICBpZiAoIWhhc1Rvb2xDYWxsc0luTGFzdEFzc2lzdGFudFR1cm4obWVzc2FnZXMpKSB7XG4gICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXVxuICAgIGlmIChsYXN0TWVzc2FnZT8udXVpZCkge1xuICAgICAgc2V0TGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQobGFzdE1lc3NhZ2UudXVpZClcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb3B5RmlsZSwgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrSVRlcm0yU2V0dXBDb21wbGV0ZSgpOiB2b2lkIHtcbiAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgLi4uY3VycmVudCxcbiAgICBpdGVybTJTZXR1cEluUHJvZ3Jlc3M6IGZhbHNlLFxuICB9KSlcbn1cblxuZnVuY3Rpb24gZ2V0SXRlcm0yUmVjb3ZlcnlJbmZvKCk6IHtcbiAgaW5Qcm9ncmVzczogYm9vbGVhblxuICBiYWNrdXBQYXRoOiBzdHJpbmcgfCBudWxsXG59IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgcmV0dXJuIHtcbiAgICBpblByb2dyZXNzOiBjb25maWcuaXRlcm0yU2V0dXBJblByb2dyZXNzID8/IGZhbHNlLFxuICAgIGJhY2t1cFBhdGg6IGNvbmZpZy5pdGVybTJCYWNrdXBQYXRoIHx8IG51bGwsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SVRlcm0yUGxpc3RQYXRoKCk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKFxuICAgIGhvbWVkaXIoKSxcbiAgICAnTGlicmFyeScsXG4gICAgJ1ByZWZlcmVuY2VzJyxcbiAgICAnY29tLmdvb2dsZWNvZGUuaXRlcm0yLnBsaXN0JyxcbiAgKVxufVxuXG50eXBlIFJlc3RvcmVSZXN1bHQgPVxuICB8IHtcbiAgICAgIHN0YXR1czogJ3Jlc3RvcmVkJyB8ICdub19iYWNrdXAnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXR1czogJ2ZhaWxlZCdcbiAgICAgIGJhY2t1cFBhdGg6IHN0cmluZ1xuICAgIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kUmVzdG9yZUlUZXJtMkJhY2t1cCgpOiBQcm9taXNlPFJlc3RvcmVSZXN1bHQ+IHtcbiAgY29uc3QgeyBpblByb2dyZXNzLCBiYWNrdXBQYXRoIH0gPSBnZXRJdGVybTJSZWNvdmVyeUluZm8oKVxuICBpZiAoIWluUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub19iYWNrdXAnIH1cbiAgfVxuXG4gIGlmICghYmFja3VwUGF0aCkge1xuICAgIG1hcmtJVGVybTJTZXR1cENvbXBsZXRlKClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub19iYWNrdXAnIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgc3RhdChiYWNrdXBQYXRoKVxuICB9IGNhdGNoIHtcbiAgICBtYXJrSVRlcm0yU2V0dXBDb21wbGV0ZSgpXG4gICAgcmV0dXJuIHsgc3RhdHVzOiAnbm9fYmFja3VwJyB9XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGNvcHlGaWxlKGJhY2t1cFBhdGgsIGdldElUZXJtMlBsaXN0UGF0aCgpKVxuXG4gICAgbWFya0lUZXJtMlNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ3Jlc3RvcmVkJyB9XG4gIH0gY2F0Y2ggKHJlc3RvcmVFcnJvcikge1xuICAgIGxvZ0Vycm9yKFxuICAgICAgbmV3IEVycm9yKGBGYWlsZWQgdG8gcmVzdG9yZSBpVGVybTIgc2V0dGluZ3Mgd2l0aDogJHtyZXN0b3JlRXJyb3J9YCksXG4gICAgKVxuICAgIG1hcmtJVGVybTJTZXR1cENvbXBsZXRlKClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdmYWlsZWQnLCBiYWNrdXBQYXRoIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7OztBQ2JBO0FBQ0E7QUFDQUE7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQXNCQTtBQUNB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TyxRQUFRLFdBQVcsY0FDMUIsUUFBUSxPQUFPLE1BQU0sS0FDckIsUUFBUSxJQUFJLGVBQWUsT0FDM0IsQ0FBQyxZQUFZLFFBQVEsSUFBSSxzQkFBc0IsR0FDL0M7QUFFQSxjQUFRO0FBQUEsUUFDTjtBQUFBLE1BQ0Y7QUFDQSxjQUFRLEtBQUssQ0FBQztBQUFBLElBQ2hCO0FBRUEsUUFDRSxRQUFRLElBQUksY0FBYztBQUFBO0FBQUE7QUFBQSxJQUkxQixRQUFRLElBQUksMkJBQTJCO0FBQUE7QUFBQSxJQUd2QyxRQUFRLElBQUksMkJBQTJCLGtCQUN2QztBQUVBLFlBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxNQUFNLFFBQVEsSUFBSTtBQUFBLFFBQ2hELFdBQVcsWUFBWTtBQUFBLFFBQ3ZCLElBQUksa0JBQWtCO0FBQUEsTUFDeEIsQ0FBQztBQUNELFlBQU0sZUFBZSxXQUFXLHVCQUF1QjtBQUN2RCxZQUFNLFlBQVksUUFBUSxJQUFJLGVBQWU7QUFDN0MsWUFBTSxjQUFjLFlBQVksZ0JBQWdCO0FBQ2hELFVBQUksQ0FBQyxlQUFlLGFBQWE7QUFFL0IsZ0JBQVE7QUFBQSxVQUNOLHdIQUF3SCxRQUFRLGlCQUFpQixZQUFZLGlCQUFpQixTQUFTLGtCQUFrQixXQUFXO0FBQUEsUUFDdE47QUFDQSxnQkFBUSxLQUFLLENBQUM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsTUFBSSxRQUFRLElBQUksYUFBYSxRQUFRO0FBQ25DO0FBQUEsRUFDRjtBQUdBLFFBQU0sZ0JBQWdCLHdCQUF3QjtBQUM5QyxNQUNFLGNBQWMsYUFBYSxVQUMzQixjQUFjLGlCQUFpQixRQUMvQjtBQUNBLGFBQVMsY0FBYztBQUFBLE1BQ3JCLG1CQUFtQixjQUFjO0FBQUEsTUFDakMsMkJBQTJCLGNBQWM7QUFBQSxNQUN6Qyw0QkFBNEIsY0FBYztBQUFBLE1BQzFDLHVCQUF1QixjQUFjO0FBQUEsTUFDckMsMEJBQTBCLGNBQWM7QUFBQSxNQUN4Qyw0QkFBNEIsY0FBYztBQUFBLE1BQzFDLGlDQUFpQyxjQUFjO0FBQUEsTUFDL0Msa0NBQWtDLGNBQWM7QUFBQSxNQUNoRCxnREFDRSxjQUFjO0FBQUEsTUFDaEIsNENBQ0UsY0FBYztBQUFBLE1BQ2hCLDBCQUEwQixjQUFjO0FBQUEsTUFDeEMsNEJBQTRCLGNBQWM7QUFBQSxNQUMxQyxpQkFDRSxjQUFjO0FBQUEsTUFDaEIsR0FBRyxjQUFjO0FBQUEsSUFDbkIsQ0FBQztBQUFBLEVBSUg7QUFDRjsiLAogICJuYW1lcyI6IFsiaW5pdF9wcm9tcHRzIl0KfQo=
