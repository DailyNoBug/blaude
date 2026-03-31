#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  notifySessionStateChanged
} from "./chunk-P7A6JCZG.mjs";
import {
  init_udsMessaging,
  udsMessaging_exports
} from "./chunk-QLZJRPHV.mjs";
import {
  normalizeControlMessageKeys
} from "./chunk-WBJL7DYB.mjs";
import {
  init_slashCommandParsing,
  parseSlashCommand
} from "./chunk-KVW7KIZE.mjs";
import {
  AccountInfoSchema,
  AgentDefinitionSchema,
  AgentInfoSchema,
  DEFAULT_CRON_JITTER_CONFIG,
  DEFAULT_OUTPUT_STYLE_NAME,
  FastModeStateSchema,
  HookEventSchema,
  HookInputSchema,
  McpServerConfigForProcessTransportSchema,
  McpServerStatusSchema,
  ModelInfoSchema,
  PermissionModeSchema,
  PermissionUpdateSchema,
  SDKMessageSchema,
  SDKPostTurnSummaryMessageSchema,
  SDKStreamlinedTextMessageSchema,
  SDKStreamlinedToolUseSummaryMessageSchema,
  SDKUserMessageSchema,
  Select,
  SlashCommandSchema,
  Spinner,
  Stream,
  addMarketplaceSource,
  applyPermissionUpdates,
  createAttachmentMessage,
  createCommandInputMessage,
  createImageMetadataText,
  createSystemMessage,
  createUserMessage,
  cronToHuman,
  detectImageFormatFromBase64,
  executePermissionRequestHooks,
  executeUserPromptSubmitHooks,
  extractTag,
  fileHistoryCanRestore,
  fileHistoryEnabled,
  fileHistoryGetDiffStats,
  findCommand,
  findMissedTasks,
  getAttachmentMessages,
  getCommandName,
  getContentText,
  getCronFilePath,
  getDeclaredMarketplaces,
  getUserPromptSubmitHookBlockingMessage,
  hasCronTasksSync,
  hasPermissionsToUseTool,
  hookJSONOutputSchema,
  init_AppState,
  init_PermissionUpdate,
  init_PermissionUpdateSchema,
  init_Spinner,
  init_attachments,
  init_commandLifecycle,
  init_commands2 as init_commands,
  init_coreSchemas,
  init_cron,
  init_cronTasks,
  init_fileHistory,
  init_generators,
  init_hooks,
  init_hooks2,
  init_imageResizer,
  init_imageStore,
  init_marketplaceManager,
  init_messages2 as init_messages,
  init_outputStyles,
  init_permissions,
  init_queryProfiler,
  init_select,
  init_stream,
  init_textInputTypes,
  isBridgeSafeCommand,
  isEmptyMessageText,
  isSyntheticMessage,
  isToolUseResultMessage,
  isValidImagePaste,
  jitteredNextCronRunMs,
  loadKnownMarketplacesConfig,
  markCronTasksFired,
  maybeResizeAndDownsampleImageBlock,
  notifyCommandLifecycle,
  oneShotJitteredNextCronRunMs,
  permissionUpdateSchema,
  persistPermissionUpdates,
  queryCheckpoint,
  readCronTasks,
  removeCronTasks,
  storeImages,
  toArray,
  useAppState
} from "./chunk-OPLSBIOC.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-ADZQUMT7.mjs";
import {
  Divider,
  init_Divider,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useKeybindings,
  useTerminalSize
} from "./chunk-2LTMY2QU.mjs";
import {
  init_events,
  init_sessionTracing,
  logOTelEvent,
  redactIfDisabled,
  startInteractionSpan
} from "./chunk-L4LQXE4X.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  AGENT_TOOL_NAME,
  LEGACY_AGENT_TOOL_NAME,
  getAnthropicApiKeyWithSource,
  getFastModeState,
  getFeatureValue_CACHED_WITH_REFRESH,
  getSettings_DEPRECATED,
  init_auth,
  init_constants2 as init_constants,
  init_fastMode,
  init_file,
  init_genericProcessUtils,
  init_growthbook,
  init_isEqual,
  init_schemas,
  init_settings2 as init_settings,
  isEqual_default,
  isLocalMarketplaceSource,
  isProcessRunning,
  pathExists
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4,
  v4_default
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  formatRelativeTimeAgo,
  init_format,
  truncate
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  findCanonicalGitRoot,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  BASH_STDERR_TAG,
  BASH_STDOUT_TAG,
  COMMAND_MESSAGE_TAG,
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  TASK_NOTIFICATION_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  init_displayTags,
  init_log,
  init_xml,
  logError,
  stripDisplayTags
} from "./chunk-KCFW5MKY.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  AbortError,
  errorMessage,
  getErrnoCode,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  getProjectRoot,
  getScheduledTasksEnabled,
  getSdkBetas,
  getSessionCronTasks,
  getSessionId,
  init_state,
  removeSessionCronTasks,
  setPromptId,
  setScheduledTasksEnabled
} from "./chunk-NGSB34MB.mjs";
import {
  init_process,
  writeToStdout
} from "./chunk-66ZH6W67.mjs";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/components/MessageSelector.tsx
var MessageSelector_exports = {};
__export(MessageSelector_exports, {
  MessageSelector: () => MessageSelector,
  messagesAfterAreOnlySynthetic: () => messagesAfterAreOnlySynthetic,
  selectableUserMessagesFilter: () => selectableUserMessagesFilter
});
import { randomUUID } from "crypto";
import * as path from "path";
function isTextBlock(block) {
  return block.type === "text";
}
function isSummarizeOption(option) {
  return option === "summarize" || option === "summarize_up_to";
}
function MessageSelector({
  messages,
  onPreRestore,
  onRestoreMessage,
  onRestoreCode,
  onSummarize,
  onClose,
  preselectedMessage
}) {
  const fileHistory = useAppState((s) => s.fileHistory);
  const [error, setError] = useState(void 0);
  const isFileHistoryEnabled = fileHistoryEnabled();
  const currentUUID = useMemo(randomUUID, []);
  const messageOptions = useMemo(() => [...messages.filter(selectableUserMessagesFilter), {
    ...createUserMessage({
      content: ""
    }),
    uuid: currentUUID
  }], [messages, currentUUID]);
  const [selectedIndex, setSelectedIndex] = useState(messageOptions.length - 1);
  const firstVisibleIndex = Math.max(0, Math.min(selectedIndex - Math.floor(MAX_VISIBLE_MESSAGES / 2), messageOptions.length - MAX_VISIBLE_MESSAGES));
  const hasMessagesToSelect = messageOptions.length > 1;
  const [messageToRestore, setMessageToRestore] = useState(preselectedMessage);
  const [diffStatsForRestore, setDiffStatsForRestore] = useState(void 0);
  useEffect(() => {
    if (!preselectedMessage || !isFileHistoryEnabled) return;
    let cancelled = false;
    void fileHistoryGetDiffStats(fileHistory, preselectedMessage.uuid).then((stats) => {
      if (!cancelled) setDiffStatsForRestore(stats);
    });
    return () => {
      cancelled = true;
    };
  }, [preselectedMessage, isFileHistoryEnabled, fileHistory]);
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoringOption, setRestoringOption] = useState(null);
  const [selectedRestoreOption, setSelectedRestoreOption] = useState("both");
  const [summarizeFromFeedback, setSummarizeFromFeedback] = useState("");
  const [summarizeUpToFeedback, setSummarizeUpToFeedback] = useState("");
  function getRestoreOptions(canRestoreCode) {
    const baseOptions = canRestoreCode ? [{
      value: "both",
      label: "Restore code and conversation"
    }, {
      value: "conversation",
      label: "Restore conversation"
    }, {
      value: "code",
      label: "Restore code"
    }] : [{
      value: "conversation",
      label: "Restore conversation"
    }];
    const summarizeInputProps = {
      type: "input",
      placeholder: "add context (optional)",
      initialValue: "",
      allowEmptySubmitToCancel: true,
      showLabelWithValue: true,
      labelValueSeparator: ": "
    };
    baseOptions.push({
      value: "summarize",
      label: "Summarize from here",
      ...summarizeInputProps,
      onChange: setSummarizeFromFeedback
    });
    if (false) {
      baseOptions.push({
        value: "summarize_up_to",
        label: "Summarize up to here",
        ...summarizeInputProps,
        onChange: setSummarizeUpToFeedback
      });
    }
    baseOptions.push({
      value: "nevermind",
      label: "Never mind"
    });
    return baseOptions;
  }
  useEffect(() => {
    logEvent("tengu_message_selector_opened", {});
  }, []);
  async function restoreConversationDirectly(message) {
    onPreRestore();
    setIsRestoring(true);
    try {
      await onRestoreMessage(message);
      setIsRestoring(false);
      onClose();
    } catch (error_0) {
      logError(error_0);
      setIsRestoring(false);
      setError(`Failed to restore the conversation:
${error_0}`);
    }
  }
  async function handleSelect(message_0) {
    const index = messages.indexOf(message_0);
    const indexFromEnd = messages.length - 1 - index;
    logEvent("tengu_message_selector_selected", {
      index_from_end: indexFromEnd,
      message_type: message_0.type,
      is_current_prompt: false
    });
    if (!messages.includes(message_0)) {
      onClose();
      return;
    }
    if (!isFileHistoryEnabled) {
      await restoreConversationDirectly(message_0);
      return;
    }
    const diffStats = await fileHistoryGetDiffStats(fileHistory, message_0.uuid);
    setMessageToRestore(message_0);
    setDiffStatsForRestore(diffStats);
  }
  async function onSelectRestoreOption(option) {
    logEvent("tengu_message_selector_restore_option_selected", {
      option
    });
    if (!messageToRestore) {
      setError("Message not found.");
      return;
    }
    if (option === "nevermind") {
      if (preselectedMessage) onClose();
      else setMessageToRestore(void 0);
      return;
    }
    if (isSummarizeOption(option)) {
      onPreRestore();
      setIsRestoring(true);
      setRestoringOption(option);
      setError(void 0);
      try {
        const direction = option === "summarize_up_to" ? "up_to" : "from";
        const feedback = (direction === "up_to" ? summarizeUpToFeedback : summarizeFromFeedback).trim() || void 0;
        await onSummarize(messageToRestore, feedback, direction);
        setIsRestoring(false);
        setRestoringOption(null);
        setMessageToRestore(void 0);
        onClose();
      } catch (error_1) {
        logError(error_1);
        setIsRestoring(false);
        setRestoringOption(null);
        setMessageToRestore(void 0);
        setError(`Failed to summarize:
${error_1}`);
      }
      return;
    }
    onPreRestore();
    setIsRestoring(true);
    setError(void 0);
    let codeError = null;
    let conversationError = null;
    if (option === "code" || option === "both") {
      try {
        await onRestoreCode(messageToRestore);
      } catch (error_2) {
        codeError = error_2;
        logError(codeError);
      }
    }
    if (option === "conversation" || option === "both") {
      try {
        await onRestoreMessage(messageToRestore);
      } catch (error_3) {
        conversationError = error_3;
        logError(conversationError);
      }
    }
    setIsRestoring(false);
    setMessageToRestore(void 0);
    if (conversationError && codeError) {
      setError(`Failed to restore the conversation and code:
${conversationError}
${codeError}`);
    } else if (conversationError) {
      setError(`Failed to restore the conversation:
${conversationError}`);
    } else if (codeError) {
      setError(`Failed to restore the code:
${codeError}`);
    } else {
      onClose();
    }
  }
  const exitState = useExitOnCtrlCDWithKeybindings();
  const handleEscape = useCallback(() => {
    if (messageToRestore && !preselectedMessage) {
      setMessageToRestore(void 0);
      return;
    }
    logEvent("tengu_message_selector_cancelled", {});
    onClose();
  }, [onClose, messageToRestore, preselectedMessage]);
  const moveUp = useCallback(() => setSelectedIndex((prev) => Math.max(0, prev - 1)), []);
  const moveDown = useCallback(() => setSelectedIndex((prev_0) => Math.min(messageOptions.length - 1, prev_0 + 1)), [messageOptions.length]);
  const jumpToTop = useCallback(() => setSelectedIndex(0), []);
  const jumpToBottom = useCallback(() => setSelectedIndex(messageOptions.length - 1), [messageOptions.length]);
  const handleSelectCurrent = useCallback(() => {
    const selected = messageOptions[selectedIndex];
    if (selected) {
      void handleSelect(selected);
    }
  }, [messageOptions, selectedIndex, handleSelect]);
  useKeybinding("confirm:no", handleEscape, {
    context: "Confirmation",
    isActive: !messageToRestore
  });
  useKeybindings({
    "messageSelector:up": moveUp,
    "messageSelector:down": moveDown,
    "messageSelector:top": jumpToTop,
    "messageSelector:bottom": jumpToBottom,
    "messageSelector:select": handleSelectCurrent
  }, {
    context: "MessageSelector",
    isActive: !isRestoring && !error && !messageToRestore && hasMessagesToSelect
  });
  const [fileHistoryMetadata, setFileHistoryMetadata] = useState({});
  useEffect(() => {
    async function loadFileHistoryMetadata() {
      if (!isFileHistoryEnabled) {
        return;
      }
      void Promise.all(messageOptions.map(async (userMessage, itemIndex) => {
        if (userMessage.uuid !== currentUUID) {
          const canRestore = fileHistoryCanRestore(fileHistory, userMessage.uuid);
          const nextUserMessage = messageOptions.at(itemIndex + 1);
          const diffStats_0 = canRestore ? computeDiffStatsBetweenMessages(messages, userMessage.uuid, nextUserMessage?.uuid !== currentUUID ? nextUserMessage?.uuid : void 0) : void 0;
          if (diffStats_0 !== void 0) {
            setFileHistoryMetadata((prev_1) => ({
              ...prev_1,
              [itemIndex]: diffStats_0
            }));
          } else {
            setFileHistoryMetadata((prev_2) => ({
              ...prev_2,
              [itemIndex]: void 0
            }));
          }
        }
      }));
    }
    void loadFileHistoryMetadata();
  }, [messageOptions, messages, currentUUID, fileHistory, isFileHistoryEnabled]);
  const canRestoreCode_0 = isFileHistoryEnabled && diffStatsForRestore?.filesChanged && diffStatsForRestore.filesChanged.length > 0;
  const showPickList = !error && !messageToRestore && !preselectedMessage && hasMessagesToSelect;
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, /* @__PURE__ */ createElement(Divider, { color: "suggestion" }), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginX: 1, gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "suggestion" }, "Rewind"), error && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", error)), !hasMessagesToSelect && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, null, "Nothing to rewind to yet.")), !error && messageToRestore && hasMessagesToSelect && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, null, "Confirm you want to restore", " ", !diffStatsForRestore && "the conversation ", "to the point before you sent this message:"), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingLeft: 1, borderStyle: "single", borderRight: false, borderTop: false, borderBottom: false, borderLeft: true, borderLeftDimColor: true }, /* @__PURE__ */ createElement(UserMessageOption, { userMessage: messageToRestore, color: "text", isCurrent: false }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(", formatRelativeTimeAgo(new Date(messageToRestore.timestamp)), ")")), /* @__PURE__ */ createElement(RestoreOptionDescription, { selectedRestoreOption, canRestoreCode: !!canRestoreCode_0, diffStatsForRestore }), isRestoring && isSummarizeOption(restoringOption) ? /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, /* @__PURE__ */ createElement(Spinner, null), /* @__PURE__ */ createElement(ThemedText, null, "Summarizing\u2026")) : /* @__PURE__ */ createElement(Select, { isDisabled: isRestoring, options: getRestoreOptions(!!canRestoreCode_0), defaultFocusValue: canRestoreCode_0 ? "both" : "conversation", onFocus: (value) => setSelectedRestoreOption(value), onChange: (value_0) => onSelectRestoreOption(value_0), onCancel: () => preselectedMessage ? onClose() : setMessageToRestore(void 0) }), canRestoreCode_0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, figures_default.warning, " Rewinding does not affect files edited manually or via bash."))), showPickList && /* @__PURE__ */ createElement(Fragment, null, isFileHistoryEnabled ? /* @__PURE__ */ createElement(ThemedText, null, "Restore the code and/or conversation to the point before\u2026") : /* @__PURE__ */ createElement(ThemedText, null, "Restore and fork the conversation to the point before\u2026"), /* @__PURE__ */ createElement(ThemedBox_default, { width: "100%", flexDirection: "column" }, messageOptions.slice(firstVisibleIndex, firstVisibleIndex + MAX_VISIBLE_MESSAGES).map((msg, visibleOptionIndex) => {
    const optionIndex = firstVisibleIndex + visibleOptionIndex;
    const isSelected = optionIndex === selectedIndex;
    const isCurrent = msg.uuid === currentUUID;
    const metadataLoaded = optionIndex in fileHistoryMetadata;
    const metadata = fileHistoryMetadata[optionIndex];
    const numFilesChanged = metadata?.filesChanged && metadata.filesChanged.length;
    return /* @__PURE__ */ createElement(ThemedBox_default, { key: msg.uuid, height: isFileHistoryEnabled ? 3 : 2, overflow: "hidden", width: "100%", flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedBox_default, { width: 2, minWidth: 2 }, isSelected ? /* @__PURE__ */ createElement(ThemedText, { color: "permission", bold: true }, figures_default.pointer, " ") : /* @__PURE__ */ createElement(ThemedText, null, "  ")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexShrink: 1, height: 1, overflow: "hidden" }, /* @__PURE__ */ createElement(UserMessageOption, { userMessage: msg, color: isSelected ? "suggestion" : void 0, isCurrent, paddingRight: 10 })), isFileHistoryEnabled && metadataLoaded && /* @__PURE__ */ createElement(ThemedBox_default, { height: 1, flexDirection: "row" }, metadata ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: !isSelected, color: "inactive" }, numFilesChanged ? /* @__PURE__ */ createElement(Fragment, null, numFilesChanged === 1 && metadata.filesChanged[0] ? `${path.basename(metadata.filesChanged[0])} ` : `${numFilesChanged} files changed `, /* @__PURE__ */ createElement(DiffStatsText, { diffStats: metadata })) : /* @__PURE__ */ createElement(Fragment, null, "No code changes"))) : /* @__PURE__ */ createElement(ThemedText, { dimColor: true, color: "warning" }, figures_default.warning, " No code restore"))));
  }))), !messageToRestore && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Fragment, null, !error && hasMessagesToSelect && "Enter to continue \xB7 ", "Esc to exit"))));
}
function getRestoreOptionConversationText(option) {
  switch (option) {
    case "summarize":
      return "Messages after this point will be summarized.";
    case "summarize_up_to":
      return "Preceding messages will be summarized. This and subsequent messages will remain unchanged \u2014 you will stay at the end of the conversation.";
    case "both":
    case "conversation":
      return "The conversation will be forked.";
    case "code":
    case "nevermind":
      return "The conversation will be unchanged.";
  }
}
function RestoreOptionDescription(t0) {
  const $ = c(11);
  const {
    selectedRestoreOption,
    canRestoreCode,
    diffStatsForRestore
  } = t0;
  const showCodeRestore = canRestoreCode && (selectedRestoreOption === "both" || selectedRestoreOption === "code");
  let t1;
  if ($[0] !== selectedRestoreOption) {
    t1 = getRestoreOptionConversationText(selectedRestoreOption);
    $[0] = selectedRestoreOption;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t1) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t1);
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== diffStatsForRestore || $[5] !== selectedRestoreOption || $[6] !== showCodeRestore) {
    t3 = !isSummarizeOption(selectedRestoreOption) && (showCodeRestore ? /* @__PURE__ */ createElement(RestoreCodeConfirmation, { diffStatsForRestore }) : /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "The code will be unchanged."));
    $[4] = diffStatsForRestore;
    $[5] = selectedRestoreOption;
    $[6] = showCodeRestore;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t2 || $[9] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t2, t3);
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
function RestoreCodeConfirmation(t0) {
  const $ = c(14);
  const {
    diffStatsForRestore
  } = t0;
  if (diffStatsForRestore === void 0) {
    return;
  }
  if (!diffStatsForRestore.filesChanged || !diffStatsForRestore.filesChanged[0]) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "The code has not changed (nothing will be restored).");
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  const numFilesChanged = diffStatsForRestore.filesChanged.length;
  let fileLabel;
  if (numFilesChanged === 1) {
    let t12;
    if ($[1] !== diffStatsForRestore.filesChanged[0]) {
      t12 = path.basename(diffStatsForRestore.filesChanged[0] || "");
      $[1] = diffStatsForRestore.filesChanged[0];
      $[2] = t12;
    } else {
      t12 = $[2];
    }
    fileLabel = t12;
  } else {
    if (numFilesChanged === 2) {
      let t12;
      if ($[3] !== diffStatsForRestore.filesChanged[0]) {
        t12 = path.basename(diffStatsForRestore.filesChanged[0] || "");
        $[3] = diffStatsForRestore.filesChanged[0];
        $[4] = t12;
      } else {
        t12 = $[4];
      }
      const file1 = t12;
      let t22;
      if ($[5] !== diffStatsForRestore.filesChanged[1]) {
        t22 = path.basename(diffStatsForRestore.filesChanged[1] || "");
        $[5] = diffStatsForRestore.filesChanged[1];
        $[6] = t22;
      } else {
        t22 = $[6];
      }
      const file2 = t22;
      fileLabel = `${file1} and ${file2}`;
    } else {
      let t12;
      if ($[7] !== diffStatsForRestore.filesChanged[0]) {
        t12 = path.basename(diffStatsForRestore.filesChanged[0] || "");
        $[7] = diffStatsForRestore.filesChanged[0];
        $[8] = t12;
      } else {
        t12 = $[8];
      }
      const file1_0 = t12;
      fileLabel = `${file1_0} and ${diffStatsForRestore.filesChanged.length - 1} other files`;
    }
  }
  let t1;
  if ($[9] !== diffStatsForRestore) {
    t1 = /* @__PURE__ */ createElement(DiffStatsText, { diffStats: diffStatsForRestore });
    $[9] = diffStatsForRestore;
    $[10] = t1;
  } else {
    t1 = $[10];
  }
  let t2;
  if ($[11] !== fileLabel || $[12] !== t1) {
    t2 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "The code will be restored", " ", t1, " in ", fileLabel, "."));
    $[11] = fileLabel;
    $[12] = t1;
    $[13] = t2;
  } else {
    t2 = $[13];
  }
  return t2;
}
function DiffStatsText(t0) {
  const $ = c(7);
  const {
    diffStats
  } = t0;
  if (!diffStats || !diffStats.filesChanged) {
    return;
  }
  let t1;
  if ($[0] !== diffStats.insertions) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { color: "diffAddedWord" }, "+", diffStats.insertions, " ");
    $[0] = diffStats.insertions;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== diffStats.deletions) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { color: "diffRemovedWord" }, "-", diffStats.deletions);
    $[2] = diffStats.deletions;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ createElement(Fragment, null, t1, t2);
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}
function UserMessageOption(t0) {
  const $ = c(31);
  const {
    userMessage,
    color,
    dimColor,
    isCurrent,
    paddingRight
  } = t0;
  const {
    columns
  } = useTerminalSize();
  if (isCurrent) {
    let t12;
    if ($[0] !== color || $[1] !== dimColor) {
      t12 = /* @__PURE__ */ createElement(ThemedBox_default, { width: "100%" }, /* @__PURE__ */ createElement(ThemedText, { italic: true, color, dimColor }, "(current)"));
      $[0] = color;
      $[1] = dimColor;
      $[2] = t12;
    } else {
      t12 = $[2];
    }
    return t12;
  }
  const content = userMessage.message.content;
  const lastBlock = typeof content === "string" ? null : content[content.length - 1];
  let T0;
  let T1;
  let t1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  if ($[3] !== color || $[4] !== columns || $[5] !== content || $[6] !== dimColor || $[7] !== lastBlock || $[8] !== paddingRight) {
    t6 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb0: {
      const rawMessageText = typeof content === "string" ? content.trim() : lastBlock && isTextBlock(lastBlock) ? lastBlock.text.trim() : "(no prompt)";
      const messageText = stripDisplayTags(rawMessageText);
      if (isEmptyMessageText(messageText)) {
        let t72;
        if ($[17] !== color || $[18] !== dimColor) {
          t72 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", width: "100%" }, /* @__PURE__ */ createElement(ThemedText, { italic: true, color, dimColor }, "((empty message))"));
          $[17] = color;
          $[18] = dimColor;
          $[19] = t72;
        } else {
          t72 = $[19];
        }
        t6 = t72;
        break bb0;
      }
      if (messageText.includes("<bash-input>")) {
        const input = extractTag(messageText, "bash-input");
        if (input) {
          let t72;
          if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
            t72 = /* @__PURE__ */ createElement(ThemedText, { color: "bashBorder" }, "!");
            $[20] = t72;
          } else {
            t72 = $[20];
          }
          t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", width: "100%" }, t72, /* @__PURE__ */ createElement(ThemedText, { color, dimColor }, " ", input));
          break bb0;
        }
      }
      if (messageText.includes(`<${COMMAND_MESSAGE_TAG}>`)) {
        const commandMessage = extractTag(messageText, COMMAND_MESSAGE_TAG);
        const args = extractTag(messageText, "command-args");
        const isSkillFormat = extractTag(messageText, "skill-format") === "true";
        if (commandMessage) {
          if (isSkillFormat) {
            t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", width: "100%" }, /* @__PURE__ */ createElement(ThemedText, { color, dimColor }, "Skill(", commandMessage, ")"));
            break bb0;
          } else {
            t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", width: "100%" }, /* @__PURE__ */ createElement(ThemedText, { color, dimColor }, "/", commandMessage, " ", args));
            break bb0;
          }
        }
      }
      T1 = ThemedBox_default;
      t4 = "row";
      t5 = "100%";
      T0 = ThemedText;
      t1 = color;
      t2 = dimColor;
      t3 = paddingRight ? truncate(messageText, columns - paddingRight, true) : messageText.slice(0, 500).split("\n").slice(0, 4).join("\n");
    }
    $[3] = color;
    $[4] = columns;
    $[5] = content;
    $[6] = dimColor;
    $[7] = lastBlock;
    $[8] = paddingRight;
    $[9] = T0;
    $[10] = T1;
    $[11] = t1;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
  } else {
    T0 = $[9];
    T1 = $[10];
    t1 = $[11];
    t2 = $[12];
    t3 = $[13];
    t4 = $[14];
    t5 = $[15];
    t6 = $[16];
  }
  if (t6 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t6;
  }
  let t7;
  if ($[21] !== T0 || $[22] !== t1 || $[23] !== t2 || $[24] !== t3) {
    t7 = /* @__PURE__ */ createElement(T0, { color: t1, dimColor: t2 }, t3);
    $[21] = T0;
    $[22] = t1;
    $[23] = t2;
    $[24] = t3;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  let t8;
  if ($[26] !== T1 || $[27] !== t4 || $[28] !== t5 || $[29] !== t7) {
    t8 = /* @__PURE__ */ createElement(T1, { flexDirection: t4, width: t5 }, t7);
    $[26] = T1;
    $[27] = t4;
    $[28] = t5;
    $[29] = t7;
    $[30] = t8;
  } else {
    t8 = $[30];
  }
  return t8;
}
function computeDiffStatsBetweenMessages(messages, fromMessageId, toMessageId) {
  const startIndex = messages.findIndex((msg) => msg.uuid === fromMessageId);
  if (startIndex === -1) {
    return void 0;
  }
  let endIndex = toMessageId ? messages.findIndex((msg) => msg.uuid === toMessageId) : messages.length;
  if (endIndex === -1) {
    endIndex = messages.length;
  }
  const filesChanged = [];
  let insertions = 0;
  let deletions = 0;
  for (let i = startIndex + 1; i < endIndex; i++) {
    const msg = messages[i];
    if (!msg || !isToolUseResultMessage(msg)) {
      continue;
    }
    const result = msg.toolUseResult;
    if (!result || !result.filePath || !result.structuredPatch) {
      continue;
    }
    if (!filesChanged.includes(result.filePath)) {
      filesChanged.push(result.filePath);
    }
    try {
      if ("type" in result && result.type === "create") {
        insertions += result.content.split(/\r?\n/).length;
      } else {
        for (const hunk of result.structuredPatch) {
          const additions = count(hunk.lines, (line) => line.startsWith("+"));
          const removals = count(hunk.lines, (line) => line.startsWith("-"));
          insertions += additions;
          deletions += removals;
        }
      }
    } catch {
      continue;
    }
  }
  return {
    filesChanged,
    insertions,
    deletions
  };
}
function selectableUserMessagesFilter(message) {
  if (message.type !== "user") {
    return false;
  }
  if (Array.isArray(message.message.content) && message.message.content[0]?.type === "tool_result") {
    return false;
  }
  if (isSyntheticMessage(message)) {
    return false;
  }
  if (message.isMeta) {
    return false;
  }
  if (message.isCompactSummary || message.isVisibleInTranscriptOnly) {
    return false;
  }
  const content = message.message.content;
  const lastBlock = typeof content === "string" ? null : content[content.length - 1];
  const messageText = typeof content === "string" ? content.trim() : lastBlock && isTextBlock(lastBlock) ? lastBlock.text.trim() : "";
  if (messageText.indexOf(`<${LOCAL_COMMAND_STDOUT_TAG}>`) !== -1 || messageText.indexOf(`<${LOCAL_COMMAND_STDERR_TAG}>`) !== -1 || messageText.indexOf(`<${BASH_STDOUT_TAG}>`) !== -1 || messageText.indexOf(`<${BASH_STDERR_TAG}>`) !== -1 || messageText.indexOf(`<${TASK_NOTIFICATION_TAG}>`) !== -1 || messageText.indexOf(`<${TICK_TAG}>`) !== -1 || messageText.indexOf(`<${TEAMMATE_MESSAGE_TAG}`) !== -1) {
    return false;
  }
  return true;
}
function messagesAfterAreOnlySynthetic(messages, fromIndex) {
  for (let i = fromIndex + 1; i < messages.length; i++) {
    const msg = messages[i];
    if (!msg) continue;
    if (isSyntheticMessage(msg)) continue;
    if (isToolUseResultMessage(msg)) continue;
    if (msg.type === "progress") continue;
    if (msg.type === "system") continue;
    if (msg.type === "attachment") continue;
    if (msg.type === "user" && msg.isMeta) continue;
    if (msg.type === "assistant") {
      const content = msg.message.content;
      if (Array.isArray(content)) {
        const hasMeaningfulContent = content.some((block) => block.type === "text" && block.text.trim() || block.type === "tool_use");
        if (hasMeaningfulContent) return false;
      }
      continue;
    }
    if (msg.type === "user") {
      return false;
    }
  }
  return true;
}
var MAX_VISIBLE_MESSAGES;
var init_MessageSelector = __esm({
  "src/components/MessageSelector.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_analytics();
    init_AppState();
    init_fileHistory();
    init_log();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_useKeybinding();
    init_displayTags();
    init_messages();
    init_select();
    init_Spinner();
    init_useTerminalSize();
    init_xml();
    init_array();
    init_format();
    init_Divider();
    MAX_VISIBLE_MESSAGES = 7;
  }
});

// src/utils/cronJitterConfig.ts
var cronJitterConfig_exports = {};
__export(cronJitterConfig_exports, {
  getCronJitterConfig: () => getCronJitterConfig
});
function getCronJitterConfig() {
  const raw = getFeatureValue_CACHED_WITH_REFRESH(
    "tengu_kairos_cron_config",
    DEFAULT_CRON_JITTER_CONFIG,
    JITTER_CONFIG_REFRESH_MS
  );
  const parsed = cronJitterConfigSchema().safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_CRON_JITTER_CONFIG;
}
var JITTER_CONFIG_REFRESH_MS, HALF_HOUR_MS, THIRTY_DAYS_MS, cronJitterConfigSchema;
var init_cronJitterConfig = __esm({
  "src/utils/cronJitterConfig.ts"() {
    init_v4();
    init_growthbook();
    init_cronTasks();
    init_lazySchema();
    JITTER_CONFIG_REFRESH_MS = 60 * 1e3;
    HALF_HOUR_MS = 30 * 60 * 1e3;
    THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1e3;
    cronJitterConfigSchema = lazySchema(
      () => external_exports.object({
        recurringFrac: external_exports.number().min(0).max(1),
        recurringCapMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotMaxMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotFloorMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotMinuteMod: external_exports.number().int().min(1).max(60),
        recurringMaxAgeMs: external_exports.number().int().min(0).max(THIRTY_DAYS_MS).default(DEFAULT_CRON_JITTER_CONFIG.recurringMaxAgeMs)
      }).refine((c2) => c2.oneShotFloorMs <= c2.oneShotMaxMs)
    );
  }
});

// src/utils/cronTasksLock.ts
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { dirname, join } from "path";
function getLockPath(dir) {
  return join(dir ?? getProjectRoot(), LOCK_FILE_REL);
}
async function readLock(dir) {
  let raw;
  try {
    raw = await readFile(getLockPath(dir), "utf8");
  } catch {
    return void 0;
  }
  const result = schedulerLockSchema().safeParse(safeParseJSON(raw, false));
  return result.success ? result.data : void 0;
}
async function tryCreateExclusive(lock, dir) {
  const path2 = getLockPath(dir);
  const body = jsonStringify(lock);
  try {
    await writeFile(path2, body, { flag: "wx" });
    return true;
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "EEXIST") return false;
    if (code === "ENOENT") {
      await mkdir(dirname(path2), { recursive: true });
      try {
        await writeFile(path2, body, { flag: "wx" });
        return true;
      } catch (retryErr) {
        if (getErrnoCode(retryErr) === "EEXIST") return false;
        throw retryErr;
      }
    }
    throw e;
  }
}
function registerLockCleanup(opts) {
  unregisterCleanup?.();
  unregisterCleanup = registerCleanup(async () => {
    await releaseSchedulerLock(opts);
  });
}
async function tryAcquireSchedulerLock(opts) {
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const lock = {
    sessionId,
    pid: process.pid,
    acquiredAt: Date.now()
  };
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = void 0;
    registerLockCleanup(opts);
    logForDebugging(
      `[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`
    );
    return true;
  }
  const existing = await readLock(dir);
  if (existing?.sessionId === sessionId) {
    if (existing.pid !== process.pid) {
      await writeFile(getLockPath(dir), jsonStringify(lock));
      registerLockCleanup(opts);
    }
    return true;
  }
  if (existing && isProcessRunning(existing.pid)) {
    if (lastBlockedBy !== existing.sessionId) {
      lastBlockedBy = existing.sessionId;
      logForDebugging(
        `[ScheduledTasks] scheduler lock held by session ${existing.sessionId} (PID ${existing.pid})`
      );
    }
    return false;
  }
  if (existing) {
    logForDebugging(
      `[ScheduledTasks] recovering stale scheduler lock from PID ${existing.pid}`
    );
  }
  await unlink(getLockPath(dir)).catch(() => {
  });
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = void 0;
    registerLockCleanup(opts);
    return true;
  }
  return false;
}
async function releaseSchedulerLock(opts) {
  unregisterCleanup?.();
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const existing = await readLock(dir);
  if (!existing || existing.sessionId !== sessionId) return;
  try {
    await unlink(getLockPath(dir));
    logForDebugging("[ScheduledTasks] released scheduler lock");
  } catch {
  }
}
var LOCK_FILE_REL, schedulerLockSchema, unregisterCleanup, lastBlockedBy;
var init_cronTasksLock = __esm({
  "src/utils/cronTasksLock.ts"() {
    init_v4();
    init_state();
    init_cleanupRegistry();
    init_debug();
    init_errors();
    init_genericProcessUtils();
    init_json();
    init_lazySchema();
    init_slowOperations();
    LOCK_FILE_REL = join(".claude", "scheduled_tasks.lock");
    schedulerLockSchema = lazySchema(
      () => external_exports.object({
        sessionId: external_exports.string(),
        pid: external_exports.number(),
        acquiredAt: external_exports.number()
      })
    );
  }
});

// src/utils/cronScheduler.ts
var cronScheduler_exports = {};
__export(cronScheduler_exports, {
  buildMissedTaskNotification: () => buildMissedTaskNotification,
  createCronScheduler: () => createCronScheduler,
  isRecurringTaskAged: () => isRecurringTaskAged
});
function isRecurringTaskAged(t, nowMs, maxAgeMs) {
  if (maxAgeMs === 0) return false;
  return Boolean(t.recurring && !t.permanent && nowMs - t.createdAt >= maxAgeMs);
}
function createCronScheduler(options) {
  const {
    onFire,
    isLoading,
    assistantMode = false,
    onFireTask,
    onMissed,
    dir,
    lockIdentity,
    getJitterConfig,
    isKilled,
    filter
  } = options;
  const lockOpts = dir || lockIdentity ? { dir, lockIdentity } : void 0;
  let tasks = [];
  const nextFireAt = /* @__PURE__ */ new Map();
  const missedAsked = /* @__PURE__ */ new Set();
  const inFlight = /* @__PURE__ */ new Set();
  let enablePoll = null;
  let checkTimer = null;
  let lockProbeTimer = null;
  let watcher = null;
  let stopped = false;
  let isOwner = false;
  async function load(initial) {
    const next = await readCronTasks(dir);
    if (stopped) return;
    tasks = next;
    if (!initial) return;
    const now = Date.now();
    const missed = findMissedTasks(next, now).filter(
      (t) => !t.recurring && !missedAsked.has(t.id) && (!filter || filter(t))
    );
    if (missed.length > 0) {
      for (const t of missed) {
        missedAsked.add(t.id);
        nextFireAt.set(t.id, Infinity);
      }
      logEvent("tengu_scheduled_task_missed", {
        count: missed.length,
        taskIds: missed.map((t) => t.id).join(
          ","
        )
      });
      if (onMissed) {
        onMissed(missed);
      } else {
        onFire(buildMissedTaskNotification(missed));
      }
      void removeCronTasks(
        missed.map((t) => t.id),
        dir
      ).catch(
        (e) => logForDebugging(`[ScheduledTasks] failed to remove missed tasks: ${e}`)
      );
      logForDebugging(
        `[ScheduledTasks] surfaced ${missed.length} missed one-shot task(s)`
      );
    }
  }
  function check() {
    if (isKilled?.()) return;
    if (isLoading() && !assistantMode) return;
    const now = Date.now();
    const seen = /* @__PURE__ */ new Set();
    const firedFileRecurring = [];
    const jitterCfg = getJitterConfig?.() ?? DEFAULT_CRON_JITTER_CONFIG;
    function process2(t, isSession) {
      if (filter && !filter(t)) return;
      seen.add(t.id);
      if (inFlight.has(t.id)) return;
      let next = nextFireAt.get(t.id);
      if (next === void 0) {
        next = t.recurring ? jitteredNextCronRunMs(
          t.cron,
          t.lastFiredAt ?? t.createdAt,
          t.id,
          jitterCfg
        ) ?? Infinity : oneShotJitteredNextCronRunMs(
          t.cron,
          t.createdAt,
          t.id,
          jitterCfg
        ) ?? Infinity;
        nextFireAt.set(t.id, next);
        logForDebugging(
          `[ScheduledTasks] scheduled ${t.id} for ${next === Infinity ? "never" : new Date(next).toISOString()}`
        );
      }
      if (now < next) return;
      logForDebugging(
        `[ScheduledTasks] firing ${t.id}${t.recurring ? " (recurring)" : ""}`
      );
      logEvent("tengu_scheduled_task_fire", {
        recurring: t.recurring ?? false,
        taskId: t.id
      });
      if (onFireTask) {
        onFireTask(t);
      } else {
        onFire(t.prompt);
      }
      const aged = isRecurringTaskAged(t, now, jitterCfg.recurringMaxAgeMs);
      if (aged) {
        const ageHours = Math.floor((now - t.createdAt) / 1e3 / 60 / 60);
        logForDebugging(
          `[ScheduledTasks] recurring task ${t.id} aged out (${ageHours}h since creation), deleting after final fire`
        );
        logEvent("tengu_scheduled_task_expired", {
          taskId: t.id,
          ageHours
        });
      }
      if (t.recurring && !aged) {
        const newNext = jitteredNextCronRunMs(t.cron, now, t.id, jitterCfg) ?? Infinity;
        nextFireAt.set(t.id, newNext);
        if (!isSession) firedFileRecurring.push(t.id);
      } else if (isSession) {
        removeSessionCronTasks([t.id]);
        nextFireAt.delete(t.id);
      } else {
        inFlight.add(t.id);
        void removeCronTasks([t.id], dir).catch(
          (e) => logForDebugging(
            `[ScheduledTasks] failed to remove task ${t.id}: ${e}`
          )
        ).finally(() => inFlight.delete(t.id));
        nextFireAt.delete(t.id);
      }
    }
    if (isOwner) {
      for (const t of tasks) process2(t, false);
      if (firedFileRecurring.length > 0) {
        for (const id of firedFileRecurring) inFlight.add(id);
        void markCronTasksFired(firedFileRecurring, now, dir).catch(
          (e) => logForDebugging(
            `[ScheduledTasks] failed to persist lastFiredAt: ${e}`
          )
        ).finally(() => {
          for (const id of firedFileRecurring) inFlight.delete(id);
        });
      }
    }
    if (dir === void 0) {
      for (const t of getSessionCronTasks()) process2(t, true);
    }
    if (seen.size === 0) {
      nextFireAt.clear();
      return;
    }
    for (const id of nextFireAt.keys()) {
      if (!seen.has(id)) nextFireAt.delete(id);
    }
  }
  async function enable() {
    if (stopped) return;
    if (enablePoll) {
      clearInterval(enablePoll);
      enablePoll = null;
    }
    const { default: chokidar } = await import("./chokidar-73PKTLPD.mjs");
    if (stopped) return;
    isOwner = await tryAcquireSchedulerLock(lockOpts).catch(() => false);
    if (stopped) {
      if (isOwner) {
        isOwner = false;
        void releaseSchedulerLock(lockOpts);
      }
      return;
    }
    if (!isOwner) {
      lockProbeTimer = setInterval(() => {
        void tryAcquireSchedulerLock(lockOpts).then((owned) => {
          if (stopped) {
            if (owned) void releaseSchedulerLock(lockOpts);
            return;
          }
          if (owned) {
            isOwner = true;
            if (lockProbeTimer) {
              clearInterval(lockProbeTimer);
              lockProbeTimer = null;
            }
          }
        }).catch((e) => logForDebugging(String(e), { level: "error" }));
      }, LOCK_PROBE_INTERVAL_MS);
      lockProbeTimer.unref?.();
    }
    void load(true);
    const path2 = getCronFilePath(dir);
    watcher = chokidar.watch(path2, {
      persistent: false,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: FILE_STABILITY_MS },
      ignorePermissionErrors: true
    });
    watcher.on("add", () => void load(false));
    watcher.on("change", () => void load(false));
    watcher.on("unlink", () => {
      if (!stopped) {
        tasks = [];
        nextFireAt.clear();
      }
    });
    checkTimer = setInterval(check, CHECK_INTERVAL_MS);
    checkTimer.unref?.();
  }
  return {
    start() {
      stopped = false;
      if (dir !== void 0) {
        logForDebugging(
          `[ScheduledTasks] scheduler start() \u2014 dir=${dir}, hasTasks=${hasCronTasksSync(dir)}`
        );
        void enable();
        return;
      }
      logForDebugging(
        `[ScheduledTasks] scheduler start() \u2014 enabled=${getScheduledTasksEnabled()}, hasTasks=${hasCronTasksSync()}`
      );
      if (!getScheduledTasksEnabled() && (assistantMode || hasCronTasksSync())) {
        setScheduledTasksEnabled(true);
      }
      if (getScheduledTasksEnabled()) {
        void enable();
        return;
      }
      enablePoll = setInterval(
        (en) => {
          if (getScheduledTasksEnabled()) void en();
        },
        CHECK_INTERVAL_MS,
        enable
      );
      enablePoll.unref?.();
    },
    stop() {
      stopped = true;
      if (enablePoll) {
        clearInterval(enablePoll);
        enablePoll = null;
      }
      if (checkTimer) {
        clearInterval(checkTimer);
        checkTimer = null;
      }
      if (lockProbeTimer) {
        clearInterval(lockProbeTimer);
        lockProbeTimer = null;
      }
      void watcher?.close();
      watcher = null;
      if (isOwner) {
        isOwner = false;
        void releaseSchedulerLock(lockOpts);
      }
    },
    getNextFireTime() {
      let min = Infinity;
      for (const t of nextFireAt.values()) {
        if (t < min) min = t;
      }
      return min === Infinity ? null : min;
    }
  };
}
function buildMissedTaskNotification(missed) {
  const plural = missed.length > 1;
  const header = `The following one-shot scheduled task${plural ? "s were" : " was"} missed while Claude was not running. ${plural ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${plural ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${plural ? "each one" : "it"} now. Only execute if the user confirms.`;
  const blocks = missed.map((t) => {
    const meta = `[${cronToHuman(t.cron)}, created ${new Date(t.createdAt).toLocaleString()}]`;
    const longestRun = (t.prompt.match(/`+/g) ?? []).reduce(
      (max, run) => Math.max(max, run.length),
      0
    );
    const fence = "`".repeat(Math.max(3, longestRun + 1));
    return `${meta}
${fence}
${t.prompt}
${fence}`;
  });
  return `${header}

${blocks.join("\n\n")}`;
}
var CHECK_INTERVAL_MS, FILE_STABILITY_MS, LOCK_PROBE_INTERVAL_MS;
var init_cronScheduler = __esm({
  "src/utils/cronScheduler.ts"() {
    init_state();
    init_analytics();
    init_cron();
    init_cronTasks();
    init_cronTasksLock();
    init_debug();
    CHECK_INTERVAL_MS = 1e3;
    FILE_STABILITY_MS = 300;
    LOCK_PROBE_INTERVAL_MS = 5e3;
  }
});

// src/bridge/inboundMessages.ts
init_imageResizer();
function extractInboundMessageFields(msg) {
  if (msg.type !== "user") return void 0;
  const content = msg.message?.content;
  if (!content) return void 0;
  if (Array.isArray(content) && content.length === 0) return void 0;
  const uuid = "uuid" in msg && typeof msg.uuid === "string" ? msg.uuid : void 0;
  return {
    content: Array.isArray(content) ? normalizeImageBlocks(content) : content,
    uuid
  };
}
function normalizeImageBlocks(blocks) {
  if (!blocks.some(isMalformedBase64Image)) return blocks;
  return blocks.map((block) => {
    if (!isMalformedBase64Image(block)) return block;
    const src = block.source;
    const mediaType = typeof src.mediaType === "string" && src.mediaType ? src.mediaType : detectImageFormatFromBase64(block.source.data);
    return {
      ...block,
      source: {
        type: "base64",
        media_type: mediaType,
        data: block.source.data
      }
    };
  });
}
function isMalformedBase64Image(block) {
  if (block.type !== "image" || block.source?.type !== "base64") return false;
  return !block.source.media_type;
}

// src/utils/permissions/PermissionPromptToolResultSchema.ts
init_v4();
init_debug();
init_lazySchema();
init_PermissionUpdate();
init_PermissionUpdateSchema();
var inputSchema = lazySchema(
  () => v4_default.object({
    tool_name: v4_default.string().describe("The name of the tool requesting permission"),
    input: v4_default.record(v4_default.string(), v4_default.unknown()).describe("The input for the tool"),
    tool_use_id: v4_default.string().optional().describe("The unique tool use request ID")
  })
);
var decisionClassificationField = lazySchema(
  () => v4_default.enum(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)
);
var PermissionAllowResultSchema = lazySchema(
  () => v4_default.object({
    behavior: v4_default.literal("allow"),
    updatedInput: v4_default.record(v4_default.string(), v4_default.unknown()),
    // SDK hosts may send malformed entries; fall back to undefined rather
    // than rejecting the entire allow decision (anthropics/claude-code#29440)
    updatedPermissions: v4_default.array(permissionUpdateSchema()).optional().catch((ctx) => {
      logForDebugging(
        `Malformed updatedPermissions from SDK host ignored: ${ctx.error.issues[0]?.message ?? "unknown"}`,
        { level: "warn" }
      );
      return void 0;
    }),
    toolUseID: v4_default.string().optional(),
    decisionClassification: decisionClassificationField()
  })
);
var PermissionDenyResultSchema = lazySchema(
  () => v4_default.object({
    behavior: v4_default.literal("deny"),
    message: v4_default.string(),
    interrupt: v4_default.boolean().optional(),
    toolUseID: v4_default.string().optional(),
    decisionClassification: decisionClassificationField()
  })
);
var outputSchema = lazySchema(
  () => v4_default.union([PermissionAllowResultSchema(), PermissionDenyResultSchema()])
);
function permissionPromptToolResultToPermissionDecision(result, tool, input, toolUseContext) {
  const decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: tool.name,
    toolResult: result
  };
  if (result.behavior === "allow") {
    const updatedPermissions = result.updatedPermissions;
    if (updatedPermissions) {
      toolUseContext.setAppState((prev) => ({
        ...prev,
        toolPermissionContext: applyPermissionUpdates(
          prev.toolPermissionContext,
          updatedPermissions
        )
      }));
      persistPermissionUpdates(updatedPermissions);
    }
    const updatedInput = Object.keys(result.updatedInput).length > 0 ? result.updatedInput : input;
    return {
      ...result,
      updatedInput,
      decisionReason
    };
  } else if (result.behavior === "deny" && result.interrupt) {
    logForDebugging(
      `SDK permission prompt deny+interrupt: tool=${tool.name} message=${result.message}`
    );
    toolUseContext.abortController.abort();
  }
  return {
    ...result,
    decisionReason
  };
}

// src/cli/structuredIO.ts
init_bun_bundle();
import { randomUUID as randomUUID2 } from "crypto";

// src/entrypoints/sdk/controlSchemas.ts
init_v4();
init_lazySchema();
init_coreSchemas();
var JSONRPCMessagePlaceholder = lazySchema(() => external_exports.unknown());
var SDKHookCallbackMatcherSchema = lazySchema(
  () => external_exports.object({
    matcher: external_exports.string().optional(),
    hookCallbackIds: external_exports.array(external_exports.string()),
    timeout: external_exports.number().optional()
  }).describe("Configuration for matching and routing hook callbacks.")
);
var SDKControlInitializeRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("initialize"),
    hooks: external_exports.record(HookEventSchema(), external_exports.array(SDKHookCallbackMatcherSchema())).optional(),
    sdkMcpServers: external_exports.array(external_exports.string()).optional(),
    jsonSchema: external_exports.record(external_exports.string(), external_exports.unknown()).optional(),
    systemPrompt: external_exports.string().optional(),
    appendSystemPrompt: external_exports.string().optional(),
    agents: external_exports.record(external_exports.string(), AgentDefinitionSchema()).optional(),
    promptSuggestions: external_exports.boolean().optional(),
    agentProgressSummaries: external_exports.boolean().optional()
  }).describe(
    "Initializes the SDK session with hooks, MCP servers, and agent configuration."
  )
);
var SDKControlInitializeResponseSchema = lazySchema(
  () => external_exports.object({
    commands: external_exports.array(SlashCommandSchema()),
    agents: external_exports.array(AgentInfoSchema()),
    output_style: external_exports.string(),
    available_output_styles: external_exports.array(external_exports.string()),
    models: external_exports.array(ModelInfoSchema()),
    account: AccountInfoSchema(),
    pid: external_exports.number().optional().describe("@internal CLI process PID for tmux socket isolation"),
    fast_mode_state: FastModeStateSchema().optional()
  }).describe(
    "Response from session initialization with available commands, models, and account info."
  )
);
var SDKControlInterruptRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("interrupt")
  }).describe("Interrupts the currently running conversation turn.")
);
var SDKControlPermissionRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("can_use_tool"),
    tool_name: external_exports.string(),
    input: external_exports.record(external_exports.string(), external_exports.unknown()),
    permission_suggestions: external_exports.array(PermissionUpdateSchema()).optional(),
    blocked_path: external_exports.string().optional(),
    decision_reason: external_exports.string().optional(),
    title: external_exports.string().optional(),
    display_name: external_exports.string().optional(),
    tool_use_id: external_exports.string(),
    agent_id: external_exports.string().optional(),
    description: external_exports.string().optional()
  }).describe("Requests permission to use a tool with the given input.")
);
var SDKControlSetPermissionModeRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_permission_mode"),
    mode: PermissionModeSchema(),
    ultraplan: external_exports.boolean().optional().describe("@internal CCR ultraplan session marker.")
  }).describe("Sets the permission mode for tool execution handling.")
);
var SDKControlSetModelRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_model"),
    model: external_exports.string().optional()
  }).describe("Sets the model to use for subsequent conversation turns.")
);
var SDKControlSetMaxThinkingTokensRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_max_thinking_tokens"),
    max_thinking_tokens: external_exports.number().nullable()
  }).describe(
    "Sets the maximum number of thinking tokens for extended thinking."
  )
);
var SDKControlMcpStatusRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_status")
  }).describe("Requests the current status of all MCP server connections.")
);
var SDKControlMcpStatusResponseSchema = lazySchema(
  () => external_exports.object({
    mcpServers: external_exports.array(McpServerStatusSchema())
  }).describe(
    "Response containing the current status of all MCP server connections."
  )
);
var SDKControlGetContextUsageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("get_context_usage")
  }).describe(
    "Requests a breakdown of current context window usage by category."
  )
);
var ContextCategorySchema = lazySchema(
  () => external_exports.object({
    name: external_exports.string(),
    tokens: external_exports.number(),
    color: external_exports.string(),
    isDeferred: external_exports.boolean().optional()
  })
);
var ContextGridSquareSchema = lazySchema(
  () => external_exports.object({
    color: external_exports.string(),
    isFilled: external_exports.boolean(),
    categoryName: external_exports.string(),
    tokens: external_exports.number(),
    percentage: external_exports.number(),
    squareFullness: external_exports.number()
  })
);
var SDKControlGetContextUsageResponseSchema = lazySchema(
  () => external_exports.object({
    categories: external_exports.array(ContextCategorySchema()),
    totalTokens: external_exports.number(),
    maxTokens: external_exports.number(),
    rawMaxTokens: external_exports.number(),
    percentage: external_exports.number(),
    gridRows: external_exports.array(external_exports.array(ContextGridSquareSchema())),
    model: external_exports.string(),
    memoryFiles: external_exports.array(
      external_exports.object({
        path: external_exports.string(),
        type: external_exports.string(),
        tokens: external_exports.number()
      })
    ),
    mcpTools: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        serverName: external_exports.string(),
        tokens: external_exports.number(),
        isLoaded: external_exports.boolean().optional()
      })
    ),
    deferredBuiltinTools: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        tokens: external_exports.number(),
        isLoaded: external_exports.boolean()
      })
    ).optional(),
    systemTools: external_exports.array(external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })).optional(),
    systemPromptSections: external_exports.array(external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })).optional(),
    agents: external_exports.array(
      external_exports.object({
        agentType: external_exports.string(),
        source: external_exports.string(),
        tokens: external_exports.number()
      })
    ),
    slashCommands: external_exports.object({
      totalCommands: external_exports.number(),
      includedCommands: external_exports.number(),
      tokens: external_exports.number()
    }).optional(),
    skills: external_exports.object({
      totalSkills: external_exports.number(),
      includedSkills: external_exports.number(),
      tokens: external_exports.number(),
      skillFrontmatter: external_exports.array(
        external_exports.object({
          name: external_exports.string(),
          source: external_exports.string(),
          tokens: external_exports.number()
        })
      )
    }).optional(),
    autoCompactThreshold: external_exports.number().optional(),
    isAutoCompactEnabled: external_exports.boolean(),
    messageBreakdown: external_exports.object({
      toolCallTokens: external_exports.number(),
      toolResultTokens: external_exports.number(),
      attachmentTokens: external_exports.number(),
      assistantMessageTokens: external_exports.number(),
      userMessageTokens: external_exports.number(),
      toolCallsByType: external_exports.array(
        external_exports.object({
          name: external_exports.string(),
          callTokens: external_exports.number(),
          resultTokens: external_exports.number()
        })
      ),
      attachmentsByType: external_exports.array(
        external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })
      )
    }).optional(),
    apiUsage: external_exports.object({
      input_tokens: external_exports.number(),
      output_tokens: external_exports.number(),
      cache_creation_input_tokens: external_exports.number(),
      cache_read_input_tokens: external_exports.number()
    }).nullable()
  }).describe(
    "Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."
  )
);
var SDKControlRewindFilesRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("rewind_files"),
    user_message_id: external_exports.string(),
    dry_run: external_exports.boolean().optional()
  }).describe("Rewinds file changes made since a specific user message.")
);
var SDKControlRewindFilesResponseSchema = lazySchema(
  () => external_exports.object({
    canRewind: external_exports.boolean(),
    error: external_exports.string().optional(),
    filesChanged: external_exports.array(external_exports.string()).optional(),
    insertions: external_exports.number().optional(),
    deletions: external_exports.number().optional()
  }).describe("Result of a rewindFiles operation.")
);
var SDKControlCancelAsyncMessageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("cancel_async_message"),
    message_uuid: external_exports.string()
  }).describe(
    "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution."
  )
);
var SDKControlCancelAsyncMessageResponseSchema = lazySchema(
  () => external_exports.object({
    cancelled: external_exports.boolean()
  }).describe(
    "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued)."
  )
);
var SDKControlSeedReadStateRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("seed_read_state"),
    path: external_exports.string(),
    mtime: external_exports.number()
  }).describe(
    "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context (e.g. by snip) so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path."
  )
);
var SDKHookCallbackRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("hook_callback"),
    callback_id: external_exports.string(),
    input: HookInputSchema(),
    tool_use_id: external_exports.string().optional()
  }).describe("Delivers a hook callback with its input data.")
);
var SDKControlMcpMessageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_message"),
    server_name: external_exports.string(),
    message: JSONRPCMessagePlaceholder()
  }).describe("Sends a JSON-RPC message to a specific MCP server.")
);
var SDKControlMcpSetServersRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_set_servers"),
    servers: external_exports.record(external_exports.string(), McpServerConfigForProcessTransportSchema())
  }).describe("Replaces the set of dynamically managed MCP servers.")
);
var SDKControlMcpSetServersResponseSchema = lazySchema(
  () => external_exports.object({
    added: external_exports.array(external_exports.string()),
    removed: external_exports.array(external_exports.string()),
    errors: external_exports.record(external_exports.string(), external_exports.string())
  }).describe(
    "Result of replacing the set of dynamically managed MCP servers."
  )
);
var SDKControlReloadPluginsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("reload_plugins")
  }).describe(
    "Reloads plugins from disk and returns the refreshed session components."
  )
);
var SDKControlReloadPluginsResponseSchema = lazySchema(
  () => external_exports.object({
    commands: external_exports.array(SlashCommandSchema()),
    agents: external_exports.array(AgentInfoSchema()),
    plugins: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        path: external_exports.string(),
        source: external_exports.string().optional()
      })
    ),
    mcpServers: external_exports.array(McpServerStatusSchema()),
    error_count: external_exports.number()
  }).describe(
    "Refreshed commands, agents, plugins, and MCP server status after reload."
  )
);
var SDKControlMcpReconnectRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_reconnect"),
    serverName: external_exports.string()
  }).describe("Reconnects a disconnected or failed MCP server.")
);
var SDKControlMcpToggleRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_toggle"),
    serverName: external_exports.string(),
    enabled: external_exports.boolean()
  }).describe("Enables or disables an MCP server.")
);
var SDKControlStopTaskRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("stop_task"),
    task_id: external_exports.string()
  }).describe("Stops a running task.")
);
var SDKControlApplyFlagSettingsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("apply_flag_settings"),
    settings: external_exports.record(external_exports.string(), external_exports.unknown())
  }).describe(
    "Merges the provided settings into the flag settings layer, updating the active configuration."
  )
);
var SDKControlGetSettingsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("get_settings")
  }).describe(
    "Returns the effective merged settings and the raw per-source settings."
  )
);
var SDKControlGetSettingsResponseSchema = lazySchema(
  () => external_exports.object({
    effective: external_exports.record(external_exports.string(), external_exports.unknown()),
    sources: external_exports.array(
      external_exports.object({
        source: external_exports.enum([
          "userSettings",
          "projectSettings",
          "localSettings",
          "flagSettings",
          "policySettings"
        ]),
        settings: external_exports.record(external_exports.string(), external_exports.unknown())
      })
    ).describe(
      "Ordered low-to-high priority \u2014 later entries override earlier ones."
    ),
    applied: external_exports.object({
      model: external_exports.string(),
      // String levels only — numeric effort is ant-only and the
      // Zod→proto generator can't emit enum∪number unions.
      effort: external_exports.enum(["low", "medium", "high", "max"]).nullable()
    }).optional().describe(
      "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API."
    )
  }).describe(
    "Effective merged settings plus raw per-source settings in merge order."
  )
);
var SDKControlElicitationRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("elicitation"),
    mcp_server_name: external_exports.string(),
    message: external_exports.string(),
    mode: external_exports.enum(["form", "url"]).optional(),
    url: external_exports.string().optional(),
    elicitation_id: external_exports.string().optional(),
    requested_schema: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  }).describe(
    "Requests the SDK consumer to handle an MCP elicitation (user input request)."
  )
);
var SDKControlElicitationResponseSchema = lazySchema(
  () => external_exports.object({
    action: external_exports.enum(["accept", "decline", "cancel"]),
    content: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  }).describe("Response from the SDK consumer for an elicitation request.")
);
var SDKControlRequestInnerSchema = lazySchema(
  () => external_exports.union([
    SDKControlInterruptRequestSchema(),
    SDKControlPermissionRequestSchema(),
    SDKControlInitializeRequestSchema(),
    SDKControlSetPermissionModeRequestSchema(),
    SDKControlSetModelRequestSchema(),
    SDKControlSetMaxThinkingTokensRequestSchema(),
    SDKControlMcpStatusRequestSchema(),
    SDKControlGetContextUsageRequestSchema(),
    SDKHookCallbackRequestSchema(),
    SDKControlMcpMessageRequestSchema(),
    SDKControlRewindFilesRequestSchema(),
    SDKControlCancelAsyncMessageRequestSchema(),
    SDKControlSeedReadStateRequestSchema(),
    SDKControlMcpSetServersRequestSchema(),
    SDKControlReloadPluginsRequestSchema(),
    SDKControlMcpReconnectRequestSchema(),
    SDKControlMcpToggleRequestSchema(),
    SDKControlStopTaskRequestSchema(),
    SDKControlApplyFlagSettingsRequestSchema(),
    SDKControlGetSettingsRequestSchema(),
    SDKControlElicitationRequestSchema()
  ])
);
var SDKControlRequestSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_request"),
    request_id: external_exports.string(),
    request: SDKControlRequestInnerSchema()
  })
);
var ControlResponseSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("success"),
    request_id: external_exports.string(),
    response: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  })
);
var ControlErrorResponseSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("error"),
    request_id: external_exports.string(),
    error: external_exports.string(),
    pending_permission_requests: external_exports.array(external_exports.lazy(() => SDKControlRequestSchema())).optional()
  })
);
var SDKControlResponseSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_response"),
    response: external_exports.union([ControlResponseSchema(), ControlErrorResponseSchema()])
  })
);
var SDKControlCancelRequestSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_cancel_request"),
    request_id: external_exports.string()
  }).describe("Cancels a currently open control request.")
);
var SDKKeepAliveMessageSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("keep_alive")
  }).describe("Keep-alive message to maintain WebSocket connection.")
);
var SDKUpdateEnvironmentVariablesMessageSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("update_environment_variables"),
    variables: external_exports.record(external_exports.string(), external_exports.string())
  }).describe("Updates environment variables at runtime.")
);
var StdoutMessageSchema = lazySchema(
  () => external_exports.union([
    SDKMessageSchema(),
    SDKStreamlinedTextMessageSchema(),
    SDKStreamlinedToolUseSummaryMessageSchema(),
    SDKPostTurnSummaryMessageSchema(),
    SDKControlResponseSchema(),
    SDKControlRequestSchema(),
    SDKControlCancelRequestSchema(),
    SDKKeepAliveMessageSchema()
  ])
);
var StdinMessageSchema = lazySchema(
  () => external_exports.union([
    SDKUserMessageSchema(),
    SDKControlRequestSchema(),
    SDKControlResponseSchema(),
    SDKKeepAliveMessageSchema(),
    SDKUpdateEnvironmentVariablesMessageSchema()
  ])
);

// src/cli/structuredIO.ts
init_hooks();
init_debug();
init_diagLogs();
init_errors();
init_permissions();
init_process();
init_slowOperations();
init_v4();
init_commandLifecycle();
init_hooks2();
init_PermissionUpdate();
init_slowOperations();
init_stream();

// src/cli/ndjsonSafeStringify.ts
init_slowOperations();
var JS_LINE_TERMINATORS = /\u2028|\u2029/g;
function escapeJsLineTerminators(json) {
  return json.replace(
    JS_LINE_TERMINATORS,
    (c2) => c2 === "\u2028" ? "\\u2028" : "\\u2029"
  );
}
function ndjsonSafeStringify(value) {
  return escapeJsLineTerminators(jsonStringify(value));
}

// src/cli/structuredIO.ts
var SANDBOX_NETWORK_ACCESS_TOOL_NAME = "SandboxNetworkAccess";
function serializeDecisionReason(reason) {
  if (!reason) {
    return void 0;
  }
  if ((feature("BASH_CLASSIFIER") || feature("TRANSCRIPT_CLASSIFIER")) && reason.type === "classifier") {
    return reason.reason;
  }
  switch (reason.type) {
    case "rule":
    case "mode":
    case "subcommandResults":
    case "permissionPromptTool":
      return void 0;
    case "hook":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return reason.reason;
  }
}
function buildRequiresActionDetails(tool, input, toolUseID, requestId) {
  let description;
  try {
    description = tool.getActivityDescription?.(input) ?? tool.getToolUseSummary?.(input) ?? tool.userFacingName(input);
  } catch {
    description = tool.name;
  }
  return {
    tool_name: tool.name,
    action_description: description,
    tool_use_id: toolUseID,
    request_id: requestId,
    input
  };
}
var MAX_RESOLVED_TOOL_USE_IDS = 1e3;
var StructuredIO = class {
  constructor(input, replayUserMessages) {
    this.input = input;
    this.replayUserMessages = replayUserMessages;
    this.input = input;
    this.structuredInput = this.read();
  }
  structuredInput;
  pendingRequests = /* @__PURE__ */ new Map();
  // CCR external_metadata read back on worker start; null when the
  // transport doesn't restore. Assigned by RemoteIO.
  restoredWorkerState = Promise.resolve(null);
  inputClosed = false;
  unexpectedResponseCallback;
  // Tracks tool_use IDs that have been resolved through the normal permission
  // flow (or aborted by a hook). When a duplicate control_response arrives
  // after the original was already handled, this Set prevents the orphan
  // handler from re-processing it — which would push duplicate assistant
  // messages into mutableMessages and cause a 400 "tool_use ids must be unique"
  // error from the API.
  resolvedToolUseIds = /* @__PURE__ */ new Set();
  prependedLines = [];
  onControlRequestSent;
  onControlRequestResolved;
  // sendRequest() and print.ts both enqueue here; the drain loop is the
  // only writer. Prevents control_request from overtaking queued stream_events.
  outbound = new Stream();
  /**
   * Records a tool_use ID as resolved so that late/duplicate control_response
   * messages for the same tool are ignored by the orphan handler.
   */
  trackResolvedToolUseId(request) {
    if (request.request.subtype === "can_use_tool") {
      this.resolvedToolUseIds.add(request.request.tool_use_id);
      if (this.resolvedToolUseIds.size > MAX_RESOLVED_TOOL_USE_IDS) {
        const first = this.resolvedToolUseIds.values().next().value;
        if (first !== void 0) {
          this.resolvedToolUseIds.delete(first);
        }
      }
    }
  }
  /** Flush pending internal events. No-op for non-remote IO. Overridden by RemoteIO. */
  flushInternalEvents() {
    return Promise.resolve();
  }
  /** Internal-event queue depth. Overridden by RemoteIO; zero otherwise. */
  get internalEventsPending() {
    return 0;
  }
  /**
   * Queue a user turn to be yielded before the next message from this.input.
   * Works before iteration starts and mid-stream — read() re-checks
   * prependedLines between each yielded message.
   */
  prependUserMessage(content) {
    this.prependedLines.push(
      jsonStringify({
        type: "user",
        session_id: "",
        message: { role: "user", content },
        parent_tool_use_id: null
      }) + "\n"
    );
  }
  async *read() {
    let content = "";
    const splitAndProcess = async function* () {
      for (; ; ) {
        if (this.prependedLines.length > 0) {
          content = this.prependedLines.join("") + content;
          this.prependedLines = [];
        }
        const newline = content.indexOf("\n");
        if (newline === -1) break;
        const line = content.slice(0, newline);
        content = content.slice(newline + 1);
        const message = await this.processLine(line);
        if (message) {
          logForDiagnosticsNoPII("info", "cli_stdin_message_parsed", {
            type: message.type
          });
          yield message;
        }
      }
    }.bind(this);
    yield* splitAndProcess();
    for await (const block of this.input) {
      content += block;
      yield* splitAndProcess();
    }
    if (content) {
      const message = await this.processLine(content);
      if (message) {
        yield message;
      }
    }
    this.inputClosed = true;
    for (const request of this.pendingRequests.values()) {
      request.reject(
        new Error("Tool permission stream closed before response received")
      );
    }
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map((entry) => entry.request).filter((pr) => pr.request.subtype === "can_use_tool");
  }
  setUnexpectedResponseCallback(callback) {
    this.unexpectedResponseCallback = callback;
  }
  /**
   * Inject a control_response message to resolve a pending permission request.
   * Used by the bridge to feed permission responses from claude.ai into the
   * SDK permission flow.
   *
   * Also sends a control_cancel_request to the SDK consumer so its canUseTool
   * callback is aborted via the signal — otherwise the callback hangs.
   */
  injectControlResponse(response) {
    const requestId = response.response?.request_id;
    if (!requestId) return;
    const request = this.pendingRequests.get(requestId);
    if (!request) return;
    this.trackResolvedToolUseId(request.request);
    this.pendingRequests.delete(requestId);
    void this.write({
      type: "control_cancel_request",
      request_id: requestId
    });
    if (response.response.subtype === "error") {
      request.reject(new Error(response.response.error));
    } else {
      const result = response.response.response;
      if (request.schema) {
        try {
          request.resolve(request.schema.parse(result));
        } catch (error) {
          request.reject(error);
        }
      } else {
        request.resolve({});
      }
    }
  }
  /**
   * Register a callback invoked whenever a can_use_tool control_request
   * is written to stdout. Used by the bridge to forward permission
   * requests to claude.ai.
   */
  setOnControlRequestSent(callback) {
    this.onControlRequestSent = callback;
  }
  /**
   * Register a callback invoked when a can_use_tool control_response arrives
   * from the SDK consumer (via stdin). Used by the bridge to cancel the
   * stale permission prompt on claude.ai when the SDK consumer wins the race.
   */
  setOnControlRequestResolved(callback) {
    this.onControlRequestResolved = callback;
  }
  async processLine(line) {
    if (!line) {
      return void 0;
    }
    try {
      const message = normalizeControlMessageKeys(jsonParse(line));
      if (message.type === "keep_alive") {
        return void 0;
      }
      if (message.type === "update_environment_variables") {
        const keys = Object.keys(message.variables);
        for (const [key, value] of Object.entries(message.variables)) {
          process.env[key] = value;
        }
        logForDebugging(
          `[structuredIO] applied update_environment_variables: ${keys.join(", ")}`
        );
        return void 0;
      }
      if (message.type === "control_response") {
        const uuid = "uuid" in message && typeof message.uuid === "string" ? message.uuid : void 0;
        if (uuid) {
          notifyCommandLifecycle(uuid, "completed");
        }
        const request = this.pendingRequests.get(message.response.request_id);
        if (!request) {
          const responsePayload = message.response.subtype === "success" ? message.response.response : void 0;
          const toolUseID = responsePayload?.toolUseID;
          if (typeof toolUseID === "string" && this.resolvedToolUseIds.has(toolUseID)) {
            logForDebugging(
              `Ignoring duplicate control_response for already-resolved toolUseID=${toolUseID} request_id=${message.response.request_id}`
            );
            return void 0;
          }
          if (this.unexpectedResponseCallback) {
            await this.unexpectedResponseCallback(message);
          }
          return void 0;
        }
        this.trackResolvedToolUseId(request.request);
        this.pendingRequests.delete(message.response.request_id);
        if (request.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) {
          this.onControlRequestResolved(message.response.request_id);
        }
        if (message.response.subtype === "error") {
          request.reject(new Error(message.response.error));
          return void 0;
        }
        const result = message.response.response;
        if (request.schema) {
          try {
            request.resolve(request.schema.parse(result));
          } catch (error) {
            request.reject(error);
          }
        } else {
          request.resolve({});
        }
        if (this.replayUserMessages) {
          return message;
        }
        return void 0;
      }
      if (message.type !== "user" && message.type !== "control_request" && message.type !== "assistant" && message.type !== "system") {
        logForDebugging(`Ignoring unknown message type: ${message.type}`, {
          level: "warn"
        });
        return void 0;
      }
      if (message.type === "control_request") {
        if (!message.request) {
          exitWithMessage(`Error: Missing request on control_request`);
        }
        return message;
      }
      if (message.type === "assistant" || message.type === "system") {
        return message;
      }
      if (message.message.role !== "user") {
        exitWithMessage(
          `Error: Expected message role 'user', got '${message.message.role}'`
        );
      }
      return message;
    } catch (error) {
      console.error(`Error parsing streaming input line: ${line}: ${error}`);
      process.exit(1);
    }
  }
  async write(message) {
    writeToStdout(ndjsonSafeStringify(message) + "\n");
  }
  async sendRequest(request, schema, signal, requestId = randomUUID2()) {
    const message = {
      type: "control_request",
      request_id: requestId,
      request
    };
    if (this.inputClosed) {
      throw new Error("Stream closed");
    }
    if (signal?.aborted) {
      throw new Error("Request aborted");
    }
    this.outbound.enqueue(message);
    if (request.subtype === "can_use_tool" && this.onControlRequestSent) {
      this.onControlRequestSent(message);
    }
    const aborted = () => {
      this.outbound.enqueue({
        type: "control_cancel_request",
        request_id: requestId
      });
      const request2 = this.pendingRequests.get(requestId);
      if (request2) {
        this.trackResolvedToolUseId(request2.request);
        request2.reject(new AbortError());
      }
    };
    if (signal) {
      signal.addEventListener("abort", aborted, {
        once: true
      });
    }
    try {
      return await new Promise((resolve2, reject) => {
        this.pendingRequests.set(requestId, {
          request: {
            type: "control_request",
            request_id: requestId,
            request
          },
          resolve: (result) => {
            resolve2(result);
          },
          reject,
          schema
        });
      });
    } finally {
      if (signal) {
        signal.removeEventListener("abort", aborted);
      }
      this.pendingRequests.delete(requestId);
    }
  }
  createCanUseTool(onPermissionPrompt) {
    return async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => {
      const mainPermissionResult = forceDecision ?? await hasPermissionsToUseTool(
        tool,
        input,
        toolUseContext,
        assistantMessage,
        toolUseID
      );
      if (mainPermissionResult.behavior === "allow" || mainPermissionResult.behavior === "deny") {
        return mainPermissionResult;
      }
      const hookAbortController = new AbortController();
      const parentSignal = toolUseContext.abortController.signal;
      const onParentAbort = () => hookAbortController.abort();
      parentSignal.addEventListener("abort", onParentAbort, { once: true });
      try {
        const hookPromise = executePermissionRequestHooksForSDK(
          tool.name,
          toolUseID,
          input,
          toolUseContext,
          mainPermissionResult.suggestions
        ).then((decision) => ({ source: "hook", decision }));
        const requestId = randomUUID2();
        onPermissionPrompt?.(
          buildRequiresActionDetails(tool, input, toolUseID, requestId)
        );
        const sdkPromise = this.sendRequest(
          {
            subtype: "can_use_tool",
            tool_name: tool.name,
            input,
            permission_suggestions: mainPermissionResult.suggestions,
            blocked_path: mainPermissionResult.blockedPath,
            decision_reason: serializeDecisionReason(
              mainPermissionResult.decisionReason
            ),
            tool_use_id: toolUseID,
            agent_id: toolUseContext.agentId
          },
          outputSchema(),
          hookAbortController.signal,
          requestId
        ).then((result) => ({ source: "sdk", result }));
        const winner = await Promise.race([hookPromise, sdkPromise]);
        if (winner.source === "hook") {
          if (winner.decision) {
            sdkPromise.catch(() => {
            });
            hookAbortController.abort();
            return winner.decision;
          }
          const sdkResult = await sdkPromise;
          return permissionPromptToolResultToPermissionDecision(
            sdkResult.result,
            tool,
            input,
            toolUseContext
          );
        }
        return permissionPromptToolResultToPermissionDecision(
          winner.result,
          tool,
          input,
          toolUseContext
        );
      } catch (error) {
        return permissionPromptToolResultToPermissionDecision(
          {
            behavior: "deny",
            message: `Tool permission request failed: ${error}`,
            toolUseID
          },
          tool,
          input,
          toolUseContext
        );
      } finally {
        if (this.getPendingPermissionRequests().length === 0) {
          notifySessionStateChanged("running");
        }
        parentSignal.removeEventListener("abort", onParentAbort);
      }
    };
  }
  createHookCallback(callbackId, timeout) {
    return {
      type: "callback",
      timeout,
      callback: async (input, toolUseID, abort) => {
        try {
          const result = await this.sendRequest(
            {
              subtype: "hook_callback",
              callback_id: callbackId,
              input,
              tool_use_id: toolUseID || void 0
            },
            hookJSONOutputSchema(),
            abort
          );
          return result;
        } catch (error) {
          console.error(`Error in hook callback ${callbackId}:`, error);
          return {};
        }
      }
    };
  }
  /**
   * Sends an elicitation request to the SDK consumer and returns the response.
   */
  async handleElicitation(serverName, message, requestedSchema, signal, mode, url, elicitationId) {
    try {
      const result = await this.sendRequest(
        {
          subtype: "elicitation",
          mcp_server_name: serverName,
          message,
          mode,
          url,
          elicitation_id: elicitationId,
          requested_schema: requestedSchema
        },
        SDKControlElicitationResponseSchema(),
        signal
      );
      return result;
    } catch {
      return { action: "cancel" };
    }
  }
  /**
   * Creates a SandboxAskCallback that forwards sandbox network permission
   * requests to the SDK host as can_use_tool control_requests.
   *
   * This piggybacks on the existing can_use_tool protocol with a synthetic
   * tool name so that SDK hosts (VS Code, CCR, etc.) can prompt the user
   * for network access without requiring a new protocol subtype.
   */
  createSandboxAskCallback() {
    return async (hostPattern) => {
      try {
        const result = await this.sendRequest(
          {
            subtype: "can_use_tool",
            tool_name: SANDBOX_NETWORK_ACCESS_TOOL_NAME,
            input: { host: hostPattern.host },
            tool_use_id: randomUUID2(),
            description: `Allow network connection to ${hostPattern.host}?`
          },
          outputSchema()
        );
        return result.behavior === "allow";
      } catch {
        return false;
      }
    };
  }
  /**
   * Sends an MCP message to an SDK server and waits for the response
   */
  async sendMcpMessage(serverName, message) {
    const response = await this.sendRequest(
      {
        subtype: "mcp_message",
        server_name: serverName,
        message
      },
      external_exports.object({
        mcp_response: external_exports.any()
      })
    );
    return response.mcp_response;
  }
};
function exitWithMessage(message) {
  console.error(message);
  process.exit(1);
}
async function executePermissionRequestHooksForSDK(toolName, toolUseID, input, toolUseContext, suggestions) {
  const appState = toolUseContext.getAppState();
  const permissionMode = appState.toolPermissionContext.mode;
  const hookGenerator = executePermissionRequestHooks(
    toolName,
    toolUseID,
    input,
    toolUseContext,
    permissionMode,
    suggestions,
    toolUseContext.abortController.signal
  );
  for await (const hookResult of hookGenerator) {
    if (hookResult.permissionRequestResult && (hookResult.permissionRequestResult.behavior === "allow" || hookResult.permissionRequestResult.behavior === "deny")) {
      const decision = hookResult.permissionRequestResult;
      if (decision.behavior === "allow") {
        const finalInput = decision.updatedInput || input;
        const permissionUpdates = decision.updatedPermissions ?? [];
        if (permissionUpdates.length > 0) {
          persistPermissionUpdates(permissionUpdates);
          const currentAppState = toolUseContext.getAppState();
          const updatedContext = applyPermissionUpdates(
            currentAppState.toolPermissionContext,
            permissionUpdates
          );
          toolUseContext.setAppState((prev) => {
            if (prev.toolPermissionContext === updatedContext) return prev;
            return { ...prev, toolPermissionContext: updatedContext };
          });
        }
        return {
          behavior: "allow",
          updatedInput: finalInput,
          userModified: false,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      } else {
        return {
          behavior: "deny",
          message: decision.message || "Permission denied by PermissionRequest hook",
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      }
    }
  }
  return void 0;
}

// src/utils/messages/systemInit.ts
init_bun_bundle();
init_state();
init_outputStyles();
init_constants();
init_auth();
init_cwd();
init_fastMode();
init_settings();
import { randomUUID as randomUUID3 } from "crypto";
function sdkCompatToolName(name) {
  return name === AGENT_TOOL_NAME ? LEGACY_AGENT_TOOL_NAME : name;
}
function buildSystemInitMessage(inputs) {
  const settings = getSettings_DEPRECATED();
  const outputStyle = settings?.outputStyle ?? DEFAULT_OUTPUT_STYLE_NAME;
  const initMessage = {
    type: "system",
    subtype: "init",
    cwd: getCwd(),
    session_id: getSessionId(),
    tools: inputs.tools.map((tool) => sdkCompatToolName(tool.name)),
    mcp_servers: inputs.mcpClients.map((client) => ({
      name: client.name,
      status: client.type
    })),
    model: inputs.model,
    permissionMode: inputs.permissionMode,
    slash_commands: inputs.commands.filter((c2) => c2.userInvocable !== false).map((c2) => c2.name),
    apiKeySource: getAnthropicApiKeyWithSource().source,
    betas: getSdkBetas(),
    claude_code_version: MACRO.VERSION,
    output_style: outputStyle,
    agents: inputs.agents.map((agent) => agent.agentType),
    skills: inputs.skills.filter((s) => s.userInvocable !== false).map((skill) => skill.name),
    plugins: inputs.plugins.map((plugin) => ({
      name: plugin.name,
      path: plugin.path,
      source: plugin.source
    })),
    uuid: randomUUID3()
  };
  if (feature("UDS_INBOX")) {
    ;
    initMessage.messaging_socket_path = (init_udsMessaging(), __toCommonJS(udsMessaging_exports)).getUdsMessagingSocketPath();
  }
  initMessage.fast_mode_state = getFastModeState(inputs.model, inputs.fastMode);
  return initMessage;
}

// src/utils/ultraplan/keyword.ts
var OPEN_TO_CLOSE = {
  "`": "`",
  '"': '"',
  "<": ">",
  "{": "}",
  "[": "]",
  "(": ")",
  "'": "'"
};
function findKeywordTriggerPositions(text, keyword) {
  const re = new RegExp(keyword, "i");
  if (!re.test(text)) return [];
  if (text.startsWith("/")) return [];
  const quotedRanges = [];
  let openQuote = null;
  let openAt = 0;
  const isWord = (ch) => !!ch && /[\p{L}\p{N}_]/u.test(ch);
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (openQuote) {
      if (openQuote === "[" && ch === "[") {
        openAt = i;
        continue;
      }
      if (ch !== OPEN_TO_CLOSE[openQuote]) continue;
      if (openQuote === "'" && isWord(text[i + 1])) continue;
      quotedRanges.push({ start: openAt, end: i + 1 });
      openQuote = null;
    } else if (ch === "<" && i + 1 < text.length && /[a-zA-Z/]/.test(text[i + 1]) || ch === "'" && !isWord(text[i - 1]) || ch !== "<" && ch !== "'" && ch in OPEN_TO_CLOSE) {
      openQuote = ch;
      openAt = i;
    }
  }
  const positions = [];
  const wordRe = new RegExp(`\\b${keyword}\\b`, "gi");
  const matches = text.matchAll(wordRe);
  for (const match of matches) {
    if (match.index === void 0) continue;
    const start = match.index;
    const end = start + match[0].length;
    if (quotedRanges.some((r) => start >= r.start && start < r.end)) continue;
    const before = text[start - 1];
    const after = text[end];
    if (before === "/" || before === "\\" || before === "-") continue;
    if (after === "/" || after === "\\" || after === "-" || after === "?")
      continue;
    if (after === "." && isWord(text[end + 1])) continue;
    positions.push({ word: match[0], start, end });
  }
  return positions;
}
function findUltraplanTriggerPositions(text) {
  return findKeywordTriggerPositions(text, "ultraplan");
}
function findUltrareviewTriggerPositions(text) {
  return findKeywordTriggerPositions(text, "ultrareview");
}
function hasUltraplanKeyword(text) {
  return findUltraplanTriggerPositions(text).length > 0;
}
function replaceUltraplanKeyword(text) {
  const [trigger] = findUltraplanTriggerPositions(text);
  if (!trigger) return text;
  const before = text.slice(0, trigger.start);
  const after = text.slice(trigger.end);
  if (!(before + after).trim()) return "";
  return before + trigger.word.slice("ultra".length) + after;
}

// src/utils/processUserInput/processUserInput.ts
init_bun_bundle();
init_analytics();
init_messages();
init_commands();
init_textInputTypes();
init_attachments();
init_generators();
init_hooks2();
init_imageResizer();
init_imageStore();
init_messages();
init_queryProfiler();
init_slashCommandParsing();
import { randomUUID as randomUUID5 } from "crypto";

// src/utils/processUserInput/processTextPrompt.ts
init_state();
init_analytics();
init_messages();
init_events();
init_sessionTracing();
import { randomUUID as randomUUID4 } from "crypto";

// src/utils/userPromptKeywords.ts
function matchesNegativeKeyword(input) {
  const lowerInput = input.toLowerCase();
  const negativePattern = /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/;
  return negativePattern.test(lowerInput);
}
function matchesKeepGoingKeyword(input) {
  const lowerInput = input.toLowerCase().trim();
  if (lowerInput === "continue") {
    return true;
  }
  const keepGoingPattern = /\b(keep going|go on)\b/;
  return keepGoingPattern.test(lowerInput);
}

// src/utils/processUserInput/processTextPrompt.ts
function processTextPrompt(input, imageContentBlocks, imagePasteIds, attachmentMessages, uuid, permissionMode, isMeta) {
  const promptId = randomUUID4();
  setPromptId(promptId);
  const userPromptText = typeof input === "string" ? input : input.find((block) => block.type === "text")?.text || "";
  startInteractionSpan(userPromptText);
  const otelPromptText = typeof input === "string" ? input : input.findLast((block) => block.type === "text")?.text || "";
  if (otelPromptText) {
    void logOTelEvent("user_prompt", {
      prompt_length: String(otelPromptText.length),
      prompt: redactIfDisabled(otelPromptText),
      "prompt.id": promptId
    });
  }
  const isNegative = matchesNegativeKeyword(userPromptText);
  const isKeepGoing = matchesKeepGoingKeyword(userPromptText);
  logEvent("tengu_input_prompt", {
    is_negative: isNegative,
    is_keep_going: isKeepGoing
  });
  if (imageContentBlocks.length > 0) {
    const textContent = typeof input === "string" ? input.trim() ? [{ type: "text", text: input }] : [] : input;
    const userMessage2 = createUserMessage({
      content: [...textContent, ...imageContentBlocks],
      uuid,
      imagePasteIds: imagePasteIds.length > 0 ? imagePasteIds : void 0,
      permissionMode,
      isMeta: isMeta || void 0
    });
    return {
      messages: [userMessage2, ...attachmentMessages],
      shouldQuery: true
    };
  }
  const userMessage = createUserMessage({
    content: input,
    uuid,
    permissionMode,
    isMeta: isMeta || void 0
  });
  return {
    messages: [userMessage, ...attachmentMessages],
    shouldQuery: true
  };
}

// src/utils/processUserInput/processUserInput.ts
async function processUserInput({
  input,
  preExpansionInput,
  mode,
  setToolJSX,
  context,
  pastedContents,
  ideSelection,
  messages,
  setUserInputOnProcessing,
  uuid,
  isAlreadyProcessing,
  querySource,
  canUseTool,
  skipSlashCommands,
  bridgeOrigin,
  isMeta,
  skipAttachments
}) {
  const inputString = typeof input === "string" ? input : null;
  if (mode === "prompt" && inputString !== null && !isMeta) {
    setUserInputOnProcessing?.(inputString);
  }
  queryCheckpoint("query_process_user_input_base_start");
  const appState = context.getAppState();
  const result = await processUserInputBase(
    input,
    mode,
    setToolJSX,
    context,
    pastedContents,
    ideSelection,
    messages,
    uuid,
    isAlreadyProcessing,
    querySource,
    canUseTool,
    appState.toolPermissionContext.mode,
    skipSlashCommands,
    bridgeOrigin,
    isMeta,
    skipAttachments,
    preExpansionInput
  );
  queryCheckpoint("query_process_user_input_base_end");
  if (!result.shouldQuery) {
    return result;
  }
  queryCheckpoint("query_hooks_start");
  const inputMessage = getContentText(input) || "";
  for await (const hookResult of executeUserPromptSubmitHooks(
    inputMessage,
    appState.toolPermissionContext.mode,
    context,
    context.requestPrompt
  )) {
    if (hookResult.message?.type === "progress") {
      continue;
    }
    if (hookResult.blockingError) {
      const blockingMessage = getUserPromptSubmitHookBlockingMessage(
        hookResult.blockingError
      );
      return {
        messages: [
          // TODO: Make this an attachment message
          createSystemMessage(
            `${blockingMessage}

Original prompt: ${input}`,
            "warning"
          )
        ],
        shouldQuery: false,
        allowedTools: result.allowedTools
      };
    }
    if (hookResult.preventContinuation) {
      const message = hookResult.stopReason ? `Operation stopped by hook: ${hookResult.stopReason}` : "Operation stopped by hook";
      result.messages.push(
        createUserMessage({
          content: message
        })
      );
      result.shouldQuery = false;
      return result;
    }
    if (hookResult.additionalContexts && hookResult.additionalContexts.length > 0) {
      result.messages.push(
        createAttachmentMessage({
          type: "hook_additional_context",
          content: hookResult.additionalContexts.map(applyTruncation),
          hookName: "UserPromptSubmit",
          toolUseID: `hook-${randomUUID5()}`,
          hookEvent: "UserPromptSubmit"
        })
      );
    }
    if (hookResult.message) {
      switch (hookResult.message.attachment.type) {
        case "hook_success":
          if (!hookResult.message.attachment.content) {
            break;
          }
          result.messages.push({
            ...hookResult.message,
            attachment: {
              ...hookResult.message.attachment,
              content: applyTruncation(hookResult.message.attachment.content)
            }
          });
          break;
        default:
          result.messages.push(hookResult.message);
          break;
      }
    }
  }
  queryCheckpoint("query_hooks_end");
  return result;
}
var MAX_HOOK_OUTPUT_LENGTH = 1e4;
function applyTruncation(content) {
  if (content.length > MAX_HOOK_OUTPUT_LENGTH) {
    return `${content.substring(0, MAX_HOOK_OUTPUT_LENGTH)}\u2026 [output truncated - exceeded ${MAX_HOOK_OUTPUT_LENGTH} characters]`;
  }
  return content;
}
async function processUserInputBase(input, mode, setToolJSX, context, pastedContents, ideSelection, messages, uuid, isAlreadyProcessing, querySource, canUseTool, permissionMode, skipSlashCommands, bridgeOrigin, isMeta, skipAttachments, preExpansionInput) {
  let inputString = null;
  let precedingInputBlocks = [];
  const imageMetadataTexts = [];
  let normalizedInput = input;
  if (typeof input === "string") {
    inputString = input;
  } else if (input.length > 0) {
    queryCheckpoint("query_image_processing_start");
    const processedBlocks = [];
    for (const block of input) {
      if (block.type === "image") {
        const resized = await maybeResizeAndDownsampleImageBlock(block);
        if (resized.dimensions) {
          const metadataText = createImageMetadataText(resized.dimensions);
          if (metadataText) {
            imageMetadataTexts.push(metadataText);
          }
        }
        processedBlocks.push(resized.block);
      } else {
        processedBlocks.push(block);
      }
    }
    normalizedInput = processedBlocks;
    queryCheckpoint("query_image_processing_end");
    const lastBlock = processedBlocks[processedBlocks.length - 1];
    if (lastBlock?.type === "text") {
      inputString = lastBlock.text;
      precedingInputBlocks = processedBlocks.slice(0, -1);
    } else {
      precedingInputBlocks = processedBlocks;
    }
  }
  if (inputString === null && mode !== "prompt") {
    throw new Error(`Mode: ${mode} requires a string input.`);
  }
  const imageContents = pastedContents ? Object.values(pastedContents).filter(isValidImagePaste) : [];
  const imagePasteIds = imageContents.map((img) => img.id);
  const storedImagePaths = pastedContents ? await storeImages(pastedContents) : /* @__PURE__ */ new Map();
  queryCheckpoint("query_pasted_image_processing_start");
  const imageProcessingResults = await Promise.all(
    imageContents.map(async (pastedImage) => {
      const imageBlock = {
        type: "image",
        source: {
          type: "base64",
          media_type: pastedImage.mediaType || "image/png",
          data: pastedImage.content
        }
      };
      logEvent("tengu_pasted_image_resize_attempt", {
        original_size_bytes: pastedImage.content.length
      });
      const resized = await maybeResizeAndDownsampleImageBlock(imageBlock);
      return {
        resized,
        originalDimensions: pastedImage.dimensions,
        sourcePath: pastedImage.sourcePath ?? storedImagePaths.get(pastedImage.id)
      };
    })
  );
  const imageContentBlocks = [];
  for (const {
    resized,
    originalDimensions,
    sourcePath
  } of imageProcessingResults) {
    if (resized.dimensions) {
      const metadataText = createImageMetadataText(
        resized.dimensions,
        sourcePath
      );
      if (metadataText) {
        imageMetadataTexts.push(metadataText);
      }
    } else if (originalDimensions) {
      const metadataText = createImageMetadataText(
        originalDimensions,
        sourcePath
      );
      if (metadataText) {
        imageMetadataTexts.push(metadataText);
      }
    } else if (sourcePath) {
      imageMetadataTexts.push(`[Image source: ${sourcePath}]`);
    }
    imageContentBlocks.push(resized.block);
  }
  queryCheckpoint("query_pasted_image_processing_end");
  let effectiveSkipSlash = skipSlashCommands;
  if (bridgeOrigin && inputString !== null && inputString.startsWith("/")) {
    const parsed = parseSlashCommand(inputString);
    const cmd = parsed ? findCommand(parsed.commandName, context.options.commands) : void 0;
    if (cmd) {
      if (isBridgeSafeCommand(cmd)) {
        effectiveSkipSlash = false;
      } else {
        const msg = `/${getCommandName(cmd)} isn't available over Remote Control.`;
        return {
          messages: [
            createUserMessage({ content: inputString, uuid }),
            createCommandInputMessage(
              `<local-command-stdout>${msg}</local-command-stdout>`
            )
          ],
          shouldQuery: false,
          resultText: msg
        };
      }
    }
  }
  if (feature("ULTRAPLAN") && mode === "prompt" && !context.options.isNonInteractiveSession && inputString !== null && !effectiveSkipSlash && !inputString.startsWith("/") && !context.getAppState().ultraplanSessionUrl && !context.getAppState().ultraplanLaunching && hasUltraplanKeyword(preExpansionInput ?? inputString)) {
    logEvent("tengu_ultraplan_keyword", {});
    const rewritten = replaceUltraplanKeyword(inputString).trim();
    const { processSlashCommand } = await import("./processSlashCommand-56IXQLIY.mjs");
    const slashResult = await processSlashCommand(
      `/ultraplan ${rewritten}`,
      precedingInputBlocks,
      imageContentBlocks,
      [],
      context,
      setToolJSX,
      uuid,
      isAlreadyProcessing,
      canUseTool
    );
    return addImageMetadataMessage(slashResult, imageMetadataTexts);
  }
  const shouldExtractAttachments = !skipAttachments && inputString !== null && (mode !== "prompt" || effectiveSkipSlash || !inputString.startsWith("/"));
  queryCheckpoint("query_attachment_loading_start");
  const attachmentMessages = shouldExtractAttachments ? await toArray(
    getAttachmentMessages(
      inputString,
      context,
      ideSelection ?? null,
      [],
      // queuedCommands - handled by query.ts for mid-turn attachments
      messages,
      querySource
    )
  ) : [];
  queryCheckpoint("query_attachment_loading_end");
  if (inputString !== null && mode === "bash") {
    const { processBashCommand } = await import("./processBashCommand-ZRJQ3OUA.mjs");
    return addImageMetadataMessage(
      await processBashCommand(
        inputString,
        precedingInputBlocks,
        attachmentMessages,
        context,
        setToolJSX
      ),
      imageMetadataTexts
    );
  }
  if (inputString !== null && !effectiveSkipSlash && inputString.startsWith("/")) {
    const { processSlashCommand } = await import("./processSlashCommand-56IXQLIY.mjs");
    const slashResult = await processSlashCommand(
      inputString,
      precedingInputBlocks,
      imageContentBlocks,
      attachmentMessages,
      context,
      setToolJSX,
      uuid,
      isAlreadyProcessing,
      canUseTool
    );
    return addImageMetadataMessage(slashResult, imageMetadataTexts);
  }
  if (inputString !== null && mode === "prompt") {
    const trimmedInput = inputString.trim();
    const agentMention = attachmentMessages.find(
      (m) => m.attachment.type === "agent_mention"
    );
    if (agentMention) {
      const agentMentionString = `@agent-${agentMention.attachment.agentType}`;
      const isSubagentOnly = trimmedInput === agentMentionString;
      const isPrefix = trimmedInput.startsWith(agentMentionString) && !isSubagentOnly;
      logEvent("tengu_subagent_at_mention", {
        is_subagent_only: isSubagentOnly,
        is_prefix: isPrefix
      });
    }
  }
  return addImageMetadataMessage(
    processTextPrompt(
      normalizedInput,
      imageContentBlocks,
      imagePasteIds,
      attachmentMessages,
      uuid,
      permissionMode,
      isMeta
    ),
    imageMetadataTexts
  );
}
function addImageMetadataMessage(result, imageMetadataTexts) {
  if (imageMetadataTexts.length > 0) {
    result.messages.push(
      createUserMessage({
        content: imageMetadataTexts.map((text) => ({ type: "text", text })),
        isMeta: true
      })
    );
  }
  return result;
}

// src/utils/plugins/reconciler.ts
init_isEqual();
init_state();
init_debug();
init_errors();
init_file();
init_git();
init_log();
init_marketplaceManager();
init_schemas();
import { isAbsolute, resolve } from "path";
function diffMarketplaces(declared, materialized, opts) {
  const missing = [];
  const sourceChanged = [];
  const upToDate = [];
  for (const [name, intent] of Object.entries(declared)) {
    const state = materialized[name];
    const normalizedIntent = normalizeSource(intent.source, opts?.projectRoot);
    if (!state) {
      missing.push(name);
    } else if (intent.sourceIsFallback) {
      upToDate.push(name);
    } else if (!isEqual_default(normalizedIntent, state.source)) {
      sourceChanged.push({
        name,
        declaredSource: normalizedIntent,
        materializedSource: state.source
      });
    } else {
      upToDate.push(name);
    }
  }
  return { missing, sourceChanged, upToDate };
}
async function reconcileMarketplaces(opts) {
  const declared = getDeclaredMarketplaces();
  if (Object.keys(declared).length === 0) {
    return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  }
  let materialized;
  try {
    materialized = await loadKnownMarketplacesConfig();
  } catch (e) {
    logError(e);
    materialized = {};
  }
  const diff = diffMarketplaces(declared, materialized, {
    projectRoot: getOriginalCwd()
  });
  const work = [
    ...diff.missing.map(
      (name) => ({
        name,
        source: normalizeSource(declared[name].source),
        action: "install"
      })
    ),
    ...diff.sourceChanged.map(
      ({ name, declaredSource }) => ({
        name,
        source: declaredSource,
        action: "update"
      })
    )
  ];
  const skipped = [];
  const toProcess = [];
  for (const item of work) {
    if (opts?.skip?.(item.name, item.source)) {
      skipped.push(item.name);
      continue;
    }
    if (item.action === "update" && isLocalMarketplaceSource(item.source) && !await pathExists(item.source.path)) {
      logForDebugging(
        `[reconcile] '${item.name}' declared path does not exist; keeping materialized entry`
      );
      skipped.push(item.name);
      continue;
    }
    toProcess.push(item);
  }
  if (toProcess.length === 0) {
    return {
      installed: [],
      updated: [],
      failed: [],
      upToDate: diff.upToDate,
      skipped
    };
  }
  logForDebugging(
    `[reconcile] ${toProcess.length} marketplace(s): ${toProcess.map((w) => `${w.name}(${w.action})`).join(", ")}`
  );
  const installed = [];
  const updated = [];
  const failed = [];
  for (let i = 0; i < toProcess.length; i++) {
    const { name, source, action } = toProcess[i];
    opts?.onProgress?.({
      type: "installing",
      name,
      action,
      index: i + 1,
      total: toProcess.length
    });
    try {
      const result = await addMarketplaceSource(source);
      if (action === "install") installed.push(name);
      else updated.push(name);
      opts?.onProgress?.({
        type: "installed",
        name,
        alreadyMaterialized: result.alreadyMaterialized
      });
    } catch (e) {
      const error = errorMessage(e);
      failed.push({ name, error });
      opts?.onProgress?.({ type: "failed", name, error });
      logError(e);
    }
  }
  return { installed, updated, failed, upToDate: diff.upToDate, skipped };
}
function normalizeSource(source, projectRoot) {
  if ((source.source === "directory" || source.source === "file") && !isAbsolute(source.path)) {
    const base = projectRoot ?? getOriginalCwd();
    const canonicalRoot = findCanonicalGitRoot(base);
    return {
      ...source,
      path: resolve(canonicalRoot ?? base, source.path)
    };
  }
  return source;
}

export {
  extractInboundMessageFields,
  sdkCompatToolName,
  buildSystemInitMessage,
  MessageSelector,
  selectableUserMessagesFilter,
  messagesAfterAreOnlySynthetic,
  MessageSelector_exports,
  init_MessageSelector,
  findUltraplanTriggerPositions,
  findUltrareviewTriggerPositions,
  processUserInput,
  outputSchema,
  permissionPromptToolResultToPermissionDecision,
  ndjsonSafeStringify,
  SANDBOX_NETWORK_ACCESS_TOOL_NAME,
  StructuredIO,
  diffMarketplaces,
  reconcileMarketplaces,
  getCronJitterConfig,
  cronJitterConfig_exports,
  init_cronJitterConfig,
  createCronScheduler,
  cronScheduler_exports,
  init_cronScheduler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVNlbGVjdG9yLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvY3JvbkppdHRlckNvbmZpZy50cyIsICIuLi8uLi9zcmMvdXRpbHMvY3JvblRhc2tzTG9jay50cyIsICIuLi8uLi9zcmMvdXRpbHMvY3JvblNjaGVkdWxlci50cyIsICIuLi8uLi9zcmMvYnJpZGdlL2luYm91bmRNZXNzYWdlcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRTY2hlbWEudHMiLCAiLi4vLi4vc3JjL2NsaS9zdHJ1Y3R1cmVkSU8udHMiLCAiLi4vLi4vc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sU2NoZW1hcy50cyIsICIuLi8uLi9zcmMvY2xpL25kanNvblNhZmVTdHJpbmdpZnkudHMiLCAiLi4vLi4vc3JjL3V0aWxzL21lc3NhZ2VzL3N5c3RlbUluaXQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3VsdHJhcGxhbi9rZXl3b3JkLnRzIiwgIi4uLy4uL3NyYy91dGlscy9wcm9jZXNzVXNlcklucHV0L3Byb2Nlc3NVc2VySW5wdXQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3Byb2Nlc3NVc2VySW5wdXQvcHJvY2Vzc1RleHRQcm9tcHQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3VzZXJQcm9tcHRLZXl3b3Jkcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvcGx1Z2lucy9yZWNvbmNpbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7XG4gIENvbnRlbnRCbG9ja1BhcmFtLFxuICBUZXh0QmxvY2tQYXJhbSxcbn0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL2luZGV4Lm1qcydcbmltcG9ydCB7IHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQge1xuICB0eXBlIERpZmZTdGF0cyxcbiAgZmlsZUhpc3RvcnlDYW5SZXN0b3JlLFxuICBmaWxlSGlzdG9yeUVuYWJsZWQsXG4gIGZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzLFxufSBmcm9tICdzcmMvdXRpbHMvZmlsZUhpc3RvcnkuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJ3NyYy91dGlscy9sb2cuanMnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICcuLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nLCB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7XG4gIE1lc3NhZ2UsXG4gIFBhcnRpYWxDb21wYWN0RGlyZWN0aW9uLFxuICBVc2VyTWVzc2FnZSxcbn0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IHN0cmlwRGlzcGxheVRhZ3MgfSBmcm9tICcuLi91dGlscy9kaXNwbGF5VGFncy5qcydcbmltcG9ydCB7XG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxuICBleHRyYWN0VGFnLFxuICBpc0VtcHR5TWVzc2FnZVRleHQsXG4gIGlzU3ludGhldGljTWVzc2FnZSxcbiAgaXNUb29sVXNlUmVzdWx0TWVzc2FnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyB0eXBlIE9wdGlvbldpdGhEZXNjcmlwdGlvbiwgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lci5qcydcblxuZnVuY3Rpb24gaXNUZXh0QmxvY2soYmxvY2s6IENvbnRlbnRCbG9ja1BhcmFtKTogYmxvY2sgaXMgVGV4dEJsb2NrUGFyYW0ge1xuICByZXR1cm4gYmxvY2sudHlwZSA9PT0gJ3RleHQnXG59XG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgdHlwZSB7IEZpbGVFZGl0T3V0cHV0IH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVFZGl0VG9vbC90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgT3V0cHV0IGFzIEZpbGVXcml0ZVRvb2xPdXRwdXQgfSBmcm9tICdzcmMvdG9vbHMvRmlsZVdyaXRlVG9vbC9GaWxlV3JpdGVUb29sLmpzJ1xuaW1wb3J0IHtcbiAgQkFTSF9TVERFUlJfVEFHLFxuICBCQVNIX1NURE9VVF9UQUcsXG4gIENPTU1BTkRfTUVTU0FHRV9UQUcsXG4gIExPQ0FMX0NPTU1BTkRfU1RERVJSX1RBRyxcbiAgTE9DQUxfQ09NTUFORF9TVERPVVRfVEFHLFxuICBUQVNLX05PVElGSUNBVElPTl9UQUcsXG4gIFRFQU1NQVRFX01FU1NBR0VfVEFHLFxuICBUSUNLX1RBRyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZVRpbWVBZ28sIHRydW5jYXRlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lLmpzJ1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaXZpZGVyLmpzJ1xuXG50eXBlIFJlc3RvcmVPcHRpb24gPVxuICB8ICdib3RoJ1xuICB8ICdjb252ZXJzYXRpb24nXG4gIHwgJ2NvZGUnXG4gIHwgJ3N1bW1hcml6ZSdcbiAgfCAnc3VtbWFyaXplX3VwX3RvJ1xuICB8ICduZXZlcm1pbmQnXG5cbmZ1bmN0aW9uIGlzU3VtbWFyaXplT3B0aW9uKFxuICBvcHRpb246IFJlc3RvcmVPcHRpb24gfCBudWxsLFxuKTogb3B0aW9uIGlzICdzdW1tYXJpemUnIHwgJ3N1bW1hcml6ZV91cF90bycge1xuICByZXR1cm4gb3B0aW9uID09PSAnc3VtbWFyaXplJyB8fCBvcHRpb24gPT09ICdzdW1tYXJpemVfdXBfdG8nXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgb25QcmVSZXN0b3JlOiAoKSA9PiB2b2lkXG4gIG9uUmVzdG9yZU1lc3NhZ2U6IChtZXNzYWdlOiBVc2VyTWVzc2FnZSkgPT4gUHJvbWlzZTx2b2lkPlxuICBvblJlc3RvcmVDb2RlOiAobWVzc2FnZTogVXNlck1lc3NhZ2UpID0+IFByb21pc2U8dm9pZD5cbiAgb25TdW1tYXJpemU6IChcbiAgICBtZXNzYWdlOiBVc2VyTWVzc2FnZSxcbiAgICBmZWVkYmFjaz86IHN0cmluZyxcbiAgICBkaXJlY3Rpb24/OiBQYXJ0aWFsQ29tcGFjdERpcmVjdGlvbixcbiAgKSA9PiBQcm9taXNlPHZvaWQ+XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgLyoqIFNraXAgcGljay1saXN0LCBsYW5kIG9uIGNvbmZpcm0uIENhbGxlciByYW4gc2tpcC1jaGVjayBmaXJzdC4gRXNjIGNsb3NlcyBmdWxseSAobm8gYmFjay10by1saXN0KS4gKi9cbiAgcHJlc2VsZWN0ZWRNZXNzYWdlPzogVXNlck1lc3NhZ2Vcbn1cblxuY29uc3QgTUFYX1ZJU0lCTEVfTUVTU0FHRVMgPSA3XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlU2VsZWN0b3Ioe1xuICBtZXNzYWdlcyxcbiAgb25QcmVSZXN0b3JlLFxuICBvblJlc3RvcmVNZXNzYWdlLFxuICBvblJlc3RvcmVDb2RlLFxuICBvblN1bW1hcml6ZSxcbiAgb25DbG9zZSxcbiAgcHJlc2VsZWN0ZWRNZXNzYWdlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBmaWxlSGlzdG9yeSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5maWxlSGlzdG9yeSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcbiAgY29uc3QgaXNGaWxlSGlzdG9yeUVuYWJsZWQgPSBmaWxlSGlzdG9yeUVuYWJsZWQoKVxuXG4gIC8vIEFkZCBjdXJyZW50IHByb21wdCBhcyBhIHZpcnR1YWwgbWVzc2FnZVxuICBjb25zdCBjdXJyZW50VVVJRCA9IHVzZU1lbW8ocmFuZG9tVVVJRCwgW10pXG4gIGNvbnN0IG1lc3NhZ2VPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICAuLi5tZXNzYWdlcy5maWx0ZXIoc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlciksXG4gICAgICB7XG4gICAgICAgIC4uLmNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgfSksXG4gICAgICAgIHV1aWQ6IGN1cnJlbnRVVUlELFxuICAgICAgfSBhcyBVc2VyTWVzc2FnZSxcbiAgICBdLFxuICAgIFttZXNzYWdlcywgY3VycmVudFVVSURdLFxuICApXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKG1lc3NhZ2VPcHRpb25zLmxlbmd0aCAtIDEpXG5cbiAgLy8gT3JpZW50IHRoZSBzZWxlY3RlZCBtZXNzYWdlIGFzIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb3B0aW9uc1xuICBjb25zdCBmaXJzdFZpc2libGVJbmRleCA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgTWF0aC5taW4oXG4gICAgICBzZWxlY3RlZEluZGV4IC0gTWF0aC5mbG9vcihNQVhfVklTSUJMRV9NRVNTQUdFUyAvIDIpLFxuICAgICAgbWVzc2FnZU9wdGlvbnMubGVuZ3RoIC0gTUFYX1ZJU0lCTEVfTUVTU0FHRVMsXG4gICAgKSxcbiAgKVxuXG4gIGNvbnN0IGhhc01lc3NhZ2VzVG9TZWxlY3QgPSBtZXNzYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgY29uc3QgW21lc3NhZ2VUb1Jlc3RvcmUsIHNldE1lc3NhZ2VUb1Jlc3RvcmVdID0gdXNlU3RhdGU8XG4gICAgVXNlck1lc3NhZ2UgfCB1bmRlZmluZWRcbiAgPihwcmVzZWxlY3RlZE1lc3NhZ2UpXG4gIGNvbnN0IFtkaWZmU3RhdHNGb3JSZXN0b3JlLCBzZXREaWZmU3RhdHNGb3JSZXN0b3JlXSA9IHVzZVN0YXRlPFxuICAgIERpZmZTdGF0cyB8IHVuZGVmaW5lZFxuICA+KHVuZGVmaW5lZClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJlc2VsZWN0ZWRNZXNzYWdlIHx8ICFpc0ZpbGVIaXN0b3J5RW5hYmxlZCkgcmV0dXJuXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgdm9pZCBmaWxlSGlzdG9yeUdldERpZmZTdGF0cyhmaWxlSGlzdG9yeSwgcHJlc2VsZWN0ZWRNZXNzYWdlLnV1aWQpLnRoZW4oXG4gICAgICBzdGF0cyA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXREaWZmU3RhdHNGb3JSZXN0b3JlKHN0YXRzKVxuICAgICAgfSxcbiAgICApXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtwcmVzZWxlY3RlZE1lc3NhZ2UsIGlzRmlsZUhpc3RvcnlFbmFibGVkLCBmaWxlSGlzdG9yeV0pXG5cbiAgY29uc3QgW2lzUmVzdG9yaW5nLCBzZXRJc1Jlc3RvcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Jlc3RvcmluZ09wdGlvbiwgc2V0UmVzdG9yaW5nT3B0aW9uXSA9IHVzZVN0YXRlPFJlc3RvcmVPcHRpb24gfCBudWxsPihcbiAgICBudWxsLFxuICApXG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RvcmVPcHRpb24sIHNldFNlbGVjdGVkUmVzdG9yZU9wdGlvbl0gPVxuICAgIHVzZVN0YXRlPFJlc3RvcmVPcHRpb24+KCdib3RoJylcbiAgLy8gUGVyLW9wdGlvbiBmZWVkYmFjayBzdGF0ZTsgU2VsZWN0J3MgaW50ZXJuYWwgaW5wdXRWYWx1ZXMgTWFwIHBlcnNpc3RzXG4gIC8vIHBlci1vcHRpb24gdGV4dCBpbmRlcGVuZGVudGx5LCBzbyBzaGFyaW5nIG9uZSB2YXJpYWJsZSB3b3VsZCBkZXN5bmMuXG4gIGNvbnN0IFtzdW1tYXJpemVGcm9tRmVlZGJhY2ssIHNldFN1bW1hcml6ZUZyb21GZWVkYmFja10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N1bW1hcml6ZVVwVG9GZWVkYmFjaywgc2V0U3VtbWFyaXplVXBUb0ZlZWRiYWNrXSA9IHVzZVN0YXRlKCcnKVxuXG4gIC8vIEdlbmVyYXRlIG9wdGlvbnMgd2l0aCBzdW1tYXJpemUgYXMgaW5wdXQgdHlwZSBmb3IgaW5saW5lIGNvbnRleHRcbiAgZnVuY3Rpb24gZ2V0UmVzdG9yZU9wdGlvbnMoXG4gICAgY2FuUmVzdG9yZUNvZGU6IGJvb2xlYW4sXG4gICk6IE9wdGlvbldpdGhEZXNjcmlwdGlvbjxSZXN0b3JlT3B0aW9uPltdIHtcbiAgICBjb25zdCBiYXNlT3B0aW9uczogT3B0aW9uV2l0aERlc2NyaXB0aW9uPFJlc3RvcmVPcHRpb24+W10gPSBjYW5SZXN0b3JlQ29kZVxuICAgICAgPyBbXG4gICAgICAgICAgeyB2YWx1ZTogJ2JvdGgnLCBsYWJlbDogJ1Jlc3RvcmUgY29kZSBhbmQgY29udmVyc2F0aW9uJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdjb252ZXJzYXRpb24nLCBsYWJlbDogJ1Jlc3RvcmUgY29udmVyc2F0aW9uJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdjb2RlJywgbGFiZWw6ICdSZXN0b3JlIGNvZGUnIH0sXG4gICAgICAgIF1cbiAgICAgIDogW3sgdmFsdWU6ICdjb252ZXJzYXRpb24nLCBsYWJlbDogJ1Jlc3RvcmUgY29udmVyc2F0aW9uJyB9XVxuXG4gICAgY29uc3Qgc3VtbWFyaXplSW5wdXRQcm9wcyA9IHtcbiAgICAgIHR5cGU6ICdpbnB1dCcgYXMgY29uc3QsXG4gICAgICBwbGFjZWhvbGRlcjogJ2FkZCBjb250ZXh0IChvcHRpb25hbCknLFxuICAgICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICAgIGFsbG93RW1wdHlTdWJtaXRUb0NhbmNlbDogdHJ1ZSxcbiAgICAgIHNob3dMYWJlbFdpdGhWYWx1ZTogdHJ1ZSxcbiAgICAgIGxhYmVsVmFsdWVTZXBhcmF0b3I6ICc6ICcsXG4gICAgfVxuICAgIGJhc2VPcHRpb25zLnB1c2goe1xuICAgICAgdmFsdWU6ICdzdW1tYXJpemUnLFxuICAgICAgbGFiZWw6ICdTdW1tYXJpemUgZnJvbSBoZXJlJyxcbiAgICAgIC4uLnN1bW1hcml6ZUlucHV0UHJvcHMsXG4gICAgICBvbkNoYW5nZTogc2V0U3VtbWFyaXplRnJvbUZlZWRiYWNrLFxuICAgIH0pXG4gICAgaWYgKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcpIHtcbiAgICAgIGJhc2VPcHRpb25zLnB1c2goe1xuICAgICAgICB2YWx1ZTogJ3N1bW1hcml6ZV91cF90bycsXG4gICAgICAgIGxhYmVsOiAnU3VtbWFyaXplIHVwIHRvIGhlcmUnLFxuICAgICAgICAuLi5zdW1tYXJpemVJbnB1dFByb3BzLFxuICAgICAgICBvbkNoYW5nZTogc2V0U3VtbWFyaXplVXBUb0ZlZWRiYWNrLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBiYXNlT3B0aW9ucy5wdXNoKHsgdmFsdWU6ICduZXZlcm1pbmQnLCBsYWJlbDogJ05ldmVyIG1pbmQnIH0pXG4gICAgcmV0dXJuIGJhc2VPcHRpb25zXG4gIH1cblxuICAvLyBMb2cgd2hlbiBzZWxlY3RvciBpcyBvcGVuZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfbWVzc2FnZV9zZWxlY3Rvcl9vcGVuZWQnLCB7fSlcbiAgfSwgW10pXG5cbiAgLy8gSGVscGVyIHRvIHJlc3RvcmUgY29udmVyc2F0aW9uIHdpdGhvdXQgY29uZmlybWF0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVDb252ZXJzYXRpb25EaXJlY3RseShtZXNzYWdlOiBVc2VyTWVzc2FnZSkge1xuICAgIG9uUHJlUmVzdG9yZSgpXG4gICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgYXdhaXQgb25SZXN0b3JlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgc2V0SXNSZXN0b3JpbmcoZmFsc2UpXG4gICAgICBvbkNsb3NlKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgICBzZXRJc1Jlc3RvcmluZyhmYWxzZSlcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gcmVzdG9yZSB0aGUgY29udmVyc2F0aW9uOlxcbiR7ZXJyb3J9YClcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWxlY3QobWVzc2FnZTogVXNlck1lc3NhZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IG1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSlcbiAgICBjb25zdCBpbmRleEZyb21FbmQgPSBtZXNzYWdlcy5sZW5ndGggLSAxIC0gaW5kZXhcblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tZXNzYWdlX3NlbGVjdG9yX3NlbGVjdGVkJywge1xuICAgICAgaW5kZXhfZnJvbV9lbmQ6IGluZGV4RnJvbUVuZCxcbiAgICAgIG1lc3NhZ2VfdHlwZTpcbiAgICAgICAgbWVzc2FnZS50eXBlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICBpc19jdXJyZW50X3Byb21wdDogZmFsc2UsXG4gICAgfSlcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIG1lc3NhZ2UgaXMgbm90IGZvdW5kXG4gICAgaWYgKCFtZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzRmlsZUhpc3RvcnlFbmFibGVkKSB7XG4gICAgICBhd2FpdCByZXN0b3JlQ29udmVyc2F0aW9uRGlyZWN0bHkobWVzc2FnZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpZmZTdGF0cyA9IGF3YWl0IGZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzKGZpbGVIaXN0b3J5LCBtZXNzYWdlLnV1aWQpXG4gICAgc2V0TWVzc2FnZVRvUmVzdG9yZShtZXNzYWdlKVxuICAgIHNldERpZmZTdGF0c0ZvclJlc3RvcmUoZGlmZlN0YXRzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TZWxlY3RSZXN0b3JlT3B0aW9uKG9wdGlvbjogUmVzdG9yZU9wdGlvbikge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tZXNzYWdlX3NlbGVjdG9yX3Jlc3RvcmVfb3B0aW9uX3NlbGVjdGVkJywge1xuICAgICAgb3B0aW9uOlxuICAgICAgICBvcHRpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIGlmICghbWVzc2FnZVRvUmVzdG9yZSkge1xuICAgICAgc2V0RXJyb3IoJ01lc3NhZ2Ugbm90IGZvdW5kLicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKG9wdGlvbiA9PT0gJ25ldmVybWluZCcpIHtcbiAgICAgIGlmIChwcmVzZWxlY3RlZE1lc3NhZ2UpIG9uQ2xvc2UoKVxuICAgICAgZWxzZSBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1N1bW1hcml6ZU9wdGlvbihvcHRpb24pKSB7XG4gICAgICBvblByZVJlc3RvcmUoKVxuICAgICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICAgIHNldFJlc3RvcmluZ09wdGlvbihvcHRpb24pXG4gICAgICBzZXRFcnJvcih1bmRlZmluZWQpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvcHRpb24gPT09ICdzdW1tYXJpemVfdXBfdG8nID8gJ3VwX3RvJyA6ICdmcm9tJ1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9XG4gICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3VwX3RvJ1xuICAgICAgICAgICAgPyBzdW1tYXJpemVVcFRvRmVlZGJhY2tcbiAgICAgICAgICAgIDogc3VtbWFyaXplRnJvbUZlZWRiYWNrXG4gICAgICAgICAgKS50cmltKCkgfHwgdW5kZWZpbmVkXG4gICAgICAgIGF3YWl0IG9uU3VtbWFyaXplKG1lc3NhZ2VUb1Jlc3RvcmUsIGZlZWRiYWNrLCBkaXJlY3Rpb24pXG4gICAgICAgIHNldElzUmVzdG9yaW5nKGZhbHNlKVxuICAgICAgICBzZXRSZXN0b3JpbmdPcHRpb24obnVsbClcbiAgICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICAgIG9uQ2xvc2UoKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgICAgIHNldElzUmVzdG9yaW5nKGZhbHNlKVxuICAgICAgICBzZXRSZXN0b3JpbmdPcHRpb24obnVsbClcbiAgICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gc3VtbWFyaXplOlxcbiR7ZXJyb3J9YClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uUHJlUmVzdG9yZSgpXG4gICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcih1bmRlZmluZWQpXG5cbiAgICBsZXQgY29kZUVycm9yOiBFcnJvciB8IG51bGwgPSBudWxsXG4gICAgbGV0IGNvbnZlcnNhdGlvbkVycm9yOiBFcnJvciB8IG51bGwgPSBudWxsXG5cbiAgICBpZiAob3B0aW9uID09PSAnY29kZScgfHwgb3B0aW9uID09PSAnYm90aCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG9uUmVzdG9yZUNvZGUobWVzc2FnZVRvUmVzdG9yZSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvZGVFcnJvciA9IGVycm9yIGFzIEVycm9yXG4gICAgICAgIGxvZ0Vycm9yKGNvZGVFcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9uID09PSAnY29udmVyc2F0aW9uJyB8fCBvcHRpb24gPT09ICdib3RoJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgb25SZXN0b3JlTWVzc2FnZShtZXNzYWdlVG9SZXN0b3JlKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udmVyc2F0aW9uRXJyb3IgPSBlcnJvciBhcyBFcnJvclxuICAgICAgICBsb2dFcnJvcihjb252ZXJzYXRpb25FcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJc1Jlc3RvcmluZyhmYWxzZSlcbiAgICBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcblxuICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICBpZiAoY29udmVyc2F0aW9uRXJyb3IgJiYgY29kZUVycm9yKSB7XG4gICAgICBzZXRFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byByZXN0b3JlIHRoZSBjb252ZXJzYXRpb24gYW5kIGNvZGU6XFxuJHtjb252ZXJzYXRpb25FcnJvcn1cXG4ke2NvZGVFcnJvcn1gLFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29udmVyc2F0aW9uRXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gcmVzdG9yZSB0aGUgY29udmVyc2F0aW9uOlxcbiR7Y29udmVyc2F0aW9uRXJyb3J9YClcbiAgICB9IGVsc2UgaWYgKGNvZGVFcnJvcikge1xuICAgICAgc2V0RXJyb3IoYEZhaWxlZCB0byByZXN0b3JlIHRoZSBjb2RlOlxcbiR7Y29kZUVycm9yfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN1Y2Nlc3MgLSBjbG9zZSB0aGUgc2VsZWN0b3JcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgY29uc3QgaGFuZGxlRXNjYXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlVG9SZXN0b3JlICYmICFwcmVzZWxlY3RlZE1lc3NhZ2UpIHtcbiAgICAgIC8vIEdvIGJhY2sgdG8gbWVzc2FnZSBsaXN0IGluc3RlYWQgb2YgY2xvc2luZyBlbnRpcmVseVxuICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X21lc3NhZ2Vfc2VsZWN0b3JfY2FuY2VsbGVkJywge30pXG4gICAgb25DbG9zZSgpXG4gIH0sIFtvbkNsb3NlLCBtZXNzYWdlVG9SZXN0b3JlLCBwcmVzZWxlY3RlZE1lc3NhZ2VdKVxuXG4gIGNvbnN0IG1vdmVVcCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMSkpLFxuICAgIFtdLFxuICApXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT5cbiAgICAgIHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1pbihtZXNzYWdlT3B0aW9ucy5sZW5ndGggLSAxLCBwcmV2ICsgMSkpLFxuICAgIFttZXNzYWdlT3B0aW9ucy5sZW5ndGhdLFxuICApXG4gIGNvbnN0IGp1bXBUb1RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNlbGVjdGVkSW5kZXgoMCksIFtdKVxuICBjb25zdCBqdW1wVG9Cb3R0b20gPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBzZXRTZWxlY3RlZEluZGV4KG1lc3NhZ2VPcHRpb25zLmxlbmd0aCAtIDEpLFxuICAgIFttZXNzYWdlT3B0aW9ucy5sZW5ndGhdLFxuICApXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEN1cnJlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBtZXNzYWdlT3B0aW9uc1tzZWxlY3RlZEluZGV4XVxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdm9pZCBoYW5kbGVTZWxlY3Qoc2VsZWN0ZWQpXG4gICAgfVxuICB9LCBbbWVzc2FnZU9wdGlvbnMsIHNlbGVjdGVkSW5kZXgsIGhhbmRsZVNlbGVjdF0pXG5cbiAgLy8gRXNjYXBlIHRvIGNsb3NlIC0gdXNlcyBDb25maXJtYXRpb24gY29udGV4dCB3aGVyZSBlc2NhcGUgaXMgYm91bmRcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUVzY2FwZSwge1xuICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgIGlzQWN0aXZlOiAhbWVzc2FnZVRvUmVzdG9yZSxcbiAgfSlcblxuICAvLyBNZXNzYWdlIHNlbGVjdG9yIG5hdmlnYXRpb24ga2V5YmluZGluZ3NcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ21lc3NhZ2VTZWxlY3Rvcjp1cCc6IG1vdmVVcCxcbiAgICAgICdtZXNzYWdlU2VsZWN0b3I6ZG93bic6IG1vdmVEb3duLFxuICAgICAgJ21lc3NhZ2VTZWxlY3Rvcjp0b3AnOiBqdW1wVG9Ub3AsXG4gICAgICAnbWVzc2FnZVNlbGVjdG9yOmJvdHRvbSc6IGp1bXBUb0JvdHRvbSxcbiAgICAgICdtZXNzYWdlU2VsZWN0b3I6c2VsZWN0JzogaGFuZGxlU2VsZWN0Q3VycmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdNZXNzYWdlU2VsZWN0b3InLFxuICAgICAgaXNBY3RpdmU6XG4gICAgICAgICFpc1Jlc3RvcmluZyAmJiAhZXJyb3IgJiYgIW1lc3NhZ2VUb1Jlc3RvcmUgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdCxcbiAgICB9LFxuICApXG5cbiAgY29uc3QgW2ZpbGVIaXN0b3J5TWV0YWRhdGEsIHNldEZpbGVIaXN0b3J5TWV0YWRhdGFdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPG51bWJlciwgRGlmZlN0YXRzPlxuICA+KHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGVIaXN0b3J5TWV0YWRhdGEoKSB7XG4gICAgICBpZiAoIWlzRmlsZUhpc3RvcnlFbmFibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gTG9hZCBmaWxlIHNuYXBzaG90IG1ldGFkYXRhXG4gICAgICB2b2lkIFByb21pc2UuYWxsKFxuICAgICAgICBtZXNzYWdlT3B0aW9ucy5tYXAoYXN5bmMgKHVzZXJNZXNzYWdlLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodXNlck1lc3NhZ2UudXVpZCAhPT0gY3VycmVudFVVSUQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhblJlc3RvcmUgPSBmaWxlSGlzdG9yeUNhblJlc3RvcmUoXG4gICAgICAgICAgICAgIGZpbGVIaXN0b3J5LFxuICAgICAgICAgICAgICB1c2VyTWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXNlck1lc3NhZ2UgPSBtZXNzYWdlT3B0aW9ucy5hdChpdGVtSW5kZXggKyAxKVxuICAgICAgICAgICAgY29uc3QgZGlmZlN0YXRzID0gY2FuUmVzdG9yZVxuICAgICAgICAgICAgICA/IGNvbXB1dGVEaWZmU3RhdHNCZXR3ZWVuTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlLnV1aWQsXG4gICAgICAgICAgICAgICAgICBuZXh0VXNlck1lc3NhZ2U/LnV1aWQgIT09IGN1cnJlbnRVVUlEXG4gICAgICAgICAgICAgICAgICAgID8gbmV4dFVzZXJNZXNzYWdlPy51dWlkXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgICAgaWYgKGRpZmZTdGF0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNldEZpbGVIaXN0b3J5TWV0YWRhdGEocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW2l0ZW1JbmRleF06IGRpZmZTdGF0cyxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRGaWxlSGlzdG9yeU1ldGFkYXRhKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtpdGVtSW5kZXhdOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICAgIHZvaWQgbG9hZEZpbGVIaXN0b3J5TWV0YWRhdGEoKVxuICB9LCBbbWVzc2FnZU9wdGlvbnMsIG1lc3NhZ2VzLCBjdXJyZW50VVVJRCwgZmlsZUhpc3RvcnksIGlzRmlsZUhpc3RvcnlFbmFibGVkXSlcblxuICBjb25zdCBjYW5SZXN0b3JlQ29kZSA9XG4gICAgaXNGaWxlSGlzdG9yeUVuYWJsZWQgJiZcbiAgICBkaWZmU3RhdHNGb3JSZXN0b3JlPy5maWxlc0NoYW5nZWQgJiZcbiAgICBkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZC5sZW5ndGggPiAwXG4gIGNvbnN0IHNob3dQaWNrTGlzdCA9XG4gICAgIWVycm9yICYmICFtZXNzYWdlVG9SZXN0b3JlICYmICFwcmVzZWxlY3RlZE1lc3NhZ2UgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8RGl2aWRlciBjb2xvcj1cInN1Z2dlc3Rpb25cIiAvPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luWD17MX0gZ2FwPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInN1Z2dlc3Rpb25cIj5cbiAgICAgICAgICBSZXdpbmRcbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5FcnJvcjoge2Vycm9yfTwvVGV4dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFoYXNNZXNzYWdlc1RvU2VsZWN0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQ+Tm90aGluZyB0byByZXdpbmQgdG8geWV0LjwvVGV4dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFlcnJvciAmJiBtZXNzYWdlVG9SZXN0b3JlICYmIGhhc01lc3NhZ2VzVG9TZWxlY3QgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgQ29uZmlybSB5b3Ugd2FudCB0byByZXN0b3JleycgJ31cbiAgICAgICAgICAgICAgeyFkaWZmU3RhdHNGb3JSZXN0b3JlICYmICd0aGUgY29udmVyc2F0aW9uICd9dG8gdGhlIHBvaW50IGJlZm9yZVxuICAgICAgICAgICAgICB5b3Ugc2VudCB0aGlzIG1lc3NhZ2U6XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17MX1cbiAgICAgICAgICAgICAgYm9yZGVyU3R5bGU9XCJzaW5nbGVcIlxuICAgICAgICAgICAgICBib3JkZXJSaWdodD17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlclRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbT17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlckxlZnQ9e3RydWV9XG4gICAgICAgICAgICAgIGJvcmRlckxlZnREaW1Db2xvclxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VXNlck1lc3NhZ2VPcHRpb25cbiAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZT17bWVzc2FnZVRvUmVzdG9yZX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICh7Zm9ybWF0UmVsYXRpdmVUaW1lQWdvKG5ldyBEYXRlKG1lc3NhZ2VUb1Jlc3RvcmUudGltZXN0YW1wKSl9KVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxSZXN0b3JlT3B0aW9uRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0b3JlT3B0aW9uPXtzZWxlY3RlZFJlc3RvcmVPcHRpb259XG4gICAgICAgICAgICAgIGNhblJlc3RvcmVDb2RlPXshIWNhblJlc3RvcmVDb2RlfVxuICAgICAgICAgICAgICBkaWZmU3RhdHNGb3JSZXN0b3JlPXtkaWZmU3RhdHNGb3JSZXN0b3JlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtpc1Jlc3RvcmluZyAmJiBpc1N1bW1hcml6ZU9wdGlvbihyZXN0b3JpbmdPcHRpb24pID8gKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPFRleHQ+U3VtbWFyaXppbmfigKY8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzUmVzdG9yaW5nfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldFJlc3RvcmVPcHRpb25zKCEhY2FuUmVzdG9yZUNvZGUpfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtjYW5SZXN0b3JlQ29kZSA/ICdib3RoJyA6ICdjb252ZXJzYXRpb24nfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3ZhbHVlID0+XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJlc3RvcmVPcHRpb24odmFsdWUgYXMgUmVzdG9yZU9wdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+XG4gICAgICAgICAgICAgICAgICBvblNlbGVjdFJlc3RvcmVPcHRpb24odmFsdWUgYXMgUmVzdG9yZU9wdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+XG4gICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBvbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2NhblJlc3RvcmVDb2RlICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30gUmV3aW5kaW5nIGRvZXMgbm90IGFmZmVjdCBmaWxlcyBlZGl0ZWRcbiAgICAgICAgICAgICAgICAgIG1hbnVhbGx5IG9yIHZpYSBiYXNoLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd1BpY2tMaXN0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2lzRmlsZUhpc3RvcnlFbmFibGVkID8gKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBSZXN0b3JlIHRoZSBjb2RlIGFuZC9vciBjb252ZXJzYXRpb24gdG8gdGhlIHBvaW50IGJlZm9yZeKAplxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBSZXN0b3JlIGFuZCBmb3JrIHRoZSBjb252ZXJzYXRpb24gdG8gdGhlIHBvaW50IGJlZm9yZeKAplxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHttZXNzYWdlT3B0aW9uc1xuICAgICAgICAgICAgICAgIC5zbGljZShcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlSW5kZXggKyBNQVhfVklTSUJMRV9NRVNTQUdFUyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcCgobXNnLCB2aXNpYmxlT3B0aW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gZmlyc3RWaXNpYmxlSW5kZXggKyB2aXNpYmxlT3B0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBvcHRpb25JbmRleCA9PT0gc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gbXNnLnV1aWQgPT09IGN1cnJlbnRVVUlEXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhTG9hZGVkID0gb3B0aW9uSW5kZXggaW4gZmlsZUhpc3RvcnlNZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBmaWxlSGlzdG9yeU1ldGFkYXRhW29wdGlvbkluZGV4XVxuICAgICAgICAgICAgICAgICAgY29uc3QgbnVtRmlsZXNDaGFuZ2VkID1cbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE/LmZpbGVzQ2hhbmdlZCAmJiBtZXRhZGF0YS5maWxlc0NoYW5nZWQubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e21zZy51dWlkfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17aXNGaWxlSGlzdG9yeUVuYWJsZWQgPyAzIDogMn1cbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezJ9IG1pbldpZHRoPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInBlcm1pc3Npb25cIiBib2xkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWd1cmVzLnBvaW50ZXJ9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+eycgICd9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MX0gaGVpZ2h0PXsxfSBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlck1lc3NhZ2VPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZT17bXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudD17aXNDdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZpbGVIaXN0b3J5RW5hYmxlZCAmJiBtZXRhZGF0YUxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXsxfSBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGFkYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfSBjb2xvcj1cImluYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge251bUZpbGVzQ2hhbmdlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtudW1GaWxlc0NoYW5nZWQgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuZmlsZXNDaGFuZ2VkIVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cGF0aC5iYXNlbmFtZShtZXRhZGF0YS5maWxlc0NoYW5nZWQhWzBdKX0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7bnVtRmlsZXNDaGFuZ2VkfSBmaWxlcyBjaGFuZ2VkIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWZmU3RhdHNUZXh0IGRpZmZTdGF0cz17bWV0YWRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5ObyBjb2RlIGNoYW5nZXM8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWd1cmVzLndhcm5pbmd9IE5vIGNvZGUgcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFtZXNzYWdlVG9SZXN0b3JlICYmIChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHshZXJyb3IgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdCAmJiAnRW50ZXIgdG8gY29udGludWUgwrcgJ31Fc2MgdG9cbiAgICAgICAgICAgICAgICBleGl0XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXRSZXN0b3JlT3B0aW9uQ29udmVyc2F0aW9uVGV4dChvcHRpb246IFJlc3RvcmVPcHRpb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKG9wdGlvbikge1xuICAgIGNhc2UgJ3N1bW1hcml6ZSc6XG4gICAgICByZXR1cm4gJ01lc3NhZ2VzIGFmdGVyIHRoaXMgcG9pbnQgd2lsbCBiZSBzdW1tYXJpemVkLidcbiAgICBjYXNlICdzdW1tYXJpemVfdXBfdG8nOlxuICAgICAgcmV0dXJuICdQcmVjZWRpbmcgbWVzc2FnZXMgd2lsbCBiZSBzdW1tYXJpemVkLiBUaGlzIGFuZCBzdWJzZXF1ZW50IG1lc3NhZ2VzIHdpbGwgcmVtYWluIHVuY2hhbmdlZCDigJQgeW91IHdpbGwgc3RheSBhdCB0aGUgZW5kIG9mIHRoZSBjb252ZXJzYXRpb24uJ1xuICAgIGNhc2UgJ2JvdGgnOlxuICAgIGNhc2UgJ2NvbnZlcnNhdGlvbic6XG4gICAgICByZXR1cm4gJ1RoZSBjb252ZXJzYXRpb24gd2lsbCBiZSBmb3JrZWQuJ1xuICAgIGNhc2UgJ2NvZGUnOlxuICAgIGNhc2UgJ25ldmVybWluZCc6XG4gICAgICByZXR1cm4gJ1RoZSBjb252ZXJzYXRpb24gd2lsbCBiZSB1bmNoYW5nZWQuJ1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlc3RvcmVPcHRpb25EZXNjcmlwdGlvbih7XG4gIHNlbGVjdGVkUmVzdG9yZU9wdGlvbixcbiAgY2FuUmVzdG9yZUNvZGUsXG4gIGRpZmZTdGF0c0ZvclJlc3RvcmUsXG59OiB7XG4gIHNlbGVjdGVkUmVzdG9yZU9wdGlvbjogUmVzdG9yZU9wdGlvblxuICBjYW5SZXN0b3JlQ29kZTogYm9vbGVhblxuICBkaWZmU3RhdHNGb3JSZXN0b3JlOiBEaWZmU3RhdHMgfCB1bmRlZmluZWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzaG93Q29kZVJlc3RvcmUgPVxuICAgIGNhblJlc3RvcmVDb2RlICYmXG4gICAgKHNlbGVjdGVkUmVzdG9yZU9wdGlvbiA9PT0gJ2JvdGgnIHx8IHNlbGVjdGVkUmVzdG9yZU9wdGlvbiA9PT0gJ2NvZGUnKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAge2dldFJlc3RvcmVPcHRpb25Db252ZXJzYXRpb25UZXh0KHNlbGVjdGVkUmVzdG9yZU9wdGlvbil9XG4gICAgICA8L1RleHQ+XG4gICAgICB7IWlzU3VtbWFyaXplT3B0aW9uKHNlbGVjdGVkUmVzdG9yZU9wdGlvbikgJiZcbiAgICAgICAgKHNob3dDb2RlUmVzdG9yZSA/IChcbiAgICAgICAgICA8UmVzdG9yZUNvZGVDb25maXJtYXRpb24gZGlmZlN0YXRzRm9yUmVzdG9yZT17ZGlmZlN0YXRzRm9yUmVzdG9yZX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5UaGUgY29kZSB3aWxsIGJlIHVuY2hhbmdlZC48L1RleHQ+XG4gICAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIFJlc3RvcmVDb2RlQ29uZmlybWF0aW9uKHtcbiAgZGlmZlN0YXRzRm9yUmVzdG9yZSxcbn06IHtcbiAgZGlmZlN0YXRzRm9yUmVzdG9yZTogRGlmZlN0YXRzIHwgdW5kZWZpbmVkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgaWYgKGRpZmZTdGF0c0ZvclJlc3RvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBpZiAoXG4gICAgIWRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkIHx8XG4gICAgIWRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzBdXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBkaW1Db2xvcj5UaGUgY29kZSBoYXMgbm90IGNoYW5nZWQgKG5vdGhpbmcgd2lsbCBiZSByZXN0b3JlZCkuPC9UZXh0PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG51bUZpbGVzQ2hhbmdlZCA9IGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkLmxlbmd0aFxuXG4gIGxldCBmaWxlTGFiZWwgPSAnJ1xuICBpZiAobnVtRmlsZXNDaGFuZ2VkID09PSAxKSB7XG4gICAgZmlsZUxhYmVsID0gcGF0aC5iYXNlbmFtZShkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZFswXSB8fCAnJylcbiAgfSBlbHNlIGlmIChudW1GaWxlc0NoYW5nZWQgPT09IDIpIHtcbiAgICBjb25zdCBmaWxlMSA9IHBhdGguYmFzZW5hbWUoZGlmZlN0YXRzRm9yUmVzdG9yZS5maWxlc0NoYW5nZWRbMF0gfHwgJycpXG4gICAgY29uc3QgZmlsZTIgPSBwYXRoLmJhc2VuYW1lKGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzFdIHx8ICcnKVxuICAgIGZpbGVMYWJlbCA9IGAke2ZpbGUxfSBhbmQgJHtmaWxlMn1gXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZTEgPSBwYXRoLmJhc2VuYW1lKGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzBdIHx8ICcnKVxuICAgIGZpbGVMYWJlbCA9IGAke2ZpbGUxfSBhbmQgJHtkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZC5sZW5ndGggLSAxfSBvdGhlciBmaWxlc2BcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICBUaGUgY29kZSB3aWxsIGJlIHJlc3RvcmVkeycgJ31cbiAgICAgICAgPERpZmZTdGF0c1RleHQgZGlmZlN0YXRzPXtkaWZmU3RhdHNGb3JSZXN0b3JlfSAvPiBpbiB7ZmlsZUxhYmVsfS5cbiAgICAgIDwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEaWZmU3RhdHNUZXh0KHtcbiAgZGlmZlN0YXRzLFxufToge1xuICBkaWZmU3RhdHM6IERpZmZTdGF0cyB8IHVuZGVmaW5lZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmICghZGlmZlN0YXRzIHx8ICFkaWZmU3RhdHMuZmlsZXNDaGFuZ2VkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZkFkZGVkV29yZFwiPit7ZGlmZlN0YXRzLmluc2VydGlvbnN9IDwvVGV4dD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZlJlbW92ZWRXb3JkXCI+LXtkaWZmU3RhdHMuZGVsZXRpb25zfTwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBVc2VyTWVzc2FnZU9wdGlvbih7XG4gIHVzZXJNZXNzYWdlLFxuICBjb2xvcixcbiAgZGltQ29sb3IsXG4gIGlzQ3VycmVudCxcbiAgcGFkZGluZ1JpZ2h0LFxufToge1xuICB1c2VyTWVzc2FnZTogVXNlck1lc3NhZ2VcbiAgY29sb3I/OiBrZXlvZiBUaGVtZVxuICBkaW1Db2xvcj86IGJvb2xlYW5cbiAgaXNDdXJyZW50OiBib29sZWFuXG4gIHBhZGRpbmdSaWdodD86IG51bWJlclxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgaWYgKGlzQ3VycmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8VGV4dCBpdGFsaWMgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICAgIChjdXJyZW50KVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gdXNlck1lc3NhZ2UubWVzc2FnZS5jb250ZW50XG4gIGNvbnN0IGxhc3RCbG9jayA9XG4gICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnID8gbnVsbCA6IGNvbnRlbnRbY29udGVudC5sZW5ndGggLSAxXVxuICBjb25zdCByYXdNZXNzYWdlVGV4dCA9XG4gICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IGNvbnRlbnQudHJpbSgpXG4gICAgICA6IGxhc3RCbG9jayAmJiBpc1RleHRCbG9jayhsYXN0QmxvY2spXG4gICAgICAgID8gbGFzdEJsb2NrLnRleHQudHJpbSgpXG4gICAgICAgIDogJyhubyBwcm9tcHQpJ1xuXG4gIC8vIFN0cmlwIGRpc3BsYXktdW5mcmllbmRseSB0YWdzIChsaWtlIDxpZGVfb3BlbmVkX2ZpbGU+KSBiZWZvcmUgc2hvd2luZyBpbiB0aGUgbGlzdFxuICBjb25zdCBtZXNzYWdlVGV4dCA9IHN0cmlwRGlzcGxheVRhZ3MocmF3TWVzc2FnZVRleHQpXG5cbiAgaWYgKGlzRW1wdHlNZXNzYWdlVGV4dChtZXNzYWdlVGV4dCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIDxUZXh0IGl0YWxpYyBjb2xvcj17Y29sb3J9IGRpbUNvbG9yPXtkaW1Db2xvcn0+XG4gICAgICAgICAgKChlbXB0eSBtZXNzYWdlKSlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gQmFzaCBpbnB1dHNcbiAgaWYgKG1lc3NhZ2VUZXh0LmluY2x1ZGVzKCc8YmFzaC1pbnB1dD4nKSkge1xuICAgIGNvbnN0IGlucHV0ID0gZXh0cmFjdFRhZyhtZXNzYWdlVGV4dCwgJ2Jhc2gtaW5wdXQnKVxuICAgIGlmIChpbnB1dCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJiYXNoQm9yZGVyXCI+ITwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J9IGRpbUNvbG9yPXtkaW1Db2xvcn0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLy8gU2tpbGxzIGFuZCBzbGFzaCBjb21tYW5kc1xuICBpZiAobWVzc2FnZVRleHQuaW5jbHVkZXMoYDwke0NPTU1BTkRfTUVTU0FHRV9UQUd9PmApKSB7XG4gICAgY29uc3QgY29tbWFuZE1lc3NhZ2UgPSBleHRyYWN0VGFnKG1lc3NhZ2VUZXh0LCBDT01NQU5EX01FU1NBR0VfVEFHKVxuICAgIGNvbnN0IGFyZ3MgPSBleHRyYWN0VGFnKG1lc3NhZ2VUZXh0LCAnY29tbWFuZC1hcmdzJylcbiAgICBjb25zdCBpc1NraWxsRm9ybWF0ID0gZXh0cmFjdFRhZyhtZXNzYWdlVGV4dCwgJ3NraWxsLWZvcm1hdCcpID09PSAndHJ1ZSdcbiAgICBpZiAoY29tbWFuZE1lc3NhZ2UpIHtcbiAgICAgIGlmIChpc1NraWxsRm9ybWF0KSB7XG4gICAgICAgIC8vIFNraWxsczogRGlzcGxheSBhcyBcIlNraWxsKG5hbWUpXCJcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtjb2xvcn0gZGltQ29sb3I9e2RpbUNvbG9yfT5cbiAgICAgICAgICAgICAgU2tpbGwoe2NvbW1hbmRNZXNzYWdlfSlcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2xhc2ggY29tbWFuZHM6IEFkZCBcIi9cIiBwcmVmaXggYW5kIGluY2x1ZGUgYXJnc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICAgICAgICAve2NvbW1hbmRNZXNzYWdlfSB7YXJnc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXIgcHJvbXB0c1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPFRleHQgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICB7cGFkZGluZ1JpZ2h0XG4gICAgICAgICAgPyB0cnVuY2F0ZShtZXNzYWdlVGV4dCwgY29sdW1ucyAtIHBhZGRpbmdSaWdodCwgdHJ1ZSlcbiAgICAgICAgICA6IG1lc3NhZ2VUZXh0LnNsaWNlKDAsIDUwMCkuc3BsaXQoJ1xcbicpLnNsaWNlKDAsIDQpLmpvaW4oJ1xcbicpfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRpZmYgc3RhdHMgZm9yIGFsbCB0aGUgZmlsZSBlZGl0cyBpbi1iZXR3ZWVuIHR3byBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZURpZmZTdGF0c0JldHdlZW5NZXNzYWdlcyhcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgZnJvbU1lc3NhZ2VJZDogVVVJRCxcbiAgdG9NZXNzYWdlSWQ6IFVVSUQgfCB1bmRlZmluZWQsXG4pOiBEaWZmU3RhdHMgfCB1bmRlZmluZWQge1xuICBjb25zdCBzdGFydEluZGV4ID0gbWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cudXVpZCA9PT0gZnJvbU1lc3NhZ2VJZClcbiAgaWYgKHN0YXJ0SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbGV0IGVuZEluZGV4ID0gdG9NZXNzYWdlSWRcbiAgICA/IG1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLnV1aWQgPT09IHRvTWVzc2FnZUlkKVxuICAgIDogbWVzc2FnZXMubGVuZ3RoXG4gIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICBlbmRJbmRleCA9IG1lc3NhZ2VzLmxlbmd0aFxuICB9XG5cbiAgY29uc3QgZmlsZXNDaGFuZ2VkOiBzdHJpbmdbXSA9IFtdXG4gIGxldCBpbnNlcnRpb25zID0gMFxuICBsZXQgZGVsZXRpb25zID0gMFxuXG4gIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXVxuICAgIGlmICghbXNnIHx8ICFpc1Rvb2xVc2VSZXN1bHRNZXNzYWdlKG1zZykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gbXNnLnRvb2xVc2VSZXN1bHQgYXMgRmlsZUVkaXRPdXRwdXQgfCBGaWxlV3JpdGVUb29sT3V0cHV0XG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5maWxlUGF0aCB8fCAhcmVzdWx0LnN0cnVjdHVyZWRQYXRjaCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVzQ2hhbmdlZC5pbmNsdWRlcyhyZXN1bHQuZmlsZVBhdGgpKSB7XG4gICAgICBmaWxlc0NoYW5nZWQucHVzaChyZXN1bHQuZmlsZVBhdGgpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICgndHlwZScgaW4gcmVzdWx0ICYmIHJlc3VsdC50eXBlID09PSAnY3JlYXRlJykge1xuICAgICAgICBpbnNlcnRpb25zICs9IHJlc3VsdC5jb250ZW50LnNwbGl0KC9cXHI/XFxuLykubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGh1bmsgb2YgcmVzdWx0LnN0cnVjdHVyZWRQYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGFkZGl0aW9ucyA9IGNvdW50KGh1bmsubGluZXMsIGxpbmUgPT4gbGluZS5zdGFydHNXaXRoKCcrJykpXG4gICAgICAgICAgY29uc3QgcmVtb3ZhbHMgPSBjb3VudChodW5rLmxpbmVzLCBsaW5lID0+IGxpbmUuc3RhcnRzV2l0aCgnLScpKVxuXG4gICAgICAgICAgaW5zZXJ0aW9ucyArPSBhZGRpdGlvbnNcbiAgICAgICAgICBkZWxldGlvbnMgKz0gcmVtb3ZhbHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgY29udGludWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGVzQ2hhbmdlZCxcbiAgICBpbnNlcnRpb25zLFxuICAgIGRlbGV0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcihcbiAgbWVzc2FnZTogTWVzc2FnZSxcbik6IG1lc3NhZ2UgaXMgVXNlck1lc3NhZ2Uge1xuICBpZiAobWVzc2FnZS50eXBlICE9PSAndXNlcicpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheShtZXNzYWdlLm1lc3NhZ2UuY29udGVudCkgJiZcbiAgICBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFswXT8udHlwZSA9PT0gJ3Rvb2xfcmVzdWx0J1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoaXNTeW50aGV0aWNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKG1lc3NhZ2UuaXNNZXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKG1lc3NhZ2UuaXNDb21wYWN0U3VtbWFyeSB8fCBtZXNzYWdlLmlzVmlzaWJsZUluVHJhbnNjcmlwdE9ubHkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICBjb25zdCBsYXN0QmxvY2sgPVxuICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyA/IG51bGwgOiBjb250ZW50W2NvbnRlbnQubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWVzc2FnZVRleHQgPVxuICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgPyBjb250ZW50LnRyaW0oKVxuICAgICAgOiBsYXN0QmxvY2sgJiYgaXNUZXh0QmxvY2sobGFzdEJsb2NrKVxuICAgICAgICA/IGxhc3RCbG9jay50ZXh0LnRyaW0oKVxuICAgICAgICA6ICcnXG5cbiAgLy8gRmlsdGVyIG91dCBub24tdXNlci1hdXRob3JlZCBtZXNzYWdlcyAoY29tbWFuZCBvdXRwdXRzLCB0YXNrIG5vdGlmaWNhdGlvbnMsIHRpY2tzKS5cbiAgaWYgKFxuICAgIG1lc3NhZ2VUZXh0LmluZGV4T2YoYDwke0xPQ0FMX0NPTU1BTkRfU1RET1VUX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7TE9DQUxfQ09NTUFORF9TVERFUlJfVEFHfT5gKSAhPT0gLTEgfHxcbiAgICBtZXNzYWdlVGV4dC5pbmRleE9mKGA8JHtCQVNIX1NURE9VVF9UQUd9PmApICE9PSAtMSB8fFxuICAgIG1lc3NhZ2VUZXh0LmluZGV4T2YoYDwke0JBU0hfU1RERVJSX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7VEFTS19OT1RJRklDQVRJT05fVEFHfT5gKSAhPT0gLTEgfHxcbiAgICBtZXNzYWdlVGV4dC5pbmRleE9mKGA8JHtUSUNLX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7VEVBTU1BVEVfTUVTU0FHRV9UQUd9YCkgIT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFsbCBtZXNzYWdlcyBhZnRlciB0aGUgZ2l2ZW4gaW5kZXggYXJlIHN5bnRoZXRpYyAoaW50ZXJydXB0aW9ucywgY2FuY2VscywgZXRjLilcbiAqIG9yIG5vbi1tZWFuaW5nZnVsIGNvbnRlbnQuIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSdzIG5vdGhpbmcgbWVhbmluZ2Z1bCB0byBjb25maXJtIC1cbiAqIGZvciBleGFtcGxlLCBpZiB0aGUgdXNlciBoaXQgZW50ZXIgdGhlbiBpbW1lZGlhdGVseSBjYW5jZWxsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXNzYWdlc0FmdGVyQXJlT25seVN5bnRoZXRpYyhcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgZnJvbUluZGV4OiBudW1iZXIsXG4pOiBib29sZWFuIHtcbiAgZm9yIChsZXQgaSA9IGZyb21JbmRleCArIDE7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldXG4gICAgaWYgKCFtc2cpIGNvbnRpbnVlXG5cbiAgICAvLyBTa2lwIGtub3duIG5vbi1tZWFuaW5nZnVsIG1lc3NhZ2UgdHlwZXNcbiAgICBpZiAoaXNTeW50aGV0aWNNZXNzYWdlKG1zZykpIGNvbnRpbnVlXG4gICAgaWYgKGlzVG9vbFVzZVJlc3VsdE1lc3NhZ2UobXNnKSkgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdwcm9ncmVzcycpIGNvbnRpbnVlXG4gICAgaWYgKG1zZy50eXBlID09PSAnc3lzdGVtJykgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdhdHRhY2htZW50JykgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBtc2cuaXNNZXRhKSBjb250aW51ZVxuXG4gICAgLy8gQXNzaXN0YW50IHdpdGggYWN0dWFsIGNvbnRlbnQgPSBtZWFuaW5nZnVsXG4gICAgaWYgKG1zZy50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IGhhc01lYW5pbmdmdWxDb250ZW50ID0gY29udGVudC5zb21lKFxuICAgICAgICAgIGJsb2NrID0+XG4gICAgICAgICAgICAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmIGJsb2NrLnRleHQudHJpbSgpKSB8fFxuICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ3Rvb2xfdXNlJyxcbiAgICAgICAgKVxuICAgICAgICBpZiAoaGFzTWVhbmluZ2Z1bENvbnRlbnQpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBVc2VyIG1lc3NhZ2VzIHRoYXQgYXJlbid0IHN5bnRoZXRpYyBvciBtZXRhID0gbWVhbmluZ2Z1bFxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBPdGhlciB0eXBlcyAoZS5nLiwgdG9tYnN0b25lKSBhcmUgbm9uLW1lYW5pbmdmdWwsIGNvbnRpbnVlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsICIvLyBHcm93dGhCb29rLWJhY2tlZCBjcm9uIGppdHRlciBjb25maWd1cmF0aW9uLlxuLy9cbi8vIFNlcGFyYXRlZCBmcm9tIGNyb25TY2hlZHVsZXIudHMgc28gdGhlIHNjaGVkdWxlciBjYW4gYmUgYnVuZGxlZCBpbiB0aGVcbi8vIEFnZW50IFNESyBwdWJsaWMgYnVpbGQgd2l0aG91dCBwdWxsaW5nIGluIGFuYWx5dGljcy9ncm93dGhib29rLnRzIGFuZFxuLy8gaXRzIGxhcmdlIHRyYW5zaXRpdmUgZGVwZW5kZW5jeSBzZXQgKHNldHRpbmdzL2hvb2tzL2NvbmZpZyBjeWNsZSkuXG4vL1xuLy8gVXNhZ2U6XG4vLyAgIFJFUEwgKHVzZVNjaGVkdWxlZFRhc2tzLnRzKTogcGFzcyBgZ2V0Sml0dGVyQ29uZmlnOiBnZXRDcm9uSml0dGVyQ29uZmlnYFxuLy8gICBEYWVtb24vU0RLOiBvbWl0IGdldEppdHRlckNvbmZpZyBcdTIxOTIgREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcgYXBwbGllcy5cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfV0lUSF9SRUZSRVNIIH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQge1xuICB0eXBlIENyb25KaXR0ZXJDb25maWcsXG4gIERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHLFxufSBmcm9tICcuL2Nyb25UYXNrcy5qcydcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuL2xhenlTY2hlbWEuanMnXG5cbi8vIEhvdyBvZnRlbiB0byByZS1mZXRjaCB0ZW5ndV9rYWlyb3NfY3Jvbl9jb25maWcgZnJvbSBHcm93dGhCb29rLiBTaG9ydCBiZWNhdXNlXG4vLyB0aGlzIGlzIGFuIGluY2lkZW50IGxldmVyIFx1MjAxNCB3aGVuIHdlIHB1c2ggYSBjb25maWcgY2hhbmdlIHRvIHNoZWQgOjAwIGxvYWQsXG4vLyB3ZSB3YW50IHRoZSBmbGVldCB0byBjb252ZXJnZSB3aXRoaW4gYSBtaW51dGUsIG5vdCBvbiB0aGUgbmV4dCBwcm9jZXNzXG4vLyByZXN0YXJ0LiBUaGUgdW5kZXJseWluZyBjYWxsIGlzIGEgc3luY2hyb25vdXMgY2FjaGUgcmVhZDsgdGhlIHJlZnJlc2gganVzdFxuLy8gY2xlYXJzIHRoZSBtZW1vaXplZCBlbnRyeSBzbyB0aGUgbmV4dCByZWFkIHRyaWdnZXJzIGEgYmFja2dyb3VuZCBmZXRjaC5cbmNvbnN0IEpJVFRFUl9DT05GSUdfUkVGUkVTSF9NUyA9IDYwICogMTAwMFxuXG4vLyBVcHBlciBib3VuZHMgaGVyZSBhcmUgZGVmZW5zZS1pbi1kZXB0aCBhZ2FpbnN0IGZhdC1maW5nZXJlZCBHcm93dGhCb29rXG4vLyBwdXNoZXMuIExpa2UgcG9sbENvbmZpZy50cywgWm9kIHJlamVjdHMgdGhlIHdob2xlIG9iamVjdCBvbiBhbnkgdmlvbGF0aW9uXG4vLyByYXRoZXIgdGhhbiBwYXJ0aWFsbHkgdHJ1c3RpbmcgaXQgXHUyMDE0IGEgY29uZmlnIHdpdGggb25lIGJhZCBmaWVsZCBmYWxscyBiYWNrXG4vLyB0byBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJRyBlbnRpcmVseS4gb25lU2hvdEZsb29yTXMgc2hhcmVzIG9uZVNob3RNYXhNcydzXG4vLyBjZWlsaW5nIChmbG9vciA+IG1heCB3b3VsZCBpbnZlcnQgdGhlIGppdHRlciByYW5nZSkgYW5kIGlzIGNyb3NzLWNoZWNrZWQgaW5cbi8vIHRoZSByZWZpbmU7IHRoZSBzaGFyZWQgY2VpbGluZyBrZWVwcyB0aGUgaW5kaXZpZHVhbCBib3VuZCBleHBsaWNpdCBpbiB0aGVcbi8vIGVycm9yIHBhdGguIHJlY3VycmluZ01heEFnZU1zIHVzZXMgLmRlZmF1bHQoKSBzbyBhIHByZS1leGlzdGluZyBHQiBjb25maWdcbi8vIHdpdGhvdXQgdGhlIGZpZWxkIGRvZXNuJ3QgZ2V0IHdob2xlc2FsZS1yZWplY3RlZCBcdTIwMTQgdGhlIG90aGVyIGZpZWxkcyB3ZXJlXG4vLyBhZGRlZCB0b2dldGhlciBhdCBjb25maWcgaW5jZXB0aW9uIGFuZCBkb24ndCBuZWVkIHRoaXMuXG5jb25zdCBIQUxGX0hPVVJfTVMgPSAzMCAqIDYwICogMTAwMFxuY29uc3QgVEhJUlRZX0RBWVNfTVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbmNvbnN0IGNyb25KaXR0ZXJDb25maWdTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHJlY3VycmluZ0ZyYWM6IHoubnVtYmVyKCkubWluKDApLm1heCgxKSxcbiAgICAgIHJlY3VycmluZ0NhcE1zOiB6Lm51bWJlcigpLmludCgpLm1pbigwKS5tYXgoSEFMRl9IT1VSX01TKSxcbiAgICAgIG9uZVNob3RNYXhNczogei5udW1iZXIoKS5pbnQoKS5taW4oMCkubWF4KEhBTEZfSE9VUl9NUyksXG4gICAgICBvbmVTaG90Rmxvb3JNczogei5udW1iZXIoKS5pbnQoKS5taW4oMCkubWF4KEhBTEZfSE9VUl9NUyksXG4gICAgICBvbmVTaG90TWludXRlTW9kOiB6Lm51bWJlcigpLmludCgpLm1pbigxKS5tYXgoNjApLFxuICAgICAgcmVjdXJyaW5nTWF4QWdlTXM6IHpcbiAgICAgICAgLm51bWJlcigpXG4gICAgICAgIC5pbnQoKVxuICAgICAgICAubWluKDApXG4gICAgICAgIC5tYXgoVEhJUlRZX0RBWVNfTVMpXG4gICAgICAgIC5kZWZhdWx0KERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHLnJlY3VycmluZ01heEFnZU1zKSxcbiAgICB9KVxuICAgIC5yZWZpbmUoYyA9PiBjLm9uZVNob3RGbG9vck1zIDw9IGMub25lU2hvdE1heE1zKSxcbilcblxuLyoqXG4gKiBSZWFkIGB0ZW5ndV9rYWlyb3NfY3Jvbl9jb25maWdgIGZyb20gR3Jvd3RoQm9vaywgdmFsaWRhdGUsIGZhbGwgYmFjayB0b1xuICogZGVmYXVsdHMgb24gYWJzZW50L21hbGZvcm1lZC9vdXQtb2YtYm91bmRzIGNvbmZpZy4gQ2FsbGVkIGZyb20gY2hlY2soKVxuICogZXZlcnkgdGljayB2aWEgdGhlIGBnZXRKaXR0ZXJDb25maWdgIGNhbGxiYWNrIFx1MjAxNCBjaGVhcCAoc3luY2hyb25vdXMgY2FjaGVcbiAqIGhpdCkuIFJlZnJlc2ggd2luZG93OiBKSVRURVJfQ09ORklHX1JFRlJFU0hfTVMuXG4gKlxuICogRXhwb3J0ZWQgc28gb3BzIHJ1bmJvb2tzIGNhbiBwb2ludCBhdCBhIHNpbmdsZSBmdW5jdGlvbiB3aGVuIGRvY3VtZW50aW5nXG4gKiB0aGUgbGV2ZXIsIGFuZCBzbyB0ZXN0cyBjYW4gc3B5IG9uIGl0IHdpdGhvdXQgbW9ja2luZyBHcm93dGhCb29rIGl0c2VsZi5cbiAqXG4gKiBQYXNzIHRoaXMgYXMgYGdldEppdHRlckNvbmZpZ2Agd2hlbiBjYWxsaW5nIGNyZWF0ZUNyb25TY2hlZHVsZXIgaW4gUkVQTFxuICogY29udGV4dHMuIERhZW1vbi9TREsgY2FsbGVycyBvbWl0IGdldEppdHRlckNvbmZpZyBhbmQgZ2V0IGRlZmF1bHRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3JvbkppdHRlckNvbmZpZygpOiBDcm9uSml0dGVyQ29uZmlnIHtcbiAgY29uc3QgcmF3ID0gZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9XSVRIX1JFRlJFU0g8dW5rbm93bj4oXG4gICAgJ3Rlbmd1X2thaXJvc19jcm9uX2NvbmZpZycsXG4gICAgREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcsXG4gICAgSklUVEVSX0NPTkZJR19SRUZSRVNIX01TLFxuICApXG4gIGNvbnN0IHBhcnNlZCA9IGNyb25KaXR0ZXJDb25maWdTY2hlbWEoKS5zYWZlUGFyc2UocmF3KVxuICByZXR1cm4gcGFyc2VkLnN1Y2Nlc3MgPyBwYXJzZWQuZGF0YSA6IERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHXG59XG4iLCAiLy8gU2NoZWR1bGVyIGxlYXNlIGxvY2sgZm9yIC5jbGF1ZGUvc2NoZWR1bGVkX3Rhc2tzLmpzb24uXG4vL1xuLy8gV2hlbiBtdWx0aXBsZSBDbGF1ZGUgc2Vzc2lvbnMgcnVuIGluIHRoZSBzYW1lIHByb2plY3QgZGlyZWN0b3J5LCBvbmx5IG9uZVxuLy8gc2hvdWxkIGRyaXZlIHRoZSBjcm9uIHNjaGVkdWxlci4gVGhlIGZpcnN0IHNlc3Npb24gdG8gYWNxdWlyZSB0aGlzIGxvY2tcbi8vIGJlY29tZXMgdGhlIHNjaGVkdWxlcjsgb3RoZXJzIHN0YXkgcGFzc2l2ZSBhbmQgcGVyaW9kaWNhbGx5IHByb2JlIHRoZSBsb2NrLlxuLy8gSWYgdGhlIG93bmVyIGRpZXMgKFBJRCBubyBsb25nZXIgcnVubmluZyksIGEgcGFzc2l2ZSBzZXNzaW9uIHRha2VzIG92ZXIuXG4vL1xuLy8gUGF0dGVybiBtaXJyb3JzIGNvbXB1dGVyVXNlTG9jay50czogT19FWENMIGF0b21pYyBjcmVhdGUsIFBJRCBsaXZlbmVzc1xuLy8gcHJvYmUsIHN0YWxlLWxvY2sgcmVjb3ZlcnksIGNsZWFudXAtb24tZXhpdC5cblxuaW1wb3J0IHsgbWtkaXIsIHJlYWRGaWxlLCB1bmxpbmssIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kL3Y0J1xuaW1wb3J0IHsgZ2V0UHJvamVjdFJvb3QsIGdldFNlc3Npb25JZCB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4vY2xlYW51cFJlZ2lzdHJ5LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGdldEVycm5vQ29kZSB9IGZyb20gJy4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgaXNQcm9jZXNzUnVubmluZyB9IGZyb20gJy4vZ2VuZXJpY1Byb2Nlc3NVdGlscy5qcydcbmltcG9ydCB7IHNhZmVQYXJzZUpTT04gfSBmcm9tICcuL2pzb24uanMnXG5pbXBvcnQgeyBsYXp5U2NoZW1hIH0gZnJvbSAnLi9sYXp5U2NoZW1hLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4vc2xvd09wZXJhdGlvbnMuanMnXG5cbmNvbnN0IExPQ0tfRklMRV9SRUwgPSBqb2luKCcuY2xhdWRlJywgJ3NjaGVkdWxlZF90YXNrcy5sb2NrJylcblxuY29uc3Qgc2NoZWR1bGVyTG9ja1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHNlc3Npb25JZDogei5zdHJpbmcoKSxcbiAgICBwaWQ6IHoubnVtYmVyKCksXG4gICAgYWNxdWlyZWRBdDogei5udW1iZXIoKSxcbiAgfSksXG4pXG50eXBlIFNjaGVkdWxlckxvY2sgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIHNjaGVkdWxlckxvY2tTY2hlbWE+PlxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIG91dC1vZi1SRVBMIGNhbGxlcnMgKEFnZW50IFNESyBkYWVtb24pIHRoYXQgZG9uJ3QgaGF2ZVxuICogYm9vdHN0cmFwIHN0YXRlLiBXaGVuIG9taXR0ZWQsIGZhbGxzIGJhY2sgdG8gZ2V0UHJvamVjdFJvb3QoKSArXG4gKiBnZXRTZXNzaW9uSWQoKSBhcyBiZWZvcmUuIGxvY2tJZGVudGl0eSBzaG91bGQgYmUgc3RhYmxlIGZvciB0aGUgbGlmZXRpbWVcbiAqIG9mIG9uZSBkYWVtb24gcHJvY2VzcyAoZS5nLiBhIHJhbmRvbVVVSUQoKSBjYXB0dXJlZCBhdCBzdGFydHVwKS5cbiAqL1xuZXhwb3J0IHR5cGUgU2NoZWR1bGVyTG9ja09wdGlvbnMgPSB7XG4gIGRpcj86IHN0cmluZ1xuICBsb2NrSWRlbnRpdHk/OiBzdHJpbmdcbn1cblxubGV0IHVucmVnaXN0ZXJDbGVhbnVwOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWRcbi8vIFN1cHByZXNzIHJlcGVhdCBcImhlbGQgYnkgWFwiIGxvZyBsaW5lcyB3aGVuIHBvbGxpbmcgYSBsaXZlIG93bmVyLlxubGV0IGxhc3RCbG9ja2VkQnk6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG5mdW5jdGlvbiBnZXRMb2NrUGF0aChkaXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gam9pbihkaXIgPz8gZ2V0UHJvamVjdFJvb3QoKSwgTE9DS19GSUxFX1JFTClcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZExvY2soZGlyPzogc3RyaW5nKTogUHJvbWlzZTxTY2hlZHVsZXJMb2NrIHwgdW5kZWZpbmVkPiB7XG4gIGxldCByYXc6IHN0cmluZ1xuICB0cnkge1xuICAgIHJhdyA9IGF3YWl0IHJlYWRGaWxlKGdldExvY2tQYXRoKGRpciksICd1dGY4JylcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHNjaGVkdWxlckxvY2tTY2hlbWEoKS5zYWZlUGFyc2Uoc2FmZVBhcnNlSlNPTihyYXcsIGZhbHNlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdWNjZXNzID8gcmVzdWx0LmRhdGEgOiB1bmRlZmluZWRcbn1cblxuYXN5bmMgZnVuY3Rpb24gdHJ5Q3JlYXRlRXhjbHVzaXZlKFxuICBsb2NrOiBTY2hlZHVsZXJMb2NrLFxuICBkaXI/OiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgcGF0aCA9IGdldExvY2tQYXRoKGRpcilcbiAgY29uc3QgYm9keSA9IGpzb25TdHJpbmdpZnkobG9jaylcbiAgdHJ5IHtcbiAgICBhd2FpdCB3cml0ZUZpbGUocGF0aCwgYm9keSwgeyBmbGFnOiAnd3gnIH0pXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICBpZiAoY29kZSA9PT0gJ0VFWElTVCcpIHJldHVybiBmYWxzZVxuICAgIGlmIChjb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgLy8gLmNsYXVkZS8gZG9lc24ndCBleGlzdCB5ZXQgXHUyMDE0IGNyZWF0ZSBpdCBhbmQgcmV0cnkgb25jZS4gSW4gc3RlYWR5XG4gICAgICAvLyBzdGF0ZSB0aGUgZGlyIGFscmVhZHkgZXhpc3RzIChzY2hlZHVsZWRfdGFza3MuanNvbiBsaXZlcyB0aGVyZSksXG4gICAgICAvLyBzbyB0aGlzIHBhdGggaXMgaGl0IGF0IG1vc3Qgb25jZS5cbiAgICAgIGF3YWl0IG1rZGlyKGRpcm5hbWUocGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB3cml0ZUZpbGUocGF0aCwgYm9keSwgeyBmbGFnOiAnd3gnIH0pXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChyZXRyeUVycjogdW5rbm93bikge1xuICAgICAgICBpZiAoZ2V0RXJybm9Db2RlKHJldHJ5RXJyKSA9PT0gJ0VFWElTVCcpIHJldHVybiBmYWxzZVxuICAgICAgICB0aHJvdyByZXRyeUVyclxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMb2NrQ2xlYW51cChvcHRzPzogU2NoZWR1bGVyTG9ja09wdGlvbnMpOiB2b2lkIHtcbiAgdW5yZWdpc3RlckNsZWFudXA/LigpXG4gIHVucmVnaXN0ZXJDbGVhbnVwID0gcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCByZWxlYXNlU2NoZWR1bGVyTG9jayhvcHRzKVxuICB9KVxufVxuXG4vKipcbiAqIFRyeSB0byBhY3F1aXJlIHRoZSBzY2hlZHVsZXIgbG9jayBmb3IgdGhlIGN1cnJlbnQgc2Vzc2lvbi5cbiAqIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBpZiBhbm90aGVyIGxpdmUgc2Vzc2lvbiBob2xkcyBpdC5cbiAqXG4gKiBVc2VzIE9fRVhDTCAoJ3d4JykgZm9yIGF0b21pYyB0ZXN0LWFuZC1zZXQuIElmIHRoZSBmaWxlIGV4aXN0czpcbiAqICAgLSBBbHJlYWR5IG91cnMgXHUyMTkyIHRydWUgKGlkZW1wb3RlbnQgcmUtYWNxdWlyZSlcbiAqICAgLSBBbm90aGVyIGxpdmUgUElEIFx1MjE5MiBmYWxzZVxuICogICAtIFN0YWxlIChQSUQgZGVhZCAvIGNvcnJ1cHQpIFx1MjE5MiB1bmxpbmsgYW5kIHJldHJ5IGV4Y2x1c2l2ZSBjcmVhdGUgb25jZVxuICpcbiAqIElmIHR3byBzZXNzaW9ucyByYWNlIHRvIHJlY292ZXIgYSBzdGFsZSBsb2NrLCBvbmx5IG9uZSBjcmVhdGUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cnlBY3F1aXJlU2NoZWR1bGVyTG9jayhcbiAgb3B0cz86IFNjaGVkdWxlckxvY2tPcHRpb25zLFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IGRpciA9IG9wdHM/LmRpclxuICAvLyBcInNlc3Npb25JZFwiIGluIHRoZSBsb2NrIGZpbGUgaXMgcmVhbGx5IGp1c3QgYSBzdGFibGUgb3duZXIga2V5LiBSRVBMXG4gIC8vIHVzZXMgZ2V0U2Vzc2lvbklkKCk7IGRhZW1vbiBjYWxsZXJzIHN1cHBseSB0aGVpciBvd24gVVVJRC4gUElEIHJlbWFpbnNcbiAgLy8gdGhlIGxpdmVuZXNzIHNpZ25hbCByZWdhcmRsZXNzLlxuICBjb25zdCBzZXNzaW9uSWQgPSBvcHRzPy5sb2NrSWRlbnRpdHkgPz8gZ2V0U2Vzc2lvbklkKClcbiAgY29uc3QgbG9jazogU2NoZWR1bGVyTG9jayA9IHtcbiAgICBzZXNzaW9uSWQsXG4gICAgcGlkOiBwcm9jZXNzLnBpZCxcbiAgICBhY3F1aXJlZEF0OiBEYXRlLm5vdygpLFxuICB9XG5cbiAgaWYgKGF3YWl0IHRyeUNyZWF0ZUV4Y2x1c2l2ZShsb2NrLCBkaXIpKSB7XG4gICAgbGFzdEJsb2NrZWRCeSA9IHVuZGVmaW5lZFxuICAgIHJlZ2lzdGVyTG9ja0NsZWFudXAob3B0cylcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1NjaGVkdWxlZFRhc2tzXSBhY3F1aXJlZCBzY2hlZHVsZXIgbG9jayAoUElEICR7cHJvY2Vzcy5waWR9KWAsXG4gICAgKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHJlYWRMb2NrKGRpcilcblxuICAvLyBBbHJlYWR5IG91cnMgKGlkZW1wb3RlbnQpLiBBZnRlciAtLXJlc3VtZSB0aGUgc2Vzc2lvbiBJRCBpcyByZXN0b3JlZFxuICAvLyBidXQgdGhlIHByb2Nlc3MgaGFzIGEgbmV3IFBJRCBcdTIwMTQgdXBkYXRlIHRoZSBsb2NrIGZpbGUgc28gb3RoZXIgc2Vzc2lvbnNcbiAgLy8gc2VlIGEgbGl2ZSBQSUQgYW5kIGRvbid0IHN0ZWFsIGl0LlxuICBpZiAoZXhpc3Rpbmc/LnNlc3Npb25JZCA9PT0gc2Vzc2lvbklkKSB7XG4gICAgaWYgKGV4aXN0aW5nLnBpZCAhPT0gcHJvY2Vzcy5waWQpIHtcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShnZXRMb2NrUGF0aChkaXIpLCBqc29uU3RyaW5naWZ5KGxvY2spKVxuICAgICAgcmVnaXN0ZXJMb2NrQ2xlYW51cChvcHRzKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ29ycnVwdCBvciB1bnBhcnNlYWJsZSBcdTIwMTQgdHJlYXQgYXMgc3RhbGUuXG4gIC8vIEFub3RoZXIgbGl2ZSBzZXNzaW9uIFx1MjAxNCBibG9ja2VkLlxuICBpZiAoZXhpc3RpbmcgJiYgaXNQcm9jZXNzUnVubmluZyhleGlzdGluZy5waWQpKSB7XG4gICAgaWYgKGxhc3RCbG9ja2VkQnkgIT09IGV4aXN0aW5nLnNlc3Npb25JZCkge1xuICAgICAgbGFzdEJsb2NrZWRCeSA9IGV4aXN0aW5nLnNlc3Npb25JZFxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBzY2hlZHVsZXIgbG9jayBoZWxkIGJ5IHNlc3Npb24gJHtleGlzdGluZy5zZXNzaW9uSWR9IChQSUQgJHtleGlzdGluZy5waWR9KWAsXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gU3RhbGUgXHUyMDE0IHVubGluayBhbmQgcmV0cnkgdGhlIGV4Y2x1c2l2ZSBjcmVhdGUgb25jZS5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtTY2hlZHVsZWRUYXNrc10gcmVjb3ZlcmluZyBzdGFsZSBzY2hlZHVsZXIgbG9jayBmcm9tIFBJRCAke2V4aXN0aW5nLnBpZH1gLFxuICAgIClcbiAgfVxuICBhd2FpdCB1bmxpbmsoZ2V0TG9ja1BhdGgoZGlyKSkuY2F0Y2goKCkgPT4ge30pXG4gIGlmIChhd2FpdCB0cnlDcmVhdGVFeGNsdXNpdmUobG9jaywgZGlyKSkge1xuICAgIGxhc3RCbG9ja2VkQnkgPSB1bmRlZmluZWRcbiAgICByZWdpc3RlckxvY2tDbGVhbnVwKG9wdHMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICAvLyBBbm90aGVyIHNlc3Npb24gd29uIHRoZSByZWNvdmVyeSByYWNlLlxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBSZWxlYXNlIHRoZSBzY2hlZHVsZXIgbG9jayBpZiB0aGUgY3VycmVudCBzZXNzaW9uIG93bnMgaXQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWxlYXNlU2NoZWR1bGVyTG9jayhcbiAgb3B0cz86IFNjaGVkdWxlckxvY2tPcHRpb25zLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHVucmVnaXN0ZXJDbGVhbnVwPy4oKVxuICB1bnJlZ2lzdGVyQ2xlYW51cCA9IHVuZGVmaW5lZFxuICBsYXN0QmxvY2tlZEJ5ID0gdW5kZWZpbmVkXG5cbiAgY29uc3QgZGlyID0gb3B0cz8uZGlyXG4gIGNvbnN0IHNlc3Npb25JZCA9IG9wdHM/LmxvY2tJZGVudGl0eSA/PyBnZXRTZXNzaW9uSWQoKVxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHJlYWRMb2NrKGRpcilcbiAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZy5zZXNzaW9uSWQgIT09IHNlc3Npb25JZCkgcmV0dXJuXG4gIHRyeSB7XG4gICAgYXdhaXQgdW5saW5rKGdldExvY2tQYXRoKGRpcikpXG4gICAgbG9nRm9yRGVidWdnaW5nKCdbU2NoZWR1bGVkVGFza3NdIHJlbGVhc2VkIHNjaGVkdWxlciBsb2NrJylcbiAgfSBjYXRjaCB7XG4gICAgLy8gQWxyZWFkeSBnb25lLlxuICB9XG59XG4iLCAiLy8gTm9uLVJlYWN0IHNjaGVkdWxlciBjb3JlIGZvciAuY2xhdWRlL3NjaGVkdWxlZF90YXNrcy5qc29uLlxuLy8gU2hhcmVkIGJ5IFJFUEwgKHZpYSB1c2VTY2hlZHVsZWRUYXNrcykgYW5kIFNESy8tcCBtb2RlIChwcmludC50cykuXG4vL1xuLy8gTGlmZWN5Y2xlOiBwb2xsIGdldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpIHVudGlsIHRydWUgKGZsYWcgZmxpcHMgd2hlblxuLy8gQ3JvbkNyZWF0ZSBydW5zIG9yIGEgc2tpbGwgb246IHRyaWdnZXIgZmlyZXMpIFx1MjE5MiBsb2FkIHRhc2tzICsgd2F0Y2ggdGhlXG4vLyBmaWxlICsgc3RhcnQgYSAxcyBjaGVjayB0aW1lciBcdTIxOTIgb24gZmlyZSwgY2FsbCBvbkZpcmUocHJvbXB0KS4gc3RvcCgpXG4vLyB0ZWFycyBldmVyeXRoaW5nIGRvd24uXG5cbmltcG9ydCB0eXBlIHsgRlNXYXRjaGVyIH0gZnJvbSAnY2hva2lkYXInXG5pbXBvcnQge1xuICBnZXRTY2hlZHVsZWRUYXNrc0VuYWJsZWQsXG4gIGdldFNlc3Npb25Dcm9uVGFza3MsXG4gIHJlbW92ZVNlc3Npb25Dcm9uVGFza3MsXG4gIHNldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCxcbn0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgY3JvblRvSHVtYW4gfSBmcm9tICcuL2Nyb24uanMnXG5pbXBvcnQge1xuICB0eXBlIENyb25KaXR0ZXJDb25maWcsXG4gIHR5cGUgQ3JvblRhc2ssXG4gIERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHLFxuICBmaW5kTWlzc2VkVGFza3MsXG4gIGdldENyb25GaWxlUGF0aCxcbiAgaGFzQ3JvblRhc2tzU3luYyxcbiAgaml0dGVyZWROZXh0Q3JvblJ1bk1zLFxuICBtYXJrQ3JvblRhc2tzRmlyZWQsXG4gIG9uZVNob3RKaXR0ZXJlZE5leHRDcm9uUnVuTXMsXG4gIHJlYWRDcm9uVGFza3MsXG4gIHJlbW92ZUNyb25UYXNrcyxcbn0gZnJvbSAnLi9jcm9uVGFza3MuanMnXG5pbXBvcnQge1xuICByZWxlYXNlU2NoZWR1bGVyTG9jayxcbiAgdHJ5QWNxdWlyZVNjaGVkdWxlckxvY2ssXG59IGZyb20gJy4vY3JvblRhc2tzTG9jay5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5cbmNvbnN0IENIRUNLX0lOVEVSVkFMX01TID0gMTAwMFxuY29uc3QgRklMRV9TVEFCSUxJVFlfTVMgPSAzMDBcbi8vIEhvdyBvZnRlbiBhIG5vbi1vd25pbmcgc2Vzc2lvbiByZS1wcm9iZXMgdGhlIHNjaGVkdWxlciBsb2NrLiBDb2Fyc2Vcbi8vIGJlY2F1c2UgdGFrZW92ZXIgb25seSBtYXR0ZXJzIHdoZW4gdGhlIG93bmluZyBzZXNzaW9uIGhhcyBjcmFzaGVkLlxuY29uc3QgTE9DS19QUk9CRV9JTlRFUlZBTF9NUyA9IDUwMDBcbi8qKlxuICogVHJ1ZSB3aGVuIGEgcmVjdXJyaW5nIHRhc2sgd2FzIGNyZWF0ZWQgbW9yZSB0aGFuIGBtYXhBZ2VNc2AgYWdvIGFuZCBzaG91bGRcbiAqIGJlIGRlbGV0ZWQgb24gaXRzIG5leHQgZmlyZS4gUGVybWFuZW50IHRhc2tzIG5ldmVyIGFnZS4gYG1heEFnZU1zID09PSAwYFxuICogbWVhbnMgdW5saW1pdGVkIChuZXZlciBhZ2VzIG91dCkuIFNvdXJjZWQgZnJvbVxuICoge0BsaW5rIENyb25KaXR0ZXJDb25maWcucmVjdXJyaW5nTWF4QWdlTXN9IGF0IGNhbGwgdGltZS5cbiAqIEV4dHJhY3RlZCBmb3IgdGVzdGFiaWxpdHkgXHUyMDE0IHRoZSBzY2hlZHVsZXIncyBjaGVjaygpIGlzIGJ1cmllZCB1bmRlclxuICogc2V0SW50ZXJ2YWwvY2hva2lkYXIvbG9jayBtYWNoaW5lcnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlY3VycmluZ1Rhc2tBZ2VkKFxuICB0OiBDcm9uVGFzayxcbiAgbm93TXM6IG51bWJlcixcbiAgbWF4QWdlTXM6IG51bWJlcixcbik6IGJvb2xlYW4ge1xuICBpZiAobWF4QWdlTXMgPT09IDApIHJldHVybiBmYWxzZVxuICByZXR1cm4gQm9vbGVhbih0LnJlY3VycmluZyAmJiAhdC5wZXJtYW5lbnQgJiYgbm93TXMgLSB0LmNyZWF0ZWRBdCA+PSBtYXhBZ2VNcylcbn1cblxudHlwZSBDcm9uU2NoZWR1bGVyT3B0aW9ucyA9IHtcbiAgLyoqIENhbGxlZCB3aGVuIGEgdGFzayBmaXJlcyAocmVndWxhciBvciBtaXNzZWQtb24tc3RhcnR1cCkuICovXG4gIG9uRmlyZTogKHByb21wdDogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKiBXaGlsZSB0cnVlLCBmaXJpbmcgaXMgZGVmZXJyZWQgdG8gdGhlIG5leHQgdGljay4gKi9cbiAgaXNMb2FkaW5nOiAoKSA9PiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGJ5cGFzc2VzIHRoZSBpc0xvYWRpbmcgZ2F0ZSBpbiBjaGVjaygpIGFuZCBhdXRvLWVuYWJsZXMgdGhlXG4gICAqIHNjaGVkdWxlciB3aXRob3V0IHdhaXRpbmcgZm9yIHNldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpLiBUaGVcbiAgICogYXV0by1lbmFibGUgaXMgdGhlIGxvYWQtYmVhcmluZyBwYXJ0IFx1MjAxNCBhc3Npc3RhbnQgbW9kZSBoYXMgdGFza3MgaW5cbiAgICogc2NoZWR1bGVkX3Rhc2tzLmpzb24gYXQgaW5zdGFsbCB0aW1lIGFuZCBzaG91bGRuJ3Qgd2FpdCBvbiBhIGxvYWRlclxuICAgKiBza2lsbCB0byBmbGlwIHRoZSBmbGFnLiBUaGUgaXNMb2FkaW5nIGJ5cGFzcyBpcyBtaW5vciBwb3N0LSMyMDQyNVxuICAgKiAoYXNzaXN0YW50IG1vZGUgbm93IGlkbGVzIGJldHdlZW4gdHVybnMgbGlrZSBhIG5vcm1hbCBSRVBMKS5cbiAgICovXG4gIGFzc2lzdGFudE1vZGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGVuIHByb3ZpZGVkLCByZWNlaXZlcyB0aGUgZnVsbCBDcm9uVGFzayBvbiBub3JtYWwgZmlyZXMgKGFuZCBvbkZpcmUgaXNcbiAgICogTk9UIGNhbGxlZCBmb3IgdGhhdCBmaXJlKS4gTGV0cyBkYWVtb24gY2FsbGVycyBzZWUgdGhlIHRhc2sgaWQvY3Jvbi9ldGNcbiAgICogaW5zdGVhZCBvZiBqdXN0IHRoZSBwcm9tcHQgc3RyaW5nLlxuICAgKi9cbiAgb25GaXJlVGFzaz86ICh0YXNrOiBDcm9uVGFzaykgPT4gdm9pZFxuICAvKipcbiAgICogV2hlbiBwcm92aWRlZCwgcmVjZWl2ZXMgdGhlIG1pc3NlZCBvbmUtc2hvdCB0YXNrcyBvbiBpbml0aWFsIGxvYWQgKGFuZFxuICAgKiBvbkZpcmUgaXMgTk9UIGNhbGxlZCB3aXRoIHRoZSBwcmUtZm9ybWF0dGVkIG5vdGlmaWNhdGlvbikuIERhZW1vbiBkZWNpZGVzXG4gICAqIGhvdyB0byBzdXJmYWNlIHRoZW0uXG4gICAqL1xuICBvbk1pc3NlZD86ICh0YXNrczogQ3JvblRhc2tbXSkgPT4gdm9pZFxuICAvKipcbiAgICogRGlyZWN0b3J5IGNvbnRhaW5pbmcgLmNsYXVkZS9zY2hlZHVsZWRfdGFza3MuanNvbi4gV2hlbiBwcm92aWRlZCwgdGhlXG4gICAqIHNjaGVkdWxlciBuZXZlciB0b3VjaGVzIGJvb3RzdHJhcCBzdGF0ZTogZ2V0UHJvamVjdFJvb3QvZ2V0U2Vzc2lvbklkIGFyZVxuICAgKiBub3QgcmVhZCwgYW5kIHRoZSBnZXRTY2hlZHVsZWRUYXNrc0VuYWJsZWQoKSBwb2xsIGlzIHNraXBwZWQgKGVuYWJsZSgpXG4gICAqIHJ1bnMgaW1tZWRpYXRlbHkgb24gc3RhcnQpLiBSZXF1aXJlZCBmb3IgQWdlbnQgU0RLIGRhZW1vbiBjYWxsZXJzLlxuICAgKi9cbiAgZGlyPzogc3RyaW5nXG4gIC8qKlxuICAgKiBPd25lciBrZXkgd3JpdHRlbiBpbnRvIHRoZSBsb2NrIGZpbGUuIERlZmF1bHRzIHRvIGdldFNlc3Npb25JZCgpLlxuICAgKiBEYWVtb24gY2FsbGVycyBtdXN0IHBhc3MgYSBzdGFibGUgcGVyLXByb2Nlc3MgVVVJRCBzaW5jZSB0aGV5IGhhdmUgbm9cbiAgICogc2Vzc2lvbi4gUElEIHJlbWFpbnMgdGhlIGxpdmVuZXNzIHByb2JlIHJlZ2FyZGxlc3MuXG4gICAqL1xuICBsb2NrSWRlbnRpdHk/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNyb24gaml0dGVyIGNvbmZpZyB0byB1c2UgZm9yIHRoaXMgdGljay4gQ2FsbGVkIG9uY2UgcGVyXG4gICAqIGNoZWNrKCkgY3ljbGUuIFJFUEwgY2FsbGVycyBwYXNzIGEgR3Jvd3RoQm9vay1iYWNrZWQgaW1wbGVtZW50YXRpb25cbiAgICogKHNlZSBjcm9uSml0dGVyQ29uZmlnLnRzKSBmb3IgbGl2ZSB0dW5pbmcgXHUyMDE0IG9wcyBjYW4gd2lkZW4gdGhlIGppdHRlclxuICAgKiB3aW5kb3cgbWlkLXNlc3Npb24gZHVyaW5nIGEgOjAwIGxvYWQgc3Bpa2Ugd2l0aG91dCByZXN0YXJ0aW5nIGNsaWVudHMuXG4gICAqIEFnZW50IFNESyBkYWVtb24gY2FsbGVycyBvbWl0IHRoaXMgYW5kIGdldCBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJRyxcbiAgICogd2hpY2ggaXMgc2FmZSBzaW5jZSBkYWVtb25zIHJlc3RhcnQgb24gY29uZmlnIGNoYW5nZSBhbnl3YXksIGFuZCB0aGVcbiAgICogZ3Jvd3RoYm9vay50cyBcdTIxOTIgY29uZmlnLnRzIFx1MjE5MiBjb21tYW5kcy50cyBcdTIxOTIgUkVQTCBjaGFpbiBzdGF5cyBvdXQgb2ZcbiAgICogc2RrLm1qcy5cbiAgICovXG4gIGdldEppdHRlckNvbmZpZz86ICgpID0+IENyb25KaXR0ZXJDb25maWdcbiAgLyoqXG4gICAqIEtpbGxzd2l0Y2g6IHBvbGxlZCBvbmNlIHBlciBjaGVjaygpIHRpY2suIFdoZW4gdHJ1ZSwgY2hlY2soKSBiYWlsc1xuICAgKiBiZWZvcmUgZmlyaW5nIGFueXRoaW5nIFx1MjAxNCBleGlzdGluZyBjcm9ucyBzdG9wIGRlYWQgbWlkLXNlc3Npb24uIENMSVxuICAgKiBjYWxsZXJzIGluamVjdCBgKCkgPT4gIWlzS2Fpcm9zQ3JvbkVuYWJsZWQoKWAgc28gZmxpcHBpbmcgdGhlXG4gICAqIHRlbmd1X2thaXJvc19jcm9uIGdhdGUgb2ZmIHN0b3BzIGFscmVhZHktcnVubmluZyBzY2hlZHVsZXJzIChub3QganVzdFxuICAgKiBuZXcgb25lcykuIERhZW1vbiBjYWxsZXJzIG9taXQgdGhpcywgc2FtZSByYXRpb25hbGUgYXMgZ2V0Sml0dGVyQ29uZmlnLlxuICAgKi9cbiAgaXNLaWxsZWQ/OiAoKSA9PiBib29sZWFuXG4gIC8qKlxuICAgKiBQZXItdGFzayBnYXRlIGFwcGxpZWQgYmVmb3JlIGFueSBzaWRlIGVmZmVjdC4gVGFza3MgcmV0dXJuaW5nIGZhbHNlIGFyZVxuICAgKiBpbnZpc2libGUgdG8gdGhpcyBzY2hlZHVsZXI6IG5ldmVyIGZpcmVkLCBuZXZlciBzdGFtcGVkIHdpdGhcbiAgICogYGxhc3RGaXJlZEF0YCwgbmV2ZXIgZGVsZXRlZCwgbmV2ZXIgc3VyZmFjZWQgYXMgbWlzc2VkLCBhYnNlbnQgZnJvbVxuICAgKiBgZ2V0TmV4dEZpcmVUaW1lKClgLiBUaGUgZGFlbW9uIGNyb24gd29ya2VyIHVzZXMgYHQgPT4gdC5wZXJtYW5lbnRgIHNvXG4gICAqIG5vbi1wZXJtYW5lbnQgdGFza3MgaW4gdGhlIHNhbWUgc2NoZWR1bGVkX3Rhc2tzLmpzb24gYXJlIHVudG91Y2hlZC5cbiAgICovXG4gIGZpbHRlcj86ICh0OiBDcm9uVGFzaykgPT4gYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBDcm9uU2NoZWR1bGVyID0ge1xuICBzdGFydDogKCkgPT4gdm9pZFxuICBzdG9wOiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBFcG9jaCBtcyBvZiB0aGUgc29vbmVzdCBzY2hlZHVsZWQgZmlyZSBhY3Jvc3MgYWxsIGxvYWRlZCB0YXNrcywgb3IgbnVsbFxuICAgKiBpZiBub3RoaW5nIGlzIHNjaGVkdWxlZCAobm8gdGFza3MsIG9yIGFsbCB0YXNrcyBhbHJlYWR5IGluLWZsaWdodCkuXG4gICAqIERhZW1vbiBjYWxsZXJzIHVzZSB0aGlzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIHRlYXIgZG93biBhbiBpZGxlIGFnZW50XG4gICAqIHN1YnByb2Nlc3Mgb3Iga2VlcCBpdCB3YXJtIGZvciBhbiBpbW1pbmVudCBmaXJlLlxuICAgKi9cbiAgZ2V0TmV4dEZpcmVUaW1lOiAoKSA9PiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDcm9uU2NoZWR1bGVyKFxuICBvcHRpb25zOiBDcm9uU2NoZWR1bGVyT3B0aW9ucyxcbik6IENyb25TY2hlZHVsZXIge1xuICBjb25zdCB7XG4gICAgb25GaXJlLFxuICAgIGlzTG9hZGluZyxcbiAgICBhc3Npc3RhbnRNb2RlID0gZmFsc2UsXG4gICAgb25GaXJlVGFzayxcbiAgICBvbk1pc3NlZCxcbiAgICBkaXIsXG4gICAgbG9ja0lkZW50aXR5LFxuICAgIGdldEppdHRlckNvbmZpZyxcbiAgICBpc0tpbGxlZCxcbiAgICBmaWx0ZXIsXG4gIH0gPSBvcHRpb25zXG4gIGNvbnN0IGxvY2tPcHRzID0gZGlyIHx8IGxvY2tJZGVudGl0eSA/IHsgZGlyLCBsb2NrSWRlbnRpdHkgfSA6IHVuZGVmaW5lZFxuXG4gIC8vIEZpbGUtYmFja2VkIHRhc2tzIG9ubHkuIFNlc3Npb24gdGFza3MgKGR1cmFibGU6IGZhbHNlKSBhcmUgTk9UIGxvYWRlZFxuICAvLyBoZXJlIFx1MjAxNCB0aGV5IGNhbiBiZSBhZGRlZC9yZW1vdmVkIG1pZC1zZXNzaW9uIHdpdGggbm8gZmlsZSBldmVudCwgc29cbiAgLy8gY2hlY2soKSByZWFkcyB0aGVtIGZyZXNoIGZyb20gYm9vdHN0cmFwIHN0YXRlIG9uIGV2ZXJ5IHRpY2sgaW5zdGVhZC5cbiAgbGV0IHRhc2tzOiBDcm9uVGFza1tdID0gW11cbiAgLy8gUGVyLXRhc2sgbmV4dC1maXJlIHRpbWVzIChlcG9jaCBtcykuXG4gIGNvbnN0IG5leHRGaXJlQXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gIC8vIElkcyB3ZSd2ZSBhbHJlYWR5IGVucXVldWVkIGEgXCJtaXNzZWQgdGFza1wiIHByb21wdCBmb3IgXHUyMDE0IHByZXZlbnRzXG4gIC8vIHJlLWFza2luZyBvbiBldmVyeSBmaWxlIGNoYW5nZSBiZWZvcmUgdGhlIHVzZXIgYW5zd2Vycy5cbiAgY29uc3QgbWlzc2VkQXNrZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAvLyBUYXNrcyBjdXJyZW50bHkgZW5xdWV1ZWQgYnV0IG5vdCB5ZXQgcmVtb3ZlZCBmcm9tIHRoZSBmaWxlLiBQcmV2ZW50c1xuICAvLyBkb3VibGUtZmlyZSBpZiB0aGUgaW50ZXJ2YWwgdGlja3MgYWdhaW4gYmVmb3JlIHJlbW92ZUNyb25UYXNrcyBsYW5kcy5cbiAgY29uc3QgaW5GbGlnaHQgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGxldCBlbmFibGVQb2xsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICBsZXQgY2hlY2tUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGxcbiAgbGV0IGxvY2tQcm9iZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICBsZXQgd2F0Y2hlcjogRlNXYXRjaGVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IHN0b3BwZWQgPSBmYWxzZVxuICBsZXQgaXNPd25lciA9IGZhbHNlXG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZChpbml0aWFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV4dCA9IGF3YWl0IHJlYWRDcm9uVGFza3MoZGlyKVxuICAgIGlmIChzdG9wcGVkKSByZXR1cm5cbiAgICB0YXNrcyA9IG5leHRcblxuICAgIC8vIE9ubHkgc3VyZmFjZSBtaXNzZWQgdGFza3Mgb24gaW5pdGlhbCBsb2FkLiBDaG9raWRhci10cmlnZ2VyZWRcbiAgICAvLyByZWxvYWRzIGxlYXZlIG92ZXJkdWUgdGFza3MgdG8gY2hlY2soKSAod2hpY2ggYW5jaG9ycyBmcm9tIGNyZWF0ZWRBdFxuICAgIC8vIGFuZCBmaXJlcyBpbW1lZGlhdGVseSkuIFRoaXMgYXZvaWRzIGEgbWlzbGVhZGluZyBcIm1pc3NlZCB3aGlsZSBDbGF1ZGVcbiAgICAvLyB3YXMgbm90IHJ1bm5pbmdcIiBwcm9tcHQgZm9yIHRhc2tzIHRoYXQgYmVjYW1lIG92ZXJkdWUgbWlkLXNlc3Npb24uXG4gICAgLy9cbiAgICAvLyBSZWN1cnJpbmcgdGFza3MgYXJlIE5PVCBzdXJmYWNlZCBvciBkZWxldGVkIFx1MjAxNCBjaGVjaygpIGhhbmRsZXMgdGhlbVxuICAgIC8vIGNvcnJlY3RseSAoZmlyZXMgb24gZmlyc3QgdGljaywgcmVzY2hlZHVsZXMgZm9yd2FyZCkuIE9ubHkgb25lLXNob3RcbiAgICAvLyBtaXNzZWQgdGFza3MgbmVlZCB1c2VyIGlucHV0IChydW4gb25jZSBub3csIG9yIGRpc2NhcmQgZm9yZXZlcikuXG4gICAgaWYgKCFpbml0aWFsKSByZXR1cm5cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBtaXNzZWQgPSBmaW5kTWlzc2VkVGFza3MobmV4dCwgbm93KS5maWx0ZXIoXG4gICAgICB0ID0+ICF0LnJlY3VycmluZyAmJiAhbWlzc2VkQXNrZWQuaGFzKHQuaWQpICYmICghZmlsdGVyIHx8IGZpbHRlcih0KSksXG4gICAgKVxuICAgIGlmIChtaXNzZWQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCB0IG9mIG1pc3NlZCkge1xuICAgICAgICBtaXNzZWRBc2tlZC5hZGQodC5pZClcbiAgICAgICAgLy8gUHJldmVudCBjaGVjaygpIGZyb20gcmUtZmlyaW5nIHRoZSByYXcgcHJvbXB0IHdoaWxlIHRoZSBhc3luY1xuICAgICAgICAvLyByZW1vdmVDcm9uVGFza3MgKyBjaG9raWRhciByZWxvYWQgY2hhaW4gaXMgaW4gcHJvZ3Jlc3MuXG4gICAgICAgIG5leHRGaXJlQXQuc2V0KHQuaWQsIEluZmluaXR5KVxuICAgICAgfVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NjaGVkdWxlZF90YXNrX21pc3NlZCcsIHtcbiAgICAgICAgY291bnQ6IG1pc3NlZC5sZW5ndGgsXG4gICAgICAgIHRhc2tJZHM6IG1pc3NlZFxuICAgICAgICAgIC5tYXAodCA9PiB0LmlkKVxuICAgICAgICAgIC5qb2luKFxuICAgICAgICAgICAgJywnLFxuICAgICAgICAgICkgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG4gICAgICBpZiAob25NaXNzZWQpIHtcbiAgICAgICAgb25NaXNzZWQobWlzc2VkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25GaXJlKGJ1aWxkTWlzc2VkVGFza05vdGlmaWNhdGlvbihtaXNzZWQpKVxuICAgICAgfVxuICAgICAgdm9pZCByZW1vdmVDcm9uVGFza3MoXG4gICAgICAgIG1pc3NlZC5tYXAodCA9PiB0LmlkKSxcbiAgICAgICAgZGlyLFxuICAgICAgKS5jYXRjaChlID0+XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW1NjaGVkdWxlZFRhc2tzXSBmYWlsZWQgdG8gcmVtb3ZlIG1pc3NlZCB0YXNrczogJHtlfWApLFxuICAgICAgKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBzdXJmYWNlZCAke21pc3NlZC5sZW5ndGh9IG1pc3NlZCBvbmUtc2hvdCB0YXNrKHMpYCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICBpZiAoaXNLaWxsZWQ/LigpKSByZXR1cm5cbiAgICBpZiAoaXNMb2FkaW5nKCkgJiYgIWFzc2lzdGFudE1vZGUpIHJldHVyblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KClcbiAgICAvLyBGaWxlLWJhY2tlZCByZWN1cnJpbmcgdGFza3MgdGhhdCBmaXJlZCB0aGlzIHRpY2suIEJhdGNoZWQgaW50byBvbmVcbiAgICAvLyBtYXJrQ3JvblRhc2tzRmlyZWQgY2FsbCBhZnRlciB0aGUgbG9vcCBzbyBOIGZpcmVzID0gb25lIHdyaXRlLiBTZXNzaW9uXG4gICAgLy8gdGFza3MgZXhjbHVkZWQgXHUyMDE0IHRoZXkgZGllIHdpdGggdGhlIHByb2Nlc3MsIG5vIHBvaW50IHBlcnNpc3RpbmcuXG4gICAgY29uc3QgZmlyZWRGaWxlUmVjdXJyaW5nOiBzdHJpbmdbXSA9IFtdXG4gICAgLy8gUmVhZCBvbmNlIHBlciB0aWNrLiBSRVBMIGNhbGxlcnMgcGFzcyBnZXRKaXR0ZXJDb25maWcgYmFja2VkIGJ5XG4gICAgLy8gR3Jvd3RoQm9vayBzbyBhIGNvbmZpZyBwdXNoIHRha2VzIGVmZmVjdCB3aXRob3V0IHJlc3RhcnQuIERhZW1vbiBhbmRcbiAgICAvLyBTREsgY2FsbGVycyBvbWl0IGl0IGFuZCBnZXQgREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcgKHNhZmUgXHUyMDE0IGppdHRlclxuICAgIC8vIGlzIGFuIG9wcyBsZXZlciBmb3IgUkVQTCBmbGVldCBsb2FkLXNoZWRkaW5nLCBub3QgYSBkYWVtb24gY29uY2VybikuXG4gICAgY29uc3Qgaml0dGVyQ2ZnID0gZ2V0Sml0dGVyQ29uZmlnPy4oKSA/PyBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJR1xuXG4gICAgLy8gU2hhcmVkIGxvb3AgYm9keS4gYGlzU2Vzc2lvbmAgcm91dGVzIHRoZSBvbmUtc2hvdCBjbGVhbnVwIHBhdGg6XG4gICAgLy8gc2Vzc2lvbiB0YXNrcyBhcmUgcmVtb3ZlZCBzeW5jaHJvbm91c2x5IGZyb20gbWVtb3J5LCBmaWxlIHRhc2tzIGdvXG4gICAgLy8gdGhyb3VnaCB0aGUgYXN5bmMgcmVtb3ZlQ3JvblRhc2tzICsgY2hva2lkYXIgcmVsb2FkLlxuICAgIGZ1bmN0aW9uIHByb2Nlc3ModDogQ3JvblRhc2ssIGlzU2Vzc2lvbjogYm9vbGVhbikge1xuICAgICAgaWYgKGZpbHRlciAmJiAhZmlsdGVyKHQpKSByZXR1cm5cbiAgICAgIHNlZW4uYWRkKHQuaWQpXG4gICAgICBpZiAoaW5GbGlnaHQuaGFzKHQuaWQpKSByZXR1cm5cblxuICAgICAgbGV0IG5leHQgPSBuZXh0RmlyZUF0LmdldCh0LmlkKVxuICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBGaXJzdCBzaWdodCBcdTIwMTQgYW5jaG9yIGZyb20gbGFzdEZpcmVkQXQgKHJlY3VycmluZykgb3IgY3JlYXRlZEF0LlxuICAgICAgICAvLyBOZXZlci1maXJlZCByZWN1cnJpbmcgdGFza3MgdXNlIGNyZWF0ZWRBdDogaWYgaXNMb2FkaW5nIGRlbGF5ZWRcbiAgICAgICAgLy8gdGhpcyB0aWNrIHBhc3QgdGhlIGZpcmUgdGltZSwgYW5jaG9yaW5nIGZyb20gYG5vd2Agd291bGQgY29tcHV0ZVxuICAgICAgICAvLyBuZXh0LXllYXIgZm9yIHBpbm5lZCBjcm9ucyAoYDMwIDE0IDI3IDIgKmApLiBGaXJlZC1iZWZvcmUgdGFza3NcbiAgICAgICAgLy8gdXNlIGxhc3RGaXJlZEF0OiB0aGUgcmVzY2hlZHVsZSBiZWxvdyB3cml0ZXMgYG5vd2AgYmFjayB0byBkaXNrLFxuICAgICAgICAvLyBzbyBvbiBuZXh0IHByb2Nlc3Mgc3Bhd24gZmlyc3Qtc2lnaHQgY29tcHV0ZXMgdGhlIFNBTUUgbmV3TmV4dCB3ZVxuICAgICAgICAvLyBzZXQgaW4tbWVtb3J5IGhlcmUuIFdpdGhvdXQgdGhpcywgYSBkYWVtb24gY2hpbGQgZGVzcGF3bmluZyBvblxuICAgICAgICAvLyBpZGxlIGxvc2VzIG5leHRGaXJlQXQgYW5kIHRoZSBuZXh0IHNwYXduIHJlLWFuY2hvcnMgZnJvbSAxMC1kYXktXG4gICAgICAgIC8vIG9sZCBjcmVhdGVkQXQgXHUyMTkyIGZpcmVzIGV2ZXJ5IHRhc2sgZXZlcnkgY3ljbGUuXG4gICAgICAgIG5leHQgPSB0LnJlY3VycmluZ1xuICAgICAgICAgID8gKGppdHRlcmVkTmV4dENyb25SdW5NcyhcbiAgICAgICAgICAgICAgdC5jcm9uLFxuICAgICAgICAgICAgICB0Lmxhc3RGaXJlZEF0ID8/IHQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICB0LmlkLFxuICAgICAgICAgICAgICBqaXR0ZXJDZmcsXG4gICAgICAgICAgICApID8/IEluZmluaXR5KVxuICAgICAgICAgIDogKG9uZVNob3RKaXR0ZXJlZE5leHRDcm9uUnVuTXMoXG4gICAgICAgICAgICAgIHQuY3JvbixcbiAgICAgICAgICAgICAgdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgIHQuaWQsXG4gICAgICAgICAgICAgIGppdHRlckNmZyxcbiAgICAgICAgICAgICkgPz8gSW5maW5pdHkpXG4gICAgICAgIG5leHRGaXJlQXQuc2V0KHQuaWQsIG5leHQpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBzY2hlZHVsZWQgJHt0LmlkfSBmb3IgJHtuZXh0ID09PSBJbmZpbml0eSA/ICduZXZlcicgOiBuZXcgRGF0ZShuZXh0KS50b0lTT1N0cmluZygpfWAsXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdyA8IG5leHQpIHJldHVyblxuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIGZpcmluZyAke3QuaWR9JHt0LnJlY3VycmluZyA/ICcgKHJlY3VycmluZyknIDogJyd9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zY2hlZHVsZWRfdGFza19maXJlJywge1xuICAgICAgICByZWN1cnJpbmc6IHQucmVjdXJyaW5nID8/IGZhbHNlLFxuICAgICAgICB0YXNrSWQ6XG4gICAgICAgICAgdC5pZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIGlmIChvbkZpcmVUYXNrKSB7XG4gICAgICAgIG9uRmlyZVRhc2sodClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRmlyZSh0LnByb21wdClcbiAgICAgIH1cblxuICAgICAgLy8gQWdlZC1vdXQgcmVjdXJyaW5nIHRhc2tzIGZhbGwgdGhyb3VnaCB0byB0aGUgb25lLXNob3QgZGVsZXRlIHBhdGhzXG4gICAgICAvLyBiZWxvdyAoc2Vzc2lvbiB0YXNrcyBnZXQgc3luY2hyb25vdXMgcmVtb3ZhbDsgZmlsZSB0YXNrcyBnZXQgdGhlXG4gICAgICAvLyBhc3luYyBpbkZsaWdodC9jaG9raWRhciBwYXRoKS4gRmlyZXMgb25lIGxhc3QgdGltZSwgdGhlbiBpcyByZW1vdmVkLlxuICAgICAgY29uc3QgYWdlZCA9IGlzUmVjdXJyaW5nVGFza0FnZWQodCwgbm93LCBqaXR0ZXJDZmcucmVjdXJyaW5nTWF4QWdlTXMpXG4gICAgICBpZiAoYWdlZCkge1xuICAgICAgICBjb25zdCBhZ2VIb3VycyA9IE1hdGguZmxvb3IoKG5vdyAtIHQuY3JlYXRlZEF0KSAvIDEwMDAgLyA2MCAvIDYwKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtTY2hlZHVsZWRUYXNrc10gcmVjdXJyaW5nIHRhc2sgJHt0LmlkfSBhZ2VkIG91dCAoJHthZ2VIb3Vyc31oIHNpbmNlIGNyZWF0aW9uKSwgZGVsZXRpbmcgYWZ0ZXIgZmluYWwgZmlyZWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NjaGVkdWxlZF90YXNrX2V4cGlyZWQnLCB7XG4gICAgICAgICAgdGFza0lkOlxuICAgICAgICAgICAgdC5pZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIGFnZUhvdXJzLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodC5yZWN1cnJpbmcgJiYgIWFnZWQpIHtcbiAgICAgICAgLy8gUmVjdXJyaW5nOiByZXNjaGVkdWxlIGZyb20gbm93IChub3QgZnJvbSBuZXh0KSB0byBhdm9pZCByYXBpZFxuICAgICAgICAvLyBjYXRjaC11cCBpZiB0aGUgc2Vzc2lvbiB3YXMgYmxvY2tlZC4gSml0dGVyIGtlZXBzIHVzIG9mZiB0aGVcbiAgICAgICAgLy8gZXhhY3QgOjAwIHdhbGwtY2xvY2sgYm91bmRhcnkgZXZlcnkgY3ljbGUuXG4gICAgICAgIGNvbnN0IG5ld05leHQgPVxuICAgICAgICAgIGppdHRlcmVkTmV4dENyb25SdW5Ncyh0LmNyb24sIG5vdywgdC5pZCwgaml0dGVyQ2ZnKSA/PyBJbmZpbml0eVxuICAgICAgICBuZXh0RmlyZUF0LnNldCh0LmlkLCBuZXdOZXh0KVxuICAgICAgICAvLyBQZXJzaXN0IGxhc3RGaXJlZEF0PW5vdyBzbyBuZXh0IHByb2Nlc3Mgc3Bhd24gcmVjb25zdHJ1Y3RzIHRoaXNcbiAgICAgICAgLy8gc2FtZSBuZXdOZXh0IG9uIGZpcnN0LXNpZ2h0LiBTZXNzaW9uIHRhc2tzIHNraXAgXHUyMDE0IHByb2Nlc3MtbG9jYWwuXG4gICAgICAgIGlmICghaXNTZXNzaW9uKSBmaXJlZEZpbGVSZWN1cnJpbmcucHVzaCh0LmlkKVxuICAgICAgfSBlbHNlIGlmIChpc1Nlc3Npb24pIHtcbiAgICAgICAgLy8gT25lLXNob3QgKG9yIGFnZWQtb3V0IHJlY3VycmluZykgc2Vzc2lvbiB0YXNrOiBzeW5jaHJvbm91cyBtZW1vcnlcbiAgICAgICAgLy8gcmVtb3ZhbC4gTm8gaW5GbGlnaHQgd2luZG93IFx1MjAxNCB0aGUgbmV4dCB0aWNrIHdpbGwgcmVhZCBhIHNlc3Npb25cbiAgICAgICAgLy8gc3RvcmUgd2l0aG91dCB0aGlzIGlkLlxuICAgICAgICByZW1vdmVTZXNzaW9uQ3JvblRhc2tzKFt0LmlkXSlcbiAgICAgICAgbmV4dEZpcmVBdC5kZWxldGUodC5pZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9uZS1zaG90IChvciBhZ2VkLW91dCByZWN1cnJpbmcpIGZpbGUgdGFzazogZGVsZXRlIGZyb20gZGlzay5cbiAgICAgICAgLy8gaW5GbGlnaHQgZ3VhcmRzIGFnYWluc3QgZG91YmxlLWZpcmUgZHVyaW5nIHRoZSBhc3luY1xuICAgICAgICAvLyByZW1vdmVDcm9uVGFza3MgKyBjaG9raWRhciByZWxvYWQuXG4gICAgICAgIGluRmxpZ2h0LmFkZCh0LmlkKVxuICAgICAgICB2b2lkIHJlbW92ZUNyb25UYXNrcyhbdC5pZF0sIGRpcilcbiAgICAgICAgICAuY2F0Y2goZSA9PlxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBmYWlsZWQgdG8gcmVtb3ZlIHRhc2sgJHt0LmlkfTogJHtlfWAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIClcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiBpbkZsaWdodC5kZWxldGUodC5pZCkpXG4gICAgICAgIG5leHRGaXJlQXQuZGVsZXRlKHQuaWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlsZS1iYWNrZWQgdGFza3M6IG9ubHkgd2hlbiB3ZSBvd24gdGhlIHNjaGVkdWxlciBsb2NrLiBUaGUgbG9ja1xuICAgIC8vIGV4aXN0cyB0byBzdG9wIHR3byBDbGF1ZGUgc2Vzc2lvbnMgaW4gdGhlIHNhbWUgY3dkIGZyb20gZG91YmxlLWZpcmluZ1xuICAgIC8vIHRoZSBzYW1lIG9uLWRpc2sgdGFzay5cbiAgICBpZiAoaXNPd25lcikge1xuICAgICAgZm9yIChjb25zdCB0IG9mIHRhc2tzKSBwcm9jZXNzKHQsIGZhbHNlKVxuICAgICAgLy8gQmF0Y2hlZCBsYXN0RmlyZWRBdCB3cml0ZS4gaW5GbGlnaHQgZ3VhcmRzIGFnYWluc3QgZG91YmxlLWZpcmVcbiAgICAgIC8vIGR1cmluZyB0aGUgY2hva2lkYXItdHJpZ2dlcmVkIHJlbG9hZCAoc2FtZSBwYXR0ZXJuIGFzIHJlbW92ZUNyb25UYXNrc1xuICAgICAgLy8gYmVsb3cpIFx1MjAxNCB0aGUgcmVsb2FkIHJlLXNlZWRzIGB0YXNrc2Agd2l0aCB0aGUganVzdC13cml0dGVuXG4gICAgICAvLyBsYXN0RmlyZWRBdCwgYW5kIGZpcnN0LXNpZ2h0IG9uIHRoYXQgeWllbGRzIHRoZSBzYW1lIG5ld05leHQgd2VcbiAgICAgIC8vIGFscmVhZHkgc2V0IGluLW1lbW9yeSwgc28gaXQncyBpZGVtcG90ZW50IGV2ZW4gd2l0aG91dCBpbkZsaWdodC5cbiAgICAgIC8vIEd1YXJkaW5nIGFueXdheSBrZWVwcyB0aGUgc2VtYW50aWNzIG9idmlvdXMuXG4gICAgICBpZiAoZmlyZWRGaWxlUmVjdXJyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiBmaXJlZEZpbGVSZWN1cnJpbmcpIGluRmxpZ2h0LmFkZChpZClcbiAgICAgICAgdm9pZCBtYXJrQ3JvblRhc2tzRmlyZWQoZmlyZWRGaWxlUmVjdXJyaW5nLCBub3csIGRpcilcbiAgICAgICAgICAuY2F0Y2goZSA9PlxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBmYWlsZWQgdG8gcGVyc2lzdCBsYXN0RmlyZWRBdDogJHtlfWAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIClcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGZpcmVkRmlsZVJlY3VycmluZykgaW5GbGlnaHQuZGVsZXRlKGlkKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNlc3Npb24tb25seSB0YXNrczogcHJvY2Vzcy1wcml2YXRlLCB0aGUgbG9jayBkb2VzIG5vdCBhcHBseSBcdTIwMTQgdGhlXG4gICAgLy8gb3RoZXIgc2Vzc2lvbiBjYW5ub3Qgc2VlIHRoZW0gYW5kIHRoZXJlIGlzIG5vIGRvdWJsZS1maXJlIHJpc2suIFJlYWRcbiAgICAvLyBmcmVzaCBmcm9tIGJvb3RzdHJhcCBzdGF0ZSBldmVyeSB0aWNrIChubyBjaG9raWRhciwgbm8gbG9hZCgpKS4gVGhpc1xuICAgIC8vIGlzIHNraXBwZWQgb24gdGhlIGRhZW1vbiBwYXRoIChgZGlyICE9PSB1bmRlZmluZWRgKSB3aGljaCBuZXZlclxuICAgIC8vIHRvdWNoZXMgYm9vdHN0cmFwIHN0YXRlLlxuICAgIGlmIChkaXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCB0IG9mIGdldFNlc3Npb25Dcm9uVGFza3MoKSkgcHJvY2Vzcyh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChzZWVuLnNpemUgPT09IDApIHtcbiAgICAgIC8vIE5vIGxpdmUgdGFza3MgdGhpcyB0aWNrIFx1MjAxNCBjbGVhciB0aGUgd2hvbGUgc2NoZWR1bGUgc29cbiAgICAgIC8vIGdldE5leHRGaXJlVGltZSgpIHJldHVybnMgbnVsbC4gVGhlIGV2aWN0aW9uIGxvb3AgYmVsb3cgaXNcbiAgICAgIC8vIHVucmVhY2hhYmxlIGhlcmUgKHNlZW4gaXMgZW1wdHkpLCBzbyBzdGFsZSBlbnRyaWVzIHdvdWxkXG4gICAgICAvLyBvdGhlcndpc2Ugc3Vydml2ZSBpbmRlZmluaXRlbHkgYW5kIGtlZXAgdGhlIGRhZW1vbiBhZ2VudCB3YXJtLlxuICAgICAgbmV4dEZpcmVBdC5jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gRXZpY3Qgc2NoZWR1bGUgZW50cmllcyBmb3IgdGFza3Mgbm8gbG9uZ2VyIHByZXNlbnQuIFdoZW4gIWlzT3duZXIsXG4gICAgLy8gZmlsZS10YXNrIGlkcyBhcmVuJ3QgaW4gYHNlZW5gIGFuZCBnZXQgZXZpY3RlZCBcdTIwMTQgaGFybWxlc3M6IHRoZXlcbiAgICAvLyByZS1hbmNob3IgZnJvbSBjcmVhdGVkQXQgb24gdGhlIGZpcnN0IG93bmVkIHRpY2suXG4gICAgZm9yIChjb25zdCBpZCBvZiBuZXh0RmlyZUF0LmtleXMoKSkge1xuICAgICAgaWYgKCFzZWVuLmhhcyhpZCkpIG5leHRGaXJlQXQuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpZiAoc3RvcHBlZCkgcmV0dXJuXG4gICAgaWYgKGVuYWJsZVBvbGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZW5hYmxlUG9sbClcbiAgICAgIGVuYWJsZVBvbGwgPSBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgeyBkZWZhdWx0OiBjaG9raWRhciB9ID0gYXdhaXQgaW1wb3J0KCdjaG9raWRhcicpXG4gICAgaWYgKHN0b3BwZWQpIHJldHVyblxuXG4gICAgLy8gQWNxdWlyZSB0aGUgcGVyLXByb2plY3Qgc2NoZWR1bGVyIGxvY2suIE9ubHkgdGhlIG93bmluZyBzZXNzaW9uIHJ1bnNcbiAgICAvLyBjaGVjaygpLiBPdGhlciBzZXNzaW9ucyBwcm9iZSBwZXJpb2RpY2FsbHkgdG8gdGFrZSBvdmVyIGlmIHRoZSBvd25lclxuICAgIC8vIGRpZXMuIFByZXZlbnRzIGRvdWJsZS1maXJpbmcgd2hlbiBtdWx0aXBsZSBDbGF1ZGVzIHNoYXJlIGEgY3dkLlxuICAgIGlzT3duZXIgPSBhd2FpdCB0cnlBY3F1aXJlU2NoZWR1bGVyTG9jayhsb2NrT3B0cykuY2F0Y2goKCkgPT4gZmFsc2UpXG4gICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgIGlzT3duZXIgPSBmYWxzZVxuICAgICAgICB2b2lkIHJlbGVhc2VTY2hlZHVsZXJMb2NrKGxvY2tPcHRzKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghaXNPd25lcikge1xuICAgICAgbG9ja1Byb2JlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHZvaWQgdHJ5QWNxdWlyZVNjaGVkdWxlckxvY2sobG9ja09wdHMpXG4gICAgICAgICAgLnRoZW4ob3duZWQgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgaWYgKG93bmVkKSB2b2lkIHJlbGVhc2VTY2hlZHVsZXJMb2NrKGxvY2tPcHRzKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvd25lZCkge1xuICAgICAgICAgICAgICBpc093bmVyID0gdHJ1ZVxuICAgICAgICAgICAgICBpZiAobG9ja1Byb2JlVGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGxvY2tQcm9iZVRpbWVyKVxuICAgICAgICAgICAgICAgIGxvY2tQcm9iZVRpbWVyID0gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZSA9PiBsb2dGb3JEZWJ1Z2dpbmcoU3RyaW5nKGUpLCB7IGxldmVsOiAnZXJyb3InIH0pKVxuICAgICAgfSwgTE9DS19QUk9CRV9JTlRFUlZBTF9NUylcbiAgICAgIGxvY2tQcm9iZVRpbWVyLnVucmVmPy4oKVxuICAgIH1cblxuICAgIHZvaWQgbG9hZCh0cnVlKVxuXG4gICAgY29uc3QgcGF0aCA9IGdldENyb25GaWxlUGF0aChkaXIpXG4gICAgd2F0Y2hlciA9IGNob2tpZGFyLndhdGNoKHBhdGgsIHtcbiAgICAgIHBlcnNpc3RlbnQ6IGZhbHNlLFxuICAgICAgaWdub3JlSW5pdGlhbDogdHJ1ZSxcbiAgICAgIGF3YWl0V3JpdGVGaW5pc2g6IHsgc3RhYmlsaXR5VGhyZXNob2xkOiBGSUxFX1NUQUJJTElUWV9NUyB9LFxuICAgICAgaWdub3JlUGVybWlzc2lvbkVycm9yczogdHJ1ZSxcbiAgICB9KVxuICAgIHdhdGNoZXIub24oJ2FkZCcsICgpID0+IHZvaWQgbG9hZChmYWxzZSkpXG4gICAgd2F0Y2hlci5vbignY2hhbmdlJywgKCkgPT4gdm9pZCBsb2FkKGZhbHNlKSlcbiAgICB3YXRjaGVyLm9uKCd1bmxpbmsnLCAoKSA9PiB7XG4gICAgICBpZiAoIXN0b3BwZWQpIHtcbiAgICAgICAgdGFza3MgPSBbXVxuICAgICAgICBuZXh0RmlyZUF0LmNsZWFyKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY2hlY2tUaW1lciA9IHNldEludGVydmFsKGNoZWNrLCBDSEVDS19JTlRFUlZBTF9NUylcbiAgICAvLyBEb24ndCBrZWVwIHRoZSBwcm9jZXNzIGFsaXZlIGZvciB0aGUgc2NoZWR1bGVyIGFsb25lIFx1MjAxNCBpbiAtcCB0ZXh0IG1vZGVcbiAgICAvLyB0aGUgcHJvY2VzcyBzaG91bGQgZXhpdCBhZnRlciB0aGUgc2luZ2xlIHR1cm4gZXZlbiBpZiBhIGNyb24gd2FzIGNyZWF0ZWQuXG4gICAgY2hlY2tUaW1lci51bnJlZj8uKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICBzdG9wcGVkID0gZmFsc2VcbiAgICAgIC8vIERhZW1vbiBwYXRoIChkaXIgZXhwbGljaXRseSBnaXZlbik6IGRvbid0IHRvdWNoIGJvb3RzdHJhcCBzdGF0ZSBcdTIwMTRcbiAgICAgIC8vIGdldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpIHdvdWxkIHJlYWQgYSBuZXZlci1pbml0aWFsaXplZCBmbGFnLiBUaGVcbiAgICAgIC8vIGRhZW1vbiBpcyBhc2tpbmcgdG8gc2NoZWR1bGU7IGp1c3QgZW5hYmxlLlxuICAgICAgaWYgKGRpciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBzY2hlZHVsZXIgc3RhcnQoKSBcdTIwMTQgZGlyPSR7ZGlyfSwgaGFzVGFza3M9JHtoYXNDcm9uVGFza3NTeW5jKGRpcil9YCxcbiAgICAgICAgKVxuICAgICAgICB2b2lkIGVuYWJsZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSBzY2hlZHVsZXIgc3RhcnQoKSBcdTIwMTQgZW5hYmxlZD0ke2dldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpfSwgaGFzVGFza3M9JHtoYXNDcm9uVGFza3NTeW5jKCl9YCxcbiAgICAgIClcbiAgICAgIC8vIEF1dG8tZW5hYmxlIHdoZW4gc2NoZWR1bGVkX3Rhc2tzLmpzb24gaGFzIGVudHJpZXMuIENyb25DcmVhdGVUb29sXG4gICAgICAvLyBhbHNvIHNldHMgdGhpcyB3aGVuIGEgdGFzayBpcyBjcmVhdGVkIG1pZC1zZXNzaW9uLlxuICAgICAgaWYgKFxuICAgICAgICAhZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkgJiZcbiAgICAgICAgKGFzc2lzdGFudE1vZGUgfHwgaGFzQ3JvblRhc2tzU3luYygpKVxuICAgICAgKSB7XG4gICAgICAgIHNldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCh0cnVlKVxuICAgICAgfVxuICAgICAgaWYgKGdldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpKSB7XG4gICAgICAgIHZvaWQgZW5hYmxlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbmFibGVQb2xsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIGVuID0+IHtcbiAgICAgICAgICBpZiAoZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkpIHZvaWQgZW4oKVxuICAgICAgICB9LFxuICAgICAgICBDSEVDS19JTlRFUlZBTF9NUyxcbiAgICAgICAgZW5hYmxlLFxuICAgICAgKVxuICAgICAgZW5hYmxlUG9sbC51bnJlZj8uKClcbiAgICB9LFxuICAgIHN0b3AoKSB7XG4gICAgICBzdG9wcGVkID0gdHJ1ZVxuICAgICAgaWYgKGVuYWJsZVBvbGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbmFibGVQb2xsKVxuICAgICAgICBlbmFibGVQb2xsID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGNoZWNrVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja1RpbWVyKVxuICAgICAgICBjaGVja1RpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGxvY2tQcm9iZVRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobG9ja1Byb2JlVGltZXIpXG4gICAgICAgIGxvY2tQcm9iZVRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgdm9pZCB3YXRjaGVyPy5jbG9zZSgpXG4gICAgICB3YXRjaGVyID0gbnVsbFxuICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgaXNPd25lciA9IGZhbHNlXG4gICAgICAgIHZvaWQgcmVsZWFzZVNjaGVkdWxlckxvY2sobG9ja09wdHMpXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXROZXh0RmlyZVRpbWUoKSB7XG4gICAgICAvLyBuZXh0RmlyZUF0IHVzZXMgSW5maW5pdHkgZm9yIFwibmV2ZXJcIiAoaW4tZmxpZ2h0IG9uZS1zaG90cywgYmFkIGNyb25cbiAgICAgIC8vIHN0cmluZ3MpLiBGaWx0ZXIgdGhvc2Ugb3V0IHNvIGNhbGxlcnMgY2FuIGRpc3Rpbmd1aXNoIFwic29vblwiIGZyb21cbiAgICAgIC8vIFwibm90aGluZyBwZW5kaW5nXCIuXG4gICAgICBsZXQgbWluID0gSW5maW5pdHlcbiAgICAgIGZvciAoY29uc3QgdCBvZiBuZXh0RmlyZUF0LnZhbHVlcygpKSB7XG4gICAgICAgIGlmICh0IDwgbWluKSBtaW4gPSB0XG4gICAgICB9XG4gICAgICByZXR1cm4gbWluID09PSBJbmZpbml0eSA/IG51bGwgOiBtaW5cbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgdGhlIG1pc3NlZC10YXNrIG5vdGlmaWNhdGlvbiB0ZXh0LiBHdWlkYW5jZSBwcmVjZWRlcyB0aGUgdGFzayBsaXN0XG4gKiBhbmQgdGhlIGxpc3QgaXMgd3JhcHBlZCBpbiBhIGNvZGUgZmVuY2Ugc28gYSBtdWx0aS1saW5lIGltcGVyYXRpdmUgcHJvbXB0XG4gKiBpcyBub3QgaW50ZXJwcmV0ZWQgYXMgaW1tZWRpYXRlIGluc3RydWN0aW9ucyB0byBhdm9pZCBzZWxmLWluZmxpY3RlZFxuICogcHJvbXB0IGluamVjdGlvbi4gVGhlIGZ1bGwgcHJvbXB0IGJvZHkgaXMgcHJlc2VydmVkIFx1MjAxNCB0aGlzIHBhdGggRE9FU1xuICogbmVlZCB0aGUgbW9kZWwgdG8gZXhlY3V0ZSB0aGUgcHJvbXB0IGFmdGVyIHVzZXJcbiAqIGNvbmZpcm1hdGlvbiwgYW5kIHRhc2tzIGFyZSBhbHJlYWR5IGRlbGV0ZWQgZnJvbSBKU09OIGJlZm9yZSB0aGUgbW9kZWxcbiAqIHNlZXMgdGhpcyBub3RpZmljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1pc3NlZFRhc2tOb3RpZmljYXRpb24obWlzc2VkOiBDcm9uVGFza1tdKTogc3RyaW5nIHtcbiAgY29uc3QgcGx1cmFsID0gbWlzc2VkLmxlbmd0aCA+IDFcbiAgY29uc3QgaGVhZGVyID1cbiAgICBgVGhlIGZvbGxvd2luZyBvbmUtc2hvdCBzY2hlZHVsZWQgdGFzayR7cGx1cmFsID8gJ3Mgd2VyZScgOiAnIHdhcyd9IG1pc3NlZCB3aGlsZSBDbGF1ZGUgd2FzIG5vdCBydW5uaW5nLiBgICtcbiAgICBgJHtwbHVyYWwgPyAnVGhleSBoYXZlJyA6ICdJdCBoYXMnfSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBmcm9tIC5jbGF1ZGUvc2NoZWR1bGVkX3Rhc2tzLmpzb24uXFxuXFxuYCArXG4gICAgYERvIE5PVCBleGVjdXRlICR7cGx1cmFsID8gJ3RoZXNlIHByb21wdHMnIDogJ3RoaXMgcHJvbXB0J30geWV0LiBgICtcbiAgICBgRmlyc3QgdXNlIHRoZSBBc2tVc2VyUXVlc3Rpb24gdG9vbCB0byBhc2sgd2hldGhlciB0byBydW4gJHtwbHVyYWwgPyAnZWFjaCBvbmUnIDogJ2l0J30gbm93LiBgICtcbiAgICBgT25seSBleGVjdXRlIGlmIHRoZSB1c2VyIGNvbmZpcm1zLmBcblxuICBjb25zdCBibG9ja3MgPSBtaXNzZWQubWFwKHQgPT4ge1xuICAgIGNvbnN0IG1ldGEgPSBgWyR7Y3JvblRvSHVtYW4odC5jcm9uKX0sIGNyZWF0ZWQgJHtuZXcgRGF0ZSh0LmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1dYFxuICAgIC8vIFVzZSBhIGZlbmNlIG9uZSBsb25nZXIgdGhhbiBhbnkgYmFja3RpY2sgcnVuIGluIHRoZSBwcm9tcHQgc28gYVxuICAgIC8vIHByb21wdCBjb250YWluaW5nIGBgYCBjYW5ub3QgY2xvc2UgdGhlIGZlbmNlIGVhcmx5IGFuZCB1bi13cmFwIHRoZVxuICAgIC8vIHRyYWlsaW5nIHRleHQgKENvbW1vbk1hcmsgZmVuY2UtbWF0Y2hpbmcgcnVsZSkuXG4gICAgY29uc3QgbG9uZ2VzdFJ1biA9ICh0LnByb21wdC5tYXRjaCgvYCsvZykgPz8gW10pLnJlZHVjZShcbiAgICAgIChtYXgsIHJ1bikgPT4gTWF0aC5tYXgobWF4LCBydW4ubGVuZ3RoKSxcbiAgICAgIDAsXG4gICAgKVxuICAgIGNvbnN0IGZlbmNlID0gJ2AnLnJlcGVhdChNYXRoLm1heCgzLCBsb25nZXN0UnVuICsgMSkpXG4gICAgcmV0dXJuIGAke21ldGF9XFxuJHtmZW5jZX1cXG4ke3QucHJvbXB0fVxcbiR7ZmVuY2V9YFxuICB9KVxuXG4gIHJldHVybiBgJHtoZWFkZXJ9XFxuXFxuJHtibG9ja3Muam9pbignXFxuXFxuJyl9YFxufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQmFzZTY0SW1hZ2VTb3VyY2UsXG4gIENvbnRlbnRCbG9ja1BhcmFtLFxuICBJbWFnZUJsb2NrUGFyYW0sXG59IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IFNES01lc3NhZ2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHsgZGV0ZWN0SW1hZ2VGb3JtYXRGcm9tQmFzZTY0IH0gZnJvbSAnLi4vdXRpbHMvaW1hZ2VSZXNpemVyLmpzJ1xuXG4vKipcbiAqIFByb2Nlc3MgYW4gaW5ib3VuZCB1c2VyIG1lc3NhZ2UgZnJvbSB0aGUgYnJpZGdlLCBleHRyYWN0aW5nIGNvbnRlbnRcbiAqIGFuZCBVVUlEIGZvciBlbnF1ZXVlaW5nLiBTdXBwb3J0cyBib3RoIHN0cmluZyBjb250ZW50IGFuZFxuICogQ29udGVudEJsb2NrUGFyYW1bXSAoZS5nLiBtZXNzYWdlcyBjb250YWluaW5nIGltYWdlcykuXG4gKlxuICogTm9ybWFsaXplcyBpbWFnZSBibG9ja3MgZnJvbSBicmlkZ2UgY2xpZW50cyB0aGF0IG1heSB1c2UgY2FtZWxDYXNlXG4gKiBgbWVkaWFUeXBlYCBpbnN0ZWFkIG9mIHNuYWtlX2Nhc2UgYG1lZGlhX3R5cGVgIChtb2JpbGUtYXBwcyM1ODI1KS5cbiAqXG4gKiBSZXR1cm5zIHRoZSBleHRyYWN0ZWQgZmllbGRzLCBvciB1bmRlZmluZWQgaWYgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiBza2lwcGVkIChub24tdXNlciB0eXBlLCBtaXNzaW5nL2VtcHR5IGNvbnRlbnQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEluYm91bmRNZXNzYWdlRmllbGRzKFxuICBtc2c6IFNES01lc3NhZ2UsXG4pOlxuICB8IHsgY29udGVudDogc3RyaW5nIHwgQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+OyB1dWlkOiBVVUlEIHwgdW5kZWZpbmVkIH1cbiAgfCB1bmRlZmluZWQge1xuICBpZiAobXNnLnR5cGUgIT09ICd1c2VyJykgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2U/LmNvbnRlbnRcbiAgaWYgKCFjb250ZW50KSByZXR1cm4gdW5kZWZpbmVkXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpICYmIGNvbnRlbnQubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgY29uc3QgdXVpZCA9XG4gICAgJ3V1aWQnIGluIG1zZyAmJiB0eXBlb2YgbXNnLnV1aWQgPT09ICdzdHJpbmcnXG4gICAgICA/IChtc2cudXVpZCBhcyBVVUlEKVxuICAgICAgOiB1bmRlZmluZWRcblxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IEFycmF5LmlzQXJyYXkoY29udGVudCkgPyBub3JtYWxpemVJbWFnZUJsb2Nrcyhjb250ZW50KSA6IGNvbnRlbnQsXG4gICAgdXVpZCxcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBpbWFnZSBjb250ZW50IGJsb2NrcyBmcm9tIGJyaWRnZSBjbGllbnRzLiBpT1Mvd2ViIGNsaWVudHMgbWF5XG4gKiBzZW5kIGBtZWRpYVR5cGVgIChjYW1lbENhc2UpIGluc3RlYWQgb2YgYG1lZGlhX3R5cGVgIChzbmFrZV9jYXNlKSwgb3JcbiAqIG9taXQgdGhlIGZpZWxkIGVudGlyZWx5LiBXaXRob3V0IG5vcm1hbGl6YXRpb24sIHRoZSBiYWQgYmxvY2sgcG9pc29uc1xuICogdGhlIHNlc3Npb24gXHUyMDE0IGV2ZXJ5IHN1YnNlcXVlbnQgQVBJIGNhbGwgZmFpbHMgd2l0aFxuICogXCJtZWRpYV90eXBlOiBGaWVsZCByZXF1aXJlZFwiLlxuICpcbiAqIEZhc3QtcGF0aCBzY2FuIHJldHVybnMgdGhlIG9yaWdpbmFsIGFycmF5IHJlZmVyZW5jZSB3aGVuIG5vXG4gKiBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAoemVybyBhbGxvY2F0aW9uIG9uIHRoZSBoYXBweSBwYXRoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUltYWdlQmxvY2tzKFxuICBibG9ja3M6IEFycmF5PENvbnRlbnRCbG9ja1BhcmFtPixcbik6IEFycmF5PENvbnRlbnRCbG9ja1BhcmFtPiB7XG4gIGlmICghYmxvY2tzLnNvbWUoaXNNYWxmb3JtZWRCYXNlNjRJbWFnZSkpIHJldHVybiBibG9ja3NcblxuICByZXR1cm4gYmxvY2tzLm1hcChibG9jayA9PiB7XG4gICAgaWYgKCFpc01hbGZvcm1lZEJhc2U2NEltYWdlKGJsb2NrKSkgcmV0dXJuIGJsb2NrXG4gICAgY29uc3Qgc3JjID0gYmxvY2suc291cmNlIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBjb25zdCBtZWRpYVR5cGUgPVxuICAgICAgdHlwZW9mIHNyYy5tZWRpYVR5cGUgPT09ICdzdHJpbmcnICYmIHNyYy5tZWRpYVR5cGVcbiAgICAgICAgPyBzcmMubWVkaWFUeXBlXG4gICAgICAgIDogZGV0ZWN0SW1hZ2VGb3JtYXRGcm9tQmFzZTY0KGJsb2NrLnNvdXJjZS5kYXRhKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5ibG9jayxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICB0eXBlOiAnYmFzZTY0JyBhcyBjb25zdCxcbiAgICAgICAgbWVkaWFfdHlwZTogbWVkaWFUeXBlIGFzIEJhc2U2NEltYWdlU291cmNlWydtZWRpYV90eXBlJ10sXG4gICAgICAgIGRhdGE6IGJsb2NrLnNvdXJjZS5kYXRhLFxuICAgICAgfSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzTWFsZm9ybWVkQmFzZTY0SW1hZ2UoXG4gIGJsb2NrOiBDb250ZW50QmxvY2tQYXJhbSxcbik6IGJsb2NrIGlzIEltYWdlQmxvY2tQYXJhbSAmIHsgc291cmNlOiBCYXNlNjRJbWFnZVNvdXJjZSB9IHtcbiAgaWYgKGJsb2NrLnR5cGUgIT09ICdpbWFnZScgfHwgYmxvY2suc291cmNlPy50eXBlICE9PSAnYmFzZTY0JykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiAhKGJsb2NrLnNvdXJjZSBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5tZWRpYV90eXBlXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUb29sLCBUb29sVXNlQ29udGV4dCB9IGZyb20gJ3NyYy9Ub29sLmpzJ1xuaW1wb3J0IHogZnJvbSAnem9kL3Y0J1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBsYXp5U2NoZW1hIH0gZnJvbSAnLi4vbGF6eVNjaGVtYS5qcydcbmltcG9ydCB0eXBlIHtcbiAgUGVybWlzc2lvbkRlY2lzaW9uLFxuICBQZXJtaXNzaW9uRGVjaXNpb25SZWFzb24sXG59IGZyb20gJy4vUGVybWlzc2lvblJlc3VsdC5qcydcbmltcG9ydCB7XG4gIGFwcGx5UGVybWlzc2lvblVwZGF0ZXMsXG4gIHBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlcyxcbn0gZnJvbSAnLi9QZXJtaXNzaW9uVXBkYXRlLmpzJ1xuaW1wb3J0IHsgcGVybWlzc2lvblVwZGF0ZVNjaGVtYSB9IGZyb20gJy4vUGVybWlzc2lvblVwZGF0ZVNjaGVtYS5qcydcblxuZXhwb3J0IGNvbnN0IGlucHV0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgdG9vbF9uYW1lOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5kZXNjcmliZSgnVGhlIG5hbWUgb2YgdGhlIHRvb2wgcmVxdWVzdGluZyBwZXJtaXNzaW9uJyksXG4gICAgaW5wdXQ6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5kZXNjcmliZSgnVGhlIGlucHV0IGZvciB0aGUgdG9vbCcpLFxuICAgIHRvb2xfdXNlX2lkOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5vcHRpb25hbCgpXG4gICAgICAuZGVzY3JpYmUoJ1RoZSB1bmlxdWUgdG9vbCB1c2UgcmVxdWVzdCBJRCcpLFxuICB9KSxcbilcblxuZXhwb3J0IHR5cGUgSW5wdXQgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIGlucHV0U2NoZW1hPj5cblxuLy8gWm9kIHNjaGVtYSBmb3IgcGVybWlzc2lvbiByZXN1bHRzXG4vLyBUaGlzIHNjaGVtYSBpcyB1c2VkIHRvIHZhbGlkYXRlIHRoZSBNQ1AgcGVybWlzc2lvbiBwcm9tcHQgdG9vbFxuLy8gc28gd2UgbWFpbnRhaW4gaXQgYXMgYSBzdWJzZXQgb2YgdGhlIHJlYWwgUGVybWlzc2lvbkRlY2lzaW9uIHR5cGVcblxuLy8gTWF0Y2hlcyBQZXJtaXNzaW9uRGVjaXNpb25DbGFzc2lmaWNhdGlvblNjaGVtYSBpbiBlbnRyeXBvaW50cy9zZGsvY29yZVNjaGVtYXMudHMuXG4vLyBNYWxmb3JtZWQgdmFsdWVzIGZhbGwgdGhyb3VnaCB0byB1bmRlZmluZWQgKHNhbWUgcGF0dGVybiBhcyB1cGRhdGVkUGVybWlzc2lvbnNcbi8vIGJlbG93KSBzbyBhIGJhZCBzdHJpbmcgZnJvbSB0aGUgU0RLIGhvc3QgZG9lc24ndCByZWplY3QgdGhlIHdob2xlIGRlY2lzaW9uLlxuY29uc3QgZGVjaXNpb25DbGFzc2lmaWNhdGlvbkZpZWxkID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLmVudW0oWyd1c2VyX3RlbXBvcmFyeScsICd1c2VyX3Blcm1hbmVudCcsICd1c2VyX3JlamVjdCddKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmNhdGNoKHVuZGVmaW5lZCksXG4pXG5cbmNvbnN0IFBlcm1pc3Npb25BbGxvd1Jlc3VsdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIGJlaGF2aW9yOiB6LmxpdGVyYWwoJ2FsbG93JyksXG4gICAgdXBkYXRlZElucHV0OiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSksXG4gICAgLy8gU0RLIGhvc3RzIG1heSBzZW5kIG1hbGZvcm1lZCBlbnRyaWVzOyBmYWxsIGJhY2sgdG8gdW5kZWZpbmVkIHJhdGhlclxuICAgIC8vIHRoYW4gcmVqZWN0aW5nIHRoZSBlbnRpcmUgYWxsb3cgZGVjaXNpb24gKGFudGhyb3BpY3MvY2xhdWRlLWNvZGUjMjk0NDApXG4gICAgdXBkYXRlZFBlcm1pc3Npb25zOiB6XG4gICAgICAuYXJyYXkocGVybWlzc2lvblVwZGF0ZVNjaGVtYSgpKVxuICAgICAgLm9wdGlvbmFsKClcbiAgICAgIC5jYXRjaChjdHggPT4ge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYE1hbGZvcm1lZCB1cGRhdGVkUGVybWlzc2lvbnMgZnJvbSBTREsgaG9zdCBpZ25vcmVkOiAke2N0eC5lcnJvci5pc3N1ZXNbMF0/Lm1lc3NhZ2UgPz8gJ3Vua25vd24nfWAsXG4gICAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSksXG4gICAgdG9vbFVzZUlEOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgZGVjaXNpb25DbGFzc2lmaWNhdGlvbjogZGVjaXNpb25DbGFzc2lmaWNhdGlvbkZpZWxkKCksXG4gIH0pLFxuKVxuXG5jb25zdCBQZXJtaXNzaW9uRGVueVJlc3VsdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIGJlaGF2aW9yOiB6LmxpdGVyYWwoJ2RlbnknKSxcbiAgICBtZXNzYWdlOiB6LnN0cmluZygpLFxuICAgIGludGVycnVwdDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICB0b29sVXNlSUQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBkZWNpc2lvbkNsYXNzaWZpY2F0aW9uOiBkZWNpc2lvbkNsYXNzaWZpY2F0aW9uRmllbGQoKSxcbiAgfSksXG4pXG5cbmV4cG9ydCBjb25zdCBvdXRwdXRTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoudW5pb24oW1Blcm1pc3Npb25BbGxvd1Jlc3VsdFNjaGVtYSgpLCBQZXJtaXNzaW9uRGVueVJlc3VsdFNjaGVtYSgpXSksXG4pXG5cbmV4cG9ydCB0eXBlIE91dHB1dCA9IHouaW5mZXI8UmV0dXJuVHlwZTx0eXBlb2Ygb3V0cHV0U2NoZW1hPj5cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSByZXN1bHQgb2YgYSBwZXJtaXNzaW9uIHByb21wdCB0b29sIHRvIGEgUGVybWlzc2lvbkRlY2lzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbihcbiAgcmVzdWx0OiBPdXRwdXQsXG4gIHRvb2w6IFRvb2wsXG4gIGlucHV0OiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSxcbiAgdG9vbFVzZUNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuKTogUGVybWlzc2lvbkRlY2lzaW9uIHtcbiAgY29uc3QgZGVjaXNpb25SZWFzb246IFBlcm1pc3Npb25EZWNpc2lvblJlYXNvbiA9IHtcbiAgICB0eXBlOiAncGVybWlzc2lvblByb21wdFRvb2wnLFxuICAgIHBlcm1pc3Npb25Qcm9tcHRUb29sTmFtZTogdG9vbC5uYW1lLFxuICAgIHRvb2xSZXN1bHQ6IHJlc3VsdCxcbiAgfVxuICBpZiAocmVzdWx0LmJlaGF2aW9yID09PSAnYWxsb3cnKSB7XG4gICAgY29uc3QgdXBkYXRlZFBlcm1pc3Npb25zID0gcmVzdWx0LnVwZGF0ZWRQZXJtaXNzaW9uc1xuICAgIGlmICh1cGRhdGVkUGVybWlzc2lvbnMpIHtcbiAgICAgIHRvb2xVc2VDb250ZXh0LnNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgdG9vbFBlcm1pc3Npb25Db250ZXh0OiBhcHBseVBlcm1pc3Npb25VcGRhdGVzKFxuICAgICAgICAgIHByZXYudG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgICAgIHVwZGF0ZWRQZXJtaXNzaW9ucyxcbiAgICAgICAgKSxcbiAgICAgIH0pKVxuICAgICAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGVzKHVwZGF0ZWRQZXJtaXNzaW9ucylcbiAgICB9XG4gICAgLy8gTW9iaWxlIGNsaWVudHMgcmVzcG9uZGluZyBmcm9tIGEgcHVzaCBub3RpZmljYXRpb24gZG9uJ3QgaGF2ZSB0aGVcbiAgICAvLyBvcmlnaW5hbCB0b29sIGlucHV0LCBzbyB0aGV5IHNlbmQgYHt9YCB0byBzYXRpc2Z5IHRoZSBzY2hlbWEuIFRyZWF0IGFuXG4gICAgLy8gZW1wdHkgb2JqZWN0IGFzIFwidXNlIG9yaWdpbmFsXCIgc28gdGhlIHRvb2wgZG9lc24ndCBydW4gd2l0aCBubyBhcmdzLlxuICAgIGNvbnN0IHVwZGF0ZWRJbnB1dCA9XG4gICAgICBPYmplY3Qua2V5cyhyZXN1bHQudXBkYXRlZElucHV0KS5sZW5ndGggPiAwID8gcmVzdWx0LnVwZGF0ZWRJbnB1dCA6IGlucHV0XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIHVwZGF0ZWRJbnB1dCxcbiAgICAgIGRlY2lzaW9uUmVhc29uLFxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXN1bHQuYmVoYXZpb3IgPT09ICdkZW55JyAmJiByZXN1bHQuaW50ZXJydXB0KSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFNESyBwZXJtaXNzaW9uIHByb21wdCBkZW55K2ludGVycnVwdDogdG9vbD0ke3Rvb2wubmFtZX0gbWVzc2FnZT0ke3Jlc3VsdC5tZXNzYWdlfWAsXG4gICAgKVxuICAgIHRvb2xVc2VDb250ZXh0LmFib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXN1bHQsXG4gICAgZGVjaXNpb25SZWFzb24sXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB0eXBlIHtcbiAgRWxpY2l0UmVzdWx0LFxuICBKU09OUlBDTWVzc2FnZSxcbn0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay90eXBlcy5qcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IEFzc2lzdGFudE1lc3NhZ2UgfSBmcm9tICdzcmMvL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgdHlwZSB7XG4gIEhvb2tJbnB1dCxcbiAgSG9va0pTT05PdXRwdXQsXG4gIFBlcm1pc3Npb25VcGRhdGUsXG4gIFNES01lc3NhZ2UsXG4gIFNES1VzZXJNZXNzYWdlLFxufSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7IFNES0NvbnRyb2xFbGljaXRhdGlvblJlc3BvbnNlU2NoZW1hIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sU2NoZW1hcy5qcydcbmltcG9ydCB0eXBlIHtcbiAgU0RLQ29udHJvbFJlcXVlc3QsXG4gIFNES0NvbnRyb2xSZXNwb25zZSxcbiAgU3RkaW5NZXNzYWdlLFxuICBTdGRvdXRNZXNzYWdlLFxufSBmcm9tICdzcmMvZW50cnlwb2ludHMvc2RrL2NvbnRyb2xUeXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQ2FuVXNlVG9vbEZuIH0gZnJvbSAnc3JjL2hvb2tzL3VzZUNhblVzZVRvb2wuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2wsIFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQgeyB0eXBlIEhvb2tDYWxsYmFjaywgaG9va0pTT05PdXRwdXRTY2hlbWEgfSBmcm9tICdzcmMvdHlwZXMvaG9va3MuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICdzcmMvdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEaWFnbm9zdGljc05vUElJIH0gZnJvbSAnc3JjL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gJ3NyYy91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQge1xuICB0eXBlIE91dHB1dCBhcyBQZXJtaXNzaW9uVG9vbE91dHB1dCxcbiAgcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbixcbiAgb3V0cHV0U2NoZW1hIGFzIHBlcm1pc3Npb25Ub29sT3V0cHV0U2NoZW1hLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRTY2hlbWEuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFBlcm1pc3Npb25EZWNpc2lvbixcbiAgUGVybWlzc2lvbkRlY2lzaW9uUmVhc29uLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblJlc3VsdC5qcydcbmltcG9ydCB7IGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sIH0gZnJvbSAnc3JjL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgd3JpdGVUb1N0ZG91dCB9IGZyb20gJ3NyYy91dGlscy9wcm9jZXNzLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJ3NyYy91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IHogfSBmcm9tICd6b2QvdjQnXG5pbXBvcnQgeyBub3RpZnlDb21tYW5kTGlmZWN5Y2xlIH0gZnJvbSAnLi4vdXRpbHMvY29tbWFuZExpZmVjeWNsZS5qcydcbmltcG9ydCB7IG5vcm1hbGl6ZUNvbnRyb2xNZXNzYWdlS2V5cyB9IGZyb20gJy4uL3V0aWxzL2NvbnRyb2xNZXNzYWdlQ29tcGF0LmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZVBlcm1pc3Npb25SZXF1ZXN0SG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcy5qcydcbmltcG9ydCB7XG4gIGFwcGx5UGVybWlzc2lvblVwZGF0ZXMsXG4gIHBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlcyxcbn0gZnJvbSAnLi4vdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblVwZGF0ZS5qcydcbmltcG9ydCB7XG4gIG5vdGlmeVNlc3Npb25TdGF0ZUNoYW5nZWQsXG4gIHR5cGUgUmVxdWlyZXNBY3Rpb25EZXRhaWxzLFxuICB0eXBlIFNlc3Npb25FeHRlcm5hbE1ldGFkYXRhLFxufSBmcm9tICcuLi91dGlscy9zZXNzaW9uU3RhdGUuanMnXG5pbXBvcnQgeyBqc29uUGFyc2UgfSBmcm9tICcuLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJy4uL3V0aWxzL3N0cmVhbS5qcydcbmltcG9ydCB7IG5kanNvblNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL25kanNvblNhZmVTdHJpbmdpZnkuanMnXG5cbi8qKlxuICogU3ludGhldGljIHRvb2wgbmFtZSB1c2VkIHdoZW4gZm9yd2FyZGluZyBzYW5kYm94IG5ldHdvcmsgcGVybWlzc2lvblxuICogcmVxdWVzdHMgdmlhIHRoZSBjYW5fdXNlX3Rvb2wgY29udHJvbF9yZXF1ZXN0IHByb3RvY29sLiBTREsgaG9zdHNcbiAqIHNlZSB0aGlzIGFzIGEgbm9ybWFsIHRvb2wgcGVybWlzc2lvbiBwcm9tcHQuXG4gKi9cbmV4cG9ydCBjb25zdCBTQU5EQk9YX05FVFdPUktfQUNDRVNTX1RPT0xfTkFNRSA9ICdTYW5kYm94TmV0d29ya0FjY2VzcydcblxuZnVuY3Rpb24gc2VyaWFsaXplRGVjaXNpb25SZWFzb24oXG4gIHJlYXNvbjogUGVybWlzc2lvbkRlY2lzaW9uUmVhc29uIHwgdW5kZWZpbmVkLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFyZWFzb24pIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoXG4gICAgKGZlYXR1cmUoJ0JBU0hfQ0xBU1NJRklFUicpIHx8IGZlYXR1cmUoJ1RSQU5TQ1JJUFRfQ0xBU1NJRklFUicpKSAmJlxuICAgIHJlYXNvbi50eXBlID09PSAnY2xhc3NpZmllcidcbiAgKSB7XG4gICAgcmV0dXJuIHJlYXNvbi5yZWFzb25cbiAgfVxuICBzd2l0Y2ggKHJlYXNvbi50eXBlKSB7XG4gICAgY2FzZSAncnVsZSc6XG4gICAgY2FzZSAnbW9kZSc6XG4gICAgY2FzZSAnc3ViY29tbWFuZFJlc3VsdHMnOlxuICAgIGNhc2UgJ3Blcm1pc3Npb25Qcm9tcHRUb29sJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICBjYXNlICdob29rJzpcbiAgICBjYXNlICdhc3luY0FnZW50JzpcbiAgICBjYXNlICdzYW5kYm94T3ZlcnJpZGUnOlxuICAgIGNhc2UgJ3dvcmtpbmdEaXInOlxuICAgIGNhc2UgJ3NhZmV0eUNoZWNrJzpcbiAgICBjYXNlICdvdGhlcic6XG4gICAgICByZXR1cm4gcmVhc29uLnJlYXNvblxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZXNBY3Rpb25EZXRhaWxzKFxuICB0b29sOiBUb29sLFxuICBpbnB1dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIHRvb2xVc2VJRDogc3RyaW5nLFxuICByZXF1ZXN0SWQ6IHN0cmluZyxcbik6IFJlcXVpcmVzQWN0aW9uRGV0YWlscyB7XG4gIC8vIFBlci10b29sIHN1bW1hcnkgbWV0aG9kcyBtYXkgdGhyb3cgb24gbWFsZm9ybWVkIGlucHV0OyBwZXJtaXNzaW9uXG4gIC8vIGhhbmRsaW5nIG11c3Qgbm90IGJyZWFrIGJlY2F1c2Ugb2YgYSBiYWQgZGVzY3JpcHRpb24uXG4gIGxldCBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHRyeSB7XG4gICAgZGVzY3JpcHRpb24gPVxuICAgICAgdG9vbC5nZXRBY3Rpdml0eURlc2NyaXB0aW9uPy4oaW5wdXQpID8/XG4gICAgICB0b29sLmdldFRvb2xVc2VTdW1tYXJ5Py4oaW5wdXQpID8/XG4gICAgICB0b29sLnVzZXJGYWNpbmdOYW1lKGlucHV0KVxuICB9IGNhdGNoIHtcbiAgICBkZXNjcmlwdGlvbiA9IHRvb2wubmFtZVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9vbF9uYW1lOiB0b29sLm5hbWUsXG4gICAgYWN0aW9uX2Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0b29sX3VzZV9pZDogdG9vbFVzZUlELFxuICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICBpbnB1dCxcbiAgfVxufVxuXG50eXBlIFBlbmRpbmdSZXF1ZXN0PFQ+ID0ge1xuICByZXNvbHZlOiAocmVzdWx0OiBUKSA9PiB2b2lkXG4gIHJlamVjdDogKGVycm9yOiB1bmtub3duKSA9PiB2b2lkXG4gIHNjaGVtYT86IHouU2NoZW1hXG4gIHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBzdHJ1Y3R1cmVkIHdheSB0byByZWFkIGFuZCB3cml0ZSBTREsgbWVzc2FnZXMgZnJvbSBzdGRpbyxcbiAqIGNhcHR1cmluZyB0aGUgU0RLIHByb3RvY29sLlxuICovXG4vLyBNYXhpbXVtIG51bWJlciBvZiByZXNvbHZlZCB0b29sX3VzZSBJRHMgdG8gdHJhY2suIE9uY2UgZXhjZWVkZWQsIHRoZSBvbGRlc3Rcbi8vIGVudHJ5IGlzIGV2aWN0ZWQuIFRoaXMgYm91bmRzIG1lbW9yeSBpbiB2ZXJ5IGxvbmcgc2Vzc2lvbnMgd2hpbGUga2VlcGluZ1xuLy8gZW5vdWdoIGhpc3RvcnkgdG8gY2F0Y2ggZHVwbGljYXRlIGNvbnRyb2xfcmVzcG9uc2UgZGVsaXZlcmllcy5cbmNvbnN0IE1BWF9SRVNPTFZFRF9UT09MX1VTRV9JRFMgPSAxMDAwXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkSU8ge1xuICByZWFkb25seSBzdHJ1Y3R1cmVkSW5wdXQ6IEFzeW5jR2VuZXJhdG9yPFN0ZGluTWVzc2FnZSB8IFNES01lc3NhZ2U+XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVuZGluZ1JlcXVlc3RzID0gbmV3IE1hcDxzdHJpbmcsIFBlbmRpbmdSZXF1ZXN0PHVua25vd24+PigpXG5cbiAgLy8gQ0NSIGV4dGVybmFsX21ldGFkYXRhIHJlYWQgYmFjayBvbiB3b3JrZXIgc3RhcnQ7IG51bGwgd2hlbiB0aGVcbiAgLy8gdHJhbnNwb3J0IGRvZXNuJ3QgcmVzdG9yZS4gQXNzaWduZWQgYnkgUmVtb3RlSU8uXG4gIHJlc3RvcmVkV29ya2VyU3RhdGU6IFByb21pc2U8U2Vzc2lvbkV4dGVybmFsTWV0YWRhdGEgfCBudWxsPiA9XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpXG5cbiAgcHJpdmF0ZSBpbnB1dENsb3NlZCA9IGZhbHNlXG4gIHByaXZhdGUgdW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2s/OiAoXG4gICAgcmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSxcbiAgKSA9PiBQcm9taXNlPHZvaWQ+XG5cbiAgLy8gVHJhY2tzIHRvb2xfdXNlIElEcyB0aGF0IGhhdmUgYmVlbiByZXNvbHZlZCB0aHJvdWdoIHRoZSBub3JtYWwgcGVybWlzc2lvblxuICAvLyBmbG93IChvciBhYm9ydGVkIGJ5IGEgaG9vaykuIFdoZW4gYSBkdXBsaWNhdGUgY29udHJvbF9yZXNwb25zZSBhcnJpdmVzXG4gIC8vIGFmdGVyIHRoZSBvcmlnaW5hbCB3YXMgYWxyZWFkeSBoYW5kbGVkLCB0aGlzIFNldCBwcmV2ZW50cyB0aGUgb3JwaGFuXG4gIC8vIGhhbmRsZXIgZnJvbSByZS1wcm9jZXNzaW5nIGl0IFx1MjAxNCB3aGljaCB3b3VsZCBwdXNoIGR1cGxpY2F0ZSBhc3Npc3RhbnRcbiAgLy8gbWVzc2FnZXMgaW50byBtdXRhYmxlTWVzc2FnZXMgYW5kIGNhdXNlIGEgNDAwIFwidG9vbF91c2UgaWRzIG11c3QgYmUgdW5pcXVlXCJcbiAgLy8gZXJyb3IgZnJvbSB0aGUgQVBJLlxuICBwcml2YXRlIHJlYWRvbmx5IHJlc29sdmVkVG9vbFVzZUlkcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIHByaXZhdGUgcHJlcGVuZGVkTGluZXM6IHN0cmluZ1tdID0gW11cbiAgcHJpdmF0ZSBvbkNvbnRyb2xSZXF1ZXN0U2VudD86IChyZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdCkgPT4gdm9pZFxuICBwcml2YXRlIG9uQ29udHJvbFJlcXVlc3RSZXNvbHZlZD86IChyZXF1ZXN0SWQ6IHN0cmluZykgPT4gdm9pZFxuXG4gIC8vIHNlbmRSZXF1ZXN0KCkgYW5kIHByaW50LnRzIGJvdGggZW5xdWV1ZSBoZXJlOyB0aGUgZHJhaW4gbG9vcCBpcyB0aGVcbiAgLy8gb25seSB3cml0ZXIuIFByZXZlbnRzIGNvbnRyb2xfcmVxdWVzdCBmcm9tIG92ZXJ0YWtpbmcgcXVldWVkIHN0cmVhbV9ldmVudHMuXG4gIHJlYWRvbmx5IG91dGJvdW5kID0gbmV3IFN0cmVhbTxTdGRvdXRNZXNzYWdlPigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnB1dDogQXN5bmNJdGVyYWJsZTxzdHJpbmc+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVwbGF5VXNlck1lc3NhZ2VzPzogYm9vbGVhbixcbiAgKSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0XG4gICAgdGhpcy5zdHJ1Y3R1cmVkSW5wdXQgPSB0aGlzLnJlYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZHMgYSB0b29sX3VzZSBJRCBhcyByZXNvbHZlZCBzbyB0aGF0IGxhdGUvZHVwbGljYXRlIGNvbnRyb2xfcmVzcG9uc2VcbiAgICogbWVzc2FnZXMgZm9yIHRoZSBzYW1lIHRvb2wgYXJlIGlnbm9yZWQgYnkgdGhlIG9ycGhhbiBoYW5kbGVyLlxuICAgKi9cbiAgcHJpdmF0ZSB0cmFja1Jlc29sdmVkVG9vbFVzZUlkKHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KTogdm9pZCB7XG4gICAgaWYgKHJlcXVlc3QucmVxdWVzdC5zdWJ0eXBlID09PSAnY2FuX3VzZV90b29sJykge1xuICAgICAgdGhpcy5yZXNvbHZlZFRvb2xVc2VJZHMuYWRkKHJlcXVlc3QucmVxdWVzdC50b29sX3VzZV9pZClcbiAgICAgIGlmICh0aGlzLnJlc29sdmVkVG9vbFVzZUlkcy5zaXplID4gTUFYX1JFU09MVkVEX1RPT0xfVVNFX0lEUykge1xuICAgICAgICAvLyBFdmljdCB0aGUgb2xkZXN0IGVudHJ5IChTZXRzIGl0ZXJhdGUgaW4gaW5zZXJ0aW9uIG9yZGVyKVxuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMucmVzb2x2ZWRUb29sVXNlSWRzLnZhbHVlcygpLm5leHQoKS52YWx1ZVxuICAgICAgICBpZiAoZmlyc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWRUb29sVXNlSWRzLmRlbGV0ZShmaXJzdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBGbHVzaCBwZW5kaW5nIGludGVybmFsIGV2ZW50cy4gTm8tb3AgZm9yIG5vbi1yZW1vdGUgSU8uIE92ZXJyaWRkZW4gYnkgUmVtb3RlSU8uICovXG4gIGZsdXNoSW50ZXJuYWxFdmVudHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICAvKiogSW50ZXJuYWwtZXZlbnQgcXVldWUgZGVwdGguIE92ZXJyaWRkZW4gYnkgUmVtb3RlSU87IHplcm8gb3RoZXJ3aXNlLiAqL1xuICBnZXQgaW50ZXJuYWxFdmVudHNQZW5kaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWV1ZSBhIHVzZXIgdHVybiB0byBiZSB5aWVsZGVkIGJlZm9yZSB0aGUgbmV4dCBtZXNzYWdlIGZyb20gdGhpcy5pbnB1dC5cbiAgICogV29ya3MgYmVmb3JlIGl0ZXJhdGlvbiBzdGFydHMgYW5kIG1pZC1zdHJlYW0gXHUyMDE0IHJlYWQoKSByZS1jaGVja3NcbiAgICogcHJlcGVuZGVkTGluZXMgYmV0d2VlbiBlYWNoIHlpZWxkZWQgbWVzc2FnZS5cbiAgICovXG4gIHByZXBlbmRVc2VyTWVzc2FnZShjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnByZXBlbmRlZExpbmVzLnB1c2goXG4gICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICBzZXNzaW9uX2lkOiAnJyxcbiAgICAgICAgbWVzc2FnZTogeyByb2xlOiAndXNlcicsIGNvbnRlbnQgfSxcbiAgICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgfSBzYXRpc2ZpZXMgU0RLVXNlck1lc3NhZ2UpICsgJ1xcbicsXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyAqcmVhZCgpIHtcbiAgICBsZXQgY29udGVudCA9ICcnXG5cbiAgICAvLyBDYWxsZWQgb25jZSBiZWZvcmUgZm9yLWF3YWl0IChhbiBlbXB0eSB0aGlzLmlucHV0IG90aGVyd2lzZSBza2lwcyB0aGVcbiAgICAvLyBsb29wIGJvZHkgZW50aXJlbHkpLCB0aGVuIGFnYWluIHBlciBibG9jay4gcHJlcGVuZGVkTGluZXMgcmUtY2hlY2sgaXNcbiAgICAvLyBpbnNpZGUgdGhlIHdoaWxlIHNvIGEgcHJlcGVuZCBwdXNoZWQgYmV0d2VlbiB0d28gbWVzc2FnZXMgaW4gdGhlIFNBTUVcbiAgICAvLyBibG9jayBzdGlsbCBsYW5kcyBmaXJzdC5cbiAgICBjb25zdCBzcGxpdEFuZFByb2Nlc3MgPSBhc3luYyBmdW5jdGlvbiogKHRoaXM6IFN0cnVjdHVyZWRJTykge1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICBpZiAodGhpcy5wcmVwZW5kZWRMaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGVudCA9IHRoaXMucHJlcGVuZGVkTGluZXMuam9pbignJykgKyBjb250ZW50XG4gICAgICAgICAgdGhpcy5wcmVwZW5kZWRMaW5lcyA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3bGluZSA9IGNvbnRlbnQuaW5kZXhPZignXFxuJylcbiAgICAgICAgaWYgKG5ld2xpbmUgPT09IC0xKSBicmVha1xuICAgICAgICBjb25zdCBsaW5lID0gY29udGVudC5zbGljZSgwLCBuZXdsaW5lKVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShuZXdsaW5lICsgMSlcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucHJvY2Vzc0xpbmUobGluZSlcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV9zdGRpbl9tZXNzYWdlX3BhcnNlZCcsIHtcbiAgICAgICAgICAgIHR5cGU6IG1lc3NhZ2UudHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHlpZWxkIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgeWllbGQqIHNwbGl0QW5kUHJvY2VzcygpXG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGJsb2NrIG9mIHRoaXMuaW5wdXQpIHtcbiAgICAgIGNvbnRlbnQgKz0gYmxvY2tcbiAgICAgIHlpZWxkKiBzcGxpdEFuZFByb2Nlc3MoKVxuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucHJvY2Vzc0xpbmUoY29udGVudClcbiAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgIHlpZWxkIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnB1dENsb3NlZCA9IHRydWVcbiAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5wZW5kaW5nUmVxdWVzdHMudmFsdWVzKCkpIHtcbiAgICAgIC8vIFJlamVjdCBhbGwgcGVuZGluZyByZXF1ZXN0cyBpZiB0aGUgaW5wdXQgc3RyZWFtXG4gICAgICByZXF1ZXN0LnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKCdUb29sIHBlcm1pc3Npb24gc3RyZWFtIGNsb3NlZCBiZWZvcmUgcmVzcG9uc2UgcmVjZWl2ZWQnKSxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRQZW5kaW5nUGVybWlzc2lvblJlcXVlc3RzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGVuZGluZ1JlcXVlc3RzLnZhbHVlcygpKVxuICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeS5yZXF1ZXN0KVxuICAgICAgLmZpbHRlcihwciA9PiBwci5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjYW5fdXNlX3Rvb2wnKVxuICB9XG5cbiAgc2V0VW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2soXG4gICAgY2FsbGJhY2s6IChyZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlKSA9PiBQcm9taXNlPHZvaWQ+LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnVuZXhwZWN0ZWRSZXNwb25zZUNhbGxiYWNrID0gY2FsbGJhY2tcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3QgYSBjb250cm9sX3Jlc3BvbnNlIG1lc3NhZ2UgdG8gcmVzb2x2ZSBhIHBlbmRpbmcgcGVybWlzc2lvbiByZXF1ZXN0LlxuICAgKiBVc2VkIGJ5IHRoZSBicmlkZ2UgdG8gZmVlZCBwZXJtaXNzaW9uIHJlc3BvbnNlcyBmcm9tIGNsYXVkZS5haSBpbnRvIHRoZVxuICAgKiBTREsgcGVybWlzc2lvbiBmbG93LlxuICAgKlxuICAgKiBBbHNvIHNlbmRzIGEgY29udHJvbF9jYW5jZWxfcmVxdWVzdCB0byB0aGUgU0RLIGNvbnN1bWVyIHNvIGl0cyBjYW5Vc2VUb29sXG4gICAqIGNhbGxiYWNrIGlzIGFib3J0ZWQgdmlhIHRoZSBzaWduYWwgXHUyMDE0IG90aGVyd2lzZSB0aGUgY2FsbGJhY2sgaGFuZ3MuXG4gICAqL1xuICBpbmplY3RDb250cm9sUmVzcG9uc2UocmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IHJlc3BvbnNlLnJlc3BvbnNlPy5yZXF1ZXN0X2lkXG4gICAgaWYgKCFyZXF1ZXN0SWQpIHJldHVyblxuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnBlbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmICghcmVxdWVzdCkgcmV0dXJuXG4gICAgdGhpcy50cmFja1Jlc29sdmVkVG9vbFVzZUlkKHJlcXVlc3QucmVxdWVzdClcbiAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cy5kZWxldGUocmVxdWVzdElkKVxuICAgIC8vIENhbmNlbCB0aGUgU0RLIGNvbnN1bWVyJ3MgY2FuVXNlVG9vbCBjYWxsYmFjayBcdTIwMTQgdGhlIGJyaWRnZSB3b24uXG4gICAgdm9pZCB0aGlzLndyaXRlKHtcbiAgICAgIHR5cGU6ICdjb250cm9sX2NhbmNlbF9yZXF1ZXN0JyxcbiAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICB9KVxuICAgIGlmIChyZXNwb25zZS5yZXNwb25zZS5zdWJ0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICByZXF1ZXN0LnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2UucmVzcG9uc2UuZXJyb3IpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXNwb25zZS5yZXNwb25zZVxuICAgICAgaWYgKHJlcXVlc3Quc2NoZW1hKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVxdWVzdC5yZXNvbHZlKHJlcXVlc3Quc2NoZW1hLnBhcnNlKHJlc3VsdCkpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVxdWVzdC5yZWplY3QoZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3QucmVzb2x2ZSh7fSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayBpbnZva2VkIHdoZW5ldmVyIGEgY2FuX3VzZV90b29sIGNvbnRyb2xfcmVxdWVzdFxuICAgKiBpcyB3cml0dGVuIHRvIHN0ZG91dC4gVXNlZCBieSB0aGUgYnJpZGdlIHRvIGZvcndhcmQgcGVybWlzc2lvblxuICAgKiByZXF1ZXN0cyB0byBjbGF1ZGUuYWkuXG4gICAqL1xuICBzZXRPbkNvbnRyb2xSZXF1ZXN0U2VudChcbiAgICBjYWxsYmFjazogKChyZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdCkgPT4gdm9pZCkgfCB1bmRlZmluZWQsXG4gICk6IHZvaWQge1xuICAgIHRoaXMub25Db250cm9sUmVxdWVzdFNlbnQgPSBjYWxsYmFja1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgaW52b2tlZCB3aGVuIGEgY2FuX3VzZV90b29sIGNvbnRyb2xfcmVzcG9uc2UgYXJyaXZlc1xuICAgKiBmcm9tIHRoZSBTREsgY29uc3VtZXIgKHZpYSBzdGRpbikuIFVzZWQgYnkgdGhlIGJyaWRnZSB0byBjYW5jZWwgdGhlXG4gICAqIHN0YWxlIHBlcm1pc3Npb24gcHJvbXB0IG9uIGNsYXVkZS5haSB3aGVuIHRoZSBTREsgY29uc3VtZXIgd2lucyB0aGUgcmFjZS5cbiAgICovXG4gIHNldE9uQ29udHJvbFJlcXVlc3RSZXNvbHZlZChcbiAgICBjYWxsYmFjazogKChyZXF1ZXN0SWQ6IHN0cmluZykgPT4gdm9pZCkgfCB1bmRlZmluZWQsXG4gICk6IHZvaWQge1xuICAgIHRoaXMub25Db250cm9sUmVxdWVzdFJlc29sdmVkID0gY2FsbGJhY2tcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0xpbmUoXG4gICAgbGluZTogc3RyaW5nLFxuICApOiBQcm9taXNlPFN0ZGluTWVzc2FnZSB8IFNES01lc3NhZ2UgfCB1bmRlZmluZWQ+IHtcbiAgICAvLyBTa2lwIGVtcHR5IGxpbmVzIChlLmcuIGZyb20gZG91YmxlIG5ld2xpbmVzIGluIHBpcGVkIHN0ZGluKVxuICAgIGlmICghbGluZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG5vcm1hbGl6ZUNvbnRyb2xNZXNzYWdlS2V5cyhqc29uUGFyc2UobGluZSkpIGFzXG4gICAgICAgIHwgU3RkaW5NZXNzYWdlXG4gICAgICAgIHwgU0RLTWVzc2FnZVxuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2tlZXBfYWxpdmUnKSB7XG4gICAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSBrZWVwLWFsaXZlIG1lc3NhZ2VzXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICd1cGRhdGVfZW52aXJvbm1lbnRfdmFyaWFibGVzJykge1xuICAgICAgICAvLyBBcHBseSBlbnZpcm9ubWVudCB2YXJpYWJsZSB1cGRhdGVzIGRpcmVjdGx5IHRvIHByb2Nlc3MuZW52LlxuICAgICAgICAvLyBVc2VkIGJ5IGJyaWRnZSBzZXNzaW9uIHJ1bm5lciBmb3IgYXV0aCB0b2tlbiByZWZyZXNoXG4gICAgICAgIC8vIChDTEFVREVfQ09ERV9TRVNTSU9OX0FDQ0VTU19UT0tFTikgd2hpY2ggbXVzdCBiZSByZWFkYWJsZVxuICAgICAgICAvLyBieSB0aGUgUkVQTCBwcm9jZXNzIGl0c2VsZiwgbm90IGp1c3QgY2hpbGQgQmFzaCBjb21tYW5kcy5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1lc3NhZ2UudmFyaWFibGVzKVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXNzYWdlLnZhcmlhYmxlcykpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudltrZXldID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtzdHJ1Y3R1cmVkSU9dIGFwcGxpZWQgdXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlczogJHtrZXlzLmpvaW4oJywgJyl9YCxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXNwb25zZScpIHtcbiAgICAgICAgLy8gQ2xvc2UgbGlmZWN5Y2xlIGZvciBldmVyeSBjb250cm9sX3Jlc3BvbnNlLCBpbmNsdWRpbmcgZHVwbGljYXRlc1xuICAgICAgICAvLyBhbmQgb3JwaGFucyBcdTIwMTQgb3JwaGFucyBkb24ndCB5aWVsZCB0byBwcmludC50cydzIG1haW4gbG9vcCwgc28gdGhpc1xuICAgICAgICAvLyBpcyB0aGUgb25seSBwYXRoIHRoYXQgc2VlcyB0aGVtLiB1dWlkIGlzIHNlcnZlci1pbmplY3RlZCBpbnRvIHRoZVxuICAgICAgICAvLyBwYXlsb2FkLlxuICAgICAgICBjb25zdCB1dWlkID1cbiAgICAgICAgICAndXVpZCcgaW4gbWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZS51dWlkID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBtZXNzYWdlLnV1aWRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgIGlmICh1dWlkKSB7XG4gICAgICAgICAgbm90aWZ5Q29tbWFuZExpZmVjeWNsZSh1dWlkLCAnY29tcGxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5wZW5kaW5nUmVxdWVzdHMuZ2V0KG1lc3NhZ2UucmVzcG9uc2UucmVxdWVzdF9pZClcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0b29sX3VzZSB3YXMgYWxyZWFkeSByZXNvbHZlZCB0aHJvdWdoIHRoZSBub3JtYWxcbiAgICAgICAgICAvLyBwZXJtaXNzaW9uIGZsb3cuIER1cGxpY2F0ZSBjb250cm9sX3Jlc3BvbnNlIGRlbGl2ZXJpZXMgKGUuZy4gZnJvbVxuICAgICAgICAgIC8vIFdlYlNvY2tldCByZWNvbm5lY3RzKSBhcnJpdmUgYWZ0ZXIgdGhlIG9yaWdpbmFsIHdhcyBoYW5kbGVkLCBhbmRcbiAgICAgICAgICAvLyByZS1wcm9jZXNzaW5nIHRoZW0gd291bGQgcHVzaCBkdXBsaWNhdGUgYXNzaXN0YW50IG1lc3NhZ2VzIGludG9cbiAgICAgICAgICAvLyB0aGUgY29udmVyc2F0aW9uLCBjYXVzaW5nIEFQSSA0MDAgZXJyb3JzLlxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUGF5bG9hZCA9XG4gICAgICAgICAgICBtZXNzYWdlLnJlc3BvbnNlLnN1YnR5cGUgPT09ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICA/IG1lc3NhZ2UucmVzcG9uc2UucmVzcG9uc2VcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICBjb25zdCB0b29sVXNlSUQgPSByZXNwb25zZVBheWxvYWQ/LnRvb2xVc2VJRFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiB0b29sVXNlSUQgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkVG9vbFVzZUlkcy5oYXModG9vbFVzZUlEKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICBgSWdub3JpbmcgZHVwbGljYXRlIGNvbnRyb2xfcmVzcG9uc2UgZm9yIGFscmVhZHktcmVzb2x2ZWQgdG9vbFVzZUlEPSR7dG9vbFVzZUlEfSByZXF1ZXN0X2lkPSR7bWVzc2FnZS5yZXNwb25zZS5yZXF1ZXN0X2lkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnVuZXhwZWN0ZWRSZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVuZXhwZWN0ZWRSZXNwb25zZUNhbGxiYWNrKG1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gSWdub3JlIHJlc3BvbnNlcyBmb3IgcmVxdWVzdHMgd2UgZG9uJ3Qga25vdyBhYm91dFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2tSZXNvbHZlZFRvb2xVc2VJZChyZXF1ZXN0LnJlcXVlc3QpXG4gICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLmRlbGV0ZShtZXNzYWdlLnJlc3BvbnNlLnJlcXVlc3RfaWQpXG4gICAgICAgIC8vIE5vdGlmeSB0aGUgYnJpZGdlIHdoZW4gdGhlIFNESyBjb25zdW1lciByZXNvbHZlcyBhIGNhbl91c2VfdG9vbFxuICAgICAgICAvLyByZXF1ZXN0LCBzbyBpdCBjYW4gY2FuY2VsIHRoZSBzdGFsZSBwZXJtaXNzaW9uIHByb21wdCBvbiBjbGF1ZGUuYWkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICByZXF1ZXN0LnJlcXVlc3QucmVxdWVzdC5zdWJ0eXBlID09PSAnY2FuX3VzZV90b29sJyAmJlxuICAgICAgICAgIHRoaXMub25Db250cm9sUmVxdWVzdFJlc29sdmVkXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMub25Db250cm9sUmVxdWVzdFJlc29sdmVkKG1lc3NhZ2UucmVzcG9uc2UucmVxdWVzdF9pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXNzYWdlLnJlc3BvbnNlLnN1YnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICByZXF1ZXN0LnJlamVjdChuZXcgRXJyb3IobWVzc2FnZS5yZXNwb25zZS5lcnJvcikpXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1lc3NhZ2UucmVzcG9uc2UucmVzcG9uc2VcbiAgICAgICAgaWYgKHJlcXVlc3Quc2NoZW1hKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVzb2x2ZShyZXF1ZXN0LnNjaGVtYS5wYXJzZShyZXN1bHQpKVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlamVjdChlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdC5yZXNvbHZlKHt9KVxuICAgICAgICB9XG4gICAgICAgIC8vIFByb3BhZ2F0ZSBjb250cm9sIHJlc3BvbnNlcyB3aGVuIHJlcGxheSBpcyBlbmFibGVkXG4gICAgICAgIGlmICh0aGlzLnJlcGxheVVzZXJNZXNzYWdlcykge1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBtZXNzYWdlLnR5cGUgIT09ICd1c2VyJyAmJlxuICAgICAgICBtZXNzYWdlLnR5cGUgIT09ICdjb250cm9sX3JlcXVlc3QnICYmXG4gICAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2Fzc2lzdGFudCcgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAnc3lzdGVtJ1xuICAgICAgKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgSWdub3JpbmcgdW5rbm93biBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWAsIHtcbiAgICAgICAgICBsZXZlbDogJ3dhcm4nLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXF1ZXN0Jykge1xuICAgICAgICBpZiAoIW1lc3NhZ2UucmVxdWVzdCkge1xuICAgICAgICAgIGV4aXRXaXRoTWVzc2FnZShgRXJyb3I6IE1pc3NpbmcgcmVxdWVzdCBvbiBjb250cm9sX3JlcXVlc3RgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnYXNzaXN0YW50JyB8fCBtZXNzYWdlLnR5cGUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlLnJvbGUgIT09ICd1c2VyJykge1xuICAgICAgICBleGl0V2l0aE1lc3NhZ2UoXG4gICAgICAgICAgYEVycm9yOiBFeHBlY3RlZCBtZXNzYWdlIHJvbGUgJ3VzZXInLCBnb3QgJyR7bWVzc2FnZS5tZXNzYWdlLnJvbGV9J2AsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgc3RyZWFtaW5nIGlucHV0IGxpbmU6ICR7bGluZX06ICR7ZXJyb3J9YClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gIH1cblxuICBhc3luYyB3cml0ZShtZXNzYWdlOiBTdGRvdXRNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgd3JpdGVUb1N0ZG91dChuZGpzb25TYWZlU3RyaW5naWZ5KG1lc3NhZ2UpICsgJ1xcbicpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRSZXF1ZXN0PFJlc3BvbnNlPihcbiAgICByZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdFsncmVxdWVzdCddLFxuICAgIHNjaGVtYTogei5TY2hlbWEsXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgcmVxdWVzdElkOiBzdHJpbmcgPSByYW5kb21VVUlEKCksXG4gICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBtZXNzYWdlOiBTREtDb250cm9sUmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6ICdjb250cm9sX3JlcXVlc3QnLFxuICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgcmVxdWVzdCxcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRDbG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtIGNsb3NlZCcpXG4gICAgfVxuICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBhYm9ydGVkJylcbiAgICB9XG4gICAgdGhpcy5vdXRib3VuZC5lbnF1ZXVlKG1lc3NhZ2UpXG4gICAgaWYgKHJlcXVlc3Quc3VidHlwZSA9PT0gJ2Nhbl91c2VfdG9vbCcgJiYgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0U2VudCkge1xuICAgICAgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0U2VudChtZXNzYWdlKVxuICAgIH1cbiAgICBjb25zdCBhYm9ydGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5vdXRib3VuZC5lbnF1ZXVlKHtcbiAgICAgICAgdHlwZTogJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnLFxuICAgICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICB9KVxuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVqZWN0IHRoZSBvdXRzdGFuZGluZyBwcm9taXNlLCB3aXRob3V0XG4gICAgICAvLyB3YWl0aW5nIGZvciB0aGUgaG9zdCB0byBhY2tub3dsZWRnZSB0aGUgY2FuY2VsbGF0aW9uLlxuICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMucGVuZGluZ1JlcXVlc3RzLmdldChyZXF1ZXN0SWQpXG4gICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAvLyBUcmFjayB0aGUgdG9vbF91c2UgSUQgYXMgcmVzb2x2ZWQgYmVmb3JlIHJlamVjdGluZywgc28gdGhhdCBhXG4gICAgICAgIC8vIGxhdGUgcmVzcG9uc2UgZnJvbSB0aGUgaG9zdCBpcyBpZ25vcmVkIGJ5IHRoZSBvcnBoYW4gaGFuZGxlci5cbiAgICAgICAgdGhpcy50cmFja1Jlc29sdmVkVG9vbFVzZUlkKHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgcmVxdWVzdC5yZWplY3QobmV3IEFib3J0RXJyb3IoKSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNpZ25hbCkge1xuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRlZCwge1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdElkLCB7XG4gICAgICAgICAgcmVxdWVzdDoge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRyb2xfcmVxdWVzdCcsXG4gICAgICAgICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzb2x2ZTogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0IGFzIFJlc3BvbnNlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVqZWN0LFxuICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRlZClcbiAgICAgIH1cbiAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0SWQpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2FuVXNlVG9vbChcbiAgICBvblBlcm1pc3Npb25Qcm9tcHQ/OiAoZGV0YWlsczogUmVxdWlyZXNBY3Rpb25EZXRhaWxzKSA9PiB2b2lkLFxuICApOiBDYW5Vc2VUb29sRm4ge1xuICAgIHJldHVybiBhc3luYyAoXG4gICAgICB0b29sOiBUb29sLFxuICAgICAgaW5wdXQ6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxuICAgICAgdG9vbFVzZUNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuICAgICAgYXNzaXN0YW50TWVzc2FnZTogQXNzaXN0YW50TWVzc2FnZSxcbiAgICAgIHRvb2xVc2VJRDogc3RyaW5nLFxuICAgICAgZm9yY2VEZWNpc2lvbj86IFBlcm1pc3Npb25EZWNpc2lvbixcbiAgICApOiBQcm9taXNlPFBlcm1pc3Npb25EZWNpc2lvbj4gPT4ge1xuICAgICAgY29uc3QgbWFpblBlcm1pc3Npb25SZXN1bHQgPVxuICAgICAgICBmb3JjZURlY2lzaW9uID8/XG4gICAgICAgIChhd2FpdCBoYXNQZXJtaXNzaW9uc1RvVXNlVG9vbChcbiAgICAgICAgICB0b29sLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgIGFzc2lzdGFudE1lc3NhZ2UsXG4gICAgICAgICAgdG9vbFVzZUlELFxuICAgICAgICApKVxuICAgICAgLy8gSWYgdGhlIHRvb2wgaXMgYWxsb3dlZCBvciBkZW5pZWQsIHJldHVybiB0aGUgcmVzdWx0XG4gICAgICBpZiAoXG4gICAgICAgIG1haW5QZXJtaXNzaW9uUmVzdWx0LmJlaGF2aW9yID09PSAnYWxsb3cnIHx8XG4gICAgICAgIG1haW5QZXJtaXNzaW9uUmVzdWx0LmJlaGF2aW9yID09PSAnZGVueSdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbWFpblBlcm1pc3Npb25SZXN1bHRcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIFBlcm1pc3Npb25SZXF1ZXN0IGhvb2tzIGluIHBhcmFsbGVsIHdpdGggdGhlIFNESyBwZXJtaXNzaW9uXG4gICAgICAvLyBwcm9tcHQuICBJbiB0aGUgdGVybWluYWwgQ0xJLCBob29rcyByYWNlIGFnYWluc3QgdGhlIGludGVyYWN0aXZlXG4gICAgICAvLyBwcm9tcHQgc28gdGhhdCBlLmcuIGEgaG9vayB3aXRoIC0tZGVsYXkgMjAgZG9lc24ndCBibG9jayB0aGUgVUkuXG4gICAgICAvLyBXZSBuZWVkIHRoZSBzYW1lIGJlaGF2aW9yIGhlcmU6IHRoZSBTREsgaG9zdCAoVlMgQ29kZSwgZXRjLikgc2hvd3NcbiAgICAgIC8vIGl0cyBwZXJtaXNzaW9uIGRpYWxvZyBpbW1lZGlhdGVseSB3aGlsZSBob29rcyBydW4gaW4gdGhlIGJhY2tncm91bmQuXG4gICAgICAvLyBXaGljaGV2ZXIgcmVzb2x2ZXMgZmlyc3Qgd2luczsgdGhlIGxvc2VyIGlzIGNhbmNlbGxlZC9pZ25vcmVkLlxuXG4gICAgICAvLyBBYm9ydENvbnRyb2xsZXIgdXNlZCB0byBjYW5jZWwgdGhlIFNESyByZXF1ZXN0IGlmIGEgaG9vayBkZWNpZGVzIGZpcnN0XG4gICAgICBjb25zdCBob29rQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICBjb25zdCBwYXJlbnRTaWduYWwgPSB0b29sVXNlQ29udGV4dC5hYm9ydENvbnRyb2xsZXIuc2lnbmFsXG4gICAgICAvLyBGb3J3YXJkIHBhcmVudCBhYm9ydCB0byBvdXIgbG9jYWwgY29udHJvbGxlclxuICAgICAgY29uc3Qgb25QYXJlbnRBYm9ydCA9ICgpID0+IGhvb2tBYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgcGFyZW50U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25QYXJlbnRBYm9ydCwgeyBvbmNlOiB0cnVlIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSBob29rIGV2YWx1YXRpb24gKHJ1bnMgaW4gYmFja2dyb3VuZClcbiAgICAgICAgY29uc3QgaG9va1Byb21pc2UgPSBleGVjdXRlUGVybWlzc2lvblJlcXVlc3RIb29rc0ZvclNESyhcbiAgICAgICAgICB0b29sLm5hbWUsXG4gICAgICAgICAgdG9vbFVzZUlELFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgIG1haW5QZXJtaXNzaW9uUmVzdWx0LnN1Z2dlc3Rpb25zLFxuICAgICAgICApLnRoZW4oZGVjaXNpb24gPT4gKHsgc291cmNlOiAnaG9vaycgYXMgY29uc3QsIGRlY2lzaW9uIH0pKVxuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBTREsgcGVybWlzc2lvbiBwcm9tcHQgaW1tZWRpYXRlbHkgKGRvbid0IHdhaXQgZm9yIGhvb2tzKVxuICAgICAgICBjb25zdCByZXF1ZXN0SWQgPSByYW5kb21VVUlEKClcbiAgICAgICAgb25QZXJtaXNzaW9uUHJvbXB0Py4oXG4gICAgICAgICAgYnVpbGRSZXF1aXJlc0FjdGlvbkRldGFpbHModG9vbCwgaW5wdXQsIHRvb2xVc2VJRCwgcmVxdWVzdElkKSxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBzZGtQcm9taXNlID0gdGhpcy5zZW5kUmVxdWVzdDxQZXJtaXNzaW9uVG9vbE91dHB1dD4oXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3VidHlwZTogJ2Nhbl91c2VfdG9vbCcsXG4gICAgICAgICAgICB0b29sX25hbWU6IHRvb2wubmFtZSxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgcGVybWlzc2lvbl9zdWdnZXN0aW9uczogbWFpblBlcm1pc3Npb25SZXN1bHQuc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgICBibG9ja2VkX3BhdGg6IG1haW5QZXJtaXNzaW9uUmVzdWx0LmJsb2NrZWRQYXRoLFxuICAgICAgICAgICAgZGVjaXNpb25fcmVhc29uOiBzZXJpYWxpemVEZWNpc2lvblJlYXNvbihcbiAgICAgICAgICAgICAgbWFpblBlcm1pc3Npb25SZXN1bHQuZGVjaXNpb25SZWFzb24sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdG9vbF91c2VfaWQ6IHRvb2xVc2VJRCxcbiAgICAgICAgICAgIGFnZW50X2lkOiB0b29sVXNlQ29udGV4dC5hZ2VudElkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGVybWlzc2lvblRvb2xPdXRwdXRTY2hlbWEoKSxcbiAgICAgICAgICBob29rQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICkudGhlbihyZXN1bHQgPT4gKHsgc291cmNlOiAnc2RrJyBhcyBjb25zdCwgcmVzdWx0IH0pKVxuXG4gICAgICAgIC8vIFJhY2U6IGhvb2sgY29tcGxldGlvbiB2cyBTREsgcHJvbXB0IHJlc3BvbnNlLlxuICAgICAgICAvLyBUaGUgaG9vayBwcm9taXNlIGFsd2F5cyByZXNvbHZlcyAobmV2ZXIgcmVqZWN0cyksIHJldHVybmluZ1xuICAgICAgICAvLyB1bmRlZmluZWQgaWYgbm8gaG9vayBtYWRlIGEgZGVjaXNpb24uXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IFByb21pc2UucmFjZShbaG9va1Byb21pc2UsIHNka1Byb21pc2VdKVxuXG4gICAgICAgIGlmICh3aW5uZXIuc291cmNlID09PSAnaG9vaycpIHtcbiAgICAgICAgICBpZiAod2lubmVyLmRlY2lzaW9uKSB7XG4gICAgICAgICAgICAvLyBIb29rIGRlY2lkZWQgXHUyMDE0IGFib3J0IHRoZSBwZW5kaW5nIFNESyByZXF1ZXN0LlxuICAgICAgICAgICAgLy8gU3VwcHJlc3MgdGhlIGV4cGVjdGVkIEFib3J0RXJyb3IgcmVqZWN0aW9uIGZyb20gc2RrUHJvbWlzZS5cbiAgICAgICAgICAgIHNka1Byb21pc2UuY2F0Y2goKCkgPT4ge30pXG4gICAgICAgICAgICBob29rQWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICAgIHJldHVybiB3aW5uZXIuZGVjaXNpb25cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSG9vayBwYXNzZWQgdGhyb3VnaCAobm8gZGVjaXNpb24pIFx1MjAxNCB3YWl0IGZvciB0aGUgU0RLIHByb21wdFxuICAgICAgICAgIGNvbnN0IHNka1Jlc3VsdCA9IGF3YWl0IHNka1Byb21pc2VcbiAgICAgICAgICByZXR1cm4gcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbihcbiAgICAgICAgICAgIHNka1Jlc3VsdC5yZXN1bHQsXG4gICAgICAgICAgICB0b29sLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB0b29sVXNlQ29udGV4dCxcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTREsgcHJvbXB0IHJlc3BvbmRlZCBmaXJzdCBcdTIwMTQgdXNlIGl0cyByZXN1bHQgKGhvb2sgc3RpbGwgcnVubmluZ1xuICAgICAgICAvLyBpbiBiYWNrZ3JvdW5kIGJ1dCBpdHMgcmVzdWx0IHdpbGwgYmUgaWdub3JlZClcbiAgICAgICAgcmV0dXJuIHBlcm1pc3Npb25Qcm9tcHRUb29sUmVzdWx0VG9QZXJtaXNzaW9uRGVjaXNpb24oXG4gICAgICAgICAgd2lubmVyLnJlc3VsdCxcbiAgICAgICAgICB0b29sLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICApXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWhhdmlvcjogJ2RlbnknLFxuICAgICAgICAgICAgbWVzc2FnZTogYFRvb2wgcGVybWlzc2lvbiByZXF1ZXN0IGZhaWxlZDogJHtlcnJvcn1gLFxuICAgICAgICAgICAgdG9vbFVzZUlELFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbCxcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICB0b29sVXNlQ29udGV4dCxcbiAgICAgICAgKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gT25seSB0cmFuc2l0aW9uIGJhY2sgdG8gJ3J1bm5pbmcnIGlmIG5vIG90aGVyIHBlcm1pc3Npb24gcHJvbXB0c1xuICAgICAgICAvLyBhcmUgcGVuZGluZyAoY29uY3VycmVudCB0b29sIGV4ZWN1dGlvbiBjYW4gaGF2ZSBtdWx0aXBsZSBpbi1mbGlnaHQpLlxuICAgICAgICBpZiAodGhpcy5nZXRQZW5kaW5nUGVybWlzc2lvblJlcXVlc3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCgncnVubmluZycpXG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25QYXJlbnRBYm9ydClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVIb29rQ2FsbGJhY2soY2FsbGJhY2tJZDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogSG9va0NhbGxiYWNrIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2NhbGxiYWNrJyxcbiAgICAgIHRpbWVvdXQsXG4gICAgICBjYWxsYmFjazogYXN5bmMgKFxuICAgICAgICBpbnB1dDogSG9va0lucHV0LFxuICAgICAgICB0b29sVXNlSUQ6IHN0cmluZyB8IG51bGwsXG4gICAgICAgIGFib3J0OiBBYm9ydFNpZ25hbCB8IHVuZGVmaW5lZCxcbiAgICAgICk6IFByb21pc2U8SG9va0pTT05PdXRwdXQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PEhvb2tKU09OT3V0cHV0PihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2hvb2tfY2FsbGJhY2snLFxuICAgICAgICAgICAgICBjYWxsYmFja19pZDogY2FsbGJhY2tJZCxcbiAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgIHRvb2xfdXNlX2lkOiB0b29sVXNlSUQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvb2tKU09OT3V0cHV0U2NoZW1hKCksXG4gICAgICAgICAgICBhYm9ydCxcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbiBob29rIGNhbGxiYWNrICR7Y2FsbGJhY2tJZH06YCwgZXJyb3IpXG4gICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIGVsaWNpdGF0aW9uIHJlcXVlc3QgdG8gdGhlIFNESyBjb25zdW1lciBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gICAqL1xuICBhc3luYyBoYW5kbGVFbGljaXRhdGlvbihcbiAgICBzZXJ2ZXJOYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHJlcXVlc3RlZFNjaGVtYT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuICAgIG1vZGU/OiAnZm9ybScgfCAndXJsJyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgZWxpY2l0YXRpb25JZD86IHN0cmluZyxcbiAgKTogUHJvbWlzZTxFbGljaXRSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdDxFbGljaXRSZXN1bHQ+KFxuICAgICAgICB7XG4gICAgICAgICAgc3VidHlwZTogJ2VsaWNpdGF0aW9uJyxcbiAgICAgICAgICBtY3Bfc2VydmVyX25hbWU6IHNlcnZlck5hbWUsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBtb2RlLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBlbGljaXRhdGlvbl9pZDogZWxpY2l0YXRpb25JZCxcbiAgICAgICAgICByZXF1ZXN0ZWRfc2NoZW1hOiByZXF1ZXN0ZWRTY2hlbWEsXG4gICAgICAgIH0sXG4gICAgICAgIFNES0NvbnRyb2xFbGljaXRhdGlvblJlc3BvbnNlU2NoZW1hKCksXG4gICAgICAgIHNpZ25hbCxcbiAgICAgIClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB7IGFjdGlvbjogJ2NhbmNlbCcgYXMgY29uc3QgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgU2FuZGJveEFza0NhbGxiYWNrIHRoYXQgZm9yd2FyZHMgc2FuZGJveCBuZXR3b3JrIHBlcm1pc3Npb25cbiAgICogcmVxdWVzdHMgdG8gdGhlIFNESyBob3N0IGFzIGNhbl91c2VfdG9vbCBjb250cm9sX3JlcXVlc3RzLlxuICAgKlxuICAgKiBUaGlzIHBpZ2d5YmFja3Mgb24gdGhlIGV4aXN0aW5nIGNhbl91c2VfdG9vbCBwcm90b2NvbCB3aXRoIGEgc3ludGhldGljXG4gICAqIHRvb2wgbmFtZSBzbyB0aGF0IFNESyBob3N0cyAoVlMgQ29kZSwgQ0NSLCBldGMuKSBjYW4gcHJvbXB0IHRoZSB1c2VyXG4gICAqIGZvciBuZXR3b3JrIGFjY2VzcyB3aXRob3V0IHJlcXVpcmluZyBhIG5ldyBwcm90b2NvbCBzdWJ0eXBlLlxuICAgKi9cbiAgY3JlYXRlU2FuZGJveEFza0NhbGxiYWNrKCk6IChob3N0UGF0dGVybjoge1xuICAgIGhvc3Q6IHN0cmluZ1xuICAgIHBvcnQ/OiBudW1iZXJcbiAgfSkgPT4gUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGFzeW5jIChob3N0UGF0dGVybik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdDxQZXJtaXNzaW9uVG9vbE91dHB1dD4oXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3VidHlwZTogJ2Nhbl91c2VfdG9vbCcsXG4gICAgICAgICAgICB0b29sX25hbWU6IFNBTkRCT1hfTkVUV09SS19BQ0NFU1NfVE9PTF9OQU1FLFxuICAgICAgICAgICAgaW5wdXQ6IHsgaG9zdDogaG9zdFBhdHRlcm4uaG9zdCB9LFxuICAgICAgICAgICAgdG9vbF91c2VfaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQWxsb3cgbmV0d29yayBjb25uZWN0aW9uIHRvICR7aG9zdFBhdHRlcm4uaG9zdH0/YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBlcm1pc3Npb25Ub29sT3V0cHV0U2NoZW1hKCksXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5iZWhhdmlvciA9PT0gJ2FsbG93J1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGZhaWxzIChzdHJlYW0gY2xvc2VkLCBhYm9ydCwgZXRjLiksIGRlbnkgdGhlIGNvbm5lY3Rpb25cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIE1DUCBtZXNzYWdlIHRvIGFuIFNESyBzZXJ2ZXIgYW5kIHdhaXRzIGZvciB0aGUgcmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIHNlbmRNY3BNZXNzYWdlKFxuICAgIHNlcnZlck5hbWU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBKU09OUlBDTWVzc2FnZSxcbiAgKTogUHJvbWlzZTxKU09OUlBDTWVzc2FnZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdDx7IG1jcF9yZXNwb25zZTogSlNPTlJQQ01lc3NhZ2UgfT4oXG4gICAgICB7XG4gICAgICAgIHN1YnR5cGU6ICdtY3BfbWVzc2FnZScsXG4gICAgICAgIHNlcnZlcl9uYW1lOiBzZXJ2ZXJOYW1lLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgfSxcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgbWNwX3Jlc3BvbnNlOiB6LmFueSgpIGFzIHouU2NoZW1hPEpTT05SUENNZXNzYWdlPixcbiAgICAgIH0pLFxuICAgIClcbiAgICByZXR1cm4gcmVzcG9uc2UubWNwX3Jlc3BvbnNlXG4gIH1cbn1cblxuZnVuY3Rpb24gZXhpdFdpdGhNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IG5ldmVyIHtcbiAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gIHByb2Nlc3MuZXhpdCgxKVxufVxuXG4vKipcbiAqIEV4ZWN1dGUgUGVybWlzc2lvblJlcXVlc3QgaG9va3MgYW5kIHJldHVybiBhIGRlY2lzaW9uIGlmIG9uZSBpcyBtYWRlLlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgbm8gaG9vayBtYWRlIGEgZGVjaXNpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVQZXJtaXNzaW9uUmVxdWVzdEhvb2tzRm9yU0RLKFxuICB0b29sTmFtZTogc3RyaW5nLFxuICB0b29sVXNlSUQ6IHN0cmluZyxcbiAgaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4gIHN1Z2dlc3Rpb25zOiBQZXJtaXNzaW9uVXBkYXRlW10gfCB1bmRlZmluZWQsXG4pOiBQcm9taXNlPFBlcm1pc3Npb25EZWNpc2lvbiB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBhcHBTdGF0ZSA9IHRvb2xVc2VDb250ZXh0LmdldEFwcFN0YXRlKClcbiAgY29uc3QgcGVybWlzc2lvbk1vZGUgPSBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQubW9kZVxuXG4gIC8vIEl0ZXJhdGUgZGlyZWN0bHkgb3ZlciB0aGUgZ2VuZXJhdG9yIGluc3RlYWQgb2YgdXNpbmcgYGFsbGBcbiAgY29uc3QgaG9va0dlbmVyYXRvciA9IGV4ZWN1dGVQZXJtaXNzaW9uUmVxdWVzdEhvb2tzKFxuICAgIHRvb2xOYW1lLFxuICAgIHRvb2xVc2VJRCxcbiAgICBpbnB1dCxcbiAgICB0b29sVXNlQ29udGV4dCxcbiAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICBzdWdnZXN0aW9ucyxcbiAgICB0b29sVXNlQ29udGV4dC5hYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICApXG5cbiAgZm9yIGF3YWl0IChjb25zdCBob29rUmVzdWx0IG9mIGhvb2tHZW5lcmF0b3IpIHtcbiAgICBpZiAoXG4gICAgICBob29rUmVzdWx0LnBlcm1pc3Npb25SZXF1ZXN0UmVzdWx0ICYmXG4gICAgICAoaG9va1Jlc3VsdC5wZXJtaXNzaW9uUmVxdWVzdFJlc3VsdC5iZWhhdmlvciA9PT0gJ2FsbG93JyB8fFxuICAgICAgICBob29rUmVzdWx0LnBlcm1pc3Npb25SZXF1ZXN0UmVzdWx0LmJlaGF2aW9yID09PSAnZGVueScpXG4gICAgKSB7XG4gICAgICBjb25zdCBkZWNpc2lvbiA9IGhvb2tSZXN1bHQucGVybWlzc2lvblJlcXVlc3RSZXN1bHRcbiAgICAgIGlmIChkZWNpc2lvbi5iZWhhdmlvciA9PT0gJ2FsbG93Jykge1xuICAgICAgICBjb25zdCBmaW5hbElucHV0ID0gZGVjaXNpb24udXBkYXRlZElucHV0IHx8IGlucHV0XG5cbiAgICAgICAgLy8gQXBwbHkgcGVybWlzc2lvbiB1cGRhdGVzIGlmIHByb3ZpZGVkIGJ5IGhvb2sgKFwiYWx3YXlzIGFsbG93XCIpXG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb25VcGRhdGVzID0gZGVjaXNpb24udXBkYXRlZFBlcm1pc3Npb25zID8/IFtdXG4gICAgICAgIGlmIChwZXJtaXNzaW9uVXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGVzKHBlcm1pc3Npb25VcGRhdGVzKVxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRBcHBTdGF0ZSA9IHRvb2xVc2VDb250ZXh0LmdldEFwcFN0YXRlKClcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ29udGV4dCA9IGFwcGx5UGVybWlzc2lvblVwZGF0ZXMoXG4gICAgICAgICAgICBjdXJyZW50QXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgICAgICAgcGVybWlzc2lvblVwZGF0ZXMsXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIFVwZGF0ZSBwZXJtaXNzaW9uIGNvbnRleHQgdmlhIHNldEFwcFN0YXRlXG4gICAgICAgICAgdG9vbFVzZUNvbnRleHQuc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgICBpZiAocHJldi50b29sUGVybWlzc2lvbkNvbnRleHQgPT09IHVwZGF0ZWRDb250ZXh0KSByZXR1cm4gcHJldlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdG9vbFBlcm1pc3Npb25Db250ZXh0OiB1cGRhdGVkQ29udGV4dCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmVoYXZpb3I6ICdhbGxvdycsXG4gICAgICAgICAgdXBkYXRlZElucHV0OiBmaW5hbElucHV0LFxuICAgICAgICAgIHVzZXJNb2RpZmllZDogZmFsc2UsXG4gICAgICAgICAgZGVjaXNpb25SZWFzb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdob29rJyxcbiAgICAgICAgICAgIGhvb2tOYW1lOiAnUGVybWlzc2lvblJlcXVlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhvb2sgZGVuaWVkIHRoZSBwZXJtaXNzaW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmVoYXZpb3I6ICdkZW55JyxcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgZGVjaXNpb24ubWVzc2FnZSB8fCAnUGVybWlzc2lvbiBkZW5pZWQgYnkgUGVybWlzc2lvblJlcXVlc3QgaG9vaycsXG4gICAgICAgICAgZGVjaXNpb25SZWFzb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdob29rJyxcbiAgICAgICAgICAgIGhvb2tOYW1lOiAnUGVybWlzc2lvblJlcXVlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG4iLCAiLyoqXG4gKiBTREsgQ29udHJvbCBTY2hlbWFzIC0gWm9kIHNjaGVtYXMgZm9yIHRoZSBjb250cm9sIHByb3RvY29sLlxuICpcbiAqIFRoZXNlIHNjaGVtYXMgZGVmaW5lIHRoZSBjb250cm9sIHByb3RvY29sIGJldHdlZW4gU0RLIGltcGxlbWVudGF0aW9ucyBhbmQgdGhlIENMSS5cbiAqIFVzZWQgYnkgU0RLIGJ1aWxkZXJzIChlLmcuLCBQeXRob24gU0RLKSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBDTEkgcHJvY2Vzcy5cbiAqXG4gKiBTREsgY29uc3VtZXJzIHNob3VsZCB1c2UgY29yZVNjaGVtYXMudHMgaW5zdGVhZC5cbiAqL1xuXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kL3Y0J1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4uLy4uL3V0aWxzL2xhenlTY2hlbWEuanMnXG5pbXBvcnQge1xuICBBY2NvdW50SW5mb1NjaGVtYSxcbiAgQWdlbnREZWZpbml0aW9uU2NoZW1hLFxuICBBZ2VudEluZm9TY2hlbWEsXG4gIEZhc3RNb2RlU3RhdGVTY2hlbWEsXG4gIEhvb2tFdmVudFNjaGVtYSxcbiAgSG9va0lucHV0U2NoZW1hLFxuICBNY3BTZXJ2ZXJDb25maWdGb3JQcm9jZXNzVHJhbnNwb3J0U2NoZW1hLFxuICBNY3BTZXJ2ZXJTdGF0dXNTY2hlbWEsXG4gIE1vZGVsSW5mb1NjaGVtYSxcbiAgUGVybWlzc2lvbk1vZGVTY2hlbWEsXG4gIFBlcm1pc3Npb25VcGRhdGVTY2hlbWEsXG4gIFNES01lc3NhZ2VTY2hlbWEsXG4gIFNES1Bvc3RUdXJuU3VtbWFyeU1lc3NhZ2VTY2hlbWEsXG4gIFNES1N0cmVhbWxpbmVkVGV4dE1lc3NhZ2VTY2hlbWEsXG4gIFNES1N0cmVhbWxpbmVkVG9vbFVzZVN1bW1hcnlNZXNzYWdlU2NoZW1hLFxuICBTREtVc2VyTWVzc2FnZVNjaGVtYSxcbiAgU2xhc2hDb21tYW5kU2NoZW1hLFxufSBmcm9tICcuL2NvcmVTY2hlbWFzLmpzJ1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlcm5hbCBUeXBlIFBsYWNlaG9sZGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBKU09OUlBDTWVzc2FnZSBmcm9tIEBtb2RlbGNvbnRleHRwcm90b2NvbC9zZGsgLSB0cmVhdCBhcyB1bmtub3duXG5leHBvcnQgY29uc3QgSlNPTlJQQ01lc3NhZ2VQbGFjZWhvbGRlciA9IGxhenlTY2hlbWEoKCkgPT4gei51bmtub3duKCkpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhvb2sgQ2FsbGJhY2sgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IFNES0hvb2tDYWxsYmFja01hdGNoZXJTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIG1hdGNoZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGhvb2tDYWxsYmFja0lkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICAgIHRpbWVvdXQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnQ29uZmlndXJhdGlvbiBmb3IgbWF0Y2hpbmcgYW5kIHJvdXRpbmcgaG9vayBjYWxsYmFja3MuJyksXG4pXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRyb2wgUmVxdWVzdCBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEluaXRpYWxpemVSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2luaXRpYWxpemUnKSxcbiAgICAgIGhvb2tzOiB6XG4gICAgICAgIC5yZWNvcmQoSG9va0V2ZW50U2NoZW1hKCksIHouYXJyYXkoU0RLSG9va0NhbGxiYWNrTWF0Y2hlclNjaGVtYSgpKSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBzZGtNY3BTZXJ2ZXJzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBqc29uU2NoZW1hOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSkub3B0aW9uYWwoKSxcbiAgICAgIHN5c3RlbVByb21wdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBhZ2VudHM6IHoucmVjb3JkKHouc3RyaW5nKCksIEFnZW50RGVmaW5pdGlvblNjaGVtYSgpKS5vcHRpb25hbCgpLFxuICAgICAgcHJvbXB0U3VnZ2VzdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICBhZ2VudFByb2dyZXNzU3VtbWFyaWVzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ0luaXRpYWxpemVzIHRoZSBTREsgc2Vzc2lvbiB3aXRoIGhvb2tzLCBNQ1Agc2VydmVycywgYW5kIGFnZW50IGNvbmZpZ3VyYXRpb24uJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEluaXRpYWxpemVSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgY29tbWFuZHM6IHouYXJyYXkoU2xhc2hDb21tYW5kU2NoZW1hKCkpLFxuICAgICAgYWdlbnRzOiB6LmFycmF5KEFnZW50SW5mb1NjaGVtYSgpKSxcbiAgICAgIG91dHB1dF9zdHlsZTogei5zdHJpbmcoKSxcbiAgICAgIGF2YWlsYWJsZV9vdXRwdXRfc3R5bGVzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgICAgbW9kZWxzOiB6LmFycmF5KE1vZGVsSW5mb1NjaGVtYSgpKSxcbiAgICAgIGFjY291bnQ6IEFjY291bnRJbmZvU2NoZW1hKCksXG4gICAgICBwaWQ6IHpcbiAgICAgICAgLm51bWJlcigpXG4gICAgICAgIC5vcHRpb25hbCgpXG4gICAgICAgIC5kZXNjcmliZSgnQGludGVybmFsIENMSSBwcm9jZXNzIFBJRCBmb3IgdG11eCBzb2NrZXQgaXNvbGF0aW9uJyksXG4gICAgICBmYXN0X21vZGVfc3RhdGU6IEZhc3RNb2RlU3RhdGVTY2hlbWEoKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1Jlc3BvbnNlIGZyb20gc2Vzc2lvbiBpbml0aWFsaXphdGlvbiB3aXRoIGF2YWlsYWJsZSBjb21tYW5kcywgbW9kZWxzLCBhbmQgYWNjb3VudCBpbmZvLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xJbnRlcnJ1cHRSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2ludGVycnVwdCcpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdJbnRlcnJ1cHRzIHRoZSBjdXJyZW50bHkgcnVubmluZyBjb252ZXJzYXRpb24gdHVybi4nKSxcbilcblxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFBlcm1pc3Npb25SZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2Nhbl91c2VfdG9vbCcpLFxuICAgICAgdG9vbF9uYW1lOiB6LnN0cmluZygpLFxuICAgICAgaW5wdXQ6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKSxcbiAgICAgIHBlcm1pc3Npb25fc3VnZ2VzdGlvbnM6IHouYXJyYXkoUGVybWlzc2lvblVwZGF0ZVNjaGVtYSgpKS5vcHRpb25hbCgpLFxuICAgICAgYmxvY2tlZF9wYXRoOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBkZWNpc2lvbl9yZWFzb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBkaXNwbGF5X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHRvb2xfdXNlX2lkOiB6LnN0cmluZygpLFxuICAgICAgYWdlbnRfaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ1JlcXVlc3RzIHBlcm1pc3Npb24gdG8gdXNlIGEgdG9vbCB3aXRoIHRoZSBnaXZlbiBpbnB1dC4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xTZXRQZXJtaXNzaW9uTW9kZVJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnc2V0X3Blcm1pc3Npb25fbW9kZScpLFxuICAgICAgbW9kZTogUGVybWlzc2lvbk1vZGVTY2hlbWEoKSxcbiAgICAgIHVsdHJhcGxhbjogelxuICAgICAgICAuYm9vbGVhbigpXG4gICAgICAgIC5vcHRpb25hbCgpXG4gICAgICAgIC5kZXNjcmliZSgnQGludGVybmFsIENDUiB1bHRyYXBsYW4gc2Vzc2lvbiBtYXJrZXIuJyksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ1NldHMgdGhlIHBlcm1pc3Npb24gbW9kZSBmb3IgdG9vbCBleGVjdXRpb24gaGFuZGxpbmcuJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sU2V0TW9kZWxSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ3NldF9tb2RlbCcpLFxuICAgICAgbW9kZWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnU2V0cyB0aGUgbW9kZWwgdG8gdXNlIGZvciBzdWJzZXF1ZW50IGNvbnZlcnNhdGlvbiB0dXJucy4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xTZXRNYXhUaGlua2luZ1Rva2Vuc1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnc2V0X21heF90aGlua2luZ190b2tlbnMnKSxcbiAgICAgIG1heF90aGlua2luZ190b2tlbnM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdTZXRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0aGlua2luZyB0b2tlbnMgZm9yIGV4dGVuZGVkIHRoaW5raW5nLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xNY3BTdGF0dXNSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ21jcF9zdGF0dXMnKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmVxdWVzdHMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGFsbCBNQ1Agc2VydmVyIGNvbm5lY3Rpb25zLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbE1jcFN0YXR1c1Jlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBtY3BTZXJ2ZXJzOiB6LmFycmF5KE1jcFNlcnZlclN0YXR1c1NjaGVtYSgpKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdSZXNwb25zZSBjb250YWluaW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiBhbGwgTUNQIHNlcnZlciBjb25uZWN0aW9ucy4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sR2V0Q29udGV4dFVzYWdlUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdnZXRfY29udGV4dF91c2FnZScpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1JlcXVlc3RzIGEgYnJlYWtkb3duIG9mIGN1cnJlbnQgY29udGV4dCB3aW5kb3cgdXNhZ2UgYnkgY2F0ZWdvcnkuJyxcbiAgICApLFxuKVxuXG5jb25zdCBDb250ZXh0Q2F0ZWdvcnlTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICBjb2xvcjogei5zdHJpbmcoKSxcbiAgICBpc0RlZmVycmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICB9KSxcbilcblxuY29uc3QgQ29udGV4dEdyaWRTcXVhcmVTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICBjb2xvcjogei5zdHJpbmcoKSxcbiAgICBpc0ZpbGxlZDogei5ib29sZWFuKCksXG4gICAgY2F0ZWdvcnlOYW1lOiB6LnN0cmluZygpLFxuICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICBwZXJjZW50YWdlOiB6Lm51bWJlcigpLFxuICAgIHNxdWFyZUZ1bGxuZXNzOiB6Lm51bWJlcigpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xHZXRDb250ZXh0VXNhZ2VSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgY2F0ZWdvcmllczogei5hcnJheShDb250ZXh0Q2F0ZWdvcnlTY2hlbWEoKSksXG4gICAgICB0b3RhbFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgIG1heFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgIHJhd01heFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgIHBlcmNlbnRhZ2U6IHoubnVtYmVyKCksXG4gICAgICBncmlkUm93czogei5hcnJheSh6LmFycmF5KENvbnRleHRHcmlkU3F1YXJlU2NoZW1hKCkpKSxcbiAgICAgIG1vZGVsOiB6LnN0cmluZygpLFxuICAgICAgbWVtb3J5RmlsZXM6IHouYXJyYXkoXG4gICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICBwYXRoOiB6LnN0cmluZygpLFxuICAgICAgICAgIHR5cGU6IHouc3RyaW5nKCksXG4gICAgICAgICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBtY3BUb29sczogei5hcnJheShcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgICAgc2VydmVyTmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgaXNMb2FkZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIGRlZmVycmVkQnVpbHRpblRvb2xzOiB6XG4gICAgICAgIC5hcnJheShcbiAgICAgICAgICB6Lm9iamVjdCh7XG4gICAgICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICAgICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgICAgaXNMb2FkZWQ6IHouYm9vbGVhbigpLFxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgc3lzdGVtVG9vbHM6IHpcbiAgICAgICAgLmFycmF5KHoub2JqZWN0KHsgbmFtZTogei5zdHJpbmcoKSwgdG9rZW5zOiB6Lm51bWJlcigpIH0pKVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgIHN5c3RlbVByb21wdFNlY3Rpb25zOiB6XG4gICAgICAgIC5hcnJheSh6Lm9iamVjdCh7IG5hbWU6IHouc3RyaW5nKCksIHRva2Vuczogei5udW1iZXIoKSB9KSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBhZ2VudHM6IHouYXJyYXkoXG4gICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICBhZ2VudFR5cGU6IHouc3RyaW5nKCksXG4gICAgICAgICAgc291cmNlOiB6LnN0cmluZygpLFxuICAgICAgICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc2xhc2hDb21tYW5kczogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICB0b3RhbENvbW1hbmRzOiB6Lm51bWJlcigpLFxuICAgICAgICAgIGluY2x1ZGVkQ29tbWFuZHM6IHoubnVtYmVyKCksXG4gICAgICAgICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgIHNraWxsczogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICB0b3RhbFNraWxsczogei5udW1iZXIoKSxcbiAgICAgICAgICBpbmNsdWRlZFNraWxsczogei5udW1iZXIoKSxcbiAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgc2tpbGxGcm9udG1hdHRlcjogei5hcnJheShcbiAgICAgICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICAgICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgICAgICAgc291cmNlOiB6LnN0cmluZygpLFxuICAgICAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgIGF1dG9Db21wYWN0VGhyZXNob2xkOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICBpc0F1dG9Db21wYWN0RW5hYmxlZDogei5ib29sZWFuKCksXG4gICAgICBtZXNzYWdlQnJlYWtkb3duOiB6XG4gICAgICAgIC5vYmplY3Qoe1xuICAgICAgICAgIHRvb2xDYWxsVG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIHRvb2xSZXN1bHRUb2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgYXR0YWNobWVudFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICBhc3Npc3RhbnRNZXNzYWdlVG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIHVzZXJNZXNzYWdlVG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIHRvb2xDYWxsc0J5VHlwZTogei5hcnJheShcbiAgICAgICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICAgICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgICAgICAgY2FsbFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICAgICAgcmVzdWx0VG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgICBhdHRhY2htZW50c0J5VHlwZTogei5hcnJheShcbiAgICAgICAgICAgIHoub2JqZWN0KHsgbmFtZTogei5zdHJpbmcoKSwgdG9rZW5zOiB6Lm51bWJlcigpIH0pLFxuICAgICAgICAgICksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgYXBpVXNhZ2U6IHpcbiAgICAgICAgLm9iamVjdCh7XG4gICAgICAgICAgaW5wdXRfdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIG91dHB1dF90b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgY2FjaGVfY3JlYXRpb25faW5wdXRfdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIGNhY2hlX3JlYWRfaW5wdXRfdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICB9KVxuICAgICAgICAubnVsbGFibGUoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdCcmVha2Rvd24gb2YgY3VycmVudCBjb250ZXh0IHdpbmRvdyB1c2FnZSBieSBjYXRlZ29yeSAoc3lzdGVtIHByb21wdCwgdG9vbHMsIG1lc3NhZ2VzLCBldGMuKS4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUmV3aW5kRmlsZXNSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ3Jld2luZF9maWxlcycpLFxuICAgICAgdXNlcl9tZXNzYWdlX2lkOiB6LnN0cmluZygpLFxuICAgICAgZHJ5X3J1bjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmV3aW5kcyBmaWxlIGNoYW5nZXMgbWFkZSBzaW5jZSBhIHNwZWNpZmljIHVzZXIgbWVzc2FnZS4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xSZXdpbmRGaWxlc1Jlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBjYW5SZXdpbmQ6IHouYm9vbGVhbigpLFxuICAgICAgZXJyb3I6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGZpbGVzQ2hhbmdlZDogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICAgICAgaW5zZXJ0aW9uczogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICAgICAgZGVsZXRpb25zOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ1Jlc3VsdCBvZiBhIHJld2luZEZpbGVzIG9wZXJhdGlvbi4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xDYW5jZWxBc3luY01lc3NhZ2VSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2NhbmNlbF9hc3luY19tZXNzYWdlJyksXG4gICAgICBtZXNzYWdlX3V1aWQ6IHouc3RyaW5nKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnRHJvcHMgYSBwZW5kaW5nIGFzeW5jIHVzZXIgbWVzc2FnZSBmcm9tIHRoZSBjb21tYW5kIHF1ZXVlIGJ5IHV1aWQuIE5vLW9wIGlmIGFscmVhZHkgZGVxdWV1ZWQgZm9yIGV4ZWN1dGlvbi4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sQ2FuY2VsQXN5bmNNZXNzYWdlUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIGNhbmNlbGxlZDogei5ib29sZWFuKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVzdWx0IG9mIGEgY2FuY2VsX2FzeW5jX21lc3NhZ2Ugb3BlcmF0aW9uLiBjYW5jZWxsZWQ9ZmFsc2UgbWVhbnMgdGhlIG1lc3NhZ2Ugd2FzIG5vdCBpbiB0aGUgcXVldWUgKGFscmVhZHkgZGVxdWV1ZWQgb3IgbmV2ZXIgZW5xdWV1ZWQpLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xTZWVkUmVhZFN0YXRlUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdzZWVkX3JlYWRfc3RhdGUnKSxcbiAgICAgIHBhdGg6IHouc3RyaW5nKCksXG4gICAgICBtdGltZTogei5udW1iZXIoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdTZWVkcyB0aGUgcmVhZEZpbGVTdGF0ZSBjYWNoZSB3aXRoIGEgcGF0aCttdGltZSBlbnRyeS4gVXNlIHdoZW4gYSBwcmlvciBSZWFkIHdhcyByZW1vdmVkIGZyb20gY29udGV4dCAoZS5nLiBieSBzbmlwKSBzbyBFZGl0IHZhbGlkYXRpb24gd291bGQgZmFpbCBkZXNwaXRlIHRoZSBjbGllbnQgaGF2aW5nIG9ic2VydmVkIHRoZSBSZWFkLiBUaGUgbXRpbWUgbGV0cyB0aGUgQ0xJIGRldGVjdCBpZiB0aGUgZmlsZSBjaGFuZ2VkIHNpbmNlIHRoZSBzZWVkZWQgUmVhZCBcdTIwMTQgc2FtZSBzdGFsZW5lc3MgY2hlY2sgYXMgdGhlIG5vcm1hbCBwYXRoLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0hvb2tDYWxsYmFja1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnaG9va19jYWxsYmFjaycpLFxuICAgICAgY2FsbGJhY2tfaWQ6IHouc3RyaW5nKCksXG4gICAgICBpbnB1dDogSG9va0lucHV0U2NoZW1hKCksXG4gICAgICB0b29sX3VzZV9pZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdEZWxpdmVycyBhIGhvb2sgY2FsbGJhY2sgd2l0aCBpdHMgaW5wdXQgZGF0YS4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xNY3BNZXNzYWdlUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdtY3BfbWVzc2FnZScpLFxuICAgICAgc2VydmVyX25hbWU6IHouc3RyaW5nKCksXG4gICAgICBtZXNzYWdlOiBKU09OUlBDTWVzc2FnZVBsYWNlaG9sZGVyKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ1NlbmRzIGEgSlNPTi1SUEMgbWVzc2FnZSB0byBhIHNwZWNpZmljIE1DUCBzZXJ2ZXIuJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sTWNwU2V0U2VydmVyc1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnbWNwX3NldF9zZXJ2ZXJzJyksXG4gICAgICBzZXJ2ZXJzOiB6LnJlY29yZCh6LnN0cmluZygpLCBNY3BTZXJ2ZXJDb25maWdGb3JQcm9jZXNzVHJhbnNwb3J0U2NoZW1hKCkpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdSZXBsYWNlcyB0aGUgc2V0IG9mIGR5bmFtaWNhbGx5IG1hbmFnZWQgTUNQIHNlcnZlcnMuJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sTWNwU2V0U2VydmVyc1Jlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBhZGRlZDogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICAgIHJlbW92ZWQ6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgICBlcnJvcnM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouc3RyaW5nKCkpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1Jlc3VsdCBvZiByZXBsYWNpbmcgdGhlIHNldCBvZiBkeW5hbWljYWxseSBtYW5hZ2VkIE1DUCBzZXJ2ZXJzLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xSZWxvYWRQbHVnaW5zUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdyZWxvYWRfcGx1Z2lucycpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1JlbG9hZHMgcGx1Z2lucyBmcm9tIGRpc2sgYW5kIHJldHVybnMgdGhlIHJlZnJlc2hlZCBzZXNzaW9uIGNvbXBvbmVudHMuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgY29tbWFuZHM6IHouYXJyYXkoU2xhc2hDb21tYW5kU2NoZW1hKCkpLFxuICAgICAgYWdlbnRzOiB6LmFycmF5KEFnZW50SW5mb1NjaGVtYSgpKSxcbiAgICAgIHBsdWdpbnM6IHouYXJyYXkoXG4gICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICAgIHBhdGg6IHouc3RyaW5nKCksXG4gICAgICAgICAgc291cmNlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIG1jcFNlcnZlcnM6IHouYXJyYXkoTWNwU2VydmVyU3RhdHVzU2NoZW1hKCkpLFxuICAgICAgZXJyb3JfY291bnQ6IHoubnVtYmVyKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVmcmVzaGVkIGNvbW1hbmRzLCBhZ2VudHMsIHBsdWdpbnMsIGFuZCBNQ1Agc2VydmVyIHN0YXR1cyBhZnRlciByZWxvYWQuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbE1jcFJlY29ubmVjdFJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnbWNwX3JlY29ubmVjdCcpLFxuICAgICAgc2VydmVyTmFtZTogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmVjb25uZWN0cyBhIGRpc2Nvbm5lY3RlZCBvciBmYWlsZWQgTUNQIHNlcnZlci4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xNY3BUb2dnbGVSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ21jcF90b2dnbGUnKSxcbiAgICAgIHNlcnZlck5hbWU6IHouc3RyaW5nKCksXG4gICAgICBlbmFibGVkOiB6LmJvb2xlYW4oKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnRW5hYmxlcyBvciBkaXNhYmxlcyBhbiBNQ1Agc2VydmVyLicpLFxuKVxuXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sU3RvcFRhc2tSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ3N0b3BfdGFzaycpLFxuICAgICAgdGFza19pZDogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnU3RvcHMgYSBydW5uaW5nIHRhc2suJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sQXBwbHlGbGFnU2V0dGluZ3NSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2FwcGx5X2ZsYWdfc2V0dGluZ3MnKSxcbiAgICAgIHNldHRpbmdzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnTWVyZ2VzIHRoZSBwcm92aWRlZCBzZXR0aW5ncyBpbnRvIHRoZSBmbGFnIHNldHRpbmdzIGxheWVyLCB1cGRhdGluZyB0aGUgYWN0aXZlIGNvbmZpZ3VyYXRpb24uJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEdldFNldHRpbmdzUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdnZXRfc2V0dGluZ3MnKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdSZXR1cm5zIHRoZSBlZmZlY3RpdmUgbWVyZ2VkIHNldHRpbmdzIGFuZCB0aGUgcmF3IHBlci1zb3VyY2Ugc2V0dGluZ3MuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEdldFNldHRpbmdzUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIGVmZmVjdGl2ZTogei5yZWNvcmQoei5zdHJpbmcoKSwgei51bmtub3duKCkpLFxuICAgICAgc291cmNlczogelxuICAgICAgICAuYXJyYXkoXG4gICAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgICAgc291cmNlOiB6LmVudW0oW1xuICAgICAgICAgICAgICAndXNlclNldHRpbmdzJyxcbiAgICAgICAgICAgICAgJ3Byb2plY3RTZXR0aW5ncycsXG4gICAgICAgICAgICAgICdsb2NhbFNldHRpbmdzJyxcbiAgICAgICAgICAgICAgJ2ZsYWdTZXR0aW5ncycsXG4gICAgICAgICAgICAgICdwb2xpY3lTZXR0aW5ncycsXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSksXG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmRlc2NyaWJlKFxuICAgICAgICAgICdPcmRlcmVkIGxvdy10by1oaWdoIHByaW9yaXR5IFx1MjAxNCBsYXRlciBlbnRyaWVzIG92ZXJyaWRlIGVhcmxpZXIgb25lcy4nLFxuICAgICAgICApLFxuICAgICAgYXBwbGllZDogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICBtb2RlbDogei5zdHJpbmcoKSxcbiAgICAgICAgICAvLyBTdHJpbmcgbGV2ZWxzIG9ubHkgXHUyMDE0IG51bWVyaWMgZWZmb3J0IGlzIGFudC1vbmx5IGFuZCB0aGVcbiAgICAgICAgICAvLyBab2RcdTIxOTJwcm90byBnZW5lcmF0b3IgY2FuJ3QgZW1pdCBlbnVtXHUyMjJBbnVtYmVyIHVuaW9ucy5cbiAgICAgICAgICBlZmZvcnQ6IHouZW51bShbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCcsICdtYXgnXSkubnVsbGFibGUoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbmFsKClcbiAgICAgICAgLmRlc2NyaWJlKFxuICAgICAgICAgICdSdW50aW1lLXJlc29sdmVkIHZhbHVlcyBhZnRlciBlbnYgb3ZlcnJpZGVzLCBzZXNzaW9uIHN0YXRlLCBhbmQgbW9kZWwtc3BlY2lmaWMgZGVmYXVsdHMgYXJlIGFwcGxpZWQuIFVubGlrZSBgZWZmZWN0aXZlYCAoZGlzayBtZXJnZSksIHRoZXNlIHJlZmxlY3Qgd2hhdCB3aWxsIGFjdHVhbGx5IGJlIHNlbnQgdG8gdGhlIEFQSS4nLFxuICAgICAgICApLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ0VmZmVjdGl2ZSBtZXJnZWQgc2V0dGluZ3MgcGx1cyByYXcgcGVyLXNvdXJjZSBzZXR0aW5ncyBpbiBtZXJnZSBvcmRlci4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sRWxpY2l0YXRpb25SZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2VsaWNpdGF0aW9uJyksXG4gICAgICBtY3Bfc2VydmVyX25hbWU6IHouc3RyaW5nKCksXG4gICAgICBtZXNzYWdlOiB6LnN0cmluZygpLFxuICAgICAgbW9kZTogei5lbnVtKFsnZm9ybScsICd1cmwnXSkub3B0aW9uYWwoKSxcbiAgICAgIHVybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgZWxpY2l0YXRpb25faWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHJlcXVlc3RlZF9zY2hlbWE6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1JlcXVlc3RzIHRoZSBTREsgY29uc3VtZXIgdG8gaGFuZGxlIGFuIE1DUCBlbGljaXRhdGlvbiAodXNlciBpbnB1dCByZXF1ZXN0KS4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sRWxpY2l0YXRpb25SZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgYWN0aW9uOiB6LmVudW0oWydhY2NlcHQnLCAnZGVjbGluZScsICdjYW5jZWwnXSksXG4gICAgICBjb250ZW50OiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmVzcG9uc2UgZnJvbSB0aGUgU0RLIGNvbnN1bWVyIGZvciBhbiBlbGljaXRhdGlvbiByZXF1ZXN0LicpLFxuKVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRyb2wgUmVxdWVzdC9SZXNwb25zZSBXcmFwcGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJlcXVlc3RJbm5lclNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei51bmlvbihbXG4gICAgU0RLQ29udHJvbEludGVycnVwdFJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sUGVybWlzc2lvblJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sSW5pdGlhbGl6ZVJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sU2V0UGVybWlzc2lvbk1vZGVSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFNldE1vZGVsUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xTZXRNYXhUaGlua2luZ1Rva2Vuc1JlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sTWNwU3RhdHVzUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xHZXRDb250ZXh0VXNhZ2VSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLSG9va0NhbGxiYWNrUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xNY3BNZXNzYWdlUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xSZXdpbmRGaWxlc1JlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sQ2FuY2VsQXN5bmNNZXNzYWdlUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xTZWVkUmVhZFN0YXRlUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xSZWxvYWRQbHVnaW5zUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xNY3BSZWNvbm5lY3RSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbE1jcFRvZ2dsZVJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sU3RvcFRhc2tSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbEFwcGx5RmxhZ1NldHRpbmdzUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xHZXRTZXR0aW5nc1JlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sRWxpY2l0YXRpb25SZXF1ZXN0U2NoZW1hKCksXG4gIF0pLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LmxpdGVyYWwoJ2NvbnRyb2xfcmVxdWVzdCcpLFxuICAgIHJlcXVlc3RfaWQ6IHouc3RyaW5nKCksXG4gICAgcmVxdWVzdDogU0RLQ29udHJvbFJlcXVlc3RJbm5lclNjaGVtYSgpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IENvbnRyb2xSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnc3VjY2VzcycpLFxuICAgIHJlcXVlc3RfaWQ6IHouc3RyaW5nKCksXG4gICAgcmVzcG9uc2U6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5vcHRpb25hbCgpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IENvbnRyb2xFcnJvclJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgc3VidHlwZTogei5saXRlcmFsKCdlcnJvcicpLFxuICAgIHJlcXVlc3RfaWQ6IHouc3RyaW5nKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCksXG4gICAgcGVuZGluZ19wZXJtaXNzaW9uX3JlcXVlc3RzOiB6XG4gICAgICAuYXJyYXkoei5sYXp5KCgpID0+IFNES0NvbnRyb2xSZXF1ZXN0U2NoZW1hKCkpKVxuICAgICAgLm9wdGlvbmFsKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5saXRlcmFsKCdjb250cm9sX3Jlc3BvbnNlJyksXG4gICAgcmVzcG9uc2U6IHoudW5pb24oW0NvbnRyb2xSZXNwb25zZVNjaGVtYSgpLCBDb250cm9sRXJyb3JSZXNwb25zZVNjaGVtYSgpXSksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbENhbmNlbFJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHR5cGU6IHoubGl0ZXJhbCgnY29udHJvbF9jYW5jZWxfcmVxdWVzdCcpLFxuICAgICAgcmVxdWVzdF9pZDogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnQ2FuY2VscyBhIGN1cnJlbnRseSBvcGVuIGNvbnRyb2wgcmVxdWVzdC4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0tlZXBBbGl2ZU1lc3NhZ2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHR5cGU6IHoubGl0ZXJhbCgna2VlcF9hbGl2ZScpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdLZWVwLWFsaXZlIG1lc3NhZ2UgdG8gbWFpbnRhaW4gV2ViU29ja2V0IGNvbm5lY3Rpb24uJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtVcGRhdGVFbnZpcm9ubWVudFZhcmlhYmxlc01lc3NhZ2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHR5cGU6IHoubGl0ZXJhbCgndXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlcycpLFxuICAgICAgdmFyaWFibGVzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnN0cmluZygpKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnVXBkYXRlcyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXQgcnVudGltZS4nKSxcbilcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWdncmVnYXRlIE1lc3NhZ2UgVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IFN0ZG91dE1lc3NhZ2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoudW5pb24oW1xuICAgIFNES01lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtTdHJlYW1saW5lZFRleHRNZXNzYWdlU2NoZW1hKCksXG4gICAgU0RLU3RyZWFtbGluZWRUb29sVXNlU3VtbWFyeU1lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtQb3N0VHVyblN1bW1hcnlNZXNzYWdlU2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFJlc3BvbnNlU2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sQ2FuY2VsUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0tlZXBBbGl2ZU1lc3NhZ2VTY2hlbWEoKSxcbiAgXSksXG4pXG5cbmV4cG9ydCBjb25zdCBTdGRpbk1lc3NhZ2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoudW5pb24oW1xuICAgIFNES1VzZXJNZXNzYWdlU2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sUmVzcG9uc2VTY2hlbWEoKSxcbiAgICBTREtLZWVwQWxpdmVNZXNzYWdlU2NoZW1hKCksXG4gICAgU0RLVXBkYXRlRW52aXJvbm1lbnRWYXJpYWJsZXNNZXNzYWdlU2NoZW1hKCksXG4gIF0pLFxuKVxuIiwgImltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcblxuLy8gSlNPTi5zdHJpbmdpZnkgZW1pdHMgVSsyMDI4L1UrMjAyOSByYXcgKHZhbGlkIHBlciBFQ01BLTQwNCkuIFdoZW4gdGhlXG4vLyBvdXRwdXQgaXMgYSBzaW5nbGUgTkRKU09OIGxpbmUsIGFueSByZWNlaXZlciB0aGF0IHVzZXMgSmF2YVNjcmlwdFxuLy8gbGluZS10ZXJtaW5hdG9yIHNlbWFudGljcyAoRUNNQS0yNjIgXHUwMEE3MTEuMyBcdTIwMTQgXFxuIFxcciBVKzIwMjggVSsyMDI5KSB0b1xuLy8gc3BsaXQgdGhlIHN0cmVhbSB3aWxsIGN1dCB0aGUgSlNPTiBtaWQtc3RyaW5nLiBQcm9jZXNzVHJhbnNwb3J0IG5vd1xuLy8gc2lsZW50bHkgc2tpcHMgbm9uLUpTT04gbGluZXMgcmF0aGVyIHRoYW4gY3Jhc2hpbmcgKGdoLTI4NDA1KSwgYnV0XG4vLyB0aGUgdHJ1bmNhdGVkIGZyYWdtZW50IGlzIHN0aWxsIGxvc3QgXHUyMDE0IHRoZSBtZXNzYWdlIGlzIHNpbGVudGx5IGRyb3BwZWQuXG4vL1xuLy8gVGhlIFxcdVhYWFggZm9ybSBpcyBlcXVpdmFsZW50IEpTT04gKHBhcnNlcyB0byB0aGUgc2FtZSBzdHJpbmcpIGJ1dFxuLy8gY2FuIG5ldmVyIGJlIG1pc3Rha2VuIGZvciBhIGxpbmUgdGVybWluYXRvciBieSBBTlkgcmVjZWl2ZXIuIFRoaXMgaXNcbi8vIHdoYXQgRVMyMDE5J3MgXCJTdWJzdW1lIEpTT05cIiBwcm9wb3NhbCBhbmQgTm9kZSdzIHV0aWwuaW5zcGVjdCBkby5cbi8vXG4vLyBTaW5nbGUgcmVnZXggd2l0aCBhbHRlcm5hdGlvbjogdGhlIGNhbGxiYWNrJ3Mgb25lIGRpc3BhdGNoIHBlciBtYXRjaFxuLy8gaXMgY2hlYXBlciB0aGFuIHR3byBmdWxsLXN0cmluZyBzY2Fucy5cbmNvbnN0IEpTX0xJTkVfVEVSTUlOQVRPUlMgPSAvXFx1MjAyOHxcXHUyMDI5L2dcblxuZnVuY3Rpb24gZXNjYXBlSnNMaW5lVGVybWluYXRvcnMoanNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpzb24ucmVwbGFjZShKU19MSU5FX1RFUk1JTkFUT1JTLCBjID0+XG4gICAgYyA9PT0gJ1xcdTIwMjgnID8gJ1xcXFx1MjAyOCcgOiAnXFxcXHUyMDI5JyxcbiAgKVxufVxuXG4vKipcbiAqIEpTT04uc3RyaW5naWZ5IGZvciBvbmUtbWVzc2FnZS1wZXItbGluZSB0cmFuc3BvcnRzLiBFc2NhcGVzIFUrMjAyOFxuICogTElORSBTRVBBUkFUT1IgYW5kIFUrMjAyOSBQQVJBR1JBUEggU0VQQVJBVE9SIHNvIHRoZSBzZXJpYWxpemVkIG91dHB1dFxuICogY2Fubm90IGJlIGJyb2tlbiBieSBhIGxpbmUtc3BsaXR0aW5nIHJlY2VpdmVyLiBPdXRwdXQgaXMgc3RpbGwgdmFsaWRcbiAqIEpTT04gYW5kIHBhcnNlcyB0byB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5kanNvblNhZmVTdHJpbmdpZnkodmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gZXNjYXBlSnNMaW5lVGVybWluYXRvcnMoanNvblN0cmluZ2lmeSh2YWx1ZSkpXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgZ2V0U2RrQmV0YXMsIGdldFNlc3Npb25JZCB9IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBERUZBVUxUX09VVFBVVF9TVFlMRV9OQU1FIH0gZnJvbSAnc3JjL2NvbnN0YW50cy9vdXRwdXRTdHlsZXMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIEFwaUtleVNvdXJjZSxcbiAgUGVybWlzc2lvbk1vZGUsXG4gIFNES01lc3NhZ2UsXG59IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHtcbiAgQUdFTlRfVE9PTF9OQU1FLFxuICBMRUdBQ1lfQUdFTlRfVE9PTF9OQU1FLFxufSBmcm9tICdzcmMvdG9vbHMvQWdlbnRUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IGdldEFudGhyb3BpY0FwaUtleVdpdGhTb3VyY2UgfSBmcm9tICcuLi9hdXRoLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vY3dkLmpzJ1xuaW1wb3J0IHsgZ2V0RmFzdE1vZGVTdGF0ZSB9IGZyb20gJy4uL2Zhc3RNb2RlLmpzJ1xuaW1wb3J0IHsgZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCB9IGZyb20gJy4uL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuXG4vLyBUT0RPKG5leHQtbWlub3IpOiByZW1vdmUgdGhpcyB0cmFuc2xhdGlvbiBvbmNlIFNESyBjb25zdW1lcnMgaGF2ZSBtaWdyYXRlZFxuLy8gdG8gdGhlICdBZ2VudCcgdG9vbCBuYW1lLiBUaGUgd2lyZSBuYW1lIHdhcyByZW5hbWVkIFRhc2sgXHUyMTkyIEFnZW50IGluICMxOTY0Nyxcbi8vIGJ1dCBlbWl0dGluZyB0aGUgbmV3IG5hbWUgaW4gaW5pdC9yZXN1bHQgZXZlbnRzIGJyb2tlIFNESyBjb25zdW1lcnMgb24gYVxuLy8gcGF0Y2gtbGV2ZWwgcmVsZWFzZS4gS2VlcCBlbWl0dGluZyAnVGFzaycgdW50aWwgdGhlIG5leHQgbWlub3IuXG5leHBvcnQgZnVuY3Rpb24gc2RrQ29tcGF0VG9vbE5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5hbWUgPT09IEFHRU5UX1RPT0xfTkFNRSA/IExFR0FDWV9BR0VOVF9UT09MX05BTUUgOiBuYW1lXG59XG5cbnR5cGUgQ29tbWFuZExpa2UgPSB7IG5hbWU6IHN0cmluZzsgdXNlckludm9jYWJsZT86IGJvb2xlYW4gfVxuXG5leHBvcnQgdHlwZSBTeXN0ZW1Jbml0SW5wdXRzID0ge1xuICB0b29sczogUmVhZG9ubHlBcnJheTx7IG5hbWU6IHN0cmluZyB9PlxuICBtY3BDbGllbnRzOiBSZWFkb25seUFycmF5PHsgbmFtZTogc3RyaW5nOyB0eXBlOiBzdHJpbmcgfT5cbiAgbW9kZWw6IHN0cmluZ1xuICBwZXJtaXNzaW9uTW9kZTogUGVybWlzc2lvbk1vZGVcbiAgY29tbWFuZHM6IFJlYWRvbmx5QXJyYXk8Q29tbWFuZExpa2U+XG4gIGFnZW50czogUmVhZG9ubHlBcnJheTx7IGFnZW50VHlwZTogc3RyaW5nIH0+XG4gIHNraWxsczogUmVhZG9ubHlBcnJheTxDb21tYW5kTGlrZT5cbiAgcGx1Z2luczogUmVhZG9ubHlBcnJheTx7IG5hbWU6IHN0cmluZzsgcGF0aDogc3RyaW5nOyBzb3VyY2U6IHN0cmluZyB9PlxuICBmYXN0TW9kZTogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBgc3lzdGVtL2luaXRgIFNES01lc3NhZ2UgXHUyMDE0IHRoZSBmaXJzdCBtZXNzYWdlIG9uIHRoZSBTREsgc3RyZWFtXG4gKiBjYXJyeWluZyBzZXNzaW9uIG1ldGFkYXRhIChjd2QsIHRvb2xzLCBtb2RlbCwgY29tbWFuZHMsIGV0Yy4pIHRoYXQgcmVtb3RlXG4gKiBjbGllbnRzIHVzZSB0byByZW5kZXIgcGlja2VycyBhbmQgZ2F0ZSBVSS5cbiAqXG4gKiBDYWxsZWQgZnJvbSB0d28gcGF0aHMgdGhhdCBtdXN0IHByb2R1Y2UgaWRlbnRpY2FsIHNoYXBlczpcbiAqICAgLSBRdWVyeUVuZ2luZSAoc3Bhd24tYnJpZGdlIC8gcHJpbnQtbW9kZSAvIFNESykgXHUyMDE0IHlpZWxkZWQgYXMgdGhlIGZpcnN0XG4gKiAgICAgc3RyZWFtIG1lc3NhZ2UgcGVyIHF1ZXJ5IHR1cm5cbiAqICAgLSB1c2VSZXBsQnJpZGdlIChSRVBMIFJlbW90ZSBDb250cm9sKSBcdTIwMTQgc2VudCB2aWEgd3JpdGVTZGtNZXNzYWdlcygpIG9uXG4gKiAgICAgYnJpZGdlIGNvbm5lY3QsIHNpbmNlIFJFUEwgdXNlcyBxdWVyeSgpIGRpcmVjdGx5IGFuZCBuZXZlciBoaXRzIHRoZVxuICogICAgIFF1ZXJ5RW5naW5lIFNES01lc3NhZ2UgbGF5ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3lzdGVtSW5pdE1lc3NhZ2UoaW5wdXRzOiBTeXN0ZW1Jbml0SW5wdXRzKTogU0RLTWVzc2FnZSB7XG4gIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gIGNvbnN0IG91dHB1dFN0eWxlID0gc2V0dGluZ3M/Lm91dHB1dFN0eWxlID8/IERFRkFVTFRfT1VUUFVUX1NUWUxFX05BTUVcblxuICBjb25zdCBpbml0TWVzc2FnZTogU0RLTWVzc2FnZSA9IHtcbiAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICBzdWJ0eXBlOiAnaW5pdCcsXG4gICAgY3dkOiBnZXRDd2QoKSxcbiAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICB0b29sczogaW5wdXRzLnRvb2xzLm1hcCh0b29sID0+IHNka0NvbXBhdFRvb2xOYW1lKHRvb2wubmFtZSkpLFxuICAgIG1jcF9zZXJ2ZXJzOiBpbnB1dHMubWNwQ2xpZW50cy5tYXAoY2xpZW50ID0+ICh7XG4gICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgIHN0YXR1czogY2xpZW50LnR5cGUsXG4gICAgfSkpLFxuICAgIG1vZGVsOiBpbnB1dHMubW9kZWwsXG4gICAgcGVybWlzc2lvbk1vZGU6IGlucHV0cy5wZXJtaXNzaW9uTW9kZSxcbiAgICBzbGFzaF9jb21tYW5kczogaW5wdXRzLmNvbW1hbmRzXG4gICAgICAuZmlsdGVyKGMgPT4gYy51c2VySW52b2NhYmxlICE9PSBmYWxzZSlcbiAgICAgIC5tYXAoYyA9PiBjLm5hbWUpLFxuICAgIGFwaUtleVNvdXJjZTogZ2V0QW50aHJvcGljQXBpS2V5V2l0aFNvdXJjZSgpLnNvdXJjZSBhcyBBcGlLZXlTb3VyY2UsXG4gICAgYmV0YXM6IGdldFNka0JldGFzKCksXG4gICAgY2xhdWRlX2NvZGVfdmVyc2lvbjogTUFDUk8uVkVSU0lPTixcbiAgICBvdXRwdXRfc3R5bGU6IG91dHB1dFN0eWxlLFxuICAgIGFnZW50czogaW5wdXRzLmFnZW50cy5tYXAoYWdlbnQgPT4gYWdlbnQuYWdlbnRUeXBlKSxcbiAgICBza2lsbHM6IGlucHV0cy5za2lsbHNcbiAgICAgIC5maWx0ZXIocyA9PiBzLnVzZXJJbnZvY2FibGUgIT09IGZhbHNlKVxuICAgICAgLm1hcChza2lsbCA9PiBza2lsbC5uYW1lKSxcbiAgICBwbHVnaW5zOiBpbnB1dHMucGx1Z2lucy5tYXAocGx1Z2luID0+ICh7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHBhdGg6IHBsdWdpbi5wYXRoLFxuICAgICAgc291cmNlOiBwbHVnaW4uc291cmNlLFxuICAgIH0pKSxcbiAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gIH1cbiAgLy8gSGlkZGVuIGZyb20gcHVibGljIFNESyB0eXBlcyBcdTIwMTQgYW50LW9ubHkgVURTIG1lc3NhZ2luZyBzb2NrZXQgcGF0aFxuICBpZiAoZmVhdHVyZSgnVURTX0lOQk9YJykpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgOyhpbml0TWVzc2FnZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikubWVzc2FnaW5nX3NvY2tldF9wYXRoID1cbiAgICAgIHJlcXVpcmUoJy4uL3Vkc01lc3NhZ2luZy5qcycpLmdldFVkc01lc3NhZ2luZ1NvY2tldFBhdGgoKVxuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICB9XG4gIGluaXRNZXNzYWdlLmZhc3RfbW9kZV9zdGF0ZSA9IGdldEZhc3RNb2RlU3RhdGUoaW5wdXRzLm1vZGVsLCBpbnB1dHMuZmFzdE1vZGUpXG4gIHJldHVybiBpbml0TWVzc2FnZVxufVxuIiwgInR5cGUgVHJpZ2dlclBvc2l0aW9uID0geyB3b3JkOiBzdHJpbmc7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH1cblxuY29uc3QgT1BFTl9UT19DTE9TRTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJ2AnOiAnYCcsXG4gICdcIic6ICdcIicsXG4gICc8JzogJz4nLFxuICAneyc6ICd9JyxcbiAgJ1snOiAnXScsXG4gICcoJzogJyknLFxuICBcIidcIjogXCInXCIsXG59XG5cbi8qKlxuICogRmluZCBrZXl3b3JkIHBvc2l0aW9ucywgc2tpcHBpbmcgb2NjdXJyZW5jZXMgdGhhdCBhcmUgY2xlYXJseSBub3QgYVxuICogbGF1bmNoIGRpcmVjdGl2ZTpcbiAqXG4gKiAtIEluc2lkZSBwYWlyZWQgZGVsaW1pdGVyczogYmFja3RpY2tzLCBkb3VibGUgcXVvdGVzLCBhbmdsZSBicmFja2V0c1xuICogICAodGFnLWxpa2Ugb25seSwgc28gYG4gPCA1IHVsdHJhcGxhbiBuID4gMTBgIGlzIG5vdCBhIHBoYW50b20gcmFuZ2UpLFxuICogICBjdXJseSBicmFjZXMsIHNxdWFyZSBicmFja2V0cyAoaW5uZXJtb3N0IFx1MjAxNCBwcmVFeHBhbnNpb25JbnB1dCBoYXNcbiAqICAgYFtQYXN0ZWQgdGV4dCAjTl1gIHBsYWNlaG9sZGVycyksIHBhcmVudGhlc2VzLiBTaW5nbGUgcXVvdGVzIGFyZVxuICogICBkZWxpbWl0ZXJzIG9ubHkgd2hlbiBub3QgYW4gYXBvc3Ryb3BoZSBcdTIwMTQgdGhlIG9wZW5pbmcgcXVvdGUgbXVzdCBiZVxuICogICBwcmVjZWRlZCBieSBhIG5vbi13b3JkIGNoYXIgKG9yIHN0YXJ0KSBhbmQgdGhlIGNsb3NpbmcgcXVvdGUgbXVzdCBiZVxuICogICBmb2xsb3dlZCBieSBhIG5vbi13b3JkIGNoYXIgKG9yIGVuZCksIHNvIFwibGV0J3MgdWx0cmFwbGFuIGl0J3NcIlxuICogICBzdGlsbCB0cmlnZ2Vycy5cbiAqXG4gKiAtIFBhdGgvaWRlbnRpZmllci1saWtlIGNvbnRleHQ6IGltbWVkaWF0ZWx5IHByZWNlZGVkIG9yIGZvbGxvd2VkIGJ5XG4gKiAgIGAvYCwgYFxcYCwgb3IgYC1gLCBvciBmb2xsb3dlZCBieSBgLmAgKyB3b3JkIGNoYXIgKGZpbGUgZXh0ZW5zaW9uKS5cbiAqICAgYFxcYmAgc2VlcyBhIGJvdW5kYXJ5IGF0IGAtYCwgc28gYHVsdHJhcGxhbi1zYCB3b3VsZCBvdGhlcndpc2VcbiAqICAgbWF0Y2guIFRoaXMga2VlcHMgYHNyYy91bHRyYXBsYW4vZm9vLnRzYCwgYHVsdHJhcGxhbi50c3hgLCBhbmRcbiAqICAgYC0tdWx0cmFwbGFuLW1vZGVgIGZyb20gdHJpZ2dlcmluZyB3aGlsZSBgdWx0cmFwbGFuLmAgYXQgYSBzZW50ZW5jZVxuICogICBlbmQgc3RpbGwgZG9lcy5cbiAqXG4gKiAtIEZvbGxvd2VkIGJ5IGA/YDogYSBxdWVzdGlvbiBhYm91dCB0aGUgZmVhdHVyZSBzaG91bGRuJ3QgaW52b2tlIGl0LlxuICogICBPdGhlciBzZW50ZW5jZSBwdW5jdHVhdGlvbiAoYC5gLCBgLGAsIGAhYCkgc3RpbGwgdHJpZ2dlcnMuXG4gKlxuICogLSBTbGFzaCBjb21tYW5kIGlucHV0OiB0ZXh0IHN0YXJ0aW5nIHdpdGggYC9gIGlzIGEgc2xhc2ggY29tbWFuZFxuICogICBpbnZvY2F0aW9uIChwcm9jZXNzVXNlcklucHV0LnRzIHJvdXRlcyBpdCB0byBwcm9jZXNzU2xhc2hDb21tYW5kLFxuICogICBub3Qga2V5d29yZCBkZXRlY3Rpb24pLCBzbyBgL3JlbmFtZSB1bHRyYXBsYW4gZm9vYCBuZXZlciB0cmlnZ2Vycy5cbiAqICAgV2l0aG91dCB0aGlzLCBQcm9tcHRJbnB1dCB3b3VsZCByYWluYm93LWhpZ2hsaWdodCB0aGUgd29yZCBhbmQgc2hvd1xuICogICB0aGUgXCJ3aWxsIGxhdW5jaCB1bHRyYXBsYW5cIiBub3RpZmljYXRpb24gZXZlbiB0aG91Z2ggc3VibWl0dGluZyB0aGVcbiAqICAgaW5wdXQgcnVucyAvcmVuYW1lLCBub3QgL3VsdHJhcGxhbi5cbiAqXG4gKiBTaGFwZSBtYXRjaGVzIGZpbmRUaGlua2luZ1RyaWdnZXJQb3NpdGlvbnMgKHRoaW5raW5nLnRzKSBzb1xuICogUHJvbXB0SW5wdXQgdHJlYXRzIGJvdGggdHJpZ2dlciB0eXBlcyB1bmlmb3JtbHkuXG4gKi9cbmZ1bmN0aW9uIGZpbmRLZXl3b3JkVHJpZ2dlclBvc2l0aW9ucyhcbiAgdGV4dDogc3RyaW5nLFxuICBrZXl3b3JkOiBzdHJpbmcsXG4pOiBUcmlnZ2VyUG9zaXRpb25bXSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChrZXl3b3JkLCAnaScpXG4gIGlmICghcmUudGVzdCh0ZXh0KSkgcmV0dXJuIFtdXG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIFtdXG4gIGNvbnN0IHF1b3RlZFJhbmdlczogQXJyYXk8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PiA9IFtdXG4gIGxldCBvcGVuUXVvdGU6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBvcGVuQXQgPSAwXG4gIGNvbnN0IGlzV29yZCA9IChjaDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiAhIWNoICYmIC9bXFxwe0x9XFxwe059X10vdS50ZXN0KGNoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaCA9IHRleHRbaV0hXG4gICAgaWYgKG9wZW5RdW90ZSkge1xuICAgICAgaWYgKG9wZW5RdW90ZSA9PT0gJ1snICYmIGNoID09PSAnWycpIHtcbiAgICAgICAgb3BlbkF0ID0gaVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGNoICE9PSBPUEVOX1RPX0NMT1NFW29wZW5RdW90ZV0pIGNvbnRpbnVlXG4gICAgICBpZiAob3BlblF1b3RlID09PSBcIidcIiAmJiBpc1dvcmQodGV4dFtpICsgMV0pKSBjb250aW51ZVxuICAgICAgcXVvdGVkUmFuZ2VzLnB1c2goeyBzdGFydDogb3BlbkF0LCBlbmQ6IGkgKyAxIH0pXG4gICAgICBvcGVuUXVvdGUgPSBudWxsXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjaCA9PT0gJzwnICYmIGkgKyAxIDwgdGV4dC5sZW5ndGggJiYgL1thLXpBLVovXS8udGVzdCh0ZXh0W2kgKyAxXSEpKSB8fFxuICAgICAgKGNoID09PSBcIidcIiAmJiAhaXNXb3JkKHRleHRbaSAtIDFdKSkgfHxcbiAgICAgIChjaCAhPT0gJzwnICYmIGNoICE9PSBcIidcIiAmJiBjaCBpbiBPUEVOX1RPX0NMT1NFKVxuICAgICkge1xuICAgICAgb3BlblF1b3RlID0gY2hcbiAgICAgIG9wZW5BdCA9IGlcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb3NpdGlvbnM6IFRyaWdnZXJQb3NpdGlvbltdID0gW11cbiAgY29uc3Qgd29yZFJlID0gbmV3IFJlZ0V4cChgXFxcXGIke2tleXdvcmR9XFxcXGJgLCAnZ2knKVxuICBjb25zdCBtYXRjaGVzID0gdGV4dC5tYXRjaEFsbCh3b3JkUmUpXG4gIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgIGlmIChtYXRjaC5pbmRleCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuICAgIGNvbnN0IHN0YXJ0ID0gbWF0Y2guaW5kZXhcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIG1hdGNoWzBdLmxlbmd0aFxuICAgIGlmIChxdW90ZWRSYW5nZXMuc29tZShyID0+IHN0YXJ0ID49IHIuc3RhcnQgJiYgc3RhcnQgPCByLmVuZCkpIGNvbnRpbnVlXG4gICAgY29uc3QgYmVmb3JlID0gdGV4dFtzdGFydCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSB0ZXh0W2VuZF1cbiAgICBpZiAoYmVmb3JlID09PSAnLycgfHwgYmVmb3JlID09PSAnXFxcXCcgfHwgYmVmb3JlID09PSAnLScpIGNvbnRpbnVlXG4gICAgaWYgKGFmdGVyID09PSAnLycgfHwgYWZ0ZXIgPT09ICdcXFxcJyB8fCBhZnRlciA9PT0gJy0nIHx8IGFmdGVyID09PSAnPycpXG4gICAgICBjb250aW51ZVxuICAgIGlmIChhZnRlciA9PT0gJy4nICYmIGlzV29yZCh0ZXh0W2VuZCArIDFdKSkgY29udGludWVcbiAgICBwb3NpdGlvbnMucHVzaCh7IHdvcmQ6IG1hdGNoWzBdLCBzdGFydCwgZW5kIH0pXG4gIH1cbiAgcmV0dXJuIHBvc2l0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFVsdHJhcGxhblRyaWdnZXJQb3NpdGlvbnModGV4dDogc3RyaW5nKTogVHJpZ2dlclBvc2l0aW9uW10ge1xuICByZXR1cm4gZmluZEtleXdvcmRUcmlnZ2VyUG9zaXRpb25zKHRleHQsICd1bHRyYXBsYW4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFVsdHJhcmV2aWV3VHJpZ2dlclBvc2l0aW9ucyhcbiAgdGV4dDogc3RyaW5nLFxuKTogVHJpZ2dlclBvc2l0aW9uW10ge1xuICByZXR1cm4gZmluZEtleXdvcmRUcmlnZ2VyUG9zaXRpb25zKHRleHQsICd1bHRyYXJldmlldycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNVbHRyYXBsYW5LZXl3b3JkKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZmluZFVsdHJhcGxhblRyaWdnZXJQb3NpdGlvbnModGV4dCkubGVuZ3RoID4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzVWx0cmFyZXZpZXdLZXl3b3JkKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZmluZFVsdHJhcmV2aWV3VHJpZ2dlclBvc2l0aW9ucyh0ZXh0KS5sZW5ndGggPiAwXG59XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgZmlyc3QgdHJpZ2dlcmFibGUgXCJ1bHRyYXBsYW5cIiB3aXRoIFwicGxhblwiIHNvIHRoZSBmb3J3YXJkZWRcbiAqIHByb21wdCBzdGF5cyBncmFtbWF0aWNhbCAoXCJwbGVhc2UgdWx0cmFwbGFuIHRoaXNcIiBcdTIxOTIgXCJwbGVhc2UgcGxhbiB0aGlzXCIpLlxuICogUHJlc2VydmVzIHRoZSB1c2VyJ3MgY2FzaW5nIG9mIHRoZSBcInBsYW5cIiBzdWZmaXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVWx0cmFwbGFuS2V5d29yZCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBbdHJpZ2dlcl0gPSBmaW5kVWx0cmFwbGFuVHJpZ2dlclBvc2l0aW9ucyh0ZXh0KVxuICBpZiAoIXRyaWdnZXIpIHJldHVybiB0ZXh0XG4gIGNvbnN0IGJlZm9yZSA9IHRleHQuc2xpY2UoMCwgdHJpZ2dlci5zdGFydClcbiAgY29uc3QgYWZ0ZXIgPSB0ZXh0LnNsaWNlKHRyaWdnZXIuZW5kKVxuICBpZiAoIShiZWZvcmUgKyBhZnRlcikudHJpbSgpKSByZXR1cm4gJydcbiAgcmV0dXJuIGJlZm9yZSArIHRyaWdnZXIud29yZC5zbGljZSgndWx0cmEnLmxlbmd0aCkgKyBhZnRlclxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHR5cGUge1xuICBCYXNlNjRJbWFnZVNvdXJjZSxcbiAgQ29udGVudEJsb2NrUGFyYW0sXG4gIEltYWdlQmxvY2tQYXJhbSxcbn0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IFF1ZXJ5U291cmNlIH0gZnJvbSAnc3JjL2NvbnN0YW50cy9xdWVyeVNvdXJjZS5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGdldENvbnRlbnRUZXh0IH0gZnJvbSAnc3JjL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHtcbiAgZmluZENvbW1hbmQsXG4gIGdldENvbW1hbmROYW1lLFxuICBpc0JyaWRnZVNhZmVDb21tYW5kLFxuICB0eXBlIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG59IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICcuLi8uLi9ob29rcy91c2VDYW5Vc2VUb29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBJREVTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VJZGVTZWxlY3Rpb24uanMnXG5pbXBvcnQgdHlwZSB7IFNldFRvb2xKU1hGbiwgVG9vbFVzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBBc3Npc3RhbnRNZXNzYWdlLFxuICBBdHRhY2htZW50TWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgUHJvZ3Jlc3NNZXNzYWdlLFxuICBTeXN0ZW1NZXNzYWdlLFxuICBVc2VyTWVzc2FnZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHsgUGVybWlzc2lvbk1vZGUgfSBmcm9tICcuLi8uLi90eXBlcy9wZXJtaXNzaW9ucy5qcydcbmltcG9ydCB7XG4gIGlzVmFsaWRJbWFnZVBhc3RlLFxuICB0eXBlIFByb21wdElucHV0TW9kZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvdGV4dElucHV0VHlwZXMuanMnXG5pbXBvcnQge1xuICB0eXBlIEFnZW50TWVudGlvbkF0dGFjaG1lbnQsXG4gIGNyZWF0ZUF0dGFjaG1lbnRNZXNzYWdlLFxuICBnZXRBdHRhY2htZW50TWVzc2FnZXMsXG59IGZyb20gJy4uL2F0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBQYXN0ZWRDb250ZW50IH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHR5cGUgeyBFZmZvcnRWYWx1ZSB9IGZyb20gJy4uL2VmZm9ydC5qcydcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuLi9nZW5lcmF0b3JzLmpzJ1xuaW1wb3J0IHtcbiAgZXhlY3V0ZVVzZXJQcm9tcHRTdWJtaXRIb29rcyxcbiAgZ2V0VXNlclByb21wdFN1Ym1pdEhvb2tCbG9ja2luZ01lc3NhZ2UsXG59IGZyb20gJy4uL2hvb2tzLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlSW1hZ2VNZXRhZGF0YVRleHQsXG4gIG1heWJlUmVzaXplQW5kRG93bnNhbXBsZUltYWdlQmxvY2ssXG59IGZyb20gJy4uL2ltYWdlUmVzaXplci5qcydcbmltcG9ydCB7IHN0b3JlSW1hZ2VzIH0gZnJvbSAnLi4vaW1hZ2VTdG9yZS5qcydcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbW1hbmRJbnB1dE1lc3NhZ2UsXG4gIGNyZWF0ZVN5c3RlbU1lc3NhZ2UsXG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxufSBmcm9tICcuLi9tZXNzYWdlcy5qcydcbmltcG9ydCB7IHF1ZXJ5Q2hlY2twb2ludCB9IGZyb20gJy4uL3F1ZXJ5UHJvZmlsZXIuanMnXG5pbXBvcnQgeyBwYXJzZVNsYXNoQ29tbWFuZCB9IGZyb20gJy4uL3NsYXNoQ29tbWFuZFBhcnNpbmcuanMnXG5pbXBvcnQge1xuICBoYXNVbHRyYXBsYW5LZXl3b3JkLFxuICByZXBsYWNlVWx0cmFwbGFuS2V5d29yZCxcbn0gZnJvbSAnLi4vdWx0cmFwbGFuL2tleXdvcmQuanMnXG5pbXBvcnQgeyBwcm9jZXNzVGV4dFByb21wdCB9IGZyb20gJy4vcHJvY2Vzc1RleHRQcm9tcHQuanMnXG5leHBvcnQgdHlwZSBQcm9jZXNzVXNlcklucHV0Q29udGV4dCA9IFRvb2xVc2VDb250ZXh0ICYgTG9jYWxKU1hDb21tYW5kQ29udGV4dFxuXG5leHBvcnQgdHlwZSBQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdCA9IHtcbiAgbWVzc2FnZXM6IChcbiAgICB8IFVzZXJNZXNzYWdlXG4gICAgfCBBc3Npc3RhbnRNZXNzYWdlXG4gICAgfCBBdHRhY2htZW50TWVzc2FnZVxuICAgIHwgU3lzdGVtTWVzc2FnZVxuICAgIHwgUHJvZ3Jlc3NNZXNzYWdlXG4gIClbXVxuICBzaG91bGRRdWVyeTogYm9vbGVhblxuICBhbGxvd2VkVG9vbHM/OiBzdHJpbmdbXVxuICBtb2RlbD86IHN0cmluZ1xuICBlZmZvcnQ/OiBFZmZvcnRWYWx1ZVxuICAvLyBPdXRwdXQgdGV4dCBmb3Igbm9uLWludGVyYWN0aXZlIG1vZGUgKGUuZy4sIGZvcmtlZCBjb21tYW5kcylcbiAgLy8gV2hlbiBzZXQsIHRoaXMgaXMgdXNlZCBhcyB0aGUgcmVzdWx0IGluIC1wIG1vZGUgaW5zdGVhZCBvZiBlbXB0eSBzdHJpbmdcbiAgcmVzdWx0VGV4dD86IHN0cmluZ1xuICAvLyBXaGVuIHNldCwgcHJlZmlsbHMgb3Igc3VibWl0cyB0aGUgbmV4dCBpbnB1dCBhZnRlciBjb21tYW5kIGNvbXBsZXRlc1xuICAvLyBVc2VkIGJ5IC9kaXNjb3ZlciB0byBjaGFpbiBpbnRvIHRoZSBzZWxlY3RlZCBmZWF0dXJlJ3MgY29tbWFuZFxuICBuZXh0SW5wdXQ/OiBzdHJpbmdcbiAgc3VibWl0TmV4dElucHV0PzogYm9vbGVhblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1VzZXJJbnB1dCh7XG4gIGlucHV0LFxuICBwcmVFeHBhbnNpb25JbnB1dCxcbiAgbW9kZSxcbiAgc2V0VG9vbEpTWCxcbiAgY29udGV4dCxcbiAgcGFzdGVkQ29udGVudHMsXG4gIGlkZVNlbGVjdGlvbixcbiAgbWVzc2FnZXMsXG4gIHNldFVzZXJJbnB1dE9uUHJvY2Vzc2luZyxcbiAgdXVpZCxcbiAgaXNBbHJlYWR5UHJvY2Vzc2luZyxcbiAgcXVlcnlTb3VyY2UsXG4gIGNhblVzZVRvb2wsXG4gIHNraXBTbGFzaENvbW1hbmRzLFxuICBicmlkZ2VPcmlnaW4sXG4gIGlzTWV0YSxcbiAgc2tpcEF0dGFjaG1lbnRzLFxufToge1xuICBpbnB1dDogc3RyaW5nIHwgQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+XG4gIC8qKlxuICAgKiBJbnB1dCBiZWZvcmUgW1Bhc3RlZCB0ZXh0ICNOXSBleHBhbnNpb24uIFVzZWQgZm9yIHVsdHJhcGxhbiBrZXl3b3JkXG4gICAqIGRldGVjdGlvbiBzbyBwYXN0ZWQgY29udGVudCBjb250YWluaW5nIHRoZSB3b3JkIGNhbm5vdCB0cmlnZ2VyLiBGYWxsc1xuICAgKiBiYWNrIHRvIHRoZSBzdHJpbmcgYGlucHV0YCB3aGVuIHVuc2V0LlxuICAgKi9cbiAgcHJlRXhwYW5zaW9uSW5wdXQ/OiBzdHJpbmdcbiAgbW9kZTogUHJvbXB0SW5wdXRNb2RlXG4gIHNldFRvb2xKU1g6IFNldFRvb2xKU1hGblxuICBjb250ZXh0OiBQcm9jZXNzVXNlcklucHV0Q29udGV4dFxuICBwYXN0ZWRDb250ZW50cz86IFJlY29yZDxudW1iZXIsIFBhc3RlZENvbnRlbnQ+XG4gIGlkZVNlbGVjdGlvbj86IElERVNlbGVjdGlvblxuICBtZXNzYWdlcz86IE1lc3NhZ2VbXVxuICBzZXRVc2VySW5wdXRPblByb2Nlc3Npbmc/OiAocHJvbXB0Pzogc3RyaW5nKSA9PiB2b2lkXG4gIHV1aWQ/OiBzdHJpbmdcbiAgaXNBbHJlYWR5UHJvY2Vzc2luZz86IGJvb2xlYW5cbiAgcXVlcnlTb3VyY2U/OiBRdWVyeVNvdXJjZVxuICBjYW5Vc2VUb29sPzogQ2FuVXNlVG9vbEZuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGlucHV0IHN0YXJ0aW5nIHdpdGggYC9gIGlzIHRyZWF0ZWQgYXMgcGxhaW4gdGV4dC5cbiAgICogVXNlZCBmb3IgcmVtb3RlbHktcmVjZWl2ZWQgbWVzc2FnZXMgKGJyaWRnZS9DQ1IpIHRoYXQgc2hvdWxkIG5vdFxuICAgKiB0cmlnZ2VyIGxvY2FsIHNsYXNoIGNvbW1hbmRzIG9yIHNraWxscy5cbiAgICovXG4gIHNraXBTbGFzaENvbW1hbmRzPzogYm9vbGVhblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBzbGFzaCBjb21tYW5kcyBtYXRjaGluZyBpc0JyaWRnZVNhZmVDb21tYW5kKCkgZXhlY3V0ZSBldmVuXG4gICAqIHRob3VnaCBza2lwU2xhc2hDb21tYW5kcyBpcyBzZXQuIFNlZSBRdWV1ZWRDb21tYW5kLmJyaWRnZU9yaWdpbi5cbiAgICovXG4gIGJyaWRnZU9yaWdpbj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIHJlc3VsdGluZyBVc2VyTWVzc2FnZSBnZXRzIGBpc01ldGE6IHRydWVgICh1c2VyLWhpZGRlbixcbiAgICogbW9kZWwtdmlzaWJsZSkuIFByb3BhZ2F0ZWQgZnJvbSBgUXVldWVkQ29tbWFuZC5pc01ldGFgIGZvciBxdWV1ZWRcbiAgICogc3lzdGVtLWdlbmVyYXRlZCBwcm9tcHRzLlxuICAgKi9cbiAgaXNNZXRhPzogYm9vbGVhblxuICBza2lwQXR0YWNobWVudHM/OiBib29sZWFuXG59KTogUHJvbWlzZTxQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdD4ge1xuICBjb25zdCBpbnB1dFN0cmluZyA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IG51bGxcbiAgLy8gSW1tZWRpYXRlbHkgc2hvdyB0aGUgdXNlciBpbnB1dCBwcm9tcHQgd2hpbGUgd2UgYXJlIHN0aWxsIHByb2Nlc3NpbmcgdGhlIGlucHV0LlxuICAvLyBTa2lwIGZvciBpc01ldGEgKHN5c3RlbS1nZW5lcmF0ZWQgcHJvbXB0cyBsaWtlIHNjaGVkdWxlZCB0YXNrcykgXHUyMDE0IHRob3NlXG4gIC8vIHNob3VsZCBydW4gaW52aXNpYmx5LlxuICBpZiAobW9kZSA9PT0gJ3Byb21wdCcgJiYgaW5wdXRTdHJpbmcgIT09IG51bGwgJiYgIWlzTWV0YSkge1xuICAgIHNldFVzZXJJbnB1dE9uUHJvY2Vzc2luZz8uKGlucHV0U3RyaW5nKVxuICB9XG5cbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9wcm9jZXNzX3VzZXJfaW5wdXRfYmFzZV9zdGFydCcpXG5cbiAgY29uc3QgYXBwU3RhdGUgPSBjb250ZXh0LmdldEFwcFN0YXRlKClcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzVXNlcklucHV0QmFzZShcbiAgICBpbnB1dCxcbiAgICBtb2RlLFxuICAgIHNldFRvb2xKU1gsXG4gICAgY29udGV4dCxcbiAgICBwYXN0ZWRDb250ZW50cyxcbiAgICBpZGVTZWxlY3Rpb24sXG4gICAgbWVzc2FnZXMsXG4gICAgdXVpZCxcbiAgICBpc0FscmVhZHlQcm9jZXNzaW5nLFxuICAgIHF1ZXJ5U291cmNlLFxuICAgIGNhblVzZVRvb2wsXG4gICAgYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0Lm1vZGUsXG4gICAgc2tpcFNsYXNoQ29tbWFuZHMsXG4gICAgYnJpZGdlT3JpZ2luLFxuICAgIGlzTWV0YSxcbiAgICBza2lwQXR0YWNobWVudHMsXG4gICAgcHJlRXhwYW5zaW9uSW5wdXQsXG4gIClcbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9wcm9jZXNzX3VzZXJfaW5wdXRfYmFzZV9lbmQnKVxuXG4gIGlmICghcmVzdWx0LnNob3VsZFF1ZXJ5KSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gRXhlY3V0ZSBVc2VyUHJvbXB0U3VibWl0IGhvb2tzIGFuZCBoYW5kbGUgYmxvY2tpbmdcbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9ob29rc19zdGFydCcpXG4gIGNvbnN0IGlucHV0TWVzc2FnZSA9IGdldENvbnRlbnRUZXh0KGlucHV0KSB8fCAnJ1xuXG4gIGZvciBhd2FpdCAoY29uc3QgaG9va1Jlc3VsdCBvZiBleGVjdXRlVXNlclByb21wdFN1Ym1pdEhvb2tzKFxuICAgIGlucHV0TWVzc2FnZSxcbiAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQubW9kZSxcbiAgICBjb250ZXh0LFxuICAgIGNvbnRleHQucmVxdWVzdFByb21wdCxcbiAgKSkge1xuICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCB0aGUgcmVzdWx0XG4gICAgaWYgKGhvb2tSZXN1bHQubWVzc2FnZT8udHlwZSA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gb25seSBhIHN5c3RlbS1sZXZlbCBlcnJvciBtZXNzYWdlLCBlcmFzaW5nIHRoZSBvcmlnaW5hbCB1c2VyIGlucHV0XG4gICAgaWYgKGhvb2tSZXN1bHQuYmxvY2tpbmdFcnJvcikge1xuICAgICAgY29uc3QgYmxvY2tpbmdNZXNzYWdlID0gZ2V0VXNlclByb21wdFN1Ym1pdEhvb2tCbG9ja2luZ01lc3NhZ2UoXG4gICAgICAgIGhvb2tSZXN1bHQuYmxvY2tpbmdFcnJvcixcbiAgICAgIClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGFuIGF0dGFjaG1lbnQgbWVzc2FnZVxuICAgICAgICAgIGNyZWF0ZVN5c3RlbU1lc3NhZ2UoXG4gICAgICAgICAgICBgJHtibG9ja2luZ01lc3NhZ2V9XFxuXFxuT3JpZ2luYWwgcHJvbXB0OiAke2lucHV0fWAsXG4gICAgICAgICAgICAnd2FybmluZycsXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgICAgICBhbGxvd2VkVG9vbHM6IHJlc3VsdC5hbGxvd2VkVG9vbHMsXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgcHJldmVudENvbnRpbnVhdGlvbiBpcyBzZXQsIHN0b3AgcHJvY2Vzc2luZyBidXQga2VlcCB0aGUgb3JpZ2luYWxcbiAgICAvLyBwcm9tcHQgaW4gY29udGV4dC5cbiAgICBpZiAoaG9va1Jlc3VsdC5wcmV2ZW50Q29udGludWF0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gaG9va1Jlc3VsdC5zdG9wUmVhc29uXG4gICAgICAgID8gYE9wZXJhdGlvbiBzdG9wcGVkIGJ5IGhvb2s6ICR7aG9va1Jlc3VsdC5zdG9wUmVhc29ufWBcbiAgICAgICAgOiAnT3BlcmF0aW9uIHN0b3BwZWQgYnkgaG9vaydcbiAgICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKFxuICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICByZXN1bHQuc2hvdWxkUXVlcnkgPSBmYWxzZVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIENvbGxlY3QgYWRkaXRpb25hbCBjb250ZXh0c1xuICAgIGlmIChcbiAgICAgIGhvb2tSZXN1bHQuYWRkaXRpb25hbENvbnRleHRzICYmXG4gICAgICBob29rUmVzdWx0LmFkZGl0aW9uYWxDb250ZXh0cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICByZXN1bHQubWVzc2FnZXMucHVzaChcbiAgICAgICAgY3JlYXRlQXR0YWNobWVudE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdob29rX2FkZGl0aW9uYWxfY29udGV4dCcsXG4gICAgICAgICAgY29udGVudDogaG9va1Jlc3VsdC5hZGRpdGlvbmFsQ29udGV4dHMubWFwKGFwcGx5VHJ1bmNhdGlvbiksXG4gICAgICAgICAgaG9va05hbWU6ICdVc2VyUHJvbXB0U3VibWl0JyxcbiAgICAgICAgICB0b29sVXNlSUQ6IGBob29rLSR7cmFuZG9tVVVJRCgpfWAsXG4gICAgICAgICAgaG9va0V2ZW50OiAnVXNlclByb21wdFN1Ym1pdCcsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFRPRE86IENsZWFuIHRoaXMgdXBcbiAgICBpZiAoaG9va1Jlc3VsdC5tZXNzYWdlKSB7XG4gICAgICBzd2l0Y2ggKGhvb2tSZXN1bHQubWVzc2FnZS5hdHRhY2htZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaG9va19zdWNjZXNzJzpcbiAgICAgICAgICBpZiAoIWhvb2tSZXN1bHQubWVzc2FnZS5hdHRhY2htZW50LmNvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIFNraXAgaWYgdGhlcmUgaXMgbm8gY29udGVudFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0Lm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgLi4uaG9va1Jlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgYXR0YWNobWVudDoge1xuICAgICAgICAgICAgICAuLi5ob29rUmVzdWx0Lm1lc3NhZ2UuYXR0YWNobWVudCxcbiAgICAgICAgICAgICAgY29udGVudDogYXBwbHlUcnVuY2F0aW9uKGhvb2tSZXN1bHQubWVzc2FnZS5hdHRhY2htZW50LmNvbnRlbnQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0Lm1lc3NhZ2VzLnB1c2goaG9va1Jlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHF1ZXJ5Q2hlY2twb2ludCgncXVlcnlfaG9va3NfZW5kJylcblxuICAvLyBIYXBweSBwYXRoOiBvblF1ZXJ5IHdpbGwgY2xlYXIgdXNlcklucHV0T25Qcm9jZXNzaW5nIHZpYSBzdGFydFRyYW5zaXRpb25cbiAgLy8gc28gaXQgcmVzb2x2ZXMgaW4gdGhlIHNhbWUgZnJhbWUgYXMgZGVmZXJyZWRNZXNzYWdlcyAobm8gZmxpY2tlciBnYXApLlxuICAvLyBFcnJvciBwYXRocyBhcmUgaGFuZGxlZCBieSBoYW5kbGVQcm9tcHRTdWJtaXQncyBmaW5hbGx5IGJsb2NrLlxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IE1BWF9IT09LX09VVFBVVF9MRU5HVEggPSAxMDAwMFxuXG5mdW5jdGlvbiBhcHBseVRydW5jYXRpb24oY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGNvbnRlbnQubGVuZ3RoID4gTUFYX0hPT0tfT1VUUFVUX0xFTkdUSCkge1xuICAgIHJldHVybiBgJHtjb250ZW50LnN1YnN0cmluZygwLCBNQVhfSE9PS19PVVRQVVRfTEVOR1RIKX1cdTIwMjYgW291dHB1dCB0cnVuY2F0ZWQgLSBleGNlZWRlZCAke01BWF9IT09LX09VVFBVVF9MRU5HVEh9IGNoYXJhY3RlcnNdYFxuICB9XG4gIHJldHVybiBjb250ZW50XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NVc2VySW5wdXRCYXNlKFxuICBpbnB1dDogc3RyaW5nIHwgQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+LFxuICBtb2RlOiBQcm9tcHRJbnB1dE1vZGUsXG4gIHNldFRvb2xKU1g6IFNldFRvb2xKU1hGbixcbiAgY29udGV4dDogUHJvY2Vzc1VzZXJJbnB1dENvbnRleHQsXG4gIHBhc3RlZENvbnRlbnRzPzogUmVjb3JkPG51bWJlciwgUGFzdGVkQ29udGVudD4sXG4gIGlkZVNlbGVjdGlvbj86IElERVNlbGVjdGlvbixcbiAgbWVzc2FnZXM/OiBNZXNzYWdlW10sXG4gIHV1aWQ/OiBzdHJpbmcsXG4gIGlzQWxyZWFkeVByb2Nlc3Npbmc/OiBib29sZWFuLFxuICBxdWVyeVNvdXJjZT86IFF1ZXJ5U291cmNlLFxuICBjYW5Vc2VUb29sPzogQ2FuVXNlVG9vbEZuLFxuICBwZXJtaXNzaW9uTW9kZT86IFBlcm1pc3Npb25Nb2RlLFxuICBza2lwU2xhc2hDb21tYW5kcz86IGJvb2xlYW4sXG4gIGJyaWRnZU9yaWdpbj86IGJvb2xlYW4sXG4gIGlzTWV0YT86IGJvb2xlYW4sXG4gIHNraXBBdHRhY2htZW50cz86IGJvb2xlYW4sXG4gIHByZUV4cGFuc2lvbklucHV0Pzogc3RyaW5nLFxuKTogUHJvbWlzZTxQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdD4ge1xuICBsZXQgaW5wdXRTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBwcmVjZWRpbmdJbnB1dEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSA9IFtdXG5cbiAgLy8gQ29sbGVjdCBpbWFnZSBtZXRhZGF0YSB0ZXh0cyBmb3IgaXNNZXRhIG1lc3NhZ2VcbiAgY29uc3QgaW1hZ2VNZXRhZGF0YVRleHRzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLy8gTm9ybWFsaXplZCB2aWV3IG9mIGBpbnB1dGAgd2l0aCBpbWFnZSBibG9ja3MgcmVzaXplZC4gRm9yIHN0cmluZyBpbnB1dFxuICAvLyB0aGlzIGlzIGp1c3QgYGlucHV0YDsgZm9yIGFycmF5IGlucHV0IGl0J3MgdGhlIHByb2Nlc3NlZCBibG9ja3MuIFdlIHBhc3NcbiAgLy8gdGhpcyAobm90IHJhdyBgaW5wdXRgKSB0byBwcm9jZXNzVGV4dFByb21wdCBzbyByZXNpemVkL25vcm1hbGl6ZWQgaW1hZ2VcbiAgLy8gYmxvY2tzIGFjdHVhbGx5IHJlYWNoIHRoZSBBUEkgXHUyMDE0IG90aGVyd2lzZSB0aGUgcmVzaXplIHdvcmsgYWJvdmUgaXNcbiAgLy8gZGlzY2FyZGVkIGZvciB0aGUgcmVndWxhciBwcm9tcHQgcGF0aC4gQWxzbyBub3JtYWxpemVzIGJyaWRnZSBpbnB1dHNcbiAgLy8gd2hlcmUgaU9TIG1heSBzZW5kIGBtZWRpYVR5cGVgIGluc3RlYWQgb2YgYG1lZGlhX3R5cGVgIChtb2JpbGUtYXBwcyM1ODI1KS5cbiAgbGV0IG5vcm1hbGl6ZWRJbnB1dDogc3RyaW5nIHwgQ29udGVudEJsb2NrUGFyYW1bXSA9IGlucHV0XG5cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0XG4gIH0gZWxzZSBpZiAoaW5wdXQubGVuZ3RoID4gMCkge1xuICAgIHF1ZXJ5Q2hlY2twb2ludCgncXVlcnlfaW1hZ2VfcHJvY2Vzc2luZ19zdGFydCcpXG4gICAgY29uc3QgcHJvY2Vzc2VkQmxvY2tzOiBDb250ZW50QmxvY2tQYXJhbVtdID0gW11cbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGlucHV0KSB7XG4gICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb25zdCByZXNpemVkID0gYXdhaXQgbWF5YmVSZXNpemVBbmREb3duc2FtcGxlSW1hZ2VCbG9jayhibG9jaylcbiAgICAgICAgLy8gQ29sbGVjdCBpbWFnZSBtZXRhZGF0YSBmb3IgaXNNZXRhIG1lc3NhZ2VcbiAgICAgICAgaWYgKHJlc2l6ZWQuZGltZW5zaW9ucykge1xuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhVGV4dCA9IGNyZWF0ZUltYWdlTWV0YWRhdGFUZXh0KHJlc2l6ZWQuZGltZW5zaW9ucylcbiAgICAgICAgICBpZiAobWV0YWRhdGFUZXh0KSB7XG4gICAgICAgICAgICBpbWFnZU1ldGFkYXRhVGV4dHMucHVzaChtZXRhZGF0YVRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NlZEJsb2Nrcy5wdXNoKHJlc2l6ZWQuYmxvY2spXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzZWRCbG9ja3MucHVzaChibG9jaylcbiAgICAgIH1cbiAgICB9XG4gICAgbm9ybWFsaXplZElucHV0ID0gcHJvY2Vzc2VkQmxvY2tzXG4gICAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9pbWFnZV9wcm9jZXNzaW5nX2VuZCcpXG4gICAgLy8gRXh0cmFjdCB0aGUgaW5wdXQgc3RyaW5nIGZyb20gdGhlIGxhc3QgY29udGVudCBibG9jayBpZiBpdCBpcyB0ZXh0LFxuICAgIC8vIGFuZCBrZWVwIHRyYWNrIG9mIHRoZSBwcmVjZWRpbmcgY29udGVudCBibG9ja3NcbiAgICBjb25zdCBsYXN0QmxvY2sgPSBwcm9jZXNzZWRCbG9ja3NbcHJvY2Vzc2VkQmxvY2tzLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RCbG9jaz8udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpbnB1dFN0cmluZyA9IGxhc3RCbG9jay50ZXh0XG4gICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyA9IHByb2Nlc3NlZEJsb2Nrcy5zbGljZSgwLCAtMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MgPSBwcm9jZXNzZWRCbG9ja3NcbiAgICB9XG4gIH1cblxuICBpZiAoaW5wdXRTdHJpbmcgPT09IG51bGwgJiYgbW9kZSAhPT0gJ3Byb21wdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE1vZGU6ICR7bW9kZX0gcmVxdWlyZXMgYSBzdHJpbmcgaW5wdXQuYClcbiAgfVxuXG4gIC8vIEV4dHJhY3QgYW5kIGNvbnZlcnQgaW1hZ2UgY29udGVudCB0byBjb250ZW50IGJsb2NrcyBlYXJseVxuICAvLyBLZWVwIHRyYWNrIG9mIElEcyBpbiBvcmRlciBmb3IgbWVzc2FnZSBzdG9yYWdlXG4gIGNvbnN0IGltYWdlQ29udGVudHMgPSBwYXN0ZWRDb250ZW50c1xuICAgID8gT2JqZWN0LnZhbHVlcyhwYXN0ZWRDb250ZW50cykuZmlsdGVyKGlzVmFsaWRJbWFnZVBhc3RlKVxuICAgIDogW11cbiAgY29uc3QgaW1hZ2VQYXN0ZUlkcyA9IGltYWdlQ29udGVudHMubWFwKGltZyA9PiBpbWcuaWQpXG5cbiAgLy8gU3RvcmUgaW1hZ2VzIHRvIGRpc2sgc28gQ2xhdWRlIGNhbiByZWZlcmVuY2UgdGhlIHBhdGggaW4gY29udGV4dFxuICAvLyAoZm9yIG1hbmlwdWxhdGlvbiB3aXRoIENMSSB0b29scywgdXBsb2FkaW5nIHRvIFBScywgZXRjLilcbiAgY29uc3Qgc3RvcmVkSW1hZ2VQYXRocyA9IHBhc3RlZENvbnRlbnRzXG4gICAgPyBhd2FpdCBzdG9yZUltYWdlcyhwYXN0ZWRDb250ZW50cylcbiAgICA6IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KClcblxuICAvLyBSZXNpemUgcGFzdGVkIGltYWdlcyB0byBlbnN1cmUgdGhleSBmaXQgd2l0aGluIEFQSSBsaW1pdHMgKHBhcmFsbGVsIHByb2Nlc3NpbmcpXG4gIHF1ZXJ5Q2hlY2twb2ludCgncXVlcnlfcGFzdGVkX2ltYWdlX3Byb2Nlc3Npbmdfc3RhcnQnKVxuICBjb25zdCBpbWFnZVByb2Nlc3NpbmdSZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgaW1hZ2VDb250ZW50cy5tYXAoYXN5bmMgcGFzdGVkSW1hZ2UgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VCbG9jazogSW1hZ2VCbG9ja1BhcmFtID0ge1xuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiAnYmFzZTY0JyxcbiAgICAgICAgICBtZWRpYV90eXBlOiAocGFzdGVkSW1hZ2UubWVkaWFUeXBlIHx8XG4gICAgICAgICAgICAnaW1hZ2UvcG5nJykgYXMgQmFzZTY0SW1hZ2VTb3VyY2VbJ21lZGlhX3R5cGUnXSxcbiAgICAgICAgICBkYXRhOiBwYXN0ZWRJbWFnZS5jb250ZW50LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Bhc3RlZF9pbWFnZV9yZXNpemVfYXR0ZW1wdCcsIHtcbiAgICAgICAgb3JpZ2luYWxfc2l6ZV9ieXRlczogcGFzdGVkSW1hZ2UuY29udGVudC5sZW5ndGgsXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVzaXplZCA9IGF3YWl0IG1heWJlUmVzaXplQW5kRG93bnNhbXBsZUltYWdlQmxvY2soaW1hZ2VCbG9jaylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc2l6ZWQsXG4gICAgICAgIG9yaWdpbmFsRGltZW5zaW9uczogcGFzdGVkSW1hZ2UuZGltZW5zaW9ucyxcbiAgICAgICAgc291cmNlUGF0aDpcbiAgICAgICAgICBwYXN0ZWRJbWFnZS5zb3VyY2VQYXRoID8/IHN0b3JlZEltYWdlUGF0aHMuZ2V0KHBhc3RlZEltYWdlLmlkKSxcbiAgICAgIH1cbiAgICB9KSxcbiAgKVxuICAvLyBDb2xsZWN0IHJlc3VsdHMgcHJlc2VydmluZyBvcmRlclxuICBjb25zdCBpbWFnZUNvbnRlbnRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10gPSBbXVxuICBmb3IgKGNvbnN0IHtcbiAgICByZXNpemVkLFxuICAgIG9yaWdpbmFsRGltZW5zaW9ucyxcbiAgICBzb3VyY2VQYXRoLFxuICB9IG9mIGltYWdlUHJvY2Vzc2luZ1Jlc3VsdHMpIHtcbiAgICAvLyBDb2xsZWN0IGltYWdlIG1ldGFkYXRhIGZvciBpc01ldGEgbWVzc2FnZSAocHJlZmVyIHJlc2l6ZWQgZGltZW5zaW9ucylcbiAgICBpZiAocmVzaXplZC5kaW1lbnNpb25zKSB7XG4gICAgICBjb25zdCBtZXRhZGF0YVRleHQgPSBjcmVhdGVJbWFnZU1ldGFkYXRhVGV4dChcbiAgICAgICAgcmVzaXplZC5kaW1lbnNpb25zLFxuICAgICAgICBzb3VyY2VQYXRoLFxuICAgICAgKVxuICAgICAgaWYgKG1ldGFkYXRhVGV4dCkge1xuICAgICAgICBpbWFnZU1ldGFkYXRhVGV4dHMucHVzaChtZXRhZGF0YVRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERpbWVuc2lvbnMpIHtcbiAgICAgIC8vIEZhbGwgYmFjayB0byBvcmlnaW5hbCBkaW1lbnNpb25zIGlmIHJlc2l6ZSBkaWRuJ3QgcHJvdmlkZSB0aGVtXG4gICAgICBjb25zdCBtZXRhZGF0YVRleHQgPSBjcmVhdGVJbWFnZU1ldGFkYXRhVGV4dChcbiAgICAgICAgb3JpZ2luYWxEaW1lbnNpb25zLFxuICAgICAgICBzb3VyY2VQYXRoLFxuICAgICAgKVxuICAgICAgaWYgKG1ldGFkYXRhVGV4dCkge1xuICAgICAgICBpbWFnZU1ldGFkYXRhVGV4dHMucHVzaChtZXRhZGF0YVRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzb3VyY2VQYXRoKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgc291cmNlIHBhdGggYnV0IG5vIGRpbWVuc2lvbnMsIHN0aWxsIGFkZCBzb3VyY2UgaW5mb1xuICAgICAgaW1hZ2VNZXRhZGF0YVRleHRzLnB1c2goYFtJbWFnZSBzb3VyY2U6ICR7c291cmNlUGF0aH1dYClcbiAgICB9XG4gICAgaW1hZ2VDb250ZW50QmxvY2tzLnB1c2gocmVzaXplZC5ibG9jaylcbiAgfVxuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X3Bhc3RlZF9pbWFnZV9wcm9jZXNzaW5nX2VuZCcpXG5cbiAgLy8gQnJpZGdlLXNhZmUgc2xhc2ggY29tbWFuZCBvdmVycmlkZTogbW9iaWxlL3dlYiBjbGllbnRzIHNldCBicmlkZ2VPcmlnaW5cbiAgLy8gd2l0aCBza2lwU2xhc2hDb21tYW5kcyBzdGlsbCB0cnVlIChkZWZlbnNlLWluLWRlcHRoIGFnYWluc3QgZXhpdCB3b3JkcyBhbmRcbiAgLy8gaW1tZWRpYXRlLWNvbW1hbmQgZmFzdCBwYXRocykuIFJlc29sdmUgdGhlIGNvbW1hbmQgaGVyZSBcdTIwMTQgaWYgaXQgcGFzc2VzXG4gIC8vIGlzQnJpZGdlU2FmZUNvbW1hbmQsIGNsZWFyIHRoZSBza2lwIHNvIHRoZSBnYXRlIGJlbG93IG9wZW5zLiBJZiBpdCdzIGFcbiAgLy8ga25vd24tYnV0LXVuc2FmZSBjb21tYW5kIChsb2NhbC1qc3ggVUkgb3IgdGVybWluYWwtb25seSksIHNob3J0LWNpcmN1aXRcbiAgLy8gd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSByYXRoZXIgdGhhbiBsZXR0aW5nIHRoZSBtb2RlbCBzZWUgcmF3IFwiL2NvbmZpZ1wiLlxuICBsZXQgZWZmZWN0aXZlU2tpcFNsYXNoID0gc2tpcFNsYXNoQ29tbWFuZHNcbiAgaWYgKGJyaWRnZU9yaWdpbiAmJiBpbnB1dFN0cmluZyAhPT0gbnVsbCAmJiBpbnB1dFN0cmluZy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVNsYXNoQ29tbWFuZChpbnB1dFN0cmluZylcbiAgICBjb25zdCBjbWQgPSBwYXJzZWRcbiAgICAgID8gZmluZENvbW1hbmQocGFyc2VkLmNvbW1hbmROYW1lLCBjb250ZXh0Lm9wdGlvbnMuY29tbWFuZHMpXG4gICAgICA6IHVuZGVmaW5lZFxuICAgIGlmIChjbWQpIHtcbiAgICAgIGlmIChpc0JyaWRnZVNhZmVDb21tYW5kKGNtZCkpIHtcbiAgICAgICAgZWZmZWN0aXZlU2tpcFNsYXNoID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGAvJHtnZXRDb21tYW5kTmFtZShjbWQpfSBpc24ndCBhdmFpbGFibGUgb3ZlciBSZW1vdGUgQ29udHJvbC5gXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHsgY29udGVudDogaW5wdXRTdHJpbmcsIHV1aWQgfSksXG4gICAgICAgICAgICBjcmVhdGVDb21tYW5kSW5wdXRNZXNzYWdlKFxuICAgICAgICAgICAgICBgPGxvY2FsLWNvbW1hbmQtc3Rkb3V0PiR7bXNnfTwvbG9jYWwtY29tbWFuZC1zdGRvdXQ+YCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgICAgcmVzdWx0VGV4dDogbXNnLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFVua25vd24gL2ZvbyBvciB1bnBhcnNlYWJsZSBcdTIwMTQgZmFsbCB0aHJvdWdoIHRvIHBsYWluIHRleHQsIHNhbWUgYXNcbiAgICAvLyBwcmUtIzE5MTM0LiBBIG1vYmlsZSB1c2VyIHR5cGluZyBcIi9zaHJ1Z1wiIHNob3VsZG4ndCBzZWUgXCJVbmtub3duIHNraWxsXCIuXG4gIH1cblxuICAvLyBVbHRyYXBsYW4ga2V5d29yZCBcdTIwMTQgcm91dGUgdGhyb3VnaCAvdWx0cmFwbGFuLiBEZXRlY3Qgb24gdGhlXG4gIC8vIHByZS1leHBhbnNpb24gaW5wdXQgc28gcGFzdGVkIGNvbnRlbnQgY29udGFpbmluZyB0aGUgd29yZCBjYW5ub3RcbiAgLy8gdHJpZ2dlciBhIENDUiBzZXNzaW9uOyByZXBsYWNlIHdpdGggXCJwbGFuXCIgaW4gdGhlIGV4cGFuZGVkIGlucHV0IHNvXG4gIC8vIHRoZSBDQ1IgcHJvbXB0IHJlY2VpdmVzIHBhc3RlIGNvbnRlbnRzIGFuZCBzdGF5cyBncmFtbWF0aWNhbC4gU2VlXG4gIC8vIGtleXdvcmQudHMgZm9yIHRoZSBxdW90ZS9wYXRoIGV4Y2x1c2lvbnMuIEludGVyYWN0aXZlIHByb21wdCBtb2RlICtcbiAgLy8gbm9uLXNsYXNoLXByZWZpeGVkIG9ubHk6XG4gIC8vIGhlYWRsZXNzL3ByaW50IG1vZGUgZmlsdGVycyBsb2NhbC1qc3ggY29tbWFuZHMgb3V0IG9mIGNvbnRleHQub3B0aW9ucyxcbiAgLy8gc28gcm91dGluZyB0byAvdWx0cmFwbGFuIHRoZXJlIHlpZWxkcyBcIlVua25vd24gc2tpbGxcIiBcdTIwMTQgYW5kIHRoZXJlJ3Mgbm9cbiAgLy8gcmFpbmJvdyBhbmltYXRpb24gaW4gcHJpbnQgbW9kZSBhbnl3YXkuXG4gIC8vIFJ1bnMgYmVmb3JlIGF0dGFjaG1lbnQgZXh0cmFjdGlvbiBzbyB0aGlzIHBhdGggbWF0Y2hlcyB0aGUgc2xhc2gtY29tbWFuZFxuICAvLyBwYXRoIGJlbG93IChubyBhd2FpdCBiZXR3ZWVuIHNldFVzZXJJbnB1dE9uUHJvY2Vzc2luZyBhbmQgc2V0QXBwU3RhdGUgXHUyMDE0XG4gIC8vIFJlYWN0IGJhdGNoZXMgYm90aCBpbnRvIG9uZSByZW5kZXIsIG5vIGZsYXNoKS5cbiAgaWYgKFxuICAgIGZlYXR1cmUoJ1VMVFJBUExBTicpICYmXG4gICAgbW9kZSA9PT0gJ3Byb21wdCcgJiZcbiAgICAhY29udGV4dC5vcHRpb25zLmlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uICYmXG4gICAgaW5wdXRTdHJpbmcgIT09IG51bGwgJiZcbiAgICAhZWZmZWN0aXZlU2tpcFNsYXNoICYmXG4gICAgIWlucHV0U3RyaW5nLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICFjb250ZXh0LmdldEFwcFN0YXRlKCkudWx0cmFwbGFuU2Vzc2lvblVybCAmJlxuICAgICFjb250ZXh0LmdldEFwcFN0YXRlKCkudWx0cmFwbGFuTGF1bmNoaW5nICYmXG4gICAgaGFzVWx0cmFwbGFuS2V5d29yZChwcmVFeHBhbnNpb25JbnB1dCA/PyBpbnB1dFN0cmluZylcbiAgKSB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3VsdHJhcGxhbl9rZXl3b3JkJywge30pXG4gICAgY29uc3QgcmV3cml0dGVuID0gcmVwbGFjZVVsdHJhcGxhbktleXdvcmQoaW5wdXRTdHJpbmcpLnRyaW0oKVxuICAgIGNvbnN0IHsgcHJvY2Vzc1NsYXNoQ29tbWFuZCB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb2Nlc3NTbGFzaENvbW1hbmQuanMnKVxuICAgIGNvbnN0IHNsYXNoUmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1NsYXNoQ29tbWFuZChcbiAgICAgIGAvdWx0cmFwbGFuICR7cmV3cml0dGVufWAsXG4gICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgIGltYWdlQ29udGVudEJsb2NrcyxcbiAgICAgIFtdLFxuICAgICAgY29udGV4dCxcbiAgICAgIHNldFRvb2xKU1gsXG4gICAgICB1dWlkLFxuICAgICAgaXNBbHJlYWR5UHJvY2Vzc2luZyxcbiAgICAgIGNhblVzZVRvb2wsXG4gICAgKVxuICAgIHJldHVybiBhZGRJbWFnZU1ldGFkYXRhTWVzc2FnZShzbGFzaFJlc3VsdCwgaW1hZ2VNZXRhZGF0YVRleHRzKVxuICB9XG5cbiAgLy8gRm9yIHNsYXNoIGNvbW1hbmRzLCBhdHRhY2htZW50cyB3aWxsIGJlIGV4dHJhY3RlZCB3aXRoaW4gZ2V0TWVzc2FnZXNGb3JTbGFzaENvbW1hbmRcbiAgY29uc3Qgc2hvdWxkRXh0cmFjdEF0dGFjaG1lbnRzID1cbiAgICAhc2tpcEF0dGFjaG1lbnRzICYmXG4gICAgaW5wdXRTdHJpbmcgIT09IG51bGwgJiZcbiAgICAobW9kZSAhPT0gJ3Byb21wdCcgfHwgZWZmZWN0aXZlU2tpcFNsYXNoIHx8ICFpbnB1dFN0cmluZy5zdGFydHNXaXRoKCcvJykpXG5cbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9hdHRhY2htZW50X2xvYWRpbmdfc3RhcnQnKVxuICBjb25zdCBhdHRhY2htZW50TWVzc2FnZXMgPSBzaG91bGRFeHRyYWN0QXR0YWNobWVudHNcbiAgICA/IGF3YWl0IHRvQXJyYXkoXG4gICAgICAgIGdldEF0dGFjaG1lbnRNZXNzYWdlcyhcbiAgICAgICAgICBpbnB1dFN0cmluZyxcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGlkZVNlbGVjdGlvbiA/PyBudWxsLFxuICAgICAgICAgIFtdLCAvLyBxdWV1ZWRDb21tYW5kcyAtIGhhbmRsZWQgYnkgcXVlcnkudHMgZm9yIG1pZC10dXJuIGF0dGFjaG1lbnRzXG4gICAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgICAgcXVlcnlTb3VyY2UsXG4gICAgICAgICksXG4gICAgICApXG4gICAgOiBbXVxuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X2F0dGFjaG1lbnRfbG9hZGluZ19lbmQnKVxuXG4gIC8vIEJhc2ggY29tbWFuZHNcbiAgaWYgKGlucHV0U3RyaW5nICE9PSBudWxsICYmIG1vZGUgPT09ICdiYXNoJykge1xuICAgIGNvbnN0IHsgcHJvY2Vzc0Jhc2hDb21tYW5kIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvY2Vzc0Jhc2hDb21tYW5kLmpzJylcbiAgICByZXR1cm4gYWRkSW1hZ2VNZXRhZGF0YU1lc3NhZ2UoXG4gICAgICBhd2FpdCBwcm9jZXNzQmFzaENvbW1hbmQoXG4gICAgICAgIGlucHV0U3RyaW5nLFxuICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzZXRUb29sSlNYLFxuICAgICAgKSxcbiAgICAgIGltYWdlTWV0YWRhdGFUZXh0cyxcbiAgICApXG4gIH1cblxuICAvLyBTbGFzaCBjb21tYW5kc1xuICAvLyBTa2lwIGZvciByZW1vdGUgYnJpZGdlIG1lc3NhZ2VzIFx1MjAxNCBpbnB1dCBmcm9tIENDUiBjbGllbnRzIGlzIHBsYWluIHRleHRcbiAgaWYgKFxuICAgIGlucHV0U3RyaW5nICE9PSBudWxsICYmXG4gICAgIWVmZmVjdGl2ZVNraXBTbGFzaCAmJlxuICAgIGlucHV0U3RyaW5nLnN0YXJ0c1dpdGgoJy8nKVxuICApIHtcbiAgICBjb25zdCB7IHByb2Nlc3NTbGFzaENvbW1hbmQgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm9jZXNzU2xhc2hDb21tYW5kLmpzJylcbiAgICBjb25zdCBzbGFzaFJlc3VsdCA9IGF3YWl0IHByb2Nlc3NTbGFzaENvbW1hbmQoXG4gICAgICBpbnB1dFN0cmluZyxcbiAgICAgIHByZWNlZGluZ0lucHV0QmxvY2tzLFxuICAgICAgaW1hZ2VDb250ZW50QmxvY2tzLFxuICAgICAgYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgICAgY29udGV4dCxcbiAgICAgIHNldFRvb2xKU1gsXG4gICAgICB1dWlkLFxuICAgICAgaXNBbHJlYWR5UHJvY2Vzc2luZyxcbiAgICAgIGNhblVzZVRvb2wsXG4gICAgKVxuICAgIHJldHVybiBhZGRJbWFnZU1ldGFkYXRhTWVzc2FnZShzbGFzaFJlc3VsdCwgaW1hZ2VNZXRhZGF0YVRleHRzKVxuICB9XG5cbiAgLy8gTG9nIGFnZW50IG1lbnRpb24gcXVlcmllcyBmb3IgYW5hbHlzaXNcbiAgaWYgKGlucHV0U3RyaW5nICE9PSBudWxsICYmIG1vZGUgPT09ICdwcm9tcHQnKSB7XG4gICAgY29uc3QgdHJpbW1lZElucHV0ID0gaW5wdXRTdHJpbmcudHJpbSgpXG5cbiAgICBjb25zdCBhZ2VudE1lbnRpb24gPSBhdHRhY2htZW50TWVzc2FnZXMuZmluZChcbiAgICAgIChtKTogbSBpcyBBdHRhY2htZW50TWVzc2FnZTxBZ2VudE1lbnRpb25BdHRhY2htZW50PiA9PlxuICAgICAgICBtLmF0dGFjaG1lbnQudHlwZSA9PT0gJ2FnZW50X21lbnRpb24nLFxuICAgIClcblxuICAgIGlmIChhZ2VudE1lbnRpb24pIHtcbiAgICAgIGNvbnN0IGFnZW50TWVudGlvblN0cmluZyA9IGBAYWdlbnQtJHthZ2VudE1lbnRpb24uYXR0YWNobWVudC5hZ2VudFR5cGV9YFxuICAgICAgY29uc3QgaXNTdWJhZ2VudE9ubHkgPSB0cmltbWVkSW5wdXQgPT09IGFnZW50TWVudGlvblN0cmluZ1xuICAgICAgY29uc3QgaXNQcmVmaXggPVxuICAgICAgICB0cmltbWVkSW5wdXQuc3RhcnRzV2l0aChhZ2VudE1lbnRpb25TdHJpbmcpICYmICFpc1N1YmFnZW50T25seVxuXG4gICAgICAvLyBMb2cgd2hlbmV2ZXIgdXNlcnMgdXNlIEBhZ2VudC08bmFtZT4gc3ludGF4XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc3ViYWdlbnRfYXRfbWVudGlvbicsIHtcbiAgICAgICAgaXNfc3ViYWdlbnRfb25seTogaXNTdWJhZ2VudE9ubHksXG4gICAgICAgIGlzX3ByZWZpeDogaXNQcmVmaXgsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZ3VsYXIgdXNlciBwcm9tcHRcbiAgcmV0dXJuIGFkZEltYWdlTWV0YWRhdGFNZXNzYWdlKFxuICAgIHByb2Nlc3NUZXh0UHJvbXB0KFxuICAgICAgbm9ybWFsaXplZElucHV0LFxuICAgICAgaW1hZ2VDb250ZW50QmxvY2tzLFxuICAgICAgaW1hZ2VQYXN0ZUlkcyxcbiAgICAgIGF0dGFjaG1lbnRNZXNzYWdlcyxcbiAgICAgIHV1aWQsXG4gICAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICAgIGlzTWV0YSxcbiAgICApLFxuICAgIGltYWdlTWV0YWRhdGFUZXh0cyxcbiAgKVxufVxuXG4vLyBBZGRzIGltYWdlIG1ldGFkYXRhIHRleHRzIGFzIGlzTWV0YSBtZXNzYWdlIHRvIHJlc3VsdFxuZnVuY3Rpb24gYWRkSW1hZ2VNZXRhZGF0YU1lc3NhZ2UoXG4gIHJlc3VsdDogUHJvY2Vzc1VzZXJJbnB1dEJhc2VSZXN1bHQsXG4gIGltYWdlTWV0YWRhdGFUZXh0czogc3RyaW5nW10sXG4pOiBQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdCB7XG4gIGlmIChpbWFnZU1ldGFkYXRhVGV4dHMubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKFxuICAgICAgY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgICBjb250ZW50OiBpbWFnZU1ldGFkYXRhVGV4dHMubWFwKHRleHQgPT4gKHsgdHlwZTogJ3RleHQnLCB0ZXh0IH0pKSxcbiAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgfSksXG4gICAgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENvbnRlbnRCbG9ja1BhcmFtIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHNldFByb21wdElkIH0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXR0YWNobWVudE1lc3NhZ2UsXG4gIFN5c3RlbU1lc3NhZ2UsXG4gIFVzZXJNZXNzYWdlLFxufSBmcm9tICdzcmMvdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uTW9kZSB9IGZyb20gJy4uLy4uL3R5cGVzL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHsgY3JlYXRlVXNlck1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlcy5qcydcbmltcG9ydCB7IGxvZ09UZWxFdmVudCwgcmVkYWN0SWZEaXNhYmxlZCB9IGZyb20gJy4uL3RlbGVtZXRyeS9ldmVudHMuanMnXG5pbXBvcnQgeyBzdGFydEludGVyYWN0aW9uU3BhbiB9IGZyb20gJy4uL3RlbGVtZXRyeS9zZXNzaW9uVHJhY2luZy5qcydcbmltcG9ydCB7XG4gIG1hdGNoZXNLZWVwR29pbmdLZXl3b3JkLFxuICBtYXRjaGVzTmVnYXRpdmVLZXl3b3JkLFxufSBmcm9tICcuLi91c2VyUHJvbXB0S2V5d29yZHMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzVGV4dFByb21wdChcbiAgaW5wdXQ6IHN0cmluZyB8IEFycmF5PENvbnRlbnRCbG9ja1BhcmFtPixcbiAgaW1hZ2VDb250ZW50QmxvY2tzOiBDb250ZW50QmxvY2tQYXJhbVtdLFxuICBpbWFnZVBhc3RlSWRzOiBudW1iZXJbXSxcbiAgYXR0YWNobWVudE1lc3NhZ2VzOiBBdHRhY2htZW50TWVzc2FnZVtdLFxuICB1dWlkPzogc3RyaW5nLFxuICBwZXJtaXNzaW9uTW9kZT86IFBlcm1pc3Npb25Nb2RlLFxuICBpc01ldGE/OiBib29sZWFuLFxuKToge1xuICBtZXNzYWdlczogKFVzZXJNZXNzYWdlIHwgQXR0YWNobWVudE1lc3NhZ2UgfCBTeXN0ZW1NZXNzYWdlKVtdXG4gIHNob3VsZFF1ZXJ5OiBib29sZWFuXG59IHtcbiAgY29uc3QgcHJvbXB0SWQgPSByYW5kb21VVUlEKClcbiAgc2V0UHJvbXB0SWQocHJvbXB0SWQpXG5cbiAgY29uc3QgdXNlclByb21wdFRleHQgPVxuICAgIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZydcbiAgICAgID8gaW5wdXRcbiAgICAgIDogaW5wdXQuZmluZChibG9jayA9PiBibG9jay50eXBlID09PSAndGV4dCcpPy50ZXh0IHx8ICcnXG4gIHN0YXJ0SW50ZXJhY3Rpb25TcGFuKHVzZXJQcm9tcHRUZXh0KVxuXG4gIC8vIEVtaXQgdXNlcl9wcm9tcHQgT1RFTCBldmVudCBmb3IgYm90aCBzdHJpbmcgKENMSSkgYW5kIGFycmF5IChTREsvVlMgQ29kZSlcbiAgLy8gaW5wdXQgc2hhcGVzLiBQcmV2aW91c2x5IGdhdGVkIG9uIGB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnYCwgc28gVlMgQ29kZVxuICAvLyBzZXNzaW9ucyBuZXZlciBlbWl0dGVkIHVzZXJfcHJvbXB0IChhbnRocm9waWNzL2NsYXVkZS1jb2RlIzMzMzAxKS5cbiAgLy8gRm9yIGFycmF5IGlucHV0LCB1c2UgdGhlIExBU1QgdGV4dCBibG9jazogY3JlYXRlVXNlckNvbnRlbnQgcHVzaGVzIHRoZVxuICAvLyB1c2VyJ3MgbWVzc2FnZSBsYXN0IChhZnRlciBhbnkgPGlkZV9zZWxlY3Rpb24+L2F0dGFjaG1lbnQgY29udGV4dCBibG9ja3MpLFxuICAvLyBzbyAuZmluZExhc3QgZ2V0cyB0aGUgYWN0dWFsIHByb21wdC4gdXNlclByb21wdFRleHQgKGZpcnN0IGJsb2NrKSBpcyBrZXB0XG4gIC8vIHVuY2hhbmdlZCBmb3Igc3RhcnRJbnRlcmFjdGlvblNwYW4gdG8gcHJlc2VydmUgZXhpc3Rpbmcgc3BhbiBhdHRyaWJ1dGVzLlxuICBjb25zdCBvdGVsUHJvbXB0VGV4dCA9XG4gICAgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJ1xuICAgICAgPyBpbnB1dFxuICAgICAgOiBpbnB1dC5maW5kTGFzdChibG9jayA9PiBibG9jay50eXBlID09PSAndGV4dCcpPy50ZXh0IHx8ICcnXG4gIGlmIChvdGVsUHJvbXB0VGV4dCkge1xuICAgIHZvaWQgbG9nT1RlbEV2ZW50KCd1c2VyX3Byb21wdCcsIHtcbiAgICAgIHByb21wdF9sZW5ndGg6IFN0cmluZyhvdGVsUHJvbXB0VGV4dC5sZW5ndGgpLFxuICAgICAgcHJvbXB0OiByZWRhY3RJZkRpc2FibGVkKG90ZWxQcm9tcHRUZXh0KSxcbiAgICAgICdwcm9tcHQuaWQnOiBwcm9tcHRJZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaXNOZWdhdGl2ZSA9IG1hdGNoZXNOZWdhdGl2ZUtleXdvcmQodXNlclByb21wdFRleHQpXG4gIGNvbnN0IGlzS2VlcEdvaW5nID0gbWF0Y2hlc0tlZXBHb2luZ0tleXdvcmQodXNlclByb21wdFRleHQpXG4gIGxvZ0V2ZW50KCd0ZW5ndV9pbnB1dF9wcm9tcHQnLCB7XG4gICAgaXNfbmVnYXRpdmU6IGlzTmVnYXRpdmUsXG4gICAgaXNfa2VlcF9nb2luZzogaXNLZWVwR29pbmcsXG4gIH0pXG5cbiAgLy8gSWYgd2UgaGF2ZSBwYXN0ZWQgaW1hZ2VzLCBjcmVhdGUgYSBtZXNzYWdlIHdpdGggaW1hZ2UgY29udGVudFxuICBpZiAoaW1hZ2VDb250ZW50QmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBCdWlsZCBjb250ZW50OiB0ZXh0IGZpcnN0LCB0aGVuIGltYWdlcyBiZWxvd1xuICAgIGNvbnN0IHRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBpbnB1dC50cmltKClcbiAgICAgICAgICA/IFt7IHR5cGU6ICd0ZXh0JyBhcyBjb25zdCwgdGV4dDogaW5wdXQgfV1cbiAgICAgICAgICA6IFtdXG4gICAgICAgIDogaW5wdXRcbiAgICBjb25zdCB1c2VyTWVzc2FnZSA9IGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgIGNvbnRlbnQ6IFsuLi50ZXh0Q29udGVudCwgLi4uaW1hZ2VDb250ZW50QmxvY2tzXSxcbiAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICBpbWFnZVBhc3RlSWRzOiBpbWFnZVBhc3RlSWRzLmxlbmd0aCA+IDAgPyBpbWFnZVBhc3RlSWRzIDogdW5kZWZpbmVkLFxuICAgICAgcGVybWlzc2lvbk1vZGUsXG4gICAgICBpc01ldGE6IGlzTWV0YSB8fCB1bmRlZmluZWQsXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogW3VzZXJNZXNzYWdlLCAuLi5hdHRhY2htZW50TWVzc2FnZXNdLFxuICAgICAgc2hvdWxkUXVlcnk6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXNlck1lc3NhZ2UgPSBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgY29udGVudDogaW5wdXQsXG4gICAgdXVpZCxcbiAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICBpc01ldGE6IGlzTWV0YSB8fCB1bmRlZmluZWQsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogW3VzZXJNZXNzYWdlLCAuLi5hdHRhY2htZW50TWVzc2FnZXNdLFxuICAgIHNob3VsZFF1ZXJ5OiB0cnVlLFxuICB9XG59XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgaW5wdXQgbWF0Y2hlcyBuZWdhdGl2ZSBrZXl3b3JkIHBhdHRlcm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzTmVnYXRpdmVLZXl3b3JkKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG93ZXJJbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKClcblxuICBjb25zdCBuZWdhdGl2ZVBhdHRlcm4gPVxuICAgIC9cXGIod3RmfHd0aHxmZnN8b21mZ3xzaGl0KHR5fHRpZXN0KT98ZHVtYmFzc3xob3JyaWJsZXxhd2Z1bHxwaXNzKGVkfGluZyk/IG9mZnxwaWVjZSBvZiAoc2hpdHxjcmFwfGp1bmspfHdoYXQgdGhlIChmdWNrfGhlbGwpfGZ1Y2tpbmc/IChicm9rZW58dXNlbGVzc3x0ZXJyaWJsZXxhd2Z1bHxob3JyaWJsZSl8ZnVjayB5b3V8c2NyZXcgKHRoaXN8eW91KXxzbyBmcnVzdHJhdGluZ3x0aGlzIHN1Y2tzfGRhbW4gaXQpXFxiL1xuXG4gIHJldHVybiBuZWdhdGl2ZVBhdHRlcm4udGVzdChsb3dlcklucHV0KVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBpbnB1dCBtYXRjaGVzIGtlZXAgZ29pbmcvY29udGludWF0aW9uIHBhdHRlcm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzS2VlcEdvaW5nS2V5d29yZChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvd2VySW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gIC8vIE1hdGNoIFwiY29udGludWVcIiBvbmx5IGlmIGl0J3MgdGhlIGVudGlyZSBwcm9tcHRcbiAgaWYgKGxvd2VySW5wdXQgPT09ICdjb250aW51ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gTWF0Y2ggXCJrZWVwIGdvaW5nXCIgb3IgXCJnbyBvblwiIGFueXdoZXJlIGluIHRoZSBpbnB1dFxuICBjb25zdCBrZWVwR29pbmdQYXR0ZXJuID0gL1xcYihrZWVwIGdvaW5nfGdvIG9uKVxcYi9cbiAgcmV0dXJuIGtlZXBHb2luZ1BhdHRlcm4udGVzdChsb3dlcklucHV0KVxufVxuIiwgIi8qKlxuICogTWFya2V0cGxhY2UgcmVjb25jaWxlciBcdTIwMTQgbWFrZXMga25vd25fbWFya2V0cGxhY2VzLmpzb24gY29uc2lzdGVudCB3aXRoXG4gKiBkZWNsYXJlZCBpbnRlbnQgaW4gc2V0dGluZ3MuXG4gKlxuICogVHdvIGxheWVyczpcbiAqIC0gZGlmZk1hcmtldHBsYWNlcygpOiBjb21wYXJpc29uIChyZWFkcyAuZ2l0IGZvciB3b3JrdHJlZSBjYW5vbmljYWxpemF0aW9uLCBtZW1vaXplZClcbiAqIC0gcmVjb25jaWxlTWFya2V0cGxhY2VzKCk6IGJ1bmRsZWQgZGlmZiArIGluc3RhbGwgKEkvTywgaWRlbXBvdGVudCwgYWRkaXRpdmUpXG4gKi9cblxuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLWVzL2lzRXF1YWwuanMnXG5pbXBvcnQgeyBpc0Fic29sdXRlLCByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldE9yaWdpbmFsQ3dkIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBwYXRoRXhpc3RzIH0gZnJvbSAnLi4vZmlsZS5qcydcbmltcG9ydCB7IGZpbmRDYW5vbmljYWxHaXRSb290IH0gZnJvbSAnLi4vZ2l0LmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi9sb2cuanMnXG5pbXBvcnQge1xuICBhZGRNYXJrZXRwbGFjZVNvdXJjZSxcbiAgdHlwZSBEZWNsYXJlZE1hcmtldHBsYWNlLFxuICBnZXREZWNsYXJlZE1hcmtldHBsYWNlcyxcbiAgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnLFxufSBmcm9tICcuL21hcmtldHBsYWNlTWFuYWdlci5qcydcbmltcG9ydCB7XG4gIGlzTG9jYWxNYXJrZXRwbGFjZVNvdXJjZSxcbiAgdHlwZSBLbm93bk1hcmtldHBsYWNlc0ZpbGUsXG4gIHR5cGUgTWFya2V0cGxhY2VTb3VyY2UsXG59IGZyb20gJy4vc2NoZW1hcy5qcydcblxuZXhwb3J0IHR5cGUgTWFya2V0cGxhY2VEaWZmID0ge1xuICAvKiogRGVjbGFyZWQgaW4gc2V0dGluZ3MsIGFic2VudCBmcm9tIGtub3duX21hcmtldHBsYWNlcy5qc29uICovXG4gIG1pc3Npbmc6IHN0cmluZ1tdXG4gIC8qKiBQcmVzZW50IGluIGJvdGgsIGJ1dCBzZXR0aW5ncyBzb3VyY2UgXHUyMjYwIEpTT04gc291cmNlIChzZXR0aW5ncyB3aW5zKSAqL1xuICBzb3VyY2VDaGFuZ2VkOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGVjbGFyZWRTb3VyY2U6IE1hcmtldHBsYWNlU291cmNlXG4gICAgbWF0ZXJpYWxpemVkU291cmNlOiBNYXJrZXRwbGFjZVNvdXJjZVxuICB9PlxuICAvKiogUHJlc2VudCBpbiBib3RoLCBzb3VyY2VzIG1hdGNoICovXG4gIHVwVG9EYXRlOiBzdHJpbmdbXVxufVxuXG4vKipcbiAqIENvbXBhcmUgZGVjbGFyZWQgaW50ZW50IChzZXR0aW5ncykgYWdhaW5zdCBtYXRlcmlhbGl6ZWQgc3RhdGUgKEpTT04pLlxuICpcbiAqIFJlc29sdmVzIHJlbGF0aXZlIGRpcmVjdG9yeS9maWxlIHBhdGhzIGluIGBkZWNsYXJlZGAgYmVmb3JlIGNvbXBhcmluZyxcbiAqIHNvIHByb2plY3Qgc2V0dGluZ3Mgd2l0aCBgLi9wYXRoYCBtYXRjaCBKU09OJ3MgYWJzb2x1dGUgcGF0aC4gUGF0aFxuICogcmVzb2x1dGlvbiByZWFkcyBgLmdpdGAgdG8gY2Fub25pY2FsaXplIHdvcmt0cmVlIHBhdGhzIChtZW1vaXplZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTWFya2V0cGxhY2VzKFxuICBkZWNsYXJlZDogUmVjb3JkPHN0cmluZywgRGVjbGFyZWRNYXJrZXRwbGFjZT4sXG4gIG1hdGVyaWFsaXplZDogS25vd25NYXJrZXRwbGFjZXNGaWxlLFxuICBvcHRzPzogeyBwcm9qZWN0Um9vdD86IHN0cmluZyB9LFxuKTogTWFya2V0cGxhY2VEaWZmIHtcbiAgY29uc3QgbWlzc2luZzogc3RyaW5nW10gPSBbXVxuICBjb25zdCBzb3VyY2VDaGFuZ2VkOiBNYXJrZXRwbGFjZURpZmZbJ3NvdXJjZUNoYW5nZWQnXSA9IFtdXG4gIGNvbnN0IHVwVG9EYXRlOiBzdHJpbmdbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBbbmFtZSwgaW50ZW50XSBvZiBPYmplY3QuZW50cmllcyhkZWNsYXJlZCkpIHtcbiAgICBjb25zdCBzdGF0ZSA9IG1hdGVyaWFsaXplZFtuYW1lXVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnRlbnQgPSBub3JtYWxpemVTb3VyY2UoaW50ZW50LnNvdXJjZSwgb3B0cz8ucHJvamVjdFJvb3QpXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBtaXNzaW5nLnB1c2gobmFtZSlcbiAgICB9IGVsc2UgaWYgKGludGVudC5zb3VyY2VJc0ZhbGxiYWNrKSB7XG4gICAgICAvLyBGYWxsYmFjazogcHJlc2VuY2Ugc3VmZmljZXMuIERvbid0IGNvbXBhcmUgc291cmNlcyBcdTIwMTQgdGhlIGRlY2xhcmVkIHNvdXJjZVxuICAgICAgLy8gaXMgb25seSBhIGRlZmF1bHQgZm9yIHRoZSBgbWlzc2luZ2AgYnJhbmNoLiBJZiBzZWVkL3ByaW9yLWluc3RhbGwvbWlycm9yXG4gICAgICAvLyBtYXRlcmlhbGl6ZWQgdGhpcyBtYXJrZXRwbGFjZSB1bmRlciBBTlkgc291cmNlLCBsZWF2ZSBpdCBhbG9uZS4gQ29tcGFyaW5nXG4gICAgICAvLyB3b3VsZCByZXBvcnQgc291cmNlQ2hhbmdlZCBcdTIxOTIgcmUtY2xvbmUgXHUyMTkyIHN0b21wIHRoZSBtYXRlcmlhbGl6ZWQgY29udGVudC5cbiAgICAgIHVwVG9EYXRlLnB1c2gobmFtZSlcbiAgICB9IGVsc2UgaWYgKCFpc0VxdWFsKG5vcm1hbGl6ZWRJbnRlbnQsIHN0YXRlLnNvdXJjZSkpIHtcbiAgICAgIHNvdXJjZUNoYW5nZWQucHVzaCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlY2xhcmVkU291cmNlOiBub3JtYWxpemVkSW50ZW50LFxuICAgICAgICBtYXRlcmlhbGl6ZWRTb3VyY2U6IHN0YXRlLnNvdXJjZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHVwVG9EYXRlLnB1c2gobmFtZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBtaXNzaW5nLCBzb3VyY2VDaGFuZ2VkLCB1cFRvRGF0ZSB9XG59XG5cbmV4cG9ydCB0eXBlIFJlY29uY2lsZU9wdGlvbnMgPSB7XG4gIC8qKiBTa2lwIGEgZGVjbGFyZWQgbWFya2V0cGxhY2UuIFVzZWQgYnkgemlwLWNhY2hlIG1vZGUgZm9yIHVuc3VwcG9ydGVkIHNvdXJjZSB0eXBlcy4gKi9cbiAgc2tpcD86IChuYW1lOiBzdHJpbmcsIHNvdXJjZTogTWFya2V0cGxhY2VTb3VyY2UpID0+IGJvb2xlYW5cbiAgb25Qcm9ncmVzcz86IChldmVudDogUmVjb25jaWxlUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZFxufVxuXG5leHBvcnQgdHlwZSBSZWNvbmNpbGVQcm9ncmVzc0V2ZW50ID1cbiAgfCB7XG4gICAgICB0eXBlOiAnaW5zdGFsbGluZydcbiAgICAgIG5hbWU6IHN0cmluZ1xuICAgICAgYWN0aW9uOiAnaW5zdGFsbCcgfCAndXBkYXRlJ1xuICAgICAgaW5kZXg6IG51bWJlclxuICAgICAgdG90YWw6IG51bWJlclxuICAgIH1cbiAgfCB7IHR5cGU6ICdpbnN0YWxsZWQnOyBuYW1lOiBzdHJpbmc7IGFscmVhZHlNYXRlcmlhbGl6ZWQ6IGJvb2xlYW4gfVxuICB8IHsgdHlwZTogJ2ZhaWxlZCc7IG5hbWU6IHN0cmluZzsgZXJyb3I6IHN0cmluZyB9XG5cbmV4cG9ydCB0eXBlIFJlY29uY2lsZVJlc3VsdCA9IHtcbiAgaW5zdGFsbGVkOiBzdHJpbmdbXVxuICB1cGRhdGVkOiBzdHJpbmdbXVxuICBmYWlsZWQ6IEFycmF5PHsgbmFtZTogc3RyaW5nOyBlcnJvcjogc3RyaW5nIH0+XG4gIHVwVG9EYXRlOiBzdHJpbmdbXVxuICBza2lwcGVkOiBzdHJpbmdbXVxufVxuXG4vKipcbiAqIE1ha2Uga25vd25fbWFya2V0cGxhY2VzLmpzb24gY29uc2lzdGVudCB3aXRoIGRlY2xhcmVkIGludGVudC5cbiAqIElkZW1wb3RlbnQuIEFkZGl0aXZlIG9ubHkgKG5ldmVyIGRlbGV0ZXMpLiBEb2VzIG5vdCB0b3VjaCBBcHBTdGF0ZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29uY2lsZU1hcmtldHBsYWNlcyhcbiAgb3B0cz86IFJlY29uY2lsZU9wdGlvbnMsXG4pOiBQcm9taXNlPFJlY29uY2lsZVJlc3VsdD4ge1xuICBjb25zdCBkZWNsYXJlZCA9IGdldERlY2xhcmVkTWFya2V0cGxhY2VzKClcbiAgaWYgKE9iamVjdC5rZXlzKGRlY2xhcmVkKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBpbnN0YWxsZWQ6IFtdLCB1cGRhdGVkOiBbXSwgZmFpbGVkOiBbXSwgdXBUb0RhdGU6IFtdLCBza2lwcGVkOiBbXSB9XG4gIH1cblxuICBsZXQgbWF0ZXJpYWxpemVkOiBLbm93bk1hcmtldHBsYWNlc0ZpbGVcbiAgdHJ5IHtcbiAgICBtYXRlcmlhbGl6ZWQgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nRXJyb3IoZSlcbiAgICBtYXRlcmlhbGl6ZWQgPSB7fVxuICB9XG5cbiAgY29uc3QgZGlmZiA9IGRpZmZNYXJrZXRwbGFjZXMoZGVjbGFyZWQsIG1hdGVyaWFsaXplZCwge1xuICAgIHByb2plY3RSb290OiBnZXRPcmlnaW5hbEN3ZCgpLFxuICB9KVxuXG4gIHR5cGUgV29ya0l0ZW0gPSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgc291cmNlOiBNYXJrZXRwbGFjZVNvdXJjZVxuICAgIGFjdGlvbjogJ2luc3RhbGwnIHwgJ3VwZGF0ZSdcbiAgfVxuICBjb25zdCB3b3JrOiBXb3JrSXRlbVtdID0gW1xuICAgIC4uLmRpZmYubWlzc2luZy5tYXAoXG4gICAgICAobmFtZSk6IFdvcmtJdGVtID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNvdXJjZTogbm9ybWFsaXplU291cmNlKGRlY2xhcmVkW25hbWVdIS5zb3VyY2UpLFxuICAgICAgICBhY3Rpb246ICdpbnN0YWxsJyxcbiAgICAgIH0pLFxuICAgICksXG4gICAgLi4uZGlmZi5zb3VyY2VDaGFuZ2VkLm1hcChcbiAgICAgICh7IG5hbWUsIGRlY2xhcmVkU291cmNlIH0pOiBXb3JrSXRlbSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzb3VyY2U6IGRlY2xhcmVkU291cmNlLFxuICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgfSksXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IHNraXBwZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgdG9Qcm9jZXNzOiBXb3JrSXRlbVtdID0gW11cbiAgZm9yIChjb25zdCBpdGVtIG9mIHdvcmspIHtcbiAgICBpZiAob3B0cz8uc2tpcD8uKGl0ZW0ubmFtZSwgaXRlbS5zb3VyY2UpKSB7XG4gICAgICBza2lwcGVkLnB1c2goaXRlbS5uYW1lKVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgLy8gRm9yIHNvdXJjZUNoYW5nZWQgbG9jYWwtcGF0aCBlbnRyaWVzLCBza2lwIGlmIHRoZSBkZWNsYXJlZCBwYXRoIGRvZXNuJ3RcbiAgICAvLyBleGlzdC4gR3VhcmRzIG11bHRpLWNoZWNrb3V0IHNjZW5hcmlvcyB3aGVyZSBub3JtYWxpemVTb3VyY2UgY2FuJ3RcbiAgICAvLyBjYW5vbmljYWxpemUgYW5kIHByb2R1Y2VzIGEgZGVhZCBwYXRoIFx1MjAxNCB0aGUgbWF0ZXJpYWxpemVkIGVudHJ5IG1heSBzdGlsbFxuICAgIC8vIGJlIHZhbGlkOyBhZGRNYXJrZXRwbGFjZVNvdXJjZSB3b3VsZCBmYWlsIGFueXdheSwgc28gc2tpcHBpbmcgYXZvaWRzIGFcbiAgICAvLyBub2lzeSBcImZhaWxlZFwiIGV2ZW50IGFuZCBwcmVzZXJ2ZXMgdGhlIHdvcmtpbmcgZW50cnkuIE1pc3NpbmcgZW50cmllc1xuICAgIC8vIGFyZSBOT1Qgc2tpcHBlZCAobm90aGluZyB0byBwcmVzZXJ2ZTsgdGhlIHVzZXIgc2hvdWxkIHNlZSB0aGUgZXJyb3IpLlxuICAgIGlmIChcbiAgICAgIGl0ZW0uYWN0aW9uID09PSAndXBkYXRlJyAmJlxuICAgICAgaXNMb2NhbE1hcmtldHBsYWNlU291cmNlKGl0ZW0uc291cmNlKSAmJlxuICAgICAgIShhd2FpdCBwYXRoRXhpc3RzKGl0ZW0uc291cmNlLnBhdGgpKVxuICAgICkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW3JlY29uY2lsZV0gJyR7aXRlbS5uYW1lfScgZGVjbGFyZWQgcGF0aCBkb2VzIG5vdCBleGlzdDsga2VlcGluZyBtYXRlcmlhbGl6ZWQgZW50cnlgLFxuICAgICAgKVxuICAgICAgc2tpcHBlZC5wdXNoKGl0ZW0ubmFtZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHRvUHJvY2Vzcy5wdXNoKGl0ZW0pXG4gIH1cblxuICBpZiAodG9Qcm9jZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnN0YWxsZWQ6IFtdLFxuICAgICAgdXBkYXRlZDogW10sXG4gICAgICBmYWlsZWQ6IFtdLFxuICAgICAgdXBUb0RhdGU6IGRpZmYudXBUb0RhdGUsXG4gICAgICBza2lwcGVkLFxuICAgIH1cbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW3JlY29uY2lsZV0gJHt0b1Byb2Nlc3MubGVuZ3RofSBtYXJrZXRwbGFjZShzKTogJHt0b1Byb2Nlc3MubWFwKHcgPT4gYCR7dy5uYW1lfSgke3cuYWN0aW9ufSlgKS5qb2luKCcsICcpfWAsXG4gIClcblxuICBjb25zdCBpbnN0YWxsZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgdXBkYXRlZDogc3RyaW5nW10gPSBbXVxuICBjb25zdCBmYWlsZWQ6IFJlY29uY2lsZVJlc3VsdFsnZmFpbGVkJ10gPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Qcm9jZXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyBuYW1lLCBzb3VyY2UsIGFjdGlvbiB9ID0gdG9Qcm9jZXNzW2ldIVxuICAgIG9wdHM/Lm9uUHJvZ3Jlc3M/Lih7XG4gICAgICB0eXBlOiAnaW5zdGFsbGluZycsXG4gICAgICBuYW1lLFxuICAgICAgYWN0aW9uLFxuICAgICAgaW5kZXg6IGkgKyAxLFxuICAgICAgdG90YWw6IHRvUHJvY2Vzcy5sZW5ndGgsXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICAvLyBhZGRNYXJrZXRwbGFjZVNvdXJjZSBpcyBzb3VyY2UtaWRlbXBvdGVudCBcdTIwMTQgc2FtZSBzb3VyY2UgcmV0dXJuc1xuICAgICAgLy8gYWxyZWFkeU1hdGVyaWFsaXplZDp0cnVlIHdpdGhvdXQgY2xvbmluZy4gRm9yICd1cGRhdGUnIChzb3VyY2VcbiAgICAgIC8vIGNoYW5nZWQpLCB0aGUgbmV3IHNvdXJjZSB3b24ndCBtYXRjaCBleGlzdGluZyBcdTIxOTIgcHJvY2VlZHMgd2l0aCBjbG9uZVxuICAgICAgLy8gYW5kIG92ZXJ3cml0ZXMgdGhlIG9sZCBKU09OIGVudHJ5LlxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWRkTWFya2V0cGxhY2VTb3VyY2Uoc291cmNlKVxuXG4gICAgICBpZiAoYWN0aW9uID09PSAnaW5zdGFsbCcpIGluc3RhbGxlZC5wdXNoKG5hbWUpXG4gICAgICBlbHNlIHVwZGF0ZWQucHVzaChuYW1lKVxuICAgICAgb3B0cz8ub25Qcm9ncmVzcz8uKHtcbiAgICAgICAgdHlwZTogJ2luc3RhbGxlZCcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFscmVhZHlNYXRlcmlhbGl6ZWQ6IHJlc3VsdC5hbHJlYWR5TWF0ZXJpYWxpemVkLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGVycm9yTWVzc2FnZShlKVxuICAgICAgZmFpbGVkLnB1c2goeyBuYW1lLCBlcnJvciB9KVxuICAgICAgb3B0cz8ub25Qcm9ncmVzcz8uKHsgdHlwZTogJ2ZhaWxlZCcsIG5hbWUsIGVycm9yIH0pXG4gICAgICBsb2dFcnJvcihlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluc3RhbGxlZCwgdXBkYXRlZCwgZmFpbGVkLCB1cFRvRGF0ZTogZGlmZi51cFRvRGF0ZSwgc2tpcHBlZCB9XG59XG5cbi8qKlxuICogUmVzb2x2ZSByZWxhdGl2ZSBkaXJlY3RvcnkvZmlsZSBwYXRocyBmb3Igc3RhYmxlIGNvbXBhcmlzb24uXG4gKiBTZXR0aW5ncyBkZWNsYXJlZCBhdCBwcm9qZWN0IHNjb3BlIG1heSB1c2UgcHJvamVjdC1yZWxhdGl2ZSBwYXRocztcbiAqIEpTT04gc3RvcmVzIGFic29sdXRlIHBhdGhzLlxuICpcbiAqIEZvciBnaXQgd29ya3RyZWVzLCByZXNvbHZlIGFnYWluc3QgdGhlIG1haW4gY2hlY2tvdXQgKGNhbm9uaWNhbCByb290KVxuICogaW5zdGVhZCBvZiB0aGUgd29ya3RyZWUgY3dkLiBQcm9qZWN0IHNldHRpbmdzIGFyZSBjaGVja2VkIGludG8gZ2l0LFxuICogc28gYC4vZm9vYCBtZWFucyBcInJlbGF0aXZlIHRvIHRoaXMgcmVwb1wiIFx1MjAxNCBidXQga25vd25fbWFya2V0cGxhY2VzLmpzb24gaXNcbiAqIHVzZXItZ2xvYmFsIHdpdGggb25lIGVudHJ5IHBlciBtYXJrZXRwbGFjZSBuYW1lLiBSZXNvbHZpbmcgYWdhaW5zdCB0aGVcbiAqIHdvcmt0cmVlIGN3ZCBtZWFucyBlYWNoIHdvcmt0cmVlIHNlc3Npb24gb3ZlcndyaXRlcyB0aGUgc2hhcmVkIGVudHJ5IHdpdGhcbiAqIGl0cyBvd24gYWJzb2x1dGUgcGF0aCwgYW5kIGRlbGV0aW5nIHRoZSB3b3JrdHJlZSBsZWF2ZXMgYSBkZWFkXG4gKiBpbnN0YWxsTG9jYXRpb24uIFRoZSBjYW5vbmljYWwgcm9vdCBpcyBzdGFibGUgYWNyb3NzIGFsbCB3b3JrdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNvdXJjZShcbiAgc291cmNlOiBNYXJrZXRwbGFjZVNvdXJjZSxcbiAgcHJvamVjdFJvb3Q/OiBzdHJpbmcsXG4pOiBNYXJrZXRwbGFjZVNvdXJjZSB7XG4gIGlmIChcbiAgICAoc291cmNlLnNvdXJjZSA9PT0gJ2RpcmVjdG9yeScgfHwgc291cmNlLnNvdXJjZSA9PT0gJ2ZpbGUnKSAmJlxuICAgICFpc0Fic29sdXRlKHNvdXJjZS5wYXRoKVxuICApIHtcbiAgICBjb25zdCBiYXNlID0gcHJvamVjdFJvb3QgPz8gZ2V0T3JpZ2luYWxDd2QoKVxuICAgIGNvbnN0IGNhbm9uaWNhbFJvb3QgPSBmaW5kQ2Fub25pY2FsR2l0Um9vdChiYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zb3VyY2UsXG4gICAgICBwYXRoOiByZXNvbHZlKGNhbm9uaWNhbFJvb3QgPz8gYmFzZSwgc291cmNlLnBhdGgpLFxuICAgIH1cbiAgfVxuICByZXR1cm4gc291cmNlXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxTQUFTQSxrQkFBNkI7QUF1Q3RDLFlBQVlDLFVBQVU7QUFKdEIsU0FBU0MsWUFBWUMsT0FBbUQ7QUFDdEUsU0FBT0EsTUFBTUMsU0FBUztBQUN4QjtBQTZCQSxTQUFTQyxrQkFDUEMsUUFDMkM7QUFDM0MsU0FBT0EsV0FBVyxlQUFlQSxXQUFXO0FBQzlDO0FBbUJPLFNBQVNDLGdCQUFnQjtFQUM5QkM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7QUFDSyxHQUFvQjtBQUN6QixRQUFNQyxjQUFjQyxZQUFZQyxPQUFLQSxFQUFFRixXQUFXO0FBQ2xELFFBQU0sQ0FBQ0csT0FBT0MsUUFBUSxJQUFJQyxTQUE2QkMsTUFBUztBQUNoRSxRQUFNQyx1QkFBdUJDLG1CQUFtQjtB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V0FBVyxXQUNwRCxDQUFDLFdBQVcsT0FBTyxJQUFJLEdBQ3ZCO0FBQ0EsVUFBTSxPQUFPLGVBQWUsZUFBZTtBQUMzQyxVQUFNLGdCQUFnQixxQkFBcUIsSUFBSTtBQUMvQyxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxNQUFNLFFBQVEsaUJBQWlCLE1BQU0sT0FBTyxJQUFJO0FBQUEsSUFDbEQ7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOyIsCiAgIm5hbWVzIjogWyJyYW5kb21VVUlEIiwgInBhdGgiLCAiaXNUZXh0QmxvY2siLCAiYmxvY2siLCAidHlwZSIsICJpc1N1bW1hcml6ZU9wdGlvbiIsICJvcHRpb24iLCAiTWVzc2FnZVNlbGVjdG9yIiwgIm1lc3NhZ2VzIiwgIm9uUHJlUmVzdG9yZSIsICJvblJlc3RvcmVNZXNzYWdlIiwgIm9uUmVzdG9yZUNvZGUiLCAib25TdW1tYXJpemUiLCAib25DbG9zZSIsICJwcmVzZWxlY3RlZE1lc3NhZ2UiLCAiZmlsZUhpc3RvcnkiLCAidXNlQXBwU3RhdGUiLCAicyIsICJlcnJvciIsICJzZXRFcnJvciIsICJ1c2VTdGF0ZSIsICJ1bmRlZmluZWQiLCAiaXNGaWxlSGlzdG9yeUVuYWJsZWQiLCAiZmlsZUhpc3RvcnlFbmFibGVkIiwgImN1cnJlbnRVVUlEIiwgInVzZU1lbW8iLCAibWVzc2FnZU9wdGlvbnMiLCAiZmlsdGVyIiwgInNlbGVjdGFibGVVc2VyTWVzc2FnZXNGaWx0ZXIiLCAiY3JlYXRlVXNlck1lc3NhZ2UiLCAiY29udGVudCIsICJ1dWlkIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJsZW5ndGgiLCAiZmlyc3RWaXNpYmxlSW5kZXgiLCAiTWF0aCIsICJtYXgiLCAibWluIiwgImZsb29yIiwgIk1BWF9WSVNJQkxFX01FU1NBR0VTIiwgImhhc01lc3NhZ2VzVG9TZWxlY3QiLCAibWVzc2FnZVRvUmVzdG9yZSIsICJzZXRNZXNzYWdlVG9SZXN0b3JlIiwgImRpZmZTdGF0c0ZvclJlc3RvcmUiLCAic2V0RGlmZlN0YXRzRm9yUmVzdG9yZSIsICJ1c2VFZmZlY3QiLCAiY2FuY2VsbGVkIiwgImZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzIiwgInRoZW4iLCAic3RhdHMiLCAiaXNSZXN0b3JpbmciLCAic2V0SXNSZXN0b3JpbmciLCAicmVzdG9yaW5nT3B0aW9uIiwgInNldFJlc3RvcmluZ09wdGlvbiIsICJzZWxlY3RlZFJlc3RvcmVPcHRpb24iLCAic2V0U2VsZWN0ZWRSZXN0b3JlT3B0aW9uIiwgInN1bW1hcml6ZUZyb21GZWVkYmFjayIsICJzZXRTdW1tYXJpemVGcm9tRmVlZGJhY2siLCAic3VtbWFyaXplVXBUb0ZlZWRiYWNrIiwgInNldFN1bW1hcml6ZVVwVG9GZWVkYmFjayIsICJnZXRSZXN0b3JlT3B0aW9ucyIsICJjYW5SZXN0b3JlQ29kZSIsICJiYXNlT3B0aW9ucyIsICJ2YWx1ZSIsICJsYWJlbCIsICJzdW1tYXJpemVJbnB1dFByb3BzIiwgInBsYWNlaG9sZGVyIiwgImluaXRpYWxWYWx1ZSIsICJhbGxvd0VtcHR5U3VibWl0VG9DYW5jZWwiLCAic2hvd0xhYmVsV2l0aFZhbHVlIiwgImxhYmVsVmFsdWVTZXBhcmF0b3IiLCAicHVzaCIsICJvbkNoYW5nZSIsICJsb2dFdmVudCIsICJyZXN0b3JlQ29udmVyc2F0aW9uRGlyZWN0bHkiLCAibWVzc2FnZSIsICJsb2dFcnJvciIsICJoYW5kbGVTZWxlY3QiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJpbmRleEZyb21FbmQiLCAiaW5kZXhfZnJvbV9lbmQiLCAibWVzc2FnZV90eXBlIiwgImlzX2N1cnJlbnRfcHJvbXB0IiwgImluY2x1ZGVzIiwgImRpZmZTdGF0cyIsICJvblNlbGVjdFJlc3RvcmVPcHRpb24iLCAiZGlyZWN0aW9uIiwgImZlZWRiYWNrIiwgInRyaW0iLCAiY29kZUVycm9yIiwgImNvbnZlcnNhdGlvbkVycm9yIiwgImV4aXRTdGF0ZSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAiaGFuZGxlRXNjYXBlIiwgInVzZUNhbGxiYWNrIiwgIm1vdmVVcCIsICJwcmV2IiwgIm1vdmVEb3duIiwgImp1bXBUb1RvcCIsICJqdW1wVG9Cb3R0b20iLCAiaGFuZGxlU2VsZWN0Q3VycmVudCIsICJzZWxlY3RlZCIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAidXNlS2V5YmluZGluZ3MiLCAiZmlsZUhpc3RvcnlNZXRhZGF0YSIsICJzZXRGaWxlSGlzdG9yeU1ldGFkYXRhIiwgImxvYWRGaWxlSGlzdG9yeU1ldGFkYXRhIiwgIlByb21pc2UiLCAiYWxsIiwgIm1hcCIsICJ1c2VyTWVzc2FnZSIsICJpdGVtSW5kZXgiLCAiY2FuUmVzdG9yZSIsICJmaWxlSGlzdG9yeUNhblJlc3RvcmUiLCAibmV4dFVzZXJNZXNzYWdlIiwgImF0IiwgImNvbXB1dGVEaWZmU3RhdHNCZXR3ZWVuTWVzc2FnZXMiLCAiZmlsZXNDaGFuZ2VkIiwgInNob3dQaWNrTGlzdCIsICJmb3JtYXRSZWxhdGl2ZVRpbWVBZ28iLCAiRGF0ZSIsICJ0aW1lc3RhbXAiLCAiZmlndXJlcyIsICJ3YXJuaW5nIiwgInNsaWNlIiwgIm1zZyIsICJ2aXNpYmxlT3B0aW9uSW5kZXgiLCAib3B0aW9uSW5kZXgiLCAiaXNTZWxlY3RlZCIsICJpc0N1cnJlbnQiLCAibWV0YWRhdGFMb2FkZWQiLCAibWV0YWRhdGEiLCAibnVtRmlsZXNDaGFuZ2VkIiwgInBvaW50ZXIiLCAiYmFzZW5hbWUiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgImdldFJlc3RvcmVPcHRpb25Db252ZXJzYXRpb25UZXh0IiwgIlJlc3RvcmVPcHRpb25EZXNjcmlwdGlvbiIsICJ0MCIsICIkIiwgIl9jIiwgInNob3dDb2RlUmVzdG9yZSIsICJ0MSIsICJ0MiIsICJ0MyIsICJ0NCIsICJSZXN0b3JlQ29kZUNvbmZpcm1hdGlvbiIsICJTeW1ib2wiLCAiZm9yIiwgImZpbGVMYWJlbCIsICJmaWxlMSIsICJmaWxlMiIsICJmaWxlMV8wIiwgIkRpZmZTdGF0c1RleHQiLCAiaW5zZXJ0aW9ucyIsICJkZWxldGlvbnMiLCAiVXNlck1lc3NhZ2VPcHRpb24iLCAiY29sb3IiLCAiZGltQ29sb3IiLCAicGFkZGluZ1JpZ2h0IiwgImNvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgImxhc3RCbG9jayIsICJUMCIsICJUMSIsICJ0NSIsICJ0NiIsICJiYjAiLCAicmF3TWVzc2FnZVRleHQiLCAidGV4dCIsICJtZXNzYWdlVGV4dCIsICJzdHJpcERpc3BsYXlUYWdzIiwgImlzRW1wdHlNZXNzYWdlVGV4dCIsICJ0NyIsICJpbnB1dCIsICJleHRyYWN0VGFnIiwgIkNPTU1BTkRfTUVTU0FHRV9UQUciLCAiY29tbWFuZE1lc3NhZ2UiLCAiYXJncyIsICJpc1NraWxsRm9ybWF0IiwgIkJveCIsICJUZXh0IiwgInRydW5jYXRlIiwgInNwbGl0IiwgImpvaW4iLCAidDgiLCAiZnJvbU1lc3NhZ2VJZCIsICJ0b01lc3NhZ2VJZCIsICJzdGFydEluZGV4IiwgImZpbmRJbmRleCIsICJlbmRJbmRleCIsICJpIiwgImlzVG9vbFVzZVJlc3VsdE1lc3NhZ2UiLCAicmVzdWx0IiwgInRvb2xVc2VSZXN1bHQiLCAiZmlsZVBhdGgiLCAic3RydWN0dXJlZFBhdGNoIiwgImh1bmsiLCAiYWRkaXRpb25zIiwgImNvdW50IiwgImxpbmVzIiwgImxpbmUiLCAic3RhcnRzV2l0aCIsICJyZW1vdmFscyIsICJBcnJheSIsICJpc0FycmF5IiwgImlzU3ludGhldGljTWVzc2FnZSIsICJpc01ldGEiLCAiaXNDb21wYWN0U3VtbWFyeSIsICJpc1Zpc2libGVJblRyYW5zY3JpcHRPbmx5IiwgIkxPQ0FMX0NPTU1BTkRfU1RET1VUX1RBRyIsICJMT0NBTF9DT01NQU5EX1NUREVSUl9UQUciLCAiQkFTSF9TVERPVVRfVEFHIiwgIkJBU0hfU1RERVJSX1RBRyIsICJUQVNLX05PVElGSUNBVElPTl9UQUciLCAiVElDS19UQUciLCAiVEVBTU1BVEVfTUVTU0FHRV9UQUciLCAibWVzc2FnZXNBZnRlckFyZU9ubHlTeW50aGV0aWMiLCAiZnJvbUluZGV4IiwgImhhc01lYW5pbmdmdWxDb250ZW50IiwgInNvbWUiLCAiYyIsICJwYXRoIiwgInByb2Nlc3MiLCAicGF0aCIsICJyYW5kb21VVUlEIiwgImluaXRfaG9va3MiLCAiYyIsICJyYW5kb21VVUlEIiwgInJlcXVlc3QiLCAicmVzb2x2ZSIsICJyYW5kb21VVUlEIiwgImMiLCAiaW5pdF9ob29rcyIsICJyYW5kb21VVUlEIiwgInJhbmRvbVVVSUQiLCAicmFuZG9tVVVJRCIsICJ1c2VyTWVzc2FnZSIsICJyYW5kb21VVUlEIl0KfQo=
