#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  MessageSelector_exports,
  buildSystemInitMessage,
  init_MessageSelector,
  processUserInput,
  sdkCompatToolName
} from "./chunk-OK53HJD7.mjs";
import {
  init_mappers,
  localCommandOutputToSDKAssistantMessage,
  toSDKCompactMetadata
} from "./chunk-TYT35UNL.mjs";
import {
  SYNTHETIC_MESSAGES,
  SYNTHETIC_OUTPUT_TOOL_NAME,
  accumulateUsage,
  asSystemPrompt,
  categorizeRetryableAPIError,
  coordinatorMode_exports,
  countToolCalls,
  createAbortController,
  fileHistoryEnabled,
  fileHistoryMakeSnapshot,
  flushSessionStorage,
  getScratchpadDir,
  getSlashCommandToolSkills,
  getSystemContext,
  getSystemPrompt,
  getUserContext,
  handleOrphanedPermission,
  headlessProfilerCheckpoint,
  init_Shell,
  init_SyntheticOutputTool,
  init_abortController,
  init_claude,
  init_commands2 as init_commands,
  init_context,
  init_coordinatorMode,
  init_cost_tracker,
  init_errors,
  init_fileHistory,
  init_filesystem,
  init_headlessProfiler,
  init_hookHelpers,
  init_logging,
  init_memdir,
  init_messages2 as init_messages,
  init_pluginLoader,
  init_prompts2 as init_prompts,
  init_query,
  init_queryHelpers,
  init_sessionStorage,
  init_snipCompact,
  init_snipProjection,
  init_systemPromptType,
  init_thinking,
  isResultSuccessful,
  isScratchpadEnabled,
  loadAllPluginsCacheOnly,
  loadMemoryPrompt,
  normalizeMessage,
  query,
  recordTranscript,
  registerStructuredOutputEnforcement,
  setCwd,
  shouldEnableThinkingByDefault,
  snipCompact_exports,
  snipProjection_exports,
  updateUsage
} from "./chunk-PWGYNHQM.mjs";
import {
  EMPTY_USAGE
} from "./chunk-SQ6KOOZS.mjs";
import {
  cloneFileStateCache,
  init_fileStateCache
} from "./chunk-GYT5IJSH.mjs";
import {
  init_Tool,
  toolMatchesName
} from "./chunk-X6KULBXG.mjs";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-V7ZPGO35.mjs";
import {
  getFastModeState,
  getGlobalConfig,
  getMainLoopModel,
  hasAutoMemPathOverride,
  init_config2 as init_config,
  init_fastMode,
  init_last,
  init_model,
  init_paths,
  last_default,
  parseUserSpecifiedModel
} from "./chunk-NKGQGSP5.mjs";
import {
  init_strip_ansi,
  stripAnsi
} from "./chunk-OGGCTXYU.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  getInMemoryErrors,
  init_log,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getModelUsage,
  getSessionId,
  getTotalAPIDuration,
  getTotalCostUSD,
  init_state,
  isSessionPersistenceDisabled
} from "./chunk-NGSB34MB.mjs";
import {
  init_envUtils,
  isBareMode,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

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
init_errors();
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
      cwd,
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
    setCwd(cwd);
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
          process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "3",
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
  cwd,
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
    cwd,
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

export {
  buildSideQuestionFallbackParams,
  QueryEngine,
  ask
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3F1ZXJ5Q29udGV4dC50cyIsICIuLi8uLi9zcmMvUXVlcnlFbmdpbmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogU2hhcmVkIGhlbHBlcnMgZm9yIGJ1aWxkaW5nIHRoZSBBUEkgY2FjaGUta2V5IHByZWZpeCAoc3lzdGVtUHJvbXB0LFxuICogdXNlckNvbnRleHQsIHN5c3RlbUNvbnRleHQpIGZvciBxdWVyeSgpIGNhbGxzLlxuICpcbiAqIExpdmVzIGluIGl0cyBvd24gZmlsZSBiZWNhdXNlIGl0IGltcG9ydHMgZnJvbSBjb250ZXh0LnRzIGFuZFxuICogY29uc3RhbnRzL3Byb21wdHMudHMsIHdoaWNoIGFyZSBoaWdoIGluIHRoZSBkZXBlbmRlbmN5IGdyYXBoLiBQdXR0aW5nXG4gKiB0aGVzZSBpbXBvcnRzIGluIHN5c3RlbVByb21wdC50cyBvciBzaWRlUXVlc3Rpb24udHMgKGJvdGggcmVhY2hhYmxlXG4gKiBmcm9tIGNvbW1hbmRzLnRzKSB3b3VsZCBjcmVhdGUgY3ljbGVzLiBPbmx5IGVudHJ5cG9pbnQtbGF5ZXIgZmlsZXNcbiAqIGltcG9ydCBmcm9tIGhlcmUgKFF1ZXJ5RW5naW5lLnRzLCBjbGkvcHJpbnQudHMpLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb21wdHMuanMnXG5pbXBvcnQgeyBnZXRTeXN0ZW1Db250ZXh0LCBnZXRVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQuanMnXG5pbXBvcnQgdHlwZSB7IE1DUFNlcnZlckNvbm5lY3Rpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvQXBwU3RhdGVTdG9yZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMsIFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWJvcnRDb250cm9sbGVyIH0gZnJvbSAnLi9hYm9ydENvbnRyb2xsZXIuanMnXG5pbXBvcnQgdHlwZSB7IEZpbGVTdGF0ZUNhY2hlIH0gZnJvbSAnLi9maWxlU3RhdGVDYWNoZS5qcydcbmltcG9ydCB0eXBlIHsgQ2FjaGVTYWZlUGFyYW1zIH0gZnJvbSAnLi9mb3JrZWRBZ2VudC5qcydcbmltcG9ydCB7IGdldE1haW5Mb29wTW9kZWwgfSBmcm9tICcuL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuL3N5c3RlbVByb21wdFR5cGUuanMnXG5pbXBvcnQge1xuICBzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCxcbiAgdHlwZSBUaGlua2luZ0NvbmZpZyxcbn0gZnJvbSAnLi90aGlua2luZy5qcydcblxuLyoqXG4gKiBGZXRjaCB0aGUgdGhyZWUgY29udGV4dCBwaWVjZXMgdGhhdCBmb3JtIHRoZSBBUEkgY2FjaGUta2V5IHByZWZpeDpcbiAqIHN5c3RlbVByb21wdCBwYXJ0cywgdXNlckNvbnRleHQsIHN5c3RlbUNvbnRleHQuXG4gKlxuICogV2hlbiBjdXN0b21TeXN0ZW1Qcm9tcHQgaXMgc2V0LCB0aGUgZGVmYXVsdCBnZXRTeXN0ZW1Qcm9tcHQgYnVpbGQgYW5kXG4gKiBnZXRTeXN0ZW1Db250ZXh0IGFyZSBza2lwcGVkIFx1MjAxNCB0aGUgY3VzdG9tIHByb21wdCByZXBsYWNlcyB0aGUgZGVmYXVsdFxuICogZW50aXJlbHksIGFuZCBzeXN0ZW1Db250ZXh0IHdvdWxkIGJlIGFwcGVuZGVkIHRvIGEgZGVmYXVsdCB0aGF0IGlzbid0XG4gKiBiZWluZyB1c2VkLlxuICpcbiAqIENhbGxlcnMgYXNzZW1ibGUgdGhlIGZpbmFsIHN5c3RlbVByb21wdCBmcm9tIGRlZmF1bHRTeXN0ZW1Qcm9tcHQgKG9yXG4gKiBjdXN0b21TeXN0ZW1Qcm9tcHQpICsgb3B0aW9uYWwgZXh0cmFzICsgYXBwZW5kU3lzdGVtUHJvbXB0LiBRdWVyeUVuZ2luZVxuICogaW5qZWN0cyBjb29yZGluYXRvciB1c2VyQ29udGV4dCBhbmQgbWVtb3J5LW1lY2hhbmljcyBwcm9tcHQgb24gdG9wO1xuICogc2lkZVF1ZXN0aW9uJ3MgZmFsbGJhY2sgdXNlcyB0aGUgYmFzZSByZXN1bHQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFN5c3RlbVByb21wdFBhcnRzKHtcbiAgdG9vbHMsXG4gIG1haW5Mb29wTW9kZWwsXG4gIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXMsXG4gIG1jcENsaWVudHMsXG4gIGN1c3RvbVN5c3RlbVByb21wdCxcbn06IHtcbiAgdG9vbHM6IFRvb2xzXG4gIG1haW5Mb29wTW9kZWw6IHN0cmluZ1xuICBhZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzOiBzdHJpbmdbXVxuICBtY3BDbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW11cbiAgY3VzdG9tU3lzdGVtUHJvbXB0OiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pOiBQcm9taXNlPHtcbiAgZGVmYXVsdFN5c3RlbVByb21wdDogc3RyaW5nW11cbiAgdXNlckNvbnRleHQ6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9XG4gIHN5c3RlbUNvbnRleHQ6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9XG59PiB7XG4gIGNvbnN0IFtkZWZhdWx0U3lzdGVtUHJvbXB0LCB1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgY3VzdG9tU3lzdGVtUHJvbXB0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgOiBnZXRTeXN0ZW1Qcm9tcHQoXG4gICAgICAgICAgdG9vbHMsXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBhZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzLFxuICAgICAgICAgIG1jcENsaWVudHMsXG4gICAgICAgICksXG4gICAgZ2V0VXNlckNvbnRleHQoKSxcbiAgICBjdXN0b21TeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZCA/IFByb21pc2UucmVzb2x2ZSh7fSkgOiBnZXRTeXN0ZW1Db250ZXh0KCksXG4gIF0pXG4gIHJldHVybiB7IGRlZmF1bHRTeXN0ZW1Qcm9tcHQsIHVzZXJDb250ZXh0LCBzeXN0ZW1Db250ZXh0IH1cbn1cblxuLyoqXG4gKiBCdWlsZCBDYWNoZVNhZmVQYXJhbXMgZnJvbSByYXcgaW5wdXRzIHdoZW4gZ2V0TGFzdENhY2hlU2FmZVBhcmFtcygpIGlzIG51bGwuXG4gKlxuICogVXNlZCBieSB0aGUgU0RLIHNpZGVfcXVlc3Rpb24gaGFuZGxlciAocHJpbnQudHMpIG9uIHJlc3VtZSBiZWZvcmUgYSB0dXJuXG4gKiBjb21wbGV0ZXMgXHUyMDE0IHRoZXJlJ3Mgbm8gc3RvcEhvb2tzIHNuYXBzaG90IHlldC4gTWlycm9ycyB0aGUgc3lzdGVtIHByb21wdFxuICogYXNzZW1ibHkgaW4gUXVlcnlFbmdpbmUudHM6YXNrKCkgc28gdGhlIHJlYnVpbHQgcHJlZml4IG1hdGNoZXMgd2hhdCB0aGVcbiAqIG1haW4gbG9vcCB3aWxsIHNlbmQsIHByZXNlcnZpbmcgdGhlIGNhY2hlIGhpdCBpbiB0aGUgY29tbW9uIGNhc2UuXG4gKlxuICogTWF5IHN0aWxsIG1pc3MgdGhlIGNhY2hlIGlmIHRoZSBtYWluIGxvb3AgYXBwbGllcyBleHRyYXMgdGhpcyBwYXRoIGRvZXNuJ3RcbiAqIGtub3cgYWJvdXQgKGNvb3JkaW5hdG9yIG1vZGUsIG1lbW9yeS1tZWNoYW5pY3MgcHJvbXB0KS4gVGhhdCdzIGFjY2VwdGFibGUgXHUyMDE0XG4gKiB0aGUgYWx0ZXJuYXRpdmUgaXMgcmV0dXJuaW5nIG51bGwgYW5kIGZhaWxpbmcgdGhlIHNpZGUgcXVlc3Rpb24gZW50aXJlbHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFNpZGVRdWVzdGlvbkZhbGxiYWNrUGFyYW1zKHtcbiAgdG9vbHMsXG4gIGNvbW1hbmRzLFxuICBtY3BDbGllbnRzLFxuICBtZXNzYWdlcyxcbiAgcmVhZEZpbGVTdGF0ZSxcbiAgZ2V0QXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlLFxuICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgdGhpbmtpbmdDb25maWcsXG4gIGFnZW50cyxcbn06IHtcbiAgdG9vbHM6IFRvb2xzXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgbWNwQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgcmVhZEZpbGVTdGF0ZTogRmlsZVN0YXRlQ2FjaGVcbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZFxuICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICB0aGlua2luZ0NvbmZpZzogVGhpbmtpbmdDb25maWcgfCB1bmRlZmluZWRcbiAgYWdlbnRzOiBBZ2VudERlZmluaXRpb25bXVxufSk6IFByb21pc2U8Q2FjaGVTYWZlUGFyYW1zPiB7XG4gIGNvbnN0IG1haW5Mb29wTW9kZWwgPSBnZXRNYWluTG9vcE1vZGVsKClcbiAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG5cbiAgY29uc3QgeyBkZWZhdWx0U3lzdGVtUHJvbXB0LCB1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dCB9ID1cbiAgICBhd2FpdCBmZXRjaFN5c3RlbVByb21wdFBhcnRzKHtcbiAgICAgIHRvb2xzLFxuICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXM6IEFycmF5LmZyb20oXG4gICAgICAgIGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dC5hZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzLmtleXMoKSxcbiAgICAgICksXG4gICAgICBtY3BDbGllbnRzLFxuICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgIH0pXG5cbiAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYXNTeXN0ZW1Qcm9tcHQoW1xuICAgIC4uLihjdXN0b21TeXN0ZW1Qcm9tcHQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbY3VzdG9tU3lzdGVtUHJvbXB0XVxuICAgICAgOiBkZWZhdWx0U3lzdGVtUHJvbXB0KSxcbiAgICAuLi4oYXBwZW5kU3lzdGVtUHJvbXB0ID8gW2FwcGVuZFN5c3RlbVByb21wdF0gOiBbXSksXG4gIF0pXG5cbiAgLy8gU3RyaXAgaW4tcHJvZ3Jlc3MgYXNzaXN0YW50IG1lc3NhZ2UgKHN0b3BfcmVhc29uID09PSBudWxsKSBcdTIwMTQgc2FtZSBndWFyZFxuICAvLyBhcyBidHcudHN4LiBUaGUgU0RLIGNhbiBmaXJlIHNpZGVfcXVlc3Rpb24gbWlkLXR1cm4uXG4gIGNvbnN0IGxhc3QgPSBtZXNzYWdlcy5hdCgtMSlcbiAgY29uc3QgZm9ya0NvbnRleHRNZXNzYWdlcyA9XG4gICAgbGFzdD8udHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbGFzdC5tZXNzYWdlLnN0b3BfcmVhc29uID09PSBudWxsXG4gICAgICA/IG1lc3NhZ2VzLnNsaWNlKDAsIC0xKVxuICAgICAgOiBtZXNzYWdlc1xuXG4gIGNvbnN0IHRvb2xVc2VDb250ZXh0OiBUb29sVXNlQ29udGV4dCA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBjb21tYW5kcyxcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIG1haW5Mb29wTW9kZWwsXG4gICAgICB0b29scyxcbiAgICAgIHZlcmJvc2U6IGZhbHNlLFxuICAgICAgdGhpbmtpbmdDb25maWc6XG4gICAgICAgIHRoaW5raW5nQ29uZmlnID8/XG4gICAgICAgIChzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCgpICE9PSBmYWxzZVxuICAgICAgICAgID8geyB0eXBlOiAnYWRhcHRpdmUnIH1cbiAgICAgICAgICA6IHsgdHlwZTogJ2Rpc2FibGVkJyB9KSxcbiAgICAgIG1jcENsaWVudHMsXG4gICAgICBtY3BSZXNvdXJjZXM6IHt9LFxuICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IHRydWUsXG4gICAgICBhZ2VudERlZmluaXRpb25zOiB7IGFjdGl2ZUFnZW50czogYWdlbnRzLCBhbGxBZ2VudHM6IFtdIH0sXG4gICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgfSxcbiAgICBhYm9ydENvbnRyb2xsZXI6IGNyZWF0ZUFib3J0Q29udHJvbGxlcigpLFxuICAgIHJlYWRGaWxlU3RhdGUsXG4gICAgZ2V0QXBwU3RhdGUsXG4gICAgc2V0QXBwU3RhdGUsXG4gICAgbWVzc2FnZXM6IGZvcmtDb250ZXh0TWVzc2FnZXMsXG4gICAgc2V0SW5Qcm9ncmVzc1Rvb2xVc2VJRHM6ICgpID0+IHt9LFxuICAgIHNldFJlc3BvbnNlTGVuZ3RoOiAoKSA9PiB7fSxcbiAgICB1cGRhdGVGaWxlSGlzdG9yeVN0YXRlOiAoKSA9PiB7fSxcbiAgICB1cGRhdGVBdHRyaWJ1dGlvblN0YXRlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3lzdGVtUHJvbXB0LFxuICAgIHVzZXJDb250ZXh0LFxuICAgIHN5c3RlbUNvbnRleHQsXG4gICAgdG9vbFVzZUNvbnRleHQsXG4gICAgZm9ya0NvbnRleHRNZXNzYWdlcyxcbiAgfVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHR5cGUgeyBDb250ZW50QmxvY2tQYXJhbSB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoLWVzL2xhc3QuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uSWQsXG4gIGlzU2Vzc2lvblBlcnNpc3RlbmNlRGlzYWJsZWQsXG59IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFBlcm1pc3Npb25Nb2RlLFxuICBTREtDb21wYWN0Qm91bmRhcnlNZXNzYWdlLFxuICBTREtNZXNzYWdlLFxuICBTREtQZXJtaXNzaW9uRGVuaWFsLFxuICBTREtTdGF0dXMsXG4gIFNES1VzZXJNZXNzYWdlUmVwbGF5LFxufSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7IGFjY3VtdWxhdGVVc2FnZSwgdXBkYXRlVXNhZ2UgfSBmcm9tICdzcmMvc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB0eXBlIHsgTm9uTnVsbGFibGVVc2FnZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvbG9nZ2luZy5qcydcbmltcG9ydCB7IEVNUFRZX1VTQUdFIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS9sb2dnaW5nLmpzJ1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJ1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IGdldFNsYXNoQ29tbWFuZFRvb2xTa2lsbHMgfSBmcm9tICcuL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHtcbiAgTE9DQUxfQ09NTUFORF9TVERFUlJfVEFHLFxuICBMT0NBTF9DT01NQU5EX1NURE9VVF9UQUcsXG59IGZyb20gJy4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7XG4gIGdldE1vZGVsVXNhZ2UsXG4gIGdldFRvdGFsQVBJRHVyYXRpb24sXG4gIGdldFRvdGFsQ29zdCxcbn0gZnJvbSAnLi9jb3N0LXRyYWNrZXIuanMnXG5pbXBvcnQgdHlwZSB7IENhblVzZVRvb2xGbiB9IGZyb20gJy4vaG9va3MvdXNlQ2FuVXNlVG9vbC5qcydcbmltcG9ydCB7IGxvYWRNZW1vcnlQcm9tcHQgfSBmcm9tICcuL21lbWRpci9tZW1kaXIuanMnXG5pbXBvcnQgeyBoYXNBdXRvTWVtUGF0aE92ZXJyaWRlIH0gZnJvbSAnLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gJy4vcXVlcnkuanMnXG5pbXBvcnQgeyBjYXRlZ29yaXplUmV0cnlhYmxlQVBJRXJyb3IgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS9lcnJvcnMuanMnXG5pbXBvcnQgdHlwZSB7IE1DUFNlcnZlckNvbm5lY3Rpb24gfSBmcm9tICcuL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgdHlwZSBUb29scywgdHlwZSBUb29sVXNlQ29udGV4dCwgdG9vbE1hdGNoZXNOYW1lIH0gZnJvbSAnLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHsgU1lOVEhFVElDX09VVFBVVF9UT09MX05BTUUgfSBmcm9tICcuL3Rvb2xzL1N5bnRoZXRpY091dHB1dFRvb2wvU3ludGhldGljT3V0cHV0VG9vbC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHsgT3JwaGFuZWRQZXJtaXNzaW9uIH0gZnJvbSAnLi90eXBlcy90ZXh0SW5wdXRUeXBlcy5qcydcbmltcG9ydCB7IGNyZWF0ZUFib3J0Q29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHR5cGUgeyBBdHRyaWJ1dGlvblN0YXRlIH0gZnJvbSAnLi91dGlscy9jb21taXRBdHRyaWJ1dGlvbi5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBpc0JhcmVNb2RlLCBpc0VudlRydXRoeSB9IGZyb20gJy4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRGYXN0TW9kZVN0YXRlIH0gZnJvbSAnLi91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7XG4gIHR5cGUgRmlsZUhpc3RvcnlTdGF0ZSxcbiAgZmlsZUhpc3RvcnlFbmFibGVkLFxuICBmaWxlSGlzdG9yeU1ha2VTbmFwc2hvdCxcbn0gZnJvbSAnLi91dGlscy9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7XG4gIGNsb25lRmlsZVN0YXRlQ2FjaGUsXG4gIHR5cGUgRmlsZVN0YXRlQ2FjaGUsXG59IGZyb20gJy4vdXRpbHMvZmlsZVN0YXRlQ2FjaGUuanMnXG5pbXBvcnQgeyBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCB9IGZyb20gJy4vdXRpbHMvaGVhZGxlc3NQcm9maWxlci5qcydcbmltcG9ydCB7IHJlZ2lzdGVyU3RydWN0dXJlZE91dHB1dEVuZm9yY2VtZW50IH0gZnJvbSAnLi91dGlscy9ob29rcy9ob29rSGVscGVycy5qcydcbmltcG9ydCB7IGdldEluTWVtb3J5RXJyb3JzIH0gZnJvbSAnLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBjb3VudFRvb2xDYWxscywgU1lOVEhFVElDX01FU1NBR0VTIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7XG4gIGdldE1haW5Mb29wTW9kZWwsXG4gIHBhcnNlVXNlclNwZWNpZmllZE1vZGVsLFxufSBmcm9tICcuL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgbG9hZEFsbFBsdWdpbnNDYWNoZU9ubHkgfSBmcm9tICcuL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBQcm9jZXNzVXNlcklucHV0Q29udGV4dCxcbiAgcHJvY2Vzc1VzZXJJbnB1dCxcbn0gZnJvbSAnLi91dGlscy9wcm9jZXNzVXNlcklucHV0L3Byb2Nlc3NVc2VySW5wdXQuanMnXG5pbXBvcnQgeyBmZXRjaFN5c3RlbVByb21wdFBhcnRzIH0gZnJvbSAnLi91dGlscy9xdWVyeUNvbnRleHQuanMnXG5pbXBvcnQgeyBzZXRDd2QgfSBmcm9tICcuL3V0aWxzL1NoZWxsLmpzJ1xuaW1wb3J0IHtcbiAgZmx1c2hTZXNzaW9uU3RvcmFnZSxcbiAgcmVjb3JkVHJhbnNjcmlwdCxcbn0gZnJvbSAnLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZVRoZW1lU2V0dGluZyB9IGZyb20gJy4vdXRpbHMvc3lzdGVtVGhlbWUuanMnXG5pbXBvcnQge1xuICBzaG91bGRFbmFibGVUaGlua2luZ0J5RGVmYXVsdCxcbiAgdHlwZSBUaGlua2luZ0NvbmZpZyxcbn0gZnJvbSAnLi91dGlscy90aGlua2luZy5qcydcblxuLy8gTGF6eTogTWVzc2FnZVNlbGVjdG9yLnRzeCBwdWxscyBSZWFjdC9pbms7IG9ubHkgbmVlZGVkIGZvciBtZXNzYWdlIGZpbHRlcmluZyBhdCBxdWVyeSB0aW1lXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBtZXNzYWdlU2VsZWN0b3IgPVxuICAoKTogdHlwZW9mIGltcG9ydCgnc3JjL2NvbXBvbmVudHMvTWVzc2FnZVNlbGVjdG9yLmpzJykgPT5cbiAgICByZXF1aXJlKCdzcmMvY29tcG9uZW50cy9NZXNzYWdlU2VsZWN0b3IuanMnKVxuXG5pbXBvcnQge1xuICBsb2NhbENvbW1hbmRPdXRwdXRUb1NES0Fzc2lzdGFudE1lc3NhZ2UsXG4gIHRvU0RLQ29tcGFjdE1ldGFkYXRhLFxufSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzL21hcHBlcnMuanMnXG5pbXBvcnQge1xuICBidWlsZFN5c3RlbUluaXRNZXNzYWdlLFxuICBzZGtDb21wYXRUb29sTmFtZSxcbn0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy9zeXN0ZW1Jbml0LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NyYXRjaHBhZERpcixcbiAgaXNTY3JhdGNocGFkRW5hYmxlZCxcbn0gZnJvbSAnLi91dGlscy9wZXJtaXNzaW9ucy9maWxlc3lzdGVtLmpzJ1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5pbXBvcnQge1xuICBoYW5kbGVPcnBoYW5lZFBlcm1pc3Npb24sXG4gIGlzUmVzdWx0U3VjY2Vzc2Z1bCxcbiAgbm9ybWFsaXplTWVzc2FnZSxcbn0gZnJvbSAnLi91dGlscy9xdWVyeUhlbHBlcnMuanMnXG5cbi8vIERlYWQgY29kZSBlbGltaW5hdGlvbjogY29uZGl0aW9uYWwgaW1wb3J0IGZvciBjb29yZGluYXRvciBtb2RlXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBnZXRDb29yZGluYXRvclVzZXJDb250ZXh0OiAoXG4gIG1jcENsaWVudHM6IFJlYWRvbmx5QXJyYXk8eyBuYW1lOiBzdHJpbmcgfT4sXG4gIHNjcmF0Y2hwYWREaXI/OiBzdHJpbmcsXG4pID0+IHsgW2s6IHN0cmluZ106IHN0cmluZyB9ID0gZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpXG4gID8gcmVxdWlyZSgnLi9jb29yZGluYXRvci9jb29yZGluYXRvck1vZGUuanMnKS5nZXRDb29yZGluYXRvclVzZXJDb250ZXh0XG4gIDogKCkgPT4gKHt9KVxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5cbi8vIERlYWQgY29kZSBlbGltaW5hdGlvbjogY29uZGl0aW9uYWwgaW1wb3J0IGZvciBzbmlwIGNvbXBhY3Rpb25cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IHNuaXBNb2R1bGUgPSBmZWF0dXJlKCdISVNUT1JZX1NOSVAnKVxuICA/IChyZXF1aXJlKCcuL3NlcnZpY2VzL2NvbXBhY3Qvc25pcENvbXBhY3QuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuL3NlcnZpY2VzL2NvbXBhY3Qvc25pcENvbXBhY3QuanMnKSlcbiAgOiBudWxsXG5jb25zdCBzbmlwUHJvamVjdGlvbiA9IGZlYXR1cmUoJ0hJU1RPUllfU05JUCcpXG4gID8gKHJlcXVpcmUoJy4vc2VydmljZXMvY29tcGFjdC9zbmlwUHJvamVjdGlvbi5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4vc2VydmljZXMvY29tcGFjdC9zbmlwUHJvamVjdGlvbi5qcycpKVxuICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5leHBvcnQgdHlwZSBRdWVyeUVuZ2luZUNvbmZpZyA9IHtcbiAgY3dkOiBzdHJpbmdcbiAgdG9vbHM6IFRvb2xzXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgbWNwQ2xpZW50czogTUNQU2VydmVyQ29ubmVjdGlvbltdXG4gIGFnZW50czogQWdlbnREZWZpbml0aW9uW11cbiAgY2FuVXNlVG9vbDogQ2FuVXNlVG9vbEZuXG4gIGdldEFwcFN0YXRlOiAoKSA9PiBBcHBTdGF0ZVxuICBzZXRBcHBTdGF0ZTogKGY6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWRcbiAgaW5pdGlhbE1lc3NhZ2VzPzogTWVzc2FnZVtdXG4gIHJlYWRGaWxlQ2FjaGU6IEZpbGVTdGF0ZUNhY2hlXG4gIGN1c3RvbVN5c3RlbVByb21wdD86IHN0cmluZ1xuICBhcHBlbmRTeXN0ZW1Qcm9tcHQ/OiBzdHJpbmdcbiAgdXNlclNwZWNpZmllZE1vZGVsPzogc3RyaW5nXG4gIGZhbGxiYWNrTW9kZWw/OiBzdHJpbmdcbiAgdGhpbmtpbmdDb25maWc/OiBUaGlua2luZ0NvbmZpZ1xuICBtYXhUdXJucz86IG51bWJlclxuICBtYXhCdWRnZXRVc2Q/OiBudW1iZXJcbiAgdGFza0J1ZGdldD86IHsgdG90YWw6IG51bWJlciB9XG4gIGpzb25TY2hlbWE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB2ZXJib3NlPzogYm9vbGVhblxuICByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuXG4gIC8qKiBIYW5kbGVyIGZvciBVUkwgZWxpY2l0YXRpb25zIHRyaWdnZXJlZCBieSBNQ1AgdG9vbCAtMzIwNDIgZXJyb3JzLiAqL1xuICBoYW5kbGVFbGljaXRhdGlvbj86IFRvb2xVc2VDb250ZXh0WydoYW5kbGVFbGljaXRhdGlvbiddXG4gIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM/OiBib29sZWFuXG4gIHNldFNES1N0YXR1cz86IChzdGF0dXM6IFNES1N0YXR1cykgPT4gdm9pZFxuICBhYm9ydENvbnRyb2xsZXI/OiBBYm9ydENvbnRyb2xsZXJcbiAgb3JwaGFuZWRQZXJtaXNzaW9uPzogT3JwaGFuZWRQZXJtaXNzaW9uXG4gIC8qKlxuICAgKiBTbmlwLWJvdW5kYXJ5IGhhbmRsZXI6IHJlY2VpdmVzIGVhY2ggeWllbGRlZCBzeXN0ZW0gbWVzc2FnZSBwbHVzIHRoZVxuICAgKiBjdXJyZW50IG11dGFibGVNZXNzYWdlcyBzdG9yZS4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIG1lc3NhZ2UgaXMgbm90IGFcbiAgICogc25pcCBib3VuZGFyeTsgb3RoZXJ3aXNlIHJldHVybnMgdGhlIHJlcGxheWVkIHNuaXAgcmVzdWx0LiBJbmplY3RlZCBieVxuICAgKiBhc2soKSB3aGVuIEhJU1RPUllfU05JUCBpcyBlbmFibGVkIHNvIGZlYXR1cmUtZ2F0ZWQgc3RyaW5ncyBzdGF5IGluc2lkZVxuICAgKiB0aGUgZ2F0ZWQgbW9kdWxlIChrZWVwcyBRdWVyeUVuZ2luZSBmcmVlIG9mIGV4Y2x1ZGVkIHN0cmluZ3MgYW5kIHRlc3RhYmxlXG4gICAqIGRlc3BpdGUgZmVhdHVyZSgpIHJldHVybmluZyBmYWxzZSB1bmRlciBidW4gdGVzdCkuIFNESy1vbmx5OiB0aGUgUkVQTFxuICAgKiBrZWVwcyBmdWxsIGhpc3RvcnkgZm9yIFVJIHNjcm9sbGJhY2sgYW5kIHByb2plY3RzIG9uIGRlbWFuZCB2aWFcbiAgICogcHJvamVjdFNuaXBwZWRWaWV3OyBRdWVyeUVuZ2luZSB0cnVuY2F0ZXMgaGVyZSB0byBib3VuZCBtZW1vcnkgaW4gbG9uZ1xuICAgKiBoZWFkbGVzcyBzZXNzaW9ucyAobm8gVUkgdG8gcHJlc2VydmUpLlxuICAgKi9cbiAgc25pcFJlcGxheT86IChcbiAgICB5aWVsZGVkU3lzdGVtTXNnOiBNZXNzYWdlLFxuICAgIHN0b3JlOiBNZXNzYWdlW10sXG4gICkgPT4geyBtZXNzYWdlczogTWVzc2FnZVtdOyBleGVjdXRlZDogYm9vbGVhbiB9IHwgdW5kZWZpbmVkXG59XG5cbi8qKlxuICogUXVlcnlFbmdpbmUgb3ducyB0aGUgcXVlcnkgbGlmZWN5Y2xlIGFuZCBzZXNzaW9uIHN0YXRlIGZvciBhIGNvbnZlcnNhdGlvbi5cbiAqIEl0IGV4dHJhY3RzIHRoZSBjb3JlIGxvZ2ljIGZyb20gYXNrKCkgaW50byBhIHN0YW5kYWxvbmUgY2xhc3MgdGhhdCBjYW4gYmVcbiAqIHVzZWQgYnkgYm90aCB0aGUgaGVhZGxlc3MvU0RLIHBhdGggYW5kIChpbiBhIGZ1dHVyZSBwaGFzZSkgdGhlIFJFUEwuXG4gKlxuICogT25lIFF1ZXJ5RW5naW5lIHBlciBjb252ZXJzYXRpb24uIEVhY2ggc3VibWl0TWVzc2FnZSgpIGNhbGwgc3RhcnRzIGEgbmV3XG4gKiB0dXJuIHdpdGhpbiB0aGUgc2FtZSBjb252ZXJzYXRpb24uIFN0YXRlIChtZXNzYWdlcywgZmlsZSBjYWNoZSwgdXNhZ2UsIGV0Yy4pXG4gKiBwZXJzaXN0cyBhY3Jvc3MgdHVybnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWVyeUVuZ2luZSB7XG4gIHByaXZhdGUgY29uZmlnOiBRdWVyeUVuZ2luZUNvbmZpZ1xuICBwcml2YXRlIG11dGFibGVNZXNzYWdlczogTWVzc2FnZVtdXG4gIHByaXZhdGUgYWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9uRGVuaWFsczogU0RLUGVybWlzc2lvbkRlbmlhbFtdXG4gIHByaXZhdGUgdG90YWxVc2FnZTogTm9uTnVsbGFibGVVc2FnZVxuICBwcml2YXRlIGhhc0hhbmRsZWRPcnBoYW5lZFBlcm1pc3Npb24gPSBmYWxzZVxuICBwcml2YXRlIHJlYWRGaWxlU3RhdGU6IEZpbGVTdGF0ZUNhY2hlXG4gIC8vIFR1cm4tc2NvcGVkIHNraWxsIGRpc2NvdmVyeSB0cmFja2luZyAoZmVlZHMgd2FzX2Rpc2NvdmVyZWQgb25cbiAgLy8gdGVuZ3Vfc2tpbGxfdG9vbF9pbnZvY2F0aW9uKS4gTXVzdCBwZXJzaXN0IGFjcm9zcyB0aGUgdHdvXG4gIC8vIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0IHJlYnVpbGRzIGluc2lkZSBzdWJtaXRNZXNzYWdlLCBidXQgaXMgY2xlYXJlZFxuICAvLyBhdCB0aGUgc3RhcnQgb2YgZWFjaCBzdWJtaXRNZXNzYWdlIHRvIGF2b2lkIHVuYm91bmRlZCBncm93dGggYWNyb3NzXG4gIC8vIG1hbnkgdHVybnMgaW4gU0RLIG1vZGUuXG4gIHByaXZhdGUgZGlzY292ZXJlZFNraWxsTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBwcml2YXRlIGxvYWRlZE5lc3RlZE1lbW9yeVBhdGhzID0gbmV3IFNldDxzdHJpbmc+KClcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFF1ZXJ5RW5naW5lQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB0aGlzLm11dGFibGVNZXNzYWdlcyA9IGNvbmZpZy5pbml0aWFsTWVzc2FnZXMgPz8gW11cbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IGNvbmZpZy5hYm9ydENvbnRyb2xsZXIgPz8gY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICB0aGlzLnBlcm1pc3Npb25EZW5pYWxzID0gW11cbiAgICB0aGlzLnJlYWRGaWxlU3RhdGUgPSBjb25maWcucmVhZEZpbGVDYWNoZVxuICAgIHRoaXMudG90YWxVc2FnZSA9IEVNUFRZX1VTQUdFXG4gIH1cblxuICBhc3luYyAqc3VibWl0TWVzc2FnZShcbiAgICBwcm9tcHQ6IHN0cmluZyB8IENvbnRlbnRCbG9ja1BhcmFtW10sXG4gICAgb3B0aW9ucz86IHsgdXVpZD86IHN0cmluZzsgaXNNZXRhPzogYm9vbGVhbiB9LFxuICApOiBBc3luY0dlbmVyYXRvcjxTREtNZXNzYWdlLCB2b2lkLCB1bmtub3duPiB7XG4gICAgY29uc3Qge1xuICAgICAgY3dkLFxuICAgICAgY29tbWFuZHMsXG4gICAgICB0b29scyxcbiAgICAgIG1jcENsaWVudHMsXG4gICAgICB2ZXJib3NlID0gZmFsc2UsXG4gICAgICB0aGlua2luZ0NvbmZpZyxcbiAgICAgIG1heFR1cm5zLFxuICAgICAgbWF4QnVkZ2V0VXNkLFxuICAgICAgdGFza0J1ZGdldCxcbiAgICAgIGNhblVzZVRvb2wsXG4gICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICB1c2VyU3BlY2lmaWVkTW9kZWwsXG4gICAgICBmYWxsYmFja01vZGVsLFxuICAgICAganNvblNjaGVtYSxcbiAgICAgIGdldEFwcFN0YXRlLFxuICAgICAgc2V0QXBwU3RhdGUsXG4gICAgICByZXBsYXlVc2VyTWVzc2FnZXMgPSBmYWxzZSxcbiAgICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMgPSBmYWxzZSxcbiAgICAgIGFnZW50cyA9IFtdLFxuICAgICAgc2V0U0RLU3RhdHVzLFxuICAgICAgb3JwaGFuZWRQZXJtaXNzaW9uLFxuICAgIH0gPSB0aGlzLmNvbmZpZ1xuXG4gICAgdGhpcy5kaXNjb3ZlcmVkU2tpbGxOYW1lcy5jbGVhcigpXG4gICAgc2V0Q3dkKGN3ZClcbiAgICBjb25zdCBwZXJzaXN0U2Vzc2lvbiA9ICFpc1Nlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkKClcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAvLyBXcmFwIGNhblVzZVRvb2wgdG8gdHJhY2sgcGVybWlzc2lvbiBkZW5pYWxzXG4gICAgY29uc3Qgd3JhcHBlZENhblVzZVRvb2w6IENhblVzZVRvb2xGbiA9IGFzeW5jIChcbiAgICAgIHRvb2wsXG4gICAgICBpbnB1dCxcbiAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIHRvb2xVc2VJRCxcbiAgICAgIGZvcmNlRGVjaXNpb24sXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW5Vc2VUb29sKFxuICAgICAgICB0b29sLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgICAgIHRvb2xVc2VJRCxcbiAgICAgICAgZm9yY2VEZWNpc2lvbixcbiAgICAgIClcblxuICAgICAgLy8gVHJhY2sgZGVuaWFscyBmb3IgU0RLIHJlcG9ydGluZ1xuICAgICAgaWYgKHJlc3VsdC5iZWhhdmlvciAhPT0gJ2FsbG93Jykge1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLnB1c2goe1xuICAgICAgICAgIHRvb2xfbmFtZTogc2RrQ29tcGF0VG9vbE5hbWUodG9vbC5uYW1lKSxcbiAgICAgICAgICB0b29sX3VzZV9pZDogdG9vbFVzZUlELFxuICAgICAgICAgIHRvb2xfaW5wdXQ6IGlucHV0LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbEFwcFN0YXRlID0gZ2V0QXBwU3RhdGUoKVxuICAgIGNvbnN0IGluaXRpYWxNYWluTG9vcE1vZGVsID0gdXNlclNwZWNpZmllZE1vZGVsXG4gICAgICA/IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsKHVzZXJTcGVjaWZpZWRNb2RlbClcbiAgICAgIDogZ2V0TWFpbkxvb3BNb2RlbCgpXG5cbiAgICBjb25zdCBpbml0aWFsVGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnID0gdGhpbmtpbmdDb25maWdcbiAgICAgID8gdGhpbmtpbmdDb25maWdcbiAgICAgIDogc2hvdWxkRW5hYmxlVGhpbmtpbmdCeURlZmF1bHQoKSAhPT0gZmFsc2VcbiAgICAgICAgPyB7IHR5cGU6ICdhZGFwdGl2ZScgfVxuICAgICAgICA6IHsgdHlwZTogJ2Rpc2FibGVkJyB9XG5cbiAgICBoZWFkbGVzc1Byb2ZpbGVyQ2hlY2twb2ludCgnYmVmb3JlX2dldFN5c3RlbVByb21wdCcpXG4gICAgLy8gTmFycm93IG9uY2Ugc28gVFMgdHJhY2tzIHRoZSB0eXBlIHRocm91Z2ggdGhlIGNvbmRpdGlvbmFscyBiZWxvdy5cbiAgICBjb25zdCBjdXN0b21Qcm9tcHQgPVxuICAgICAgdHlwZW9mIGN1c3RvbVN5c3RlbVByb21wdCA9PT0gJ3N0cmluZycgPyBjdXN0b21TeXN0ZW1Qcm9tcHQgOiB1bmRlZmluZWRcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U3lzdGVtUHJvbXB0LFxuICAgICAgdXNlckNvbnRleHQ6IGJhc2VVc2VyQ29udGV4dCxcbiAgICAgIHN5c3RlbUNvbnRleHQsXG4gICAgfSA9IGF3YWl0IGZldGNoU3lzdGVtUHJvbXB0UGFydHMoe1xuICAgICAgdG9vbHMsXG4gICAgICBtYWluTG9vcE1vZGVsOiBpbml0aWFsTWFpbkxvb3BNb2RlbCxcbiAgICAgIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXM6IEFycmF5LmZyb20oXG4gICAgICAgIGluaXRpYWxBcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQuYWRkaXRpb25hbFdvcmtpbmdEaXJlY3Rvcmllcy5rZXlzKCksXG4gICAgICApLFxuICAgICAgbWNwQ2xpZW50cyxcbiAgICAgIGN1c3RvbVN5c3RlbVByb21wdDogY3VzdG9tUHJvbXB0LFxuICAgIH0pXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX2dldFN5c3RlbVByb21wdCcpXG4gICAgY29uc3QgdXNlckNvbnRleHQgPSB7XG4gICAgICAuLi5iYXNlVXNlckNvbnRleHQsXG4gICAgICAuLi5nZXRDb29yZGluYXRvclVzZXJDb250ZXh0KFxuICAgICAgICBtY3BDbGllbnRzLFxuICAgICAgICBpc1NjcmF0Y2hwYWRFbmFibGVkKCkgPyBnZXRTY3JhdGNocGFkRGlyKCkgOiB1bmRlZmluZWQsXG4gICAgICApLFxuICAgIH1cblxuICAgIC8vIFdoZW4gYW4gU0RLIGNhbGxlciBwcm92aWRlcyBhIGN1c3RvbSBzeXN0ZW0gcHJvbXB0IEFORCBoYXMgc2V0XG4gICAgLy8gQ0xBVURFX0NPV09SS19NRU1PUllfUEFUSF9PVkVSUklERSwgaW5qZWN0IHRoZSBtZW1vcnktbWVjaGFuaWNzIHByb21wdC5cbiAgICAvLyBUaGUgZW52IHZhciBpcyBhbiBleHBsaWNpdCBvcHQtaW4gc2lnbmFsIFx1MjAxNCB0aGUgY2FsbGVyIGhhcyB3aXJlZCB1cFxuICAgIC8vIGEgbWVtb3J5IGRpcmVjdG9yeSBhbmQgbmVlZHMgQ2xhdWRlIHRvIGtub3cgaG93IHRvIHVzZSBpdCAod2hpY2hcbiAgICAvLyBXcml0ZS9FZGl0IHRvb2xzIHRvIGNhbGwsIE1FTU9SWS5tZCBmaWxlbmFtZSwgbG9hZGluZyBzZW1hbnRpY3MpLlxuICAgIC8vIFRoZSBjYWxsZXIgY2FuIGxheWVyIHRoZWlyIG93biBwb2xpY3kgdGV4dCB2aWEgYXBwZW5kU3lzdGVtUHJvbXB0LlxuICAgIGNvbnN0IG1lbW9yeU1lY2hhbmljc1Byb21wdCA9XG4gICAgICBjdXN0b21Qcm9tcHQgIT09IHVuZGVmaW5lZCAmJiBoYXNBdXRvTWVtUGF0aE92ZXJyaWRlKClcbiAgICAgICAgPyBhd2FpdCBsb2FkTWVtb3J5UHJvbXB0KClcbiAgICAgICAgOiBudWxsXG5cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBhc1N5c3RlbVByb21wdChbXG4gICAgICAuLi4oY3VzdG9tUHJvbXB0ICE9PSB1bmRlZmluZWQgPyBbY3VzdG9tUHJvbXB0XSA6IGRlZmF1bHRTeXN0ZW1Qcm9tcHQpLFxuICAgICAgLi4uKG1lbW9yeU1lY2hhbmljc1Byb21wdCA/IFttZW1vcnlNZWNoYW5pY3NQcm9tcHRdIDogW10pLFxuICAgICAgLi4uKGFwcGVuZFN5c3RlbVByb21wdCA/IFthcHBlbmRTeXN0ZW1Qcm9tcHRdIDogW10pLFxuICAgIF0pXG5cbiAgICAvLyBSZWdpc3RlciBmdW5jdGlvbiBob29rIGZvciBzdHJ1Y3R1cmVkIG91dHB1dCBlbmZvcmNlbWVudFxuICAgIGNvbnN0IGhhc1N0cnVjdHVyZWRPdXRwdXRUb29sID0gdG9vbHMuc29tZSh0ID0+XG4gICAgICB0b29sTWF0Y2hlc05hbWUodCwgU1lOVEhFVElDX09VVFBVVF9UT09MX05BTUUpLFxuICAgIClcbiAgICBpZiAoanNvblNjaGVtYSAmJiBoYXNTdHJ1Y3R1cmVkT3V0cHV0VG9vbCkge1xuICAgICAgcmVnaXN0ZXJTdHJ1Y3R1cmVkT3V0cHV0RW5mb3JjZW1lbnQoc2V0QXBwU3RhdGUsIGdldFNlc3Npb25JZCgpKVxuICAgIH1cblxuICAgIGxldCBwcm9jZXNzVXNlcklucHV0Q29udGV4dDogUHJvY2Vzc1VzZXJJbnB1dENvbnRleHQgPSB7XG4gICAgICBtZXNzYWdlczogdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICAvLyBTbGFzaCBjb21tYW5kcyB0aGF0IG11dGF0ZSB0aGUgbWVzc2FnZSBhcnJheSAoZS5nLiAvZm9yY2Utc25pcClcbiAgICAgIC8vIGNhbGwgc2V0TWVzc2FnZXMoZm4pLiAgSW4gaW50ZXJhY3RpdmUgbW9kZSB0aGlzIHdyaXRlcyBiYWNrIHRvXG4gICAgICAvLyBBcHBTdGF0ZTsgaW4gcHJpbnQgbW9kZSB3ZSB3cml0ZSBiYWNrIHRvIG11dGFibGVNZXNzYWdlcyBzbyB0aGVcbiAgICAgIC8vIHJlc3Qgb2YgdGhlIHF1ZXJ5IGxvb3AgKHB1c2ggYXQgOjM4OSwgc25hcHNob3QgYXQgOjM5Mikgc2Vlc1xuICAgICAgLy8gdGhlIHJlc3VsdC4gIFRoZSBzZWNvbmQgcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQgYmVsb3cgKGFmdGVyXG4gICAgICAvLyBzbGFzaC1jb21tYW5kIHByb2Nlc3NpbmcpIGtlZXBzIHRoZSBuby1vcCBcdTIwMTQgbm90aGluZyBlbHNlIGNhbGxzXG4gICAgICAvLyBzZXRNZXNzYWdlcyBwYXN0IHRoYXQgcG9pbnQuXG4gICAgICBzZXRNZXNzYWdlczogZm4gPT4ge1xuICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcyA9IGZuKHRoaXMubXV0YWJsZU1lc3NhZ2VzKVxuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlQVBJS2V5OiAoKSA9PiB7fSxcbiAgICAgIGhhbmRsZUVsaWNpdGF0aW9uOiB0aGlzLmNvbmZpZy5oYW5kbGVFbGljaXRhdGlvbixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGRlYnVnOiBmYWxzZSwgLy8gd2UgdXNlIHN0ZG91dCwgc28gZG9uJ3Qgd2FudCB0byBjbG9iYmVyIGl0XG4gICAgICAgIHRvb2xzLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgICBtYWluTG9vcE1vZGVsOiBpbml0aWFsTWFpbkxvb3BNb2RlbCxcbiAgICAgICAgdGhpbmtpbmdDb25maWc6IGluaXRpYWxUaGlua2luZ0NvbmZpZyxcbiAgICAgICAgbWNwQ2xpZW50cyxcbiAgICAgICAgbWNwUmVzb3VyY2VzOiB7fSxcbiAgICAgICAgaWRlSW5zdGFsbGF0aW9uU3RhdHVzOiBudWxsLFxuICAgICAgICBpc05vbkludGVyYWN0aXZlU2Vzc2lvbjogdHJ1ZSxcbiAgICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHsgYWN0aXZlQWdlbnRzOiBhZ2VudHMsIGFsbEFnZW50czogW10gfSxcbiAgICAgICAgdGhlbWU6IHJlc29sdmVUaGVtZVNldHRpbmcoZ2V0R2xvYmFsQ29uZmlnKCkudGhlbWUpLFxuICAgICAgICBtYXhCdWRnZXRVc2QsXG4gICAgICB9LFxuICAgICAgZ2V0QXBwU3RhdGUsXG4gICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgIGFib3J0Q29udHJvbGxlcjogdGhpcy5hYm9ydENvbnRyb2xsZXIsXG4gICAgICByZWFkRmlsZVN0YXRlOiB0aGlzLnJlYWRGaWxlU3RhdGUsXG4gICAgICBuZXN0ZWRNZW1vcnlBdHRhY2htZW50VHJpZ2dlcnM6IG5ldyBTZXQ8c3RyaW5nPigpLFxuICAgICAgbG9hZGVkTmVzdGVkTWVtb3J5UGF0aHM6IHRoaXMubG9hZGVkTmVzdGVkTWVtb3J5UGF0aHMsXG4gICAgICBkeW5hbWljU2tpbGxEaXJUcmlnZ2VyczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgICBkaXNjb3ZlcmVkU2tpbGxOYW1lczogdGhpcy5kaXNjb3ZlcmVkU2tpbGxOYW1lcyxcbiAgICAgIHNldEluUHJvZ3Jlc3NUb29sVXNlSURzOiAoKSA9PiB7fSxcbiAgICAgIHNldFJlc3BvbnNlTGVuZ3RoOiAoKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUZpbGVIaXN0b3J5U3RhdGU6IChcbiAgICAgICAgdXBkYXRlcjogKHByZXY6IEZpbGVIaXN0b3J5U3RhdGUpID0+IEZpbGVIaXN0b3J5U3RhdGUsXG4gICAgICApID0+IHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHVwZGF0ZXIocHJldi5maWxlSGlzdG9yeSlcbiAgICAgICAgICBpZiAodXBkYXRlZCA9PT0gcHJldi5maWxlSGlzdG9yeSkgcmV0dXJuIHByZXZcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBmaWxlSGlzdG9yeTogdXBkYXRlZCB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdXBkYXRlQXR0cmlidXRpb25TdGF0ZTogKFxuICAgICAgICB1cGRhdGVyOiAocHJldjogQXR0cmlidXRpb25TdGF0ZSkgPT4gQXR0cmlidXRpb25TdGF0ZSxcbiAgICAgICkgPT4ge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkID0gdXBkYXRlcihwcmV2LmF0dHJpYnV0aW9uKVxuICAgICAgICAgIGlmICh1cGRhdGVkID09PSBwcmV2LmF0dHJpYnV0aW9uKSByZXR1cm4gcHJldlxuICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIGF0dHJpYnV0aW9uOiB1cGRhdGVkIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzZXRTREtTdGF0dXMsXG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIG9ycGhhbmVkIHBlcm1pc3Npb24gKG9ubHkgb25jZSBwZXIgZW5naW5lIGxpZmV0aW1lKVxuICAgIGlmIChvcnBoYW5lZFBlcm1pc3Npb24gJiYgIXRoaXMuaGFzSGFuZGxlZE9ycGhhbmVkUGVybWlzc2lvbikge1xuICAgICAgdGhpcy5oYXNIYW5kbGVkT3JwaGFuZWRQZXJtaXNzaW9uID0gdHJ1ZVxuICAgICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIGhhbmRsZU9ycGhhbmVkUGVybWlzc2lvbihcbiAgICAgICAgb3JwaGFuZWRQZXJtaXNzaW9uLFxuICAgICAgICB0b29scyxcbiAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICAgIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICAgICAgKSkge1xuICAgICAgICB5aWVsZCBtZXNzYWdlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCxcbiAgICAgIHNob3VsZFF1ZXJ5LFxuICAgICAgYWxsb3dlZFRvb2xzLFxuICAgICAgbW9kZWw6IG1vZGVsRnJvbVVzZXJJbnB1dCxcbiAgICAgIHJlc3VsdFRleHQsXG4gICAgfSA9IGF3YWl0IHByb2Nlc3NVc2VySW5wdXQoe1xuICAgICAgaW5wdXQ6IHByb21wdCxcbiAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgc2V0VG9vbEpTWDogKCkgPT4ge30sXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIC4uLnByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICAgICAgICBtZXNzYWdlczogdGhpcy5tdXRhYmxlTWVzc2FnZXMsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHRoaXMubXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgdXVpZDogb3B0aW9ucz8udXVpZCxcbiAgICAgIGlzTWV0YTogb3B0aW9ucz8uaXNNZXRhLFxuICAgICAgcXVlcnlTb3VyY2U6ICdzZGsnLFxuICAgIH0pXG5cbiAgICAvLyBQdXNoIG5ldyBtZXNzYWdlcywgaW5jbHVkaW5nIHVzZXIgaW5wdXQgYW5kIGFueSBhdHRhY2htZW50c1xuICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLnB1c2goLi4ubWVzc2FnZXNGcm9tVXNlcklucHV0KVxuXG4gICAgLy8gVXBkYXRlIHBhcmFtcyB0byByZWZsZWN0IHVwZGF0ZXMgZnJvbSBwcm9jZXNzaW5nIC9zbGFzaCBjb21tYW5kc1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnRoaXMubXV0YWJsZU1lc3NhZ2VzXVxuXG4gICAgLy8gUGVyc2lzdCB0aGUgdXNlcidzIG1lc3NhZ2UocykgdG8gdHJhbnNjcmlwdCBCRUZPUkUgZW50ZXJpbmcgdGhlIHF1ZXJ5XG4gICAgLy8gbG9vcC4gVGhlIGZvci1hd2FpdCBiZWxvdyBvbmx5IGNhbGxzIHJlY29yZFRyYW5zY3JpcHQgd2hlbiBhc2soKSB5aWVsZHNcbiAgICAvLyBhbiBhc3Npc3RhbnQvdXNlci9jb21wYWN0X2JvdW5kYXJ5IG1lc3NhZ2UgXHUyMDE0IHdoaWNoIGRvZXNuJ3QgaGFwcGVuIHVudGlsXG4gICAgLy8gdGhlIEFQSSByZXNwb25kcy4gSWYgdGhlIHByb2Nlc3MgaXMga2lsbGVkIGJlZm9yZSB0aGF0IChlLmcuIHVzZXIgY2xpY2tzXG4gICAgLy8gU3RvcCBpbiBjb3dvcmsgc2Vjb25kcyBhZnRlciBzZW5kKSwgdGhlIHRyYW5zY3JpcHQgaXMgbGVmdCB3aXRoIG9ubHlcbiAgICAvLyBxdWV1ZS1vcGVyYXRpb24gZW50cmllczsgZ2V0TGFzdFNlc3Npb25Mb2cgZmlsdGVycyB0aG9zZSBvdXQsIHJldHVybnNcbiAgICAvLyBudWxsLCBhbmQgLS1yZXN1bWUgZmFpbHMgd2l0aCBcIk5vIGNvbnZlcnNhdGlvbiBmb3VuZFwiLiBXcml0aW5nIG5vdyBtYWtlc1xuICAgIC8vIHRoZSB0cmFuc2NyaXB0IHJlc3VtYWJsZSBmcm9tIHRoZSBwb2ludCB0aGUgdXNlciBtZXNzYWdlIHdhcyBhY2NlcHRlZCxcbiAgICAvLyBldmVuIGlmIG5vIEFQSSByZXNwb25zZSBldmVyIGFycml2ZXMuXG4gICAgLy9cbiAgICAvLyAtLWJhcmUgLyBTSU1QTEU6IGZpcmUtYW5kLWZvcmdldC4gU2NyaXB0ZWQgY2FsbHMgZG9uJ3QgLS1yZXN1bWUgYWZ0ZXJcbiAgICAvLyBraWxsLW1pZC1yZXF1ZXN0LiBUaGUgYXdhaXQgaXMgfjRtcyBvbiBTU0QsIH4zMG1zIHVuZGVyIGRpc2sgY29udGVudGlvblxuICAgIC8vIFx1MjAxNCB0aGUgc2luZ2xlIGxhcmdlc3QgY29udHJvbGxhYmxlIGNyaXRpY2FsLXBhdGggY29zdCBhZnRlciBtb2R1bGUgZXZhbC5cbiAgICAvLyBUcmFuc2NyaXB0IGlzIHN0aWxsIHdyaXR0ZW4gKGZvciBwb3N0LWhvYyBkZWJ1Z2dpbmcpOyBqdXN0IG5vdCBibG9ja2luZy5cbiAgICBpZiAocGVyc2lzdFNlc3Npb24gJiYgbWVzc2FnZXNGcm9tVXNlcklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRyYW5zY3JpcHRQcm9taXNlID0gcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgIGlmIChpc0JhcmVNb2RlKCkpIHtcbiAgICAgICAgdm9pZCB0cmFuc2NyaXB0UHJvbWlzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdHJhbnNjcmlwdFByb21pc2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VBR0VSX0ZMVVNIKSB8fFxuICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0lTX0NPV09SSylcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXdhaXQgZmx1c2hTZXNzaW9uU3RvcmFnZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgbWVzc2FnZXMgdGhhdCBzaG91bGQgYmUgYWNrbm93bGVkZ2VkIGFmdGVyIHRyYW5zY3JpcHRcbiAgICBjb25zdCByZXBsYXlhYmxlTWVzc2FnZXMgPSBtZXNzYWdlc0Zyb21Vc2VySW5wdXQuZmlsdGVyKFxuICAgICAgbXNnID0+XG4gICAgICAgIChtc2cudHlwZSA9PT0gJ3VzZXInICYmXG4gICAgICAgICAgIW1zZy5pc01ldGEgJiYgLy8gU2tpcCBzeW50aGV0aWMgY2F2ZWF0IG1lc3NhZ2VzXG4gICAgICAgICAgIW1zZy50b29sVXNlUmVzdWx0ICYmIC8vIFNraXAgdG9vbCByZXN1bHRzICh0aGV5J2xsIGJlIGFja2VkIGZyb20gcXVlcnkpXG4gICAgICAgICAgbWVzc2FnZVNlbGVjdG9yKCkuc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcihtc2cpKSB8fCAvLyBTa2lwIG5vbi11c2VyLWF1dGhvcmVkIG1lc3NhZ2VzICh0YXNrIG5vdGlmaWNhdGlvbnMsIGV0Yy4pXG4gICAgICAgIChtc2cudHlwZSA9PT0gJ3N5c3RlbScgJiYgbXNnLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5JyksIC8vIEFsd2F5cyBhY2sgY29tcGFjdCBib3VuZGFyaWVzXG4gICAgKVxuICAgIGNvbnN0IG1lc3NhZ2VzVG9BY2sgPSByZXBsYXlVc2VyTWVzc2FnZXMgPyByZXBsYXlhYmxlTWVzc2FnZXMgOiBbXVxuXG4gICAgLy8gVXBkYXRlIHRoZSBUb29sUGVybWlzc2lvbkNvbnRleHQgYmFzZWQgb24gdXNlciBpbnB1dCBwcm9jZXNzaW5nIChhcyBuZWNlc3NhcnkpXG4gICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDoge1xuICAgICAgICAuLi5wcmV2LnRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICAgICAgYWx3YXlzQWxsb3dSdWxlczoge1xuICAgICAgICAgIC4uLnByZXYudG9vbFBlcm1pc3Npb25Db250ZXh0LmFsd2F5c0FsbG93UnVsZXMsXG4gICAgICAgICAgY29tbWFuZDogYWxsb3dlZFRvb2xzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSlcblxuICAgIGNvbnN0IG1haW5Mb29wTW9kZWwgPSBtb2RlbEZyb21Vc2VySW5wdXQgPz8gaW5pdGlhbE1haW5Mb29wTW9kZWxcblxuICAgIC8vIFJlY3JlYXRlIGFmdGVyIHByb2Nlc3NpbmcgdGhlIHByb21wdCB0byBwaWNrIHVwIHVwZGF0ZWQgbWVzc2FnZXMgYW5kXG4gICAgLy8gbW9kZWwgKGZyb20gc2xhc2ggY29tbWFuZHMpLlxuICAgIHByb2Nlc3NVc2VySW5wdXRDb250ZXh0ID0ge1xuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZXRNZXNzYWdlczogKCkgPT4ge30sXG4gICAgICBvbkNoYW5nZUFQSUtleTogKCkgPT4ge30sXG4gICAgICBoYW5kbGVFbGljaXRhdGlvbjogdGhpcy5jb25maWcuaGFuZGxlRWxpY2l0YXRpb24sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHRvb2xzLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICB0aGlua2luZ0NvbmZpZzogaW5pdGlhbFRoaW5raW5nQ29uZmlnLFxuICAgICAgICBtY3BDbGllbnRzLFxuICAgICAgICBtY3BSZXNvdXJjZXM6IHt9LFxuICAgICAgICBpZGVJbnN0YWxsYXRpb25TdGF0dXM6IG51bGwsXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICBjdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgICAgIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgICAgICAgdGhlbWU6IHJlc29sdmVUaGVtZVNldHRpbmcoZ2V0R2xvYmFsQ29uZmlnKCkudGhlbWUpLFxuICAgICAgICBhZ2VudERlZmluaXRpb25zOiB7IGFjdGl2ZUFnZW50czogYWdlbnRzLCBhbGxBZ2VudHM6IFtdIH0sXG4gICAgICAgIG1heEJ1ZGdldFVzZCxcbiAgICAgIH0sXG4gICAgICBnZXRBcHBTdGF0ZSxcbiAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgYWJvcnRDb250cm9sbGVyOiB0aGlzLmFib3J0Q29udHJvbGxlcixcbiAgICAgIHJlYWRGaWxlU3RhdGU6IHRoaXMucmVhZEZpbGVTdGF0ZSxcbiAgICAgIG5lc3RlZE1lbW9yeUF0dGFjaG1lbnRUcmlnZ2VyczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgICBsb2FkZWROZXN0ZWRNZW1vcnlQYXRoczogdGhpcy5sb2FkZWROZXN0ZWRNZW1vcnlQYXRocyxcbiAgICAgIGR5bmFtaWNTa2lsbERpclRyaWdnZXJzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICAgIGRpc2NvdmVyZWRTa2lsbE5hbWVzOiB0aGlzLmRpc2NvdmVyZWRTa2lsbE5hbWVzLFxuICAgICAgc2V0SW5Qcm9ncmVzc1Rvb2xVc2VJRHM6ICgpID0+IHt9LFxuICAgICAgc2V0UmVzcG9uc2VMZW5ndGg6ICgpID0+IHt9LFxuICAgICAgdXBkYXRlRmlsZUhpc3RvcnlTdGF0ZTogcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQudXBkYXRlRmlsZUhpc3RvcnlTdGF0ZSxcbiAgICAgIHVwZGF0ZUF0dHJpYnV0aW9uU3RhdGU6IHByb2Nlc3NVc2VySW5wdXRDb250ZXh0LnVwZGF0ZUF0dHJpYnV0aW9uU3RhdGUsXG4gICAgICBzZXRTREtTdGF0dXMsXG4gICAgfVxuXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2JlZm9yZV9za2lsbHNfcGx1Z2lucycpXG4gICAgLy8gQ2FjaGUtb25seTogaGVhZGxlc3MvU0RLL0NDUiBzdGFydHVwIG11c3Qgbm90IGJsb2NrIG9uIG5ldHdvcmsgZm9yXG4gICAgLy8gcmVmLXRyYWNrZWQgcGx1Z2lucy4gQ0NSIHBvcHVsYXRlcyB0aGUgY2FjaGUgdmlhIENMQVVERV9DT0RFX1NZTkNfUExVR0lOX0lOU1RBTExcbiAgICAvLyAoaGVhZGxlc3NQbHVnaW5JbnN0YWxsKSBvciBDTEFVREVfQ09ERV9QTFVHSU5fU0VFRF9ESVIgYmVmb3JlIHRoaXMgcnVucztcbiAgICAvLyBTREsgY2FsbGVycyB0aGF0IG5lZWQgZnJlc2ggc291cmNlIGNhbiBjYWxsIC9yZWxvYWQtcGx1Z2lucy5cbiAgICBjb25zdCBbc2tpbGxzLCB7IGVuYWJsZWQ6IGVuYWJsZWRQbHVnaW5zIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0U2xhc2hDb21tYW5kVG9vbFNraWxscyhnZXRDd2QoKSksXG4gICAgICBsb2FkQWxsUGx1Z2luc0NhY2hlT25seSgpLFxuICAgIF0pXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ2FmdGVyX3NraWxsc19wbHVnaW5zJylcblxuICAgIHlpZWxkIGJ1aWxkU3lzdGVtSW5pdE1lc3NhZ2Uoe1xuICAgICAgdG9vbHMsXG4gICAgICBtY3BDbGllbnRzLFxuICAgICAgbW9kZWw6IG1haW5Mb29wTW9kZWwsXG4gICAgICBwZXJtaXNzaW9uTW9kZTogaW5pdGlhbEFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dFxuICAgICAgICAubW9kZSBhcyBQZXJtaXNzaW9uTW9kZSwgLy8gVE9ETzogYXZvaWQgdGhlIGNhc3RcbiAgICAgIGNvbW1hbmRzLFxuICAgICAgYWdlbnRzLFxuICAgICAgc2tpbGxzLFxuICAgICAgcGx1Z2luczogZW5hYmxlZFBsdWdpbnMsXG4gICAgICBmYXN0TW9kZTogaW5pdGlhbEFwcFN0YXRlLmZhc3RNb2RlLFxuICAgIH0pXG5cbiAgICAvLyBSZWNvcmQgd2hlbiBzeXN0ZW0gbWVzc2FnZSBpcyB5aWVsZGVkIGZvciBoZWFkbGVzcyBsYXRlbmN5IHRyYWNraW5nXG4gICAgaGVhZGxlc3NQcm9maWxlckNoZWNrcG9pbnQoJ3N5c3RlbV9tZXNzYWdlX3lpZWxkZWQnKVxuXG4gICAgaWYgKCFzaG91bGRRdWVyeSkge1xuICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGxvY2FsIHNsYXNoIGNvbW1hbmRzLlxuICAgICAgLy8gVXNlIG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCAobm90IHJlcGxheWFibGVNZXNzYWdlcykgZm9yIGNvbW1hbmQgb3V0cHV0XG4gICAgICAvLyBiZWNhdXNlIHNlbGVjdGFibGVVc2VyTWVzc2FnZXNGaWx0ZXIgZXhjbHVkZXMgbG9jYWwtY29tbWFuZC1zdGRvdXQgdGFncy5cbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzRnJvbVVzZXJJbnB1dCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbXNnLnR5cGUgPT09ICd1c2VyJyAmJlxuICAgICAgICAgIHR5cGVvZiBtc2cubWVzc2FnZS5jb250ZW50ID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIChtc2cubWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NURE9VVF9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cubWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NUREVSUl9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cuaXNDb21wYWN0U3VtbWFyeSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAuLi5tc2cubWVzc2FnZSxcbiAgICAgICAgICAgICAgY29udGVudDogc3RyaXBBbnNpKG1zZy5tZXNzYWdlLmNvbnRlbnQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgdXVpZDogbXNnLnV1aWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG1zZy50aW1lc3RhbXAsXG4gICAgICAgICAgICBpc1JlcGxheTogIW1zZy5pc0NvbXBhY3RTdW1tYXJ5LFxuICAgICAgICAgICAgaXNTeW50aGV0aWM6IG1zZy5pc01ldGEgfHwgbXNnLmlzVmlzaWJsZUluVHJhbnNjcmlwdE9ubHksXG4gICAgICAgICAgfSBhcyBTREtVc2VyTWVzc2FnZVJlcGxheVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9jYWwgY29tbWFuZCBvdXRwdXQgXHUyMDE0IHlpZWxkIGFzIGEgc3ludGhldGljIGFzc2lzdGFudCBtZXNzYWdlIHNvXG4gICAgICAgIC8vIFJDIHJlbmRlcnMgaXQgYXMgYXNzaXN0YW50LXN0eWxlIHRleHQgcmF0aGVyIHRoYW4gYSB1c2VyIGJ1YmJsZS5cbiAgICAgICAgLy8gRW1pdHRlZCBhcyBhc3Npc3RhbnQgKG5vdCB0aGUgZGVkaWNhdGVkIFNES0xvY2FsQ29tbWFuZE91dHB1dE1lc3NhZ2VcbiAgICAgICAgLy8gc3lzdGVtIHN1YnR5cGUpIHNvIG1vYmlsZSBjbGllbnRzICsgc2Vzc2lvbi1pbmdyZXNzIGNhbiBwYXJzZSBpdC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1zZy50eXBlID09PSAnc3lzdGVtJyAmJlxuICAgICAgICAgIG1zZy5zdWJ0eXBlID09PSAnbG9jYWxfY29tbWFuZCcgJiZcbiAgICAgICAgICB0eXBlb2YgbXNnLmNvbnRlbnQgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgKG1zZy5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NURE9VVF9UQUd9PmApIHx8XG4gICAgICAgICAgICBtc2cuY29udGVudC5pbmNsdWRlcyhgPCR7TE9DQUxfQ09NTUFORF9TVERFUlJfVEFHfT5gKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWllbGQgbG9jYWxDb21tYW5kT3V0cHV0VG9TREtBc3Npc3RhbnRNZXNzYWdlKG1zZy5jb250ZW50LCBtc2cudXVpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N5c3RlbScgJiYgbXNnLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5Jykge1xuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgICAgICAgICAgc3VidHlwZTogJ2NvbXBhY3RfYm91bmRhcnknIGFzIGNvbnN0LFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB1dWlkOiBtc2cudXVpZCxcbiAgICAgICAgICAgIGNvbXBhY3RfbWV0YWRhdGE6IHRvU0RLQ29tcGFjdE1ldGFkYXRhKG1zZy5jb21wYWN0TWV0YWRhdGEpLFxuICAgICAgICAgIH0gYXMgU0RLQ29tcGFjdEJvdW5kYXJ5TWVzc2FnZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgICBhd2FpdCByZWNvcmRUcmFuc2NyaXB0KG1lc3NhZ2VzKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRUFHRVJfRkxVU0gpIHx8XG4gICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfSVNfQ09XT1JLKVxuICAgICAgICApIHtcbiAgICAgICAgICBhd2FpdCBmbHVzaFNlc3Npb25TdG9yYWdlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB5aWVsZCB7XG4gICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICBzdWJ0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIGlzX2Vycm9yOiBmYWxzZSxcbiAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgICBudW1fdHVybnM6IG1lc3NhZ2VzLmxlbmd0aCAtIDEsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0VGV4dCA/PyAnJyxcbiAgICAgICAgc3RvcF9yZWFzb246IG51bGwsXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICksXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChmaWxlSGlzdG9yeUVuYWJsZWQoKSAmJiBwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgbWVzc2FnZXNGcm9tVXNlcklucHV0XG4gICAgICAgIC5maWx0ZXIobWVzc2FnZVNlbGVjdG9yKCkuc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcilcbiAgICAgICAgLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgdm9pZCBmaWxlSGlzdG9yeU1ha2VTbmFwc2hvdChcbiAgICAgICAgICAgICh1cGRhdGVyOiAocHJldjogRmlsZUhpc3RvcnlTdGF0ZSkgPT4gRmlsZUhpc3RvcnlTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmaWxlSGlzdG9yeTogdXBkYXRlcihwcmV2LmZpbGVIaXN0b3J5KSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZS51dWlkLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBUcmFjayBjdXJyZW50IG1lc3NhZ2UgdXNhZ2UgKHJlc2V0IG9uIGVhY2ggbWVzc2FnZV9zdGFydClcbiAgICBsZXQgY3VycmVudE1lc3NhZ2VVc2FnZTogTm9uTnVsbGFibGVVc2FnZSA9IEVNUFRZX1VTQUdFXG4gICAgbGV0IHR1cm5Db3VudCA9IDFcbiAgICBsZXQgaGFzQWNrbm93bGVkZ2VkSW5pdGlhbE1lc3NhZ2VzID0gZmFsc2VcbiAgICAvLyBUcmFjayBzdHJ1Y3R1cmVkIG91dHB1dCBmcm9tIFN0cnVjdHVyZWRPdXRwdXQgdG9vbCBjYWxsc1xuICAgIGxldCBzdHJ1Y3R1cmVkT3V0cHV0RnJvbVRvb2w6IHVua25vd25cbiAgICAvLyBUcmFjayB0aGUgbGFzdCBzdG9wX3JlYXNvbiBmcm9tIGFzc2lzdGFudCBtZXNzYWdlc1xuICAgIGxldCBsYXN0U3RvcFJlYXNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICAvLyBSZWZlcmVuY2UtYmFzZWQgd2F0ZXJtYXJrIHNvIGVycm9yX2R1cmluZ19leGVjdXRpb24ncyBlcnJvcnNbXSBpc1xuICAgIC8vIHR1cm4tc2NvcGVkLiBBIGxlbmd0aC1iYXNlZCBpbmRleCBicmVha3Mgd2hlbiB0aGUgMTAwLWVudHJ5IHJpbmcgYnVmZmVyXG4gICAgLy8gc2hpZnQoKXMgZHVyaW5nIHRoZSB0dXJuIFx1MjAxNCB0aGUgaW5kZXggc2xpZGVzLiBJZiB0aGlzIGVudHJ5IGlzIHJvdGF0ZWRcbiAgICAvLyBvdXQsIGxhc3RJbmRleE9mIHJldHVybnMgLTEgYW5kIHdlIGluY2x1ZGUgZXZlcnl0aGluZyAoc2FmZSBmYWxsYmFjaykuXG4gICAgY29uc3QgZXJyb3JMb2dXYXRlcm1hcmsgPSBnZXRJbk1lbW9yeUVycm9ycygpLmF0KC0xKVxuICAgIC8vIFNuYXBzaG90IGNvdW50IGJlZm9yZSB0aGlzIHF1ZXJ5IGZvciBkZWx0YS1iYXNlZCByZXRyeSBsaW1pdGluZ1xuICAgIGNvbnN0IGluaXRpYWxTdHJ1Y3R1cmVkT3V0cHV0Q2FsbHMgPSBqc29uU2NoZW1hXG4gICAgICA/IGNvdW50VG9vbENhbGxzKHRoaXMubXV0YWJsZU1lc3NhZ2VzLCBTWU5USEVUSUNfT1VUUFVUX1RPT0xfTkFNRSlcbiAgICAgIDogMFxuXG4gICAgZm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIHF1ZXJ5KHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgc3lzdGVtUHJvbXB0LFxuICAgICAgdXNlckNvbnRleHQsXG4gICAgICBzeXN0ZW1Db250ZXh0LFxuICAgICAgY2FuVXNlVG9vbDogd3JhcHBlZENhblVzZVRvb2wsXG4gICAgICB0b29sVXNlQ29udGV4dDogcHJvY2Vzc1VzZXJJbnB1dENvbnRleHQsXG4gICAgICBmYWxsYmFja01vZGVsLFxuICAgICAgcXVlcnlTb3VyY2U6ICdzZGsnLFxuICAgICAgbWF4VHVybnMsXG4gICAgICB0YXNrQnVkZ2V0LFxuICAgIH0pKSB7XG4gICAgICAvLyBSZWNvcmQgYXNzaXN0YW50LCB1c2VyLCBhbmQgY29tcGFjdCBib3VuZGFyeSBtZXNzYWdlc1xuICAgICAgaWYgKFxuICAgICAgICBtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnIHx8XG4gICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gJ3VzZXInIHx8XG4gICAgICAgIChtZXNzYWdlLnR5cGUgPT09ICdzeXN0ZW0nICYmIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ2NvbXBhY3RfYm91bmRhcnknKVxuICAgICAgKSB7XG4gICAgICAgIC8vIEJlZm9yZSB3cml0aW5nIGEgY29tcGFjdCBib3VuZGFyeSwgZmx1c2ggYW55IGluLW1lbW9yeS1vbmx5XG4gICAgICAgIC8vIG1lc3NhZ2VzIHVwIHRocm91Z2ggdGhlIHByZXNlcnZlZFNlZ21lbnQgdGFpbC4gQXR0YWNobWVudHMgYW5kXG4gICAgICAgIC8vIHByb2dyZXNzIGFyZSBub3cgcmVjb3JkZWQgaW5saW5lICh0aGVpciBzd2l0Y2ggY2FzZXMgYmVsb3cpLCBidXRcbiAgICAgICAgLy8gdGhpcyBmbHVzaCBzdGlsbCBtYXR0ZXJzIGZvciB0aGUgcHJlc2VydmVkU2VnbWVudCB0YWlsIHdhbGsuXG4gICAgICAgIC8vIElmIHRoZSBTREsgc3VicHJvY2VzcyByZXN0YXJ0cyBiZWZvcmUgdGhlbiAoY2xhdWRlLWRlc2t0b3Aga2lsbHNcbiAgICAgICAgLy8gYmV0d2VlbiB0dXJucyksIHRhaWxVdWlkIHBvaW50cyB0byBhIG5ldmVyLXdyaXR0ZW4gbWVzc2FnZSBcdTIxOTJcbiAgICAgICAgLy8gYXBwbHlQcmVzZXJ2ZWRTZWdtZW50UmVsaW5rcyBmYWlscyBpdHMgdGFpbFx1MjE5MmhlYWQgd2FsayBcdTIxOTIgcmV0dXJuc1xuICAgICAgICAvLyB3aXRob3V0IHBydW5pbmcgXHUyMTkyIHJlc3VtZSBsb2FkcyBmdWxsIHByZS1jb21wYWN0IGhpc3RvcnkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwZXJzaXN0U2Vzc2lvbiAmJlxuICAgICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gJ3N5c3RlbScgJiZcbiAgICAgICAgICBtZXNzYWdlLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5J1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB0YWlsVXVpZCA9IG1lc3NhZ2UuY29tcGFjdE1ldGFkYXRhPy5wcmVzZXJ2ZWRTZWdtZW50Py50YWlsVXVpZFxuICAgICAgICAgIGlmICh0YWlsVXVpZCkge1xuICAgICAgICAgICAgY29uc3QgdGFpbElkeCA9IHRoaXMubXV0YWJsZU1lc3NhZ2VzLmZpbmRMYXN0SW5kZXgoXG4gICAgICAgICAgICAgIG0gPT4gbS51dWlkID09PSB0YWlsVXVpZCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmICh0YWlsSWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICBhd2FpdCByZWNvcmRUcmFuc2NyaXB0KHRoaXMubXV0YWJsZU1lc3NhZ2VzLnNsaWNlKDAsIHRhaWxJZHggKyAxKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAvLyBGaXJlLWFuZC1mb3JnZXQgZm9yIGFzc2lzdGFudCBtZXNzYWdlcy4gY2xhdWRlLnRzIHlpZWxkcyBvbmVcbiAgICAgICAgICAvLyBhc3Npc3RhbnQgbWVzc2FnZSBwZXIgY29udGVudCBibG9jaywgdGhlbiBtdXRhdGVzIHRoZSBsYXN0XG4gICAgICAgICAgLy8gb25lJ3MgbWVzc2FnZS51c2FnZS9zdG9wX3JlYXNvbiBvbiBtZXNzYWdlX2RlbHRhIFx1MjAxNCByZWx5aW5nIG9uXG4gICAgICAgICAgLy8gdGhlIHdyaXRlIHF1ZXVlJ3MgMTAwbXMgbGF6eSBqc29uU3RyaW5naWZ5LiBBd2FpdGluZyBoZXJlXG4gICAgICAgICAgLy8gYmxvY2tzIGFzaygpJ3MgZ2VuZXJhdG9yLCBzbyBtZXNzYWdlX2RlbHRhIGNhbid0IHJ1biB1bnRpbFxuICAgICAgICAgIC8vIGV2ZXJ5IGJsb2NrIGlzIGNvbnN1bWVkOyB0aGUgZHJhaW4gdGltZXIgKHN0YXJ0ZWQgYXQgYmxvY2sgMSlcbiAgICAgICAgICAvLyBlbGFwc2VzIGZpcnN0LiBJbnRlcmFjdGl2ZSBDQyBkb2Vzbid0IGhpdCB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAvLyB1c2VMb2dNZXNzYWdlcy50cyBmaXJlLWFuZC1mb3JnZXRzLiBlbnF1ZXVlV3JpdGUgaXNcbiAgICAgICAgICAvLyBvcmRlci1wcmVzZXJ2aW5nIHNvIGZpcmUtYW5kLWZvcmdldCBoZXJlIGlzIHNhZmUuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY2tub3dsZWRnZSBpbml0aWFsIHVzZXIgbWVzc2FnZXMgYWZ0ZXIgZmlyc3QgdHJhbnNjcmlwdCByZWNvcmRpbmdcbiAgICAgICAgaWYgKCFoYXNBY2tub3dsZWRnZWRJbml0aWFsTWVzc2FnZXMgJiYgbWVzc2FnZXNUb0Fjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGFzQWNrbm93bGVkZ2VkSW5pdGlhbE1lc3NhZ2VzID0gdHJ1ZVxuICAgICAgICAgIGZvciAoY29uc3QgbXNnVG9BY2sgb2YgbWVzc2FnZXNUb0Fjaykge1xuICAgICAgICAgICAgaWYgKG1zZ1RvQWNrLnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1RvQWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIHV1aWQ6IG1zZ1RvQWNrLnV1aWQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtc2dUb0Fjay50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgICAgICAgIH0gYXMgU0RLVXNlck1lc3NhZ2VSZXBsYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICAgIHR1cm5Db3VudCsrXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RvbWJzdG9uZSc6XG4gICAgICAgICAgLy8gVG9tYnN0b25lIG1lc3NhZ2VzIGFyZSBjb250cm9sIHNpZ25hbHMgZm9yIHJlbW92aW5nIG1lc3NhZ2VzLCBza2lwIHRoZW1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhc3Npc3RhbnQnOlxuICAgICAgICAgIC8vIENhcHR1cmUgc3RvcF9yZWFzb24gaWYgYWxyZWFkeSBzZXQgKHN5bnRoZXRpYyBtZXNzYWdlcykuIEZvclxuICAgICAgICAgIC8vIHN0cmVhbWVkIHJlc3BvbnNlcywgdGhpcyBpcyBudWxsIGF0IGNvbnRlbnRfYmxvY2tfc3RvcCB0aW1lO1xuICAgICAgICAgIC8vIHRoZSByZWFsIHZhbHVlIGFycml2ZXMgdmlhIG1lc3NhZ2VfZGVsdGEgKGhhbmRsZWQgYmVsb3cpLlxuICAgICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2Uuc3RvcF9yZWFzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgbGFzdFN0b3BSZWFzb24gPSBtZXNzYWdlLm1lc3NhZ2Uuc3RvcF9yZWFzb25cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgIHlpZWxkKiBub3JtYWxpemVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAvLyBSZWNvcmQgaW5saW5lIHNvIHRoZSBkZWR1cCBsb29wIGluIHRoZSBuZXh0IGFzaygpIGNhbGwgc2VlcyBpdFxuICAgICAgICAgIC8vIGFzIGFscmVhZHktcmVjb3JkZWQuIFdpdGhvdXQgdGhpcywgZGVmZXJyZWQgcHJvZ3Jlc3MgaW50ZXJsZWF2ZXNcbiAgICAgICAgICAvLyB3aXRoIGFscmVhZHktcmVjb3JkZWQgdG9vbF9yZXN1bHRzIGluIG11dGFibGVNZXNzYWdlcywgYW5kIHRoZVxuICAgICAgICAgIC8vIGRlZHVwIHdhbGsgZnJlZXplcyBzdGFydGluZ1BhcmVudFV1aWQgYXQgdGhlIHdyb25nIG1lc3NhZ2UgXHUyMDE0XG4gICAgICAgICAgLy8gZm9ya2luZyB0aGUgY2hhaW4gYW5kIG9ycGhhbmluZyB0aGUgY29udmVyc2F0aW9uIG9uIHJlc3VtZS5cbiAgICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG4gICAgICAgICAgeWllbGQqIG5vcm1hbGl6ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG4gICAgICAgICAgeWllbGQqIG5vcm1hbGl6ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzdHJlYW1fZXZlbnQnOlxuICAgICAgICAgIGlmIChtZXNzYWdlLmV2ZW50LnR5cGUgPT09ICdtZXNzYWdlX3N0YXJ0Jykge1xuICAgICAgICAgICAgLy8gUmVzZXQgY3VycmVudCBtZXNzYWdlIHVzYWdlIGZvciBuZXcgbWVzc2FnZVxuICAgICAgICAgICAgY3VycmVudE1lc3NhZ2VVc2FnZSA9IEVNUFRZX1VTQUdFXG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZVVzYWdlID0gdXBkYXRlVXNhZ2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQubWVzc2FnZS51c2FnZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQudHlwZSA9PT0gJ21lc3NhZ2VfZGVsdGEnKSB7XG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZVVzYWdlID0gdXBkYXRlVXNhZ2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQudXNhZ2UsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHN0b3BfcmVhc29uIGZyb20gbWVzc2FnZV9kZWx0YS4gVGhlIGFzc2lzdGFudCBtZXNzYWdlXG4gICAgICAgICAgICAvLyBpcyB5aWVsZGVkIGF0IGNvbnRlbnRfYmxvY2tfc3RvcCB3aXRoIHN0b3BfcmVhc29uPW51bGw7IHRoZVxuICAgICAgICAgICAgLy8gcmVhbCB2YWx1ZSBvbmx5IGFycml2ZXMgaGVyZSAoc2VlIGNsYXVkZS50cyBtZXNzYWdlX2RlbHRhXG4gICAgICAgICAgICAvLyBoYW5kbGVyKS4gV2l0aG91dCB0aGlzLCByZXN1bHQuc3RvcF9yZWFzb24gaXMgYWx3YXlzIG51bGwuXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5ldmVudC5kZWx0YS5zdG9wX3JlYXNvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGxhc3RTdG9wUmVhc29uID0gbWVzc2FnZS5ldmVudC5kZWx0YS5zdG9wX3JlYXNvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVzc2FnZS5ldmVudC50eXBlID09PSAnbWVzc2FnZV9zdG9wJykge1xuICAgICAgICAgICAgLy8gQWNjdW11bGF0ZSBjdXJyZW50IG1lc3NhZ2UgdXNhZ2UgaW50byB0b3RhbFxuICAgICAgICAgICAgdGhpcy50b3RhbFVzYWdlID0gYWNjdW11bGF0ZVVzYWdlKFxuICAgICAgICAgICAgICB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVXNhZ2UsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmVhbV9ldmVudCcgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50LFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgICAgICAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXR0YWNobWVudCc6XG4gICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgICAgICAgIC8vIFJlY29yZCBpbmxpbmUgKHNhbWUgcmVhc29uIGFzIHByb2dyZXNzIGFib3ZlKS5cbiAgICAgICAgICBpZiAocGVyc2lzdFNlc3Npb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgICAgICAgIHZvaWQgcmVjb3JkVHJhbnNjcmlwdChtZXNzYWdlcylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IHN0cnVjdHVyZWQgb3V0cHV0IGZyb20gU3RydWN0dXJlZE91dHB1dCB0b29sIGNhbGxzXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuYXR0YWNobWVudC50eXBlID09PSAnc3RydWN0dXJlZF9vdXRwdXQnKSB7XG4gICAgICAgICAgICBzdHJ1Y3R1cmVkT3V0cHV0RnJvbVRvb2wgPSBtZXNzYWdlLmF0dGFjaG1lbnQuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIYW5kbGUgbWF4IHR1cm5zIHJlYWNoZWQgc2lnbmFsIGZyb20gcXVlcnkudHNcbiAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmF0dGFjaG1lbnQudHlwZSA9PT0gJ21heF90dXJuc19yZWFjaGVkJykge1xuICAgICAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FQUdFUl9GTFVTSCkgfHxcbiAgICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGZsdXNoU2Vzc2lvblN0b3JhZ2UoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfbWF4X3R1cm5zJyxcbiAgICAgICAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgICAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgICAgICAgICBpc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgbnVtX3R1cm5zOiBtZXNzYWdlLmF0dGFjaG1lbnQudHVybkNvdW50LFxuICAgICAgICAgICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICAgICAgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgdHVybnMgKCR7bWVzc2FnZS5hdHRhY2htZW50Lm1heFR1cm5zfSlgLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFlpZWxkIHF1ZXVlZF9jb21tYW5kIGF0dGFjaG1lbnRzIGFzIFNESyB1c2VyIG1lc3NhZ2UgcmVwbGF5c1xuICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgcmVwbGF5VXNlck1lc3NhZ2VzICYmXG4gICAgICAgICAgICBtZXNzYWdlLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICByb2xlOiAndXNlcicgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZS5hdHRhY2htZW50LnByb21wdCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgdXVpZDogbWVzc2FnZS5hdHRhY2htZW50LnNvdXJjZV91dWlkIHx8IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBtZXNzYWdlLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgaXNSZXBsYXk6IHRydWUsXG4gICAgICAgICAgICB9IGFzIFNES1VzZXJNZXNzYWdlUmVwbGF5XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N0cmVhbV9yZXF1ZXN0X3N0YXJ0JzpcbiAgICAgICAgICAvLyBEb24ndCB5aWVsZCBzdHJlYW0gcmVxdWVzdCBzdGFydCBtZXNzYWdlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N5c3RlbSc6IHtcbiAgICAgICAgICAvLyBTbmlwIGJvdW5kYXJ5OiByZXBsYXkgb24gb3VyIHN0b3JlIHRvIHJlbW92ZSB6b21iaWUgbWVzc2FnZXMgYW5kXG4gICAgICAgICAgLy8gc3RhbGUgbWFya2Vycy4gVGhlIHlpZWxkZWQgYm91bmRhcnkgaXMgYSBzaWduYWwsIG5vdCBkYXRhIHRvIHB1c2ggXHUyMDE0XG4gICAgICAgICAgLy8gdGhlIHJlcGxheSBwcm9kdWNlcyBpdHMgb3duIGVxdWl2YWxlbnQgYm91bmRhcnkuIFdpdGhvdXQgdGhpcyxcbiAgICAgICAgICAvLyBtYXJrZXJzIHBlcnNpc3QgYW5kIHJlLXRyaWdnZXIgb24gZXZlcnkgdHVybiwgYW5kIG11dGFibGVNZXNzYWdlc1xuICAgICAgICAgIC8vIG5ldmVyIHNocmlua3MgKG1lbW9yeSBsZWFrIGluIGxvbmcgU0RLIHNlc3Npb25zKS4gVGhlIHN1YnR5cGVcbiAgICAgICAgICAvLyBjaGVjayBsaXZlcyBpbnNpZGUgdGhlIGluamVjdGVkIGNhbGxiYWNrIHNvIGZlYXR1cmUtZ2F0ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0YXkgb3V0IG9mIHRoaXMgZmlsZSAoZXhjbHVkZWQtc3RyaW5ncyBjaGVjaykuXG4gICAgICAgICAgY29uc3Qgc25pcFJlc3VsdCA9IHRoaXMuY29uZmlnLnNuaXBSZXBsYXk/LihcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcyxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHNuaXBSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHNuaXBSZXN1bHQuZXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMubGVuZ3RoID0gMFxuICAgICAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKC4uLnNuaXBSZXN1bHQubWVzc2FnZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm11dGFibGVNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXG4gICAgICAgICAgLy8gWWllbGQgY29tcGFjdCBib3VuZGFyeSBtZXNzYWdlcyB0byBTREtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5JyAmJlxuICAgICAgICAgICAgbWVzc2FnZS5jb21wYWN0TWV0YWRhdGFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgcHJlLWNvbXBhY3Rpb24gbWVzc2FnZXMgZm9yIEdDLiBUaGUgYm91bmRhcnkgd2FzIGp1c3RcbiAgICAgICAgICAgIC8vIHB1c2hlZCBzbyBpdCdzIHRoZSBsYXN0IGVsZW1lbnQuIHF1ZXJ5LnRzIGFscmVhZHkgdXNlc1xuICAgICAgICAgICAgLy8gZ2V0TWVzc2FnZXNBZnRlckNvbXBhY3RCb3VuZGFyeSgpIGludGVybmFsbHksIHNvIG9ubHlcbiAgICAgICAgICAgIC8vIHBvc3QtYm91bmRhcnkgbWVzc2FnZXMgYXJlIG5lZWRlZCBnb2luZyBmb3J3YXJkLlxuICAgICAgICAgICAgY29uc3QgbXV0YWJsZUJvdW5kYXJ5SWR4ID0gdGhpcy5tdXRhYmxlTWVzc2FnZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgaWYgKG11dGFibGVCb3VuZGFyeUlkeCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5tdXRhYmxlTWVzc2FnZXMuc3BsaWNlKDAsIG11dGFibGVCb3VuZGFyeUlkeClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQm91bmRhcnlJZHggPSBtZXNzYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICBpZiAobG9jYWxCb3VuZGFyeUlkeCA+IDApIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKDAsIGxvY2FsQm91bmRhcnlJZHgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdjb21wYWN0X2JvdW5kYXJ5JyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgICAgY29tcGFjdF9tZXRhZGF0YTogdG9TREtDb21wYWN0TWV0YWRhdGEobWVzc2FnZS5jb21wYWN0TWV0YWRhdGEpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVzc2FnZS5zdWJ0eXBlID09PSAnYXBpX2Vycm9yJykge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2FwaV9yZXRyeScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGF0dGVtcHQ6IG1lc3NhZ2UucmV0cnlBdHRlbXB0LFxuICAgICAgICAgICAgICBtYXhfcmV0cmllczogbWVzc2FnZS5tYXhSZXRyaWVzLFxuICAgICAgICAgICAgICByZXRyeV9kZWxheV9tczogbWVzc2FnZS5yZXRyeUluTXMsXG4gICAgICAgICAgICAgIGVycm9yX3N0YXR1czogbWVzc2FnZS5lcnJvci5zdGF0dXMgPz8gbnVsbCxcbiAgICAgICAgICAgICAgZXJyb3I6IGNhdGVnb3JpemVSZXRyeWFibGVBUElFcnJvcihtZXNzYWdlLmVycm9yKSxcbiAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRG9uJ3QgeWllbGQgb3RoZXIgc3lzdGVtIG1lc3NhZ2VzIGluIGhlYWRsZXNzIG1vZGVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3Rvb2xfdXNlX3N1bW1hcnknOlxuICAgICAgICAgIC8vIFlpZWxkIHRvb2wgdXNlIHN1bW1hcnkgbWVzc2FnZXMgdG8gU0RLXG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgdHlwZTogJ3Rvb2xfdXNlX3N1bW1hcnknIGFzIGNvbnN0LFxuICAgICAgICAgICAgc3VtbWFyeTogbWVzc2FnZS5zdW1tYXJ5LFxuICAgICAgICAgICAgcHJlY2VkaW5nX3Rvb2xfdXNlX2lkczogbWVzc2FnZS5wcmVjZWRpbmdUb29sVXNlSWRzLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIFVTRCBidWRnZXQgaGFzIGJlZW4gZXhjZWVkZWRcbiAgICAgIGlmIChtYXhCdWRnZXRVc2QgIT09IHVuZGVmaW5lZCAmJiBnZXRUb3RhbENvc3QoKSA+PSBtYXhCdWRnZXRVc2QpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRUFHRVJfRkxVU0gpIHx8XG4gICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBhd2FpdCBmbHVzaFNlc3Npb25TdG9yYWdlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQge1xuICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgIHN1YnR5cGU6ICdlcnJvcl9tYXhfYnVkZ2V0X3VzZCcsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgICAgZHVyYXRpb25fYXBpX21zOiBnZXRUb3RhbEFQSUR1cmF0aW9uKCksXG4gICAgICAgICAgaXNfZXJyb3I6IHRydWUsXG4gICAgICAgICAgbnVtX3R1cm5zOiB0dXJuQ291bnQsXG4gICAgICAgICAgc3RvcF9yZWFzb246IGxhc3RTdG9wUmVhc29uLFxuICAgICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICAgIHRvdGFsX2Nvc3RfdXNkOiBnZXRUb3RhbENvc3QoKSxcbiAgICAgICAgICB1c2FnZTogdGhpcy50b3RhbFVzYWdlLFxuICAgICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgICBwZXJtaXNzaW9uX2RlbmlhbHM6IHRoaXMucGVybWlzc2lvbkRlbmlhbHMsXG4gICAgICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICAgIGluaXRpYWxBcHBTdGF0ZS5mYXN0TW9kZSxcbiAgICAgICAgICApLFxuICAgICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICBlcnJvcnM6IFtgUmVhY2hlZCBtYXhpbXVtIGJ1ZGdldCAoJCR7bWF4QnVkZ2V0VXNkfSlgXSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgc3RydWN0dXJlZCBvdXRwdXQgcmV0cnkgbGltaXQgZXhjZWVkZWQgKG9ubHkgb24gdXNlciBtZXNzYWdlcylcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICd1c2VyJyAmJiBqc29uU2NoZW1hKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYWxscyA9IGNvdW50VG9vbENhbGxzKFxuICAgICAgICAgIHRoaXMubXV0YWJsZU1lc3NhZ2VzLFxuICAgICAgICAgIFNZTlRIRVRJQ19PVVRQVVRfVE9PTF9OQU1FLFxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGNhbGxzVGhpc1F1ZXJ5ID0gY3VycmVudENhbGxzIC0gaW5pdGlhbFN0cnVjdHVyZWRPdXRwdXRDYWxsc1xuICAgICAgICBjb25zdCBtYXhSZXRyaWVzID0gcGFyc2VJbnQoXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTUFYX1NUUlVDVFVSRURfT1VUUFVUX1JFVFJJRVMgfHwgJzMnLFxuICAgICAgICAgIDEwLFxuICAgICAgICApXG4gICAgICAgIGlmIChjYWxsc1RoaXNRdWVyeSA+PSBtYXhSZXRyaWVzKSB7XG4gICAgICAgICAgaWYgKHBlcnNpc3RTZXNzaW9uKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VBR0VSX0ZMVVNIKSB8fFxuICAgICAgICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9JU19DT1dPUkspXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYXdhaXQgZmx1c2hTZXNzaW9uU3RvcmFnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgICAgc3VidHlwZTogJ2Vycm9yX21heF9zdHJ1Y3R1cmVkX291dHB1dF9yZXRyaWVzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICAgICAgZHVyYXRpb25fYXBpX21zOiBnZXRUb3RhbEFQSUR1cmF0aW9uKCksXG4gICAgICAgICAgICBpc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIG51bV90dXJuczogdHVybkNvdW50LFxuICAgICAgICAgICAgc3RvcF9yZWFzb246IGxhc3RTdG9wUmVhc29uLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgICAgICB1c2FnZTogdGhpcy50b3RhbFVzYWdlLFxuICAgICAgICAgICAgbW9kZWxVc2FnZTogZ2V0TW9kZWxVc2FnZSgpLFxuICAgICAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gcHJvdmlkZSB2YWxpZCBzdHJ1Y3R1cmVkIG91dHB1dCBhZnRlciAke21heFJldHJpZXN9IGF0dGVtcHRzYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcCBob29rcyB5aWVsZCBwcm9ncmVzcy9hdHRhY2htZW50IG1lc3NhZ2VzIEFGVEVSIHRoZSBhc3Npc3RhbnRcbiAgICAvLyByZXNwb25zZSAodmlhIHlpZWxkKiBoYW5kbGVTdG9wSG9va3MgaW4gcXVlcnkudHMpLiBTaW5jZSAjMjM1MzcgcHVzaGVzXG4gICAgLy8gdGhvc2UgdG8gYG1lc3NhZ2VzYCBpbmxpbmUsIGxhc3QobWVzc2FnZXMpIGNhbiBiZSBhIHByb2dyZXNzL2F0dGFjaG1lbnRcbiAgICAvLyBpbnN0ZWFkIG9mIHRoZSBhc3Npc3RhbnQgXHUyMDE0IHdoaWNoIG1ha2VzIHRleHRSZXN1bHQgZXh0cmFjdGlvbiBiZWxvd1xuICAgIC8vIHJldHVybiAnJyBhbmQgLXAgbW9kZSBlbWl0IGEgYmxhbmsgbGluZS4gQWxsb3dsaXN0IHRvIGFzc2lzdGFudHx1c2VyOlxuICAgIC8vIGlzUmVzdWx0U3VjY2Vzc2Z1bCBoYW5kbGVzIGJvdGggKHVzZXIgd2l0aCBhbGwgdG9vbF9yZXN1bHQgYmxvY2tzIGlzIGFcbiAgICAvLyB2YWxpZCBzdWNjZXNzZnVsIHRlcm1pbmFsIHN0YXRlKS5cbiAgICBjb25zdCByZXN1bHQgPSBtZXNzYWdlcy5maW5kTGFzdChcbiAgICAgIG0gPT4gbS50eXBlID09PSAnYXNzaXN0YW50JyB8fCBtLnR5cGUgPT09ICd1c2VyJyxcbiAgICApXG4gICAgLy8gQ2FwdHVyZSBmb3IgdGhlIGVycm9yX2R1cmluZ19leGVjdXRpb24gZGlhZ25vc3RpYyBcdTIwMTQgaXNSZXN1bHRTdWNjZXNzZnVsXG4gICAgLy8gaXMgYSB0eXBlIHByZWRpY2F0ZSAobWVzc2FnZSBpcyBNZXNzYWdlKSwgc28gaW5zaWRlIHRoZSBmYWxzZSBicmFuY2hcbiAgICAvLyBgcmVzdWx0YCBuYXJyb3dzIHRvIG5ldmVyIGFuZCB0aGVzZSBhY2Nlc3NlcyBkb24ndCB0eXBlY2hlY2suXG4gICAgY29uc3QgZWRlUmVzdWx0VHlwZSA9IHJlc3VsdD8udHlwZSA/PyAndW5kZWZpbmVkJ1xuICAgIGNvbnN0IGVkZUxhc3RDb250ZW50VHlwZSA9XG4gICAgICByZXN1bHQ/LnR5cGUgPT09ICdhc3Npc3RhbnQnXG4gICAgICAgID8gKGxhc3QocmVzdWx0Lm1lc3NhZ2UuY29udGVudCk/LnR5cGUgPz8gJ25vbmUnKVxuICAgICAgICA6ICduL2EnXG5cbiAgICAvLyBGbHVzaCBidWZmZXJlZCB0cmFuc2NyaXB0IHdyaXRlcyBiZWZvcmUgeWllbGRpbmcgcmVzdWx0LlxuICAgIC8vIFRoZSBkZXNrdG9wIGFwcCBraWxscyB0aGUgQ0xJIHByb2Nlc3MgaW1tZWRpYXRlbHkgYWZ0ZXIgcmVjZWl2aW5nIHRoZVxuICAgIC8vIHJlc3VsdCBtZXNzYWdlLCBzbyBhbnkgdW5mbHVzaGVkIHdyaXRlcyB3b3VsZCBiZSBsb3N0LlxuICAgIGlmIChwZXJzaXN0U2Vzc2lvbikge1xuICAgICAgaWYgKFxuICAgICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FQUdFUl9GTFVTSCkgfHxcbiAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfSVNfQ09XT1JLKVxuICAgICAgKSB7XG4gICAgICAgIGF3YWl0IGZsdXNoU2Vzc2lvblN0b3JhZ2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNSZXN1bHRTdWNjZXNzZnVsKHJlc3VsdCwgbGFzdFN0b3BSZWFzb24pKSB7XG4gICAgICB5aWVsZCB7XG4gICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICBzdWJ0eXBlOiAnZXJyb3JfZHVyaW5nX2V4ZWN1dGlvbicsXG4gICAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICBkdXJhdGlvbl9hcGlfbXM6IGdldFRvdGFsQVBJRHVyYXRpb24oKSxcbiAgICAgICAgaXNfZXJyb3I6IHRydWUsXG4gICAgICAgIG51bV90dXJuczogdHVybkNvdW50LFxuICAgICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgICB0b3RhbF9jb3N0X3VzZDogZ2V0VG90YWxDb3N0KCksXG4gICAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICAgIG1vZGVsVXNhZ2U6IGdldE1vZGVsVXNhZ2UoKSxcbiAgICAgICAgcGVybWlzc2lvbl9kZW5pYWxzOiB0aGlzLnBlcm1pc3Npb25EZW5pYWxzLFxuICAgICAgICBmYXN0X21vZGVfc3RhdGU6IGdldEZhc3RNb2RlU3RhdGUoXG4gICAgICAgICAgbWFpbkxvb3BNb2RlbCxcbiAgICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICAgICksXG4gICAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgLy8gRGlhZ25vc3RpYyBwcmVmaXg6IHRoZXNlIGFyZSB3aGF0IGlzUmVzdWx0U3VjY2Vzc2Z1bCgpIGNoZWNrcyBcdTIwMTQgaWZcbiAgICAgICAgLy8gdGhlIHJlc3VsdCB0eXBlIGlzbid0IGFzc2lzdGFudC13aXRoLXRleHQvdGhpbmtpbmcgb3IgdXNlci13aXRoLVxuICAgICAgICAvLyB0b29sX3Jlc3VsdCwgYW5kIHN0b3BfcmVhc29uIGlzbid0IGVuZF90dXJuLCB0aGF0J3Mgd2h5IHRoaXMgZmlyZWQuXG4gICAgICAgIC8vIGVycm9yc1tdIGlzIHR1cm4tc2NvcGVkIHZpYSB0aGUgd2F0ZXJtYXJrOyBwcmV2aW91c2x5IGl0IGR1bXBlZCB0aGVcbiAgICAgICAgLy8gZW50aXJlIHByb2Nlc3MncyBsb2dFcnJvciBidWZmZXIgKHJpcGdyZXAgdGltZW91dHMsIEVOT0VOVCwgZXRjKS5cbiAgICAgICAgZXJyb3JzOiAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFsbCA9IGdldEluTWVtb3J5RXJyb3JzKClcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGVycm9yTG9nV2F0ZXJtYXJrXG4gICAgICAgICAgICA/IGFsbC5sYXN0SW5kZXhPZihlcnJvckxvZ1dhdGVybWFyaykgKyAxXG4gICAgICAgICAgICA6IDBcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYFtlZGVfZGlhZ25vc3RpY10gcmVzdWx0X3R5cGU9JHtlZGVSZXN1bHRUeXBlfSBsYXN0X2NvbnRlbnRfdHlwZT0ke2VkZUxhc3RDb250ZW50VHlwZX0gc3RvcF9yZWFzb249JHtsYXN0U3RvcFJlYXNvbn1gLFxuICAgICAgICAgICAgLi4uYWxsLnNsaWNlKHN0YXJ0KS5tYXAoXyA9PiBfLmVycm9yKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0pKCksXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IHRoZSB0ZXh0IHJlc3VsdCBiYXNlZCBvbiBtZXNzYWdlIHR5cGVcbiAgICBsZXQgdGV4dFJlc3VsdCA9ICcnXG4gICAgbGV0IGlzQXBpRXJyb3IgPSBmYWxzZVxuXG4gICAgaWYgKHJlc3VsdC50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY29uc3QgbGFzdENvbnRlbnQgPSBsYXN0KHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQpXG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RDb250ZW50Py50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgIVNZTlRIRVRJQ19NRVNTQUdFUy5oYXMobGFzdENvbnRlbnQudGV4dClcbiAgICAgICkge1xuICAgICAgICB0ZXh0UmVzdWx0ID0gbGFzdENvbnRlbnQudGV4dFxuICAgICAgfVxuICAgICAgaXNBcGlFcnJvciA9IEJvb2xlYW4ocmVzdWx0LmlzQXBpRXJyb3JNZXNzYWdlKVxuICAgIH1cblxuICAgIHlpZWxkIHtcbiAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgc3VidHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgaXNfZXJyb3I6IGlzQXBpRXJyb3IsXG4gICAgICBkdXJhdGlvbl9tczogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICAgIGR1cmF0aW9uX2FwaV9tczogZ2V0VG90YWxBUElEdXJhdGlvbigpLFxuICAgICAgbnVtX3R1cm5zOiB0dXJuQ291bnQsXG4gICAgICByZXN1bHQ6IHRleHRSZXN1bHQsXG4gICAgICBzdG9wX3JlYXNvbjogbGFzdFN0b3BSZWFzb24sXG4gICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgIHRvdGFsX2Nvc3RfdXNkOiBnZXRUb3RhbENvc3QoKSxcbiAgICAgIHVzYWdlOiB0aGlzLnRvdGFsVXNhZ2UsXG4gICAgICBtb2RlbFVzYWdlOiBnZXRNb2RlbFVzYWdlKCksXG4gICAgICBwZXJtaXNzaW9uX2RlbmlhbHM6IHRoaXMucGVybWlzc2lvbkRlbmlhbHMsXG4gICAgICBzdHJ1Y3R1cmVkX291dHB1dDogc3RydWN0dXJlZE91dHB1dEZyb21Ub29sLFxuICAgICAgZmFzdF9tb2RlX3N0YXRlOiBnZXRGYXN0TW9kZVN0YXRlKFxuICAgICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgICBpbml0aWFsQXBwU3RhdGUuZmFzdE1vZGUsXG4gICAgICApLFxuICAgICAgdXVpZDogcmFuZG9tVVVJRCgpLFxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gIH1cblxuICBnZXRNZXNzYWdlcygpOiByZWFkb25seSBNZXNzYWdlW10ge1xuICAgIHJldHVybiB0aGlzLm11dGFibGVNZXNzYWdlc1xuICB9XG5cbiAgZ2V0UmVhZEZpbGVTdGF0ZSgpOiBGaWxlU3RhdGVDYWNoZSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGVTdGF0ZVxuICB9XG5cbiAgZ2V0U2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldFNlc3Npb25JZCgpXG4gIH1cblxuICBzZXRNb2RlbChtb2RlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcudXNlclNwZWNpZmllZE1vZGVsID0gbW9kZWxcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIGEgc2luZ2xlIHByb21wdCB0byB0aGUgQ2xhdWRlIEFQSSBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKiBBc3N1bWVzIHRoYXQgY2xhdWRlIGlzIGJlaW5nIHVzZWQgbm9uLWludGVyYWN0aXZlbHkgLS0gd2lsbCBub3RcbiAqIGFzayB0aGUgdXNlciBmb3IgcGVybWlzc2lvbnMgb3IgZnVydGhlciBpbnB1dC5cbiAqXG4gKiBDb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCBRdWVyeUVuZ2luZSBmb3Igb25lLXNob3QgdXNhZ2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogYXNrKHtcbiAgY29tbWFuZHMsXG4gIHByb21wdCxcbiAgcHJvbXB0VXVpZCxcbiAgaXNNZXRhLFxuICBjd2QsXG4gIHRvb2xzLFxuICBtY3BDbGllbnRzLFxuICB2ZXJib3NlID0gZmFsc2UsXG4gIHRoaW5raW5nQ29uZmlnLFxuICBtYXhUdXJucyxcbiAgbWF4QnVkZ2V0VXNkLFxuICB0YXNrQnVkZ2V0LFxuICBjYW5Vc2VUb29sLFxuICBtdXRhYmxlTWVzc2FnZXMgPSBbXSxcbiAgZ2V0UmVhZEZpbGVDYWNoZSxcbiAgc2V0UmVhZEZpbGVDYWNoZSxcbiAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gIHVzZXJTcGVjaWZpZWRNb2RlbCxcbiAgZmFsbGJhY2tNb2RlbCxcbiAganNvblNjaGVtYSxcbiAgZ2V0QXBwU3RhdGUsXG4gIHNldEFwcFN0YXRlLFxuICBhYm9ydENvbnRyb2xsZXIsXG4gIHJlcGxheVVzZXJNZXNzYWdlcyA9IGZhbHNlLFxuICBpbmNsdWRlUGFydGlhbE1lc3NhZ2VzID0gZmFsc2UsXG4gIGhhbmRsZUVsaWNpdGF0aW9uLFxuICBhZ2VudHMgPSBbXSxcbiAgc2V0U0RLU3RhdHVzLFxuICBvcnBoYW5lZFBlcm1pc3Npb24sXG59OiB7XG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgcHJvbXB0OiBzdHJpbmcgfCBBcnJheTxDb250ZW50QmxvY2tQYXJhbT5cbiAgcHJvbXB0VXVpZD86IHN0cmluZ1xuICBpc01ldGE/OiBib29sZWFuXG4gIGN3ZDogc3RyaW5nXG4gIHRvb2xzOiBUb29sc1xuICB2ZXJib3NlPzogYm9vbGVhblxuICBtY3BDbGllbnRzOiBNQ1BTZXJ2ZXJDb25uZWN0aW9uW11cbiAgdGhpbmtpbmdDb25maWc/OiBUaGlua2luZ0NvbmZpZ1xuICBtYXhUdXJucz86IG51bWJlclxuICBtYXhCdWRnZXRVc2Q/OiBudW1iZXJcbiAgdGFza0J1ZGdldD86IHsgdG90YWw6IG51bWJlciB9XG4gIGNhblVzZVRvb2w6IENhblVzZVRvb2xGblxuICBtdXRhYmxlTWVzc2FnZXM/OiBNZXNzYWdlW11cbiAgY3VzdG9tU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIGFwcGVuZFN5c3RlbVByb21wdD86IHN0cmluZ1xuICB1c2VyU3BlY2lmaWVkTW9kZWw/OiBzdHJpbmdcbiAgZmFsbGJhY2tNb2RlbD86IHN0cmluZ1xuICBqc29uU2NoZW1hPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlXG4gIHNldEFwcFN0YXRlOiAoZjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZFxuICBnZXRSZWFkRmlsZUNhY2hlOiAoKSA9PiBGaWxlU3RhdGVDYWNoZVxuICBzZXRSZWFkRmlsZUNhY2hlOiAoY2FjaGU6IEZpbGVTdGF0ZUNhY2hlKSA9PiB2b2lkXG4gIGFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlclxuICByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuXG4gIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXM/OiBib29sZWFuXG4gIGhhbmRsZUVsaWNpdGF0aW9uPzogVG9vbFVzZUNvbnRleHRbJ2hhbmRsZUVsaWNpdGF0aW9uJ11cbiAgYWdlbnRzPzogQWdlbnREZWZpbml0aW9uW11cbiAgc2V0U0RLU3RhdHVzPzogKHN0YXR1czogU0RLU3RhdHVzKSA9PiB2b2lkXG4gIG9ycGhhbmVkUGVybWlzc2lvbj86IE9ycGhhbmVkUGVybWlzc2lvblxufSk6IEFzeW5jR2VuZXJhdG9yPFNES01lc3NhZ2UsIHZvaWQsIHVua25vd24+IHtcbiAgY29uc3QgZW5naW5lID0gbmV3IFF1ZXJ5RW5naW5lKHtcbiAgICBjd2QsXG4gICAgdG9vbHMsXG4gICAgY29tbWFuZHMsXG4gICAgbWNwQ2xpZW50cyxcbiAgICBhZ2VudHMsXG4gICAgY2FuVXNlVG9vbCxcbiAgICBnZXRBcHBTdGF0ZSxcbiAgICBzZXRBcHBTdGF0ZSxcbiAgICBpbml0aWFsTWVzc2FnZXM6IG11dGFibGVNZXNzYWdlcyxcbiAgICByZWFkRmlsZUNhY2hlOiBjbG9uZUZpbGVTdGF0ZUNhY2hlKGdldFJlYWRGaWxlQ2FjaGUoKSksXG4gICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgIGFwcGVuZFN5c3RlbVByb21wdCxcbiAgICB1c2VyU3BlY2lmaWVkTW9kZWwsXG4gICAgZmFsbGJhY2tNb2RlbCxcbiAgICB0aGlua2luZ0NvbmZpZyxcbiAgICBtYXhUdXJucyxcbiAgICBtYXhCdWRnZXRVc2QsXG4gICAgdGFza0J1ZGdldCxcbiAgICBqc29uU2NoZW1hLFxuICAgIHZlcmJvc2UsXG4gICAgaGFuZGxlRWxpY2l0YXRpb24sXG4gICAgcmVwbGF5VXNlck1lc3NhZ2VzLFxuICAgIGluY2x1ZGVQYXJ0aWFsTWVzc2FnZXMsXG4gICAgc2V0U0RLU3RhdHVzLFxuICAgIGFib3J0Q29udHJvbGxlcixcbiAgICBvcnBoYW5lZFBlcm1pc3Npb24sXG4gICAgLi4uKGZlYXR1cmUoJ0hJU1RPUllfU05JUCcpXG4gICAgICA/IHtcbiAgICAgICAgICBzbmlwUmVwbGF5OiAoeWllbGRlZDogTWVzc2FnZSwgc3RvcmU6IE1lc3NhZ2VbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzbmlwUHJvamVjdGlvbiEuaXNTbmlwQm91bmRhcnlNZXNzYWdlKHlpZWxkZWQpKVxuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gc25pcE1vZHVsZSEuc25pcENvbXBhY3RJZk5lZWRlZChzdG9yZSwgeyBmb3JjZTogdHJ1ZSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDoge30pLFxuICB9KVxuXG4gIHRyeSB7XG4gICAgeWllbGQqIGVuZ2luZS5zdWJtaXRNZXNzYWdlKHByb21wdCwge1xuICAgICAgdXVpZDogcHJvbXB0VXVpZCxcbiAgICAgIGlzTWV0YSxcbiAgICB9KVxuICB9IGZpbmFsbHkge1xuICAgIHNldFJlYWRGaWxlQ2FjaGUoZW5naW5lLmdldFJlYWRGaWxlU3RhdGUoKSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBbUJBLGVBQXNCLHVCQUF1QjtBQUFBLEVBQzNDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLEdBVUc7QUFDRCxRQUFNLENBQUMscUJBQXFCLGFBQWEsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsSUFDMUUsdUJBQXVCLFNBQ25CLFFBQVEsUUFBUSxDQUFDLENBQUMsSUFDbEI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0osZUFBZTtBQUFBLElBQ2YsdUJBQXVCLFNBQVksUUFBUSxRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQjtBQUFBLEVBQzVFLENBQUM7QUFDRCxTQUFPLEVBQUUscUJBQXFCLGFBQWEsY0FBYztBQUMzRDtBQWNBLGVBQXNCLGdDQUFnQztBQUFBLEVBQ3BEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLEdBWTZCO0FBQzNCLFFBQU0sZ0JBQWdCLGlCQUFpQjtBQUN2QyxRQUFNLFdBQVcsWUFBWTtBQUU3QixRQUFNLEVBQUUscUJBQXFCLGFBQWEsY0FBYyxJQUN0RCxNQUFNLHVCQUF1QjtBQUFBLElBQzNCO0FBQUEsSUFDQTtBQUFBLElBQ0EsOEJBQThCLE1BQU07QUFBQSxNQUNsQyxTQUFTLHNCQUFzQiw2QkFBNkIsS0FBSztBQUFBLElBQ25FO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLENBQUM7QUFFSCxRQUFNLGVBQWUsZUFBZTtBQUFBLElBQ2xDLEdBQUksdUJBQXVCLFNBQ3ZCLENBQUMsa0JBQWtCLElBQ25CO0FBQUEsSUFDSixHQUFJLHFCQUFxQixDQUFDLGtCQUFrQixJQUFJLENBQUM7QUFBQSxFQUNuRCxDQUFDO0FBSUQsUUFBTSxPQUFPLFNBQVMsR0FBRyxFQUFFO0FBQzNCLFFBQU0sc0JBQ0osTUFBTSxTQUFTLGVBQWUsS0FBSyxRQUFRLGdCQUFnQixPQUN2RCxTQUFTLE1BQU0sR0FBRyxFQUFFLElBQ3BCO0FBRU4sUUFBTSxpQkFBaUM7QUFBQSxJQUNyQyxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxnQkFDRSxtQkFDQyw4QkFBOEIsTUFBTSxRQUNqQyxFQUFFLE1BQU0sV0FBVyxJQUNuQixFQUFFLE1BQU0sV0FBVztBQUFBLE1BQ3pCO0FBQUEsTUFDQSxjQUFjLENBQUM7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLE1BQ3pCLGtCQUFrQixFQUFFLGNBQWMsUUFBUSxXQUFXLENBQUMsRUFBRTtBQUFBLE1BQ3hEO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGlCQUFpQixzQkFBc0I7QUFBQSxJQUN2QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVix5QkFBeUIsTUFBTTtBQUFBLElBQUM7QUFBQSxJQUNoQyxtQkFBbUIsTUFBTTtBQUFBLElBQUM7QUFBQSxJQUMxQix3QkFBd0IsTUFBTTtBQUFBLElBQUM7QUFBQSxJQUMvQix3QkFBd0IsTUFBTTtBQUFBLElBQUM7QUFBQSxFQUNqQztBQUVBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjs7O0FDbExBO0FBR0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBaEVBLFNBQVMsa0JBQWtCO0FBc0UzQjtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBV0E7QUFRQTtBQUtBO0FBakJBLElBQU0sa0JBQ0osTUFDRTtBQXVCSixJQUFNLDRCQUd5QixRQUFRLGtCQUFrQixJQUNyRCxnRUFBNEMsNEJBQzVDLE9BQU8sQ0FBQztBQUtaLElBQU0sYUFBYSxRQUFRLGNBQWMsSUFDcEMsMERBQ0Q7QUFDSixJQUFNLGlCQUFpQixRQUFRLGNBQWMsSUFDeEMsZ0VBQ0Q7QUF5REcsSUFBTSxjQUFOLE1BQWtCO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLCtCQUErQjtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsdUJBQXVCLG9CQUFJLElBQVk7QUFBQSxFQUN2QywwQkFBMEIsb0JBQUksSUFBWTtBQUFBLEVBRWxELFlBQVksUUFBMkI7QUFDckMsU0FBSyxTQUFTO0FBQ2QsU0FBSyxrQkFBa0IsT0FBTyxtQkFBbUIsQ0FBQztBQUNsRCxTQUFLLGtCQUFrQixPQUFPLG1CQUFtQixzQkFBc0I7QUFDdkUsU0FBSyxvQkFBb0IsQ0FBQztBQUMxQixTQUFLLGdCQUFnQixPQUFPO0FBQzVCLFNBQUssYUFBYTtBQUFBLEVBQ3BCO0FBQUEsRUFFQSxPQUFPLGNBQ0wsUUFDQSxTQUMyQztBQUMzQyxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EscUJBQXFCO0FBQUEsTUFDckIseUJBQXlCO0FBQUEsTUFDekIsU0FBUyxDQUFDO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUksS0FBSztBQUVULFNBQUsscUJBQXFCLE1BQU07QUFDaEMsV0FBTyxHQUFHO0FBQ1YsVUFBTSxpQkFBaUIsQ0FBQyw2QkFBNkI7QUFDckQsVUFBTSxZQUFZLEtBQUssSUFBSTtBQUczQixVQUFNLG9CQUFrQyxPQUN0QyxNQUNBLE9BQ0EsZ0JBQ0Esa0JBQ0EsV0FDQSxrQkFDRztBQUNILFlBQU1BLFVBQVMsTUFBTTtBQUFBLFFBQ25CO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBR0EsVUFBSUEsUUFBTyxhQUFhLFNBQVM7QUFDL0IsYUFBSyxrQkFBa0IsS0FBSztBQUFBLFVBQzFCLFdBQVcsa0JBQWtCLEtBQUssSUFBSTtBQUFBLFVBQ3RDLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNIO0FBRUEsYUFBT0E7QUFBQSxJQUNUO0FBRUEsVUFBTSxrQkFBa0IsWUFBWTtBQUNwQyxVQUFNLHVCQUF1QixxQkFDekIsd0JBQXdCLGtCQUFrQixJQUMxQyxpQkFBaUI7QUFFckIsVUFBTSx3QkFBd0MsaUJBQzFDLGlCQUNBLDhCQUE4QixNQUFNLFFBQ2xDLEVBQUUsTUFBTSxXQUFXLElBQ25CLEVBQUUsTUFBTSxXQUFXO0FBRXpCLCtCQUEyQix3QkFBd0I7QUFFbkQsVUFBTSxlQUNKLE9BQU8sdUJBQXVCLFdBQVcscUJBQXFCO0FBQ2hFLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYjtBQUFBLElBQ0YsSUFBSSxNQUFNLHVCQUF1QjtBQUFBLE1BQy9CO0FBQUEsTUFDQSxlQUFlO0FBQUEsTUFDZiw4QkFBOEIsTUFBTTtBQUFBLFFBQ2xDLGdCQUFnQixzQkFBc0IsNkJBQTZCLEtBQUs7QUFBQSxNQUMxRTtBQUFBLE1BQ0E7QUFBQSxNQUNBLG9CQUFvQjtBQUFBLElBQ3RCLENBQUM7QUFDRCwrQkFBMkIsdUJBQXVCO0FBQ2xELFVBQU0sY0FBYztBQUFBLE1BQ2xCLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxRQUNEO0FBQUEsUUFDQSxvQkFBb0IsSUFBSSxpQkFBaUIsSUFBSTtBQUFBLE1BQy9DO0FBQUEsSUFDRjtBQVFBLFVBQU0sd0JBQ0osaUJBQWlCLFVBQWEsdUJBQXVCLElBQ2pELE1BQU0saUJBQWlCLElBQ3ZCO0FBRU4sVUFBTSxlQUFlLGVBQWU7QUFBQSxNQUNsQyxHQUFJLGlCQUFpQixTQUFZLENBQUMsWUFBWSxJQUFJO0FBQUEsTUFDbEQsR0FBSSx3QkFBd0IsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDO0FBQUEsTUFDdkQsR0FBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDO0FBQUEsSUFDbkQsQ0FBQztBQUdELFVBQU0sMEJBQTBCLE1BQU07QUFBQSxNQUFLLE9BQ3pDLGdCQUFnQixHQUFHLDBCQUEwQjtBQUFBLElBQy9DO0FBQ0EsUUFBSSxjQUFjLHlCQUF5QjtBQUN6QywwQ0FBb0MsYUFBYSxhQUFhLENBQUM7QUFBQSxJQUNqRTtBQUVBLFFBQUksMEJBQW1EO0FBQUEsTUFDckQsVUFBVSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFmLGFBQWEsUUFBTTtBQUNqQixhQUFLLGtCQUFrQixHQUFHLEtBQUssZUFBZTtBQUFBLE1BQ2hEO0FBQUEsTUFDQSxnQkFBZ0IsTUFBTTtBQUFBLE1BQUM7QUFBQSxNQUN2QixtQkFBbUIsS0FBSyxPQUFPO0FBQUEsTUFDL0IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBLE9BQU87QUFBQTtBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQSxlQUFlO0FBQUEsUUFDZixnQkFBZ0I7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsY0FBYyxDQUFDO0FBQUEsUUFDZix1QkFBdUI7QUFBQSxRQUN2Qix5QkFBeUI7QUFBQSxRQUN6QjtBQUFBLFFBQ0E7QUFBQSxRQUNBLGtCQUFrQixFQUFFLGNBQWMsUUFBUSxXQUFXLENBQUMsRUFBRTtBQUFBLFFBQ3hELE9BQU8sb0JBQW9CLGdCQUFnQixFQUFFLEtBQUs7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsaUJBQWlCLEtBQUs7QUFBQSxNQUN0QixlQUFlLEtBQUs7QUFBQSxNQUNwQixnQ0FBZ0Msb0JBQUksSUFBWTtBQUFBLE1BQ2hELHlCQUF5QixLQUFLO0FBQUEsTUFDOUIseUJBQXlCLG9CQUFJLElBQVk7QUFBQSxNQUN6QyxzQkFBc0IsS0FBSztBQUFBLE1BQzNCLHlCQUF5QixNQUFNO0FBQUEsTUFBQztBQUFBLE1BQ2hDLG1CQUFtQixNQUFNO0FBQUEsTUFBQztBQUFBLE1BQzFCLHdCQUF3QixDQUN0QixZQUNHO0FBQ0gsb0JBQVksVUFBUTtBQUNsQixnQkFBTSxVQUFVLFFBQVEsS0FBSyxXQUFXO0FBQ3hDLGNBQUksWUFBWSxLQUFLLFlBQWEsUUFBTztBQUN6QyxpQkFBTyxFQUFFLEdBQUcsTUFBTSxhQUFhLFFBQVE7QUFBQSxRQUN6QyxDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0Esd0JBQXdCLENBQ3RCLFlBQ0c7QUFDSCxvQkFBWSxVQUFRO0FBQ2xCLGdCQUFNLFVBQVUsUUFBUSxLQUFLLFdBQVc7QUFDeEMsY0FBSSxZQUFZLEtBQUssWUFBYSxRQUFPO0FBQ3pDLGlCQUFPLEVBQUUsR0FBRyxNQUFNLGFBQWEsUUFBUTtBQUFBLFFBQ3pDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFHQSxRQUFJLHNCQUFzQixDQUFDLEtBQUssOEJBQThCO0FBQzVELFdBQUssK0JBQStCO0FBQ3BDLHVCQUFpQixXQUFXO0FBQUEsUUFDMUI7QUFBQSxRQUNBO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTDtBQUFBLE1BQ0YsR0FBRztBQUNELGNBQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUVBLFVBQU07QUFBQSxNQUNKLFVBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1A7QUFBQSxJQUNGLElBQUksTUFBTSxpQkFBaUI7QUFBQSxNQUN6QixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixZQUFZLE1BQU07QUFBQSxNQUFDO0FBQUEsTUFDbkIsU0FBUztBQUFBLFFBQ1AsR0FBRztBQUFBLFFBQ0gsVUFBVSxLQUFLO0FBQUEsTUFDakI7QUFBQSxNQUNBLFVBQVUsS0FBSztBQUFBLE1BQ2YsTUFBTSxTQUFTO0FBQUEsTUFDZixRQUFRLFNBQVM7QUFBQSxNQUNqQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBR0QsU0FBSyxnQkFBZ0IsS0FBSyxHQUFHLHFCQUFxQjtBQUdsRCxVQUFNLFdBQVcsQ0FBQyxHQUFHLEtBQUssZUFBZTtBQWdCekMsUUFBSSxrQkFBa0Isc0JBQXNCLFNBQVMsR0FBRztBQUN0RCxZQUFNLG9CQUFvQixpQkFBaUIsUUFBUTtBQUNuRCxVQUFJLFdBQVcsR0FBRztBQUNoQixhQUFLO0FBQUEsTUFDUCxPQUFPO0FBQ0wsY0FBTTtBQUNOLFlBQ0UsWUFBWSxRQUFRLElBQUksdUJBQXVCLEtBQy9DLFlBQVksUUFBUSxJQUFJLHFCQUFxQixHQUM3QztBQUNBLGdCQUFNLG9CQUFvQjtBQUFBLFFBQzVCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxVQUFNLHFCQUFxQixzQkFBc0I7QUFBQSxNQUMvQyxTQUNHLElBQUksU0FBUyxVQUNaLENBQUMsSUFBSTtBQUFBLE1BQ0wsQ0FBQyxJQUFJO0FBQUEsTUFDTCxnQkFBZ0IsRUFBRSw2QkFBNkIsR0FBRztBQUFBLE1BQ25ELElBQUksU0FBUyxZQUFZLElBQUksWUFBWTtBQUFBO0FBQUEsSUFDOUM7QUFDQSxVQUFNLGdCQUFnQixxQkFBcUIscUJBQXFCLENBQUM7QUFHakUsZ0JBQVksV0FBUztBQUFBLE1BQ25CLEdBQUc7QUFBQSxNQUNILHVCQUF1QjtBQUFBLFFBQ3JCLEdBQUcsS0FBSztBQUFBLFFBQ1Isa0JBQWtCO0FBQUEsVUFDaEIsR0FBRyxLQUFLLHNCQUFzQjtBQUFBLFVBQzlCLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLElBQ0YsRUFBRTtBQUVGLFVBQU0sZ0JBQWdCLHNCQUFzQjtBQUk1Qyw4QkFBMEI7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsYUFBYSxNQUFNO0FBQUEsTUFBQztBQUFBLE1BQ3BCLGdCQUFnQixNQUFNO0FBQUEsTUFBQztBQUFBLE1BQ3ZCLG1CQUFtQixLQUFLLE9BQU87QUFBQSxNQUMvQixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0EsT0FBTztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsUUFDaEI7QUFBQSxRQUNBLGNBQWMsQ0FBQztBQUFBLFFBQ2YsdUJBQXVCO0FBQUEsUUFDdkIseUJBQXlCO0FBQUEsUUFDekI7QUFBQSxRQUNBO0FBQUEsUUFDQSxPQUFPLG9CQUFvQixnQkFBZ0IsRUFBRSxLQUFLO0FBQUEsUUFDbEQsa0JBQWtCLEVBQUUsY0FBYyxRQUFRLFdBQVcsQ0FBQyxFQUFFO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLGlCQUFpQixLQUFLO0FBQUEsTUFDdEIsZUFBZSxLQUFLO0FBQUEsTUFDcEIsZ0NBQWdDLG9CQUFJLElBQVk7QUFBQSxNQUNoRCx5QkFBeUIsS0FBSztBQUFBLE1BQzlCLHlCQUF5QixvQkFBSSxJQUFZO0FBQUEsTUFDekMsc0JBQXNCLEtBQUs7QUFBQSxNQUMzQix5QkFBeUIsTUFBTTtBQUFBLE1BQUM7QUFBQSxNQUNoQyxtQkFBbUIsTUFBTTtBQUFBLE1BQUM7QUFBQSxNQUMxQix3QkFBd0Isd0JBQXdCO0FBQUEsTUFDaEQsd0JBQXdCLHdCQUF3QjtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUVBLCtCQUEyQix1QkFBdUI7QUFLbEQsVUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLGVBQWUsQ0FBQyxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDOUQsMEJBQTBCLE9BQU8sQ0FBQztBQUFBLE1BQ2xDLHdCQUF3QjtBQUFBLElBQzFCLENBQUM7QUFDRCwrQkFBMkIsc0JBQXNCO0FBRWpELFVBQU0sdUJBQXVCO0FBQUEsTUFDM0I7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFDUCxnQkFBZ0IsZ0JBQWdCLHNCQUM3QjtBQUFBO0FBQUEsTUFDSDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxVQUFVLGdCQUFnQjtBQUFBLElBQzVCLENBQUM7QUFHRCwrQkFBMkIsd0JBQXdCO0FBRW5ELFFBQUksQ0FBQyxhQUFhO0FBSWhCLGlCQUFXLE9BQU8sdUJBQXVCO0FBQ3ZDLFlBQ0UsSUFBSSxTQUFTLFVBQ2IsT0FBTyxJQUFJLFFBQVEsWUFBWSxhQUM5QixJQUFJLFFBQVEsUUFBUSxTQUFTLElBQUksd0JBQXdCLEdBQUcsS0FDM0QsSUFBSSxRQUFRLFFBQVEsU0FBUyxJQUFJLHdCQUF3QixHQUFHLEtBQzVELElBQUksbUJBQ047QUFDQSxnQkFBTTtBQUFBLFlBQ0osTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLGNBQ1AsR0FBRyxJQUFJO0FBQUEsY0FDUCxTQUFTLFVBQVUsSUFBSSxRQUFRLE9BQU87QUFBQSxZQUN4QztBQUFBLFlBQ0EsWUFBWSxhQUFhO0FBQUEsWUFDekIsb0JBQW9CO0FBQUEsWUFDcEIsTUFBTSxJQUFJO0FBQUEsWUFDVixXQUFXLElBQUk7QUFBQSxZQUNmLFVBQVUsQ0FBQyxJQUFJO0FBQUEsWUFDZixhQUFhLElBQUksVUFBVSxJQUFJO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBTUEsWUFDRSxJQUFJLFNBQVMsWUFDYixJQUFJLFlBQVksbUJBQ2hCLE9BQU8sSUFBSSxZQUFZLGFBQ3RCLElBQUksUUFBUSxTQUFTLElBQUksd0JBQXdCLEdBQUcsS0FDbkQsSUFBSSxRQUFRLFNBQVMsSUFBSSx3QkFBd0IsR0FBRyxJQUN0RDtBQUNBLGdCQUFNLHdDQUF3QyxJQUFJLFNBQVMsSUFBSSxJQUFJO0FBQUEsUUFDckU7QUFFQSxZQUFJLElBQUksU0FBUyxZQUFZLElBQUksWUFBWSxvQkFBb0I7QUFDL0QsZ0JBQU07QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULFlBQVksYUFBYTtBQUFBLFlBQ3pCLE1BQU0sSUFBSTtBQUFBLFlBQ1Ysa0JBQWtCLHFCQUFxQixJQUFJLGVBQWU7QUFBQSxVQUM1RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxnQkFBZ0I7QUFDbEIsY0FBTSxpQkFBaUIsUUFBUTtBQUMvQixZQUNFLFlBQVksUUFBUSxJQUFJLHVCQUF1QixLQUMvQyxZQUFZLFFBQVEsSUFBSSxxQkFBcUIsR0FDN0M7QUFDQSxnQkFBTSxvQkFBb0I7QUFBQSxRQUM1QjtBQUFBLE1BQ0Y7QUFFQSxZQUFNO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixhQUFhLEtBQUssSUFBSSxJQUFJO0FBQUEsUUFDMUIsaUJBQWlCLG9CQUFvQjtBQUFBLFFBQ3JDLFdBQVcsU0FBUyxTQUFTO0FBQUEsUUFDN0IsUUFBUSxjQUFjO0FBQUEsUUFDdEIsYUFBYTtBQUFBLFFBQ2IsWUFBWSxhQUFhO0FBQUEsUUFDekIsZ0JBQWdCLGdCQUFhO0FBQUEsUUFDN0IsT0FBTyxLQUFLO0FBQUEsUUFDWixZQUFZLGNBQWM7QUFBQSxRQUMxQixvQkFBb0IsS0FBSztBQUFBLFFBQ3pCLGlCQUFpQjtBQUFBLFVBQ2Y7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxNQUFNLFdBQVc7QUFBQSxNQUNuQjtBQUNBO0FBQUEsSUFDRjtBQUVBLFFBQUksbUJBQW1CLEtBQUssZ0JBQWdCO0FBQzFDLDRCQUNHLE9BQU8sZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQ3JELFFBQVEsYUFBVztBQUNsQixhQUFLO0FBQUEsVUFDSCxDQUFDLFlBQTBEO0FBQ3pELHdCQUFZLFdBQVM7QUFBQSxjQUNuQixHQUFHO0FBQUEsY0FDSCxhQUFhLFFBQVEsS0FBSyxXQUFXO0FBQUEsWUFDdkMsRUFBRTtBQUFBLFVBQ0o7QUFBQSxVQUNBLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDTDtBQUdBLFFBQUksc0JBQXdDO0FBQzVDLFFBQUksWUFBWTtBQUNoQixRQUFJLGlDQUFpQztBQUVyQyxRQUFJO0FBRUosUUFBSSxpQkFBZ0M7QUFLcEMsVUFBTSxvQkFBb0Isa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0FBRW5ELFVBQU0sK0JBQStCLGFBQ2pDLGVBQWUsS0FBSyxpQkFBaUIsMEJBQTBCLElBQy9EO0FBRUoscUJBQWlCLFdBQVcsTUFBTTtBQUFBLE1BQ2hDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDLEdBQUc7QUFFRixVQUNFLFFBQVEsU0FBUyxlQUNqQixRQUFRLFNBQVMsVUFDaEIsUUFBUSxTQUFTLFlBQVksUUFBUSxZQUFZLG9CQUNsRDtBQVNBLFlBQ0Usa0JBQ0EsUUFBUSxTQUFTLFlBQ2pCLFFBQVEsWUFBWSxvQkFDcEI7QUFDQSxnQkFBTSxXQUFXLFFBQVEsaUJBQWlCLGtCQUFrQjtBQUM1RCxjQUFJLFVBQVU7QUFDWixrQkFBTSxVQUFVLEtBQUssZ0JBQWdCO0FBQUEsY0FDbkMsT0FBSyxFQUFFLFNBQVM7QUFBQSxZQUNsQjtBQUNBLGdCQUFJLFlBQVksSUFBSTtBQUNsQixvQkFBTSxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQUEsWUFDbkU7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLGlCQUFTLEtBQUssT0FBTztBQUNyQixZQUFJLGdCQUFnQjtBQVVsQixjQUFJLFFBQVEsU0FBUyxhQUFhO0FBQ2hDLGlCQUFLLGlCQUFpQixRQUFRO0FBQUEsVUFDaEMsT0FBTztBQUNMLGtCQUFNLGlCQUFpQixRQUFRO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBR0EsWUFBSSxDQUFDLGtDQUFrQyxjQUFjLFNBQVMsR0FBRztBQUMvRCwyQ0FBaUM7QUFDakMscUJBQVcsWUFBWSxlQUFlO0FBQ3BDLGdCQUFJLFNBQVMsU0FBUyxRQUFRO0FBQzVCLG9CQUFNO0FBQUEsZ0JBQ0osTUFBTTtBQUFBLGdCQUNOLFNBQVMsU0FBUztBQUFBLGdCQUNsQixZQUFZLGFBQWE7QUFBQSxnQkFDekIsb0JBQW9CO0FBQUEsZ0JBQ3BCLE1BQU0sU0FBUztBQUFBLGdCQUNmLFdBQVcsU0FBUztBQUFBLGdCQUNwQixVQUFVO0FBQUEsY0FDWjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLFFBQVEsU0FBUyxRQUFRO0FBQzNCO0FBQUEsTUFDRjtBQUVBLGNBQVEsUUFBUSxNQUFNO0FBQUEsUUFDcEIsS0FBSztBQUVIO0FBQUEsUUFDRixLQUFLO0FBSUgsY0FBSSxRQUFRLFFBQVEsZUFBZSxNQUFNO0FBQ3ZDLDZCQUFpQixRQUFRLFFBQVE7QUFBQSxVQUNuQztBQUNBLGVBQUssZ0JBQWdCLEtBQUssT0FBTztBQUNqQyxpQkFBTyxpQkFBaUIsT0FBTztBQUMvQjtBQUFBLFFBQ0YsS0FBSztBQUNILGVBQUssZ0JBQWdCLEtBQUssT0FBTztBQU1qQyxjQUFJLGdCQUFnQjtBQUNsQixxQkFBUyxLQUFLLE9BQU87QUFDckIsaUJBQUssaUJBQWlCLFFBQVE7QUFBQSxVQUNoQztBQUNBLGlCQUFPLGlCQUFpQixPQUFPO0FBQy9CO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxnQkFBZ0IsS0FBSyxPQUFPO0FBQ2pDLGlCQUFPLGlCQUFpQixPQUFPO0FBQy9CO0FBQUEsUUFDRixLQUFLO0FBQ0gsY0FBSSxRQUFRLE1BQU0sU0FBUyxpQkFBaUI7QUFFMUMsa0NBQXNCO0FBQ3RCLGtDQUFzQjtBQUFBLGNBQ3BCO0FBQUEsY0FDQSxRQUFRLE1BQU0sUUFBUTtBQUFBLFlBQ3hCO0FBQUEsVUFDRjtBQUNBLGNBQUksUUFBUSxNQUFNLFNBQVMsaUJBQWlCO0FBQzFDLGtDQUFzQjtBQUFBLGNBQ3BCO0FBQUEsY0FDQSxRQUFRLE1BQU07QUFBQSxZQUNoQjtBQUtBLGdCQUFJLFFBQVEsTUFBTSxNQUFNLGVBQWUsTUFBTTtBQUMzQywrQkFBaUIsUUFBUSxNQUFNLE1BQU07QUFBQSxZQUN2QztBQUFBLFVBQ0Y7QUFDQSxjQUFJLFFBQVEsTUFBTSxTQUFTLGdCQUFnQjtBQUV6QyxpQkFBSyxhQUFhO0FBQUEsY0FDaEIsS0FBSztBQUFBLGNBQ0w7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLGNBQUksd0JBQXdCO0FBQzFCLGtCQUFNO0FBQUEsY0FDSixNQUFNO0FBQUEsY0FDTixPQUFPLFFBQVE7QUFBQSxjQUNmLFlBQVksYUFBYTtBQUFBLGNBQ3pCLG9CQUFvQjtBQUFBLGNBQ3BCLE1BQU0sV0FBVztBQUFBLFlBQ25CO0FBQUEsVUFDRjtBQUVBO0FBQUEsUUFDRixLQUFLO0FBQ0gsZUFBSyxnQkFBZ0IsS0FBSyxPQUFPO0FBRWpDLGNBQUksZ0JBQWdCO0FBQ2xCLHFCQUFTLEtBQUssT0FBTztBQUNyQixpQkFBSyxpQkFBaUIsUUFBUTtBQUFBLFVBQ2hDO0FBR0EsY0FBSSxRQUFRLFdBQVcsU0FBUyxxQkFBcUI7QUFDbkQsdUNBQTJCLFFBQVEsV0FBVztBQUFBLFVBQ2hELFdBRVMsUUFBUSxXQUFXLFNBQVMscUJBQXFCO0FBQ3hELGdCQUFJLGdCQUFnQjtBQUNsQixrQkFDRSxZQUFZLFFBQVEsSUFBSSx1QkFBdUIsS0FDL0MsWUFBWSxRQUFRLElBQUkscUJBQXFCLEdBQzdDO0FBQ0Esc0JBQU0sb0JBQW9CO0FBQUEsY0FDNUI7QUFBQSxZQUNGO0FBQ0Esa0JBQU07QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxjQUNULGFBQWEsS0FBSyxJQUFJLElBQUk7QUFBQSxjQUMxQixpQkFBaUIsb0JBQW9CO0FBQUEsY0FDckMsVUFBVTtBQUFBLGNBQ1YsV0FBVyxRQUFRLFdBQVc7QUFBQSxjQUM5QixhQUFhO0FBQUEsY0FDYixZQUFZLGFBQWE7QUFBQSxjQUN6QixnQkFBZ0IsZ0JBQWE7QUFBQSxjQUM3QixPQUFPLEtBQUs7QUFBQSxjQUNaLFlBQVksY0FBYztBQUFBLGNBQzFCLG9CQUFvQixLQUFLO0FBQUEsY0FDekIsaUJBQWlCO0FBQUEsZ0JBQ2Y7QUFBQSxnQkFDQSxnQkFBZ0I7QUFBQSxjQUNsQjtBQUFBLGNBQ0EsTUFBTSxXQUFXO0FBQUEsY0FDakIsUUFBUTtBQUFBLGdCQUNOLG9DQUFvQyxRQUFRLFdBQVcsUUFBUTtBQUFBLGNBQ2pFO0FBQUEsWUFDRjtBQUNBO0FBQUEsVUFDRixXQUdFLHNCQUNBLFFBQVEsV0FBVyxTQUFTLGtCQUM1QjtBQUNBLGtCQUFNO0FBQUEsY0FDSixNQUFNO0FBQUEsY0FDTixTQUFTO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOLFNBQVMsUUFBUSxXQUFXO0FBQUEsY0FDOUI7QUFBQSxjQUNBLFlBQVksYUFBYTtBQUFBLGNBQ3pCLG9CQUFvQjtBQUFBLGNBQ3BCLE1BQU0sUUFBUSxXQUFXLGVBQWUsUUFBUTtBQUFBLGNBQ2hELFdBQVcsUUFBUTtBQUFBLGNBQ25CLFVBQVU7QUFBQSxZQUNaO0FBQUEsVUFDRjtBQUNBO0FBQUEsUUFDRixLQUFLO0FBRUg7QUFBQSxRQUNGLEtBQUssVUFBVTtBQVFiLGdCQUFNLGFBQWEsS0FBSyxPQUFPO0FBQUEsWUFDN0I7QUFBQSxZQUNBLEtBQUs7QUFBQSxVQUNQO0FBQ0EsY0FBSSxlQUFlLFFBQVc7QUFDNUIsZ0JBQUksV0FBVyxVQUFVO0FBQ3ZCLG1CQUFLLGdCQUFnQixTQUFTO0FBQzlCLG1CQUFLLGdCQUFnQixLQUFLLEdBQUcsV0FBVyxRQUFRO0FBQUEsWUFDbEQ7QUFDQTtBQUFBLFVBQ0Y7QUFDQSxlQUFLLGdCQUFnQixLQUFLLE9BQU87QUFFakMsY0FDRSxRQUFRLFlBQVksc0JBQ3BCLFFBQVEsaUJBQ1I7QUFLQSxrQkFBTSxxQkFBcUIsS0FBSyxnQkFBZ0IsU0FBUztBQUN6RCxnQkFBSSxxQkFBcUIsR0FBRztBQUMxQixtQkFBSyxnQkFBZ0IsT0FBTyxHQUFHLGtCQUFrQjtBQUFBLFlBQ25EO0FBQ0Esa0JBQU0sbUJBQW1CLFNBQVMsU0FBUztBQUMzQyxnQkFBSSxtQkFBbUIsR0FBRztBQUN4Qix1QkFBUyxPQUFPLEdBQUcsZ0JBQWdCO0FBQUEsWUFDckM7QUFFQSxrQkFBTTtBQUFBLGNBQ0osTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLGNBQ1QsWUFBWSxhQUFhO0FBQUEsY0FDekIsTUFBTSxRQUFRO0FBQUEsY0FDZCxrQkFBa0IscUJBQXFCLFFBQVEsZUFBZTtBQUFBLFlBQ2hFO0FBQUEsVUFDRjtBQUNBLGNBQUksUUFBUSxZQUFZLGFBQWE7QUFDbkMsa0JBQU07QUFBQSxjQUNKLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxjQUNULFNBQVMsUUFBUTtBQUFBLGNBQ2pCLGFBQWEsUUFBUTtBQUFBLGNBQ3JCLGdCQUFnQixRQUFRO0FBQUEsY0FDeEIsY0FBYyxRQUFRLE1BQU0sVUFBVTtBQUFBLGNBQ3RDLE9BQU8sNEJBQTRCLFFBQVEsS0FBSztBQUFBLGNBQ2hELFlBQVksYUFBYTtBQUFBLGNBQ3pCLE1BQU0sUUFBUTtBQUFBLFlBQ2hCO0FBQUEsVUFDRjtBQUVBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUVILGdCQUFNO0FBQUEsWUFDSixNQUFNO0FBQUEsWUFDTixTQUFTLFFBQVE7QUFBQSxZQUNqQix3QkFBd0IsUUFBUTtBQUFBLFlBQ2hDLFlBQVksYUFBYTtBQUFBLFlBQ3pCLE1BQU0sUUFBUTtBQUFBLFVBQ2hCO0FBQ0E7QUFBQSxNQUNKO0FBR0EsVUFBSSxpQkFBaUIsVUFBYSxnQkFBYSxLQUFLLGNBQWM7QUFDaEUsWUFBSSxnQkFBZ0I7QUFDbEIsY0FDRSxZQUFZLFFBQVEsSUFBSSx1QkFBdUIsS0FDL0MsWUFBWSxRQUFRLElBQUkscUJBQXFCLEdBQzdDO0FBQ0Esa0JBQU0sb0JBQW9CO0FBQUEsVUFDNUI7QUFBQSxRQUNGO0FBQ0EsY0FBTTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsYUFBYSxLQUFLLElBQUksSUFBSTtBQUFBLFVBQzFCLGlCQUFpQixvQkFBb0I7QUFBQSxVQUNyQyxVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixZQUFZLGFBQWE7QUFBQSxVQUN6QixnQkFBZ0IsZ0JBQWE7QUFBQSxVQUM3QixPQUFPLEtBQUs7QUFBQSxVQUNaLFlBQVksY0FBYztBQUFBLFVBQzFCLG9CQUFvQixLQUFLO0FBQUEsVUFDekIsaUJBQWlCO0FBQUEsWUFDZjtBQUFBLFlBQ0EsZ0JBQWdCO0FBQUEsVUFDbEI7QUFBQSxVQUNBLE1BQU0sV0FBVztBQUFBLFVBQ2pCLFFBQVEsQ0FBQyw0QkFBNEIsWUFBWSxHQUFHO0FBQUEsUUFDdEQ7QUFDQTtBQUFBLE1BQ0Y7QUFHQSxVQUFJLFFBQVEsU0FBUyxVQUFVLFlBQVk7QUFDekMsY0FBTSxlQUFlO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0w7QUFBQSxRQUNGO0FBQ0EsY0FBTSxpQkFBaUIsZUFBZTtBQUN0QyxjQUFNLGFBQWE7QUFBQSxVQUNqQixRQUFRLElBQUksaUNBQWlDO0FBQUEsVUFDN0M7QUFBQSxRQUNGO0FBQ0EsWUFBSSxrQkFBa0IsWUFBWTtBQUNoQyxjQUFJLGdCQUFnQjtBQUNsQixnQkFDRSxZQUFZLFFBQVEsSUFBSSx1QkFBdUIsS0FDL0MsWUFBWSxRQUFRLElBQUkscUJBQXFCLEdBQzdDO0FBQ0Esb0JBQU0sb0JBQW9CO0FBQUEsWUFDNUI7QUFBQSxVQUNGO0FBQ0EsZ0JBQU07QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWEsS0FBSyxJQUFJLElBQUk7QUFBQSxZQUMxQixpQkFBaUIsb0JBQW9CO0FBQUEsWUFDckMsVUFBVTtBQUFBLFlBQ1YsV0FBVztBQUFBLFlBQ1gsYUFBYTtBQUFBLFlBQ2IsWUFBWSxhQUFhO0FBQUEsWUFDekIsZ0JBQWdCLGdCQUFhO0FBQUEsWUFDN0IsT0FBTyxLQUFLO0FBQUEsWUFDWixZQUFZLGNBQWM7QUFBQSxZQUMxQixvQkFBb0IsS0FBSztBQUFBLFlBQ3pCLGlCQUFpQjtBQUFBLGNBQ2Y7QUFBQSxjQUNBLGdCQUFnQjtBQUFBLFlBQ2xCO0FBQUEsWUFDQSxNQUFNLFdBQVc7QUFBQSxZQUNqQixRQUFRO0FBQUEsY0FDTixtREFBbUQsVUFBVTtBQUFBLFlBQy9EO0FBQUEsVUFDRjtBQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBU0EsVUFBTSxTQUFTLFNBQVM7QUFBQSxNQUN0QixPQUFLLEVBQUUsU0FBUyxlQUFlLEVBQUUsU0FBUztBQUFBLElBQzVDO0FBSUEsVUFBTSxnQkFBZ0IsUUFBUSxRQUFRO0FBQ3RDLFVBQU0scUJBQ0osUUFBUSxTQUFTLGNBQ1osYUFBSyxPQUFPLFFBQVEsT0FBTyxHQUFHLFFBQVEsU0FDdkM7QUFLTixRQUFJLGdCQUFnQjtBQUNsQixVQUNFLFlBQVksUUFBUSxJQUFJLHVCQUF1QixLQUMvQyxZQUFZLFFBQVEsSUFBSSxxQkFBcUIsR0FDN0M7QUFDQSxjQUFNLG9CQUFvQjtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUVBLFFBQUksQ0FBQyxtQkFBbUIsUUFBUSxjQUFjLEdBQUc7QUFDL0MsWUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsYUFBYSxLQUFLLElBQUksSUFBSTtBQUFBLFFBQzFCLGlCQUFpQixvQkFBb0I7QUFBQSxRQUNyQyxVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsUUFDWCxhQUFhO0FBQUEsUUFDYixZQUFZLGFBQWE7QUFBQSxRQUN6QixnQkFBZ0IsZ0JBQWE7QUFBQSxRQUM3QixPQUFPLEtBQUs7QUFBQSxRQUNaLFlBQVksY0FBYztBQUFBLFFBQzFCLG9CQUFvQixLQUFLO0FBQUEsUUFDekIsaUJBQWlCO0FBQUEsVUFDZjtBQUFBLFVBQ0EsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxRQUNBLE1BQU0sV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1qQixTQUFTLE1BQU07QUFDYixnQkFBTSxNQUFNLGtCQUFrQjtBQUM5QixnQkFBTSxRQUFRLG9CQUNWLElBQUksWUFBWSxpQkFBaUIsSUFBSSxJQUNyQztBQUNKLGlCQUFPO0FBQUEsWUFDTCxnQ0FBZ0MsYUFBYSxzQkFBc0Isa0JBQWtCLGdCQUFnQixjQUFjO0FBQUEsWUFDbkgsR0FBRyxJQUFJLE1BQU0sS0FBSyxFQUFFLElBQUksT0FBSyxFQUFFLEtBQUs7QUFBQSxVQUN0QztBQUFBLFFBQ0YsR0FBRztBQUFBLE1BQ0w7QUFDQTtBQUFBLElBQ0Y7QUFHQSxRQUFJLGFBQWE7QUFDakIsUUFBSSxhQUFhO0FBRWpCLFFBQUksT0FBTyxTQUFTLGFBQWE7QUFDL0IsWUFBTSxjQUFjLGFBQUssT0FBTyxRQUFRLE9BQU87QUFDL0MsVUFDRSxhQUFhLFNBQVMsVUFDdEIsQ0FBQyxtQkFBbUIsSUFBSSxZQUFZLElBQUksR0FDeEM7QUFDQSxxQkFBYSxZQUFZO0FBQUEsTUFDM0I7QUFDQSxtQkFBYSxRQUFRLE9BQU8saUJBQWlCO0FBQUEsSUFDL0M7QUFFQSxVQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixhQUFhLEtBQUssSUFBSSxJQUFJO0FBQUEsTUFDMUIsaUJBQWlCLG9CQUFvQjtBQUFBLE1BQ3JDLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFlBQVksYUFBYTtBQUFBLE1BQ3pCLGdCQUFnQixnQkFBYTtBQUFBLE1BQzdCLE9BQU8sS0FBSztBQUFBLE1BQ1osWUFBWSxjQUFjO0FBQUEsTUFDMUIsb0JBQW9CLEtBQUs7QUFBQSxNQUN6QixtQkFBbUI7QUFBQSxNQUNuQixpQkFBaUI7QUFBQSxRQUNmO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsTUFBTSxXQUFXO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFFQSxZQUFrQjtBQUNoQixTQUFLLGdCQUFnQixNQUFNO0FBQUEsRUFDN0I7QUFBQSxFQUVBLGNBQWtDO0FBQ2hDLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLG1CQUFtQztBQUNqQyxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxlQUF1QjtBQUNyQixXQUFPLGFBQWE7QUFBQSxFQUN0QjtBQUFBLEVBRUEsU0FBUyxPQUFxQjtBQUM1QixTQUFLLE9BQU8scUJBQXFCO0FBQUEsRUFDbkM7QUFDRjtBQVNBLGdCQUF1QixJQUFJO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFVBQVU7QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0Esa0JBQWtCLENBQUM7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EscUJBQXFCO0FBQUEsRUFDckIseUJBQXlCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFNBQVMsQ0FBQztBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQ0YsR0ErQjhDO0FBQzVDLFFBQU0sU0FBUyxJQUFJLFlBQVk7QUFBQSxJQUM3QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLElBQ2pCLGVBQWUsb0JBQW9CLGlCQUFpQixDQUFDO0FBQUEsSUFDckQ7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLEdBQUksUUFBUSxjQUFjLElBQ3RCO0FBQUEsTUFDRSxZQUFZLENBQUMsU0FBa0IsVUFBcUI7QUFDbEQsWUFBSSxDQUFDLGVBQWdCLHNCQUFzQixPQUFPO0FBQ2hELGlCQUFPO0FBQ1QsZUFBTyxXQUFZLG9CQUFvQixPQUFPLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxNQUMvRDtBQUFBLElBQ0YsSUFDQSxDQUFDO0FBQUEsRUFDUCxDQUFDO0FBRUQsTUFBSTtBQUNGLFdBQU8sT0FBTyxjQUFjLFFBQVE7QUFBQSxNQUNsQyxNQUFNO0FBQUEsTUFDTjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsVUFBRTtBQUNBLHFCQUFpQixPQUFPLGlCQUFpQixDQUFDO0FBQUEsRUFDNUM7QUFDRjsiLAogICJuYW1lcyI6IFsicmVzdWx0Il0KfQo=
