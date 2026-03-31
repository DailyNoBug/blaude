#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  MessageSelector_exports,
  StructuredIO,
  buildSystemInitMessage,
  cronJitterConfig_exports,
  cronScheduler_exports,
  extractInboundMessageFields,
  init_MessageSelector,
  init_cronJitterConfig,
  init_cronScheduler,
  ndjsonSafeStringify,
  outputSchema,
  permissionPromptToolResultToPermissionDecision,
  processUserInput,
  reconcileMarketplaces,
  sdkCompatToolName
} from "./chunk-DLH5UBJQ.mjs";
import {
  restoreAgentFromSession,
  restoreSessionStateFromLog,
  skillChangeDetector
} from "./chunk-OXTLHPGX.mjs";
import {
  detectAndUninstallDelistedPlugins
} from "./chunk-MKI4OCY2.mjs";
import "./chunk-5FYLY554.mjs";
import {
  externalMetadataToAppState
} from "./chunk-3QR4GTUC.mjs";
import {
  getSessionState,
  notifySessionMetadataChanged,
  notifySessionStateChanged,
  setPermissionModeChangedListener,
  setSessionMetadataChangedListener,
  setSessionStateChangedListener
} from "./chunk-P7A6JCZG.mjs";
import {
  init_udsMessaging,
  udsMessaging_exports
} from "./chunk-QLZJRPHV.mjs";
import {
  HybridTransport,
  WebSocketTransport
} from "./chunk-YYJJ7SWO.mjs";
import {
  CCRClient,
  CCRInitError,
  SSETransport
} from "./chunk-VDOV64T5.mjs";
import "./chunk-WBJL7DYB.mjs";
import {
  resolveAndPrepend
} from "./chunk-YS6AME2W.mjs";
import {
  getPollIntervalConfig
} from "./chunk-QEH65IKZ.mjs";
import "./chunk-AWPTVMZY.mjs";
import {
  init_toolPool,
  mergeAndFilterTools
} from "./chunk-CU5ENGAS.mjs";
import {
  init_refresh,
  refreshActivePlugins
} from "./chunk-TNHLYHX2.mjs";
import {
  downloadUserSettings,
  init_settingsSync,
  redownloadUserSettings
} from "./chunk-Z5GDNPKO.mjs";
import {
  init_mappers,
  localCommandOutputToSDKAssistantMessage,
  toInternalMessages,
  toSDKCompactMetadata,
  toSDKRateLimitInfo
} from "./chunk-5W6WSU52.mjs";
import {
  generateSessionTitle,
  init_sessionTitle
} from "./chunk-EGH5V7EZ.mjs";
import "./chunk-JTIRMQSJ.mjs";
import "./chunk-2DL5BBUL.mjs";
import {
  ChannelMessageNotificationSchema,
  findChannelEntry,
  gateChannelServer,
  init_channelNotification,
  wrapChannelMessage
} from "./chunk-OUVCJTEA.mjs";
import {
  init_channelAllowlist,
  isChannelAllowlisted,
  isChannelsEnabled
} from "./chunk-L22OG2YZ.mjs";
import "./chunk-LLT4FSGE.mjs";
import {
  collectContextData,
  init_context_noninteractive
} from "./chunk-GDKW6U3P.mjs";
import "./chunk-P42WH56V.mjs";
import {
  init_sideQuestion,
  runSideQuestion
} from "./chunk-PIO73LAU.mjs";
import "./chunk-2VYH2CHZ.mjs";
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
  SYNTHETIC_MESSAGES,
  SYNTHETIC_OUTPUT_TOOL_NAME,
  SandboxManager,
  WEB_SEARCH_TOOL_NAME,
  accumulateUsage,
  applySettingsChange,
  areMcpConfigsEqual,
  asSessionId,
  asSystemPrompt,
  assembleToolPool,
  atomicWriteToZipCache,
  buildBridgeConnectUrl,
  categorizeRetryableAPIError,
  checkGroveForNonInteractive,
  cleanupSessionPluginCache,
  clearCommandsCache,
  clearMarketplacesCache,
  clearPluginCache,
  clearServerCache,
  commandBelongsToServer,
  connectToServer,
  coordinatorMode_exports,
  countToolCalls,
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
  fileHistoryMakeSnapshot,
  fileHistoryRewind,
  filterMcpServersByPolicy,
  filterToolsByDenyRules,
  filterToolsByServer,
  finalizePendingAsyncHooks,
  findModifiedFiles,
  findUnresolvedToolUse,
  flushSessionStorage,
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
  getScratchpadDir,
  getSlashCommandToolSkills,
  getSystemContext,
  getSystemPrompt,
  getUserContext,
  getZipCacheKnownMarketplacesPath,
  getZipCacheMarketplacesDir,
  getZipCachePluginsDir,
  gracefulShutdown,
  gracefulShutdownSync,
  handleOrphanedPermission,
  hasCommandsInQueue,
  hasPermissionsToUseTool,
  headlessProfilerCheckpoint,
  headlessProfilerStartTurn,
  hydrateFromCCRv2InternalEvents,
  hydrateRemoteSession,
  init_AsyncHookRegistry,
  init_Shell,
  init_SyntheticOutputTool,
  init_abortController,
  init_applySettingsChange,
  init_auth as init_auth2,
  init_auth2 as init_auth3,
  init_bridgeStatusUtil,
  init_changeDetector,
  init_claude,
  init_claudeAiLimits,
  init_client,
  init_combinedAbortSignal,
  init_commandLifecycle,
  init_commands2 as init_commands,
  init_config as init_config2,
  init_constants,
  init_constants2,
  init_context,
  init_conversationRecovery,
  init_coordinatorMode,
  init_cost_tracker,
  init_effort,
  init_elicitationHandler,
  init_errors as init_errors2,
  init_extractMemories,
  init_fileHistory,
  init_filesApi,
  init_filesystem,
  init_forkedAgent,
  init_framework,
  init_generators,
  init_gracefulShutdown,
  init_grove,
  init_headlessProfiler,
  init_hookEvents,
  init_hookHelpers,
  init_hooks2 as init_hooks,
  init_ids,
  init_loadAgentsDir,
  init_logging,
  init_marketplaceManager,
  init_memdir,
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
  init_prompts2 as init_prompts,
  init_query,
  init_queryHelpers,
  init_queryProfiler,
  init_remoteManagedSettings,
  init_sandbox_adapter,
  init_sdkEventQueue,
  init_sessionStart,
  init_sessionStorage,
  init_shellToolUtils,
  init_snipCompact,
  init_snipProjection,
  init_stopTask,
  init_systemPromptType,
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
  isResultSuccessful,
  isScratchpadEnabled,
  isShutdownApproved,
  isShuttingDown,
  loadAgentsDir_exports,
  loadAllPluginsCacheOnly,
  loadConversationForResume,
  loadKnownMarketplacesConfigSafe,
  loadMemoryPrompt,
  logDebug,
  logHeadlessProfilerTurn,
  logQueryProfileReport,
  logSuggestionOutcome,
  logSuggestionSuppressed,
  markMessagesAsRead,
  modelSupportsAdaptiveThinking,
  modelSupportsEffort,
  modelSupportsMaxEffort,
  normalizeMessage,
  notifyCommandLifecycle,
  parseAgentsFromJson,
  peek,
  performMCPOAuthFlow,
  proactive_exports,
  processSessionStartHooks,
  processSetupHooks,
  prompt_exports2 as prompt_exports,
  query,
  readUnreadMessages,
  reconnectMcpServerImpl,
  recordAttributionSnapshot,
  recordTranscript,
  registerHookEventHandler,
  registerSeedMarketplaces,
  registerStructuredOutputEnforcement,
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
  setCwd,
  setInternalEventReader,
  setInternalEventWriter,
  setMcpServerEnabled,
  settingsChangeDetector,
  setupSdkMcpClients,
  setupVscodeSdkMcp,
  shouldEnableThinkingByDefault,
  snipCompact_exports,
  snipProjection_exports,
  startQueryProfile,
  statusListeners,
  stopTask,
  subscribeToCommandQueue,
  takeInitialUserMessage,
  transitionPermissionMode,
  tryGenerateSuggestion,
  updateUsage,
  uploadSessionFiles,
  validateUuid,
  waitForRemoteManagedSettingsToLoad
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import {
  EMPTY_USAGE,
  getSessionIngressAuthToken,
  init_sessionIngressAuth
} from "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import {
  READ_FILE_STATE_CACHE_SIZE,
  cloneFileStateCache,
  createFileStateCacheWithSizeLimit,
  init_fileStateCache,
  mergeFileStateCaches
} from "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import {
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import {
  ElicitRequestSchema,
  ElicitationCompleteNotificationSchema,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import {
  init_Tool,
  toolMatchesName
} from "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import {
  init_tasks,
  init_teamHelpers,
  removeTeammateFromTeamFile,
  unassignTeammateTasks
} from "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import {
  incrementPromptCount,
  init_commitAttribution
} from "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-V7ZPGO35.mjs";
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
  getGlobalConfig,
  getMainLoopModel,
  getMcpPrefix,
  getSettingsWithSources,
  getSettings_DEPRECATED,
  hasAutoMemPathOverride,
  init_auth,
  init_awsAuthStatusManager,
  init_betas,
  init_config2 as init_config,
  init_fastMode,
  init_growthbook,
  init_last,
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
  last_default,
  modelDisplayString,
  modelSupportsAutoMode,
  omit_default,
  parseUserSpecifiedModel,
  reject_default,
  runWithWorkload,
  uniqBy_default
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  expandPath,
  init_path
} from "./chunk-Q64VCQQA.mjs";
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
import {
  init_strip_ansi,
  stripAnsi
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
  LOCAL_COMMAND_STDERR_TAG,
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
  getModelUsage,
  getSessionId,
  getTotalAPIDuration,
  getTotalCostUSD,
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

// src/QueryEngine.ts
init_bun_bundle();
init_last();
init_state();
init_claude();
init_logging();
init_strip_ansi();
init_commands();
init_xml();
init_cost_tracker();
init_memdir();
init_paths();
init_query();
init_errors2();
init_Tool();
init_SyntheticOutputTool();
init_abortController();
init_config();
init_cwd();
init_envUtils();
init_fastMode();
init_fileHistory();
init_fileStateCache();
init_headlessProfiler();
init_hookHelpers();
init_log();
init_messages();
init_model();
init_pluginLoader();
import { randomUUID } from "crypto";

// src/utils/queryContext.ts
init_prompts();
init_context();
init_abortController();
init_model();
init_systemPromptType();
init_thinking();
async function fetchSystemPromptParts({
  tools,
  mainLoopModel,
  additionalWorkingDirectories,
  mcpClients,
  customSystemPrompt
}) {
  const [defaultSystemPrompt, userContext, systemContext] = await Promise.all([
    customSystemPrompt !== void 0 ? Promise.resolve([]) : getSystemPrompt(
      tools,
      mainLoopModel,
      additionalWorkingDirectories,
      mcpClients
    ),
    getUserContext(),
    customSystemPrompt !== void 0 ? Promise.resolve({}) : getSystemContext()
  ]);
  return { defaultSystemPrompt, userContext, systemContext };
}
async function buildSideQuestionFallbackParams({
  tools,
  commands,
  mcpClients,
  messages,
  readFileState,
  getAppState,
  setAppState,
  customSystemPrompt,
  appendSystemPrompt,
  thinkingConfig,
  agents
}) {
  const mainLoopModel = getMainLoopModel();
  const appState = getAppState();
  const { defaultSystemPrompt, userContext, systemContext } = await fetchSystemPromptParts({
    tools,
    mainLoopModel,
    additionalWorkingDirectories: Array.from(
      appState.toolPermissionContext.additionalWorkingDirectories.keys()
    ),
    mcpClients,
    customSystemPrompt
  });
  const systemPrompt = asSystemPrompt([
    ...customSystemPrompt !== void 0 ? [customSystemPrompt] : defaultSystemPrompt,
    ...appendSystemPrompt ? [appendSystemPrompt] : []
  ]);
  const last = messages.at(-1);
  const forkContextMessages = last?.type === "assistant" && last.message.stop_reason === null ? messages.slice(0, -1) : messages;
  const toolUseContext = {
    options: {
      commands,
      debug: false,
      mainLoopModel,
      tools,
      verbose: false,
      thinkingConfig: thinkingConfig ?? (shouldEnableThinkingByDefault() !== false ? { type: "adaptive" } : { type: "disabled" }),
      mcpClients,
      mcpResources: {},
      isNonInteractiveSession: true,
      agentDefinitions: { activeAgents: agents, allAgents: [] },
      customSystemPrompt,
      appendSystemPrompt
    },
    abortController: createAbortController(),
    readFileState,
    getAppState,
    setAppState,
    messages: forkContextMessages,
    setInProgressToolUseIDs: () => {
    },
    setResponseLength: () => {
    },
    updateFileHistoryState: () => {
    },
    updateAttributionState: () => {
    }
  };
  return {
    systemPrompt,
    userContext,
    systemContext,
    toolUseContext,
    forkContextMessages
  };
}

// src/QueryEngine.ts
init_Shell();
init_sessionStorage();
init_systemPromptType();
init_systemTheme();
init_thinking();
init_mappers();
init_filesystem();
init_queryHelpers();
var messageSelector = () => (init_MessageSelector(), __toCommonJS(MessageSelector_exports));
var getCoordinatorUserContext = feature("COORDINATOR_MODE") ? (init_coordinatorMode(), __toCommonJS(coordinatorMode_exports)).getCoordinatorUserContext : () => ({});
var snipModule = feature("HISTORY_SNIP") ? (init_snipCompact(), __toCommonJS(snipCompact_exports)) : null;
var snipProjection = feature("HISTORY_SNIP") ? (init_snipProjection(), __toCommonJS(snipProjection_exports)) : null;
var QueryEngine = class {
  config;
  mutableMessages;
  abortController;
  permissionDenials;
  totalUsage;
  hasHandledOrphanedPermission = false;
  readFileState;
  // Turn-scoped skill discovery tracking (feeds was_discovered on
  // tengu_skill_tool_invocation). Must persist across the two
  // processUserInputContext rebuilds inside submitMessage, but is cleared
  // at the start of each submitMessage to avoid unbounded growth across
  // many turns in SDK mode.
  discoveredSkillNames = /* @__PURE__ */ new Set();
  loadedNestedMemoryPaths = /* @__PURE__ */ new Set();
  constructor(config) {
    this.config = config;
    this.mutableMessages = config.initialMessages ?? [];
    this.abortController = config.abortController ?? createAbortController();
    this.permissionDenials = [];
    this.readFileState = config.readFileCache;
    this.totalUsage = EMPTY_USAGE;
  }
  async *submitMessage(prompt, options) {
    const {
      cwd: cwd2,
      commands,
      tools,
      mcpClients,
      verbose = false,
      thinkingConfig,
      maxTurns,
      maxBudgetUsd,
      taskBudget,
      canUseTool,
      customSystemPrompt,
      appendSystemPrompt,
      userSpecifiedModel,
      fallbackModel,
      jsonSchema,
      getAppState,
      setAppState,
      replayUserMessages = false,
      includePartialMessages = false,
      agents = [],
      setSDKStatus,
      orphanedPermission
    } = this.config;
    this.discoveredSkillNames.clear();
    setCwd(cwd2);
    const persistSession = !isSessionPersistenceDisabled();
    const startTime = Date.now();
    const wrappedCanUseTool = async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => {
      const result2 = await canUseTool(
        tool,
        input,
        toolUseContext,
        assistantMessage,
        toolUseID,
        forceDecision
      );
      if (result2.behavior !== "allow") {
        this.permissionDenials.push({
          tool_name: sdkCompatToolName(tool.name),
          tool_use_id: toolUseID,
          tool_input: input
        });
      }
      return result2;
    };
    const initialAppState = getAppState();
    const initialMainLoopModel = userSpecifiedModel ? parseUserSpecifiedModel(userSpecifiedModel) : getMainLoopModel();
    const initialThinkingConfig = thinkingConfig ? thinkingConfig : shouldEnableThinkingByDefault() !== false ? { type: "adaptive" } : { type: "disabled" };
    headlessProfilerCheckpoint("before_getSystemPrompt");
    const customPrompt = typeof customSystemPrompt === "string" ? customSystemPrompt : void 0;
    const {
      defaultSystemPrompt,
      userContext: baseUserContext,
      systemContext
    } = await fetchSystemPromptParts({
      tools,
      mainLoopModel: initialMainLoopModel,
      additionalWorkingDirectories: Array.from(
        initialAppState.toolPermissionContext.additionalWorkingDirectories.keys()
      ),
      mcpClients,
      customSystemPrompt: customPrompt
    });
    headlessProfilerCheckpoint("after_getSystemPrompt");
    const userContext = {
      ...baseUserContext,
      ...getCoordinatorUserContext(
        mcpClients,
        isScratchpadEnabled() ? getScratchpadDir() : void 0
      )
    };
    const memoryMechanicsPrompt = customPrompt !== void 0 && hasAutoMemPathOverride() ? await loadMemoryPrompt() : null;
    const systemPrompt = asSystemPrompt([
      ...customPrompt !== void 0 ? [customPrompt] : defaultSystemPrompt,
      ...memoryMechanicsPrompt ? [memoryMechanicsPrompt] : [],
      ...appendSystemPrompt ? [appendSystemPrompt] : []
    ]);
    const hasStructuredOutputTool = tools.some(
      (t) => toolMatchesName(t, SYNTHETIC_OUTPUT_TOOL_NAME)
    );
    if (jsonSchema && hasStructuredOutputTool) {
      registerStructuredOutputEnforcement(setAppState, getSessionId());
    }
    let processUserInputContext = {
      messages: this.mutableMessages,
      // Slash commands that mutate the message array (e.g. /force-snip)
      // call setMessages(fn).  In interactive mode this writes back to
      // AppState; in print mode we write back to mutableMessages so the
      // rest of the query loop (push at :389, snapshot at :392) sees
      // the result.  The second processUserInputContext below (after
      // slash-command processing) keeps the no-op — nothing else calls
      // setMessages past that point.
      setMessages: (fn) => {
        this.mutableMessages = fn(this.mutableMessages);
      },
      onChangeAPIKey: () => {
      },
      handleElicitation: this.config.handleElicitation,
      options: {
        commands,
        debug: false,
        // we use stdout, so don't want to clobber it
        tools,
        verbose,
        mainLoopModel: initialMainLoopModel,
        thinkingConfig: initialThinkingConfig,
        mcpClients,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: true,
        customSystemPrompt,
        appendSystemPrompt,
        agentDefinitions: { activeAgents: agents, allAgents: [] },
        theme: resolveThemeSetting(getGlobalConfig().theme),
        maxBudgetUsd
      },
      getAppState,
      setAppState,
      abortController: this.abortController,
      readFileState: this.readFileState,
      nestedMemoryAttachmentTriggers: /* @__PURE__ */ new Set(),
      loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
      dynamicSkillDirTriggers: /* @__PURE__ */ new Set(),
      discoveredSkillNames: this.discoveredSkillNames,
      setInProgressToolUseIDs: () => {
      },
      setResponseLength: () => {
      },
      updateFileHistoryState: (updater) => {
        setAppState((prev) => {
          const updated = updater(prev.fileHistory);
          if (updated === prev.fileHistory) return prev;
          return { ...prev, fileHistory: updated };
        });
      },
      updateAttributionState: (updater) => {
        setAppState((prev) => {
          const updated = updater(prev.attribution);
          if (updated === prev.attribution) return prev;
          return { ...prev, attribution: updated };
        });
      },
      setSDKStatus
    };
    if (orphanedPermission && !this.hasHandledOrphanedPermission) {
      this.hasHandledOrphanedPermission = true;
      for await (const message of handleOrphanedPermission(
        orphanedPermission,
        tools,
        this.mutableMessages,
        processUserInputContext
      )) {
        yield message;
      }
    }
    const {
      messages: messagesFromUserInput,
      shouldQuery,
      allowedTools,
      model: modelFromUserInput,
      resultText
    } = await processUserInput({
      input: prompt,
      mode: "prompt",
      setToolJSX: () => {
      },
      context: {
        ...processUserInputContext,
        messages: this.mutableMessages
      },
      messages: this.mutableMessages,
      uuid: options?.uuid,
      isMeta: options?.isMeta,
      querySource: "sdk"
    });
    this.mutableMessages.push(...messagesFromUserInput);
    const messages = [...this.mutableMessages];
    if (persistSession && messagesFromUserInput.length > 0) {
      const transcriptPromise = recordTranscript(messages);
      if (isBareMode()) {
        void transcriptPromise;
      } else {
        await transcriptPromise;
        if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
          await flushSessionStorage();
        }
      }
    }
    const replayableMessages = messagesFromUserInput.filter(
      (msg) => msg.type === "user" && !msg.isMeta && // Skip synthetic caveat messages
      !msg.toolUseResult && // Skip tool results (they'll be acked from query)
      messageSelector().selectableUserMessagesFilter(msg) || // Skip non-user-authored messages (task notifications, etc.)
      msg.type === "system" && msg.subtype === "compact_boundary"
      // Always ack compact boundaries
    );
    const messagesToAck = replayUserMessages ? replayableMessages : [];
    setAppState((prev) => ({
      ...prev,
      toolPermissionContext: {
        ...prev.toolPermissionContext,
        alwaysAllowRules: {
          ...prev.toolPermissionContext.alwaysAllowRules,
          command: allowedTools
        }
      }
    }));
    const mainLoopModel = modelFromUserInput ?? initialMainLoopModel;
    processUserInputContext = {
      messages,
      setMessages: () => {
      },
      onChangeAPIKey: () => {
      },
      handleElicitation: this.config.handleElicitation,
      options: {
        commands,
        debug: false,
        tools,
        verbose,
        mainLoopModel,
        thinkingConfig: initialThinkingConfig,
        mcpClients,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: true,
        customSystemPrompt,
        appendSystemPrompt,
        theme: resolveThemeSetting(getGlobalConfig().theme),
        agentDefinitions: { activeAgents: agents, allAgents: [] },
        maxBudgetUsd
      },
      getAppState,
      setAppState,
      abortController: this.abortController,
      readFileState: this.readFileState,
      nestedMemoryAttachmentTriggers: /* @__PURE__ */ new Set(),
      loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
      dynamicSkillDirTriggers: /* @__PURE__ */ new Set(),
      discoveredSkillNames: this.discoveredSkillNames,
      setInProgressToolUseIDs: () => {
      },
      setResponseLength: () => {
      },
      updateFileHistoryState: processUserInputContext.updateFileHistoryState,
      updateAttributionState: processUserInputContext.updateAttributionState,
      setSDKStatus
    };
    headlessProfilerCheckpoint("before_skills_plugins");
    const [skills, { enabled: enabledPlugins }] = await Promise.all([
      getSlashCommandToolSkills(getCwd()),
      loadAllPluginsCacheOnly()
    ]);
    headlessProfilerCheckpoint("after_skills_plugins");
    yield buildSystemInitMessage({
      tools,
      mcpClients,
      model: mainLoopModel,
      permissionMode: initialAppState.toolPermissionContext.mode,
      // TODO: avoid the cast
      commands,
      agents,
      skills,
      plugins: enabledPlugins,
      fastMode: initialAppState.fastMode
    });
    headlessProfilerCheckpoint("system_message_yielded");
    if (!shouldQuery) {
      for (const msg of messagesFromUserInput) {
        if (msg.type === "user" && typeof msg.message.content === "string" && (msg.message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || msg.message.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`) || msg.isCompactSummary)) {
          yield {
            type: "user",
            message: {
              ...msg.message,
              content: stripAnsi(msg.message.content)
            },
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: msg.uuid,
            timestamp: msg.timestamp,
            isReplay: !msg.isCompactSummary,
            isSynthetic: msg.isMeta || msg.isVisibleInTranscriptOnly
          };
        }
        if (msg.type === "system" && msg.subtype === "local_command" && typeof msg.content === "string" && (msg.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || msg.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`))) {
          yield localCommandOutputToSDKAssistantMessage(msg.content, msg.uuid);
        }
        if (msg.type === "system" && msg.subtype === "compact_boundary") {
          yield {
            type: "system",
            subtype: "compact_boundary",
            session_id: getSessionId(),
            uuid: msg.uuid,
            compact_metadata: toSDKCompactMetadata(msg.compactMetadata)
          };
        }
      }
      if (persistSession) {
        await recordTranscript(messages);
        if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
          await flushSessionStorage();
        }
      }
      yield {
        type: "result",
        subtype: "success",
        is_error: false,
        duration_ms: Date.now() - startTime,
        duration_api_ms: getTotalAPIDuration(),
        num_turns: messages.length - 1,
        result: resultText ?? "",
        stop_reason: null,
        session_id: getSessionId(),
        total_cost_usd: getTotalCostUSD(),
        usage: this.totalUsage,
        modelUsage: getModelUsage(),
        permission_denials: this.permissionDenials,
        fast_mode_state: getFastModeState(
          mainLoopModel,
          initialAppState.fastMode
        ),
        uuid: randomUUID()
      };
      return;
    }
    if (fileHistoryEnabled() && persistSession) {
      messagesFromUserInput.filter(messageSelector().selectableUserMessagesFilter).forEach((message) => {
        void fileHistoryMakeSnapshot(
          (updater) => {
            setAppState((prev) => ({
              ...prev,
              fileHistory: updater(prev.fileHistory)
            }));
          },
          message.uuid
        );
      });
    }
    let currentMessageUsage = EMPTY_USAGE;
    let turnCount = 1;
    let hasAcknowledgedInitialMessages = false;
    let structuredOutputFromTool;
    let lastStopReason = null;
    const errorLogWatermark = getInMemoryErrors().at(-1);
    const initialStructuredOutputCalls = jsonSchema ? countToolCalls(this.mutableMessages, SYNTHETIC_OUTPUT_TOOL_NAME) : 0;
    for await (const message of query({
      messages,
      systemPrompt,
      userContext,
      systemContext,
      canUseTool: wrappedCanUseTool,
      toolUseContext: processUserInputContext,
      fallbackModel,
      querySource: "sdk",
      maxTurns,
      taskBudget
    })) {
      if (message.type === "assistant" || message.type === "user" || message.type === "system" && message.subtype === "compact_boundary") {
        if (persistSession && message.type === "system" && message.subtype === "compact_boundary") {
          const tailUuid = message.compactMetadata?.preservedSegment?.tailUuid;
          if (tailUuid) {
            const tailIdx = this.mutableMessages.findLastIndex(
              (m) => m.uuid === tailUuid
            );
            if (tailIdx !== -1) {
              await recordTranscript(this.mutableMessages.slice(0, tailIdx + 1));
            }
          }
        }
        messages.push(message);
        if (persistSession) {
          if (message.type === "assistant") {
            void recordTranscript(messages);
          } else {
            await recordTranscript(messages);
          }
        }
        if (!hasAcknowledgedInitialMessages && messagesToAck.length > 0) {
          hasAcknowledgedInitialMessages = true;
          for (const msgToAck of messagesToAck) {
            if (msgToAck.type === "user") {
              yield {
                type: "user",
                message: msgToAck.message,
                session_id: getSessionId(),
                parent_tool_use_id: null,
                uuid: msgToAck.uuid,
                timestamp: msgToAck.timestamp,
                isReplay: true
              };
            }
          }
        }
      }
      if (message.type === "user") {
        turnCount++;
      }
      switch (message.type) {
        case "tombstone":
          break;
        case "assistant":
          if (message.message.stop_reason != null) {
            lastStopReason = message.message.stop_reason;
          }
          this.mutableMessages.push(message);
          yield* normalizeMessage(message);
          break;
        case "progress":
          this.mutableMessages.push(message);
          if (persistSession) {
            messages.push(message);
            void recordTranscript(messages);
          }
          yield* normalizeMessage(message);
          break;
        case "user":
          this.mutableMessages.push(message);
          yield* normalizeMessage(message);
          break;
        case "stream_event":
          if (message.event.type === "message_start") {
            currentMessageUsage = EMPTY_USAGE;
            currentMessageUsage = updateUsage(
              currentMessageUsage,
              message.event.message.usage
            );
          }
          if (message.event.type === "message_delta") {
            currentMessageUsage = updateUsage(
              currentMessageUsage,
              message.event.usage
            );
            if (message.event.delta.stop_reason != null) {
              lastStopReason = message.event.delta.stop_reason;
            }
          }
          if (message.event.type === "message_stop") {
            this.totalUsage = accumulateUsage(
              this.totalUsage,
              currentMessageUsage
            );
          }
          if (includePartialMessages) {
            yield {
              type: "stream_event",
              event: message.event,
              session_id: getSessionId(),
              parent_tool_use_id: null,
              uuid: randomUUID()
            };
          }
          break;
        case "attachment":
          this.mutableMessages.push(message);
          if (persistSession) {
            messages.push(message);
            void recordTranscript(messages);
          }
          if (message.attachment.type === "structured_output") {
            structuredOutputFromTool = message.attachment.data;
          } else if (message.attachment.type === "max_turns_reached") {
            if (persistSession) {
              if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
                await flushSessionStorage();
              }
            }
            yield {
              type: "result",
              subtype: "error_max_turns",
              duration_ms: Date.now() - startTime,
              duration_api_ms: getTotalAPIDuration(),
              is_error: true,
              num_turns: message.attachment.turnCount,
              stop_reason: lastStopReason,
              session_id: getSessionId(),
              total_cost_usd: getTotalCostUSD(),
              usage: this.totalUsage,
              modelUsage: getModelUsage(),
              permission_denials: this.permissionDenials,
              fast_mode_state: getFastModeState(
                mainLoopModel,
                initialAppState.fastMode
              ),
              uuid: randomUUID(),
              errors: [
                `Reached maximum number of turns (${message.attachment.maxTurns})`
              ]
            };
            return;
          } else if (replayUserMessages && message.attachment.type === "queued_command") {
            yield {
              type: "user",
              message: {
                role: "user",
                content: message.attachment.prompt
              },
              session_id: getSessionId(),
              parent_tool_use_id: null,
              uuid: message.attachment.source_uuid || message.uuid,
              timestamp: message.timestamp,
              isReplay: true
            };
          }
          break;
        case "stream_request_start":
          break;
        case "system": {
          const snipResult = this.config.snipReplay?.(
            message,
            this.mutableMessages
          );
          if (snipResult !== void 0) {
            if (snipResult.executed) {
              this.mutableMessages.length = 0;
              this.mutableMessages.push(...snipResult.messages);
            }
            break;
          }
          this.mutableMessages.push(message);
          if (message.subtype === "compact_boundary" && message.compactMetadata) {
            const mutableBoundaryIdx = this.mutableMessages.length - 1;
            if (mutableBoundaryIdx > 0) {
              this.mutableMessages.splice(0, mutableBoundaryIdx);
            }
            const localBoundaryIdx = messages.length - 1;
            if (localBoundaryIdx > 0) {
              messages.splice(0, localBoundaryIdx);
            }
            yield {
              type: "system",
              subtype: "compact_boundary",
              session_id: getSessionId(),
              uuid: message.uuid,
              compact_metadata: toSDKCompactMetadata(message.compactMetadata)
            };
          }
          if (message.subtype === "api_error") {
            yield {
              type: "system",
              subtype: "api_retry",
              attempt: message.retryAttempt,
              max_retries: message.maxRetries,
              retry_delay_ms: message.retryInMs,
              error_status: message.error.status ?? null,
              error: categorizeRetryableAPIError(message.error),
              session_id: getSessionId(),
              uuid: message.uuid
            };
          }
          break;
        }
        case "tool_use_summary":
          yield {
            type: "tool_use_summary",
            summary: message.summary,
            preceding_tool_use_ids: message.precedingToolUseIds,
            session_id: getSessionId(),
            uuid: message.uuid
          };
          break;
      }
      if (maxBudgetUsd !== void 0 && getTotalCostUSD() >= maxBudgetUsd) {
        if (persistSession) {
          if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
            await flushSessionStorage();
          }
        }
        yield {
          type: "result",
          subtype: "error_max_budget_usd",
          duration_ms: Date.now() - startTime,
          duration_api_ms: getTotalAPIDuration(),
          is_error: true,
          num_turns: turnCount,
          stop_reason: lastStopReason,
          session_id: getSessionId(),
          total_cost_usd: getTotalCostUSD(),
          usage: this.totalUsage,
          modelUsage: getModelUsage(),
          permission_denials: this.permissionDenials,
          fast_mode_state: getFastModeState(
            mainLoopModel,
            initialAppState.fastMode
          ),
          uuid: randomUUID(),
          errors: [`Reached maximum budget ($${maxBudgetUsd})`]
        };
        return;
      }
      if (message.type === "user" && jsonSchema) {
        const currentCalls = countToolCalls(
          this.mutableMessages,
          SYNTHETIC_OUTPUT_TOOL_NAME
        );
        const callsThisQuery = currentCalls - initialStructuredOutputCalls;
        const maxRetries = parseInt(
          process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "5",
          10
        );
        if (callsThisQuery >= maxRetries) {
          if (persistSession) {
            if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
              await flushSessionStorage();
            }
          }
          yield {
            type: "result",
            subtype: "error_max_structured_output_retries",
            duration_ms: Date.now() - startTime,
            duration_api_ms: getTotalAPIDuration(),
            is_error: true,
            num_turns: turnCount,
            stop_reason: lastStopReason,
            session_id: getSessionId(),
            total_cost_usd: getTotalCostUSD(),
            usage: this.totalUsage,
            modelUsage: getModelUsage(),
            permission_denials: this.permissionDenials,
            fast_mode_state: getFastModeState(
              mainLoopModel,
              initialAppState.fastMode
            ),
            uuid: randomUUID(),
            errors: [
              `Failed to provide valid structured output after ${maxRetries} attempts`
            ]
          };
          return;
        }
      }
    }
    const result = messages.findLast(
      (m) => m.type === "assistant" || m.type === "user"
    );
    const edeResultType = result?.type ?? "undefined";
    const edeLastContentType = result?.type === "assistant" ? last_default(result.message.content)?.type ?? "none" : "n/a";
    if (persistSession) {
      if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
        await flushSessionStorage();
      }
    }
    if (!isResultSuccessful(result, lastStopReason)) {
      yield {
        type: "result",
        subtype: "error_during_execution",
        duration_ms: Date.now() - startTime,
        duration_api_ms: getTotalAPIDuration(),
        is_error: true,
        num_turns: turnCount,
        stop_reason: lastStopReason,
        session_id: getSessionId(),
        total_cost_usd: getTotalCostUSD(),
        usage: this.totalUsage,
        modelUsage: getModelUsage(),
        permission_denials: this.permissionDenials,
        fast_mode_state: getFastModeState(
          mainLoopModel,
          initialAppState.fastMode
        ),
        uuid: randomUUID(),
        // Diagnostic prefix: these are what isResultSuccessful() checks — if
        // the result type isn't assistant-with-text/thinking or user-with-
        // tool_result, and stop_reason isn't end_turn, that's why this fired.
        // errors[] is turn-scoped via the watermark; previously it dumped the
        // entire process's logError buffer (ripgrep timeouts, ENOENT, etc).
        errors: (() => {
          const all = getInMemoryErrors();
          const start = errorLogWatermark ? all.lastIndexOf(errorLogWatermark) + 1 : 0;
          return [
            `[ede_diagnostic] result_type=${edeResultType} last_content_type=${edeLastContentType} stop_reason=${lastStopReason}`,
            ...all.slice(start).map((_) => _.error)
          ];
        })()
      };
      return;
    }
    let textResult = "";
    let isApiError = false;
    if (result.type === "assistant") {
      const lastContent = last_default(result.message.content);
      if (lastContent?.type === "text" && !SYNTHETIC_MESSAGES.has(lastContent.text)) {
        textResult = lastContent.text;
      }
      isApiError = Boolean(result.isApiErrorMessage);
    }
    yield {
      type: "result",
      subtype: "success",
      is_error: isApiError,
      duration_ms: Date.now() - startTime,
      duration_api_ms: getTotalAPIDuration(),
      num_turns: turnCount,
      result: textResult,
      stop_reason: lastStopReason,
      session_id: getSessionId(),
      total_cost_usd: getTotalCostUSD(),
      usage: this.totalUsage,
      modelUsage: getModelUsage(),
      permission_denials: this.permissionDenials,
      structured_output: structuredOutputFromTool,
      fast_mode_state: getFastModeState(
        mainLoopModel,
        initialAppState.fastMode
      ),
      uuid: randomUUID()
    };
  }
  interrupt() {
    this.abortController.abort();
  }
  getMessages() {
    return this.mutableMessages;
  }
  getReadFileState() {
    return this.readFileState;
  }
  getSessionId() {
    return getSessionId();
  }
  setModel(model) {
    this.config.userSpecifiedModel = model;
  }
};
async function* ask({
  commands,
  prompt,
  promptUuid,
  isMeta,
  cwd: cwd2,
  tools,
  mcpClients,
  verbose = false,
  thinkingConfig,
  maxTurns,
  maxBudgetUsd,
  taskBudget,
  canUseTool,
  mutableMessages = [],
  getReadFileCache,
  setReadFileCache,
  customSystemPrompt,
  appendSystemPrompt,
  userSpecifiedModel,
  fallbackModel,
  jsonSchema,
  getAppState,
  setAppState,
  abortController,
  replayUserMessages = false,
  includePartialMessages = false,
  handleElicitation,
  agents = [],
  setSDKStatus,
  orphanedPermission
}) {
  const engine = new QueryEngine({
    cwd: cwd2,
    tools,
    commands,
    mcpClients,
    agents,
    canUseTool,
    getAppState,
    setAppState,
    initialMessages: mutableMessages,
    readFileCache: cloneFileStateCache(getReadFileCache()),
    customSystemPrompt,
    appendSystemPrompt,
    userSpecifiedModel,
    fallbackModel,
    thinkingConfig,
    maxTurns,
    maxBudgetUsd,
    taskBudget,
    jsonSchema,
    verbose,
    handleElicitation,
    replayUserMessages,
    includePartialMessages,
    setSDKStatus,
    abortController,
    orphanedPermission,
    ...feature("HISTORY_SNIP") ? {
      snipReplay: (yielded, store) => {
        if (!snipProjection.isSnipBoundaryMessage(yielded))
          return void 0;
        return snipModule.snipCompactIfNeeded(store, { force: true });
      }
    } : {}
  });
  try {
    yield* engine.submitMessage(prompt, {
      uuid: promptUuid,
      isMeta
    });
  } finally {
    setReadFileCache(engine.getReadFileState());
  }
}

// src/cli/print.ts
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
import { randomUUID as randomUUID2 } from "crypto";
function parseSessionIdentifier(resumeIdentifier) {
  if (resumeIdentifier.toLowerCase().endsWith(".jsonl")) {
    return {
      sessionId: randomUUID2(),
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
      sessionId: randomUUID2(),
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
init_config2();
init_auth3();
init_elicitationHandler();
init_hooks();
init_types();
init_mcpStringUtils();
init_utils();
init_vscodeSdkMcp();
init_config2();
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
import { randomUUID as randomUUID3 } from "crypto";
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
    try {
      await SandboxManager.initialize(structuredIO.createSandboxAskCallback());
    } catch (err) {
      process.stderr.write(`
\u274C Sandbox Error: ${errorMessage(err)}
`);
      gracefulShutdownSync(1, "other");
      return;
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
              uuid: randomUUID3(),
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
              uuid: randomUUID3(),
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
              uuid: randomUUID3(),
              session_id: getSessionId()
            };
        }
      })();
      void structuredIO.write(message);
    });
  }
  if (options.setupTrigger) {
    await processSetupHooks(options.setupTrigger);
  }
  headlessProfilerCheckpoint("before_loadInitialMessages");
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
  await ensureModelStringsInitialized();
  headlessProfilerCheckpoint("after_modelStrings");
  const needsFullArray = options.outputFormat === "json" && options.verbose;
  const messages = [];
  let lastMessage;
  const transformToStreamlined = feature("STREAMLINED_OUTPUT") && isEnvTruthy(process.env.CLAUDE_CODE_STREAMLINED_OUTPUT) && options.outputFormat === "stream-json" ? createStreamlinedTransformer() : null;
  headlessProfilerCheckpoint("before_runHeadlessStreaming");
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
        uuid: randomUUID3(),
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
        uuid: randomUUID3(),
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
        uuid: randomUUID3(),
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
      uuid: randomUUID3()
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
              uuid: randomUUID3(),
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
        uuid: randomUUID3(),
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
    running = true;
    runPhase = void 0;
    notifySessionStateChanged("running");
    idleTimeout.stop();
    headlessProfilerCheckpoint("run_entry");
    await updateSdkMcp();
    headlessProfilerCheckpoint("after_updateSdkMcp");
    if (pluginInstallPromise) {
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
      const { setupPluginHookHotReload } = await import("./loadPluginHooks-5WUALPJU.mjs");
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
                uuid: randomUUID3()
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
                  uuid: randomUUID3()
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
                  uuid: randomUUID3(),
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
                    uuid: randomUUID3(),
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
          uuid: randomUUID3(),
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
              uuid: randomUUID3()
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
              uuid: randomUUID3()
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
          uuid: randomUUID3()
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
          uuid: randomUUID3(),
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
                const { initReplBridge } = await import("./initReplBridge-TEVGEVKK.mjs");
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
                      uuid: randomUUID3(),
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
        uuid: randomUUID3(),
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
      uuid: randomUUID3(),
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
      } = await import("./teleport-J2RWXALU.mjs");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9wcmludC50cyIsICIuLi8uLi9zcmMvY2xpL3JlbW90ZUlPLnRzIiwgIi4uLy4uL3NyYy9jbGkvdHJhbnNwb3J0cy90cmFuc3BvcnRVdGlscy50cyIsICIuLi8uLi9zcmMvdXRpbHMvc3RyZWFtbGluZWRUcmFuc2Zvcm0udHMiLCAiLi4vLi4vc3JjL3V0aWxzL3N0cmVhbUpzb25TdGRvdXRHdWFyZC50cyIsICIuLi8uLi9zcmMvUXVlcnlFbmdpbmUudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3F1ZXJ5Q29udGV4dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL2ZpbGVQZXJzaXN0ZW5jZS50cyIsICIuLi8uLi9zcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL3R5cGVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9pZGxlVGltZW91dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2Vzc2lvblVybC50cyIsICIuLi8uLi9zcmMvdXRpbHMvcGx1Z2lucy9oZWFkbGVzc1BsdWdpbkluc3RhbGwudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3BsdWdpbnMvemlwQ2FjaGVBZGFwdGVycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gYmlvbWUtaWdub3JlLWFsbCBhc3Npc3Qvc291cmNlL29yZ2FuaXplSW1wb3J0czogQU5ULU9OTFkgaW1wb3J0IG1hcmtlcnMgbXVzdCBub3QgYmUgcmVvcmRlcmVkXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHJlYWRGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGRvd25sb2FkVXNlclNldHRpbmdzLFxuICByZWRvd25sb2FkVXNlclNldHRpbmdzLFxufSBmcm9tICdzcmMvc2VydmljZXMvc2V0dGluZ3NTeW5jL2luZGV4LmpzJ1xuaW1wb3J0IHsgd2FpdEZvclJlbW90ZU1hbmFnZWRTZXR0aW5nc1RvTG9hZCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9yZW1vdGVNYW5hZ2VkU2V0dGluZ3MvaW5kZXguanMnXG5pbXBvcnQgeyBTdHJ1Y3R1cmVkSU8gfSBmcm9tICdzcmMvY2xpL3N0cnVjdHVyZWRJTy5qcydcbmltcG9ydCB7IFJlbW90ZUlPIH0gZnJvbSAnc3JjL2NsaS9yZW1vdGVJTy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQ29tbWFuZCxcbiAgZm9ybWF0RGVzY3JpcHRpb25XaXRoU291cmNlLFxuICBnZXRDb21tYW5kTmFtZSxcbn0gZnJvbSAnc3JjL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlU3RyZWFtbGluZWRUcmFuc2Zvcm1lciB9IGZyb20gJ3NyYy91dGlscy9zdHJlYW1saW5lZFRyYW5zZm9ybS5qcydcbmltcG9ydCB7IGluc3RhbGxTdHJlYW1Kc29uU3Rkb3V0R3VhcmQgfSBmcm9tICdzcmMvdXRpbHMvc3RyZWFtSnNvblN0ZG91dEd1YXJkLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sUGVybWlzc2lvbkNvbnRleHQgfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgVGhpbmtpbmdDb25maWcgfSBmcm9tICdzcmMvdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgeyBhc3NlbWJsZVRvb2xQb29sLCBmaWx0ZXJUb29sc0J5RGVueVJ1bGVzIH0gZnJvbSAnc3JjL3Rvb2xzLmpzJ1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gtZXMvdW5pcUJ5LmpzJ1xuaW1wb3J0IHsgdW5pcSB9IGZyb20gJ3NyYy91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IG1lcmdlQW5kRmlsdGVyVG9vbHMgfSBmcm9tICdzcmMvdXRpbHMvdG9vbFBvb2wuanMnXG5pbXBvcnQge1xuICBsb2dFdmVudCxcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICdzcmMvdXRpbHMvZGVidWcuanMnXG5pbXBvcnQge1xuICBsb2dGb3JEaWFnbm9zdGljc05vUElJLFxuICB3aXRoRGlhZ25vc3RpY3NUaW1pbmcsXG59IGZyb20gJ3NyYy91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IHRvb2xNYXRjaGVzTmFtZSwgdHlwZSBUb29sLCB0eXBlIFRvb2xzIH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQge1xuICB0eXBlIEFnZW50RGVmaW5pdGlvbixcbiAgaXNCdWlsdEluQWdlbnQsXG4gIHBhcnNlQWdlbnRzRnJvbUpzb24sXG59IGZyb20gJ3NyYy90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSwgTm9ybWFsaXplZFVzZXJNZXNzYWdlIH0gZnJvbSAnc3JjL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgdHlwZSB7IFF1ZXVlZENvbW1hbmQgfSBmcm9tICdzcmMvdHlwZXMvdGV4dElucHV0VHlwZXMuanMnXG5pbXBvcnQge1xuICBkZXF1ZXVlLFxuICBkZXF1ZXVlQWxsTWF0Y2hpbmcsXG4gIGVucXVldWUsXG4gIGhhc0NvbW1hbmRzSW5RdWV1ZSxcbiAgcGVlayxcbiAgc3Vic2NyaWJlVG9Db21tYW5kUXVldWUsXG4gIGdldENvbW1hbmRzQnlNYXhQcmlvcml0eSxcbn0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VRdWV1ZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBub3RpZnlDb21tYW5kTGlmZWN5Y2xlIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1hbmRMaWZlY3ljbGUuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uU3RhdGUsXG4gIG5vdGlmeVNlc3Npb25TdGF0ZUNoYW5nZWQsXG4gIG5vdGlmeVNlc3Npb25NZXRhZGF0YUNoYW5nZWQsXG4gIHNldFBlcm1pc3Npb25Nb2RlQ2hhbmdlZExpc3RlbmVyLFxuICB0eXBlIFJlcXVpcmVzQWN0aW9uRGV0YWlscyxcbiAgdHlwZSBTZXNzaW9uRXh0ZXJuYWxNZXRhZGF0YSxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25TdGF0ZS5qcydcbmltcG9ydCB7IGV4dGVybmFsTWV0YWRhdGFUb0FwcFN0YXRlIH0gZnJvbSAnc3JjL3N0YXRlL29uQ2hhbmdlQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBnZXRJbk1lbW9yeUVycm9ycywgbG9nRXJyb3IsIGxvZ01DUERlYnVnIH0gZnJvbSAnc3JjL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7XG4gIHdyaXRlVG9TdGRvdXQsXG4gIHJlZ2lzdGVyUHJvY2Vzc091dHB1dEVycm9ySGFuZGxlcnMsXG59IGZyb20gJ3NyYy91dGlscy9wcm9jZXNzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdHJlYW0gfSBmcm9tICdzcmMvdXRpbHMvc3RyZWFtLmpzJ1xuaW1wb3J0IHsgRU1QVFlfVVNBR0UgfSBmcm9tICdzcmMvc2VydmljZXMvYXBpL2xvZ2dpbmcuanMnXG5pbXBvcnQge1xuICBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lLFxuICB0eXBlIFR1cm5JbnRlcnJ1cHRpb25TdGF0ZSxcbn0gZnJvbSAnc3JjL3V0aWxzL2NvbnZlcnNhdGlvblJlY292ZXJ5LmpzJ1xuaW1wb3J0IHR5cGUge1xuICBNQ1BTZXJ2ZXJDb25uZWN0aW9uLFxuICBNY3BTZGtTZXJ2ZXJDb25maWcsXG4gIFNjb3BlZE1jcFNlcnZlckNvbmZpZyxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB7XG4gIENoYW5uZWxNZXNzYWdlTm90aWZpY2F0aW9uU2NoZW1hLFxuICBnYXRlQ2hhbm5lbFNlcnZlcixcbiAgd3JhcENoYW5uZWxNZXNzYWdlLFxuICBmaW5kQ2hhbm5lbEVudHJ5LFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2NoYW5uZWxOb3RpZmljYXRpb24uanMnXG5pbXBvcnQge1xuICBpc0NoYW5uZWxBbGxvd2xpc3RlZCxcbiAgaXNDaGFubmVsc0VuYWJsZWQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY2hhbm5lbEFsbG93bGlzdC5qcydcbmltcG9ydCB7IHBhcnNlUGx1Z2luSWRlbnRpZmllciB9IGZyb20gJ3NyYy91dGlscy9wbHVnaW5zL3BsdWdpbklkZW50aWZpZXIuanMnXG5pbXBvcnQgeyB2YWxpZGF0ZVV1aWQgfSBmcm9tICdzcmMvdXRpbHMvdXVpZC5qcydcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJ3NyYy91dGlscy9nZW5lcmF0b3JzLmpzJ1xuaW1wb3J0IHsgYXNrIH0gZnJvbSAnc3JjL1F1ZXJ5RW5naW5lLmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uUHJvbXB0VG9vbCB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5pbXBvcnQge1xuICBjcmVhdGVGaWxlU3RhdGVDYWNoZVdpdGhTaXplTGltaXQsXG4gIG1lcmdlRmlsZVN0YXRlQ2FjaGVzLFxuICBSRUFEX0ZJTEVfU1RBVEVfQ0FDSEVfU0laRSxcbn0gZnJvbSAnc3JjL3V0aWxzL2ZpbGVTdGF0ZUNhY2hlLmpzJ1xuaW1wb3J0IHsgZXhwYW5kUGF0aCB9IGZyb20gJ3NyYy91dGlscy9wYXRoLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFJlYWRGaWxlc0Zyb21NZXNzYWdlcyB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5pbXBvcnQgeyByZWdpc3Rlckhvb2tFdmVudEhhbmRsZXIgfSBmcm9tICdzcmMvdXRpbHMvaG9va3MvaG9va0V2ZW50cy5qcydcbmltcG9ydCB7IGV4ZWN1dGVGaWxlUGVyc2lzdGVuY2UgfSBmcm9tICdzcmMvdXRpbHMvZmlsZVBlcnNpc3RlbmNlL2ZpbGVQZXJzaXN0ZW5jZS5qcydcbmltcG9ydCB7IGZpbmFsaXplUGVuZGluZ0FzeW5jSG9va3MgfSBmcm9tICdzcmMvdXRpbHMvaG9va3MvQXN5bmNIb29rUmVnaXN0cnkuanMnXG5pbXBvcnQge1xuICBncmFjZWZ1bFNodXRkb3duLFxuICBncmFjZWZ1bFNodXRkb3duU3luYyxcbiAgaXNTaHV0dGluZ0Rvd24sXG59IGZyb20gJ3NyYy91dGlscy9ncmFjZWZ1bFNodXRkb3duLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnc3JjL3V0aWxzL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGNyZWF0ZUlkbGVUaW1lb3V0TWFuYWdlciB9IGZyb20gJ3NyYy91dGlscy9pZGxlVGltZW91dC5qcydcbmltcG9ydCB0eXBlIHtcbiAgU0RLU3RhdHVzLFxuICBNb2RlbEluZm8sXG4gIFNES01lc3NhZ2UsXG4gIFNES1VzZXJNZXNzYWdlLFxuICBTREtVc2VyTWVzc2FnZVJlcGxheSxcbiAgUGVybWlzc2lvblJlc3VsdCxcbiAgTWNwU2VydmVyQ29uZmlnRm9yUHJvY2Vzc1RyYW5zcG9ydCxcbiAgTWNwU2VydmVyU3RhdHVzLFxuICBSZXdpbmRGaWxlc1Jlc3VsdCxcbn0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFN0ZG91dE1lc3NhZ2UsXG4gIFNES0NvbnRyb2xJbml0aWFsaXplUmVxdWVzdCxcbiAgU0RLQ29udHJvbEluaXRpYWxpemVSZXNwb25zZSxcbiAgU0RLQ29udHJvbFJlcXVlc3QsXG4gIFNES0NvbnRyb2xSZXNwb25zZSxcbiAgU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXNwb25zZSxcbiAgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXNwb25zZSxcbn0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnQGFudGhyb3BpYy1haS9jbGF1ZGUtYWdlbnQtc2RrJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uTW9kZSBhcyBJbnRlcm5hbFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnc3JjL3R5cGVzL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgY3dkIH0gZnJvbSAncHJvY2VzcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJ3NyYy91dGlscy9jd2QuanMnXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gtZXMvb21pdC5qcydcbmltcG9ydCByZWplY3QgZnJvbSAnbG9kYXNoLWVzL3JlamVjdC5qcydcbmltcG9ydCB7IGlzUG9saWN5QWxsb3dlZCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9wb2xpY3lMaW1pdHMvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFJlcGxCcmlkZ2VIYW5kbGUgfSBmcm9tICdzcmMvYnJpZGdlL3JlcGxCcmlkZ2UuanMnXG5pbXBvcnQgeyBnZXRSZW1vdGVTZXNzaW9uVXJsIH0gZnJvbSAnc3JjL2NvbnN0YW50cy9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgYnVpbGRCcmlkZ2VDb25uZWN0VXJsIH0gZnJvbSAnc3JjL2JyaWRnZS9icmlkZ2VTdGF0dXNVdGlsLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdEluYm91bmRNZXNzYWdlRmllbGRzIH0gZnJvbSAnc3JjL2JyaWRnZS9pbmJvdW5kTWVzc2FnZXMuanMnXG5pbXBvcnQgeyByZXNvbHZlQW5kUHJlcGVuZCB9IGZyb20gJ3NyYy9icmlkZ2UvaW5ib3VuZEF0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICdzcmMvaG9va3MvdXNlQ2FuVXNlVG9vbC5qcydcbmltcG9ydCB7IGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sIH0gZnJvbSAnc3JjL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgc2FmZVBhcnNlSlNPTiB9IGZyb20gJ3NyYy91dGlscy9qc29uLmpzJ1xuaW1wb3J0IHtcbiAgb3V0cHV0U2NoZW1hIGFzIHBlcm1pc3Npb25Ub29sT3V0cHV0U2NoZW1hLFxuICBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRTY2hlbWEuanMnXG5pbXBvcnQgeyBjcmVhdGVBYm9ydENvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tYmluZWRBYm9ydFNpZ25hbCB9IGZyb20gJ3NyYy91dGlscy9jb21iaW5lZEFib3J0U2lnbmFsLmpzJ1xuaW1wb3J0IHsgZ2VuZXJhdGVTZXNzaW9uVGl0bGUgfSBmcm9tICdzcmMvdXRpbHMvc2Vzc2lvblRpdGxlLmpzJ1xuaW1wb3J0IHsgYnVpbGRTaWRlUXVlc3Rpb25GYWxsYmFja1BhcmFtcyB9IGZyb20gJ3NyYy91dGlscy9xdWVyeUNvbnRleHQuanMnXG5pbXBvcnQgeyBydW5TaWRlUXVlc3Rpb24gfSBmcm9tICdzcmMvdXRpbHMvc2lkZVF1ZXN0aW9uLmpzJ1xuaW1wb3J0IHtcbiAgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzLFxuICBwcm9jZXNzU2V0dXBIb29rcyxcbiAgdGFrZUluaXRpYWxVc2VyTWVzc2FnZSxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25TdGFydC5qcydcbmltcG9ydCB7XG4gIERFRkFVTFRfT1VUUFVUX1NUWUxFX05BTUUsXG4gIGdldEFsbE91dHB1dFN0eWxlcyxcbn0gZnJvbSAnc3JjL2NvbnN0YW50cy9vdXRwdXRTdHlsZXMuanMnXG5pbXBvcnQgeyBURUFNTUFURV9NRVNTQUdFX1RBRywgVElDS19UQUcgfSBmcm9tICdzcmMvY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7XG4gIGdldFNldHRpbmdzX0RFUFJFQ0FURUQsXG4gIGdldFNldHRpbmdzV2l0aFNvdXJjZXMsXG59IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3IgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY2hhbmdlRGV0ZWN0b3IuanMnXG5pbXBvcnQgeyBhcHBseVNldHRpbmdzQ2hhbmdlIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL2FwcGx5U2V0dGluZ3NDaGFuZ2UuanMnXG5pbXBvcnQge1xuICBpc0Zhc3RNb2RlQXZhaWxhYmxlLFxuICBpc0Zhc3RNb2RlRW5hYmxlZCxcbiAgaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwsXG4gIGdldEZhc3RNb2RlU3RhdGUsXG59IGZyb20gJ3NyYy91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7XG4gIGlzQXV0b01vZGVHYXRlRW5hYmxlZCxcbiAgZ2V0QXV0b01vZGVVbmF2YWlsYWJsZU5vdGlmaWNhdGlvbixcbiAgZ2V0QXV0b01vZGVVbmF2YWlsYWJsZVJlYXNvbixcbiAgaXNCeXBhc3NQZXJtaXNzaW9uc01vZGVEaXNhYmxlZCxcbiAgdHJhbnNpdGlvblBlcm1pc3Npb25Nb2RlLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvblNldHVwLmpzJ1xuaW1wb3J0IHtcbiAgdHJ5R2VuZXJhdGVTdWdnZXN0aW9uLFxuICBsb2dTdWdnZXN0aW9uT3V0Y29tZSxcbiAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQsXG4gIHR5cGUgUHJvbXB0VmFyaWFudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL1Byb21wdFN1Z2dlc3Rpb24vcHJvbXB0U3VnZ2VzdGlvbi5qcydcbmltcG9ydCB7IGdldExhc3RDYWNoZVNhZmVQYXJhbXMgfSBmcm9tICdzcmMvdXRpbHMvZm9ya2VkQWdlbnQuanMnXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mb3JtYXRpb24gfSBmcm9tICdzcmMvdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9vYXV0aC9pbmRleC5qcydcbmltcG9ydCB7IGluc3RhbGxPQXV0aFRva2VucyB9IGZyb20gJ3NyYy9jbGkvaGFuZGxlcnMvYXV0aC5qcydcbmltcG9ydCB7IGdldEFQSVByb3ZpZGVyIH0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL3Byb3ZpZGVycy5qcydcbmltcG9ydCB0eXBlIHsgSG9va0NhbGxiYWNrTWF0Y2hlciB9IGZyb20gJ3NyYy90eXBlcy9ob29rcy5qcydcbmltcG9ydCB7IEF3c0F1dGhTdGF0dXNNYW5hZ2VyIH0gZnJvbSAnc3JjL3V0aWxzL2F3c0F1dGhTdGF0dXNNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUgeyBIb29rRXZlbnQgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7XG4gIHJlZ2lzdGVySG9va0NhbGxiYWNrcyxcbiAgc2V0SW5pdEpzb25TY2hlbWEsXG4gIGdldEluaXRKc29uU2NoZW1hLFxuICBzZXRTZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZCxcbn0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGNyZWF0ZVN5bnRoZXRpY091dHB1dFRvb2wgfSBmcm9tICdzcmMvdG9vbHMvU3ludGhldGljT3V0cHV0VG9vbC9TeW50aGV0aWNPdXRwdXRUb29sLmpzJ1xuaW1wb3J0IHsgcGFyc2VTZXNzaW9uSWRlbnRpZmllciB9IGZyb20gJ3NyYy91dGlscy9zZXNzaW9uVXJsLmpzJ1xuaW1wb3J0IHtcbiAgaHlkcmF0ZVJlbW90ZVNlc3Npb24sXG4gIGh5ZHJhdGVGcm9tQ0NSdjJJbnRlcm5hbEV2ZW50cyxcbiAgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIsXG4gIGRvZXNNZXNzYWdlRXhpc3RJblNlc3Npb24sXG4gIGZpbmRVbnJlc29sdmVkVG9vbFVzZSxcbiAgcmVjb3JkQXR0cmlidXRpb25TbmFwc2hvdCxcbiAgc2F2ZUFnZW50U2V0dGluZyxcbiAgc2F2ZU1vZGUsXG4gIHNhdmVBaUdlbmVyYXRlZFRpdGxlLFxuICByZXN0b3JlU2Vzc2lvbk1ldGFkYXRhLFxufSBmcm9tICdzcmMvdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBpbmNyZW1lbnRQcm9tcHRDb3VudCB9IGZyb20gJ3NyYy91dGlscy9jb21taXRBdHRyaWJ1dGlvbi5qcydcbmltcG9ydCB7XG4gIHNldHVwU2RrTWNwQ2xpZW50cyxcbiAgY29ubmVjdFRvU2VydmVyLFxuICBjbGVhclNlcnZlckNhY2hlLFxuICBmZXRjaFRvb2xzRm9yQ2xpZW50LFxuICBhcmVNY3BDb25maWdzRXF1YWwsXG4gIHJlY29ubmVjdE1jcFNlcnZlckltcGwsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY2xpZW50LmpzJ1xuaW1wb3J0IHtcbiAgZmlsdGVyTWNwU2VydmVyc0J5UG9saWN5LFxuICBnZXRNY3BDb25maWdCeU5hbWUsXG4gIGlzTWNwU2VydmVyRGlzYWJsZWQsXG4gIHNldE1jcFNlcnZlckVuYWJsZWQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9tY3AvY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgcGVyZm9ybU1DUE9BdXRoRmxvdyxcbiAgcmV2b2tlU2VydmVyVG9rZW5zLFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2F1dGguanMnXG5pbXBvcnQge1xuICBydW5FbGljaXRhdGlvbkhvb2tzLFxuICBydW5FbGljaXRhdGlvblJlc3VsdEhvb2tzLFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2VsaWNpdGF0aW9uSGFuZGxlci5qcydcbmltcG9ydCB7IGV4ZWN1dGVOb3RpZmljYXRpb25Ib29rcyB9IGZyb20gJ3NyYy91dGlscy9ob29rcy5qcydcbmltcG9ydCB7XG4gIEVsaWNpdFJlcXVlc3RTY2hlbWEsXG4gIEVsaWNpdGF0aW9uQ29tcGxldGVOb3RpZmljYXRpb25TY2hlbWEsXG59IGZyb20gJ0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvdHlwZXMuanMnXG5pbXBvcnQgeyBnZXRNY3BQcmVmaXggfSBmcm9tICdzcmMvc2VydmljZXMvbWNwL21jcFN0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcixcbiAgZmlsdGVyVG9vbHNCeVNlcnZlcixcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC91dGlscy5qcydcbmltcG9ydCB7IHNldHVwVnNjb2RlU2RrTWNwIH0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC92c2NvZGVTZGtNY3AuanMnXG5pbXBvcnQgeyBnZXRBbGxNY3BDb25maWdzIH0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC9jb25maWcuanMnXG5pbXBvcnQge1xuICBpc1F1YWxpZmllZEZvckdyb3ZlLFxuICBjaGVja0dyb3ZlRm9yTm9uSW50ZXJhY3RpdmUsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvZ3JvdmUuanMnXG5pbXBvcnQge1xuICB0b0ludGVybmFsTWVzc2FnZXMsXG4gIHRvU0RLUmF0ZUxpbWl0SW5mbyxcbn0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzL21hcHBlcnMuanMnXG5pbXBvcnQgeyBjcmVhdGVNb2RlbFN3aXRjaEJyZWFkY3J1bWJzIH0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgY29sbGVjdENvbnRleHREYXRhIH0gZnJvbSAnc3JjL2NvbW1hbmRzL2NvbnRleHQvY29udGV4dC1ub25pbnRlcmFjdGl2ZS5qcydcbmltcG9ydCB7IExPQ0FMX0NPTU1BTkRfU1RET1VUX1RBRyB9IGZyb20gJ3NyYy9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHtcbiAgc3RhdHVzTGlzdGVuZXJzLFxuICB0eXBlIENsYXVkZUFJTGltaXRzLFxufSBmcm9tICdzcmMvc2VydmljZXMvY2xhdWRlQWlMaW1pdHMuanMnXG5pbXBvcnQge1xuICBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCxcbiAgZ2V0TWFpbkxvb3BNb2RlbCxcbiAgbW9kZWxEaXNwbGF5U3RyaW5nLFxuICBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbCxcbn0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kZWxPcHRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL21vZGVsT3B0aW9ucy5qcydcbmltcG9ydCB7XG4gIG1vZGVsU3VwcG9ydHNFZmZvcnQsXG4gIG1vZGVsU3VwcG9ydHNNYXhFZmZvcnQsXG4gIEVGRk9SVF9MRVZFTFMsXG4gIHJlc29sdmVBcHBsaWVkRWZmb3J0LFxufSBmcm9tICdzcmMvdXRpbHMvZWZmb3J0LmpzJ1xuaW1wb3J0IHsgbW9kZWxTdXBwb3J0c0FkYXB0aXZlVGhpbmtpbmcgfSBmcm9tICdzcmMvdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgeyBtb2RlbFN1cHBvcnRzQXV0b01vZGUgfSBmcm9tICdzcmMvdXRpbHMvYmV0YXMuanMnXG5pbXBvcnQgeyBlbnN1cmVNb2RlbFN0cmluZ3NJbml0aWFsaXplZCB9IGZyb20gJ3NyYy91dGlscy9tb2RlbC9tb2RlbFN0cmluZ3MuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uSWQsXG4gIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZSxcbiAgc2V0TWFpblRocmVhZEFnZW50VHlwZSxcbiAgc3dpdGNoU2Vzc2lvbixcbiAgaXNTZXNzaW9uUGVyc2lzdGVuY2VEaXNhYmxlZCxcbiAgZ2V0SXNSZW1vdGVNb2RlLFxuICBnZXRGbGFnU2V0dGluZ3NJbmxpbmUsXG4gIHNldEZsYWdTZXR0aW5nc0lubGluZSxcbiAgZ2V0TWFpblRocmVhZEFnZW50VHlwZSxcbiAgZ2V0QWxsb3dlZENoYW5uZWxzLFxuICBzZXRBbGxvd2VkQ2hhbm5lbHMsXG4gIHR5cGUgQ2hhbm5lbEVudHJ5LFxufSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgcnVuV2l0aFdvcmtsb2FkLCBXT1JLTE9BRF9DUk9OIH0gZnJvbSAnc3JjL3V0aWxzL3dvcmtsb2FkQ29udGV4dC5qcydcbmltcG9ydCB0eXBlIHsgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRCbG9ja1BhcmFtIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGVTdG9yZS5qcydcbmltcG9ydCB7XG4gIGZpbGVIaXN0b3J5UmV3aW5kLFxuICBmaWxlSGlzdG9yeUNhblJlc3RvcmUsXG4gIGZpbGVIaXN0b3J5RW5hYmxlZCxcbiAgZmlsZUhpc3RvcnlHZXREaWZmU3RhdHMsXG59IGZyb20gJ3NyYy91dGlscy9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7XG4gIHJlc3RvcmVBZ2VudEZyb21TZXNzaW9uLFxuICByZXN0b3JlU2Vzc2lvblN0YXRlRnJvbUxvZyxcbn0gZnJvbSAnc3JjL3V0aWxzL3Nlc3Npb25SZXN0b3JlLmpzJ1xuaW1wb3J0IHsgU2FuZGJveE1hbmFnZXIgfSBmcm9tICdzcmMvdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5pbXBvcnQge1xuICBoZWFkbGVzc1Byb2ZpbGVyU3RhcnRUdXJuLFxuICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCxcbiAgbG9nSGVhZGxlc3NQcm9maWxlclR1cm4sXG59IGZyb20gJ3NyYy91dGlscy9oZWFkbGVzc1Byb2ZpbGVyLmpzJ1xuaW1wb3J0IHtcbiAgc3RhcnRRdWVyeVByb2ZpbGUsXG4gIGxvZ1F1ZXJ5UHJvZmlsZVJlcG9ydCxcbn0gZnJvbSAnc3JjL3V0aWxzL3F1ZXJ5UHJvZmlsZXIuanMnXG5pbXBvcnQgeyBhc1Nlc3Npb25JZCB9IGZyb20gJ3NyYy90eXBlcy9pZHMuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBza2lsbENoYW5nZURldGVjdG9yIH0gZnJvbSAnLi4vdXRpbHMvc2tpbGxzL3NraWxsQ2hhbmdlRGV0ZWN0b3IuanMnXG5pbXBvcnQgeyBnZXRDb21tYW5kcywgY2xlYXJDb21tYW5kc0NhY2hlIH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQge1xuICBpc0JhcmVNb2RlLFxuICBpc0VudlRydXRoeSxcbiAgaXNFbnZEZWZpbmVkRmFsc3ksXG59IGZyb20gJy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzcyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvaGVhZGxlc3NQbHVnaW5JbnN0YWxsLmpzJ1xuaW1wb3J0IHsgcmVmcmVzaEFjdGl2ZVBsdWdpbnMgfSBmcm9tICcuLi91dGlscy9wbHVnaW5zL3JlZnJlc2guanMnXG5pbXBvcnQgeyBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHtcbiAgaXNUZWFtTGVhZCxcbiAgaGFzQWN0aXZlSW5Qcm9jZXNzVGVhbW1hdGVzLFxuICBoYXNXb3JraW5nSW5Qcm9jZXNzVGVhbW1hdGVzLFxuICB3YWl0Rm9yVGVhbW1hdGVzVG9CZWNvbWVJZGxlLFxufSBmcm9tICcuLi91dGlscy90ZWFtbWF0ZS5qcydcbmltcG9ydCB7XG4gIHJlYWRVbnJlYWRNZXNzYWdlcyxcbiAgbWFya01lc3NhZ2VzQXNSZWFkLFxuICBpc1NodXRkb3duQXBwcm92ZWQsXG59IGZyb20gJy4uL3V0aWxzL3RlYW1tYXRlTWFpbGJveC5qcydcbmltcG9ydCB7IHJlbW92ZVRlYW1tYXRlRnJvbVRlYW1GaWxlIH0gZnJvbSAnLi4vdXRpbHMvc3dhcm0vdGVhbUhlbHBlcnMuanMnXG5pbXBvcnQgeyB1bmFzc2lnblRlYW1tYXRlVGFza3MgfSBmcm9tICcuLi91dGlscy90YXNrcy5qcydcbmltcG9ydCB7IGdldFJ1bm5pbmdUYXNrcyB9IGZyb20gJy4uL3V0aWxzL3Rhc2svZnJhbWV3b3JrLmpzJ1xuaW1wb3J0IHsgaXNCYWNrZ3JvdW5kVGFzayB9IGZyb20gJy4uL3Rhc2tzL3R5cGVzLmpzJ1xuaW1wb3J0IHsgc3RvcFRhc2sgfSBmcm9tICcuLi90YXNrcy9zdG9wVGFzay5qcydcbmltcG9ydCB7IGRyYWluU2RrRXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMvc2RrRXZlbnRRdWV1ZS5qcydcbmltcG9ydCB7IGluaXRpYWxpemVHcm93dGhCb29rIH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsgaXNFeHRyYWN0TW9kZUFjdGl2ZSB9IGZyb20gJy4uL21lbWRpci9wYXRocy5qcydcblxuLy8gRGVhZCBjb2RlIGVsaW1pbmF0aW9uOiBjb25kaXRpb25hbCBpbXBvcnRzXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBjb29yZGluYXRvck1vZGVNb2R1bGUgPSBmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJylcbiAgPyAocmVxdWlyZSgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykpXG4gIDogbnVsbFxuY29uc3QgcHJvYWN0aXZlTW9kdWxlID1cbiAgZmVhdHVyZSgnUFJPQUNUSVZFJykgfHwgZmVhdHVyZSgnS0FJUk9TJylcbiAgICA/IChyZXF1aXJlKCcuLi9wcm9hY3RpdmUvaW5kZXguanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9wcm9hY3RpdmUvaW5kZXguanMnKSlcbiAgICA6IG51bGxcbmNvbnN0IGNyb25TY2hlZHVsZXJNb2R1bGUgPSBmZWF0dXJlKCdBR0VOVF9UUklHR0VSUycpXG4gID8gKHJlcXVpcmUoJy4uL3V0aWxzL2Nyb25TY2hlZHVsZXIuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi91dGlscy9jcm9uU2NoZWR1bGVyLmpzJykpXG4gIDogbnVsbFxuY29uc3QgY3JvbkppdHRlckNvbmZpZ01vZHVsZSA9IGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJylcbiAgPyAocmVxdWlyZSgnLi4vdXRpbHMvY3JvbkppdHRlckNvbmZpZy5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3V0aWxzL2Nyb25KaXR0ZXJDb25maWcuanMnKSlcbiAgOiBudWxsXG5jb25zdCBjcm9uR2F0ZSA9IGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJylcbiAgPyAocmVxdWlyZSgnLi4vdG9vbHMvU2NoZWR1bGVDcm9uVG9vbC9wcm9tcHQuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi90b29scy9TY2hlZHVsZUNyb25Ub29sL3Byb21wdC5qcycpKVxuICA6IG51bGxcbmNvbnN0IGV4dHJhY3RNZW1vcmllc01vZHVsZSA9IGZlYXR1cmUoJ0VYVFJBQ1RfTUVNT1JJRVMnKVxuICA/IChyZXF1aXJlKCcuLi9zZXJ2aWNlcy9leHRyYWN0TWVtb3JpZXMvZXh0cmFjdE1lbW9yaWVzLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvZXh0cmFjdE1lbW9yaWVzL2V4dHJhY3RNZW1vcmllcy5qcycpKVxuICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5jb25zdCBTSFVURE9XTl9URUFNX1BST01QVCA9IGA8c3lzdGVtLXJlbWluZGVyPlxuWW91IGFyZSBydW5uaW5nIGluIG5vbi1pbnRlcmFjdGl2ZSBtb2RlIGFuZCBjYW5ub3QgcmV0dXJuIGEgcmVzcG9uc2UgdG8gdGhlIHVzZXIgdW50aWwgeW91ciB0ZWFtIGlzIHNodXQgZG93bi5cblxuWW91IE1VU1Qgc2h1dCBkb3duIHlvdXIgdGVhbSBiZWZvcmUgcHJlcGFyaW5nIHlvdXIgZmluYWwgcmVzcG9uc2U6XG4xLiBVc2UgcmVxdWVzdFNodXRkb3duIHRvIGFzayBlYWNoIHRlYW0gbWVtYmVyIHRvIHNodXQgZG93biBncmFjZWZ1bGx5XG4yLiBXYWl0IGZvciBzaHV0ZG93biBhcHByb3ZhbHNcbjMuIFVzZSB0aGUgY2xlYW51cCBvcGVyYXRpb24gdG8gY2xlYW4gdXAgdGhlIHRlYW1cbjQuIE9ubHkgdGhlbiBwcm92aWRlIHlvdXIgZmluYWwgcmVzcG9uc2UgdG8gdGhlIHVzZXJcblxuVGhlIHVzZXIgY2Fubm90IHJlY2VpdmUgeW91ciByZXNwb25zZSB1bnRpbCB0aGUgdGVhbSBpcyBjb21wbGV0ZWx5IHNodXQgZG93bi5cbjwvc3lzdGVtLXJlbWluZGVyPlxuXG5TaHV0IGRvd24geW91ciB0ZWFtIGFuZCBwcmVwYXJlIHlvdXIgZmluYWwgcmVzcG9uc2UgZm9yIHRoZSB1c2VyLmBcblxuLy8gVHJhY2sgbWVzc2FnZSBVVUlEcyByZWNlaXZlZCBkdXJpbmcgdGhlIGN1cnJlbnQgc2Vzc2lvbiBydW50aW1lXG5jb25zdCBNQVhfUkVDRUlWRURfVVVJRFMgPSAxMF8wMDBcbmNvbnN0IHJlY2VpdmVkTWVzc2FnZVV1aWRzID0gbmV3IFNldDxVVUlEPigpXG5jb25zdCByZWNlaXZlZE1lc3NhZ2VVdWlkc09yZGVyOiBVVUlEW10gPSBbXVxuXG5mdW5jdGlvbiB0cmFja1JlY2VpdmVkTWVzc2FnZVV1aWQodXVpZDogVVVJRCk6IGJvb2xlYW4ge1xuICBpZiAocmVjZWl2ZWRNZXNzYWdlVXVpZHMuaGFzKHV1aWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIGR1cGxpY2F0ZVxuICB9XG4gIHJlY2VpdmVkTWVzc2FnZVV1aWRzLmFkZCh1dWlkKVxuICByZWNlaXZlZE1lc3NhZ2VVdWlkc09yZGVyLnB1c2godXVpZClcbiAgLy8gRXZpY3Qgb2xkZXN0IGVudHJpZXMgd2hlbiBhdCBjYXBhY2l0eVxuICBpZiAocmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5sZW5ndGggPiBNQVhfUkVDRUlWRURfVVVJRFMpIHtcbiAgICBjb25zdCB0b0V2aWN0ID0gcmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5zcGxpY2UoXG4gICAgICAwLFxuICAgICAgcmVjZWl2ZWRNZXNzYWdlVXVpZHNPcmRlci5sZW5ndGggLSBNQVhfUkVDRUlWRURfVVVJRFMsXG4gICAgKVxuICAgIGZvciAoY29uc3Qgb2xkIG9mIHRvRXZpY3QpIHtcbiAgICAgIHJlY2VpdmVkTWVzc2FnZVV1aWRzLmRlbGV0ZShvbGQpXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlIC8vIG5ldyBVVUlEXG59XG5cbnR5cGUgUHJvbXB0VmFsdWUgPSBzdHJpbmcgfCBDb250ZW50QmxvY2tQYXJhbVtdXG5cbmZ1bmN0aW9uIHRvQmxvY2tzKHY6IFByb21wdFZhbHVlKTogQ29udGVudEJsb2NrUGFyYW1bXSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyBbeyB0eXBlOiAndGV4dCcsIHRleHQ6IHYgfV0gOiB2XG59XG5cbi8qKlxuICogSm9pbiBwcm9tcHQgdmFsdWVzIGZyb20gbXVsdGlwbGUgcXVldWVkIGNvbW1hbmRzIGludG8gb25lLiBTdHJpbmdzIGFyZVxuICogbmV3bGluZS1qb2luZWQ7IGlmIGFueSB2YWx1ZSBpcyBhIGJsb2NrIGFycmF5LCBhbGwgdmFsdWVzIGFyZSBub3JtYWxpemVkXG4gKiB0byBibG9ja3MgYW5kIGNvbmNhdGVuYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Qcm9tcHRWYWx1ZXModmFsdWVzOiBQcm9tcHRWYWx1ZVtdKTogUHJvbXB0VmFsdWUge1xuICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHZhbHVlc1swXSFcbiAgaWYgKHZhbHVlcy5ldmVyeSh2ID0+IHR5cGVvZiB2ID09PSAnc3RyaW5nJykpIHtcbiAgICByZXR1cm4gdmFsdWVzLmpvaW4oJ1xcbicpXG4gIH1cbiAgcmV0dXJuIHZhbHVlcy5mbGF0TWFwKHRvQmxvY2tzKVxufVxuXG4vKipcbiAqIFdoZXRoZXIgYG5leHRgIGNhbiBiZSBiYXRjaGVkIGludG8gdGhlIHNhbWUgYXNrKCkgY2FsbCBhcyBgaGVhZGAuIE9ubHlcbiAqIHByb21wdC1tb2RlIGNvbW1hbmRzIGJhdGNoLCBhbmQgb25seSB3aGVuIHRoZSB3b3JrbG9hZCB0YWcgbWF0Y2hlcyAoc28gdGhlXG4gKiBjb21iaW5lZCB0dXJuIGlzIGF0dHJpYnV0ZWQgY29ycmVjdGx5KSBhbmQgdGhlIGlzTWV0YSBmbGFnIG1hdGNoZXMgKHNvIGFcbiAqIHByb2FjdGl2ZSB0aWNrIGNhbid0IG1lcmdlIGludG8gYSB1c2VyIHByb21wdCBhbmQgbG9zZSBpdHMgaGlkZGVuLWluLVxuICogdHJhbnNjcmlwdCBtYXJraW5nIHdoZW4gdGhlIGhlYWQgaXMgc3ByZWFkIG92ZXIgdGhlIG1lcmdlZCBjb21tYW5kKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbkJhdGNoV2l0aChcbiAgaGVhZDogUXVldWVkQ29tbWFuZCxcbiAgbmV4dDogUXVldWVkQ29tbWFuZCB8IHVuZGVmaW5lZCxcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIG5leHQgIT09IHVuZGVmaW5lZCAmJlxuICAgIG5leHQubW9kZSA9PT0gJ3Byb21wdCcgJiZcbiAgICBuZXh0Lndvcmtsb2FkID09PSBoZWFkLndvcmtsb2FkICYmXG4gICAgbmV4dC5pc01ldGEgPT09IGhlYWQuaXNNZXRhXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkhlYWRsZXNzKFxuICBpbnB1dFByb21wdDogc3RyaW5nIHwgQXN5bmNJdGVyYWJsZTxzdHJpbmc+LFxuICBnZXRBcHBTdGF0ZTogKCkgPT4gQXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgY29tbWFuZHM6IENvbW1hbmRbXSxcbiAgdG9vbHM6IFRvb2xzLFxuICBzZGtNY3BDb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZGtTZXJ2ZXJDb25maWc+LFxuICBhZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdLFxuICBvcHRpb25zOiB7XG4gICAgY29udGludWU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICByZXN1bWU6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICByZXN1bWVTZXNzaW9uQXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHZlcmJvc2U6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBvdXRwdXRGb3JtYXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGpzb25TY2hlbWE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkXG4gICAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhbGxvd2VkVG9vbHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG4gICAgdGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnIHwgdW5kZWZpbmVkXG4gICAgbWF4VHVybnM6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgIG1heEJ1ZGdldFVzZDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgdGFza0J1ZGdldDogeyB0b3RhbDogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBzeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGFwcGVuZFN5c3RlbVByb21wdDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgdXNlclNwZWNpZmllZE1vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBmYWxsYmFja01vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICB0ZWxlcG9ydDogc3RyaW5nIHwgdHJ1ZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICBzZGtVcmw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHJlcGxheVVzZXJNZXNzYWdlczogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBmb3JrU2Vzc2lvbjogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIHJld2luZEZpbGVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBlbmFibGVBdXRoU3RhdHVzOiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgYWdlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHdvcmtsb2FkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBzZXR1cFRyaWdnZXI/OiAnaW5pdCcgfCAnbWFpbnRlbmFuY2UnIHwgdW5kZWZpbmVkXG4gICAgc2Vzc2lvblN0YXJ0SG9va3NQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzPlxuICAgIHNldFNES1N0YXR1cz86IChzdGF0dXM6IFNES1N0YXR1cykgPT4gdm9pZFxuICB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRVhJVF9BRlRFUl9GSVJTVF9SRU5ERVIpXG4gICkge1xuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgYFxcblN0YXJ0dXAgdGltZTogJHtNYXRoLnJvdW5kKHByb2Nlc3MudXB0aW1lKCkgKiAxMDAwKX1tc1xcbmAsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDApXG4gIH1cblxuICAvLyBGaXJlIHVzZXIgc2V0dGluZ3MgZG93bmxvYWQgbm93IHNvIGl0IG92ZXJsYXBzIHdpdGggdGhlIE1DUC90b29sIHNldHVwXG4gIC8vIGJlbG93LiBNYW5hZ2VkIHNldHRpbmdzIGFscmVhZHkgc3RhcnRlZCBpbiBtYWluLnRzeCBwcmVBY3Rpb247IHRoaXMgZ2l2ZXNcbiAgLy8gdXNlciBzZXR0aW5ncyBhIHNpbWlsYXIgaGVhZCBzdGFydC4gVGhlIGNhY2hlZCBwcm9taXNlIGlzIGpvaW5lZCBpblxuICAvLyBpbnN0YWxsUGx1Z2luc0FuZEFwcGx5TWNwSW5CYWNrZ3JvdW5kIGJlZm9yZSBwbHVnaW4gaW5zdGFsbCByZWFkc1xuICAvLyBlbmFibGVkUGx1Z2lucy5cbiAgaWYgKFxuICAgIGZlYXR1cmUoJ0RPV05MT0FEX1VTRVJfU0VUVElOR1MnKSAmJlxuICAgIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEUpIHx8IGdldElzUmVtb3RlTW9kZSgpKVxuICApIHtcbiAgICB2b2lkIGRvd25sb2FkVXNlclNldHRpbmdzKClcbiAgfVxuXG4gIC8vIEluIGhlYWRsZXNzIG1vZGUgdGhlcmUgaXMgbm8gUmVhY3QgdHJlZSwgc28gdGhlIHVzZVNldHRpbmdzQ2hhbmdlIGhvb2tcbiAgLy8gbmV2ZXIgcnVucy4gU3Vic2NyaWJlIGRpcmVjdGx5IHNvIHRoYXQgc2V0dGluZ3MgY2hhbmdlcyAoaW5jbHVkaW5nXG4gIC8vIG1hbmFnZWQtc2V0dGluZ3MgLyBwb2xpY3kgdXBkYXRlcykgYXJlIGZ1bGx5IGFwcGxpZWQuXG4gIHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3Iuc3Vic2NyaWJlKHNvdXJjZSA9PiB7XG4gICAgYXBwbHlTZXR0aW5nc0NoYW5nZShzb3VyY2UsIHNldEFwcFN0YXRlKVxuXG4gICAgLy8gSW4gaGVhZGxlc3MgbW9kZSwgYWxzbyBzeW5jIHRoZSBkZW5vcm1hbGl6ZWQgZmFzdE1vZGUgZmllbGQgZnJvbVxuICAgIC8vIHNldHRpbmdzLiBUaGUgVFVJIG1hbmFnZXMgZmFzdE1vZGUgdmlhIHRoZSBVSSBzbyBpdCBza2lwcyB0aGlzLlxuICAgIGlmIChpc0Zhc3RNb2RlRW5hYmxlZCgpKSB7XG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHByZXYuc2V0dGluZ3MgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgY29uc3QgZmFzdE1vZGUgPSBzLmZhc3RNb2RlID09PSB0cnVlICYmICFzLmZhc3RNb2RlUGVyU2Vzc2lvbk9wdEluXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIGZhc3RNb2RlIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8vIFByb2FjdGl2ZSBhY3RpdmF0aW9uIGlzIG5vdyBoYW5kbGVkIGluIG1haW4udHN4IGJlZm9yZSBnZXRUb29scygpIHNvXG4gIC8vIFNsZWVwVG9vbCBwYXNzZXMgaXNFbmFibGVkKCkgZmlsdGVyaW5nLiBUaGlzIGZhbGxiYWNrIGNvdmVycyB0aGUgY2FzZVxuICAvLyB3aGVyZSBDTEFVREVfQ09ERV9QUk9BQ1RJVkUgaXMgc2V0IGJ1dCBtYWluLnRzeCdzIGNoZWNrIGRpZG4ndCBmaXJlXG4gIC8vIChlLmcuIGVudiB3YXMgaW5qZWN0ZWQgYnkgdGhlIFNESyB0cmFuc3BvcnQgYWZ0ZXIgYXJndiBwYXJzaW5nKS5cbiAgaWYgKFxuICAgIChmZWF0dXJlKCdQUk9BQ1RJVkUnKSB8fCBmZWF0dXJlKCdLQUlST1MnKSkgJiZcbiAgICBwcm9hY3RpdmVNb2R1bGUgJiZcbiAgICAhcHJvYWN0aXZlTW9kdWxlLmlzUHJvYWN0aXZlQWN0aXZlKCkgJiZcbiAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9QUk9BQ1RJVkUpXG4gICkge1xuICAgIHByb2FjdGl2ZU1vZHVsZS5hY3RpdmF0ZVByb2FjdGl2ZSgnY29tbWFuZCcpXG4gIH1cblxuICAvLyBQZXJpb2RpY2FsbHkgZm9yY2UgYSBmdWxsIEdDIHRvIGtlZXAgbWVtb3J5IHVzYWdlIGluIGNoZWNrXG4gIGlmICh0eXBlb2YgQnVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IGdjVGltZXIgPSBzZXRJbnRlcnZhbChCdW4uZ2MsIDEwMDApXG4gICAgZ2NUaW1lci51bnJlZigpXG4gIH1cblxuICAvLyBTdGFydCBoZWFkbGVzcyBwcm9maWxlciBmb3IgZmlyc3QgdHVyblxuICBoZWFkbGVzc1Byb2ZpbGVyU3RhcnRUdXJuKClcbiAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ3J1bkhlYWRsZXNzX2VudHJ5JylcblxuICAvLyBDaGVjayBHcm92ZSByZXF1aXJlbWVudHMgZm9yIG5vbi1pbnRlcmFjdGl2ZSBjb25zdW1lciBzdWJzY3JpYmVyc1xuICBpZiAoYXdhaXQgaXNRdWFsaWZpZWRGb3JHcm92ZSgpKSB7XG4gICAgYXdhaXQgY2hlY2tHcm92ZUZvck5vbkludGVyYWN0aXZlKClcbiAgfVxuICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgnYWZ0ZXJfZ3JvdmVfY2hlY2snKVxuXG4gIC8vIEluaXRpYWxpemUgR3Jvd3RoQm9vayBzbyBmZWF0dXJlIGZsYWdzIHRha2UgZWZmZWN0IGluIGhlYWRsZXNzIG1vZGUuXG4gIC8vIFdpdGhvdXQgdGhpcywgdGhlIGRpc2sgY2FjaGUgaXMgZW1wdHkgYW5kIGFsbCBmbGFncyBmYWxsIGJhY2sgdG8gZGVmYXVsdHMuXG4gIHZvaWQgaW5pdGlhbGl6ZUdyb3d0aEJvb2soKVxuXG4gIGlmIChvcHRpb25zLnJlc3VtZVNlc3Npb25BdCAmJiAhb3B0aW9ucy5yZXN1bWUpIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShgRXJyb3I6IC0tcmVzdW1lLXNlc3Npb24tYXQgcmVxdWlyZXMgLS1yZXN1bWVcXG5gKVxuICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAob3B0aW9ucy5yZXdpbmRGaWxlcyAmJiAhb3B0aW9ucy5yZXN1bWUpIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShgRXJyb3I6IC0tcmV3aW5kLWZpbGVzIHJlcXVpcmVzIC0tcmVzdW1lXFxuYClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG9wdGlvbnMucmV3aW5kRmlsZXMgJiYgaW5wdXRQcm9tcHQpIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgIGBFcnJvcjogLS1yZXdpbmQtZmlsZXMgaXMgYSBzdGFuZGFsb25lIG9wZXJhdGlvbiBhbmQgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHByb21wdFxcbmAsXG4gICAgKVxuICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHJ1Y3R1cmVkSU8gPSBnZXRTdHJ1Y3R1cmVkSU8oaW5wdXRQcm9tcHQsIG9wdGlvbnMpXG5cbiAgLy8gV2hlbiBlbWl0dGluZyBOREpTT04gZm9yIFNESyBjbGllbnRzLCBhbnkgc3RyYXkgd3JpdGUgdG8gc3Rkb3V0IChkZWJ1Z1xuICAvLyBwcmludHMsIGRlcGVuZGVuY3kgY29uc29sZS5sb2csIGxpYnJhcnkgYmFubmVycykgYnJlYWtzIHRoZSBjbGllbnQnc1xuICAvLyBsaW5lLWJ5LWxpbmUgSlNPTiBwYXJzZXIuIEluc3RhbGwgYSBndWFyZCB0aGF0IGRpdmVydHMgbm9uLUpTT04gbGluZXMgdG9cbiAgLy8gc3RkZXJyIHNvIHRoZSBzdHJlYW0gc3RheXMgY2xlYW4uIE11c3QgcnVuIGJlZm9yZSB0aGUgZmlyc3RcbiAgLy8gc3RydWN0dXJlZElPLndyaXRlIGJlbG93LlxuICBpZiAob3B0aW9ucy5vdXRwdXRGb3JtYXQgPT09ICdzdHJlYW0tanNvbicpIHtcbiAgICBpbnN0YWxsU3RyZWFtSnNvblN0ZG91dEd1YXJkKClcbiAgfVxuXG4gIC8vICMzNDA0NDogaWYgdXNlciBleHBsaWNpdGx5IHNldCBzYW5kYm94LmVuYWJsZWQ9dHJ1ZSBidXQgZGVwcyBhcmUgbWlzc2luZyxcbiAgLy8gaXNTYW5kYm94aW5nRW5hYmxlZCgpIHJldHVybnMgZmFsc2Ugc2lsZW50bHkuIFN1cmZhY2UgdGhlIHJlYXNvbiBzbyB1c2Vyc1xuICAvLyBrbm93IHRoZWlyIHNlY3VyaXR5IGNvbmZpZyBpc24ndCBiZWluZyBlbmZvcmNlZC5cbiAgY29uc3Qgc2FuZGJveFVuYXZhaWxhYmxlUmVhc29uID0gU2FuZGJveE1hbmFnZXIuZ2V0U2FuZGJveFVuYXZhaWxhYmxlUmVhc29uKClcbiAgaWYgKHNhbmRib3hVbmF2YWlsYWJsZVJlYXNvbikge1xuICAgIGlmIChTYW5kYm94TWFuYWdlci5pc1NhbmRib3hSZXF1aXJlZCgpKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgYFxcbkVycm9yOiBzYW5kYm94IHJlcXVpcmVkIGJ1dCB1bmF2YWlsYWJsZTogJHtzYW5kYm94VW5hdmFpbGFibGVSZWFzb259XFxuYCArXG4gICAgICAgICAgYCAgc2FuZGJveC5mYWlsSWZVbmF2YWlsYWJsZSBpcyBzZXQgXHUyMDE0IHJlZnVzaW5nIHRvIHN0YXJ0IHdpdGhvdXQgYSB3b3JraW5nIHNhbmRib3guXFxuXFxuYCxcbiAgICAgIClcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICBgXFxuXHUyNkEwIFNhbmRib3ggZGlzYWJsZWQ6ICR7c2FuZGJveFVuYXZhaWxhYmxlUmVhc29ufVxcbmAgK1xuICAgICAgICBgICBDb21tYW5kcyB3aWxsIHJ1biBXSVRIT1VUIHNhbmRib3hpbmcuIE5ldHdvcmsgYW5kIGZpbGVzeXN0ZW0gcmVzdHJpY3Rpb25zIHdpbGwgTk9UIGJlIGVuZm9yY2VkLlxcblxcbmAsXG4gICAgKVxuICB9IGVsc2UgaWYgKFNhbmRib3hNYW5hZ2VyLmlzU2FuZGJveGluZ0VuYWJsZWQoKSkge1xuICAgIC8vIEluaXRpYWxpemUgc2FuZGJveCB3aXRoIGEgY2FsbGJhY2sgdGhhdCBmb3J3YXJkcyBuZXR3b3JrIHBlcm1pc3Npb25cbiAgICAvLyByZXF1ZXN0cyB0byB0aGUgU0RLIGhvc3QgdmlhIHRoZSBjYW5fdXNlX3Rvb2wgY29udHJvbF9yZXF1ZXN0IHByb3RvY29sLlxuICAgIC8vIFRoaXMgbXVzdCBoYXBwZW4gYWZ0ZXIgc3RydWN0dXJlZElPIGlzIGNyZWF0ZWQgc28gd2UgY2FuIHNlbmQgcmVxdWVzdHMuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFNhbmRib3hNYW5hZ2VyLmluaXRpYWxpemUoc3RydWN0dXJlZElPLmNyZWF0ZVNhbmRib3hBc2tDYWxsYmFjaygpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYFxcblx1Mjc0QyBTYW5kYm94IEVycm9yOiAke2Vycm9yTWVzc2FnZShlcnIpfVxcbmApXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxLCAnb3RoZXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnc3RyZWFtLWpzb24nICYmIG9wdGlvbnMudmVyYm9zZSkge1xuICAgIHJlZ2lzdGVySG9va0V2ZW50SGFuZGxlcihldmVudCA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBTdGRvdXRNZXNzYWdlID0gKCgpID0+IHtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnc3RhcnRlZCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2hvb2tfc3RhcnRlZCcgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGhvb2tfaWQ6IGV2ZW50Lmhvb2tJZCxcbiAgICAgICAgICAgICAgaG9va19uYW1lOiBldmVudC5ob29rTmFtZSxcbiAgICAgICAgICAgICAgaG9va19ldmVudDogZXZlbnQuaG9va0V2ZW50LFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaG9va19wcm9ncmVzcycgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGhvb2tfaWQ6IGV2ZW50Lmhvb2tJZCxcbiAgICAgICAgICAgICAgaG9va19uYW1lOiBldmVudC5ob29rTmFtZSxcbiAgICAgICAgICAgICAgaG9va19ldmVudDogZXZlbnQuaG9va0V2ZW50LFxuICAgICAgICAgICAgICBzdGRvdXQ6IGV2ZW50LnN0ZG91dCxcbiAgICAgICAgICAgICAgc3RkZXJyOiBldmVudC5zdGRlcnIsXG4gICAgICAgICAgICAgIG91dHB1dDogZXZlbnQub3V0cHV0LFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaG9va19yZXNwb25zZScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGhvb2tfaWQ6IGV2ZW50Lmhvb2tJZCxcbiAgICAgICAgICAgICAgaG9va19uYW1lOiBldmVudC5ob29rTmFtZSxcbiAgICAgICAgICAgICAgaG9va19ldmVudDogZXZlbnQuaG9va0V2ZW50LFxuICAgICAgICAgICAgICBvdXRwdXQ6IGV2ZW50Lm91dHB1dCxcbiAgICAgICAgICAgICAgc3Rkb3V0OiBldmVudC5zdGRvdXQsXG4gICAgICAgICAgICAgIHN0ZGVycjogZXZlbnQuc3RkZXJyLFxuICAgICAgICAgICAgICBleGl0X2NvZGU6IGV2ZW50LmV4aXRDb2RlLFxuICAgICAgICAgICAgICBvdXRjb21lOiBldmVudC5vdXRjb21lLFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSgpXG4gICAgICB2b2lkIHN0cnVjdHVyZWRJTy53cml0ZShtZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBpZiAob3B0aW9ucy5zZXR1cFRyaWdnZXIpIHtcbiAgICBhd2FpdCBwcm9jZXNzU2V0dXBIb29rcyhvcHRpb25zLnNldHVwVHJpZ2dlcilcbiAgfVxuXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdiZWZvcmVfbG9hZEluaXRpYWxNZXNzYWdlcycpXG4gIGNvbnN0IGFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICBjb25zdCB7XG4gICAgbWVzc2FnZXM6IGluaXRpYWxNZXNzYWdlcyxcbiAgICB0dXJuSW50ZXJydXB0aW9uU3RhdGUsXG4gICAgYWdlbnRTZXR0aW5nOiByZXN1bWVkQWdlbnRTZXR0aW5nLFxuICB9ID0gYXdhaXQgbG9hZEluaXRpYWxNZXNzYWdlcyhzZXRBcHBTdGF0ZSwge1xuICAgIGNvbnRpbnVlOiBvcHRpb25zLmNvbnRpbnVlLFxuICAgIHRlbGVwb3J0OiBvcHRpb25zLnRlbGVwb3J0LFxuICAgIHJlc3VtZTogb3B0aW9ucy5yZXN1bWUsXG4gICAgcmVzdW1lU2Vzc2lvbkF0OiBvcHRpb25zLnJlc3VtZVNlc3Npb25BdCxcbiAgICBmb3JrU2Vzc2lvbjogb3B0aW9ucy5mb3JrU2Vzc2lvbixcbiAgICBvdXRwdXRGb3JtYXQ6IG9wdGlvbnMub3V0cHV0Rm9ybWF0LFxuICAgIHNlc3Npb25TdGFydEhvb2tzUHJvbWlzZTogb3B0aW9ucy5zZXNzaW9uU3RhcnRIb29rc1Byb21pc2UsXG4gICAgcmVzdG9yZWRXb3JrZXJTdGF0ZTogc3RydWN0dXJlZElPLnJlc3RvcmVkV29ya2VyU3RhdGUsXG4gIH0pXG5cbiAgLy8gU2Vzc2lvblN0YXJ0IGhvb2tzIGNhbiBlbWl0IGluaXRpYWxVc2VyTWVzc2FnZSBcdTIwMTQgdGhlIGZpcnN0IHVzZXIgdHVybiBmb3JcbiAgLy8gaGVhZGxlc3Mgb3JjaGVzdHJhdG9yIHNlc3Npb25zIHdoZXJlIHN0ZGluIGlzIGVtcHR5IGFuZCBhZGRpdGlvbmFsQ29udGV4dFxuICAvLyBhbG9uZSAoYW4gYXR0YWNobWVudCwgbm90IGEgdHVybikgd291bGQgbGVhdmUgdGhlIFJFUEwgd2l0aCBub3RoaW5nIHRvXG4gIC8vIHJlc3BvbmQgdG8uIFRoZSBob29rIHByb21pc2UgaXMgYXdhaXRlZCBpbnNpZGUgbG9hZEluaXRpYWxNZXNzYWdlcywgc28gdGhlXG4gIC8vIG1vZHVsZS1sZXZlbCBwZW5kaW5nIHZhbHVlIGlzIHNldCBieSB0aGUgdGltZSB3ZSBnZXQgaGVyZS5cbiAgY29uc3QgaG9va0luaXRpYWxVc2VyTWVzc2FnZSA9IHRha2VJbml0aWFsVXNlck1lc3NhZ2UoKVxuICBpZiAoaG9va0luaXRpYWxVc2VyTWVzc2FnZSkge1xuICAgIHN0cnVjdHVyZWRJTy5wcmVwZW5kVXNlck1lc3NhZ2UoaG9va0luaXRpYWxVc2VyTWVzc2FnZSlcbiAgfVxuXG4gIC8vIFJlc3RvcmUgYWdlbnQgc2V0dGluZyBmcm9tIHRoZSByZXN1bWVkIHNlc3Npb24gKGlmIG5vdCBvdmVycmlkZGVuIGJ5IGN1cnJlbnQgLS1hZ2VudCBmbGFnXG4gIC8vIG9yIHNldHRpbmdzLWJhc2VkIGFnZW50LCB3aGljaCB3b3VsZCBhbHJlYWR5IGhhdmUgc2V0IG1haW5UaHJlYWRBZ2VudFR5cGUgaW4gbWFpbi50c3gpXG4gIGlmICghb3B0aW9ucy5hZ2VudCAmJiAhZ2V0TWFpblRocmVhZEFnZW50VHlwZSgpICYmIHJlc3VtZWRBZ2VudFNldHRpbmcpIHtcbiAgICBjb25zdCB7IGFnZW50RGVmaW5pdGlvbjogcmVzdG9yZWRBZ2VudCB9ID0gcmVzdG9yZUFnZW50RnJvbVNlc3Npb24oXG4gICAgICByZXN1bWVkQWdlbnRTZXR0aW5nLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgeyBhY3RpdmVBZ2VudHM6IGFnZW50cywgYWxsQWdlbnRzOiBhZ2VudHMgfSxcbiAgICApXG4gICAgaWYgKHJlc3RvcmVkQWdlbnQpIHtcbiAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgYWdlbnQ6IHJlc3RvcmVkQWdlbnQuYWdlbnRUeXBlIH0pKVxuICAgICAgLy8gQXBwbHkgdGhlIGFnZW50J3Mgc3lzdGVtIHByb21wdCBmb3Igbm9uLWJ1aWx0LWluIGFnZW50cyAobWlycm9ycyBtYWluLnRzeCBpbml0aWFsIC0tYWdlbnQgcGF0aClcbiAgICAgIGlmICghb3B0aW9ucy5zeXN0ZW1Qcm9tcHQgJiYgIWlzQnVpbHRJbkFnZW50KHJlc3RvcmVkQWdlbnQpKSB7XG4gICAgICAgIGNvbnN0IGFnZW50U3lzdGVtUHJvbXB0ID0gcmVzdG9yZWRBZ2VudC5nZXRTeXN0ZW1Qcm9tcHQoKVxuICAgICAgICBpZiAoYWdlbnRTeXN0ZW1Qcm9tcHQpIHtcbiAgICAgICAgICBvcHRpb25zLnN5c3RlbVByb21wdCA9IGFnZW50U3lzdGVtUHJvbXB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFJlLXBlcnNpc3QgYWdlbnQgc2V0dGluZyBzbyBmdXR1cmUgcmVzdW1lcyBtYWludGFpbiB0aGUgYWdlbnRcbiAgICAgIHNhdmVBZ2VudFNldHRpbmcocmVzdG9yZWRBZ2VudC5hZ2VudFR5cGUpXG4gICAgfVxuICB9XG5cbiAgLy8gZ3JhY2VmdWxTaHV0ZG93blN5bmMgc2NoZWR1bGVzIGFuIGFzeW5jIHNodXRkb3duIGFuZCBzZXRzIHByb2Nlc3MuZXhpdENvZGUuXG4gIC8vIElmIGEgbG9hZEluaXRpYWxNZXNzYWdlcyBlcnJvciBwYXRoIHRyaWdnZXJlZCBpdCwgYmFpbCBlYXJseSB0byBhdm9pZFxuICAvLyB1bm5lY2Vzc2FyeSB3b3JrIHdoaWxlIHRoZSBwcm9jZXNzIHdpbmRzIGRvd24uXG4gIGlmIChpbml0aWFsTWVzc2FnZXMubGVuZ3RoID09PSAwICYmIHByb2Nlc3MuZXhpdENvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSGFuZGxlIC0tcmV3aW5kLWZpbGVzOiByZXN0b3JlIGZpbGVzeXN0ZW0gYW5kIGV4aXQgaW1tZWRpYXRlbHlcbiAgaWYgKG9wdGlvbnMucmV3aW5kRmlsZXMpIHtcbiAgICAvLyBGaWxlIGhpc3Rvcnkgc25hcHNob3RzIGFyZSBvbmx5IGNyZWF0ZWQgZm9yIHVzZXIgbWVzc2FnZXMsXG4gICAgLy8gc28gd2UgcmVxdWlyZSB0aGUgdGFyZ2V0IHRvIGJlIGEgdXNlciBtZXNzYWdlXG4gICAgY29uc3QgdGFyZ2V0TWVzc2FnZSA9IGluaXRpYWxNZXNzYWdlcy5maW5kKFxuICAgICAgbSA9PiBtLnV1aWQgPT09IG9wdGlvbnMucmV3aW5kRmlsZXMsXG4gICAgKVxuXG4gICAgaWYgKCF0YXJnZXRNZXNzYWdlIHx8IHRhcmdldE1lc3NhZ2UudHlwZSAhPT0gJ3VzZXInKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgYEVycm9yOiAtLXJld2luZC1maWxlcyByZXF1aXJlcyBhIHVzZXIgbWVzc2FnZSBVVUlELCBidXQgJHtvcHRpb25zLnJld2luZEZpbGVzfSBpcyBub3QgYSB1c2VyIG1lc3NhZ2UgaW4gdGhpcyBzZXNzaW9uXFxuYCxcbiAgICAgIClcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlUmV3aW5kRmlsZXMoXG4gICAgICBvcHRpb25zLnJld2luZEZpbGVzIGFzIFVVSUQsXG4gICAgICBjdXJyZW50QXBwU3RhdGUsXG4gICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgIGZhbHNlLFxuICAgIClcbiAgICBpZiAoIXJlc3VsdC5jYW5SZXdpbmQpIHtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGBFcnJvcjogJHtyZXN1bHQuZXJyb3IgfHwgJ1VuZXhwZWN0ZWQgZXJyb3InfVxcbmApXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gUmV3aW5kIGNvbXBsZXRlIC0gZXhpdCBzdWNjZXNzZnVsbHlcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShcbiAgICAgIGBGaWxlcyByZXdvdW5kIHRvIHN0YXRlIGF0IG1lc3NhZ2UgJHtvcHRpb25zLnJld2luZEZpbGVzfVxcbmAsXG4gICAgKVxuICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDApXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIGlucHV0IHByb21wdCAtIHNraXAgaWYgd2UncmUgcmVzdW1pbmcgd2l0aCBhIHZhbGlkIHNlc3Npb24gSUQvSlNPTkwgZmlsZSBvciB1c2luZyBTREsgVVJMXG4gIGNvbnN0IGhhc1ZhbGlkUmVzdW1lU2Vzc2lvbklkID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5yZXN1bWUgPT09ICdzdHJpbmcnICYmXG4gICAgKEJvb2xlYW4odmFsaWRhdGVVdWlkKG9wdGlvbnMucmVzdW1lKSkgfHwgb3B0aW9ucy5yZXN1bWUuZW5kc1dpdGgoJy5qc29ubCcpKVxuICBjb25zdCBpc1VzaW5nU2RrVXJsID0gQm9vbGVhbihvcHRpb25zLnNka1VybClcblxuICBpZiAoIWlucHV0UHJvbXB0ICYmICFoYXNWYWxpZFJlc3VtZVNlc3Npb25JZCAmJiAhaXNVc2luZ1Nka1VybCkge1xuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgYEVycm9yOiBJbnB1dCBtdXN0IGJlIHByb3ZpZGVkIGVpdGhlciB0aHJvdWdoIHN0ZGluIG9yIGFzIGEgcHJvbXB0IGFyZ3VtZW50IHdoZW4gdXNpbmcgLS1wcmludFxcbmAsXG4gICAgKVxuICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAob3B0aW9ucy5vdXRwdXRGb3JtYXQgPT09ICdzdHJlYW0tanNvbicgJiYgIW9wdGlvbnMudmVyYm9zZSkge1xuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgJ0Vycm9yOiBXaGVuIHVzaW5nIC0tcHJpbnQsIC0tb3V0cHV0LWZvcm1hdD1zdHJlYW0tanNvbiByZXF1aXJlcyAtLXZlcmJvc2VcXG4nLFxuICAgIClcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRmlsdGVyIG91dCBNQ1AgdG9vbHMgdGhhdCBhcmUgaW4gdGhlIGRlbnkgbGlzdFxuICBjb25zdCBhbGxvd2VkTWNwVG9vbHMgPSBmaWx0ZXJUb29sc0J5RGVueVJ1bGVzKFxuICAgIGFwcFN0YXRlLm1jcC50b29scyxcbiAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gIClcbiAgbGV0IGZpbHRlcmVkVG9vbHMgPSBbLi4udG9vbHMsIC4uLmFsbG93ZWRNY3BUb29sc11cblxuICAvLyBXaGVuIHVzaW5nIFNESyBVUkwsIGFsd2F5cyB1c2Ugc3RkaW8gcGVybWlzc2lvbiBwcm9tcHRpbmcgdG8gZGVsZWdhdGUgdG8gdGhlIFNES1xuICBjb25zdCBlZmZlY3RpdmVQZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUgPSBvcHRpb25zLnNka1VybFxuICAgID8gJ3N0ZGlvJ1xuICAgIDogb3B0aW9ucy5wZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWVcblxuICAvLyBDYWxsYmFjayBmb3Igd2hlbiBhIHBlcm1pc3Npb24gcHJvbXB0IGlzIHNob3duXG4gIGNvbnN0IG9uUGVybWlzc2lvblByb21wdCA9IChkZXRhaWxzOiBSZXF1aXJlc0FjdGlvbkRldGFpbHMpID0+IHtcbiAgICBpZiAoZmVhdHVyZSgnQ09NTUlUX0FUVFJJQlVUSU9OJykpIHtcbiAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgYXR0cmlidXRpb246IHtcbiAgICAgICAgICAuLi5wcmV2LmF0dHJpYnV0aW9uLFxuICAgICAgICAgIHBlcm1pc3Npb25Qcm9tcHRDb3VudDogcHJldi5hdHRyaWJ1dGlvbi5wZXJtaXNzaW9uUHJvbXB0Q291bnQgKyAxLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfVxuICAgIG5vdGlmeVNlc3Npb25TdGF0ZUNoYW5nZWQoJ3JlcXVpcmVzX2FjdGlvbicsIGRldGFpbHMpXG4gIH1cblxuICBjb25zdCBjYW5Vc2VUb29sID0gZ2V0Q2FuVXNlVG9vbEZuKFxuICAgIGVmZmVjdGl2ZVBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZSxcbiAgICBzdHJ1Y3R1cmVkSU8sXG4gICAgKCkgPT4gZ2V0QXBwU3RhdGUoKS5tY3AudG9vbHMsXG4gICAgb25QZXJtaXNzaW9uUHJvbXB0LFxuICApXG4gIGlmIChvcHRpb25zLnBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZSkge1xuICAgIC8vIFJlbW92ZSB0aGUgcGVybWlzc2lvbiBwcm9tcHQgdG9vbCBmcm9tIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSB0b29scy5cbiAgICBmaWx0ZXJlZFRvb2xzID0gZmlsdGVyZWRUb29scy5maWx0ZXIoXG4gICAgICB0b29sID0+ICF0b29sTWF0Y2hlc05hbWUodG9vbCwgb3B0aW9ucy5wZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUhKSxcbiAgICApXG4gIH1cblxuICAvLyBJbnN0YWxsIGVycm9ycyBoYW5kbGVycyB0byBncmFjZWZ1bGx5IGhhbmRsZSBicm9rZW4gcGlwZXMgKGUuZy4sIHdoZW4gcGFyZW50IHByb2Nlc3MgZGllcylcbiAgcmVnaXN0ZXJQcm9jZXNzT3V0cHV0RXJyb3JIYW5kbGVycygpXG5cbiAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX2xvYWRJbml0aWFsTWVzc2FnZXMnKVxuXG4gIC8vIEVuc3VyZSBtb2RlbCBzdHJpbmdzIGFyZSBpbml0aWFsaXplZCBiZWZvcmUgZ2VuZXJhdGluZyBtb2RlbCBvcHRpb25zLlxuICAvLyBGb3IgQmVkcm9jayB1c2VycywgdGhpcyB3YWl0cyBmb3IgdGhlIHByb2ZpbGUgZmV0Y2ggdG8gZ2V0IGNvcnJlY3QgcmVnaW9uIHN0cmluZ3MuXG4gIGF3YWl0IGVuc3VyZU1vZGVsU3RyaW5nc0luaXRpYWxpemVkKClcbiAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX21vZGVsU3RyaW5ncycpXG5cbiAgLy8gVURTIGluYm94IHN0b3JlIHJlZ2lzdHJhdGlvbiBpcyBkZWZlcnJlZCB1bnRpbCBhZnRlciBgcnVuYCBpcyBkZWZpbmVkXG4gIC8vIHNvIHdlIGNhbiBwYXNzIGBydW5gIGFzIHRoZSBvbkVucXVldWUgY2FsbGJhY2sgKHNlZSBiZWxvdykuXG5cbiAgLy8gT25seSBganNvbmAgKyBgdmVyYm9zZWAgbmVlZHMgdGhlIGZ1bGwgYXJyYXkgKGpzb25TdHJpbmdpZnkobWVzc2FnZXMpIGJlbG93KS5cbiAgLy8gRm9yIHN0cmVhbS1qc29uIChTREsvQ0NSKSBhbmQgZGVmYXVsdCB0ZXh0IG91dHB1dCwgb25seSB0aGUgbGFzdCBtZXNzYWdlIGlzXG4gIC8vIHJlYWQgZm9yIHRoZSBleGl0IGNvZGUgLyBmaW5hbCByZXN1bHQuIEF2b2lkIGFjY3VtdWxhdGluZyBldmVyeSBtZXNzYWdlIGluXG4gIC8vIG1lbW9yeSBmb3IgdGhlIGVudGlyZSBzZXNzaW9uLlxuICBjb25zdCBuZWVkc0Z1bGxBcnJheSA9IG9wdGlvbnMub3V0cHV0Rm9ybWF0ID09PSAnanNvbicgJiYgb3B0aW9ucy52ZXJib3NlXG4gIGNvbnN0IG1lc3NhZ2VzOiBTREtNZXNzYWdlW10gPSBbXVxuICBsZXQgbGFzdE1lc3NhZ2U6IFNES01lc3NhZ2UgfCB1bmRlZmluZWRcbiAgLy8gU3RyZWFtbGluZWQgbW9kZSB0cmFuc2Zvcm1zIG1lc3NhZ2VzIHdoZW4gQ0xBVURFX0NPREVfU1RSRUFNTElORURfT1VUUFVUPXRydWUgYW5kIHVzaW5nIHN0cmVhbS1qc29uXG4gIC8vIEJ1aWxkIGZsYWcgZ2F0ZXMgdGhpcyBvdXQgb2YgZXh0ZXJuYWwgYnVpbGRzOyBlbnYgdmFyIGlzIHRoZSBydW50aW1lIG9wdC1pbiBmb3IgYW50IGJ1aWxkc1xuICBjb25zdCB0cmFuc2Zvcm1Ub1N0cmVhbWxpbmVkID1cbiAgICBmZWF0dXJlKCdTVFJFQU1MSU5FRF9PVVRQVVQnKSAmJlxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1NUUkVBTUxJTkVEX09VVFBVVCkgJiZcbiAgICBvcHRpb25zLm91dHB1dEZvcm1hdCA9PT0gJ3N0cmVhbS1qc29uJ1xuICAgICAgPyBjcmVhdGVTdHJlYW1saW5lZFRyYW5zZm9ybWVyKClcbiAgICAgIDogbnVsbFxuXG4gIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdiZWZvcmVfcnVuSGVhZGxlc3NTdHJlYW1pbmcnKVxuICBmb3IgYXdhaXQgKGNvbnN0IG1lc3NhZ2Ugb2YgcnVuSGVhZGxlc3NTdHJlYW1pbmcoXG4gICAgc3RydWN0dXJlZElPLFxuICAgIGFwcFN0YXRlLm1jcC5jbGllbnRzLFxuICAgIFsuLi5jb21tYW5kcywgLi4uYXBwU3RhdGUubWNwLmNvbW1hbmRzXSxcbiAgICBmaWx0ZXJlZFRvb2xzLFxuICAgIGluaXRpYWxNZXNzYWdlcyxcbiAgICBjYW5Vc2VUb29sLFxuICAgIHNka01jcENvbmZpZ3MsXG4gICAgZ2V0QXBwU3RhdGUsXG4gICAgc2V0QXBwU3RhdGUsXG4gICAgYWdlbnRzLFxuICAgIG9wdGlvbnMsXG4gICAgdHVybkludGVycnVwdGlvblN0YXRlLFxuICApKSB7XG4gICAgaWYgKHRyYW5zZm9ybVRvU3RyZWFtbGluZWQpIHtcbiAgICAgIC8vIFN0cmVhbWxpbmVkIG1vZGU6IHRyYW5zZm9ybSBtZXNzYWdlcyBhbmQgc3RyZWFtIGltbWVkaWF0ZWx5XG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybVRvU3RyZWFtbGluZWQobWVzc2FnZSlcbiAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICBhd2FpdCBzdHJ1Y3R1cmVkSU8ud3JpdGUodHJhbnNmb3JtZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm91dHB1dEZvcm1hdCA9PT0gJ3N0cmVhbS1qc29uJyAmJiBvcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgIGF3YWl0IHN0cnVjdHVyZWRJTy53cml0ZShtZXNzYWdlKVxuICAgIH1cbiAgICAvLyBTaG91bGQgbm90IGJlIGdldHRpbmcgY29udHJvbCBtZXNzYWdlcyBvciBzdHJlYW0gZXZlbnRzIGluIG5vbi1zdHJlYW0gbW9kZS5cbiAgICAvLyBBbHNvIGZpbHRlciBvdXQgc3RyZWFtbGluZWQgdHlwZXMgc2luY2UgdGhleSdyZSBvbmx5IHByb2R1Y2VkIGJ5IHRoZSB0cmFuc2Zvcm1lci5cbiAgICAvLyBTREstb25seSBzeXN0ZW0gZXZlbnRzIGFyZSBleGNsdWRlZCBzbyBsYXN0TWVzc2FnZSBzdGF5cyBhdCB0aGUgcmVzdWx0XG4gICAgLy8gKHNlc3Npb25fc3RhdGVfY2hhbmdlZChpZGxlKSBhbmQgYW55IGxhdGUgdGFza19ub3RpZmljYXRpb24gZHJhaW4gYWZ0ZXJcbiAgICAvLyByZXN1bHQgaW4gdGhlIGZpbmFsbHkgYmxvY2spLlxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2NvbnRyb2xfcmVzcG9uc2UnICYmXG4gICAgICBtZXNzYWdlLnR5cGUgIT09ICdjb250cm9sX3JlcXVlc3QnICYmXG4gICAgICBtZXNzYWdlLnR5cGUgIT09ICdjb250cm9sX2NhbmNlbF9yZXF1ZXN0JyAmJlxuICAgICAgIShcbiAgICAgICAgbWVzc2FnZS50eXBlID09PSAnc3lzdGVtJyAmJlxuICAgICAgICAobWVzc2FnZS5zdWJ0eXBlID09PSAnc2Vzc2lvbl9zdGF0ZV9jaGFuZ2VkJyB8fFxuICAgICAgICAgIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ3Rhc2tfbm90aWZpY2F0aW9uJyB8fFxuICAgICAgICAgIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ3Rhc2tfc3RhcnRlZCcgfHxcbiAgICAgICAgICBtZXNzYWdlLnN1YnR5cGUgPT09ICd0YXNrX3Byb2dyZXNzJyB8fFxuICAgICAgICAgIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ3Bvc3RfdHVybl9zdW1tYXJ5JylcbiAgICAgICkgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ3N0cmVhbV9ldmVudCcgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2tlZXBfYWxpdmUnICYmXG4gICAgICBtZXNzYWdlLnR5cGUgIT09ICdzdHJlYW1saW5lZF90ZXh0JyAmJlxuICAgICAgbWVzc2FnZS50eXBlICE9PSAnc3RyZWFtbGluZWRfdG9vbF91c2Vfc3VtbWFyeScgJiZcbiAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ3Byb21wdF9zdWdnZXN0aW9uJ1xuICAgICkge1xuICAgICAgaWYgKG5lZWRzRnVsbEFycmF5KSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgIH1cbiAgICAgIGxhc3RNZXNzYWdlID0gbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAob3B0aW9ucy5vdXRwdXRGb3JtYXQpIHtcbiAgICBjYXNlICdqc29uJzpcbiAgICAgIGlmICghbGFzdE1lc3NhZ2UgfHwgbGFzdE1lc3NhZ2UudHlwZSAhPT0gJ3Jlc3VsdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXNzYWdlcyByZXR1cm5lZCcpXG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoanNvblN0cmluZ2lmeShtZXNzYWdlcykgKyAnXFxuJylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHdyaXRlVG9TdGRvdXQoanNvblN0cmluZ2lmeShsYXN0TWVzc2FnZSkgKyAnXFxuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc3RyZWFtLWpzb24nOlxuICAgICAgLy8gYWxyZWFkeSBsb2dnZWQgYWJvdmVcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICghbGFzdE1lc3NhZ2UgfHwgbGFzdE1lc3NhZ2UudHlwZSAhPT0gJ3Jlc3VsdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXNzYWdlcyByZXR1cm5lZCcpXG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGxhc3RNZXNzYWdlLnN1YnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgICAgIGxhc3RNZXNzYWdlLnJlc3VsdC5lbmRzV2l0aCgnXFxuJylcbiAgICAgICAgICAgICAgPyBsYXN0TWVzc2FnZS5yZXN1bHRcbiAgICAgICAgICAgICAgOiBsYXN0TWVzc2FnZS5yZXN1bHQgKyAnXFxuJyxcbiAgICAgICAgICApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZXJyb3JfZHVyaW5nX2V4ZWN1dGlvbic6XG4gICAgICAgICAgd3JpdGVUb1N0ZG91dChgRXhlY3V0aW9uIGVycm9yYClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdlcnJvcl9tYXhfdHVybnMnOlxuICAgICAgICAgIHdyaXRlVG9TdGRvdXQoYEVycm9yOiBSZWFjaGVkIG1heCB0dXJucyAoJHtvcHRpb25zLm1heFR1cm5zfSlgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Vycm9yX21heF9idWRnZXRfdXNkJzpcbiAgICAgICAgICB3cml0ZVRvU3Rkb3V0KGBFcnJvcjogRXhjZWVkZWQgVVNEIGJ1ZGdldCAoJHtvcHRpb25zLm1heEJ1ZGdldFVzZH0pYClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdlcnJvcl9tYXhfc3RydWN0dXJlZF9vdXRwdXRfcmV0cmllcyc6XG4gICAgICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgICAgIGBFcnJvcjogRmFpbGVkIHRvIHByb3ZpZGUgdmFsaWQgc3RydWN0dXJlZCBvdXRwdXQgYWZ0ZXIgbWF4aW11bSByZXRyaWVzYCxcbiAgICAgICAgICApXG4gICAgICB9XG4gIH1cblxuICAvLyBMb2cgaGVhZGxlc3MgbGF0ZW5jeSBtZXRyaWNzIGZvciB0aGUgZmluYWwgdHVyblxuICBsb2dIZWFkbGVzc1Byb2ZpbGVyVHVybigpXG5cbiAgLy8gRHJhaW4gYW55IGluLWZsaWdodCBtZW1vcnkgZXh0cmFjdGlvbiBiZWZvcmUgc2h1dGRvd24uIFRoZSByZXNwb25zZSBpc1xuICAvLyBhbHJlYWR5IGZsdXNoZWQgYWJvdmUsIHNvIHRoaXMgYWRkcyBubyB1c2VyLXZpc2libGUgbGF0ZW5jeSBcdTIwMTQgaXQganVzdFxuICAvLyBkZWxheXMgcHJvY2VzcyBleGl0IHNvIGdyYWNlZnVsU2h1dGRvd25TeW5jJ3MgNXMgZmFpbHNhZmUgZG9lc24ndCBraWxsXG4gIC8vIHRoZSBmb3JrZWQgYWdlbnQgbWlkLWZsaWdodC4gR2F0ZWQgYnkgaXNFeHRyYWN0TW9kZUFjdGl2ZSBzbyB0aGVcbiAgLy8gdGVuZ3Vfc2xhdGVfdGhpbWJsZSBmbGFnIGNvbnRyb2xzIG5vbi1pbnRlcmFjdGl2ZSBleHRyYWN0aW9uIGVuZC10by1lbmQuXG4gIGlmIChmZWF0dXJlKCdFWFRSQUNUX01FTU9SSUVTJykgJiYgaXNFeHRyYWN0TW9kZUFjdGl2ZSgpKSB7XG4gICAgYXdhaXQgZXh0cmFjdE1lbW9yaWVzTW9kdWxlIS5kcmFpblBlbmRpbmdFeHRyYWN0aW9uKClcbiAgfVxuXG4gIGdyYWNlZnVsU2h1dGRvd25TeW5jKFxuICAgIGxhc3RNZXNzYWdlPy50eXBlID09PSAncmVzdWx0JyAmJiBsYXN0TWVzc2FnZT8uaXNfZXJyb3IgPyAxIDogMCxcbiAgKVxufVxuXG5mdW5jdGlvbiBydW5IZWFkbGVzc1N0cmVhbWluZyhcbiAgc3RydWN0dXJlZElPOiBTdHJ1Y3R1cmVkSU8sXG4gIG1jcENsaWVudHM6IE1DUFNlcnZlckNvbm5lY3Rpb25bXSxcbiAgY29tbWFuZHM6IENvbW1hbmRbXSxcbiAgdG9vbHM6IFRvb2xzLFxuICBpbml0aWFsTWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgY2FuVXNlVG9vbDogQ2FuVXNlVG9vbEZuLFxuICBzZGtNY3BDb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZGtTZXJ2ZXJDb25maWc+LFxuICBnZXRBcHBTdGF0ZTogKCkgPT4gQXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgYWdlbnRzOiBBZ2VudERlZmluaXRpb25bXSxcbiAgb3B0aW9uczoge1xuICAgIHZlcmJvc2U6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBqc29uU2NoZW1hOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZFxuICAgIHBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgYWxsb3dlZFRvb2xzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZFxuICAgIHRoaW5raW5nQ29uZmlnOiBUaGlua2luZ0NvbmZpZyB8IHVuZGVmaW5lZFxuICAgIG1heFR1cm5zOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgICBtYXhCdWRnZXRVc2Q6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgIHRhc2tCdWRnZXQ6IHsgdG90YWw6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgc3lzdGVtUHJvbXB0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHVzZXJTcGVjaWZpZWRNb2RlbDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgZmFsbGJhY2tNb2RlbDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgcmVwbGF5VXNlck1lc3NhZ2VzPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM/OiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgZW5hYmxlQXV0aFN0YXR1cz86IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBhZ2VudD86IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHNldFNES1N0YXR1cz86IChzdGF0dXM6IFNES1N0YXR1cykgPT4gdm9pZFxuICAgIHByb21wdFN1Z2dlc3Rpb25zPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIHdvcmtsb2FkPzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIH0sXG4gIHR1cm5JbnRlcnJ1cHRpb25TdGF0ZT86IFR1cm5JbnRlcnJ1cHRpb25TdGF0ZSxcbik6IEFzeW5jSXRlcmFibGU8U3Rkb3V0TWVzc2FnZT4ge1xuICBsZXQgcnVubmluZyA9IGZhbHNlXG4gIGxldCBydW5QaGFzZTpcbiAgICB8ICdkcmFpbmluZ19jb21tYW5kcydcbiAgICB8ICd3YWl0aW5nX2Zvcl9hZ2VudHMnXG4gICAgfCAnZmluYWxseV9mbHVzaCdcbiAgICB8ICdmaW5hbGx5X3Bvc3RfZmx1c2gnXG4gICAgfCB1bmRlZmluZWRcbiAgbGV0IGlucHV0Q2xvc2VkID0gZmFsc2VcbiAgbGV0IHNodXRkb3duUHJvbXB0SW5qZWN0ZWQgPSBmYWxzZVxuICBsZXQgaGVsZEJhY2tSZXN1bHQ6IFN0ZG91dE1lc3NhZ2UgfCBudWxsID0gbnVsbFxuICBsZXQgYWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXIgfCB1bmRlZmluZWRcbiAgLy8gU2FtZSBxdWV1ZSBzZW5kUmVxdWVzdCgpIGVucXVldWVzIHRvIFx1MjAxNCBvbmUgRklGTyBmb3IgZXZlcnl0aGluZy5cbiAgY29uc3Qgb3V0cHV0ID0gc3RydWN0dXJlZElPLm91dGJvdW5kXG5cbiAgLy8gQ3RybCtDIGluIC1wIG1vZGU6IGFib3J0IHRoZSBpbi1mbGlnaHQgcXVlcnksIHRoZW4gc2h1dCBkb3duIGdyYWNlZnVsbHkuXG4gIC8vIGdyYWNlZnVsU2h1dGRvd24gcGVyc2lzdHMgc2Vzc2lvbiBzdGF0ZSBhbmQgZmx1c2hlcyBhbmFseXRpY3MsIHdpdGggYVxuICAvLyBmYWlsc2FmZSB0aW1lciB0aGF0IGZvcmNlLWV4aXRzIGlmIGNsZWFudXAgaGFuZ3MuXG4gIGNvbnN0IHNpZ2ludEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzaHV0ZG93bl9zaWduYWwnLCB7IHNpZ25hbDogJ1NJR0lOVCcgfSlcbiAgICBpZiAoYWJvcnRDb250cm9sbGVyICYmICFhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gICAgfVxuICAgIHZvaWQgZ3JhY2VmdWxTaHV0ZG93bigwKVxuICB9XG4gIHByb2Nlc3Mub24oJ1NJR0lOVCcsIHNpZ2ludEhhbmRsZXIpXG5cbiAgLy8gRHVtcCBydW4oKSdzIHN0YXRlIGF0IFNJR1RFUk0gc28gYSBzdHVjayBzZXNzaW9uJ3MgaGVhbHRoc3dlZXAgY2FuIG5hbWVcbiAgLy8gdGhlIGRvL3doaWxlKHdhaXRpbmdGb3JBZ2VudHMpIHBvbGwgd2l0aG91dCByZWFkaW5nIHRoZSB0cmFuc2NyaXB0LlxuICByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJnOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cbiAgICBmb3IgKGNvbnN0IHQgb2YgZ2V0UnVubmluZ1Rhc2tzKGdldEFwcFN0YXRlKCkpKSB7XG4gICAgICBpZiAoaXNCYWNrZ3JvdW5kVGFzayh0KSkgYmdbdC50eXBlXSA9IChiZ1t0LnR5cGVdID8/IDApICsgMVxuICAgIH1cbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3J1bl9zdGF0ZV9hdF9zaHV0ZG93bicsIHtcbiAgICAgIHJ1bl9hY3RpdmU6IHJ1bm5pbmcsXG4gICAgICBydW5fcGhhc2U6IHJ1blBoYXNlLFxuICAgICAgd29ya2VyX3N0YXR1czogZ2V0U2Vzc2lvblN0YXRlKCksXG4gICAgICBpbnRlcm5hbF9ldmVudHNfcGVuZGluZzogc3RydWN0dXJlZElPLmludGVybmFsRXZlbnRzUGVuZGluZyxcbiAgICAgIGJnX3Rhc2tzOiBiZyxcbiAgICB9KVxuICB9KVxuXG4gIC8vIFdpcmUgdGhlIGNlbnRyYWwgb25DaGFuZ2VBcHBTdGF0ZSBtb2RlLWRpZmYgaG9vayB0byB0aGUgU0RLIG91dHB1dCBzdHJlYW0uXG4gIC8vIFRoaXMgZmlyZXMgd2hlbmV2ZXIgQU5ZIGNvZGUgcGF0aCBtdXRhdGVzIHRvb2xQZXJtaXNzaW9uQ29udGV4dC5tb2RlIFx1MjAxNFxuICAvLyBTaGlmdCtUYWIsIEV4aXRQbGFuTW9kZSBkaWFsb2csIC9wbGFuIHNsYXNoIGNvbW1hbmQsIHJld2luZCwgYnJpZGdlXG4gIC8vIHNldF9wZXJtaXNzaW9uX21vZGUsIHRoZSBxdWVyeSBsb29wLCBzdG9wX3Rhc2sgXHUyMDE0IHJhdGhlciB0aGFuIHRoZSB0d29cbiAgLy8gcGF0aHMgdGhhdCBwcmV2aW91c2x5IHdlbnQgdGhyb3VnaCBhIGJlc3Bva2Ugd3JhcHBlci5cbiAgLy8gVGhlIHdyYXBwZXIncyBib2R5IHdhcyBmdWxseSByZWR1bmRhbnQgKGl0IGVucXVldWVkIGhlcmUgQU5EIGNhbGxlZFxuICAvLyBub3RpZnlTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkLCBib3RoIG9mIHdoaWNoIG9uQ2hhbmdlQXBwU3RhdGUgbm93IGNvdmVycyk7XG4gIC8vIGtlZXBpbmcgaXQgd291bGQgZG91YmxlLWVtaXQgc3RhdHVzIG1lc3NhZ2VzLlxuICBzZXRQZXJtaXNzaW9uTW9kZUNoYW5nZWRMaXN0ZW5lcihuZXdNb2RlID0+IHtcbiAgICAvLyBPbmx5IGVtaXQgZm9yIFNESy1leHBvc2VkIG1vZGVzLlxuICAgIGlmIChcbiAgICAgIG5ld01vZGUgPT09ICdkZWZhdWx0JyB8fFxuICAgICAgbmV3TW9kZSA9PT0gJ2FjY2VwdEVkaXRzJyB8fFxuICAgICAgbmV3TW9kZSA9PT0gJ2J5cGFzc1Blcm1pc3Npb25zJyB8fFxuICAgICAgbmV3TW9kZSA9PT0gJ3BsYW4nIHx8XG4gICAgICBuZXdNb2RlID09PSAoZmVhdHVyZSgnVFJBTlNDUklQVF9DTEFTU0lGSUVSJykgJiYgJ2F1dG8nKSB8fFxuICAgICAgbmV3TW9kZSA9PT0gJ2RvbnRBc2snXG4gICAgKSB7XG4gICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgICAgICBzdWJ0eXBlOiAnc3RhdHVzJyxcbiAgICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgICBwZXJtaXNzaW9uTW9kZTogbmV3TW9kZSBhcyBQZXJtaXNzaW9uTW9kZSxcbiAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8vIFByb21wdCBzdWdnZXN0aW9uIHRyYWNraW5nIChwdXNoIG1vZGVsKVxuICBjb25zdCBzdWdnZXN0aW9uU3RhdGU6IHtcbiAgICBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlciB8IG51bGxcbiAgICBpbmZsaWdodFByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsXG4gICAgbGFzdEVtaXR0ZWQ6IHtcbiAgICAgIHRleHQ6IHN0cmluZ1xuICAgICAgZW1pdHRlZEF0OiBudW1iZXJcbiAgICAgIHByb21wdElkOiBQcm9tcHRWYXJpYW50XG4gICAgICBnZW5lcmF0aW9uUmVxdWVzdElkOiBzdHJpbmcgfCBudWxsXG4gICAgfSB8IG51bGxcbiAgICBwZW5kaW5nU3VnZ2VzdGlvbjoge1xuICAgICAgdHlwZTogJ3Byb21wdF9zdWdnZXN0aW9uJ1xuICAgICAgc3VnZ2VzdGlvbjogc3RyaW5nXG4gICAgICB1dWlkOiBVVUlEXG4gICAgICBzZXNzaW9uX2lkOiBzdHJpbmdcbiAgICB9IHwgbnVsbFxuICAgIHBlbmRpbmdMYXN0RW1pdHRlZEVudHJ5OiB7XG4gICAgICB0ZXh0OiBzdHJpbmdcbiAgICAgIHByb21wdElkOiBQcm9tcHRWYXJpYW50XG4gICAgICBnZW5lcmF0aW9uUmVxdWVzdElkOiBzdHJpbmcgfCBudWxsXG4gICAgfSB8IG51bGxcbiAgfSA9IHtcbiAgICBhYm9ydENvbnRyb2xsZXI6IG51bGwsXG4gICAgaW5mbGlnaHRQcm9taXNlOiBudWxsLFxuICAgIGxhc3RFbWl0dGVkOiBudWxsLFxuICAgIHBlbmRpbmdTdWdnZXN0aW9uOiBudWxsLFxuICAgIHBlbmRpbmdMYXN0RW1pdHRlZEVudHJ5OiBudWxsLFxuICB9XG5cbiAgLy8gU2V0IHVwIEFXUyBhdXRoIHN0YXR1cyBsaXN0ZW5lciBpZiBlbmFibGVkXG4gIGxldCB1bnN1YnNjcmliZUF1dGhTdGF0dXM6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuICBpZiAob3B0aW9ucy5lbmFibGVBdXRoU3RhdHVzKSB7XG4gICAgY29uc3QgYXV0aFN0YXR1c01hbmFnZXIgPSBBd3NBdXRoU3RhdHVzTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgdW5zdWJzY3JpYmVBdXRoU3RhdHVzID0gYXV0aFN0YXR1c01hbmFnZXIuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgIHR5cGU6ICdhdXRoX3N0YXR1cycsXG4gICAgICAgIGlzQXV0aGVudGljYXRpbmc6IHN0YXR1cy5pc0F1dGhlbnRpY2F0aW5nLFxuICAgICAgICBvdXRwdXQ6IHN0YXR1cy5vdXRwdXQsXG4gICAgICAgIGVycm9yOiBzdGF0dXMuZXJyb3IsXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBTZXQgdXAgcmF0ZSBsaW1pdCBzdGF0dXMgbGlzdGVuZXIgdG8gZW1pdCBTREtSYXRlTGltaXRFdmVudCBmb3IgYWxsIHN0YXR1cyBjaGFuZ2VzLlxuICAvLyBFbWl0dGluZyBmb3IgYWxsIHN0YXR1c2VzIChpbmNsdWRpbmcgJ2FsbG93ZWQnKSBlbnN1cmVzIGNvbnN1bWVycyBjYW4gY2xlYXIgd2FybmluZ3NcbiAgLy8gd2hlbiByYXRlIGxpbWl0cyByZXNldC4gVGhlIHVwc3RyZWFtIGVtaXRTdGF0dXNDaGFuZ2UgYWxyZWFkeSBkZWR1cGxpY2F0ZXMgdmlhIGlzRXF1YWwuXG4gIGNvbnN0IHJhdGVMaW1pdExpc3RlbmVyID0gKGxpbWl0czogQ2xhdWRlQUlMaW1pdHMpID0+IHtcbiAgICBjb25zdCByYXRlTGltaXRJbmZvID0gdG9TREtSYXRlTGltaXRJbmZvKGxpbWl0cylcbiAgICBpZiAocmF0ZUxpbWl0SW5mbykge1xuICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICB0eXBlOiAncmF0ZV9saW1pdF9ldmVudCcsXG4gICAgICAgIHJhdGVfbGltaXRfaW5mbzogcmF0ZUxpbWl0SW5mbyxcbiAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHN0YXR1c0xpc3RlbmVycy5hZGQocmF0ZUxpbWl0TGlzdGVuZXIpXG5cbiAgLy8gTWVzc2FnZXMgZm9yIGludGVybmFsIHRyYWNraW5nLCBkaXJlY3RseSBtdXRhdGVkIGJ5IGFzaygpLiBUaGVzZSBtZXNzYWdlc1xuICAvLyBpbmNsdWRlIEFzc2lzdGFudCwgVXNlciwgQXR0YWNobWVudCwgYW5kIFByb2dyZXNzIG1lc3NhZ2VzLlxuICAvLyBUT0RPOiBDbGVhbiB1cCB0aGlzIGNvZGUgdG8gYXZvaWQgcGFzc2luZyBhcm91bmQgYSBtdXRhYmxlIGFycmF5LlxuICBjb25zdCBtdXRhYmxlTWVzc2FnZXM6IE1lc3NhZ2VbXSA9IGluaXRpYWxNZXNzYWdlc1xuXG4gIC8vIFNlZWQgdGhlIHJlYWRGaWxlU3RhdGUgY2FjaGUgZnJvbSB0aGUgdHJhbnNjcmlwdCAoY29udGVudCB0aGUgbW9kZWwgc2F3LFxuICAvLyB3aXRoIG1lc3NhZ2UgdGltZXN0YW1wcykgc28gZ2V0Q2hhbmdlZEZpbGVzIGNhbiBkZXRlY3QgZXh0ZXJuYWwgZWRpdHMuXG4gIC8vIFRoaXMgY2FjaGUgaW5zdGFuY2UgbXVzdCBwZXJzaXN0IGFjcm9zcyBhc2soKSBjYWxscywgc2luY2UgdGhlIGVkaXQgdG9vbFxuICAvLyByZWxpZXMgb24gdGhpcyBhcyBhIGdsb2JhbCBzdGF0ZS5cbiAgbGV0IHJlYWRGaWxlU3RhdGUgPSBleHRyYWN0UmVhZEZpbGVzRnJvbU1lc3NhZ2VzKFxuICAgIGluaXRpYWxNZXNzYWdlcyxcbiAgICBjd2QoKSxcbiAgICBSRUFEX0ZJTEVfU1RBVEVfQ0FDSEVfU0laRSxcbiAgKVxuXG4gIC8vIENsaWVudC1zdXBwbGllZCByZWFkRmlsZVN0YXRlIHNlZWRzICh2aWEgc2VlZF9yZWFkX3N0YXRlIGNvbnRyb2wgcmVxdWVzdCkuXG4gIC8vIFRoZSBzdGRpbiBJSUZFIHJ1bnMgY29uY3VycmVudGx5IHdpdGggYXNrKCkgXHUyMDE0IGEgc2VlZCBhcnJpdmluZyBtaWQtdHVyblxuICAvLyB3b3VsZCBiZSBsb3N0IHRvIGFzaygpJ3MgY2xvbmUtdGhlbi1yZXBsYWNlIChRdWVyeUVuZ2luZS50cyBmaW5hbGx5IGJsb2NrKVxuICAvLyBpZiB3cml0dGVuIGRpcmVjdGx5IGludG8gcmVhZEZpbGVTdGF0ZS4gSW5zdGVhZCwgc2VlZHMgbGFuZCBoZXJlLCBtZXJnZVxuICAvLyBpbnRvIGdldFJlYWRGaWxlQ2FjaGUncyB2aWV3IChyZWFkRmlsZVN0YXRlLXdpbnMtdGllczogc2VlZHMgZmlsbCBnYXBzKSxcbiAgLy8gYW5kIGFyZSByZS1hcHBsaWVkIHRoZW4gQ0xFQVJFRCBpbiBzZXRSZWFkRmlsZUNhY2hlLiBPbmUtc2hvdDogZWFjaCBzZWVkXG4gIC8vIHN1cnZpdmVzIGV4YWN0bHkgb25lIGNsb25lLXJlcGxhY2UgY3ljbGUsIHRoZW4gYmVjb21lcyBhIHJlZ3VsYXJcbiAgLy8gcmVhZEZpbGVTdGF0ZSBlbnRyeSBzdWJqZWN0IHRvIGNvbXBhY3QncyBjbGVhciBsaWtlIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgY29uc3QgcGVuZGluZ1NlZWRzID0gY3JlYXRlRmlsZVN0YXRlQ2FjaGVXaXRoU2l6ZUxpbWl0KFxuICAgIFJFQURfRklMRV9TVEFURV9DQUNIRV9TSVpFLFxuICApXG5cbiAgLy8gQXV0by1yZXN1bWUgaW50ZXJydXB0ZWQgdHVybnMgb24gcmVzdGFydCBzbyBDQyBjb250aW51ZXMgZnJvbSB3aGVyZSBpdFxuICAvLyBsZWZ0IG9mZiB3aXRob3V0IHJlcXVpcmluZyB0aGUgU0RLIHRvIHJlLXNlbmQgdGhlIHByb21wdC5cbiAgY29uc3QgcmVzdW1lSW50ZXJydXB0ZWRUdXJuRW52ID1cbiAgICBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRVNVTUVfSU5URVJSVVBURURfVFVSTlxuICBpZiAoXG4gICAgdHVybkludGVycnVwdGlvblN0YXRlICYmXG4gICAgdHVybkludGVycnVwdGlvblN0YXRlLmtpbmQgIT09ICdub25lJyAmJlxuICAgIHJlc3VtZUludGVycnVwdGVkVHVybkVudlxuICApIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW3ByaW50LnRzXSBBdXRvLXJlc3VtaW5nIGludGVycnVwdGVkIHR1cm4gKGtpbmQ6ICR7dHVybkludGVycnVwdGlvblN0YXRlLmtpbmR9KWAsXG4gICAgKVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBpbnRlcnJ1cHRlZCBtZXNzYWdlIGFuZCBpdHMgc2VudGluZWwsIHRoZW4gcmUtZW5xdWV1ZSBzb1xuICAgIC8vIHRoZSBtb2RlbCBzZWVzIGl0IGV4YWN0bHkgb25jZS4gRm9yIG1pZC10dXJuIGludGVycnVwdGlvbnMsIHRoZVxuICAgIC8vIGRlc2VyaWFsaXphdGlvbiBsYXllciB0cmFuc2Zvcm1zIHRoZW0gaW50byBpbnRlcnJ1cHRlZF9wcm9tcHQgYnlcbiAgICAvLyBhcHBlbmRpbmcgYSBzeW50aGV0aWMgXCJDb250aW51ZSBmcm9tIHdoZXJlIHlvdSBsZWZ0IG9mZi5cIiBtZXNzYWdlLlxuICAgIHJlbW92ZUludGVycnVwdGVkTWVzc2FnZShtdXRhYmxlTWVzc2FnZXMsIHR1cm5JbnRlcnJ1cHRpb25TdGF0ZS5tZXNzYWdlKVxuICAgIGVucXVldWUoe1xuICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICB2YWx1ZTogdHVybkludGVycnVwdGlvblN0YXRlLm1lc3NhZ2UubWVzc2FnZS5jb250ZW50LFxuICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBtb2RlbE9wdGlvbnMgPSBnZXRNb2RlbE9wdGlvbnMoKVxuICBjb25zdCBtb2RlbEluZm9zID0gbW9kZWxPcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgIGNvbnN0IG1vZGVsSWQgPSBvcHRpb24udmFsdWUgPT09IG51bGwgPyAnZGVmYXVsdCcgOiBvcHRpb24udmFsdWVcbiAgICBjb25zdCByZXNvbHZlZE1vZGVsID1cbiAgICAgIG1vZGVsSWQgPT09ICdkZWZhdWx0J1xuICAgICAgICA/IGdldERlZmF1bHRNYWluTG9vcE1vZGVsKClcbiAgICAgICAgOiBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbChtb2RlbElkKVxuICAgIGNvbnN0IGhhc0VmZm9ydCA9IG1vZGVsU3VwcG9ydHNFZmZvcnQocmVzb2x2ZWRNb2RlbClcbiAgICBjb25zdCBoYXNBZGFwdGl2ZVRoaW5raW5nID0gbW9kZWxTdXBwb3J0c0FkYXB0aXZlVGhpbmtpbmcocmVzb2x2ZWRNb2RlbClcbiAgICBjb25zdCBoYXNGYXN0TW9kZSA9IGlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsKG9wdGlvbi52YWx1ZSlcbiAgICBjb25zdCBoYXNBdXRvTW9kZSA9IG1vZGVsU3VwcG9ydHNBdXRvTW9kZShyZXNvbHZlZE1vZGVsKVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbW9kZWxJZCxcbiAgICAgIGRpc3BsYXlOYW1lOiBvcHRpb24ubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgLi4uKGhhc0VmZm9ydCAmJiB7XG4gICAgICAgIHN1cHBvcnRzRWZmb3J0OiB0cnVlLFxuICAgICAgICBzdXBwb3J0ZWRFZmZvcnRMZXZlbHM6IG1vZGVsU3VwcG9ydHNNYXhFZmZvcnQocmVzb2x2ZWRNb2RlbClcbiAgICAgICAgICA/IFsuLi5FRkZPUlRfTEVWRUxTXVxuICAgICAgICAgIDogRUZGT1JUX0xFVkVMUy5maWx0ZXIobCA9PiBsICE9PSAnbWF4JyksXG4gICAgICB9KSxcbiAgICAgIC4uLihoYXNBZGFwdGl2ZVRoaW5raW5nICYmIHsgc3VwcG9ydHNBZGFwdGl2ZVRoaW5raW5nOiB0cnVlIH0pLFxuICAgICAgLi4uKGhhc0Zhc3RNb2RlICYmIHsgc3VwcG9ydHNGYXN0TW9kZTogdHJ1ZSB9KSxcbiAgICAgIC4uLihoYXNBdXRvTW9kZSAmJiB7IHN1cHBvcnRzQXV0b01vZGU6IHRydWUgfSksXG4gICAgfVxuICB9KVxuICBsZXQgYWN0aXZlVXNlclNwZWNpZmllZE1vZGVsID0gb3B0aW9ucy51c2VyU3BlY2lmaWVkTW9kZWxcblxuICBmdW5jdGlvbiBpbmplY3RNb2RlbFN3aXRjaEJyZWFkY3J1bWJzKFxuICAgIG1vZGVsQXJnOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRNb2RlbDogc3RyaW5nLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBicmVhZGNydW1icyA9IGNyZWF0ZU1vZGVsU3dpdGNoQnJlYWRjcnVtYnMoXG4gICAgICBtb2RlbEFyZyxcbiAgICAgIG1vZGVsRGlzcGxheVN0cmluZyhyZXNvbHZlZE1vZGVsKSxcbiAgICApXG4gICAgbXV0YWJsZU1lc3NhZ2VzLnB1c2goLi4uYnJlYWRjcnVtYnMpXG4gICAgZm9yIChjb25zdCBjcnVtYiBvZiBicmVhZGNydW1icykge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgY3J1bWIubWVzc2FnZS5jb250ZW50ID09PSAnc3RyaW5nJyAmJlxuICAgICAgICBjcnVtYi5tZXNzYWdlLmNvbnRlbnQuaW5jbHVkZXMoYDwke0xPQ0FMX0NPTU1BTkRfU1RET1VUX1RBR30+YClcbiAgICAgICkge1xuICAgICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgIG1lc3NhZ2U6IGNydW1iLm1lc3NhZ2UsXG4gICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgIHV1aWQ6IGNydW1iLnV1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiBjcnVtYi50aW1lc3RhbXAsXG4gICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgIH0gc2F0aXNmaWVzIFNES1VzZXJNZXNzYWdlUmVwbGF5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENhY2hlIFNESyBNQ1AgY2xpZW50cyB0byBhdm9pZCByZWNvbm5lY3Rpbmcgb24gZWFjaCBydW5cbiAgbGV0IHNka0NsaWVudHM6IE1DUFNlcnZlckNvbm5lY3Rpb25bXSA9IFtdXG4gIGxldCBzZGtUb29sczogVG9vbHMgPSBbXVxuXG4gIC8vIFRyYWNrIHdoaWNoIE1DUCBjbGllbnRzIGhhdmUgaGFkIGVsaWNpdGF0aW9uIGhhbmRsZXJzIHJlZ2lzdGVyZWRcbiAgY29uc3QgZWxpY2l0YXRpb25SZWdpc3RlcmVkID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAvKipcbiAgICogUmVnaXN0ZXIgZWxpY2l0YXRpb24gcmVxdWVzdC9jb21wbGV0aW9uIGhhbmRsZXJzIG9uIGNvbm5lY3RlZCBNQ1AgY2xpZW50c1xuICAgKiB0aGF0IGhhdmVuJ3QgYmVlbiByZWdpc3RlcmVkIHlldC4gU0RLIE1DUCBzZXJ2ZXJzIGFyZSBleGNsdWRlZCBiZWNhdXNlIHRoZXlcbiAgICogcm91dGUgdGhyb3VnaCBTZGtDb250cm9sQ2xpZW50VHJhbnNwb3J0LiBIb29rcyBydW4gZmlyc3QgKG1hdGNoaW5nIFJFUExcbiAgICogYmVoYXZpb3IpOyBpZiBubyBob29rIHJlc3BvbmRzLCB0aGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhlIFNES1xuICAgKiBjb25zdW1lciB2aWEgdGhlIGNvbnRyb2wgcHJvdG9jb2wuXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckVsaWNpdGF0aW9uSGFuZGxlcnMoY2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIGNsaWVudHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY29ubmVjdGlvbi50eXBlICE9PSAnY29ubmVjdGVkJyB8fFxuICAgICAgICBlbGljaXRhdGlvblJlZ2lzdGVyZWQuaGFzKGNvbm5lY3Rpb24ubmFtZSlcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgLy8gU2tpcCBTREsgTUNQIHNlcnZlcnMgXHUyMDE0IGVsaWNpdGF0aW9uIGZsb3dzIHRocm91Z2ggU2RrQ29udHJvbENsaWVudFRyYW5zcG9ydFxuICAgICAgaWYgKGNvbm5lY3Rpb24uY29uZmlnLnR5cGUgPT09ICdzZGsnKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBzZXJ2ZXJOYW1lID0gY29ubmVjdGlvbi5uYW1lXG5cbiAgICAgIC8vIFdyYXBwZWQgaW4gdHJ5L2NhdGNoIGJlY2F1c2Ugc2V0UmVxdWVzdEhhbmRsZXIgdGhyb3dzIGlmIHRoZSBjbGllbnQgd2Fzbid0XG4gICAgICAvLyBjcmVhdGVkIHdpdGggZWxpY2l0YXRpb24gY2FwYWJpbGl0eSBkZWNsYXJlZCAoZS5nLiwgU0RLLWNyZWF0ZWQgY2xpZW50cykuXG4gICAgICB0cnkge1xuICAgICAgICBjb25uZWN0aW9uLmNsaWVudC5zZXRSZXF1ZXN0SGFuZGxlcihcbiAgICAgICAgICBFbGljaXRSZXF1ZXN0U2NoZW1hLFxuICAgICAgICAgIGFzeW5jIChyZXF1ZXN0LCBleHRyYSkgPT4ge1xuICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgIGBFbGljaXRhdGlvbiByZXF1ZXN0IHJlY2VpdmVkIGluIHByaW50IG1vZGU6ICR7anNvblN0cmluZ2lmeShyZXF1ZXN0KX1gLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBtb2RlID0gcmVxdWVzdC5wYXJhbXMubW9kZSA9PT0gJ3VybCcgPyAndXJsJyA6ICdmb3JtJ1xuXG4gICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2VsaWNpdGF0aW9uX3Nob3duJywge1xuICAgICAgICAgICAgICBtb2RlOiBtb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBSdW4gZWxpY2l0YXRpb24gaG9va3MgZmlyc3QgXHUyMDE0IHRoZXkgY2FuIHByb3ZpZGUgYSByZXNwb25zZSBwcm9ncmFtbWF0aWNhbGx5XG4gICAgICAgICAgICBjb25zdCBob29rUmVzcG9uc2UgPSBhd2FpdCBydW5FbGljaXRhdGlvbkhvb2tzKFxuICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgICAgICAgZXh0cmEuc2lnbmFsLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKGhvb2tSZXNwb25zZSkge1xuICAgICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICAgIGBFbGljaXRhdGlvbiByZXNvbHZlZCBieSBob29rOiAke2pzb25TdHJpbmdpZnkoaG9va1Jlc3BvbnNlKX1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfZWxpY2l0YXRpb25fcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgICAgIGhvb2tSZXNwb25zZS5hY3Rpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhvb2tSZXNwb25zZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWxlZ2F0ZSB0byBTREsgY29uc3VtZXIgdmlhIGNvbnRyb2wgcHJvdG9jb2xcbiAgICAgICAgICAgIGNvbnN0IHVybCA9XG4gICAgICAgICAgICAgICd1cmwnIGluIHJlcXVlc3QucGFyYW1zXG4gICAgICAgICAgICAgICAgPyAocmVxdWVzdC5wYXJhbXMudXJsIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdGVkU2NoZW1hID1cbiAgICAgICAgICAgICAgJ3JlcXVlc3RlZFNjaGVtYScgaW4gcmVxdWVzdC5wYXJhbXNcbiAgICAgICAgICAgICAgICA/IChyZXF1ZXN0LnBhcmFtcy5yZXF1ZXN0ZWRTY2hlbWEgYXNcbiAgICAgICAgICAgICAgICAgICAgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICAgICAgICAgICAgICB8IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICAgICAgICBjb25zdCBlbGljaXRhdGlvbklkID1cbiAgICAgICAgICAgICAgJ2VsaWNpdGF0aW9uSWQnIGluIHJlcXVlc3QucGFyYW1zXG4gICAgICAgICAgICAgICAgPyAocmVxdWVzdC5wYXJhbXMuZWxpY2l0YXRpb25JZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgICAgY29uc3QgcmF3UmVzdWx0ID0gYXdhaXQgc3RydWN0dXJlZElPLmhhbmRsZUVsaWNpdGF0aW9uKFxuICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICByZXF1ZXN0LnBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgICByZXF1ZXN0ZWRTY2hlbWEsXG4gICAgICAgICAgICAgIGV4dHJhLnNpZ25hbCxcbiAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICBlbGljaXRhdGlvbklkLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBydW5FbGljaXRhdGlvblJlc3VsdEhvb2tzKFxuICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICByYXdSZXN1bHQsXG4gICAgICAgICAgICAgIGV4dHJhLnNpZ25hbCxcbiAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgZWxpY2l0YXRpb25JZCxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9lbGljaXRhdGlvbl9yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgbW9kZTogbW9kZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAgICAgcmVzdWx0LmFjdGlvbiBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICB9LFxuICAgICAgICApXG5cbiAgICAgICAgLy8gU3VyZmFjZSBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbnMgdG8gU0RLIGNvbnN1bWVycyAoVVJMIG1vZGUpXG4gICAgICAgIGNvbm5lY3Rpb24uY2xpZW50LnNldE5vdGlmaWNhdGlvbkhhbmRsZXIoXG4gICAgICAgICAgRWxpY2l0YXRpb25Db21wbGV0ZU5vdGlmaWNhdGlvblNjaGVtYSxcbiAgICAgICAgICBub3RpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBlbGljaXRhdGlvbklkIH0gPSBub3RpZmljYXRpb24ucGFyYW1zXG4gICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgICAgICAgc2VydmVyTmFtZSxcbiAgICAgICAgICAgICAgYEVsaWNpdGF0aW9uIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uOiAke2VsaWNpdGF0aW9uSWR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHZvaWQgZXhlY3V0ZU5vdGlmaWNhdGlvbkhvb2tzKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYE1DUCBzZXJ2ZXIgXCIke3NlcnZlck5hbWV9XCIgY29uZmlybWVkIGVsaWNpdGF0aW9uICR7ZWxpY2l0YXRpb25JZH0gY29tcGxldGVgLFxuICAgICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiAnZWxpY2l0YXRpb25fY29tcGxldGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdlbGljaXRhdGlvbl9jb21wbGV0ZScsXG4gICAgICAgICAgICAgIG1jcF9zZXJ2ZXJfbmFtZTogc2VydmVyTmFtZSxcbiAgICAgICAgICAgICAgZWxpY2l0YXRpb25faWQ6IGVsaWNpdGF0aW9uSWQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIClcblxuICAgICAgICBlbGljaXRhdGlvblJlZ2lzdGVyZWQuYWRkKHNlcnZlck5hbWUpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gc2V0UmVxdWVzdEhhbmRsZXIgdGhyb3dzIGlmIHRoZSBjbGllbnQgd2Fzbid0IGNyZWF0ZWQgd2l0aFxuICAgICAgICAvLyBlbGljaXRhdGlvbiBjYXBhYmlsaXR5IFx1MjAxNCBza2lwIHNpbGVudGx5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2RrTWNwKCkge1xuICAgIC8vIENoZWNrIGlmIFNESyBNQ1Agc2VydmVycyBuZWVkIHRvIGJlIHVwZGF0ZWQgKG5ldyBzZXJ2ZXJzIGFkZGVkIG9yIHJlbW92ZWQpXG4gICAgY29uc3QgY3VycmVudFNlcnZlck5hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhzZGtNY3BDb25maWdzKSlcbiAgICBjb25zdCBjb25uZWN0ZWRTZXJ2ZXJOYW1lcyA9IG5ldyBTZXQoc2RrQ2xpZW50cy5tYXAoYyA9PiBjLm5hbWUpKVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBkaWZmZXJlbmNlcyAoYWRkaXRpb25zIG9yIHJlbW92YWxzKVxuICAgIGNvbnN0IGhhc05ld1NlcnZlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRTZXJ2ZXJOYW1lcykuc29tZShcbiAgICAgIG5hbWUgPT4gIWNvbm5lY3RlZFNlcnZlck5hbWVzLmhhcyhuYW1lKSxcbiAgICApXG4gICAgY29uc3QgaGFzUmVtb3ZlZFNlcnZlcnMgPSBBcnJheS5mcm9tKGNvbm5lY3RlZFNlcnZlck5hbWVzKS5zb21lKFxuICAgICAgbmFtZSA9PiAhY3VycmVudFNlcnZlck5hbWVzLmhhcyhuYW1lKSxcbiAgICApXG4gICAgLy8gQ2hlY2sgaWYgYW55IFNESyBjbGllbnRzIGFyZSBwZW5kaW5nIGFuZCBuZWVkIHRvIGJlIHVwZ3JhZGVkXG4gICAgY29uc3QgaGFzUGVuZGluZ1Nka0NsaWVudHMgPSBzZGtDbGllbnRzLnNvbWUoYyA9PiBjLnR5cGUgPT09ICdwZW5kaW5nJylcbiAgICAvLyBDaGVjayBpZiBhbnkgU0RLIGNsaWVudHMgZmFpbGVkIHRoZWlyIGhhbmRzaGFrZSBhbmQgbmVlZCB0byBiZSByZXRyaWVkLlxuICAgIC8vIFdpdGhvdXQgdGhpcywgYSBjbGllbnQgdGhhdCBsYW5kcyBpbiAnZmFpbGVkJyAoZS5nLiBoYW5kc2hha2UgdGltZW91dCBvblxuICAgIC8vIGEgV1MgcmVjb25uZWN0IHJhY2UpIHN0YXlzIGZhaWxlZCBmb3JldmVyIFx1MjAxNCBpdHMgbmFtZSBzYXRpc2ZpZXMgdGhlXG4gICAgLy8gY29ubmVjdGVkU2VydmVyTmFtZXMgZGlmZiBidXQgaXQgY29udHJpYnV0ZXMgemVybyB0b29scy5cbiAgICBjb25zdCBoYXNGYWlsZWRTZGtDbGllbnRzID0gc2RrQ2xpZW50cy5zb21lKGMgPT4gYy50eXBlID09PSAnZmFpbGVkJylcblxuICAgIGNvbnN0IGhhdmVTZXJ2ZXJzQ2hhbmdlZCA9XG4gICAgICBoYXNOZXdTZXJ2ZXJzIHx8XG4gICAgICBoYXNSZW1vdmVkU2VydmVycyB8fFxuICAgICAgaGFzUGVuZGluZ1Nka0NsaWVudHMgfHxcbiAgICAgIGhhc0ZhaWxlZFNka0NsaWVudHNcblxuICAgIGlmIChoYXZlU2VydmVyc0NoYW5nZWQpIHtcbiAgICAgIC8vIENsZWFuIHVwIHJlbW92ZWQgc2VydmVyc1xuICAgICAgZm9yIChjb25zdCBjbGllbnQgb2Ygc2RrQ2xpZW50cykge1xuICAgICAgICBpZiAoIWN1cnJlbnRTZXJ2ZXJOYW1lcy5oYXMoY2xpZW50Lm5hbWUpKSB7XG4gICAgICAgICAgaWYgKGNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFudXAoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZS1pbml0aWFsaXplIGFsbCBTREsgTUNQIHNlcnZlcnMgd2l0aCBjdXJyZW50IGNvbmZpZ1xuICAgICAgY29uc3Qgc2RrU2V0dXAgPSBhd2FpdCBzZXR1cFNka01jcENsaWVudHMoXG4gICAgICAgIHNka01jcENvbmZpZ3MsXG4gICAgICAgIChzZXJ2ZXJOYW1lLCBtZXNzYWdlKSA9PlxuICAgICAgICAgIHN0cnVjdHVyZWRJTy5zZW5kTWNwTWVzc2FnZShzZXJ2ZXJOYW1lLCBtZXNzYWdlKSxcbiAgICAgIClcbiAgICAgIHNka0NsaWVudHMgPSBzZGtTZXR1cC5jbGllbnRzXG4gICAgICBzZGtUb29scyA9IHNka1NldHVwLnRvb2xzXG5cbiAgICAgIC8vIFN0b3JlIFNESyBNQ1AgdG9vbHMgaW4gYXBwU3RhdGUgc28gc3ViYWdlbnRzIGNhbiBhY2Nlc3MgdGhlbSB2aWFcbiAgICAgIC8vIGFzc2VtYmxlVG9vbFBvb2wuIE9ubHkgdG9vbHMgYXJlIHN0b3JlZCBoZXJlIFx1MjAxNCBTREsgY2xpZW50cyBhcmUgYWxyZWFkeVxuICAgICAgLy8gbWVyZ2VkIHNlcGFyYXRlbHkgaW4gdGhlIHF1ZXJ5IGxvb3AgKGFsbE1jcENsaWVudHMpIGFuZCBtY3Bfc3RhdHVzIGhhbmRsZXIuXG4gICAgICAvLyBVc2UgYm90aCBvbGQgKGNvbm5lY3RlZFNlcnZlck5hbWVzKSBhbmQgbmV3IChjdXJyZW50U2VydmVyTmFtZXMpIHRvIHJlbW92ZVxuICAgICAgLy8gc3RhbGUgU0RLIHRvb2xzIHdoZW4gc2VydmVycyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICAgIGNvbnN0IGFsbFNka05hbWVzID0gdW5pcShbLi4uY29ubmVjdGVkU2VydmVyTmFtZXMsIC4uLmN1cnJlbnRTZXJ2ZXJOYW1lc10pXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIG1jcDoge1xuICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgIHRvb2xzOiBbXG4gICAgICAgICAgICAuLi5wcmV2Lm1jcC50b29scy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgICAgICAhYWxsU2RrTmFtZXMuc29tZShuYW1lID0+XG4gICAgICAgICAgICAgICAgICB0Lm5hbWUuc3RhcnRzV2l0aChnZXRNY3BQcmVmaXgobmFtZSkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLi4uc2RrVG9vbHMsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuXG4gICAgICAvLyBTZXQgdXAgdGhlIHNwZWNpYWwgaW50ZXJuYWwgVlNDb2RlIE1DUCBzZXJ2ZXIgaWYgbmVjZXNzYXJ5LlxuICAgICAgc2V0dXBWc2NvZGVTZGtNY3Aoc2RrQ2xpZW50cylcbiAgICB9XG4gIH1cblxuICB2b2lkIHVwZGF0ZVNka01jcCgpXG5cbiAgLy8gU3RhdGUgZm9yIGR5bmFtaWNhbGx5IGFkZGVkIE1DUCBzZXJ2ZXJzICh2aWEgbWNwX3NldF9zZXJ2ZXJzIGNvbnRyb2wgbWVzc2FnZSlcbiAgLy8gVGhlc2UgYXJlIHNlcGFyYXRlIGZyb20gU0RLIE1DUCBzZXJ2ZXJzIGFuZCBzdXBwb3J0IGFsbCB0cmFuc3BvcnQgdHlwZXNcbiAgbGV0IGR5bmFtaWNNY3BTdGF0ZTogRHluYW1pY01jcFN0YXRlID0ge1xuICAgIGNsaWVudHM6IFtdLFxuICAgIHRvb2xzOiBbXSxcbiAgICBjb25maWdzOiB7fSxcbiAgfVxuXG4gIC8vIFNoYXJlZCB0b29sIGFzc2VtYmx5IGZvciBhc2soKSBhbmQgdGhlIGdldF9jb250ZXh0X3VzYWdlIGNvbnRyb2wgcmVxdWVzdC5cbiAgLy8gQ2xvc2VzIG92ZXIgdGhlIG11dGFibGUgc2RrVG9vbHMvZHluYW1pY01jcFN0YXRlIGJpbmRpbmdzIHNvIGJvdGggY2FsbFxuICAvLyBzaXRlcyBzZWUgbGF0ZS1jb25uZWN0aW5nIHNlcnZlcnMuXG4gIGNvbnN0IGJ1aWxkQWxsVG9vbHMgPSAoYXBwU3RhdGU6IEFwcFN0YXRlKTogVG9vbHMgPT4ge1xuICAgIGNvbnN0IGFzc2VtYmxlZFRvb2xzID0gYXNzZW1ibGVUb29sUG9vbChcbiAgICAgIGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICAgIGFwcFN0YXRlLm1jcC50b29scyxcbiAgICApXG4gICAgbGV0IGFsbFRvb2xzID0gdW5pcUJ5KFxuICAgICAgbWVyZ2VBbmRGaWx0ZXJUb29scyhcbiAgICAgICAgWy4uLnRvb2xzLCAuLi5zZGtUb29scywgLi4uZHluYW1pY01jcFN0YXRlLnRvb2xzXSxcbiAgICAgICAgYXNzZW1ibGVkVG9vbHMsXG4gICAgICAgIGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dC5tb2RlLFxuICAgICAgKSxcbiAgICAgICduYW1lJyxcbiAgICApXG4gICAgaWYgKG9wdGlvbnMucGVybWlzc2lvblByb21wdFRvb2xOYW1lKSB7XG4gICAgICBhbGxUb29scyA9IGFsbFRvb2xzLmZpbHRlcihcbiAgICAgICAgdG9vbCA9PiAhdG9vbE1hdGNoZXNOYW1lKHRvb2wsIG9wdGlvbnMucGVybWlzc2lvblByb21wdFRvb2xOYW1lISksXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IGluaXRKc29uU2NoZW1hID0gZ2V0SW5pdEpzb25TY2hlbWEoKVxuICAgIGlmIChpbml0SnNvblNjaGVtYSAmJiAhb3B0aW9ucy5qc29uU2NoZW1hKSB7XG4gICAgICBjb25zdCBzeW50aGV0aWNPdXRwdXRSZXN1bHQgPSBjcmVhdGVTeW50aGV0aWNPdXRwdXRUb29sKGluaXRKc29uU2NoZW1hKVxuICAgICAgaWYgKCd0b29sJyBpbiBzeW50aGV0aWNPdXRwdXRSZXN1bHQpIHtcbiAgICAgICAgYWxsVG9vbHMgPSBbLi4uYWxsVG9vbHMsIHN5bnRoZXRpY091dHB1dFJlc3VsdC50b29sXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsVG9vbHNcbiAgfVxuXG4gIC8vIEJyaWRnZSBoYW5kbGUgZm9yIHJlbW90ZS1jb250cm9sIChTREsgY29udHJvbCBtZXNzYWdlKS5cbiAgLy8gTWlycm9ycyB0aGUgUkVQTCdzIHVzZVJlcGxCcmlkZ2UgaG9vazogdGhlIGhhbmRsZSBpcyBjcmVhdGVkIHdoZW5cbiAgLy8gYHJlbW90ZV9jb250cm9sYCBpcyBlbmFibGVkIGFuZCB0b3JuIGRvd24gd2hlbiBkaXNhYmxlZC5cbiAgbGV0IGJyaWRnZUhhbmRsZTogUmVwbEJyaWRnZUhhbmRsZSB8IG51bGwgPSBudWxsXG4gIC8vIEN1cnNvciBpbnRvIG11dGFibGVNZXNzYWdlcyBcdTIwMTQgdHJhY2tzIGhvdyBmYXIgd2UndmUgZm9yd2FyZGVkLlxuICAvLyBTYW1lIGluZGV4LWJhc2VkIGRpZmYgYXMgdXNlUmVwbEJyaWRnZSdzIGxhc3RXcml0dGVuSW5kZXhSZWYuXG4gIGxldCBicmlkZ2VMYXN0Rm9yd2FyZGVkSW5kZXggPSAwXG5cbiAgLy8gRm9yd2FyZCBuZXcgbWVzc2FnZXMgZnJvbSBtdXRhYmxlTWVzc2FnZXMgdG8gdGhlIGJyaWRnZS5cbiAgLy8gQ2FsbGVkIGluY3JlbWVudGFsbHkgZHVyaW5nIGVhY2ggdHVybiAoc28gY2xhdWRlLmFpIHNlZXMgcHJvZ3Jlc3NcbiAgLy8gYW5kIHN0YXlzIGFsaXZlIGR1cmluZyBwZXJtaXNzaW9uIHdhaXRzKSBhbmQgYWdhaW4gYWZ0ZXIgdGhlIHR1cm4uXG4gIC8vXG4gIC8vIHdyaXRlTWVzc2FnZXMgaGFzIGl0cyBvd24gVVVJRC1iYXNlZCBkZWR1cCAoaW5pdGlhbE1lc3NhZ2VVVUlEcyxcbiAgLy8gcmVjZW50UG9zdGVkVVVJRHMpIFx1MjAxNCB0aGUgaW5kZXggY3Vyc29yIGhlcmUgaXMgYSBwcmUtZmlsdGVyIHRvIGF2b2lkXG4gIC8vIE8obikgcmUtc2Nhbm5pbmcgb2YgYWxyZWFkeS1zZW50IG1lc3NhZ2VzIG9uIGV2ZXJ5IGNhbGwuXG4gIGZ1bmN0aW9uIGZvcndhcmRNZXNzYWdlc1RvQnJpZGdlKCk6IHZvaWQge1xuICAgIGlmICghYnJpZGdlSGFuZGxlKSByZXR1cm5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IG11dGFibGVNZXNzYWdlcyBzaHJpbmtpbmcgKGNvbXBhY3Rpb24gdHJ1bmNhdGVzIGl0KS5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gTWF0aC5taW4oXG4gICAgICBicmlkZ2VMYXN0Rm9yd2FyZGVkSW5kZXgsXG4gICAgICBtdXRhYmxlTWVzc2FnZXMubGVuZ3RoLFxuICAgIClcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IG11dGFibGVNZXNzYWdlc1xuICAgICAgLnNsaWNlKHN0YXJ0SW5kZXgpXG4gICAgICAuZmlsdGVyKG0gPT4gbS50eXBlID09PSAndXNlcicgfHwgbS50eXBlID09PSAnYXNzaXN0YW50JylcbiAgICBicmlkZ2VMYXN0Rm9yd2FyZGVkSW5kZXggPSBtdXRhYmxlTWVzc2FnZXMubGVuZ3RoXG4gICAgaWYgKG5ld01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGJyaWRnZUhhbmRsZS53cml0ZU1lc3NhZ2VzKG5ld01lc3NhZ2VzKVxuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHBlciB0byBhcHBseSBNQ1Agc2VydmVyIGNoYW5nZXMgLSB1c2VkIGJ5IGJvdGggbWNwX3NldF9zZXJ2ZXJzIGNvbnRyb2wgbWVzc2FnZVxuICAvLyBhbmQgYmFja2dyb3VuZCBwbHVnaW4gaW5zdGFsbGF0aW9uLlxuICAvLyBOT1RFOiBOZXN0ZWQgZnVuY3Rpb24gcmVxdWlyZWQgLSBtdXRhdGVzIGNsb3N1cmUgc3RhdGUgKHNka01jcENvbmZpZ3MsIHNka0NsaWVudHMsIGV0Yy4pXG4gIGxldCBtY3BDaGFuZ2VzUHJvbWlzZTogUHJvbWlzZTx7XG4gICAgcmVzcG9uc2U6IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VcbiAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogYm9vbGVhblxuICB9PiA9IFByb21pc2UucmVzb2x2ZSh7XG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGFkZGVkOiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIHJlbW92ZWQ6IFtdIGFzIHN0cmluZ1tdLFxuICAgICAgZXJyb3JzOiB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIH0sXG4gICAgc2RrU2VydmVyc0NoYW5nZWQ6IGZhbHNlLFxuICB9KVxuXG4gIGZ1bmN0aW9uIGFwcGx5TWNwU2VydmVyQ2hhbmdlcyhcbiAgICBzZXJ2ZXJzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZXJ2ZXJDb25maWdGb3JQcm9jZXNzVHJhbnNwb3J0PixcbiAgKTogUHJvbWlzZTx7XG4gICAgcmVzcG9uc2U6IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VcbiAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogYm9vbGVhblxuICB9PiB7XG4gICAgLy8gU2VyaWFsaXplIGNhbGxzIHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb25zIGJldHdlZW4gY29uY3VycmVudCBjYWxsZXJzXG4gICAgLy8gKGJhY2tncm91bmQgcGx1Z2luIGluc3RhbGwgYW5kIG1jcF9zZXRfc2VydmVycyBjb250cm9sIG1lc3NhZ2VzKVxuICAgIGNvbnN0IGRvV29yayA9IGFzeW5jICgpOiBQcm9taXNlPHtcbiAgICAgIHJlc3BvbnNlOiBTREtDb250cm9sTWNwU2V0U2VydmVyc1Jlc3BvbnNlXG4gICAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogYm9vbGVhblxuICAgIH0+ID0+IHtcbiAgICAgIGNvbnN0IG9sZFNka0NsaWVudE5hbWVzID0gbmV3IFNldChzZGtDbGllbnRzLm1hcChjID0+IGMubmFtZSkpXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZU1jcFNldFNlcnZlcnMoXG4gICAgICAgIHNlcnZlcnMsXG4gICAgICAgIHsgY29uZmlnczogc2RrTWNwQ29uZmlncywgY2xpZW50czogc2RrQ2xpZW50cywgdG9vbHM6IHNka1Rvb2xzIH0sXG4gICAgICAgIGR5bmFtaWNNY3BTdGF0ZSxcbiAgICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICApXG5cbiAgICAgIC8vIFVwZGF0ZSBTREsgc3RhdGUgKG5lZWQgdG8gbXV0YXRlIHNka01jcENvbmZpZ3Mgc2luY2UgaXQncyBzaGFyZWQpXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzZGtNY3BDb25maWdzKSkge1xuICAgICAgICBkZWxldGUgc2RrTWNwQ29uZmlnc1trZXldXG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKHNka01jcENvbmZpZ3MsIHJlc3VsdC5uZXdTZGtTdGF0ZS5jb25maWdzKVxuICAgICAgc2RrQ2xpZW50cyA9IHJlc3VsdC5uZXdTZGtTdGF0ZS5jbGllbnRzXG4gICAgICBzZGtUb29scyA9IHJlc3VsdC5uZXdTZGtTdGF0ZS50b29sc1xuICAgICAgZHluYW1pY01jcFN0YXRlID0gcmVzdWx0Lm5ld0R5bmFtaWNTdGF0ZVxuXG4gICAgICAvLyBLZWVwIGFwcFN0YXRlLm1jcC50b29scyBpbiBzeW5jIHNvIHN1YmFnZW50cyBjYW4gc2VlIFNESyBNQ1AgdG9vbHMuXG4gICAgICAvLyBVc2UgYm90aCBvbGQgYW5kIG5ldyBTREsgY2xpZW50IG5hbWVzIHRvIHJlbW92ZSBzdGFsZSB0b29scy5cbiAgICAgIGlmIChyZXN1bHQuc2RrU2VydmVyc0NoYW5nZWQpIHtcbiAgICAgICAgY29uc3QgbmV3U2RrQ2xpZW50TmFtZXMgPSBuZXcgU2V0KHNka0NsaWVudHMubWFwKGMgPT4gYy5uYW1lKSlcbiAgICAgICAgY29uc3QgYWxsU2RrTmFtZXMgPSB1bmlxKFsuLi5vbGRTZGtDbGllbnROYW1lcywgLi4ubmV3U2RrQ2xpZW50TmFtZXNdKVxuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBtY3A6IHtcbiAgICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgICAgLi4ucHJldi5tY3AudG9vbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgICAgICAgICFhbGxTZGtOYW1lcy5zb21lKG5hbWUgPT5cbiAgICAgICAgICAgICAgICAgICAgdC5uYW1lLnN0YXJ0c1dpdGgoZ2V0TWNwUHJlZml4KG5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIC4uLnNka1Rvb2xzLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2U6IHJlc3VsdC5yZXNwb25zZSxcbiAgICAgICAgc2RrU2VydmVyc0NoYW5nZWQ6IHJlc3VsdC5zZGtTZXJ2ZXJzQ2hhbmdlZCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtY3BDaGFuZ2VzUHJvbWlzZSA9IG1jcENoYW5nZXNQcm9taXNlLnRoZW4oZG9Xb3JrLCBkb1dvcmspXG4gICAgcmV0dXJuIG1jcENoYW5nZXNQcm9taXNlXG4gIH1cblxuICAvLyBCdWlsZCBNY3BTZXJ2ZXJTdGF0dXNbXSBmb3IgY29udHJvbCByZXNwb25zZXMuIFNoYXJlZCBieSBtY3Bfc3RhdHVzIGFuZFxuICAvLyByZWxvYWRfcGx1Z2lucyBoYW5kbGVycy4gUmVhZHMgY2xvc3VyZSBzdGF0ZTogc2RrQ2xpZW50cywgZHluYW1pY01jcFN0YXRlLlxuICBmdW5jdGlvbiBidWlsZE1jcFNlcnZlclN0YXR1c2VzKCk6IE1jcFNlcnZlclN0YXR1c1tdIHtcbiAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgY29uc3QgY3VycmVudE1jcENsaWVudHMgPSBjdXJyZW50QXBwU3RhdGUubWNwLmNsaWVudHNcbiAgICBjb25zdCBhbGxNY3BUb29scyA9IHVuaXFCeShcbiAgICAgIFsuLi5jdXJyZW50QXBwU3RhdGUubWNwLnRvb2xzLCAuLi5keW5hbWljTWNwU3RhdGUudG9vbHNdLFxuICAgICAgJ25hbWUnLFxuICAgIClcbiAgICBjb25zdCBleGlzdGluZ05hbWVzID0gbmV3IFNldChbXG4gICAgICAuLi5jdXJyZW50TWNwQ2xpZW50cy5tYXAoYyA9PiBjLm5hbWUpLFxuICAgICAgLi4uc2RrQ2xpZW50cy5tYXAoYyA9PiBjLm5hbWUpLFxuICAgIF0pXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmN1cnJlbnRNY3BDbGllbnRzLFxuICAgICAgLi4uc2RrQ2xpZW50cyxcbiAgICAgIC4uLmR5bmFtaWNNY3BTdGF0ZS5jbGllbnRzLmZpbHRlcihjID0+ICFleGlzdGluZ05hbWVzLmhhcyhjLm5hbWUpKSxcbiAgICBdLm1hcChjb25uZWN0aW9uID0+IHtcbiAgICAgIGxldCBjb25maWdcbiAgICAgIGlmIChcbiAgICAgICAgY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gJ3NzZScgfHxcbiAgICAgICAgY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gJ2h0dHAnXG4gICAgICApIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgIHR5cGU6IGNvbm5lY3Rpb24uY29uZmlnLnR5cGUsXG4gICAgICAgICAgdXJsOiBjb25uZWN0aW9uLmNvbmZpZy51cmwsXG4gICAgICAgICAgaGVhZGVyczogY29ubmVjdGlvbi5jb25maWcuaGVhZGVycyxcbiAgICAgICAgICBvYXV0aDogY29ubmVjdGlvbi5jb25maWcub2F1dGgsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gJ2NsYXVkZWFpLXByb3h5Jykge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgdHlwZTogJ2NsYXVkZWFpLXByb3h5JyBhcyBjb25zdCxcbiAgICAgICAgICB1cmw6IGNvbm5lY3Rpb24uY29uZmlnLnVybCxcbiAgICAgICAgICBpZDogY29ubmVjdGlvbi5jb25maWcuaWQsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNvbm5lY3Rpb24uY29uZmlnLnR5cGUgPT09ICdzdGRpbycgfHxcbiAgICAgICAgY29ubmVjdGlvbi5jb25maWcudHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgIHR5cGU6ICdzdGRpbycgYXMgY29uc3QsXG4gICAgICAgICAgY29tbWFuZDogY29ubmVjdGlvbi5jb25maWcuY29tbWFuZCxcbiAgICAgICAgICBhcmdzOiBjb25uZWN0aW9uLmNvbmZpZy5hcmdzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBzZXJ2ZXJUb29scyA9XG4gICAgICAgIGNvbm5lY3Rpb24udHlwZSA9PT0gJ2Nvbm5lY3RlZCdcbiAgICAgICAgICA/IGZpbHRlclRvb2xzQnlTZXJ2ZXIoYWxsTWNwVG9vbHMsIGNvbm5lY3Rpb24ubmFtZSkubWFwKHRvb2wgPT4gKHtcbiAgICAgICAgICAgICAgbmFtZTogdG9vbC5tY3BJbmZvPy50b29sTmFtZSA/PyB0b29sLm5hbWUsXG4gICAgICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRvb2wuaXNSZWFkT25seSh7fSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0b29sLmlzRGVzdHJ1Y3RpdmU/Lih7fSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG9wZW5Xb3JsZDogdG9vbC5pc09wZW5Xb3JsZD8uKHt9KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgLy8gQ2FwYWJpbGl0aWVzIHBhc3N0aHJvdWdoIHdpdGggYWxsb3dsaXN0IHByZS1maWx0ZXIuIFRoZSBJREUgcmVhZHNcbiAgICAgIC8vIGV4cGVyaW1lbnRhbFsnY2xhdWRlL2NoYW5uZWwnXSB0byBkZWNpZGUgd2hldGhlciB0byBzaG93IHRoZVxuICAgICAgLy8gRW5hYmxlLWNoYW5uZWwgcHJvbXB0IFx1MjAxNCBvbmx5IGVjaG8gaXQgaWYgY2hhbm5lbF9lbmFibGUgd291bGRcbiAgICAgIC8vIGFjdHVhbGx5IHBhc3MgdGhlIGFsbG93bGlzdC4gTm90IGEgc2VjdXJpdHkgYm91bmRhcnkgKHRoZVxuICAgICAgLy8gaGFuZGxlciByZS1ydW5zIHRoZSBmdWxsIGdhdGUpOyBqdXN0IGF2b2lkcyBkZWFkIGJ1dHRvbnMuXG4gICAgICBsZXQgY2FwYWJpbGl0aWVzOiB7IGV4cGVyaW1lbnRhbD86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0gfCB1bmRlZmluZWRcbiAgICAgIGlmIChcbiAgICAgICAgKGZlYXR1cmUoJ0tBSVJPUycpIHx8IGZlYXR1cmUoJ0tBSVJPU19DSEFOTkVMUycpKSAmJlxuICAgICAgICBjb25uZWN0aW9uLnR5cGUgPT09ICdjb25uZWN0ZWQnICYmXG4gICAgICAgIGNvbm5lY3Rpb24uY2FwYWJpbGl0aWVzLmV4cGVyaW1lbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGV4cCA9IHsgLi4uY29ubmVjdGlvbi5jYXBhYmlsaXRpZXMuZXhwZXJpbWVudGFsIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV4cFsnY2xhdWRlL2NoYW5uZWwnXSAmJlxuICAgICAgICAgICghaXNDaGFubmVsc0VuYWJsZWQoKSB8fFxuICAgICAgICAgICAgIWlzQ2hhbm5lbEFsbG93bGlzdGVkKGNvbm5lY3Rpb24uY29uZmlnLnBsdWdpblNvdXJjZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGRlbGV0ZSBleHBbJ2NsYXVkZS9jaGFubmVsJ11cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXhwKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FwYWJpbGl0aWVzID0geyBleHBlcmltZW50YWw6IGV4cCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbm5lY3Rpb24ubmFtZSxcbiAgICAgICAgc3RhdHVzOiBjb25uZWN0aW9uLnR5cGUsXG4gICAgICAgIHNlcnZlckluZm86XG4gICAgICAgICAgY29ubmVjdGlvbi50eXBlID09PSAnY29ubmVjdGVkJyA/IGNvbm5lY3Rpb24uc2VydmVySW5mbyA6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IGNvbm5lY3Rpb24udHlwZSA9PT0gJ2ZhaWxlZCcgPyBjb25uZWN0aW9uLmVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHNjb3BlOiBjb25uZWN0aW9uLmNvbmZpZy5zY29wZSxcbiAgICAgICAgdG9vbHM6IHNlcnZlclRvb2xzLFxuICAgICAgICBjYXBhYmlsaXRpZXMsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIE5PVEU6IE5lc3RlZCBmdW5jdGlvbiByZXF1aXJlZCAtIG5lZWRzIGNsb3N1cmUgYWNjZXNzIHRvIGFwcGx5TWNwU2VydmVyQ2hhbmdlcyBhbmQgdXBkYXRlU2RrTWNwXG4gIGFzeW5jIGZ1bmN0aW9uIGluc3RhbGxQbHVnaW5zQW5kQXBwbHlNY3BJbkJhY2tncm91bmQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEpvaW4gcG9pbnQgZm9yIHVzZXIgc2V0dGluZ3MgKGZpcmVkIGF0IHJ1bkhlYWRsZXNzIGVudHJ5KSBhbmQgbWFuYWdlZFxuICAgICAgLy8gc2V0dGluZ3MgKGZpcmVkIGluIG1haW4udHN4IHByZUFjdGlvbikuIGRvd25sb2FkVXNlclNldHRpbmdzKCkgY2FjaGVzXG4gICAgICAvLyBpdHMgcHJvbWlzZSBzbyB0aGlzIGF3YWl0cyB0aGUgc2FtZSBpbi1mbGlnaHQgcmVxdWVzdC5cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmVhdHVyZSgnRE9XTkxPQURfVVNFUl9TRVRUSU5HUycpICYmXG4gICAgICAgIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEUpIHx8IGdldElzUmVtb3RlTW9kZSgpKVxuICAgICAgICAgID8gd2l0aERpYWdub3N0aWNzVGltaW5nKCdoZWFkbGVzc191c2VyX3NldHRpbmdzX2Rvd25sb2FkJywgKCkgPT5cbiAgICAgICAgICAgICAgZG93bmxvYWRVc2VyU2V0dGluZ3MoKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpLFxuICAgICAgICB3aXRoRGlhZ25vc3RpY3NUaW1pbmcoJ2hlYWRsZXNzX21hbmFnZWRfc2V0dGluZ3Nfd2FpdCcsICgpID0+XG4gICAgICAgICAgd2FpdEZvclJlbW90ZU1hbmFnZWRTZXR0aW5nc1RvTG9hZCgpLFxuICAgICAgICApLFxuICAgICAgXSlcblxuICAgICAgY29uc3QgcGx1Z2luc0luc3RhbGxlZCA9IGF3YWl0IGluc3RhbGxQbHVnaW5zRm9ySGVhZGxlc3MoKVxuXG4gICAgICBpZiAocGx1Z2luc0luc3RhbGxlZCkge1xuICAgICAgICBhd2FpdCBhcHBseVBsdWdpbk1jcERpZmYoKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBCYWNrZ3JvdW5kIHBsdWdpbiBpbnN0YWxsYXRpb24gZm9yIGFsbCBoZWFkbGVzcyB1c2Vyc1xuICAvLyBJbnN0YWxscyBtYXJrZXRwbGFjZXMgZnJvbSBleHRyYUtub3duTWFya2V0cGxhY2VzIGFuZCBtaXNzaW5nIGVuYWJsZWQgcGx1Z2luc1xuICAvLyBDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMPXRydWU6IHJlc29sdmVkIGluIHJ1bigpIGJlZm9yZSB0aGUgZmlyc3RcbiAgLy8gcXVlcnkgc28gcGx1Z2lucyBhcmUgZ3VhcmFudGVlZCBhdmFpbGFibGUgb24gdGhlIGZpcnN0IGFzaygpLlxuICBsZXQgcGx1Z2luSW5zdGFsbFByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuICAvLyAtLWJhcmUgLyBTSU1QTEU6IHNraXAgcGx1Z2luIGluc3RhbGwuIFNjcmlwdGVkIGNhbGxzIGRvbid0IGFkZCBwbHVnaW5zXG4gIC8vIG1pZC1zZXNzaW9uOyB0aGUgbmV4dCBpbnRlcmFjdGl2ZSBydW4gcmVjb25jaWxlcy5cbiAgaWYgKCFpc0JhcmVNb2RlKCkpIHtcbiAgICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfU1lOQ19QTFVHSU5fSU5TVEFMTCkpIHtcbiAgICAgIHBsdWdpbkluc3RhbGxQcm9taXNlID0gaW5zdGFsbFBsdWdpbnNBbmRBcHBseU1jcEluQmFja2dyb3VuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgaW5zdGFsbFBsdWdpbnNBbmRBcHBseU1jcEluQmFja2dyb3VuZCgpXG4gICAgfVxuICB9XG5cbiAgLy8gSWRsZSB0aW1lb3V0IG1hbmFnZW1lbnRcbiAgY29uc3QgaWRsZVRpbWVvdXQgPSBjcmVhdGVJZGxlVGltZW91dE1hbmFnZXIoKCkgPT4gIXJ1bm5pbmcpXG5cbiAgLy8gTXV0YWJsZSBjb21tYW5kcyBhbmQgYWdlbnRzIGZvciBob3QgcmVsb2FkaW5nXG4gIGxldCBjdXJyZW50Q29tbWFuZHMgPSBjb21tYW5kc1xuICBsZXQgY3VycmVudEFnZW50cyA9IGFnZW50c1xuXG4gIC8vIENsZWFyIGFsbCBwbHVnaW4tcmVsYXRlZCBjYWNoZXMsIHJlbG9hZCBjb21tYW5kcy9hZ2VudHMvaG9va3MuXG4gIC8vIENhbGxlZCBhZnRlciBDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMIGNvbXBsZXRlcyAoYmVmb3JlIGZpcnN0IHF1ZXJ5KVxuICAvLyBhbmQgYWZ0ZXIgbm9uLXN5bmMgYmFja2dyb3VuZCBpbnN0YWxsIGZpbmlzaGVzLlxuICAvLyByZWZyZXNoQWN0aXZlUGx1Z2lucyBjYWxscyBjbGVhckFsbENhY2hlcygpIHdoaWNoIGlzIHJlcXVpcmVkIGJlY2F1c2VcbiAgLy8gbG9hZEFsbFBsdWdpbnMoKSBtYXkgaGF2ZSBydW4gZHVyaW5nIG1haW4udHN4IHN0YXJ0dXAgQkVGT1JFIG1hbmFnZWRcbiAgLy8gc2V0dGluZ3Mgd2VyZSBmZXRjaGVkLiBXaXRob3V0IGNsZWFyaW5nLCBnZXRDb21tYW5kcygpIHdvdWxkIHJlYnVpbGRcbiAgLy8gZnJvbSBhIHN0YWxlIHBsdWdpbiBsaXN0LlxuICBhc3luYyBmdW5jdGlvbiByZWZyZXNoUGx1Z2luU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gcmVmcmVzaEFjdGl2ZVBsdWdpbnMgaGFuZGxlcyB0aGUgZnVsbCBjYWNoZSBzd2VlcCAoY2xlYXJBbGxDYWNoZXMpLFxuICAgIC8vIHJlbG9hZHMgYWxsIHBsdWdpbiBjb21wb25lbnQgbG9hZGVycywgd3JpdGVzIEFwcFN0YXRlLnBsdWdpbnMgK1xuICAgIC8vIEFwcFN0YXRlLmFnZW50RGVmaW5pdGlvbnMsIHJlZ2lzdGVycyBob29rcywgYW5kIGJ1bXBzIG1jcC5wbHVnaW5SZWNvbm5lY3RLZXkuXG4gICAgY29uc3QgeyBhZ2VudERlZmluaXRpb25zOiBmcmVzaEFnZW50RGVmcyB9ID1cbiAgICAgIGF3YWl0IHJlZnJlc2hBY3RpdmVQbHVnaW5zKHNldEFwcFN0YXRlKVxuXG4gICAgLy8gSGVhZGxlc3Mtc3BlY2lmaWM6IGN1cnJlbnRDb21tYW5kcy9jdXJyZW50QWdlbnRzIGFyZSBsb2NhbCBtdXRhYmxlIHJlZnNcbiAgICAvLyBjYXB0dXJlZCBieSB0aGUgcXVlcnkgbG9vcCAoUkVQTCB1c2VzIEFwcFN0YXRlIGluc3RlYWQpLiBnZXRDb21tYW5kcyBpc1xuICAgIC8vIGZyZXNoIGJlY2F1c2UgcmVmcmVzaEFjdGl2ZVBsdWdpbnMgY2xlYXJlZCBpdHMgY2FjaGUuXG4gICAgY3VycmVudENvbW1hbmRzID0gYXdhaXQgZ2V0Q29tbWFuZHMoY3dkKCkpXG5cbiAgICAvLyBQcmVzZXJ2ZSBTREstcHJvdmlkZWQgYWdlbnRzICgtLWFnZW50cyBDTEkgZmxhZyBvciBTREsgaW5pdGlhbGl6ZVxuICAgIC8vIGNvbnRyb2xfcmVxdWVzdCkgXHUyMDE0IGJvdGggaW5qZWN0IHZpYSBwYXJzZUFnZW50c0Zyb21Kc29uIHdpdGhcbiAgICAvLyBzb3VyY2U9J2ZsYWdTZXR0aW5ncycuIGxvYWRNYXJrZG93bkZpbGVzRm9yU3ViZGlyIG5ldmVyIGFzc2lnbnMgdGhpc1xuICAgIC8vIHNvdXJjZSwgc28gaXQgY2xlYW5seSBkaXNjcmltaW5hdGVzIFwiaW5qZWN0ZWQsIG5vdCBkaXNrLWxvYWRhYmxlXCIuXG4gICAgLy9cbiAgICAvLyBUaGUgcHJldmlvdXMgZmlsdGVyIHVzZWQgYSBuZWdhdGl2ZSBzZXQtZGlmZiAoIWZyZXNoQWdlbnRUeXBlcy5oYXMoYSkpXG4gICAgLy8gd2hpY2ggYWxzbyBtYXRjaGVkIHBsdWdpbiBhZ2VudHMgdGhhdCB3ZXJlIGluIHRoZSBwb2lzb25lZCBpbml0aWFsXG4gICAgLy8gY3VycmVudEFnZW50cyBidXQgY29ycmVjdGx5IGV4Y2x1ZGVkIGZyb20gZnJlc2hBZ2VudERlZnMgYWZ0ZXIgbWFuYWdlZFxuICAgIC8vIHNldHRpbmdzIGFwcGxpZWQgXHUyMDE0IGxlYWtpbmcgcG9saWN5LWJsb2NrZWQgYWdlbnRzIGludG8gdGhlIGluaXQgbWVzc2FnZS5cbiAgICAvLyBTZWUgZ2gtMjMwODU6IGlzQnJpZGdlRW5hYmxlZCgpIGF0IENvbW1hbmRlci1kZWZpbml0aW9uIHRpbWUgcG9pc29uZWRcbiAgICAvLyB0aGUgc2V0dGluZ3MgY2FjaGUgYmVmb3JlIHNldEVsaWdpYmlsaXR5KHRydWUpIHJhbi5cbiAgICBjb25zdCBzZGtBZ2VudHMgPSBjdXJyZW50QWdlbnRzLmZpbHRlcihhID0+IGEuc291cmNlID09PSAnZmxhZ1NldHRpbmdzJylcbiAgICBjdXJyZW50QWdlbnRzID0gWy4uLmZyZXNoQWdlbnREZWZzLmFsbEFnZW50cywgLi4uc2RrQWdlbnRzXVxuICB9XG5cbiAgLy8gUmUtZGlmZiBNQ1AgY29uZmlncyBhZnRlciBwbHVnaW4gc3RhdGUgY2hhbmdlcy4gRmlsdGVycyB0b1xuICAvLyBwcm9jZXNzLXRyYW5zcG9ydC1zdXBwb3J0ZWQgdHlwZXMgYW5kIGNhcnJpZXMgU0RLLW1vZGUgc2VydmVycyB0aHJvdWdoXG4gIC8vIHNvIGFwcGx5TWNwU2VydmVyQ2hhbmdlcycgZGlmZiBkb2Vzbid0IGNsb3NlIHRoZWlyIHRyYW5zcG9ydHMuXG4gIC8vIE5lc3RlZDogbmVlZHMgY2xvc3VyZSBhY2Nlc3MgdG8gc2RrTWNwQ29uZmlncywgYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzLFxuICAvLyB1cGRhdGVTZGtNY3AuXG4gIGFzeW5jIGZ1bmN0aW9uIGFwcGx5UGx1Z2luTWNwRGlmZigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHNlcnZlcnM6IG5ld0NvbmZpZ3MgfSA9IGF3YWl0IGdldEFsbE1jcENvbmZpZ3MoKVxuICAgIGNvbnN0IHN1cHBvcnRlZENvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQ+ID1cbiAgICAgIHt9XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhuZXdDb25maWdzKSkge1xuICAgICAgY29uc3QgdHlwZSA9IGNvbmZpZy50eXBlXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICB0eXBlID09PSAnc3RkaW8nIHx8XG4gICAgICAgIHR5cGUgPT09ICdzc2UnIHx8XG4gICAgICAgIHR5cGUgPT09ICdodHRwJyB8fFxuICAgICAgICB0eXBlID09PSAnc2RrJ1xuICAgICAgKSB7XG4gICAgICAgIHN1cHBvcnRlZENvbmZpZ3NbbmFtZV0gPSBjb25maWdcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzZGtNY3BDb25maWdzKSkge1xuICAgICAgaWYgKGNvbmZpZy50eXBlID09PSAnc2RrJyAmJiAhKG5hbWUgaW4gc3VwcG9ydGVkQ29uZmlncykpIHtcbiAgICAgICAgc3VwcG9ydGVkQ29uZmlnc1tuYW1lXSA9IGNvbmZpZ1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IHJlc3BvbnNlLCBzZGtTZXJ2ZXJzQ2hhbmdlZCB9ID1cbiAgICAgIGF3YWl0IGFwcGx5TWNwU2VydmVyQ2hhbmdlcyhzdXBwb3J0ZWRDb25maWdzKVxuICAgIGlmIChzZGtTZXJ2ZXJzQ2hhbmdlZCkge1xuICAgICAgdm9pZCB1cGRhdGVTZGtNY3AoKVxuICAgIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgSGVhZGxlc3MgTUNQIHJlZnJlc2g6IGFkZGVkPSR7cmVzcG9uc2UuYWRkZWQubGVuZ3RofSwgcmVtb3ZlZD0ke3Jlc3BvbnNlLnJlbW92ZWQubGVuZ3RofWAsXG4gICAgKVxuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHNraWxsIGNoYW5nZXMgZm9yIGhvdCByZWxvYWRpbmdcbiAgY29uc3QgdW5zdWJzY3JpYmVTa2lsbENoYW5nZXMgPSBza2lsbENoYW5nZURldGVjdG9yLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY2xlYXJDb21tYW5kc0NhY2hlKClcbiAgICB2b2lkIGdldENvbW1hbmRzKGN3ZCgpKS50aGVuKG5ld0NvbW1hbmRzID0+IHtcbiAgICAgIGN1cnJlbnRDb21tYW5kcyA9IG5ld0NvbW1hbmRzXG4gICAgfSlcbiAgfSlcblxuICAvLyBQcm9hY3RpdmUgbW9kZTogc2NoZWR1bGUgYSB0aWNrIHRvIGtlZXAgdGhlIG1vZGVsIGxvb3BpbmcgYXV0b25vbW91c2x5LlxuICAvLyBzZXRUaW1lb3V0KDApIHlpZWxkcyB0byB0aGUgZXZlbnQgbG9vcCBzbyBwZW5kaW5nIHN0ZGluIG1lc3NhZ2VzXG4gIC8vIChpbnRlcnJ1cHRzLCB1c2VyIG1lc3NhZ2VzKSBhcmUgcHJvY2Vzc2VkIGJlZm9yZSB0aGUgdGljayBmaXJlcy5cbiAgY29uc3Qgc2NoZWR1bGVQcm9hY3RpdmVUaWNrID1cbiAgICBmZWF0dXJlKCdQUk9BQ1RJVkUnKSB8fCBmZWF0dXJlKCdLQUlST1MnKVxuICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFwcm9hY3RpdmVNb2R1bGU/LmlzUHJvYWN0aXZlQWN0aXZlKCkgfHxcbiAgICAgICAgICAgICAgcHJvYWN0aXZlTW9kdWxlLmlzUHJvYWN0aXZlUGF1c2VkKCkgfHxcbiAgICAgICAgICAgICAgaW5wdXRDbG9zZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpY2tDb250ZW50ID0gYDwke1RJQ0tfVEFHfT4ke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC8ke1RJQ0tfVEFHfT5gXG4gICAgICAgICAgICBlbnF1ZXVlKHtcbiAgICAgICAgICAgICAgbW9kZTogJ3Byb21wdCcgYXMgY29uc3QsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aWNrQ29udGVudCxcbiAgICAgICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgICBwcmlvcml0eTogJ2xhdGVyJyxcbiAgICAgICAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZvaWQgcnVuKClcbiAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIC8vIEFib3J0IHRoZSBjdXJyZW50IG9wZXJhdGlvbiB3aGVuIGEgJ25vdycgcHJpb3JpdHkgbWVzc2FnZSBhcnJpdmVzLlxuICBzdWJzY3JpYmVUb0NvbW1hbmRRdWV1ZSgoKSA9PiB7XG4gICAgaWYgKGFib3J0Q29udHJvbGxlciAmJiBnZXRDb21tYW5kc0J5TWF4UHJpb3JpdHkoJ25vdycpLmxlbmd0aCA+IDApIHtcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgnaW50ZXJydXB0JylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBydW5uaW5nID0gdHJ1ZVxuICAgIHJ1blBoYXNlID0gdW5kZWZpbmVkXG4gICAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCgncnVubmluZycpXG4gICAgaWRsZVRpbWVvdXQuc3RvcCgpXG5cbiAgICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgncnVuX2VudHJ5JylcbiAgICAvLyBUT0RPKGN1c3RvbS10b29sLXJlZmFjdG9yKTogU2hvdWxkIG1vdmUgdG8gdGhlIGluaXQgbWVzc2FnZSwgbGlrZSBicm93c2VyXG5cbiAgICBhd2FpdCB1cGRhdGVTZGtNY3AoKVxuICAgIGhlYWRsZXNzUHJvZmlsZXJDaGVja3BvaW50KCdhZnRlcl91cGRhdGVTZGtNY3AnKVxuXG4gICAgLy8gUmVzb2x2ZSBkZWZlcnJlZCBwbHVnaW4gaW5zdGFsbGF0aW9uIChDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMKS5cbiAgICAvLyBUaGUgcHJvbWlzZSB3YXMgc3RhcnRlZCBlYWdlcmx5IHNvIGluc3RhbGxhdGlvbiBvdmVybGFwcyB3aXRoIG90aGVyIGluaXQuXG4gICAgLy8gQXdhaXRpbmcgaGVyZSBndWFyYW50ZWVzIHBsdWdpbnMgYXJlIGF2YWlsYWJsZSBiZWZvcmUgdGhlIGZpcnN0IGFzaygpLlxuICAgIC8vIElmIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTExfVElNRU9VVF9NUyBpcyBzZXQsIHJhY2VzIGFnYWluc3QgdGhhdFxuICAgIC8vIGRlYWRsaW5lIGFuZCBwcm9jZWVkcyB3aXRob3V0IHBsdWdpbnMgb24gdGltZW91dCAobG9nZ2luZyBhbiBlcnJvcikuXG4gICAgaWYgKHBsdWdpbkluc3RhbGxQcm9taXNlKSB7XG4gICAgICBjb25zdCB0aW1lb3V0TXMgPSBwYXJzZUludChcbiAgICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfU1lOQ19QTFVHSU5fSU5TVEFMTF9USU1FT1VUX01TIHx8ICcnLFxuICAgICAgICAxMCxcbiAgICAgIClcbiAgICAgIGlmICh0aW1lb3V0TXMgPiAwKSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzbGVlcCh0aW1lb3V0TXMpLnRoZW4oKCkgPT4gJ3RpbWVvdXQnIGFzIGNvbnN0KVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3BsdWdpbkluc3RhbGxQcm9taXNlLCB0aW1lb3V0XSlcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ3RpbWVvdXQnKSB7XG4gICAgICAgICAgbG9nRXJyb3IoXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBDTEFVREVfQ09ERV9TWU5DX1BMVUdJTl9JTlNUQUxMOiBwbHVnaW4gaW5zdGFsbGF0aW9uIHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXRNc31tc2AsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc3luY19wbHVnaW5faW5zdGFsbF90aW1lb3V0Jywge1xuICAgICAgICAgICAgdGltZW91dF9tczogdGltZW91dE1zLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHBsdWdpbkluc3RhbGxQcm9taXNlXG4gICAgICB9XG4gICAgICBwbHVnaW5JbnN0YWxsUHJvbWlzZSA9IG51bGxcblxuICAgICAgLy8gUmVmcmVzaCBjb21tYW5kcywgYWdlbnRzLCBhbmQgaG9va3Mgbm93IHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFsbGVkXG4gICAgICBhd2FpdCByZWZyZXNoUGx1Z2luU3RhdGUoKVxuXG4gICAgICAvLyBTZXQgdXAgaG90LXJlbG9hZCBmb3IgcGx1Z2luIGhvb2tzIG5vdyB0aGF0IHRoZSBpbml0aWFsIGluc3RhbGwgaXMgZG9uZS5cbiAgICAgIC8vIEluIHN5bmMtaW5zdGFsbCBtb2RlLCBzZXR1cC50cyBza2lwcyB0aGlzIHRvIGF2b2lkIHJhY2luZyB3aXRoIHRoZSBpbnN0YWxsLlxuICAgICAgY29uc3QgeyBzZXR1cFBsdWdpbkhvb2tIb3RSZWxvYWQgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgJy4uL3V0aWxzL3BsdWdpbnMvbG9hZFBsdWdpbkhvb2tzLmpzJ1xuICAgICAgKVxuICAgICAgc2V0dXBQbHVnaW5Ib29rSG90UmVsb2FkKClcbiAgICB9XG5cbiAgICAvLyBPbmx5IG1haW4tdGhyZWFkIGNvbW1hbmRzIChhZ2VudElkPT09dW5kZWZpbmVkKSBcdTIwMTQgc3ViYWdlbnRcbiAgICAvLyBub3RpZmljYXRpb25zIGFyZSBkcmFpbmVkIGJ5IHRoZSBzdWJhZ2VudCdzIG1pZC10dXJuIGdhdGUgaW4gcXVlcnkudHMuXG4gICAgLy8gRGVmaW5lZCBvdXRzaWRlIHRoZSB0cnkgYmxvY2sgc28gaXQncyBhY2Nlc3NpYmxlIGluIHRoZSBwb3N0LWZpbmFsbHlcbiAgICAvLyBxdWV1ZSByZS1jaGVja3MgYXQgdGhlIGJvdHRvbSBvZiBydW4oKS5cbiAgICBjb25zdCBpc01haW5UaHJlYWQgPSAoY21kOiBRdWV1ZWRDb21tYW5kKSA9PiBjbWQuYWdlbnRJZCA9PT0gdW5kZWZpbmVkXG5cbiAgICB0cnkge1xuICAgICAgbGV0IGNvbW1hbmQ6IFF1ZXVlZENvbW1hbmQgfCB1bmRlZmluZWRcbiAgICAgIGxldCB3YWl0aW5nRm9yQWdlbnRzID0gZmFsc2VcblxuICAgICAgLy8gRXh0cmFjdCBjb21tYW5kIHByb2Nlc3NpbmcgaW50byBhIG5hbWVkIGZ1bmN0aW9uIGZvciB0aGUgZG8td2hpbGUgcGF0dGVybi5cbiAgICAgIC8vIERyYWlucyB0aGUgcXVldWUsIGJhdGNoaW5nIGNvbnNlY3V0aXZlIHByb21wdC1tb2RlIGNvbW1hbmRzIGludG8gb25lXG4gICAgICAvLyBhc2soKSBjYWxsIHNvIG1lc3NhZ2VzIHRoYXQgcXVldWVkIHVwIGR1cmluZyBhIGxvbmcgdHVybiBjb2FsZXNjZVxuICAgICAgLy8gaW50byBhIHNpbmdsZSBmb2xsb3ctdXAgdHVybiBpbnN0ZWFkIG9mIE4gc2VwYXJhdGUgdHVybnMuXG4gICAgICBjb25zdCBkcmFpbkNvbW1hbmRRdWV1ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgd2hpbGUgKChjb21tYW5kID0gZGVxdWV1ZShpc01haW5UaHJlYWQpKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbW1hbmQubW9kZSAhPT0gJ3Byb21wdCcgJiZcbiAgICAgICAgICAgIGNvbW1hbmQubW9kZSAhPT0gJ29ycGhhbmVkLXBlcm1pc3Npb24nICYmXG4gICAgICAgICAgICBjb21tYW5kLm1vZGUgIT09ICd0YXNrLW5vdGlmaWNhdGlvbidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ29ubHkgcHJvbXB0IGNvbW1hbmRzIGFyZSBzdXBwb3J0ZWQgaW4gc3RyZWFtaW5nIG1vZGUnLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE5vbi1wcm9tcHQgY29tbWFuZHMgKHRhc2stbm90aWZpY2F0aW9uLCBvcnBoYW5lZC1wZXJtaXNzaW9uKSBjYXJyeVxuICAgICAgICAgIC8vIHNpZGUgZWZmZWN0cyBvciBvcnBoYW5lZFBlcm1pc3Npb24gc3RhdGUsIHNvIHRoZXkgcHJvY2VzcyBzaW5nbHkuXG4gICAgICAgICAgLy8gUHJvbXB0IGNvbW1hbmRzIGdyZWVkaWx5IGNvbGxlY3QgZm9sbG93ZXJzIHdpdGggbWF0Y2hpbmcgd29ya2xvYWQuXG4gICAgICAgICAgY29uc3QgYmF0Y2g6IFF1ZXVlZENvbW1hbmRbXSA9IFtjb21tYW5kXVxuICAgICAgICAgIGlmIChjb21tYW5kLm1vZGUgPT09ICdwcm9tcHQnKSB7XG4gICAgICAgICAgICB3aGlsZSAoY2FuQmF0Y2hXaXRoKGNvbW1hbmQsIHBlZWsoaXNNYWluVGhyZWFkKSkpIHtcbiAgICAgICAgICAgICAgYmF0Y2gucHVzaChkZXF1ZXVlKGlzTWFpblRocmVhZCkhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgY29tbWFuZCA9IHtcbiAgICAgICAgICAgICAgICAuLi5jb21tYW5kLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBqb2luUHJvbXB0VmFsdWVzKGJhdGNoLm1hcChjID0+IGMudmFsdWUpKSxcbiAgICAgICAgICAgICAgICB1dWlkOiBiYXRjaC5maW5kTGFzdChjID0+IGMudXVpZCk/LnV1aWQgPz8gY29tbWFuZC51dWlkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJhdGNoVXVpZHMgPSBiYXRjaC5tYXAoYyA9PiBjLnV1aWQpLmZpbHRlcih1ID0+IHUgIT09IHVuZGVmaW5lZClcblxuICAgICAgICAgIC8vIFF1ZXJ5RW5naW5lIHdpbGwgZW1pdCBhIHJlcGxheSBmb3IgY29tbWFuZC51dWlkICh0aGUgbGFzdCB1dWlkIGluXG4gICAgICAgICAgLy8gdGhlIGJhdGNoKSB2aWEgaXRzIG1lc3NhZ2VzVG9BY2sgcGF0aC4gRW1pdCByZXBsYXlzIGhlcmUgZm9yIHRoZVxuICAgICAgICAgIC8vIHJlc3Qgc28gY29uc3VtZXJzIHRoYXQgdHJhY2sgcGVyLXV1aWQgZGVsaXZlcnkgKGNsYW5rJ3NcbiAgICAgICAgICAvLyBhc3luY01lc3NhZ2VzIGZvb3RlciwgQ0NSKSBzZWUgYW4gYWNrIGZvciBldmVyeSBtZXNzYWdlIHRoZXkgc2VudCxcbiAgICAgICAgICAvLyBub3QganVzdCB0aGUgb25lIHRoYXQgc3Vydml2ZWQgdGhlIG1lcmdlLlxuICAgICAgICAgIGlmIChvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcyAmJiBiYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgYmF0Y2gpIHtcbiAgICAgICAgICAgICAgaWYgKGMudXVpZCAmJiBjLnV1aWQgIT09IGNvbW1hbmQudXVpZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBjLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHV1aWQ6IGMudXVpZCxcbiAgICAgICAgICAgICAgICAgIGlzUmVwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFNES1VzZXJNZXNzYWdlUmVwbGF5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29tYmluZSBhbGwgTUNQIGNsaWVudHMuIGFwcFN0YXRlLm1jcCBpcyBwb3B1bGF0ZWQgaW5jcmVtZW50YWxseVxuICAgICAgICAgIC8vIHBlci1zZXJ2ZXIgYnkgbWFpbi50c3ggKG1pcnJvcnMgdXNlTWFuYWdlTUNQQ29ubmVjdGlvbnMpLiBSZWFkaW5nXG4gICAgICAgICAgLy8gZnJlc2ggcGVyLWNvbW1hbmQgbWVhbnMgbGF0ZS1jb25uZWN0aW5nIHNlcnZlcnMgYXJlIHZpc2libGUgb24gdGhlXG4gICAgICAgICAgLy8gbmV4dCB0dXJuLiByZWdpc3RlckVsaWNpdGF0aW9uSGFuZGxlcnMgaXMgaWRlbXBvdGVudCAodHJhY2tpbmcgc2V0KS5cbiAgICAgICAgICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgICBjb25zdCBhbGxNY3BDbGllbnRzID0gW1xuICAgICAgICAgICAgLi4uYXBwU3RhdGUubWNwLmNsaWVudHMsXG4gICAgICAgICAgICAuLi5zZGtDbGllbnRzLFxuICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMsXG4gICAgICAgICAgXVxuICAgICAgICAgIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyhhbGxNY3BDbGllbnRzKVxuICAgICAgICAgIC8vIENoYW5uZWwgaGFuZGxlcnMgZm9yIHNlcnZlcnMgYWxsb3dsaXN0ZWQgdmlhIC0tY2hhbm5lbHMgYXRcbiAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gdGltZSAob3IgZW5hYmxlQ2hhbm5lbCgpIG1pZC1zZXNzaW9uKS4gUnVucyBldmVyeVxuICAgICAgICAgIC8vIHR1cm4gbGlrZSByZWdpc3RlckVsaWNpdGF0aW9uSGFuZGxlcnMgXHUyMDE0IGlkZW1wb3RlbnQgcGVyLWNsaWVudFxuICAgICAgICAgIC8vIChzZXROb3RpZmljYXRpb25IYW5kbGVyIHJlcGxhY2VzLCBub3Qgc3RhY2tzKSBhbmQgbm8tb3BzIGZvclxuICAgICAgICAgIC8vIG5vbi1hbGxvd2xpc3RlZCBzZXJ2ZXJzIChvbmUgZmVhdHVyZS1mbGFnIGNoZWNrKS5cbiAgICAgICAgICBmb3IgKGNvbnN0IGNsaWVudCBvZiBhbGxNY3BDbGllbnRzKSB7XG4gICAgICAgICAgICByZXJlZ2lzdGVyQ2hhbm5lbEhhbmRsZXJBZnRlclJlY29ubmVjdChjbGllbnQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgYWxsVG9vbHMgPSBidWlsZEFsbFRvb2xzKGFwcFN0YXRlKVxuXG4gICAgICAgICAgZm9yIChjb25zdCB1dWlkIG9mIGJhdGNoVXVpZHMpIHtcbiAgICAgICAgICAgIG5vdGlmeUNvbW1hbmRMaWZlY3ljbGUodXVpZCwgJ3N0YXJ0ZWQnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRhc2sgbm90aWZpY2F0aW9ucyBhcnJpdmUgd2hlbiBiYWNrZ3JvdW5kIGFnZW50cyBjb21wbGV0ZS5cbiAgICAgICAgICAvLyBFbWl0IGFuIFNESyBzeXN0ZW0gZXZlbnQgZm9yIFNESyBjb25zdW1lcnMsIHRoZW4gZmFsbCB0aHJvdWdoXG4gICAgICAgICAgLy8gdG8gYXNrKCkgc28gdGhlIG1vZGVsIHNlZXMgdGhlIGFnZW50IHJlc3VsdCBhbmQgY2FuIGFjdCBvbiBpdC5cbiAgICAgICAgICAvLyBUaGlzIG1hdGNoZXMgVFVJIGJlaGF2aW9yIHdoZXJlIHVzZVF1ZXVlUHJvY2Vzc29yIGFsd2F5cyBmZWVkc1xuICAgICAgICAgIC8vIG5vdGlmaWNhdGlvbnMgdG8gdGhlIG1vZGVsIHJlZ2FyZGxlc3Mgb2YgY29vcmRpbmF0b3IgbW9kZS5cbiAgICAgICAgICBpZiAoY29tbWFuZC5tb2RlID09PSAndGFzay1ub3RpZmljYXRpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25UZXh0ID1cbiAgICAgICAgICAgICAgdHlwZW9mIGNvbW1hbmQudmFsdWUgPT09ICdzdHJpbmcnID8gY29tbWFuZC52YWx1ZSA6ICcnXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgWE1MLWZvcm1hdHRlZCBub3RpZmljYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZE1hdGNoID0gbm90aWZpY2F0aW9uVGV4dC5tYXRjaChcbiAgICAgICAgICAgICAgLzx0YXNrLWlkPihbXjxdKyk8XFwvdGFzay1pZD4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgdG9vbFVzZUlkTWF0Y2ggPSBub3RpZmljYXRpb25UZXh0Lm1hdGNoKFxuICAgICAgICAgICAgICAvPHRvb2wtdXNlLWlkPihbXjxdKyk8XFwvdG9vbC11c2UtaWQ+LyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dEZpbGVNYXRjaCA9IG5vdGlmaWNhdGlvblRleHQubWF0Y2goXG4gICAgICAgICAgICAgIC88b3V0cHV0LWZpbGU+KFtePF0rKTxcXC9vdXRwdXQtZmlsZT4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzTWF0Y2ggPSBub3RpZmljYXRpb25UZXh0Lm1hdGNoKFxuICAgICAgICAgICAgICAvPHN0YXR1cz4oW148XSspPFxcL3N0YXR1cz4vLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeU1hdGNoID0gbm90aWZpY2F0aW9uVGV4dC5tYXRjaChcbiAgICAgICAgICAgICAgLzxzdW1tYXJ5PihbXjxdKyk8XFwvc3VtbWFyeT4vLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU3RhdHVzID0gKFxuICAgICAgICAgICAgICBzOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgICAgICAgICApOiBzIGlzICdjb21wbGV0ZWQnIHwgJ2ZhaWxlZCcgfCAnc3RvcHBlZCcgfCAna2lsbGVkJyA9PlxuICAgICAgICAgICAgICBzID09PSAnY29tcGxldGVkJyB8fFxuICAgICAgICAgICAgICBzID09PSAnZmFpbGVkJyB8fFxuICAgICAgICAgICAgICBzID09PSAnc3RvcHBlZCcgfHxcbiAgICAgICAgICAgICAgcyA9PT0gJ2tpbGxlZCdcbiAgICAgICAgICAgIGNvbnN0IHJhd1N0YXR1cyA9IHN0YXR1c01hdGNoPy5bMV1cbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGlzVmFsaWRTdGF0dXMocmF3U3RhdHVzKVxuICAgICAgICAgICAgICA/IHJhd1N0YXR1cyA9PT0gJ2tpbGxlZCdcbiAgICAgICAgICAgICAgICA/ICdzdG9wcGVkJ1xuICAgICAgICAgICAgICAgIDogcmF3U3RhdHVzXG4gICAgICAgICAgICAgIDogJ2NvbXBsZXRlZCdcblxuICAgICAgICAgICAgY29uc3QgdXNhZ2VNYXRjaCA9IG5vdGlmaWNhdGlvblRleHQubWF0Y2goXG4gICAgICAgICAgICAgIC88dXNhZ2U+KFtcXHNcXFNdKj8pPFxcL3VzYWdlPi8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB1c2FnZUNvbnRlbnQgPSB1c2FnZU1hdGNoPy5bMV0gPz8gJydcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsVG9rZW5zTWF0Y2ggPSB1c2FnZUNvbnRlbnQubWF0Y2goXG4gICAgICAgICAgICAgIC88dG90YWxfdG9rZW5zPihcXGQrKTxcXC90b3RhbF90b2tlbnM+LyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHRvb2xVc2VzTWF0Y2ggPSB1c2FnZUNvbnRlbnQubWF0Y2goXG4gICAgICAgICAgICAgIC88dG9vbF91c2VzPihcXGQrKTxcXC90b29sX3VzZXM+LyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uTXNNYXRjaCA9IHVzYWdlQ29udGVudC5tYXRjaChcbiAgICAgICAgICAgICAgLzxkdXJhdGlvbl9tcz4oXFxkKyk8XFwvZHVyYXRpb25fbXM+LyxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gT25seSBlbWl0IGEgdGFza19ub3RpZmljYXRpb24gU0RLIGV2ZW50IHdoZW4gYSA8c3RhdHVzPiB0YWcgaXNcbiAgICAgICAgICAgIC8vIHByZXNlbnQgXHUyMDE0IHRoYXQgbWVhbnMgdGhpcyBpcyBhIHRlcm1pbmFsIG5vdGlmaWNhdGlvbiAoY29tcGxldGVkL1xuICAgICAgICAgICAgLy8gZmFpbGVkL3N0b3BwZWQpLiBTdHJlYW0gZXZlbnRzIGZyb20gZW5xdWV1ZVN0cmVhbUV2ZW50IGNhcnJ5IG5vXG4gICAgICAgICAgICAvLyA8c3RhdHVzPiAodGhleSdyZSBwcm9ncmVzcyBwaW5ncyk7IGVtaXR0aW5nIHRoZW0gaGVyZSB3b3VsZFxuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byAnY29tcGxldGVkJyBhbmQgZmFsc2VseSBjbG9zZSB0aGUgdGFzayBmb3IgU0RLXG4gICAgICAgICAgICAvLyBjb25zdW1lcnMuIFRlcm1pbmFsIGJvb2tlbmRzIGFyZSBub3cgZW1pdHRlZCBkaXJlY3RseSB2aWFcbiAgICAgICAgICAgIC8vIGVtaXRUYXNrVGVybWluYXRlZFNkaywgc28gc2tpcHBpbmcgc3RhdHVzbGVzcyBldmVudHMgaXMgc2FmZS5cbiAgICAgICAgICAgIGlmIChzdGF0dXNNYXRjaCkge1xuICAgICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgICAgc3VidHlwZTogJ3Rhc2tfbm90aWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0YXNrX2lkOiB0YXNrSWRNYXRjaD8uWzFdID8/ICcnLFxuICAgICAgICAgICAgICAgIHRvb2xfdXNlX2lkOiB0b29sVXNlSWRNYXRjaD8uWzFdLFxuICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICBvdXRwdXRfZmlsZTogb3V0cHV0RmlsZU1hdGNoPy5bMV0gPz8gJycsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogc3VtbWFyeU1hdGNoPy5bMV0gPz8gJycsXG4gICAgICAgICAgICAgICAgdXNhZ2U6XG4gICAgICAgICAgICAgICAgICB0b3RhbFRva2Vuc01hdGNoICYmIHRvb2xVc2VzTWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF90b2tlbnM6IHBhcnNlSW50KHRvdGFsVG9rZW5zTWF0Y2hbMV0hLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sX3VzZXM6IHBhcnNlSW50KHRvb2xVc2VzTWF0Y2hbMV0hLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbl9tczogZHVyYXRpb25Nc01hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoZHVyYXRpb25Nc01hdGNoWzFdISwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vIGNvbnRpbnVlIC0tIGZhbGwgdGhyb3VnaCB0byBhc2soKSBzbyB0aGUgbW9kZWwgcHJvY2Vzc2VzIHRoZSByZXN1bHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGNvbW1hbmQudmFsdWVcblxuICAgICAgICAgIGlmIChzdHJ1Y3R1cmVkSU8gaW5zdGFuY2VvZiBSZW1vdGVJTyAmJiBjb21tYW5kLm1vZGUgPT09ICdwcm9tcHQnKSB7XG4gICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX21lc3NhZ2VfcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAgIGlzX3JlcGw6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBYm9ydCBhbnkgaW4tZmxpZ2h0IHN1Z2dlc3Rpb24gZ2VuZXJhdGlvbiBhbmQgdHJhY2sgYWNjZXB0YW5jZVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyID0gbnVsbFxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbiA9IG51bGxcbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkgPSBudWxsXG4gICAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZCkge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQubW9kZSA9PT0gJ3Byb21wdCcpIHtcbiAgICAgICAgICAgICAgLy8gU0RLIHVzZXIgbWVzc2FnZXMgZW5xdWV1ZSBDb250ZW50QmxvY2tQYXJhbVtdLCBub3QgYSBwbGFpbiBzdHJpbmdcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXRUZXh0ID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICA/IGlucHV0XG4gICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5maW5kKGIgPT4gYi50eXBlID09PSAndGV4dCcpIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICB8IHsgdHlwZTogJ3RleHQnOyB0ZXh0OiBzdHJpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgKT8udGV4dFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0VGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBsb2dTdWdnZXN0aW9uT3V0Y29tZShcbiAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZC50ZXh0LFxuICAgICAgICAgICAgICAgICAgaW5wdXRUZXh0LFxuICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkLmVtaXR0ZWRBdCxcbiAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZC5wcm9tcHRJZCxcbiAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZC5nZW5lcmF0aW9uUmVxdWVzdElkLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUubGFzdEVtaXR0ZWQgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWJvcnRDb250cm9sbGVyID0gY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICBjb25zdCB0dXJuU3RhcnRUaW1lID0gZmVhdHVyZSgnRklMRV9QRVJTSVNURU5DRScpXG4gICAgICAgICAgICA/IERhdGUubm93KClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgnYmVmb3JlX2FzaycpXG4gICAgICAgICAgc3RhcnRRdWVyeVByb2ZpbGUoKVxuICAgICAgICAgIC8vIFBlci1pdGVyYXRpb24gQUxTIGNvbnRleHQgc28gYmcgYWdlbnRzIHNwYXduZWQgaW5zaWRlIGFzaygpXG4gICAgICAgICAgLy8gaW5oZXJpdCB3b3JrbG9hZCBhY3Jvc3MgdGhlaXIgZGV0YWNoZWQgYXdhaXRzLiBJbi1wcm9jZXNzIGNyb25cbiAgICAgICAgICAvLyBzdGFtcHMgY21kLndvcmtsb2FkOyB0aGUgU0RLIC0td29ya2xvYWQgZmxhZyBpcyBvcHRpb25zLndvcmtsb2FkLlxuICAgICAgICAgIC8vIGNvbnN0LWNhcHR1cmU6IFRTIGxvc2VzIGB3aGlsZSAoKGNvbW1hbmQgPSBkZXF1ZXVlKCkpKWAgbmFycm93aW5nXG4gICAgICAgICAgLy8gaW5zaWRlIHRoZSBjbG9zdXJlLlxuICAgICAgICAgIGNvbnN0IGNtZCA9IGNvbW1hbmRcbiAgICAgICAgICBhd2FpdCBydW5XaXRoV29ya2xvYWQoY21kLndvcmtsb2FkID8/IG9wdGlvbnMud29ya2xvYWQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBhc2soe1xuICAgICAgICAgICAgICBjb21tYW5kczogdW5pcUJ5KFxuICAgICAgICAgICAgICAgIFsuLi5jdXJyZW50Q29tbWFuZHMsIC4uLmFwcFN0YXRlLm1jcC5jb21tYW5kc10sXG4gICAgICAgICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBwcm9tcHQ6IGlucHV0LFxuICAgICAgICAgICAgICBwcm9tcHRVdWlkOiBjbWQudXVpZCxcbiAgICAgICAgICAgICAgaXNNZXRhOiBjbWQuaXNNZXRhLFxuICAgICAgICAgICAgICBjd2Q6IGN3ZCgpLFxuICAgICAgICAgICAgICB0b29sczogYWxsVG9vbHMsXG4gICAgICAgICAgICAgIHZlcmJvc2U6IG9wdGlvbnMudmVyYm9zZSxcbiAgICAgICAgICAgICAgbWNwQ2xpZW50czogYWxsTWNwQ2xpZW50cyxcbiAgICAgICAgICAgICAgdGhpbmtpbmdDb25maWc6IG9wdGlvbnMudGhpbmtpbmdDb25maWcsXG4gICAgICAgICAgICAgIG1heFR1cm5zOiBvcHRpb25zLm1heFR1cm5zLFxuICAgICAgICAgICAgICBtYXhCdWRnZXRVc2Q6IG9wdGlvbnMubWF4QnVkZ2V0VXNkLFxuICAgICAgICAgICAgICB0YXNrQnVkZ2V0OiBvcHRpb25zLnRhc2tCdWRnZXQsXG4gICAgICAgICAgICAgIGNhblVzZVRvb2wsXG4gICAgICAgICAgICAgIHVzZXJTcGVjaWZpZWRNb2RlbDogYWN0aXZlVXNlclNwZWNpZmllZE1vZGVsLFxuICAgICAgICAgICAgICBmYWxsYmFja01vZGVsOiBvcHRpb25zLmZhbGxiYWNrTW9kZWwsXG4gICAgICAgICAgICAgIGpzb25TY2hlbWE6IGdldEluaXRKc29uU2NoZW1hKCkgPz8gb3B0aW9ucy5qc29uU2NoZW1hLFxuICAgICAgICAgICAgICBtdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgICAgICAgIGdldFJlYWRGaWxlQ2FjaGU6ICgpID0+XG4gICAgICAgICAgICAgICAgcGVuZGluZ1NlZWRzLnNpemUgPT09IDBcbiAgICAgICAgICAgICAgICAgID8gcmVhZEZpbGVTdGF0ZVxuICAgICAgICAgICAgICAgICAgOiBtZXJnZUZpbGVTdGF0ZUNhY2hlcyhyZWFkRmlsZVN0YXRlLCBwZW5kaW5nU2VlZHMpLFxuICAgICAgICAgICAgICBzZXRSZWFkRmlsZUNhY2hlOiBjYWNoZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVhZEZpbGVTdGF0ZSA9IGNhY2hlXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbcGF0aCwgc2VlZF0gb2YgcGVuZGluZ1NlZWRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSByZWFkRmlsZVN0YXRlLmdldChwYXRoKVxuICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZyB8fCBzZWVkLnRpbWVzdGFtcCA+IGV4aXN0aW5nLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICByZWFkRmlsZVN0YXRlLnNldChwYXRoLCBzZWVkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZW5kaW5nU2VlZHMuY2xlYXIoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuc3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuYXBwZW5kU3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcixcbiAgICAgICAgICAgICAgcmVwbGF5VXNlck1lc3NhZ2VzOiBvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcyxcbiAgICAgICAgICAgICAgaW5jbHVkZVBhcnRpYWxNZXNzYWdlczogb3B0aW9ucy5pbmNsdWRlUGFydGlhbE1lc3NhZ2VzLFxuICAgICAgICAgICAgICBoYW5kbGVFbGljaXRhdGlvbjogKHNlcnZlck5hbWUsIHBhcmFtcywgZWxpY2l0U2lnbmFsKSA9PlxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZWRJTy5oYW5kbGVFbGljaXRhdGlvbihcbiAgICAgICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGVsaWNpdFNpZ25hbCxcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5tb2RlLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICAgICdlbGljaXRhdGlvbklkJyBpbiBwYXJhbXMgPyBwYXJhbXMuZWxpY2l0YXRpb25JZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhZ2VudHM6IGN1cnJlbnRBZ2VudHMsXG4gICAgICAgICAgICAgIG9ycGhhbmVkUGVybWlzc2lvbjogY21kLm9ycGhhbmVkUGVybWlzc2lvbixcbiAgICAgICAgICAgICAgc2V0U0RLU3RhdHVzOiBzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgICAgICAgICAgICAgICAgc3VidHlwZTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgLy8gRm9yd2FyZCBtZXNzYWdlcyB0byBicmlkZ2UgaW5jcmVtZW50YWxseSAobWlkLXR1cm4pIHNvXG4gICAgICAgICAgICAgIC8vIGNsYXVkZS5haSBzZWVzIHByb2dyZXNzIGFuZCB0aGUgY29ubmVjdGlvbiBzdGF5cyBhbGl2ZVxuICAgICAgICAgICAgICAvLyB3aGlsZSBibG9ja2VkIG9uIHBlcm1pc3Npb24gcmVxdWVzdHMuXG4gICAgICAgICAgICAgIGZvcndhcmRNZXNzYWdlc1RvQnJpZGdlKClcblxuICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAncmVzdWx0Jykge1xuICAgICAgICAgICAgICAgIC8vIEZsdXNoIHBlbmRpbmcgU0RLIGV2ZW50cyBzbyB0aGV5IGFwcGVhciBiZWZvcmUgcmVzdWx0IG9uIHRoZSBzdHJlYW0uXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBkcmFpblNka0V2ZW50cygpKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShldmVudClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIb2xkLWJhY2s6IGRvbid0IGVtaXQgcmVzdWx0IHdoaWxlIGJhY2tncm91bmQgYWdlbnRzIGFyZSBydW5uaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJ1bm5pbmdUYXNrcyhjdXJyZW50U3RhdGUpLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAodC50eXBlID09PSAnbG9jYWxfYWdlbnQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnR5cGUgPT09ICdsb2NhbF93b3JrZmxvdycpICYmXG4gICAgICAgICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kVGFzayh0KSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGhlbGRCYWNrUmVzdWx0ID0gbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBoZWxkQmFja1Jlc3VsdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZsdXNoIFNESyBldmVudHMgKHRhc2tfc3RhcnRlZCwgdGFza19wcm9ncmVzcykgc28gYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIC8vIGFnZW50IHByb2dyZXNzIGlzIHN0cmVhbWVkIGluIHJlYWwtdGltZSwgbm90IGJhdGNoZWQgdW50aWwgcmVzdWx0LlxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZHJhaW5TZGtFdmVudHMoKSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSAvLyBlbmQgcnVuV2l0aFdvcmtsb2FkXG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHV1aWQgb2YgYmF0Y2hVdWlkcykge1xuICAgICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZSh1dWlkLCAnY29tcGxldGVkJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGb3J3YXJkIG1lc3NhZ2VzIHRvIGJyaWRnZSBhZnRlciBlYWNoIHR1cm5cbiAgICAgICAgICBmb3J3YXJkTWVzc2FnZXNUb0JyaWRnZSgpXG4gICAgICAgICAgYnJpZGdlSGFuZGxlPy5zZW5kUmVzdWx0KClcblxuICAgICAgICAgIGlmIChmZWF0dXJlKCdGSUxFX1BFUlNJU1RFTkNFJykgJiYgdHVyblN0YXJ0VGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2b2lkIGV4ZWN1dGVGaWxlUGVyc2lzdGVuY2UoXG4gICAgICAgICAgICAgIHR1cm5TdGFydFRpbWUsXG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgICBzdWJ0eXBlOiAnZmlsZXNfcGVyc2lzdGVkJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgIGZpbGVzOiByZXN1bHQuZmlsZXMsXG4gICAgICAgICAgICAgICAgICBmYWlsZWQ6IHJlc3VsdC5mYWlsZWQsXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gR2VuZXJhdGUgYW5kIGVtaXQgcHJvbXB0IHN1Z2dlc3Rpb24gZm9yIFNESyBjb25zdW1lcnNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcHRpb25zLnByb21wdFN1Z2dlc3Rpb25zICYmXG4gICAgICAgICAgICAhaXNFbnZEZWZpbmVkRmFsc3kocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5BQkxFX1BST01QVF9TVUdHRVNUSU9OKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gVFMgbmFycm93cyBzdWdnZXN0aW9uU3RhdGUgdG8gbmV2ZXIgaW4gdGhlIHdoaWxlIGxvb3AgYm9keTtcbiAgICAgICAgICAgIC8vIGNhc3QgdmlhIHVua25vd24gdG8gcmVzZXQgbmFycm93aW5nLlxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdWdnZXN0aW9uU3RhdGUgYXMgdW5rbm93biBhcyB0eXBlb2Ygc3VnZ2VzdGlvblN0YXRlXG4gICAgICAgICAgICBzdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBsb2NhbEFib3J0XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlU2FmZVBhcmFtcyA9IGdldExhc3RDYWNoZVNhZmVQYXJhbXMoKVxuICAgICAgICAgICAgaWYgKCFjYWNoZVNhZmVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQoXG4gICAgICAgICAgICAgICAgJ3Nka19ub19wYXJhbXMnLFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJ3NkaycsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFVzZSBhIHJlZiBvYmplY3Qgc28gdGhlIElJRkUncyBmaW5hbGx5IGNhbiBjb21wYXJlIGFnYWluc3QgaXRzIG93blxuICAgICAgICAgICAgICAvLyBwcm9taXNlIHdpdGhvdXQgYSBzZWxmLXJlZmVyZW5jZSAod2hpY2ggdXBzZXRzIFR5cGVTY3JpcHQncyBmbG93IGFuYWx5c2lzKS5cbiAgICAgICAgICAgICAgY29uc3QgcmVmOiB7IHByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsIH0gPSB7IHByb21pc2U6IG51bGwgfVxuICAgICAgICAgICAgICByZWYucHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyeUdlbmVyYXRlU3VnZ2VzdGlvbihcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxBYm9ydCxcbiAgICAgICAgICAgICAgICAgICAgbXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVTYWZlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAnc2RrJyxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IGxvY2FsQWJvcnQuc2lnbmFsLmFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbk1zZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb21wdF9zdWdnZXN0aW9uJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogcmVzdWx0LnN1Z2dlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYXN0RW1pdHRlZEVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXN1bHQuc3VnZ2VzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlZEF0OiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRJZDogcmVzdWx0LnByb21wdElkLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uUmVxdWVzdElkOiByZXN1bHQuZ2VuZXJhdGlvblJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIERlZmVyIGVtaXNzaW9uIGlmIHRoZSByZXN1bHQgaXMgYmVpbmcgaGVsZCBmb3IgYmFja2dyb3VuZCBhZ2VudHMsXG4gICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IHByb21wdF9zdWdnZXN0aW9uIGFsd2F5cyBhcnJpdmVzIGFmdGVyIHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgIC8vIE9ubHkgc2V0IGxhc3RFbWl0dGVkIHdoZW4gdGhlIHN1Z2dlc3Rpb24gaXMgYWN0dWFsbHkgZGVsaXZlcmVkXG4gICAgICAgICAgICAgICAgICAvLyB0byB0aGUgY29uc3VtZXI7IGRlZmVycmVkIHN1Z2dlc3Rpb25zIG1heSBiZSBkaXNjYXJkZWQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAvLyBkZWxpdmVyeSBpZiBhIG5ldyBjb21tYW5kIGFycml2ZXMgZmlyc3QuXG4gICAgICAgICAgICAgICAgICBpZiAoaGVsZEJhY2tSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdTdWdnZXN0aW9uID0gc3VnZ2VzdGlvbk1zZ1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogbGFzdEVtaXR0ZWRFbnRyeS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHByb21wdElkOiBsYXN0RW1pdHRlZEVudHJ5LnByb21wdElkLFxuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb25SZXF1ZXN0SWQ6IGxhc3RFbWl0dGVkRW50cnkuZ2VuZXJhdGlvblJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkID0gbGFzdEVtaXR0ZWRFbnRyeVxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShzdWdnZXN0aW9uTXNnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJyB8fFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yLm5hbWUgPT09ICdBUElVc2VyQWJvcnRFcnJvcicpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nU3VnZ2VzdGlvblN1cHByZXNzZWQoXG4gICAgICAgICAgICAgICAgICAgICAgJ2Fib3J0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgJ3NkaycsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsb2dFcnJvcih0b0Vycm9yKGVycm9yKSlcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPT09IHJlZi5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UgPSByZWYucHJvbWlzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExvZyBoZWFkbGVzcyBwcm9maWxlciBtZXRyaWNzIGZvciB0aGlzIHR1cm4gYW5kIHN0YXJ0IG5leHQgdHVyblxuICAgICAgICAgIGxvZ0hlYWRsZXNzUHJvZmlsZXJUdXJuKClcbiAgICAgICAgICBsb2dRdWVyeVByb2ZpbGVSZXBvcnQoKVxuICAgICAgICAgIGhlYWRsZXNzUHJvZmlsZXJTdGFydFR1cm4oKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVzZSBhIGRvLXdoaWxlIGxvb3AgdG8gZHJhaW4gY29tbWFuZHMgYW5kIHRoZW4gd2FpdCBmb3IgYW55XG4gICAgICAvLyBiYWNrZ3JvdW5kIGFnZW50cyB0aGF0IGFyZSBzdGlsbCBydW5uaW5nLiBXaGVuIGFnZW50cyBjb21wbGV0ZSxcbiAgICAgIC8vIHRoZWlyIG5vdGlmaWNhdGlvbnMgYXJlIGVucXVldWVkIGFuZCB0aGUgbG9vcCByZS1kcmFpbnMuXG4gICAgICBkbyB7XG4gICAgICAgIC8vIERyYWluIFNESyBldmVudHMgKHRhc2tfc3RhcnRlZCwgdGFza19wcm9ncmVzcykgYmVmb3JlIGNvbW1hbmQgcXVldWVcbiAgICAgICAgLy8gc28gcHJvZ3Jlc3MgZXZlbnRzIHByZWNlZGUgdGFza19ub3RpZmljYXRpb24gb24gdGhlIHN0cmVhbS5cbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBkcmFpblNka0V2ZW50cygpKSB7XG4gICAgICAgICAgb3V0cHV0LmVucXVldWUoZXZlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBydW5QaGFzZSA9ICdkcmFpbmluZ19jb21tYW5kcydcbiAgICAgICAgYXdhaXQgZHJhaW5Db21tYW5kUXVldWUoKVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBydW5uaW5nIGJhY2tncm91bmQgdGFza3MgYmVmb3JlIGV4aXRpbmcuXG4gICAgICAgIC8vIEV4Y2x1ZGUgaW5fcHJvY2Vzc190ZWFtbWF0ZSBcdTIwMTQgdGVhbW1hdGVzIGFyZSBsb25nLWxpdmVkIGJ5IGRlc2lnblxuICAgICAgICAvLyAoc3RhdHVzOiAncnVubmluZycgZm9yIHRoZWlyIHdob2xlIGxpZmV0aW1lLCBjbGVhbmVkIHVwIGJ5IHRoZVxuICAgICAgICAvLyBzaHV0ZG93biBwcm90b2NvbCwgbm90IGJ5IHRyYW5zaXRpb25pbmcgdG8gJ2NvbXBsZXRlZCcpLiBXYWl0aW5nXG4gICAgICAgIC8vIG9uIHRoZW0gaGVyZSBsb29wcyBmb3JldmVyIChnaC0zMDAwOCkuIFNhbWUgZXhjbHVzaW9uIGFscmVhZHlcbiAgICAgICAgLy8gZXhpc3RzIGF0IHVzZUJhY2tncm91bmRUYXNrTmF2aWdhdGlvbi50czo1NSBmb3IgdGhlIHNhbWUgcmVhc29uO1xuICAgICAgICAvLyBMMTgzOSBhYm92ZSBpcyBhbHJlYWR5IG5hcnJvd2VyICh0eXBlID09PSAnbG9jYWxfYWdlbnQnKSBzbyBpdFxuICAgICAgICAvLyBkb2Vzbid0IGhpdCB0aGlzLlxuICAgICAgICB3YWl0aW5nRm9yQWdlbnRzID0gZmFsc2VcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IGhhc1J1bm5pbmdCZyA9IGdldFJ1bm5pbmdUYXNrcyhzdGF0ZSkuc29tZShcbiAgICAgICAgICAgIHQgPT4gaXNCYWNrZ3JvdW5kVGFzayh0KSAmJiB0LnR5cGUgIT09ICdpbl9wcm9jZXNzX3RlYW1tYXRlJyxcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgaGFzTWFpblRocmVhZFF1ZXVlZCA9IHBlZWsoaXNNYWluVGhyZWFkKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgaWYgKGhhc1J1bm5pbmdCZyB8fCBoYXNNYWluVGhyZWFkUXVldWVkKSB7XG4gICAgICAgICAgICB3YWl0aW5nRm9yQWdlbnRzID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKCFoYXNNYWluVGhyZWFkUXVldWVkKSB7XG4gICAgICAgICAgICAgIHJ1blBoYXNlID0gJ3dhaXRpbmdfZm9yX2FnZW50cydcbiAgICAgICAgICAgICAgLy8gTm8gY29tbWFuZHMgcmVhZHkgeWV0LCB3YWl0IGZvciB0YXNrcyB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIGJhY2sgdG8gZHJhaW4gYW55IG5ld2x5IHF1ZXVlZCBjb21tYW5kc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAod2FpdGluZ0ZvckFnZW50cylcblxuICAgICAgaWYgKGhlbGRCYWNrUmVzdWx0KSB7XG4gICAgICAgIG91dHB1dC5lbnF1ZXVlKGhlbGRCYWNrUmVzdWx0KVxuICAgICAgICBoZWxkQmFja1Jlc3VsdCA9IG51bGxcbiAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbikge1xuICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbilcbiAgICAgICAgICAvLyBOb3cgdGhhdCB0aGUgc3VnZ2VzdGlvbiBpcyBhY3R1YWxseSBkZWxpdmVyZWQsIHJlY29yZCBpdCBmb3IgYWNjZXB0YW5jZSB0cmFja2luZ1xuICAgICAgICAgIGlmIChzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkpIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5sYXN0RW1pdHRlZCA9IHtcbiAgICAgICAgICAgICAgLi4uc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdMYXN0RW1pdHRlZEVudHJ5LFxuICAgICAgICAgICAgICBlbWl0dGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUucGVuZGluZ0xhc3RFbWl0dGVkRW50cnkgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbiA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIHJlc3VsdCBtZXNzYWdlIGJlZm9yZSBzaHV0dGluZyBkb3duXG4gICAgICAvLyBXcml0ZSBkaXJlY3RseSB0byBzdHJ1Y3R1cmVkSU8gdG8gZW5zdXJlIGltbWVkaWF0ZSBkZWxpdmVyeVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc3RydWN0dXJlZElPLndyaXRlKHtcbiAgICAgICAgICB0eXBlOiAncmVzdWx0JyxcbiAgICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfZHVyaW5nX2V4ZWN1dGlvbicsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IDAsXG4gICAgICAgICAgZHVyYXRpb25fYXBpX21zOiAwLFxuICAgICAgICAgIGlzX2Vycm9yOiB0cnVlLFxuICAgICAgICAgIG51bV90dXJuczogMCxcbiAgICAgICAgICBzdG9wX3JlYXNvbjogbnVsbCxcbiAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogMCxcbiAgICAgICAgICB1c2FnZTogRU1QVFlfVVNBR0UsXG4gICAgICAgICAgbW9kZWxVc2FnZToge30sXG4gICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiBbXSxcbiAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UoZXJyb3IpLFxuICAgICAgICAgICAgLi4uZ2V0SW5NZW1vcnlFcnJvcnMoKS5tYXAoXyA9PiBfLmVycm9yKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGVtaXQgdGhlIGVycm9yIHJlc3VsdCwgY29udGludWUgd2l0aCBzaHV0ZG93biBhbnl3YXlcbiAgICAgIH1cbiAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm5cbiAgICB9IGZpbmFsbHkge1xuICAgICAgcnVuUGhhc2UgPSAnZmluYWxseV9mbHVzaCdcbiAgICAgIC8vIEZsdXNoIHBlbmRpbmcgaW50ZXJuYWwgZXZlbnRzIGJlZm9yZSBnb2luZyBpZGxlXG4gICAgICBhd2FpdCBzdHJ1Y3R1cmVkSU8uZmx1c2hJbnRlcm5hbEV2ZW50cygpXG4gICAgICBydW5QaGFzZSA9ICdmaW5hbGx5X3Bvc3RfZmx1c2gnXG4gICAgICBpZiAoIWlzU2h1dHRpbmdEb3duKCkpIHtcbiAgICAgICAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCgnaWRsZScpXG4gICAgICAgIC8vIERyYWluIHNvIHRoZSBpZGxlIHNlc3Npb25fc3RhdGVfY2hhbmdlZCBTREsgZXZlbnQgKHBsdXMgYW55XG4gICAgICAgIC8vIHRlcm1pbmFsIHRhc2tfbm90aWZpY2F0aW9uIGJvb2tlbmRzIGVtaXR0ZWQgZHVyaW5nIGJnLWFnZW50XG4gICAgICAgIC8vIHRlYXJkb3duKSByZWFjaCB0aGUgb3V0cHV0IHN0cmVhbSBiZWZvcmUgd2UgYmxvY2sgb24gdGhlIG5leHRcbiAgICAgICAgLy8gY29tbWFuZC4gVGhlIGRvLXdoaWxlIGRyYWluIGFib3ZlIG9ubHkgcnVucyB3aGlsZVxuICAgICAgICAvLyB3YWl0aW5nRm9yQWdlbnRzOyBvbmNlIHdlJ3JlIGhlcmUgdGhlIG5leHQgZHJhaW4gd291bGQgYmUgdGhlXG4gICAgICAgIC8vIHRvcCBvZiB0aGUgbmV4dCBydW4oKSwgd2hpY2ggd29uJ3QgY29tZSBpZiBpbnB1dCBpcyBpZGxlLlxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGRyYWluU2RrRXZlbnRzKCkpIHtcbiAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcnVubmluZyA9IGZhbHNlXG4gICAgICAvLyBTdGFydCBpZGxlIHRpbWVyIHdoZW4gd2UgZmluaXNoIHByb2Nlc3NpbmcgYW5kIGFyZSB3YWl0aW5nIGZvciBpbnB1dFxuICAgICAgaWRsZVRpbWVvdXQuc3RhcnQoKVxuICAgIH1cblxuICAgIC8vIFByb2FjdGl2ZSB0aWNrOiBpZiBwcm9hY3RpdmUgaXMgYWN0aXZlIGFuZCBxdWV1ZSBpcyBlbXB0eSwgaW5qZWN0IGEgdGlja1xuICAgIGlmIChcbiAgICAgIChmZWF0dXJlKCdQUk9BQ1RJVkUnKSB8fCBmZWF0dXJlKCdLQUlST1MnKSkgJiZcbiAgICAgIHByb2FjdGl2ZU1vZHVsZT8uaXNQcm9hY3RpdmVBY3RpdmUoKSAmJlxuICAgICAgIXByb2FjdGl2ZU1vZHVsZS5pc1Byb2FjdGl2ZVBhdXNlZCgpXG4gICAgKSB7XG4gICAgICBpZiAocGVlayhpc01haW5UaHJlYWQpID09PSB1bmRlZmluZWQgJiYgIWlucHV0Q2xvc2VkKSB7XG4gICAgICAgIHNjaGVkdWxlUHJvYWN0aXZlVGljayEoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZS1jaGVjayB0aGUgcXVldWUgYWZ0ZXIgcmVsZWFzaW5nIHRoZSBtdXRleC4gQSBtZXNzYWdlIG1heSBoYXZlXG4gICAgLy8gYXJyaXZlZCAoYW5kIGNhbGxlZCBydW4oKSkgYmV0d2VlbiB0aGUgbGFzdCBkZXF1ZXVlKCkgcmV0dXJuaW5nXG4gICAgLy8gdW5kZWZpbmVkIGFuZCBgcnVubmluZyA9IGZhbHNlYCBhYm92ZS4gSW4gdGhhdCBjYXNlIHRoZSBjYWxsZXJcbiAgICAvLyBzYXcgYHJ1bm5pbmcgPT09IHRydWVgIGFuZCByZXR1cm5lZCBpbW1lZGlhdGVseSwgbGVhdmluZyB0aGVcbiAgICAvLyBtZXNzYWdlIHN0cmFuZGVkIGluIHRoZSBxdWV1ZSB3aXRoIG5vIG9uZSB0byBwcm9jZXNzIGl0LlxuICAgIGlmIChwZWVrKGlzTWFpblRocmVhZCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdm9pZCBydW4oKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHVucmVhZCB0ZWFtbWF0ZSBtZXNzYWdlcyBhbmQgcHJvY2VzcyB0aGVtXG4gICAgLy8gVGhpcyBtaXJyb3JzIHdoYXQgdXNlSW5ib3hQb2xsZXIgZG9lcyBpbiBpbnRlcmFjdGl2ZSBSRVBMIG1vZGVcbiAgICAvLyBQb2xsIHVudGlsIG5vIG1vcmUgbWVzc2FnZXMgKHRlYW1tYXRlcyBtYXkgc3RpbGwgYmUgd29ya2luZylcbiAgICB7XG4gICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICBjb25zdCB0ZWFtQ29udGV4dCA9IGN1cnJlbnRBcHBTdGF0ZS50ZWFtQ29udGV4dFxuXG4gICAgICBpZiAodGVhbUNvbnRleHQgJiYgaXNUZWFtTGVhZCh0ZWFtQ29udGV4dCkpIHtcbiAgICAgICAgY29uc3QgYWdlbnROYW1lID0gJ3RlYW0tbGVhZCdcblxuICAgICAgICAvLyBQb2xsIGZvciBtZXNzYWdlcyB3aGlsZSB0ZWFtbWF0ZXMgYXJlIGFjdGl2ZVxuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRlYW1tYXRlcyBtYXkgc2VuZCBtZXNzYWdlcyB3aGlsZSB3ZSdyZSB3YWl0aW5nXG4gICAgICAgIC8vIEtlZXAgcG9sbGluZyB1bnRpbCB0aGUgdGVhbSBpcyBzaHV0IGRvd25cbiAgICAgICAgY29uc3QgUE9MTF9JTlRFUlZBTF9NUyA9IDUwMFxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGVhbW1hdGVzIGFyZSBzdGlsbCBhY3RpdmVcbiAgICAgICAgICBjb25zdCByZWZyZXNoZWRTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgICBjb25zdCBoYXNBY3RpdmVUZWFtbWF0ZXMgPVxuICAgICAgICAgICAgaGFzQWN0aXZlSW5Qcm9jZXNzVGVhbW1hdGVzKHJlZnJlc2hlZFN0YXRlKSB8fFxuICAgICAgICAgICAgKHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0ICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0LnRlYW1tYXRlcykubGVuZ3RoID4gMClcblxuICAgICAgICAgIGlmICghaGFzQWN0aXZlVGVhbW1hdGVzKSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICdbcHJpbnQudHNdIE5vIG1vcmUgYWN0aXZlIHRlYW1tYXRlcywgc3RvcHBpbmcgcG9sbCcsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVucmVhZCA9IGF3YWl0IHJlYWRVbnJlYWRNZXNzYWdlcyhcbiAgICAgICAgICAgIGFnZW50TmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0Py50ZWFtTmFtZSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAodW5yZWFkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtwcmludC50c10gVGVhbS1sZWFkIGZvdW5kICR7dW5yZWFkLmxlbmd0aH0gdW5yZWFkIG1lc3NhZ2VzYCxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLy8gTWFyayBhcyByZWFkIGltbWVkaWF0ZWx5IHRvIGF2b2lkIGR1cGxpY2F0ZSBwcm9jZXNzaW5nXG4gICAgICAgICAgICBhd2FpdCBtYXJrTWVzc2FnZXNBc1JlYWQoXG4gICAgICAgICAgICAgIGFnZW50TmFtZSxcbiAgICAgICAgICAgICAgcmVmcmVzaGVkU3RhdGUudGVhbUNvbnRleHQ/LnRlYW1OYW1lLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHNodXRkb3duX2FwcHJvdmVkIG1lc3NhZ2VzIC0gcmVtb3ZlIHRlYW1tYXRlcyBmcm9tIHRlYW0gZmlsZVxuICAgICAgICAgICAgLy8gVGhpcyBtaXJyb3JzIHdoYXQgdXNlSW5ib3hQb2xsZXIgZG9lcyBpbiBpbnRlcmFjdGl2ZSBtb2RlIChsaW5lcyA1NDYtNjA2KVxuICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSByZWZyZXNoZWRTdGF0ZS50ZWFtQ29udGV4dD8udGVhbU5hbWVcbiAgICAgICAgICAgIGZvciAoY29uc3QgbSBvZiB1bnJlYWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2h1dGRvd25BcHByb3ZhbCA9IGlzU2h1dGRvd25BcHByb3ZlZChtLnRleHQpXG4gICAgICAgICAgICAgIGlmIChzaHV0ZG93bkFwcHJvdmFsICYmIHRlYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbW1hdGVUb1JlbW92ZSA9IHNodXRkb3duQXBwcm92YWwuZnJvbVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbcHJpbnQudHNdIFByb2Nlc3Npbmcgc2h1dGRvd25fYXBwcm92ZWQgZnJvbSAke3RlYW1tYXRlVG9SZW1vdmV9YCxcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB0ZWFtbWF0ZSBJRCBieSBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbW1hdGVJZCA9IHJlZnJlc2hlZFN0YXRlLnRlYW1Db250ZXh0Py50ZWFtbWF0ZXNcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmVudHJpZXMocmVmcmVzaGVkU3RhdGUudGVhbUNvbnRleHQudGVhbW1hdGVzKS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgIChbLCB0XSkgPT4gdC5uYW1lID09PSB0ZWFtbWF0ZVRvUmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgICApPy5bMF1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgICAgICAgICAgICBpZiAodGVhbW1hdGVJZCkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGVhbSBmaWxlXG4gICAgICAgICAgICAgICAgICByZW1vdmVUZWFtbWF0ZUZyb21UZWFtRmlsZSh0ZWFtTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBhZ2VudElkOiB0ZWFtbWF0ZUlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZWFtbWF0ZVRvUmVtb3ZlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgYFtwcmludC50c10gUmVtb3ZlZCAke3RlYW1tYXRlVG9SZW1vdmV9IGZyb20gdGVhbSBmaWxlYCxcbiAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgLy8gVW5hc3NpZ24gdGFza3Mgb3duZWQgYnkgdGhpcyB0ZWFtbWF0ZVxuICAgICAgICAgICAgICAgICAgYXdhaXQgdW5hc3NpZ25UZWFtbWF0ZVRhc2tzKFxuICAgICAgICAgICAgICAgICAgICB0ZWFtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVUb1JlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgJ3NodXRkb3duJyxcbiAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGVhbUNvbnRleHQgaW4gQXBwU3RhdGVcbiAgICAgICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXYudGVhbUNvbnRleHQ/LnRlYW1tYXRlcykgcmV0dXJuIHByZXZcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGVhbW1hdGVJZCBpbiBwcmV2LnRlYW1Db250ZXh0LnRlYW1tYXRlcykpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgW3RlYW1tYXRlSWRdOiBfLCAuLi5yZW1haW5pbmdUZWFtbWF0ZXMgfSA9XG4gICAgICAgICAgICAgICAgICAgICAgcHJldi50ZWFtQ29udGV4dC50ZWFtbWF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgIHRlYW1Db250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LnRlYW1Db250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbW1hdGVzOiByZW1haW5pbmdUZWFtbWF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9ybWF0IG1lc3NhZ2VzIHNhbWUgYXMgdXNlSW5ib3hQb2xsZXJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHVucmVhZFxuICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgIChtOiB7IGZyb206IHN0cmluZzsgdGV4dDogc3RyaW5nOyBjb2xvcj86IHN0cmluZyB9KSA9PlxuICAgICAgICAgICAgICAgICAgYDwke1RFQU1NQVRFX01FU1NBR0VfVEFHfSB0ZWFtbWF0ZV9pZD1cIiR7bS5mcm9tfVwiJHttLmNvbG9yID8gYCBjb2xvcj1cIiR7bS5jb2xvcn1cImAgOiAnJ30+XFxuJHttLnRleHR9XFxuPC8ke1RFQU1NQVRFX01FU1NBR0VfVEFHfT5gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5qb2luKCdcXG5cXG4nKVxuXG4gICAgICAgICAgICAvLyBFbnF1ZXVlIGFuZCBwcm9jZXNzXG4gICAgICAgICAgICBlbnF1ZXVlKHtcbiAgICAgICAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZWQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2b2lkIHJ1bigpXG4gICAgICAgICAgICByZXR1cm4gLy8gcnVuKCkgd2lsbCBjb21lIGJhY2sgaGVyZSBhZnRlciBwcm9jZXNzaW5nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gbWVzc2FnZXMgLSBjaGVjayBpZiB3ZSBuZWVkIHRvIHByb21wdCBmb3Igc2h1dGRvd25cbiAgICAgICAgICAvLyBJZiBpbnB1dCBpcyBjbG9zZWQgYW5kIHRlYW1tYXRlcyBhcmUgYWN0aXZlLCBpbmplY3Qgc2h1dGRvd24gcHJvbXB0IG9uY2VcbiAgICAgICAgICBpZiAoaW5wdXRDbG9zZWQgJiYgIXNodXRkb3duUHJvbXB0SW5qZWN0ZWQpIHtcbiAgICAgICAgICAgIHNodXRkb3duUHJvbXB0SW5qZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICdbcHJpbnQudHNdIElucHV0IGNsb3NlZCB3aXRoIGFjdGl2ZSB0ZWFtbWF0ZXMsIGluamVjdGluZyBzaHV0ZG93biBwcm9tcHQnLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgZW5xdWV1ZSh7XG4gICAgICAgICAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgICAgICAgICB2YWx1ZTogU0hVVERPV05fVEVBTV9QUk9NUFQsXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2b2lkIHJ1bigpXG4gICAgICAgICAgICByZXR1cm4gLy8gcnVuKCkgd2lsbCBjb21lIGJhY2sgaGVyZSBhZnRlciBwcm9jZXNzaW5nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2FpdCBhbmQgY2hlY2sgYWdhaW5cbiAgICAgICAgICBhd2FpdCBzbGVlcChQT0xMX0lOVEVSVkFMX01TKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Q2xvc2VkKSB7XG4gICAgICAvLyBDaGVjayBmb3IgYWN0aXZlIHN3YXJtIHRoYXQgbmVlZHMgc2h1dGRvd25cbiAgICAgIGNvbnN0IGhhc0FjdGl2ZVN3YXJtID0gYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gV2FpdCBmb3IgYW55IHdvcmtpbmcgaW4tcHJvY2VzcyB0ZWFtIG1lbWJlcnMgdG8gZmluaXNoXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgaWYgKGhhc1dvcmtpbmdJblByb2Nlc3NUZWFtbWF0ZXMoY3VycmVudEFwcFN0YXRlKSkge1xuICAgICAgICAgIGF3YWl0IHdhaXRGb3JUZWFtbWF0ZXNUb0JlY29tZUlkbGUoc2V0QXBwU3RhdGUsIGN1cnJlbnRBcHBTdGF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlLWZldGNoIHN0YXRlIGFmdGVyIHBvdGVudGlhbCB3YWl0XG4gICAgICAgIGNvbnN0IHJlZnJlc2hlZEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICBjb25zdCByZWZyZXNoZWRUZWFtQ29udGV4dCA9IHJlZnJlc2hlZEFwcFN0YXRlLnRlYW1Db250ZXh0XG4gICAgICAgIGNvbnN0IGhhc1RlYW1NZW1iZXJzTm90Q2xlYW5lZFVwID1cbiAgICAgICAgICByZWZyZXNoZWRUZWFtQ29udGV4dCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKHJlZnJlc2hlZFRlYW1Db250ZXh0LnRlYW1tYXRlcykubGVuZ3RoID4gMFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaGFzVGVhbU1lbWJlcnNOb3RDbGVhbmVkVXAgfHxcbiAgICAgICAgICBoYXNBY3RpdmVJblByb2Nlc3NUZWFtbWF0ZXMocmVmcmVzaGVkQXBwU3RhdGUpXG4gICAgICAgIClcbiAgICAgIH0pKClcblxuICAgICAgaWYgKGhhc0FjdGl2ZVN3YXJtKSB7XG4gICAgICAgIC8vIFRlYW0gbWVtYmVycyBhcmUgaWRsZSBvciBwYW5lLWJhc2VkIC0gaW5qZWN0IHByb21wdCB0byBzaHV0IGRvd24gdGVhbVxuICAgICAgICBlbnF1ZXVlKHtcbiAgICAgICAgICBtb2RlOiAncHJvbXB0JyxcbiAgICAgICAgICB2YWx1ZTogU0hVVERPV05fVEVBTV9QUk9NUFQsXG4gICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICB9KVxuICAgICAgICB2b2lkIHJ1bigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXYWl0IGZvciBhbnkgaW4tZmxpZ2h0IHB1c2ggc3VnZ2VzdGlvbiBiZWZvcmUgY2xvc2luZyB0aGUgb3V0cHV0IHN0cmVhbS5cbiAgICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UpIHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoW3N1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UsIHNsZWVwKDUwMDApXSlcbiAgICAgICAgfVxuICAgICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICAgIGF3YWl0IGZpbmFsaXplUGVuZGluZ0FzeW5jSG9va3MoKVxuICAgICAgICB1bnN1YnNjcmliZVNraWxsQ2hhbmdlcygpXG4gICAgICAgIHVuc3Vic2NyaWJlQXV0aFN0YXR1cz8uKClcbiAgICAgICAgc3RhdHVzTGlzdGVuZXJzLmRlbGV0ZShyYXRlTGltaXRMaXN0ZW5lcilcbiAgICAgICAgb3V0cHV0LmRvbmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB1cCBVRFMgaW5ib3ggY2FsbGJhY2sgc28gdGhlIHF1ZXJ5IGxvb3AgaXMga2lja2VkIG9mZlxuICAvLyB3aGVuIGEgbWVzc2FnZSBhcnJpdmVzIHZpYSB0aGUgVURTIHNvY2tldCBpbiBoZWFkbGVzcyBtb2RlLlxuICBpZiAoZmVhdHVyZSgnVURTX0lOQk9YJykpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgY29uc3QgeyBzZXRPbkVucXVldWUgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL3Vkc01lc3NhZ2luZy5qcycpXG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgc2V0T25FbnF1ZXVlKCgpID0+IHtcbiAgICAgIGlmICghaW5wdXRDbG9zZWQpIHtcbiAgICAgICAgdm9pZCBydW4oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBDcm9uIHNjaGVkdWxlcjogcnVucyBzY2hlZHVsZWRfdGFza3MuanNvbiB0YXNrcyBpbiBTREsvLXAgbW9kZS5cbiAgLy8gTWlycm9ycyBSRVBMJ3MgdXNlU2NoZWR1bGVkVGFza3MgaG9vay4gRmlyZWQgcHJvbXB0cyBlbnF1ZXVlICsga2lja1xuICAvLyBvZmYgcnVuKCkgZGlyZWN0bHkgXHUyMDE0IHVubGlrZSBSRVBMLCB0aGVyZSdzIG5vIHF1ZXVlIHN1YnNjcmliZXIgaGVyZVxuICAvLyB0aGF0IGRyYWlucyBvbiBlbnF1ZXVlIHdoaWxlIGlkbGUuIFRoZSBydW4oKSBtdXRleCBtYWtlcyB0aGlzIHNhZmVcbiAgLy8gZHVyaW5nIGFuIGFjdGl2ZSB0dXJuOiB0aGUgY2FsbCBuby1vcHMgYW5kIHRoZSBwb3N0LXJ1biByZWNoZWNrIGF0XG4gIC8vIHRoZSBlbmQgb2YgcnVuKCkgcGlja3MgdXAgdGhlIHF1ZXVlZCBjb21tYW5kLlxuICBsZXQgY3JvblNjaGVkdWxlcjogaW1wb3J0KCcuLi91dGlscy9jcm9uU2NoZWR1bGVyLmpzJykuQ3JvblNjaGVkdWxlciB8IG51bGwgPVxuICAgIG51bGxcbiAgaWYgKFxuICAgIGZlYXR1cmUoJ0FHRU5UX1RSSUdHRVJTJykgJiZcbiAgICBjcm9uU2NoZWR1bGVyTW9kdWxlICYmXG4gICAgY3JvbkdhdGU/LmlzS2Fpcm9zQ3JvbkVuYWJsZWQoKVxuICApIHtcbiAgICBjcm9uU2NoZWR1bGVyID0gY3JvblNjaGVkdWxlck1vZHVsZS5jcmVhdGVDcm9uU2NoZWR1bGVyKHtcbiAgICAgIG9uRmlyZTogcHJvbXB0ID0+IHtcbiAgICAgICAgaWYgKGlucHV0Q2xvc2VkKSByZXR1cm5cbiAgICAgICAgZW5xdWV1ZSh7XG4gICAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgICAgdmFsdWU6IHByb21wdCxcbiAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgcHJpb3JpdHk6ICdsYXRlcicsXG4gICAgICAgICAgLy8gU3lzdGVtLWdlbmVyYXRlZCBcdTIwMTQgbWF0Y2hlcyB1c2VTY2hlZHVsZWRUYXNrcy50cyBSRVBMIGVxdWl2YWxlbnQuXG4gICAgICAgICAgLy8gV2l0aG91dCB0aGlzLCBtZXNzYWdlcy50cyBtZXRhUHJvcCBldmFsIGlzIHt9IFx1MjE5MiBwcm9tcHQgbGVha3NcbiAgICAgICAgICAvLyBpbnRvIHZpc2libGUgdHJhbnNjcmlwdCB3aGVuIGNyb24gZmlyZXMgbWlkLXR1cm4gaW4gLXAgbW9kZS5cbiAgICAgICAgICBpc01ldGE6IHRydWUsXG4gICAgICAgICAgLy8gVGhyZWFkZWQgdG8gY2Nfd29ya2xvYWQ9IGluIHRoZSBiaWxsaW5nLWhlYWRlciBhdHRyaWJ1dGlvbiBibG9ja1xuICAgICAgICAgIC8vIHNvIHRoZSBBUEkgY2FuIHNlcnZlIGNyb24gcmVxdWVzdHMgYXQgbG93ZXIgUW9TLiBkcmFpbkNvbW1hbmRRdWV1ZVxuICAgICAgICAgIC8vIHJlYWRzIHRoaXMgcGVyLWl0ZXJhdGlvbiBhbmQgaG9pc3RzIGl0IGludG8gYm9vdHN0cmFwIHN0YXRlIGZvclxuICAgICAgICAgIC8vIHRoZSBhc2soKSBjYWxsLlxuICAgICAgICAgIHdvcmtsb2FkOiBXT1JLTE9BRF9DUk9OLFxuICAgICAgICB9KVxuICAgICAgICB2b2lkIHJ1bigpXG4gICAgICB9LFxuICAgICAgaXNMb2FkaW5nOiAoKSA9PiBydW5uaW5nIHx8IGlucHV0Q2xvc2VkLFxuICAgICAgZ2V0Sml0dGVyQ29uZmlnOiBjcm9uSml0dGVyQ29uZmlnTW9kdWxlPy5nZXRDcm9uSml0dGVyQ29uZmlnLFxuICAgICAgaXNLaWxsZWQ6ICgpID0+ICFjcm9uR2F0ZT8uaXNLYWlyb3NDcm9uRW5hYmxlZCgpLFxuICAgIH0pXG4gICAgY3JvblNjaGVkdWxlci5zdGFydCgpXG4gIH1cblxuICBjb25zdCBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyA9IGZ1bmN0aW9uIChcbiAgICBtZXNzYWdlOiBTREtDb250cm9sUmVxdWVzdCxcbiAgICByZXNwb25zZT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICApIHtcbiAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICByZXNwb25zZToge1xuICAgICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHJlcXVlc3RfaWQ6IG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yID0gZnVuY3Rpb24gKFxuICAgIG1lc3NhZ2U6IFNES0NvbnRyb2xSZXF1ZXN0LFxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nLFxuICApIHtcbiAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICByZXNwb25zZToge1xuICAgICAgICBzdWJ0eXBlOiAnZXJyb3InLFxuICAgICAgICByZXF1ZXN0X2lkOiBtZXNzYWdlLnJlcXVlc3RfaWQsXG4gICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICAvLyBIYW5kbGUgdW5leHBlY3RlZCBwZXJtaXNzaW9uIHJlc3BvbnNlcyBieSBsb29raW5nIHVwIHRoZSB1bnJlc29sdmVkIHRvb2xcbiAgLy8gY2FsbCBpbiB0aGUgdHJhbnNjcmlwdCBhbmQgZXhlY3V0aW5nIGl0XG4gIGNvbnN0IGhhbmRsZWRPcnBoYW5lZFRvb2xVc2VJZHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBzdHJ1Y3R1cmVkSU8uc2V0VW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2soYXN5bmMgbWVzc2FnZSA9PiB7XG4gICAgYXdhaXQgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2Uoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgaGFuZGxlZFRvb2xVc2VJZHM6IGhhbmRsZWRPcnBoYW5lZFRvb2xVc2VJZHMsXG4gICAgICBvbkVucXVldWVkOiAoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBtZXNzYWdlIG9mIGEgc2Vzc2lvbiBtaWdodCBiZSB0aGUgb3JwaGFuZWQgcGVybWlzc2lvblxuICAgICAgICAvLyBjaGVjayByYXRoZXIgdGhhbiBhIHVzZXIgcHJvbXB0LCBzbyBraWNrIG9mZiB0aGUgbG9vcC5cbiAgICAgICAgdm9pZCBydW4oKVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxuXG4gIC8vIFRyYWNrIGFjdGl2ZSBPQXV0aCBmbG93cyBwZXIgc2VydmVyIHNvIHdlIGNhbiBhYm9ydCBhIHByZXZpb3VzIGZsb3dcbiAgLy8gd2hlbiBhIG5ldyBtY3BfYXV0aGVudGljYXRlIHJlcXVlc3QgYXJyaXZlcyBmb3IgdGhlIHNhbWUgc2VydmVyLlxuICBjb25zdCBhY3RpdmVPQXV0aEZsb3dzID0gbmV3IE1hcDxzdHJpbmcsIEFib3J0Q29udHJvbGxlcj4oKVxuICAvLyBUcmFjayBtYW51YWwgY2FsbGJhY2sgVVJMIHN1Ym1pdCBmdW5jdGlvbnMgZm9yIGFjdGl2ZSBPQXV0aCBmbG93cy5cbiAgLy8gVXNlZCB3aGVuIGxvY2FsaG9zdCBpcyBub3QgcmVhY2hhYmxlIChlLmcuLCBicm93c2VyLWJhc2VkIElERXMpLlxuICBjb25zdCBvYXV0aENhbGxiYWNrU3VibWl0dGVycyA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIChjYWxsYmFja1VybDogc3RyaW5nKSA9PiB2b2lkXG4gID4oKVxuICAvLyBUcmFjayBzZXJ2ZXJzIHdoZXJlIHRoZSBtYW51YWwgY2FsbGJhY2sgd2FzIGFjdHVhbGx5IGludm9rZWQgKHNvIHRoZVxuICAvLyBhdXRvbWF0aWMgcmVjb25uZWN0IHBhdGgga25vd3MgdG8gc2tpcCBcdTIwMTQgdGhlIGV4dGVuc2lvbiB3aWxsIHJlY29ubmVjdCkuXG4gIGNvbnN0IG9hdXRoTWFudWFsQ2FsbGJhY2tVc2VkID0gbmV3IFNldDxzdHJpbmc+KClcbiAgLy8gVHJhY2sgT0F1dGggYXV0aC1vbmx5IHByb21pc2VzIHNvIG1jcF9vYXV0aF9jYWxsYmFja191cmwgY2FuIGF3YWl0XG4gIC8vIHRva2VuIGV4Y2hhbmdlIGNvbXBsZXRpb24uIFJlY29ubmVjdCBpcyBoYW5kbGVkIHNlcGFyYXRlbHkgYnkgdGhlXG4gIC8vIGV4dGVuc2lvbiB2aWEgaGFuZGxlQXV0aERvbmUgXHUyMTkyIG1jcF9yZWNvbm5lY3QuXG4gIGNvbnN0IG9hdXRoQXV0aFByb21pc2VzID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8dm9pZD4+KClcblxuICAvLyBJbi1mbGlnaHQgQW50aHJvcGljIE9BdXRoIGZsb3cgKGNsYXVkZV9hdXRoZW50aWNhdGUpLiBTaW5nbGUtc2xvdDogYVxuICAvLyBzZWNvbmQgYXV0aGVudGljYXRlIHJlcXVlc3QgY2xlYW5zIHVwIHRoZSBmaXJzdC4gVGhlIHNlcnZpY2UgaG9sZHMgdGhlXG4gIC8vIFBLQ0UgdmVyaWZpZXIgKyBsb2NhbGhvc3QgbGlzdGVuZXI7IHRoZSBwcm9taXNlIHNldHRsZXMgYWZ0ZXJcbiAgLy8gaW5zdGFsbE9BdXRoVG9rZW5zIFx1MjAxNCBhZnRlciBpdCByZXNvbHZlcywgdGhlIGluLXByb2Nlc3MgbWVtb2l6ZWQgdG9rZW5cbiAgLy8gY2FjaGUgaXMgYWxyZWFkeSBjbGVhcmVkIGFuZCB0aGUgbmV4dCBBUEkgY2FsbCBwaWNrcyB1cCB0aGUgbmV3IGNyZWRzLlxuICBsZXQgY2xhdWRlT0F1dGg6IHtcbiAgICBzZXJ2aWNlOiBPQXV0aFNlcnZpY2VcbiAgICBmbG93OiBQcm9taXNlPHZvaWQ+XG4gIH0gfCBudWxsID0gbnVsbFxuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkgc3Bhd25pbmcgYSBwYXJhbGxlbCBhc3luYyB0YXNrLSB3ZSBoYXZlIHR3b1xuICAvLyBydW5uaW5nIGluIHBhcmFsbGVsLSBvbmUgcmVhZGluZyBmcm9tIHN0ZGluIGFuZCBhZGRpbmcgdG8gdGhlXG4gIC8vIHF1ZXVlIHRvIGJlIHByb2Nlc3NlZCBhbmQgYW5vdGhlciByZWFkaW5nIGZyb20gdGhlIHF1ZXVlLFxuICAvLyBwcm9jZXNzaW5nIGFuZCByZXR1cm5pbmcgdGhlIHJlc3VsdCBvZiB0aGUgZ2VuZXJhdGlvbi5cbiAgLy8gVGhlIHByb2Nlc3MgaXMgY29tcGxldGUgd2hlbiB0aGUgaW5wdXQgc3RyZWFtIGNvbXBsZXRlcyBhbmRcbiAgLy8gdGhlIGxhc3QgZ2VuZXJhdGlvbiBvZiB0aGUgcXVldWUgaGFzIGNvbXBsZXRlLlxuICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgbGV0IGluaXRpYWxpemVkID0gZmFsc2VcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV9tZXNzYWdlX2xvb3Bfc3RhcnRlZCcpXG4gICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIHN0cnVjdHVyZWRJTy5zdHJ1Y3R1cmVkSW5wdXQpIHtcbiAgICAgIC8vIE5vbi11c2VyIGV2ZW50cyBhcmUgaGFuZGxlZCBpbmxpbmUgKG5vIHF1ZXVlKS4gc3RhcnRlZFx1MjE5MmNvbXBsZXRlZCBpblxuICAgICAgLy8gdGhlIHNhbWUgdGljayBjYXJyaWVzIG5vIGluZm9ybWF0aW9uLCBzbyBvbmx5IGZpcmUgY29tcGxldGVkLlxuICAgICAgLy8gY29udHJvbF9yZXNwb25zZSBpcyByZXBvcnRlZCBieSBTdHJ1Y3R1cmVkSU8ucHJvY2Vzc0xpbmUgKHdoaWNoIGFsc29cbiAgICAgIC8vIHNlZXMgb3JwaGFucyB0aGF0IG5ldmVyIHlpZWxkIGhlcmUpLlxuICAgICAgY29uc3QgZXZlbnRJZCA9ICd1dWlkJyBpbiBtZXNzYWdlID8gbWVzc2FnZS51dWlkIDogdW5kZWZpbmVkXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50SWQgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAndXNlcicgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAnY29udHJvbF9yZXNwb25zZSdcbiAgICAgICkge1xuICAgICAgICBub3RpZnlDb21tYW5kTGlmZWN5Y2xlKGV2ZW50SWQsICdjb21wbGV0ZWQnKVxuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXF1ZXN0Jykge1xuICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdpbnRlcnJ1cHQnKSB7XG4gICAgICAgICAgLy8gVHJhY2sgZXNjYXBlcyBmb3IgYXR0cmlidXRpb24gKGFudC1vbmx5IGZlYXR1cmUpXG4gICAgICAgICAgaWYgKGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpKSB7XG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5hdHRyaWJ1dGlvbixcbiAgICAgICAgICAgICAgICBlc2NhcGVDb3VudDogcHJldi5hdHRyaWJ1dGlvbi5lc2NhcGVDb3VudCArIDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFib3J0Q29udHJvbGxlcikge1xuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmFib3J0Q29udHJvbGxlcj8uYWJvcnQoKVxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmxhc3RFbWl0dGVkID0gbnVsbFxuICAgICAgICAgIHN1Z2dlc3Rpb25TdGF0ZS5wZW5kaW5nU3VnZ2VzdGlvbiA9IG51bGxcbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnZW5kX3Nlc3Npb24nKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFtwcmludC50c10gZW5kX3Nlc3Npb24gcmVjZWl2ZWQsIHJlYXNvbj0ke21lc3NhZ2UucmVxdWVzdC5yZWFzb24gPz8gJ3Vuc3BlY2lmaWVkJ31gLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLmFib3J0Q29udHJvbGxlciA9IG51bGxcbiAgICAgICAgICBzdWdnZXN0aW9uU3RhdGUubGFzdEVtaXR0ZWQgPSBudWxsXG4gICAgICAgICAgc3VnZ2VzdGlvblN0YXRlLnBlbmRpbmdTdWdnZXN0aW9uID0gbnVsbFxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgYnJlYWsgLy8gZXhpdHMgZm9yLWF3YWl0IFx1MjE5MiBmYWxscyB0aHJvdWdoIHRvIGlucHV0Q2xvc2VkPXRydWUgZHJhaW4gYmVsb3dcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2luaXRpYWxpemUnKSB7XG4gICAgICAgICAgLy8gU0RLIE1DUCBzZXJ2ZXIgbmFtZXMgZnJvbSB0aGUgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICAgICAgLy8gUG9wdWxhdGVkIGJ5IGJvdGggYnJvd3NlciBhbmQgUHJvY2Vzc1RyYW5zcG9ydCBzZXNzaW9uc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdC5zZGtNY3BTZXJ2ZXJzICYmXG4gICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc2RrTWNwU2VydmVycy5sZW5ndGggPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlcnZlck5hbWUgb2YgbWVzc2FnZS5yZXF1ZXN0LnNka01jcFNlcnZlcnMpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGNvbmZpZyBmb3IgU0RLIE1DUCBzZXJ2ZXJzXG4gICAgICAgICAgICAgIC8vIFRoZSBhY3R1YWwgc2VydmVyIGNvbm5lY3Rpb24gaXMgbWFuYWdlZCBieSB0aGUgU0RLIFF1ZXJ5IGNsYXNzXG4gICAgICAgICAgICAgIHNka01jcENvbmZpZ3Nbc2VydmVyTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NkaycsXG4gICAgICAgICAgICAgICAgbmFtZTogc2VydmVyTmFtZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGhhbmRsZUluaXRpYWxpemVSZXF1ZXN0KFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0X2lkLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgIG1vZGVsSW5mb3MsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVkSU8sXG4gICAgICAgICAgICAhIW9wdGlvbnMuZW5hYmxlQXV0aFN0YXR1cyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBhZ2VudHMsXG4gICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICAvLyBFbmFibGUgcHJvbXB0IHN1Z2dlc3Rpb25zIGluIEFwcFN0YXRlIHdoZW4gU0RLIGNvbnN1bWVyIG9wdHMgaW4uXG4gICAgICAgICAgLy8gc2hvdWxkRW5hYmxlUHJvbXB0U3VnZ2VzdGlvbigpIHJldHVybnMgZmFsc2UgZm9yIG5vbi1pbnRlcmFjdGl2ZVxuICAgICAgICAgIC8vIHNlc3Npb25zLCBidXQgdGhlIFNESyBjb25zdW1lciBleHBsaWNpdGx5IHJlcXVlc3RlZCBzdWdnZXN0aW9ucy5cbiAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnByb21wdFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByZXYucHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIHByb21wdFN1Z2dlc3Rpb25FbmFibGVkOiB0cnVlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LmFnZW50UHJvZ3Jlc3NTdW1tYXJpZXMgJiZcbiAgICAgICAgICAgIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9zbGF0ZV9wcmlzbScsIHRydWUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXRTZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZCh0cnVlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZVxuXG4gICAgICAgICAgLy8gSWYgdGhlIGF1dG8tcmVzdW1lIGxvZ2ljIHByZS1lbnF1ZXVlZCBhIGNvbW1hbmQsIGRyYWluIGl0IG5vd1xuICAgICAgICAgIC8vIHRoYXQgaW5pdGlhbGl6ZSBoYXMgc2V0IHVwIHN5c3RlbVByb21wdCwgYWdlbnRzLCBob29rcywgZXRjLlxuICAgICAgICAgIGlmIChoYXNDb21tYW5kc0luUXVldWUoKSkge1xuICAgICAgICAgICAgdm9pZCBydW4oKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3NldF9wZXJtaXNzaW9uX21vZGUnKSB7XG4gICAgICAgICAgY29uc3QgbSA9IG1lc3NhZ2UucmVxdWVzdCAvLyBmb3IgdHlwZXNjcmlwdCAoVE9ETzogdXNlIHJlYWRvbmx5IHR5cGVzIHRvIGF2b2lkIHRoaXMpXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDogaGFuZGxlU2V0UGVybWlzc2lvbk1vZGUoXG4gICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgICAgICAgcHJldi50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpc1VsdHJhcGxhbk1vZGU6IG0udWx0cmFwbGFuID8/IHByZXYuaXNVbHRyYXBsYW5Nb2RlLFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIC8vIGhhbmRsZVNldFBlcm1pc3Npb25Nb2RlIHNlbmRzIHRoZSBjb250cm9sX3Jlc3BvbnNlOyB0aGVcbiAgICAgICAgICAvLyBub3RpZnlTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkIHRoYXQgdXNlZCB0byBmb2xsb3cgaGVyZSBpc1xuICAgICAgICAgIC8vIG5vdyBmaXJlZCBieSBvbkNoYW5nZUFwcFN0YXRlICh3aXRoIGV4dGVybmFsaXplZCBtb2RlIG5hbWUpLlxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnc2V0X21vZGVsJykge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3RlZE1vZGVsID0gbWVzc2FnZS5yZXF1ZXN0Lm1vZGVsID8/ICdkZWZhdWx0J1xuICAgICAgICAgIGNvbnN0IG1vZGVsID1cbiAgICAgICAgICAgIHJlcXVlc3RlZE1vZGVsID09PSAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgPyBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCgpXG4gICAgICAgICAgICAgIDogcmVxdWVzdGVkTW9kZWxcbiAgICAgICAgICBhY3RpdmVVc2VyU3BlY2lmaWVkTW9kZWwgPSBtb2RlbFxuICAgICAgICAgIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZShtb2RlbClcbiAgICAgICAgICBub3RpZnlTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkKHsgbW9kZWwgfSlcbiAgICAgICAgICBpbmplY3RNb2RlbFN3aXRjaEJyZWFkY3J1bWJzKHJlcXVlc3RlZE1vZGVsLCBtb2RlbClcblxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdzZXRfbWF4X3RoaW5raW5nX3Rva2VucycpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0Lm1heF90aGlua2luZ190b2tlbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGhpbmtpbmdDb25maWcgPSB1bmRlZmluZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5tYXhfdGhpbmtpbmdfdG9rZW5zID09PSAwKSB7XG4gICAgICAgICAgICBvcHRpb25zLnRoaW5raW5nQ29uZmlnID0geyB0eXBlOiAnZGlzYWJsZWQnIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VuYWJsZWQnLFxuICAgICAgICAgICAgICBidWRnZXRUb2tlbnM6IG1lc3NhZ2UucmVxdWVzdC5tYXhfdGhpbmtpbmdfdG9rZW5zLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX3N0YXR1cycpIHtcbiAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICAgICAgICBtY3BTZXJ2ZXJzOiBidWlsZE1jcFNlcnZlclN0YXR1c2VzKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2dldF9jb250ZXh0X3VzYWdlJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0Q29udGV4dERhdGEoe1xuICAgICAgICAgICAgICBtZXNzYWdlczogbXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1haW5Mb29wTW9kZWw6IGdldE1haW5Mb29wTW9kZWwoKSxcbiAgICAgICAgICAgICAgICB0b29sczogYnVpbGRBbGxUb29scyhhcHBTdGF0ZSksXG4gICAgICAgICAgICAgICAgYWdlbnREZWZpbml0aW9uczogYXBwU3RhdGUuYWdlbnREZWZpbml0aW9ucyxcbiAgICAgICAgICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IG9wdGlvbnMuc3lzdGVtUHJvbXB0LFxuICAgICAgICAgICAgICAgIGFwcGVuZFN5c3RlbVByb21wdDogb3B0aW9ucy5hcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwgeyAuLi5kYXRhIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBlcnJvck1lc3NhZ2UoZXJyb3IpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9tZXNzYWdlJykge1xuICAgICAgICAgIC8vIEhhbmRsZSBNQ1Agbm90aWZpY2F0aW9ucyBmcm9tIFNESyBzZXJ2ZXJzXG4gICAgICAgICAgY29uc3QgbWNwUmVxdWVzdCA9IG1lc3NhZ2UucmVxdWVzdFxuICAgICAgICAgIGNvbnN0IHNka0NsaWVudCA9IHNka0NsaWVudHMuZmluZChcbiAgICAgICAgICAgIGNsaWVudCA9PiBjbGllbnQubmFtZSA9PT0gbWNwUmVxdWVzdC5zZXJ2ZXJfbmFtZSxcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gQ2hlY2sgY2xpZW50IGV4aXN0cyAtIGR5bmFtaWNhbGx5IGFkZGVkIFNESyBzZXJ2ZXJzIG1heSBoYXZlXG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXIgY2xpZW50cyB3aXRoIG51bGwgY2xpZW50IHVudGlsIHVwZGF0ZVNka01jcCgpIHJ1bnNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzZGtDbGllbnQgJiZcbiAgICAgICAgICAgIHNka0NsaWVudC50eXBlID09PSAnY29ubmVjdGVkJyAmJlxuICAgICAgICAgICAgc2RrQ2xpZW50LmNsaWVudD8udHJhbnNwb3J0Py5vbm1lc3NhZ2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNka0NsaWVudC5jbGllbnQudHJhbnNwb3J0Lm9ubWVzc2FnZShtY3BSZXF1ZXN0Lm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdyZXdpbmRfZmlsZXMnKSB7XG4gICAgICAgICAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlUmV3aW5kRmlsZXMoXG4gICAgICAgICAgICBtZXNzYWdlLnJlcXVlc3QudXNlcl9tZXNzYWdlX2lkIGFzIFVVSUQsXG4gICAgICAgICAgICBhcHBTdGF0ZSxcbiAgICAgICAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LmRyeV9ydW4gPz8gZmFsc2UsXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChyZXN1bHQuY2FuUmV3aW5kIHx8IG1lc3NhZ2UucmVxdWVzdC5kcnlfcnVuKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCByZXN1bHQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgcmVzdWx0LmVycm9yID8/ICdVbmV4cGVjdGVkIGVycm9yJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjYW5jZWxfYXN5bmNfbWVzc2FnZScpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRVdWlkID0gbWVzc2FnZS5yZXF1ZXN0Lm1lc3NhZ2VfdXVpZFxuICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSBkZXF1ZXVlQWxsTWF0Y2hpbmcoY21kID0+IGNtZC51dWlkID09PSB0YXJnZXRVdWlkKVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgIGNhbmNlbGxlZDogcmVtb3ZlZC5sZW5ndGggPiAwLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdzZWVkX3JlYWRfc3RhdGUnKSB7XG4gICAgICAgICAgLy8gQ2xpZW50IG9ic2VydmVkIGEgUmVhZCB0aGF0IHdhcyBsYXRlciByZW1vdmVkIGZyb20gY29udGV4dCAoZS5nLlxuICAgICAgICAgIC8vIGJ5IHNuaXApLCBzbyB0cmFuc2NyaXB0LWJhc2VkIHNlZWRpbmcgbWlzc2VkIGl0LiBRdWV1ZWQgaW50b1xuICAgICAgICAgIC8vIHBlbmRpbmdTZWVkczsgYXBwbGllZCBhdCB0aGUgbmV4dCBjbG9uZS1yZXBsYWNlIGJvdW5kYXJ5LlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBleHBhbmRQYXRoOiBhbGwgb3RoZXIgcmVhZEZpbGVTdGF0ZSB3cml0ZXJzIG5vcm1hbGl6ZSAofiwgcmVsYXRpdmUsXG4gICAgICAgICAgICAvLyBzZXNzaW9uIGN3ZCB2cyBwcm9jZXNzIGN3ZCkuIEZpbGVFZGl0VG9vbCBsb29rcyB1cCBieSBleHBhbmRQYXRoJ2RcbiAgICAgICAgICAgIC8vIGtleSBcdTIwMTQgYSB2ZXJiYXRpbSBjbGllbnQgcGF0aCB3b3VsZCBtaXNzLlxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBleHBhbmRQYXRoKG1lc3NhZ2UucmVxdWVzdC5wYXRoKVxuICAgICAgICAgICAgLy8gQ2hlY2sgZGlzayBtdGltZSBiZWZvcmUgcmVhZGluZyBjb250ZW50LiBJZiB0aGUgZmlsZSBjaGFuZ2VkXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGUgY2xpZW50J3Mgb2JzZXJ2YXRpb24sIHJlYWRGaWxlIHdvdWxkIHJldHVybiBDX2N1cnJlbnRcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdkIHN0b3JlIGl0IHdpdGggdGhlIGNsaWVudCdzIE1fb2JzZXJ2ZWQgXHUyMDE0IGdldENoYW5nZWRGaWxlc1xuICAgICAgICAgICAgLy8gdGhlbiBzZWVzIGRpc2sgPiBjYWNoZS50aW1lc3RhbXAsIHJlLXJlYWRzLCBkaWZmcyBDX2N1cnJlbnQgdnNcbiAgICAgICAgICAgIC8vIENfY3VycmVudCA9IGVtcHR5LCBlbWl0cyBubyBhdHRhY2htZW50LCBhbmQgdGhlIG1vZGVsIGlzIG5ldmVyXG4gICAgICAgICAgICAvLyB0b2xkIGFib3V0IHRoZSBDX29ic2VydmVkIFx1MjE5MiBDX2N1cnJlbnQgY2hhbmdlLiBTa2lwcGluZyB0aGUgc2VlZFxuICAgICAgICAgICAgLy8gbWFrZXMgRWRpdCBmYWlsIFwiZmlsZSBub3QgcmVhZCB5ZXRcIiBcdTIxOTIgZm9yY2VzIGEgZnJlc2ggUmVhZC5cbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgbWF0Y2hlcyBGaWxlUmVhZFRvb2wgYW5kIGdldEZpbGVNb2RpZmljYXRpb25UaW1lLlxuICAgICAgICAgICAgY29uc3QgZGlza010aW1lID0gTWF0aC5mbG9vcigoYXdhaXQgc3RhdChub3JtYWxpemVkUGF0aCkpLm10aW1lTXMpXG4gICAgICAgICAgICBpZiAoZGlza010aW1lIDw9IG1lc3NhZ2UucmVxdWVzdC5tdGltZSkge1xuICAgICAgICAgICAgICBjb25zdCByYXcgPSBhd2FpdCByZWFkRmlsZShub3JtYWxpemVkUGF0aCwgJ3V0Zi04JylcbiAgICAgICAgICAgICAgLy8gU3RyaXAgQk9NICsgbm9ybWFsaXplIENSTEZcdTIxOTJMRiB0byBtYXRjaCByZWFkRmlsZUluUmFuZ2UgYW5kXG4gICAgICAgICAgICAgIC8vIHJlYWRGaWxlU3luY1dpdGhNZXRhZGF0YS4gRmlsZUVkaXRUb29sJ3MgY29udGVudC1jb21wYXJlXG4gICAgICAgICAgICAgIC8vIGZhbGxiYWNrIChmb3IgV2luZG93cyBtdGltZSBidW1wcyB3aXRob3V0IGNvbnRlbnQgY2hhbmdlKVxuICAgICAgICAgICAgICAvLyBjb21wYXJlcyBhZ2FpbnN0IExGLW5vcm1hbGl6ZWQgZGlzayByZWFkcy5cbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICByYXcuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmID8gcmF3LnNsaWNlKDEpIDogcmF3XG4gICAgICAgICAgICAgICkucmVwbGFjZUFsbCgnXFxyXFxuJywgJ1xcbicpXG4gICAgICAgICAgICAgIHBlbmRpbmdTZWVkcy5zZXQobm9ybWFsaXplZFBhdGgsIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGlza010aW1lLFxuICAgICAgICAgICAgICAgIG9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxpbWl0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBFTk9FTlQgZXRjIFx1MjAxNCBza2lwIHNlZWRpbmcgYnV0IHN0aWxsIHN1Y2NlZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9zZXRfc2VydmVycycpIHtcbiAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlLCBzZGtTZXJ2ZXJzQ2hhbmdlZCB9ID0gYXdhaXQgYXBwbHlNY3BTZXJ2ZXJDaGFuZ2VzKFxuICAgICAgICAgICAgbWVzc2FnZS5yZXF1ZXN0LnNlcnZlcnMsXG4gICAgICAgICAgKVxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHJlc3BvbnNlKVxuXG4gICAgICAgICAgLy8gQ29ubmVjdCBTREsgc2VydmVycyBBRlRFUiByZXNwb25zZSB0byBhdm9pZCBkZWFkbG9ja1xuICAgICAgICAgIGlmIChzZGtTZXJ2ZXJzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdm9pZCB1cGRhdGVTZGtNY3AoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3JlbG9hZF9wbHVnaW5zJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGZlYXR1cmUoJ0RPV05MT0FEX1VTRVJfU0VUVElOR1MnKSAmJlxuICAgICAgICAgICAgICAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFKSB8fCBnZXRJc1JlbW90ZU1vZGUoKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBSZS1wdWxsIHVzZXIgc2V0dGluZ3Mgc28gZW5hYmxlZFBsdWdpbnMgcHVzaGVkIGZyb20gdGhlXG4gICAgICAgICAgICAgIC8vIHVzZXIncyBsb2NhbCBDTEkgdGFrZSBlZmZlY3QgYmVmb3JlIHRoZSBjYWNoZSBzd2VlcC5cbiAgICAgICAgICAgICAgY29uc3QgYXBwbGllZCA9IGF3YWl0IHJlZG93bmxvYWRVc2VyU2V0dGluZ3MoKVxuICAgICAgICAgICAgICBpZiAoYXBwbGllZCkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3Iubm90aWZ5Q2hhbmdlKCd1c2VyU2V0dGluZ3MnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCByZWZyZXNoQWN0aXZlUGx1Z2lucyhzZXRBcHBTdGF0ZSlcblxuICAgICAgICAgICAgY29uc3Qgc2RrQWdlbnRzID0gY3VycmVudEFnZW50cy5maWx0ZXIoXG4gICAgICAgICAgICAgIGEgPT4gYS5zb3VyY2UgPT09ICdmbGFnU2V0dGluZ3MnLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY3VycmVudEFnZW50cyA9IFsuLi5yLmFnZW50RGVmaW5pdGlvbnMuYWxsQWdlbnRzLCAuLi5zZGtBZ2VudHNdXG5cbiAgICAgICAgICAgIC8vIFJlbG9hZCBzdWNjZWVkZWQgXHUyMDE0IGdhdGhlciByZXNwb25zZSBkYXRhIGJlc3QtZWZmb3J0IHNvIGFcbiAgICAgICAgICAgIC8vIHJlYWQgZmFpbHVyZSBkb2Vzbid0IG1hc2sgdGhlIHN1Y2Nlc3NmdWwgc3RhdGUgY2hhbmdlLlxuICAgICAgICAgICAgLy8gYWxsU2V0dGxlZCBzbyBvbmUgZmFpbHVyZSBkb2Vzbid0IGRpc2NhcmQgdGhlIG90aGVycy5cbiAgICAgICAgICAgIGxldCBwbHVnaW5zOiBTREtDb250cm9sUmVsb2FkUGx1Z2luc1Jlc3BvbnNlWydwbHVnaW5zJ10gPSBbXVxuICAgICAgICAgICAgY29uc3QgW2NtZHNSLCBtY3BSLCBwbHVnaW5zUl0gPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoW1xuICAgICAgICAgICAgICBnZXRDb21tYW5kcyhjd2QoKSksXG4gICAgICAgICAgICAgIGFwcGx5UGx1Z2luTWNwRGlmZigpLFxuICAgICAgICAgICAgICBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSgpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIGlmIChjbWRzUi5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRDb21tYW5kcyA9IGNtZHNSLnZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dFcnJvcihjbWRzUi5yZWFzb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWNwUi5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcbiAgICAgICAgICAgICAgbG9nRXJyb3IobWNwUi5yZWFzb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luc1Iuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgICAgICBwbHVnaW5zID0gcGx1Z2luc1IudmFsdWUuZW5hYmxlZC5tYXAocCA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwLnBhdGgsXG4gICAgICAgICAgICAgICAgc291cmNlOiBwLnNvdXJjZSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dFcnJvcihwbHVnaW5zUi5yZWFzb24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgY29tbWFuZHM6IGN1cnJlbnRDb21tYW5kc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoY21kID0+IGNtZC51c2VySW52b2NhYmxlICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAubWFwKGNtZCA9PiAoe1xuICAgICAgICAgICAgICAgICAgbmFtZTogZ2V0Q29tbWFuZE5hbWUoY21kKSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtYXREZXNjcmlwdGlvbldpdGhTb3VyY2UoY21kKSxcbiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50SGludDogY21kLmFyZ3VtZW50SGludCB8fCAnJyxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgIGFnZW50czogY3VycmVudEFnZW50cy5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGEuYWdlbnRUeXBlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhLndoZW5Ub1VzZSxcbiAgICAgICAgICAgICAgICBtb2RlbDogYS5tb2RlbCA9PT0gJ2luaGVyaXQnID8gdW5kZWZpbmVkIDogYS5tb2RlbCxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgICBtY3BTZXJ2ZXJzOiBidWlsZE1jcFNlcnZlclN0YXR1c2VzKCksXG4gICAgICAgICAgICAgIGVycm9yX2NvdW50OiByLmVycm9yX2NvdW50LFxuICAgICAgICAgICAgfSBzYXRpc2ZpZXMgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXNwb25zZSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX3JlY29ubmVjdCcpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgeyBzZXJ2ZXJOYW1lIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBlbGljaXRhdGlvblJlZ2lzdGVyZWQuZGVsZXRlKHNlcnZlck5hbWUpXG4gICAgICAgICAgLy8gQ29uZmlnLWV4aXN0ZW5jZSBnYXRlIG11c3QgY292ZXIgdGhlIFNBTUUgc291cmNlcyBhcyB0aGVcbiAgICAgICAgICAvLyBvcGVyYXRpb25zIGJlbG93LiBTREstaW5qZWN0ZWQgc2VydmVycyAocXVlcnkoe21jcFNlcnZlcnM6ey4uLn19KSlcbiAgICAgICAgICAvLyBhbmQgZHluYW1pY2FsbHktYWRkZWQgc2VydmVycyB3ZXJlIG1pc3NpbmcgaGVyZSwgc29cbiAgICAgICAgICAvLyB0b2dnbGVNY3BTZXJ2ZXIvcmVjb25uZWN0IHJldHVybmVkIFwiU2VydmVyIG5vdCBmb3VuZFwiIGV2ZW4gdGhvdWdoXG4gICAgICAgICAgLy8gdGhlIGRpc2Nvbm5lY3QvcmVjb25uZWN0IHdvdWxkIGhhdmUgd29ya2VkIChnaC0zMTMzOSAvIENDLTMxNCkuXG4gICAgICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgICAgIGdldE1jcENvbmZpZ0J5TmFtZShzZXJ2ZXJOYW1lKSA/P1xuICAgICAgICAgICAgbWNwQ2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKT8uY29uZmlnID8/XG4gICAgICAgICAgICBzZGtDbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIGR5bmFtaWNNY3BTdGF0ZS5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIGN1cnJlbnRBcHBTdGF0ZS5tY3AuY2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgICA/LmNvbmZpZyA/P1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgYFNlcnZlciBub3QgZm91bmQ6ICR7c2VydmVyTmFtZX1gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHBTdGF0ZS5tY3Agd2l0aCB0aGUgbmV3IGNsaWVudCwgdG9vbHMsIGNvbW1hbmRzLCBhbmQgcmVzb3VyY2VzXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lID8gcmVzdWx0LmNsaWVudCA6IGMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0b29sczogW1xuICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+IHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpKSxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC50b29scyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AuY29tbWFuZHMsIGMgPT5cbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcihjLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAuLi5yZXN1bHQuY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZXNvdXJjZXM6XG4gICAgICAgICAgICAgICAgICByZXN1bHQucmVzb3VyY2VzICYmIHJlc3VsdC5yZXNvdXJjZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4ucHJldi5tY3AucmVzb3VyY2VzLCBbc2VydmVyTmFtZV06IHJlc3VsdC5yZXNvdXJjZXMgfVxuICAgICAgICAgICAgICAgICAgICA6IG9taXQocHJldi5tY3AucmVzb3VyY2VzLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLy8gQWxzbyB1cGRhdGUgZHluYW1pY01jcFN0YXRlIHNvIHJ1bigpIHBpY2tzIHVwIHRoZSBuZXcgdG9vbHNcbiAgICAgICAgICAgIC8vIG9uIHRoZSBuZXh0IHR1cm4gKHJ1bigpIHJlYWRzIGR5bmFtaWNNY3BTdGF0ZSwgbm90IGFwcFN0YXRlKVxuICAgICAgICAgICAgZHluYW1pY01jcFN0YXRlID0ge1xuICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUsXG4gICAgICAgICAgICAgIGNsaWVudHM6IFtcbiAgICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUuY2xpZW50cy5maWx0ZXIoYyA9PiBjLm5hbWUgIT09IHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGllbnQsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHRvb2xzOiBbXG4gICAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLnRvb2xzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIHQgPT4gIXQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LnRvb2xzLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJFbGljaXRhdGlvbkhhbmRsZXJzKFtyZXN1bHQuY2xpZW50XSlcbiAgICAgICAgICAgICAgcmVyZWdpc3RlckNoYW5uZWxIYW5kbGVyQWZ0ZXJSZWNvbm5lY3QocmVzdWx0LmNsaWVudClcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNsaWVudC50eXBlID09PSAnZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgPyAocmVzdWx0LmNsaWVudC5lcnJvciA/PyAnQ29ubmVjdGlvbiBmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgOiBgU2VydmVyIHN0YXR1czogJHtyZXN1bHQuY2xpZW50LnR5cGV9YFxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF90b2dnbGUnKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IHsgc2VydmVyTmFtZSwgZW5hYmxlZCB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgZWxpY2l0YXRpb25SZWdpc3RlcmVkLmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgICAgIC8vIEdhdGUgbXVzdCBtYXRjaCB0aGUgY2xpZW50LWxvb2t1cCBzcHJlYWQgYmVsb3cgKHdoaWNoXG4gICAgICAgICAgLy8gaW5jbHVkZXMgc2RrQ2xpZW50cyBhbmQgZHluYW1pY01jcFN0YXRlLmNsaWVudHMpLiBTYW1lIGZpeCBhc1xuICAgICAgICAgIC8vIG1jcF9yZWNvbm5lY3QgYWJvdmUgKGdoLTMxMzM5IC8gQ0MtMzE0KS5cbiAgICAgICAgICBjb25zdCBjb25maWcgPVxuICAgICAgICAgICAgZ2V0TWNwQ29uZmlnQnlOYW1lKHNlcnZlck5hbWUpID8/XG4gICAgICAgICAgICBtY3BDbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpPy5jb25maWcgPz9cbiAgICAgICAgICAgIHNka0NsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgZHluYW1pY01jcFN0YXRlLmNsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgID8uY29uZmlnID8/XG4gICAgICAgICAgICBudWxsXG5cbiAgICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGBTZXJ2ZXIgbm90IGZvdW5kOiAke3NlcnZlck5hbWV9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBEaXNhYmxpbmc6IHBlcnNpc3QgKyBkaXNjb25uZWN0IChtYXRjaGVzIFRVSSB0b2dnbGVNY3BTZXJ2ZXIgYmVoYXZpb3IpXG4gICAgICAgICAgICBzZXRNY3BTZXJ2ZXJFbmFibGVkKHNlcnZlck5hbWUsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gW1xuICAgICAgICAgICAgICAuLi5tY3BDbGllbnRzLFxuICAgICAgICAgICAgICAuLi5zZGtDbGllbnRzLFxuICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUuY2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLFxuICAgICAgICAgICAgXS5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgaWYgKGNsaWVudCAmJiBjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgYXdhaXQgY2xlYXJTZXJ2ZXJDYWNoZShzZXJ2ZXJOYW1lLCBjb25maWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYXBwU3RhdGUubWNwIHRvIHJlZmxlY3QgZGlzYWJsZWQgc3RhdHVzIGFuZCByZW1vdmUgdG9vbHMvY29tbWFuZHMvcmVzb3VyY2VzXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgID8geyBuYW1lOiBzZXJ2ZXJOYW1lLCB0eXBlOiAnZGlzYWJsZWQnIGFzIGNvbnN0LCBjb25maWcgfVxuICAgICAgICAgICAgICAgICAgICA6IGMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0b29sczogcmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+IHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpKSxcbiAgICAgICAgICAgICAgICBjb21tYW5kczogcmVqZWN0KHByZXYubWNwLmNvbW1hbmRzLCBjID0+XG4gICAgICAgICAgICAgICAgICBjb21tYW5kQmVsb25nc1RvU2VydmVyKGMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VzOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVuYWJsaW5nOiBwZXJzaXN0ICsgcmVjb25uZWN0XG4gICAgICAgICAgICBzZXRNY3BTZXJ2ZXJFbmFibGVkKHNlcnZlck5hbWUsIHRydWUpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHBTdGF0ZS5tY3Agd2l0aCB0aGUgbmV3IGNsaWVudCwgdG9vbHMsIGNvbW1hbmRzLCBhbmQgcmVzb3VyY2VzXG4gICAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIExMTSBzZWVzIHVwZGF0ZWQgdG9vbHMgYWZ0ZXIgZW5hYmxpbmcgdGhlIHNlcnZlclxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZ2V0TWNwUHJlZml4KHNlcnZlck5hbWUpXG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgICAgICAgIGNsaWVudHM6IHByZXYubWNwLmNsaWVudHMubWFwKGMgPT5cbiAgICAgICAgICAgICAgICAgIGMubmFtZSA9PT0gc2VydmVyTmFtZSA/IHJlc3VsdC5jbGllbnQgOiBjLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlamVjdChwcmV2Lm1jcC50b29scywgdCA9PiB0Lm5hbWU/LnN0YXJ0c1dpdGgocHJlZml4KSksXG4gICAgICAgICAgICAgICAgICAuLi5yZXN1bHQudG9vbHMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLmNvbW1hbmRzLCBjID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRCZWxvbmdzVG9TZXJ2ZXIoYywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LmNvbW1hbmRzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VzOlxuICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlc291cmNlcyAmJiByZXN1bHQucmVzb3VyY2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLnByZXYubWNwLnJlc291cmNlcywgW3NlcnZlck5hbWVdOiByZXN1bHQucmVzb3VyY2VzIH1cbiAgICAgICAgICAgICAgICAgICAgOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVycyhbcmVzdWx0LmNsaWVudF0pXG4gICAgICAgICAgICAgIHJlcmVnaXN0ZXJDaGFubmVsSGFuZGxlckFmdGVyUmVjb25uZWN0KHJlc3VsdC5jbGllbnQpXG4gICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgIHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICAgID8gKHJlc3VsdC5jbGllbnQuZXJyb3IgPz8gJ0Nvbm5lY3Rpb24gZmFpbGVkJylcbiAgICAgICAgICAgICAgICAgIDogYFNlcnZlciBzdGF0dXM6ICR7cmVzdWx0LmNsaWVudC50eXBlfWBcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjaGFubmVsX2VuYWJsZScpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgaGFuZGxlQ2hhbm5lbEVuYWJsZShcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdF9pZCxcbiAgICAgICAgICAgIG1lc3NhZ2UucmVxdWVzdC5zZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgLy8gUG9vbCBzcHJlYWQgbWF0Y2hlcyBtY3Bfc3RhdHVzIFx1MjAxNCBhbGwgdGhyZWUgY2xpZW50IHNvdXJjZXMuXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRBcHBTdGF0ZS5tY3AuY2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uc2RrQ2xpZW50cyxcbiAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9hdXRoZW50aWNhdGUnKSB7XG4gICAgICAgICAgY29uc3QgeyBzZXJ2ZXJOYW1lIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgICAgIGdldE1jcENvbmZpZ0J5TmFtZShzZXJ2ZXJOYW1lKSA/P1xuICAgICAgICAgICAgbWNwQ2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKT8uY29uZmlnID8/XG4gICAgICAgICAgICBjdXJyZW50QXBwU3RhdGUubWNwLmNsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgPy5jb25maWcgPz9cbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGBTZXJ2ZXIgbm90IGZvdW5kOiAke3NlcnZlck5hbWV9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlICE9PSAnc3NlJyAmJiBjb25maWcudHlwZSAhPT0gJ2h0dHAnKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgIGBTZXJ2ZXIgdHlwZSBcIiR7Y29uZmlnLnR5cGV9XCIgZG9lcyBub3Qgc3VwcG9ydCBPQXV0aCBhdXRoZW50aWNhdGlvbmAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIEFib3J0IGFueSBwcmV2aW91cyBpbi1mbGlnaHQgT0F1dGggZmxvdyBmb3IgdGhpcyBzZXJ2ZXJcbiAgICAgICAgICAgICAgYWN0aXZlT0F1dGhGbG93cy5nZXQoc2VydmVyTmFtZSk/LmFib3J0KClcbiAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgICBhY3RpdmVPQXV0aEZsb3dzLnNldChzZXJ2ZXJOYW1lLCBjb250cm9sbGVyKVxuXG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIGF1dGggVVJMIGZyb20gdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlQXV0aFVybDogKHVybDogc3RyaW5nKSA9PiB2b2lkXG4gICAgICAgICAgICAgIGNvbnN0IGF1dGhVcmxQcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlQXV0aFVybCA9IHJlc29sdmVcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgT0F1dGggZmxvdyBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICBjb25zdCBvYXV0aFByb21pc2UgPSBwZXJmb3JtTUNQT0F1dGhGbG93KFxuICAgICAgICAgICAgICAgIHNlcnZlck5hbWUsXG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIHVybCA9PiByZXNvbHZlQXV0aFVybCEodXJsKSxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBza2lwQnJvd3Nlck9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICBvbldhaXRpbmdGb3JDYWxsYmFjazogc3VibWl0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2F1dGhDYWxsYmFja1N1Ym1pdHRlcnMuc2V0KHNlcnZlck5hbWUsIHN1Ym1pdClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBhdXRoIFVSTCAob3IgdGhlIGZsb3cgdG8gY29tcGxldGUgd2l0aG91dCBuZWVkaW5nIHJlZGlyZWN0KVxuICAgICAgICAgICAgICBjb25zdCBhdXRoVXJsID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgICAgICBhdXRoVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICBvYXV0aFByb21pc2UudGhlbigoKSA9PiBudWxsIGFzIHN0cmluZyB8IG51bGwpLFxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGlmIChhdXRoVXJsKSB7XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgYXV0aFVybCxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVzVXNlckFjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVzVXNlckFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFN0b3JlIGF1dGgtb25seSBwcm9taXNlIGZvciBtY3Bfb2F1dGhfY2FsbGJhY2tfdXJsIGhhbmRsZXIuXG4gICAgICAgICAgICAgIC8vIERvbid0IHN3YWxsb3cgZXJyb3JzIFx1MjAxNCB0aGUgY2FsbGJhY2sgaGFuZGxlciBuZWVkcyB0byBkZXRlY3RcbiAgICAgICAgICAgICAgLy8gYXV0aCBmYWlsdXJlcyBhbmQgcmVwb3J0IHRoZW0gdG8gdGhlIGNhbGxlci5cbiAgICAgICAgICAgICAgb2F1dGhBdXRoUHJvbWlzZXMuc2V0KHNlcnZlck5hbWUsIG9hdXRoUHJvbWlzZSlcblxuICAgICAgICAgICAgICAvLyBIYW5kbGUgYmFja2dyb3VuZCBjb21wbGV0aW9uIFx1MjAxNCByZWNvbm5lY3QgYWZ0ZXIgYXV0aC5cbiAgICAgICAgICAgICAgLy8gV2hlbiBtYW51YWwgY2FsbGJhY2sgaXMgdXNlZCwgc2tpcCB0aGUgcmVjb25uZWN0IGhlcmU7XG4gICAgICAgICAgICAgIC8vIHRoZSBleHRlbnNpb24ncyBoYW5kbGVBdXRoRG9uZSBcdTIxOTIgbWNwX3JlY29ubmVjdCBoYW5kbGVzIGl0XG4gICAgICAgICAgICAgIC8vICh3aGljaCBhbHNvIHVwZGF0ZXMgZHluYW1pY01jcFN0YXRlIGZvciB0b29sIHJlZ2lzdHJhdGlvbikuXG4gICAgICAgICAgICAgIGNvbnN0IGZ1bGxGbG93UHJvbWlzZSA9IG9hdXRoUHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIERvbid0IHJlY29ubmVjdCBpZiB0aGUgc2VydmVyIHdhcyBkaXNhYmxlZCBkdXJpbmcgdGhlIE9BdXRoIGZsb3dcbiAgICAgICAgICAgICAgICAgIGlmIChpc01jcFNlcnZlckRpc2FibGVkKHNlcnZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gU2tpcCByZWNvbm5lY3QgaWYgdGhlIG1hbnVhbCBjYWxsYmFjayBwYXRoIHdhcyB1c2VkIFx1MjAxNFxuICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlQXV0aERvbmUgd2lsbCBkbyBpdCB2aWEgbWNwX3JlY29ubmVjdCAod2hpY2hcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZXMgZHluYW1pY01jcFN0YXRlIGZvciB0b29sIHJlZ2lzdHJhdGlvbikuXG4gICAgICAgICAgICAgICAgICBpZiAob2F1dGhNYW51YWxDYWxsYmFja1VzZWQuaGFzKHNlcnZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gUmVjb25uZWN0IHRoZSBzZXJ2ZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBhdXRoXG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBnZXRNY3BQcmVmaXgoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50czogcHJldi5tY3AuY2xpZW50cy5tYXAoYyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXJOYW1lID8gcmVzdWx0LmNsaWVudCA6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB0b29sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVqZWN0KHByZXYubWNwLnRvb2xzLCB0ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHQubmFtZT8uc3RhcnRzV2l0aChwcmVmaXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC50b29scyxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AuY29tbWFuZHMsIGMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZEJlbG9uZ3NUb1NlcnZlcihjLCBzZXJ2ZXJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQuY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVzb3VyY2VzICYmIHJlc3VsdC5yZXNvdXJjZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYubWNwLnJlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZXJ2ZXJOYW1lXTogcmVzdWx0LnJlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogb21pdChwcmV2Lm1jcC5yZXNvdXJjZXMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAvLyBBbHNvIHVwZGF0ZSBkeW5hbWljTWNwU3RhdGUgc28gcnVuKCkgcGlja3MgdXAgdGhlIG5ldyB0b29sc1xuICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIG5leHQgdHVybiAocnVuKCkgcmVhZHMgZHluYW1pY01jcFN0YXRlLCBub3QgYXBwU3RhdGUpXG4gICAgICAgICAgICAgICAgICBkeW5hbWljTWNwU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmR5bmFtaWNNY3BTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmR5bmFtaWNNY3BTdGF0ZS5jbGllbnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPT4gYy5uYW1lICE9PSBzZXJ2ZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5keW5hbWljTWNwU3RhdGUudG9vbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9PiAhdC5uYW1lPy5zdGFydHNXaXRoKHByZWZpeCksXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQudG9vbHMsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgICBgTUNQIE9BdXRoIGZhaWxlZCBmb3IgJHtzZXJ2ZXJOYW1lfTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBvbmx5IGlmIHRoaXMgaXMgc3RpbGwgdGhlIGFjdGl2ZSBmbG93XG4gICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlT0F1dGhGbG93cy5nZXQoc2VydmVyTmFtZSkgPT09IGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlT0F1dGhGbG93cy5kZWxldGUoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgb2F1dGhDYWxsYmFja1N1Ym1pdHRlcnMuZGVsZXRlKHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgICAgICAgIG9hdXRoTWFudWFsQ2FsbGJhY2tVc2VkLmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBvYXV0aEF1dGhQcm9taXNlcy5kZWxldGUoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB2b2lkIGZ1bGxGbG93UHJvbWlzZVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnbWNwX29hdXRoX2NhbGxiYWNrX3VybCcpIHtcbiAgICAgICAgICBjb25zdCB7IHNlcnZlck5hbWUsIGNhbGxiYWNrVXJsIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICBjb25zdCBzdWJtaXQgPSBvYXV0aENhbGxiYWNrU3VibWl0dGVycy5nZXQoc2VydmVyTmFtZSlcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgY2FsbGJhY2sgVVJMIGJlZm9yZSBzdWJtaXR0aW5nLiBUaGUgc3VibWl0XG4gICAgICAgICAgICAvLyBjYWxsYmFjayBpbiBhdXRoLnRzIHNpbGVudGx5IGlnbm9yZXMgVVJMcyBtaXNzaW5nIGEgY29kZVxuICAgICAgICAgICAgLy8gcGFyYW0sIHdoaWNoIHdvdWxkIGxlYXZlIHRoZSBhdXRoIHByb21pc2UgdW5yZXNvbHZlZCBhbmRcbiAgICAgICAgICAgIC8vIGJsb2NrIHRoZSBjb250cm9sIG1lc3NhZ2UgbG9vcCB1bnRpbCB0aW1lb3V0LlxuICAgICAgICAgICAgbGV0IGhhc0NvZGVPckVycm9yID0gZmFsc2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVUkwoY2FsbGJhY2tVcmwpXG4gICAgICAgICAgICAgIGhhc0NvZGVPckVycm9yID1cbiAgICAgICAgICAgICAgICBwYXJzZWQuc2VhcmNoUGFyYW1zLmhhcygnY29kZScpIHx8XG4gICAgICAgICAgICAgICAgcGFyc2VkLnNlYXJjaFBhcmFtcy5oYXMoJ2Vycm9yJylcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAvLyBJbnZhbGlkIFVSTFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNDb2RlT3JFcnJvcikge1xuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAnSW52YWxpZCBjYWxsYmFjayBVUkw6IG1pc3NpbmcgYXV0aG9yaXphdGlvbiBjb2RlLiBQbGVhc2UgcGFzdGUgdGhlIGZ1bGwgcmVkaXJlY3QgVVJMIGluY2x1ZGluZyB0aGUgY29kZSBwYXJhbWV0ZXIuJyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2F1dGhNYW51YWxDYWxsYmFja1VzZWQuYWRkKHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgIHN1Ym1pdChjYWxsYmFja1VybClcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXV0aCAodG9rZW4gZXhjaGFuZ2UpIHRvIGNvbXBsZXRlIGJlZm9yZSByZXNwb25kaW5nLlxuICAgICAgICAgICAgICAvLyBSZWNvbm5lY3QgaXMgaGFuZGxlZCBieSB0aGUgZXh0ZW5zaW9uIHZpYSBoYW5kbGVBdXRoRG9uZSBcdTIxOTJcbiAgICAgICAgICAgICAgLy8gbWNwX3JlY29ubmVjdCAod2hpY2ggdXBkYXRlcyBkeW5hbWljTWNwU3RhdGUgZm9yIHRvb2xzKS5cbiAgICAgICAgICAgICAgY29uc3QgYXV0aFByb21pc2UgPSBvYXV0aEF1dGhQcm9taXNlcy5nZXQoc2VydmVyTmFtZSlcbiAgICAgICAgICAgICAgaWYgKGF1dGhQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGF1dGhQcm9taXNlXG4gICAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICA6ICdPQXV0aCBhdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgYE5vIGFjdGl2ZSBPQXV0aCBmbG93IGZvciBzZXJ2ZXI6ICR7c2VydmVyTmFtZX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9hdXRoZW50aWNhdGUnKSB7XG4gICAgICAgICAgLy8gQW50aHJvcGljIE9BdXRoIG92ZXIgdGhlIGNvbnRyb2wgY2hhbm5lbC4gVGhlIFNESyBjbGllbnQgb3duc1xuICAgICAgICAgIC8vIHRoZSB1c2VyJ3MgYnJvd3NlciAod2UncmUgaGVhZGxlc3MgaW4gLXAgbW9kZSk7IHdlIGhhbmQgYmFja1xuICAgICAgICAgIC8vIGJvdGggVVJMcyBhbmQgd2FpdC4gQXV0b21hdGljIFVSTCBcdTIxOTIgbG9jYWxob3N0IGxpc3RlbmVyIGNhdGNoZXNcbiAgICAgICAgICAvLyB0aGUgcmVkaXJlY3QgaWYgdGhlIGJyb3dzZXIgaXMgb24gdGhpcyBob3N0OyBtYW51YWwgVVJMIFx1MjE5MiB0aGVcbiAgICAgICAgICAvLyBzdWNjZXNzIHBhZ2Ugc2hvd3MgXCJjb2RlI3N0YXRlXCIgZm9yIGNsYXVkZV9vYXV0aF9jYWxsYmFjay5cbiAgICAgICAgICBjb25zdCB7IGxvZ2luV2l0aENsYXVkZUFpIH0gPSBtZXNzYWdlLnJlcXVlc3RcblxuICAgICAgICAgIC8vIENsZWFuIHVwIGFueSBwcmlvciBmbG93LiBjbGVhbnVwKCkgY2xvc2VzIHRoZSBsb2NhbGhvc3QgbGlzdGVuZXJcbiAgICAgICAgICAvLyBhbmQgbnVsbHMgdGhlIG1hbnVhbCByZXNvbHZlci4gVGhlIHByaW9yIGBmbG93YCBwcm9taXNlIGlzIGxlZnRcbiAgICAgICAgICAvLyBwZW5kaW5nIChBdXRoQ29kZUxpc3RlbmVyLmNsb3NlKCkgZG9lcyBub3QgcmVqZWN0KSBidXQgaXRzIG9iamVjdFxuICAgICAgICAgIC8vIGdyYXBoIGJlY29tZXMgdW5yZWFjaGFibGUgb25jZSB0aGUgc2VydmVyIGhhbmRsZSBpcyByZWxlYXNlZCBhbmRcbiAgICAgICAgICAvLyBpcyBHQydkIFx1MjAxNCBubyBmZCBvciBwb3J0IGlzIGhlbGQuXG4gICAgICAgICAgY2xhdWRlT0F1dGg/LnNlcnZpY2UuY2xlYW51cCgpXG5cbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfb2F1dGhfZmxvd19zdGFydCcsIHtcbiAgICAgICAgICAgIGxvZ2luV2l0aENsYXVkZUFpOiBsb2dpbldpdGhDbGF1ZGVBaSA/PyB0cnVlLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IE9BdXRoU2VydmljZSgpXG4gICAgICAgICAgbGV0IHVybFJlc29sdmVyITogKHVybHM6IHtcbiAgICAgICAgICAgIG1hbnVhbFVybDogc3RyaW5nXG4gICAgICAgICAgICBhdXRvbWF0aWNVcmw6IHN0cmluZ1xuICAgICAgICAgIH0pID0+IHZvaWRcbiAgICAgICAgICBjb25zdCB1cmxQcm9taXNlID0gbmV3IFByb21pc2U8e1xuICAgICAgICAgICAgbWFudWFsVXJsOiBzdHJpbmdcbiAgICAgICAgICAgIGF1dG9tYXRpY1VybDogc3RyaW5nXG4gICAgICAgICAgfT4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB1cmxSZXNvbHZlciA9IHJlc29sdmVcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZmxvdyA9IHNlcnZpY2VcbiAgICAgICAgICAgIC5zdGFydE9BdXRoRmxvdyhcbiAgICAgICAgICAgICAgYXN5bmMgKG1hbnVhbFVybCwgYXV0b21hdGljVXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljVXJsIGlzIGFsd2F5cyBkZWZpbmVkIHdoZW4gc2tpcEJyb3dzZXJPcGVuIGlzIHNldDtcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2lnbmF0dXJlIGlzIG9wdGlvbmFsIG9ubHkgZm9yIHRoZSBleGlzdGluZyBzaW5nbGUtYXJnIGNhbGxlcnMuXG4gICAgICAgICAgICAgICAgdXJsUmVzb2x2ZXIoeyBtYW51YWxVcmwsIGF1dG9tYXRpY1VybDogYXV0b21hdGljVXJsISB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9naW5XaXRoQ2xhdWRlQWk6IGxvZ2luV2l0aENsYXVkZUFpID8/IHRydWUsXG4gICAgICAgICAgICAgICAgc2tpcEJyb3dzZXJPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgdG9rZW5zID0+IHtcbiAgICAgICAgICAgICAgLy8gaW5zdGFsbE9BdXRoVG9rZW5zOiBwZXJmb3JtTG9nb3V0IChjbGVhciBzdGFsZSBzdGF0ZSkgXHUyMTkyXG4gICAgICAgICAgICAgIC8vIHN0b3JlIHByb2ZpbGUgXHUyMTkyIHNhdmVPQXV0aFRva2Vuc0lmTmVlZGVkIFx1MjE5MiBjbGVhck9BdXRoVG9rZW5DYWNoZVxuICAgICAgICAgICAgICAvLyBcdTIxOTIgY2xlYXJBdXRoUmVsYXRlZENhY2hlcy4gQWZ0ZXIgdGhpcyByZXNvbHZlcywgdGhlIG1lbW9pemVkXG4gICAgICAgICAgICAgIC8vIGdldENsYXVkZUFJT0F1dGhUb2tlbnMgaW4gdGhpcyBwcm9jZXNzIGlzIGludmFsaWRhdGVkOyB0aGVcbiAgICAgICAgICAgICAgLy8gbmV4dCBBUEkgY2FsbCByZS1yZWFkcyBrZXljaGFpbi9maWxlIGFuZCB3b3Jrcy4gTm8gcmVzcGF3bi5cbiAgICAgICAgICAgICAgYXdhaXQgaW5zdGFsbE9BdXRoVG9rZW5zKHRva2VucylcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X29hdXRoX3N1Y2Nlc3MnLCB7XG4gICAgICAgICAgICAgICAgbG9naW5XaXRoQ2xhdWRlQWk6IGxvZ2luV2l0aENsYXVkZUFpID8/IHRydWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmNsZWFudXAoKVxuICAgICAgICAgICAgICBpZiAoY2xhdWRlT0F1dGg/LnNlcnZpY2UgPT09IHNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICBjbGF1ZGVPQXV0aCA9IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIGNsYXVkZU9BdXRoID0geyBzZXJ2aWNlLCBmbG93IH1cblxuICAgICAgICAgIC8vIEF0dGFjaCB0aGUgcmVqZWN0aW9uIGhhbmRsZXIgYmVmb3JlIGF3YWl0aW5nIHNvIGEgc3luY2hyb25vdXNcbiAgICAgICAgICAvLyBzdGFydE9BdXRoRmxvdyBmYWlsdXJlIGRvZXNuJ3Qgc3VyZmFjZSBhcyBhbiB1bmhhbmRsZWQgcmVqZWN0aW9uLlxuICAgICAgICAgIC8vIFRoZSBjbGF1ZGVfb2F1dGhfY2FsbGJhY2sgaGFuZGxlciByZS1hd2FpdHMgZmxvdyBmb3IgdGhlIG1hbnVhbFxuICAgICAgICAgIC8vIHBhdGggYW5kIHN1cmZhY2VzIHRoZSByZWFsIGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICAgICAgdm9pZCBmbG93LmNhdGNoKGVyciA9PlxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBjbGF1ZGVfYXV0aGVudGljYXRlIGZsb3cgZW5kZWQ6ICR7ZXJyfWAsIHtcbiAgICAgICAgICAgICAgbGV2ZWw6ICdpbmZvJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSYWNlIGFnYWluc3QgZmxvdzogaWYgc3RhcnRPQXV0aEZsb3cgcmVqZWN0cyBiZWZvcmUgY2FsbGluZ1xuICAgICAgICAgICAgLy8gdGhlIGF1dGhVUkxIYW5kbGVyIChlLmcuIEF1dGhDb2RlTGlzdGVuZXIuc3RhcnQoKSBmYWlscyB3aXRoXG4gICAgICAgICAgICAvLyBFQUNDRVMgb3IgZmQgZXhoYXVzdGlvbiksIHVybFByb21pc2Ugd291bGQgcGVuZCBmb3JldmVyIGFuZFxuICAgICAgICAgICAgLy8gd2VkZ2UgdGhlIHN0ZGluIGxvb3AuIGZsb3cgcmVzb2x2aW5nIGZpcnN0IGlzIHVucmVhY2hhYmxlIGluXG4gICAgICAgICAgICAvLyBwcmFjdGljZSAoaXQncyBzdXNwZW5kZWQgb24gdGhlIHNhbWUgdXJscyB3ZSdyZSB3YWl0aW5nIGZvcikuXG4gICAgICAgICAgICBjb25zdCB7IG1hbnVhbFVybCwgYXV0b21hdGljVXJsIH0gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgICB1cmxQcm9taXNlLFxuICAgICAgICAgICAgICBmbG93LnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICdPQXV0aCBmbG93IGNvbXBsZXRlZCB3aXRob3V0IHByb2R1Y2luZyBhdXRoIFVSTHMnLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSwge1xuICAgICAgICAgICAgICBtYW51YWxVcmwsXG4gICAgICAgICAgICAgIGF1dG9tYXRpY1VybCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBlcnJvck1lc3NhZ2UoZXJyb3IpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9vYXV0aF9jYWxsYmFjaycgfHxcbiAgICAgICAgICBtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2NsYXVkZV9vYXV0aF93YWl0X2Zvcl9jb21wbGV0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIWNsYXVkZU9BdXRoKSB7XG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IoXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICdObyBhY3RpdmUgY2xhdWRlX2F1dGhlbnRpY2F0ZSBmbG93JyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSBtYW51YWwgY29kZSBzeW5jaHJvbm91c2x5IFx1MjAxNCBtdXN0IGhhcHBlbiBpbiBzdGRpblxuICAgICAgICAgICAgLy8gbWVzc2FnZSBvcmRlciBzbyBhIHN1YnNlcXVlbnQgY2xhdWRlX2F1dGhlbnRpY2F0ZSBkb2Vzbid0XG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBzZXJ2aWNlIGJlZm9yZSB0aGlzIGNvZGUgbGFuZHMuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjbGF1ZGVfb2F1dGhfY2FsbGJhY2snKSB7XG4gICAgICAgICAgICAgIGNsYXVkZU9BdXRoLnNlcnZpY2UuaGFuZGxlTWFudWFsQXV0aENvZGVJbnB1dCh7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbkNvZGU6IG1lc3NhZ2UucmVxdWVzdC5hdXRob3JpemF0aW9uQ29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogbWVzc2FnZS5yZXF1ZXN0LnN0YXRlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGV0YWNoIHRoZSBhd2FpdCBcdTIwMTQgdGhlIHN0ZGluIHJlYWRlciBpcyBzZXJpYWwgYW5kIGJsb2NraW5nXG4gICAgICAgICAgICAvLyBoZXJlIGRlYWRsb2NrcyBjbGF1ZGVfb2F1dGhfd2FpdF9mb3JfY29tcGxldGlvbjogZmxvdyBtYXlcbiAgICAgICAgICAgIC8vIG9ubHkgcmVzb2x2ZSB2aWEgYSBmdXR1cmUgY2xhdWRlX29hdXRoX2NhbGxiYWNrIG9uIHN0ZGluLFxuICAgICAgICAgICAgLy8gd2hpY2ggY2FuJ3QgYmUgcmVhZCB3aGlsZSB3ZSdyZSBwYXJrZWQuIENhcHR1cmUgdGhlIGJpbmRpbmc7XG4gICAgICAgICAgICAvLyBjbGF1ZGVPQXV0aCBpcyBudWxsZWQgaW4gZmxvdydzIG93biAuZmluYWxseS5cbiAgICAgICAgICAgIGNvbnN0IHsgZmxvdyB9ID0gY2xhdWRlT0F1dGhcbiAgICAgICAgICAgIHZvaWQgZmxvdy50aGVuKFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudEluZm8gPSBnZXRBY2NvdW50SW5mb3JtYXRpb24oKVxuICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGFjY291bnRJbmZvPy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uOiBhY2NvdW50SW5mbz8ub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25UeXBlOiBhY2NvdW50SW5mbz8uc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0b2tlblNvdXJjZTogYWNjb3VudEluZm8/LnRva2VuU291cmNlLFxuICAgICAgICAgICAgICAgICAgICBhcGlLZXlTb3VyY2U6IGFjY291bnRJbmZvPy5hcGlLZXlTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIGFwaVByb3ZpZGVyOiBnZXRBUElQcm92aWRlcigpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ21jcF9jbGVhcl9hdXRoJykge1xuICAgICAgICAgIGNvbnN0IHsgc2VydmVyTmFtZSB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9XG4gICAgICAgICAgICBnZXRNY3BDb25maWdCeU5hbWUoc2VydmVyTmFtZSkgPz9cbiAgICAgICAgICAgIG1jcENsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSk/LmNvbmZpZyA/P1xuICAgICAgICAgICAgY3VycmVudEFwcFN0YXRlLm1jcC5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpXG4gICAgICAgICAgICAgID8uY29uZmlnID8/XG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBgU2VydmVyIG5vdCBmb3VuZDogJHtzZXJ2ZXJOYW1lfWApXG4gICAgICAgICAgfSBlbHNlIGlmIChjb25maWcudHlwZSAhPT0gJ3NzZScgJiYgY29uZmlnLnR5cGUgIT09ICdodHRwJykge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICBgQ2Fubm90IGNsZWFyIGF1dGggZm9yIHNlcnZlciB0eXBlIFwiJHtjb25maWcudHlwZX1cImAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHJldm9rZVNlcnZlclRva2VucyhzZXJ2ZXJOYW1lLCBjb25maWcpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNvbmZpZylcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGdldE1jcFByZWZpeChzZXJ2ZXJOYW1lKVxuICAgICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICBtY3A6IHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2Lm1jcCxcbiAgICAgICAgICAgICAgICBjbGllbnRzOiBwcmV2Lm1jcC5jbGllbnRzLm1hcChjID0+XG4gICAgICAgICAgICAgICAgICBjLm5hbWUgPT09IHNlcnZlck5hbWUgPyByZXN1bHQuY2xpZW50IDogYyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHRvb2xzOiBbXG4gICAgICAgICAgICAgICAgICAuLi5yZWplY3QocHJldi5tY3AudG9vbHMsIHQgPT4gdC5uYW1lPy5zdGFydHNXaXRoKHByZWZpeCkpLFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LnRvb2xzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlamVjdChwcmV2Lm1jcC5jb21tYW5kcywgYyA9PlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kQmVsb25nc1RvU2VydmVyKGMsIHNlcnZlck5hbWUpLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5jb21tYW5kcyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlc291cmNlczpcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZXNvdXJjZXMgJiYgcmVzdWx0LnJlc291cmNlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldi5tY3AucmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlcnZlck5hbWVdOiByZXN1bHQucmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBvbWl0KHByZXYubWNwLnJlc291cmNlcywgc2VydmVyTmFtZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2FwcGx5X2ZsYWdfc2V0dGluZ3MnKSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgdGhlIGN1cnJlbnQgbW9kZWwgYmVmb3JlIGFwcGx5aW5nIFx1MjAxNCB3ZSBuZWVkIHRvIGRldGVjdFxuICAgICAgICAgIC8vIG1vZGVsIHN3aXRjaGVzIHNvIHdlIGNhbiBpbmplY3QgYnJlYWRjcnVtYnMgYW5kIG5vdGlmeSBsaXN0ZW5lcnMuXG4gICAgICAgICAgY29uc3QgcHJldk1vZGVsID0gZ2V0TWFpbkxvb3BNb2RlbCgpXG5cbiAgICAgICAgICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgc2V0dGluZ3MgaW50byB0aGUgaW4tbWVtb3J5IGZsYWcgc2V0dGluZ3NcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGdldEZsYWdTZXR0aW5nc0lubGluZSgpID8/IHt9XG4gICAgICAgICAgY29uc3QgaW5jb21pbmcgPSBtZXNzYWdlLnJlcXVlc3Quc2V0dGluZ3NcbiAgICAgICAgICAvLyBTaGFsbG93LW1lcmdlIHRvcC1sZXZlbCBrZXlzOyBnZXRTZXR0aW5nc0ZvclNvdXJjZSBoYW5kbGVzXG4gICAgICAgICAgLy8gdGhlIGRlZXAgbWVyZ2Ugd2l0aCBmaWxlLWJhc2VkIGZsYWcgc2V0dGluZ3MgdmlhIG1lcmdlV2l0aC5cbiAgICAgICAgICAvLyBKU09OIHNlcmlhbGl6YXRpb24gZHJvcHMgYHVuZGVmaW5lZGAsIHNvIGNhbGxlcnMgdXNlIGBudWxsYFxuICAgICAgICAgIC8vIHRvIHNpZ25hbCBcImNsZWFyIHRoaXMga2V5XCIuIENvbnZlcnQgbnVsbHMgdG8gZGVsZXRpb25zIHNvXG4gICAgICAgICAgLy8gU2V0dGluZ3NTY2hlbWEoKS5zYWZlUGFyc2UoKSBkb2Vzbid0IHJlamVjdCB0aGUgd2hvbGUgb2JqZWN0XG4gICAgICAgICAgLy8gKHouc3RyaW5nKCkub3B0aW9uYWwoKSBhY2NlcHRzIHN0cmluZyB8IHVuZGVmaW5lZCwgbm90IG51bGwpLlxuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4uZXhpc3RpbmcsIC4uLmluY29taW5nIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtZXJnZWQpKSB7XG4gICAgICAgICAgICBpZiAobWVyZ2VkW2tleSBhcyBrZXlvZiB0eXBlb2YgbWVyZ2VkXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBkZWxldGUgbWVyZ2VkW2tleSBhcyBrZXlvZiB0eXBlb2YgbWVyZ2VkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRGbGFnU2V0dGluZ3NJbmxpbmUobWVyZ2VkKVxuICAgICAgICAgIC8vIFJvdXRlIHRocm91Z2ggbm90aWZ5Q2hhbmdlIHNvIGZhbk91dCgpIHJlc2V0cyB0aGUgc2V0dGluZ3MgY2FjaGVcbiAgICAgICAgICAvLyBiZWZvcmUgbGlzdGVuZXJzIHJ1bi4gVGhlIHN1YnNjcmliZXIgYXQgOjM5MiBjYWxsc1xuICAgICAgICAgIC8vIGFwcGx5U2V0dGluZ3NDaGFuZ2UgZm9yIHVzLiBQcmUtIzIwNjI1IHRoaXMgd2FzIGEgZGlyZWN0XG4gICAgICAgICAgLy8gYXBwbHlTZXR0aW5nc0NoYW5nZSgpIGNhbGwgdGhhdCByZWxpZWQgb24gaXRzIG93biBpbnRlcm5hbCByZXNldCBcdTIwMTRcbiAgICAgICAgICAvLyBub3cgdGhhdCB0aGUgcmVzZXQgaXMgY2VudHJhbGl6ZWQgaW4gZmFuT3V0LCBhIGRpcmVjdCBjYWxsIGhlcmVcbiAgICAgICAgICAvLyB3b3VsZCByZWFkIHN0YWxlIGNhY2hlZCBzZXR0aW5ncyBhbmQgc2lsZW50bHkgZHJvcCB0aGUgdXBkYXRlLlxuICAgICAgICAgIC8vIEJvbnVzOiBnb2luZyB0aHJvdWdoIG5vdGlmeUNoYW5nZSBhbHNvIHRlbGxzIHRoZSBvdGhlciBzdWJzY3JpYmVyc1xuICAgICAgICAgIC8vIChsb2FkUGx1Z2luSG9va3MsIHNhbmRib3gtYWRhcHRlcikgYWJvdXQgdGhlIGNoYW5nZSwgd2hpY2ggdGhlXG4gICAgICAgICAgLy8gcHJldmlvdXMgZGlyZWN0IGNhbGwgc2tpcHBlZC5cbiAgICAgICAgICBzZXR0aW5nc0NoYW5nZURldGVjdG9yLm5vdGlmeUNoYW5nZSgnZmxhZ1NldHRpbmdzJylcblxuICAgICAgICAgIC8vIElmIHRoZSBpbmNvbWluZyBzZXR0aW5ncyBpbmNsdWRlIGEgbW9kZWwgY2hhbmdlLCB1cGRhdGUgdGhlXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgc28gZ2V0TWFpbkxvb3BNb2RlbCgpIHJlZmxlY3RzIGl0LiBUaGUgb3ZlcnJpZGUgaGFzXG4gICAgICAgICAgLy8gaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIHNldHRpbmdzIGNhc2NhZGUgaW5cbiAgICAgICAgICAvLyBnZXRVc2VyU3BlY2lmaWVkTW9kZWxTZXR0aW5nKCksIHNvIHdpdGhvdXQgdGhpcyB1cGRhdGUsXG4gICAgICAgICAgLy8gZ2V0TWFpbkxvb3BNb2RlbCgpIHJldHVybnMgdGhlIHN0YWxlIG92ZXJyaWRlIGFuZCB0aGUgbW9kZWxcbiAgICAgICAgICAvLyBjaGFuZ2UgaXMgc2lsZW50bHkgaWdub3JlZCAobWF0Y2hpbmcgc2V0X21vZGVsIGF0IDoyODExKS5cbiAgICAgICAgICBpZiAoJ21vZGVsJyBpbiBpbmNvbWluZykge1xuICAgICAgICAgICAgaWYgKGluY29taW5nLm1vZGVsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKFN0cmluZyhpbmNvbWluZy5tb2RlbCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRNYWluTG9vcE1vZGVsT3ZlcnJpZGUodW5kZWZpbmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBtb2RlbCBjaGFuZ2VkLCBpbmplY3QgYnJlYWRjcnVtYnMgc28gdGhlIG1vZGVsIHNlZXMgdGhlXG4gICAgICAgICAgLy8gbWlkLWNvbnZlcnNhdGlvbiBzd2l0Y2gsIGFuZCBub3RpZnkgbWV0YWRhdGEgbGlzdGVuZXJzIChDQ1IpLlxuICAgICAgICAgIGNvbnN0IG5ld01vZGVsID0gZ2V0TWFpbkxvb3BNb2RlbCgpXG4gICAgICAgICAgaWYgKG5ld01vZGVsICE9PSBwcmV2TW9kZWwpIHtcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTcGVjaWZpZWRNb2RlbCA9IG5ld01vZGVsXG4gICAgICAgICAgICBjb25zdCBtb2RlbEFyZyA9IGluY29taW5nLm1vZGVsID8gU3RyaW5nKGluY29taW5nLm1vZGVsKSA6ICdkZWZhdWx0J1xuICAgICAgICAgICAgbm90aWZ5U2Vzc2lvbk1ldGFkYXRhQ2hhbmdlZCh7IG1vZGVsOiBuZXdNb2RlbCB9KVxuICAgICAgICAgICAgaW5qZWN0TW9kZWxTd2l0Y2hCcmVhZGNydW1icyhtb2RlbEFyZywgbmV3TW9kZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2dldF9zZXR0aW5ncycpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50QXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBnZXRNYWluTG9vcE1vZGVsKClcbiAgICAgICAgICAvLyBtb2RlbFN1cHBvcnRzRWZmb3J0IGdhdGUgbWF0Y2hlcyBjbGF1ZGUudHMgXHUyMDE0IGFwcGxpZWQuZWZmb3J0IG11c3RcbiAgICAgICAgICAvLyBtaXJyb3Igd2hhdCBhY3R1YWxseSBnb2VzIHRvIHRoZSBBUEksIG5vdCBqdXN0IHdoYXQncyBjb25maWd1cmVkLlxuICAgICAgICAgIGNvbnN0IGVmZm9ydCA9IG1vZGVsU3VwcG9ydHNFZmZvcnQobW9kZWwpXG4gICAgICAgICAgICA/IHJlc29sdmVBcHBsaWVkRWZmb3J0KG1vZGVsLCBjdXJyZW50QXBwU3RhdGUuZWZmb3J0VmFsdWUpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgIC4uLmdldFNldHRpbmdzV2l0aFNvdXJjZXMoKSxcbiAgICAgICAgICAgIGFwcGxpZWQ6IHtcbiAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgIC8vIE51bWVyaWMgZWZmb3J0IChhbnQtb25seSkgXHUyMTkyIG51bGw7IFNESyBzY2hlbWEgaXMgc3RyaW5nLWxldmVsIG9ubHkuXG4gICAgICAgICAgICAgIGVmZm9ydDogdHlwZW9mIGVmZm9ydCA9PT0gJ3N0cmluZycgPyBlZmZvcnQgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnc3RvcF90YXNrJykge1xuICAgICAgICAgIGNvbnN0IHsgdGFza19pZDogdGFza0lkIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgc3RvcFRhc2sodGFza0lkLCB7XG4gICAgICAgICAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7fSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdC5zdWJ0eXBlID09PSAnZ2VuZXJhdGVfc2Vzc2lvbl90aXRsZScpIHtcbiAgICAgICAgICAvLyBGaXJlLWFuZC1mb3JnZXQgc28gdGhlIEhhaWt1IGNhbGwgZG9lcyBub3QgYmxvY2sgdGhlIHN0ZGluIGxvb3BcbiAgICAgICAgICAvLyAod2hpY2ggd291bGQgZGVsYXkgcHJvY2Vzc2luZyBvZiBzdWJzZXF1ZW50IHVzZXIgbWVzc2FnZXMgL1xuICAgICAgICAgIC8vIGludGVycnVwdHMgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgQVBJIHJvdW5kdHJpcCkuXG4gICAgICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgcGVyc2lzdCB9ID0gbWVzc2FnZS5yZXF1ZXN0XG4gICAgICAgICAgLy8gUmV1c2UgdGhlIGxpdmUgY29udHJvbGxlciBvbmx5IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGFib3J0ZWRcbiAgICAgICAgICAvLyAoZS5nLiBieSBpbnRlcnJ1cHQoKSk7IGFuIGFib3J0ZWQgc2lnbmFsIHdvdWxkIGNhdXNlIHF1ZXJ5SGFpa3UgdG9cbiAgICAgICAgICAvLyBpbW1lZGlhdGVseSB0aHJvdyBBUElVc2VyQWJvcnRFcnJvciBcdTIxOTIge3RpdGxlOiBudWxsfS5cbiAgICAgICAgICBjb25zdCB0aXRsZVNpZ25hbCA9IChcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciAmJiAhYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkXG4gICAgICAgICAgICAgID8gYWJvcnRDb250cm9sbGVyXG4gICAgICAgICAgICAgIDogY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICApLnNpZ25hbFxuICAgICAgICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgZ2VuZXJhdGVTZXNzaW9uVGl0bGUoZGVzY3JpcHRpb24sIHRpdGxlU2lnbmFsKVxuICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgcGVyc2lzdCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBzYXZlQWlHZW5lcmF0ZWRUaXRsZShnZXRTZXNzaW9uSWQoKSBhcyBVVUlELCB0aXRsZSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7IHRpdGxlIH0pXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIFVucmVhY2hhYmxlIGluIHByYWN0aWNlIFx1MjAxNCBnZW5lcmF0ZVNlc3Npb25UaXRsZSB3cmFwcyBpdHNcbiAgICAgICAgICAgICAgLy8gb3duIGJvZHkgYW5kIHJldHVybnMgbnVsbCwgc2F2ZUFpR2VuZXJhdGVkVGl0bGUgaXMgd3JhcHBlZFxuICAgICAgICAgICAgICAvLyBhYm92ZS4gUHJvcGFnYXRlIChub3Qgc3dhbGxvdykgc28gdW5leHBlY3RlZCBmYWlsdXJlcyBhcmVcbiAgICAgICAgICAgICAgLy8gdmlzaWJsZSB0byB0aGUgU0RLIGNhbGxlciAoaG9zdENvbW1zLnRzIGNhdGNoZXMgYW5kIGxvZ3MpLlxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgZXJyb3JNZXNzYWdlKGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKClcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3NpZGVfcXVlc3Rpb24nKSB7XG4gICAgICAgICAgLy8gU2FtZSBmaXJlLWFuZC1mb3JnZXQgcGF0dGVybiBhcyBnZW5lcmF0ZV9zZXNzaW9uX3RpdGxlIGFib3ZlIFx1MjAxNFxuICAgICAgICAgIC8vIHRoZSBmb3JrZWQgYWdlbnQncyBBUEkgcm91bmR0cmlwIG11c3Qgbm90IGJsb2NrIHRoZSBzdGRpbiBsb29wLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gVGhlIHNuYXBzaG90IGNhcHR1cmVkIGJ5IHN0b3BIb29rcyAoZm9yIHF1ZXJ5U291cmNlID09PSAnc2RrJylcbiAgICAgICAgICAvLyBob2xkcyB0aGUgZXhhY3Qgc3lzdGVtUHJvbXB0L3VzZXJDb250ZXh0L3N5c3RlbUNvbnRleHQvbWVzc2FnZXNcbiAgICAgICAgICAvLyBzZW50IG9uIHRoZSBsYXN0IG1haW4tdGhyZWFkIHR1cm4uIFJldXNpbmcgdGhlbSBnaXZlcyBhIGJ5dGUtXG4gICAgICAgICAgLy8gaWRlbnRpY2FsIHByZWZpeCBcdTIxOTIgcHJvbXB0IGNhY2hlIGhpdC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIEZhbGxiYWNrIChyZXN1bWUgYmVmb3JlIGZpcnN0IHR1cm4gY29tcGxldGVzIFx1MjAxNCBubyBzbmFwc2hvdCB5ZXQpOlxuICAgICAgICAgIC8vIHJlYnVpbGQgZnJvbSBzY3JhdGNoLiBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zIG1pcnJvcnNcbiAgICAgICAgICAvLyBRdWVyeUVuZ2luZS50czphc2soKSdzIHN5c3RlbSBwcm9tcHQgYXNzZW1ibHkgKGluY2x1ZGluZ1xuICAgICAgICAgIC8vIC0tc3lzdGVtLXByb21wdCAvIC0tYXBwZW5kLXN5c3RlbS1wcm9tcHQpIHNvIHRoZSByZWJ1aWx0IHByZWZpeFxuICAgICAgICAgIC8vIG1hdGNoZXMgaW4gdGhlIGNvbW1vbiBjYXNlLiBNYXkgc3RpbGwgbWlzcyB0aGUgY2FjaGUgZm9yXG4gICAgICAgICAgLy8gY29vcmRpbmF0b3IgbW9kZSBvciBtZW1vcnktbWVjaGFuaWNzIGV4dHJhcyBcdTIwMTQgYWNjZXB0YWJsZSwgdGhlXG4gICAgICAgICAgLy8gYWx0ZXJuYXRpdmUgaXMgdGhlIHNpZGUgcXVlc3Rpb24gZmFpbGluZyBlbnRpcmVseS5cbiAgICAgICAgICBjb25zdCB7IHF1ZXN0aW9uIH0gPSBtZXNzYWdlLnJlcXVlc3RcbiAgICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzYXZlZCA9IGdldExhc3RDYWNoZVNhZmVQYXJhbXMoKVxuICAgICAgICAgICAgICBjb25zdCBjYWNoZVNhZmVQYXJhbXMgPSBzYXZlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zYXZlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGxhc3QgdHVybiB3YXMgaW50ZXJydXB0ZWQsIHRoZSBzbmFwc2hvdCBob2xkcyBhblxuICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5LWFib3J0ZWQgY29udHJvbGxlcjsgY3JlYXRlQ2hpbGRBYm9ydENvbnRyb2xsZXIgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlU3ViYWdlbnRDb250ZXh0IHdvdWxkIHByb3BhZ2F0ZSBpdCBhbmQgdGhlIGZvcmtcbiAgICAgICAgICAgICAgICAgICAgLy8gd291bGQgZGllIGJlZm9yZSBzZW5kaW5nIGEgcmVxdWVzdC4gVGhlIGNvbnRyb2xsZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHBhcnQgb2YgdGhlIGNhY2hlIGtleSBcdTIwMTQgc3dhcHBpbmcgaW4gYSBmcmVzaCBvbmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FmZS4gU2FtZSBndWFyZCBhcyBnZW5lcmF0ZV9zZXNzaW9uX3RpdGxlIGFib3ZlLlxuICAgICAgICAgICAgICAgICAgICB0b29sVXNlQ29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnNhdmVkLnRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcjogY3JlYXRlQWJvcnRDb250cm9sbGVyKCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBhd2FpdCBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHM6IGJ1aWxkQWxsVG9vbHMoZ2V0QXBwU3RhdGUoKSksXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiBjdXJyZW50Q29tbWFuZHMsXG4gICAgICAgICAgICAgICAgICAgIG1jcENsaWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5nZXRBcHBTdGF0ZSgpLm1jcC5jbGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLnNka0NsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZHluYW1pY01jcFN0YXRlLmNsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0OiBvcHRpb25zLnN5c3RlbVByb21wdCxcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0OiBvcHRpb25zLmFwcGVuZFN5c3RlbVByb21wdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpbmtpbmdDb25maWc6IG9wdGlvbnMudGhpbmtpbmdDb25maWcsXG4gICAgICAgICAgICAgICAgICAgIGFnZW50czogY3VycmVudEFnZW50cyxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1blNpZGVRdWVzdGlvbih7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgY2FjaGVTYWZlUGFyYW1zLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7IHJlc3BvbnNlOiByZXN1bHQucmVzcG9uc2UgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgKGZlYXR1cmUoJ1BST0FDVElWRScpIHx8IGZlYXR1cmUoJ0tBSVJPUycpKSAmJlxuICAgICAgICAgIChtZXNzYWdlLnJlcXVlc3QgYXMgeyBzdWJ0eXBlOiBzdHJpbmcgfSkuc3VidHlwZSA9PT0gJ3NldF9wcm9hY3RpdmUnXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHJlcSA9IG1lc3NhZ2UucmVxdWVzdCBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgICAgIHN1YnR5cGU6IHN0cmluZ1xuICAgICAgICAgICAgZW5hYmxlZDogYm9vbGVhblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVxLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICghcHJvYWN0aXZlTW9kdWxlIS5pc1Byb2FjdGl2ZUFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgIHByb2FjdGl2ZU1vZHVsZSEuYWN0aXZhdGVQcm9hY3RpdmUoJ2NvbW1hbmQnKVxuICAgICAgICAgICAgICBzY2hlZHVsZVByb2FjdGl2ZVRpY2shKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvYWN0aXZlTW9kdWxlIS5kZWFjdGl2YXRlUHJvYWN0aXZlKClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZVN1Y2Nlc3MobWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3Quc3VidHlwZSA9PT0gJ3JlbW90ZV9jb250cm9sJykge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnJlcXVlc3QuZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGJyaWRnZUhhbmRsZSkge1xuICAgICAgICAgICAgICAvLyBBbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICAgICAgICBzZW5kQ29udHJvbFJlc3BvbnNlU3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbl91cmw6IGdldFJlbW90ZVNlc3Npb25VcmwoXG4gICAgICAgICAgICAgICAgICBicmlkZ2VIYW5kbGUuYnJpZGdlU2Vzc2lvbklkLFxuICAgICAgICAgICAgICAgICAgYnJpZGdlSGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY29ubmVjdF91cmw6IGJ1aWxkQnJpZGdlQ29ubmVjdFVybChcbiAgICAgICAgICAgICAgICAgIGJyaWRnZUhhbmRsZS5lbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICAgICAgYnJpZGdlSGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZW52aXJvbm1lbnRfaWQ6IGJyaWRnZUhhbmRsZS5lbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaW5pdFJlcGxCcmlkZ2Ugc3VyZmFjZXMgZ2F0ZS1mYWlsdXJlIHJlYXNvbnMgdmlhXG4gICAgICAgICAgICAgIC8vIG9uU3RhdGVDaGFuZ2UoJ2ZhaWxlZCcsIGRldGFpbCkgYmVmb3JlIHJldHVybmluZyBudWxsLlxuICAgICAgICAgICAgICAvLyBDYXB0dXJlIHNvIHRoZSBjb250cm9sLXJlc3BvbnNlIGVycm9yIGlzIGFjdGlvbmFibGVcbiAgICAgICAgICAgICAgLy8gKFwiL2xvZ2luXCIsIFwiZGlzYWJsZWQgYnkgeW91ciBvcmdhbml6YXRpb24ncyBwb2xpY3lcIiwgZXRjLilcbiAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGdlbmVyaWMgXCJpbml0aWFsaXphdGlvbiBmYWlsZWRcIi5cbiAgICAgICAgICAgICAgbGV0IGJyaWRnZUZhaWx1cmVEZXRhaWw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaW5pdFJlcGxCcmlkZ2UgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICAgICAgICdzcmMvYnJpZGdlL2luaXRSZXBsQnJpZGdlLmpzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBhd2FpdCBpbml0UmVwbEJyaWRnZSh7XG4gICAgICAgICAgICAgICAgICBvbkluYm91bmRNZXNzYWdlKG1zZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBleHRyYWN0SW5ib3VuZE1lc3NhZ2VGaWVsZHMobXNnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkcykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCwgdXVpZCB9ID0gZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIGVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdwcm9tcHQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpcFNsYXNoQ29tbWFuZHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgcnVuKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvblBlcm1pc3Npb25SZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3J3YXJkIGJyaWRnZSBwZXJtaXNzaW9uIHJlc3BvbnNlcyBpbnRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzdGRpbiBwcm9jZXNzaW5nIGxvb3Agc28gdGhleSByZXNvbHZlIHBlbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiByZXF1ZXN0cyBmcm9tIHRoZSBTREsgY29uc3VtZXIuXG4gICAgICAgICAgICAgICAgICAgIHN0cnVjdHVyZWRJTy5pbmplY3RDb250cm9sUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25JbnRlcnJ1cHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcj8uYWJvcnQoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU2V0TW9kZWwobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsID09PSAnZGVmYXVsdCcgPyBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCgpIDogbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclNwZWNpZmllZE1vZGVsID0gcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKHJlc29sdmVkKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMobWF4VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhUb2tlbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRoaW5raW5nQ29uZmlnID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF4VG9rZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHsgdHlwZTogJ2Rpc2FibGVkJyB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aGlua2luZ0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbmFibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZGdldFRva2VuczogbWF4VG9rZW5zLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2Uoc3RhdGUsIGRldGFpbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYnJpZGdlRmFpbHVyZURldGFpbCA9IGRldGFpbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZGtdIFN0YXRlIGNoYW5nZTogJHtzdGF0ZX0ke2RldGFpbCA/IGAgXHUyMDE0ICR7ZGV0YWlsfWAgOiAnJ31gLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyBhcyBTdGRvdXRNZXNzYWdlWyd0eXBlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgc3VidHlwZTogJ2JyaWRnZV9zdGF0ZScgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIGRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU3Rkb3V0TWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbml0aWFsTWVzc2FnZXM6XG4gICAgICAgICAgICAgICAgICAgIG11dGFibGVNZXNzYWdlcy5sZW5ndGggPiAwID8gbXV0YWJsZU1lc3NhZ2VzIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgYnJpZGdlRmFpbHVyZURldGFpbCA/P1xuICAgICAgICAgICAgICAgICAgICAgICdSZW1vdGUgQ29udHJvbCBpbml0aWFsaXphdGlvbiBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBicmlkZ2VIYW5kbGUgPSBoYW5kbGVcbiAgICAgICAgICAgICAgICAgIGJyaWRnZUxhc3RGb3J3YXJkZWRJbmRleCA9IG11dGFibGVNZXNzYWdlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIC8vIEZvcndhcmQgcGVybWlzc2lvbiByZXF1ZXN0cyB0byB0aGUgYnJpZGdlXG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVkSU8uc2V0T25Db250cm9sUmVxdWVzdFNlbnQocmVxdWVzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZW5kQ29udHJvbFJlcXVlc3QocmVxdWVzdClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgc3RhbGUgYnJpZGdlIHBlcm1pc3Npb24gcHJvbXB0cyB3aGVuIHRoZSBTREtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnN1bWVyIHJlc29sdmVzIGEgY2FuX3VzZV90b29sIHJlcXVlc3QgZmlyc3QuXG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVkSU8uc2V0T25Db250cm9sUmVxdWVzdFJlc29sdmVkKHJlcXVlc3RJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZW5kQ29udHJvbENhbmNlbFJlcXVlc3QocmVxdWVzdElkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl91cmw6IGdldFJlbW90ZVNlc3Npb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmJyaWRnZVNlc3Npb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RfdXJsOiBidWlsZEJyaWRnZUNvbm5lY3RVcmwoXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNlc3Npb25JbmdyZXNzVXJsLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudF9pZDogaGFuZGxlLmVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKG1lc3NhZ2UsIGVycm9yTWVzc2FnZShlcnIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERpc2FibGVcbiAgICAgICAgICAgIGlmIChicmlkZ2VIYW5kbGUpIHtcbiAgICAgICAgICAgICAgc3RydWN0dXJlZElPLnNldE9uQ29udHJvbFJlcXVlc3RTZW50KHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgc3RydWN0dXJlZElPLnNldE9uQ29udHJvbFJlcXVlc3RSZXNvbHZlZCh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIGF3YWl0IGJyaWRnZUhhbmRsZS50ZWFyZG93bigpXG4gICAgICAgICAgICAgIGJyaWRnZUhhbmRsZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbmRDb250cm9sUmVzcG9uc2VTdWNjZXNzKG1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVua25vd24gY29udHJvbCByZXF1ZXN0IHN1YnR5cGUgXHUyMDE0IHNlbmQgYW4gZXJyb3IgcmVzcG9uc2Ugc29cbiAgICAgICAgICAvLyB0aGUgY2FsbGVyIGRvZXNuJ3QgaGFuZyB3YWl0aW5nIGZvciBhIHJlcGx5IHRoYXQgbmV2ZXIgY29tZXMuXG4gICAgICAgICAgc2VuZENvbnRyb2xSZXNwb25zZUVycm9yKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBjb250cm9sIHJlcXVlc3Qgc3VidHlwZTogJHsobWVzc2FnZS5yZXF1ZXN0IGFzIHsgc3VidHlwZTogc3RyaW5nIH0pLnN1YnR5cGV9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXNwb25zZScpIHtcbiAgICAgICAgLy8gUmVwbGF5IGNvbnRyb2xfcmVzcG9uc2UgbWVzc2FnZXMgd2hlbiByZXBsYXkgbW9kZSBpcyBlbmFibGVkXG4gICAgICAgIGlmIChvcHRpb25zLnJlcGxheVVzZXJNZXNzYWdlcykge1xuICAgICAgICAgIG91dHB1dC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAna2VlcF9hbGl2ZScpIHtcbiAgICAgICAgLy8gU2lsZW50bHkgaWdub3JlIGtlZXAtYWxpdmUgbWVzc2FnZXNcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAndXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlcycpIHtcbiAgICAgICAgLy8gSGFuZGxlZCBpbiBzdHJ1Y3R1cmVkSU8udHMsIGJ1dCBUeXBlU2NyaXB0IG5lZWRzIHRoZSB0eXBlIGd1YXJkXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcgfHwgbWVzc2FnZS50eXBlID09PSAnc3lzdGVtJykge1xuICAgICAgICAvLyBIaXN0b3J5IHJlcGxheSBmcm9tIGJyaWRnZTogaW5qZWN0IGludG8gbXV0YWJsZU1lc3NhZ2VzIGFzXG4gICAgICAgIC8vIGNvbnZlcnNhdGlvbiBjb250ZXh0IHNvIHRoZSBtb2RlbCBzZWVzIHByaW9yIHR1cm5zLlxuICAgICAgICBjb25zdCBpbnRlcm5hbE1zZ3MgPSB0b0ludGVybmFsTWVzc2FnZXMoW21lc3NhZ2VdKVxuICAgICAgICBtdXRhYmxlTWVzc2FnZXMucHVzaCguLi5pbnRlcm5hbE1zZ3MpXG4gICAgICAgIC8vIEVjaG8gYXNzaXN0YW50IG1lc3NhZ2VzIGJhY2sgc28gQ0NSIGRpc3BsYXlzIHRoZW1cbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiYgb3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpIHtcbiAgICAgICAgICBvdXRwdXQuZW5xdWV1ZShtZXNzYWdlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBBZnRlciBoYW5kbGluZyBjb250cm9sLCBrZWVwLWFsaXZlLCBlbnYtdmFyLCBhc3Npc3RhbnQsIGFuZCBzeXN0ZW1cbiAgICAgIC8vIG1lc3NhZ2VzIGFib3ZlLCBvbmx5IHVzZXIgbWVzc2FnZXMgc2hvdWxkIHJlbWFpbi5cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgIT09ICd1c2VyJykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwcm9tcHQgbWVzc2FnZSBpbXBsaWNpdGx5IGluaXRpYWxpemVzIGlmIG5vdCBhbHJlYWR5IGRvbmUuXG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcblxuICAgICAgLy8gQ2hlY2sgZm9yIGR1cGxpY2F0ZSB1c2VyIG1lc3NhZ2UgLSBza2lwIGlmIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICBpZiAobWVzc2FnZS51dWlkKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpIGFzIFVVSURcbiAgICAgICAgY29uc3QgZXhpc3RzSW5TZXNzaW9uID0gYXdhaXQgZG9lc01lc3NhZ2VFeGlzdEluU2Vzc2lvbihcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgbWVzc2FnZS51dWlkLFxuICAgICAgICApXG5cbiAgICAgICAgLy8gQ2hlY2sgYm90aCBoaXN0b3JpY2FsIGR1cGxpY2F0ZXMgKGZyb20gZmlsZSkgYW5kIHJ1bnRpbWUgZHVwbGljYXRlcyAodGhpcyBzZXNzaW9uKVxuICAgICAgICBpZiAoZXhpc3RzSW5TZXNzaW9uIHx8IHJlY2VpdmVkTWVzc2FnZVV1aWRzLmhhcyhtZXNzYWdlLnV1aWQpKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBTa2lwcGluZyBkdXBsaWNhdGUgdXNlciBtZXNzYWdlOiAke21lc3NhZ2UudXVpZH1gKVxuICAgICAgICAgIC8vIFNlbmQgYWNrbm93bGVkZ21lbnQgZm9yIGR1cGxpY2F0ZSBtZXNzYWdlIGlmIHJlcGxheSBtb2RlIGlzIGVuYWJsZWRcbiAgICAgICAgICBpZiAob3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFNlbmRpbmcgYWNrbm93bGVkZ21lbnQgZm9yIGR1cGxpY2F0ZSB1c2VyIG1lc3NhZ2U6ICR7bWVzc2FnZS51dWlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgICAgICAgIHR5cGU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXG4gICAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2UudGltZXN0YW1wLFxuICAgICAgICAgICAgICBpc1JlcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIH0gYXMgU0RLVXNlck1lc3NhZ2VSZXBsYXkpXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEhpc3RvcmljYWwgZHVwID0gdHJhbnNjcmlwdCBhbHJlYWR5IGhhcyB0aGlzIHR1cm4ncyBvdXRwdXQsIHNvIGl0XG4gICAgICAgICAgLy8gcmFuIGJ1dCBpdHMgbGlmZWN5Y2xlIHdhcyBuZXZlciBjbG9zZWQgKGludGVycnVwdGVkIGJlZm9yZSBhY2spLlxuICAgICAgICAgIC8vIFJ1bnRpbWUgZHVwcyBkb24ndCBuZWVkIHRoaXMgXHUyMDE0IHRoZSBvcmlnaW5hbCBlbnF1ZXVlIHBhdGggY2xvc2VzIHRoZW0uXG4gICAgICAgICAgaWYgKGV4aXN0c0luU2Vzc2lvbikge1xuICAgICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZShtZXNzYWdlLnV1aWQsICdjb21wbGV0ZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEb24ndCBlbnF1ZXVlIGR1cGxpY2F0ZSBtZXNzYWdlcyBmb3IgZXhlY3V0aW9uXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYWNrIHRoaXMgVVVJRCB0byBwcmV2ZW50IHJ1bnRpbWUgZHVwbGljYXRlc1xuICAgICAgICB0cmFja1JlY2VpdmVkTWVzc2FnZVV1aWQobWVzc2FnZS51dWlkKVxuICAgICAgfVxuXG4gICAgICBlbnF1ZXVlKHtcbiAgICAgICAgbW9kZTogJ3Byb21wdCcgYXMgY29uc3QsXG4gICAgICAgIC8vIGZpbGVfYXR0YWNobWVudHMgcmlkZXMgdGhlIHByb3RvYnVmIGNhdGNoYWxsIGZyb20gdGhlIHdlYiBjb21wb3Nlci5cbiAgICAgICAgLy8gU2FtZS1yZWYgbm8tb3Agd2hlbiBhYnNlbnQgKG5vICdmaWxlX2F0dGFjaG1lbnRzJyBrZXkpLlxuICAgICAgICB2YWx1ZTogYXdhaXQgcmVzb2x2ZUFuZFByZXBlbmQobWVzc2FnZSwgbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQpLFxuICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgIHByaW9yaXR5OiBtZXNzYWdlLnByaW9yaXR5LFxuICAgICAgfSlcbiAgICAgIC8vIEluY3JlbWVudCBwcm9tcHQgY291bnQgZm9yIGF0dHJpYnV0aW9uIHRyYWNraW5nIGFuZCBzYXZlIHNuYXBzaG90XG4gICAgICAvLyBUaGUgc25hcHNob3QgcGVyc2lzdHMgcHJvbXB0Q291bnQgc28gaXQgc3Vydml2ZXMgY29tcGFjdGlvblxuICAgICAgaWYgKGZlYXR1cmUoJ0NPTU1JVF9BVFRSSUJVVElPTicpKSB7XG4gICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIGF0dHJpYnV0aW9uOiBpbmNyZW1lbnRQcm9tcHRDb3VudChwcmV2LmF0dHJpYnV0aW9uLCBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgICB2b2lkIHJlY29yZEF0dHJpYnV0aW9uU25hcHNob3Qoc25hcHNob3QpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBBdHRyaWJ1dGlvbjogRmFpbGVkIHRvIHNhdmUgc25hcHNob3Q6ICR7ZXJyb3J9YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgdm9pZCBydW4oKVxuICAgIH1cbiAgICBpbnB1dENsb3NlZCA9IHRydWVcbiAgICBjcm9uU2NoZWR1bGVyPy5zdG9wKClcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgIC8vIElmIGEgcHVzaC1zdWdnZXN0aW9uIGlzIGluLWZsaWdodCwgd2FpdCBmb3IgaXQgdG8gZW1pdCBiZWZvcmUgY2xvc2luZ1xuICAgICAgLy8gdGhlIG91dHB1dCBzdHJlYW0gKDUgcyBzYWZldHkgdGltZW91dCB0byBwcmV2ZW50IGhhbmdpbmcpLlxuICAgICAgaWYgKHN1Z2dlc3Rpb25TdGF0ZS5pbmZsaWdodFByb21pc2UpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKFtzdWdnZXN0aW9uU3RhdGUuaW5mbGlnaHRQcm9taXNlLCBzbGVlcCg1MDAwKV0pXG4gICAgICB9XG4gICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICBzdWdnZXN0aW9uU3RhdGUuYWJvcnRDb250cm9sbGVyID0gbnVsbFxuICAgICAgYXdhaXQgZmluYWxpemVQZW5kaW5nQXN5bmNIb29rcygpXG4gICAgICB1bnN1YnNjcmliZVNraWxsQ2hhbmdlcygpXG4gICAgICB1bnN1YnNjcmliZUF1dGhTdGF0dXM/LigpXG4gICAgICBzdGF0dXNMaXN0ZW5lcnMuZGVsZXRlKHJhdGVMaW1pdExpc3RlbmVyKVxuICAgICAgb3V0cHV0LmRvbmUoKVxuICAgIH1cbiAgfSkoKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgQ2FuVXNlVG9vbEZuIHRoYXQgaW5jb3Jwb3JhdGVzIGEgY3VzdG9tIHBlcm1pc3Npb24gcHJvbXB0IHRvb2wuXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBwZXJtaXNzaW9uUHJvbXB0VG9vbCBpbnRvIGEgQ2FuVXNlVG9vbEZuIHRoYXQgY2FuIGJlIHVzZWQgaW4gYXNrLnRzeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FuVXNlVG9vbFdpdGhQZXJtaXNzaW9uUHJvbXB0KFxuICBwZXJtaXNzaW9uUHJvbXB0VG9vbDogUGVybWlzc2lvblByb21wdFRvb2wsXG4pOiBDYW5Vc2VUb29sRm4ge1xuICBjb25zdCBjYW5Vc2VUb29sOiBDYW5Vc2VUb29sRm4gPSBhc3luYyAoXG4gICAgdG9vbCxcbiAgICBpbnB1dCxcbiAgICB0b29sVXNlQ29udGV4dCxcbiAgICBhc3Npc3RhbnRNZXNzYWdlLFxuICAgIHRvb2xVc2VJZCxcbiAgICBmb3JjZURlY2lzaW9uLFxuICApID0+IHtcbiAgICBjb25zdCBtYWluUGVybWlzc2lvblJlc3VsdCA9XG4gICAgICBmb3JjZURlY2lzaW9uID8/XG4gICAgICAoYXdhaXQgaGFzUGVybWlzc2lvbnNUb1VzZVRvb2woXG4gICAgICAgIHRvb2wsXG4gICAgICAgIGlucHV0LFxuICAgICAgICB0b29sVXNlQ29udGV4dCxcbiAgICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgICAgdG9vbFVzZUlkLFxuICAgICAgKSlcblxuICAgIC8vIElmIHRoZSB0b29sIGlzIGFsbG93ZWQgb3IgZGVuaWVkLCByZXR1cm4gdGhlIHJlc3VsdFxuICAgIGlmIChcbiAgICAgIG1haW5QZXJtaXNzaW9uUmVzdWx0LmJlaGF2aW9yID09PSAnYWxsb3cnIHx8XG4gICAgICBtYWluUGVybWlzc2lvblJlc3VsdC5iZWhhdmlvciA9PT0gJ2RlbnknXG4gICAgKSB7XG4gICAgICByZXR1cm4gbWFpblBlcm1pc3Npb25SZXN1bHRcbiAgICB9XG5cbiAgICAvLyBSYWNlIHRoZSBwZXJtaXNzaW9uIHByb21wdCB0b29sIGFnYWluc3QgdGhlIGFib3J0IHNpZ25hbC5cbiAgICAvL1xuICAgIC8vIFdoeSB3ZSBuZWVkIHRoaXM6IFRoZSBwZXJtaXNzaW9uIHByb21wdCB0b29sIG1heSBibG9jayBpbmRlZmluaXRlbHkgd2FpdGluZ1xuICAgIC8vIGZvciB1c2VyIGlucHV0IChlLmcuLCB2aWEgc3RkaW4gb3IgYSBVSSBkaWFsb2cpLiBJZiB0aGUgdXNlciB0cmlnZ2VycyBhblxuICAgIC8vIGludGVycnVwdCAoQ3RybCtDKSwgd2UgbmVlZCB0byBkZXRlY3QgaXQgZXZlbiB3aGlsZSB0aGUgdG9vbCBpcyBibG9ja2VkLlxuICAgIC8vIFdpdGhvdXQgdGhpcyByYWNlLCB0aGUgYWJvcnQgY2hlY2sgd291bGQgb25seSBydW4gQUZURVIgdGhlIHRvb2wgY29tcGxldGVzLFxuICAgIC8vIHdoaWNoIG1heSBuZXZlciBoYXBwZW4gaWYgdGhlIHRvb2wgaXMgd2FpdGluZyBmb3IgaW5wdXQgdGhhdCB3aWxsIG5ldmVyIGNvbWUuXG4gICAgLy9cbiAgICAvLyBUaGUgc2Vjb25kIGNoZWNrIChjb21iaW5lZFNpZ25hbC5hYm9ydGVkKSBoYW5kbGVzIGEgcmFjZSBjb25kaXRpb24gd2hlcmVcbiAgICAvLyBhYm9ydCBmaXJlcyBhZnRlciBQcm9taXNlLnJhY2UgcmVzb2x2ZXMgYnV0IGJlZm9yZSB3ZSByZWFjaCB0aGlzIGNoZWNrLlxuICAgIGNvbnN0IHsgc2lnbmFsOiBjb21iaW5lZFNpZ25hbCwgY2xlYW51cDogY2xlYW51cEFib3J0TGlzdGVuZXIgfSA9XG4gICAgICBjcmVhdGVDb21iaW5lZEFib3J0U2lnbmFsKHRvb2xVc2VDb250ZXh0LmFib3J0Q29udHJvbGxlci5zaWduYWwpXG5cbiAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGFib3J0ZWQgYmVmb3JlIHN0YXJ0aW5nIHRoZSByYWNlXG4gICAgaWYgKGNvbWJpbmVkU2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGNsZWFudXBBYm9ydExpc3RlbmVyKClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJlaGF2aW9yOiAnZGVueScsXG4gICAgICAgIG1lc3NhZ2U6ICdQZXJtaXNzaW9uIHByb21wdCB3YXMgYWJvcnRlZC4nLFxuICAgICAgICBkZWNpc2lvblJlYXNvbjoge1xuICAgICAgICAgIHR5cGU6ICdwZXJtaXNzaW9uUHJvbXB0VG9vbCcgYXMgY29uc3QsXG4gICAgICAgICAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiB0b29sLm5hbWUsXG4gICAgICAgICAgdG9vbFJlc3VsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFib3J0UHJvbWlzZSA9IG5ldyBQcm9taXNlPCdhYm9ydGVkJz4ocmVzb2x2ZSA9PiB7XG4gICAgICBjb21iaW5lZFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUoJ2Fib3J0ZWQnKSwge1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgdG9vbENhbGxQcm9taXNlID0gcGVybWlzc2lvblByb21wdFRvb2wuY2FsbChcbiAgICAgIHtcbiAgICAgICAgdG9vbF9uYW1lOiB0b29sLm5hbWUsXG4gICAgICAgIGlucHV0LFxuICAgICAgICB0b29sX3VzZV9pZDogdG9vbFVzZUlkLFxuICAgICAgfSxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgY2FuVXNlVG9vbCxcbiAgICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgKVxuXG4gICAgY29uc3QgcmFjZVJlc3VsdCA9IGF3YWl0IFByb21pc2UucmFjZShbdG9vbENhbGxQcm9taXNlLCBhYm9ydFByb21pc2VdKVxuICAgIGNsZWFudXBBYm9ydExpc3RlbmVyKClcblxuICAgIGlmIChyYWNlUmVzdWx0ID09PSAnYWJvcnRlZCcgfHwgY29tYmluZWRTaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVoYXZpb3I6ICdkZW55JyxcbiAgICAgICAgbWVzc2FnZTogJ1Blcm1pc3Npb24gcHJvbXB0IHdhcyBhYm9ydGVkLicsXG4gICAgICAgIGRlY2lzaW9uUmVhc29uOiB7XG4gICAgICAgICAgdHlwZTogJ3Blcm1pc3Npb25Qcm9tcHRUb29sJyBhcyBjb25zdCxcbiAgICAgICAgICBwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWU6IHRvb2wubmFtZSxcbiAgICAgICAgICB0b29sUmVzdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCBuYXJyb3dpbmc6IGFmdGVyIHRoZSBhYm9ydCBjaGVjaywgcmFjZVJlc3VsdCBtdXN0IGJlIFRvb2xSZXN1bHRcbiAgICBjb25zdCByZXN1bHQgPSByYWNlUmVzdWx0IGFzIEF3YWl0ZWQ8dHlwZW9mIHRvb2xDYWxsUHJvbWlzZT5cblxuICAgIGNvbnN0IHBlcm1pc3Npb25Ub29sUmVzdWx0QmxvY2tQYXJhbSA9XG4gICAgICBwZXJtaXNzaW9uUHJvbXB0VG9vbC5tYXBUb29sUmVzdWx0VG9Ub29sUmVzdWx0QmxvY2tQYXJhbShyZXN1bHQuZGF0YSwgJzEnKVxuICAgIGlmIChcbiAgICAgICFwZXJtaXNzaW9uVG9vbFJlc3VsdEJsb2NrUGFyYW0uY29udGVudCB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkocGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtLmNvbnRlbnQpIHx8XG4gICAgICAhcGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtLmNvbnRlbnRbMF0gfHxcbiAgICAgIHBlcm1pc3Npb25Ub29sUmVzdWx0QmxvY2tQYXJhbS5jb250ZW50WzBdLnR5cGUgIT09ICd0ZXh0JyB8fFxuICAgICAgdHlwZW9mIHBlcm1pc3Npb25Ub29sUmVzdWx0QmxvY2tQYXJhbS5jb250ZW50WzBdLnRleHQgIT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdQZXJtaXNzaW9uIHByb21wdCB0b29sIHJldHVybmVkIGFuIGludmFsaWQgcmVzdWx0LiBFeHBlY3RlZCBhIHNpbmdsZSB0ZXh0IGJsb2NrIHBhcmFtIHdpdGggdHlwZT1cInRleHRcIiBhbmQgYSBzdHJpbmcgdGV4dCB2YWx1ZS4nLFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbihcbiAgICAgIHBlcm1pc3Npb25Ub29sT3V0cHV0U2NoZW1hKCkucGFyc2UoXG4gICAgICAgIHNhZmVQYXJzZUpTT04ocGVybWlzc2lvblRvb2xSZXN1bHRCbG9ja1BhcmFtLmNvbnRlbnRbMF0udGV4dCksXG4gICAgICApLFxuICAgICAgcGVybWlzc2lvblByb21wdFRvb2wsXG4gICAgICBpbnB1dCxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgIClcbiAgfVxuICByZXR1cm4gY2FuVXNlVG9vbFxufVxuXG4vLyBFeHBvcnRlZCBmb3IgdGVzdGluZyBcdTIwMTQgcmVncmVzc2lvbjogdGhpcyB1c2VkIHRvIGNyYXNoIGF0IGNvbnN0cnVjdGlvbiB3aGVuXG4vLyBnZXRNY3BUb29scygpIHdhcyBlbXB0eSAoYmVmb3JlIHBlci1zZXJ2ZXIgY29ubmVjdHMgcG9wdWxhdGVkIGFwcFN0YXRlKS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW5Vc2VUb29sRm4oXG4gIHBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBzdHJ1Y3R1cmVkSU86IFN0cnVjdHVyZWRJTyxcbiAgZ2V0TWNwVG9vbHM6ICgpID0+IFRvb2xbXSxcbiAgb25QZXJtaXNzaW9uUHJvbXB0PzogKGRldGFpbHM6IFJlcXVpcmVzQWN0aW9uRGV0YWlscykgPT4gdm9pZCxcbik6IENhblVzZVRvb2xGbiB7XG4gIGlmIChwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWUgPT09ICdzdGRpbycpIHtcbiAgICByZXR1cm4gc3RydWN0dXJlZElPLmNyZWF0ZUNhblVzZVRvb2wob25QZXJtaXNzaW9uUHJvbXB0KVxuICB9XG4gIGlmICghcGVybWlzc2lvblByb21wdFRvb2xOYW1lKSB7XG4gICAgcmV0dXJuIGFzeW5jIChcbiAgICAgIHRvb2wsXG4gICAgICBpbnB1dCxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIHRvb2xVc2VJZCxcbiAgICAgIGZvcmNlRGVjaXNpb24sXG4gICAgKSA9PlxuICAgICAgZm9yY2VEZWNpc2lvbiA/P1xuICAgICAgKGF3YWl0IGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sKFxuICAgICAgICB0b29sLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgICAgIHRvb2xVc2VJZCxcbiAgICAgICkpXG4gIH1cbiAgLy8gTGF6eSBsb29rdXA6IE1DUCBjb25uZWN0cyBhcmUgcGVyLXNlcnZlciBpbmNyZW1lbnRhbCBpbiBwcmludCBtb2RlLCBzb1xuICAvLyB0aGUgdG9vbCBtYXkgbm90IGJlIGluIGFwcFN0YXRlIHlldCBhdCBpbml0IHRpbWUuIFJlc29sdmUgb24gZmlyc3QgY2FsbFxuICAvLyAoZmlyc3QgcGVybWlzc2lvbiBwcm9tcHQpLCBieSB3aGljaCBwb2ludCBjb25uZWN0cyBoYXZlIGhhZCB0aW1lIHRvIGZpbmlzaC5cbiAgbGV0IHJlc29sdmVkOiBDYW5Vc2VUb29sRm4gfCBudWxsID0gbnVsbFxuICByZXR1cm4gYXN5bmMgKFxuICAgIHRvb2wsXG4gICAgaW5wdXQsXG4gICAgdG9vbFVzZUNvbnRleHQsXG4gICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICB0b29sVXNlSWQsXG4gICAgZm9yY2VEZWNpc2lvbixcbiAgKSA9PiB7XG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgY29uc3QgbWNwVG9vbHMgPSBnZXRNY3BUb29scygpXG4gICAgICBjb25zdCBwZXJtaXNzaW9uUHJvbXB0VG9vbCA9IG1jcFRvb2xzLmZpbmQodCA9PlxuICAgICAgICB0b29sTWF0Y2hlc05hbWUodCwgcGVybWlzc2lvblByb21wdFRvb2xOYW1lKSxcbiAgICAgICkgYXMgUGVybWlzc2lvblByb21wdFRvb2wgfCB1bmRlZmluZWRcbiAgICAgIGlmICghcGVybWlzc2lvblByb21wdFRvb2wpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgRXJyb3I6IE1DUCB0b29sICR7cGVybWlzc2lvblByb21wdFRvb2xOYW1lfSAocGFzc2VkIHZpYSAtLXBlcm1pc3Npb24tcHJvbXB0LXRvb2wpIG5vdCBmb3VuZC4gQXZhaWxhYmxlIE1DUCB0b29sczogJHttY3BUb29scy5tYXAodCA9PiB0Lm5hbWUpLmpvaW4oJywgJykgfHwgJ25vbmUnfWBcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCR7ZXJyb3J9XFxuYClcbiAgICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgfVxuICAgICAgaWYgKCFwZXJtaXNzaW9uUHJvbXB0VG9vbC5pbnB1dEpTT05TY2hlbWEpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgRXJyb3I6IHRvb2wgJHtwZXJtaXNzaW9uUHJvbXB0VG9vbE5hbWV9IChwYXNzZWQgdmlhIC0tcGVybWlzc2lvbi1wcm9tcHQtdG9vbCkgbXVzdCBiZSBhbiBNQ1AgdG9vbGBcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCR7ZXJyb3J9XFxuYClcbiAgICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgfVxuICAgICAgcmVzb2x2ZWQgPSBjcmVhdGVDYW5Vc2VUb29sV2l0aFBlcm1pc3Npb25Qcm9tcHQocGVybWlzc2lvblByb21wdFRvb2wpXG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlZChcbiAgICAgIHRvb2wsXG4gICAgICBpbnB1dCxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIHRvb2xVc2VJZCxcbiAgICAgIGZvcmNlRGVjaXNpb24sXG4gICAgKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUluaXRpYWxpemVSZXF1ZXN0KFxuICByZXF1ZXN0OiBTREtDb250cm9sSW5pdGlhbGl6ZVJlcXVlc3QsXG4gIHJlcXVlc3RJZDogc3RyaW5nLFxuICBpbml0aWFsaXplZDogYm9vbGVhbixcbiAgb3V0cHV0OiBTdHJlYW08U3Rkb3V0TWVzc2FnZT4sXG4gIGNvbW1hbmRzOiBDb21tYW5kW10sXG4gIG1vZGVsSW5mb3M6IE1vZGVsSW5mb1tdLFxuICBzdHJ1Y3R1cmVkSU86IFN0cnVjdHVyZWRJTyxcbiAgZW5hYmxlQXV0aFN0YXR1czogYm9vbGVhbixcbiAgb3B0aW9uczoge1xuICAgIHN5c3RlbVByb21wdDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgYXBwZW5kU3lzdGVtUHJvbXB0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBhZ2VudD86IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHVzZXJTcGVjaWZpZWRNb2RlbD86IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIFtrZXk6IHN0cmluZ106IHVua25vd25cbiAgfSxcbiAgYWdlbnRzOiBBZ2VudERlZmluaXRpb25bXSxcbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChpbml0aWFsaXplZCkge1xuICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIHN1YnR5cGU6ICdlcnJvcicsXG4gICAgICAgIGVycm9yOiAnQWxyZWFkeSBpbml0aWFsaXplZCcsXG4gICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgcGVuZGluZ19wZXJtaXNzaW9uX3JlcXVlc3RzOlxuICAgICAgICAgIHN0cnVjdHVyZWRJTy5nZXRQZW5kaW5nUGVybWlzc2lvblJlcXVlc3RzKCksXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBBcHBseSBzeXN0ZW1Qcm9tcHQvYXBwZW5kU3lzdGVtUHJvbXB0IGZyb20gc3RkaW4gdG8gYXZvaWQgQVJHX01BWCBsaW1pdHNcbiAgaWYgKHJlcXVlc3Quc3lzdGVtUHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBvcHRpb25zLnN5c3RlbVByb21wdCA9IHJlcXVlc3Quc3lzdGVtUHJvbXB0XG4gIH1cbiAgaWYgKHJlcXVlc3QuYXBwZW5kU3lzdGVtUHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBvcHRpb25zLmFwcGVuZFN5c3RlbVByb21wdCA9IHJlcXVlc3QuYXBwZW5kU3lzdGVtUHJvbXB0XG4gIH1cbiAgaWYgKHJlcXVlc3QucHJvbXB0U3VnZ2VzdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIG9wdGlvbnMucHJvbXB0U3VnZ2VzdGlvbnMgPSByZXF1ZXN0LnByb21wdFN1Z2dlc3Rpb25zXG4gIH1cblxuICAvLyBNZXJnZSBhZ2VudHMgZnJvbSBzdGRpbiB0byBhdm9pZCBBUkdfTUFYIGxpbWl0c1xuICBpZiAocmVxdWVzdC5hZ2VudHMpIHtcbiAgICBjb25zdCBzdGRpbkFnZW50cyA9IHBhcnNlQWdlbnRzRnJvbUpzb24ocmVxdWVzdC5hZ2VudHMsICdmbGFnU2V0dGluZ3MnKVxuICAgIGFnZW50cy5wdXNoKC4uLnN0ZGluQWdlbnRzKVxuICB9XG5cbiAgLy8gUmUtZXZhbHVhdGUgbWFpbiB0aHJlYWQgYWdlbnQgYWZ0ZXIgU0RLIGFnZW50cyBhcmUgbWVyZ2VkXG4gIC8vIFRoaXMgYWxsb3dzIC0tYWdlbnQgdG8gcmVmZXJlbmNlIGFnZW50cyBkZWZpbmVkIHZpYSBTREtcbiAgaWYgKG9wdGlvbnMuYWdlbnQpIHtcbiAgICAvLyBJZiBtYWluLnRzeCBhbHJlYWR5IGZvdW5kIHRoaXMgYWdlbnQgKGZpbGVzeXN0ZW0tZGVmaW5lZCksIGl0IGFscmVhZHlcbiAgICAvLyBhcHBsaWVkIHN5c3RlbVByb21wdC9tb2RlbC9pbml0aWFsUHJvbXB0LiBTa2lwIHRvIGF2b2lkIGRvdWJsZS1hcHBseS5cbiAgICBjb25zdCBhbHJlYWR5UmVzb2x2ZWQgPSBnZXRNYWluVGhyZWFkQWdlbnRUeXBlKCkgPT09IG9wdGlvbnMuYWdlbnRcbiAgICBjb25zdCBtYWluVGhyZWFkQWdlbnQgPSBhZ2VudHMuZmluZChhID0+IGEuYWdlbnRUeXBlID09PSBvcHRpb25zLmFnZW50KVxuICAgIGlmIChtYWluVGhyZWFkQWdlbnQgJiYgIWFscmVhZHlSZXNvbHZlZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBtYWluIHRocmVhZCBhZ2VudCB0eXBlIGluIGJvb3RzdHJhcCBzdGF0ZVxuICAgICAgc2V0TWFpblRocmVhZEFnZW50VHlwZShtYWluVGhyZWFkQWdlbnQuYWdlbnRUeXBlKVxuXG4gICAgICAvLyBBcHBseSB0aGUgYWdlbnQncyBzeXN0ZW0gcHJvbXB0IGlmIHVzZXIgaGFzbid0IHNwZWNpZmllZCBhIGN1c3RvbSBvbmVcbiAgICAgIC8vIFNESyBhZ2VudHMgYXJlIGFsd2F5cyBjdXN0b20gYWdlbnRzIChub3QgYnVpbHQtaW4pLCBzbyBnZXRTeXN0ZW1Qcm9tcHQoKSB0YWtlcyBubyBhcmdzXG4gICAgICBpZiAoIW9wdGlvbnMuc3lzdGVtUHJvbXB0ICYmICFpc0J1aWx0SW5BZ2VudChtYWluVGhyZWFkQWdlbnQpKSB7XG4gICAgICAgIGNvbnN0IGFnZW50U3lzdGVtUHJvbXB0ID0gbWFpblRocmVhZEFnZW50LmdldFN5c3RlbVByb21wdCgpXG4gICAgICAgIGlmIChhZ2VudFN5c3RlbVByb21wdCkge1xuICAgICAgICAgIG9wdGlvbnMuc3lzdGVtUHJvbXB0ID0gYWdlbnRTeXN0ZW1Qcm9tcHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSB0aGUgYWdlbnQncyBtb2RlbCBpZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IG9uZSBhbmQgYWdlbnQgaGFzIGEgbW9kZWxcbiAgICAgIGlmIChcbiAgICAgICAgIW9wdGlvbnMudXNlclNwZWNpZmllZE1vZGVsICYmXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudC5tb2RlbCAmJlxuICAgICAgICBtYWluVGhyZWFkQWdlbnQubW9kZWwgIT09ICdpbmhlcml0J1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFnZW50TW9kZWwgPSBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbChtYWluVGhyZWFkQWdlbnQubW9kZWwpXG4gICAgICAgIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZShhZ2VudE1vZGVsKVxuICAgICAgfVxuXG4gICAgICAvLyBTREstZGVmaW5lZCBhZ2VudHMgYXJyaXZlIHZpYSBpbml0LCBzbyBtYWluLnRzeCdzIGxvb2t1cCBtaXNzZWQgdGhlbS5cbiAgICAgIGlmIChtYWluVGhyZWFkQWdlbnQuaW5pdGlhbFByb21wdCkge1xuICAgICAgICBzdHJ1Y3R1cmVkSU8ucHJlcGVuZFVzZXJNZXNzYWdlKG1haW5UaHJlYWRBZ2VudC5pbml0aWFsUHJvbXB0KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFpblRocmVhZEFnZW50Py5pbml0aWFsUHJvbXB0KSB7XG4gICAgICAvLyBGaWxlc3lzdGVtLWRlZmluZWQgYWdlbnQgKGFscmVhZHlSZXNvbHZlZCBieSBtYWluLnRzeCkuIG1haW4udHN4XG4gICAgICAvLyBoYW5kbGVzIGluaXRpYWxQcm9tcHQgZm9yIHRoZSBzdHJpbmcgaW5wdXRQcm9tcHQgY2FzZSwgYnV0IHdoZW5cbiAgICAgIC8vIGlucHV0UHJvbXB0IGlzIGFuIEFzeW5jSXRlcmFibGUgKFNESyBzdHJlYW0tanNvbiksIGl0IGNhbid0XG4gICAgICAvLyBjb25jYXRlbmF0ZSBcdTIwMTQgZmFsbCBiYWNrIHRvIHByZXBlbmRVc2VyTWVzc2FnZSBoZXJlLlxuICAgICAgc3RydWN0dXJlZElPLnByZXBlbmRVc2VyTWVzc2FnZShtYWluVGhyZWFkQWdlbnQuaW5pdGlhbFByb21wdClcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICBjb25zdCBvdXRwdXRTdHlsZSA9IHNldHRpbmdzPy5vdXRwdXRTdHlsZSB8fCBERUZBVUxUX09VVFBVVF9TVFlMRV9OQU1FXG4gIGNvbnN0IGF2YWlsYWJsZU91dHB1dFN0eWxlcyA9IGF3YWl0IGdldEFsbE91dHB1dFN0eWxlcyhnZXRDd2QoKSlcblxuICAvLyBHZXQgYWNjb3VudCBpbmZvcm1hdGlvblxuICBjb25zdCBhY2NvdW50SW5mbyA9IGdldEFjY291bnRJbmZvcm1hdGlvbigpXG4gIGlmIChyZXF1ZXN0Lmhvb2tzKSB7XG4gICAgY29uc3QgaG9va3M6IFBhcnRpYWw8UmVjb3JkPEhvb2tFdmVudCwgSG9va0NhbGxiYWNrTWF0Y2hlcltdPj4gPSB7fVxuICAgIGZvciAoY29uc3QgW2V2ZW50LCBtYXRjaGVyc10gb2YgT2JqZWN0LmVudHJpZXMocmVxdWVzdC5ob29rcykpIHtcbiAgICAgIGhvb2tzW2V2ZW50IGFzIEhvb2tFdmVudF0gPSBtYXRjaGVycy5tYXAobWF0Y2hlciA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IG1hdGNoZXIuaG9va0NhbGxiYWNrSWRzLm1hcChjYWxsYmFja0lkID0+IHtcbiAgICAgICAgICByZXR1cm4gc3RydWN0dXJlZElPLmNyZWF0ZUhvb2tDYWxsYmFjayhjYWxsYmFja0lkLCBtYXRjaGVyLnRpbWVvdXQpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWF0Y2hlcjogbWF0Y2hlci5tYXRjaGVyLFxuICAgICAgICAgIGhvb2tzOiBjYWxsYmFja3MsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlZ2lzdGVySG9va0NhbGxiYWNrcyhob29rcylcbiAgfVxuICBpZiAocmVxdWVzdC5qc29uU2NoZW1hKSB7XG4gICAgc2V0SW5pdEpzb25TY2hlbWEocmVxdWVzdC5qc29uU2NoZW1hKVxuICB9XG4gIGNvbnN0IGluaXRSZXNwb25zZTogU0RLQ29udHJvbEluaXRpYWxpemVSZXNwb25zZSA9IHtcbiAgICBjb21tYW5kczogY29tbWFuZHNcbiAgICAgIC5maWx0ZXIoY21kID0+IGNtZC51c2VySW52b2NhYmxlICE9PSBmYWxzZSlcbiAgICAgIC5tYXAoY21kID0+ICh7XG4gICAgICAgIG5hbWU6IGdldENvbW1hbmROYW1lKGNtZCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtYXREZXNjcmlwdGlvbldpdGhTb3VyY2UoY21kKSxcbiAgICAgICAgYXJndW1lbnRIaW50OiBjbWQuYXJndW1lbnRIaW50IHx8ICcnLFxuICAgICAgfSkpLFxuICAgIGFnZW50czogYWdlbnRzLm1hcChhZ2VudCA9PiAoe1xuICAgICAgbmFtZTogYWdlbnQuYWdlbnRUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IGFnZW50LndoZW5Ub1VzZSxcbiAgICAgIC8vICdpbmhlcml0JyBpcyBhbiBpbnRlcm5hbCBzZW50aW5lbDsgbm9ybWFsaXplIHRvIHVuZGVmaW5lZCBmb3IgdGhlIHB1YmxpYyBBUElcbiAgICAgIG1vZGVsOiBhZ2VudC5tb2RlbCA9PT0gJ2luaGVyaXQnID8gdW5kZWZpbmVkIDogYWdlbnQubW9kZWwsXG4gICAgfSkpLFxuICAgIG91dHB1dF9zdHlsZTogb3V0cHV0U3R5bGUsXG4gICAgYXZhaWxhYmxlX291dHB1dF9zdHlsZXM6IE9iamVjdC5rZXlzKGF2YWlsYWJsZU91dHB1dFN0eWxlcyksXG4gICAgbW9kZWxzOiBtb2RlbEluZm9zLFxuICAgIGFjY291bnQ6IHtcbiAgICAgIGVtYWlsOiBhY2NvdW50SW5mbz8uZW1haWwsXG4gICAgICBvcmdhbml6YXRpb246IGFjY291bnRJbmZvPy5vcmdhbml6YXRpb24sXG4gICAgICBzdWJzY3JpcHRpb25UeXBlOiBhY2NvdW50SW5mbz8uc3Vic2NyaXB0aW9uLFxuICAgICAgdG9rZW5Tb3VyY2U6IGFjY291bnRJbmZvPy50b2tlblNvdXJjZSxcbiAgICAgIGFwaUtleVNvdXJjZTogYWNjb3VudEluZm8/LmFwaUtleVNvdXJjZSxcbiAgICAgIC8vIGdldEFjY291bnRJbmZvcm1hdGlvbigpIHJldHVybnMgdW5kZWZpbmVkIHVuZGVyIDNQIHByb3ZpZGVycywgc28gdGhlXG4gICAgICAvLyBvdGhlciBmaWVsZHMgYXJlIGFsbCBhYnNlbnQuIGFwaVByb3ZpZGVyIGRpc2FtYmlndWF0ZXMgXCJub3QgbG9nZ2VkXG4gICAgICAvLyBpblwiIChmaXJzdFBhcnR5ICsgdG9rZW5Tb3VyY2U6bm9uZSkgZnJvbSBcIjNQLCBsb2dpbiBub3QgYXBwbGljYWJsZVwiLlxuICAgICAgYXBpUHJvdmlkZXI6IGdldEFQSVByb3ZpZGVyKCksXG4gICAgfSxcbiAgICBwaWQ6IHByb2Nlc3MucGlkLFxuICB9XG5cbiAgaWYgKGlzRmFzdE1vZGVFbmFibGVkKCkgJiYgaXNGYXN0TW9kZUF2YWlsYWJsZSgpKSB7XG4gICAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG4gICAgaW5pdFJlc3BvbnNlLmZhc3RfbW9kZV9zdGF0ZSA9IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICBvcHRpb25zLnVzZXJTcGVjaWZpZWRNb2RlbCA/PyBudWxsLFxuICAgICAgYXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgKVxuICB9XG5cbiAgb3V0cHV0LmVucXVldWUoe1xuICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICByZXNwb25zZToge1xuICAgICAgc3VidHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgcmVzcG9uc2U6IGluaXRSZXNwb25zZSxcbiAgICB9LFxuICB9KVxuXG4gIC8vIEFmdGVyIHRoZSBpbml0aWFsaXplIG1lc3NhZ2UsIGNoZWNrIHRoZSBhdXRoIHN0YXR1cy1cbiAgLy8gVGhpcyB3aWxsIGdldCBub3RpZmllZCBvZiBjaGFuZ2VzLCBidXQgd2UgYWxzbyB3YW50IHRvIHNlbmQgdGhlXG4gIC8vIGluaXRpYWwgc3RhdGUuXG4gIGlmIChlbmFibGVBdXRoU3RhdHVzKSB7XG4gICAgY29uc3QgYXV0aFN0YXR1c01hbmFnZXIgPSBBd3NBdXRoU3RhdHVzTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3Qgc3RhdHVzID0gYXV0aFN0YXR1c01hbmFnZXIuZ2V0U3RhdHVzKClcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBvdXRwdXQuZW5xdWV1ZSh7XG4gICAgICAgIHR5cGU6ICdhdXRoX3N0YXR1cycsXG4gICAgICAgIGlzQXV0aGVudGljYXRpbmc6IHN0YXR1cy5pc0F1dGhlbnRpY2F0aW5nLFxuICAgICAgICBvdXRwdXQ6IHN0YXR1cy5vdXRwdXQsXG4gICAgICAgIGVycm9yOiBzdGF0dXMuZXJyb3IsXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXdpbmRGaWxlcyhcbiAgdXNlck1lc3NhZ2VJZDogVVVJRCxcbiAgYXBwU3RhdGU6IEFwcFN0YXRlLFxuICBzZXRBcHBTdGF0ZTogKHVwZGF0ZXI6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWQsXG4gIGRyeVJ1bjogYm9vbGVhbixcbik6IFByb21pc2U8UmV3aW5kRmlsZXNSZXN1bHQ+IHtcbiAgaWYgKCFmaWxlSGlzdG9yeUVuYWJsZWQoKSkge1xuICAgIHJldHVybiB7IGNhblJld2luZDogZmFsc2UsIGVycm9yOiAnRmlsZSByZXdpbmRpbmcgaXMgbm90IGVuYWJsZWQuJyB9XG4gIH1cbiAgaWYgKCFmaWxlSGlzdG9yeUNhblJlc3RvcmUoYXBwU3RhdGUuZmlsZUhpc3RvcnksIHVzZXJNZXNzYWdlSWQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhblJld2luZDogZmFsc2UsXG4gICAgICBlcnJvcjogJ05vIGZpbGUgY2hlY2twb2ludCBmb3VuZCBmb3IgdGhpcyBtZXNzYWdlLicsXG4gICAgfVxuICB9XG5cbiAgaWYgKGRyeVJ1bikge1xuICAgIGNvbnN0IGRpZmZTdGF0cyA9IGF3YWl0IGZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzKFxuICAgICAgYXBwU3RhdGUuZmlsZUhpc3RvcnksXG4gICAgICB1c2VyTWVzc2FnZUlkLFxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgY2FuUmV3aW5kOiB0cnVlLFxuICAgICAgZmlsZXNDaGFuZ2VkOiBkaWZmU3RhdHM/LmZpbGVzQ2hhbmdlZCxcbiAgICAgIGluc2VydGlvbnM6IGRpZmZTdGF0cz8uaW5zZXJ0aW9ucyxcbiAgICAgIGRlbGV0aW9uczogZGlmZlN0YXRzPy5kZWxldGlvbnMsXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBmaWxlSGlzdG9yeVJld2luZChcbiAgICAgIHVwZGF0ZXIgPT5cbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgZmlsZUhpc3Rvcnk6IHVwZGF0ZXIocHJldi5maWxlSGlzdG9yeSksXG4gICAgICAgIH0pKSxcbiAgICAgIHVzZXJNZXNzYWdlSWQsXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBjYW5SZXdpbmQ6IGZhbHNlLFxuICAgICAgZXJyb3I6IGBGYWlsZWQgdG8gcmV3aW5kOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjYW5SZXdpbmQ6IHRydWUgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTZXRQZXJtaXNzaW9uTW9kZShcbiAgcmVxdWVzdDogeyBtb2RlOiBJbnRlcm5hbFBlcm1pc3Npb25Nb2RlIH0sXG4gIHJlcXVlc3RJZDogc3RyaW5nLFxuICB0b29sUGVybWlzc2lvbkNvbnRleHQ6IFRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgb3V0cHV0OiBTdHJlYW08U3Rkb3V0TWVzc2FnZT4sXG4pOiBUb29sUGVybWlzc2lvbkNvbnRleHQge1xuICAvLyBDaGVjayBpZiB0cnlpbmcgdG8gc3dpdGNoIHRvIGJ5cGFzc1Blcm1pc3Npb25zIG1vZGVcbiAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ2J5cGFzc1Blcm1pc3Npb25zJykge1xuICAgIGlmIChpc0J5cGFzc1Blcm1pc3Npb25zTW9kZURpc2FibGVkKCkpIHtcbiAgICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIHN1YnR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgJ0Nhbm5vdCBzZXQgcGVybWlzc2lvbiBtb2RlIHRvIGJ5cGFzc1Blcm1pc3Npb25zIGJlY2F1c2UgaXQgaXMgZGlzYWJsZWQgYnkgc2V0dGluZ3Mgb3IgY29uZmlndXJhdGlvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvb2xQZXJtaXNzaW9uQ29udGV4dFxuICAgIH1cbiAgICBpZiAoIXRvb2xQZXJtaXNzaW9uQ29udGV4dC5pc0J5cGFzc1Blcm1pc3Npb25zTW9kZUF2YWlsYWJsZSkge1xuICAgICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgICB0eXBlOiAnY29udHJvbF9yZXNwb25zZScsXG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgc3VidHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAnQ2Fubm90IHNldCBwZXJtaXNzaW9uIG1vZGUgdG8gYnlwYXNzUGVybWlzc2lvbnMgYmVjYXVzZSB0aGUgc2Vzc2lvbiB3YXMgbm90IGxhdW5jaGVkIHdpdGggLS1kYW5nZXJvdXNseS1za2lwLXBlcm1pc3Npb25zJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG9vbFBlcm1pc3Npb25Db250ZXh0XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIHN3aXRjaCB0byBhdXRvIG1vZGUgd2l0aG91dCB0aGUgY2xhc3NpZmllciBnYXRlXG4gIGlmIChcbiAgICBmZWF0dXJlKCdUUkFOU0NSSVBUX0NMQVNTSUZJRVInKSAmJlxuICAgIHJlcXVlc3QubW9kZSA9PT0gJ2F1dG8nICYmXG4gICAgIWlzQXV0b01vZGVHYXRlRW5hYmxlZCgpXG4gICkge1xuICAgIGNvbnN0IHJlYXNvbiA9IGdldEF1dG9Nb2RlVW5hdmFpbGFibGVSZWFzb24oKVxuICAgIG91dHB1dC5lbnF1ZXVlKHtcbiAgICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIHN1YnR5cGU6ICdlcnJvcicsXG4gICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgZXJyb3I6IHJlYXNvblxuICAgICAgICAgID8gYENhbm5vdCBzZXQgcGVybWlzc2lvbiBtb2RlIHRvIGF1dG86ICR7Z2V0QXV0b01vZGVVbmF2YWlsYWJsZU5vdGlmaWNhdGlvbihyZWFzb24pfWBcbiAgICAgICAgICA6ICdDYW5ub3Qgc2V0IHBlcm1pc3Npb24gbW9kZSB0byBhdXRvJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gdG9vbFBlcm1pc3Npb25Db250ZXh0XG4gIH1cblxuICAvLyBBbGxvdyB0aGUgbW9kZSBzd2l0Y2hcbiAgb3V0cHV0LmVucXVldWUoe1xuICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICByZXNwb25zZToge1xuICAgICAgc3VidHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgbW9kZTogcmVxdWVzdC5tb2RlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4udHJhbnNpdGlvblBlcm1pc3Npb25Nb2RlKFxuICAgICAgdG9vbFBlcm1pc3Npb25Db250ZXh0Lm1vZGUsXG4gICAgICByZXF1ZXN0Lm1vZGUsXG4gICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgKSxcbiAgICBtb2RlOiByZXF1ZXN0Lm1vZGUsXG4gIH1cbn1cblxuLyoqXG4gKiBJREUtdHJpZ2dlcmVkIGNoYW5uZWwgZW5hYmxlLiBEZXJpdmVzIHRoZSBDaGFubmVsRW50cnkgZnJvbSB0aGUgY29ubmVjdGlvbidzXG4gKiBwbHVnaW5Tb3VyY2UgKElERSBjYW4ndCBzcG9vZiBraW5kL21hcmtldHBsYWNlIFx1MjAxNCB3ZSBvbmx5IHRha2UgdGhlIHNlcnZlclxuICogbmFtZSksIGFwcGVuZHMgaXQgdG8gc2Vzc2lvbiBhbGxvd2VkQ2hhbm5lbHMsIGFuZCBydW5zIHRoZSBmdWxsIGdhdGUuIE9uXG4gKiBnYXRlIGZhaWx1cmUsIHJvbGxzIGJhY2sgdGhlIGFwcGVuZC4gT24gc3VjY2VzcywgcmVnaXN0ZXJzIGEgbm90aWZpY2F0aW9uXG4gKiBoYW5kbGVyIHRoYXQgZW5xdWV1ZXMgY2hhbm5lbCBtZXNzYWdlcyBhdCBwcmlvcml0eTonbmV4dCcgXHUyMDE0IGRyYWluQ29tbWFuZFF1ZXVlXG4gKiBwaWNrcyB0aGVtIHVwIGJldHdlZW4gdHVybnMuXG4gKlxuICogSW50ZW50aW9uYWxseSBkb2VzIE5PVCByZWdpc3RlciB0aGUgY2xhdWRlL2NoYW5uZWwvcGVybWlzc2lvbiBoYW5kbGVyIHRoYXRcbiAqIHVzZU1hbmFnZU1DUENvbm5lY3Rpb25zIHNldHMgdXAgZm9yIGludGVyYWN0aXZlIG1vZGUuIFRoYXQgaGFuZGxlciByZXNvbHZlc1xuICogYSBwZW5kaW5nIGRpYWxvZyBpbnNpZGUgaGFuZGxlSW50ZXJhY3RpdmVQZXJtaXNzaW9uIFx1MjAxNCBidXQgcHJpbnQudHMgbmV2ZXJcbiAqIGNhbGxzIGhhbmRsZUludGVyYWN0aXZlUGVybWlzc2lvbi4gV2hlbiBTREsgcGVybWlzc2lvbiBsYW5kcyBvbiAnYXNrJywgaXRcbiAqIGdvZXMgdG8gdGhlIGNvbnN1bWVyJ3MgY2FuVXNlVG9vbCBjYWxsYmFjayBvdmVyIHN0ZGlvOyB0aGVyZSBpcyBubyBDTEktc2lkZVxuICogZGlhbG9nIGZvciBhIHJlbW90ZSBcInllcyB0YnhrcVwiIHRvIHJlc29sdmUuIElmIGFuIElERSB3YW50cyBjaGFubmVsLXJlbGF5ZWRcbiAqIHRvb2wgYXBwcm92YWwsIHRoYXQncyBJREUtc2lkZSBwbHVtYmluZyBhZ2FpbnN0IGl0cyBvd24gcGVuZGluZy1tYXAuIChBbHNvXG4gKiBnYXRlZCBzZXBhcmF0ZWx5IGJ5IHRlbmd1X2hhcmJvcl9wZXJtaXNzaW9ucyBcdTIwMTQgbm90IHlldCBzaGlwcGluZyBvblxuICogaW50ZXJhY3RpdmUgZWl0aGVyLilcbiAqL1xuZnVuY3Rpb24gaGFuZGxlQ2hhbm5lbEVuYWJsZShcbiAgcmVxdWVzdElkOiBzdHJpbmcsXG4gIHNlcnZlck5hbWU6IHN0cmluZyxcbiAgY29ubmVjdGlvblBvb2w6IHJlYWRvbmx5IE1DUFNlcnZlckNvbm5lY3Rpb25bXSxcbiAgb3V0cHV0OiBTdHJlYW08U3Rkb3V0TWVzc2FnZT4sXG4pOiB2b2lkIHtcbiAgY29uc3QgcmVzcG9uZEVycm9yID0gKGVycm9yOiBzdHJpbmcpID0+XG4gICAgb3V0cHV0LmVucXVldWUoe1xuICAgICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2U6IHsgc3VidHlwZTogJ2Vycm9yJywgcmVxdWVzdF9pZDogcmVxdWVzdElkLCBlcnJvciB9LFxuICAgIH0pXG5cbiAgaWYgKCEoZmVhdHVyZSgnS0FJUk9TJykgfHwgZmVhdHVyZSgnS0FJUk9TX0NIQU5ORUxTJykpKSB7XG4gICAgcmV0dXJuIHJlc3BvbmRFcnJvcignY2hhbm5lbHMgZmVhdHVyZSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnVpbGQnKVxuICB9XG5cbiAgLy8gT25seSBhICdjb25uZWN0ZWQnIGNsaWVudCBoYXMgLmNhcGFiaWxpdGllcyBhbmQgLmNsaWVudCB0byByZWdpc3RlciB0aGVcbiAgLy8gaGFuZGxlciBvbi4gVGhlIHBvb2wgc3ByZWFkIGF0IHRoZSBjYWxsIHNpdGUgbWF0Y2hlcyBtY3Bfc3RhdHVzLlxuICBjb25zdCBjb25uZWN0aW9uID0gY29ubmVjdGlvblBvb2wuZmluZChcbiAgICBjID0+IGMubmFtZSA9PT0gc2VydmVyTmFtZSAmJiBjLnR5cGUgPT09ICdjb25uZWN0ZWQnLFxuICApXG4gIGlmICghY29ubmVjdGlvbiB8fCBjb25uZWN0aW9uLnR5cGUgIT09ICdjb25uZWN0ZWQnKSB7XG4gICAgcmV0dXJuIHJlc3BvbmRFcnJvcihgc2VydmVyICR7c2VydmVyTmFtZX0gaXMgbm90IGNvbm5lY3RlZGApXG4gIH1cblxuICBjb25zdCBwbHVnaW5Tb3VyY2UgPSBjb25uZWN0aW9uLmNvbmZpZy5wbHVnaW5Tb3VyY2VcbiAgY29uc3QgcGFyc2VkID0gcGx1Z2luU291cmNlID8gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHBsdWdpblNvdXJjZSkgOiB1bmRlZmluZWRcbiAgaWYgKCFwYXJzZWQ/Lm1hcmtldHBsYWNlKSB7XG4gICAgLy8gTm8gcGx1Z2luU291cmNlIG9yIEAtbGVzcyBzb3VyY2UgXHUyMDE0IGNhbiBuZXZlciBwYXNzIHRoZSB7cGx1Z2luLFxuICAgIC8vIG1hcmtldHBsYWNlfS1rZXllZCBhbGxvd2xpc3QuIFNob3J0LWNpcmN1aXQgd2l0aCB0aGUgc2FtZSByZWFzb24gdGhlXG4gICAgLy8gZ2F0ZSB3b3VsZCBwcm9kdWNlLlxuICAgIHJldHVybiByZXNwb25kRXJyb3IoXG4gICAgICBgc2VydmVyICR7c2VydmVyTmFtZX0gaXMgbm90IHBsdWdpbi1zb3VyY2VkOyBjaGFubmVsX2VuYWJsZSByZXF1aXJlcyBhIG1hcmtldHBsYWNlIHBsdWdpbmAsXG4gICAgKVxuICB9XG5cbiAgY29uc3QgZW50cnk6IENoYW5uZWxFbnRyeSA9IHtcbiAgICBraW5kOiAncGx1Z2luJyxcbiAgICBuYW1lOiBwYXJzZWQubmFtZSxcbiAgICBtYXJrZXRwbGFjZTogcGFyc2VkLm1hcmtldHBsYWNlLFxuICB9XG4gIC8vIElkZW1wb3RlbmN5OiBkb24ndCBkb3VibGUtYXBwZW5kIG9uIHJlcGVhdCBlbmFibGUuXG4gIGNvbnN0IHByaW9yID0gZ2V0QWxsb3dlZENoYW5uZWxzKClcbiAgY29uc3QgYWxyZWFkeSA9IHByaW9yLnNvbWUoXG4gICAgZSA9PlxuICAgICAgZS5raW5kID09PSAncGx1Z2luJyAmJlxuICAgICAgZS5uYW1lID09PSBlbnRyeS5uYW1lICYmXG4gICAgICBlLm1hcmtldHBsYWNlID09PSBlbnRyeS5tYXJrZXRwbGFjZSxcbiAgKVxuICBpZiAoIWFscmVhZHkpIHNldEFsbG93ZWRDaGFubmVscyhbLi4ucHJpb3IsIGVudHJ5XSlcblxuICBjb25zdCBnYXRlID0gZ2F0ZUNoYW5uZWxTZXJ2ZXIoXG4gICAgc2VydmVyTmFtZSxcbiAgICBjb25uZWN0aW9uLmNhcGFiaWxpdGllcyxcbiAgICBwbHVnaW5Tb3VyY2UsXG4gIClcbiAgaWYgKGdhdGUuYWN0aW9uID09PSAnc2tpcCcpIHtcbiAgICAvLyBSb2xsYmFjayBcdTIwMTQgb25seSByZW1vdmUgdGhlIGVudHJ5IHdlIGFwcGVuZGVkLlxuICAgIGlmICghYWxyZWFkeSkgc2V0QWxsb3dlZENoYW5uZWxzKHByaW9yKVxuICAgIHJldHVybiByZXNwb25kRXJyb3IoZ2F0ZS5yZWFzb24pXG4gIH1cblxuICBjb25zdCBwbHVnaW5JZCA9XG4gICAgYCR7ZW50cnkubmFtZX1AJHtlbnRyeS5tYXJrZXRwbGFjZX1gIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgbG9nTUNQRGVidWcoc2VydmVyTmFtZSwgJ0NoYW5uZWwgbm90aWZpY2F0aW9ucyByZWdpc3RlcmVkJylcbiAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9jaGFubmVsX2VuYWJsZScsIHsgcGx1Z2luOiBwbHVnaW5JZCB9KVxuXG4gIC8vIElkZW50aWNhbCBlbnF1ZXVlIHNoYXBlIHRvIHRoZSBpbnRlcmFjdGl2ZSByZWdpc3RlciBibG9jayBpblxuICAvLyB1c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucy4gZHJhaW5Db21tYW5kUXVldWUgcHJvY2Vzc2VzIGl0IGJldHdlZW4gdHVybnMgXHUyMDE0XG4gIC8vIGNoYW5uZWwgbWVzc2FnZXMgcXVldWUgYXQgcHJpb3JpdHkgJ25leHQnIGFuZCBhcmUgc2VlbiBieSB0aGUgbW9kZWwgb25cbiAgLy8gdGhlIHR1cm4gYWZ0ZXIgdGhleSBhcnJpdmUuXG4gIGNvbm5lY3Rpb24uY2xpZW50LnNldE5vdGlmaWNhdGlvbkhhbmRsZXIoXG4gICAgQ2hhbm5lbE1lc3NhZ2VOb3RpZmljYXRpb25TY2hlbWEoKSxcbiAgICBhc3luYyBub3RpZmljYXRpb24gPT4ge1xuICAgICAgY29uc3QgeyBjb250ZW50LCBtZXRhIH0gPSBub3RpZmljYXRpb24ucGFyYW1zXG4gICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgc2VydmVyTmFtZSxcbiAgICAgICAgYG5vdGlmaWNhdGlvbnMvY2xhdWRlL2NoYW5uZWw6ICR7Y29udGVudC5zbGljZSgwLCA4MCl9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfY2hhbm5lbF9tZXNzYWdlJywge1xuICAgICAgICBjb250ZW50X2xlbmd0aDogY29udGVudC5sZW5ndGgsXG4gICAgICAgIG1ldGFfa2V5X2NvdW50OiBPYmplY3Qua2V5cyhtZXRhID8/IHt9KS5sZW5ndGgsXG4gICAgICAgIGVudHJ5X2tpbmQ6XG4gICAgICAgICAgJ3BsdWdpbicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgaXNfZGV2OiBmYWxzZSxcbiAgICAgICAgcGx1Z2luOiBwbHVnaW5JZCxcbiAgICAgIH0pXG4gICAgICBlbnF1ZXVlKHtcbiAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgIHZhbHVlOiB3cmFwQ2hhbm5lbE1lc3NhZ2Uoc2VydmVyTmFtZSwgY29udGVudCwgbWV0YSksXG4gICAgICAgIHByaW9yaXR5OiAnbmV4dCcsXG4gICAgICAgIGlzTWV0YTogdHJ1ZSxcbiAgICAgICAgb3JpZ2luOiB7IGtpbmQ6ICdjaGFubmVsJywgc2VydmVyOiBzZXJ2ZXJOYW1lIH0sXG4gICAgICAgIHNraXBTbGFzaENvbW1hbmRzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9LFxuICApXG5cbiAgb3V0cHV0LmVucXVldWUoe1xuICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICByZXNwb25zZToge1xuICAgICAgc3VidHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgcmVzcG9uc2U6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9KVxufVxuXG4vKipcbiAqIFJlLXJlZ2lzdGVyIHRoZSBjaGFubmVsIG5vdGlmaWNhdGlvbiBoYW5kbGVyIGFmdGVyIG1jcF9yZWNvbm5lY3QgL1xuICogbWNwX3RvZ2dsZSBjcmVhdGVzIGEgbmV3IGNsaWVudC4gaGFuZGxlQ2hhbm5lbEVuYWJsZSBib3VuZCB0aGUgaGFuZGxlciB0b1xuICogdGhlIE9MRCBjbGllbnQgb2JqZWN0OyBhbGxvd2VkQ2hhbm5lbHMgc3Vydml2ZXMgdGhlIHJlY29ubmVjdCBidXQgdGhlXG4gKiBoYW5kbGVyIGJpbmRpbmcgZG9lcyBub3QuIFdpdGhvdXQgdGhpcywgY2hhbm5lbCBtZXNzYWdlcyBzaWxlbnRseSBkcm9wXG4gKiBhZnRlciBhIHJlY29ubmVjdCB3aGlsZSB0aGUgSURFIHN0aWxsIGJlbGlldmVzIHRoZSBjaGFubmVsIGlzIGxpdmUuXG4gKlxuICogTWlycm9ycyB0aGUgaW50ZXJhY3RpdmUgQ0xJJ3Mgb25Db25uZWN0aW9uQXR0ZW1wdCBpblxuICogdXNlTWFuYWdlTUNQQ29ubmVjdGlvbnMsIHdoaWNoIHJlLWdhdGVzIG9uIGV2ZXJ5IG5ldyBjb25uZWN0aW9uLiBQYWlyZWRcbiAqIHdpdGggcmVnaXN0ZXJFbGljaXRhdGlvbkhhbmRsZXJzIGF0IHRoZSBzYW1lIGNhbGwgc2l0ZXMuXG4gKlxuICogTm8tb3AgaWYgdGhlIHNlcnZlciB3YXMgbmV2ZXIgY2hhbm5lbC1lbmFibGVkOiBnYXRlQ2hhbm5lbFNlcnZlciBjYWxsc1xuICogZmluZENoYW5uZWxFbnRyeSBpbnRlcm5hbGx5IGFuZCByZXR1cm5zIHNraXAvc2Vzc2lvbiBmb3IgYW4gdW5saXN0ZWRcbiAqIHNlcnZlciwgc28gcmVjb25uZWN0aW5nIGEgbm9uLWNoYW5uZWwgTUNQIHNlcnZlciBjb3N0cyBvbmUgZmVhdHVyZS1mbGFnXG4gKiBjaGVjay5cbiAqL1xuZnVuY3Rpb24gcmVyZWdpc3RlckNoYW5uZWxIYW5kbGVyQWZ0ZXJSZWNvbm5lY3QoXG4gIGNvbm5lY3Rpb246IE1DUFNlcnZlckNvbm5lY3Rpb24sXG4pOiB2b2lkIHtcbiAgaWYgKCEoZmVhdHVyZSgnS0FJUk9TJykgfHwgZmVhdHVyZSgnS0FJUk9TX0NIQU5ORUxTJykpKSByZXR1cm5cbiAgaWYgKGNvbm5lY3Rpb24udHlwZSAhPT0gJ2Nvbm5lY3RlZCcpIHJldHVyblxuXG4gIGNvbnN0IGdhdGUgPSBnYXRlQ2hhbm5lbFNlcnZlcihcbiAgICBjb25uZWN0aW9uLm5hbWUsXG4gICAgY29ubmVjdGlvbi5jYXBhYmlsaXRpZXMsXG4gICAgY29ubmVjdGlvbi5jb25maWcucGx1Z2luU291cmNlLFxuICApXG4gIGlmIChnYXRlLmFjdGlvbiAhPT0gJ3JlZ2lzdGVyJykgcmV0dXJuXG5cbiAgY29uc3QgZW50cnkgPSBmaW5kQ2hhbm5lbEVudHJ5KGNvbm5lY3Rpb24ubmFtZSwgZ2V0QWxsb3dlZENoYW5uZWxzKCkpXG4gIGNvbnN0IHBsdWdpbklkID1cbiAgICBlbnRyeT8ua2luZCA9PT0gJ3BsdWdpbidcbiAgICAgID8gKGAke2VudHJ5Lm5hbWV9QCR7ZW50cnkubWFya2V0cGxhY2V9YCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTKVxuICAgICAgOiB1bmRlZmluZWRcblxuICBsb2dNQ1BEZWJ1ZyhcbiAgICBjb25uZWN0aW9uLm5hbWUsXG4gICAgJ0NoYW5uZWwgbm90aWZpY2F0aW9ucyByZS1yZWdpc3RlcmVkIGFmdGVyIHJlY29ubmVjdCcsXG4gIClcbiAgY29ubmVjdGlvbi5jbGllbnQuc2V0Tm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICBDaGFubmVsTWVzc2FnZU5vdGlmaWNhdGlvblNjaGVtYSgpLFxuICAgIGFzeW5jIG5vdGlmaWNhdGlvbiA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQsIG1ldGEgfSA9IG5vdGlmaWNhdGlvbi5wYXJhbXNcbiAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICBjb25uZWN0aW9uLm5hbWUsXG4gICAgICAgIGBub3RpZmljYXRpb25zL2NsYXVkZS9jaGFubmVsOiAke2NvbnRlbnQuc2xpY2UoMCwgODApfWAsXG4gICAgICApXG4gICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2NoYW5uZWxfbWVzc2FnZScsIHtcbiAgICAgICAgY29udGVudF9sZW5ndGg6IGNvbnRlbnQubGVuZ3RoLFxuICAgICAgICBtZXRhX2tleV9jb3VudDogT2JqZWN0LmtleXMobWV0YSA/PyB7fSkubGVuZ3RoLFxuICAgICAgICBlbnRyeV9raW5kOlxuICAgICAgICAgIGVudHJ5Py5raW5kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGlzX2RldjogZW50cnk/LmRldiA/PyBmYWxzZSxcbiAgICAgICAgcGx1Z2luOiBwbHVnaW5JZCxcbiAgICAgIH0pXG4gICAgICBlbnF1ZXVlKHtcbiAgICAgICAgbW9kZTogJ3Byb21wdCcsXG4gICAgICAgIHZhbHVlOiB3cmFwQ2hhbm5lbE1lc3NhZ2UoY29ubmVjdGlvbi5uYW1lLCBjb250ZW50LCBtZXRhKSxcbiAgICAgICAgcHJpb3JpdHk6ICduZXh0JyxcbiAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgICBvcmlnaW46IHsga2luZDogJ2NoYW5uZWwnLCBzZXJ2ZXI6IGNvbm5lY3Rpb24ubmFtZSB9LFxuICAgICAgICBza2lwU2xhc2hDb21tYW5kczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSxcbiAgKVxufVxuXG4vKipcbiAqIEVtaXRzIGFuIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGNvcnJlY3QgZm9ybWF0IGJhc2VkIG9uIG91dHB1dEZvcm1hdC5cbiAqIFdoZW4gdXNpbmcgc3RyZWFtLWpzb24sIHdyaXRlcyBKU09OIHRvIHN0ZG91dDsgb3RoZXJ3aXNlIHdyaXRlcyBwbGFpbiB0ZXh0IHRvIHN0ZGVyci5cbiAqL1xuZnVuY3Rpb24gZW1pdExvYWRFcnJvcihcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBvdXRwdXRGb3JtYXQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbik6IHZvaWQge1xuICBpZiAob3V0cHV0Rm9ybWF0ID09PSAnc3RyZWFtLWpzb24nKSB7XG4gICAgY29uc3QgZXJyb3JSZXN1bHQgPSB7XG4gICAgICB0eXBlOiAncmVzdWx0JyxcbiAgICAgIHN1YnR5cGU6ICdlcnJvcl9kdXJpbmdfZXhlY3V0aW9uJyxcbiAgICAgIGR1cmF0aW9uX21zOiAwLFxuICAgICAgZHVyYXRpb25fYXBpX21zOiAwLFxuICAgICAgaXNfZXJyb3I6IHRydWUsXG4gICAgICBudW1fdHVybnM6IDAsXG4gICAgICBzdG9wX3JlYXNvbjogbnVsbCxcbiAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgdG90YWxfY29zdF91c2Q6IDAsXG4gICAgICB1c2FnZTogRU1QVFlfVVNBR0UsXG4gICAgICBtb2RlbFVzYWdlOiB7fSxcbiAgICAgIHBlcm1pc3Npb25fZGVuaWFsczogW10sXG4gICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICBlcnJvcnM6IFttZXNzYWdlXSxcbiAgICB9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoanNvblN0cmluZ2lmeShlcnJvclJlc3VsdCkgKyAnXFxuJylcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShtZXNzYWdlICsgJ1xcbicpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGludGVycnVwdGVkIHVzZXIgbWVzc2FnZSBhbmQgaXRzIHN5bnRoZXRpYyBhc3Npc3RhbnQgc2VudGluZWxcbiAqIGZyb20gdGhlIG1lc3NhZ2UgYXJyYXkuIFVzZWQgZHVyaW5nIGdhdGV3YXktdHJpZ2dlcmVkIHJlc3RhcnRzIHRvIGNsZWFuIHVwXG4gKiB0aGUgbWVzc2FnZSBoaXN0b3J5IGJlZm9yZSByZS1lbnF1ZXVpbmcgdGhlIGludGVycnVwdGVkIHByb21wdC5cbiAqXG4gKiBAaW50ZXJuYWwgRXhwb3J0ZWQgZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludGVycnVwdGVkTWVzc2FnZShcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgaW50ZXJydXB0ZWRVc2VyTWVzc2FnZTogTm9ybWFsaXplZFVzZXJNZXNzYWdlLFxuKTogdm9pZCB7XG4gIGNvbnN0IGlkeCA9IG1lc3NhZ2VzLmZpbmRJbmRleChtID0+IG0udXVpZCA9PT0gaW50ZXJydXB0ZWRVc2VyTWVzc2FnZS51dWlkKVxuICBpZiAoaWR4ICE9PSAtMSkge1xuICAgIC8vIFJlbW92ZSB0aGUgdXNlciBtZXNzYWdlIGFuZCB0aGUgc2VudGluZWwgdGhhdCBpbW1lZGlhdGVseSBmb2xsb3dzIGl0LlxuICAgIC8vIHNwbGljZSBzYWZlbHkgaGFuZGxlcyB0aGUgY2FzZSB3aGVyZSBpZHggaXMgdGhlIGxhc3QgZWxlbWVudC5cbiAgICBtZXNzYWdlcy5zcGxpY2UoaWR4LCAyKVxuICB9XG59XG5cbnR5cGUgTG9hZEluaXRpYWxNZXNzYWdlc1Jlc3VsdCA9IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXVxuICB0dXJuSW50ZXJydXB0aW9uU3RhdGU/OiBUdXJuSW50ZXJydXB0aW9uU3RhdGVcbiAgYWdlbnRTZXR0aW5nPzogc3RyaW5nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJbml0aWFsTWVzc2FnZXMoXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgb3B0aW9uczoge1xuICAgIGNvbnRpbnVlOiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgdGVsZXBvcnQ6IHN0cmluZyB8IHRydWUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgcmVzdW1lOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgcmVzdW1lU2Vzc2lvbkF0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBmb3JrU2Vzc2lvbjogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIG91dHB1dEZvcm1hdDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgc2Vzc2lvblN0YXJ0SG9va3NQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzPlxuICAgIHJlc3RvcmVkV29ya2VyU3RhdGU6IFByb21pc2U8U2Vzc2lvbkV4dGVybmFsTWV0YWRhdGEgfCBudWxsPlxuICB9LFxuKTogUHJvbWlzZTxMb2FkSW5pdGlhbE1lc3NhZ2VzUmVzdWx0PiB7XG4gIGNvbnN0IHBlcnNpc3RTZXNzaW9uID0gIWlzU2Vzc2lvblBlcnNpc3RlbmNlRGlzYWJsZWQoKVxuICAvLyBIYW5kbGUgY29udGludWUgaW4gcHJpbnQgbW9kZVxuICBpZiAob3B0aW9ucy5jb250aW51ZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfY29udGludWVfcHJpbnQnLCB7fSlcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9hZENvbnZlcnNhdGlvbkZvclJlc3VtZShcbiAgICAgICAgdW5kZWZpbmVkIC8qIHNlc3Npb25JZCAqLyxcbiAgICAgICAgdW5kZWZpbmVkIC8qIGZpbGUgcGF0aCAqLyxcbiAgICAgIClcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gTWF0Y2ggY29vcmRpbmF0b3IgbW9kZSB0byB0aGUgcmVzdW1lZCBzZXNzaW9uJ3MgbW9kZVxuICAgICAgICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpICYmIGNvb3JkaW5hdG9yTW9kZU1vZHVsZSkge1xuICAgICAgICAgIGNvbnN0IHdhcm5pbmcgPSBjb29yZGluYXRvck1vZGVNb2R1bGUubWF0Y2hTZXNzaW9uTW9kZShyZXN1bHQubW9kZSlcbiAgICAgICAgICBpZiAod2FybmluZykge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUod2FybmluZyArICdcXG4nKVxuICAgICAgICAgICAgLy8gUmVmcmVzaCBhZ2VudCBkZWZpbml0aW9ucyB0byByZWZsZWN0IHRoZSBtb2RlIHN3aXRjaFxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcyxcbiAgICAgICAgICAgICAgZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QsXG4gICAgICAgICAgICB9ID1cbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICAgICAgICAgICAgcmVxdWlyZSgnLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcycpXG4gICAgICAgICAgICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcy5jYWNoZS5jbGVhcj8uKClcbiAgICAgICAgICAgIGNvbnN0IGZyZXNoQWdlbnREZWZzID0gYXdhaXQgZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMoXG4gICAgICAgICAgICAgIGdldEN3ZCgpLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAuLi5mcmVzaEFnZW50RGVmcyxcbiAgICAgICAgICAgICAgICBhbGxBZ2VudHM6IGZyZXNoQWdlbnREZWZzLmFsbEFnZW50cyxcbiAgICAgICAgICAgICAgICBhY3RpdmVBZ2VudHM6IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0KGZyZXNoQWdlbnREZWZzLmFsbEFnZW50cyksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXVzZSB0aGUgcmVzdW1lZCBzZXNzaW9uJ3MgSURcbiAgICAgICAgaWYgKCFvcHRpb25zLmZvcmtTZXNzaW9uKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHN3aXRjaFNlc3Npb24oXG4gICAgICAgICAgICAgIGFzU2Vzc2lvbklkKHJlc3VsdC5zZXNzaW9uSWQpLFxuICAgICAgICAgICAgICByZXN1bHQuZnVsbFBhdGggPyBkaXJuYW1lKHJlc3VsdC5mdWxsUGF0aCkgOiBudWxsLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHJlc2V0U2Vzc2lvbkZpbGVQb2ludGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdG9yZVNlc3Npb25TdGF0ZUZyb21Mb2cocmVzdWx0LCBzZXRBcHBTdGF0ZSlcblxuICAgICAgICAvLyBSZXN0b3JlIHNlc3Npb24gbWV0YWRhdGEgc28gaXQncyByZS1hcHBlbmRlZCBvbiBleGl0IHZpYSByZUFwcGVuZFNlc3Npb25NZXRhZGF0YVxuICAgICAgICByZXN0b3JlU2Vzc2lvbk1ldGFkYXRhKFxuICAgICAgICAgIG9wdGlvbnMuZm9ya1Nlc3Npb25cbiAgICAgICAgICAgID8geyAuLi5yZXN1bHQsIHdvcmt0cmVlU2Vzc2lvbjogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgIDogcmVzdWx0LFxuICAgICAgICApXG5cbiAgICAgICAgLy8gV3JpdGUgbW9kZSBlbnRyeSBmb3IgdGhlIHJlc3VtZWQgc2Vzc2lvblxuICAgICAgICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpICYmIGNvb3JkaW5hdG9yTW9kZU1vZHVsZSkge1xuICAgICAgICAgIHNhdmVNb2RlKFxuICAgICAgICAgICAgY29vcmRpbmF0b3JNb2RlTW9kdWxlLmlzQ29vcmRpbmF0b3JNb2RlKClcbiAgICAgICAgICAgICAgPyAnY29vcmRpbmF0b3InXG4gICAgICAgICAgICAgIDogJ25vcm1hbCcsXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogcmVzdWx0Lm1lc3NhZ2VzLFxuICAgICAgICAgIHR1cm5JbnRlcnJ1cHRpb25TdGF0ZTogcmVzdWx0LnR1cm5JbnRlcnJ1cHRpb25TdGF0ZSxcbiAgICAgICAgICBhZ2VudFNldHRpbmc6IHJlc3VsdC5hZ2VudFNldHRpbmcsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgdGVsZXBvcnQgaW4gcHJpbnQgbW9kZVxuICBpZiAob3B0aW9ucy50ZWxlcG9ydCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWlzUG9saWN5QWxsb3dlZCgnYWxsb3dfcmVtb3RlX3Nlc3Npb25zJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiUmVtb3RlIHNlc3Npb25zIGFyZSBkaXNhYmxlZCBieSB5b3VyIG9yZ2FuaXphdGlvbidzIHBvbGljeS5cIixcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBsb2dFdmVudCgndGVuZ3VfdGVsZXBvcnRfcHJpbnQnLCB7fSlcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRlbGVwb3J0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlc3Npb24gSUQgcHJvdmlkZWQgZm9yIHRlbGVwb3J0JylcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBjaGVja091dFRlbGVwb3J0ZWRTZXNzaW9uQnJhbmNoLFxuICAgICAgICBwcm9jZXNzTWVzc2FnZXNGb3JUZWxlcG9ydFJlc3VtZSxcbiAgICAgICAgdGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbixcbiAgICAgICAgdmFsaWRhdGVHaXRTdGF0ZSxcbiAgICAgIH0gPSBhd2FpdCBpbXBvcnQoJ3NyYy91dGlscy90ZWxlcG9ydC5qcycpXG4gICAgICBhd2FpdCB2YWxpZGF0ZUdpdFN0YXRlKClcbiAgICAgIGNvbnN0IHRlbGVwb3J0UmVzdWx0ID0gYXdhaXQgdGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbihvcHRpb25zLnRlbGVwb3J0KVxuICAgICAgY29uc3QgeyBicmFuY2hFcnJvciB9ID0gYXdhaXQgY2hlY2tPdXRUZWxlcG9ydGVkU2Vzc2lvbkJyYW5jaChcbiAgICAgICAgdGVsZXBvcnRSZXN1bHQuYnJhbmNoLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IHByb2Nlc3NNZXNzYWdlc0ZvclRlbGVwb3J0UmVzdW1lKFxuICAgICAgICAgIHRlbGVwb3J0UmVzdWx0LmxvZyxcbiAgICAgICAgICBicmFuY2hFcnJvcixcbiAgICAgICAgKSxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgcmVzdW1lIGluIHByaW50IG1vZGUgKGFjY2VwdHMgc2Vzc2lvbiBJRCBvciBVUkwpXG4gIC8vIFVSTHMgYXJlIFtBTlQtT05MWV1cbiAgaWYgKG9wdGlvbnMucmVzdW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZXN1bWVfcHJpbnQnLCB7fSlcblxuICAgICAgLy8gSW4gcHJpbnQgbW9kZSAtIHdlIHJlcXVpcmUgYSB2YWxpZCBzZXNzaW9uIElELCBKU09OTCBmaWxlIG9yIFVSTFxuICAgICAgY29uc3QgcGFyc2VkU2Vzc2lvbklkID0gcGFyc2VTZXNzaW9uSWRlbnRpZmllcihcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMucmVzdW1lID09PSAnc3RyaW5nJyA/IG9wdGlvbnMucmVzdW1lIDogJycsXG4gICAgICApXG4gICAgICBpZiAoIXBhcnNlZFNlc3Npb25JZCkge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgICAnRXJyb3I6IC0tcmVzdW1lIHJlcXVpcmVzIGEgdmFsaWQgc2Vzc2lvbiBJRCB3aGVuIHVzZWQgd2l0aCAtLXByaW50LiBVc2FnZTogY2xhdWRlIC1wIC0tcmVzdW1lIDxzZXNzaW9uLWlkPidcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlc3VtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYC4gU2Vzc2lvbiBJRHMgbXVzdCBiZSBpbiBVVUlEIGZvcm1hdCAoZS5nLiwgNTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwKS4gUHJvdmlkZWQgdmFsdWUgXCIke29wdGlvbnMucmVzdW1lfVwiIGlzIG5vdCBhIHZhbGlkIFVVSURgXG4gICAgICAgIH1cbiAgICAgICAgZW1pdExvYWRFcnJvcihlcnJvck1lc3NhZ2UsIG9wdGlvbnMub3V0cHV0Rm9ybWF0KVxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlczogW10gfVxuICAgICAgfVxuXG4gICAgICAvLyBIeWRyYXRlIGxvY2FsIHRyYW5zY3JpcHQgZnJvbSByZW1vdGUgYmVmb3JlIGxvYWRpbmdcbiAgICAgIGlmIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfQ0NSX1YyKSkge1xuICAgICAgICAvLyBBd2FpdCByZXN0b3JlIGFsb25nc2lkZSBoeWRyYXRpb24gc28gU1NFIGNhdGNodXAgbGFuZHMgb25cbiAgICAgICAgLy8gcmVzdG9yZWQgc3RhdGUsIG5vdCBhIGZyZXNoIGRlZmF1bHQuXG4gICAgICAgIGNvbnN0IFssIG1ldGFkYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBoeWRyYXRlRnJvbUNDUnYySW50ZXJuYWxFdmVudHMocGFyc2VkU2Vzc2lvbklkLnNlc3Npb25JZCksXG4gICAgICAgICAgb3B0aW9ucy5yZXN0b3JlZFdvcmtlclN0YXRlLFxuICAgICAgICBdKVxuICAgICAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgICBzZXRBcHBTdGF0ZShleHRlcm5hbE1ldGFkYXRhVG9BcHBTdGF0ZShtZXRhZGF0YSkpXG4gICAgICAgICAgaWYgKHR5cGVvZiBtZXRhZGF0YS5tb2RlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHNldE1haW5Mb29wTW9kZWxPdmVycmlkZShtZXRhZGF0YS5tb2RlbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHBhcnNlZFNlc3Npb25JZC5pc1VybCAmJlxuICAgICAgICBwYXJzZWRTZXNzaW9uSWQuaW5ncmVzc1VybCAmJlxuICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5FTkFCTEVfU0VTU0lPTl9QRVJTSVNURU5DRSlcbiAgICAgICkge1xuICAgICAgICAvLyB2MTogZmV0Y2ggc2Vzc2lvbiBsb2dzIGZyb20gU2Vzc2lvbiBJbmdyZXNzXG4gICAgICAgIGF3YWl0IGh5ZHJhdGVSZW1vdGVTZXNzaW9uKFxuICAgICAgICAgIHBhcnNlZFNlc3Npb25JZC5zZXNzaW9uSWQsXG4gICAgICAgICAgcGFyc2VkU2Vzc2lvbklkLmluZ3Jlc3NVcmwsXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gTG9hZCB0aGUgY29udmVyc2F0aW9uIHdpdGggdGhlIHNwZWNpZmllZCBzZXNzaW9uIElEXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lKFxuICAgICAgICBwYXJzZWRTZXNzaW9uSWQuc2Vzc2lvbklkLFxuICAgICAgICBwYXJzZWRTZXNzaW9uSWQuanNvbmxGaWxlIHx8IHVuZGVmaW5lZCxcbiAgICAgIClcblxuICAgICAgLy8gaHlkcmF0ZUZyb21DQ1J2MkludGVybmFsRXZlbnRzIHdyaXRlcyBhbiBlbXB0eSB0cmFuc2NyaXB0IGZpbGUgZm9yXG4gICAgICAvLyBmcmVzaCBzZXNzaW9ucyAod3JpdGVGaWxlKHNlc3Npb25GaWxlLCAnJykgd2l0aCB6ZXJvIGV2ZW50cyksIHNvXG4gICAgICAvLyBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lIHJldHVybnMge21lc3NhZ2VzOiBbXX0gbm90IG51bGwuIFRyZWF0XG4gICAgICAvLyBlbXB0eSB0aGUgc2FtZSBhcyBudWxsIHNvIFNlc3Npb25TdGFydCBzdGlsbCBmaXJlcy5cbiAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdC5tZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRm9yIFVSTC1iYXNlZCBvciBDQ1IgdjIgcmVzdW1lLCBzdGFydCB3aXRoIGVtcHR5IHNlc3Npb24gKGl0IHdhcyBoeWRyYXRlZCBidXQgZW1wdHkpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXJzZWRTZXNzaW9uSWQuaXNVcmwgfHxcbiAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfQ0NSX1YyKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBFeGVjdXRlIFNlc3Npb25TdGFydCBob29rcyBmb3Igc3RhcnR1cCBzaW5jZSB3ZSdyZSBzdGFydGluZyBhIG5ldyBzZXNzaW9uXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBhd2FpdCAob3B0aW9ucy5zZXNzaW9uU3RhcnRIb29rc1Byb21pc2UgPz9cbiAgICAgICAgICAgICAgcHJvY2Vzc1Nlc3Npb25TdGFydEhvb2tzKCdzdGFydHVwJykpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbWl0TG9hZEVycm9yKFxuICAgICAgICAgICAgYE5vIGNvbnZlcnNhdGlvbiBmb3VuZCB3aXRoIHNlc3Npb24gSUQ6ICR7cGFyc2VkU2Vzc2lvbklkLnNlc3Npb25JZH1gLFxuICAgICAgICAgICAgb3B0aW9ucy5vdXRwdXRGb3JtYXQsXG4gICAgICAgICAgKVxuICAgICAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgcmVzdW1lU2Vzc2lvbkF0IGZlYXR1cmVcbiAgICAgIGlmIChvcHRpb25zLnJlc3VtZVNlc3Npb25BdCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJlc3VsdC5tZXNzYWdlcy5maW5kSW5kZXgoXG4gICAgICAgICAgbSA9PiBtLnV1aWQgPT09IG9wdGlvbnMucmVzdW1lU2Vzc2lvbkF0LFxuICAgICAgICApXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBlbWl0TG9hZEVycm9yKFxuICAgICAgICAgICAgYE5vIG1lc3NhZ2UgZm91bmQgd2l0aCBtZXNzYWdlLnV1aWQgb2Y6ICR7b3B0aW9ucy5yZXN1bWVTZXNzaW9uQXR9YCxcbiAgICAgICAgICAgIG9wdGlvbnMub3V0cHV0Rm9ybWF0LFxuICAgICAgICAgIClcbiAgICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBbXSB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQubWVzc2FnZXMgPSBpbmRleCA+PSAwID8gcmVzdWx0Lm1lc3NhZ2VzLnNsaWNlKDAsIGluZGV4ICsgMSkgOiBbXVxuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCBjb29yZGluYXRvciBtb2RlIHRvIHRoZSByZXN1bWVkIHNlc3Npb24ncyBtb2RlXG4gICAgICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpICYmIGNvb3JkaW5hdG9yTW9kZU1vZHVsZSkge1xuICAgICAgICBjb25zdCB3YXJuaW5nID0gY29vcmRpbmF0b3JNb2RlTW9kdWxlLm1hdGNoU2Vzc2lvbk1vZGUocmVzdWx0Lm1vZGUpXG4gICAgICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUod2FybmluZyArICdcXG4nKVxuICAgICAgICAgIC8vIFJlZnJlc2ggYWdlbnQgZGVmaW5pdGlvbnMgdG8gcmVmbGVjdCB0aGUgbW9kZSBzd2l0Y2hcbiAgICAgICAgICBjb25zdCB7IGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzLCBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdCB9ID1cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgICAgICAgICByZXF1aXJlKCcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJylcbiAgICAgICAgICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcy5jYWNoZS5jbGVhcj8uKClcbiAgICAgICAgICBjb25zdCBmcmVzaEFnZW50RGVmcyA9IGF3YWl0IGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzKFxuICAgICAgICAgICAgZ2V0Q3dkKCksXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgLi4uZnJlc2hBZ2VudERlZnMsXG4gICAgICAgICAgICAgIGFsbEFnZW50czogZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzLFxuICAgICAgICAgICAgICBhY3RpdmVBZ2VudHM6IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0KGZyZXNoQWdlbnREZWZzLmFsbEFnZW50cyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJldXNlIHRoZSByZXN1bWVkIHNlc3Npb24ncyBJRFxuICAgICAgaWYgKCFvcHRpb25zLmZvcmtTZXNzaW9uICYmIHJlc3VsdC5zZXNzaW9uSWQpIHtcbiAgICAgICAgc3dpdGNoU2Vzc2lvbihcbiAgICAgICAgICBhc1Nlc3Npb25JZChyZXN1bHQuc2Vzc2lvbklkKSxcbiAgICAgICAgICByZXN1bHQuZnVsbFBhdGggPyBkaXJuYW1lKHJlc3VsdC5mdWxsUGF0aCkgOiBudWxsLFxuICAgICAgICApXG4gICAgICAgIGlmIChwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgICAgIGF3YWl0IHJlc2V0U2Vzc2lvbkZpbGVQb2ludGVyKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdG9yZVNlc3Npb25TdGF0ZUZyb21Mb2cocmVzdWx0LCBzZXRBcHBTdGF0ZSlcblxuICAgICAgLy8gUmVzdG9yZSBzZXNzaW9uIG1ldGFkYXRhIHNvIGl0J3MgcmUtYXBwZW5kZWQgb24gZXhpdCB2aWEgcmVBcHBlbmRTZXNzaW9uTWV0YWRhdGFcbiAgICAgIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEoXG4gICAgICAgIG9wdGlvbnMuZm9ya1Nlc3Npb25cbiAgICAgICAgICA/IHsgLi4ucmVzdWx0LCB3b3JrdHJlZVNlc3Npb246IHVuZGVmaW5lZCB9XG4gICAgICAgICAgOiByZXN1bHQsXG4gICAgICApXG5cbiAgICAgIC8vIFdyaXRlIG1vZGUgZW50cnkgZm9yIHRoZSByZXN1bWVkIHNlc3Npb25cbiAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykgJiYgY29vcmRpbmF0b3JNb2RlTW9kdWxlKSB7XG4gICAgICAgIHNhdmVNb2RlKFxuICAgICAgICAgIGNvb3JkaW5hdG9yTW9kZU1vZHVsZS5pc0Nvb3JkaW5hdG9yTW9kZSgpID8gJ2Nvb3JkaW5hdG9yJyA6ICdub3JtYWwnLFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiByZXN1bHQubWVzc2FnZXMsXG4gICAgICAgIHR1cm5JbnRlcnJ1cHRpb25TdGF0ZTogcmVzdWx0LnR1cm5JbnRlcnJ1cHRpb25TdGF0ZSxcbiAgICAgICAgYWdlbnRTZXR0aW5nOiByZXN1bHQuYWdlbnRTZXR0aW5nLFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dFcnJvcihlcnJvcilcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICA/IGBGYWlsZWQgdG8gcmVzdW1lIHNlc3Npb246ICR7ZXJyb3IubWVzc2FnZX1gXG4gICAgICAgICAgOiAnRmFpbGVkIHRvIHJlc3VtZSBzZXNzaW9uIHdpdGggLS1wcmludCBtb2RlJ1xuICAgICAgZW1pdExvYWRFcnJvcihlcnJvck1lc3NhZ2UsIG9wdGlvbnMub3V0cHV0Rm9ybWF0KVxuICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBbXSB9XG4gICAgfVxuICB9XG5cbiAgLy8gSm9pbiB0aGUgU2Vzc2lvblN0YXJ0IGhvb2tzIHByb21pc2Uga2lja2VkIGluIG1haW4udHN4IChvciBydW4gZnJlc2ggaWZcbiAgLy8gaXQgd2Fzbid0IGtpY2tlZCBcdTIwMTQgZS5nLiAtLWNvbnRpbnVlIHdpdGggbm8gcHJpb3Igc2Vzc2lvbiBmYWxscyB0aHJvdWdoXG4gIC8vIGhlcmUgd2l0aCBzZXNzaW9uU3RhcnRIb29rc1Byb21pc2UgdW5kZWZpbmVkIGJlY2F1c2UgbWFpbi50c3ggZ3VhcmRzIG9uIGNvbnRpbnVlKVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBhd2FpdCAob3B0aW9ucy5zZXNzaW9uU3RhcnRIb29rc1Byb21pc2UgPz9cbiAgICAgIHByb2Nlc3NTZXNzaW9uU3RhcnRIb29rcygnc3RhcnR1cCcpKSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkSU8oXG4gIGlucHV0UHJvbXB0OiBzdHJpbmcgfCBBc3luY0l0ZXJhYmxlPHN0cmluZz4sXG4gIG9wdGlvbnM6IHtcbiAgICBzZGtVcmw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHJlcGxheVVzZXJNZXNzYWdlcz86IGJvb2xlYW5cbiAgfSxcbik6IFN0cnVjdHVyZWRJTyB7XG4gIGxldCBpbnB1dFN0cmVhbTogQXN5bmNJdGVyYWJsZTxzdHJpbmc+XG4gIGlmICh0eXBlb2YgaW5wdXRQcm9tcHQgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlucHV0UHJvbXB0LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSB0byBhIHN0cmVhbWluZyBpbnB1dC5cbiAgICAgIGlucHV0U3RyZWFtID0gZnJvbUFycmF5KFtcbiAgICAgICAganNvblN0cmluZ2lmeSh7XG4gICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgIHNlc3Npb25faWQ6ICcnLFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGlucHV0UHJvbXB0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICB9IHNhdGlzZmllcyBTREtVc2VyTWVzc2FnZSksXG4gICAgICBdKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFbXB0eSBzdHJpbmcgLSBjcmVhdGUgZW1wdHkgc3RyZWFtXG4gICAgICBpbnB1dFN0cmVhbSA9IGZyb21BcnJheShbXSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXRTdHJlYW0gPSBpbnB1dFByb21wdFxuICB9XG5cbiAgLy8gVXNlIFJlbW90ZUlPIGlmIHNka1VybCBpcyBwcm92aWRlZCwgb3RoZXJ3aXNlIHVzZSByZWd1bGFyIFN0cnVjdHVyZWRJT1xuICByZXR1cm4gb3B0aW9ucy5zZGtVcmxcbiAgICA/IG5ldyBSZW1vdGVJTyhvcHRpb25zLnNka1VybCwgaW5wdXRTdHJlYW0sIG9wdGlvbnMucmVwbGF5VXNlck1lc3NhZ2VzKVxuICAgIDogbmV3IFN0cnVjdHVyZWRJTyhpbnB1dFN0cmVhbSwgb3B0aW9ucy5yZXBsYXlVc2VyTWVzc2FnZXMpXG59XG5cbi8qKlxuICogSGFuZGxlcyB1bmV4cGVjdGVkIHBlcm1pc3Npb24gcmVzcG9uc2VzIGJ5IGxvb2tpbmcgdXAgdGhlIHVucmVzb2x2ZWQgdG9vbFxuICogY2FsbCBpbiB0aGUgdHJhbnNjcmlwdCBhbmQgZW5xdWV1aW5nIGl0IGZvciBleGVjdXRpb24uXG4gKlxuICogUmV0dXJucyB0cnVlIGlmIGEgcGVybWlzc2lvbiB3YXMgZW5xdWV1ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvblJlc3BvbnNlKHtcbiAgbWVzc2FnZSxcbiAgc2V0QXBwU3RhdGUsXG4gIG9uRW5xdWV1ZWQsXG4gIGhhbmRsZWRUb29sVXNlSWRzLFxufToge1xuICBtZXNzYWdlOiBTREtDb250cm9sUmVzcG9uc2VcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkXG4gIG9uRW5xdWV1ZWQ/OiAoKSA9PiB2b2lkXG4gIGhhbmRsZWRUb29sVXNlSWRzOiBTZXQ8c3RyaW5nPlxufSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBpZiAoXG4gICAgbWVzc2FnZS5yZXNwb25zZS5zdWJ0eXBlID09PSAnc3VjY2VzcycgJiZcbiAgICBtZXNzYWdlLnJlc3BvbnNlLnJlc3BvbnNlPy50b29sVXNlSUQgJiZcbiAgICB0eXBlb2YgbWVzc2FnZS5yZXNwb25zZS5yZXNwb25zZS50b29sVXNlSUQgPT09ICdzdHJpbmcnXG4gICkge1xuICAgIGNvbnN0IHBlcm1pc3Npb25SZXN1bHQgPSBtZXNzYWdlLnJlc3BvbnNlLnJlc3BvbnNlIGFzIFBlcm1pc3Npb25SZXN1bHRcbiAgICBjb25zdCB7IHRvb2xVc2VJRCB9ID0gcGVybWlzc2lvblJlc3VsdFxuICAgIGlmICghdG9vbFVzZUlEKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgaGFuZGxlT3JwaGFuZWRQZXJtaXNzaW9uUmVzcG9uc2U6IHJlY2VpdmVkIG9ycGhhbmVkIGNvbnRyb2xfcmVzcG9uc2UgZm9yIHRvb2xVc2VJRD0ke3Rvb2xVc2VJRH0gcmVxdWVzdF9pZD0ke21lc3NhZ2UucmVzcG9uc2UucmVxdWVzdF9pZH1gLFxuICAgIClcblxuICAgIC8vIFByZXZlbnQgcmUtcHJvY2Vzc2luZyB0aGUgc2FtZSBvcnBoYW5lZCB0b29sX3VzZS4gV2l0aG91dCB0aGlzIGd1YXJkLFxuICAgIC8vIGR1cGxpY2F0ZSBjb250cm9sX3Jlc3BvbnNlIGRlbGl2ZXJpZXMgKGUuZy4gZnJvbSBXZWJTb2NrZXQgcmVjb25uZWN0KVxuICAgIC8vIGNhdXNlIHRoZSBzYW1lIHRvb2wgdG8gYmUgZXhlY3V0ZWQgbXVsdGlwbGUgdGltZXMsIHByb2R1Y2luZyBkdXBsaWNhdGVcbiAgICAvLyB0b29sX3VzZSBJRHMgaW4gdGhlIG1lc3NhZ2VzIGFycmF5IGFuZCBhIDQwMCBlcnJvciBmcm9tIHRoZSBBUEkuXG4gICAgLy8gT25jZSBjb3JydXB0ZWQsIGV2ZXJ5IHJldHJ5IGFjY3VtdWxhdGVzIG1vcmUgZHVwbGljYXRlcy5cbiAgICBpZiAoaGFuZGxlZFRvb2xVc2VJZHMuaGFzKHRvb2xVc2VJRCkpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvblJlc3BvbnNlOiBza2lwcGluZyBkdXBsaWNhdGUgb3JwaGFuZWQgcGVybWlzc2lvbiBmb3IgdG9vbFVzZUlEPSR7dG9vbFVzZUlEfSAoYWxyZWFkeSBoYW5kbGVkKWAsXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBhc3Npc3RhbnRNZXNzYWdlID0gYXdhaXQgZmluZFVucmVzb2x2ZWRUb29sVXNlKHRvb2xVc2VJRClcbiAgICBpZiAoIWFzc2lzdGFudE1lc3NhZ2UpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvblJlc3BvbnNlOiBubyB1bnJlc29sdmVkIHRvb2xfdXNlIGZvdW5kIGZvciB0b29sVXNlSUQ9JHt0b29sVXNlSUR9IChhbHJlYWR5IHJlc29sdmVkIGluIHRyYW5zY3JpcHQpYCxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGhhbmRsZWRUb29sVXNlSWRzLmFkZCh0b29sVXNlSUQpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvblJlc3BvbnNlOiBlbnF1ZXVpbmcgb3JwaGFuZWQgcGVybWlzc2lvbiBmb3IgdG9vbFVzZUlEPSR7dG9vbFVzZUlEfSBtZXNzYWdlSUQ9JHthc3Npc3RhbnRNZXNzYWdlLm1lc3NhZ2UuaWR9YCxcbiAgICApXG4gICAgZW5xdWV1ZSh7XG4gICAgICBtb2RlOiAnb3JwaGFuZWQtcGVybWlzc2lvbicgYXMgY29uc3QsXG4gICAgICB2YWx1ZTogW10sXG4gICAgICBvcnBoYW5lZFBlcm1pc3Npb246IHtcbiAgICAgICAgcGVybWlzc2lvblJlc3VsdCxcbiAgICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIG9uRW5xdWV1ZWQ/LigpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgRHluYW1pY01jcFN0YXRlID0ge1xuICBjbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW11cbiAgdG9vbHM6IFRvb2xzXG4gIGNvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz5cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHByb2Nlc3MgdHJhbnNwb3J0IGNvbmZpZyB0byBhIHNjb3BlZCBjb25maWcuXG4gKiBUaGUgdHlwZXMgYXJlIHN0cnVjdHVyYWxseSBjb21wYXRpYmxlLCBzbyB3ZSBqdXN0IGFkZCB0aGUgc2NvcGUuXG4gKi9cbmZ1bmN0aW9uIHRvU2NvcGVkQ29uZmlnKFxuICBjb25maWc6IE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQsXG4pOiBTY29wZWRNY3BTZXJ2ZXJDb25maWcge1xuICAvLyBNY3BTZXJ2ZXJDb25maWdGb3JQcm9jZXNzVHJhbnNwb3J0IGlzIGEgc3Vic2V0IG9mIE1jcFNlcnZlckNvbmZpZ1xuICAvLyAoaXQgZXhjbHVkZXMgSURFLXNwZWNpZmljIHR5cGVzIGxpa2Ugc3NlLWlkZSBhbmQgd3MtaWRlKVxuICAvLyBBZGRpbmcgc2NvcGUgbWFrZXMgaXQgYSB2YWxpZCBTY29wZWRNY3BTZXJ2ZXJDb25maWdcbiAgcmV0dXJuIHsgLi4uY29uZmlnLCBzY29wZTogJ2R5bmFtaWMnIH0gYXMgU2NvcGVkTWNwU2VydmVyQ29uZmlnXG59XG5cbi8qKlxuICogU3RhdGUgZm9yIFNESyBNQ1Agc2VydmVycyB0aGF0IHJ1biBpbiB0aGUgU0RLIHByb2Nlc3MuXG4gKi9cbmV4cG9ydCB0eXBlIFNka01jcFN0YXRlID0ge1xuICBjb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZGtTZXJ2ZXJDb25maWc+XG4gIGNsaWVudHM6IE1DUFNlcnZlckNvbm5lY3Rpb25bXVxuICB0b29sczogVG9vbHNcbn1cblxuLyoqXG4gKiBSZXN1bHQgb2YgaGFuZGxlTWNwU2V0U2VydmVycyAtIGNvbnRhaW5zIG5ldyBzdGF0ZSBhbmQgcmVzcG9uc2UgZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgTWNwU2V0U2VydmVyc1Jlc3VsdCA9IHtcbiAgcmVzcG9uc2U6IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VcbiAgbmV3U2RrU3RhdGU6IFNka01jcFN0YXRlXG4gIG5ld0R5bmFtaWNTdGF0ZTogRHluYW1pY01jcFN0YXRlXG4gIHNka1NlcnZlcnNDaGFuZ2VkOiBib29sZWFuXG59XG5cbi8qKlxuICogSGFuZGxlcyBtY3Bfc2V0X3NlcnZlcnMgcmVxdWVzdHMgYnkgcHJvY2Vzc2luZyBib3RoIFNESyBhbmQgcHJvY2Vzcy1iYXNlZCBzZXJ2ZXJzLlxuICogU0RLIHNlcnZlcnMgcnVuIGluIHRoZSBTREsgcHJvY2VzczsgcHJvY2Vzcy1iYXNlZCBzZXJ2ZXJzIGFyZSBzcGF3bmVkIGJ5IHRoZSBDTEkuXG4gKlxuICogQXBwbGllcyBlbnRlcnByaXNlIGFsbG93ZWRNY3BTZXJ2ZXJzL2RlbmllZE1jcFNlcnZlcnMgcG9saWN5IFx1MjAxNCBzYW1lIGZpbHRlciBhc1xuICogLS1tY3AtY29uZmlnIChzZWUgZmlsdGVyTWNwU2VydmVyc0J5UG9saWN5IGNhbGwgaW4gbWFpbi50c3gpLiBXaXRob3V0IHRoaXMsXG4gKiBTREsgVjIgUXVlcnkuc2V0TWNwU2VydmVycygpIHdhcyBhIHNlY29uZCBwb2xpY3kgYnlwYXNzIHZlY3Rvci4gQmxvY2tlZCBzZXJ2ZXJzXG4gKiBhcmUgcmVwb3J0ZWQgaW4gcmVzcG9uc2UuZXJyb3JzIHNvIHRoZSBTREsgY29uc3VtZXIga25vd3Mgd2h5IHRoZXkgd2VyZW4ndCBhZGRlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1jcFNldFNlcnZlcnMoXG4gIHNlcnZlcnM6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQ+LFxuICBzZGtTdGF0ZTogU2RrTWNwU3RhdGUsXG4gIGR5bmFtaWNTdGF0ZTogRHluYW1pY01jcFN0YXRlLFxuICBzZXRBcHBTdGF0ZTogKGY6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWQsXG4pOiBQcm9taXNlPE1jcFNldFNlcnZlcnNSZXN1bHQ+IHtcbiAgLy8gRW5mb3JjZSBlbnRlcnByaXNlIE1DUCBwb2xpY3kgb24gcHJvY2Vzcy1iYXNlZCBzZXJ2ZXJzIChzdGRpby9odHRwL3NzZSkuXG4gIC8vIE1pcnJvcnMgdGhlIC0tbWNwLWNvbmZpZyBmaWx0ZXIgaW4gbWFpbi50c3ggXHUyMDE0IGJvdGggdXNlci1jb250cm9sbGVkIGluamVjdGlvblxuICAvLyBwYXRocyBtdXN0IGhhdmUgdGhlIHNhbWUgZ2F0ZS4gdHlwZTonc2RrJyBzZXJ2ZXJzIGFyZSBleGVtcHQgKFNESy1tYW5hZ2VkLFxuICAvLyBDTEkgbmV2ZXIgc3Bhd25zL2Nvbm5lY3RzIGZvciB0aGVtIFx1MjAxNCBzZWUgZmlsdGVyTWNwU2VydmVyc0J5UG9saWN5IGpzZG9jKS5cbiAgLy8gQmxvY2tlZCBzZXJ2ZXJzIGdvIGludG8gcmVzcG9uc2UuZXJyb3JzIHNvIHRoZSBTREsgY2FsbGVyIHNlZXMgd2h5LlxuICBjb25zdCB7IGFsbG93ZWQ6IGFsbG93ZWRTZXJ2ZXJzLCBibG9ja2VkIH0gPSBmaWx0ZXJNY3BTZXJ2ZXJzQnlQb2xpY3koc2VydmVycylcbiAgY29uc3QgcG9saWN5RXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgZm9yIChjb25zdCBuYW1lIG9mIGJsb2NrZWQpIHtcbiAgICBwb2xpY3lFcnJvcnNbbmFtZV0gPVxuICAgICAgJ0Jsb2NrZWQgYnkgZW50ZXJwcmlzZSBwb2xpY3kgKGFsbG93ZWRNY3BTZXJ2ZXJzL2RlbmllZE1jcFNlcnZlcnMpJ1xuICB9XG5cbiAgLy8gU2VwYXJhdGUgU0RLIHNlcnZlcnMgZnJvbSBwcm9jZXNzLWJhc2VkIHNlcnZlcnNcbiAgY29uc3Qgc2RrU2VydmVyczogUmVjb3JkPHN0cmluZywgTWNwU2RrU2VydmVyQ29uZmlnPiA9IHt9XG4gIGNvbnN0IHByb2Nlc3NTZXJ2ZXJzOiBSZWNvcmQ8c3RyaW5nLCBNY3BTZXJ2ZXJDb25maWdGb3JQcm9jZXNzVHJhbnNwb3J0PiA9IHt9XG5cbiAgZm9yIChjb25zdCBbbmFtZSwgY29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhhbGxvd2VkU2VydmVycykpIHtcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdzZGsnKSB7XG4gICAgICBzZGtTZXJ2ZXJzW25hbWVdID0gY29uZmlnXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3NTZXJ2ZXJzW25hbWVdID0gY29uZmlnXG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIFNESyBzZXJ2ZXJzXG4gIGNvbnN0IGN1cnJlbnRTZGtOYW1lcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoc2RrU3RhdGUuY29uZmlncykpXG4gIGNvbnN0IG5ld1Nka05hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhzZGtTZXJ2ZXJzKSlcbiAgY29uc3Qgc2RrQWRkZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3Qgc2RrUmVtb3ZlZDogc3RyaW5nW10gPSBbXVxuXG4gIGNvbnN0IG5ld1Nka0NvbmZpZ3MgPSB7IC4uLnNka1N0YXRlLmNvbmZpZ3MgfVxuICBsZXQgbmV3U2RrQ2xpZW50cyA9IFsuLi5zZGtTdGF0ZS5jbGllbnRzXVxuICBsZXQgbmV3U2RrVG9vbHMgPSBbLi4uc2RrU3RhdGUudG9vbHNdXG5cbiAgLy8gUmVtb3ZlIFNESyBzZXJ2ZXJzIG5vIGxvbmdlciBpbiBkZXNpcmVkIHN0YXRlXG4gIGZvciAoY29uc3QgbmFtZSBvZiBjdXJyZW50U2RrTmFtZXMpIHtcbiAgICBpZiAoIW5ld1Nka05hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3U2RrQ2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBuYW1lKVxuICAgICAgaWYgKGNsaWVudCAmJiBjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFudXAoKVxuICAgICAgfVxuICAgICAgbmV3U2RrQ2xpZW50cyA9IG5ld1Nka0NsaWVudHMuZmlsdGVyKGMgPT4gYy5uYW1lICE9PSBuYW1lKVxuICAgICAgY29uc3QgcHJlZml4ID0gYG1jcF9fJHtuYW1lfV9fYFxuICAgICAgbmV3U2RrVG9vbHMgPSBuZXdTZGtUb29scy5maWx0ZXIodCA9PiAhdC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4KSlcbiAgICAgIGRlbGV0ZSBuZXdTZGtDb25maWdzW25hbWVdXG4gICAgICBzZGtSZW1vdmVkLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgbmV3IFNESyBzZXJ2ZXJzIGFzIHBlbmRpbmcgLSB0aGV5J2xsIGJlIHVwZ3JhZGVkIHRvIGNvbm5lY3RlZFxuICAvLyB3aGVuIHVwZGF0ZVNka01jcCgpIHJ1bnMgb24gdGhlIG5leHQgcXVlcnlcbiAgZm9yIChjb25zdCBbbmFtZSwgY29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzZGtTZXJ2ZXJzKSkge1xuICAgIGlmICghY3VycmVudFNka05hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgbmV3U2RrQ29uZmlnc1tuYW1lXSA9IGNvbmZpZ1xuICAgICAgY29uc3QgcGVuZGluZ0NsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ3BlbmRpbmcnLFxuICAgICAgICBuYW1lLFxuICAgICAgICBjb25maWc6IHsgLi4uY29uZmlnLCBzY29wZTogJ2R5bmFtaWMnIGFzIGNvbnN0IH0sXG4gICAgICB9XG4gICAgICBuZXdTZGtDbGllbnRzID0gWy4uLm5ld1Nka0NsaWVudHMsIHBlbmRpbmdDbGllbnRdXG4gICAgICBzZGtBZGRlZC5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIHByb2Nlc3MtYmFzZWQgc2VydmVyc1xuICBjb25zdCBwcm9jZXNzUmVzdWx0ID0gYXdhaXQgcmVjb25jaWxlTWNwU2VydmVycyhcbiAgICBwcm9jZXNzU2VydmVycyxcbiAgICBkeW5hbWljU3RhdGUsXG4gICAgc2V0QXBwU3RhdGUsXG4gIClcblxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlOiB7XG4gICAgICBhZGRlZDogWy4uLnNka0FkZGVkLCAuLi5wcm9jZXNzUmVzdWx0LnJlc3BvbnNlLmFkZGVkXSxcbiAgICAgIHJlbW92ZWQ6IFsuLi5zZGtSZW1vdmVkLCAuLi5wcm9jZXNzUmVzdWx0LnJlc3BvbnNlLnJlbW92ZWRdLFxuICAgICAgZXJyb3JzOiB7IC4uLnBvbGljeUVycm9ycywgLi4ucHJvY2Vzc1Jlc3VsdC5yZXNwb25zZS5lcnJvcnMgfSxcbiAgICB9LFxuICAgIG5ld1Nka1N0YXRlOiB7XG4gICAgICBjb25maWdzOiBuZXdTZGtDb25maWdzLFxuICAgICAgY2xpZW50czogbmV3U2RrQ2xpZW50cyxcbiAgICAgIHRvb2xzOiBuZXdTZGtUb29scyxcbiAgICB9LFxuICAgIG5ld0R5bmFtaWNTdGF0ZTogcHJvY2Vzc1Jlc3VsdC5uZXdTdGF0ZSxcbiAgICBzZGtTZXJ2ZXJzQ2hhbmdlZDogc2RrQWRkZWQubGVuZ3RoID4gMCB8fCBzZGtSZW1vdmVkLmxlbmd0aCA+IDAsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNvbmNpbGVzIHRoZSBjdXJyZW50IHNldCBvZiBkeW5hbWljIE1DUCBzZXJ2ZXJzIHdpdGggYSBuZXcgZGVzaXJlZCBzdGF0ZS5cbiAqIEhhbmRsZXMgYWRkaXRpb25zLCByZW1vdmFscywgYW5kIGNvbmZpZyBjaGFuZ2VzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVjb25jaWxlTWNwU2VydmVycyhcbiAgZGVzaXJlZENvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnQ+LFxuICBjdXJyZW50U3RhdGU6IER5bmFtaWNNY3BTdGF0ZSxcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuKTogUHJvbWlzZTx7XG4gIHJlc3BvbnNlOiBTREtDb250cm9sTWNwU2V0U2VydmVyc1Jlc3BvbnNlXG4gIG5ld1N0YXRlOiBEeW5hbWljTWNwU3RhdGVcbn0+IHtcbiAgY29uc3QgY3VycmVudE5hbWVzID0gbmV3IFNldChPYmplY3Qua2V5cyhjdXJyZW50U3RhdGUuY29uZmlncykpXG4gIGNvbnN0IGRlc2lyZWROYW1lcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoZGVzaXJlZENvbmZpZ3MpKVxuXG4gIGNvbnN0IHRvUmVtb3ZlID0gWy4uLmN1cnJlbnROYW1lc10uZmlsdGVyKG4gPT4gIWRlc2lyZWROYW1lcy5oYXMobikpXG4gIGNvbnN0IHRvQWRkID0gWy4uLmRlc2lyZWROYW1lc10uZmlsdGVyKG4gPT4gIWN1cnJlbnROYW1lcy5oYXMobikpXG5cbiAgLy8gQ2hlY2sgZm9yIGNvbmZpZyBjaGFuZ2VzIChzYW1lIG5hbWUsIGRpZmZlcmVudCBjb25maWcpXG4gIGNvbnN0IHRvQ2hlY2sgPSBbLi4uY3VycmVudE5hbWVzXS5maWx0ZXIobiA9PiBkZXNpcmVkTmFtZXMuaGFzKG4pKVxuICBjb25zdCB0b1JlcGxhY2UgPSB0b0NoZWNrLmZpbHRlcihuYW1lID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudFN0YXRlLmNvbmZpZ3NbbmFtZV1cbiAgICBjb25zdCBkZXNpcmVkQ29uZmlnUmF3ID0gZGVzaXJlZENvbmZpZ3NbbmFtZV1cbiAgICBpZiAoIWN1cnJlbnRDb25maWcgfHwgIWRlc2lyZWRDb25maWdSYXcpIHJldHVybiB0cnVlXG4gICAgY29uc3QgZGVzaXJlZENvbmZpZyA9IHRvU2NvcGVkQ29uZmlnKGRlc2lyZWRDb25maWdSYXcpXG4gICAgcmV0dXJuICFhcmVNY3BDb25maWdzRXF1YWwoY3VycmVudENvbmZpZywgZGVzaXJlZENvbmZpZylcbiAgfSlcblxuICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGFkZGVkOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGVycm9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG5cbiAgbGV0IG5ld0NsaWVudHMgPSBbLi4uY3VycmVudFN0YXRlLmNsaWVudHNdXG4gIGxldCBuZXdUb29scyA9IFsuLi5jdXJyZW50U3RhdGUudG9vbHNdXG5cbiAgLy8gUmVtb3ZlIG9sZCBzZXJ2ZXJzIChpbmNsdWRpbmcgb25lcyBiZWluZyByZXBsYWNlZClcbiAgZm9yIChjb25zdCBuYW1lIG9mIFsuLi50b1JlbW92ZSwgLi4udG9SZXBsYWNlXSkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ld0NsaWVudHMuZmluZChjID0+IGMubmFtZSA9PT0gbmFtZSlcbiAgICBjb25zdCBjb25maWcgPSBjdXJyZW50U3RhdGUuY29uZmlnc1tuYW1lXVxuICAgIGlmIChjbGllbnQgJiYgY29uZmlnKSB7XG4gICAgICBpZiAoY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFudXAoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nRXJyb3IoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQ2xlYXIgdGhlIG1lbW9pemF0aW9uIGNhY2hlXG4gICAgICBhd2FpdCBjbGVhclNlcnZlckNhY2hlKG5hbWUsIGNvbmZpZylcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdG9vbHMgZnJvbSB0aGlzIHNlcnZlclxuICAgIGNvbnN0IHByZWZpeCA9IGBtY3BfXyR7bmFtZX1fX2BcbiAgICBuZXdUb29scyA9IG5ld1Rvb2xzLmZpbHRlcih0ID0+ICF0Lm5hbWUuc3RhcnRzV2l0aChwcmVmaXgpKVxuXG4gICAgLy8gUmVtb3ZlIGZyb20gY2xpZW50cyBsaXN0XG4gICAgbmV3Q2xpZW50cyA9IG5ld0NsaWVudHMuZmlsdGVyKGMgPT4gYy5uYW1lICE9PSBuYW1lKVxuXG4gICAgLy8gVHJhY2sgcmVtb3ZhbCAob25seSBmb3IgYWN0dWFsbHkgcmVtb3ZlZCwgbm90IHJlcGxhY2VkKVxuICAgIGlmICh0b1JlbW92ZS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgcmVtb3ZlZC5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG5ldyBzZXJ2ZXJzIChpbmNsdWRpbmcgcmVwbGFjZW1lbnRzKVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgWy4uLnRvQWRkLCAuLi50b1JlcGxhY2VdKSB7XG4gICAgY29uc3QgY29uZmlnID0gZGVzaXJlZENvbmZpZ3NbbmFtZV1cbiAgICBpZiAoIWNvbmZpZykgY29udGludWVcbiAgICBjb25zdCBzY29wZWRDb25maWcgPSB0b1Njb3BlZENvbmZpZyhjb25maWcpXG5cbiAgICAvLyBTREsgc2VydmVycyBhcmUgbWFuYWdlZCBieSB0aGUgU0RLIHByb2Nlc3MsIG5vdCB0aGUgQ0xJLlxuICAgIC8vIEp1c3QgdHJhY2sgdGhlbSB3aXRob3V0IHRyeWluZyB0byBjb25uZWN0LlxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3NkaycpIHtcbiAgICAgIGFkZGVkLnB1c2gobmFtZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb1NlcnZlcihuYW1lLCBzY29wZWRDb25maWcpXG4gICAgICBuZXdDbGllbnRzLnB1c2goY2xpZW50KVxuXG4gICAgICBpZiAoY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgIGNvbnN0IHNlcnZlclRvb2xzID0gYXdhaXQgZmV0Y2hUb29sc0ZvckNsaWVudChjbGllbnQpXG4gICAgICAgIG5ld1Rvb2xzLnB1c2goLi4uc2VydmVyVG9vbHMpXG4gICAgICB9IGVsc2UgaWYgKGNsaWVudC50eXBlID09PSAnZmFpbGVkJykge1xuICAgICAgICBlcnJvcnNbbmFtZV0gPSBjbGllbnQuZXJyb3IgfHwgJ0Nvbm5lY3Rpb24gZmFpbGVkJ1xuICAgICAgfVxuXG4gICAgICBhZGRlZC5wdXNoKG5hbWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyID0gdG9FcnJvcihlKVxuICAgICAgZXJyb3JzW25hbWVdID0gZXJyLm1lc3NhZ2VcbiAgICAgIGxvZ0Vycm9yKGVycilcbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZCBuZXcgY29uZmlnc1xuICBjb25zdCBuZXdDb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBTY29wZWRNY3BTZXJ2ZXJDb25maWc+ID0ge31cbiAgZm9yIChjb25zdCBuYW1lIG9mIGRlc2lyZWROYW1lcykge1xuICAgIGNvbnN0IGNvbmZpZyA9IGRlc2lyZWRDb25maWdzW25hbWVdXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgbmV3Q29uZmlnc1tuYW1lXSA9IHRvU2NvcGVkQ29uZmlnKGNvbmZpZylcbiAgICB9XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZTogRHluYW1pY01jcFN0YXRlID0ge1xuICAgIGNsaWVudHM6IG5ld0NsaWVudHMsXG4gICAgdG9vbHM6IG5ld1Rvb2xzLFxuICAgIGNvbmZpZ3M6IG5ld0NvbmZpZ3MsXG4gIH1cblxuICAvLyBVcGRhdGUgQXBwU3RhdGUgd2l0aCB0aGUgbmV3IHRvb2xzXG4gIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgIC8vIEdldCBhbGwgZHluYW1pYyBzZXJ2ZXIgbmFtZXMgKGN1cnJlbnQgKyBuZXcpXG4gICAgY29uc3QgYWxsRHluYW1pY1NlcnZlck5hbWVzID0gbmV3IFNldChbXG4gICAgICAuLi5PYmplY3Qua2V5cyhjdXJyZW50U3RhdGUuY29uZmlncyksXG4gICAgICAuLi5PYmplY3Qua2V5cyhuZXdDb25maWdzKSxcbiAgICBdKVxuXG4gICAgLy8gUmVtb3ZlIG9sZCBkeW5hbWljIHRvb2xzXG4gICAgY29uc3Qgbm9uRHluYW1pY1Rvb2xzID0gcHJldi5tY3AudG9vbHMuZmlsdGVyKHQgPT4ge1xuICAgICAgZm9yIChjb25zdCBzZXJ2ZXJOYW1lIG9mIGFsbER5bmFtaWNTZXJ2ZXJOYW1lcykge1xuICAgICAgICBpZiAodC5uYW1lLnN0YXJ0c1dpdGgoYG1jcF9fJHtzZXJ2ZXJOYW1lfV9fYCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIG9sZCBkeW5hbWljIGNsaWVudHNcbiAgICBjb25zdCBub25EeW5hbWljQ2xpZW50cyA9IHByZXYubWNwLmNsaWVudHMuZmlsdGVyKGMgPT4ge1xuICAgICAgcmV0dXJuICFhbGxEeW5hbWljU2VydmVyTmFtZXMuaGFzKGMubmFtZSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBtY3A6IHtcbiAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgIHRvb2xzOiBbLi4ubm9uRHluYW1pY1Rvb2xzLCAuLi5uZXdUb29sc10sXG4gICAgICAgIGNsaWVudHM6IFsuLi5ub25EeW5hbWljQ2xpZW50cywgLi4ubmV3Q2xpZW50c10sXG4gICAgICB9LFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlOiB7IGFkZGVkLCByZW1vdmVkLCBlcnJvcnMgfSxcbiAgICBuZXdTdGF0ZSxcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgU3Rkb3V0TWVzc2FnZSB9IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHsgUGFzc1Rocm91Z2ggfSBmcm9tICdzdHJlYW0nXG5pbXBvcnQgeyBVUkwgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBnZXRQb2xsSW50ZXJ2YWxDb25maWcgfSBmcm9tICcuLi9icmlkZ2UvcG9sbENvbmZpZy5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL3V0aWxzL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IHNldENvbW1hbmRMaWZlY3ljbGVMaXN0ZW5lciB9IGZyb20gJy4uL3V0aWxzL2NvbW1hbmRMaWZlY3ljbGUuanMnXG5pbXBvcnQgeyBpc0RlYnVnTW9kZSwgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEaWFnbm9zdGljc05vUElJIH0gZnJvbSAnLi4vdXRpbHMvZGlhZ0xvZ3MuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ3JhY2VmdWxTaHV0ZG93biB9IGZyb20gJy4uL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IHdyaXRlVG9TdGRvdXQgfSBmcm9tICcuLi91dGlscy9wcm9jZXNzLmpzJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4gfSBmcm9tICcuLi91dGlscy9zZXNzaW9uSW5ncmVzc0F1dGguanMnXG5pbXBvcnQge1xuICBzZXRTZXNzaW9uTWV0YWRhdGFDaGFuZ2VkTGlzdGVuZXIsXG4gIHNldFNlc3Npb25TdGF0ZUNoYW5nZWRMaXN0ZW5lcixcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgc2V0SW50ZXJuYWxFdmVudFJlYWRlcixcbiAgc2V0SW50ZXJuYWxFdmVudFdyaXRlcixcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBuZGpzb25TYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9uZGpzb25TYWZlU3RyaW5naWZ5LmpzJ1xuaW1wb3J0IHsgU3RydWN0dXJlZElPIH0gZnJvbSAnLi9zdHJ1Y3R1cmVkSU8uanMnXG5pbXBvcnQgeyBDQ1JDbGllbnQsIENDUkluaXRFcnJvciB9IGZyb20gJy4vdHJhbnNwb3J0cy9jY3JDbGllbnQuanMnXG5pbXBvcnQgeyBTU0VUcmFuc3BvcnQgfSBmcm9tICcuL3RyYW5zcG9ydHMvU1NFVHJhbnNwb3J0LmpzJ1xuaW1wb3J0IHR5cGUgeyBUcmFuc3BvcnQgfSBmcm9tICcuL3RyYW5zcG9ydHMvVHJhbnNwb3J0LmpzJ1xuaW1wb3J0IHsgZ2V0VHJhbnNwb3J0Rm9yVXJsIH0gZnJvbSAnLi90cmFuc3BvcnRzL3RyYW5zcG9ydFV0aWxzLmpzJ1xuXG4vKipcbiAqIEJpZGlyZWN0aW9uYWwgc3RyZWFtaW5nIGZvciBTREsgbW9kZSB3aXRoIHNlc3Npb24gdHJhY2tpbmdcbiAqIFN1cHBvcnRzIFdlYlNvY2tldCB0cmFuc3BvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZUlPIGV4dGVuZHMgU3RydWN0dXJlZElPIHtcbiAgcHJpdmF0ZSB1cmw6IFVSTFxuICBwcml2YXRlIHRyYW5zcG9ydDogVHJhbnNwb3J0XG4gIHByaXZhdGUgaW5wdXRTdHJlYW06IFBhc3NUaHJvdWdoXG4gIHByaXZhdGUgcmVhZG9ubHkgaXNCcmlkZ2U6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHJlYWRvbmx5IGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGNjckNsaWVudDogQ0NSQ2xpZW50IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBrZWVwQWxpdmVUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdHJlYW1Vcmw6IHN0cmluZyxcbiAgICBpbml0aWFsUHJvbXB0PzogQXN5bmNJdGVyYWJsZTxzdHJpbmc+LFxuICAgIHJlcGxheVVzZXJNZXNzYWdlcz86IGJvb2xlYW4sXG4gICkge1xuICAgIGNvbnN0IGlucHV0U3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKHsgZW5jb2Rpbmc6ICd1dGY4JyB9KVxuICAgIHN1cGVyKGlucHV0U3RyZWFtLCByZXBsYXlVc2VyTWVzc2FnZXMpXG4gICAgdGhpcy5pbnB1dFN0cmVhbSA9IGlucHV0U3RyZWFtXG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKHN0cmVhbVVybClcblxuICAgIC8vIFByZXBhcmUgaGVhZGVycyB3aXRoIHNlc3Npb24gdG9rZW4gaWYgYXZhaWxhYmxlXG4gICAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgY29uc3Qgc2Vzc2lvblRva2VuID0gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgIGlmIChzZXNzaW9uVG9rZW4pIHtcbiAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHtzZXNzaW9uVG9rZW59YFxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tyZW1vdGUtaW9dIE5vIHNlc3Npb24gaW5ncmVzcyB0b2tlbiBhdmFpbGFibGUnLCB7XG4gICAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZW52aXJvbm1lbnQgcnVubmVyIHZlcnNpb24gaWYgYXZhaWxhYmxlIChzZXQgYnkgRW52aXJvbm1lbnQgTWFuYWdlcilcbiAgICBjb25zdCBlclZlcnNpb24gPSBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FTlZJUk9OTUVOVF9SVU5ORVJfVkVSU0lPTlxuICAgIGlmIChlclZlcnNpb24pIHtcbiAgICAgIGhlYWRlcnNbJ3gtZW52aXJvbm1lbnQtcnVubmVyLXZlcnNpb24nXSA9IGVyVmVyc2lvblxuICAgIH1cblxuICAgIC8vIFByb3ZpZGUgYSBjYWxsYmFjayB0aGF0IHJlLXJlYWRzIHRoZSBzZXNzaW9uIHRva2VuIGR5bmFtaWNhbGx5LlxuICAgIC8vIFdoZW4gdGhlIHBhcmVudCBwcm9jZXNzIHJlZnJlc2hlcyB0aGUgdG9rZW4gKHZpYSB0b2tlbiBmaWxlIG9yIGVudiB2YXIpLFxuICAgIC8vIHRoZSB0cmFuc3BvcnQgY2FuIHBpY2sgaXQgdXAgb24gcmVjb25uZWN0aW9uLlxuICAgIGNvbnN0IHJlZnJlc2hIZWFkZXJzID0gKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT4ge1xuICAgICAgY29uc3QgaDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgICBjb25zdCBmcmVzaFRva2VuID0gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgICAgaWYgKGZyZXNoVG9rZW4pIHtcbiAgICAgICAgaFsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2ZyZXNoVG9rZW59YFxuICAgICAgfVxuICAgICAgY29uc3QgZnJlc2hFclZlcnNpb24gPSBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FTlZJUk9OTUVOVF9SVU5ORVJfVkVSU0lPTlxuICAgICAgaWYgKGZyZXNoRXJWZXJzaW9uKSB7XG4gICAgICAgIGhbJ3gtZW52aXJvbm1lbnQtcnVubmVyLXZlcnNpb24nXSA9IGZyZXNoRXJWZXJzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gaFxuICAgIH1cblxuICAgIC8vIEdldCBhcHByb3ByaWF0ZSB0cmFuc3BvcnQgYmFzZWQgb24gVVJMIHByb3RvY29sXG4gICAgdGhpcy50cmFuc3BvcnQgPSBnZXRUcmFuc3BvcnRGb3JVcmwoXG4gICAgICB0aGlzLnVybCxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIHJlZnJlc2hIZWFkZXJzLFxuICAgIClcblxuICAgIC8vIFNldCB1cCBkYXRhIGNhbGxiYWNrXG4gICAgdGhpcy5pc0JyaWRnZSA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVklST05NRU5UX0tJTkQgPT09ICdicmlkZ2UnXG4gICAgdGhpcy5pc0RlYnVnID0gaXNEZWJ1Z01vZGUoKVxuICAgIHRoaXMudHJhbnNwb3J0LnNldE9uRGF0YSgoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmlucHV0U3RyZWFtLndyaXRlKGRhdGEpXG4gICAgICBpZiAodGhpcy5pc0JyaWRnZSAmJiB0aGlzLmlzRGVidWcpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChkYXRhLmVuZHNXaXRoKCdcXG4nKSA/IGRhdGEgOiBkYXRhICsgJ1xcbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFNldCB1cCBjbG9zZSBjYWxsYmFjayB0byBoYW5kbGUgY29ubmVjdGlvbiBmYWlsdXJlc1xuICAgIHRoaXMudHJhbnNwb3J0LnNldE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgLy8gRW5kIHRoZSBpbnB1dCBzdHJlYW0gdG8gdHJpZ2dlciBncmFjZWZ1bCBzaHV0ZG93blxuICAgICAgdGhpcy5pbnB1dFN0cmVhbS5lbmQoKVxuICAgIH0pXG5cbiAgICAvLyBJbml0aWFsaXplIENDUiB2MiBjbGllbnQgKGhlYXJ0YmVhdHMsIGVwb2NoLCBzdGF0ZSByZXBvcnRpbmcsIGV2ZW50IHdyaXRlcykuXG4gICAgLy8gVGhlIENDUkNsaWVudCBjb25zdHJ1Y3RvciB3aXJlcyB0aGUgU1NFIHJlY2VpdmVkLWFjayBoYW5kbGVyXG4gICAgLy8gc3luY2hyb25vdXNseSwgc28gbmV3IENDUkNsaWVudCgpIE1VU1QgcnVuIGJlZm9yZSB0cmFuc3BvcnQuY29ubmVjdCgpIFx1MjAxNFxuICAgIC8vIG90aGVyd2lzZSBlYXJseSBTU0UgZnJhbWVzIGhpdCBhbiB1bndpcmVkIG9uRXZlbnRDYWxsYmFjayBhbmQgdGhlaXJcbiAgICAvLyAncmVjZWl2ZWQnIGRlbGl2ZXJ5IGFja3MgYXJlIHNpbGVudGx5IGRyb3BwZWQuXG4gICAgaWYgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1VTRV9DQ1JfVjIpKSB7XG4gICAgICAvLyBDQ1IgdjIgaXMgU1NFK1BPU1QgYnkgZGVmaW5pdGlvbi4gZ2V0VHJhbnNwb3J0Rm9yVXJsIHJldHVybnNcbiAgICAgIC8vIFNTRVRyYW5zcG9ydCB1bmRlciB0aGUgc2FtZSBlbnYgdmFyLCBidXQgdGhlIHR3byBjaGVja3MgbGl2ZSBpblxuICAgICAgLy8gZGlmZmVyZW50IGZpbGVzIFx1MjAxNCBhc3NlcnQgdGhlIGludmFyaWFudCBzbyBhIGZ1dHVyZSBkZWNvdXBsaW5nXG4gICAgICAvLyBmYWlscyBsb3VkbHkgaGVyZSBpbnN0ZWFkIG9mIGNvbmZ1c2luZ2x5IGluc2lkZSBDQ1JDbGllbnQuXG4gICAgICBpZiAoISh0aGlzLnRyYW5zcG9ydCBpbnN0YW5jZW9mIFNTRVRyYW5zcG9ydCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdDQ1IgdjIgcmVxdWlyZXMgU1NFVHJhbnNwb3J0OyBjaGVjayBnZXRUcmFuc3BvcnRGb3JVcmwnLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aGlzLmNjckNsaWVudCA9IG5ldyBDQ1JDbGllbnQodGhpcy50cmFuc3BvcnQsIHRoaXMudXJsKVxuICAgICAgY29uc3QgaW5pdCA9IHRoaXMuY2NyQ2xpZW50LmluaXRpYWxpemUoKVxuICAgICAgdGhpcy5yZXN0b3JlZFdvcmtlclN0YXRlID0gaW5pdC5jYXRjaCgoKSA9PiBudWxsKVxuICAgICAgaW5pdC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dvcmtlcl9saWZlY3ljbGVfaW5pdF9mYWlsZWQnLCB7XG4gICAgICAgICAgcmVhc29uOiBlcnJvciBpbnN0YW5jZW9mIENDUkluaXRFcnJvciA/IGVycm9yLnJlYXNvbiA6ICd1bmtub3duJyxcbiAgICAgICAgfSlcbiAgICAgICAgbG9nRXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKGBDQ1JDbGllbnQgaW5pdGlhbGl6YXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCksXG4gICAgICAgIClcbiAgICAgICAgdm9pZCBncmFjZWZ1bFNodXRkb3duKDEsICdvdGhlcicpXG4gICAgICB9KVxuICAgICAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHRoaXMuY2NyQ2xpZW50Py5jbG9zZSgpKVxuXG4gICAgICAvLyBSZWdpc3RlciBpbnRlcm5hbCBldmVudCB3cml0ZXIgZm9yIHRyYW5zY3JpcHQgcGVyc2lzdGVuY2UuXG4gICAgICAvLyBXaGVuIHNldCwgc2Vzc2lvblN0b3JhZ2Ugd3JpdGVzIHRyYW5zY3JpcHQgbWVzc2FnZXMgYXMgQ0NSIHYyXG4gICAgICAvLyBpbnRlcm5hbCBldmVudHMgaW5zdGVhZCBvZiB2MSBTZXNzaW9uIEluZ3Jlc3MuXG4gICAgICBzZXRJbnRlcm5hbEV2ZW50V3JpdGVyKChldmVudFR5cGUsIHBheWxvYWQsIG9wdGlvbnMpID0+XG4gICAgICAgIHRoaXMuY2NyQ2xpZW50IS53cml0ZUludGVybmFsRXZlbnQoZXZlbnRUeXBlLCBwYXlsb2FkLCBvcHRpb25zKSxcbiAgICAgIClcblxuICAgICAgLy8gUmVnaXN0ZXIgaW50ZXJuYWwgZXZlbnQgcmVhZGVycyBmb3Igc2Vzc2lvbiByZXN1bWUuXG4gICAgICAvLyBXaGVuIHNldCwgaHlkcmF0ZUZyb21DQ1J2MkludGVybmFsRXZlbnRzKCkgY2FuIGZldGNoIGZvcmVncm91bmRcbiAgICAgIC8vIGFuZCBzdWJhZ2VudCBpbnRlcm5hbCBldmVudHMgdG8gcmVjb25zdHJ1Y3QgY29udmVyc2F0aW9uIHN0YXRlLlxuICAgICAgc2V0SW50ZXJuYWxFdmVudFJlYWRlcihcbiAgICAgICAgKCkgPT4gdGhpcy5jY3JDbGllbnQhLnJlYWRJbnRlcm5hbEV2ZW50cygpLFxuICAgICAgICAoKSA9PiB0aGlzLmNjckNsaWVudCEucmVhZFN1YmFnZW50SW50ZXJuYWxFdmVudHMoKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgTElGRUNZQ0xFX1RPX0RFTElWRVJZID0ge1xuICAgICAgICBzdGFydGVkOiAncHJvY2Vzc2luZycsXG4gICAgICAgIGNvbXBsZXRlZDogJ3Byb2Nlc3NlZCcsXG4gICAgICB9IGFzIGNvbnN0XG4gICAgICBzZXRDb21tYW5kTGlmZWN5Y2xlTGlzdGVuZXIoKHV1aWQsIHN0YXRlKSA9PiB7XG4gICAgICAgIHRoaXMuY2NyQ2xpZW50Py5yZXBvcnREZWxpdmVyeSh1dWlkLCBMSUZFQ1lDTEVfVE9fREVMSVZFUllbc3RhdGVdKVxuICAgICAgfSlcbiAgICAgIHNldFNlc3Npb25TdGF0ZUNoYW5nZWRMaXN0ZW5lcigoc3RhdGUsIGRldGFpbHMpID0+IHtcbiAgICAgICAgdGhpcy5jY3JDbGllbnQ/LnJlcG9ydFN0YXRlKHN0YXRlLCBkZXRhaWxzKVxuICAgICAgfSlcbiAgICAgIHNldFNlc3Npb25NZXRhZGF0YUNoYW5nZWRMaXN0ZW5lcihtZXRhZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY2NyQ2xpZW50Py5yZXBvcnRNZXRhZGF0YShtZXRhZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU3RhcnQgY29ubmVjdGlvbiBvbmx5IGFmdGVyIGFsbCBjYWxsYmFja3MgYXJlIHdpcmVkIChzZXRPbkRhdGEgYWJvdmUsXG4gICAgLy8gc2V0T25FdmVudCBpbnNpZGUgbmV3IENDUkNsaWVudCgpIHdoZW4gQ0NSIHYyIGlzIGVuYWJsZWQpLlxuICAgIHZvaWQgdGhpcy50cmFuc3BvcnQuY29ubmVjdCgpXG5cbiAgICAvLyBQdXNoIGEgc2lsZW50IGtlZXBfYWxpdmUgZnJhbWUgb24gYSBmaXhlZCBpbnRlcnZhbCBzbyB1cHN0cmVhbVxuICAgIC8vIHByb3hpZXMgYW5kIHRoZSBzZXNzaW9uLWluZ3Jlc3MgbGF5ZXIgZG9uJ3QgR0MgYW4gb3RoZXJ3aXNlLWlkbGVcbiAgICAvLyByZW1vdGUgY29udHJvbCBzZXNzaW9uLiBUaGUga2VlcF9hbGl2ZSB0eXBlIGlzIGZpbHRlcmVkIGJlZm9yZVxuICAgIC8vIHJlYWNoaW5nIGFueSBjbGllbnQgVUkgKFF1ZXJ5LnRzIGRyb3BzIGl0OyBzdHJ1Y3R1cmVkSU8udHMgZHJvcHMgaXQ7XG4gICAgLy8gd2ViL2lPUy9BbmRyb2lkIG5ldmVyIHNlZSBpdCBpbiB0aGVpciBtZXNzYWdlIGxvb3ApLiBJbnRlcnZhbCBjb21lc1xuICAgIC8vIGZyb20gR3Jvd3RoQm9vayAodGVuZ3VfYnJpZGdlX3BvbGxfaW50ZXJ2YWxfY29uZmlnXG4gICAgLy8gc2Vzc2lvbl9rZWVwYWxpdmVfaW50ZXJ2YWxfdjJfbXMsIGRlZmF1bHQgMTIwcyk7IDAgPSBkaXNhYmxlZC5cbiAgICAvLyBCcmlkZ2Utb25seTogZml4ZXMgRW52b3kgaWRsZSB0aW1lb3V0IG9uIGJyaWRnZS10b3BvbG9neSBzZXNzaW9uc1xuICAgIC8vICgjMjE5MzEpLiBieW9jIHdvcmtlcnMgcmFuIHdpdGhvdXQgdGhpcyBiZWZvcmUgIzIxOTMxIGFuZCBkbyBub3RcbiAgICAvLyBuZWVkIGl0IFx1MjAxNCBkaWZmZXJlbnQgbmV0d29yayBwYXRoLlxuICAgIGNvbnN0IGtlZXBBbGl2ZUludGVydmFsTXMgPVxuICAgICAgZ2V0UG9sbEludGVydmFsQ29uZmlnKCkuc2Vzc2lvbl9rZWVwYWxpdmVfaW50ZXJ2YWxfdjJfbXNcbiAgICBpZiAodGhpcy5pc0JyaWRnZSAmJiBrZWVwQWxpdmVJbnRlcnZhbE1zID4gMCkge1xuICAgICAgdGhpcy5rZWVwQWxpdmVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbcmVtb3RlLWlvXSBrZWVwX2FsaXZlIHNlbnQnKVxuICAgICAgICB2b2lkIHRoaXMud3JpdGUoeyB0eXBlOiAna2VlcF9hbGl2ZScgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW3JlbW90ZS1pb10ga2VlcF9hbGl2ZSB3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9LCBrZWVwQWxpdmVJbnRlcnZhbE1zKVxuICAgICAgdGhpcy5rZWVwQWxpdmVUaW1lci51bnJlZj8uKClcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBmb3IgZ3JhY2VmdWwgc2h1dGRvd24gY2xlYW51cFxuICAgIHJlZ2lzdGVyQ2xlYW51cChhc3luYyAoKSA9PiB0aGlzLmNsb3NlKCkpXG5cbiAgICAvLyBJZiBpbml0aWFsIHByb21wdCBpcyBwcm92aWRlZCwgc2VuZCBpdCB0aHJvdWdoIHRoZSBpbnB1dCBzdHJlYW1cbiAgICBpZiAoaW5pdGlhbFByb21wdCkge1xuICAgICAgLy8gQ29udmVydCB0aGUgaW5pdGlhbCBwcm9tcHQgdG8gdGhlIGlucHV0IHN0cmVhbSBmb3JtYXQuXG4gICAgICAvLyBDaHVua3MgZnJvbSBzdGRpbiBtYXkgYWxyZWFkeSBjb250YWluIHRyYWlsaW5nIG5ld2xpbmVzLCBzbyBzdHJpcFxuICAgICAgLy8gdGhlbSBiZWZvcmUgYXBwZW5kaW5nIG91ciBvd24gdG8gYXZvaWQgZG91YmxlLW5ld2xpbmUgaXNzdWVzIHRoYXRcbiAgICAgIC8vIGNhdXNlIHN0cnVjdHVyZWRJTyB0byBwYXJzZSBlbXB0eSBsaW5lcy4gU3RyaW5nKCkgaGFuZGxlcyBib3RoXG4gICAgICAvLyBzdHJpbmcgY2h1bmtzIGFuZCBCdWZmZXIgb2JqZWN0cyBmcm9tIHByb2Nlc3Muc3RkaW4uXG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLmlucHV0U3RyZWFtXG4gICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgaW5pdGlhbFByb21wdCkge1xuICAgICAgICAgIHN0cmVhbS53cml0ZShTdHJpbmcoY2h1bmspLnJlcGxhY2UoL1xcbiQvLCAnJykgKyAnXFxuJylcbiAgICAgICAgfVxuICAgICAgfSkoKVxuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGZsdXNoSW50ZXJuYWxFdmVudHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY2NyQ2xpZW50Py5mbHVzaEludGVybmFsRXZlbnRzKCkgPz8gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIG92ZXJyaWRlIGdldCBpbnRlcm5hbEV2ZW50c1BlbmRpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jY3JDbGllbnQ/LmludGVybmFsRXZlbnRzUGVuZGluZyA/PyAwXG4gIH1cblxuICAvKipcbiAgICogU2VuZCBvdXRwdXQgdG8gdGhlIHRyYW5zcG9ydC5cbiAgICogSW4gYnJpZGdlIG1vZGUsIGNvbnRyb2xfcmVxdWVzdCBtZXNzYWdlcyBhcmUgYWx3YXlzIGVjaG9lZCB0byBzdGRvdXQgc28gdGhlXG4gICAqIGJyaWRnZSBwYXJlbnQgY2FuIGRldGVjdCBwZXJtaXNzaW9uIHJlcXVlc3RzLiBPdGhlciBtZXNzYWdlcyBhcmUgZWNob2VkIG9ubHlcbiAgICogaW4gZGVidWcgbW9kZS5cbiAgICovXG4gIGFzeW5jIHdyaXRlKG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5jY3JDbGllbnQpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2NyQ2xpZW50LndyaXRlRXZlbnQobWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy50cmFuc3BvcnQud3JpdGUobWVzc2FnZSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNCcmlkZ2UpIHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjb250cm9sX3JlcXVlc3QnIHx8IHRoaXMuaXNEZWJ1Zykge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KG5kanNvblNhZmVTdHJpbmdpZnkobWVzc2FnZSkgKyAnXFxuJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdXAgY29ubmVjdGlvbnMgZ3JhY2VmdWxseVxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMua2VlcEFsaXZlVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5rZWVwQWxpdmVUaW1lcilcbiAgICAgIHRoaXMua2VlcEFsaXZlVGltZXIgPSBudWxsXG4gICAgfVxuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKClcbiAgICB0aGlzLmlucHV0U3RyZWFtLmVuZCgpXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBVUkwgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4uLy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgSHlicmlkVHJhbnNwb3J0IH0gZnJvbSAnLi9IeWJyaWRUcmFuc3BvcnQuanMnXG5pbXBvcnQgeyBTU0VUcmFuc3BvcnQgfSBmcm9tICcuL1NTRVRyYW5zcG9ydC5qcydcbmltcG9ydCB0eXBlIHsgVHJhbnNwb3J0IH0gZnJvbSAnLi9UcmFuc3BvcnQuanMnXG5pbXBvcnQgeyBXZWJTb2NrZXRUcmFuc3BvcnQgfSBmcm9tICcuL1dlYlNvY2tldFRyYW5zcG9ydC5qcydcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhcHByb3ByaWF0ZSB0cmFuc3BvcnQgZm9yIGEgVVJMLlxuICpcbiAqIFRyYW5zcG9ydCBzZWxlY3Rpb24gcHJpb3JpdHk6XG4gKiAxLiBTU0VUcmFuc3BvcnQgKFNTRSByZWFkcyArIFBPU1Qgd3JpdGVzKSB3aGVuIENMQVVERV9DT0RFX1VTRV9DQ1JfVjIgaXMgc2V0XG4gKiAyLiBIeWJyaWRUcmFuc3BvcnQgKFdTIHJlYWRzICsgUE9TVCB3cml0ZXMpIHdoZW4gQ0xBVURFX0NPREVfUE9TVF9GT1JfU0VTU0lPTl9JTkdSRVNTX1YyIGlzIHNldFxuICogMy4gV2ViU29ja2V0VHJhbnNwb3J0IChXUyByZWFkcyArIFdTIHdyaXRlcykgXHUyMDE0IGRlZmF1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zcG9ydEZvclVybChcbiAgdXJsOiBVUkwsXG4gIGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSxcbiAgc2Vzc2lvbklkPzogc3RyaW5nLFxuICByZWZyZXNoSGVhZGVycz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pOiBUcmFuc3BvcnQge1xuICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVVNFX0NDUl9WMikpIHtcbiAgICAvLyB2MjogU1NFIGZvciByZWFkcywgSFRUUCBQT1NUIGZvciB3cml0ZXNcbiAgICAvLyAtLXNkay11cmwgaXMgdGhlIHNlc3Npb24gVVJMICguLi4vc2Vzc2lvbnMve2lkfSk7XG4gICAgLy8gZGVyaXZlIHRoZSBTU0Ugc3RyZWFtIFVSTCBieSBhcHBlbmRpbmcgL3dvcmtlci9ldmVudHMvc3RyZWFtXG4gICAgY29uc3Qgc3NlVXJsID0gbmV3IFVSTCh1cmwuaHJlZilcbiAgICBpZiAoc3NlVXJsLnByb3RvY29sID09PSAnd3NzOicpIHtcbiAgICAgIHNzZVVybC5wcm90b2NvbCA9ICdodHRwczonXG4gICAgfSBlbHNlIGlmIChzc2VVcmwucHJvdG9jb2wgPT09ICd3czonKSB7XG4gICAgICBzc2VVcmwucHJvdG9jb2wgPSAnaHR0cDonXG4gICAgfVxuICAgIHNzZVVybC5wYXRobmFtZSA9XG4gICAgICBzc2VVcmwucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKSArICcvd29ya2VyL2V2ZW50cy9zdHJlYW0nXG4gICAgcmV0dXJuIG5ldyBTU0VUcmFuc3BvcnQoc3NlVXJsLCBoZWFkZXJzLCBzZXNzaW9uSWQsIHJlZnJlc2hIZWFkZXJzKVxuICB9XG5cbiAgaWYgKHVybC5wcm90b2NvbCA9PT0gJ3dzOicgfHwgdXJsLnByb3RvY29sID09PSAnd3NzOicpIHtcbiAgICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUE9TVF9GT1JfU0VTU0lPTl9JTkdSRVNTX1YyKSkge1xuICAgICAgcmV0dXJuIG5ldyBIeWJyaWRUcmFuc3BvcnQodXJsLCBoZWFkZXJzLCBzZXNzaW9uSWQsIHJlZnJlc2hIZWFkZXJzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFdlYlNvY2tldFRyYW5zcG9ydCh1cmwsIGhlYWRlcnMsIHNlc3Npb25JZCwgcmVmcmVzaEhlYWRlcnMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm90b2NvbDogJHt1cmwucHJvdG9jb2x9YClcbiAgfVxufVxuIiwgIi8qKlxuICogVHJhbnNmb3JtcyBTREsgbWVzc2FnZXMgZm9yIHN0cmVhbWxpbmVkIG91dHB1dCBtb2RlLlxuICpcbiAqIFN0cmVhbWxpbmVkIG1vZGUgaXMgYSBcImRpc3RpbGxhdGlvbi1yZXNpc3RhbnRcIiBvdXRwdXQgZm9ybWF0IHRoYXQ6XG4gKiAtIEtlZXBzIHRleHQgbWVzc2FnZXMgaW50YWN0XG4gKiAtIFN1bW1hcml6ZXMgdG9vbCBjYWxscyB3aXRoIGN1bXVsYXRpdmUgY291bnRzIChyZXNldHMgd2hlbiB0ZXh0IGFwcGVhcnMpXG4gKiAtIE9taXRzIHRoaW5raW5nIGNvbnRlbnRcbiAqIC0gU3RyaXBzIHRvb2wgbGlzdCBhbmQgbW9kZWwgaW5mbyBmcm9tIGluaXQgbWVzc2FnZXNcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNES0Fzc2lzdGFudE1lc3NhZ2UgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB0eXBlIHsgU3Rkb3V0TWVzc2FnZSB9IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHsgRklMRV9FRElUX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9GaWxlRWRpdFRvb2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgRklMRV9SRUFEX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9GaWxlUmVhZFRvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgRklMRV9XUklURV9UT09MX05BTUUgfSBmcm9tICdzcmMvdG9vbHMvRmlsZVdyaXRlVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBHTE9CX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9HbG9iVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBHUkVQX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9HcmVwVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBMSVNUX01DUF9SRVNPVVJDRVNfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0xpc3RNY3BSZXNvdXJjZXNUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IExTUF9UT09MX05BTUUgfSBmcm9tICdzcmMvdG9vbHMvTFNQVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBOT1RFQk9PS19FRElUX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9Ob3RlYm9va0VkaXRUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IFRBU0tfU1RPUF9UT09MX05BTUUgfSBmcm9tICdzcmMvdG9vbHMvVGFza1N0b3BUb29sL3Byb21wdC5qcydcbmltcG9ydCB7IFdFQl9TRUFSQ0hfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL1dlYlNlYXJjaFRvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFRleHRDb250ZW50IH0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgU0hFTExfVE9PTF9OQU1FUyB9IGZyb20gJ3NyYy91dGlscy9zaGVsbC9zaGVsbFRvb2xVdGlscy5qcydcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdzcmMvdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5cbnR5cGUgVG9vbENvdW50cyA9IHtcbiAgc2VhcmNoZXM6IG51bWJlclxuICByZWFkczogbnVtYmVyXG4gIHdyaXRlczogbnVtYmVyXG4gIGNvbW1hbmRzOiBudW1iZXJcbiAgb3RoZXI6IG51bWJlclxufVxuXG4vKipcbiAqIFRvb2wgY2F0ZWdvcmllcyBmb3Igc3VtbWFyaXphdGlvbi5cbiAqL1xuY29uc3QgU0VBUkNIX1RPT0xTID0gW1xuICBHUkVQX1RPT0xfTkFNRSxcbiAgR0xPQl9UT09MX05BTUUsXG4gIFdFQl9TRUFSQ0hfVE9PTF9OQU1FLFxuICBMU1BfVE9PTF9OQU1FLFxuXVxuY29uc3QgUkVBRF9UT09MUyA9IFtGSUxFX1JFQURfVE9PTF9OQU1FLCBMSVNUX01DUF9SRVNPVVJDRVNfVE9PTF9OQU1FXVxuY29uc3QgV1JJVEVfVE9PTFMgPSBbXG4gIEZJTEVfV1JJVEVfVE9PTF9OQU1FLFxuICBGSUxFX0VESVRfVE9PTF9OQU1FLFxuICBOT1RFQk9PS19FRElUX1RPT0xfTkFNRSxcbl1cbmNvbnN0IENPTU1BTkRfVE9PTFMgPSBbLi4uU0hFTExfVE9PTF9OQU1FUywgJ1RtdXgnLCBUQVNLX1NUT1BfVE9PTF9OQU1FXVxuXG5mdW5jdGlvbiBjYXRlZ29yaXplVG9vbE5hbWUodG9vbE5hbWU6IHN0cmluZyk6IGtleW9mIFRvb2xDb3VudHMge1xuICBpZiAoU0VBUkNIX1RPT0xTLnNvbWUodCA9PiB0b29sTmFtZS5zdGFydHNXaXRoKHQpKSkgcmV0dXJuICdzZWFyY2hlcydcbiAgaWYgKFJFQURfVE9PTFMuc29tZSh0ID0+IHRvb2xOYW1lLnN0YXJ0c1dpdGgodCkpKSByZXR1cm4gJ3JlYWRzJ1xuICBpZiAoV1JJVEVfVE9PTFMuc29tZSh0ID0+IHRvb2xOYW1lLnN0YXJ0c1dpdGgodCkpKSByZXR1cm4gJ3dyaXRlcydcbiAgaWYgKENPTU1BTkRfVE9PTFMuc29tZSh0ID0+IHRvb2xOYW1lLnN0YXJ0c1dpdGgodCkpKSByZXR1cm4gJ2NvbW1hbmRzJ1xuICByZXR1cm4gJ290aGVyJ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVRvb2xDb3VudHMoKTogVG9vbENvdW50cyB7XG4gIHJldHVybiB7XG4gICAgc2VhcmNoZXM6IDAsXG4gICAgcmVhZHM6IDAsXG4gICAgd3JpdGVzOiAwLFxuICAgIGNvbW1hbmRzOiAwLFxuICAgIG90aGVyOiAwLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBzdW1tYXJ5IHRleHQgZm9yIHRvb2wgY291bnRzLlxuICovXG5mdW5jdGlvbiBnZXRUb29sU3VtbWFyeVRleHQoY291bnRzOiBUb29sQ291bnRzKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cblxuICAvLyBVc2Ugc2ltaWxhciBwaHJhc2luZyB0byBjb2xsYXBzZVJlYWRTZWFyY2gudHNcbiAgaWYgKGNvdW50cy5zZWFyY2hlcyA+IDApIHtcbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgYHNlYXJjaGVkICR7Y291bnRzLnNlYXJjaGVzfSAke2NvdW50cy5zZWFyY2hlcyA9PT0gMSA/ICdwYXR0ZXJuJyA6ICdwYXR0ZXJucyd9YCxcbiAgICApXG4gIH1cbiAgaWYgKGNvdW50cy5yZWFkcyA+IDApIHtcbiAgICBwYXJ0cy5wdXNoKGByZWFkICR7Y291bnRzLnJlYWRzfSAke2NvdW50cy5yZWFkcyA9PT0gMSA/ICdmaWxlJyA6ICdmaWxlcyd9YClcbiAgfVxuICBpZiAoY291bnRzLndyaXRlcyA+IDApIHtcbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgYHdyb3RlICR7Y291bnRzLndyaXRlc30gJHtjb3VudHMud3JpdGVzID09PSAxID8gJ2ZpbGUnIDogJ2ZpbGVzJ31gLFxuICAgIClcbiAgfVxuICBpZiAoY291bnRzLmNvbW1hbmRzID4gMCkge1xuICAgIHBhcnRzLnB1c2goXG4gICAgICBgcmFuICR7Y291bnRzLmNvbW1hbmRzfSAke2NvdW50cy5jb21tYW5kcyA9PT0gMSA/ICdjb21tYW5kJyA6ICdjb21tYW5kcyd9YCxcbiAgICApXG4gIH1cbiAgaWYgKGNvdW50cy5vdGhlciA+IDApIHtcbiAgICBwYXJ0cy5wdXNoKGAke2NvdW50cy5vdGhlcn0gb3RoZXIgJHtjb3VudHMub3RoZXIgPT09IDEgPyAndG9vbCcgOiAndG9vbHMnfWApXG4gIH1cblxuICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIGNhcGl0YWxpemUocGFydHMuam9pbignLCAnKSlcbn1cblxuLyoqXG4gKiBDb3VudCB0b29sIHVzZXMgaW4gYW4gYXNzaXN0YW50IG1lc3NhZ2UgYW5kIGFkZCB0byBleGlzdGluZyBjb3VudHMuXG4gKi9cbmZ1bmN0aW9uIGFjY3VtdWxhdGVUb29sVXNlcyhcbiAgbWVzc2FnZTogU0RLQXNzaXN0YW50TWVzc2FnZSxcbiAgY291bnRzOiBUb29sQ291bnRzLFxuKTogdm9pZCB7XG4gIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICBpZiAoIUFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgIGlmIChibG9jay50eXBlID09PSAndG9vbF91c2UnICYmICduYW1lJyBpbiBibG9jaykge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaXplVG9vbE5hbWUoYmxvY2submFtZSBhcyBzdHJpbmcpXG4gICAgICBjb3VudHNbY2F0ZWdvcnldKytcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdGF0ZWZ1bCB0cmFuc2Zvcm1lciB0aGF0IGFjY3VtdWxhdGVzIHRvb2wgY291bnRzIGJldHdlZW4gdGV4dCBtZXNzYWdlcy5cbiAqIFRvb2wgY291bnRzIHJlc2V0IHdoZW4gYSBtZXNzYWdlIHdpdGggdGV4dCBjb250ZW50IGlzIGVuY291bnRlcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyZWFtbGluZWRUcmFuc2Zvcm1lcigpOiAoXG4gIG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UsXG4pID0+IFN0ZG91dE1lc3NhZ2UgfCBudWxsIHtcbiAgbGV0IGN1bXVsYXRpdmVDb3VudHMgPSBjcmVhdGVFbXB0eVRvb2xDb3VudHMoKVxuXG4gIHJldHVybiBmdW5jdGlvbiB0cmFuc2Zvcm1Ub1N0cmVhbWxpbmVkKFxuICAgIG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UsXG4gICk6IFN0ZG91dE1lc3NhZ2UgfCBudWxsIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnYXNzaXN0YW50Jzoge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnRcbiAgICAgICAgY29uc3QgdGV4dCA9IEFycmF5LmlzQXJyYXkoY29udGVudClcbiAgICAgICAgICA/IGV4dHJhY3RUZXh0Q29udGVudChjb250ZW50LCAnXFxuJykudHJpbSgpXG4gICAgICAgICAgOiAnJ1xuXG4gICAgICAgIC8vIEFjY3VtdWxhdGUgdG9vbCBjb3VudHMgZnJvbSB0aGlzIG1lc3NhZ2VcbiAgICAgICAgYWNjdW11bGF0ZVRvb2xVc2VzKG1lc3NhZ2UsIGN1bXVsYXRpdmVDb3VudHMpXG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIFRleHQgbWVzc2FnZTogZW1pdCB0ZXh0IG9ubHksIHJlc2V0IGNvdW50c1xuICAgICAgICAgIGN1bXVsYXRpdmVDb3VudHMgPSBjcmVhdGVFbXB0eVRvb2xDb3VudHMoKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyZWFtbGluZWRfdGV4dCcsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogbWVzc2FnZS5zZXNzaW9uX2lkLFxuICAgICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvb2wtb25seSBtZXNzYWdlOiBlbWl0IGN1bXVsYXRpdmUgdG9vbCBzdW1tYXJ5XG4gICAgICAgIGNvbnN0IHRvb2xTdW1tYXJ5ID0gZ2V0VG9vbFN1bW1hcnlUZXh0KGN1bXVsYXRpdmVDb3VudHMpXG4gICAgICAgIGlmICghdG9vbFN1bW1hcnkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnc3RyZWFtbGluZWRfdG9vbF91c2Vfc3VtbWFyeScsXG4gICAgICAgICAgdG9vbF9zdW1tYXJ5OiB0b29sU3VtbWFyeSxcbiAgICAgICAgICBzZXNzaW9uX2lkOiBtZXNzYWdlLnNlc3Npb25faWQsXG4gICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgIC8vIEtlZXAgcmVzdWx0IG1lc3NhZ2VzIGFzLWlzICh0aGV5IGhhdmUgc3RydWN0dXJlZF9vdXRwdXQsIHBlcm1pc3Npb25fZGVuaWFscylcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VcblxuICAgICAgY2FzZSAnc3lzdGVtJzpcbiAgICAgIGNhc2UgJ3VzZXInOlxuICAgICAgY2FzZSAnc3RyZWFtX2V2ZW50JzpcbiAgICAgIGNhc2UgJ3Rvb2xfcHJvZ3Jlc3MnOlxuICAgICAgY2FzZSAnYXV0aF9zdGF0dXMnOlxuICAgICAgY2FzZSAncmF0ZV9saW1pdF9ldmVudCc6XG4gICAgICBjYXNlICdjb250cm9sX3Jlc3BvbnNlJzpcbiAgICAgIGNhc2UgJ2NvbnRyb2xfcmVxdWVzdCc6XG4gICAgICBjYXNlICdjb250cm9sX2NhbmNlbF9yZXF1ZXN0JzpcbiAgICAgIGNhc2UgJ2tlZXBfYWxpdmUnOlxuICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbWVzc2FnZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gc3RyZWFtbGluZWQgb3V0cHV0LlxuICogVXNlZnVsIGZvciBmaWx0ZXJpbmcgYmVmb3JlIHRyYW5zZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkSW5jbHVkZUluU3RyZWFtbGluZWQobWVzc2FnZTogU3Rkb3V0TWVzc2FnZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbWVzc2FnZS50eXBlID09PSAnYXNzaXN0YW50JyB8fCBtZXNzYWdlLnR5cGUgPT09ICdyZXN1bHQnXG59XG4iLCAiaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnLi9jbGVhbnVwUmVnaXN0cnkuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuXG4vKipcbiAqIFNlbnRpbmVsIHdyaXR0ZW4gdG8gc3RkZXJyIGFoZWFkIG9mIGFueSBkaXZlcnRlZCBub24tSlNPTiBsaW5lLCBzbyB0aGF0XG4gKiBsb2cgc2NyYXBlcnMgYW5kIHRlc3RzIGNhbiBncmVwIGZvciBndWFyZCBhY3Rpdml0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IFNURE9VVF9HVUFSRF9NQVJLRVIgPSAnW3N0ZG91dC1ndWFyZF0nXG5cbmxldCBpbnN0YWxsZWQgPSBmYWxzZVxubGV0IGJ1ZmZlciA9ICcnXG5sZXQgb3JpZ2luYWxXcml0ZTogdHlwZW9mIHByb2Nlc3Muc3Rkb3V0LndyaXRlIHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gaXNKc29uTGluZShsaW5lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gRW1wdHkgbGluZXMgYXJlIHRvbGVyYXRlZCBpbiBOREpTT04gc3RyZWFtcyBcdTIwMTQgdHJlYXQgdGhlbSBhcyB2YWxpZCBzbyBhXG4gIC8vIHRyYWlsaW5nIG5ld2xpbmUgb3IgYSBibGFuayBzZXBhcmF0b3IgZG9lc24ndCB0cmlwIHRoZSBndWFyZC5cbiAgaWYgKGxpbmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICB0cnkge1xuICAgIEpTT04ucGFyc2UobGluZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEluc3RhbGwgYSBydW50aW1lIGd1YXJkIG9uIHByb2Nlc3Muc3Rkb3V0LndyaXRlIGZvciAtLW91dHB1dC1mb3JtYXQ9c3RyZWFtLWpzb24uXG4gKlxuICogU0RLIGNsaWVudHMgY29uc3VtaW5nIHN0cmVhbS1qc29uIHBhcnNlIHN0ZG91dCBsaW5lLWJ5LWxpbmUgYXMgTkRKU09OLiBBbnlcbiAqIHN0cmF5IHdyaXRlIFx1MjAxNCBhIGNvbnNvbGUubG9nIGZyb20gYSBkZXBlbmRlbmN5LCBhIGRlYnVnIHByaW50IHRoYXQgc2xpcHBlZFxuICogcGFzdCByZXZpZXcsIGEgbGlicmFyeSBiYW5uZXIgXHUyMDE0IGJyZWFrcyB0aGUgY2xpZW50J3MgcGFyc2VyIG1pZC1zdHJlYW0gd2l0aFxuICogbm8gcmVjb3ZlcnkgcGF0aC5cbiAqXG4gKiBUaGlzIGd1YXJkIHdyYXBzIHByb2Nlc3Muc3Rkb3V0LndyaXRlIGF0IHRoZSBzYW1lIGxheWVyIHRoZSBhc2NpaWNhc3RcbiAqIHJlY29yZGVyIGRvZXMgKHNlZSBhc2NpaWNhc3QudHMpLiBXcml0ZXMgYXJlIGJ1ZmZlcmVkIHVudGlsIGEgbmV3bGluZVxuICogYXJyaXZlcywgdGhlbiBlYWNoIGNvbXBsZXRlIGxpbmUgaXMgSlNPTi1wYXJzZWQuIExpbmVzIHRoYXQgcGFyc2UgYXJlXG4gKiBmb3J3YXJkZWQgdG8gdGhlIHJlYWwgc3Rkb3V0OyBsaW5lcyB0aGF0IGRvbid0IGFyZSBkaXZlcnRlZCB0byBzdGRlcnJcbiAqIHRhZ2dlZCB3aXRoIFNURE9VVF9HVUFSRF9NQVJLRVIgc28gdGhleSByZW1haW4gdmlzaWJsZSB3aXRob3V0IGNvcnJ1cHRpbmdcbiAqIHRoZSBKU09OIHN0cmVhbS5cbiAqXG4gKiBUaGUgYmxlc3NlZCBKU09OIHBhdGggKHN0cnVjdHVyZWRJTy53cml0ZSBcdTIxOTIgd3JpdGVUb1N0ZG91dCBcdTIxOTIgc3Rkb3V0LndyaXRlKVxuICogYWx3YXlzIGVtaXRzIGBuZGpzb25TYWZlU3RyaW5naWZ5KG1zZykgKyAnXFxuJ2AsIHNvIGl0IHBhc3NlcyBzdHJhaWdodFxuICogdGhyb3VnaC4gT25seSBvdXQtb2YtYmFuZCB3cml0ZXMgYXJlIGRpdmVydGVkLlxuICpcbiAqIEluc3RhbGxpbmcgdHdpY2UgaXMgYSBuby1vcC4gQ2FsbCBiZWZvcmUgYW55IHN0cmVhbS1qc29uIG91dHB1dCBpcyBlbWl0dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbFN0cmVhbUpzb25TdGRvdXRHdWFyZCgpOiB2b2lkIHtcbiAgaWYgKGluc3RhbGxlZCkge1xuICAgIHJldHVyblxuICB9XG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBvcmlnaW5hbFdyaXRlID0gcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChcbiAgICBwcm9jZXNzLnN0ZG91dCxcbiAgKSBhcyB0eXBlb2YgcHJvY2Vzcy5zdGRvdXQud3JpdGVcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZSA9IGZ1bmN0aW9uIChcbiAgICBjaHVuazogc3RyaW5nIHwgVWludDhBcnJheSxcbiAgICBlbmNvZGluZ09yQ2I/OiBCdWZmZXJFbmNvZGluZyB8ICgoZXJyPzogRXJyb3IpID0+IHZvaWQpLFxuICAgIGNiPzogKGVycj86IEVycm9yKSA9PiB2b2lkLFxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCB0ZXh0ID1cbiAgICAgIHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycgPyBjaHVuayA6IEJ1ZmZlci5mcm9tKGNodW5rKS50b1N0cmluZygndXRmLTgnKVxuXG4gICAgYnVmZmVyICs9IHRleHRcbiAgICBsZXQgbmV3bGluZUlkeDogbnVtYmVyXG4gICAgbGV0IHdyb3RlID0gdHJ1ZVxuICAgIHdoaWxlICgobmV3bGluZUlkeCA9IGJ1ZmZlci5pbmRleE9mKCdcXG4nKSkgIT09IC0xKSB7XG4gICAgICBjb25zdCBsaW5lID0gYnVmZmVyLnNsaWNlKDAsIG5ld2xpbmVJZHgpXG4gICAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UobmV3bGluZUlkeCArIDEpXG4gICAgICBpZiAoaXNKc29uTGluZShsaW5lKSkge1xuICAgICAgICB3cm90ZSA9IG9yaWdpbmFsV3JpdGUhKGxpbmUgKyAnXFxuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGAke1NURE9VVF9HVUFSRF9NQVJLRVJ9ICR7bGluZX1cXG5gKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYHN0cmVhbUpzb25TdGRvdXRHdWFyZCBkaXZlcnRlZCBub24tSlNPTiBzdGRvdXQgbGluZTogJHtsaW5lLnNsaWNlKDAsIDIwMCl9YCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmUgdGhlIGNhbGxiYWNrIG9uY2UgYnVmZmVyaW5nIGlzIGRvbmUuIFdlIHJlcG9ydCBzdWNjZXNzIGV2ZW4gd2hlblxuICAgIC8vIGEgbGluZSB3YXMgZGl2ZXJ0ZWQgXHUyMDE0IHRoZSBjYWxsZXIncyBpbnRlbnQgKGVtaXQgdGV4dCkgd2FzIGhvbm9yZWQsXG4gICAgLy8ganVzdCBvbiBhIGRpZmZlcmVudCBmZC5cbiAgICBjb25zdCBjYWxsYmFjayA9IHR5cGVvZiBlbmNvZGluZ09yQ2IgPT09ICdmdW5jdGlvbicgPyBlbmNvZGluZ09yQ2IgOiBjYlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4gY2FsbGJhY2soKSlcbiAgICB9XG4gICAgcmV0dXJuIHdyb3RlXG4gIH0gYXMgdHlwZW9mIHByb2Nlc3Muc3Rkb3V0LndyaXRlXG5cbiAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHtcbiAgICAvLyBGbHVzaCBhbnkgcGFydGlhbCBsaW5lIGxlZnQgaW4gdGhlIGJ1ZmZlciBhdCBzaHV0ZG93bi4gSWYgaXQncyBhIEpTT05cbiAgICAvLyBmcmFnbWVudCBpdCB3b24ndCBwYXJzZSBcdTIwMTQgZGl2ZXJ0IGl0IHJhdGhlciB0aGFuIGRyb3AgaXQgc2lsZW50bHkuXG4gICAgaWYgKGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob3JpZ2luYWxXcml0ZSAmJiBpc0pzb25MaW5lKGJ1ZmZlcikpIHtcbiAgICAgICAgb3JpZ2luYWxXcml0ZShidWZmZXIgKyAnXFxuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGAke1NURE9VVF9HVUFSRF9NQVJLRVJ9ICR7YnVmZmVyfVxcbmApXG4gICAgICB9XG4gICAgICBidWZmZXIgPSAnJ1xuICAgIH1cbiAgICBpZiAob3JpZ2luYWxXcml0ZSkge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUgPSBvcmlnaW5hbFdyaXRlXG4gICAgICBvcmlnaW5hbFdyaXRlID0gbnVsbFxuICAgIH1cbiAgICBpbnN0YWxsZWQgPSBmYWxzZVxuICB9KVxufVxuXG4vKipcbiAqIFRlc3Rpbmctb25seSByZXNldC4gUmVzdG9yZXMgdGhlIHJlYWwgc3Rkb3V0LndyaXRlIGFuZCBjbGVhcnMgdGhlIGxpbmVcbiAqIGJ1ZmZlciBzbyBzdWJzZXF1ZW50IHRlc3RzIHN0YXJ0IGZyb20gYSBjbGVhbiBzbGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZXNldFN0cmVhbUpzb25TdGRvdXRHdWFyZEZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGlmIChvcmlnaW5hbFdyaXRlKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUgPSBvcmlnaW5hbFdyaXRlXG4gICAgb3JpZ2luYWxXcml0ZSA9IG51bGxcbiAgfVxuICBidWZmZXIgPSAnJ1xuICBpbnN0YWxsZWQgPSBmYWxzZVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHR5cGUgeyBDb250ZW50QmxvY2tQYXJhbSB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoLWVzL2xhc3QuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uSWQsXG4gIGlzU2Vzc2lvblBlcnNpc3RlbmNlRGlzYWJsZWQsXG59IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFBlcm1pc3Npb25Nb2RlLFxuICBTREtDb21wYWN0Qm91bmRhcnlNZXNzYWdlLFxuICBTREtNZXNzYWdlLFxuICBTREtQZXJtaXNzaW9uRGVuaWFsLFxuICBTREtTdGF0dXMsXG4gIFNES1VzZXJNZXNzYWdlUmVwbGF5LFxufSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7IGFjY3VtdWxhdGVVc2FnZSwgdXBkYXRlVXNhZ2UgfSBmcm9tICdzcmMvc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB0eXBlIHsgTm9uTnVsbGFibGVVc2FnZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvbG9nZ2luZy5qcydcbmltcG9ydCB7IEVNUFRZX1VTQUdFIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS9sb2dnaW5nLmpzJ1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJ1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IGdldFNsYXNoQ29tbWFuZFRvb2xTa2lsbHMgfSBmcm9tICcuL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHtcbiAgTE9DQUxfQ09NTUFORF9TVERFUlJfVEFHLFxuICBMT0NBTF9DT01NQU5EX1NURE9VVF9UQUcsXG59IGZyb20gJy4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7XG4gIGdldE1vZGVsVXNhZ2UsXG4gIGdldFRvdGFsQVBJRHVyYXRpb24sXG4gIGdldFRvdGFsQ29zdCxcbn0gZnJvbSAnLi9jb3N0LXRyYWNrZXIuanMnXG5pbXBvcnQgdHlwZSB7IENhblVzZVRvb2xGbiB9IGZyb20gJy4vaG9va3MvdXNlQ2FuVXNlVG9vbC5qcydcbmltcG9ydCB7IGxvYWRNZW1vcnlQcm9tcHQgfSBmcm9tICcuL21lbWRpci9tZW1kaXIuanMnXG5pbXBvcnQgeyBoYXNBdXRvTWVtUGF0aE92ZXJyaWRlIH0gZnJvbSAnLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gJy4vcXVlcnkuanMnXG5pbXBvcnQgeyBjYXRlZ29yaXplUmV0cnlhYmxlQVBJRXJyb3IgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS9lcnJvcnMuanMnXG5pbXBvcnQgdHlwZSB7IE1DUFNlcnZlckNvbm5lY3Rpb24gfSBmcm9tICcuL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgdHlwZSBUb29scywgdHlwZSBUb29sVXNlQ29udGV4dCwgdG9vbE1hdGNoZXNOYW1lIH0gZnJvbSAnLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHsgU1lOVEhFVElDX09VVFBVVF9UT09MX05BTUUgfSBmcm9tICcuL3Rvb2xzL1N5bnRoZXRpY091dHB1dFRvb2wvU3ludGhldGljT3V0cHV0VG9vbC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHsgT3JwaGFuZWRQZXJtaXNzaW9uIH0gZnJvbSAnLi90eXBlcy90ZXh0SW5wdXRUeXBlcy5qcydcbmltcG9ydCB7IGNyZWF0ZUFib3J0Q29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHR5cGUgeyBBdHRyaWJ1dGlvblN0YXRlIH0gZnJvbSAnLi91dGlscy9jb21taXRBdHRyaWJ1dGlvbi5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBpc0JhcmVNb2RlLCBpc0VudlRydXRoeSB9IGZyb20gJy4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRGYXN0TW9kZVN0YXRlIH0gZnJvbSAnLi91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7XG4gIHR5cGUgRmlsZUhpc3RvcnlTdGF0ZSxcbiAgZmlsZUhpc3RvcnlFbmFibGVkLFxuICBmaWxlSGlzdG9yeU1ha2VTbmFwc2hvdCxcbn0gZnJvbSAnLi91dGlscy9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7XG4gIGNsb25lRmlsZVN0YXRlQ2FjaGUsXG4gIHR5cGUgRmlsZVN0YXRlQ2FjaGUsXG59IGZyb20gJy4vdXRpbHMvZmlsZVN0YXRlQ2FjaGUuanMnXG5pbXBvcnQgeyBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCB9IGZyb20gJy4vdXRpbHMvaGVhZGxlc3NQcm9maWxlci5qcydcbmltcG9ydCB7IHJlZ2lzdGVyU3RydWN0dXJlZE91dHB1dEVuZm9yY2VtZW50IH0gZnJvbSAnLi91dGlscy9ob29rcy9ob29rSGVscGVycy5qcydcbmltcG9ydCB7IGdldEluTWVtb3J5RXJyb3JzIH0gZnJvbSAnLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBjb3VudFRvb2xDYWxscywgU1lOVEhFVElDX01FU1NBR0VTIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7XG4gIGdldE1haW5Mb29wTW9kZWwsXG4gIHBhcnNlVXNlclNwZWNpZmllZE1vZGVsLFxufSBmcm9tICcuL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgbG9hZEFsbFBsdWdpbnNDYWNoZU9ubHkgfSBmcm9tICcuL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBQcm9jZXNzVXNlcklucHV0Q29udGV4dCxcbiAgcHJvY2Vzc1VzZXJJbnB1dCxcbn0gZnJvbSAnLi91dGlscy9wcm9jZXNzVXNlcklucHV0L3Byb2Nlc3NVc2VySW5wdXQuanMnXG5pbXBvcnQgeyBmZXRjaFN5c3RlbVByb21wdFBhcnRzIH0gZnJvbSAnLi91dGlscy9xdWVyeUNvbnRleHQuanMnXG5pbXBvcnQgeyBzZXRDd2QgfSBmcm9tICcuL3V0aWxzL1NoZWxsLmpzJ1xuaW1wb3J0IHtcbiAgZmx1c2hTZXNzaW9uU3RvcmFnZSxcbiAgcmVjb3JkVHJhbnNjcmlwdCxcbn0gZnJvbSAnLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZVRoZW1lU2V0dGluZyB9IGZyb20gJy4vdXRpbHMvc3lzdGVtVGhlbWUuanMnXG5pbXBvcnQge1xuICBzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCxcbiAgdHlwZSBUaGlua2luZ0NvbmZpZyxcbn0gZnJvbSAnLi91dGlscy90aGlua2luZy5qcydcblxuLy8gTGF6eTogTWVzc2FnZVNlbGVjdG9yLnRzeCBwdWxscyBSZWFjdC9pbms7IG9ubHkgbmVlZGVkIGZvciBtZXNzYWdlIGZpbHRlcmluZyBhdCBxdWVyeSB0aW1lXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBtZXNzYWdlU2VsZWN0b3IgPVxuICAoKTogdHlwZW9mIGltcG9ydCgnc3JjL2NvbXBvbmVudHMvTWVzc2FnZVNlbGVjdG9yLmpzJykgPT5cbiAgICByZXF1aXJlKCdzcmMvY29tcG9uZW50cy9NZXNzYWdlU2VsZWN0b3IuanMnKVxuXG5pbXBvcnQge1xuICBsb2NhbENvbW1hbmRPdXRwdXRUb1NES0Fzc2lzdGFudE1lc3NhZ2UsXG4gIHRvU0RLQ29tcGFjdE1ldGFkYXRhLFxufSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzL21hcHBlcnMuanMnXG5pbXBvcnQge1xuICBidWlsZFN5c3RlbUluaXRNZXNzYWdlLFxuICBzZGtDb21wYXRUb29sTmFtZSxcbn0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy9zeXN0ZW1Jbml0LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NyYXRjaHBhZERpcixcbiAgaXNTY3JhdGNocGFkRW5hYmxlZCxcbn0gZnJvbSAnLi91dGlscy9wZXJtaXNzaW9ucy9maWxlc3lzdGVtLmpzJ1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5pbXBvcnQge1xuICBoYW5kbGVPcnBoYW5lZFBlcm1pc3Npb24sXG4gIGlzUmVzdWx0U3VjY2Vzc2Z1bCxcbiAgbm9ybWFsaXplTWVzc2FnZSxcbn0gZnJvbSAnLi91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5cbi8vIERlYWQgY29kZSBlbGltaW5hdGlvbjogY29uZGl0aW9uYWwgaW1wb3J0IGZvciBjb29yZGluYXRvciBtb2RlXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBnZXRDb29yZGluYXRvclVzZXJDb250ZXh0OiAoXG4gIG1jcENsaWVudHM6IFJlYWRvbmx5QXJyYXk8eyBuYW1lOiBzdHJpbmcgfT4sXG4gIHNjcmF0Y2hwYWREaXI/OiBzdHJpbmcsXG4pID0+IHsgW2s6IHN0cmluZ106IHN0cmluZyB9ID0gZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpXG4gID8gcmVxdWlyZSgnLi9jb29yZGluYXRvci9jb29yZGluYXRvck1vZGUuanMnKS5nZXRDb29yZGluYXRvclVzZXJDb250ZXh0XG4gIDogKCkgPT4gKHt9KVxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5cbi8vIERlYWQgY29kZSBlbGltaW5hdGlvbjogY29uZGl0aW9uYWwgaW1wb3J0IGZvciBzbmlwIGNvbXBhY3Rpb25cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IHNuaXBNb2R1bGUgPSBmZWF0dXJlKCdISVNUT1JZX1NOSVAnKVxuICA/IChyZXF1aXJlKCcuL3NlcnZpY2VzL2NvbXBhY3Qvc25pcENvbXBhY3QuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuL3NlcnZpY2VzL2NvbXBhY3Qvc25pcENvbXBhY3QuanMnKSlcbiAgOiBudWxsXG5jb25zdCBzbmlwUHJvamVjdGlvbiA9IGZlYXR1cmUoJ0hJU1RPUllfU05JUCcpXG4gID8gKHJlcXVpcmUoJy4vc2VydmljZXMvY29tcGFjdC9zbmlwUHJvamVjdGlvbi5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4vc2VydmljZXMvY29tcGFjdC9zbmlwUHJvamVjdGlvbi5qcycpKVxuICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5leHBvcnQgdHlwZSBRdWVyeUVuZ2luZUNvbmZpZyA9IHtcbiAgY3dkOiBzdHJpbmdcbiAgdG9vbHM6IFRvb2xzXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgbWNwQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdXG4gIGFnZW50czogQWdlbnREZWZpbml0aW9uW11cbiAgY2FuVXNlVG9vbDogQ2FuVXNlVG9vbEZuXG4gIGdldEFwcFN0YXRlOiAoKSA9PiBBcHBTdGF0ZVxuICBzZXRBcHBTdGF0ZTogKGY6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWRcbiAgaW5pdGlhbE1lc3NhZ2VzPzogTWVzc2FnZVtdXG4gIHJlYWRGaWxlQ2FjaGU6IEZpbGVTdGF0ZUNhY2hlXG4gIGN1c3RvbVN5c3RlbVByb21wdD86IHN0cmluZ1xuICBhcHBlbmRTeXN0ZW1Qcm9tcHQ/OiBzdHJpbmdcbiAgdXNlclNwZWNpZmllZE1vZGVsPzogc3RyaW5nXG4gIGZhbGxiYWNrTW9kZWw/OiBzdHJpbmdcbiAgdGhpbmtpbmdDb25maWc/OiBUaGlua2luZ0NvbmZpZ1xuICBtYXhUdXJucz86IG51bWJlclxuICBtYXhCdWRnZXRVc2Q/OiBudW1iZXJcbiAgdGFza0J1ZGdldD86IHsgdG90YWw6IG51bWJlciB9XG4gIGpzb25TY2hlbWE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB2ZXJib3NlPzogYm9vbGVhblxuICByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuXG4gIC8qKiBIYW5kbGVyIGZvciBVUkwgZWxpY2l0YXRpb25zIHRyaWdnZXJlZCBieSBNQ1AgdG9vbCAtMzIwNDIgZXJyb3JzLiAqL1xuICBoYW5kbGVFbGljaXRhdGlvbj86IFRvb2xVc2VDb250ZXh0WydoYW5kbGVFbGljaXRhdGlvbiddXG4gIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM/OiBib29sZWFuXG4gIHNldFNES1N0YXR1cz86IChzdGF0dXM6IFNES1N0YXR1cykgPT4gdm9pZFxuICBhYm9ydENvbnRyb2xsZXI/OiBBYm9ydENvbnRyb2xsZXJcbiAgb3JwaGFuZWRQZXJtaXNzaW9uPzogT3JwaGFuZWRQZXJtaXNzaW9uXG4gIC8qKlxuICAgKiBTbmlwLWJvdW5kYXJ5IGhhbmRsZXI6IHJlY2VpdmVzIGVhY2ggeWllbGRlZCBzeXN0ZW0gbWVzc2FnZSBwbHVzIHRoZVxuICAgKiBjdXJyZW50IG11dGFibGVNZXNzYWdlcyBzdG9yZS4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIG1lc3NhZ2UgaXMgbm90IGFcbiAgICogc25pcCBib3VuZGFyeTsgb3RoZXJ3aXNlIHJldHVybnMgdGhlIHJlcGxheWVkIHNuaXAgcmVzdWx0LiBJbmplY3RlZCBieVxuICAgKiBhc2soKSB3aGVuIEhJU1RPUllfU05JUCBpcyBlbmFibGVkIHNvIGZlYXR1cmUtZ2F0ZWQgc3RyaW5ncyBzdGF5IGluc2lkZVxuICAgKiB0aGUgZ2F0ZWQgbW9kdWxlIChrZWVwcyBRdWVyeUVuZ2luZSBmcmVlIG9mIGV4Y2x1ZGVkIHN0cmluZ3MgYW5kIHRlc3RhYmxlXG4gICAqIGRlc3BpdGUgZmVhdHVyZSgpIHJldHVybmluZyBmYWxzZSB1bmRlciBidW4gdGVzdCkuIFNESy1vbmx5OiB0aGUgUkVQTFxuICAgKiBrZWVwcyBmdWxsIGhpc3RvcnkgZm9yIFVJIHNjcm9sbGJhY2sgYW5kIHByb2plY3RzIG9uIGRlbWFuZCB2aWFcbiAgICogcHJvamVjdFNuaXBwZWRWaWV3OyBRdWVyeUVuZ2luZSB0cnVuY2F0ZXMgaGVyZSB0byBib3VuZCBtZW1vcnkgaW4gbG9uZ1xuICAgKiBoZWFkbGVzcyBzZXNzaW9ucyAobm8gVUkgdG8gcHJlc2VydmUpLlxuICAgKi9cbiAgc25pcFJlcGxheT86IChcbiAgICB5aWVsZGVkU3lzdGVtTXNnOiBNZXNzYWdlLFxuICAgIHN0b3JlOiBNZXNzYWdlW10sXG4gICkgPT4geyBtZXNzYWdlczogTWVzc2FnZVtdOyBleGVjdXRlZDogYm9vbGVhbiB9IHwgdW5kZWZpbmVkXG59XG5cbi8qKlxuICogUXVlcnlFbmdpbmUgb3ducyB0aGUgcXVlcnkgbGlmZWN5Y2xlIGFuZCBzZXNzaW9uIHN0YXRlIGZvciBhIGNvbnZlcnNhdGlvbi5cbiAqIEl0IGV4dHJhY3RzIHRoZSBjb3JlIGxvZ2ljIGZyb20gYXNrKCkgaW50byBhIHN0YW5kYWxvbmUgY2xhc3MgdGhhdCBjYW4gYmVcbiAqIHVzZWQgYnkgYm90aCB0aGUgaGVhZGxlc3MvU0RLIHBhdGggYW5kIChpbiBhIGZ1dHVyZSBwaGFzZSkgdGhlIFJFUEwuXG4gKlxuICogT25lIFF1ZXJ5RW5naW5lIHBlciBjb252ZXJzYXRpb24uIEVhY2ggc3VibWl0TWVzc2FnZSgpIGNhbGwgc3RhcnRzIGEgbmV3XG4gKiB0dXJuIHdpdGhpbiB0aGUgc2FtZSBjb252ZXJzYXRpb24uIFN0YXRlIChtZXNzYWdlcywgZmlsZSBjYWNoZSwgdXNhZ2UsIGV0Yy4pXG4gKiBwZXJzaXN0cyBhY3Jvc3MgdHVybnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWVyeUVuZ2luZSB7XG4gIHByaXZhdGUgY29uZmlnOiBRdWVyeUVuZ2luZUNvbmZpZ1xuICBwcml2YXRlIG11dGFibGVNZXNzYWdlczogTWVzc2FnZVtdXG4gIHByaXZhdGUgYWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uRGVuaWFsczogU0RLUGVybWlzc2lvbkRlbmlhbFtdXG4gIHByaXZhdGUgdG90YWxVc2FnZTogTm9uTnVsbGFibGVVc2FnZVxuICBwcml2YXRlIGhhc0hhbmRsZWRPcnBoYW5lZFBlcm1pc3Npb24gPSBmYWxzZVxuICBwcml2YXRlIHJlYWRGaWxlU3RhdGU6IEZpbGVTdGF0ZUNhY2hlXG4gIC8vIFR1cm4tc2NvcGVkIHNraWxsIGRpc2NvdmVyeSB0cmFja2luZyAoZmVlZHMgd2FzX2Rpc2NvdmVyZWQgb25cbiAgLy8gdGVuZ3Vfc2tpbGxfdG9vbF9pbnZvY2F0aW9uKS4gTXVzdCBwZXJzaXN0IGFjcm9zcyB0aGUgdHdvXG4gIC8vIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0IHJlYnVpbGRzIGluc2lkZSBzdWJtaXRNZXNzYWdlLCBidXQgaXMgY2xlYXJlZFxuICAvLyBhdCB0aGUgc3RhcnQgb2YgZWFjaCBzdWJtaXRNZXNzYWdlIHRvIGF2b2lkIHVuYm91bmRlZCBncm93dGggYWNyb3NzXG4gIC8vIG1hbnkgdHVybnMgaW4gU0RLIG1vZGUuXG4gIHByaXZhdGUgZGlzY292ZXJlZFNraWxsTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBwcml2YXRlIGxvYWRlZE5lc3RlZE1lbW9yeVBhdGhzID0gbmV3IFNldDxzdHJpbmc+KClcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFF1ZXJ5RW5naW5lQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB0aGlzLm11dGFibGVNZXNzYWdlcyA9IGNvbmZpZy5pbml0aWFsTWVzc2FnZXMgPz8gW11cbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IGNvbmZpZy5hYm9ydENvbnRyb2xsZXIgPz8gY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICB0aGlzLnBlcm1pc3Npb25EZW5pYWxzID0gW11cbiAgICB0aGlzLnJlYWRGaWxlU3RhdGUgPSBjb25maWcucmVhZEZpbGVDYWNoZVxuICAgIHRoaXMudG90YWxVc2FnZSA9IEVNUFRZX1VTQUdFXG4gIH1cblxuICBhc3luYyAqc3VibWl0TWVzc2FnZShcbiAgICBwcm9tcHQ6IHN0cmluZyB8IENvbnRlbnRCbG9ja1BhcmFtW10sXG4gICAgb3B0aW9ucz86IHsgdXVpZD86IHN0cmluZzsgaXNNZXRhPzogYm9vbGVhbiB9LFxuICApOiBBc3luY0dlbmVyYXRvcjxTREtNZXNzYWdlLCB2b2lkLCB1bmtub3duPiB7XG4gICAgY29uc3Qge1xuICAgICAgY3dkLFxuICAgICAgY29tbWFuZHMsXG4gICAgICB0b29scyxcbiAgICAgIG1jcENsaWVudHMsXG4gICAgICB2ZXJib3NlID0gZmFsc2UsXG4gICAgICB0aGlua2luZ0NvbmZpZyxcbiAgICAgIG1heFR1cm5zLFxuICAgICAgbWF4QnVkZ2V0VXNkLFxuICAgICAgdGFza0J1ZGdldCxcbiAgICAgIGNhblVzZVRvb2wsXG4gICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICB1c2VyU3BlY2lmaWVkTW9kZWwsXG4gICAgICBmYWxsYmFja01vZGVsLFxuICAgICAganNvblNjaGVtYSxcbiAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICByZXBsYXlVc2VyTWVzc2FnZXMgPSBmYWxzZSxcbiAgICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMgPSBmYWxzZSxcbiAgICAgIGFnZW50cyA9IFtdLFxuICAgICAgc2V0U0RLU3RhdHVzLFxuICAgICAgb3JwaGFuZWRQZXJtaXNzaW9uLFxuICAgIH0gPSB0aGlzLmNvbmZpZ1xuXG4gICAgdGhpcy5kaXNjb3ZlcmVkU2tpbGxOYW1lcy5jbGVhcigpXG4gICAgc2V0Q3dkKGN3ZClcbiAgICBjb25zdCBwZXJzaXN0U2Vzc2lvbiA9ICFpc1Nlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkKClcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAvLyBXcmFwIGNhblVzZVRvb2wgdG8gdHJhY2sgcGVybWlzc2lvbiBkZW5pYWxzXG4gICAgY29uc3Qgd3JhcHBlZENhblVzZVRvb2w6IENhblVzZVRvb2xGbiA9IGFzeW5jIChcbiAgICAgIHRvb2wsXG4gICAgICBpbnB1dCxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIHRvb2xVc2VJRCxcbiAgICAgIGZvcmNlRGVjaXNpb24sXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW5Vc2VUb29sKFxuICAgICAgICB0b29sLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgICAgIHRvb2xVc2VJRCxcbiAgICAgICAgZm9yY2VEZWNpc2lvbixcbiAgICAgIClcblxuICAgICAgLy8gVHJhY2sgZGVuaWFscyBmb3IgU0RLIHJlcG9ydGluZ1xuICAgICAgaWYgKHJlc3VsdC5iZWhhdmlvciAhPT0gJ2FsbG93Jykge1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLnB1c2goe1xuICAgICAgICAgIHRvb2xfbmFtZTogc2RrQ29tcGF0VG9vbE5hbWUodG9vbC5uYW1lKSxcbiAgICAgICAgICB0b29sX3VzZV9pZDogdG9vbFVzZUlELFxuICAgICAgICAgIHRvb2xfaW5wdXQ6IGlucHV0LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgIGNvbnN0IGluaXRpYWxNYWluTG9vcE1vZGVsID0gdXNlclNwZWNpZmllZE1vZGVsXG4gICAgICA/IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsKHVzZXJTcGVjaWZpZWRNb2RlbClcbiAgICAgIDogZ2V0TWFpbkxvb3BNb2RlbCgpXG5cbiAgICBjb25zdCBpbml0aWFsVGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnID0gdGhpbmtpbmdDb25maWdcbiAgICAgID8gdGhpbmtpbmdDb25maWdcbiAgICAgIDogc2hvdWxkRW5hYmxlVGhpbmtpbmdCeURlZmF1bHQoKSAhPT0gZmFsc2VcbiAgICAgICAgPyB7IHR5cGU6ICdhZGFwdGl2ZScgfVxuICAgICAgICA6IHsgdHlwZTogJ2Rpc2FibGVkJyB9XG5cbiAgICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgnYmVmb3JlX2dldFN5c3RlbVByb21wdCcpXG4gICAgLy8gTmFycm93IG9uY2Ugc28gVFMgdHJhY2tzIHRoZSB0eXBlIHRocm91Z2ggdGhlIGNvbmRpdGlvbmFscyBiZWxvdy5cbiAgICBjb25zdCBjdXN0b21Qcm9tcHQgPVxuICAgICAgdHlwZW9mIGN1c3RvbVN5c3RlbVByb21wdCA9PT0gJ3N0cmluZycgPyBjdXN0b21TeXN0ZW1Qcm9tcHQgOiB1bmRlZmluZWRcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U3lzdGVtUHJvbXB0LFxuICAgICAgdXNlckNvbnRleHQ6IGJhc2VVc2VyQ29udGV4dCxcbiAgICAgIHN5c3RlbUNvbnRleHQsXG4gICAgfSA9IGF3YWl0IGZldGNoU3lzdGVtUHJvbXB0UGFydHMoe1xuICAgICAgdG9vbHMsXG4gICAgICBtYWluTG9vcE1vZGVsOiBpbml0aWFsTWFpbkxvb3BNb2RlbCxcbiAgICAgIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXM6IEFycmF5LmZyb20oXG4gICAgICAgIGluaXRpYWxBcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQuYWRkaXRpb25hbFdvcmtpbmdEaXJlY3Rvcmllcy5rZXlzKCksXG4gICAgICApLFxuICAgICAgbWNwQ2xpZW50cyxcbiAgICAgIGN1c3RvbVN5c3RlbVByb21wdDogY3VzdG9tUHJvbXB0LFxuICAgIH0pXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX2dldFN5c3RlbVByb21wdCcpXG4gICAgY29uc3QgdXNlckNvbnRleHQgPSB7XG4gICAgICAuLi5iYXNlVXNlckNvbnRleHQsXG4gICAgICAuLi5nZXRDb29yZGluYXRvclVzZXJDb250ZXh0KFxuICAgICAgICBtY3BDbGllbnRzLFxuICAgICAgICBpc1NjcmF0Y2hwYWRFbmFibGVkKCkgPyBnZXRTY3JhdGNocGFkRGlyKCkgOiB1bmRlZmluZWQsXG4gICAgICApLFxuICAgIH1cblxuICAgIC8vIFdoZW4gYW4gU0RLIGNhbGxlciBwcm92aWRlcyBhIGN1c3RvbSBzeXN0ZW0gcHJvbXB0IEFORCBoYXMgc2V0XG4gICAgLy8gQ0xBVURFX0NPV09SS19NRU1PUllfUEFUSF9PVkVSUklERSwgaW5qZWN0IHRoZSBtZW1vcnktbWVjaGFuaWNzIHByb21wdC5cbiAgICAvLyBUaGUgZW52IHZhciBpcyBhbiBleHBsaWNpdCBvcHQtaW4gc2lnbmFsIFx1MjAxNCB0aGUgY2FsbGVyIGhhcyB3aXJlZCB1cFxuICAgIC8vIGEgbWVtb3J5IGRpcmVjdG9yeSBhbmQgbmVlZHMgQ2xhdWRlIHRvIGtub3cgaG93IHRvIHVzZSBpdCAod2hpY2hcbiAgICAvLyBXcml0ZS9FZGl0IHRvb2xzIHRvIGNhbGwsIE1FTU9SWS5tZCBmaWxlbmFtZSwgbG9hZGluZyBzZW1hbnRpY3MpLlxuICAgIC8vIFRoZSBjYWxsZXIgY2FuIGxheWVyIHRoZWlyIG93biBwb2xpY3kgdGV4dCB2aWEgYXBwZW5kU3lzdGVtUHJvbXB0LlxuICAgIGNvbnN0IG1lbW9yeU1lY2hhbmljc1Byb21wdCA9XG4gICAgICBjdXN0b21Qcm9tcHQgIT09IHVuZGVmaW5lZCAmJiBoYXNBdXRvTWVtUGF0aE92ZXJyaWRlKClcbiAgICAgICAgPyBhd2FpdCBsb2FkTWVtb3J5UHJvbXB0KClcbiAgICAgICAgOiBudWxsXG5cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBhc1N5c3RlbVByb21wdChbXG4gICAgICAuLi4oY3VzdG9tUHJvbXB0ICE9PSB1bmRlZmluZWQgPyBbY3VzdG9tUHJvbXB0XSA6IGRlZmF1bHRTeXN0ZW1Qcm9tcHQpLFxuICAgICAgLi4uKG1lbW9yeU1lY2hhbmljc1Byb21wdCA/IFttZW1vcnlNZWNoYW5pY3NQcm9tcHRdIDogW10pLFxuICAgICAgLi4uKGFwcGVuZFN5c3RlbVByb21wdCA/IFthcHBlbmRTeXN0ZW1Qcm9tcHRdIDogW10pLFxuICAgIF0pXG5cbiAgICAvLyBSZWdpc3RlciBmdW5jdGlvbiBob29rIGZvciBzdHJ1Y3R1cmVkIG91dHB1dCBlbmZvcmNlbWVudFxuICAgIGNvbnN0IGhhc1N0cnVjdHVyZWRPdXRwdXRUb29sID0gdG9vbHMuc29tZSh0ID0+XG4gICAgICB0b29sTWF0Y2hlc05hbWUodCwgU1lOVEhFVElDX09VVFBVVF9UT09MX05BTUUpLFxuICAgIClcbiAgICBpZiAoanNvblNjaGVtYSAmJiBoYXNTdHJ1Y3R1cmVkT3V0cHV0VG9vbCkge1xuICAgICAgcmVnaXN0ZXJTdHJ1Y3R1cmVkT3V0cHV0RW5mb3JjZW1lbnQoc2V0QXBwU3RhdGUsIGdldFNlc3Npb25JZCgpKVxuICAgIH1cblxuICAgIGxldCBwcm9jZXNzVXNlcklucHV0Q29udGV4dDogUHJvY2Vzc1VzZXJJbnB1dENvbnRleHQgPSB7XG4gICAgICBtZXNzYWdlczogdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICAvLyBTbGFzaCBjb21tYW5kcyB0aGF0IG11dGF0ZSB0aGUgbWVzc2FnZSBhcnJheSAoZS5nLiAvZm9yY2Utc25pcClcbiAgICAgIC8vIGNhbGwgc2V0TWVzc2FnZXMoZm4pLiAgSW4gaW50ZXJhY3RpdmUgbW9kZSB0aGlzIHdyaXRlcyBiYWNrIHRvXG4gICAgICAvLyBBcHBTdGF0ZTsgaW4gcHJpbnQgbW9kZSB3ZSB3cml0ZSBiYWNrIHRvIG11dGFibGVNZXNzYWdlcyBzbyB0aGVcbiAgICAgIC8vIHJlc3Qgb2YgdGhlIHF1ZXJ5IGxvb3AgKHB1c2ggYXQgOjM4OSwgc25hcHNob3QgYXQgOjM5Mikgc2Vlc1xuICAgICAgLy8gdGhlIHJlc3VsdC4gIFRoZSBzZWNvbmQgcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQgYmVsb3cgKGFmdGVyXG4gICAgICAvLyBzbGFzaC1jb21tYW5kIHByb2Nlc3NpbmcpIGtlZXBzIHRoZSBuby1vcCBcdTIwMTQgbm90aGluZyBlbHNlIGNhbGxzXG4gICAgICAvLyBzZXRNZXNzYWdlcyBwYXN0IHRoYXQgcG9pbnQuXG4gICAgICBzZXRNZXNzYWdlczogZm4gPT4ge1xuICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcyA9IGZuKHRoaXMubXV0YWJsZU1lc3NhZ2VzKVxuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlQVBJS2V5OiAoKSA9PiB7fSxcbiAgICAgIGhhbmRsZUVsaWNpdGF0aW9uOiB0aGlzLmNvbmZpZy5oYW5kbGVFbGljaXRhdGlvbixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGRlYnVnOiBmYWxzZSwgLy8gd2UgdXNlIHN0ZG91dCwgc28gZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGl0XG4gICAgICAgIHRvb2xzLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgICBtYWluTG9vcE1vZGVsOiBpbml0aWFsTWFpbkxvb3BNb2RlbCxcbiAgICAgICAgdGhpbmtpbmdDb25maWc6IGluaXRpYWxUaGlua2luZ0NvbmZpZyxcbiAgICAgICAgbWNwQ2xpZW50cyxcbiAgICAgICAgbWNwUmVzb3VyY2VzOiB7fSxcbiAgICAgICAgaWRlSW5zdGFsbGF0aW9uU3RhdHVzOiBudWxsLFxuICAgICAgICBpc05vbkludGVyYWN0aXZlU2Vzc2lvbjogdHJ1ZSxcbiAgICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHsgYWN0aXZlQWdlbnRzOiBhZ2VudHMsIGFsbEFnZW50czogW10gfSxcbiAgICAgICAgdGhlbWU6IHJlc29sdmVUaGVtZVNldHRpbmcoZ2V0R2xvYmFsQ29uZmlnKCkudGhlbWUpLFxuICAgICAgICBtYXhCdWRnZXRVc2QsXG4gICAgICB9LFxuICAgICAgZ2V0QXBwU3RhdGUsXG4gICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgIGFib3J0Q29udHJvbGxlcjogdGhpcy5hYm9ydENvbnRyb2xsZXIsXG4gICAgICByZWFkRmlsZVN0YXRlOiB0aGlzLnJlYWRGaWxlU3RhdGUsXG4gICAgICBuZXN0ZWRNZW1vcnlBdHRhY2htZW50VHJpZ2dlcnM6IG5ldyBTZXQ8c3RyaW5nPigpLFxuICAgICAgbG9hZGVkTmVzdGVkTWVtb3J5UGF0aHM6IHRoaXMubG9hZGVkTmVzdGVkTWVtb3J5UGF0aHMsXG4gICAgICBkeW5hbWljU2tpbGxEaXJUcmlnZ2VyczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgICBkaXNjb3ZlcmVkU2tpbGxOYW1lczogdGhpcy5kaXNjb3ZlcmVkU2tpbGxOYW1lcyxcbiAgICAgIHNldEluUHJvZ3Jlc3NUb29sVXNlSURzOiAoKSA9PiB7fSxcbiAgICAgIHNldFJlc3BvbnNlTGVuZ3RoOiAoKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUZpbGVIaXN0b3J5U3RhdGU6IChcbiAgICAgICAgdXBkYXRlcjogKHByZXY6IEZpbGVIaXN0b3J5U3RhdGUpID0+IEZpbGVIaXN0b3J5U3RhdGUsXG4gICAgICApID0+IHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHVwZGF0ZXIocHJldi5maWxlSGlzdG9yeSlcbiAgICAgICAgICBpZiAodXBkYXRlZCA9PT0gcHJldi5maWxlSGlzdG9yeSkgcmV0dXJuIHByZXZcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBmaWxlSGlzdG9yeTogdXBkYXRlZCB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdXBkYXRlQXR0cmlidXRpb25TdGF0ZTogKFxuICAgICAgICB1cGRhdGVyOiAocHJldjogQXR0cmlidXRpb25TdGF0ZSkgPT4gQXR0cmlidXRpb25TdGF0ZSxcbiAgICAgICkgPT4ge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkID0gdXBkYXRlcihwcmV2LmF0dHJpYnV0aW9uKVxuICAgICAgICAgIGlmICh1cGRhdGVkID09PSBwcmV2LmF0dHJpYnV0aW9uKSByZXR1cm4gcHJldlxuICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIGF0dHJpYnV0aW9uOiB1cGRhdGVkIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzZXRTREtTdGF0dXMsXG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIG9ycGhhbmVkIHBlcm1pc3Npb24gKG9ubHkgb25jZSBwZXIgZW5naW5lIGxpZmV0aW1lKVxuICAgIGlmIChvcnBoYW5lZFBlcm1pc3Npb24gJiYgIXRoaXMuaGFzSGFuZGxlZE9ycGhhbmVkUGVybWlzc2lvbikge1xuICAgICAgdGhpcy5oYXNIYW5kbGVkT3JwaGFuZWRQZXJtaXNzaW9uID0gdHJ1ZVxuICAgICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvbihcbiAgICAgICAgb3JwaGFuZWRQZXJtaXNzaW9uLFxuICAgICAgICB0b29scyxcbiAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICAgICAgKSkge1xuICAgICAgICB5aWVsZCBtZXNzYWdlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCxcbiAgICAgIHNob3VsZFF1ZXJ5LFxuICAgICAgYWxsb3dlZFRvb2xzLFxuICAgICAgbW9kZWw6IG1vZGVsRnJvbVVzZXJJbnB1dCxcbiAgICAgIHJlc3VsdFRleHQsXG4gICAgfSA9IGF3YWl0IHByb2Nlc3NVc2VySW5wdXQoe1xuICAgICAgaW5wdXQ6IHByb21wdCxcbiAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgc2V0VG9vbEpTWDogKCkgPT4ge30sXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIC4uLnByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICAgICAgICBtZXNzYWdlczogdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHRoaXMubXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgdXVpZDogb3B0aW9ucz8udXVpZCxcbiAgICAgIGlzTWV0YTogb3B0aW9ucz8uaXNNZXRhLFxuICAgICAgcXVlcnlTb3VyY2U6ICdzZGsnLFxuICAgIH0pXG5cbiAgICAvLyBQdXNoIG5ldyBtZXNzYWdlcywgaW5jbHVkaW5nIHVzZXIgaW5wdXQgYW5kIGFueSBhdHRhY2htZW50c1xuICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLnB1c2goLi4ubWVzc2FnZXNGcm9tVXNlcklucHV0KVxuXG4gICAgLy8gVXBkYXRlIHBhcmFtcyB0byByZWZsZWN0IHVwZGF0ZXMgZnJvbSBwcm9jZXNzaW5nIC9zbGFzaCBjb21tYW5kc1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRoaXMubXV0YWJsZU1lc3NhZ2VzXVxuXG4gICAgLy8gUGVyc2lzdCB0aGUgdXNlcidzIG1lc3NhZ2UocykgdG8gdHJhbnNjcmlwdCBCRUZPUkUgZW50ZXJpbmcgdGhlIHF1ZXJ5XG4gICAgLy8gbG9vcC4gVGhlIGZvci1hd2FpdCBiZWxvdyBvbmx5IGNhbGxzIHJlY29yZFRyYW5zY3JpcHQgd2hlbiBhc2soKSB5aWVsZHNcbiAgICAvLyBhbiBhc3Npc3RhbnQvdXNlci9jb21wYWN0X2JvdW5kYXJ5IG1lc3NhZ2UgXHUyMDE0IHdoaWNoIGRvZXNuJ3QgaGFwcGVuIHVudGlsXG4gICAgLy8gdGhlIEFQSSByZXNwb25kcy4gSWYgdGhlIHByb2Nlc3MgaXMga2lsbGVkIGJlZm9yZSB0aGF0IChlLmcuIHVzZXIgY2xpY2tzXG4gICAgLy8gU3RvcCBpbiBjb3dvcmsgc2Vjb25kcyBhZnRlciBzZW5kKSwgdGhlIHRyYW5zY3JpcHQgaXMgbGVmdCB3aXRoIG9ubHlcbiAgICAvLyBxdWV1ZS1vcGVyYXRpb24gZW50cmllczsgZ2V0TGFzdFNlc3Npb25Mb2cgZmlsdGVycyB0aG9zZSBvdXQsIHJldHVybnNcbiAgICAvLyBudWxsLCBhbmQgLS1yZXN1bWUgZmFpbHMgd2l0aCBcIk5vIGNvbnZlcnNhdGlvbiBmb3VuZFwiLiBXcml0aW5nIG5vdyBtYWtlc1xuICAgIC8vIHRoZSB0cmFuc2NyaXB0IHJlc3VtYWJsZSBmcm9tIHRoZSBwb2ludCB0aGUgdXNlciBtZXNzYWdlIHdhcyBhY2NlcHRlZCxcbiAgICAvLyBldmVuIGlmIG5vIEFQSSByZXNwb25zZSBldmVyIGFycml2ZXMuXG4gICAgLy9cbiAgICAvLyAtLWJhcmUgLyBTSU1QTEU6IGZpcmUtYW5kLWZvcmdldC4gU2NyaXB0ZWQgY2FsbHMgZG9uJ3QgLS1yZXN1bWUgYWZ0ZXJcbiAgICAvLyBraWxsLW1pZC1yZXF1ZXN0LiBUaGUgYXdhaXQgaXMgfjRtcyBvbiBTU0QsIH4zMG1zIHVuZGVyIGRpc2sgY29udGVudGlvblxuICAgIC8vIFx1MjAxNCB0aGUgc2luZ2xlIGxhcmdlc3QgY29udHJvbGxhYmxlIGNyaXRpY2FsLXBhdGggY29zdCBhZnRlciBtb2R1bGUgZXZhbC5cbiAgICAvLyBUcmFuc2NyaXB0IGlzIHN0aWxsIHdyaXR0ZW4gKGZvciBwb3N0LWhvYyBkZWJ1Z2dpbmcpOyBqdXN0IG5vdCBibG9ja2luZy5cbiAgICBpZiAocGVyc2lzdFNlc3Npb24gJiYgbWVzc2FnZXNGcm9tVXNlcklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyYW5zY3JpcHRQcm9taXNlID0gcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgIGlmIChpc0JhcmVNb2RlKCkpIHtcbiAgICAgICAgdm9pZCB0cmFuc2NyaXB0UHJvbWlzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdHJhbnNjcmlwdFByb21pc2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VBR0VSX0ZMVVNIKSB8fFxuICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0lTX0NPV09SSylcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXdhaXQgZmx1c2hTZXNzaW9uU3RvcmFnZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgbWVzc2FnZXMgdGhhdCBzaG91bGQgYmUgYWNrbm93bGVkZ2VkIGFmdGVyIHRyYW5zY3JpcHRcbiAgICBjb25zdCByZXBsYXlhYmxlTWVzc2FnZXMgPSBtZXNzYWdlc0Zyb21Vc2VySW5wdXQuZmlsdGVyKFxuICAgICAgbXNnID0+XG4gICAgICAgIChtc2cudHlwZSA9PT0gJ3VzZXInICYmXG4gICAgICAgICAgIW1zZy5pc01ldGEgJiYgLy8gU2tpcCBzeW50aGV0aWMgY2F2ZWF0IG1lc3NhZ2VzXG4gICAgICAgICAgIW1zZy50b29sVXNlUmVzdWx0ICYmIC8vIFNraXAgdG9vbCByZXN1bHRzICh0aGV5J2xsIGJlIGFja2VkIGZyb20gcXVlcnkpXG4gICAgICAgICAgbWVzc2FnZVNlbGVjdG9yKCkuc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcihtc2cpKSB8fCAvLyBTa2lwIG5vbi11c2VyLWF1dGhvcmVkIG1lc3NhZ2VzICh0YXNrIG5vdGlmaWNhdGlvbnMsIGV0Yy4pXG4gICAgICAgIChtc2cudHlwZSA9PT0gJ3N5c3RlbScgJiYgbXNnLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5JyksIC8vIEFsd2F5cyBhY2sgY29tcGFjdCBib3VuZGFyaWVzXG4gICAgKVxuICAgIGNvbnN0IG1lc3NhZ2VzVG9BY2sgPSByZXBsYXlVc2VyTWVzc2FnZXMgPyByZXBsYXlhYmxlTWVzc2FnZXMgOiBbXVxuXG4gICAgLy8gVXBkYXRlIHRoZSBUb29sUGVybWlzc2lvbkNvbnRleHQgYmFzZWQgb24gdXNlciBpbnB1dCBwcm9jZXNzaW5nIChhcyBuZWNlc3NhcnkpXG4gICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDoge1xuICAgICAgICAuLi5wcmV2LnRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICAgICAgYWx3YXlzQWxsb3dSdWxlczoge1xuICAgICAgICAgIC4uLnByZXYudG9vbFBlcm1pc3Npb25Db250ZXh0LmFsd2F5c0FsbG93UnVsZXMsXG4gICAgICAgICAgY29tbWFuZDogYWxsb3dlZFRvb2xzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSlcblxuICAgIGNvbnN0IG1haW5Mb29wTW9kZWwgPSBtb2RlbEZyb21Vc2VySW5wdXQgPz8gaW5pdGlhbE1haW5Mb29wTW9kZWxcblxuICAgIC8vIFJlY3JlYXRlIGFmdGVyIHByb2Nlc3NpbmcgdGhlIHByb21wdCB0byBwaWNrIHVwIHVwZGF0ZWQgbWVzc2FnZXMgYW5kXG4gICAgLy8gbW9kZWwgKGZyb20gc2xhc2ggY29tbWFuZHMpLlxuICAgIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0ID0ge1xuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZXRNZXNzYWdlczogKCkgPT4ge30sXG4gICAgICBvbkNoYW5nZUFQSUtleTogKCkgPT4ge30sXG4gICAgICBoYW5kbGVFbGljaXRhdGlvbjogdGhpcy5jb25maWcuaGFuZGxlRWxpY2l0YXRpb24sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHRvb2xzLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICB0aGlua2luZ0NvbmZpZzogaW5pdGlhbFRoaW5raW5nQ29uZmlnLFxuICAgICAgICBtY3BDbGllbnRzLFxuICAgICAgICBtY3BSZXNvdXJjZXM6IHt9LFxuICAgICAgICBpZGVJbnN0YWxsYXRpb25TdGF0dXM6IG51bGwsXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICAgIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgICAgICAgdGhlbWU6IHJlc29sdmVUaGVtZVNldHRpbmcoZ2V0R2xvYmFsQ29uZmlnKCkudGhlbWUpLFxuICAgICAgICBhZ2VudERlZmluaXRpb25zOiB7IGFjdGl2ZUFnZW50czogYWdlbnRzLCBhbGxBZ2VudHM6IFtdIH0sXG4gICAgICAgIG1heEJ1ZGdldFVzZCxcbiAgICAgIH0sXG4gICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgYWJvcnRDb250cm9sbGVyOiB0aGlzLmFib3J0Q29udHJvbGxlcixcbiAgICAgIHJlYWRGaWxlU3RhdGU6IHRoaXMucmVhZEZpbGVTdGF0ZSxcbiAgICAgIG5lc3RlZE1lbW9yeUF0dGFjaG1lbnRUcmlnZ2VyczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgICBsb2FkZWROZXN0ZWRNZW1vcnlQYXRoczogdGhpcy5sb2FkZWROZXN0ZWRNZW1vcnlQYXRocyxcbiAgICAgIGR5bmFtaWNTa2lsbERpclRyaWdnZXJzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICAgIGRpc2NvdmVyZWRTa2lsbE5hbWVzOiB0aGlzLmRpc2NvdmVyZWRTa2lsbE5hbWVzLFxuICAgICAgc2V0SW5Qcm9ncmVzc1Rvb2xVc2VJRHM6ICgpID0+IHt9LFxuICAgICAgc2V0UmVzcG9uc2VMZW5ndGg6ICgpID0+IHt9LFxuICAgICAgdXBkYXRlRmlsZUhpc3RvcnlTdGF0ZTogcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQudXBkYXRlRmlsZUhpc3RvcnlTdGF0ZSxcbiAgICAgIHVwZGF0ZUF0dHJpYnV0aW9uU3RhdGU6IHByb2Nlc3NVc2VySW5wdXRDb250ZXh0LnVwZGF0ZUF0dHJpYnV0aW9uU3RhdGUsXG4gICAgICBzZXRTREtTdGF0dXMsXG4gICAgfVxuXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2JlZm9yZV9za2lsbHNfcGx1Z2lucycpXG4gICAgLy8gQ2FjaGUtb25seTogaGVhZGxlc3MvU0RLL0NDUiBzdGFydHVwIG11c3Qgbm90IGJsb2NrIG9uIG5ldHdvcmsgZm9yXG4gICAgLy8gcmVmLXRyYWNrZWQgcGx1Z2lucy4gQ0NSIHBvcHVsYXRlcyB0aGUgY2FjaGUgdmlhIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTExcbiAgICAvLyAoaGVhZGxlc3NQbHVnaW5JbnN0YWxsKSBvciBDTEFVREVfQ09ERV9QTFVHSU5fU0VFRF9ESVIgYmVmb3JlIHRoaXMgcnVucztcbiAgICAvLyBTREsgY2FsbGVycyB0aGF0IG5lZWQgZnJlc2ggc291cmNlIGNhbiBjYWxsIC9yZWxvYWQtcGx1Z2lucy5cbiAgICBjb25zdCBbc2tpbGxzLCB7IGVuYWJsZWQ6IGVuYWJsZWRQbHVnaW5zIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0U2xhc2hDb21tYW5kVG9vbFNraWxscyhnZXRDd2QoKSksXG4gICAgICBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSgpLFxuICAgIF0pXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX3NraWxsc19wbHVnaW5zJylcblxuICAgIHlpZWxkIGJ1aWxkU3lzdGVtSW5pdE1lc3NhZ2Uoe1xuICAgICAgdG9vbHMsXG4gICAgICBtY3BDbGllbnRzLFxuICAgICAgbW9kZWw6IG1haW5Mb29wTW9kZWwsXG4gICAgICBwZXJtaXNzaW9uTW9kZTogaW5pdGlhbEFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dFxuICAgICAgICAubW9kZSBhcyBQZXJtaXNzaW9uTW9kZSwgLy8gVE9ETzogYXZvaWQgdGhlIGNhc3RcbiAgICAgIGNvbW1hbmRzLFxuICAgICAgYWdlbnRzLFxuICAgICAgc2tpbGxzLFxuICAgICAgcGx1Z2luczogZW5hYmxlZFBsdWdpbnMsXG4gICAgICBmYXN0TW9kZTogaW5pdGlhbEFwcFN0YXRlLmZhc3RNb2RlLFxuICAgIH0pXG5cbiAgICAvLyBSZWNvcmQgd2hlbiBzeXN0ZW0gbWVzc2FnZSBpcyB5aWVsZGVkIGZvciBoZWFkbGVzcyBsYXRlbmN5IHRyYWNraW5nXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ3N5c3RlbV9tZXNzYWdlX3lpZWxkZWQnKVxuXG4gICAgaWYgKCFzaG91bGRRdWVyeSkge1xuICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGxvY2FsIHNsYXNoIGNvbW1hbmRzLlxuICAgICAgLy8gVXNlIG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCAobm90IHJlcGxheWFibGVNZXNzYWdlcykgZm9yIGNvbW1hbmQgb3V0cHV0XG4gICAgICAvLyBiZWNhdXNlIHNlbGVjdGFibGVVc2VyTWVzc2FnZXNGaWx0ZXIgZXhjbHVkZXMgbG9jYWwtY29tbWFuZC1zdGRvdXQgdGFncy5cbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbXNnLnR5cGUgPT09ICd1c2VyJyAmJlxuICAgICAgICAgIHR5cGVvZiBtc2cubWVzc2FnZS5jb250ZW50ID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIChtc2cubWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NURE9VVF9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cubWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NUREVSUl9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cuaXNDb21wYWN0U3VtbWFyeSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAuLi5tc2cubWVzc2FnZSxcbiAgICAgICAgICAgICAgY29udGVudDogc3RyaXBBbnNpKG1zZy5tZXNzYWdlLmNvbnRlbnQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgdXVpZDogbXNnLnV1aWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG1zZy50aW1lc3RhbXAsXG4gICAgICAgICAgICBpc1JlcGxheTogIW1zZy5pc0NvbXBhY3RTdW1tYXJ5LFxuICAgICAgICAgICAgaXNTeW50aGV0aWM6IG1zZy5pc01ldGEgfHwgbXNnLmlzVmlzaWJsZUluVHJhbnNjcmlwdE9ubHksXG4gICAgICAgICAgfSBhcyBTREtVc2VyTWVzc2FnZVJlcGxheVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9jYWwgY29tbWFuZCBvdXRwdXQgXHUyMDE0IHlpZWxkIGFzIGEgc3ludGhldGljIGFzc2lzdGFudCBtZXNzYWdlIHNvXG4gICAgICAgIC8vIFJDIHJlbmRlcnMgaXQgYXMgYXNzaXN0YW50LXN0eWxlIHRleHQgcmF0aGVyIHRoYW4gYSB1c2VyIGJ1YmJsZS5cbiAgICAgICAgLy8gRW1pdHRlZCBhcyBhc3Npc3RhbnQgKG5vdCB0aGUgZGVkaWNhdGVkIFNES0xvY2FsQ29tbWFuZE91dHB1dE1lc3NhZ2VcbiAgICAgICAgLy8gc3lzdGVtIHN1YnR5cGUpIHNvIG1vYmlsZSBjbGllbnRzICsgc2Vzc2lvbi1pbmdyZXNzIGNhbiBwYXJzZSBpdC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1zZy50eXBlID09PSAnc3lzdGVtJyAmJlxuICAgICAgICAgIG1zZy5zdWJ0eXBlID09PSAnbG9jYWxfY29tbWFuZCcgJiZcbiAgICAgICAgICB0eXBlb2YgbXNnLmNvbnRlbnQgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgKG1zZy5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NURE9VVF9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cuY29udGVudC5pbmNsdWRlcyhgPCR7TE9DQUxfQ09NTUFORF9TVERFUlJfVEFHfT5gKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWllbGQgbG9jYWxDb21tYW5kT3V0cHV0VG9TREtBc3Npc3RhbnRNZXNzYWdlKG1zZy5jb250ZW50LCBtc2cudXVpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N5c3RlbScgJiYgbXNnLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5Jykge1xuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgICAgICAgICAgc3VidHlwZTogJ2NvbXBhY3RfYm91bmRhcnknIGFzIGNvbnN0LFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB1dWlkOiBtc2cudXVpZCxcbiAgICAgICAgICAgIGNvbXBhY3RfbWV0YWRhdGE6IHRvU0RLQ29tcGFjdE1ldGFkYXRhKG1zZy5jb21wYWN0TWV0YWRhdGEpLFxuICAgICAgICAgIH0gYXMgU0RLQ29tcGFjdEJvdW5kYXJ5TWVzc2FnZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgICBhd2FpdCByZWNvcmRUcmFuc2NyaXB0KG1lc3NhZ2VzKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRUFHRVJfRkxVU0gpIHx8XG4gICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfSVNfQ09XT1JLKVxuICAgICAgICApIHtcbiAgICAgICAgICBhd2FpdCBmbHVzaFNlc3Npb25TdG9yYWdlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB5aWVsZCB7XG4gICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIGlzX2Vycm9yOiBmYWxzZSxcbiAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgICBudW1fdHVybnM6IG1lc3NhZ2VzLmxlbmd0aCAtIDEsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0VGV4dCA/PyAnJyxcbiAgICAgICAgc3RvcF9yZWFzb246IG51bGwsXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICksXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChmaWxlSGlzdG9yeUVuYWJsZWQoKSAmJiBwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgbWVzc2FnZXNGcm9tVXNlcklucHV0XG4gICAgICAgIC5maWx0ZXIobWVzc2FnZVNlbGVjdG9yKCkuc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcilcbiAgICAgICAgLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgdm9pZCBmaWxlSGlzdG9yeU1ha2VTbmFwc2hvdChcbiAgICAgICAgICAgICh1cGRhdGVyOiAocHJldjogRmlsZUhpc3RvcnlTdGF0ZSkgPT4gRmlsZUhpc3RvcnlTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmaWxlSGlzdG9yeTogdXBkYXRlcihwcmV2LmZpbGVIaXN0b3J5KSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZS51dWlkLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBUcmFjayBjdXJyZW50IG1lc3NhZ2UgdXNhZ2UgKHJlc2V0IG9uIGVhY2ggbWVzc2FnZV9zdGFydClcbiAgICBsZXQgY3VycmVudE1lc3NhZ2VVc2FnZTogTm9uTnVsbGFibGVVc2FnZSA9IEVNUFRZX1VTQUdFXG4gICAgbGV0IHR1cm5Db3VudCA9IDFcbiAgICBsZXQgaGFzQWNrbm93bGVkZ2VkSW5pdGlhbE1lc3NhZ2VzID0gZmFsc2VcbiAgICAvLyBUcmFjayBzdHJ1Y3R1cmVkIG91dHB1dCBmcm9tIFN0cnVjdHVyZWRPdXRwdXQgdG9vbCBjYWxsc1xuICAgIGxldCBzdHJ1Y3R1cmVkT3V0cHV0RnJvbVRvb2w6IHVua25vd25cbiAgICAvLyBUcmFjayB0aGUgbGFzdCBzdG9wX3JlYXNvbiBmcm9tIGFzc2lzdGFudCBtZXNzYWdlc1xuICAgIGxldCBsYXN0U3RvcFJlYXNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICAvLyBSZWZlcmVuY2UtYmFzZWQgd2F0ZXJtYXJrIHNvIGVycm9yX2R1cmluZ19leGVjdXRpb24ncyBlcnJvcnNbXSBpc1xuICAgIC8vIHR1cm4tc2NvcGVkLiBBIGxlbmd0aC1iYXNlZCBpbmRleCBicmVha3Mgd2hlbiB0aGUgMTAwLWVudHJ5IHJpbmcgYnVmZmVyXG4gICAgLy8gc2hpZnQoKXMgZHVyaW5nIHRoZSB0dXJuIFx1MjAxNCB0aGUgaW5kZXggc2xpZGVzLiBJZiB0aGlzIGVudHJ5IGlzIHJvdGF0ZWRcbiAgICAvLyBvdXQsIGxhc3RJbmRleE9mIHJldHVybnMgLTEgYW5kIHdlIGluY2x1ZGUgZXZlcnl0aGluZyAoc2FmZSBmYWxsYmFjaykuXG4gICAgY29uc3QgZXJyb3JMb2dXYXRlcm1hcmsgPSBnZXRJbk1lbW9yeUVycm9ycygpLmF0KC0xKVxuICAgIC8vIFNuYXBzaG90IGNvdW50IGJlZm9yZSB0aGlzIHF1ZXJ5IGZvciBkZWx0YS1iYXNlZCByZXRyeSBsaW1pdGluZ1xuICAgIGNvbnN0IGluaXRpYWxTdHJ1Y3R1cmVkT3V0cHV0Q2FsbHMgPSBqc29uU2NoZW1hXG4gICAgICA/IGNvdW50VG9vbENhbGxzKHRoaXMubXV0YWJsZU1lc3NhZ2VzLCBTWU5USEVUSUNfT1VUUFVUX1RPT0xfTkFNRSlcbiAgICAgIDogMFxuXG4gICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIHF1ZXJ5KHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgc3lzdGVtUHJvbXB0LFxuICAgICAgdXNlckNvbnRleHQsXG4gICAgICBzeXN0ZW1Db250ZXh0LFxuICAgICAgY2FuVXNlVG9vbDogd3JhcHBlZENhblVzZVRvb2wsXG4gICAgICB0b29sVXNlQ29udGV4dDogcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQsXG4gICAgICBmYWxsYmFja01vZGVsLFxuICAgICAgcXVlcnlTb3VyY2U6ICdzZGsnLFxuICAgICAgbWF4VHVybnMsXG4gICAgICB0YXNrQnVkZ2V0LFxuICAgIH0pKSB7XG4gICAgICAvLyBSZWNvcmQgYXNzaXN0YW50LCB1c2VyLCBhbmQgY29tcGFjdCBib3VuZGFyeSBtZXNzYWdlc1xuICAgICAgaWYgKFxuICAgICAgICBtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnIHx8XG4gICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gJ3VzZXInIHx8XG4gICAgICAgIChtZXNzYWdlLnR5cGUgPT09ICdzeXN0ZW0nICYmIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ2NvbXBhY3RfYm91bmRhcnknKVxuICAgICAgKSB7XG4gICAgICAgIC8vIEJlZm9yZSB3cml0aW5nIGEgY29tcGFjdCBib3VuZGFyeSwgZmx1c2ggYW55IGluLW1lbW9yeS1vbmx5XG4gICAgICAgIC8vIG1lc3NhZ2VzIHVwIHRocm91Z2ggdGhlIHByZXNlcnZlZFNlZ21lbnQgdGFpbC4gQXR0YWNobWVudHMgYW5kXG4gICAgICAgIC8vIHByb2dyZXNzIGFyZSBub3cgcmVjb3JkZWQgaW5saW5lICh0aGVpciBzd2l0Y2ggY2FzZXMgYmVsb3cpLCBidXRcbiAgICAgICAgLy8gdGhpcyBmbHVzaCBzdGlsbCBtYXR0ZXJzIGZvciB0aGUgcHJlc2VydmVkU2VnbWVudCB0YWlsIHdhbGsuXG4gICAgICAgIC8vIElmIHRoZSBTREsgc3VicHJvY2VzcyByZXN0YXJ0cyBiZWZvcmUgdGhlbiAoY2xhdWRlLWRlc2t0b3Aga2lsbHNcbiAgICAgICAgLy8gYmV0d2VlbiB0dXJucyksIHRhaWxVdWlkIHBvaW50cyB0byBhIG5ldmVyLXdyaXR0ZW4gbWVzc2FnZSBcdTIxOTJcbiAgICAgICAgLy8gYXBwbHlQcmVzZXJ2ZWRTZWdtZW50UmVsaW5rcyBmYWlscyBpdHMgdGFpbFx1MjE5MmhlYWQgd2FsayBcdTIxOTIgcmV0dXJuc1xuICAgICAgICAvLyB3aXRob3V0IHBydW5pbmcgXHUyMTkyIHJlc3VtZSBsb2FkcyBmdWxsIHByZS1jb21wYWN0IGhpc3RvcnkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwZXJzaXN0U2Vzc2lvbiAmJlxuICAgICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gJ3N5c3RlbScgJiZcbiAgICAgICAgICBtZXNzYWdlLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5J1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB0YWlsVXVpZCA9IG1lc3NhZ2UuY29tcGFjdE1ldGFkYXRhPy5wcmVzZXJ2ZWRTZWdtZW50Py50YWlsVXVpZFxuICAgICAgICAgIGlmICh0YWlsVXVpZCkge1xuICAgICAgICAgICAgY29uc3QgdGFpbElkeCA9IHRoaXMubXV0YWJsZU1lc3NhZ2VzLmZpbmRMYXN0SW5kZXgoXG4gICAgICAgICAgICAgIG0gPT4gbS51dWlkID09PSB0YWlsVXVpZCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmICh0YWlsSWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICBhd2FpdCByZWNvcmRUcmFuc2NyaXB0KHRoaXMubXV0YWJsZU1lc3NhZ2VzLnNsaWNlKDAsIHRhaWxJZHggKyAxKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAvLyBGaXJlLWFuZC1mb3JnZXQgZm9yIGFzc2lzdGFudCBtZXNzYWdlcy4gY2xhdWRlLnRzIHlpZWxkcyBvbmVcbiAgICAgICAgICAvLyBhc3Npc3RhbnQgbWVzc2FnZSBwZXIgY29udGVudCBibG9jaywgdGhlbiBtdXRhdGVzIHRoZSBsYXN0XG4gICAgICAgICAgLy8gb25lJ3MgbWVzc2FnZS51c2FnZS9zdG9wX3JlYXNvbiBvbiBtZXNzYWdlX2RlbHRhIFx1MjAxNCByZWx5aW5nIG9uXG4gICAgICAgICAgLy8gdGhlIHdyaXRlIHF1ZXVlJ3MgMTAwbXMgbGF6eSBqc29uU3RyaW5naWZ5LiBBd2FpdGluZyBoZXJlXG4gICAgICAgICAgLy8gYmxvY2tzIGFzaygpJ3MgZ2VuZXJhdG9yLCBzbyBtZXNzYWdlX2RlbHRhIGNhbid0IHJ1biB1bnRpbFxuICAgICAgICAgIC8vIGV2ZXJ5IGJsb2NrIGlzIGNvbnN1bWVkOyB0aGUgZHJhaW4gdGltZXIgKHN0YXJ0ZWQgYXQgYmxvY2sgMSlcbiAgICAgICAgICAvLyBlbGFwc2VzIGZpcnN0LiBJbnRlcmFjdGl2ZSBDQyBkb2Vzbid0IGhpdCB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAvLyB1c2VMb2dNZXNzYWdlcy50cyBmaXJlLWFuZC1mb3JnZXRzLiBlbnF1ZXVlV3JpdGUgaXNcbiAgICAgICAgICAvLyBvcmRlci1wcmVzZXJ2aW5nIHNvIGZpcmUtYW5kLWZvcmdldCBoZXJlIGlzIHNhZmUuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY2tub3dsZWRnZSBpbml0aWFsIHVzZXIgbWVzc2FnZXMgYWZ0ZXIgZmlyc3QgdHJhbnNjcmlwdCByZWNvcmRpbmdcbiAgICAgICAgaWYgKCFoYXNBY2tub3dsZWRnZWRJbml0aWFsTWVzc2FnZXMgJiYgbWVzc2FnZXNUb0Fjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGFzQWNrbm93bGVkZ2VkSW5pdGlhbE1lc3NhZ2VzID0gdHJ1ZVxuICAgICAgICAgIGZvciAoY29uc3QgbXNnVG9BY2sgb2YgbWVzc2FnZXNUb0Fjaykge1xuICAgICAgICAgICAgaWYgKG1zZ1RvQWNrLnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1RvQWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIHV1aWQ6IG1zZ1RvQWNrLnV1aWQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtc2dUb0Fjay50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgICAgICAgIH0gYXMgU0RLVXNlck1lc3NhZ2VSZXBsYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICAgIHR1cm5Db3VudCsrXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RvbWJzdG9uZSc6XG4gICAgICAgICAgLy8gVG9tYnN0b25lIG1lc3NhZ2VzIGFyZSBjb250cm9sIHNpZ25hbHMgZm9yIHJlbW92aW5nIG1lc3NhZ2VzLCBza2lwIHRoZW1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhc3Npc3RhbnQnOlxuICAgICAgICAgIC8vIENhcHR1cmUgc3RvcF9yZWFzb24gaWYgYWxyZWFkeSBzZXQgKHN5bnRoZXRpYyBtZXNzYWdlcykuIEZvclxuICAgICAgICAgIC8vIHN0cmVhbWVkIHJlc3BvbnNlcywgdGhpcyBpcyBudWxsIGF0IGNvbnRlbnRfYmxvY2tfc3RvcCB0aW1lO1xuICAgICAgICAgIC8vIHRoZSByZWFsIHZhbHVlIGFycml2ZXMgdmlhIG1lc3NhZ2VfZGVsdGEgKGhhbmRsZWQgYmVsb3cpLlxuICAgICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2Uuc3RvcF9yZWFzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgbGFzdFN0b3BSZWFzb24gPSBtZXNzYWdlLm1lc3NhZ2Uuc3RvcF9yZWFzb25cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgIHlpZWxkKiBub3JtYWxpemVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAvLyBSZWNvcmQgaW5saW5lIHNvIHRoZSBkZWR1cCBsb29wIGluIHRoZSBuZXh0IGFzaygpIGNhbGwgc2VlcyBpdFxuICAgICAgICAgIC8vIGFzIGFscmVhZHktcmVjb3JkZWQuIFdpdGhvdXQgdGhpcywgZGVmZXJyZWQgcHJvZ3Jlc3MgaW50ZXJsZWF2ZXNcbiAgICAgICAgICAvLyB3aXRoIGFscmVhZHktcmVjb3JkZWQgdG9vbF9yZXN1bHRzIGluIG11dGFibGVNZXNzYWdlcywgYW5kIHRoZVxuICAgICAgICAgIC8vIGRlZHVwIHdhbGsgZnJlZXplcyBzdGFydGluZ1BhcmVudFV1aWQgYXQgdGhlIHdyb25nIG1lc3NhZ2UgXHUyMDE0XG4gICAgICAgICAgLy8gZm9ya2luZyB0aGUgY2hhaW4gYW5kIG9ycGhhbmluZyB0aGUgY29udmVyc2F0aW9uIG9uIHJlc3VtZS5cbiAgICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG4gICAgICAgICAgeWllbGQqIG5vcm1hbGl6ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG4gICAgICAgICAgeWllbGQqIG5vcm1hbGl6ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzdHJlYW1fZXZlbnQnOlxuICAgICAgICAgIGlmIChtZXNzYWdlLmV2ZW50LnR5cGUgPT09ICdtZXNzYWdlX3N0YXJ0Jykge1xuICAgICAgICAgICAgLy8gUmVzZXQgY3VycmVudCBtZXNzYWdlIHVzYWdlIGZvciBuZXcgbWVzc2FnZVxuICAgICAgICAgICAgY3VycmVudE1lc3NhZ2VVc2FnZSA9IEVNUFRZX1VTQUdFXG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZVVzYWdlID0gdXBkYXRlVXNhZ2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQubWVzc2FnZS51c2FnZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQudHlwZSA9PT0gJ21lc3NhZ2VfZGVsdGEnKSB7XG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZVVzYWdlID0gdXBkYXRlVXNhZ2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQudXNhZ2UsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHN0b3BfcmVhc29uIGZyb20gbWVzc2FnZV9kZWx0YS4gVGhlIGFzc2lzdGFudCBtZXNzYWdlXG4gICAgICAgICAgICAvLyBpcyB5aWVsZGVkIGF0IGNvbnRlbnRfYmxvY2tfc3RvcCB3aXRoIHN0b3BfcmVhc29uPW51bGw7IHRoZVxuICAgICAgICAgICAgLy8gcmVhbCB2YWx1ZSBvbmx5IGFycml2ZXMgaGVyZSAoc2VlIGNsYXVkZS50cyBtZXNzYWdlX2RlbHRhXG4gICAgICAgICAgICAvLyBoYW5kbGVyKS4gV2l0aG91dCB0aGlzLCByZXN1bHQuc3RvcF9yZWFzb24gaXMgYWx3YXlzIG51bGwuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5ldmVudC5kZWx0YS5zdG9wX3JlYXNvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGxhc3RTdG9wUmVhc29uID0gbWVzc2FnZS5ldmVudC5kZWx0YS5zdG9wX3JlYXNvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVzc2FnZS5ldmVudC50eXBlID09PSAnbWVzc2FnZV9zdG9wJykge1xuICAgICAgICAgICAgLy8gQWNjdW11bGF0ZSBjdXJyZW50IG1lc3NhZ2UgdXNhZ2UgaW50byB0b3RhbFxuICAgICAgICAgICAgdGhpcy50b3RhbFVzYWdlID0gYWNjdW11bGF0ZVVzYWdlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmVhbV9ldmVudCcgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50LFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXR0YWNobWVudCc6XG4gICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgIC8vIFJlY29yZCBpbmxpbmUgKHNhbWUgcmVhc29uIGFzIHByb2dyZXNzIGFib3ZlKS5cbiAgICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IHN0cnVjdHVyZWQgb3V0cHV0IGZyb20gU3RydWN0dXJlZE91dHB1dCB0b29sIGNhbGxzXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuYXR0YWNobWVudC50eXBlID09PSAnc3RydWN0dXJlZF9vdXRwdXQnKSB7XG4gICAgICAgICAgICBzdHJ1Y3R1cmVkT3V0cHV0RnJvbVRvb2wgPSBtZXNzYWdlLmF0dGFjaG1lbnQuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIYW5kbGUgbWF4IHR1cm5zIHJlYWNoZWQgc2lnbmFsIGZyb20gcXVlcnkudHNcbiAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmF0dGFjaG1lbnQudHlwZSA9PT0gJ21heF90dXJuc19yZWFjaGVkJykge1xuICAgICAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FQUdFUl9GTFVTSCkgfHxcbiAgICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGZsdXNoU2Vzc2lvblN0b3JhZ2UoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfbWF4X3R1cm5zJyxcbiAgICAgICAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgICAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgICAgICAgICBpc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgbnVtX3R1cm5zOiBtZXNzYWdlLmF0dGFjaG1lbnQudHVybkNvdW50LFxuICAgICAgICAgICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICAgICAgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgdHVybnMgKCR7bWVzc2FnZS5hdHRhY2htZW50Lm1heFR1cm5zfSlgLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFlpZWxkIHF1ZXVlZF9jb21tYW5kIGF0dGFjaG1lbnRzIGFzIFNESyB1c2VyIG1lc3NhZ2UgcmVwbGF5c1xuICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgcmVwbGF5VXNlck1lc3NhZ2VzICYmXG4gICAgICAgICAgICBtZXNzYWdlLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICByb2xlOiAndXNlcicgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZS5hdHRhY2htZW50LnByb21wdCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgdXVpZDogbWVzc2FnZS5hdHRhY2htZW50LnNvdXJjZV91dWlkIHx8IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBtZXNzYWdlLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgICAgICB9IGFzIFNES1VzZXJNZXNzYWdlUmVwbGF5XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N0cmVhbV9yZXF1ZXN0X3N0YXJ0JzpcbiAgICAgICAgICAvLyBEb24ndCB5aWVsZCBzdHJlYW0gcmVxdWVzdCBzdGFydCBtZXNzYWdlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N5c3RlbSc6IHtcbiAgICAgICAgICAvLyBTbmlwIGJvdW5kYXJ5OiByZXBsYXkgb24gb3VyIHN0b3JlIHRvIHJlbW92ZSB6b21iaWUgbWVzc2FnZXMgYW5kXG4gICAgICAgICAgLy8gc3RhbGUgbWFya2Vycy4gVGhlIHlpZWxkZWQgYm91bmRhcnkgaXMgYSBzaWduYWwsIG5vdCBkYXRhIHRvIHB1c2ggXHUyMDE0XG4gICAgICAgICAgLy8gdGhlIHJlcGxheSBwcm9kdWNlcyBpdHMgb3duIGVxdWl2YWxlbnQgYm91bmRhcnkuIFdpdGhvdXQgdGhpcyxcbiAgICAgICAgICAvLyBtYXJrZXJzIHBlcnNpc3QgYW5kIHJlLXRyaWdnZXIgb24gZXZlcnkgdHVybiwgYW5kIG11dGFibGVNZXNzYWdlc1xuICAgICAgICAgIC8vIG5ldmVyIHNocmlua3MgKG1lbW9yeSBsZWFrIGluIGxvbmcgU0RLIHNlc3Npb25zKS4gVGhlIHN1YnR5cGVcbiAgICAgICAgICAvLyBjaGVjayBsaXZlcyBpbnNpZGUgdGhlIGluamVjdGVkIGNhbGxiYWNrIHNvIGZlYXR1cmUtZ2F0ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0YXkgb3V0IG9mIHRoaXMgZmlsZSAoZXhjbHVkZWQtc3RyaW5ncyBjaGVjaykuXG4gICAgICAgICAgY29uc3Qgc25pcFJlc3VsdCA9IHRoaXMuY29uZmlnLnNuaXBSZXBsYXk/LihcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcyxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHNuaXBSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHNuaXBSZXN1bHQuZXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMubGVuZ3RoID0gMFxuICAgICAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKC4uLnNuaXBSZXN1bHQubWVzc2FnZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG4gICAgICAgICAgLy8gWWllbGQgY29tcGFjdCBib3VuZGFyeSBtZXNzYWdlcyB0byBTREtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5JyAmJlxuICAgICAgICAgICAgbWVzc2FnZS5jb21wYWN0TWV0YWRhdGFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgcHJlLWNvbXBhY3Rpb24gbWVzc2FnZXMgZm9yIEdDLiBUaGUgYm91bmRhcnkgd2FzIGp1c3RcbiAgICAgICAgICAgIC8vIHB1c2hlZCBzbyBpdCdzIHRoZSBsYXN0IGVsZW1lbnQuIHF1ZXJ5LnRzIGFscmVhZHkgdXNlc1xuICAgICAgICAgICAgLy8gZ2V0TWVzc2FnZXNBZnRlckNvbXBhY3RCb3VuZGFyeSgpIGludGVybmFsbHksIHNvIG9ubHlcbiAgICAgICAgICAgIC8vIHBvc3QtYm91bmRhcnkgbWVzc2FnZXMgYXJlIG5lZWRlZCBnb2luZyBmb3J3YXJkLlxuICAgICAgICAgICAgY29uc3QgbXV0YWJsZUJvdW5kYXJ5SWR4ID0gdGhpcy5tdXRhYmxlTWVzc2FnZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgaWYgKG11dGFibGVCb3VuZGFyeUlkeCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMuc3BsaWNlKDAsIG11dGFibGVCb3VuZGFyeUlkeClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQm91bmRhcnlJZHggPSBtZXNzYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICBpZiAobG9jYWxCb3VuZGFyeUlkeCA+IDApIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIGxvY2FsQm91bmRhcnlJZHgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdjb21wYWN0X2JvdW5kYXJ5JyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgICAgY29tcGFjdF9tZXRhZGF0YTogdG9TREtDb21wYWN0TWV0YWRhdGEobWVzc2FnZS5jb21wYWN0TWV0YWRhdGEpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVzc2FnZS5zdWJ0eXBlID09PSAnYXBpX2Vycm9yJykge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2FwaV9yZXRyeScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGF0dGVtcHQ6IG1lc3NhZ2UucmV0cnlBdHRlbXB0LFxuICAgICAgICAgICAgICBtYXhfcmV0cmllczogbWVzc2FnZS5tYXhSZXRyaWVzLFxuICAgICAgICAgICAgICByZXRyeV9kZWxheV9tczogbWVzc2FnZS5yZXRyeUluTXMsXG4gICAgICAgICAgICAgIGVycm9yX3N0YXR1czogbWVzc2FnZS5lcnJvci5zdGF0dXMgPz8gbnVsbCxcbiAgICAgICAgICAgICAgZXJyb3I6IGNhdGVnb3JpemVSZXRyeWFibGVBUElFcnJvcihtZXNzYWdlLmVycm9yKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRG9uJ3QgeWllbGQgb3RoZXIgc3lzdGVtIG1lc3NhZ2VzIGluIGhlYWRsZXNzIG1vZGVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3Rvb2xfdXNlX3N1bW1hcnknOlxuICAgICAgICAgIC8vIFlpZWxkIHRvb2wgdXNlIHN1bW1hcnkgbWVzc2FnZXMgdG8gU0RLXG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgdHlwZTogJ3Rvb2xfdXNlX3N1bW1hcnknIGFzIGNvbnN0LFxuICAgICAgICAgICAgc3VtbWFyeTogbWVzc2FnZS5zdW1tYXJ5LFxuICAgICAgICAgICAgcHJlY2VkaW5nX3Rvb2xfdXNlX2lkczogbWVzc2FnZS5wcmVjZWRpbmdUb29sVXNlSWRzLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIFVTRCBidWRnZXQgaGFzIGJlZW4gZXhjZWVkZWRcbiAgICAgIGlmIChtYXhCdWRnZXRVc2QgIT09IHVuZGVmaW5lZCAmJiBnZXRUb3RhbENvc3QoKSA+PSBtYXhCdWRnZXRVc2QpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRUFHRVJfRkxVU0gpIHx8XG4gICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBhd2FpdCBmbHVzaFNlc3Npb25TdG9yYWdlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQge1xuICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgIHN1YnR5cGU6ICdlcnJvcl9tYXhfYnVkZ2V0X3VzZCcsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgICAgZHVyYXRpb25fYXBpX21zOiBnZXRUb3RhbEFQSUR1cmF0aW9uKCksXG4gICAgICAgICAgaXNfZXJyb3I6IHRydWUsXG4gICAgICAgICAgbnVtX3R1cm5zOiB0dXJuQ291bnQsXG4gICAgICAgICAgc3RvcF9yZWFzb246IGxhc3RTdG9wUmVhc29uLFxuICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgIHRvdGFsX2Nvc3RfdXNkOiBnZXRUb3RhbENvc3QoKSxcbiAgICAgICAgICB1c2FnZTogdGhpcy50b3RhbFVzYWdlLFxuICAgICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgICBwZXJtaXNzaW9uX2RlbmlhbHM6IHRoaXMucGVybWlzc2lvbkRlbmlhbHMsXG4gICAgICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICAgIGluaXRpYWxBcHBTdGF0ZS5mYXN0TW9kZSxcbiAgICAgICAgICApLFxuICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICBlcnJvcnM6IFtgUmVhY2hlZCBtYXhpbXVtIGJ1ZGdldCAoJCR7bWF4QnVkZ2V0VXNkfSlgXSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgc3RydWN0dXJlZCBvdXRwdXQgcmV0cnkgbGltaXQgZXhjZWVkZWQgKG9ubHkgb24gdXNlciBtZXNzYWdlcylcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICd1c2VyJyAmJiBqc29uU2NoZW1hKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYWxscyA9IGNvdW50VG9vbENhbGxzKFxuICAgICAgICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgIFNZTlRIRVRJQ19PVVRQVVRfVE9PTF9OQU1FLFxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGNhbGxzVGhpc1F1ZXJ5ID0gY3VycmVudENhbGxzIC0gaW5pdGlhbFN0cnVjdHVyZWRPdXRwdXRDYWxsc1xuICAgICAgICBjb25zdCBtYXhSZXRyaWVzID0gcGFyc2VJbnQoXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTUFYX1NUUlVDVFVSRURfT1VUUFVUX1JFVFJJRVMgfHwgJzUnLFxuICAgICAgICAgIDEwLFxuICAgICAgICApXG4gICAgICAgIGlmIChjYWxsc1RoaXNRdWVyeSA+PSBtYXhSZXRyaWVzKSB7XG4gICAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VBR0VSX0ZMVVNIKSB8fFxuICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYXdhaXQgZmx1c2hTZXNzaW9uU3RvcmFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgc3VidHlwZTogJ2Vycm9yX21heF9zdHJ1Y3R1cmVkX291dHB1dF9yZXRyaWVzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICAgICAgZHVyYXRpb25fYXBpX21zOiBnZXRUb3RhbEFQSUR1cmF0aW9uKCksXG4gICAgICAgICAgICBpc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIG51bV90dXJuczogdHVybkNvdW50LFxuICAgICAgICAgICAgc3RvcF9yZWFzb246IGxhc3RTdG9wUmVhc29uLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgICAgICB1c2FnZTogdGhpcy50b3RhbFVzYWdlLFxuICAgICAgICAgICAgbW9kZWxVc2FnZTogZ2V0TW9kZWxVc2FnZSgpLFxuICAgICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gcHJvdmlkZSB2YWxpZCBzdHJ1Y3R1cmVkIG91dHB1dCBhZnRlciAke21heFJldHJpZXN9IGF0dGVtcHRzYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcCBob29rcyB5aWVsZCBwcm9ncmVzcy9hdHRhY2htZW50IG1lc3NhZ2VzIEFGVEVSIHRoZSBhc3Npc3RhbnRcbiAgICAvLyByZXNwb25zZSAodmlhIHlpZWxkKiBoYW5kbGVTdG9wSG9va3MgaW4gcXVlcnkudHMpLiBTaW5jZSAjMjM1MzcgcHVzaGVzXG4gICAgLy8gdGhvc2UgdG8gYG1lc3NhZ2VzYCBpbmxpbmUsIGxhc3QobWVzc2FnZXMpIGNhbiBiZSBhIHByb2dyZXNzL2F0dGFjaG1lbnRcbiAgICAvLyBpbnN0ZWFkIG9mIHRoZSBhc3Npc3RhbnQgXHUyMDE0IHdoaWNoIG1ha2VzIHRleHRSZXN1bHQgZXh0cmFjdGlvbiBiZWxvd1xuICAgIC8vIHJldHVybiAnJyBhbmQgLXAgbW9kZSBlbWl0IGEgYmxhbmsgbGluZS4gQWxsb3dsaXN0IHRvIGFzc2lzdGFudHx1c2VyOlxuICAgIC8vIGlzUmVzdWx0U3VjY2Vzc2Z1bCBoYW5kbGVzIGJvdGggKHVzZXIgd2l0aCBhbGwgdG9vbF9yZXN1bHQgYmxvY2tzIGlzIGFcbiAgICAvLyB2YWxpZCBzdWNjZXNzZnVsIHRlcm1pbmFsIHN0YXRlKS5cbiAgICBjb25zdCByZXN1bHQgPSBtZXNzYWdlcy5maW5kTGFzdChcbiAgICAgIG0gPT4gbS50eXBlID09PSAnYXNzaXN0YW50JyB8fCBtLnR5cGUgPT09ICd1c2VyJyxcbiAgICApXG4gICAgLy8gQ2FwdHVyZSBmb3IgdGhlIGVycm9yX2R1cmluZ19leGVjdXRpb24gZGlhZ25vc3RpYyBcdTIwMTQgaXNSZXN1bHRTdWNjZXNzZnVsXG4gICAgLy8gaXMgYSB0eXBlIHByZWRpY2F0ZSAobWVzc2FnZSBpcyBNZXNzYWdlKSwgc28gaW5zaWRlIHRoZSBmYWxzZSBicmFuY2hcbiAgICAvLyBgcmVzdWx0YCBuYXJyb3dzIHRvIG5ldmVyIGFuZCB0aGVzZSBhY2Nlc3NlcyBkb24ndCB0eXBlY2hlY2suXG4gICAgY29uc3QgZWRlUmVzdWx0VHlwZSA9IHJlc3VsdD8udHlwZSA/PyAndW5kZWZpbmVkJ1xuICAgIGNvbnN0IGVkZUxhc3RDb250ZW50VHlwZSA9XG4gICAgICByZXN1bHQ/LnR5cGUgPT09ICdhc3Npc3RhbnQnXG4gICAgICAgID8gKGxhc3QocmVzdWx0Lm1lc3NhZ2UuY29udGVudCk/LnR5cGUgPz8gJ25vbmUnKVxuICAgICAgICA6ICduL2EnXG5cbiAgICAvLyBGbHVzaCBidWZmZXJlZCB0cmFuc2NyaXB0IHdyaXRlcyBiZWZvcmUgeWllbGRpbmcgcmVzdWx0LlxuICAgIC8vIFRoZSBkZXNrdG9wIGFwcCBraWxscyB0aGUgQ0xJIHByb2Nlc3MgaW1tZWRpYXRlbHkgYWZ0ZXIgcmVjZWl2aW5nIHRoZVxuICAgIC8vIHJlc3VsdCBtZXNzYWdlLCBzbyBhbnkgdW5mbHVzaGVkIHdyaXRlcyB3b3VsZCBiZSBsb3N0LlxuICAgIGlmIChwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgaWYgKFxuICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FQUdFUl9GTFVTSCkgfHxcbiAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfSVNfQ09XT1JLKVxuICAgICAgKSB7XG4gICAgICAgIGF3YWl0IGZsdXNoU2Vzc2lvblN0b3JhZ2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNSZXN1bHRTdWNjZXNzZnVsKHJlc3VsdCwgbGFzdFN0b3BSZWFzb24pKSB7XG4gICAgICB5aWVsZCB7XG4gICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfZHVyaW5nX2V4ZWN1dGlvbicsXG4gICAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICBkdXJhdGlvbl9hcGlfbXM6IGdldFRvdGFsQVBJRHVyYXRpb24oKSxcbiAgICAgICAgaXNfZXJyb3I6IHRydWUsXG4gICAgICAgIG51bV90dXJuczogdHVybkNvdW50LFxuICAgICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICksXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgLy8gRGlhZ25vc3RpYyBwcmVmaXg6IHRoZXNlIGFyZSB3aGF0IGlzUmVzdWx0U3VjY2Vzc2Z1bCgpIGNoZWNrcyBcdTIwMTQgaWZcbiAgICAgICAgLy8gdGhlIHJlc3VsdCB0eXBlIGlzbid0IGFzc2lzdGFudC13aXRoLXRleHQvdGhpbmtpbmcgb3IgdXNlci13aXRoLVxuICAgICAgICAvLyB0b29sX3Jlc3VsdCwgYW5kIHN0b3BfcmVhc29uIGlzbid0IGVuZF90dXJuLCB0aGF0J3Mgd2h5IHRoaXMgZmlyZWQuXG4gICAgICAgIC8vIGVycm9yc1tdIGlzIHR1cm4tc2NvcGVkIHZpYSB0aGUgd2F0ZXJtYXJrOyBwcmV2aW91c2x5IGl0IGR1bXBlZCB0aGVcbiAgICAgICAgLy8gZW50aXJlIHByb2Nlc3MncyBsb2dFcnJvciBidWZmZXIgKHJpcGdyZXAgdGltZW91dHMsIEVOT0VOVCwgZXRjKS5cbiAgICAgICAgZXJyb3JzOiAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFsbCA9IGdldEluTWVtb3J5RXJyb3JzKClcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGVycm9yTG9nV2F0ZXJtYXJrXG4gICAgICAgICAgICA/IGFsbC5sYXN0SW5kZXhPZihlcnJvckxvZ1dhdGVybWFyaykgKyAxXG4gICAgICAgICAgICA6IDBcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYFtlZGVfZGlhZ25vc3RpY10gcmVzdWx0X3R5cGU9JHtlZGVSZXN1bHRUeXBlfSBsYXN0X2NvbnRlbnRfdHlwZT0ke2VkZUxhc3RDb250ZW50VHlwZX0gc3RvcF9yZWFzb249JHtsYXN0U3RvcFJlYXNvbn1gLFxuICAgICAgICAgICAgLi4uYWxsLnNsaWNlKHN0YXJ0KS5tYXAoXyA9PiBfLmVycm9yKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0pKCksXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IHRoZSB0ZXh0IHJlc3VsdCBiYXNlZCBvbiBtZXNzYWdlIHR5cGVcbiAgICBsZXQgdGV4dFJlc3VsdCA9ICcnXG4gICAgbGV0IGlzQXBpRXJyb3IgPSBmYWxzZVxuXG4gICAgaWYgKHJlc3VsdC50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY29uc3QgbGFzdENvbnRlbnQgPSBsYXN0KHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQpXG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RDb250ZW50Py50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgIVNZTlRIRVRJQ19NRVNTQUdFUy5oYXMobGFzdENvbnRlbnQudGV4dClcbiAgICAgICkge1xuICAgICAgICB0ZXh0UmVzdWx0ID0gbGFzdENvbnRlbnQudGV4dFxuICAgICAgfVxuICAgICAgaXNBcGlFcnJvciA9IEJvb2xlYW4ocmVzdWx0LmlzQXBpRXJyb3JNZXNzYWdlKVxuICAgIH1cblxuICAgIHlpZWxkIHtcbiAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgc3VidHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgaXNfZXJyb3I6IGlzQXBpRXJyb3IsXG4gICAgICBkdXJhdGlvbl9tczogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgbnVtX3R1cm5zOiB0dXJuQ291bnQsXG4gICAgICByZXN1bHQ6IHRleHRSZXN1bHQsXG4gICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIHRvdGFsX2Nvc3RfdXNkOiBnZXRUb3RhbENvc3QoKSxcbiAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICBtb2RlbFVzYWdlOiBnZXRNb2RlbFVzYWdlKCksXG4gICAgICBwZXJtaXNzaW9uX2RlbmlhbHM6IHRoaXMucGVybWlzc2lvbkRlbmlhbHMsXG4gICAgICBzdHJ1Y3R1cmVkX291dHB1dDogc3RydWN0dXJlZE91dHB1dEZyb21Ub29sLFxuICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICApLFxuICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gIH1cblxuICBnZXRNZXNzYWdlcygpOiByZWFkb25seSBNZXNzYWdlW10ge1xuICAgIHJldHVybiB0aGlzLm11dGFibGVNZXNzYWdlc1xuICB9XG5cbiAgZ2V0UmVhZEZpbGVTdGF0ZSgpOiBGaWxlU3RhdGVDYWNoZSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGVTdGF0ZVxuICB9XG5cbiAgZ2V0U2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFNlc3Npb25JZCgpXG4gIH1cblxuICBzZXRNb2RlbChtb2RlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcudXNlclNwZWNpZmllZE1vZGVsID0gbW9kZWxcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgc2luZ2xlIHByb21wdCB0byB0aGUgQ2xhdWRlIEFQSSBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKiBBc3N1bWVzIHRoYXQgY2xhdWRlIGlzIGJlaW5nIHVzZWQgbm9uLWludGVyYWN0aXZlbHkgLS0gd2lsbCBub3RcbiAqIGFzayB0aGUgdXNlciBmb3IgcGVybWlzc2lvbnMgb3IgZnVydGhlciBpbnB1dC5cbiAqXG4gKiBDb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCBRdWVyeUVuZ2luZSBmb3Igb25lLXNob3QgdXNhZ2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogYXNrKHtcbiAgY29tbWFuZHMsXG4gIHByb21wdCxcbiAgcHJvbXB0VXVpZCxcbiAgaXNNZXRhLFxuICBjd2QsXG4gIHRvb2xzLFxuICBtY3BDbGllbnRzLFxuICB2ZXJib3NlID0gZmFsc2UsXG4gIHRoaW5raW5nQ29uZmlnLFxuICBtYXhUdXJucyxcbiAgbWF4QnVkZ2V0VXNkLFxuICB0YXNrQnVkZ2V0LFxuICBjYW5Vc2VUb29sLFxuICBtdXRhYmxlTWVzc2FnZXMgPSBbXSxcbiAgZ2V0UmVhZEZpbGVDYWNoZSxcbiAgc2V0UmVhZEZpbGVDYWNoZSxcbiAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gIHVzZXJTcGVjaWZpZWRNb2RlbCxcbiAgZmFsbGJhY2tNb2RlbCxcbiAganNvblNjaGVtYSxcbiAgZ2V0QXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlLFxuICBhYm9ydENvbnRyb2xsZXIsXG4gIHJlcGxheVVzZXJNZXNzYWdlcyA9IGZhbHNlLFxuICBpbmNsdWRlUGFydGlhbE1lc3NhZ2VzID0gZmFsc2UsXG4gIGhhbmRsZUVsaWNpdGF0aW9uLFxuICBhZ2VudHMgPSBbXSxcbiAgc2V0U0RLU3RhdHVzLFxuICBvcnBoYW5lZFBlcm1pc3Npb24sXG59OiB7XG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgcHJvbXB0OiBzdHJpbmcgfCBBcnJheTxDb250ZW50QmxvY2tQYXJhbT5cbiAgcHJvbXB0VXVpZD86IHN0cmluZ1xuICBpc01ldGE/OiBib29sZWFuXG4gIGN3ZDogc3RyaW5nXG4gIHRvb2xzOiBUb29sc1xuICB2ZXJib3NlPzogYm9vbGVhblxuICBtY3BDbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW11cbiAgdGhpbmtpbmdDb25maWc/OiBUaGlua2luZ0NvbmZpZ1xuICBtYXhUdXJucz86IG51bWJlclxuICBtYXhCdWRnZXRVc2Q/OiBudW1iZXJcbiAgdGFza0J1ZGdldD86IHsgdG90YWw6IG51bWJlciB9XG4gIGNhblVzZVRvb2w6IENhblVzZVRvb2xGblxuICBtdXRhYmxlTWVzc2FnZXM/OiBNZXNzYWdlW11cbiAgY3VzdG9tU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIGFwcGVuZFN5c3RlbVByb21wdD86IHN0cmluZ1xuICB1c2VyU3BlY2lmaWVkTW9kZWw/OiBzdHJpbmdcbiAgZmFsbGJhY2tNb2RlbD86IHN0cmluZ1xuICBqc29uU2NoZW1hPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZFxuICBnZXRSZWFkRmlsZUNhY2hlOiAoKSA9PiBGaWxlU3RhdGVDYWNoZVxuICBzZXRSZWFkRmlsZUNhY2hlOiAoY2FjaGU6IEZpbGVTdGF0ZUNhY2hlKSA9PiB2b2lkXG4gIGFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlclxuICByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuXG4gIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM/OiBib29sZWFuXG4gIGhhbmRsZUVsaWNpdGF0aW9uPzogVG9vbFVzZUNvbnRleHRbJ2hhbmRsZUVsaWNpdGF0aW9uJ11cbiAgYWdlbnRzPzogQWdlbnREZWZpbml0aW9uW11cbiAgc2V0U0RLU3RhdHVzPzogKHN0YXR1czogU0RLU3RhdHVzKSA9PiB2b2lkXG4gIG9ycGhhbmVkUGVybWlzc2lvbj86IE9ycGhhbmVkUGVybWlzc2lvblxufSk6IEFzeW5jR2VuZXJhdG9yPFNES01lc3NhZ2UsIHZvaWQsIHVua25vd24+IHtcbiAgY29uc3QgZW5naW5lID0gbmV3IFF1ZXJ5RW5naW5lKHtcbiAgICBjd2QsXG4gICAgdG9vbHMsXG4gICAgY29tbWFuZHMsXG4gICAgbWNwQ2xpZW50cyxcbiAgICBhZ2VudHMsXG4gICAgY2FuVXNlVG9vbCxcbiAgICBnZXRBcHBTdGF0ZSxcbiAgICBzZXRBcHBTdGF0ZSxcbiAgICBpbml0aWFsTWVzc2FnZXM6IG11dGFibGVNZXNzYWdlcyxcbiAgICByZWFkRmlsZUNhY2hlOiBjbG9uZUZpbGVTdGF0ZUNhY2hlKGdldFJlYWRGaWxlQ2FjaGUoKSksXG4gICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgICB1c2VyU3BlY2lmaWVkTW9kZWwsXG4gICAgZmFsbGJhY2tNb2RlbCxcbiAgICB0aGlua2luZ0NvbmZpZyxcbiAgICBtYXhUdXJucyxcbiAgICBtYXhCdWRnZXRVc2QsXG4gICAgdGFza0J1ZGdldCxcbiAgICBqc29uU2NoZW1hLFxuICAgIHZlcmJvc2UsXG4gICAgaGFuZGxlRWxpY2l0YXRpb24sXG4gICAgcmVwbGF5VXNlck1lc3NhZ2VzLFxuICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMsXG4gICAgc2V0U0RLU3RhdHVzLFxuICAgIGFib3J0Q29udHJvbGxlcixcbiAgICBvcnBoYW5lZFBlcm1pc3Npb24sXG4gICAgLi4uKGZlYXR1cmUoJ0hJU1RPUllfU05JUCcpXG4gICAgICA/IHtcbiAgICAgICAgICBzbmlwUmVwbGF5OiAoeWllbGRlZDogTWVzc2FnZSwgc3RvcmU6IE1lc3NhZ2VbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzbmlwUHJvamVjdGlvbiEuaXNTbmlwQm91bmRhcnlNZXNzYWdlKHlpZWxkZWQpKVxuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gc25pcE1vZHVsZSEuc25pcENvbXBhY3RJZk5lZWRlZChzdG9yZSwgeyBmb3JjZTogdHJ1ZSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDoge30pLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgeWllbGQqIGVuZ2luZS5zdWJtaXRNZXNzYWdlKHByb21wdCwge1xuICAgICAgdXVpZDogcHJvbXB0VXVpZCxcbiAgICAgIGlzTWV0YSxcbiAgICB9KVxuICB9IGZpbmFsbHkge1xuICAgIHNldFJlYWRGaWxlQ2FjaGUoZW5naW5lLmdldFJlYWRGaWxlU3RhdGUoKSlcbiAgfVxufVxuIiwgIi8qKlxuICogU2hhcmVkIGhlbHBlcnMgZm9yIGJ1aWxkaW5nIHRoZSBBUEkgY2FjaGUta2V5IHByZWZpeCAoc3lzdGVtUHJvbXB0LFxuICogdXNlckNvbnRleHQsIHN5c3RlbUNvbnRleHQpIGZvciBxdWVyeSgpIGNhbGxzLlxuICpcbiAqIExpdmVzIGluIGl0cyBvd24gZmlsZSBiZWNhdXNlIGl0IGltcG9ydHMgZnJvbSBjb250ZXh0LnRzIGFuZFxuICogY29uc3RhbnRzL3Byb21wdHMudHMsIHdoaWNoIGFyZSBoaWdoIGluIHRoZSBkZXBlbmRlbmN5IGdyYXBoLiBQdXR0aW5nXG4gKiB0aGVzZSBpbXBvcnRzIGluIHN5c3RlbVByb21wdC50cyBvciBzaWRlUXVlc3Rpb24udHMgKGJvdGggcmVhY2hhYmxlXG4gKiBmcm9tIGNvbW1hbmRzLnRzKSB3b3VsZCBjcmVhdGUgY3ljbGVzLiBPbmx5IGVudHJ5cG9pbnQtbGF5ZXIgZmlsZXNcbiAqIGltcG9ydCBmcm9tIGhlcmUgKFF1ZXJ5RW5naW5lLnRzLCBjbGkvcHJpbnQudHMpLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb21wdHMuanMnXG5pbXBvcnQgeyBnZXRTeXN0ZW1Db250ZXh0LCBnZXRVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQuanMnXG5pbXBvcnQgdHlwZSB7IE1DUFNlcnZlckNvbm5lY3Rpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvQXBwU3RhdGVTdG9yZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMsIFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWJvcnRDb250cm9sbGVyIH0gZnJvbSAnLi9hYm9ydENvbnRyb2xsZXIuanMnXG5pbXBvcnQgdHlwZSB7IEZpbGVTdGF0ZUNhY2hlIH0gZnJvbSAnLi9maWxlU3RhdGVDYWNoZS5qcydcbmltcG9ydCB0eXBlIHsgQ2FjaGVTYWZlUGFyYW1zIH0gZnJvbSAnLi9mb3JrZWRBZ2VudC5qcydcbmltcG9ydCB7IGdldE1haW5Mb29wTW9kZWwgfSBmcm9tICcuL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuL3N5c3RlbVByb21wdFR5cGUuanMnXG5pbXBvcnQge1xuICBzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCxcbiAgdHlwZSBUaGlua2luZ0NvbmZpZyxcbn0gZnJvbSAnLi90aGlua2luZy5qcydcblxuLyoqXG4gKiBGZXRjaCB0aGUgdGhyZWUgY29udGV4dCBwaWVjZXMgdGhhdCBmb3JtIHRoZSBBUEkgY2FjaGUta2V5IHByZWZpeDpcbiAqIHN5c3RlbVByb21wdCBwYXJ0cywgdXNlckNvbnRleHQsIHN5c3RlbUNvbnRleHQuXG4gKlxuICogV2hlbiBjdXN0b21TeXN0ZW1Qcm9tcHQgaXMgc2V0LCB0aGUgZGVmYXVsdCBnZXRTeXN0ZW1Qcm9tcHQgYnVpbGQgYW5kXG4gKiBnZXRTeXN0ZW1Db250ZXh0IGFyZSBza2lwcGVkIFx1MjAxNCB0aGUgY3VzdG9tIHByb21wdCByZXBsYWNlcyB0aGUgZGVmYXVsdFxuICogZW50aXJlbHksIGFuZCBzeXN0ZW1Db250ZXh0IHdvdWxkIGJlIGFwcGVuZGVkIHRvIGEgZGVmYXVsdCB0aGF0IGlzbid0XG4gKiBiZWluZyB1c2VkLlxuICpcbiAqIENhbGxlcnMgYXNzZW1ibGUgdGhlIGZpbmFsIHN5c3RlbVByb21wdCBmcm9tIGRlZmF1bHRTeXN0ZW1Qcm9tcHQgKG9yXG4gKiBjdXN0b21TeXN0ZW1Qcm9tcHQpICsgb3B0aW9uYWwgZXh0cmFzICsgYXBwZW5kU3lzdGVtUHJvbXB0LiBRdWVyeUVuZ2luZVxuICogaW5qZWN0cyBjb29yZGluYXRvciB1c2VyQ29udGV4dCBhbmQgbWVtb3J5LW1lY2hhbmljcyBwcm9tcHQgb24gdG9wO1xuICogc2lkZVF1ZXN0aW9uJ3MgZmFsbGJhY2sgdXNlcyB0aGUgYmFzZSByZXN1bHQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFN5c3RlbVByb21wdFBhcnRzKHtcbiAgdG9vbHMsXG4gIG1haW5Mb29wTW9kZWwsXG4gIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXMsXG4gIG1jcENsaWVudHMsXG4gIGN1c3RvbVN5c3RlbVByb21wdCxcbn06IHtcbiAgdG9vbHM6IFRvb2xzXG4gIG1haW5Mb29wTW9kZWw6IHN0cmluZ1xuICBhZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzOiBzdHJpbmdbXVxuICBtY3BDbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW11cbiAgY3VzdG9tU3lzdGVtUHJvbXB0OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pOiBQcm9taXNlPHtcbiAgZGVmYXVsdFN5c3RlbVByb21wdDogc3RyaW5nW11cbiAgdXNlckNvbnRleHQ6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9XG4gIHN5c3RlbUNvbnRleHQ6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9XG59PiB7XG4gIGNvbnN0IFtkZWZhdWx0U3lzdGVtUHJvbXB0LCB1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgY3VzdG9tU3lzdGVtUHJvbXB0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgOiBnZXRTeXN0ZW1Qcm9tcHQoXG4gICAgICAgICAgdG9vbHMsXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBhZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzLFxuICAgICAgICAgIG1jcENsaWVudHMsXG4gICAgICAgICksXG4gICAgZ2V0VXNlckNvbnRleHQoKSxcbiAgICBjdXN0b21TeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZCA/IFByb21pc2UucmVzb2x2ZSh7fSkgOiBnZXRTeXN0ZW1Db250ZXh0KCksXG4gIF0pXG4gIHJldHVybiB7IGRlZmF1bHRTeXN0ZW1Qcm9tcHQsIHVzZXJDb250ZXh0LCBzeXN0ZW1Db250ZXh0IH1cbn1cblxuLyoqXG4gKiBCdWlsZCBDYWNoZVNhZmVQYXJhbXMgZnJvbSByYXcgaW5wdXRzIHdoZW4gZ2V0TGFzdENhY2hlU2FmZVBhcmFtcygpIGlzIG51bGwuXG4gKlxuICogVXNlZCBieSB0aGUgU0RLIHNpZGVfcXVlc3Rpb24gaGFuZGxlciAocHJpbnQudHMpIG9uIHJlc3VtZSBiZWZvcmUgYSB0dXJuXG4gKiBjb21wbGV0ZXMgXHUyMDE0IHRoZXJlJ3Mgbm8gc3RvcEhvb2tzIHNuYXBzaG90IHlldC4gTWlycm9ycyB0aGUgc3lzdGVtIHByb21wdFxuICogYXNzZW1ibHkgaW4gUXVlcnlFbmdpbmUudHM6YXNrKCkgc28gdGhlIHJlYnVpbHQgcHJlZml4IG1hdGNoZXMgd2hhdCB0aGVcbiAqIG1haW4gbG9vcCB3aWxsIHNlbmQsIHByZXNlcnZpbmcgdGhlIGNhY2hlIGhpdCBpbiB0aGUgY29tbW9uIGNhc2UuXG4gKlxuICogTWF5IHN0aWxsIG1pc3MgdGhlIGNhY2hlIGlmIHRoZSBtYWluIGxvb3AgYXBwbGllcyBleHRyYXMgdGhpcyBwYXRoIGRvZXNuJ3RcbiAqIGtub3cgYWJvdXQgKGNvb3JkaW5hdG9yIG1vZGUsIG1lbW9yeS1tZWNoYW5pY3MgcHJvbXB0KS4gVGhhdCdzIGFjY2VwdGFibGUgXHUyMDE0XG4gKiB0aGUgYWx0ZXJuYXRpdmUgaXMgcmV0dXJuaW5nIG51bGwgYW5kIGZhaWxpbmcgdGhlIHNpZGUgcXVlc3Rpb24gZW50aXJlbHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zKHtcbiAgdG9vbHMsXG4gIGNvbW1hbmRzLFxuICBtY3BDbGllbnRzLFxuICBtZXNzYWdlcyxcbiAgcmVhZEZpbGVTdGF0ZSxcbiAgZ2V0QXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlLFxuICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgdGhpbmtpbmdDb25maWcsXG4gIGFnZW50cyxcbn06IHtcbiAgdG9vbHM6IFRvb2xzXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgbWNwQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgcmVhZEZpbGVTdGF0ZTogRmlsZVN0YXRlQ2FjaGVcbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZFxuICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICB0aGlua2luZ0NvbmZpZzogVGhpbmtpbmdDb25maWcgfCB1bmRlZmluZWRcbiAgYWdlbnRzOiBBZ2VudERlZmluaXRpb25bXVxufSk6IFByb21pc2U8Q2FjaGVTYWZlUGFyYW1zPiB7XG4gIGNvbnN0IG1haW5Mb29wTW9kZWwgPSBnZXRNYWluTG9vcE1vZGVsKClcbiAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG5cbiAgY29uc3QgeyBkZWZhdWx0U3lzdGVtUHJvbXB0LCB1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dCB9ID1cbiAgICBhd2FpdCBmZXRjaFN5c3RlbVByb21wdFBhcnRzKHtcbiAgICAgIHRvb2xzLFxuICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXM6IEFycmF5LmZyb20oXG4gICAgICAgIGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dC5hZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzLmtleXMoKSxcbiAgICAgICksXG4gICAgICBtY3BDbGllbnRzLFxuICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgIH0pXG5cbiAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYXNTeXN0ZW1Qcm9tcHQoW1xuICAgIC4uLihjdXN0b21TeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbY3VzdG9tU3lzdGVtUHJvbXB0XVxuICAgICAgOiBkZWZhdWx0U3lzdGVtUHJvbXB0KSxcbiAgICAuLi4oYXBwZW5kU3lzdGVtUHJvbXB0ID8gW2FwcGVuZFN5c3RlbVByb21wdF0gOiBbXSksXG4gIF0pXG5cbiAgLy8gU3RyaXAgaW4tcHJvZ3Jlc3MgYXNzaXN0YW50IG1lc3NhZ2UgKHN0b3BfcmVhc29uID09PSBudWxsKSBcdTIwMTQgc2FtZSBndWFyZFxuICAvLyBhcyBidHcudHN4LiBUaGUgU0RLIGNhbiBmaXJlIHNpZGVfcXVlc3Rpb24gbWlkLXR1cm4uXG4gIGNvbnN0IGxhc3QgPSBtZXNzYWdlcy5hdCgtMSlcbiAgY29uc3QgZm9ya0NvbnRleHRNZXNzYWdlcyA9XG4gICAgbGFzdD8udHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5tZXNzYWdlLnN0b3BfcmVhc29uID09PSBudWxsXG4gICAgICA/IG1lc3NhZ2VzLnNsaWNlKDAsIC0xKVxuICAgICAgOiBtZXNzYWdlc1xuXG4gIGNvbnN0IHRvb2xVc2VDb250ZXh0OiBUb29sVXNlQ29udGV4dCA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBjb21tYW5kcyxcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIG1haW5Mb29wTW9kZWwsXG4gICAgICB0b29scyxcbiAgICAgIHZlcmJvc2U6IGZhbHNlLFxuICAgICAgdGhpbmtpbmdDb25maWc6XG4gICAgICAgIHRoaW5raW5nQ29uZmlnID8/XG4gICAgICAgIChzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCgpICE9PSBmYWxzZVxuICAgICAgICAgID8geyB0eXBlOiAnYWRhcHRpdmUnIH1cbiAgICAgICAgICA6IHsgdHlwZTogJ2Rpc2FibGVkJyB9KSxcbiAgICAgIG1jcENsaWVudHMsXG4gICAgICBtY3BSZXNvdXJjZXM6IHt9LFxuICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IHRydWUsXG4gICAgICBhZ2VudERlZmluaXRpb25zOiB7IGFjdGl2ZUFnZW50czogYWdlbnRzLCBhbGxBZ2VudHM6IFtdIH0sXG4gICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgfSxcbiAgICBhYm9ydENvbnRyb2xsZXI6IGNyZWF0ZUFib3J0Q29udHJvbGxlcigpLFxuICAgIHJlYWRGaWxlU3RhdGUsXG4gICAgZ2V0QXBwU3RhdGUsXG4gICAgc2V0QXBwU3RhdGUsXG4gICAgbWVzc2FnZXM6IGZvcmtDb250ZXh0TWVzc2FnZXMsXG4gICAgc2V0SW5Qcm9ncmVzc1Rvb2xVc2VJRHM6ICgpID0+IHt9LFxuICAgIHNldFJlc3BvbnNlTGVuZ3RoOiAoKSA9PiB7fSxcbiAgICB1cGRhdGVGaWxlSGlzdG9yeVN0YXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGVBdHRyaWJ1dGlvblN0YXRlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3lzdGVtUHJvbXB0LFxuICAgIHVzZXJDb250ZXh0LFxuICAgIHN5c3RlbUNvbnRleHQsXG4gICAgdG9vbFVzZUNvbnRleHQsXG4gICAgZm9ya0NvbnRleHRNZXNzYWdlcyxcbiAgfVxufVxuIiwgIi8qKlxuICogRmlsZSBwZXJzaXN0ZW5jZSBvcmNoZXN0cmF0b3JcbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB0aGUgbWFpbiBvcmNoZXN0cmF0aW9uIGxvZ2ljIGZvciBwZXJzaXN0aW5nIGZpbGVzXG4gKiBhdCB0aGUgZW5kIG9mIGVhY2ggdHVybjpcbiAqIC0gQllPQyBtb2RlOiBVcGxvYWQgZmlsZXMgdG8gRmlsZXMgQVBJIGFuZCBjb2xsZWN0IGZpbGUgSURzXG4gKiAtIDFQL0Nsb3VkIG1vZGU6IFF1ZXJ5IEZpbGVzIEFQSSBsaXN0RGlyZWN0b3J5IGZvciBmaWxlIElEcyAocmNsb25lIGhhbmRsZXMgc3luYylcbiAqL1xuXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IGpvaW4sIHJlbGF0aXZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIHR5cGUgRmlsZXNBcGlDb25maWcsXG4gIHVwbG9hZFNlc3Npb25GaWxlcyxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2ZpbGVzQXBpLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vY3dkLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi9sb2cuanMnXG5pbXBvcnQgeyBnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbiB9IGZyb20gJy4uL3Nlc3Npb25JbmdyZXNzQXV0aC5qcydcbmltcG9ydCB7XG4gIGZpbmRNb2RpZmllZEZpbGVzLFxuICBnZXRFbnZpcm9ubWVudEtpbmQsXG4gIGxvZ0RlYnVnLFxufSBmcm9tICcuL291dHB1dHNTY2FubmVyLmpzJ1xuaW1wb3J0IHtcbiAgREVGQVVMVF9VUExPQURfQ09OQ1VSUkVOQ1ksXG4gIHR5cGUgRmFpbGVkUGVyc2lzdGVuY2UsXG4gIEZJTEVfQ09VTlRfTElNSVQsXG4gIHR5cGUgRmlsZXNQZXJzaXN0ZWRFdmVudERhdGEsXG4gIE9VVFBVVFNfU1VCRElSLFxuICB0eXBlIFBlcnNpc3RlZEZpbGUsXG4gIHR5cGUgVHVyblN0YXJ0VGltZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcblxuLyoqXG4gKiBFeGVjdXRlIGZpbGUgcGVyc2lzdGVuY2UgZm9yIG1vZGlmaWVkIGZpbGVzIGluIHRoZSBvdXRwdXRzIGRpcmVjdG9yeS5cbiAqXG4gKiBBc3NlbWJsZXMgYWxsIGNvbmZpZyBpbnRlcm5hbGx5OlxuICogLSBDaGVja3MgZW52aXJvbm1lbnQga2luZCAoQ0xBVURFX0NPREVfRU5WSVJPTk1FTlRfS0lORClcbiAqIC0gUmV0cmlldmVzIHNlc3Npb24gYWNjZXNzIHRva2VuXG4gKiAtIFJlcXVpcmVzIENMQVVERV9DT0RFX1JFTU9URV9TRVNTSU9OX0lEIGZvciBzZXNzaW9uIElEXG4gKlxuICogQHBhcmFtIHR1cm5TdGFydFRpbWUgLSBUaGUgdGltZXN0YW1wIHdoZW4gdGhlIHR1cm4gc3RhcnRlZFxuICogQHBhcmFtIHNpZ25hbCAtIE9wdGlvbmFsIGFib3J0IHNpZ25hbCBmb3IgY2FuY2VsbGF0aW9uXG4gKiBAcmV0dXJucyBFdmVudCBkYXRhLCBvciBudWxsIGlmIG5vdCBlbmFibGVkIG9yIG5vIGZpbGVzIHRvIHBlcnNpc3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkZpbGVQZXJzaXN0ZW5jZShcbiAgdHVyblN0YXJ0VGltZTogVHVyblN0YXJ0VGltZSxcbiAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4pOiBQcm9taXNlPEZpbGVzUGVyc2lzdGVkRXZlbnREYXRhIHwgbnVsbD4ge1xuICBjb25zdCBlbnZpcm9ubWVudEtpbmQgPSBnZXRFbnZpcm9ubWVudEtpbmQoKVxuICBpZiAoZW52aXJvbm1lbnRLaW5kICE9PSAnYnlvYycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbkFjY2Vzc1Rva2VuID0gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICBpZiAoIXNlc3Npb25BY2Nlc3NUb2tlbikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBzZXNzaW9uSWQgPSBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEVfU0VTU0lPTl9JRFxuICBpZiAoIXNlc3Npb25JZCkge1xuICAgIGxvZ0Vycm9yKFxuICAgICAgbmV3IEVycm9yKFxuICAgICAgICAnRmlsZSBwZXJzaXN0ZW5jZSBlbmFibGVkIGJ1dCBDTEFVREVfQ09ERV9SRU1PVEVfU0VTU0lPTl9JRCBpcyBub3Qgc2V0JyxcbiAgICAgICksXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBjb25maWc6IEZpbGVzQXBpQ29uZmlnID0ge1xuICAgIG9hdXRoVG9rZW46IHNlc3Npb25BY2Nlc3NUb2tlbixcbiAgICBzZXNzaW9uSWQsXG4gIH1cblxuICBjb25zdCBvdXRwdXRzRGlyID0gam9pbihnZXRDd2QoKSwgc2Vzc2lvbklkLCBPVVRQVVRTX1NVQkRJUilcblxuICAvLyBDaGVjayBpZiBhYm9ydGVkXG4gIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICBsb2dEZWJ1ZygnUGVyc2lzdGVuY2UgYWJvcnRlZCBiZWZvcmUgcHJvY2Vzc2luZycpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgbG9nRXZlbnQoJ3Rlbmd1X2ZpbGVfcGVyc2lzdGVuY2Vfc3RhcnRlZCcsIHtcbiAgICBtb2RlOiBlbnZpcm9ubWVudEtpbmQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgfSlcblxuICB0cnkge1xuICAgIGxldCByZXN1bHQ6IEZpbGVzUGVyc2lzdGVkRXZlbnREYXRhXG4gICAgaWYgKGVudmlyb25tZW50S2luZCA9PT0gJ2J5b2MnKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBleGVjdXRlQllPQ1BlcnNpc3RlbmNlKFxuICAgICAgICB0dXJuU3RhcnRUaW1lLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIG91dHB1dHNEaXIsXG4gICAgICAgIHNpZ25hbCxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZUNsb3VkUGVyc2lzdGVuY2UoKVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgdG8gcmVwb3J0XG4gICAgaWYgKHJlc3VsdC5maWxlcy5sZW5ndGggPT09IDAgJiYgcmVzdWx0LmZhaWxlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICBsb2dFdmVudCgndGVuZ3VfZmlsZV9wZXJzaXN0ZW5jZV9jb21wbGV0ZWQnLCB7XG4gICAgICBzdWNjZXNzX2NvdW50OiByZXN1bHQuZmlsZXMubGVuZ3RoLFxuICAgICAgZmFpbHVyZV9jb3VudDogcmVzdWx0LmZhaWxlZC5sZW5ndGgsXG4gICAgICBkdXJhdGlvbl9tczogZHVyYXRpb25NcyxcbiAgICAgIG1vZGU6IGVudmlyb25tZW50S2luZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgbG9nRGVidWcoYEZpbGUgcGVyc2lzdGVuY2UgZmFpbGVkOiAke2Vycm9yfWApXG5cbiAgICBjb25zdCBkdXJhdGlvbk1zID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9maWxlX3BlcnNpc3RlbmNlX2NvbXBsZXRlZCcsIHtcbiAgICAgIHN1Y2Nlc3NfY291bnQ6IDAsXG4gICAgICBmYWlsdXJlX2NvdW50OiAwLFxuICAgICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uTXMsXG4gICAgICBtb2RlOiBlbnZpcm9ubWVudEtpbmQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIGVycm9yOlxuICAgICAgICAnZXhjZXB0aW9uJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFtdLFxuICAgICAgZmFpbGVkOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxlbmFtZTogb3V0cHV0c0RpcixcbiAgICAgICAgICBlcnJvcjogZXJyb3JNZXNzYWdlKGVycm9yKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhlY3V0ZSBCWU9DIG1vZGUgcGVyc2lzdGVuY2U6IHNjYW4gbG9jYWwgZmlsZXN5c3RlbSBmb3IgbW9kaWZpZWQgZmlsZXMsXG4gKiB0aGVuIHVwbG9hZCB0byBGaWxlcyBBUEkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVCWU9DUGVyc2lzdGVuY2UoXG4gIHR1cm5TdGFydFRpbWU6IFR1cm5TdGFydFRpbWUsXG4gIGNvbmZpZzogRmlsZXNBcGlDb25maWcsXG4gIG91dHB1dHNEaXI6IHN0cmluZyxcbiAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4pOiBQcm9taXNlPEZpbGVzUGVyc2lzdGVkRXZlbnREYXRhPiB7XG4gIC8vIEZpbmQgbW9kaWZpZWQgZmlsZXMgdmlhIGxvY2FsIGZpbGVzeXN0ZW0gc2NhblxuICAvLyBVc2VzIHNhbWUgZGlyZWN0b3J5IHN0cnVjdHVyZSBhcyBkb3dubG9hZHM6IHtjd2R9L3tzZXNzaW9uSWR9L291dHB1dHNcbiAgY29uc3QgbW9kaWZpZWRGaWxlcyA9IGF3YWl0IGZpbmRNb2RpZmllZEZpbGVzKHR1cm5TdGFydFRpbWUsIG91dHB1dHNEaXIpXG5cbiAgaWYgKG1vZGlmaWVkRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgbG9nRGVidWcoJ05vIG1vZGlmaWVkIGZpbGVzIHRvIHBlcnNpc3QnKVxuICAgIHJldHVybiB7IGZpbGVzOiBbXSwgZmFpbGVkOiBbXSB9XG4gIH1cblxuICBsb2dEZWJ1ZyhgRm91bmQgJHttb2RpZmllZEZpbGVzLmxlbmd0aH0gbW9kaWZpZWQgZmlsZXNgKVxuXG4gIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICByZXR1cm4geyBmaWxlczogW10sIGZhaWxlZDogW10gfVxuICB9XG5cbiAgLy8gRW5mb3JjZSBmaWxlIGNvdW50IGxpbWl0XG4gIGlmIChtb2RpZmllZEZpbGVzLmxlbmd0aCA+IEZJTEVfQ09VTlRfTElNSVQpIHtcbiAgICBsb2dEZWJ1ZyhcbiAgICAgIGBGaWxlIGNvdW50IGxpbWl0IGV4Y2VlZGVkOiAke21vZGlmaWVkRmlsZXMubGVuZ3RofSA+ICR7RklMRV9DT1VOVF9MSU1JVH1gLFxuICAgIClcbiAgICBsb2dFdmVudCgndGVuZ3VfZmlsZV9wZXJzaXN0ZW5jZV9saW1pdF9leGNlZWRlZCcsIHtcbiAgICAgIGZpbGVfY291bnQ6IG1vZGlmaWVkRmlsZXMubGVuZ3RoLFxuICAgICAgbGltaXQ6IEZJTEVfQ09VTlRfTElNSVQsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6IFtdLFxuICAgICAgZmFpbGVkOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxlbmFtZTogb3V0cHV0c0RpcixcbiAgICAgICAgICBlcnJvcjogYFRvbyBtYW55IGZpbGVzIG1vZGlmaWVkICgke21vZGlmaWVkRmlsZXMubGVuZ3RofSkuIE1heGltdW06ICR7RklMRV9DT1VOVF9MSU1JVH0uYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmlsZXNUb1Byb2Nlc3MgPSBtb2RpZmllZEZpbGVzXG4gICAgLm1hcChmaWxlUGF0aCA9PiAoe1xuICAgICAgcGF0aDogZmlsZVBhdGgsXG4gICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlKG91dHB1dHNEaXIsIGZpbGVQYXRoKSxcbiAgICB9KSlcbiAgICAuZmlsdGVyKCh7IHJlbGF0aXZlUGF0aCB9KSA9PiB7XG4gICAgICAvLyBTZWN1cml0eTogc2tpcCBmaWxlcyB0aGF0IHJlc29sdmUgb3V0c2lkZSB0aGUgb3V0cHV0cyBkaXJlY3RvcnlcbiAgICAgIGlmIChyZWxhdGl2ZVBhdGguc3RhcnRzV2l0aCgnLi4nKSkge1xuICAgICAgICBsb2dEZWJ1ZyhgU2tpcHBpbmcgZmlsZSBvdXRzaWRlIG91dHB1dHMgZGlyZWN0b3J5OiAke3JlbGF0aXZlUGF0aH1gKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcblxuICBsb2dEZWJ1ZyhgQllPQyBtb2RlOiB1cGxvYWRpbmcgJHtmaWxlc1RvUHJvY2Vzcy5sZW5ndGh9IGZpbGVzYClcblxuICAvLyBVcGxvYWQgZmlsZXMgaW4gcGFyYWxsZWxcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHVwbG9hZFNlc3Npb25GaWxlcyhcbiAgICBmaWxlc1RvUHJvY2VzcyxcbiAgICBjb25maWcsXG4gICAgREVGQVVMVF9VUExPQURfQ09OQ1VSUkVOQ1ksXG4gIClcblxuICAvLyBTZXBhcmF0ZSBzdWNjZXNzZnVsIGFuZCBmYWlsZWQgdXBsb2Fkc1xuICBjb25zdCBwZXJzaXN0ZWRGaWxlczogUGVyc2lzdGVkRmlsZVtdID0gW11cbiAgY29uc3QgZmFpbGVkRmlsZXM6IEZhaWxlZFBlcnNpc3RlbmNlW10gPSBbXVxuXG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHBlcnNpc3RlZEZpbGVzLnB1c2goe1xuICAgICAgICBmaWxlbmFtZTogcmVzdWx0LnBhdGgsXG4gICAgICAgIGZpbGVfaWQ6IHJlc3VsdC5maWxlSWQsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBmYWlsZWRGaWxlcy5wdXNoKHtcbiAgICAgICAgZmlsZW5hbWU6IHJlc3VsdC5wYXRoLFxuICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBsb2dEZWJ1ZyhcbiAgICBgQllPQyBwZXJzaXN0ZW5jZSBjb21wbGV0ZTogJHtwZXJzaXN0ZWRGaWxlcy5sZW5ndGh9IHVwbG9hZGVkLCAke2ZhaWxlZEZpbGVzLmxlbmd0aH0gZmFpbGVkYCxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZmlsZXM6IHBlcnNpc3RlZEZpbGVzLFxuICAgIGZhaWxlZDogZmFpbGVkRmlsZXMsXG4gIH1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIENsb3VkICgxUCkgbW9kZSBwZXJzaXN0ZW5jZS5cbiAqIFRPRE86IFJlYWQgZmlsZV9pZCBmcm9tIHhhdHRyIG9uIG91dHB1dCBmaWxlcy4geGF0dHItYmFzZWQgZmlsZSBJRHMgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgYWRkZWQgZm9yIDFQIGVudmlyb25tZW50cy5cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZUNsb3VkUGVyc2lzdGVuY2UoKTogRmlsZXNQZXJzaXN0ZWRFdmVudERhdGEge1xuICBsb2dEZWJ1ZygnQ2xvdWQgbW9kZTogeGF0dHItYmFzZWQgZmlsZSBJRCByZWFkaW5nIG5vdCB5ZXQgaW1wbGVtZW50ZWQnKVxuICByZXR1cm4geyBmaWxlczogW10sIGZhaWxlZDogW10gfVxufVxuXG4vKipcbiAqIEV4ZWN1dGUgZmlsZSBwZXJzaXN0ZW5jZSBhbmQgZW1pdCByZXN1bHQgdmlhIGNhbGxiYWNrLlxuICogSGFuZGxlcyBlcnJvcnMgaW50ZXJuYWxseS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGaWxlUGVyc2lzdGVuY2UoXG4gIHR1cm5TdGFydFRpbWU6IFR1cm5TdGFydFRpbWUsXG4gIHNpZ25hbDogQWJvcnRTaWduYWwsXG4gIG9uUmVzdWx0OiAocmVzdWx0OiBGaWxlc1BlcnNpc3RlZEV2ZW50RGF0YSkgPT4gdm9pZCxcbik6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkZpbGVQZXJzaXN0ZW5jZSh0dXJuU3RhcnRUaW1lLCBzaWduYWwpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgb25SZXN1bHQocmVzdWx0KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGZpbGUgcGVyc2lzdGVuY2UgaXMgZW5hYmxlZC5cbiAqIFJlcXVpcmVzOiBmZWF0dXJlIGZsYWcgT04sIHZhbGlkIGVudmlyb25tZW50IGtpbmQsIHNlc3Npb24gYWNjZXNzIHRva2VuLFxuICogYW5kIENMQVVERV9DT0RFX1JFTU9URV9TRVNTSU9OX0lELlxuICogVGhpcyBlbnN1cmVzIG9ubHkgcHVibGljLWFwaS9zZXNzaW9ucyB1c2VycyB0cmlnZ2VyIGZpbGUgcGVyc2lzdGVuY2UsXG4gKiBub3Qgbm9ybWFsIENsYXVkZSBDb2RlIENMSSB1c2Vycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmlsZVBlcnNpc3RlbmNlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgaWYgKGZlYXR1cmUoJ0ZJTEVfUEVSU0lTVEVOQ0UnKSkge1xuICAgIHJldHVybiAoXG4gICAgICBnZXRFbnZpcm9ubWVudEtpbmQoKSA9PT0gJ2J5b2MnICYmXG4gICAgICAhIWdldFNlc3Npb25JbmdyZXNzQXV0aFRva2VuKCkgJiZcbiAgICAgICEhcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFX1NFU1NJT05fSURcbiAgICApXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCAiZXhwb3J0IGNvbnN0IERFRkFVTFRfVVBMT0FEX0NPTkNVUlJFTkNZID0gNFxuZXhwb3J0IGNvbnN0IEZJTEVfQ09VTlRfTElNSVQgPSAxMDAwXG5leHBvcnQgY29uc3QgT1VUUFVUU19TVUJESVIgPSAnb3V0cHV0cydcblxuZXhwb3J0IHR5cGUgUGVyc2lzdGVkRmlsZSA9IHtcbiAgcGF0aDogc3RyaW5nXG4gIGZpbGVJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBGYWlsZWRQZXJzaXN0ZW5jZSA9IHtcbiAgcGF0aDogc3RyaW5nXG4gIGVycm9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRmlsZXNQZXJzaXN0ZWRFdmVudERhdGEgPSB7XG4gIGZpbGVzOiBQZXJzaXN0ZWRGaWxlW11cbiAgZmFpbGVkOiBGYWlsZWRQZXJzaXN0ZW5jZVtdXG59XG5cbmV4cG9ydCB0eXBlIFR1cm5TdGFydFRpbWUgPSBudW1iZXJcbiIsICJpbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZ3JhY2VmdWxTaHV0ZG93blN5bmMgfSBmcm9tICcuL2dyYWNlZnVsU2h1dGRvd24uanMnXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpZGxlIHRpbWVvdXQgbWFuYWdlciBmb3IgU0RLIG1vZGUuXG4gKiBBdXRvbWF0aWNhbGx5IGV4aXRzIHRoZSBwcm9jZXNzIGFmdGVyIHRoZSBzcGVjaWZpZWQgaWRsZSBkdXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0gaXNJZGxlIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGlmIHRoZSBzeXN0ZW0gaXMgY3VycmVudGx5IGlkbGVcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIHN0YXJ0L3N0b3AgbWV0aG9kcyB0byBjb250cm9sIHRoZSBpZGxlIHRpbWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJZGxlVGltZW91dE1hbmFnZXIoaXNJZGxlOiAoKSA9PiBib29sZWFuKToge1xuICBzdGFydDogKCkgPT4gdm9pZFxuICBzdG9wOiAoKSA9PiB2b2lkXG59IHtcbiAgLy8gUGFyc2UgQ0xBVURFX0NPREVfRVhJVF9BRlRFUl9TVE9QX0RFTEFZIGVudmlyb25tZW50IHZhcmlhYmxlXG4gIGNvbnN0IGV4aXRBZnRlclN0b3BEZWxheSA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VYSVRfQUZURVJfU1RPUF9ERUxBWVxuICBjb25zdCBkZWxheU1zID0gZXhpdEFmdGVyU3RvcERlbGF5ID8gcGFyc2VJbnQoZXhpdEFmdGVyU3RvcERlbGF5LCAxMCkgOiBudWxsXG4gIGNvbnN0IGlzVmFsaWREZWxheSA9IGRlbGF5TXMgJiYgIWlzTmFOKGRlbGF5TXMpICYmIGRlbGF5TXMgPiAwXG5cbiAgbGV0IHRpbWVyOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsXG4gIGxldCBsYXN0SWRsZVRpbWUgPSAwXG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lclxuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgc3RhcnQgdGltZXIgaWYgZGVsYXkgaXMgY29uZmlndXJlZCBhbmQgdmFsaWRcbiAgICAgIGlmIChpc1ZhbGlkRGVsYXkpIHtcbiAgICAgICAgbGFzdElkbGVUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgd2UndmUgYmVlbiBjb250aW51b3VzbHkgaWRsZSBmb3IgdGhlIGZ1bGwgZHVyYXRpb25cbiAgICAgICAgICBjb25zdCBpZGxlRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gbGFzdElkbGVUaW1lXG4gICAgICAgICAgaWYgKGlzSWRsZSgpICYmIGlkbGVEdXJhdGlvbiA+PSBkZWxheU1zKSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEV4aXRpbmcgYWZ0ZXIgJHtkZWxheU1zfW1zIG9mIGlkbGUgdGltZWApXG4gICAgICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygpXG4gICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheU1zKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wKCkge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB7IHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHZhbGlkYXRlVXVpZCB9IGZyb20gJy4vdXVpZC5qcydcblxuZXhwb3J0IHR5cGUgUGFyc2VkU2Vzc2lvblVybCA9IHtcbiAgc2Vzc2lvbklkOiBVVUlEXG4gIGluZ3Jlc3NVcmw6IHN0cmluZyB8IG51bGxcbiAgaXNVcmw6IGJvb2xlYW5cbiAganNvbmxGaWxlOiBzdHJpbmcgfCBudWxsXG4gIGlzSnNvbmxGaWxlOiBib29sZWFuXG59XG5cbi8qKlxuICogUGFyc2VzIGEgc2Vzc2lvbiByZXN1bWUgaWRlbnRpZmllciB3aGljaCBjYW4gYmUgZWl0aGVyOlxuICogLSBBIFVSTCBjb250YWluaW5nIHNlc3Npb24gSUQgKGUuZy4sIGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3YxL3Nlc3Npb25faW5ncmVzcy9zZXNzaW9uLzU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMClcbiAqIC0gQSBwbGFpbiBzZXNzaW9uIElEIChVVUlEKVxuICpcbiAqIEBwYXJhbSByZXN1bWVJZGVudGlmaWVyIC0gVGhlIFVSTCBvciBzZXNzaW9uIElEIHRvIHBhcnNlXG4gKiBAcmV0dXJucyBQYXJzZWQgc2Vzc2lvbiBpbmZvcm1hdGlvbiBvciBudWxsIGlmIGludmFsaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2Vzc2lvbklkZW50aWZpZXIoXG4gIHJlc3VtZUlkZW50aWZpZXI6IHN0cmluZyxcbik6IFBhcnNlZFNlc3Npb25VcmwgfCBudWxsIHtcbiAgLy8gQ2hlY2sgZm9yIEpTT05MIGZpbGUgcGF0aCBiZWZvcmUgVVJMIHBhcnNpbmcsIHNpbmNlIFdpbmRvd3MgYWJzb2x1dGVcbiAgLy8gcGF0aHMgKGUuZy4sIEM6XFxwYXRoXFxmaWxlLmpzb25sKSBhcmUgcGFyc2VkIGFzIHZhbGlkIFVSTHMgd2l0aCBDOiBhcyBwcm90b2NvbFxuICBpZiAocmVzdW1lSWRlbnRpZmllci50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuanNvbmwnKSkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHJhbmRvbVVVSUQoKSBhcyBVVUlELFxuICAgICAgaW5ncmVzc1VybDogbnVsbCxcbiAgICAgIGlzVXJsOiBmYWxzZSxcbiAgICAgIGpzb25sRmlsZTogcmVzdW1lSWRlbnRpZmllcixcbiAgICAgIGlzSnNvbmxGaWxlOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBwbGFpbiBVVUlEXG4gIGlmICh2YWxpZGF0ZVV1aWQocmVzdW1lSWRlbnRpZmllcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiByZXN1bWVJZGVudGlmaWVyIGFzIFVVSUQsXG4gICAgICBpbmdyZXNzVXJsOiBudWxsLFxuICAgICAgaXNVcmw6IGZhbHNlLFxuICAgICAganNvbmxGaWxlOiBudWxsLFxuICAgICAgaXNKc29ubEZpbGU6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGl0J3MgYSBVUkxcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlc3VtZUlkZW50aWZpZXIpXG5cbiAgICAvLyBVc2UgdGhlIGVudGlyZSBVUkwgYXMgdGhlIGluZ3Jlc3MgVVJMXG4gICAgLy8gQWx3YXlzIGdlbmVyYXRlIGEgcmFuZG9tIHNlc3Npb24gSURcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiByYW5kb21VVUlEKCkgYXMgVVVJRCxcbiAgICAgIGluZ3Jlc3NVcmw6IHVybC5ocmVmLFxuICAgICAgaXNVcmw6IHRydWUsXG4gICAgICBqc29ubEZpbGU6IG51bGwsXG4gICAgICBpc0pzb25sRmlsZTogZmFsc2UsXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBOb3QgYSB2YWxpZCBVUkxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG4iLCAiLyoqXG4gKiBQbHVnaW4gaW5zdGFsbGF0aW9uIGZvciBoZWFkbGVzcy9DQ1IgbW9kZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBwbHVnaW4gaW5zdGFsbGF0aW9uIHdpdGhvdXQgQXBwU3RhdGUgdXBkYXRlcyxcbiAqIHN1aXRhYmxlIGZvciBub24taW50ZXJhY3RpdmUgZW52aXJvbm1lbnRzIGxpa2UgQ0NSLlxuICpcbiAqIFdoZW4gQ0xBVURFX0NPREVfUExVR0lOX1VTRV9aSVBfQ0FDSEUgaXMgZW5hYmxlZCwgcGx1Z2lucyBhcmUgc3RvcmVkIGFzXG4gKiBaSVBzIG9uIGEgbW91bnRlZCB2b2x1bWUuIFRoZSBzdG9yYWdlIGxheWVyIChwbHVnaW5Mb2FkZXIudHMpIGhhbmRsZXNcbiAqIFpJUCBjcmVhdGlvbiBvbiBpbnN0YWxsIGFuZCBleHRyYWN0aW9uIG9uIGxvYWQgdHJhbnNwYXJlbnRseS5cbiAqL1xuXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHsgd2l0aERpYWdub3N0aWNzVGltaW5nIH0gZnJvbSAnLi4vZGlhZ0xvZ3MuanMnXG5pbXBvcnQgeyBnZXRGc0ltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi4vZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi9sb2cuanMnXG5pbXBvcnQge1xuICBjbGVhck1hcmtldHBsYWNlc0NhY2hlLFxuICBnZXREZWNsYXJlZE1hcmtldHBsYWNlcyxcbiAgcmVnaXN0ZXJTZWVkTWFya2V0cGxhY2VzLFxufSBmcm9tICcuL21hcmtldHBsYWNlTWFuYWdlci5qcydcbmltcG9ydCB7IGRldGVjdEFuZFVuaW5zdGFsbERlbGlzdGVkUGx1Z2lucyB9IGZyb20gJy4vcGx1Z2luQmxvY2tsaXN0LmpzJ1xuaW1wb3J0IHsgY2xlYXJQbHVnaW5DYWNoZSB9IGZyb20gJy4vcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHsgcmVjb25jaWxlTWFya2V0cGxhY2VzIH0gZnJvbSAnLi9yZWNvbmNpbGVyLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYW51cFNlc3Npb25QbHVnaW5DYWNoZSxcbiAgZ2V0WmlwQ2FjaGVNYXJrZXRwbGFjZXNEaXIsXG4gIGdldFppcENhY2hlUGx1Z2luc0RpcixcbiAgaXNNYXJrZXRwbGFjZVNvdXJjZVN1cHBvcnRlZEJ5WmlwQ2FjaGUsXG4gIGlzUGx1Z2luWmlwQ2FjaGVFbmFibGVkLFxufSBmcm9tICcuL3ppcENhY2hlLmpzJ1xuaW1wb3J0IHsgc3luY01hcmtldHBsYWNlc1RvWmlwQ2FjaGUgfSBmcm9tICcuL3ppcENhY2hlQWRhcHRlcnMuanMnXG5cbi8qKlxuICogSW5zdGFsbCBwbHVnaW5zIGZvciBoZWFkbGVzcy9DQ1IgbW9kZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoZWFkbGVzcyBlcXVpdmFsZW50IG9mIHBlcmZvcm1CYWNrZ3JvdW5kUGx1Z2luSW5zdGFsbGF0aW9ucygpLFxuICogYnV0IHdpdGhvdXQgQXBwU3RhdGUgdXBkYXRlcyAobm8gVUkgdG8gdXBkYXRlIGluIGhlYWRsZXNzIG1vZGUpLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgYW55IHBsdWdpbnMgd2VyZSBpbnN0YWxsZWQgKGNhbGxlciBzaG91bGQgcmVmcmVzaCBNQ1ApXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YWxsUGx1Z2luc0ZvckhlYWRsZXNzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCB6aXBDYWNoZU1vZGUgPSBpc1BsdWdpblppcENhY2hlRW5hYmxlZCgpXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzczogc3RhcnRpbmcke3ppcENhY2hlTW9kZSA/ICcgKHppcCBjYWNoZSBtb2RlKScgOiAnJ31gLFxuICApXG5cbiAgLy8gUmVnaXN0ZXIgc2VlZCBtYXJrZXRwbGFjZXMgKENMQVVERV9DT0RFX1BMVUdJTl9TRUVEX0RJUikgYmVmb3JlIGRpZmZpbmcuXG4gIC8vIElkZW1wb3RlbnQ7IG5vLW9wIGlmIHNlZWQgbm90IGNvbmZpZ3VyZWQuIFdpdGhvdXQgdGhpcywgZmluZE1pc3NpbmdNYXJrZXRwbGFjZXNcbiAgLy8gd291bGQgc2VlIHNlZWQgZW50cmllcyBhcyBtaXNzaW5nIFx1MjE5MiBjbG9uZSBcdTIxOTIgZGVmZWF0cyBzZWVkJ3MgcHVycG9zZS5cbiAgLy9cbiAgLy8gSWYgcmVnaXN0cmF0aW9uIGNoYW5nZWQgc3RhdGUsIGNsZWFyIGNhY2hlcyBzbyB0aGUgZWFybHkgcGx1Z2luLWxvYWQgcGFzc1xuICAvLyAod2hpY2ggcnVucyBkdXJpbmcgQ0xJIHN0YXJ0dXAgYmVmb3JlIHRoaXMgZnVuY3Rpb24pIGRvZXNuJ3Qga2VlcCBzdGFsZVxuICAvLyBcIm1hcmtldHBsYWNlIG5vdCBmb3VuZFwiIHJlc3VsdHMuIFdpdGhvdXQgdGhpcyBjbGVhciwgYSBmaXJzdC1ib290IGhlYWRsZXNzXG4gIC8vIHJ1biB3aXRoIGEgc2VlZC1jYWNoZWQgcGx1Z2luIHdvdWxkIHNob3cgMCBwbHVnaW4gY29tbWFuZHMvYWdlbnRzL3NraWxsc1xuICAvLyBpbiB0aGUgaW5pdCBtZXNzYWdlIGV2ZW4gdGhvdWdoIHRoZSBzZWVkIGhhcyBldmVyeXRoaW5nLlxuICBjb25zdCBzZWVkQ2hhbmdlZCA9IGF3YWl0IHJlZ2lzdGVyU2VlZE1hcmtldHBsYWNlcygpXG4gIGlmIChzZWVkQ2hhbmdlZCkge1xuICAgIGNsZWFyTWFya2V0cGxhY2VzQ2FjaGUoKVxuICAgIGNsZWFyUGx1Z2luQ2FjaGUoJ2hlYWRsZXNzUGx1Z2luSW5zdGFsbDogc2VlZCBtYXJrZXRwbGFjZXMgcmVnaXN0ZXJlZCcpXG4gIH1cblxuICAvLyBFbnN1cmUgemlwIGNhY2hlIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZXhpc3RzXG4gIGlmICh6aXBDYWNoZU1vZGUpIHtcbiAgICBhd2FpdCBnZXRGc0ltcGxlbWVudGF0aW9uKCkubWtkaXIoZ2V0WmlwQ2FjaGVNYXJrZXRwbGFjZXNEaXIoKSlcbiAgICBhd2FpdCBnZXRGc0ltcGxlbWVudGF0aW9uKCkubWtkaXIoZ2V0WmlwQ2FjaGVQbHVnaW5zRGlyKCkpXG4gIH1cblxuICAvLyBEZWNsYXJlZCBub3cgaW5jbHVkZXMgYW4gaW1wbGljaXQgY2xhdWRlLXBsdWdpbnMtb2ZmaWNpYWwgZW50cnkgd2hlbiBhbnlcbiAgLy8gZW5hYmxlZCBwbHVnaW4gcmVmZXJlbmNlcyBpdCAoc2VlIGdldERlY2xhcmVkTWFya2V0cGxhY2VzKS4gVGhpcyByb3V0ZXNcbiAgLy8gdGhlIG9mZmljaWFsIG1hcmtldHBsYWNlIHRocm91Z2ggdGhlIHNhbWUgcmVjb25jaWxlciBwYXRoIGFzIGFueSBvdGhlciBcdTIwMTRcbiAgLy8gd2hpY2ggY29tcG9zZXMgY29ycmVjdGx5IHdpdGggQ0xBVURFX0NPREVfUExVR0lOX1NFRURfRElSOiBzZWVkIHJlZ2lzdGVyc1xuICAvLyBpdCBpbiBrbm93bl9tYXJrZXRwbGFjZXMuanNvbiwgcmVjb25jaWxlciBkaWZmIHNlZXMgaXQgYXMgdXBUb0RhdGUsIG5vIGNsb25lLlxuICBjb25zdCBkZWNsYXJlZENvdW50ID0gT2JqZWN0LmtleXMoZ2V0RGVjbGFyZWRNYXJrZXRwbGFjZXMoKSkubGVuZ3RoXG5cbiAgY29uc3QgbWV0cmljcyA9IHtcbiAgICBtYXJrZXRwbGFjZXNfaW5zdGFsbGVkOiAwLFxuICAgIGRlbGlzdGVkX2NvdW50OiAwLFxuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSBmcm9tIHNlZWRDaGFuZ2VkIHNvIHRoZSBjYWxsZXIgKHByaW50LnRzKSBjYWxsc1xuICAvLyByZWZyZXNoUGx1Z2luU3RhdGUoKSBcdTIxOTIgY2xlYXJDb21tYW5kc0NhY2hlL2NsZWFyQWdlbnREZWZpbml0aW9uc0NhY2hlXG4gIC8vIHdoZW4gc2VlZCByZWdpc3RyYXRpb24gYWRkZWQgbWFya2V0cGxhY2VzLiBXaXRob3V0IHRoaXMsIHRoZSBjYWxsZXJcbiAgLy8gb25seSByZWZyZXNoZXMgd2hlbiBhbiBhY3R1YWwgcGx1Z2luIGluc3RhbGwgaGFwcGVuZWQuXG4gIGxldCBwbHVnaW5zQ2hhbmdlZCA9IHNlZWRDaGFuZ2VkXG5cbiAgdHJ5IHtcbiAgICBpZiAoZGVjbGFyZWRDb3VudCA9PT0gMCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdpbnN0YWxsUGx1Z2luc0ZvckhlYWRsZXNzOiBubyBtYXJrZXRwbGFjZXMgZGVjbGFyZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWNvbmNpbGUgZGVjbGFyZWQgbWFya2V0cGxhY2VzIChzZXR0aW5ncyBpbnRlbnQgKyBpbXBsaWNpdCBvZmZpY2lhbClcbiAgICAgIC8vIHdpdGggbWF0ZXJpYWxpemVkIHN0YXRlLiBaaXAgY2FjaGU6IHNraXAgdW5zdXBwb3J0ZWQgc291cmNlIHR5cGVzLlxuICAgICAgY29uc3QgcmVjb25jaWxlUmVzdWx0ID0gYXdhaXQgd2l0aERpYWdub3N0aWNzVGltaW5nKFxuICAgICAgICAnaGVhZGxlc3NfbWFya2V0cGxhY2VfcmVjb25jaWxlJyxcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICByZWNvbmNpbGVNYXJrZXRwbGFjZXMoe1xuICAgICAgICAgICAgc2tpcDogemlwQ2FjaGVNb2RlXG4gICAgICAgICAgICAgID8gKF9uYW1lLCBzb3VyY2UpID0+XG4gICAgICAgICAgICAgICAgICAhaXNNYXJrZXRwbGFjZVNvdXJjZVN1cHBvcnRlZEJ5WmlwQ2FjaGUoc291cmNlKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgYGluc3RhbGxQbHVnaW5zRm9ySGVhZGxlc3M6IGluc3RhbGxlZCBtYXJrZXRwbGFjZSAke2V2ZW50Lm5hbWV9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzczogZmFpbGVkIHRvIGluc3RhbGwgbWFya2V0cGxhY2UgJHtldmVudC5uYW1lfTogJHtldmVudC5lcnJvcn1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgciA9PiAoe1xuICAgICAgICAgIGluc3RhbGxlZF9jb3VudDogci5pbnN0YWxsZWQubGVuZ3RoLFxuICAgICAgICAgIHVwZGF0ZWRfY291bnQ6IHIudXBkYXRlZC5sZW5ndGgsXG4gICAgICAgICAgZmFpbGVkX2NvdW50OiByLmZhaWxlZC5sZW5ndGgsXG4gICAgICAgICAgc2tpcHBlZF9jb3VudDogci5za2lwcGVkLmxlbmd0aCxcbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgICAgIGlmIChyZWNvbmNpbGVSZXN1bHQuc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgaW5zdGFsbFBsdWdpbnNGb3JIZWFkbGVzczogc2tpcHBlZCAke3JlY29uY2lsZVJlc3VsdC5za2lwcGVkLmxlbmd0aH0gbWFya2V0cGxhY2UocykgdW5zdXBwb3J0ZWQgYnkgemlwIGNhY2hlOiAke3JlY29uY2lsZVJlc3VsdC5za2lwcGVkLmpvaW4oJywgJyl9YCxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXJrZXRwbGFjZXNDaGFuZ2VkID1cbiAgICAgICAgcmVjb25jaWxlUmVzdWx0Lmluc3RhbGxlZC5sZW5ndGggKyByZWNvbmNpbGVSZXN1bHQudXBkYXRlZC5sZW5ndGhcblxuICAgICAgLy8gQ2xlYXIgY2FjaGVzIHNvIG5ld2x5LWluc3RhbGxlZCBtYXJrZXRwbGFjZSBwbHVnaW5zIGFyZSBkaXNjb3ZlcmFibGUuXG4gICAgICAvLyBQbHVnaW4gY2FjaGluZyBpcyB0aGUgbG9hZGVyJ3Mgam9iIFx1MjAxNCBhZnRlciBjYWNoZXMgY2xlYXIsIHRoZSBjYWxsZXInc1xuICAgICAgLy8gcmVmcmVzaFBsdWdpblN0YXRlKCkgXHUyMTkyIGxvYWRBbGxQbHVnaW5zKCkgd2lsbCBjYWNoZSBhbnkgbWlzc2luZyBwbHVnaW5zXG4gICAgICAvLyBmcm9tIHRoZSBuZXdseS1tYXRlcmlhbGl6ZWQgbWFya2V0cGxhY2VzLlxuICAgICAgaWYgKG1hcmtldHBsYWNlc0NoYW5nZWQgPiAwKSB7XG4gICAgICAgIGNsZWFyTWFya2V0cGxhY2VzQ2FjaGUoKVxuICAgICAgICBjbGVhclBsdWdpbkNhY2hlKCdoZWFkbGVzc1BsdWdpbkluc3RhbGw6IG1hcmtldHBsYWNlcyByZWNvbmNpbGVkJylcbiAgICAgICAgcGx1Z2luc0NoYW5nZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIG1ldHJpY3MubWFya2V0cGxhY2VzX2luc3RhbGxlZCA9IG1hcmtldHBsYWNlc0NoYW5nZWRcbiAgICB9XG5cbiAgICAvLyBaaXAgY2FjaGU6IHNhdmUgbWFya2V0cGxhY2UgSlNPTnMgZm9yIG9mZmxpbmUgYWNjZXNzIG9uIGVwaGVtZXJhbCBjb250YWluZXJzLlxuICAgIC8vIFJ1bnMgdW5jb25kaXRpb25hbGx5IHNvIHRoYXQgc3RlYWR5LXN0YXRlIGNvbnRhaW5lcnMgKGFsbCBwbHVnaW5zIGluc3RhbGxlZClcbiAgICAvLyBzdGlsbCBzeW5jIG1hcmtldHBsYWNlIGRhdGEgdGhhdCBtYXkgaGF2ZSBiZWVuIGNsb25lZCBpbiBhIHByZXZpb3VzIHJ1bi5cbiAgICBpZiAoemlwQ2FjaGVNb2RlKSB7XG4gICAgICBhd2FpdCBzeW5jTWFya2V0cGxhY2VzVG9aaXBDYWNoZSgpXG4gICAgfVxuXG4gICAgLy8gRGVsaXN0aW5nIGVuZm9yY2VtZW50XG4gICAgY29uc3QgbmV3bHlEZWxpc3RlZCA9IGF3YWl0IGRldGVjdEFuZFVuaW5zdGFsbERlbGlzdGVkUGx1Z2lucygpXG4gICAgbWV0cmljcy5kZWxpc3RlZF9jb3VudCA9IG5ld2x5RGVsaXN0ZWQubGVuZ3RoXG4gICAgaWYgKG5ld2x5RGVsaXN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgcGx1Z2luc0NoYW5nZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHBsdWdpbnNDaGFuZ2VkKSB7XG4gICAgICBjbGVhclBsdWdpbkNhY2hlKCdoZWFkbGVzc1BsdWdpbkluc3RhbGw6IHBsdWdpbnMgY2hhbmdlZCcpXG4gICAgfVxuXG4gICAgLy8gWmlwIGNhY2hlOiByZWdpc3RlciBzZXNzaW9uIGNsZWFudXAgZm9yIGV4dHJhY3RlZCBwbHVnaW4gdGVtcCBkaXJzXG4gICAgaWYgKHppcENhY2hlTW9kZSkge1xuICAgICAgcmVnaXN0ZXJDbGVhbnVwKGNsZWFudXBTZXNzaW9uUGx1Z2luQ2FjaGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdWdpbnNDaGFuZ2VkXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZmluYWxseSB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2hlYWRsZXNzX3BsdWdpbl9pbnN0YWxsJywgbWV0cmljcylcbiAgfVxufVxuIiwgIi8qKlxuICogWmlwIENhY2hlIEFkYXB0ZXJzXG4gKlxuICogSS9PIGhlbHBlcnMgZm9yIHRoZSBwbHVnaW4gemlwIGNhY2hlLiBUaGVzZSBmdW5jdGlvbnMgaGFuZGxlIHJlYWRpbmcvd3JpdGluZ1xuICogemlwLWNhY2hlLWxvY2FsIG1ldGFkYXRhIGZpbGVzLCBleHRyYWN0aW5nIFpJUHMgdG8gc2Vzc2lvbiBkaXJlY3RvcmllcyxcbiAqIGFuZCBjcmVhdGluZyBaSVBzIGZvciBuZXdseSBpbnN0YWxsZWQgcGx1Z2lucy5cbiAqXG4gKiBUaGUgemlwIGNhY2hlIHN0b3JlcyBkYXRhIG9uIGEgbW91bnRlZCB2b2x1bWUgKGUuZy4sIEZpbGVzdG9yZSkgdGhhdCBwZXJzaXN0c1xuICogYWNyb3NzIGVwaGVtZXJhbCBjb250YWluZXIgbGlmZXRpbWVzLiBUaGUgc2Vzc2lvbiBjYWNoZSBpcyBhIGxvY2FsIHRlbXAgZGlyXG4gKiBmb3IgZXh0cmFjdGVkIHBsdWdpbnMgdXNlZCBkdXJpbmcgYSBzaW5nbGUgc2Vzc2lvbi5cbiAqL1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnU2FmZSB9IGZyb20gJy4vbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBLbm93bk1hcmtldHBsYWNlc0ZpbGUsXG4gIEtub3duTWFya2V0cGxhY2VzRmlsZVNjaGVtYSxcbiAgdHlwZSBQbHVnaW5NYXJrZXRwbGFjZSxcbiAgUGx1Z2luTWFya2V0cGxhY2VTY2hlbWEsXG59IGZyb20gJy4vc2NoZW1hcy5qcydcbmltcG9ydCB7XG4gIGF0b21pY1dyaXRlVG9aaXBDYWNoZSxcbiAgZ2V0TWFya2V0cGxhY2VKc29uUmVsYXRpdmVQYXRoLFxuICBnZXRQbHVnaW5aaXBDYWNoZVBhdGgsXG4gIGdldFppcENhY2hlS25vd25NYXJrZXRwbGFjZXNQYXRoLFxufSBmcm9tICcuL3ppcENhY2hlLmpzJ1xuXG4vLyBcdTI1MDBcdTI1MDAgTWV0YWRhdGEgSS9PIFx1MjUwMFx1MjUwMFxuXG4vKipcbiAqIFJlYWQga25vd25fbWFya2V0cGxhY2VzLmpzb24gZnJvbSB0aGUgemlwIGNhY2hlLlxuICogUmV0dXJucyBlbXB0eSBvYmplY3QgaWYgZmlsZSBkb2Vzbid0IGV4aXN0LCBjYW4ndCBiZSBwYXJzZWQsIG9yIGZhaWxzIHNjaGVtYVxuICogdmFsaWRhdGlvbiAoZGF0YSBjb21lcyBmcm9tIGEgc2hhcmVkIG1vdW50ZWQgdm9sdW1lIFx1MjAxNCBvdGhlciBjb250YWluZXJzIG1heSB3cml0ZSkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkWmlwQ2FjaGVLbm93bk1hcmtldHBsYWNlcygpOiBQcm9taXNlPEtub3duTWFya2V0cGxhY2VzRmlsZT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShnZXRaaXBDYWNoZUtub3duTWFya2V0cGxhY2VzUGF0aCgpLCAndXRmLTgnKVxuICAgIGNvbnN0IHBhcnNlZCA9IEtub3duTWFya2V0cGxhY2VzRmlsZVNjaGVtYSgpLnNhZmVQYXJzZShqc29uUGFyc2UoY29udGVudCkpXG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgSW52YWxpZCBrbm93bl9tYXJrZXRwbGFjZXMuanNvbiBpbiB6aXAgY2FjaGU6ICR7cGFyc2VkLmVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgKVxuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWQuZGF0YVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge31cbiAgfVxufVxuXG4vKipcbiAqIFdyaXRlIGtub3duX21hcmtldHBsYWNlcy5qc29uIHRvIHRoZSB6aXAgY2FjaGUgYXRvbWljYWxseS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlWmlwQ2FjaGVLbm93bk1hcmtldHBsYWNlcyhcbiAgZGF0YTogS25vd25NYXJrZXRwbGFjZXNGaWxlLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGF0b21pY1dyaXRlVG9aaXBDYWNoZShcbiAgICBnZXRaaXBDYWNoZUtub3duTWFya2V0cGxhY2VzUGF0aCgpLFxuICAgIGpzb25TdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksXG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIE1hcmtldHBsYWNlIEpTT04gXHUyNTAwXHUyNTAwXG5cbi8qKlxuICogUmVhZCBhIG1hcmtldHBsYWNlIEpTT04gZmlsZSBmcm9tIHRoZSB6aXAgY2FjaGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkTWFya2V0cGxhY2VKc29uKFxuICBtYXJrZXRwbGFjZU5hbWU6IHN0cmluZyxcbik6IFByb21pc2U8UGx1Z2luTWFya2V0cGxhY2UgfCBudWxsPiB7XG4gIGNvbnN0IHppcENhY2hlUGF0aCA9IGdldFBsdWdpblppcENhY2hlUGF0aCgpXG4gIGlmICghemlwQ2FjaGVQYXRoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCByZWxQYXRoID0gZ2V0TWFya2V0cGxhY2VKc29uUmVsYXRpdmVQYXRoKG1hcmtldHBsYWNlTmFtZSlcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHppcENhY2hlUGF0aCwgcmVsUGF0aClcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZnVsbFBhdGgsICd1dGYtOCcpXG4gICAgY29uc3QgcGFyc2VkID0ganNvblBhcnNlKGNvbnRlbnQpXG4gICAgY29uc3QgcmVzdWx0ID0gUGx1Z2luTWFya2V0cGxhY2VTY2hlbWEoKS5zYWZlUGFyc2UocGFyc2VkKVxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhXG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBJbnZhbGlkIG1hcmtldHBsYWNlIEpTT04gZm9yICR7bWFya2V0cGxhY2VOYW1lfTogJHtyZXN1bHQuZXJyb3J9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFNhdmUgYSBtYXJrZXRwbGFjZSBKU09OIHRvIHRoZSB6aXAgY2FjaGUgZnJvbSBpdHMgaW5zdGFsbCBsb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVNYXJrZXRwbGFjZUpzb25Ub1ppcENhY2hlKFxuICBtYXJrZXRwbGFjZU5hbWU6IHN0cmluZyxcbiAgaW5zdGFsbExvY2F0aW9uOiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgemlwQ2FjaGVQYXRoID0gZ2V0UGx1Z2luWmlwQ2FjaGVQYXRoKClcbiAgaWYgKCF6aXBDYWNoZVBhdGgpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZE1hcmtldHBsYWNlSnNvbkNvbnRlbnQoaW5zdGFsbExvY2F0aW9uKVxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbFBhdGggPSBnZXRNYXJrZXRwbGFjZUpzb25SZWxhdGl2ZVBhdGgobWFya2V0cGxhY2VOYW1lKVxuICAgIGF3YWl0IGF0b21pY1dyaXRlVG9aaXBDYWNoZShqb2luKHppcENhY2hlUGF0aCwgcmVsUGF0aCksIGNvbnRlbnQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZWFkIG1hcmtldHBsYWNlLmpzb24gY29udGVudCBmcm9tIGEgY2xvbmVkIG1hcmtldHBsYWNlIGRpcmVjdG9yeSBvciBmaWxlLlxuICogRm9yIGRpcmVjdG9yeSBzb3VyY2VzOiBjaGVja3MgLmNsYXVkZS1wbHVnaW4vbWFya2V0cGxhY2UuanNvbiwgbWFya2V0cGxhY2UuanNvblxuICogRm9yIFVSTCBzb3VyY2VzOiB0aGUgaW5zdGFsbExvY2F0aW9uIElTIHRoZSBtYXJrZXRwbGFjZSBKU09OIGZpbGUgaXRzZWxmLlxuICovXG5hc3luYyBmdW5jdGlvbiByZWFkTWFya2V0cGxhY2VKc29uQ29udGVudChkaXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBjb25zdCBjYW5kaWRhdGVzID0gW1xuICAgIGpvaW4oZGlyLCAnLmNsYXVkZS1wbHVnaW4nLCAnbWFya2V0cGxhY2UuanNvbicpLFxuICAgIGpvaW4oZGlyLCAnbWFya2V0cGxhY2UuanNvbicpLFxuICAgIGRpciwgLy8gRm9yIFVSTCBzb3VyY2VzLCBpbnN0YWxsTG9jYXRpb24gSVMgdGhlIG1hcmtldHBsYWNlIEpTT04gZmlsZVxuICBdXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlYWRGaWxlKGNhbmRpZGF0ZSwgJ3V0Zi04JylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEVOT0VOVCAoZG9lc24ndCBleGlzdCkgb3IgRUlTRElSIChkaXJlY3RvcnkpIFx1MjAxNCB0cnkgbmV4dFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIFN5bmMgbWFya2V0cGxhY2UgZGF0YSB0byB6aXAgY2FjaGUgZm9yIG9mZmxpbmUgYWNjZXNzLlxuICogU2F2ZXMgbWFya2V0cGxhY2UgSlNPTnMgYW5kIG1lcmdlcyB3aXRoIHByZXZpb3VzbHkgY2FjaGVkIGRhdGFcbiAqIHNvIGVwaGVtZXJhbCBjb250YWluZXJzIGNhbiBhY2Nlc3MgbWFya2V0cGxhY2VzIHdpdGhvdXQgcmUtY2xvbmluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNNYXJrZXRwbGFjZXNUb1ppcENhY2hlKCk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBSZWFkLW9ubHkgaXRlcmF0aW9uIFx1MjAxNCBTYWZlIHZhcmlhbnQgc28gYSBjb3JydXB0ZWQgY29uZmlnIGRvZXNuJ3QgdGhyb3cuXG4gIC8vIFRoaXMgcnVucyBkdXJpbmcgc3RhcnR1cCBwYXRoczsgYSB0aHJvdyBoZXJlIGNhc2NhZGVzIHRvIHRoZSBzYW1lXG4gIC8vIHRyeS1ibG9jayB0aGF0IGNhdGNoZXMgbG9hZEFsbFBsdWdpbnMgZmFpbHVyZXMuXG4gIGNvbnN0IGtub3duTWFya2V0cGxhY2VzID0gYXdhaXQgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnU2FmZSgpXG5cbiAgLy8gU2F2ZSBtYXJrZXRwbGFjZSBKU09OcyB0byB6aXAgY2FjaGVcbiAgZm9yIChjb25zdCBbbmFtZSwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKGtub3duTWFya2V0cGxhY2VzKSkge1xuICAgIGlmICghZW50cnkuaW5zdGFsbExvY2F0aW9uKSBjb250aW51ZVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYXZlTWFya2V0cGxhY2VKc29uVG9aaXBDYWNoZShuYW1lLCBlbnRyeS5pbnN0YWxsTG9jYXRpb24pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgRmFpbGVkIHRvIHNhdmUgbWFya2V0cGxhY2UgSlNPTiBmb3IgJHtuYW1lfTogJHtlcnJvcn1gKVxuICAgIH1cbiAgfVxuXG4gIC8vIE1lcmdlIHdpdGggcHJldmlvdXNseSBjYWNoZWQgZGF0YSAoZXBoZW1lcmFsIGNvbnRhaW5lcnMgbG9zZSBnbG9iYWwgY29uZmlnKVxuICBjb25zdCB6aXBDYWNoZUtub3duTWFya2V0cGxhY2VzID0gYXdhaXQgcmVhZFppcENhY2hlS25vd25NYXJrZXRwbGFjZXMoKVxuICBjb25zdCBtZXJnZWRLbm93bk1hcmtldHBsYWNlczogS25vd25NYXJrZXRwbGFjZXNGaWxlID0ge1xuICAgIC4uLnppcENhY2hlS25vd25NYXJrZXRwbGFjZXMsXG4gICAgLi4ua25vd25NYXJrZXRwbGFjZXMsXG4gIH1cbiAgYXdhaXQgd3JpdGVaaXBDYWNoZUtub3duTWFya2V0cGxhY2VzKG1lcmdlZEtub3duTWFya2V0cGxhY2VzKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q2pDO0FBRUEsWUFBTSxLQUFLLElBQUk7QUFBQSxJQUNqQixTQUFTLEdBQUc7QUFDVixZQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ3JCLGFBQU8sSUFBSSxJQUFJLElBQUk7QUFDbkIsZUFBUyxHQUFHO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFHQSxRQUFNLGFBQW9ELENBQUM7QUFDM0QsYUFBVyxRQUFRLGNBQWM7QUFDL0IsVUFBTSxTQUFTLGVBQWUsSUFBSTtBQUNsQyxRQUFJLFFBQVE7QUFDVixpQkFBVyxJQUFJLElBQUksZUFBZSxNQUFNO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBRUEsUUFBTSxXQUE0QjtBQUFBLElBQ2hDLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxFQUNYO0FBR0EsY0FBWSxVQUFRO0FBRWxCLFVBQU0sd0JBQXdCLG9CQUFJLElBQUk7QUFBQSxNQUNwQyxHQUFHLE9BQU8sS0FBSyxhQUFhLE9BQU87QUFBQSxNQUNuQyxHQUFHLE9BQU8sS0FBSyxVQUFVO0FBQUEsSUFDM0IsQ0FBQztBQUdELFVBQU0sa0JBQWtCLEtBQUssSUFBSSxNQUFNLE9BQU8sT0FBSztBQUNqRCxpQkFBVyxjQUFjLHVCQUF1QjtBQUM5QyxZQUFJLEVBQUUsS0FBSyxXQUFXLFFBQVEsVUFBVSxJQUFJLEdBQUc7QUFDN0MsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUNBLGFBQU87QUFBQSxJQUNULENBQUM7QUFHRCxVQUFNLG9CQUFvQixLQUFLLElBQUksUUFBUSxPQUFPLE9BQUs7QUFDckQsYUFBTyxDQUFDLHNCQUFzQixJQUFJLEVBQUUsSUFBSTtBQUFBLElBQzFDLENBQUM7QUFFRCxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxLQUFLO0FBQUEsUUFDSCxHQUFHLEtBQUs7QUFBQSxRQUNSLE9BQU8sQ0FBQyxHQUFHLGlCQUFpQixHQUFHLFFBQVE7QUFBQSxRQUN2QyxTQUFTLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxVQUFVO0FBQUEsTUFDL0M7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTztBQUFBLElBQ0wsVUFBVSxFQUFFLE9BQU8sU0FBUyxPQUFPO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbInJlYWRGaWxlIiwgIlVSTCIsICJVUkwiLCAiVVJMIiwgIlVSTCIsICJpbml0X3Byb21wdCIsICJpbml0X2NvbnN0YW50cyIsICJpbml0X2Vycm9ycyIsICJjd2QiLCAicmVzdWx0IiwgImluaXRfYXV0aCIsICJyYW5kb21VVUlEIiwgImluaXRfY29uZmlnIiwgImluaXRfYXV0aCIsICJyYW5kb21VVUlEIiwgImpvaW4iLCAiam9pbiIsICJpbml0X3R5cGVzIiwgInJhbmRvbVVVSUQiLCAiZXJyb3JNZXNzYWdlIiwgInJlYWRGaWxlIl0KfQo=
