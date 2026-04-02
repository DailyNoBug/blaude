#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ask,
  buildSideQuestionFallbackParams
} from "./chunk-K5X2SVOX.mjs";
import {
  StructuredIO,
  cronJitterConfig_exports,
  cronScheduler_exports,
  extractInboundMessageFields,
  init_cronJitterConfig,
  init_cronScheduler,
  ndjsonSafeStringify,
  outputSchema,
  permissionPromptToolResultToPermissionDecision,
  reconcileMarketplaces
} from "./chunk-46W7DAJR.mjs";
import {
  detectAndUninstallDelistedPlugins
} from "./chunk-MKMWAXNL.mjs";
import "./chunk-OK53HJD7.mjs";
import {
  restoreAgentFromSession,
  restoreSessionStateFromLog,
  skillChangeDetector
} from "./chunk-NF2WBZVN.mjs";
import "./chunk-PIEUNPJU.mjs";
import {
  externalMetadataToAppState
} from "./chunk-LVAUD4JA.mjs";
import {
  getSessionState,
  notifySessionMetadataChanged,
  notifySessionStateChanged,
  setPermissionModeChangedListener,
  setSessionMetadataChangedListener,
  setSessionStateChangedListener
} from "./chunk-7ZIL7QM5.mjs";
import {
  init_udsMessaging,
  udsMessaging_exports
} from "./chunk-QLZJRPHV.mjs";
import {
  HybridTransport,
  WebSocketTransport
} from "./chunk-NAMV3GIN.mjs";
import {
  CCRClient,
  CCRInitError,
  SSETransport
} from "./chunk-AVZQW3S6.mjs";
import "./chunk-WBJL7DYB.mjs";
import {
  resolveAndPrepend
} from "./chunk-TFLLQ5VM.mjs";
import {
  getPollIntervalConfig
} from "./chunk-E6K6IUF5.mjs";
import "./chunk-AWPTVMZY.mjs";
import {
  init_toolPool,
  mergeAndFilterTools
} from "./chunk-N275W4SR.mjs";
import {
  init_refresh,
  refreshActivePlugins
} from "./chunk-32365OKC.mjs";
import {
  downloadUserSettings,
  init_settingsSync,
  redownloadUserSettings
} from "./chunk-S5SAKHMA.mjs";
import {
  init_mappers,
  toInternalMessages,
  toSDKRateLimitInfo
} from "./chunk-TYT35UNL.mjs";
import {
  generateSessionTitle,
  init_sessionTitle
} from "./chunk-CUFNINNZ.mjs";
import "./chunk-BGIVZ46A.mjs";
import "./chunk-KHM4QVLJ.mjs";
import {
  ChannelMessageNotificationSchema,
  findChannelEntry,
  gateChannelServer,
  init_channelNotification,
  wrapChannelMessage
} from "./chunk-NVJGKF76.mjs";
import {
  init_channelAllowlist,
  isChannelAllowlisted,
  isChannelsEnabled
} from "./chunk-5VAWKU3E.mjs";
import "./chunk-QUU2KZ75.mjs";
import {
  collectContextData,
  init_context_noninteractive
} from "./chunk-7DGEJS33.mjs";
import "./chunk-P42WH56V.mjs";
import {
  init_sideQuestion,
  runSideQuestion
} from "./chunk-G6YXNG5C.mjs";
import "./chunk-HWCIXFFE.mjs";
import "./chunk-KVW7KIZE.mjs";
import {
  DEFAULT_OUTPUT_STYLE_NAME,
  EFFORT_LEVELS,
  FILE_EDIT_TOOL_NAME,
  FILE_READ_TOOL_NAME,
  FILE_WRITE_TOOL_NAME,
  GLOB_TOOL_NAME,
  GREP_TOOL_NAME,
  LIST_MCP_RESOURCES_TOOL_NAME,
  LSP_TOOL_NAME,
  NOTEBOOK_EDIT_TOOL_NAME,
  OAuthService,
  SHELL_TOOL_NAMES,
  SandboxManager,
  WEB_SEARCH_TOOL_NAME,
  applySettingsChange,
  areMcpConfigsEqual,
  asSessionId,
  assembleToolPool,
  atomicWriteToZipCache,
  buildBridgeConnectUrl,
  checkGroveForNonInteractive,
  cleanupSessionPluginCache,
  clearCommandsCache,
  clearMarketplacesCache,
  clearPluginCache,
  clearServerCache,
  commandBelongsToServer,
  connectToServer,
  coordinatorMode_exports,
  createAbortController,
  createCombinedAbortSignal,
  createModelSwitchBreadcrumbs,
  createSyntheticOutputTool,
  dequeue,
  dequeueAllMatching,
  doesMessageExistInSession,
  drainSdkEvents,
  enqueue,
  executeNotificationHooks,
  extractMemories_exports,
  extractReadFilesFromMessages,
  extractTextContent,
  fetchToolsForClient,
  fileHistoryCanRestore,
  fileHistoryEnabled,
  fileHistoryGetDiffStats,
  fileHistoryRewind,
  filterMcpServersByPolicy,
  filterToolsByDenyRules,
  filterToolsByServer,
  finalizePendingAsyncHooks,
  findModifiedFiles,
  findUnresolvedToolUse,
  formatDescriptionWithSource,
  fromArray,
  getAllMcpConfigs,
  getAllOutputStyles,
  getAutoModeUnavailableNotification,
  getAutoModeUnavailableReason,
  getCommandName,
  getCommands,
  getCommandsByMaxPriority,
  getDeclaredMarketplaces,
  getEnvironmentKind,
  getLastCacheSafeParams,
  getMarketplaceJsonRelativePath,
  getMcpConfigByName,
  getModelOptions,
  getPluginZipCachePath,
  getRemoteSessionUrl,
  getRunningTasks,
  getZipCacheKnownMarketplacesPath,
  getZipCacheMarketplacesDir,
  getZipCachePluginsDir,
  gracefulShutdown,
  gracefulShutdownSync,
  hasCommandsInQueue,
  hasPermissionsToUseTool,
  headlessProfilerCheckpoint,
  headlessProfilerStartTurn,
  hydrateFromCCRv2InternalEvents,
  hydrateRemoteSession,
  init_AsyncHookRegistry,
  init_SyntheticOutputTool,
  init_abortController,
  init_applySettingsChange,
  init_auth as init_auth2,
  init_auth2 as init_auth3,
  init_bridgeStatusUtil,
  init_changeDetector,
  init_claudeAiLimits,
  init_client,
  init_combinedAbortSignal,
  init_commandLifecycle,
  init_commands2 as init_commands,
  init_config,
  init_constants,
  init_constants2,
  init_conversationRecovery,
  init_coordinatorMode,
  init_effort,
  init_elicitationHandler,
  init_extractMemories,
  init_fileHistory,
  init_filesApi,
  init_forkedAgent,
  init_framework,
  init_generators,
  init_gracefulShutdown,
  init_grove,
  init_headlessProfiler,
  init_hookEvents,
  init_hooks2 as init_hooks,
  init_ids,
  init_loadAgentsDir,
  init_logging,
  init_marketplaceManager,
  init_messageQueueManager,
  init_messages2 as init_messages,
  init_modelOptions,
  init_oauth,
  init_outputStyles,
  init_outputsScanner,
  init_permissionSetup,
  init_permissions,
  init_pluginLoader,
  init_policyLimits,
  init_proactive,
  init_product,
  init_prompt as init_prompt2,
  init_prompt10 as init_prompt7,
  init_prompt13 as init_prompt8,
  init_prompt15 as init_prompt9,
  init_prompt2 as init_prompt3,
  init_prompt3 as init_prompt4,
  init_prompt4 as init_prompt5,
  init_prompt6,
  init_promptSuggestion,
  init_queryHelpers,
  init_queryProfiler,
  init_remoteManagedSettings,
  init_sandbox_adapter,
  init_sdkEventQueue,
  init_sessionStart,
  init_sessionStorage,
  init_shellToolUtils,
  init_stopTask,
  init_teammateMailbox,
  init_thinking,
  init_tools2 as init_tools,
  init_types3 as init_types2,
  init_utils,
  init_uuid,
  init_vscodeSdkMcp,
  init_zipCache,
  installOAuthTokens,
  isAutoModeGateEnabled,
  isBackgroundTask,
  isBuiltInAgent,
  isBypassPermissionsModeDisabled,
  isMarketplaceSourceSupportedByZipCache,
  isMcpServerDisabled,
  isPluginZipCacheEnabled,
  isPolicyAllowed,
  isQualifiedForGrove,
  isShutdownApproved,
  isShuttingDown,
  loadAgentsDir_exports,
  loadAllPluginsCacheOnly,
  loadConversationForResume,
  loadKnownMarketplacesConfigSafe,
  logDebug,
  logHeadlessProfilerTurn,
  logQueryProfileReport,
  logSuggestionOutcome,
  logSuggestionSuppressed,
  markMessagesAsRead,
  modelSupportsAdaptiveThinking,
  modelSupportsEffort,
  modelSupportsMaxEffort,
  notifyCommandLifecycle,
  parseAgentsFromJson,
  peek,
  performMCPOAuthFlow,
  proactive_exports,
  processSessionStartHooks,
  processSetupHooks,
  prompt_exports2 as prompt_exports,
  readUnreadMessages,
  reconnectMcpServerImpl,
  recordAttributionSnapshot,
  registerHookEventHandler,
  registerSeedMarketplaces,
  resetSessionFilePointer,
  resolveAppliedEffort,
  restoreSessionMetadata,
  revokeServerTokens,
  runElicitationHooks,
  runElicitationResultHooks,
  saveAgentSetting,
  saveAiGeneratedTitle,
  saveMode,
  setCommandLifecycleListener,
  setInternalEventReader,
  setInternalEventWriter,
  setMcpServerEnabled,
  settingsChangeDetector,
  setupSdkMcpClients,
  setupVscodeSdkMcp,
  startQueryProfile,
  statusListeners,
  stopTask,
  subscribeToCommandQueue,
  takeInitialUserMessage,
  transitionPermissionMode,
  tryGenerateSuggestion,
  uploadSessionFiles,
  validateUuid,
  waitForRemoteManagedSettingsToLoad
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import {
  EMPTY_USAGE,
  getSessionIngressAuthToken,
  init_sessionIngressAuth
} from "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import {
  READ_FILE_STATE_CACHE_SIZE,
  createFileStateCacheWithSizeLimit,
  init_fileStateCache,
  mergeFileStateCaches
} from "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
import {
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-2MSZ62QE.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import {
  ElicitRequestSchema,
  ElicitationCompleteNotificationSchema,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import {
  init_Tool,
  toolMatchesName
} from "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import {
  init_tasks,
  init_teamHelpers,
  removeTeammateFromTeamFile,
  unassignTeammateTasks
} from "./chunk-5MQ7MACZ.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import {
  incrementPromptCount,
  init_commitAttribution
} from "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  AwsAuthStatusManager,
  KnownMarketplacesFileSchema,
  TASK_STOP_TOOL_NAME,
  WORKLOAD_CRON,
  capitalize,
  ensureModelStringsInitialized,
  getAPIProvider,
  getAccountInformation,
  getDefaultMainLoopModel,
  getFastModeState,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getMainLoopModel,
  getMcpPrefix,
  getSettingsWithSources,
  getSettings_DEPRECATED,
  init_auth,
  init_awsAuthStatusManager,
  init_betas,
  init_fastMode,
  init_growthbook,
  init_mcpStringUtils,
  init_model,
  init_modelStrings,
  init_omit,
  init_paths,
  init_prompt,
  init_providers,
  init_reject,
  init_schemas,
  init_settings2 as init_settings,
  init_stringUtils,
  init_uniqBy,
  init_workloadContext,
  initializeGrowthBook,
  isExtractModeActive,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  modelDisplayString,
  modelSupportsAutoMode,
  omit_default,
  parseUserSpecifiedModel,
  reject_default,
  runWithWorkload,
  uniqBy_default
} from "./chunk-NKGQGSP5.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  expandPath,
  init_path
} from "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  hasActiveInProcessTeammates,
  hasWorkingInProcessTeammates,
  init_array,
  init_teammate,
  isTeamLead,
  uniq,
  waitForTeammatesToBecomeIdle
} from "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
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
  init_diagLogs,
  logForDiagnosticsNoPII,
  withDiagnosticsTiming
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  LOCAL_COMMAND_STDOUT_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  getInMemoryErrors,
  init_log,
  init_xml,
  logError,
  logMCPDebug
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isDebugMode,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  toError
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getAllowedChannels,
  getFlagSettingsInline,
  getInitJsonSchema,
  getIsRemoteMode,
  getMainThreadAgentType,
  getSessionId,
  init_state,
  isSessionPersistenceDisabled,
  registerHookCallbacks,
  setAllowedChannels,
  setFlagSettingsInline,
  setInitJsonSchema,
  setMainLoopModelOverride,
  setMainThreadAgentType,
  setSdkAgentProgressSummariesEnabled,
  switchSession
} from "./chunk-NGSB34MB.mjs";
import {
  init_process,
  registerProcessOutputErrorHandlers,
  writeToStdout
} from "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isBareMode,
  isEnvDefinedFalsy,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/cli/print.ts
init_bun_bundle();
init_settingsSync();
init_remoteManagedSettings();
import { readFile as readFile2, stat } from "fs/promises";
import { dirname } from "path";

// src/cli/remoteIO.ts
init_state();
import { PassThrough } from "stream";
import { URL as URL3 } from "url";
init_cleanupRegistry();
init_commandLifecycle();
init_debug();
init_diagLogs();
init_envUtils();
init_errors();
init_gracefulShutdown();
init_log();
init_process();
init_sessionIngressAuth();
init_sessionStorage();

// src/cli/transports/transportUtils.ts
init_envUtils();
import { URL as URL2 } from "url";
function getTransportForUrl(url, headers = {}, sessionId, refreshHeaders) {
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
    const sseUrl = new URL2(url.href);
    if (sseUrl.protocol === "wss:") {
      sseUrl.protocol = "https:";
    } else if (sseUrl.protocol === "ws:") {
      sseUrl.protocol = "http:";
    }
    sseUrl.pathname = sseUrl.pathname.replace(/\/$/, "") + "/worker/events/stream";
    return new SSETransport(sseUrl, headers, sessionId, refreshHeaders);
  }
  if (url.protocol === "ws:" || url.protocol === "wss:") {
    if (isEnvTruthy(process.env.CLAUDE_CODE_POST_FOR_SESSION_INGRESS_V2)) {
      return new HybridTransport(url, headers, sessionId, refreshHeaders);
    }
    return new WebSocketTransport(url, headers, sessionId, refreshHeaders);
  } else {
    throw new Error(`Unsupported protocol: ${url.protocol}`);
  }
}

// src/cli/remoteIO.ts
var RemoteIO = class extends StructuredIO {
  url;
  transport;
  inputStream;
  isBridge = false;
  isDebug = false;
  ccrClient = null;
  keepAliveTimer = null;
  constructor(streamUrl, initialPrompt, replayUserMessages) {
    const inputStream = new PassThrough({ encoding: "utf8" });
    super(inputStream, replayUserMessages);
    this.inputStream = inputStream;
    this.url = new URL3(streamUrl);
    const headers = {};
    const sessionToken = getSessionIngressAuthToken();
    if (sessionToken) {
      headers["Authorization"] = `Bearer ${sessionToken}`;
    } else {
      logForDebugging("[remote-io] No session ingress token available", {
        level: "error"
      });
    }
    const erVersion = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
    if (erVersion) {
      headers["x-environment-runner-version"] = erVersion;
    }
    const refreshHeaders = () => {
      const h = {};
      const freshToken = getSessionIngressAuthToken();
      if (freshToken) {
        h["Authorization"] = `Bearer ${freshToken}`;
      }
      const freshErVersion = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (freshErVersion) {
        h["x-environment-runner-version"] = freshErVersion;
      }
      return h;
    };
    this.transport = getTransportForUrl(
      this.url,
      headers,
      getSessionId(),
      refreshHeaders
    );
    this.isBridge = process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
    this.isDebug = isDebugMode();
    this.transport.setOnData((data) => {
      this.inputStream.write(data);
      if (this.isBridge && this.isDebug) {
        writeToStdout(data.endsWith("\n") ? data : data + "\n");
      }
    });
    this.transport.setOnClose(() => {
      this.inputStream.end();
    });
    if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
      if (!(this.transport instanceof SSETransport)) {
        throw new Error(
          "CCR v2 requires SSETransport; check getTransportForUrl"
        );
      }
      this.ccrClient = new CCRClient(this.transport, this.url);
      const init = this.ccrClient.initialize();
      this.restoredWorkerState = init.catch(() => null);
      init.catch((error) => {
        logForDiagnosticsNoPII("error", "cli_worker_lifecycle_init_failed", {
          reason: error instanceof CCRInitError ? error.reason : "unknown"
        });
        logError(
          new Error(`CCRClient initialization failed: ${errorMessage(error)}`)
        );
        void gracefulShutdown(1, "other");
      });
      registerCleanup(async () => this.ccrClient?.close());
      setInternalEventWriter(
        (eventType, payload, options) => this.ccrClient.writeInternalEvent(eventType, payload, options)
      );
      setInternalEventReader(
        () => this.ccrClient.readInternalEvents(),
        () => this.ccrClient.readSubagentInternalEvents()
      );
      const LIFECYCLE_TO_DELIVERY = {
        started: "processing",
        completed: "processed"
      };
      setCommandLifecycleListener((uuid, state) => {
        this.ccrClient?.reportDelivery(uuid, LIFECYCLE_TO_DELIVERY[state]);
      });
      setSessionStateChangedListener((state, details) => {
        this.ccrClient?.reportState(state, details);
      });
      setSessionMetadataChangedListener((metadata) => {
        this.ccrClient?.reportMetadata(metadata);
      });
    }
    void this.transport.connect();
    const keepAliveIntervalMs = getPollIntervalConfig().session_keepalive_interval_v2_ms;
    if (this.isBridge && keepAliveIntervalMs > 0) {
      this.keepAliveTimer = setInterval(() => {
        logForDebugging("[remote-io] keep_alive sent");
        void this.write({ type: "keep_alive" }).catch((err) => {
          logForDebugging(
            `[remote-io] keep_alive write failed: ${errorMessage(err)}`
          );
        });
      }, keepAliveIntervalMs);
      this.keepAliveTimer.unref?.();
    }
    registerCleanup(async () => this.close());
    if (initialPrompt) {
      const stream = this.inputStream;
      void (async () => {
        for await (const chunk of initialPrompt) {
          stream.write(String(chunk).replace(/\n$/, "") + "\n");
        }
      })();
    }
  }
  flushInternalEvents() {
    return this.ccrClient?.flushInternalEvents() ?? Promise.resolve();
  }
  get internalEventsPending() {
    return this.ccrClient?.internalEventsPending ?? 0;
  }
  /**
   * Send output to the transport.
   * In bridge mode, control_request messages are always echoed to stdout so the
   * bridge parent can detect permission requests. Other messages are echoed only
   * in debug mode.
   */
  async write(message) {
    if (this.ccrClient) {
      await this.ccrClient.writeEvent(message);
    } else {
      await this.transport.write(message);
    }
    if (this.isBridge) {
      if (message.type === "control_request" || this.isDebug) {
        writeToStdout(ndjsonSafeStringify(message) + "\n");
      }
    }
  }
  /**
   * Clean up connections gracefully
   */
  close() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
    this.transport.close();
    this.inputStream.end();
  }
};

// src/cli/print.ts
init_commands();

// src/utils/streamlinedTransform.ts
init_constants();
init_prompt3();
init_prompt4();
init_prompt5();
init_prompt2();
init_prompt9();
init_prompt8();
init_constants2();
init_prompt();
init_prompt6();
init_messages();
init_shellToolUtils();
init_stringUtils();
var SEARCH_TOOLS = [
  GREP_TOOL_NAME,
  GLOB_TOOL_NAME,
  WEB_SEARCH_TOOL_NAME,
  LSP_TOOL_NAME
];
var READ_TOOLS = [FILE_READ_TOOL_NAME, LIST_MCP_RESOURCES_TOOL_NAME];
var WRITE_TOOLS = [
  FILE_WRITE_TOOL_NAME,
  FILE_EDIT_TOOL_NAME,
  NOTEBOOK_EDIT_TOOL_NAME
];
var COMMAND_TOOLS = [...SHELL_TOOL_NAMES, "Tmux", TASK_STOP_TOOL_NAME];
function categorizeToolName(toolName) {
  if (SEARCH_TOOLS.some((t) => toolName.startsWith(t))) return "searches";
  if (READ_TOOLS.some((t) => toolName.startsWith(t))) return "reads";
  if (WRITE_TOOLS.some((t) => toolName.startsWith(t))) return "writes";
  if (COMMAND_TOOLS.some((t) => toolName.startsWith(t))) return "commands";
  return "other";
}
function createEmptyToolCounts() {
  return {
    searches: 0,
    reads: 0,
    writes: 0,
    commands: 0,
    other: 0
  };
}
function getToolSummaryText(counts) {
  const parts = [];
  if (counts.searches > 0) {
    parts.push(
      `searched ${counts.searches} ${counts.searches === 1 ? "pattern" : "patterns"}`
    );
  }
  if (counts.reads > 0) {
    parts.push(`read ${counts.reads} ${counts.reads === 1 ? "file" : "files"}`);
  }
  if (counts.writes > 0) {
    parts.push(
      `wrote ${counts.writes} ${counts.writes === 1 ? "file" : "files"}`
    );
  }
  if (counts.commands > 0) {
    parts.push(
      `ran ${counts.commands} ${counts.commands === 1 ? "command" : "commands"}`
    );
  }
  if (counts.other > 0) {
    parts.push(`${counts.other} other ${counts.other === 1 ? "tool" : "tools"}`);
  }
  if (parts.length === 0) {
    return void 0;
  }
  return capitalize(parts.join(", "));
}
function accumulateToolUses(message, counts) {
  const content = message.message.content;
  if (!Array.isArray(content)) {
    return;
  }
  for (const block of content) {
    if (block.type === "tool_use" && "name" in block) {
      const category = categorizeToolName(block.name);
      counts[category]++;
    }
  }
}
function createStreamlinedTransformer() {
  let cumulativeCounts = createEmptyToolCounts();
  return function transformToStreamlined(message) {
    switch (message.type) {
      case "assistant": {
        const content = message.message.content;
        const text = Array.isArray(content) ? extractTextContent(content, "\n").trim() : "";
        accumulateToolUses(message, cumulativeCounts);
        if (text.length > 0) {
          cumulativeCounts = createEmptyToolCounts();
          return {
            type: "streamlined_text",
            text,
            session_id: message.session_id,
            uuid: message.uuid
          };
        }
        const toolSummary = getToolSummaryText(cumulativeCounts);
        if (!toolSummary) {
          return null;
        }
        return {
          type: "streamlined_tool_use_summary",
          tool_summary: toolSummary,
          session_id: message.session_id,
          uuid: message.uuid
        };
      }
      case "result":
        return message;
      case "system":
      case "user":
      case "stream_event":
      case "tool_progress":
      case "auth_status":
      case "rate_limit_event":
      case "control_response":
      case "control_request":
      case "control_cancel_request":
      case "keep_alive":
        return null;
      default:
        return null;
    }
  };
}

// src/utils/streamJsonStdoutGuard.ts
init_cleanupRegistry();
init_debug();
var STDOUT_GUARD_MARKER = "[stdout-guard]";
var installed = false;
var buffer = "";
var originalWrite = null;
function isJsonLine(line) {
  if (line.length === 0) {
    return true;
  }
  try {
    JSON.parse(line);
    return true;
  } catch {
    return false;
  }
}
function installStreamJsonStdoutGuard() {
  if (installed) {
    return;
  }
  installed = true;
  originalWrite = process.stdout.write.bind(
    process.stdout
  );
  process.stdout.write = function(chunk, encodingOrCb, cb) {
    const text = typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf-8");
    buffer += text;
    let newlineIdx;
    let wrote = true;
    while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
      const line = buffer.slice(0, newlineIdx);
      buffer = buffer.slice(newlineIdx + 1);
      if (isJsonLine(line)) {
        wrote = originalWrite(line + "\n");
      } else {
        process.stderr.write(`${STDOUT_GUARD_MARKER} ${line}
`);
        logForDebugging(
          `streamJsonStdoutGuard diverted non-JSON stdout line: ${line.slice(0, 200)}`
        );
      }
    }
    const callback = typeof encodingOrCb === "function" ? encodingOrCb : cb;
    if (callback) {
      queueMicrotask(() => callback());
    }
    return wrote;
  };
  registerCleanup(async () => {
    if (buffer.length > 0) {
      if (originalWrite && isJsonLine(buffer)) {
        originalWrite(buffer + "\n");
      } else {
        process.stderr.write(`${STDOUT_GUARD_MARKER} ${buffer}
`);
      }
      buffer = "";
    }
    if (originalWrite) {
      process.stdout.write = originalWrite;
      originalWrite = null;
    }
    installed = false;
  });
}

// src/cli/print.ts
init_tools();
init_uniqBy();
init_array();
init_toolPool();
init_analytics();
init_growthbook();
init_debug();
init_diagLogs();
init_Tool();
init_loadAgentsDir();
init_messageQueueManager();
init_commandLifecycle();
init_log();
init_process();
init_logging();
init_conversationRecovery();
init_channelNotification();
init_channelAllowlist();
init_pluginIdentifier();
init_uuid();
init_generators();
init_fileStateCache();
init_path();
init_queryHelpers();
init_hookEvents();

// src/utils/filePersistence/filePersistence.ts
init_bun_bundle();
init_analytics();
init_filesApi();
init_cwd();
init_errors();
init_log();
init_sessionIngressAuth();
init_outputsScanner();
import { join, relative } from "path";

// src/utils/filePersistence/types.ts
var DEFAULT_UPLOAD_CONCURRENCY = 4;
var FILE_COUNT_LIMIT = 1e3;
var OUTPUTS_SUBDIR = "outputs";

// src/utils/filePersistence/filePersistence.ts
async function runFilePersistence(turnStartTime, signal) {
  const environmentKind = getEnvironmentKind();
  if (environmentKind !== "byoc") {
    return null;
  }
  const sessionAccessToken = getSessionIngressAuthToken();
  if (!sessionAccessToken) {
    return null;
  }
  const sessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!sessionId) {
    logError(
      new Error(
        "File persistence enabled but CLAUDE_CODE_REMOTE_SESSION_ID is not set"
      )
    );
    return null;
  }
  const config = {
    oauthToken: sessionAccessToken,
    sessionId
  };
  const outputsDir = join(getCwd(), sessionId, OUTPUTS_SUBDIR);
  if (signal?.aborted) {
    logDebug("Persistence aborted before processing");
    return null;
  }
  const startTime = Date.now();
  logEvent("tengu_file_persistence_started", {
    mode: environmentKind
  });
  try {
    let result;
    if (environmentKind === "byoc") {
      result = await executeBYOCPersistence(
        turnStartTime,
        config,
        outputsDir,
        signal
      );
    } else {
      result = await executeCloudPersistence();
    }
    if (result.files.length === 0 && result.failed.length === 0) {
      return null;
    }
    const durationMs = Date.now() - startTime;
    logEvent("tengu_file_persistence_completed", {
      success_count: result.files.length,
      failure_count: result.failed.length,
      duration_ms: durationMs,
      mode: environmentKind
    });
    return result;
  } catch (error) {
    logError(error);
    logDebug(`File persistence failed: ${error}`);
    const durationMs = Date.now() - startTime;
    logEvent("tengu_file_persistence_completed", {
      success_count: 0,
      failure_count: 0,
      duration_ms: durationMs,
      mode: environmentKind,
      error: "exception"
    });
    return {
      files: [],
      failed: [
        {
          filename: outputsDir,
          error: errorMessage(error)
        }
      ]
    };
  }
}
async function executeBYOCPersistence(turnStartTime, config, outputsDir, signal) {
  const modifiedFiles = await findModifiedFiles(turnStartTime, outputsDir);
  if (modifiedFiles.length === 0) {
    logDebug("No modified files to persist");
    return { files: [], failed: [] };
  }
  logDebug(`Found ${modifiedFiles.length} modified files`);
  if (signal?.aborted) {
    return { files: [], failed: [] };
  }
  if (modifiedFiles.length > FILE_COUNT_LIMIT) {
    logDebug(
      `File count limit exceeded: ${modifiedFiles.length} > ${FILE_COUNT_LIMIT}`
    );
    logEvent("tengu_file_persistence_limit_exceeded", {
      file_count: modifiedFiles.length,
      limit: FILE_COUNT_LIMIT
    });
    return {
      files: [],
      failed: [
        {
          filename: outputsDir,
          error: `Too many files modified (${modifiedFiles.length}). Maximum: ${FILE_COUNT_LIMIT}.`
        }
      ]
    };
  }
  const filesToProcess = modifiedFiles.map((filePath) => ({
    path: filePath,
    relativePath: relative(outputsDir, filePath)
  })).filter(({ relativePath }) => {
    if (relativePath.startsWith("..")) {
      logDebug(`Skipping file outside outputs directory: ${relativePath}`);
      return false;
    }
    return true;
  });
  logDebug(`BYOC mode: uploading ${filesToProcess.length} files`);
  const results = await uploadSessionFiles(
    filesToProcess,
    config,
    DEFAULT_UPLOAD_CONCURRENCY
  );
  const persistedFiles = [];
  const failedFiles = [];
  for (const result of results) {
    if (result.success) {
      persistedFiles.push({
        filename: result.path,
        file_id: result.fileId
      });
    } else {
      failedFiles.push({
        filename: result.path,
        error: result.error
      });
    }
  }
  logDebug(
    `BYOC persistence complete: ${persistedFiles.length} uploaded, ${failedFiles.length} failed`
  );
  return {
    files: persistedFiles,
    failed: failedFiles
  };
}
function executeCloudPersistence() {
  logDebug("Cloud mode: xattr-based file ID reading not yet implemented");
  return { files: [], failed: [] };
}
async function executeFilePersistence(turnStartTime, signal, onResult) {
  try {
    const result = await runFilePersistence(turnStartTime, signal);
    if (result) {
      onResult(result);
    }
  } catch (error) {
    logError(error);
  }
}

// src/cli/print.ts
init_AsyncHookRegistry();
init_gracefulShutdown();
init_cleanupRegistry();

// src/utils/idleTimeout.ts
init_debug();
init_gracefulShutdown();
function createIdleTimeoutManager(isIdle) {
  const exitAfterStopDelay = process.env.CLAUDE_CODE_EXIT_AFTER_STOP_DELAY;
  const delayMs = exitAfterStopDelay ? parseInt(exitAfterStopDelay, 10) : null;
  const isValidDelay = delayMs && !isNaN(delayMs) && delayMs > 0;
  let timer = null;
  let lastIdleTime = 0;
  return {
    start() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (isValidDelay) {
        lastIdleTime = Date.now();
        timer = setTimeout(() => {
          const idleDuration = Date.now() - lastIdleTime;
          if (isIdle() && idleDuration >= delayMs) {
            logForDebugging(`Exiting after ${delayMs}ms of idle time`);
            gracefulShutdownSync();
          }
        }, delayMs);
      }
    },
    stop() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
  };
}

// src/cli/print.ts
init_cwd();
init_omit();
init_reject();
init_policyLimits();
init_product();
init_bridgeStatusUtil();
import { cwd } from "process";
init_permissions();
init_json();
init_abortController();
init_combinedAbortSignal();
init_sessionTitle();
init_sideQuestion();
init_sessionStart();
init_outputStyles();
init_xml();
init_settings();
init_changeDetector();
init_applySettingsChange();
init_fastMode();
init_permissionSetup();
init_promptSuggestion();
init_forkedAgent();
init_auth();
init_oauth();
init_auth2();
init_providers();
init_awsAuthStatusManager();
init_state();
init_SyntheticOutputTool();

// src/utils/sessionUrl.ts
init_uuid();
import { randomUUID } from "crypto";
function parseSessionIdentifier(resumeIdentifier) {
  if (resumeIdentifier.toLowerCase().endsWith(".jsonl")) {
    return {
      sessionId: randomUUID(),
      ingressUrl: null,
      isUrl: false,
      jsonlFile: resumeIdentifier,
      isJsonlFile: true
    };
  }
  if (validateUuid(resumeIdentifier)) {
    return {
      sessionId: resumeIdentifier,
      ingressUrl: null,
      isUrl: false,
      jsonlFile: null,
      isJsonlFile: false
    };
  }
  try {
    const url = new URL(resumeIdentifier);
    return {
      sessionId: randomUUID(),
      ingressUrl: url.href,
      isUrl: true,
      jsonlFile: null,
      isJsonlFile: false
    };
  } catch {
  }
  return null;
}

// src/cli/print.ts
init_sessionStorage();
init_commitAttribution();
init_client();
init_config();
init_auth3();
init_elicitationHandler();
init_hooks();
init_types();
init_mcpStringUtils();
init_utils();
init_vscodeSdkMcp();
init_config();
init_grove();
init_mappers();
init_messages();
init_context_noninteractive();
init_xml();
init_claudeAiLimits();
init_model();
init_modelOptions();
init_effort();
init_thinking();
init_betas();
init_modelStrings();
init_state();
init_workloadContext();
init_fileHistory();
import { randomUUID as randomUUID2 } from "crypto";
init_sandbox_adapter();
init_headlessProfiler();
init_queryProfiler();
init_ids();
init_slowOperations();
init_commands();
init_envUtils();

// src/utils/plugins/headlessPluginInstall.ts
init_analytics();
init_cleanupRegistry();
init_debug();
init_diagLogs();
init_fsOperations();
init_log();
init_marketplaceManager();
init_pluginLoader();
init_zipCache();

// src/utils/plugins/zipCacheAdapters.ts
init_debug();
init_slowOperations();
init_marketplaceManager();
init_schemas();
init_zipCache();
import { readFile } from "fs/promises";
import { join as join2 } from "path";
async function readZipCacheKnownMarketplaces() {
  try {
    const content = await readFile(getZipCacheKnownMarketplacesPath(), "utf-8");
    const parsed = KnownMarketplacesFileSchema().safeParse(jsonParse(content));
    if (!parsed.success) {
      logForDebugging(
        `Invalid known_marketplaces.json in zip cache: ${parsed.error.message}`,
        { level: "error" }
      );
      return {};
    }
    return parsed.data;
  } catch {
    return {};
  }
}
async function writeZipCacheKnownMarketplaces(data) {
  await atomicWriteToZipCache(
    getZipCacheKnownMarketplacesPath(),
    jsonStringify(data, null, 2)
  );
}
async function saveMarketplaceJsonToZipCache(marketplaceName, installLocation) {
  const zipCachePath = getPluginZipCachePath();
  if (!zipCachePath) {
    return;
  }
  const content = await readMarketplaceJsonContent(installLocation);
  if (content !== null) {
    const relPath = getMarketplaceJsonRelativePath(marketplaceName);
    await atomicWriteToZipCache(join2(zipCachePath, relPath), content);
  }
}
async function readMarketplaceJsonContent(dir) {
  const candidates = [
    join2(dir, ".claude-plugin", "marketplace.json"),
    join2(dir, "marketplace.json"),
    dir
    // For URL sources, installLocation IS the marketplace JSON file
  ];
  for (const candidate of candidates) {
    try {
      return await readFile(candidate, "utf-8");
    } catch {
    }
  }
  return null;
}
async function syncMarketplacesToZipCache() {
  const knownMarketplaces = await loadKnownMarketplacesConfigSafe();
  for (const [name, entry] of Object.entries(knownMarketplaces)) {
    if (!entry.installLocation) continue;
    try {
      await saveMarketplaceJsonToZipCache(name, entry.installLocation);
    } catch (error) {
      logForDebugging(`Failed to save marketplace JSON for ${name}: ${error}`);
    }
  }
  const zipCacheKnownMarketplaces = await readZipCacheKnownMarketplaces();
  const mergedKnownMarketplaces = {
    ...zipCacheKnownMarketplaces,
    ...knownMarketplaces
  };
  await writeZipCacheKnownMarketplaces(mergedKnownMarketplaces);
}

// src/utils/plugins/headlessPluginInstall.ts
async function installPluginsForHeadless() {
  const zipCacheMode = isPluginZipCacheEnabled();
  logForDebugging(
    `installPluginsForHeadless: starting${zipCacheMode ? " (zip cache mode)" : ""}`
  );
  const seedChanged = await registerSeedMarketplaces();
  if (seedChanged) {
    clearMarketplacesCache();
    clearPluginCache("headlessPluginInstall: seed marketplaces registered");
  }
  if (zipCacheMode) {
    await getFsImplementation().mkdir(getZipCacheMarketplacesDir());
    await getFsImplementation().mkdir(getZipCachePluginsDir());
  }
  const declaredCount = Object.keys(getDeclaredMarketplaces()).length;
  const metrics = {
    marketplaces_installed: 0,
    delisted_count: 0
  };
  let pluginsChanged = seedChanged;
  try {
    if (declaredCount === 0) {
      logForDebugging("installPluginsForHeadless: no marketplaces declared");
    } else {
      const reconcileResult = await withDiagnosticsTiming(
        "headless_marketplace_reconcile",
        () => reconcileMarketplaces({
          skip: zipCacheMode ? (_name, source) => !isMarketplaceSourceSupportedByZipCache(source) : void 0,
          onProgress: (event) => {
            if (event.type === "installed") {
              logForDebugging(
                `installPluginsForHeadless: installed marketplace ${event.name}`
              );
            } else if (event.type === "failed") {
              logForDebugging(
                `installPluginsForHeadless: failed to install marketplace ${event.name}: ${event.error}`
              );
            }
          }
        }),
        (r) => ({
          installed_count: r.installed.length,
          updated_count: r.updated.length,
          failed_count: r.failed.length,
          skipped_count: r.skipped.length
        })
      );
      if (reconcileResult.skipped.length > 0) {
        logForDebugging(
          `installPluginsForHeadless: skipped ${reconcileResult.skipped.length} marketplace(s) unsupported by zip cache: ${reconcileResult.skipped.join(", ")}`
        );
      }
      const marketplacesChanged = reconcileResult.installed.length + reconcileResult.updated.length;
      if (marketplacesChanged > 0) {
        clearMarketplacesCache();
        clearPluginCache("headlessPluginInstall: marketplaces reconciled");
        pluginsChanged = true;
      }
      metrics.marketplaces_installed = marketplacesChanged;
    }
    if (zipCacheMode) {
      await syncMarketplacesToZipCache();
    }
    const newlyDelisted = await detectAndUninstallDelistedPlugins();
    metrics.delisted_count = newlyDelisted.length;
    if (newlyDelisted.length > 0) {
      pluginsChanged = true;
    }
    if (pluginsChanged) {
      clearPluginCache("headlessPluginInstall: plugins changed");
    }
    if (zipCacheMode) {
      registerCleanup(cleanupSessionPluginCache);
    }
    return pluginsChanged;
  } catch (error) {
    logError(error);
    return false;
  } finally {
    logEvent("tengu_headless_plugin_install", metrics);
  }
}

// src/cli/print.ts
init_refresh();
init_pluginLoader();
init_teammate();
init_teammateMailbox();
init_teamHelpers();
init_tasks();
init_framework();
init_types2();
init_stopTask();
init_sdkEventQueue();
init_growthbook();
init_errors();
init_sleep();
init_paths();
var coordinatorModeModule = feature("COORDINATOR_MODE") ? (init_coordinatorMode(), __toCommonJS(coordinatorMode_exports)) : null;
var proactiveModule = feature("PROACTIVE") || feature("KAIROS") ? (init_proactive(), __toCommonJS(proactive_exports)) : null;
var cronSchedulerModule = feature("AGENT_TRIGGERS") ? (init_cronScheduler(), __toCommonJS(cronScheduler_exports)) : null;
var cronJitterConfigModule = feature("AGENT_TRIGGERS") ? (init_cronJitterConfig(), __toCommonJS(cronJitterConfig_exports)) : null;
var cronGate = feature("AGENT_TRIGGERS") ? (init_prompt7(), __toCommonJS(prompt_exports)) : null;
var extractMemoriesModule = feature("EXTRACT_MEMORIES") ? (init_extractMemories(), __toCommonJS(extractMemories_exports)) : null;
var SHUTDOWN_TEAM_PROMPT = `<system-reminder>
You are running in non-interactive mode and cannot return a response to the user until your team is shut down.

You MUST shut down your team before preparing your final response:
1. Use requestShutdown to ask each team member to shut down gracefully
2. Wait for shutdown approvals
3. Use the cleanup operation to clean up the team
4. Only then provide your final response to the user

The user cannot receive your response until the team is completely shut down.
</system-reminder>

Shut down your team and prepare your final response for the user.`;
var MAX_RECEIVED_UUIDS = 1e4;
var receivedMessageUuids = /* @__PURE__ */ new Set();
var receivedMessageUuidsOrder = [];
function trackReceivedMessageUuid(uuid) {
  if (receivedMessageUuids.has(uuid)) {
    return false;
  }
  receivedMessageUuids.add(uuid);
  receivedMessageUuidsOrder.push(uuid);
  if (receivedMessageUuidsOrder.length > MAX_RECEIVED_UUIDS) {
    const toEvict = receivedMessageUuidsOrder.splice(
      0,
      receivedMessageUuidsOrder.length - MAX_RECEIVED_UUIDS
    );
    for (const old of toEvict) {
      receivedMessageUuids.delete(old);
    }
  }
  return true;
}
function toBlocks(v) {
  return typeof v === "string" ? [{ type: "text", text: v }] : v;
}
function joinPromptValues(values) {
  if (values.length === 1) return values[0];
  if (values.every((v) => typeof v === "string")) {
    return values.join("\n");
  }
  return values.flatMap(toBlocks);
}
function canBatchWith(head, next) {
  return next !== void 0 && next.mode === "prompt" && next.workload === head.workload && next.isMeta === head.isMeta;
}
async function runHeadless(inputPrompt, getAppState, setAppState, commands, tools, sdkMcpConfigs, agents, options) {
  logForDebugging("[HEADLESS] runHeadless() entered");
  if (process.env.USER_TYPE === "ant" && isEnvTruthy(process.env.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER)) {
    process.stderr.write(
      `
Startup time: ${Math.round(process.uptime() * 1e3)}ms
`
    );
    process.exit(0);
  }
  if (feature("DOWNLOAD_USER_SETTINGS") && (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || getIsRemoteMode())) {
    void downloadUserSettings();
  }
  settingsChangeDetector.subscribe((source) => {
    applySettingsChange(source, setAppState);
    if (isFastModeEnabled()) {
      setAppState((prev) => {
        const s = prev.settings;
        const fastMode = s.fastMode === true && !s.fastModePerSessionOptIn;
        return { ...prev, fastMode };
      });
    }
  });
  if ((feature("PROACTIVE") || feature("KAIROS")) && proactiveModule && !proactiveModule.isProactiveActive() && isEnvTruthy(process.env.CLAUDE_CODE_PROACTIVE)) {
    proactiveModule.activateProactive("command");
  }
  if (typeof Bun !== "undefined") {
    const gcTimer = setInterval(Bun.gc, 1e3);
    gcTimer.unref();
  }
  headlessProfilerStartTurn();
  headlessProfilerCheckpoint("runHeadless_entry");
  if (await isQualifiedForGrove()) {
    await checkGroveForNonInteractive();
  }
  headlessProfilerCheckpoint("after_grove_check");
  void initializeGrowthBook();
  if (options.resumeSessionAt && !options.resume) {
    process.stderr.write(`Error: --resume-session-at requires --resume
`);
    gracefulShutdownSync(1);
    return;
  }
  if (options.rewindFiles && !options.resume) {
    process.stderr.write(`Error: --rewind-files requires --resume
`);
    gracefulShutdownSync(1);
    return;
  }
  if (options.rewindFiles && inputPrompt) {
    process.stderr.write(
      `Error: --rewind-files is a standalone operation and cannot be used with a prompt
`
    );
    gracefulShutdownSync(1);
    return;
  }
  const structuredIO = getStructuredIO(inputPrompt, options);
  logForDebugging("[HEADLESS] StructuredIO created");
  if (options.outputFormat === "stream-json") {
    installStreamJsonStdoutGuard();
  }
  const sandboxUnavailableReason = SandboxManager.getSandboxUnavailableReason();
  if (sandboxUnavailableReason) {
    if (SandboxManager.isSandboxRequired()) {
      process.stderr.write(
        `
Error: sandbox required but unavailable: ${sandboxUnavailableReason}
  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.

`
      );
      gracefulShutdownSync(1);
      return;
    }
    process.stderr.write(
      `
\u26A0 Sandbox disabled: ${sandboxUnavailableReason}
  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`
    );
  } else if (SandboxManager.isSandboxingEnabled()) {
    const sandboxAskCallback = structuredIO.createSandboxAskCallback();
    const initializeSandbox = async () => {
      logForDebugging("[HEADLESS] Initializing sandbox...");
      await SandboxManager.initialize(sandboxAskCallback);
      logForDebugging("[HEADLESS] Sandbox initialized");
    };
    if (SandboxManager.isSandboxRequired()) {
      try {
        await initializeSandbox();
      } catch (err) {
        process.stderr.write(`
\u274C Sandbox Error: ${errorMessage(err)}
`);
        gracefulShutdownSync(1, "other");
        return;
      }
    } else {
      void initializeSandbox().catch((err) => {
        process.stderr.write(`
\u274C Sandbox Error: ${errorMessage(err)}
`);
        gracefulShutdownSync(1, "other");
      });
    }
  }
  if (options.outputFormat === "stream-json" && options.verbose) {
    registerHookEventHandler((event) => {
      const message = (() => {
        switch (event.type) {
          case "started":
            return {
              type: "system",
              subtype: "hook_started",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
          case "progress":
            return {
              type: "system",
              subtype: "hook_progress",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              stdout: event.stdout,
              stderr: event.stderr,
              output: event.output,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
          case "response":
            return {
              type: "system",
              subtype: "hook_response",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              output: event.output,
              stdout: event.stdout,
              stderr: event.stderr,
              exit_code: event.exitCode,
              outcome: event.outcome,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
        }
      })();
      void structuredIO.write(message);
    });
  }
  if (options.setupTrigger) {
    logForDebugging(`[HEADLESS] Running setup hooks for trigger=${options.setupTrigger}`);
    await processSetupHooks(options.setupTrigger);
    logForDebugging("[HEADLESS] Setup hooks completed");
  }
  headlessProfilerCheckpoint("before_loadInitialMessages");
  logForDebugging("[HEADLESS] Loading initial messages...");
  const appState = getAppState();
  const {
    messages: initialMessages,
    turnInterruptionState,
    agentSetting: resumedAgentSetting
  } = await loadInitialMessages(setAppState, {
    continue: options.continue,
    teleport: options.teleport,
    resume: options.resume,
    resumeSessionAt: options.resumeSessionAt,
    forkSession: options.forkSession,
    outputFormat: options.outputFormat,
    sessionStartHooksPromise: options.sessionStartHooksPromise,
    restoredWorkerState: structuredIO.restoredWorkerState
  });
  logForDebugging(`[HEADLESS] Initial messages loaded: ${initialMessages.length}`);
  const hookInitialUserMessage = takeInitialUserMessage();
  if (hookInitialUserMessage) {
    structuredIO.prependUserMessage(hookInitialUserMessage);
  }
  if (!options.agent && !getMainThreadAgentType() && resumedAgentSetting) {
    const { agentDefinition: restoredAgent } = restoreAgentFromSession(
      resumedAgentSetting,
      void 0,
      { activeAgents: agents, allAgents: agents }
    );
    if (restoredAgent) {
      setAppState((prev) => ({ ...prev, agent: restoredAgent.agentType }));
      if (!options.systemPrompt && !isBuiltInAgent(restoredAgent)) {
        const agentSystemPrompt = restoredAgent.getSystemPrompt();
        if (agentSystemPrompt) {
          options.systemPrompt = agentSystemPrompt;
        }
      }
      saveAgentSetting(restoredAgent.agentType);
    }
  }
  if (initialMessages.length === 0 && process.exitCode !== void 0) {
    return;
  }
  if (options.rewindFiles) {
    const targetMessage = initialMessages.find(
      (m) => m.uuid === options.rewindFiles
    );
    if (!targetMessage || targetMessage.type !== "user") {
      process.stderr.write(
        `Error: --rewind-files requires a user message UUID, but ${options.rewindFiles} is not a user message in this session
`
      );
      gracefulShutdownSync(1);
      return;
    }
    const currentAppState = getAppState();
    const result = await handleRewindFiles(
      options.rewindFiles,
      currentAppState,
      setAppState,
      false
    );
    if (!result.canRewind) {
      process.stderr.write(`Error: ${result.error || "Unexpected error"}
`);
      gracefulShutdownSync(1);
      return;
    }
    process.stdout.write(
      `Files rewound to state at message ${options.rewindFiles}
`
    );
    gracefulShutdownSync(0);
    return;
  }
  const hasValidResumeSessionId = typeof options.resume === "string" && (Boolean(validateUuid(options.resume)) || options.resume.endsWith(".jsonl"));
  const isUsingSdkUrl = Boolean(options.sdkUrl);
  if (!inputPrompt && !hasValidResumeSessionId && !isUsingSdkUrl) {
    process.stderr.write(
      `Error: Input must be provided either through stdin or as a prompt argument when using --print
`
    );
    gracefulShutdownSync(1);
    return;
  }
  if (options.outputFormat === "stream-json" && !options.verbose) {
    process.stderr.write(
      "Error: When using --print, --output-format=stream-json requires --verbose\n"
    );
    gracefulShutdownSync(1);
    return;
  }
  const allowedMcpTools = filterToolsByDenyRules(
    appState.mcp.tools,
    appState.toolPermissionContext
  );
  let filteredTools = [...tools, ...allowedMcpTools];
  const effectivePermissionPromptToolName = options.sdkUrl ? "stdio" : options.permissionPromptToolName;
  const onPermissionPrompt = (details) => {
    if (feature("COMMIT_ATTRIBUTION")) {
      setAppState((prev) => ({
        ...prev,
        attribution: {
          ...prev.attribution,
          permissionPromptCount: prev.attribution.permissionPromptCount + 1
        }
      }));
    }
    notifySessionStateChanged("requires_action", details);
  };
  const canUseTool = getCanUseToolFn(
    effectivePermissionPromptToolName,
    structuredIO,
    () => getAppState().mcp.tools,
    onPermissionPrompt
  );
  if (options.permissionPromptToolName) {
    filteredTools = filteredTools.filter(
      (tool) => !toolMatchesName(tool, options.permissionPromptToolName)
    );
  }
  registerProcessOutputErrorHandlers();
  headlessProfilerCheckpoint("after_loadInitialMessages");
  logForDebugging("[HEADLESS] Ensuring model strings are initialized...");
  await ensureModelStringsInitialized();
  logForDebugging("[HEADLESS] Model strings ready");
  headlessProfilerCheckpoint("after_modelStrings");
  const needsFullArray = options.outputFormat === "json" && options.verbose;
  const messages = [];
  let lastMessage;
  const transformToStreamlined = feature("STREAMLINED_OUTPUT") && isEnvTruthy(process.env.CLAUDE_CODE_STREAMLINED_OUTPUT) && options.outputFormat === "stream-json" ? createStreamlinedTransformer() : null;
  headlessProfilerCheckpoint("before_runHeadlessStreaming");
  logForDebugging("[HEADLESS] Starting runHeadlessStreaming loop...");
  for await (const message of runHeadlessStreaming(
    structuredIO,
    appState.mcp.clients,
    [...commands, ...appState.mcp.commands],
    filteredTools,
    initialMessages,
    canUseTool,
    sdkMcpConfigs,
    getAppState,
    setAppState,
    agents,
    options,
    turnInterruptionState
  )) {
    if (transformToStreamlined) {
      const transformed = transformToStreamlined(message);
      if (transformed) {
        await structuredIO.write(transformed);
      }
    } else if (options.outputFormat === "stream-json" && options.verbose) {
      await structuredIO.write(message);
    }
    if (message.type !== "control_response" && message.type !== "control_request" && message.type !== "control_cancel_request" && !(message.type === "system" && (message.subtype === "session_state_changed" || message.subtype === "task_notification" || message.subtype === "task_started" || message.subtype === "task_progress" || message.subtype === "post_turn_summary")) && message.type !== "stream_event" && message.type !== "keep_alive" && message.type !== "streamlined_text" && message.type !== "streamlined_tool_use_summary" && message.type !== "prompt_suggestion") {
      if (needsFullArray) {
        messages.push(message);
      }
      lastMessage = message;
    }
  }
  switch (options.outputFormat) {
    case "json":
      if (!lastMessage || lastMessage.type !== "result") {
        throw new Error("No messages returned");
      }
      if (options.verbose) {
        writeToStdout(jsonStringify(messages) + "\n");
        break;
      }
      writeToStdout(jsonStringify(lastMessage) + "\n");
      break;
    case "stream-json":
      break;
    default:
      if (!lastMessage || lastMessage.type !== "result") {
        throw new Error("No messages returned");
      }
      switch (lastMessage.subtype) {
        case "success":
          writeToStdout(
            lastMessage.result.endsWith("\n") ? lastMessage.result : lastMessage.result + "\n"
          );
          break;
        case "error_during_execution":
          writeToStdout(`Execution error`);
          break;
        case "error_max_turns":
          writeToStdout(`Error: Reached max turns (${options.maxTurns})`);
          break;
        case "error_max_budget_usd":
          writeToStdout(`Error: Exceeded USD budget (${options.maxBudgetUsd})`);
          break;
        case "error_max_structured_output_retries":
          writeToStdout(
            `Error: Failed to provide valid structured output after maximum retries`
          );
      }
  }
  logHeadlessProfilerTurn();
  if (feature("EXTRACT_MEMORIES") && isExtractModeActive()) {
    await extractMemoriesModule.drainPendingExtraction();
  }
  gracefulShutdownSync(
    lastMessage?.type === "result" && lastMessage?.is_error ? 1 : 0
  );
}
function runHeadlessStreaming(structuredIO, mcpClients, commands, tools, initialMessages, canUseTool, sdkMcpConfigs, getAppState, setAppState, agents, options, turnInterruptionState) {
  let running = false;
  let runPhase;
  let inputClosed = false;
  let shutdownPromptInjected = false;
  let heldBackResult = null;
  let abortController;
  const output = structuredIO.outbound;
  const sigintHandler = () => {
    logForDiagnosticsNoPII("info", "shutdown_signal", { signal: "SIGINT" });
    if (abortController && !abortController.signal.aborted) {
      abortController.abort();
    }
    void gracefulShutdown(0);
  };
  process.on("SIGINT", sigintHandler);
  registerCleanup(async () => {
    const bg = {};
    for (const t of getRunningTasks(getAppState())) {
      if (isBackgroundTask(t)) bg[t.type] = (bg[t.type] ?? 0) + 1;
    }
    logForDiagnosticsNoPII("info", "run_state_at_shutdown", {
      run_active: running,
      run_phase: runPhase,
      worker_status: getSessionState(),
      internal_events_pending: structuredIO.internalEventsPending,
      bg_tasks: bg
    });
  });
  setPermissionModeChangedListener((newMode) => {
    if (newMode === "default" || newMode === "acceptEdits" || newMode === "bypassPermissions" || newMode === "plan" || newMode === (feature("TRANSCRIPT_CLASSIFIER") && "auto") || newMode === "dontAsk") {
      output.enqueue({
        type: "system",
        subtype: "status",
        status: null,
        permissionMode: newMode,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  });
  const suggestionState = {
    abortController: null,
    inflightPromise: null,
    lastEmitted: null,
    pendingSuggestion: null,
    pendingLastEmittedEntry: null
  };
  let unsubscribeAuthStatus;
  if (options.enableAuthStatus) {
    const authStatusManager = AwsAuthStatusManager.getInstance();
    unsubscribeAuthStatus = authStatusManager.subscribe((status) => {
      output.enqueue({
        type: "auth_status",
        isAuthenticating: status.isAuthenticating,
        output: status.output,
        error: status.error,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    });
  }
  const rateLimitListener = (limits) => {
    const rateLimitInfo = toSDKRateLimitInfo(limits);
    if (rateLimitInfo) {
      output.enqueue({
        type: "rate_limit_event",
        rate_limit_info: rateLimitInfo,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  };
  statusListeners.add(rateLimitListener);
  const mutableMessages = initialMessages;
  let readFileState = extractReadFilesFromMessages(
    initialMessages,
    cwd(),
    READ_FILE_STATE_CACHE_SIZE
  );
  const pendingSeeds = createFileStateCacheWithSizeLimit(
    READ_FILE_STATE_CACHE_SIZE
  );
  const resumeInterruptedTurnEnv = process.env.CLAUDE_CODE_RESUME_INTERRUPTED_TURN;
  if (turnInterruptionState && turnInterruptionState.kind !== "none" && resumeInterruptedTurnEnv) {
    logForDebugging(
      `[print.ts] Auto-resuming interrupted turn (kind: ${turnInterruptionState.kind})`
    );
    removeInterruptedMessage(mutableMessages, turnInterruptionState.message);
    enqueue({
      mode: "prompt",
      value: turnInterruptionState.message.message.content,
      uuid: randomUUID2()
    });
  }
  const modelOptions = getModelOptions();
  const modelInfos = modelOptions.map((option) => {
    const modelId = option.value === null ? "default" : option.value;
    const resolvedModel = modelId === "default" ? getDefaultMainLoopModel() : parseUserSpecifiedModel(modelId);
    const hasEffort = modelSupportsEffort(resolvedModel);
    const hasAdaptiveThinking = modelSupportsAdaptiveThinking(resolvedModel);
    const hasFastMode = isFastModeSupportedByModel(option.value);
    const hasAutoMode = modelSupportsAutoMode(resolvedModel);
    return {
      value: modelId,
      displayName: option.label,
      description: option.description,
      ...hasEffort && {
        supportsEffort: true,
        supportedEffortLevels: modelSupportsMaxEffort(resolvedModel) ? [...EFFORT_LEVELS] : EFFORT_LEVELS.filter((l) => l !== "max")
      },
      ...hasAdaptiveThinking && { supportsAdaptiveThinking: true },
      ...hasFastMode && { supportsFastMode: true },
      ...hasAutoMode && { supportsAutoMode: true }
    };
  });
  let activeUserSpecifiedModel = options.userSpecifiedModel;
  function injectModelSwitchBreadcrumbs(modelArg, resolvedModel) {
    const breadcrumbs = createModelSwitchBreadcrumbs(
      modelArg,
      modelDisplayString(resolvedModel)
    );
    mutableMessages.push(...breadcrumbs);
    for (const crumb of breadcrumbs) {
      if (typeof crumb.message.content === "string" && crumb.message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`)) {
        output.enqueue({
          type: "user",
          message: crumb.message,
          session_id: getSessionId(),
          parent_tool_use_id: null,
          uuid: crumb.uuid,
          timestamp: crumb.timestamp,
          isReplay: true
        });
      }
    }
  }
  let sdkClients = [];
  let sdkTools = [];
  const elicitationRegistered = /* @__PURE__ */ new Set();
  function registerElicitationHandlers(clients) {
    for (const connection of clients) {
      if (connection.type !== "connected" || elicitationRegistered.has(connection.name)) {
        continue;
      }
      if (connection.config.type === "sdk") {
        continue;
      }
      const serverName = connection.name;
      try {
        connection.client.setRequestHandler(
          ElicitRequestSchema,
          async (request, extra) => {
            logMCPDebug(
              serverName,
              `Elicitation request received in print mode: ${jsonStringify(request)}`
            );
            const mode = request.params.mode === "url" ? "url" : "form";
            logEvent("tengu_mcp_elicitation_shown", {
              mode
            });
            const hookResponse = await runElicitationHooks(
              serverName,
              request.params,
              extra.signal
            );
            if (hookResponse) {
              logMCPDebug(
                serverName,
                `Elicitation resolved by hook: ${jsonStringify(hookResponse)}`
              );
              logEvent("tengu_mcp_elicitation_response", {
                mode,
                action: hookResponse.action
              });
              return hookResponse;
            }
            const url = "url" in request.params ? request.params.url : void 0;
            const requestedSchema = "requestedSchema" in request.params ? request.params.requestedSchema : void 0;
            const elicitationId = "elicitationId" in request.params ? request.params.elicitationId : void 0;
            const rawResult = await structuredIO.handleElicitation(
              serverName,
              request.params.message,
              requestedSchema,
              extra.signal,
              mode,
              url,
              elicitationId
            );
            const result = await runElicitationResultHooks(
              serverName,
              rawResult,
              extra.signal,
              mode,
              elicitationId
            );
            logEvent("tengu_mcp_elicitation_response", {
              mode,
              action: result.action
            });
            return result;
          }
        );
        connection.client.setNotificationHandler(
          ElicitationCompleteNotificationSchema,
          (notification) => {
            const { elicitationId } = notification.params;
            logMCPDebug(
              serverName,
              `Elicitation completion notification: ${elicitationId}`
            );
            void executeNotificationHooks({
              message: `MCP server "${serverName}" confirmed elicitation ${elicitationId} complete`,
              notificationType: "elicitation_complete"
            });
            output.enqueue({
              type: "system",
              subtype: "elicitation_complete",
              mcp_server_name: serverName,
              elicitation_id: elicitationId,
              uuid: randomUUID2(),
              session_id: getSessionId()
            });
          }
        );
        elicitationRegistered.add(serverName);
      } catch {
      }
    }
  }
  async function updateSdkMcp() {
    const currentServerNames = new Set(Object.keys(sdkMcpConfigs));
    const connectedServerNames = new Set(sdkClients.map((c) => c.name));
    const hasNewServers = Array.from(currentServerNames).some(
      (name) => !connectedServerNames.has(name)
    );
    const hasRemovedServers = Array.from(connectedServerNames).some(
      (name) => !currentServerNames.has(name)
    );
    const hasPendingSdkClients = sdkClients.some((c) => c.type === "pending");
    const hasFailedSdkClients = sdkClients.some((c) => c.type === "failed");
    const haveServersChanged = hasNewServers || hasRemovedServers || hasPendingSdkClients || hasFailedSdkClients;
    if (haveServersChanged) {
      for (const client of sdkClients) {
        if (!currentServerNames.has(client.name)) {
          if (client.type === "connected") {
            await client.cleanup();
          }
        }
      }
      const sdkSetup = await setupSdkMcpClients(
        sdkMcpConfigs,
        (serverName, message) => structuredIO.sendMcpMessage(serverName, message)
      );
      sdkClients = sdkSetup.clients;
      sdkTools = sdkSetup.tools;
      const allSdkNames = uniq([...connectedServerNames, ...currentServerNames]);
      setAppState((prev) => ({
        ...prev,
        mcp: {
          ...prev.mcp,
          tools: [
            ...prev.mcp.tools.filter(
              (t) => !allSdkNames.some(
                (name) => t.name.startsWith(getMcpPrefix(name))
              )
            ),
            ...sdkTools
          ]
        }
      }));
      setupVscodeSdkMcp(sdkClients);
    }
  }
  void updateSdkMcp();
  let dynamicMcpState = {
    clients: [],
    tools: [],
    configs: {}
  };
  const buildAllTools = (appState) => {
    const assembledTools = assembleToolPool(
      appState.toolPermissionContext,
      appState.mcp.tools
    );
    let allTools = uniqBy_default(
      mergeAndFilterTools(
        [...tools, ...sdkTools, ...dynamicMcpState.tools],
        assembledTools,
        appState.toolPermissionContext.mode
      ),
      "name"
    );
    if (options.permissionPromptToolName) {
      allTools = allTools.filter(
        (tool) => !toolMatchesName(tool, options.permissionPromptToolName)
      );
    }
    const initJsonSchema = getInitJsonSchema();
    if (initJsonSchema && !options.jsonSchema) {
      const syntheticOutputResult = createSyntheticOutputTool(initJsonSchema);
      if ("tool" in syntheticOutputResult) {
        allTools = [...allTools, syntheticOutputResult.tool];
      }
    }
    return allTools;
  };
  let bridgeHandle = null;
  let bridgeLastForwardedIndex = 0;
  function forwardMessagesToBridge() {
    if (!bridgeHandle) return;
    const startIndex = Math.min(
      bridgeLastForwardedIndex,
      mutableMessages.length
    );
    const newMessages = mutableMessages.slice(startIndex).filter((m) => m.type === "user" || m.type === "assistant");
    bridgeLastForwardedIndex = mutableMessages.length;
    if (newMessages.length > 0) {
      bridgeHandle.writeMessages(newMessages);
    }
  }
  let mcpChangesPromise = Promise.resolve({
    response: {
      added: [],
      removed: [],
      errors: {}
    },
    sdkServersChanged: false
  });
  function applyMcpServerChanges(servers) {
    const doWork = async () => {
      const oldSdkClientNames = new Set(sdkClients.map((c) => c.name));
      const result = await handleMcpSetServers(
        servers,
        { configs: sdkMcpConfigs, clients: sdkClients, tools: sdkTools },
        dynamicMcpState,
        setAppState
      );
      for (const key of Object.keys(sdkMcpConfigs)) {
        delete sdkMcpConfigs[key];
      }
      Object.assign(sdkMcpConfigs, result.newSdkState.configs);
      sdkClients = result.newSdkState.clients;
      sdkTools = result.newSdkState.tools;
      dynamicMcpState = result.newDynamicState;
      if (result.sdkServersChanged) {
        const newSdkClientNames = new Set(sdkClients.map((c) => c.name));
        const allSdkNames = uniq([...oldSdkClientNames, ...newSdkClientNames]);
        setAppState((prev) => ({
          ...prev,
          mcp: {
            ...prev.mcp,
            tools: [
              ...prev.mcp.tools.filter(
                (t) => !allSdkNames.some(
                  (name) => t.name.startsWith(getMcpPrefix(name))
                )
              ),
              ...sdkTools
            ]
          }
        }));
      }
      return {
        response: result.response,
        sdkServersChanged: result.sdkServersChanged
      };
    };
    mcpChangesPromise = mcpChangesPromise.then(doWork, doWork);
    return mcpChangesPromise;
  }
  function buildMcpServerStatuses() {
    const currentAppState = getAppState();
    const currentMcpClients = currentAppState.mcp.clients;
    const allMcpTools = uniqBy_default(
      [...currentAppState.mcp.tools, ...dynamicMcpState.tools],
      "name"
    );
    const existingNames = /* @__PURE__ */ new Set([
      ...currentMcpClients.map((c) => c.name),
      ...sdkClients.map((c) => c.name)
    ]);
    return [
      ...currentMcpClients,
      ...sdkClients,
      ...dynamicMcpState.clients.filter((c) => !existingNames.has(c.name))
    ].map((connection) => {
      let config;
      if (connection.config.type === "sse" || connection.config.type === "http") {
        config = {
          type: connection.config.type,
          url: connection.config.url,
          headers: connection.config.headers,
          oauth: connection.config.oauth
        };
      } else if (connection.config.type === "claudeai-proxy") {
        config = {
          type: "claudeai-proxy",
          url: connection.config.url,
          id: connection.config.id
        };
      } else if (connection.config.type === "stdio" || connection.config.type === void 0) {
        config = {
          type: "stdio",
          command: connection.config.command,
          args: connection.config.args
        };
      }
      const serverTools = connection.type === "connected" ? filterToolsByServer(allMcpTools, connection.name).map((tool) => ({
        name: tool.mcpInfo?.toolName ?? tool.name,
        annotations: {
          readOnly: tool.isReadOnly({}) || void 0,
          destructive: tool.isDestructive?.({}) || void 0,
          openWorld: tool.isOpenWorld?.({}) || void 0
        }
      })) : void 0;
      let capabilities;
      if ((feature("KAIROS") || feature("KAIROS_CHANNELS")) && connection.type === "connected" && connection.capabilities.experimental) {
        const exp = { ...connection.capabilities.experimental };
        if (exp["claude/channel"] && (!isChannelsEnabled() || !isChannelAllowlisted(connection.config.pluginSource))) {
          delete exp["claude/channel"];
        }
        if (Object.keys(exp).length > 0) {
          capabilities = { experimental: exp };
        }
      }
      return {
        name: connection.name,
        status: connection.type,
        serverInfo: connection.type === "connected" ? connection.serverInfo : void 0,
        error: connection.type === "failed" ? connection.error : void 0,
        config,
        scope: connection.config.scope,
        tools: serverTools,
        capabilities
      };
    });
  }
  async function installPluginsAndApplyMcpInBackground() {
    try {
      await Promise.all([
        feature("DOWNLOAD_USER_SETTINGS") && (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || getIsRemoteMode()) ? withDiagnosticsTiming(
          "headless_user_settings_download",
          () => downloadUserSettings()
        ) : Promise.resolve(),
        withDiagnosticsTiming(
          "headless_managed_settings_wait",
          () => waitForRemoteManagedSettingsToLoad()
        )
      ]);
      const pluginsInstalled = await installPluginsForHeadless();
      if (pluginsInstalled) {
        await applyPluginMcpDiff();
      }
    } catch (error) {
      logError(error);
    }
  }
  let pluginInstallPromise = null;
  if (!isBareMode()) {
    if (isEnvTruthy(process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)) {
      pluginInstallPromise = installPluginsAndApplyMcpInBackground();
    } else {
      void installPluginsAndApplyMcpInBackground();
    }
  }
  const idleTimeout = createIdleTimeoutManager(() => !running);
  let currentCommands = commands;
  let currentAgents = agents;
  async function refreshPluginState() {
    const { agentDefinitions: freshAgentDefs } = await refreshActivePlugins(setAppState);
    currentCommands = await getCommands(cwd());
    const sdkAgents = currentAgents.filter((a) => a.source === "flagSettings");
    currentAgents = [...freshAgentDefs.allAgents, ...sdkAgents];
  }
  async function applyPluginMcpDiff() {
    const { servers: newConfigs } = await getAllMcpConfigs();
    const supportedConfigs = {};
    for (const [name, config] of Object.entries(newConfigs)) {
      const type = config.type;
      if (type === void 0 || type === "stdio" || type === "sse" || type === "http" || type === "sdk") {
        supportedConfigs[name] = config;
      }
    }
    for (const [name, config] of Object.entries(sdkMcpConfigs)) {
      if (config.type === "sdk" && !(name in supportedConfigs)) {
        supportedConfigs[name] = config;
      }
    }
    const { response, sdkServersChanged } = await applyMcpServerChanges(supportedConfigs);
    if (sdkServersChanged) {
      void updateSdkMcp();
    }
    logForDebugging(
      `Headless MCP refresh: added=${response.added.length}, removed=${response.removed.length}`
    );
  }
  const unsubscribeSkillChanges = skillChangeDetector.subscribe(() => {
    clearCommandsCache();
    void getCommands(cwd()).then((newCommands) => {
      currentCommands = newCommands;
    });
  });
  const scheduleProactiveTick = feature("PROACTIVE") || feature("KAIROS") ? () => {
    setTimeout(() => {
      if (!proactiveModule?.isProactiveActive() || proactiveModule.isProactivePaused() || inputClosed) {
        return;
      }
      const tickContent = `<${TICK_TAG}>${(/* @__PURE__ */ new Date()).toLocaleTimeString()}</${TICK_TAG}>`;
      enqueue({
        mode: "prompt",
        value: tickContent,
        uuid: randomUUID2(),
        priority: "later",
        isMeta: true
      });
      void run();
    }, 0);
  } : void 0;
  subscribeToCommandQueue(() => {
    if (abortController && getCommandsByMaxPriority("now").length > 0) {
      abortController.abort("interrupt");
    }
  });
  const run = async () => {
    if (running) {
      return;
    }
    logForDebugging("[HEADLESS] run() entered");
    running = true;
    runPhase = void 0;
    notifySessionStateChanged("running");
    idleTimeout.stop();
    headlessProfilerCheckpoint("run_entry");
    await updateSdkMcp();
    logForDebugging("[HEADLESS] SDK MCP state updated");
    headlessProfilerCheckpoint("after_updateSdkMcp");
    if (pluginInstallPromise) {
      logForDebugging("[HEADLESS] Waiting for synchronous plugin installation...");
      const timeoutMs = parseInt(
        process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS || "",
        10
      );
      if (timeoutMs > 0) {
        const timeout = sleep(timeoutMs).then(() => "timeout");
        const result = await Promise.race([pluginInstallPromise, timeout]);
        if (result === "timeout") {
          logError(
            new Error(
              `CLAUDE_CODE_SYNC_PLUGIN_INSTALL: plugin installation timed out after ${timeoutMs}ms`
            )
          );
          logEvent("tengu_sync_plugin_install_timeout", {
            timeout_ms: timeoutMs
          });
        }
      } else {
        await pluginInstallPromise;
      }
      pluginInstallPromise = null;
      await refreshPluginState();
      logForDebugging("[HEADLESS] Plugin state refreshed after install");
      const { setupPluginHookHotReload } = await import("./loadPluginHooks-SQYQMP6X.mjs");
      setupPluginHookHotReload();
    }
    const isMainThread = (cmd) => cmd.agentId === void 0;
    try {
      let command;
      let waitingForAgents = false;
      const drainCommandQueue = async () => {
        while (command = dequeue(isMainThread)) {
          if (command.mode !== "prompt" && command.mode !== "orphaned-permission" && command.mode !== "task-notification") {
            throw new Error(
              "only prompt commands are supported in streaming mode"
            );
          }
          const batch = [command];
          if (command.mode === "prompt") {
            while (canBatchWith(command, peek(isMainThread))) {
              batch.push(dequeue(isMainThread));
            }
            if (batch.length > 1) {
              command = {
                ...command,
                value: joinPromptValues(batch.map((c) => c.value)),
                uuid: batch.findLast((c) => c.uuid)?.uuid ?? command.uuid
              };
            }
          }
          const batchUuids = batch.map((c) => c.uuid).filter((u) => u !== void 0);
          if (options.replayUserMessages && batch.length > 1) {
            for (const c of batch) {
              if (c.uuid && c.uuid !== command.uuid) {
                output.enqueue({
                  type: "user",
                  message: { role: "user", content: c.value },
                  session_id: getSessionId(),
                  parent_tool_use_id: null,
                  uuid: c.uuid,
                  isReplay: true
                });
              }
            }
          }
          const appState = getAppState();
          const allMcpClients = [
            ...appState.mcp.clients,
            ...sdkClients,
            ...dynamicMcpState.clients
          ];
          registerElicitationHandlers(allMcpClients);
          for (const client of allMcpClients) {
            reregisterChannelHandlerAfterReconnect(client);
          }
          const allTools = buildAllTools(appState);
          for (const uuid of batchUuids) {
            notifyCommandLifecycle(uuid, "started");
          }
          if (command.mode === "task-notification") {
            const notificationText = typeof command.value === "string" ? command.value : "";
            const taskIdMatch = notificationText.match(
              /<task-id>([^<]+)<\/task-id>/
            );
            const toolUseIdMatch = notificationText.match(
              /<tool-use-id>([^<]+)<\/tool-use-id>/
            );
            const outputFileMatch = notificationText.match(
              /<output-file>([^<]+)<\/output-file>/
            );
            const statusMatch = notificationText.match(
              /<status>([^<]+)<\/status>/
            );
            const summaryMatch = notificationText.match(
              /<summary>([^<]+)<\/summary>/
            );
            const isValidStatus = (s) => s === "completed" || s === "failed" || s === "stopped" || s === "killed";
            const rawStatus = statusMatch?.[1];
            const status = isValidStatus(rawStatus) ? rawStatus === "killed" ? "stopped" : rawStatus : "completed";
            const usageMatch = notificationText.match(
              /<usage>([\s\S]*?)<\/usage>/
            );
            const usageContent = usageMatch?.[1] ?? "";
            const totalTokensMatch = usageContent.match(
              /<total_tokens>(\d+)<\/total_tokens>/
            );
            const toolUsesMatch = usageContent.match(
              /<tool_uses>(\d+)<\/tool_uses>/
            );
            const durationMsMatch = usageContent.match(
              /<duration_ms>(\d+)<\/duration_ms>/
            );
            if (statusMatch) {
              output.enqueue({
                type: "system",
                subtype: "task_notification",
                task_id: taskIdMatch?.[1] ?? "",
                tool_use_id: toolUseIdMatch?.[1],
                status,
                output_file: outputFileMatch?.[1] ?? "",
                summary: summaryMatch?.[1] ?? "",
                usage: totalTokensMatch && toolUsesMatch ? {
                  total_tokens: parseInt(totalTokensMatch[1], 10),
                  tool_uses: parseInt(toolUsesMatch[1], 10),
                  duration_ms: durationMsMatch ? parseInt(durationMsMatch[1], 10) : 0
                } : void 0,
                session_id: getSessionId(),
                uuid: randomUUID2()
              });
            }
          }
          const input = command.value;
          if (structuredIO instanceof RemoteIO && command.mode === "prompt") {
            logEvent("tengu_bridge_message_received", {
              is_repl: false
            });
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.pendingSuggestion = null;
          suggestionState.pendingLastEmittedEntry = null;
          if (suggestionState.lastEmitted) {
            if (command.mode === "prompt") {
              const inputText = typeof input === "string" ? input : input.find((b) => b.type === "text")?.text;
              if (typeof inputText === "string") {
                logSuggestionOutcome(
                  suggestionState.lastEmitted.text,
                  inputText,
                  suggestionState.lastEmitted.emittedAt,
                  suggestionState.lastEmitted.promptId,
                  suggestionState.lastEmitted.generationRequestId
                );
              }
              suggestionState.lastEmitted = null;
            }
          }
          abortController = createAbortController();
          const turnStartTime = feature("FILE_PERSISTENCE") ? Date.now() : void 0;
          headlessProfilerCheckpoint("before_ask");
          startQueryProfile();
          const cmd = command;
          logForDebugging(`[HEADLESS] Starting ask() for command mode=${cmd.mode} uuid=${cmd.uuid ?? "none"}`);
          await runWithWorkload(cmd.workload ?? options.workload, async () => {
            for await (const message of ask({
              commands: uniqBy_default(
                [...currentCommands, ...appState.mcp.commands],
                "name"
              ),
              prompt: input,
              promptUuid: cmd.uuid,
              isMeta: cmd.isMeta,
              cwd: cwd(),
              tools: allTools,
              verbose: options.verbose,
              mcpClients: allMcpClients,
              thinkingConfig: options.thinkingConfig,
              maxTurns: options.maxTurns,
              maxBudgetUsd: options.maxBudgetUsd,
              taskBudget: options.taskBudget,
              canUseTool,
              userSpecifiedModel: activeUserSpecifiedModel,
              fallbackModel: options.fallbackModel,
              jsonSchema: getInitJsonSchema() ?? options.jsonSchema,
              mutableMessages,
              getReadFileCache: () => pendingSeeds.size === 0 ? readFileState : mergeFileStateCaches(readFileState, pendingSeeds),
              setReadFileCache: (cache) => {
                readFileState = cache;
                for (const [path, seed] of pendingSeeds.entries()) {
                  const existing = readFileState.get(path);
                  if (!existing || seed.timestamp > existing.timestamp) {
                    readFileState.set(path, seed);
                  }
                }
                pendingSeeds.clear();
              },
              customSystemPrompt: options.systemPrompt,
              appendSystemPrompt: options.appendSystemPrompt,
              getAppState,
              setAppState,
              abortController,
              replayUserMessages: options.replayUserMessages,
              includePartialMessages: options.includePartialMessages,
              handleElicitation: (serverName, params, elicitSignal) => structuredIO.handleElicitation(
                serverName,
                params.message,
                void 0,
                elicitSignal,
                params.mode,
                params.url,
                "elicitationId" in params ? params.elicitationId : void 0
              ),
              agents: currentAgents,
              orphanedPermission: cmd.orphanedPermission,
              setSDKStatus: (status) => {
                output.enqueue({
                  type: "system",
                  subtype: "status",
                  status,
                  session_id: getSessionId(),
                  uuid: randomUUID2()
                });
              }
            })) {
              forwardMessagesToBridge();
              if (message.type === "result") {
                for (const event of drainSdkEvents()) {
                  output.enqueue(event);
                }
                const currentState = getAppState();
                if (getRunningTasks(currentState).some(
                  (t) => (t.type === "local_agent" || t.type === "local_workflow") && isBackgroundTask(t)
                )) {
                  heldBackResult = message;
                } else {
                  heldBackResult = null;
                  output.enqueue(message);
                }
              } else {
                for (const event of drainSdkEvents()) {
                  output.enqueue(event);
                }
                output.enqueue(message);
              }
            }
          });
          for (const uuid of batchUuids) {
            notifyCommandLifecycle(uuid, "completed");
          }
          forwardMessagesToBridge();
          bridgeHandle?.sendResult();
          if (feature("FILE_PERSISTENCE") && turnStartTime !== void 0) {
            void executeFilePersistence(
              turnStartTime,
              abortController.signal,
              (result) => {
                output.enqueue({
                  type: "system",
                  subtype: "files_persisted",
                  files: result.files,
                  failed: result.failed,
                  processed_at: (/* @__PURE__ */ new Date()).toISOString(),
                  uuid: randomUUID2(),
                  session_id: getSessionId()
                });
              }
            );
          }
          if (options.promptSuggestions && !isEnvDefinedFalsy(process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION)) {
            const state = suggestionState;
            state.abortController?.abort();
            const localAbort = new AbortController();
            suggestionState.abortController = localAbort;
            const cacheSafeParams = getLastCacheSafeParams();
            if (!cacheSafeParams) {
              logSuggestionSuppressed(
                "sdk_no_params",
                void 0,
                void 0,
                "sdk"
              );
            } else {
              const ref = { promise: null };
              ref.promise = (async () => {
                try {
                  const result = await tryGenerateSuggestion(
                    localAbort,
                    mutableMessages,
                    getAppState,
                    cacheSafeParams,
                    "sdk"
                  );
                  if (!result || localAbort.signal.aborted) return;
                  const suggestionMsg = {
                    type: "prompt_suggestion",
                    suggestion: result.suggestion,
                    uuid: randomUUID2(),
                    session_id: getSessionId()
                  };
                  const lastEmittedEntry = {
                    text: result.suggestion,
                    emittedAt: Date.now(),
                    promptId: result.promptId,
                    generationRequestId: result.generationRequestId
                  };
                  if (heldBackResult) {
                    suggestionState.pendingSuggestion = suggestionMsg;
                    suggestionState.pendingLastEmittedEntry = {
                      text: lastEmittedEntry.text,
                      promptId: lastEmittedEntry.promptId,
                      generationRequestId: lastEmittedEntry.generationRequestId
                    };
                  } else {
                    suggestionState.lastEmitted = lastEmittedEntry;
                    output.enqueue(suggestionMsg);
                  }
                } catch (error) {
                  if (error instanceof Error && (error.name === "AbortError" || error.name === "APIUserAbortError")) {
                    logSuggestionSuppressed(
                      "aborted",
                      void 0,
                      void 0,
                      "sdk"
                    );
                    return;
                  }
                  logError(toError(error));
                } finally {
                  if (suggestionState.inflightPromise === ref.promise) {
                    suggestionState.inflightPromise = null;
                  }
                }
              })();
              suggestionState.inflightPromise = ref.promise;
            }
          }
          logHeadlessProfilerTurn();
          logQueryProfileReport();
          headlessProfilerStartTurn();
        }
      };
      do {
        for (const event of drainSdkEvents()) {
          output.enqueue(event);
        }
        runPhase = "draining_commands";
        await drainCommandQueue();
        waitingForAgents = false;
        {
          const state = getAppState();
          const hasRunningBg = getRunningTasks(state).some(
            (t) => isBackgroundTask(t) && t.type !== "in_process_teammate"
          );
          const hasMainThreadQueued = peek(isMainThread) !== void 0;
          if (hasRunningBg || hasMainThreadQueued) {
            waitingForAgents = true;
            if (!hasMainThreadQueued) {
              runPhase = "waiting_for_agents";
              await sleep(100);
            }
          }
        }
      } while (waitingForAgents);
      if (heldBackResult) {
        output.enqueue(heldBackResult);
        heldBackResult = null;
        if (suggestionState.pendingSuggestion) {
          output.enqueue(suggestionState.pendingSuggestion);
          if (suggestionState.pendingLastEmittedEntry) {
            suggestionState.lastEmitted = {
              ...suggestionState.pendingLastEmittedEntry,
              emittedAt: Date.now()
            };
            suggestionState.pendingLastEmittedEntry = null;
          }
          suggestionState.pendingSuggestion = null;
        }
      }
    } catch (error) {
      try {
        await structuredIO.write({
          type: "result",
          subtype: "error_during_execution",
          duration_ms: 0,
          duration_api_ms: 0,
          is_error: true,
          num_turns: 0,
          stop_reason: null,
          session_id: getSessionId(),
          total_cost_usd: 0,
          usage: EMPTY_USAGE,
          modelUsage: {},
          permission_denials: [],
          uuid: randomUUID2(),
          errors: [
            errorMessage(error),
            ...getInMemoryErrors().map((_) => _.error)
          ]
        });
      } catch {
      }
      suggestionState.abortController?.abort();
      gracefulShutdownSync(1);
      return;
    } finally {
      runPhase = "finally_flush";
      await structuredIO.flushInternalEvents();
      runPhase = "finally_post_flush";
      if (!isShuttingDown()) {
        notifySessionStateChanged("idle");
        for (const event of drainSdkEvents()) {
          output.enqueue(event);
        }
      }
      running = false;
      idleTimeout.start();
    }
    if ((feature("PROACTIVE") || feature("KAIROS")) && proactiveModule?.isProactiveActive() && !proactiveModule.isProactivePaused()) {
      if (peek(isMainThread) === void 0 && !inputClosed) {
        scheduleProactiveTick();
        return;
      }
    }
    if (peek(isMainThread) !== void 0) {
      void run();
      return;
    }
    {
      const currentAppState = getAppState();
      const teamContext = currentAppState.teamContext;
      if (teamContext && isTeamLead(teamContext)) {
        const agentName = "team-lead";
        const POLL_INTERVAL_MS = 500;
        while (true) {
          const refreshedState = getAppState();
          const hasActiveTeammates = hasActiveInProcessTeammates(refreshedState) || refreshedState.teamContext && Object.keys(refreshedState.teamContext.teammates).length > 0;
          if (!hasActiveTeammates) {
            logForDebugging(
              "[print.ts] No more active teammates, stopping poll"
            );
            break;
          }
          const unread = await readUnreadMessages(
            agentName,
            refreshedState.teamContext?.teamName
          );
          if (unread.length > 0) {
            logForDebugging(
              `[print.ts] Team-lead found ${unread.length} unread messages`
            );
            await markMessagesAsRead(
              agentName,
              refreshedState.teamContext?.teamName
            );
            const teamName = refreshedState.teamContext?.teamName;
            for (const m of unread) {
              const shutdownApproval = isShutdownApproved(m.text);
              if (shutdownApproval && teamName) {
                const teammateToRemove = shutdownApproval.from;
                logForDebugging(
                  `[print.ts] Processing shutdown_approved from ${teammateToRemove}`
                );
                const teammateId = refreshedState.teamContext?.teammates ? Object.entries(refreshedState.teamContext.teammates).find(
                  ([, t]) => t.name === teammateToRemove
                )?.[0] : void 0;
                if (teammateId) {
                  removeTeammateFromTeamFile(teamName, {
                    agentId: teammateId,
                    name: teammateToRemove
                  });
                  logForDebugging(
                    `[print.ts] Removed ${teammateToRemove} from team file`
                  );
                  await unassignTeammateTasks(
                    teamName,
                    teammateId,
                    teammateToRemove,
                    "shutdown"
                  );
                  setAppState((prev) => {
                    if (!prev.teamContext?.teammates) return prev;
                    if (!(teammateId in prev.teamContext.teammates)) return prev;
                    const { [teammateId]: _, ...remainingTeammates } = prev.teamContext.teammates;
                    return {
                      ...prev,
                      teamContext: {
                        ...prev.teamContext,
                        teammates: remainingTeammates
                      }
                    };
                  });
                }
              }
            }
            const formatted = unread.map(
              (m) => `<${TEAMMATE_MESSAGE_TAG} teammate_id="${m.from}"${m.color ? ` color="${m.color}"` : ""}>
${m.text}
</${TEAMMATE_MESSAGE_TAG}>`
            ).join("\n\n");
            enqueue({
              mode: "prompt",
              value: formatted,
              uuid: randomUUID2()
            });
            void run();
            return;
          }
          if (inputClosed && !shutdownPromptInjected) {
            shutdownPromptInjected = true;
            logForDebugging(
              "[print.ts] Input closed with active teammates, injecting shutdown prompt"
            );
            enqueue({
              mode: "prompt",
              value: SHUTDOWN_TEAM_PROMPT,
              uuid: randomUUID2()
            });
            void run();
            return;
          }
          await sleep(POLL_INTERVAL_MS);
        }
      }
    }
    if (inputClosed) {
      const hasActiveSwarm = await (async () => {
        const currentAppState = getAppState();
        if (hasWorkingInProcessTeammates(currentAppState)) {
          await waitForTeammatesToBecomeIdle(setAppState, currentAppState);
        }
        const refreshedAppState = getAppState();
        const refreshedTeamContext = refreshedAppState.teamContext;
        const hasTeamMembersNotCleanedUp = refreshedTeamContext && Object.keys(refreshedTeamContext.teammates).length > 0;
        return hasTeamMembersNotCleanedUp || hasActiveInProcessTeammates(refreshedAppState);
      })();
      if (hasActiveSwarm) {
        enqueue({
          mode: "prompt",
          value: SHUTDOWN_TEAM_PROMPT,
          uuid: randomUUID2()
        });
        void run();
      } else {
        if (suggestionState.inflightPromise) {
          await Promise.race([suggestionState.inflightPromise, sleep(5e3)]);
        }
        suggestionState.abortController?.abort();
        suggestionState.abortController = null;
        await finalizePendingAsyncHooks();
        unsubscribeSkillChanges();
        unsubscribeAuthStatus?.();
        statusListeners.delete(rateLimitListener);
        output.done();
      }
    }
  };
  if (feature("UDS_INBOX")) {
    const { setOnEnqueue } = (init_udsMessaging(), __toCommonJS(udsMessaging_exports));
    setOnEnqueue(() => {
      if (!inputClosed) {
        void run();
      }
    });
  }
  let cronScheduler = null;
  if (feature("AGENT_TRIGGERS") && cronSchedulerModule && cronGate?.isKairosCronEnabled()) {
    cronScheduler = cronSchedulerModule.createCronScheduler({
      onFire: (prompt) => {
        if (inputClosed) return;
        enqueue({
          mode: "prompt",
          value: prompt,
          uuid: randomUUID2(),
          priority: "later",
          // System-generated — matches useScheduledTasks.ts REPL equivalent.
          // Without this, messages.ts metaProp eval is {} → prompt leaks
          // into visible transcript when cron fires mid-turn in -p mode.
          isMeta: true,
          // Threaded to cc_workload= in the billing-header attribution block
          // so the API can serve cron requests at lower QoS. drainCommandQueue
          // reads this per-iteration and hoists it into bootstrap state for
          // the ask() call.
          workload: WORKLOAD_CRON
        });
        void run();
      },
      isLoading: () => running || inputClosed,
      getJitterConfig: cronJitterConfigModule?.getCronJitterConfig,
      isKilled: () => !cronGate?.isKairosCronEnabled()
    });
    cronScheduler.start();
  }
  const sendControlResponseSuccess = function(message, response) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: message.request_id,
        response
      }
    });
  };
  const sendControlResponseError = function(message, errorMessage2) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: message.request_id,
        error: errorMessage2
      }
    });
  };
  const handledOrphanedToolUseIds = /* @__PURE__ */ new Set();
  structuredIO.setUnexpectedResponseCallback(async (message) => {
    await handleOrphanedPermissionResponse({
      message,
      setAppState,
      handledToolUseIds: handledOrphanedToolUseIds,
      onEnqueued: () => {
        void run();
      }
    });
  });
  const activeOAuthFlows = /* @__PURE__ */ new Map();
  const oauthCallbackSubmitters = /* @__PURE__ */ new Map();
  const oauthManualCallbackUsed = /* @__PURE__ */ new Set();
  const oauthAuthPromises = /* @__PURE__ */ new Map();
  let claudeOAuth = null;
  void (async () => {
    let initialized = false;
    logForDiagnosticsNoPII("info", "cli_message_loop_started");
    for await (const message of structuredIO.structuredInput) {
      const eventId = "uuid" in message ? message.uuid : void 0;
      if (eventId && message.type !== "user" && message.type !== "control_response") {
        notifyCommandLifecycle(eventId, "completed");
      }
      if (message.type === "control_request") {
        if (message.request.subtype === "interrupt") {
          if (feature("COMMIT_ATTRIBUTION")) {
            setAppState((prev) => ({
              ...prev,
              attribution: {
                ...prev.attribution,
                escapeCount: prev.attribution.escapeCount + 1
              }
            }));
          }
          if (abortController) {
            abortController.abort();
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.lastEmitted = null;
          suggestionState.pendingSuggestion = null;
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "end_session") {
          logForDebugging(
            `[print.ts] end_session received, reason=${message.request.reason ?? "unspecified"}`
          );
          if (abortController) {
            abortController.abort();
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.lastEmitted = null;
          suggestionState.pendingSuggestion = null;
          sendControlResponseSuccess(message);
          break;
        } else if (message.request.subtype === "initialize") {
          if (message.request.sdkMcpServers && message.request.sdkMcpServers.length > 0) {
            for (const serverName of message.request.sdkMcpServers) {
              sdkMcpConfigs[serverName] = {
                type: "sdk",
                name: serverName
              };
            }
          }
          await handleInitializeRequest(
            message.request,
            message.request_id,
            initialized,
            output,
            commands,
            modelInfos,
            structuredIO,
            !!options.enableAuthStatus,
            options,
            agents,
            getAppState
          );
          if (message.request.promptSuggestions) {
            setAppState((prev) => {
              if (prev.promptSuggestionEnabled) return prev;
              return { ...prev, promptSuggestionEnabled: true };
            });
          }
          if (message.request.agentProgressSummaries && getFeatureValue_CACHED_MAY_BE_STALE("tengu_slate_prism", true)) {
            setSdkAgentProgressSummariesEnabled(true);
          }
          initialized = true;
          if (hasCommandsInQueue()) {
            void run();
          }
        } else if (message.request.subtype === "set_permission_mode") {
          const m = message.request;
          setAppState((prev) => ({
            ...prev,
            toolPermissionContext: handleSetPermissionMode(
              m,
              message.request_id,
              prev.toolPermissionContext,
              output
            ),
            isUltraplanMode: m.ultraplan ?? prev.isUltraplanMode
          }));
        } else if (message.request.subtype === "set_model") {
          const requestedModel = message.request.model ?? "default";
          const model = requestedModel === "default" ? getDefaultMainLoopModel() : requestedModel;
          activeUserSpecifiedModel = model;
          setMainLoopModelOverride(model);
          notifySessionMetadataChanged({ model });
          injectModelSwitchBreadcrumbs(requestedModel, model);
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "set_max_thinking_tokens") {
          if (message.request.max_thinking_tokens === null) {
            options.thinkingConfig = void 0;
          } else if (message.request.max_thinking_tokens === 0) {
            options.thinkingConfig = { type: "disabled" };
          } else {
            options.thinkingConfig = {
              type: "enabled",
              budgetTokens: message.request.max_thinking_tokens
            };
          }
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "mcp_status") {
          sendControlResponseSuccess(message, {
            mcpServers: buildMcpServerStatuses()
          });
        } else if (message.request.subtype === "get_context_usage") {
          try {
            const appState = getAppState();
            const data = await collectContextData({
              messages: mutableMessages,
              getAppState,
              options: {
                mainLoopModel: getMainLoopModel(),
                tools: buildAllTools(appState),
                agentDefinitions: appState.agentDefinitions,
                customSystemPrompt: options.systemPrompt,
                appendSystemPrompt: options.appendSystemPrompt
              }
            });
            sendControlResponseSuccess(message, { ...data });
          } catch (error) {
            sendControlResponseError(message, errorMessage(error));
          }
        } else if (message.request.subtype === "mcp_message") {
          const mcpRequest = message.request;
          const sdkClient = sdkClients.find(
            (client) => client.name === mcpRequest.server_name
          );
          if (sdkClient && sdkClient.type === "connected" && sdkClient.client?.transport?.onmessage) {
            sdkClient.client.transport.onmessage(mcpRequest.message);
          }
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "rewind_files") {
          const appState = getAppState();
          const result = await handleRewindFiles(
            message.request.user_message_id,
            appState,
            setAppState,
            message.request.dry_run ?? false
          );
          if (result.canRewind || message.request.dry_run) {
            sendControlResponseSuccess(message, result);
          } else {
            sendControlResponseError(
              message,
              result.error ?? "Unexpected error"
            );
          }
        } else if (message.request.subtype === "cancel_async_message") {
          const targetUuid = message.request.message_uuid;
          const removed = dequeueAllMatching((cmd) => cmd.uuid === targetUuid);
          sendControlResponseSuccess(message, {
            cancelled: removed.length > 0
          });
        } else if (message.request.subtype === "seed_read_state") {
          try {
            const normalizedPath = expandPath(message.request.path);
            const diskMtime = Math.floor((await stat(normalizedPath)).mtimeMs);
            if (diskMtime <= message.request.mtime) {
              const raw = await readFile2(normalizedPath, "utf-8");
              const content = (raw.charCodeAt(0) === 65279 ? raw.slice(1) : raw).replaceAll("\r\n", "\n");
              pendingSeeds.set(normalizedPath, {
                content,
                timestamp: diskMtime,
                offset: void 0,
                limit: void 0
              });
            }
          } catch {
          }
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "mcp_set_servers") {
          const { response, sdkServersChanged } = await applyMcpServerChanges(
            message.request.servers
          );
          sendControlResponseSuccess(message, response);
          if (sdkServersChanged) {
            void updateSdkMcp();
          }
        } else if (message.request.subtype === "reload_plugins") {
          try {
            if (feature("DOWNLOAD_USER_SETTINGS") && (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || getIsRemoteMode())) {
              const applied = await redownloadUserSettings();
              if (applied) {
                settingsChangeDetector.notifyChange("userSettings");
              }
            }
            const r = await refreshActivePlugins(setAppState);
            const sdkAgents = currentAgents.filter(
              (a) => a.source === "flagSettings"
            );
            currentAgents = [...r.agentDefinitions.allAgents, ...sdkAgents];
            let plugins = [];
            const [cmdsR, mcpR, pluginsR] = await Promise.allSettled([
              getCommands(cwd()),
              applyPluginMcpDiff(),
              loadAllPluginsCacheOnly()
            ]);
            if (cmdsR.status === "fulfilled") {
              currentCommands = cmdsR.value;
            } else {
              logError(cmdsR.reason);
            }
            if (mcpR.status === "rejected") {
              logError(mcpR.reason);
            }
            if (pluginsR.status === "fulfilled") {
              plugins = pluginsR.value.enabled.map((p) => ({
                name: p.name,
                path: p.path,
                source: p.source
              }));
            } else {
              logError(pluginsR.reason);
            }
            sendControlResponseSuccess(message, {
              commands: currentCommands.filter((cmd) => cmd.userInvocable !== false).map((cmd) => ({
                name: getCommandName(cmd),
                description: formatDescriptionWithSource(cmd),
                argumentHint: cmd.argumentHint || ""
              })),
              agents: currentAgents.map((a) => ({
                name: a.agentType,
                description: a.whenToUse,
                model: a.model === "inherit" ? void 0 : a.model
              })),
              plugins,
              mcpServers: buildMcpServerStatuses(),
              error_count: r.error_count
            });
          } catch (error) {
            sendControlResponseError(message, errorMessage(error));
          }
        } else if (message.request.subtype === "mcp_reconnect") {
          const currentAppState = getAppState();
          const { serverName } = message.request;
          elicitationRegistered.delete(serverName);
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? sdkClients.find((c) => c.name === serverName)?.config ?? dynamicMcpState.clients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(message, `Server not found: ${serverName}`);
          } else {
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map(
                  (c) => c.name === serverName ? result.client : c
                ),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(
                    prev.mcp.commands,
                    (c) => commandBelongsToServer(c, serverName)
                  ),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? { ...prev.mcp.resources, [serverName]: result.resources } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            dynamicMcpState = {
              ...dynamicMcpState,
              clients: [
                ...dynamicMcpState.clients.filter((c) => c.name !== serverName),
                result.client
              ],
              tools: [
                ...dynamicMcpState.tools.filter(
                  (t) => !t.name?.startsWith(prefix)
                ),
                ...result.tools
              ]
            };
            if (result.client.type === "connected") {
              registerElicitationHandlers([result.client]);
              reregisterChannelHandlerAfterReconnect(result.client);
              sendControlResponseSuccess(message);
            } else {
              const errorMessage2 = result.client.type === "failed" ? result.client.error ?? "Connection failed" : `Server status: ${result.client.type}`;
              sendControlResponseError(message, errorMessage2);
            }
          }
        } else if (message.request.subtype === "mcp_toggle") {
          const currentAppState = getAppState();
          const { serverName, enabled } = message.request;
          elicitationRegistered.delete(serverName);
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? sdkClients.find((c) => c.name === serverName)?.config ?? dynamicMcpState.clients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(message, `Server not found: ${serverName}`);
          } else if (!enabled) {
            setMcpServerEnabled(serverName, false);
            const client = [
              ...mcpClients,
              ...sdkClients,
              ...dynamicMcpState.clients,
              ...currentAppState.mcp.clients
            ].find((c) => c.name === serverName);
            if (client && client.type === "connected") {
              await clearServerCache(serverName, config);
            }
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map(
                  (c) => c.name === serverName ? { name: serverName, type: "disabled", config } : c
                ),
                tools: reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                commands: reject_default(
                  prev.mcp.commands,
                  (c) => commandBelongsToServer(c, serverName)
                ),
                resources: omit_default(prev.mcp.resources, serverName)
              }
            }));
            sendControlResponseSuccess(message);
          } else {
            setMcpServerEnabled(serverName, true);
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map(
                  (c) => c.name === serverName ? result.client : c
                ),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(
                    prev.mcp.commands,
                    (c) => commandBelongsToServer(c, serverName)
                  ),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? { ...prev.mcp.resources, [serverName]: result.resources } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            if (result.client.type === "connected") {
              registerElicitationHandlers([result.client]);
              reregisterChannelHandlerAfterReconnect(result.client);
              sendControlResponseSuccess(message);
            } else {
              const errorMessage2 = result.client.type === "failed" ? result.client.error ?? "Connection failed" : `Server status: ${result.client.type}`;
              sendControlResponseError(message, errorMessage2);
            }
          }
        } else if (message.request.subtype === "channel_enable") {
          const currentAppState = getAppState();
          handleChannelEnable(
            message.request_id,
            message.request.serverName,
            // Pool spread matches mcp_status — all three client sources.
            [
              ...currentAppState.mcp.clients,
              ...sdkClients,
              ...dynamicMcpState.clients
            ],
            output
          );
        } else if (message.request.subtype === "mcp_authenticate") {
          const { serverName } = message.request;
          const currentAppState = getAppState();
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(message, `Server not found: ${serverName}`);
          } else if (config.type !== "sse" && config.type !== "http") {
            sendControlResponseError(
              message,
              `Server type "${config.type}" does not support OAuth authentication`
            );
          } else {
            try {
              activeOAuthFlows.get(serverName)?.abort();
              const controller = new AbortController();
              activeOAuthFlows.set(serverName, controller);
              let resolveAuthUrl;
              const authUrlPromise = new Promise((resolve) => {
                resolveAuthUrl = resolve;
              });
              const oauthPromise = performMCPOAuthFlow(
                serverName,
                config,
                (url) => resolveAuthUrl(url),
                controller.signal,
                {
                  skipBrowserOpen: true,
                  onWaitingForCallback: (submit) => {
                    oauthCallbackSubmitters.set(serverName, submit);
                  }
                }
              );
              const authUrl = await Promise.race([
                authUrlPromise,
                oauthPromise.then(() => null)
              ]);
              if (authUrl) {
                sendControlResponseSuccess(message, {
                  authUrl,
                  requiresUserAction: true
                });
              } else {
                sendControlResponseSuccess(message, {
                  requiresUserAction: false
                });
              }
              oauthAuthPromises.set(serverName, oauthPromise);
              const fullFlowPromise = oauthPromise.then(async () => {
                if (isMcpServerDisabled(serverName)) {
                  return;
                }
                if (oauthManualCallbackUsed.has(serverName)) {
                  return;
                }
                const result = await reconnectMcpServerImpl(
                  serverName,
                  config
                );
                const prefix = getMcpPrefix(serverName);
                setAppState((prev) => ({
                  ...prev,
                  mcp: {
                    ...prev.mcp,
                    clients: prev.mcp.clients.map(
                      (c) => c.name === serverName ? result.client : c
                    ),
                    tools: [
                      ...reject_default(
                        prev.mcp.tools,
                        (t) => t.name?.startsWith(prefix)
                      ),
                      ...result.tools
                    ],
                    commands: [
                      ...reject_default(
                        prev.mcp.commands,
                        (c) => commandBelongsToServer(c, serverName)
                      ),
                      ...result.commands
                    ],
                    resources: result.resources && result.resources.length > 0 ? {
                      ...prev.mcp.resources,
                      [serverName]: result.resources
                    } : omit_default(prev.mcp.resources, serverName)
                  }
                }));
                dynamicMcpState = {
                  ...dynamicMcpState,
                  clients: [
                    ...dynamicMcpState.clients.filter(
                      (c) => c.name !== serverName
                    ),
                    result.client
                  ],
                  tools: [
                    ...dynamicMcpState.tools.filter(
                      (t) => !t.name?.startsWith(prefix)
                    ),
                    ...result.tools
                  ]
                };
              }).catch((error) => {
                logForDebugging(
                  `MCP OAuth failed for ${serverName}: ${error}`,
                  { level: "error" }
                );
              }).finally(() => {
                if (activeOAuthFlows.get(serverName) === controller) {
                  activeOAuthFlows.delete(serverName);
                  oauthCallbackSubmitters.delete(serverName);
                  oauthManualCallbackUsed.delete(serverName);
                  oauthAuthPromises.delete(serverName);
                }
              });
              void fullFlowPromise;
            } catch (error) {
              sendControlResponseError(message, errorMessage(error));
            }
          }
        } else if (message.request.subtype === "mcp_oauth_callback_url") {
          const { serverName, callbackUrl } = message.request;
          const submit = oauthCallbackSubmitters.get(serverName);
          if (submit) {
            let hasCodeOrError = false;
            try {
              const parsed = new URL(callbackUrl);
              hasCodeOrError = parsed.searchParams.has("code") || parsed.searchParams.has("error");
            } catch {
            }
            if (!hasCodeOrError) {
              sendControlResponseError(
                message,
                "Invalid callback URL: missing authorization code. Please paste the full redirect URL including the code parameter."
              );
            } else {
              oauthManualCallbackUsed.add(serverName);
              submit(callbackUrl);
              const authPromise = oauthAuthPromises.get(serverName);
              if (authPromise) {
                try {
                  await authPromise;
                  sendControlResponseSuccess(message);
                } catch (error) {
                  sendControlResponseError(
                    message,
                    error instanceof Error ? error.message : "OAuth authentication failed"
                  );
                }
              } else {
                sendControlResponseSuccess(message);
              }
            }
          } else {
            sendControlResponseError(
              message,
              `No active OAuth flow for server: ${serverName}`
            );
          }
        } else if (message.request.subtype === "claude_authenticate") {
          const { loginWithClaudeAi } = message.request;
          claudeOAuth?.service.cleanup();
          logEvent("tengu_oauth_flow_start", {
            loginWithClaudeAi: loginWithClaudeAi ?? true
          });
          const service = new OAuthService();
          let urlResolver;
          const urlPromise = new Promise((resolve) => {
            urlResolver = resolve;
          });
          const flow = service.startOAuthFlow(
            async (manualUrl, automaticUrl) => {
              urlResolver({ manualUrl, automaticUrl });
            },
            {
              loginWithClaudeAi: loginWithClaudeAi ?? true,
              skipBrowserOpen: true
            }
          ).then(async (tokens) => {
            await installOAuthTokens(tokens);
            logEvent("tengu_oauth_success", {
              loginWithClaudeAi: loginWithClaudeAi ?? true
            });
          }).finally(() => {
            service.cleanup();
            if (claudeOAuth?.service === service) {
              claudeOAuth = null;
            }
          });
          claudeOAuth = { service, flow };
          void flow.catch(
            (err) => logForDebugging(`claude_authenticate flow ended: ${err}`, {
              level: "info"
            })
          );
          try {
            const { manualUrl, automaticUrl } = await Promise.race([
              urlPromise,
              flow.then(() => {
                throw new Error(
                  "OAuth flow completed without producing auth URLs"
                );
              })
            ]);
            sendControlResponseSuccess(message, {
              manualUrl,
              automaticUrl
            });
          } catch (error) {
            sendControlResponseError(message, errorMessage(error));
          }
        } else if (message.request.subtype === "claude_oauth_callback" || message.request.subtype === "claude_oauth_wait_for_completion") {
          if (!claudeOAuth) {
            sendControlResponseError(
              message,
              "No active claude_authenticate flow"
            );
          } else {
            if (message.request.subtype === "claude_oauth_callback") {
              claudeOAuth.service.handleManualAuthCodeInput({
                authorizationCode: message.request.authorizationCode,
                state: message.request.state
              });
            }
            const { flow } = claudeOAuth;
            void flow.then(
              () => {
                const accountInfo = getAccountInformation();
                sendControlResponseSuccess(message, {
                  account: {
                    email: accountInfo?.email,
                    organization: accountInfo?.organization,
                    subscriptionType: accountInfo?.subscription,
                    tokenSource: accountInfo?.tokenSource,
                    apiKeySource: accountInfo?.apiKeySource,
                    apiProvider: getAPIProvider()
                  }
                });
              },
              (error) => sendControlResponseError(message, errorMessage(error))
            );
          }
        } else if (message.request.subtype === "mcp_clear_auth") {
          const { serverName } = message.request;
          const currentAppState = getAppState();
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(message, `Server not found: ${serverName}`);
          } else if (config.type !== "sse" && config.type !== "http") {
            sendControlResponseError(
              message,
              `Cannot clear auth for server type "${config.type}"`
            );
          } else {
            await revokeServerTokens(serverName, config);
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map(
                  (c) => c.name === serverName ? result.client : c
                ),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(
                    prev.mcp.commands,
                    (c) => commandBelongsToServer(c, serverName)
                  ),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? {
                  ...prev.mcp.resources,
                  [serverName]: result.resources
                } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            sendControlResponseSuccess(message, {});
          }
        } else if (message.request.subtype === "apply_flag_settings") {
          const prevModel = getMainLoopModel();
          const existing = getFlagSettingsInline() ?? {};
          const incoming = message.request.settings;
          const merged = { ...existing, ...incoming };
          for (const key of Object.keys(merged)) {
            if (merged[key] === null) {
              delete merged[key];
            }
          }
          setFlagSettingsInline(merged);
          settingsChangeDetector.notifyChange("flagSettings");
          if ("model" in incoming) {
            if (incoming.model != null) {
              setMainLoopModelOverride(String(incoming.model));
            } else {
              setMainLoopModelOverride(void 0);
            }
          }
          const newModel = getMainLoopModel();
          if (newModel !== prevModel) {
            activeUserSpecifiedModel = newModel;
            const modelArg = incoming.model ? String(incoming.model) : "default";
            notifySessionMetadataChanged({ model: newModel });
            injectModelSwitchBreadcrumbs(modelArg, newModel);
          }
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "get_settings") {
          const currentAppState = getAppState();
          const model = getMainLoopModel();
          const effort = modelSupportsEffort(model) ? resolveAppliedEffort(model, currentAppState.effortValue) : void 0;
          sendControlResponseSuccess(message, {
            ...getSettingsWithSources(),
            applied: {
              model,
              // Numeric effort (ant-only) → null; SDK schema is string-level only.
              effort: typeof effort === "string" ? effort : null
            }
          });
        } else if (message.request.subtype === "stop_task") {
          const { task_id: taskId } = message.request;
          try {
            await stopTask(taskId, {
              getAppState,
              setAppState
            });
            sendControlResponseSuccess(message, {});
          } catch (error) {
            sendControlResponseError(message, errorMessage(error));
          }
        } else if (message.request.subtype === "generate_session_title") {
          const { description, persist } = message.request;
          const titleSignal = (abortController && !abortController.signal.aborted ? abortController : createAbortController()).signal;
          void (async () => {
            try {
              const title = await generateSessionTitle(description, titleSignal);
              if (title && persist) {
                try {
                  saveAiGeneratedTitle(getSessionId(), title);
                } catch (e) {
                  logError(e);
                }
              }
              sendControlResponseSuccess(message, { title });
            } catch (e) {
              sendControlResponseError(message, errorMessage(e));
            }
          })();
        } else if (message.request.subtype === "side_question") {
          const { question } = message.request;
          void (async () => {
            try {
              const saved = getLastCacheSafeParams();
              const cacheSafeParams = saved ? {
                ...saved,
                // If the last turn was interrupted, the snapshot holds an
                // already-aborted controller; createChildAbortController in
                // createSubagentContext would propagate it and the fork
                // would die before sending a request. The controller is
                // not part of the cache key — swapping in a fresh one is
                // safe. Same guard as generate_session_title above.
                toolUseContext: {
                  ...saved.toolUseContext,
                  abortController: createAbortController()
                }
              } : await buildSideQuestionFallbackParams({
                tools: buildAllTools(getAppState()),
                commands: currentCommands,
                mcpClients: [
                  ...getAppState().mcp.clients,
                  ...sdkClients,
                  ...dynamicMcpState.clients
                ],
                messages: mutableMessages,
                readFileState,
                getAppState,
                setAppState,
                customSystemPrompt: options.systemPrompt,
                appendSystemPrompt: options.appendSystemPrompt,
                thinkingConfig: options.thinkingConfig,
                agents: currentAgents
              });
              const result = await runSideQuestion({
                question,
                cacheSafeParams
              });
              sendControlResponseSuccess(message, { response: result.response });
            } catch (e) {
              sendControlResponseError(message, errorMessage(e));
            }
          })();
        } else if ((feature("PROACTIVE") || feature("KAIROS")) && message.request.subtype === "set_proactive") {
          const req = message.request;
          if (req.enabled) {
            if (!proactiveModule.isProactiveActive()) {
              proactiveModule.activateProactive("command");
              scheduleProactiveTick();
            }
          } else {
            proactiveModule.deactivateProactive();
          }
          sendControlResponseSuccess(message);
        } else if (message.request.subtype === "remote_control") {
          if (message.request.enabled) {
            if (bridgeHandle) {
              sendControlResponseSuccess(message, {
                session_url: getRemoteSessionUrl(
                  bridgeHandle.bridgeSessionId,
                  bridgeHandle.sessionIngressUrl
                ),
                connect_url: buildBridgeConnectUrl(
                  bridgeHandle.environmentId,
                  bridgeHandle.sessionIngressUrl
                ),
                environment_id: bridgeHandle.environmentId
              });
            } else {
              let bridgeFailureDetail;
              try {
                const { initReplBridge } = await import("./initReplBridge-3RRJD7WT.mjs");
                const handle = await initReplBridge({
                  onInboundMessage(msg) {
                    const fields = extractInboundMessageFields(msg);
                    if (!fields) return;
                    const { content, uuid } = fields;
                    enqueue({
                      value: content,
                      mode: "prompt",
                      uuid,
                      skipSlashCommands: true
                    });
                    void run();
                  },
                  onPermissionResponse(response) {
                    structuredIO.injectControlResponse(response);
                  },
                  onInterrupt() {
                    abortController?.abort();
                  },
                  onSetModel(model) {
                    const resolved = model === "default" ? getDefaultMainLoopModel() : model;
                    activeUserSpecifiedModel = resolved;
                    setMainLoopModelOverride(resolved);
                  },
                  onSetMaxThinkingTokens(maxTokens) {
                    if (maxTokens === null) {
                      options.thinkingConfig = void 0;
                    } else if (maxTokens === 0) {
                      options.thinkingConfig = { type: "disabled" };
                    } else {
                      options.thinkingConfig = {
                        type: "enabled",
                        budgetTokens: maxTokens
                      };
                    }
                  },
                  onStateChange(state, detail) {
                    if (state === "failed") {
                      bridgeFailureDetail = detail;
                    }
                    logForDebugging(
                      `[bridge:sdk] State change: ${state}${detail ? ` \u2014 ${detail}` : ""}`
                    );
                    output.enqueue({
                      type: "system",
                      subtype: "bridge_state",
                      state,
                      detail,
                      uuid: randomUUID2(),
                      session_id: getSessionId()
                    });
                  },
                  initialMessages: mutableMessages.length > 0 ? mutableMessages : void 0
                });
                if (!handle) {
                  sendControlResponseError(
                    message,
                    bridgeFailureDetail ?? "Remote Control initialization failed"
                  );
                } else {
                  bridgeHandle = handle;
                  bridgeLastForwardedIndex = mutableMessages.length;
                  structuredIO.setOnControlRequestSent((request) => {
                    handle.sendControlRequest(request);
                  });
                  structuredIO.setOnControlRequestResolved((requestId) => {
                    handle.sendControlCancelRequest(requestId);
                  });
                  sendControlResponseSuccess(message, {
                    session_url: getRemoteSessionUrl(
                      handle.bridgeSessionId,
                      handle.sessionIngressUrl
                    ),
                    connect_url: buildBridgeConnectUrl(
                      handle.environmentId,
                      handle.sessionIngressUrl
                    ),
                    environment_id: handle.environmentId
                  });
                }
              } catch (err) {
                sendControlResponseError(message, errorMessage(err));
              }
            }
          } else {
            if (bridgeHandle) {
              structuredIO.setOnControlRequestSent(void 0);
              structuredIO.setOnControlRequestResolved(void 0);
              await bridgeHandle.teardown();
              bridgeHandle = null;
            }
            sendControlResponseSuccess(message);
          }
        } else {
          sendControlResponseError(
            message,
            `Unsupported control request subtype: ${message.request.subtype}`
          );
        }
        continue;
      } else if (message.type === "control_response") {
        if (options.replayUserMessages) {
          output.enqueue(message);
        }
        continue;
      } else if (message.type === "keep_alive") {
        continue;
      } else if (message.type === "update_environment_variables") {
        continue;
      } else if (message.type === "assistant" || message.type === "system") {
        const internalMsgs = toInternalMessages([message]);
        mutableMessages.push(...internalMsgs);
        if (message.type === "assistant" && options.replayUserMessages) {
          output.enqueue(message);
        }
        continue;
      }
      if (message.type !== "user") {
        continue;
      }
      initialized = true;
      logForDebugging(`[HEADLESS] Received user message uuid=${message.uuid ?? "none"}`);
      if (message.uuid) {
        const sessionId = getSessionId();
        const existsInSession = await doesMessageExistInSession(
          sessionId,
          message.uuid
        );
        if (existsInSession || receivedMessageUuids.has(message.uuid)) {
          logForDebugging(`Skipping duplicate user message: ${message.uuid}`);
          if (options.replayUserMessages) {
            logForDebugging(
              `Sending acknowledgment for duplicate user message: ${message.uuid}`
            );
            output.enqueue({
              type: "user",
              message: message.message,
              session_id: sessionId,
              parent_tool_use_id: null,
              uuid: message.uuid,
              timestamp: message.timestamp,
              isReplay: true
            });
          }
          if (existsInSession) {
            notifyCommandLifecycle(message.uuid, "completed");
          }
          continue;
        }
        trackReceivedMessageUuid(message.uuid);
      }
      enqueue({
        mode: "prompt",
        // file_attachments rides the protobuf catchall from the web composer.
        // Same-ref no-op when absent (no 'file_attachments' key).
        value: await resolveAndPrepend(message, message.message.content),
        uuid: message.uuid,
        priority: message.priority
      });
      logForDebugging("[HEADLESS] User message enqueued; kicking run()");
      if (feature("COMMIT_ATTRIBUTION")) {
        setAppState((prev) => ({
          ...prev,
          attribution: incrementPromptCount(prev.attribution, (snapshot) => {
            void recordAttributionSnapshot(snapshot).catch((error) => {
              logForDebugging(`Attribution: Failed to save snapshot: ${error}`);
            });
          })
        }));
      }
      void run();
    }
    inputClosed = true;
    cronScheduler?.stop();
    if (!running) {
      if (suggestionState.inflightPromise) {
        await Promise.race([suggestionState.inflightPromise, sleep(5e3)]);
      }
      suggestionState.abortController?.abort();
      suggestionState.abortController = null;
      await finalizePendingAsyncHooks();
      unsubscribeSkillChanges();
      unsubscribeAuthStatus?.();
      statusListeners.delete(rateLimitListener);
      output.done();
    }
  })();
  return output;
}
function createCanUseToolWithPermissionPrompt(permissionPromptTool) {
  const canUseTool = async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => {
    const mainPermissionResult = forceDecision ?? await hasPermissionsToUseTool(
      tool,
      input,
      toolUseContext,
      assistantMessage,
      toolUseId
    );
    if (mainPermissionResult.behavior === "allow" || mainPermissionResult.behavior === "deny") {
      return mainPermissionResult;
    }
    const { signal: combinedSignal, cleanup: cleanupAbortListener } = createCombinedAbortSignal(toolUseContext.abortController.signal);
    if (combinedSignal.aborted) {
      cleanupAbortListener();
      return {
        behavior: "deny",
        message: "Permission prompt was aborted.",
        decisionReason: {
          type: "permissionPromptTool",
          permissionPromptToolName: tool.name,
          toolResult: void 0
        }
      };
    }
    const abortPromise = new Promise((resolve) => {
      combinedSignal.addEventListener("abort", () => resolve("aborted"), {
        once: true
      });
    });
    const toolCallPromise = permissionPromptTool.call(
      {
        tool_name: tool.name,
        input,
        tool_use_id: toolUseId
      },
      toolUseContext,
      canUseTool,
      assistantMessage
    );
    const raceResult = await Promise.race([toolCallPromise, abortPromise]);
    cleanupAbortListener();
    if (raceResult === "aborted" || combinedSignal.aborted) {
      return {
        behavior: "deny",
        message: "Permission prompt was aborted.",
        decisionReason: {
          type: "permissionPromptTool",
          permissionPromptToolName: tool.name,
          toolResult: void 0
        }
      };
    }
    const result = raceResult;
    const permissionToolResultBlockParam = permissionPromptTool.mapToolResultToToolResultBlockParam(result.data, "1");
    if (!permissionToolResultBlockParam.content || !Array.isArray(permissionToolResultBlockParam.content) || !permissionToolResultBlockParam.content[0] || permissionToolResultBlockParam.content[0].type !== "text" || typeof permissionToolResultBlockParam.content[0].text !== "string") {
      throw new Error(
        'Permission prompt tool returned an invalid result. Expected a single text block param with type="text" and a string text value.'
      );
    }
    return permissionPromptToolResultToPermissionDecision(
      outputSchema().parse(
        safeParseJSON(permissionToolResultBlockParam.content[0].text)
      ),
      permissionPromptTool,
      input,
      toolUseContext
    );
  };
  return canUseTool;
}
function getCanUseToolFn(permissionPromptToolName, structuredIO, getMcpTools, onPermissionPrompt) {
  if (permissionPromptToolName === "stdio") {
    return structuredIO.createCanUseTool(onPermissionPrompt);
  }
  if (!permissionPromptToolName) {
    return async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => forceDecision ?? await hasPermissionsToUseTool(
      tool,
      input,
      toolUseContext,
      assistantMessage,
      toolUseId
    );
  }
  let resolved = null;
  return async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => {
    if (!resolved) {
      const mcpTools = getMcpTools();
      const permissionPromptTool = mcpTools.find(
        (t) => toolMatchesName(t, permissionPromptToolName)
      );
      if (!permissionPromptTool) {
        const error = `Error: MCP tool ${permissionPromptToolName} (passed via --permission-prompt-tool) not found. Available MCP tools: ${mcpTools.map((t) => t.name).join(", ") || "none"}`;
        process.stderr.write(`${error}
`);
        gracefulShutdownSync(1);
        throw new Error(error);
      }
      if (!permissionPromptTool.inputJSONSchema) {
        const error = `Error: tool ${permissionPromptToolName} (passed via --permission-prompt-tool) must be an MCP tool`;
        process.stderr.write(`${error}
`);
        gracefulShutdownSync(1);
        throw new Error(error);
      }
      resolved = createCanUseToolWithPermissionPrompt(permissionPromptTool);
    }
    return resolved(
      tool,
      input,
      toolUseContext,
      assistantMessage,
      toolUseId,
      forceDecision
    );
  };
}
async function handleInitializeRequest(request, requestId, initialized, output, commands, modelInfos, structuredIO, enableAuthStatus, options, agents, getAppState) {
  if (initialized) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        error: "Already initialized",
        request_id: requestId,
        pending_permission_requests: structuredIO.getPendingPermissionRequests()
      }
    });
    return;
  }
  if (request.systemPrompt !== void 0) {
    options.systemPrompt = request.systemPrompt;
  }
  if (request.appendSystemPrompt !== void 0) {
    options.appendSystemPrompt = request.appendSystemPrompt;
  }
  if (request.promptSuggestions !== void 0) {
    options.promptSuggestions = request.promptSuggestions;
  }
  if (request.agents) {
    const stdinAgents = parseAgentsFromJson(request.agents, "flagSettings");
    agents.push(...stdinAgents);
  }
  if (options.agent) {
    const alreadyResolved = getMainThreadAgentType() === options.agent;
    const mainThreadAgent = agents.find((a) => a.agentType === options.agent);
    if (mainThreadAgent && !alreadyResolved) {
      setMainThreadAgentType(mainThreadAgent.agentType);
      if (!options.systemPrompt && !isBuiltInAgent(mainThreadAgent)) {
        const agentSystemPrompt = mainThreadAgent.getSystemPrompt();
        if (agentSystemPrompt) {
          options.systemPrompt = agentSystemPrompt;
        }
      }
      if (!options.userSpecifiedModel && mainThreadAgent.model && mainThreadAgent.model !== "inherit") {
        const agentModel = parseUserSpecifiedModel(mainThreadAgent.model);
        setMainLoopModelOverride(agentModel);
      }
      if (mainThreadAgent.initialPrompt) {
        structuredIO.prependUserMessage(mainThreadAgent.initialPrompt);
      }
    } else if (mainThreadAgent?.initialPrompt) {
      structuredIO.prependUserMessage(mainThreadAgent.initialPrompt);
    }
  }
  const settings = getSettings_DEPRECATED();
  const outputStyle = settings?.outputStyle || DEFAULT_OUTPUT_STYLE_NAME;
  const availableOutputStyles = await getAllOutputStyles(getCwd());
  const accountInfo = getAccountInformation();
  if (request.hooks) {
    const hooks = {};
    for (const [event, matchers] of Object.entries(request.hooks)) {
      hooks[event] = matchers.map((matcher) => {
        const callbacks = matcher.hookCallbackIds.map((callbackId) => {
          return structuredIO.createHookCallback(callbackId, matcher.timeout);
        });
        return {
          matcher: matcher.matcher,
          hooks: callbacks
        };
      });
    }
    registerHookCallbacks(hooks);
  }
  if (request.jsonSchema) {
    setInitJsonSchema(request.jsonSchema);
  }
  const initResponse = {
    commands: commands.filter((cmd) => cmd.userInvocable !== false).map((cmd) => ({
      name: getCommandName(cmd),
      description: formatDescriptionWithSource(cmd),
      argumentHint: cmd.argumentHint || ""
    })),
    agents: agents.map((agent) => ({
      name: agent.agentType,
      description: agent.whenToUse,
      // 'inherit' is an internal sentinel; normalize to undefined for the public API
      model: agent.model === "inherit" ? void 0 : agent.model
    })),
    output_style: outputStyle,
    available_output_styles: Object.keys(availableOutputStyles),
    models: modelInfos,
    account: {
      email: accountInfo?.email,
      organization: accountInfo?.organization,
      subscriptionType: accountInfo?.subscription,
      tokenSource: accountInfo?.tokenSource,
      apiKeySource: accountInfo?.apiKeySource,
      // getAccountInformation() returns undefined under 3P providers, so the
      // other fields are all absent. apiProvider disambiguates "not logged
      // in" (firstParty + tokenSource:none) from "3P, login not applicable".
      apiProvider: getAPIProvider()
    },
    pid: process.pid
  };
  if (isFastModeEnabled() && isFastModeAvailable()) {
    const appState = getAppState();
    initResponse.fast_mode_state = getFastModeState(
      options.userSpecifiedModel ?? null,
      appState.fastMode
    );
  }
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: initResponse
    }
  });
  if (enableAuthStatus) {
    const authStatusManager = AwsAuthStatusManager.getInstance();
    const status = authStatusManager.getStatus();
    if (status) {
      output.enqueue({
        type: "auth_status",
        isAuthenticating: status.isAuthenticating,
        output: status.output,
        error: status.error,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  }
}
async function handleRewindFiles(userMessageId, appState, setAppState, dryRun) {
  if (!fileHistoryEnabled()) {
    return { canRewind: false, error: "File rewinding is not enabled." };
  }
  if (!fileHistoryCanRestore(appState.fileHistory, userMessageId)) {
    return {
      canRewind: false,
      error: "No file checkpoint found for this message."
    };
  }
  if (dryRun) {
    const diffStats = await fileHistoryGetDiffStats(
      appState.fileHistory,
      userMessageId
    );
    return {
      canRewind: true,
      filesChanged: diffStats?.filesChanged,
      insertions: diffStats?.insertions,
      deletions: diffStats?.deletions
    };
  }
  try {
    await fileHistoryRewind(
      (updater) => setAppState((prev) => ({
        ...prev,
        fileHistory: updater(prev.fileHistory)
      })),
      userMessageId
    );
  } catch (error) {
    return {
      canRewind: false,
      error: `Failed to rewind: ${errorMessage(error)}`
    };
  }
  return { canRewind: true };
}
function handleSetPermissionMode(request, requestId, toolPermissionContext, output) {
  if (request.mode === "bypassPermissions") {
    if (isBypassPermissionsModeDisabled()) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration"
        }
      });
      return toolPermissionContext;
    }
    if (!toolPermissionContext.isBypassPermissionsModeAvailable) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions"
        }
      });
      return toolPermissionContext;
    }
  }
  if (feature("TRANSCRIPT_CLASSIFIER") && request.mode === "auto" && !isAutoModeGateEnabled()) {
    const reason = getAutoModeUnavailableReason();
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: requestId,
        error: reason ? `Cannot set permission mode to auto: ${getAutoModeUnavailableNotification(reason)}` : "Cannot set permission mode to auto"
      }
    });
    return toolPermissionContext;
  }
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: {
        mode: request.mode
      }
    }
  });
  return {
    ...transitionPermissionMode(
      toolPermissionContext.mode,
      request.mode,
      toolPermissionContext
    ),
    mode: request.mode
  };
}
function handleChannelEnable(requestId, serverName, connectionPool, output) {
  const respondError = (error) => output.enqueue({
    type: "control_response",
    response: { subtype: "error", request_id: requestId, error }
  });
  if (!(feature("KAIROS") || feature("KAIROS_CHANNELS"))) {
    return respondError("channels feature not available in this build");
  }
  const connection = connectionPool.find(
    (c) => c.name === serverName && c.type === "connected"
  );
  if (!connection || connection.type !== "connected") {
    return respondError(`server ${serverName} is not connected`);
  }
  const pluginSource = connection.config.pluginSource;
  const parsed = pluginSource ? parsePluginIdentifier(pluginSource) : void 0;
  if (!parsed?.marketplace) {
    return respondError(
      `server ${serverName} is not plugin-sourced; channel_enable requires a marketplace plugin`
    );
  }
  const entry = {
    kind: "plugin",
    name: parsed.name,
    marketplace: parsed.marketplace
  };
  const prior = getAllowedChannels();
  const already = prior.some(
    (e) => e.kind === "plugin" && e.name === entry.name && e.marketplace === entry.marketplace
  );
  if (!already) setAllowedChannels([...prior, entry]);
  const gate = gateChannelServer(
    serverName,
    connection.capabilities,
    pluginSource
  );
  if (gate.action === "skip") {
    if (!already) setAllowedChannels(prior);
    return respondError(gate.reason);
  }
  const pluginId = `${entry.name}@${entry.marketplace}`;
  logMCPDebug(serverName, "Channel notifications registered");
  logEvent("tengu_mcp_channel_enable", { plugin: pluginId });
  connection.client.setNotificationHandler(
    ChannelMessageNotificationSchema(),
    async (notification) => {
      const { content, meta } = notification.params;
      logMCPDebug(
        serverName,
        `notifications/claude/channel: ${content.slice(0, 80)}`
      );
      logEvent("tengu_mcp_channel_message", {
        content_length: content.length,
        meta_key_count: Object.keys(meta ?? {}).length,
        entry_kind: "plugin",
        is_dev: false,
        plugin: pluginId
      });
      enqueue({
        mode: "prompt",
        value: wrapChannelMessage(serverName, content, meta),
        priority: "next",
        isMeta: true,
        origin: { kind: "channel", server: serverName },
        skipSlashCommands: true
      });
    }
  );
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: void 0
    }
  });
}
function reregisterChannelHandlerAfterReconnect(connection) {
  if (!(feature("KAIROS") || feature("KAIROS_CHANNELS"))) return;
  if (connection.type !== "connected") return;
  const gate = gateChannelServer(
    connection.name,
    connection.capabilities,
    connection.config.pluginSource
  );
  if (gate.action !== "register") return;
  const entry = findChannelEntry(connection.name, getAllowedChannels());
  const pluginId = entry?.kind === "plugin" ? `${entry.name}@${entry.marketplace}` : void 0;
  logMCPDebug(
    connection.name,
    "Channel notifications re-registered after reconnect"
  );
  connection.client.setNotificationHandler(
    ChannelMessageNotificationSchema(),
    async (notification) => {
      const { content, meta } = notification.params;
      logMCPDebug(
        connection.name,
        `notifications/claude/channel: ${content.slice(0, 80)}`
      );
      logEvent("tengu_mcp_channel_message", {
        content_length: content.length,
        meta_key_count: Object.keys(meta ?? {}).length,
        entry_kind: entry?.kind,
        is_dev: entry?.dev ?? false,
        plugin: pluginId
      });
      enqueue({
        mode: "prompt",
        value: wrapChannelMessage(connection.name, content, meta),
        priority: "next",
        isMeta: true,
        origin: { kind: "channel", server: connection.name },
        skipSlashCommands: true
      });
    }
  );
}
function emitLoadError(message, outputFormat) {
  if (outputFormat === "stream-json") {
    const errorResult = {
      type: "result",
      subtype: "error_during_execution",
      duration_ms: 0,
      duration_api_ms: 0,
      is_error: true,
      num_turns: 0,
      stop_reason: null,
      session_id: getSessionId(),
      total_cost_usd: 0,
      usage: EMPTY_USAGE,
      modelUsage: {},
      permission_denials: [],
      uuid: randomUUID2(),
      errors: [message]
    };
    process.stdout.write(jsonStringify(errorResult) + "\n");
  } else {
    process.stderr.write(message + "\n");
  }
}
function removeInterruptedMessage(messages, interruptedUserMessage) {
  const idx = messages.findIndex((m) => m.uuid === interruptedUserMessage.uuid);
  if (idx !== -1) {
    messages.splice(idx, 2);
  }
}
async function loadInitialMessages(setAppState, options) {
  const persistSession = !isSessionPersistenceDisabled();
  if (options.continue) {
    try {
      logEvent("tengu_continue_print", {});
      const result = await loadConversationForResume(
        void 0,
        void 0
      );
      if (result) {
        if (feature("COORDINATOR_MODE") && coordinatorModeModule) {
          const warning = coordinatorModeModule.matchSessionMode(result.mode);
          if (warning) {
            process.stderr.write(warning + "\n");
            const {
              getAgentDefinitionsWithOverrides,
              getActiveAgentsFromList
            } = (
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              (init_loadAgentsDir(), __toCommonJS(loadAgentsDir_exports))
            );
            getAgentDefinitionsWithOverrides.cache.clear?.();
            const freshAgentDefs = await getAgentDefinitionsWithOverrides(
              getCwd()
            );
            setAppState((prev) => ({
              ...prev,
              agentDefinitions: {
                ...freshAgentDefs,
                allAgents: freshAgentDefs.allAgents,
                activeAgents: getActiveAgentsFromList(freshAgentDefs.allAgents)
              }
            }));
          }
        }
        if (!options.forkSession) {
          if (result.sessionId) {
            switchSession(
              asSessionId(result.sessionId),
              result.fullPath ? dirname(result.fullPath) : null
            );
            if (persistSession) {
              await resetSessionFilePointer();
            }
          }
        }
        restoreSessionStateFromLog(result, setAppState);
        restoreSessionMetadata(
          options.forkSession ? { ...result, worktreeSession: void 0 } : result
        );
        if (feature("COORDINATOR_MODE") && coordinatorModeModule) {
          saveMode(
            coordinatorModeModule.isCoordinatorMode() ? "coordinator" : "normal"
          );
        }
        return {
          messages: result.messages,
          turnInterruptionState: result.turnInterruptionState,
          agentSetting: result.agentSetting
        };
      }
    } catch (error) {
      logError(error);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  if (options.teleport) {
    try {
      if (!isPolicyAllowed("allow_remote_sessions")) {
        throw new Error(
          "Remote sessions are disabled by your organization's policy."
        );
      }
      logEvent("tengu_teleport_print", {});
      if (typeof options.teleport !== "string") {
        throw new Error("No session ID provided for teleport");
      }
      const {
        checkOutTeleportedSessionBranch,
        processMessagesForTeleportResume,
        teleportResumeCodeSession,
        validateGitState
      } = await import("./teleport-6ANXBE65.mjs");
      await validateGitState();
      const teleportResult = await teleportResumeCodeSession(options.teleport);
      const { branchError } = await checkOutTeleportedSessionBranch(
        teleportResult.branch
      );
      return {
        messages: processMessagesForTeleportResume(
          teleportResult.log,
          branchError
        )
      };
    } catch (error) {
      logError(error);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  if (options.resume) {
    try {
      logEvent("tengu_resume_print", {});
      const parsedSessionId = parseSessionIdentifier(
        typeof options.resume === "string" ? options.resume : ""
      );
      if (!parsedSessionId) {
        let errorMessage2 = "Error: --resume requires a valid session ID when used with --print. Usage: claude -p --resume <session-id>";
        if (typeof options.resume === "string") {
          errorMessage2 += `. Session IDs must be in UUID format (e.g., 550e8400-e29b-41d4-a716-446655440000). Provided value "${options.resume}" is not a valid UUID`;
        }
        emitLoadError(errorMessage2, options.outputFormat);
        gracefulShutdownSync(1);
        return { messages: [] };
      }
      if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
        const [, metadata] = await Promise.all([
          hydrateFromCCRv2InternalEvents(parsedSessionId.sessionId),
          options.restoredWorkerState
        ]);
        if (metadata) {
          setAppState(externalMetadataToAppState(metadata));
          if (typeof metadata.model === "string") {
            setMainLoopModelOverride(metadata.model);
          }
        }
      } else if (parsedSessionId.isUrl && parsedSessionId.ingressUrl && isEnvTruthy(process.env.ENABLE_SESSION_PERSISTENCE)) {
        await hydrateRemoteSession(
          parsedSessionId.sessionId,
          parsedSessionId.ingressUrl
        );
      }
      const result = await loadConversationForResume(
        parsedSessionId.sessionId,
        parsedSessionId.jsonlFile || void 0
      );
      if (!result || result.messages.length === 0) {
        if (parsedSessionId.isUrl || isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
          return {
            messages: await (options.sessionStartHooksPromise ?? processSessionStartHooks("startup"))
          };
        } else {
          emitLoadError(
            `No conversation found with session ID: ${parsedSessionId.sessionId}`,
            options.outputFormat
          );
          gracefulShutdownSync(1);
          return { messages: [] };
        }
      }
      if (options.resumeSessionAt) {
        const index = result.messages.findIndex(
          (m) => m.uuid === options.resumeSessionAt
        );
        if (index < 0) {
          emitLoadError(
            `No message found with message.uuid of: ${options.resumeSessionAt}`,
            options.outputFormat
          );
          gracefulShutdownSync(1);
          return { messages: [] };
        }
        result.messages = index >= 0 ? result.messages.slice(0, index + 1) : [];
      }
      if (feature("COORDINATOR_MODE") && coordinatorModeModule) {
        const warning = coordinatorModeModule.matchSessionMode(result.mode);
        if (warning) {
          process.stderr.write(warning + "\n");
          const { getAgentDefinitionsWithOverrides, getActiveAgentsFromList } = (
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            (init_loadAgentsDir(), __toCommonJS(loadAgentsDir_exports))
          );
          getAgentDefinitionsWithOverrides.cache.clear?.();
          const freshAgentDefs = await getAgentDefinitionsWithOverrides(
            getCwd()
          );
          setAppState((prev) => ({
            ...prev,
            agentDefinitions: {
              ...freshAgentDefs,
              allAgents: freshAgentDefs.allAgents,
              activeAgents: getActiveAgentsFromList(freshAgentDefs.allAgents)
            }
          }));
        }
      }
      if (!options.forkSession && result.sessionId) {
        switchSession(
          asSessionId(result.sessionId),
          result.fullPath ? dirname(result.fullPath) : null
        );
        if (persistSession) {
          await resetSessionFilePointer();
        }
      }
      restoreSessionStateFromLog(result, setAppState);
      restoreSessionMetadata(
        options.forkSession ? { ...result, worktreeSession: void 0 } : result
      );
      if (feature("COORDINATOR_MODE") && coordinatorModeModule) {
        saveMode(
          coordinatorModeModule.isCoordinatorMode() ? "coordinator" : "normal"
        );
      }
      return {
        messages: result.messages,
        turnInterruptionState: result.turnInterruptionState,
        agentSetting: result.agentSetting
      };
    } catch (error) {
      logError(error);
      const errorMessage2 = error instanceof Error ? `Failed to resume session: ${error.message}` : "Failed to resume session with --print mode";
      emitLoadError(errorMessage2, options.outputFormat);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  return {
    messages: await (options.sessionStartHooksPromise ?? processSessionStartHooks("startup"))
  };
}
function getStructuredIO(inputPrompt, options) {
  let inputStream;
  if (typeof inputPrompt === "string") {
    if (inputPrompt.trim() !== "") {
      inputStream = fromArray([
        jsonStringify({
          type: "user",
          session_id: "",
          message: {
            role: "user",
            content: inputPrompt
          },
          parent_tool_use_id: null
        })
      ]);
    } else {
      inputStream = fromArray([]);
    }
  } else {
    inputStream = inputPrompt;
  }
  return options.sdkUrl ? new RemoteIO(options.sdkUrl, inputStream, options.replayUserMessages) : new StructuredIO(inputStream, options.replayUserMessages);
}
async function handleOrphanedPermissionResponse({
  message,
  setAppState,
  onEnqueued,
  handledToolUseIds
}) {
  if (message.response.subtype === "success" && message.response.response?.toolUseID && typeof message.response.response.toolUseID === "string") {
    const permissionResult = message.response.response;
    const { toolUseID } = permissionResult;
    if (!toolUseID) {
      return false;
    }
    logForDebugging(
      `handleOrphanedPermissionResponse: received orphaned control_response for toolUseID=${toolUseID} request_id=${message.response.request_id}`
    );
    if (handledToolUseIds.has(toolUseID)) {
      logForDebugging(
        `handleOrphanedPermissionResponse: skipping duplicate orphaned permission for toolUseID=${toolUseID} (already handled)`
      );
      return false;
    }
    const assistantMessage = await findUnresolvedToolUse(toolUseID);
    if (!assistantMessage) {
      logForDebugging(
        `handleOrphanedPermissionResponse: no unresolved tool_use found for toolUseID=${toolUseID} (already resolved in transcript)`
      );
      return false;
    }
    handledToolUseIds.add(toolUseID);
    logForDebugging(
      `handleOrphanedPermissionResponse: enqueuing orphaned permission for toolUseID=${toolUseID} messageID=${assistantMessage.message.id}`
    );
    enqueue({
      mode: "orphaned-permission",
      value: [],
      orphanedPermission: {
        permissionResult,
        assistantMessage
      }
    });
    onEnqueued?.();
    return true;
  }
  return false;
}
function toScopedConfig(config) {
  return { ...config, scope: "dynamic" };
}
async function handleMcpSetServers(servers, sdkState, dynamicState, setAppState) {
  const { allowed: allowedServers, blocked } = filterMcpServersByPolicy(servers);
  const policyErrors = {};
  for (const name of blocked) {
    policyErrors[name] = "Blocked by enterprise policy (allowedMcpServers/deniedMcpServers)";
  }
  const sdkServers = {};
  const processServers = {};
  for (const [name, config] of Object.entries(allowedServers)) {
    if (config.type === "sdk") {
      sdkServers[name] = config;
    } else {
      processServers[name] = config;
    }
  }
  const currentSdkNames = new Set(Object.keys(sdkState.configs));
  const newSdkNames = new Set(Object.keys(sdkServers));
  const sdkAdded = [];
  const sdkRemoved = [];
  const newSdkConfigs = { ...sdkState.configs };
  let newSdkClients = [...sdkState.clients];
  let newSdkTools = [...sdkState.tools];
  for (const name of currentSdkNames) {
    if (!newSdkNames.has(name)) {
      const client = newSdkClients.find((c) => c.name === name);
      if (client && client.type === "connected") {
        await client.cleanup();
      }
      newSdkClients = newSdkClients.filter((c) => c.name !== name);
      const prefix = `mcp__${name}__`;
      newSdkTools = newSdkTools.filter((t) => !t.name.startsWith(prefix));
      delete newSdkConfigs[name];
      sdkRemoved.push(name);
    }
  }
  for (const [name, config] of Object.entries(sdkServers)) {
    if (!currentSdkNames.has(name)) {
      newSdkConfigs[name] = config;
      const pendingClient = {
        type: "pending",
        name,
        config: { ...config, scope: "dynamic" }
      };
      newSdkClients = [...newSdkClients, pendingClient];
      sdkAdded.push(name);
    }
  }
  const processResult = await reconcileMcpServers(
    processServers,
    dynamicState,
    setAppState
  );
  return {
    response: {
      added: [...sdkAdded, ...processResult.response.added],
      removed: [...sdkRemoved, ...processResult.response.removed],
      errors: { ...policyErrors, ...processResult.response.errors }
    },
    newSdkState: {
      configs: newSdkConfigs,
      clients: newSdkClients,
      tools: newSdkTools
    },
    newDynamicState: processResult.newState,
    sdkServersChanged: sdkAdded.length > 0 || sdkRemoved.length > 0
  };
}
async function reconcileMcpServers(desiredConfigs, currentState, setAppState) {
  const currentNames = new Set(Object.keys(currentState.configs));
  const desiredNames = new Set(Object.keys(desiredConfigs));
  const toRemove = [...currentNames].filter((n) => !desiredNames.has(n));
  const toAdd = [...desiredNames].filter((n) => !currentNames.has(n));
  const toCheck = [...currentNames].filter((n) => desiredNames.has(n));
  const toReplace = toCheck.filter((name) => {
    const currentConfig = currentState.configs[name];
    const desiredConfigRaw = desiredConfigs[name];
    if (!currentConfig || !desiredConfigRaw) return true;
    const desiredConfig = toScopedConfig(desiredConfigRaw);
    return !areMcpConfigsEqual(currentConfig, desiredConfig);
  });
  const removed = [];
  const added = [];
  const errors = {};
  let newClients = [...currentState.clients];
  let newTools = [...currentState.tools];
  for (const name of [...toRemove, ...toReplace]) {
    const client = newClients.find((c) => c.name === name);
    const config = currentState.configs[name];
    if (client && config) {
      if (client.type === "connected") {
        try {
          await client.cleanup();
        } catch (e) {
          logError(e);
        }
      }
      await clearServerCache(name, config);
    }
    const prefix = `mcp__${name}__`;
    newTools = newTools.filter((t) => !t.name.startsWith(prefix));
    newClients = newClients.filter((c) => c.name !== name);
    if (toRemove.includes(name)) {
      removed.push(name);
    }
  }
  for (const name of [...toAdd, ...toReplace]) {
    const config = desiredConfigs[name];
    if (!config) continue;
    const scopedConfig = toScopedConfig(config);
    if (config.type === "sdk") {
      added.push(name);
      continue;
    }
    try {
      const client = await connectToServer(name, scopedConfig);
      newClients.push(client);
      if (client.type === "connected") {
        const serverTools = await fetchToolsForClient(client);
        newTools.push(...serverTools);
      } else if (client.type === "failed") {
        errors[name] = client.error || "Connection failed";
      }
      added.push(name);
    } catch (e) {
      const err = toError(e);
      errors[name] = err.message;
      logError(err);
    }
  }
  const newConfigs = {};
  for (const name of desiredNames) {
    const config = desiredConfigs[name];
    if (config) {
      newConfigs[name] = toScopedConfig(config);
    }
  }
  const newState = {
    clients: newClients,
    tools: newTools,
    configs: newConfigs
  };
  setAppState((prev) => {
    const allDynamicServerNames = /* @__PURE__ */ new Set([
      ...Object.keys(currentState.configs),
      ...Object.keys(newConfigs)
    ]);
    const nonDynamicTools = prev.mcp.tools.filter((t) => {
      for (const serverName of allDynamicServerNames) {
        if (t.name.startsWith(`mcp__${serverName}__`)) {
          return false;
        }
      }
      return true;
    });
    const nonDynamicClients = prev.mcp.clients.filter((c) => {
      return !allDynamicServerNames.has(c.name);
    });
    return {
      ...prev,
      mcp: {
        ...prev.mcp,
        tools: [...nonDynamicTools, ...newTools],
        clients: [...nonDynamicClients, ...newClients]
      }
    };
  });
  return {
    response: { added, removed, errors },
    newState
  };
}
export {
  canBatchWith,
  createCanUseToolWithPermissionPrompt,
  getCanUseToolFn,
  handleMcpSetServers,
  handleOrphanedPermissionResponse,
  joinPromptValues,
  reconcileMcpServers,
  removeInterruptedMessage,
  runHeadless
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9wcmludC50cyIsICIuLi8uLi9zcmMvY2xpL3JlbW90ZUlPLnRzIiwgIi4uLy4uL3NyYy9jbGkvdHJhbnNwb3J0cy90cmFuc3BvcnRVdGlscy50cyIsICIuLi8uLi9zcmMvdXRpbHMvc3RyZWFtbGluZWRUcmFuc2Zvcm0udHMiLCAiLi4vLi4vc3JjL3V0aWxzL3N0cmVhbUpzb25TdGRvdXRHdWFyZC50cyIsICIuLi8uLi9zcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL2ZpbGVQZXJzaXN0ZW5jZS50cyIsICIuLi8uLi9zcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL3R5cGVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9pZGxlVGltZW91dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2Vzc2lvblVybC50cyIsICIuLi8uLi9zcmMvdXRpbHMvcGx1Z2lucy9oZWFkbGVzc1BsdWdpbkluc3RhbGwudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3BsdWdpbnMvemlwQ2FjaGVBZGFwdGVycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gYmlvbWUtaWdub3JlLWFsbCBhc3Npc3Qvc291cmNlL29yZ2FuaXplSW1wb3J0czogQU5ULU9OTFkgaW1wb3J0IG1hcmtlcnMgbXVzdCBub3QgYmUgcmVvcmRlcmVkXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHJlYWRGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGRvd25sb2FkVXNlclNldHRpbmdzLFxuICByZWRvd25sb2FkVXNlclNldHRpbmdzLFxufSBmcm9tICdzcmMvc2VydmljZXMvc2V0dGluZ3NTeW5jL2luZGV4LmpzJ1xuaW1wb3J0IHsgd2FpdEZvclJlbW90ZU1hbmFnZWRTZXR0aW5nc1RvTG9hZCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9yZW1vdGVNYW5hZ2VkU2V0dGluZ3MvaW5kZXguanMnXG5pbXBvcnQgeyBTdHJ1Y3R1cmVkSU8gfSBmcm9tICdzcmMvY2xpL3N0cnVjdHVyZWRJTy5qcydcbmltcG9ydCB7IFJlbW90ZUlPIH0gZnJvbSAnc3JjL2NsaS9yZW1vdGVJTy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQ29tbWFuZCxcbiAgZm9ybWF0RGVzY3JpcHRpb25XaXRoU291cmNlLFxuICBnZXRDb21tYW5kTmFtZSxcbn0gZnJvbSAnc3JjL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlU3RyZWFtbGluZWRUcmFuc2Zvcm1lciB9IGZyb20gJ3NyYy91dGlscy9zdHJlYW1saW5lZFRyYW5zZm9ybS5qcydcbmltcG9ydCB7IGluc3RhbGxTdHJlYW1Kc29uU3Rkb3V0R3VhcmQgfSBmcm9tICdzcmMvdXRpbHMvc3RyZWFtSnNvblN0ZG91dEd1YXJkLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sUGVybWlzc2lvbkNvbnRleHQgfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgVGhpbmtpbmdDb25maWcgfSBmcm9tICdzcmMvdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgeyBhc3NlbWJsZVRvb2xQb29sLCBmaWx0ZXJUb29sc0J5RGVueVJ1bGVzIH0gZnJvbSAnc3JjL3Rvb2xzLmpzJ1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gtZXMvdW5pcUJ5LmpzJ1xuaW1wb3J0IHsgdW5pcSB9IGZyb20gJ3NyYy91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IG1lcmdlQW5kRmlsdGVyVG9vbHMgfSBmcm9tICdzcmMvdXRpbHMvdG9vbFBvb2wuanMnXG5pbXBvcnQge1xuICBsb2dFdmVudCxcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICdzcmMvdXRpbHMvZGVidWcuanMnXG5pbXBvcnQge1xuICBsb2dGb3JEaWFnbm9zdGljc05vUElJLFxuICB3aXRoRGlhZ25vc3RpY3NUaW1pbmcsXG59IGZyb20gJ3NyYy91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IHRvb2xNYXRjaGVzTmFtZSwgdHlwZSBUb29sLCB0eXBlIFRvb2xzIH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQge1xuICB0eXBlIEFnZW50RGVmaW5pdGlvbixcbiAgaXNCdWlsdEluQWdlbnQsXG4gIHBhcnNlQWdlbnRzRnJvbUpzb24sXG59IGZyb20gJ3NyYy90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSwgTm9ybWFsaXplZFVzZXJNZXNzYWdlIH0gZnJvbSAnc3JjL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgdHlwZSB7IFF1ZXVlZENvbW1hbmQgfSBmcm9tICdzcmMvdHlwZXMvdGV4dElucHV0VHlwZXMuanMnXG5pbXBvcnQge1xuICBkZXF1ZXVlLFxuICBkZXF1ZXVlQWxsTWF0Y2hpbmcsXG4gIGVucXVldWUsXG4gIGhhc0NvbW1hbmRzSW5RdWV1ZSxcbiAgcGVlayxcbiAgc3Vic2NyaWJlVG9Db21tYW5kUXVldWUsXG4gIGdldENvbW1hbmRzQnlNYXhQcmlvcml0eSxcbn0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VRdWV1ZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBub3RpZnlDb21tYW5kTGlmZWN5Y2xlIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1hbmRMaWZlY3ljbGUuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uU3RhdGUsXG4gIG5vdGlmeVNlc3Npb25TdGF0ZUNoYW5nZWQsXG4gIG5vdGlmeVNlc3Npb25NZXRhZGF0YUNoYW5nZWQsXG4gIHNldFBlcm1pc3Npb25Nb2RlQ2hhbmdlZExpc3RlbmVyLFxuICB0eXBlIFJlcXVpcmVzQWN0aW9uRGV0YWlscyxcbiAgdHlwZSBTZXNzaW9uRXh0ZXJuYWxNZXRhZGF0YSxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25TdGF0ZS5qcydcbmltcG9ydCB7IGV4dGVybmFsTWV0YWRhdGFUb0FwcFN0YXRlIH0gZnJvbSAnc3JjL3N0YXRlL29uQ2hhbmdlQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBnZXRJbk1lbW9yeUVycm9ycywgbG9nRXJyb3IsIGxvZ01DUERlYnVnIH0gZnJvbSAnc3JjL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7XG4gIHdyaXRlVG9TdGRvdXQsXG4gIHJlZ2lzdGVyUHJvY2Vzc091dHB1dEVycm9ySGFuZGxlcnMsXG59IGZyb20gJ3NyYy91dGlscy9wcm9jZXNzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdHJlYW0gfSBmcm9tICdzcmMvdXRpbHMvc3RyZWFtLmpzJ1xuaW1wb3J0IHsgRU1QVFlfVVNBR0UgfSBmcm9tICdzcmMvc2VydmljZXMvYXBpL2xvZ2dpbmcuanMnXG5pbXBvcnQge1xuICBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lLFxuICB0eXBlIFR1cm5JbnRlcnJ1cHRpb25TdGF0ZSxcbn0gZnJvbSAnc3JjL3V0aWxzL2NvbnZlcnNhdGlvblJlY292ZXJ5LmpzJ1xuaW1wb3J0IHR5cGUge1xuICBNQ1BTZXJ2ZXJDb25uZWN0aW9uLFxuICBNY3BTZGtTZXJ2ZXJDb25maWcsXG4gIFNjb3BlZE1jcFNlcnZlckNvbmZpZyxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB7XG4gIENoYW5uZWxNZXNzYWdlTm90aWZpY2F0aW9uU2NoZW1hLFxuICBnYXRlQ2hhbm5lbFNlcnZlcixcbiAgd3JhcENoYW5uZWxNZXNzYWdlLFxuICBmaW5kQ2hhbm5lbEVudHJ5LFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2NoYW5uZWxOb3RpZmljYXRpb24uanMnXG5pbXBvcnQge1xuICBpc0NoYW5uZWxBbGxvd2xpc3RlZCxcbiAgaXNDaGFubmVsc0VuYWJsZWQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY2hhbm5lbEFsbG93bGlzdC5qcydcbmltcG9ydCB7IHBhcnNlUGx1Z2luSWRlbnRpZmllciB9IGZyb20gJ3NyYy91dGlscy9wbHVnaW5zL3BsdWdpbklkZW50aWZpZXIuanMnXG5pbXBvcnQgeyB2YWxpZGF0ZVV1aWQgfSBmcm9tICdzcmMvdXRpbHMvdXVpZC5qcydcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJ3NyYy91dGlscy9nZW5lcmF0b3JzLmpzJ1xuaW1wb3J0IHsgYXNrIH0gZnJvbSAnc3JjL1F1ZXJ5RW5naW5lLmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uUHJvbXB0VG9vbCB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5pbXBvcnQge1xuICBjcmVhdGVGaWxlU3RhdGVDYWNoZVdpdGhTaXplTGltaXQsXG4gIG1lcmdlRmlsZVN0YXRlQ2FjaGVzLFxuICBSRUFEX0ZJTEVfU1RBVEVfQ0FDSEVfU0laRSxcbn0gZnJvbSAnc3JjL3V0aWxzL2ZpbGVTdGF0ZUNhY2hlLmpzJ1xuaW1wb3J0IHsgZXhwYW5kUGF0aCB9IGZyb20gJ3NyYy91dGlscy9wYXRoLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFJlYWRGaWxlc0Zyb21NZXNzYWdlcyB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5pbXBvcnQgeyByZWdpc3Rlckhvb2tFdmVudEhhbmRsZXIgfSBmcm9tICdzcmMvdXRpbHMvaG9va3MvaG9va0V2ZW50cy5qcydcbmltcG9ydCB7IGV4ZWN1dGVGaWxlUGVyc2lzdGVuY2UgfSBmcm9tICdzcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL2ZpbGVQZXJzaXN0ZW5jZS5qcydcbmltcG9ydCB7IGZpbmFsaXplUGVuZGluZ0FzeW5jSG9va3MgfSBmcm9tICdzcmMvdXRpbHMvaG9va3MvQXN5bmNIb29rUmVnaXN0cnkuanMnXG5pbXBvcnQge1xuICBncmFjZWZ1bFNodXRkb3duLFxuICBncmFjZWZ1bFNodXRkb3duU3luYyxcbiAgaXNTaHV0dGluZ0Rvd24sXG59IGZyb20gJ3NyYy91dGlscy9ncmFjZWZ1bFNodXRkb3duLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnc3JjL3V0aWxzL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGNyZWF0ZUlkbGVUaW1lb3V0TWFuYWdlciB9IGZyb20gJ3NyYy91dGlscy9pZGxlVGltZW91dC5qcydcbmltcG9ydCB0eXBlIHtcbiAgU0RLU3RhdHVzLFxuICBNb2RlbEluZm8sXG4gIFNES01lc3NhZ2UsXG4gIFNES1VzZXJNZXNzYWdlLFxuICBTREtVc2VyTWVzc2FnZVJlcGxheSxcbiAgUGVybWlzc2lvblJlc3VsdCxcbiAgTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydCxcbiAgTWNwU2VydmVyU3RhdHVzLFxuICBSZXdpbmRGaWxlc1Jlc3VsdCxcbn0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFN0ZG91dE1lc3NhZ2UsXG4gIFNES0NvbnRyb2xJbml0aWFsaXplUmVxdWVzdCxcbiAgU0RLQ29udHJvbEluaXRpYWxpemVSZXNwb25zZSxcbiAgU0RLQ29udHJvbFJlcXVlc3QsXG4gIFNES0NvbnRyb2xSZXNwb25zZSxcbiAgU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXNwb25zZSxcbiAgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXNwb25zZSxcbn0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnQGFudGhyb3BpYy1haS9jbGF1ZGUtYWdlbnQtc2RrJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uTW9kZSBhcyBJbnRlcm5hbFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnc3JjL3R5cGVzL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgY3dkIH0gZnJvbSAncHJvY2VzcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJ3NyYy91dGlscy9jd2QuanMnXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gtZXMvb21pdC5qcydcbmltcG9ydCByZWplY3QgZnJvbSAnbG9kYXNoLWVzL3JlamVjdC5qcydcbmltcG9ydCB7IGlzUG9saWN5QWxsb3dlZCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9wb2xpY3lMaW1pdHMvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFJlcGxCcmlkZ2VIYW5kbGUgfSBmcm9tICdzcmMvYnJpZGdlL3JlcGxCcmlkZ2UuanMnXG5pbXBvcnQgeyBnZXRSZW1vdGVTZXNzaW9uVXJsIH0gZnJvbSAnc3JjL2NvbnN0YW50cy9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgYnVpbGRCcmlkZ2VDb25uZWN0VXJsIH0gZnJvbSAnc3JjL2JyaWRnZS9icmlkZ2VTdGF0dXNVdGlsLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdEluYm91bmRNZXNzYWdlRmllbGRzIH0gZnJvbSAnc3JjL2JyaWRnZS9pbmJvdW5kTWVzc2FnZXMuanMnXG5pbXBvcnQgeyByZXNvbHZlQW5kUHJlcGVuZCB9IGZyb20gJ3NyYy9icmlkZ2UvaW5ib3VuZEF0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICdzcmMvaG9va3MvdXNlQ2FuVXNlVG9vbC5qcydcbmltcG9ydCB7IGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sIH0gZnJvbSAnc3JjL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgc2FmZVBhcnNlSlNPTiB9IGZyb20gJ3NyYy91dGlscy9qc29uLmpzJ1xuaW1wb3J0IHtcbiAgb3V0cHV0U2NoZW1hIGFzIHBlcm1pc3Npb25Ub29sT3V0cHV0U2NoZW1hLFxuICBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRTY2hlbWEuanMnXG5pbXBvcnQgeyBjcmVhdGVBYm9ydENvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tYmluZWRBYm9ydFNpZ25hbCB9IGZyb20gJ3NyYy91dGlscy9jb21iaW5lZEFib3J0U2lnbmFsLmpzJ1xuaW1wb3J0IHsgZ2VuZXJhdGVTZXNzaW9uVGl0bGUgfSBmcm9tICdzcmMvdXRpbHMvc2Vzc2lvblRpdGxlLmpzJ1xuaW1wb3J0IHsgYnVpbGRTaWRlUXVlc3Rpb25GYWxsYmFja1BhcmFtcyB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUNvbnRleHQuanMnXG5pbXBvcnQgeyBydW5TaWRlUXVlc3Rpb24gfSBmcm9tICdzcmMvdXRpbHMvc2lkZVF1ZXN0aW9uLmpzJ1xuaW1wb3J0IHtcbiAgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzLFxuICBwcm9jZXNzU2V0dXBIb29rcyxcbiAgdGFrZUluaXRpYWxVc2VyTWVzc2FnZSxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25TdGFydC5qcydcbmltcG9ydCB7XG4gIERFRkFVTFRfT1VUUFVUX1NUWUxFX05BTUUsXG4gIGdldEFsbE91dHB1dFN0eWxlcyxcbn0gZnJvbSAnc3JjL2NvbnN0YW50cy9vdXRwdXRTdHlsZXMuanMnXG5pbXBvcnQgeyBURUFNTUFURV9NRVNTQUdFX1RBRywgVElDS19UQUcgfSBmcm9tICdzcmMvY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7XG4gIGdldFNldHRpbmdzX0RFUFJFQ0FURUQsXG4gIGdldFNldHRpbmdzV2l0aFNvdXJjZXMsXG59IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3IgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY2hhbmdlRGV0ZWN0b3IuanMnXG5pbXBvcnQgeyBhcHBseVNldHRpbmdzQ2hhbmdlIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL2FwcGx5U2V0dGluZ3NDaGFuZ2UuanMnXG5pbXBvcnQge1xuICBpc0Zhc3RNb2RlQXZhaWxhYmxlLFxuICBpc0Zhc3RNb2RlRW5hYmxlZCxcbiAgaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwsXG4gIGdldEZhc3RNb2RlU3RhdGUsXG59IGZyb20gJ3NyYy91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7XG4gIGlzQXV0b01vZGVHYXRlRW5hYmxlZCxcbiAgZ2V0QXV0b01vZGVVbmF2YWlsYWJsZU5vdGlmaWNhdGlvbixcbiAgZ2V0QXV0b01vZGVVbmF2YWlsYWJsZVJlYXNvbixcbiAgaXNCeXBhc3NQZXJtaXNzaW9uc01vZGVEaXNhYmxlZCxcbiAgdHJhbnNpdGlvblBlcm1pc3Npb25Nb2RlLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvblNldHVwLmpzJ1xuaW1wb3J0IHtcbiAgdHJ5R2VuZXJhdGVTdWdnZXN0aW9uLFxuICBsb2dTdWdnZXN0aW9uT3V0Y29tZSxcbiAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQsXG4gIHR5cGUgUHJvbXB0VmFyaWFudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL1Byb21wdFN1Z2dlc3Rpb24vcHJvbXB0U3VnZ2VzdGlvbi5qcydcbmltcG9ydCB7IGdldExhc3RDYWNoZVNhZmVQYXJhbXMgfSBmcm9tICdzcmMvdXRpbHMvZm9ya2VkQWdlbnQuanMnXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mb3JtYXRpb24gfSBmcm9tICdzcmMvdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9vYXV0aC9pbmRleC5qcydcbmltcG9ydCB7IGluc3RhbGxPQXV0aFRva2VucyB9IGZyb20gJ3NyYy9jbGkvaGFuZGxlcnMvYXV0aC5qcydcbmltcG9ydCB7IGdldEFQSVByb3ZpZGVyIH0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL3Byb3ZpZGVycy5qcydcbmltcG9ydCB0eXBlIHsgSG9va0NhbGxiYWNrTWF0Y2hlciB9IGZyb20gJ3NyYy90eXBlcy9ob29rcy5qcydcbmltcG9ydCB7IEF3c0F1dGhTdGF0dXNNYW5hZ2VyIH0gZnJvbSAnc3JjL3V0aWxzL2F3c0F1dGhTdGF0dXNNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUgeyBIb29rRXZlbnQgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7XG4gIHJlZ2lzdGVySG9va0NhbGxiYWNrcyxcbiAgc2V0SW5pdEpzb25TY2hlbWEsXG4gIGdldEluaXRKc29uU2NoZW1hLFxuICBzZXRTZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZCxcbn0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGNyZWF0ZVN5bnRoZXRpY091dHB1dFRvb2wgfSBmcm9tICdzcmMvdG9vbHMvU3ludGhldGljT3V0cHV0VG9vbC9TeW50aGV0aWNPdXRwdXRUb29sLmpzJ1xuaW1wb3J0IHsgcGFyc2VTZXNzaW9uSWRlbnRpZmllciB9IGZyb20gJ3NyYy91dGlscy9zZXNzaW9uVXJsLmpzJ1xuaW1wb3J0IHtcbiAgaHlkcmF0ZVJlbW90ZVNlc3Npb24sXG4gIGh5ZHJhdGVGcm9tQ0NSdjJJbnRlcm5hbEV2ZW50cyxcbiAgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIsXG4gIGRvZXNNZXNzYWdlRXhpc3RJblNlc3Npb24sXG4gIGZpbmRVbnJlc29sdmVkVG9vbFVzZSxcbiAgcmVjb3JkQXR0cmlidXRpb25TbmFwc2hvdCxcbiAgc2F2ZUFnZW50U2V0dGluZyxcbiAgc2F2ZU1vZGUsXG4gIHNhdmVBaUdlbmVyYXRlZFRpdGxlLFxuICByZXN0b3JlU2Vzc2lvbk1ldGFkYXRhLFxufSBmcm9tICdzcmMvdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBpbmNyZW1lbnRQcm9tcHRDb3VudCB9IGZyb20gJ3NyYy91dGlscy9jb21taXRBdHRyaWJ1dGlvbi5qcydcbmltcG9ydCB7XG4gIHNldHVwU2RrTWNwQ2xpZW50cyxcbiAgY29ubmVjdFRvU2VydmVyLFxuICBjbGVhclNlcnZlckNhY2hlLFxuICBmZXRjaFRvb2xzRm9yQ2xpZW50LFxuICBhcmVNY3BDb25maWdzRXF1YWwsXG4gIHJlY29ubmVjdE1jcFNlcnZlckltcGwsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY2xpZW50LmpzJ1xuaW1wb3J0IHtcbiAgZmlsdGVyTWNwU2VydmVyc0J5UG9saWN5LFxuICBnZXRNY3BDb25maWdCeU5hbWUsXG4gIGlzTWNwU2VydmVyRGlzYWJsZWQsXG4gIHNldE1jcFNlcnZlckVuYWJsZWQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgcGVyZm9ybU1DUE9BdXRoRmxvdyxcbiAgcmV2b2tlU2VydmVyVG9rZW5zLFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2F1dGguanMnXG5pbXBvcnQge1xuICBydW5FbGljaXRhdGlvbkhvb2tzLFxuICBydW5FbGljaXRhdGlvblJlc3VsdEhvb2tzLFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2VsaWNpdGF0aW9uSGFuZGxlci5qcydcbmltcG9ydCB7IGV4ZWN1dGVOb3RpZmljYXRpb25Ib29rcyB9IGZyb20gJ3NyYy91dGlscy9ob29rcy5qcydcbmltcG9ydCB7XG4gIEVsaWNpdFJlcXVlc3RTY2hlbWEsXG4gIEVsaWNpdGF0aW9uQ29tcGxldGVOb3RpZmljYXRpb25TY2hlbWEsXG59IGZyb20gJ0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvdHlwZXMuanMnXG5pbXBvcnQgeyBnZXRNY3BQcmVmaXggfSBmcm9tICdzcmMvc2VydmljZXMvbWNwL21jcFN0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcixcbiAgZmlsdGVyVG9vbHNCeVNlcnZlcixcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC91dGlscy5qcydcbmltcG9ydCB7IHNldHVwVnNjb2RlU2RrTWNwIH0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC92c2NvZGVTZGtNY3AuanMnXG5pbXBvcnQgeyBnZXRBbGxNY3BDb25maWdzIH0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC9jb25maWcuanMnXG5pbXBvcnQge1xuICBpc1F1YWxpZmllZEZvckdyb3ZlLFxuICBjaGVja0dyb3ZlRm9yTm9uSW50ZXJhY3RpdmUsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvZ3JvdmUuanMnXG5pbXBvcnQge1xuICB0b0ludGVybmFsTWVzc2FnZXMsXG4gIHRvU0RLUmF0ZUxpbWl0SW5mbyxcbn0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzL21hcHBlcnMuanMnXG5pbXBvcnQgeyBjcmVhdGVNb2RlbFN3aXRjaEJyZWFkY3J1bWJzIH0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgY29sbGVjdENvbnRleHREYXRhIH0gZnJvbSAnc3JjL2NvbW1hbmRzL2NvbnRleHQvY29udGV4dC1ub25pbnRlcmFjdGl2ZS5qcydcbmltcG9ydCB7IExPQ0FMX0NPTU1BTkRfU1RET1VUX1RBRyB9IGZyb20gJ3NyYy9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHtcbiAgc3RhdHVzTGlzdGVuZXJzLFxuICB0eXBlIENsYXVkZUFJTGltaXRzLFxufSBmcm9tICdzcmMvc2VydmljZXMvY2xhdWRlQWlMaW1pdHMuanMnXG5pbXBvcnQge1xuICBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCxcbiAgZ2V0TWFpbkxvb3BNb2RlbCxcbiAgbW9kZWxEaXNwbGF5U3RyaW5nLFxuICBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbCxcbn0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kZWxPcHRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL21vZGVsT3B0aW9ucy5qcydcbmltcG9ydCB7XG4gIG1vZGVsU3VwcG9ydHNFZmZvcnQsXG4gIG1vZGVsU3VwcG9ydHNNYXhFZmZvcnQsXG4gIEVGRk9SVF9MRVZFTFMsXG4gIHJlc29sdmVBcHBsaWVkRWZmb3J0LFxufSBmcm9tICdzcmMvdXRpbHMvZWZmb3J0LmpzJ1xuaW1wb3J0IHsgbW9kZWxTdXBwb3J0c0FkYXB0aXZlVGhpbmtpbmcgfSBmcm9tICdzcmMvdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgeyBtb2RlbFN1cHBvcnRzQXV0b01vZGUgfSBmcm9tICdzcmMvdXRpbHMvYmV0YXMuanMnXG5pbXBvcnQgeyBlbnN1cmVNb2RlbFN0cmluZ3NJbml0aWFsaXplZCB9IGZyb20gJ3NyYy91dGlscy9tb2RlbC9tb2RlbFN0cmluZ3MuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uSWQsXG4gIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZSxcbiAgc2V0TWFpblRocmVhZEFnZW50VHlwZSxcbiAgc3dpdGNoU2Vzc2lvbixcbiAgaXNTZXNzaW9uUGVyc2lzdGVuY2VEaXNhYmxlZCxcbiAgZ2V0SXNSZW1vdGVNb2RlLFxuICBnZXRGbGFnU2V0dGluZ3NJbmxpbmUsXG4gIHNldEZsYWdTZXR0aW5nc0lubGluZSxcbiAgZ2V0TWFpblRocmVhZEFnZW50VHlwZSxcbiAgZ2V0QWxsb3dlZENoYW5uZWxzLFxuICBzZXRBbGxvd2VkQ2hhbm5lbHMsXG4gIHR5cGUgQ2hhbm5lbEVudHJ5LFxufSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgcnVuV2l0aFdvcmtsb2FkLCBXT1JLTE9BRF9DUk9OIH0gZnJvbSAnc3JjL3V0aWxzL3dvcmtsb2FkQ29udGV4dC5qcydcbmltcG9ydCB0eXBlIHsgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRCbG9ja1BhcmFtIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGVTdG9yZS5qcydcbmltcG9ydCB7XG4gIGZpbGVIaXN0b3J5UmV3aW5kLFxuICBmaWxlSGlzdG9yeUNhblJlc3RvcmUsXG4gIGZpbGVIaXN0b3J5RW5hYmxlZCxcbiAgZmlsZUhpc3RvcnlHZXREaWZmU3RhdHMsXG59IGZyb20gJ3NyYy91dGlscy9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7XG4gIHJlc3RvcmVBZ2VudEZyb21TZXNzaW9uLFxuICByZXN0b3JlU2Vzc2lvblN0YXRlRnJvbUxvZyxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25SZXN0b3JlLmpzJ1xuaW1wb3J0IHsgU2FuZGJveE1hbmFnZXIgfSBmcm9tICdzcmMvdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5pbXBvcnQge1xuICBoZWFkbGVzc1Byb2ZpbGVyU3RhcnRUdXJuLFxuICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCxcbiAgbG9nSGVhZGxlc3NQcm9maWxlclR1cm4sXG59IGZyb20gJ3NyYy91dGlscy9oZWFkbGVzc1Byb2ZpbGVyLmpzJ1xuaW1wb3J0IHtcbiAgc3RhcnRRdWVyeVByb2ZpbGUsXG4gIGxvZ1F1ZXJ5UHJvZmlsZVJlcG9ydCxcbn0gZnJvbSAnc3JjL3V0aWxzL3F1ZXJ5UHJvZmlsZXIuanMnXG5pbXBvcnQgeyBhc1Nlc3Npb25JZCB9IGZyb20gJ3NyYy90eXBlcy9pZHMuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBza2lsbENoYW5nZURldGVjdG9yIH0gZnJvbSAnLi4vdXRpbHMvc2tpbGxzL3NraWxsQ2hhbmdlRGV0ZWN0b3IuanMnXG5pbXBvcnQgeyBnZXRDb21tYW5kcywgY2xlYXJDb21tYW5kc0NhY2hlIH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQge1xuICBpc0JhcmVNb2RlLFxuICBpc0VudlRydXRoeSxcbiAgaXNFbnZEZWZpbmVkRmFsc3ksXG59IGZyb20gJy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzcyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvaGVhZGxlc3NQbHVnaW5JbnN0YWxsLmpzJ1xuaW1wb3J0IHsgcmVmcmVzaEFjdGl2ZVBsdWdpbnMgfSBmcm9tICcuLi91dGlscy9wbHVnaW5zL3JlZnJlc2guanMnXG5pbXBvcnQgeyBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHtcbiAgaXNUZWFtTGVhZCxcbiAgaGFzQWN0aXZlSW5Qcm9jZXNzVGVhbW1hdGVzLFxuICBoYXNXb3JraW5nSW5Qcm9jZXNzVGVhbW1hdGVzLFxuICB3YWl0Rm9yVGVhbW1hdGVzVG9CZWNvbWVJZGxlLFxufSBmcm9tICcuLi91dGlscy90ZWFtbWF0ZS5qcydcbmltcG9ydCB7XG4gIHJlYWRVbnJlYWRNZXNzYWdlcyxcbiAgbWFya01lc3NhZ2VzQXNSZWFkLFxuICBpc1NodXRkb3duQXBwcm92ZWQsXG59IGZyb20gJy4uL3V0aWxzL3RlYW1tYXRlTWFpbGJveC5qcydcbmltcG9ydCB7IHJlbW92ZVRlYW1tYXRlRnJvbVRlYW1GaWxlIH0gZnJvbSAnLi4vdXRpbHMvc3dhcm0vdGVhbUhlbHBlcnMuanMnXG5pbXBvcnQgeyB1bmFzc2lnblRlYW1tYXRlVGFza3MgfSBmcm9tICcuLi91dGlscy90YXNrcy5qcydcbmltcG9ydCB7IGdldFJ1bm5pbmdUYXNrcyB9IGZyb20gJy4uL3V0aWxzL3Rhc2svZnJhbWV3b3JrLmpzJ1xuaW1wb3J0IHsgaXNCYWNrZ3JvdW5kVGFzayB9IGZyb20gJy4uL3Rhc2tzL3R5cGVzLmpzJ1xuaW1wb3J0IHsgc3RvcFRhc2sgfSBmcm9tICcuLi90YXNrcy9zdG9wVGFzay5qcydcbmltcG9ydCB7IGRyYWluU2RrRXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMvc2RrRXZlbnRRdWV1ZS5qcydcbmltcG9ydCB7IGluaXRpYWxpemVHcm93dGhCb29rIH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsgaXNFeHRyYWN0TW9kZUFjdGl2ZSB9IGZyb20gJy4uL21lbWRpci9wYXRocy5qcydcblxuLy8gRGVhZCBjb2RlIGVsaW1pbmF0aW9uOiBjb25kaXRpb25hbCBpbXBvcnRzXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBjb29yZGluYXRvck1vZGVNb2R1bGUgPSBmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJylcbiAgPyAocmVxdWlyZSgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykpXG4gIDogbnVsbFxuY29uc3QgcHJvYWN0aXZlTW9kdWxlID1cbiAgZmVhdHVyZSgnUFJPQUNUSVZFJykgfHwgZmVhdHVyZSgnS0FJUk9TJylcbiAgICA/IChyZXF1aXJlKCcuLi9wcm9hY3RpdmUvaW5kZXguanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9wcm9hY3RpdmUvaW5kZXguanMnKSlcbiAgICA6IG51bGxcbmNvbnN0IGNyb25TY2hlZHVsZXJNb2R1bGUgPSBmZWF0dXJlKCdBR0VOVF9UUklHR0VSUycpXG4gID8gKHJlcXVpcmUoJy4uL3V0aWxzL2Nyb25TY2hlZHVsZXIuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi91dGlscy9jcm9uU2NoZWR1bGVyLmpzJykpXG4gIDogbnVsbFxuY29uc3QgY3JvbkppdHRlckNvbmZpZ01vZHVsZSA9IGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJylcbiAgPyAocmVxdWlyZSgnLi4vdXRpbHMvY3JvbkppdHRlckNvbmZpZy5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3V0aWxzL2Nyb25KaXR0ZXJDb25maWcuanMnKSlcbiAgOiBudWxsXG5jb25zdCBjcm9uR2F0ZSA9IGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJylcbiAgPyAocmVxdWlyZSgnLi4vdG9vbHMvU2NoZWR1bGVDcm9uVG9vbC9wcm9tcHQuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi90b29scy9TY2hlZHVsZUNyb25Ub29sL3Byb21wdC5qcycpKVxuICA6IG51bGxcbmNvbnN0IGV4dHJhY3RNZW1vcmllc01vZHVsZSA9IGZlYXR1cmUoJ0VYVFJBQ1RfTUVNT1JJRVMnKVxuICA/IChyZXF1aXJlKCcuLi9zZXJ2aWNlcy9leHRyYWN0TWVtb3JpZXMvZXh0cmFjdE1lbW9yaWVzLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvZXh0cmFjdE1lbW9yaWVzL2V4dHJhY3RNZW1vcmllcy5qcycpKVxuICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5jb25zdCBTSFVURE9XTl9URUFNX1BST01QVCA9IGA8c3lzdGVtLXJlbWluZGVyPlxuWW91IGFyZSBydW5uaW5nIGluIG5vbi1pbnRlcmFjdGl2ZSBtb2RlIGFuZCBjYW5ub3QgcmV0dXJuIGEgcmVzcG9uc2UgdG8gdGhlIHVzZXIgdW50aWwgeW91ciB0ZWFtIGlzIHNodXQgZG93bi5cblxuWW91IE1VU1Qgc2h1dCBkb3duIHlvdXIgdGVhbSBiZWZvcmUgcHJlcGFyaW5nIHlvdXIgZmluYWwgcmVzcG9uc2U6XG4xLiBVc2UgcmVxdWVzdFNodXRkb3duIHRvIGFzayBlYWNoIHRlYW0gbWVtYmVyIHRvIHNodXQgZG93biBncmFjZWZ1bGx5XG4yLiBXYWl0IGZvciBzaHV0ZG93biBhcHByb3ZhbHNcbjMuIFVzZSB0aGUgY2xlYW51cCBvcGVyYXRpb24gdG8gY2xlYW4gdXAgdGhlIHRlYW1cbjQuIE9ubHkgdGhlbiBwcm92aWRlIHlvdXIgZmluYWwgcmVzcG9uc2UgdG8gdGhlIHVzZXJcblxuVGhlIHVzZXIgY2Fubm90IHJlY2VpdmUgeW91ciByZXNwb25zZSB1bnRpbCB0aGUgdGVhbSBpcyBjb21wbGV0ZWx5IHNodXQgZG93bi5cbjwvc3lzdGVtLXJlbWluZGVyPlxuXG5TaHV0IGRvd24geW91ciB0ZWFtIGFuZCBwcmVwYXJlIHlvdXIgZmluYWwgcmVzcG9uc2UgZm9yIHRoZSB1c2VyLmBcblxuLy8gVHJhY2sgbWVzc2FnZSBVVUlEcyByZWNlaXZlZCBkdXJpbmcgdGhlIGN1cnJlbnQgc2Vzc2lvbiBydW50aW1lXG5jb25zdCBNQVhfUkVDRUlWRURfVVVJRFMgPSAxMF8wMDBcbmNvbnN0IHJlY2VpdmVkTWVzc2FnZVV1aWRzID0gbmV3IFNldDxVVUlEPigpXG5jb25zdCByZWNlaXZlZE1lc3NhZ2VVdWlkc09yZGVyOiBVVUlEW10gPSBbXVxuXG5mdW5jdGlvbiB0cmFja1JlY2VpdmVkTWVzc2FnZVV1aWQodXVpZDogVVVJRCk6IGJvb2xlYW4ge1xuICBpZiAocmVjZWl2ZWRNZXNzYWdlVXVpZHMuaGFzKHV1aWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIGR1cGxpY2F0ZVxuICB9XG4gIHJlY2VpdmVkTWVzc2FnZVV1aWRzLmFkZCh1dWlkKVxuICByZWNlaXZlZE1lc3NhZ2VVdWlkc09yZGVyLnB1c2godXVpZClcbiAgLy8gRXZpY3Qgb2xkZXN0IGVudHJpZXMgd2hlbiBhdCBjYXBhY2l0eVxuICBpZiAocmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5sZW5ndGggPiBNQVhfUkVDRUlWRURfVVVJRFMpIHtcbiAgICBjb25zdCB0b0V2aWN0ID0gcmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5zcGxpY2UoXG4gICAgICAwLFxuICAgICAgcmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5sZW5ndGggLSBNQVhfUkVDRUlWRURfVVVJRFMsXG4gICAgKVxuICAgIGZvciAoY29uc3Qgb2xkIG9mIHRvRXZpY3QpIHtcbiAgICAgIHJlY2VpdmVkTWVzc2FnZVV1aWRzLmRlbGV0ZShvbGQpXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlIC8vIG5ldyBVVUlEXG59XG5cbnR5cGUgUHJvbXB0VmFsdWUgPSBzdHJpbmcgfCBDb250ZW50QmxvY2tQYXJhbVtdXG5cbmZ1bmN0aW9uIHRvQmxvY2tzKHY6IFByb21wdFZhbHVlKTogQ29udGVudEJsb2NrUGFyYW1bXSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyBbeyB0eXBlOiAndGV4dCcsIHRleHQ6IHYgfV0gOiB2XG59XG5cbi8qKlxuICogSm9pbiBwcm9tcHQgdmFsdWVzIGZyb20gbXVsdGlwbGUgcXVldWVkIGNvbW1hbmRzIGludG8gb25lLiBTdHJpbmdzIGFyZVxuICogbmV3bGluZS1qb2luZWQ7IGlmIGFueSB2YWx1ZSBpcyBhIGJsb2NrIGFycmF5LCBhbGwgdmFsdWVzIGFyZSBub3JtYWxpemVkXG4gKiB0byBibG9ja3MgYW5kIGNvbmNhdGVuYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Qcm9tcHRWYWx1ZXModmFsdWVzOiBQcm9tcHRWYWx1ZVtdKTogUHJvbXB0VmFsdWUge1xuICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHZhbHVlc1swXSFcbiAgaWYgKHZhbHVlcy5ldmVyeSh2ID0+IHR5cGVvZiB2ID09PSAnc3RyaW5nJykpIHtcbiAgICByZXR1cm4gdmFsdWVzLmpvaW4oJ1xcbicpXG4gIH1cbiAgcmV0dXJuIHZhbHVlcy5mbGF0TWFwKHRvQmxvY2tzKVxufVxuXG4vKipcbiAqIFdoZXRoZXIgYG5leHRgIGNhbiBiZSBiYXRjaGVkIGludG8gdGhlIHNhbWUgYXNrKCkgY2FsbCBhcyBgaGVhZGAuIE9ubHlcbiAqIHByb21wdC1tb2RlIGNvbW1hbmRzIGJhdGNoLCBhbmQgb25seSB3aGVuIHRoZSB3b3JrbG9hZCB0YWcgbWF0Y2hlcyAoc28gdGhlXG4gKiBjb21iaW5lZCB0dXJuIGlzIGF0dHJpYnV0ZWQgY29ycmVjdGx5KSBhbmQgdGhlIGlzTWV0YSBmbGFnIG1hdGNoZXMgKHNvIGFcbiAqIHByb2FjdGl2ZSB0aWNrIGNhbid0IG1lcmdlIGludG8gYSB1c2VyIHByb21wdCBhbmQgbG9zZSBpdHMgaGlkZGVuLWluLVxuICogdHJhbnNjcmlwdCBtYXJraW5nIHdoZW4gdGhlIGhlYWQgaXMgc3ByZWFkIG92ZXIgdGhlIG1lcmdlZCBjb21tYW5kKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbkJhdGNoV2l0aChcbiAgaGVhZDogUXVldWVkQ29tbWFuZCxcbiAgbmV4dDogUXVldWVkQ29tbWFuZCB8IHVuZGVmaW5lZCxcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIG5leHQgIT09IHVuZGVmaW5lZCAmJlxuICAgIG5leHQubW9kZSA9PT0gJ3Byb21wdCcgJiZcbiAgICBuZXh0Lndvcmtsb2FkID09PSBoZWFkLndvcmtsb2FkICYmXG4gICAgbmV4dC5pc01ldGEgPT09IGhlYWQuaXNNZXRhXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkhlYWRsZXNzKFxuICBpbnB1dFByb21wdDogc3RyaW5nIHwgQXN5bmNJdGVyYWJsZTxzdHJpbmc+LFxuICBnZXRBcHBTdGF0ZTogKCkgPT4gQXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgY29tbWFuZHM6IENvbW1hbmRbXSxcbiAgdG9vbHM6IFRvb2xzLFxuICBzZGtNY3BDb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZGtTZXJ2ZXJDb25maWc+LFxuICBhZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdLFxuICBvcHRpb25zOiB7XG4gICAgY29udGludWU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICByZXN1bWU6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICByZXN1bWVTZXNzaW9uQXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHZlcmJvc2U6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBvdXRwdXRGb3JtYXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGpzb25TY2hlbWE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkXG4gICAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhbGxvd2VkVG9vbHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG4gICAgdGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnIHwgdW5kZWZpbmVkXG4gICAgbWF4VHVybnM6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgIG1heEJ1ZGdldFVzZDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgdGFza0J1ZGdldDogeyB0b3RhbDogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBzeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGFwcGVuZFN5c3RlbVByb21wdDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgdXNlclNwZWNpZmllZE1vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBmYWxsYmFja01vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICB0ZWxlcG9ydDogc3RyaW5nIHwgdHJ1ZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICBzZGtVcmw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHJlcGxheVVzZXJNZXNzYWdlczogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBmb3JrU2Vzc2lvbjogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIHJld2luZEZpbGVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBlbmFibGVBdXRoU3RhdHVzOiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgYWdlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHdvcmtsb2FkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBzZXR1cFRyaWdnZXI/OiAnaW5pdCcgfCAnbWFpbnRlbmFuY2UnIHwgdW5kZWZpbmVkXG4gICAgc2Vzc2lvblN0YXJ0SG9va3NQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzPlxuICAgIHNldFNES1N0YXR1cz86IChzdGF0dXM6IFNES1N0YXR1cykgPT4gdm9pZFxuICB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBydW5IZWFkbGVzcygpIGVudGVyZWQnKVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJlxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VYSVRfQUZURVJfRklSU1RfUkVOREVSKVxuICApIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgIGBcXG5TdGFydHVwIHRpbWU6ICR7TWF0aC5yb3VuZChwcm9jZXNzLnVwdGltZSgpICogMTAwMCl9bXNcXG5gLFxuICAgIClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgwKVxuICB9XG5cbiAgLy8gRmlyZSB1c2VyIHNldHRpbmdzIGRvd25sb2FkIG5vdyBzbyBpdCBvdmVybGFwcyB3aXRoIHRoZSBNQ1AvdG9vbCBzZXR1cFxuICAvLyBiZWxvdy4gTWFuYWdlZCBzZXR0aW5ncyBhbHJlYWR5IHN0YXJ0ZWQgaW4gbWFpbi50c3ggcHJlQWN0aW9uOyB0aGlzIGdpdmVzXG4gIC8vIHVzZXIgc2V0dGluZ3MgYSBzaW1pbGFyIGhlYWQgc3RhcnQuIFRoZSBjYWNoZWQgcHJvbWlzZSBpcyBqb2luZWQgaW5cbiAgLy8gaW5zdGFsbFBsdWdpbnNBbmRBcHBseU1jcEluQmFja2dyb3VuZCBiZWZvcmUgcGx1Z2luIGluc3RhbGwgcmVhZHNcbiAgLy8gZW5hYmxlZFBsdWdpbnMuXG4gIGlmIChcbiAgICBmZWF0dXJlKCdET1dOTE9BRF9VU0VSX1NFVFRJTkdTJykgJiZcbiAgICAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFKSB8fCBnZXRJc1JlbW90ZU1vZGUoKSlcbiAgKSB7XG4gICAgdm9pZCBkb3dubG9hZFVzZXJTZXR0aW5ncygpXG4gIH1cblxuICAvLyBJbiBoZWFkbGVzcyBtb2RlIHRoZXJlIGlzIG5vIFJlYWN0IHRyZWUsIHNvIHRoZSB1c2VTZXR0aW5nc0NoYW5nZSBob29rXG4gIC8vIG5ldmVyIHJ1bnMuIFN1YnNjcmliZSBkaXJlY3RseSBzbyB0aGF0IHNldHRpbmdzIGNoYW5nZXMgKGluY2x1ZGluZ1xuICAvLyBtYW5hZ2VkLXNldHRpbmdzIC8gcG9saWN5IHVwZGF0ZXMpIGFyZSBmdWxseSBhcHBsaWVkLlxuICBzZXR0aW5nc0NoYW5nZURldGVjdG9yLnN1YnNjcmliZShzb3VyY2UgPT4ge1xuICAgIGFwcGx5U2V0dGluZ3NDaGFuZ2Uoc291cmNlLCBzZXRBcHBTdGF0ZSlcblxuICAgIC8vIEluIGhlYWRsZXNzIG1vZGUsIGFsc28gc3luYyB0aGUgZGVub3JtYWxpemVkIGZhc3RNb2RlIGZpZWxkIGZyb21cbiAgICAvLyBzZXR0aW5ncy4gVGhlIFRVSSBtYW5hZ2VzIGZhc3RNb2RlIHZpYSB0aGUgVUkgc28gaXQgc2tpcHMgdGhpcy5cbiAgICBpZiAoaXNGYXN0TW9kZUVuYWJsZWQoKSkge1xuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSBwcmV2LnNldHRpbmdzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIGNvbnN0IGZhc3RNb2RlID0gcy5mYXN0TW9kZSA9PT0gdHJ1ZSAmJiAhcy5mYXN0TW9kZVBlclNlc3Npb25PcHRJblxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBmYXN0TW9kZSB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvLyBQcm9hY3RpdmUgYWN0aXZhdGlvbiBpcyBub3cgaGFuZGxlZCBpbiBtYWluLnRzeCBiZWZvcmUgZ2V0VG9vbHMoKSBzb1xuICAvLyBTbGVlcFRvb2wgcGFzc2VzIGlzRW5hYmxlZCgpIGZpbHRlcmluZy4gVGhpcyBmYWxsYmFjayBjb3ZlcnMgdGhlIGNhc2VcbiAgLy8gd2hlcmUgQ0xBVURFX0NPREVfUFJPQUNUSVZFIGlzIHNldCBidXQgbWFpbi50c3gncyBjaGVjayBkaWRuJ3QgZmlyZVxuICAvLyAoZS5nLiBlbnYgd2FzIGluamVjdGVkIGJ5IHRoZSBTREsgdHJhbnNwb3J0IGFmdGVyIGFyZ3YgcGFyc2luZykuXG4gIGlmIChcbiAgICAoZmVhdHVyZSgnUFJPQUNUSVZFJykgfHwgZmVhdHVyZSgnS0FJUk9TJykpICYmXG4gICAgcHJvYWN0aXZlTW9kdWxlICYmXG4gICAgIXByb2FjdGl2ZU1vZHVsZS5pc1Byb2FjdGl2ZUFjdGl2ZSgpICYmXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUFJPQUNUSVZFKVxuICApIHtcbiAgICBwcm9hY3RpdmVNb2R1bGUuYWN0aXZhdGVQcm9hY3RpdmUoJ2NvbW1hbmQnKVxuICB9XG5cbiAgLy8gUGVyaW9kaWNhbGx5IGZvcmNlIGEgZnVsbCBHQyB0byBrZWVwIG1lbW9yeSB1c2FnZSBpbiBjaGVja1xuICBpZiAodHlwZW9mIEJ1biAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBnY1RpbWVyID0gc2V0SW50ZXJ2YWwoQnVuLmdjLCAxMDAwKVxuICAgIGdjVGltZXIudW5yZWYoKVxuICB9XG5cbiAgLy8gU3RhcnQgaGVhZGxlc3MgcHJvZmlsZXIgZm9yIGZpcnN0IHR1cm5cbiAgaGVhZGxlc3NQcm9maWxlclN0YXJ0VHVybigpXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdydW5IZWFkbGVzc19lbnRyeScpXG5cbiAgLy8gQ2hlY2sgR3JvdmUgcmVxdWlyZW1lbnRzIGZvciBub24taW50ZXJhY3RpdmUgY29uc3VtZXIgc3Vic2NyaWJlcnNcbiAgaWYgKGF3YWl0IGlzUXVhbGlmaWVkRm9yR3JvdmUoKSkge1xuICAgIGF3YWl0IGNoZWNrR3JvdmVGb3JOb25JbnRlcmFjdGl2ZSgpXG4gIH1cbiAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX2dyb3ZlX2NoZWNrJylcblxuICAvLyBJbml0aWFsaXplIEdyb3d0aEJvb2sgc28gZmVhdHVyZSBmbGFncyB0YWtlIGVmZmVjdCBpbiBoZWFkbGVzcyBtb2RlLlxuICAvLyBXaXRob3V0IHRoaXMsIHRoZSBkaXNrIGNhY2hlIGlzIGVtcHR5IGFuZCBhbGwgZmxhZ3MgZmFsbCBiYWNrIHRvIGRlZmF1bHRzLlxuICB2b2lkIGluaXRpYWxpemVHcm93dGhCb29rKClcblxuICBpZiAob3B0aW9ucy5yZXN1bWVTZXNzaW9uQXQgJiYgIW9wdGlvbnMucmVzdW1lKSB7XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYEVycm9yOiAtLXJlc3VtZS1zZXNzaW9uLWF0IHJlcXVpcmVzIC0tcmVzdW1lXFxuYClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG9wdGlvbnMucmV3aW5kRmlsZXMgJiYgIW9wdGlvbnMucmVzdW1lKSB7XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYEVycm9yOiAtLXJld2luZC1maWxlcyByZXF1aXJlcyAtLXJlc3VtZVxcbmApXG4gICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChvcHRpb25zLnJld2luZEZpbGVzICYmIGlucHV0UHJvbXB0KSB7XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICBgRXJyb3I6IC0tcmV3aW5kLWZpbGVzIGlzIGEgc3RhbmRhbG9uZSBvcGVyYXRpb24gYW5kIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBwcm9tcHRcXG5gLFxuICAgIClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3RydWN0dXJlZElPID0gZ2V0U3RydWN0dXJlZElPKGlucHV0UHJvbXB0LCBvcHRpb25zKVxuICBsb2dGb3JEZWJ1Z2dpbmcoJ1tIRUFETEVTU10gU3RydWN0dXJlZElPIGNyZWF0ZWQnKVxuXG4gIC8vIFdoZW4gZW1pdHRpbmcgTkRKU09OIGZvciBTREsgY2xpZW50cywgYW55IHN0cmF5IHdyaXRlIHRvIHN0ZG91dCAoZGVidWdcbiAgLy8gcHJpbnRzLCBkZXBlbmRlbmN5IGNvbnNvbGUubG9nLCBsaWJyYXJ5IGJhbm5lcnMpIGJyZWFrcyB0aGUgY2xpZW50J3NcbiAgLy8gbGluZS1ieS1saW5lIEpTT04gcGFyc2VyLiBJbnN0YWxsIGEgZ3VhcmQgdGhhdCBkaXZlcnRzIG5vbi1KU09OIGxpbmVzIHRvXG4gIC8vIHN0ZGVyciBzbyB0aGUgc3RyZWFtIHN0YXlzIGNsZWFuLiBNdXN0IHJ1biBiZWZvcmUgdGhlIGZpcnN0XG4gIC8vIHN0cnVjdHVyZWRJTy53cml0ZSBiZWxvdy5cbiAgaWYgKG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnc3RyZWFtLWpzb24nKSB7XG4gICAgaW5zdGFsbFN0cmVhbUpzb25TdGRvdXRHdWFyZCgpXG4gIH1cblxuICAvLyAjMzQwNDQ6IGlmIHVzZXIgZXhwbGljaXRseSBzZXQgc2FuZGJveC5lbmFibGVkPXRydWUgYnV0IGRlcHMgYXJlIG1pc3NpbmcsXG4gIC8vIGlzU2FuZGJveGluZ0VuYWJsZWQoKSByZXR1cm5zIGZhbHNlIHNpbGVudGx5LiBTdXJmYWNlIHRoZSByZWFzb24gc28gdXNlcnNcbiAgLy8ga25vdyB0aGVpciBzZWN1cml0eSBjb25maWcgaXNuJ3QgYmVpbmcgZW5mb3JjZWQuXG4gIGNvbnN0IHNhbmRib3hVbmF2YWlsYWJsZVJlYXNvbiA9IFNhbmRib3hNYW5hZ2VyLmdldFNhbmRib3hVbmF2YWlsYWJsZVJlYXNvbigpXG4gIGlmIChzYW5kYm94VW5hdmFpbGFibGVSZWFzb24pIHtcbiAgICBpZiAoU2FuZGJveE1hbmFnZXIuaXNTYW5kYm94UmVxdWlyZWQoKSkge1xuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgIGBcXG5FcnJvcjogc2FuZGJveCByZXF1aXJlZCBidXQgdW5hdmFpbGFibGU6ICR7c2FuZGJveFVuYXZhaWxhYmxlUmVhc29ufVxcbmAgK1xuICAgICAgICAgIGAgIHNhbmRib3guZmFpbElmVW5hdmFpbGFibGUgaXMgc2V0IFx1MjAxNCByZWZ1c2luZyB0byBzdGFydCB3aXRob3V0IGEgd29ya2luZyBzYW5kYm94LlxcblxcbmAsXG4gICAgICApXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgYFxcblx1MjZBMCBTYW5kYm94IGRpc2FibGVkOiAke3NhbmRib3hVbmF2YWlsYWJsZVJlYXNvbn1cXG5gICtcbiAgICAgICAgYCAgQ29tbWFuZHMgd2lsbCBydW4gV0lUSE9VVCBzYW5kYm94aW5nLiBOZXR3b3JrIGFuZCBmaWxlc3lzdGVtIHJlc3RyaWN0aW9ucyB3aWxsIE5PVCBiZSBlbmZvcmNlZC5cXG5cXG5gLFxuICAgIClcbiAgfSBlbHNlIGlmIChTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKCkpIHtcbiAgICAvLyBJbml0aWFsaXplIHNhbmRib3ggd2l0aCBhIGNhbGxiYWNrIHRoYXQgZm9yd2FyZHMgbmV0d29yayBwZXJtaXNzaW9uXG4gICAgLy8gcmVxdWVzdHMgdG8gdGhlIFNESyBob3N0IHZpYSB0aGUgY2FuX3VzZV90b29sIGNvbnRyb2xfcmVxdWVzdCBwcm90b2NvbC5cbiAgICAvLyBUaGlzIG11c3QgaGFwcGVuIGFmdGVyIHN0cnVjdHVyZWRJTyBpcyBjcmVhdGVkIHNvIHdlIGNhbiBzZW5kIHJlcXVlc3RzLlxuICAgIGNvbnN0IHNhbmRib3hBc2tDYWxsYmFjayA9IHN0cnVjdHVyZWRJTy5jcmVhdGVTYW5kYm94QXNrQ2FsbGJhY2soKVxuICAgIGNvbnN0IGluaXRpYWxpemVTYW5kYm94ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbSEVBRExFU1NdIEluaXRpYWxpemluZyBzYW5kYm94Li4uJylcbiAgICAgIGF3YWl0IFNhbmRib3hNYW5hZ2VyLmluaXRpYWxpemUoc2FuZGJveEFza0NhbGxiYWNrKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbSEVBRExFU1NdIFNhbmRib3ggaW5pdGlhbGl6ZWQnKVxuICAgIH1cbiAgICBpZiAoU2FuZGJveE1hbmFnZXIuaXNTYW5kYm94UmVxdWlyZWQoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZVNhbmRib3goKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGBcXG5cdTI3NEMgU2FuZGJveCBFcnJvcjogJHtlcnJvck1lc3NhZ2UoZXJyKX1cXG5gKVxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxLCAnb3RoZXInKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCBpbml0aWFsaXplU2FuZGJveCgpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGBcXG5cdTI3NEMgU2FuZGJveCBFcnJvcjogJHtlcnJvck1lc3NhZ2UoZXJyKX1cXG5gKVxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxLCAnb3RoZXInKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5vdXRwdXRGb3JtYXQgPT09ICdzdHJlYW0tanNvbicgJiYgb3B0aW9ucy52ZXJib3NlKSB7XG4gICAgcmVnaXN0ZXJIb29rRXZlbnRIYW5kbGVyKGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UgPSAoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdzdGFydGVkJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaG9va19zdGFydGVkJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgaG9va19pZDogZXZlbnQuaG9va0lkLFxuICAgICAgICAgICAgICBob29rX25hbWU6IGV2ZW50Lmhvb2tOYW1lLFxuICAgICAgICAgICAgICBob29rX2V2ZW50OiBldmVudC5ob29rRXZlbnQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdob29rX3Byb2dyZXNzJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgaG9va19pZDogZXZlbnQuaG9va0lkLFxuICAgICAgICAgICAgICBob29rX25hbWU6IGV2ZW50Lmhvb2tOYW1lLFxuICAgICAgICAgICAgICBob29rX2V2ZW50OiBldmVudC5ob29rRXZlbnQsXG4gICAgICAgICAgICAgIHN0ZG91dDogZXZlbnQuc3Rkb3V0LFxuICAgICAgICAgICAgICBzdGRlcnI6IGV2ZW50LnN0ZGVycixcbiAgICAgICAgICAgICAgb3V0cHV0OiBldmVudC5vdXRwdXQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdob29rX3Jlc3BvbnNlJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgaG9va19pZDogZXZlbnQuaG9va0lkLFxuICAgICAgICAgICAgICBob29rX25hbWU6IGV2ZW50Lmhvb2tOYW1lLFxuICAgICAgICAgICAgICBob29rX2V2ZW50OiBldmVudC5ob29rRXZlbnQsXG4gICAgICAgICAgICAgIG91dHB1dDogZXZlbnQub3V0cHV0LFxuICAgICAgICAgICAgICBzdGRvdXQ6IGV2ZW50LnN0ZG91dCxcbiAgICAgICAgICAgICAgc3RkZXJyOiBldmVudC5zdGRlcnIsXG4gICAgICAgICAgICAgIGV4aXRfY29kZTogZXZlbnQuZXhpdENvZGUsXG4gICAgICAgICAgICAgIG91dGNvbWU6IGV2ZW50Lm91dGNvbWUsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICAgIHZvaWQgc3RydWN0dXJlZElPLndyaXRlKG1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChvcHRpb25zLnNldHVwVHJpZ2dlcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW0hFQURMRVNTXSBSdW5uaW5nIHNldHVwIGhvb2tzIGZvciB0cmlnZ2VyPSR7b3B0aW9ucy5zZXR1cFRyaWdnZXJ9YClcbiAgICBhd2FpdCBwcm9jZXNzU2V0dXBIb29rcyhvcHRpb25zLnNldHVwVHJpZ2dlcilcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tIRUFETEVTU10gU2V0dXAgaG9va3MgY29tcGxldGVkJylcbiAgfVxuXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdiZWZvcmVfbG9hZEluaXRpYWxNZXNzYWdlcycpXG4gIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBMb2FkaW5nIGluaXRpYWwgbWVzc2FnZXMuLi4nKVxuICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgY29uc3Qge1xuICAgIG1lc3NhZ2VzOiBpbml0aWFsTWVzc2FnZXMsXG4gICAgdHVybkludGVycnVwdGlvblN0YXRlLFxuICAgIGFnZW50U2V0dGluZzogcmVzdW1lZEFnZW50U2V0dGluZyxcbiAgfSA9IGF3YWl0IGxvYWRJbml0aWFsTWVzc2FnZXMoc2V0QXBwU3RhdGUsIHtcbiAgICBjb250aW51ZTogb3B0aW9ucy5jb250aW51ZSxcbiAgICB0ZWxlcG9ydDogb3B0aW9ucy50ZWxlcG9ydCxcbiAgICByZXN1bWU6IG9wdGlvbnMucmVzdW1lLFxuICAgIHJlc3VtZVNlc3Npb25BdDogb3B0aW9ucy5yZXN1bWVTZXNzaW9uQXQsXG4gICAgZm9ya1Nlc3Npb246IG9wdGlvbnMuZm9ya1Nlc3Npb24sXG4gICAgb3V0cHV0Rm9ybWF0OiBvcHRpb25zLm91dHB1dEZvcm1hdCxcbiAgICBzZXNzaW9uU3RhcnRIb29rc1Byb21pc2U6IG9wdGlvbnMuc2Vzc2lvblN0YXJ0SG9va3NQcm9taXNlLFxuICAgIHJlc3RvcmVkV29ya2VyU3RhdGU6IHN0cnVjdHVyZWRJTy5yZXN0b3JlZFdvcmtlclN0YXRlLFxuICB9KVxuICBsb2dGb3JEZWJ1Z2dpbmcoYFtIRUFETEVTU10gSW5pdGlhbCBtZXNzYWdlcyBsb2FkZWQ6ICR7aW5pdGlhbE1lc3NhZ2VzLmxlbmd0aH1gKVxuXG4gIC8vIFNlc3Npb25TdGFydCBob29rcyBjYW4gZW1pdCBpbml0aWFsVXNlck1lc3NhZ2UgXHUyMDE0IHRoZSBmaXJzdCB1c2VyIHR1cm4gZm9yXG4gIC8vIGhlYWRsZXNzIG9yY2hlc3RyYXRvciBzZXNzaW9ucyB3aGVyZSBzdGRpbiBpcyBlbXB0eSBhbmQgYWRkaXRpb25hbENvbnRleHRcbiAgLy8gYWxvbmUgKGFuIGF0dGFjaG1lbnQsIG5vdCBhIHR1cm4pIHdvdWxkIGxlYXZlIHRoZSBSRVBMIHdpdGggbm90aGluZyB0b1xuICAvLyByZXNwb25kIHRvLiBUaGUgaG9vayBwcm9taXNlIGlzIGF3YWl0ZWQgaW5zaWRlIGxvYWRJbml0aWFsTWVzc2FnZXMsIHNvIHRoZVxuICAvLyBtb2R1bGUtbGV2ZWwgcGVuZGluZyB2YWx1ZSBpcyBzZXQgYnkgdGhlIHRpbWUgd2UgZ2V0IGhlcmUuXG4gIGNvbnN0IGhvb2tJbml0aWFsVXNlck1lc3NhZ2UgPSB0YWtlSW5pdGlhbFVzZXJNZXNzYWdlKClcbiAgaWYgKGhvb2tJbml0aWFsVXNlck1lc3NhZ2UpIHtcbiAgICBzdHJ1Y3R1cmVkSU8ucHJlcGVuZFVzZXJNZXNzYWdlKGhvb2tJbml0aWFsVXNlck1lc3NhZ2UpXG4gIH1cblxuICAvLyBSZXN0b3JlIGFnZW50IHNldHRpbmcgZnJvbSB0aGUgcmVzdW1lZCBzZXNzaW9uIChpZiBub3Qgb3ZlcnJpZGRlbiBieSBjdXJyZW50IC0tYWdlbnQgZmxhZ1xuICAvLyBvciBzZXR0aW5ncy1iYXNlZCBhZ2VudCwgd2hpY2ggd291bGQgYWxyZWFkeSBoYXZlIHNldCBtYWluVGhyZWFkQWdlbnRUeXBlIGluIG1haW4udHN4KVxuICBpZiAoIW9wdGlvbnMuYWdlbnQgJiYgIWdldE1haW5UaHJlYWRBZ2VudFR5cGUoKSAmJiByZXN1bWVkQWdlbnRTZXR0aW5nKSB7XG4gICAgY29uc3QgeyBhZ2VudERlZmluaXRpb246IHJlc3RvcmVkQWdlbnQgfSA9IHJlc3RvcmVBZ2VudEZyb21TZXNzaW9uKFxuICAgICAgcmVzdW1lZEFnZW50U2V0dGluZyxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHsgYWN0aXZlQWdlbnRzOiBhZ2VudHMsIGFsbEFnZW50czogYWdlbnRzIH0sXG4gICAgKVxuICAgIGlmIChyZXN0b3JlZEFnZW50KSB7XG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGFnZW50OiByZXN0b3JlZEFnZW50LmFnZW50VHlwZSB9KSlcbiAgICAgIC8vIEFwcGx5IHRoZSBhZ2VudCdzIHN5c3RlbSBwcm9tcHQgZm9yIG5vbi1idWlsdC1pbiBhZ2VudHMgKG1pcnJvcnMgbWFpbi50c3ggaW5pdGlhbCAtLWFnZW50IHBhdGgpXG4gICAgICBpZiAoIW9wdGlvbnMuc3lzdGVtUHJvbXB0ICYmICFpc0J1aWx0SW5BZ2VudChyZXN0b3JlZEFnZW50KSkge1xuICAgICAgICBjb25zdCBhZ2VudFN5c3RlbVByb21wdCA9IHJlc3RvcmVkQWdlbnQuZ2V0U3lzdGVtUHJvbXB0KClcbiAgICAgICAgaWYgKGFnZW50U3lzdGVtUHJvbXB0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zeXN0ZW1Qcm9tcHQgPSBhZ2VudFN5c3RlbVByb21wdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZS1wZXJzaXN0IGFnZW50IHNldHRpbmcgc28gZnV0dXJlIHJlc3VtZXMgbWFpbnRhaW4gdGhlIGFnZW50XG4gICAgICBzYXZlQWdlbnRTZXR0aW5nKHJlc3RvcmVkQWdlbnQuYWdlbnRUeXBlKVxuICAgIH1cbiAgfVxuXG4gIC8vIGdyYWNlZnVsU2h1dGRvd25TeW5jIHNjaGVkdWxlcyBhbiBhc3luYyBzaHV0ZG93biBhbmQgc2V0cyBwcm9jZXNzLmV4aXRDb2RlLlxuICAvLyBJZiBhIGxvYWRJbml0aWFsTWVzc2FnZXMgZXJyb3IgcGF0aCB0cmlnZ2VyZWQgaXQsIGJhaWwgZWFybHkgdG8gYXZvaWRcbiAgLy8gdW5uZWNlc3Nhcnkgd29yayB3aGlsZSB0aGUgcHJvY2VzcyB3aW5kcyBkb3duLlxuICBpZiAoaW5pdGlhbE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCAmJiBwcm9jZXNzLmV4aXRDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEhhbmRsZSAtLXJld2luZC1maWxlczogcmVzdG9yZSBmaWxlc3lzdGVtIGFuZCBleGl0IGltbWVkaWF0ZWx5XG4gIGlmIChvcHRpb25zLnJld2luZEZpbGVzKSB7XG4gICAgLy8gRmlsZSBoaXN0b3J5IHNuYXBzaG90cyBhcmUgb25seSBjcmVhdGVkIGZvciB1c2VyIG1lc3NhZ2VzLFxuICAgIC8vIHNvIHdlIHJlcXVpcmUgdGhlIHRhcmdldCB0byBiZSBhIHVzZXIgbWVzc2FnZVxuICAgIGNvbnN0IHRhcmdldE1lc3NhZ2UgPSBpbml0aWFsTWVzc2FnZXMuZmluZChcbiAgICAgIG0gPT4gbS51dWlkID09PSBvcHRpb25zLnJld2luZEZpbGVzLFxuICAgIClcblxuICAgIGlmICghdGFyZ2V0TWVzc2FnZSB8fCB0YXJnZXRNZXNzYWdlLnR5cGUgIT09ICd1c2VyJykge1xuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgIGBFcnJvcjogLS1yZXdpbmQtZmlsZXMgcmVxdWlyZXMgYSB1c2VyIG1lc3NhZ2UgVVVJRCwgYnV0ICR7b3B0aW9ucy5yZXdpbmRGaWxlc30gaXMgbm90IGEgdXNlciBtZXNzYWdlIGluIHRoaXMgc2Vzc2lvblxcbmAsXG4gICAgICApXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZVJld2luZEZpbGVzKFxuICAgICAgb3B0aW9ucy5yZXdpbmRGaWxlcyBhcyBVVUlELFxuICAgICAgY3VycmVudEFwcFN0YXRlLFxuICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICBmYWxzZSxcbiAgICApXG4gICAgaWYgKCFyZXN1bHQuY2FuUmV3aW5kKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShgRXJyb3I6ICR7cmVzdWx0LmVycm9yIHx8ICdVbmV4cGVjdGVkIGVycm9yJ31cXG5gKVxuICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFJld2luZCBjb21wbGV0ZSAtIGV4aXQgc3VjY2Vzc2Z1bGx5XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoXG4gICAgICBgRmlsZXMgcmV3b3VuZCB0byBzdGF0ZSBhdCBtZXNzYWdlICR7b3B0aW9ucy5yZXdpbmRGaWxlc31cXG5gLFxuICAgIClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygwKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgbmVlZCBpbnB1dCBwcm9tcHQgLSBza2lwIGlmIHdlJ3JlIHJlc3VtaW5nIHdpdGggYSB2YWxpZCBzZXNzaW9uIElEL0pTT05MIGZpbGUgb3IgdXNpbmcgU0RLIFVSTFxuICBjb25zdCBoYXNWYWxpZFJlc3VtZVNlc3Npb25JZCA9XG4gICAgdHlwZW9mIG9wdGlvbnMucmVzdW1lID09PSAnc3RyaW5nJyAmJlxuICAgIChCb29sZWFuKHZhbGlkYXRlVXVpZChvcHRpb25zLnJlc3VtZSkpIHx8IG9wdGlvbnMucmVzdW1lLmVuZHNXaXRoKCcuanNvbmwnKSlcbiAgY29uc3QgaXNVc2luZ1Nka1VybCA9IEJvb2xlYW4ob3B0aW9ucy5zZGtVcmwpXG5cbiAgaWYgKCFpbnB1dFByb21wdCAmJiAhaGFzVmFsaWRSZXN1bWVTZXNzaW9uSWQgJiYgIWlzVXNpbmdTZGtVcmwpIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgIGBFcnJvcjogSW5wdXQgbXVzdCBiZSBwcm92aWRlZCBlaXRoZXIgdGhyb3VnaCBzdGRpbiBvciBhcyBhIHByb21wdCBhcmd1bWVudCB3aGVuIHVzaW5nIC0tcHJpbnRcXG5gLFxuICAgIClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnc3RyZWFtLWpzb24nICYmICFvcHRpb25zLnZlcmJvc2UpIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICdFcnJvcjogV2hlbiB1c2luZyAtLXByaW50LCAtLW91dHB1dC1mb3JtYXQ9c3RyZWFtLWpzb24gcmVxdWlyZXMgLS12ZXJib3NlXFxuJyxcbiAgICApXG4gICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEZpbHRlciBvdXQgTUNQIHRvb2xzIHRoYXQgYXJlIGluIHRoZSBkZW55IGxpc3RcbiAgY29uc3QgYWxsb3dlZE1jcFRvb2xzID0gZmlsdGVyVG9vbHNCeURlbnlSdWxlcyhcbiAgICBhcHBTdGF0ZS5tY3AudG9vbHMsXG4gICAgYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICApXG4gIGxldCBmaWx0ZXJlZFRvb2xzID0gWy4uLnRvb2xzLCAuLi5hbGxvd2VkTWNwVG9vbHNdXG5cbiAgLy8gV2hlbiB1c2luZyBTREsgVVJMLCBhbHdheXMgdXNlIHN0ZGlvIHBlcm1pc3Npb24gcHJvbXB0aW5nIHRvIGRlbGVnYXRlIHRvIHRoZSBTREtcbiAgY29uc3QgZWZmZWN0aXZlUGVybWlzc2lvblByb21wdFRvb2xOYW1lID0gb3B0aW9ucy5zZGtVcmxcbiAgICA/ICdzdGRpbydcbiAgICA6IG9wdGlvbnMucGVybWlzc2lvblByb21wdFRvb2xOYW1lXG5cbiAgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gYSBwZXJtaXNzaW9uIHByb21wdCBpcyBzaG93blxuICBjb25zdCBvblBlcm1pc3Npb25Qcm9tcHQgPSAoZGV0YWlsczogUmVxdWlyZXNBY3Rpb25EZXRhaWxzKSA9PiB7XG4gICAgaWYgKGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpKSB7XG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGF0dHJpYnV0aW9uOiB7XG4gICAgICAgICAgLi4ucHJldi5hdHRyaWJ1dGlvbixcbiAgICAgICAgICBwZXJtaXNzaW9uUHJvbXB0Q291bnQ6IHByZXYuYXR0cmlidXRpb24ucGVybWlzc2lvblByb21wdENvdW50ICsgMSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH1cbiAgICBub3RpZnlTZXNzaW9uU3RhdGVDaGFuZ2VkKCdyZXF1aXJlc19hY3Rpb24nLCBkZXRhaWxzKVxuICB9XG5cbiAgY29uc3QgY2FuVXNlVG9vbCA9IGdldENhblVzZVRvb2xGbihcbiAgICBlZmZlY3RpdmVQZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUsXG4gICAgc3RydWN0dXJlZElPLFxuICAgICgpID0+IGdldEFwcFN0YXRlKCkubWNwLnRvb2xzLFxuICAgIG9uUGVybWlzc2lvblByb21wdCxcbiAgKVxuICBpZiAob3B0aW9ucy5wZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHBlcm1pc3Npb24gcHJvbXB0IHRvb2wgZnJvbSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdG9vbHMuXG4gICAgZmlsdGVyZWRUb29scyA9IGZpbHRlcmVkVG9vbHMuZmlsdGVyKFxuICAgICAgdG9vbCA9PiAhdG9vbE1hdGNoZXNOYW1lKHRvb2wsIG9wdGlvbnMucGVybWlzc2lvblByb21wdFRvb2xOYW1lISksXG4gICAgKVxuICB9XG5cbiAgLy8gSW5zdGFsbCBlcnJvcnMgaGFuZGxlcnMgdG8gZ3JhY2VmdWxseSBoYW5kbGUgYnJva2VuIHBpcGVzIChlLmcuLCB3aGVuIHBhcmVudCBwcm9jZXNzIGRpZXMpXG4gIHJlZ2lzdGVyUHJvY2Vzc091dHB1dEVycm9ySGFuZGxlcnMoKVxuXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdhZnRlcl9sb2FkSW5pdGlhbE1lc3NhZ2VzJylcblxuICAvLyBFbnN1cmUgbW9kZWwgc3RyaW5ncyBhcmUgaW5pdGlhbGl6ZWQgYmVmb3JlIGdlbmVyYXRpbmcgbW9kZWwgb3B0aW9ucy5cbiAgLy8gRm9yIEJlZHJvY2sgdXNlcnMsIHRoaXMgd2FpdHMgZm9yIHRoZSBwcm9maWxlIGZldGNoIHRvIGdldCBjb3JyZWN0IHJlZ2lvbiBzdHJpbmdzLlxuICBsb2dGb3JEZWJ1Z2dpbmcoJ1tIRUFETEVTU10gRW5zdXJpbmcgbW9kZWwgc3RyaW5ncyBhcmUgaW5pdGlhbGl6ZWQuLi4nKVxuICBhd2FpdCBlbnN1cmVNb2RlbFN0cmluZ3NJbml0aWFsaXplZCgpXG4gIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBNb2RlbCBzdHJpbmdzIHJlYWR5JylcbiAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX21vZGVsU3RyaW5ncycpXG5cbiAgLy8gVURTIGluYm94IHN0b3JlIHJlZ2lzdHJhdGlvbiBpcyBkZWZlcnJlZCB1bnRpbCBhZnRlciBgcnVuYCBpcyBkZWZpbmVkXG4gIC8vIHNvIHdlIGNhbiBwYXNzIGBydW5gIGFzIHRoZSBvbkVucXVldWUgY2FsbGJhY2sgKHNlZSBiZWxvdykuXG5cbiAgLy8gT25seSBganNvbmAgKyBgdmVyYm9zZWAgbmVlZHMgdGhlIGZ1bGwgYXJyYXkgKGpzb25TdHJpbmdpZnkobWVzc2FnZXMpIGJlbG93KS5cbiAgLy8gRm9yIHN0cmVhbS1qc29uIChTREsvQ0NSKSBhbmQgZGVmYXVsdCB0ZXh0IG91dHB1dCwgb25seSB0aGUgbGFzdCBtZXNzYWdlIGlzXG4gIC8vIHJlYWQgZm9yIHRoZSBleGl0IGNvZGUgLyBmaW5hbCByZXN1bHQuIEF2b2lkIGFjY3VtdWxhdGluZyBldmVyeSBtZXNzYWdlIGluXG4gIC8vIG1lbW9yeSBmb3IgdGhlIGVudGlyZSBzZXNzaW9uLlxuICBjb25zdCBuZWVkc0Z1bGxBcnJheSA9IG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnanNvbicgJiYgb3B0aW9ucy52ZXJib3NlXG4gIGNvbnN0IG1lc3NhZ2VzOiBTREtNZXNzYWdlW10gPSBbXVxuICBsZXQgbGFzdE1lc3NhZ2U6IFNES01lc3NhZ2UgfCB1bmRlZmluZWRcbiAgLy8gU3RyZWFtbGluZWQgbW9kZSB0cmFuc2Zvcm1zIG1lc3NhZ2VzIHdoZW4gQ0xBVURFX0NPREVfU1RSRUFNTElORURfT1VUUFVUPXRydWUgYW5kIHVzaW5nIHN0cmVhbS1qc29uXG4gIC8vIEJ1aWxkIGZsYWcgZ2F0ZXMgdGhpcyBvdXQgb2YgZXh0ZXJuYWwgYnVpbGRzOyBlbnYgdmFyIGlzIHRoZSBydW50aW1lIG9wdC1pbiBmb3IgYW50IGJ1aWxkc1xuICBjb25zdCB0cmFuc2Zvcm1Ub1N0cmVhbWxpbmVkID1cbiAgICBmZWF0dXJlKCdTVFJFQU1MSU5FRF9PVVRQVVQnKSAmJlxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1NUUkVBTUxJTkVEX09VVFBVVCkgJiZcbiAgICBvcHRpb25zLm91dHB1dEZvcm1hdCA9PT0gJ3N0cmVhbS1qc29uJ1xuICAgICAgPyBjcmVhdGVTdHJlYW1saW5lZFRyYW5zZm9ybWVyKClcbiAgICAgIDogbnVsbFxuXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdiZWZvcmVfcnVuSGVhZGxlc3NTdHJlYW1pbmcnKVxuICBsb2dGb3JEZWJ1Z2dpbmcoJ1tIRUFETEVTU10gU3RhcnRpbmcgcnVuSGVhZGxlc3NTdHJlYW1pbmcgbG9vcC4uLicpXG4gIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBydW5IZWFkbGVzc1N0cmVhbWluZyhcbiAgICBzdHJ1Y3R1cmVkSU8sXG4gICAgYXBwU3RhdGUubWNwLmNsaWVudHMsXG4gICAgWy4uLmNvbW1hbmRzLCAuLi5hcHBTdGF0ZS5tY3AuY29tbWFuZHNdLFxuICAgIGZpbHRlcmVkVG9vbHMsXG4gICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgIGNhblVzZVRvb2wsXG4gICAgc2RrTWNwQ29uZmlncyxcbiAgICBnZXRBcHBTdGF0ZSxcbiAgICBzZXRBcHBTdGF0ZSxcbiAgICBhZ2VudHMsXG4gICAgb3B0aW9ucyxcbiAgICB0dXJuSW50ZXJydXB0aW9uU3RhdGUsXG4gICkpIHtcbiAgICBpZiAodHJhbnNmb3JtVG9TdHJlYW1saW5lZCkge1xuICAgICAgLy8gU3RyZWFtbGluZWQgbW9kZTogdHJhbnNmb3JtIG1lc3NhZ2VzIGFuZCBzdHJlYW0gaW1tZWRpYXRlbHlcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtVG9TdHJlYW1saW5lZChtZXNzYWdlKVxuICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgIGF3YWl0IHN0cnVjdHVyZWRJTy53cml0ZSh0cmFuc2Zvcm1lZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnc3RyZWFtLWpzb24nICYmIG9wdGlvbnMudmVyYm9zZSkge1xuICAgICAgYXdhaXQgc3RydWN0dXJlZElPLndyaXRlKG1lc3NhZ2UpXG4gICAgfVxuICAgIC8vIFNob3VsZCBub3QgYmUgZ2V0dGluZyBjb250cm9sIG1lc3NhZ2VzIG9yIHN0cmVhbSBldmVudHMgaW4gbm9uLXN0cmVhbSBtb2RlLlxuICAgIC8vIEFsc28gZmlsdGVyIG91dCBzdHJlYW1saW5lZCB0eXBlcyBzaW5jZSB0aGV5J3JlIG9ubHkgcHJvZHVjZWQgYnkgdGhlIHRyYW5zZm9ybWVyLlxuICAgIC8vIFNESy1vbmx5IHN5c3RlbSBldmVudHMgYXJlIGV4Y2x1ZGVkIHNvIGxhc3RNZXNzYWdlIHN0YXlzIGF0IHRoZSByZXN1bHRcbiAgICAvLyAoc2Vzc2lvbl9zdGF0ZV9jaGFuZ2VkKGlkbGUpIGFuZCBhbnkgbGF0ZSB0YXNrX25vdGlmaWNhdGlvbiBkcmFpbiBhZnRlclxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZmluYWxseSBibG9jaykuXG4gICAgaWYgKFxuICAgICAgbWVzc2FnZS50eXBlICE9PSAnY29udHJvbF9yZXNwb25zZScgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2NvbnRyb2xfcmVxdWVzdCcgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnICYmXG4gICAgICAhKFxuICAgICAgICBtZXNzYWdlLnR5cGUgPT09ICdzeXN0ZW0nICYmXG4gICAgICAgIChtZXNzYWdlLnN1YnR5cGUgPT09ICdzZXNzaW9uX3N0YXRlX2NoYW5nZWQnIHx8XG4gICAgICAgICAgbWVzc2FnZS5zdWJ0eXBlID09PSAndGFza19ub3RpZmljYXRpb24nIHx8XG4gICAgICAgICAgbWVzc2FnZS5zdWJ0eXBlID09PSAndGFza19zdGFydGVkJyB8fFxuICAgICAgICAgIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ3Rhc2tfcHJvZ3Jlc3MnIHx8XG4gICAgICAgICAgbWVzc2FnZS5zdWJ0eXBlID09PSAncG9zdF90dXJuX3N1bW1hcnknKVxuICAgICAgKSAmJlxuICAgICAgbWVzc2FnZS50eXBlICE9PSAnc3RyZWFtX2V2ZW50JyAmJlxuICAgICAgbWVzc2FnZS50eXBlICE9PSAna2VlcF9hbGl2ZScgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ3N0cmVhbWxpbmVkX3RleHQnICYmXG4gICAgICBtZXNzYWdlLnR5cGUgIT09ICdzdHJlYW1saW5lZF90b29sX3VzZV9zdW1tYXJ5JyAmJlxuICAgICAgbWVzc2FnZS50eXBlICE9PSAncHJvbXB0X3N1Z2dlc3Rpb24nXG4gICAgKSB7XG4gICAgICBpZiAobmVlZHNGdWxsQXJyYXkpIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgfVxuICAgICAgbGFzdE1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChvcHRpb25zLm91dHB1dEZvcm1hdCkge1xuICAgIGNhc2UgJ2pzb24nOlxuICAgICAgaWYgKCFsYXN0TWVzc2FnZSB8fCBsYXN0TWVzc2FnZS50eXBlICE9PSAncmVzdWx0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1lc3NhZ2VzIHJldHVybmVkJylcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChqc29uU3RyaW5naWZ5KG1lc3NhZ2VzKSArICdcXG4nKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgd3JpdGVUb1N0ZG91dChqc29uU3RyaW5naWZ5KGxhc3RNZXNzYWdlKSArICdcXG4nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzdHJlYW0tanNvbic6XG4gICAgICAvLyBhbHJlYWR5IGxvZ2dlZCBhYm92ZVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCFsYXN0TWVzc2FnZSB8fCBsYXN0TWVzc2FnZS50eXBlICE9PSAncmVzdWx0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1lc3NhZ2VzIHJldHVybmVkJylcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAobGFzdE1lc3NhZ2Uuc3VidHlwZSkge1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICB3cml0ZVRvU3Rkb3V0KFxuICAgICAgICAgICAgbGFzdE1lc3NhZ2UucmVzdWx0LmVuZHNXaXRoKCdcXG4nKVxuICAgICAgICAgICAgICA/IGxhc3RNZXNzYWdlLnJlc3VsdFxuICAgICAgICAgICAgICA6IGxhc3RNZXNzYWdlLnJlc3VsdCArICdcXG4nLFxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdlcnJvcl9kdXJpbmdfZXhlY3V0aW9uJzpcbiAgICAgICAgICB3cml0ZVRvU3Rkb3V0KGBFeGVjdXRpb24gZXJyb3JgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Vycm9yX21heF90dXJucyc6XG4gICAgICAgICAgd3JpdGVUb1N0ZG91dChgRXJyb3I6IFJlYWNoZWQgbWF4IHR1cm5zICgke29wdGlvbnMubWF4VHVybnN9KWApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZXJyb3JfbWF4X2J1ZGdldF91c2QnOlxuICAgICAgICAgIHdyaXRlVG9TdGRvdXQoYEVycm9yOiBFeGNlZWRlZCBVU0QgYnVkZ2V0ICgke29wdGlvbnMubWF4QnVkZ2V0VXNkfSlgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Vycm9yX21heF9zdHJ1Y3R1cmVkX291dHB1dF9yZXRyaWVzJzpcbiAgICAgICAgICB3cml0ZVRvU3Rkb3V0KFxuICAgICAgICAgICAgYEVycm9yOiBGYWlsZWQgdG8gcHJvdmlkZSB2YWxpZCBzdHJ1Y3R1cmVkIG91dHB1dCBhZnRlciBtYXhpbXVtIHJldHJpZXNgLFxuICAgICAgICAgIClcbiAgICAgIH1cbiAgfVxuXG4gIC8vIExvZyBoZWFkbGVzcyBsYXRlbmN5IG1ldHJpY3MgZm9yIHRoZSBmaW5hbCB0dXJuXG4gIGxvZ0hlYWRsZXNzUHJvZmlsZXJUdXJuKClcblxuICAvLyBEcmFpbiBhbnkgaW4tZmxpZ2h0IG1lbW9yeSBleHRyYWN0aW9uIGJlZm9yZSBzaHV0ZG93bi4gVGhlIHJlc3BvbnNlIGlzXG4gIC8vIGFscmVhZHkgZmx1c2hlZCBhYm92ZSwgc28gdGhpcyBhZGRzIG5vIHVzZXItdmlzaWJsZSBsYXRlbmN5IFx1MjAxNCBpdCBqdXN0XG4gIC8vIGRlbGF5cyBwcm9jZXNzIGV4aXQgc28gZ3JhY2VmdWxTaHV0ZG93blN5bmMncyA1cyBmYWlsc2FmZSBkb2Vzbid0IGtpbGxcbiAgLy8gdGhlIGZvcmtlZCBhZ2VudCBtaWQtZmxpZ2h0LiBHYXRlZCBieSBpc0V4dHJhY3RNb2RlQWN0aXZlIHNvIHRoZVxuICAvLyB0ZW5ndV9zbGF0ZV90aGltYmxlIGZsYWcgY29udHJvbHMgbm9uLWludGVyYWN0aXZlIGV4dHJhY3Rpb24gZW5kLXRvLWVuZC5cbiAgaWYgKGZlYXR1cmUoJ0VYVFJBQ1RfTUVNT1JJRVMnKSAmJiBpc0V4dHJhY3RNb2RlQWN0aXZlKCkpIHtcbiAgICBhd2FpdCBleHRyYWN0TWVtb3JpZXNNb2R1bGUhLmRyYWluUGVuZGluZ0V4dHJhY3Rpb24oKVxuICB9XG5cbiAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoXG4gICAgbGFzdE1lc3NhZ2U/LnR5cGUgPT09ICdyZXN1bHQnICYmIGxhc3RNZXNzYWdlPy5pc19lcnJvciA/IDEgOiAwLFxuICApXG59XG5cbmZ1bmN0aW9uIHJ1bkhlYWRsZXNzU3RyZWFtaW5nKFxuICBzdHJ1Y3R1cmVkSU86IFN0cnVjdHVyZWRJTyxcbiAgbWNwQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdLFxuICBjb21tYW5kczogQ29tbWFuZFtdLFxuICB0b29sczogVG9vbHMsXG4gIGluaXRpYWxNZXNzYWdlczogTWVzc2FnZVtdLFxuICBjYW5Vc2VUb29sOiBDYW5Vc2VUb29sRm4sXG4gIHNka01jcENvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIE1jcFNka1NlcnZlckNvbmZpZz4sXG4gIGdldEFwcFN0YXRlOiAoKSA9PiBBcHBTdGF0ZSxcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuICBhZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdLFxuICBvcHRpb25zOiB7XG4gICAgdmVyYm9zZTogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIGpzb25TY2hlbWE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkXG4gICAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhbGxvd2VkVG9vbHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG4gICAgdGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnIHwgdW5kZWZpbmVkXG4gICAgbWF4VHVybnM6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgIG1heEJ1ZGdldFVzZDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgdGFza0J1ZGdldDogeyB0b3RhbDogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBzeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGFwcGVuZFN5c3RlbVByb21wdDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgdXNlclNwZWNpZmllZE1vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBmYWxsYmFja01vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgaW5jbHVkZVBhcnRpYWxNZXNzYWdlcz86IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBlbmFibGVBdXRoU3RhdHVzPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIGFnZW50Pzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgc2V0U0RLU3RhdHVzPzogKHN0YXR1czogU0RLU3RhdHVzKSA9PiB2b2lkXG4gICAgcHJvbXB0U3VnZ2VzdGlvbnM/OiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgd29ya2xvYWQ/OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgfSxcbiAgdHVybkludGVycnVwdGlvblN0YXRlPzogVHVybkludGVycnVwdGlvblN0YXRlLFxuKTogQXN5bmNJdGVyYWJsZTxTdGRvdXRNZXNzYWdlPiB7XG4gIGxldCBydW5uaW5nID0gZmFsc2VcbiAgbGV0IHJ1blBoYXNlOlxuICAgIHwgJ2RyYWluaW5nX2NvbW1hbmRzJ1xuICAgIHwgJ3dhaXRpbmdfZm9yX2FnZW50cydcbiAgICB8ICdmaW5hbGx5X2ZsdXNoJ1xuICAgIHwgJ2ZpbmFsbHlfcG9zdF9mbHVzaCdcbiAgICB8IHVuZGVmaW5lZFxuICBsZXQgaW5wdXRDbG9zZWQgPSBmYWxzZVxuICBsZXQgc2h1dGRvd25Qcm9tcHRJbmplY3RlZCA9IGZhbHNlXG4gIGxldCBoZWxkQmFja1Jlc3VsdDogU3Rkb3V0TWVzc2FnZSB8IG51bGwgPSBudWxsXG4gIGxldCBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlciB8IHVuZGVmaW5lZFxuICAvLyBTYW1lIHF1ZXVlIHNlbmRSZXF1ZXN0KCkgZW5xdWV1ZXMgdG8gXHUyMDE0IG9uZSBGSUZPIGZvciBldmVyeXRoaW5nLlxuICBjb25zdCBvdXRwdXQgPSBzdHJ1Y3R1cmVkSU8ub3V0Ym91bmRcblxuICAvLyBDdHJsK0MgaW4gLXAgbW9kZTogYWJvcnQgdGhlIGluLWZsaWdodCBxdWVyeSwgdGhlbiBzaHV0IGRvd24gZ3JhY2VmdWxseS5cbiAgLy8gZ3JhY2VmdWxTaHV0ZG93biBwZXJzaXN0cyBzZXNzaW9uIHN0YXRlIGFuZCBmbHVzaGVzIGFuYWx5dGljcywgd2l0aCBhXG4gIC8vIGZhaWxzYWZlIHRpbWVyIHRoYXQgZm9yY2UtZXhpdHMgaWYgY2xlYW51cCBoYW5ncy5cbiAgY29uc3Qgc2lnaW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NodXRkb3duX3NpZ25hbCcsIHsgc2lnbmFsOiAnU0lHSU5UJyB9KVxuICAgIGlmIChhYm9ydENvbnRyb2xsZXIgJiYgIWFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICB9XG4gICAgdm9pZCBncmFjZWZ1bFNodXRkb3duKDApXG4gIH1cbiAgcHJvY2Vzcy5vbignU0lHSU5UJywgc2lnaW50SGFuZGxlcilcblxuICAvLyBEdW1wIHJ1bigpJ3Mgc3RhdGUgYXQgU0lHVEVSTSBzbyBhIHN0dWNrIHNlc3Npb24ncyBoZWFsdGhzd2VlcCBjYW4gbmFtZVxuICAvLyB0aGUgZG8vd2hpbGUod2FpdGluZ0ZvckFnZW50cykgcG9sbCB3aXRob3V0IHJlYWRpbmcgdGhlIHRyYW5zY3JpcHQuXG4gIHJlZ2lzdGVyQ2xlYW51cChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmc6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgIGZvciAoY29uc3QgdCBvZiBnZXRSdW5uaW5nVGFza3MoZ2V0QXBwU3RhdGUoKSkpIHtcbiAgICAgIGlmIChpc0JhY2tncm91bmRUYXNrKHQpKSBiZ1t0LnR5cGVdID0gKGJnW3QudHlwZV0gPz8gMCkgKyAxXG4gICAgfVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAncnVuX3N0YXRlX2F0X3NodXRkb3duJywge1xuICAgICAgcnVuX2FjdGl2ZTogcnVubmluZyxcbiAgICAgIHJ1bl9waGFzZTogcnVuUGhhc2UsXG4gICAgICB3b3JrZXJfc3RhdHVzOiBnZXRTZXNzaW9uU3RhdGUoKSxcbiAgICAgIGludGVybmFsX2V2ZW50c19wZW5kaW5nOiBzdHJ1Y3R1cmVkSU8uaW50ZXJuYWxFdmVudHNQZW5kaW5nLFxuICAgICAgYmdfdGFza3M6IGJnLFxuICAgIH0pXG4gIH0pXG5cbiAgLy8gV2lyZSB0aGUgY2VudHJhbCBvbkNoYW5nZUFwcFN0YXRlIG1vZGUtZGlmZiBob29rIHRvIHRoZSBTREsgb3V0cHV0IHN0cmVhbS5cbiAgLy8gVGhpcyBmaXJlcyB3aGVuZXZlciBBTlkgY29kZSBwYXRoIG11dGF0ZXMgdG9vbFBlcm1pc3Npb25Db250ZXh0Lm1vZGUgXHUyMDE0XG4gIC8vIFNoaWZ0K1RhYiwgRXhpdFBsYW5Nb2RlIGRpYWxvZywgL3BsYW4gc2xhc2ggY29tbWFuZCwgcmV3aW5kLCBicmlkZ2VcbiAgLy8gc2V0X3Blcm1pc3Npb25fbW9kZSwgdGhlIHF1ZXJ5IGxvb3AsIHN0b3BfdGFzayBcdTIwMTQgcmF0aGVyIHRoYW4gdGhlIHR3b1xuICAvLyBwYXRocyB0aGF0IHByZXZpb3VzbHkgd2VudCB0aHJvdWdoIGEgYmVzcG9rZSB3cmFwcGVyLlxuICAvLyBUaGUgd3JhcHBlcidzIGJvZHkgd2FzIGZ1bGx5IHJlZHVuZGFudCAoaXQgZW5xdWV1ZWQgaGVyZSBBTkQgY2FsbGVkXG4gIC8vIG5vdGlmeVNlc3Npb25NZXRhZGF0YUNoYW5nZWQsIGJvdGggb2Ygd2hpY2ggb25DaGFuZ2VBcHBTdGF0ZSBub3cgY292ZXJzKTtcbiAgLy8ga2VlcGluZyBpdCB3b3VsZCBkb3VibGUtZW1pdCBzdGF0dXMgbWVzc2FnZXMuXG4gIHNldFBlcm1pc3Npb25Nb2RlQ2hhbmdlZExpc3RlbmVyKG5ld01vZGUgPT4ge1xuICAgIC8vIE9ubHkgZW1pdCBmb3IgU0RLLWV4cG9zZWQgbW9kZXMuXG4gICAgaWYgKFxuICAgICAgbmV3TW9kZSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICBuZXdNb2RlID09PSAnYWNjZXB0RWRpdHMnIHx8XG4gICAgICBuZXdNb2RlID09PSAnYnlwYXNzUGVybWlzc2lvbnMnIHx8XG4gICAgICBuZXdNb2RlID09PSAncGxhbicgfHxcbiAgICAgIG5ld01vZGUgPT09IChmZWF0dXJlKCdUUkFOU0NSSVBUX0NMQVNTSUZJRVInKSAmJiAnYXV0bycpIHx8XG4gICAgICBuZXdNb2RlID09PSAnZG9udEFzaydcbiAgICApIHtcbiAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgIHN1YnR5cGU6ICdzdGF0dXMnLFxuICAgICAgICBzdGF0dXM6IG51bGwsXG4gICAgICAgIHBlcm1pc3Npb25Nb2RlOiBuZXdNb2RlIGFzIFBlcm1pc3Npb25Nb2RlLFxuICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgLy8gUHJvbXB0IHN1Z2dlc3Rpb24gdHJhY2tpbmcgKHB1c2ggbW9kZWwpXG4gIGNvbnN0IHN1Z2dlc3Rpb25TdGF0ZToge1xuICAgIGFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyIHwgbnVsbFxuICAgIGluZmxpZ2h0UHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGxcbiAgICBsYXN0RW1pdHRlZDoge1xuICAgICAgdGV4dDogc3RyaW5nXG4gICAgICBlbWl0dGVkQXQ6IG51bWJlclxuICAgICAgcHJvbXB0SWQ6IFByb21wdFZhcmlhbnRcbiAgICAgIGdlbmVyYXRpb25SZXF1ZXN0SWQ6IHN0cmluZyB8IG51bGxcbiAgICB9IHwgbnVsbFxuICAgIHBlbmRpbmdTdWdnZXN0aW9uOiB7XG4gICAgICB0eXBlOiAncHJvbXB0X3N1Z2dlc3Rpb24nXG4gICAgICBzdWdnZXN0aW9uOiBzdHJpbmdcbiAgICAgIHV1aWQ6IFVVSURcbiAgICAgIHNlc3Npb25faWQ6IHN0cmluZ1xuICAgIH0gfCBudWxsXG4gICAgcGVuZGluZ0xhc3RFbWl0dGVkRW50cnk6IHtcbiAgICAgIHRleHQ6IHN0cmluZ1xuICAgICAgcHJvbXB0SWQ6IFByb21wdFZhcmlhbnRcbiAgICAgIGdlbmVyYXRpb25SZXF1ZXN0SWQ6IHN0cmluZyB8IG51bGxcbiAgICB9IHwgbnVsbFxuICB9ID0ge1xuICAgIGFib3J0Q29udHJvbGxlcjogbnVsbCxcbiAgICBpbmZsaWdodFByb21pc2U6IG51bGwsXG4gICAgbGFzdEVtaXR0ZWQ6IG51bGwsXG4gICAgcGVuZGluZ1N1Z2dlc3Rpb246IG51bGwsXG4gICAgcGVuZGluZ0xhc3RFbWl0dGVkRW50cnk6IG51bGwsXG4gIH1cblxuICAvLyBTZXQgdXAgQVdTIGF1dGggc3RhdHVzIGxpc3RlbmVyIGlmIGVuYWJsZWRcbiAgbGV0IHVuc3Vic2NyaWJlQXV0aFN0YXR1czogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkXG4gIGlmIChvcHRpb25zLmVuYWJsZUF1dGhTdGF0dXMpIHtcbiAgICBjb25zdCBhdXRoU3RhdHVzTWFuYWdlciA9IEF3c0F1dGhTdGF0dXNNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICB1bnN1YnNjcmliZUF1dGhTdGF0dXMgPSBhdXRoU3RhdHVzTWFuYWdlci5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgdHlwZTogJ2F1dGhfc3RhdHVzJyxcbiAgICAgICAgaXNBdXRoZW50aWNhdGluZzogc3RhdHVzLmlzQXV0aGVudGljYXRpbmcsXG4gICAgICAgIG91dHB1dDogc3RhdHVzLm91dHB1dCxcbiAgICAgICAgZXJyb3I6IHN0YXR1cy5lcnJvcixcbiAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNldCB1cCByYXRlIGxpbWl0IHN0YXR1cyBsaXN0ZW5lciB0byBlbWl0IFNES1JhdGVMaW1pdEV2ZW50IGZvciBhbGwgc3RhdHVzIGNoYW5nZXMuXG4gIC8vIEVtaXR0aW5nIGZvciBhbGwgc3RhdHVzZXMgKGluY2x1ZGluZyAnYWxsb3dlZCcpIGVuc3VyZXMgY29uc3VtZXJzIGNhbiBjbGVhciB3YXJuaW5nc1xuICAvLyB3aGVuIHJhdGUgbGltaXRzIHJlc2V0LiBUaGUgdXBzdHJlYW0gZW1pdFN0YXR1c0NoYW5nZSBhbHJlYWR5IGRlZHVwbGljYXRlcyB2aWEgaXNFcXVhbC5cbiAgY29uc3QgcmF0ZUxpbWl0TGlzdGVuZXIgPSAobGltaXRzOiBDbGF1ZGVBSUxpbWl0cykgPT4ge1xuICAgIGNvbnN0IHJhdGVMaW1pdEluZm8gPSB0b1NES1JhdGVMaW1pdEluZm8obGltaXRzKVxuICAgIGlmIChyYXRlTGltaXRJbmZvKSB7XG4gICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgIHR5cGU6ICdyYXRlX2xpbWl0X2V2ZW50JyxcbiAgICAgICAgcmF0ZV9saW1pdF9pbmZvOiByYXRlTGltaXRJbmZvLFxuICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgc3RhdHVzTGlzdGVuZXJzLmFkZChyYXRlTGltaXRMaXN0ZW5lcilcblxuICAvLyBNZXNzYWdlcyBmb3IgaW50ZXJuYWwgdHJhY2tpbmcsIGRpcmVjdGx5IG11dGF0ZWQgYnkgYXNrKCkuIFRoZXNlIG1lc3NhZ2VzXG4gIC8vIGluY2x1ZGUgQXNzaXN0YW50LCBVc2VyLCBBdHRhY2htZW50LCBhbmQgUHJvZ3Jlc3MgbWVzc2FnZXMuXG4gIC8vIFRPRE86IENsZWFuIHVwIHRoaXMgY29kZSB0byBhdm9pZCBwYXNzaW5nIGFyb3VuZCBhIG11dGFibGUgYXJyYXkuXG4gIGNvbnN0IG11dGFibGVNZXNzYWdlczogTWVzc2FnZVtdID0gaW5pdGlhbE1lc3NhZ2VzXG5cbiAgLy8gU2VlZCB0aGUgcmVhZEZpbGVTdGF0ZSBjYWNoZSBmcm9tIHRoZSB0cmFuc2NyaXB0IChjb250ZW50IHRoZSBtb2RlbCBzYXcsXG4gIC8vIHdpdGggbWVzc2FnZSB0aW1lc3RhbXBzKSBzbyBnZXRDaGFuZ2VkRmlsZXMgY2FuIGRldGVjdCBleHRlcm5hbCBlZGl0cy5cbiAgLy8gVGhpcyBjYWNoZSBpbnN0YW5jZSBtdXN0IHBlcnNpc3QgYWNyb3NzIGFzaygpIGNhbGxzLCBzaW5jZSB0aGUgZWRpdCB0b29sXG4gIC8vIHJlbGllcyBvbiB0aGlzIGFzIGEgZ2xvYmFsIHN0YXRlLlxuICBsZXQgcmVhZEZpbGVTdGF0ZSA9IGV4dHJhY3RSZWFkRmlsZXNGcm9tTWVzc2FnZXMoXG4gICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgIGN3ZCgpLFxuICAgIFJFQURfRklMRV9TVEFURV9DQUNIRV9TSVpFLFxuICApXG5cbiAgLy8gQ2xpZW50LXN1cHBsaWVkIHJlYWRGaWxlU3RhdGUgc2VlZHMgKHZpYSBzZWVkX3JlYWRfc3RhdGUgY29udHJvbCByZXF1ZXN0KS5cbiAgLy8gVGhlIHN0ZGluIElJRkUgcnVucyBjb25jdXJyZW50bHkgd2l0aCBhc2soKSBcdTIwMTQgYSBzZWVkIGFycml2aW5nIG1pZC10dXJuXG4gIC8vIHdvdWxkIGJlIGxvc3QgdG8gYXNrKCkncyBjbG9uZS10aGVuLXJlcGxhY2UgKFF1ZXJ5RW5naW5lLnRzIGZpbmFsbHkgYmxvY2spXG4gIC8vIGlmIHdyaXR0ZW4gZGlyZWN0bHkgaW50byByZWFkRmlsZVN0YXRlLiBJbnN0ZWFkLCBzZWVkcyBsYW5kIGhlcmUsIG1lcmdlXG4gIC8vIGludG8gZ2V0UmVhZEZpbGVDYWNoZSdzIHZpZXcgKHJlYWRGaWxlU3RhdGUtd2lucy10aWVzOiBzZWVkcyBmaWxsIGdhcHMpLFxuICAvLyBhbmQgYXJlIHJlLWFwcGxpZWQgdGhlbiBDTEVBUkVEIGluIHNldFJlYWRGaWxlQ2FjaGUuIE9uZS1zaG90OiBlYWNoIHNlZWRcbiAgLy8gc3Vydml2ZXMgZXhhY3RseSBvbmUgY2xvbmUtcmVwbGFjZSBjeWNsZSwgdGhlbiBiZWNvbWVzIGEgcmVndWxhclxuICAvLyByZWFkRmlsZVN0YXRlIGVudHJ5IHN1YmplY3QgdG8gY29tcGFjdCdzIGNsZWFyIGxpa2UgZXZlcnl0aGluZyBlbHNlLlxuICBjb25zdCBwZW5kaW5nU2VlZHMgPSBjcmVhdGVGaWxlU3RhdGVDYWNoZVdpdGhTaXplTGltaXQoXG4gICAgUkVBRF9GSUxFX1NUQVRFX0NBQ0hFX1NJWkUsXG4gIClcblxuICAvLyBBdXRvLXJlc3VtZSBpbnRlcnJ1cHRlZCB0dXJucyBvbiByZXN0YXJ0IHNvIENDIGNvbnRpbnVlcyBmcm9tIHdoZXJlIGl0XG4gIC8vIGxlZnQgb2ZmIHdpdGhvdXQgcmVxdWlyaW5nIHRoZSBTREsgdG8gcmUtc2VuZCB0aGUgcHJvbXB0LlxuICBjb25zdCByZXN1bWVJbnRlcnJ1cHRlZFR1cm5FbnYgPVxuICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFU1VNRV9JTlRFUlJVUFRFRF9UVVJOXG4gIGlmIChcbiAgICB0dXJuSW50ZXJydXB0aW9uU3RhdGUgJiZcbiAgICB0dXJuSW50ZXJydXB0aW9uU3RhdGUua2luZCAhPT0gJ25vbmUnICYmXG4gICAgcmVzdW1lSW50ZXJydXB0ZWRUdXJuRW52XG4gICkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbcHJpbnQudHNdIEF1dG8tcmVzdW1pbmcgaW50ZXJydXB0ZWQgdHVybiAoa2luZDogJHt0dXJuSW50ZXJydXB0aW9uU3RhdGUua2luZH0pYCxcbiAgICApXG5cbiAgICAvLyBSZW1vdmUgdGhlIGludGVycnVwdGVkIG1lc3NhZ2UgYW5kIGl0cyBzZW50aW5lbCwgdGhlbiByZS1lbnF1ZXVlIHNvXG4gICAgLy8gdGhlIG1vZGVsIHNlZXMgaXQgZXhhY3RseSBvbmNlLiBGb3IgbWlkLXR1cm4gaW50ZXJydXB0aW9ucywgdGhlXG4gICAgLy8gZGVzZXJpYWxpemF0aW9uIGxheWVyIHRyYW5zZm9ybXMgdGhlbSBpbnRvIGludGVycnVwdGVkX3Byb21wdCBieVxuICAgIC8vIGFwcGVuZGluZyBhIHN5bnRoZXRpYyBcIkNvbnRpbnVlIGZyb20gd2hlcmUgeW91IGxlZnQgb2ZmLlwiIG1lc3NhZ2UuXG4gICAgcmVtb3ZlSW50ZXJydXB0ZWRNZXNzYWdlKG11dGFibGVNZXNzYWdlcywgdHVybkludGVycnVwdGlvblN0YXRlLm1lc3NhZ2UpXG4gICAgZW5xdWV1ZSh7XG4gICAgICBtb2RlOiAncHJvbXB0JyxcbiAgICAgIHZhbHVlOiB0dXJuSW50ZXJydXB0aW9uU3RhdGUubWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQsXG4gICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG1vZGVsT3B0aW9ucyA9IGdldE1vZGVsT3B0aW9ucygpXG4gIGNvbnN0IG1vZGVsSW5mb3MgPSBtb2RlbE9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgY29uc3QgbW9kZWxJZCA9IG9wdGlvbi52YWx1ZSA9PT0gbnVsbCA/ICdkZWZhdWx0JyA6IG9wdGlvbi52YWx1ZVxuICAgIGNvbnN0IHJlc29sdmVkTW9kZWwgPVxuICAgICAgbW9kZWxJZCA9PT0gJ2RlZmF1bHQnXG4gICAgICAgID8gZ2V0RGVmYXVsdE1haW5Mb29wTW9kZWwoKVxuICAgICAgICA6IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsKG1vZGVsSWQpXG4gICAgY29uc3QgaGFzRWZmb3J0ID0gbW9kZWxTdXBwb3J0c0VmZm9ydChyZXNvbHZlZE1vZGVsKVxuICAgIGNvbnN0IGhhc0FkYXB0aXZlVGhpbmtpbmcgPSBtb2RlbFN1cHBvcnRzQWRhcHRpdmVUaGlua2luZyhyZXNvbHZlZE1vZGVsKVxuICAgIGNvbnN0IGhhc0Zhc3RNb2RlID0gaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwob3B0aW9uLnZhbHVlKVxuICAgIGNvbnN0IGhhc0F1dG9Nb2RlID0gbW9kZWxTdXBwb3J0c0F1dG9Nb2RlKHJlc29sdmVkTW9kZWwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBtb2RlbElkLFxuICAgICAgZGlzcGxheU5hbWU6IG9wdGlvbi5sYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAuLi4oaGFzRWZmb3J0ICYmIHtcbiAgICAgICAgc3VwcG9ydHNFZmZvcnQ6IHRydWUsXG4gICAgICAgIHN1cHBvcnRlZEVmZm9ydExldmVsczogbW9kZWxTdXBwb3J0c01heEVmZm9ydChyZXNvbHZlZE1vZGVsKVxuICAgICAgICAgID8gWy4uLkVGRk9SVF9MRVZFTFNdXG4gICAgICAgICAgOiBFRkZPUlRfTEVWRUxTLmZpbHRlcihsID0+IGwgIT09ICdtYXgnKSxcbiAgICAgIH0pLFxuICAgICAgLi4uKGhhc0FkYXB0aXZlVGhpbmtpbmcgJiYgeyBzdXBwb3J0c0FkYXB0aXZlVGhpbmtpbmc6IHRydWUgfSksXG4gICAgICAuLi4oaGFzRmFzdE1vZGUgJiYgeyBzdXBwb3J0c0Zhc3RNb2RlOiB0cnVlIH0pLFxuICAgICAgLi4uKGhhc0F1dG9Nb2RlICYmIHsgc3VwcG9ydHNBdXRvTW9kZTogdHJ1ZSB9KSxcbiAgICB9XG4gIH0pXG4gIGxldCBhY3RpdmVVc2VyU3BlY2lmaWVkTW9kZWwgPSBvcHRpb25zLnVzZXJTcGVjaWZpZWRNb2RlbFxuXG4gIGZ1bmN0aW9uIGluamVjdE1vZGVsU3dpdGNoQnJlYWRjcnVtYnMoXG4gICAgbW9kZWxBcmc6IHN0cmluZyxcbiAgICByZXNvbHZlZE1vZGVsOiBzdHJpbmcsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gY3JlYXRlTW9kZWxTd2l0Y2hCcmVhZGNydW1icyhcbiAgICAgIG1vZGVsQXJnLFxuICAgICAgbW9kZWxEaXNwbGF5U3RyaW5nKHJlc29sdmVkTW9kZWwpLFxuICAgIClcbiAgICBtdXRhYmxlTWVzc2FnZXMucHVzaCguLi5icmVhZGNydW1icylcbiAgICBmb3IgKGNvbnN0IGNydW1iIG9mIGJyZWFkY3J1bWJzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBjcnVtYi5tZXNzYWdlLmNvbnRlbnQgPT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNydW1iLm1lc3NhZ2UuY29udGVudC5pbmNsdWRlcyhgPCR7TE9DQUxfQ09NTUFORF9TVERPVVRfVEFHfT5gKVxuICAgICAgKSB7XG4gICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgbWVzc2FnZTogY3J1bWIubWVzc2FnZSxcbiAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG51bGwsXG4gICAgICAgICAgdXVpZDogY3J1bWIudXVpZCxcbiAgICAgICAgICB0aW1lc3RhbXA6IGNydW1iLnRpbWVzdGFtcCxcbiAgICAgICAgICBpc1JlcGxheTogdHJ1ZSxcbiAgICAgICAgfSBzYXRpc2ZpZXMgU0RLVXNlck1lc3NhZ2VSZXBsYXkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FjaGUgU0RLIE1DUCBjbGllbnRzIHRvIGF2b2lkIHJlY29ubmVjdGluZyBvbiBlYWNoIHJ1blxuICBsZXQgc2RrQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdID0gW11cbiAgbGV0IHNka1Rvb2xzOiBUb29scyA9IFtdXG5cbiAgLy8gVHJhY2sgd2hpY2ggTUNQIGNsaWVudHMgaGF2ZSBoYWQgZWxpY2l0YXRpb24gaGFuZGxlcnMgcmVnaXN0ZXJlZFxuICBjb25zdCBlbGljaXRhdGlvblJlZ2lzdGVyZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBlbGljaXRhdGlvbiByZXF1ZXN0L2NvbXBsZXRpb24gaGFuZGxlcnMgb24gY29ubmVjdGVkIE1DUCBjbGllbnRzXG4gICAqIHRoYXQgaGF2ZW4ndCBiZWVuIHJlZ2lzdGVyZWQgeWV0LiBTREsgTUNQIHNlcnZlcnMgYXJlIGV4Y2x1ZGVkIGJlY2F1c2UgdGhleVxuICAgKiByb3V0ZSB0aHJvdWdoIFNka0NvbnRyb2xDbGllbnRUcmFuc3BvcnQuIEhvb2tzIHJ1biBmaXJzdCAobWF0Y2hpbmcgUkVQTFxuICAgKiBiZWhhdmlvcik7IGlmIG5vIGhvb2sgcmVzcG9uZHMsIHRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGUgU0RLXG4gICAqIGNvbnN1bWVyIHZpYSB0aGUgY29udHJvbCBwcm90b2NvbC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyhjbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNvbm5lY3Rpb24gb2YgY2xpZW50cykge1xuICAgICAgaWYgKFxuICAgICAgICBjb25uZWN0aW9uLnR5cGUgIT09ICdjb25uZWN0ZWQnIHx8XG4gICAgICAgIGVsaWNpdGF0aW9uUmVnaXN0ZXJlZC5oYXMoY29ubmVjdGlvbi5uYW1lKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBTa2lwIFNESyBNQ1Agc2VydmVycyBcdTIwMTQgZWxpY2l0YXRpb24gZmxvd3MgdGhyb3VnaCBTZGtDb250cm9sQ2xpZW50VHJhbnNwb3J0XG4gICAgICBpZiAoY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gJ3NkaycpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlcnZlck5hbWUgPSBjb25uZWN0aW9uLm5hbWVcblxuICAgICAgLy8gV3JhcHBlZCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSBzZXRSZXF1ZXN0SGFuZGxlciB0aHJvd3MgaWYgdGhlIGNsaWVudCB3YXNuJ3RcbiAgICAgIC8vIGNyZWF0ZWQgd2l0aCBlbGljaXRhdGlvbiBjYXBhYmlsaXR5IGRlY2xhcmVkIChlLmcuLCBTREstY3JlYXRlZCBjbGllbnRzKS5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbm5lY3Rpb24uY2xpZW50LnNldFJlcXVlc3RIYW5kbGVyKFxuICAgICAgICAgIEVsaWNpdFJlcXVlc3RTY2hlbWEsXG4gICAgICAgICAgYXN5bmMgKHJlcXVlc3QsIGV4dHJhKSA9PiB7XG4gICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgICAgICAgc2VydmVyTmFtZSxcbiAgICAgICAgICAgICAgYEVsaWNpdGF0aW9uIHJlcXVlc3QgcmVjZWl2ZWQgaW4gcHJpbnQgbW9kZTogJHtqc29uU3RyaW5naWZ5KHJlcXVlc3QpfWAsXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSByZXF1ZXN0LnBhcmFtcy5tb2RlID09PSAndXJsJyA/ICd1cmwnIDogJ2Zvcm0nXG5cbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfZWxpY2l0YXRpb25fc2hvd24nLCB7XG4gICAgICAgICAgICAgIG1vZGU6IG1vZGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIFJ1biBlbGljaXRhdGlvbiBob29rcyBmaXJzdCBcdTIwMTQgdGhleSBjYW4gcHJvdmlkZSBhIHJlc3BvbnNlIHByb2dyYW1tYXRpY2FsbHlcbiAgICAgICAgICAgIGNvbnN0IGhvb2tSZXNwb25zZSA9IGF3YWl0IHJ1bkVsaWNpdGF0aW9uSG9va3MoXG4gICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgIHJlcXVlc3QucGFyYW1zLFxuICAgICAgICAgICAgICBleHRyYS5zaWduYWwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoaG9va1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgICAgYEVsaWNpdGF0aW9uIHJlc29sdmVkIGJ5IGhvb2s6ICR7anNvblN0cmluZ2lmeShob29rUmVzcG9uc2UpfWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9lbGljaXRhdGlvbl9yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOlxuICAgICAgICAgICAgICAgICAgaG9va1Jlc3BvbnNlLmFjdGlvbiBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gaG9va1Jlc3BvbnNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlbGVnYXRlIHRvIFNESyBjb25zdW1lciB2aWEgY29udHJvbCBwcm90b2NvbFxuICAgICAgICAgICAgY29uc3QgdXJsID1cbiAgICAgICAgICAgICAgJ3VybCcgaW4gcmVxdWVzdC5wYXJhbXNcbiAgICAgICAgICAgICAgICA/IChyZXF1ZXN0LnBhcmFtcy51cmwgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ZWRTY2hlbWEgPVxuICAgICAgICAgICAgICAncmVxdWVzdGVkU2NoZW1hJyBpbiByZXF1ZXN0LnBhcmFtc1xuICAgICAgICAgICAgICAgID8gKHJlcXVlc3QucGFyYW1zLnJlcXVlc3RlZFNjaGVtYSBhc1xuICAgICAgICAgICAgICAgICAgICB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGNvbnN0IGVsaWNpdGF0aW9uSWQgPVxuICAgICAgICAgICAgICAnZWxpY2l0YXRpb25JZCcgaW4gcmVxdWVzdC5wYXJhbXNcbiAgICAgICAgICAgICAgICA/IChyZXF1ZXN0LnBhcmFtcy5lbGljaXRhdGlvbklkIGFzIHN0cmluZyB8IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBjb25zdCByYXdSZXN1bHQgPSBhd2FpdCBzdHJ1Y3R1cmVkSU8uaGFuZGxlRWxpY2l0YXRpb24oXG4gICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgIHJlcXVlc3QucGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHJlcXVlc3RlZFNjaGVtYSxcbiAgICAgICAgICAgICAgZXh0cmEuc2lnbmFsLFxuICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgIGVsaWNpdGF0aW9uSWQsXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkVsaWNpdGF0aW9uUmVzdWx0SG9va3MoXG4gICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgIHJhd1Jlc3VsdCxcbiAgICAgICAgICAgICAgZXh0cmEuc2lnbmFsLFxuICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICBlbGljaXRhdGlvbklkLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2VsaWNpdGF0aW9uX3Jlc3BvbnNlJywge1xuICAgICAgICAgICAgICBtb2RlOiBtb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQuYWN0aW9uIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH0sXG4gICAgICAgIClcblxuICAgICAgICAvLyBTdXJmYWNlIGNvbXBsZXRpb24gbm90aWZpY2F0aW9ucyB0byBTREsgY29uc3VtZXJzIChVUkwgbW9kZSlcbiAgICAgICAgY29ubmVjdGlvbi5jbGllbnQuc2V0Tm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICAgICAgICBFbGljaXRhdGlvbkNvbXBsZXRlTm90aWZpY2F0aW9uU2NoZW1hLFxuICAgICAgICAgIG5vdGlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGVsaWNpdGF0aW9uSWQgfSA9IG5vdGlmaWNhdGlvbi5wYXJhbXNcbiAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICBgRWxpY2l0YXRpb24gY29tcGxldGlvbiBub3RpZmljYXRpb246ICR7ZWxpY2l0YXRpb25JZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdm9pZCBleGVjdXRlTm90aWZpY2F0aW9uSG9va3Moe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBgTUNQIHNlcnZlciBcIiR7c2VydmVyTmFtZX1cIiBjb25maXJtZWQgZWxpY2l0YXRpb24gJHtlbGljaXRhdGlvbklkfSBjb21wbGV0ZWAsXG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6ICdlbGljaXRhdGlvbl9jb21wbGV0ZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2VsaWNpdGF0aW9uX2NvbXBsZXRlJyxcbiAgICAgICAgICAgICAgbWNwX3NlcnZlcl9uYW1lOiBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICBlbGljaXRhdGlvbl9pZDogZWxpY2l0YXRpb25JZCxcbiAgICAgICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuXG4gICAgICAgIGVsaWNpdGF0aW9uUmVnaXN0ZXJlZC5hZGQoc2VydmVyTmFtZSlcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBzZXRSZXF1ZXN0SGFuZGxlciB0aHJvd3MgaWYgdGhlIGNsaWVudCB3YXNuJ3QgY3JlYXRlZCB3aXRoXG4gICAgICAgIC8vIGVsaWNpdGF0aW9uIGNhcGFiaWxpdHkgXHUyMDE0IHNraXAgc2lsZW50bHlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZGtNY3AoKSB7XG4gICAgLy8gQ2hlY2sgaWYgU0RLIE1DUCBzZXJ2ZXJzIG5lZWQgdG8gYmUgdXBkYXRlZCAobmV3IHNlcnZlcnMgYWRkZWQgb3IgcmVtb3ZlZClcbiAgICBjb25zdCBjdXJyZW50U2VydmVyTmFtZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHNka01jcENvbmZpZ3MpKVxuICAgIGNvbnN0IGNvbm5lY3RlZFNlcnZlck5hbWVzID0gbmV3IFNldChzZGtDbGllbnRzLm1hcChjID0+IGMubmFtZSkpXG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGRpZmZlcmVuY2VzIChhZGRpdGlvbnMgb3IgcmVtb3ZhbHMpXG4gICAgY29uc3QgaGFzTmV3U2VydmVycyA9IEFycmF5LmZyb20oY3VycmVudFNlcnZlck5hbWVzKS5zb21lKFxuICAgICAgbmFtZSA9PiAhY29ubmVjdGVkU2VydmVyTmFtZXMuaGFzKG5hbWUpLFxuICAgIClcbiAgICBjb25zdCBoYXNSZW1vdmVkU2VydmVycyA9IEFycmF5LmZyb20oY29ubmVjdGVkU2VydmVyTmFtZXMpLnNvbWUoXG4gICAgICBuYW1lID0+ICFjdXJyZW50U2VydmVyTmFtZXMuaGFzKG5hbWUpLFxuICAgIClcbiAgICAvLyBDaGVjayBpZiBhbnkgU0RLIGNsaWVudHMgYXJlIHBlbmRpbmcgYW5kIG5lZWQgdG8gYmUgdXBncmFkZWRcbiAgICBjb25zdCBoYXNQZW5kaW5nU2RrQ2xpZW50cyA9IHNka0NsaWVudHMuc29tZShjID0+IGMudHlwZSA9PT0gJ3BlbmRpbmcnKVxuICAgIC8vIENoZWNrIGlmIGFueSBTREsgY2xpZW50cyBmYWlsZWQgdGhlaXIgaGFuZHNoYWtlIGFuZCBuZWVkIHRvIGJlIHJldHJpZWQuXG4gICAgLy8gV2l0aG91dCB0aGlzLCBhIGNsaWVudCB0aGF0IGxhbmRzIGluICdmYWlsZWQnIChlLmcuIGhhbmRzaGFrZSB0aW1lb3V0IG9uXG4gICAgLy8gYSBXUyByZWNvbm5lY3QgcmFjZSkgc3RheXMgZmFpbGVkIGZvcmV2ZXIgXHUyMDE0IGl0cyBuYW1lIHNhdGlzZmllcyB0aGVcbiAgICAvLyBjb25uZWN0ZWRTZXJ2ZXJOYW1lcyBkaWZmIGJ1dCBpdCBjb250cmlidXRlcyB6ZXJvIHRvb2xzLlxuICAgIGNvbnN0IGhhc0ZhaWxlZFNka0NsaWVudHMgPSBzZGtDbGllbnRzLnNvbWUoYyA9PiBjLnR5cGUgPT09ICdmYWlsZWQnKVxuXG4gICAgY29uc3QgaGF2ZVNlcnZlcnNDaGFuZ2VkID1cbiAgICAgIGhhc05ld1NlcnZlcnMgfHxcbiAgICAgIGhhc1JlbW92ZWRTZXJ2ZXJzIHx8XG4gICAgICBoYXNQZW5kaW5nU2RrQ2xpZW50cyB8fFxuICAgICAgaGFzRmFpbGVkU2RrQ2xpZW50c1xuXG4gICAgaWYgKGhhdmVTZXJ2ZXJzQ2hhbmdlZCkge1xuICAgICAgLy8gQ2xlYW4gdXAgcmVtb3ZlZCBzZXJ2ZXJzXG4gICAgICBmb3IgKGNvbnN0IGNsaWVudCBvZiBzZGtDbGllbnRzKSB7XG4gICAgICAgIGlmICghY3VycmVudFNlcnZlck5hbWVzLmhhcyhjbGllbnQubmFtZSkpIHtcbiAgICAgICAgICBpZiAoY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYW51cCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlLWluaXRpYWxpemUgYWxsIFNESyBNQ1Agc2VydmVycyB3aXRoIGN1cnJlbnQgY29uZmlnXG4gICAgICBjb25zdCBzZGtTZXR1cCA9IGF3YWl0IHNldHVwU2RrTWNwQ2xpZW50cyhcbiAgICAgICAgc2RrTWNwQ29uZmlncyxcbiAgICAgICAgKHNlcnZlck5hbWUsIG1lc3NhZ2UpID0+XG4gICAgICAgICAgc3RydWN0dXJlZElPLnNlbmRNY3BNZXNzYWdlKHNlcnZlck5hbWUsIG1lc3NhZ2UpLFxuICAgICAgKVxuICAgICAgc2RrQ2xpZW50cyA9IHNka1NldHVwLmNsaWVudHNcbiAgICAgIHNka1Rvb2xzID0gc2RrU2V0dXAudG9vbHNcblxuICAgICAgLy8gU3RvcmUgU0RLIE1DUCB0b29scyBpbiBhcHBTdGF0ZSBzbyBzdWJhZ2VudHMgY2FuIGFjY2VzcyB0aGVtIHZpYVxuICAgICAgLy8gYXNzZW1ibGVUb29sUG9vbC4gT25seSB0b29scyBhcmUgc3RvcmVkIGhlcmUgXHUyMDE0IFNESyBjbGllbnRzIGFyZSBhbHJlYWR5XG4gICAgICAvLyBtZXJnZWQgc2VwYXJhdGVseSBpbiB0aGUgcXVlcnkgbG9vcCAoYWxsTWNwQ2xpZW50cykgYW5kIG1jcF9zdGF0dXMgaGFuZGxlci5cbiAgICAgIC8vIFVzZSBib3RoIG9sZCAoY29ubmVjdGVkU2VydmVyTmFtZXMpIGFuZCBuZXcgKGN1cnJlbnRTZXJ2ZXJOYW1lcykgdG8gcmVtb3ZlXG4gICAgICAvLyBzdGFsZSBTREsgdG9vbHMgd2hlbiBzZXJ2ZXJzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgICAgY29uc3QgYWxsU2RrTmFtZXMgPSB1bmlxKFsuLi5jb25uZWN0ZWRTZXJ2ZXJOYW1lcywgLi4uY3VycmVudFNlcnZlck5hbWVzXSlcbiAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgbWNwOiB7XG4gICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgIC4uLnByZXYubWNwLnRvb2xzLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PlxuICAgICAgICAgICAgICAgICFhbGxTZGtOYW1lcy5zb21lKG5hbWUgPT5cbiAgICAgICAgICAgICAgICAgIHQubmFtZS5zdGFydHNXaXRoKGdldE1jcFByZWZpeChuYW1lKSksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAuLi5zZGtUb29scyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSkpXG5cbiAgICAgIC8vIFNldCB1cCB0aGUgc3BlY2lhbCBpbnRlcm5hbCBWU0NvZGUgTUNQIHNlcnZlciBpZiBuZWNlc3NhcnkuXG4gICAgICBzZXR1cFZzY29kZVNka01jcChzZGtDbGllbnRzKVxuICAgIH1cbiAgfVxuXG4gIHZvaWQgdXBkYXRlU2RrTWNwKClcblxuICAvLyBTdGF0ZSBmb3IgZHluYW1pY2FsbHkgYWRkZWQgTUNQIHNlcnZlcnMgKHZpYSBtY3Bfc2V0X3NlcnZlcnMgY29udHJvbCBtZXNzYWdlKVxuICAvLyBUaGVzZSBhcmUgc2VwYXJhdGUgZnJvbSBTREsgTUNQIHNlcnZlcnMgYW5kIHN1cHBvcnQgYWxsIHRyYW5zcG9ydCB0eXBlc1xuICBsZXQgZHluYW1pY01jcFN0YXRlOiBEeW5hbWljTWNwU3RhdGUgPSB7XG4gICAgY2xpZW50czogW10sXG4gICAgdG9vbHM6IFtdLFxuICAgIGNvbmZpZ3M6IHt9LFxuICB9XG5cbiAgLy8gU2hhcmVkIHRvb2wgYXNzZW1ibHkgZm9yIGFzaygpIGFuZCB0aGUgZ2V0X2NvbnRleHRfdXNhZ2UgY29udHJvbCByZXF1ZXN0LlxuICAvLyBDbG9zZXMgb3ZlciB0aGUgbXV0YWJsZSBzZGtUb29scy9keW5hbWljTWNwU3RhdGUgYmluZGluZ3Mgc28gYm90aCBjYWxsXG4gIC8vIHNpdGVzIHNlZSBsYXRlLWNvbm5lY3Rpbmcgc2VydmVycy5cbiAgY29uc3QgYnVpbGRBbGxUb29scyA9IChhcHBTdGF0ZTogQXBwU3RhdGUpOiBUb29scyA9PiB7XG4gICAgY29uc3QgYXNzZW1ibGVkVG9vbHMgPSBhc3NlbWJsZVRvb2xQb29sKFxuICAgICAgYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgYXBwU3RhdGUubWNwLnRvb2xzLFxuICAgIClcbiAgICBsZXQgYWxsVG9vbHMgPSB1bmlxQnkoXG4gICAgICBtZXJnZUFuZEZpbHRlclRvb2xzKFxuICAgICAgICBbLi4udG9vbHMsIC4uLnNka1Rvb2xzLCAuLi5keW5hbWljTWNwU3RhdGUudG9vbHNdLFxuICAgICAgICBhc3NlbWJsZWRUb29scyxcbiAgICAgICAgYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0Lm1vZGUsXG4gICAgICApLFxuICAgICAgJ25hbWUnLFxuICAgIClcbiAgICBpZiAob3B0aW9ucy5wZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUpIHtcbiAgICAgIGFsbFRvb2xzID0gYWxsVG9vbHMuZmlsdGVyKFxuICAgICAgICB0b29sID0+ICF0b29sTWF0Y2hlc05hbWUodG9vbCwgb3B0aW9ucy5wZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUhKSxcbiAgICAgIClcbiAgICB9XG4gICAgY29uc3QgaW5pdEpzb25TY2hlbWEgPSBnZXRJbml0SnNvblNjaGVtYSgpXG4gICAgaWYgKGluaXRKc29uU2NoZW1hICYmICFvcHRpb25zLmpzb25TY2hlbWEpIHtcbiAgICAgIGNvbnN0IHN5bnRoZXRpY091dHB1dFJlc3VsdCA9IGNyZWF0ZVN5bnRoZXRpY091dHB1dFRvb2woaW5pdEpzb25TY2hlbWEpXG4gICAgICBpZiAoJ3Rvb2wnIGluIHN5bnRoZXRpY091dHB1dFJlc3VsdCkge1xuICAgICAgICBhbGxUb29scyA9IFsuLi5hbGxUb29scywgc3ludGhldGljT3V0cHV0UmVzdWx0LnRvb2xdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbGxUb29sc1xuICB9XG5cbiAgLy8gQnJpZGdlIGhhbmRsZSBmb3IgcmVtb3RlLWNvbnRyb2wgKFNESyBjb250cm9sIG1lc3NhZ2UpLlxuICAvLyBNaXJyb3JzIHRoZSBSRVBMJ3MgdXNlUmVwbEJyaWRnZSBob29rOiB0aGUgaGFuZGxlIGlzIGNyZWF0ZWQgd2hlblxuICAvLyBgcmVtb3RlX2NvbnRyb2xgIGlzIGVuYWJsZWQgYW5kIHRvcm4gZG93biB3aGVuIGRpc2FibGVkLlxuICBsZXQgYnJpZGdlSGFuZGxlOiBSZXBsQnJpZGdlSGFuZGxlIHwgbnVsbCA9IG51bGxcbiAgLy8gQ3Vyc29yIGludG8gbXV0YWJsZU1lc3NhZ2VzIFx1MjAxNCB0cmFja3MgaG93IGZhciB3ZSd2ZSBmb3J3YXJkZWQuXG4gIC8vIFNhbWUgaW5kZXgtYmFzZWQgZGlmZiBhcyB1c2VSZXBsQnJpZGdlJ3MgbGFzdFdyaXR0ZW5JbmRleFJlZi5cbiAgbGV0IGJyaWRnZUxhc3RGb3J3YXJkZWRJbmRleCA9IDBcblxuICAvLyBGb3J3YXJkIG5ldyBtZXNzYWdlcyBmcm9tIG11dGFibGVNZXNzYWdlcyB0byB0aGUgYnJpZGdlLlxuICAvLyBDYWxsZWQgaW5jcmVtZW50YWxseSBkdXJpbmcgZWFjaCB0dXJuIChzbyBjbGF1ZGUuYWkgc2VlcyBwcm9ncmVzc1xuICAvLyBhbmQgc3RheXMgYWxpdmUgZHVyaW5nIHBlcm1pc3Npb24gd2FpdHMpIGFuZCBhZ2FpbiBhZnRlciB0aGUgdHVybi5cbiAgLy9cbiAgLy8gd3JpdGVNZXNzYWdlcyBoYXMgaXRzIG93biBVVUlELWJhc2VkIGRlZHVwIChpbml0aWFsTWVzc2FnZVVVSURzLFxuICAvLyByZWNlbnRQb3N0ZWRVVUlEcykgXHUyMDE0IHRoZSBpbmRleCBjdXJzb3IgaGVyZSBpcyBhIHByZS1maWx0ZXIgdG8gYXZvaWRcbiAgLy8gTyhuKSByZS1zY2FubmluZyBvZiBhbHJlYWR5LXNlbnQgbWVzc2FnZXMgb24gZXZlcnkgY2FsbC5cbiAgZnVuY3Rpb24gZm9yd2FyZE1lc3NhZ2VzVG9CcmlkZ2UoKTogdm9pZCB7XG4gICAgaWYgKCFicmlkZ2VIYW5kbGUpIHJldHVyblxuICAgIC8vIEd1YXJkIGFnYWluc3QgbXV0YWJsZU1lc3NhZ2VzIHNocmlua2luZyAoY29tcGFjdGlvbiB0cnVuY2F0ZXMgaXQpLlxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBNYXRoLm1pbihcbiAgICAgIGJyaWRnZUxhc3RGb3J3YXJkZWRJbmRleCxcbiAgICAgIG11dGFibGVNZXNzYWdlcy5sZW5ndGgsXG4gICAgKVxuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gbXV0YWJsZU1lc3NhZ2VzXG4gICAgICAuc2xpY2Uoc3RhcnRJbmRleClcbiAgICAgIC5maWx0ZXIobSA9PiBtLnR5cGUgPT09ICd1c2VyJyB8fCBtLnR5cGUgPT09ICdhc3Npc3RhbnQnKVxuICAgIGJyaWRnZUxhc3RGb3J3YXJkZWRJbmRleCA9IG11dGFibGVNZXNzYWdlcy5sZW5ndGhcbiAgICBpZiAobmV3TWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgYnJpZGdlSGFuZGxlLndyaXRlTWVzc2FnZXMobmV3TWVzc2FnZXMpXG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyIHRvIGFwcGx5IE1DUCBzZXJ2ZXIgY2hhbmdlcyAtIHVzZWQgYnkgYm90aCBtY3Bfc2V0X3NlcnZlcnMgY29udHJvbCBtZXNzYWdlXG4gIC8vIGFuZCBiYWNrZ3JvdW5kIHBsdWdpbiBpbnN0YWxsYXRpb24uXG4gIC8vIE5PVEU6IE5lc3RlZCBmdW5jdGlvbiByZXF1aXJlZCAtIG11dGF0ZXMgY2xvc3VyZSBzdGF0ZSAoc2RrTWNwQ29uZmlncywgc2RrQ2xpZW50cywgZXRjLilcbiAgbGV0IG1jcENoYW5nZXNQcm9taXNlOiBQcm9taXNlPHtcbiAgICByZXNwb25zZTogU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXNwb25zZVxuICAgIHNka1NlcnZlcnNDaGFuZ2VkOiBib29sZWFuXG4gIH0+ID0gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICByZXNwb25zZToge1xuICAgICAgYWRkZWQ6IFtdIGFzIHN0cmluZ1tdLFxuICAgICAgcmVtb3ZlZDogW10gYXMgc3RyaW5nW10sXG4gICAgICBlcnJvcnM6IHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgfSxcbiAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogZmFsc2UsXG4gIH0pXG5cbiAgZnVuY3Rpb24gYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzKFxuICAgIHNlcnZlcnM6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQ+LFxuICApOiBQcm9taXNlPHtcbiAgICByZXNwb25zZTogU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXNwb25zZVxuICAgIHNka1NlcnZlcnNDaGFuZ2VkOiBib29sZWFuXG4gIH0+IHtcbiAgICAvLyBTZXJpYWxpemUgY2FsbHMgdG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnMgYmV0d2VlbiBjb25jdXJyZW50IGNhbGxlcnNcbiAgICAvLyAoYmFja2dyb3VuZCBwbHVnaW4gaW5zdGFsbCBhbmQgbWNwX3NldF9zZXJ2ZXJzIGNvbnRyb2wgbWVzc2FnZXMpXG4gICAgY29uc3QgZG9Xb3JrID0gYXN5bmMgKCk6IFByb21pc2U8e1xuICAgICAgcmVzcG9uc2U6IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VcbiAgICAgIHNka1NlcnZlcnNDaGFuZ2VkOiBib29sZWFuXG4gICAgfT4gPT4ge1xuICAgICAgY29uc3Qgb2xkU2RrQ2xpZW50TmFtZXMgPSBuZXcgU2V0KHNka0NsaWVudHMubWFwKGMgPT4gYy5uYW1lKSlcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlTWNwU2V0U2VydmVycyhcbiAgICAgICAgc2VydmVycyxcbiAgICAgICAgeyBjb25maWdzOiBzZGtNY3BDb25maWdzLCBjbGllbnRzOiBzZGtDbGllbnRzLCB0b29sczogc2RrVG9vbHMgfSxcbiAgICAgICAgZHluYW1pY01jcFN0YXRlLFxuICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgIClcblxuICAgICAgLy8gVXBkYXRlIFNESyBzdGF0ZSAobmVlZCB0byBtdXRhdGUgc2RrTWNwQ29uZmlncyBzaW5jZSBpdCdzIHNoYXJlZClcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNka01jcENvbmZpZ3MpKSB7XG4gICAgICAgIGRlbGV0ZSBzZGtNY3BDb25maWdzW2tleV1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oc2RrTWNwQ29uZmlncywgcmVzdWx0Lm5ld1Nka1N0YXRlLmNvbmZpZ3MpXG4gICAgICBzZGtDbGllbnRzID0gcmVzdWx0Lm5ld1Nka1N0YXRlLmNsaWVudHNcbiAgICAgIHNka1Rvb2xzID0gcmVzdWx0Lm5ld1Nka1N0YXRlLnRvb2xzXG4gICAgICBkeW5hbWljTWNwU3RhdGUgPSByZXN1bHQubmV3RHluYW1pY1N0YXRlXG5cbiAgICAgIC8vIEtlZXAgYXBwU3RhdGUubWNwLnRvb2xzIGluIHN5bmMgc28gc3ViYWdlbnRzIGNhbiBzZWUgU0RLIE1DUCB0b29scy5cbiAgICAgIC8vIFVzZSBib3RoIG9sZCBhbmQgbmV3IFNESyBjbGllbnQgbmFtZXMgdG8gcmVtb3ZlIHN0YWxlIHRvb2xzLlxuICAgICAgaWYgKHJlc3VsdC5zZGtTZXJ2ZXJzQ2hhbmdlZCkge1xuICAgICAgICBjb25zdCBuZXdTZGtDbGllbnROYW1lcyA9IG5ldyBTZXQoc2RrQ2xpZW50cy5tYXAoYyA9PiBjLm5hbWUpKVxuICAgICAgICBjb25zdCBhbGxTZGtOYW1lcyA9IHVuaXEoWy4uLm9sZFNka0NsaWVudE5hbWVzLCAuLi5uZXdTZGtDbGllbnROYW1lc10pXG4gICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICB0b29sczogW1xuICAgICAgICAgICAgICAuLi5wcmV2Lm1jcC50b29scy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgdCA9PlxuICAgICAgICAgICAgICAgICAgIWFsbFNka05hbWVzLnNvbWUobmFtZSA9PlxuICAgICAgICAgICAgICAgICAgICB0Lm5hbWUuc3RhcnRzV2l0aChnZXRNY3BQcmVmaXgobmFtZSkpLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgLi4uc2RrVG9vbHMsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXNwb25zZTogcmVzdWx0LnJlc3BvbnNlLFxuICAgICAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogcmVzdWx0LnNka1NlcnZlcnNDaGFuZ2VkLFxuICAgICAgfVxuICAgIH1cblxuICAgIG1jcENoYW5nZXNQcm9taXNlID0gbWNwQ2hhbmdlc1Byb21pc2UudGhlbihkb1dvcmssIGRvV29yaylcbiAgICByZXR1cm4gbWNwQ2hhbmdlc1Byb21pc2VcbiAgfVxuXG4gIC8vIEJ1aWxkIE1jcFNlcnZlclN0YXR1c1tdIGZvciBjb250cm9sIHJlc3BvbnNlcy4gU2hhcmVkIGJ5IG1jcF9zdGF0dXMgYW5kXG4gIC8vIHJlbG9hZF9wbHVnaW5zIGhhbmRsZXJzLiBSZWFkcyBjbG9zdXJlIHN0YXRlOiBzZGtDbGllbnRzLCBkeW5hbWljTWNwU3RhdGUuXG4gIGZ1bmN0aW9uIGJ1aWxkTWNwU2VydmVyU3RhdHVzZXMoKTogTWNwU2VydmVyU3RhdHVzW10ge1xuICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICBjb25zdCBjdXJyZW50TWNwQ2xpZW50cyA9IGN1cnJlbnRBcHBTdGF0ZS5tY3AuY2xpZW50c1xuICAgIGNvbnN0IGFsbE1jcFRvb2xzID0gdW5pcUJ5KFxuICAgICAgWy4uLmN1cnJlbnRBcHBTdGF0ZS5tY3AudG9vbHMsIC4uLmR5bmFtaWNNY3BTdGF0ZS50b29sc10sXG4gICAgICAnbmFtZScsXG4gICAgKVxuICAgIGNvbnN0IGV4aXN0aW5nTmFtZXMgPSBuZXcgU2V0KFtcbiAgICAgIC4uLmN1cnJlbnRNY3BDbGllbnRzLm1hcChjID0+IGMubmFtZSksXG4gICAgICAuLi5zZGtDbGllbnRzLm1hcChjID0+IGMubmFtZSksXG4gICAgXSlcbiAgICByZXR1cm4gW1xuICAgICAgLi4uY3VycmVudE1jcENsaWVudHMsXG4gICAgICAuLi5zZGtDbGllbnRzLFxuICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMuZmlsdGVyKGMgPT4gIWV4aXN0aW5nTmFtZXMuaGFzKGMubmFtZSkpLFxuICAgIF0ubWFwKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgbGV0IGNvbmZpZ1xuICAgICAgaWYgKFxuICAgICAgICBjb25uZWN0aW9uLmNvbmZpZy50eXBlID09PSAnc3NlJyB8fFxuICAgICAgICBjb25uZWN0aW9uLmNvbmZpZy50eXBlID09PSAnaHR0cCdcbiAgICAgICkge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgdHlwZTogY29ubmVjdGlvbi5jb25maWcudHlwZSxcbiAgICAgICAgICB1cmw6IGNvbm5lY3Rpb24uY29uZmlnLnVybCxcbiAgICAgICAgICBoZWFkZXJzOiBjb25uZWN0aW9uLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgICAgIG9hdXRoOiBjb25uZWN0aW9uLmNvbmZpZy5vYXV0aCxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjb25uZWN0aW9uLmNvbmZpZy50eXBlID09PSAnY2xhdWRlYWktcHJveHknKSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICB0eXBlOiAnY2xhdWRlYWktcHJveHknIGFzIGNvbnN0LFxuICAgICAgICAgIHVybDogY29ubmVjdGlvbi5jb25maWcudXJsLFxuICAgICAgICAgIGlkOiBjb25uZWN0aW9uLmNvbmZpZy5pZCxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gJ3N0ZGlvJyB8fFxuICAgICAgICBjb25uZWN0aW9uLmNvbmZpZy50eXBlID09PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgdHlwZTogJ3N0ZGlvJyBhcyBjb25zdCxcbiAgICAgICAgICBjb21tYW5kOiBjb25uZWN0aW9uLmNvbmZpZy5jb21tYW5kLFxuICAgICAgICAgIGFyZ3M6IGNvbm5lY3Rpb24uY29uZmlnLmFyZ3MsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlcnZlclRvb2xzID1cbiAgICAgICAgY29ubmVjdGlvbi50eXBlID09PSAnY29ubmVjdGVkJ1xuICAgICAgICAgID8gZmlsdGVyVG9vbHNCeVNlcnZlcihhbGxNY3BUb29scywgY29ubmVjdGlvbi5uYW1lKS5tYXAodG9vbCA9PiAoe1xuICAgICAgICAgICAgICBuYW1lOiB0b29sLm1jcEluZm8/LnRvb2xOYW1lID8/IHRvb2wubmFtZSxcbiAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByZWFkT25seTogdG9vbC5pc1JlYWRPbmx5KHt9KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRvb2wuaXNEZXN0cnVjdGl2ZT8uKHt9KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgb3BlbldvcmxkOiB0b29sLmlzT3BlbldvcmxkPy4oe30pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAvLyBDYXBhYmlsaXRpZXMgcGFzc3Rocm91Z2ggd2l0aCBhbGxvd2xpc3QgcHJlLWZpbHRlci4gVGhlIElERSByZWFkc1xuICAgICAgLy8gZXhwZXJpbWVudGFsWydjbGF1ZGUvY2hhbm5lbCddIHRvIGRlY2lkZSB3aGV0aGVyIHRvIHNob3cgdGhlXG4gICAgICAvLyBFbmFibGUtY2hhbm5lbCBwcm9tcHQgXHUyMDE0IG9ubHkgZWNobyBpdCBpZiBjaGFubmVsX2VuYWJsZSB3b3VsZFxuICAgICAgLy8gYWN0dWFsbHkgcGFzcyB0aGUgYWxsb3dsaXN0LiBOb3QgYSBzZWN1cml0eSBib3VuZGFyeSAodGhlXG4gICAgICAvLyBoYW5kbGVyIHJlLXJ1bnMgdGhlIGZ1bGwgZ2F0ZSk7IGp1c3QgYXZvaWRzIGRlYWQgYnV0dG9ucy5cbiAgICAgIGxldCBjYXBhYmlsaXRpZXM6IHsgZXhwZXJpbWVudGFsPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfSB8IHVuZGVmaW5lZFxuICAgICAgaWYgKFxuICAgICAgICAoZmVhdHVyZSgnS0FJUk9TJykgfHwgZmVhdHVyZSgnS0FJUk9TX0NIQU5ORUxTJykpICYmXG4gICAgICAgIGNvbm5lY3Rpb24udHlwZSA9PT0gJ2Nvbm5lY3RlZCcgJiZcbiAgICAgICAgY29ubmVjdGlvbi5jYXBhYmlsaXRpZXMuZXhwZXJpbWVudGFsXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZXhwID0geyAuLi5jb25uZWN0aW9uLmNhcGFiaWxpdGllcy5leHBlcmltZW50YWwgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXhwWydjbGF1ZGUvY2hhbm5lbCddICYmXG4gICAgICAgICAgKCFpc0NoYW5uZWxzRW5hYmxlZCgpIHx8XG4gICAgICAgICAgICAhaXNDaGFubmVsQWxsb3dsaXN0ZWQoY29ubmVjdGlvbi5jb25maWcucGx1Z2luU291cmNlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVsZXRlIGV4cFsnY2xhdWRlL2NoYW5uZWwnXVxuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhleHApLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYXBhYmlsaXRpZXMgPSB7IGV4cGVyaW1lbnRhbDogZXhwIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29ubmVjdGlvbi5uYW1lLFxuICAgICAgICBzdGF0dXM6IGNvbm5lY3Rpb24udHlwZSxcbiAgICAgICAgc2VydmVySW5mbzpcbiAgICAgICAgICBjb25uZWN0aW9uLnR5cGUgPT09ICdjb25uZWN0ZWQnID8gY29ubmVjdGlvbi5zZXJ2ZXJJbmZvIDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogY29ubmVjdGlvbi50eXBlID09PSAnZmFpbGVkJyA/IGNvbm5lY3Rpb24uZXJyb3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgc2NvcGU6IGNvbm5lY3Rpb24uY29uZmlnLnNjb3BlLFxuICAgICAgICB0b29sczogc2VydmVyVG9vbHMsXG4gICAgICAgIGNhcGFiaWxpdGllcyxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gTk9URTogTmVzdGVkIGZ1bmN0aW9uIHJlcXVpcmVkIC0gbmVlZHMgY2xvc3VyZSBhY2Nlc3MgdG8gYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzIGFuZCB1cGRhdGVTZGtNY3BcbiAgYXN5bmMgZnVuY3Rpb24gaW5zdGFsbFBsdWdpbnNBbmRBcHBseU1jcEluQmFja2dyb3VuZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgLy8gSm9pbiBwb2ludCBmb3IgdXNlciBzZXR0aW5ncyAoZmlyZWQgYXQgcnVuSGVhZGxlc3MgZW50cnkpIGFuZCBtYW5hZ2VkXG4gICAgICAvLyBzZXR0aW5ncyAoZmlyZWQgaW4gbWFpbi50c3ggcHJlQWN0aW9uKS4gZG93bmxvYWRVc2VyU2V0dGluZ3MoKSBjYWNoZXNcbiAgICAgIC8vIGl0cyBwcm9taXNlIHNvIHRoaXMgYXdhaXRzIHRoZSBzYW1lIGluLWZsaWdodCByZXF1ZXN0LlxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZWF0dXJlKCdET1dOTE9BRF9VU0VSX1NFVFRJTkdTJykgJiZcbiAgICAgICAgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URSkgfHwgZ2V0SXNSZW1vdGVNb2RlKCkpXG4gICAgICAgICAgPyB3aXRoRGlhZ25vc3RpY3NUaW1pbmcoJ2hlYWRsZXNzX3VzZXJfc2V0dGluZ3NfZG93bmxvYWQnLCAoKSA9PlxuICAgICAgICAgICAgICBkb3dubG9hZFVzZXJTZXR0aW5ncygpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIHdpdGhEaWFnbm9zdGljc1RpbWluZygnaGVhZGxlc3NfbWFuYWdlZF9zZXR0aW5nc193YWl0JywgKCkgPT5cbiAgICAgICAgICB3YWl0Rm9yUmVtb3RlTWFuYWdlZFNldHRpbmdzVG9Mb2FkKCksXG4gICAgICAgICksXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBwbHVnaW5zSW5zdGFsbGVkID0gYXdhaXQgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzcygpXG5cbiAgICAgIGlmIChwbHVnaW5zSW5zdGFsbGVkKSB7XG4gICAgICAgIGF3YWl0IGFwcGx5UGx1Z2luTWNwRGlmZigpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJhY2tncm91bmQgcGx1Z2luIGluc3RhbGxhdGlvbiBmb3IgYWxsIGhlYWRsZXNzIHVzZXJzXG4gIC8vIEluc3RhbGxzIG1hcmtldHBsYWNlcyBmcm9tIGV4dHJhS25vd25NYXJrZXRwbGFjZXMgYW5kIG1pc3NpbmcgZW5hYmxlZCBwbHVnaW5zXG4gIC8vIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTEw9dHJ1ZTogcmVzb2x2ZWQgaW4gcnVuKCkgYmVmb3JlIHRoZSBmaXJzdFxuICAvLyBxdWVyeSBzbyBwbHVnaW5zIGFyZSBndWFyYW50ZWVkIGF2YWlsYWJsZSBvbiB0aGUgZmlyc3QgYXNrKCkuXG4gIGxldCBwbHVnaW5JbnN0YWxsUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG4gIC8vIC0tYmFyZSAvIFNJTVBMRTogc2tpcCBwbHVnaW4gaW5zdGFsbC4gU2NyaXB0ZWQgY2FsbHMgZG9uJ3QgYWRkIHBsdWdpbnNcbiAgLy8gbWlkLXNlc3Npb247IHRoZSBuZXh0IGludGVyYWN0aXZlIHJ1biByZWNvbmNpbGVzLlxuICBpZiAoIWlzQmFyZU1vZGUoKSkge1xuICAgIGlmIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMKSkge1xuICAgICAgcGx1Z2luSW5zdGFsbFByb21pc2UgPSBpbnN0YWxsUGx1Z2luc0FuZEFwcGx5TWNwSW5CYWNrZ3JvdW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCBpbnN0YWxsUGx1Z2luc0FuZEFwcGx5TWNwSW5CYWNrZ3JvdW5kKClcbiAgICB9XG4gIH1cblxuICAvLyBJZGxlIHRpbWVvdXQgbWFuYWdlbWVudFxuICBjb25zdCBpZGxlVGltZW91dCA9IGNyZWF0ZUlkbGVUaW1lb3V0TWFuYWdlcigoKSA9PiAhcnVubmluZylcblxuICAvLyBNdXRhYmxlIGNvbW1hbmRzIGFuZCBhZ2VudHMgZm9yIGhvdCByZWxvYWRpbmdcbiAgbGV0IGN1cnJlbnRDb21tYW5kcyA9IGNvbW1hbmRzXG4gIGxldCBjdXJyZW50QWdlbnRzID0gYWdlbnRzXG5cbiAgLy8gQ2xlYXIgYWxsIHBsdWdpbi1yZWxhdGVkIGNhY2hlcywgcmVsb2FkIGNvbW1hbmRzL2FnZW50cy9ob29rcy5cbiAgLy8gQ2FsbGVkIGFmdGVyIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTEwgY29tcGxldGVzIChiZWZvcmUgZmlyc3QgcXVlcnkpXG4gIC8vIGFuZCBhZnRlciBub24tc3luYyBiYWNrZ3JvdW5kIGluc3RhbGwgZmluaXNoZXMuXG4gIC8vIHJlZnJlc2hBY3RpdmVQbHVnaW5zIGNhbGxzIGNsZWFyQWxsQ2FjaGVzKCkgd2hpY2ggaXMgcmVxdWlyZWQgYmVjYXVzZVxuICAvLyBsb2FkQWxsUGx1Z2lucygpIG1heSBoYXZlIHJ1biBkdXJpbmcgbWFpbi50c3ggc3RhcnR1cCBCRUZPUkUgbWFuYWdlZFxuICAvLyBzZXR0aW5ncyB3ZXJlIGZldGNoZWQuIFdpdGhvdXQgY2xlYXJpbmcsIGdldENvbW1hbmRzKCkgd291bGQgcmVidWlsZFxuICAvLyBmcm9tIGEgc3RhbGUgcGx1Z2luIGxpc3QuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hQbHVnaW5TdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyByZWZyZXNoQWN0aXZlUGx1Z2lucyBoYW5kbGVzIHRoZSBmdWxsIGNhY2hlIHN3ZWVwIChjbGVhckFsbENhY2hlcyksXG4gICAgLy8gcmVsb2FkcyBhbGwgcGx1Z2luIGNvbXBvbmVudCBsb2FkZXJzLCB3cml0ZXMgQXBwU3RhdGUucGx1Z2lucyArXG4gICAgLy8gQXBwU3RhdGUuYWdlbnREZWZpbml0aW9ucywgcmVnaXN0ZXJzIGhvb2tzLCBhbmQgYnVtcHMgbWNwLnBsdWdpblJlY29ubmVjdEtleS5cbiAgICBjb25zdCB7IGFnZW50RGVmaW5pdGlvbnM6IGZyZXNoQWdlbnREZWZzIH0gPVxuICAgICAgYXdhaXQgcmVmcmVzaEFjdGl2ZVBsdWdpbnMoc2V0QXBwU3RhdGUpXG5cbiAgICAvLyBIZWFkbGVzcy1zcGVjaWZpYzogY3VycmVudENvbW1hbmRzL2N1cnJlbnRBZ2VudHMgYXJlIGxvY2FsIG11dGFibGUgcmVmc1xuICAgIC8vIGNhcHR1cmVkIGJ5IHRoZSBxdWVyeSBsb29wIChSRVBMIHVzZXMgQXBwU3RhdGUgaW5zdGVhZCkuIGdldENvbW1hbmRzIGlzXG4gICAgLy8gZnJlc2ggYmVjYXVzZSByZWZyZXNoQWN0aXZlUGx1Z2lucyBjbGVhcmVkIGl0cyBjYWNoZS5cbiAgICBjdXJyZW50Q29tbWFuZHMgPSBhd2FpdCBnZXRDb21tYW5kcyhjd2QoKSlcblxuICAgIC8vIFByZXNlcnZlIFNESy1wcm92aWRlZCBhZ2VudHMgKC0tYWdlbnRzIENMSSBmbGFnIG9yIFNESyBpbml0aWFsaXplXG4gICAgLy8gY29udHJvbF9yZXF1ZXN0KSBcdTIwMTQgYm90aCBpbmplY3QgdmlhIHBhcnNlQWdlbnRzRnJvbUpzb24gd2l0aFxuICAgIC8vIHNvdXJjZT0nZmxhZ1NldHRpbmdzJy4gbG9hZE1hcmtkb3duRmlsZXNGb3JTdWJkaXIgbmV2ZXIgYXNzaWducyB0aGlzXG4gICAgLy8gc291cmNlLCBzbyBpdCBjbGVhbmx5IGRpc2NyaW1pbmF0ZXMgXCJpbmplY3RlZCwgbm90IGRpc2stbG9hZGFibGVcIi5cbiAgICAvL1xuICAgIC8vIFRoZSBwcmV2aW91cyBmaWx0ZXIgdXNlZCBhIG5lZ2F0aXZlIHNldC1kaWZmICghZnJlc2hBZ2VudFR5cGVzLmhhcyhhKSlcbiAgICAvLyB3aGljaCBhbHNvIG1hdGNoZWQgcGx1Z2luIGFnZW50cyB0aGF0IHdlcmUgaW4gdGhlIHBvaXNvbmVkIGluaXRpYWxcbiAgICAvLyBjdXJyZW50QWdlbnRzIGJ1dCBjb3JyZWN0bHkgZXhjbHVkZWQgZnJvbSBmcmVzaEFnZW50RGVmcyBhZnRlciBtYW5hZ2VkXG4gICAgLy8gc2V0dGluZ3MgYXBwbGllZCBcdTIwMTQgbGVha2luZyBwb2xpY3ktYmxvY2tlZCBhZ2VudHMgaW50byB0aGUgaW5pdCBtZXNzYWdlLlxuICAgIC8vIFNlZSBnaC0yMzA4NTogaXNCcmlkZ2VFbmFibGVkKCkgYXQgQ29tbWFuZGVyLWRlZmluaXRpb24gdGltZSBwb2lzb25lZFxuICAgIC8vIHRoZSBzZXR0aW5ncyBjYWNoZSBiZWZvcmUgc2V0RWxpZ2liaWxpdHkodHJ1ZSkgcmFuLlxuICAgIGNvbnN0IHNka0FnZW50cyA9IGN1cnJlbnRBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09ICdmbGFnU2V0dGluZ3MnKVxuICAgIGN1cnJlbnRBZ2VudHMgPSBbLi4uZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzLCAuLi5zZGtBZ2VudHNdXG4gIH1cblxuICAvLyBSZS1kaWZmIE1DUCBjb25maWdzIGFmdGVyIHBsdWdpbiBzdGF0ZSBjaGFuZ2VzLiBGaWx0ZXJzIHRvXG4gIC8vIHByb2Nlc3MtdHJhbnNwb3J0LXN1cHBvcnRlZCB0eXBlcyBhbmQgY2FycmllcyBTREstbW9kZSBzZXJ2ZXJzIHRocm91Z2hcbiAgLy8gc28gYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzJyBkaWZmIGRvZXNuJ3QgY2xvc2UgdGhlaXIgdHJhbnNwb3J0cy5cbiAgLy8gTmVzdGVkOiBuZWVkcyBjbG9zdXJlIGFjY2VzcyB0byBzZGtNY3BDb25maWdzLCBhcHBseU1jcFNlcnZlckNoYW5nZXMsXG4gIC8vIHVwZGF0ZVNka01jcC5cbiAgYXN5bmMgZnVuY3Rpb24gYXBwbHlQbHVnaW5NY3BEaWZmKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgc2VydmVyczogbmV3Q29uZmlncyB9ID0gYXdhaXQgZ2V0QWxsTWNwQ29uZmlncygpXG4gICAgY29uc3Qgc3VwcG9ydGVkQ29uZmlnczogUmVjb3JkPHN0cmluZywgTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydD4gPVxuICAgICAge31cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb25maWddIG9mIE9iamVjdC5lbnRyaWVzKG5ld0NvbmZpZ3MpKSB7XG4gICAgICBjb25zdCB0eXBlID0gY29uZmlnLnR5cGVcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIHR5cGUgPT09ICdzdGRpbycgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3NzZScgfHxcbiAgICAgICAgdHlwZSA9PT0gJ2h0dHAnIHx8XG4gICAgICAgIHR5cGUgPT09ICdzZGsnXG4gICAgICApIHtcbiAgICAgICAgc3VwcG9ydGVkQ29uZmlnc1tuYW1lXSA9IGNvbmZpZ1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb25maWddIG9mIE9iamVjdC5lbnRyaWVzKHNka01jcENvbmZpZ3MpKSB7XG4gICAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdzZGsnICYmICEobmFtZSBpbiBzdXBwb3J0ZWRDb25maWdzKSkge1xuICAgICAgICBzdXBwb3J0ZWRDb25maWdzW25hbWVdID0gY29uZmlnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgcmVzcG9uc2UsIHNka1NlcnZlcnNDaGFuZ2VkIH0gPVxuICAgICAgYXdhaXQgYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzKHN1cHBvcnRlZENvbmZpZ3MpXG4gICAgaWYgKHNka1NlcnZlcnNDaGFuZ2VkKSB7XG4gICAgICB2b2lkIHVwZGF0ZVNka01jcCgpXG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBIZWFkbGVzcyBNQ1AgcmVmcmVzaDogYWRkZWQ9JHtyZXNwb25zZS5hZGRlZC5sZW5ndGh9LCByZW1vdmVkPSR7cmVzcG9uc2UucmVtb3ZlZC5sZW5ndGh9YCxcbiAgICApXG4gIH1cblxuICAvLyBTdWJzY3JpYmUgdG8gc2tpbGwgY2hhbmdlcyBmb3IgaG90IHJlbG9hZGluZ1xuICBjb25zdCB1bnN1YnNjcmliZVNraWxsQ2hhbmdlcyA9IHNraWxsQ2hhbmdlRGV0ZWN0b3Iuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjbGVhckNvbW1hbmRzQ2FjaGUoKVxuICAgIHZvaWQgZ2V0Q29tbWFuZHMoY3dkKCkpLnRoZW4obmV3Q29tbWFuZHMgPT4ge1xuICAgICAgY3VycmVudENvbW1hbmRzID0gbmV3Q29tbWFuZHNcbiAgICB9KVxuICB9KVxuXG4gIC8vIFByb2FjdGl2ZSBtb2RlOiBzY2hlZHVsZSBhIHRpY2sgdG8ga2VlcCB0aGUgbW9kZWwgbG9vcGluZyBhdXRvbm9tb3VzbHkuXG4gIC8vIHNldFRpbWVvdXQoMCkgeWllbGRzIHRvIHRoZSBldmVudCBsb29wIHNvIHBlbmRpbmcgc3RkaW4gbWVzc2FnZXNcbiAgLy8gKGludGVycnVwdHMsIHVzZXIgbWVzc2FnZXMpIGFyZSBwcm9jZXNzZWQgYmVmb3JlIHRoZSB0aWNrIGZpcmVzLlxuICBjb25zdCBzY2hlZHVsZVByb2FjdGl2ZVRpY2sgPVxuICAgIGZlYXR1cmUoJ1BST0FDVElWRScpIHx8IGZlYXR1cmUoJ0tBSVJPUycpXG4gICAgICA/ICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXByb2FjdGl2ZU1vZHVsZT8uaXNQcm9hY3RpdmVBY3RpdmUoKSB8fFxuICAgICAgICAgICAgICBwcm9hY3RpdmVNb2R1bGUuaXNQcm9hY3RpdmVQYXVzZWQoKSB8fFxuICAgICAgICAgICAgICBpbnB1dENsb3NlZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGlja0NvbnRlbnQgPSBgPCR7VElDS19UQUd9PiR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08LyR7VElDS19UQUd9PmBcbiAgICAgICAgICAgIGVucXVldWUoe1xuICAgICAgICAgICAgICBtb2RlOiAncHJvbXB0JyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgdmFsdWU6IHRpY2tDb250ZW50LFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgIHByaW9yaXR5OiAnbGF0ZXInLFxuICAgICAgICAgICAgICBpc01ldGE6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdm9pZCBydW4oKVxuICAgICAgICAgIH0sIDApXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgLy8gQWJvcnQgdGhlIGN1cnJlbnQgb3BlcmF0aW9uIHdoZW4gYSAnbm93JyBwcmlvcml0eSBtZXNzYWdlIGFycml2ZXMuXG4gIHN1YnNjcmliZVRvQ29tbWFuZFF1ZXVlKCgpID0+IHtcbiAgICBpZiAoYWJvcnRDb250cm9sbGVyICYmIGdldENvbW1hbmRzQnlNYXhQcmlvcml0eSgnbm93JykubGVuZ3RoID4gMCkge1xuICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCdpbnRlcnJ1cHQnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBydW4oKSBlbnRlcmVkJylcbiAgICBydW5uaW5nID0gdHJ1ZVxuICAgIHJ1blBoYXNlID0gdW5kZWZpbmVkXG4gICAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCgncnVubmluZycpXG4gICAgaWRsZVRpbWVvdXQuc3RvcCgpXG5cbiAgICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgncnVuX2VudHJ5JylcbiAgICAvLyBUT0RPKGN1c3RvbS10b29sLXJlZmFjdG9yKTogU2hvdWxkIG1vdmUgdG8gdGhlIGluaXQgbWVzc2FnZSwgbGlrZSBicm93c2VyXG5cbiAgICBhd2FpdCB1cGRhdGVTZGtNY3AoKVxuICAgIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBTREsgTUNQIHN0YXRlIHVwZGF0ZWQnKVxuICAgIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdhZnRlcl91cGRhdGVTZGtNY3AnKVxuXG4gICAgLy8gUmVzb2x2ZSBkZWZlcnJlZCBwbHVnaW4gaW5zdGFsbGF0aW9uIChDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMKS5cbiAgICAvLyBUaGUgcHJvbWlzZSB3YXMgc3RhcnRlZCBlYWdlcmx5IHNvIGluc3RhbGxhdGlvbiBvdmVybGFwcyB3aXRoIG90aGVyIGluaXQuXG4gICAgLy8gQXdhaXRpbmcgaGVyZSBndWFyYW50ZWVzIHBsdWdpbnMgYXJlIGF2YWlsYWJsZSBiZWZvcmUgdGhlIGZpcnN0IGFzaygpLlxuICAgIC8vIElmIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTExfVElNRU9VVF9NUyBpcyBzZXQsIHJhY2VzIGFnYWluc3QgdGhhdFxuICAgIC8vIGRlYWRsaW5lIGFuZCBwcm9jZWVkcyB3aXRob3V0IHBsdWdpbnMgb24gdGltZW91dCAobG9nZ2luZyBhbiBlcnJvcikuXG4gICAgaWYgKHBsdWdpbkluc3RhbGxQcm9taXNlKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tIRUFETEVTU10gV2FpdGluZyBmb3Igc3luY2hyb25vdXMgcGx1Z2luIGluc3RhbGxhdGlvbi4uLicpXG4gICAgICBjb25zdCB0aW1lb3V0TXMgPSBwYXJzZUludChcbiAgICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfU1lOQ19QTFVHSU5fSU5TVEFMTF9USU1FT1VUX01TIHx8ICcnLFxuICAgICAgICAxMCxcbiAgICAgIClcbiAgICAgIGlmICh0aW1lb3V0TXMgPiAwKSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzbGVlcCh0aW1lb3V0TXMpLnRoZW4oKCkgPT4gJ3RpbWVvdXQnIGFzIGNvbnN0KVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3BsdWdpbkluc3RhbGxQcm9taXNlLCB0aW1lb3V0XSlcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ3RpbWVvdXQnKSB7XG4gICAgICAgICAgbG9nRXJyb3IoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMOiBwbHVnaW4gaW5zdGFsbGF0aW9uIHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXRNc31tc2AsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc3luY19wbHVnaW5faW5zdGFsbF90aW1lb3V0Jywge1xuICAgICAgICAgICAgdGltZW91dF9tczogdGltZW91dE1zLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHBsdWdpbkluc3RhbGxQcm9taXNlXG4gICAgICB9XG4gICAgICBwbHVnaW5JbnN0YWxsUHJvbWlzZSA9IG51bGxcblxuICAgICAgLy8gUmVmcmVzaCBjb21tYW5kcywgYWdlbnRzLCBhbmQgaG9va3Mgbm93IHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFsbGVkXG4gICAgICBhd2FpdCByZWZyZXNoUGx1Z2luU3RhdGUoKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbSEVBRExFU1NdIFBsdWdpbiBzdGF0ZSByZWZyZXNoZWQgYWZ0ZXIgaW5zdGFsbCcpXG5cbiAgICAgIC8vIFNldCB1cCBob3QtcmVsb2FkIGZvciBwbHVnaW4gaG9va3Mgbm93IHRoYXQgdGhlIGluaXRpYWwgaW5zdGFsbCBpcyBkb25lLlxuICAgICAgLy8gSW4gc3luYy1pbnN0YWxsIG1vZGUsIHNldHVwLnRzIHNraXBzIHRoaXMgdG8gYXZvaWQgcmFjaW5nIHdpdGggdGhlIGluc3RhbGwuXG4gICAgICBjb25zdCB7IHNldHVwUGx1Z2luSG9va0hvdFJlbG9hZCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgICAnLi4vdXRpbHMvcGx1Z2lucy9sb2FkUGx1Z2luSG9va3MuanMnXG4gICAgICApXG4gICAgICBzZXR1cFBsdWdpbkhvb2tIb3RSZWxvYWQoKVxuICAgIH1cblxuICAgIC8vIE9ubHkgbWFpbi10aHJlYWQgY29tbWFuZHMgKGFnZW50SWQ9PT11bmRlZmluZWQpIFx1MjAxNCBzdWJhZ2VudFxuICAgIC8vIG5vdGlmaWNhdGlvbnMgYXJlIGRyYWluZWQgYnkgdGhlIHN1YmFnZW50J3MgbWlkLXR1cm4gZ2F0ZSBpbiBxdWVyeS50cy5cbiAgICAvLyBEZWZpbmVkIG91dHNpZGUgdGhlIHRyeSBibG9jayBzbyBpdCdzIGFjY2Vzc2libGUgaW4gdGhlIHBvc3QtZmluYWxseVxuICAgIC8vIHF1ZXVlIHJlLWNoZWNrcyBhdCB0aGUgYm90dG9tIG9mIHJ1bigpLlxuICAgIGNvbnN0IGlzTWFpblRocmVhZCA9IChjbWQ6IFF1ZXVlZENvbW1hbmQpID0+IGNtZC5hZ2VudElkID09PSB1bmRlZmluZWRcblxuICAgIHRyeSB7XG4gICAgICBsZXQgY29tbWFuZDogUXVldWVkQ29tbWFuZCB8IHVuZGVmaW5lZFxuICAgICAgbGV0IHdhaXRpbmdGb3JBZ2VudHMgPSBmYWxzZVxuXG4gICAgICAvLyBFeHRyYWN0IGNvbW1hbmQgcHJvY2Vzc2luZyBpbnRvIGEgbmFtZWQgZnVuY3Rpb24gZm9yIHRoZSBkby13aGlsZSBwYXR0ZXJuLlxuICAgICAgLy8gRHJhaW5zIHRoZSBxdWV1ZSwgYmF0Y2hpbmcgY29uc2VjdXRpdmUgcHJvbXB0LW1vZGUgY29tbWFuZHMgaW50byBvbmVcbiAgICAgIC8vIGFzaygpIGNhbGwgc28gbWVzc2FnZXMgdGhhdCBxdWV1ZWQgdXAgZHVyaW5nIGEgbG9uZyB0dXJuIGNvYWxlc2NlXG4gICAgICAvLyBpbnRvIGEgc2luZ2xlIGZvbGxvdy11cCB0dXJuIGluc3RlYWQgb2YgTiBzZXBhcmF0ZSB0dXJucy5cbiAgICAgIGNvbnN0IGRyYWluQ29tbWFuZFF1ZXVlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoKGNvbW1hbmQgPSBkZXF1ZXVlKGlzTWFpblRocmVhZCkpKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tbWFuZC5tb2RlICE9PSAncHJvbXB0JyAmJlxuICAgICAgICAgICAgY29tbWFuZC5tb2RlICE9PSAnb3JwaGFuZWQtcGVybWlzc2lvbicgJiZcbiAgICAgICAgICAgIGNvbW1hbmQubW9kZSAhPT0gJ3Rhc2stbm90aWZpY2F0aW9uJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAnb25seSBwcm9tcHQgY29tbWFuZHMgYXJlIHN1cHBvcnRlZCBpbiBzdHJlYW1pbmcgbW9kZScsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm9uLXByb21wdCBjb21tYW5kcyAodGFzay1ub3RpZmljYXRpb24sIG9ycGhhbmVkLXBlcm1pc3Npb24pIGNhcnJ5XG4gICAgICAgICAgLy8gc2lkZSBlZmZlY3RzIG9yIG9ycGhhbmVkUGVybWlzc2lvbiBzdGF0ZSwgc28gdGhleSBwcm9jZXNzIHNpbmdseS5cbiAgICAgICAgICAvLyBQcm9tcHQgY29tbWFuZHMgZ3JlZWRpbHkgY29sbGVjdCBmb2xsb3dlcnMgd2l0aCBtYXRjaGluZyB3b3JrbG9hZC5cbiAgICAgICAgICBjb25zdCBiYXRjaDogUXVldWVkQ29tbWFuZFtdID0gW2NvbW1hbmRdXG4gICAgICAgICAgaWYgKGNvbW1hbmQubW9kZSA9PT0gJ3Byb21wdCcpIHtcbiAgICAgICAgICAgIHdoaWxlIChjYW5CYXRjaFdpdGgoY29tbWFuZCwgcGVlayhpc01haW5UaHJlYWQpKSkge1xuICAgICAgICAgICAgICBiYXRjaC5wdXNoKGRlcXVldWUoaXNNYWluVGhyZWFkKSEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBjb21tYW5kID0ge1xuICAgICAgICAgICAgICAgIC4uLmNvbW1hbmQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGpvaW5Qcm9tcHRWYWx1ZXMoYmF0Y2gubWFwKGMgPT4gYy52YWx1ZSkpLFxuICAgICAgICAgICAgICAgIHV1aWQ6IGJhdGNoLmZpbmRMYXN0KGMgPT4gYy51dWlkKT8udXVpZCA/PyBjb21tYW5kLnV1aWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYmF0Y2hVdWlkcyA9IGJhdGNoLm1hcChjID0+IGMudXVpZCkuZmlsdGVyKHUgPT4gdSAhPT0gdW5kZWZpbmVkKVxuXG4gICAgICAgICAgLy8gUXVlcnlFbmdpbmUgd2lsbCBlbWl0IGEgcmVwbGF5IGZvciBjb21tYW5kLnV1aWQgKHRoZSBsYXN0IHV1aWQgaW5cbiAgICAgICAgICAvLyB0aGUgYmF0Y2gpIHZpYSBpdHMgbWVzc2FnZXNUb0FjayBwYXRoLiBFbWl0IHJlcGxheXMgaGVyZSBmb3IgdGhlXG4gICAgICAgICAgLy8gcmVzdCBzbyBjb25zdW1lcnMgdGhhdCB0cmFjayBwZXItdXVpZCBkZWxpdmVyeSAoY2xhbmsnc1xuICAgICAgICAgIC8vIGFzeW5jTWVzc2FnZXMgZm9vdGVyLCBDQ1IpIHNlZSBhbiBhY2sgZm9yIGV2ZXJ5IG1lc3NhZ2UgdGhleSBzZW50LFxuICAgICAgICAgIC8vIG5vdCBqdXN0IHRoZSBvbmUgdGhhdCBzdXJ2aXZlZCB0aGUgbWVyZ2UuXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVwbGF5VXNlck1lc3NhZ2VzICYmIGJhdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICBpZiAoYy51dWlkICYmIGMudXVpZCAhPT0gY29tbWFuZC51dWlkKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IGMudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdXVpZDogYy51dWlkLFxuICAgICAgICAgICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgU0RLVXNlck1lc3NhZ2VSZXBsYXkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb21iaW5lIGFsbCBNQ1AgY2xpZW50cy4gYXBwU3RhdGUubWNwIGlzIHBvcHVsYXRlZCBpbmNyZW1lbnRhbGx5XG4gICAgICAgICAgLy8gcGVyLXNlcnZlciBieSBtYWluLnRzeCAobWlycm9ycyB1c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucykuIFJlYWRpbmdcbiAgICAgICAgICAvLyBmcmVzaCBwZXItY29tbWFuZCBtZWFucyBsYXRlLWNvbm5lY3Rpbmcgc2VydmVycyBhcmUgdmlzaWJsZSBvbiB0aGVcbiAgICAgICAgICAvLyBuZXh0IHR1cm4uIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyBpcyBpZGVtcG90ZW50ICh0cmFja2luZyBzZXQpLlxuICAgICAgICAgIGNvbnN0IGFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IGFsbE1jcENsaWVudHMgPSBbXG4gICAgICAgICAgICAuLi5hcHBTdGF0ZS5tY3AuY2xpZW50cyxcbiAgICAgICAgICAgIC4uLnNka0NsaWVudHMsXG4gICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUuY2xpZW50cyxcbiAgICAgICAgICBdXG4gICAgICAgICAgcmVnaXN0ZXJFbGljaXRhdGlvbkhhbmRsZXJzKGFsbE1jcENsaWVudHMpXG4gICAgICAgICAgLy8gQ2hhbm5lbCBoYW5kbGVycyBmb3Igc2VydmVycyBhbGxvd2xpc3RlZCB2aWEgLS1jaGFubmVscyBhdFxuICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiB0aW1lIChvciBlbmFibGVDaGFubmVsKCkgbWlkLXNlc3Npb24pLiBSdW5zIGV2ZXJ5XG4gICAgICAgICAgLy8gdHVybiBsaWtlIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyBcdTIwMTQgaWRlbXBvdGVudCBwZXItY2xpZW50XG4gICAgICAgICAgLy8gKHNldE5vdGlmaWNhdGlvbkhhbmRsZXIgcmVwbGFjZXMsIG5vdCBzdGFja3MpIGFuZCBuby1vcHMgZm9yXG4gICAgICAgICAgLy8gbm9uLWFsbG93bGlzdGVkIHNlcnZlcnMgKG9uZSBmZWF0dXJlLWZsYWcgY2hlY2spLlxuICAgICAgICAgIGZvciAoY29uc3QgY2xpZW50IG9mIGFsbE1jcENsaWVudHMpIHtcbiAgICAgICAgICAgIHJlcmVnaXN0ZXJDaGFubmVsSGFuZGxlckFmdGVyUmVjb25uZWN0KGNsaWVudClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBhbGxUb29scyA9IGJ1aWxkQWxsVG9vbHMoYXBwU3RhdGUpXG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHV1aWQgb2YgYmF0Y2hVdWlkcykge1xuICAgICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZSh1dWlkLCAnc3RhcnRlZCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGFzayBub3RpZmljYXRpb25zIGFycml2ZSB3aGVuIGJhY2tncm91bmQgYWdlbnRzIGNvbXBsZXRlLlxuICAgICAgICAgIC8vIEVtaXQgYW4gU0RLIHN5c3RlbSBldmVudCBmb3IgU0RLIGNvbnN1bWVycywgdGhlbiBmYWxsIHRocm91Z2hcbiAgICAgICAgICAvLyB0byBhc2soKSBzbyB0aGUgbW9kZWwgc2VlcyB0aGUgYWdlbnQgcmVzdWx0IGFuZCBjYW4gYWN0IG9uIGl0LlxuICAgICAgICAgIC8vIFRoaXMgbWF0Y2hlcyBUVUkgYmVoYXZpb3Igd2hlcmUgdXNlUXVldWVQcm9jZXNzb3IgYWx3YXlzIGZlZWRzXG4gICAgICAgICAgLy8gbm90aWZpY2F0aW9ucyB0byB0aGUgbW9kZWwgcmVnYXJkbGVzcyBvZiBjb29yZGluYXRvciBtb2RlLlxuICAgICAgICAgIGlmIChjb21tYW5kLm1vZGUgPT09ICd0YXNrLW5vdGlmaWNhdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblRleHQgPVxuICAgICAgICAgICAgICB0eXBlb2YgY29tbWFuZC52YWx1ZSA9PT0gJ3N0cmluZycgPyBjb21tYW5kLnZhbHVlIDogJydcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBYTUwtZm9ybWF0dGVkIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgY29uc3QgdGFza0lkTWF0Y2ggPSBub3RpZmljYXRpb25UZXh0Lm1hdGNoKFxuICAgICAgICAgICAgICAvPHRhc2staWQ+KFtePF0rKTxcXC90YXNrLWlkPi8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB0b29sVXNlSWRNYXRjaCA9IG5vdGlmaWNhdGlvblRleHQubWF0Y2goXG4gICAgICAgICAgICAgIC88dG9vbC11c2UtaWQ+KFtePF0rKTxcXC90b29sLXVzZS1pZD4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0RmlsZU1hdGNoID0gbm90aWZpY2F0aW9uVGV4dC5tYXRjaChcbiAgICAgICAgICAgICAgLzxvdXRwdXQtZmlsZT4oW148XSspPFxcL291dHB1dC1maWxlPi8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNNYXRjaCA9IG5vdGlmaWNhdGlvblRleHQubWF0Y2goXG4gICAgICAgICAgICAgIC88c3RhdHVzPihbXjxdKyk8XFwvc3RhdHVzPi8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5TWF0Y2ggPSBub3RpZmljYXRpb25UZXh0Lm1hdGNoKFxuICAgICAgICAgICAgICAvPHN1bW1hcnk+KFtePF0rKTxcXC9zdW1tYXJ5Pi8sXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTdGF0dXMgPSAoXG4gICAgICAgICAgICAgIHM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICk6IHMgaXMgJ2NvbXBsZXRlZCcgfCAnZmFpbGVkJyB8ICdzdG9wcGVkJyB8ICdraWxsZWQnID0+XG4gICAgICAgICAgICAgIHMgPT09ICdjb21wbGV0ZWQnIHx8XG4gICAgICAgICAgICAgIHMgPT09ICdmYWlsZWQnIHx8XG4gICAgICAgICAgICAgIHMgPT09ICdzdG9wcGVkJyB8fFxuICAgICAgICAgICAgICBzID09PSAna2lsbGVkJ1xuICAgICAgICAgICAgY29uc3QgcmF3U3RhdHVzID0gc3RhdHVzTWF0Y2g/LlsxXVxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gaXNWYWxpZFN0YXR1cyhyYXdTdGF0dXMpXG4gICAgICAgICAgICAgID8gcmF3U3RhdHVzID09PSAna2lsbGVkJ1xuICAgICAgICAgICAgICAgID8gJ3N0b3BwZWQnXG4gICAgICAgICAgICAgICAgOiByYXdTdGF0dXNcbiAgICAgICAgICAgICAgOiAnY29tcGxldGVkJ1xuXG4gICAgICAgICAgICBjb25zdCB1c2FnZU1hdGNoID0gbm90aWZpY2F0aW9uVGV4dC5tYXRjaChcbiAgICAgICAgICAgICAgLzx1c2FnZT4oW1xcc1xcU10qPyk8XFwvdXNhZ2U+LyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHVzYWdlQ29udGVudCA9IHVzYWdlTWF0Y2g/LlsxXSA/PyAnJ1xuICAgICAgICAgICAgY29uc3QgdG90YWxUb2tlbnNNYXRjaCA9IHVzYWdlQ29udGVudC5tYXRjaChcbiAgICAgICAgICAgICAgLzx0b3RhbF90b2tlbnM+KFxcZCspPFxcL3RvdGFsX3Rva2Vucz4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgdG9vbFVzZXNNYXRjaCA9IHVzYWdlQ29udGVudC5tYXRjaChcbiAgICAgICAgICAgICAgLzx0b29sX3VzZXM+KFxcZCspPFxcL3Rvb2xfdXNlcz4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb25Nc01hdGNoID0gdXNhZ2VDb250ZW50Lm1hdGNoKFxuICAgICAgICAgICAgICAvPGR1cmF0aW9uX21zPihcXGQrKTxcXC9kdXJhdGlvbl9tcz4vLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBPbmx5IGVtaXQgYSB0YXNrX25vdGlmaWNhdGlvbiBTREsgZXZlbnQgd2hlbiBhIDxzdGF0dXM+IHRhZyBpc1xuICAgICAgICAgICAgLy8gcHJlc2VudCBcdTIwMTQgdGhhdCBtZWFucyB0aGlzIGlzIGEgdGVybWluYWwgbm90aWZpY2F0aW9uIChjb21wbGV0ZWQvXG4gICAgICAgICAgICAvLyBmYWlsZWQvc3RvcHBlZCkuIFN0cmVhbSBldmVudHMgZnJvbSBlbnF1ZXVlU3RyZWFtRXZlbnQgY2Fycnkgbm9cbiAgICAgICAgICAgIC8vIDxzdGF0dXM+ICh0aGV5J3JlIHByb2dyZXNzIHBpbmdzKTsgZW1pdHRpbmcgdGhlbSBoZXJlIHdvdWxkXG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvICdjb21wbGV0ZWQnIGFuZCBmYWxzZWx5IGNsb3NlIHRoZSB0YXNrIGZvciBTREtcbiAgICAgICAgICAgIC8vIGNvbnN1bWVycy4gVGVybWluYWwgYm9va2VuZHMgYXJlIG5vdyBlbWl0dGVkIGRpcmVjdGx5IHZpYVxuICAgICAgICAgICAgLy8gZW1pdFRhc2tUZXJtaW5hdGVkU2RrLCBzbyBza2lwcGluZyBzdGF0dXNsZXNzIGV2ZW50cyBpcyBzYWZlLlxuICAgICAgICAgICAgaWYgKHN0YXR1c01hdGNoKSB7XG4gICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgICAgICBzdWJ0eXBlOiAndGFza19ub3RpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRhc2tfaWQ6IHRhc2tJZE1hdGNoPy5bMV0gPz8gJycsXG4gICAgICAgICAgICAgICAgdG9vbF91c2VfaWQ6IHRvb2xVc2VJZE1hdGNoPy5bMV0sXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgIG91dHB1dF9maWxlOiBvdXRwdXRGaWxlTWF0Y2g/LlsxXSA/PyAnJyxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiBzdW1tYXJ5TWF0Y2g/LlsxXSA/PyAnJyxcbiAgICAgICAgICAgICAgICB1c2FnZTpcbiAgICAgICAgICAgICAgICAgIHRvdGFsVG9rZW5zTWF0Y2ggJiYgdG9vbFVzZXNNYXRjaFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX3Rva2VuczogcGFyc2VJbnQodG90YWxUb2tlbnNNYXRjaFsxXSEsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xfdXNlczogcGFyc2VJbnQodG9vbFVzZXNNYXRjaFsxXSEsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbk1zTWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludChkdXJhdGlvbk1zTWF0Y2hbMV0hLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gY29udGludWUgLS0gZmFsbCB0aHJvdWdoIHRvIGFzaygpIHNvIHRoZSBtb2RlbCBwcm9jZXNzZXMgdGhlIHJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gY29tbWFuZC52YWx1ZVxuXG4gICAgICAgICAgaWYgKHN0cnVjdHVyZWRJTyBpbnN0YW5jZW9mIFJlbW90ZUlPICYmIGNvbW1hbmQubW9kZSA9PT0gJ3Byb21wdCcpIHtcbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfbWVzc2FnZV9yZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICAgaXNfcmVwbDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFib3J0IGFueSBpbi1mbGlnaHQgc3VnZ2VzdGlvbiBnZW5lcmF0aW9uIGFuZCB0cmFjayBhY2NlcHRhbmNlXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmFib3J0Q29udHJvbGxlcj8uYWJvcnQoKVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdTdWdnZXN0aW9uID0gbnVsbFxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nTGFzdEVtaXR0ZWRFbnRyeSA9IG51bGxcbiAgICAgICAgICBpZiAoc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkKSB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5tb2RlID09PSAncHJvbXB0Jykge1xuICAgICAgICAgICAgICAvLyBTREsgdXNlciBtZXNzYWdlcyBlbnF1ZXVlIENvbnRlbnRCbG9ja1BhcmFtW10sIG5vdCBhIHBsYWluIHN0cmluZ1xuICAgICAgICAgICAgICBjb25zdCBpbnB1dFRleHQgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgID8gaW5wdXRcbiAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmZpbmQoYiA9PiBiLnR5cGUgPT09ICd0ZXh0JykgYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgeyB0eXBlOiAndGV4dCc7IHRleHQ6IHN0cmluZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICApPy50ZXh0XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXRUZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGxvZ1N1Z2dlc3Rpb25PdXRjb21lKFxuICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkLnRleHQsXG4gICAgICAgICAgICAgICAgICBpbnB1dFRleHQsXG4gICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUubGFzdEVtaXR0ZWQuZW1pdHRlZEF0LFxuICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkLnByb21wdElkLFxuICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkLmdlbmVyYXRpb25SZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZCA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhYm9ydENvbnRyb2xsZXIgPSBjcmVhdGVBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgIGNvbnN0IHR1cm5TdGFydFRpbWUgPSBmZWF0dXJlKCdGSUxFX1BFUlNJU1RFTkNFJylcbiAgICAgICAgICAgID8gRGF0ZS5ub3coKVxuICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdiZWZvcmVfYXNrJylcbiAgICAgICAgICBzdGFydFF1ZXJ5UHJvZmlsZSgpXG4gICAgICAgICAgLy8gUGVyLWl0ZXJhdGlvbiBBTFMgY29udGV4dCBzbyBiZyBhZ2VudHMgc3Bhd25lZCBpbnNpZGUgYXNrKClcbiAgICAgICAgICAvLyBpbmhlcml0IHdvcmtsb2FkIGFjcm9zcyB0aGVpciBkZXRhY2hlZCBhd2FpdHMuIEluLXByb2Nlc3MgY3JvblxuICAgICAgICAgIC8vIHN0YW1wcyBjbWQud29ya2xvYWQ7IHRoZSBTREsgLS13b3JrbG9hZCBmbGFnIGlzIG9wdGlvbnMud29ya2xvYWQuXG4gICAgICAgICAgLy8gY29uc3QtY2FwdHVyZTogVFMgbG9zZXMgYHdoaWxlICgoY29tbWFuZCA9IGRlcXVldWUoKSkpYCBuYXJyb3dpbmdcbiAgICAgICAgICAvLyBpbnNpZGUgdGhlIGNsb3N1cmUuXG4gICAgICAgICAgY29uc3QgY21kID0gY29tbWFuZFxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW0hFQURMRVNTXSBTdGFydGluZyBhc2soKSBmb3IgY29tbWFuZCBtb2RlPSR7Y21kLm1vZGV9IHV1aWQ9JHtjbWQudXVpZCA/PyAnbm9uZSd9YClcbiAgICAgICAgICBhd2FpdCBydW5XaXRoV29ya2xvYWQoY21kLndvcmtsb2FkID8/IG9wdGlvbnMud29ya2xvYWQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBhc2soe1xuICAgICAgICAgICAgICBjb21tYW5kczogdW5pcUJ5KFxuICAgICAgICAgICAgICAgIFsuLi5jdXJyZW50Q29tbWFuZHMsIC4uLmFwcFN0YXRlLm1jcC5jb21tYW5kc10sXG4gICAgICAgICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBwcm9tcHQ6IGlucHV0LFxuICAgICAgICAgICAgICBwcm9tcHRVdWlkOiBjbWQudXVpZCxcbiAgICAgICAgICAgICAgaXNNZXRhOiBjbWQuaXNNZXRhLFxuICAgICAgICAgICAgICBjd2Q6IGN3ZCgpLFxuICAgICAgICAgICAgICB0b29sczogYWxsVG9vbHMsXG4gICAgICAgICAgICAgIHZlcmJvc2U6IG9wdGlvbnMudmVyYm9zZSxcbiAgICAgICAgICAgICAgbWNwQ2xpZW50czogYWxsTWNwQ2xpZW50cyxcbiAgICAgICAgICAgICAgdGhpbmtpbmdDb25maWc6IG9wdGlvbnMudGhpbmtpbmdDb25maWcsXG4gICAgICAgICAgICAgIG1heFR1cm5zOiBvcHRpb25zLm1heFR1cm5zLFxuICAgICAgICAgICAgICBtYXhCdWRnZXRVc2Q6IG9wdGlvbnMubWF4QnVkZ2V0VXNkLFxuICAgICAgICAgICAgICB0YXNrQnVkZ2V0OiBvcHRpb25zLnRhc2tCdWRnZXQsXG4gICAgICAgICAgICAgIGNhblVzZVRvb2wsXG4gICAgICAgICAgICAgIHVzZXJTcGVjaWZpZWRNb2RlbDogYWN0aXZlVXNlclNwZWNpZmllZE1vZGVsLFxuICAgICAgICAgICAgICBmYWxsYmFja01vZGVsOiBvcHRpb25zLmZhbGxiYWNrTW9kZWwsXG4gICAgICAgICAgICAgIGpzb25TY2hlbWE6IGdldEluaXRKc29uU2NoZW1hKCkgPz8gb3B0aW9ucy5qc29uU2NoZW1hLFxuICAgICAgICAgICAgICBtdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgICAgICAgIGdldFJlYWRGaWxlQ2FjaGU6ICgpID0+XG4gICAgICAgICAgICAgICAgcGVuZGluZ1NlZWRzLnNpemUgPT09IDBcbiAgICAgICAgICAgICAgICAgID8gcmVhZEZpbGVTdGF0ZVxuICAgICAgICAgICAgICAgICAgOiBtZXJnZUZpbGVTdGF0ZUNhY2hlcyhyZWFkRmlsZVN0YXRlLCBwZW5kaW5nU2VlZHMpLFxuICAgICAgICAgICAgICBzZXRSZWFkRmlsZUNhY2hlOiBjYWNoZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVhZEZpbGVTdGF0ZSA9IGNhY2hlXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbcGF0aCwgc2VlZF0gb2YgcGVuZGluZ1NlZWRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSByZWFkRmlsZVN0YXRlLmdldChwYXRoKVxuICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZyB8fCBzZWVkLnRpbWVzdGFtcCA+IGV4aXN0aW5nLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICByZWFkRmlsZVN0YXRlLnNldChwYXRoLCBzZWVkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZW5kaW5nU2VlZHMuY2xlYXIoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuc3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuYXBwZW5kU3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcixcbiAgICAgICAgICAgICAgcmVwbGF5VXNlck1lc3NhZ2VzOiBvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcyxcbiAgICAgICAgICAgICAgaW5jbHVkZVBhcnRpYWxNZXNzYWdlczogb3B0aW9ucy5pbmNsdWRlUGFydGlhbE1lc3NhZ2VzLFxuICAgICAgICAgICAgICBoYW5kbGVFbGljaXRhdGlvbjogKHNlcnZlck5hbWUsIHBhcmFtcywgZWxpY2l0U2lnbmFsKSA9PlxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZWRJTy5oYW5kbGVFbGljaXRhdGlvbihcbiAgICAgICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGVsaWNpdFNpZ25hbCxcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5tb2RlLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICAgICdlbGljaXRhdGlvbklkJyBpbiBwYXJhbXMgPyBwYXJhbXMuZWxpY2l0YXRpb25JZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhZ2VudHM6IGN1cnJlbnRBZ2VudHMsXG4gICAgICAgICAgICAgIG9ycGhhbmVkUGVybWlzc2lvbjogY21kLm9ycGhhbmVkUGVybWlzc2lvbixcbiAgICAgICAgICAgICAgc2V0U0RLU3RhdHVzOiBzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgICAgICAgICAgICAgICAgc3VidHlwZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgLy8gRm9yd2FyZCBtZXNzYWdlcyB0byBicmlkZ2UgaW5jcmVtZW50YWxseSAobWlkLXR1cm4pIHNvXG4gICAgICAgICAgICAgIC8vIGNsYXVkZS5haSBzZWVzIHByb2dyZXNzIGFuZCB0aGUgY29ubmVjdGlvbiBzdGF5cyBhbGl2ZVxuICAgICAgICAgICAgICAvLyB3aGlsZSBibG9ja2VkIG9uIHBlcm1pc3Npb24gcmVxdWVzdHMuXG4gICAgICAgICAgICAgIGZvcndhcmRNZXNzYWdlc1RvQnJpZGdlKClcblxuICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAncmVzdWx0Jykge1xuICAgICAgICAgICAgICAgIC8vIEZsdXNoIHBlbmRpbmcgU0RLIGV2ZW50cyBzbyB0aGV5IGFwcGVhciBiZWZvcmUgcmVzdWx0IG9uIHRoZSBzdHJlYW0uXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBkcmFpblNka0V2ZW50cygpKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShldmVudClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIb2xkLWJhY2s6IGRvbid0IGVtaXQgcmVzdWx0IHdoaWxlIGJhY2tncm91bmQgYWdlbnRzIGFyZSBydW5uaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJ1bm5pbmdUYXNrcyhjdXJyZW50U3RhdGUpLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAodC50eXBlID09PSAnbG9jYWxfYWdlbnQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnR5cGUgPT09ICdsb2NhbF93b3JrZmxvdycpICYmXG4gICAgICAgICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kVGFzayh0KSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGhlbGRCYWNrUmVzdWx0ID0gbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBoZWxkQmFja1Jlc3VsdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZsdXNoIFNESyBldmVudHMgKHRhc2tfc3RhcnRlZCwgdGFza19wcm9ncmVzcykgc28gYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIC8vIGFnZW50IHByb2dyZXNzIGlzIHN0cmVhbWVkIGluIHJlYWwtdGltZSwgbm90IGJhdGNoZWQgdW50aWwgcmVzdWx0LlxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZHJhaW5TZGtFdmVudHMoKSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSAvLyBlbmQgcnVuV2l0aFdvcmtsb2FkXG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHV1aWQgb2YgYmF0Y2hVdWlkcykge1xuICAgICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZSh1dWlkLCAnY29tcGxldGVkJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGb3J3YXJkIG1lc3NhZ2VzIHRvIGJyaWRnZSBhZnRlciBlYWNoIHR1cm5cbiAgICAgICAgICBmb3J3YXJkTWVzc2FnZXNUb0JyaWRnZSgpXG4gICAgICAgICAgYnJpZGdlSGFuZGxlPy5zZW5kUmVzdWx0KClcblxuICAgICAgICAgIGlmIChmZWF0dXJlKCdGSUxFX1BFUlNJU1RFTkNFJykgJiYgdHVyblN0YXJ0VGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2b2lkIGV4ZWN1dGVGaWxlUGVyc2lzdGVuY2UoXG4gICAgICAgICAgICAgIHR1cm5TdGFydFRpbWUsXG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgICBzdWJ0eXBlOiAnZmlsZXNfcGVyc2lzdGVkJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgIGZpbGVzOiByZXN1bHQuZmlsZXMsXG4gICAgICAgICAgICAgICAgICBmYWlsZWQ6IHJlc3VsdC5mYWlsZWQsXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gR2VuZXJhdGUgYW5kIGVtaXQgcHJvbXB0IHN1Z2dlc3Rpb24gZm9yIFNESyBjb25zdW1lcnNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcHRpb25zLnByb21wdFN1Z2dlc3Rpb25zICYmXG4gICAgICAgICAgICAhaXNFbnZEZWZpbmVkRmFsc3kocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5BQkxFX1BST01QVF9TVUdHRVNUSU9OKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gVFMgbmFycm93cyBzdWdnZXN0aW9uU3RhdGUgdG8gbmV2ZXIgaW4gdGhlIHdoaWxlIGxvb3AgYm9keTtcbiAgICAgICAgICAgIC8vIGNhc3QgdmlhIHVua25vd24gdG8gcmVzZXQgbmFycm93aW5nLlxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdWdnZXN0aW9uU3RhdGUgYXMgdW5rbm93biBhcyB0eXBlb2Ygc3VnZ2VzdGlvblN0YXRlXG4gICAgICAgICAgICBzdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBsb2NhbEFib3J0XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlU2FmZVBhcmFtcyA9IGdldExhc3RDYWNoZVNhZmVQYXJhbXMoKVxuICAgICAgICAgICAgaWYgKCFjYWNoZVNhZmVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQoXG4gICAgICAgICAgICAgICAgJ3Nka19ub19wYXJhbXMnLFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJ3NkaycsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFVzZSBhIHJlZiBvYmplY3Qgc28gdGhlIElJRkUncyBmaW5hbGx5IGNhbiBjb21wYXJlIGFnYWluc3QgaXRzIG93blxuICAgICAgICAgICAgICAvLyBwcm9taXNlIHdpdGhvdXQgYSBzZWxmLXJlZmVyZW5jZSAod2hpY2ggdXBzZXRzIFR5cGVTY3JpcHQncyBmbG93IGFuYWx5c2lzKS5cbiAgICAgICAgICAgICAgY29uc3QgcmVmOiB7IHByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsIH0gPSB7IHByb21pc2U6IG51bGwgfVxuICAgICAgICAgICAgICByZWYucHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyeUdlbmVyYXRlU3VnZ2VzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxBYm9ydCxcbiAgICAgICAgICAgICAgICAgICAgbXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVTYWZlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAnc2RrJyxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IGxvY2FsQWJvcnQuc2lnbmFsLmFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbk1zZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb21wdF9zdWdnZXN0aW9uJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogcmVzdWx0LnN1Z2dlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYXN0RW1pdHRlZEVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXN1bHQuc3VnZ2VzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRJZDogcmVzdWx0LnByb21wdElkLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uUmVxdWVzdElkOiByZXN1bHQuZ2VuZXJhdGlvblJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIERlZmVyIGVtaXNzaW9uIGlmIHRoZSByZXN1bHQgaXMgYmVpbmcgaGVsZCBmb3IgYmFja2dyb3VuZCBhZ2VudHMsXG4gICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHByb21wdF9zdWdnZXN0aW9uIGFsd2F5cyBhcnJpdmVzIGFmdGVyIHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgIC8vIE9ubHkgc2V0IGxhc3RFbWl0dGVkIHdoZW4gdGhlIHN1Z2dlc3Rpb24gaXMgYWN0dWFsbHkgZGVsaXZlcmVkXG4gICAgICAgICAgICAgICAgICAvLyB0byB0aGUgY29uc3VtZXI7IGRlZmVycmVkIHN1Z2dlc3Rpb25zIG1heSBiZSBkaXNjYXJkZWQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAvLyBkZWxpdmVyeSBpZiBhIG5ldyBjb21tYW5kIGFycml2ZXMgZmlyc3QuXG4gICAgICAgICAgICAgICAgICBpZiAoaGVsZEJhY2tSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdTdWdnZXN0aW9uID0gc3VnZ2VzdGlvbk1zZ1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogbGFzdEVtaXR0ZWRFbnRyeS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHByb21wdElkOiBsYXN0RW1pdHRlZEVudHJ5LnByb21wdElkLFxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb25SZXF1ZXN0SWQ6IGxhc3RFbWl0dGVkRW50cnkuZ2VuZXJhdGlvblJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkID0gbGFzdEVtaXR0ZWRFbnRyeVxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShzdWdnZXN0aW9uTXNnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJyB8fFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yLm5hbWUgPT09ICdBUElVc2VyQWJvcnRFcnJvcicpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQoXG4gICAgICAgICAgICAgICAgICAgICAgJ2Fib3J0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgJ3NkaycsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsb2dFcnJvcih0b0Vycm9yKGVycm9yKSlcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPT09IHJlZi5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPSByZWYucHJvbWlzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExvZyBoZWFkbGVzcyBwcm9maWxlciBtZXRyaWNzIGZvciB0aGlzIHR1cm4gYW5kIHN0YXJ0IG5leHQgdHVyblxuICAgICAgICAgIGxvZ0hlYWRsZXNzUHJvZmlsZXJUdXJuKClcbiAgICAgICAgICBsb2dRdWVyeVByb2ZpbGVSZXBvcnQoKVxuICAgICAgICAgIGhlYWRsZXNzUHJvZmlsZXJTdGFydFR1cm4oKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVzZSBhIGRvLXdoaWxlIGxvb3AgdG8gZHJhaW4gY29tbWFuZHMgYW5kIHRoZW4gd2FpdCBmb3IgYW55XG4gICAgICAvLyBiYWNrZ3JvdW5kIGFnZW50cyB0aGF0IGFyZSBzdGlsbCBydW5uaW5nLiBXaGVuIGFnZW50cyBjb21wbGV0ZSxcbiAgICAgIC8vIHRoZWlyIG5vdGlmaWNhdGlvbnMgYXJlIGVucXVldWVkIGFuZCB0aGUgbG9vcCByZS1kcmFpbnMuXG4gICAgICBkbyB7XG4gICAgICAgIC8vIERyYWluIFNESyBldmVudHMgKHRhc2tfc3RhcnRlZCwgdGFza19wcm9ncmVzcykgYmVmb3JlIGNvbW1hbmQgcXVldWVcbiAgICAgICAgLy8gc28gcHJvZ3Jlc3MgZXZlbnRzIHByZWNlZGUgdGFza19ub3RpZmljYXRpb24gb24gdGhlIHN0cmVhbS5cbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBkcmFpblNka0V2ZW50cygpKSB7XG4gICAgICAgICAgb3V0cHV0LmVucXVldWUoZXZlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBydW5QaGFzZSA9ICdkcmFpbmluZ19jb21tYW5kcydcbiAgICAgICAgYXdhaXQgZHJhaW5Db21tYW5kUXVldWUoKVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBydW5uaW5nIGJhY2tncm91bmQgdGFza3MgYmVmb3JlIGV4aXRpbmcuXG4gICAgICAgIC8vIEV4Y2x1ZGUgaW5fcHJvY2Vzc190ZWFtbWF0ZSBcdTIwMTQgdGVhbW1hdGVzIGFyZSBsb25nLWxpdmVkIGJ5IGRlc2lnblxuICAgICAgICAvLyAoc3RhdHVzOiAncnVubmluZycgZm9yIHRoZWlyIHdob2xlIGxpZmV0aW1lLCBjbGVhbmVkIHVwIGJ5IHRoZVxuICAgICAgICAvLyBzaHV0ZG93biBwcm90b2NvbCwgbm90IGJ5IHRyYW5zaXRpb25pbmcgdG8gJ2NvbXBsZXRlZCcpLiBXYWl0aW5nXG4gICAgICAgIC8vIG9uIHRoZW0gaGVyZSBsb29wcyBmb3JldmVyIChnaC0zMDAwOCkuIFNhbWUgZXhjbHVzaW9uIGFscmVhZHlcbiAgICAgICAgLy8gZXhpc3RzIGF0IHVzZUJhY2tncm91bmRUYXNrTmF2aWdhdGlvbi50czo1NSBmb3IgdGhlIHNhbWUgcmVhc29uO1xuICAgICAgICAvLyBMMTgzOSBhYm92ZSBpcyBhbHJlYWR5IG5hcnJvd2VyICh0eXBlID09PSAnbG9jYWxfYWdlbnQnKSBzbyBpdFxuICAgICAgICAvLyBkb2Vzbid0IGhpdCB0aGlzLlxuICAgICAgICB3YWl0aW5nRm9yQWdlbnRzID0gZmFsc2VcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IGhhc1J1bm5pbmdCZyA9IGdldFJ1bm5pbmdUYXNrcyhzdGF0ZSkuc29tZShcbiAgICAgICAgICAgIHQgPT4gaXNCYWNrZ3JvdW5kVGFzayh0KSAmJiB0LnR5cGUgIT09ICdpbl9wcm9jZXNzX3RlYW1tYXRlJyxcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgaGFzTWFpblRocmVhZFF1ZXVlZCA9IHBlZWsoaXNNYWluVGhyZWFkKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgaWYgKGhhc1J1bm5pbmdCZyB8fCBoYXNNYWluVGhyZWFkUXVldWVkKSB7XG4gICAgICAgICAgICB3YWl0aW5nRm9yQWdlbnRzID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKCFoYXNNYWluVGhyZWFkUXVldWVkKSB7XG4gICAgICAgICAgICAgIHJ1blBoYXNlID0gJ3dhaXRpbmdfZm9yX2FnZW50cydcbiAgICAgICAgICAgICAgLy8gTm8gY29tbWFuZHMgcmVhZHkgeWV0LCB3YWl0IGZvciB0YXNrcyB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIGJhY2sgdG8gZHJhaW4gYW55IG5ld2x5IHF1ZXVlZCBjb21tYW5kc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAod2FpdGluZ0ZvckFnZW50cylcblxuICAgICAgaWYgKGhlbGRCYWNrUmVzdWx0KSB7XG4gICAgICAgIG91dHB1dC5lbnF1ZXVlKGhlbGRCYWNrUmVzdWx0KVxuICAgICAgICBoZWxkQmFja1Jlc3VsdCA9IG51bGxcbiAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbikge1xuICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbilcbiAgICAgICAgICAvLyBOb3cgdGhhdCB0aGUgc3VnZ2VzdGlvbiBpcyBhY3R1YWxseSBkZWxpdmVyZWQsIHJlY29yZCBpdCBmb3IgYWNjZXB0YW5jZSB0cmFja2luZ1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkpIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZCA9IHtcbiAgICAgICAgICAgICAgLi4uc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdMYXN0RW1pdHRlZEVudHJ5LFxuICAgICAgICAgICAgICBlbWl0dGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbiA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIHJlc3VsdCBtZXNzYWdlIGJlZm9yZSBzaHV0dGluZyBkb3duXG4gICAgICAvLyBXcml0ZSBkaXJlY3RseSB0byBzdHJ1Y3R1cmVkSU8gdG8gZW5zdXJlIGltbWVkaWF0ZSBkZWxpdmVyeVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc3RydWN0dXJlZElPLndyaXRlKHtcbiAgICAgICAgICB0eXBlOiAncmVzdWx0JyxcbiAgICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfZHVyaW5nX2V4ZWN1dGlvbicsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IDAsXG4gICAgICAgICAgZHVyYXRpb25fYXBpX21zOiAwLFxuICAgICAgICAgIGlzX2Vycm9yOiB0cnVlLFxuICAgICAgICAgIG51bV90dXJuczogMCxcbiAgICAgICAgICBzdG9wX3JlYXNvbjogbnVsbCxcbiAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogMCxcbiAgICAgICAgICB1c2FnZTogRU1QVFlfVVNBR0UsXG4gICAgICAgICAgbW9kZWxVc2FnZToge30sXG4gICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiBbXSxcbiAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UoZXJyb3IpLFxuICAgICAgICAgICAgLi4uZ2V0SW5NZW1vcnlFcnJvcnMoKS5tYXAoXyA9PiBfLmVycm9yKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGVtaXQgdGhlIGVycm9yIHJlc3VsdCwgY29udGludWUgd2l0aCBzaHV0ZG93biBhbnl3YXlcbiAgICAgIH1cbiAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm5cbiAgICB9IGZpbmFsbHkge1xuICAgICAgcnVuUGhhc2UgPSAnZmluYWxseV9mbHVzaCdcbiAgICAgIC8vIEZsdXNoIHBlbmRpbmcgaW50ZXJuYWwgZXZlbnRzIGJlZm9yZSBnb2luZyBpZGxlXG4gICAgICBhd2FpdCBzdHJ1Y3R1cmVkSU8uZmx1c2hJbnRlcm5hbEV2ZW50cygpXG4gICAgICBydW5QaGFzZSA9ICdmaW5hbGx5X3Bvc3RfZmx1c2gnXG4gICAgICBpZiAoIWlzU2h1dHRpbmdEb3duKCkpIHtcbiAgICAgICAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCgnaWRsZScpXG4gICAgICAgIC8vIERyYWluIHNvIHRoZSBpZGxlIHNlc3Npb25fc3RhdGVfY2hhbmdlZCBTREsgZXZlbnQgKHBsdXMgYW55XG4gICAgICAgIC8vIHRlcm1pbmFsIHRhc2tfbm90aWZpY2F0aW9uIGJvb2tlbmRzIGVtaXR0ZWQgZHVyaW5nIGJnLWFnZW50XG4gICAgICAgIC8vIHRlYXJkb3duKSByZWFjaCB0aGUgb3V0cHV0IHN0cmVhbSBiZWZvcmUgd2UgYmxvY2sgb24gdGhlIG5leHRcbiAgICAgICAgLy8gY29tbWFuZC4gVGhlIGRvLXdoaWxlIGRyYWluIGFib3ZlIG9ubHkgcnVucyB3aGlsZVxuICAgICAgICAvLyB3YWl0aW5nRm9yQWdlbnRzOyBvbmNlIHdlJ3JlIGhlcmUgdGhlIG5leHQgZHJhaW4gd291bGQgYmUgdGhlXG4gICAgICAgIC8vIHRvcCBvZiB0aGUgbmV4dCBydW4oKSwgd2hpY2ggd29uJ3QgY29tZSBpZiBpbnB1dCBpcyBpZGxlLlxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGRyYWluU2RrRXZlbnRzKCkpIHtcbiAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcnVubmluZyA9IGZhbHNlXG4gICAgICAvLyBTdGFydCBpZGxlIHRpbWVyIHdoZW4gd2UgZmluaXNoIHByb2Nlc3NpbmcgYW5kIGFyZSB3YWl0aW5nIGZvciBpbnB1dFxuICAgICAgaWRsZVRpbWVvdXQuc3RhcnQoKVxuICAgIH1cblxuICAgIC8vIFByb2FjdGl2ZSB0aWNrOiBpZiBwcm9hY3RpdmUgaXMgYWN0aXZlIGFuZCBxdWV1ZSBpcyBlbXB0eSwgaW5qZWN0IGEgdGlja1xuICAgIGlmIChcbiAgICAgIChmZWF0dXJlKCdQUk9BQ1RJVkUnKSB8fCBmZWF0dXJlKCdLQUlST1MnKSkgJiZcbiAgICAgIHByb2FjdGl2ZU1vZHVsZT8uaXNQcm9hY3RpdmVBY3RpdmUoKSAmJlxuICAgICAgIXByb2FjdGl2ZU1vZHVsZS5pc1Byb2FjdGl2ZVBhdXNlZCgpXG4gICAgKSB7XG4gICAgICBpZiAocGVlayhpc01haW5UaHJlYWQpID09PSB1bmRlZmluZWQgJiYgIWlucHV0Q2xvc2VkKSB7XG4gICAgICAgIHNjaGVkdWxlUHJvYWN0aXZlVGljayEoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZS1jaGVjayB0aGUgcXVldWUgYWZ0ZXIgcmVsZWFzaW5nIHRoZSBtdXRleC4gQSBtZXNzYWdlIG1heSBoYXZlXG4gICAgLy8gYXJyaXZlZCAoYW5kIGNhbGxlZCBydW4oKSkgYmV0d2VlbiB0aGUgbGFzdCBkZXF1ZXVlKCkgcmV0dXJuaW5nXG4gICAgLy8gdW5kZWZpbmVkIGFuZCBgcnVubmluZyA9IGZhbHNlYCBhYm92ZS4gSW4gdGhhdCBjYXNlIHRoZSBjYWxsZXJcbiAgICAvLyBzYXcgYHJ1bm5pbmcgPT09IHRydWVgIGFuZCByZXR1cm5lZCBpbW1lZGlhdGVseSwgbGVhdmluZyB0aGVcbiAgICAvLyBtZXNzYWdlIHN0cmFuZGVkIGluIHRoZSBxdWV1ZSB3aXRoIG5vIG9uZSB0byBwcm9jZXNzIGl0LlxuICAgIGlmIChwZWVrKGlzTWFpblRocmVhZCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdm9pZCBydW4oKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHVucmVhZCB0ZWFtbWF0ZSBtZXNzYWdlcyBhbmQgcHJvY2VzcyB0aGVtXG4gICAgLy8gVGhpcyBtaXJyb3JzIHdoYXQgdXNlSW5ib3hQb2xsZXIgZG9lcyBpbiBpbnRlcmFjdGl2ZSBSRVBMIG1vZGVcbiAgICAvLyBQb2xsIHVudGlsIG5vIG1vcmUgbWVzc2FnZXMgKHRlYW1tYXRlcyBtYXkgc3RpbGwgYmUgd29ya2luZylcbiAgICB7XG4gICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICBjb25zdCB0ZWFtQ29udGV4dCA9IGN1cnJlbnRBcHBTdGF0ZS50ZWFtQ29udGV4dFxuXG4gICAgICBpZiAodGVhbUNvbnRleHQgJiYgaXNUZWFtTGVhZCh0ZWFtQ29udGV4dCkpIHtcbiAgICAgICAgY29uc3QgYWdlbnROYW1lID0gJ3RlYW0tbGVhZCdcblxuICAgICAgICAvLyBQb2xsIGZvciBtZXNzYWdlcyB3aGlsZSB0ZWFtbWF0ZXMgYXJlIGFjdGl2ZVxuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRlYW1tYXRlcyBtYXkgc2VuZCBtZXNzYWdlcyB3aGlsZSB3ZSdyZSB3YWl0aW5nXG4gICAgICAgIC8vIEtlZXAgcG9sbGluZyB1bnRpbCB0aGUgdGVhbSBpcyBzaHV0IGRvd25cbiAgICAgICAgY29uc3QgUE9MTF9JTlRFUlZBTF9NUyA9IDUwMFxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGVhbW1hdGVzIGFyZSBzdGlsbCBhY3RpdmVcbiAgICAgICAgICBjb25zdCByZWZyZXNoZWRTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgICBjb25zdCBoYXNBY3RpdmVUZWFtbWF0ZXMgPVxuICAgICAgICAgICAgaGFzQWN0aXZlSW5Qcm9jZXNzVGVhbW1hdGVzKHJlZnJlc2hlZFN0YXRlKSB8fFxuICAgICAgICAgICAgKHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0ICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0LnRlYW1tYXRlcykubGVuZ3RoID4gMClcblxuICAgICAgICAgIGlmICghaGFzQWN0aXZlVGVhbW1hdGVzKSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICdbcHJpbnQudHNdIE5vIG1vcmUgYWN0aXZlIHRlYW1tYXRlcywgc3RvcHBpbmcgcG9sbCcsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVucmVhZCA9IGF3YWl0IHJlYWRVbnJlYWRNZXNzYWdlcyhcbiAgICAgICAgICAgIGFnZW50TmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0Py50ZWFtTmFtZSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAodW5yZWFkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtwcmludC50c10gVGVhbS1sZWFkIGZvdW5kICR7dW5yZWFkLmxlbmd0aH0gdW5yZWFkIG1lc3NhZ2VzYCxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gTWFyayBhcyByZWFkIGltbWVkaWF0ZWx5IHRvIGF2b2lkIGR1cGxpY2F0ZSBwcm9jZXNzaW5nXG4gICAgICAgICAgICBhd2FpdCBtYXJrTWVzc2FnZXNBc1JlYWQoXG4gICAgICAgICAgICAgIGFnZW50TmFtZSxcbiAgICAgICAgICAgICAgcmVmcmVzaGVkU3RhdGUudGVhbUNvbnRleHQ/LnRlYW1OYW1lLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHNodXRkb3duX2FwcHJvdmVkIG1lc3NhZ2VzIC0gcmVtb3ZlIHRlYW1tYXRlcyBmcm9tIHRlYW0gZmlsZVxuICAgICAgICAgICAgLy8gVGhpcyBtaXJyb3JzIHdoYXQgdXNlSW5ib3hQb2xsZXIgZG9lcyBpbiBpbnRlcmFjdGl2ZSBtb2RlIChsaW5lcyA1NDYtNjA2KVxuICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSByZWZyZXNoZWRTdGF0ZS50ZWFtQ29udGV4dD8udGVhbU5hbWVcbiAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB1bnJlYWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2h1dGRvd25BcHByb3ZhbCA9IGlzU2h1dGRvd25BcHByb3ZlZChtLnRleHQpXG4gICAgICAgICAgICAgIGlmIChzaHV0ZG93bkFwcHJvdmFsICYmIHRlYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbW1hdGVUb1JlbW92ZSA9IHNodXRkb3duQXBwcm92YWwuZnJvbVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbcHJpbnQudHNdIFByb2Nlc3Npbmcgc2h1dGRvd25fYXBwcm92ZWQgZnJvbSAke3RlYW1tYXRlVG9SZW1vdmV9YCxcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB0ZWFtbWF0ZSBJRCBieSBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbW1hdGVJZCA9IHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0Py50ZWFtbWF0ZXNcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmVudHJpZXMocmVmcmVzaGVkU3RhdGUudGVhbUNvbnRleHQudGVhbW1hdGVzKS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgIChbLCB0XSkgPT4gdC5uYW1lID09PSB0ZWFtbWF0ZVRvUmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICApPy5bMF1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgICAgICBpZiAodGVhbW1hdGVJZCkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGVhbSBmaWxlXG4gICAgICAgICAgICAgICAgICByZW1vdmVUZWFtbWF0ZUZyb21UZWFtRmlsZSh0ZWFtTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBhZ2VudElkOiB0ZWFtbWF0ZUlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZWFtbWF0ZVRvUmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgYFtwcmludC50c10gUmVtb3ZlZCAke3RlYW1tYXRlVG9SZW1vdmV9IGZyb20gdGVhbSBmaWxlYCxcbiAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgLy8gVW5hc3NpZ24gdGFza3Mgb3duZWQgYnkgdGhpcyB0ZWFtbWF0ZVxuICAgICAgICAgICAgICAgICAgYXdhaXQgdW5hc3NpZ25UZWFtbWF0ZVRhc2tzKFxuICAgICAgICAgICAgICAgICAgICB0ZWFtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVUb1JlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgJ3NodXRkb3duJyxcbiAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGVhbUNvbnRleHQgaW4gQXBwU3RhdGVcbiAgICAgICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXYudGVhbUNvbnRleHQ/LnRlYW1tYXRlcykgcmV0dXJuIHByZXZcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGVhbW1hdGVJZCBpbiBwcmV2LnRlYW1Db250ZXh0LnRlYW1tYXRlcykpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgW3RlYW1tYXRlSWRdOiBfLCAuLi5yZW1haW5pbmdUZWFtbWF0ZXMgfSA9XG4gICAgICAgICAgICAgICAgICAgICAgcHJldi50ZWFtQ29udGV4dC50ZWFtbWF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgIHRlYW1Db250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LnRlYW1Db250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVzOiByZW1haW5pbmdUZWFtbWF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9ybWF0IG1lc3NhZ2VzIHNhbWUgYXMgdXNlSW5ib3hQb2xsZXJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHVucmVhZFxuICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgIChtOiB7IGZyb206IHN0cmluZzsgdGV4dDogc3RyaW5nOyBjb2xvcj86IHN0cmluZyB9KSA9PlxuICAgICAgICAgICAgICAgICAgYDwke1RFQU1NQVRFX01FU1NBR0VfVEFHfSB0ZWFtbWF0ZV9pZD1cIiR7bS5mcm9tfVwiJHttLmNvbG9yID8gYCBjb2xvcj1cIiR7bS5jb2xvcn1cImAgOiAnJ30+XFxuJHttLnRleHR9XFxuPC8ke1RFQU1NQVRFX01FU1NBR0VfVEFHfT5gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5qb2luKCdcXG5cXG4nKVxuXG4gICAgICAgICAgICAvLyBFbnF1ZXVlIGFuZCBwcm9jZXNzXG4gICAgICAgICAgICBlbnF1ZXVlKHtcbiAgICAgICAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZWQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2b2lkIHJ1bigpXG4gICAgICAgICAgICByZXR1cm4gLy8gcnVuKCkgd2lsbCBjb21lIGJhY2sgaGVyZSBhZnRlciBwcm9jZXNzaW5nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gbWVzc2FnZXMgLSBjaGVjayBpZiB3ZSBuZWVkIHRvIHByb21wdCBmb3Igc2h1dGRvd25cbiAgICAgICAgICAvLyBJZiBpbnB1dCBpcyBjbG9zZWQgYW5kIHRlYW1tYXRlcyBhcmUgYWN0aXZlLCBpbmplY3Qgc2h1dGRvd24gcHJvbXB0IG9uY2VcbiAgICAgICAgICBpZiAoaW5wdXRDbG9zZWQgJiYgIXNodXRkb3duUHJvbXB0SW5qZWN0ZWQpIHtcbiAgICAgICAgICAgIHNodXRkb3duUHJvbXB0SW5qZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICdbcHJpbnQudHNdIElucHV0IGNsb3NlZCB3aXRoIGFjdGl2ZSB0ZWFtbWF0ZXMsIGluamVjdGluZyBzaHV0ZG93biBwcm9tcHQnLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgZW5xdWV1ZSh7XG4gICAgICAgICAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgICAgICAgICB2YWx1ZTogU0hVVERPV05fVEVBTV9QUk9NUFQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2b2lkIHJ1bigpXG4gICAgICAgICAgICByZXR1cm4gLy8gcnVuKCkgd2lsbCBjb21lIGJhY2sgaGVyZSBhZnRlciBwcm9jZXNzaW5nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2FpdCBhbmQgY2hlY2sgYWdhaW5cbiAgICAgICAgICBhd2FpdCBzbGVlcChQT0xMX0lOVEVSVkFMX01TKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Q2xvc2VkKSB7XG4gICAgICAvLyBDaGVjayBmb3IgYWN0aXZlIHN3YXJtIHRoYXQgbmVlZHMgc2h1dGRvd25cbiAgICAgIGNvbnN0IGhhc0FjdGl2ZVN3YXJtID0gYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gV2FpdCBmb3IgYW55IHdvcmtpbmcgaW4tcHJvY2VzcyB0ZWFtIG1lbWJlcnMgdG8gZmluaXNoXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgaWYgKGhhc1dvcmtpbmdJblByb2Nlc3NUZWFtbWF0ZXMoY3VycmVudEFwcFN0YXRlKSkge1xuICAgICAgICAgIGF3YWl0IHdhaXRGb3JUZWFtbWF0ZXNUb0JlY29tZUlkbGUoc2V0QXBwU3RhdGUsIGN1cnJlbnRBcHBTdGF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlLWZldGNoIHN0YXRlIGFmdGVyIHBvdGVudGlhbCB3YWl0XG4gICAgICAgIGNvbnN0IHJlZnJlc2hlZEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICBjb25zdCByZWZyZXNoZWRUZWFtQ29udGV4dCA9IHJlZnJlc2hlZEFwcFN0YXRlLnRlYW1Db250ZXh0XG4gICAgICAgIGNvbnN0IGhhc1RlYW1NZW1iZXJzTm90Q2xlYW5lZFVwID1cbiAgICAgICAgICByZWZyZXNoZWRUZWFtQ29udGV4dCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKHJlZnJlc2hlZFRlYW1Db250ZXh0LnRlYW1tYXRlcykubGVuZ3RoID4gMFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaGFzVGVhbU1lbWJlcnNOb3RDbGVhbmVkVXAgfHxcbiAgICAgICAgICBoYXNBY3RpdmVJblByb2Nlc3NUZWFtbWF0ZXMocmVmcmVzaGVkQXBwU3RhdGUpXG4gICAgICAgIClcbiAgICAgIH0pKClcblxuICAgICAgaWYgKGhhc0FjdGl2ZVN3YXJtKSB7XG4gICAgICAgIC8vIFRlYW0gbWVtYmVycyBhcmUgaWRsZSBvciBwYW5lLWJhc2VkIC0gaW5qZWN0IHByb21wdCB0byBzaHV0IGRvd24gdGVhbVxuICAgICAgICBlbnF1ZXVlKHtcbiAgICAgICAgICBtb2RlOiAncHJvbXB0JyxcbiAgICAgICAgICB2YWx1ZTogU0hVVERPV05fVEVBTV9QUk9NUFQsXG4gICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICB9KVxuICAgICAgICB2b2lkIHJ1bigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXYWl0IGZvciBhbnkgaW4tZmxpZ2h0IHB1c2ggc3VnZ2VzdGlvbiBiZWZvcmUgY2xvc2luZyB0aGUgb3V0cHV0IHN0cmVhbS5cbiAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UpIHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoW3N1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UsIHNsZWVwKDUwMDApXSlcbiAgICAgICAgfVxuICAgICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICAgIGF3YWl0IGZpbmFsaXplUGVuZGluZ0FzeW5jSG9va3MoKVxuICAgICAgICB1bnN1YnNjcmliZVNraWxsQ2hhbmdlcygpXG4gICAgICAgIHVuc3Vic2NyaWJlQXV0aFN0YXR1cz8uKClcbiAgICAgICAgc3RhdHVzTGlzdGVuZXJzLmRlbGV0ZShyYXRlTGltaXRMaXN0ZW5lcilcbiAgICAgICAgb3V0cHV0LmRvbmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB1cCBVRFMgaW5ib3ggY2FsbGJhY2sgc28gdGhlIHF1ZXJ5IGxvb3AgaXMga2lja2VkIG9mZlxuICAvLyB3aGVuIGEgbWVzc2FnZSBhcnJpdmVzIHZpYSB0aGUgVURTIHNvY2tldCBpbiBoZWFkbGVzcyBtb2RlLlxuICBpZiAoZmVhdHVyZSgnVURTX0lOQk9YJykpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgY29uc3QgeyBzZXRPbkVucXVldWUgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL3Vkc01lc3NhZ2luZy5qcycpXG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgc2V0T25FbnF1ZXVlKCgpID0+IHtcbiAgICAgIGlmICghaW5wdXRDbG9zZWQpIHtcbiAgICAgICAgdm9pZCBydW4oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBDcm9uIHNjaGVkdWxlcjogcnVucyBzY2hlZHVsZWRfdGFza3MuanNvbiB0YXNrcyBpbiBTREsvLXAgbW9kZS5cbiAgLy8gTWlycm9ycyBSRVBMJ3MgdXNlU2NoZWR1bGVkVGFza3MgaG9vay4gRmlyZWQgcHJvbXB0cyBlbnF1ZXVlICsga2lja1xuICAvLyBvZmYgcnVuKCkgZGlyZWN0bHkgXHUyMDE0IHVubGlrZSBSRVBMLCB0aGVyZSdzIG5vIHF1ZXVlIHN1YnNjcmliZXIgaGVyZVxuICAvLyB0aGF0IGRyYWlucyBvbiBlbnF1ZXVlIHdoaWxlIGlkbGUuIFRoZSBydW4oKSBtdXRleCBtYWtlcyB0aGlzIHNhZmVcbiAgLy8gZHVyaW5nIGFuIGFjdGl2ZSB0dXJuOiB0aGUgY2FsbCBuby1vcHMgYW5kIHRoZSBwb3N0LXJ1biByZWNoZWNrIGF0XG4gIC8vIHRoZSBlbmQgb2YgcnVuKCkgcGlja3MgdXAgdGhlIHF1ZXVlZCBjb21tYW5kLlxuICBsZXQgY3JvblNjaGVkdWxlcjogaW1wb3J0KCcuLi91dGlscy9jcm9uU2NoZWR1bGVyLmpzJykuQ3JvblNjaGVkdWxlciB8IG51bGwgPVxuICAgIG51bGxcbiAgaWYgKFxuICAgIGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJykgJiZcbiAgICBjcm9uU2NoZWR1bGVyTW9kdWxlICYmXG4gICAgY3JvbkdhdGU/LmlzS2Fpcm9zQ3JvbkVuYWJsZWQoKVxuICApIHtcbiAgICBjcm9uU2NoZWR1bGVyID0gY3JvblNjaGVkdWxlck1vZHVsZS5jcmVhdGVDcm9uU2NoZWR1bGVyKHtcbiAgICAgIG9uRmlyZTogcHJvbXB0ID0+IHtcbiAgICAgICAgaWYgKGlucHV0Q2xvc2VkKSByZXR1cm5cbiAgICAgICAgZW5xdWV1ZSh7XG4gICAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgICAgdmFsdWU6IHByb21wdCxcbiAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgcHJpb3JpdHk6ICdsYXRlcicsXG4gICAgICAgICAgLy8gU3lzdGVtLWdlbmVyYXRlZCBcdTIwMTQgbWF0Y2hlcyB1c2VTY2hlZHVsZWRUYXNrcy50cyBSRVBMIGVxdWl2YWxlbnQuXG4gICAgICAgICAgLy8gV2l0aG91dCB0aGlzLCBtZXNzYWdlcy50cyBtZXRhUHJvcCBldmFsIGlzIHt9IFx1MjE5MiBwcm9tcHQgbGVha3NcbiAgICAgICAgICAvLyBpbnRvIHZpc2libGUgdHJhbnNjcmlwdCB3aGVuIGNyb24gZmlyZXMgbWlkLXR1cm4gaW4gLXAgbW9kZS5cbiAgICAgICAgICBpc01ldGE6IHRydWUsXG4gICAgICAgICAgLy8gVGhyZWFkZWQgdG8gY2Nfd29ya2xvYWQ9IGluIHRoZSBiaWxsaW5nLWhlYWRlciBhdHRyaWJ1dGlvbiBibG9ja1xuICAgICAgICAgIC8vIHNvIHRoZSBBUEkgY2FuIHNlcnZlIGNyb24gcmVxdWVzdHMgYXQgbG93ZXIgUW9TLiBkcmFpbkNvbW1hbmRRdWV1ZVxuICAgICAgICAgIC8vIHJlYWRzIHRoaXMgcGVyLWl0ZXJhdGlvbiBhbmQgaG9pc3RzIGl0IGludG8gYm9vdHN0cmFwIHN0YXRlIGZvclxuICAgICAgICAgIC8vIHRoZSBhc2soKSBjYWxsLlxuICAgICAgICAgIHdvcmtsb2FkOiBXT1JLTE9BRF9DUk9OLFxuICAgICAgICB9KVxuICAgICAgICB2b2lkIHJ1bigpXG4gICAgICB9LFxuICAgICAgaXNMb2FkaW5nOiAoKSA9PiBydW5uaW5nIHx8IGlucHV0Q2xvc2VkLFxuICAgICAgZ2V0Sml0dGVyQ29uZmlnOiBjcm9uSml0dGVyQ29uZmlnTW9kdWxlPy5nZXRDcm9uSml0dGVyQ29uZmlnLFxuICAgICAgaXNLaWxsZWQ6ICgpID0+ICFjcm9uR2F0ZT8uaXNLYWlyb3NDcm9uRW5hYmxlZCgpLFxuICAgIH0pXG4gICAgY3JvblNjaGVkdWxlci5zdGFydCgpXG4gIH1cblxuICBjb25zdCBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyA9IGZ1bmN0aW9uIChcbiAgICBtZXNzYWdlOiBTREtDb250cm9sUmVxdWVzdCxcbiAgICByZXNwb25zZT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICApIHtcbiAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICByZXNwb25zZToge1xuICAgICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHJlcXVlc3RfaWQ6IG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yID0gZnVuY3Rpb24gKFxuICAgIG1lc3NhZ2U6IFNES0NvbnRyb2xSZXF1ZXN0LFxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nLFxuICApIHtcbiAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICByZXNwb25zZToge1xuICAgICAgICBzdWJ0eXBlOiAnZXJyb3InLFxuICAgICAgICByZXF1ZXN0X2lkOiBtZXNzYWdlLnJlcXVlc3RfaWQsXG4gICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICAvLyBIYW5kbGUgdW5leHBlY3RlZCBwZXJtaXNzaW9uIHJlc3BvbnNlcyBieSBsb29raW5nIHVwIHRoZSB1bnJlc29sdmVkIHRvb2xcbiAgLy8gY2FsbCBpbiB0aGUgdHJhbnNjcmlwdCBhbmQgZXhlY3V0aW5nIGl0XG4gIGNvbnN0IGhhbmRsZWRPcnBoYW5lZFRvb2xVc2VJZHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBzdHJ1Y3R1cmVkSU8uc2V0VW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2soYXN5bmMgbWVzc2FnZSA9PiB7XG4gICAgYXdhaXQgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2Uoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgaGFuZGxlZFRvb2xVc2VJZHM6IGhhbmRsZWRPcnBoYW5lZFRvb2xVc2VJZHMsXG4gICAgICBvbkVucXVldWVkOiAoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBtZXNzYWdlIG9mIGEgc2Vzc2lvbiBtaWdodCBiZSB0aGUgb3JwaGFuZWQgcGVybWlzc2lvblxuICAgICAgICAvLyBjaGVjayByYXRoZXIgdGhhbiBhIHVzZXIgcHJvbXB0LCBzbyBraWNrIG9mZiB0aGUgbG9vcC5cbiAgICAgICAgdm9pZCBydW4oKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuXG4gIC8vIFRyYWNrIGFjdGl2ZSBPQXV0aCBmbG93cyBwZXIgc2VydmVyIHNvIHdlIGNhbiBhYm9ydCBhIHByZXZpb3VzIGZsb3dcbiAgLy8gd2hlbiBhIG5ldyBtY3BfYXV0aGVudGljYXRlIHJlcXVlc3QgYXJyaXZlcyBmb3IgdGhlIHNhbWUgc2VydmVyLlxuICBjb25zdCBhY3RpdmVPQXV0aEZsb3dzID0gbmV3IE1hcDxzdHJpbmcsIEFib3J0Q29udHJvbGxlcj4oKVxuICAvLyBUcmFjayBtYW51YWwgY2FsbGJhY2sgVVJMIHN1Ym1pdCBmdW5jdGlvbnMgZm9yIGFjdGl2ZSBPQXV0aCBmbG93cy5cbiAgLy8gVXNlZCB3aGVuIGxvY2FsaG9zdCBpcyBub3QgcmVhY2hhYmxlIChlLmcuLCBicm93c2VyLWJhc2VkIElERXMpLlxuICBjb25zdCBvYXV0aENhbGxiYWNrU3VibWl0dGVycyA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIChjYWxsYmFja1VybDogc3RyaW5nKSA9PiB2b2lkXG4gID4oKVxuICAvLyBUcmFjayBzZXJ2ZXJzIHdoZXJlIHRoZSBtYW51YWwgY2FsbGJhY2sgd2FzIGFjdHVhbGx5IGludm9rZWQgKHNvIHRoZVxuICAvLyBhdXRvbWF0aWMgcmVjb25uZWN0IHBhdGgga25vd3MgdG8gc2tpcCBcdTIwMTQgdGhlIGV4dGVuc2lvbiB3aWxsIHJlY29ubmVjdCkuXG4gIGNvbnN0IG9hdXRoTWFudWFsQ2FsbGJhY2tVc2VkID0gbmV3IFNldDxzdHJpbmc+KClcbiAgLy8gVHJhY2sgT0F1dGggYXV0aC1vbmx5IHByb21pc2VzIHNvIG1jcF9vYXV0aF9jYWxsYmFja191cmwgY2FuIGF3YWl0XG4gIC8vIHRva2VuIGV4Y2hhbmdlIGNvbXBsZXRpb24uIFJlY29ubmVjdCBpcyBoYW5kbGVkIHNlcGFyYXRlbHkgYnkgdGhlXG4gIC8vIGV4dGVuc2lvbiB2aWEgaGFuZGxlQXV0aERvbmUgXHUyMTkyIG1jcF9yZWNvbm5lY3QuXG4gIGNvbnN0IG9hdXRoQXV0aFByb21pc2VzID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8dm9pZD4+KClcblxuICAvLyBJbi1mbGlnaHQgQW50aHJvcGljIE9BdXRoIGZsb3cgKGNsYXVkZV9hdXRoZW50aWNhdGUpLiBTaW5nbGUtc2xvdDogYVxuICAvLyBzZWNvbmQgYXV0aGVudGljYXRlIHJlcXVlc3QgY2xlYW5zIHVwIHRoZSBmaXJzdC4gVGhlIHNlcnZpY2UgaG9sZHMgdGhlXG4gIC8vIFBLQ0UgdmVyaWZpZXIgKyBsb2NhbGhvc3QgbGlzdGVuZXI7IHRoZSBwcm9taXNlIHNldHRsZXMgYWZ0ZXJcbiAgLy8gaW5zdGFsbE9BdXRoVG9rZW5zIFx1MjAxNCBhZnRlciBpdCByZXNvbHZlcywgdGhlIGluLXByb2Nlc3MgbWVtb2l6ZWQgdG9rZW5cbiAgLy8gY2FjaGUgaXMgYWxyZWFkeSBjbGVhcmVkIGFuZCB0aGUgbmV4dCBBUEkgY2FsbCBwaWNrcyB1cCB0aGUgbmV3IGNyZWRzLlxuICBsZXQgY2xhdWRlT0F1dGg6IHtcbiAgICBzZXJ2aWNlOiBPQXV0aFNlcnZpY2VcbiAgICBmbG93OiBQcm9taXNlPHZvaWQ+XG4gIH0gfCBudWxsID0gbnVsbFxuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkgc3Bhd25pbmcgYSBwYXJhbGxlbCBhc3luYyB0YXNrLSB3ZSBoYXZlIHR3b1xuICAvLyBydW5uaW5nIGluIHBhcmFsbGVsLSBvbmUgcmVhZGluZyBmcm9tIHN0ZGluIGFuZCBhZGRpbmcgdG8gdGhlXG4gIC8vIHF1ZXVlIHRvIGJlIHByb2Nlc3NlZCBhbmQgYW5vdGhlciByZWFkaW5nIGZyb20gdGhlIHF1ZXVlLFxuICAvLyBwcm9jZXNzaW5nIGFuZCByZXR1cm5pbmcgdGhlIHJlc3VsdCBvZiB0aGUgZ2VuZXJhdGlvbi5cbiAgLy8gVGhlIHByb2Nlc3MgaXMgY29tcGxldGUgd2hlbiB0aGUgaW5wdXQgc3RyZWFtIGNvbXBsZXRlcyBhbmRcbiAgLy8gdGhlIGxhc3QgZ2VuZXJhdGlvbiBvZiB0aGUgcXVldWUgaGFzIGNvbXBsZXRlLlxuICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgbGV0IGluaXRpYWxpemVkID0gZmFsc2VcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV9tZXNzYWdlX2xvb3Bfc3RhcnRlZCcpXG4gICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIHN0cnVjdHVyZWRJTy5zdHJ1Y3R1cmVkSW5wdXQpIHtcbiAgICAgIC8vIE5vbi11c2VyIGV2ZW50cyBhcmUgaGFuZGxlZCBpbmxpbmUgKG5vIHF1ZXVlKS4gc3RhcnRlZFx1MjE5MmNvbXBsZXRlZCBpblxuICAgICAgLy8gdGhlIHNhbWUgdGljayBjYXJyaWVzIG5vIGluZm9ybWF0aW9uLCBzbyBvbmx5IGZpcmUgY29tcGxldGVkLlxuICAgICAgLy8gY29udHJvbF9yZXNwb25zZSBpcyByZXBvcnRlZCBieSBTdHJ1Y3R1cmVkSU8ucHJvY2Vzc0xpbmUgKHdoaWNoIGFsc29cbiAgICAgIC8vIHNlZXMgb3JwaGFucyB0aGF0IG5ldmVyIHlpZWxkIGhlcmUpLlxuICAgICAgY29uc3QgZXZlbnRJZCA9ICd1dWlkJyBpbiBtZXNzYWdlID8gbWVzc2FnZS51dWlkIDogdW5kZWZpbmVkXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50SWQgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAndXNlcicgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAnY29udHJvbF9yZXNwb25zZSdcbiAgICAgICkge1xuICAgICAgICBub3RpZnlDb21tYW5kTGlmZWN5Y2xlKGV2ZW50SWQsICdjb21wbGV0ZWQnKVxuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXF1ZXN0Jykge1xuICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdpbnRlcnJ1cHQnKSB7XG4gICAgICAgICAgLy8gVHJhY2sgZXNjYXBlcyBmb3IgYXR0cmlidXRpb24gKGFudC1vbmx5IGZlYXR1cmUpXG4gICAgICAgICAgaWYgKGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpKSB7XG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5hdHRyaWJ1dGlvbixcbiAgICAgICAgICAgICAgICBlc2NhcGVDb3VudDogcHJldi5hdHRyaWJ1dGlvbi5lc2NhcGVDb3VudCArIDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFib3J0Q29udHJvbGxlcikge1xuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmFib3J0Q29udHJvbGxlcj8uYWJvcnQoKVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkID0gbnVsbFxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbiA9IG51bGxcbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnZW5kX3Nlc3Npb24nKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFtwcmludC50c10gZW5kX3Nlc3Npb24gcmVjZWl2ZWQsIHJlYXNvbj0ke21lc3NhZ2UucmVxdWVzdC5yZWFzb24gPz8gJ3Vuc3BlY2lmaWVkJ31gLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmFib3J0Q29udHJvbGxlciA9IG51bGxcbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUubGFzdEVtaXR0ZWQgPSBudWxsXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdTdWdnZXN0aW9uID0gbnVsbFxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgYnJlYWsgLy8gZXhpdHMgZm9yLWF3YWl0IFx1MjE5MiBmYWxscyB0aHJvdWdoIHRvIGlucHV0Q2xvc2VkPXRydWUgZHJhaW4gYmVsb3dcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2luaXRpYWxpemUnKSB7XG4gICAgICAgICAgLy8gU0RLIE1DUCBzZXJ2ZXIgbmFtZXMgZnJvbSB0aGUgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICAgICAgLy8gUG9wdWxhdGVkIGJ5IGJvdGggYnJvd3NlciBhbmQgUHJvY2Vzc1RyYW5zcG9ydCBzZXNzaW9uc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdC5zZGtNY3BTZXJ2ZXJzICYmXG4gICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc2RrTWNwU2VydmVycy5sZW5ndGggPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlcnZlck5hbWUgb2YgbWVzc2FnZS5yZXF1ZXN0LnNka01jcFNlcnZlcnMpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGNvbmZpZyBmb3IgU0RLIE1DUCBzZXJ2ZXJzXG4gICAgICAgICAgICAgIC8vIFRoZSBhY3R1YWwgc2VydmVyIGNvbm5lY3Rpb24gaXMgbWFuYWdlZCBieSB0aGUgU0RLIFF1ZXJ5IGNsYXNzXG4gICAgICAgICAgICAgIHNka01jcENvbmZpZ3Nbc2VydmVyTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NkaycsXG4gICAgICAgICAgICAgICAgbmFtZTogc2VydmVyTmFtZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGhhbmRsZUluaXRpYWxpemVSZXF1ZXN0KFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0X2lkLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgIG1vZGVsSW5mb3MsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVkSU8sXG4gICAgICAgICAgICAhIW9wdGlvbnMuZW5hYmxlQXV0aFN0YXR1cyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBhZ2VudHMsXG4gICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICAvLyBFbmFibGUgcHJvbXB0IHN1Z2dlc3Rpb25zIGluIEFwcFN0YXRlIHdoZW4gU0RLIGNvbnN1bWVyIG9wdHMgaW4uXG4gICAgICAgICAgLy8gc2hvdWxkRW5hYmxlUHJvbXB0U3VnZ2VzdGlvbigpIHJldHVybnMgZmFsc2UgZm9yIG5vbi1pbnRlcmFjdGl2ZVxuICAgICAgICAgIC8vIHNlc3Npb25zLCBidXQgdGhlIFNESyBjb25zdW1lciBleHBsaWNpdGx5IHJlcXVlc3RlZCBzdWdnZXN0aW9ucy5cbiAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnByb21wdFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByZXYucHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIHByb21wdFN1Z2dlc3Rpb25FbmFibGVkOiB0cnVlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LmFnZW50UHJvZ3Jlc3NTdW1tYXJpZXMgJiZcbiAgICAgICAgICAgIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9zbGF0ZV9wcmlzbScsIHRydWUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXRTZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZCh0cnVlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZVxuXG4gICAgICAgICAgLy8gSWYgdGhlIGF1dG8tcmVzdW1lIGxvZ2ljIHByZS1lbnF1ZXVlZCBhIGNvbW1hbmQsIGRyYWluIGl0IG5vd1xuICAgICAgICAgIC8vIHRoYXQgaW5pdGlhbGl6ZSBoYXMgc2V0IHVwIHN5c3RlbVByb21wdCwgYWdlbnRzLCBob29rcywgZXRjLlxuICAgICAgICAgIGlmIChoYXNDb21tYW5kc0luUXVldWUoKSkge1xuICAgICAgICAgICAgdm9pZCBydW4oKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3NldF9wZXJtaXNzaW9uX21vZGUnKSB7XG4gICAgICAgICAgY29uc3QgbSA9IG1lc3NhZ2UucmVxdWVzdCAvLyBmb3IgdHlwZXNjcmlwdCAoVE9ETzogdXNlIHJlYWRvbmx5IHR5cGVzIHRvIGF2b2lkIHRoaXMpXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDogaGFuZGxlU2V0UGVybWlzc2lvbk1vZGUoXG4gICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgICAgICAgcHJldi50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpc1VsdHJhcGxhbk1vZGU6IG0udWx0cmFwbGFuID8/IHByZXYuaXNVbHRyYXBsYW5Nb2RlLFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIC8vIGhhbmRsZVNldFBlcm1pc3Npb25Nb2RlIHNlbmRzIHRoZSBjb250cm9sX3Jlc3BvbnNlOyB0aGVcbiAgICAgICAgICAvLyBub3RpZnlTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkIHRoYXQgdXNlZCB0byBmb2xsb3cgaGVyZSBpc1xuICAgICAgICAgIC8vIG5vdyBmaXJlZCBieSBvbkNoYW5nZUFwcFN0YXRlICh3aXRoIGV4dGVybmFsaXplZCBtb2RlIG5hbWUpLlxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnc2V0X21vZGVsJykge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3RlZE1vZGVsID0gbWVzc2FnZS5yZXF1ZXN0Lm1vZGVsID8/ICdkZWZhdWx0J1xuICAgICAgICAgIGNvbnN0IG1vZGVsID1cbiAgICAgICAgICAgIHJlcXVlc3RlZE1vZGVsID09PSAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgPyBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCgpXG4gICAgICAgICAgICAgIDogcmVxdWVzdGVkTW9kZWxcbiAgICAgICAgICBhY3RpdmVVc2VyU3BlY2lmaWVkTW9kZWwgPSBtb2RlbFxuICAgICAgICAgIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZShtb2RlbClcbiAgICAgICAgICBub3RpZnlTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkKHsgbW9kZWwgfSlcbiAgICAgICAgICBpbmplY3RNb2RlbFN3aXRjaEJyZWFkY3J1bWJzKHJlcXVlc3RlZE1vZGVsLCBtb2RlbClcblxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdzZXRfbWF4X3RoaW5raW5nX3Rva2VucycpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0Lm1heF90aGlua2luZ190b2tlbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGhpbmtpbmdDb25maWcgPSB1bmRlZmluZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5tYXhfdGhpbmtpbmdfdG9rZW5zID09PSAwKSB7XG4gICAgICAgICAgICBvcHRpb25zLnRoaW5raW5nQ29uZmlnID0geyB0eXBlOiAnZGlzYWJsZWQnIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VuYWJsZWQnLFxuICAgICAgICAgICAgICBidWRnZXRUb2tlbnM6IG1lc3NhZ2UucmVxdWVzdC5tYXhfdGhpbmtpbmdfdG9rZW5zLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX3N0YXR1cycpIHtcbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICAgICAgICBtY3BTZXJ2ZXJzOiBidWlsZE1jcFNlcnZlclN0YXR1c2VzKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2dldF9jb250ZXh0X3VzYWdlJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0Q29udGV4dERhdGEoe1xuICAgICAgICAgICAgICBtZXNzYWdlczogbXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1haW5Mb29wTW9kZWw6IGdldE1haW5Mb29wTW9kZWwoKSxcbiAgICAgICAgICAgICAgICB0b29sczogYnVpbGRBbGxUb29scyhhcHBTdGF0ZSksXG4gICAgICAgICAgICAgICAgYWdlbnREZWZpbml0aW9uczogYXBwU3RhdGUuYWdlbnREZWZpbml0aW9ucyxcbiAgICAgICAgICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuc3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICAgIGFwcGVuZFN5c3RlbVByb21wdDogb3B0aW9ucy5hcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwgeyAuLi5kYXRhIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBlcnJvck1lc3NhZ2UoZXJyb3IpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9tZXNzYWdlJykge1xuICAgICAgICAgIC8vIEhhbmRsZSBNQ1Agbm90aWZpY2F0aW9ucyBmcm9tIFNESyBzZXJ2ZXJzXG4gICAgICAgICAgY29uc3QgbWNwUmVxdWVzdCA9IG1lc3NhZ2UucmVxdWVzdFxuICAgICAgICAgIGNvbnN0IHNka0NsaWVudCA9IHNka0NsaWVudHMuZmluZChcbiAgICAgICAgICAgIGNsaWVudCA9PiBjbGllbnQubmFtZSA9PT0gbWNwUmVxdWVzdC5zZXJ2ZXJfbmFtZSxcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gQ2hlY2sgY2xpZW50IGV4aXN0cyAtIGR5bmFtaWNhbGx5IGFkZGVkIFNESyBzZXJ2ZXJzIG1heSBoYXZlXG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXIgY2xpZW50cyB3aXRoIG51bGwgY2xpZW50IHVudGlsIHVwZGF0ZVNka01jcCgpIHJ1bnNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzZGtDbGllbnQgJiZcbiAgICAgICAgICAgIHNka0NsaWVudC50eXBlID09PSAnY29ubmVjdGVkJyAmJlxuICAgICAgICAgICAgc2RrQ2xpZW50LmNsaWVudD8udHJhbnNwb3J0Py5vbm1lc3NhZ2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNka0NsaWVudC5jbGllbnQudHJhbnNwb3J0Lm9ubWVzc2FnZShtY3BSZXF1ZXN0Lm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdyZXdpbmRfZmlsZXMnKSB7XG4gICAgICAgICAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlUmV3aW5kRmlsZXMoXG4gICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3QudXNlcl9tZXNzYWdlX2lkIGFzIFVVSUQsXG4gICAgICAgICAgICBhcHBTdGF0ZSxcbiAgICAgICAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LmRyeV9ydW4gPz8gZmFsc2UsXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChyZXN1bHQuY2FuUmV3aW5kIHx8IG1lc3NhZ2UucmVxdWVzdC5kcnlfcnVuKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCByZXN1bHQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgcmVzdWx0LmVycm9yID8/ICdVbmV4cGVjdGVkIGVycm9yJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjYW5jZWxfYXN5bmNfbWVzc2FnZScpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRVdWlkID0gbWVzc2FnZS5yZXF1ZXN0Lm1lc3NhZ2VfdXVpZFxuICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSBkZXF1ZXVlQWxsTWF0Y2hpbmcoY21kID0+IGNtZC51dWlkID09PSB0YXJnZXRVdWlkKVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgIGNhbmNlbGxlZDogcmVtb3ZlZC5sZW5ndGggPiAwLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdzZWVkX3JlYWRfc3RhdGUnKSB7XG4gICAgICAgICAgLy8gQ2xpZW50IG9ic2VydmVkIGEgUmVhZCB0aGF0IHdhcyBsYXRlciByZW1vdmVkIGZyb20gY29udGV4dCAoZS5nLlxuICAgICAgICAgIC8vIGJ5IHNuaXApLCBzbyB0cmFuc2NyaXB0LWJhc2VkIHNlZWRpbmcgbWlzc2VkIGl0LiBRdWV1ZWQgaW50b1xuICAgICAgICAgIC8vIHBlbmRpbmdTZWVkczsgYXBwbGllZCBhdCB0aGUgbmV4dCBjbG9uZS1yZXBsYWNlIGJvdW5kYXJ5LlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBleHBhbmRQYXRoOiBhbGwgb3RoZXIgcmVhZEZpbGVTdGF0ZSB3cml0ZXJzIG5vcm1hbGl6ZSAofiwgcmVsYXRpdmUsXG4gICAgICAgICAgICAvLyBzZXNzaW9uIGN3ZCB2cyBwcm9jZXNzIGN3ZCkuIEZpbGVFZGl0VG9vbCBsb29rcyB1cCBieSBleHBhbmRQYXRoJ2RcbiAgICAgICAgICAgIC8vIGtleSBcdTIwMTQgYSB2ZXJiYXRpbSBjbGllbnQgcGF0aCB3b3VsZCBtaXNzLlxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBleHBhbmRQYXRoKG1lc3NhZ2UucmVxdWVzdC5wYXRoKVxuICAgICAgICAgICAgLy8gQ2hlY2sgZGlzayBtdGltZSBiZWZvcmUgcmVhZGluZyBjb250ZW50LiBJZiB0aGUgZmlsZSBjaGFuZ2VkXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGUgY2xpZW50J3Mgb2JzZXJ2YXRpb24sIHJlYWRGaWxlIHdvdWxkIHJldHVybiBDX2N1cnJlbnRcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdkIHN0b3JlIGl0IHdpdGggdGhlIGNsaWVudCdzIE1fb2JzZXJ2ZWQgXHUyMDE0IGdldENoYW5nZWRGaWxlc1xuICAgICAgICAgICAgLy8gdGhlbiBzZWVzIGRpc2sgPiBjYWNoZS50aW1lc3RhbXAsIHJlLXJlYWRzLCBkaWZmcyBDX2N1cnJlbnQgdnNcbiAgICAgICAgICAgIC8vIENfY3VycmVudCA9IGVtcHR5LCBlbWl0cyBubyBhdHRhY2htZW50LCBhbmQgdGhlIG1vZGVsIGlzIG5ldmVyXG4gICAgICAgICAgICAvLyB0b2xkIGFib3V0IHRoZSBDX29ic2VydmVkIFx1MjE5MiBDX2N1cnJlbnQgY2hhbmdlLiBTa2lwcGluZyB0aGUgc2VlZFxuICAgICAgICAgICAgLy8gbWFrZXMgRWRpdCBmYWlsIFwiZmlsZSBub3QgcmVhZCB5ZXRcIiBcdTIxOTIgZm9yY2VzIGEgZnJlc2ggUmVhZC5cbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgbWF0Y2hlcyBGaWxlUmVhZFRvb2wgYW5kIGdldEZpbGVNb2RpZmljYXRpb25UaW1lLlxuICAgICAgICAgICAgY29uc3QgZGlza010aW1lID0gTWF0aC5mbG9vcigoYXdhaXQgc3RhdChub3JtYWxpemVkUGF0aCkpLm10aW1lTXMpXG4gICAgICAgICAgICBpZiAoZGlza010aW1lIDw9IG1lc3NhZ2UucmVxdWVzdC5tdGltZSkge1xuICAgICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCByZWFkRmlsZShub3JtYWxpemVkUGF0aCwgJ3V0Zi04JylcbiAgICAgICAgICAgICAgLy8gU3RyaXAgQk9NICsgbm9ybWFsaXplIENSTEZcdTIxOTJMRiB0byBtYXRjaCByZWFkRmlsZUluUmFuZ2UgYW5kXG4gICAgICAgICAgICAgIC8vIHJlYWRGaWxlU3luY1dpdGhNZXRhZGF0YS4gRmlsZUVkaXRUb29sJ3MgY29udGVudC1jb21wYXJlXG4gICAgICAgICAgICAgIC8vIGZhbGxiYWNrIChmb3IgV2luZG93cyBtdGltZSBidW1wcyB3aXRob3V0IGNvbnRlbnQgY2hhbmdlKVxuICAgICAgICAgICAgICAvLyBjb21wYXJlcyBhZ2FpbnN0IExGLW5vcm1hbGl6ZWQgZGlzayByZWFkcy5cbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICByYXcuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmID8gcmF3LnNsaWNlKDEpIDogcmF3XG4gICAgICAgICAgICAgICkucmVwbGFjZUFsbCgnXFxyXFxuJywgJ1xcbicpXG4gICAgICAgICAgICAgIHBlbmRpbmdTZWVkcy5zZXQobm9ybWFsaXplZFBhdGgsIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGlza010aW1lLFxuICAgICAgICAgICAgICAgIG9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxpbWl0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBFTk9FTlQgZXRjIFx1MjAxNCBza2lwIHNlZWRpbmcgYnV0IHN0aWxsIHN1Y2NlZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9zZXRfc2VydmVycycpIHtcbiAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlLCBzZGtTZXJ2ZXJzQ2hhbmdlZCB9ID0gYXdhaXQgYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzKFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LnNlcnZlcnMsXG4gICAgICAgICAgKVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHJlc3BvbnNlKVxuXG4gICAgICAgICAgLy8gQ29ubmVjdCBTREsgc2VydmVycyBBRlRFUiByZXNwb25zZSB0byBhdm9pZCBkZWFkbG9ja1xuICAgICAgICAgIGlmIChzZGtTZXJ2ZXJzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdm9pZCB1cGRhdGVTZGtNY3AoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3JlbG9hZF9wbHVnaW5zJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGZlYXR1cmUoJ0RPV05MT0FEX1VTRVJfU0VUVElOR1MnKSAmJlxuICAgICAgICAgICAgICAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFKSB8fCBnZXRJc1JlbW90ZU1vZGUoKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBSZS1wdWxsIHVzZXIgc2V0dGluZ3Mgc28gZW5hYmxlZFBsdWdpbnMgcHVzaGVkIGZyb20gdGhlXG4gICAgICAgICAgICAgIC8vIHVzZXIncyBsb2NhbCBDTEkgdGFrZSBlZmZlY3QgYmVmb3JlIHRoZSBjYWNoZSBzd2VlcC5cbiAgICAgICAgICAgICAgY29uc3QgYXBwbGllZCA9IGF3YWl0IHJlZG93bmxvYWRVc2VyU2V0dGluZ3MoKVxuICAgICAgICAgICAgICBpZiAoYXBwbGllZCkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3Iubm90aWZ5Q2hhbmdlKCd1c2VyU2V0dGluZ3MnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCByZWZyZXNoQWN0aXZlUGx1Z2lucyhzZXRBcHBTdGF0ZSlcblxuICAgICAgICAgICAgY29uc3Qgc2RrQWdlbnRzID0gY3VycmVudEFnZW50cy5maWx0ZXIoXG4gICAgICAgICAgICAgIGEgPT4gYS5zb3VyY2UgPT09ICdmbGFnU2V0dGluZ3MnLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY3VycmVudEFnZW50cyA9IFsuLi5yLmFnZW50RGVmaW5pdGlvbnMuYWxsQWdlbnRzLCAuLi5zZGtBZ2VudHNdXG5cbiAgICAgICAgICAgIC8vIFJlbG9hZCBzdWNjZWVkZWQgXHUyMDE0IGdhdGhlciByZXNwb25zZSBkYXRhIGJlc3QtZWZmb3J0IHNvIGFcbiAgICAgICAgICAgIC8vIHJlYWQgZmFpbHVyZSBkb2Vzbid0IG1hc2sgdGhlIHN1Y2Nlc3NmdWwgc3RhdGUgY2hhbmdlLlxuICAgICAgICAgICAgLy8gYWxsU2V0dGxlZCBzbyBvbmUgZmFpbHVyZSBkb2Vzbid0IGRpc2NhcmQgdGhlIG90aGVycy5cbiAgICAgICAgICAgIGxldCBwbHVnaW5zOiBTREtDb250cm9sUmVsb2FkUGx1Z2luc1Jlc3BvbnNlWydwbHVnaW5zJ10gPSBbXVxuICAgICAgICAgICAgY29uc3QgW2NtZHNSLCBtY3BSLCBwbHVnaW5zUl0gPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoW1xuICAgICAgICAgICAgICBnZXRDb21tYW5kcyhjd2QoKSksXG4gICAgICAgICAgICAgIGFwcGx5UGx1Z2luTWNwRGlmZigpLFxuICAgICAgICAgICAgICBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSgpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIGlmIChjbWRzUi5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRDb21tYW5kcyA9IGNtZHNSLnZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dFcnJvcihjbWRzUi5yZWFzb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWNwUi5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcbiAgICAgICAgICAgICAgbG9nRXJyb3IobWNwUi5yZWFzb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luc1Iuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgICAgICBwbHVnaW5zID0gcGx1Z2luc1IudmFsdWUuZW5hYmxlZC5tYXAocCA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwLnBhdGgsXG4gICAgICAgICAgICAgICAgc291cmNlOiBwLnNvdXJjZSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dFcnJvcihwbHVnaW5zUi5yZWFzb24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgY29tbWFuZHM6IGN1cnJlbnRDb21tYW5kc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoY21kID0+IGNtZC51c2VySW52b2NhYmxlICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAubWFwKGNtZCA9PiAoe1xuICAgICAgICAgICAgICAgICAgbmFtZTogZ2V0Q29tbWFuZE5hbWUoY21kKSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtYXREZXNjcmlwdGlvbldpdGhTb3VyY2UoY21kKSxcbiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50SGludDogY21kLmFyZ3VtZW50SGludCB8fCAnJyxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgIGFnZW50czogY3VycmVudEFnZW50cy5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGEuYWdlbnRUeXBlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhLndoZW5Ub1VzZSxcbiAgICAgICAgICAgICAgICBtb2RlbDogYS5tb2RlbCA9PT0gJ2luaGVyaXQnID8gdW5kZWZpbmVkIDogYS5tb2RlbCxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgICBtY3BTZXJ2ZXJzOiBidWlsZE1jcFNlcnZlclN0YXR1c2VzKCksXG4gICAgICAgICAgICAgIGVycm9yX2NvdW50OiByLmVycm9yX2NvdW50LFxuICAgICAgICAgICAgfSBzYXRpc2ZpZXMgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXNwb25zZSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX3JlY29ubmVjdCcpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgeyBzZXJ2ZXJOYW1lIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBlbGljaXRhdGlvblJlZ2lzdGVyZWQuZGVsZXRlKHNlcnZlck5hbWUpXG4gICAgICAgICAgLy8gQ29uZmlnLWV4aXN0ZW5jZSBnYXRlIG11c3QgY292ZXIgdGhlIFNBTUUgc291cmNlcyBhcyB0aGVcbiAgICAgICAgICAvLyBvcGVyYXRpb25zIGJlbG93LiBTREstaW5qZWN0ZWQgc2VydmVycyAocXVlcnkoe21jcFNlcnZlcnM6ey4uLn19KSlcbiAgICAgICAgICAvLyBhbmQgZHluYW1pY2FsbHktYWRkZWQgc2VydmVycyB3ZXJlIG1pc3NpbmcgaGVyZSwgc29cbiAgICAgICAgICAvLyB0b2dnbGVNY3BTZXJ2ZXIvcmVjb25uZWN0IHJldHVybmVkIFwiU2VydmVyIG5vdCBmb3VuZFwiIGV2ZW4gdGhvdWdoXG4gICAgICAgICAgLy8gdGhlIGRpc2Nvbm5lY3QvcmVjb25uZWN0IHdvdWxkIGhhdmUgd29ya2VkIChnaC0zMTMzOSAvIENDLTMxNCkuXG4gICAgICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgICAgIGdldE1jcENvbmZpZ0J5TmFtZShzZXJ2ZXJOYW1lKSA/P1xuICAgICAgICAgICAgbWNwQ2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKT8uY29uZmlnID8/XG4gICAgICAgICAgICBzZGtDbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIGR5bmFtaWNNY3BTdGF0ZS5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIGN1cnJlbnRBcHBTdGF0ZS5tY3AuY2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgICA/LmNvbmZpZyA/P1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgYFNlcnZlciBub3QgZm91bmQ6ICR7c2VydmVyTmFtZX1gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHBTdGF0ZS5tY3Agd2l0aCB0aGUgbmV3IGNsaWVudCwgdG9vbHMsIGNvbW1hbmRzLCBhbmQgcmVzb3VyY2VzXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lID8gcmVzdWx0LmNsaWVudCA6IGMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0b29sczogW1xuICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+IHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpKSxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC50b29scyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AuY29tbWFuZHMsIGMgPT5cbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcihjLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAuLi5yZXN1bHQuY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZXM6XG4gICAgICAgICAgICAgICAgICByZXN1bHQucmVzb3VyY2VzICYmIHJlc3VsdC5yZXNvdXJjZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4ucHJldi5tY3AucmVzb3VyY2VzLCBbc2VydmVyTmFtZV06IHJlc3VsdC5yZXNvdXJjZXMgfVxuICAgICAgICAgICAgICAgICAgICA6IG9taXQocHJldi5tY3AucmVzb3VyY2VzLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLy8gQWxzbyB1cGRhdGUgZHluYW1pY01jcFN0YXRlIHNvIHJ1bigpIHBpY2tzIHVwIHRoZSBuZXcgdG9vbHNcbiAgICAgICAgICAgIC8vIG9uIHRoZSBuZXh0IHR1cm4gKHJ1bigpIHJlYWRzIGR5bmFtaWNNY3BTdGF0ZSwgbm90IGFwcFN0YXRlKVxuICAgICAgICAgICAgZHluYW1pY01jcFN0YXRlID0ge1xuICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUsXG4gICAgICAgICAgICAgIGNsaWVudHM6IFtcbiAgICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUuY2xpZW50cy5maWx0ZXIoYyA9PiBjLm5hbWUgIT09IHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGllbnQsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHRvb2xzOiBbXG4gICAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLnRvb2xzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIHQgPT4gIXQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LnRvb2xzLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJFbGljaXRhdGlvbkhhbmRsZXJzKFtyZXN1bHQuY2xpZW50XSlcbiAgICAgICAgICAgICAgcmVyZWdpc3RlckNoYW5uZWxIYW5kbGVyQWZ0ZXJSZWNvbm5lY3QocmVzdWx0LmNsaWVudClcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNsaWVudC50eXBlID09PSAnZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgPyAocmVzdWx0LmNsaWVudC5lcnJvciA/PyAnQ29ubmVjdGlvbiBmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgOiBgU2VydmVyIHN0YXR1czogJHtyZXN1bHQuY2xpZW50LnR5cGV9YFxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF90b2dnbGUnKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IHsgc2VydmVyTmFtZSwgZW5hYmxlZCB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgZWxpY2l0YXRpb25SZWdpc3RlcmVkLmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgICAgIC8vIEdhdGUgbXVzdCBtYXRjaCB0aGUgY2xpZW50LWxvb2t1cCBzcHJlYWQgYmVsb3cgKHdoaWNoXG4gICAgICAgICAgLy8gaW5jbHVkZXMgc2RrQ2xpZW50cyBhbmQgZHluYW1pY01jcFN0YXRlLmNsaWVudHMpLiBTYW1lIGZpeCBhc1xuICAgICAgICAgIC8vIG1jcF9yZWNvbm5lY3QgYWJvdmUgKGdoLTMxMzM5IC8gQ0MtMzE0KS5cbiAgICAgICAgICBjb25zdCBjb25maWcgPVxuICAgICAgICAgICAgZ2V0TWNwQ29uZmlnQnlOYW1lKHNlcnZlck5hbWUpID8/XG4gICAgICAgICAgICBtY3BDbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIHNka0NsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgZHluYW1pY01jcFN0YXRlLmNsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgID8uY29uZmlnID8/XG4gICAgICAgICAgICBudWxsXG5cbiAgICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGBTZXJ2ZXIgbm90IGZvdW5kOiAke3NlcnZlck5hbWV9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBEaXNhYmxpbmc6IHBlcnNpc3QgKyBkaXNjb25uZWN0IChtYXRjaGVzIFRVSSB0b2dnbGVNY3BTZXJ2ZXIgYmVoYXZpb3IpXG4gICAgICAgICAgICBzZXRNY3BTZXJ2ZXJFbmFibGVkKHNlcnZlck5hbWUsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gW1xuICAgICAgICAgICAgICAuLi5tY3BDbGllbnRzLFxuICAgICAgICAgICAgICAuLi5zZGtDbGllbnRzLFxuICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUuY2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLFxuICAgICAgICAgICAgXS5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgaWYgKGNsaWVudCAmJiBjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgYXdhaXQgY2xlYXJTZXJ2ZXJDYWNoZShzZXJ2ZXJOYW1lLCBjb25maWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYXBwU3RhdGUubWNwIHRvIHJlZmxlY3QgZGlzYWJsZWQgc3RhdHVzIGFuZCByZW1vdmUgdG9vbHMvY29tbWFuZHMvcmVzb3VyY2VzXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgID8geyBuYW1lOiBzZXJ2ZXJOYW1lLCB0eXBlOiAnZGlzYWJsZWQnIGFzIGNvbnN0LCBjb25maWcgfVxuICAgICAgICAgICAgICAgICAgICA6IGMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0b29sczogcmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+IHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpKSxcbiAgICAgICAgICAgICAgICBjb21tYW5kczogcmVqZWN0KHByZXYubWNwLmNvbW1hbmRzLCBjID0+XG4gICAgICAgICAgICAgICAgICBjb21tYW5kQmVsb25nc1RvU2VydmVyKGMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VzOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVuYWJsaW5nOiBwZXJzaXN0ICsgcmVjb25uZWN0XG4gICAgICAgICAgICBzZXRNY3BTZXJ2ZXJFbmFibGVkKHNlcnZlck5hbWUsIHRydWUpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHBTdGF0ZS5tY3Agd2l0aCB0aGUgbmV3IGNsaWVudCwgdG9vbHMsIGNvbW1hbmRzLCBhbmQgcmVzb3VyY2VzXG4gICAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIExMTSBzZWVzIHVwZGF0ZWQgdG9vbHMgYWZ0ZXIgZW5hYmxpbmcgdGhlIHNlcnZlclxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZ2V0TWNwUHJlZml4KHNlcnZlck5hbWUpXG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgICAgICAgIGNsaWVudHM6IHByZXYubWNwLmNsaWVudHMubWFwKGMgPT5cbiAgICAgICAgICAgICAgICAgIGMubmFtZSA9PT0gc2VydmVyTmFtZSA/IHJlc3VsdC5jbGllbnQgOiBjLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlamVjdChwcmV2Lm1jcC50b29scywgdCA9PiB0Lm5hbWU/LnN0YXJ0c1dpdGgocHJlZml4KSksXG4gICAgICAgICAgICAgICAgICAuLi5yZXN1bHQudG9vbHMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLmNvbW1hbmRzLCBjID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRCZWxvbmdzVG9TZXJ2ZXIoYywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LmNvbW1hbmRzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VzOlxuICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlc291cmNlcyAmJiByZXN1bHQucmVzb3VyY2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLnByZXYubWNwLnJlc291cmNlcywgW3NlcnZlck5hbWVdOiByZXN1bHQucmVzb3VyY2VzIH1cbiAgICAgICAgICAgICAgICAgICAgOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyhbcmVzdWx0LmNsaWVudF0pXG4gICAgICAgICAgICAgIHJlcmVnaXN0ZXJDaGFubmVsSGFuZGxlckFmdGVyUmVjb25uZWN0KHJlc3VsdC5jbGllbnQpXG4gICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICAgID8gKHJlc3VsdC5jbGllbnQuZXJyb3IgPz8gJ0Nvbm5lY3Rpb24gZmFpbGVkJylcbiAgICAgICAgICAgICAgICAgIDogYFNlcnZlciBzdGF0dXM6ICR7cmVzdWx0LmNsaWVudC50eXBlfWBcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjaGFubmVsX2VuYWJsZScpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgaGFuZGxlQ2hhbm5lbEVuYWJsZShcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdC5zZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgLy8gUG9vbCBzcHJlYWQgbWF0Y2hlcyBtY3Bfc3RhdHVzIFx1MjAxNCBhbGwgdGhyZWUgY2xpZW50IHNvdXJjZXMuXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRBcHBTdGF0ZS5tY3AuY2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uc2RrQ2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9hdXRoZW50aWNhdGUnKSB7XG4gICAgICAgICAgY29uc3QgeyBzZXJ2ZXJOYW1lIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgICAgIGdldE1jcENvbmZpZ0J5TmFtZShzZXJ2ZXJOYW1lKSA/P1xuICAgICAgICAgICAgbWNwQ2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKT8uY29uZmlnID8/XG4gICAgICAgICAgICBjdXJyZW50QXBwU3RhdGUubWNwLmNsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgPy5jb25maWcgPz9cbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGBTZXJ2ZXIgbm90IGZvdW5kOiAke3NlcnZlck5hbWV9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlICE9PSAnc3NlJyAmJiBjb25maWcudHlwZSAhPT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgIGBTZXJ2ZXIgdHlwZSBcIiR7Y29uZmlnLnR5cGV9XCIgZG9lcyBub3Qgc3VwcG9ydCBPQXV0aCBhdXRoZW50aWNhdGlvbmAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIEFib3J0IGFueSBwcmV2aW91cyBpbi1mbGlnaHQgT0F1dGggZmxvdyBmb3IgdGhpcyBzZXJ2ZXJcbiAgICAgICAgICAgICAgYWN0aXZlT0F1dGhGbG93cy5nZXQoc2VydmVyTmFtZSk/LmFib3J0KClcbiAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgICBhY3RpdmVPQXV0aEZsb3dzLnNldChzZXJ2ZXJOYW1lLCBjb250cm9sbGVyKVxuXG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIGF1dGggVVJMIGZyb20gdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlQXV0aFVybDogKHVybDogc3RyaW5nKSA9PiB2b2lkXG4gICAgICAgICAgICAgIGNvbnN0IGF1dGhVcmxQcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlQXV0aFVybCA9IHJlc29sdmVcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgT0F1dGggZmxvdyBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICBjb25zdCBvYXV0aFByb21pc2UgPSBwZXJmb3JtTUNQT0F1dGhGbG93KFxuICAgICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIHVybCA9PiByZXNvbHZlQXV0aFVybCEodXJsKSxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBza2lwQnJvd3Nlck9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICBvbldhaXRpbmdGb3JDYWxsYmFjazogc3VibWl0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2F1dGhDYWxsYmFja1N1Ym1pdHRlcnMuc2V0KHNlcnZlck5hbWUsIHN1Ym1pdClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBhdXRoIFVSTCAob3IgdGhlIGZsb3cgdG8gY29tcGxldGUgd2l0aG91dCBuZWVkaW5nIHJlZGlyZWN0KVxuICAgICAgICAgICAgICBjb25zdCBhdXRoVXJsID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgICAgICBhdXRoVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICBvYXV0aFByb21pc2UudGhlbigoKSA9PiBudWxsIGFzIHN0cmluZyB8IG51bGwpLFxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGlmIChhdXRoVXJsKSB7XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgYXV0aFVybCxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVzVXNlckFjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVzVXNlckFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFN0b3JlIGF1dGgtb25seSBwcm9taXNlIGZvciBtY3Bfb2F1dGhfY2FsbGJhY2tfdXJsIGhhbmRsZXIuXG4gICAgICAgICAgICAgIC8vIERvbid0IHN3YWxsb3cgZXJyb3JzIFx1MjAxNCB0aGUgY2FsbGJhY2sgaGFuZGxlciBuZWVkcyB0byBkZXRlY3RcbiAgICAgICAgICAgICAgLy8gYXV0aCBmYWlsdXJlcyBhbmQgcmVwb3J0IHRoZW0gdG8gdGhlIGNhbGxlci5cbiAgICAgICAgICAgICAgb2F1dGhBdXRoUHJvbWlzZXMuc2V0KHNlcnZlck5hbWUsIG9hdXRoUHJvbWlzZSlcblxuICAgICAgICAgICAgICAvLyBIYW5kbGUgYmFja2dyb3VuZCBjb21wbGV0aW9uIFx1MjAxNCByZWNvbm5lY3QgYWZ0ZXIgYXV0aC5cbiAgICAgICAgICAgICAgLy8gV2hlbiBtYW51YWwgY2FsbGJhY2sgaXMgdXNlZCwgc2tpcCB0aGUgcmVjb25uZWN0IGhlcmU7XG4gICAgICAgICAgICAgIC8vIHRoZSBleHRlbnNpb24ncyBoYW5kbGVBdXRoRG9uZSBcdTIxOTIgbWNwX3JlY29ubmVjdCBoYW5kbGVzIGl0XG4gICAgICAgICAgICAgIC8vICh3aGljaCBhbHNvIHVwZGF0ZXMgZHluYW1pY01jcFN0YXRlIGZvciB0b29sIHJlZ2lzdHJhdGlvbikuXG4gICAgICAgICAgICAgIGNvbnN0IGZ1bGxGbG93UHJvbWlzZSA9IG9hdXRoUHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIERvbid0IHJlY29ubmVjdCBpZiB0aGUgc2VydmVyIHdhcyBkaXNhYmxlZCBkdXJpbmcgdGhlIE9BdXRoIGZsb3dcbiAgICAgICAgICAgICAgICAgIGlmIChpc01jcFNlcnZlckRpc2FibGVkKHNlcnZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gU2tpcCByZWNvbm5lY3QgaWYgdGhlIG1hbnVhbCBjYWxsYmFjayBwYXRoIHdhcyB1c2VkIFx1MjAxNFxuICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlQXV0aERvbmUgd2lsbCBkbyBpdCB2aWEgbWNwX3JlY29ubmVjdCAod2hpY2hcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZXMgZHluYW1pY01jcFN0YXRlIGZvciB0b29sIHJlZ2lzdHJhdGlvbikuXG4gICAgICAgICAgICAgICAgICBpZiAob2F1dGhNYW51YWxDYWxsYmFja1VzZWQuaGFzKHNlcnZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gUmVjb25uZWN0IHRoZSBzZXJ2ZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBhdXRoXG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lID8gcmVzdWx0LmNsaWVudCA6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB0b29sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC50b29scyxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AuY29tbWFuZHMsIGMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcihjLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQuY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVzb3VyY2VzICYmIHJlc3VsdC5yZXNvdXJjZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYubWNwLnJlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZXJ2ZXJOYW1lXTogcmVzdWx0LnJlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogb21pdChwcmV2Lm1jcC5yZXNvdXJjZXMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAvLyBBbHNvIHVwZGF0ZSBkeW5hbWljTWNwU3RhdGUgc28gcnVuKCkgcGlja3MgdXAgdGhlIG5ldyB0b29sc1xuICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIG5leHQgdHVybiAocnVuKCkgcmVhZHMgZHluYW1pY01jcFN0YXRlLCBub3QgYXBwU3RhdGUpXG4gICAgICAgICAgICAgICAgICBkeW5hbWljTWNwU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmR5bmFtaWNNY3BTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmR5bmFtaWNNY3BTdGF0ZS5jbGllbnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPT4gYy5uYW1lICE9PSBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUudG9vbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9PiAhdC5uYW1lPy5zdGFydHNXaXRoKHByZWZpeCksXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQudG9vbHMsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgICBgTUNQIE9BdXRoIGZhaWxlZCBmb3IgJHtzZXJ2ZXJOYW1lfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBvbmx5IGlmIHRoaXMgaXMgc3RpbGwgdGhlIGFjdGl2ZSBmbG93XG4gICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlT0F1dGhGbG93cy5nZXQoc2VydmVyTmFtZSkgPT09IGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlT0F1dGhGbG93cy5kZWxldGUoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgb2F1dGhDYWxsYmFja1N1Ym1pdHRlcnMuZGVsZXRlKHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgICAgICAgIG9hdXRoTWFudWFsQ2FsbGJhY2tVc2VkLmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBvYXV0aEF1dGhQcm9taXNlcy5kZWxldGUoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB2b2lkIGZ1bGxGbG93UHJvbWlzZVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX29hdXRoX2NhbGxiYWNrX3VybCcpIHtcbiAgICAgICAgICBjb25zdCB7IHNlcnZlck5hbWUsIGNhbGxiYWNrVXJsIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBjb25zdCBzdWJtaXQgPSBvYXV0aENhbGxiYWNrU3VibWl0dGVycy5nZXQoc2VydmVyTmFtZSlcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgY2FsbGJhY2sgVVJMIGJlZm9yZSBzdWJtaXR0aW5nLiBUaGUgc3VibWl0XG4gICAgICAgICAgICAvLyBjYWxsYmFjayBpbiBhdXRoLnRzIHNpbGVudGx5IGlnbm9yZXMgVVJMcyBtaXNzaW5nIGEgY29kZVxuICAgICAgICAgICAgLy8gcGFyYW0sIHdoaWNoIHdvdWxkIGxlYXZlIHRoZSBhdXRoIHByb21pc2UgdW5yZXNvbHZlZCBhbmRcbiAgICAgICAgICAgIC8vIGJsb2NrIHRoZSBjb250cm9sIG1lc3NhZ2UgbG9vcCB1bnRpbCB0aW1lb3V0LlxuICAgICAgICAgICAgbGV0IGhhc0NvZGVPckVycm9yID0gZmFsc2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVUkwoY2FsbGJhY2tVcmwpXG4gICAgICAgICAgICAgIGhhc0NvZGVPckVycm9yID1cbiAgICAgICAgICAgICAgICBwYXJzZWQuc2VhcmNoUGFyYW1zLmhhcygnY29kZScpIHx8XG4gICAgICAgICAgICAgICAgcGFyc2VkLnNlYXJjaFBhcmFtcy5oYXMoJ2Vycm9yJylcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAvLyBJbnZhbGlkIFVSTFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNDb2RlT3JFcnJvcikge1xuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAnSW52YWxpZCBjYWxsYmFjayBVUkw6IG1pc3NpbmcgYXV0aG9yaXphdGlvbiBjb2RlLiBQbGVhc2UgcGFzdGUgdGhlIGZ1bGwgcmVkaXJlY3QgVVJMIGluY2x1ZGluZyB0aGUgY29kZSBwYXJhbWV0ZXIuJyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2F1dGhNYW51YWxDYWxsYmFja1VzZWQuYWRkKHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgIHN1Ym1pdChjYWxsYmFja1VybClcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXV0aCAodG9rZW4gZXhjaGFuZ2UpIHRvIGNvbXBsZXRlIGJlZm9yZSByZXNwb25kaW5nLlxuICAgICAgICAgICAgICAvLyBSZWNvbm5lY3QgaXMgaGFuZGxlZCBieSB0aGUgZXh0ZW5zaW9uIHZpYSBoYW5kbGVBdXRoRG9uZSBcdTIxOTJcbiAgICAgICAgICAgICAgLy8gbWNwX3JlY29ubmVjdCAod2hpY2ggdXBkYXRlcyBkeW5hbWljTWNwU3RhdGUgZm9yIHRvb2xzKS5cbiAgICAgICAgICAgICAgY29uc3QgYXV0aFByb21pc2UgPSBvYXV0aEF1dGhQcm9taXNlcy5nZXQoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgaWYgKGF1dGhQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGF1dGhQcm9taXNlXG4gICAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICA6ICdPQXV0aCBhdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgYE5vIGFjdGl2ZSBPQXV0aCBmbG93IGZvciBzZXJ2ZXI6ICR7c2VydmVyTmFtZX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9hdXRoZW50aWNhdGUnKSB7XG4gICAgICAgICAgLy8gQW50aHJvcGljIE9BdXRoIG92ZXIgdGhlIGNvbnRyb2wgY2hhbm5lbC4gVGhlIFNESyBjbGllbnQgb3duc1xuICAgICAgICAgIC8vIHRoZSB1c2VyJ3MgYnJvd3NlciAod2UncmUgaGVhZGxlc3MgaW4gLXAgbW9kZSk7IHdlIGhhbmQgYmFja1xuICAgICAgICAgIC8vIGJvdGggVVJMcyBhbmQgd2FpdC4gQXV0b21hdGljIFVSTCBcdTIxOTIgbG9jYWxob3N0IGxpc3RlbmVyIGNhdGNoZXNcbiAgICAgICAgICAvLyB0aGUgcmVkaXJlY3QgaWYgdGhlIGJyb3dzZXIgaXMgb24gdGhpcyBob3N0OyBtYW51YWwgVVJMIFx1MjE5MiB0aGVcbiAgICAgICAgICAvLyBzdWNjZXNzIHBhZ2Ugc2hvd3MgXCJjb2RlI3N0YXRlXCIgZm9yIGNsYXVkZV9vYXV0aF9jYWxsYmFjay5cbiAgICAgICAgICBjb25zdCB7IGxvZ2luV2l0aENsYXVkZUFpIH0gPSBtZXNzYWdlLnJlcXVlc3RcblxuICAgICAgICAgIC8vIENsZWFuIHVwIGFueSBwcmlvciBmbG93LiBjbGVhbnVwKCkgY2xvc2VzIHRoZSBsb2NhbGhvc3QgbGlzdGVuZXJcbiAgICAgICAgICAvLyBhbmQgbnVsbHMgdGhlIG1hbnVhbCByZXNvbHZlci4gVGhlIHByaW9yIGBmbG93YCBwcm9taXNlIGlzIGxlZnRcbiAgICAgICAgICAvLyBwZW5kaW5nIChBdXRoQ29kZUxpc3RlbmVyLmNsb3NlKCkgZG9lcyBub3QgcmVqZWN0KSBidXQgaXRzIG9iamVjdFxuICAgICAgICAgIC8vIGdyYXBoIGJlY29tZXMgdW5yZWFjaGFibGUgb25jZSB0aGUgc2VydmVyIGhhbmRsZSBpcyByZWxlYXNlZCBhbmRcbiAgICAgICAgICAvLyBpcyBHQydkIFx1MjAxNCBubyBmZCBvciBwb3J0IGlzIGhlbGQuXG4gICAgICAgICAgY2xhdWRlT0F1dGg/LnNlcnZpY2UuY2xlYW51cCgpXG5cbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfb2F1dGhfZmxvd19zdGFydCcsIHtcbiAgICAgICAgICAgIGxvZ2luV2l0aENsYXVkZUFpOiBsb2dpbldpdGhDbGF1ZGVBaSA/PyB0cnVlLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IE9BdXRoU2VydmljZSgpXG4gICAgICAgICAgbGV0IHVybFJlc29sdmVyITogKHVybHM6IHtcbiAgICAgICAgICAgIG1hbnVhbFVybDogc3RyaW5nXG4gICAgICAgICAgICBhdXRvbWF0aWNVcmw6IHN0cmluZ1xuICAgICAgICAgIH0pID0+IHZvaWRcbiAgICAgICAgICBjb25zdCB1cmxQcm9taXNlID0gbmV3IFByb21pc2U8e1xuICAgICAgICAgICAgbWFudWFsVXJsOiBzdHJpbmdcbiAgICAgICAgICAgIGF1dG9tYXRpY1VybDogc3RyaW5nXG4gICAgICAgICAgfT4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB1cmxSZXNvbHZlciA9IHJlc29sdmVcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZmxvdyA9IHNlcnZpY2VcbiAgICAgICAgICAgIC5zdGFydE9BdXRoRmxvdyhcbiAgICAgICAgICAgICAgYXN5bmMgKG1hbnVhbFVybCwgYXV0b21hdGljVXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljVXJsIGlzIGFsd2F5cyBkZWZpbmVkIHdoZW4gc2tpcEJyb3dzZXJPcGVuIGlzIHNldDtcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2lnbmF0dXJlIGlzIG9wdGlvbmFsIG9ubHkgZm9yIHRoZSBleGlzdGluZyBzaW5nbGUtYXJnIGNhbGxlcnMuXG4gICAgICAgICAgICAgICAgdXJsUmVzb2x2ZXIoeyBtYW51YWxVcmwsIGF1dG9tYXRpY1VybDogYXV0b21hdGljVXJsISB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9naW5XaXRoQ2xhdWRlQWk6IGxvZ2luV2l0aENsYXVkZUFpID8/IHRydWUsXG4gICAgICAgICAgICAgICAgc2tpcEJyb3dzZXJPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgdG9rZW5zID0+IHtcbiAgICAgICAgICAgICAgLy8gaW5zdGFsbE9BdXRoVG9rZW5zOiBwZXJmb3JtTG9nb3V0IChjbGVhciBzdGFsZSBzdGF0ZSkgXHUyMTkyXG4gICAgICAgICAgICAgIC8vIHN0b3JlIHByb2ZpbGUgXHUyMTkyIHNhdmVPQXV0aFRva2Vuc0lmTmVlZGVkIFx1MjE5MiBjbGVhck9BdXRoVG9rZW5DYWNoZVxuICAgICAgICAgICAgICAvLyBcdTIxOTIgY2xlYXJBdXRoUmVsYXRlZENhY2hlcy4gQWZ0ZXIgdGhpcyByZXNvbHZlcywgdGhlIG1lbW9pemVkXG4gICAgICAgICAgICAgIC8vIGdldENsYXVkZUFJT0F1dGhUb2tlbnMgaW4gdGhpcyBwcm9jZXNzIGlzIGludmFsaWRhdGVkOyB0aGVcbiAgICAgICAgICAgICAgLy8gbmV4dCBBUEkgY2FsbCByZS1yZWFkcyBrZXljaGFpbi9maWxlIGFuZCB3b3Jrcy4gTm8gcmVzcGF3bi5cbiAgICAgICAgICAgICAgYXdhaXQgaW5zdGFsbE9BdXRoVG9rZW5zKHRva2VucylcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X29hdXRoX3N1Y2Nlc3MnLCB7XG4gICAgICAgICAgICAgICAgbG9naW5XaXRoQ2xhdWRlQWk6IGxvZ2luV2l0aENsYXVkZUFpID8/IHRydWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmNsZWFudXAoKVxuICAgICAgICAgICAgICBpZiAoY2xhdWRlT0F1dGg/LnNlcnZpY2UgPT09IHNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICBjbGF1ZGVPQXV0aCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIGNsYXVkZU9BdXRoID0geyBzZXJ2aWNlLCBmbG93IH1cblxuICAgICAgICAgIC8vIEF0dGFjaCB0aGUgcmVqZWN0aW9uIGhhbmRsZXIgYmVmb3JlIGF3YWl0aW5nIHNvIGEgc3luY2hyb25vdXNcbiAgICAgICAgICAvLyBzdGFydE9BdXRoRmxvdyBmYWlsdXJlIGRvZXNuJ3Qgc3VyZmFjZSBhcyBhbiB1bmhhbmRsZWQgcmVqZWN0aW9uLlxuICAgICAgICAgIC8vIFRoZSBjbGF1ZGVfb2F1dGhfY2FsbGJhY2sgaGFuZGxlciByZS1hd2FpdHMgZmxvdyBmb3IgdGhlIG1hbnVhbFxuICAgICAgICAgIC8vIHBhdGggYW5kIHN1cmZhY2VzIHRoZSByZWFsIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICAgICAgdm9pZCBmbG93LmNhdGNoKGVyciA9PlxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBjbGF1ZGVfYXV0aGVudGljYXRlIGZsb3cgZW5kZWQ6ICR7ZXJyfWAsIHtcbiAgICAgICAgICAgICAgbGV2ZWw6ICdpbmZvJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSYWNlIGFnYWluc3QgZmxvdzogaWYgc3RhcnRPQXV0aEZsb3cgcmVqZWN0cyBiZWZvcmUgY2FsbGluZ1xuICAgICAgICAgICAgLy8gdGhlIGF1dGhVUkxIYW5kbGVyIChlLmcuIEF1dGhDb2RlTGlzdGVuZXIuc3RhcnQoKSBmYWlscyB3aXRoXG4gICAgICAgICAgICAvLyBFQUNDRVMgb3IgZmQgZXhoYXVzdGlvbiksIHVybFByb21pc2Ugd291bGQgcGVuZCBmb3JldmVyIGFuZFxuICAgICAgICAgICAgLy8gd2VkZ2UgdGhlIHN0ZGluIGxvb3AuIGZsb3cgcmVzb2x2aW5nIGZpcnN0IGlzIHVucmVhY2hhYmxlIGluXG4gICAgICAgICAgICAvLyBwcmFjdGljZSAoaXQncyBzdXNwZW5kZWQgb24gdGhlIHNhbWUgdXJscyB3ZSdyZSB3YWl0aW5nIGZvcikuXG4gICAgICAgICAgICBjb25zdCB7IG1hbnVhbFVybCwgYXV0b21hdGljVXJsIH0gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgICB1cmxQcm9taXNlLFxuICAgICAgICAgICAgICBmbG93LnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICdPQXV0aCBmbG93IGNvbXBsZXRlZCB3aXRob3V0IHByb2R1Y2luZyBhdXRoIFVSTHMnLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwge1xuICAgICAgICAgICAgICBtYW51YWxVcmwsXG4gICAgICAgICAgICAgIGF1dG9tYXRpY1VybCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBlcnJvck1lc3NhZ2UoZXJyb3IpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9vYXV0aF9jYWxsYmFjaycgfHxcbiAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9vYXV0aF93YWl0X2Zvcl9jb21wbGV0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIWNsYXVkZU9BdXRoKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICdObyBhY3RpdmUgY2xhdWRlX2F1dGhlbnRpY2F0ZSBmbG93JyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSBtYW51YWwgY29kZSBzeW5jaHJvbm91c2x5IFx1MjAxNCBtdXN0IGhhcHBlbiBpbiBzdGRpblxuICAgICAgICAgICAgLy8gbWVzc2FnZSBvcmRlciBzbyBhIHN1YnNlcXVlbnQgY2xhdWRlX2F1dGhlbnRpY2F0ZSBkb2Vzbid0XG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBzZXJ2aWNlIGJlZm9yZSB0aGlzIGNvZGUgbGFuZHMuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjbGF1ZGVfb2F1dGhfY2FsbGJhY2snKSB7XG4gICAgICAgICAgICAgIGNsYXVkZU9BdXRoLnNlcnZpY2UuaGFuZGxlTWFudWFsQXV0aENvZGVJbnB1dCh7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbkNvZGU6IG1lc3NhZ2UucmVxdWVzdC5hdXRob3JpemF0aW9uQ29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogbWVzc2FnZS5yZXF1ZXN0LnN0YXRlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGV0YWNoIHRoZSBhd2FpdCBcdTIwMTQgdGhlIHN0ZGluIHJlYWRlciBpcyBzZXJpYWwgYW5kIGJsb2NraW5nXG4gICAgICAgICAgICAvLyBoZXJlIGRlYWRsb2NrcyBjbGF1ZGVfb2F1dGhfd2FpdF9mb3JfY29tcGxldGlvbjogZmxvdyBtYXlcbiAgICAgICAgICAgIC8vIG9ubHkgcmVzb2x2ZSB2aWEgYSBmdXR1cmUgY2xhdWRlX29hdXRoX2NhbGxiYWNrIG9uIHN0ZGluLFxuICAgICAgICAgICAgLy8gd2hpY2ggY2FuJ3QgYmUgcmVhZCB3aGlsZSB3ZSdyZSBwYXJrZWQuIENhcHR1cmUgdGhlIGJpbmRpbmc7XG4gICAgICAgICAgICAvLyBjbGF1ZGVPQXV0aCBpcyBudWxsZWQgaW4gZmxvdydzIG93biAuZmluYWxseS5cbiAgICAgICAgICAgIGNvbnN0IHsgZmxvdyB9ID0gY2xhdWRlT0F1dGhcbiAgICAgICAgICAgIHZvaWQgZmxvdy50aGVuKFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudEluZm8gPSBnZXRBY2NvdW50SW5mb3JtYXRpb24oKVxuICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGFjY291bnRJbmZvPy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiBhY2NvdW50SW5mbz8ub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25UeXBlOiBhY2NvdW50SW5mbz8uc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0b2tlblNvdXJjZTogYWNjb3VudEluZm8/LnRva2VuU291cmNlLFxuICAgICAgICAgICAgICAgICAgICBhcGlLZXlTb3VyY2U6IGFjY291bnRJbmZvPy5hcGlLZXlTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIGFwaVByb3ZpZGVyOiBnZXRBUElQcm92aWRlcigpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9jbGVhcl9hdXRoJykge1xuICAgICAgICAgIGNvbnN0IHsgc2VydmVyTmFtZSB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9XG4gICAgICAgICAgICBnZXRNY3BDb25maWdCeU5hbWUoc2VydmVyTmFtZSkgPz9cbiAgICAgICAgICAgIG1jcENsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgID8uY29uZmlnID8/XG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBgU2VydmVyIG5vdCBmb3VuZDogJHtzZXJ2ZXJOYW1lfWApXG4gICAgICAgICAgfSBlbHNlIGlmIChjb25maWcudHlwZSAhPT0gJ3NzZScgJiYgY29uZmlnLnR5cGUgIT09ICdodHRwJykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICBgQ2Fubm90IGNsZWFyIGF1dGggZm9yIHNlcnZlciB0eXBlIFwiJHtjb25maWcudHlwZX1cImAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHJldm9rZVNlcnZlclRva2VucyhzZXJ2ZXJOYW1lLCBjb25maWcpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGdldE1jcFByZWZpeChzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICBtY3A6IHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2Lm1jcCxcbiAgICAgICAgICAgICAgICBjbGllbnRzOiBwcmV2Lm1jcC5jbGllbnRzLm1hcChjID0+XG4gICAgICAgICAgICAgICAgICBjLm5hbWUgPT09IHNlcnZlck5hbWUgPyByZXN1bHQuY2xpZW50IDogYyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHRvb2xzOiBbXG4gICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AudG9vbHMsIHQgPT4gdC5uYW1lPy5zdGFydHNXaXRoKHByZWZpeCkpLFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LnRvb2xzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlamVjdChwcmV2Lm1jcC5jb21tYW5kcywgYyA9PlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kQmVsb25nc1RvU2VydmVyKGMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5jb21tYW5kcyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlc291cmNlczpcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZXNvdXJjZXMgJiYgcmVzdWx0LnJlc291cmNlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldi5tY3AucmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlcnZlck5hbWVdOiByZXN1bHQucmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2FwcGx5X2ZsYWdfc2V0dGluZ3MnKSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgdGhlIGN1cnJlbnQgbW9kZWwgYmVmb3JlIGFwcGx5aW5nIFx1MjAxNCB3ZSBuZWVkIHRvIGRldGVjdFxuICAgICAgICAgIC8vIG1vZGVsIHN3aXRjaGVzIHNvIHdlIGNhbiBpbmplY3QgYnJlYWRjcnVtYnMgYW5kIG5vdGlmeSBsaXN0ZW5lcnMuXG4gICAgICAgICAgY29uc3QgcHJldk1vZGVsID0gZ2V0TWFpbkxvb3BNb2RlbCgpXG5cbiAgICAgICAgICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgc2V0dGluZ3MgaW50byB0aGUgaW4tbWVtb3J5IGZsYWcgc2V0dGluZ3NcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGdldEZsYWdTZXR0aW5nc0lubGluZSgpID8/IHt9XG4gICAgICAgICAgY29uc3QgaW5jb21pbmcgPSBtZXNzYWdlLnJlcXVlc3Quc2V0dGluZ3NcbiAgICAgICAgICAvLyBTaGFsbG93LW1lcmdlIHRvcC1sZXZlbCBrZXlzOyBnZXRTZXR0aW5nc0ZvclNvdXJjZSBoYW5kbGVzXG4gICAgICAgICAgLy8gdGhlIGRlZXAgbWVyZ2Ugd2l0aCBmaWxlLWJhc2VkIGZsYWcgc2V0dGluZ3MgdmlhIG1lcmdlV2l0aC5cbiAgICAgICAgICAvLyBKU09OIHNlcmlhbGl6YXRpb24gZHJvcHMgYHVuZGVmaW5lZGAsIHNvIGNhbGxlcnMgdXNlIGBudWxsYFxuICAgICAgICAgIC8vIHRvIHNpZ25hbCBcImNsZWFyIHRoaXMga2V5XCIuIENvbnZlcnQgbnVsbHMgdG8gZGVsZXRpb25zIHNvXG4gICAgICAgICAgLy8gU2V0dGluZ3NTY2hlbWEoKS5zYWZlUGFyc2UoKSBkb2Vzbid0IHJlamVjdCB0aGUgd2hvbGUgb2JqZWN0XG4gICAgICAgICAgLy8gKHouc3RyaW5nKCkub3B0aW9uYWwoKSBhY2NlcHRzIHN0cmluZyB8IHVuZGVmaW5lZCwgbm90IG51bGwpLlxuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4uZXhpc3RpbmcsIC4uLmluY29taW5nIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtZXJnZWQpKSB7XG4gICAgICAgICAgICBpZiAobWVyZ2VkW2tleSBhcyBrZXlvZiB0eXBlb2YgbWVyZ2VkXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBkZWxldGUgbWVyZ2VkW2tleSBhcyBrZXlvZiB0eXBlb2YgbWVyZ2VkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRGbGFnU2V0dGluZ3NJbmxpbmUobWVyZ2VkKVxuICAgICAgICAgIC8vIFJvdXRlIHRocm91Z2ggbm90aWZ5Q2hhbmdlIHNvIGZhbk91dCgpIHJlc2V0cyB0aGUgc2V0dGluZ3MgY2FjaGVcbiAgICAgICAgICAvLyBiZWZvcmUgbGlzdGVuZXJzIHJ1bi4gVGhlIHN1YnNjcmliZXIgYXQgOjM5MiBjYWxsc1xuICAgICAgICAgIC8vIGFwcGx5U2V0dGluZ3NDaGFuZ2UgZm9yIHVzLiBQcmUtIzIwNjI1IHRoaXMgd2FzIGEgZGlyZWN0XG4gICAgICAgICAgLy8gYXBwbHlTZXR0aW5nc0NoYW5nZSgpIGNhbGwgdGhhdCByZWxpZWQgb24gaXRzIG93biBpbnRlcm5hbCByZXNldCBcdTIwMTRcbiAgICAgICAgICAvLyBub3cgdGhhdCB0aGUgcmVzZXQgaXMgY2VudHJhbGl6ZWQgaW4gZmFuT3V0LCBhIGRpcmVjdCBjYWxsIGhlcmVcbiAgICAgICAgICAvLyB3b3VsZCByZWFkIHN0YWxlIGNhY2hlZCBzZXR0aW5ncyBhbmQgc2lsZW50bHkgZHJvcCB0aGUgdXBkYXRlLlxuICAgICAgICAgIC8vIEJvbnVzOiBnb2luZyB0aHJvdWdoIG5vdGlmeUNoYW5nZSBhbHNvIHRlbGxzIHRoZSBvdGhlciBzdWJzY3JpYmVyc1xuICAgICAgICAgIC8vIChsb2FkUGx1Z2luSG9va3MsIHNhbmRib3gtYWRhcHRlcikgYWJvdXQgdGhlIGNoYW5nZSwgd2hpY2ggdGhlXG4gICAgICAgICAgLy8gcHJldmlvdXMgZGlyZWN0IGNhbGwgc2tpcHBlZC5cbiAgICAgICAgICBzZXR0aW5nc0NoYW5nZURldGVjdG9yLm5vdGlmeUNoYW5nZSgnZmxhZ1NldHRpbmdzJylcblxuICAgICAgICAgIC8vIElmIHRoZSBpbmNvbWluZyBzZXR0aW5ncyBpbmNsdWRlIGEgbW9kZWwgY2hhbmdlLCB1cGRhdGUgdGhlXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgc28gZ2V0TWFpbkxvb3BNb2RlbCgpIHJlZmxlY3RzIGl0LiBUaGUgb3ZlcnJpZGUgaGFzXG4gICAgICAgICAgLy8gaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIHNldHRpbmdzIGNhc2NhZGUgaW5cbiAgICAgICAgICAvLyBnZXRVc2VyU3BlY2lmaWVkTW9kZWxTZXR0aW5nKCksIHNvIHdpdGhvdXQgdGhpcyB1cGRhdGUsXG4gICAgICAgICAgLy8gZ2V0TWFpbkxvb3BNb2RlbCgpIHJldHVybnMgdGhlIHN0YWxlIG92ZXJyaWRlIGFuZCB0aGUgbW9kZWxcbiAgICAgICAgICAvLyBjaGFuZ2UgaXMgc2lsZW50bHkgaWdub3JlZCAobWF0Y2hpbmcgc2V0X21vZGVsIGF0IDoyODExKS5cbiAgICAgICAgICBpZiAoJ21vZGVsJyBpbiBpbmNvbWluZykge1xuICAgICAgICAgICAgaWYgKGluY29taW5nLm1vZGVsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKFN0cmluZyhpbmNvbWluZy5tb2RlbCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRNYWluTG9vcE1vZGVsT3ZlcnJpZGUodW5kZWZpbmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBtb2RlbCBjaGFuZ2VkLCBpbmplY3QgYnJlYWRjcnVtYnMgc28gdGhlIG1vZGVsIHNlZXMgdGhlXG4gICAgICAgICAgLy8gbWlkLWNvbnZlcnNhdGlvbiBzd2l0Y2gsIGFuZCBub3RpZnkgbWV0YWRhdGEgbGlzdGVuZXJzIChDQ1IpLlxuICAgICAgICAgIGNvbnN0IG5ld01vZGVsID0gZ2V0TWFpbkxvb3BNb2RlbCgpXG4gICAgICAgICAgaWYgKG5ld01vZGVsICE9PSBwcmV2TW9kZWwpIHtcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTcGVjaWZpZWRNb2RlbCA9IG5ld01vZGVsXG4gICAgICAgICAgICBjb25zdCBtb2RlbEFyZyA9IGluY29taW5nLm1vZGVsID8gU3RyaW5nKGluY29taW5nLm1vZGVsKSA6ICdkZWZhdWx0J1xuICAgICAgICAgICAgbm90aWZ5U2Vzc2lvbk1ldGFkYXRhQ2hhbmdlZCh7IG1vZGVsOiBuZXdNb2RlbCB9KVxuICAgICAgICAgICAgaW5qZWN0TW9kZWxTd2l0Y2hCcmVhZGNydW1icyhtb2RlbEFyZywgbmV3TW9kZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2dldF9zZXR0aW5ncycpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBnZXRNYWluTG9vcE1vZGVsKClcbiAgICAgICAgICAvLyBtb2RlbFN1cHBvcnRzRWZmb3J0IGdhdGUgbWF0Y2hlcyBjbGF1ZGUudHMgXHUyMDE0IGFwcGxpZWQuZWZmb3J0IG11c3RcbiAgICAgICAgICAvLyBtaXJyb3Igd2hhdCBhY3R1YWxseSBnb2VzIHRvIHRoZSBBUEksIG5vdCBqdXN0IHdoYXQncyBjb25maWd1cmVkLlxuICAgICAgICAgIGNvbnN0IGVmZm9ydCA9IG1vZGVsU3VwcG9ydHNFZmZvcnQobW9kZWwpXG4gICAgICAgICAgICA/IHJlc29sdmVBcHBsaWVkRWZmb3J0KG1vZGVsLCBjdXJyZW50QXBwU3RhdGUuZWZmb3J0VmFsdWUpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgIC4uLmdldFNldHRpbmdzV2l0aFNvdXJjZXMoKSxcbiAgICAgICAgICAgIGFwcGxpZWQ6IHtcbiAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgIC8vIE51bWVyaWMgZWZmb3J0IChhbnQtb25seSkgXHUyMTkyIG51bGw7IFNESyBzY2hlbWEgaXMgc3RyaW5nLWxldmVsIG9ubHkuXG4gICAgICAgICAgICAgIGVmZm9ydDogdHlwZW9mIGVmZm9ydCA9PT0gJ3N0cmluZycgPyBlZmZvcnQgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnc3RvcF90YXNrJykge1xuICAgICAgICAgIGNvbnN0IHsgdGFza19pZDogdGFza0lkIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgc3RvcFRhc2sodGFza0lkLCB7XG4gICAgICAgICAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7fSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnZ2VuZXJhdGVfc2Vzc2lvbl90aXRsZScpIHtcbiAgICAgICAgICAvLyBGaXJlLWFuZC1mb3JnZXQgc28gdGhlIEhhaWt1IGNhbGwgZG9lcyBub3QgYmxvY2sgdGhlIHN0ZGluIGxvb3BcbiAgICAgICAgICAvLyAod2hpY2ggd291bGQgZGVsYXkgcHJvY2Vzc2luZyBvZiBzdWJzZXF1ZW50IHVzZXIgbWVzc2FnZXMgL1xuICAgICAgICAgIC8vIGludGVycnVwdHMgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgQVBJIHJvdW5kdHJpcCkuXG4gICAgICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgcGVyc2lzdCB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgLy8gUmV1c2UgdGhlIGxpdmUgY29udHJvbGxlciBvbmx5IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFib3J0ZWRcbiAgICAgICAgICAvLyAoZS5nLiBieSBpbnRlcnJ1cHQoKSk7IGFuIGFib3J0ZWQgc2lnbmFsIHdvdWxkIGNhdXNlIHF1ZXJ5SGFpa3UgdG9cbiAgICAgICAgICAvLyBpbW1lZGlhdGVseSB0aHJvdyBBUElVc2VyQWJvcnRFcnJvciBcdTIxOTIge3RpdGxlOiBudWxsfS5cbiAgICAgICAgICBjb25zdCB0aXRsZVNpZ25hbCA9IChcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciAmJiAhYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkXG4gICAgICAgICAgICAgID8gYWJvcnRDb250cm9sbGVyXG4gICAgICAgICAgICAgIDogY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICApLnNpZ25hbFxuICAgICAgICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgZ2VuZXJhdGVTZXNzaW9uVGl0bGUoZGVzY3JpcHRpb24sIHRpdGxlU2lnbmFsKVxuICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgcGVyc2lzdCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBzYXZlQWlHZW5lcmF0ZWRUaXRsZShnZXRTZXNzaW9uSWQoKSBhcyBVVUlELCB0aXRsZSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7IHRpdGxlIH0pXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIFVucmVhY2hhYmxlIGluIHByYWN0aWNlIFx1MjAxNCBnZW5lcmF0ZVNlc3Npb25UaXRsZSB3cmFwcyBpdHNcbiAgICAgICAgICAgICAgLy8gb3duIGJvZHkgYW5kIHJldHVybnMgbnVsbCwgc2F2ZUFpR2VuZXJhdGVkVGl0bGUgaXMgd3JhcHBlZFxuICAgICAgICAgICAgICAvLyBhYm92ZS4gUHJvcGFnYXRlIChub3Qgc3dhbGxvdykgc28gdW5leHBlY3RlZCBmYWlsdXJlcyBhcmVcbiAgICAgICAgICAgICAgLy8gdmlzaWJsZSB0byB0aGUgU0RLIGNhbGxlciAoaG9zdENvbW1zLnRzIGNhdGNoZXMgYW5kIGxvZ3MpLlxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgZXJyb3JNZXNzYWdlKGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKClcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3NpZGVfcXVlc3Rpb24nKSB7XG4gICAgICAgICAgLy8gU2FtZSBmaXJlLWFuZC1mb3JnZXQgcGF0dGVybiBhcyBnZW5lcmF0ZV9zZXNzaW9uX3RpdGxlIGFib3ZlIFx1MjAxNFxuICAgICAgICAgIC8vIHRoZSBmb3JrZWQgYWdlbnQncyBBUEkgcm91bmR0cmlwIG11c3Qgbm90IGJsb2NrIHRoZSBzdGRpbiBsb29wLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gVGhlIHNuYXBzaG90IGNhcHR1cmVkIGJ5IHN0b3BIb29rcyAoZm9yIHF1ZXJ5U291cmNlID09PSAnc2RrJylcbiAgICAgICAgICAvLyBob2xkcyB0aGUgZXhhY3Qgc3lzdGVtUHJvbXB0L3VzZXJDb250ZXh0L3N5c3RlbUNvbnRleHQvbWVzc2FnZXNcbiAgICAgICAgICAvLyBzZW50IG9uIHRoZSBsYXN0IG1haW4tdGhyZWFkIHR1cm4uIFJldXNpbmcgdGhlbSBnaXZlcyBhIGJ5dGUtXG4gICAgICAgICAgLy8gaWRlbnRpY2FsIHByZWZpeCBcdTIxOTIgcHJvbXB0IGNhY2hlIGhpdC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIEZhbGxiYWNrIChyZXN1bWUgYmVmb3JlIGZpcnN0IHR1cm4gY29tcGxldGVzIFx1MjAxNCBubyBzbmFwc2hvdCB5ZXQpOlxuICAgICAgICAgIC8vIHJlYnVpbGQgZnJvbSBzY3JhdGNoLiBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zIG1pcnJvcnNcbiAgICAgICAgICAvLyBRdWVyeUVuZ2luZS50czphc2soKSdzIHN5c3RlbSBwcm9tcHQgYXNzZW1ibHkgKGluY2x1ZGluZ1xuICAgICAgICAgIC8vIC0tc3lzdGVtLXByb21wdCAvIC0tYXBwZW5kLXN5c3RlbS1wcm9tcHQpIHNvIHRoZSByZWJ1aWx0IHByZWZpeFxuICAgICAgICAgIC8vIG1hdGNoZXMgaW4gdGhlIGNvbW1vbiBjYXNlLiBNYXkgc3RpbGwgbWlzcyB0aGUgY2FjaGUgZm9yXG4gICAgICAgICAgLy8gY29vcmRpbmF0b3IgbW9kZSBvciBtZW1vcnktbWVjaGFuaWNzIGV4dHJhcyBcdTIwMTQgYWNjZXB0YWJsZSwgdGhlXG4gICAgICAgICAgLy8gYWx0ZXJuYXRpdmUgaXMgdGhlIHNpZGUgcXVlc3Rpb24gZmFpbGluZyBlbnRpcmVseS5cbiAgICAgICAgICBjb25zdCB7IHF1ZXN0aW9uIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzYXZlZCA9IGdldExhc3RDYWNoZVNhZmVQYXJhbXMoKVxuICAgICAgICAgICAgICBjb25zdCBjYWNoZVNhZmVQYXJhbXMgPSBzYXZlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zYXZlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGxhc3QgdHVybiB3YXMgaW50ZXJydXB0ZWQsIHRoZSBzbmFwc2hvdCBob2xkcyBhblxuICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5LWFib3J0ZWQgY29udHJvbGxlcjsgY3JlYXRlQ2hpbGRBYm9ydENvbnRyb2xsZXIgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlU3ViYWdlbnRDb250ZXh0IHdvdWxkIHByb3BhZ2F0ZSBpdCBhbmQgdGhlIGZvcmtcbiAgICAgICAgICAgICAgICAgICAgLy8gd291bGQgZGllIGJlZm9yZSBzZW5kaW5nIGEgcmVxdWVzdC4gVGhlIGNvbnRyb2xsZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHBhcnQgb2YgdGhlIGNhY2hlIGtleSBcdTIwMTQgc3dhcHBpbmcgaW4gYSBmcmVzaCBvbmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FmZS4gU2FtZSBndWFyZCBhcyBnZW5lcmF0ZV9zZXNzaW9uX3RpdGxlIGFib3ZlLlxuICAgICAgICAgICAgICAgICAgICB0b29sVXNlQ29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnNhdmVkLnRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcjogY3JlYXRlQWJvcnRDb250cm9sbGVyKCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBhd2FpdCBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHM6IGJ1aWxkQWxsVG9vbHMoZ2V0QXBwU3RhdGUoKSksXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBjdXJyZW50Q29tbWFuZHMsXG4gICAgICAgICAgICAgICAgICAgIG1jcENsaWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5nZXRBcHBTdGF0ZSgpLm1jcC5jbGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLnNka0NsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0OiBvcHRpb25zLnN5c3RlbVByb21wdCxcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0OiBvcHRpb25zLmFwcGVuZFN5c3RlbVByb21wdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmtpbmdDb25maWc6IG9wdGlvbnMudGhpbmtpbmdDb25maWcsXG4gICAgICAgICAgICAgICAgICAgIGFnZW50czogY3VycmVudEFnZW50cyxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1blNpZGVRdWVzdGlvbih7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgY2FjaGVTYWZlUGFyYW1zLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7IHJlc3BvbnNlOiByZXN1bHQucmVzcG9uc2UgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgKGZlYXR1cmUoJ1BST0FDVElWRScpIHx8IGZlYXR1cmUoJ0tBSVJPUycpKSAmJlxuICAgICAgICAgIChtZXNzYWdlLnJlcXVlc3QgYXMgeyBzdWJ0eXBlOiBzdHJpbmcgfSkuc3VidHlwZSA9PT0gJ3NldF9wcm9hY3RpdmUnXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHJlcSA9IG1lc3NhZ2UucmVxdWVzdCBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgICAgIHN1YnR5cGU6IHN0cmluZ1xuICAgICAgICAgICAgZW5hYmxlZDogYm9vbGVhblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVxLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICghcHJvYWN0aXZlTW9kdWxlIS5pc1Byb2FjdGl2ZUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgIHByb2FjdGl2ZU1vZHVsZSEuYWN0aXZhdGVQcm9hY3RpdmUoJ2NvbW1hbmQnKVxuICAgICAgICAgICAgICBzY2hlZHVsZVByb2FjdGl2ZVRpY2shKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvYWN0aXZlTW9kdWxlIS5kZWFjdGl2YXRlUHJvYWN0aXZlKClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3JlbW90ZV9jb250cm9sJykge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnJlcXVlc3QuZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGJyaWRnZUhhbmRsZSkge1xuICAgICAgICAgICAgICAvLyBBbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbl91cmw6IGdldFJlbW90ZVNlc3Npb25VcmwoXG4gICAgICAgICAgICAgICAgICBicmlkZ2VIYW5kbGUuYnJpZGdlU2Vzc2lvbklkLFxuICAgICAgICAgICAgICAgICAgYnJpZGdlSGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY29ubmVjdF91cmw6IGJ1aWxkQnJpZGdlQ29ubmVjdFVybChcbiAgICAgICAgICAgICAgICAgIGJyaWRnZUhhbmRsZS5lbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICAgICAgYnJpZGdlSGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZW52aXJvbm1lbnRfaWQ6IGJyaWRnZUhhbmRsZS5lbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaW5pdFJlcGxCcmlkZ2Ugc3VyZmFjZXMgZ2F0ZS1mYWlsdXJlIHJlYXNvbnMgdmlhXG4gICAgICAgICAgICAgIC8vIG9uU3RhdGVDaGFuZ2UoJ2ZhaWxlZCcsIGRldGFpbCkgYmVmb3JlIHJldHVybmluZyBudWxsLlxuICAgICAgICAgICAgICAvLyBDYXB0dXJlIHNvIHRoZSBjb250cm9sLXJlc3BvbnNlIGVycm9yIGlzIGFjdGlvbmFibGVcbiAgICAgICAgICAgICAgLy8gKFwiL2xvZ2luXCIsIFwiZGlzYWJsZWQgYnkgeW91ciBvcmdhbml6YXRpb24ncyBwb2xpY3lcIiwgZXRjLilcbiAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGdlbmVyaWMgXCJpbml0aWFsaXphdGlvbiBmYWlsZWRcIi5cbiAgICAgICAgICAgICAgbGV0IGJyaWRnZUZhaWx1cmVEZXRhaWw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaW5pdFJlcGxCcmlkZ2UgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICAgICAgICdzcmMvYnJpZGdlL2luaXRSZXBsQnJpZGdlLmpzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBhd2FpdCBpbml0UmVwbEJyaWRnZSh7XG4gICAgICAgICAgICAgICAgICBvbkluYm91bmRNZXNzYWdlKG1zZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBleHRyYWN0SW5ib3VuZE1lc3NhZ2VGaWVsZHMobXNnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkcykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCwgdXVpZCB9ID0gZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIGVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdwcm9tcHQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpcFNsYXNoQ29tbWFuZHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgcnVuKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvblBlcm1pc3Npb25SZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3J3YXJkIGJyaWRnZSBwZXJtaXNzaW9uIHJlc3BvbnNlcyBpbnRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzdGRpbiBwcm9jZXNzaW5nIGxvb3Agc28gdGhleSByZXNvbHZlIHBlbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiByZXF1ZXN0cyBmcm9tIHRoZSBTREsgY29uc3VtZXIuXG4gICAgICAgICAgICAgICAgICAgIHN0cnVjdHVyZWRJTy5pbmplY3RDb250cm9sUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25JbnRlcnJ1cHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcj8uYWJvcnQoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU2V0TW9kZWwobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsID09PSAnZGVmYXVsdCcgPyBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCgpIDogbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclNwZWNpZmllZE1vZGVsID0gcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKHJlc29sdmVkKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMobWF4VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhUb2tlbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRoaW5raW5nQ29uZmlnID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF4VG9rZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHsgdHlwZTogJ2Rpc2FibGVkJyB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbmFibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZGdldFRva2VuczogbWF4VG9rZW5zLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2Uoc3RhdGUsIGRldGFpbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYnJpZGdlRmFpbHVyZURldGFpbCA9IGRldGFpbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZGtdIFN0YXRlIGNoYW5nZTogJHtzdGF0ZX0ke2RldGFpbCA/IGAgXHUyMDE0ICR7ZGV0YWlsfWAgOiAnJ31gLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyBhcyBTdGRvdXRNZXNzYWdlWyd0eXBlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgc3VidHlwZTogJ2JyaWRnZV9zdGF0ZScgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIGRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU3Rkb3V0TWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbml0aWFsTWVzc2FnZXM6XG4gICAgICAgICAgICAgICAgICAgIG11dGFibGVNZXNzYWdlcy5sZW5ndGggPiAwID8gbXV0YWJsZU1lc3NhZ2VzIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgYnJpZGdlRmFpbHVyZURldGFpbCA/P1xuICAgICAgICAgICAgICAgICAgICAgICdSZW1vdGUgQ29udHJvbCBpbml0aWFsaXphdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBicmlkZ2VIYW5kbGUgPSBoYW5kbGVcbiAgICAgICAgICAgICAgICAgIGJyaWRnZUxhc3RGb3J3YXJkZWRJbmRleCA9IG11dGFibGVNZXNzYWdlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIC8vIEZvcndhcmQgcGVybWlzc2lvbiByZXF1ZXN0cyB0byB0aGUgYnJpZGdlXG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVkSU8uc2V0T25Db250cm9sUmVxdWVzdFNlbnQocmVxdWVzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZW5kQ29udHJvbFJlcXVlc3QocmVxdWVzdClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgc3RhbGUgYnJpZGdlIHBlcm1pc3Npb24gcHJvbXB0cyB3aGVuIHRoZSBTREtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnN1bWVyIHJlc29sdmVzIGEgY2FuX3VzZV90b29sIHJlcXVlc3QgZmlyc3QuXG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVkSU8uc2V0T25Db250cm9sUmVxdWVzdFJlc29sdmVkKHJlcXVlc3RJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZW5kQ29udHJvbENhbmNlbFJlcXVlc3QocmVxdWVzdElkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl91cmw6IGdldFJlbW90ZVNlc3Npb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmJyaWRnZVNlc3Npb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RfdXJsOiBidWlsZEJyaWRnZUNvbm5lY3RVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudF9pZDogaGFuZGxlLmVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERpc2FibGVcbiAgICAgICAgICAgIGlmIChicmlkZ2VIYW5kbGUpIHtcbiAgICAgICAgICAgICAgc3RydWN0dXJlZElPLnNldE9uQ29udHJvbFJlcXVlc3RTZW50KHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgc3RydWN0dXJlZElPLnNldE9uQ29udHJvbFJlcXVlc3RSZXNvbHZlZCh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIGF3YWl0IGJyaWRnZUhhbmRsZS50ZWFyZG93bigpXG4gICAgICAgICAgICAgIGJyaWRnZUhhbmRsZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVua25vd24gY29udHJvbCByZXF1ZXN0IHN1YnR5cGUgXHUyMDE0IHNlbmQgYW4gZXJyb3IgcmVzcG9uc2Ugc29cbiAgICAgICAgICAvLyB0aGUgY2FsbGVyIGRvZXNuJ3QgaGFuZyB3YWl0aW5nIGZvciBhIHJlcGx5IHRoYXQgbmV2ZXIgY29tZXMuXG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBjb250cm9sIHJlcXVlc3Qgc3VidHlwZTogJHsobWVzc2FnZS5yZXF1ZXN0IGFzIHsgc3VidHlwZTogc3RyaW5nIH0pLnN1YnR5cGV9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXNwb25zZScpIHtcbiAgICAgICAgLy8gUmVwbGF5IGNvbnRyb2xfcmVzcG9uc2UgbWVzc2FnZXMgd2hlbiByZXBsYXkgbW9kZSBpcyBlbmFibGVkXG4gICAgICAgIGlmIChvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcykge1xuICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAna2VlcF9hbGl2ZScpIHtcbiAgICAgICAgLy8gU2lsZW50bHkgaWdub3JlIGtlZXAtYWxpdmUgbWVzc2FnZXNcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAndXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlcycpIHtcbiAgICAgICAgLy8gSGFuZGxlZCBpbiBzdHJ1Y3R1cmVkSU8udHMsIGJ1dCBUeXBlU2NyaXB0IG5lZWRzIHRoZSB0eXBlIGd1YXJkXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcgfHwgbWVzc2FnZS50eXBlID09PSAnc3lzdGVtJykge1xuICAgICAgICAvLyBIaXN0b3J5IHJlcGxheSBmcm9tIGJyaWRnZTogaW5qZWN0IGludG8gbXV0YWJsZU1lc3NhZ2VzIGFzXG4gICAgICAgIC8vIGNvbnZlcnNhdGlvbiBjb250ZXh0IHNvIHRoZSBtb2RlbCBzZWVzIHByaW9yIHR1cm5zLlxuICAgICAgICBjb25zdCBpbnRlcm5hbE1zZ3MgPSB0b0ludGVybmFsTWVzc2FnZXMoW21lc3NhZ2VdKVxuICAgICAgICBtdXRhYmxlTWVzc2FnZXMucHVzaCguLi5pbnRlcm5hbE1zZ3MpXG4gICAgICAgIC8vIEVjaG8gYXNzaXN0YW50IG1lc3NhZ2VzIGJhY2sgc28gQ0NSIGRpc3BsYXlzIHRoZW1cbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiYgb3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpIHtcbiAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShtZXNzYWdlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBBZnRlciBoYW5kbGluZyBjb250cm9sLCBrZWVwLWFsaXZlLCBlbnYtdmFyLCBhc3Npc3RhbnQsIGFuZCBzeXN0ZW1cbiAgICAgIC8vIG1lc3NhZ2VzIGFib3ZlLCBvbmx5IHVzZXIgbWVzc2FnZXMgc2hvdWxkIHJlbWFpbi5cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgIT09ICd1c2VyJykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwcm9tcHQgbWVzc2FnZSBpbXBsaWNpdGx5IGluaXRpYWxpemVzIGlmIG5vdCBhbHJlYWR5IGRvbmUuXG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW0hFQURMRVNTXSBSZWNlaXZlZCB1c2VyIG1lc3NhZ2UgdXVpZD0ke21lc3NhZ2UudXVpZCA/PyAnbm9uZSd9YClcblxuICAgICAgLy8gQ2hlY2sgZm9yIGR1cGxpY2F0ZSB1c2VyIG1lc3NhZ2UgLSBza2lwIGlmIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICBpZiAobWVzc2FnZS51dWlkKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpIGFzIFVVSURcbiAgICAgICAgY29uc3QgZXhpc3RzSW5TZXNzaW9uID0gYXdhaXQgZG9lc01lc3NhZ2VFeGlzdEluU2Vzc2lvbihcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgbWVzc2FnZS51dWlkLFxuICAgICAgICApXG5cbiAgICAgICAgLy8gQ2hlY2sgYm90aCBoaXN0b3JpY2FsIGR1cGxpY2F0ZXMgKGZyb20gZmlsZSkgYW5kIHJ1bnRpbWUgZHVwbGljYXRlcyAodGhpcyBzZXNzaW9uKVxuICAgICAgICBpZiAoZXhpc3RzSW5TZXNzaW9uIHx8IHJlY2VpdmVkTWVzc2FnZVV1aWRzLmhhcyhtZXNzYWdlLnV1aWQpKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBTa2lwcGluZyBkdXBsaWNhdGUgdXNlciBtZXNzYWdlOiAke21lc3NhZ2UudXVpZH1gKVxuICAgICAgICAgIC8vIFNlbmQgYWNrbm93bGVkZ21lbnQgZm9yIGR1cGxpY2F0ZSBtZXNzYWdlIGlmIHJlcGxheSBtb2RlIGlzIGVuYWJsZWRcbiAgICAgICAgICBpZiAob3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFNlbmRpbmcgYWNrbm93bGVkZ21lbnQgZm9yIGR1cGxpY2F0ZSB1c2VyIG1lc3NhZ2U6ICR7bWVzc2FnZS51dWlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgICAgICAgIHR5cGU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXG4gICAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2UudGltZXN0YW1wLFxuICAgICAgICAgICAgICBpc1JlcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIH0gYXMgU0RLVXNlck1lc3NhZ2VSZXBsYXkpXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEhpc3RvcmljYWwgZHVwID0gdHJhbnNjcmlwdCBhbHJlYWR5IGhhcyB0aGlzIHR1cm4ncyBvdXRwdXQsIHNvIGl0XG4gICAgICAgICAgLy8gcmFuIGJ1dCBpdHMgbGlmZWN5Y2xlIHdhcyBuZXZlciBjbG9zZWQgKGludGVycnVwdGVkIGJlZm9yZSBhY2spLlxuICAgICAgICAgIC8vIFJ1bnRpbWUgZHVwcyBkb24ndCBuZWVkIHRoaXMgXHUyMDE0IHRoZSBvcmlnaW5hbCBlbnF1ZXVlIHBhdGggY2xvc2VzIHRoZW0uXG4gICAgICAgICAgaWYgKGV4aXN0c0luU2Vzc2lvbikge1xuICAgICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZShtZXNzYWdlLnV1aWQsICdjb21wbGV0ZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEb24ndCBlbnF1ZXVlIGR1cGxpY2F0ZSBtZXNzYWdlcyBmb3IgZXhlY3V0aW9uXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYWNrIHRoaXMgVVVJRCB0byBwcmV2ZW50IHJ1bnRpbWUgZHVwbGljYXRlc1xuICAgICAgICB0cmFja1JlY2VpdmVkTWVzc2FnZVV1aWQobWVzc2FnZS51dWlkKVxuICAgICAgfVxuXG4gICAgICBlbnF1ZXVlKHtcbiAgICAgICAgbW9kZTogJ3Byb21wdCcgYXMgY29uc3QsXG4gICAgICAgIC8vIGZpbGVfYXR0YWNobWVudHMgcmlkZXMgdGhlIHByb3RvYnVmIGNhdGNoYWxsIGZyb20gdGhlIHdlYiBjb21wb3Nlci5cbiAgICAgICAgLy8gU2FtZS1yZWYgbm8tb3Agd2hlbiBhYnNlbnQgKG5vICdmaWxlX2F0dGFjaG1lbnRzJyBrZXkpLlxuICAgICAgICB2YWx1ZTogYXdhaXQgcmVzb2x2ZUFuZFByZXBlbmQobWVzc2FnZSwgbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQpLFxuICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgIHByaW9yaXR5OiBtZXNzYWdlLnByaW9yaXR5LFxuICAgICAgfSlcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW0hFQURMRVNTXSBVc2VyIG1lc3NhZ2UgZW5xdWV1ZWQ7IGtpY2tpbmcgcnVuKCknKVxuICAgICAgLy8gSW5jcmVtZW50IHByb21wdCBjb3VudCBmb3IgYXR0cmlidXRpb24gdHJhY2tpbmcgYW5kIHNhdmUgc25hcHNob3RcbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBwZXJzaXN0cyBwcm9tcHRDb3VudCBzbyBpdCBzdXJ2aXZlcyBjb21wYWN0aW9uXG4gICAgICBpZiAoZmVhdHVyZSgnQ09NTUlUX0FUVFJJQlVUSU9OJykpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgYXR0cmlidXRpb246IGluY3JlbWVudFByb21wdENvdW50KHByZXYuYXR0cmlidXRpb24sIHNuYXBzaG90ID0+IHtcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkQXR0cmlidXRpb25TbmFwc2hvdChzbmFwc2hvdCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEF0dHJpYnV0aW9uOiBGYWlsZWQgdG8gc2F2ZSBzbmFwc2hvdDogJHtlcnJvcn1gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICB2b2lkIHJ1bigpXG4gICAgfVxuICAgIGlucHV0Q2xvc2VkID0gdHJ1ZVxuICAgIGNyb25TY2hlZHVsZXI/LnN0b3AoKVxuICAgIGlmICghcnVubmluZykge1xuICAgICAgLy8gSWYgYSBwdXNoLXN1Z2dlc3Rpb24gaXMgaW4tZmxpZ2h0LCB3YWl0IGZvciBpdCB0byBlbWl0IGJlZm9yZSBjbG9zaW5nXG4gICAgICAvLyB0aGUgb3V0cHV0IHN0cmVhbSAoNSBzIHNhZmV0eSB0aW1lb3V0IHRvIHByZXZlbnQgaGFuZ2luZykuXG4gICAgICBpZiAoc3VnZ2VzdGlvblN0YXRlLmluZmxpZ2h0UHJvbWlzZSkge1xuICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoW3N1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UsIHNsZWVwKDUwMDApXSlcbiAgICAgIH1cbiAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICBhd2FpdCBmaW5hbGl6ZVBlbmRpbmdBc3luY0hvb2tzKClcbiAgICAgIHVuc3Vic2NyaWJlU2tpbGxDaGFuZ2VzKClcbiAgICAgIHVuc3Vic2NyaWJlQXV0aFN0YXR1cz8uKClcbiAgICAgIHN0YXR1c0xpc3RlbmVycy5kZWxldGUocmF0ZUxpbWl0TGlzdGVuZXIpXG4gICAgICBvdXRwdXQuZG9uZSgpXG4gICAgfVxuICB9KSgpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBDYW5Vc2VUb29sRm4gdGhhdCBpbmNvcnBvcmF0ZXMgYSBjdXN0b20gcGVybWlzc2lvbiBwcm9tcHQgdG9vbC5cbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgdGhlIHBlcm1pc3Npb25Qcm9tcHRUb29sIGludG8gYSBDYW5Vc2VUb29sRm4gdGhhdCBjYW4gYmUgdXNlZCBpbiBhc2sudHN4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYW5Vc2VUb29sV2l0aFBlcm1pc3Npb25Qcm9tcHQoXG4gIHBlcm1pc3Npb25Qcm9tcHRUb29sOiBQZXJtaXNzaW9uUHJvbXB0VG9vbCxcbik6IENhblVzZVRvb2xGbiB7XG4gIGNvbnN0IGNhblVzZVRvb2w6IENhblVzZVRvb2xGbiA9IGFzeW5jIChcbiAgICB0b29sLFxuICAgIGlucHV0LFxuICAgIHRvb2xVc2VDb250ZXh0LFxuICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgdG9vbFVzZUlkLFxuICAgIGZvcmNlRGVjaXNpb24sXG4gICkgPT4ge1xuICAgIGNvbnN0IG1haW5QZXJtaXNzaW9uUmVzdWx0ID1cbiAgICAgIGZvcmNlRGVjaXNpb24gPz9cbiAgICAgIChhd2FpdCBoYXNQZXJtaXNzaW9uc1RvVXNlVG9vbChcbiAgICAgICAgdG9vbCxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgICAgICB0b29sVXNlSWQsXG4gICAgICApKVxuXG4gICAgLy8gSWYgdGhlIHRvb2wgaXMgYWxsb3dlZCBvciBkZW5pZWQsIHJldHVybiB0aGUgcmVzdWx0XG4gICAgaWYgKFxuICAgICAgbWFpblBlcm1pc3Npb25SZXN1bHQuYmVoYXZpb3IgPT09ICdhbGxvdycgfHxcbiAgICAgIG1haW5QZXJtaXNzaW9uUmVzdWx0LmJlaGF2aW9yID09PSAnZGVueSdcbiAgICApIHtcbiAgICAgIHJldHVybiBtYWluUGVybWlzc2lvblJlc3VsdFxuICAgIH1cblxuICAgIC8vIFJhY2UgdGhlIHBlcm1pc3Npb24gcHJvbXB0IHRvb2wgYWdhaW5zdCB0aGUgYWJvcnQgc2lnbmFsLlxuICAgIC8vXG4gICAgLy8gV2h5IHdlIG5lZWQgdGhpczogVGhlIHBlcm1pc3Npb24gcHJvbXB0IHRvb2wgbWF5IGJsb2NrIGluZGVmaW5pdGVseSB3YWl0aW5nXG4gICAgLy8gZm9yIHVzZXIgaW5wdXQgKGUuZy4sIHZpYSBzdGRpbiBvciBhIFVJIGRpYWxvZykuIElmIHRoZSB1c2VyIHRyaWdnZXJzIGFuXG4gICAgLy8gaW50ZXJydXB0IChDdHJsK0MpLCB3ZSBuZWVkIHRvIGRldGVjdCBpdCBldmVuIHdoaWxlIHRoZSB0b29sIGlzIGJsb2NrZWQuXG4gICAgLy8gV2l0aG91dCB0aGlzIHJhY2UsIHRoZSBhYm9ydCBjaGVjayB3b3VsZCBvbmx5IHJ1biBBRlRFUiB0aGUgdG9vbCBjb21wbGV0ZXMsXG4gICAgLy8gd2hpY2ggbWF5IG5ldmVyIGhhcHBlbiBpZiB0aGUgdG9vbCBpcyB3YWl0aW5nIGZvciBpbnB1dCB0aGF0IHdpbGwgbmV2ZXIgY29tZS5cbiAgICAvL1xuICAgIC8vIFRoZSBzZWNvbmQgY2hlY2sgKGNvbWJpbmVkU2lnbmFsLmFib3J0ZWQpIGhhbmRsZXMgYSByYWNlIGNvbmRpdGlvbiB3aGVyZVxuICAgIC8vIGFib3J0IGZpcmVzIGFmdGVyIFByb21pc2UucmFjZSByZXNvbHZlcyBidXQgYmVmb3JlIHdlIHJlYWNoIHRoaXMgY2hlY2suXG4gICAgY29uc3QgeyBzaWduYWw6IGNvbWJpbmVkU2lnbmFsLCBjbGVhbnVwOiBjbGVhbnVwQWJvcnRMaXN0ZW5lciB9ID1cbiAgICAgIGNyZWF0ZUNvbWJpbmVkQWJvcnRTaWduYWwodG9vbFVzZUNvbnRleHQuYWJvcnRDb250cm9sbGVyLnNpZ25hbClcblxuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgYWJvcnRlZCBiZWZvcmUgc3RhcnRpbmcgdGhlIHJhY2VcbiAgICBpZiAoY29tYmluZWRTaWduYWwuYWJvcnRlZCkge1xuICAgICAgY2xlYW51cEFib3J0TGlzdGVuZXIoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVoYXZpb3I6ICdkZW55JyxcbiAgICAgICAgbWVzc2FnZTogJ1Blcm1pc3Npb24gcHJvbXB0IHdhcyBhYm9ydGVkLicsXG4gICAgICAgIGRlY2lzaW9uUmVhc29uOiB7XG4gICAgICAgICAgdHlwZTogJ3Blcm1pc3Npb25Qcm9tcHRUb29sJyBhcyBjb25zdCxcbiAgICAgICAgICBwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWU6IHRvb2wubmFtZSxcbiAgICAgICAgICB0b29sUmVzdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2U8J2Fib3J0ZWQnPihyZXNvbHZlID0+IHtcbiAgICAgIGNvbWJpbmVkU2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVzb2x2ZSgnYWJvcnRlZCcpLCB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCB0b29sQ2FsbFByb21pc2UgPSBwZXJtaXNzaW9uUHJvbXB0VG9vbC5jYWxsKFxuICAgICAge1xuICAgICAgICB0b29sX25hbWU6IHRvb2wubmFtZSxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRvb2xfdXNlX2lkOiB0b29sVXNlSWQsXG4gICAgICB9LFxuICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICBjYW5Vc2VUb29sLFxuICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICApXG5cbiAgICBjb25zdCByYWNlUmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFt0b29sQ2FsbFByb21pc2UsIGFib3J0UHJvbWlzZV0pXG4gICAgY2xlYW51cEFib3J0TGlzdGVuZXIoKVxuXG4gICAgaWYgKHJhY2VSZXN1bHQgPT09ICdhYm9ydGVkJyB8fCBjb21iaW5lZFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWhhdmlvcjogJ2RlbnknLFxuICAgICAgICBtZXNzYWdlOiAnUGVybWlzc2lvbiBwcm9tcHQgd2FzIGFib3J0ZWQuJyxcbiAgICAgICAgZGVjaXNpb25SZWFzb246IHtcbiAgICAgICAgICB0eXBlOiAncGVybWlzc2lvblByb21wdFRvb2wnIGFzIGNvbnN0LFxuICAgICAgICAgIHBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZTogdG9vbC5uYW1lLFxuICAgICAgICAgIHRvb2xSZXN1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IG5hcnJvd2luZzogYWZ0ZXIgdGhlIGFib3J0IGNoZWNrLCByYWNlUmVzdWx0IG11c3QgYmUgVG9vbFJlc3VsdFxuICAgIGNvbnN0IHJlc3VsdCA9IHJhY2VSZXN1bHQgYXMgQXdhaXRlZDx0eXBlb2YgdG9vbENhbGxQcm9taXNlPlxuXG4gICAgY29uc3QgcGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtID1cbiAgICAgIHBlcm1pc3Npb25Qcm9tcHRUb29sLm1hcFRvb2xSZXN1bHRUb1Rvb2xSZXN1bHRCbG9ja1BhcmFtKHJlc3VsdC5kYXRhLCAnMScpXG4gICAgaWYgKFxuICAgICAgIXBlcm1pc3Npb25Ub29sUmVzdWx0QmxvY2tQYXJhbS5jb250ZW50IHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShwZXJtaXNzaW9uVG9vbFJlc3VsdEJsb2NrUGFyYW0uY29udGVudCkgfHxcbiAgICAgICFwZXJtaXNzaW9uVG9vbFJlc3VsdEJsb2NrUGFyYW0uY29udGVudFswXSB8fFxuICAgICAgcGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtLmNvbnRlbnRbMF0udHlwZSAhPT0gJ3RleHQnIHx8XG4gICAgICB0eXBlb2YgcGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtLmNvbnRlbnRbMF0udGV4dCAhPT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1Blcm1pc3Npb24gcHJvbXB0IHRvb2wgcmV0dXJuZWQgYW4gaW52YWxpZCByZXN1bHQuIEV4cGVjdGVkIGEgc2luZ2xlIHRleHQgYmxvY2sgcGFyYW0gd2l0aCB0eXBlPVwidGV4dFwiIGFuZCBhIHN0cmluZyB0ZXh0IHZhbHVlLicsXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uKFxuICAgICAgcGVybWlzc2lvblRvb2xPdXRwdXRTY2hlbWEoKS5wYXJzZShcbiAgICAgICAgc2FmZVBhcnNlSlNPTihwZXJtaXNzaW9uVG9vbFJlc3VsdEJsb2NrUGFyYW0uY29udGVudFswXS50ZXh0KSxcbiAgICAgICksXG4gICAgICBwZXJtaXNzaW9uUHJvbXB0VG9vbCxcbiAgICAgIGlucHV0LFxuICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgKVxuICB9XG4gIHJldHVybiBjYW5Vc2VUb29sXG59XG5cbi8vIEV4cG9ydGVkIGZvciB0ZXN0aW5nIFx1MjAxNCByZWdyZXNzaW9uOiB0aGlzIHVzZWQgdG8gY3Jhc2ggYXQgY29uc3RydWN0aW9uIHdoZW5cbi8vIGdldE1jcFRvb2xzKCkgd2FzIGVtcHR5IChiZWZvcmUgcGVyLXNlcnZlciBjb25uZWN0cyBwb3B1bGF0ZWQgYXBwU3RhdGUpLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENhblVzZVRvb2xGbihcbiAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHN0cnVjdHVyZWRJTzogU3RydWN0dXJlZElPLFxuICBnZXRNY3BUb29sczogKCkgPT4gVG9vbFtdLFxuICBvblBlcm1pc3Npb25Qcm9tcHQ/OiAoZGV0YWlsczogUmVxdWlyZXNBY3Rpb25EZXRhaWxzKSA9PiB2b2lkLFxuKTogQ2FuVXNlVG9vbEZuIHtcbiAgaWYgKHBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZSA9PT0gJ3N0ZGlvJykge1xuICAgIHJldHVybiBzdHJ1Y3R1cmVkSU8uY3JlYXRlQ2FuVXNlVG9vbChvblBlcm1pc3Npb25Qcm9tcHQpXG4gIH1cbiAgaWYgKCFwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUpIHtcbiAgICByZXR1cm4gYXN5bmMgKFxuICAgICAgdG9vbCxcbiAgICAgIGlucHV0LFxuICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgICAgdG9vbFVzZUlkLFxuICAgICAgZm9yY2VEZWNpc2lvbixcbiAgICApID0+XG4gICAgICBmb3JjZURlY2lzaW9uID8/XG4gICAgICAoYXdhaXQgaGFzUGVybWlzc2lvbnNUb1VzZVRvb2woXG4gICAgICAgIHRvb2wsXG4gICAgICAgIGlucHV0LFxuICAgICAgICB0b29sVXNlQ29udGV4dCxcbiAgICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgICAgdG9vbFVzZUlkLFxuICAgICAgKSlcbiAgfVxuICAvLyBMYXp5IGxvb2t1cDogTUNQIGNvbm5lY3RzIGFyZSBwZXItc2VydmVyIGluY3JlbWVudGFsIGluIHByaW50IG1vZGUsIHNvXG4gIC8vIHRoZSB0b29sIG1heSBub3QgYmUgaW4gYXBwU3RhdGUgeWV0IGF0IGluaXQgdGltZS4gUmVzb2x2ZSBvbiBmaXJzdCBjYWxsXG4gIC8vIChmaXJzdCBwZXJtaXNzaW9uIHByb21wdCksIGJ5IHdoaWNoIHBvaW50IGNvbm5lY3RzIGhhdmUgaGFkIHRpbWUgdG8gZmluaXNoLlxuICBsZXQgcmVzb2x2ZWQ6IENhblVzZVRvb2xGbiB8IG51bGwgPSBudWxsXG4gIHJldHVybiBhc3luYyAoXG4gICAgdG9vbCxcbiAgICBpbnB1dCxcbiAgICB0b29sVXNlQ29udGV4dCxcbiAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgIHRvb2xVc2VJZCxcbiAgICBmb3JjZURlY2lzaW9uLFxuICApID0+IHtcbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBjb25zdCBtY3BUb29scyA9IGdldE1jcFRvb2xzKClcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25Qcm9tcHRUb29sID0gbWNwVG9vbHMuZmluZCh0ID0+XG4gICAgICAgIHRvb2xNYXRjaGVzTmFtZSh0LCBwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUpLFxuICAgICAgKSBhcyBQZXJtaXNzaW9uUHJvbXB0VG9vbCB8IHVuZGVmaW5lZFxuICAgICAgaWYgKCFwZXJtaXNzaW9uUHJvbXB0VG9vbCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGBFcnJvcjogTUNQIHRvb2wgJHtwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWV9IChwYXNzZWQgdmlhIC0tcGVybWlzc2lvbi1wcm9tcHQtdG9vbCkgbm90IGZvdW5kLiBBdmFpbGFibGUgTUNQIHRvb2xzOiAke21jcFRvb2xzLm1hcCh0ID0+IHQubmFtZSkuam9pbignLCAnKSB8fCAnbm9uZSd9YFxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShgJHtlcnJvcn1cXG5gKVxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgICBpZiAoIXBlcm1pc3Npb25Qcm9tcHRUb29sLmlucHV0SlNPTlNjaGVtYSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGBFcnJvcjogdG9vbCAke3Blcm1pc3Npb25Qcm9tcHRUb29sTmFtZX0gKHBhc3NlZCB2aWEgLS1wZXJtaXNzaW9uLXByb21wdC10b29sKSBtdXN0IGJlIGFuIE1DUCB0b29sYFxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShgJHtlcnJvcn1cXG5gKVxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgICByZXNvbHZlZCA9IGNyZWF0ZUNhblVzZVRvb2xXaXRoUGVybWlzc2lvblByb21wdChwZXJtaXNzaW9uUHJvbXB0VG9vbClcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVkKFxuICAgICAgdG9vbCxcbiAgICAgIGlucHV0LFxuICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgICAgdG9vbFVzZUlkLFxuICAgICAgZm9yY2VEZWNpc2lvbixcbiAgICApXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlSW5pdGlhbGl6ZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFNES0NvbnRyb2xJbml0aWFsaXplUmVxdWVzdCxcbiAgcmVxdWVzdElkOiBzdHJpbmcsXG4gIGluaXRpYWxpemVkOiBib29sZWFuLFxuICBvdXRwdXQ6IFN0cmVhbTxTdGRvdXRNZXNzYWdlPixcbiAgY29tbWFuZHM6IENvbW1hbmRbXSxcbiAgbW9kZWxJbmZvczogTW9kZWxJbmZvW10sXG4gIHN0cnVjdHVyZWRJTzogU3RydWN0dXJlZElPLFxuICBlbmFibGVBdXRoU3RhdHVzOiBib29sZWFuLFxuICBvcHRpb25zOiB7XG4gICAgc3lzdGVtUHJvbXB0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGFnZW50Pzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgdXNlclNwZWNpZmllZE1vZGVsPzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxuICB9LFxuICBhZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdLFxuICBnZXRBcHBTdGF0ZTogKCkgPT4gQXBwU3RhdGUsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgc3VidHlwZTogJ2Vycm9yJyxcbiAgICAgICAgZXJyb3I6ICdBbHJlYWR5IGluaXRpYWxpemVkJyxcbiAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICBwZW5kaW5nX3Blcm1pc3Npb25fcmVxdWVzdHM6XG4gICAgICAgICAgc3RydWN0dXJlZElPLmdldFBlbmRpbmdQZXJtaXNzaW9uUmVxdWVzdHMoKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEFwcGx5IHN5c3RlbVByb21wdC9hcHBlbmRTeXN0ZW1Qcm9tcHQgZnJvbSBzdGRpbiB0byBhdm9pZCBBUkdfTUFYIGxpbWl0c1xuICBpZiAocmVxdWVzdC5zeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZCkge1xuICAgIG9wdGlvbnMuc3lzdGVtUHJvbXB0ID0gcmVxdWVzdC5zeXN0ZW1Qcm9tcHRcbiAgfVxuICBpZiAocmVxdWVzdC5hcHBlbmRTeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZCkge1xuICAgIG9wdGlvbnMuYXBwZW5kU3lzdGVtUHJvbXB0ID0gcmVxdWVzdC5hcHBlbmRTeXN0ZW1Qcm9tcHRcbiAgfVxuICBpZiAocmVxdWVzdC5wcm9tcHRTdWdnZXN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucy5wcm9tcHRTdWdnZXN0aW9ucyA9IHJlcXVlc3QucHJvbXB0U3VnZ2VzdGlvbnNcbiAgfVxuXG4gIC8vIE1lcmdlIGFnZW50cyBmcm9tIHN0ZGluIHRvIGF2b2lkIEFSR19NQVggbGltaXRzXG4gIGlmIChyZXF1ZXN0LmFnZW50cykge1xuICAgIGNvbnN0IHN0ZGluQWdlbnRzID0gcGFyc2VBZ2VudHNGcm9tSnNvbihyZXF1ZXN0LmFnZW50cywgJ2ZsYWdTZXR0aW5ncycpXG4gICAgYWdlbnRzLnB1c2goLi4uc3RkaW5BZ2VudHMpXG4gIH1cblxuICAvLyBSZS1ldmFsdWF0ZSBtYWluIHRocmVhZCBhZ2VudCBhZnRlciBTREsgYWdlbnRzIGFyZSBtZXJnZWRcbiAgLy8gVGhpcyBhbGxvd3MgLS1hZ2VudCB0byByZWZlcmVuY2UgYWdlbnRzIGRlZmluZWQgdmlhIFNES1xuICBpZiAob3B0aW9ucy5hZ2VudCkge1xuICAgIC8vIElmIG1haW4udHN4IGFscmVhZHkgZm91bmQgdGhpcyBhZ2VudCAoZmlsZXN5c3RlbS1kZWZpbmVkKSwgaXQgYWxyZWFkeVxuICAgIC8vIGFwcGxpZWQgc3lzdGVtUHJvbXB0L21vZGVsL2luaXRpYWxQcm9tcHQuIFNraXAgdG8gYXZvaWQgZG91YmxlLWFwcGx5LlxuICAgIGNvbnN0IGFscmVhZHlSZXNvbHZlZCA9IGdldE1haW5UaHJlYWRBZ2VudFR5cGUoKSA9PT0gb3B0aW9ucy5hZ2VudFxuICAgIGNvbnN0IG1haW5UaHJlYWRBZ2VudCA9IGFnZW50cy5maW5kKGEgPT4gYS5hZ2VudFR5cGUgPT09IG9wdGlvbnMuYWdlbnQpXG4gICAgaWYgKG1haW5UaHJlYWRBZ2VudCAmJiAhYWxyZWFkeVJlc29sdmVkKSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIG1haW4gdGhyZWFkIGFnZW50IHR5cGUgaW4gYm9vdHN0cmFwIHN0YXRlXG4gICAgICBzZXRNYWluVGhyZWFkQWdlbnRUeXBlKG1haW5UaHJlYWRBZ2VudC5hZ2VudFR5cGUpXG5cbiAgICAgIC8vIEFwcGx5IHRoZSBhZ2VudCdzIHN5c3RlbSBwcm9tcHQgaWYgdXNlciBoYXNuJ3Qgc3BlY2lmaWVkIGEgY3VzdG9tIG9uZVxuICAgICAgLy8gU0RLIGFnZW50cyBhcmUgYWx3YXlzIGN1c3RvbSBhZ2VudHMgKG5vdCBidWlsdC1pbiksIHNvIGdldFN5c3RlbVByb21wdCgpIHRha2VzIG5vIGFyZ3NcbiAgICAgIGlmICghb3B0aW9ucy5zeXN0ZW1Qcm9tcHQgJiYgIWlzQnVpbHRJbkFnZW50KG1haW5UaHJlYWRBZ2VudCkpIHtcbiAgICAgICAgY29uc3QgYWdlbnRTeXN0ZW1Qcm9tcHQgPSBtYWluVGhyZWFkQWdlbnQuZ2V0U3lzdGVtUHJvbXB0KClcbiAgICAgICAgaWYgKGFnZW50U3lzdGVtUHJvbXB0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zeXN0ZW1Qcm9tcHQgPSBhZ2VudFN5c3RlbVByb21wdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHRoZSBhZ2VudCdzIG1vZGVsIGlmIHVzZXIgZGlkbid0IHNwZWNpZnkgb25lIGFuZCBhZ2VudCBoYXMgYSBtb2RlbFxuICAgICAgaWYgKFxuICAgICAgICAhb3B0aW9ucy51c2VyU3BlY2lmaWVkTW9kZWwgJiZcbiAgICAgICAgbWFpblRocmVhZEFnZW50Lm1vZGVsICYmXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudC5tb2RlbCAhPT0gJ2luaGVyaXQnXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYWdlbnRNb2RlbCA9IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsKG1haW5UaHJlYWRBZ2VudC5tb2RlbClcbiAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKGFnZW50TW9kZWwpXG4gICAgICB9XG5cbiAgICAgIC8vIFNESy1kZWZpbmVkIGFnZW50cyBhcnJpdmUgdmlhIGluaXQsIHNvIG1haW4udHN4J3MgbG9va3VwIG1pc3NlZCB0aGVtLlxuICAgICAgaWYgKG1haW5UaHJlYWRBZ2VudC5pbml0aWFsUHJvbXB0KSB7XG4gICAgICAgIHN0cnVjdHVyZWRJTy5wcmVwZW5kVXNlck1lc3NhZ2UobWFpblRocmVhZEFnZW50LmluaXRpYWxQcm9tcHQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYWluVGhyZWFkQWdlbnQ/LmluaXRpYWxQcm9tcHQpIHtcbiAgICAgIC8vIEZpbGVzeXN0ZW0tZGVmaW5lZCBhZ2VudCAoYWxyZWFkeVJlc29sdmVkIGJ5IG1haW4udHN4KS4gbWFpbi50c3hcbiAgICAgIC8vIGhhbmRsZXMgaW5pdGlhbFByb21wdCBmb3IgdGhlIHN0cmluZyBpbnB1dFByb21wdCBjYXNlLCBidXQgd2hlblxuICAgICAgLy8gaW5wdXRQcm9tcHQgaXMgYW4gQXN5bmNJdGVyYWJsZSAoU0RLIHN0cmVhbS1qc29uKSwgaXQgY2FuJ3RcbiAgICAgIC8vIGNvbmNhdGVuYXRlIFx1MjAxNCBmYWxsIGJhY2sgdG8gcHJlcGVuZFVzZXJNZXNzYWdlIGhlcmUuXG4gICAgICBzdHJ1Y3R1cmVkSU8ucHJlcGVuZFVzZXJNZXNzYWdlKG1haW5UaHJlYWRBZ2VudC5pbml0aWFsUHJvbXB0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gIGNvbnN0IG91dHB1dFN0eWxlID0gc2V0dGluZ3M/Lm91dHB1dFN0eWxlIHx8IERFRkFVTFRfT1VUUFVUX1NUWUxFX05BTUVcbiAgY29uc3QgYXZhaWxhYmxlT3V0cHV0U3R5bGVzID0gYXdhaXQgZ2V0QWxsT3V0cHV0U3R5bGVzKGdldEN3ZCgpKVxuXG4gIC8vIEdldCBhY2NvdW50IGluZm9ybWF0aW9uXG4gIGNvbnN0IGFjY291bnRJbmZvID0gZ2V0QWNjb3VudEluZm9ybWF0aW9uKClcbiAgaWYgKHJlcXVlc3QuaG9va3MpIHtcbiAgICBjb25zdCBob29rczogUGFydGlhbDxSZWNvcmQ8SG9va0V2ZW50LCBIb29rQ2FsbGJhY2tNYXRjaGVyW10+PiA9IHt9XG4gICAgZm9yIChjb25zdCBbZXZlbnQsIG1hdGNoZXJzXSBvZiBPYmplY3QuZW50cmllcyhyZXF1ZXN0Lmhvb2tzKSkge1xuICAgICAgaG9va3NbZXZlbnQgYXMgSG9va0V2ZW50XSA9IG1hdGNoZXJzLm1hcChtYXRjaGVyID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gbWF0Y2hlci5ob29rQ2FsbGJhY2tJZHMubWFwKGNhbGxiYWNrSWQgPT4ge1xuICAgICAgICAgIHJldHVybiBzdHJ1Y3R1cmVkSU8uY3JlYXRlSG9va0NhbGxiYWNrKGNhbGxiYWNrSWQsIG1hdGNoZXIudGltZW91dClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXRjaGVyOiBtYXRjaGVyLm1hdGNoZXIsXG4gICAgICAgICAgaG9va3M6IGNhbGxiYWNrcyxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVnaXN0ZXJIb29rQ2FsbGJhY2tzKGhvb2tzKVxuICB9XG4gIGlmIChyZXF1ZXN0Lmpzb25TY2hlbWEpIHtcbiAgICBzZXRJbml0SnNvblNjaGVtYShyZXF1ZXN0Lmpzb25TY2hlbWEpXG4gIH1cbiAgY29uc3QgaW5pdFJlc3BvbnNlOiBTREtDb250cm9sSW5pdGlhbGl6ZVJlc3BvbnNlID0ge1xuICAgIGNvbW1hbmRzOiBjb21tYW5kc1xuICAgICAgLmZpbHRlcihjbWQgPT4gY21kLnVzZXJJbnZvY2FibGUgIT09IGZhbHNlKVxuICAgICAgLm1hcChjbWQgPT4gKHtcbiAgICAgICAgbmFtZTogZ2V0Q29tbWFuZE5hbWUoY21kKSxcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1hdERlc2NyaXB0aW9uV2l0aFNvdXJjZShjbWQpLFxuICAgICAgICBhcmd1bWVudEhpbnQ6IGNtZC5hcmd1bWVudEhpbnQgfHwgJycsXG4gICAgICB9KSksXG4gICAgYWdlbnRzOiBhZ2VudHMubWFwKGFnZW50ID0+ICh7XG4gICAgICBuYW1lOiBhZ2VudC5hZ2VudFR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogYWdlbnQud2hlblRvVXNlLFxuICAgICAgLy8gJ2luaGVyaXQnIGlzIGFuIGludGVybmFsIHNlbnRpbmVsOyBub3JtYWxpemUgdG8gdW5kZWZpbmVkIGZvciB0aGUgcHVibGljIEFQSVxuICAgICAgbW9kZWw6IGFnZW50Lm1vZGVsID09PSAnaW5oZXJpdCcgPyB1bmRlZmluZWQgOiBhZ2VudC5tb2RlbCxcbiAgICB9KSksXG4gICAgb3V0cHV0X3N0eWxlOiBvdXRwdXRTdHlsZSxcbiAgICBhdmFpbGFibGVfb3V0cHV0X3N0eWxlczogT2JqZWN0LmtleXMoYXZhaWxhYmxlT3V0cHV0U3R5bGVzKSxcbiAgICBtb2RlbHM6IG1vZGVsSW5mb3MsXG4gICAgYWNjb3VudDoge1xuICAgICAgZW1haWw6IGFjY291bnRJbmZvPy5lbWFpbCxcbiAgICAgIG9yZ2FuaXphdGlvbjogYWNjb3VudEluZm8/Lm9yZ2FuaXphdGlvbixcbiAgICAgIHN1YnNjcmlwdGlvblR5cGU6IGFjY291bnRJbmZvPy5zdWJzY3JpcHRpb24sXG4gICAgICB0b2tlblNvdXJjZTogYWNjb3VudEluZm8/LnRva2VuU291cmNlLFxuICAgICAgYXBpS2V5U291cmNlOiBhY2NvdW50SW5mbz8uYXBpS2V5U291cmNlLFxuICAgICAgLy8gZ2V0QWNjb3VudEluZm9ybWF0aW9uKCkgcmV0dXJucyB1bmRlZmluZWQgdW5kZXIgM1AgcHJvdmlkZXJzLCBzbyB0aGVcbiAgICAgIC8vIG90aGVyIGZpZWxkcyBhcmUgYWxsIGFic2VudC4gYXBpUHJvdmlkZXIgZGlzYW1iaWd1YXRlcyBcIm5vdCBsb2dnZWRcbiAgICAgIC8vIGluXCIgKGZpcnN0UGFydHkgKyB0b2tlblNvdXJjZTpub25lKSBmcm9tIFwiM1AsIGxvZ2luIG5vdCBhcHBsaWNhYmxlXCIuXG4gICAgICBhcGlQcm92aWRlcjogZ2V0QVBJUHJvdmlkZXIoKSxcbiAgICB9LFxuICAgIHBpZDogcHJvY2Vzcy5waWQsXG4gIH1cblxuICBpZiAoaXNGYXN0TW9kZUVuYWJsZWQoKSAmJiBpc0Zhc3RNb2RlQXZhaWxhYmxlKCkpIHtcbiAgICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICBpbml0UmVzcG9uc2UuZmFzdF9tb2RlX3N0YXRlID0gZ2V0RmFzdE1vZGVTdGF0ZShcbiAgICAgIG9wdGlvbnMudXNlclNwZWNpZmllZE1vZGVsID8/IG51bGwsXG4gICAgICBhcHBTdGF0ZS5mYXN0TW9kZSxcbiAgICApXG4gIH1cblxuICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICByZXNwb25zZTogaW5pdFJlc3BvbnNlLFxuICAgIH0sXG4gIH0pXG5cbiAgLy8gQWZ0ZXIgdGhlIGluaXRpYWxpemUgbWVzc2FnZSwgY2hlY2sgdGhlIGF1dGggc3RhdHVzLVxuICAvLyBUaGlzIHdpbGwgZ2V0IG5vdGlmaWVkIG9mIGNoYW5nZXMsIGJ1dCB3ZSBhbHNvIHdhbnQgdG8gc2VuZCB0aGVcbiAgLy8gaW5pdGlhbCBzdGF0ZS5cbiAgaWYgKGVuYWJsZUF1dGhTdGF0dXMpIHtcbiAgICBjb25zdCBhdXRoU3RhdHVzTWFuYWdlciA9IEF3c0F1dGhTdGF0dXNNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCBzdGF0dXMgPSBhdXRoU3RhdHVzTWFuYWdlci5nZXRTdGF0dXMoKVxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgdHlwZTogJ2F1dGhfc3RhdHVzJyxcbiAgICAgICAgaXNBdXRoZW50aWNhdGluZzogc3RhdHVzLmlzQXV0aGVudGljYXRpbmcsXG4gICAgICAgIG91dHB1dDogc3RhdHVzLm91dHB1dCxcbiAgICAgICAgZXJyb3I6IHN0YXR1cy5lcnJvcixcbiAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJld2luZEZpbGVzKFxuICB1c2VyTWVzc2FnZUlkOiBVVUlELFxuICBhcHBTdGF0ZTogQXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgZHJ5UnVuOiBib29sZWFuLFxuKTogUHJvbWlzZTxSZXdpbmRGaWxlc1Jlc3VsdD4ge1xuICBpZiAoIWZpbGVIaXN0b3J5RW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIHsgY2FuUmV3aW5kOiBmYWxzZSwgZXJyb3I6ICdGaWxlIHJld2luZGluZyBpcyBub3QgZW5hYmxlZC4nIH1cbiAgfVxuICBpZiAoIWZpbGVIaXN0b3J5Q2FuUmVzdG9yZShhcHBTdGF0ZS5maWxlSGlzdG9yeSwgdXNlck1lc3NhZ2VJZCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FuUmV3aW5kOiBmYWxzZSxcbiAgICAgIGVycm9yOiAnTm8gZmlsZSBjaGVja3BvaW50IGZvdW5kIGZvciB0aGlzIG1lc3NhZ2UuJyxcbiAgICB9XG4gIH1cblxuICBpZiAoZHJ5UnVuKSB7XG4gICAgY29uc3QgZGlmZlN0YXRzID0gYXdhaXQgZmlsZUhpc3RvcnlHZXREaWZmU3RhdHMoXG4gICAgICBhcHBTdGF0ZS5maWxlSGlzdG9yeSxcbiAgICAgIHVzZXJNZXNzYWdlSWQsXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBjYW5SZXdpbmQ6IHRydWUsXG4gICAgICBmaWxlc0NoYW5nZWQ6IGRpZmZTdGF0cz8uZmlsZXNDaGFuZ2VkLFxuICAgICAgaW5zZXJ0aW9uczogZGlmZlN0YXRzPy5pbnNlcnRpb25zLFxuICAgICAgZGVsZXRpb25zOiBkaWZmU3RhdHM/LmRlbGV0aW9ucyxcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGZpbGVIaXN0b3J5UmV3aW5kKFxuICAgICAgdXBkYXRlciA9PlxuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBmaWxlSGlzdG9yeTogdXBkYXRlcihwcmV2LmZpbGVIaXN0b3J5KSxcbiAgICAgICAgfSkpLFxuICAgICAgdXNlck1lc3NhZ2VJZCxcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhblJld2luZDogZmFsc2UsXG4gICAgICBlcnJvcjogYEZhaWxlZCB0byByZXdpbmQ6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGNhblJld2luZDogdHJ1ZSB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNldFBlcm1pc3Npb25Nb2RlKFxuICByZXF1ZXN0OiB7IG1vZGU6IEludGVybmFsUGVybWlzc2lvbk1vZGUgfSxcbiAgcmVxdWVzdElkOiBzdHJpbmcsXG4gIHRvb2xQZXJtaXNzaW9uQ29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICBvdXRwdXQ6IFN0cmVhbTxTdGRvdXRNZXNzYWdlPixcbik6IFRvb2xQZXJtaXNzaW9uQ29udGV4dCB7XG4gIC8vIENoZWNrIGlmIHRyeWluZyB0byBzd2l0Y2ggdG8gYnlwYXNzUGVybWlzc2lvbnMgbW9kZVxuICBpZiAocmVxdWVzdC5tb2RlID09PSAnYnlwYXNzUGVybWlzc2lvbnMnKSB7XG4gICAgaWYgKGlzQnlwYXNzUGVybWlzc2lvbnNNb2RlRGlzYWJsZWQoKSkge1xuICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgc3VidHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAnQ2Fubm90IHNldCBwZXJtaXNzaW9uIG1vZGUgdG8gYnlwYXNzUGVybWlzc2lvbnMgYmVjYXVzZSBpdCBpcyBkaXNhYmxlZCBieSBzZXR0aW5ncyBvciBjb25maWd1cmF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG9vbFBlcm1pc3Npb25Db250ZXh0XG4gICAgfVxuICAgIGlmICghdG9vbFBlcm1pc3Npb25Db250ZXh0LmlzQnlwYXNzUGVybWlzc2lvbnNNb2RlQXZhaWxhYmxlKSB7XG4gICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICBzdWJ0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgICdDYW5ub3Qgc2V0IHBlcm1pc3Npb24gbW9kZSB0byBieXBhc3NQZXJtaXNzaW9ucyBiZWNhdXNlIHRoZSBzZXNzaW9uIHdhcyBub3QgbGF1bmNoZWQgd2l0aCAtLWRhbmdlcm91c2x5LXNraXAtcGVybWlzc2lvbnMnLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b29sUGVybWlzc2lvbkNvbnRleHRcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0cnlpbmcgdG8gc3dpdGNoIHRvIGF1dG8gbW9kZSB3aXRob3V0IHRoZSBjbGFzc2lmaWVyIGdhdGVcbiAgaWYgKFxuICAgIGZlYXR1cmUoJ1RSQU5TQ1JJUFRfQ0xBU1NJRklFUicpICYmXG4gICAgcmVxdWVzdC5tb2RlID09PSAnYXV0bycgJiZcbiAgICAhaXNBdXRvTW9kZUdhdGVFbmFibGVkKClcbiAgKSB7XG4gICAgY29uc3QgcmVhc29uID0gZ2V0QXV0b01vZGVVbmF2YWlsYWJsZVJlYXNvbigpXG4gICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgc3VidHlwZTogJ2Vycm9yJyxcbiAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICBlcnJvcjogcmVhc29uXG4gICAgICAgICAgPyBgQ2Fubm90IHNldCBwZXJtaXNzaW9uIG1vZGUgdG8gYXV0bzogJHtnZXRBdXRvTW9kZVVuYXZhaWxhYmxlTm90aWZpY2F0aW9uKHJlYXNvbil9YFxuICAgICAgICAgIDogJ0Nhbm5vdCBzZXQgcGVybWlzc2lvbiBtb2RlIHRvIGF1dG8nLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB0b29sUGVybWlzc2lvbkNvbnRleHRcbiAgfVxuXG4gIC8vIEFsbG93IHRoZSBtb2RlIHN3aXRjaFxuICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICByZXNwb25zZToge1xuICAgICAgICBtb2RlOiByZXF1ZXN0Lm1vZGUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi50cmFuc2l0aW9uUGVybWlzc2lvbk1vZGUoXG4gICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQubW9kZSxcbiAgICAgIHJlcXVlc3QubW9kZSxcbiAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICApLFxuICAgIG1vZGU6IHJlcXVlc3QubW9kZSxcbiAgfVxufVxuXG4vKipcbiAqIElERS10cmlnZ2VyZWQgY2hhbm5lbCBlbmFibGUuIERlcml2ZXMgdGhlIENoYW5uZWxFbnRyeSBmcm9tIHRoZSBjb25uZWN0aW9uJ3NcbiAqIHBsdWdpblNvdXJjZSAoSURFIGNhbid0IHNwb29mIGtpbmQvbWFya2V0cGxhY2UgXHUyMDE0IHdlIG9ubHkgdGFrZSB0aGUgc2VydmVyXG4gKiBuYW1lKSwgYXBwZW5kcyBpdCB0byBzZXNzaW9uIGFsbG93ZWRDaGFubmVscywgYW5kIHJ1bnMgdGhlIGZ1bGwgZ2F0ZS4gT25cbiAqIGdhdGUgZmFpbHVyZSwgcm9sbHMgYmFjayB0aGUgYXBwZW5kLiBPbiBzdWNjZXNzLCByZWdpc3RlcnMgYSBub3RpZmljYXRpb25cbiAqIGhhbmRsZXIgdGhhdCBlbnF1ZXVlcyBjaGFubmVsIG1lc3NhZ2VzIGF0IHByaW9yaXR5OiduZXh0JyBcdTIwMTQgZHJhaW5Db21tYW5kUXVldWVcbiAqIHBpY2tzIHRoZW0gdXAgYmV0d2VlbiB0dXJucy5cbiAqXG4gKiBJbnRlbnRpb25hbGx5IGRvZXMgTk9UIHJlZ2lzdGVyIHRoZSBjbGF1ZGUvY2hhbm5lbC9wZXJtaXNzaW9uIGhhbmRsZXIgdGhhdFxuICogdXNlTWFuYWdlTUNQQ29ubmVjdGlvbnMgc2V0cyB1cCBmb3IgaW50ZXJhY3RpdmUgbW9kZS4gVGhhdCBoYW5kbGVyIHJlc29sdmVzXG4gKiBhIHBlbmRpbmcgZGlhbG9nIGluc2lkZSBoYW5kbGVJbnRlcmFjdGl2ZVBlcm1pc3Npb24gXHUyMDE0IGJ1dCBwcmludC50cyBuZXZlclxuICogY2FsbHMgaGFuZGxlSW50ZXJhY3RpdmVQZXJtaXNzaW9uLiBXaGVuIFNESyBwZXJtaXNzaW9uIGxhbmRzIG9uICdhc2snLCBpdFxuICogZ29lcyB0byB0aGUgY29uc3VtZXIncyBjYW5Vc2VUb29sIGNhbGxiYWNrIG92ZXIgc3RkaW87IHRoZXJlIGlzIG5vIENMSS1zaWRlXG4gKiBkaWFsb2cgZm9yIGEgcmVtb3RlIFwieWVzIHRieGtxXCIgdG8gcmVzb2x2ZS4gSWYgYW4gSURFIHdhbnRzIGNoYW5uZWwtcmVsYXllZFxuICogdG9vbCBhcHByb3ZhbCwgdGhhdCdzIElERS1zaWRlIHBsdW1iaW5nIGFnYWluc3QgaXRzIG93biBwZW5kaW5nLW1hcC4gKEFsc29cbiAqIGdhdGVkIHNlcGFyYXRlbHkgYnkgdGVuZ3VfaGFyYm9yX3Blcm1pc3Npb25zIFx1MjAxNCBub3QgeWV0IHNoaXBwaW5nIG9uXG4gKiBpbnRlcmFjdGl2ZSBlaXRoZXIuKVxuICovXG5mdW5jdGlvbiBoYW5kbGVDaGFubmVsRW5hYmxlKFxuICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgc2VydmVyTmFtZTogc3RyaW5nLFxuICBjb25uZWN0aW9uUG9vbDogcmVhZG9ubHkgTUNQU2VydmVyQ29ubmVjdGlvbltdLFxuICBvdXRwdXQ6IFN0cmVhbTxTdGRvdXRNZXNzYWdlPixcbik6IHZvaWQge1xuICBjb25zdCByZXNwb25kRXJyb3IgPSAoZXJyb3I6IHN0cmluZykgPT5cbiAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICByZXNwb25zZTogeyBzdWJ0eXBlOiAnZXJyb3InLCByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsIGVycm9yIH0sXG4gICAgfSlcblxuICBpZiAoIShmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQ0hBTk5FTFMnKSkpIHtcbiAgICByZXR1cm4gcmVzcG9uZEVycm9yKCdjaGFubmVscyBmZWF0dXJlIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBidWlsZCcpXG4gIH1cblxuICAvLyBPbmx5IGEgJ2Nvbm5lY3RlZCcgY2xpZW50IGhhcyAuY2FwYWJpbGl0aWVzIGFuZCAuY2xpZW50IHRvIHJlZ2lzdGVyIHRoZVxuICAvLyBoYW5kbGVyIG9uLiBUaGUgcG9vbCBzcHJlYWQgYXQgdGhlIGNhbGwgc2l0ZSBtYXRjaGVzIG1jcF9zdGF0dXMuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBjb25uZWN0aW9uUG9vbC5maW5kKFxuICAgIGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lICYmIGMudHlwZSA9PT0gJ2Nvbm5lY3RlZCcsXG4gIClcbiAgaWYgKCFjb25uZWN0aW9uIHx8IGNvbm5lY3Rpb24udHlwZSAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICByZXR1cm4gcmVzcG9uZEVycm9yKGBzZXJ2ZXIgJHtzZXJ2ZXJOYW1lfSBpcyBub3QgY29ubmVjdGVkYClcbiAgfVxuXG4gIGNvbnN0IHBsdWdpblNvdXJjZSA9IGNvbm5lY3Rpb24uY29uZmlnLnBsdWdpblNvdXJjZVxuICBjb25zdCBwYXJzZWQgPSBwbHVnaW5Tb3VyY2UgPyBwYXJzZVBsdWdpbklkZW50aWZpZXIocGx1Z2luU291cmNlKSA6IHVuZGVmaW5lZFxuICBpZiAoIXBhcnNlZD8ubWFya2V0cGxhY2UpIHtcbiAgICAvLyBObyBwbHVnaW5Tb3VyY2Ugb3IgQC1sZXNzIHNvdXJjZSBcdTIwMTQgY2FuIG5ldmVyIHBhc3MgdGhlIHtwbHVnaW4sXG4gICAgLy8gbWFya2V0cGxhY2V9LWtleWVkIGFsbG93bGlzdC4gU2hvcnQtY2lyY3VpdCB3aXRoIHRoZSBzYW1lIHJlYXNvbiB0aGVcbiAgICAvLyBnYXRlIHdvdWxkIHByb2R1Y2UuXG4gICAgcmV0dXJuIHJlc3BvbmRFcnJvcihcbiAgICAgIGBzZXJ2ZXIgJHtzZXJ2ZXJOYW1lfSBpcyBub3QgcGx1Z2luLXNvdXJjZWQ7IGNoYW5uZWxfZW5hYmxlIHJlcXVpcmVzIGEgbWFya2V0cGxhY2UgcGx1Z2luYCxcbiAgICApXG4gIH1cblxuICBjb25zdCBlbnRyeTogQ2hhbm5lbEVudHJ5ID0ge1xuICAgIGtpbmQ6ICdwbHVnaW4nLFxuICAgIG5hbWU6IHBhcnNlZC5uYW1lLFxuICAgIG1hcmtldHBsYWNlOiBwYXJzZWQubWFya2V0cGxhY2UsXG4gIH1cbiAgLy8gSWRlbXBvdGVuY3k6IGRvbid0IGRvdWJsZS1hcHBlbmQgb24gcmVwZWF0IGVuYWJsZS5cbiAgY29uc3QgcHJpb3IgPSBnZXRBbGxvd2VkQ2hhbm5lbHMoKVxuICBjb25zdCBhbHJlYWR5ID0gcHJpb3Iuc29tZShcbiAgICBlID0+XG4gICAgICBlLmtpbmQgPT09ICdwbHVnaW4nICYmXG4gICAgICBlLm5hbWUgPT09IGVudHJ5Lm5hbWUgJiZcbiAgICAgIGUubWFya2V0cGxhY2UgPT09IGVudHJ5Lm1hcmtldHBsYWNlLFxuICApXG4gIGlmICghYWxyZWFkeSkgc2V0QWxsb3dlZENoYW5uZWxzKFsuLi5wcmlvciwgZW50cnldKVxuXG4gIGNvbnN0IGdhdGUgPSBnYXRlQ2hhbm5lbFNlcnZlcihcbiAgICBzZXJ2ZXJOYW1lLFxuICAgIGNvbm5lY3Rpb24uY2FwYWJpbGl0aWVzLFxuICAgIHBsdWdpblNvdXJjZSxcbiAgKVxuICBpZiAoZ2F0ZS5hY3Rpb24gPT09ICdza2lwJykge1xuICAgIC8vIFJvbGxiYWNrIFx1MjAxNCBvbmx5IHJlbW92ZSB0aGUgZW50cnkgd2UgYXBwZW5kZWQuXG4gICAgaWYgKCFhbHJlYWR5KSBzZXRBbGxvd2VkQ2hhbm5lbHMocHJpb3IpXG4gICAgcmV0dXJuIHJlc3BvbmRFcnJvcihnYXRlLnJlYXNvbilcbiAgfVxuXG4gIGNvbnN0IHBsdWdpbklkID1cbiAgICBgJHtlbnRyeS5uYW1lfUAke2VudHJ5Lm1hcmtldHBsYWNlfWAgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICBsb2dNQ1BEZWJ1ZyhzZXJ2ZXJOYW1lLCAnQ2hhbm5lbCBub3RpZmljYXRpb25zIHJlZ2lzdGVyZWQnKVxuICBsb2dFdmVudCgndGVuZ3VfbWNwX2NoYW5uZWxfZW5hYmxlJywgeyBwbHVnaW46IHBsdWdpbklkIH0pXG5cbiAgLy8gSWRlbnRpY2FsIGVucXVldWUgc2hhcGUgdG8gdGhlIGludGVyYWN0aXZlIHJlZ2lzdGVyIGJsb2NrIGluXG4gIC8vIHVzZU1hbmFnZU1DUENvbm5lY3Rpb25zLiBkcmFpbkNvbW1hbmRRdWV1ZSBwcm9jZXNzZXMgaXQgYmV0d2VlbiB0dXJucyBcdTIwMTRcbiAgLy8gY2hhbm5lbCBtZXNzYWdlcyBxdWV1ZSBhdCBwcmlvcml0eSAnbmV4dCcgYW5kIGFyZSBzZWVuIGJ5IHRoZSBtb2RlbCBvblxuICAvLyB0aGUgdHVybiBhZnRlciB0aGV5IGFycml2ZS5cbiAgY29ubmVjdGlvbi5jbGllbnQuc2V0Tm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICBDaGFubmVsTWVzc2FnZU5vdGlmaWNhdGlvblNjaGVtYSgpLFxuICAgIGFzeW5jIG5vdGlmaWNhdGlvbiA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQsIG1ldGEgfSA9IG5vdGlmaWNhdGlvbi5wYXJhbXNcbiAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICBgbm90aWZpY2F0aW9ucy9jbGF1ZGUvY2hhbm5lbDogJHtjb250ZW50LnNsaWNlKDAsIDgwKX1gLFxuICAgICAgKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9jaGFubmVsX21lc3NhZ2UnLCB7XG4gICAgICAgIGNvbnRlbnRfbGVuZ3RoOiBjb250ZW50Lmxlbmd0aCxcbiAgICAgICAgbWV0YV9rZXlfY291bnQ6IE9iamVjdC5rZXlzKG1ldGEgPz8ge30pLmxlbmd0aCxcbiAgICAgICAgZW50cnlfa2luZDpcbiAgICAgICAgICAncGx1Z2luJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICBpc19kZXY6IGZhbHNlLFxuICAgICAgICBwbHVnaW46IHBsdWdpbklkLFxuICAgICAgfSlcbiAgICAgIGVucXVldWUoe1xuICAgICAgICBtb2RlOiAncHJvbXB0JyxcbiAgICAgICAgdmFsdWU6IHdyYXBDaGFubmVsTWVzc2FnZShzZXJ2ZXJOYW1lLCBjb250ZW50LCBtZXRhKSxcbiAgICAgICAgcHJpb3JpdHk6ICduZXh0JyxcbiAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgICBvcmlnaW46IHsga2luZDogJ2NoYW5uZWwnLCBzZXJ2ZXI6IHNlcnZlck5hbWUgfSxcbiAgICAgICAgc2tpcFNsYXNoQ29tbWFuZHM6IHRydWUsXG4gICAgICB9KVxuICAgIH0sXG4gIClcblxuICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICByZXNwb25zZTogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0pXG59XG5cbi8qKlxuICogUmUtcmVnaXN0ZXIgdGhlIGNoYW5uZWwgbm90aWZpY2F0aW9uIGhhbmRsZXIgYWZ0ZXIgbWNwX3JlY29ubmVjdCAvXG4gKiBtY3BfdG9nZ2xlIGNyZWF0ZXMgYSBuZXcgY2xpZW50LiBoYW5kbGVDaGFubmVsRW5hYmxlIGJvdW5kIHRoZSBoYW5kbGVyIHRvXG4gKiB0aGUgT0xEIGNsaWVudCBvYmplY3Q7IGFsbG93ZWRDaGFubmVscyBzdXJ2aXZlcyB0aGUgcmVjb25uZWN0IGJ1dCB0aGVcbiAqIGhhbmRsZXIgYmluZGluZyBkb2VzIG5vdC4gV2l0aG91dCB0aGlzLCBjaGFubmVsIG1lc3NhZ2VzIHNpbGVudGx5IGRyb3BcbiAqIGFmdGVyIGEgcmVjb25uZWN0IHdoaWxlIHRoZSBJREUgc3RpbGwgYmVsaWV2ZXMgdGhlIGNoYW5uZWwgaXMgbGl2ZS5cbiAqXG4gKiBNaXJyb3JzIHRoZSBpbnRlcmFjdGl2ZSBDTEkncyBvbkNvbm5lY3Rpb25BdHRlbXB0IGluXG4gKiB1c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucywgd2hpY2ggcmUtZ2F0ZXMgb24gZXZlcnkgbmV3IGNvbm5lY3Rpb24uIFBhaXJlZFxuICogd2l0aCByZWdpc3RlckVsaWNpdGF0aW9uSGFuZGxlcnMgYXQgdGhlIHNhbWUgY2FsbCBzaXRlcy5cbiAqXG4gKiBOby1vcCBpZiB0aGUgc2VydmVyIHdhcyBuZXZlciBjaGFubmVsLWVuYWJsZWQ6IGdhdGVDaGFubmVsU2VydmVyIGNhbGxzXG4gKiBmaW5kQ2hhbm5lbEVudHJ5IGludGVybmFsbHkgYW5kIHJldHVybnMgc2tpcC9zZXNzaW9uIGZvciBhbiB1bmxpc3RlZFxuICogc2VydmVyLCBzbyByZWNvbm5lY3RpbmcgYSBub24tY2hhbm5lbCBNQ1Agc2VydmVyIGNvc3RzIG9uZSBmZWF0dXJlLWZsYWdcbiAqIGNoZWNrLlxuICovXG5mdW5jdGlvbiByZXJlZ2lzdGVyQ2hhbm5lbEhhbmRsZXJBZnRlclJlY29ubmVjdChcbiAgY29ubmVjdGlvbjogTUNQU2VydmVyQ29ubmVjdGlvbixcbik6IHZvaWQge1xuICBpZiAoIShmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQ0hBTk5FTFMnKSkpIHJldHVyblxuICBpZiAoY29ubmVjdGlvbi50eXBlICE9PSAnY29ubmVjdGVkJykgcmV0dXJuXG5cbiAgY29uc3QgZ2F0ZSA9IGdhdGVDaGFubmVsU2VydmVyKFxuICAgIGNvbm5lY3Rpb24ubmFtZSxcbiAgICBjb25uZWN0aW9uLmNhcGFiaWxpdGllcyxcbiAgICBjb25uZWN0aW9uLmNvbmZpZy5wbHVnaW5Tb3VyY2UsXG4gIClcbiAgaWYgKGdhdGUuYWN0aW9uICE9PSAncmVnaXN0ZXInKSByZXR1cm5cblxuICBjb25zdCBlbnRyeSA9IGZpbmRDaGFubmVsRW50cnkoY29ubmVjdGlvbi5uYW1lLCBnZXRBbGxvd2VkQ2hhbm5lbHMoKSlcbiAgY29uc3QgcGx1Z2luSWQgPVxuICAgIGVudHJ5Py5raW5kID09PSAncGx1Z2luJ1xuICAgICAgPyAoYCR7ZW50cnkubmFtZX1AJHtlbnRyeS5tYXJrZXRwbGFjZX1gIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMpXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIGxvZ01DUERlYnVnKFxuICAgIGNvbm5lY3Rpb24ubmFtZSxcbiAgICAnQ2hhbm5lbCBub3RpZmljYXRpb25zIHJlLXJlZ2lzdGVyZWQgYWZ0ZXIgcmVjb25uZWN0JyxcbiAgKVxuICBjb25uZWN0aW9uLmNsaWVudC5zZXROb3RpZmljYXRpb25IYW5kbGVyKFxuICAgIENoYW5uZWxNZXNzYWdlTm90aWZpY2F0aW9uU2NoZW1hKCksXG4gICAgYXN5bmMgbm90aWZpY2F0aW9uID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGVudCwgbWV0YSB9ID0gbm90aWZpY2F0aW9uLnBhcmFtc1xuICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgIGNvbm5lY3Rpb24ubmFtZSxcbiAgICAgICAgYG5vdGlmaWNhdGlvbnMvY2xhdWRlL2NoYW5uZWw6ICR7Y29udGVudC5zbGljZSgwLCA4MCl9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfY2hhbm5lbF9tZXNzYWdlJywge1xuICAgICAgICBjb250ZW50X2xlbmd0aDogY29udGVudC5sZW5ndGgsXG4gICAgICAgIG1ldGFfa2V5X2NvdW50OiBPYmplY3Qua2V5cyhtZXRhID8/IHt9KS5sZW5ndGgsXG4gICAgICAgIGVudHJ5X2tpbmQ6XG4gICAgICAgICAgZW50cnk/LmtpbmQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgaXNfZGV2OiBlbnRyeT8uZGV2ID8/IGZhbHNlLFxuICAgICAgICBwbHVnaW46IHBsdWdpbklkLFxuICAgICAgfSlcbiAgICAgIGVucXVldWUoe1xuICAgICAgICBtb2RlOiAncHJvbXB0JyxcbiAgICAgICAgdmFsdWU6IHdyYXBDaGFubmVsTWVzc2FnZShjb25uZWN0aW9uLm5hbWUsIGNvbnRlbnQsIG1ldGEpLFxuICAgICAgICBwcmlvcml0eTogJ25leHQnLFxuICAgICAgICBpc01ldGE6IHRydWUsXG4gICAgICAgIG9yaWdpbjogeyBraW5kOiAnY2hhbm5lbCcsIHNlcnZlcjogY29ubmVjdGlvbi5uYW1lIH0sXG4gICAgICAgIHNraXBTbGFzaENvbW1hbmRzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9LFxuICApXG59XG5cbi8qKlxuICogRW1pdHMgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgY29ycmVjdCBmb3JtYXQgYmFzZWQgb24gb3V0cHV0Rm9ybWF0LlxuICogV2hlbiB1c2luZyBzdHJlYW0tanNvbiwgd3JpdGVzIEpTT04gdG8gc3Rkb3V0OyBvdGhlcndpc2Ugd3JpdGVzIHBsYWluIHRleHQgdG8gc3RkZXJyLlxuICovXG5mdW5jdGlvbiBlbWl0TG9hZEVycm9yKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIG91dHB1dEZvcm1hdDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKTogdm9pZCB7XG4gIGlmIChvdXRwdXRGb3JtYXQgPT09ICdzdHJlYW0tanNvbicpIHtcbiAgICBjb25zdCBlcnJvclJlc3VsdCA9IHtcbiAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgc3VidHlwZTogJ2Vycm9yX2R1cmluZ19leGVjdXRpb24nLFxuICAgICAgZHVyYXRpb25fbXM6IDAsXG4gICAgICBkdXJhdGlvbl9hcGlfbXM6IDAsXG4gICAgICBpc19lcnJvcjogdHJ1ZSxcbiAgICAgIG51bV90dXJuczogMCxcbiAgICAgIHN0b3BfcmVhc29uOiBudWxsLFxuICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICB0b3RhbF9jb3N0X3VzZDogMCxcbiAgICAgIHVzYWdlOiBFTVBUWV9VU0FHRSxcbiAgICAgIG1vZGVsVXNhZ2U6IHt9LFxuICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiBbXSxcbiAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIGVycm9yczogW21lc3NhZ2VdLFxuICAgIH1cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShqc29uU3RyaW5naWZ5KGVycm9yUmVzdWx0KSArICdcXG4nKVxuICB9IGVsc2Uge1xuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKG1lc3NhZ2UgKyAnXFxuJylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gaW50ZXJydXB0ZWQgdXNlciBtZXNzYWdlIGFuZCBpdHMgc3ludGhldGljIGFzc2lzdGFudCBzZW50aW5lbFxuICogZnJvbSB0aGUgbWVzc2FnZSBhcnJheS4gVXNlZCBkdXJpbmcgZ2F0ZXdheS10cmlnZ2VyZWQgcmVzdGFydHMgdG8gY2xlYW4gdXBcbiAqIHRoZSBtZXNzYWdlIGhpc3RvcnkgYmVmb3JlIHJlLWVucXVldWluZyB0aGUgaW50ZXJydXB0ZWQgcHJvbXB0LlxuICpcbiAqIEBpbnRlcm5hbCBFeHBvcnRlZCBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW50ZXJydXB0ZWRNZXNzYWdlKFxuICBtZXNzYWdlczogTWVzc2FnZVtdLFxuICBpbnRlcnJ1cHRlZFVzZXJNZXNzYWdlOiBOb3JtYWxpemVkVXNlck1lc3NhZ2UsXG4pOiB2b2lkIHtcbiAgY29uc3QgaWR4ID0gbWVzc2FnZXMuZmluZEluZGV4KG0gPT4gbS51dWlkID09PSBpbnRlcnJ1cHRlZFVzZXJNZXNzYWdlLnV1aWQpXG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSB1c2VyIG1lc3NhZ2UgYW5kIHRoZSBzZW50aW5lbCB0aGF0IGltbWVkaWF0ZWx5IGZvbGxvd3MgaXQuXG4gICAgLy8gc3BsaWNlIHNhZmVseSBoYW5kbGVzIHRoZSBjYXNlIHdoZXJlIGlkeCBpcyB0aGUgbGFzdCBlbGVtZW50LlxuICAgIG1lc3NhZ2VzLnNwbGljZShpZHgsIDIpXG4gIH1cbn1cblxudHlwZSBMb2FkSW5pdGlhbE1lc3NhZ2VzUmVzdWx0ID0ge1xuICBtZXNzYWdlczogTWVzc2FnZVtdXG4gIHR1cm5JbnRlcnJ1cHRpb25TdGF0ZT86IFR1cm5JbnRlcnJ1cHRpb25TdGF0ZVxuICBhZ2VudFNldHRpbmc/OiBzdHJpbmdcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEluaXRpYWxNZXNzYWdlcyhcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuICBvcHRpb25zOiB7XG4gICAgY29udGludWU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICB0ZWxlcG9ydDogc3RyaW5nIHwgdHJ1ZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICByZXN1bWU6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICByZXN1bWVTZXNzaW9uQXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGZvcmtTZXNzaW9uOiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgb3V0cHV0Rm9ybWF0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBzZXNzaW9uU3RhcnRIb29rc1Byb21pc2U/OiBSZXR1cm5UeXBlPHR5cGVvZiBwcm9jZXNzU2Vzc2lvblN0YXJ0SG9va3M+XG4gICAgcmVzdG9yZWRXb3JrZXJTdGF0ZTogUHJvbWlzZTxTZXNzaW9uRXh0ZXJuYWxNZXRhZGF0YSB8IG51bGw+XG4gIH0sXG4pOiBQcm9taXNlPExvYWRJbml0aWFsTWVzc2FnZXNSZXN1bHQ+IHtcbiAgY29uc3QgcGVyc2lzdFNlc3Npb24gPSAhaXNTZXNzaW9uUGVyc2lzdGVuY2VEaXNhYmxlZCgpXG4gIC8vIEhhbmRsZSBjb250aW51ZSBpbiBwcmludCBtb2RlXG4gIGlmIChvcHRpb25zLmNvbnRpbnVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jb250aW51ZV9wcmludCcsIHt9KVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lKFxuICAgICAgICB1bmRlZmluZWQgLyogc2Vzc2lvbklkICovLFxuICAgICAgICB1bmRlZmluZWQgLyogZmlsZSBwYXRoICovLFxuICAgICAgKVxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBNYXRjaCBjb29yZGluYXRvciBtb2RlIHRvIHRoZSByZXN1bWVkIHNlc3Npb24ncyBtb2RlXG4gICAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykgJiYgY29vcmRpbmF0b3JNb2RlTW9kdWxlKSB7XG4gICAgICAgICAgY29uc3Qgd2FybmluZyA9IGNvb3JkaW5hdG9yTW9kZU1vZHVsZS5tYXRjaFNlc3Npb25Nb2RlKHJlc3VsdC5tb2RlKVxuICAgICAgICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSh3YXJuaW5nICsgJ1xcbicpXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGFnZW50IGRlZmluaXRpb25zIHRvIHJlZmxlY3QgdGhlIG1vZGUgc3dpdGNoXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzLFxuICAgICAgICAgICAgICBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdCxcbiAgICAgICAgICAgIH0gPVxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgICAgICAgICByZXF1aXJlKCcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJylcbiAgICAgICAgICAgIGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzLmNhY2hlLmNsZWFyPy4oKVxuICAgICAgICAgICAgY29uc3QgZnJlc2hBZ2VudERlZnMgPSBhd2FpdCBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcyhcbiAgICAgICAgICAgICAgZ2V0Q3dkKCksXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgYWdlbnREZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgIC4uLmZyZXNoQWdlbnREZWZzLFxuICAgICAgICAgICAgICAgIGFsbEFnZW50czogZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUFnZW50czogZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QoZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldXNlIHRoZSByZXN1bWVkIHNlc3Npb24ncyBJRFxuICAgICAgICBpZiAoIW9wdGlvbnMuZm9ya1Nlc3Npb24pIHtcbiAgICAgICAgICBpZiAocmVzdWx0LnNlc3Npb25JZCkge1xuICAgICAgICAgICAgc3dpdGNoU2Vzc2lvbihcbiAgICAgICAgICAgICAgYXNTZXNzaW9uSWQocmVzdWx0LnNlc3Npb25JZCksXG4gICAgICAgICAgICAgIHJlc3VsdC5mdWxsUGF0aCA/IGRpcm5hbWUocmVzdWx0LmZ1bGxQYXRoKSA6IG51bGwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAgICAgYXdhaXQgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN0b3JlU2Vzc2lvblN0YXRlRnJvbUxvZyhyZXN1bHQsIHNldEFwcFN0YXRlKVxuXG4gICAgICAgIC8vIFJlc3RvcmUgc2Vzc2lvbiBtZXRhZGF0YSBzbyBpdCdzIHJlLWFwcGVuZGVkIG9uIGV4aXQgdmlhIHJlQXBwZW5kU2Vzc2lvbk1ldGFkYXRhXG4gICAgICAgIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEoXG4gICAgICAgICAgb3B0aW9ucy5mb3JrU2Vzc2lvblxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgd29ya3RyZWVTZXNzaW9uOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgOiByZXN1bHQsXG4gICAgICAgIClcblxuICAgICAgICAvLyBXcml0ZSBtb2RlIGVudHJ5IGZvciB0aGUgcmVzdW1lZCBzZXNzaW9uXG4gICAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykgJiYgY29vcmRpbmF0b3JNb2RlTW9kdWxlKSB7XG4gICAgICAgICAgc2F2ZU1vZGUoXG4gICAgICAgICAgICBjb29yZGluYXRvck1vZGVNb2R1bGUuaXNDb29yZGluYXRvck1vZGUoKVxuICAgICAgICAgICAgICA/ICdjb29yZGluYXRvcidcbiAgICAgICAgICAgICAgOiAnbm9ybWFsJyxcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2VzOiByZXN1bHQubWVzc2FnZXMsXG4gICAgICAgICAgdHVybkludGVycnVwdGlvblN0YXRlOiByZXN1bHQudHVybkludGVycnVwdGlvblN0YXRlLFxuICAgICAgICAgIGFnZW50U2V0dGluZzogcmVzdWx0LmFnZW50U2V0dGluZyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dFcnJvcihlcnJvcilcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm4geyBtZXNzYWdlczogW10gfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSB0ZWxlcG9ydCBpbiBwcmludCBtb2RlXG4gIGlmIChvcHRpb25zLnRlbGVwb3J0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghaXNQb2xpY3lBbGxvd2VkKCdhbGxvd19yZW1vdGVfc2Vzc2lvbnMnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJSZW1vdGUgc2Vzc2lvbnMgYXJlIGRpc2FibGVkIGJ5IHlvdXIgb3JnYW5pemF0aW9uJ3MgcG9saWN5LlwiLFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV90ZWxlcG9ydF9wcmludCcsIHt9KVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGVsZXBvcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2Vzc2lvbiBJRCBwcm92aWRlZCBmb3IgdGVsZXBvcnQnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGNoZWNrT3V0VGVsZXBvcnRlZFNlc3Npb25CcmFuY2gsXG4gICAgICAgIHByb2Nlc3NNZXNzYWdlc0ZvclRlbGVwb3J0UmVzdW1lLFxuICAgICAgICB0ZWxlcG9ydFJlc3VtZUNvZGVTZXNzaW9uLFxuICAgICAgICB2YWxpZGF0ZUdpdFN0YXRlLFxuICAgICAgfSA9IGF3YWl0IGltcG9ydCgnc3JjL3V0aWxzL3RlbGVwb3J0LmpzJylcbiAgICAgIGF3YWl0IHZhbGlkYXRlR2l0U3RhdGUoKVxuICAgICAgY29uc3QgdGVsZXBvcnRSZXN1bHQgPSBhd2FpdCB0ZWxlcG9ydFJlc3VtZUNvZGVTZXNzaW9uKG9wdGlvbnMudGVsZXBvcnQpXG4gICAgICBjb25zdCB7IGJyYW5jaEVycm9yIH0gPSBhd2FpdCBjaGVja091dFRlbGVwb3J0ZWRTZXNzaW9uQnJhbmNoKFxuICAgICAgICB0ZWxlcG9ydFJlc3VsdC5icmFuY2gsXG4gICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlczogcHJvY2Vzc01lc3NhZ2VzRm9yVGVsZXBvcnRSZXN1bWUoXG4gICAgICAgICAgdGVsZXBvcnRSZXN1bHQubG9nLFxuICAgICAgICAgIGJyYW5jaEVycm9yLFxuICAgICAgICApLFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dFcnJvcihlcnJvcilcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm4geyBtZXNzYWdlczogW10gfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSByZXN1bWUgaW4gcHJpbnQgbW9kZSAoYWNjZXB0cyBzZXNzaW9uIElEIG9yIFVSTClcbiAgLy8gVVJMcyBhcmUgW0FOVC1PTkxZXVxuICBpZiAob3B0aW9ucy5yZXN1bWUpIHtcbiAgICB0cnkge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Jlc3VtZV9wcmludCcsIHt9KVxuXG4gICAgICAvLyBJbiBwcmludCBtb2RlIC0gd2UgcmVxdWlyZSBhIHZhbGlkIHNlc3Npb24gSUQsIEpTT05MIGZpbGUgb3IgVVJMXG4gICAgICBjb25zdCBwYXJzZWRTZXNzaW9uSWQgPSBwYXJzZVNlc3Npb25JZGVudGlmaWVyKFxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5yZXN1bWUgPT09ICdzdHJpbmcnID8gb3B0aW9ucy5yZXN1bWUgOiAnJyxcbiAgICAgIClcbiAgICAgIGlmICghcGFyc2VkU2Vzc2lvbklkKSB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICAgICdFcnJvcjogLS1yZXN1bWUgcmVxdWlyZXMgYSB2YWxpZCBzZXNzaW9uIElEIHdoZW4gdXNlZCB3aXRoIC0tcHJpbnQuIFVzYWdlOiBjbGF1ZGUgLXAgLS1yZXN1bWUgPHNlc3Npb24taWQ+J1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucmVzdW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgLiBTZXNzaW9uIElEcyBtdXN0IGJlIGluIFVVSUQgZm9ybWF0IChlLmcuLCA1NTBlODQwMC1lMjliLTQxZDQtYTcxNi00NDY2NTU0NDAwMDApLiBQcm92aWRlZCB2YWx1ZSBcIiR7b3B0aW9ucy5yZXN1bWV9XCIgaXMgbm90IGEgdmFsaWQgVVVJRGBcbiAgICAgICAgfVxuICAgICAgICBlbWl0TG9hZEVycm9yKGVycm9yTWVzc2FnZSwgb3B0aW9ucy5vdXRwdXRGb3JtYXQpXG4gICAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBbXSB9XG4gICAgICB9XG5cbiAgICAgIC8vIEh5ZHJhdGUgbG9jYWwgdHJhbnNjcmlwdCBmcm9tIHJlbW90ZSBiZWZvcmUgbG9hZGluZ1xuICAgICAgaWYgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1VTRV9DQ1JfVjIpKSB7XG4gICAgICAgIC8vIEF3YWl0IHJlc3RvcmUgYWxvbmdzaWRlIGh5ZHJhdGlvbiBzbyBTU0UgY2F0Y2h1cCBsYW5kcyBvblxuICAgICAgICAvLyByZXN0b3JlZCBzdGF0ZSwgbm90IGEgZnJlc2ggZGVmYXVsdC5cbiAgICAgICAgY29uc3QgWywgbWV0YWRhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGh5ZHJhdGVGcm9tQ0NSdjJJbnRlcm5hbEV2ZW50cyhwYXJzZWRTZXNzaW9uSWQuc2Vzc2lvbklkKSxcbiAgICAgICAgICBvcHRpb25zLnJlc3RvcmVkV29ya2VyU3RhdGUsXG4gICAgICAgIF0pXG4gICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgIHNldEFwcFN0YXRlKGV4dGVybmFsTWV0YWRhdGFUb0FwcFN0YXRlKG1ldGFkYXRhKSlcbiAgICAgICAgICBpZiAodHlwZW9mIG1ldGFkYXRhLm1vZGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKG1ldGFkYXRhLm1vZGVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcGFyc2VkU2Vzc2lvbklkLmlzVXJsICYmXG4gICAgICAgIHBhcnNlZFNlc3Npb25JZC5pbmdyZXNzVXJsICYmXG4gICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkVOQUJMRV9TRVNTSU9OX1BFUlNJU1RFTkNFKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHYxOiBmZXRjaCBzZXNzaW9uIGxvZ3MgZnJvbSBTZXNzaW9uIEluZ3Jlc3NcbiAgICAgICAgYXdhaXQgaHlkcmF0ZVJlbW90ZVNlc3Npb24oXG4gICAgICAgICAgcGFyc2VkU2Vzc2lvbklkLnNlc3Npb25JZCxcbiAgICAgICAgICBwYXJzZWRTZXNzaW9uSWQuaW5ncmVzc1VybCxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSBjb252ZXJzYXRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIHNlc3Npb24gSURcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvYWRDb252ZXJzYXRpb25Gb3JSZXN1bWUoXG4gICAgICAgIHBhcnNlZFNlc3Npb25JZC5zZXNzaW9uSWQsXG4gICAgICAgIHBhcnNlZFNlc3Npb25JZC5qc29ubEZpbGUgfHwgdW5kZWZpbmVkLFxuICAgICAgKVxuXG4gICAgICAvLyBoeWRyYXRlRnJvbUNDUnYySW50ZXJuYWxFdmVudHMgd3JpdGVzIGFuIGVtcHR5IHRyYW5zY3JpcHQgZmlsZSBmb3JcbiAgICAgIC8vIGZyZXNoIHNlc3Npb25zICh3cml0ZUZpbGUoc2Vzc2lvbkZpbGUsICcnKSB3aXRoIHplcm8gZXZlbnRzKSwgc29cbiAgICAgIC8vIGxvYWRDb252ZXJzYXRpb25Gb3JSZXN1bWUgcmV0dXJucyB7bWVzc2FnZXM6IFtdfSBub3QgbnVsbC4gVHJlYXRcbiAgICAgIC8vIGVtcHR5IHRoZSBzYW1lIGFzIG51bGwgc28gU2Vzc2lvblN0YXJ0IHN0aWxsIGZpcmVzLlxuICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lm1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBGb3IgVVJMLWJhc2VkIG9yIENDUiB2MiByZXN1bWUsIHN0YXJ0IHdpdGggZW1wdHkgc2Vzc2lvbiAoaXQgd2FzIGh5ZHJhdGVkIGJ1dCBlbXB0eSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhcnNlZFNlc3Npb25JZC5pc1VybCB8fFxuICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1VTRV9DQ1JfVjIpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIEV4ZWN1dGUgU2Vzc2lvblN0YXJ0IGhvb2tzIGZvciBzdGFydHVwIHNpbmNlIHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IHNlc3Npb25cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IGF3YWl0IChvcHRpb25zLnNlc3Npb25TdGFydEhvb2tzUHJvbWlzZSA/P1xuICAgICAgICAgICAgICBwcm9jZXNzU2Vzc2lvblN0YXJ0SG9va3MoJ3N0YXJ0dXAnKSksXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVtaXRMb2FkRXJyb3IoXG4gICAgICAgICAgICBgTm8gY29udmVyc2F0aW9uIGZvdW5kIHdpdGggc2Vzc2lvbiBJRDogJHtwYXJzZWRTZXNzaW9uSWQuc2Vzc2lvbklkfWAsXG4gICAgICAgICAgICBvcHRpb25zLm91dHB1dEZvcm1hdCxcbiAgICAgICAgICApXG4gICAgICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogW10gfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSByZXN1bWVTZXNzaW9uQXQgZmVhdHVyZVxuICAgICAgaWYgKG9wdGlvbnMucmVzdW1lU2Vzc2lvbkF0KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmVzdWx0Lm1lc3NhZ2VzLmZpbmRJbmRleChcbiAgICAgICAgICBtID0+IG0udXVpZCA9PT0gb3B0aW9ucy5yZXN1bWVTZXNzaW9uQXQsXG4gICAgICAgIClcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGVtaXRMb2FkRXJyb3IoXG4gICAgICAgICAgICBgTm8gbWVzc2FnZSBmb3VuZCB3aXRoIG1lc3NhZ2UudXVpZCBvZjogJHtvcHRpb25zLnJlc3VtZVNlc3Npb25BdH1gLFxuICAgICAgICAgICAgb3B0aW9ucy5vdXRwdXRGb3JtYXQsXG4gICAgICAgICAgKVxuICAgICAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlcyA9IGluZGV4ID49IDAgPyByZXN1bHQubWVzc2FnZXMuc2xpY2UoMCwgaW5kZXggKyAxKSA6IFtdXG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIGNvb3JkaW5hdG9yIG1vZGUgdG8gdGhlIHJlc3VtZWQgc2Vzc2lvbidzIG1vZGVcbiAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykgJiYgY29vcmRpbmF0b3JNb2RlTW9kdWxlKSB7XG4gICAgICAgIGNvbnN0IHdhcm5pbmcgPSBjb29yZGluYXRvck1vZGVNb2R1bGUubWF0Y2hTZXNzaW9uTW9kZShyZXN1bHQubW9kZSlcbiAgICAgICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSh3YXJuaW5nICsgJ1xcbicpXG4gICAgICAgICAgLy8gUmVmcmVzaCBhZ2VudCBkZWZpbml0aW9ucyB0byByZWZsZWN0IHRoZSBtb2RlIHN3aXRjaFxuICAgICAgICAgIGNvbnN0IHsgZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMsIGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0IH0gPVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnKVxuICAgICAgICAgIGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzLmNhY2hlLmNsZWFyPy4oKVxuICAgICAgICAgIGNvbnN0IGZyZXNoQWdlbnREZWZzID0gYXdhaXQgZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMoXG4gICAgICAgICAgICBnZXRDd2QoKSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgYWdlbnREZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAuLi5mcmVzaEFnZW50RGVmcyxcbiAgICAgICAgICAgICAgYWxsQWdlbnRzOiBmcmVzaEFnZW50RGVmcy5hbGxBZ2VudHMsXG4gICAgICAgICAgICAgIGFjdGl2ZUFnZW50czogZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QoZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmV1c2UgdGhlIHJlc3VtZWQgc2Vzc2lvbidzIElEXG4gICAgICBpZiAoIW9wdGlvbnMuZm9ya1Nlc3Npb24gJiYgcmVzdWx0LnNlc3Npb25JZCkge1xuICAgICAgICBzd2l0Y2hTZXNzaW9uKFxuICAgICAgICAgIGFzU2Vzc2lvbklkKHJlc3VsdC5zZXNzaW9uSWQpLFxuICAgICAgICAgIHJlc3VsdC5mdWxsUGF0aCA/IGRpcm5hbWUocmVzdWx0LmZ1bGxQYXRoKSA6IG51bGwsXG4gICAgICAgIClcbiAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgYXdhaXQgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN0b3JlU2Vzc2lvblN0YXRlRnJvbUxvZyhyZXN1bHQsIHNldEFwcFN0YXRlKVxuXG4gICAgICAvLyBSZXN0b3JlIHNlc3Npb24gbWV0YWRhdGEgc28gaXQncyByZS1hcHBlbmRlZCBvbiBleGl0IHZpYSByZUFwcGVuZFNlc3Npb25NZXRhZGF0YVxuICAgICAgcmVzdG9yZVNlc3Npb25NZXRhZGF0YShcbiAgICAgICAgb3B0aW9ucy5mb3JrU2Vzc2lvblxuICAgICAgICAgID8geyAuLi5yZXN1bHQsIHdvcmt0cmVlU2Vzc2lvbjogdW5kZWZpbmVkIH1cbiAgICAgICAgICA6IHJlc3VsdCxcbiAgICAgIClcblxuICAgICAgLy8gV3JpdGUgbW9kZSBlbnRyeSBmb3IgdGhlIHJlc3VtZWQgc2Vzc2lvblxuICAgICAgaWYgKGZlYXR1cmUoJ0NPT1JESU5BVE9SX01PREUnKSAmJiBjb29yZGluYXRvck1vZGVNb2R1bGUpIHtcbiAgICAgICAgc2F2ZU1vZGUoXG4gICAgICAgICAgY29vcmRpbmF0b3JNb2RlTW9kdWxlLmlzQ29vcmRpbmF0b3JNb2RlKCkgPyAnY29vcmRpbmF0b3InIDogJ25vcm1hbCcsXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IHJlc3VsdC5tZXNzYWdlcyxcbiAgICAgICAgdHVybkludGVycnVwdGlvblN0YXRlOiByZXN1bHQudHVybkludGVycnVwdGlvblN0YXRlLFxuICAgICAgICBhZ2VudFNldHRpbmc6IHJlc3VsdC5hZ2VudFNldHRpbmcsXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gYEZhaWxlZCB0byByZXN1bWUgc2Vzc2lvbjogJHtlcnJvci5tZXNzYWdlfWBcbiAgICAgICAgICA6ICdGYWlsZWQgdG8gcmVzdW1lIHNlc3Npb24gd2l0aCAtLXByaW50IG1vZGUnXG4gICAgICBlbWl0TG9hZEVycm9yKGVycm9yTWVzc2FnZSwgb3B0aW9ucy5vdXRwdXRGb3JtYXQpXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdIH1cbiAgICB9XG4gIH1cblxuICAvLyBKb2luIHRoZSBTZXNzaW9uU3RhcnQgaG9va3MgcHJvbWlzZSBraWNrZWQgaW4gbWFpbi50c3ggKG9yIHJ1biBmcmVzaCBpZlxuICAvLyBpdCB3YXNuJ3Qga2lja2VkIFx1MjAxNCBlLmcuIC0tY29udGludWUgd2l0aCBubyBwcmlvciBzZXNzaW9uIGZhbGxzIHRocm91Z2hcbiAgLy8gaGVyZSB3aXRoIHNlc3Npb25TdGFydEhvb2tzUHJvbWlzZSB1bmRlZmluZWQgYmVjYXVzZSBtYWluLnRzeCBndWFyZHMgb24gY29udGludWUpXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IGF3YWl0IChvcHRpb25zLnNlc3Npb25TdGFydEhvb2tzUHJvbWlzZSA/P1xuICAgICAgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzKCdzdGFydHVwJykpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZWRJTyhcbiAgaW5wdXRQcm9tcHQ6IHN0cmluZyB8IEFzeW5jSXRlcmFibGU8c3RyaW5nPixcbiAgb3B0aW9uczoge1xuICAgIHNka1VybDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgcmVwbGF5VXNlck1lc3NhZ2VzPzogYm9vbGVhblxuICB9LFxuKTogU3RydWN0dXJlZElPIHtcbiAgbGV0IGlucHV0U3RyZWFtOiBBc3luY0l0ZXJhYmxlPHN0cmluZz5cbiAgaWYgKHR5cGVvZiBpbnB1dFByb21wdCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaW5wdXRQcm9tcHQudHJpbSgpICE9PSAnJykge1xuICAgICAgLy8gTm9ybWFsaXplIHRvIGEgc3RyZWFtaW5nIGlucHV0LlxuICAgICAgaW5wdXRTdHJlYW0gPSBmcm9tQXJyYXkoW1xuICAgICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgc2Vzc2lvbl9pZDogJycsXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgICAgY29udGVudDogaW5wdXRQcm9tcHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG51bGwsXG4gICAgICAgIH0gc2F0aXNmaWVzIFNES1VzZXJNZXNzYWdlKSxcbiAgICAgIF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVtcHR5IHN0cmluZyAtIGNyZWF0ZSBlbXB0eSBzdHJlYW1cbiAgICAgIGlucHV0U3RyZWFtID0gZnJvbUFycmF5KFtdKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dFN0cmVhbSA9IGlucHV0UHJvbXB0XG4gIH1cblxuICAvLyBVc2UgUmVtb3RlSU8gaWYgc2RrVXJsIGlzIHByb3ZpZGVkLCBvdGhlcndpc2UgdXNlIHJlZ3VsYXIgU3RydWN0dXJlZElPXG4gIHJldHVybiBvcHRpb25zLnNka1VybFxuICAgID8gbmV3IFJlbW90ZUlPKG9wdGlvbnMuc2RrVXJsLCBpbnB1dFN0cmVhbSwgb3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpXG4gICAgOiBuZXcgU3RydWN0dXJlZElPKGlucHV0U3RyZWFtLCBvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcylcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHVuZXhwZWN0ZWQgcGVybWlzc2lvbiByZXNwb25zZXMgYnkgbG9va2luZyB1cCB0aGUgdW5yZXNvbHZlZCB0b29sXG4gKiBjYWxsIGluIHRoZSB0cmFuc2NyaXB0IGFuZCBlbnF1ZXVpbmcgaXQgZm9yIGV4ZWN1dGlvbi5cbiAqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBwZXJtaXNzaW9uIHdhcyBlbnF1ZXVlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2Uoe1xuICBtZXNzYWdlLFxuICBzZXRBcHBTdGF0ZSxcbiAgb25FbnF1ZXVlZCxcbiAgaGFuZGxlZFRvb2xVc2VJZHMsXG59OiB7XG4gIG1lc3NhZ2U6IFNES0NvbnRyb2xSZXNwb25zZVxuICBzZXRBcHBTdGF0ZTogKGY6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWRcbiAgb25FbnF1ZXVlZD86ICgpID0+IHZvaWRcbiAgaGFuZGxlZFRvb2xVc2VJZHM6IFNldDxzdHJpbmc+XG59KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGlmIChcbiAgICBtZXNzYWdlLnJlc3BvbnNlLnN1YnR5cGUgPT09ICdzdWNjZXNzJyAmJlxuICAgIG1lc3NhZ2UucmVzcG9uc2UucmVzcG9uc2U/LnRvb2xVc2VJRCAmJlxuICAgIHR5cGVvZiBtZXNzYWdlLnJlc3BvbnNlLnJlc3BvbnNlLnRvb2xVc2VJRCA9PT0gJ3N0cmluZydcbiAgKSB7XG4gICAgY29uc3QgcGVybWlzc2lvblJlc3VsdCA9IG1lc3NhZ2UucmVzcG9uc2UucmVzcG9uc2UgYXMgUGVybWlzc2lvblJlc3VsdFxuICAgIGNvbnN0IHsgdG9vbFVzZUlEIH0gPSBwZXJtaXNzaW9uUmVzdWx0XG4gICAgaWYgKCF0b29sVXNlSUQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBoYW5kbGVPcnBoYW5lZFBlcm1pc3Npb25SZXNwb25zZTogcmVjZWl2ZWQgb3JwaGFuZWQgY29udHJvbF9yZXNwb25zZSBmb3IgdG9vbFVzZUlEPSR7dG9vbFVzZUlEfSByZXF1ZXN0X2lkPSR7bWVzc2FnZS5yZXNwb25zZS5yZXF1ZXN0X2lkfWAsXG4gICAgKVxuXG4gICAgLy8gUHJldmVudCByZS1wcm9jZXNzaW5nIHRoZSBzYW1lIG9ycGhhbmVkIHRvb2xfdXNlLiBXaXRob3V0IHRoaXMgZ3VhcmQsXG4gICAgLy8gZHVwbGljYXRlIGNvbnRyb2xfcmVzcG9uc2UgZGVsaXZlcmllcyAoZS5nLiBmcm9tIFdlYlNvY2tldCByZWNvbm5lY3QpXG4gICAgLy8gY2F1c2UgdGhlIHNhbWUgdG9vbCB0byBiZSBleGVjdXRlZCBtdWx0aXBsZSB0aW1lcywgcHJvZHVjaW5nIGR1cGxpY2F0ZVxuICAgIC8vIHRvb2xfdXNlIElEcyBpbiB0aGUgbWVzc2FnZXMgYXJyYXkgYW5kIGEgNDAwIGVycm9yIGZyb20gdGhlIEFQSS5cbiAgICAvLyBPbmNlIGNvcnJ1cHRlZCwgZXZlcnkgcmV0cnkgYWNjdW11bGF0ZXMgbW9yZSBkdXBsaWNhdGVzLlxuICAgIGlmIChoYW5kbGVkVG9vbFVzZUlkcy5oYXModG9vbFVzZUlEKSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2U6IHNraXBwaW5nIGR1cGxpY2F0ZSBvcnBoYW5lZCBwZXJtaXNzaW9uIGZvciB0b29sVXNlSUQ9JHt0b29sVXNlSUR9IChhbHJlYWR5IGhhbmRsZWQpYCxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGFzc2lzdGFudE1lc3NhZ2UgPSBhd2FpdCBmaW5kVW5yZXNvbHZlZFRvb2xVc2UodG9vbFVzZUlEKVxuICAgIGlmICghYXNzaXN0YW50TWVzc2FnZSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2U6IG5vIHVucmVzb2x2ZWQgdG9vbF91c2UgZm91bmQgZm9yIHRvb2xVc2VJRD0ke3Rvb2xVc2VJRH0gKGFscmVhZHkgcmVzb2x2ZWQgaW4gdHJhbnNjcmlwdClgLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaGFuZGxlZFRvb2xVc2VJZHMuYWRkKHRvb2xVc2VJRClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2U6IGVucXVldWluZyBvcnBoYW5lZCBwZXJtaXNzaW9uIGZvciB0b29sVXNlSUQ9JHt0b29sVXNlSUR9IG1lc3NhZ2VJRD0ke2Fzc2lzdGFudE1lc3NhZ2UubWVzc2FnZS5pZH1gLFxuICAgIClcbiAgICBlbnF1ZXVlKHtcbiAgICAgIG1vZGU6ICdvcnBoYW5lZC1wZXJtaXNzaW9uJyBhcyBjb25zdCxcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIG9ycGhhbmVkUGVybWlzc2lvbjoge1xuICAgICAgICBwZXJtaXNzaW9uUmVzdWx0LFxuICAgICAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgb25FbnF1ZXVlZD8uKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljTWNwU3RhdGUgPSB7XG4gIGNsaWVudHM6IE1DUFNlcnZlckNvbm5lY3Rpb25bXVxuICB0b29sczogVG9vbHNcbiAgY29uZmlnczogUmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPlxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgcHJvY2VzcyB0cmFuc3BvcnQgY29uZmlnIHRvIGEgc2NvcGVkIGNvbmZpZy5cbiAqIFRoZSB0eXBlcyBhcmUgc3RydWN0dXJhbGx5IGNvbXBhdGlibGUsIHNvIHdlIGp1c3QgYWRkIHRoZSBzY29wZS5cbiAqL1xuZnVuY3Rpb24gdG9TY29wZWRDb25maWcoXG4gIGNvbmZpZzogTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydCxcbik6IFNjb3BlZE1jcFNlcnZlckNvbmZpZyB7XG4gIC8vIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQgaXMgYSBzdWJzZXQgb2YgTWNwU2VydmVyQ29uZmlnXG4gIC8vIChpdCBleGNsdWRlcyBJREUtc3BlY2lmaWMgdHlwZXMgbGlrZSBzc2UtaWRlIGFuZCB3cy1pZGUpXG4gIC8vIEFkZGluZyBzY29wZSBtYWtlcyBpdCBhIHZhbGlkIFNjb3BlZE1jcFNlcnZlckNvbmZpZ1xuICByZXR1cm4geyAuLi5jb25maWcsIHNjb3BlOiAnZHluYW1pYycgfSBhcyBTY29wZWRNY3BTZXJ2ZXJDb25maWdcbn1cblxuLyoqXG4gKiBTdGF0ZSBmb3IgU0RLIE1DUCBzZXJ2ZXJzIHRoYXQgcnVuIGluIHRoZSBTREsgcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IHR5cGUgU2RrTWNwU3RhdGUgPSB7XG4gIGNvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIE1jcFNka1NlcnZlckNvbmZpZz5cbiAgY2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdXG4gIHRvb2xzOiBUb29sc1xufVxuXG4vKipcbiAqIFJlc3VsdCBvZiBoYW5kbGVNY3BTZXRTZXJ2ZXJzIC0gY29udGFpbnMgbmV3IHN0YXRlIGFuZCByZXNwb25zZSBkYXRhLlxuICovXG5leHBvcnQgdHlwZSBNY3BTZXRTZXJ2ZXJzUmVzdWx0ID0ge1xuICByZXNwb25zZTogU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXNwb25zZVxuICBuZXdTZGtTdGF0ZTogU2RrTWNwU3RhdGVcbiAgbmV3RHluYW1pY1N0YXRlOiBEeW5hbWljTWNwU3RhdGVcbiAgc2RrU2VydmVyc0NoYW5nZWQ6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIG1jcF9zZXRfc2VydmVycyByZXF1ZXN0cyBieSBwcm9jZXNzaW5nIGJvdGggU0RLIGFuZCBwcm9jZXNzLWJhc2VkIHNlcnZlcnMuXG4gKiBTREsgc2VydmVycyBydW4gaW4gdGhlIFNESyBwcm9jZXNzOyBwcm9jZXNzLWJhc2VkIHNlcnZlcnMgYXJlIHNwYXduZWQgYnkgdGhlIENMSS5cbiAqXG4gKiBBcHBsaWVzIGVudGVycHJpc2UgYWxsb3dlZE1jcFNlcnZlcnMvZGVuaWVkTWNwU2VydmVycyBwb2xpY3kgXHUyMDE0IHNhbWUgZmlsdGVyIGFzXG4gKiAtLW1jcC1jb25maWcgKHNlZSBmaWx0ZXJNY3BTZXJ2ZXJzQnlQb2xpY3kgY2FsbCBpbiBtYWluLnRzeCkuIFdpdGhvdXQgdGhpcyxcbiAqIFNESyBWMiBRdWVyeS5zZXRNY3BTZXJ2ZXJzKCkgd2FzIGEgc2Vjb25kIHBvbGljeSBieXBhc3MgdmVjdG9yLiBCbG9ja2VkIHNlcnZlcnNcbiAqIGFyZSByZXBvcnRlZCBpbiByZXNwb25zZS5lcnJvcnMgc28gdGhlIFNESyBjb25zdW1lciBrbm93cyB3aHkgdGhleSB3ZXJlbid0IGFkZGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWNwU2V0U2VydmVycyhcbiAgc2VydmVyczogUmVjb3JkPHN0cmluZywgTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydD4sXG4gIHNka1N0YXRlOiBTZGtNY3BTdGF0ZSxcbiAgZHluYW1pY1N0YXRlOiBEeW5hbWljTWNwU3RhdGUsXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbik6IFByb21pc2U8TWNwU2V0U2VydmVyc1Jlc3VsdD4ge1xuICAvLyBFbmZvcmNlIGVudGVycHJpc2UgTUNQIHBvbGljeSBvbiBwcm9jZXNzLWJhc2VkIHNlcnZlcnMgKHN0ZGlvL2h0dHAvc3NlKS5cbiAgLy8gTWlycm9ycyB0aGUgLS1tY3AtY29uZmlnIGZpbHRlciBpbiBtYWluLnRzeCBcdTIwMTQgYm90aCB1c2VyLWNvbnRyb2xsZWQgaW5qZWN0aW9uXG4gIC8vIHBhdGhzIG11c3QgaGF2ZSB0aGUgc2FtZSBnYXRlLiB0eXBlOidzZGsnIHNlcnZlcnMgYXJlIGV4ZW1wdCAoU0RLLW1hbmFnZWQsXG4gIC8vIENMSSBuZXZlciBzcGF3bnMvY29ubmVjdHMgZm9yIHRoZW0gXHUyMDE0IHNlZSBmaWx0ZXJNY3BTZXJ2ZXJzQnlQb2xpY3kganNkb2MpLlxuICAvLyBCbG9ja2VkIHNlcnZlcnMgZ28gaW50byByZXNwb25zZS5lcnJvcnMgc28gdGhlIFNESyBjYWxsZXIgc2VlcyB3aHkuXG4gIGNvbnN0IHsgYWxsb3dlZDogYWxsb3dlZFNlcnZlcnMsIGJsb2NrZWQgfSA9IGZpbHRlck1jcFNlcnZlcnNCeVBvbGljeShzZXJ2ZXJzKVxuICBjb25zdCBwb2xpY3lFcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgYmxvY2tlZCkge1xuICAgIHBvbGljeUVycm9yc1tuYW1lXSA9XG4gICAgICAnQmxvY2tlZCBieSBlbnRlcnByaXNlIHBvbGljeSAoYWxsb3dlZE1jcFNlcnZlcnMvZGVuaWVkTWNwU2VydmVycyknXG4gIH1cblxuICAvLyBTZXBhcmF0ZSBTREsgc2VydmVycyBmcm9tIHByb2Nlc3MtYmFzZWQgc2VydmVyc1xuICBjb25zdCBzZGtTZXJ2ZXJzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZGtTZXJ2ZXJDb25maWc+ID0ge31cbiAgY29uc3QgcHJvY2Vzc1NlcnZlcnM6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQ+ID0ge31cblxuICBmb3IgKGNvbnN0IFtuYW1lLCBjb25maWddIG9mIE9iamVjdC5lbnRyaWVzKGFsbG93ZWRTZXJ2ZXJzKSkge1xuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3NkaycpIHtcbiAgICAgIHNka1NlcnZlcnNbbmFtZV0gPSBjb25maWdcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc1NlcnZlcnNbbmFtZV0gPSBjb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgU0RLIHNlcnZlcnNcbiAgY29uc3QgY3VycmVudFNka05hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhzZGtTdGF0ZS5jb25maWdzKSlcbiAgY29uc3QgbmV3U2RrTmFtZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHNka1NlcnZlcnMpKVxuICBjb25zdCBzZGtBZGRlZDogc3RyaW5nW10gPSBbXVxuICBjb25zdCBzZGtSZW1vdmVkOiBzdHJpbmdbXSA9IFtdXG5cbiAgY29uc3QgbmV3U2RrQ29uZmlncyA9IHsgLi4uc2RrU3RhdGUuY29uZmlncyB9XG4gIGxldCBuZXdTZGtDbGllbnRzID0gWy4uLnNka1N0YXRlLmNsaWVudHNdXG4gIGxldCBuZXdTZGtUb29scyA9IFsuLi5zZGtTdGF0ZS50b29sc11cblxuICAvLyBSZW1vdmUgU0RLIHNlcnZlcnMgbm8gbG9uZ2VyIGluIGRlc2lyZWQgc3RhdGVcbiAgZm9yIChjb25zdCBuYW1lIG9mIGN1cnJlbnRTZGtOYW1lcykge1xuICAgIGlmICghbmV3U2RrTmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXdTZGtDbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpXG4gICAgICBpZiAoY2xpZW50ICYmIGNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICBhd2FpdCBjbGllbnQuY2xlYW51cCgpXG4gICAgICB9XG4gICAgICBuZXdTZGtDbGllbnRzID0gbmV3U2RrQ2xpZW50cy5maWx0ZXIoYyA9PiBjLm5hbWUgIT09IG5hbWUpXG4gICAgICBjb25zdCBwcmVmaXggPSBgbWNwX18ke25hbWV9X19gXG4gICAgICBuZXdTZGtUb29scyA9IG5ld1Nka1Rvb2xzLmZpbHRlcih0ID0+ICF0Lm5hbWUuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgZGVsZXRlIG5ld1Nka0NvbmZpZ3NbbmFtZV1cbiAgICAgIHNka1JlbW92ZWQucHVzaChuYW1lKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBuZXcgU0RLIHNlcnZlcnMgYXMgcGVuZGluZyAtIHRoZXknbGwgYmUgdXBncmFkZWQgdG8gY29ubmVjdGVkXG4gIC8vIHdoZW4gdXBkYXRlU2RrTWNwKCkgcnVucyBvbiB0aGUgbmV4dCBxdWVyeVxuICBmb3IgKGNvbnN0IFtuYW1lLCBjb25maWddIG9mIE9iamVjdC5lbnRyaWVzKHNka1NlcnZlcnMpKSB7XG4gICAgaWYgKCFjdXJyZW50U2RrTmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICBuZXdTZGtDb25maWdzW25hbWVdID0gY29uZmlnXG4gICAgICBjb25zdCBwZW5kaW5nQ2xpZW50OiBNQ1BTZXJ2ZXJDb25uZWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAncGVuZGluZycsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvbmZpZzogeyAuLi5jb25maWcsIHNjb3BlOiAnZHluYW1pYycgYXMgY29uc3QgfSxcbiAgICAgIH1cbiAgICAgIG5ld1Nka0NsaWVudHMgPSBbLi4ubmV3U2RrQ2xpZW50cywgcGVuZGluZ0NsaWVudF1cbiAgICAgIHNka0FkZGVkLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgcHJvY2Vzcy1iYXNlZCBzZXJ2ZXJzXG4gIGNvbnN0IHByb2Nlc3NSZXN1bHQgPSBhd2FpdCByZWNvbmNpbGVNY3BTZXJ2ZXJzKFxuICAgIHByb2Nlc3NTZXJ2ZXJzLFxuICAgIGR5bmFtaWNTdGF0ZSxcbiAgICBzZXRBcHBTdGF0ZSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGFkZGVkOiBbLi4uc2RrQWRkZWQsIC4uLnByb2Nlc3NSZXN1bHQucmVzcG9uc2UuYWRkZWRdLFxuICAgICAgcmVtb3ZlZDogWy4uLnNka1JlbW92ZWQsIC4uLnByb2Nlc3NSZXN1bHQucmVzcG9uc2UucmVtb3ZlZF0sXG4gICAgICBlcnJvcnM6IHsgLi4ucG9saWN5RXJyb3JzLCAuLi5wcm9jZXNzUmVzdWx0LnJlc3BvbnNlLmVycm9ycyB9LFxuICAgIH0sXG4gICAgbmV3U2RrU3RhdGU6IHtcbiAgICAgIGNvbmZpZ3M6IG5ld1Nka0NvbmZpZ3MsXG4gICAgICBjbGllbnRzOiBuZXdTZGtDbGllbnRzLFxuICAgICAgdG9vbHM6IG5ld1Nka1Rvb2xzLFxuICAgIH0sXG4gICAgbmV3RHluYW1pY1N0YXRlOiBwcm9jZXNzUmVzdWx0Lm5ld1N0YXRlLFxuICAgIHNka1NlcnZlcnNDaGFuZ2VkOiBzZGtBZGRlZC5sZW5ndGggPiAwIHx8IHNka1JlbW92ZWQubGVuZ3RoID4gMCxcbiAgfVxufVxuXG4vKipcbiAqIFJlY29uY2lsZXMgdGhlIGN1cnJlbnQgc2V0IG9mIGR5bmFtaWMgTUNQIHNlcnZlcnMgd2l0aCBhIG5ldyBkZXNpcmVkIHN0YXRlLlxuICogSGFuZGxlcyBhZGRpdGlvbnMsIHJlbW92YWxzLCBhbmQgY29uZmlnIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvbmNpbGVNY3BTZXJ2ZXJzKFxuICBkZXNpcmVkQ29uZmlnczogUmVjb3JkPHN0cmluZywgTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydD4sXG4gIGN1cnJlbnRTdGF0ZTogRHluYW1pY01jcFN0YXRlLFxuICBzZXRBcHBTdGF0ZTogKGY6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWQsXG4pOiBQcm9taXNlPHtcbiAgcmVzcG9uc2U6IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VcbiAgbmV3U3RhdGU6IER5bmFtaWNNY3BTdGF0ZVxufT4ge1xuICBjb25zdCBjdXJyZW50TmFtZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGN1cnJlbnRTdGF0ZS5jb25maWdzKSlcbiAgY29uc3QgZGVzaXJlZE5hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhkZXNpcmVkQ29uZmlncykpXG5cbiAgY29uc3QgdG9SZW1vdmUgPSBbLi4uY3VycmVudE5hbWVzXS5maWx0ZXIobiA9PiAhZGVzaXJlZE5hbWVzLmhhcyhuKSlcbiAgY29uc3QgdG9BZGQgPSBbLi4uZGVzaXJlZE5hbWVzXS5maWx0ZXIobiA9PiAhY3VycmVudE5hbWVzLmhhcyhuKSlcblxuICAvLyBDaGVjayBmb3IgY29uZmlnIGNoYW5nZXMgKHNhbWUgbmFtZSwgZGlmZmVyZW50IGNvbmZpZylcbiAgY29uc3QgdG9DaGVjayA9IFsuLi5jdXJyZW50TmFtZXNdLmZpbHRlcihuID0+IGRlc2lyZWROYW1lcy5oYXMobikpXG4gIGNvbnN0IHRvUmVwbGFjZSA9IHRvQ2hlY2suZmlsdGVyKG5hbWUgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50U3RhdGUuY29uZmlnc1tuYW1lXVxuICAgIGNvbnN0IGRlc2lyZWRDb25maWdSYXcgPSBkZXNpcmVkQ29uZmlnc1tuYW1lXVxuICAgIGlmICghY3VycmVudENvbmZpZyB8fCAhZGVzaXJlZENvbmZpZ1JhdykgcmV0dXJuIHRydWVcbiAgICBjb25zdCBkZXNpcmVkQ29uZmlnID0gdG9TY29wZWRDb25maWcoZGVzaXJlZENvbmZpZ1JhdylcbiAgICByZXR1cm4gIWFyZU1jcENvbmZpZ3NFcXVhbChjdXJyZW50Q29uZmlnLCBkZXNpcmVkQ29uZmlnKVxuICB9KVxuXG4gIGNvbnN0IHJlbW92ZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgYWRkZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cblxuICBsZXQgbmV3Q2xpZW50cyA9IFsuLi5jdXJyZW50U3RhdGUuY2xpZW50c11cbiAgbGV0IG5ld1Rvb2xzID0gWy4uLmN1cnJlbnRTdGF0ZS50b29sc11cblxuICAvLyBSZW1vdmUgb2xkIHNlcnZlcnMgKGluY2x1ZGluZyBvbmVzIGJlaW5nIHJlcGxhY2VkKVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgWy4uLnRvUmVtb3ZlLCAuLi50b1JlcGxhY2VdKSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3Q2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBuYW1lKVxuICAgIGNvbnN0IGNvbmZpZyA9IGN1cnJlbnRTdGF0ZS5jb25maWdzW25hbWVdXG4gICAgaWYgKGNsaWVudCAmJiBjb25maWcpIHtcbiAgICAgIGlmIChjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBjbGllbnQuY2xlYW51cCgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDbGVhciB0aGUgbWVtb2l6YXRpb24gY2FjaGVcbiAgICAgIGF3YWl0IGNsZWFyU2VydmVyQ2FjaGUobmFtZSwgY29uZmlnKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0b29scyBmcm9tIHRoaXMgc2VydmVyXG4gICAgY29uc3QgcHJlZml4ID0gYG1jcF9fJHtuYW1lfV9fYFxuICAgIG5ld1Rvb2xzID0gbmV3VG9vbHMuZmlsdGVyKHQgPT4gIXQubmFtZS5zdGFydHNXaXRoKHByZWZpeCkpXG5cbiAgICAvLyBSZW1vdmUgZnJvbSBjbGllbnRzIGxpc3RcbiAgICBuZXdDbGllbnRzID0gbmV3Q2xpZW50cy5maWx0ZXIoYyA9PiBjLm5hbWUgIT09IG5hbWUpXG5cbiAgICAvLyBUcmFjayByZW1vdmFsIChvbmx5IGZvciBhY3R1YWxseSByZW1vdmVkLCBub3QgcmVwbGFjZWQpXG4gICAgaWYgKHRvUmVtb3ZlLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICByZW1vdmVkLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgbmV3IHNlcnZlcnMgKGluY2x1ZGluZyByZXBsYWNlbWVudHMpXG4gIGZvciAoY29uc3QgbmFtZSBvZiBbLi4udG9BZGQsIC4uLnRvUmVwbGFjZV0pIHtcbiAgICBjb25zdCBjb25maWcgPSBkZXNpcmVkQ29uZmlnc1tuYW1lXVxuICAgIGlmICghY29uZmlnKSBjb250aW51ZVxuICAgIGNvbnN0IHNjb3BlZENvbmZpZyA9IHRvU2NvcGVkQ29uZmlnKGNvbmZpZylcblxuICAgIC8vIFNESyBzZXJ2ZXJzIGFyZSBtYW5hZ2VkIGJ5IHRoZSBTREsgcHJvY2Vzcywgbm90IHRoZSBDTEkuXG4gICAgLy8gSnVzdCB0cmFjayB0aGVtIHdpdGhvdXQgdHJ5aW5nIHRvIGNvbm5lY3QuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnc2RrJykge1xuICAgICAgYWRkZWQucHVzaChuYW1lKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvU2VydmVyKG5hbWUsIHNjb3BlZENvbmZpZylcbiAgICAgIG5ld0NsaWVudHMucHVzaChjbGllbnQpXG5cbiAgICAgIGlmIChjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgY29uc3Qgc2VydmVyVG9vbHMgPSBhd2FpdCBmZXRjaFRvb2xzRm9yQ2xpZW50KGNsaWVudClcbiAgICAgICAgbmV3VG9vbHMucHVzaCguLi5zZXJ2ZXJUb29scylcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50LnR5cGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgIGVycm9yc1tuYW1lXSA9IGNsaWVudC5lcnJvciB8fCAnQ29ubmVjdGlvbiBmYWlsZWQnXG4gICAgICB9XG5cbiAgICAgIGFkZGVkLnB1c2gobmFtZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnIgPSB0b0Vycm9yKGUpXG4gICAgICBlcnJvcnNbbmFtZV0gPSBlcnIubWVzc2FnZVxuICAgICAgbG9nRXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJ1aWxkIG5ldyBjb25maWdzXG4gIGNvbnN0IG5ld0NvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz4gPSB7fVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgZGVzaXJlZE5hbWVzKSB7XG4gICAgY29uc3QgY29uZmlnID0gZGVzaXJlZENvbmZpZ3NbbmFtZV1cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBuZXdDb25maWdzW25hbWVdID0gdG9TY29wZWRDb25maWcoY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlOiBEeW5hbWljTWNwU3RhdGUgPSB7XG4gICAgY2xpZW50czogbmV3Q2xpZW50cyxcbiAgICB0b29sczogbmV3VG9vbHMsXG4gICAgY29uZmlnczogbmV3Q29uZmlncyxcbiAgfVxuXG4gIC8vIFVwZGF0ZSBBcHBTdGF0ZSB3aXRoIHRoZSBuZXcgdG9vbHNcbiAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgLy8gR2V0IGFsbCBkeW5hbWljIHNlcnZlciBuYW1lcyAoY3VycmVudCArIG5ldylcbiAgICBjb25zdCBhbGxEeW5hbWljU2VydmVyTmFtZXMgPSBuZXcgU2V0KFtcbiAgICAgIC4uLk9iamVjdC5rZXlzKGN1cnJlbnRTdGF0ZS5jb25maWdzKSxcbiAgICAgIC4uLk9iamVjdC5rZXlzKG5ld0NvbmZpZ3MpLFxuICAgIF0pXG5cbiAgICAvLyBSZW1vdmUgb2xkIGR5bmFtaWMgdG9vbHNcbiAgICBjb25zdCBub25EeW5hbWljVG9vbHMgPSBwcmV2Lm1jcC50b29scy5maWx0ZXIodCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IHNlcnZlck5hbWUgb2YgYWxsRHluYW1pY1NlcnZlck5hbWVzKSB7XG4gICAgICAgIGlmICh0Lm5hbWUuc3RhcnRzV2l0aChgbWNwX18ke3NlcnZlck5hbWV9X19gKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgb2xkIGR5bmFtaWMgY2xpZW50c1xuICAgIGNvbnN0IG5vbkR5bmFtaWNDbGllbnRzID0gcHJldi5tY3AuY2xpZW50cy5maWx0ZXIoYyA9PiB7XG4gICAgICByZXR1cm4gIWFsbER5bmFtaWNTZXJ2ZXJOYW1lcy5oYXMoYy5uYW1lKVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJldixcbiAgICAgIG1jcDoge1xuICAgICAgICAuLi5wcmV2Lm1jcCxcbiAgICAgICAgdG9vbHM6IFsuLi5ub25EeW5hbWljVG9vbHMsIC4uLm5ld1Rvb2xzXSxcbiAgICAgICAgY2xpZW50czogWy4uLm5vbkR5bmFtaWNDbGllbnRzLCAuLi5uZXdDbGllbnRzXSxcbiAgICAgIH0sXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcmVzcG9uc2U6IHsgYWRkZWQsIHJlbW92ZWQsIGVycm9ycyB9LFxuICAgIG5ld1N0YXRlLFxuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBTdGRvdXRNZXNzYWdlIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgeyBQYXNzVGhyb3VnaCB9IGZyb20gJ3N0cmVhbSdcbmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldFBvbGxJbnRlcnZhbENvbmZpZyB9IGZyb20gJy4uL2JyaWRnZS9wb2xsQ29uZmlnLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnLi4vdXRpbHMvY2xlYW51cFJlZ2lzdHJ5LmpzJ1xuaW1wb3J0IHsgc2V0Q29tbWFuZExpZmVjeWNsZUxpc3RlbmVyIH0gZnJvbSAnLi4vdXRpbHMvY29tbWFuZExpZmVjeWNsZS5qcydcbmltcG9ydCB7IGlzRGVidWdNb2RlLCBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnLi4vdXRpbHMvZ3JhY2VmdWxTaHV0ZG93bi5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgd3JpdGVUb1N0ZG91dCB9IGZyb20gJy4uL3V0aWxzL3Byb2Nlc3MuanMnXG5pbXBvcnQgeyBnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbiB9IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25JbmdyZXNzQXV0aC5qcydcbmltcG9ydCB7XG4gIHNldFNlc3Npb25NZXRhZGF0YUNoYW5nZWRMaXN0ZW5lcixcbiAgc2V0U2Vzc2lvblN0YXRlQ2hhbmdlZExpc3RlbmVyLFxufSBmcm9tICcuLi91dGlscy9zZXNzaW9uU3RhdGUuanMnXG5pbXBvcnQge1xuICBzZXRJbnRlcm5hbEV2ZW50UmVhZGVyLFxuICBzZXRJbnRlcm5hbEV2ZW50V3JpdGVyLFxufSBmcm9tICcuLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IG5kanNvblNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL25kanNvblNhZmVTdHJpbmdpZnkuanMnXG5pbXBvcnQgeyBTdHJ1Y3R1cmVkSU8gfSBmcm9tICcuL3N0cnVjdHVyZWRJTy5qcydcbmltcG9ydCB7IENDUkNsaWVudCwgQ0NSSW5pdEVycm9yIH0gZnJvbSAnLi90cmFuc3BvcnRzL2NjckNsaWVudC5qcydcbmltcG9ydCB7IFNTRVRyYW5zcG9ydCB9IGZyb20gJy4vdHJhbnNwb3J0cy9TU0VUcmFuc3BvcnQuanMnXG5pbXBvcnQgdHlwZSB7IFRyYW5zcG9ydCB9IGZyb20gJy4vdHJhbnNwb3J0cy9UcmFuc3BvcnQuanMnXG5pbXBvcnQgeyBnZXRUcmFuc3BvcnRGb3JVcmwgfSBmcm9tICcuL3RyYW5zcG9ydHMvdHJhbnNwb3J0VXRpbHMuanMnXG5cbi8qKlxuICogQmlkaXJlY3Rpb25hbCBzdHJlYW1pbmcgZm9yIFNESyBtb2RlIHdpdGggc2Vzc2lvbiB0cmFja2luZ1xuICogU3VwcG9ydHMgV2ViU29ja2V0IHRyYW5zcG9ydFxuICovXG5leHBvcnQgY2xhc3MgUmVtb3RlSU8gZXh0ZW5kcyBTdHJ1Y3R1cmVkSU8ge1xuICBwcml2YXRlIHVybDogVVJMXG4gIHByaXZhdGUgdHJhbnNwb3J0OiBUcmFuc3BvcnRcbiAgcHJpdmF0ZSBpbnB1dFN0cmVhbTogUGFzc1Rocm91Z2hcbiAgcHJpdmF0ZSByZWFkb25seSBpc0JyaWRnZTogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgcmVhZG9ubHkgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgY2NyQ2xpZW50OiBDQ1JDbGllbnQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGtlZXBBbGl2ZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0cmVhbVVybDogc3RyaW5nLFxuICAgIGluaXRpYWxQcm9tcHQ/OiBBc3luY0l0ZXJhYmxlPHN0cmluZz4sXG4gICAgcmVwbGF5VXNlck1lc3NhZ2VzPzogYm9vbGVhbixcbiAgKSB7XG4gICAgY29uc3QgaW5wdXRTdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goeyBlbmNvZGluZzogJ3V0ZjgnIH0pXG4gICAgc3VwZXIoaW5wdXRTdHJlYW0sIHJlcGxheVVzZXJNZXNzYWdlcylcbiAgICB0aGlzLmlucHV0U3RyZWFtID0gaW5wdXRTdHJlYW1cbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoc3RyZWFtVXJsKVxuXG4gICAgLy8gUHJlcGFyZSBoZWFkZXJzIHdpdGggc2Vzc2lvbiB0b2tlbiBpZiBhdmFpbGFibGVcbiAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICBjb25zdCBzZXNzaW9uVG9rZW4gPSBnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbigpXG4gICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Nlc3Npb25Ub2tlbn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3JlbW90ZS1pb10gTm8gc2Vzc2lvbiBpbmdyZXNzIHRva2VuIGF2YWlsYWJsZScsIHtcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEFkZCBlbnZpcm9ubWVudCBydW5uZXIgdmVyc2lvbiBpZiBhdmFpbGFibGUgKHNldCBieSBFbnZpcm9ubWVudCBNYW5hZ2VyKVxuICAgIGNvbnN0IGVyVmVyc2lvbiA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVklST05NRU5UX1JVTk5FUl9WRVJTSU9OXG4gICAgaWYgKGVyVmVyc2lvbikge1xuICAgICAgaGVhZGVyc1sneC1lbnZpcm9ubWVudC1ydW5uZXItdmVyc2lvbiddID0gZXJWZXJzaW9uXG4gICAgfVxuXG4gICAgLy8gUHJvdmlkZSBhIGNhbGxiYWNrIHRoYXQgcmUtcmVhZHMgdGhlIHNlc3Npb24gdG9rZW4gZHluYW1pY2FsbHkuXG4gICAgLy8gV2hlbiB0aGUgcGFyZW50IHByb2Nlc3MgcmVmcmVzaGVzIHRoZSB0b2tlbiAodmlhIHRva2VuIGZpbGUgb3IgZW52IHZhciksXG4gICAgLy8gdGhlIHRyYW5zcG9ydCBjYW4gcGljayBpdCB1cCBvbiByZWNvbm5lY3Rpb24uXG4gICAgY29uc3QgcmVmcmVzaEhlYWRlcnMgPSAoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gICAgICBjb25zdCBoOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICAgIGNvbnN0IGZyZXNoVG9rZW4gPSBnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbigpXG4gICAgICBpZiAoZnJlc2hUb2tlbikge1xuICAgICAgICBoWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7ZnJlc2hUb2tlbn1gXG4gICAgICB9XG4gICAgICBjb25zdCBmcmVzaEVyVmVyc2lvbiA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVklST05NRU5UX1JVTk5FUl9WRVJTSU9OXG4gICAgICBpZiAoZnJlc2hFclZlcnNpb24pIHtcbiAgICAgICAgaFsneC1lbnZpcm9ubWVudC1ydW5uZXItdmVyc2lvbiddID0gZnJlc2hFclZlcnNpb25cbiAgICAgIH1cbiAgICAgIHJldHVybiBoXG4gICAgfVxuXG4gICAgLy8gR2V0IGFwcHJvcHJpYXRlIHRyYW5zcG9ydCBiYXNlZCBvbiBVUkwgcHJvdG9jb2xcbiAgICB0aGlzLnRyYW5zcG9ydCA9IGdldFRyYW5zcG9ydEZvclVybChcbiAgICAgIHRoaXMudXJsLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGdldFNlc3Npb25JZCgpLFxuICAgICAgcmVmcmVzaEhlYWRlcnMsXG4gICAgKVxuXG4gICAgLy8gU2V0IHVwIGRhdGEgY2FsbGJhY2tcbiAgICB0aGlzLmlzQnJpZGdlID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5WSVJPTk1FTlRfS0lORCA9PT0gJ2JyaWRnZSdcbiAgICB0aGlzLmlzRGVidWcgPSBpc0RlYnVnTW9kZSgpXG4gICAgdGhpcy50cmFuc3BvcnQuc2V0T25EYXRhKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRTdHJlYW0ud3JpdGUoZGF0YSlcbiAgICAgIGlmICh0aGlzLmlzQnJpZGdlICYmIHRoaXMuaXNEZWJ1Zykge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KGRhdGEuZW5kc1dpdGgoJ1xcbicpID8gZGF0YSA6IGRhdGEgKyAnXFxuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gU2V0IHVwIGNsb3NlIGNhbGxiYWNrIHRvIGhhbmRsZSBjb25uZWN0aW9uIGZhaWx1cmVzXG4gICAgdGhpcy50cmFuc3BvcnQuc2V0T25DbG9zZSgoKSA9PiB7XG4gICAgICAvLyBFbmQgdGhlIGlucHV0IHN0cmVhbSB0byB0cmlnZ2VyIGdyYWNlZnVsIHNodXRkb3duXG4gICAgICB0aGlzLmlucHV0U3RyZWFtLmVuZCgpXG4gICAgfSlcblxuICAgIC8vIEluaXRpYWxpemUgQ0NSIHYyIGNsaWVudCAoaGVhcnRiZWF0cywgZXBvY2gsIHN0YXRlIHJlcG9ydGluZywgZXZlbnQgd3JpdGVzKS5cbiAgICAvLyBUaGUgQ0NSQ2xpZW50IGNvbnN0cnVjdG9yIHdpcmVzIHRoZSBTU0UgcmVjZWl2ZWQtYWNrIGhhbmRsZXJcbiAgICAvLyBzeW5jaHJvbm91c2x5LCBzbyBuZXcgQ0NSQ2xpZW50KCkgTVVTVCBydW4gYmVmb3JlIHRyYW5zcG9ydC5jb25uZWN0KCkgXHUyMDE0XG4gICAgLy8gb3RoZXJ3aXNlIGVhcmx5IFNTRSBmcmFtZXMgaGl0IGFuIHVud2lyZWQgb25FdmVudENhbGxiYWNrIGFuZCB0aGVpclxuICAgIC8vICdyZWNlaXZlZCcgZGVsaXZlcnkgYWNrcyBhcmUgc2lsZW50bHkgZHJvcHBlZC5cbiAgICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVVNFX0NDUl9WMikpIHtcbiAgICAgIC8vIENDUiB2MiBpcyBTU0UrUE9TVCBieSBkZWZpbml0aW9uLiBnZXRUcmFuc3BvcnRGb3JVcmwgcmV0dXJuc1xuICAgICAgLy8gU1NFVHJhbnNwb3J0IHVuZGVyIHRoZSBzYW1lIGVudiB2YXIsIGJ1dCB0aGUgdHdvIGNoZWNrcyBsaXZlIGluXG4gICAgICAvLyBkaWZmZXJlbnQgZmlsZXMgXHUyMDE0IGFzc2VydCB0aGUgaW52YXJpYW50IHNvIGEgZnV0dXJlIGRlY291cGxpbmdcbiAgICAgIC8vIGZhaWxzIGxvdWRseSBoZXJlIGluc3RlYWQgb2YgY29uZnVzaW5nbHkgaW5zaWRlIENDUkNsaWVudC5cbiAgICAgIGlmICghKHRoaXMudHJhbnNwb3J0IGluc3RhbmNlb2YgU1NFVHJhbnNwb3J0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0NDUiB2MiByZXF1aXJlcyBTU0VUcmFuc3BvcnQ7IGNoZWNrIGdldFRyYW5zcG9ydEZvclVybCcsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRoaXMuY2NyQ2xpZW50ID0gbmV3IENDUkNsaWVudCh0aGlzLnRyYW5zcG9ydCwgdGhpcy51cmwpXG4gICAgICBjb25zdCBpbml0ID0gdGhpcy5jY3JDbGllbnQuaW5pdGlhbGl6ZSgpXG4gICAgICB0aGlzLnJlc3RvcmVkV29ya2VyU3RhdGUgPSBpbml0LmNhdGNoKCgpID0+IG51bGwpXG4gICAgICBpbml0LmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd29ya2VyX2xpZmVjeWNsZV9pbml0X2ZhaWxlZCcsIHtcbiAgICAgICAgICByZWFzb246IGVycm9yIGluc3RhbmNlb2YgQ0NSSW5pdEVycm9yID8gZXJyb3IucmVhc29uIDogJ3Vua25vd24nLFxuICAgICAgICB9KVxuICAgICAgICBsb2dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoYENDUkNsaWVudCBpbml0aWFsaXphdGlvbiBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gKSxcbiAgICAgICAgKVxuICAgICAgICB2b2lkIGdyYWNlZnVsU2h1dGRvd24oMSwgJ290aGVyJylcbiAgICAgIH0pXG4gICAgICByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4gdGhpcy5jY3JDbGllbnQ/LmNsb3NlKCkpXG5cbiAgICAgIC8vIFJlZ2lzdGVyIGludGVybmFsIGV2ZW50IHdyaXRlciBmb3IgdHJhbnNjcmlwdCBwZXJzaXN0ZW5jZS5cbiAgICAgIC8vIFdoZW4gc2V0LCBzZXNzaW9uU3RvcmFnZSB3cml0ZXMgdHJhbnNjcmlwdCBtZXNzYWdlcyBhcyBDQ1IgdjJcbiAgICAgIC8vIGludGVybmFsIGV2ZW50cyBpbnN0ZWFkIG9mIHYxIFNlc3Npb24gSW5ncmVzcy5cbiAgICAgIHNldEludGVybmFsRXZlbnRXcml0ZXIoKGV2ZW50VHlwZSwgcGF5bG9hZCwgb3B0aW9ucykgPT5cbiAgICAgICAgdGhpcy5jY3JDbGllbnQhLndyaXRlSW50ZXJuYWxFdmVudChldmVudFR5cGUsIHBheWxvYWQsIG9wdGlvbnMpLFxuICAgICAgKVxuXG4gICAgICAvLyBSZWdpc3RlciBpbnRlcm5hbCBldmVudCByZWFkZXJzIGZvciBzZXNzaW9uIHJlc3VtZS5cbiAgICAgIC8vIFdoZW4gc2V0LCBoeWRyYXRlRnJvbUNDUnYySW50ZXJuYWxFdmVudHMoKSBjYW4gZmV0Y2ggZm9yZWdyb3VuZFxuICAgICAgLy8gYW5kIHN1YmFnZW50IGludGVybmFsIGV2ZW50cyB0byByZWNvbnN0cnVjdCBjb252ZXJzYXRpb24gc3RhdGUuXG4gICAgICBzZXRJbnRlcm5hbEV2ZW50UmVhZGVyKFxuICAgICAgICAoKSA9PiB0aGlzLmNjckNsaWVudCEucmVhZEludGVybmFsRXZlbnRzKCksXG4gICAgICAgICgpID0+IHRoaXMuY2NyQ2xpZW50IS5yZWFkU3ViYWdlbnRJbnRlcm5hbEV2ZW50cygpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBMSUZFQ1lDTEVfVE9fREVMSVZFUlkgPSB7XG4gICAgICAgIHN0YXJ0ZWQ6ICdwcm9jZXNzaW5nJyxcbiAgICAgICAgY29tcGxldGVkOiAncHJvY2Vzc2VkJyxcbiAgICAgIH0gYXMgY29uc3RcbiAgICAgIHNldENvbW1hbmRMaWZlY3ljbGVMaXN0ZW5lcigodXVpZCwgc3RhdGUpID0+IHtcbiAgICAgICAgdGhpcy5jY3JDbGllbnQ/LnJlcG9ydERlbGl2ZXJ5KHV1aWQsIExJRkVDWUNMRV9UT19ERUxJVkVSWVtzdGF0ZV0pXG4gICAgICB9KVxuICAgICAgc2V0U2Vzc2lvblN0YXRlQ2hhbmdlZExpc3RlbmVyKChzdGF0ZSwgZGV0YWlscykgPT4ge1xuICAgICAgICB0aGlzLmNjckNsaWVudD8ucmVwb3J0U3RhdGUoc3RhdGUsIGRldGFpbHMpXG4gICAgICB9KVxuICAgICAgc2V0U2Vzc2lvbk1ldGFkYXRhQ2hhbmdlZExpc3RlbmVyKG1ldGFkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jY3JDbGllbnQ/LnJlcG9ydE1ldGFkYXRhKG1ldGFkYXRhKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTdGFydCBjb25uZWN0aW9uIG9ubHkgYWZ0ZXIgYWxsIGNhbGxiYWNrcyBhcmUgd2lyZWQgKHNldE9uRGF0YSBhYm92ZSxcbiAgICAvLyBzZXRPbkV2ZW50IGluc2lkZSBuZXcgQ0NSQ2xpZW50KCkgd2hlbiBDQ1IgdjIgaXMgZW5hYmxlZCkuXG4gICAgdm9pZCB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KClcblxuICAgIC8vIFB1c2ggYSBzaWxlbnQga2VlcF9hbGl2ZSBmcmFtZSBvbiBhIGZpeGVkIGludGVydmFsIHNvIHVwc3RyZWFtXG4gICAgLy8gcHJveGllcyBhbmQgdGhlIHNlc3Npb24taW5ncmVzcyBsYXllciBkb24ndCBHQyBhbiBvdGhlcndpc2UtaWRsZVxuICAgIC8vIHJlbW90ZSBjb250cm9sIHNlc3Npb24uIFRoZSBrZWVwX2FsaXZlIHR5cGUgaXMgZmlsdGVyZWQgYmVmb3JlXG4gICAgLy8gcmVhY2hpbmcgYW55IGNsaWVudCBVSSAoUXVlcnkudHMgZHJvcHMgaXQ7IHN0cnVjdHVyZWRJTy50cyBkcm9wcyBpdDtcbiAgICAvLyB3ZWIvaU9TL0FuZHJvaWQgbmV2ZXIgc2VlIGl0IGluIHRoZWlyIG1lc3NhZ2UgbG9vcCkuIEludGVydmFsIGNvbWVzXG4gICAgLy8gZnJvbSBHcm93dGhCb29rICh0ZW5ndV9icmlkZ2VfcG9sbF9pbnRlcnZhbF9jb25maWdcbiAgICAvLyBzZXNzaW9uX2tlZXBhbGl2ZV9pbnRlcnZhbF92Ml9tcywgZGVmYXVsdCAxMjBzKTsgMCA9IGRpc2FibGVkLlxuICAgIC8vIEJyaWRnZS1vbmx5OiBmaXhlcyBFbnZveSBpZGxlIHRpbWVvdXQgb24gYnJpZGdlLXRvcG9sb2d5IHNlc3Npb25zXG4gICAgLy8gKCMyMTkzMSkuIGJ5b2Mgd29ya2VycyByYW4gd2l0aG91dCB0aGlzIGJlZm9yZSAjMjE5MzEgYW5kIGRvIG5vdFxuICAgIC8vIG5lZWQgaXQgXHUyMDE0IGRpZmZlcmVudCBuZXR3b3JrIHBhdGguXG4gICAgY29uc3Qga2VlcEFsaXZlSW50ZXJ2YWxNcyA9XG4gICAgICBnZXRQb2xsSW50ZXJ2YWxDb25maWcoKS5zZXNzaW9uX2tlZXBhbGl2ZV9pbnRlcnZhbF92Ml9tc1xuICAgIGlmICh0aGlzLmlzQnJpZGdlICYmIGtlZXBBbGl2ZUludGVydmFsTXMgPiAwKSB7XG4gICAgICB0aGlzLmtlZXBBbGl2ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tyZW1vdGUtaW9dIGtlZXBfYWxpdmUgc2VudCcpXG4gICAgICAgIHZvaWQgdGhpcy53cml0ZSh7IHR5cGU6ICdrZWVwX2FsaXZlJyB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbcmVtb3RlLWlvXSBrZWVwX2FsaXZlIHdyaXRlIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0sIGtlZXBBbGl2ZUludGVydmFsTXMpXG4gICAgICB0aGlzLmtlZXBBbGl2ZVRpbWVyLnVucmVmPy4oKVxuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGZvciBncmFjZWZ1bCBzaHV0ZG93biBjbGVhbnVwXG4gICAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHRoaXMuY2xvc2UoKSlcblxuICAgIC8vIElmIGluaXRpYWwgcHJvbXB0IGlzIHByb3ZpZGVkLCBzZW5kIGl0IHRocm91Z2ggdGhlIGlucHV0IHN0cmVhbVxuICAgIGlmIChpbml0aWFsUHJvbXB0KSB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBpbml0aWFsIHByb21wdCB0byB0aGUgaW5wdXQgc3RyZWFtIGZvcm1hdC5cbiAgICAgIC8vIENodW5rcyBmcm9tIHN0ZGluIG1heSBhbHJlYWR5IGNvbnRhaW4gdHJhaWxpbmcgbmV3bGluZXMsIHNvIHN0cmlwXG4gICAgICAvLyB0aGVtIGJlZm9yZSBhcHBlbmRpbmcgb3VyIG93biB0byBhdm9pZCBkb3VibGUtbmV3bGluZSBpc3N1ZXMgdGhhdFxuICAgICAgLy8gY2F1c2Ugc3RydWN0dXJlZElPIHRvIHBhcnNlIGVtcHR5IGxpbmVzLiBTdHJpbmcoKSBoYW5kbGVzIGJvdGhcbiAgICAgIC8vIHN0cmluZyBjaHVua3MgYW5kIEJ1ZmZlciBvYmplY3RzIGZyb20gcHJvY2Vzcy5zdGRpbi5cbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuaW5wdXRTdHJlYW1cbiAgICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBpbml0aWFsUHJvbXB0KSB7XG4gICAgICAgICAgc3RyZWFtLndyaXRlKFN0cmluZyhjaHVuaykucmVwbGFjZSgvXFxuJC8sICcnKSArICdcXG4nKVxuICAgICAgICB9XG4gICAgICB9KSgpXG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgZmx1c2hJbnRlcm5hbEV2ZW50cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jY3JDbGllbnQ/LmZsdXNoSW50ZXJuYWxFdmVudHMoKSA/PyBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0IGludGVybmFsRXZlbnRzUGVuZGluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNjckNsaWVudD8uaW50ZXJuYWxFdmVudHNQZW5kaW5nID8/IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIG91dHB1dCB0byB0aGUgdHJhbnNwb3J0LlxuICAgKiBJbiBicmlkZ2UgbW9kZSwgY29udHJvbF9yZXF1ZXN0IG1lc3NhZ2VzIGFyZSBhbHdheXMgZWNob2VkIHRvIHN0ZG91dCBzbyB0aGVcbiAgICogYnJpZGdlIHBhcmVudCBjYW4gZGV0ZWN0IHBlcm1pc3Npb24gcmVxdWVzdHMuIE90aGVyIG1lc3NhZ2VzIGFyZSBlY2hvZWQgb25seVxuICAgKiBpbiBkZWJ1ZyBtb2RlLlxuICAgKi9cbiAgYXN5bmMgd3JpdGUobWVzc2FnZTogU3Rkb3V0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmNjckNsaWVudCkge1xuICAgICAgYXdhaXQgdGhpcy5jY3JDbGllbnQud3JpdGVFdmVudChtZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLnRyYW5zcG9ydC53cml0ZShtZXNzYWdlKVxuICAgIH1cbiAgICBpZiAodGhpcy5pc0JyaWRnZSkge1xuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NvbnRyb2xfcmVxdWVzdCcgfHwgdGhpcy5pc0RlYnVnKSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQobmRqc29uU2FmZVN0cmluZ2lmeShtZXNzYWdlKSArICdcXG4nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiB1cCBjb25uZWN0aW9ucyBncmFjZWZ1bGx5XG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5rZWVwQWxpdmVUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmtlZXBBbGl2ZVRpbWVyKVxuICAgICAgdGhpcy5rZWVwQWxpdmVUaW1lciA9IG51bGxcbiAgICB9XG4gICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKVxuICAgIHRoaXMuaW5wdXRTdHJlYW0uZW5kKClcbiAgfVxufVxuIiwgImltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBIeWJyaWRUcmFuc3BvcnQgfSBmcm9tICcuL0h5YnJpZFRyYW5zcG9ydC5qcydcbmltcG9ydCB7IFNTRVRyYW5zcG9ydCB9IGZyb20gJy4vU1NFVHJhbnNwb3J0LmpzJ1xuaW1wb3J0IHR5cGUgeyBUcmFuc3BvcnQgfSBmcm9tICcuL1RyYW5zcG9ydC5qcydcbmltcG9ydCB7IFdlYlNvY2tldFRyYW5zcG9ydCB9IGZyb20gJy4vV2ViU29ja2V0VHJhbnNwb3J0LmpzJ1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGFwcHJvcHJpYXRlIHRyYW5zcG9ydCBmb3IgYSBVUkwuXG4gKlxuICogVHJhbnNwb3J0IHNlbGVjdGlvbiBwcmlvcml0eTpcbiAqIDEuIFNTRVRyYW5zcG9ydCAoU1NFIHJlYWRzICsgUE9TVCB3cml0ZXMpIHdoZW4gQ0xBVURFX0NPREVfVVNFX0NDUl9WMiBpcyBzZXRcbiAqIDIuIEh5YnJpZFRyYW5zcG9ydCAoV1MgcmVhZHMgKyBQT1NUIHdyaXRlcykgd2hlbiBDTEFVREVfQ09ERV9QT1NUX0ZPUl9TRVNTSU9OX0lOR1JFU1NfVjIgaXMgc2V0XG4gKiAzLiBXZWJTb2NrZXRUcmFuc3BvcnQgKFdTIHJlYWRzICsgV1Mgd3JpdGVzKSBcdTIwMTQgZGVmYXVsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNwb3J0Rm9yVXJsKFxuICB1cmw6IFVSTCxcbiAgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9LFxuICBzZXNzaW9uSWQ/OiBzdHJpbmcsXG4gIHJlZnJlc2hIZWFkZXJzPzogKCkgPT4gUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbik6IFRyYW5zcG9ydCB7XG4gIGlmIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfQ0NSX1YyKSkge1xuICAgIC8vIHYyOiBTU0UgZm9yIHJlYWRzLCBIVFRQIFBPU1QgZm9yIHdyaXRlc1xuICAgIC8vIC0tc2RrLXVybCBpcyB0aGUgc2Vzc2lvbiBVUkwgKC4uLi9zZXNzaW9ucy97aWR9KTtcbiAgICAvLyBkZXJpdmUgdGhlIFNTRSBzdHJlYW0gVVJMIGJ5IGFwcGVuZGluZyAvd29ya2VyL2V2ZW50cy9zdHJlYW1cbiAgICBjb25zdCBzc2VVcmwgPSBuZXcgVVJMKHVybC5ocmVmKVxuICAgIGlmIChzc2VVcmwucHJvdG9jb2wgPT09ICd3c3M6Jykge1xuICAgICAgc3NlVXJsLnByb3RvY29sID0gJ2h0dHBzOidcbiAgICB9IGVsc2UgaWYgKHNzZVVybC5wcm90b2NvbCA9PT0gJ3dzOicpIHtcbiAgICAgIHNzZVVybC5wcm90b2NvbCA9ICdodHRwOidcbiAgICB9XG4gICAgc3NlVXJsLnBhdGhuYW1lID1cbiAgICAgIHNzZVVybC5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpICsgJy93b3JrZXIvZXZlbnRzL3N0cmVhbSdcbiAgICByZXR1cm4gbmV3IFNTRVRyYW5zcG9ydChzc2VVcmwsIGhlYWRlcnMsIHNlc3Npb25JZCwgcmVmcmVzaEhlYWRlcnMpXG4gIH1cblxuICBpZiAodXJsLnByb3RvY29sID09PSAnd3M6JyB8fCB1cmwucHJvdG9jb2wgPT09ICd3c3M6Jykge1xuICAgIGlmIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9QT1NUX0ZPUl9TRVNTSU9OX0lOR1JFU1NfVjIpKSB7XG4gICAgICByZXR1cm4gbmV3IEh5YnJpZFRyYW5zcG9ydCh1cmwsIGhlYWRlcnMsIHNlc3Npb25JZCwgcmVmcmVzaEhlYWRlcnMpXG4gICAgfVxuICAgIHJldHVybiBuZXcgV2ViU29ja2V0VHJhbnNwb3J0KHVybCwgaGVhZGVycywgc2Vzc2lvbklkLCByZWZyZXNoSGVhZGVycylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3RvY29sOiAke3VybC5wcm90b2NvbH1gKVxuICB9XG59XG4iLCAiLyoqXG4gKiBUcmFuc2Zvcm1zIFNESyBtZXNzYWdlcyBmb3Igc3RyZWFtbGluZWQgb3V0cHV0IG1vZGUuXG4gKlxuICogU3RyZWFtbGluZWQgbW9kZSBpcyBhIFwiZGlzdGlsbGF0aW9uLXJlc2lzdGFudFwiIG91dHB1dCBmb3JtYXQgdGhhdDpcbiAqIC0gS2VlcHMgdGV4dCBtZXNzYWdlcyBpbnRhY3RcbiAqIC0gU3VtbWFyaXplcyB0b29sIGNhbGxzIHdpdGggY3VtdWxhdGl2ZSBjb3VudHMgKHJlc2V0cyB3aGVuIHRleHQgYXBwZWFycylcbiAqIC0gT21pdHMgdGhpbmtpbmcgY29udGVudFxuICogLSBTdHJpcHMgdG9vbCBsaXN0IGFuZCBtb2RlbCBpbmZvIGZyb20gaW5pdCBtZXNzYWdlc1xuICovXG5cbmltcG9ydCB0eXBlIHsgU0RLQXNzaXN0YW50TWVzc2FnZSB9IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdGRvdXRNZXNzYWdlIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgeyBGSUxFX0VESVRfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVFZGl0VG9vbC9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBGSUxFX1JFQURfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVSZWFkVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBGSUxFX1dSSVRFX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9GaWxlV3JpdGVUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IEdMT0JfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0dsb2JUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IEdSRVBfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0dyZXBUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IExJU1RfTUNQX1JFU09VUkNFU19UT09MX05BTUUgfSBmcm9tICdzcmMvdG9vbHMvTGlzdE1jcFJlc291cmNlc1Rvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgTFNQX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9MU1BUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IE5PVEVCT09LX0VESVRfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL05vdGVib29rRWRpdFRvb2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgVEFTS19TVE9QX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9UYXNrU3RvcFRvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgV0VCX1NFQVJDSF9UT09MX05BTUUgfSBmcm9tICdzcmMvdG9vbHMvV2ViU2VhcmNoVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBleHRyYWN0VGV4dENvbnRlbnQgfSBmcm9tICdzcmMvdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBTSEVMTF9UT09MX05BTUVTIH0gZnJvbSAnc3JjL3V0aWxzL3NoZWxsL3NoZWxsVG9vbFV0aWxzLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ3NyYy91dGlscy9zdHJpbmdVdGlscy5qcydcblxudHlwZSBUb29sQ291bnRzID0ge1xuICBzZWFyY2hlczogbnVtYmVyXG4gIHJlYWRzOiBudW1iZXJcbiAgd3JpdGVzOiBudW1iZXJcbiAgY29tbWFuZHM6IG51bWJlclxuICBvdGhlcjogbnVtYmVyXG59XG5cbi8qKlxuICogVG9vbCBjYXRlZ29yaWVzIGZvciBzdW1tYXJpemF0aW9uLlxuICovXG5jb25zdCBTRUFSQ0hfVE9PTFMgPSBbXG4gIEdSRVBfVE9PTF9OQU1FLFxuICBHTE9CX1RPT0xfTkFNRSxcbiAgV0VCX1NFQVJDSF9UT09MX05BTUUsXG4gIExTUF9UT09MX05BTUUsXG5dXG5jb25zdCBSRUFEX1RPT0xTID0gW0ZJTEVfUkVBRF9UT09MX05BTUUsIExJU1RfTUNQX1JFU09VUkNFU19UT09MX05BTUVdXG5jb25zdCBXUklURV9UT09MUyA9IFtcbiAgRklMRV9XUklURV9UT09MX05BTUUsXG4gIEZJTEVfRURJVF9UT09MX05BTUUsXG4gIE5PVEVCT09LX0VESVRfVE9PTF9OQU1FLFxuXVxuY29uc3QgQ09NTUFORF9UT09MUyA9IFsuLi5TSEVMTF9UT09MX05BTUVTLCAnVG11eCcsIFRBU0tfU1RPUF9UT09MX05BTUVdXG5cbmZ1bmN0aW9uIGNhdGVnb3JpemVUb29sTmFtZSh0b29sTmFtZTogc3RyaW5nKToga2V5b2YgVG9vbENvdW50cyB7XG4gIGlmIChTRUFSQ0hfVE9PTFMuc29tZSh0ID0+IHRvb2xOYW1lLnN0YXJ0c1dpdGgodCkpKSByZXR1cm4gJ3NlYXJjaGVzJ1xuICBpZiAoUkVBRF9UT09MUy5zb21lKHQgPT4gdG9vbE5hbWUuc3RhcnRzV2l0aCh0KSkpIHJldHVybiAncmVhZHMnXG4gIGlmIChXUklURV9UT09MUy5zb21lKHQgPT4gdG9vbE5hbWUuc3RhcnRzV2l0aCh0KSkpIHJldHVybiAnd3JpdGVzJ1xuICBpZiAoQ09NTUFORF9UT09MUy5zb21lKHQgPT4gdG9vbE5hbWUuc3RhcnRzV2l0aCh0KSkpIHJldHVybiAnY29tbWFuZHMnXG4gIHJldHVybiAnb3RoZXInXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5VG9vbENvdW50cygpOiBUb29sQ291bnRzIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hlczogMCxcbiAgICByZWFkczogMCxcbiAgICB3cml0ZXM6IDAsXG4gICAgY29tbWFuZHM6IDAsXG4gICAgb3RoZXI6IDAsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN1bW1hcnkgdGV4dCBmb3IgdG9vbCBjb3VudHMuXG4gKi9cbmZ1bmN0aW9uIGdldFRvb2xTdW1tYXJ5VGV4dChjb3VudHM6IFRvb2xDb3VudHMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuXG4gIC8vIFVzZSBzaW1pbGFyIHBocmFzaW5nIHRvIGNvbGxhcHNlUmVhZFNlYXJjaC50c1xuICBpZiAoY291bnRzLnNlYXJjaGVzID4gMCkge1xuICAgIHBhcnRzLnB1c2goXG4gICAgICBgc2VhcmNoZWQgJHtjb3VudHMuc2VhcmNoZXN9ICR7Y291bnRzLnNlYXJjaGVzID09PSAxID8gJ3BhdHRlcm4nIDogJ3BhdHRlcm5zJ31gLFxuICAgIClcbiAgfVxuICBpZiAoY291bnRzLnJlYWRzID4gMCkge1xuICAgIHBhcnRzLnB1c2goYHJlYWQgJHtjb3VudHMucmVhZHN9ICR7Y291bnRzLnJlYWRzID09PSAxID8gJ2ZpbGUnIDogJ2ZpbGVzJ31gKVxuICB9XG4gIGlmIChjb3VudHMud3JpdGVzID4gMCkge1xuICAgIHBhcnRzLnB1c2goXG4gICAgICBgd3JvdGUgJHtjb3VudHMud3JpdGVzfSAke2NvdW50cy53cml0ZXMgPT09IDEgPyAnZmlsZScgOiAnZmlsZXMnfWAsXG4gICAgKVxuICB9XG4gIGlmIChjb3VudHMuY29tbWFuZHMgPiAwKSB7XG4gICAgcGFydHMucHVzaChcbiAgICAgIGByYW4gJHtjb3VudHMuY29tbWFuZHN9ICR7Y291bnRzLmNvbW1hbmRzID09PSAxID8gJ2NvbW1hbmQnIDogJ2NvbW1hbmRzJ31gLFxuICAgIClcbiAgfVxuICBpZiAoY291bnRzLm90aGVyID4gMCkge1xuICAgIHBhcnRzLnB1c2goYCR7Y291bnRzLm90aGVyfSBvdGhlciAke2NvdW50cy5vdGhlciA9PT0gMSA/ICd0b29sJyA6ICd0b29scyd9YClcbiAgfVxuXG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gY2FwaXRhbGl6ZShwYXJ0cy5qb2luKCcsICcpKVxufVxuXG4vKipcbiAqIENvdW50IHRvb2wgdXNlcyBpbiBhbiBhc3Npc3RhbnQgbWVzc2FnZSBhbmQgYWRkIHRvIGV4aXN0aW5nIGNvdW50cy5cbiAqL1xuZnVuY3Rpb24gYWNjdW11bGF0ZVRvb2xVc2VzKFxuICBtZXNzYWdlOiBTREtBc3Npc3RhbnRNZXNzYWdlLFxuICBjb3VudHM6IFRvb2xDb3VudHMsXG4pOiB2b2lkIHtcbiAgY29uc3QgY29udGVudCA9IG1lc3NhZ2UubWVzc2FnZS5jb250ZW50XG4gIGlmICghQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0b29sX3VzZScgJiYgJ25hbWUnIGluIGJsb2NrKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpemVUb29sTmFtZShibG9jay5uYW1lIGFzIHN0cmluZylcbiAgICAgIGNvdW50c1tjYXRlZ29yeV0rK1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0YXRlZnVsIHRyYW5zZm9ybWVyIHRoYXQgYWNjdW11bGF0ZXMgdG9vbCBjb3VudHMgYmV0d2VlbiB0ZXh0IG1lc3NhZ2VzLlxuICogVG9vbCBjb3VudHMgcmVzZXQgd2hlbiBhIG1lc3NhZ2Ugd2l0aCB0ZXh0IGNvbnRlbnQgaXMgZW5jb3VudGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJlYW1saW5lZFRyYW5zZm9ybWVyKCk6IChcbiAgbWVzc2FnZTogU3Rkb3V0TWVzc2FnZSxcbikgPT4gU3Rkb3V0TWVzc2FnZSB8IG51bGwge1xuICBsZXQgY3VtdWxhdGl2ZUNvdW50cyA9IGNyZWF0ZUVtcHR5VG9vbENvdW50cygpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHRyYW5zZm9ybVRvU3RyZWFtbGluZWQoXG4gICAgbWVzc2FnZTogU3Rkb3V0TWVzc2FnZSxcbiAgKTogU3Rkb3V0TWVzc2FnZSB8IG51bGwge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdhc3Npc3RhbnQnOiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICAgICAgICBjb25zdCB0ZXh0ID0gQXJyYXkuaXNBcnJheShjb250ZW50KVxuICAgICAgICAgID8gZXh0cmFjdFRleHRDb250ZW50KGNvbnRlbnQsICdcXG4nKS50cmltKClcbiAgICAgICAgICA6ICcnXG5cbiAgICAgICAgLy8gQWNjdW11bGF0ZSB0b29sIGNvdW50cyBmcm9tIHRoaXMgbWVzc2FnZVxuICAgICAgICBhY2N1bXVsYXRlVG9vbFVzZXMobWVzc2FnZSwgY3VtdWxhdGl2ZUNvdW50cylcblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gVGV4dCBtZXNzYWdlOiBlbWl0IHRleHQgb25seSwgcmVzZXQgY291bnRzXG4gICAgICAgICAgY3VtdWxhdGl2ZUNvdW50cyA9IGNyZWF0ZUVtcHR5VG9vbENvdW50cygpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJlYW1saW5lZF90ZXh0JyxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBzZXNzaW9uX2lkOiBtZXNzYWdlLnNlc3Npb25faWQsXG4gICAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9vbC1vbmx5IG1lc3NhZ2U6IGVtaXQgY3VtdWxhdGl2ZSB0b29sIHN1bW1hcnlcbiAgICAgICAgY29uc3QgdG9vbFN1bW1hcnkgPSBnZXRUb29sU3VtbWFyeVRleHQoY3VtdWxhdGl2ZUNvdW50cylcbiAgICAgICAgaWYgKCF0b29sU3VtbWFyeSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdzdHJlYW1saW5lZF90b29sX3VzZV9zdW1tYXJ5JyxcbiAgICAgICAgICB0b29sX3N1bW1hcnk6IHRvb2xTdW1tYXJ5LFxuICAgICAgICAgIHNlc3Npb25faWQ6IG1lc3NhZ2Uuc2Vzc2lvbl9pZCxcbiAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FzZSAncmVzdWx0JzpcbiAgICAgICAgLy8gS2VlcCByZXN1bHQgbWVzc2FnZXMgYXMtaXMgKHRoZXkgaGF2ZSBzdHJ1Y3R1cmVkX291dHB1dCwgcGVybWlzc2lvbl9kZW5pYWxzKVxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuXG4gICAgICBjYXNlICdzeXN0ZW0nOlxuICAgICAgY2FzZSAndXNlcic6XG4gICAgICBjYXNlICdzdHJlYW1fZXZlbnQnOlxuICAgICAgY2FzZSAndG9vbF9wcm9ncmVzcyc6XG4gICAgICBjYXNlICdhdXRoX3N0YXR1cyc6XG4gICAgICBjYXNlICdyYXRlX2xpbWl0X2V2ZW50JzpcbiAgICAgIGNhc2UgJ2NvbnRyb2xfcmVzcG9uc2UnOlxuICAgICAgY2FzZSAnY29udHJvbF9yZXF1ZXN0JzpcbiAgICAgIGNhc2UgJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnOlxuICAgICAgY2FzZSAna2VlcF9hbGl2ZSc6XG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtZXNzYWdlIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBzdHJlYW1saW5lZCBvdXRwdXQuXG4gKiBVc2VmdWwgZm9yIGZpbHRlcmluZyBiZWZvcmUgdHJhbnNmb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRJbmNsdWRlSW5TdHJlYW1saW5lZChtZXNzYWdlOiBTdGRvdXRNZXNzYWdlKTogYm9vbGVhbiB7XG4gIHJldHVybiBtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ3Jlc3VsdCdcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckNsZWFudXAgfSBmcm9tICcuL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5cbi8qKlxuICogU2VudGluZWwgd3JpdHRlbiB0byBzdGRlcnIgYWhlYWQgb2YgYW55IGRpdmVydGVkIG5vbi1KU09OIGxpbmUsIHNvIHRoYXRcbiAqIGxvZyBzY3JhcGVycyBhbmQgdGVzdHMgY2FuIGdyZXAgZm9yIGd1YXJkIGFjdGl2aXR5LlxuICovXG5leHBvcnQgY29uc3QgU1RET1VUX0dVQVJEX01BUktFUiA9ICdbc3Rkb3V0LWd1YXJkXSdcblxubGV0IGluc3RhbGxlZCA9IGZhbHNlXG5sZXQgYnVmZmVyID0gJydcbmxldCBvcmlnaW5hbFdyaXRlOiB0eXBlb2YgcHJvY2Vzcy5zdGRvdXQud3JpdGUgfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiBpc0pzb25MaW5lKGxpbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBFbXB0eSBsaW5lcyBhcmUgdG9sZXJhdGVkIGluIE5ESlNPTiBzdHJlYW1zIFx1MjAxNCB0cmVhdCB0aGVtIGFzIHZhbGlkIHNvIGFcbiAgLy8gdHJhaWxpbmcgbmV3bGluZSBvciBhIGJsYW5rIHNlcGFyYXRvciBkb2Vzbid0IHRyaXAgdGhlIGd1YXJkLlxuICBpZiAobGluZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHRyeSB7XG4gICAgSlNPTi5wYXJzZShsaW5lKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogSW5zdGFsbCBhIHJ1bnRpbWUgZ3VhcmQgb24gcHJvY2Vzcy5zdGRvdXQud3JpdGUgZm9yIC0tb3V0cHV0LWZvcm1hdD1zdHJlYW0tanNvbi5cbiAqXG4gKiBTREsgY2xpZW50cyBjb25zdW1pbmcgc3RyZWFtLWpzb24gcGFyc2Ugc3Rkb3V0IGxpbmUtYnktbGluZSBhcyBOREpTT04uIEFueVxuICogc3RyYXkgd3JpdGUgXHUyMDE0IGEgY29uc29sZS5sb2cgZnJvbSBhIGRlcGVuZGVuY3ksIGEgZGVidWcgcHJpbnQgdGhhdCBzbGlwcGVkXG4gKiBwYXN0IHJldmlldywgYSBsaWJyYXJ5IGJhbm5lciBcdTIwMTQgYnJlYWtzIHRoZSBjbGllbnQncyBwYXJzZXIgbWlkLXN0cmVhbSB3aXRoXG4gKiBubyByZWNvdmVyeSBwYXRoLlxuICpcbiAqIFRoaXMgZ3VhcmQgd3JhcHMgcHJvY2Vzcy5zdGRvdXQud3JpdGUgYXQgdGhlIHNhbWUgbGF5ZXIgdGhlIGFzY2lpY2FzdFxuICogcmVjb3JkZXIgZG9lcyAoc2VlIGFzY2lpY2FzdC50cykuIFdyaXRlcyBhcmUgYnVmZmVyZWQgdW50aWwgYSBuZXdsaW5lXG4gKiBhcnJpdmVzLCB0aGVuIGVhY2ggY29tcGxldGUgbGluZSBpcyBKU09OLXBhcnNlZC4gTGluZXMgdGhhdCBwYXJzZSBhcmVcbiAqIGZvcndhcmRlZCB0byB0aGUgcmVhbCBzdGRvdXQ7IGxpbmVzIHRoYXQgZG9uJ3QgYXJlIGRpdmVydGVkIHRvIHN0ZGVyclxuICogdGFnZ2VkIHdpdGggU1RET1VUX0dVQVJEX01BUktFUiBzbyB0aGV5IHJlbWFpbiB2aXNpYmxlIHdpdGhvdXQgY29ycnVwdGluZ1xuICogdGhlIEpTT04gc3RyZWFtLlxuICpcbiAqIFRoZSBibGVzc2VkIEpTT04gcGF0aCAoc3RydWN0dXJlZElPLndyaXRlIFx1MjE5MiB3cml0ZVRvU3Rkb3V0IFx1MjE5MiBzdGRvdXQud3JpdGUpXG4gKiBhbHdheXMgZW1pdHMgYG5kanNvblNhZmVTdHJpbmdpZnkobXNnKSArICdcXG4nYCwgc28gaXQgcGFzc2VzIHN0cmFpZ2h0XG4gKiB0aHJvdWdoLiBPbmx5IG91dC1vZi1iYW5kIHdyaXRlcyBhcmUgZGl2ZXJ0ZWQuXG4gKlxuICogSW5zdGFsbGluZyB0d2ljZSBpcyBhIG5vLW9wLiBDYWxsIGJlZm9yZSBhbnkgc3RyZWFtLWpzb24gb3V0cHV0IGlzIGVtaXR0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsU3RyZWFtSnNvblN0ZG91dEd1YXJkKCk6IHZvaWQge1xuICBpZiAoaW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIG9yaWdpbmFsV3JpdGUgPSBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKFxuICAgIHByb2Nlc3Muc3Rkb3V0LFxuICApIGFzIHR5cGVvZiBwcm9jZXNzLnN0ZG91dC53cml0ZVxuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlID0gZnVuY3Rpb24gKFxuICAgIGNodW5rOiBzdHJpbmcgfCBVaW50OEFycmF5LFxuICAgIGVuY29kaW5nT3JDYj86IEJ1ZmZlckVuY29kaW5nIHwgKChlcnI/OiBFcnJvcikgPT4gdm9pZCksXG4gICAgY2I/OiAoZXJyPzogRXJyb3IpID0+IHZvaWQsXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRleHQgPVxuICAgICAgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IGNodW5rIDogQnVmZmVyLmZyb20oY2h1bmspLnRvU3RyaW5nKCd1dGYtOCcpXG5cbiAgICBidWZmZXIgKz0gdGV4dFxuICAgIGxldCBuZXdsaW5lSWR4OiBudW1iZXJcbiAgICBsZXQgd3JvdGUgPSB0cnVlXG4gICAgd2hpbGUgKChuZXdsaW5lSWR4ID0gYnVmZmVyLmluZGV4T2YoJ1xcbicpKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBidWZmZXIuc2xpY2UoMCwgbmV3bGluZUlkeClcbiAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZShuZXdsaW5lSWR4ICsgMSlcbiAgICAgIGlmIChpc0pzb25MaW5lKGxpbmUpKSB7XG4gICAgICAgIHdyb3RlID0gb3JpZ2luYWxXcml0ZSEobGluZSArICdcXG4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCR7U1RET1VUX0dVQVJEX01BUktFUn0gJHtsaW5lfVxcbmApXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgc3RyZWFtSnNvblN0ZG91dEd1YXJkIGRpdmVydGVkIG5vbi1KU09OIHN0ZG91dCBsaW5lOiAke2xpbmUuc2xpY2UoMCwgMjAwKX1gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0aGUgY2FsbGJhY2sgb25jZSBidWZmZXJpbmcgaXMgZG9uZS4gV2UgcmVwb3J0IHN1Y2Nlc3MgZXZlbiB3aGVuXG4gICAgLy8gYSBsaW5lIHdhcyBkaXZlcnRlZCBcdTIwMTQgdGhlIGNhbGxlcidzIGludGVudCAoZW1pdCB0ZXh0KSB3YXMgaG9ub3JlZCxcbiAgICAvLyBqdXN0IG9uIGEgZGlmZmVyZW50IGZkLlxuICAgIGNvbnN0IGNhbGxiYWNrID0gdHlwZW9mIGVuY29kaW5nT3JDYiA9PT0gJ2Z1bmN0aW9uJyA/IGVuY29kaW5nT3JDYiA6IGNiXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiBjYWxsYmFjaygpKVxuICAgIH1cbiAgICByZXR1cm4gd3JvdGVcbiAgfSBhcyB0eXBlb2YgcHJvY2Vzcy5zdGRvdXQud3JpdGVcblxuICByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4ge1xuICAgIC8vIEZsdXNoIGFueSBwYXJ0aWFsIGxpbmUgbGVmdCBpbiB0aGUgYnVmZmVyIGF0IHNodXRkb3duLiBJZiBpdCdzIGEgSlNPTlxuICAgIC8vIGZyYWdtZW50IGl0IHdvbid0IHBhcnNlIFx1MjAxNCBkaXZlcnQgaXQgcmF0aGVyIHRoYW4gZHJvcCBpdCBzaWxlbnRseS5cbiAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcmlnaW5hbFdyaXRlICYmIGlzSnNvbkxpbmUoYnVmZmVyKSkge1xuICAgICAgICBvcmlnaW5hbFdyaXRlKGJ1ZmZlciArICdcXG4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCR7U1RET1VUX0dVQVJEX01BUktFUn0gJHtidWZmZXJ9XFxuYClcbiAgICAgIH1cbiAgICAgIGJ1ZmZlciA9ICcnXG4gICAgfVxuICAgIGlmIChvcmlnaW5hbFdyaXRlKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSA9IG9yaWdpbmFsV3JpdGVcbiAgICAgIG9yaWdpbmFsV3JpdGUgPSBudWxsXG4gICAgfVxuICAgIGluc3RhbGxlZCA9IGZhbHNlXG4gIH0pXG59XG5cbi8qKlxuICogVGVzdGluZy1vbmx5IHJlc2V0LiBSZXN0b3JlcyB0aGUgcmVhbCBzdGRvdXQud3JpdGUgYW5kIGNsZWFycyB0aGUgbGluZVxuICogYnVmZmVyIHNvIHN1YnNlcXVlbnQgdGVzdHMgc3RhcnQgZnJvbSBhIGNsZWFuIHNsYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2V0U3RyZWFtSnNvblN0ZG91dEd1YXJkRm9yVGVzdGluZygpOiB2b2lkIHtcbiAgaWYgKG9yaWdpbmFsV3JpdGUpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSA9IG9yaWdpbmFsV3JpdGVcbiAgICBvcmlnaW5hbFdyaXRlID0gbnVsbFxuICB9XG4gIGJ1ZmZlciA9ICcnXG4gIGluc3RhbGxlZCA9IGZhbHNlXG59XG4iLCAiLyoqXG4gKiBGaWxlIHBlcnNpc3RlbmNlIG9yY2hlc3RyYXRvclxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHRoZSBtYWluIG9yY2hlc3RyYXRpb24gbG9naWMgZm9yIHBlcnNpc3RpbmcgZmlsZXNcbiAqIGF0IHRoZSBlbmQgb2YgZWFjaCB0dXJuOlxuICogLSBCWU9DIG1vZGU6IFVwbG9hZCBmaWxlcyB0byBGaWxlcyBBUEkgYW5kIGNvbGxlY3QgZmlsZSBJRHNcbiAqIC0gMVAvQ2xvdWQgbW9kZTogUXVlcnkgRmlsZXMgQVBJIGxpc3REaXJlY3RvcnkgZm9yIGZpbGUgSURzIChyY2xvbmUgaGFuZGxlcyBzeW5jKVxuICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgam9pbiwgcmVsYXRpdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBGaWxlc0FwaUNvbmZpZyxcbiAgdXBsb2FkU2Vzc2lvbkZpbGVzLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZmlsZXNBcGkuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi9jd2QuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7IGdldFNlc3Npb25JbmdyZXNzQXV0aFRva2VuIH0gZnJvbSAnLi4vc2Vzc2lvbkluZ3Jlc3NBdXRoLmpzJ1xuaW1wb3J0IHtcbiAgZmluZE1vZGlmaWVkRmlsZXMsXG4gIGdldEVudmlyb25tZW50S2luZCxcbiAgbG9nRGVidWcsXG59IGZyb20gJy4vb3V0cHV0c1NjYW5uZXIuanMnXG5pbXBvcnQge1xuICBERUZBVUxUX1VQTE9BRF9DT05DVVJSRU5DWSxcbiAgdHlwZSBGYWlsZWRQZXJzaXN0ZW5jZSxcbiAgRklMRV9DT1VOVF9MSU1JVCxcbiAgdHlwZSBGaWxlc1BlcnNpc3RlZEV2ZW50RGF0YSxcbiAgT1VUUFVUU19TVUJESVIsXG4gIHR5cGUgUGVyc2lzdGVkRmlsZSxcbiAgdHlwZSBUdXJuU3RhcnRUaW1lLFxufSBmcm9tICcuL3R5cGVzLmpzJ1xuXG4vKipcbiAqIEV4ZWN1dGUgZmlsZSBwZXJzaXN0ZW5jZSBmb3IgbW9kaWZpZWQgZmlsZXMgaW4gdGhlIG91dHB1dHMgZGlyZWN0b3J5LlxuICpcbiAqIEFzc2VtYmxlcyBhbGwgY29uZmlnIGludGVybmFsbHk6XG4gKiAtIENoZWNrcyBlbnZpcm9ubWVudCBraW5kIChDTEFVREVfQ09ERV9FTlZJUk9OTUVOVF9LSU5EKVxuICogLSBSZXRyaWV2ZXMgc2Vzc2lvbiBhY2Nlc3MgdG9rZW5cbiAqIC0gUmVxdWlyZXMgQ0xBVURFX0NPREVfUkVNT1RFX1NFU1NJT05fSUQgZm9yIHNlc3Npb24gSURcbiAqXG4gKiBAcGFyYW0gdHVyblN0YXJ0VGltZSAtIFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgdHVybiBzdGFydGVkXG4gKiBAcGFyYW0gc2lnbmFsIC0gT3B0aW9uYWwgYWJvcnQgc2lnbmFsIGZvciBjYW5jZWxsYXRpb25cbiAqIEByZXR1cm5zIEV2ZW50IGRhdGEsIG9yIG51bGwgaWYgbm90IGVuYWJsZWQgb3Igbm8gZmlsZXMgdG8gcGVyc2lzdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuRmlsZVBlcnNpc3RlbmNlKFxuICB0dXJuU3RhcnRUaW1lOiBUdXJuU3RhcnRUaW1lLFxuICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbik6IFByb21pc2U8RmlsZXNQZXJzaXN0ZWRFdmVudERhdGEgfCBudWxsPiB7XG4gIGNvbnN0IGVudmlyb25tZW50S2luZCA9IGdldEVudmlyb25tZW50S2luZCgpXG4gIGlmIChlbnZpcm9ubWVudEtpbmQgIT09ICdieW9jJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBzZXNzaW9uQWNjZXNzVG9rZW4gPSBnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbigpXG4gIGlmICghc2Vzc2lvbkFjY2Vzc1Rva2VuKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb25JZCA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URV9TRVNTSU9OX0lEXG4gIGlmICghc2Vzc2lvbklkKSB7XG4gICAgbG9nRXJyb3IoXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgICdGaWxlIHBlcnNpc3RlbmNlIGVuYWJsZWQgYnV0IENMQVVERV9DT0RFX1JFTU9URV9TRVNTSU9OX0lEIGlzIG5vdCBzZXQnLFxuICAgICAgKSxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZzogRmlsZXNBcGlDb25maWcgPSB7XG4gICAgb2F1dGhUb2tlbjogc2Vzc2lvbkFjY2Vzc1Rva2VuLFxuICAgIHNlc3Npb25JZCxcbiAgfVxuXG4gIGNvbnN0IG91dHB1dHNEaXIgPSBqb2luKGdldEN3ZCgpLCBzZXNzaW9uSWQsIE9VVFBVVFNfU1VCRElSKVxuXG4gIC8vIENoZWNrIGlmIGFib3J0ZWRcbiAgaWYgKHNpZ25hbD8uYWJvcnRlZCkge1xuICAgIGxvZ0RlYnVnKCdQZXJzaXN0ZW5jZSBhYm9ydGVkIGJlZm9yZSBwcm9jZXNzaW5nJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICBsb2dFdmVudCgndGVuZ3VfZmlsZV9wZXJzaXN0ZW5jZV9zdGFydGVkJywge1xuICAgIG1vZGU6IGVudmlyb25tZW50S2luZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgbGV0IHJlc3VsdDogRmlsZXNQZXJzaXN0ZWRFdmVudERhdGFcbiAgICBpZiAoZW52aXJvbm1lbnRLaW5kID09PSAnYnlvYycpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVCWU9DUGVyc2lzdGVuY2UoXG4gICAgICAgIHR1cm5TdGFydFRpbWUsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgb3V0cHV0c0RpcixcbiAgICAgICAgc2lnbmFsLFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBleGVjdXRlQ2xvdWRQZXJzaXN0ZW5jZSgpXG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB0byByZXBvcnRcbiAgICBpZiAocmVzdWx0LmZpbGVzLmxlbmd0aCA9PT0gMCAmJiByZXN1bHQuZmFpbGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbk1zID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9maWxlX3BlcnNpc3RlbmNlX2NvbXBsZXRlZCcsIHtcbiAgICAgIHN1Y2Nlc3NfY291bnQ6IHJlc3VsdC5maWxlcy5sZW5ndGgsXG4gICAgICBmYWlsdXJlX2NvdW50OiByZXN1bHQuZmFpbGVkLmxlbmd0aCxcbiAgICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbk1zLFxuICAgICAgbW9kZTogZW52aXJvbm1lbnRLaW5kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICBsb2dEZWJ1ZyhgRmlsZSBwZXJzaXN0ZW5jZSBmYWlsZWQ6ICR7ZXJyb3J9YClcblxuICAgIGNvbnN0IGR1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2ZpbGVfcGVyc2lzdGVuY2VfY29tcGxldGVkJywge1xuICAgICAgc3VjY2Vzc19jb3VudDogMCxcbiAgICAgIGZhaWx1cmVfY291bnQ6IDAsXG4gICAgICBkdXJhdGlvbl9tczogZHVyYXRpb25NcyxcbiAgICAgIG1vZGU6IGVudmlyb25tZW50S2luZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgZXJyb3I6XG4gICAgICAgICdleGNlcHRpb24nIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogW10sXG4gICAgICBmYWlsZWQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVuYW1lOiBvdXRwdXRzRGlyLFxuICAgICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UoZXJyb3IpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIEJZT0MgbW9kZSBwZXJzaXN0ZW5jZTogc2NhbiBsb2NhbCBmaWxlc3lzdGVtIGZvciBtb2RpZmllZCBmaWxlcyxcbiAqIHRoZW4gdXBsb2FkIHRvIEZpbGVzIEFQSS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUJZT0NQZXJzaXN0ZW5jZShcbiAgdHVyblN0YXJ0VGltZTogVHVyblN0YXJ0VGltZSxcbiAgY29uZmlnOiBGaWxlc0FwaUNvbmZpZyxcbiAgb3V0cHV0c0Rpcjogc3RyaW5nLFxuICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbik6IFByb21pc2U8RmlsZXNQZXJzaXN0ZWRFdmVudERhdGE+IHtcbiAgLy8gRmluZCBtb2RpZmllZCBmaWxlcyB2aWEgbG9jYWwgZmlsZXN5c3RlbSBzY2FuXG4gIC8vIFVzZXMgc2FtZSBkaXJlY3Rvcnkgc3RydWN0dXJlIGFzIGRvd25sb2Fkczoge2N3ZH0ve3Nlc3Npb25JZH0vb3V0cHV0c1xuICBjb25zdCBtb2RpZmllZEZpbGVzID0gYXdhaXQgZmluZE1vZGlmaWVkRmlsZXModHVyblN0YXJ0VGltZSwgb3V0cHV0c0RpcilcblxuICBpZiAobW9kaWZpZWRGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICBsb2dEZWJ1ZygnTm8gbW9kaWZpZWQgZmlsZXMgdG8gcGVyc2lzdCcpXG4gICAgcmV0dXJuIHsgZmlsZXM6IFtdLCBmYWlsZWQ6IFtdIH1cbiAgfVxuXG4gIGxvZ0RlYnVnKGBGb3VuZCAke21vZGlmaWVkRmlsZXMubGVuZ3RofSBtb2RpZmllZCBmaWxlc2ApXG5cbiAgaWYgKHNpZ25hbD8uYWJvcnRlZCkge1xuICAgIHJldHVybiB7IGZpbGVzOiBbXSwgZmFpbGVkOiBbXSB9XG4gIH1cblxuICAvLyBFbmZvcmNlIGZpbGUgY291bnQgbGltaXRcbiAgaWYgKG1vZGlmaWVkRmlsZXMubGVuZ3RoID4gRklMRV9DT1VOVF9MSU1JVCkge1xuICAgIGxvZ0RlYnVnKFxuICAgICAgYEZpbGUgY291bnQgbGltaXQgZXhjZWVkZWQ6ICR7bW9kaWZpZWRGaWxlcy5sZW5ndGh9ID4gJHtGSUxFX0NPVU5UX0xJTUlUfWAsXG4gICAgKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9maWxlX3BlcnNpc3RlbmNlX2xpbWl0X2V4Y2VlZGVkJywge1xuICAgICAgZmlsZV9jb3VudDogbW9kaWZpZWRGaWxlcy5sZW5ndGgsXG4gICAgICBsaW1pdDogRklMRV9DT1VOVF9MSU1JVCxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogW10sXG4gICAgICBmYWlsZWQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVuYW1lOiBvdXRwdXRzRGlyLFxuICAgICAgICAgIGVycm9yOiBgVG9vIG1hbnkgZmlsZXMgbW9kaWZpZWQgKCR7bW9kaWZpZWRGaWxlcy5sZW5ndGh9KS4gTWF4aW11bTogJHtGSUxFX0NPVU5UX0xJTUlUfS5gLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBmaWxlc1RvUHJvY2VzcyA9IG1vZGlmaWVkRmlsZXNcbiAgICAubWFwKGZpbGVQYXRoID0+ICh7XG4gICAgICBwYXRoOiBmaWxlUGF0aCxcbiAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmUob3V0cHV0c0RpciwgZmlsZVBhdGgpLFxuICAgIH0pKVxuICAgIC5maWx0ZXIoKHsgcmVsYXRpdmVQYXRoIH0pID0+IHtcbiAgICAgIC8vIFNlY3VyaXR5OiBza2lwIGZpbGVzIHRoYXQgcmVzb2x2ZSBvdXRzaWRlIHRoZSBvdXRwdXRzIGRpcmVjdG9yeVxuICAgICAgaWYgKHJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKCcuLicpKSB7XG4gICAgICAgIGxvZ0RlYnVnKGBTa2lwcGluZyBmaWxlIG91dHNpZGUgb3V0cHV0cyBkaXJlY3Rvcnk6ICR7cmVsYXRpdmVQYXRofWApXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gIGxvZ0RlYnVnKGBCWU9DIG1vZGU6IHVwbG9hZGluZyAke2ZpbGVzVG9Qcm9jZXNzLmxlbmd0aH0gZmlsZXNgKVxuXG4gIC8vIFVwbG9hZCBmaWxlcyBpbiBwYXJhbGxlbFxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgdXBsb2FkU2Vzc2lvbkZpbGVzKFxuICAgIGZpbGVzVG9Qcm9jZXNzLFxuICAgIGNvbmZpZyxcbiAgICBERUZBVUxUX1VQTE9BRF9DT05DVVJSRU5DWSxcbiAgKVxuXG4gIC8vIFNlcGFyYXRlIHN1Y2Nlc3NmdWwgYW5kIGZhaWxlZCB1cGxvYWRzXG4gIGNvbnN0IHBlcnNpc3RlZEZpbGVzOiBQZXJzaXN0ZWRGaWxlW10gPSBbXVxuICBjb25zdCBmYWlsZWRGaWxlczogRmFpbGVkUGVyc2lzdGVuY2VbXSA9IFtdXG5cbiAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcGVyc2lzdGVkRmlsZXMucHVzaCh7XG4gICAgICAgIGZpbGVuYW1lOiByZXN1bHQucGF0aCxcbiAgICAgICAgZmlsZV9pZDogcmVzdWx0LmZpbGVJZCxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZhaWxlZEZpbGVzLnB1c2goe1xuICAgICAgICBmaWxlbmFtZTogcmVzdWx0LnBhdGgsXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGxvZ0RlYnVnKFxuICAgIGBCWU9DIHBlcnNpc3RlbmNlIGNvbXBsZXRlOiAke3BlcnNpc3RlZEZpbGVzLmxlbmd0aH0gdXBsb2FkZWQsICR7ZmFpbGVkRmlsZXMubGVuZ3RofSBmYWlsZWRgLFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlczogcGVyc2lzdGVkRmlsZXMsXG4gICAgZmFpbGVkOiBmYWlsZWRGaWxlcyxcbiAgfVxufVxuXG4vKipcbiAqIEV4ZWN1dGUgQ2xvdWQgKDFQKSBtb2RlIHBlcnNpc3RlbmNlLlxuICogVE9ETzogUmVhZCBmaWxlX2lkIGZyb20geGF0dHIgb24gb3V0cHV0IGZpbGVzLiB4YXR0ci1iYXNlZCBmaWxlIElEcyBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBhZGRlZCBmb3IgMVAgZW52aXJvbm1lbnRzLlxuICovXG5mdW5jdGlvbiBleGVjdXRlQ2xvdWRQZXJzaXN0ZW5jZSgpOiBGaWxlc1BlcnNpc3RlZEV2ZW50RGF0YSB7XG4gIGxvZ0RlYnVnKCdDbG91ZCBtb2RlOiB4YXR0ci1iYXNlZCBmaWxlIElEIHJlYWRpbmcgbm90IHlldCBpbXBsZW1lbnRlZCcpXG4gIHJldHVybiB7IGZpbGVzOiBbXSwgZmFpbGVkOiBbXSB9XG59XG5cbi8qKlxuICogRXhlY3V0ZSBmaWxlIHBlcnNpc3RlbmNlIGFuZCBlbWl0IHJlc3VsdCB2aWEgY2FsbGJhY2suXG4gKiBIYW5kbGVzIGVycm9ycyBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZpbGVQZXJzaXN0ZW5jZShcbiAgdHVyblN0YXJ0VGltZTogVHVyblN0YXJ0VGltZSxcbiAgc2lnbmFsOiBBYm9ydFNpZ25hbCxcbiAgb25SZXN1bHQ6IChyZXN1bHQ6IEZpbGVzUGVyc2lzdGVkRXZlbnREYXRhKSA9PiB2b2lkLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuRmlsZVBlcnNpc3RlbmNlKHR1cm5TdGFydFRpbWUsIHNpZ25hbClcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBvblJlc3VsdChyZXN1bHQpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZmlsZSBwZXJzaXN0ZW5jZSBpcyBlbmFibGVkLlxuICogUmVxdWlyZXM6IGZlYXR1cmUgZmxhZyBPTiwgdmFsaWQgZW52aXJvbm1lbnQga2luZCwgc2Vzc2lvbiBhY2Nlc3MgdG9rZW4sXG4gKiBhbmQgQ0xBVURFX0NPREVfUkVNT1RFX1NFU1NJT05fSUQuXG4gKiBUaGlzIGVuc3VyZXMgb25seSBwdWJsaWMtYXBpL3Nlc3Npb25zIHVzZXJzIHRyaWdnZXIgZmlsZSBwZXJzaXN0ZW5jZSxcbiAqIG5vdCBub3JtYWwgQ2xhdWRlIENvZGUgQ0xJIHVzZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGaWxlUGVyc2lzdGVuY2VFbmFibGVkKCk6IGJvb2xlYW4ge1xuICBpZiAoZmVhdHVyZSgnRklMRV9QRVJTSVNURU5DRScpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdldEVudmlyb25tZW50S2luZCgpID09PSAnYnlvYycgJiZcbiAgICAgICEhZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKSAmJlxuICAgICAgISFwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEVfU0VTU0lPTl9JRFxuICAgIClcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbiIsICJleHBvcnQgY29uc3QgREVGQVVMVF9VUExPQURfQ09OQ1VSUkVOQ1kgPSA0XG5leHBvcnQgY29uc3QgRklMRV9DT1VOVF9MSU1JVCA9IDEwMDBcbmV4cG9ydCBjb25zdCBPVVRQVVRTX1NVQkRJUiA9ICdvdXRwdXRzJ1xuXG5leHBvcnQgdHlwZSBQZXJzaXN0ZWRGaWxlID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgZmlsZUlkPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEZhaWxlZFBlcnNpc3RlbmNlID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgZXJyb3I6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBGaWxlc1BlcnNpc3RlZEV2ZW50RGF0YSA9IHtcbiAgZmlsZXM6IFBlcnNpc3RlZEZpbGVbXVxuICBmYWlsZWQ6IEZhaWxlZFBlcnNpc3RlbmNlW11cbn1cblxuZXhwb3J0IHR5cGUgVHVyblN0YXJ0VGltZSA9IG51bWJlclxuIiwgImltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duU3luYyB9IGZyb20gJy4vZ3JhY2VmdWxTaHV0ZG93bi5qcydcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGlkbGUgdGltZW91dCBtYW5hZ2VyIGZvciBTREsgbW9kZS5cbiAqIEF1dG9tYXRpY2FsbHkgZXhpdHMgdGhlIHByb2Nlc3MgYWZ0ZXIgdGhlIHNwZWNpZmllZCBpZGxlIGR1cmF0aW9uLlxuICpcbiAqIEBwYXJhbSBpc0lkbGUgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgdGhlIHN5c3RlbSBpcyBjdXJyZW50bHkgaWRsZVxuICogQHJldHVybnMgT2JqZWN0IHdpdGggc3RhcnQvc3RvcCBtZXRob2RzIHRvIGNvbnRyb2wgdGhlIGlkbGUgdGltZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlkbGVUaW1lb3V0TWFuYWdlcihpc0lkbGU6ICgpID0+IGJvb2xlYW4pOiB7XG4gIHN0YXJ0OiAoKSA9PiB2b2lkXG4gIHN0b3A6ICgpID0+IHZvaWRcbn0ge1xuICAvLyBQYXJzZSBDTEFVREVfQ09ERV9FWElUX0FGVEVSX1NUT1BfREVMQVkgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgY29uc3QgZXhpdEFmdGVyU3RvcERlbGF5ID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRVhJVF9BRlRFUl9TVE9QX0RFTEFZXG4gIGNvbnN0IGRlbGF5TXMgPSBleGl0QWZ0ZXJTdG9wRGVsYXkgPyBwYXJzZUludChleGl0QWZ0ZXJTdG9wRGVsYXksIDEwKSA6IG51bGxcbiAgY29uc3QgaXNWYWxpZERlbGF5ID0gZGVsYXlNcyAmJiAhaXNOYU4oZGVsYXlNcykgJiYgZGVsYXlNcyA+IDBcblxuICBsZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcbiAgbGV0IGxhc3RJZGxlVGltZSA9IDBcblxuICByZXR1cm4ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVyXG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBzdGFydCB0aW1lciBpZiBkZWxheSBpcyBjb25maWd1cmVkIGFuZCB2YWxpZFxuICAgICAgaWYgKGlzVmFsaWREZWxheSkge1xuICAgICAgICBsYXN0SWRsZVRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBiZWVuIGNvbnRpbnVvdXNseSBpZGxlIGZvciB0aGUgZnVsbCBkdXJhdGlvblxuICAgICAgICAgIGNvbnN0IGlkbGVEdXJhdGlvbiA9IERhdGUubm93KCkgLSBsYXN0SWRsZVRpbWVcbiAgICAgICAgICBpZiAoaXNJZGxlKCkgJiYgaWRsZUR1cmF0aW9uID49IGRlbGF5TXMpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgRXhpdGluZyBhZnRlciAke2RlbGF5TXN9bXMgb2YgaWRsZSB0aW1lYClcbiAgICAgICAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5TXMpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3AoKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgcmFuZG9tVVVJRCwgdHlwZSBVVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgdmFsaWRhdGVVdWlkIH0gZnJvbSAnLi91dWlkLmpzJ1xuXG5leHBvcnQgdHlwZSBQYXJzZWRTZXNzaW9uVXJsID0ge1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgaW5ncmVzc1VybDogc3RyaW5nIHwgbnVsbFxuICBpc1VybDogYm9vbGVhblxuICBqc29ubEZpbGU6IHN0cmluZyB8IG51bGxcbiAgaXNKc29ubEZpbGU6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBzZXNzaW9uIHJlc3VtZSBpZGVudGlmaWVyIHdoaWNoIGNhbiBiZSBlaXRoZXI6XG4gKiAtIEEgVVJMIGNvbnRhaW5pbmcgc2Vzc2lvbiBJRCAoZS5nLiwgaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vdjEvc2Vzc2lvbl9pbmdyZXNzL3Nlc3Npb24vNTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwKVxuICogLSBBIHBsYWluIHNlc3Npb24gSUQgKFVVSUQpXG4gKlxuICogQHBhcmFtIHJlc3VtZUlkZW50aWZpZXIgLSBUaGUgVVJMIG9yIHNlc3Npb24gSUQgdG8gcGFyc2VcbiAqIEByZXR1cm5zIFBhcnNlZCBzZXNzaW9uIGluZm9ybWF0aW9uIG9yIG51bGwgaWYgaW52YWxpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZXNzaW9uSWRlbnRpZmllcihcbiAgcmVzdW1lSWRlbnRpZmllcjogc3RyaW5nLFxuKTogUGFyc2VkU2Vzc2lvblVybCB8IG51bGwge1xuICAvLyBDaGVjayBmb3IgSlNPTkwgZmlsZSBwYXRoIGJlZm9yZSBVUkwgcGFyc2luZywgc2luY2UgV2luZG93cyBhYnNvbHV0ZVxuICAvLyBwYXRocyAoZS5nLiwgQzpcXHBhdGhcXGZpbGUuanNvbmwpIGFyZSBwYXJzZWQgYXMgdmFsaWQgVVJMcyB3aXRoIEM6IGFzIHByb3RvY29sXG4gIGlmIChyZXN1bWVJZGVudGlmaWVyLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5qc29ubCcpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogcmFuZG9tVVVJRCgpIGFzIFVVSUQsXG4gICAgICBpbmdyZXNzVXJsOiBudWxsLFxuICAgICAgaXNVcmw6IGZhbHNlLFxuICAgICAganNvbmxGaWxlOiByZXN1bWVJZGVudGlmaWVyLFxuICAgICAgaXNKc29ubEZpbGU6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHBsYWluIFVVSURcbiAgaWYgKHZhbGlkYXRlVXVpZChyZXN1bWVJZGVudGlmaWVyKSkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHJlc3VtZUlkZW50aWZpZXIgYXMgVVVJRCxcbiAgICAgIGluZ3Jlc3NVcmw6IG51bGwsXG4gICAgICBpc1VybDogZmFsc2UsXG4gICAgICBqc29ubEZpbGU6IG51bGwsXG4gICAgICBpc0pzb25sRmlsZTogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBhIFVSTFxuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVzdW1lSWRlbnRpZmllcilcblxuICAgIC8vIFVzZSB0aGUgZW50aXJlIFVSTCBhcyB0aGUgaW5ncmVzcyBVUkxcbiAgICAvLyBBbHdheXMgZ2VuZXJhdGUgYSByYW5kb20gc2Vzc2lvbiBJRFxuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHJhbmRvbVVVSUQoKSBhcyBVVUlELFxuICAgICAgaW5ncmVzc1VybDogdXJsLmhyZWYsXG4gICAgICBpc1VybDogdHJ1ZSxcbiAgICAgIGpzb25sRmlsZTogbnVsbCxcbiAgICAgIGlzSnNvbmxGaWxlOiBmYWxzZSxcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIE5vdCBhIHZhbGlkIFVSTFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiIsICIvKipcbiAqIFBsdWdpbiBpbnN0YWxsYXRpb24gZm9yIGhlYWRsZXNzL0NDUiBtb2RlLlxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHBsdWdpbiBpbnN0YWxsYXRpb24gd2l0aG91dCBBcHBTdGF0ZSB1cGRhdGVzLFxuICogc3VpdGFibGUgZm9yIG5vbi1pbnRlcmFjdGl2ZSBlbnZpcm9ubWVudHMgbGlrZSBDQ1IuXG4gKlxuICogV2hlbiBDTEFVREVfQ09ERV9QTFVHSU5fVVNFX1pJUF9DQUNIRSBpcyBlbmFibGVkLCBwbHVnaW5zIGFyZSBzdG9yZWQgYXNcbiAqIFpJUHMgb24gYSBtb3VudGVkIHZvbHVtZS4gVGhlIHN0b3JhZ2UgbGF5ZXIgKHBsdWdpbkxvYWRlci50cykgaGFuZGxlc1xuICogWklQIGNyZWF0aW9uIG9uIGluc3RhbGwgYW5kIGV4dHJhY3Rpb24gb24gbG9hZCB0cmFuc3BhcmVudGx5LlxuICovXG5cbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnLi4vY2xlYW51cFJlZ2lzdHJ5LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyB3aXRoRGlhZ25vc3RpY3NUaW1pbmcgfSBmcm9tICcuLi9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuLi9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7XG4gIGNsZWFyTWFya2V0cGxhY2VzQ2FjaGUsXG4gIGdldERlY2xhcmVkTWFya2V0cGxhY2VzLFxuICByZWdpc3RlclNlZWRNYXJrZXRwbGFjZXMsXG59IGZyb20gJy4vbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgZGV0ZWN0QW5kVW5pbnN0YWxsRGVsaXN0ZWRQbHVnaW5zIH0gZnJvbSAnLi9wbHVnaW5CbG9ja2xpc3QuanMnXG5pbXBvcnQgeyBjbGVhclBsdWdpbkNhY2hlIH0gZnJvbSAnLi9wbHVnaW5Mb2FkZXIuanMnXG5pbXBvcnQgeyByZWNvbmNpbGVNYXJrZXRwbGFjZXMgfSBmcm9tICcuL3JlY29uY2lsZXIuanMnXG5pbXBvcnQge1xuICBjbGVhbnVwU2Vzc2lvblBsdWdpbkNhY2hlLFxuICBnZXRaaXBDYWNoZU1hcmtldHBsYWNlc0RpcixcbiAgZ2V0WmlwQ2FjaGVQbHVnaW5zRGlyLFxuICBpc01hcmtldHBsYWNlU291cmNlU3VwcG9ydGVkQnlaaXBDYWNoZSxcbiAgaXNQbHVnaW5aaXBDYWNoZUVuYWJsZWQsXG59IGZyb20gJy4vemlwQ2FjaGUuanMnXG5pbXBvcnQgeyBzeW5jTWFya2V0cGxhY2VzVG9aaXBDYWNoZSB9IGZyb20gJy4vemlwQ2FjaGVBZGFwdGVycy5qcydcblxuLyoqXG4gKiBJbnN0YWxsIHBsdWdpbnMgZm9yIGhlYWRsZXNzL0NDUiBtb2RlLlxuICpcbiAqIFRoaXMgaXMgdGhlIGhlYWRsZXNzIGVxdWl2YWxlbnQgb2YgcGVyZm9ybUJhY2tncm91bmRQbHVnaW5JbnN0YWxsYXRpb25zKCksXG4gKiBidXQgd2l0aG91dCBBcHBTdGF0ZSB1cGRhdGVzIChubyBVSSB0byB1cGRhdGUgaW4gaGVhZGxlc3MgbW9kZSkuXG4gKlxuICogQHJldHVybnMgdHJ1ZSBpZiBhbnkgcGx1Z2lucyB3ZXJlIGluc3RhbGxlZCAoY2FsbGVyIHNob3VsZCByZWZyZXNoIE1DUClcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGxQbHVnaW5zRm9ySGVhZGxlc3MoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHppcENhY2hlTW9kZSA9IGlzUGx1Z2luWmlwQ2FjaGVFbmFibGVkKClcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBpbnN0YWxsUGx1Z2luc0ZvckhlYWRsZXNzOiBzdGFydGluZyR7emlwQ2FjaGVNb2RlID8gJyAoemlwIGNhY2hlIG1vZGUpJyA6ICcnfWAsXG4gIClcblxuICAvLyBSZWdpc3RlciBzZWVkIG1hcmtldHBsYWNlcyAoQ0xBVURFX0NPREVfUExVR0lOX1NFRURfRElSKSBiZWZvcmUgZGlmZmluZy5cbiAgLy8gSWRlbXBvdGVudDsgbm8tb3AgaWYgc2VlZCBub3QgY29uZmlndXJlZC4gV2l0aG91dCB0aGlzLCBmaW5kTWlzc2luZ01hcmtldHBsYWNlc1xuICAvLyB3b3VsZCBzZWUgc2VlZCBlbnRyaWVzIGFzIG1pc3NpbmcgXHUyMTkyIGNsb25lIFx1MjE5MiBkZWZlYXRzIHNlZWQncyBwdXJwb3NlLlxuICAvL1xuICAvLyBJZiByZWdpc3RyYXRpb24gY2hhbmdlZCBzdGF0ZSwgY2xlYXIgY2FjaGVzIHNvIHRoZSBlYXJseSBwbHVnaW4tbG9hZCBwYXNzXG4gIC8vICh3aGljaCBydW5zIGR1cmluZyBDTEkgc3RhcnR1cCBiZWZvcmUgdGhpcyBmdW5jdGlvbikgZG9lc24ndCBrZWVwIHN0YWxlXG4gIC8vIFwibWFya2V0cGxhY2Ugbm90IGZvdW5kXCIgcmVzdWx0cy4gV2l0aG91dCB0aGlzIGNsZWFyLCBhIGZpcnN0LWJvb3QgaGVhZGxlc3NcbiAgLy8gcnVuIHdpdGggYSBzZWVkLWNhY2hlZCBwbHVnaW4gd291bGQgc2hvdyAwIHBsdWdpbiBjb21tYW5kcy9hZ2VudHMvc2tpbGxzXG4gIC8vIGluIHRoZSBpbml0IG1lc3NhZ2UgZXZlbiB0aG91Z2ggdGhlIHNlZWQgaGFzIGV2ZXJ5dGhpbmcuXG4gIGNvbnN0IHNlZWRDaGFuZ2VkID0gYXdhaXQgcmVnaXN0ZXJTZWVkTWFya2V0cGxhY2VzKClcbiAgaWYgKHNlZWRDaGFuZ2VkKSB7XG4gICAgY2xlYXJNYXJrZXRwbGFjZXNDYWNoZSgpXG4gICAgY2xlYXJQbHVnaW5DYWNoZSgnaGVhZGxlc3NQbHVnaW5JbnN0YWxsOiBzZWVkIG1hcmtldHBsYWNlcyByZWdpc3RlcmVkJylcbiAgfVxuXG4gIC8vIEVuc3VyZSB6aXAgY2FjaGUgZGlyZWN0b3J5IHN0cnVjdHVyZSBleGlzdHNcbiAgaWYgKHppcENhY2hlTW9kZSkge1xuICAgIGF3YWl0IGdldEZzSW1wbGVtZW50YXRpb24oKS5ta2RpcihnZXRaaXBDYWNoZU1hcmtldHBsYWNlc0RpcigpKVxuICAgIGF3YWl0IGdldEZzSW1wbGVtZW50YXRpb24oKS5ta2RpcihnZXRaaXBDYWNoZVBsdWdpbnNEaXIoKSlcbiAgfVxuXG4gIC8vIERlY2xhcmVkIG5vdyBpbmNsdWRlcyBhbiBpbXBsaWNpdCBjbGF1ZGUtcGx1Z2lucy1vZmZpY2lhbCBlbnRyeSB3aGVuIGFueVxuICAvLyBlbmFibGVkIHBsdWdpbiByZWZlcmVuY2VzIGl0IChzZWUgZ2V0RGVjbGFyZWRNYXJrZXRwbGFjZXMpLiBUaGlzIHJvdXRlc1xuICAvLyB0aGUgb2ZmaWNpYWwgbWFya2V0cGxhY2UgdGhyb3VnaCB0aGUgc2FtZSByZWNvbmNpbGVyIHBhdGggYXMgYW55IG90aGVyIFx1MjAxNFxuICAvLyB3aGljaCBjb21wb3NlcyBjb3JyZWN0bHkgd2l0aCBDTEFVREVfQ09ERV9QTFVHSU5fU0VFRF9ESVI6IHNlZWQgcmVnaXN0ZXJzXG4gIC8vIGl0IGluIGtub3duX21hcmtldHBsYWNlcy5qc29uLCByZWNvbmNpbGVyIGRpZmYgc2VlcyBpdCBhcyB1cFRvRGF0ZSwgbm8gY2xvbmUuXG4gIGNvbnN0IGRlY2xhcmVkQ291bnQgPSBPYmplY3Qua2V5cyhnZXREZWNsYXJlZE1hcmtldHBsYWNlcygpKS5sZW5ndGhcblxuICBjb25zdCBtZXRyaWNzID0ge1xuICAgIG1hcmtldHBsYWNlc19pbnN0YWxsZWQ6IDAsXG4gICAgZGVsaXN0ZWRfY291bnQ6IDAsXG4gIH1cblxuICAvLyBJbml0aWFsaXplIGZyb20gc2VlZENoYW5nZWQgc28gdGhlIGNhbGxlciAocHJpbnQudHMpIGNhbGxzXG4gIC8vIHJlZnJlc2hQbHVnaW5TdGF0ZSgpIFx1MjE5MiBjbGVhckNvbW1hbmRzQ2FjaGUvY2xlYXJBZ2VudERlZmluaXRpb25zQ2FjaGVcbiAgLy8gd2hlbiBzZWVkIHJlZ2lzdHJhdGlvbiBhZGRlZCBtYXJrZXRwbGFjZXMuIFdpdGhvdXQgdGhpcywgdGhlIGNhbGxlclxuICAvLyBvbmx5IHJlZnJlc2hlcyB3aGVuIGFuIGFjdHVhbCBwbHVnaW4gaW5zdGFsbCBoYXBwZW5lZC5cbiAgbGV0IHBsdWdpbnNDaGFuZ2VkID0gc2VlZENoYW5nZWRcblxuICB0cnkge1xuICAgIGlmIChkZWNsYXJlZENvdW50ID09PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ2luc3RhbGxQbHVnaW5zRm9ySGVhZGxlc3M6IG5vIG1hcmtldHBsYWNlcyBkZWNsYXJlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlY29uY2lsZSBkZWNsYXJlZCBtYXJrZXRwbGFjZXMgKHNldHRpbmdzIGludGVudCArIGltcGxpY2l0IG9mZmljaWFsKVxuICAgICAgLy8gd2l0aCBtYXRlcmlhbGl6ZWQgc3RhdGUuIFppcCBjYWNoZTogc2tpcCB1bnN1cHBvcnRlZCBzb3VyY2UgdHlwZXMuXG4gICAgICBjb25zdCByZWNvbmNpbGVSZXN1bHQgPSBhd2FpdCB3aXRoRGlhZ25vc3RpY3NUaW1pbmcoXG4gICAgICAgICdoZWFkbGVzc19tYXJrZXRwbGFjZV9yZWNvbmNpbGUnLFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIHJlY29uY2lsZU1hcmtldHBsYWNlcyh7XG4gICAgICAgICAgICBza2lwOiB6aXBDYWNoZU1vZGVcbiAgICAgICAgICAgICAgPyAoX25hbWUsIHNvdXJjZSkgPT5cbiAgICAgICAgICAgICAgICAgICFpc01hcmtldHBsYWNlU291cmNlU3VwcG9ydGVkQnlaaXBDYWNoZShzb3VyY2UpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb25Qcm9ncmVzczogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzczogaW5zdGFsbGVkIG1hcmtldHBsYWNlICR7ZXZlbnQubmFtZX1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnZmFpbGVkJykge1xuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBpbnN0YWxsUGx1Z2luc0ZvckhlYWRsZXNzOiBmYWlsZWQgdG8gaW5zdGFsbCBtYXJrZXRwbGFjZSAke2V2ZW50Lm5hbWV9OiAke2V2ZW50LmVycm9yfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICByID0+ICh7XG4gICAgICAgICAgaW5zdGFsbGVkX2NvdW50OiByLmluc3RhbGxlZC5sZW5ndGgsXG4gICAgICAgICAgdXBkYXRlZF9jb3VudDogci51cGRhdGVkLmxlbmd0aCxcbiAgICAgICAgICBmYWlsZWRfY291bnQ6IHIuZmFpbGVkLmxlbmd0aCxcbiAgICAgICAgICBza2lwcGVkX2NvdW50OiByLnNraXBwZWQubGVuZ3RoLFxuICAgICAgICB9KSxcbiAgICAgIClcblxuICAgICAgaWYgKHJlY29uY2lsZVJlc3VsdC5za2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBpbnN0YWxsUGx1Z2luc0ZvckhlYWRsZXNzOiBza2lwcGVkICR7cmVjb25jaWxlUmVzdWx0LnNraXBwZWQubGVuZ3RofSBtYXJrZXRwbGFjZShzKSB1bnN1cHBvcnRlZCBieSB6aXAgY2FjaGU6ICR7cmVjb25jaWxlUmVzdWx0LnNraXBwZWQuam9pbignLCAnKX1gLFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcmtldHBsYWNlc0NoYW5nZWQgPVxuICAgICAgICByZWNvbmNpbGVSZXN1bHQuaW5zdGFsbGVkLmxlbmd0aCArIHJlY29uY2lsZVJlc3VsdC51cGRhdGVkLmxlbmd0aFxuXG4gICAgICAvLyBDbGVhciBjYWNoZXMgc28gbmV3bHktaW5zdGFsbGVkIG1hcmtldHBsYWNlIHBsdWdpbnMgYXJlIGRpc2NvdmVyYWJsZS5cbiAgICAgIC8vIFBsdWdpbiBjYWNoaW5nIGlzIHRoZSBsb2FkZXIncyBqb2IgXHUyMDE0IGFmdGVyIGNhY2hlcyBjbGVhciwgdGhlIGNhbGxlcidzXG4gICAgICAvLyByZWZyZXNoUGx1Z2luU3RhdGUoKSBcdTIxOTIgbG9hZEFsbFBsdWdpbnMoKSB3aWxsIGNhY2hlIGFueSBtaXNzaW5nIHBsdWdpbnNcbiAgICAgIC8vIGZyb20gdGhlIG5ld2x5LW1hdGVyaWFsaXplZCBtYXJrZXRwbGFjZXMuXG4gICAgICBpZiAobWFya2V0cGxhY2VzQ2hhbmdlZCA+IDApIHtcbiAgICAgICAgY2xlYXJNYXJrZXRwbGFjZXNDYWNoZSgpXG4gICAgICAgIGNsZWFyUGx1Z2luQ2FjaGUoJ2hlYWRsZXNzUGx1Z2luSW5zdGFsbDogbWFya2V0cGxhY2VzIHJlY29uY2lsZWQnKVxuICAgICAgICBwbHVnaW5zQ2hhbmdlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgbWV0cmljcy5tYXJrZXRwbGFjZXNfaW5zdGFsbGVkID0gbWFya2V0cGxhY2VzQ2hhbmdlZFxuICAgIH1cblxuICAgIC8vIFppcCBjYWNoZTogc2F2ZSBtYXJrZXRwbGFjZSBKU09OcyBmb3Igb2ZmbGluZSBhY2Nlc3Mgb24gZXBoZW1lcmFsIGNvbnRhaW5lcnMuXG4gICAgLy8gUnVucyB1bmNvbmRpdGlvbmFsbHkgc28gdGhhdCBzdGVhZHktc3RhdGUgY29udGFpbmVycyAoYWxsIHBsdWdpbnMgaW5zdGFsbGVkKVxuICAgIC8vIHN0aWxsIHN5bmMgbWFya2V0cGxhY2UgZGF0YSB0aGF0IG1heSBoYXZlIGJlZW4gY2xvbmVkIGluIGEgcHJldmlvdXMgcnVuLlxuICAgIGlmICh6aXBDYWNoZU1vZGUpIHtcbiAgICAgIGF3YWl0IHN5bmNNYXJrZXRwbGFjZXNUb1ppcENhY2hlKClcbiAgICB9XG5cbiAgICAvLyBEZWxpc3RpbmcgZW5mb3JjZW1lbnRcbiAgICBjb25zdCBuZXdseURlbGlzdGVkID0gYXdhaXQgZGV0ZWN0QW5kVW5pbnN0YWxsRGVsaXN0ZWRQbHVnaW5zKClcbiAgICBtZXRyaWNzLmRlbGlzdGVkX2NvdW50ID0gbmV3bHlEZWxpc3RlZC5sZW5ndGhcbiAgICBpZiAobmV3bHlEZWxpc3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICBwbHVnaW5zQ2hhbmdlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAocGx1Z2luc0NoYW5nZWQpIHtcbiAgICAgIGNsZWFyUGx1Z2luQ2FjaGUoJ2hlYWRsZXNzUGx1Z2luSW5zdGFsbDogcGx1Z2lucyBjaGFuZ2VkJylcbiAgICB9XG5cbiAgICAvLyBaaXAgY2FjaGU6IHJlZ2lzdGVyIHNlc3Npb24gY2xlYW51cCBmb3IgZXh0cmFjdGVkIHBsdWdpbiB0ZW1wIGRpcnNcbiAgICBpZiAoemlwQ2FjaGVNb2RlKSB7XG4gICAgICByZWdpc3RlckNsZWFudXAoY2xlYW51cFNlc3Npb25QbHVnaW5DYWNoZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1Z2luc0NoYW5nZWRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBmaW5hbGx5IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfaGVhZGxlc3NfcGx1Z2luX2luc3RhbGwnLCBtZXRyaWNzKVxuICB9XG59XG4iLCAiLyoqXG4gKiBaaXAgQ2FjaGUgQWRhcHRlcnNcbiAqXG4gKiBJL08gaGVscGVycyBmb3IgdGhlIHBsdWdpbiB6aXAgY2FjaGUuIFRoZXNlIGZ1bmN0aW9ucyBoYW5kbGUgcmVhZGluZy93cml0aW5nXG4gKiB6aXAtY2FjaGUtbG9jYWwgbWV0YWRhdGEgZmlsZXMsIGV4dHJhY3RpbmcgWklQcyB0byBzZXNzaW9uIGRpcmVjdG9yaWVzLFxuICogYW5kIGNyZWF0aW5nIFpJUHMgZm9yIG5ld2x5IGluc3RhbGxlZCBwbHVnaW5zLlxuICpcbiAqIFRoZSB6aXAgY2FjaGUgc3RvcmVzIGRhdGEgb24gYSBtb3VudGVkIHZvbHVtZSAoZS5nLiwgRmlsZXN0b3JlKSB0aGF0IHBlcnNpc3RzXG4gKiBhY3Jvc3MgZXBoZW1lcmFsIGNvbnRhaW5lciBsaWZldGltZXMuIFRoZSBzZXNzaW9uIGNhY2hlIGlzIGEgbG9jYWwgdGVtcCBkaXJcbiAqIGZvciBleHRyYWN0ZWQgcGx1Z2lucyB1c2VkIGR1cmluZyBhIHNpbmdsZSBzZXNzaW9uLlxuICovXG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWdTYWZlIH0gZnJvbSAnLi9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQge1xuICB0eXBlIEtub3duTWFya2V0cGxhY2VzRmlsZSxcbiAgS25vd25NYXJrZXRwbGFjZXNGaWxlU2NoZW1hLFxuICB0eXBlIFBsdWdpbk1hcmtldHBsYWNlLFxuICBQbHVnaW5NYXJrZXRwbGFjZVNjaGVtYSxcbn0gZnJvbSAnLi9zY2hlbWFzLmpzJ1xuaW1wb3J0IHtcbiAgYXRvbWljV3JpdGVUb1ppcENhY2hlLFxuICBnZXRNYXJrZXRwbGFjZUpzb25SZWxhdGl2ZVBhdGgsXG4gIGdldFBsdWdpblppcENhY2hlUGF0aCxcbiAgZ2V0WmlwQ2FjaGVLbm93bk1hcmtldHBsYWNlc1BhdGgsXG59IGZyb20gJy4vemlwQ2FjaGUuanMnXG5cbi8vIFx1MjUwMFx1MjUwMCBNZXRhZGF0YSBJL08gXHUyNTAwXHUyNTAwXG5cbi8qKlxuICogUmVhZCBrbm93bl9tYXJrZXRwbGFjZXMuanNvbiBmcm9tIHRoZSB6aXAgY2FjaGUuXG4gKiBSZXR1cm5zIGVtcHR5IG9iamVjdCBpZiBmaWxlIGRvZXNuJ3QgZXhpc3QsIGNhbid0IGJlIHBhcnNlZCwgb3IgZmFpbHMgc2NoZW1hXG4gKiB2YWxpZGF0aW9uIChkYXRhIGNvbWVzIGZyb20gYSBzaGFyZWQgbW91bnRlZCB2b2x1bWUgXHUyMDE0IG90aGVyIGNvbnRhaW5lcnMgbWF5IHdyaXRlKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRaaXBDYWNoZUtub3duTWFya2V0cGxhY2VzKCk6IFByb21pc2U8S25vd25NYXJrZXRwbGFjZXNGaWxlPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGdldFppcENhY2hlS25vd25NYXJrZXRwbGFjZXNQYXRoKCksICd1dGYtOCcpXG4gICAgY29uc3QgcGFyc2VkID0gS25vd25NYXJrZXRwbGFjZXNGaWxlU2NoZW1hKCkuc2FmZVBhcnNlKGpzb25QYXJzZShjb250ZW50KSlcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBJbnZhbGlkIGtub3duX21hcmtldHBsYWNlcy5qc29uIGluIHppcCBjYWNoZTogJHtwYXJzZWQuZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZC5kYXRhXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7fVxuICB9XG59XG5cbi8qKlxuICogV3JpdGUga25vd25fbWFya2V0cGxhY2VzLmpzb24gdG8gdGhlIHppcCBjYWNoZSBhdG9taWNhbGx5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVaaXBDYWNoZUtub3duTWFya2V0cGxhY2VzKFxuICBkYXRhOiBLbm93bk1hcmtldHBsYWNlc0ZpbGUsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgYXRvbWljV3JpdGVUb1ppcENhY2hlKFxuICAgIGdldFppcENhY2hlS25vd25NYXJrZXRwbGFjZXNQYXRoKCksXG4gICAganNvblN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSxcbiAgKVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgTWFya2V0cGxhY2UgSlNPTiBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBSZWFkIGEgbWFya2V0cGxhY2UgSlNPTiBmaWxlIGZyb20gdGhlIHppcCBjYWNoZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRNYXJrZXRwbGFjZUpzb24oXG4gIG1hcmtldHBsYWNlTmFtZTogc3RyaW5nLFxuKTogUHJvbWlzZTxQbHVnaW5NYXJrZXRwbGFjZSB8IG51bGw+IHtcbiAgY29uc3QgemlwQ2FjaGVQYXRoID0gZ2V0UGx1Z2luWmlwQ2FjaGVQYXRoKClcbiAgaWYgKCF6aXBDYWNoZVBhdGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHJlbFBhdGggPSBnZXRNYXJrZXRwbGFjZUpzb25SZWxhdGl2ZVBhdGgobWFya2V0cGxhY2VOYW1lKVxuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4oemlwQ2FjaGVQYXRoLCByZWxQYXRoKVxuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmdWxsUGF0aCwgJ3V0Zi04JylcbiAgICBjb25zdCBwYXJzZWQgPSBqc29uUGFyc2UoY29udGVudClcbiAgICBjb25zdCByZXN1bHQgPSBQbHVnaW5NYXJrZXRwbGFjZVNjaGVtYSgpLnNhZmVQYXJzZShwYXJzZWQpXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYEludmFsaWQgbWFya2V0cGxhY2UgSlNPTiBmb3IgJHttYXJrZXRwbGFjZU5hbWV9OiAke3Jlc3VsdC5lcnJvcn1gLFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogU2F2ZSBhIG1hcmtldHBsYWNlIEpTT04gdG8gdGhlIHppcCBjYWNoZSBmcm9tIGl0cyBpbnN0YWxsIGxvY2F0aW9uLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU1hcmtldHBsYWNlSnNvblRvWmlwQ2FjaGUoXG4gIG1hcmtldHBsYWNlTmFtZTogc3RyaW5nLFxuICBpbnN0YWxsTG9jYXRpb246IHN0cmluZyxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB6aXBDYWNoZVBhdGggPSBnZXRQbHVnaW5aaXBDYWNoZVBhdGgoKVxuICBpZiAoIXppcENhY2hlUGF0aCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkTWFya2V0cGxhY2VKc29uQ29udGVudChpbnN0YWxsTG9jYXRpb24pXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsUGF0aCA9IGdldE1hcmtldHBsYWNlSnNvblJlbGF0aXZlUGF0aChtYXJrZXRwbGFjZU5hbWUpXG4gICAgYXdhaXQgYXRvbWljV3JpdGVUb1ppcENhY2hlKGpvaW4oemlwQ2FjaGVQYXRoLCByZWxQYXRoKSwgY29udGVudClcbiAgfVxufVxuXG4vKipcbiAqIFJlYWQgbWFya2V0cGxhY2UuanNvbiBjb250ZW50IGZyb20gYSBjbG9uZWQgbWFya2V0cGxhY2UgZGlyZWN0b3J5IG9yIGZpbGUuXG4gKiBGb3IgZGlyZWN0b3J5IHNvdXJjZXM6IGNoZWNrcyAuY2xhdWRlLXBsdWdpbi9tYXJrZXRwbGFjZS5qc29uLCBtYXJrZXRwbGFjZS5qc29uXG4gKiBGb3IgVVJMIHNvdXJjZXM6IHRoZSBpbnN0YWxsTG9jYXRpb24gSVMgdGhlIG1hcmtldHBsYWNlIEpTT04gZmlsZSBpdHNlbGYuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlYWRNYXJrZXRwbGFjZUpzb25Db250ZW50KGRpcjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXG4gICAgam9pbihkaXIsICcuY2xhdWRlLXBsdWdpbicsICdtYXJrZXRwbGFjZS5qc29uJyksXG4gICAgam9pbihkaXIsICdtYXJrZXRwbGFjZS5qc29uJyksXG4gICAgZGlyLCAvLyBGb3IgVVJMIHNvdXJjZXMsIGluc3RhbGxMb2NhdGlvbiBJUyB0aGUgbWFya2V0cGxhY2UgSlNPTiBmaWxlXG4gIF1cbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVhZEZpbGUoY2FuZGlkYXRlLCAndXRmLTgnKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRU5PRU5UIChkb2Vzbid0IGV4aXN0KSBvciBFSVNESVIgKGRpcmVjdG9yeSkgXHUyMDE0IHRyeSBuZXh0XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogU3luYyBtYXJrZXRwbGFjZSBkYXRhIHRvIHppcCBjYWNoZSBmb3Igb2ZmbGluZSBhY2Nlc3MuXG4gKiBTYXZlcyBtYXJrZXRwbGFjZSBKU09OcyBhbmQgbWVyZ2VzIHdpdGggcHJldmlvdXNseSBjYWNoZWQgZGF0YVxuICogc28gZXBoZW1lcmFsIGNvbnRhaW5lcnMgY2FuIGFjY2VzcyBtYXJrZXRwbGFjZXMgd2l0aG91dCByZS1jbG9uaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY01hcmtldHBsYWNlc1RvWmlwQ2FjaGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFJlYWQtb25seSBpdGVyYXRpb24gXHUyMDE0IFNhZmUgdmFyaWFudCBzbyBhIGNvcnJ1cHRlZCBjb25maWcgZG9lc24ndCB0aHJvdy5cbiAgLy8gVGhpcyBydW5zIGR1cmluZyBzdGFydHVwIHBhdGhzOyBhIHRocm93IGhlcmUgY2FzY2FkZXMgdG8gdGhlIHNhbWVcbiAgLy8gdHJ5LWJsb2NrIHRoYXQgY2F0Y2hlcyBsb2FkQWxsUGx1Z2lucyBmYWlsdXJlcy5cbiAgY29uc3Qga25vd25NYXJrZXRwbGFjZXMgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWdTYWZlKClcblxuICAvLyBTYXZlIG1hcmtldHBsYWNlIEpTT05zIHRvIHppcCBjYWNoZVxuICBmb3IgKGNvbnN0IFtuYW1lLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXMoa25vd25NYXJrZXRwbGFjZXMpKSB7XG4gICAgaWYgKCFlbnRyeS5pbnN0YWxsTG9jYXRpb24pIGNvbnRpbnVlXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNhdmVNYXJrZXRwbGFjZUpzb25Ub1ppcENhY2hlKG5hbWUsIGVudHJ5Lmluc3RhbGxMb2NhdGlvbilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGBGYWlsZWQgdG8gc2F2ZSBtYXJrZXRwbGFjZSBKU09OIGZvciAke25hbWV9OiAke2Vycm9yfWApXG4gICAgfVxuICB9XG5cbiAgLy8gTWVyZ2Ugd2l0aCBwcmV2aW91c2x5IGNhY2hlZCBkYXRhIChlcGhlbWVyYWwgY29udGFpbmVycyBsb3NlIGdsb2JhbCBjb25maWcpXG4gIGNvbnN0IHppcENhY2hlS25vd25NYXJrZXRwbGFjZXMgPSBhd2FpdCByZWFkWmlwQ2FjaGVLbm93bk1hcmtldHBsYWNlcygpXG4gIGNvbnN0IG1lcmdlZEtub3duTWFya2V0cGxhY2VzOiBLbm93bk1hcmtldHBsYWNlc0ZpbGUgPSB7XG4gICAgLi4uemlwQ2FjaGVLbm93bk1hcmtldHBsYWNlcyxcbiAgICAuLi5rbm93bk1hcmtldHBsYWNlcyxcbiAgfVxuICBhd2FpdCB3cml0ZVppcENhY2hlS25vd25NYXJrZXRwbGFjZXMobWVyZ2VkS25vd25NYXJrZXRwbGFjZXMpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBSUE7QUFOQSxTQUFTLFlBQUFBLFdBQVUsWUFBWTtBQUMvQixTQUFTLGVBQWU7OztBQ0F4QjtBQUZBLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsT0FBQUMsWUFBVztBQUdwQjtBQUNBO0FBQ0E7QUFDQTtB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LEtBQUssSUFBSSxRQUFRLE9BQU8sT0FBSztBQUNyRCxhQUFPLENBQUMsc0JBQXNCLElBQUksRUFBRSxJQUFJO0FBQUEsSUFDMUMsQ0FBQztBQUVELFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILEtBQUs7QUFBQSxRQUNILEdBQUcsS0FBSztBQUFBLFFBQ1IsT0FBTyxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsUUFBUTtBQUFBLFFBQ3ZDLFNBQVMsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLFVBQVU7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPO0FBQUEsSUFDTCxVQUFVLEVBQUUsT0FBTyxTQUFTLE9BQU87QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsicmVhZEZpbGUiLCAiVVJMIiwgIlVSTCIsICJVUkwiLCAiVVJMIiwgImluaXRfcHJvbXB0IiwgImluaXRfY29uc3RhbnRzIiwgImluaXRfYXV0aCIsICJpbml0X2F1dGgiLCAicmFuZG9tVVVJRCIsICJqb2luIiwgImpvaW4iLCAiaW5pdF90eXBlcyIsICJyYW5kb21VVUlEIiwgImVycm9yTWVzc2FnZSIsICJyZWFkRmlsZSJdCn0K
