#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  initSinks
} from "./chunk-73NDL2NW.mjs";
import {
  getRecentActivity,
  init_logoV2Utils
} from "./chunk-NPUBMBHV.mjs";
import {
  checkForReleaseNotes,
  init_releaseNotes
} from "./chunk-LLTILAJT.mjs";
import "./chunk-MIXTJ7VY.mjs";
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
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import {
  checkAndRestoreTerminalBackup,
  init_appleTerminalBackup
} from "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
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
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
        "Error: Claude Code requires Node.js version 18 or higher."
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
    const { captureTeammateModeSnapshot } = await import("./teammateModeSnapshot-3OP4GGTG.mjs");
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
  void import("./loadPluginHooks-5WUALPJU.mjs").then((m) => {
    if (!skipPluginPrefetch) {
      void m.loadPluginHooks();
      m.setupPluginHookHotReload();
    }
  });
  if (!isBareMode()) {
    if (process.env.USER_TYPE === "ant") {
      void import("./commitAttribution-ILLNS7ZV.mjs").then(async (m) => {
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
    void import("./sessionFileAccessHooks-2SAQJBMX.mjs").then(
      (m) => m.registerSessionFileAccessHooks()
    );
    if (feature("TEAMMEM")) {
      void import("./watcher-KGMZ4E5A.mjs").then(
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NldHVwLnRzIiwgIi4uLy4uL3NyYy9zZXJ2aWNlcy9TZXNzaW9uTWVtb3J5L3Nlc3Npb25NZW1vcnkudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2lUZXJtQmFja3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBlc2xpbnQtZGlzYWJsZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0ICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJ3NyYy91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBjaGVja0ZvclJlbGVhc2VOb3RlcyB9IGZyb20gJ3NyYy91dGlscy9yZWxlYXNlTm90ZXMuanMnXG5pbXBvcnQgeyBzZXRDd2QgfSBmcm9tICdzcmMvdXRpbHMvU2hlbGwuanMnXG5pbXBvcnQgeyBpbml0U2lua3MgfSBmcm9tICdzcmMvdXRpbHMvc2lua3MuanMnXG5pbXBvcnQge1xuICBnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbixcbiAgZ2V0UHJvamVjdFJvb3QsXG4gIGdldFNlc3Npb25JZCxcbiAgc2V0T3JpZ2luYWxDd2QsXG4gIHNldFByb2plY3RSb290LFxuICBzd2l0Y2hTZXNzaW9uLFxufSBmcm9tICcuL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldENvbW1hbmRzIH0gZnJvbSAnLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IGluaXRTZXNzaW9uTWVtb3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9TZXNzaW9uTWVtb3J5L3Nlc3Npb25NZW1vcnkuanMnXG5pbXBvcnQgeyBhc1Nlc3Npb25JZCB9IGZyb20gJy4vdHlwZXMvaWRzLmpzJ1xuaW1wb3J0IHsgaXNBZ2VudFN3YXJtc0VuYWJsZWQgfSBmcm9tICcuL3V0aWxzL2FnZW50U3dhcm1zRW5hYmxlZC5qcydcbmltcG9ydCB7IGNoZWNrQW5kUmVzdG9yZVRlcm1pbmFsQmFja3VwIH0gZnJvbSAnLi91dGlscy9hcHBsZVRlcm1pbmFsQmFja3VwLmpzJ1xuaW1wb3J0IHsgcHJlZmV0Y2hBcGlLZXlGcm9tQXBpS2V5SGVscGVySWZTYWZlIH0gZnJvbSAnLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzIH0gZnJvbSAnLi91dGlscy9jbGF1ZGVtZC5qcydcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0Q29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi91dGlscy9lbnYuanMnXG5pbXBvcnQgeyBlbnZEeW5hbWljIH0gZnJvbSAnLi91dGlscy9lbnZEeW5hbWljLmpzJ1xuaW1wb3J0IHsgaXNCYXJlTW9kZSwgaXNFbnZUcnV0aHkgfSBmcm9tICcuL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBmaW5kQ2Fub25pY2FsR2l0Um9vdCwgZmluZEdpdFJvb3QsIGdldElzR2l0IH0gZnJvbSAnLi91dGlscy9naXQuanMnXG5pbXBvcnQgeyBpbml0aWFsaXplRmlsZUNoYW5nZWRXYXRjaGVyIH0gZnJvbSAnLi91dGlscy9ob29rcy9maWxlQ2hhbmdlZFdhdGNoZXIuanMnXG5pbXBvcnQge1xuICBjYXB0dXJlSG9va3NDb25maWdTbmFwc2hvdCxcbiAgdXBkYXRlSG9va3NDb25maWdTbmFwc2hvdCxcbn0gZnJvbSAnLi91dGlscy9ob29rcy9ob29rc0NvbmZpZ1NuYXBzaG90LmpzJ1xuaW1wb3J0IHsgaGFzV29ya3RyZWVDcmVhdGVIb29rIH0gZnJvbSAnLi91dGlscy9ob29rcy5qcydcbmltcG9ydCB7IGNoZWNrQW5kUmVzdG9yZUlUZXJtMkJhY2t1cCB9IGZyb20gJy4vdXRpbHMvaVRlcm1CYWNrdXAuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UmVjZW50QWN0aXZpdHkgfSBmcm9tICcuL3V0aWxzL2xvZ29WMlV0aWxzLmpzJ1xuaW1wb3J0IHsgbG9ja0N1cnJlbnRWZXJzaW9uIH0gZnJvbSAnLi91dGlscy9uYXRpdmVJbnN0YWxsZXIvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uTW9kZS5qcydcbmltcG9ydCB7IGdldFBsYW5TbHVnIH0gZnJvbSAnLi91dGlscy9wbGFucy5qcydcbmltcG9ydCB7IHNhdmVXb3JrdHJlZVN0YXRlIH0gZnJvbSAnLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IHByb2ZpbGVDaGVja3BvaW50IH0gZnJvbSAnLi91dGlscy9zdGFydHVwUHJvZmlsZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVUbXV4U2Vzc2lvbkZvcldvcmt0cmVlLFxuICBjcmVhdGVXb3JrdHJlZUZvclNlc3Npb24sXG4gIGdlbmVyYXRlVG11eFNlc3Npb25OYW1lLFxuICB3b3JrdHJlZUJyYW5jaE5hbWUsXG59IGZyb20gJy4vdXRpbHMvd29ya3RyZWUuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cChcbiAgY3dkOiBzdHJpbmcsXG4gIHBlcm1pc3Npb25Nb2RlOiBQZXJtaXNzaW9uTW9kZSxcbiAgYWxsb3dEYW5nZXJvdXNseVNraXBQZXJtaXNzaW9uczogYm9vbGVhbixcbiAgd29ya3RyZWVFbmFibGVkOiBib29sZWFuLFxuICB3b3JrdHJlZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdG11eEVuYWJsZWQ6IGJvb2xlYW4sXG4gIGN1c3RvbVNlc3Npb25JZD86IHN0cmluZyB8IG51bGwsXG4gIHdvcmt0cmVlUFJOdW1iZXI/OiBudW1iZXIsXG4gIG1lc3NhZ2luZ1NvY2tldFBhdGg/OiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9zdGFydGVkJylcblxuICAvLyBDaGVjayBmb3IgTm9kZS5qcyB2ZXJzaW9uIDwgMThcbiAgY29uc3Qgbm9kZVZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb24ubWF0Y2goL152KFxcZCspXFwuLyk/LlsxXVxuICBpZiAoIW5vZGVWZXJzaW9uIHx8IHBhcnNlSW50KG5vZGVWZXJzaW9uKSA8IDE4KSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBjaGFsay5ib2xkLnJlZChcbiAgICAgICAgJ0Vycm9yOiBDbGF1ZGUgQ29kZSByZXF1aXJlcyBOb2RlLmpzIHZlcnNpb24gMTggb3IgaGlnaGVyLicsXG4gICAgICApLFxuICAgIClcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIC8vIFNldCBjdXN0b20gc2Vzc2lvbiBJRCBpZiBwcm92aWRlZFxuICBpZiAoY3VzdG9tU2Vzc2lvbklkKSB7XG4gICAgc3dpdGNoU2Vzc2lvbihhc1Nlc3Npb25JZChjdXN0b21TZXNzaW9uSWQpKVxuICB9XG5cbiAgLy8gLS1iYXJlIC8gU0lNUExFOiBza2lwIFVEUyBtZXNzYWdpbmcgc2VydmVyIGFuZCB0ZWFtbWF0ZSBzbmFwc2hvdC5cbiAgLy8gU2NyaXB0ZWQgY2FsbHMgZG9uJ3QgcmVjZWl2ZSBpbmplY3RlZCBtZXNzYWdlcyBhbmQgZG9uJ3QgdXNlIHN3YXJtIHRlYW1tYXRlcy5cbiAgLy8gRXhwbGljaXQgLS1tZXNzYWdpbmctc29ja2V0LXBhdGggaXMgdGhlIGVzY2FwZSBoYXRjaCAocGVyICMyMzIyMiBnYXRlIHBhdHRlcm4pLlxuICBpZiAoIWlzQmFyZU1vZGUoKSB8fCBtZXNzYWdpbmdTb2NrZXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBTdGFydCBVRFMgbWVzc2FnaW5nIHNlcnZlciAoTWFjL0xpbnV4IG9ubHkpLlxuICAgIC8vIEVuYWJsZWQgYnkgZGVmYXVsdCBmb3IgYW50cyBcdTIwMTQgY3JlYXRlcyBhIHNvY2tldCBpbiB0bXBkaXIgaWYgbm9cbiAgICAvLyAtLW1lc3NhZ2luZy1zb2NrZXQtcGF0aCBpcyBwYXNzZWQuIEF3YWl0ZWQgc28gdGhlIHNlcnZlciBpcyBib3VuZFxuICAgIC8vIGFuZCAkQ0xBVURFX0NPREVfTUVTU0FHSU5HX1NPQ0tFVCBpcyBleHBvcnRlZCBiZWZvcmUgYW55IGhvb2tcbiAgICAvLyAoU2Vzc2lvblN0YXJ0IGluIHBhcnRpY3VsYXIpIGNhbiBzcGF3biBhbmQgc25hcHNob3QgcHJvY2Vzcy5lbnYuXG4gICAgaWYgKGZlYXR1cmUoJ1VEU19JTkJPWCcpKSB7XG4gICAgICBjb25zdCBtID0gYXdhaXQgaW1wb3J0KCcuL3V0aWxzL3Vkc01lc3NhZ2luZy5qcycpXG4gICAgICBhd2FpdCBtLnN0YXJ0VWRzTWVzc2FnaW5nKFxuICAgICAgICBtZXNzYWdpbmdTb2NrZXRQYXRoID8/IG0uZ2V0RGVmYXVsdFVkc1NvY2tldFBhdGgoKSxcbiAgICAgICAgeyBpc0V4cGxpY2l0OiBtZXNzYWdpbmdTb2NrZXRQYXRoICE9PSB1bmRlZmluZWQgfSxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvLyBUZWFtbWF0ZSBzbmFwc2hvdCBcdTIwMTQgU0lNUExFLW9ubHkgZ2F0ZSAobm8gZXNjYXBlIGhhdGNoLCBzd2FybSBub3QgdXNlZCBpbiBiYXJlKVxuICBpZiAoIWlzQmFyZU1vZGUoKSAmJiBpc0FnZW50U3dhcm1zRW5hYmxlZCgpKSB7XG4gICAgY29uc3QgeyBjYXB0dXJlVGVhbW1hdGVNb2RlU25hcHNob3QgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICcuL3V0aWxzL3N3YXJtL2JhY2tlbmRzL3RlYW1tYXRlTW9kZVNuYXBzaG90LmpzJ1xuICAgIClcbiAgICBjYXB0dXJlVGVhbW1hdGVNb2RlU25hcHNob3QoKVxuICB9XG5cbiAgLy8gVGVybWluYWwgYmFja3VwIHJlc3RvcmF0aW9uIFx1MjAxNCBpbnRlcmFjdGl2ZSBvbmx5LiBQcmludCBtb2RlIGRvZXNuJ3RcbiAgLy8gaW50ZXJhY3Qgd2l0aCB0ZXJtaW5hbCBzZXR0aW5nczsgdGhlIG5leHQgaW50ZXJhY3RpdmUgc2Vzc2lvbiB3aWxsXG4gIC8vIGRldGVjdCBhbmQgcmVzdG9yZSBhbnkgaW50ZXJydXB0ZWQgc2V0dXAuXG4gIGlmICghZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24oKSkge1xuICAgIC8vIGlUZXJtMiBiYWNrdXAgY2hlY2sgb25seSB3aGVuIHN3YXJtcyBlbmFibGVkXG4gICAgaWYgKGlzQWdlbnRTd2FybXNFbmFibGVkKCkpIHtcbiAgICAgIGNvbnN0IHJlc3RvcmVkSXRlcm0yQmFja3VwID0gYXdhaXQgY2hlY2tBbmRSZXN0b3JlSVRlcm0yQmFja3VwKClcbiAgICAgIGlmIChyZXN0b3JlZEl0ZXJtMkJhY2t1cC5zdGF0dXMgPT09ICdyZXN0b3JlZCcpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBjaGFsay55ZWxsb3coXG4gICAgICAgICAgICAnRGV0ZWN0ZWQgYW4gaW50ZXJydXB0ZWQgaVRlcm0yIHNldHVwLiBZb3VyIG9yaWdpbmFsIHNldHRpbmdzIGhhdmUgYmVlbiByZXN0b3JlZC4gWW91IG1heSBuZWVkIHRvIHJlc3RhcnQgaVRlcm0yIGZvciB0aGUgY2hhbmdlcyB0byB0YWtlIGVmZmVjdC4nLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAocmVzdG9yZWRJdGVybTJCYWNrdXAuc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgY2hhbGsucmVkKFxuICAgICAgICAgICAgYEZhaWxlZCB0byByZXN0b3JlIGlUZXJtMiBzZXR0aW5ncy4gUGxlYXNlIG1hbnVhbGx5IHJlc3RvcmUgeW91ciBvcmlnaW5hbCBzZXR0aW5ncyB3aXRoOiBkZWZhdWx0cyBpbXBvcnQgY29tLmdvb2dsZWNvZGUuaXRlcm0yICR7cmVzdG9yZWRJdGVybTJCYWNrdXAuYmFja3VwUGF0aH0uYCxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYW5kIHJlc3RvcmUgVGVybWluYWwuYXBwIGJhY2t1cCBpZiBzZXR1cCB3YXMgaW50ZXJydXB0ZWRcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdG9yZWRUZXJtaW5hbEJhY2t1cCA9IGF3YWl0IGNoZWNrQW5kUmVzdG9yZVRlcm1pbmFsQmFja3VwKClcbiAgICAgIGlmIChyZXN0b3JlZFRlcm1pbmFsQmFja3VwLnN0YXR1cyA9PT0gJ3Jlc3RvcmVkJykge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGNoYWxrLnllbGxvdyhcbiAgICAgICAgICAgICdEZXRlY3RlZCBhbiBpbnRlcnJ1cHRlZCBUZXJtaW5hbC5hcHAgc2V0dXAuIFlvdXIgb3JpZ2luYWwgc2V0dGluZ3MgaGF2ZSBiZWVuIHJlc3RvcmVkLiBZb3UgbWF5IG5lZWQgdG8gcmVzdGFydCBUZXJtaW5hbC5hcHAgZm9yIHRoZSBjaGFuZ2VzIHRvIHRha2UgZWZmZWN0LicsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChyZXN0b3JlZFRlcm1pbmFsQmFja3VwLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gcmVzdG9yZSBUZXJtaW5hbC5hcHAgc2V0dGluZ3MuIFBsZWFzZSBtYW51YWxseSByZXN0b3JlIHlvdXIgb3JpZ2luYWwgc2V0dGluZ3Mgd2l0aDogZGVmYXVsdHMgaW1wb3J0IGNvbS5hcHBsZS5UZXJtaW5hbCAke3Jlc3RvcmVkVGVybWluYWxCYWNrdXAuYmFja3VwUGF0aH0uYCxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIExvZyBidXQgZG9uJ3QgY3Jhc2ggaWYgVGVybWluYWwuYXBwIGJhY2t1cCByZXN0b3JhdGlvbiBmYWlsc1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gSU1QT1JUQU5UOiBzZXRDd2QoKSBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYW55IG90aGVyIGNvZGUgdGhhdCBkZXBlbmRzIG9uIHRoZSBjd2RcbiAgc2V0Q3dkKGN3ZClcblxuICAvLyBDYXB0dXJlIGhvb2tzIGNvbmZpZ3VyYXRpb24gc25hcHNob3QgdG8gYXZvaWQgaGlkZGVuIGhvb2sgbW9kaWZpY2F0aW9ucy5cbiAgLy8gSU1QT1JUQU5UOiBNdXN0IGJlIGNhbGxlZCBBRlRFUiBzZXRDd2QoKSBzbyBob29rcyBhcmUgbG9hZGVkIGZyb20gdGhlIGNvcnJlY3QgZGlyZWN0b3J5XG4gIGNvbnN0IGhvb2tzU3RhcnQgPSBEYXRlLm5vdygpXG4gIGNhcHR1cmVIb29rc0NvbmZpZ1NuYXBzaG90KClcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9ob29rc19jYXB0dXJlZCcsIHtcbiAgICBkdXJhdGlvbl9tczogRGF0ZS5ub3coKSAtIGhvb2tzU3RhcnQsXG4gIH0pXG5cbiAgLy8gSW5pdGlhbGl6ZSBGaWxlQ2hhbmdlZCBob29rIHdhdGNoZXIgXHUyMDE0IHN5bmMsIHJlYWRzIGhvb2sgY29uZmlnIHNuYXBzaG90XG4gIGluaXRpYWxpemVGaWxlQ2hhbmdlZFdhdGNoZXIoY3dkKVxuXG4gIC8vIEhhbmRsZSB3b3JrdHJlZSBjcmVhdGlvbiBpZiByZXF1ZXN0ZWRcbiAgLy8gSU1QT1JUQU5UOiB0aGlzIG11c3QgYmUgY2FsbGVkIGJlZmlvcmUgZ2V0Q29tbWFuZHMoKSwgb3RoZXJ3aXNlIC9lamVjdCB3b24ndCBiZSBhdmFpbGFibGUuXG4gIGlmICh3b3JrdHJlZUVuYWJsZWQpIHtcbiAgICAvLyBNaXJyb3JzIGJyaWRnZU1haW4udHM6IGhvb2stY29uZmlndXJlZCBzZXNzaW9ucyBjYW4gcHJvY2VlZCB3aXRob3V0IGdpdFxuICAgIC8vIHNvIGNyZWF0ZVdvcmt0cmVlRm9yU2Vzc2lvbigpIGNhbiBkZWxlZ2F0ZSB0byB0aGUgaG9vayAobm9uLWdpdCBWQ1MpLlxuICAgIGNvbnN0IGhhc0hvb2sgPSBoYXNXb3JrdHJlZUNyZWF0ZUhvb2soKVxuICAgIGNvbnN0IGluR2l0ID0gYXdhaXQgZ2V0SXNHaXQoKVxuICAgIGlmICghaGFzSG9vayAmJiAhaW5HaXQpIHtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICBjaGFsay5yZWQoXG4gICAgICAgICAgYEVycm9yOiBDYW4gb25seSB1c2UgLS13b3JrdHJlZSBpbiBhIGdpdCByZXBvc2l0b3J5LCBidXQgJHtjaGFsay5ib2xkKGN3ZCl9IGlzIG5vdCBhIGdpdCByZXBvc2l0b3J5LiBgICtcbiAgICAgICAgICAgIGBDb25maWd1cmUgYSBXb3JrdHJlZUNyZWF0ZSBob29rIGluIHNldHRpbmdzLmpzb24gdG8gdXNlIC0td29ya3RyZWUgd2l0aCBvdGhlciBWQ1Mgc3lzdGVtcy5cXG5gLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuXG4gICAgY29uc3Qgc2x1ZyA9IHdvcmt0cmVlUFJOdW1iZXJcbiAgICAgID8gYHByLSR7d29ya3RyZWVQUk51bWJlcn1gXG4gICAgICA6ICh3b3JrdHJlZU5hbWUgPz8gZ2V0UGxhblNsdWcoKSlcblxuICAgIC8vIEdpdCBwcmVhbWJsZSBydW5zIHdoZW5ldmVyIHdlJ3JlIGluIGEgZ2l0IHJlcG8gXHUyMDE0IGV2ZW4gaWYgYSBob29rIGlzXG4gICAgLy8gY29uZmlndXJlZCBcdTIwMTQgc28gLS10bXV4IGtlZXBzIHdvcmtpbmcgZm9yIGdpdCB1c2VycyB3aG8gYWxzbyBoYXZlIGFcbiAgICAvLyBXb3JrdHJlZUNyZWF0ZSBob29rLiBPbmx5IGhvb2stb25seSAobm9uLWdpdCkgbW9kZSBza2lwcyBpdC5cbiAgICBsZXQgdG11eFNlc3Npb25OYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBpZiAoaW5HaXQpIHtcbiAgICAgIC8vIFJlc29sdmUgdG8gbWFpbiByZXBvIHJvb3QgKGhhbmRsZXMgYmVpbmcgaW52b2tlZCBmcm9tIHdpdGhpbiBhIHdvcmt0cmVlKS5cbiAgICAgIC8vIGZpbmRDYW5vbmljYWxHaXRSb290IGlzIHN5bmMvZmlsZXN5c3RlbS1vbmx5L21lbW9pemVkOyB0aGUgdW5kZXJseWluZ1xuICAgICAgLy8gZmluZEdpdFJvb3QgY2FjaGUgd2FzIGFscmVhZHkgd2FybWVkIGJ5IGdldElzR2l0KCkgYWJvdmUsIHNvIHRoaXMgaXMgfmZyZWUuXG4gICAgICBjb25zdCBtYWluUmVwb1Jvb3QgPSBmaW5kQ2Fub25pY2FsR2l0Um9vdChnZXRDd2QoKSlcbiAgICAgIGlmICghbWFpblJlcG9Sb290KSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgICAgIGBFcnJvcjogQ291bGQgbm90IGRldGVybWluZSB0aGUgbWFpbiBnaXQgcmVwb3NpdG9yeSByb290LlxcbmAsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgaW5zaWRlIGEgd29ya3RyZWUsIHN3aXRjaCB0byB0aGUgbWFpbiByZXBvIGZvciB3b3JrdHJlZSBjcmVhdGlvblxuICAgICAgaWYgKG1haW5SZXBvUm9vdCAhPT0gKGZpbmRHaXRSb290KGdldEN3ZCgpKSA/PyBnZXRDd2QoKSkpIHtcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICd3b3JrdHJlZV9yZXNvbHZlZF90b19tYWluX3JlcG8nKVxuICAgICAgICBwcm9jZXNzLmNoZGlyKG1haW5SZXBvUm9vdClcbiAgICAgICAgc2V0Q3dkKG1haW5SZXBvUm9vdClcbiAgICAgIH1cblxuICAgICAgdG11eFNlc3Npb25OYW1lID0gdG11eEVuYWJsZWRcbiAgICAgICAgPyBnZW5lcmF0ZVRtdXhTZXNzaW9uTmFtZShtYWluUmVwb1Jvb3QsIHdvcmt0cmVlQnJhbmNoTmFtZShzbHVnKSlcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9uLWdpdCBob29rIG1vZGU6IG5vIGNhbm9uaWNhbCByb290IHRvIHJlc29sdmUsIHNvIG5hbWUgdGhlIHRtdXhcbiAgICAgIC8vIHNlc3Npb24gZnJvbSBjd2QgXHUyMDE0IGdlbmVyYXRlVG11eFNlc3Npb25OYW1lIG9ubHkgYmFzZW5hbWVzIHRoZSBwYXRoLlxuICAgICAgdG11eFNlc3Npb25OYW1lID0gdG11eEVuYWJsZWRcbiAgICAgICAgPyBnZW5lcmF0ZVRtdXhTZXNzaW9uTmFtZShnZXRDd2QoKSwgd29ya3RyZWVCcmFuY2hOYW1lKHNsdWcpKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGxldCB3b3JrdHJlZVNlc3Npb246IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlV29ya3RyZWVGb3JTZXNzaW9uPj5cbiAgICB0cnkge1xuICAgICAgd29ya3RyZWVTZXNzaW9uID0gYXdhaXQgY3JlYXRlV29ya3RyZWVGb3JTZXNzaW9uKFxuICAgICAgICBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgdG11eFNlc3Npb25OYW1lLFxuICAgICAgICB3b3JrdHJlZVBSTnVtYmVyID8geyBwck51bWJlcjogd29ya3RyZWVQUk51bWJlciB9IDogdW5kZWZpbmVkLFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgY2hhbGsucmVkKGBFcnJvciBjcmVhdGluZyB3b3JrdHJlZTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfVxcbmApLFxuICAgICAgKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3dvcmt0cmVlX2NyZWF0ZWQnLCB7IHRtdXhfZW5hYmxlZDogdG11eEVuYWJsZWQgfSlcblxuICAgIC8vIENyZWF0ZSB0bXV4IHNlc3Npb24gZm9yIHRoZSB3b3JrdHJlZSBpZiBlbmFibGVkXG4gICAgaWYgKHRtdXhFbmFibGVkICYmIHRtdXhTZXNzaW9uTmFtZSkge1xuICAgICAgY29uc3QgdG11eFJlc3VsdCA9IGF3YWl0IGNyZWF0ZVRtdXhTZXNzaW9uRm9yV29ya3RyZWUoXG4gICAgICAgIHRtdXhTZXNzaW9uTmFtZSxcbiAgICAgICAgd29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aCxcbiAgICAgIClcbiAgICAgIGlmICh0bXV4UmVzdWx0LmNyZWF0ZWQpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBjaGFsay5ncmVlbihcbiAgICAgICAgICAgIGBDcmVhdGVkIHRtdXggc2Vzc2lvbjogJHtjaGFsay5ib2xkKHRtdXhTZXNzaW9uTmFtZSl9XFxuVG8gYXR0YWNoOiAke2NoYWxrLmJvbGQoYHRtdXggYXR0YWNoIC10ICR7dG11eFNlc3Npb25OYW1lfWApfWAsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGNoYWxrLnllbGxvdyhcbiAgICAgICAgICAgIGBXYXJuaW5nOiBGYWlsZWQgdG8gY3JlYXRlIHRtdXggc2Vzc2lvbjogJHt0bXV4UmVzdWx0LmVycm9yfWAsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3MuY2hkaXIod29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aClcbiAgICBzZXRDd2Qod29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aClcbiAgICBzZXRPcmlnaW5hbEN3ZChnZXRDd2QoKSlcbiAgICAvLyAtLXdvcmt0cmVlIG1lYW5zIHRoZSB3b3JrdHJlZSBJUyB0aGUgc2Vzc2lvbidzIHByb2plY3QsIHNvIHNraWxscy9ob29rcy9cbiAgICAvLyBjcm9uL2V0Yy4gc2hvdWxkIHJlc29sdmUgaGVyZS4gKEVudGVyV29ya3RyZWVUb29sIG1pZC1zZXNzaW9uIGRvZXMgTk9UXG4gICAgLy8gdG91Y2ggcHJvamVjdFJvb3QgXHUyMDE0IHRoYXQncyBhIHRocm93YXdheSB3b3JrdHJlZSwgcHJvamVjdCBzdGF5cyBzdGFibGUuKVxuICAgIHNldFByb2plY3RSb290KGdldEN3ZCgpKVxuICAgIHNhdmVXb3JrdHJlZVN0YXRlKHdvcmt0cmVlU2Vzc2lvbilcbiAgICAvLyBDbGVhciBtZW1vcnkgZmlsZXMgY2FjaGUgc2luY2Ugb3JpZ2luYWxDd2QgaGFzIGNoYW5nZWRcbiAgICBjbGVhck1lbW9yeUZpbGVDYWNoZXMoKVxuICAgIC8vIFNldHRpbmdzIGNhY2hlIHdhcyBwb3B1bGF0ZWQgaW4gaW5pdCgpICh2aWEgYXBwbHlTYWZlQ29uZmlnRW52aXJvbm1lbnRWYXJpYWJsZXMpXG4gICAgLy8gYW5kIGFnYWluIGF0IGNhcHR1cmVIb29rc0NvbmZpZ1NuYXBzaG90KCkgYWJvdmUsIGJvdGggZnJvbSB0aGUgb3JpZ2luYWwgZGlyJ3NcbiAgICAvLyAuY2xhdWRlL3NldHRpbmdzLmpzb24uIFJlLXJlYWQgZnJvbSB0aGUgd29ya3RyZWUgYW5kIHJlLWNhcHR1cmUgaG9va3MuXG4gICAgdXBkYXRlSG9va3NDb25maWdTbmFwc2hvdCgpXG4gIH1cblxuICAvLyBCYWNrZ3JvdW5kIGpvYnMgLSBvbmx5IGNyaXRpY2FsIHJlZ2lzdHJhdGlvbnMgdGhhdCBtdXN0IGhhcHBlbiBiZWZvcmUgZmlyc3QgcXVlcnlcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9iYWNrZ3JvdW5kX2pvYnNfc3RhcnRpbmcnKVxuICAvLyBCdW5kbGVkIHNraWxscy9wbHVnaW5zIGFyZSByZWdpc3RlcmVkIGluIG1haW4udHN4IGJlZm9yZSB0aGUgcGFyYWxsZWxcbiAgLy8gZ2V0Q29tbWFuZHMoKSBraWNrIFx1MjAxNCBzZWUgY29tbWVudCB0aGVyZS4gTW92ZWQgb3V0IG9mIHNldHVwKCkgYmVjYXVzZVxuICAvLyB0aGUgYXdhaXQgcG9pbnRzIGFib3ZlIChzdGFydFVkc01lc3NhZ2luZywgfjIwbXMpIG1lYW50IGdldENvbW1hbmRzKClcbiAgLy8gcmFjZWQgYWhlYWQgYW5kIG1lbW9pemVkIGFuIGVtcHR5IGJ1bmRsZWRTa2lsbHMgbGlzdC5cbiAgaWYgKCFpc0JhcmVNb2RlKCkpIHtcbiAgICBpbml0U2Vzc2lvbk1lbW9yeSgpIC8vIFN5bmNocm9ub3VzIC0gcmVnaXN0ZXJzIGhvb2ssIGdhdGUgY2hlY2sgaGFwcGVucyBsYXppbHlcbiAgICBpZiAoZmVhdHVyZSgnQ09OVEVYVF9DT0xMQVBTRScpKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICA7KFxuICAgICAgICByZXF1aXJlKCcuL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4vc2VydmljZXMvY29udGV4dENvbGxhcHNlL2luZGV4LmpzJylcbiAgICAgICkuaW5pdENvbnRleHRDb2xsYXBzZSgpXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICB9XG4gIH1cbiAgdm9pZCBsb2NrQ3VycmVudFZlcnNpb24oKSAvLyBMb2NrIGN1cnJlbnQgdmVyc2lvbiB0byBwcmV2ZW50IGRlbGV0aW9uIGJ5IG90aGVyIHByb2Nlc3Nlc1xuICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHVwX2JhY2tncm91bmRfam9ic19sYXVuY2hlZCcpXG5cbiAgcHJvZmlsZUNoZWNrcG9pbnQoJ3NldHVwX2JlZm9yZV9wcmVmZXRjaCcpXG4gIC8vIFByZS1mZXRjaCBwcm9taXNlcyAtIG9ubHkgaXRlbXMgbmVlZGVkIGJlZm9yZSByZW5kZXJcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR1cF9wcmVmZXRjaF9zdGFydGluZycpXG4gIC8vIFdoZW4gQ0xBVURFX0NPREVfU1lOQ19QTFVHSU5fSU5TVEFMTCBpcyBzZXQsIHNraXAgYWxsIHBsdWdpbiBwcmVmZXRjaC5cbiAgLy8gVGhlIHN5bmMgaW5zdGFsbCBwYXRoIGluIHByaW50LnRzIGNhbGxzIHJlZnJlc2hQbHVnaW5TdGF0ZSgpIGFmdGVyXG4gIC8vIGluc3RhbGxpbmcsIHdoaWNoIHJlbG9hZHMgY29tbWFuZHMsIGhvb2tzLCBhbmQgYWdlbnRzLiBQcmVmZXRjaGluZyBoZXJlXG4gIC8vIHJhY2VzIHdpdGggdGhlIGluc3RhbGwgKGNvbmN1cnJlbnQgY29weVBsdWdpblRvVmVyc2lvbmVkQ2FjaGUgLyBjYWNoZVBsdWdpblxuICAvLyBvbiB0aGUgc2FtZSBkaXJlY3RvcmllcyksIGFuZCB0aGUgaG90LXJlbG9hZCBoYW5kbGVyIGZpcmVzIGNsZWFyUGx1Z2luQ2FjaGUoKVxuICAvLyBtaWQtaW5zdGFsbCB3aGVuIHBvbGljeVNldHRpbmdzIGFycml2ZXMuXG4gIGNvbnN0IHNraXBQbHVnaW5QcmVmZXRjaCA9XG4gICAgKGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uKCkgJiZcbiAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTEwpKSB8fFxuICAgIC8vIC0tYmFyZTogbG9hZFBsdWdpbkhvb2tzIFx1MjE5MiBsb2FkQWxsUGx1Z2lucyBpcyBmaWxlc3lzdGVtIHdvcmsgdGhhdCdzXG4gICAgLy8gd2FzdGVkIHdoZW4gZXhlY3V0ZUhvb2tzIGVhcmx5LXJldHVybnMgdW5kZXIgLS1iYXJlIGFueXdheS5cbiAgICBpc0JhcmVNb2RlKClcbiAgaWYgKCFza2lwUGx1Z2luUHJlZmV0Y2gpIHtcbiAgICB2b2lkIGdldENvbW1hbmRzKGdldFByb2plY3RSb290KCkpXG4gIH1cbiAgdm9pZCBpbXBvcnQoJy4vdXRpbHMvcGx1Z2lucy9sb2FkUGx1Z2luSG9va3MuanMnKS50aGVuKG0gPT4ge1xuICAgIGlmICghc2tpcFBsdWdpblByZWZldGNoKSB7XG4gICAgICB2b2lkIG0ubG9hZFBsdWdpbkhvb2tzKCkgLy8gUHJlLWxvYWQgcGx1Z2luIGhvb2tzIChjb25zdW1lZCBieSBwcm9jZXNzU2Vzc2lvblN0YXJ0SG9va3MgYmVmb3JlIHJlbmRlcilcbiAgICAgIG0uc2V0dXBQbHVnaW5Ib29rSG90UmVsb2FkKCkgLy8gU2V0IHVwIGhvdCByZWxvYWQgZm9yIHBsdWdpbiBob29rcyB3aGVuIHNldHRpbmdzIGNoYW5nZVxuICAgIH1cbiAgfSlcbiAgLy8gLS1iYXJlOiBza2lwIGF0dHJpYnV0aW9uIGhvb2sgaW5zdGFsbCArIHJlcG8gY2xhc3NpZmljYXRpb24gK1xuICAvLyBzZXNzaW9uLWZpbGUtYWNjZXNzIGFuYWx5dGljcyArIHRlYW0gbWVtb3J5IHdhdGNoZXIuIFRoZXNlIGFyZSBiYWNrZ3JvdW5kXG4gIC8vIGJvb2trZWVwaW5nIGZvciBjb21taXQgYXR0cmlidXRpb24gKyB1c2FnZSBtZXRyaWNzIFx1MjAxNCBzY3JpcHRlZCBjYWxscyBkb24ndFxuICAvLyBjb21taXQgY29kZSwgYW5kIHRoZSA0OW1zIGF0dHJpYnV0aW9uIGhvb2sgc3RhdCBjaGVjayAobWVhc3VyZWQpIGlzIHB1cmVcbiAgLy8gb3ZlcmhlYWQuIE5PVCBhbiBlYXJseS1yZXR1cm46IHRoZSAtLWRhbmdlcm91c2x5LXNraXAtcGVybWlzc2lvbnMgc2FmZXR5XG4gIC8vIGdhdGUsIHRlbmd1X3N0YXJ0ZWQgYmVhY29uLCBhbmQgYXBpS2V5SGVscGVyIHByZWZldGNoIGJlbG93IG11c3Qgc3RpbGwgcnVuLlxuICBpZiAoIWlzQmFyZU1vZGUoKSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnKSB7XG4gICAgICAvLyBQcmltZSByZXBvIGNsYXNzaWZpY2F0aW9uIGNhY2hlIGZvciBhdXRvLXVuZGVyY292ZXIgbW9kZS4gRGVmYXVsdCBpc1xuICAgICAgLy8gdW5kZXJjb3ZlciBPTiB1bnRpbCBwcm92ZW4gaW50ZXJuYWw7IGlmIHRoaXMgcmVzb2x2ZXMgdG8gaW50ZXJuYWwsIGNsZWFyXG4gICAgICAvLyB0aGUgcHJvbXB0IGNhY2hlIHNvIHRoZSBuZXh0IHR1cm4gcGlja3MgdXAgdGhlIE9GRiBzdGF0ZS5cbiAgICAgIHZvaWQgaW1wb3J0KCcuL3V0aWxzL2NvbW1pdEF0dHJpYnV0aW9uLmpzJykudGhlbihhc3luYyBtID0+IHtcbiAgICAgICAgaWYgKGF3YWl0IG0uaXNJbnRlcm5hbE1vZGVsUmVwbygpKSB7XG4gICAgICAgICAgY29uc3QgeyBjbGVhclN5c3RlbVByb21wdFNlY3Rpb25zIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnLi9jb25zdGFudHMvc3lzdGVtUHJvbXB0U2VjdGlvbnMuanMnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNsZWFyU3lzdGVtUHJvbXB0U2VjdGlvbnMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZmVhdHVyZSgnQ09NTUlUX0FUVFJJQlVUSU9OJykpIHtcbiAgICAgIC8vIER5bmFtaWMgaW1wb3J0IHRvIGVuYWJsZSBkZWFkIGNvZGUgZWxpbWluYXRpb24gKG1vZHVsZSBjb250YWlucyBleGNsdWRlZCBzdHJpbmdzKS5cbiAgICAgIC8vIERlZmVyIHRvIG5leHQgdGljayBzbyB0aGUgZ2l0IHN1YnByb2Nlc3Mgc3Bhd24gcnVucyBhZnRlciBmaXJzdCByZW5kZXJcbiAgICAgIC8vIHJhdGhlciB0aGFuIGR1cmluZyB0aGUgc2V0dXAoKSBtaWNyb3Rhc2sgd2luZG93LlxuICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgdm9pZCBpbXBvcnQoJy4vdXRpbHMvYXR0cmlidXRpb25Ib29rcy5qcycpLnRoZW4oXG4gICAgICAgICAgKHsgcmVnaXN0ZXJBdHRyaWJ1dGlvbkhvb2tzIH0pID0+IHtcbiAgICAgICAgICAgIHJlZ2lzdGVyQXR0cmlidXRpb25Ib29rcygpIC8vIFJlZ2lzdGVyIGF0dHJpYnV0aW9uIHRyYWNraW5nIGhvb2tzIChhbnQtb25seSBmZWF0dXJlKVxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICAgIHZvaWQgaW1wb3J0KCcuL3V0aWxzL3Nlc3Npb25GaWxlQWNjZXNzSG9va3MuanMnKS50aGVuKG0gPT5cbiAgICAgIG0ucmVnaXN0ZXJTZXNzaW9uRmlsZUFjY2Vzc0hvb2tzKCksXG4gICAgKSAvLyBSZWdpc3RlciBzZXNzaW9uIGZpbGUgYWNjZXNzIGFuYWx5dGljcyBob29rc1xuICAgIGlmIChmZWF0dXJlKCdURUFNTUVNJykpIHtcbiAgICAgIHZvaWQgaW1wb3J0KCcuL3NlcnZpY2VzL3RlYW1NZW1vcnlTeW5jL3dhdGNoZXIuanMnKS50aGVuKG0gPT5cbiAgICAgICAgbS5zdGFydFRlYW1NZW1vcnlXYXRjaGVyKCksXG4gICAgICApIC8vIFN0YXJ0IHRlYW0gbWVtb3J5IHN5bmMgd2F0Y2hlclxuICAgIH1cbiAgfVxuICBpbml0U2lua3MoKSAvLyBBdHRhY2ggZXJyb3IgbG9nICsgYW5hbHl0aWNzIHNpbmtzIGFuZCBkcmFpbiBxdWV1ZWQgZXZlbnRzXG5cbiAgLy8gU2Vzc2lvbi1zdWNjZXNzLXJhdGUgZGVub21pbmF0b3IuIEVtaXQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGFuYWx5dGljc1xuICAvLyBzaW5rIGlzIGF0dGFjaGVkIFx1MjAxNCBiZWZvcmUgYW55IHBhcnNpbmcsIGZldGNoaW5nLCBvciBJL08gdGhhdCBjb3VsZCB0aHJvdy5cbiAgLy8gaW5jLTM2OTQgKFAwIENIQU5HRUxPRyBjcmFzaCkgdGhyZXcgYXQgY2hlY2tGb3JSZWxlYXNlTm90ZXMgYmVsb3c7IGV2ZXJ5XG4gIC8vIGV2ZW50IGFmdGVyIHRoaXMgcG9pbnQgd2FzIGRlYWQuIFRoaXMgYmVhY29uIGlzIHRoZSBlYXJsaWVzdCByZWxpYWJsZVxuICAvLyBcInByb2Nlc3Mgc3RhcnRlZFwiIHNpZ25hbCBmb3IgcmVsZWFzZSBoZWFsdGggbW9uaXRvcmluZy5cbiAgbG9nRXZlbnQoJ3Rlbmd1X3N0YXJ0ZWQnLCB7fSlcblxuICB2b2lkIHByZWZldGNoQXBpS2V5RnJvbUFwaUtleUhlbHBlcklmU2FmZShnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbigpKSAvLyBQcmVmZXRjaCBzYWZlbHkgLSBvbmx5IGV4ZWN1dGVzIGlmIHRydXN0IGFscmVhZHkgY29uZmlybWVkXG4gIHByb2ZpbGVDaGVja3BvaW50KCdzZXR1cF9hZnRlcl9wcmVmZXRjaCcpXG5cbiAgLy8gUHJlLWZldGNoIGRhdGEgZm9yIExvZ28gdjIgLSBhd2FpdCB0byBlbnN1cmUgaXQncyByZWFkeSBiZWZvcmUgbG9nbyByZW5kZXJzLlxuICAvLyAtLWJhcmUgLyBTSU1QTEU6IHNraXAgXHUyMDE0IHJlbGVhc2Ugbm90ZXMgYXJlIGludGVyYWN0aXZlLVVJIGRpc3BsYXkgZGF0YSxcbiAgLy8gYW5kIGdldFJlY2VudEFjdGl2aXR5KCkgcmVhZHMgdXAgdG8gMTAgc2Vzc2lvbiBKU09OTCBmaWxlcy5cbiAgaWYgKCFpc0JhcmVNb2RlKCkpIHtcbiAgICBjb25zdCB7IGhhc1JlbGVhc2VOb3RlcyB9ID0gYXdhaXQgY2hlY2tGb3JSZWxlYXNlTm90ZXMoXG4gICAgICBnZXRHbG9iYWxDb25maWcoKS5sYXN0UmVsZWFzZU5vdGVzU2VlbixcbiAgICApXG4gICAgaWYgKGhhc1JlbGVhc2VOb3Rlcykge1xuICAgICAgYXdhaXQgZ2V0UmVjZW50QWN0aXZpdHkoKVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHBlcm1pc3Npb24gbW9kZSBpcyBzZXQgdG8gYnlwYXNzLCB2ZXJpZnkgd2UncmUgaW4gYSBzYWZlIGVudmlyb25tZW50XG4gIGlmIChcbiAgICBwZXJtaXNzaW9uTW9kZSA9PT0gJ2J5cGFzc1Blcm1pc3Npb25zJyB8fFxuICAgIGFsbG93RGFuZ2Vyb3VzbHlTa2lwUGVybWlzc2lvbnNcbiAgKSB7XG4gICAgLy8gQ2hlY2sgaWYgcnVubmluZyBhcyByb290L3N1ZG8gb24gVW5peC1saWtlIHN5c3RlbXNcbiAgICAvLyBBbGxvdyByb290IGlmIGluIGEgc2FuZGJveCAoZS5nLiwgVFBVIGRldnNwYWNlcyB0aGF0IHJlcXVpcmUgcm9vdClcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInICYmXG4gICAgICB0eXBlb2YgcHJvY2Vzcy5nZXR1aWQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHByb2Nlc3MuZ2V0dWlkKCkgPT09IDAgJiZcbiAgICAgIHByb2Nlc3MuZW52LklTX1NBTkRCT1ggIT09ICcxJyAmJlxuICAgICAgIWlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0JVQkJMRVdSQVApXG4gICAgKSB7XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgLS1kYW5nZXJvdXNseS1za2lwLXBlcm1pc3Npb25zIGNhbm5vdCBiZSB1c2VkIHdpdGggcm9vdC9zdWRvIHByaXZpbGVnZXMgZm9yIHNlY3VyaXR5IHJlYXNvbnNgLFxuICAgICAgKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJlxuICAgICAgLy8gU2tpcCBmb3IgRGVza3RvcCdzIGxvY2FsIGFnZW50IG1vZGUgXHUyMDE0IHNhbWUgdHJ1c3QgbW9kZWwgYXMgQ0NSL0JZT0NcbiAgICAgIC8vICh0cnVzdGVkIEFudGhyb3BpYy1tYW5hZ2VkIGxhdW5jaGVyIGludGVudGlvbmFsbHkgcHJlLWFwcHJvdmluZyBldmVyeXRoaW5nKS5cbiAgICAgIC8vIFByZWNlZGVudDogcGVybWlzc2lvblNldHVwLnRzOjg2MSwgYXBwbHlTZXR0aW5nc0NoYW5nZS50czo1NSAoUFIgIzE5MTE2KVxuICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5UUllQT0lOVCAhPT0gJ2xvY2FsLWFnZW50JyAmJlxuICAgICAgLy8gU2FtZSBmb3IgQ0NEIChDbGF1ZGUgQ29kZSBpbiBEZXNrdG9wKSBcdTIwMTQgYXBwcyMyOTEyNyBwYXNzZXMgdGhlIGZsYWdcbiAgICAgIC8vIHVuY29uZGl0aW9uYWxseSB0byB1bmxvY2sgbWlkLXNlc3Npb24gYnlwYXNzIHN3aXRjaGluZ1xuICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5UUllQT0lOVCAhPT0gJ2NsYXVkZS1kZXNrdG9wJ1xuICAgICkge1xuICAgICAgLy8gT25seSBhd2FpdCBpZiBwZXJtaXNzaW9uIG1vZGUgaXMgc2V0IHRvIGJ5cGFzc1xuICAgICAgY29uc3QgW2lzRG9ja2VyLCBoYXNJbnRlcm5ldF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGVudkR5bmFtaWMuZ2V0SXNEb2NrZXIoKSxcbiAgICAgICAgZW52Lmhhc0ludGVybmV0QWNjZXNzKCksXG4gICAgICBdKVxuICAgICAgY29uc3QgaXNCdWJibGV3cmFwID0gZW52RHluYW1pYy5nZXRJc0J1YmJsZXdyYXBTYW5kYm94KClcbiAgICAgIGNvbnN0IGlzU2FuZGJveCA9IHByb2Nlc3MuZW52LklTX1NBTkRCT1ggPT09ICcxJ1xuICAgICAgY29uc3QgaXNTYW5kYm94ZWQgPSBpc0RvY2tlciB8fCBpc0J1YmJsZXdyYXAgfHwgaXNTYW5kYm94XG4gICAgICBpZiAoIWlzU2FuZGJveGVkIHx8IGhhc0ludGVybmV0KSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgLS1kYW5nZXJvdXNseS1za2lwLXBlcm1pc3Npb25zIGNhbiBvbmx5IGJlIHVzZWQgaW4gRG9ja2VyL3NhbmRib3ggY29udGFpbmVycyB3aXRoIG5vIGludGVybmV0IGFjY2VzcyBidXQgZ290IERvY2tlcjogJHtpc0RvY2tlcn0sIEJ1YmJsZXdyYXA6ICR7aXNCdWJibGV3cmFwfSwgSVNfU0FOREJPWDogJHtpc1NhbmRib3h9LCBoYXNJbnRlcm5ldDogJHtoYXNJbnRlcm5ldH1gLFxuICAgICAgICApXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBMb2cgdGVuZ3VfZXhpdCBldmVudCBmcm9tIHRoZSBsYXN0IHNlc3Npb24/XG4gIGNvbnN0IHByb2plY3RDb25maWcgPSBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpXG4gIGlmIChcbiAgICBwcm9qZWN0Q29uZmlnLmxhc3RDb3N0ICE9PSB1bmRlZmluZWQgJiZcbiAgICBwcm9qZWN0Q29uZmlnLmxhc3REdXJhdGlvbiAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9leGl0Jywge1xuICAgICAgbGFzdF9zZXNzaW9uX2Nvc3Q6IHByb2plY3RDb25maWcubGFzdENvc3QsXG4gICAgICBsYXN0X3Nlc3Npb25fYXBpX2R1cmF0aW9uOiBwcm9qZWN0Q29uZmlnLmxhc3RBUElEdXJhdGlvbixcbiAgICAgIGxhc3Rfc2Vzc2lvbl90b29sX2R1cmF0aW9uOiBwcm9qZWN0Q29uZmlnLmxhc3RUb29sRHVyYXRpb24sXG4gICAgICBsYXN0X3Nlc3Npb25fZHVyYXRpb246IHByb2plY3RDb25maWcubGFzdER1cmF0aW9uLFxuICAgICAgbGFzdF9zZXNzaW9uX2xpbmVzX2FkZGVkOiBwcm9qZWN0Q29uZmlnLmxhc3RMaW5lc0FkZGVkLFxuICAgICAgbGFzdF9zZXNzaW9uX2xpbmVzX3JlbW92ZWQ6IHByb2plY3RDb25maWcubGFzdExpbmVzUmVtb3ZlZCxcbiAgICAgIGxhc3Rfc2Vzc2lvbl90b3RhbF9pbnB1dF90b2tlbnM6IHByb2plY3RDb25maWcubGFzdFRvdGFsSW5wdXRUb2tlbnMsXG4gICAgICBsYXN0X3Nlc3Npb25fdG90YWxfb3V0cHV0X3Rva2VuczogcHJvamVjdENvbmZpZy5sYXN0VG90YWxPdXRwdXRUb2tlbnMsXG4gICAgICBsYXN0X3Nlc3Npb25fdG90YWxfY2FjaGVfY3JlYXRpb25faW5wdXRfdG9rZW5zOlxuICAgICAgICBwcm9qZWN0Q29uZmlnLmxhc3RUb3RhbENhY2hlQ3JlYXRpb25JbnB1dFRva2VucyxcbiAgICAgIGxhc3Rfc2Vzc2lvbl90b3RhbF9jYWNoZV9yZWFkX2lucHV0X3Rva2VuczpcbiAgICAgICAgcHJvamVjdENvbmZpZy5sYXN0VG90YWxDYWNoZVJlYWRJbnB1dFRva2VucyxcbiAgICAgIGxhc3Rfc2Vzc2lvbl9mcHNfYXZlcmFnZTogcHJvamVjdENvbmZpZy5sYXN0RnBzQXZlcmFnZSxcbiAgICAgIGxhc3Rfc2Vzc2lvbl9mcHNfbG93XzFfcGN0OiBwcm9qZWN0Q29uZmlnLmxhc3RGcHNMb3cxUGN0LFxuICAgICAgbGFzdF9zZXNzaW9uX2lkOlxuICAgICAgICBwcm9qZWN0Q29uZmlnLmxhc3RTZXNzaW9uSWQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIC4uLnByb2plY3RDb25maWcubGFzdFNlc3Npb25NZXRyaWNzLFxuICAgIH0pXG4gICAgLy8gTm90ZTogV2UgaW50ZW50aW9uYWxseSBkb24ndCBjbGVhciB0aGVzZSB2YWx1ZXMgYWZ0ZXIgbG9nZ2luZy5cbiAgICAvLyBUaGV5J3JlIG5lZWRlZCBmb3IgY29zdCByZXN0b3JhdGlvbiB3aGVuIHJlc3VtaW5nIHNlc3Npb25zLlxuICAgIC8vIFRoZSB2YWx1ZXMgd2lsbCBiZSBvdmVyd3JpdHRlbiB3aGVuIHRoZSBuZXh0IHNlc3Npb24gZXhpdHMuXG4gIH1cbn1cbiIsICIvKipcbiAqIFNlc3Npb24gTWVtb3J5IGF1dG9tYXRpY2FsbHkgbWFpbnRhaW5zIGEgbWFya2Rvd24gZmlsZSB3aXRoIG5vdGVzIGFib3V0IHRoZSBjdXJyZW50IGNvbnZlcnNhdGlvbi5cbiAqIEl0IHJ1bnMgcGVyaW9kaWNhbGx5IGluIHRoZSBiYWNrZ3JvdW5kIHVzaW5nIGEgZm9ya2VkIHN1YmFnZW50IHRvIGV4dHJhY3Qga2V5IGluZm9ybWF0aW9uXG4gKiB3aXRob3V0IGludGVycnVwdGluZyB0aGUgbWFpbiBjb252ZXJzYXRpb24gZmxvdy5cbiAqL1xuXG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC1lcy9tZW1vaXplLmpzJ1xuaW1wb3J0IHsgZ2V0SXNSZW1vdGVNb2RlIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb21wdHMuanMnXG5pbXBvcnQgeyBnZXRTeXN0ZW1Db250ZXh0LCBnZXRVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQuanMnXG5pbXBvcnQgdHlwZSB7IENhblVzZVRvb2xGbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNhblVzZVRvb2wuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2wsIFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IEZJTEVfRURJVF9UT09MX05BTUUgfSBmcm9tICcuLi8uLi90b29scy9GaWxlRWRpdFRvb2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHtcbiAgRmlsZVJlYWRUb29sLFxuICB0eXBlIE91dHB1dCBhcyBGaWxlUmVhZFRvb2xPdXRwdXQsXG59IGZyb20gJy4uLy4uL3Rvb2xzL0ZpbGVSZWFkVG9vbC9GaWxlUmVhZFRvb2wuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi91dGlscy9hcnJheS5qcydcbmltcG9ydCB7XG4gIGNyZWF0ZUNhY2hlU2FmZVBhcmFtcyxcbiAgY3JlYXRlU3ViYWdlbnRDb250ZXh0LFxuICBydW5Gb3JrZWRBZ2VudCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ya2VkQWdlbnQuanMnXG5pbXBvcnQgeyBnZXRGc0ltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBSRVBMSG9va0NvbnRleHQsXG4gIHJlZ2lzdGVyUG9zdFNhbXBsaW5nSG9vayxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaG9va3MvcG9zdFNhbXBsaW5nSG9va3MuanMnXG5pbXBvcnQge1xuICBjcmVhdGVVc2VyTWVzc2FnZSxcbiAgaGFzVG9vbENhbGxzSW5MYXN0QXNzaXN0YW50VHVybixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uTWVtb3J5RGlyLFxuICBnZXRTZXNzaW9uTWVtb3J5UGF0aCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvZmlsZXN5c3RlbS5qcydcbmltcG9ydCB7IHNlcXVlbnRpYWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXF1ZW50aWFsLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuLi8uLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHsgZ2V0VG9rZW5Vc2FnZSwgdG9rZW5Db3VudFdpdGhFc3RpbWF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvdG9rZW5zLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBpc0F1dG9Db21wYWN0RW5hYmxlZCB9IGZyb20gJy4uL2NvbXBhY3QvYXV0b0NvbXBhY3QuanMnXG5pbXBvcnQge1xuICBidWlsZFNlc3Npb25NZW1vcnlVcGRhdGVQcm9tcHQsXG4gIGxvYWRTZXNzaW9uTWVtb3J5VGVtcGxhdGUsXG59IGZyb20gJy4vcHJvbXB0cy5qcydcbmltcG9ydCB7XG4gIERFRkFVTFRfU0VTU0lPTl9NRU1PUllfQ09ORklHLFxuICBnZXRTZXNzaW9uTWVtb3J5Q29uZmlnLFxuICBnZXRUb29sQ2FsbHNCZXR3ZWVuVXBkYXRlcyxcbiAgaGFzTWV0SW5pdGlhbGl6YXRpb25UaHJlc2hvbGQsXG4gIGhhc01ldFVwZGF0ZVRocmVzaG9sZCxcbiAgaXNTZXNzaW9uTWVtb3J5SW5pdGlhbGl6ZWQsXG4gIG1hcmtFeHRyYWN0aW9uQ29tcGxldGVkLFxuICBtYXJrRXh0cmFjdGlvblN0YXJ0ZWQsXG4gIG1hcmtTZXNzaW9uTWVtb3J5SW5pdGlhbGl6ZWQsXG4gIHJlY29yZEV4dHJhY3Rpb25Ub2tlbkNvdW50LFxuICB0eXBlIFNlc3Npb25NZW1vcnlDb25maWcsXG4gIHNldExhc3RTdW1tYXJpemVkTWVzc2FnZUlkLFxuICBzZXRTZXNzaW9uTWVtb3J5Q29uZmlnLFxufSBmcm9tICcuL3Nlc3Npb25NZW1vcnlVdGlscy5qcydcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRmVhdHVyZSBHYXRlIGFuZCBDb25maWcgKENhY2hlZCAtIE5vbi1ibG9ja2luZylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRoZXNlIGZ1bmN0aW9ucyByZXR1cm4gY2FjaGVkIHZhbHVlcyBmcm9tIGRpc2sgaW1tZWRpYXRlbHkgd2l0aG91dCBibG9ja2luZ1xuLy8gb24gR3Jvd3RoQm9vayBpbml0aWFsaXphdGlvbi4gVmFsdWVzIG1heSBiZSBzdGFsZSBidXQgYXJlIHVwZGF0ZWQgaW4gYmFja2dyb3VuZC5cblxuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCBnZXRFcnJub0NvZGUgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQge1xuICBnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEUsXG4gIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFLFxufSBmcm9tICcuLi9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcblxuLyoqXG4gKiBDaGVjayBpZiBzZXNzaW9uIG1lbW9yeSBmZWF0dXJlIGlzIGVuYWJsZWQuXG4gKiBVc2VzIGNhY2hlZCBnYXRlIHZhbHVlIC0gcmV0dXJucyBpbW1lZGlhdGVseSB3aXRob3V0IGJsb2NraW5nLlxuICovXG5mdW5jdGlvbiBpc1Nlc3Npb25NZW1vcnlHYXRlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9zZXNzaW9uX21lbW9yeScsIGZhbHNlKVxufVxuXG4vKipcbiAqIEdldCBzZXNzaW9uIG1lbW9yeSBjb25maWcgZnJvbSBjYWNoZS5cbiAqIFJldHVybnMgaW1tZWRpYXRlbHkgd2l0aG91dCBibG9ja2luZyAtIHZhbHVlIG1heSBiZSBzdGFsZS5cbiAqL1xuZnVuY3Rpb24gZ2V0U2Vzc2lvbk1lbW9yeVJlbW90ZUNvbmZpZygpOiBQYXJ0aWFsPFNlc3Npb25NZW1vcnlDb25maWc+IHtcbiAgcmV0dXJuIGdldER5bmFtaWNDb25maWdfQ0FDSEVEX01BWV9CRV9TVEFMRTxQYXJ0aWFsPFNlc3Npb25NZW1vcnlDb25maWc+PihcbiAgICAndGVuZ3Vfc21fY29uZmlnJyxcbiAgICB7fSxcbiAgKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2R1bGUgU3RhdGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGxhc3RNZW1vcnlNZXNzYWdlVXVpZDogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbi8qKlxuICogUmVzZXQgdGhlIGxhc3QgbWVtb3J5IG1lc3NhZ2UgVVVJRCAoZm9yIHRlc3RpbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldExhc3RNZW1vcnlNZXNzYWdlVXVpZCgpOiB2b2lkIHtcbiAgbGFzdE1lbW9yeU1lc3NhZ2VVdWlkID0gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGNvdW50VG9vbENhbGxzU2luY2UoXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gIHNpbmNlVXVpZDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKTogbnVtYmVyIHtcbiAgbGV0IHRvb2xDYWxsQ291bnQgPSAwXG4gIGxldCBmb3VuZFN0YXJ0ID0gc2luY2VVdWlkID09PSBudWxsIHx8IHNpbmNlVXVpZCA9PT0gdW5kZWZpbmVkXG5cbiAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgaWYgKCFmb3VuZFN0YXJ0KSB7XG4gICAgICBpZiAobWVzc2FnZS51dWlkID09PSBzaW5jZVV1aWQpIHtcbiAgICAgICAgZm91bmRTdGFydCA9IHRydWVcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgdG9vbENhbGxDb3VudCArPSBjb3VudChjb250ZW50LCBibG9jayA9PiBibG9jay50eXBlID09PSAndG9vbF91c2UnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b29sQ2FsbENvdW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRFeHRyYWN0TWVtb3J5KG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBib29sZWFuIHtcbiAgLy8gQ2hlY2sgaWYgd2UndmUgbWV0IHRoZSBpbml0aWFsaXphdGlvbiB0aHJlc2hvbGRcbiAgLy8gVXNlcyB0b3RhbCBjb250ZXh0IHdpbmRvdyB0b2tlbnMgKHNhbWUgYXMgYXV0b2NvbXBhY3QpIGZvciBjb25zaXN0ZW50IGJlaGF2aW9yXG4gIGNvbnN0IGN1cnJlbnRUb2tlbkNvdW50ID0gdG9rZW5Db3VudFdpdGhFc3RpbWF0aW9uKG1lc3NhZ2VzKVxuICBpZiAoIWlzU2Vzc2lvbk1lbW9yeUluaXRpYWxpemVkKCkpIHtcbiAgICBpZiAoIWhhc01ldEluaXRpYWxpemF0aW9uVGhyZXNob2xkKGN1cnJlbnRUb2tlbkNvdW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIG1hcmtTZXNzaW9uTWVtb3J5SW5pdGlhbGl6ZWQoKVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UndmUgbWV0IHRoZSBtaW5pbXVtIHRva2VucyBiZXR3ZWVuIHVwZGF0ZXMgdGhyZXNob2xkXG4gIC8vIFVzZXMgY29udGV4dCB3aW5kb3cgZ3Jvd3RoIHNpbmNlIGxhc3QgZXh0cmFjdGlvbiAoc2FtZSBtZXRyaWMgYXMgaW5pdCB0aHJlc2hvbGQpXG4gIGNvbnN0IGhhc01ldFRva2VuVGhyZXNob2xkID0gaGFzTWV0VXBkYXRlVGhyZXNob2xkKGN1cnJlbnRUb2tlbkNvdW50KVxuXG4gIC8vIENoZWNrIGlmIHdlJ3ZlIG1ldCB0aGUgdG9vbCBjYWxscyB0aHJlc2hvbGRcbiAgY29uc3QgdG9vbENhbGxzU2luY2VMYXN0VXBkYXRlID0gY291bnRUb29sQ2FsbHNTaW5jZShcbiAgICBtZXNzYWdlcyxcbiAgICBsYXN0TWVtb3J5TWVzc2FnZVV1aWQsXG4gIClcbiAgY29uc3QgaGFzTWV0VG9vbENhbGxUaHJlc2hvbGQgPVxuICAgIHRvb2xDYWxsc1NpbmNlTGFzdFVwZGF0ZSA+PSBnZXRUb29sQ2FsbHNCZXR3ZWVuVXBkYXRlcygpXG5cbiAgLy8gQ2hlY2sgaWYgdGhlIGxhc3QgYXNzaXN0YW50IHR1cm4gaGFzIG5vIHRvb2wgY2FsbHMgKHNhZmUgdG8gZXh0cmFjdClcbiAgY29uc3QgaGFzVG9vbENhbGxzSW5MYXN0VHVybiA9IGhhc1Rvb2xDYWxsc0luTGFzdEFzc2lzdGFudFR1cm4obWVzc2FnZXMpXG5cbiAgLy8gVHJpZ2dlciBleHRyYWN0aW9uIHdoZW46XG4gIC8vIDEuIEJvdGggdGhyZXNob2xkcyBhcmUgbWV0ICh0b2tlbnMgQU5EIHRvb2wgY2FsbHMpLCBPUlxuICAvLyAyLiBObyB0b29sIGNhbGxzIGluIGxhc3QgdHVybiBBTkQgdG9rZW4gdGhyZXNob2xkIGlzIG1ldFxuICAvLyAgICAodG8gZW5zdXJlIHdlIGV4dHJhY3QgYXQgbmF0dXJhbCBjb252ZXJzYXRpb24gYnJlYWtzKVxuICAvL1xuICAvLyBJTVBPUlRBTlQ6IFRoZSB0b2tlbiB0aHJlc2hvbGQgKG1pbmltdW1Ub2tlbnNCZXR3ZWVuVXBkYXRlKSBpcyBBTFdBWVMgcmVxdWlyZWQuXG4gIC8vIEV2ZW4gaWYgdGhlIHRvb2wgY2FsbCB0aHJlc2hvbGQgaXMgbWV0LCBleHRyYWN0aW9uIHdvbid0IGhhcHBlbiB1bnRpbCB0aGVcbiAgLy8gdG9rZW4gdGhyZXNob2xkIGlzIGFsc28gc2F0aXNmaWVkLiBUaGlzIHByZXZlbnRzIGV4Y2Vzc2l2ZSBleHRyYWN0aW9ucy5cbiAgY29uc3Qgc2hvdWxkRXh0cmFjdCA9XG4gICAgKGhhc01ldFRva2VuVGhyZXNob2xkICYmIGhhc01ldFRvb2xDYWxsVGhyZXNob2xkKSB8fFxuICAgIChoYXNNZXRUb2tlblRocmVzaG9sZCAmJiAhaGFzVG9vbENhbGxzSW5MYXN0VHVybilcblxuICBpZiAoc2hvdWxkRXh0cmFjdCkge1xuICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV1cbiAgICBpZiAobGFzdE1lc3NhZ2U/LnV1aWQpIHtcbiAgICAgIGxhc3RNZW1vcnlNZXNzYWdlVXVpZCA9IGxhc3RNZXNzYWdlLnV1aWRcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNlc3Npb25NZW1vcnlGaWxlKFxuICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4pOiBQcm9taXNlPHsgbWVtb3J5UGF0aDogc3RyaW5nOyBjdXJyZW50TWVtb3J5OiBzdHJpbmcgfT4ge1xuICBjb25zdCBmcyA9IGdldEZzSW1wbGVtZW50YXRpb24oKVxuXG4gIC8vIFNldCB1cCBkaXJlY3RvcnkgYW5kIGZpbGVcbiAgY29uc3Qgc2Vzc2lvbk1lbW9yeURpciA9IGdldFNlc3Npb25NZW1vcnlEaXIoKVxuICBhd2FpdCBmcy5ta2RpcihzZXNzaW9uTWVtb3J5RGlyLCB7IG1vZGU6IDBvNzAwIH0pXG5cbiAgY29uc3QgbWVtb3J5UGF0aCA9IGdldFNlc3Npb25NZW1vcnlQYXRoKClcblxuICAvLyBDcmVhdGUgdGhlIG1lbW9yeSBmaWxlIGlmIGl0IGRvZXNuJ3QgZXhpc3QgKHd4ID0gT19DUkVBVHxPX0VYQ0wpXG4gIHRyeSB7XG4gICAgYXdhaXQgd3JpdGVGaWxlKG1lbW9yeVBhdGgsICcnLCB7XG4gICAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICAgIG1vZGU6IDBvNjAwLFxuICAgICAgZmxhZzogJ3d4JyxcbiAgICB9KVxuICAgIC8vIE9ubHkgbG9hZCB0ZW1wbGF0ZSBpZiBmaWxlIHdhcyBqdXN0IGNyZWF0ZWRcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGxvYWRTZXNzaW9uTWVtb3J5VGVtcGxhdGUoKVxuICAgIGF3YWl0IHdyaXRlRmlsZShtZW1vcnlQYXRoLCB0ZW1wbGF0ZSwge1xuICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgICBtb2RlOiAwbzYwMCxcbiAgICB9KVxuICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgIGlmIChjb2RlICE9PSAnRUVYSVNUJykge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfVxuXG4gIC8vIERyb3AgYW55IGNhY2hlZCBlbnRyeSBzbyBGaWxlUmVhZFRvb2wncyBkZWR1cCBkb2Vzbid0IHJldHVybiBhXG4gIC8vIGZpbGVfdW5jaGFuZ2VkIHN0dWIgXHUyMDE0IHdlIG5lZWQgdGhlIGFjdHVhbCBjb250ZW50LiBUaGUgUmVhZCByZXBvcHVsYXRlcyBpdC5cbiAgdG9vbFVzZUNvbnRleHQucmVhZEZpbGVTdGF0ZS5kZWxldGUobWVtb3J5UGF0aClcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmlsZVJlYWRUb29sLmNhbGwoXG4gICAgeyBmaWxlX3BhdGg6IG1lbW9yeVBhdGggfSxcbiAgICB0b29sVXNlQ29udGV4dCxcbiAgKVxuICBsZXQgY3VycmVudE1lbW9yeSA9ICcnXG5cbiAgY29uc3Qgb3V0cHV0ID0gcmVzdWx0LmRhdGEgYXMgRmlsZVJlYWRUb29sT3V0cHV0XG4gIGlmIChvdXRwdXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgY3VycmVudE1lbW9yeSA9IG91dHB1dC5maWxlLmNvbnRlbnRcbiAgfVxuXG4gIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX21lbW9yeV9maWxlX3JlYWQnLCB7XG4gICAgY29udGVudF9sZW5ndGg6IGN1cnJlbnRNZW1vcnkubGVuZ3RoLFxuICB9KVxuXG4gIHJldHVybiB7IG1lbW9yeVBhdGgsIGN1cnJlbnRNZW1vcnkgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgc2Vzc2lvbiBtZW1vcnkgY29uZmlnIGZyb20gcmVtb3RlIGNvbmZpZyAobGF6eSBpbml0aWFsaXphdGlvbikuXG4gKiBNZW1vaXplZCAtIG9ubHkgcnVucyBvbmNlIHBlciBzZXNzaW9uLCBzdWJzZXF1ZW50IGNhbGxzIHJldHVybiBpbW1lZGlhdGVseS5cbiAqIFVzZXMgY2FjaGVkIGNvbmZpZyB2YWx1ZXMgLSBub24tYmxvY2tpbmcuXG4gKi9cbmNvbnN0IGluaXRTZXNzaW9uTWVtb3J5Q29uZmlnSWZOZWVkZWQgPSBtZW1vaXplKCgpOiB2b2lkID0+IHtcbiAgLy8gTG9hZCBjb25maWcgZnJvbSBjYWNoZSAobm9uLWJsb2NraW5nLCBtYXkgYmUgc3RhbGUpXG4gIGNvbnN0IHJlbW90ZUNvbmZpZyA9IGdldFNlc3Npb25NZW1vcnlSZW1vdGVDb25maWcoKVxuXG4gIC8vIE9ubHkgdXNlIHJlbW90ZSB2YWx1ZXMgaWYgdGhleSBhcmUgZXhwbGljaXRseSBzZXQgKG5vbi16ZXJvIHBvc2l0aXZlIG51bWJlcnMpXG4gIC8vIFRoaXMgZW5zdXJlcyBzZW5zaWJsZSBkZWZhdWx0cyBhcmVuJ3Qgb3ZlcnJpZGRlbiBieSB6ZXJvIHZhbHVlc1xuICBjb25zdCBjb25maWc6IFNlc3Npb25NZW1vcnlDb25maWcgPSB7XG4gICAgbWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXQ6XG4gICAgICByZW1vdGVDb25maWcubWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXQgJiZcbiAgICAgIHJlbW90ZUNvbmZpZy5taW5pbXVtTWVzc2FnZVRva2Vuc1RvSW5pdCA+IDBcbiAgICAgICAgPyByZW1vdGVDb25maWcubWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXRcbiAgICAgICAgOiBERUZBVUxUX1NFU1NJT05fTUVNT1JZX0NPTkZJRy5taW5pbXVtTWVzc2FnZVRva2Vuc1RvSW5pdCxcbiAgICBtaW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZTpcbiAgICAgIHJlbW90ZUNvbmZpZy5taW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZSAmJlxuICAgICAgcmVtb3RlQ29uZmlnLm1pbmltdW1Ub2tlbnNCZXR3ZWVuVXBkYXRlID4gMFxuICAgICAgICA/IHJlbW90ZUNvbmZpZy5taW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZVxuICAgICAgICA6IERFRkFVTFRfU0VTU0lPTl9NRU1PUllfQ09ORklHLm1pbmltdW1Ub2tlbnNCZXR3ZWVuVXBkYXRlLFxuICAgIHRvb2xDYWxsc0JldHdlZW5VcGRhdGVzOlxuICAgICAgcmVtb3RlQ29uZmlnLnRvb2xDYWxsc0JldHdlZW5VcGRhdGVzICYmXG4gICAgICByZW1vdGVDb25maWcudG9vbENhbGxzQmV0d2VlblVwZGF0ZXMgPiAwXG4gICAgICAgID8gcmVtb3RlQ29uZmlnLnRvb2xDYWxsc0JldHdlZW5VcGRhdGVzXG4gICAgICAgIDogREVGQVVMVF9TRVNTSU9OX01FTU9SWV9DT05GSUcudG9vbENhbGxzQmV0d2VlblVwZGF0ZXMsXG4gIH1cbiAgc2V0U2Vzc2lvbk1lbW9yeUNvbmZpZyhjb25maWcpXG59KVxuXG4vKipcbiAqIFNlc3Npb24gbWVtb3J5IHBvc3Qtc2FtcGxpbmcgaG9vayB0aGF0IGV4dHJhY3RzIGFuZCB1cGRhdGVzIHNlc3Npb24gbm90ZXNcbiAqL1xuLy8gVHJhY2sgaWYgd2UndmUgbG9nZ2VkIHRoZSBnYXRlIGNoZWNrIGZhaWx1cmUgdGhpcyBzZXNzaW9uICh0byBhdm9pZCBzcGFtKVxubGV0IGhhc0xvZ2dlZEdhdGVGYWlsdXJlID0gZmFsc2VcblxuY29uc3QgZXh0cmFjdFNlc3Npb25NZW1vcnkgPSBzZXF1ZW50aWFsKGFzeW5jIGZ1bmN0aW9uIChcbiAgY29udGV4dDogUkVQTEhvb2tDb250ZXh0LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgbWVzc2FnZXMsIHRvb2xVc2VDb250ZXh0LCBxdWVyeVNvdXJjZSB9ID0gY29udGV4dFxuXG4gIC8vIE9ubHkgcnVuIHNlc3Npb24gbWVtb3J5IG9uIG1haW4gUkVQTCB0aHJlYWRcbiAgaWYgKHF1ZXJ5U291cmNlICE9PSAncmVwbF9tYWluX3RocmVhZCcpIHtcbiAgICAvLyBEb24ndCBsb2cgdGhpcyAtIGl0J3MgZXhwZWN0ZWQgZm9yIHN1YmFnZW50cywgdGVhbW1hdGVzLCBldGMuXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDaGVjayBnYXRlIGxhemlseSB3aGVuIGhvb2sgcnVucyAoY2FjaGVkLCBub24tYmxvY2tpbmcpXG4gIGlmICghaXNTZXNzaW9uTWVtb3J5R2F0ZUVuYWJsZWQoKSkge1xuICAgIC8vIExvZyBnYXRlIGZhaWx1cmUgb25jZSBwZXIgc2Vzc2lvbiAoYW50LW9ubHkpXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYgIWhhc0xvZ2dlZEdhdGVGYWlsdXJlKSB7XG4gICAgICBoYXNMb2dnZWRHYXRlRmFpbHVyZSA9IHRydWVcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX21lbW9yeV9nYXRlX2Rpc2FibGVkJywge30pXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSBjb25maWcgZnJvbSByZW1vdGUgKGxhenksIG9ubHkgb25jZSlcbiAgaW5pdFNlc3Npb25NZW1vcnlDb25maWdJZk5lZWRlZCgpXG5cbiAgaWYgKCFzaG91bGRFeHRyYWN0TWVtb3J5KG1lc3NhZ2VzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbWFya0V4dHJhY3Rpb25TdGFydGVkKClcblxuICAvLyBDcmVhdGUgaXNvbGF0ZWQgY29udGV4dCBmb3Igc2V0dXAgdG8gYXZvaWQgcG9sbHV0aW5nIHBhcmVudCdzIGNhY2hlXG4gIGNvbnN0IHNldHVwQ29udGV4dCA9IGNyZWF0ZVN1YmFnZW50Q29udGV4dCh0b29sVXNlQ29udGV4dClcblxuICAvLyBTZXQgdXAgZmlsZSBzeXN0ZW0gYW5kIHJlYWQgY3VycmVudCBzdGF0ZSB3aXRoIGlzb2xhdGVkIGNvbnRleHRcbiAgY29uc3QgeyBtZW1vcnlQYXRoLCBjdXJyZW50TWVtb3J5IH0gPVxuICAgIGF3YWl0IHNldHVwU2Vzc2lvbk1lbW9yeUZpbGUoc2V0dXBDb250ZXh0KVxuXG4gIC8vIENyZWF0ZSBleHRyYWN0aW9uIG1lc3NhZ2VcbiAgY29uc3QgdXNlclByb21wdCA9IGF3YWl0IGJ1aWxkU2Vzc2lvbk1lbW9yeVVwZGF0ZVByb21wdChcbiAgICBjdXJyZW50TWVtb3J5LFxuICAgIG1lbW9yeVBhdGgsXG4gIClcblxuICAvLyBSdW4gc2Vzc2lvbiBtZW1vcnkgZXh0cmFjdGlvbiB1c2luZyBydW5Gb3JrZWRBZ2VudCBmb3IgcHJvbXB0IGNhY2hpbmdcbiAgLy8gcnVuRm9ya2VkQWdlbnQgY3JlYXRlcyBhbiBpc29sYXRlZCBjb250ZXh0IHRvIHByZXZlbnQgbXV0YXRpb24gb2YgcGFyZW50IHN0YXRlXG4gIC8vIFBhc3Mgc2V0dXBDb250ZXh0LnJlYWRGaWxlU3RhdGUgc28gdGhlIGZvcmtlZCBhZ2VudCBjYW4gZWRpdCB0aGUgbWVtb3J5IGZpbGVcbiAgYXdhaXQgcnVuRm9ya2VkQWdlbnQoe1xuICAgIHByb21wdE1lc3NhZ2VzOiBbY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiB1c2VyUHJvbXB0IH0pXSxcbiAgICBjYWNoZVNhZmVQYXJhbXM6IGNyZWF0ZUNhY2hlU2FmZVBhcmFtcyhjb250ZXh0KSxcbiAgICBjYW5Vc2VUb29sOiBjcmVhdGVNZW1vcnlGaWxlQ2FuVXNlVG9vbChtZW1vcnlQYXRoKSxcbiAgICBxdWVyeVNvdXJjZTogJ3Nlc3Npb25fbWVtb3J5JyxcbiAgICBmb3JrTGFiZWw6ICdzZXNzaW9uX21lbW9yeScsXG4gICAgb3ZlcnJpZGVzOiB7IHJlYWRGaWxlU3RhdGU6IHNldHVwQ29udGV4dC5yZWFkRmlsZVN0YXRlIH0sXG4gIH0pXG5cbiAgLy8gTG9nIGV4dHJhY3Rpb24gZXZlbnQgZm9yIHRyYWNraW5nIGZyZXF1ZW5jeVxuICAvLyBVc2UgdGhlIHRva2VuIHVzYWdlIGZyb20gdGhlIGxhc3QgbWVzc2FnZSBpbiB0aGUgY29udmVyc2F0aW9uXG4gIGNvbnN0IGxhc3RNZXNzYWdlID0gbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV1cbiAgY29uc3QgdXNhZ2UgPSBsYXN0TWVzc2FnZSA/IGdldFRva2VuVXNhZ2UobGFzdE1lc3NhZ2UpIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNvbmZpZyA9IGdldFNlc3Npb25NZW1vcnlDb25maWcoKVxuICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnlfZXh0cmFjdGlvbicsIHtcbiAgICBpbnB1dF90b2tlbnM6IHVzYWdlPy5pbnB1dF90b2tlbnMsXG4gICAgb3V0cHV0X3Rva2VuczogdXNhZ2U/Lm91dHB1dF90b2tlbnMsXG4gICAgY2FjaGVfcmVhZF9pbnB1dF90b2tlbnM6IHVzYWdlPy5jYWNoZV9yZWFkX2lucHV0X3Rva2VucyA/PyB1bmRlZmluZWQsXG4gICAgY2FjaGVfY3JlYXRpb25faW5wdXRfdG9rZW5zOlxuICAgICAgdXNhZ2U/LmNhY2hlX2NyZWF0aW9uX2lucHV0X3Rva2VucyA/PyB1bmRlZmluZWQsXG4gICAgY29uZmlnX21pbl9tZXNzYWdlX3Rva2Vuc190b19pbml0OiBjb25maWcubWluaW11bU1lc3NhZ2VUb2tlbnNUb0luaXQsXG4gICAgY29uZmlnX21pbl90b2tlbnNfYmV0d2Vlbl91cGRhdGU6IGNvbmZpZy5taW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZSxcbiAgICBjb25maWdfdG9vbF9jYWxsc19iZXR3ZWVuX3VwZGF0ZXM6IGNvbmZpZy50b29sQ2FsbHNCZXR3ZWVuVXBkYXRlcyxcbiAgfSlcblxuICAvLyBSZWNvcmQgdGhlIGNvbnRleHQgc2l6ZSBhdCBleHRyYWN0aW9uIGZvciB0cmFja2luZyBtaW5pbXVtVG9rZW5zQmV0d2VlblVwZGF0ZVxuICByZWNvcmRFeHRyYWN0aW9uVG9rZW5Db3VudCh0b2tlbkNvdW50V2l0aEVzdGltYXRpb24obWVzc2FnZXMpKVxuXG4gIC8vIFVwZGF0ZSBsYXN0U3VtbWFyaXplZE1lc3NhZ2VJZCBhZnRlciBzdWNjZXNzZnVsIGNvbXBsZXRpb25cbiAgdXBkYXRlTGFzdFN1bW1hcml6ZWRNZXNzYWdlSWRJZlNhZmUobWVzc2FnZXMpXG5cbiAgbWFya0V4dHJhY3Rpb25Db21wbGV0ZWQoKVxufSlcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlc3Npb24gbWVtb3J5IGJ5IHJlZ2lzdGVyaW5nIHRoZSBwb3N0LXNhbXBsaW5nIGhvb2suXG4gKiBUaGlzIGlzIHN5bmNocm9ub3VzIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyBkdXJpbmcgc3RhcnR1cC5cbiAqIFRoZSBnYXRlIGNoZWNrIGFuZCBjb25maWcgbG9hZGluZyBoYXBwZW4gbGF6aWx5IHdoZW4gdGhlIGhvb2sgcnVucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTZXNzaW9uTWVtb3J5KCk6IHZvaWQge1xuICBpZiAoZ2V0SXNSZW1vdGVNb2RlKCkpIHJldHVyblxuICAvLyBTZXNzaW9uIG1lbW9yeSBpcyB1c2VkIGZvciBjb21wYWN0aW9uLCBzbyByZXNwZWN0IGF1dG8tY29tcGFjdCBzZXR0aW5nc1xuICBjb25zdCBhdXRvQ29tcGFjdEVuYWJsZWQgPSBpc0F1dG9Db21wYWN0RW5hYmxlZCgpXG5cbiAgLy8gTG9nIGluaXRpYWxpemF0aW9uIHN0YXRlIChhbnQtb25seSB0byBhdm9pZCBub2lzZSBpbiBleHRlcm5hbCBsb2dzKVxuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX21lbW9yeV9pbml0Jywge1xuICAgICAgYXV0b19jb21wYWN0X2VuYWJsZWQ6IGF1dG9Db21wYWN0RW5hYmxlZCxcbiAgICB9KVxuICB9XG5cbiAgaWYgKCFhdXRvQ29tcGFjdEVuYWJsZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFJlZ2lzdGVyIGhvb2sgdW5jb25kaXRpb25hbGx5IC0gZ2F0ZSBjaGVjayBoYXBwZW5zIGxhemlseSB3aGVuIGhvb2sgcnVuc1xuICByZWdpc3RlclBvc3RTYW1wbGluZ0hvb2soZXh0cmFjdFNlc3Npb25NZW1vcnkpXG59XG5cbmV4cG9ydCB0eXBlIE1hbnVhbEV4dHJhY3Rpb25SZXN1bHQgPSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgbWVtb3J5UGF0aD86IHN0cmluZ1xuICBlcnJvcj86IHN0cmluZ1xufVxuXG4vKipcbiAqIE1hbnVhbGx5IHRyaWdnZXIgc2Vzc2lvbiBtZW1vcnkgZXh0cmFjdGlvbiwgYnlwYXNzaW5nIHRocmVzaG9sZCBjaGVja3MuXG4gKiBVc2VkIGJ5IHRoZSAvc3VtbWFyeSBjb21tYW5kLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFudWFsbHlFeHRyYWN0U2Vzc2lvbk1lbW9yeShcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgdG9vbFVzZUNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuKTogUHJvbWlzZTxNYW51YWxFeHRyYWN0aW9uUmVzdWx0PiB7XG4gIGlmIChtZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdObyBtZXNzYWdlcyB0byBzdW1tYXJpemUnIH1cbiAgfVxuICBtYXJrRXh0cmFjdGlvblN0YXJ0ZWQoKVxuXG4gIHRyeSB7XG4gICAgLy8gQ3JlYXRlIGlzb2xhdGVkIGNvbnRleHQgZm9yIHNldHVwIHRvIGF2b2lkIHBvbGx1dGluZyBwYXJlbnQncyBjYWNoZVxuICAgIGNvbnN0IHNldHVwQ29udGV4dCA9IGNyZWF0ZVN1YmFnZW50Q29udGV4dCh0b29sVXNlQ29udGV4dClcblxuICAgIC8vIFNldCB1cCBmaWxlIHN5c3RlbSBhbmQgcmVhZCBjdXJyZW50IHN0YXRlIHdpdGggaXNvbGF0ZWQgY29udGV4dFxuICAgIGNvbnN0IHsgbWVtb3J5UGF0aCwgY3VycmVudE1lbW9yeSB9ID1cbiAgICAgIGF3YWl0IHNldHVwU2Vzc2lvbk1lbW9yeUZpbGUoc2V0dXBDb250ZXh0KVxuXG4gICAgLy8gQ3JlYXRlIGV4dHJhY3Rpb24gbWVzc2FnZVxuICAgIGNvbnN0IHVzZXJQcm9tcHQgPSBhd2FpdCBidWlsZFNlc3Npb25NZW1vcnlVcGRhdGVQcm9tcHQoXG4gICAgICBjdXJyZW50TWVtb3J5LFxuICAgICAgbWVtb3J5UGF0aCxcbiAgICApXG5cbiAgICAvLyBHZXQgc3lzdGVtIHByb21wdCBmb3IgY2FjaGUtc2FmZSBwYXJhbXNcbiAgICBjb25zdCB7IHRvb2xzLCBtYWluTG9vcE1vZGVsIH0gPSB0b29sVXNlQ29udGV4dC5vcHRpb25zXG4gICAgY29uc3QgW3Jhd1N5c3RlbVByb21wdCwgdXNlckNvbnRleHQsIHN5c3RlbUNvbnRleHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0U3lzdGVtUHJvbXB0KHRvb2xzLCBtYWluTG9vcE1vZGVsKSxcbiAgICAgIGdldFVzZXJDb250ZXh0KCksXG4gICAgICBnZXRTeXN0ZW1Db250ZXh0KCksXG4gICAgXSlcbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBhc1N5c3RlbVByb21wdChyYXdTeXN0ZW1Qcm9tcHQpXG5cbiAgICAvLyBSdW4gc2Vzc2lvbiBtZW1vcnkgZXh0cmFjdGlvbiB1c2luZyBydW5Gb3JrZWRBZ2VudFxuICAgIGF3YWl0IHJ1bkZvcmtlZEFnZW50KHtcbiAgICAgIHByb21wdE1lc3NhZ2VzOiBbY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiB1c2VyUHJvbXB0IH0pXSxcbiAgICAgIGNhY2hlU2FmZVBhcmFtczoge1xuICAgICAgICBzeXN0ZW1Qcm9tcHQsXG4gICAgICAgIHVzZXJDb250ZXh0LFxuICAgICAgICBzeXN0ZW1Db250ZXh0LFxuICAgICAgICB0b29sVXNlQ29udGV4dDogc2V0dXBDb250ZXh0LFxuICAgICAgICBmb3JrQ29udGV4dE1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgIH0sXG4gICAgICBjYW5Vc2VUb29sOiBjcmVhdGVNZW1vcnlGaWxlQ2FuVXNlVG9vbChtZW1vcnlQYXRoKSxcbiAgICAgIHF1ZXJ5U291cmNlOiAnc2Vzc2lvbl9tZW1vcnknLFxuICAgICAgZm9ya0xhYmVsOiAnc2Vzc2lvbl9tZW1vcnlfbWFudWFsJyxcbiAgICAgIG92ZXJyaWRlczogeyByZWFkRmlsZVN0YXRlOiBzZXR1cENvbnRleHQucmVhZEZpbGVTdGF0ZSB9LFxuICAgIH0pXG5cbiAgICAvLyBMb2cgbWFudWFsIGV4dHJhY3Rpb24gZXZlbnRcbiAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9tZW1vcnlfbWFudWFsX2V4dHJhY3Rpb24nLCB7fSlcblxuICAgIC8vIFJlY29yZCB0aGUgY29udGV4dCBzaXplIGF0IGV4dHJhY3Rpb24gZm9yIHRyYWNraW5nIG1pbmltdW1Ub2tlbnNCZXR3ZWVuVXBkYXRlXG4gICAgcmVjb3JkRXh0cmFjdGlvblRva2VuQ291bnQodG9rZW5Db3VudFdpdGhFc3RpbWF0aW9uKG1lc3NhZ2VzKSlcblxuICAgIC8vIFVwZGF0ZSBsYXN0U3VtbWFyaXplZE1lc3NhZ2VJZCBhZnRlciBzdWNjZXNzZnVsIGNvbXBsZXRpb25cbiAgICB1cGRhdGVMYXN0U3VtbWFyaXplZE1lc3NhZ2VJZElmU2FmZShtZXNzYWdlcylcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lbW9yeVBhdGggfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UoZXJyb3IpLFxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBtYXJrRXh0cmFjdGlvbkNvbXBsZXRlZCgpXG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjYW5Vc2VUb29sIGZ1bmN0aW9uIHRoYXQgb25seSBhbGxvd3MgRWRpdCBmb3IgdGhlIGV4YWN0IG1lbW9yeSBmaWxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVtb3J5RmlsZUNhblVzZVRvb2wobWVtb3J5UGF0aDogc3RyaW5nKTogQ2FuVXNlVG9vbEZuIHtcbiAgcmV0dXJuIGFzeW5jICh0b29sOiBUb29sLCBpbnB1dDogdW5rbm93bikgPT4ge1xuICAgIGlmIChcbiAgICAgIHRvb2wubmFtZSA9PT0gRklMRV9FRElUX1RPT0xfTkFNRSAmJlxuICAgICAgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgaW5wdXQgIT09IG51bGwgJiZcbiAgICAgICdmaWxlX3BhdGgnIGluIGlucHV0XG4gICAgKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGlucHV0LmZpbGVfcGF0aFxuICAgICAgaWYgKHR5cGVvZiBmaWxlUGF0aCA9PT0gJ3N0cmluZycgJiYgZmlsZVBhdGggPT09IG1lbW9yeVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHsgYmVoYXZpb3I6ICdhbGxvdycgYXMgY29uc3QsIHVwZGF0ZWRJbnB1dDogaW5wdXQgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYmVoYXZpb3I6ICdkZW55JyBhcyBjb25zdCxcbiAgICAgIG1lc3NhZ2U6IGBvbmx5ICR7RklMRV9FRElUX1RPT0xfTkFNRX0gb24gJHttZW1vcnlQYXRofSBpcyBhbGxvd2VkYCxcbiAgICAgIGRlY2lzaW9uUmVhc29uOiB7XG4gICAgICAgIHR5cGU6ICdvdGhlcicgYXMgY29uc3QsXG4gICAgICAgIHJlYXNvbjogYG9ubHkgJHtGSUxFX0VESVRfVE9PTF9OQU1FfSBvbiAke21lbW9yeVBhdGh9IGlzIGFsbG93ZWRgLFxuICAgICAgfSxcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBVcGRhdGVzIGxhc3RTdW1tYXJpemVkTWVzc2FnZUlkIGFmdGVyIHN1Y2Nlc3NmdWwgZXh0cmFjdGlvbi5cbiAqIE9ubHkgc2V0cyBpdCBpZiB0aGUgbGFzdCBtZXNzYWdlIGRvZXNuJ3QgaGF2ZSB0b29sIGNhbGxzICh0byBhdm9pZCBvcnBoYW5lZCB0b29sX3Jlc3VsdHMpLlxuICovXG5mdW5jdGlvbiB1cGRhdGVMYXN0U3VtbWFyaXplZE1lc3NhZ2VJZElmU2FmZShtZXNzYWdlczogTWVzc2FnZVtdKTogdm9pZCB7XG4gIGlmICghaGFzVG9vbENhbGxzSW5MYXN0QXNzaXN0YW50VHVybihtZXNzYWdlcykpIHtcbiAgICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RNZXNzYWdlPy51dWlkKSB7XG4gICAgICBzZXRMYXN0U3VtbWFyaXplZE1lc3NhZ2VJZChsYXN0TWVzc2FnZS51dWlkKVxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGNvcHlGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJVGVybTJTZXR1cENvbXBsZXRlKCk6IHZvaWQge1xuICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIGl0ZXJtMlNldHVwSW5Qcm9ncmVzczogZmFsc2UsXG4gIH0pKVxufVxuXG5mdW5jdGlvbiBnZXRJdGVybTJSZWNvdmVyeUluZm8oKToge1xuICBpblByb2dyZXNzOiBib29sZWFuXG4gIGJhY2t1cFBhdGg6IHN0cmluZyB8IG51bGxcbn0ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICByZXR1cm4ge1xuICAgIGluUHJvZ3Jlc3M6IGNvbmZpZy5pdGVybTJTZXR1cEluUHJvZ3Jlc3MgPz8gZmFsc2UsXG4gICAgYmFja3VwUGF0aDogY29uZmlnLml0ZXJtMkJhY2t1cFBhdGggfHwgbnVsbCxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJVGVybTJQbGlzdFBhdGgoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oXG4gICAgaG9tZWRpcigpLFxuICAgICdMaWJyYXJ5JyxcbiAgICAnUHJlZmVyZW5jZXMnLFxuICAgICdjb20uZ29vZ2xlY29kZS5pdGVybTIucGxpc3QnLFxuICApXG59XG5cbnR5cGUgUmVzdG9yZVJlc3VsdCA9XG4gIHwge1xuICAgICAgc3RhdHVzOiAncmVzdG9yZWQnIHwgJ25vX2JhY2t1cCdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgICAgYmFja3VwUGF0aDogc3RyaW5nXG4gICAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbmRSZXN0b3JlSVRlcm0yQmFja3VwKCk6IFByb21pc2U8UmVzdG9yZVJlc3VsdD4ge1xuICBjb25zdCB7IGluUHJvZ3Jlc3MsIGJhY2t1cFBhdGggfSA9IGdldEl0ZXJtMlJlY292ZXJ5SW5mbygpXG4gIGlmICghaW5Qcm9ncmVzcykge1xuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgaWYgKCFiYWNrdXBQYXRoKSB7XG4gICAgbWFya0lUZXJtMlNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzdGF0KGJhY2t1cFBhdGgpXG4gIH0gY2F0Y2gge1xuICAgIG1hcmtJVGVybTJTZXR1cENvbXBsZXRlKClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub19iYWNrdXAnIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUZpbGUoYmFja3VwUGF0aCwgZ2V0SVRlcm0yUGxpc3RQYXRoKCkpXG5cbiAgICBtYXJrSVRlcm0yU2V0dXBDb21wbGV0ZSgpXG4gICAgcmV0dXJuIHsgc3RhdHVzOiAncmVzdG9yZWQnIH1cbiAgfSBjYXRjaCAocmVzdG9yZUVycm9yKSB7XG4gICAgbG9nRXJyb3IoXG4gICAgICBuZXcgRXJyb3IoYEZhaWxlZCB0byByZXN0b3JlIGlUZXJtMiBzZXR0aW5ncyB3aXRoOiAke3Jlc3RvcmVFcnJvcn1gKSxcbiAgICApXG4gICAgbWFya0lUZXJtMlNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ2ZhaWxlZCcsIGJhY2t1cFBhdGggfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFRQTs7O0FDYkE7QUFDQTtBQUNBQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBc0JB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QixPQUFPLFFBQVEsV0FBVyxjQUMxQixRQUFRLE9BQU8sTUFBTSxLQUNyQixRQUFRLElBQUksZUFBZSxPQUMzQixDQUFDLFlBQVksUUFBUSxJQUFJLHNCQUFzQixHQUMvQztBQUVBLGNBQVE7QUFBQSxRQUNOO0FBQUEsTUFDRjtBQUNBLGNBQVEsS0FBSyxDQUFDO0FBQUEsSUFDaEI7QUFFQSxRQUNFLFFBQVEsSUFBSSxjQUFjO0FBQUE7QUFBQTtBQUFBLElBSTFCLFFBQVEsSUFBSSwyQkFBMkI7QUFBQTtBQUFBLElBR3ZDLFFBQVEsSUFBSSwyQkFBMkIsa0JBQ3ZDO0FBRUEsWUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsUUFDaEQsV0FBVyxZQUFZO0FBQUEsUUFDdkIsSUFBSSxrQkFBa0I7QUFBQSxNQUN4QixDQUFDO0FBQ0QsWUFBTSxlQUFlLFdBQVcsdUJBQXVCO0FBQ3ZELFlBQU0sWUFBWSxRQUFRLElBQUksZUFBZTtBQUM3QyxZQUFNLGNBQWMsWUFBWSxnQkFBZ0I7QUFDaEQsVUFBSSxDQUFDLGVBQWUsYUFBYTtBQUUvQixnQkFBUTtBQUFBLFVBQ04sd0hBQXdILFFBQVEsaUJBQWlCLFlBQVksaUJBQWlCLFNBQVMsa0JBQWtCLFdBQVc7QUFBQSxRQUN0TjtBQUNBLGdCQUFRLEtBQUssQ0FBQztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFFBQVEsSUFBSSxhQUFhLFFBQVE7QUFDbkM7QUFBQSxFQUNGO0FBR0EsUUFBTSxnQkFBZ0Isd0JBQXdCO0FBQzlDLE1BQ0UsY0FBYyxhQUFhLFVBQzNCLGNBQWMsaUJBQWlCLFFBQy9CO0FBQ0EsYUFBUyxjQUFjO0FBQUEsTUFDckIsbUJBQW1CLGNBQWM7QUFBQSxNQUNqQywyQkFBMkIsY0FBYztBQUFBLE1BQ3pDLDRCQUE0QixjQUFjO0FBQUEsTUFDMUMsdUJBQXVCLGNBQWM7QUFBQSxNQUNyQywwQkFBMEIsY0FBYztBQUFBLE1BQ3hDLDRCQUE0QixjQUFjO0FBQUEsTUFDMUMsaUNBQWlDLGNBQWM7QUFBQSxNQUMvQyxrQ0FBa0MsY0FBYztBQUFBLE1BQ2hELGdEQUNFLGNBQWM7QUFBQSxNQUNoQiw0Q0FDRSxjQUFjO0FBQUEsTUFDaEIsMEJBQTBCLGNBQWM7QUFBQSxNQUN4Qyw0QkFBNEIsY0FBYztBQUFBLE1BQzFDLGlCQUNFLGNBQWM7QUFBQSxNQUNoQixHQUFHLGNBQWM7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFJSDtBQUNGOyIsCiAgIm5hbWVzIjogWyJpbml0X3Byb21wdHMiXQp9Cg==
