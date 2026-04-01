#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_udsMessaging,
  udsMessaging_exports
} from "./chunk-QLZJRPHV.mjs";
import {
  init_slashCommandParsing,
  parseSlashCommand
} from "./chunk-KVW7KIZE.mjs";
import {
  DEFAULT_OUTPUT_STYLE_NAME,
  Select,
  Spinner,
  createAttachmentMessage,
  createCommandInputMessage,
  createImageMetadataText,
  createSystemMessage,
  createUserMessage,
  executeUserPromptSubmitHooks,
  extractTag,
  fileHistoryCanRestore,
  fileHistoryEnabled,
  fileHistoryGetDiffStats,
  findCommand,
  getAttachmentMessages,
  getCommandName,
  getContentText,
  getUserPromptSubmitHookBlockingMessage,
  init_AppState,
  init_Spinner,
  init_attachments,
  init_commands2 as init_commands,
  init_fileHistory,
  init_generators,
  init_hooks2 as init_hooks,
  init_imageResizer,
  init_imageStore,
  init_messages2 as init_messages,
  init_outputStyles,
  init_queryProfiler,
  init_select,
  init_textInputTypes,
  isBridgeSafeCommand,
  isEmptyMessageText,
  isSyntheticMessage,
  isToolUseResultMessage,
  isValidImagePaste,
  maybeResizeAndDownsampleImageBlock,
  queryCheckpoint,
  storeImages,
  toArray,
  useAppState
} from "./chunk-OTDPNGFK.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-S5Z6SZDA.mjs";
import {
  Divider,
  init_Divider,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useKeybindings,
  useTerminalSize
} from "./chunk-HO5F7BV3.mjs";
import {
  init_events,
  init_sessionTracing,
  logOTelEvent,
  redactIfDisabled,
  startInteractionSpan
} from "./chunk-HUEORIXP.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
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
  getSettings_DEPRECATED,
  init_auth,
  init_constants2 as init_constants,
  init_fastMode,
  init_settings2 as init_settings
} from "./chunk-NKGQGSP5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
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
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getSdkBetas,
  getSessionId,
  init_state,
  setPromptId
} from "./chunk-NGSB34MB.mjs";
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

// src/utils/messages/systemInit.ts
init_bun_bundle();
init_state();
init_outputStyles();
init_constants();
init_auth();
init_cwd();
init_fastMode();
init_settings();
import { randomUUID as randomUUID2 } from "crypto";
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
    uuid: randomUUID2()
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
init_hooks();
init_imageResizer();
init_imageStore();
init_messages();
init_queryProfiler();
init_slashCommandParsing();
import { randomUUID as randomUUID4 } from "crypto";

// src/utils/processUserInput/processTextPrompt.ts
init_state();
init_analytics();
init_messages();
init_events();
init_sessionTracing();
import { randomUUID as randomUUID3 } from "crypto";

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
  const promptId = randomUUID3();
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
          toolUseID: `hook-${randomUUID4()}`,
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
    const { processSlashCommand } = await import("./processSlashCommand-SOQ4CQL3.mjs");
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
    const { processBashCommand } = await import("./processBashCommand-75XASOU6.mjs");
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
    const { processSlashCommand } = await import("./processSlashCommand-SOQ4CQL3.mjs");
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

export {
  sdkCompatToolName,
  buildSystemInitMessage,
  MessageSelector,
  selectableUserMessagesFilter,
  messagesAfterAreOnlySynthetic,
  MessageSelector_exports,
  init_MessageSelector,
  findUltraplanTriggerPositions,
  findUltrareviewTriggerPositions,
  processUserInput
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVNlbGVjdG9yLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvbWVzc2FnZXMvc3lzdGVtSW5pdC50cyIsICIuLi8uLi9zcmMvdXRpbHMvdWx0cmFwbGFuL2tleXdvcmQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3Byb2Nlc3NVc2VySW5wdXQvcHJvY2Vzc1VzZXJJbnB1dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvcHJvY2Vzc1VzZXJJbnB1dC9wcm9jZXNzVGV4dFByb21wdC50cyIsICIuLi8uLi9zcmMvdXRpbHMvdXNlclByb21wdEtleXdvcmRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7XG4gIENvbnRlbnRCbG9ja1BhcmFtLFxuICBUZXh0QmxvY2tQYXJhbSxcbn0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL2luZGV4Lm1qcydcbmltcG9ydCB7IHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQge1xuICB0eXBlIERpZmZTdGF0cyxcbiAgZmlsZUhpc3RvcnlDYW5SZXN0b3JlLFxuICBmaWxlSGlzdG9yeUVuYWJsZWQsXG4gIGZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzLFxufSBmcm9tICdzcmMvdXRpbHMvZmlsZUhpc3RvcnkuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJ3NyYy91dGlscy9sb2cuanMnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICcuLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nLCB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7XG4gIE1lc3NhZ2UsXG4gIFBhcnRpYWxDb21wYWN0RGlyZWN0aW9uLFxuICBVc2VyTWVzc2FnZSxcbn0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IHN0cmlwRGlzcGxheVRhZ3MgfSBmcm9tICcuLi91dGlscy9kaXNwbGF5VGFncy5qcydcbmltcG9ydCB7XG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxuICBleHRyYWN0VGFnLFxuICBpc0VtcHR5TWVzc2FnZVRleHQsXG4gIGlzU3ludGhldGljTWVzc2FnZSxcbiAgaXNUb29sVXNlUmVzdWx0TWVzc2FnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyB0eXBlIE9wdGlvbldpdGhEZXNjcmlwdGlvbiwgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lci5qcydcblxuZnVuY3Rpb24gaXNUZXh0QmxvY2soYmxvY2s6IENvbnRlbnRCbG9ja1BhcmFtKTogYmxvY2sgaXMgVGV4dEJsb2NrUGFyYW0ge1xuICByZXR1cm4gYmxvY2sudHlwZSA9PT0gJ3RleHQnXG59XG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgdHlwZSB7IEZpbGVFZGl0T3V0cHV0IH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVFZGl0VG9vbC90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgT3V0cHV0IGFzIEZpbGVXcml0ZVRvb2xPdXRwdXQgfSBmcm9tICdzcmMvdG9vbHMvRmlsZVdyaXRlVG9vbC9GaWxlV3JpdGVUb29sLmpzJ1xuaW1wb3J0IHtcbiAgQkFTSF9TVERFUlJfVEFHLFxuICBCQVNIX1NURE9VVF9UQUcsXG4gIENPTU1BTkRfTUVTU0FHRV9UQUcsXG4gIExPQ0FMX0NPTU1BTkRfU1RERVJSX1RBRyxcbiAgTE9DQUxfQ09NTUFORF9TVERPVVRfVEFHLFxuICBUQVNLX05PVElGSUNBVElPTl9UQUcsXG4gIFRFQU1NQVRFX01FU1NBR0VfVEFHLFxuICBUSUNLX1RBRyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZVRpbWVBZ28sIHRydW5jYXRlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lLmpzJ1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaXZpZGVyLmpzJ1xuXG50eXBlIFJlc3RvcmVPcHRpb24gPVxuICB8ICdib3RoJ1xuICB8ICdjb252ZXJzYXRpb24nXG4gIHwgJ2NvZGUnXG4gIHwgJ3N1bW1hcml6ZSdcbiAgfCAnc3VtbWFyaXplX3VwX3RvJ1xuICB8ICduZXZlcm1pbmQnXG5cbmZ1bmN0aW9uIGlzU3VtbWFyaXplT3B0aW9uKFxuICBvcHRpb246IFJlc3RvcmVPcHRpb24gfCBudWxsLFxuKTogb3B0aW9uIGlzICdzdW1tYXJpemUnIHwgJ3N1bW1hcml6ZV91cF90bycge1xuICByZXR1cm4gb3B0aW9uID09PSAnc3VtbWFyaXplJyB8fCBvcHRpb24gPT09ICdzdW1tYXJpemVfdXBfdG8nXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgb25QcmVSZXN0b3JlOiAoKSA9PiB2b2lkXG4gIG9uUmVzdG9yZU1lc3NhZ2U6IChtZXNzYWdlOiBVc2VyTWVzc2FnZSkgPT4gUHJvbWlzZTx2b2lkPlxuICBvblJlc3RvcmVDb2RlOiAobWVzc2FnZTogVXNlck1lc3NhZ2UpID0+IFByb21pc2U8dm9pZD5cbiAgb25TdW1tYXJpemU6IChcbiAgICBtZXNzYWdlOiBVc2VyTWVzc2FnZSxcbiAgICBmZWVkYmFjaz86IHN0cmluZyxcbiAgICBkaXJlY3Rpb24/OiBQYXJ0aWFsQ29tcGFjdERpcmVjdGlvbixcbiAgKSA9PiBQcm9taXNlPHZvaWQ+XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgLyoqIFNraXAgcGljay1saXN0LCBsYW5kIG9uIGNvbmZpcm0uIENhbGxlciByYW4gc2tpcC1jaGVjayBmaXJzdC4gRXNjIGNsb3NlcyBmdWxseSAobm8gYmFjay10by1saXN0KS4gKi9cbiAgcHJlc2VsZWN0ZWRNZXNzYWdlPzogVXNlck1lc3NhZ2Vcbn1cblxuY29uc3QgTUFYX1ZJU0lCTEVfTUVTU0FHRVMgPSA3XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlU2VsZWN0b3Ioe1xuICBtZXNzYWdlcyxcbiAgb25QcmVSZXN0b3JlLFxuICBvblJlc3RvcmVNZXNzYWdlLFxuICBvblJlc3RvcmVDb2RlLFxuICBvblN1bW1hcml6ZSxcbiAgb25DbG9zZSxcbiAgcHJlc2VsZWN0ZWRNZXNzYWdlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBmaWxlSGlzdG9yeSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5maWxlSGlzdG9yeSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcbiAgY29uc3QgaXNGaWxlSGlzdG9yeUVuYWJsZWQgPSBmaWxlSGlzdG9yeUVuYWJsZWQoKVxuXG4gIC8vIEFkZCBjdXJyZW50IHByb21wdCBhcyBhIHZpcnR1YWwgbWVzc2FnZVxuICBjb25zdCBjdXJyZW50VVVJRCA9IHVzZU1lbW8ocmFuZG9tVVVJRCwgW10pXG4gIGNvbnN0IG1lc3NhZ2VPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICAuLi5tZXNzYWdlcy5maWx0ZXIoc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlciksXG4gICAgICB7XG4gICAgICAgIC4uLmNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgfSksXG4gICAgICAgIHV1aWQ6IGN1cnJlbnRVVUlELFxuICAgICAgfSBhcyBVc2VyTWVzc2FnZSxcbiAgICBdLFxuICAgIFttZXNzYWdlcywgY3VycmVudFVVSURdLFxuICApXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKG1lc3NhZ2VPcHRpb25zLmxlbmd0aCAtIDEpXG5cbiAgLy8gT3JpZW50IHRoZSBzZWxlY3RlZCBtZXNzYWdlIGFzIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb3B0aW9uc1xuICBjb25zdCBmaXJzdFZpc2libGVJbmRleCA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgTWF0aC5taW4oXG4gICAgICBzZWxlY3RlZEluZGV4IC0gTWF0aC5mbG9vcihNQVhfVklTSUJMRV9NRVNTQUdFUyAvIDIpLFxuICAgICAgbWVzc2FnZU9wdGlvbnMubGVuZ3RoIC0gTUFYX1ZJU0lCTEVfTUVTU0FHRVMsXG4gICAgKSxcbiAgKVxuXG4gIGNvbnN0IGhhc01lc3NhZ2VzVG9TZWxlY3QgPSBtZXNzYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgY29uc3QgW21lc3NhZ2VUb1Jlc3RvcmUsIHNldE1lc3NhZ2VUb1Jlc3RvcmVdID0gdXNlU3RhdGU8XG4gICAgVXNlck1lc3NhZ2UgfCB1bmRlZmluZWRcbiAgPihwcmVzZWxlY3RlZE1lc3NhZ2UpXG4gIGNvbnN0IFtkaWZmU3RhdHNGb3JSZXN0b3JlLCBzZXREaWZmU3RhdHNGb3JSZXN0b3JlXSA9IHVzZVN0YXRlPFxuICAgIERpZmZTdGF0cyB8IHVuZGVmaW5lZFxuICA+KHVuZGVmaW5lZClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJlc2VsZWN0ZWRNZXNzYWdlIHx8ICFpc0ZpbGVIaXN0b3J5RW5hYmxlZCkgcmV0dXJuXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgdm9pZCBmaWxlSGlzdG9yeUdldERpZmZTdGF0cyhmaWxlSGlzdG9yeSwgcHJlc2VsZWN0ZWRNZXNzYWdlLnV1aWQpLnRoZW4oXG4gICAgICBzdGF0cyA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXREaWZmU3RhdHNGb3JSZXN0b3JlKHN0YXRzKVxuICAgICAgfSxcbiAgICApXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtwcmVzZWxlY3RlZE1lc3NhZ2UsIGlzRmlsZUhpc3RvcnlFbmFibGVkLCBmaWxlSGlzdG9yeV0pXG5cbiAgY29uc3QgW2lzUmVzdG9yaW5nLCBzZXRJc1Jlc3RvcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Jlc3RvcmluZ09wdGlvbiwgc2V0UmVzdG9yaW5nT3B0aW9uXSA9IHVzZVN0YXRlPFJlc3RvcmVPcHRpb24gfCBudWxsPihcbiAgICBudWxsLFxuICApXG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RvcmVPcHRpb24sIHNldFNlbGVjdGVkUmVzdG9yZU9wdGlvbl0gPVxuICAgIHVzZVN0YXRlPFJlc3RvcmVPcHRpb24+KCdib3RoJylcbiAgLy8gUGVyLW9wdGlvbiBmZWVkYmFjayBzdGF0ZTsgU2VsZWN0J3MgaW50ZXJuYWwgaW5wdXRWYWx1ZXMgTWFwIHBlcnNpc3RzXG4gIC8vIHBlci1vcHRpb24gdGV4dCBpbmRlcGVuZGVudGx5LCBzbyBzaGFyaW5nIG9uZSB2YXJpYWJsZSB3b3VsZCBkZXN5bmMuXG4gIGNvbnN0IFtzdW1tYXJpemVGcm9tRmVlZGJhY2ssIHNldFN1bW1hcml6ZUZyb21GZWVkYmFja10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N1bW1hcml6ZVVwVG9GZWVkYmFjaywgc2V0U3VtbWFyaXplVXBUb0ZlZWRiYWNrXSA9IHVzZVN0YXRlKCcnKVxuXG4gIC8vIEdlbmVyYXRlIG9wdGlvbnMgd2l0aCBzdW1tYXJpemUgYXMgaW5wdXQgdHlwZSBmb3IgaW5saW5lIGNvbnRleHRcbiAgZnVuY3Rpb24gZ2V0UmVzdG9yZU9wdGlvbnMoXG4gICAgY2FuUmVzdG9yZUNvZGU6IGJvb2xlYW4sXG4gICk6IE9wdGlvbldpdGhEZXNjcmlwdGlvbjxSZXN0b3JlT3B0aW9uPltdIHtcbiAgICBjb25zdCBiYXNlT3B0aW9uczogT3B0aW9uV2l0aERlc2NyaXB0aW9uPFJlc3RvcmVPcHRpb24+W10gPSBjYW5SZXN0b3JlQ29kZVxuICAgICAgPyBbXG4gICAgICAgICAgeyB2YWx1ZTogJ2JvdGgnLCBsYWJlbDogJ1Jlc3RvcmUgY29kZSBhbmQgY29udmVyc2F0aW9uJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdjb252ZXJzYXRpb24nLCBsYWJlbDogJ1Jlc3RvcmUgY29udmVyc2F0aW9uJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdjb2RlJywgbGFiZWw6ICdSZXN0b3JlIGNvZGUnIH0sXG4gICAgICAgIF1cbiAgICAgIDogW3sgdmFsdWU6ICdjb252ZXJzYXRpb24nLCBsYWJlbDogJ1Jlc3RvcmUgY29udmVyc2F0aW9uJyB9XVxuXG4gICAgY29uc3Qgc3VtbWFyaXplSW5wdXRQcm9wcyA9IHtcbiAgICAgIHR5cGU6ICdpbnB1dCcgYXMgY29uc3QsXG4gICAgICBwbGFjZWhvbGRlcjogJ2FkZCBjb250ZXh0IChvcHRpb25hbCknLFxuICAgICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICAgIGFsbG93RW1wdHlTdWJtaXRUb0NhbmNlbDogdHJ1ZSxcbiAgICAgIHNob3dMYWJlbFdpdGhWYWx1ZTogdHJ1ZSxcbiAgICAgIGxhYmVsVmFsdWVTZXBhcmF0b3I6ICc6ICcsXG4gICAgfVxuICAgIGJhc2VPcHRpb25zLnB1c2goe1xuICAgICAgdmFsdWU6ICdzdW1tYXJpemUnLFxuICAgICAgbGFiZWw6ICdTdW1tYXJpemUgZnJvbSBoZXJlJyxcbiAgICAgIC4uLnN1bW1hcml6ZUlucHV0UHJvcHMsXG4gICAgICBvbkNoYW5nZTogc2V0U3VtbWFyaXplRnJvbUZlZWRiYWNrLFxuICAgIH0pXG4gICAgaWYgKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcpIHtcbiAgICAgIGJhc2VPcHRpb25zLnB1c2goe1xuICAgICAgICB2YWx1ZTogJ3N1bW1hcml6ZV91cF90bycsXG4gICAgICAgIGxhYmVsOiAnU3VtbWFyaXplIHVwIHRvIGhlcmUnLFxuICAgICAgICAuLi5zdW1tYXJpemVJbnB1dFByb3BzLFxuICAgICAgICBvbkNoYW5nZTogc2V0U3VtbWFyaXplVXBUb0ZlZWRiYWNrLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBiYXNlT3B0aW9ucy5wdXNoKHsgdmFsdWU6ICduZXZlcm1pbmQnLCBsYWJlbDogJ05ldmVyIG1pbmQnIH0pXG4gICAgcmV0dXJuIGJhc2VPcHRpb25zXG4gIH1cblxuICAvLyBMb2cgd2hlbiBzZWxlY3RvciBpcyBvcGVuZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfbWVzc2FnZV9zZWxlY3Rvcl9vcGVuZWQnLCB7fSlcbiAgfSwgW10pXG5cbiAgLy8gSGVscGVyIHRvIHJlc3RvcmUgY29udmVyc2F0aW9uIHdpdGhvdXQgY29uZmlybWF0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVDb252ZXJzYXRpb25EaXJlY3RseShtZXNzYWdlOiBVc2VyTWVzc2FnZSkge1xuICAgIG9uUHJlUmVzdG9yZSgpXG4gICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgYXdhaXQgb25SZXN0b3JlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgc2V0SXNSZXN0b3JpbmcoZmFsc2UpXG4gICAgICBvbkNsb3NlKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgICBzZXRJc1Jlc3RvcmluZyhmYWxzZSlcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gcmVzdG9yZSB0aGUgY29udmVyc2F0aW9uOlxcbiR7ZXJyb3J9YClcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWxlY3QobWVzc2FnZTogVXNlck1lc3NhZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IG1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSlcbiAgICBjb25zdCBpbmRleEZyb21FbmQgPSBtZXNzYWdlcy5sZW5ndGggLSAxIC0gaW5kZXhcblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tZXNzYWdlX3NlbGVjdG9yX3NlbGVjdGVkJywge1xuICAgICAgaW5kZXhfZnJvbV9lbmQ6IGluZGV4RnJvbUVuZCxcbiAgICAgIG1lc3NhZ2VfdHlwZTpcbiAgICAgICAgbWVzc2FnZS50eXBlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICBpc19jdXJyZW50X3Byb21wdDogZmFsc2UsXG4gICAgfSlcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIG1lc3NhZ2UgaXMgbm90IGZvdW5kXG4gICAgaWYgKCFtZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzRmlsZUhpc3RvcnlFbmFibGVkKSB7XG4gICAgICBhd2FpdCByZXN0b3JlQ29udmVyc2F0aW9uRGlyZWN0bHkobWVzc2FnZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpZmZTdGF0cyA9IGF3YWl0IGZpbGVIaXN0b3J5R2V0RGlmZlN0YXRzKGZpbGVIaXN0b3J5LCBtZXNzYWdlLnV1aWQpXG4gICAgc2V0TWVzc2FnZVRvUmVzdG9yZShtZXNzYWdlKVxuICAgIHNldERpZmZTdGF0c0ZvclJlc3RvcmUoZGlmZlN0YXRzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TZWxlY3RSZXN0b3JlT3B0aW9uKG9wdGlvbjogUmVzdG9yZU9wdGlvbikge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tZXNzYWdlX3NlbGVjdG9yX3Jlc3RvcmVfb3B0aW9uX3NlbGVjdGVkJywge1xuICAgICAgb3B0aW9uOlxuICAgICAgICBvcHRpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIGlmICghbWVzc2FnZVRvUmVzdG9yZSkge1xuICAgICAgc2V0RXJyb3IoJ01lc3NhZ2Ugbm90IGZvdW5kLicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKG9wdGlvbiA9PT0gJ25ldmVybWluZCcpIHtcbiAgICAgIGlmIChwcmVzZWxlY3RlZE1lc3NhZ2UpIG9uQ2xvc2UoKVxuICAgICAgZWxzZSBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1N1bW1hcml6ZU9wdGlvbihvcHRpb24pKSB7XG4gICAgICBvblByZVJlc3RvcmUoKVxuICAgICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICAgIHNldFJlc3RvcmluZ09wdGlvbihvcHRpb24pXG4gICAgICBzZXRFcnJvcih1bmRlZmluZWQpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvcHRpb24gPT09ICdzdW1tYXJpemVfdXBfdG8nID8gJ3VwX3RvJyA6ICdmcm9tJ1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9XG4gICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3VwX3RvJ1xuICAgICAgICAgICAgPyBzdW1tYXJpemVVcFRvRmVlZGJhY2tcbiAgICAgICAgICAgIDogc3VtbWFyaXplRnJvbUZlZWRiYWNrXG4gICAgICAgICAgKS50cmltKCkgfHwgdW5kZWZpbmVkXG4gICAgICAgIGF3YWl0IG9uU3VtbWFyaXplKG1lc3NhZ2VUb1Jlc3RvcmUsIGZlZWRiYWNrLCBkaXJlY3Rpb24pXG4gICAgICAgIHNldElzUmVzdG9yaW5nKGZhbHNlKVxuICAgICAgICBzZXRSZXN0b3JpbmdPcHRpb24obnVsbClcbiAgICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICAgIG9uQ2xvc2UoKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgICAgIHNldElzUmVzdG9yaW5nKGZhbHNlKVxuICAgICAgICBzZXRSZXN0b3JpbmdPcHRpb24obnVsbClcbiAgICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gc3VtbWFyaXplOlxcbiR7ZXJyb3J9YClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uUHJlUmVzdG9yZSgpXG4gICAgc2V0SXNSZXN0b3JpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcih1bmRlZmluZWQpXG5cbiAgICBsZXQgY29kZUVycm9yOiBFcnJvciB8IG51bGwgPSBudWxsXG4gICAgbGV0IGNvbnZlcnNhdGlvbkVycm9yOiBFcnJvciB8IG51bGwgPSBudWxsXG5cbiAgICBpZiAob3B0aW9uID09PSAnY29kZScgfHwgb3B0aW9uID09PSAnYm90aCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG9uUmVzdG9yZUNvZGUobWVzc2FnZVRvUmVzdG9yZSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvZGVFcnJvciA9IGVycm9yIGFzIEVycm9yXG4gICAgICAgIGxvZ0Vycm9yKGNvZGVFcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9uID09PSAnY29udmVyc2F0aW9uJyB8fCBvcHRpb24gPT09ICdib3RoJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgb25SZXN0b3JlTWVzc2FnZShtZXNzYWdlVG9SZXN0b3JlKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udmVyc2F0aW9uRXJyb3IgPSBlcnJvciBhcyBFcnJvclxuICAgICAgICBsb2dFcnJvcihjb252ZXJzYXRpb25FcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJc1Jlc3RvcmluZyhmYWxzZSlcbiAgICBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcblxuICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICBpZiAoY29udmVyc2F0aW9uRXJyb3IgJiYgY29kZUVycm9yKSB7XG4gICAgICBzZXRFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byByZXN0b3JlIHRoZSBjb252ZXJzYXRpb24gYW5kIGNvZGU6XFxuJHtjb252ZXJzYXRpb25FcnJvcn1cXG4ke2NvZGVFcnJvcn1gLFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29udmVyc2F0aW9uRXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGBGYWlsZWQgdG8gcmVzdG9yZSB0aGUgY29udmVyc2F0aW9uOlxcbiR7Y29udmVyc2F0aW9uRXJyb3J9YClcbiAgICB9IGVsc2UgaWYgKGNvZGVFcnJvcikge1xuICAgICAgc2V0RXJyb3IoYEZhaWxlZCB0byByZXN0b3JlIHRoZSBjb2RlOlxcbiR7Y29kZUVycm9yfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN1Y2Nlc3MgLSBjbG9zZSB0aGUgc2VsZWN0b3JcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgY29uc3QgaGFuZGxlRXNjYXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlVG9SZXN0b3JlICYmICFwcmVzZWxlY3RlZE1lc3NhZ2UpIHtcbiAgICAgIC8vIEdvIGJhY2sgdG8gbWVzc2FnZSBsaXN0IGluc3RlYWQgb2YgY2xvc2luZyBlbnRpcmVseVxuICAgICAgc2V0TWVzc2FnZVRvUmVzdG9yZSh1bmRlZmluZWQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X21lc3NhZ2Vfc2VsZWN0b3JfY2FuY2VsbGVkJywge30pXG4gICAgb25DbG9zZSgpXG4gIH0sIFtvbkNsb3NlLCBtZXNzYWdlVG9SZXN0b3JlLCBwcmVzZWxlY3RlZE1lc3NhZ2VdKVxuXG4gIGNvbnN0IG1vdmVVcCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMSkpLFxuICAgIFtdLFxuICApXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT5cbiAgICAgIHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1pbihtZXNzYWdlT3B0aW9ucy5sZW5ndGggLSAxLCBwcmV2ICsgMSkpLFxuICAgIFttZXNzYWdlT3B0aW9ucy5sZW5ndGhdLFxuICApXG4gIGNvbnN0IGp1bXBUb1RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNlbGVjdGVkSW5kZXgoMCksIFtdKVxuICBjb25zdCBqdW1wVG9Cb3R0b20gPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBzZXRTZWxlY3RlZEluZGV4KG1lc3NhZ2VPcHRpb25zLmxlbmd0aCAtIDEpLFxuICAgIFttZXNzYWdlT3B0aW9ucy5sZW5ndGhdLFxuICApXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEN1cnJlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBtZXNzYWdlT3B0aW9uc1tzZWxlY3RlZEluZGV4XVxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdm9pZCBoYW5kbGVTZWxlY3Qoc2VsZWN0ZWQpXG4gICAgfVxuICB9LCBbbWVzc2FnZU9wdGlvbnMsIHNlbGVjdGVkSW5kZXgsIGhhbmRsZVNlbGVjdF0pXG5cbiAgLy8gRXNjYXBlIHRvIGNsb3NlIC0gdXNlcyBDb25maXJtYXRpb24gY29udGV4dCB3aGVyZSBlc2NhcGUgaXMgYm91bmRcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUVzY2FwZSwge1xuICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgIGlzQWN0aXZlOiAhbWVzc2FnZVRvUmVzdG9yZSxcbiAgfSlcblxuICAvLyBNZXNzYWdlIHNlbGVjdG9yIG5hdmlnYXRpb24ga2V5YmluZGluZ3NcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ21lc3NhZ2VTZWxlY3Rvcjp1cCc6IG1vdmVVcCxcbiAgICAgICdtZXNzYWdlU2VsZWN0b3I6ZG93bic6IG1vdmVEb3duLFxuICAgICAgJ21lc3NhZ2VTZWxlY3Rvcjp0b3AnOiBqdW1wVG9Ub3AsXG4gICAgICAnbWVzc2FnZVNlbGVjdG9yOmJvdHRvbSc6IGp1bXBUb0JvdHRvbSxcbiAgICAgICdtZXNzYWdlU2VsZWN0b3I6c2VsZWN0JzogaGFuZGxlU2VsZWN0Q3VycmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdNZXNzYWdlU2VsZWN0b3InLFxuICAgICAgaXNBY3RpdmU6XG4gICAgICAgICFpc1Jlc3RvcmluZyAmJiAhZXJyb3IgJiYgIW1lc3NhZ2VUb1Jlc3RvcmUgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdCxcbiAgICB9LFxuICApXG5cbiAgY29uc3QgW2ZpbGVIaXN0b3J5TWV0YWRhdGEsIHNldEZpbGVIaXN0b3J5TWV0YWRhdGFdID0gdXNlU3RhdGU8XG4gICAgUmVjb3JkPG51bWJlciwgRGlmZlN0YXRzPlxuICA+KHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGVIaXN0b3J5TWV0YWRhdGEoKSB7XG4gICAgICBpZiAoIWlzRmlsZUhpc3RvcnlFbmFibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gTG9hZCBmaWxlIHNuYXBzaG90IG1ldGFkYXRhXG4gICAgICB2b2lkIFByb21pc2UuYWxsKFxuICAgICAgICBtZXNzYWdlT3B0aW9ucy5tYXAoYXN5bmMgKHVzZXJNZXNzYWdlLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodXNlck1lc3NhZ2UudXVpZCAhPT0gY3VycmVudFVVSUQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhblJlc3RvcmUgPSBmaWxlSGlzdG9yeUNhblJlc3RvcmUoXG4gICAgICAgICAgICAgIGZpbGVIaXN0b3J5LFxuICAgICAgICAgICAgICB1c2VyTWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXNlck1lc3NhZ2UgPSBtZXNzYWdlT3B0aW9ucy5hdChpdGVtSW5kZXggKyAxKVxuICAgICAgICAgICAgY29uc3QgZGlmZlN0YXRzID0gY2FuUmVzdG9yZVxuICAgICAgICAgICAgICA/IGNvbXB1dGVEaWZmU3RhdHNCZXR3ZWVuTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgIHVzZXJNZXNzYWdlLnV1aWQsXG4gICAgICAgICAgICAgICAgICBuZXh0VXNlck1lc3NhZ2U/LnV1aWQgIT09IGN1cnJlbnRVVUlEXG4gICAgICAgICAgICAgICAgICAgID8gbmV4dFVzZXJNZXNzYWdlPy51dWlkXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICAgICAgaWYgKGRpZmZTdGF0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNldEZpbGVIaXN0b3J5TWV0YWRhdGEocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgW2l0ZW1JbmRleF06IGRpZmZTdGF0cyxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRGaWxlSGlzdG9yeU1ldGFkYXRhKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIFtpdGVtSW5kZXhdOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICAgIHZvaWQgbG9hZEZpbGVIaXN0b3J5TWV0YWRhdGEoKVxuICB9LCBbbWVzc2FnZU9wdGlvbnMsIG1lc3NhZ2VzLCBjdXJyZW50VVVJRCwgZmlsZUhpc3RvcnksIGlzRmlsZUhpc3RvcnlFbmFibGVkXSlcblxuICBjb25zdCBjYW5SZXN0b3JlQ29kZSA9XG4gICAgaXNGaWxlSGlzdG9yeUVuYWJsZWQgJiZcbiAgICBkaWZmU3RhdHNGb3JSZXN0b3JlPy5maWxlc0NoYW5nZWQgJiZcbiAgICBkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZC5sZW5ndGggPiAwXG4gIGNvbnN0IHNob3dQaWNrTGlzdCA9XG4gICAgIWVycm9yICYmICFtZXNzYWdlVG9SZXN0b3JlICYmICFwcmVzZWxlY3RlZE1lc3NhZ2UgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8RGl2aWRlciBjb2xvcj1cInN1Z2dlc3Rpb25cIiAvPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luWD17MX0gZ2FwPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInN1Z2dlc3Rpb25cIj5cbiAgICAgICAgICBSZXdpbmRcbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5FcnJvcjoge2Vycm9yfTwvVGV4dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFoYXNNZXNzYWdlc1RvU2VsZWN0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQ+Tm90aGluZyB0byByZXdpbmQgdG8geWV0LjwvVGV4dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFlcnJvciAmJiBtZXNzYWdlVG9SZXN0b3JlICYmIGhhc01lc3NhZ2VzVG9TZWxlY3QgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgQ29uZmlybSB5b3Ugd2FudCB0byByZXN0b3JleycgJ31cbiAgICAgICAgICAgICAgeyFkaWZmU3RhdHNGb3JSZXN0b3JlICYmICd0aGUgY29udmVyc2F0aW9uICd9dG8gdGhlIHBvaW50IGJlZm9yZVxuICAgICAgICAgICAgICB5b3Ugc2VudCB0aGlzIG1lc3NhZ2U6XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17MX1cbiAgICAgICAgICAgICAgYm9yZGVyU3R5bGU9XCJzaW5nbGVcIlxuICAgICAgICAgICAgICBib3JkZXJSaWdodD17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlclRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbT17ZmFsc2V9XG4gICAgICAgICAgICAgIGJvcmRlckxlZnQ9e3RydWV9XG4gICAgICAgICAgICAgIGJvcmRlckxlZnREaW1Db2xvclxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VXNlck1lc3NhZ2VPcHRpb25cbiAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZT17bWVzc2FnZVRvUmVzdG9yZX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICh7Zm9ybWF0UmVsYXRpdmVUaW1lQWdvKG5ldyBEYXRlKG1lc3NhZ2VUb1Jlc3RvcmUudGltZXN0YW1wKSl9KVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxSZXN0b3JlT3B0aW9uRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0b3JlT3B0aW9uPXtzZWxlY3RlZFJlc3RvcmVPcHRpb259XG4gICAgICAgICAgICAgIGNhblJlc3RvcmVDb2RlPXshIWNhblJlc3RvcmVDb2RlfVxuICAgICAgICAgICAgICBkaWZmU3RhdHNGb3JSZXN0b3JlPXtkaWZmU3RhdHNGb3JSZXN0b3JlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtpc1Jlc3RvcmluZyAmJiBpc1N1bW1hcml6ZU9wdGlvbihyZXN0b3JpbmdPcHRpb24pID8gKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPFRleHQ+U3VtbWFyaXppbmfigKY8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzUmVzdG9yaW5nfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldFJlc3RvcmVPcHRpb25zKCEhY2FuUmVzdG9yZUNvZGUpfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtjYW5SZXN0b3JlQ29kZSA/ICdib3RoJyA6ICdjb252ZXJzYXRpb24nfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3ZhbHVlID0+XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJlc3RvcmVPcHRpb24odmFsdWUgYXMgUmVzdG9yZU9wdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+XG4gICAgICAgICAgICAgICAgICBvblNlbGVjdFJlc3RvcmVPcHRpb24odmFsdWUgYXMgUmVzdG9yZU9wdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+XG4gICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBvbkNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZXRNZXNzYWdlVG9SZXN0b3JlKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2NhblJlc3RvcmVDb2RlICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30gUmV3aW5kaW5nIGRvZXMgbm90IGFmZmVjdCBmaWxlcyBlZGl0ZWRcbiAgICAgICAgICAgICAgICAgIG1hbnVhbGx5IG9yIHZpYSBiYXNoLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd1BpY2tMaXN0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2lzRmlsZUhpc3RvcnlFbmFibGVkID8gKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBSZXN0b3JlIHRoZSBjb2RlIGFuZC9vciBjb252ZXJzYXRpb24gdG8gdGhlIHBvaW50IGJlZm9yZeKAplxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBSZXN0b3JlIGFuZCBmb3JrIHRoZSBjb252ZXJzYXRpb24gdG8gdGhlIHBvaW50IGJlZm9yZeKAplxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHttZXNzYWdlT3B0aW9uc1xuICAgICAgICAgICAgICAgIC5zbGljZShcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlSW5kZXggKyBNQVhfVklTSUJMRV9NRVNTQUdFUyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcCgobXNnLCB2aXNpYmxlT3B0aW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gZmlyc3RWaXNpYmxlSW5kZXggKyB2aXNpYmxlT3B0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBvcHRpb25JbmRleCA9PT0gc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gbXNnLnV1aWQgPT09IGN1cnJlbnRVVUlEXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhTG9hZGVkID0gb3B0aW9uSW5kZXggaW4gZmlsZUhpc3RvcnlNZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBmaWxlSGlzdG9yeU1ldGFkYXRhW29wdGlvbkluZGV4XVxuICAgICAgICAgICAgICAgICAgY29uc3QgbnVtRmlsZXNDaGFuZ2VkID1cbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE/LmZpbGVzQ2hhbmdlZCAmJiBtZXRhZGF0YS5maWxlc0NoYW5nZWQubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e21zZy51dWlkfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17aXNGaWxlSGlzdG9yeUVuYWJsZWQgPyAzIDogMn1cbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezJ9IG1pbldpZHRoPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInBlcm1pc3Npb25cIiBib2xkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWd1cmVzLnBvaW50ZXJ9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+eycgICd9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MX0gaGVpZ2h0PXsxfSBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlck1lc3NhZ2VPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWVzc2FnZT17bXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudD17aXNDdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZpbGVIaXN0b3J5RW5hYmxlZCAmJiBtZXRhZGF0YUxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXsxfSBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGFkYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfSBjb2xvcj1cImluYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge251bUZpbGVzQ2hhbmdlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtudW1GaWxlc0NoYW5nZWQgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuZmlsZXNDaGFuZ2VkIVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cGF0aC5iYXNlbmFtZShtZXRhZGF0YS5maWxlc0NoYW5nZWQhWzBdKX0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7bnVtRmlsZXNDaGFuZ2VkfSBmaWxlcyBjaGFuZ2VkIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWZmU3RhdHNUZXh0IGRpZmZTdGF0cz17bWV0YWRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5ObyBjb2RlIGNoYW5nZXM8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWd1cmVzLndhcm5pbmd9IE5vIGNvZGUgcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFtZXNzYWdlVG9SZXN0b3JlICYmIChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHshZXJyb3IgJiYgaGFzTWVzc2FnZXNUb1NlbGVjdCAmJiAnRW50ZXIgdG8gY29udGludWUgwrcgJ31Fc2MgdG9cbiAgICAgICAgICAgICAgICBleGl0XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXRSZXN0b3JlT3B0aW9uQ29udmVyc2F0aW9uVGV4dChvcHRpb246IFJlc3RvcmVPcHRpb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKG9wdGlvbikge1xuICAgIGNhc2UgJ3N1bW1hcml6ZSc6XG4gICAgICByZXR1cm4gJ01lc3NhZ2VzIGFmdGVyIHRoaXMgcG9pbnQgd2lsbCBiZSBzdW1tYXJpemVkLidcbiAgICBjYXNlICdzdW1tYXJpemVfdXBfdG8nOlxuICAgICAgcmV0dXJuICdQcmVjZWRpbmcgbWVzc2FnZXMgd2lsbCBiZSBzdW1tYXJpemVkLiBUaGlzIGFuZCBzdWJzZXF1ZW50IG1lc3NhZ2VzIHdpbGwgcmVtYWluIHVuY2hhbmdlZCDigJQgeW91IHdpbGwgc3RheSBhdCB0aGUgZW5kIG9mIHRoZSBjb252ZXJzYXRpb24uJ1xuICAgIGNhc2UgJ2JvdGgnOlxuICAgIGNhc2UgJ2NvbnZlcnNhdGlvbic6XG4gICAgICByZXR1cm4gJ1RoZSBjb252ZXJzYXRpb24gd2lsbCBiZSBmb3JrZWQuJ1xuICAgIGNhc2UgJ2NvZGUnOlxuICAgIGNhc2UgJ25ldmVybWluZCc6XG4gICAgICByZXR1cm4gJ1RoZSBjb252ZXJzYXRpb24gd2lsbCBiZSB1bmNoYW5nZWQuJ1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlc3RvcmVPcHRpb25EZXNjcmlwdGlvbih7XG4gIHNlbGVjdGVkUmVzdG9yZU9wdGlvbixcbiAgY2FuUmVzdG9yZUNvZGUsXG4gIGRpZmZTdGF0c0ZvclJlc3RvcmUsXG59OiB7XG4gIHNlbGVjdGVkUmVzdG9yZU9wdGlvbjogUmVzdG9yZU9wdGlvblxuICBjYW5SZXN0b3JlQ29kZTogYm9vbGVhblxuICBkaWZmU3RhdHNGb3JSZXN0b3JlOiBEaWZmU3RhdHMgfCB1bmRlZmluZWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzaG93Q29kZVJlc3RvcmUgPVxuICAgIGNhblJlc3RvcmVDb2RlICYmXG4gICAgKHNlbGVjdGVkUmVzdG9yZU9wdGlvbiA9PT0gJ2JvdGgnIHx8IHNlbGVjdGVkUmVzdG9yZU9wdGlvbiA9PT0gJ2NvZGUnKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAge2dldFJlc3RvcmVPcHRpb25Db252ZXJzYXRpb25UZXh0KHNlbGVjdGVkUmVzdG9yZU9wdGlvbil9XG4gICAgICA8L1RleHQ+XG4gICAgICB7IWlzU3VtbWFyaXplT3B0aW9uKHNlbGVjdGVkUmVzdG9yZU9wdGlvbikgJiZcbiAgICAgICAgKHNob3dDb2RlUmVzdG9yZSA/IChcbiAgICAgICAgICA8UmVzdG9yZUNvZGVDb25maXJtYXRpb24gZGlmZlN0YXRzRm9yUmVzdG9yZT17ZGlmZlN0YXRzRm9yUmVzdG9yZX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5UaGUgY29kZSB3aWxsIGJlIHVuY2hhbmdlZC48L1RleHQ+XG4gICAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIFJlc3RvcmVDb2RlQ29uZmlybWF0aW9uKHtcbiAgZGlmZlN0YXRzRm9yUmVzdG9yZSxcbn06IHtcbiAgZGlmZlN0YXRzRm9yUmVzdG9yZTogRGlmZlN0YXRzIHwgdW5kZWZpbmVkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgaWYgKGRpZmZTdGF0c0ZvclJlc3RvcmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBpZiAoXG4gICAgIWRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkIHx8XG4gICAgIWRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzBdXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBkaW1Db2xvcj5UaGUgY29kZSBoYXMgbm90IGNoYW5nZWQgKG5vdGhpbmcgd2lsbCBiZSByZXN0b3JlZCkuPC9UZXh0PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG51bUZpbGVzQ2hhbmdlZCA9IGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkLmxlbmd0aFxuXG4gIGxldCBmaWxlTGFiZWwgPSAnJ1xuICBpZiAobnVtRmlsZXNDaGFuZ2VkID09PSAxKSB7XG4gICAgZmlsZUxhYmVsID0gcGF0aC5iYXNlbmFtZShkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZFswXSB8fCAnJylcbiAgfSBlbHNlIGlmIChudW1GaWxlc0NoYW5nZWQgPT09IDIpIHtcbiAgICBjb25zdCBmaWxlMSA9IHBhdGguYmFzZW5hbWUoZGlmZlN0YXRzRm9yUmVzdG9yZS5maWxlc0NoYW5nZWRbMF0gfHwgJycpXG4gICAgY29uc3QgZmlsZTIgPSBwYXRoLmJhc2VuYW1lKGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzFdIHx8ICcnKVxuICAgIGZpbGVMYWJlbCA9IGAke2ZpbGUxfSBhbmQgJHtmaWxlMn1gXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZTEgPSBwYXRoLmJhc2VuYW1lKGRpZmZTdGF0c0ZvclJlc3RvcmUuZmlsZXNDaGFuZ2VkWzBdIHx8ICcnKVxuICAgIGZpbGVMYWJlbCA9IGAke2ZpbGUxfSBhbmQgJHtkaWZmU3RhdHNGb3JSZXN0b3JlLmZpbGVzQ2hhbmdlZC5sZW5ndGggLSAxfSBvdGhlciBmaWxlc2BcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICBUaGUgY29kZSB3aWxsIGJlIHJlc3RvcmVkeycgJ31cbiAgICAgICAgPERpZmZTdGF0c1RleHQgZGlmZlN0YXRzPXtkaWZmU3RhdHNGb3JSZXN0b3JlfSAvPiBpbiB7ZmlsZUxhYmVsfS5cbiAgICAgIDwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEaWZmU3RhdHNUZXh0KHtcbiAgZGlmZlN0YXRzLFxufToge1xuICBkaWZmU3RhdHM6IERpZmZTdGF0cyB8IHVuZGVmaW5lZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmICghZGlmZlN0YXRzIHx8ICFkaWZmU3RhdHMuZmlsZXNDaGFuZ2VkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZkFkZGVkV29yZFwiPit7ZGlmZlN0YXRzLmluc2VydGlvbnN9IDwvVGV4dD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZlJlbW92ZWRXb3JkXCI+LXtkaWZmU3RhdHMuZGVsZXRpb25zfTwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBVc2VyTWVzc2FnZU9wdGlvbih7XG4gIHVzZXJNZXNzYWdlLFxuICBjb2xvcixcbiAgZGltQ29sb3IsXG4gIGlzQ3VycmVudCxcbiAgcGFkZGluZ1JpZ2h0LFxufToge1xuICB1c2VyTWVzc2FnZTogVXNlck1lc3NhZ2VcbiAgY29sb3I/OiBrZXlvZiBUaGVtZVxuICBkaW1Db2xvcj86IGJvb2xlYW5cbiAgaXNDdXJyZW50OiBib29sZWFuXG4gIHBhZGRpbmdSaWdodD86IG51bWJlclxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgaWYgKGlzQ3VycmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8VGV4dCBpdGFsaWMgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICAgIChjdXJyZW50KVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gdXNlck1lc3NhZ2UubWVzc2FnZS5jb250ZW50XG4gIGNvbnN0IGxhc3RCbG9jayA9XG4gICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnID8gbnVsbCA6IGNvbnRlbnRbY29udGVudC5sZW5ndGggLSAxXVxuICBjb25zdCByYXdNZXNzYWdlVGV4dCA9XG4gICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IGNvbnRlbnQudHJpbSgpXG4gICAgICA6IGxhc3RCbG9jayAmJiBpc1RleHRCbG9jayhsYXN0QmxvY2spXG4gICAgICAgID8gbGFzdEJsb2NrLnRleHQudHJpbSgpXG4gICAgICAgIDogJyhubyBwcm9tcHQpJ1xuXG4gIC8vIFN0cmlwIGRpc3BsYXktdW5mcmllbmRseSB0YWdzIChsaWtlIDxpZGVfb3BlbmVkX2ZpbGU+KSBiZWZvcmUgc2hvd2luZyBpbiB0aGUgbGlzdFxuICBjb25zdCBtZXNzYWdlVGV4dCA9IHN0cmlwRGlzcGxheVRhZ3MocmF3TWVzc2FnZVRleHQpXG5cbiAgaWYgKGlzRW1wdHlNZXNzYWdlVGV4dChtZXNzYWdlVGV4dCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIDxUZXh0IGl0YWxpYyBjb2xvcj17Y29sb3J9IGRpbUNvbG9yPXtkaW1Db2xvcn0+XG4gICAgICAgICAgKChlbXB0eSBtZXNzYWdlKSlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gQmFzaCBpbnB1dHNcbiAgaWYgKG1lc3NhZ2VUZXh0LmluY2x1ZGVzKCc8YmFzaC1pbnB1dD4nKSkge1xuICAgIGNvbnN0IGlucHV0ID0gZXh0cmFjdFRhZyhtZXNzYWdlVGV4dCwgJ2Jhc2gtaW5wdXQnKVxuICAgIGlmIChpbnB1dCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJiYXNoQm9yZGVyXCI+ITwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J9IGRpbUNvbG9yPXtkaW1Db2xvcn0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLy8gU2tpbGxzIGFuZCBzbGFzaCBjb21tYW5kc1xuICBpZiAobWVzc2FnZVRleHQuaW5jbHVkZXMoYDwke0NPTU1BTkRfTUVTU0FHRV9UQUd9PmApKSB7XG4gICAgY29uc3QgY29tbWFuZE1lc3NhZ2UgPSBleHRyYWN0VGFnKG1lc3NhZ2VUZXh0LCBDT01NQU5EX01FU1NBR0VfVEFHKVxuICAgIGNvbnN0IGFyZ3MgPSBleHRyYWN0VGFnKG1lc3NhZ2VUZXh0LCAnY29tbWFuZC1hcmdzJylcbiAgICBjb25zdCBpc1NraWxsRm9ybWF0ID0gZXh0cmFjdFRhZyhtZXNzYWdlVGV4dCwgJ3NraWxsLWZvcm1hdCcpID09PSAndHJ1ZSdcbiAgICBpZiAoY29tbWFuZE1lc3NhZ2UpIHtcbiAgICAgIGlmIChpc1NraWxsRm9ybWF0KSB7XG4gICAgICAgIC8vIFNraWxsczogRGlzcGxheSBhcyBcIlNraWxsKG5hbWUpXCJcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtjb2xvcn0gZGltQ29sb3I9e2RpbUNvbG9yfT5cbiAgICAgICAgICAgICAgU2tpbGwoe2NvbW1hbmRNZXNzYWdlfSlcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2xhc2ggY29tbWFuZHM6IEFkZCBcIi9cIiBwcmVmaXggYW5kIGluY2x1ZGUgYXJnc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICAgICAgICAve2NvbW1hbmRNZXNzYWdlfSB7YXJnc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXIgcHJvbXB0c1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPFRleHQgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj17ZGltQ29sb3J9PlxuICAgICAgICB7cGFkZGluZ1JpZ2h0XG4gICAgICAgICAgPyB0cnVuY2F0ZShtZXNzYWdlVGV4dCwgY29sdW1ucyAtIHBhZGRpbmdSaWdodCwgdHJ1ZSlcbiAgICAgICAgICA6IG1lc3NhZ2VUZXh0LnNsaWNlKDAsIDUwMCkuc3BsaXQoJ1xcbicpLnNsaWNlKDAsIDQpLmpvaW4oJ1xcbicpfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRpZmYgc3RhdHMgZm9yIGFsbCB0aGUgZmlsZSBlZGl0cyBpbi1iZXR3ZWVuIHR3byBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZURpZmZTdGF0c0JldHdlZW5NZXNzYWdlcyhcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgZnJvbU1lc3NhZ2VJZDogVVVJRCxcbiAgdG9NZXNzYWdlSWQ6IFVVSUQgfCB1bmRlZmluZWQsXG4pOiBEaWZmU3RhdHMgfCB1bmRlZmluZWQge1xuICBjb25zdCBzdGFydEluZGV4ID0gbWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cudXVpZCA9PT0gZnJvbU1lc3NhZ2VJZClcbiAgaWYgKHN0YXJ0SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbGV0IGVuZEluZGV4ID0gdG9NZXNzYWdlSWRcbiAgICA/IG1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLnV1aWQgPT09IHRvTWVzc2FnZUlkKVxuICAgIDogbWVzc2FnZXMubGVuZ3RoXG4gIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICBlbmRJbmRleCA9IG1lc3NhZ2VzLmxlbmd0aFxuICB9XG5cbiAgY29uc3QgZmlsZXNDaGFuZ2VkOiBzdHJpbmdbXSA9IFtdXG4gIGxldCBpbnNlcnRpb25zID0gMFxuICBsZXQgZGVsZXRpb25zID0gMFxuXG4gIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXVxuICAgIGlmICghbXNnIHx8ICFpc1Rvb2xVc2VSZXN1bHRNZXNzYWdlKG1zZykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gbXNnLnRvb2xVc2VSZXN1bHQgYXMgRmlsZUVkaXRPdXRwdXQgfCBGaWxlV3JpdGVUb29sT3V0cHV0XG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5maWxlUGF0aCB8fCAhcmVzdWx0LnN0cnVjdHVyZWRQYXRjaCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVzQ2hhbmdlZC5pbmNsdWRlcyhyZXN1bHQuZmlsZVBhdGgpKSB7XG4gICAgICBmaWxlc0NoYW5nZWQucHVzaChyZXN1bHQuZmlsZVBhdGgpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICgndHlwZScgaW4gcmVzdWx0ICYmIHJlc3VsdC50eXBlID09PSAnY3JlYXRlJykge1xuICAgICAgICBpbnNlcnRpb25zICs9IHJlc3VsdC5jb250ZW50LnNwbGl0KC9cXHI/XFxuLykubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGh1bmsgb2YgcmVzdWx0LnN0cnVjdHVyZWRQYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGFkZGl0aW9ucyA9IGNvdW50KGh1bmsubGluZXMsIGxpbmUgPT4gbGluZS5zdGFydHNXaXRoKCcrJykpXG4gICAgICAgICAgY29uc3QgcmVtb3ZhbHMgPSBjb3VudChodW5rLmxpbmVzLCBsaW5lID0+IGxpbmUuc3RhcnRzV2l0aCgnLScpKVxuXG4gICAgICAgICAgaW5zZXJ0aW9ucyArPSBhZGRpdGlvbnNcbiAgICAgICAgICBkZWxldGlvbnMgKz0gcmVtb3ZhbHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgY29udGludWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGVzQ2hhbmdlZCxcbiAgICBpbnNlcnRpb25zLFxuICAgIGRlbGV0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0YWJsZVVzZXJNZXNzYWdlc0ZpbHRlcihcbiAgbWVzc2FnZTogTWVzc2FnZSxcbik6IG1lc3NhZ2UgaXMgVXNlck1lc3NhZ2Uge1xuICBpZiAobWVzc2FnZS50eXBlICE9PSAndXNlcicpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheShtZXNzYWdlLm1lc3NhZ2UuY29udGVudCkgJiZcbiAgICBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFswXT8udHlwZSA9PT0gJ3Rvb2xfcmVzdWx0J1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoaXNTeW50aGV0aWNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKG1lc3NhZ2UuaXNNZXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKG1lc3NhZ2UuaXNDb21wYWN0U3VtbWFyeSB8fCBtZXNzYWdlLmlzVmlzaWJsZUluVHJhbnNjcmlwdE9ubHkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICBjb25zdCBsYXN0QmxvY2sgPVxuICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyA/IG51bGwgOiBjb250ZW50W2NvbnRlbnQubGVuZ3RoIC0gMV1cbiAgY29uc3QgbWVzc2FnZVRleHQgPVxuICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgPyBjb250ZW50LnRyaW0oKVxuICAgICAgOiBsYXN0QmxvY2sgJiYgaXNUZXh0QmxvY2sobGFzdEJsb2NrKVxuICAgICAgICA/IGxhc3RCbG9jay50ZXh0LnRyaW0oKVxuICAgICAgICA6ICcnXG5cbiAgLy8gRmlsdGVyIG91dCBub24tdXNlci1hdXRob3JlZCBtZXNzYWdlcyAoY29tbWFuZCBvdXRwdXRzLCB0YXNrIG5vdGlmaWNhdGlvbnMsIHRpY2tzKS5cbiAgaWYgKFxuICAgIG1lc3NhZ2VUZXh0LmluZGV4T2YoYDwke0xPQ0FMX0NPTU1BTkRfU1RET1VUX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7TE9DQUxfQ09NTUFORF9TVERFUlJfVEFHfT5gKSAhPT0gLTEgfHxcbiAgICBtZXNzYWdlVGV4dC5pbmRleE9mKGA8JHtCQVNIX1NURE9VVF9UQUd9PmApICE9PSAtMSB8fFxuICAgIG1lc3NhZ2VUZXh0LmluZGV4T2YoYDwke0JBU0hfU1RERVJSX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7VEFTS19OT1RJRklDQVRJT05fVEFHfT5gKSAhPT0gLTEgfHxcbiAgICBtZXNzYWdlVGV4dC5pbmRleE9mKGA8JHtUSUNLX1RBR30+YCkgIT09IC0xIHx8XG4gICAgbWVzc2FnZVRleHQuaW5kZXhPZihgPCR7VEVBTU1BVEVfTUVTU0FHRV9UQUd9YCkgIT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFsbCBtZXNzYWdlcyBhZnRlciB0aGUgZ2l2ZW4gaW5kZXggYXJlIHN5bnRoZXRpYyAoaW50ZXJydXB0aW9ucywgY2FuY2VscywgZXRjLilcbiAqIG9yIG5vbi1tZWFuaW5nZnVsIGNvbnRlbnQuIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSdzIG5vdGhpbmcgbWVhbmluZ2Z1bCB0byBjb25maXJtIC1cbiAqIGZvciBleGFtcGxlLCBpZiB0aGUgdXNlciBoaXQgZW50ZXIgdGhlbiBpbW1lZGlhdGVseSBjYW5jZWxsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXNzYWdlc0FmdGVyQXJlT25seVN5bnRoZXRpYyhcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgZnJvbUluZGV4OiBudW1iZXIsXG4pOiBib29sZWFuIHtcbiAgZm9yIChsZXQgaSA9IGZyb21JbmRleCArIDE7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldXG4gICAgaWYgKCFtc2cpIGNvbnRpbnVlXG5cbiAgICAvLyBTa2lwIGtub3duIG5vbi1tZWFuaW5nZnVsIG1lc3NhZ2UgdHlwZXNcbiAgICBpZiAoaXNTeW50aGV0aWNNZXNzYWdlKG1zZykpIGNvbnRpbnVlXG4gICAgaWYgKGlzVG9vbFVzZVJlc3VsdE1lc3NhZ2UobXNnKSkgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdwcm9ncmVzcycpIGNvbnRpbnVlXG4gICAgaWYgKG1zZy50eXBlID09PSAnc3lzdGVtJykgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdhdHRhY2htZW50JykgY29udGludWVcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBtc2cuaXNNZXRhKSBjb250aW51ZVxuXG4gICAgLy8gQXNzaXN0YW50IHdpdGggYWN0dWFsIGNvbnRlbnQgPSBtZWFuaW5nZnVsXG4gICAgaWYgKG1zZy50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IGhhc01lYW5pbmdmdWxDb250ZW50ID0gY29udGVudC5zb21lKFxuICAgICAgICAgIGJsb2NrID0+XG4gICAgICAgICAgICAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmIGJsb2NrLnRleHQudHJpbSgpKSB8fFxuICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ3Rvb2xfdXNlJyxcbiAgICAgICAgKVxuICAgICAgICBpZiAoaGFzTWVhbmluZ2Z1bENvbnRlbnQpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBVc2VyIG1lc3NhZ2VzIHRoYXQgYXJlbid0IHN5bnRoZXRpYyBvciBtZXRhID0gbWVhbmluZ2Z1bFxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBPdGhlciB0eXBlcyAoZS5nLiwgdG9tYnN0b25lKSBhcmUgbm9uLW1lYW5pbmdmdWwsIGNvbnRpbnVlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsICJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBnZXRTZGtCZXRhcywgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IERFRkFVTFRfT1VUUFVUX1NUWUxFX05BTUUgfSBmcm9tICdzcmMvY29uc3RhbnRzL291dHB1dFN0eWxlcy5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXBpS2V5U291cmNlLFxuICBQZXJtaXNzaW9uTW9kZSxcbiAgU0RLTWVzc2FnZSxcbn0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQge1xuICBBR0VOVF9UT09MX05BTUUsXG4gIExFR0FDWV9BR0VOVF9UT09MX05BTUUsXG59IGZyb20gJ3NyYy90b29scy9BZ2VudFRvb2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgZ2V0QW50aHJvcGljQXBpS2V5V2l0aFNvdXJjZSB9IGZyb20gJy4uL2F1dGguanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi9jd2QuanMnXG5pbXBvcnQgeyBnZXRGYXN0TW9kZVN0YXRlIH0gZnJvbSAnLi4vZmFzdE1vZGUuanMnXG5pbXBvcnQgeyBnZXRTZXR0aW5nc19ERVBSRUNBVEVEIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbi8vIFRPRE8obmV4dC1taW5vcik6IHJlbW92ZSB0aGlzIHRyYW5zbGF0aW9uIG9uY2UgU0RLIGNvbnN1bWVycyBoYXZlIG1pZ3JhdGVkXG4vLyB0byB0aGUgJ0FnZW50JyB0b29sIG5hbWUuIFRoZSB3aXJlIG5hbWUgd2FzIHJlbmFtZWQgVGFzayBcdTIxOTIgQWdlbnQgaW4gIzE5NjQ3LFxuLy8gYnV0IGVtaXR0aW5nIHRoZSBuZXcgbmFtZSBpbiBpbml0L3Jlc3VsdCBldmVudHMgYnJva2UgU0RLIGNvbnN1bWVycyBvbiBhXG4vLyBwYXRjaC1sZXZlbCByZWxlYXNlLiBLZWVwIGVtaXR0aW5nICdUYXNrJyB1bnRpbCB0aGUgbmV4dCBtaW5vci5cbmV4cG9ydCBmdW5jdGlvbiBzZGtDb21wYXRUb29sTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZSA9PT0gQUdFTlRfVE9PTF9OQU1FID8gTEVHQUNZX0FHRU5UX1RPT0xfTkFNRSA6IG5hbWVcbn1cblxudHlwZSBDb21tYW5kTGlrZSA9IHsgbmFtZTogc3RyaW5nOyB1c2VySW52b2NhYmxlPzogYm9vbGVhbiB9XG5cbmV4cG9ydCB0eXBlIFN5c3RlbUluaXRJbnB1dHMgPSB7XG4gIHRvb2xzOiBSZWFkb25seUFycmF5PHsgbmFtZTogc3RyaW5nIH0+XG4gIG1jcENsaWVudHM6IFJlYWRvbmx5QXJyYXk8eyBuYW1lOiBzdHJpbmc7IHR5cGU6IHN0cmluZyB9PlxuICBtb2RlbDogc3RyaW5nXG4gIHBlcm1pc3Npb25Nb2RlOiBQZXJtaXNzaW9uTW9kZVxuICBjb21tYW5kczogUmVhZG9ubHlBcnJheTxDb21tYW5kTGlrZT5cbiAgYWdlbnRzOiBSZWFkb25seUFycmF5PHsgYWdlbnRUeXBlOiBzdHJpbmcgfT5cbiAgc2tpbGxzOiBSZWFkb25seUFycmF5PENvbW1hbmRMaWtlPlxuICBwbHVnaW5zOiBSZWFkb25seUFycmF5PHsgbmFtZTogc3RyaW5nOyBwYXRoOiBzdHJpbmc7IHNvdXJjZTogc3RyaW5nIH0+XG4gIGZhc3RNb2RlOiBib29sZWFuIHwgdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQnVpbGQgdGhlIGBzeXN0ZW0vaW5pdGAgU0RLTWVzc2FnZSBcdTIwMTQgdGhlIGZpcnN0IG1lc3NhZ2Ugb24gdGhlIFNESyBzdHJlYW1cbiAqIGNhcnJ5aW5nIHNlc3Npb24gbWV0YWRhdGEgKGN3ZCwgdG9vbHMsIG1vZGVsLCBjb21tYW5kcywgZXRjLikgdGhhdCByZW1vdGVcbiAqIGNsaWVudHMgdXNlIHRvIHJlbmRlciBwaWNrZXJzIGFuZCBnYXRlIFVJLlxuICpcbiAqIENhbGxlZCBmcm9tIHR3byBwYXRocyB0aGF0IG11c3QgcHJvZHVjZSBpZGVudGljYWwgc2hhcGVzOlxuICogICAtIFF1ZXJ5RW5naW5lIChzcGF3bi1icmlkZ2UgLyBwcmludC1tb2RlIC8gU0RLKSBcdTIwMTQgeWllbGRlZCBhcyB0aGUgZmlyc3RcbiAqICAgICBzdHJlYW0gbWVzc2FnZSBwZXIgcXVlcnkgdHVyblxuICogICAtIHVzZVJlcGxCcmlkZ2UgKFJFUEwgUmVtb3RlIENvbnRyb2wpIFx1MjAxNCBzZW50IHZpYSB3cml0ZVNka01lc3NhZ2VzKCkgb25cbiAqICAgICBicmlkZ2UgY29ubmVjdCwgc2luY2UgUkVQTCB1c2VzIHF1ZXJ5KCkgZGlyZWN0bHkgYW5kIG5ldmVyIGhpdHMgdGhlXG4gKiAgICAgUXVlcnlFbmdpbmUgU0RLTWVzc2FnZSBsYXllclxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTeXN0ZW1Jbml0TWVzc2FnZShpbnB1dHM6IFN5c3RlbUluaXRJbnB1dHMpOiBTREtNZXNzYWdlIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5nc19ERVBSRUNBVEVEKClcbiAgY29uc3Qgb3V0cHV0U3R5bGUgPSBzZXR0aW5ncz8ub3V0cHV0U3R5bGUgPz8gREVGQVVMVF9PVVRQVVRfU1RZTEVfTkFNRVxuXG4gIGNvbnN0IGluaXRNZXNzYWdlOiBTREtNZXNzYWdlID0ge1xuICAgIHR5cGU6ICdzeXN0ZW0nLFxuICAgIHN1YnR5cGU6ICdpbml0JyxcbiAgICBjd2Q6IGdldEN3ZCgpLFxuICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgIHRvb2xzOiBpbnB1dHMudG9vbHMubWFwKHRvb2wgPT4gc2RrQ29tcGF0VG9vbE5hbWUodG9vbC5uYW1lKSksXG4gICAgbWNwX3NlcnZlcnM6IGlucHV0cy5tY3BDbGllbnRzLm1hcChjbGllbnQgPT4gKHtcbiAgICAgIG5hbWU6IGNsaWVudC5uYW1lLFxuICAgICAgc3RhdHVzOiBjbGllbnQudHlwZSxcbiAgICB9KSksXG4gICAgbW9kZWw6IGlucHV0cy5tb2RlbCxcbiAgICBwZXJtaXNzaW9uTW9kZTogaW5wdXRzLnBlcm1pc3Npb25Nb2RlLFxuICAgIHNsYXNoX2NvbW1hbmRzOiBpbnB1dHMuY29tbWFuZHNcbiAgICAgIC5maWx0ZXIoYyA9PiBjLnVzZXJJbnZvY2FibGUgIT09IGZhbHNlKVxuICAgICAgLm1hcChjID0+IGMubmFtZSksXG4gICAgYXBpS2V5U291cmNlOiBnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlKCkuc291cmNlIGFzIEFwaUtleVNvdXJjZSxcbiAgICBiZXRhczogZ2V0U2RrQmV0YXMoKSxcbiAgICBjbGF1ZGVfY29kZV92ZXJzaW9uOiBNQUNSTy5WRVJTSU9OLFxuICAgIG91dHB1dF9zdHlsZTogb3V0cHV0U3R5bGUsXG4gICAgYWdlbnRzOiBpbnB1dHMuYWdlbnRzLm1hcChhZ2VudCA9PiBhZ2VudC5hZ2VudFR5cGUpLFxuICAgIHNraWxsczogaW5wdXRzLnNraWxsc1xuICAgICAgLmZpbHRlcihzID0+IHMudXNlckludm9jYWJsZSAhPT0gZmFsc2UpXG4gICAgICAubWFwKHNraWxsID0+IHNraWxsLm5hbWUpLFxuICAgIHBsdWdpbnM6IGlucHV0cy5wbHVnaW5zLm1hcChwbHVnaW4gPT4gKHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgcGF0aDogcGx1Z2luLnBhdGgsXG4gICAgICBzb3VyY2U6IHBsdWdpbi5zb3VyY2UsXG4gICAgfSkpLFxuICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgfVxuICAvLyBIaWRkZW4gZnJvbSBwdWJsaWMgU0RLIHR5cGVzIFx1MjAxNCBhbnQtb25seSBVRFMgbWVzc2FnaW5nIHNvY2tldCBwYXRoXG4gIGlmIChmZWF0dXJlKCdVRFNfSU5CT1gnKSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICA7KGluaXRNZXNzYWdlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5tZXNzYWdpbmdfc29ja2V0X3BhdGggPVxuICAgICAgcmVxdWlyZSgnLi4vdWRzTWVzc2FnaW5nLmpzJykuZ2V0VWRzTWVzc2FnaW5nU29ja2V0UGF0aCgpXG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gIH1cbiAgaW5pdE1lc3NhZ2UuZmFzdF9tb2RlX3N0YXRlID0gZ2V0RmFzdE1vZGVTdGF0ZShpbnB1dHMubW9kZWwsIGlucHV0cy5mYXN0TW9kZSlcbiAgcmV0dXJuIGluaXRNZXNzYWdlXG59XG4iLCAidHlwZSBUcmlnZ2VyUG9zaXRpb24gPSB7IHdvcmQ6IHN0cmluZzsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfVxuXG5jb25zdCBPUEVOX1RPX0NMT1NFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnYCc6ICdgJyxcbiAgJ1wiJzogJ1wiJyxcbiAgJzwnOiAnPicsXG4gICd7JzogJ30nLFxuICAnWyc6ICddJyxcbiAgJygnOiAnKScsXG4gIFwiJ1wiOiBcIidcIixcbn1cblxuLyoqXG4gKiBGaW5kIGtleXdvcmQgcG9zaXRpb25zLCBza2lwcGluZyBvY2N1cnJlbmNlcyB0aGF0IGFyZSBjbGVhcmx5IG5vdCBhXG4gKiBsYXVuY2ggZGlyZWN0aXZlOlxuICpcbiAqIC0gSW5zaWRlIHBhaXJlZCBkZWxpbWl0ZXJzOiBiYWNrdGlja3MsIGRvdWJsZSBxdW90ZXMsIGFuZ2xlIGJyYWNrZXRzXG4gKiAgICh0YWctbGlrZSBvbmx5LCBzbyBgbiA8IDUgdWx0cmFwbGFuIG4gPiAxMGAgaXMgbm90IGEgcGhhbnRvbSByYW5nZSksXG4gKiAgIGN1cmx5IGJyYWNlcywgc3F1YXJlIGJyYWNrZXRzIChpbm5lcm1vc3QgXHUyMDE0IHByZUV4cGFuc2lvbklucHV0IGhhc1xuICogICBgW1Bhc3RlZCB0ZXh0ICNOXWAgcGxhY2Vob2xkZXJzKSwgcGFyZW50aGVzZXMuIFNpbmdsZSBxdW90ZXMgYXJlXG4gKiAgIGRlbGltaXRlcnMgb25seSB3aGVuIG5vdCBhbiBhcG9zdHJvcGhlIFx1MjAxNCB0aGUgb3BlbmluZyBxdW90ZSBtdXN0IGJlXG4gKiAgIHByZWNlZGVkIGJ5IGEgbm9uLXdvcmQgY2hhciAob3Igc3RhcnQpIGFuZCB0aGUgY2xvc2luZyBxdW90ZSBtdXN0IGJlXG4gKiAgIGZvbGxvd2VkIGJ5IGEgbm9uLXdvcmQgY2hhciAob3IgZW5kKSwgc28gXCJsZXQncyB1bHRyYXBsYW4gaXQnc1wiXG4gKiAgIHN0aWxsIHRyaWdnZXJzLlxuICpcbiAqIC0gUGF0aC9pZGVudGlmaWVyLWxpa2UgY29udGV4dDogaW1tZWRpYXRlbHkgcHJlY2VkZWQgb3IgZm9sbG93ZWQgYnlcbiAqICAgYC9gLCBgXFxgLCBvciBgLWAsIG9yIGZvbGxvd2VkIGJ5IGAuYCArIHdvcmQgY2hhciAoZmlsZSBleHRlbnNpb24pLlxuICogICBgXFxiYCBzZWVzIGEgYm91bmRhcnkgYXQgYC1gLCBzbyBgdWx0cmFwbGFuLXNgIHdvdWxkIG90aGVyd2lzZVxuICogICBtYXRjaC4gVGhpcyBrZWVwcyBgc3JjL3VsdHJhcGxhbi9mb28udHNgLCBgdWx0cmFwbGFuLnRzeGAsIGFuZFxuICogICBgLS11bHRyYXBsYW4tbW9kZWAgZnJvbSB0cmlnZ2VyaW5nIHdoaWxlIGB1bHRyYXBsYW4uYCBhdCBhIHNlbnRlbmNlXG4gKiAgIGVuZCBzdGlsbCBkb2VzLlxuICpcbiAqIC0gRm9sbG93ZWQgYnkgYD9gOiBhIHF1ZXN0aW9uIGFib3V0IHRoZSBmZWF0dXJlIHNob3VsZG4ndCBpbnZva2UgaXQuXG4gKiAgIE90aGVyIHNlbnRlbmNlIHB1bmN0dWF0aW9uIChgLmAsIGAsYCwgYCFgKSBzdGlsbCB0cmlnZ2Vycy5cbiAqXG4gKiAtIFNsYXNoIGNvbW1hbmQgaW5wdXQ6IHRleHQgc3RhcnRpbmcgd2l0aCBgL2AgaXMgYSBzbGFzaCBjb21tYW5kXG4gKiAgIGludm9jYXRpb24gKHByb2Nlc3NVc2VySW5wdXQudHMgcm91dGVzIGl0IHRvIHByb2Nlc3NTbGFzaENvbW1hbmQsXG4gKiAgIG5vdCBrZXl3b3JkIGRldGVjdGlvbiksIHNvIGAvcmVuYW1lIHVsdHJhcGxhbiBmb29gIG5ldmVyIHRyaWdnZXJzLlxuICogICBXaXRob3V0IHRoaXMsIFByb21wdElucHV0IHdvdWxkIHJhaW5ib3ctaGlnaGxpZ2h0IHRoZSB3b3JkIGFuZCBzaG93XG4gKiAgIHRoZSBcIndpbGwgbGF1bmNoIHVsdHJhcGxhblwiIG5vdGlmaWNhdGlvbiBldmVuIHRob3VnaCBzdWJtaXR0aW5nIHRoZVxuICogICBpbnB1dCBydW5zIC9yZW5hbWUsIG5vdCAvdWx0cmFwbGFuLlxuICpcbiAqIFNoYXBlIG1hdGNoZXMgZmluZFRoaW5raW5nVHJpZ2dlclBvc2l0aW9ucyAodGhpbmtpbmcudHMpIHNvXG4gKiBQcm9tcHRJbnB1dCB0cmVhdHMgYm90aCB0cmlnZ2VyIHR5cGVzIHVuaWZvcm1seS5cbiAqL1xuZnVuY3Rpb24gZmluZEtleXdvcmRUcmlnZ2VyUG9zaXRpb25zKFxuICB0ZXh0OiBzdHJpbmcsXG4gIGtleXdvcmQ6IHN0cmluZyxcbik6IFRyaWdnZXJQb3NpdGlvbltdIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGtleXdvcmQsICdpJylcbiAgaWYgKCFyZS50ZXN0KHRleHQpKSByZXR1cm4gW11cbiAgaWYgKHRleHQuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gW11cbiAgY29uc3QgcXVvdGVkUmFuZ2VzOiBBcnJheTx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+ID0gW11cbiAgbGV0IG9wZW5RdW90ZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IG9wZW5BdCA9IDBcbiAgY29uc3QgaXNXb3JkID0gKGNoOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+ICEhY2ggJiYgL1tcXHB7TH1cXHB7Tn1fXS91LnRlc3QoY2gpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoID0gdGV4dFtpXSFcbiAgICBpZiAob3BlblF1b3RlKSB7XG4gICAgICBpZiAob3BlblF1b3RlID09PSAnWycgJiYgY2ggPT09ICdbJykge1xuICAgICAgICBvcGVuQXQgPSBpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoY2ggIT09IE9QRU5fVE9fQ0xPU0Vbb3BlblF1b3RlXSkgY29udGludWVcbiAgICAgIGlmIChvcGVuUXVvdGUgPT09IFwiJ1wiICYmIGlzV29yZCh0ZXh0W2kgKyAxXSkpIGNvbnRpbnVlXG4gICAgICBxdW90ZWRSYW5nZXMucHVzaCh7IHN0YXJ0OiBvcGVuQXQsIGVuZDogaSArIDEgfSlcbiAgICAgIG9wZW5RdW90ZSA9IG51bGxcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGNoID09PSAnPCcgJiYgaSArIDEgPCB0ZXh0Lmxlbmd0aCAmJiAvW2EtekEtWi9dLy50ZXN0KHRleHRbaSArIDFdISkpIHx8XG4gICAgICAoY2ggPT09IFwiJ1wiICYmICFpc1dvcmQodGV4dFtpIC0gMV0pKSB8fFxuICAgICAgKGNoICE9PSAnPCcgJiYgY2ggIT09IFwiJ1wiICYmIGNoIGluIE9QRU5fVE9fQ0xPU0UpXG4gICAgKSB7XG4gICAgICBvcGVuUXVvdGUgPSBjaFxuICAgICAgb3BlbkF0ID0gaVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvc2l0aW9uczogVHJpZ2dlclBvc2l0aW9uW10gPSBbXVxuICBjb25zdCB3b3JkUmUgPSBuZXcgUmVnRXhwKGBcXFxcYiR7a2V5d29yZH1cXFxcYmAsICdnaScpXG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKHdvcmRSZSlcbiAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgaWYgKG1hdGNoLmluZGV4ID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXG4gICAgY29uc3Qgc3RhcnQgPSBtYXRjaC5pbmRleFxuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgaWYgKHF1b3RlZFJhbmdlcy5zb21lKHIgPT4gc3RhcnQgPj0gci5zdGFydCAmJiBzdGFydCA8IHIuZW5kKSkgY29udGludWVcbiAgICBjb25zdCBiZWZvcmUgPSB0ZXh0W3N0YXJ0IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IHRleHRbZW5kXVxuICAgIGlmIChiZWZvcmUgPT09ICcvJyB8fCBiZWZvcmUgPT09ICdcXFxcJyB8fCBiZWZvcmUgPT09ICctJykgY29udGludWVcbiAgICBpZiAoYWZ0ZXIgPT09ICcvJyB8fCBhZnRlciA9PT0gJ1xcXFwnIHx8IGFmdGVyID09PSAnLScgfHwgYWZ0ZXIgPT09ICc/JylcbiAgICAgIGNvbnRpbnVlXG4gICAgaWYgKGFmdGVyID09PSAnLicgJiYgaXNXb3JkKHRleHRbZW5kICsgMV0pKSBjb250aW51ZVxuICAgIHBvc2l0aW9ucy5wdXNoKHsgd29yZDogbWF0Y2hbMF0sIHN0YXJ0LCBlbmQgfSlcbiAgfVxuICByZXR1cm4gcG9zaXRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVWx0cmFwbGFuVHJpZ2dlclBvc2l0aW9ucyh0ZXh0OiBzdHJpbmcpOiBUcmlnZ2VyUG9zaXRpb25bXSB7XG4gIHJldHVybiBmaW5kS2V5d29yZFRyaWdnZXJQb3NpdGlvbnModGV4dCwgJ3VsdHJhcGxhbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVWx0cmFyZXZpZXdUcmlnZ2VyUG9zaXRpb25zKFxuICB0ZXh0OiBzdHJpbmcsXG4pOiBUcmlnZ2VyUG9zaXRpb25bXSB7XG4gIHJldHVybiBmaW5kS2V5d29yZFRyaWdnZXJQb3NpdGlvbnModGV4dCwgJ3VsdHJhcmV2aWV3Jylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1VsdHJhcGxhbktleXdvcmQodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBmaW5kVWx0cmFwbGFuVHJpZ2dlclBvc2l0aW9ucyh0ZXh0KS5sZW5ndGggPiAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNVbHRyYXJldmlld0tleXdvcmQodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBmaW5kVWx0cmFyZXZpZXdUcmlnZ2VyUG9zaXRpb25zKHRleHQpLmxlbmd0aCA+IDBcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRoZSBmaXJzdCB0cmlnZ2VyYWJsZSBcInVsdHJhcGxhblwiIHdpdGggXCJwbGFuXCIgc28gdGhlIGZvcndhcmRlZFxuICogcHJvbXB0IHN0YXlzIGdyYW1tYXRpY2FsIChcInBsZWFzZSB1bHRyYXBsYW4gdGhpc1wiIFx1MjE5MiBcInBsZWFzZSBwbGFuIHRoaXNcIikuXG4gKiBQcmVzZXJ2ZXMgdGhlIHVzZXIncyBjYXNpbmcgb2YgdGhlIFwicGxhblwiIHN1ZmZpeC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VVbHRyYXBsYW5LZXl3b3JkKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IFt0cmlnZ2VyXSA9IGZpbmRVbHRyYXBsYW5UcmlnZ2VyUG9zaXRpb25zKHRleHQpXG4gIGlmICghdHJpZ2dlcikgcmV0dXJuIHRleHRcbiAgY29uc3QgYmVmb3JlID0gdGV4dC5zbGljZSgwLCB0cmlnZ2VyLnN0YXJ0KVxuICBjb25zdCBhZnRlciA9IHRleHQuc2xpY2UodHJpZ2dlci5lbmQpXG4gIGlmICghKGJlZm9yZSArIGFmdGVyKS50cmltKCkpIHJldHVybiAnJ1xuICByZXR1cm4gYmVmb3JlICsgdHJpZ2dlci53b3JkLnNsaWNlKCd1bHRyYScubGVuZ3RoKSArIGFmdGVyXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgdHlwZSB7XG4gIEJhc2U2NEltYWdlU291cmNlLFxuICBDb250ZW50QmxvY2tQYXJhbSxcbiAgSW1hZ2VCbG9ja1BhcmFtLFxufSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvbWVzc2FnZXMubWpzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB0eXBlIHsgUXVlcnlTb3VyY2UgfSBmcm9tICdzcmMvY29uc3RhbnRzL3F1ZXJ5U291cmNlLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0Q29udGVudFRleHQgfSBmcm9tICdzcmMvdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQge1xuICBmaW5kQ29tbWFuZCxcbiAgZ2V0Q29tbWFuZE5hbWUsXG4gIGlzQnJpZGdlU2FmZUNvbW1hbmQsXG4gIHR5cGUgTG9jYWxKU1hDb21tYW5kQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgdHlwZSB7IENhblVzZVRvb2xGbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNhblVzZVRvb2wuanMnXG5pbXBvcnQgdHlwZSB7IElERVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlkZVNlbGVjdGlvbi5qcydcbmltcG9ydCB0eXBlIHsgU2V0VG9vbEpTWEZuLCBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7XG4gIEFzc2lzdGFudE1lc3NhZ2UsXG4gIEF0dGFjaG1lbnRNZXNzYWdlLFxuICBNZXNzYWdlLFxuICBQcm9ncmVzc01lc3NhZ2UsXG4gIFN5c3RlbU1lc3NhZ2UsXG4gIFVzZXJNZXNzYWdlLFxufSBmcm9tICcuLi8uLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uTW9kZSB9IGZyb20gJy4uLy4uL3R5cGVzL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHtcbiAgaXNWYWxpZEltYWdlUGFzdGUsXG4gIHR5cGUgUHJvbXB0SW5wdXRNb2RlLFxufSBmcm9tICcuLi8uLi90eXBlcy90ZXh0SW5wdXRUeXBlcy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQWdlbnRNZW50aW9uQXR0YWNobWVudCxcbiAgY3JlYXRlQXR0YWNobWVudE1lc3NhZ2UsXG4gIGdldEF0dGFjaG1lbnRNZXNzYWdlcyxcbn0gZnJvbSAnLi4vYXR0YWNobWVudHMuanMnXG5pbXBvcnQgdHlwZSB7IFBhc3RlZENvbnRlbnQgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgdHlwZSB7IEVmZm9ydFZhbHVlIH0gZnJvbSAnLi4vZWZmb3J0LmpzJ1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4uL2dlbmVyYXRvcnMuanMnXG5pbXBvcnQge1xuICBleGVjdXRlVXNlclByb21wdFN1Ym1pdEhvb2tzLFxuICBnZXRVc2VyUHJvbXB0U3VibWl0SG9va0Jsb2NraW5nTWVzc2FnZSxcbn0gZnJvbSAnLi4vaG9va3MuanMnXG5pbXBvcnQge1xuICBjcmVhdGVJbWFnZU1ldGFkYXRhVGV4dCxcbiAgbWF5YmVSZXNpemVBbmREb3duc2FtcGxlSW1hZ2VCbG9jayxcbn0gZnJvbSAnLi4vaW1hZ2VSZXNpemVyLmpzJ1xuaW1wb3J0IHsgc3RvcmVJbWFnZXMgfSBmcm9tICcuLi9pbWFnZVN0b3JlLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQ29tbWFuZElucHV0TWVzc2FnZSxcbiAgY3JlYXRlU3lzdGVtTWVzc2FnZSxcbiAgY3JlYXRlVXNlck1lc3NhZ2UsXG59IGZyb20gJy4uL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgcXVlcnlDaGVja3BvaW50IH0gZnJvbSAnLi4vcXVlcnlQcm9maWxlci5qcydcbmltcG9ydCB7IHBhcnNlU2xhc2hDb21tYW5kIH0gZnJvbSAnLi4vc2xhc2hDb21tYW5kUGFyc2luZy5qcydcbmltcG9ydCB7XG4gIGhhc1VsdHJhcGxhbktleXdvcmQsXG4gIHJlcGxhY2VVbHRyYXBsYW5LZXl3b3JkLFxufSBmcm9tICcuLi91bHRyYXBsYW4va2V5d29yZC5qcydcbmltcG9ydCB7IHByb2Nlc3NUZXh0UHJvbXB0IH0gZnJvbSAnLi9wcm9jZXNzVGV4dFByb21wdC5qcydcbmV4cG9ydCB0eXBlIFByb2Nlc3NVc2VySW5wdXRDb250ZXh0ID0gVG9vbFVzZUNvbnRleHQgJiBMb2NhbEpTWENvbW1hbmRDb250ZXh0XG5cbmV4cG9ydCB0eXBlIFByb2Nlc3NVc2VySW5wdXRCYXNlUmVzdWx0ID0ge1xuICBtZXNzYWdlczogKFxuICAgIHwgVXNlck1lc3NhZ2VcbiAgICB8IEFzc2lzdGFudE1lc3NhZ2VcbiAgICB8IEF0dGFjaG1lbnRNZXNzYWdlXG4gICAgfCBTeXN0ZW1NZXNzYWdlXG4gICAgfCBQcm9ncmVzc01lc3NhZ2VcbiAgKVtdXG4gIHNob3VsZFF1ZXJ5OiBib29sZWFuXG4gIGFsbG93ZWRUb29scz86IHN0cmluZ1tdXG4gIG1vZGVsPzogc3RyaW5nXG4gIGVmZm9ydD86IEVmZm9ydFZhbHVlXG4gIC8vIE91dHB1dCB0ZXh0IGZvciBub24taW50ZXJhY3RpdmUgbW9kZSAoZS5nLiwgZm9ya2VkIGNvbW1hbmRzKVxuICAvLyBXaGVuIHNldCwgdGhpcyBpcyB1c2VkIGFzIHRoZSByZXN1bHQgaW4gLXAgbW9kZSBpbnN0ZWFkIG9mIGVtcHR5IHN0cmluZ1xuICByZXN1bHRUZXh0Pzogc3RyaW5nXG4gIC8vIFdoZW4gc2V0LCBwcmVmaWxscyBvciBzdWJtaXRzIHRoZSBuZXh0IGlucHV0IGFmdGVyIGNvbW1hbmQgY29tcGxldGVzXG4gIC8vIFVzZWQgYnkgL2Rpc2NvdmVyIHRvIGNoYWluIGludG8gdGhlIHNlbGVjdGVkIGZlYXR1cmUncyBjb21tYW5kXG4gIG5leHRJbnB1dD86IHN0cmluZ1xuICBzdWJtaXROZXh0SW5wdXQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVXNlcklucHV0KHtcbiAgaW5wdXQsXG4gIHByZUV4cGFuc2lvbklucHV0LFxuICBtb2RlLFxuICBzZXRUb29sSlNYLFxuICBjb250ZXh0LFxuICBwYXN0ZWRDb250ZW50cyxcbiAgaWRlU2VsZWN0aW9uLFxuICBtZXNzYWdlcyxcbiAgc2V0VXNlcklucHV0T25Qcm9jZXNzaW5nLFxuICB1dWlkLFxuICBpc0FscmVhZHlQcm9jZXNzaW5nLFxuICBxdWVyeVNvdXJjZSxcbiAgY2FuVXNlVG9vbCxcbiAgc2tpcFNsYXNoQ29tbWFuZHMsXG4gIGJyaWRnZU9yaWdpbixcbiAgaXNNZXRhLFxuICBza2lwQXR0YWNobWVudHMsXG59OiB7XG4gIGlucHV0OiBzdHJpbmcgfCBBcnJheTxDb250ZW50QmxvY2tQYXJhbT5cbiAgLyoqXG4gICAqIElucHV0IGJlZm9yZSBbUGFzdGVkIHRleHQgI05dIGV4cGFuc2lvbi4gVXNlZCBmb3IgdWx0cmFwbGFuIGtleXdvcmRcbiAgICogZGV0ZWN0aW9uIHNvIHBhc3RlZCBjb250ZW50IGNvbnRhaW5pbmcgdGhlIHdvcmQgY2Fubm90IHRyaWdnZXIuIEZhbGxzXG4gICAqIGJhY2sgdG8gdGhlIHN0cmluZyBgaW5wdXRgIHdoZW4gdW5zZXQuXG4gICAqL1xuICBwcmVFeHBhbnNpb25JbnB1dD86IHN0cmluZ1xuICBtb2RlOiBQcm9tcHRJbnB1dE1vZGVcbiAgc2V0VG9vbEpTWDogU2V0VG9vbEpTWEZuXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0XG4gIHBhc3RlZENvbnRlbnRzPzogUmVjb3JkPG51bWJlciwgUGFzdGVkQ29udGVudD5cbiAgaWRlU2VsZWN0aW9uPzogSURFU2VsZWN0aW9uXG4gIG1lc3NhZ2VzPzogTWVzc2FnZVtdXG4gIHNldFVzZXJJbnB1dE9uUHJvY2Vzc2luZz86IChwcm9tcHQ/OiBzdHJpbmcpID0+IHZvaWRcbiAgdXVpZD86IHN0cmluZ1xuICBpc0FscmVhZHlQcm9jZXNzaW5nPzogYm9vbGVhblxuICBxdWVyeVNvdXJjZT86IFF1ZXJ5U291cmNlXG4gIGNhblVzZVRvb2w/OiBDYW5Vc2VUb29sRm5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgaW5wdXQgc3RhcnRpbmcgd2l0aCBgL2AgaXMgdHJlYXRlZCBhcyBwbGFpbiB0ZXh0LlxuICAgKiBVc2VkIGZvciByZW1vdGVseS1yZWNlaXZlZCBtZXNzYWdlcyAoYnJpZGdlL0NDUikgdGhhdCBzaG91bGQgbm90XG4gICAqIHRyaWdnZXIgbG9jYWwgc2xhc2ggY29tbWFuZHMgb3Igc2tpbGxzLlxuICAgKi9cbiAgc2tpcFNsYXNoQ29tbWFuZHM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNsYXNoIGNvbW1hbmRzIG1hdGNoaW5nIGlzQnJpZGdlU2FmZUNvbW1hbmQoKSBleGVjdXRlIGV2ZW5cbiAgICogdGhvdWdoIHNraXBTbGFzaENvbW1hbmRzIGlzIHNldC4gU2VlIFF1ZXVlZENvbW1hbmQuYnJpZGdlT3JpZ2luLlxuICAgKi9cbiAgYnJpZGdlT3JpZ2luPzogYm9vbGVhblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgcmVzdWx0aW5nIFVzZXJNZXNzYWdlIGdldHMgYGlzTWV0YTogdHJ1ZWAgKHVzZXItaGlkZGVuLFxuICAgKiBtb2RlbC12aXNpYmxlKS4gUHJvcGFnYXRlZCBmcm9tIGBRdWV1ZWRDb21tYW5kLmlzTWV0YWAgZm9yIHF1ZXVlZFxuICAgKiBzeXN0ZW0tZ2VuZXJhdGVkIHByb21wdHMuXG4gICAqL1xuICBpc01ldGE/OiBib29sZWFuXG4gIHNraXBBdHRhY2htZW50cz86IGJvb2xlYW5cbn0pOiBQcm9taXNlPFByb2Nlc3NVc2VySW5wdXRCYXNlUmVzdWx0PiB7XG4gIGNvbnN0IGlucHV0U3RyaW5nID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IGlucHV0IDogbnVsbFxuICAvLyBJbW1lZGlhdGVseSBzaG93IHRoZSB1c2VyIGlucHV0IHByb21wdCB3aGlsZSB3ZSBhcmUgc3RpbGwgcHJvY2Vzc2luZyB0aGUgaW5wdXQuXG4gIC8vIFNraXAgZm9yIGlzTWV0YSAoc3lzdGVtLWdlbmVyYXRlZCBwcm9tcHRzIGxpa2Ugc2NoZWR1bGVkIHRhc2tzKSBcdTIwMTQgdGhvc2VcbiAgLy8gc2hvdWxkIHJ1biBpbnZpc2libHkuXG4gIGlmIChtb2RlID09PSAncHJvbXB0JyAmJiBpbnB1dFN0cmluZyAhPT0gbnVsbCAmJiAhaXNNZXRhKSB7XG4gICAgc2V0VXNlcklucHV0T25Qcm9jZXNzaW5nPy4oaW5wdXRTdHJpbmcpXG4gIH1cblxuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X3Byb2Nlc3NfdXNlcl9pbnB1dF9iYXNlX3N0YXJ0JylcblxuICBjb25zdCBhcHBTdGF0ZSA9IGNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NVc2VySW5wdXRCYXNlKFxuICAgIGlucHV0LFxuICAgIG1vZGUsXG4gICAgc2V0VG9vbEpTWCxcbiAgICBjb250ZXh0LFxuICAgIHBhc3RlZENvbnRlbnRzLFxuICAgIGlkZVNlbGVjdGlvbixcbiAgICBtZXNzYWdlcyxcbiAgICB1dWlkLFxuICAgIGlzQWxyZWFkeVByb2Nlc3NpbmcsXG4gICAgcXVlcnlTb3VyY2UsXG4gICAgY2FuVXNlVG9vbCxcbiAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQubW9kZSxcbiAgICBza2lwU2xhc2hDb21tYW5kcyxcbiAgICBicmlkZ2VPcmlnaW4sXG4gICAgaXNNZXRhLFxuICAgIHNraXBBdHRhY2htZW50cyxcbiAgICBwcmVFeHBhbnNpb25JbnB1dCxcbiAgKVxuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X3Byb2Nlc3NfdXNlcl9pbnB1dF9iYXNlX2VuZCcpXG5cbiAgaWYgKCFyZXN1bHQuc2hvdWxkUXVlcnkpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBFeGVjdXRlIFVzZXJQcm9tcHRTdWJtaXQgaG9va3MgYW5kIGhhbmRsZSBibG9ja2luZ1xuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X2hvb2tzX3N0YXJ0JylcbiAgY29uc3QgaW5wdXRNZXNzYWdlID0gZ2V0Q29udGVudFRleHQoaW5wdXQpIHx8ICcnXG5cbiAgZm9yIGF3YWl0IChjb25zdCBob29rUmVzdWx0IG9mIGV4ZWN1dGVVc2VyUHJvbXB0U3VibWl0SG9va3MoXG4gICAgaW5wdXRNZXNzYWdlLFxuICAgIGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dC5tb2RlLFxuICAgIGNvbnRleHQsXG4gICAgY29udGV4dC5yZXF1ZXN0UHJvbXB0LFxuICApKSB7XG4gICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IHRoZSByZXN1bHRcbiAgICBpZiAoaG9va1Jlc3VsdC5tZXNzYWdlPy50eXBlID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFJldHVybiBvbmx5IGEgc3lzdGVtLWxldmVsIGVycm9yIG1lc3NhZ2UsIGVyYXNpbmcgdGhlIG9yaWdpbmFsIHVzZXIgaW5wdXRcbiAgICBpZiAoaG9va1Jlc3VsdC5ibG9ja2luZ0Vycm9yKSB7XG4gICAgICBjb25zdCBibG9ja2luZ01lc3NhZ2UgPSBnZXRVc2VyUHJvbXB0U3VibWl0SG9va0Jsb2NraW5nTWVzc2FnZShcbiAgICAgICAgaG9va1Jlc3VsdC5ibG9ja2luZ0Vycm9yLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYW4gYXR0YWNobWVudCBtZXNzYWdlXG4gICAgICAgICAgY3JlYXRlU3lzdGVtTWVzc2FnZShcbiAgICAgICAgICAgIGAke2Jsb2NraW5nTWVzc2FnZX1cXG5cXG5PcmlnaW5hbCBwcm9tcHQ6ICR7aW5wdXR9YCxcbiAgICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgIGFsbG93ZWRUb29sczogcmVzdWx0LmFsbG93ZWRUb29scyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBwcmV2ZW50Q29udGludWF0aW9uIGlzIHNldCwgc3RvcCBwcm9jZXNzaW5nIGJ1dCBrZWVwIHRoZSBvcmlnaW5hbFxuICAgIC8vIHByb21wdCBpbiBjb250ZXh0LlxuICAgIGlmIChob29rUmVzdWx0LnByZXZlbnRDb250aW51YXRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBob29rUmVzdWx0LnN0b3BSZWFzb25cbiAgICAgICAgPyBgT3BlcmF0aW9uIHN0b3BwZWQgYnkgaG9vazogJHtob29rUmVzdWx0LnN0b3BSZWFzb259YFxuICAgICAgICA6ICdPcGVyYXRpb24gc3RvcHBlZCBieSBob29rJ1xuICAgICAgcmVzdWx0Lm1lc3NhZ2VzLnB1c2goXG4gICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgIHJlc3VsdC5zaG91bGRRdWVyeSA9IGZhbHNlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gQ29sbGVjdCBhZGRpdGlvbmFsIGNvbnRleHRzXG4gICAgaWYgKFxuICAgICAgaG9va1Jlc3VsdC5hZGRpdGlvbmFsQ29udGV4dHMgJiZcbiAgICAgIGhvb2tSZXN1bHQuYWRkaXRpb25hbENvbnRleHRzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKFxuICAgICAgICBjcmVhdGVBdHRhY2htZW50TWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogJ2hvb2tfYWRkaXRpb25hbF9jb250ZXh0JyxcbiAgICAgICAgICBjb250ZW50OiBob29rUmVzdWx0LmFkZGl0aW9uYWxDb250ZXh0cy5tYXAoYXBwbHlUcnVuY2F0aW9uKSxcbiAgICAgICAgICBob29rTmFtZTogJ1VzZXJQcm9tcHRTdWJtaXQnLFxuICAgICAgICAgIHRvb2xVc2VJRDogYGhvb2stJHtyYW5kb21VVUlEKCl9YCxcbiAgICAgICAgICBob29rRXZlbnQ6ICdVc2VyUHJvbXB0U3VibWl0JyxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVE9ETzogQ2xlYW4gdGhpcyB1cFxuICAgIGlmIChob29rUmVzdWx0Lm1lc3NhZ2UpIHtcbiAgICAgIHN3aXRjaCAoaG9va1Jlc3VsdC5tZXNzYWdlLmF0dGFjaG1lbnQudHlwZSkge1xuICAgICAgICBjYXNlICdob29rX3N1Y2Nlc3MnOlxuICAgICAgICAgIGlmICghaG9va1Jlc3VsdC5tZXNzYWdlLmF0dGFjaG1lbnQuY29udGVudCkge1xuICAgICAgICAgICAgLy8gU2tpcCBpZiB0aGVyZSBpcyBubyBjb250ZW50XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAuLi5ob29rUmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBhdHRhY2htZW50OiB7XG4gICAgICAgICAgICAgIC4uLmhvb2tSZXN1bHQubWVzc2FnZS5hdHRhY2htZW50LFxuICAgICAgICAgICAgICBjb250ZW50OiBhcHBseVRydW5jYXRpb24oaG9va1Jlc3VsdC5tZXNzYWdlLmF0dGFjaG1lbnQuY29udGVudCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQubWVzc2FnZXMucHVzaChob29rUmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9ob29rc19lbmQnKVxuXG4gIC8vIEhhcHB5IHBhdGg6IG9uUXVlcnkgd2lsbCBjbGVhciB1c2VySW5wdXRPblByb2Nlc3NpbmcgdmlhIHN0YXJ0VHJhbnNpdGlvblxuICAvLyBzbyBpdCByZXNvbHZlcyBpbiB0aGUgc2FtZSBmcmFtZSBhcyBkZWZlcnJlZE1lc3NhZ2VzIChubyBmbGlja2VyIGdhcCkuXG4gIC8vIEVycm9yIHBhdGhzIGFyZSBoYW5kbGVkIGJ5IGhhbmRsZVByb21wdFN1Ym1pdCdzIGZpbmFsbHkgYmxvY2suXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgTUFYX0hPT0tfT1VUUFVUX0xFTkdUSCA9IDEwMDAwXG5cbmZ1bmN0aW9uIGFwcGx5VHJ1bmNhdGlvbihjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoY29udGVudC5sZW5ndGggPiBNQVhfSE9PS19PVVRQVVRfTEVOR1RIKSB7XG4gICAgcmV0dXJuIGAke2NvbnRlbnQuc3Vic3RyaW5nKDAsIE1BWF9IT09LX09VVFBVVF9MRU5HVEgpfVx1MjAyNiBbb3V0cHV0IHRydW5jYXRlZCAtIGV4Y2VlZGVkICR7TUFYX0hPT0tfT1VUUFVUX0xFTkdUSH0gY2hhcmFjdGVyc11gXG4gIH1cbiAgcmV0dXJuIGNvbnRlbnRcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1VzZXJJbnB1dEJhc2UoXG4gIGlucHV0OiBzdHJpbmcgfCBBcnJheTxDb250ZW50QmxvY2tQYXJhbT4sXG4gIG1vZGU6IFByb21wdElucHV0TW9kZSxcbiAgc2V0VG9vbEpTWDogU2V0VG9vbEpTWEZuLFxuICBjb250ZXh0OiBQcm9jZXNzVXNlcklucHV0Q29udGV4dCxcbiAgcGFzdGVkQ29udGVudHM/OiBSZWNvcmQ8bnVtYmVyLCBQYXN0ZWRDb250ZW50PixcbiAgaWRlU2VsZWN0aW9uPzogSURFU2VsZWN0aW9uLFxuICBtZXNzYWdlcz86IE1lc3NhZ2VbXSxcbiAgdXVpZD86IHN0cmluZyxcbiAgaXNBbHJlYWR5UHJvY2Vzc2luZz86IGJvb2xlYW4sXG4gIHF1ZXJ5U291cmNlPzogUXVlcnlTb3VyY2UsXG4gIGNhblVzZVRvb2w/OiBDYW5Vc2VUb29sRm4sXG4gIHBlcm1pc3Npb25Nb2RlPzogUGVybWlzc2lvbk1vZGUsXG4gIHNraXBTbGFzaENvbW1hbmRzPzogYm9vbGVhbixcbiAgYnJpZGdlT3JpZ2luPzogYm9vbGVhbixcbiAgaXNNZXRhPzogYm9vbGVhbixcbiAgc2tpcEF0dGFjaG1lbnRzPzogYm9vbGVhbixcbiAgcHJlRXhwYW5zaW9uSW5wdXQ/OiBzdHJpbmcsXG4pOiBQcm9taXNlPFByb2Nlc3NVc2VySW5wdXRCYXNlUmVzdWx0PiB7XG4gIGxldCBpbnB1dFN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IHByZWNlZGluZ0lucHV0QmxvY2tzOiBDb250ZW50QmxvY2tQYXJhbVtdID0gW11cblxuICAvLyBDb2xsZWN0IGltYWdlIG1ldGFkYXRhIHRleHRzIGZvciBpc01ldGEgbWVzc2FnZVxuICBjb25zdCBpbWFnZU1ldGFkYXRhVGV4dHM6IHN0cmluZ1tdID0gW11cblxuICAvLyBOb3JtYWxpemVkIHZpZXcgb2YgYGlucHV0YCB3aXRoIGltYWdlIGJsb2NrcyByZXNpemVkLiBGb3Igc3RyaW5nIGlucHV0XG4gIC8vIHRoaXMgaXMganVzdCBgaW5wdXRgOyBmb3IgYXJyYXkgaW5wdXQgaXQncyB0aGUgcHJvY2Vzc2VkIGJsb2Nrcy4gV2UgcGFzc1xuICAvLyB0aGlzIChub3QgcmF3IGBpbnB1dGApIHRvIHByb2Nlc3NUZXh0UHJvbXB0IHNvIHJlc2l6ZWQvbm9ybWFsaXplZCBpbWFnZVxuICAvLyBibG9ja3MgYWN0dWFsbHkgcmVhY2ggdGhlIEFQSSBcdTIwMTQgb3RoZXJ3aXNlIHRoZSByZXNpemUgd29yayBhYm92ZSBpc1xuICAvLyBkaXNjYXJkZWQgZm9yIHRoZSByZWd1bGFyIHByb21wdCBwYXRoLiBBbHNvIG5vcm1hbGl6ZXMgYnJpZGdlIGlucHV0c1xuICAvLyB3aGVyZSBpT1MgbWF5IHNlbmQgYG1lZGlhVHlwZWAgaW5zdGVhZCBvZiBgbWVkaWFfdHlwZWAgKG1vYmlsZS1hcHBzIzU4MjUpLlxuICBsZXQgbm9ybWFsaXplZElucHV0OiBzdHJpbmcgfCBDb250ZW50QmxvY2tQYXJhbVtdID0gaW5wdXRcblxuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgIGlucHV0U3RyaW5nID0gaW5wdXRcbiAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9pbWFnZV9wcm9jZXNzaW5nX3N0YXJ0JylcbiAgICBjb25zdCBwcm9jZXNzZWRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10gPSBbXVxuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgaW5wdXQpIHtcbiAgICAgIGlmIChibG9jay50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZWQgPSBhd2FpdCBtYXliZVJlc2l6ZUFuZERvd25zYW1wbGVJbWFnZUJsb2NrKGJsb2NrKVxuICAgICAgICAvLyBDb2xsZWN0IGltYWdlIG1ldGFkYXRhIGZvciBpc01ldGEgbWVzc2FnZVxuICAgICAgICBpZiAocmVzaXplZC5kaW1lbnNpb25zKSB7XG4gICAgICAgICAgY29uc3QgbWV0YWRhdGFUZXh0ID0gY3JlYXRlSW1hZ2VNZXRhZGF0YVRleHQocmVzaXplZC5kaW1lbnNpb25zKVxuICAgICAgICAgIGlmIChtZXRhZGF0YVRleHQpIHtcbiAgICAgICAgICAgIGltYWdlTWV0YWRhdGFUZXh0cy5wdXNoKG1ldGFkYXRhVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc2VkQmxvY2tzLnB1c2gocmVzaXplZC5ibG9jaylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NlZEJsb2Nrcy5wdXNoKGJsb2NrKVxuICAgICAgfVxuICAgIH1cbiAgICBub3JtYWxpemVkSW5wdXQgPSBwcm9jZXNzZWRCbG9ja3NcbiAgICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X2ltYWdlX3Byb2Nlc3NpbmdfZW5kJylcbiAgICAvLyBFeHRyYWN0IHRoZSBpbnB1dCBzdHJpbmcgZnJvbSB0aGUgbGFzdCBjb250ZW50IGJsb2NrIGlmIGl0IGlzIHRleHQsXG4gICAgLy8gYW5kIGtlZXAgdHJhY2sgb2YgdGhlIHByZWNlZGluZyBjb250ZW50IGJsb2Nrc1xuICAgIGNvbnN0IGxhc3RCbG9jayA9IHByb2Nlc3NlZEJsb2Nrc1twcm9jZXNzZWRCbG9ja3MubGVuZ3RoIC0gMV1cbiAgICBpZiAobGFzdEJsb2NrPy50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGlucHV0U3RyaW5nID0gbGFzdEJsb2NrLnRleHRcbiAgICAgIHByZWNlZGluZ0lucHV0QmxvY2tzID0gcHJvY2Vzc2VkQmxvY2tzLnNsaWNlKDAsIC0xKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyA9IHByb2Nlc3NlZEJsb2Nrc1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbnB1dFN0cmluZyA9PT0gbnVsbCAmJiBtb2RlICE9PSAncHJvbXB0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihgTW9kZTogJHttb2RlfSByZXF1aXJlcyBhIHN0cmluZyBpbnB1dC5gKVxuICB9XG5cbiAgLy8gRXh0cmFjdCBhbmQgY29udmVydCBpbWFnZSBjb250ZW50IHRvIGNvbnRlbnQgYmxvY2tzIGVhcmx5XG4gIC8vIEtlZXAgdHJhY2sgb2YgSURzIGluIG9yZGVyIGZvciBtZXNzYWdlIHN0b3JhZ2VcbiAgY29uc3QgaW1hZ2VDb250ZW50cyA9IHBhc3RlZENvbnRlbnRzXG4gICAgPyBPYmplY3QudmFsdWVzKHBhc3RlZENvbnRlbnRzKS5maWx0ZXIoaXNWYWxpZEltYWdlUGFzdGUpXG4gICAgOiBbXVxuICBjb25zdCBpbWFnZVBhc3RlSWRzID0gaW1hZ2VDb250ZW50cy5tYXAoaW1nID0+IGltZy5pZClcblxuICAvLyBTdG9yZSBpbWFnZXMgdG8gZGlzayBzbyBDbGF1ZGUgY2FuIHJlZmVyZW5jZSB0aGUgcGF0aCBpbiBjb250ZXh0XG4gIC8vIChmb3IgbWFuaXB1bGF0aW9uIHdpdGggQ0xJIHRvb2xzLCB1cGxvYWRpbmcgdG8gUFJzLCBldGMuKVxuICBjb25zdCBzdG9yZWRJbWFnZVBhdGhzID0gcGFzdGVkQ29udGVudHNcbiAgICA/IGF3YWl0IHN0b3JlSW1hZ2VzKHBhc3RlZENvbnRlbnRzKVxuICAgIDogbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKVxuXG4gIC8vIFJlc2l6ZSBwYXN0ZWQgaW1hZ2VzIHRvIGVuc3VyZSB0aGV5IGZpdCB3aXRoaW4gQVBJIGxpbWl0cyAocGFyYWxsZWwgcHJvY2Vzc2luZylcbiAgcXVlcnlDaGVja3BvaW50KCdxdWVyeV9wYXN0ZWRfaW1hZ2VfcHJvY2Vzc2luZ19zdGFydCcpXG4gIGNvbnN0IGltYWdlUHJvY2Vzc2luZ1Jlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBpbWFnZUNvbnRlbnRzLm1hcChhc3luYyBwYXN0ZWRJbWFnZSA9PiB7XG4gICAgICBjb25zdCBpbWFnZUJsb2NrOiBJbWFnZUJsb2NrUGFyYW0gPSB7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIHR5cGU6ICdiYXNlNjQnLFxuICAgICAgICAgIG1lZGlhX3R5cGU6IChwYXN0ZWRJbWFnZS5tZWRpYVR5cGUgfHxcbiAgICAgICAgICAgICdpbWFnZS9wbmcnKSBhcyBCYXNlNjRJbWFnZVNvdXJjZVsnbWVkaWFfdHlwZSddLFxuICAgICAgICAgIGRhdGE6IHBhc3RlZEltYWdlLmNvbnRlbnQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICBsb2dFdmVudCgndGVuZ3VfcGFzdGVkX2ltYWdlX3Jlc2l6ZV9hdHRlbXB0Jywge1xuICAgICAgICBvcmlnaW5hbF9zaXplX2J5dGVzOiBwYXN0ZWRJbWFnZS5jb250ZW50Lmxlbmd0aCxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXNpemVkID0gYXdhaXQgbWF5YmVSZXNpemVBbmREb3duc2FtcGxlSW1hZ2VCbG9jayhpbWFnZUJsb2NrKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzaXplZCxcbiAgICAgICAgb3JpZ2luYWxEaW1lbnNpb25zOiBwYXN0ZWRJbWFnZS5kaW1lbnNpb25zLFxuICAgICAgICBzb3VyY2VQYXRoOlxuICAgICAgICAgIHBhc3RlZEltYWdlLnNvdXJjZVBhdGggPz8gc3RvcmVkSW1hZ2VQYXRocy5nZXQocGFzdGVkSW1hZ2UuaWQpLFxuICAgICAgfVxuICAgIH0pLFxuICApXG4gIC8vIENvbGxlY3QgcmVzdWx0cyBwcmVzZXJ2aW5nIG9yZGVyXG4gIGNvbnN0IGltYWdlQ29udGVudEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSA9IFtdXG4gIGZvciAoY29uc3Qge1xuICAgIHJlc2l6ZWQsXG4gICAgb3JpZ2luYWxEaW1lbnNpb25zLFxuICAgIHNvdXJjZVBhdGgsXG4gIH0gb2YgaW1hZ2VQcm9jZXNzaW5nUmVzdWx0cykge1xuICAgIC8vIENvbGxlY3QgaW1hZ2UgbWV0YWRhdGEgZm9yIGlzTWV0YSBtZXNzYWdlIChwcmVmZXIgcmVzaXplZCBkaW1lbnNpb25zKVxuICAgIGlmIChyZXNpemVkLmRpbWVuc2lvbnMpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhVGV4dCA9IGNyZWF0ZUltYWdlTWV0YWRhdGFUZXh0KFxuICAgICAgICByZXNpemVkLmRpbWVuc2lvbnMsXG4gICAgICAgIHNvdXJjZVBhdGgsXG4gICAgICApXG4gICAgICBpZiAobWV0YWRhdGFUZXh0KSB7XG4gICAgICAgIGltYWdlTWV0YWRhdGFUZXh0cy5wdXNoKG1ldGFkYXRhVGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGltZW5zaW9ucykge1xuICAgICAgLy8gRmFsbCBiYWNrIHRvIG9yaWdpbmFsIGRpbWVuc2lvbnMgaWYgcmVzaXplIGRpZG4ndCBwcm92aWRlIHRoZW1cbiAgICAgIGNvbnN0IG1ldGFkYXRhVGV4dCA9IGNyZWF0ZUltYWdlTWV0YWRhdGFUZXh0KFxuICAgICAgICBvcmlnaW5hbERpbWVuc2lvbnMsXG4gICAgICAgIHNvdXJjZVBhdGgsXG4gICAgICApXG4gICAgICBpZiAobWV0YWRhdGFUZXh0KSB7XG4gICAgICAgIGltYWdlTWV0YWRhdGFUZXh0cy5wdXNoKG1ldGFkYXRhVGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNvdXJjZVBhdGgpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBzb3VyY2UgcGF0aCBidXQgbm8gZGltZW5zaW9ucywgc3RpbGwgYWRkIHNvdXJjZSBpbmZvXG4gICAgICBpbWFnZU1ldGFkYXRhVGV4dHMucHVzaChgW0ltYWdlIHNvdXJjZTogJHtzb3VyY2VQYXRofV1gKVxuICAgIH1cbiAgICBpbWFnZUNvbnRlbnRCbG9ja3MucHVzaChyZXNpemVkLmJsb2NrKVxuICB9XG4gIHF1ZXJ5Q2hlY2twb2ludCgncXVlcnlfcGFzdGVkX2ltYWdlX3Byb2Nlc3NpbmdfZW5kJylcblxuICAvLyBCcmlkZ2Utc2FmZSBzbGFzaCBjb21tYW5kIG92ZXJyaWRlOiBtb2JpbGUvd2ViIGNsaWVudHMgc2V0IGJyaWRnZU9yaWdpblxuICAvLyB3aXRoIHNraXBTbGFzaENvbW1hbmRzIHN0aWxsIHRydWUgKGRlZmVuc2UtaW4tZGVwdGggYWdhaW5zdCBleGl0IHdvcmRzIGFuZFxuICAvLyBpbW1lZGlhdGUtY29tbWFuZCBmYXN0IHBhdGhzKS4gUmVzb2x2ZSB0aGUgY29tbWFuZCBoZXJlIFx1MjAxNCBpZiBpdCBwYXNzZXNcbiAgLy8gaXNCcmlkZ2VTYWZlQ29tbWFuZCwgY2xlYXIgdGhlIHNraXAgc28gdGhlIGdhdGUgYmVsb3cgb3BlbnMuIElmIGl0J3MgYVxuICAvLyBrbm93bi1idXQtdW5zYWZlIGNvbW1hbmQgKGxvY2FsLWpzeCBVSSBvciB0ZXJtaW5hbC1vbmx5KSwgc2hvcnQtY2lyY3VpdFxuICAvLyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIHJhdGhlciB0aGFuIGxldHRpbmcgdGhlIG1vZGVsIHNlZSByYXcgXCIvY29uZmlnXCIuXG4gIGxldCBlZmZlY3RpdmVTa2lwU2xhc2ggPSBza2lwU2xhc2hDb21tYW5kc1xuICBpZiAoYnJpZGdlT3JpZ2luICYmIGlucHV0U3RyaW5nICE9PSBudWxsICYmIGlucHV0U3RyaW5nLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlU2xhc2hDb21tYW5kKGlucHV0U3RyaW5nKVxuICAgIGNvbnN0IGNtZCA9IHBhcnNlZFxuICAgICAgPyBmaW5kQ29tbWFuZChwYXJzZWQuY29tbWFuZE5hbWUsIGNvbnRleHQub3B0aW9ucy5jb21tYW5kcylcbiAgICAgIDogdW5kZWZpbmVkXG4gICAgaWYgKGNtZCkge1xuICAgICAgaWYgKGlzQnJpZGdlU2FmZUNvbW1hbmQoY21kKSkge1xuICAgICAgICBlZmZlY3RpdmVTa2lwU2xhc2ggPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbXNnID0gYC8ke2dldENvbW1hbmROYW1lKGNtZCl9IGlzbid0IGF2YWlsYWJsZSBvdmVyIFJlbW90ZSBDb250cm9sLmBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiBpbnB1dFN0cmluZywgdXVpZCB9KSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbW1hbmRJbnB1dE1lc3NhZ2UoXG4gICAgICAgICAgICAgIGA8bG9jYWwtY29tbWFuZC1zdGRvdXQ+JHttc2d9PC9sb2NhbC1jb21tYW5kLXN0ZG91dD5gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgICAgICByZXN1bHRUZXh0OiBtc2csXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVW5rbm93biAvZm9vIG9yIHVucGFyc2VhYmxlIFx1MjAxNCBmYWxsIHRocm91Z2ggdG8gcGxhaW4gdGV4dCwgc2FtZSBhc1xuICAgIC8vIHByZS0jMTkxMzQuIEEgbW9iaWxlIHVzZXIgdHlwaW5nIFwiL3NocnVnXCIgc2hvdWxkbid0IHNlZSBcIlVua25vd24gc2tpbGxcIi5cbiAgfVxuXG4gIC8vIFVsdHJhcGxhbiBrZXl3b3JkIFx1MjAxNCByb3V0ZSB0aHJvdWdoIC91bHRyYXBsYW4uIERldGVjdCBvbiB0aGVcbiAgLy8gcHJlLWV4cGFuc2lvbiBpbnB1dCBzbyBwYXN0ZWQgY29udGVudCBjb250YWluaW5nIHRoZSB3b3JkIGNhbm5vdFxuICAvLyB0cmlnZ2VyIGEgQ0NSIHNlc3Npb247IHJlcGxhY2Ugd2l0aCBcInBsYW5cIiBpbiB0aGUgZXhwYW5kZWQgaW5wdXQgc29cbiAgLy8gdGhlIENDUiBwcm9tcHQgcmVjZWl2ZXMgcGFzdGUgY29udGVudHMgYW5kIHN0YXlzIGdyYW1tYXRpY2FsLiBTZWVcbiAgLy8ga2V5d29yZC50cyBmb3IgdGhlIHF1b3RlL3BhdGggZXhjbHVzaW9ucy4gSW50ZXJhY3RpdmUgcHJvbXB0IG1vZGUgK1xuICAvLyBub24tc2xhc2gtcHJlZml4ZWQgb25seTpcbiAgLy8gaGVhZGxlc3MvcHJpbnQgbW9kZSBmaWx0ZXJzIGxvY2FsLWpzeCBjb21tYW5kcyBvdXQgb2YgY29udGV4dC5vcHRpb25zLFxuICAvLyBzbyByb3V0aW5nIHRvIC91bHRyYXBsYW4gdGhlcmUgeWllbGRzIFwiVW5rbm93biBza2lsbFwiIFx1MjAxNCBhbmQgdGhlcmUncyBub1xuICAvLyByYWluYm93IGFuaW1hdGlvbiBpbiBwcmludCBtb2RlIGFueXdheS5cbiAgLy8gUnVucyBiZWZvcmUgYXR0YWNobWVudCBleHRyYWN0aW9uIHNvIHRoaXMgcGF0aCBtYXRjaGVzIHRoZSBzbGFzaC1jb21tYW5kXG4gIC8vIHBhdGggYmVsb3cgKG5vIGF3YWl0IGJldHdlZW4gc2V0VXNlcklucHV0T25Qcm9jZXNzaW5nIGFuZCBzZXRBcHBTdGF0ZSBcdTIwMTRcbiAgLy8gUmVhY3QgYmF0Y2hlcyBib3RoIGludG8gb25lIHJlbmRlciwgbm8gZmxhc2gpLlxuICBpZiAoXG4gICAgZmVhdHVyZSgnVUxUUkFQTEFOJykgJiZcbiAgICBtb2RlID09PSAncHJvbXB0JyAmJlxuICAgICFjb250ZXh0Lm9wdGlvbnMuaXNOb25JbnRlcmFjdGl2ZVNlc3Npb24gJiZcbiAgICBpbnB1dFN0cmluZyAhPT0gbnVsbCAmJlxuICAgICFlZmZlY3RpdmVTa2lwU2xhc2ggJiZcbiAgICAhaW5wdXRTdHJpbmcuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgIWNvbnRleHQuZ2V0QXBwU3RhdGUoKS51bHRyYXBsYW5TZXNzaW9uVXJsICYmXG4gICAgIWNvbnRleHQuZ2V0QXBwU3RhdGUoKS51bHRyYXBsYW5MYXVuY2hpbmcgJiZcbiAgICBoYXNVbHRyYXBsYW5LZXl3b3JkKHByZUV4cGFuc2lvbklucHV0ID8/IGlucHV0U3RyaW5nKVxuICApIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfdWx0cmFwbGFuX2tleXdvcmQnLCB7fSlcbiAgICBjb25zdCByZXdyaXR0ZW4gPSByZXBsYWNlVWx0cmFwbGFuS2V5d29yZChpbnB1dFN0cmluZykudHJpbSgpXG4gICAgY29uc3QgeyBwcm9jZXNzU2xhc2hDb21tYW5kIH0gPSBhd2FpdCBpbXBvcnQoJy4vcHJvY2Vzc1NsYXNoQ29tbWFuZC5qcycpXG4gICAgY29uc3Qgc2xhc2hSZXN1bHQgPSBhd2FpdCBwcm9jZXNzU2xhc2hDb21tYW5kKFxuICAgICAgYC91bHRyYXBsYW4gJHtyZXdyaXR0ZW59YCxcbiAgICAgIHByZWNlZGluZ0lucHV0QmxvY2tzLFxuICAgICAgaW1hZ2VDb250ZW50QmxvY2tzLFxuICAgICAgW10sXG4gICAgICBjb250ZXh0LFxuICAgICAgc2V0VG9vbEpTWCxcbiAgICAgIHV1aWQsXG4gICAgICBpc0FscmVhZHlQcm9jZXNzaW5nLFxuICAgICAgY2FuVXNlVG9vbCxcbiAgICApXG4gICAgcmV0dXJuIGFkZEltYWdlTWV0YWRhdGFNZXNzYWdlKHNsYXNoUmVzdWx0LCBpbWFnZU1ldGFkYXRhVGV4dHMpXG4gIH1cblxuICAvLyBGb3Igc2xhc2ggY29tbWFuZHMsIGF0dGFjaG1lbnRzIHdpbGwgYmUgZXh0cmFjdGVkIHdpdGhpbiBnZXRNZXNzYWdlc0ZvclNsYXNoQ29tbWFuZFxuICBjb25zdCBzaG91bGRFeHRyYWN0QXR0YWNobWVudHMgPVxuICAgICFza2lwQXR0YWNobWVudHMgJiZcbiAgICBpbnB1dFN0cmluZyAhPT0gbnVsbCAmJlxuICAgIChtb2RlICE9PSAncHJvbXB0JyB8fCBlZmZlY3RpdmVTa2lwU2xhc2ggfHwgIWlucHV0U3RyaW5nLnN0YXJ0c1dpdGgoJy8nKSlcblxuICBxdWVyeUNoZWNrcG9pbnQoJ3F1ZXJ5X2F0dGFjaG1lbnRfbG9hZGluZ19zdGFydCcpXG4gIGNvbnN0IGF0dGFjaG1lbnRNZXNzYWdlcyA9IHNob3VsZEV4dHJhY3RBdHRhY2htZW50c1xuICAgID8gYXdhaXQgdG9BcnJheShcbiAgICAgICAgZ2V0QXR0YWNobWVudE1lc3NhZ2VzKFxuICAgICAgICAgIGlucHV0U3RyaW5nLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgaWRlU2VsZWN0aW9uID8/IG51bGwsXG4gICAgICAgICAgW10sIC8vIHF1ZXVlZENvbW1hbmRzIC0gaGFuZGxlZCBieSBxdWVyeS50cyBmb3IgbWlkLXR1cm4gYXR0YWNobWVudHNcbiAgICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgICBxdWVyeVNvdXJjZSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICA6IFtdXG4gIHF1ZXJ5Q2hlY2twb2ludCgncXVlcnlfYXR0YWNobWVudF9sb2FkaW5nX2VuZCcpXG5cbiAgLy8gQmFzaCBjb21tYW5kc1xuICBpZiAoaW5wdXRTdHJpbmcgIT09IG51bGwgJiYgbW9kZSA9PT0gJ2Jhc2gnKSB7XG4gICAgY29uc3QgeyBwcm9jZXNzQmFzaENvbW1hbmQgfSA9IGF3YWl0IGltcG9ydCgnLi9wcm9jZXNzQmFzaENvbW1hbmQuanMnKVxuICAgIHJldHVybiBhZGRJbWFnZU1ldGFkYXRhTWVzc2FnZShcbiAgICAgIGF3YWl0IHByb2Nlc3NCYXNoQ29tbWFuZChcbiAgICAgICAgaW5wdXRTdHJpbmcsXG4gICAgICAgIHByZWNlZGluZ0lucHV0QmxvY2tzLFxuICAgICAgICBhdHRhY2htZW50TWVzc2FnZXMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHNldFRvb2xKU1gsXG4gICAgICApLFxuICAgICAgaW1hZ2VNZXRhZGF0YVRleHRzLFxuICAgIClcbiAgfVxuXG4gIC8vIFNsYXNoIGNvbW1hbmRzXG4gIC8vIFNraXAgZm9yIHJlbW90ZSBicmlkZ2UgbWVzc2FnZXMgXHUyMDE0IGlucHV0IGZyb20gQ0NSIGNsaWVudHMgaXMgcGxhaW4gdGV4dFxuICBpZiAoXG4gICAgaW5wdXRTdHJpbmcgIT09IG51bGwgJiZcbiAgICAhZWZmZWN0aXZlU2tpcFNsYXNoICYmXG4gICAgaW5wdXRTdHJpbmcuc3RhcnRzV2l0aCgnLycpXG4gICkge1xuICAgIGNvbnN0IHsgcHJvY2Vzc1NsYXNoQ29tbWFuZCB9ID0gYXdhaXQgaW1wb3J0KCcuL3Byb2Nlc3NTbGFzaENvbW1hbmQuanMnKVxuICAgIGNvbnN0IHNsYXNoUmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1NsYXNoQ29tbWFuZChcbiAgICAgIGlucHV0U3RyaW5nLFxuICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgICBpbWFnZUNvbnRlbnRCbG9ja3MsXG4gICAgICBhdHRhY2htZW50TWVzc2FnZXMsXG4gICAgICBjb250ZXh0LFxuICAgICAgc2V0VG9vbEpTWCxcbiAgICAgIHV1aWQsXG4gICAgICBpc0FscmVhZHlQcm9jZXNzaW5nLFxuICAgICAgY2FuVXNlVG9vbCxcbiAgICApXG4gICAgcmV0dXJuIGFkZEltYWdlTWV0YWRhdGFNZXNzYWdlKHNsYXNoUmVzdWx0LCBpbWFnZU1ldGFkYXRhVGV4dHMpXG4gIH1cblxuICAvLyBMb2cgYWdlbnQgbWVudGlvbiBxdWVyaWVzIGZvciBhbmFseXNpc1xuICBpZiAoaW5wdXRTdHJpbmcgIT09IG51bGwgJiYgbW9kZSA9PT0gJ3Byb21wdCcpIHtcbiAgICBjb25zdCB0cmltbWVkSW5wdXQgPSBpbnB1dFN0cmluZy50cmltKClcblxuICAgIGNvbnN0IGFnZW50TWVudGlvbiA9IGF0dGFjaG1lbnRNZXNzYWdlcy5maW5kKFxuICAgICAgKG0pOiBtIGlzIEF0dGFjaG1lbnRNZXNzYWdlPEFnZW50TWVudGlvbkF0dGFjaG1lbnQ+ID0+XG4gICAgICAgIG0uYXR0YWNobWVudC50eXBlID09PSAnYWdlbnRfbWVudGlvbicsXG4gICAgKVxuXG4gICAgaWYgKGFnZW50TWVudGlvbikge1xuICAgICAgY29uc3QgYWdlbnRNZW50aW9uU3RyaW5nID0gYEBhZ2VudC0ke2FnZW50TWVudGlvbi5hdHRhY2htZW50LmFnZW50VHlwZX1gXG4gICAgICBjb25zdCBpc1N1YmFnZW50T25seSA9IHRyaW1tZWRJbnB1dCA9PT0gYWdlbnRNZW50aW9uU3RyaW5nXG4gICAgICBjb25zdCBpc1ByZWZpeCA9XG4gICAgICAgIHRyaW1tZWRJbnB1dC5zdGFydHNXaXRoKGFnZW50TWVudGlvblN0cmluZykgJiYgIWlzU3ViYWdlbnRPbmx5XG5cbiAgICAgIC8vIExvZyB3aGVuZXZlciB1c2VycyB1c2UgQGFnZW50LTxuYW1lPiBzeW50YXhcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zdWJhZ2VudF9hdF9tZW50aW9uJywge1xuICAgICAgICBpc19zdWJhZ2VudF9vbmx5OiBpc1N1YmFnZW50T25seSxcbiAgICAgICAgaXNfcHJlZml4OiBpc1ByZWZpeCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gUmVndWxhciB1c2VyIHByb21wdFxuICByZXR1cm4gYWRkSW1hZ2VNZXRhZGF0YU1lc3NhZ2UoXG4gICAgcHJvY2Vzc1RleHRQcm9tcHQoXG4gICAgICBub3JtYWxpemVkSW5wdXQsXG4gICAgICBpbWFnZUNvbnRlbnRCbG9ja3MsXG4gICAgICBpbWFnZVBhc3RlSWRzLFxuICAgICAgYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgICAgdXVpZCxcbiAgICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgICAgaXNNZXRhLFxuICAgICksXG4gICAgaW1hZ2VNZXRhZGF0YVRleHRzLFxuICApXG59XG5cbi8vIEFkZHMgaW1hZ2UgbWV0YWRhdGEgdGV4dHMgYXMgaXNNZXRhIG1lc3NhZ2UgdG8gcmVzdWx0XG5mdW5jdGlvbiBhZGRJbWFnZU1ldGFkYXRhTWVzc2FnZShcbiAgcmVzdWx0OiBQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdCxcbiAgaW1hZ2VNZXRhZGF0YVRleHRzOiBzdHJpbmdbXSxcbik6IFByb2Nlc3NVc2VySW5wdXRCYXNlUmVzdWx0IHtcbiAgaWYgKGltYWdlTWV0YWRhdGFUZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0Lm1lc3NhZ2VzLnB1c2goXG4gICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgIGNvbnRlbnQ6IGltYWdlTWV0YWRhdGFUZXh0cy5tYXAodGV4dCA9PiAoeyB0eXBlOiAndGV4dCcsIHRleHQgfSkpLFxuICAgICAgICBpc01ldGE6IHRydWUsXG4gICAgICB9KSxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwgImltcG9ydCB0eXBlIHsgQ29udGVudEJsb2NrUGFyYW0gfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMnXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgc2V0UHJvbXB0SWQgfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBBdHRhY2htZW50TWVzc2FnZSxcbiAgU3lzdGVtTWVzc2FnZSxcbiAgVXNlck1lc3NhZ2UsXG59IGZyb20gJ3NyYy90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcGVybWlzc2lvbnMuanMnXG5pbXBvcnQgeyBjcmVhdGVVc2VyTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgbG9nT1RlbEV2ZW50LCByZWRhY3RJZkRpc2FibGVkIH0gZnJvbSAnLi4vdGVsZW1ldHJ5L2V2ZW50cy5qcydcbmltcG9ydCB7IHN0YXJ0SW50ZXJhY3Rpb25TcGFuIH0gZnJvbSAnLi4vdGVsZW1ldHJ5L3Nlc3Npb25UcmFjaW5nLmpzJ1xuaW1wb3J0IHtcbiAgbWF0Y2hlc0tlZXBHb2luZ0tleXdvcmQsXG4gIG1hdGNoZXNOZWdhdGl2ZUtleXdvcmQsXG59IGZyb20gJy4uL3VzZXJQcm9tcHRLZXl3b3Jkcy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NUZXh0UHJvbXB0KFxuICBpbnB1dDogc3RyaW5nIHwgQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+LFxuICBpbWFnZUNvbnRlbnRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10sXG4gIGltYWdlUGFzdGVJZHM6IG51bWJlcltdLFxuICBhdHRhY2htZW50TWVzc2FnZXM6IEF0dGFjaG1lbnRNZXNzYWdlW10sXG4gIHV1aWQ/OiBzdHJpbmcsXG4gIHBlcm1pc3Npb25Nb2RlPzogUGVybWlzc2lvbk1vZGUsXG4gIGlzTWV0YT86IGJvb2xlYW4sXG4pOiB7XG4gIG1lc3NhZ2VzOiAoVXNlck1lc3NhZ2UgfCBBdHRhY2htZW50TWVzc2FnZSB8IFN5c3RlbU1lc3NhZ2UpW11cbiAgc2hvdWxkUXVlcnk6IGJvb2xlYW5cbn0ge1xuICBjb25zdCBwcm9tcHRJZCA9IHJhbmRvbVVVSUQoKVxuICBzZXRQcm9tcHRJZChwcm9tcHRJZClcblxuICBjb25zdCB1c2VyUHJvbXB0VGV4dCA9XG4gICAgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJ1xuICAgICAgPyBpbnB1dFxuICAgICAgOiBpbnB1dC5maW5kKGJsb2NrID0+IGJsb2NrLnR5cGUgPT09ICd0ZXh0Jyk/LnRleHQgfHwgJydcbiAgc3RhcnRJbnRlcmFjdGlvblNwYW4odXNlclByb21wdFRleHQpXG5cbiAgLy8gRW1pdCB1c2VyX3Byb21wdCBPVEVMIGV2ZW50IGZvciBib3RoIHN0cmluZyAoQ0xJKSBhbmQgYXJyYXkgKFNESy9WUyBDb2RlKVxuICAvLyBpbnB1dCBzaGFwZXMuIFByZXZpb3VzbHkgZ2F0ZWQgb24gYHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZydgLCBzbyBWUyBDb2RlXG4gIC8vIHNlc3Npb25zIG5ldmVyIGVtaXR0ZWQgdXNlcl9wcm9tcHQgKGFudGhyb3BpY3MvY2xhdWRlLWNvZGUjMzMzMDEpLlxuICAvLyBGb3IgYXJyYXkgaW5wdXQsIHVzZSB0aGUgTEFTVCB0ZXh0IGJsb2NrOiBjcmVhdGVVc2VyQ29udGVudCBwdXNoZXMgdGhlXG4gIC8vIHVzZXIncyBtZXNzYWdlIGxhc3QgKGFmdGVyIGFueSA8aWRlX3NlbGVjdGlvbj4vYXR0YWNobWVudCBjb250ZXh0IGJsb2NrcyksXG4gIC8vIHNvIC5maW5kTGFzdCBnZXRzIHRoZSBhY3R1YWwgcHJvbXB0LiB1c2VyUHJvbXB0VGV4dCAoZmlyc3QgYmxvY2spIGlzIGtlcHRcbiAgLy8gdW5jaGFuZ2VkIGZvciBzdGFydEludGVyYWN0aW9uU3BhbiB0byBwcmVzZXJ2ZSBleGlzdGluZyBzcGFuIGF0dHJpYnV0ZXMuXG4gIGNvbnN0IG90ZWxQcm9tcHRUZXh0ID1cbiAgICB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnXG4gICAgICA/IGlucHV0XG4gICAgICA6IGlucHV0LmZpbmRMYXN0KGJsb2NrID0+IGJsb2NrLnR5cGUgPT09ICd0ZXh0Jyk/LnRleHQgfHwgJydcbiAgaWYgKG90ZWxQcm9tcHRUZXh0KSB7XG4gICAgdm9pZCBsb2dPVGVsRXZlbnQoJ3VzZXJfcHJvbXB0Jywge1xuICAgICAgcHJvbXB0X2xlbmd0aDogU3RyaW5nKG90ZWxQcm9tcHRUZXh0Lmxlbmd0aCksXG4gICAgICBwcm9tcHQ6IHJlZGFjdElmRGlzYWJsZWQob3RlbFByb21wdFRleHQpLFxuICAgICAgJ3Byb21wdC5pZCc6IHByb21wdElkLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBpc05lZ2F0aXZlID0gbWF0Y2hlc05lZ2F0aXZlS2V5d29yZCh1c2VyUHJvbXB0VGV4dClcbiAgY29uc3QgaXNLZWVwR29pbmcgPSBtYXRjaGVzS2VlcEdvaW5nS2V5d29yZCh1c2VyUHJvbXB0VGV4dClcbiAgbG9nRXZlbnQoJ3Rlbmd1X2lucHV0X3Byb21wdCcsIHtcbiAgICBpc19uZWdhdGl2ZTogaXNOZWdhdGl2ZSxcbiAgICBpc19rZWVwX2dvaW5nOiBpc0tlZXBHb2luZyxcbiAgfSlcblxuICAvLyBJZiB3ZSBoYXZlIHBhc3RlZCBpbWFnZXMsIGNyZWF0ZSBhIG1lc3NhZ2Ugd2l0aCBpbWFnZSBjb250ZW50XG4gIGlmIChpbWFnZUNvbnRlbnRCbG9ja3MubGVuZ3RoID4gMCkge1xuICAgIC8vIEJ1aWxkIGNvbnRlbnQ6IHRleHQgZmlyc3QsIHRoZW4gaW1hZ2VzIGJlbG93XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGlucHV0LnRyaW0oKVxuICAgICAgICAgID8gW3sgdHlwZTogJ3RleHQnIGFzIGNvbnN0LCB0ZXh0OiBpbnB1dCB9XVxuICAgICAgICAgIDogW11cbiAgICAgICAgOiBpbnB1dFxuICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgY29udGVudDogWy4uLnRleHRDb250ZW50LCAuLi5pbWFnZUNvbnRlbnRCbG9ja3NdLFxuICAgICAgdXVpZDogdXVpZCxcbiAgICAgIGltYWdlUGFzdGVJZHM6IGltYWdlUGFzdGVJZHMubGVuZ3RoID4gMCA/IGltYWdlUGFzdGVJZHMgOiB1bmRlZmluZWQsXG4gICAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICAgIGlzTWV0YTogaXNNZXRhIHx8IHVuZGVmaW5lZCxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBbdXNlck1lc3NhZ2UsIC4uLmF0dGFjaG1lbnRNZXNzYWdlc10sXG4gICAgICBzaG91bGRRdWVyeTogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICBjb25zdCB1c2VyTWVzc2FnZSA9IGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICBjb250ZW50OiBpbnB1dCxcbiAgICB1dWlkLFxuICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgIGlzTWV0YTogaXNNZXRhIHx8IHVuZGVmaW5lZCxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBbdXNlck1lc3NhZ2UsIC4uLmF0dGFjaG1lbnRNZXNzYWdlc10sXG4gICAgc2hvdWxkUXVlcnk6IHRydWUsXG4gIH1cbn1cbiIsICIvKipcbiAqIENoZWNrcyBpZiBpbnB1dCBtYXRjaGVzIG5lZ2F0aXZlIGtleXdvcmQgcGF0dGVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNOZWdhdGl2ZUtleXdvcmQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb3dlcklucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuXG4gIGNvbnN0IG5lZ2F0aXZlUGF0dGVybiA9XG4gICAgL1xcYih3dGZ8d3RofGZmc3xvbWZnfHNoaXQodHl8dGllc3QpP3xkdW1iYXNzfGhvcnJpYmxlfGF3ZnVsfHBpc3MoZWR8aW5nKT8gb2ZmfHBpZWNlIG9mIChzaGl0fGNyYXB8anVuayl8d2hhdCB0aGUgKGZ1Y2t8aGVsbCl8ZnVja2luZz8gKGJyb2tlbnx1c2VsZXNzfHRlcnJpYmxlfGF3ZnVsfGhvcnJpYmxlKXxmdWNrIHlvdXxzY3JldyAodGhpc3x5b3UpfHNvIGZydXN0cmF0aW5nfHRoaXMgc3Vja3N8ZGFtbiBpdClcXGIvXG5cbiAgcmV0dXJuIG5lZ2F0aXZlUGF0dGVybi50ZXN0KGxvd2VySW5wdXQpXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGlucHV0IG1hdGNoZXMga2VlcCBnb2luZy9jb250aW51YXRpb24gcGF0dGVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNLZWVwR29pbmdLZXl3b3JkKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG93ZXJJbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgLy8gTWF0Y2ggXCJjb250aW51ZVwiIG9ubHkgaWYgaXQncyB0aGUgZW50aXJlIHByb21wdFxuICBpZiAobG93ZXJJbnB1dCA9PT0gJ2NvbnRpbnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBNYXRjaCBcImtlZXAgZ29pbmdcIiBvciBcImdvIG9uXCIgYW55d2hlcmUgaW4gdGhlIGlucHV0XG4gIGNvbnN0IGtlZXBHb2luZ1BhdHRlcm4gPSAvXFxiKGtlZXAgZ29pbmd8Z28gb24pXFxiL1xuICByZXR1cm4ga2VlcEdvaW5nUGF0dGVybi50ZXN0KGxvd2VySW5wdXQpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNB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TUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUNBLFdBQU8sd0JBQXdCLGFBQWEsa0JBQWtCO0FBQUEsRUFDaEU7QUFHQSxNQUFJLGdCQUFnQixRQUFRLFNBQVMsVUFBVTtBQUM3QyxVQUFNLGVBQWUsWUFBWSxLQUFLO0FBRXRDLFVBQU0sZUFBZSxtQkFBbUI7QUFBQSxNQUN0QyxDQUFDLE1BQ0MsRUFBRSxXQUFXLFNBQVM7QUFBQSxJQUMxQjtBQUVBLFFBQUksY0FBYztBQUNoQixZQUFNLHFCQUFxQixVQUFVLGFBQWEsV0FBVyxTQUFTO0FBQ3RFLFlBQU0saUJBQWlCLGlCQUFpQjtBQUN4QyxZQUFNLFdBQ0osYUFBYSxXQUFXLGtCQUFrQixLQUFLLENBQUM7QUFHbEQsZUFBUyw2QkFBNkI7QUFBQSxRQUNwQyxrQkFBa0I7QUFBQSxRQUNsQixXQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFHQSxTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUdBLFNBQVMsd0JBQ1AsUUFDQSxvQkFDNEI7QUFDNUIsTUFBSSxtQkFBbUIsU0FBUyxHQUFHO0FBQ2pDLFdBQU8sU0FBUztBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsUUFDaEIsU0FBUyxtQkFBbUIsSUFBSSxXQUFTLEVBQUUsTUFBTSxRQUFRLEtBQUssRUFBRTtBQUFBLFFBQ2hFLFFBQVE7QUFBQSxNQUNWLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDsiLAogICJuYW1lcyI6IFsicmFuZG9tVVVJRCIsICJwYXRoIiwgImlzVGV4dEJsb2NrIiwgImJsb2NrIiwgInR5cGUiLCAiaXNTdW1tYXJpemVPcHRpb24iLCAib3B0aW9uIiwgIk1lc3NhZ2VTZWxlY3RvciIsICJtZXNzYWdlcyIsICJvblByZVJlc3RvcmUiLCAib25SZXN0b3JlTWVzc2FnZSIsICJvblJlc3RvcmVDb2RlIiwgIm9uU3VtbWFyaXplIiwgIm9uQ2xvc2UiLCAicHJlc2VsZWN0ZWRNZXNzYWdlIiwgImZpbGVIaXN0b3J5IiwgInVzZUFwcFN0YXRlIiwgInMiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAidXNlU3RhdGUiLCAidW5kZWZpbmVkIiwgImlzRmlsZUhpc3RvcnlFbmFibGVkIiwgImZpbGVIaXN0b3J5RW5hYmxlZCIsICJjdXJyZW50VVVJRCIsICJ1c2VNZW1vIiwgIm1lc3NhZ2VPcHRpb25zIiwgImZpbHRlciIsICJzZWxlY3RhYmxlVXNlck1lc3NhZ2VzRmlsdGVyIiwgImNyZWF0ZVVzZXJNZXNzYWdlIiwgImNvbnRlbnQiLCAidXVpZCIsICJzZWxlY3RlZEluZGV4IiwgInNldFNlbGVjdGVkSW5kZXgiLCAibGVuZ3RoIiwgImZpcnN0VmlzaWJsZUluZGV4IiwgIk1hdGgiLCAibWF4IiwgIm1pbiIsICJmbG9vciIsICJNQVhfVklTSUJMRV9NRVNTQUdFUyIsICJoYXNNZXNzYWdlc1RvU2VsZWN0IiwgIm1lc3NhZ2VUb1Jlc3RvcmUiLCAic2V0TWVzc2FnZVRvUmVzdG9yZSIsICJkaWZmU3RhdHNGb3JSZXN0b3JlIiwgInNldERpZmZTdGF0c0ZvclJlc3RvcmUiLCAidXNlRWZmZWN0IiwgImNhbmNlbGxlZCIsICJmaWxlSGlzdG9yeUdldERpZmZTdGF0cyIsICJ0aGVuIiwgInN0YXRzIiwgImlzUmVzdG9yaW5nIiwgInNldElzUmVzdG9yaW5nIiwgInJlc3RvcmluZ09wdGlvbiIsICJzZXRSZXN0b3JpbmdPcHRpb24iLCAic2VsZWN0ZWRSZXN0b3JlT3B0aW9uIiwgInNldFNlbGVjdGVkUmVzdG9yZU9wdGlvbiIsICJzdW1tYXJpemVGcm9tRmVlZGJhY2siLCAic2V0U3VtbWFyaXplRnJvbUZlZWRiYWNrIiwgInN1bW1hcml6ZVVwVG9GZWVkYmFjayIsICJzZXRTdW1tYXJpemVVcFRvRmVlZGJhY2siLCAiZ2V0UmVzdG9yZU9wdGlvbnMiLCAiY2FuUmVzdG9yZUNvZGUiLCAiYmFzZU9wdGlvbnMiLCAidmFsdWUiLCAibGFiZWwiLCAic3VtbWFyaXplSW5wdXRQcm9wcyIsICJwbGFjZWhvbGRlciIsICJpbml0aWFsVmFsdWUiLCAiYWxsb3dFbXB0eVN1Ym1pdFRvQ2FuY2VsIiwgInNob3dMYWJlbFdpdGhWYWx1ZSIsICJsYWJlbFZhbHVlU2VwYXJhdG9yIiwgInB1c2giLCAib25DaGFuZ2UiLCAibG9nRXZlbnQiLCAicmVzdG9yZUNvbnZlcnNhdGlvbkRpcmVjdGx5IiwgIm1lc3NhZ2UiLCAibG9nRXJyb3IiLCAiaGFuZGxlU2VsZWN0IiwgImluZGV4IiwgImluZGV4T2YiLCAiaW5kZXhGcm9tRW5kIiwgImluZGV4X2Zyb21fZW5kIiwgIm1lc3NhZ2VfdHlwZSIsICJpc19jdXJyZW50X3Byb21wdCIsICJpbmNsdWRlcyIsICJkaWZmU3RhdHMiLCAib25TZWxlY3RSZXN0b3JlT3B0aW9uIiwgImRpcmVjdGlvbiIsICJmZWVkYmFjayIsICJ0cmltIiwgImNvZGVFcnJvciIsICJjb252ZXJzYXRpb25FcnJvciIsICJleGl0U3RhdGUiLCAidXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIiwgImhhbmRsZUVzY2FwZSIsICJ1c2VDYWxsYmFjayIsICJtb3ZlVXAiLCAicHJldiIsICJtb3ZlRG93biIsICJqdW1wVG9Ub3AiLCAianVtcFRvQm90dG9tIiwgImhhbmRsZVNlbGVjdEN1cnJlbnQiLCAic2VsZWN0ZWQiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmdzIiwgImZpbGVIaXN0b3J5TWV0YWRhdGEiLCAic2V0RmlsZUhpc3RvcnlNZXRhZGF0YSIsICJsb2FkRmlsZUhpc3RvcnlNZXRhZGF0YSIsICJQcm9taXNlIiwgImFsbCIsICJtYXAiLCAidXNlck1lc3NhZ2UiLCAiaXRlbUluZGV4IiwgImNhblJlc3RvcmUiLCAiZmlsZUhpc3RvcnlDYW5SZXN0b3JlIiwgIm5leHRVc2VyTWVzc2FnZSIsICJhdCIsICJjb21wdXRlRGlmZlN0YXRzQmV0d2Vlbk1lc3NhZ2VzIiwgImZpbGVzQ2hhbmdlZCIsICJzaG93UGlja0xpc3QiLCAiZm9ybWF0UmVsYXRpdmVUaW1lQWdvIiwgIkRhdGUiLCAidGltZXN0YW1wIiwgImZpZ3VyZXMiLCAid2FybmluZyIsICJzbGljZSIsICJtc2ciLCAidmlzaWJsZU9wdGlvbkluZGV4IiwgIm9wdGlvbkluZGV4IiwgImlzU2VsZWN0ZWQiLCAiaXNDdXJyZW50IiwgIm1ldGFkYXRhTG9hZGVkIiwgIm1ldGFkYXRhIiwgIm51bUZpbGVzQ2hhbmdlZCIsICJwb2ludGVyIiwgImJhc2VuYW1lIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJnZXRSZXN0b3JlT3B0aW9uQ29udmVyc2F0aW9uVGV4dCIsICJSZXN0b3JlT3B0aW9uRGVzY3JpcHRpb24iLCAidDAiLCAiJCIsICJfYyIsICJzaG93Q29kZVJlc3RvcmUiLCAidDEiLCAidDIiLCAidDMiLCAidDQiLCAiUmVzdG9yZUNvZGVDb25maXJtYXRpb24iLCAiU3ltYm9sIiwgImZvciIsICJmaWxlTGFiZWwiLCAiZmlsZTEiLCAiZmlsZTIiLCAiZmlsZTFfMCIsICJEaWZmU3RhdHNUZXh0IiwgImluc2VydGlvbnMiLCAiZGVsZXRpb25zIiwgIlVzZXJNZXNzYWdlT3B0aW9uIiwgImNvbG9yIiwgImRpbUNvbG9yIiwgInBhZGRpbmdSaWdodCIsICJjb2x1bW5zIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJsYXN0QmxvY2siLCAiVDAiLCAiVDEiLCAidDUiLCAidDYiLCAiYmIwIiwgInJhd01lc3NhZ2VUZXh0IiwgInRleHQiLCAibWVzc2FnZVRleHQiLCAic3RyaXBEaXNwbGF5VGFncyIsICJpc0VtcHR5TWVzc2FnZVRleHQiLCAidDciLCAiaW5wdXQiLCAiZXh0cmFjdFRhZyIsICJDT01NQU5EX01FU1NBR0VfVEFHIiwgImNvbW1hbmRNZXNzYWdlIiwgImFyZ3MiLCAiaXNTa2lsbEZvcm1hdCIsICJCb3giLCAiVGV4dCIsICJ0cnVuY2F0ZSIsICJzcGxpdCIsICJqb2luIiwgInQ4IiwgImZyb21NZXNzYWdlSWQiLCAidG9NZXNzYWdlSWQiLCAic3RhcnRJbmRleCIsICJmaW5kSW5kZXgiLCAiZW5kSW5kZXgiLCAiaSIsICJpc1Rvb2xVc2VSZXN1bHRNZXNzYWdlIiwgInJlc3VsdCIsICJ0b29sVXNlUmVzdWx0IiwgImZpbGVQYXRoIiwgInN0cnVjdHVyZWRQYXRjaCIsICJodW5rIiwgImFkZGl0aW9ucyIsICJjb3VudCIsICJsaW5lcyIsICJsaW5lIiwgInN0YXJ0c1dpdGgiLCAicmVtb3ZhbHMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJpc1N5bnRoZXRpY01lc3NhZ2UiLCAiaXNNZXRhIiwgImlzQ29tcGFjdFN1bW1hcnkiLCAiaXNWaXNpYmxlSW5UcmFuc2NyaXB0T25seSIsICJMT0NBTF9DT01NQU5EX1NURE9VVF9UQUciLCAiTE9DQUxfQ09NTUFORF9TVERFUlJfVEFHIiwgIkJBU0hfU1RET1VUX1RBRyIsICJCQVNIX1NUREVSUl9UQUciLCAiVEFTS19OT1RJRklDQVRJT05fVEFHIiwgIlRJQ0tfVEFHIiwgIlRFQU1NQVRFX01FU1NBR0VfVEFHIiwgIm1lc3NhZ2VzQWZ0ZXJBcmVPbmx5U3ludGhldGljIiwgImZyb21JbmRleCIsICJoYXNNZWFuaW5nZnVsQ29udGVudCIsICJzb21lIiwgInJhbmRvbVVVSUQiLCAiYyIsICJyYW5kb21VVUlEIiwgInJhbmRvbVVVSUQiLCAicmFuZG9tVVVJRCIsICJ1c2VyTWVzc2FnZSIsICJyYW5kb21VVUlEIl0KfQo=
