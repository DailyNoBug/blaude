#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  calculateLayoutDimensions,
  calculateOptimalLeftWidth,
  formatModelAndBilling,
  formatWelcomeMessage,
  getLayoutMode,
  getLogoDisplayData,
  getRecentActivitySync,
  getRecentReleaseNotesSync,
  init_logoV2Utils,
  truncatePath
} from "./chunk-EYWZFAFR.mjs";
import {
  getEffectiveChannelAllowlist,
  init_channelNotification
} from "./chunk-EKES6XBX.mjs";
import {
  checkForReleaseNotesSync,
  init_releaseNotes
} from "./chunk-32FN4NML.mjs";
import {
  init_channelAllowlist,
  isChannelsEnabled
} from "./chunk-5LO3UOA7.mjs";
import {
  OverageCreditUpsell,
  createOverageCreditFeed,
  incrementOverageCreditUpsellSeenCount,
  init_OverageCreditUpsell,
  useShowOverageCreditUpsell
} from "./chunk-DT64P4MU.mjs";
import {
  AGENT_DESCRIPTIONS_THRESHOLD,
  getAgentDescriptionsTotalTokens,
  init_statusNoticeHelpers
} from "./chunk-KIQGQSDO.mjs";
import {
  PromptInputFooterSuggestions_default,
  init_PromptInputFooterSuggestions
} from "./chunk-OF3AAOLE.mjs";
import {
  ScrollBox_default,
  init_ScrollBox
} from "./chunk-W3RVSZTP.mjs";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-7BVTJXWW.mjs";
import {
  AssistantThinkingMessage,
  BACKGROUND_BASH_SUMMARY_PREFIX,
  EMPTY_STRING_SET,
  INTERRUPT_MESSAGE,
  INTERRUPT_MESSAGE_FOR_TOOL_USE,
  InVirtualListContext,
  MAX_MEMORY_CHARACTER_COUNT,
  Message,
  MessageActionsSelectedContext,
  OffscreenFreeze,
  SandboxManager,
  StreamingMarkdown,
  buildMessageLookups,
  collapseReadSearchGroups,
  createAssistantMessage,
  deriveUUID,
  extractTag,
  getDisplayMessageFromCollapsed,
  getEffortSuffix,
  getLargeMemoryFiles,
  getMcpConfigsByScope,
  getMemoryFiles,
  getMessagesAfterCompactBoundary,
  getProgressMessagesFromLookup,
  getSiblingToolUseIDsFromLookup,
  getTerminalIdeType,
  getToolSearchOrReadInfo,
  getToolUseID,
  getToolUseIDs,
  getToolUseIdsFromCollapsedGroup,
  hasAnyToolInProgress,
  hasThinkingContent,
  hasUnresolvedHooksFromLookup,
  hueToRgb,
  init_AppState,
  init_AssistantThinkingMessage,
  init_LocalShellTask,
  init_Markdown,
  init_Message,
  init_OffscreenFreeze,
  init_advisor,
  init_claudemd,
  init_collapseReadSearch,
  init_config2,
  init_dumpPrompts,
  init_effort,
  init_ide,
  init_installedPluginsManager,
  init_jetbrains,
  init_messageActions,
  init_messages2 as init_messages,
  init_proactive,
  init_prompt8 as init_prompt2,
  init_sandbox_adapter,
  init_utils2 as init_utils,
  isAdvisorBlock,
  isJetBrainsPluginInstalledCachedSync,
  isNavigableMessage,
  isNotEmptyMessage,
  isSupportedJetBrainsTerminal,
  loadInstalledPluginsV2,
  normalizeMessages,
  proactive_exports,
  prompt_exports as prompt_exports2,
  reorderMessagesInUI,
  shouldShowUserMessage,
  stripSystemReminders,
  toIDEDisplayName,
  toRGBColor,
  toolCallOf,
  useAppState
} from "./chunk-5INIV6TQ.mjs";
import {
  init_useShortcutDisplay,
  useShortcutDisplay
} from "./chunk-UPQJMBLU.mjs";
import {
  checkCachedPassesEligibility,
  formatCreditAmount,
  getCachedReferrerReward,
  getCachedRemainingPasses,
  init_referral
} from "./chunk-IVRFWWJD.mjs";
import {
  Divider,
  ModalContext,
  init_Divider,
  init_modalContext,
  init_useTerminalSize,
  useTerminalSize
} from "./chunk-36ZVP56J.mjs";
import {
  getSteps,
  incrementProjectOnboardingSeenCount,
  init_projectOnboardingState,
  shouldShowProjectOnboarding
} from "./chunk-SRAO5KUL.mjs";
import {
  init_voiceModeEnabled,
  isVoiceModeEnabled
} from "./chunk-H5UJY55C.mjs";
import {
  findToolByName,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
import {
  init_browser,
  openBrowser,
  openPath
} from "./chunk-EL6ZMCGB.mjs";
import {
  TextHoverColorContext,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ThemedText,
  init_fullscreen,
  init_ink,
  init_instances,
  init_react_compiler_runtime,
  init_useTerminalNotification,
  instances_default,
  isFullscreenEnvEnabled,
  useAnimationFrame,
  useTerminalNotification
} from "./chunk-ZFJCSCYD.mjs";
import {
  Fragment,
  Suspense,
  createContext,
  createElement,
  init_react,
  memo,
  react_default,
  use,
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore
} from "./chunk-TEJH3H3H.mjs";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-V7ZPGO35.mjs";
import {
  BLACK_CIRCLE,
  TEARDROP_ASTERISK,
  UP_ARROW,
  getAnthropicApiKeyWithSource,
  getApiKeyFromConfigOrMacOSKeychain,
  getAuthTokenSource,
  getClaudeAIOAuthTokens,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  getInitialSettings,
  getSettingsForSource,
  getSubscriptionType,
  init_auth,
  init_config,
  init_figures as init_figures2,
  init_file,
  init_growthbook,
  init_model,
  init_prompt2 as init_prompt,
  init_settings2 as init_settings,
  init_source,
  init_stringUtils,
  isClaudeAISubscriber,
  isOpus1mMergeEnabled,
  plural,
  prompt_exports,
  renderModelSetting,
  saveGlobalConfig,
  source_default
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import {
  formatNumber,
  formatRelativeTimeAgo,
  init_format,
  init_startupProfiler,
  init_stringWidth,
  stringWidth,
  truncate
} from "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  STATUS_TAG,
  SUMMARY_TAG,
  TASK_NOTIFICATION_TAG,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import {
  getDebugLogPath,
  init_debug,
  isDebugMode,
  isDebugToStdErr,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getAllowedChannels,
  getHasDevChannels,
  getIsRemoteMode,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/context/promptOverlayContext.tsx
function PromptOverlayProvider(t0) {
  const $ = c(6);
  const {
    children
  } = t0;
  const [data, setData] = useState(null);
  const [dialog, setDialog] = useState(null);
  let t1;
  if ($[0] !== children || $[1] !== dialog) {
    t1 = /* @__PURE__ */ react_default.createElement(DialogContext.Provider, { value: dialog }, children);
    $[0] = children;
    $[1] = dialog;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== data || $[4] !== t1) {
    t2 = /* @__PURE__ */ react_default.createElement(SetContext.Provider, { value: setData }, /* @__PURE__ */ react_default.createElement(SetDialogContext.Provider, { value: setDialog }, /* @__PURE__ */ react_default.createElement(DataContext.Provider, { value: data }, t1)));
    $[3] = data;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
}
function usePromptOverlay() {
  return useContext(DataContext);
}
function usePromptOverlayDialog() {
  return useContext(DialogContext);
}
function useSetPromptOverlay(data) {
  const $ = c(4);
  const set = useContext(SetContext);
  let t0;
  let t1;
  if ($[0] !== data || $[1] !== set) {
    t0 = () => {
      if (!set) {
        return;
      }
      set(data);
      return () => set(null);
    };
    t1 = [set, data];
    $[0] = data;
    $[1] = set;
    $[2] = t0;
    $[3] = t1;
  } else {
    t0 = $[2];
    t1 = $[3];
  }
  useEffect(t0, t1);
}
function useSetPromptOverlayDialog(node) {
  const $ = c(4);
  const set = useContext(SetDialogContext);
  let t0;
  let t1;
  if ($[0] !== node || $[1] !== set) {
    t0 = () => {
      if (!set) {
        return;
      }
      set(node);
      return () => set(null);
    };
    t1 = [set, node];
    $[0] = node;
    $[1] = set;
    $[2] = t0;
    $[3] = t1;
  } else {
    t0 = $[2];
    t1 = $[3];
  }
  useEffect(t0, t1);
}
var DataContext, SetContext, DialogContext, SetDialogContext;
var init_promptOverlayContext = __esm({
  "src/context/promptOverlayContext.tsx"() {
    init_react_compiler_runtime();
    init_react();
    DataContext = createContext(null);
    SetContext = createContext(null);
    DialogContext = createContext(null);
    SetDialogContext = createContext(null);
  }
});

// src/components/messages/nullRenderingAttachments.ts
function isNullRenderingAttachment(msg) {
  return msg.type === "attachment" && NULL_RENDERING_ATTACHMENT_TYPES.has(msg.attachment.type);
}
var NULL_RENDERING_TYPES, NULL_RENDERING_ATTACHMENT_TYPES;
var init_nullRenderingAttachments = __esm({
  "src/components/messages/nullRenderingAttachments.ts"() {
    NULL_RENDERING_TYPES = [
      "hook_success",
      "hook_additional_context",
      "hook_cancelled",
      "command_permissions",
      "agent_mention",
      "budget_usd",
      "critical_system_reminder",
      "edited_image_file",
      "edited_text_file",
      "opened_file_in_ide",
      "output_style",
      "plan_mode",
      "plan_mode_exit",
      "plan_mode_reentry",
      "structured_output",
      "team_context",
      "todo_reminder",
      "context_efficiency",
      "deferred_tools_delta",
      "mcp_instructions_delta",
      "companion_intro",
      "token_usage",
      "ultrathink_effort",
      "max_turns_reached",
      "task_reminder",
      "auto_mode",
      "auto_mode_exit",
      "output_token_usage",
      "pen_mode_enter",
      "pen_mode_exit",
      "verify_plan_reminder",
      "current_session_memory",
      "compaction_reminder",
      "date_change"
    ];
    NULL_RENDERING_ATTACHMENT_TYPES = new Set(NULL_RENDERING_TYPES);
  }
});

// src/components/FullscreenLayout.tsx
import { fileURLToPath } from "url";
function useUnseenDivider(messageCount) {
  const [dividerIndex, setDividerIndex] = useState(null);
  const countRef = useRef(messageCount);
  countRef.current = messageCount;
  const dividerYRef = useRef(null);
  const onRepin = useCallback(() => {
    setDividerIndex(null);
  }, []);
  const onScrollAway = useCallback((handle) => {
    const max = Math.max(0, handle.getScrollHeight() - handle.getViewportHeight());
    if (handle.getScrollTop() + handle.getPendingDelta() >= max) return;
    if (dividerYRef.current === null) {
      dividerYRef.current = handle.getScrollHeight();
      setDividerIndex(countRef.current);
    }
  }, []);
  const jumpToNew = useCallback((handle_0) => {
    if (!handle_0) return;
    handle_0.scrollToBottom();
  }, []);
  useEffect(() => {
    if (dividerIndex === null) {
      dividerYRef.current = null;
    } else if (messageCount < dividerIndex) {
      dividerYRef.current = null;
      setDividerIndex(null);
    }
  }, [messageCount, dividerIndex]);
  const shiftDivider = useCallback((indexDelta, heightDelta) => {
    setDividerIndex((idx) => idx === null ? null : idx + indexDelta);
    if (dividerYRef.current !== null) {
      dividerYRef.current += heightDelta;
    }
  }, []);
  return {
    dividerIndex,
    dividerYRef,
    onScrollAway,
    onRepin,
    jumpToNew,
    shiftDivider
  };
}
function countUnseenAssistantTurns(messages, dividerIndex) {
  let count = 0;
  let prevWasAssistant = false;
  for (let i = dividerIndex; i < messages.length; i++) {
    const m = messages[i];
    if (m.type === "progress") continue;
    if (m.type === "assistant" && !assistantHasVisibleText(m)) continue;
    const isAssistant = m.type === "assistant";
    if (isAssistant && !prevWasAssistant) count++;
    prevWasAssistant = isAssistant;
  }
  return count;
}
function assistantHasVisibleText(m) {
  if (m.type !== "assistant") return false;
  for (const b of m.message.content) {
    if (b.type === "text" && b.text.trim() !== "") return true;
  }
  return false;
}
function computeUnseenDivider(messages, dividerIndex) {
  if (dividerIndex === null) return void 0;
  let anchorIdx = dividerIndex;
  while (anchorIdx < messages.length && (messages[anchorIdx]?.type === "progress" || isNullRenderingAttachment(messages[anchorIdx]))) {
    anchorIdx++;
  }
  const uuid = messages[anchorIdx]?.uuid;
  if (!uuid) return void 0;
  const count = countUnseenAssistantTurns(messages, dividerIndex);
  return {
    firstUnseenUuid: uuid,
    count: Math.max(1, count)
  };
}
function FullscreenLayout(t0) {
  const $ = c(47);
  const {
    scrollable,
    bottom,
    overlay,
    bottomFloat,
    modal,
    modalScrollRef,
    scrollRef,
    dividerYRef,
    hidePill: t1,
    hideSticky: t2,
    newMessageCount: t3,
    onPillClick
  } = t0;
  const hidePill = t1 === void 0 ? false : t1;
  const hideSticky = t2 === void 0 ? false : t2;
  const newMessageCount = t3 === void 0 ? 0 : t3;
  const {
    rows: terminalRows,
    columns
  } = useTerminalSize();
  const [stickyPrompt, setStickyPrompt] = useState(null);
  let t4;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = {
      setStickyPrompt
    };
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  const chromeCtx = t4;
  let t5;
  if ($[1] !== scrollRef) {
    t5 = (listener) => scrollRef?.current?.subscribe(listener) ?? _temp;
    $[1] = scrollRef;
    $[2] = t5;
  } else {
    t5 = $[2];
  }
  const subscribe = t5;
  let t6;
  if ($[3] !== dividerYRef || $[4] !== scrollRef) {
    t6 = () => {
      const s = scrollRef?.current;
      const dividerY = dividerYRef?.current;
      if (!s || dividerY == null) {
        return false;
      }
      return s.getScrollTop() + s.getPendingDelta() + s.getViewportHeight() < dividerY;
    };
    $[3] = dividerYRef;
    $[4] = scrollRef;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  const pillVisible = useSyncExternalStore(subscribe, t6);
  let t7;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = [];
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  useLayoutEffect(_temp3, t7);
  if (isFullscreenEnvEnabled()) {
    const sticky = hideSticky ? null : stickyPrompt;
    const headerPrompt = sticky != null && sticky !== "clicked" && overlay == null ? sticky : null;
    const padCollapsed = sticky != null && overlay == null;
    let t82;
    if ($[7] !== headerPrompt) {
      t82 = headerPrompt && /* @__PURE__ */ react_default.createElement(StickyPromptHeader, { text: headerPrompt.text, onClick: headerPrompt.scrollTo });
      $[7] = headerPrompt;
      $[8] = t82;
    } else {
      t82 = $[8];
    }
    const t9 = padCollapsed ? 0 : 1;
    let t10;
    if ($[9] !== scrollable) {
      t10 = /* @__PURE__ */ react_default.createElement(ScrollChromeContext, { value: chromeCtx }, scrollable);
      $[9] = scrollable;
      $[10] = t10;
    } else {
      t10 = $[10];
    }
    let t11;
    if ($[11] !== overlay || $[12] !== scrollRef || $[13] !== t10 || $[14] !== t9) {
      t11 = /* @__PURE__ */ react_default.createElement(ScrollBox_default, { ref: scrollRef, flexGrow: 1, flexDirection: "column", paddingTop: t9, stickyScroll: true }, t10, overlay);
      $[11] = overlay;
      $[12] = scrollRef;
      $[13] = t10;
      $[14] = t9;
      $[15] = t11;
    } else {
      t11 = $[15];
    }
    let t12;
    if ($[16] !== hidePill || $[17] !== newMessageCount || $[18] !== onPillClick || $[19] !== overlay || $[20] !== pillVisible) {
      t12 = !hidePill && pillVisible && overlay == null && /* @__PURE__ */ react_default.createElement(NewMessagesPill, { count: newMessageCount, onClick: onPillClick });
      $[16] = hidePill;
      $[17] = newMessageCount;
      $[18] = onPillClick;
      $[19] = overlay;
      $[20] = pillVisible;
      $[21] = t12;
    } else {
      t12 = $[21];
    }
    let t13;
    if ($[22] !== bottomFloat) {
      t13 = bottomFloat != null && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { position: "absolute", bottom: 0, right: 0, opaque: true }, bottomFloat);
      $[22] = bottomFloat;
      $[23] = t13;
    } else {
      t13 = $[23];
    }
    let t14;
    if ($[24] !== t11 || $[25] !== t12 || $[26] !== t13 || $[27] !== t82) {
      t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexGrow: 1, flexDirection: "column", overflow: "hidden" }, t82, t11, t12, t13);
      $[24] = t11;
      $[25] = t12;
      $[26] = t13;
      $[27] = t82;
      $[28] = t14;
    } else {
      t14 = $[28];
    }
    let t15;
    let t16;
    if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t15 = /* @__PURE__ */ react_default.createElement(SuggestionsOverlay, null);
      t16 = /* @__PURE__ */ react_default.createElement(DialogOverlay, null);
      $[29] = t15;
      $[30] = t16;
    } else {
      t15 = $[29];
      t16 = $[30];
    }
    let t17;
    if ($[31] !== bottom) {
      t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", flexShrink: 0, width: "100%", maxHeight: "50%" }, t15, t16, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", width: "100%", flexGrow: 1, overflowY: "hidden" }, bottom));
      $[31] = bottom;
      $[32] = t17;
    } else {
      t17 = $[32];
    }
    let t18;
    if ($[33] !== columns || $[34] !== modal || $[35] !== modalScrollRef || $[36] !== terminalRows) {
      t18 = modal != null && /* @__PURE__ */ react_default.createElement(ModalContext, { value: {
        rows: terminalRows - MODAL_TRANSCRIPT_PEEK - 1,
        columns: columns - 4,
        scrollRef: modalScrollRef ?? null
      } }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { position: "absolute", bottom: 0, left: 0, right: 0, maxHeight: terminalRows - MODAL_TRANSCRIPT_PEEK, flexDirection: "column", overflow: "hidden", opaque: true }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "permission" }, "\u2594".repeat(columns))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2, flexShrink: 0, overflow: "hidden" }, modal)));
      $[33] = columns;
      $[34] = modal;
      $[35] = modalScrollRef;
      $[36] = terminalRows;
      $[37] = t18;
    } else {
      t18 = $[37];
    }
    let t19;
    if ($[38] !== t14 || $[39] !== t17 || $[40] !== t18) {
      t19 = /* @__PURE__ */ react_default.createElement(PromptOverlayProvider, null, t14, t17, t18);
      $[38] = t14;
      $[39] = t17;
      $[40] = t18;
      $[41] = t19;
    } else {
      t19 = $[41];
    }
    return t19;
  }
  let t8;
  if ($[42] !== bottom || $[43] !== modal || $[44] !== overlay || $[45] !== scrollable) {
    t8 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, scrollable, bottom, overlay, modal);
    $[42] = bottom;
    $[43] = modal;
    $[44] = overlay;
    $[45] = scrollable;
    $[46] = t8;
  } else {
    t8 = $[46];
  }
  return t8;
}
function _temp3() {
  if (!isFullscreenEnvEnabled()) {
    return;
  }
  const ink = instances_default.get(process.stdout);
  if (!ink) {
    return;
  }
  ink.onHyperlinkClick = _temp2;
  return () => {
    ink.onHyperlinkClick = void 0;
  };
}
function _temp2(url) {
  if (url.startsWith("file:")) {
    try {
      openPath(fileURLToPath(url));
    } catch {
    }
  } else {
    openBrowser(url);
  }
}
function _temp() {
}
function NewMessagesPill(t0) {
  const $ = c(10);
  const {
    count,
    onClick
  } = t0;
  const [hover, setHover] = useState(false);
  let t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => setHover(true);
    t2 = () => setHover(false);
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  const t3 = hover ? "userMessageBackgroundHover" : "userMessageBackground";
  let t4;
  if ($[2] !== count) {
    t4 = count > 0 ? `${count} new ${plural(count, "message")}` : "Jump to bottom";
    $[2] = count;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== t3 || $[5] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: t3, dimColor: true }, " ", t4, " ", figures_default.arrowDown, " ");
    $[4] = t3;
    $[5] = t4;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== onClick || $[8] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { position: "absolute", bottom: 0, left: 0, right: 0, justifyContent: "center" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { onClick, onMouseEnter: t1, onMouseLeave: t2 }, t5));
    $[7] = onClick;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  return t6;
}
function StickyPromptHeader(t0) {
  const $ = c(8);
  const {
    text,
    onClick
  } = t0;
  const [hover, setHover] = useState(false);
  const t1 = hover ? "userMessageBackgroundHover" : "userMessageBackground";
  let t2;
  let t3;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => setHover(true);
    t3 = () => setHover(false);
    $[0] = t2;
    $[1] = t3;
  } else {
    t2 = $[0];
    t3 = $[1];
  }
  let t4;
  if ($[2] !== text) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "subtle", wrap: "truncate-end" }, figures_default.pointer, " ", text);
    $[2] = text;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== onClick || $[5] !== t1 || $[6] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0, width: "100%", height: 1, paddingRight: 1, backgroundColor: t1, onClick, onMouseEnter: t2, onMouseLeave: t3 }, t4);
    $[4] = onClick;
    $[5] = t1;
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  return t5;
}
function SuggestionsOverlay() {
  const $ = c(4);
  const data = usePromptOverlay();
  if (!data || data.suggestions.length === 0) {
    return null;
  }
  let t0;
  if ($[0] !== data.maxColumnWidth || $[1] !== data.selectedSuggestion || $[2] !== data.suggestions) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { position: "absolute", bottom: "100%", left: 0, right: 0, paddingX: 2, paddingTop: 1, flexDirection: "column", opaque: true }, /* @__PURE__ */ react_default.createElement(PromptInputFooterSuggestions_default, { suggestions: data.suggestions, selectedSuggestion: data.selectedSuggestion, maxColumnWidth: data.maxColumnWidth, overlay: true }));
    $[0] = data.maxColumnWidth;
    $[1] = data.selectedSuggestion;
    $[2] = data.suggestions;
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  return t0;
}
function DialogOverlay() {
  const $ = c(2);
  const node = usePromptOverlayDialog();
  if (!node) {
    return null;
  }
  let t0;
  if ($[0] !== node) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { position: "absolute", bottom: "100%", left: 0, right: 0, opaque: true }, node);
    $[0] = node;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}
var MODAL_TRANSCRIPT_PEEK, ScrollChromeContext;
var init_FullscreenLayout = __esm({
  "src/components/FullscreenLayout.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_modalContext();
    init_promptOverlayContext();
    init_useTerminalSize();
    init_ScrollBox();
    init_instances();
    init_ink();
    init_browser();
    init_fullscreen();
    init_stringUtils();
    init_nullRenderingAttachments();
    init_PromptInputFooterSuggestions();
    MODAL_TRANSCRIPT_PEEK = 2;
    ScrollChromeContext = createContext({
      setStickyPrompt: () => {
      }
    });
  }
});

// src/utils/set.ts
function every(a, b) {
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
var init_set = __esm({
  "src/utils/set.ts"() {
  }
});

// src/utils/collapseBackgroundBashNotifications.ts
function isCompletedBackgroundBash(msg) {
  if (msg.type !== "user") return false;
  const content = msg.message.content[0];
  if (content?.type !== "text") return false;
  if (!content.text.includes(`<${TASK_NOTIFICATION_TAG}`)) return false;
  if (extractTag(content.text, STATUS_TAG) !== "completed") return false;
  return extractTag(content.text, SUMMARY_TAG)?.startsWith(
    BACKGROUND_BASH_SUMMARY_PREFIX
  ) ?? false;
}
function collapseBackgroundBashNotifications(messages, verbose) {
  if (!isFullscreenEnvEnabled()) return messages;
  if (verbose) return messages;
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isCompletedBackgroundBash(msg)) {
      let count = 0;
      while (i < messages.length && isCompletedBackgroundBash(messages[i])) {
        count++;
        i++;
      }
      if (count === 1) {
        result.push(msg);
      } else {
        result.push({
          ...msg,
          message: {
            role: "user",
            content: [
              {
                type: "text",
                text: `<${TASK_NOTIFICATION_TAG}><${STATUS_TAG}>completed</${STATUS_TAG}><${SUMMARY_TAG}>${count} background commands completed</${SUMMARY_TAG}></${TASK_NOTIFICATION_TAG}>`
              }
            ]
          }
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseBackgroundBashNotifications = __esm({
  "src/utils/collapseBackgroundBashNotifications.ts"() {
    init_xml();
    init_LocalShellTask();
    init_fullscreen();
    init_messages();
  }
});

// src/utils/collapseHookSummaries.ts
function isLabeledHookSummary(msg) {
  return msg.type === "system" && msg.subtype === "stop_hook_summary" && msg.hookLabel !== void 0;
}
function collapseHookSummaries(messages) {
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isLabeledHookSummary(msg)) {
      const label = msg.hookLabel;
      const group = [];
      while (i < messages.length) {
        const next = messages[i];
        if (!isLabeledHookSummary(next) || next.hookLabel !== label) break;
        group.push(next);
        i++;
      }
      if (group.length === 1) {
        result.push(msg);
      } else {
        result.push({
          ...msg,
          hookCount: group.reduce((sum, m) => sum + m.hookCount, 0),
          hookInfos: group.flatMap((m) => m.hookInfos),
          hookErrors: group.flatMap((m) => m.hookErrors),
          preventedContinuation: group.some((m) => m.preventedContinuation),
          hasOutput: group.some((m) => m.hasOutput),
          // Parallel tool calls' hooks overlap; max is closest to wall-clock.
          totalDurationMs: Math.max(...group.map((m) => m.totalDurationMs ?? 0))
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseHookSummaries = __esm({
  "src/utils/collapseHookSummaries.ts"() {
  }
});

// src/utils/collapseTeammateShutdowns.ts
function isTeammateShutdownAttachment(msg) {
  return msg.type === "attachment" && msg.attachment.type === "task_status" && msg.attachment.taskType === "in_process_teammate" && msg.attachment.status === "completed";
}
function collapseTeammateShutdowns(messages) {
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isTeammateShutdownAttachment(msg)) {
      let count = 0;
      while (i < messages.length && isTeammateShutdownAttachment(messages[i])) {
        count++;
        i++;
      }
      if (count === 1) {
        result.push(msg);
      } else {
        result.push({
          type: "attachment",
          uuid: msg.uuid,
          timestamp: msg.timestamp,
          attachment: {
            type: "teammate_shutdown_batch",
            count
          }
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseTeammateShutdowns = __esm({
  "src/utils/collapseTeammateShutdowns.ts"() {
  }
});

// src/utils/groupToolUses.ts
function getToolsWithGrouping(tools) {
  let cached = GROUPING_CACHE.get(tools);
  if (!cached) {
    cached = new Set(tools.filter((t) => t.renderGroupedToolUse).map((t) => t.name));
    GROUPING_CACHE.set(tools, cached);
  }
  return cached;
}
function getToolUseInfo(msg) {
  if (msg.type === "assistant" && msg.message.content[0]?.type === "tool_use") {
    const content = msg.message.content[0];
    return {
      messageId: msg.message.id,
      toolUseId: content.id,
      toolName: content.name
    };
  }
  return null;
}
function applyGrouping(messages, tools, verbose = false) {
  if (verbose) {
    return {
      messages
    };
  }
  const toolsWithGrouping = getToolsWithGrouping(tools);
  const groups = /* @__PURE__ */ new Map();
  for (const msg of messages) {
    const info = getToolUseInfo(msg);
    if (info && toolsWithGrouping.has(info.toolName)) {
      const key = `${info.messageId}:${info.toolName}`;
      const group = groups.get(key) ?? [];
      group.push(msg);
      groups.set(key, group);
    }
  }
  const validGroups = /* @__PURE__ */ new Map();
  const groupedToolUseIds = /* @__PURE__ */ new Set();
  for (const [key, group] of groups) {
    if (group.length >= 2) {
      validGroups.set(key, group);
      for (const msg of group) {
        const info = getToolUseInfo(msg);
        if (info) {
          groupedToolUseIds.add(info.toolUseId);
        }
      }
    }
  }
  const resultsByToolUseId = /* @__PURE__ */ new Map();
  for (const msg of messages) {
    if (msg.type === "user") {
      for (const content of msg.message.content) {
        if (content.type === "tool_result" && groupedToolUseIds.has(content.tool_use_id)) {
          resultsByToolUseId.set(content.tool_use_id, msg);
        }
      }
    }
  }
  const result = [];
  const emittedGroups = /* @__PURE__ */ new Set();
  for (const msg of messages) {
    const info = getToolUseInfo(msg);
    if (info) {
      const key = `${info.messageId}:${info.toolName}`;
      const group = validGroups.get(key);
      if (group) {
        if (!emittedGroups.has(key)) {
          emittedGroups.add(key);
          const firstMsg = group[0];
          const results = [];
          for (const assistantMsg of group) {
            const toolUseId = assistantMsg.message.content[0].id;
            const resultMsg = resultsByToolUseId.get(toolUseId);
            if (resultMsg) {
              results.push(resultMsg);
            }
          }
          const groupedMessage = {
            type: "grouped_tool_use",
            toolName: info.toolName,
            messages: group,
            results,
            displayMessage: firstMsg,
            uuid: `grouped-${firstMsg.uuid}`,
            timestamp: firstMsg.timestamp,
            messageId: info.messageId
          };
          result.push(groupedMessage);
        }
        continue;
      }
    }
    if (msg.type === "user") {
      const toolResults = msg.message.content.filter(
        (c2) => c2.type === "tool_result"
      );
      if (toolResults.length > 0) {
        const allGrouped = toolResults.every(
          (tr) => groupedToolUseIds.has(tr.tool_use_id)
        );
        if (allGrouped) {
          continue;
        }
      }
    }
    result.push(msg);
  }
  return { messages: result };
}
var GROUPING_CACHE;
var init_groupToolUses = __esm({
  "src/utils/groupToolUses.ts"() {
    GROUPING_CACHE = /* @__PURE__ */ new WeakMap();
  }
});

// src/utils/transcriptSearch.ts
function renderableSearchText(msg) {
  const cached = searchTextCache.get(msg);
  if (cached !== void 0) return cached;
  const result = computeSearchText(msg).toLowerCase();
  searchTextCache.set(msg, result);
  return result;
}
function computeSearchText(msg) {
  let raw = "";
  switch (msg.type) {
    case "user": {
      const c2 = msg.message.content;
      if (typeof c2 === "string") {
        raw = RENDERED_AS_SENTINEL.has(c2) ? "" : c2;
      } else {
        const parts = [];
        for (const b of c2) {
          if (b.type === "text") {
            if (!RENDERED_AS_SENTINEL.has(b.text)) parts.push(b.text);
          } else if (b.type === "tool_result") {
            parts.push(toolResultSearchText(msg.toolUseResult));
          }
        }
        raw = parts.join("\n");
      }
      break;
    }
    case "assistant": {
      const c2 = msg.message.content;
      if (Array.isArray(c2)) {
        raw = c2.flatMap((b) => {
          if (b.type === "text") return [b.text];
          if (b.type === "tool_use") return [toolUseSearchText(b.input)];
          return [];
        }).join("\n");
      }
      break;
    }
    case "attachment": {
      if (msg.attachment.type === "relevant_memories") {
        raw = msg.attachment.memories.map((m) => m.content).join("\n");
      } else if (
        // Mid-turn prompts — queued while an agent is running. Render via
        // UserTextMessage (AttachmentMessage.tsx:~348). stickyPromptText
        // (VirtualMessageList.tsx:~103) has the same guards — mirror here.
        msg.attachment.type === "queued_command" && msg.attachment.commandMode !== "task-notification" && !msg.attachment.isMeta
      ) {
        const p = msg.attachment.prompt;
        raw = typeof p === "string" ? p : p.flatMap((b) => b.type === "text" ? [b.text] : []).join("\n");
      }
      break;
    }
    case "collapsed_read_search": {
      if (msg.relevantMemories) {
        raw = msg.relevantMemories.map((m) => m.content).join("\n");
      }
      break;
    }
    default:
      break;
  }
  let t = raw;
  let open = t.indexOf("<system-reminder>");
  while (open >= 0) {
    const close = t.indexOf(SYSTEM_REMINDER_CLOSE, open);
    if (close < 0) break;
    t = t.slice(0, open) + t.slice(close + SYSTEM_REMINDER_CLOSE.length);
    open = t.indexOf("<system-reminder>");
  }
  return t;
}
function toolUseSearchText(input) {
  if (!input || typeof input !== "object") return "";
  const o = input;
  const parts = [];
  for (const k of [
    "command",
    "pattern",
    "file_path",
    "path",
    "prompt",
    "description",
    "query",
    "url",
    "skill"
    // SkillTool
  ]) {
    const v = o[k];
    if (typeof v === "string") parts.push(v);
  }
  for (const k of ["args", "files"]) {
    const v = o[k];
    if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
      parts.push(v.join(" "));
    }
  }
  return parts.join("\n");
}
function toolResultSearchText(r) {
  if (!r || typeof r !== "object") return typeof r === "string" ? r : "";
  const o = r;
  if (typeof o.stdout === "string") {
    const err = typeof o.stderr === "string" ? o.stderr : "";
    return o.stdout + (err ? "\n" + err : "");
  }
  if (o.file && typeof o.file === "object" && typeof o.file.content === "string") {
    return o.file.content;
  }
  const parts = [];
  for (const k of ["content", "output", "result", "text", "message"]) {
    const v = o[k];
    if (typeof v === "string") parts.push(v);
  }
  for (const k of ["filenames", "lines", "results"]) {
    const v = o[k];
    if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
      parts.push(v.join("\n"));
    }
  }
  return parts.join("\n");
}
var SYSTEM_REMINDER_CLOSE, RENDERED_AS_SENTINEL, searchTextCache;
var init_transcriptSearch = __esm({
  "src/utils/transcriptSearch.ts"() {
    init_messages();
    SYSTEM_REMINDER_CLOSE = "</system-reminder>";
    RENDERED_AS_SENTINEL = /* @__PURE__ */ new Set([
      INTERRUPT_MESSAGE,
      INTERRUPT_MESSAGE_FOR_TOOL_USE
    ]);
    searchTextCache = /* @__PURE__ */ new WeakMap();
  }
});

// src/components/LogoV2/Clawd.tsx
function Clawd({ pose = "default" } = {}) {
  const catPose = CAT_POSES[pose];
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, catPose.top), /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, catPose.face), /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, catPose.chin)));
}
var CAT_POSES;
var init_Clawd = __esm({
  "src/components/LogoV2/Clawd.tsx"() {
    init_react();
    init_ink();
    CAT_POSES = {
      default: {
        top: " /^^^^^\\\\ ",
        face: "(  o o  )",
        chin: " /  ^  \\\\ "
      },
      "look-left": {
        top: " /^^^^^\\\\ ",
        face: "( o o   )",
        chin: " /  ^  \\\\ "
      },
      "look-right": {
        top: " /^^^^^\\\\ ",
        face: "(   o o )",
        chin: " /  ^  \\\\ "
      },
      "arms-up": {
        top: " /^^~^^\\\\ ",
        face: "(  o o  )",
        chin: " / \\_/ \\\\ "
      }
    };
  }
});

// src/components/LogoV2/Feed.tsx
function calculateFeedWidth(config) {
  const {
    title,
    lines,
    footer,
    emptyMessage,
    customContent
  } = config;
  let maxWidth = stringWidth(title);
  if (customContent !== void 0) {
    maxWidth = Math.max(maxWidth, customContent.width);
  } else if (lines.length === 0 && emptyMessage) {
    maxWidth = Math.max(maxWidth, stringWidth(emptyMessage));
  } else {
    const gap = "  ";
    const maxTimestampWidth = Math.max(0, ...lines.map((line) => line.timestamp ? stringWidth(line.timestamp) : 0));
    for (const line of lines) {
      const timestampWidth = maxTimestampWidth > 0 ? maxTimestampWidth : 0;
      const lineWidth = stringWidth(line.text) + (timestampWidth > 0 ? timestampWidth + gap.length : 0);
      maxWidth = Math.max(maxWidth, lineWidth);
    }
  }
  if (footer) {
    maxWidth = Math.max(maxWidth, stringWidth(footer));
  }
  return maxWidth;
}
function Feed(t0) {
  const $ = c(15);
  const {
    config,
    actualWidth
  } = t0;
  const {
    title,
    lines,
    footer,
    emptyMessage,
    customContent
  } = config;
  let t1;
  if ($[0] !== lines) {
    t1 = Math.max(0, ...lines.map(_temp4));
    $[0] = lines;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const maxTimestampWidth = t1;
  let t2;
  if ($[2] !== title) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "claude" }, title);
    $[2] = title;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== actualWidth || $[5] !== customContent || $[6] !== emptyMessage || $[7] !== footer || $[8] !== lines || $[9] !== maxTimestampWidth) {
    t3 = customContent ? /* @__PURE__ */ createElement(Fragment, null, customContent.content, footer && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, truncate(footer, actualWidth))) : lines.length === 0 && emptyMessage ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncate(emptyMessage, actualWidth)) : /* @__PURE__ */ createElement(Fragment, null, lines.map((line_0, index) => {
      const textWidth = Math.max(10, actualWidth - (maxTimestampWidth > 0 ? maxTimestampWidth + 2 : 0));
      return /* @__PURE__ */ createElement(ThemedText, { key: index }, maxTimestampWidth > 0 && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, (line_0.timestamp || "").padEnd(maxTimestampWidth)), "  "), /* @__PURE__ */ createElement(ThemedText, null, truncate(line_0.text, textWidth)));
    }), footer && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, truncate(footer, actualWidth)));
    $[4] = actualWidth;
    $[5] = customContent;
    $[6] = emptyMessage;
    $[7] = footer;
    $[8] = lines;
    $[9] = maxTimestampWidth;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  let t4;
  if ($[11] !== actualWidth || $[12] !== t2 || $[13] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", width: actualWidth }, t2, t3);
    $[11] = actualWidth;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  return t4;
}
function _temp4(line) {
  return line.timestamp ? stringWidth(line.timestamp) : 0;
}
var init_Feed = __esm({
  "src/components/LogoV2/Feed.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_stringWidth();
    init_ink();
    init_format();
  }
});

// src/components/LogoV2/FeedColumn.tsx
function FeedColumn(t0) {
  const $ = c(10);
  const {
    feeds,
    maxWidth
  } = t0;
  let t1;
  if ($[0] !== feeds) {
    const feedWidths = feeds.map(_temp5);
    t1 = Math.max(...feedWidths);
    $[0] = feeds;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const maxOfAllFeeds = t1;
  const actualWidth = Math.min(maxOfAllFeeds, maxWidth);
  let t2;
  if ($[2] !== actualWidth || $[3] !== feeds) {
    let t32;
    if ($[5] !== actualWidth || $[6] !== feeds.length) {
      t32 = (feed_0, index) => /* @__PURE__ */ createElement(Fragment, { key: index }, /* @__PURE__ */ createElement(Feed, { config: feed_0, actualWidth }), index < feeds.length - 1 && /* @__PURE__ */ createElement(Divider, { color: "claude", width: actualWidth }));
      $[5] = actualWidth;
      $[6] = feeds.length;
      $[7] = t32;
    } else {
      t32 = $[7];
    }
    t2 = feeds.map(t32);
    $[2] = actualWidth;
    $[3] = feeds;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[8] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t2);
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function _temp5(feed) {
  return calculateFeedWidth(feed);
}
var init_FeedColumn = __esm({
  "src/components/LogoV2/FeedColumn.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_Divider();
    init_Feed();
  }
});

// src/components/LogoV2/feedConfigs.tsx
import { homedir } from "os";
function createRecentActivityFeed(activities) {
  const lines = activities.map((log) => {
    const time = formatRelativeTimeAgo(log.modified);
    const description = log.summary && log.summary !== "No prompt" ? log.summary : log.firstPrompt;
    return {
      text: description || "",
      timestamp: time
    };
  });
  return {
    title: "Recent activity",
    lines,
    footer: lines.length > 0 ? "/resume for more" : void 0,
    emptyMessage: "No recent activity"
  };
}
function createWhatsNewFeed(releaseNotes) {
  const lines = releaseNotes.map((note) => {
    if (false) {
      const match = note.match(/^(\d+\s+\w+\s+ago)\s+(.+)$/);
      if (match) {
        return {
          timestamp: match[1],
          text: match[2] || ""
        };
      }
    }
    return {
      text: note
    };
  });
  const emptyMessage = false ? "Unable to fetch latest blaude internal commits" : "Check the Blaude changelog for updates";
  return {
    title: false ? "What's new [ANT-ONLY: Latest CC commits]" : "What's new",
    lines,
    footer: lines.length > 0 ? "/release-notes for more" : void 0,
    emptyMessage
  };
}
function createProjectOnboardingFeed(steps) {
  const enabledSteps = steps.filter(({
    isEnabled
  }) => isEnabled).sort((a, b) => Number(a.isComplete) - Number(b.isComplete));
  const lines = enabledSteps.map(({
    text,
    isComplete
  }) => {
    const checkmark = isComplete ? `${figures_default.tick} ` : "";
    return {
      text: `${checkmark}${text}`
    };
  });
  const warningText = getCwd() === homedir() ? "Note: You have launched blaude in your home directory. For the best experience, launch it in a project directory instead." : void 0;
  if (warningText) {
    lines.push({
      text: warningText
    });
  }
  return {
    title: "Tips for getting started",
    lines
  };
}
function createGuestPassesFeed() {
  const reward = getCachedReferrerReward();
  const subtitle = reward ? `Share Blaude and earn ${formatCreditAmount(reward)} of extra usage` : "Share Blaude with friends";
  return {
    title: "3 guest passes",
    lines: [],
    customContent: {
      content: /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedBox_default, { marginY: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "[\u273B] [\u273B] [\u273B]")), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, subtitle)),
      width: 48
    },
    footer: "/passes"
  };
}
var init_feedConfigs = __esm({
  "src/components/LogoV2/feedConfigs.tsx"() {
    init_figures();
    init_react();
    init_ink();
    init_referral();
    init_cwd();
    init_format();
  }
});

// src/components/LogoV2/AnimatedClawd.tsx
function hold(pose, offset, frames) {
  return Array.from({
    length: frames
  }, () => ({
    pose,
    offset
  }));
}
function AnimatedClawd() {
  const $ = c(8);
  const {
    pose,
    bounceOffset,
    onClick
  } = useClawdAnimation();
  let t0;
  if ($[0] !== pose) {
    t0 = /* @__PURE__ */ createElement(Clawd, { pose });
    $[0] = pose;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== bounceOffset || $[3] !== t0) {
    t1 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: bounceOffset, flexShrink: 0 }, t0);
    $[2] = bounceOffset;
    $[3] = t0;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== onClick || $[6] !== t1) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { height: CLAWD_HEIGHT, flexDirection: "column", onClick }, t1);
    $[5] = onClick;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function useClawdAnimation() {
  const [reducedMotion] = useState(() => getInitialSettings().prefersReducedMotion ?? false);
  const [frameIndex, setFrameIndex] = useState(-1);
  const sequenceRef = useRef(JUMP_WAVE);
  const onClick = () => {
    if (reducedMotion || frameIndex !== -1) return;
    sequenceRef.current = CLICK_ANIMATIONS[Math.floor(Math.random() * CLICK_ANIMATIONS.length)];
    setFrameIndex(0);
  };
  useEffect(() => {
    if (frameIndex === -1) return;
    if (frameIndex >= sequenceRef.current.length) {
      setFrameIndex(-1);
      return;
    }
    const timer = setTimeout(setFrameIndex, FRAME_MS, incrementFrame);
    return () => clearTimeout(timer);
  }, [frameIndex]);
  const seq = sequenceRef.current;
  const current = frameIndex >= 0 && frameIndex < seq.length ? seq[frameIndex] : IDLE;
  return {
    pose: current.pose,
    bounceOffset: current.offset,
    onClick
  };
}
var JUMP_WAVE, LOOK_AROUND, CLICK_ANIMATIONS, IDLE, FRAME_MS, incrementFrame, CLAWD_HEIGHT;
var init_AnimatedClawd = __esm({
  "src/components/LogoV2/AnimatedClawd.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_ink();
    init_settings();
    init_Clawd();
    JUMP_WAVE = [
      ...hold("default", 1, 2),
      // crouch
      ...hold("arms-up", 0, 3),
      // spring!
      ...hold("default", 0, 1),
      ...hold("default", 1, 2),
      // crouch again
      ...hold("arms-up", 0, 3),
      // spring!
      ...hold("default", 0, 1)
    ];
    LOOK_AROUND = [...hold("look-right", 0, 5), ...hold("look-left", 0, 5), ...hold("default", 0, 1)];
    CLICK_ANIMATIONS = [JUMP_WAVE, LOOK_AROUND];
    IDLE = {
      pose: "default",
      offset: 0
    };
    FRAME_MS = 60;
    incrementFrame = (i) => i + 1;
    CLAWD_HEIGHT = 3;
  }
});

// src/components/LogoV2/GuestPassesUpsell.tsx
function resetIfPassesRefreshed() {
  const remaining = getCachedRemainingPasses();
  if (remaining == null || remaining <= 0) return;
  const config = getGlobalConfig();
  const lastSeen = config.passesLastSeenRemaining ?? 0;
  if (remaining > lastSeen) {
    saveGlobalConfig((prev) => ({
      ...prev,
      passesUpsellSeenCount: 0,
      hasVisitedPasses: false,
      passesLastSeenRemaining: remaining
    }));
  }
}
function shouldShowGuestPassesUpsell() {
  const {
    eligible,
    hasCache
  } = checkCachedPassesEligibility();
  if (!eligible || !hasCache) return false;
  resetIfPassesRefreshed();
  const config = getGlobalConfig();
  if ((config.passesUpsellSeenCount ?? 0) >= 3) return false;
  if (config.hasVisitedPasses) return false;
  return true;
}
function useShowGuestPassesUpsell() {
  const [show] = useState(_temp6);
  return show;
}
function _temp6() {
  return shouldShowGuestPassesUpsell();
}
function incrementGuestPassesSeenCount() {
  let newCount = 0;
  saveGlobalConfig((prev) => {
    newCount = (prev.passesUpsellSeenCount ?? 0) + 1;
    return {
      ...prev,
      passesUpsellSeenCount: newCount
    };
  });
  logEvent("tengu_guest_passes_upsell_shown", {
    seen_count: newCount
  });
}
function GuestPassesUpsell() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const reward = getCachedReferrerReward();
    t0 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "[\u273B]"), " ", /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "[\u273B]"), " ", /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "[\u273B]"), " \xB7", " ", reward ? `Share Blaude and earn ${formatCreditAmount(reward)} of extra usage \xB7 /passes` : "3 guest passes at /passes");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
var init_GuestPassesUpsell = __esm({
  "src/components/LogoV2/GuestPassesUpsell.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_ink();
    init_analytics();
    init_referral();
    init_config();
  }
});

// src/components/LogoV2/CondensedLogo.tsx
function CondensedLogo() {
  const $ = c(29);
  const {
    columns
  } = useTerminalSize();
  const agent = useAppState(_temp7);
  const effortValue = useAppState(_temp22);
  const model = useMainLoopModel();
  const modelDisplayName = renderModelSetting(model);
  const {
    version,
    cwd,
    billingType,
    agentName: agentNameFromSettings
  } = getLogoDisplayData();
  const agentName = agent ?? agentNameFromSettings;
  const showGuestPassesUpsell = useShowGuestPassesUpsell();
  const showOverageCreditUpsell = useShowOverageCreditUpsell();
  let t0;
  let t1;
  if ($[0] !== showGuestPassesUpsell) {
    t0 = () => {
      if (showGuestPassesUpsell) {
        incrementGuestPassesSeenCount();
      }
    };
    t1 = [showGuestPassesUpsell];
    $[0] = showGuestPassesUpsell;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);
  let t2;
  let t3;
  if ($[3] !== showGuestPassesUpsell || $[4] !== showOverageCreditUpsell) {
    t2 = () => {
      if (showOverageCreditUpsell && !showGuestPassesUpsell) {
        incrementOverageCreditUpsellSeenCount();
      }
    };
    t3 = [showOverageCreditUpsell, showGuestPassesUpsell];
    $[3] = showGuestPassesUpsell;
    $[4] = showOverageCreditUpsell;
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  useEffect(t2, t3);
  const textWidth = Math.max(columns - 15, 20);
  const truncatedVersion = truncate(version, Math.max(textWidth - 13, 6));
  const effortSuffix = getEffortSuffix(model, effortValue);
  const {
    shouldSplit,
    truncatedModel,
    truncatedBilling
  } = formatModelAndBilling(modelDisplayName + effortSuffix, billingType, textWidth);
  const cwdAvailableWidth = agentName ? textWidth - 1 - stringWidth(agentName) - 3 : textWidth;
  const truncatedCwd = truncatePath(cwd, Math.max(cwdAvailableWidth, 10));
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = isFullscreenEnvEnabled() ? /* @__PURE__ */ createElement(AnimatedClawd, null) : /* @__PURE__ */ createElement(Clawd, null);
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Blaude");
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== truncatedVersion) {
    t6 = /* @__PURE__ */ createElement(ThemedText, null, t5, " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "v", truncatedVersion));
    $[9] = truncatedVersion;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== shouldSplit || $[12] !== truncatedBilling || $[13] !== truncatedModel) {
    t7 = shouldSplit ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncatedModel), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncatedBilling)) : /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncatedModel, " \xB7 ", truncatedBilling);
    $[11] = shouldSplit;
    $[12] = truncatedBilling;
    $[13] = truncatedModel;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  const t8 = agentName ? `@${agentName} \xB7 ${truncatedCwd}` : truncatedCwd;
  let t9;
  if ($[15] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t8);
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  let t10;
  if ($[17] !== showGuestPassesUpsell) {
    t10 = showGuestPassesUpsell && /* @__PURE__ */ createElement(GuestPassesUpsell, null);
    $[17] = showGuestPassesUpsell;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  let t11;
  if ($[19] !== showGuestPassesUpsell || $[20] !== showOverageCreditUpsell || $[21] !== textWidth) {
    t11 = !showGuestPassesUpsell && showOverageCreditUpsell && /* @__PURE__ */ createElement(OverageCreditUpsell, { maxWidth: textWidth, twoLine: true });
    $[19] = showGuestPassesUpsell;
    $[20] = showOverageCreditUpsell;
    $[21] = textWidth;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== t10 || $[24] !== t11 || $[25] !== t6 || $[26] !== t7 || $[27] !== t9) {
    t12 = /* @__PURE__ */ createElement(OffscreenFreeze, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 2, alignItems: "center" }, t4, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t6, t7, t9, t10, t11)));
    $[23] = t10;
    $[24] = t11;
    $[25] = t6;
    $[26] = t7;
    $[27] = t9;
    $[28] = t12;
  } else {
    t12 = $[28];
  }
  return t12;
}
function _temp22(s_0) {
  return s_0.effortValue;
}
function _temp7(s) {
  return s.agent;
}
var init_CondensedLogo = __esm({
  "src/components/LogoV2/CondensedLogo.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_useMainLoopModel();
    init_useTerminalSize();
    init_stringWidth();
    init_ink();
    init_AppState();
    init_effort();
    init_format();
    init_fullscreen();
    init_logoV2Utils();
    init_model();
    init_OffscreenFreeze();
    init_AnimatedClawd();
    init_Clawd();
    init_GuestPassesUpsell();
    init_OverageCreditUpsell();
  }
});

// src/components/LogoV2/EmergencyTip.tsx
function EmergencyTip() {
  const tip = useMemo(getTipOfFeed, []);
  const lastShownTip = useMemo(() => getGlobalConfig().lastShownEmergencyTip, []);
  const shouldShow = tip.tip && tip.tip !== lastShownTip;
  useEffect(() => {
    if (shouldShow) {
      saveGlobalConfig((current) => {
        if (current.lastShownEmergencyTip === tip.tip) return current;
        return {
          ...current,
          lastShownEmergencyTip: tip.tip
        };
      });
    }
  }, [shouldShow, tip.tip]);
  if (!shouldShow) {
    return null;
  }
  return /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { ...tip.color === "warning" ? {
    color: "warning"
  } : tip.color === "error" ? {
    color: "error"
  } : {
    dimColor: true
  } }, tip.tip));
}
function getTipOfFeed() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(CONFIG_NAME, DEFAULT_TIP);
}
var CONFIG_NAME, DEFAULT_TIP;
var init_EmergencyTip = __esm({
  "src/components/LogoV2/EmergencyTip.tsx"() {
    init_react();
    init_react();
    init_ink();
    init_growthbook();
    init_config();
    CONFIG_NAME = "tengu-top-of-feed-tip";
    DEFAULT_TIP = {
      tip: "",
      color: "dim"
    };
  }
});

// src/components/LogoV2/AnimatedAsterisk.tsx
function AnimatedAsterisk({
  char = TEARDROP_ASTERISK
}) {
  const [reducedMotion] = useState(() => getInitialSettings().prefersReducedMotion ?? false);
  const [done, setDone] = useState(reducedMotion);
  const startTimeRef = useRef(null);
  const [ref, time] = useAnimationFrame(done ? null : 50);
  useEffect(() => {
    if (done) return;
    const t = setTimeout(setDone, TOTAL_ANIMATION_MS, true);
    return () => clearTimeout(t);
  }, [done]);
  if (done) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { ref }, /* @__PURE__ */ createElement(ThemedText, { color: SETTLED_GREY }, char));
  }
  if (startTimeRef.current === null) {
    startTimeRef.current = time;
  }
  const elapsed = time - startTimeRef.current;
  const hue = elapsed / SWEEP_DURATION_MS * 360 % 360;
  return /* @__PURE__ */ createElement(ThemedBox_default, { ref }, /* @__PURE__ */ createElement(ThemedText, { color: toRGBColor(hueToRgb(hue)) }, char));
}
var SWEEP_DURATION_MS, SWEEP_COUNT, TOTAL_ANIMATION_MS, SETTLED_GREY;
var init_AnimatedAsterisk = __esm({
  "src/components/LogoV2/AnimatedAsterisk.tsx"() {
    init_react();
    init_react();
    init_figures2();
    init_ink();
    init_settings();
    init_utils();
    SWEEP_DURATION_MS = 1500;
    SWEEP_COUNT = 2;
    TOTAL_ANIMATION_MS = SWEEP_DURATION_MS * SWEEP_COUNT;
    SETTLED_GREY = toRGBColor({
      r: 153,
      g: 153,
      b: 153
    });
  }
});

// src/components/LogoV2/Opus1mMergeNotice.tsx
function shouldShowOpus1mMergeNotice() {
  return isOpus1mMergeEnabled() && (getGlobalConfig().opus1mMergeNoticeSeenCount ?? 0) < MAX_SHOW_COUNT;
}
function Opus1mMergeNotice() {
  const $ = c(4);
  const [show] = useState(shouldShowOpus1mMergeNotice);
  let t0;
  let t1;
  if ($[0] !== show) {
    t0 = () => {
      if (!show) {
        return;
      }
      const newCount = (getGlobalConfig().opus1mMergeNoticeSeenCount ?? 0) + 1;
      saveGlobalConfig((prev) => {
        if ((prev.opus1mMergeNoticeSeenCount ?? 0) >= newCount) {
          return prev;
        }
        return {
          ...prev,
          opus1mMergeNoticeSeenCount: newCount
        };
      });
    };
    t1 = [show];
    $[0] = show;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);
  if (!show) {
    return null;
  }
  let t2;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ createElement(AnimatedAsterisk, { char: UP_ARROW }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", "Opus now defaults to 1M context \xB7 5x more room, same pricing"));
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
}
var MAX_SHOW_COUNT;
var init_Opus1mMergeNotice = __esm({
  "src/components/LogoV2/Opus1mMergeNotice.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_figures2();
    init_ink();
    init_config();
    init_model();
    init_AnimatedAsterisk();
    MAX_SHOW_COUNT = 6;
  }
});

// src/components/LogoV2/VoiceModeNotice.tsx
function VoiceModeNotice() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = feature("VOICE_MODE") ? /* @__PURE__ */ createElement(VoiceModeNoticeInner, null) : null;
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function VoiceModeNoticeInner() {
  const $ = c(4);
  const [show] = useState(_temp8);
  let t0;
  let t1;
  if ($[0] !== show) {
    t0 = () => {
      if (!show) {
        return;
      }
      const newCount = (getGlobalConfig().voiceNoticeSeenCount ?? 0) + 1;
      saveGlobalConfig((prev) => {
        if ((prev.voiceNoticeSeenCount ?? 0) >= newCount) {
          return prev;
        }
        return {
          ...prev,
          voiceNoticeSeenCount: newCount
        };
      });
    };
    t1 = [show];
    $[0] = show;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);
  if (!show) {
    return null;
  }
  let t2;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ createElement(AnimatedAsterisk, null), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " Voice mode is now available \xB7 /voice to enable"));
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
}
function _temp8() {
  return isVoiceModeEnabled() && getInitialSettings().voiceEnabled !== true && (getGlobalConfig().voiceNoticeSeenCount ?? 0) < MAX_SHOW_COUNT2 && !shouldShowOpus1mMergeNotice();
}
var MAX_SHOW_COUNT2;
var init_VoiceModeNotice = __esm({
  "src/components/LogoV2/VoiceModeNotice.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_react();
    init_react();
    init_ink();
    init_config();
    init_settings();
    init_voiceModeEnabled();
    init_AnimatedAsterisk();
    init_Opus1mMergeNotice();
    MAX_SHOW_COUNT2 = 3;
  }
});

// src/components/LogoV2/ChannelsNotice.tsx
var ChannelsNotice_exports = {};
__export(ChannelsNotice_exports, {
  ChannelsNotice: () => ChannelsNotice
});
function ChannelsNotice() {
  const $ = c(32);
  const [t0] = useState(_temp9);
  const {
    channels,
    disabled,
    noAuth,
    policyBlocked,
    list,
    unmatched
  } = t0;
  if (channels.length === 0) {
    return null;
  }
  const hasNonDev = channels.some(_temp23);
  const flag = getHasDevChannels() && hasNonDev ? "Channels" : getHasDevChannels() ? "--dangerously-load-development-channels" : "--channels";
  if (disabled) {
    let t12;
    if ($[0] !== flag || $[1] !== list) {
      t12 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, flag, " ignored (", list, ")");
      $[0] = flag;
      $[1] = list;
      $[2] = t12;
    } else {
      t12 = $[2];
    }
    let t22;
    if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Channels are not currently available");
      $[3] = t22;
    } else {
      t22 = $[3];
    }
    let t32;
    if ($[4] !== t12) {
      t32 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, t12, t22);
      $[4] = t12;
      $[5] = t32;
    } else {
      t32 = $[5];
    }
    return t32;
  }
  if (noAuth) {
    let t12;
    if ($[6] !== flag || $[7] !== list) {
      t12 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, flag, " ignored (", list, ")");
      $[6] = flag;
      $[7] = list;
      $[8] = t12;
    } else {
      t12 = $[8];
    }
    let t22;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Channels require claude.ai authentication \xB7 run /login, then restart");
      $[9] = t22;
    } else {
      t22 = $[9];
    }
    let t32;
    if ($[10] !== t12) {
      t32 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, t12, t22);
      $[10] = t12;
      $[11] = t32;
    } else {
      t32 = $[11];
    }
    return t32;
  }
  if (policyBlocked) {
    let t12;
    if ($[12] !== flag || $[13] !== list) {
      t12 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, flag, " blocked by org policy (", list, ")");
      $[12] = flag;
      $[13] = list;
      $[14] = t12;
    } else {
      t12 = $[14];
    }
    let t22;
    let t32;
    if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Inbound messages will be silently dropped");
      t32 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Have an administrator set channelsEnabled: true in managed settings to enable");
      $[15] = t22;
      $[16] = t32;
    } else {
      t22 = $[15];
      t32 = $[16];
    }
    let t42;
    if ($[17] !== unmatched) {
      t42 = unmatched.map(_temp32);
      $[17] = unmatched;
      $[18] = t42;
    } else {
      t42 = $[18];
    }
    let t5;
    if ($[19] !== t12 || $[20] !== t42) {
      t5 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, t12, t22, t32, t42);
      $[19] = t12;
      $[20] = t42;
      $[21] = t5;
    } else {
      t5 = $[21];
    }
    return t5;
  }
  let t1;
  if ($[22] !== list) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Listening for channel messages from: ", list);
    $[22] = list;
    $[23] = t1;
  } else {
    t1 = $[23];
  }
  let t2;
  if ($[24] !== flag) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Experimental \xB7 inbound messages will be pushed into this session, this carries prompt injection risks. Restart Blaude without ", flag, " to disable.");
    $[24] = flag;
    $[25] = t2;
  } else {
    t2 = $[25];
  }
  let t3;
  if ($[26] !== unmatched) {
    t3 = unmatched.map(_temp42);
    $[26] = unmatched;
    $[27] = t3;
  } else {
    t3 = $[27];
  }
  let t4;
  if ($[28] !== t1 || $[29] !== t2 || $[30] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, t1, t2, t3);
    $[28] = t1;
    $[29] = t2;
    $[30] = t3;
    $[31] = t4;
  } else {
    t4 = $[31];
  }
  return t4;
}
function _temp42(u_0) {
  return /* @__PURE__ */ createElement(ThemedText, { key: `${formatEntry(u_0.entry)}:${u_0.why}`, color: "warning" }, formatEntry(u_0.entry), " \xB7 ", u_0.why);
}
function _temp32(u) {
  return /* @__PURE__ */ createElement(ThemedText, { key: `${formatEntry(u.entry)}:${u.why}`, color: "warning" }, formatEntry(u.entry), " \xB7 ", u.why);
}
function _temp23(c2) {
  return !c2.dev;
}
function _temp9() {
  const ch = getAllowedChannels();
  if (ch.length === 0) {
    return {
      channels: ch,
      disabled: false,
      noAuth: false,
      policyBlocked: false,
      list: "",
      unmatched: []
    };
  }
  const l = ch.map(formatEntry).join(", ");
  const sub = getSubscriptionType();
  const managed = sub === "team" || sub === "enterprise";
  const policy = getSettingsForSource("policySettings");
  const allowlist = getEffectiveChannelAllowlist(sub, policy?.allowedChannelPlugins);
  return {
    channels: ch,
    disabled: !isChannelsEnabled(),
    noAuth: !getClaudeAIOAuthTokens()?.accessToken,
    policyBlocked: managed && policy?.channelsEnabled !== true,
    list: l,
    unmatched: findUnmatched(ch, allowlist)
  };
}
function formatEntry(c2) {
  return c2.kind === "plugin" ? `plugin:${c2.name}@${c2.marketplace}` : `server:${c2.name}`;
}
function findUnmatched(entries, allowlist) {
  const scopes = ["enterprise", "user", "project", "local"];
  const configured = /* @__PURE__ */ new Set();
  for (const scope of scopes) {
    for (const name of Object.keys(getMcpConfigsByScope(scope).servers)) {
      configured.add(name);
    }
  }
  const installedPluginIds = new Set(Object.keys(loadInstalledPluginsV2().plugins));
  const {
    entries: allowed,
    source
  } = allowlist;
  const out = [];
  for (const entry of entries) {
    if (entry.kind === "server") {
      if (!configured.has(entry.name)) {
        out.push({
          entry,
          why: "no MCP server configured with that name"
        });
      }
      if (!entry.dev) {
        out.push({
          entry,
          why: "server: entries need --dangerously-load-development-channels"
        });
      }
      continue;
    }
    if (!installedPluginIds.has(`${entry.name}@${entry.marketplace}`)) {
      out.push({
        entry,
        why: "plugin not installed"
      });
    }
    if (!entry.dev && !allowed.some((e) => e.plugin === entry.name && e.marketplace === entry.marketplace)) {
      out.push({
        entry,
        why: source === "org" ? "not on your org's approved channels list" : "not on the approved channels allowlist"
      });
    }
  }
  return out;
}
var init_ChannelsNotice = __esm({
  "src/components/LogoV2/ChannelsNotice.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_state();
    init_ink();
    init_channelAllowlist();
    init_channelNotification();
    init_config2();
    init_auth();
    init_installedPluginsManager();
    init_settings();
  }
});

// src/components/LogoV2/LogoV2.tsx
function LogoV2() {
  const $ = c(94);
  const activities = getRecentActivitySync();
  const username = getGlobalConfig().oauthAccount?.displayName ?? "";
  const {
    columns
  } = useTerminalSize();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = shouldShowProjectOnboarding();
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const showOnboarding = t0;
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = SandboxManager.isSandboxingEnabled();
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const showSandboxStatus = t1;
  const showGuestPassesUpsell = useShowGuestPassesUpsell();
  const showOverageCreditUpsell = useShowOverageCreditUpsell();
  const agent = useAppState(_temp10);
  const effortValue = useAppState(_temp24);
  const config = getGlobalConfig();
  let changelog;
  try {
    changelog = getRecentReleaseNotesSync(3);
  } catch {
    changelog = [];
  }
  const [announcement] = useState(() => {
    const announcements = getInitialSettings().companyAnnouncements;
    if (!announcements || announcements.length === 0) {
      return;
    }
    return config.numStartups === 1 ? announcements[0] : announcements[Math.floor(Math.random() * announcements.length)];
  });
  const {
    hasReleaseNotes
  } = checkForReleaseNotesSync(config.lastReleaseNotesSeen);
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      const currentConfig = getGlobalConfig();
      if (currentConfig.lastReleaseNotesSeen === MACRO.VERSION) {
        return;
      }
      saveGlobalConfig(_temp33);
      if (showOnboarding) {
        incrementProjectOnboardingSeenCount();
      }
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== config) {
    t3 = [config, showOnboarding];
    $[3] = config;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useEffect(t2, t3);
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = !hasReleaseNotes && !showOnboarding && !isEnvTruthy(process.env.CLAUDE_CODE_FORCE_FULL_LOGO);
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const isCondensedMode = t4;
  let t5;
  let t6;
  if ($[6] !== showGuestPassesUpsell) {
    t5 = () => {
      if (showGuestPassesUpsell && !showOnboarding && !isCondensedMode) {
        incrementGuestPassesSeenCount();
      }
    };
    t6 = [showGuestPassesUpsell, showOnboarding, isCondensedMode];
    $[6] = showGuestPassesUpsell;
    $[7] = t5;
    $[8] = t6;
  } else {
    t5 = $[7];
    t6 = $[8];
  }
  useEffect(t5, t6);
  let t7;
  let t8;
  if ($[9] !== showGuestPassesUpsell || $[10] !== showOverageCreditUpsell) {
    t7 = () => {
      if (showOverageCreditUpsell && !showOnboarding && !showGuestPassesUpsell && !isCondensedMode) {
        incrementOverageCreditUpsellSeenCount();
      }
    };
    t8 = [showOverageCreditUpsell, showOnboarding, showGuestPassesUpsell, isCondensedMode];
    $[9] = showGuestPassesUpsell;
    $[10] = showOverageCreditUpsell;
    $[11] = t7;
    $[12] = t8;
  } else {
    t7 = $[11];
    t8 = $[12];
  }
  useEffect(t7, t8);
  const model = useMainLoopModel();
  const fullModelDisplayName = renderModelSetting(model);
  const {
    version,
    cwd,
    billingType,
    agentName: agentNameFromSettings
  } = getLogoDisplayData();
  const agentName = agent ?? agentNameFromSettings;
  const effortSuffix = getEffortSuffix(model, effortValue);
  const t9 = fullModelDisplayName + effortSuffix;
  let t10;
  if ($[13] !== t9) {
    t10 = truncate(t9, LEFT_PANEL_MAX_WIDTH - 20);
    $[13] = t9;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  const modelDisplayName = t10;
  if (!hasReleaseNotes && !showOnboarding && !isEnvTruthy(process.env.CLAUDE_CODE_FORCE_FULL_LOGO)) {
    let t112;
    let t122;
    let t132;
    let t142;
    let t152;
    let t162;
    let t172;
    if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t112 = /* @__PURE__ */ createElement(CondensedLogo, null);
      t122 = /* @__PURE__ */ createElement(VoiceModeNotice, null);
      t132 = /* @__PURE__ */ createElement(Opus1mMergeNotice, null);
      t142 = ChannelsNoticeModule && /* @__PURE__ */ createElement(ChannelsNoticeModule.ChannelsNotice, null);
      t152 = isDebugMode() && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Debug mode enabled"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Logging to: ", isDebugToStdErr() ? "stderr" : getDebugLogPath()));
      t162 = /* @__PURE__ */ createElement(EmergencyTip, null);
      t172 = process.env.CLAUDE_CODE_TMUX_SESSION && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "tmux session: ", process.env.CLAUDE_CODE_TMUX_SESSION), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, process.env.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS ? `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} ${process.env.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - Claude uses ${process.env.CLAUDE_CODE_TMUX_PREFIX})` : `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} d`));
      $[15] = t112;
      $[16] = t122;
      $[17] = t132;
      $[18] = t142;
      $[19] = t152;
      $[20] = t162;
      $[21] = t172;
    } else {
      t112 = $[15];
      t122 = $[16];
      t132 = $[17];
      t142 = $[18];
      t152 = $[19];
      t162 = $[20];
      t172 = $[21];
    }
    let t182;
    if ($[22] !== announcement || $[23] !== config) {
      t182 = announcement && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, !process.env.IS_DEMO && config.oauthAccount?.organizationName && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Message from ", config.oauthAccount.organizationName, ":"), /* @__PURE__ */ createElement(ThemedText, null, announcement));
      $[22] = announcement;
      $[23] = config;
      $[24] = t182;
    } else {
      t182 = $[24];
    }
    let t192;
    let t202;
    let t212;
    let t222;
    if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t192 = false;
      t202 = false;
      t212 = false;
      t222 = false;
      $[25] = t192;
      $[26] = t202;
      $[27] = t212;
      $[28] = t222;
    } else {
      t192 = $[25];
      t202 = $[26];
      t212 = $[27];
      t222 = $[28];
    }
    let t232;
    if ($[29] !== t182) {
      t232 = /* @__PURE__ */ createElement(Fragment, null, t112, t122, t132, t142, t152, t162, t172, t182, t192, t202, t212, t222);
      $[29] = t182;
      $[30] = t232;
    } else {
      t232 = $[30];
    }
    return t232;
  }
  const layoutMode = getLayoutMode(columns);
  const userTheme = resolveThemeSetting(getGlobalConfig().theme);
  const borderTitle = ` ${color("claude", userTheme)("Blaude")} ${color("inactive", userTheme)(`v${version}`)} `;
  const compactBorderTitle = color("claude", userTheme)(" Blaude ");
  if (layoutMode === "compact") {
    let welcomeMessage = formatWelcomeMessage(username);
    if (stringWidth(welcomeMessage) > columns - 4) {
      let t113;
      if ($[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t113 = formatWelcomeMessage(null);
        $[31] = t113;
      } else {
        t113 = $[31];
      }
      welcomeMessage = t113;
    }
    const cwdAvailableWidth = agentName ? columns - 4 - 1 - stringWidth(agentName) - 3 : columns - 4;
    const truncatedCwd = truncatePath(cwd, Math.max(cwdAvailableWidth, 10));
    let t112;
    if ($[32] !== compactBorderTitle) {
      t112 = {
        content: compactBorderTitle,
        position: "top",
        align: "start",
        offset: 1
      };
      $[32] = compactBorderTitle;
      $[33] = t112;
    } else {
      t112 = $[33];
    }
    let t122;
    if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t122 = /* @__PURE__ */ createElement(ThemedBox_default, { marginY: 1 }, /* @__PURE__ */ createElement(Clawd, null));
      $[34] = t122;
    } else {
      t122 = $[34];
    }
    let t132;
    if ($[35] !== modelDisplayName) {
      t132 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, modelDisplayName);
      $[35] = modelDisplayName;
      $[36] = t132;
    } else {
      t132 = $[36];
    }
    let t142;
    let t152;
    let t162;
    if ($[37] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t142 = /* @__PURE__ */ createElement(VoiceModeNotice, null);
      t152 = /* @__PURE__ */ createElement(Opus1mMergeNotice, null);
      t162 = ChannelsNoticeModule && /* @__PURE__ */ createElement(ChannelsNoticeModule.ChannelsNotice, null);
      $[37] = t142;
      $[38] = t152;
      $[39] = t162;
    } else {
      t142 = $[37];
      t152 = $[38];
      t162 = $[39];
    }
    let t172;
    if ($[40] !== showSandboxStatus) {
      t172 = showSandboxStatus && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Your bash commands will be sandboxed. Disable with /sandbox."));
      $[40] = showSandboxStatus;
      $[41] = t172;
    } else {
      t172 = $[41];
    }
    let t182;
    let t192;
    if ($[42] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t182 = false;
      t192 = false;
      $[42] = t182;
      $[43] = t192;
    } else {
      t182 = $[42];
      t192 = $[43];
    }
    return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(OffscreenFreeze, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", borderColor: "claude", borderText: t112, paddingX: 1, paddingY: 1, alignItems: "center", width: columns }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, welcomeMessage), t122, t132, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, billingType), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, agentName ? `@${agentName} \xB7 ${truncatedCwd}` : truncatedCwd))), t142, t152, t162, t172, t182, t192);
  }
  const welcomeMessage_0 = formatWelcomeMessage(username);
  const modelLine = !process.env.IS_DEMO && config.oauthAccount?.organizationName ? `${modelDisplayName} \xB7 ${billingType} \xB7 ${config.oauthAccount.organizationName}` : `${modelDisplayName} \xB7 ${billingType}`;
  const cwdAvailableWidth_0 = agentName ? LEFT_PANEL_MAX_WIDTH - 1 - stringWidth(agentName) - 3 : LEFT_PANEL_MAX_WIDTH;
  const truncatedCwd_0 = truncatePath(cwd, Math.max(cwdAvailableWidth_0, 10));
  const cwdLine = agentName ? `@${agentName} \xB7 ${truncatedCwd_0}` : truncatedCwd_0;
  const optimalLeftWidth = calculateOptimalLeftWidth(welcomeMessage_0, cwdLine, modelLine);
  const {
    leftWidth,
    rightWidth
  } = calculateLayoutDimensions(columns, layoutMode, optimalLeftWidth);
  const T0 = OffscreenFreeze;
  const T1 = ThemedBox_default;
  const t11 = "column";
  const t12 = "round";
  const t13 = "claude";
  let t14;
  if ($[44] !== borderTitle) {
    t14 = {
      content: borderTitle,
      position: "top",
      align: "start",
      offset: 3
    };
    $[44] = borderTitle;
    $[45] = t14;
  } else {
    t14 = $[45];
  }
  const T2 = ThemedBox_default;
  const t15 = layoutMode === "horizontal" ? "row" : "column";
  const t16 = 1;
  const t17 = 1;
  let t18;
  if ($[46] !== welcomeMessage_0) {
    t18 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, welcomeMessage_0));
    $[46] = welcomeMessage_0;
    $[47] = t18;
  } else {
    t18 = $[47];
  }
  let t19;
  if ($[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ createElement(Clawd, null);
    $[48] = t19;
  } else {
    t19 = $[48];
  }
  let t20;
  if ($[49] !== modelLine) {
    t20 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, modelLine);
    $[49] = modelLine;
    $[50] = t20;
  } else {
    t20 = $[50];
  }
  let t21;
  if ($[51] !== cwdLine) {
    t21 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, cwdLine);
    $[51] = cwdLine;
    $[52] = t21;
  } else {
    t21 = $[52];
  }
  let t22;
  if ($[53] !== t20 || $[54] !== t21) {
    t22 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", alignItems: "center" }, t20, t21);
    $[53] = t20;
    $[54] = t21;
    $[55] = t22;
  } else {
    t22 = $[55];
  }
  let t23;
  if ($[56] !== leftWidth || $[57] !== t18 || $[58] !== t22) {
    t23 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", width: leftWidth, justifyContent: "space-between", alignItems: "center", minHeight: 9 }, t18, t19, t22);
    $[56] = leftWidth;
    $[57] = t18;
    $[58] = t22;
    $[59] = t23;
  } else {
    t23 = $[59];
  }
  let t24;
  if ($[60] !== layoutMode) {
    t24 = layoutMode === "horizontal" && /* @__PURE__ */ createElement(ThemedBox_default, { height: "100%", borderStyle: "single", borderColor: "claude", borderDimColor: true, borderTop: false, borderBottom: false, borderLeft: false });
    $[60] = layoutMode;
    $[61] = t24;
  } else {
    t24 = $[61];
  }
  const t25 = layoutMode === "horizontal" && /* @__PURE__ */ createElement(FeedColumn, { feeds: showOnboarding ? [createProjectOnboardingFeed(getSteps()), createRecentActivityFeed(activities)] : showGuestPassesUpsell ? [createRecentActivityFeed(activities), createGuestPassesFeed()] : showOverageCreditUpsell ? [createRecentActivityFeed(activities), createOverageCreditFeed()] : [createRecentActivityFeed(activities), createWhatsNewFeed(changelog)], maxWidth: rightWidth });
  let t26;
  if ($[62] !== T2 || $[63] !== t15 || $[64] !== t23 || $[65] !== t24 || $[66] !== t25) {
    t26 = /* @__PURE__ */ createElement(T2, { flexDirection: t15, paddingX: t16, gap: t17 }, t23, t24, t25);
    $[62] = T2;
    $[63] = t15;
    $[64] = t23;
    $[65] = t24;
    $[66] = t25;
    $[67] = t26;
  } else {
    t26 = $[67];
  }
  let t27;
  if ($[68] !== T1 || $[69] !== t14 || $[70] !== t26) {
    t27 = /* @__PURE__ */ createElement(T1, { flexDirection: t11, borderStyle: t12, borderColor: t13, borderText: t14 }, t26);
    $[68] = T1;
    $[69] = t14;
    $[70] = t26;
    $[71] = t27;
  } else {
    t27 = $[71];
  }
  let t28;
  if ($[72] !== T0 || $[73] !== t27) {
    t28 = /* @__PURE__ */ createElement(T0, null, t27);
    $[72] = T0;
    $[73] = t27;
    $[74] = t28;
  } else {
    t28 = $[74];
  }
  let t29;
  let t30;
  let t31;
  let t32;
  let t33;
  let t34;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ createElement(VoiceModeNotice, null);
    t30 = /* @__PURE__ */ createElement(Opus1mMergeNotice, null);
    t31 = ChannelsNoticeModule && /* @__PURE__ */ createElement(ChannelsNoticeModule.ChannelsNotice, null);
    t32 = isDebugMode() && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Debug mode enabled"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Logging to: ", isDebugToStdErr() ? "stderr" : getDebugLogPath()));
    t33 = /* @__PURE__ */ createElement(EmergencyTip, null);
    t34 = process.env.CLAUDE_CODE_TMUX_SESSION && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "tmux session: ", process.env.CLAUDE_CODE_TMUX_SESSION), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, process.env.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS ? `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} ${process.env.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - Claude uses ${process.env.CLAUDE_CODE_TMUX_PREFIX})` : `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} d`));
    $[75] = t29;
    $[76] = t30;
    $[77] = t31;
    $[78] = t32;
    $[79] = t33;
    $[80] = t34;
  } else {
    t29 = $[75];
    t30 = $[76];
    t31 = $[77];
    t32 = $[78];
    t33 = $[79];
    t34 = $[80];
  }
  let t35;
  if ($[81] !== announcement || $[82] !== config) {
    t35 = announcement && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, !process.env.IS_DEMO && config.oauthAccount?.organizationName && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Message from ", config.oauthAccount.organizationName, ":"), /* @__PURE__ */ createElement(ThemedText, null, announcement));
    $[81] = announcement;
    $[82] = config;
    $[83] = t35;
  } else {
    t35 = $[83];
  }
  let t36;
  if ($[84] !== showSandboxStatus) {
    t36 = showSandboxStatus && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Your bash commands will be sandboxed. Disable with /sandbox."));
    $[84] = showSandboxStatus;
    $[85] = t36;
  } else {
    t36 = $[85];
  }
  let t37;
  let t38;
  let t39;
  let t40;
  if ($[86] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t37 = false;
    t38 = false;
    t39 = false;
    t40 = false;
    $[86] = t37;
    $[87] = t38;
    $[88] = t39;
    $[89] = t40;
  } else {
    t37 = $[86];
    t38 = $[87];
    t39 = $[88];
    t40 = $[89];
  }
  let t41;
  if ($[90] !== t28 || $[91] !== t35 || $[92] !== t36) {
    t41 = /* @__PURE__ */ createElement(Fragment, null, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40);
    $[90] = t28;
    $[91] = t35;
    $[92] = t36;
    $[93] = t41;
  } else {
    t41 = $[93];
  }
  return t41;
}
function _temp33(current) {
  if (current.lastReleaseNotesSeen === MACRO.VERSION) {
    return current;
  }
  return {
    ...current,
    lastReleaseNotesSeen: MACRO.VERSION
  };
}
function _temp24(s_0) {
  return s_0.effortValue;
}
function _temp10(s) {
  return s.agent;
}
var ChannelsNoticeModule, LEFT_PANEL_MAX_WIDTH;
var init_LogoV2 = __esm({
  "src/components/LogoV2/LogoV2.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useTerminalSize();
    init_stringWidth();
    init_logoV2Utils();
    init_format();
    init_file();
    init_Clawd();
    init_FeedColumn();
    init_feedConfigs();
    init_config();
    init_systemTheme();
    init_settings();
    init_debug();
    init_react();
    init_projectOnboardingState();
    init_CondensedLogo();
    init_OffscreenFreeze();
    init_releaseNotes();
    init_dumpPrompts();
    init_envUtils();
    init_startupProfiler();
    init_EmergencyTip();
    init_VoiceModeNotice();
    init_Opus1mMergeNotice();
    init_bun_bundle();
    init_sandbox_adapter();
    init_GuestPassesUpsell();
    init_OverageCreditUpsell();
    init_AppState();
    init_effort();
    init_useMainLoopModel();
    init_model();
    ChannelsNoticeModule = feature("KAIROS") || feature("KAIROS_CHANNELS") ? (init_ChannelsNotice(), __toCommonJS(ChannelsNotice_exports)) : null;
    LEFT_PANEL_MAX_WIDTH = 50;
  }
});

// src/components/MessageModel.tsx
function MessageModel(t0) {
  const $ = c(5);
  const {
    message,
    isTranscriptMode
  } = t0;
  const shouldShowModel = isTranscriptMode && message.type === "assistant" && message.message.model && message.message.content.some(_temp11);
  if (!shouldShowModel) {
    return null;
  }
  const t1 = stringWidth(message.message.model) + 8;
  let t2;
  if ($[0] !== message.message.model) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, message.message.model);
    $[0] = message.message.model;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== t1 || $[3] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { minWidth: t1 }, t2);
    $[2] = t1;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp11(c2) {
  return c2.type === "text";
}
var init_MessageModel = __esm({
  "src/components/MessageModel.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_stringWidth();
    init_ink();
  }
});

// src/components/MessageTimestamp.tsx
function MessageTimestamp(t0) {
  const $ = c(10);
  const {
    message,
    isTranscriptMode
  } = t0;
  const shouldShowTimestamp = isTranscriptMode && message.timestamp && message.type === "assistant" && message.message.content.some(_temp12);
  if (!shouldShowTimestamp) {
    return null;
  }
  let T0;
  let formattedTimestamp;
  let t1;
  if ($[0] !== message.timestamp) {
    formattedTimestamp = new Date(message.timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    T0 = ThemedBox_default;
    t1 = stringWidth(formattedTimestamp);
    $[0] = message.timestamp;
    $[1] = T0;
    $[2] = formattedTimestamp;
    $[3] = t1;
  } else {
    T0 = $[1];
    formattedTimestamp = $[2];
    t1 = $[3];
  }
  let t2;
  if ($[4] !== formattedTimestamp) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, formattedTimestamp);
    $[4] = formattedTimestamp;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== T0 || $[7] !== t1 || $[8] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(T0, { minWidth: t1 }, t2);
    $[6] = T0;
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function _temp12(c2) {
  return c2.type === "text";
}
var init_MessageTimestamp = __esm({
  "src/components/MessageTimestamp.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_stringWidth();
    init_ink();
  }
});

// src/components/MessageRow.tsx
function hasContentAfterIndex(messages, index, tools, streamingToolUseIDs) {
  for (let i = index + 1; i < messages.length; i++) {
    const msg = messages[i];
    if (msg?.type === "assistant") {
      const content = msg.message.content[0];
      if (content?.type === "thinking" || content?.type === "redacted_thinking") {
        continue;
      }
      if (content?.type === "tool_use") {
        if (getToolSearchOrReadInfo(content.name, content.input, tools).isCollapsible) {
          continue;
        }
        if (streamingToolUseIDs.has(content.id)) {
          continue;
        }
      }
      return true;
    }
    if (msg?.type === "system" || msg?.type === "attachment") {
      continue;
    }
    if (msg?.type === "user") {
      const content = msg.message.content[0];
      if (content?.type === "tool_result") {
        continue;
      }
    }
    if (msg?.type === "grouped_tool_use") {
      const firstInput = msg.messages[0]?.message.content[0]?.input;
      if (getToolSearchOrReadInfo(msg.toolName, firstInput, tools).isCollapsible) {
        continue;
      }
    }
    return true;
  }
  return false;
}
function MessageRowImpl(t0) {
  const $ = c(64);
  const {
    message: msg,
    isUserContinuation,
    hasContentAfter,
    tools,
    commands,
    verbose,
    inProgressToolUseIDs,
    streamingToolUseIDs,
    screen,
    canAnimate,
    onOpenRateLimitOptions,
    lastThinkingBlockId,
    latestBashOutputUUID,
    columns,
    isLoading,
    lookups
  } = t0;
  const isTranscriptMode = screen === "transcript";
  const isGrouped = msg.type === "grouped_tool_use";
  const isCollapsed = msg.type === "collapsed_read_search";
  let t1;
  if ($[0] !== hasContentAfter || $[1] !== inProgressToolUseIDs || $[2] !== isCollapsed || $[3] !== isLoading || $[4] !== msg) {
    t1 = isCollapsed && (hasAnyToolInProgress(msg, inProgressToolUseIDs) || isLoading && !hasContentAfter);
    $[0] = hasContentAfter;
    $[1] = inProgressToolUseIDs;
    $[2] = isCollapsed;
    $[3] = isLoading;
    $[4] = msg;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  const isActiveCollapsedGroup = t1;
  let t2;
  if ($[6] !== isCollapsed || $[7] !== isGrouped || $[8] !== msg) {
    t2 = isGrouped ? msg.displayMessage : isCollapsed ? getDisplayMessageFromCollapsed(msg) : msg;
    $[6] = isCollapsed;
    $[7] = isGrouped;
    $[8] = msg;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  const displayMsg = t2;
  let t3;
  if ($[10] !== isCollapsed || $[11] !== isGrouped || $[12] !== lookups || $[13] !== msg) {
    t3 = isGrouped || isCollapsed ? [] : getProgressMessagesFromLookup(msg, lookups);
    $[10] = isCollapsed;
    $[11] = isGrouped;
    $[12] = lookups;
    $[13] = msg;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  const progressMessagesForMessage = t3;
  let t4;
  if ($[15] !== inProgressToolUseIDs || $[16] !== isCollapsed || $[17] !== isGrouped || $[18] !== lookups || $[19] !== msg || $[20] !== screen || $[21] !== streamingToolUseIDs) {
    const siblingToolUseIDs = isGrouped || isCollapsed ? EMPTY_STRING_SET : getSiblingToolUseIDsFromLookup(msg, lookups);
    t4 = shouldRenderStatically(msg, streamingToolUseIDs, inProgressToolUseIDs, siblingToolUseIDs, screen, lookups);
    $[15] = inProgressToolUseIDs;
    $[16] = isCollapsed;
    $[17] = isGrouped;
    $[18] = lookups;
    $[19] = msg;
    $[20] = screen;
    $[21] = streamingToolUseIDs;
    $[22] = t4;
  } else {
    t4 = $[22];
  }
  const isStatic = t4;
  let shouldAnimate = false;
  if (canAnimate) {
    if (isGrouped) {
      let t52;
      if ($[23] !== inProgressToolUseIDs || $[24] !== msg.messages) {
        let t62;
        if ($[26] !== inProgressToolUseIDs) {
          t62 = (m) => {
            const content = m.message.content[0];
            return content?.type === "tool_use" && inProgressToolUseIDs.has(content.id);
          };
          $[26] = inProgressToolUseIDs;
          $[27] = t62;
        } else {
          t62 = $[27];
        }
        t52 = msg.messages.some(t62);
        $[23] = inProgressToolUseIDs;
        $[24] = msg.messages;
        $[25] = t52;
      } else {
        t52 = $[25];
      }
      shouldAnimate = t52;
    } else {
      if (isCollapsed) {
        let t52;
        if ($[28] !== inProgressToolUseIDs || $[29] !== msg) {
          t52 = hasAnyToolInProgress(msg, inProgressToolUseIDs);
          $[28] = inProgressToolUseIDs;
          $[29] = msg;
          $[30] = t52;
        } else {
          t52 = $[30];
        }
        shouldAnimate = t52;
      } else {
        let t52;
        if ($[31] !== inProgressToolUseIDs || $[32] !== msg) {
          const toolUseID = getToolUseID(msg);
          t52 = !toolUseID || inProgressToolUseIDs.has(toolUseID);
          $[31] = inProgressToolUseIDs;
          $[32] = msg;
          $[33] = t52;
        } else {
          t52 = $[33];
        }
        shouldAnimate = t52;
      }
    }
  }
  let t5;
  if ($[34] !== displayMsg || $[35] !== isTranscriptMode) {
    t5 = isTranscriptMode && displayMsg.type === "assistant" && displayMsg.message.content.some(_temp13) && (displayMsg.timestamp || displayMsg.message.model);
    $[34] = displayMsg;
    $[35] = isTranscriptMode;
    $[36] = t5;
  } else {
    t5 = $[36];
  }
  const hasMetadata = t5;
  const t6 = !hasMetadata;
  const t7 = hasMetadata ? void 0 : columns;
  let t8;
  if ($[37] !== commands || $[38] !== inProgressToolUseIDs || $[39] !== isActiveCollapsedGroup || $[40] !== isStatic || $[41] !== isTranscriptMode || $[42] !== isUserContinuation || $[43] !== lastThinkingBlockId || $[44] !== latestBashOutputUUID || $[45] !== lookups || $[46] !== msg || $[47] !== onOpenRateLimitOptions || $[48] !== progressMessagesForMessage || $[49] !== shouldAnimate || $[50] !== t6 || $[51] !== t7 || $[52] !== tools || $[53] !== verbose) {
    t8 = /* @__PURE__ */ createElement(Message, { message: msg, lookups, addMargin: t6, containerWidth: t7, tools, commands, verbose, inProgressToolUseIDs, progressMessagesForMessage, shouldAnimate, shouldShowDot: true, isTranscriptMode, isStatic, onOpenRateLimitOptions, isActiveCollapsedGroup, isUserContinuation, lastThinkingBlockId, latestBashOutputUUID });
    $[37] = commands;
    $[38] = inProgressToolUseIDs;
    $[39] = isActiveCollapsedGroup;
    $[40] = isStatic;
    $[41] = isTranscriptMode;
    $[42] = isUserContinuation;
    $[43] = lastThinkingBlockId;
    $[44] = latestBashOutputUUID;
    $[45] = lookups;
    $[46] = msg;
    $[47] = onOpenRateLimitOptions;
    $[48] = progressMessagesForMessage;
    $[49] = shouldAnimate;
    $[50] = t6;
    $[51] = t7;
    $[52] = tools;
    $[53] = verbose;
    $[54] = t8;
  } else {
    t8 = $[54];
  }
  const messageEl = t8;
  if (!hasMetadata) {
    let t92;
    if ($[55] !== messageEl) {
      t92 = /* @__PURE__ */ createElement(OffscreenFreeze, null, messageEl);
      $[55] = messageEl;
      $[56] = t92;
    } else {
      t92 = $[56];
    }
    return t92;
  }
  let t9;
  if ($[57] !== displayMsg || $[58] !== isTranscriptMode) {
    t9 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", justifyContent: "flex-end", gap: 1, marginTop: 1 }, /* @__PURE__ */ createElement(MessageTimestamp, { message: displayMsg, isTranscriptMode }), /* @__PURE__ */ createElement(MessageModel, { message: displayMsg, isTranscriptMode }));
    $[57] = displayMsg;
    $[58] = isTranscriptMode;
    $[59] = t9;
  } else {
    t9 = $[59];
  }
  let t10;
  if ($[60] !== columns || $[61] !== messageEl || $[62] !== t9) {
    t10 = /* @__PURE__ */ createElement(OffscreenFreeze, null, /* @__PURE__ */ createElement(ThemedBox_default, { width: columns, flexDirection: "column" }, t9, messageEl));
    $[60] = columns;
    $[61] = messageEl;
    $[62] = t9;
    $[63] = t10;
  } else {
    t10 = $[63];
  }
  return t10;
}
function _temp13(c2) {
  return c2.type === "text";
}
function isMessageStreaming(msg, streamingToolUseIDs) {
  if (msg.type === "grouped_tool_use") {
    return msg.messages.some((m) => {
      const content = m.message.content[0];
      return content?.type === "tool_use" && streamingToolUseIDs.has(content.id);
    });
  }
  if (msg.type === "collapsed_read_search") {
    const toolIds = getToolUseIdsFromCollapsedGroup(msg);
    return toolIds.some((id) => streamingToolUseIDs.has(id));
  }
  const toolUseID = getToolUseID(msg);
  return !!toolUseID && streamingToolUseIDs.has(toolUseID);
}
function allToolsResolved(msg, resolvedToolUseIDs) {
  if (msg.type === "grouped_tool_use") {
    return msg.messages.every((m) => {
      const content = m.message.content[0];
      return content?.type === "tool_use" && resolvedToolUseIDs.has(content.id);
    });
  }
  if (msg.type === "collapsed_read_search") {
    const toolIds = getToolUseIdsFromCollapsedGroup(msg);
    return toolIds.every((id) => resolvedToolUseIDs.has(id));
  }
  if (msg.type === "assistant") {
    const block = msg.message.content[0];
    if (block?.type === "server_tool_use") {
      return resolvedToolUseIDs.has(block.id);
    }
  }
  const toolUseID = getToolUseID(msg);
  return !toolUseID || resolvedToolUseIDs.has(toolUseID);
}
function areMessageRowPropsEqual(prev, next) {
  if (prev.message !== next.message) return false;
  if (prev.screen !== next.screen) return false;
  if (prev.verbose !== next.verbose) return false;
  if (prev.message.type === "collapsed_read_search" && next.screen !== "transcript") {
    return false;
  }
  if (prev.columns !== next.columns) return false;
  const prevIsLatestBash = prev.latestBashOutputUUID === prev.message.uuid;
  const nextIsLatestBash = next.latestBashOutputUUID === next.message.uuid;
  if (prevIsLatestBash !== nextIsLatestBash) return false;
  if (prev.lastThinkingBlockId !== next.lastThinkingBlockId && hasThinkingContent(next.message)) {
    return false;
  }
  const isStreaming = isMessageStreaming(prev.message, prev.streamingToolUseIDs);
  const isResolved = allToolsResolved(prev.message, prev.lookups.resolvedToolUseIDs);
  if (isStreaming || !isResolved) return false;
  return true;
}
var MessageRow;
var init_MessageRow = __esm({
  "src/components/MessageRow.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_collapseReadSearch();
    init_messages();
    init_Message();
    init_MessageModel();
    init_Messages();
    init_MessageTimestamp();
    init_OffscreenFreeze();
    MessageRow = memo(MessageRowImpl, areMessageRowPropsEqual);
  }
});

// src/utils/statusNoticeDefinitions.tsx
import { relative } from "path";
function getActiveNotices(context) {
  return statusNoticeDefinitions.filter((notice) => notice.isActive(context));
}
var largeMemoryFilesNotice, claudeAiSubscriberExternalTokenNotice, apiKeyConflictNotice, bothAuthMethodsNotice, largeAgentDescriptionsNotice, jetbrainsPluginNotice, statusNoticeDefinitions;
var init_statusNoticeDefinitions = __esm({
  "src/utils/statusNoticeDefinitions.tsx"() {
    init_ink();
    init_react();
    init_claudemd();
    init_figures();
    init_cwd();
    init_format();
    init_auth();
    init_statusNoticeHelpers();
    init_ide();
    init_jetbrains();
    largeMemoryFilesNotice = {
      id: "large-memory-files",
      type: "warning",
      isActive: (ctx) => getLargeMemoryFiles(ctx.memoryFiles).length > 0,
      render: (ctx) => {
        const largeMemoryFiles = getLargeMemoryFiles(ctx.memoryFiles);
        return /* @__PURE__ */ createElement(Fragment, null, largeMemoryFiles.map((file) => {
          const displayPath = file.path.startsWith(getCwd()) ? relative(getCwd(), file.path) : file.path;
          return /* @__PURE__ */ createElement(ThemedBox_default, { key: file.path, flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Large ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, displayPath), " will impact performance (", formatNumber(file.content.length), " chars >", " ", formatNumber(MAX_MEMORY_CHARACTER_COUNT), ")", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /memory to edit")));
        }));
      }
    };
    claudeAiSubscriberExternalTokenNotice = {
      id: "claude-ai-external-token",
      type: "warning",
      isActive: () => {
        const authTokenInfo = getAuthTokenSource();
        return isClaudeAISubscriber() && (authTokenInfo.source === "ANTHROPIC_AUTH_TOKEN" || authTokenInfo.source === "apiKeyHelper");
      },
      render: () => {
        const authTokenInfo = getAuthTokenSource();
        return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Auth conflict: Using ", authTokenInfo.source, " instead of Claude account subscription token. Either unset ", authTokenInfo.source, ", or run `blaude /logout`."));
      }
    };
    apiKeyConflictNotice = {
      id: "api-key-conflict",
      type: "warning",
      isActive: () => {
        const {
          source: apiKeySource
        } = getAnthropicApiKeyWithSource({
          skipRetrievingKeyFromApiKeyHelper: true
        });
        return !!getApiKeyFromConfigOrMacOSKeychain() && (apiKeySource === "ANTHROPIC_API_KEY" || apiKeySource === "apiKeyHelper");
      },
      render: () => {
        const {
          source: apiKeySource
        } = getAnthropicApiKeyWithSource({
          skipRetrievingKeyFromApiKeyHelper: true
        });
        return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Auth conflict: Using ", apiKeySource, " instead of Anthropic Console key. Either unset ", apiKeySource, ", or run `blaude /logout`."));
      }
    };
    bothAuthMethodsNotice = {
      id: "both-auth-methods",
      type: "warning",
      isActive: () => {
        const {
          source: apiKeySource
        } = getAnthropicApiKeyWithSource({
          skipRetrievingKeyFromApiKeyHelper: true
        });
        const authTokenInfo = getAuthTokenSource();
        return apiKeySource !== "none" && authTokenInfo.source !== "none" && !(apiKeySource === "apiKeyHelper" && authTokenInfo.source === "apiKeyHelper");
      },
      render: () => {
        const {
          source: apiKeySource
        } = getAnthropicApiKeyWithSource({
          skipRetrievingKeyFromApiKeyHelper: true
        });
        const authTokenInfo = getAuthTokenSource();
        return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Auth conflict: Both a token (", authTokenInfo.source, ") and an API key (", apiKeySource, ") are set. This may lead to unexpected behavior.")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "\xB7 Trying to use", " ", authTokenInfo.source === "claude.ai" ? "claude.ai" : authTokenInfo.source, "?", " ", apiKeySource === "ANTHROPIC_API_KEY" ? 'Unset the ANTHROPIC_API_KEY environment variable, or blaude /logout then say "No" to the API key approval before login.' : apiKeySource === "apiKeyHelper" ? "Unset the apiKeyHelper setting." : "blaude /logout"), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "\xB7 Trying to use ", apiKeySource, "?", " ", authTokenInfo.source === "claude.ai" ? "blaude /logout to sign out of claude.ai." : `Unset the ${authTokenInfo.source} environment variable.`)));
      }
    };
    largeAgentDescriptionsNotice = {
      id: "large-agent-descriptions",
      type: "warning",
      isActive: (context) => {
        const totalTokens = getAgentDescriptionsTotalTokens(context.agentDefinitions);
        return totalTokens > AGENT_DESCRIPTIONS_THRESHOLD;
      },
      render: (context) => {
        const totalTokens = getAgentDescriptionsTotalTokens(context.agentDefinitions);
        return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Large cumulative agent descriptions will impact performance (~", formatNumber(totalTokens), " tokens >", " ", formatNumber(AGENT_DESCRIPTIONS_THRESHOLD), ")", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /agents to manage")));
      }
    };
    jetbrainsPluginNotice = {
      id: "jetbrains-plugin-install",
      type: "info",
      isActive: (context) => {
        if (!isSupportedJetBrainsTerminal()) {
          return false;
        }
        const shouldAutoInstall = context.config.autoInstallIdeExtension ?? true;
        if (!shouldAutoInstall) {
          return false;
        }
        const ideType = getTerminalIdeType();
        return ideType !== null && !isJetBrainsPluginInstalledCachedSync(ideType);
      },
      render: () => {
        const ideType = getTerminalIdeType();
        const ideName = toIDEDisplayName(ideType);
        return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1, marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "ide" }, figures_default.arrowUp), /* @__PURE__ */ createElement(ThemedText, null, "Install the ", /* @__PURE__ */ createElement(ThemedText, { color: "ide" }, ideName), " plugin from the JetBrains Marketplace:", " ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "https://docs.claude.com/s/claude-code-jetbrains")));
      }
    };
    statusNoticeDefinitions = [largeMemoryFilesNotice, largeAgentDescriptionsNotice, claudeAiSubscriberExternalTokenNotice, apiKeyConflictNotice, bothAuthMethodsNotice, jetbrainsPluginNotice];
  }
});

// src/components/StatusNotices.tsx
function StatusNotices(t0) {
  const $ = c(4);
  const {
    agentDefinitions
  } = t0 === void 0 ? {} : t0;
  const t1 = getGlobalConfig();
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = getMemoryFiles();
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  const context = {
    config: t1,
    agentDefinitions,
    memoryFiles: use(t2)
  };
  const activeNotices = getActiveNotices(context);
  if (activeNotices.length === 0) {
    return null;
  }
  const T0 = ThemedBox_default;
  const t3 = "column";
  const t4 = 1;
  const t5 = activeNotices.map((notice) => /* @__PURE__ */ createElement(Fragment, { key: notice.id }, notice.render(context)));
  let t6;
  if ($[1] !== T0 || $[2] !== t5) {
    t6 = /* @__PURE__ */ createElement(T0, { flexDirection: t3, paddingLeft: t4 }, t5);
    $[1] = T0;
    $[2] = t5;
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  return t6;
}
var init_StatusNotices = __esm({
  "src/components/StatusNotices.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_ink();
    init_claudemd();
    init_config();
    init_statusNoticeDefinitions();
  }
});

// src/hooks/useVirtualScroll.ts
function useVirtualScroll(scrollRef, itemKeys, columns) {
  const heightCache = useRef(/* @__PURE__ */ new Map());
  const offsetVersionRef = useRef(0);
  const lastScrollTopRef = useRef(0);
  const offsetsRef = useRef({
    arr: new Float64Array(0),
    version: -1,
    n: -1
  });
  const itemRefs = useRef(/* @__PURE__ */ new Map());
  const refCache = useRef(/* @__PURE__ */ new Map());
  const prevColumns = useRef(columns);
  const skipMeasurementRef = useRef(false);
  const prevRangeRef = useRef(null);
  const freezeRendersRef = useRef(0);
  if (prevColumns.current !== columns) {
    const ratio = prevColumns.current / columns;
    prevColumns.current = columns;
    for (const [k, h] of heightCache.current) {
      heightCache.current.set(k, Math.max(1, Math.round(h * ratio)));
    }
    offsetVersionRef.current++;
    skipMeasurementRef.current = true;
    freezeRendersRef.current = 2;
  }
  const frozenRange = freezeRendersRef.current > 0 ? prevRangeRef.current : null;
  const listOriginRef = useRef(0);
  const spacerRef = useRef(null);
  const subscribe = useCallback(
    (listener) => scrollRef.current?.subscribe(listener) ?? NOOP_UNSUB,
    [scrollRef]
  );
  useSyncExternalStore(subscribe, () => {
    const s = scrollRef.current;
    if (!s) return NaN;
    const target = s.getScrollTop() + s.getPendingDelta();
    const bin = Math.floor(target / SCROLL_QUANTUM);
    return s.isSticky() ? ~bin : bin;
  });
  const scrollTop = scrollRef.current?.getScrollTop() ?? -1;
  const pendingDelta = scrollRef.current?.getPendingDelta() ?? 0;
  const viewportH = scrollRef.current?.getViewportHeight() ?? 0;
  const isSticky = scrollRef.current?.isSticky() ?? true;
  useMemo(() => {
    const live = new Set(itemKeys);
    let dirty = false;
    for (const k of heightCache.current.keys()) {
      if (!live.has(k)) {
        heightCache.current.delete(k);
        dirty = true;
      }
    }
    for (const k of refCache.current.keys()) {
      if (!live.has(k)) refCache.current.delete(k);
    }
    if (dirty) offsetVersionRef.current++;
  }, [itemKeys]);
  const n = itemKeys.length;
  if (offsetsRef.current.version !== offsetVersionRef.current || offsetsRef.current.n !== n) {
    const arr = offsetsRef.current.arr.length >= n + 1 ? offsetsRef.current.arr : new Float64Array(n + 1);
    arr[0] = 0;
    for (let i = 0; i < n; i++) {
      arr[i + 1] = arr[i] + (heightCache.current.get(itemKeys[i]) ?? DEFAULT_ESTIMATE);
    }
    offsetsRef.current = { arr, version: offsetVersionRef.current, n };
  }
  const offsets = offsetsRef.current.arr;
  const totalHeight = offsets[n];
  let start;
  let end;
  if (frozenRange) {
    ;
    [start, end] = frozenRange;
    start = Math.min(start, n);
    end = Math.min(end, n);
  } else if (viewportH === 0 || scrollTop < 0) {
    start = Math.max(0, n - COLD_START_COUNT);
    end = n;
  } else {
    if (isSticky) {
      const budget = viewportH + OVERSCAN_ROWS;
      start = n;
      while (start > 0 && totalHeight - offsets[start - 1] < budget) {
        start--;
      }
      end = n;
    } else {
      const listOrigin2 = listOriginRef.current;
      const MAX_SPAN_ROWS = viewportH * 3;
      const rawLo = Math.min(scrollTop, scrollTop + pendingDelta);
      const rawHi = Math.max(scrollTop, scrollTop + pendingDelta);
      const span = rawHi - rawLo;
      const clampedLo = span > MAX_SPAN_ROWS ? pendingDelta < 0 ? rawHi - MAX_SPAN_ROWS : rawLo : rawLo;
      const clampedHi = clampedLo + Math.min(span, MAX_SPAN_ROWS);
      const effLo = Math.max(0, clampedLo - listOrigin2);
      const effHi = clampedHi - listOrigin2;
      const lo = effLo - OVERSCAN_ROWS;
      {
        let l = 0;
        let r = n;
        while (l < r) {
          const m = l + r >> 1;
          if (offsets[m + 1] <= lo) l = m + 1;
          else r = m;
        }
        start = l;
      }
      {
        const p = prevRangeRef.current;
        if (p && p[0] < start) {
          for (let i = p[0]; i < Math.min(start, p[1]); i++) {
            const k = itemKeys[i];
            if (itemRefs.current.has(k) && !heightCache.current.has(k)) {
              start = i;
              break;
            }
          }
        }
      }
      const needed2 = viewportH + 2 * OVERSCAN_ROWS;
      const maxEnd = Math.min(n, start + MAX_MOUNTED_ITEMS);
      let coverage2 = 0;
      end = start;
      while (end < maxEnd && (coverage2 < needed2 || offsets[end] < effHi + viewportH + OVERSCAN_ROWS)) {
        coverage2 += heightCache.current.get(itemKeys[end]) ?? PESSIMISTIC_HEIGHT;
        end++;
      }
    }
    const needed = viewportH + 2 * OVERSCAN_ROWS;
    const minStart = Math.max(0, end - MAX_MOUNTED_ITEMS);
    let coverage = 0;
    for (let i = start; i < end; i++) {
      coverage += heightCache.current.get(itemKeys[i]) ?? PESSIMISTIC_HEIGHT;
    }
    while (start > minStart && coverage < needed) {
      start--;
      coverage += heightCache.current.get(itemKeys[start]) ?? PESSIMISTIC_HEIGHT;
    }
    const prev = prevRangeRef.current;
    const scrollVelocity = Math.abs(scrollTop - lastScrollTopRef.current) + Math.abs(pendingDelta);
    if (prev && scrollVelocity > viewportH * 2) {
      const [pS, pE] = prev;
      if (start < pS - SLIDE_STEP) start = pS - SLIDE_STEP;
      if (end > pE + SLIDE_STEP) end = pE + SLIDE_STEP;
      if (start > end) end = Math.min(start + SLIDE_STEP, n);
    }
    lastScrollTopRef.current = scrollTop;
  }
  if (freezeRendersRef.current > 0) {
    freezeRendersRef.current--;
  } else {
    prevRangeRef.current = [start, end];
  }
  const dStart = useDeferredValue(start);
  const dEnd = useDeferredValue(end);
  let effStart = start < dStart ? dStart : start;
  let effEnd = end > dEnd ? dEnd : end;
  if (effStart > effEnd || isSticky) {
    effStart = start;
    effEnd = end;
  }
  if (pendingDelta > 0) {
    effEnd = end;
  }
  if (effEnd - effStart > MAX_MOUNTED_ITEMS) {
    const mid = (offsets[effStart] + offsets[effEnd]) / 2;
    if (scrollTop - listOriginRef.current < mid) {
      effEnd = effStart + MAX_MOUNTED_ITEMS;
    } else {
      effStart = effEnd - MAX_MOUNTED_ITEMS;
    }
  }
  const listOrigin = listOriginRef.current;
  const effTopSpacer = offsets[effStart];
  const clampMin = effStart === 0 ? 0 : effTopSpacer + listOrigin;
  const clampMax = effEnd === n ? Infinity : Math.max(effTopSpacer, offsets[effEnd] - viewportH) + listOrigin;
  useLayoutEffect(() => {
    if (isSticky) {
      scrollRef.current?.setClampBounds(void 0, void 0);
    } else {
      scrollRef.current?.setClampBounds(clampMin, clampMax);
    }
  });
  useLayoutEffect(() => {
    const spacerYoga = spacerRef.current?.yogaNode;
    if (spacerYoga && spacerYoga.getComputedWidth() > 0) {
      listOriginRef.current = spacerYoga.getComputedTop();
    }
    if (skipMeasurementRef.current) {
      skipMeasurementRef.current = false;
      return;
    }
    let anyChanged = false;
    for (const [key, el] of itemRefs.current) {
      const yoga = el.yogaNode;
      if (!yoga) continue;
      const h = yoga.getComputedHeight();
      const prev = heightCache.current.get(key);
      if (h > 0) {
        if (prev !== h) {
          heightCache.current.set(key, h);
          anyChanged = true;
        }
      } else if (yoga.getComputedWidth() > 0 && prev !== 0) {
        heightCache.current.set(key, 0);
        anyChanged = true;
      }
    }
    if (anyChanged) offsetVersionRef.current++;
  });
  const measureRef = useCallback((key) => {
    let fn = refCache.current.get(key);
    if (!fn) {
      fn = (el) => {
        if (el) {
          itemRefs.current.set(key, el);
        } else {
          const yoga = itemRefs.current.get(key)?.yogaNode;
          if (yoga && !skipMeasurementRef.current) {
            const h = yoga.getComputedHeight();
            if ((h > 0 || yoga.getComputedWidth() > 0) && heightCache.current.get(key) !== h) {
              heightCache.current.set(key, h);
              offsetVersionRef.current++;
            }
          }
          itemRefs.current.delete(key);
        }
      };
      refCache.current.set(key, fn);
    }
    return fn;
  }, []);
  const getItemTop = useCallback(
    (index) => {
      const yoga = itemRefs.current.get(itemKeys[index])?.yogaNode;
      if (!yoga || yoga.getComputedWidth() === 0) return -1;
      return yoga.getComputedTop();
    },
    [itemKeys]
  );
  const getItemElement = useCallback(
    (index) => itemRefs.current.get(itemKeys[index]) ?? null,
    [itemKeys]
  );
  const getItemHeight = useCallback(
    (index) => heightCache.current.get(itemKeys[index]),
    [itemKeys]
  );
  const scrollToIndex = useCallback(
    (i) => {
      const o = offsetsRef.current;
      if (i < 0 || i >= o.n) return;
      scrollRef.current?.scrollTo(o.arr[i] + listOriginRef.current);
    },
    [scrollRef]
  );
  const effBottomSpacer = totalHeight - offsets[effEnd];
  return {
    range: [effStart, effEnd],
    topSpacer: effTopSpacer,
    bottomSpacer: effBottomSpacer,
    measureRef,
    spacerRef,
    offsets,
    getItemTop,
    getItemElement,
    getItemHeight,
    scrollToIndex
  };
}
var DEFAULT_ESTIMATE, OVERSCAN_ROWS, COLD_START_COUNT, SCROLL_QUANTUM, PESSIMISTIC_HEIGHT, MAX_MOUNTED_ITEMS, SLIDE_STEP, NOOP_UNSUB;
var init_useVirtualScroll = __esm({
  "src/hooks/useVirtualScroll.ts"() {
    init_react();
    DEFAULT_ESTIMATE = 3;
    OVERSCAN_ROWS = 80;
    COLD_START_COUNT = 30;
    SCROLL_QUANTUM = OVERSCAN_ROWS >> 1;
    PESSIMISTIC_HEIGHT = 1;
    MAX_MOUNTED_ITEMS = 300;
    SLIDE_STEP = 25;
    NOOP_UNSUB = () => {
    };
  }
});

// src/components/VirtualMessageList.tsx
function defaultExtractSearchText(msg) {
  const cached = fallbackLowerCache.get(msg);
  if (cached !== void 0) return cached;
  const lowered = renderableSearchText(msg);
  fallbackLowerCache.set(msg, lowered);
  return lowered;
}
function stickyPromptText(msg) {
  const cached = promptTextCache.get(msg);
  if (cached !== void 0) return cached;
  const result = computeStickyPromptText(msg);
  promptTextCache.set(msg, result);
  return result;
}
function computeStickyPromptText(msg) {
  let raw = null;
  if (msg.type === "user") {
    if (msg.isMeta || msg.isVisibleInTranscriptOnly) return null;
    const block = msg.message.content[0];
    if (block?.type !== "text") return null;
    raw = block.text;
  } else if (msg.type === "attachment" && msg.attachment.type === "queued_command" && msg.attachment.commandMode !== "task-notification" && !msg.attachment.isMeta) {
    const p = msg.attachment.prompt;
    raw = typeof p === "string" ? p : p.flatMap((b) => b.type === "text" ? [b.text] : []).join("\n");
  }
  if (raw === null) return null;
  const t = stripSystemReminders(raw);
  if (t.startsWith("<") || t === "") return null;
  return t;
}
function VirtualItem(t0) {
  const $ = c(30);
  const {
    itemKey: k,
    msg,
    idx,
    measureRef,
    expanded,
    hovered,
    clickable,
    onClickK,
    onEnterK,
    onLeaveK,
    renderItem
  } = t0;
  let t1;
  if ($[0] !== k || $[1] !== measureRef) {
    t1 = measureRef(k);
    $[0] = k;
    $[1] = measureRef;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const t2 = expanded ? "userMessageBackgroundHover" : void 0;
  const t3 = expanded ? 1 : void 0;
  let t4;
  if ($[3] !== clickable || $[4] !== msg || $[5] !== onClickK) {
    t4 = clickable ? (e) => onClickK(msg, e.cellIsBlank) : void 0;
    $[3] = clickable;
    $[4] = msg;
    $[5] = onClickK;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== clickable || $[8] !== k || $[9] !== onEnterK) {
    t5 = clickable ? () => onEnterK(k) : void 0;
    $[7] = clickable;
    $[8] = k;
    $[9] = onEnterK;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== clickable || $[12] !== k || $[13] !== onLeaveK) {
    t6 = clickable ? () => onLeaveK(k) : void 0;
    $[11] = clickable;
    $[12] = k;
    $[13] = onLeaveK;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  const t7 = hovered && !expanded ? "text" : void 0;
  let t8;
  if ($[15] !== idx || $[16] !== msg || $[17] !== renderItem) {
    t8 = renderItem(msg, idx);
    $[15] = idx;
    $[16] = msg;
    $[17] = renderItem;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  let t9;
  if ($[19] !== t7 || $[20] !== t8) {
    t9 = /* @__PURE__ */ createElement(TextHoverColorContext.Provider, { value: t7 }, t8);
    $[19] = t7;
    $[20] = t8;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[22] !== t1 || $[23] !== t2 || $[24] !== t3 || $[25] !== t4 || $[26] !== t5 || $[27] !== t6 || $[28] !== t9) {
    t10 = /* @__PURE__ */ createElement(ThemedBox_default, { ref: t1, flexDirection: "column", backgroundColor: t2, paddingBottom: t3, onClick: t4, onMouseEnter: t5, onMouseLeave: t6 }, t9);
    $[22] = t1;
    $[23] = t2;
    $[24] = t3;
    $[25] = t4;
    $[26] = t5;
    $[27] = t6;
    $[28] = t9;
    $[29] = t10;
  } else {
    t10 = $[29];
  }
  return t10;
}
function VirtualMessageList({
  messages,
  scrollRef,
  columns,
  itemKey,
  renderItem,
  onItemClick,
  isItemClickable,
  isItemExpanded,
  extractSearchText = defaultExtractSearchText,
  trackStickyPrompt,
  selectedIndex,
  cursorNavRef,
  setCursor,
  jumpRef,
  onSearchMatchesChange,
  scanElement,
  setPositions
}) {
  const keysRef = useRef([]);
  const prevMessagesRef = useRef(messages);
  const prevItemKeyRef = useRef(itemKey);
  if (prevItemKeyRef.current !== itemKey || messages.length < keysRef.current.length || messages[0] !== prevMessagesRef.current[0]) {
    keysRef.current = messages.map((m) => itemKey(m));
  } else {
    for (let i = keysRef.current.length; i < messages.length; i++) {
      keysRef.current.push(itemKey(messages[i]));
    }
  }
  prevMessagesRef.current = messages;
  prevItemKeyRef.current = itemKey;
  const keys = keysRef.current;
  const {
    range,
    topSpacer,
    bottomSpacer,
    measureRef,
    spacerRef,
    offsets,
    getItemTop,
    getItemElement,
    getItemHeight,
    scrollToIndex
  } = useVirtualScroll(scrollRef, keys, columns);
  const [start, end] = range;
  const isVisible = useCallback((i) => {
    const h = getItemHeight(i);
    if (h === 0) return false;
    return isNavigableMessage(messages[i]);
  }, [getItemHeight, messages]);
  useImperativeHandle(cursorNavRef, () => {
    const select = (m) => setCursor?.({
      uuid: m.uuid,
      msgType: m.type,
      expanded: false,
      toolName: toolCallOf(m)?.name
    });
    const selIdx = selectedIndex ?? -1;
    const scan = (from, dir, pred = isVisible) => {
      for (let i = from; i >= 0 && i < messages.length; i += dir) {
        if (pred(i)) {
          select(messages[i]);
          return true;
        }
      }
      return false;
    };
    const isUser = (i) => isVisible(i) && messages[i].type === "user";
    return {
      // Entry via shift+↑ = same semantic as in-cursor shift+↑ (prevUser).
      enterCursor: () => scan(messages.length - 1, -1, isUser),
      navigatePrev: () => scan(selIdx - 1, -1),
      navigateNext: () => {
        if (scan(selIdx + 1, 1)) return;
        scrollRef.current?.scrollToBottom();
        setCursor?.(null);
      },
      // type:'user' only — queued_command attachments look like prompts but have no raw UserMessage to rewind to.
      navigatePrevUser: () => scan(selIdx - 1, -1, isUser),
      navigateNextUser: () => scan(selIdx + 1, 1, isUser),
      navigateTop: () => scan(0, 1),
      navigateBottom: () => scan(messages.length - 1, -1),
      getSelected: () => selIdx >= 0 ? messages[selIdx] ?? null : null
    };
  }, [messages, selectedIndex, setCursor, isVisible]);
  const jumpState = useRef({
    offsets,
    start,
    getItemElement,
    getItemTop,
    messages,
    scrollToIndex
  });
  jumpState.current = {
    offsets,
    start,
    getItemElement,
    getItemTop,
    messages,
    scrollToIndex
  };
  useEffect(() => {
    if (selectedIndex === void 0) return;
    const s = jumpState.current;
    const el = s.getItemElement(selectedIndex);
    if (el) {
      scrollRef.current?.scrollToElement(el, 1);
    } else {
      s.scrollToIndex(selectedIndex);
    }
  }, [selectedIndex, scrollRef]);
  const scanRequestRef = useRef(null);
  const elementPositions = useRef({
    msgIdx: -1,
    positions: []
  });
  const startPtrRef = useRef(-1);
  const phantomBurstRef = useRef(0);
  const pendingStepRef = useRef(0);
  const stepRef = useRef(() => {
  });
  const highlightRef = useRef(() => {
  });
  const searchState = useRef({
    matches: [],
    // deduplicated msg indices
    ptr: 0,
    screenOrd: 0,
    // Cumulative engine-occurrence count before each matches[k]. Lets us
    // compute a global current index: prefixSum[ptr] + screenOrd + 1.
    // Engine-counted (indexOf on extractSearchText), not render-counted —
    // close enough for the badge; exact counts would need scanElement on
    // every matched message (~1-3ms × N). total = prefixSum[matches.length].
    prefixSum: []
  });
  const searchAnchor = useRef(-1);
  const indexWarmed = useRef(false);
  function targetFor(i) {
    const top = jumpState.current.getItemTop(i);
    return Math.max(0, top - HEADROOM);
  }
  function highlight(ord) {
    const s = scrollRef.current;
    const {
      msgIdx,
      positions
    } = elementPositions.current;
    if (!s || positions.length === 0 || msgIdx < 0) {
      setPositions?.(null);
      return;
    }
    const idx = Math.max(0, Math.min(ord, positions.length - 1));
    const p = positions[idx];
    const top = jumpState.current.getItemTop(msgIdx);
    const vpTop = s.getViewportTop();
    let lo = top - s.getScrollTop();
    const vp = s.getViewportHeight();
    let screenRow = vpTop + lo + p.row;
    if (screenRow < vpTop || screenRow >= vpTop + vp) {
      s.scrollTo(Math.max(0, top + p.row - HEADROOM));
      lo = top - s.getScrollTop();
      screenRow = vpTop + lo + p.row;
    }
    setPositions?.({
      positions,
      rowOffset: vpTop + lo,
      currentIdx: idx
    });
    const st = searchState.current;
    const total = st.prefixSum.at(-1) ?? 0;
    const current = (st.prefixSum[st.ptr] ?? 0) + idx + 1;
    onSearchMatchesChange?.(total, current);
    logForDebugging(`highlight(i=${msgIdx}, ord=${idx}/${positions.length}): pos={row:${p.row},col:${p.col}} lo=${lo} screenRow=${screenRow} badge=${current}/${total}`);
  }
  highlightRef.current = highlight;
  const [seekGen, setSeekGen] = useState(0);
  const bumpSeek = useCallback(() => setSeekGen((g) => g + 1), []);
  useEffect(() => {
    const req = scanRequestRef.current;
    if (!req) return;
    const {
      idx,
      wantLast,
      tries
    } = req;
    const s = scrollRef.current;
    if (!s) return;
    const {
      getItemElement: getItemElement2,
      getItemTop: getItemTop2,
      scrollToIndex: scrollToIndex2
    } = jumpState.current;
    const el = getItemElement2(idx);
    const h = el?.yogaNode?.getComputedHeight() ?? 0;
    if (!el || h === 0) {
      if (tries > 1) {
        scanRequestRef.current = null;
        logForDebugging(`seek(i=${idx}): no mount after scrollToIndex, skip`);
        stepRef.current(wantLast ? -1 : 1);
        return;
      }
      scanRequestRef.current = {
        idx,
        wantLast,
        tries: tries + 1
      };
      scrollToIndex2(idx);
      bumpSeek();
      return;
    }
    scanRequestRef.current = null;
    s.scrollTo(Math.max(0, getItemTop2(idx) - HEADROOM));
    const positions = scanElement?.(el) ?? [];
    elementPositions.current = {
      msgIdx: idx,
      positions
    };
    logForDebugging(`seek(i=${idx} t=${tries}): ${positions.length} positions`);
    if (positions.length === 0) {
      if (++phantomBurstRef.current > 20) {
        phantomBurstRef.current = 0;
        return;
      }
      stepRef.current(wantLast ? -1 : 1);
      return;
    }
    phantomBurstRef.current = 0;
    const ord = wantLast ? positions.length - 1 : 0;
    searchState.current.screenOrd = ord;
    startPtrRef.current = -1;
    highlightRef.current(ord);
    const pending = pendingStepRef.current;
    if (pending) {
      pendingStepRef.current = 0;
      stepRef.current(pending);
    }
  }, [seekGen]);
  function jump(i, wantLast) {
    const s = scrollRef.current;
    if (!s) return;
    const js = jumpState.current;
    const {
      getItemElement: getItemElement2,
      scrollToIndex: scrollToIndex2
    } = js;
    if (i < 0 || i >= js.messages.length) return;
    setPositions?.(null);
    elementPositions.current = {
      msgIdx: -1,
      positions: []
    };
    scanRequestRef.current = {
      idx: i,
      wantLast,
      tries: 0
    };
    const el = getItemElement2(i);
    const h = el?.yogaNode?.getComputedHeight() ?? 0;
    if (el && h > 0) {
      s.scrollTo(targetFor(i));
    } else {
      scrollToIndex2(i);
    }
    bumpSeek();
  }
  function step(delta) {
    const st = searchState.current;
    const {
      matches,
      prefixSum
    } = st;
    const total = prefixSum.at(-1) ?? 0;
    if (matches.length === 0) return;
    if (scanRequestRef.current) {
      pendingStepRef.current = delta;
      return;
    }
    if (startPtrRef.current < 0) startPtrRef.current = st.ptr;
    const {
      positions
    } = elementPositions.current;
    const newOrd = st.screenOrd + delta;
    if (newOrd >= 0 && newOrd < positions.length) {
      st.screenOrd = newOrd;
      highlight(newOrd);
      startPtrRef.current = -1;
      return;
    }
    const ptr = (st.ptr + delta + matches.length) % matches.length;
    if (ptr === startPtrRef.current) {
      setPositions?.(null);
      startPtrRef.current = -1;
      logForDebugging(`step: wraparound at ptr=${ptr}, all ${matches.length} msgs phantoms`);
      return;
    }
    st.ptr = ptr;
    st.screenOrd = 0;
    jump(matches[ptr], delta < 0);
    const placeholder = delta < 0 ? prefixSum[ptr + 1] ?? total : prefixSum[ptr] + 1;
    onSearchMatchesChange?.(total, placeholder);
  }
  stepRef.current = step;
  useImperativeHandle(
    jumpRef,
    () => ({
      // Non-search jump (sticky header click, etc). No scan, no positions.
      jumpToIndex: (i) => {
        const s = scrollRef.current;
        if (s) s.scrollTo(targetFor(i));
      },
      setSearchQuery: (q) => {
        scanRequestRef.current = null;
        elementPositions.current = {
          msgIdx: -1,
          positions: []
        };
        startPtrRef.current = -1;
        setPositions?.(null);
        const lq = q.toLowerCase();
        const matches = [];
        const prefixSum = [0];
        if (lq) {
          const msgs = jumpState.current.messages;
          for (let i = 0; i < msgs.length; i++) {
            const text = extractSearchText(msgs[i]);
            let pos = text.indexOf(lq);
            let cnt = 0;
            while (pos >= 0) {
              cnt++;
              pos = text.indexOf(lq, pos + lq.length);
            }
            if (cnt > 0) {
              matches.push(i);
              prefixSum.push(prefixSum.at(-1) + cnt);
            }
          }
        }
        const total = prefixSum.at(-1);
        let ptr = 0;
        const s = scrollRef.current;
        const {
          offsets: offsets2,
          start: start2,
          getItemTop: getItemTop2
        } = jumpState.current;
        const firstTop = getItemTop2(start2);
        const origin = firstTop >= 0 ? firstTop - offsets2[start2] : 0;
        if (matches.length > 0 && s) {
          const curTop = searchAnchor.current >= 0 ? searchAnchor.current : s.getScrollTop();
          let best = Infinity;
          for (let k = 0; k < matches.length; k++) {
            const d = Math.abs(origin + offsets2[matches[k]] - curTop);
            if (d <= best) {
              best = d;
              ptr = k;
            }
          }
          logForDebugging(`setSearchQuery('${q}'): ${matches.length} msgs \xB7 ptr=${ptr} msgIdx=${matches[ptr]} curTop=${curTop} origin=${origin}`);
        }
        searchState.current = {
          matches,
          ptr,
          screenOrd: 0,
          prefixSum
        };
        if (matches.length > 0) {
          jump(matches[ptr], true);
        } else if (searchAnchor.current >= 0 && s) {
          s.scrollTo(searchAnchor.current);
        }
        onSearchMatchesChange?.(total, matches.length > 0 ? prefixSum[ptr + 1] ?? total : 0);
      },
      nextMatch: () => step(1),
      prevMatch: () => step(-1),
      setAnchor: () => {
        const s = scrollRef.current;
        if (s) searchAnchor.current = s.getScrollTop();
      },
      disarmSearch: () => {
        setPositions?.(null);
        scanRequestRef.current = null;
        elementPositions.current = {
          msgIdx: -1,
          positions: []
        };
        startPtrRef.current = -1;
      },
      warmSearchIndex: async () => {
        if (indexWarmed.current) return 0;
        const msgs = jumpState.current.messages;
        const CHUNK = 500;
        let workMs = 0;
        const wallStart = performance.now();
        for (let i = 0; i < msgs.length; i += CHUNK) {
          await sleep(0);
          const t0 = performance.now();
          const end2 = Math.min(i + CHUNK, msgs.length);
          for (let j = i; j < end2; j++) {
            extractSearchText(msgs[j]);
          }
          workMs += performance.now() - t0;
        }
        const wallMs = Math.round(performance.now() - wallStart);
        logForDebugging(`warmSearchIndex: ${msgs.length} msgs \xB7 work=${Math.round(workMs)}ms wall=${wallMs}ms chunks=${Math.ceil(msgs.length / CHUNK)}`);
        indexWarmed.current = true;
        return Math.round(workMs);
      }
    }),
    // Closures over refs + callbacks. scrollRef stable; others are
    // useCallback([]) or prop-drilled from REPL (stable).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollRef]
  );
  const [hoveredKey, setHoveredKey] = useState(null);
  const handlersRef = useRef({
    onItemClick,
    setHoveredKey
  });
  handlersRef.current = {
    onItemClick,
    setHoveredKey
  };
  const onClickK = useCallback((msg, cellIsBlank) => {
    const h = handlersRef.current;
    if (!cellIsBlank && h.onItemClick) h.onItemClick(msg);
  }, []);
  const onEnterK = useCallback((k) => {
    handlersRef.current.setHoveredKey(k);
  }, []);
  const onLeaveK = useCallback((k) => {
    handlersRef.current.setHoveredKey((prev) => prev === k ? null : prev);
  }, []);
  return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedBox_default, { ref: spacerRef, height: topSpacer, flexShrink: 0 }), messages.slice(start, end).map((msg, i) => {
    const idx = start + i;
    const k = keys[idx];
    const clickable = !!onItemClick && (isItemClickable?.(msg) ?? true);
    const hovered = clickable && hoveredKey === k;
    const expanded = isItemExpanded?.(msg);
    return /* @__PURE__ */ createElement(VirtualItem, { key: k, itemKey: k, msg, idx, measureRef, expanded, hovered, clickable, onClickK, onEnterK, onLeaveK, renderItem });
  }), bottomSpacer > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { height: bottomSpacer, flexShrink: 0 }), trackStickyPrompt && /* @__PURE__ */ createElement(StickyTracker, { messages, start, end, offsets, getItemTop, getItemElement, scrollRef }));
}
function StickyTracker({
  messages,
  start,
  end,
  offsets,
  getItemTop,
  getItemElement,
  scrollRef
}) {
  const {
    setStickyPrompt
  } = useContext(ScrollChromeContext);
  const subscribe = useCallback((listener) => scrollRef.current?.subscribe(listener) ?? NOOP_UNSUB2, [scrollRef]);
  useSyncExternalStore(subscribe, () => {
    const s = scrollRef.current;
    if (!s) return NaN;
    const t = s.getScrollTop() + s.getPendingDelta();
    return s.isSticky() ? -1 - t : t;
  });
  const isSticky = scrollRef.current?.isSticky() ?? true;
  const target = Math.max(0, (scrollRef.current?.getScrollTop() ?? 0) + (scrollRef.current?.getPendingDelta() ?? 0));
  let firstVisible = start;
  let firstVisibleTop = -1;
  for (let i = end - 1; i >= start; i--) {
    const top = getItemTop(i);
    if (top >= 0) {
      if (top < target) break;
      firstVisibleTop = top;
    }
    firstVisible = i;
  }
  let idx = -1;
  let text = null;
  if (firstVisible > 0 && !isSticky) {
    for (let i = firstVisible - 1; i >= 0; i--) {
      const t = stickyPromptText(messages[i]);
      if (t === null) continue;
      const top = getItemTop(i);
      if (top >= 0 && top + 1 >= target) continue;
      idx = i;
      text = t;
      break;
    }
  }
  const baseOffset = firstVisibleTop >= 0 ? firstVisibleTop - offsets[firstVisible] : 0;
  const estimate = idx >= 0 ? Math.max(0, baseOffset + offsets[idx]) : -1;
  const pending = useRef({
    idx: -1,
    tries: 0
  });
  const suppress = useRef("none");
  const lastIdx = useRef(-1);
  useEffect(() => {
    if (pending.current.idx >= 0) return;
    if (suppress.current === "armed") {
      suppress.current = "force";
      return;
    }
    const force = suppress.current === "force";
    suppress.current = "none";
    if (!force && lastIdx.current === idx) return;
    lastIdx.current = idx;
    if (text === null) {
      setStickyPrompt(null);
      return;
    }
    const trimmed = text.trimStart();
    const paraEnd = trimmed.search(/\n\s*\n/);
    const collapsed = (paraEnd >= 0 ? trimmed.slice(0, paraEnd) : trimmed).slice(0, STICKY_TEXT_CAP).replace(/\s+/g, " ").trim();
    if (collapsed === "") {
      setStickyPrompt(null);
      return;
    }
    const capturedIdx = idx;
    const capturedEstimate = estimate;
    setStickyPrompt({
      text: collapsed,
      scrollTo: () => {
        setStickyPrompt("clicked");
        suppress.current = "armed";
        const el = getItemElement(capturedIdx);
        if (el) {
          scrollRef.current?.scrollToElement(el, 1);
        } else {
          scrollRef.current?.scrollTo(capturedEstimate);
          pending.current = {
            idx: capturedIdx,
            tries: 0
          };
        }
      }
    });
  });
  useEffect(() => {
    if (pending.current.idx < 0) return;
    const el = getItemElement(pending.current.idx);
    if (el) {
      scrollRef.current?.scrollToElement(el, 1);
      pending.current = {
        idx: -1,
        tries: 0
      };
    } else if (++pending.current.tries > 5) {
      pending.current = {
        idx: -1,
        tries: 0
      };
    }
  });
  return null;
}
var HEADROOM, fallbackLowerCache, STICKY_TEXT_CAP, promptTextCache, NOOP_UNSUB2;
var init_VirtualMessageList = __esm({
  "src/components/VirtualMessageList.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_useVirtualScroll();
    init_ink();
    init_ThemedText();
    init_FullscreenLayout();
    init_debug();
    init_sleep();
    init_transcriptSearch();
    init_messageActions();
    HEADROOM = 3;
    fallbackLowerCache = /* @__PURE__ */ new WeakMap();
    STICKY_TEXT_CAP = 500;
    promptTextCache = /* @__PURE__ */ new WeakMap();
    NOOP_UNSUB2 = () => {
    };
  }
});

// src/components/Messages.tsx
function filterForBriefTool(messages, briefToolNames) {
  const nameSet = new Set(briefToolNames);
  const briefToolUseIDs = /* @__PURE__ */ new Set();
  return messages.filter((msg) => {
    if (msg.type === "system") return msg.subtype !== "api_metrics";
    const block = msg.message?.content[0];
    if (msg.type === "assistant") {
      if (msg.isApiErrorMessage) return true;
      if (block?.type === "tool_use" && block.name && nameSet.has(block.name)) {
        if ("id" in block) {
          briefToolUseIDs.add(block.id);
        }
        return true;
      }
      return false;
    }
    if (msg.type === "user") {
      if (block?.type === "tool_result") {
        return block.tool_use_id !== void 0 && briefToolUseIDs.has(block.tool_use_id);
      }
      return !msg.isMeta;
    }
    if (msg.type === "attachment") {
      const att = msg.attachment;
      return att?.type === "queued_command" && att.commandMode === "prompt" && !att.isMeta && att.origin === void 0;
    }
    return false;
  });
}
function dropTextInBriefTurns(messages, briefToolNames) {
  const nameSet = new Set(briefToolNames);
  const turnsWithBrief = /* @__PURE__ */ new Set();
  const textIndexToTurn = [];
  let turn = 0;
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    const block = msg.message?.content[0];
    if (msg.type === "user" && block?.type !== "tool_result" && !msg.isMeta) {
      turn++;
      continue;
    }
    if (msg.type === "assistant") {
      if (block?.type === "text") {
        textIndexToTurn[i] = turn;
      } else if (block?.type === "tool_use" && block.name && nameSet.has(block.name)) {
        turnsWithBrief.add(turn);
      }
    }
  }
  if (turnsWithBrief.size === 0) return messages;
  return messages.filter((_, i) => {
    const t = textIndexToTurn[i];
    return t === void 0 || !turnsWithBrief.has(t);
  });
}
function computeSliceStart(collapsed, anchorRef, cap = MAX_MESSAGES_WITHOUT_VIRTUALIZATION, step = MESSAGE_CAP_STEP) {
  const anchor = anchorRef.current;
  const anchorIdx = anchor ? collapsed.findIndex((m) => m.uuid === anchor.uuid) : -1;
  let start = anchorIdx >= 0 ? anchorIdx : anchor ? Math.min(anchor.idx, Math.max(0, collapsed.length - cap)) : 0;
  if (collapsed.length - start > cap + step) {
    start = collapsed.length - cap;
  }
  const msgAtStart = collapsed[start];
  if (msgAtStart && (anchor?.uuid !== msgAtStart.uuid || anchor.idx !== start)) {
    anchorRef.current = {
      uuid: msgAtStart.uuid,
      idx: start
    };
  } else if (!msgAtStart && anchor) {
    anchorRef.current = null;
  }
  return start;
}
function expandKey(msg) {
  return (msg.type === "assistant" || msg.type === "user" ? getToolUseID(msg) : null) ?? msg.uuid;
}
function setsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const item of a) {
    if (!b.has(item)) return false;
  }
  return true;
}
function shouldRenderStatically(message, streamingToolUseIDs, inProgressToolUseIDs, siblingToolUseIDs, screen, lookups) {
  if (screen === "transcript") {
    return true;
  }
  switch (message.type) {
    case "attachment":
    case "user":
    case "assistant": {
      if (message.type === "assistant") {
        const block = message.message.content[0];
        if (block?.type === "server_tool_use") {
          return lookups.resolvedToolUseIDs.has(block.id);
        }
      }
      const toolUseID = getToolUseID(message);
      if (!toolUseID) {
        return true;
      }
      if (streamingToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (inProgressToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (hasUnresolvedHooksFromLookup(toolUseID, "PostToolUse", lookups)) {
        return false;
      }
      return every(siblingToolUseIDs, lookups.resolvedToolUseIDs);
    }
    case "system": {
      return message.subtype !== "api_error";
    }
    case "grouped_tool_use": {
      const allResolved = message.messages.every((msg) => {
        const content = msg.message.content[0];
        return content?.type === "tool_use" && lookups.resolvedToolUseIDs.has(content.id);
      });
      return allResolved;
    }
    case "collapsed_read_search": {
      return false;
    }
  }
}
var LogoHeader, proactiveModule, BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME, MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE, MAX_MESSAGES_WITHOUT_VIRTUALIZATION, MESSAGE_CAP_STEP, MessagesImpl, Messages;
var init_Messages = __esm({
  "src/components/Messages.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_source();
    init_react();
    init_react();
    init_set();
    init_state();
    init_figures2();
    init_useTerminalSize();
    init_useTerminalNotification();
    init_ink();
    init_useShortcutDisplay();
    init_Tool();
    init_advisor();
    init_collapseBackgroundBashNotifications();
    init_collapseHookSummaries();
    init_collapseReadSearch();
    init_collapseTeammateShutdowns();
    init_config();
    init_envUtils();
    init_fullscreen();
    init_groupToolUses();
    init_messages();
    init_stringUtils();
    init_transcriptSearch();
    init_Divider();
    init_LogoV2();
    init_Markdown();
    init_MessageRow();
    init_messageActions();
    init_AssistantThinkingMessage();
    init_nullRenderingAttachments();
    init_OffscreenFreeze();
    init_StatusNotices();
    init_VirtualMessageList();
    LogoHeader = memo(function LogoHeader2(t0) {
      const $ = c(3);
      const {
        agentDefinitions
      } = t0;
      let t1;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(LogoV2, null);
        $[0] = t1;
      } else {
        t1 = $[0];
      }
      let t2;
      if ($[1] !== agentDefinitions) {
        t2 = /* @__PURE__ */ createElement(OffscreenFreeze, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t1, /* @__PURE__ */ createElement(Suspense, { fallback: null }, /* @__PURE__ */ createElement(StatusNotices, { agentDefinitions }))));
        $[1] = agentDefinitions;
        $[2] = t2;
      } else {
        t2 = $[2];
      }
      return t2;
    });
    proactiveModule = feature("PROACTIVE") || feature("KAIROS") ? (init_proactive(), __toCommonJS(proactive_exports)) : null;
    BRIEF_TOOL_NAME = feature("KAIROS") || feature("KAIROS_BRIEF") ? (init_prompt(), __toCommonJS(prompt_exports)).BRIEF_TOOL_NAME : null;
    SEND_USER_FILE_TOOL_NAME = feature("KAIROS") ? (init_prompt2(), __toCommonJS(prompt_exports2)).SEND_USER_FILE_TOOL_NAME : null;
    MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE = 30;
    MAX_MESSAGES_WITHOUT_VIRTUALIZATION = 200;
    MESSAGE_CAP_STEP = 50;
    MessagesImpl = ({
      messages,
      tools,
      commands,
      verbose,
      toolJSX,
      toolUseConfirmQueue,
      inProgressToolUseIDs,
      isMessageSelectorVisible,
      conversationId,
      screen,
      streamingToolUses,
      showAllInTranscript = false,
      agentDefinitions,
      onOpenRateLimitOptions,
      hideLogo = false,
      isLoading,
      hidePastThinking = false,
      streamingThinking,
      streamingText,
      isBriefOnly = false,
      unseenDivider,
      scrollRef,
      trackStickyPrompt,
      jumpRef,
      onSearchMatchesChange,
      scanElement,
      setPositions,
      disableRenderCap = false,
      cursor = null,
      setCursor,
      cursorNavRef,
      renderRange
    }) => {
      const {
        columns
      } = useTerminalSize();
      const toggleShowAllShortcut = useShortcutDisplay("transcript:toggleShowAll", "Transcript", "Ctrl+E");
      const normalizedMessages = useMemo(() => normalizeMessages(messages).filter(isNotEmptyMessage), [messages]);
      const isStreamingThinkingVisible = useMemo(() => {
        if (!streamingThinking) return false;
        if (streamingThinking.isStreaming) return true;
        if (streamingThinking.streamingEndedAt) {
          return Date.now() - streamingThinking.streamingEndedAt < 3e4;
        }
        return false;
      }, [streamingThinking]);
      const lastThinkingBlockId = useMemo(() => {
        if (!hidePastThinking) return null;
        if (isStreamingThinkingVisible) return "streaming";
        for (let i = normalizedMessages.length - 1; i >= 0; i--) {
          const msg = normalizedMessages[i];
          if (msg?.type === "assistant") {
            const content = msg.message.content;
            for (let j = content.length - 1; j >= 0; j--) {
              if (content[j]?.type === "thinking") {
                return `${msg.uuid}:${j}`;
              }
            }
          } else if (msg?.type === "user") {
            const hasToolResult = msg.message.content.some((block) => block.type === "tool_result");
            if (!hasToolResult) {
              return "no-thinking";
            }
          }
        }
        return null;
      }, [normalizedMessages, hidePastThinking, isStreamingThinkingVisible]);
      const latestBashOutputUUID = useMemo(() => {
        for (let i_0 = normalizedMessages.length - 1; i_0 >= 0; i_0--) {
          const msg_0 = normalizedMessages[i_0];
          if (msg_0?.type === "user") {
            const content_0 = msg_0.message.content;
            for (const block_0 of content_0) {
              if (block_0.type === "text") {
                const text = block_0.text;
                if (text.startsWith("<bash-stdout") || text.startsWith("<bash-stderr")) {
                  return msg_0.uuid;
                }
              }
            }
          }
        }
        return null;
      }, [normalizedMessages]);
      const normalizedToolUseIDs = useMemo(() => getToolUseIDs(normalizedMessages), [normalizedMessages]);
      const streamingToolUsesWithoutInProgress = useMemo(() => streamingToolUses.filter((stu) => !inProgressToolUseIDs.has(stu.contentBlock.id) && !normalizedToolUseIDs.has(stu.contentBlock.id)), [streamingToolUses, inProgressToolUseIDs, normalizedToolUseIDs]);
      const syntheticStreamingToolUseMessages = useMemo(() => streamingToolUsesWithoutInProgress.flatMap((streamingToolUse) => {
        const msg_1 = createAssistantMessage({
          content: [streamingToolUse.contentBlock]
        });
        msg_1.uuid = deriveUUID(streamingToolUse.contentBlock.id, 0);
        return normalizeMessages([msg_1]);
      }), [streamingToolUsesWithoutInProgress]);
      const isTranscriptMode = screen === "transcript";
      const disableVirtualScroll = useMemo(() => isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL), []);
      const virtualScrollRuntimeGate = scrollRef != null && !disableVirtualScroll;
      const shouldTruncate = isTranscriptMode && !showAllInTranscript && !virtualScrollRuntimeGate;
      const sliceAnchorRef = useRef(null);
      const {
        collapsed: collapsed_0,
        lookups: lookups_0,
        hasTruncatedMessages: hasTruncatedMessages_0,
        hiddenMessageCount: hiddenMessageCount_0
      } = useMemo(() => {
        const compactAwareMessages = verbose || isFullscreenEnvEnabled() ? normalizedMessages : getMessagesAfterCompactBoundary(normalizedMessages, {
          includeSnipped: true
        });
        const messagesToShowNotTruncated = reorderMessagesInUI(compactAwareMessages.filter((msg_2) => msg_2.type !== "progress").filter((msg_3) => !isNullRenderingAttachment(msg_3)).filter((_) => shouldShowUserMessage(_, isTranscriptMode)), syntheticStreamingToolUseMessages);
        const briefToolNames = [BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME].filter((n) => n !== null);
        const dropTextToolNames = [BRIEF_TOOL_NAME].filter((n_0) => n_0 !== null);
        const briefFiltered = briefToolNames.length > 0 && !isTranscriptMode ? isBriefOnly ? filterForBriefTool(messagesToShowNotTruncated, briefToolNames) : dropTextToolNames.length > 0 ? dropTextInBriefTurns(messagesToShowNotTruncated, dropTextToolNames) : messagesToShowNotTruncated : messagesToShowNotTruncated;
        const messagesToShow = shouldTruncate ? briefFiltered.slice(-MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE) : briefFiltered;
        const hasTruncatedMessages = shouldTruncate && briefFiltered.length > MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;
        const {
          messages: groupedMessages
        } = applyGrouping(messagesToShow, tools, verbose);
        const collapsed = collapseBackgroundBashNotifications(collapseHookSummaries(collapseTeammateShutdowns(collapseReadSearchGroups(groupedMessages, tools))), verbose);
        const lookups = buildMessageLookups(normalizedMessages, messagesToShow);
        const hiddenMessageCount = messagesToShowNotTruncated.length - MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;
        return {
          collapsed,
          lookups,
          hasTruncatedMessages,
          hiddenMessageCount
        };
      }, [verbose, normalizedMessages, isTranscriptMode, syntheticStreamingToolUseMessages, shouldTruncate, tools, isBriefOnly]);
      const renderableMessages = useMemo(() => {
        const capApplies = !virtualScrollRuntimeGate && !disableRenderCap;
        const sliceStart = capApplies ? computeSliceStart(collapsed_0, sliceAnchorRef) : 0;
        return renderRange ? collapsed_0.slice(renderRange[0], renderRange[1]) : sliceStart > 0 ? collapsed_0.slice(sliceStart) : collapsed_0;
      }, [collapsed_0, renderRange, virtualScrollRuntimeGate, disableRenderCap]);
      const streamingToolUseIDs = useMemo(() => new Set(streamingToolUses.map((__0) => __0.contentBlock.id)), [streamingToolUses]);
      const dividerBeforeIndex = useMemo(() => {
        if (!unseenDivider) return -1;
        const prefix = unseenDivider.firstUnseenUuid.slice(0, 24);
        return renderableMessages.findIndex((m) => m.uuid.slice(0, 24) === prefix);
      }, [unseenDivider, renderableMessages]);
      const selectedIdx = useMemo(() => {
        if (!cursor) return -1;
        return renderableMessages.findIndex((m_0) => m_0.uuid === cursor.uuid);
      }, [cursor, renderableMessages]);
      const [expandedKeys, setExpandedKeys] = useState(() => /* @__PURE__ */ new Set());
      const onItemClick = useCallback((msg_4) => {
        const k = expandKey(msg_4);
        setExpandedKeys((prev) => {
          const next = new Set(prev);
          if (next.has(k)) next.delete(k);
          else next.add(k);
          return next;
        });
      }, []);
      const isItemExpanded = useCallback((msg_5) => expandedKeys.size > 0 && expandedKeys.has(expandKey(msg_5)), [expandedKeys]);
      const lookupsRef = useRef(lookups_0);
      lookupsRef.current = lookups_0;
      const isItemClickable = useCallback((msg_6) => {
        if (msg_6.type === "collapsed_read_search") return true;
        if (msg_6.type === "assistant") {
          const b = msg_6.message.content[0];
          return b != null && isAdvisorBlock(b) && b.type === "advisor_tool_result" && b.content.type === "advisor_result";
        }
        if (msg_6.type !== "user") return false;
        const b_0 = msg_6.message.content[0];
        if (b_0?.type !== "tool_result" || b_0.is_error || !msg_6.toolUseResult) return false;
        const name = lookupsRef.current.toolUseByToolUseID.get(b_0.tool_use_id)?.name;
        const tool = name ? findToolByName(tools, name) : void 0;
        return tool?.isResultTruncated?.(msg_6.toolUseResult) ?? false;
      }, [tools]);
      const canAnimate = (!toolJSX || !!toolJSX.shouldContinueAnimation) && !toolUseConfirmQueue.length && !isMessageSelectorVisible;
      const hasToolsInProgress = inProgressToolUseIDs.size > 0;
      const {
        progress
      } = useTerminalNotification();
      const prevProgressState = useRef(null);
      const progressEnabled = getGlobalConfig().terminalProgressBarEnabled && !getIsRemoteMode() && !(proactiveModule?.isProactiveActive() ?? false);
      useEffect(() => {
        const state = progressEnabled ? hasToolsInProgress ? "indeterminate" : "completed" : null;
        if (prevProgressState.current === state) return;
        prevProgressState.current = state;
        progress(state);
      }, [progress, progressEnabled, hasToolsInProgress]);
      useEffect(() => {
        return () => progress(null);
      }, [progress]);
      const messageKey = useCallback((msg_7) => `${msg_7.uuid}-${conversationId}`, [conversationId]);
      const renderMessageRow = (msg_8, index) => {
        const prevType = index > 0 ? renderableMessages[index - 1]?.type : void 0;
        const isUserContinuation = msg_8.type === "user" && prevType === "user";
        const hasContentAfter = msg_8.type === "collapsed_read_search" && (!!streamingText || hasContentAfterIndex(renderableMessages, index, tools, streamingToolUseIDs));
        const k_0 = messageKey(msg_8);
        const row = /* @__PURE__ */ createElement(MessageRow, { key: k_0, message: msg_8, isUserContinuation, hasContentAfter, tools, commands, verbose: verbose || isItemExpanded(msg_8) || cursor?.expanded === true && index === selectedIdx, inProgressToolUseIDs, streamingToolUseIDs, screen, canAnimate, onOpenRateLimitOptions, lastThinkingBlockId, latestBashOutputUUID, columns, isLoading, lookups: lookups_0 });
        const wrapped = /* @__PURE__ */ createElement(MessageActionsSelectedContext.Provider, { key: k_0, value: index === selectedIdx }, row);
        if (unseenDivider && index === dividerBeforeIndex) {
          return [/* @__PURE__ */ createElement(ThemedBox_default, { key: "unseen-divider", marginTop: 1 }, /* @__PURE__ */ createElement(Divider, { title: `${unseenDivider.count} new ${plural(unseenDivider.count, "message")}`, width: columns, color: "inactive" })), wrapped];
        }
        return wrapped;
      };
      const searchTextCache2 = useRef(/* @__PURE__ */ new WeakMap());
      const extractSearchText = useCallback((msg_9) => {
        const cached = searchTextCache2.current.get(msg_9);
        if (cached !== void 0) return cached;
        let text_0 = renderableSearchText(msg_9);
        if (msg_9.type === "user" && msg_9.toolUseResult && Array.isArray(msg_9.message.content)) {
          const tr = msg_9.message.content.find((b_1) => b_1.type === "tool_result");
          if (tr && "tool_use_id" in tr) {
            const tu = lookups_0.toolUseByToolUseID.get(tr.tool_use_id);
            const tool_0 = tu && findToolByName(tools, tu.name);
            const extracted = tool_0?.extractSearchText?.(msg_9.toolUseResult);
            if (extracted !== void 0) text_0 = extracted;
          }
        }
        const lowered = text_0.toLowerCase();
        searchTextCache2.current.set(msg_9, lowered);
        return lowered;
      }, [tools, lookups_0]);
      return /* @__PURE__ */ createElement(Fragment, null, !hideLogo && !(renderRange && renderRange[0] > 0) && /* @__PURE__ */ createElement(LogoHeader, { agentDefinitions }), hasTruncatedMessages_0 && /* @__PURE__ */ createElement(Divider, { title: `${toggleShowAllShortcut} to show ${source_default.bold(hiddenMessageCount_0)} previous messages`, width: columns }), isTranscriptMode && showAllInTranscript && hiddenMessageCount_0 > 0 && // disableRenderCap (e.g. [ dump-to-scrollback) means we're uncapped
      // as a one-shot escape hatch, not a toggle — ctrl+e is dead and
      // nothing is actually "hidden" to restore.
      !disableRenderCap && /* @__PURE__ */ createElement(Divider, { title: `${toggleShowAllShortcut} to hide ${source_default.bold(hiddenMessageCount_0)} previous messages`, width: columns }), virtualScrollRuntimeGate ? /* @__PURE__ */ createElement(InVirtualListContext.Provider, { value: true }, /* @__PURE__ */ createElement(VirtualMessageList, { messages: renderableMessages, scrollRef, columns, itemKey: messageKey, renderItem: renderMessageRow, onItemClick, isItemClickable, isItemExpanded, trackStickyPrompt, selectedIndex: selectedIdx >= 0 ? selectedIdx : void 0, cursorNavRef, setCursor, jumpRef, onSearchMatchesChange, scanElement, setPositions, extractSearchText })) : renderableMessages.flatMap(renderMessageRow), streamingText && !isBriefOnly && /* @__PURE__ */ createElement(ThemedBox_default, { alignItems: "flex-start", flexDirection: "row", marginTop: 1, width: "100%" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedBox_default, { minWidth: 2 }, /* @__PURE__ */ createElement(ThemedText, { color: "text" }, BLACK_CIRCLE)), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(StreamingMarkdown, null, streamingText)))), isStreamingThinkingVisible && streamingThinking && !isBriefOnly && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(AssistantThinkingMessage, { param: {
        type: "thinking",
        thinking: streamingThinking.thinking
      }, addMargin: false, isTranscriptMode: true, verbose, hideInTranscript: false })));
    };
    Messages = memo(MessagesImpl, (prev, next) => {
      const keys = Object.keys(prev);
      for (const key of keys) {
        if (key === "onOpenRateLimitOptions" || key === "scrollRef" || key === "trackStickyPrompt" || key === "setCursor" || key === "cursorNavRef" || key === "jumpRef" || key === "onSearchMatchesChange" || key === "scanElement" || key === "setPositions") continue;
        if (prev[key] !== next[key]) {
          if (key === "streamingToolUses") {
            const p = prev.streamingToolUses;
            const n = next.streamingToolUses;
            if (p.length === n.length && p.every((item, i) => item.contentBlock === n[i]?.contentBlock)) {
              continue;
            }
          }
          if (key === "inProgressToolUseIDs") {
            if (setsEqual(prev.inProgressToolUseIDs, next.inProgressToolUseIDs)) {
              continue;
            }
          }
          if (key === "unseenDivider") {
            const p = prev.unseenDivider;
            const n = next.unseenDivider;
            if (p?.firstUnseenUuid === n?.firstUnseenUuid && p?.count === n?.count) {
              continue;
            }
          }
          if (key === "tools") {
            const p = prev.tools;
            const n = next.tools;
            if (p.length === n.length && p.every((tool, i) => tool.name === n[i]?.name)) {
              continue;
            }
          }
          return false;
        }
      }
      return true;
    });
  }
});

export {
  useSetPromptOverlay,
  useSetPromptOverlayDialog,
  init_promptOverlayContext,
  useUnseenDivider,
  computeUnseenDivider,
  FullscreenLayout,
  init_FullscreenLayout,
  Messages,
  init_Messages
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbnRleHQvcHJvbXB0T3ZlcmxheUNvbnRleHQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL251bGxSZW5kZXJpbmdBdHRhY2htZW50cy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GdWxsc2NyZWVuTGF5b3V0LnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvc2V0LnRzIiwgIi4uLy4uL3NyYy91dGlscy9jb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucy50cyIsICIuLi8uLi9zcmMvdXRpbHMvY29sbGFwc2VIb29rU3VtbWFyaWVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9jb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zLnRzIiwgIi4uLy4uL3NyYy91dGlscy9ncm91cFRvb2xVc2VzLnRzIiwgIi4uLy4uL3NyYy91dGlscy90cmFuc2NyaXB0U2VhcmNoLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9DbGF3ZC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL0ZlZWQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9GZWVkQ29sdW1uLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvZmVlZENvbmZpZ3MudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9BbmltYXRlZENsYXdkLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvR3Vlc3RQYXNzZXNVcHNlbGwudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9Db25kZW5zZWRMb2dvLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvRW1lcmdlbmN5VGlwLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvQW5pbWF0ZWRBc3Rlcmlzay50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL09wdXMxbU1lcmdlTm90aWNlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvVm9pY2VNb2RlTm90aWNlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvQ2hhbm5lbHNOb3RpY2UudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9Mb2dvVjIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VNb2RlbC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVRpbWVzdGFtcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVJvdy50c3giLCAiLi4vLi4vc3JjL3V0aWxzL3N0YXR1c05vdGljZURlZmluaXRpb25zLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0dXNOb3RpY2VzLnRzeCIsICIuLi8uLi9zcmMvaG9va3MvdXNlVmlydHVhbFNjcm9sbC50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9WaXJ0dWFsTWVzc2FnZUxpc3QudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBQb3J0YWwgZm9yIGNvbnRlbnQgdGhhdCBmbG9hdHMgYWJvdmUgdGhlIHByb21wdCBzbyBpdCBlc2NhcGVzXG4gKiBGdWxsc2NyZWVuTGF5b3V0J3MgYm90dG9tLXNsb3QgYG92ZXJmbG93WTpoaWRkZW5gIGNsaXAuXG4gKlxuICogVGhlIGNsaXAgaXMgbG9hZC1iZWFyaW5nIChDQy02Njg6IHRhbGwgcGFzdGVzIHNxdWFzaCB0aGUgU2Nyb2xsQm94XG4gKiB3aXRob3V0IGl0KSwgYnV0IGZsb2F0aW5nIG92ZXJsYXlzIHVzZSBgcG9zaXRpb246YWJzb2x1dGVcbiAqIGJvdHRvbT1cIjEwMCVcImAgdG8gZmxvYXQgYWJvdmUgdGhlIHByb21wdCDigJQgYW5kIEluaydzIGNsaXAgc3RhY2tcbiAqIGludGVyc2VjdHMgQUxMIGRlc2NlbmRhbnRzLCBzbyB0aGV5IHdlcmUgY2xpcHBlZCB0byB+MSByb3cuXG4gKlxuICogVHdvIGNoYW5uZWxzOlxuICogLSBgdXNlU2V0UHJvbXB0T3ZlcmxheWAg4oCUIHNsYXNoLWNvbW1hbmQgc3VnZ2VzdGlvbiBkYXRhIChzdHJ1Y3R1cmVkLFxuICogICB3cml0dGVuIGJ5IFByb21wdElucHV0Rm9vdGVyKVxuICogLSBgdXNlU2V0UHJvbXB0T3ZlcmxheURpYWxvZ2Ag4oCUIGFyYml0cmFyeSBkaWFsb2cgbm9kZSAoZS5nLlxuICogICBBdXRvTW9kZU9wdEluRGlhbG9nLCB3cml0dGVuIGJ5IFByb21wdElucHV0KVxuICpcbiAqIEZ1bGxzY3JlZW5MYXlvdXQgcmVhZHMgYm90aCBhbmQgcmVuZGVycyB0aGVtIG91dHNpZGUgdGhlIGNsaXBwZWQgc2xvdC5cbiAqXG4gKiBTcGxpdCBpbnRvIGRhdGEvc2V0dGVyIGNvbnRleHQgcGFpcnMgc28gd3JpdGVycyBuZXZlciByZS1yZW5kZXIgb25cbiAqIHRoZWlyIG93biB3cml0ZXMg4oCUIHRoZSBzZXR0ZXIgY29udGV4dHMgYXJlIHN0YWJsZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHR5cGUgUmVhY3ROb2RlLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgU3VnZ2VzdGlvbkl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb21wdElucHV0L1Byb21wdElucHV0Rm9vdGVyU3VnZ2VzdGlvbnMuanMnXG5cbmV4cG9ydCB0eXBlIFByb21wdE92ZXJsYXlEYXRhID0ge1xuICBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbkl0ZW1bXVxuICBzZWxlY3RlZFN1Z2dlc3Rpb246IG51bWJlclxuICBtYXhDb2x1bW5XaWR0aD86IG51bWJlclxufVxuXG50eXBlIFNldHRlcjxUPiA9IChkOiBUIHwgbnVsbCkgPT4gdm9pZFxuXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UHJvbXB0T3ZlcmxheURhdGEgfCBudWxsPihudWxsKVxuY29uc3QgU2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2V0dGVyPFByb21wdE92ZXJsYXlEYXRhPiB8IG51bGw+KG51bGwpXG5jb25zdCBEaWFsb2dDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxSZWFjdE5vZGU+KG51bGwpXG5jb25zdCBTZXREaWFsb2dDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZXR0ZXI8UmVhY3ROb2RlPiB8IG51bGw+KG51bGwpXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tcHRPdmVybGF5UHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufSk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFByb21wdE92ZXJsYXlEYXRhIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IHVzZVN0YXRlPFJlYWN0Tm9kZT4obnVsbClcbiAgcmV0dXJuIChcbiAgICA8U2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0RGF0YX0+XG4gICAgICA8U2V0RGlhbG9nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0RGlhbG9nfT5cbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICAgICAgICA8RGlhbG9nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlhbG9nfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NldERpYWxvZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9TZXRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9tcHRPdmVybGF5KCk6IFByb21wdE92ZXJsYXlEYXRhIHwgbnVsbCB7XG4gIHJldHVybiB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvbXB0T3ZlcmxheURpYWxvZygpOiBSZWFjdE5vZGUge1xuICByZXR1cm4gdXNlQ29udGV4dChEaWFsb2dDb250ZXh0KVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHN1Z2dlc3Rpb24gZGF0YSBmb3IgdGhlIGZsb2F0aW5nIG92ZXJsYXkuIENsZWFycyBvbiB1bm1vdW50LlxuICogTm8tb3Agb3V0c2lkZSB0aGUgcHJvdmlkZXIgKG5vbi1mdWxsc2NyZWVuIHJlbmRlcnMgaW5saW5lIGluc3RlYWQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU2V0UHJvbXB0T3ZlcmxheShkYXRhOiBQcm9tcHRPdmVybGF5RGF0YSB8IG51bGwpOiB2b2lkIHtcbiAgY29uc3Qgc2V0ID0gdXNlQ29udGV4dChTZXRDb250ZXh0KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2V0KSByZXR1cm5cbiAgICBzZXQoZGF0YSlcbiAgICByZXR1cm4gKCkgPT4gc2V0KG51bGwpXG4gIH0sIFtzZXQsIGRhdGFdKVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZGlhbG9nIG5vZGUgdG8gZmxvYXQgYWJvdmUgdGhlIHByb21wdC4gQ2xlYXJzIG9uIHVubW91bnQuXG4gKiBOby1vcCBvdXRzaWRlIHRoZSBwcm92aWRlciAobm9uLWZ1bGxzY3JlZW4gcmVuZGVycyBpbmxpbmUgaW5zdGVhZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXRQcm9tcHRPdmVybGF5RGlhbG9nKG5vZGU6IFJlYWN0Tm9kZSk6IHZvaWQge1xuICBjb25zdCBzZXQgPSB1c2VDb250ZXh0KFNldERpYWxvZ0NvbnRleHQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXQpIHJldHVyblxuICAgIHNldChub2RlKVxuICAgIHJldHVybiAoKSA9PiBzZXQobnVsbClcbiAgfSwgW3NldCwgbm9kZV0pXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBdHRhY2htZW50IH0gZnJvbSAnc3JjL3V0aWxzL2F0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlLCBOb3JtYWxpemVkTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbi8qKlxuICogQXR0YWNobWVudCB0eXBlcyB0aGF0IEF0dGFjaG1lbnRNZXNzYWdlIHJlbmRlcnMgYXMgYG51bGxgIHVuY29uZGl0aW9uYWxseVxuICogKG5vIHZpc2libGUgb3V0cHV0IHJlZ2FyZGxlc3Mgb2YgcnVudGltZSBzdGF0ZSkuIE1lc3NhZ2VzLnRzeCBmaWx0ZXJzIHRoZXNlXG4gKiBvdXQgQkVGT1JFIHRoZSByZW5kZXIgY2FwIC8gbWVzc2FnZSBjb3VudCBzbyBpbnZpc2libGUgZW50cmllcyBkb24ndCBjb25zdW1lXG4gKiB0aGUgMjAwLW1lc3NhZ2UgcmVuZGVyIGJ1ZGdldCAoQ0MtNzI0KS5cbiAqXG4gKiBTeW5jIGlzIGVuZm9yY2VkIGJ5IFR5cGVTY3JpcHQ6IEF0dGFjaG1lbnRNZXNzYWdlJ3Mgc3dpdGNoIGBkZWZhdWx0OmAgYnJhbmNoXG4gKiBhc3NlcnRzIGBhdHRhY2htZW50LnR5cGUgc2F0aXNmaWVzIE51bGxSZW5kZXJpbmdBdHRhY2htZW50VHlwZWAuIEFkZGluZyBhIG5ld1xuICogQXR0YWNobWVudCB0eXBlIHdpdGhvdXQgZWl0aGVyIGEgY2FzZSBvciBhbiBlbnRyeSBoZXJlIHdpbGwgZmFpbCB0eXBlY2hlY2suXG4gKi9cbmNvbnN0IE5VTExfUkVOREVSSU5HX1RZUEVTID0gW1xuICAnaG9va19zdWNjZXNzJyxcbiAgJ2hvb2tfYWRkaXRpb25hbF9jb250ZXh0JyxcbiAgJ2hvb2tfY2FuY2VsbGVkJyxcbiAgJ2NvbW1hbmRfcGVybWlzc2lvbnMnLFxuICAnYWdlbnRfbWVudGlvbicsXG4gICdidWRnZXRfdXNkJyxcbiAgJ2NyaXRpY2FsX3N5c3RlbV9yZW1pbmRlcicsXG4gICdlZGl0ZWRfaW1hZ2VfZmlsZScsXG4gICdlZGl0ZWRfdGV4dF9maWxlJyxcbiAgJ29wZW5lZF9maWxlX2luX2lkZScsXG4gICdvdXRwdXRfc3R5bGUnLFxuICAncGxhbl9tb2RlJyxcbiAgJ3BsYW5fbW9kZV9leGl0JyxcbiAgJ3BsYW5fbW9kZV9yZWVudHJ5JyxcbiAgJ3N0cnVjdHVyZWRfb3V0cHV0JyxcbiAgJ3RlYW1fY29udGV4dCcsXG4gICd0b2RvX3JlbWluZGVyJyxcbiAgJ2NvbnRleHRfZWZmaWNpZW5jeScsXG4gICdkZWZlcnJlZF90b29sc19kZWx0YScsXG4gICdtY3BfaW5zdHJ1Y3Rpb25zX2RlbHRhJyxcbiAgJ2NvbXBhbmlvbl9pbnRybycsXG4gICd0b2tlbl91c2FnZScsXG4gICd1bHRyYXRoaW5rX2VmZm9ydCcsXG4gICdtYXhfdHVybnNfcmVhY2hlZCcsXG4gICd0YXNrX3JlbWluZGVyJyxcbiAgJ2F1dG9fbW9kZScsXG4gICdhdXRvX21vZGVfZXhpdCcsXG4gICdvdXRwdXRfdG9rZW5fdXNhZ2UnLFxuICAncGVuX21vZGVfZW50ZXInLFxuICAncGVuX21vZGVfZXhpdCcsXG4gICd2ZXJpZnlfcGxhbl9yZW1pbmRlcicsXG4gICdjdXJyZW50X3Nlc3Npb25fbWVtb3J5JyxcbiAgJ2NvbXBhY3Rpb25fcmVtaW5kZXInLFxuICAnZGF0ZV9jaGFuZ2UnLFxuXSBhcyBjb25zdCBzYXRpc2ZpZXMgcmVhZG9ubHkgQXR0YWNobWVudFsndHlwZSddW11cblxuZXhwb3J0IHR5cGUgTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnRUeXBlID0gKHR5cGVvZiBOVUxMX1JFTkRFUklOR19UWVBFUylbbnVtYmVyXVxuXG5jb25zdCBOVUxMX1JFTkRFUklOR19BVFRBQ0hNRU5UX1RZUEVTOiBSZWFkb25seVNldDxBdHRhY2htZW50Wyd0eXBlJ10+ID1cbiAgbmV3IFNldChOVUxMX1JFTkRFUklOR19UWVBFUylcblxuLyoqXG4gKiBUcnVlIHdoZW4gdGhpcyBtZXNzYWdlIGlzIGFuIGF0dGFjaG1lbnQgdGhhdCBBdHRhY2htZW50TWVzc2FnZSByZW5kZXJzIGFzXG4gKiBudWxsIHdpdGggbm8gdmlzaWJsZSBvdXRwdXQuIE1lc3NhZ2VzLnRzeCBmaWx0ZXJzIHRoZXNlIG91dCBiZWZvcmUgY291bnRpbmdcbiAqIGFuZCBiZWZvcmUgYXBwbHlpbmcgdGhlIDIwMC1tZXNzYWdlIHJlbmRlciBjYXAsIHNvIGludmlzaWJsZSBob29rXG4gKiBhdHRhY2htZW50cyAoaG9va19zdWNjZXNzLCBob29rX2FkZGl0aW9uYWxfY29udGV4dCwgaG9va19jYW5jZWxsZWQpIGRvbid0XG4gKiBpbmZsYXRlIHRoZSBcIk4gbWVzc2FnZXNcIiBjb3VudCBvciBlYXQgaW50byB0aGUgcmVuZGVyIGJ1ZGdldCAoQ0MtNzI0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnQoXG4gIG1zZzogTWVzc2FnZSB8IE5vcm1hbGl6ZWRNZXNzYWdlLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbXNnLnR5cGUgPT09ICdhdHRhY2htZW50JyAmJlxuICAgIE5VTExfUkVOREVSSU5HX0FUVEFDSE1FTlRfVFlQRVMuaGFzKG1zZy5hdHRhY2htZW50LnR5cGUpXG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHR5cGUgUmVhY3ROb2RlLFxuICB0eXBlIFJlZk9iamVjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9tb2RhbENvbnRleHQuanMnXG5pbXBvcnQge1xuICBQcm9tcHRPdmVybGF5UHJvdmlkZXIsXG4gIHVzZVByb21wdE92ZXJsYXksXG4gIHVzZVByb21wdE92ZXJsYXlEaWFsb2csXG59IGZyb20gJy4uL2NvbnRleHQvcHJvbXB0T3ZlcmxheUNvbnRleHQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgU2Nyb2xsQm94LCB7IHR5cGUgU2Nyb2xsQm94SGFuZGxlIH0gZnJvbSAnLi4vaW5rL2NvbXBvbmVudHMvU2Nyb2xsQm94LmpzJ1xuaW1wb3J0IGluc3RhbmNlcyBmcm9tICcuLi9pbmsvaW5zdGFuY2VzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyLCBvcGVuUGF0aCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQgeyBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIH0gZnJvbSAnLi4vdXRpbHMvZnVsbHNjcmVlbi5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgaXNOdWxsUmVuZGVyaW5nQXR0YWNobWVudCB9IGZyb20gJy4vbWVzc2FnZXMvbnVsbFJlbmRlcmluZ0F0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IFByb21wdElucHV0Rm9vdGVyU3VnZ2VzdGlvbnMgZnJvbSAnLi9Qcm9tcHRJbnB1dC9Qcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdGlja3lQcm9tcHQgfSBmcm9tICcuL1ZpcnR1YWxNZXNzYWdlTGlzdC5qcydcblxuLyoqIFJvd3Mgb2YgdHJhbnNjcmlwdCBjb250ZXh0IGtlcHQgdmlzaWJsZSBhYm92ZSB0aGUgbW9kYWwgcGFuZSdzIOKWlCBkaXZpZGVyLiAqL1xuY29uc3QgTU9EQUxfVFJBTlNDUklQVF9QRUVLID0gMlxuXG4vKiogQ29udGV4dCBmb3Igc2Nyb2xsLWRlcml2ZWQgY2hyb21lIChzdGlja3kgaGVhZGVyLCBwaWxsKS4gU3RpY2t5VHJhY2tlclxuICogIGluIFZpcnR1YWxNZXNzYWdlTGlzdCB3cml0ZXMgdmlhIHRoaXMgaW5zdGVhZCBvZiB0aHJlYWRpbmcgYSBjYWxsYmFja1xuICogIHVwIHRocm91Z2ggTWVzc2FnZXMg4oaSIFJFUEwg4oaSIEZ1bGxzY3JlZW5MYXlvdXQuIFRoZSBzZXR0ZXIgaXMgc3RhYmxlIHNvXG4gKiAgY29uc3VtaW5nIHRoaXMgY29udGV4dCBuZXZlciBjYXVzZXMgcmUtcmVuZGVycy4gKi9cbmV4cG9ydCBjb25zdCBTY3JvbGxDaHJvbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gIHNldFN0aWNreVByb21wdDogKHA6IFN0aWNreVByb21wdCB8IG51bGwpID0+IHZvaWRcbn0+KHsgc2V0U3RpY2t5UHJvbXB0OiAoKSA9PiB7fSB9KVxuXG50eXBlIFByb3BzID0ge1xuICAvKiogQ29udGVudCB0aGF0IHNjcm9sbHMgKG1lc3NhZ2VzLCB0b29sIG91dHB1dCkgKi9cbiAgc2Nyb2xsYWJsZTogUmVhY3ROb2RlXG4gIC8qKiBDb250ZW50IHBpbm5lZCB0byB0aGUgYm90dG9tIChzcGlubmVyLCBwcm9tcHQsIHBlcm1pc3Npb25zKSAqL1xuICBib3R0b206IFJlYWN0Tm9kZVxuICAvKiogQ29udGVudCByZW5kZXJlZCBpbnNpZGUgdGhlIFNjcm9sbEJveCBhZnRlciBtZXNzYWdlcyDigJQgdXNlciBjYW4gc2Nyb2xsXG4gICAqICB1cCB0byBzZWUgY29udGV4dCB3aGlsZSBpdCdzIHNob3dpbmcgKHVzZWQgYnkgUGVybWlzc2lvblJlcXVlc3QpLiAqL1xuICBvdmVybGF5PzogUmVhY3ROb2RlXG4gIC8qKiBBYnNvbHV0ZS1wb3NpdGlvbmVkIGNvbnRlbnQgYW5jaG9yZWQgYXQgdGhlIGJvdHRvbS1yaWdodCBvZiB0aGVcbiAgICogIFNjcm9sbEJveCBhcmVhLCBmbG9hdGluZyBvdmVyIHNjcm9sbGJhY2suIFJlbmRlcmVkIGluc2lkZSB0aGUgZmxleEdyb3dcbiAgICogIHJlZ2lvbiAobm90IHRoZSBib3R0b20gc2xvdCkgc28gdGhlIG92ZXJmbG93WTpoaWRkZW4gY2FwIGRvZXNuJ3QgY2xpcFxuICAgKiAgaXQuIEZ1bGxzY3JlZW4gb25seSDigJQgdXNlZCBmb3IgdGhlIGNvbXBhbmlvbiBzcGVlY2ggYnViYmxlLiAqL1xuICBib3R0b21GbG9hdD86IFJlYWN0Tm9kZVxuICAvKiogU2xhc2gtY29tbWFuZCBkaWFsb2cgY29udGVudC4gUmVuZGVyZWQgaW4gYW4gYWJzb2x1dGUtcG9zaXRpb25lZFxuICAgKiAgYm90dG9tLWFuY2hvcmVkIHBhbmUgKOKWlCBkaXZpZGVyLCBwYWRkaW5nWD0yKSB0aGF0IHBhaW50cyBvdmVyIHRoZVxuICAgKiAgU2Nyb2xsQm94IEFORCBib3R0b20gc2xvdC4gUHJvdmlkZXMgTW9kYWxDb250ZXh0IHNvIFBhbmUvRGlhbG9nIGluc2lkZVxuICAgKiAgc2tpcCB0aGVpciBvd24gZnJhbWUuIEZ1bGxzY3JlZW4gb25seTsgaW5saW5lIGFmdGVyIG92ZXJsYXkgb3RoZXJ3aXNlLiAqL1xuICBtb2RhbD86IFJlYWN0Tm9kZVxuICAvKiogUmVmIHBhc3NlZCB2aWEgTW9kYWxDb250ZXh0IHNvIFRhYnMgKG9yIGFueSBzY3JvbGwtb3duaW5nIGRlc2NlbmRhbnQpXG4gICAqICBjYW4gYXR0YWNoIGl0IHRvIHRoZWlyIG93biBTY3JvbGxCb3ggZm9yIHRhbGwgY29udGVudC4gKi9cbiAgbW9kYWxTY3JvbGxSZWY/OiBSZWFjdC5SZWZPYmplY3Q8U2Nyb2xsQm94SGFuZGxlIHwgbnVsbD5cbiAgLyoqIFJlZiB0byB0aGUgc2Nyb2xsIGJveCBmb3Iga2V5Ym9hcmQgc2Nyb2xsaW5nLiBSZWZPYmplY3QgKG5vdCBSZWYpIHNvXG4gICAqICBwaWxsVmlzaWJsZSdzIHVzZVN5bmNFeHRlcm5hbFN0b3JlIGNhbiBzdWJzY3JpYmUgdG8gc2Nyb2xsIGNoYW5nZXMuICovXG4gIHNjcm9sbFJlZj86IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPlxuICAvKiogWS1wb3NpdGlvbiAoc2Nyb2xsSGVpZ2h0IGF0IHNuYXBzaG90KSBvZiB0aGUgdW5zZWVuLWRpdmlkZXIuIFBpbGxcbiAgICogIHNob3dzIHdoaWxlIHZpZXdwb3J0IGJvdHRvbSBoYXNuJ3QgcmVhY2hlZCB0aGlzLiBSZWYgc28gUkVQTCBkb2Vzbid0XG4gICAqICByZS1yZW5kZXIgb24gdGhlIG9uZS1zaG90IHNuYXBzaG90IHdyaXRlLiAqL1xuICBkaXZpZGVyWVJlZj86IFJlZk9iamVjdDxudW1iZXIgfCBudWxsPlxuICAvKiogRm9yY2UtaGlkZSB0aGUgcGlsbCAoZS5nLiB2aWV3aW5nIGEgc3ViLWFnZW50IHRhc2spLiAqL1xuICBoaWRlUGlsbD86IGJvb2xlYW5cbiAgLyoqIEZvcmNlLWhpZGUgdGhlIHN0aWNreSBwcm9tcHQgaGVhZGVyIChlLmcuIHZpZXdpbmcgYSB0ZWFtbWF0ZSB0YXNrKS4gKi9cbiAgaGlkZVN0aWNreT86IGJvb2xlYW5cbiAgLyoqIENvdW50IGZvciB0aGUgcGlsbCB0ZXh0LiAwIOKGkiBcIkp1bXAgdG8gYm90dG9tXCIsID4wIOKGkiBcIk4gbmV3IG1lc3NhZ2VzXCIuICovXG4gIG5ld01lc3NhZ2VDb3VudD86IG51bWJlclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBcIk4gbmV3XCIgcGlsbC4gKi9cbiAgb25QaWxsQ2xpY2s/OiAoKSA9PiB2b2lkXG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSBpbi10cmFuc2NyaXB0IFwiTiBuZXcgbWVzc2FnZXNcIiBkaXZpZGVyIHBvc2l0aW9uIHdoaWxlIHRoZVxuICogdXNlciBpcyBzY3JvbGxlZCB1cC4gU25hcHNob3RzIG1lc3NhZ2UgY291bnQgQU5EIHNjcm9sbEhlaWdodCB0aGUgZmlyc3RcbiAqIHRpbWUgc3RpY2t5IGJyZWFrcy4gc2Nyb2xsSGVpZ2h0IOKJiCB0aGUgeS1wb3NpdGlvbiBvZiB0aGUgZGl2aWRlciBpbiB0aGVcbiAqIHNjcm9sbCBjb250ZW50IChpdCByZW5kZXJzIHJpZ2h0IGFmdGVyIHRoZSBsYXN0IG1lc3NhZ2UgdGhhdCBleGlzdGVkIGF0XG4gKiBzbmFwc2hvdCB0aW1lKS5cbiAqXG4gKiBgcGlsbFZpc2libGVgIGxpdmVzIGluIEZ1bGxzY3JlZW5MYXlvdXQgKG5vdCBoZXJlKSDigJQgaXQgc3Vic2NyaWJlc1xuICogZGlyZWN0bHkgdG8gU2Nyb2xsQm94IHZpYSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB3aXRoIGEgYm9vbGVhbiBzbmFwc2hvdFxuICogYWdhaW5zdCBgZGl2aWRlcllSZWZgLCBzbyBwZXItZnJhbWUgc2Nyb2xsIG5ldmVyIHJlLXJlbmRlcnMgUkVQTC5cbiAqIGBkaXZpZGVySW5kZXhgIHN0YXlzIGhlcmUgYmVjYXVzZSBSRVBMIG5lZWRzIGl0IGZvciBjb21wdXRlVW5zZWVuRGl2aWRlclxuICog4oaSIE1lc3NhZ2VzJyBkaXZpZGVyIGxpbmU7IGl0IGNoYW5nZXMgb25seSB+dHdpY2Uvc2Nyb2xsLXNlc3Npb25cbiAqIChmaXJzdCBzY3JvbGwtYXdheSArIHJlcGluKSwgYWNjZXB0YWJsZSBSRVBMIHJlLXJlbmRlciBjb3N0LlxuICpcbiAqIGBvblNjcm9sbEF3YXlgIG11c3QgYmUgY2FsbGVkIGJ5IGV2ZXJ5IHNjcm9sbC1hd2F5IGFjdGlvbiB3aXRoIHRoZVxuICogaGFuZGxlOyBgb25SZXBpbmAgYnkgc3VibWl0L3Njcm9sbC10by1ib3R0b20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVbnNlZW5EaXZpZGVyKG1lc3NhZ2VDb3VudDogbnVtYmVyKToge1xuICAvKiogSW5kZXggaW50byBtZXNzYWdlc1tdIHdoZXJlIHRoZSBkaXZpZGVyIGxpbmUgcmVuZGVycy4gQ2xlYXJlZCBvblxuICAgKiAgc3RpY2t5LXJlc3VtZSAoc2Nyb2xsIGJhY2sgdG8gYm90dG9tKSBzbyB0aGUgXCJOIG5ld1wiIGxpbmUgZG9lc24ndFxuICAgKiAgbGluZ2VyIG9uY2UgZXZlcnl0aGluZyBpcyB2aXNpYmxlLiAqL1xuICBkaXZpZGVySW5kZXg6IG51bWJlciB8IG51bGxcbiAgLyoqIHNjcm9sbEhlaWdodCBzbmFwc2hvdCBhdCBmaXJzdCBzY3JvbGwtYXdheSDigJQgdGhlIGRpdmlkZXIncyB5LXBvc2l0aW9uLlxuICAgKiAgRnVsbHNjcmVlbkxheW91dCBzdWJzY3JpYmVzIHRvIFNjcm9sbEJveCBhbmQgY29tcGFyZXMgdmlld3BvcnQgYm90dG9tXG4gICAqICBhZ2FpbnN0IHRoaXMgZm9yIHBpbGxWaXNpYmxlLiBSZWYgc28gd3JpdGVzIGRvbid0IHJlLXJlbmRlciBSRVBMLiAqL1xuICBkaXZpZGVyWVJlZjogUmVmT2JqZWN0PG51bWJlciB8IG51bGw+XG4gIG9uU2Nyb2xsQXdheTogKGhhbmRsZTogU2Nyb2xsQm94SGFuZGxlKSA9PiB2b2lkXG4gIG9uUmVwaW46ICgpID0+IHZvaWRcbiAgLyoqIFNjcm9sbCB0aGUgaGFuZGxlIHNvIHRoZSBkaXZpZGVyIGxpbmUgaXMgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQuICovXG4gIGp1bXBUb05ldzogKGhhbmRsZTogU2Nyb2xsQm94SGFuZGxlIHwgbnVsbCkgPT4gdm9pZFxuICAvKiogU2hpZnQgZGl2aWRlckluZGV4IGFuZCBkaXZpZGVyWVJlZiB3aGVuIG1lc3NhZ2VzIGFyZSBwcmVwZW5kZWRcbiAgICogIChpbmZpbml0ZSBzY3JvbGwtYmFjaykuIGluZGV4RGVsdGEgPSBudW1iZXIgb2YgbWVzc2FnZXMgcHJlcGVuZGVkO1xuICAgKiAgaGVpZ2h0RGVsdGEgPSBjb250ZW50IGhlaWdodCBncm93dGggaW4gcm93cy4gKi9cbiAgc2hpZnREaXZpZGVyOiAoaW5kZXhEZWx0YTogbnVtYmVyLCBoZWlnaHREZWx0YTogbnVtYmVyKSA9PiB2b2lkXG59IHtcbiAgY29uc3QgW2RpdmlkZXJJbmRleCwgc2V0RGl2aWRlckluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIC8vIFJlZiBob2xkcyB0aGUgY3VycmVudCBjb3VudCBmb3Igb25TY3JvbGxBd2F5IHRvIHNuYXBzaG90LiBXcml0dGVuIGluXG4gIC8vIHRoZSByZW5kZXIgYm9keSAobm90IHVzZUVmZmVjdCkgc28gd2hlZWwgZXZlbnRzIGFycml2aW5nIGJldHdlZW4gYVxuICAvLyBtZXNzYWdlLWFwcGVuZCByZW5kZXIgYW5kIGl0cyBlZmZlY3QgZmx1c2ggZG9uJ3QgY2FwdHVyZSBhIHN0YWxlXG4gIC8vIGNvdW50IChvZmYtYnktb25lIGluIHRoZSBiYXNlbGluZSkuIFJlYWN0IENvbXBpbGVyIGJhaWxzIG91dCBoZXJlIOKAlFxuICAvLyBhY2NlcHRhYmxlIGZvciBhIGhvb2sgaW5zdGFudGlhdGVkIG9uY2UgaW4gUkVQTC5cbiAgY29uc3QgY291bnRSZWYgPSB1c2VSZWYobWVzc2FnZUNvdW50KVxuICBjb3VudFJlZi5jdXJyZW50ID0gbWVzc2FnZUNvdW50XG4gIC8vIHNjcm9sbEhlaWdodCBzbmFwc2hvdCDigJQgdGhlIGRpdmlkZXIncyB5IGluIGNvbnRlbnQgY29vcmRzLiBSZWYtb25seTpcbiAgLy8gcmVhZCBzeW5jaHJvbm91c2x5IGluIG9uU2Nyb2xsQXdheSAoc2V0U3RhdGUgaXMgYmF0Y2hlZCwgY2FuJ3RcbiAgLy8gcmVhZC10aGVuLXdyaXRlIGluIHRoZSBzYW1lIGNhbGxiYWNrKSBBTkQgYnkgRnVsbHNjcmVlbkxheW91dCdzXG4gIC8vIHBpbGxWaXNpYmxlIHN1YnNjcmlwdGlvbi4gbnVsbCA9IHBpbm5lZCB0byBib3R0b20uXG4gIGNvbnN0IGRpdmlkZXJZUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgb25SZXBpbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBEb24ndCBjbGVhciBkaXZpZGVyWVJlZiBoZXJlIOKAlCBhIHRyYWNrcGFkIG1vbWVudHVtIHdoZWVsIGV2ZW50XG4gICAgLy8gcmFjaW5nIGluIHRoZSBzYW1lIHN0ZGluIGJhdGNoIHdvdWxkIHNlZSBudWxsIGFuZCByZS1zbmFwc2hvdCxcbiAgICAvLyBvdmVycmlkaW5nIHRoZSBzZXREaXZpZGVySW5kZXgobnVsbCkgYmVsb3cuIFRoZSB1c2VFZmZlY3QgYmVsb3dcbiAgICAvLyBjbGVhcnMgdGhlIHJlZiBhZnRlciBSZWFjdCBjb21taXRzIHRoZSBudWxsIGRpdmlkZXJJbmRleCwgc28gdGhlXG4gICAgLy8gcmVmIHN0YXlzIG5vbi1udWxsIHVudGlsIHRoZSBzdGF0ZSBzZXR0bGVzLlxuICAgIHNldERpdmlkZXJJbmRleChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBvblNjcm9sbEF3YXkgPSB1c2VDYWxsYmFjaygoaGFuZGxlOiBTY3JvbGxCb3hIYW5kbGUpID0+IHtcbiAgICAvLyBOb3RoaW5nIGJlbG93IHRoZSB2aWV3cG9ydCDihpIgbm90aGluZyB0byBqdW1wIHRvLiBDb3ZlcnMgYm90aDpcbiAgICAvLyDigKIgZW1wdHkvc2hvcnQgc2Vzc2lvbjogc2Nyb2xsVXAgY2FsbHMgc2Nyb2xsVG8oMCkgd2hpY2ggYnJlYWtzIHN0aWNreVxuICAgIC8vICAgZXZlbiBhdCBzY3JvbGxUb3A9MCAod2hlZWwtdXAgb24gZnJlc2ggc2Vzc2lvbiBzaG93ZWQgdGhlIHBpbGwpXG4gICAgLy8g4oCiIGNsaWNrLXRvLXNlbGVjdCBhdCBib3R0b206IHVzZURyYWdUb1Njcm9sbC5jaGVjaygpIGNhbGxzXG4gICAgLy8gICBzY3JvbGxUbyhjdXJyZW50KSB0byBicmVhayBzdGlja3kgc28gc3RyZWFtaW5nIGNvbnRlbnQgZG9lc24ndCBzaGlmdFxuICAgIC8vICAgdW5kZXIgdGhlIHNlbGVjdGlvbiwgdGhlbiBvblNjcm9sbChmYWxzZSwg4oCmKSDigJQgYnV0IHNjcm9sbFRvcCBpcyBzdGlsbFxuICAgIC8vICAgYXQgbWF4IChTYXJhaCBEZWF0b24sICNjbGF1ZGUtY29kZS1mZWVkYmFjayAyMDI2LTAzLTE1KVxuICAgIC8vIHBlbmRpbmdEZWx0YTogc2Nyb2xsQnkgYWNjdW11bGF0ZXMgd2l0aG91dCB1cGRhdGluZyBzY3JvbGxUb3AuIFdpdGhvdXRcbiAgICAvLyBpdCwgd2hlZWxpbmcgdXAgZnJvbSBtYXggd291bGQgc2VlIHNjcm9sbFRvcD09bWF4IGFuZCBzdXBwcmVzcyB0aGUgcGlsbC5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICBoYW5kbGUuZ2V0U2Nyb2xsSGVpZ2h0KCkgLSBoYW5kbGUuZ2V0Vmlld3BvcnRIZWlnaHQoKSxcbiAgICApXG4gICAgaWYgKGhhbmRsZS5nZXRTY3JvbGxUb3AoKSArIGhhbmRsZS5nZXRQZW5kaW5nRGVsdGEoKSA+PSBtYXgpIHJldHVyblxuICAgIC8vIFNuYXBzaG90IG9ubHkgb24gdGhlIEZJUlNUIHNjcm9sbC1hd2F5LiBvblNjcm9sbEF3YXkgZmlyZXMgb24gRVZFUllcbiAgICAvLyBzY3JvbGwgYWN0aW9uIChub3QganVzdCB0aGUgaW5pdGlhbCBicmVhayBmcm9tIHN0aWNreSkg4oCUIHRoaXMgZ3VhcmRcbiAgICAvLyBwcmVzZXJ2ZXMgdGhlIG9yaWdpbmFsIGJhc2VsaW5lIHNvIHRoZSBjb3VudCBkb2Vzbid0IHJlc2V0IG9uIHRoZVxuICAgIC8vIHNlY29uZCBQYWdlVXAuIFN1YnNlcXVlbnQgY2FsbHMgYXJlIHJlZi1vbmx5IG5vLW9wcyAobm8gUkVQTCByZS1yZW5kZXIpLlxuICAgIGlmIChkaXZpZGVyWVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICBkaXZpZGVyWVJlZi5jdXJyZW50ID0gaGFuZGxlLmdldFNjcm9sbEhlaWdodCgpXG4gICAgICAvLyBOZXcgc2Nyb2xsLWF3YXkgc2Vzc2lvbiDihpIgbW92ZSB0aGUgZGl2aWRlciBoZXJlIChyZXBsYWNlcyBvbGQgb25lKVxuICAgICAgc2V0RGl2aWRlckluZGV4KGNvdW50UmVmLmN1cnJlbnQpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBqdW1wVG9OZXcgPSB1c2VDYWxsYmFjaygoaGFuZGxlOiBTY3JvbGxCb3hIYW5kbGUgfCBudWxsKSA9PiB7XG4gICAgaWYgKCFoYW5kbGUpIHJldHVyblxuICAgIC8vIHNjcm9sbFRvQm90dG9tIChub3Qgc2Nyb2xsVG8oZGl2aWRlclkpKTogc2V0cyBzdGlja3lTY3JvbGw9dHJ1ZSBzb1xuICAgIC8vIHVzZVZpcnR1YWxTY3JvbGwgbW91bnRzIHRoZSB0YWlsIGFuZCByZW5kZXItbm9kZS10by1vdXRwdXQgcGluc1xuICAgIC8vIHNjcm9sbFRvcD1tYXhTY3JvbGwuIHNjcm9sbFRvIHNldHMgc3RpY2t5U2Nyb2xsPWZhbHNlIOKGkiB0aGUgY2xhbXBcbiAgICAvLyAoc3RpbGwgYXQgdG9wLXJhbmdlIGJvdW5kcyBiZWZvcmUgUmVhY3QgcmUtcmVuZGVycykgcGlucyBzY3JvbGxUb3BcbiAgICAvLyBiYWNrLCBzdG9wcGluZyBzaG9ydC4gVGhlIGRpdmlkZXIgc3RheXMgcmVuZGVyZWQgKGRpdmlkZXJJbmRleFxuICAgIC8vIHVuY2hhbmdlZCkgc28gdXNlcnMgc2VlIHdoZXJlIG5ldyBtZXNzYWdlcyBzdGFydGVkOyB0aGUgY2xlYXIgb25cbiAgICAvLyBuZXh0IHN1Ym1pdC9leHBsaWNpdCBzY3JvbGwtdG8tYm90dG9tIGhhbmRsZXMgY2xlYW51cC5cbiAgICBoYW5kbGUuc2Nyb2xsVG9Cb3R0b20oKVxuICB9LCBbXSlcblxuICAvLyBTeW5jIGRpdmlkZXJZUmVmIHdpdGggZGl2aWRlckluZGV4LiBXaGVuIG9uUmVwaW4gZmlyZXMgKHN1Ym1pdCxcbiAgLy8gc2Nyb2xsLXRvLWJvdHRvbSksIGl0IHNldHMgZGl2aWRlckluZGV4PW51bGwgYnV0IGxlYXZlcyB0aGUgcmVmXG4gIC8vIG5vbi1udWxsIOKAlCBhIHdoZWVsIGV2ZW50IHJhY2luZyBpbiB0aGUgc2FtZSBzdGRpbiBiYXRjaCB3b3VsZFxuICAvLyBvdGhlcndpc2Ugc2VlIG51bGwgYW5kIHJlLXNuYXBzaG90LiBEZWZlcnJpbmcgdGhlIHJlZiBjbGVhciB0b1xuICAvLyB1c2VFZmZlY3QgZ3VhcmFudGVlcyB0aGUgcmVmIHN0YXlzIG5vbi1udWxsIHVudGlsIFJlYWN0IGhhcyBjb21taXR0ZWRcbiAgLy8gdGhlIG51bGwgZGl2aWRlckluZGV4LCBibG9ja2luZyB0aGUgaWYtbnVsbCBndWFyZCBpbiBvblNjcm9sbEF3YXkuXG4gIC8vXG4gIC8vIEFsc28gaGFuZGxlcyAvY2xlYXIsIHJld2luZCwgdGVhbW1hdGUtdmlldyBzd2FwIOKAlCBpZiB0aGUgY291bnQgZHJvcHNcbiAgLy8gYmVsb3cgdGhlIGRpdmlkZXIgaW5kZXgsIHRoZSBkaXZpZGVyIHdvdWxkIHBvaW50IGF0IG5vdGhpbmcuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpdmlkZXJJbmRleCA9PT0gbnVsbCkge1xuICAgICAgZGl2aWRlcllSZWYuY3VycmVudCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VDb3VudCA8IGRpdmlkZXJJbmRleCkge1xuICAgICAgZGl2aWRlcllSZWYuY3VycmVudCA9IG51bGxcbiAgICAgIHNldERpdmlkZXJJbmRleChudWxsKVxuICAgIH1cbiAgfSwgW21lc3NhZ2VDb3VudCwgZGl2aWRlckluZGV4XSlcblxuICBjb25zdCBzaGlmdERpdmlkZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXhEZWx0YTogbnVtYmVyLCBoZWlnaHREZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICBzZXREaXZpZGVySW5kZXgoaWR4ID0+IChpZHggPT09IG51bGwgPyBudWxsIDogaWR4ICsgaW5kZXhEZWx0YSkpXG4gICAgICBpZiAoZGl2aWRlcllSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICBkaXZpZGVyWVJlZi5jdXJyZW50ICs9IGhlaWdodERlbHRhXG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZGl2aWRlckluZGV4LFxuICAgIGRpdmlkZXJZUmVmLFxuICAgIG9uU2Nyb2xsQXdheSxcbiAgICBvblJlcGluLFxuICAgIGp1bXBUb05ldyxcbiAgICBzaGlmdERpdmlkZXIsXG4gIH1cbn1cblxuLyoqXG4gKiBDb3VudHMgYXNzaXN0YW50IHR1cm5zIGluIG1lc3NhZ2VzW2RpdmlkZXJJbmRleC4uZW5kKS4gQSBcInR1cm5cIiBpcyB3aGF0XG4gKiB1c2VycyB0aGluayBvZiBhcyBcImEgbmV3IG1lc3NhZ2UgZnJvbSBDbGF1ZGVcIiDigJQgbm90IHJhdyBhc3Npc3RhbnQgZW50cmllc1xuICogKG9uZSB0dXJuIHlpZWxkcyBtdWx0aXBsZSBlbnRyaWVzOiB0b29sX3VzZSBibG9ja3MgKyB0ZXh0IGJsb2NrcykuIFdlIGNvdW50XG4gKiBub24tYXNzaXN0YW504oaSYXNzaXN0YW50IHRyYW5zaXRpb25zLCBidXQgb25seSBmb3IgZW50cmllcyB0aGF0IGFjdHVhbGx5XG4gKiBjYXJyeSB0ZXh0IOKAlCB0b29sLXVzZS1vbmx5IGVudHJpZXMgYXJlIHNraXBwZWQgKGxpa2UgcHJvZ3Jlc3MgbWVzc2FnZXMpXG4gKiBzbyBcIuKPuiBTZWFyY2hlZCBmb3IgMTMgcGF0dGVybnMsIHJlYWQgNiBmaWxlc1wiIGRvZXNuJ3QgdGljayB0aGUgcGlsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50VW5zZWVuQXNzaXN0YW50VHVybnMoXG4gIG1lc3NhZ2VzOiByZWFkb25seSBNZXNzYWdlW10sXG4gIGRpdmlkZXJJbmRleDogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgbGV0IGNvdW50ID0gMFxuICBsZXQgcHJldldhc0Fzc2lzdGFudCA9IGZhbHNlXG4gIGZvciAobGV0IGkgPSBkaXZpZGVySW5kZXg7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG0gPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAobS50eXBlID09PSAncHJvZ3Jlc3MnKSBjb250aW51ZVxuICAgIC8vIFRvb2wtdXNlLW9ubHkgYXNzaXN0YW50IGVudHJpZXMgYXJlbid0IFwibmV3IG1lc3NhZ2VzXCIgdG8gdGhlIHVzZXIg4oCUXG4gICAgLy8gc2tpcCB0aGVtIHRoZSBzYW1lIHdheSB3ZSBza2lwIHByb2dyZXNzLiBwcmV2V2FzQXNzaXN0YW50IGlzIE5PVFxuICAgIC8vIHVwZGF0ZWQsIHNvIGEgdGV4dCBibG9jayBpbW1lZGlhdGVseSBmb2xsb3dpbmcgc3RpbGwgY291bnRzIGFzIHRoZVxuICAgIC8vIHNhbWUgdHVybiAodG9vbF91c2UgKyB0ZXh0IGZyb20gb25lIEFQSSByZXNwb25zZSA9IDEpLlxuICAgIGlmIChtLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmICFhc3Npc3RhbnRIYXNWaXNpYmxlVGV4dChtKSkgY29udGludWVcbiAgICBjb25zdCBpc0Fzc2lzdGFudCA9IG0udHlwZSA9PT0gJ2Fzc2lzdGFudCdcbiAgICBpZiAoaXNBc3Npc3RhbnQgJiYgIXByZXZXYXNBc3Npc3RhbnQpIGNvdW50KytcbiAgICBwcmV2V2FzQXNzaXN0YW50ID0gaXNBc3Npc3RhbnRcbiAgfVxuICByZXR1cm4gY291bnRcbn1cblxuZnVuY3Rpb24gYXNzaXN0YW50SGFzVmlzaWJsZVRleHQobTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICBpZiAobS50eXBlICE9PSAnYXNzaXN0YW50JykgcmV0dXJuIGZhbHNlXG4gIGZvciAoY29uc3QgYiBvZiBtLm1lc3NhZ2UuY29udGVudCkge1xuICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0JyAmJiBiLnRleHQudHJpbSgpICE9PSAnJykgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgVW5zZWVuRGl2aWRlciA9IHsgZmlyc3RVbnNlZW5VdWlkOiBNZXNzYWdlWyd1dWlkJ107IGNvdW50OiBudW1iZXIgfVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgdW5zZWVuRGl2aWRlciBvYmplY3QgUkVQTCBwYXNzZXMgdG8gTWVzc2FnZXMgKyB0aGUgcGlsbC5cbiAqIFJldHVybnMgdW5kZWZpbmVkIG9ubHkgd2hlbiBubyBjb250ZW50IGhhcyBhcnJpdmVkIHBhc3QgdGhlIGRpdmlkZXJcbiAqIHlldCAobWVzc2FnZXNbZGl2aWRlckluZGV4XSBkb2Vzbid0IGV4aXN0KS4gT25jZSBBTlkgbWVzc2FnZSBhcnJpdmVzXG4gKiDigJQgaW5jbHVkaW5nIHRvb2xfdXNlLW9ubHkgYXNzaXN0YW50IGVudHJpZXMgYW5kIHRvb2xfcmVzdWx0IHVzZXIgZW50cmllc1xuICogdGhhdCBjb3VudFVuc2VlbkFzc2lzdGFudFR1cm5zIHNraXBzIOKAlCBjb3VudCBmbG9vcnMgYXQgMSBzbyB0aGUgcGlsbFxuICogZmxpcHMgZnJvbSBcIkp1bXAgdG8gYm90dG9tXCIgdG8gXCIxIG5ldyBtZXNzYWdlXCIuIFdpdGhvdXQgdGhlIGZsb29yLFxuICogdGhlIHBpbGwgc3RheXMgXCJKdW1wIHRvIGJvdHRvbVwiIHRocm91Z2ggYW4gZW50aXJlIHRvb2wtY2FsbCBzZXF1ZW5jZVxuICogdW50aWwgQ2xhdWRlJ3MgdGV4dCByZXNwb25zZSBsYW5kcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVVbnNlZW5EaXZpZGVyKFxuICBtZXNzYWdlczogcmVhZG9ubHkgTWVzc2FnZVtdLFxuICBkaXZpZGVySW5kZXg6IG51bWJlciB8IG51bGwsXG4pOiBVbnNlZW5EaXZpZGVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGRpdmlkZXJJbmRleCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICAvLyBTa2lwIHByb2dyZXNzIGFuZCBudWxsLXJlbmRlcmluZyBhdHRhY2htZW50cyB3aGVuIHBpY2tpbmcgdGhlIGRpdmlkZXJcbiAgLy8gYW5jaG9yIOKAlCBNZXNzYWdlcy50c3ggZmlsdGVycyB0aGVzZSBvdXQgb2YgcmVuZGVyYWJsZU1lc3NhZ2VzIGJlZm9yZSB0aGVcbiAgLy8gZGl2aWRlckJlZm9yZUluZGV4IHNlYXJjaCwgc28gdGhlaXIgVVVJRCB3b3VsZG4ndCBiZSBmb3VuZCAoQ0MtNzI0KS5cbiAgLy8gSG9vayBhdHRhY2htZW50cyB1c2UgcmFuZG9tVVVJRCgpIHNvIG5vdGhpbmcgc2hhcmVzIHRoZWlyIDI0LWNoYXIgcHJlZml4LlxuICBsZXQgYW5jaG9ySWR4ID0gZGl2aWRlckluZGV4XG4gIHdoaWxlIChcbiAgICBhbmNob3JJZHggPCBtZXNzYWdlcy5sZW5ndGggJiZcbiAgICAobWVzc2FnZXNbYW5jaG9ySWR4XT8udHlwZSA9PT0gJ3Byb2dyZXNzJyB8fFxuICAgICAgaXNOdWxsUmVuZGVyaW5nQXR0YWNobWVudChtZXNzYWdlc1thbmNob3JJZHhdISkpXG4gICkge1xuICAgIGFuY2hvcklkeCsrXG4gIH1cbiAgY29uc3QgdXVpZCA9IG1lc3NhZ2VzW2FuY2hvcklkeF0/LnV1aWRcbiAgaWYgKCF1dWlkKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IGNvdW50ID0gY291bnRVbnNlZW5Bc3Npc3RhbnRUdXJucyhtZXNzYWdlcywgZGl2aWRlckluZGV4KVxuICByZXR1cm4geyBmaXJzdFVuc2VlblV1aWQ6IHV1aWQsIGNvdW50OiBNYXRoLm1heCgxLCBjb3VudCkgfVxufVxuXG4vKipcbiAqIExheW91dCB3cmFwcGVyIGZvciB0aGUgUkVQTC4gSW4gZnVsbHNjcmVlbiBtb2RlLCBwdXRzIHNjcm9sbGFibGVcbiAqIGNvbnRlbnQgaW4gYSBzdGlja3ktc2Nyb2xsIGJveCBhbmQgcGlucyBib3R0b20gY29udGVudCB2aWEgZmxleGJveC5cbiAqIE91dHNpZGUgZnVsbHNjcmVlbiBtb2RlLCByZW5kZXJzIGNvbnRlbnQgc2VxdWVudGlhbGx5IHNvIHRoZSBleGlzdGluZ1xuICogbWFpbi1zY3JlZW4gc2Nyb2xsYmFjayByZW5kZXJpbmcgd29ya3MgdW5jaGFuZ2VkLlxuICpcbiAqIEZ1bGxzY3JlZW4gbW9kZSBkZWZhdWx0cyBvbiBmb3IgYW50cyAoQ0xBVURFX0NPREVfTk9fRkxJQ0tFUj0wIHRvIG9wdCBvdXQpXG4gKiBhbmQgb2ZmIGZvciBleHRlcm5hbCB1c2VycyAoQ0xBVURFX0NPREVfTk9fRkxJQ0tFUj0xIHRvIG9wdCBpbikuXG4gKiBUaGUgPEFsdGVybmF0ZVNjcmVlbj4gd3JhcHBlclxuICogKGFsdCBidWZmZXIgKyBtb3VzZSB0cmFja2luZyArIGhlaWdodCBjb25zdHJhaW50KSBsaXZlcyBhdCBSRVBMJ3Mgcm9vdFxuICogc28gbm90aGluZyBjYW4gYWNjaWRlbnRhbGx5IHJlbmRlciBvdXRzaWRlIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gRnVsbHNjcmVlbkxheW91dCh7XG4gIHNjcm9sbGFibGUsXG4gIGJvdHRvbSxcbiAgb3ZlcmxheSxcbiAgYm90dG9tRmxvYXQsXG4gIG1vZGFsLFxuICBtb2RhbFNjcm9sbFJlZixcbiAgc2Nyb2xsUmVmLFxuICBkaXZpZGVyWVJlZixcbiAgaGlkZVBpbGwgPSBmYWxzZSxcbiAgaGlkZVN0aWNreSA9IGZhbHNlLFxuICBuZXdNZXNzYWdlQ291bnQgPSAwLFxuICBvblBpbGxDbGljayxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzOiB0ZXJtaW5hbFJvd3MsIGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIC8vIFNjcm9sbC1kZXJpdmVkIGNocm9tZSBzdGF0ZSBsaXZlcyBIRVJFLCBub3QgaW4gUkVQTC4gU3RpY2t5VHJhY2tlclxuICAvLyB3cml0ZXMgdmlhIFNjcm9sbENocm9tZUNvbnRleHQ7IHBpbGxWaXNpYmxlIHN1YnNjcmliZXMgZGlyZWN0bHkgdG9cbiAgLy8gU2Nyb2xsQm94LiBCb3RoIGNoYW5nZSByYXJlbHkgKHBpbGwgZmxpcHMgb25jZSBwZXIgdGhyZXNob2xkIGNyb3NzaW5nLFxuICAvLyBzdGlja3kgY2hhbmdlcyB+NS0yMMOXL3RyYW5zY3JpcHQpIOKAlCByZS1yZW5kZXJpbmcgRnVsbHNjcmVlbkxheW91dCBvblxuICAvLyB0aG9zZSBpcyBmaW5lOyByZS1yZW5kZXJpbmcgdGhlIDY5NjYtbGluZSBSRVBMICsgaXRzIDIyKyB1c2VBcHBTdGF0ZVxuICAvLyBzZWxlY3RvcnMgcGVyLXNjcm9sbC1mcmFtZSB3YXMgbm90LlxuICBjb25zdCBbc3RpY2t5UHJvbXB0LCBzZXRTdGlja3lQcm9tcHRdID0gdXNlU3RhdGU8U3RpY2t5UHJvbXB0IHwgbnVsbD4obnVsbClcbiAgY29uc3QgY2hyb21lQ3R4ID0gdXNlTWVtbygoKSA9PiAoeyBzZXRTdGlja3lQcm9tcHQgfSksIFtdKVxuICAvLyBCb29sZWFuLXF1YW50aXplZCBzY3JvbGwgc3Vic2NyaXB0aW9uLiBTbmFwc2hvdCBpcyBcImlzIHZpZXdwb3J0IGJvdHRvbVxuICAvLyBhYm92ZSB0aGUgZGl2aWRlciB5P1wiIOKAlCBPYmplY3QuaXMgb24gYSBib29sZWFuIOKGkiBGdWxsc2NyZWVuTGF5b3V0IG9ubHlcbiAgLy8gcmUtcmVuZGVycyB3aGVuIHRoZSBwaWxsIHNob3VsZCBhY3R1YWxseSBmbGlwLCBub3QgcGVyLWZyYW1lLlxuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjayhcbiAgICAobGlzdGVuZXI6ICgpID0+IHZvaWQpID0+XG4gICAgICBzY3JvbGxSZWY/LmN1cnJlbnQ/LnN1YnNjcmliZShsaXN0ZW5lcikgPz8gKCgpID0+IHt9KSxcbiAgICBbc2Nyb2xsUmVmXSxcbiAgKVxuICBjb25zdCBwaWxsVmlzaWJsZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWY/LmN1cnJlbnRcbiAgICBjb25zdCBkaXZpZGVyWSA9IGRpdmlkZXJZUmVmPy5jdXJyZW50XG4gICAgaWYgKCFzIHx8IGRpdmlkZXJZID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiAoXG4gICAgICBzLmdldFNjcm9sbFRvcCgpICsgcy5nZXRQZW5kaW5nRGVsdGEoKSArIHMuZ2V0Vmlld3BvcnRIZWlnaHQoKSA8IGRpdmlkZXJZXG4gICAgKVxuICB9KVxuICAvLyBXaXJlIHVwIGh5cGVybGluayBjbGljayBoYW5kbGluZyDigJQgaW4gZnVsbHNjcmVlbiBtb2RlLCBtb3VzZSB0cmFja2luZ1xuICAvLyBpbnRlcmNlcHRzIGNsaWNrcyBiZWZvcmUgdGhlIHRlcm1pbmFsIGNhbiBvcGVuIE9TQyA4IGxpbmtzIG5hdGl2ZWx5LlxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpKSByZXR1cm5cbiAgICBjb25zdCBpbmsgPSBpbnN0YW5jZXMuZ2V0KHByb2Nlc3Muc3Rkb3V0KVxuICAgIGlmICghaW5rKSByZXR1cm5cbiAgICBpbmsub25IeXBlcmxpbmtDbGljayA9IHVybCA9PiB7XG4gICAgICAvLyBNb3N0IE9TQyA4IGxpbmtzIGVtaXR0ZWQgYnkgQ2xhdWRlIENvZGUgYXJlIGZpbGU6Ly8gVVJMcyBmcm9tXG4gICAgICAvLyBGaWxlUGF0aExpbmsgKEZpbGVFZGl0L0ZpbGVXcml0ZS9GaWxlUmVhZCB0b29sIG91dHB1dCkuIG9wZW5Ccm93c2VyXG4gICAgICAvLyByZWplY3RzIG5vbi1odHRwKHMpIHByb3RvY29scyDigJQgcm91dGUgZmlsZTogdG8gb3BlblBhdGggaW5zdGVhZC5cbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnZmlsZTonKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZvaWQgb3BlblBhdGgoZmlsZVVSTFRvUGF0aCh1cmwpKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBNYWxmb3JtZWQgZmlsZTogVVJMcyAoZS5nLiBmaWxlOi8vaG9zdC9wYXRoIGZyb20gcGxhaW4tdGV4dFxuICAgICAgICAgIC8vIGRldGVjdGlvbikgY2F1c2UgZmlsZVVSTFRvUGF0aCB0byB0aHJvdyDigJQgaWdub3JlIHNpbGVudGx5LlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKHVybClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluay5vbkh5cGVybGlua0NsaWNrID0gdW5kZWZpbmVkXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAoaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpKSB7XG4gICAgLy8gT3ZlcmxheSByZW5kZXJzIEJFTE9XIG1lc3NhZ2VzIGluc2lkZSB0aGUgc2FtZSBTY3JvbGxCb3gg4oCUIHVzZXIgY2FuXG4gICAgLy8gc2Nyb2xsIHVwIHRvIHNlZSBwcmlvciBjb250ZXh0IHdoaWxlIGEgcGVybWlzc2lvbiBkaWFsb2cgaXMgc2hvd2luZy5cbiAgICAvLyBUaGUgU2Nyb2xsQm94IG5ldmVyIHVubW91bnRzIGFjcm9zcyBvdmVybGF5IHRyYW5zaXRpb25zLCBzbyBzY3JvbGxcbiAgICAvLyBwb3NpdGlvbiBpcyBwcmVzZXJ2ZWQgd2l0aG91dCBzYXZlL3Jlc3RvcmUuIHN0aWNreVNjcm9sbCBhdXRvLXNjcm9sbHNcbiAgICAvLyB0byB0aGUgYXBwZW5kZWQgb3ZlcmxheSB3aGVuIGl0IG1vdW50cyAoaWYgdXNlciB3YXMgYWxyZWFkeSBhdFxuICAgIC8vIGJvdHRvbSk7IFJFUEwgcmUtcGlucyBvbiB0aGUgb3ZlcmxheSBhcHBlYXIvZGlzbWlzcyB0cmFuc2l0aW9uIGZvclxuICAgIC8vIHRoZSBjYXNlIHdoZXJlIHN0aWNreSB3YXMgYnJva2VuLiBUYWxsIGRpYWxvZ3MgKEZpbGVFZGl0IGRpZmZzKSBzdGlsbFxuICAgIC8vIGdldCBQZ1VwL1BnRG4vd2hlZWwg4oCUIHNhbWUgc2Nyb2xsUmVmIGRyaXZlcyB0aGUgc2FtZSBTY3JvbGxCb3guXG4gICAgLy8gVGhyZWUgc3RpY2t5IHN0YXRlczogbnVsbCAoYXQgYm90dG9tKSwge3RleHQsc2Nyb2xsVG99IChzY3JvbGxlZCB1cCxcbiAgICAvLyBoZWFkZXIgc2hvd3MpLCAnY2xpY2tlZCcgKGp1c3QgY2xpY2tlZCBoZWFkZXIg4oCUIGhpZGUgaXQgc28gdGhlXG4gICAgLy8gY29udGVudCDina8gdGFrZXMgcm93IDApLiBwYWRDb2xsYXBzZWQgY292ZXJzIHRoZSBsYXR0ZXIgdHdvOiBvbmNlXG4gICAgLy8gc2Nyb2xsZWQgYXdheSBmcm9tIGJvdHRvbSwgcGFkZGluZyBkcm9wcyB0byAwIGFuZCBzdGF5cyB0aGVyZSB1bnRpbFxuICAgIC8vIHJlcGluLiBoZWFkZXJWaXNpYmxlIGlzIG9ubHkgdGhlIG1pZGRsZSBzdGF0ZS4gQWZ0ZXIgY2xpY2s6XG4gICAgLy8gc2Nyb2xsQm94X3k9MCAoaGVhZGVyIGdvbmUpICsgcGFkZGluZz0wIOKGkiB2aWV3cG9ydFRvcD0wIOKGkiDina8gYXRcbiAgICAvLyByb3cgMC4gT24gbmV4dCBzY3JvbGwgdGhlIG9uQ2hhbmdlIGZpcmVzIHdpdGggYSBmcmVzaCB7dGV4dH0gYW5kXG4gICAgLy8gaGVhZGVyIGNvbWVzIGJhY2sgKHZpZXdwb3J0VG9wIDDihpIxLCBhIHNpbmdsZSAxLXJvdyBzaGlmdCDigJRcbiAgICAvLyBhY2NlcHRhYmxlIHNpbmNlIHVzZXIgZXhwbGljaXRseSBzY3JvbGxlZCkuXG4gICAgY29uc3Qgc3RpY2t5ID0gaGlkZVN0aWNreSA/IG51bGwgOiBzdGlja3lQcm9tcHRcbiAgICBjb25zdCBoZWFkZXJQcm9tcHQgPVxuICAgICAgc3RpY2t5ICE9IG51bGwgJiYgc3RpY2t5ICE9PSAnY2xpY2tlZCcgJiYgb3ZlcmxheSA9PSBudWxsID8gc3RpY2t5IDogbnVsbFxuICAgIGNvbnN0IHBhZENvbGxhcHNlZCA9IHN0aWNreSAhPSBudWxsICYmIG92ZXJsYXkgPT0gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8UHJvbXB0T3ZlcmxheVByb3ZpZGVyPlxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgICB7aGVhZGVyUHJvbXB0ICYmIChcbiAgICAgICAgICAgIDxTdGlja3lQcm9tcHRIZWFkZXJcbiAgICAgICAgICAgICAgdGV4dD17aGVhZGVyUHJvbXB0LnRleHR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlYWRlclByb21wdC5zY3JvbGxUb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8U2Nyb2xsQm94XG4gICAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBwYWRkaW5nVG9wPXtwYWRDb2xsYXBzZWQgPyAwIDogMX1cbiAgICAgICAgICAgIHN0aWNreVNjcm9sbFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTY3JvbGxDaHJvbWVDb250ZXh0IHZhbHVlPXtjaHJvbWVDdHh9PlxuICAgICAgICAgICAgICB7c2Nyb2xsYWJsZX1cbiAgICAgICAgICAgIDwvU2Nyb2xsQ2hyb21lQ29udGV4dD5cbiAgICAgICAgICAgIHtvdmVybGF5fVxuICAgICAgICAgIDwvU2Nyb2xsQm94PlxuICAgICAgICAgIHshaGlkZVBpbGwgJiYgcGlsbFZpc2libGUgJiYgb3ZlcmxheSA9PSBudWxsICYmIChcbiAgICAgICAgICAgIDxOZXdNZXNzYWdlc1BpbGwgY291bnQ9e25ld01lc3NhZ2VDb3VudH0gb25DbGljaz17b25QaWxsQ2xpY2t9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Ym90dG9tRmxvYXQgIT0gbnVsbCAmJiAoXG4gICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209ezB9IHJpZ2h0PXswfSBvcGFxdWU+XG4gICAgICAgICAgICAgIHtib3R0b21GbG9hdH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4U2hyaW5rPXswfSB3aWR0aD1cIjEwMCVcIiBtYXhIZWlnaHQ9XCI1MCVcIj5cbiAgICAgICAgICA8U3VnZ2VzdGlvbnNPdmVybGF5IC8+XG4gICAgICAgICAgPERpYWxvZ092ZXJsYXkgLz5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgIG92ZXJmbG93WT1cImhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2JvdHRvbX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHttb2RhbCAhPSBudWxsICYmIChcbiAgICAgICAgICA8TW9kYWxDb250ZXh0XG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICByb3dzOiB0ZXJtaW5hbFJvd3MgLSBNT0RBTF9UUkFOU0NSSVBUX1BFRUsgLSAxLFxuICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zIC0gNCxcbiAgICAgICAgICAgICAgc2Nyb2xsUmVmOiBtb2RhbFNjcm9sbFJlZiA/PyBudWxsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQm90dG9tLWFuY2hvcmVkLCBncm93cyB1cHdhcmQgdG8gZml0IGNvbnRlbnQuIG1heEhlaWdodCBrZWVwcyBhXG4gICAgICAgICAgICAgICAgZmV3IHJvd3Mgb2YgdHJhbnNjcmlwdCBwZWVrIGFib3ZlIHRoZSDilpQgZGl2aWRlci4gU2hvcnQgbW9kYWxzXG4gICAgICAgICAgICAgICAgKC9tb2RlbCkgc2l0IHNtYWxsIGF0IHRoZSBib3R0b20gd2l0aCBsb3RzIG9mIHRyYW5zY3JpcHQgYWJvdmU7XG4gICAgICAgICAgICAgICAgdGFsbCBtb2RhbHMgKC9idWRkeSBDYXJkKSBncm93IGFzIG5lZWRlZCwgY2xpcHBlZCBieSBvdmVyZmxvdy5cbiAgICAgICAgICAgICAgICBQcmV2aW91c2x5IGZpeGVkLWhlaWdodCAodG9wK2JvdHRvbSBhbmNob3JlZCkg4oCUIGFueSBmaXhlZCBjYXBcbiAgICAgICAgICAgICAgICBlaXRoZXIgY2xpcHBlZCB0YWxsIGNvbnRlbnQgb3IgbGVmdCBzaG9ydCBjb250ZW50IGZsb2F0aW5nIGluXG4gICAgICAgICAgICAgICAgYSBtb3N0bHktZW1wdHkgcGFuZS5cblxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9MCBvbiB0aGUgaW5uZXIgQm94IGlzIGxvYWQtYmVhcmluZzogd2l0aCBTaHJpbms9MSxcbiAgICAgICAgICAgICAgICB5b2dhIHNxdWVlemVzIGRlZXAgY2hpbGRyZW4gdG8gaD0wIHdoZW4gY29udGVudCA+IG1heEhlaWdodCxcbiAgICAgICAgICAgICAgICBhbmQgc2libGluZyBUZXh0cyBsYW5kIG9uIHRoZSBzYW1lIHJvdyDihpIgZ2hvc3Qgb3ZlcmxhcFxuICAgICAgICAgICAgICAgIChcIjUgc2VydmVyc1Agc2VydmVyc1wiKS4gQ2xpcHBpbmcgYXQgdGhlIG91dGVyIEJveCdzIG1heEhlaWdodFxuICAgICAgICAgICAgICAgIGtlZXBzIGNoaWxkcmVuIGF0IG5hdHVyYWwgc2l6ZS5cblxuICAgICAgICAgICAgICAgIERpdmlkZXIgd3JhcHBlZCBpbiBmbGV4U2hyaW5rPTA6IHdoZW4gdGhlIGlubmVyIGJveCBvdmVyZmxvd3NcbiAgICAgICAgICAgICAgICAodGFsbCAvY29uZmlnIG9wdGlvbiBsaXN0KSwgeW9nYSBzaHJpbmtzIHRoZSBkaXZpZGVyIFRleHQgdG9cbiAgICAgICAgICAgICAgICBoPTAgdG8gYWJzb3JiIHRoZSBkZWZpY2l0IOKAlCBpdCdzIHRoZSBvbmx5IHNocmlua2FibGUgc2libGluZy5cbiAgICAgICAgICAgICAgICBUaGUgd3JhcHBlciBrZWVwcyBpdCBhdCAxIHJvdzsgb3ZlcmZsb3cgcGFzdCBtYXhIZWlnaHQgaXNcbiAgICAgICAgICAgICAgICBjbGlwcGVkIGF0IHRoZSBib3R0b20gYnkgb3ZlcmZsb3c9aGlkZGVuIGluc3RlYWQuICovfVxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICAgICAgbWF4SGVpZ2h0PXt0ZXJtaW5hbFJvd3MgLSBNT0RBTF9UUkFOU0NSSVBUX1BFRUt9XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgIG9wYXF1ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwicGVybWlzc2lvblwiPnsn4paUJy5yZXBlYXQoY29sdW1ucyl9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIHBhZGRpbmdYPXsyfVxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21vZGFsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvTW9kYWxDb250ZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Qcm9tcHRPdmVybGF5UHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Njcm9sbGFibGV9XG4gICAgICB7Ym90dG9tfVxuICAgICAge292ZXJsYXl9XG4gICAgICB7bW9kYWx9XG4gICAgPC8+XG4gIClcbn1cblxuLy8gU2xhY2stc3R5bGUgcGlsbC4gQWJzb2x1dGUgb3ZlcmxheSBhdCBib3R0b209ezB9IG9mIHRoZSBzY3JvbGx3cmFwIOKAlCBmbG9hdHNcbi8vIG92ZXIgdGhlIFNjcm9sbEJveCdzIGxhc3QgY29udGVudCByb3csIG9ubHkgb2JzY3VyaW5nIHRoZSBjZW50ZXJlZCBwaWxsXG4vLyB0ZXh0ICh0aGUgcmVzdCBvZiB0aGUgcm93IHNob3dzIFNjcm9sbEJveCBjb250ZW50KS4gU2Nyb2xsLXNtZWFyIGZyb21cbi8vIERFQ1NUQk0gc2hpZnRpbmcgdGhlIHBpbGwncyBwaXhlbHMgaXMgcmVwYWlyZWQgYXQgdGhlIEluayBsYXllclxuLy8gKGFic29sdXRlUmVjdHNQcmV2IHRoaXJkLXBhc3MgaW4gcmVuZGVyLW5vZGUtdG8tb3V0cHV0LnRzLCAjMjM5MzkpLiBTaG93c1xuLy8gXCJKdW1wIHRvIGJvdHRvbVwiIHdoZW4gY291bnQgaXMgMCAoc2Nyb2xsZWQgYXdheSBidXQgbm8gbmV3IG1lc3NhZ2VzIHlldCDigJRcbi8vIHRoZSBkZWFkIHpvbmUgd2hlcmUgdXNlcnMgcHJldmlvdXNseSB0aG91Z2h0IGNoYXQgc3RhbGxlZCkuXG5mdW5jdGlvbiBOZXdNZXNzYWdlc1BpbGwoe1xuICBjb3VudCxcbiAgb25DbGljayxcbn06IHtcbiAgY291bnQ6IG51bWJlclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBib3R0b209ezB9XG4gICAgICBsZWZ0PXswfVxuICAgICAgcmlnaHQ9ezB9XG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1xuICAgICAgICAgICAgaG92ZXIgPyAndXNlck1lc3NhZ2VCYWNrZ3JvdW5kSG92ZXInIDogJ3VzZXJNZXNzYWdlQmFja2dyb3VuZCdcbiAgICAgICAgICB9XG4gICAgICAgICAgZGltQ29sb3JcbiAgICAgICAgPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAge2NvdW50ID4gMFxuICAgICAgICAgICAgPyBgJHtjb3VudH0gbmV3ICR7cGx1cmFsKGNvdW50LCAnbWVzc2FnZScpfWBcbiAgICAgICAgICAgIDogJ0p1bXAgdG8gYm90dG9tJ317JyAnfVxuICAgICAgICAgIHtmaWd1cmVzLmFycm93RG93bn17JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vLyBDb250ZXh0IGJyZWFkY3J1bWI6IHdoZW4gc2Nyb2xsZWQgdXAgaW50byBoaXN0b3J5LCBwaW4gdGhlIGN1cnJlbnRcbi8vIGNvbnZlcnNhdGlvbiB0dXJuJ3MgcHJvbXB0IGFib3ZlIHRoZSB2aWV3cG9ydCBzbyB5b3Uga25vdyB3aGF0IENsYXVkZSB3YXNcbi8vIHJlc3BvbmRpbmcgdG8uIE5vcm1hbC1mbG93IHNpYmxpbmcgQkVGT1JFIHRoZSBTY3JvbGxCb3ggKG1pcnJvcnMgdGhlIHBpbGxcbi8vIGJlbG93IGl0KSDigJQgc2hyaW5rcyB0aGUgU2Nyb2xsQm94IGJ5IGV4YWN0bHkgMSByb3cgdmlhIGZsZXgsIHN0YXlzIG91dHNpZGVcbi8vIHRoZSBERUNTVEJNIHNjcm9sbCByZWdpb24uIENsaWNrIGp1bXBzIGJhY2sgdG8gdGhlIHByb21wdC5cbi8vXG4vLyBIZWlnaHQgaXMgRklYRUQgYXQgMSByb3cgKHRydW5jYXRlLWVuZCBmb3IgbG9uZyBwcm9tcHRzKS4gQSB2YXJpYWJsZS1oZWlnaHRcbi8vIGhlYWRlciAoMSB3aGVuIHNob3J0LCAyIHdoZW4gd3JhcHBlZCkgc2hpZnRzIHRoZSBTY3JvbGxCb3ggYnkgMSByb3cgZXZlcnlcbi8vIHRpbWUgdGhlIHN0aWNreSBwcm9tcHQgc3dpdGNoZXMgZHVyaW5nIHNjcm9sbCDigJQgY29udGVudCBqdW1wcyBvbiBzY3JlZW5cbi8vIGV2ZW4gd2l0aCBzY3JvbGxUb3AgdW5jaGFuZ2VkICh0aGUgREVDU1RCTSByZWdpb24gdG9wIHNoaWZ0cyB3aXRoIHRoZVxuLy8gU2Nyb2xsQm94LCBhbmQgdGhlIGRpZmYgZW5naW5lIHNlZXMgXCJldmVyeXRoaW5nIG1vdmVkXCIpLiBGaXhlZCBoZWlnaHRcbi8vIGtlZXBzIHRoZSBTY3JvbGxCb3ggYW5jaG9yZWQ7IG9ubHkgdGhlIGhlYWRlciBURVhUIGNoYW5nZXMsIG5vdCBpdHMgYm94LlxuZnVuY3Rpb24gU3RpY2t5UHJvbXB0SGVhZGVyKHtcbiAgdGV4dCxcbiAgb25DbGljayxcbn06IHtcbiAgdGV4dDogc3RyaW5nXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PXsxfVxuICAgICAgcGFkZGluZ1JpZ2h0PXsxfVxuICAgICAgYmFja2dyb3VuZENvbG9yPXtcbiAgICAgICAgaG92ZXIgPyAndXNlck1lc3NhZ2VCYWNrZ3JvdW5kSG92ZXInIDogJ3VzZXJNZXNzYWdlQmFja2dyb3VuZCdcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPFRleHQgY29sb3I9XCJzdWJ0bGVcIiB3cmFwPVwidHJ1bmNhdGUtZW5kXCI+XG4gICAgICAgIHtmaWd1cmVzLnBvaW50ZXJ9IHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbi8vIFNsYXNoLWNvbW1hbmQgc3VnZ2VzdGlvbiBvdmVybGF5IOKAlCBzZWUgcHJvbXB0T3ZlcmxheUNvbnRleHQudHN4IGZvciB3aHlcbi8vIGl0J3MgcG9ydGFsZWQuIFNjcm9sbC1zbWVhciBmcm9tIGZsb2F0aW5nIG92ZXIgdGhlIERFQ1NUQk0gcmVnaW9uIGlzXG4vLyByZXBhaXJlZCBhdCB0aGUgSW5rIGxheWVyIChhYnNvbHV0ZVJlY3RzUHJldiBpbiByZW5kZXItbm9kZS10by1vdXRwdXQudHMpLlxuLy8gVGhlIHJlbmRlcmVyIGNsYW1wcyBuZWdhdGl2ZSB5IHRvIDAgZm9yIGFic29sdXRlIGVsZW1lbnRzIChzZWVcbi8vIHJlbmRlci1ub2RlLXRvLW91dHB1dC50cyksIHNvIHRoZSB0b3Agcm93cyAoYmVzdCBtYXRjaGVzKSBzdGF5IHZpc2libGVcbi8vIGV2ZW4gd2hlbiB0aGUgb3ZlcmxheSBleHRlbmRzIGFib3ZlIHRoZSB2aWV3cG9ydC4gV2Ugb21pdCBtaW5IZWlnaHQgYW5kXG4vLyBmbGV4LWVuZCBoZXJlOiB0aGV5IHdvdWxkIGNyZWF0ZSBlbXB0eSBwYWRkaW5nIHJvd3MgdGhhdCBzaGlmdCB2aXNpYmxlXG4vLyBpdGVtcyBkb3duIGludG8gdGhlIHByb21wdCBhcmVhIHdoZW4gdGhlIGxpc3QgaGFzIGZld2VyIGl0ZW1zIHRoYW4gbWF4LlxuZnVuY3Rpb24gU3VnZ2VzdGlvbnNPdmVybGF5KCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VQcm9tcHRPdmVybGF5KClcbiAgaWYgKCFkYXRhIHx8IGRhdGEuc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgYm90dG9tPVwiMTAwJVwiXG4gICAgICBsZWZ0PXswfVxuICAgICAgcmlnaHQ9ezB9XG4gICAgICBwYWRkaW5nWD17Mn1cbiAgICAgIHBhZGRpbmdUb3A9ezF9XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIG9wYXF1ZVxuICAgID5cbiAgICAgIDxQcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zXG4gICAgICAgIHN1Z2dlc3Rpb25zPXtkYXRhLnN1Z2dlc3Rpb25zfVxuICAgICAgICBzZWxlY3RlZFN1Z2dlc3Rpb249e2RhdGEuc2VsZWN0ZWRTdWdnZXN0aW9ufVxuICAgICAgICBtYXhDb2x1bW5XaWR0aD17ZGF0YS5tYXhDb2x1bW5XaWR0aH1cbiAgICAgICAgb3ZlcmxheVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vLyBEaWFsb2cgcG9ydGFsZWQgZnJvbSBQcm9tcHRJbnB1dCAoQXV0b01vZGVPcHRJbkRpYWxvZykg4oCUIHNhbWUgY2xpcC1lc2NhcGVcbi8vIHBhdHRlcm4gYXMgU3VnZ2VzdGlvbnNPdmVybGF5LiBSZW5kZXJzIGxhdGVyIGluIHRyZWUgb3JkZXIgc28gaXQgcGFpbnRzXG4vLyBvdmVyIHN1Z2dlc3Rpb25zIGlmIGJvdGggYXJlIGV2ZXIgdXAgKHRoZXkgc2hvdWxkbid0IGJlKS5cbmZ1bmN0aW9uIERpYWxvZ092ZXJsYXkoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgbm9kZSA9IHVzZVByb21wdE92ZXJsYXlEaWFsb2coKVxuICBpZiAoIW5vZGUpIHJldHVybiBudWxsXG4gIHJldHVybiAoXG4gICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPVwiMTAwJVwiIGxlZnQ9ezB9IHJpZ2h0PXswfSBvcGFxdWU+XG4gICAgICB7bm9kZX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgIi8qKlxuICogTm90ZTogdGhpcyBjb2RlIGlzIGhvdCwgc28gaXMgb3B0aW1pemVkIGZvciBzcGVlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2U8QT4oYTogU2V0PEE+LCBiOiBTZXQ8QT4pOiBTZXQ8QT4ge1xuICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PEE+KClcbiAgZm9yIChjb25zdCBpdGVtIG9mIGEpIHtcbiAgICBpZiAoIWIuaGFzKGl0ZW0pKSB7XG4gICAgICByZXN1bHQuYWRkKGl0ZW0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBOb3RlOiB0aGlzIGNvZGUgaXMgaG90LCBzbyBpcyBvcHRpbWl6ZWQgZm9yIHNwZWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0czxBPihhOiBTZXQ8QT4sIGI6IFNldDxBPik6IGJvb2xlYW4ge1xuICBpZiAoYS5zaXplID09PSAwIHx8IGIuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgaWYgKGIuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBOb3RlOiB0aGlzIGNvZGUgaXMgaG90LCBzbyBpcyBvcHRpbWl6ZWQgZm9yIHNwZWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlcnk8QT4oYTogUmVhZG9ubHlTZXQ8QT4sIGI6IFJlYWRvbmx5U2V0PEE+KTogYm9vbGVhbiB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgaWYgKCFiLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogTm90ZTogdGhpcyBjb2RlIGlzIGhvdCwgc28gaXMgb3B0aW1pemVkIGZvciBzcGVlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uPEE+KGE6IFNldDxBPiwgYjogU2V0PEE+KTogU2V0PEE+IHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxBPigpXG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgcmVzdWx0LmFkZChpdGVtKVxuICB9XG4gIGZvciAoY29uc3QgaXRlbSBvZiBiKSB7XG4gICAgcmVzdWx0LmFkZChpdGVtKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJpbXBvcnQge1xuICBTVEFUVVNfVEFHLFxuICBTVU1NQVJZX1RBRyxcbiAgVEFTS19OT1RJRklDQVRJT05fVEFHLFxufSBmcm9tICcuLi9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHsgQkFDS0dST1VORF9CQVNIX1NVTU1BUllfUFJFRklYIH0gZnJvbSAnLi4vdGFza3MvTG9jYWxTaGVsbFRhc2svTG9jYWxTaGVsbFRhc2suanMnXG5pbXBvcnQgdHlwZSB7XG4gIE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgUmVuZGVyYWJsZU1lc3NhZ2UsXG59IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIH0gZnJvbSAnLi9mdWxsc2NyZWVuLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFRhZyB9IGZyb20gJy4vbWVzc2FnZXMuanMnXG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVkQmFja2dyb3VuZEJhc2goXG4gIG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsXG4pOiBtc2cgaXMgTm9ybWFsaXplZFVzZXJNZXNzYWdlIHtcbiAgaWYgKG1zZy50eXBlICE9PSAndXNlcicpIHJldHVybiBmYWxzZVxuICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICBpZiAoY29udGVudD8udHlwZSAhPT0gJ3RleHQnKSByZXR1cm4gZmFsc2VcbiAgaWYgKCFjb250ZW50LnRleHQuaW5jbHVkZXMoYDwke1RBU0tfTk9USUZJQ0FUSU9OX1RBR31gKSkgcmV0dXJuIGZhbHNlXG4gIC8vIE9ubHkgY29sbGFwc2Ugc3VjY2Vzc2Z1bCBjb21wbGV0aW9ucyBcdTIwMTQgZmFpbGVkL2tpbGxlZCBzdGF5IHZpc2libGUgaW5kaXZpZHVhbGx5LlxuICBpZiAoZXh0cmFjdFRhZyhjb250ZW50LnRleHQsIFNUQVRVU19UQUcpICE9PSAnY29tcGxldGVkJykgcmV0dXJuIGZhbHNlXG4gIC8vIFRoZSBwcmVmaXggY29uc3RhbnQgZGlzdGluZ3Vpc2hlcyBiYXNoLWtpbmQgTG9jYWxTaGVsbFRhc2sgY29tcGxldGlvbnMgZnJvbVxuICAvLyBhZ2VudC93b3JrZmxvdy9tb25pdG9yIG5vdGlmaWNhdGlvbnMuIE1vbml0b3Ita2luZCBjb21wbGV0aW9ucyBoYXZlIHRoZWlyXG4gIC8vIG93biBzdW1tYXJ5IHdvcmRpbmcgYW5kIGRlbGliZXJhdGVseSBkb24ndCBjb2xsYXBzZSBoZXJlLlxuICByZXR1cm4gKFxuICAgIGV4dHJhY3RUYWcoY29udGVudC50ZXh0LCBTVU1NQVJZX1RBRyk/LnN0YXJ0c1dpdGgoXG4gICAgICBCQUNLR1JPVU5EX0JBU0hfU1VNTUFSWV9QUkVGSVgsXG4gICAgKSA/PyBmYWxzZVxuICApXG59XG5cbi8qKlxuICogQ29sbGFwc2VzIGNvbnNlY3V0aXZlIGNvbXBsZXRlZC1iYWNrZ3JvdW5kLWJhc2ggdGFzay1ub3RpZmljYXRpb25zIGludG8gYVxuICogc2luZ2xlIHN5bnRoZXRpYyBcIk4gYmFja2dyb3VuZCBjb21tYW5kcyBjb21wbGV0ZWRcIiBub3RpZmljYXRpb24uIEZhaWxlZC9raWxsZWRcbiAqIHRhc2tzIGFuZCBhZ2VudC93b3JrZmxvdyBub3RpZmljYXRpb25zIGFyZSBsZWZ0IGFsb25lLiBNb25pdG9yIHN0cmVhbVxuICogZXZlbnRzIChlbnF1ZXVlU3RyZWFtRXZlbnQpIGhhdmUgbm8gPHN0YXR1cz4gdGFnIGFuZCBuZXZlciBtYXRjaC5cbiAqXG4gKiBQYXNzLXRocm91Z2ggaW4gdmVyYm9zZSBtb2RlIHNvIGN0cmwrTyBzaG93cyBlYWNoIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucyhcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW10sXG4gIHZlcmJvc2U6IGJvb2xlYW4sXG4pOiBSZW5kZXJhYmxlTWVzc2FnZVtdIHtcbiAgaWYgKCFpc0Z1bGxzY3JlZW5FbnZFbmFibGVkKCkpIHJldHVybiBtZXNzYWdlc1xuICBpZiAodmVyYm9zZSkgcmV0dXJuIG1lc3NhZ2VzXG5cbiAgY29uc3QgcmVzdWx0OiBSZW5kZXJhYmxlTWVzc2FnZVtdID0gW11cbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCBtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAoaXNDb21wbGV0ZWRCYWNrZ3JvdW5kQmFzaChtc2cpKSB7XG4gICAgICBsZXQgY291bnQgPSAwXG4gICAgICB3aGlsZSAoaSA8IG1lc3NhZ2VzLmxlbmd0aCAmJiBpc0NvbXBsZXRlZEJhY2tncm91bmRCYXNoKG1lc3NhZ2VzW2ldISkpIHtcbiAgICAgICAgY291bnQrK1xuICAgICAgICBpKytcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChtc2cpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTeW50aGVzaXplIGEgdGFzay1ub3RpZmljYXRpb24gdGhhdCBVc2VyQWdlbnROb3RpZmljYXRpb25NZXNzYWdlXG4gICAgICAgIC8vIGFscmVhZHkga25vd3MgaG93IHRvIHJlbmRlciBcdTIwMTQgbm8gbmV3IHJlbmRlcmVyIG5lZWRlZC5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIC4uLm1zZyxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dDogYDwke1RBU0tfTk9USUZJQ0FUSU9OX1RBR30+PCR7U1RBVFVTX1RBR30+Y29tcGxldGVkPC8ke1NUQVRVU19UQUd9Pjwke1NVTU1BUllfVEFHfT4ke2NvdW50fSBiYWNrZ3JvdW5kIGNvbW1hbmRzIGNvbXBsZXRlZDwvJHtTVU1NQVJZX1RBR30+PC8ke1RBU0tfTk9USUZJQ0FUSU9OX1RBR30+YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2gobXNnKVxuICAgICAgaSsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVuZGVyYWJsZU1lc3NhZ2UsXG4gIFN5c3RlbVN0b3BIb29rU3VtbWFyeU1lc3NhZ2UsXG59IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbmZ1bmN0aW9uIGlzTGFiZWxlZEhvb2tTdW1tYXJ5KFxuICBtc2c6IFJlbmRlcmFibGVNZXNzYWdlLFxuKTogbXNnIGlzIFN5c3RlbVN0b3BIb29rU3VtbWFyeU1lc3NhZ2Uge1xuICByZXR1cm4gKFxuICAgIG1zZy50eXBlID09PSAnc3lzdGVtJyAmJlxuICAgIG1zZy5zdWJ0eXBlID09PSAnc3RvcF9ob29rX3N1bW1hcnknICYmXG4gICAgbXNnLmhvb2tMYWJlbCAhPT0gdW5kZWZpbmVkXG4gIClcbn1cblxuLyoqXG4gKiBDb2xsYXBzZXMgY29uc2VjdXRpdmUgaG9vayBzdW1tYXJ5IG1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgaG9va0xhYmVsXG4gKiAoZS5nLiBQb3N0VG9vbFVzZSkgaW50byBhIHNpbmdsZSBzdW1tYXJ5LiBUaGlzIGhhcHBlbnMgd2hlbiBwYXJhbGxlbFxuICogdG9vbCBjYWxscyBlYWNoIGVtaXQgdGhlaXIgb3duIGhvb2sgc3VtbWFyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlSG9va1N1bW1hcmllcyhcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW10sXG4pOiBSZW5kZXJhYmxlTWVzc2FnZVtdIHtcbiAgY29uc3QgcmVzdWx0OiBSZW5kZXJhYmxlTWVzc2FnZVtdID0gW11cbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCBtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAoaXNMYWJlbGVkSG9va1N1bW1hcnkobXNnKSkge1xuICAgICAgY29uc3QgbGFiZWwgPSBtc2cuaG9va0xhYmVsXG4gICAgICBjb25zdCBncm91cDogU3lzdGVtU3RvcEhvb2tTdW1tYXJ5TWVzc2FnZVtdID0gW11cbiAgICAgIHdoaWxlIChpIDwgbWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBtZXNzYWdlc1tpXSFcbiAgICAgICAgaWYgKCFpc0xhYmVsZWRIb29rU3VtbWFyeShuZXh0KSB8fCBuZXh0Lmhvb2tMYWJlbCAhPT0gbGFiZWwpIGJyZWFrXG4gICAgICAgIGdyb3VwLnB1c2gobmV4dClcbiAgICAgICAgaSsrXG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAuLi5tc2csXG4gICAgICAgICAgaG9va0NvdW50OiBncm91cC5yZWR1Y2UoKHN1bSwgbSkgPT4gc3VtICsgbS5ob29rQ291bnQsIDApLFxuICAgICAgICAgIGhvb2tJbmZvczogZ3JvdXAuZmxhdE1hcChtID0+IG0uaG9va0luZm9zKSxcbiAgICAgICAgICBob29rRXJyb3JzOiBncm91cC5mbGF0TWFwKG0gPT4gbS5ob29rRXJyb3JzKSxcbiAgICAgICAgICBwcmV2ZW50ZWRDb250aW51YXRpb246IGdyb3VwLnNvbWUobSA9PiBtLnByZXZlbnRlZENvbnRpbnVhdGlvbiksXG4gICAgICAgICAgaGFzT3V0cHV0OiBncm91cC5zb21lKG0gPT4gbS5oYXNPdXRwdXQpLFxuICAgICAgICAgIC8vIFBhcmFsbGVsIHRvb2wgY2FsbHMnIGhvb2tzIG92ZXJsYXA7IG1heCBpcyBjbG9zZXN0IHRvIHdhbGwtY2xvY2suXG4gICAgICAgICAgdG90YWxEdXJhdGlvbk1zOiBNYXRoLm1heCguLi5ncm91cC5tYXAobSA9PiBtLnRvdGFsRHVyYXRpb25NcyA/PyAwKSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIGkrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEF0dGFjaG1lbnRNZXNzYWdlLCBSZW5kZXJhYmxlTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbmZ1bmN0aW9uIGlzVGVhbW1hdGVTaHV0ZG93bkF0dGFjaG1lbnQoXG4gIG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsXG4pOiBtc2cgaXMgQXR0YWNobWVudE1lc3NhZ2Uge1xuICByZXR1cm4gKFxuICAgIG1zZy50eXBlID09PSAnYXR0YWNobWVudCcgJiZcbiAgICBtc2cuYXR0YWNobWVudC50eXBlID09PSAndGFza19zdGF0dXMnICYmXG4gICAgbXNnLmF0dGFjaG1lbnQudGFza1R5cGUgPT09ICdpbl9wcm9jZXNzX3RlYW1tYXRlJyAmJlxuICAgIG1zZy5hdHRhY2htZW50LnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCdcbiAgKVxufVxuXG4vKipcbiAqIENvbGxhcHNlcyBjb25zZWN1dGl2ZSBpbi1wcm9jZXNzIHRlYW1tYXRlIHNodXRkb3duIHRhc2tfc3RhdHVzIGF0dGFjaG1lbnRzXG4gKiBpbnRvIGEgc2luZ2xlIGB0ZWFtbWF0ZV9zaHV0ZG93bl9iYXRjaGAgYXR0YWNobWVudCB3aXRoIGEgY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zKFxuICBtZXNzYWdlczogUmVuZGVyYWJsZU1lc3NhZ2VbXSxcbik6IFJlbmRlcmFibGVNZXNzYWdlW10ge1xuICBjb25zdCByZXN1bHQ6IFJlbmRlcmFibGVNZXNzYWdlW10gPSBbXVxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldIVxuICAgIGlmIChpc1RlYW1tYXRlU2h1dGRvd25BdHRhY2htZW50KG1zZykpIHtcbiAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgIHdoaWxlIChcbiAgICAgICAgaSA8IG1lc3NhZ2VzLmxlbmd0aCAmJlxuICAgICAgICBpc1RlYW1tYXRlU2h1dGRvd25BdHRhY2htZW50KG1lc3NhZ2VzW2ldISlcbiAgICAgICkge1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGkrK1xuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYXR0YWNobWVudCcsXG4gICAgICAgICAgdXVpZDogbXNnLnV1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiBtc2cudGltZXN0YW1wLFxuICAgICAgICAgIGF0dGFjaG1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZWFtbWF0ZV9zaHV0ZG93bl9iYXRjaCcsXG4gICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChtc2cpXG4gICAgICBpKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBCZXRhVG9vbFVzZUJsb2NrIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL2JldGEvbWVzc2FnZXMvbWVzc2FnZXMubWpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sUmVzdWx0QmxvY2tQYXJhbSB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9tZXNzYWdlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgR3JvdXBlZFRvb2xVc2VNZXNzYWdlLFxuICBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZSxcbiAgTm9ybWFsaXplZE1lc3NhZ2UsXG4gIE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgUHJvZ3Jlc3NNZXNzYWdlLFxuICBSZW5kZXJhYmxlTWVzc2FnZSxcbn0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcblxuZXhwb3J0IHR5cGUgTWVzc2FnZVdpdGhvdXRQcm9ncmVzcyA9IEV4Y2x1ZGU8Tm9ybWFsaXplZE1lc3NhZ2UsIFByb2dyZXNzTWVzc2FnZT5cblxuZXhwb3J0IHR5cGUgR3JvdXBpbmdSZXN1bHQgPSB7XG4gIG1lc3NhZ2VzOiBSZW5kZXJhYmxlTWVzc2FnZVtdXG59XG5cbi8vIENhY2hlIHRoZSBzZXQgb2YgdG9vbCBuYW1lcyB0aGF0IHN1cHBvcnQgZ3JvdXBlZCByZW5kZXJpbmcsIGtleWVkIGJ5IHRoZVxuLy8gdG9vbHMgYXJyYXkgcmVmZXJlbmNlLiBUaGUgdG9vbHMgYXJyYXkgaXMgc3RhYmxlIGFjcm9zcyByZW5kZXJzIChvbmx5XG4vLyByZXBsYWNlZCBvbiBNQ1AgY29ubmVjdC9kaXNjb25uZWN0KSwgc28gdGhpcyBhdm9pZHMgcmVidWlsZGluZyB0aGUgc2V0IG9uXG4vLyBldmVyeSBjYWxsLiBXZWFrTWFwIGxldHMgb2xkIGVudHJpZXMgYmUgR0MnZCB3aGVuIHRoZSBhcnJheSBpcyByZXBsYWNlZC5cbmNvbnN0IEdST1VQSU5HX0NBQ0hFID0gbmV3IFdlYWtNYXA8VG9vbHMsIFNldDxzdHJpbmc+PigpXG5cbmZ1bmN0aW9uIGdldFRvb2xzV2l0aEdyb3VwaW5nKHRvb2xzOiBUb29scyk6IFNldDxzdHJpbmc+IHtcbiAgbGV0IGNhY2hlZCA9IEdST1VQSU5HX0NBQ0hFLmdldCh0b29scylcbiAgaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBuZXcgU2V0KHRvb2xzLmZpbHRlcih0ID0+IHQucmVuZGVyR3JvdXBlZFRvb2xVc2UpLm1hcCh0ID0+IHQubmFtZSkpXG4gICAgR1JPVVBJTkdfQ0FDSEUuc2V0KHRvb2xzLCBjYWNoZWQpXG4gIH1cbiAgcmV0dXJuIGNhY2hlZFxufVxuXG5mdW5jdGlvbiBnZXRUb29sVXNlSW5mbyhcbiAgbXNnOiBNZXNzYWdlV2l0aG91dFByb2dyZXNzLFxuKTogeyBtZXNzYWdlSWQ6IHN0cmluZzsgdG9vbFVzZUlkOiBzdHJpbmc7IHRvb2xOYW1lOiBzdHJpbmcgfSB8IG51bGwge1xuICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmIG1zZy5tZXNzYWdlLmNvbnRlbnRbMF0/LnR5cGUgPT09ICd0b29sX3VzZScpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlSWQ6IG1zZy5tZXNzYWdlLmlkLFxuICAgICAgdG9vbFVzZUlkOiBjb250ZW50LmlkLFxuICAgICAgdG9vbE5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBHcm91cHMgdG9vbCB1c2VzIGJ5IG1lc3NhZ2UuaWQgKHNhbWUgQVBJIHJlc3BvbnNlKSBpZiB0aGUgdG9vbCBzdXBwb3J0cyBncm91cGVkIHJlbmRlcmluZy5cbiAqIE9ubHkgZ3JvdXBzIDIrIHRvb2xzIG9mIHRoZSBzYW1lIHR5cGUgZnJvbSB0aGUgc2FtZSBtZXNzYWdlLlxuICogQWxzbyBjb2xsZWN0cyBjb3JyZXNwb25kaW5nIHRvb2xfcmVzdWx0cyBhbmQgYXR0YWNoZXMgdGhlbSB0byB0aGUgZ3JvdXBlZCBtZXNzYWdlLlxuICogV2hlbiB2ZXJib3NlIGlzIHRydWUsIHNraXBzIGdyb3VwaW5nIHNvIG1lc3NhZ2VzIHJlbmRlciBhdCBvcmlnaW5hbCBwb3NpdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUdyb3VwaW5nKFxuICBtZXNzYWdlczogTWVzc2FnZVdpdGhvdXRQcm9ncmVzc1tdLFxuICB0b29sczogVG9vbHMsXG4gIHZlcmJvc2U6IGJvb2xlYW4gPSBmYWxzZSxcbik6IEdyb3VwaW5nUmVzdWx0IHtcbiAgLy8gSW4gdmVyYm9zZSBtb2RlLCBkb24ndCBncm91cCAtIGVhY2ggbWVzc2FnZSByZW5kZXJzIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuICBpZiAodmVyYm9zZSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgfVxuICB9XG4gIGNvbnN0IHRvb2xzV2l0aEdyb3VwaW5nID0gZ2V0VG9vbHNXaXRoR3JvdXBpbmcodG9vbHMpXG5cbiAgLy8gRmlyc3QgcGFzczogZ3JvdXAgdG9vbCB1c2VzIGJ5IG1lc3NhZ2UuaWQgKyB0b29sIG5hbWVcbiAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgTm9ybWFsaXplZEFzc2lzdGFudE1lc3NhZ2U8QmV0YVRvb2xVc2VCbG9jaz5bXVxuICA+KClcblxuICBmb3IgKGNvbnN0IG1zZyBvZiBtZXNzYWdlcykge1xuICAgIGNvbnN0IGluZm8gPSBnZXRUb29sVXNlSW5mbyhtc2cpXG4gICAgaWYgKGluZm8gJiYgdG9vbHNXaXRoR3JvdXBpbmcuaGFzKGluZm8udG9vbE5hbWUpKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpbmZvLm1lc3NhZ2VJZH06JHtpbmZvLnRvb2xOYW1lfWBcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpID8/IFtdXG4gICAgICBncm91cC5wdXNoKG1zZyBhcyBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZTxCZXRhVG9vbFVzZUJsb2NrPilcbiAgICAgIGdyb3Vwcy5zZXQoa2V5LCBncm91cClcbiAgICB9XG4gIH1cblxuICAvLyBJZGVudGlmeSB2YWxpZCBncm91cHMgKDIrIGl0ZW1zKSBhbmQgY29sbGVjdCB0aGVpciB0b29sIHVzZSBJRHNcbiAgY29uc3QgdmFsaWRHcm91cHMgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZTxCZXRhVG9vbFVzZUJsb2NrPltdXG4gID4oKVxuICBjb25zdCBncm91cGVkVG9vbFVzZUlkcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgZm9yIChjb25zdCBba2V5LCBncm91cF0gb2YgZ3JvdXBzKSB7XG4gICAgaWYgKGdyb3VwLmxlbmd0aCA+PSAyKSB7XG4gICAgICB2YWxpZEdyb3Vwcy5zZXQoa2V5LCBncm91cClcbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRUb29sVXNlSW5mbyhtc2cpXG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgZ3JvdXBlZFRvb2xVc2VJZHMuYWRkKGluZm8udG9vbFVzZUlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29sbGVjdCByZXN1bHQgbWVzc2FnZXMgZm9yIGdyb3VwZWQgdG9vbF91c2VzXG4gIC8vIE1hcCBmcm9tIHRvb2xfdXNlX2lkIHRvIHRoZSB1c2VyIG1lc3NhZ2UgY29udGFpbmluZyB0aGF0IHJlc3VsdFxuICBjb25zdCByZXN1bHRzQnlUb29sVXNlSWQgPSBuZXcgTWFwPHN0cmluZywgTm9ybWFsaXplZFVzZXJNZXNzYWdlPigpXG5cbiAgZm9yIChjb25zdCBtc2cgb2YgbWVzc2FnZXMpIHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIG1zZy5tZXNzYWdlLmNvbnRlbnQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbnRlbnQudHlwZSA9PT0gJ3Rvb2xfcmVzdWx0JyAmJlxuICAgICAgICAgIGdyb3VwZWRUb29sVXNlSWRzLmhhcyhjb250ZW50LnRvb2xfdXNlX2lkKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHRzQnlUb29sVXNlSWQuc2V0KGNvbnRlbnQudG9vbF91c2VfaWQsIG1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlY29uZCBwYXNzOiBidWlsZCBvdXRwdXQsIGVtaXR0aW5nIGVhY2ggZ3JvdXAgb25seSBvbmNlXG4gIGNvbnN0IHJlc3VsdDogUmVuZGVyYWJsZU1lc3NhZ2VbXSA9IFtdXG4gIGNvbnN0IGVtaXR0ZWRHcm91cHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldFRvb2xVc2VJbmZvKG1zZylcblxuICAgIGlmIChpbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpbmZvLm1lc3NhZ2VJZH06JHtpbmZvLnRvb2xOYW1lfWBcbiAgICAgIGNvbnN0IGdyb3VwID0gdmFsaWRHcm91cHMuZ2V0KGtleSlcblxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGlmICghZW1pdHRlZEdyb3Vwcy5oYXMoa2V5KSkge1xuICAgICAgICAgIGVtaXR0ZWRHcm91cHMuYWRkKGtleSlcbiAgICAgICAgICBjb25zdCBmaXJzdE1zZyA9IGdyb3VwWzBdIVxuXG4gICAgICAgICAgLy8gQ29sbGVjdCByZXN1bHRzIGZvciB0aGlzIGdyb3VwXG4gICAgICAgICAgY29uc3QgcmVzdWx0czogTm9ybWFsaXplZFVzZXJNZXNzYWdlW10gPSBbXVxuICAgICAgICAgIGZvciAoY29uc3QgYXNzaXN0YW50TXNnIG9mIGdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCB0b29sVXNlSWQgPSAoXG4gICAgICAgICAgICAgIGFzc2lzdGFudE1zZy5tZXNzYWdlLmNvbnRlbnRbMF0gYXMgeyBpZDogc3RyaW5nIH1cbiAgICAgICAgICAgICkuaWRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdE1zZyA9IHJlc3VsdHNCeVRvb2xVc2VJZC5nZXQodG9vbFVzZUlkKVxuICAgICAgICAgICAgaWYgKHJlc3VsdE1zZykge1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGdyb3VwZWRNZXNzYWdlOiBHcm91cGVkVG9vbFVzZU1lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZ3JvdXBlZF90b29sX3VzZScsXG4gICAgICAgICAgICB0b29sTmFtZTogaW5mby50b29sTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBncm91cCxcbiAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICBkaXNwbGF5TWVzc2FnZTogZmlyc3RNc2csXG4gICAgICAgICAgICB1dWlkOiBgZ3JvdXBlZC0ke2ZpcnN0TXNnLnV1aWR9YCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyc3RNc2cudGltZXN0YW1wLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBpbmZvLm1lc3NhZ2VJZCxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goZ3JvdXBlZE1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTa2lwIHVzZXIgbWVzc2FnZXMgd2hvc2UgdG9vbF9yZXN1bHRzIGFyZSBhbGwgZ3JvdXBlZFxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICBjb25zdCB0b29sUmVzdWx0cyA9IG1zZy5tZXNzYWdlLmNvbnRlbnQuZmlsdGVyKFxuICAgICAgICAoYyk6IGMgaXMgVG9vbFJlc3VsdEJsb2NrUGFyYW0gPT4gYy50eXBlID09PSAndG9vbF9yZXN1bHQnLFxuICAgICAgKVxuICAgICAgaWYgKHRvb2xSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsR3JvdXBlZCA9IHRvb2xSZXN1bHRzLmV2ZXJ5KHRyID0+XG4gICAgICAgICAgZ3JvdXBlZFRvb2xVc2VJZHMuaGFzKHRyLnRvb2xfdXNlX2lkKSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoYWxsR3JvdXBlZCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChtc2cpXG4gIH1cblxuICByZXR1cm4geyBtZXNzYWdlczogcmVzdWx0IH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJlbmRlcmFibGVNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7XG4gIElOVEVSUlVQVF9NRVNTQUdFLFxuICBJTlRFUlJVUFRfTUVTU0FHRV9GT1JfVE9PTF9VU0UsXG59IGZyb20gJy4vbWVzc2FnZXMuanMnXG5cbmNvbnN0IFNZU1RFTV9SRU1JTkRFUl9DTE9TRSA9ICc8L3N5c3RlbS1yZW1pbmRlcj4nXG5cbi8vIFVzZXJUZXh0TWVzc2FnZS50c3g6fjg0IHJlcGxhY2VzIHRoZXNlIHdpdGggPEludGVycnVwdGVkQnlVc2VyIC8+XG4vLyAocmVuZGVycyAnSW50ZXJydXB0ZWQgXHUwMEI3IC9pc3N1ZS4uLicpLiBSYXcgdGV4dCBuZXZlciBhcHBlYXJzIG9uIHNjcmVlbjtcbi8vIHNlYXJjaGluZyBpdCB5aWVsZHMgcGhhbnRvbSBtYXRjaGVzIFx1MjAxNCAvdGVyciBcdTIxOTIgaW5bdGVycl11cHRlZC5cbmNvbnN0IFJFTkRFUkVEX0FTX1NFTlRJTkVMID0gbmV3IFNldChbXG4gIElOVEVSUlVQVF9NRVNTQUdFLFxuICBJTlRFUlJVUFRfTUVTU0FHRV9GT1JfVE9PTF9VU0UsXG5dKVxuXG5jb25zdCBzZWFyY2hUZXh0Q2FjaGUgPSBuZXcgV2Vha01hcDxSZW5kZXJhYmxlTWVzc2FnZSwgc3RyaW5nPigpXG5cbi8qKiBGbGF0dGVuIGEgUmVuZGVyYWJsZU1lc3NhZ2UgdG8gbG93ZXJjYXNlZCBzZWFyY2hhYmxlIHRleHQuIFdlYWtNYXAtXG4gKiAgY2FjaGVkIFx1MjAxNCBtZXNzYWdlcyBhcmUgYXBwZW5kLW9ubHkgYW5kIGltbXV0YWJsZSBzbyBhIGhpdCBpcyBhbHdheXNcbiAqICB2YWxpZC4gTG93ZXJjYXNlZCBhdCBjYWNoZSB0aW1lOiB0aGUgb25seSBjYWxsZXIgaW1tZWRpYXRlbHlcbiAqICAudG9Mb3dlckNhc2UoKWQgdGhlIHJlc3VsdCwgcmUtbG93ZXJpbmcgfjEuNU1CIG9uIGV2ZXJ5IGtleXN0cm9rZVxuICogICh0aGUgYmFja3NwYWNlIGhhbmcpLiBSZXR1cm5zICcnIGZvciBub24tc2VhcmNoYWJsZSB0eXBlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJhYmxlU2VhcmNoVGV4dChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKTogc3RyaW5nIHtcbiAgY29uc3QgY2FjaGVkID0gc2VhcmNoVGV4dENhY2hlLmdldChtc2cpXG4gIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZFxuICBjb25zdCByZXN1bHQgPSBjb21wdXRlU2VhcmNoVGV4dChtc2cpLnRvTG93ZXJDYXNlKClcbiAgc2VhcmNoVGV4dENhY2hlLnNldChtc2csIHJlc3VsdClcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjb21wdXRlU2VhcmNoVGV4dChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKTogc3RyaW5nIHtcbiAgbGV0IHJhdyA9ICcnXG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICd1c2VyJzoge1xuICAgICAgY29uc3QgYyA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmF3ID0gUkVOREVSRURfQVNfU0VOVElORUwuaGFzKGMpID8gJycgOiBjXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGIgb2YgYykge1xuICAgICAgICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgaWYgKCFSRU5ERVJFRF9BU19TRU5USU5FTC5oYXMoYi50ZXh0KSkgcGFydHMucHVzaChiLnRleHQpXG4gICAgICAgICAgfSBlbHNlIGlmIChiLnR5cGUgPT09ICd0b29sX3Jlc3VsdCcpIHtcbiAgICAgICAgICAgIC8vIGIuY29udGVudCBpcyB0aGUgTU9ERUwtZmFjaW5nIHNlcmlhbGl6YXRpb24gKGZyb20gZWFjaCB0b29sJ3NcbiAgICAgICAgICAgIC8vIG1hcFRvb2xSZXN1bHRUb1Rvb2xSZXN1bHRCbG9ja1BhcmFtKSBcdTIwMTQgYWRkcyBzeXN0ZW0tcmVtaW5kZXJzLFxuICAgICAgICAgICAgLy8gPHBlcnNpc3RlZC1vdXRwdXQ+IHdyYXBwZXJzLCBiYWNrZ3JvdW5kSW5mbyBzdHJpbmdzLFxuICAgICAgICAgICAgLy8gQ1lCRVJfUklTS19NSVRJR0FUSU9OX1JFTUlOREVSLiBUaGUgVUlcbiAgICAgICAgICAgIC8vIHJlbmRlcnMgbXNnLnRvb2xVc2VSZXN1bHQgKHRoZSB0b29sJ3MgbmF0aXZlIE91dCkgdmlhXG4gICAgICAgICAgICAvLyByZW5kZXJUb29sUmVzdWx0TWVzc2FnZSBcdTIwMTQgRElGRkVSRU5UIHRleHQuIEluZGV4aW5nIGIuY29udGVudFxuICAgICAgICAgICAgLy8geWllbGRzIHBoYW50b21zOiAvbWFsd2FyZSBcdTIxOTIgbWF0Y2hlcyB0aGUgcmVtaW5kZXIsIC9iYWNrZ3JvdW5kXG4gICAgICAgICAgICAvLyBcdTIxOTIgbWF0Y2hlcyB0aGUgbW9kZWwtb25seSBJRCBzdHJpbmcsIG5vbmUgcmVuZGVyLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIER1Y2stdHlwZSB0aGUgbmF0aXZlIE91dCBpbnN0ZWFkLiBDb3ZlcnMgdGhlIGNvbW1vbiBzaGFwZXM6XG4gICAgICAgICAgICAvLyBCYXNoIHtzdGRvdXQsc3RkZXJyfSwgR3JlcCB7Y29udGVudCxmaWxlbmFtZXN9LCBSZWFkXG4gICAgICAgICAgICAvLyB7ZmlsZS5jb250ZW50fS4gVW5rbm93biBzaGFwZXMgaW5kZXggZW1wdHkgXHUyMDE0IHVuZGVyLWNvdW50IGlzXG4gICAgICAgICAgICAvLyBob25lc3QsIHBoYW50b20gaXMgYSBsaWUuIFByb3BlciBmaXggaXMgcGVyLXRvb2xcbiAgICAgICAgICAgIC8vIGV4dHJhY3RTZWFyY2hUZXh0KE91dCkgb24gdGhlIFRvb2wgaW50ZXJmYWNlIChUT0RPKS5cbiAgICAgICAgICAgIHBhcnRzLnB1c2godG9vbFJlc3VsdFNlYXJjaFRleHQobXNnLnRvb2xVc2VSZXN1bHQpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByYXcgPSBwYXJ0cy5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSAnYXNzaXN0YW50Jzoge1xuICAgICAgY29uc3QgYyA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICAgIC8vIHRleHQgYmxvY2tzICsgdG9vbF91c2UgaW5wdXRzLiB0b29sX3VzZSByZW5kZXJzIGFzIFwiXHUyM0ZBIEJhc2goY21kKVwiXG4gICAgICAgIC8vIFx1MjAxNCB0aGUgY29tbWFuZC9wYXR0ZXJuL3BhdGggaXMgdmlzaWJsZSBhbmQgc2VhcmNoYWJsZS1leHBlY3RlZC5cbiAgICAgICAgLy8gU2tpcCB0aGlua2luZyAoaGlkZGVuIGJ5IGhpZGVQYXN0VGhpbmtpbmcgaW4gdHJhbnNjcmlwdCBtb3VudCkuXG4gICAgICAgIHJhdyA9IGNcbiAgICAgICAgICAuZmxhdE1hcChiID0+IHtcbiAgICAgICAgICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIFtiLnRleHRdXG4gICAgICAgICAgICBpZiAoYi50eXBlID09PSAndG9vbF91c2UnKSByZXR1cm4gW3Rvb2xVc2VTZWFyY2hUZXh0KGIuaW5wdXQpXVxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuam9pbignXFxuJylcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ2F0dGFjaG1lbnQnOiB7XG4gICAgICAvLyByZWxldmFudF9tZW1vcmllcyByZW5kZXJzIGZ1bGwgbS5jb250ZW50IGluIHRyYW5zY3JpcHQgbW9kZVxuICAgICAgLy8gKEF0dGFjaG1lbnRNZXNzYWdlLnRzeCA8QW5zaT57bS5jb250ZW50fTwvQW5zaT4pLiBWaXNpYmxlIGJ1dFxuICAgICAgLy8gdW5zZWFyY2hhYmxlIHdpdGhvdXQgdGhpcyBcdTIwMTQgWyBkdW1wIGZpbmRzIGl0LCAvIGRvZXNuJ3QuXG4gICAgICBpZiAobXNnLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3JlbGV2YW50X21lbW9yaWVzJykge1xuICAgICAgICByYXcgPSBtc2cuYXR0YWNobWVudC5tZW1vcmllcy5tYXAobSA9PiBtLmNvbnRlbnQpLmpvaW4oJ1xcbicpXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAvLyBNaWQtdHVybiBwcm9tcHRzIFx1MjAxNCBxdWV1ZWQgd2hpbGUgYW4gYWdlbnQgaXMgcnVubmluZy4gUmVuZGVyIHZpYVxuICAgICAgICAvLyBVc2VyVGV4dE1lc3NhZ2UgKEF0dGFjaG1lbnRNZXNzYWdlLnRzeDp+MzQ4KS4gc3RpY2t5UHJvbXB0VGV4dFxuICAgICAgICAvLyAoVmlydHVhbE1lc3NhZ2VMaXN0LnRzeDp+MTAzKSBoYXMgdGhlIHNhbWUgZ3VhcmRzIFx1MjAxNCBtaXJyb3IgaGVyZS5cbiAgICAgICAgbXNnLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJyAmJlxuICAgICAgICBtc2cuYXR0YWNobWVudC5jb21tYW5kTW9kZSAhPT0gJ3Rhc2stbm90aWZpY2F0aW9uJyAmJlxuICAgICAgICAhbXNnLmF0dGFjaG1lbnQuaXNNZXRhXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcCA9IG1zZy5hdHRhY2htZW50LnByb21wdFxuICAgICAgICByYXcgPVxuICAgICAgICAgIHR5cGVvZiBwID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBwXG4gICAgICAgICAgICA6IHAuZmxhdE1hcChiID0+IChiLnR5cGUgPT09ICd0ZXh0JyA/IFtiLnRleHRdIDogW10pKS5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJzoge1xuICAgICAgLy8gcmVsZXZhbnRfbWVtb3JpZXMgYXR0YWNobWVudHMgYXJlIGFic29yYmVkIGludG8gY29sbGFwc2UgZ3JvdXBzXG4gICAgICAvLyAoY29sbGFwc2VSZWFkU2VhcmNoLnRzKTsgdGhlaXIgY29udGVudCBpcyB2aXNpYmxlIGluIHRyYW5zY3JpcHQgbW9kZVxuICAgICAgLy8gdmlhIENvbGxhcHNlZFJlYWRTZWFyY2hDb250ZW50LCBzbyBtaXJyb3IgaXQgaGVyZSBmb3IgLyBzZWFyY2guXG4gICAgICBpZiAobXNnLnJlbGV2YW50TWVtb3JpZXMpIHtcbiAgICAgICAgcmF3ID0gbXNnLnJlbGV2YW50TWVtb3JpZXMubWFwKG0gPT4gbS5jb250ZW50KS5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGdyb3VwZWRfdG9vbF91c2UsIHN5c3RlbSBcdTIwMTQgbm8gdGV4dCBjb250ZW50XG4gICAgICBicmVha1xuICB9XG4gIC8vIFN0cmlwIDxzeXN0ZW0tcmVtaW5kZXI+IGFueXdoZXJlIFx1MjAxNCBDbGF1ZGUgY29udGV4dCwgbm90IHVzZXItdmlzaWJsZS5cbiAgLy8gTWlkLW1lc3NhZ2Ugb24gY2MgLWMgcmVzdW1lcyAobWVtb3J5IHJlbWluZGVycyBiZXR3ZWVuIHByb21wdCBsaW5lcykuXG4gIGxldCB0ID0gcmF3XG4gIGxldCBvcGVuID0gdC5pbmRleE9mKCc8c3lzdGVtLXJlbWluZGVyPicpXG4gIHdoaWxlIChvcGVuID49IDApIHtcbiAgICBjb25zdCBjbG9zZSA9IHQuaW5kZXhPZihTWVNURU1fUkVNSU5ERVJfQ0xPU0UsIG9wZW4pXG4gICAgaWYgKGNsb3NlIDwgMCkgYnJlYWtcbiAgICB0ID0gdC5zbGljZSgwLCBvcGVuKSArIHQuc2xpY2UoY2xvc2UgKyBTWVNURU1fUkVNSU5ERVJfQ0xPU0UubGVuZ3RoKVxuICAgIG9wZW4gPSB0LmluZGV4T2YoJzxzeXN0ZW0tcmVtaW5kZXI+JylcbiAgfVxuICByZXR1cm4gdFxufVxuXG4vKiogVG9vbCBpbnZvY2F0aW9uIGRpc3BsYXk6IHJlbmRlclRvb2xVc2VNZXNzYWdlIHNob3dzIGlucHV0IGZpZWxkcyBsaWtlXG4gKiAgY29tbWFuZCAoQmFzaCksIHBhdHRlcm4gKEdyZXApLCBmaWxlX3BhdGggKFJlYWQvRWRpdCksIHByb21wdCAoQWdlbnQpLlxuICogIFNhbWUgZHVjay10eXBlIHN0cmF0ZWd5IGFzIHRvb2xSZXN1bHRTZWFyY2hUZXh0IFx1MjAxNCBrbm93biBmaWVsZCBuYW1lcyxcbiAqICB1bmtub3duIFx1MjE5MiBlbXB0eS4gVW5kZXItY291bnQgPiBwaGFudG9tLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvb2xVc2VTZWFyY2hUZXh0KGlucHV0OiB1bmtub3duKTogc3RyaW5nIHtcbiAgaWYgKCFpbnB1dCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnKSByZXR1cm4gJydcbiAgY29uc3QgbyA9IGlucHV0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIC8vIHJlbmRlclRvb2xVc2VNZXNzYWdlIHR5cGljYWxseSBzaG93cyBvbmUgb3IgdHdvIG9mIHRoZXNlIGFzIHRoZVxuICAvLyBwcmltYXJ5IGFyZ3VtZW50LiB0b29sX25hbWUgaXRzZWxmIGlzIGluIHRoZSBcIlx1MjNGQSBCYXNoKC4uLilcIiBjaHJvbWUsXG4gIC8vIGhhbmRsZWQgYnkgdW5kZXItY291bnQgKHRoZSBvdmVybGF5IG1hdGNoZXMgaXQgYnV0IHdlIGRvbid0IGNvdW50IGl0KS5cbiAgZm9yIChjb25zdCBrIG9mIFtcbiAgICAnY29tbWFuZCcsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdmaWxlX3BhdGgnLFxuICAgICdwYXRoJyxcbiAgICAncHJvbXB0JyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICdxdWVyeScsXG4gICAgJ3VybCcsXG4gICAgJ3NraWxsJywgLy8gU2tpbGxUb29sXG4gIF0pIHtcbiAgICBjb25zdCB2ID0gb1trXVxuICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHBhcnRzLnB1c2godilcbiAgfVxuICAvLyBhcmdzW10gKFRtdXgvVHVuZ3N0ZW5Ub29sKSwgZmlsZXNbXSAoU2VuZFVzZXJGaWxlKSBcdTIwMTQgdG9vbC11c2VcbiAgLy8gcmVuZGVycyB0aGUgam9pbmVkIGFycmF5IGFzIHRoZSBwcmltYXJ5IGRpc3BsYXkuIFVuZGVyLWNvdW50ID4gc2tpcC5cbiAgZm9yIChjb25zdCBrIG9mIFsnYXJncycsICdmaWxlcyddKSB7XG4gICAgY29uc3QgdiA9IG9ba11cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSAmJiB2LmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnKSkge1xuICAgICAgcGFydHMucHVzaCgodiBhcyBzdHJpbmdbXSkuam9pbignICcpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignXFxuJylcbn1cblxuLyoqIER1Y2stdHlwZSB0aGUgdG9vbCdzIG5hdGl2ZSBPdXQgZm9yIHNlYXJjaGFibGUgdGV4dC4gS25vd24gc2hhcGVzOlxuICogIHtzdGRvdXQsc3RkZXJyfSAoQmFzaC9TaGVsbCksIHtjb250ZW50fSAoR3JlcCksIHtmaWxlOntjb250ZW50fX0gKFJlYWQpLFxuICogIHtmaWxlbmFtZXM6W119IChHcmVwL0dsb2IpLCB7b3V0cHV0fSAoZ2VuZXJpYykuIEZhbGxzIGJhY2sgdG8gY29uY2F0aW5nXG4gKiAgYWxsIHRvcC1sZXZlbCBzdHJpbmcgZmllbGRzIFx1MjAxNCBjcnVkZSBidXQgYmV0dGVyIHRoYW4gaW5kZXhpbmcgbW9kZWwtY2hhdHRlci5cbiAqICBFbXB0eSBmb3IgdW5rbm93biBzaGFwZXM6IHVuZGVyLWNvdW50ID4gcGhhbnRvbS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b29sUmVzdWx0U2VhcmNoVGV4dChyOiB1bmtub3duKTogc3RyaW5nIHtcbiAgaWYgKCFyIHx8IHR5cGVvZiByICE9PSAnb2JqZWN0JykgcmV0dXJuIHR5cGVvZiByID09PSAnc3RyaW5nJyA/IHIgOiAnJ1xuICBjb25zdCBvID0gciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAvLyBLbm93biBzaGFwZXMgZmlyc3QgKGNvbW1vbiB0b29scykuXG4gIGlmICh0eXBlb2Ygby5zdGRvdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZXJyID0gdHlwZW9mIG8uc3RkZXJyID09PSAnc3RyaW5nJyA/IG8uc3RkZXJyIDogJydcbiAgICByZXR1cm4gby5zdGRvdXQgKyAoZXJyID8gJ1xcbicgKyBlcnIgOiAnJylcbiAgfVxuICBpZiAoXG4gICAgby5maWxlICYmXG4gICAgdHlwZW9mIG8uZmlsZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgKG8uZmlsZSBhcyB7IGNvbnRlbnQ/OiB1bmtub3duIH0pLmNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiAoby5maWxlIGFzIHsgY29udGVudDogc3RyaW5nIH0pLmNvbnRlbnRcbiAgfVxuICAvLyBLbm93biBvdXRwdXQtZmllbGQgbmFtZXMgb25seS4gQSBibGluZCB3YWxrIHdvdWxkIGluZGV4IG1ldGFkYXRhXG4gIC8vIHRoZSBVSSBkb2Vzbid0IHNob3cgKHJhd091dHB1dFBhdGgsIGJhY2tncm91bmRUYXNrSWQsIGZpbGVQYXRoLFxuICAvLyBkdXJhdGlvbk1zLWFzLXN0cmluZykuIEFsbG93bGlzdCB0aGUgZmllbGRzIHRvb2xzIGFjdHVhbGx5IHJlbmRlci5cbiAgLy8gVG9vbHMgbm90IG1hdGNoaW5nIGFueSBzaGFwZSBpbmRleCBlbXB0eSBcdTIwMTQgYWRkIHRoZW0gaGVyZSBhcyBmb3VuZC5cbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBrIG9mIFsnY29udGVudCcsICdvdXRwdXQnLCAncmVzdWx0JywgJ3RleHQnLCAnbWVzc2FnZSddKSB7XG4gICAgY29uc3QgdiA9IG9ba11cbiAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKSBwYXJ0cy5wdXNoKHYpXG4gIH1cbiAgZm9yIChjb25zdCBrIG9mIFsnZmlsZW5hbWVzJywgJ2xpbmVzJywgJ3Jlc3VsdHMnXSkge1xuICAgIGNvbnN0IHYgPSBvW2tdXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikgJiYgdi5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHtcbiAgICAgIHBhcnRzLnB1c2goKHYgYXMgc3RyaW5nW10pLmpvaW4oJ1xcbicpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignXFxuJylcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxuZXhwb3J0IHR5cGUgQ2xhd2RQb3NlID1cbiAgfCAnZGVmYXVsdCdcbiAgfCAnYXJtcy11cCdcbiAgfCAnbG9vay1sZWZ0J1xuICB8ICdsb29rLXJpZ2h0J1xuXG50eXBlIFByb3BzID0ge1xuICBwb3NlPzogQ2xhd2RQb3NlXG59XG5cbnR5cGUgQ2F0UG9zZSA9IHtcbiAgdG9wOiBzdHJpbmdcbiAgZmFjZTogc3RyaW5nXG4gIGNoaW46IHN0cmluZ1xufVxuXG5jb25zdCBDQVRfUE9TRVM6IFJlY29yZDxDbGF3ZFBvc2UsIENhdFBvc2U+ID0ge1xuICBkZWZhdWx0OiB7XG4gICAgdG9wOiAnIC9eXl5eXlxcXFxcXFxcICcsXG4gICAgZmFjZTogJyggIG8gbyAgKScsXG4gICAgY2hpbjogJyAvICBeICBcXFxcXFxcXCAnLFxuICB9LFxuICAnbG9vay1sZWZ0Jzoge1xuICAgIHRvcDogJyAvXl5eXl5cXFxcXFxcXCAnLFxuICAgIGZhY2U6ICcoIG8gbyAgICknLFxuICAgIGNoaW46ICcgLyAgXiAgXFxcXFxcXFwgJyxcbiAgfSxcbiAgJ2xvb2stcmlnaHQnOiB7XG4gICAgdG9wOiAnIC9eXl5eXlxcXFxcXFxcICcsXG4gICAgZmFjZTogJyggICBvIG8gKScsXG4gICAgY2hpbjogJyAvICBeICBcXFxcXFxcXCAnLFxuICB9LFxuICAnYXJtcy11cCc6IHtcbiAgICB0b3A6ICcgL15efl5eXFxcXFxcXFwgJyxcbiAgICBmYWNlOiAnKCAgbyBvICApJyxcbiAgICBjaGluOiAnIC8gXFxcXF8vIFxcXFxcXFxcICcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDbGF3ZCh7IHBvc2UgPSAnZGVmYXVsdCcgfTogUHJvcHMgPSB7fSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGNhdFBvc2UgPSBDQVRfUE9TRVNbcG9zZV1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCI+e2NhdFBvc2UudG9wfTwvVGV4dD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPntjYXRQb3NlLmZhY2V9PC9UZXh0PlxuICAgICAgPFRleHQ+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPntjYXRQb3NlLmNoaW59PC9UZXh0PlxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uLy4uL2luay9zdHJpbmdXaWR0aC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG5leHBvcnQgdHlwZSBGZWVkTGluZSA9IHtcbiAgdGV4dDogc3RyaW5nXG4gIHRpbWVzdGFtcD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBGZWVkQ29uZmlnID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIGxpbmVzOiBGZWVkTGluZVtdXG4gIGZvb3Rlcj86IHN0cmluZ1xuICBlbXB0eU1lc3NhZ2U/OiBzdHJpbmdcbiAgY3VzdG9tQ29udGVudD86IHsgY29udGVudDogUmVhY3QuUmVhY3ROb2RlOyB3aWR0aDogbnVtYmVyIH1cbn1cblxudHlwZSBGZWVkUHJvcHMgPSB7XG4gIGNvbmZpZzogRmVlZENvbmZpZ1xuICBhY3R1YWxXaWR0aDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGZWVkV2lkdGgoY29uZmlnOiBGZWVkQ29uZmlnKTogbnVtYmVyIHtcbiAgY29uc3QgeyB0aXRsZSwgbGluZXMsIGZvb3RlciwgZW1wdHlNZXNzYWdlLCBjdXN0b21Db250ZW50IH0gPSBjb25maWdcblxuICBsZXQgbWF4V2lkdGggPSBzdHJpbmdXaWR0aCh0aXRsZSlcblxuICBpZiAoY3VzdG9tQ29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgY3VzdG9tQ29udGVudC53aWR0aClcbiAgfSBlbHNlIGlmIChsaW5lcy5sZW5ndGggPT09IDAgJiYgZW1wdHlNZXNzYWdlKSB7XG4gICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgc3RyaW5nV2lkdGgoZW1wdHlNZXNzYWdlKSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBnYXAgPSAnICAnXG4gICAgY29uc3QgbWF4VGltZXN0YW1wV2lkdGggPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICAuLi5saW5lcy5tYXAobGluZSA9PiAobGluZS50aW1lc3RhbXAgPyBzdHJpbmdXaWR0aChsaW5lLnRpbWVzdGFtcCkgOiAwKSksXG4gICAgKVxuXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXBXaWR0aCA9IG1heFRpbWVzdGFtcFdpZHRoID4gMCA/IG1heFRpbWVzdGFtcFdpZHRoIDogMFxuICAgICAgY29uc3QgbGluZVdpZHRoID1cbiAgICAgICAgc3RyaW5nV2lkdGgobGluZS50ZXh0KSArXG4gICAgICAgICh0aW1lc3RhbXBXaWR0aCA+IDAgPyB0aW1lc3RhbXBXaWR0aCArIGdhcC5sZW5ndGggOiAwKVxuICAgICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgbGluZVdpZHRoKVxuICAgIH1cbiAgfVxuXG4gIGlmIChmb290ZXIpIHtcbiAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBzdHJpbmdXaWR0aChmb290ZXIpKVxuICB9XG5cbiAgcmV0dXJuIG1heFdpZHRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWVkKHsgY29uZmlnLCBhY3R1YWxXaWR0aCB9OiBGZWVkUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IHRpdGxlLCBsaW5lcywgZm9vdGVyLCBlbXB0eU1lc3NhZ2UsIGN1c3RvbUNvbnRlbnQgfSA9IGNvbmZpZ1xuXG4gIGNvbnN0IGdhcCA9ICcgICdcbiAgY29uc3QgbWF4VGltZXN0YW1wV2lkdGggPSBNYXRoLm1heChcbiAgICAwLFxuICAgIC4uLmxpbmVzLm1hcChsaW5lID0+IChsaW5lLnRpbWVzdGFtcCA/IHN0cmluZ1dpZHRoKGxpbmUudGltZXN0YW1wKSA6IDApKSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9e2FjdHVhbFdpZHRofT5cbiAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJjbGF1ZGVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UZXh0PlxuICAgICAge2N1c3RvbUNvbnRlbnQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2N1c3RvbUNvbnRlbnQuY29udGVudH1cbiAgICAgICAgICB7Zm9vdGVyICYmIChcbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgICAge3RydW5jYXRlKGZvb3RlciwgYWN0dWFsV2lkdGgpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGxpbmVzLmxlbmd0aCA9PT0gMCAmJiBlbXB0eU1lc3NhZ2UgPyAoXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPnt0cnVuY2F0ZShlbXB0eU1lc3NhZ2UsIGFjdHVhbFdpZHRoKX08L1RleHQ+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtsaW5lcy5tYXAoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgIGFjdHVhbFdpZHRoIC1cbiAgICAgICAgICAgICAgICAobWF4VGltZXN0YW1wV2lkdGggPiAwID8gbWF4VGltZXN0YW1wV2lkdGggKyBnYXAubGVuZ3RoIDogMCksXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZXh0IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHttYXhUaW1lc3RhbXBXaWR0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgeyhsaW5lLnRpbWVzdGFtcCB8fCAnJykucGFkRW5kKG1heFRpbWVzdGFtcFdpZHRoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7Z2FwfVxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VGV4dD57dHJ1bmNhdGUobGluZS50ZXh0LCB0ZXh0V2lkdGgpfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHtmb290ZXIgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICB7dHJ1bmNhdGUoZm9vdGVyLCBhY3R1YWxXaWR0aCl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaXZpZGVyLmpzJ1xuaW1wb3J0IHR5cGUgeyBGZWVkQ29uZmlnIH0gZnJvbSAnLi9GZWVkLmpzJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRmVlZFdpZHRoLCBGZWVkIH0gZnJvbSAnLi9GZWVkLmpzJ1xuXG50eXBlIEZlZWRDb2x1bW5Qcm9wcyA9IHtcbiAgZmVlZHM6IEZlZWRDb25maWdbXVxuICBtYXhXaWR0aDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWVkQ29sdW1uKHtcbiAgZmVlZHMsXG4gIG1heFdpZHRoLFxufTogRmVlZENvbHVtblByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZmVlZFdpZHRocyA9IGZlZWRzLm1hcChmZWVkID0+IGNhbGN1bGF0ZUZlZWRXaWR0aChmZWVkKSlcbiAgY29uc3QgbWF4T2ZBbGxGZWVkcyA9IE1hdGgubWF4KC4uLmZlZWRXaWR0aHMpXG4gIGNvbnN0IGFjdHVhbFdpZHRoID0gTWF0aC5taW4obWF4T2ZBbGxGZWVkcywgbWF4V2lkdGgpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIHtmZWVkcy5tYXAoKGZlZWQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8RmVlZCBjb25maWc9e2ZlZWR9IGFjdHVhbFdpZHRoPXthY3R1YWxXaWR0aH0gLz5cbiAgICAgICAgICB7aW5kZXggPCBmZWVkcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgIDxEaXZpZGVyIGNvbG9yPVwiY2xhdWRlXCIgd2lkdGg9e2FjdHVhbFdpZHRofSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgU3RlcCB9IGZyb20gJy4uLy4uL3Byb2plY3RPbmJvYXJkaW5nU3RhdGUuanMnXG5pbXBvcnQge1xuICBmb3JtYXRDcmVkaXRBbW91bnQsXG4gIGdldENhY2hlZFJlZmVycmVyUmV3YXJkLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvcmVmZXJyYWwuanMnXG5pbXBvcnQgdHlwZSB7IExvZ09wdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2xvZ3MuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi8uLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZVRpbWVBZ28gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgdHlwZSB7IEZlZWRDb25maWcsIEZlZWRMaW5lIH0gZnJvbSAnLi9GZWVkLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVjZW50QWN0aXZpdHlGZWVkKGFjdGl2aXRpZXM6IExvZ09wdGlvbltdKTogRmVlZENvbmZpZyB7XG4gIGNvbnN0IGxpbmVzOiBGZWVkTGluZVtdID0gYWN0aXZpdGllcy5tYXAobG9nID0+IHtcbiAgICBjb25zdCB0aW1lID0gZm9ybWF0UmVsYXRpdmVUaW1lQWdvKGxvZy5tb2RpZmllZClcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9XG4gICAgICBsb2cuc3VtbWFyeSAmJiBsb2cuc3VtbWFyeSAhPT0gJ05vIHByb21wdCcgPyBsb2cuc3VtbWFyeSA6IGxvZy5maXJzdFByb21wdFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdGltZXN0YW1wOiB0aW1lLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVjZW50IGFjdGl2aXR5JyxcbiAgICBsaW5lcyxcbiAgICBmb290ZXI6IGxpbmVzLmxlbmd0aCA+IDAgPyAnL3Jlc3VtZSBmb3IgbW9yZScgOiB1bmRlZmluZWQsXG4gICAgZW1wdHlNZXNzYWdlOiAnTm8gcmVjZW50IGFjdGl2aXR5JyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2hhdHNOZXdGZWVkKHJlbGVhc2VOb3Rlczogc3RyaW5nW10pOiBGZWVkQ29uZmlnIHtcbiAgY29uc3QgbGluZXM6IEZlZWRMaW5lW10gPSByZWxlYXNlTm90ZXMubWFwKG5vdGUgPT4ge1xuICAgIGlmIChcImV4dGVybmFsXCIgPT09ICdhbnQnKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IG5vdGUubWF0Y2goL14oXFxkK1xccytcXHcrXFxzK2FnbylcXHMrKC4rKSQvKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGltZXN0YW1wOiBtYXRjaFsxXSxcbiAgICAgICAgICB0ZXh0OiBtYXRjaFsyXSB8fCAnJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbm90ZSxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgZW1wdHlNZXNzYWdlID1cbiAgICBcImV4dGVybmFsXCIgPT09ICdhbnQnXG4gICAgICA/ICdVbmFibGUgdG8gZmV0Y2ggbGF0ZXN0IGNsYXVkZS1jbGktaW50ZXJuYWwgY29tbWl0cydcbiAgICAgIDogJ0NoZWNrIHRoZSBDbGF1ZGUgQ29kZSBjaGFuZ2Vsb2cgZm9yIHVwZGF0ZXMnXG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTpcbiAgICAgIFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCdcbiAgICAgICAgPyBcIldoYXQncyBuZXcgW0FOVC1PTkxZOiBMYXRlc3QgQ0MgY29tbWl0c11cIlxuICAgICAgICA6IFwiV2hhdCdzIG5ld1wiLFxuICAgIGxpbmVzLFxuICAgIGZvb3RlcjogbGluZXMubGVuZ3RoID4gMCA/ICcvcmVsZWFzZS1ub3RlcyBmb3IgbW9yZScgOiB1bmRlZmluZWQsXG4gICAgZW1wdHlNZXNzYWdlLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0T25ib2FyZGluZ0ZlZWQoc3RlcHM6IFN0ZXBbXSk6IEZlZWRDb25maWcge1xuICBjb25zdCBlbmFibGVkU3RlcHMgPSBzdGVwc1xuICAgIC5maWx0ZXIoKHsgaXNFbmFibGVkIH0pID0+IGlzRW5hYmxlZClcbiAgICAuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEuaXNDb21wbGV0ZSkgLSBOdW1iZXIoYi5pc0NvbXBsZXRlKSlcblxuICBjb25zdCBsaW5lczogRmVlZExpbmVbXSA9IGVuYWJsZWRTdGVwcy5tYXAoKHsgdGV4dCwgaXNDb21wbGV0ZSB9KSA9PiB7XG4gICAgY29uc3QgY2hlY2ttYXJrID0gaXNDb21wbGV0ZSA/IGAke2ZpZ3VyZXMudGlja30gYCA6ICcnXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGAke2NoZWNrbWFya30ke3RleHR9YCxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgd2FybmluZ1RleHQgPVxuICAgIGdldEN3ZCgpID09PSBob21lZGlyKClcbiAgICAgID8gJ05vdGU6IFlvdSBoYXZlIGxhdW5jaGVkIGNsYXVkZSBpbiB5b3VyIGhvbWUgZGlyZWN0b3J5LiBGb3IgdGhlIGJlc3QgZXhwZXJpZW5jZSwgbGF1bmNoIGl0IGluIGEgcHJvamVjdCBkaXJlY3RvcnkgaW5zdGVhZC4nXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIGlmICh3YXJuaW5nVGV4dCkge1xuICAgIGxpbmVzLnB1c2goe1xuICAgICAgdGV4dDogd2FybmluZ1RleHQsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdUaXBzIGZvciBnZXR0aW5nIHN0YXJ0ZWQnLFxuICAgIGxpbmVzLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHdWVzdFBhc3Nlc0ZlZWQoKTogRmVlZENvbmZpZyB7XG4gIGNvbnN0IHJld2FyZCA9IGdldENhY2hlZFJlZmVycmVyUmV3YXJkKClcbiAgY29uc3Qgc3VidGl0bGUgPSByZXdhcmRcbiAgICA/IGBTaGFyZSBDbGF1ZGUgQ29kZSBhbmQgZWFybiAke2Zvcm1hdENyZWRpdEFtb3VudChyZXdhcmQpfSBvZiBleHRyYSB1c2FnZWBcbiAgICA6ICdTaGFyZSBDbGF1ZGUgQ29kZSB3aXRoIGZyaWVuZHMnXG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICczIGd1ZXN0IHBhc3NlcycsXG4gICAgbGluZXM6IFtdLFxuICAgIGN1c3RvbUNvbnRlbnQ6IHtcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IG1hcmdpblk9ezF9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj5b4py7XSBb4py7XSBb4py7XTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c3VidGl0bGV9PC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgICB3aWR0aDogNDgsXG4gICAgfSxcbiAgICBmb290ZXI6ICcvcGFzc2VzJyxcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IENsYXdkLCB0eXBlIENsYXdkUG9zZSB9IGZyb20gJy4vQ2xhd2QuanMnXG5cbnR5cGUgRnJhbWUgPSB7IHBvc2U6IENsYXdkUG9zZTsgb2Zmc2V0OiBudW1iZXIgfVxuXG4vKiogSG9sZCBhIHBvc2UgZm9yIG4gZnJhbWVzICg2MG1zIGVhY2gpLiAqL1xuZnVuY3Rpb24gaG9sZChwb3NlOiBDbGF3ZFBvc2UsIG9mZnNldDogbnVtYmVyLCBmcmFtZXM6IG51bWJlcik6IEZyYW1lW10ge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogZnJhbWVzIH0sICgpID0+ICh7IHBvc2UsIG9mZnNldCB9KSlcbn1cblxuLy8gT2Zmc2V0IHNlbWFudGljczogbWFyZ2luVG9wIGluIGEgZml4ZWQtaGVpZ2h0LTMgY29udGFpbmVyLiAwID0gbm9ybWFsLFxuLy8gMSA9IGNyb3VjaGVkLiBDb250YWluZXIgaGVpZ2h0IHN0YXlzIDMgc28gdGhlIGxheW91dCBuZXZlciBzaGlmdHM7IGR1cmluZ1xuLy8gYSBjcm91Y2ggKG9mZnNldD0xKSBDbGF3ZCdzIGZlZXQgcm93IGRpcHMgYmVsb3cgdGhlIGNvbnRhaW5lciBhbmQgZ2V0c1xuLy8gY2xpcHBlZCDigJQgcmVhZHMgYXMgXCJkdWNraW5nIGJlbG93IHRoZSBmcmFtZVwiIGJlZm9yZSBzcHJpbmdpbmcgYmFjayB1cC5cblxuLy8gQ2xpY2sgYW5pbWF0aW9uOiBjcm91Y2gsIHRoZW4gc3ByaW5nIHVwIHdpdGggYm90aCBhcm1zIHJhaXNlZC4gVHdpY2UuXG5jb25zdCBKVU1QX1dBVkU6IHJlYWRvbmx5IEZyYW1lW10gPSBbXG4gIC4uLmhvbGQoJ2RlZmF1bHQnLCAxLCAyKSwgLy8gY3JvdWNoXG4gIC4uLmhvbGQoJ2FybXMtdXAnLCAwLCAzKSwgLy8gc3ByaW5nIVxuICAuLi5ob2xkKCdkZWZhdWx0JywgMCwgMSksXG4gIC4uLmhvbGQoJ2RlZmF1bHQnLCAxLCAyKSwgLy8gY3JvdWNoIGFnYWluXG4gIC4uLmhvbGQoJ2FybXMtdXAnLCAwLCAzKSwgLy8gc3ByaW5nIVxuICAuLi5ob2xkKCdkZWZhdWx0JywgMCwgMSksXG5dXG5cbi8vIENsaWNrIGFuaW1hdGlvbjogZ2xhbmNlIHJpZ2h0LCB0aGVuIGxlZnQsIHRoZW4gYmFjay5cbmNvbnN0IExPT0tfQVJPVU5EOiByZWFkb25seSBGcmFtZVtdID0gW1xuICAuLi5ob2xkKCdsb29rLXJpZ2h0JywgMCwgNSksXG4gIC4uLmhvbGQoJ2xvb2stbGVmdCcsIDAsIDUpLFxuICAuLi5ob2xkKCdkZWZhdWx0JywgMCwgMSksXG5dXG5cbmNvbnN0IENMSUNLX0FOSU1BVElPTlM6IHJlYWRvbmx5IChyZWFkb25seSBGcmFtZVtdKVtdID0gW0pVTVBfV0FWRSwgTE9PS19BUk9VTkRdXG5cbmNvbnN0IElETEU6IEZyYW1lID0geyBwb3NlOiAnZGVmYXVsdCcsIG9mZnNldDogMCB9XG5jb25zdCBGUkFNRV9NUyA9IDYwXG5jb25zdCBpbmNyZW1lbnRGcmFtZSA9IChpOiBudW1iZXIpID0+IGkgKyAxXG5jb25zdCBDTEFXRF9IRUlHSFQgPSAzXG5cbi8qKlxuICogQ2xhd2Qgd2l0aCBjbGljay10cmlnZ2VyZWQgYW5pbWF0aW9ucyAoY3JvdWNoLWp1bXAgd2l0aCBhcm1zIHVwLCBvclxuICogbG9vay1hcm91bmQpLiBDb250YWluZXIgaGVpZ2h0IGlzIGZpeGVkIGF0IENMQVdEX0hFSUdIVCDigJQgc2FtZSBmb290cHJpbnRcbiAqIGFzIGEgYmFyZSBgPENsYXdkIC8+YCDigJQgc28gdGhlIHN1cnJvdW5kaW5nIGxheW91dCBuZXZlciBzaGlmdHMuIER1cmluZyBhXG4gKiBjcm91Y2ggb25seSB0aGUgZmVldCByb3cgY2xpcHMgKHNlZSBjb21tZW50IGFib3ZlKS4gQ2xpY2sgb25seSBmaXJlcyB3aGVuXG4gKiBtb3VzZSB0cmFja2luZyBpcyBlbmFibGVkIChpLmUuIGluc2lkZSBgPEFsdGVybmF0ZVNjcmVlbj5gIC8gZnVsbHNjcmVlbik7XG4gKiBlbHNld2hlcmUgdGhpcyByZW5kZXJzIGFuZCBiZWhhdmVzIGlkZW50aWNhbGx5IHRvIHBsYWluIGA8Q2xhd2QgLz5gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQW5pbWF0ZWRDbGF3ZCgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IHBvc2UsIGJvdW5jZU9mZnNldCwgb25DbGljayB9ID0gdXNlQ2xhd2RBbmltYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxCb3ggaGVpZ2h0PXtDTEFXRF9IRUlHSFR9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxCb3ggbWFyZ2luVG9wPXtib3VuY2VPZmZzZXR9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICA8Q2xhd2QgcG9zZT17cG9zZX0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIHVzZUNsYXdkQW5pbWF0aW9uKCk6IHtcbiAgcG9zZTogQ2xhd2RQb3NlXG4gIGJvdW5jZU9mZnNldDogbnVtYmVyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn0ge1xuICAvLyBSZWFkIG9uY2UgYXQgbW91bnQg4oCUIG5vIHVzZVNldHRpbmdzKCkgc3Vic2NyaXB0aW9uLCBzaW5jZSB0aGF0IHdvdWxkXG4gIC8vIHJlLXJlbmRlciBvbiBhbnkgc2V0dGluZ3MgY2hhbmdlLlxuICBjb25zdCBbcmVkdWNlZE1vdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBnZXRJbml0aWFsU2V0dGluZ3MoKS5wcmVmZXJzUmVkdWNlZE1vdGlvbiA/PyBmYWxzZSxcbiAgKVxuICBjb25zdCBbZnJhbWVJbmRleCwgc2V0RnJhbWVJbmRleF0gPSB1c2VTdGF0ZSgtMSlcbiAgY29uc3Qgc2VxdWVuY2VSZWYgPSB1c2VSZWY8cmVhZG9ubHkgRnJhbWVbXT4oSlVNUF9XQVZFKVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHJlZHVjZWRNb3Rpb24gfHwgZnJhbWVJbmRleCAhPT0gLTEpIHJldHVyblxuICAgIHNlcXVlbmNlUmVmLmN1cnJlbnQgPVxuICAgICAgQ0xJQ0tfQU5JTUFUSU9OU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDTElDS19BTklNQVRJT05TLmxlbmd0aCldIVxuICAgIHNldEZyYW1lSW5kZXgoMClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZyYW1lSW5kZXggPT09IC0xKSByZXR1cm5cbiAgICBpZiAoZnJhbWVJbmRleCA+PSBzZXF1ZW5jZVJlZi5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgc2V0RnJhbWVJbmRleCgtMSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoc2V0RnJhbWVJbmRleCwgRlJBTUVfTVMsIGluY3JlbWVudEZyYW1lKVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtmcmFtZUluZGV4XSlcblxuICBjb25zdCBzZXEgPSBzZXF1ZW5jZVJlZi5jdXJyZW50XG4gIGNvbnN0IGN1cnJlbnQgPVxuICAgIGZyYW1lSW5kZXggPj0gMCAmJiBmcmFtZUluZGV4IDwgc2VxLmxlbmd0aCA/IHNlcVtmcmFtZUluZGV4XSEgOiBJRExFXG4gIHJldHVybiB7IHBvc2U6IGN1cnJlbnQucG9zZSwgYm91bmNlT2Zmc2V0OiBjdXJyZW50Lm9mZnNldCwgb25DbGljayB9XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tDYWNoZWRQYXNzZXNFbGlnaWJpbGl0eSxcbiAgZm9ybWF0Q3JlZGl0QW1vdW50LFxuICBnZXRDYWNoZWRSZWZlcnJlclJld2FyZCxcbiAgZ2V0Q2FjaGVkUmVtYWluaW5nUGFzc2VzLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvcmVmZXJyYWwuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5cbmZ1bmN0aW9uIHJlc2V0SWZQYXNzZXNSZWZyZXNoZWQoKTogdm9pZCB7XG4gIGNvbnN0IHJlbWFpbmluZyA9IGdldENhY2hlZFJlbWFpbmluZ1Bhc3NlcygpXG4gIGlmIChyZW1haW5pbmcgPT0gbnVsbCB8fCByZW1haW5pbmcgPD0gMCkgcmV0dXJuXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGNvbnN0IGxhc3RTZWVuID0gY29uZmlnLnBhc3Nlc0xhc3RTZWVuUmVtYWluaW5nID8/IDBcbiAgaWYgKHJlbWFpbmluZyA+IGxhc3RTZWVuKSB7XG4gICAgc2F2ZUdsb2JhbENvbmZpZyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgcGFzc2VzVXBzZWxsU2VlbkNvdW50OiAwLFxuICAgICAgaGFzVmlzaXRlZFBhc3NlczogZmFsc2UsXG4gICAgICBwYXNzZXNMYXN0U2VlblJlbWFpbmluZzogcmVtYWluaW5nLFxuICAgIH0pKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNob3dHdWVzdFBhc3Nlc1Vwc2VsbCgpOiBib29sZWFuIHtcbiAgY29uc3QgeyBlbGlnaWJsZSwgaGFzQ2FjaGUgfSA9IGNoZWNrQ2FjaGVkUGFzc2VzRWxpZ2liaWxpdHkoKVxuICAvLyBPbmx5IHNob3cgaWYgZWxpZ2libGUgYW5kIGNhY2hlIGV4aXN0cyAoZG9uJ3QgYmxvY2sgb24gZmV0Y2gpXG4gIGlmICghZWxpZ2libGUgfHwgIWhhc0NhY2hlKSByZXR1cm4gZmFsc2VcbiAgLy8gUmVzZXQgdXBzZWxsIGNvdW50ZXJzIGlmIHBhc3NlcyB3ZXJlIHJlZnJlc2hlZCAoY292ZXJzIGJvdGggY2FtcGFpZ24gY2hhbmdlIGFuZCBwYXNzIHJlZnJlc2gpXG4gIHJlc2V0SWZQYXNzZXNSZWZyZXNoZWQoKVxuXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGlmICgoY29uZmlnLnBhc3Nlc1Vwc2VsbFNlZW5Db3VudCA/PyAwKSA+PSAzKSByZXR1cm4gZmFsc2VcbiAgaWYgKGNvbmZpZy5oYXNWaXNpdGVkUGFzc2VzKSByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsKCk6IGJvb2xlYW4ge1xuICBjb25zdCBbc2hvd10gPSB1c2VTdGF0ZSgoKSA9PiBzaG91bGRTaG93R3Vlc3RQYXNzZXNVcHNlbGwoKSlcbiAgcmV0dXJuIHNob3dcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudEd1ZXN0UGFzc2VzU2VlbkNvdW50KCk6IHZvaWQge1xuICBsZXQgbmV3Q291bnQgPSAwXG4gIHNhdmVHbG9iYWxDb25maWcocHJldiA9PiB7XG4gICAgbmV3Q291bnQgPSAocHJldi5wYXNzZXNVcHNlbGxTZWVuQ291bnQgPz8gMCkgKyAxXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwYXNzZXNVcHNlbGxTZWVuQ291bnQ6IG5ld0NvdW50LFxuICAgIH1cbiAgfSlcbiAgbG9nRXZlbnQoJ3Rlbmd1X2d1ZXN0X3Bhc3Nlc191cHNlbGxfc2hvd24nLCB7XG4gICAgc2Vlbl9jb3VudDogbmV3Q291bnQsXG4gIH0pXG59XG5cbi8vIENvbmRlbnNlZCBsYXlvdXQgZm9yIG1pbmkgd2VsY29tZSBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiBHdWVzdFBhc3Nlc1Vwc2VsbCgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCByZXdhcmQgPSBnZXRDYWNoZWRSZWZlcnJlclJld2FyZCgpXG4gIHJldHVybiAoXG4gICAgPFRleHQgZGltQ29sb3I+XG4gICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPlvinLtdPC9UZXh0PiA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPlvinLtdPC9UZXh0PnsnICd9XG4gICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPlvinLtdPC9UZXh0PiDCt3snICd9XG4gICAgICB7cmV3YXJkXG4gICAgICAgID8gYFNoYXJlIENsYXVkZSBDb2RlIGFuZCBlYXJuICR7Zm9ybWF0Q3JlZGl0QW1vdW50KHJld2FyZCl9IG9mIGV4dHJhIHVzYWdlIMK3IC9wYXNzZXNgXG4gICAgICAgIDogJzMgZ3Vlc3QgcGFzc2VzIGF0IC9wYXNzZXMnfVxuICAgIDwvVGV4dD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTWFpbkxvb3BNb2RlbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1haW5Mb29wTW9kZWwuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uLy4uL2luay9zdHJpbmdXaWR0aC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBnZXRFZmZvcnRTdWZmaXggfSBmcm9tICcuLi8uLi91dGlscy9lZmZvcnQuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlzRnVsbHNjcmVlbkVudkVuYWJsZWQgfSBmcm9tICcuLi8uLi91dGlscy9mdWxsc2NyZWVuLmpzJ1xuaW1wb3J0IHtcbiAgZm9ybWF0TW9kZWxBbmRCaWxsaW5nLFxuICBnZXRMb2dvRGlzcGxheURhdGEsXG4gIHRydW5jYXRlUGF0aCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nb1YyVXRpbHMuanMnXG5pbXBvcnQgeyByZW5kZXJNb2RlbFNldHRpbmcgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IE9mZnNjcmVlbkZyZWV6ZSB9IGZyb20gJy4uL09mZnNjcmVlbkZyZWV6ZS5qcydcbmltcG9ydCB7IEFuaW1hdGVkQ2xhd2QgfSBmcm9tICcuL0FuaW1hdGVkQ2xhd2QuanMnXG5pbXBvcnQgeyBDbGF3ZCB9IGZyb20gJy4vQ2xhd2QuanMnXG5pbXBvcnQge1xuICBHdWVzdFBhc3Nlc1Vwc2VsbCxcbiAgaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQsXG4gIHVzZVNob3dHdWVzdFBhc3Nlc1Vwc2VsbCxcbn0gZnJvbSAnLi9HdWVzdFBhc3Nlc1Vwc2VsbC5qcydcbmltcG9ydCB7XG4gIGluY3JlbWVudE92ZXJhZ2VDcmVkaXRVcHNlbGxTZWVuQ291bnQsXG4gIE92ZXJhZ2VDcmVkaXRVcHNlbGwsXG4gIHVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsLFxufSBmcm9tICcuL092ZXJhZ2VDcmVkaXRVcHNlbGwuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBDb25kZW5zZWRMb2dvKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgYWdlbnQgPSB1c2VBcHBTdGF0ZShzID0+IHMuYWdlbnQpXG4gIGNvbnN0IGVmZm9ydFZhbHVlID0gdXNlQXBwU3RhdGUocyA9PiBzLmVmZm9ydFZhbHVlKVxuICBjb25zdCBtb2RlbCA9IHVzZU1haW5Mb29wTW9kZWwoKVxuICBjb25zdCBtb2RlbERpc3BsYXlOYW1lID0gcmVuZGVyTW9kZWxTZXR0aW5nKG1vZGVsKVxuICBjb25zdCB7IHZlcnNpb24sIGN3ZCwgYmlsbGluZ1R5cGUsIGFnZW50TmFtZTogYWdlbnROYW1lRnJvbVNldHRpbmdzIH0gPSBnZXRMb2dvRGlzcGxheURhdGEoKVxuXG4gIC8vIFByZWZlciBBcHBTdGF0ZS5hZ2VudCAoc2V0IGZyb20gLS1hZ2VudCBDTEkgZmxhZykgb3ZlciBzZXR0aW5nc1xuICBjb25zdCBhZ2VudE5hbWUgPSBhZ2VudCA/PyBhZ2VudE5hbWVGcm9tU2V0dGluZ3NcbiAgY29uc3Qgc2hvd0d1ZXN0UGFzc2VzVXBzZWxsID0gdXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsKClcbiAgY29uc3Qgc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwgPSB1c2VTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvd0d1ZXN0UGFzc2VzVXBzZWxsKSB7XG4gICAgICBpbmNyZW1lbnRHdWVzdFBhc3Nlc1NlZW5Db3VudCgpXG4gICAgfVxuICB9LCBbc2hvd0d1ZXN0UGFzc2VzVXBzZWxsXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCAmJiAhc2hvd0d1ZXN0UGFzc2VzVXBzZWxsKSB7XG4gICAgICBpbmNyZW1lbnRPdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50KClcbiAgICB9XG4gIH0sIFtzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCwgc2hvd0d1ZXN0UGFzc2VzVXBzZWxsXSlcblxuICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHdpZHRoIGZvciB0ZXh0IGNvbnRlbnRcbiAgLy8gQWNjb3VudCBmb3I6IGNvbmRlbnNlZCBjbGF3ZCB3aWR0aCAoMTEgY2hhcnMpICsgZ2FwICgyKSArIHBhZGRpbmcgKDIpID0gMTUgY2hhcnNcbiAgY29uc3QgdGV4dFdpZHRoID0gTWF0aC5tYXgoY29sdW1ucyAtIDE1LCAyMClcblxuICAvLyBUcnVuY2F0ZSB2ZXJzaW9uIHRvIGZpdCB3aXRoaW4gYXZhaWxhYmxlIHdpZHRoLCBhY2NvdW50aW5nIGZvciBcIkNsYXVkZSBDb2RlIHZcIiBwcmVmaXhcbiAgY29uc3QgdmVyc2lvblByZWZpeCA9ICdDbGF1ZGUgQ29kZSB2J1xuICBjb25zdCB0cnVuY2F0ZWRWZXJzaW9uID0gdHJ1bmNhdGUoXG4gICAgdmVyc2lvbixcbiAgICBNYXRoLm1heCh0ZXh0V2lkdGggLSB2ZXJzaW9uUHJlZml4Lmxlbmd0aCwgNiksXG4gIClcblxuICBjb25zdCBlZmZvcnRTdWZmaXggPSBnZXRFZmZvcnRTdWZmaXgobW9kZWwsIGVmZm9ydFZhbHVlKVxuICBjb25zdCB7IHNob3VsZFNwbGl0LCB0cnVuY2F0ZWRNb2RlbCwgdHJ1bmNhdGVkQmlsbGluZyB9ID1cbiAgICBmb3JtYXRNb2RlbEFuZEJpbGxpbmcoXG4gICAgICBtb2RlbERpc3BsYXlOYW1lICsgZWZmb3J0U3VmZml4LFxuICAgICAgYmlsbGluZ1R5cGUsXG4gICAgICB0ZXh0V2lkdGgsXG4gICAgKVxuXG4gIC8vIFRydW5jYXRlIHBhdGgsIGFjY291bnRpbmcgZm9yIGFnZW50IG5hbWUgaWYgcHJlc2VudFxuICBjb25zdCBzZXBhcmF0b3IgPSAnIMK3ICdcbiAgY29uc3QgYXRQcmVmaXggPSAnQCdcbiAgY29uc3QgY3dkQXZhaWxhYmxlV2lkdGggPSBhZ2VudE5hbWVcbiAgICA/IHRleHRXaWR0aCAtIGF0UHJlZml4Lmxlbmd0aCAtIHN0cmluZ1dpZHRoKGFnZW50TmFtZSkgLSBzZXBhcmF0b3IubGVuZ3RoXG4gICAgOiB0ZXh0V2lkdGhcbiAgY29uc3QgdHJ1bmNhdGVkQ3dkID0gdHJ1bmNhdGVQYXRoKGN3ZCwgTWF0aC5tYXgoY3dkQXZhaWxhYmxlV2lkdGgsIDEwKSlcblxuICAvLyBPZmZzY3JlZW5GcmVlemU6IHRoZSBsb2dvIHNpdHMgYXQgdGhlIHRvcCBvZiB0aGUgbWVzc2FnZSBsaXN0IGFuZCBpcyB0aGVcbiAgLy8gZmlyc3QgdGhpbmcgdG8gZW50ZXIgc2Nyb2xsYmFjay4gdXNlTWFpbkxvb3BNb2RlbCgpIHN1YnNjcmliZXMgdG8gbW9kZWxcbiAgLy8gY2hhbmdlcyBhbmQgZ2V0TG9nb0Rpc3BsYXlEYXRhKCkgcmVhZHMgZ2V0Q3dkKCkvc3Vic2NyaXB0aW9uIHN0YXRlIOKAlCBhbnlcbiAgLy8gb2Ygd2hpY2ggY2hhbmdpbmcgd2hpbGUgaW4gc2Nyb2xsYmFjayB3b3VsZCBmb3JjZSBhIGZ1bGwgdGVybWluYWwgcmVzZXQuXG4gIHJldHVybiAoXG4gICAgPE9mZnNjcmVlbkZyZWV6ZT5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAge2lzRnVsbHNjcmVlbkVudkVuYWJsZWQoKSA/IDxBbmltYXRlZENsYXdkIC8+IDogPENsYXdkIC8+fVxuXG4gICAgICB7LyogSW5mbyAqL31cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPkNsYXVkZSBDb2RlPC9UZXh0PnsnICd9XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+dnt0cnVuY2F0ZWRWZXJzaW9ufTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7c2hvdWxkU3BsaXQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnt0cnVuY2F0ZWRNb2RlbH08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57dHJ1bmNhdGVkQmlsbGluZ308L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7dHJ1bmNhdGVkTW9kZWx9IMK3IHt0cnVuY2F0ZWRCaWxsaW5nfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAge2FnZW50TmFtZSA/IGBAJHthZ2VudE5hbWV9IMK3ICR7dHJ1bmNhdGVkQ3dkfWAgOiB0cnVuY2F0ZWRDd2R9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3Nob3dHdWVzdFBhc3Nlc1Vwc2VsbCAmJiA8R3Vlc3RQYXNzZXNVcHNlbGwgLz59XG4gICAgICAgIHshc2hvd0d1ZXN0UGFzc2VzVXBzZWxsICYmIHNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsICYmIChcbiAgICAgICAgICA8T3ZlcmFnZUNyZWRpdFVwc2VsbCBtYXhXaWR0aD17dGV4dFdpZHRofSB0d29MaW5lIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvT2Zmc2NyZWVuRnJlZXplPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJ3NyYy9pbmsuanMnXG5pbXBvcnQgeyBnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICdzcmMvdXRpbHMvY29uZmlnLmpzJ1xuXG5jb25zdCBDT05GSUdfTkFNRSA9ICd0ZW5ndS10b3Atb2YtZmVlZC10aXAnXG5cbmV4cG9ydCBmdW5jdGlvbiBFbWVyZ2VuY3lUaXAoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgdGlwID0gdXNlTWVtbyhnZXRUaXBPZkZlZWQsIFtdKVxuICAvLyBNZW1vaXplIHRvIHByZXZlbnQgcmUtcmVhZHMgYWZ0ZXIgd2Ugc2F2ZSAtIHdlIHdhbnQgdGhlIHZhbHVlIGF0IG1vdW50IHRpbWVcbiAgY29uc3QgbGFzdFNob3duVGlwID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRHbG9iYWxDb25maWcoKS5sYXN0U2hvd25FbWVyZ2VuY3lUaXAsXG4gICAgW10sXG4gIClcblxuICAvLyBPbmx5IHNob3cgaWYgdGhpcyBpcyBhIG5ldy9kaWZmZXJlbnQgdGlwXG4gIGNvbnN0IHNob3VsZFNob3cgPSB0aXAudGlwICYmIHRpcC50aXAgIT09IGxhc3RTaG93blRpcFxuXG4gIC8vIFNhdmUgdGhlIHRpcCB3ZSdyZSBzaG93aW5nIHNvIHdlIGRvbid0IHNob3cgaXQgYWdhaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQubGFzdFNob3duRW1lcmdlbmN5VGlwID09PSB0aXAudGlwKSByZXR1cm4gY3VycmVudFxuICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50LCBsYXN0U2hvd25FbWVyZ2VuY3lUaXA6IHRpcC50aXAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtzaG91bGRTaG93LCB0aXAudGlwXSlcblxuICBpZiAoIXNob3VsZFNob3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dFxuICAgICAgICB7Li4uKHRpcC5jb2xvciA9PT0gJ3dhcm5pbmcnXG4gICAgICAgICAgPyB7IGNvbG9yOiAnd2FybmluZycgfVxuICAgICAgICAgIDogdGlwLmNvbG9yID09PSAnZXJyb3InXG4gICAgICAgICAgICA/IHsgY29sb3I6ICdlcnJvcicgfVxuICAgICAgICAgICAgOiB7IGRpbUNvbG9yOiB0cnVlIH0pfVxuICAgICAgPlxuICAgICAgICB7dGlwLnRpcH1cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIFRpcE9mRmVlZCA9IHtcbiAgdGlwOiBzdHJpbmdcbiAgY29sb3I/OiAnZGltJyB8ICd3YXJuaW5nJyB8ICdlcnJvcidcbn1cblxuY29uc3QgREVGQVVMVF9USVA6IFRpcE9mRmVlZCA9IHsgdGlwOiAnJywgY29sb3I6ICdkaW0nIH1cblxuLyoqXG4gKiBHZXQgdGhlIHRpcCBvZiB0aGUgZmVlZCBmcm9tIGR5bmFtaWMgY29uZmlnIHdpdGggY2FjaGluZ1xuICogUmV0dXJucyBjYWNoZWQgdmFsdWUgaW1tZWRpYXRlbHksIHVwZGF0ZXMgaW4gYmFja2dyb3VuZFxuICovXG5mdW5jdGlvbiBnZXRUaXBPZkZlZWQoKTogVGlwT2ZGZWVkIHtcbiAgcmV0dXJuIGdldER5bmFtaWNDb25maWdfQ0FDSEVEX01BWV9CRV9TVEFMRTxUaXBPZkZlZWQ+KFxuICAgIENPTkZJR19OQU1FLFxuICAgIERFRkFVTFRfVElQLFxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRFQVJEUk9QX0FTVEVSSVNLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZUFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0SW5pdGlhbFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBodWVUb1JnYiwgdG9SR0JDb2xvciB9IGZyb20gJy4uL1NwaW5uZXIvdXRpbHMuanMnXG5cbmNvbnN0IFNXRUVQX0RVUkFUSU9OX01TID0gMTUwMFxuY29uc3QgU1dFRVBfQ09VTlQgPSAyXG5jb25zdCBUT1RBTF9BTklNQVRJT05fTVMgPSBTV0VFUF9EVVJBVElPTl9NUyAqIFNXRUVQX0NPVU5UXG5jb25zdCBTRVRUTEVEX0dSRVkgPSB0b1JHQkNvbG9yKHsgcjogMTUzLCBnOiAxNTMsIGI6IDE1MyB9KVxuXG5leHBvcnQgZnVuY3Rpb24gQW5pbWF0ZWRBc3Rlcmlzayh7XG4gIGNoYXIgPSBURUFSRFJPUF9BU1RFUklTSyxcbn06IHtcbiAgY2hhcj86IHN0cmluZ1xufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIFJlYWQgcHJlZmVyc1JlZHVjZWRNb3Rpb24gb25jZSBhdCBtb3VudCDigJQgbm8gdXNlU2V0dGluZ3MoKSBzdWJzY3JpcHRpb24sXG4gIC8vIHNpbmNlIHRoYXQgd291bGQgcmUtcmVuZGVyIHdoZW5ldmVyIHNldHRpbmdzIGNoYW5nZS5cbiAgY29uc3QgW3JlZHVjZWRNb3Rpb25dID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gZ2V0SW5pdGlhbFNldHRpbmdzKCkucHJlZmVyc1JlZHVjZWRNb3Rpb24gPz8gZmFsc2UsXG4gIClcbiAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUocmVkdWNlZE1vdGlvbilcbiAgLy8gdXNlQW5pbWF0aW9uRnJhbWUncyBjbG9jayBpcyBzaGFyZWQg4oCUIGNhcHR1cmUgb3VyIHN0YXJ0IG9mZnNldCBzbyB0aGVcbiAgLy8gc3dlZXAgYWx3YXlzIGJlZ2lucyBhdCBodWUgMCByZWdhcmRsZXNzIG9mIHdoZW4gd2UgbW91bnQuXG4gIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKVxuICAvLyBXaXJlIHRoZSByZWYgc28gdXNlQW5pbWF0aW9uRnJhbWUncyB2aWV3cG9ydC1wYXVzZSBraWNrcyBpbjogaWYgdGhlXG4gIC8vIHVzZXIgc3VibWl0cyBhIG1lc3NhZ2UgYmVmb3JlIHRoZSBzd2VlcCBmaW5pc2hlcywgdGhlIGNsb2NrIHN0b3BzXG4gIC8vIGF1dG9tYXRpY2FsbHkgb25jZSB0aGlzIHJvdyBlbnRlcnMgc2Nyb2xsYmFjayAocHJldmVudHMgZmxpY2tlcikuXG4gIGNvbnN0IFtyZWYsIHRpbWVdID0gdXNlQW5pbWF0aW9uRnJhbWUoZG9uZSA/IG51bGwgOiA1MClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb25lKSByZXR1cm5cbiAgICBjb25zdCB0ID0gc2V0VGltZW91dChzZXREb25lLCBUT1RBTF9BTklNQVRJT05fTVMsIHRydWUpXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0KVxuICB9LCBbZG9uZV0pXG5cbiAgaWYgKGRvbmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCByZWY9e3JlZn0+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtTRVRUTEVEX0dSRVl9PntjaGFyfTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydFRpbWVSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gdGltZVxuICB9XG4gIGNvbnN0IGVsYXBzZWQgPSB0aW1lIC0gc3RhcnRUaW1lUmVmLmN1cnJlbnRcbiAgY29uc3QgaHVlID0gKChlbGFwc2VkIC8gU1dFRVBfRFVSQVRJT05fTVMpICogMzYwKSAlIDM2MFxuXG4gIHJldHVybiAoXG4gICAgPEJveCByZWY9e3JlZn0+XG4gICAgICA8VGV4dCBjb2xvcj17dG9SR0JDb2xvcihodWVUb1JnYihodWUpKX0+e2NoYXJ9PC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVUF9BUlJPVyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgaXNPcHVzMW1NZXJnZUVuYWJsZWQgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IEFuaW1hdGVkQXN0ZXJpc2sgfSBmcm9tICcuL0FuaW1hdGVkQXN0ZXJpc2suanMnXG5cbmNvbnN0IE1BWF9TSE9XX0NPVU5UID0gNlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU2hvd09wdXMxbU1lcmdlTm90aWNlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGlzT3B1czFtTWVyZ2VFbmFibGVkKCkgJiZcbiAgICAoZ2V0R2xvYmFsQ29uZmlnKCkub3B1czFtTWVyZ2VOb3RpY2VTZWVuQ291bnQgPz8gMCkgPCBNQVhfU0hPV19DT1VOVFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPcHVzMW1NZXJnZU5vdGljZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc2hvd10gPSB1c2VTdGF0ZShzaG91bGRTaG93T3B1czFtTWVyZ2VOb3RpY2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNob3cpIHJldHVyblxuICAgIGNvbnN0IG5ld0NvdW50ID0gKGdldEdsb2JhbENvbmZpZygpLm9wdXMxbU1lcmdlTm90aWNlU2VlbkNvdW50ID8/IDApICsgMVxuICAgIHNhdmVHbG9iYWxDb25maWcocHJldiA9PiB7XG4gICAgICBpZiAoKHByZXYub3B1czFtTWVyZ2VOb3RpY2VTZWVuQ291bnQgPz8gMCkgPj0gbmV3Q291bnQpIHJldHVybiBwcmV2XG4gICAgICByZXR1cm4geyAuLi5wcmV2LCBvcHVzMW1NZXJnZU5vdGljZVNlZW5Db3VudDogbmV3Q291bnQgfVxuICAgIH0pXG4gIH0sIFtzaG93XSlcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfT5cbiAgICAgIDxBbmltYXRlZEFzdGVyaXNrIGNoYXI9e1VQX0FSUk9XfSAvPlxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIHsnICd9XG4gICAgICAgIE9wdXMgbm93IGRlZmF1bHRzIHRvIDFNIGNvbnRleHQgwrcgNXggbW9yZSByb29tLCBzYW1lIHByaWNpbmdcbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IGlzVm9pY2VNb2RlRW5hYmxlZCB9IGZyb20gJy4uLy4uL3ZvaWNlL3ZvaWNlTW9kZUVuYWJsZWQuanMnXG5pbXBvcnQgeyBBbmltYXRlZEFzdGVyaXNrIH0gZnJvbSAnLi9BbmltYXRlZEFzdGVyaXNrLmpzJ1xuaW1wb3J0IHsgc2hvdWxkU2hvd09wdXMxbU1lcmdlTm90aWNlIH0gZnJvbSAnLi9PcHVzMW1NZXJnZU5vdGljZS5qcydcblxuY29uc3QgTUFYX1NIT1dfQ09VTlQgPSAzXG5cbmV4cG9ydCBmdW5jdGlvbiBWb2ljZU1vZGVOb3RpY2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gUG9zaXRpdmUgdGVybmFyeSBwYXR0ZXJuIOKAlCBzZWUgZG9jcy9mZWF0dXJlLWdhdGluZy5tZC5cbiAgLy8gQWxsIHN0cmluZ3MgbXVzdCBiZSBpbnNpZGUgdGhlIGd1YXJkZWQgYnJhbmNoIGZvciBkZWFkLWNvZGUgZWxpbWluYXRpb24uXG4gIHJldHVybiBmZWF0dXJlKCdWT0lDRV9NT0RFJykgPyA8Vm9pY2VNb2RlTm90aWNlSW5uZXIgLz4gOiBudWxsXG59XG5cbmZ1bmN0aW9uIFZvaWNlTW9kZU5vdGljZUlubmVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIENhcHR1cmUgZWxpZ2liaWxpdHkgb25jZSBhdCBtb3VudCDigJQgbm8gcmVhY3RpdmUgc3Vic2NyaXB0aW9ucy4gVGhpcyBzaXRzXG4gIC8vIGF0IHRoZSB0b3Agb2YgdGhlIG1lc3NhZ2UgbGlzdCBhbmQgZW50ZXJzIHNjcm9sbGJhY2sgcXVpY2tseTsgYW55XG4gIC8vIHJlLXJlbmRlciBhZnRlciBpdCdzIGluIHNjcm9sbGJhY2sgd291bGQgZm9yY2UgYSBmdWxsIHRlcm1pbmFsIHJlc2V0LlxuICAvLyBJZiB0aGUgdXNlciBydW5zIC92b2ljZSB0aGlzIHNlc3Npb24sIHRoZSBub3RpY2Ugc3RheXMgdmlzaWJsZTsgaXQgd29uJ3RcbiAgLy8gc2hvdyBuZXh0IHNlc3Npb24gc2luY2Ugdm9pY2VFbmFibGVkIHdpbGwgYmUgdHJ1ZSBvbiBkaXNrLlxuICBjb25zdCBbc2hvd10gPSB1c2VTdGF0ZShcbiAgICAoKSA9PlxuICAgICAgaXNWb2ljZU1vZGVFbmFibGVkKCkgJiZcbiAgICAgIGdldEluaXRpYWxTZXR0aW5ncygpLnZvaWNlRW5hYmxlZCAhPT0gdHJ1ZSAmJlxuICAgICAgKGdldEdsb2JhbENvbmZpZygpLnZvaWNlTm90aWNlU2VlbkNvdW50ID8/IDApIDwgTUFYX1NIT1dfQ09VTlQgJiZcbiAgICAgICFzaG91bGRTaG93T3B1czFtTWVyZ2VOb3RpY2UoKSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG93KSByZXR1cm5cbiAgICAvLyBDYXB0dXJlIG91dHNpZGUgdGhlIHVwZGF0ZXIgc28gU3RyaWN0TW9kZSdzIHNlY29uZCBpbnZvY2F0aW9uIGlzIGEgbm8tb3AuXG4gICAgY29uc3QgbmV3Q291bnQgPSAoZ2V0R2xvYmFsQ29uZmlnKCkudm9pY2VOb3RpY2VTZWVuQ291bnQgPz8gMCkgKyAxXG4gICAgc2F2ZUdsb2JhbENvbmZpZyhwcmV2ID0+IHtcbiAgICAgIGlmICgocHJldi52b2ljZU5vdGljZVNlZW5Db3VudCA/PyAwKSA+PSBuZXdDb3VudCkgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHZvaWNlTm90aWNlU2VlbkNvdW50OiBuZXdDb3VudCB9XG4gICAgfSlcbiAgfSwgW3Nob3ddKVxuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgPEFuaW1hdGVkQXN0ZXJpc2sgLz5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPiBWb2ljZSBtb2RlIGlzIG5vdyBhdmFpbGFibGUgwrcgL3ZvaWNlIHRvIGVuYWJsZTwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgIi8vIENvbmRpdGlvbmFsbHkgcmVxdWlyZSgpJ2QgaW4gTG9nb1YyLnRzeCBiZWhpbmQgZmVhdHVyZSgnS0FJUk9TJykgfHxcbi8vIGZlYXR1cmUoJ0tBSVJPU19DSEFOTkVMUycpLiBObyBmZWF0dXJlKCkgZ3VhcmQgaGVyZSDigJQgdGhlIHdob2xlIGZpbGVcbi8vIHRyZWUtc2hha2VzIHZpYSB0aGUgcmVxdWlyZSBwYXR0ZXJuIHdoZW4gYm90aCBmbGFncyBhcmUgZmFsc2UgKHNlZVxuLy8gZG9jcy9mZWF0dXJlLWdhdGluZy5tZCkuIERvIE5PVCBpbXBvcnQgdGhpcyBtb2R1bGUgc3RhdGljYWxseSBmcm9tXG4vLyB1bmd1YXJkZWQgY29kZS5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBDaGFubmVsRW50cnksXG4gIGdldEFsbG93ZWRDaGFubmVscyxcbiAgZ2V0SGFzRGV2Q2hhbm5lbHMsXG59IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGlzQ2hhbm5lbHNFbmFibGVkIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NoYW5uZWxBbGxvd2xpc3QuanMnXG5pbXBvcnQgeyBnZXRFZmZlY3RpdmVDaGFubmVsQWxsb3dsaXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NoYW5uZWxOb3RpZmljYXRpb24uanMnXG5pbXBvcnQgeyBnZXRNY3BDb25maWdzQnlTY29wZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC9jb25maWcuanMnXG5pbXBvcnQge1xuICBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zLFxuICBnZXRTdWJzY3JpcHRpb25UeXBlLFxufSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgbG9hZEluc3RhbGxlZFBsdWdpbnNWMiB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvaW5zdGFsbGVkUGx1Z2luc01hbmFnZXIuanMnXG5pbXBvcnQgeyBnZXRTZXR0aW5nc0ZvclNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbHNOb3RpY2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gU25hcHNob3QgYWxsIHJlYWRzIGF0IG1vdW50LiBUaGlzIG5vdGljZSBlbnRlcnMgc2Nyb2xsYmFjayBpbW1lZGlhdGVseVxuICAvLyBhZnRlciB0aGUgbG9nbzsgYW55IHJlLXJlbmRlciBwYXN0IHRoYXQgcG9pbnQgZm9yY2VzIGEgZnVsbCB0ZXJtaW5hbFxuICAvLyByZXNldC4gZ2V0QWxsb3dlZENoYW5uZWxzIChib290c3RyYXAgc3RhdGUpLCBnZXRTZXR0aW5nc0ZvclNvdXJjZVxuICAvLyAoc2Vzc2lvbiBjYWNoZSB1cGRhdGVkIGJ5IGJhY2tncm91bmQgcG9sbGluZyAvIC9sb2dpbiksIGFuZFxuICAvLyBpc0NoYW5uZWxzRW5hYmxlZCAoR3Jvd3RoQm9vayA1LW1pbiByZWZyZXNoKSBtdXN0IGJlIGNhcHR1cmVkIG9uY2VcbiAgLy8gc28gYSBsYXRlciByZS1yZW5kZXIgY2Fubm90IGZsaXAgYnJhbmNoZXMuXG4gIGNvbnN0IFt7IGNoYW5uZWxzLCBkaXNhYmxlZCwgbm9BdXRoLCBwb2xpY3lCbG9ja2VkLCBsaXN0LCB1bm1hdGNoZWQgfV0gPVxuICAgIHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIGNvbnN0IGNoID0gZ2V0QWxsb3dlZENoYW5uZWxzKClcbiAgICAgIGlmIChjaC5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hhbm5lbHM6IGNoLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBub0F1dGg6IGZhbHNlLFxuICAgICAgICAgIHBvbGljeUJsb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgIGxpc3Q6ICcnLFxuICAgICAgICAgIHVubWF0Y2hlZDogW10gYXMgVW5tYXRjaGVkW10sXG4gICAgICAgIH1cbiAgICAgIGNvbnN0IGwgPSBjaC5tYXAoZm9ybWF0RW50cnkpLmpvaW4oJywgJylcbiAgICAgIGNvbnN0IHN1YiA9IGdldFN1YnNjcmlwdGlvblR5cGUoKVxuICAgICAgY29uc3QgbWFuYWdlZCA9IHN1YiA9PT0gJ3RlYW0nIHx8IHN1YiA9PT0gJ2VudGVycHJpc2UnXG4gICAgICBjb25zdCBwb2xpY3kgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncG9saWN5U2V0dGluZ3MnKVxuICAgICAgY29uc3QgYWxsb3dsaXN0ID0gZ2V0RWZmZWN0aXZlQ2hhbm5lbEFsbG93bGlzdChcbiAgICAgICAgc3ViLFxuICAgICAgICBwb2xpY3k/LmFsbG93ZWRDaGFubmVsUGx1Z2lucyxcbiAgICAgIClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5uZWxzOiBjaCxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0NoYW5uZWxzRW5hYmxlZCgpLFxuICAgICAgICBub0F1dGg6ICFnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zKCk/LmFjY2Vzc1Rva2VuLFxuICAgICAgICBwb2xpY3lCbG9ja2VkOiBtYW5hZ2VkICYmIHBvbGljeT8uY2hhbm5lbHNFbmFibGVkICE9PSB0cnVlLFxuICAgICAgICBsaXN0OiBsLFxuICAgICAgICB1bm1hdGNoZWQ6IGZpbmRVbm1hdGNoZWQoY2gsIGFsbG93bGlzdCksXG4gICAgICB9XG4gICAgfSlcbiAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICAvLyBXaGVuIGJvdGggZmxhZ3MgYXJlIHBhc3NlZCwgdGhlIGxpc3QgbWl4ZXMgZW50cmllcyBhbmQgYSBzaW5nbGUgZmxhZ1xuICAvLyBuYW1lIHdvdWxkIGJlIHdyb25nIGZvciBoYWxmIG9mIGl0LiBlbnRyeS5kZXYgZGlzdGluZ3Vpc2hlcyBvcmlnaW4uXG4gIGNvbnN0IGhhc05vbkRldiA9IGNoYW5uZWxzLnNvbWUoYyA9PiAhYy5kZXYpXG4gIGNvbnN0IGZsYWcgPVxuICAgIGdldEhhc0RldkNoYW5uZWxzKCkgJiYgaGFzTm9uRGV2XG4gICAgICA/ICdDaGFubmVscydcbiAgICAgIDogZ2V0SGFzRGV2Q2hhbm5lbHMoKVxuICAgICAgICA/ICctLWRhbmdlcm91c2x5LWxvYWQtZGV2ZWxvcG1lbnQtY2hhbm5lbHMnXG4gICAgICAgIDogJy0tY2hhbm5lbHMnXG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgIHtmbGFnfSBpZ25vcmVkICh7bGlzdH0pXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+Q2hhbm5lbHMgYXJlIG5vdCBjdXJyZW50bHkgYXZhaWxhYmxlPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKG5vQXV0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICB7ZmxhZ30gaWdub3JlZCAoe2xpc3R9KVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIENoYW5uZWxzIHJlcXVpcmUgY2xhdWRlLmFpIGF1dGhlbnRpY2F0aW9uIMK3IHJ1biAvbG9naW4sIHRoZW4gcmVzdGFydFxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAocG9saWN5QmxvY2tlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICB7ZmxhZ30gYmxvY2tlZCBieSBvcmcgcG9saWN5ICh7bGlzdH0pXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+SW5ib3VuZCBtZXNzYWdlcyB3aWxsIGJlIHNpbGVudGx5IGRyb3BwZWQ8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIEhhdmUgYW4gYWRtaW5pc3RyYXRvciBzZXQgY2hhbm5lbHNFbmFibGVkOiB0cnVlIGluIG1hbmFnZWQgc2V0dGluZ3MgdG9cbiAgICAgICAgICBlbmFibGVcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7dW5tYXRjaGVkLm1hcCh1ID0+IChcbiAgICAgICAgICA8VGV4dCBrZXk9e2Ake2Zvcm1hdEVudHJ5KHUuZW50cnkpfToke3Uud2h5fWB9IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAge2Zvcm1hdEVudHJ5KHUuZW50cnkpfSDCtyB7dS53aHl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIFwiTGlzdGVuaW5nIGZvclwiIG5vdCBcImFjdGl2ZVwiIOKAlCBhdCB0aGlzIHBvaW50IHdlIG9ubHkga25vdyB0aGUgYWxsb3dsaXN0XG4gIC8vIHdhcyBzZXQuIFNlcnZlciBjb25uZWN0aW9uLCBjYXBhYmlsaXR5IGRlY2xhcmF0aW9uLCBhbmQgd2hldGhlciB0aGUgbmFtZVxuICAvLyBldmVuIG1hdGNoZXMgYSBjb25maWd1cmVkIE1DUCBzZXJ2ZXIgYXJlIGFsbCBzdGlsbCB1bmtub3duLlxuICByZXR1cm4gKFxuICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5MaXN0ZW5pbmcgZm9yIGNoYW5uZWwgbWVzc2FnZXMgZnJvbToge2xpc3R9PC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIEV4cGVyaW1lbnRhbCDCtyBpbmJvdW5kIG1lc3NhZ2VzIHdpbGwgYmUgcHVzaGVkIGludG8gdGhpcyBzZXNzaW9uLCB0aGlzXG4gICAgICAgIGNhcnJpZXMgcHJvbXB0IGluamVjdGlvbiByaXNrcy4gUmVzdGFydCBDbGF1ZGUgQ29kZSB3aXRob3V0IHtmbGFnfSB0b1xuICAgICAgICBkaXNhYmxlLlxuICAgICAgPC9UZXh0PlxuICAgICAge3VubWF0Y2hlZC5tYXAodSA9PiAoXG4gICAgICAgIDxUZXh0IGtleT17YCR7Zm9ybWF0RW50cnkodS5lbnRyeSl9OiR7dS53aHl9YH0gY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAge2Zvcm1hdEVudHJ5KHUuZW50cnkpfSDCtyB7dS53aHl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIGZvcm1hdEVudHJ5KGM6IENoYW5uZWxFbnRyeSk6IHN0cmluZyB7XG4gIHJldHVybiBjLmtpbmQgPT09ICdwbHVnaW4nXG4gICAgPyBgcGx1Z2luOiR7Yy5uYW1lfUAke2MubWFya2V0cGxhY2V9YFxuICAgIDogYHNlcnZlcjoke2MubmFtZX1gXG59XG5cbnR5cGUgVW5tYXRjaGVkID0geyBlbnRyeTogQ2hhbm5lbEVudHJ5OyB3aHk6IHN0cmluZyB9XG5cbmZ1bmN0aW9uIGZpbmRVbm1hdGNoZWQoXG4gIGVudHJpZXM6IHJlYWRvbmx5IENoYW5uZWxFbnRyeVtdLFxuICBhbGxvd2xpc3Q6IFJldHVyblR5cGU8dHlwZW9mIGdldEVmZmVjdGl2ZUNoYW5uZWxBbGxvd2xpc3Q+LFxuKTogVW5tYXRjaGVkW10ge1xuICAvLyBTZXJ2ZXIta2luZDogYnVpbGQgb25lIFNldCBmcm9tIGFsbCBzY29wZXMgdXAgZnJvbnQuIGdldE1jcENvbmZpZ3NCeVNjb3BlXG4gIC8vIGlzIG5vdCBjYWNoZWQgKHByb2plY3Qgc2NvcGUgd2Fsa3MgdGhlIGRpciB0cmVlKTsgZ2V0TWNwQ29uZmlnQnlOYW1lIHdvdWxkXG4gIC8vIHJlZG8gdGhhdCB3YWxrIHBlciBlbnRyeS5cbiAgY29uc3Qgc2NvcGVzID0gWydlbnRlcnByaXNlJywgJ3VzZXInLCAncHJvamVjdCcsICdsb2NhbCddIGFzIGNvbnN0XG4gIGNvbnN0IGNvbmZpZ3VyZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhnZXRNY3BDb25maWdzQnlTY29wZShzY29wZSkuc2VydmVycykpIHtcbiAgICAgIGNvbmZpZ3VyZWQuYWRkKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgLy8gUGx1Z2luLWtpbmQgaW5zdGFsbGVkIGNoZWNrOiBpbnN0YWxsZWRfcGx1Z2lucy5qc29uIGtleXMgYXJlXG4gIC8vIGBuYW1lQG1hcmtldHBsYWNlYC4gbG9hZEluc3RhbGxlZFBsdWdpbnNWMiBpcyBjYWNoZWQuXG4gIGNvbnN0IGluc3RhbGxlZFBsdWdpbklkcyA9IG5ldyBTZXQoXG4gICAgT2JqZWN0LmtleXMobG9hZEluc3RhbGxlZFBsdWdpbnNWMigpLnBsdWdpbnMpLFxuICApXG5cbiAgLy8gUGx1Z2luLWtpbmQgYWxsb3dsaXN0IGNoZWNrOiBzYW1lIHttYXJrZXRwbGFjZSwgcGx1Z2lufSB0ZXN0IGFzIHRoZVxuICAvLyBnYXRlIGF0IGNoYW5uZWxOb3RpZmljYXRpb24udHMuIGVudHJ5LmRldiBieXBhc3NlcyAoZGV2IGZsYWcgb3B0cyBvdXRcbiAgLy8gb2YgdGhlIGFsbG93bGlzdCkuIE9yZyBsaXN0IHJlcGxhY2VzIGxlZGdlciB3aGVuIHNldCAodGVhbS9lbnRlcnByaXNlKS5cbiAgLy8gR3Jvd3RoQm9vayBfQ0FDSEVEX01BWV9CRV9TVEFMRSDigJQgY29sZCBjYWNoZSB5aWVsZHMgW10gc28gZXZlcnkgcGx1Z2luXG4gIC8vIGVudHJ5IHdhcm5zOyBzYW1lIHRyYWRlb2ZmIHRoZSBnYXRlIGFscmVhZHkgYWNjZXB0cy5cbiAgY29uc3QgeyBlbnRyaWVzOiBhbGxvd2VkLCBzb3VyY2UgfSA9IGFsbG93bGlzdFxuXG4gIC8vIEluZGVwZW5kZW50IGlmcyDigJQgYSBwbHVnaW4gZW50cnkgdGhhdCdzIGJvdGggdW5pbnN0YWxsZWQgQU5EXG4gIC8vIHVubGlzdGVkIHNob3dzIHR3byBsaW5lcy4gU2VydmVyIGtpbmQgY2hlY2tzIGNvbmZpZyArIGRldiBmbGFnLlxuICBjb25zdCBvdXQ6IFVubWF0Y2hlZFtdID0gW11cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgaWYgKGVudHJ5LmtpbmQgPT09ICdzZXJ2ZXInKSB7XG4gICAgICBpZiAoIWNvbmZpZ3VyZWQuaGFzKGVudHJ5Lm5hbWUpKSB7XG4gICAgICAgIG91dC5wdXNoKHsgZW50cnksIHdoeTogJ25vIE1DUCBzZXJ2ZXIgY29uZmlndXJlZCB3aXRoIHRoYXQgbmFtZScgfSlcbiAgICAgIH1cbiAgICAgIGlmICghZW50cnkuZGV2KSB7XG4gICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICB3aHk6ICdzZXJ2ZXI6IGVudHJpZXMgbmVlZCAtLWRhbmdlcm91c2x5LWxvYWQtZGV2ZWxvcG1lbnQtY2hhbm5lbHMnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKCFpbnN0YWxsZWRQbHVnaW5JZHMuaGFzKGAke2VudHJ5Lm5hbWV9QCR7ZW50cnkubWFya2V0cGxhY2V9YCkpIHtcbiAgICAgIG91dC5wdXNoKHsgZW50cnksIHdoeTogJ3BsdWdpbiBub3QgaW5zdGFsbGVkJyB9KVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAhZW50cnkuZGV2ICYmXG4gICAgICAhYWxsb3dlZC5zb21lKFxuICAgICAgICBlID0+IGUucGx1Z2luID09PSBlbnRyeS5uYW1lICYmIGUubWFya2V0cGxhY2UgPT09IGVudHJ5Lm1hcmtldHBsYWNlLFxuICAgICAgKVxuICAgICkge1xuICAgICAgb3V0LnB1c2goe1xuICAgICAgICBlbnRyeSxcbiAgICAgICAgd2h5OlxuICAgICAgICAgIHNvdXJjZSA9PT0gJ29yZydcbiAgICAgICAgICAgID8gXCJub3Qgb24geW91ciBvcmcncyBhcHByb3ZlZCBjaGFubmVscyBsaXN0XCJcbiAgICAgICAgICAgIDogJ25vdCBvbiB0aGUgYXBwcm92ZWQgY2hhbm5lbHMgYWxsb3dsaXN0JyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0LCBjb2xvciB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TGF5b3V0TW9kZSxcbiAgY2FsY3VsYXRlTGF5b3V0RGltZW5zaW9ucyxcbiAgY2FsY3VsYXRlT3B0aW1hbExlZnRXaWR0aCxcbiAgZm9ybWF0V2VsY29tZU1lc3NhZ2UsXG4gIHRydW5jYXRlUGF0aCxcbiAgZ2V0UmVjZW50QWN0aXZpdHlTeW5jLFxuICBnZXRSZWNlbnRSZWxlYXNlTm90ZXNTeW5jLFxuICBnZXRMb2dvRGlzcGxheURhdGEsXG59IGZyb20gJy4uLy4uL3V0aWxzL2xvZ29WMlV0aWxzLmpzJ1xuaW1wb3J0IHsgdHJ1bmNhdGUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBnZXREaXNwbGF5UGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbGUuanMnXG5pbXBvcnQgeyBDbGF3ZCB9IGZyb20gJy4vQ2xhd2QuanMnXG5pbXBvcnQgeyBGZWVkQ29sdW1uIH0gZnJvbSAnLi9GZWVkQ29sdW1uLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlUmVjZW50QWN0aXZpdHlGZWVkLFxuICBjcmVhdGVXaGF0c05ld0ZlZWQsXG4gIGNyZWF0ZVByb2plY3RPbmJvYXJkaW5nRmVlZCxcbiAgY3JlYXRlR3Vlc3RQYXNzZXNGZWVkLFxufSBmcm9tICcuL2ZlZWRDb25maWdzLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnc3JjL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IHJlc29sdmVUaGVtZVNldHRpbmcgfSBmcm9tICdzcmMvdXRpbHMvc3lzdGVtVGhlbWUuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQge1xuICBpc0RlYnVnTW9kZSxcbiAgaXNEZWJ1Z1RvU3RkRXJyLFxuICBnZXREZWJ1Z0xvZ1BhdGgsXG59IGZyb20gJ3NyYy91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGdldFN0ZXBzLFxuICBzaG91bGRTaG93UHJvamVjdE9uYm9hcmRpbmcsXG4gIGluY3JlbWVudFByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50LFxufSBmcm9tICcuLi8uLi9wcm9qZWN0T25ib2FyZGluZ1N0YXRlLmpzJ1xuaW1wb3J0IHsgQ29uZGVuc2VkTG9nbyB9IGZyb20gJy4vQ29uZGVuc2VkTG9nby5qcydcbmltcG9ydCB7IE9mZnNjcmVlbkZyZWV6ZSB9IGZyb20gJy4uL09mZnNjcmVlbkZyZWV6ZS5qcydcbmltcG9ydCB7IGNoZWNrRm9yUmVsZWFzZU5vdGVzU3luYyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbGVhc2VOb3Rlcy5qcydcbmltcG9ydCB7IGdldER1bXBQcm9tcHRzUGF0aCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvZHVtcFByb21wdHMuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJ3NyYy91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7XG4gIGdldFN0YXJ0dXBQZXJmTG9nUGF0aCxcbiAgaXNEZXRhaWxlZFByb2ZpbGluZ0VuYWJsZWQsXG59IGZyb20gJ3NyYy91dGlscy9zdGFydHVwUHJvZmlsZXIuanMnXG5pbXBvcnQgeyBFbWVyZ2VuY3lUaXAgfSBmcm9tICcuL0VtZXJnZW5jeVRpcC5qcydcbmltcG9ydCB7IFZvaWNlTW9kZU5vdGljZSB9IGZyb20gJy4vVm9pY2VNb2RlTm90aWNlLmpzJ1xuaW1wb3J0IHsgT3B1czFtTWVyZ2VOb3RpY2UgfSBmcm9tICcuL09wdXMxbU1lcmdlTm90aWNlLmpzJ1xuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5cbi8vIENvbmRpdGlvbmFsIHJlcXVpcmUgc28gQ2hhbm5lbHNOb3RpY2UudHN4IHRyZWUtc2hha2VzIHdoZW4gYm90aCBmbGFncyBhcmVcbi8vIGZhbHNlLiBBIG1vZHVsZS1zY29wZSBoZWxwZXIgY29tcG9uZW50IGluc2lkZSBhIGZlYXR1cmUoKSB0ZXJuYXJ5IGRvZXMgTk9UXG4vLyB0cmVlLXNoYWtlIChkb2NzL2ZlYXR1cmUtZ2F0aW5nLm1kKTsgdGhlIHJlcXVpcmUgcGF0dGVybiBlbGltaW5hdGVzIHRoZVxuLy8gd2hvbGUgZmlsZS4gVm9pY2VNb2RlTm90aWNlIHVzZXMgdGhlIHVuc2FmZSBoZWxwZXIgcGF0dGVybiBidXQgVk9JQ0VfTU9ERVxuLy8gaXMgZXh0ZXJuYWw6IHRydWUgc28gaXQncyBtb290IHRoZXJlLlxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuY29uc3QgQ2hhbm5lbHNOb3RpY2VNb2R1bGUgPVxuICBmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQ0hBTk5FTFMnKVxuICAgID8gKHJlcXVpcmUoJy4vQ2hhbm5lbHNOb3RpY2UuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuL0NoYW5uZWxzTm90aWNlLmpzJykpXG4gICAgOiBudWxsXG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmltcG9ydCB7IFNhbmRib3hNYW5hZ2VyIH0gZnJvbSAnc3JjL3V0aWxzL3NhbmRib3gvc2FuZGJveC1hZGFwdGVyLmpzJ1xuaW1wb3J0IHtcbiAgdXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsLFxuICBpbmNyZW1lbnRHdWVzdFBhc3Nlc1NlZW5Db3VudCxcbn0gZnJvbSAnLi9HdWVzdFBhc3Nlc1Vwc2VsbC5qcydcbmltcG9ydCB7XG4gIHVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsLFxuICBpbmNyZW1lbnRPdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50LFxuICBjcmVhdGVPdmVyYWdlQ3JlZGl0RmVlZCxcbn0gZnJvbSAnLi9PdmVyYWdlQ3JlZGl0VXBzZWxsLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0RWZmb3J0U3VmZml4IH0gZnJvbSAnLi4vLi4vdXRpbHMvZWZmb3J0LmpzJ1xuaW1wb3J0IHsgdXNlTWFpbkxvb3BNb2RlbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1haW5Mb29wTW9kZWwuanMnXG5pbXBvcnQgeyByZW5kZXJNb2RlbFNldHRpbmcgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9tb2RlbC5qcydcblxuY29uc3QgTEVGVF9QQU5FTF9NQVhfV0lEVEggPSA1MFxuXG5leHBvcnQgZnVuY3Rpb24gTG9nb1YyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBnZXRSZWNlbnRBY3Rpdml0eVN5bmMoKVxuICBjb25zdCB1c2VybmFtZSA9IGdldEdsb2JhbENvbmZpZygpLm9hdXRoQWNjb3VudD8uZGlzcGxheU5hbWUgPz8gJydcblxuICBjb25zdCB7IGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIGNvbnN0IHNob3dPbmJvYXJkaW5nID0gc2hvdWxkU2hvd1Byb2plY3RPbmJvYXJkaW5nKClcbiAgY29uc3Qgc2hvd1NhbmRib3hTdGF0dXMgPSBTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKClcbiAgY29uc3Qgc2hvd0d1ZXN0UGFzc2VzVXBzZWxsID0gdXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsKClcbiAgY29uc3Qgc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwgPSB1c2VTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCgpXG4gIGNvbnN0IGFnZW50ID0gdXNlQXBwU3RhdGUocyA9PiBzLmFnZW50KVxuICBjb25zdCBlZmZvcnRWYWx1ZSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5lZmZvcnRWYWx1ZSlcblxuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuXG4gIGxldCBjaGFuZ2Vsb2c6IHN0cmluZ1tdXG4gIHRyeSB7XG4gICAgY2hhbmdlbG9nID0gZ2V0UmVjZW50UmVsZWFzZU5vdGVzU3luYygzKVxuICB9IGNhdGNoIHtcbiAgICBjaGFuZ2Vsb2cgPSBbXVxuICB9XG5cbiAgLy8gR2V0IGNvbXBhbnkgYW5ub3VuY2VtZW50cyBhbmQgc2VsZWN0IG9uZTpcbiAgLy8gLSBGaXJzdCBzdGFydHVwIChudW1TdGFydHVwcyA9PT0gMSk6IHNob3cgZmlyc3QgYW5ub3VuY2VtZW50XG4gIC8vIC0gQWxsIG90aGVyIHN0YXJ0dXBzOiByYW5kb21seSBzZWxlY3QgZnJvbSBhbm5vdW5jZW1lbnRzXG4gIGNvbnN0IFthbm5vdW5jZW1lbnRdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IGFubm91bmNlbWVudHMgPSBnZXRJbml0aWFsU2V0dGluZ3MoKS5jb21wYW55QW5ub3VuY2VtZW50c1xuICAgIGlmICghYW5ub3VuY2VtZW50cyB8fCBhbm5vdW5jZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBjb25maWcubnVtU3RhcnR1cHMgPT09IDFcbiAgICAgID8gYW5ub3VuY2VtZW50c1swXVxuICAgICAgOiBhbm5vdW5jZW1lbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFubm91bmNlbWVudHMubGVuZ3RoKV1cbiAgfSlcbiAgY29uc3QgeyBoYXNSZWxlYXNlTm90ZXMgfSA9IGNoZWNrRm9yUmVsZWFzZU5vdGVzU3luYyhcbiAgICBjb25maWcubGFzdFJlbGVhc2VOb3Rlc1NlZW4sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgIGlmIChjdXJyZW50Q29uZmlnLmxhc3RSZWxlYXNlTm90ZXNTZWVuID09PSBNQUNSTy5WRVJTSU9OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+IHtcbiAgICAgIGlmIChjdXJyZW50Lmxhc3RSZWxlYXNlTm90ZXNTZWVuID09PSBNQUNSTy5WRVJTSU9OKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgbGFzdFJlbGVhc2VOb3Rlc1NlZW46IE1BQ1JPLlZFUlNJT04gfVxuICAgIH0pXG4gICAgaWYgKHNob3dPbmJvYXJkaW5nKSB7XG4gICAgICBpbmNyZW1lbnRQcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCgpXG4gICAgfVxuICB9LCBbY29uZmlnLCBzaG93T25ib2FyZGluZ10pXG5cbiAgLy8gSW4gY29uZGVuc2VkIG1vZGUgKGVhcmx5LXJldHVybiBiZWxvdyByZW5kZXJzIDxDb25kZW5zZWRMb2dvLz4pLFxuICAvLyBDb25kZW5zZWRMb2dvJ3Mgb3duIHVzZUVmZmVjdCBoYW5kbGVzIHRoZSBpbXByZXNzaW9uIGNvdW50LiBTa2lwcGluZ1xuICAvLyBoZXJlIGF2b2lkcyBkb3VibGUtY291bnRpbmcgc2luY2UgaG9va3MgZmlyZSBiZWZvcmUgdGhlIGVhcmx5IHJldHVybi5cbiAgY29uc3QgaXNDb25kZW5zZWRNb2RlID1cbiAgICAhaGFzUmVsZWFzZU5vdGVzICYmXG4gICAgIXNob3dPbmJvYXJkaW5nICYmXG4gICAgIWlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0ZPUkNFX0ZVTExfTE9HTylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93R3Vlc3RQYXNzZXNVcHNlbGwgJiYgIXNob3dPbmJvYXJkaW5nICYmICFpc0NvbmRlbnNlZE1vZGUpIHtcbiAgICAgIGluY3JlbWVudEd1ZXN0UGFzc2VzU2VlbkNvdW50KClcbiAgICB9XG4gIH0sIFtzaG93R3Vlc3RQYXNzZXNVcHNlbGwsIHNob3dPbmJvYXJkaW5nLCBpc0NvbmRlbnNlZE1vZGVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwgJiZcbiAgICAgICFzaG93T25ib2FyZGluZyAmJlxuICAgICAgIXNob3dHdWVzdFBhc3Nlc1Vwc2VsbCAmJlxuICAgICAgIWlzQ29uZGVuc2VkTW9kZVxuICAgICkge1xuICAgICAgaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCgpXG4gICAgfVxuICB9LCBbXG4gICAgc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwsXG4gICAgc2hvd09uYm9hcmRpbmcsXG4gICAgc2hvd0d1ZXN0UGFzc2VzVXBzZWxsLFxuICAgIGlzQ29uZGVuc2VkTW9kZSxcbiAgXSlcblxuICBjb25zdCBtb2RlbCA9IHVzZU1haW5Mb29wTW9kZWwoKVxuICBjb25zdCBmdWxsTW9kZWxEaXNwbGF5TmFtZSA9IHJlbmRlck1vZGVsU2V0dGluZyhtb2RlbClcbiAgY29uc3Qge1xuICAgIHZlcnNpb24sXG4gICAgY3dkLFxuICAgIGJpbGxpbmdUeXBlLFxuICAgIGFnZW50TmFtZTogYWdlbnROYW1lRnJvbVNldHRpbmdzLFxuICB9ID0gZ2V0TG9nb0Rpc3BsYXlEYXRhKClcbiAgLy8gUHJlZmVyIEFwcFN0YXRlLmFnZW50IChzZXQgZnJvbSAtLWFnZW50IENMSSBmbGFnKSBvdmVyIHNldHRpbmdzXG4gIGNvbnN0IGFnZW50TmFtZSA9IGFnZW50ID8/IGFnZW50TmFtZUZyb21TZXR0aW5nc1xuICAvLyAtMjAgdG8gYWNjb3VudCBmb3IgdGhlIG1heCBsZW5ndGggb2Ygc3Vic2NyaXB0aW9uIG5hbWUgXCIgwrcgQ2xhdWRlIEVudGVycHJpc2VcIi5cbiAgY29uc3QgZWZmb3J0U3VmZml4ID0gZ2V0RWZmb3J0U3VmZml4KG1vZGVsLCBlZmZvcnRWYWx1ZSlcbiAgY29uc3QgbW9kZWxEaXNwbGF5TmFtZSA9IHRydW5jYXRlKFxuICAgIGZ1bGxNb2RlbERpc3BsYXlOYW1lICsgZWZmb3J0U3VmZml4LFxuICAgIExFRlRfUEFORUxfTUFYX1dJRFRIIC0gMjAsXG4gIClcblxuICAvLyBTaG93IGNvbmRlbnNlZCBsb2dvIGlmIG5vIG5ldyBjaGFuZ2Vsb2cgYW5kIG5vdCBzaG93aW5nIG9uYm9hcmRpbmcgYW5kIG5vdCBmb3JjaW5nIGZ1bGwgbG9nb1xuICBpZiAoXG4gICAgIWhhc1JlbGVhc2VOb3RlcyAmJlxuICAgICFzaG93T25ib2FyZGluZyAmJlxuICAgICFpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9GT1JDRV9GVUxMX0xPR08pXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29uZGVuc2VkTG9nbyAvPlxuICAgICAgICA8Vm9pY2VNb2RlTm90aWNlIC8+XG4gICAgICAgIDxPcHVzMW1NZXJnZU5vdGljZSAvPlxuICAgICAgICB7Q2hhbm5lbHNOb3RpY2VNb2R1bGUgJiYgPENoYW5uZWxzTm90aWNlTW9kdWxlLkNoYW5uZWxzTm90aWNlIC8+fVxuICAgICAgICB7aXNEZWJ1Z01vZGUoKSAmJiAoXG4gICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+RGVidWcgbW9kZSBlbmFibGVkPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIExvZ2dpbmcgdG86IHtpc0RlYnVnVG9TdGRFcnIoKSA/ICdzdGRlcnInIDogZ2V0RGVidWdMb2dQYXRoKCl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIDxFbWVyZ2VuY3lUaXAgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfU0VTU0lPTiAmJiAoXG4gICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIHRtdXggc2Vzc2lvbjoge3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfU0VTU0lPTn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVhfQ09ORkxJQ1RTXG4gICAgICAgICAgICAgICAgPyBgRGV0YWNoOiAke3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYfSAke3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYfSBkIChwcmVzcyBwcmVmaXggdHdpY2UgLSBDbGF1ZGUgdXNlcyAke3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYfSlgXG4gICAgICAgICAgICAgICAgOiBgRGV0YWNoOiAke3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYfSBkYH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge2Fubm91bmNlbWVudCAmJiAoXG4gICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5JU19ERU1PICYmIGNvbmZpZy5vYXV0aEFjY291bnQ/Lm9yZ2FuaXphdGlvbk5hbWUgJiYgKFxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBNZXNzYWdlIGZyb20ge2NvbmZpZy5vYXV0aEFjY291bnQub3JnYW5pemF0aW9uTmFtZX06XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8VGV4dD57YW5ub3VuY2VtZW50fTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgIXByb2Nlc3MuZW52LkRFTU9fVkVSU0lPTiAmJiAoXG4gICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+VXNlIC9pc3N1ZSB0byByZXBvcnQgbW9kZWwgYmVoYXZpb3IgaXNzdWVzPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiAhcHJvY2Vzcy5lbnYuREVNT19WRVJTSU9OICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5bQU5ULU9OTFldIExvZ3M6PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIEFQSSBjYWxsczoge2dldERpc3BsYXlQYXRoKGdldER1bXBQcm9tcHRzUGF0aCgpKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBEZWJ1ZyBsb2dzOiB7Z2V0RGlzcGxheVBhdGgoZ2V0RGVidWdMb2dQYXRoKCkpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge2lzRGV0YWlsZWRQcm9maWxpbmdFbmFibGVkKCkgJiYgKFxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBTdGFydHVwIFBlcmY6IHtnZXREaXNwbGF5UGF0aChnZXRTdGFydHVwUGVyZkxvZ1BhdGgoKSl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtcImV4dGVybmFsXCIgPT09ICdhbnQnICYmIDxHYXRlT3ZlcnJpZGVzV2FybmluZyAvPn1cbiAgICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEV4cGVyaW1lbnRFbnJvbGxtZW50Tm90aWNlIC8+fVxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIGxheW91dCBhbmQgZGlzcGxheSB2YWx1ZXNcbiAgY29uc3QgbGF5b3V0TW9kZSA9IGdldExheW91dE1vZGUoY29sdW1ucylcblxuICBjb25zdCB1c2VyVGhlbWUgPSByZXNvbHZlVGhlbWVTZXR0aW5nKGdldEdsb2JhbENvbmZpZygpLnRoZW1lKVxuICBjb25zdCBib3JkZXJUaXRsZSA9IGAgJHtjb2xvcignY2xhdWRlJywgdXNlclRoZW1lKSgnQ2xhdWRlIENvZGUnKX0gJHtjb2xvcignaW5hY3RpdmUnLCB1c2VyVGhlbWUpKGB2JHt2ZXJzaW9ufWApfSBgXG4gIGNvbnN0IGNvbXBhY3RCb3JkZXJUaXRsZSA9IGNvbG9yKCdjbGF1ZGUnLCB1c2VyVGhlbWUpKCcgQ2xhdWRlIENvZGUgJylcblxuICAvLyBFYXJseSByZXR1cm4gZm9yIGNvbXBhY3QgbW9kZVxuICBpZiAobGF5b3V0TW9kZSA9PT0gJ2NvbXBhY3QnKSB7XG4gICAgY29uc3QgbGF5b3V0V2lkdGggPSA0IC8vIGJvcmRlciArIHBhZGRpbmdcbiAgICBsZXQgd2VsY29tZU1lc3NhZ2UgPSBmb3JtYXRXZWxjb21lTWVzc2FnZSh1c2VybmFtZSlcbiAgICBpZiAoc3RyaW5nV2lkdGgod2VsY29tZU1lc3NhZ2UpID4gY29sdW1ucyAtIGxheW91dFdpZHRoKSB7XG4gICAgICB3ZWxjb21lTWVzc2FnZSA9IGZvcm1hdFdlbGNvbWVNZXNzYWdlKG51bGwpXG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGN3ZCB3aWR0aCBhY2NvdW50aW5nIGZvciBhZ2VudCBuYW1lIGlmIHByZXNlbnRcbiAgICBjb25zdCBzZXBhcmF0b3IgPSAnIMK3ICdcbiAgICBjb25zdCBhdFByZWZpeCA9ICdAJ1xuICAgIGNvbnN0IGN3ZEF2YWlsYWJsZVdpZHRoID0gYWdlbnROYW1lXG4gICAgICA/IGNvbHVtbnMgLVxuICAgICAgICBsYXlvdXRXaWR0aCAtXG4gICAgICAgIGF0UHJlZml4Lmxlbmd0aCAtXG4gICAgICAgIHN0cmluZ1dpZHRoKGFnZW50TmFtZSkgLVxuICAgICAgICBzZXBhcmF0b3IubGVuZ3RoXG4gICAgICA6IGNvbHVtbnMgLSBsYXlvdXRXaWR0aFxuICAgIGNvbnN0IHRydW5jYXRlZEN3ZCA9IHRydW5jYXRlUGF0aChjd2QsIE1hdGgubWF4KGN3ZEF2YWlsYWJsZVdpZHRoLCAxMCkpXG4gICAgLy8gT2Zmc2NyZWVuRnJlZXplOiBsb2dvIGlzIHRoZSBmaXJzdCB0aGluZyB0byBlbnRlciBzY3JvbGxiYWNrOyB1c2VNYWluTG9vcE1vZGVsKClcbiAgICAvLyBzdWJzY3JpYmVzIHRvIG1vZGVsIGNoYW5nZXMgYW5kIGdldExvZ29EaXNwbGF5RGF0YSgpIHJlYWRzIGN3ZC9zdWJzY3JpcHRpb24g4oCUXG4gICAgLy8gYW55IGNoYW5nZSB3aGlsZSBpbiBzY3JvbGxiYWNrIGZvcmNlcyBhIGZ1bGwgcmVzZXQuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxPZmZzY3JlZW5GcmVlemU+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBib3JkZXJTdHlsZT1cInJvdW5kXCJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiY2xhdWRlXCJcbiAgICAgICAgICAgIGJvcmRlclRleHQ9e3tcbiAgICAgICAgICAgICAgY29udGVudDogY29tcGFjdEJvcmRlclRpdGxlLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGFkZGluZ1g9ezF9XG4gICAgICAgICAgICBwYWRkaW5nWT17MX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgd2lkdGg9e2NvbHVtbnN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgYm9sZD57d2VsY29tZU1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5ZPXsxfT5cbiAgICAgICAgICAgICAgPENsYXdkIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnttb2RlbERpc3BsYXlOYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntiaWxsaW5nVHlwZX08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAge2FnZW50TmFtZSA/IGBAJHthZ2VudE5hbWV9IMK3ICR7dHJ1bmNhdGVkQ3dkfWAgOiB0cnVuY2F0ZWRDd2R9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvT2Zmc2NyZWVuRnJlZXplPlxuICAgICAgICA8Vm9pY2VNb2RlTm90aWNlIC8+XG4gICAgICAgIDxPcHVzMW1NZXJnZU5vdGljZSAvPlxuICAgICAgICB7Q2hhbm5lbHNOb3RpY2VNb2R1bGUgJiYgPENoYW5uZWxzTm90aWNlTW9kdWxlLkNoYW5uZWxzTm90aWNlIC8+fVxuICAgICAgICB7c2hvd1NhbmRib3hTdGF0dXMgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgWW91ciBiYXNoIGNvbW1hbmRzIHdpbGwgYmUgc2FuZGJveGVkLiBEaXNhYmxlIHdpdGggL3NhbmRib3guXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtcImV4dGVybmFsXCIgPT09ICdhbnQnICYmIDxHYXRlT3ZlcnJpZGVzV2FybmluZyAvPn1cbiAgICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEV4cGVyaW1lbnRFbnJvbGxtZW50Tm90aWNlIC8+fVxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgY29uc3Qgd2VsY29tZU1lc3NhZ2UgPSBmb3JtYXRXZWxjb21lTWVzc2FnZSh1c2VybmFtZSlcbiAgY29uc3QgbW9kZWxMaW5lID1cbiAgICAhcHJvY2Vzcy5lbnYuSVNfREVNTyAmJiBjb25maWcub2F1dGhBY2NvdW50Py5vcmdhbml6YXRpb25OYW1lXG4gICAgICA/IGAke21vZGVsRGlzcGxheU5hbWV9IMK3ICR7YmlsbGluZ1R5cGV9IMK3ICR7Y29uZmlnLm9hdXRoQWNjb3VudC5vcmdhbml6YXRpb25OYW1lfWBcbiAgICAgIDogYCR7bW9kZWxEaXNwbGF5TmFtZX0gwrcgJHtiaWxsaW5nVHlwZX1gXG4gIC8vIENhbGN1bGF0ZSBjd2Qgd2lkdGggYWNjb3VudGluZyBmb3IgYWdlbnQgbmFtZSBpZiBwcmVzZW50XG4gIGNvbnN0IGN3ZFNlcGFyYXRvciA9ICcgwrcgJ1xuICBjb25zdCBjd2RBdFByZWZpeCA9ICdAJ1xuICBjb25zdCBjd2RBdmFpbGFibGVXaWR0aCA9IGFnZW50TmFtZVxuICAgID8gTEVGVF9QQU5FTF9NQVhfV0lEVEggLVxuICAgICAgY3dkQXRQcmVmaXgubGVuZ3RoIC1cbiAgICAgIHN0cmluZ1dpZHRoKGFnZW50TmFtZSkgLVxuICAgICAgY3dkU2VwYXJhdG9yLmxlbmd0aFxuICAgIDogTEVGVF9QQU5FTF9NQVhfV0lEVEhcbiAgY29uc3QgdHJ1bmNhdGVkQ3dkID0gdHJ1bmNhdGVQYXRoKGN3ZCwgTWF0aC5tYXgoY3dkQXZhaWxhYmxlV2lkdGgsIDEwKSlcbiAgY29uc3QgY3dkTGluZSA9IGFnZW50TmFtZSA/IGBAJHthZ2VudE5hbWV9IMK3ICR7dHJ1bmNhdGVkQ3dkfWAgOiB0cnVuY2F0ZWRDd2RcbiAgY29uc3Qgb3B0aW1hbExlZnRXaWR0aCA9IGNhbGN1bGF0ZU9wdGltYWxMZWZ0V2lkdGgoXG4gICAgd2VsY29tZU1lc3NhZ2UsXG4gICAgY3dkTGluZSxcbiAgICBtb2RlbExpbmUsXG4gIClcblxuICAvLyBDYWxjdWxhdGUgbGF5b3V0IGRpbWVuc2lvbnNcbiAgY29uc3QgeyBsZWZ0V2lkdGgsIHJpZ2h0V2lkdGggfSA9IGNhbGN1bGF0ZUxheW91dERpbWVuc2lvbnMoXG4gICAgY29sdW1ucyxcbiAgICBsYXlvdXRNb2RlLFxuICAgIG9wdGltYWxMZWZ0V2lkdGgsXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T2Zmc2NyZWVuRnJlZXplPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYm9yZGVyU3R5bGU9XCJyb3VuZFwiXG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJjbGF1ZGVcIlxuICAgICAgICAgIGJvcmRlclRleHQ9e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6IGJvcmRlclRpdGxlLFxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgICBvZmZzZXQ6IDMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBNYWluIGNvbnRlbnQgKi99XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17bGF5b3V0TW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ3JvdycgOiAnY29sdW1uJ31cbiAgICAgICAgICAgIHBhZGRpbmdYPXsxfVxuICAgICAgICAgICAgZ2FwPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBMZWZ0IFBhbmVsICovfVxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgd2lkdGg9e2xlZnRXaWR0aH1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIG1pbkhlaWdodD17OX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+e3dlbGNvbWVNZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPENsYXdkIC8+XG5cbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnttb2RlbExpbmV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntjd2RMaW5lfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgey8qIFZlcnRpY2FsIGRpdmlkZXIgKi99XG4gICAgICAgICAgICB7bGF5b3V0TW9kZSA9PT0gJ2hvcml6b250YWwnICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlPVwic2luZ2xlXCJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImNsYXVkZVwiXG4gICAgICAgICAgICAgICAgYm9yZGVyRGltQ29sb3JcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogUmlnaHQgUGFuZWwgLSBQcm9qZWN0IE9uYm9hcmRpbmcgb3IgUmVjZW50IEFjdGl2aXR5IGFuZCBXaGF0J3MgTmV3ICovfVxuICAgICAgICAgICAge2xheW91dE1vZGUgPT09ICdob3Jpem9udGFsJyAmJiAoXG4gICAgICAgICAgICAgIDxGZWVkQ29sdW1uXG4gICAgICAgICAgICAgICAgZmVlZHM9e1xuICAgICAgICAgICAgICAgICAgc2hvd09uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0T25ib2FyZGluZ0ZlZWQoZ2V0U3RlcHMoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQoYWN0aXZpdGllcyksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IHNob3dHdWVzdFBhc3Nlc1Vwc2VsbFxuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQoYWN0aXZpdGllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUd1ZXN0UGFzc2VzRmVlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlY2VudEFjdGl2aXR5RmVlZChhY3Rpdml0aWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVPdmVyYWdlQ3JlZGl0RmVlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQoYWN0aXZpdGllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlV2hhdHNOZXdGZWVkKGNoYW5nZWxvZyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9e3JpZ2h0V2lkdGh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvT2Zmc2NyZWVuRnJlZXplPlxuICAgICAgPFZvaWNlTW9kZU5vdGljZSAvPlxuICAgICAgPE9wdXMxbU1lcmdlTm90aWNlIC8+XG4gICAgICB7Q2hhbm5lbHNOb3RpY2VNb2R1bGUgJiYgPENoYW5uZWxzTm90aWNlTW9kdWxlLkNoYW5uZWxzTm90aWNlIC8+fVxuICAgICAge2lzRGVidWdNb2RlKCkgJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+RGVidWcgbW9kZSBlbmFibGVkPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgTG9nZ2luZyB0bzoge2lzRGVidWdUb1N0ZEVycigpID8gJ3N0ZGVycicgOiBnZXREZWJ1Z0xvZ1BhdGgoKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxFbWVyZ2VuY3lUaXAgLz5cbiAgICAgIHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1NFU1NJT04gJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB0bXV4IHNlc3Npb246IHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1NFU1NJT059XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAge3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYX0NPTkZMSUNUU1xuICAgICAgICAgICAgICA/IGBEZXRhY2g6ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9IGQgKHByZXNzIHByZWZpeCB0d2ljZSAtIENsYXVkZSB1c2VzICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9KWBcbiAgICAgICAgICAgICAgOiBgRGV0YWNoOiAke3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfUFJFRklYfSBkYH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIHthbm5vdW5jZW1lbnQgJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgeyFwcm9jZXNzLmVudi5JU19ERU1PICYmIGNvbmZpZy5vYXV0aEFjY291bnQ/Lm9yZ2FuaXphdGlvbk5hbWUgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIE1lc3NhZ2UgZnJvbSB7Y29uZmlnLm9hdXRoQWNjb3VudC5vcmdhbml6YXRpb25OYW1lfTpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxUZXh0Pnthbm5vdW5jZW1lbnR9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICB7c2hvd1NhbmRib3hTdGF0dXMgJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICBZb3VyIGJhc2ggY29tbWFuZHMgd2lsbCBiZSBzYW5kYm94ZWQuIERpc2FibGUgd2l0aCAvc2FuZGJveC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIHtcImV4dGVybmFsXCIgPT09ICdhbnQnICYmICFwcm9jZXNzLmVudi5ERU1PX1ZFUlNJT04gJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+VXNlIC9pc3N1ZSB0byByZXBvcnQgbW9kZWwgYmVoYXZpb3IgaXNzdWVzPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiAhcHJvY2Vzcy5lbnYuREVNT19WRVJTSU9OICYmIChcbiAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPltBTlQtT05MWV0gTG9nczo8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBBUEkgY2FsbHM6IHtnZXREaXNwbGF5UGF0aChnZXREdW1wUHJvbXB0c1BhdGgoKSl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkRlYnVnIGxvZ3M6IHtnZXREaXNwbGF5UGF0aChnZXREZWJ1Z0xvZ1BhdGgoKSl9PC9UZXh0PlxuICAgICAgICAgIHtpc0RldGFpbGVkUHJvZmlsaW5nRW5hYmxlZCgpICYmIChcbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBTdGFydHVwIFBlcmY6IHtnZXREaXNwbGF5UGF0aChnZXRTdGFydHVwUGVyZkxvZ1BhdGgoKSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEdhdGVPdmVycmlkZXNXYXJuaW5nIC8+fVxuICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEV4cGVyaW1lbnRFbnJvbGxtZW50Tm90aWNlIC8+fVxuICAgIDwvPlxuICApXG59XG5cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uL2luay9zdHJpbmdXaWR0aC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgTm9ybWFsaXplZE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtZXNzYWdlOiBOb3JtYWxpemVkTWVzc2FnZVxuICBpc1RyYW5zY3JpcHRNb2RlOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlTW9kZWwoe1xuICBtZXNzYWdlLFxuICBpc1RyYW5zY3JpcHRNb2RlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzaG91bGRTaG93TW9kZWwgPVxuICAgIGlzVHJhbnNjcmlwdE1vZGUgJiZcbiAgICBtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmXG4gICAgbWVzc2FnZS5tZXNzYWdlLm1vZGVsICYmXG4gICAgbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQuc29tZShjID0+IGMudHlwZSA9PT0gJ3RleHQnKVxuXG4gIGlmICghc2hvdWxkU2hvd01vZGVsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtaW5XaWR0aD17c3RyaW5nV2lkdGgobWVzc2FnZS5tZXNzYWdlLm1vZGVsKSArIDh9PlxuICAgICAgPFRleHQgZGltQ29sb3I+e21lc3NhZ2UubWVzc2FnZS5tb2RlbH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uL2luay9zdHJpbmdXaWR0aC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgTm9ybWFsaXplZE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtZXNzYWdlOiBOb3JtYWxpemVkTWVzc2FnZVxuICBpc1RyYW5zY3JpcHRNb2RlOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlVGltZXN0YW1wKHtcbiAgbWVzc2FnZSxcbiAgaXNUcmFuc2NyaXB0TW9kZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgc2hvdWxkU2hvd1RpbWVzdGFtcCA9XG4gICAgaXNUcmFuc2NyaXB0TW9kZSAmJlxuICAgIG1lc3NhZ2UudGltZXN0YW1wICYmXG4gICAgbWVzc2FnZS50eXBlID09PSAnYXNzaXN0YW50JyAmJlxuICAgIG1lc3NhZ2UubWVzc2FnZS5jb250ZW50LnNvbWUoYyA9PiBjLnR5cGUgPT09ICd0ZXh0JylcblxuICBpZiAoIXNob3VsZFNob3dUaW1lc3RhbXApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkVGltZXN0YW1wID0gbmV3IERhdGUobWVzc2FnZS50aW1lc3RhbXApLnRvTG9jYWxlVGltZVN0cmluZyhcbiAgICAnZW4tVVMnLFxuICAgIHtcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgaG91cjEyOiB0cnVlLFxuICAgIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggbWluV2lkdGg9e3N0cmluZ1dpZHRoKGZvcm1hdHRlZFRpbWVzdGFtcCl9PlxuICAgICAgPFRleHQgZGltQ29sb3I+e2Zvcm1hdHRlZFRpbWVzdGFtcH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBTY3JlZW4gfSBmcm9tICcuLi9zY3JlZW5zL1JFUEwuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgUmVuZGVyYWJsZU1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzcGxheU1lc3NhZ2VGcm9tQ29sbGFwc2VkLFxuICBnZXRUb29sU2VhcmNoT3JSZWFkSW5mbyxcbiAgZ2V0VG9vbFVzZUlkc0Zyb21Db2xsYXBzZWRHcm91cCxcbiAgaGFzQW55VG9vbEluUHJvZ3Jlc3MsXG59IGZyb20gJy4uL3V0aWxzL2NvbGxhcHNlUmVhZFNlYXJjaC5qcydcbmltcG9ydCB7XG4gIHR5cGUgYnVpbGRNZXNzYWdlTG9va3VwcyxcbiAgRU1QVFlfU1RSSU5HX1NFVCxcbiAgZ2V0UHJvZ3Jlc3NNZXNzYWdlc0Zyb21Mb29rdXAsXG4gIGdldFNpYmxpbmdUb29sVXNlSURzRnJvbUxvb2t1cCxcbiAgZ2V0VG9vbFVzZUlELFxufSBmcm9tICcuLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7IGhhc1RoaW5raW5nQ29udGVudCwgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZS5qcydcbmltcG9ydCB7IE1lc3NhZ2VNb2RlbCB9IGZyb20gJy4vTWVzc2FnZU1vZGVsLmpzJ1xuaW1wb3J0IHsgc2hvdWxkUmVuZGVyU3RhdGljYWxseSB9IGZyb20gJy4vTWVzc2FnZXMuanMnXG5pbXBvcnQgeyBNZXNzYWdlVGltZXN0YW1wIH0gZnJvbSAnLi9NZXNzYWdlVGltZXN0YW1wLmpzJ1xuaW1wb3J0IHsgT2Zmc2NyZWVuRnJlZXplIH0gZnJvbSAnLi9PZmZzY3JlZW5GcmVlemUuanMnXG5cbmV4cG9ydCB0eXBlIFByb3BzID0ge1xuICBtZXNzYWdlOiBSZW5kZXJhYmxlTWVzc2FnZVxuICAvKiogV2hldGhlciB0aGUgcHJldmlvdXMgbWVzc2FnZSBpbiByZW5kZXJhYmxlTWVzc2FnZXMgaXMgYWxzbyBhIHVzZXIgbWVzc2FnZS4gKi9cbiAgaXNVc2VyQ29udGludWF0aW9uOiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIGlzIG5vbi1za2lwcGFibGUgY29udGVudCBhZnRlciB0aGlzIG1lc3NhZ2UgaW4gcmVuZGVyYWJsZU1lc3NhZ2VzLlxuICAgKiBPbmx5IG5lZWRzIHRvIGJlIGFjY3VyYXRlIGZvciBgY29sbGFwc2VkX3JlYWRfc2VhcmNoYCBtZXNzYWdlcyDigJQgdXNlZCB0byBkZWNpZGVcbiAgICogaWYgdGhlIGNvbGxhcHNlZCBncm91cCBzcGlubmVyIHNob3VsZCBzdGF5IGFjdGl2ZS4gUGFzcyBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIGhhc0NvbnRlbnRBZnRlcjogYm9vbGVhblxuICB0b29sczogVG9vbHNcbiAgY29tbWFuZHM6IENvbW1hbmRbXVxuICB2ZXJib3NlOiBib29sZWFuXG4gIGluUHJvZ3Jlc3NUb29sVXNlSURzOiBTZXQ8c3RyaW5nPlxuICBzdHJlYW1pbmdUb29sVXNlSURzOiBTZXQ8c3RyaW5nPlxuICBzY3JlZW46IFNjcmVlblxuICBjYW5BbmltYXRlOiBib29sZWFuXG4gIG9uT3BlblJhdGVMaW1pdE9wdGlvbnM/OiAoKSA9PiB2b2lkXG4gIGxhc3RUaGlua2luZ0Jsb2NrSWQ6IHN0cmluZyB8IG51bGxcbiAgbGF0ZXN0QmFzaE91dHB1dFVVSUQ6IHN0cmluZyB8IG51bGxcbiAgY29sdW1uczogbnVtYmVyXG4gIGlzTG9hZGluZzogYm9vbGVhblxuICBsb29rdXBzOiBSZXR1cm5UeXBlPHR5cGVvZiBidWlsZE1lc3NhZ2VMb29rdXBzPlxufVxuXG4vKipcbiAqIFNjYW5zIGZvcndhcmQgZnJvbSBgaW5kZXgrMWAgdG8gY2hlY2sgaWYgYW55IFwicmVhbFwiIGNvbnRlbnQgZm9sbG93cy4gVXNlZCB0b1xuICogZGVjaWRlIHdoZXRoZXIgYSBjb2xsYXBzZWQgcmVhZC9zZWFyY2ggZ3JvdXAgc2hvdWxkIHN0YXkgaW4gaXRzIGFjdGl2ZVxuICogKGdyZXkgZG90LCBwcmVzZW50LXRlbnNlIFwiUmVhZGluZ+KAplwiKSBzdGF0ZSB3aGlsZSB0aGUgcXVlcnkgaXMgc3RpbGwgbG9hZGluZy5cbiAqXG4gKiBFeHBvcnRlZCBzbyBNZXNzYWdlcy50c3ggY2FuIGNvbXB1dGUgdGhpcyBvbmNlIHBlciBtZXNzYWdlIGFuZCBwYXNzIHRoZVxuICogcmVzdWx0IGFzIGEgYm9vbGVhbiBwcm9wIOKAlCBhdm9pZHMgcGFzc2luZyB0aGUgZnVsbCBgcmVuZGVyYWJsZU1lc3NhZ2VzYCBhcnJheVxuICogdG8gZWFjaCBNZXNzYWdlUm93ICh3aGljaCBSZWFjdCBDb21waWxlciB3b3VsZCBwaW4gaW4gdGhlIGZpYmVyJ3MgbWVtb0NhY2hlLFxuICogYWNjdW11bGF0aW5nIGV2ZXJ5IGhpc3RvcmljYWwgdmVyc2lvbiBvZiB0aGUgYXJyYXkg4omIIDEtMk1CIG92ZXIgYSA3LXR1cm4gc2Vzc2lvbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZW50QWZ0ZXJJbmRleChcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW10sXG4gIGluZGV4OiBudW1iZXIsXG4gIHRvb2xzOiBUb29scyxcbiAgc3RyZWFtaW5nVG9vbFVzZUlEczogU2V0PHN0cmluZz4sXG4pOiBib29sZWFuIHtcbiAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbXNnID0gbWVzc2FnZXNbaV1cbiAgICBpZiAobXNnPy50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgIGlmIChcbiAgICAgICAgY29udGVudD8udHlwZSA9PT0gJ3RoaW5raW5nJyB8fFxuICAgICAgICBjb250ZW50Py50eXBlID09PSAncmVkYWN0ZWRfdGhpbmtpbmcnXG4gICAgICApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50Py50eXBlID09PSAndG9vbF91c2UnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRUb29sU2VhcmNoT3JSZWFkSW5mbyhjb250ZW50Lm5hbWUsIGNvbnRlbnQuaW5wdXQsIHRvb2xzKVxuICAgICAgICAgICAgLmlzQ29sbGFwc2libGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICAvLyBOb24tY29sbGFwc2libGUgdG9vbCB1c2VzIGFwcGVhciBpbiBzeW50aGV0aWNTdHJlYW1pbmdUb29sVXNlTWVzc2FnZXNcbiAgICAgICAgLy8gYmVmb3JlIHRoZWlyIElEIGlzIGFkZGVkIHRvIGluUHJvZ3Jlc3NUb29sVXNlSURzLiBTa2lwIHdoaWxlIHN0cmVhbWluZ1xuICAgICAgICAvLyB0byBhdm9pZCBicmllZmx5IGZpbmFsaXppbmcgdGhlIHJlYWQgZ3JvdXAuXG4gICAgICAgIGlmIChzdHJlYW1pbmdUb29sVXNlSURzLmhhcyhjb250ZW50LmlkKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChtc2c/LnR5cGUgPT09ICdzeXN0ZW0nIHx8IG1zZz8udHlwZSA9PT0gJ2F0dGFjaG1lbnQnKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICAvLyBUb29sIHJlc3VsdHMgYXJyaXZlIHdoaWxlIHRoZSBjb2xsYXBzZWQgZ3JvdXAgaXMgc3RpbGwgYmVpbmcgYnVpbHRcbiAgICBpZiAobXNnPy50eXBlID09PSAndXNlcicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50WzBdXG4gICAgICBpZiAoY29udGVudD8udHlwZSA9PT0gJ3Rvb2xfcmVzdWx0Jykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBDb2xsYXBzaWJsZSBncm91cGVkX3Rvb2xfdXNlIG1lc3NhZ2VzIGFycml2ZSB0cmFuc2llbnRseSBiZWZvcmUgYmVpbmdcbiAgICAvLyBtZXJnZWQgaW50byB0aGUgY3VycmVudCBjb2xsYXBzZWQgZ3JvdXAgb24gdGhlIG5leHQgcmVuZGVyIGN5Y2xlXG4gICAgaWYgKG1zZz8udHlwZSA9PT0gJ2dyb3VwZWRfdG9vbF91c2UnKSB7XG4gICAgICBjb25zdCBmaXJzdElucHV0ID0gbXNnLm1lc3NhZ2VzWzBdPy5tZXNzYWdlLmNvbnRlbnRbMF0/LmlucHV0XG4gICAgICBpZiAoXG4gICAgICAgIGdldFRvb2xTZWFyY2hPclJlYWRJbmZvKG1zZy50b29sTmFtZSwgZmlyc3RJbnB1dCwgdG9vbHMpLmlzQ29sbGFwc2libGVcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlUm93SW1wbCh7XG4gIG1lc3NhZ2U6IG1zZyxcbiAgaXNVc2VyQ29udGludWF0aW9uLFxuICBoYXNDb250ZW50QWZ0ZXIsXG4gIHRvb2xzLFxuICBjb21tYW5kcyxcbiAgdmVyYm9zZSxcbiAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMsXG4gIHN0cmVhbWluZ1Rvb2xVc2VJRHMsXG4gIHNjcmVlbixcbiAgY2FuQW5pbWF0ZSxcbiAgb25PcGVuUmF0ZUxpbWl0T3B0aW9ucyxcbiAgbGFzdFRoaW5raW5nQmxvY2tJZCxcbiAgbGF0ZXN0QmFzaE91dHB1dFVVSUQsXG4gIGNvbHVtbnMsXG4gIGlzTG9hZGluZyxcbiAgbG9va3Vwcyxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaXNUcmFuc2NyaXB0TW9kZSA9IHNjcmVlbiA9PT0gJ3RyYW5zY3JpcHQnXG4gIGNvbnN0IGlzR3JvdXBlZCA9IG1zZy50eXBlID09PSAnZ3JvdXBlZF90b29sX3VzZSdcbiAgY29uc3QgaXNDb2xsYXBzZWQgPSBtc2cudHlwZSA9PT0gJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCdcblxuICAvLyBBIGNvbGxhcHNlZCBncm91cCBpcyBcImFjdGl2ZVwiIChncmV5IGRvdCwgcHJlc2VudCB0ZW5zZSBcIlJlYWRpbmfigKZcIikgd2hlbiBpdHMgdG9vbHNcbiAgLy8gYXJlIHN0aWxsIGV4ZWN1dGluZyBPUiB3aGVuIHRoZSBvdmVyYWxsIHF1ZXJ5IGlzIHN0aWxsIHJ1bm5pbmcgd2l0aCBub3RoaW5nIGFmdGVyIGl0LlxuICAvLyBoYXNBbnlUb29sSW5Qcm9ncmVzcyB0YWtlcyBwcmlvcml0eTogaWYgdG9vbHMgYXJlIHJ1bm5pbmcsIGFsd2F5cyBzaG93IGFjdGl2ZSByZWdhcmRsZXNzXG4gIC8vIG9mIHdoYXQgZWxzZSBpcyBpbiB0aGUgbWVzc2FnZSBsaXN0IChhdm9pZHMgZmFsc2UgZmluYWxpemF0aW9uIGR1cmluZyBwYXJhbGxlbCBleGVjdXRpb24pLlxuICBjb25zdCBpc0FjdGl2ZUNvbGxhcHNlZEdyb3VwID1cbiAgICBpc0NvbGxhcHNlZCAmJlxuICAgIChoYXNBbnlUb29sSW5Qcm9ncmVzcyhtc2csIGluUHJvZ3Jlc3NUb29sVXNlSURzKSB8fFxuICAgICAgKGlzTG9hZGluZyAmJiAhaGFzQ29udGVudEFmdGVyKSlcblxuICBjb25zdCBkaXNwbGF5TXNnID0gaXNHcm91cGVkXG4gICAgPyBtc2cuZGlzcGxheU1lc3NhZ2VcbiAgICA6IGlzQ29sbGFwc2VkXG4gICAgICA/IGdldERpc3BsYXlNZXNzYWdlRnJvbUNvbGxhcHNlZChtc2cpXG4gICAgICA6IG1zZ1xuXG4gIGNvbnN0IHByb2dyZXNzTWVzc2FnZXNGb3JNZXNzYWdlID1cbiAgICBpc0dyb3VwZWQgfHwgaXNDb2xsYXBzZWQgPyBbXSA6IGdldFByb2dyZXNzTWVzc2FnZXNGcm9tTG9va3VwKG1zZywgbG9va3VwcylcblxuICBjb25zdCBzaWJsaW5nVG9vbFVzZUlEcyA9XG4gICAgaXNHcm91cGVkIHx8IGlzQ29sbGFwc2VkXG4gICAgICA/IEVNUFRZX1NUUklOR19TRVRcbiAgICAgIDogZ2V0U2libGluZ1Rvb2xVc2VJRHNGcm9tTG9va3VwKG1zZywgbG9va3VwcylcblxuICBjb25zdCBpc1N0YXRpYyA9IHNob3VsZFJlbmRlclN0YXRpY2FsbHkoXG4gICAgbXNnLFxuICAgIHN0cmVhbWluZ1Rvb2xVc2VJRHMsXG4gICAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMsXG4gICAgc2libGluZ1Rvb2xVc2VJRHMsXG4gICAgc2NyZWVuLFxuICAgIGxvb2t1cHMsXG4gIClcblxuICBsZXQgc2hvdWxkQW5pbWF0ZSA9IGZhbHNlXG4gIGlmIChjYW5BbmltYXRlKSB7XG4gICAgaWYgKGlzR3JvdXBlZCkge1xuICAgICAgc2hvdWxkQW5pbWF0ZSA9IG1zZy5tZXNzYWdlcy5zb21lKG0gPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbS5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjb250ZW50Py50eXBlID09PSAndG9vbF91c2UnICYmIGluUHJvZ3Jlc3NUb29sVXNlSURzLmhhcyhjb250ZW50LmlkKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNDb2xsYXBzZWQpIHtcbiAgICAgIHNob3VsZEFuaW1hdGUgPSBoYXNBbnlUb29sSW5Qcm9ncmVzcyhtc2csIGluUHJvZ3Jlc3NUb29sVXNlSURzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b29sVXNlSUQgPSBnZXRUb29sVXNlSUQobXNnKVxuICAgICAgc2hvdWxkQW5pbWF0ZSA9ICF0b29sVXNlSUQgfHwgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMuaGFzKHRvb2xVc2VJRClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYXNNZXRhZGF0YSA9XG4gICAgaXNUcmFuc2NyaXB0TW9kZSAmJlxuICAgIGRpc3BsYXlNc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiZcbiAgICBkaXNwbGF5TXNnLm1lc3NhZ2UuY29udGVudC5zb21lKGMgPT4gYy50eXBlID09PSAndGV4dCcpICYmXG4gICAgKGRpc3BsYXlNc2cudGltZXN0YW1wIHx8IGRpc3BsYXlNc2cubWVzc2FnZS5tb2RlbClcblxuICBjb25zdCBtZXNzYWdlRWwgPSAoXG4gICAgPE1lc3NhZ2VcbiAgICAgIG1lc3NhZ2U9e21zZ31cbiAgICAgIGxvb2t1cHM9e2xvb2t1cHN9XG4gICAgICBhZGRNYXJnaW49eyFoYXNNZXRhZGF0YX1cbiAgICAgIGNvbnRhaW5lcldpZHRoPXtoYXNNZXRhZGF0YSA/IHVuZGVmaW5lZCA6IGNvbHVtbnN9XG4gICAgICB0b29scz17dG9vbHN9XG4gICAgICBjb21tYW5kcz17Y29tbWFuZHN9XG4gICAgICB2ZXJib3NlPXt2ZXJib3NlfVxuICAgICAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHM9e2luUHJvZ3Jlc3NUb29sVXNlSURzfVxuICAgICAgcHJvZ3Jlc3NNZXNzYWdlc0Zvck1lc3NhZ2U9e3Byb2dyZXNzTWVzc2FnZXNGb3JNZXNzYWdlfVxuICAgICAgc2hvdWxkQW5pbWF0ZT17c2hvdWxkQW5pbWF0ZX1cbiAgICAgIHNob3VsZFNob3dEb3Q9e3RydWV9XG4gICAgICBpc1RyYW5zY3JpcHRNb2RlPXtpc1RyYW5zY3JpcHRNb2RlfVxuICAgICAgaXNTdGF0aWM9e2lzU3RhdGljfVxuICAgICAgb25PcGVuUmF0ZUxpbWl0T3B0aW9ucz17b25PcGVuUmF0ZUxpbWl0T3B0aW9uc31cbiAgICAgIGlzQWN0aXZlQ29sbGFwc2VkR3JvdXA9e2lzQWN0aXZlQ29sbGFwc2VkR3JvdXB9XG4gICAgICBpc1VzZXJDb250aW51YXRpb249e2lzVXNlckNvbnRpbnVhdGlvbn1cbiAgICAgIGxhc3RUaGlua2luZ0Jsb2NrSWQ9e2xhc3RUaGlua2luZ0Jsb2NrSWR9XG4gICAgICBsYXRlc3RCYXNoT3V0cHV0VVVJRD17bGF0ZXN0QmFzaE91dHB1dFVVSUR9XG4gICAgLz5cbiAgKVxuICAvLyBPZmZzY3JlZW5GcmVlemU6IHRoZSBvdXRlciBSZWFjdC5tZW1vIGFscmVhZHkgYmFpbHMgZm9yIHN0YXRpYyBtZXNzYWdlcyxcbiAgLy8gc28gdGhpcyBvbmx5IHdyYXBzIHJvd3MgdGhhdCBETyByZS1yZW5kZXIg4oCUIGluLXByb2dyZXNzIHRvb2xzLCBjb2xsYXBzZWRcbiAgLy8gcmVhZC9zZWFyY2ggc3Bpbm5lcnMsIGJhc2ggZWxhcHNlZCB0aW1lcnMuIFdoZW4gdGhvc2Ugcm93cyBoYXZlIHNjcm9sbGVkXG4gIC8vIGludG8gdGVybWluYWwgc2Nyb2xsYmFjayAobm9uLWZ1bGxzY3JlZW4gZXh0ZXJuYWwgYnVpbGRzKSwgYW55IGNvbnRlbnRcbiAgLy8gY2hhbmdlIGZvcmNlcyBsb2ctdXBkYXRlLnRzIGludG8gYSBmdWxsIHRlcm1pbmFsIHJlc2V0IHBlciB0aWNrLiBGcmVlemluZ1xuICAvLyByZXR1cm5zIHRoZSBjYWNoZWQgZWxlbWVudCByZWYgc28gUmVhY3QgYmFpbHMgYW5kIHByb2R1Y2VzIHplcm8gZGlmZi5cbiAgaWYgKCFoYXNNZXRhZGF0YSkge1xuICAgIHJldHVybiA8T2Zmc2NyZWVuRnJlZXplPnttZXNzYWdlRWx9PC9PZmZzY3JlZW5GcmVlemU+XG4gIH1cbiAgLy8gTWFyZ2luIG9uIGNoaWxkcmVuLCBub3QgaGVyZSDigJQgZWxzZSBudWxsIGl0ZW1zIChob29rX3N1Y2Nlc3MgZXRjLikgZ2V0IHBoYW50b20gMS1yb3cgc3BhY2luZy5cbiAgcmV0dXJuIChcbiAgICA8T2Zmc2NyZWVuRnJlZXplPlxuICAgICAgPEJveCB3aWR0aD17Y29sdW1uc30gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgZ2FwPXsxfVxuICAgICAgICAgIG1hcmdpblRvcD17MX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlVGltZXN0YW1wXG4gICAgICAgICAgICBtZXNzYWdlPXtkaXNwbGF5TXNnfVxuICAgICAgICAgICAgaXNUcmFuc2NyaXB0TW9kZT17aXNUcmFuc2NyaXB0TW9kZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZXNzYWdlTW9kZWxcbiAgICAgICAgICAgIG1lc3NhZ2U9e2Rpc3BsYXlNc2d9XG4gICAgICAgICAgICBpc1RyYW5zY3JpcHRNb2RlPXtpc1RyYW5zY3JpcHRNb2RlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7bWVzc2FnZUVsfVxuICAgICAgPC9Cb3g+XG4gICAgPC9PZmZzY3JlZW5GcmVlemU+XG4gIClcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtZXNzYWdlIGlzIFwic3RyZWFtaW5nXCIgLSBpLmUuLCBpdHMgY29udGVudCBtYXkgc3RpbGwgYmUgY2hhbmdpbmcuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZVN0cmVhbWluZyhcbiAgbXNnOiBSZW5kZXJhYmxlTWVzc2FnZSxcbiAgc3RyZWFtaW5nVG9vbFVzZUlEczogU2V0PHN0cmluZz4sXG4pOiBib29sZWFuIHtcbiAgaWYgKG1zZy50eXBlID09PSAnZ3JvdXBlZF90b29sX3VzZScpIHtcbiAgICByZXR1cm4gbXNnLm1lc3NhZ2VzLnNvbWUobSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbS5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgIHJldHVybiBjb250ZW50Py50eXBlID09PSAndG9vbF91c2UnICYmIHN0cmVhbWluZ1Rvb2xVc2VJRHMuaGFzKGNvbnRlbnQuaWQpXG4gICAgfSlcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09ICdjb2xsYXBzZWRfcmVhZF9zZWFyY2gnKSB7XG4gICAgY29uc3QgdG9vbElkcyA9IGdldFRvb2xVc2VJZHNGcm9tQ29sbGFwc2VkR3JvdXAobXNnKVxuICAgIHJldHVybiB0b29sSWRzLnNvbWUoaWQgPT4gc3RyZWFtaW5nVG9vbFVzZUlEcy5oYXMoaWQpKVxuICB9XG4gIGNvbnN0IHRvb2xVc2VJRCA9IGdldFRvb2xVc2VJRChtc2cpXG4gIHJldHVybiAhIXRvb2xVc2VJRCAmJiBzdHJlYW1pbmdUb29sVXNlSURzLmhhcyh0b29sVXNlSUQpXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFsbCB0b29scyBpbiBhIG1lc3NhZ2UgYXJlIHJlc29sdmVkLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxUb29sc1Jlc29sdmVkKFxuICBtc2c6IFJlbmRlcmFibGVNZXNzYWdlLFxuICByZXNvbHZlZFRvb2xVc2VJRHM6IFNldDxzdHJpbmc+LFxuKTogYm9vbGVhbiB7XG4gIGlmIChtc2cudHlwZSA9PT0gJ2dyb3VwZWRfdG9vbF91c2UnKSB7XG4gICAgcmV0dXJuIG1zZy5tZXNzYWdlcy5ldmVyeShtID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtLm1lc3NhZ2UuY29udGVudFswXVxuICAgICAgcmV0dXJuIGNvbnRlbnQ/LnR5cGUgPT09ICd0b29sX3VzZScgJiYgcmVzb2x2ZWRUb29sVXNlSURzLmhhcyhjb250ZW50LmlkKVxuICAgIH0pXG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJykge1xuICAgIGNvbnN0IHRvb2xJZHMgPSBnZXRUb29sVXNlSWRzRnJvbUNvbGxhcHNlZEdyb3VwKG1zZylcbiAgICByZXR1cm4gdG9vbElkcy5ldmVyeShpZCA9PiByZXNvbHZlZFRvb2xVc2VJRHMuaGFzKGlkKSlcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgY29uc3QgYmxvY2sgPSBtc2cubWVzc2FnZS5jb250ZW50WzBdXG4gICAgaWYgKGJsb2NrPy50eXBlID09PSAnc2VydmVyX3Rvb2xfdXNlJykge1xuICAgICAgcmV0dXJuIHJlc29sdmVkVG9vbFVzZUlEcy5oYXMoYmxvY2suaWQpXG4gICAgfVxuICB9XG4gIGNvbnN0IHRvb2xVc2VJRCA9IGdldFRvb2xVc2VJRChtc2cpXG4gIHJldHVybiAhdG9vbFVzZUlEIHx8IHJlc29sdmVkVG9vbFVzZUlEcy5oYXModG9vbFVzZUlEKVxufVxuXG4vKipcbiAqIENvbnNlcnZhdGl2ZSBtZW1vIGNvbXBhcmF0b3IgdGhhdCBvbmx5IGJhaWxzIG91dCB3aGVuIHdlJ3JlIENFUlRBSU5cbiAqIHRoZSBtZXNzYWdlIHdvbid0IGNoYW5nZS4gRmFpbHMgc2FmZSBieSByZS1yZW5kZXJpbmcgd2hlbiB1bmNlcnRhaW4uXG4gKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVNZXNzYWdlUm93UHJvcHNFcXVhbChwcmV2OiBQcm9wcywgbmV4dDogUHJvcHMpOiBib29sZWFuIHtcbiAgLy8gRGlmZmVyZW50IG1lc3NhZ2UgcmVmZXJlbmNlID0gY29udGVudCBtYXkgaGF2ZSBjaGFuZ2VkLCBtdXN0IHJlLXJlbmRlclxuICBpZiAocHJldi5tZXNzYWdlICE9PSBuZXh0Lm1lc3NhZ2UpIHJldHVybiBmYWxzZVxuXG4gIC8vIFNjcmVlbiBtb2RlIGNoYW5nZSA9IHJlLXJlbmRlclxuICBpZiAocHJldi5zY3JlZW4gIT09IG5leHQuc2NyZWVuKSByZXR1cm4gZmFsc2VcblxuICAvLyBWZXJib3NlIHRvZ2dsZSBjaGFuZ2VzIHRoaW5raW5nIGJsb2NrIHZpc2liaWxpdHlcbiAgaWYgKHByZXYudmVyYm9zZSAhPT0gbmV4dC52ZXJib3NlKSByZXR1cm4gZmFsc2VcblxuICAvLyBjb2xsYXBzZWRfcmVhZF9zZWFyY2ggaXMgbmV2ZXIgc3RhdGljIGluIHByb21wdCBtb2RlIChtYXRjaGVzIHNob3VsZFJlbmRlclN0YXRpY2FsbHkpXG4gIGlmIChcbiAgICBwcmV2Lm1lc3NhZ2UudHlwZSA9PT0gJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCcgJiZcbiAgICBuZXh0LnNjcmVlbiAhPT0gJ3RyYW5zY3JpcHQnXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gV2lkdGggY2hhbmdlIGFmZmVjdHMgQm94IGxheW91dFxuICBpZiAocHJldi5jb2x1bW5zICE9PSBuZXh0LmNvbHVtbnMpIHJldHVybiBmYWxzZVxuXG4gIC8vIGxhdGVzdEJhc2hPdXRwdXRVVUlEIGFmZmVjdHMgcmVuZGVyaW5nIChmdWxsIHZzIHRydW5jYXRlZCBvdXRwdXQpXG4gIGNvbnN0IHByZXZJc0xhdGVzdEJhc2ggPSBwcmV2LmxhdGVzdEJhc2hPdXRwdXRVVUlEID09PSBwcmV2Lm1lc3NhZ2UudXVpZFxuICBjb25zdCBuZXh0SXNMYXRlc3RCYXNoID0gbmV4dC5sYXRlc3RCYXNoT3V0cHV0VVVJRCA9PT0gbmV4dC5tZXNzYWdlLnV1aWRcbiAgaWYgKHByZXZJc0xhdGVzdEJhc2ggIT09IG5leHRJc0xhdGVzdEJhc2gpIHJldHVybiBmYWxzZVxuXG4gIC8vIGxhc3RUaGlua2luZ0Jsb2NrSWQgYWZmZWN0cyB0aGlua2luZyBibG9jayB2aXNpYmlsaXR5IOKAlCBidXQgb25seSBmb3JcbiAgLy8gbWVzc2FnZXMgdGhhdCBIQVZFIHRoaW5raW5nIGNvbnRlbnQuIENoZWNraW5nIHVuY29uZGl0aW9uYWxseSBidXN0cyB0aGVcbiAgLy8gbWVtbyBmb3IgZXZlcnkgc2Nyb2xsYmFjayBtZXNzYWdlIHdoZW5ldmVyIHRoaW5raW5nIHN0YXJ0cy9zdG9wcyAoQ0MtOTQxKS5cbiAgaWYgKFxuICAgIHByZXYubGFzdFRoaW5raW5nQmxvY2tJZCAhPT0gbmV4dC5sYXN0VGhpbmtpbmdCbG9ja0lkICYmXG4gICAgaGFzVGhpbmtpbmdDb250ZW50KG5leHQubWVzc2FnZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGlzIG1lc3NhZ2UgaXMgc3RpbGwgXCJpbiBmbGlnaHRcIlxuICBjb25zdCBpc1N0cmVhbWluZyA9IGlzTWVzc2FnZVN0cmVhbWluZyhwcmV2Lm1lc3NhZ2UsIHByZXYuc3RyZWFtaW5nVG9vbFVzZUlEcylcbiAgY29uc3QgaXNSZXNvbHZlZCA9IGFsbFRvb2xzUmVzb2x2ZWQoXG4gICAgcHJldi5tZXNzYWdlLFxuICAgIHByZXYubG9va3Vwcy5yZXNvbHZlZFRvb2xVc2VJRHMsXG4gIClcblxuICAvLyBPbmx5IGJhaWwgb3V0IGZvciB0cnVseSBzdGF0aWMgbWVzc2FnZXNcbiAgaWYgKGlzU3RyZWFtaW5nIHx8ICFpc1Jlc29sdmVkKSByZXR1cm4gZmFsc2VcblxuICAvLyBTdGF0aWMgbWVzc2FnZSAtIHNhZmUgdG8gc2tpcCByZS1yZW5kZXJcbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VSb3cgPSBSZWFjdC5tZW1vKE1lc3NhZ2VSb3dJbXBsLCBhcmVNZXNzYWdlUm93UHJvcHNFcXVhbClcbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZ2V0TGFyZ2VNZW1vcnlGaWxlcyxcbiAgTUFYX01FTU9SWV9DSEFSQUNURVJfQ09VTlQsXG4gIHR5cGUgTWVtb3J5RmlsZUluZm8sXG59IGZyb20gJy4vY2xhdWRlbWQuanMnXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi9jd2QuanMnXG5pbXBvcnQgeyByZWxhdGl2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tICcuL2Zvcm1hdC5qcydcbmltcG9ydCB0eXBlIHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQge1xuICBnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlLFxuICBnZXRBcGlLZXlGcm9tQ29uZmlnT3JNYWNPU0tleWNoYWluLFxuICBnZXRBdXRoVG9rZW5Tb3VyY2UsXG4gIGlzQ2xhdWRlQUlTdWJzY3JpYmVyLFxufSBmcm9tICcuL2F1dGguanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7XG4gIGdldEFnZW50RGVzY3JpcHRpb25zVG90YWxUb2tlbnMsXG4gIEFHRU5UX0RFU0NSSVBUSU9OU19USFJFU0hPTEQsXG59IGZyb20gJy4vc3RhdHVzTm90aWNlSGVscGVycy5qcydcbmltcG9ydCB7XG4gIGlzU3VwcG9ydGVkSmV0QnJhaW5zVGVybWluYWwsXG4gIHRvSURFRGlzcGxheU5hbWUsXG4gIGdldFRlcm1pbmFsSWRlVHlwZSxcbn0gZnJvbSAnLi9pZGUuanMnXG5pbXBvcnQgeyBpc0pldEJyYWluc1BsdWdpbkluc3RhbGxlZENhY2hlZFN5bmMgfSBmcm9tICcuL2pldGJyYWlucy5qcydcblxuLy8gVHlwZXNcbmV4cG9ydCB0eXBlIFN0YXR1c05vdGljZVR5cGUgPSAnd2FybmluZycgfCAnaW5mbydcblxuZXhwb3J0IHR5cGUgU3RhdHVzTm90aWNlQ29udGV4dCA9IHtcbiAgY29uZmlnOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRHbG9iYWxDb25maWc+XG4gIGFnZW50RGVmaW5pdGlvbnM/OiBBZ2VudERlZmluaXRpb25zUmVzdWx0XG4gIG1lbW9yeUZpbGVzOiBNZW1vcnlGaWxlSW5mb1tdXG59XG5cbmV4cG9ydCB0eXBlIFN0YXR1c05vdGljZURlZmluaXRpb24gPSB7XG4gIGlkOiBzdHJpbmdcbiAgdHlwZTogU3RhdHVzTm90aWNlVHlwZVxuICBpc0FjdGl2ZTogKGNvbnRleHQ6IFN0YXR1c05vdGljZUNvbnRleHQpID0+IGJvb2xlYW5cbiAgcmVuZGVyOiAoY29udGV4dDogU3RhdHVzTm90aWNlQ29udGV4dCkgPT4gUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8vIEluZGl2aWR1YWwgbm90aWNlIGRlZmluaXRpb25zXG5jb25zdCBsYXJnZU1lbW9yeUZpbGVzTm90aWNlOiBTdGF0dXNOb3RpY2VEZWZpbml0aW9uID0ge1xuICBpZDogJ2xhcmdlLW1lbW9yeS1maWxlcycsXG4gIHR5cGU6ICd3YXJuaW5nJyxcbiAgaXNBY3RpdmU6IGN0eCA9PiBnZXRMYXJnZU1lbW9yeUZpbGVzKGN0eC5tZW1vcnlGaWxlcykubGVuZ3RoID4gMCxcbiAgcmVuZGVyOiBjdHggPT4ge1xuICAgIGNvbnN0IGxhcmdlTWVtb3J5RmlsZXMgPSBnZXRMYXJnZU1lbW9yeUZpbGVzKGN0eC5tZW1vcnlGaWxlcylcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xhcmdlTWVtb3J5RmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpc3BsYXlQYXRoID0gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoZ2V0Q3dkKCkpXG4gICAgICAgICAgICA/IHJlbGF0aXZlKGdldEN3ZCgpLCBmaWxlLnBhdGgpXG4gICAgICAgICAgICA6IGZpbGUucGF0aFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3gga2V5PXtmaWxlLnBhdGh9IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+e2ZpZ3VyZXMud2FybmluZ308L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIExhcmdlIDxUZXh0IGJvbGQ+e2Rpc3BsYXlQYXRofTwvVGV4dD4gd2lsbCBpbXBhY3QgcGVyZm9ybWFuY2UgKFxuICAgICAgICAgICAgICAgIHtmb3JtYXROdW1iZXIoZmlsZS5jb250ZW50Lmxlbmd0aCl9IGNoYXJzICZndDt7JyAnfVxuICAgICAgICAgICAgICAgIHtmb3JtYXROdW1iZXIoTUFYX01FTU9SWV9DSEFSQUNURVJfQ09VTlQpfSlcbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgL21lbW9yeSB0byBlZGl0PC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgKVxuICB9LFxufVxuXG5jb25zdCBjbGF1ZGVBaVN1YnNjcmliZXJFeHRlcm5hbFRva2VuTm90aWNlOiBTdGF0dXNOb3RpY2VEZWZpbml0aW9uID0ge1xuICBpZDogJ2NsYXVkZS1haS1leHRlcm5hbC10b2tlbicsXG4gIHR5cGU6ICd3YXJuaW5nJyxcbiAgaXNBY3RpdmU6ICgpID0+IHtcbiAgICBjb25zdCBhdXRoVG9rZW5JbmZvID0gZ2V0QXV0aFRva2VuU291cmNlKClcbiAgICByZXR1cm4gKFxuICAgICAgaXNDbGF1ZGVBSVN1YnNjcmliZXIoKSAmJlxuICAgICAgKGF1dGhUb2tlbkluZm8uc291cmNlID09PSAnQU5USFJPUElDX0FVVEhfVE9LRU4nIHx8XG4gICAgICAgIGF1dGhUb2tlbkluZm8uc291cmNlID09PSAnYXBpS2V5SGVscGVyJylcbiAgICApXG4gIH0sXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhUb2tlbkluZm8gPSBnZXRBdXRoVG9rZW5Tb3VyY2UoKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj57ZmlndXJlcy53YXJuaW5nfTwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgQXV0aCBjb25mbGljdDogVXNpbmcge2F1dGhUb2tlbkluZm8uc291cmNlfSBpbnN0ZWFkIG9mIENsYXVkZSBhY2NvdW50XG4gICAgICAgICAgc3Vic2NyaXB0aW9uIHRva2VuLiBFaXRoZXIgdW5zZXQge2F1dGhUb2tlbkluZm8uc291cmNlfSwgb3IgcnVuXG4gICAgICAgICAgYGNsYXVkZSAvbG9nb3V0YC5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9LFxufVxuXG5jb25zdCBhcGlLZXlDb25mbGljdE5vdGljZTogU3RhdHVzTm90aWNlRGVmaW5pdGlvbiA9IHtcbiAgaWQ6ICdhcGkta2V5LWNvbmZsaWN0JyxcbiAgdHlwZTogJ3dhcm5pbmcnLFxuICBpc0FjdGl2ZTogKCkgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlOiBhcGlLZXlTb3VyY2UgfSA9IGdldEFudGhyb3BpY0FwaUtleVdpdGhTb3VyY2Uoe1xuICAgICAgc2tpcFJldHJpZXZpbmdLZXlGcm9tQXBpS2V5SGVscGVyOiB0cnVlLFxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICEhZ2V0QXBpS2V5RnJvbUNvbmZpZ09yTWFjT1NLZXljaGFpbigpICYmXG4gICAgICAoYXBpS2V5U291cmNlID09PSAnQU5USFJPUElDX0FQSV9LRVknIHx8IGFwaUtleVNvdXJjZSA9PT0gJ2FwaUtleUhlbHBlcicpXG4gICAgKVxuICB9LFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZTogYXBpS2V5U291cmNlIH0gPSBnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlKHtcbiAgICAgIHNraXBSZXRyaWV2aW5nS2V5RnJvbUFwaUtleUhlbHBlcjogdHJ1ZSxcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj57ZmlndXJlcy53YXJuaW5nfTwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgQXV0aCBjb25mbGljdDogVXNpbmcge2FwaUtleVNvdXJjZX0gaW5zdGVhZCBvZiBBbnRocm9waWMgQ29uc29sZSBrZXkuXG4gICAgICAgICAgRWl0aGVyIHVuc2V0IHthcGlLZXlTb3VyY2V9LCBvciBydW4gYGNsYXVkZSAvbG9nb3V0YC5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9LFxufVxuXG5jb25zdCBib3RoQXV0aE1ldGhvZHNOb3RpY2U6IFN0YXR1c05vdGljZURlZmluaXRpb24gPSB7XG4gIGlkOiAnYm90aC1hdXRoLW1ldGhvZHMnLFxuICB0eXBlOiAnd2FybmluZycsXG4gIGlzQWN0aXZlOiAoKSA9PiB7XG4gICAgY29uc3QgeyBzb3VyY2U6IGFwaUtleVNvdXJjZSB9ID0gZ2V0QW50aHJvcGljQXBpS2V5V2l0aFNvdXJjZSh7XG4gICAgICBza2lwUmV0cmlldmluZ0tleUZyb21BcGlLZXlIZWxwZXI6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBhdXRoVG9rZW5JbmZvID0gZ2V0QXV0aFRva2VuU291cmNlKClcbiAgICByZXR1cm4gKFxuICAgICAgYXBpS2V5U291cmNlICE9PSAnbm9uZScgJiZcbiAgICAgIGF1dGhUb2tlbkluZm8uc291cmNlICE9PSAnbm9uZScgJiZcbiAgICAgICEoXG4gICAgICAgIGFwaUtleVNvdXJjZSA9PT0gJ2FwaUtleUhlbHBlcicgJiZcbiAgICAgICAgYXV0aFRva2VuSW5mby5zb3VyY2UgPT09ICdhcGlLZXlIZWxwZXInXG4gICAgICApXG4gICAgKVxuICB9LFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZTogYXBpS2V5U291cmNlIH0gPSBnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlKHtcbiAgICAgIHNraXBSZXRyaWV2aW5nS2V5RnJvbUFwaUtleUhlbHBlcjogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IGF1dGhUb2tlbkluZm8gPSBnZXRBdXRoVG9rZW5Tb3VyY2UoKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj57ZmlndXJlcy53YXJuaW5nfTwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIEF1dGggY29uZmxpY3Q6IEJvdGggYSB0b2tlbiAoe2F1dGhUb2tlbkluZm8uc291cmNlfSkgYW5kIGFuIEFQSSBrZXlcbiAgICAgICAgICAgICh7YXBpS2V5U291cmNlfSkgYXJlIHNldC4gVGhpcyBtYXkgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9yLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkxlZnQ9ezN9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgwrcgVHJ5aW5nIHRvIHVzZXsnICd9XG4gICAgICAgICAgICB7YXV0aFRva2VuSW5mby5zb3VyY2UgPT09ICdjbGF1ZGUuYWknXG4gICAgICAgICAgICAgID8gJ2NsYXVkZS5haSdcbiAgICAgICAgICAgICAgOiBhdXRoVG9rZW5JbmZvLnNvdXJjZX1cbiAgICAgICAgICAgID97JyAnfVxuICAgICAgICAgICAge2FwaUtleVNvdXJjZSA9PT0gJ0FOVEhST1BJQ19BUElfS0VZJ1xuICAgICAgICAgICAgICA/ICdVbnNldCB0aGUgQU5USFJPUElDX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUsIG9yIGNsYXVkZSAvbG9nb3V0IHRoZW4gc2F5IFwiTm9cIiB0byB0aGUgQVBJIGtleSBhcHByb3ZhbCBiZWZvcmUgbG9naW4uJ1xuICAgICAgICAgICAgICA6IGFwaUtleVNvdXJjZSA9PT0gJ2FwaUtleUhlbHBlcidcbiAgICAgICAgICAgICAgICA/ICdVbnNldCB0aGUgYXBpS2V5SGVscGVyIHNldHRpbmcuJ1xuICAgICAgICAgICAgICAgIDogJ2NsYXVkZSAvbG9nb3V0J31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICDCtyBUcnlpbmcgdG8gdXNlIHthcGlLZXlTb3VyY2V9P3snICd9XG4gICAgICAgICAgICB7YXV0aFRva2VuSW5mby5zb3VyY2UgPT09ICdjbGF1ZGUuYWknXG4gICAgICAgICAgICAgID8gJ2NsYXVkZSAvbG9nb3V0IHRvIHNpZ24gb3V0IG9mIGNsYXVkZS5haS4nXG4gICAgICAgICAgICAgIDogYFVuc2V0IHRoZSAke2F1dGhUb2tlbkluZm8uc291cmNlfSBlbnZpcm9ubWVudCB2YXJpYWJsZS5gfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0sXG59XG5cbmNvbnN0IGxhcmdlQWdlbnREZXNjcmlwdGlvbnNOb3RpY2U6IFN0YXR1c05vdGljZURlZmluaXRpb24gPSB7XG4gIGlkOiAnbGFyZ2UtYWdlbnQtZGVzY3JpcHRpb25zJyxcbiAgdHlwZTogJ3dhcm5pbmcnLFxuICBpc0FjdGl2ZTogY29udGV4dCA9PiB7XG4gICAgY29uc3QgdG90YWxUb2tlbnMgPSBnZXRBZ2VudERlc2NyaXB0aW9uc1RvdGFsVG9rZW5zKFxuICAgICAgY29udGV4dC5hZ2VudERlZmluaXRpb25zLFxuICAgIClcbiAgICByZXR1cm4gdG90YWxUb2tlbnMgPiBBR0VOVF9ERVNDUklQVElPTlNfVEhSRVNIT0xEXG4gIH0sXG4gIHJlbmRlcjogY29udGV4dCA9PiB7XG4gICAgY29uc3QgdG90YWxUb2tlbnMgPSBnZXRBZ2VudERlc2NyaXB0aW9uc1RvdGFsVG9rZW5zKFxuICAgICAgY29udGV4dC5hZ2VudERlZmluaXRpb25zLFxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPntmaWd1cmVzLndhcm5pbmd9PC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICBMYXJnZSBjdW11bGF0aXZlIGFnZW50IGRlc2NyaXB0aW9ucyB3aWxsIGltcGFjdCBwZXJmb3JtYW5jZSAoflxuICAgICAgICAgIHtmb3JtYXROdW1iZXIodG90YWxUb2tlbnMpfSB0b2tlbnMgJmd0O3snICd9XG4gICAgICAgICAge2Zvcm1hdE51bWJlcihBR0VOVF9ERVNDUklQVElPTlNfVEhSRVNIT0xEKX0pXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IMK3IC9hZ2VudHMgdG8gbWFuYWdlPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0sXG59XG5cbmNvbnN0IGpldGJyYWluc1BsdWdpbk5vdGljZTogU3RhdHVzTm90aWNlRGVmaW5pdGlvbiA9IHtcbiAgaWQ6ICdqZXRicmFpbnMtcGx1Z2luLWluc3RhbGwnLFxuICB0eXBlOiAnaW5mbycsXG4gIGlzQWN0aXZlOiBjb250ZXh0ID0+IHtcbiAgICAvLyBPbmx5IHNob3cgaWYgcnVubmluZyBpbiBKZXRCcmFpbnMgYnVpbHQtaW4gdGVybWluYWxcbiAgICBpZiAoIWlzU3VwcG9ydGVkSmV0QnJhaW5zVGVybWluYWwoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIERvbid0IHNob3cgaWYgYXV0by1pbnN0YWxsIGlzIGRpc2FibGVkXG4gICAgY29uc3Qgc2hvdWxkQXV0b0luc3RhbGwgPSBjb250ZXh0LmNvbmZpZy5hdXRvSW5zdGFsbElkZUV4dGVuc2lvbiA/PyB0cnVlXG4gICAgaWYgKCFzaG91bGRBdXRvSW5zdGFsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHBsdWdpbiBpcyBhbHJlYWR5IGluc3RhbGxlZCAoY2FjaGVkIHRvIGF2b2lkIHJlcGVhdGVkIGZpbGVzeXN0ZW0gY2hlY2tzKVxuICAgIGNvbnN0IGlkZVR5cGUgPSBnZXRUZXJtaW5hbElkZVR5cGUoKVxuICAgIHJldHVybiBpZGVUeXBlICE9PSBudWxsICYmICFpc0pldEJyYWluc1BsdWdpbkluc3RhbGxlZENhY2hlZFN5bmMoaWRlVHlwZSlcbiAgfSxcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgY29uc3QgaWRlVHlwZSA9IGdldFRlcm1pbmFsSWRlVHlwZSgpXG4gICAgY29uc3QgaWRlTmFtZSA9IHRvSURFRGlzcGxheU5hbWUoaWRlVHlwZSlcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsxfSBtYXJnaW5MZWZ0PXsxfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJpZGVcIj57ZmlndXJlcy5hcnJvd1VwfTwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgSW5zdGFsbCB0aGUgPFRleHQgY29sb3I9XCJpZGVcIj57aWRlTmFtZX08L1RleHQ+IHBsdWdpbiBmcm9tIHRoZVxuICAgICAgICAgIEpldEJyYWlucyBNYXJrZXRwbGFjZTp7JyAnfVxuICAgICAgICAgIDxUZXh0IGJvbGQ+aHR0cHM6Ly9kb2NzLmNsYXVkZS5jb20vcy9jbGF1ZGUtY29kZS1qZXRicmFpbnM8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSxcbn1cblxuXG4vLyBBbGwgbm90aWNlIGRlZmluaXRpb25zXG5leHBvcnQgY29uc3Qgc3RhdHVzTm90aWNlRGVmaW5pdGlvbnM6IFN0YXR1c05vdGljZURlZmluaXRpb25bXSA9IFtcbiAgbGFyZ2VNZW1vcnlGaWxlc05vdGljZSxcbiAgbGFyZ2VBZ2VudERlc2NyaXB0aW9uc05vdGljZSxcbiAgY2xhdWRlQWlTdWJzY3JpYmVyRXh0ZXJuYWxUb2tlbk5vdGljZSxcbiAgYXBpS2V5Q29uZmxpY3ROb3RpY2UsXG4gIGJvdGhBdXRoTWV0aG9kc05vdGljZSxcbiAgamV0YnJhaW5zUGx1Z2luTm90aWNlLFxuXVxuXG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciBleHRlcm5hbCB1c2VcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVOb3RpY2VzKFxuICBjb250ZXh0OiBTdGF0dXNOb3RpY2VDb250ZXh0LFxuKTogU3RhdHVzTm90aWNlRGVmaW5pdGlvbltdIHtcbiAgcmV0dXJuIHN0YXR1c05vdGljZURlZmluaXRpb25zLmZpbHRlcihub3RpY2UgPT4gbm90aWNlLmlzQWN0aXZlKGNvbnRleHQpKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGdldE1lbW9yeUZpbGVzIH0gZnJvbSAnLi4vdXRpbHMvY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQge1xuICBnZXRBY3RpdmVOb3RpY2VzLFxuICB0eXBlIFN0YXR1c05vdGljZUNvbnRleHQsXG59IGZyb20gJy4uL3V0aWxzL3N0YXR1c05vdGljZURlZmluaXRpb25zLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBhZ2VudERlZmluaXRpb25zPzogQWdlbnREZWZpbml0aW9uc1Jlc3VsdFxufVxuXG4vKipcbiAqIFN0YXR1c05vdGljZXMgY29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGRpc3BsYXllZCB0byB1c2VycyBhdCBzdGFydHVwLiBXZSBoYXZlXG4gKiBtb3ZlZCBuZXV0cmFsIG9yIHBvc2l0aXZlIHN0YXR1cyB0byBzcmMvY29tcG9uZW50cy9TdGF0dXMudHN4IGluc3RlYWQsIHdoaWNoXG4gKiB1c2VycyBjYW4gYWNjZXNzIHRocm91Z2ggL3N0YXR1cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YXR1c05vdGljZXMoe1xuICBhZ2VudERlZmluaXRpb25zLFxufTogUHJvcHMgPSB7fSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGNvbnRleHQ6IFN0YXR1c05vdGljZUNvbnRleHQgPSB7XG4gICAgY29uZmlnOiBnZXRHbG9iYWxDb25maWcoKSxcbiAgICBhZ2VudERlZmluaXRpb25zLFxuICAgIG1lbW9yeUZpbGVzOiB1c2UoZ2V0TWVtb3J5RmlsZXMoKSksXG4gIH1cbiAgY29uc3QgYWN0aXZlTm90aWNlcyA9IGdldEFjdGl2ZU5vdGljZXMoY29udGV4dClcbiAgaWYgKGFjdGl2ZU5vdGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ0xlZnQ9ezF9PlxuICAgICAge2FjdGl2ZU5vdGljZXMubWFwKG5vdGljZSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25vdGljZS5pZH0+XG4gICAgICAgICAge25vdGljZS5yZW5kZXIoY29udGV4dCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlRGVmZXJyZWRWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgU2Nyb2xsQm94SGFuZGxlIH0gZnJvbSAnLi4vaW5rL2NvbXBvbmVudHMvU2Nyb2xsQm94LmpzJ1xuaW1wb3J0IHR5cGUgeyBET01FbGVtZW50IH0gZnJvbSAnLi4vaW5rL2RvbS5qcydcblxuLyoqXG4gKiBFc3RpbWF0ZWQgaGVpZ2h0IChyb3dzKSBmb3IgaXRlbXMgbm90IHlldCBtZWFzdXJlZC4gSW50ZW50aW9uYWxseSBMT1c6XG4gKiBvdmVyZXN0aW1hdGluZyBjYXVzZXMgYmxhbmsgc3BhY2UgKHdlIHN0b3AgbW91bnRpbmcgdG9vIGVhcmx5IGFuZCB0aGVcbiAqIHZpZXdwb3J0IGJvdHRvbSBzaG93cyBlbXB0eSBzcGFjZXIpLCB3aGlsZSB1bmRlcmVzdGltYXRpbmcganVzdCBtb3VudHNcbiAqIGEgZmV3IGV4dHJhIGl0ZW1zIGludG8gb3ZlcnNjYW4uIFRoZSBhc3ltbWV0cnkgbWVhbnMgd2UnZCByYXRoZXIgZXJyIGxvdy5cbiAqL1xuY29uc3QgREVGQVVMVF9FU1RJTUFURSA9IDNcbi8qKlxuICogRXh0cmEgcm93cyByZW5kZXJlZCBhYm92ZSBhbmQgYmVsb3cgdGhlIHZpZXdwb3J0LiBHZW5lcm91cyBiZWNhdXNlIHJlYWxcbiAqIGhlaWdodHMgY2FuIGJlIDEweCB0aGUgZXN0aW1hdGUgZm9yIGxvbmcgdG9vbCByZXN1bHRzLlxuICovXG5jb25zdCBPVkVSU0NBTl9ST1dTID0gODBcbi8qKiBJdGVtcyByZW5kZXJlZCBiZWZvcmUgdGhlIFNjcm9sbEJveCBoYXMgbGFpZCBvdXQgKHZpZXdwb3J0SGVpZ2h0PTApLiAqL1xuY29uc3QgQ09MRF9TVEFSVF9DT1VOVCA9IDMwXG4vKipcbiAqIHNjcm9sbFRvcCBxdWFudGl6YXRpb24gZm9yIHRoZSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBzbmFwc2hvdC4gV2l0aG91dFxuICogdGhpcywgZXZlcnkgd2hlZWwgdGljayAoMy01IHBlciBub3RjaCkgdHJpZ2dlcnMgYSBmdWxsIFJlYWN0IGNvbW1pdCArXG4gKiBZb2dhIGNhbGN1bGF0ZUxheW91dCgpICsgSW5rIGRpZmYgY3ljbGUgXHUyMDE0IHRoZSBDUFUgc3Bpa2UuIFZpc3VhbCBzY3JvbGxcbiAqIHN0YXlzIHNtb290aCByZWdhcmRsZXNzOiBTY3JvbGxCb3guZm9yY2VSZW5kZXIgZmlyZXMgb24gZXZlcnkgc2Nyb2xsQnlcbiAqIGFuZCBJbmsgcmVhZHMgdGhlIFJFQUwgc2Nyb2xsVG9wIGZyb20gdGhlIERPTSBub2RlLCBpbmRlcGVuZGVudCBvZiB3aGF0XG4gKiBSZWFjdCB0aGlua3MuIFJlYWN0IG9ubHkgbmVlZHMgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIG1vdW50ZWQgcmFuZ2UgbXVzdFxuICogc2hpZnQ7IGhhbGYgb2YgT1ZFUlNDQU5fUk9XUyBpcyB0aGUgdGlnaHRlc3Qgc2FmZSBiaW4gKGd1YXJhbnRlZXMgXHUyMjY1NDBcbiAqIHJvd3Mgb2Ygb3ZlcnNjYW4gcmVtYWluIGJlZm9yZSB0aGUgbmV3IHJhbmdlIGlzIG5lZWRlZCkuXG4gKi9cbmNvbnN0IFNDUk9MTF9RVUFOVFVNID0gT1ZFUlNDQU5fUk9XUyA+PiAxXG4vKipcbiAqIFdvcnN0LWNhc2UgaGVpZ2h0IGFzc3VtZWQgZm9yIHVubWVhc3VyZWQgaXRlbXMgd2hlbiBjb21wdXRpbmcgY292ZXJhZ2UuXG4gKiBBIE1lc3NhZ2VSb3cgY2FuIGJlIGFzIHNtYWxsIGFzIDEgcm93IChzaW5nbGUtbGluZSB0b29sIGNhbGwpLiBVc2luZyAxXG4gKiBoZXJlIGd1YXJhbnRlZXMgdGhlIG1vdW50ZWQgc3BhbiBwaHlzaWNhbGx5IHJlYWNoZXMgdGhlIHZpZXdwb3J0IGJvdHRvbVxuICogcmVnYXJkbGVzcyBvZiBob3cgc21hbGwgaXRlbXMgYWN0dWFsbHkgYXJlIFx1MjAxNCBhdCB0aGUgY29zdCBvZiBvdmVyLW1vdW50aW5nXG4gKiB3aGVuIGl0ZW1zIGFyZSBsYXJnZXIgKHdoaWNoIGlzIGZpbmUsIG92ZXJzY2FuIGFic29yYnMgaXQpLlxuICovXG5jb25zdCBQRVNTSU1JU1RJQ19IRUlHSFQgPSAxXG4vKiogQ2FwIG9uIG1vdW50ZWQgaXRlbXMgdG8gYm91bmQgZmliZXIgYWxsb2NhdGlvbiBldmVuIGluIGRlZ2VuZXJhdGUgY2FzZXMuICovXG5jb25zdCBNQVhfTU9VTlRFRF9JVEVNUyA9IDMwMFxuLyoqXG4gKiBNYXggTkVXIGl0ZW1zIHRvIG1vdW50IGluIGEgc2luZ2xlIGNvbW1pdC4gU2Nyb2xsaW5nIGludG8gYSBmcmVzaCByYW5nZVxuICogd2l0aCBQRVNTSU1JU1RJQ19IRUlHSFQ9MSB3b3VsZCBtb3VudCAxOTQgaXRlbXMgYXQgb25jZSAoT1ZFUlNDQU5fUk9XUyoyK1xuICogdmlld3BvcnRIID0gMTk0KTsgZWFjaCBmcmVzaCBNZXNzYWdlUm93IHJlbmRlciBjb3N0cyB+MS41bXMgKG1hcmtlZCBsZXhlclxuICogKyBmb3JtYXRUb2tlbiArIH4xMSBjcmVhdGVJbnN0YW5jZSkgPSB+MjkwbXMgc3luYyBibG9jay4gU2xpZGluZyB0aGUgcmFuZ2VcbiAqIHRvd2FyZCB0aGUgdGFyZ2V0IG92ZXIgbXVsdGlwbGUgY29tbWl0cyBrZWVwcyBwZXItY29tbWl0IG1vdW50IGNvc3RcbiAqIGJvdW5kZWQuIFRoZSByZW5kZXItdGltZSBjbGFtcCAoc2Nyb2xsQ2xhbXBNaW4vTWF4KSBob2xkcyB0aGUgdmlld3BvcnQgYXRcbiAqIHRoZSBlZGdlIG9mIG1vdW50ZWQgY29udGVudCBzbyB0aGVyZSdzIG5vIGJsYW5rIGR1cmluZyBjYXRjaC11cC5cbiAqL1xuY29uc3QgU0xJREVfU1RFUCA9IDI1XG5cbmNvbnN0IE5PT1BfVU5TVUIgPSAoKSA9PiB7fVxuXG5leHBvcnQgdHlwZSBWaXJ0dWFsU2Nyb2xsUmVzdWx0ID0ge1xuICAvKiogW3N0YXJ0SW5kZXgsIGVuZEluZGV4KSBoYWxmLW9wZW4gc2xpY2Ugb2YgaXRlbXMgdG8gcmVuZGVyLiAqL1xuICByYW5nZTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXVxuICAvKiogSGVpZ2h0IChyb3dzKSBvZiBzcGFjZXIgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXJlZCBpdGVtLiAqL1xuICB0b3BTcGFjZXI6IG51bWJlclxuICAvKiogSGVpZ2h0IChyb3dzKSBvZiBzcGFjZXIgYWZ0ZXIgdGhlIGxhc3QgcmVuZGVyZWQgaXRlbS4gKi9cbiAgYm90dG9tU3BhY2VyOiBudW1iZXJcbiAgLyoqXG4gICAqIENhbGxiYWNrIHJlZiBmYWN0b3J5LiBBdHRhY2ggYG1lYXN1cmVSZWYoaXRlbUtleSlgIHRvIGVhY2ggcmVuZGVyZWRcbiAgICogaXRlbSdzIHJvb3QgQm94OyBhZnRlciBZb2dhIGxheW91dCwgdGhlIGNvbXB1dGVkIGhlaWdodCBpcyBjYWNoZWQuXG4gICAqL1xuICBtZWFzdXJlUmVmOiAoa2V5OiBzdHJpbmcpID0+IChlbDogRE9NRWxlbWVudCB8IG51bGwpID0+IHZvaWRcbiAgLyoqXG4gICAqIEF0dGFjaCB0byB0aGUgdG9wU3BhY2VyIEJveC4gSXRzIFlvZ2EgY29tcHV0ZWRUb3AgSVMgbGlzdE9yaWdpblxuICAgKiAoZmlyc3QgY2hpbGQgb2YgdGhlIHZpcnR1YWxpemVkIHJlZ2lvbiwgc28gaXRzIHRvcCA9IGN1bXVsYXRpdmVcbiAgICogaGVpZ2h0IG9mIGV2ZXJ5dGhpbmcgcmVuZGVyZWQgYmVmb3JlIHRoZSBsaXN0IGluIHRoZSBTY3JvbGxCb3gpLlxuICAgKiBEcmlmdC1mcmVlOiBubyBzdWJ0cmFjdGlvbiBvZiBvZmZzZXRzLCBubyBkZXBlbmRlbmNlIG9uIGl0ZW1cbiAgICogaGVpZ2h0cyB0aGF0IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMgKHRtdXggcmVzaXplKS5cbiAgICovXG4gIHNwYWNlclJlZjogUmVmT2JqZWN0PERPTUVsZW1lbnQgfCBudWxsPlxuICAvKipcbiAgICogQ3VtdWxhdGl2ZSB5LW9mZnNldCBvZiBlYWNoIGl0ZW0gaW4gbGlzdC13cmFwcGVyIGNvb3JkcyAoTk9UIHNjcm9sbGJveFxuICAgKiBjb29yZHMgXHUyMDE0IGxvZ28vc2libGluZ3MgYmVmb3JlIHRoaXMgbGlzdCBzaGlmdCB0aGUgb3JpZ2luKS5cbiAgICogb2Zmc2V0c1tpXSA9IHJvd3MgYWJvdmUgaXRlbSBpOyBvZmZzZXRzW25dID0gdG90YWxIZWlnaHQuXG4gICAqIFJlY29tcHV0ZWQgZXZlcnkgcmVuZGVyIFx1MjAxNCBkb24ndCBtZW1vIG9uIGlkZW50aXR5LlxuICAgKi9cbiAgb2Zmc2V0czogQXJyYXlMaWtlPG51bWJlcj5cbiAgLyoqXG4gICAqIFJlYWQgWW9nYSBjb21wdXRlZFRvcCBmb3IgaXRlbSBhdCBpbmRleC4gUmV0dXJucyAtMSBpZiB0aGUgaXRlbSBpc24ndFxuICAgKiBtb3VudGVkIG9yIGhhc24ndCBiZWVuIGxhaWQgb3V0LiBJdGVtIEJveGVzIGFyZSBkaXJlY3QgWW9nYSBjaGlsZHJlblxuICAgKiBvZiB0aGUgU2Nyb2xsQm94IGNvbnRlbnQgd3JhcHBlciAoZnJhZ21lbnRzIGNvbGxhcHNlIGluIHRoZSBJbmsgRE9NKSxcbiAgICogc28gdGhpcyBpcyBjb250ZW50LXdyYXBwZXItcmVsYXRpdmUgXHUyMDE0IHNhbWUgY29vcmRpbmF0ZSBzcGFjZSBhc1xuICAgKiBzY3JvbGxUb3AuIFlvZ2EgbGF5b3V0IGlzIHNjcm9sbC1pbmRlcGVuZGVudCAodHJhbnNsYXRpb24gaGFwcGVuc1xuICAgKiBsYXRlciBpbiByZW5kZXJOb2RlVG9PdXRwdXQpLCBzbyBwb3NpdGlvbnMgc3RheSB2YWxpZCBhY3Jvc3Mgc2Nyb2xsc1xuICAgKiB3aXRob3V0IHdhaXRpbmcgZm9yIEluayB0byByZS1yZW5kZXIuIFN0aWNreVRyYWNrZXIgd2Fsa3MgdGhlIG1vdW50XG4gICAqIHJhbmdlIHdpdGggdGhpcyB0byBmaW5kIHRoZSB2aWV3cG9ydCBib3VuZGFyeSBhdCBwZXItc2Nyb2xsLXRpY2tcbiAgICogZ3JhbnVsYXJpdHkgKGZpbmVyIHRoYW4gdGhlIDQwLXJvdyBxdWFudHVtIHRoaXMgaG9vayByZS1yZW5kZXJzIGF0KS5cbiAgICovXG4gIGdldEl0ZW1Ub3A6IChpbmRleDogbnVtYmVyKSA9PiBudW1iZXJcbiAgLyoqXG4gICAqIEdldCB0aGUgbW91bnRlZCBET01FbGVtZW50IGZvciBpdGVtIGF0IGluZGV4LCBvciBudWxsLiBGb3JcbiAgICogU2Nyb2xsQm94LnNjcm9sbFRvRWxlbWVudCBcdTIwMTQgYW5jaG9yaW5nIGJ5IGVsZW1lbnQgcmVmIGRlZmVycyB0aGVcbiAgICogWW9nYS1wb3NpdGlvbiByZWFkIHRvIHJlbmRlciB0aW1lIChkZXRlcm1pbmlzdGljOyBubyB0aHJvdHRsZSByYWNlKS5cbiAgICovXG4gIGdldEl0ZW1FbGVtZW50OiAoaW5kZXg6IG51bWJlcikgPT4gRE9NRWxlbWVudCB8IG51bGxcbiAgLyoqIE1lYXN1cmVkIFlvZ2EgaGVpZ2h0LiB1bmRlZmluZWQgPSBub3QgeWV0IG1lYXN1cmVkOyAwID0gcmVuZGVyZWQgbm90aGluZy4gKi9cbiAgZ2V0SXRlbUhlaWdodDogKGluZGV4OiBudW1iZXIpID0+IG51bWJlciB8IHVuZGVmaW5lZFxuICAvKipcbiAgICogU2Nyb2xsIHNvIGl0ZW0gYGlgIGlzIGluIHRoZSBtb3VudGVkIHJhbmdlLiBTZXRzIHNjcm9sbFRvcCA9XG4gICAqIG9mZnNldHNbaV0gKyBsaXN0T3JpZ2luLiBUaGUgcmFuZ2UgbG9naWMgZmluZHMgc3RhcnQgZnJvbVxuICAgKiBzY3JvbGxUb3AgdnMgb2Zmc2V0c1tdIFx1MjAxNCBCT1RIIHVzZSB0aGUgc2FtZSBvZmZzZXRzIHZhbHVlLCBzbyB0aGV5XG4gICAqIGFncmVlIGJ5IGNvbnN0cnVjdGlvbiByZWdhcmRsZXNzIG9mIHdoZXRoZXIgb2Zmc2V0c1tpXSBpcyB0aGVcbiAgICogXCJ0cnVlXCIgcG9zaXRpb24uIEl0ZW0gaSBtb3VudHM7IGl0cyBzY3JlZW4gcG9zaXRpb24gbWF5IGJlIG9mZiBieVxuICAgKiBhIGZldy1kb3plbiByb3dzIChvdmVyc2Nhbi13b3J0aCBvZiBlc3RpbWF0ZSBkcmlmdCksIGJ1dCBpdCdzIGluXG4gICAqIHRoZSBET00uIEZvbGxvdyB3aXRoIGdldEl0ZW1Ub3AoaSkgZm9yIHRoZSBwcmVjaXNlIHBvc2l0aW9uLlxuICAgKi9cbiAgc2Nyb2xsVG9JbmRleDogKGk6IG51bWJlcikgPT4gdm9pZFxufVxuXG4vKipcbiAqIFJlYWN0LWxldmVsIHZpcnR1YWxpemF0aW9uIGZvciBpdGVtcyBpbnNpZGUgYSBTY3JvbGxCb3guXG4gKlxuICogVGhlIFNjcm9sbEJveCBhbHJlYWR5IGRvZXMgSW5rLW91dHB1dC1sZXZlbCB2aWV3cG9ydCBjdWxsaW5nXG4gKiAocmVuZGVyLW5vZGUtdG8tb3V0cHV0LnRzOjYxNyBza2lwcyBjaGlsZHJlbiBvdXRzaWRlIHRoZSB2aXNpYmxlIHdpbmRvdyksXG4gKiBidXQgYWxsIFJlYWN0IGZpYmVycyArIFlvZ2Egbm9kZXMgYXJlIHN0aWxsIGFsbG9jYXRlZC4gQXQgfjI1MCBLQiBSU1MgcGVyXG4gKiBNZXNzYWdlUm93LCBhIDEwMDAtbWVzc2FnZSBzZXNzaW9uIGNvc3RzIH4yNTAgTUIgb2YgZ3Jvdy1vbmx5IG1lbW9yeVxuICogKEluayBzY3JlZW4gYnVmZmVyLCBXQVNNIGxpbmVhciBtZW1vcnksIEpTQyBwYWdlIHJldGVudGlvbiBhbGwgZ3Jvdy1vbmx5KS5cbiAqXG4gKiBUaGlzIGhvb2sgbW91bnRzIG9ubHkgaXRlbXMgaW4gdmlld3BvcnQgKyBvdmVyc2Nhbi4gU3BhY2VyIGJveGVzIGhvbGQgdGhlXG4gKiBzY3JvbGwgaGVpZ2h0IGNvbnN0YW50IGZvciB0aGUgcmVzdCBhdCBPKDEpIGZpYmVyIGNvc3QgZWFjaC5cbiAqXG4gKiBIZWlnaHQgZXN0aW1hdGlvbjogZml4ZWQgREVGQVVMVF9FU1RJTUFURSBmb3IgdW5tZWFzdXJlZCBpdGVtcywgcmVwbGFjZWRcbiAqIGJ5IHJlYWwgWW9nYSBoZWlnaHRzIGFmdGVyIGZpcnN0IGxheW91dC4gTm8gc2Nyb2xsIGFuY2hvcmluZyBcdTIwMTQgb3ZlcnNjYW5cbiAqIGFic29yYnMgZXN0aW1hdGUgZXJyb3JzLiBJZiBkcmlmdCBpcyBub3RpY2VhYmxlIGluIHByYWN0aWNlLCBhbmNob3JpbmdcbiAqIChzY3JvbGxCeShkZWx0YSkgd2hlbiB0b3BTcGFjZXIgY2hhbmdlcykgaXMgYSBzdHJhaWdodGZvcndhcmQgZm9sbG93dXAuXG4gKlxuICogc3RpY2t5U2Nyb2xsIGNhdmVhdDogcmVuZGVyLW5vZGUtdG8tb3V0cHV0LnRzOjQ1MCBzZXRzIHNjcm9sbFRvcD1tYXhTY3JvbGxcbiAqIGR1cmluZyBJbmsncyByZW5kZXIgcGhhc2UsIHdoaWNoIGRvZXMgTk9UIGZpcmUgU2Nyb2xsQm94LnN1YnNjcmliZS4gVGhlXG4gKiBhdC1ib3R0b20gY2hlY2sgYmVsb3cgaGFuZGxlcyB0aGlzIFx1MjAxNCB3aGVuIHBpbm5lZCB0byB0aGUgYm90dG9tLCB3ZSByZW5kZXJcbiAqIHRoZSBsYXN0IE4gaXRlbXMgcmVnYXJkbGVzcyBvZiB3aGF0IHNjcm9sbFRvcCBjbGFpbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXJ0dWFsU2Nyb2xsKFxuICBzY3JvbGxSZWY6IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPixcbiAgaXRlbUtleXM6IHJlYWRvbmx5IHN0cmluZ1tdLFxuICAvKipcbiAgICogVGVybWluYWwgY29sdW1uIGNvdW50LiBPbiBjaGFuZ2UsIGNhY2hlZCBoZWlnaHRzIGFyZSBzdGFsZSAodGV4dFxuICAgKiByZXdyYXBzKSBcdTIwMTQgU0NBTEVEIGJ5IG9sZENvbHMvbmV3Q29scyByYXRoZXIgdGhhbiBjbGVhcmVkLiBDbGVhcmluZ1xuICAgKiBtYWRlIHRoZSBwZXNzaW1pc3RpYyBjb3ZlcmFnZSBiYWNrLXdhbGsgbW91bnQgfjE5MCBpdGVtcyAoZXZlcnlcbiAgICogdW5jYWNoZWQgaXRlbSBcdTIxOTIgUEVTU0lNSVNUSUNfSEVJR0hUPTEgXHUyMTkyIHdhbGsgMTkwIHRvIHJlYWNoXG4gICAqIHZpZXdwb3J0KzJcdTAwRDdvdmVyc2NhbikuIEVhY2ggZnJlc2ggbW91bnQgcnVucyBtYXJrZWQubGV4ZXIgKyBzeW50YXhcbiAgICogaGlnaGxpZ2h0aW5nIFx1MjI0OCAzbXM7IH42MDBtcyBSZWFjdCByZWNvbmNpbGUgb24gZmlyc3QgcmVzaXplIHdpdGggYVxuICAgKiBsb25nIGNvbnZlcnNhdGlvbi4gU2NhbGluZyBrZWVwcyBoZWlnaHRDYWNoZSBwb3B1bGF0ZWQgXHUyMTkyIGJhY2std2Fsa1xuICAgKiB1c2VzIHJlYWwtaXNoIGhlaWdodHMgXHUyMTkyIG1vdW50IHJhbmdlIHN0YXlzIHRpZ2h0LiBTY2FsZWQgZXN0aW1hdGVzXG4gICAqIGFyZSBvdmVyd3JpdHRlbiBieSByZWFsIFlvZ2EgaGVpZ2h0cyBvbiBuZXh0IHVzZUxheW91dEVmZmVjdC5cbiAgICpcbiAgICogU2NhbGVkIGhlaWdodHMgYXJlIGNsb3NlIGVub3VnaCB0aGF0IHRoZSBibGFjay1zY3JlZW4tb24td2lkZW4gYnVnXG4gICAqIChpbmZsYXRlZCBwcmUtcmVzaXplIG9mZnNldHMgb3ZlcnNob290IHBvc3QtcmVzaXplIHNjcm9sbFRvcCBcdTIxOTIgZW5kXG4gICAqIGxvb3Agc3RvcHMgc2hvcnQgb2YgdGFpbCkgZG9lc24ndCB0cmlnZ2VyOiByYXRpbzwxIG9uIHdpZGVuIHNjYWxlc1xuICAgKiBoZWlnaHRzIERPV04sIGtlZXBpbmcgb2Zmc2V0cyByb3VnaGx5IGFsaWduZWQgd2l0aCBwb3N0LXJlc2l6ZSBZb2dhLlxuICAgKi9cbiAgY29sdW1uczogbnVtYmVyLFxuKTogVmlydHVhbFNjcm9sbFJlc3VsdCB7XG4gIGNvbnN0IGhlaWdodENhY2hlID0gdXNlUmVmKG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCkpXG4gIC8vIEJ1bXAgd2hlbmV2ZXIgaGVpZ2h0Q2FjaGUgbXV0YXRlcyBzbyBvZmZzZXRzIHJlYnVpbGQgb24gbmV4dCByZWFkLiBSZWZcbiAgLy8gKG5vdCBzdGF0ZSkgXHUyMDE0IGNoZWNrZWQgZHVyaW5nIHJlbmRlciBwaGFzZSwgemVybyBleHRyYSBjb21taXRzLlxuICBjb25zdCBvZmZzZXRWZXJzaW9uUmVmID0gdXNlUmVmKDApXG4gIC8vIHNjcm9sbFRvcCBhdCBsYXN0IGNvbW1pdCwgZm9yIGRldGVjdGluZyBmYXN0LXNjcm9sbCBtb2RlIChzbGlkZSBjYXAgZ2F0ZSkuXG4gIGNvbnN0IGxhc3RTY3JvbGxUb3BSZWYgPSB1c2VSZWYoMClcbiAgY29uc3Qgb2Zmc2V0c1JlZiA9IHVzZVJlZjx7IGFycjogRmxvYXQ2NEFycmF5OyB2ZXJzaW9uOiBudW1iZXI7IG46IG51bWJlciB9Pih7XG4gICAgYXJyOiBuZXcgRmxvYXQ2NEFycmF5KDApLFxuICAgIHZlcnNpb246IC0xLFxuICAgIG46IC0xLFxuICB9KVxuICBjb25zdCBpdGVtUmVmcyA9IHVzZVJlZihuZXcgTWFwPHN0cmluZywgRE9NRWxlbWVudD4oKSlcbiAgY29uc3QgcmVmQ2FjaGUgPSB1c2VSZWYobmV3IE1hcDxzdHJpbmcsIChlbDogRE9NRWxlbWVudCB8IG51bGwpID0+IHZvaWQ+KCkpXG4gIC8vIElubGluZSByZWYtY29tcGFyZTogbXVzdCBydW4gYmVmb3JlIG9mZnNldHMgaXMgY29tcHV0ZWQgYmVsb3cuIFRoZVxuICAvLyBza2lwLWZsYWcgZ3VhcmRzIHVzZUxheW91dEVmZmVjdCBmcm9tIHJlLXBvcHVsYXRpbmcgaGVpZ2h0Q2FjaGUgd2l0aFxuICAvLyBQUkUtcmVzaXplIFlvZ2EgaGVpZ2h0cyAodXNlTGF5b3V0RWZmZWN0IHJlYWRzIFlvZ2EgZnJvbSB0aGUgZnJhbWVcbiAgLy8gQkVGT1JFIHRoaXMgcmVuZGVyJ3MgY2FsY3VsYXRlTGF5b3V0IFx1MjAxNCB0aGUgb25lIHRoYXQgaGFkIHRoZSBvbGQgd2lkdGgpLlxuICAvLyBOZXh0IHJlbmRlcidzIHVzZUxheW91dEVmZmVjdCByZWFkcyBwb3N0LXJlc2l6ZSBZb2dhIFx1MjE5MiBjb3JyZWN0LlxuICBjb25zdCBwcmV2Q29sdW1ucyA9IHVzZVJlZihjb2x1bW5zKVxuICBjb25zdCBza2lwTWVhc3VyZW1lbnRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIC8vIEZyZWV6ZSB0aGUgbW91bnQgcmFuZ2UgZm9yIHRoZSByZXNpemUtc2V0dGxpbmcgY3ljbGUuIEFscmVhZHktbW91bnRlZFxuICAvLyBpdGVtcyBoYXZlIHdhcm0gdXNlTWVtbyAobWFya2VkLmxleGVyLCBoaWdobGlnaHRpbmcpOyByZWNvbXB1dGluZyByYW5nZVxuICAvLyBmcm9tIHNjYWxlZC9wZXNzaW1pc3RpYyBlc3RpbWF0ZXMgY2F1c2VzIG1vdW50L3VubW91bnQgY2h1cm4gKH4zbXMgcGVyXG4gIC8vIGZyZXNoIG1vdW50ID0gfjE1MG1zIHZpc2libGUgYXMgYSBzZWNvbmQgZmxhc2gpLiBUaGUgcHJlLXJlc2l6ZSByYW5nZSBpc1xuICAvLyBhcyBnb29kIGFzIGFueSBcdTIwMTQgaXRlbXMgdmlzaWJsZSBhdCBvbGQgd2lkdGggYXJlIHdoYXQgdGhlIHVzZXIgd2FudHMgYXRcbiAgLy8gbmV3IHdpZHRoLiBGcm96ZW4gZm9yIDIgcmVuZGVyczogcmVuZGVyICMxIGhhcyBza2lwTWVhc3VyZW1lbnQgKFlvZ2FcbiAgLy8gc3RpbGwgcHJlLXJlc2l6ZSksIHJlbmRlciAjMidzIHVzZUxheW91dEVmZmVjdCByZWFkcyBwb3N0LXJlc2l6ZSBZb2dhXG4gIC8vIGludG8gaGVpZ2h0Q2FjaGUuIFJlbmRlciAjMyBoYXMgYWNjdXJhdGUgaGVpZ2h0cyBcdTIxOTIgbm9ybWFsIHJlY29tcHV0ZS5cbiAgY29uc3QgcHJldlJhbmdlUmVmID0gdXNlUmVmPHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl0gfCBudWxsPihudWxsKVxuICBjb25zdCBmcmVlemVSZW5kZXJzUmVmID0gdXNlUmVmKDApXG4gIGlmIChwcmV2Q29sdW1ucy5jdXJyZW50ICE9PSBjb2x1bW5zKSB7XG4gICAgY29uc3QgcmF0aW8gPSBwcmV2Q29sdW1ucy5jdXJyZW50IC8gY29sdW1uc1xuICAgIHByZXZDb2x1bW5zLmN1cnJlbnQgPSBjb2x1bW5zXG4gICAgZm9yIChjb25zdCBbaywgaF0gb2YgaGVpZ2h0Q2FjaGUuY3VycmVudCkge1xuICAgICAgaGVpZ2h0Q2FjaGUuY3VycmVudC5zZXQoaywgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoICogcmF0aW8pKSlcbiAgICB9XG4gICAgb2Zmc2V0VmVyc2lvblJlZi5jdXJyZW50KytcbiAgICBza2lwTWVhc3VyZW1lbnRSZWYuY3VycmVudCA9IHRydWVcbiAgICBmcmVlemVSZW5kZXJzUmVmLmN1cnJlbnQgPSAyXG4gIH1cbiAgY29uc3QgZnJvemVuUmFuZ2UgPSBmcmVlemVSZW5kZXJzUmVmLmN1cnJlbnQgPiAwID8gcHJldlJhbmdlUmVmLmN1cnJlbnQgOiBudWxsXG4gIC8vIExpc3Qgb3JpZ2luIGluIGNvbnRlbnQtd3JhcHBlciBjb29yZHMuIHNjcm9sbFRvcCBpcyBjb250ZW50LXdyYXBwZXItXG4gIC8vIHJlbGF0aXZlLCBidXQgb2Zmc2V0c1tdIGFyZSBsaXN0LWxvY2FsICgwID0gZmlyc3QgdmlydHVhbGl6ZWQgaXRlbSkuXG4gIC8vIFNpYmxpbmdzIHRoYXQgcmVuZGVyIEJFRk9SRSB0aGlzIGxpc3QgaW5zaWRlIHRoZSBTY3JvbGxCb3ggXHUyMDE0IExvZ28sXG4gIC8vIFN0YXR1c05vdGljZXMsIHRydW5jYXRpb24gZGl2aWRlciBpbiBNZXNzYWdlcy50c3ggXHUyMDE0IHNoaWZ0IGl0ZW0gWW9nYVxuICAvLyBwb3NpdGlvbnMgYnkgdGhlaXIgY3VtdWxhdGl2ZSBoZWlnaHQuIFdpdGhvdXQgc3VidHJhY3RpbmcgdGhpcywgdGhlXG4gIC8vIG5vbi1zdGlja3kgYnJhbmNoJ3MgZWZmTG8vZWZmSGkgYXJlIGluZmxhdGVkIGFuZCBzdGFydCBhZHZhbmNlcyBwYXN0XG4gIC8vIGl0ZW1zIHRoYXQgYXJlIGFjdHVhbGx5IGluIHZpZXcgKGJsYW5rIHZpZXdwb3J0IG9uIGNsaWNrL3Njcm9sbCB3aGVuXG4gIC8vIHN0aWNreSBicmVha3Mgd2hpbGUgc2Nyb2xsVG9wIGlzIG5lYXIgbWF4KS4gUmVhZCBmcm9tIHRoZSB0b3BTcGFjZXInc1xuICAvLyBZb2dhIGNvbXB1dGVkVG9wIFx1MjAxNCBpdCdzIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgdmlydHVhbGl6ZWQgcmVnaW9uLCBzb1xuICAvLyBpdHMgdG9wIElTIGxpc3RPcmlnaW4uIE5vIHN1YnRyYWN0aW9uIG9mIG9mZnNldHMgXHUyMTkyIG5vIGRyaWZ0IHdoZW4gaXRlbVxuICAvLyBoZWlnaHRzIGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMgKHRtdXggcmVzaXplOiBjb2x1bW5zIGNoYW5nZSBcdTIxOTIgcmUtd3JhcFxuICAvLyBcdTIxOTIgaGVpZ2h0cyBzaHJpbmsgXHUyMTkyIHRoZSBvbGQgaXRlbS1zYW1wbGUgc3VidHJhY3Rpb24gd2VudCBuZWdhdGl2ZSBcdTIxOTJcbiAgLy8gZWZmTG8gaW5mbGF0ZWQgXHUyMTkyIGJsYWNrIHNjcmVlbikuIE9uZS1mcmFtZSBsYWcgbGlrZSBoZWlnaHRDYWNoZS5cbiAgY29uc3QgbGlzdE9yaWdpblJlZiA9IHVzZVJlZigwKVxuICBjb25zdCBzcGFjZXJSZWYgPSB1c2VSZWY8RE9NRWxlbWVudCB8IG51bGw+KG51bGwpXG5cbiAgLy8gdXNlU3luY0V4dGVybmFsU3RvcmUgdGllcyByZS1yZW5kZXJzIHRvIGltcGVyYXRpdmUgc2Nyb2xsLiBTbmFwc2hvdCBpc1xuICAvLyBzY3JvbGxUb3AgUVVBTlRJWkVEIHRvIFNDUk9MTF9RVUFOVFVNIGJpbnMgXHUyMDE0IE9iamVjdC5pcyBzZWVzIG5vIGNoYW5nZVxuICAvLyBmb3Igc21hbGwgc2Nyb2xscyAobW9zdCB3aGVlbCB0aWNrcyksIHNvIFJlYWN0IHNraXBzIHRoZSBjb21taXQgKyBZb2dhXG4gIC8vICsgSW5rIGN5Y2xlIGVudGlyZWx5IHVudGlsIHRoZSBhY2N1bXVsYXRlZCBkZWx0YSBjcm9zc2VzIGEgYmluLlxuICAvLyBTdGlja3kgaXMgZm9sZGVkIGludG8gdGhlIHNuYXBzaG90IChzaWduIGJpdCkgc28gc3RpY2t5XHUyMTkyYnJva2VuIGFsc29cbiAgLy8gdHJpZ2dlcnM6IHNjcm9sbFRvQm90dG9tIHNldHMgc3RpY2t5PXRydWUgd2l0aG91dCBtb3Zpbmcgc2Nyb2xsVG9wXG4gIC8vIChJbmsgbW92ZXMgaXQgbGF0ZXIpLCBhbmQgdGhlIGZpcnN0IHNjcm9sbEJ5IGFmdGVyIG1heSBsYW5kIGluIHRoZVxuICAvLyBzYW1lIGJpbi4gTmFOIHNlbnRpbmVsID0gcmVmIG5vdCBhdHRhY2hlZC5cbiAgY29uc3Qgc3Vic2NyaWJlID0gdXNlQ2FsbGJhY2soXG4gICAgKGxpc3RlbmVyOiAoKSA9PiB2b2lkKSA9PlxuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnN1YnNjcmliZShsaXN0ZW5lcikgPz8gTk9PUF9VTlNVQixcbiAgICBbc2Nyb2xsUmVmXSxcbiAgKVxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsICgpID0+IHtcbiAgICBjb25zdCBzID0gc2Nyb2xsUmVmLmN1cnJlbnRcbiAgICBpZiAoIXMpIHJldHVybiBOYU5cbiAgICAvLyBTbmFwc2hvdCB1c2VzIHRoZSBUQVJHRVQgKHNjcm9sbFRvcCArIHBlbmRpbmdEZWx0YSksIG5vdCBjb21taXR0ZWRcbiAgICAvLyBzY3JvbGxUb3AuIHNjcm9sbEJ5IG9ubHkgbXV0YXRlcyBwZW5kaW5nRGVsdGEgKHJlbmRlcmVyIGRyYWlucyBpdFxuICAgIC8vIGFjcm9zcyBmcmFtZXMpOyBjb21taXR0ZWQgc2Nyb2xsVG9wIGxhZ3MuIFVzaW5nIHRhcmdldCBtZWFuc1xuICAgIC8vIG5vdGlmeSgpIG9uIHNjcm9sbEJ5IGFjdHVhbGx5IGNoYW5nZXMgdGhlIHNuYXBzaG90IFx1MjE5MiBSZWFjdCByZW1vdW50c1xuICAgIC8vIGNoaWxkcmVuIGZvciB0aGUgZGVzdGluYXRpb24gYmVmb3JlIEluaydzIGRyYWluIGZyYW1lcyBuZWVkIHRoZW0uXG4gICAgY29uc3QgdGFyZ2V0ID0gcy5nZXRTY3JvbGxUb3AoKSArIHMuZ2V0UGVuZGluZ0RlbHRhKClcbiAgICBjb25zdCBiaW4gPSBNYXRoLmZsb29yKHRhcmdldCAvIFNDUk9MTF9RVUFOVFVNKVxuICAgIHJldHVybiBzLmlzU3RpY2t5KCkgPyB+YmluIDogYmluXG4gIH0pXG4gIC8vIFJlYWQgdGhlIFJFQUwgY29tbWl0dGVkIHNjcm9sbFRvcCAobm90IHF1YW50aXplZCkgZm9yIHJhbmdlIG1hdGggXHUyMDE0XG4gIC8vIHF1YW50aXphdGlvbiBpcyBvbmx5IHRoZSByZS1yZW5kZXIgZ2F0ZSwgbm90IHRoZSBwb3NpdGlvbi5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsUmVmLmN1cnJlbnQ/LmdldFNjcm9sbFRvcCgpID8/IC0xXG4gIC8vIFJhbmdlIG11c3Qgc3BhbiBCT1RIIGNvbW1pdHRlZCBzY3JvbGxUb3AgKHdoZXJlIEluayBpcyByZW5kZXJpbmcgTk9XKVxuICAvLyBhbmQgdGFyZ2V0ICh3aGVyZSBwZW5kaW5nIHdpbGwgZHJhaW4gdG8pLiBEdXJpbmcgZHJhaW4sIGludGVybWVkaWF0ZVxuICAvLyBmcmFtZXMgcmVuZGVyIGF0IHNjcm9sbFRvcHMgYmV0d2VlbiB0aGUgdHdvIFx1MjAxNCBpZiB3ZSBvbmx5IG1vdW50IGZvclxuICAvLyB0aGUgdGFyZ2V0LCB0aG9zZSBmcmFtZXMgZmluZCBubyBjaGlsZHJlbiAoYmxhbmsgcm93cykuXG4gIGNvbnN0IHBlbmRpbmdEZWx0YSA9IHNjcm9sbFJlZi5jdXJyZW50Py5nZXRQZW5kaW5nRGVsdGEoKSA/PyAwXG4gIGNvbnN0IHZpZXdwb3J0SCA9IHNjcm9sbFJlZi5jdXJyZW50Py5nZXRWaWV3cG9ydEhlaWdodCgpID8/IDBcbiAgLy8gVHJ1ZSBtZWFucyB0aGUgU2Nyb2xsQm94IGlzIHBpbm5lZCB0byB0aGUgYm90dG9tLiBUaGlzIGlzIHRoZSBPTkxZXG4gIC8vIHN0YWJsZSBcImF0IGJvdHRvbVwiIHNpZ25hbDogc2Nyb2xsVG9wL3Njcm9sbEhlaWdodCBib3RoIHJlZmxlY3QgdGhlXG4gIC8vIFBSRVZJT1VTIHJlbmRlcidzIGxheW91dCwgd2hpY2ggZGVwZW5kcyBvbiB3aGF0IFdFIHJlbmRlcmVkICh0b3BTcGFjZXIgK1xuICAvLyBpdGVtcyksIGNyZWF0aW5nIGEgZmVlZGJhY2sgbG9vcCAocmFuZ2UgXHUyMTkyIGxheW91dCBcdTIxOTIgYXRCb3R0b20gXHUyMTkyIHJhbmdlKS5cbiAgLy8gc3RpY2t5U2Nyb2xsIGlzIHNldCBieSB1c2VyIGFjdGlvbiAoc2Nyb2xsVG9Cb3R0b20vc2Nyb2xsQnkpLCB0aGUgaW5pdGlhbFxuICAvLyBhdHRyaWJ1dGUsIEFORCBieSByZW5kZXItbm9kZS10by1vdXRwdXQgd2hlbiBpdHMgcG9zaXRpb25hbCBmb2xsb3cgZmlyZXNcbiAgLy8gKHNjcm9sbFRvcD49cHJldk1heCBcdTIxOTIgcGluIHRvIG5ldyBtYXggXHUyMTkyIHNldCBmbGFnKS4gVGhlIHJlbmRlcmVyIHdyaXRlIGlzXG4gIC8vIGZlZWRiYWNrLXNhZmU6IGl0IG9ubHkgZmxpcHMgZmFsc2VcdTIxOTJ0cnVlLCBvbmx5IHdoZW4gYWxyZWFkeSBhdCB0aGVcbiAgLy8gcG9zaXRpb25hbCBib3R0b20sIGFuZCB0aGUgZmxhZyBiZWluZyB0cnVlIGhlcmUganVzdCBtZWFucyBcInRhaWwtd2FsayxcbiAgLy8gY2xlYXIgY2xhbXBcIiBcdTIwMTQgdGhlIHNhbWUgYmVoYXZpb3IgYXMgaWYgd2UnZCByZWFkIHNjcm9sbFRvcD09bWF4U2Nyb2xsXG4gIC8vIGRpcmVjdGx5LCBtaW51cyB0aGUgaW5zdGFiaWxpdHkuIERlZmF1bHQgdHJ1ZTogYmVmb3JlIHRoZSByZWYgYXR0YWNoZXMsXG4gIC8vIGFzc3VtZSBib3R0b20gKHN0aWNreSB3aWxsIHBpbiB1cyB0aGVyZSBvbiBmaXJzdCBJbmsgcmVuZGVyKS5cbiAgY29uc3QgaXNTdGlja3kgPSBzY3JvbGxSZWYuY3VycmVudD8uaXNTdGlja3koKSA/PyB0cnVlXG5cbiAgLy8gR0Mgc3RhbGUgY2FjaGUgZW50cmllcyAoY29tcGFjdGlvbiwgL2NsZWFyLCBzY3JlZW5Ub2dnbGVJZCBidW1wKS4gT25seVxuICAvLyBydW5zIHdoZW4gaXRlbUtleXMgaWRlbnRpdHkgY2hhbmdlcyBcdTIwMTQgc2Nyb2xsaW5nIGRvZXNuJ3QgdG91Y2gga2V5cy5cbiAgLy8gaXRlbVJlZnMgc2VsZi1jbGVhbnMgdmlhIHJlZihudWxsKSBvbiB1bm1vdW50LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIHJlZnMgYXJlIHN0YWJsZVxuICB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBsaXZlID0gbmV3IFNldChpdGVtS2V5cylcbiAgICBsZXQgZGlydHkgPSBmYWxzZVxuICAgIGZvciAoY29uc3QgayBvZiBoZWlnaHRDYWNoZS5jdXJyZW50LmtleXMoKSkge1xuICAgICAgaWYgKCFsaXZlLmhhcyhrKSkge1xuICAgICAgICBoZWlnaHRDYWNoZS5jdXJyZW50LmRlbGV0ZShrKVxuICAgICAgICBkaXJ0eSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIHJlZkNhY2hlLmN1cnJlbnQua2V5cygpKSB7XG4gICAgICBpZiAoIWxpdmUuaGFzKGspKSByZWZDYWNoZS5jdXJyZW50LmRlbGV0ZShrKVxuICAgIH1cbiAgICBpZiAoZGlydHkpIG9mZnNldFZlcnNpb25SZWYuY3VycmVudCsrXG4gIH0sIFtpdGVtS2V5c10pXG5cbiAgLy8gT2Zmc2V0cyBjYWNoZWQgYWNyb3NzIHJlbmRlcnMsIGludmFsaWRhdGVkIGJ5IG9mZnNldFZlcnNpb24gcmVmIGJ1bXAuXG4gIC8vIFRoZSBwcmV2aW91cyBhcHByb2FjaCBhbGxvY2F0ZWQgbmV3IEFycmF5KG4rMSkgKyByYW4gbiBNYXAuZ2V0IHBlclxuICAvLyByZW5kZXI7IGZvciBuXHUyMjQ4MjdrIGF0IGtleS1yZXBlYXQgc2Nyb2xsIHJhdGUgKH4xMSBjb21taXRzL3NlYykgdGhhdCdzXG4gIC8vIH4zMDBrIGxvb2t1cHMvc2VjIG9uIGEgZnJlc2hseS1hbGxvY2F0ZWQgYXJyYXkgXHUyMTkyIEdDIGNodXJuICsgfjJtcy9yZW5kZXIuXG4gIC8vIFZlcnNpb24gYnVtcGVkIGJ5IGhlaWdodENhY2hlIHdyaXRlcnMgKG1lYXN1cmVSZWYsIHJlc2l6ZS1zY2FsZSwgR0MpLlxuICAvLyBObyBzZXRTdGF0ZSBcdTIwMTQgdGhlIHJlYnVpbGQgaXMgcmVhZC1zaWRlLWxhenkgdmlhIHJlZiB2ZXJzaW9uIGNoZWNrIGR1cmluZ1xuICAvLyByZW5kZXIgKHNhbWUgY29tbWl0LCB6ZXJvIGV4dHJhIHNjaGVkdWxlKS4gVGhlIGZsaWNrZXIgdGhhdCBmb3JjZWRcbiAgLy8gaW5saW5lLXJlY29tcHV0ZSBjYW1lIGZyb20gc2V0U3RhdGUtZHJpdmVuIGludmFsaWRhdGlvbi5cbiAgY29uc3QgbiA9IGl0ZW1LZXlzLmxlbmd0aFxuICBpZiAoXG4gICAgb2Zmc2V0c1JlZi5jdXJyZW50LnZlcnNpb24gIT09IG9mZnNldFZlcnNpb25SZWYuY3VycmVudCB8fFxuICAgIG9mZnNldHNSZWYuY3VycmVudC5uICE9PSBuXG4gICkge1xuICAgIGNvbnN0IGFyciA9XG4gICAgICBvZmZzZXRzUmVmLmN1cnJlbnQuYXJyLmxlbmd0aCA+PSBuICsgMVxuICAgICAgICA/IG9mZnNldHNSZWYuY3VycmVudC5hcnJcbiAgICAgICAgOiBuZXcgRmxvYXQ2NEFycmF5KG4gKyAxKVxuICAgIGFyclswXSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgYXJyW2kgKyAxXSA9XG4gICAgICAgIGFycltpXSEgKyAoaGVpZ2h0Q2FjaGUuY3VycmVudC5nZXQoaXRlbUtleXNbaV0hKSA/PyBERUZBVUxUX0VTVElNQVRFKVxuICAgIH1cbiAgICBvZmZzZXRzUmVmLmN1cnJlbnQgPSB7IGFyciwgdmVyc2lvbjogb2Zmc2V0VmVyc2lvblJlZi5jdXJyZW50LCBuIH1cbiAgfVxuICBjb25zdCBvZmZzZXRzID0gb2Zmc2V0c1JlZi5jdXJyZW50LmFyclxuICBjb25zdCB0b3RhbEhlaWdodCA9IG9mZnNldHNbbl0hXG5cbiAgbGV0IHN0YXJ0OiBudW1iZXJcbiAgbGV0IGVuZDogbnVtYmVyXG5cbiAgaWYgKGZyb3plblJhbmdlKSB7XG4gICAgLy8gQ29sdW1uIGp1c3QgY2hhbmdlZC4gS2VlcCB0aGUgcHJlLXJlc2l6ZSByYW5nZSB0byBhdm9pZCBtb3VudCBjaHVybi5cbiAgICAvLyBDbGFtcCB0byBuIGluIGNhc2UgbWVzc2FnZXMgd2VyZSByZW1vdmVkICgvY2xlYXIsIGNvbXBhY3Rpb24pLlxuICAgIDtbc3RhcnQsIGVuZF0gPSBmcm96ZW5SYW5nZVxuICAgIHN0YXJ0ID0gTWF0aC5taW4oc3RhcnQsIG4pXG4gICAgZW5kID0gTWF0aC5taW4oZW5kLCBuKVxuICB9IGVsc2UgaWYgKHZpZXdwb3J0SCA9PT0gMCB8fCBzY3JvbGxUb3AgPCAwKSB7XG4gICAgLy8gQ29sZCBzdGFydDogU2Nyb2xsQm94IGhhc24ndCBsYWlkIG91dCB5ZXQuIFJlbmRlciB0aGUgdGFpbCBcdTIwMTQgc3RpY2t5XG4gICAgLy8gc2Nyb2xsIHBpbnMgdG8gdGhlIGJvdHRvbSBvbiBmaXJzdCBJbmsgcmVuZGVyLCBzbyB0aGVzZSBhcmUgdGhlIGl0ZW1zXG4gICAgLy8gdGhlIHVzZXIgYWN0dWFsbHkgc2Vlcy4gQW55IHNjcm9sbC11cCBhZnRlciB0aGF0IGdvZXMgdGhyb3VnaFxuICAgIC8vIHNjcm9sbEJ5IFx1MjE5MiBzdWJzY3JpYmUgZmlyZXMgXHUyMTkyIHdlIHJlLXJlbmRlciB3aXRoIHJlYWwgdmFsdWVzLlxuICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgbiAtIENPTERfU1RBUlRfQ09VTlQpXG4gICAgZW5kID0gblxuICB9IGVsc2Uge1xuICAgIGlmIChpc1N0aWNreSkge1xuICAgICAgLy8gU3RpY2t5LXNjcm9sbCBmYWxsYmFjay4gcmVuZGVyLW5vZGUtdG8tb3V0cHV0IG1heSBoYXZlIG1vdmVkIHNjcm9sbFRvcFxuICAgICAgLy8gd2l0aG91dCBub3RpZnlpbmcgdXMsIHNvIHRydXN0IFwiYXQgYm90dG9tXCIgb3ZlciB0aGUgc3RhbGUgc25hcHNob3QuXG4gICAgICAvLyBXYWxrIGJhY2sgZnJvbSB0aGUgdGFpbCB1bnRpbCB3ZSd2ZSBjb3ZlcmVkIHZpZXdwb3J0ICsgb3ZlcnNjYW4uXG4gICAgICBjb25zdCBidWRnZXQgPSB2aWV3cG9ydEggKyBPVkVSU0NBTl9ST1dTXG4gICAgICBzdGFydCA9IG5cbiAgICAgIHdoaWxlIChzdGFydCA+IDAgJiYgdG90YWxIZWlnaHQgLSBvZmZzZXRzW3N0YXJ0IC0gMV0hIDwgYnVkZ2V0KSB7XG4gICAgICAgIHN0YXJ0LS1cbiAgICAgIH1cbiAgICAgIGVuZCA9IG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlciBoYXMgc2Nyb2xsZWQgdXAuIENvbXB1dGUgc3RhcnQgZnJvbSBvZmZzZXRzIChlc3RpbWF0ZS1iYXNlZDpcbiAgICAgIC8vIG1heSB1bmRlcnNob290IHdoaWNoIGlzIGZpbmUgXHUyMDE0IHdlIGp1c3Qgc3RhcnQgbW91bnRpbmcgYSBiaXQgZWFybHkpLlxuICAgICAgLy8gVGhlbiBleHRlbmQgZW5kIGJ5IENVTVVMQVRJVkUgQkVTVC1LTk9XTiBIRUlHSFQsIG5vdCBlc3RpbWF0ZWRcbiAgICAgIC8vIG9mZnNldHMuIFRoZSBpbnZhcmlhbnQgaXM6XG4gICAgICAvLyAgIHRvcFNwYWNlciArIHN1bShyZWFsX2hlaWdodHNbc3RhcnQuLmVuZF0pID49IHNjcm9sbFRvcCArIHZpZXdwb3J0SCArIG92ZXJzY2FuXG4gICAgICAvLyBTaW5jZSB0b3BTcGFjZXIgPSBvZmZzZXRzW3N0YXJ0XSBcdTIyNjQgc2Nyb2xsVG9wIC0gb3ZlcnNjYW4sIHdlIG5lZWQ6XG4gICAgICAvLyAgIHN1bShyZWFsX2hlaWdodHMpID49IHZpZXdwb3J0SCArIDIqb3ZlcnNjYW5cbiAgICAgIC8vIEZvciB1bm1lYXN1cmVkIGl0ZW1zLCBhc3N1bWUgUEVTU0lNSVNUSUNfSEVJR0hUPTEgXHUyMDE0IHRoZSBzbWFsbGVzdCBhXG4gICAgICAvLyBNZXNzYWdlUm93IGNhbiBiZS4gVGhpcyBvdmVyLW1vdW50cyB3aGVuIGl0ZW1zIGFyZSBsYXJnZSwgYnV0IE5FVkVSXG4gICAgICAvLyBsZWF2ZXMgdGhlIHZpZXdwb3J0IHNob3dpbmcgZW1wdHkgc3BhY2VyIGR1cmluZyBmYXN0IHNjcm9sbCB0aHJvdWdoXG4gICAgICAvLyB1bm1lYXN1cmVkIHRlcnJpdG9yeS4gT25jZSBoZWlnaHRzIGFyZSBjYWNoZWQgKG5leHQgcmVuZGVyKSxcbiAgICAgIC8vIGNvdmVyYWdlIGlzIGNvbXB1dGVkIHdpdGggcmVhbCB2YWx1ZXMgYW5kIHRoZSByYW5nZSB0aWdodGVucy5cbiAgICAgIC8vIEFkdmFuY2Ugc3RhcnQgcGFzdCBpdGVtIEsgb25seSBpZiBLIGlzIHNhZmUgdG8gZm9sZCBpbnRvIHRvcFNwYWNlclxuICAgICAgLy8gd2l0aG91dCBhIHZpc2libGUganVtcC4gVHdvIGNhc2VzIGFyZSBzYWZlOlxuICAgICAgLy8gICAoYSkgSyBpcyBOT1QgY3VycmVudGx5IG1vdW50ZWQgKGl0ZW1SZWZzIGhhcyBubyBlbnRyeSkuIEl0c1xuICAgICAgLy8gICAgICAgY29udHJpYnV0aW9uIHRvIG9mZnNldHMgaGFzIEFMV0FZUyBiZWVuIHRoZSBlc3RpbWF0ZSBcdTIwMTQgdGhlXG4gICAgICAvLyAgICAgICBzcGFjZXIgYWxyZWFkeSBtYXRjaGVzIHdoYXQgd2FzIHRoZXJlLiBObyBsYXlvdXQgY2hhbmdlLlxuICAgICAgLy8gICAoYikgSyBpcyBtb3VudGVkIEFORCBpdHMgaGVpZ2h0IGlzIGNhY2hlZC4gb2Zmc2V0c1tzdGFydCsxXSB1c2VzXG4gICAgICAvLyAgICAgICB0aGUgcmVhbCBoZWlnaHQsIHNvIHRvcFNwYWNlciA9IG9mZnNldHNbc3RhcnQrMV0gZXhhY3RseVxuICAgICAgLy8gICAgICAgZXF1YWxzIHRoZSBZb2dhIHNwYW4gSyBvY2N1cGllZC4gU2VhbWxlc3MgdW5tb3VudC5cbiAgICAgIC8vIFRoZSB1bnNhZmUgY2FzZSBcdTIwMTQgSyBpcyBtb3VudGVkIGJ1dCB1bmNhY2hlZCBcdTIwMTQgaXMgdGhlIG9uZS1yZW5kZXJcbiAgICAgIC8vIHdpbmRvdyBiZXR3ZWVuIG1vdW50IGFuZCB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZW1lbnQuIEtlZXBpbmcgS1xuICAgICAgLy8gbW91bnRlZCB0aGF0IG9uZSBleHRyYSByZW5kZXIgbGV0cyB0aGUgbWVhc3VyZW1lbnQgbGFuZC5cbiAgICAgIC8vIE1vdW50IHJhbmdlIHNwYW5zIFtjb21taXR0ZWQsIHRhcmdldF0gc28gZXZlcnkgZHJhaW4gZnJhbWUgaXNcbiAgICAgIC8vIGNvdmVyZWQuIENsYW1wIGF0IDA6IGFnZ3Jlc3NpdmUgd2hlZWwtdXAgY2FuIHB1c2ggcGVuZGluZ0RlbHRhXG4gICAgICAvLyBmYXIgcGFzdCB6ZXJvIChNWCBNYXN0ZXIgZnJlZS1zcGluKSwgYnV0IHNjcm9sbFRvcCBuZXZlciBnb2VzXG4gICAgICAvLyBuZWdhdGl2ZS4gV2l0aG91dCB0aGUgY2xhbXAsIGVmZkxvIGRyYWdzIHN0YXJ0IHRvIDAgd2hpbGUgZWZmSGlcbiAgICAgIC8vIHN0YXlzIGF0IHRoZSBjdXJyZW50IChoaWdoKSBzY3JvbGxUb3AgXHUyMDE0IHNwYW4gZXhjZWVkcyB3aGF0XG4gICAgICAvLyBNQVhfTU9VTlRFRF9JVEVNUyBjYW4gY292ZXIgYW5kIGVhcmx5IGRyYWluIGZyYW1lcyBzZWUgYmxhbmsuXG4gICAgICAvLyBsaXN0T3JpZ2luIHRyYW5zbGF0ZXMgc2Nyb2xsVG9wIChjb250ZW50LXdyYXBwZXIgY29vcmRzKSBpbnRvXG4gICAgICAvLyBsaXN0LWxvY2FsIGNvb3JkcyBiZWZvcmUgY29tcGFyaW5nIGFnYWluc3Qgb2Zmc2V0c1tdLiBXaXRob3V0XG4gICAgICAvLyB0aGlzLCBwcmUtbGlzdCBzaWJsaW5ncyAoTG9nbytub3RpY2VzIGluIE1lc3NhZ2VzLnRzeCkgaW5mbGF0ZVxuICAgICAgLy8gc2Nyb2xsVG9wIGJ5IHRoZWlyIGhlaWdodCBhbmQgc3RhcnQgb3Zlci1hZHZhbmNlcyBcdTIwMTQgZWF0cyBvdmVyc2NhblxuICAgICAgLy8gZmlyc3QsIHRoZW4gdmlzaWJsZSByb3dzIG9uY2UgdGhlIGluZmxhdGlvbiBleGNlZWRzIE9WRVJTQ0FOX1JPV1MuXG4gICAgICBjb25zdCBsaXN0T3JpZ2luID0gbGlzdE9yaWdpblJlZi5jdXJyZW50XG4gICAgICAvLyBDYXAgdGhlIFtjb21taXR0ZWQuLnRhcmdldF0gc3Bhbi4gV2hlbiBpbnB1dCBvdXRwYWNlcyByZW5kZXIsXG4gICAgICAvLyBwZW5kaW5nRGVsdGEgZ3Jvd3MgdW5ib3VuZGVkIFx1MjE5MiBlZmZMby4uZWZmSGkgY292ZXJzIGh1bmRyZWRzIG9mXG4gICAgICAvLyB1bm1vdW50ZWQgcm93cyBcdTIxOTIgb25lIGNvbW1pdCBtb3VudHMgMTk0IGZyZXNoIE1lc3NhZ2VSb3dzIFx1MjE5MiAzcytcbiAgICAgIC8vIHN5bmMgYmxvY2sgXHUyMTkyIG1vcmUgaW5wdXQgcXVldWVzIFx1MjE5MiBiaWdnZXIgZGVsdGEgbmV4dCB0aW1lLiBEZWF0aFxuICAgICAgLy8gc3BpcmFsLiBDYXBwaW5nIHRoZSBzcGFuIGJvdW5kcyBmcmVzaCBtb3VudHMgcGVyIGNvbW1pdDsgdGhlXG4gICAgICAvLyBjbGFtcCAoc2V0Q2xhbXBCb3VuZHMpIHNob3dzIGVkZ2Utb2YtbW91bnRlZCBkdXJpbmcgY2F0Y2gtdXAgc29cbiAgICAgIC8vIHRoZXJlJ3Mgbm8gYmxhbmsgc2NyZWVuIFx1MjAxNCBzY3JvbGwgcmVhY2hlcyB0YXJnZXQgb3ZlciBhIGZld1xuICAgICAgLy8gZnJhbWVzIGluc3RlYWQgb2YgZnJlZXppbmcgb25jZSBmb3Igc2Vjb25kcy5cbiAgICAgIGNvbnN0IE1BWF9TUEFOX1JPV1MgPSB2aWV3cG9ydEggKiAzXG4gICAgICBjb25zdCByYXdMbyA9IE1hdGgubWluKHNjcm9sbFRvcCwgc2Nyb2xsVG9wICsgcGVuZGluZ0RlbHRhKVxuICAgICAgY29uc3QgcmF3SGkgPSBNYXRoLm1heChzY3JvbGxUb3AsIHNjcm9sbFRvcCArIHBlbmRpbmdEZWx0YSlcbiAgICAgIGNvbnN0IHNwYW4gPSByYXdIaSAtIHJhd0xvXG4gICAgICBjb25zdCBjbGFtcGVkTG8gPVxuICAgICAgICBzcGFuID4gTUFYX1NQQU5fUk9XU1xuICAgICAgICAgID8gcGVuZGluZ0RlbHRhIDwgMFxuICAgICAgICAgICAgPyByYXdIaSAtIE1BWF9TUEFOX1JPV1MgLy8gc2Nyb2xsaW5nIHVwOiBrZWVwIG5lYXIgdGFyZ2V0IChsb3cgZW5kKVxuICAgICAgICAgICAgOiByYXdMbyAvLyBzY3JvbGxpbmcgZG93bjoga2VlcCBuZWFyIGNvbW1pdHRlZFxuICAgICAgICAgIDogcmF3TG9cbiAgICAgIGNvbnN0IGNsYW1wZWRIaSA9IGNsYW1wZWRMbyArIE1hdGgubWluKHNwYW4sIE1BWF9TUEFOX1JPV1MpXG4gICAgICBjb25zdCBlZmZMbyA9IE1hdGgubWF4KDAsIGNsYW1wZWRMbyAtIGxpc3RPcmlnaW4pXG4gICAgICBjb25zdCBlZmZIaSA9IGNsYW1wZWRIaSAtIGxpc3RPcmlnaW5cbiAgICAgIGNvbnN0IGxvID0gZWZmTG8gLSBPVkVSU0NBTl9ST1dTXG4gICAgICAvLyBCaW5hcnkgc2VhcmNoIGZvciBzdGFydCBcdTIwMTQgb2Zmc2V0cyBpcyBtb25vdG9uZS1pbmNyZWFzaW5nLiBUaGVcbiAgICAgIC8vIGxpbmVhciB3aGlsZShzdGFydCsrKSBzY2FuIGl0ZXJhdGVkIH4yN2sgdGltZXMgcGVyIHJlbmRlciBmb3IgdGhlXG4gICAgICAvLyAyN2stbXNnIHNlc3Npb24gKHNjcm9sbGluZyBmcm9tIGJvdHRvbSwgc3RhcnRcdTIyNDgyNzIwMCkuIE8obG9nIG4pLlxuICAgICAge1xuICAgICAgICBsZXQgbCA9IDBcbiAgICAgICAgbGV0IHIgPSBuXG4gICAgICAgIHdoaWxlIChsIDwgcikge1xuICAgICAgICAgIGNvbnN0IG0gPSAobCArIHIpID4+IDFcbiAgICAgICAgICBpZiAob2Zmc2V0c1ttICsgMV0hIDw9IGxvKSBsID0gbSArIDFcbiAgICAgICAgICBlbHNlIHIgPSBtXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnQgPSBsXG4gICAgICB9XG4gICAgICAvLyBHdWFyZDogZG9uJ3QgYWR2YW5jZSBwYXN0IG1vdW50ZWQtYnV0LXVubWVhc3VyZWQgaXRlbXMuIER1cmluZyB0aGVcbiAgICAgIC8vIG9uZS1yZW5kZXIgd2luZG93IGJldHdlZW4gbW91bnQgYW5kIHVzZUxheW91dEVmZmVjdCBtZWFzdXJlbWVudCxcbiAgICAgIC8vIHVubW91bnRpbmcgc3VjaCBpdGVtcyB3b3VsZCB1c2UgREVGQVVMVF9FU1RJTUFURSBpbiB0b3BTcGFjZXIsXG4gICAgICAvLyB3aGljaCBkb2Vzbid0IG1hdGNoIHRoZWlyICh1bmtub3duKSByZWFsIHNwYW4gXHUyMTkyIGZsaWNrZXIuIE1vdW50ZWRcbiAgICAgIC8vIGl0ZW1zIGFyZSBpbiBbcHJldlN0YXJ0LCBwcmV2RW5kKTsgc2NhbiB0aGF0LCBub3QgYWxsIG4uXG4gICAgICB7XG4gICAgICAgIGNvbnN0IHAgPSBwcmV2UmFuZ2VSZWYuY3VycmVudFxuICAgICAgICBpZiAocCAmJiBwWzBdIDwgc3RhcnQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcFswXTsgaSA8IE1hdGgubWluKHN0YXJ0LCBwWzFdKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrID0gaXRlbUtleXNbaV0hXG4gICAgICAgICAgICBpZiAoaXRlbVJlZnMuY3VycmVudC5oYXMoaykgJiYgIWhlaWdodENhY2hlLmN1cnJlbnQuaGFzKGspKSB7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gaVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZWVkZWQgPSB2aWV3cG9ydEggKyAyICogT1ZFUlNDQU5fUk9XU1xuICAgICAgY29uc3QgbWF4RW5kID0gTWF0aC5taW4obiwgc3RhcnQgKyBNQVhfTU9VTlRFRF9JVEVNUylcbiAgICAgIGxldCBjb3ZlcmFnZSA9IDBcbiAgICAgIGVuZCA9IHN0YXJ0XG4gICAgICB3aGlsZSAoXG4gICAgICAgIGVuZCA8IG1heEVuZCAmJlxuICAgICAgICAoY292ZXJhZ2UgPCBuZWVkZWQgfHwgb2Zmc2V0c1tlbmRdISA8IGVmZkhpICsgdmlld3BvcnRIICsgT1ZFUlNDQU5fUk9XUylcbiAgICAgICkge1xuICAgICAgICBjb3ZlcmFnZSArPVxuICAgICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuZ2V0KGl0ZW1LZXlzW2VuZF0hKSA/PyBQRVNTSU1JU1RJQ19IRUlHSFRcbiAgICAgICAgZW5kKytcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU2FtZSBjb3ZlcmFnZSBndWFyYW50ZWUgZm9yIHRoZSBhdEJvdHRvbSBwYXRoIChpdCB3YWxrZWQgc3RhcnQgYmFja1xuICAgIC8vIGJ5IGVzdGltYXRlZCBvZmZzZXRzLCB3aGljaCBjYW4gdW5kZXJzaG9vdCBpZiBpdGVtcyBhcmUgc21hbGwpLlxuICAgIGNvbnN0IG5lZWRlZCA9IHZpZXdwb3J0SCArIDIgKiBPVkVSU0NBTl9ST1dTXG4gICAgY29uc3QgbWluU3RhcnQgPSBNYXRoLm1heCgwLCBlbmQgLSBNQVhfTU9VTlRFRF9JVEVNUylcbiAgICBsZXQgY292ZXJhZ2UgPSAwXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIGNvdmVyYWdlICs9IGhlaWdodENhY2hlLmN1cnJlbnQuZ2V0KGl0ZW1LZXlzW2ldISkgPz8gUEVTU0lNSVNUSUNfSEVJR0hUXG4gICAgfVxuICAgIHdoaWxlIChzdGFydCA+IG1pblN0YXJ0ICYmIGNvdmVyYWdlIDwgbmVlZGVkKSB7XG4gICAgICBzdGFydC0tXG4gICAgICBjb3ZlcmFnZSArPVxuICAgICAgICBoZWlnaHRDYWNoZS5jdXJyZW50LmdldChpdGVtS2V5c1tzdGFydF0hKSA/PyBQRVNTSU1JU1RJQ19IRUlHSFRcbiAgICB9XG4gICAgLy8gU2xpZGUgY2FwOiBsaW1pdCBob3cgbWFueSBORVcgaXRlbXMgbW91bnQgdGhpcyBjb21taXQuIFNjcm9sbGluZyBpbnRvXG4gICAgLy8gYSBmcmVzaCByYW5nZSB3b3VsZCBvdGhlcndpc2UgbW91bnQgMTk0IGl0ZW1zIGF0IFBFU1NJTUlTVElDX0hFSUdIVD0xXG4gICAgLy8gY292ZXJhZ2UgXHUyMDE0IH4yOTBtcyBSZWFjdCByZW5kZXIgYmxvY2suIEdhdGVzIG9uIHNjcm9sbCBWRUxPQ0lUWVxuICAgIC8vICh8c2Nyb2xsVG9wIGRlbHRhIHNpbmNlIGxhc3QgY29tbWl0fCA+IDJcdTAwRDd2aWV3cG9ydEggXHUyMDE0IGtleS1yZXBlYXQgUGFnZVVwXG4gICAgLy8gbW92ZXMgfnZpZXdwb3J0SC8yIHBlciBwcmVzcywgMysgcHJlc3NlcyBiYXRjaGVkID0gZmFzdCBtb2RlKS4gQ292ZXJzXG4gICAgLy8gYm90aCBzY3JvbGxCeSAocGVuZGluZ0RlbHRhKSBhbmQgc2Nyb2xsVG8gKGRpcmVjdCB3cml0ZSkuIE5vcm1hbFxuICAgIC8vIHNpbmdsZS1QYWdlVXAgb3Igc3RpY2t5LWJyZWFrIGp1bXBzIHNraXAgdGhpcy4gVGhlIGNsYW1wXG4gICAgLy8gKHNldENsYW1wQm91bmRzKSBob2xkcyB0aGUgdmlld3BvcnQgYXQgdGhlIG1vdW50ZWQgZWRnZSBkdXJpbmdcbiAgICAvLyBjYXRjaC11cC4gT25seSBjYXBzIHJhbmdlIEdST1dUSDsgc2hyaW5raW5nIGlzIHVuYm91bmRlZC5cbiAgICBjb25zdCBwcmV2ID0gcHJldlJhbmdlUmVmLmN1cnJlbnRcbiAgICBjb25zdCBzY3JvbGxWZWxvY2l0eSA9XG4gICAgICBNYXRoLmFicyhzY3JvbGxUb3AgLSBsYXN0U2Nyb2xsVG9wUmVmLmN1cnJlbnQpICsgTWF0aC5hYnMocGVuZGluZ0RlbHRhKVxuICAgIGlmIChwcmV2ICYmIHNjcm9sbFZlbG9jaXR5ID4gdmlld3BvcnRIICogMikge1xuICAgICAgY29uc3QgW3BTLCBwRV0gPSBwcmV2XG4gICAgICBpZiAoc3RhcnQgPCBwUyAtIFNMSURFX1NURVApIHN0YXJ0ID0gcFMgLSBTTElERV9TVEVQXG4gICAgICBpZiAoZW5kID4gcEUgKyBTTElERV9TVEVQKSBlbmQgPSBwRSArIFNMSURFX1NURVBcbiAgICAgIC8vIEEgbGFyZ2UgZm9yd2FyZCBqdW1wIGNhbiBwdXNoIHN0YXJ0IHBhc3QgdGhlIGNhcHBlZCBlbmQgKHN0YXJ0XG4gICAgICAvLyBhZHZhbmNlcyB2aWEgYmluYXJ5IHNlYXJjaCB3aGlsZSBlbmQgaXMgY2FwcGVkIGF0IHBFICsgU0xJREVfU1RFUCkuXG4gICAgICAvLyBNb3VudCBTTElERV9TVEVQIGl0ZW1zIGZyb20gdGhlIG5ldyBzdGFydCBzbyB0aGUgdmlld3BvcnQgaXNuJ3RcbiAgICAgIC8vIGJsYW5rIGR1cmluZyBjYXRjaC11cC5cbiAgICAgIGlmIChzdGFydCA+IGVuZCkgZW5kID0gTWF0aC5taW4oc3RhcnQgKyBTTElERV9TVEVQLCBuKVxuICAgIH1cbiAgICBsYXN0U2Nyb2xsVG9wUmVmLmN1cnJlbnQgPSBzY3JvbGxUb3BcbiAgfVxuXG4gIC8vIERlY3JlbWVudCBmcmVlemUgQUZURVIgcmFuZ2UgaXMgY29tcHV0ZWQuIERvbid0IHVwZGF0ZSBwcmV2UmFuZ2VSZWZcbiAgLy8gZHVyaW5nIGZyZWV6ZSBzbyBib3RoIGZyb3plbiByZW5kZXJzIHJldXNlIHRoZSBPUklHSU5BTCBwcmUtcmVzaXplXG4gIC8vIHJhbmdlIChub3QgdGhlIGNsYW1wZWQtdG8tbiB2ZXJzaW9uIGlmIG1lc3NhZ2VzIGNoYW5nZWQgbWlkLWZyZWV6ZSkuXG4gIGlmIChmcmVlemVSZW5kZXJzUmVmLmN1cnJlbnQgPiAwKSB7XG4gICAgZnJlZXplUmVuZGVyc1JlZi5jdXJyZW50LS1cbiAgfSBlbHNlIHtcbiAgICBwcmV2UmFuZ2VSZWYuY3VycmVudCA9IFtzdGFydCwgZW5kXVxuICB9XG4gIC8vIHVzZURlZmVycmVkVmFsdWUgbGV0cyBSZWFjdCByZW5kZXIgd2l0aCB0aGUgT0xEIHJhbmdlIGZpcnN0IChjaGVhcCBcdTIwMTRcbiAgLy8gYWxsIG1lbW8gaGl0cykgdGhlbiB0cmFuc2l0aW9uIHRvIHRoZSBORVcgcmFuZ2UgKGV4cGVuc2l2ZSBcdTIwMTQgZnJlc2hcbiAgLy8gbW91bnRzIHdpdGggbWFya2VkLmxleGVyICsgZm9ybWF0VG9rZW4pLiBUaGUgdXJnZW50IHJlbmRlciBrZWVwcyBJbmtcbiAgLy8gcGFpbnRpbmcgYXQgaW5wdXQgcmF0ZTsgZnJlc2ggbW91bnRzIGhhcHBlbiBpbiBhIG5vbi1ibG9ja2luZ1xuICAvLyBiYWNrZ3JvdW5kIHJlbmRlci4gVGhpcyBpcyBSZWFjdCdzIG5hdGl2ZSB0aW1lLXNsaWNpbmc6IHRoZSA2Mm1zXG4gIC8vIGZyZXNoLW1vdW50IGJsb2NrIGJlY29tZXMgaW50ZXJydXB0aWJsZS4gVGhlIGNsYW1wIChzZXRDbGFtcEJvdW5kcylcbiAgLy8gYWxyZWFkeSBoYW5kbGVzIHZpZXdwb3J0IHBpbm5pbmcgc28gdGhlcmUncyBubyB2aXN1YWwgYXJ0aWZhY3QgZnJvbVxuICAvLyB0aGUgZGVmZXJyZWQgcmFuZ2UgbGFnZ2luZyBicmllZmx5IGJlaGluZCBzY3JvbGxUb3AuXG4gIC8vXG4gIC8vIE9ubHkgZGVmZXIgcmFuZ2UgR1JPV1RIIChzdGFydCBtb3ZpbmcgZWFybGllciAvIGVuZCBtb3ZpbmcgbGF0ZXIgYWRkc1xuICAvLyBmcmVzaCBtb3VudHMpLiBTaHJpbmtpbmcgaXMgY2hlYXAgKHVubW91bnQgPSByZW1vdmUgZmliZXIsIG5vIHBhcnNlKVxuICAvLyBhbmQgdGhlIGRlZmVycmVkIHZhbHVlIGxhZ2dpbmcgc2hyaW5rIGNhdXNlcyBzdGFsZSBvdmVyc2NhbiB0byBzdGF5XG4gIC8vIG1vdW50ZWQgb25lIGV4dHJhIHRpY2sgXHUyMDE0IGhhcm1sZXNzIGJ1dCBmYWlscyB0ZXN0cyBjaGVja2luZyBleGFjdFxuICAvLyByYW5nZSBhZnRlciBtZWFzdXJlbWVudC1kcml2ZW4gdGlnaHRlbmluZy5cbiAgY29uc3QgZFN0YXJ0ID0gdXNlRGVmZXJyZWRWYWx1ZShzdGFydClcbiAgY29uc3QgZEVuZCA9IHVzZURlZmVycmVkVmFsdWUoZW5kKVxuICBsZXQgZWZmU3RhcnQgPSBzdGFydCA8IGRTdGFydCA/IGRTdGFydCA6IHN0YXJ0XG4gIGxldCBlZmZFbmQgPSBlbmQgPiBkRW5kID8gZEVuZCA6IGVuZFxuICAvLyBBIGxhcmdlIGp1bXAgY2FuIG1ha2UgZWZmU3RhcnQgPiBlZmZFbmQgKHN0YXJ0IGp1bXBzIGZvcndhcmQgd2hpbGUgZEVuZFxuICAvLyBzdGlsbCBob2xkcyB0aGUgb2xkIHJhbmdlJ3MgZW5kKS4gU2tpcCBkZWZlcnJhbCB0byBhdm9pZCBhbiBpbnZlcnRlZFxuICAvLyByYW5nZS4gQWxzbyBza2lwIHdoZW4gc3RpY2t5IFx1MjAxNCBzY3JvbGxUb0JvdHRvbSBuZWVkcyB0aGUgdGFpbCBtb3VudGVkXG4gIC8vIE5PVyBzbyBzY3JvbGxUb3A9bWF4U2Nyb2xsIGxhbmRzIG9uIGNvbnRlbnQsIG5vdCBib3R0b21TcGFjZXIuIFRoZVxuICAvLyBkZWZlcnJlZCBkRW5kIChzdGlsbCBhdCBvbGQgcmFuZ2UpIHdvdWxkIHJlbmRlciBhbiBpbmNvbXBsZXRlIHRhaWwsXG4gIC8vIG1heFNjcm9sbCBzdGF5cyBhdCB0aGUgb2xkIGNvbnRlbnQgaGVpZ2h0LCBhbmQgXCJqdW1wIHRvIGJvdHRvbVwiIHN0b3BzXG4gIC8vIHNob3J0LiBTdGlja3kgc25hcCBpcyBhIHNpbmdsZSBmcmFtZSwgbm90IGNvbnRpbnVvdXMgc2Nyb2xsIFx1MjAxNCB0aGVcbiAgLy8gdGltZS1zbGljaW5nIGJlbmVmaXQgZG9lc24ndCBhcHBseS5cbiAgaWYgKGVmZlN0YXJ0ID4gZWZmRW5kIHx8IGlzU3RpY2t5KSB7XG4gICAgZWZmU3RhcnQgPSBzdGFydFxuICAgIGVmZkVuZCA9IGVuZFxuICB9XG4gIC8vIFNjcm9sbGluZyBET1dOIChwZW5kaW5nRGVsdGEgPiAwKTogYnlwYXNzIGVmZkVuZCBkZWZlcnJhbCBzbyB0aGUgdGFpbFxuICAvLyBtb3VudHMgaW1tZWRpYXRlbHkuIFdpdGhvdXQgdGhpcywgdGhlIGNsYW1wIChiYXNlZCBvbiBlZmZFbmQpIGhvbGRzXG4gIC8vIHNjcm9sbFRvcCBzaG9ydCBvZiB0aGUgcmVhbCBib3R0b20gXHUyMDE0IHVzZXIgc2Nyb2xscyBkb3duLCBoaXRzIGNsYW1wTWF4LFxuICAvLyBzdG9wcywgUmVhY3QgY2F0Y2hlcyB1cCBlZmZFbmQsIGNsYW1wTWF4IHdpZGVucywgYnV0IHRoZSB1c2VyIGFscmVhZHlcbiAgLy8gcmVsZWFzZWQuIEZlZWxzIHN0dWNrLWJlZm9yZS1ib3R0b20uIGVmZlN0YXJ0IHN0YXlzIGRlZmVycmVkIHNvXG4gIC8vIHNjcm9sbC1VUCBrZWVwcyB0aW1lLXNsaWNpbmcgKG9sZGVyIG1lc3NhZ2VzIHBhcnNlIG9uIG1vdW50IFx1MjAxNCB0aGVcbiAgLy8gZXhwZW5zaXZlIGRpcmVjdGlvbikuXG4gIGlmIChwZW5kaW5nRGVsdGEgPiAwKSB7XG4gICAgZWZmRW5kID0gZW5kXG4gIH1cbiAgLy8gRmluYWwgTyh2aWV3cG9ydCkgZW5mb3JjZW1lbnQuIFRoZSBpbnRlcm1lZGlhdGUgY2FwcyAobWF4RW5kPXN0YXJ0K1xuICAvLyBNQVhfTU9VTlRFRF9JVEVNUywgc2xpZGUgY2FwLCBkZWZlcnJlZC1pbnRlcnNlY3Rpb24pIGJvdW5kIFtzdGFydCxlbmRdXG4gIC8vIGJ1dCB0aGUgZGVmZXJyZWQrYnlwYXNzIGNvbWJpbmF0aW9ucyBhYm92ZSBjYW4gbGV0IFtlZmZTdGFydCxlZmZFbmRdXG4gIC8vIHNsaXA6IGUuZy4gZHVyaW5nIHN1c3RhaW5lZCBQYWdlVXAgd2hlbiBjb25jdXJyZW50IG1vZGUgaW50ZXJsZWF2ZXNcbiAgLy8gZFN0YXJ0IHVwZGF0ZXMgd2l0aCBlZmZFbmQ9ZW5kIGJ5cGFzc2VzIGFjcm9zcyBjb21taXRzLCB0aGUgZWZmZWN0aXZlXG4gIC8vIHdpbmRvdyBjYW4gZHJpZnQgd2lkZXIgdGhhbiBlaXRoZXIgaW1tZWRpYXRlIG9yIGRlZmVycmVkIGFsb25lLiBPbiBhXG4gIC8vIDEwSy1saW5lIHJlc3VtZWQgc2Vzc2lvbiB0aGlzIHNob3dlZCBhcyArMjcwTUIgUlNTIGR1cmluZyBQYWdlVXAgc3BhbVxuICAvLyAoeW9nYSBOb2RlIGNvbnN0cnVjdG9yICsgY3JlYXRlV29ya0luUHJvZ3Jlc3MgZmliZXIgYWxsb2MgcHJvcG9ydGlvbmFsXG4gIC8vIHRvIHNjcm9sbCBkaXN0YW5jZSkuIFRyaW0gdGhlIGZhciBlZGdlIFx1MjAxNCBieSB2aWV3cG9ydCBwb3NpdGlvbiBcdTIwMTQgdG8ga2VlcFxuICAvLyBmaWJlciBjb3VudCBPKHZpZXdwb3J0KSByZWdhcmRsZXNzIG9mIGRlZmVycmVkLXZhbHVlIHNjaGVkdWxpbmcuXG4gIGlmIChlZmZFbmQgLSBlZmZTdGFydCA+IE1BWF9NT1VOVEVEX0lURU1TKSB7XG4gICAgLy8gVHJpbSBzaWRlIGlzIGRlY2lkZWQgYnkgdmlld3BvcnQgUE9TSVRJT04sIG5vdCBwZW5kaW5nRGVsdGEgZGlyZWN0aW9uLlxuICAgIC8vIHBlbmRpbmdEZWx0YSBkcmFpbnMgdG8gMCBiZXR3ZWVuIGZyYW1lcyB3aGlsZSBkU3RhcnQvZEVuZCBsYWcgdW5kZXJcbiAgICAvLyBjb25jdXJyZW50IHNjaGVkdWxpbmc7IGEgZGlyZWN0aW9uLWJhc2VkIHRyaW0gdGhlbiBmbGlwcyBmcm9tIFwidHJpbVxuICAgIC8vIHRhaWxcIiB0byBcInRyaW0gaGVhZFwiIG1pZC1zZXR0bGUsIGJ1bXBpbmcgZWZmU3RhcnQgXHUyMTkyIGVmZlRvcFNwYWNlciBcdTIxOTJcbiAgICAvLyBjbGFtcE1pbiBcdTIxOTIgc2V0Q2xhbXBCb3VuZHMgeWFua3Mgc2Nyb2xsVG9wIGRvd24gXHUyMTkyIHNjcm9sbGJhY2sgdmFuaXNoZXMuXG4gICAgLy8gUG9zaXRpb24tYmFzZWQ6IGtlZXAgd2hpY2hldmVyIGVuZCB0aGUgdmlld3BvcnQgaXMgY2xvc2VyIHRvLlxuICAgIGNvbnN0IG1pZCA9IChvZmZzZXRzW2VmZlN0YXJ0XSEgKyBvZmZzZXRzW2VmZkVuZF0hKSAvIDJcbiAgICBpZiAoc2Nyb2xsVG9wIC0gbGlzdE9yaWdpblJlZi5jdXJyZW50IDwgbWlkKSB7XG4gICAgICBlZmZFbmQgPSBlZmZTdGFydCArIE1BWF9NT1VOVEVEX0lURU1TXG4gICAgfSBlbHNlIHtcbiAgICAgIGVmZlN0YXJ0ID0gZWZmRW5kIC0gTUFYX01PVU5URURfSVRFTVNcbiAgICB9XG4gIH1cblxuICAvLyBXcml0ZSByZW5kZXItdGltZSBjbGFtcCBib3VuZHMgaW4gYSBsYXlvdXQgZWZmZWN0IChub3QgZHVyaW5nIHJlbmRlciBcdTIwMTRcbiAgLy8gbXV0YXRpbmcgRE9NIGR1cmluZyBSZWFjdCByZW5kZXIgdmlvbGF0ZXMgcHVyaXR5KS4gcmVuZGVyLW5vZGUtdG8tb3V0cHV0XG4gIC8vIGNsYW1wcyBzY3JvbGxUb3AgdG8gdGhpcyBzcGFuIHNvIGJ1cnN0IHNjcm9sbFRvIGNhbGxzIHRoYXQgcmFjZSBwYXN0XG4gIC8vIFJlYWN0J3MgYXN5bmMgcmUtcmVuZGVyIHNob3cgdGhlIEVER0Ugb2YgbW91bnRlZCBjb250ZW50ICh0aGUgbGFzdC9maXJzdFxuICAvLyB2aXNpYmxlIG1lc3NhZ2UpIGluc3RlYWQgb2YgYmxhbmsgc3BhY2VyLlxuICAvL1xuICAvLyBDbGFtcCBNVVNUIHVzZSB0aGUgRUZGRUNUSVZFIChkZWZlcnJlZCkgcmFuZ2UsIG5vdCB0aGUgaW1tZWRpYXRlIG9uZS5cbiAgLy8gRHVyaW5nIGZhc3Qgc2Nyb2xsLCBpbW1lZGlhdGUgW3N0YXJ0LGVuZF0gbWF5IGFscmVhZHkgY292ZXIgdGhlIG5ld1xuICAvLyBzY3JvbGxUb3AgcG9zaXRpb24sIGJ1dCB0aGUgY2hpbGRyZW4gc3RpbGwgcmVuZGVyIGF0IHRoZSBkZWZlcnJlZFxuICAvLyAob2xkZXIpIHJhbmdlLiBJZiBjbGFtcCB1c2VzIGltbWVkaWF0ZSBib3VuZHMsIHRoZSBkcmFpbi1nYXRlIGluXG4gIC8vIHJlbmRlci1ub2RlLXRvLW91dHB1dCBzZWVzIHNjcm9sbFRvcCB3aXRoaW4gY2xhbXAgXHUyMTkyIGRyYWlucyBwYXN0IHRoZVxuICAvLyBkZWZlcnJlZCBjaGlsZHJlbidzIHNwYW4gXHUyMTkyIHZpZXdwb3J0IGxhbmRzIGluIHNwYWNlciBcdTIxOTIgd2hpdGUgZmxhc2guXG4gIC8vIFVzaW5nIGVmZlN0YXJ0L2VmZkVuZCBrZWVwcyBjbGFtcCBzeW5jZWQgd2l0aCB3aGF0J3MgYWN0dWFsbHkgbW91bnRlZC5cbiAgLy9cbiAgLy8gU2tpcCBjbGFtcCB3aGVuIHN0aWNreSBcdTIwMTQgcmVuZGVyLW5vZGUtdG8tb3V0cHV0IHBpbnMgc2Nyb2xsVG9wPW1heFNjcm9sbFxuICAvLyBhdXRob3JpdGF0aXZlbHkuIENsYW1waW5nIGR1cmluZyBjb2xkLXN0YXJ0L2xvYWQgY2F1c2VzIGZsaWNrZXI6IGZpcnN0XG4gIC8vIHJlbmRlciB1c2VzIGVzdGltYXRlLWJhc2VkIG9mZnNldHMsIGNsYW1wIHNldCwgc3RpY2t5LWZvbGxvdyBtb3Zlc1xuICAvLyBzY3JvbGxUb3AsIG1lYXN1cmVtZW50IGZpcmVzLCBvZmZzZXRzIHJlYnVpbGQgd2l0aCByZWFsIGhlaWdodHMsIHNlY29uZFxuICAvLyByZW5kZXIncyBjbGFtcCBkaWZmZXJzIFx1MjE5MiBzY3JvbGxUb3AgY2xhbXAtYWRqdXN0cyBcdTIxOTIgY29udGVudCBzaGlmdHMuXG4gIGNvbnN0IGxpc3RPcmlnaW4gPSBsaXN0T3JpZ2luUmVmLmN1cnJlbnRcbiAgY29uc3QgZWZmVG9wU3BhY2VyID0gb2Zmc2V0c1tlZmZTdGFydF0hXG4gIC8vIEF0IGVmZlN0YXJ0PTAgdGhlcmUncyBubyB1bm1vdW50ZWQgY29udGVudCBhYm92ZSBcdTIwMTQgdGhlIGNsYW1wIG11c3QgYWxsb3dcbiAgLy8gc2Nyb2xsaW5nIHBhc3QgbGlzdE9yaWdpbiB0byBzZWUgcHJlLWxpc3QgY29udGVudCAobG9nbywgaGVhZGVyKSB0aGF0XG4gIC8vIHNpdHMgaW4gdGhlIFNjcm9sbEJveCBidXQgb3V0c2lkZSBWaXJ0dWFsTWVzc2FnZUxpc3QuIE9ubHkgY2xhbXAgd2hlblxuICAvLyB0aGUgdG9wU3BhY2VyIGlzIG5vbnplcm8gKHRoZXJlIEFSRSB1bm1vdW50ZWQgaXRlbXMgYWJvdmUpLlxuICBjb25zdCBjbGFtcE1pbiA9IGVmZlN0YXJ0ID09PSAwID8gMCA6IGVmZlRvcFNwYWNlciArIGxpc3RPcmlnaW5cbiAgLy8gQXQgZWZmRW5kPW4gdGhlcmUncyBubyBib3R0b21TcGFjZXIgXHUyMDE0IG5vdGhpbmcgdG8gYXZvaWQgcmFjaW5nIHBhc3QuIFVzaW5nXG4gIC8vIG9mZnNldHNbbl0gaGVyZSB3b3VsZCBiYWtlIGluIGhlaWdodENhY2hlIChvbmUgcmVuZGVyIGJlaGluZCBZb2dhKSwgYW5kXG4gIC8vIHdoZW4gdGhlIHRhaWwgaXRlbSBpcyBTVFJFQU1JTkcgaXRzIGNhY2hlZCBoZWlnaHQgbGFncyBpdHMgcmVhbCBoZWlnaHQgYnlcbiAgLy8gaG93ZXZlciBtdWNoIGFycml2ZWQgc2luY2UgbGFzdCBtZWFzdXJlLiBTdGlja3ktYnJlYWsgdGhlbiBjbGFtcHNcbiAgLy8gc2Nyb2xsVG9wIGJlbG93IHRoZSByZWFsIG1heCwgcHVzaGluZyB0aGUgc3RyZWFtaW5nIHRleHQgb2ZmLXZpZXdwb3J0XG4gIC8vICh0aGUgXCJzY3JvbGxlZCB1cCwgcmVzcG9uc2UgZGlzYXBwZWFyZWRcIiBidWcpLiBJbmZpbml0eSA9IHVuYm91bmRlZDpcbiAgLy8gcmVuZGVyLW5vZGUtdG8tb3V0cHV0J3Mgb3duIE1hdGgubWluKGN1ciwgbWF4U2Nyb2xsKSBnb3Zlcm5zIGluc3RlYWQuXG4gIGNvbnN0IGNsYW1wTWF4ID1cbiAgICBlZmZFbmQgPT09IG5cbiAgICAgID8gSW5maW5pdHlcbiAgICAgIDogTWF0aC5tYXgoZWZmVG9wU3BhY2VyLCBvZmZzZXRzW2VmZkVuZF0hIC0gdmlld3BvcnRIKSArIGxpc3RPcmlnaW5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTdGlja3kpIHtcbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zZXRDbGFtcEJvdW5kcyh1bmRlZmluZWQsIHVuZGVmaW5lZClcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNldENsYW1wQm91bmRzKGNsYW1wTWluLCBjbGFtcE1heClcbiAgICB9XG4gIH0pXG5cbiAgLy8gTWVhc3VyZSBoZWlnaHRzIGZyb20gdGhlIFBSRVZJT1VTIEluayByZW5kZXIuIFJ1bnMgZXZlcnkgY29tbWl0IChub1xuICAvLyBkZXBzKSBiZWNhdXNlIFlvZ2EgcmVjb21wdXRlcyBsYXlvdXQgd2l0aG91dCBSZWFjdCBrbm93aW5nLiB5b2dhTm9kZVxuICAvLyBoZWlnaHRzIGZvciBpdGVtcyBtb3VudGVkIFx1MjI2NTEgZnJhbWUgYWdvIGFyZSB2YWxpZDsgYnJhbmQtbmV3IGl0ZW1zXG4gIC8vIGhhdmVuJ3QgYmVlbiBsYWlkIG91dCB5ZXQgKHRoYXQgaGFwcGVucyBpbiByZXNldEFmdGVyQ29tbWl0IFx1MjE5MiBvblJlbmRlcixcbiAgLy8gYWZ0ZXIgdGhpcyBlZmZlY3QpLlxuICAvL1xuICAvLyBEaXN0aW5ndWlzaGluZyBcImg9MDogWW9nYSBoYXNuJ3QgcnVuXCIgKHRyYW5zaWVudCwgc2tpcCkgZnJvbSBcImg9MDpcbiAgLy8gTWVzc2FnZVJvdyByZW5kZXJlZCBudWxsXCIgKHBlcm1hbmVudCwgY2FjaGUgaXQpOiBnZXRDb21wdXRlZFdpZHRoKCkgPiAwXG4gIC8vIHByb3ZlcyBZb2dhIEhBUyBsYWlkIG91dCB0aGlzIG5vZGUgKHdpZHRoIGNvbWVzIGZyb20gdGhlIGNvbnRhaW5lcixcbiAgLy8gYWx3YXlzIG5vbi16ZXJvIGZvciBhIEJveCBpbiBhIGNvbHVtbikuIElmIHdpZHRoIGlzIHNldCBhbmQgaGVpZ2h0IGlzXG4gIC8vIDAsIHRoZSBpdGVtIGlzIGdlbnVpbmVseSBlbXB0eSBcdTIwMTQgY2FjaGUgMCBzbyB0aGUgc3RhcnQtYWR2YW5jZSBnYXRlXG4gIC8vIGRvZXNuJ3QgYmxvY2sgb24gaXQgZm9yZXZlci4gV2l0aG91dCB0aGlzLCBhIG51bGwtcmVuZGVyaW5nIG1lc3NhZ2VcbiAgLy8gYXQgdGhlIHN0YXJ0IGJvdW5kYXJ5IGZyZWV6ZXMgdGhlIHJhbmdlIChzZWVuIGFzIGJsYW5rIHZpZXdwb3J0IHdoZW5cbiAgLy8gc2Nyb2xsaW5nIGRvd24gYWZ0ZXIgc2Nyb2xsaW5nIHVwKS5cbiAgLy9cbiAgLy8gTk8gc2V0U3RhdGUuIEEgc2V0U3RhdGUgaGVyZSB3b3VsZCBzY2hlZHVsZSBhIHNlY29uZCBjb21taXQgd2l0aFxuICAvLyBzaGlmdGVkIG9mZnNldHMsIGFuZCBzaW5jZSBJbmsgd3JpdGVzIHN0ZG91dCBvbiBldmVyeSBjb21taXRcbiAgLy8gKHJlY29uY2lsZXIucmVzZXRBZnRlckNvbW1pdCBcdTIxOTIgb25SZW5kZXIpLCB0aGF0J3MgdHdvIHdyaXRlcyB3aXRoXG4gIC8vIGRpZmZlcmVudCBzcGFjZXIgaGVpZ2h0cyBcdTIxOTIgdmlzaWJsZSBmbGlja2VyLiBIZWlnaHRzIHByb3BhZ2F0ZSB0b1xuICAvLyBvZmZzZXRzIG9uIHRoZSBuZXh0IG5hdHVyYWwgcmVuZGVyLiBPbmUtZnJhbWUgbGFnLCBhYnNvcmJlZCBieSBvdmVyc2Nhbi5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzcGFjZXJZb2dhID0gc3BhY2VyUmVmLmN1cnJlbnQ/LnlvZ2FOb2RlXG4gICAgaWYgKHNwYWNlcllvZ2EgJiYgc3BhY2VyWW9nYS5nZXRDb21wdXRlZFdpZHRoKCkgPiAwKSB7XG4gICAgICBsaXN0T3JpZ2luUmVmLmN1cnJlbnQgPSBzcGFjZXJZb2dhLmdldENvbXB1dGVkVG9wKClcbiAgICB9XG4gICAgaWYgKHNraXBNZWFzdXJlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICBza2lwTWVhc3VyZW1lbnRSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGFueUNoYW5nZWQgPSBmYWxzZVxuICAgIGZvciAoY29uc3QgW2tleSwgZWxdIG9mIGl0ZW1SZWZzLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHlvZ2EgPSBlbC55b2dhTm9kZVxuICAgICAgaWYgKCF5b2dhKSBjb250aW51ZVxuICAgICAgY29uc3QgaCA9IHlvZ2EuZ2V0Q29tcHV0ZWRIZWlnaHQoKVxuICAgICAgY29uc3QgcHJldiA9IGhlaWdodENhY2hlLmN1cnJlbnQuZ2V0KGtleSlcbiAgICAgIGlmIChoID4gMCkge1xuICAgICAgICBpZiAocHJldiAhPT0gaCkge1xuICAgICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuc2V0KGtleSwgaClcbiAgICAgICAgICBhbnlDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHlvZ2EuZ2V0Q29tcHV0ZWRXaWR0aCgpID4gMCAmJiBwcmV2ICE9PSAwKSB7XG4gICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuc2V0KGtleSwgMClcbiAgICAgICAgYW55Q2hhbmdlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFueUNoYW5nZWQpIG9mZnNldFZlcnNpb25SZWYuY3VycmVudCsrXG4gIH0pXG5cbiAgLy8gU3RhYmxlIHBlci1rZXkgY2FsbGJhY2sgcmVmcy4gUmVhY3QncyByZWYtc3dhcCBkYW5jZSAob2xkKG51bGwpIHRoZW5cbiAgLy8gbmV3KGVsKSkgaXMgYSBuby1vcCB3aGVuIHRoZSBjYWxsYmFjayBpcyBpZGVudGl0eS1zdGFibGUsIGF2b2lkaW5nXG4gIC8vIGl0ZW1SZWZzIGNodXJuIG9uIGV2ZXJ5IHJlbmRlci4gR0MnZCBhbG9uZ3NpZGUgaGVpZ2h0Q2FjaGUgYWJvdmUuXG4gIC8vIFRoZSByZWYobnVsbCkgcGF0aCBhbHNvIGNhcHR1cmVzIGhlaWdodCBhdCB1bm1vdW50IFx1MjAxNCB0aGUgeW9nYU5vZGUgaXNcbiAgLy8gc3RpbGwgdmFsaWQgdGhlbiAocmVjb25jaWxlciBjYWxscyByZWYobnVsbCkgYmVmb3JlIHJlbW92ZUNoaWxkIFx1MjE5MlxuICAvLyBmcmVlUmVjdXJzaXZlKSwgc28gd2UgZ2V0IHRoZSBmaW5hbCBtZWFzdXJlbWVudCBiZWZvcmUgV0FTTSByZWxlYXNlLlxuICBjb25zdCBtZWFzdXJlUmVmID0gdXNlQ2FsbGJhY2soKGtleTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGZuID0gcmVmQ2FjaGUuY3VycmVudC5nZXQoa2V5KVxuICAgIGlmICghZm4pIHtcbiAgICAgIGZuID0gKGVsOiBET01FbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBpdGVtUmVmcy5jdXJyZW50LnNldChrZXksIGVsKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHlvZ2EgPSBpdGVtUmVmcy5jdXJyZW50LmdldChrZXkpPy55b2dhTm9kZVxuICAgICAgICAgIGlmICh5b2dhICYmICFza2lwTWVhc3VyZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgaCA9IHlvZ2EuZ2V0Q29tcHV0ZWRIZWlnaHQoKVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoaCA+IDAgfHwgeW9nYS5nZXRDb21wdXRlZFdpZHRoKCkgPiAwKSAmJlxuICAgICAgICAgICAgICBoZWlnaHRDYWNoZS5jdXJyZW50LmdldChrZXkpICE9PSBoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaGVpZ2h0Q2FjaGUuY3VycmVudC5zZXQoa2V5LCBoKVxuICAgICAgICAgICAgICBvZmZzZXRWZXJzaW9uUmVmLmN1cnJlbnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtUmVmcy5jdXJyZW50LmRlbGV0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlZkNhY2hlLmN1cnJlbnQuc2V0KGtleSwgZm4pXG4gICAgfVxuICAgIHJldHVybiBmblxuICB9LCBbXSlcblxuICBjb25zdCBnZXRJdGVtVG9wID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHlvZ2EgPSBpdGVtUmVmcy5jdXJyZW50LmdldChpdGVtS2V5c1tpbmRleF0hKT8ueW9nYU5vZGVcbiAgICAgIGlmICgheW9nYSB8fCB5b2dhLmdldENvbXB1dGVkV2lkdGgoKSA9PT0gMCkgcmV0dXJuIC0xXG4gICAgICByZXR1cm4geW9nYS5nZXRDb21wdXRlZFRvcCgpXG4gICAgfSxcbiAgICBbaXRlbUtleXNdLFxuICApXG5cbiAgY29uc3QgZ2V0SXRlbUVsZW1lbnQgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4gaXRlbVJlZnMuY3VycmVudC5nZXQoaXRlbUtleXNbaW5kZXhdISkgPz8gbnVsbCxcbiAgICBbaXRlbUtleXNdLFxuICApXG4gIGNvbnN0IGdldEl0ZW1IZWlnaHQgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4gaGVpZ2h0Q2FjaGUuY3VycmVudC5nZXQoaXRlbUtleXNbaW5kZXhdISksXG4gICAgW2l0ZW1LZXlzXSxcbiAgKVxuICBjb25zdCBzY3JvbGxUb0luZGV4ID0gdXNlQ2FsbGJhY2soXG4gICAgKGk6IG51bWJlcikgPT4ge1xuICAgICAgLy8gb2Zmc2V0c1JlZi5jdXJyZW50IGhvbGRzIGxhdGVzdCBjYWNoZWQgb2Zmc2V0cyAoZXZlbnQgaGFuZGxlcnMgcnVuXG4gICAgICAvLyBiZXR3ZWVuIHJlbmRlcnM7IGEgcmVuZGVyLXRpbWUgY2xvc3VyZSB3b3VsZCBiZSBzdGFsZSkuXG4gICAgICBjb25zdCBvID0gb2Zmc2V0c1JlZi5jdXJyZW50XG4gICAgICBpZiAoaSA8IDAgfHwgaSA+PSBvLm4pIHJldHVyblxuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvKG8uYXJyW2ldISArIGxpc3RPcmlnaW5SZWYuY3VycmVudClcbiAgICB9LFxuICAgIFtzY3JvbGxSZWZdLFxuICApXG5cbiAgY29uc3QgZWZmQm90dG9tU3BhY2VyID0gdG90YWxIZWlnaHQgLSBvZmZzZXRzW2VmZkVuZF0hXG5cbiAgcmV0dXJuIHtcbiAgICByYW5nZTogW2VmZlN0YXJ0LCBlZmZFbmRdLFxuICAgIHRvcFNwYWNlcjogZWZmVG9wU3BhY2VyLFxuICAgIGJvdHRvbVNwYWNlcjogZWZmQm90dG9tU3BhY2VyLFxuICAgIG1lYXN1cmVSZWYsXG4gICAgc3BhY2VyUmVmLFxuICAgIG9mZnNldHMsXG4gICAgZ2V0SXRlbVRvcCxcbiAgICBnZXRJdGVtRWxlbWVudCxcbiAgICBnZXRJdGVtSGVpZ2h0LFxuICAgIHNjcm9sbFRvSW5kZXgsXG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi4vaG9va3MvdXNlVmlydHVhbFNjcm9sbC5qcydcbmltcG9ydCB0eXBlIHsgU2Nyb2xsQm94SGFuZGxlIH0gZnJvbSAnLi4vaW5rL2NvbXBvbmVudHMvU2Nyb2xsQm94LmpzJ1xuaW1wb3J0IHR5cGUgeyBET01FbGVtZW50IH0gZnJvbSAnLi4vaW5rL2RvbS5qcydcbmltcG9ydCB0eXBlIHsgTWF0Y2hQb3NpdGlvbiB9IGZyb20gJy4uL2luay9yZW5kZXItdG8tc2NyZWVuLmpzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBSZW5kZXJhYmxlTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBUZXh0SG92ZXJDb2xvckNvbnRleHQgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vVGhlbWVkVGV4dC5qcydcbmltcG9ydCB7IFNjcm9sbENocm9tZUNvbnRleHQgfSBmcm9tICcuL0Z1bGxzY3JlZW5MYXlvdXQuanMnXG5cbi8vIFJvd3Mgb2YgYnJlYXRoaW5nIHJvb20gYWJvdmUgdGhlIHRhcmdldCB3aGVuIHdlIHNjcm9sbFRvLlxuY29uc3QgSEVBRFJPT00gPSAzXG5cbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi91dGlscy9zbGVlcC5qcydcbmltcG9ydCB7IHJlbmRlcmFibGVTZWFyY2hUZXh0IH0gZnJvbSAnLi4vdXRpbHMvdHJhbnNjcmlwdFNlYXJjaC5qcydcbmltcG9ydCB7XG4gIGlzTmF2aWdhYmxlTWVzc2FnZSxcbiAgdHlwZSBNZXNzYWdlQWN0aW9uc05hdixcbiAgdHlwZSBNZXNzYWdlQWN0aW9uc1N0YXRlLFxuICB0eXBlIE5hdmlnYWJsZU1lc3NhZ2UsXG4gIHN0cmlwU3lzdGVtUmVtaW5kZXJzLFxuICB0b29sQ2FsbE9mLFxufSBmcm9tICcuL21lc3NhZ2VBY3Rpb25zLmpzJ1xuXG4vLyBGYWxsYmFjayBleHRyYWN0b3I6IGxvd2VyICsgY2FjaGUgaGVyZSBmb3IgY2FsbGVycyB3aXRob3V0IHRoZVxuLy8gTWVzc2FnZXMudHN4IHRvb2wtbG9va3VwIHBhdGggKHRlc3RzLCBzdGF0aWMgY29udGV4dHMpLiBNZXNzYWdlcy50c3hcbi8vIHByb3ZpZGVzIGl0cyBvd24gbG93ZXJpbmcgY2FjaGUgdGhhdCBhbHNvIGhhbmRsZXMgdG9vbCBleHRyYWN0U2VhcmNoVGV4dC5cbmNvbnN0IGZhbGxiYWNrTG93ZXJDYWNoZSA9IG5ldyBXZWFrTWFwPFJlbmRlcmFibGVNZXNzYWdlLCBzdHJpbmc+KClcbmZ1bmN0aW9uIGRlZmF1bHRFeHRyYWN0U2VhcmNoVGV4dChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKTogc3RyaW5nIHtcbiAgY29uc3QgY2FjaGVkID0gZmFsbGJhY2tMb3dlckNhY2hlLmdldChtc2cpXG4gIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZFxuICBjb25zdCBsb3dlcmVkID0gcmVuZGVyYWJsZVNlYXJjaFRleHQobXNnKVxuICBmYWxsYmFja0xvd2VyQ2FjaGUuc2V0KG1zZywgbG93ZXJlZClcbiAgcmV0dXJuIGxvd2VyZWRcbn1cblxuZXhwb3J0IHR5cGUgU3RpY2t5UHJvbXB0ID1cbiAgfCB7IHRleHQ6IHN0cmluZzsgc2Nyb2xsVG86ICgpID0+IHZvaWQgfVxuICAvLyBDbGljayBzZXRzIHRoaXMg4oCUIGhlYWRlciBISURFUyBidXQgcGFkZGluZyBzdGF5cyBjb2xsYXBzZWQgKDApIHNvXG4gIC8vIHRoZSBjb250ZW50IOKdryBsYW5kcyBhdCBzY3JlZW4gcm93IDAgaW5zdGVhZCBvZiByb3cgMS4gQ2xlYXJlZCBvblxuICAvLyB0aGUgbmV4dCBzdGlja3ktcHJvbXB0IGNvbXB1dGUgKHVzZXIgc2Nyb2xscyBhZ2FpbikuXG4gIHwgJ2NsaWNrZWQnXG5cbi8qKiBIdWdlIHBhc3RlZCBwcm9tcHRzIChjYXQgZmlsZSB8IGNsYXVkZSkgY2FuIGJlIE1Ccy4gSGVhZGVyIHdyYXBzIGludG9cbiAqICAyIHJvd3MgdmlhIG92ZXJmbG93OmhpZGRlbiDigJQgdGhpcyBqdXN0IGJvdW5kcyB0aGUgUmVhY3QgcHJvcCBzaXplLiAqL1xuY29uc3QgU1RJQ0tZX1RFWFRfQ0FQID0gNTAwXG5cbi8qKiBJbXBlcmF0aXZlIGhhbmRsZSBmb3IgdHJhbnNjcmlwdCBuYXZpZ2F0aW9uLiBNZXRob2RzIGNvbXB1dGUgbWF0Y2hlc1xuICogIEhFUkUgKHJlbmRlcmFibGVNZXNzYWdlcyBpbmRpY2VzIGFyZSBvbmx5IHZhbGlkIGluc2lkZSB0aGlzIGNvbXBvbmVudCDigJRcbiAqICBNZXNzYWdlcy50c3ggZmlsdGVycyBhbmQgcmVvcmRlcnMsIFJFUEwgY2FuJ3QgY29tcHV0ZSBleHRlcm5hbGx5KS4gKi9cbmV4cG9ydCB0eXBlIEp1bXBIYW5kbGUgPSB7XG4gIGp1bXBUb0luZGV4OiAoaTogbnVtYmVyKSA9PiB2b2lkXG4gIHNldFNlYXJjaFF1ZXJ5OiAocTogc3RyaW5nKSA9PiB2b2lkXG4gIG5leHRNYXRjaDogKCkgPT4gdm9pZFxuICBwcmV2TWF0Y2g6ICgpID0+IHZvaWRcbiAgLyoqIENhcHR1cmUgY3VycmVudCBzY3JvbGxUb3AgYXMgdGhlIGluY3NlYXJjaCBhbmNob3IuIFR5cGluZyBqdW1wc1xuICAgKiAgYXJvdW5kIGFzIHByZXZpZXc7IDAtbWF0Y2hlcyBzbmFwcyBiYWNrIGhlcmUuIEVudGVyL24vTiBuZXZlclxuICAgKiAgcmVzdG9yZSAodGhleSBkb24ndCBjYWxsIHNldFNlYXJjaFF1ZXJ5IHdpdGggZW1wdHkpLiBOZXh0IC8gY2FsbFxuICAgKiAgb3ZlcndyaXRlcy4gKi9cbiAgc2V0QW5jaG9yOiAoKSA9PiB2b2lkXG4gIC8qKiBXYXJtIHRoZSBzZWFyY2gtdGV4dCBjYWNoZSBieSBleHRyYWN0aW5nIGV2ZXJ5IG1lc3NhZ2UncyB0ZXh0LlxuICAgKiAgUmV0dXJucyBlbGFwc2VkIG1zLCBvciAwIGlmIGFscmVhZHkgd2FybSAoc3Vic2VxdWVudCAvIGluIHNhbWVcbiAgICogIHRyYW5zY3JpcHQgc2Vzc2lvbikuIFlpZWxkcyBiZWZvcmUgd29yayBzbyB0aGUgY2FsbGVyIGNhbiBwYWludFxuICAgKiAgXCJpbmRleGluZ+KAplwiIGZpcnN0LiBDYWxsZXIgc2hvd3MgXCJpbmRleGVkIGluIFhtc1wiIG9uIHJlc29sdmUuICovXG4gIHdhcm1TZWFyY2hJbmRleDogKCkgPT4gUHJvbWlzZTxudW1iZXI+XG4gIC8qKiBNYW51YWwgc2Nyb2xsIChqL2svUGdVcC93aGVlbCkgZXhpdGVkIHRoZSBzZWFyY2ggY29udGV4dC4gQ2xlYXJcbiAgICogIHBvc2l0aW9ucyAoeWVsbG93IGdvZXMgYXdheSwgaW52ZXJzZSBoaWdobGlnaHRzIHN0YXkpLiBOZXh0IG4vTlxuICAgKiAgcmUtZXN0YWJsaXNoZXMgdmlhIHN0ZXAoKeKGkmp1bXAoKS4gV2lyZWQgZnJvbSBTY3JvbGxLZXliaW5kaW5nSGFuZGxlcidzXG4gICAqICBvblNjcm9sbCDigJQgb25seSBmaXJlcyBmb3Iga2V5Ym9hcmQvd2hlZWwsIG5vdCBwcm9ncmFtbWF0aWMgc2Nyb2xsVG8uICovXG4gIGRpc2FybVNlYXJjaDogKCkgPT4gdm9pZFxufVxuXG50eXBlIFByb3BzID0ge1xuICBtZXNzYWdlczogUmVuZGVyYWJsZU1lc3NhZ2VbXVxuICBzY3JvbGxSZWY6IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPlxuICAvKiogSW52YWxpZGF0ZXMgaGVpZ2h0Q2FjaGUgb24gY2hhbmdlIOKAlCBjYWNoZWQgaGVpZ2h0cyBmcm9tIGEgZGlmZmVyZW50XG4gICAqICB3aWR0aCBhcmUgd3JvbmcgKHRleHQgcmV3cmFwIOKGkiBibGFjayBzY3JlZW4gb24gc2Nyb2xsLXVwIGFmdGVyIHdpZGVuKS4gKi9cbiAgY29sdW1uczogbnVtYmVyXG4gIGl0ZW1LZXk6IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PiBzdHJpbmdcbiAgcmVuZGVySXRlbTogKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsIGluZGV4OiBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZVxuICAvKiogRmlyZXMgd2hlbiBhIG1lc3NhZ2UgQm94IGlzIGNsaWNrZWQgKHRvZ2dsZSBwZXItbWVzc2FnZSB2ZXJib3NlKS4gKi9cbiAgb25JdGVtQ2xpY2s/OiAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSkgPT4gdm9pZFxuICAvKiogUGVyLWl0ZW0gZmlsdGVyIOKAlCBzdXBwcmVzcyBob3Zlci9jbGljayBmb3IgbWVzc2FnZXMgd2hlcmUgdGhlIHZlcmJvc2VcbiAgICogIHRvZ2dsZSBkb2VzIG5vdGhpbmcgKHRleHQsIGZpbGUgZWRpdHMsIGV0YykuIERlZmF1bHRzIHRvIGFsbC1jbGlja2FibGUuICovXG4gIGlzSXRlbUNsaWNrYWJsZT86IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PiBib29sZWFuXG4gIC8qKiBFeHBhbmRlZCBpdGVtcyBnZXQgYSBwZXJzaXN0ZW50IGdyZXkgYmcgKG5vdCBqdXN0IG9uIGhvdmVyKS4gKi9cbiAgaXNJdGVtRXhwYW5kZWQ/OiAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSkgPT4gYm9vbGVhblxuICAvKiogUFJFLUxPV0VSRUQgc2VhcmNoIHRleHQuIE1lc3NhZ2VzLnRzeCBjYWNoZXMgdGhlIGxvd2VyZWQgcmVzdWx0XG4gICAqICBvbmNlIGF0IHdhcm0gdGltZSBzbyBzZXRTZWFyY2hRdWVyeSdzIHBlci1rZXlzdHJva2UgbG9vcCBkb2VzXG4gICAqICBvbmx5IGluZGV4T2YgKHplcm8gdG9Mb3dlckNhc2UgYWxsb2MpLiBGYWxscyBiYWNrIHRvIGEgbG93ZXJpbmdcbiAgICogIHdyYXBwZXIgb24gcmVuZGVyYWJsZVNlYXJjaFRleHQgZm9yIGNhbGxlcnMgd2l0aG91dCB0aGUgY2FjaGUuICovXG4gIGV4dHJhY3RTZWFyY2hUZXh0PzogKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpID0+IHN0cmluZ1xuICAvKiogRW5hYmxlIHRoZSBzdGlja3ktcHJvbXB0IHRyYWNrZXIuIFN0aWNreVRyYWNrZXIgd3JpdGVzIHZpYVxuICAgKiAgU2Nyb2xsQ2hyb21lQ29udGV4dCAobm90IGEgY2FsbGJhY2sgcHJvcCkgc28gc3RhdGUgbGl2ZXMgaW5cbiAgICogIEZ1bGxzY3JlZW5MYXlvdXQgaW5zdGVhZCBvZiBSRVBMLiAqL1xuICB0cmFja1N0aWNreVByb21wdD86IGJvb2xlYW5cbiAgc2VsZWN0ZWRJbmRleD86IG51bWJlclxuICAvKiogTmF2IGhhbmRsZSBsaXZlcyBoZXJlIGJlY2F1c2UgaGVpZ2h0IG1lYXN1cmVtZW50IGxpdmVzIGhlcmUuICovXG4gIGN1cnNvck5hdlJlZj86IFJlYWN0LlJlZjxNZXNzYWdlQWN0aW9uc05hdj5cbiAgc2V0Q3Vyc29yPzogKGM6IE1lc3NhZ2VBY3Rpb25zU3RhdGUgfCBudWxsKSA9PiB2b2lkXG4gIGp1bXBSZWY/OiBSZWZPYmplY3Q8SnVtcEhhbmRsZSB8IG51bGw+XG4gIC8qKiBGaXJlcyB3aGVuIHNlYXJjaCBtYXRjaGVzIGNoYW5nZSAocXVlcnkgZWRpdCwgbi9OKS4gY3VycmVudCBpc1xuICAgKiAgMS1iYXNlZCBmb3IgXCIzLzQ3XCIgZGlzcGxheTsgMCBtZWFucyBubyBtYXRjaGVzLiAqL1xuICBvblNlYXJjaE1hdGNoZXNDaGFuZ2U/OiAoY291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKSA9PiB2b2lkXG4gIC8qKiBQYWludCBleGlzdGluZyBET00gc3VidHJlZSB0byBmcmVzaCBTY3JlZW4sIHNjYW4uIEVsZW1lbnQgZnJvbSB0aGVcbiAgICogIG1haW4gdHJlZSAoYWxsIHByb3ZpZGVycykuIE1lc3NhZ2UtcmVsYXRpdmUgcG9zaXRpb25zIChyb3cgMCA9IGVsXG4gICAqICB0b3ApLiBXb3JrcyBmb3IgYW55IGhlaWdodCDigJQgY2xvc2VzIHRoZSB0YWxsLW1lc3NhZ2UgZ2FwLiAqL1xuICBzY2FuRWxlbWVudD86IChlbDogRE9NRWxlbWVudCkgPT4gTWF0Y2hQb3NpdGlvbltdXG4gIC8qKiBQb3NpdGlvbi1iYXNlZCBDVVJSRU5UIGhpZ2hsaWdodC4gUG9zaXRpb25zIGtub3duIHVwZnJvbnQgKGZyb21cbiAgICogIHNjYW5FbGVtZW50KSwgbmF2aWdhdGlvbiA9IGluZGV4IGFyaXRobWV0aWMgKyBzY3JvbGxUby4gcm93T2Zmc2V0XG4gICAqICA9IG1lc3NhZ2UncyBjdXJyZW50IHNjcmVlbi10b3A7IHBvc2l0aW9ucyBzdGF5IHN0YWJsZS4gKi9cbiAgc2V0UG9zaXRpb25zPzogKFxuICAgIHN0YXRlOiB7XG4gICAgICBwb3NpdGlvbnM6IE1hdGNoUG9zaXRpb25bXVxuICAgICAgcm93T2Zmc2V0OiBudW1iZXJcbiAgICAgIGN1cnJlbnRJZHg6IG51bWJlclxuICAgIH0gfCBudWxsLFxuICApID0+IHZvaWRcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0ZXh0IG9mIGEgcmVhbCB1c2VyIHByb21wdCwgb3IgbnVsbCBmb3IgYW55dGhpbmcgZWxzZS5cbiAqIFwiUmVhbFwiID0gd2hhdCB0aGUgaHVtYW4gdHlwZWQ6IG5vdCB0b29sIHJlc3VsdHMsIG5vdCBYTUwtd3JhcHBlZCBwYXlsb2Fkc1xuICogKDxiYXNoLXN0ZG91dD4sIDxjb21tYW5kLW1lc3NhZ2U+LCA8dGVhbW1hdGUtbWVzc2FnZT4sIGV0Yy4pLCBub3QgbWV0YS5cbiAqXG4gKiBUd28gc2hhcGVzIGxhbmQgaGVyZTogTm9ybWFsaXplZFVzZXJNZXNzYWdlIChub3JtYWwgcHJvbXB0cykgYW5kXG4gKiBBdHRhY2htZW50TWVzc2FnZSB3aXRoIHR5cGU9PT0ncXVldWVkX2NvbW1hbmQnIChwcm9tcHRzIHNlbnQgbWlkLXR1cm5cbiAqIHdoaWxlIGEgdG9vbCB3YXMgZXhlY3V0aW5nIOKAlCB0aGV5IGdldCBkcmFpbmVkIGFzIGF0dGFjaG1lbnRzIG9uIHRoZVxuICogbmV4dCB0dXJuLCBzZWUgcXVlcnkudHM6MTQxMCkuIEJvdGggcmVuZGVyIGFzIOKdry1wcmVmaXhlZCBVc2VyVGV4dE1lc3NhZ2VcbiAqIGluIHRoZSBVSSBzbyBib3RoIHNob3VsZCBzdGljay5cbiAqXG4gKiBMZWFkaW5nIDxzeXN0ZW0tcmVtaW5kZXI+IGJsb2NrcyBhcmUgc3RyaXBwZWQgYmVmb3JlIGNoZWNraW5nIOKAlCB0aGV5IGdldFxuICogcHJlcGVuZGVkIHRvIHRoZSBzdG9yZWQgdGV4dCBmb3IgQ2xhdWRlJ3MgY29udGV4dCAobWVtb3J5IHVwZGF0ZXMsIGF1dG9cbiAqIG1vZGUgcmVtaW5kZXJzKSBidXQgYXJlbid0IHdoYXQgdGhlIHVzZXIgdHlwZWQuIFdpdGhvdXQgc3RyaXBwaW5nLCBhbnlcbiAqIHByb21wdCB0aGF0IGhhcHBlbmVkIHRvIGdldCBhIHJlbWluZGVyIGlzIHJlamVjdGVkIGJ5IHRoZSBzdGFydHNXaXRoKCc8JylcbiAqIGNoZWNrLiBTaG93cyB1cCBvbiBgY2MgLWNgIHJlc3VtZXMgd2hlcmUgbWVtb3J5LXVwZGF0ZSByZW1pbmRlcnMgYXJlIGRlbnNlLlxuICovXG5jb25zdCBwcm9tcHRUZXh0Q2FjaGUgPSBuZXcgV2Vha01hcDxSZW5kZXJhYmxlTWVzc2FnZSwgc3RyaW5nIHwgbnVsbD4oKVxuXG5mdW5jdGlvbiBzdGlja3lQcm9tcHRUZXh0KG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBzdHJpbmcgfCBudWxsIHtcbiAgLy8gQ2FjaGUga2V5ZWQgb24gbWVzc2FnZSBvYmplY3Qg4oCUIG1lc3NhZ2VzIGFyZSBhcHBlbmQtb25seSBhbmQgZG9uJ3RcbiAgLy8gbXV0YXRlLCBzbyBhIFdlYWtNYXAgaGl0IGlzIGFsd2F5cyB2YWxpZC4gVGhlIHdhbGsgKFN0aWNreVRyYWNrZXIsXG4gIC8vIHBlci1zY3JvbGwtdGljaykgY2FsbHMgdGhpcyA1LTUwKyB0aW1lcyB3aXRoIHRoZSBTQU1FIG1lc3NhZ2VzIGV2ZXJ5XG4gIC8vIHRpY2s7IHRoZSBzeXN0ZW0tcmVtaW5kZXIgc3RyaXAgYWxsb2NhdGVzIGEgZnJlc2ggc3RyaW5nIG9uIGVhY2hcbiAgLy8gcGFyc2UuIFdlYWtNYXAgc2VsZi1HQ3Mgb24gY29tcGFjdGlvbi9jbGVhciAobWVzc2FnZXNbXSByZXBsYWNlZCkuXG4gIGNvbnN0IGNhY2hlZCA9IHByb21wdFRleHRDYWNoZS5nZXQobXNnKVxuICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBjYWNoZWRcbiAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZVN0aWNreVByb21wdFRleHQobXNnKVxuICBwcm9tcHRUZXh0Q2FjaGUuc2V0KG1zZywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdGlja3lQcm9tcHRUZXh0KG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBzdHJpbmcgfCBudWxsIHtcbiAgbGV0IHJhdzogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgaWYgKG1zZy50eXBlID09PSAndXNlcicpIHtcbiAgICBpZiAobXNnLmlzTWV0YSB8fCBtc2cuaXNWaXNpYmxlSW5UcmFuc2NyaXB0T25seSkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBibG9jayA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICBpZiAoYmxvY2s/LnR5cGUgIT09ICd0ZXh0JykgcmV0dXJuIG51bGxcbiAgICByYXcgPSBibG9jay50ZXh0XG4gIH0gZWxzZSBpZiAoXG4gICAgbXNnLnR5cGUgPT09ICdhdHRhY2htZW50JyAmJlxuICAgIG1zZy5hdHRhY2htZW50LnR5cGUgPT09ICdxdWV1ZWRfY29tbWFuZCcgJiZcbiAgICBtc2cuYXR0YWNobWVudC5jb21tYW5kTW9kZSAhPT0gJ3Rhc2stbm90aWZpY2F0aW9uJyAmJlxuICAgICFtc2cuYXR0YWNobWVudC5pc01ldGFcbiAgKSB7XG4gICAgY29uc3QgcCA9IG1zZy5hdHRhY2htZW50LnByb21wdFxuICAgIHJhdyA9XG4gICAgICB0eXBlb2YgcCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBwXG4gICAgICAgIDogcC5mbGF0TWFwKGIgPT4gKGIudHlwZSA9PT0gJ3RleHQnID8gW2IudGV4dF0gOiBbXSkpLmpvaW4oJ1xcbicpXG4gIH1cbiAgaWYgKHJhdyA9PT0gbnVsbCkgcmV0dXJuIG51bGxcblxuICBjb25zdCB0ID0gc3RyaXBTeXN0ZW1SZW1pbmRlcnMocmF3KVxuICBpZiAodC5zdGFydHNXaXRoKCc8JykgfHwgdCA9PT0gJycpIHJldHVybiBudWxsXG4gIHJldHVybiB0XG59XG5cbi8qKlxuICogVmlydHVhbGl6ZWQgbWVzc2FnZSBsaXN0IGZvciBmdWxsc2NyZWVuIG1vZGUuIFNwbGl0IGZyb20gTWVzc2FnZXMudHN4IHNvXG4gKiB1c2VWaXJ0dWFsU2Nyb2xsIGlzIGNhbGxlZCB1bmNvbmRpdGlvbmFsbHkgKHJ1bGVzLW9mLWhvb2tzKSDigJQgTWVzc2FnZXMudHN4XG4gKiBjb25kaXRpb25hbGx5IHJlbmRlcnMgZWl0aGVyIHRoaXMgb3IgYSBwbGFpbiAubWFwKCkuXG4gKlxuICogVGhlIHdyYXBwaW5nIDxCb3ggcmVmPiBpcyB0aGUgbWVhc3VyZW1lbnQgYW5jaG9yIOKAlCBNZXNzYWdlUm93IGRvZXNuJ3QgdGFrZVxuICogYSByZWYuIFNpbmdsZS1jaGlsZCBjb2x1bW4gQm94IHBhc3NlcyBZb2dhIGhlaWdodCB0aHJvdWdoIHVuY2hhbmdlZC5cbiAqL1xudHlwZSBWaXJ0dWFsSXRlbVByb3BzID0ge1xuICBpdGVtS2V5OiBzdHJpbmdcbiAgbXNnOiBSZW5kZXJhYmxlTWVzc2FnZVxuICBpZHg6IG51bWJlclxuICBtZWFzdXJlUmVmOiAoa2V5OiBzdHJpbmcpID0+IChlbDogRE9NRWxlbWVudCB8IG51bGwpID0+IHZvaWRcbiAgZXhwYW5kZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgaG92ZXJlZDogYm9vbGVhblxuICBjbGlja2FibGU6IGJvb2xlYW5cbiAgb25DbGlja0s6IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlLCBjZWxsSXNCbGFuazogYm9vbGVhbikgPT4gdm9pZFxuICBvbkVudGVySzogKGs6IHN0cmluZykgPT4gdm9pZFxuICBvbkxlYXZlSzogKGs6IHN0cmluZykgPT4gdm9pZFxuICByZW5kZXJJdGVtOiAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSwgaWR4OiBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vLyBJdGVtIHdyYXBwZXIgd2l0aCBzdGFibGUgY2xpY2sgaGFuZGxlcnMuIFRoZSBwZXItaXRlbSBjbG9zdXJlcyB3ZXJlIHRoZVxuLy8gYG9wZXJhdGlvbk5ld0Fycm93RnVuY3Rpb25gIGxlYWZzIOKGkiBgRnVuY3Rpb25FeGVjdXRhYmxlOjpmaW5hbGl6ZVVuY29uZGl0aW9uYWxseWBcbi8vIEdDIGNsZWFudXAgKDE2JSBvZiBHQyB0aW1lIGR1cmluZyBmYXN0IHNjcm9sbCkuIDMgY2xvc3VyZXMgw5cgNjAgbW91bnRlZCDDl1xuLy8gMTAgY29tbWl0cy9zZWMgPSAxODAwIGNsb3N1cmVzL3NlYy4gV2l0aCBzdGFibGUgb25DbGlja0svb25FbnRlcksvb25MZWF2ZUtcbi8vIHRocmVhZGVkIHZpYSBpdGVtS2V5LCB0aGUgY2xvc3VyZXMgaGVyZSBhcmUgcGVyLWl0ZW0tcGVyLXJlbmRlciBidXQgQ0hFQVBcbi8vIChqdXN0IHdyYXAgdGhlIHN0YWJsZSBjYWxsYmFjayB3aXRoIGsgYm91bmQpIGFuZCBkb24ndCBjbG9zZSBvdmVyIG1zZy9pZHhcbi8vIHdoaWNoIGxldHMgSklUIGlubGluZSB0aGVtLiBUaGUgYmlnZ2VyIHdpbiBpcyBpbnNpZGU6IE1lc3NhZ2VSb3cubWVtb1xuLy8gYmFpbHMgZm9yIHVuY2hhbmdlZCBtc2dzLCBza2lwcGluZyBtYXJrZWQubGV4ZXIgKyBmb3JtYXRUb2tlbi5cbi8vXG4vLyBOT1QgUmVhY3QubWVtbydkIOKAlCByZW5kZXJJdGVtIGNhcHR1cmVzIGNoYW5naW5nIHN0YXRlIChjdXJzb3IsIHNlbGVjdGVkSWR4LFxuLy8gdmVyYm9zZSkuIE1lbW9pbmcgd2l0aCBhIGNvbXBhcmF0b3IgdGhhdCBpZ25vcmVzIHJlbmRlckl0ZW0gd291bGQgdXNlIGFcbi8vIFNUQUxFIGNsb3N1cmUgb24gYmFpbCAod3Jvbmcgc2VsZWN0aW9uIGhpZ2hsaWdodCwgc3RhbGUgdmVyYm9zZSkuIEluY2x1ZGluZ1xuLy8gcmVuZGVySXRlbSBpbiB0aGUgY29tcGFyYXRvciBkZWZlYXRzIG1lbW8gc2luY2UgaXQncyBmcmVzaCBlYWNoIHJlbmRlci5cbmZ1bmN0aW9uIFZpcnR1YWxJdGVtKHtcbiAgaXRlbUtleTogayxcbiAgbXNnLFxuICBpZHgsXG4gIG1lYXN1cmVSZWYsXG4gIGV4cGFuZGVkLFxuICBob3ZlcmVkLFxuICBjbGlja2FibGUsXG4gIG9uQ2xpY2tLLFxuICBvbkVudGVySyxcbiAgb25MZWF2ZUssXG4gIHJlbmRlckl0ZW0sXG59OiBWaXJ0dWFsSXRlbVByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICByZWY9e21lYXN1cmVSZWYoayl9XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGJhY2tncm91bmRDb2xvcj17ZXhwYW5kZWQgPyAndXNlck1lc3NhZ2VCYWNrZ3JvdW5kSG92ZXInIDogdW5kZWZpbmVkfVxuICAgICAgLy8gYmcgaGVyZSBtYXNrcyB1c2VWaXJ0dWFsU2Nyb2xsJ3Mgb25lLWZyYW1lIG9mZnNldCBsYWcgb24gZXhwYW5kIOKAlFxuICAgICAgLy8gZG9uJ3QgbW92ZSB0byB0aGUgbWFyZ2luZWQgQm94IGluc2lkZS4gcGFkZGluZ0JvdHRvbSBtaXJyb3JzIHRoZVxuICAgICAgLy8gdGludGVkIG1hcmdpblRvcC5cbiAgICAgIHBhZGRpbmdCb3R0b209e2V4cGFuZGVkID8gMSA6IHVuZGVmaW5lZH1cbiAgICAgIG9uQ2xpY2s9e2NsaWNrYWJsZSA/IGUgPT4gb25DbGlja0sobXNnLCBlLmNlbGxJc0JsYW5rKSA6IHVuZGVmaW5lZH1cbiAgICAgIG9uTW91c2VFbnRlcj17Y2xpY2thYmxlID8gKCkgPT4gb25FbnRlcksoaykgOiB1bmRlZmluZWR9XG4gICAgICBvbk1vdXNlTGVhdmU9e2NsaWNrYWJsZSA/ICgpID0+IG9uTGVhdmVLKGspIDogdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIDxUZXh0SG92ZXJDb2xvckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e2hvdmVyZWQgJiYgIWV4cGFuZGVkID8gJ3RleHQnIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySXRlbShtc2csIGlkeCl9XG4gICAgICA8L1RleHRIb3ZlckNvbG9yQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlydHVhbE1lc3NhZ2VMaXN0KHtcbiAgbWVzc2FnZXMsXG4gIHNjcm9sbFJlZixcbiAgY29sdW1ucyxcbiAgaXRlbUtleSxcbiAgcmVuZGVySXRlbSxcbiAgb25JdGVtQ2xpY2ssXG4gIGlzSXRlbUNsaWNrYWJsZSxcbiAgaXNJdGVtRXhwYW5kZWQsXG4gIGV4dHJhY3RTZWFyY2hUZXh0ID0gZGVmYXVsdEV4dHJhY3RTZWFyY2hUZXh0LFxuICB0cmFja1N0aWNreVByb21wdCxcbiAgc2VsZWN0ZWRJbmRleCxcbiAgY3Vyc29yTmF2UmVmLFxuICBzZXRDdXJzb3IsXG4gIGp1bXBSZWYsXG4gIG9uU2VhcmNoTWF0Y2hlc0NoYW5nZSxcbiAgc2NhbkVsZW1lbnQsXG4gIHNldFBvc2l0aW9ucyxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gSW5jcmVtZW50YWwga2V5IGFycmF5LiBTdHJlYW1pbmcgYXBwZW5kcyBvbmUgbWVzc2FnZSBhdCBhIHRpbWU7IHJlYnVpbGRpbmdcbiAgLy8gdGhlIGZ1bGwgc3RyaW5nIGFycmF5IG9uIGV2ZXJ5IGNvbW1pdCBhbGxvY2F0ZXMgTyhuKSBwZXIgbWVzc2FnZSAofjFNQlxuICAvLyBjaHVybiBhdCAyN2sgbWVzc2FnZXMpLiBBcHBlbmQtb25seSBkZWx0YSBwdXNoIHdoZW4gdGhlIHByZWZpeCBtYXRjaGVzO1xuICAvLyBmYWxsIGJhY2sgdG8gZnVsbCByZWJ1aWxkIG9uIGNvbXBhY3Rpb24sIC9jbGVhciwgb3IgaXRlbUtleSBjaGFuZ2UuXG4gIGNvbnN0IGtleXNSZWYgPSB1c2VSZWY8c3RyaW5nW10+KFtdKVxuICBjb25zdCBwcmV2TWVzc2FnZXNSZWYgPSB1c2VSZWY8dHlwZW9mIG1lc3NhZ2VzPihtZXNzYWdlcylcbiAgY29uc3QgcHJldkl0ZW1LZXlSZWYgPSB1c2VSZWYoaXRlbUtleSlcbiAgaWYgKFxuICAgIHByZXZJdGVtS2V5UmVmLmN1cnJlbnQgIT09IGl0ZW1LZXkgfHxcbiAgICBtZXNzYWdlcy5sZW5ndGggPCBrZXlzUmVmLmN1cnJlbnQubGVuZ3RoIHx8XG4gICAgbWVzc2FnZXNbMF0gIT09IHByZXZNZXNzYWdlc1JlZi5jdXJyZW50WzBdXG4gICkge1xuICAgIGtleXNSZWYuY3VycmVudCA9IG1lc3NhZ2VzLm1hcChtID0+IGl0ZW1LZXkobSkpXG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IGtleXNSZWYuY3VycmVudC5sZW5ndGg7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5c1JlZi5jdXJyZW50LnB1c2goaXRlbUtleShtZXNzYWdlc1tpXSEpKVxuICAgIH1cbiAgfVxuICBwcmV2TWVzc2FnZXNSZWYuY3VycmVudCA9IG1lc3NhZ2VzXG4gIHByZXZJdGVtS2V5UmVmLmN1cnJlbnQgPSBpdGVtS2V5XG4gIGNvbnN0IGtleXMgPSBrZXlzUmVmLmN1cnJlbnRcbiAgY29uc3Qge1xuICAgIHJhbmdlLFxuICAgIHRvcFNwYWNlcixcbiAgICBib3R0b21TcGFjZXIsXG4gICAgbWVhc3VyZVJlZixcbiAgICBzcGFjZXJSZWYsXG4gICAgb2Zmc2V0cyxcbiAgICBnZXRJdGVtVG9wLFxuICAgIGdldEl0ZW1FbGVtZW50LFxuICAgIGdldEl0ZW1IZWlnaHQsXG4gICAgc2Nyb2xsVG9JbmRleCxcbiAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoc2Nyb2xsUmVmLCBrZXlzLCBjb2x1bW5zKVxuICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZVxuXG4gIC8vIFVubWVhc3VyZWQgKHVuZGVmaW5lZCBoZWlnaHQpIGZhbGxzIHRocm91Z2gg4oCUIGFzc3VtZSB2aXNpYmxlLlxuICBjb25zdCBpc1Zpc2libGUgPSB1c2VDYWxsYmFjayhcbiAgICAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBoID0gZ2V0SXRlbUhlaWdodChpKVxuICAgICAgaWYgKGggPT09IDApIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIGlzTmF2aWdhYmxlTWVzc2FnZShtZXNzYWdlc1tpXSEpXG4gICAgfSxcbiAgICBbZ2V0SXRlbUhlaWdodCwgbWVzc2FnZXNdLFxuICApXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUoY3Vyc29yTmF2UmVmLCAoKTogTWVzc2FnZUFjdGlvbnNOYXYgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IChtOiBOYXZpZ2FibGVNZXNzYWdlKSA9PlxuICAgICAgc2V0Q3Vyc29yPy4oe1xuICAgICAgICB1dWlkOiBtLnV1aWQsXG4gICAgICAgIG1zZ1R5cGU6IG0udHlwZSxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICB0b29sTmFtZTogdG9vbENhbGxPZihtKT8ubmFtZSxcbiAgICAgIH0pXG4gICAgY29uc3Qgc2VsSWR4ID0gc2VsZWN0ZWRJbmRleCA/PyAtMVxuICAgIGNvbnN0IHNjYW4gPSAoXG4gICAgICBmcm9tOiBudW1iZXIsXG4gICAgICBkaXI6IDEgfCAtMSxcbiAgICAgIHByZWQ6IChpOiBudW1iZXIpID0+IGJvb2xlYW4gPSBpc1Zpc2libGUsXG4gICAgKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA+PSAwICYmIGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkgKz0gZGlyKSB7XG4gICAgICAgIGlmIChwcmVkKGkpKSB7XG4gICAgICAgICAgc2VsZWN0KG1lc3NhZ2VzW2ldISlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaXNVc2VyID0gKGk6IG51bWJlcikgPT4gaXNWaXNpYmxlKGkpICYmIG1lc3NhZ2VzW2ldIS50eXBlID09PSAndXNlcidcbiAgICByZXR1cm4ge1xuICAgICAgLy8gRW50cnkgdmlhIHNoaWZ0K+KGkSA9IHNhbWUgc2VtYW50aWMgYXMgaW4tY3Vyc29yIHNoaWZ0K+KGkSAocHJldlVzZXIpLlxuICAgICAgZW50ZXJDdXJzb3I6ICgpID0+IHNjYW4obWVzc2FnZXMubGVuZ3RoIC0gMSwgLTEsIGlzVXNlciksXG4gICAgICBuYXZpZ2F0ZVByZXY6ICgpID0+IHNjYW4oc2VsSWR4IC0gMSwgLTEpLFxuICAgICAgbmF2aWdhdGVOZXh0OiAoKSA9PiB7XG4gICAgICAgIGlmIChzY2FuKHNlbElkeCArIDEsIDEpKSByZXR1cm5cbiAgICAgICAgLy8gUGFzdCBsYXN0IHZpc2libGUg4oaSIGV4aXQgKyByZXBpbi4gTGFzdCBtZXNzYWdlJ3MgVE9QIGlzIGF0IHZpZXdwb3J0XG4gICAgICAgIC8vIHRvcCAoc2VsZWN0aW9uLXNjcm9sbCBlZmZlY3QpOyBpdHMgQk9UVE9NIG1heSBiZSBiZWxvdyB0aGUgZm9sZC5cbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvQm90dG9tKClcbiAgICAgICAgc2V0Q3Vyc29yPy4obnVsbClcbiAgICAgIH0sXG4gICAgICAvLyB0eXBlOid1c2VyJyBvbmx5IOKAlCBxdWV1ZWRfY29tbWFuZCBhdHRhY2htZW50cyBsb29rIGxpa2UgcHJvbXB0cyBidXQgaGF2ZSBubyByYXcgVXNlck1lc3NhZ2UgdG8gcmV3aW5kIHRvLlxuICAgICAgbmF2aWdhdGVQcmV2VXNlcjogKCkgPT4gc2NhbihzZWxJZHggLSAxLCAtMSwgaXNVc2VyKSxcbiAgICAgIG5hdmlnYXRlTmV4dFVzZXI6ICgpID0+IHNjYW4oc2VsSWR4ICsgMSwgMSwgaXNVc2VyKSxcbiAgICAgIG5hdmlnYXRlVG9wOiAoKSA9PiBzY2FuKDAsIDEpLFxuICAgICAgbmF2aWdhdGVCb3R0b206ICgpID0+IHNjYW4obWVzc2FnZXMubGVuZ3RoIC0gMSwgLTEpLFxuICAgICAgZ2V0U2VsZWN0ZWQ6ICgpID0+IChzZWxJZHggPj0gMCA/IChtZXNzYWdlc1tzZWxJZHhdID8/IG51bGwpIDogbnVsbCksXG4gICAgfVxuICB9LCBbbWVzc2FnZXMsIHNlbGVjdGVkSW5kZXgsIHNldEN1cnNvciwgaXNWaXNpYmxlXSlcbiAgLy8gVHdvLXBoYXNlIGp1bXAgKyBzZWFyY2ggZW5naW5lLiBSZWFkLXRocm91Z2gtcmVmIHNvIHRoZSBoYW5kbGUgc3RheXNcbiAgLy8gc3RhYmxlIGFjcm9zcyByZW5kZXJzIOKAlCBvZmZzZXRzL21lc3NhZ2VzIGlkZW50aXR5IGNoYW5nZXMgZXZlcnkgcmVuZGVyLFxuICAvLyBjYW4ndCBnbyBpbiB1c2VJbXBlcmF0aXZlSGFuZGxlIGRlcHMgd2l0aG91dCByZWNyZWF0aW5nIHRoZSBoYW5kbGUuXG4gIGNvbnN0IGp1bXBTdGF0ZSA9IHVzZVJlZih7XG4gICAgb2Zmc2V0cyxcbiAgICBzdGFydCxcbiAgICBnZXRJdGVtRWxlbWVudCxcbiAgICBnZXRJdGVtVG9wLFxuICAgIG1lc3NhZ2VzLFxuICAgIHNjcm9sbFRvSW5kZXgsXG4gIH0pXG4gIGp1bXBTdGF0ZS5jdXJyZW50ID0ge1xuICAgIG9mZnNldHMsXG4gICAgc3RhcnQsXG4gICAgZ2V0SXRlbUVsZW1lbnQsXG4gICAgZ2V0SXRlbVRvcCxcbiAgICBtZXNzYWdlcyxcbiAgICBzY3JvbGxUb0luZGV4LFxuICB9XG5cbiAgLy8gS2VlcCBjdXJzb3Itc2VsZWN0ZWQgbWVzc2FnZSB2aXNpYmxlLiBvZmZzZXRzIHJlYnVpbGRzIGV2ZXJ5IHJlbmRlclxuICAvLyDigJQgYXMgYSBiYXJlIGRlcCB0aGlzIHJlLXBpbm5lZCBvbiBldmVyeSBtb3VzZXdoZWVsIHRpY2suIFJlYWQgdGhyb3VnaFxuICAvLyBqdW1wU3RhdGUgaW5zdGVhZDsgcGFzdC1vdmVyc2NhbiBqdW1wcyBsYW5kIHZpYSBzY3JvbGxUb0luZGV4LCBuZXh0XG4gIC8vIG5hdiBpcyBwcmVjaXNlLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIGNvbnN0IHMgPSBqdW1wU3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGVsID0gcy5nZXRJdGVtRWxlbWVudChzZWxlY3RlZEluZGV4KVxuICAgIGlmIChlbCkge1xuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvRWxlbWVudChlbCwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcy5zY3JvbGxUb0luZGV4KHNlbGVjdGVkSW5kZXgpXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRJbmRleCwgc2Nyb2xsUmVmXSlcblxuICAvLyBQZW5kaW5nIHNlZWsgcmVxdWVzdC4ganVtcCgpIHNldHMgdGhpcyArIGJ1bXBzIHNlZWtHZW4uIFRoZSBzZWVrXG4gIC8vIGVmZmVjdCBmaXJlcyBwb3N0LXBhaW50IChwYXNzaXZlIGVmZmVjdCDigJQgYWZ0ZXIgcmVzZXRBZnRlckNvbW1pdCksXG4gIC8vIGNoZWNrcyBpZiB0YXJnZXQgaXMgbW91bnRlZC4gWWVzIOKGkiBzY2FuK2hpZ2hsaWdodC4gTm8g4oaSIHJlLWVzdGltYXRlXG4gIC8vIHdpdGggYSBmcmVzaGVyIGFuY2hvciAoc3RhcnQgbW92ZWQgdG93YXJkIGlkeCkgYW5kIHNjcm9sbFRvIGFnYWluLlxuICBjb25zdCBzY2FuUmVxdWVzdFJlZiA9IHVzZVJlZjx7XG4gICAgaWR4OiBudW1iZXJcbiAgICB3YW50TGFzdDogYm9vbGVhblxuICAgIHRyaWVzOiBudW1iZXJcbiAgfSB8IG51bGw+KG51bGwpXG4gIC8vIE1lc3NhZ2UtcmVsYXRpdmUgcG9zaXRpb25zIGZyb20gc2NhbkVsZW1lbnQuIFJvdyAwID0gbWVzc2FnZSB0b3AuXG4gIC8vIFN0YWJsZSBhY3Jvc3Mgc2Nyb2xsIOKAlCBoaWdobGlnaHQgY29tcHV0ZXMgcm93T2Zmc2V0IGZyZXNoLiBtc2dJZHhcbiAgLy8gZm9yIGNvbXB1dGluZyByb3dPZmZzZXQgPSBnZXRJdGVtVG9wKG1zZ0lkeCkgLSBzY3JvbGxUb3AuXG4gIGNvbnN0IGVsZW1lbnRQb3NpdGlvbnMgPSB1c2VSZWY8e1xuICAgIG1zZ0lkeDogbnVtYmVyXG4gICAgcG9zaXRpb25zOiBNYXRjaFBvc2l0aW9uW11cbiAgfT4oeyBtc2dJZHg6IC0xLCBwb3NpdGlvbnM6IFtdIH0pXG4gIC8vIFdyYXBhcm91bmQgZ3VhcmQuIEF1dG8tYWR2YW5jZSBzdG9wcyBpZiBwdHIgd3JhcHMgYmFjayB0byBoZXJlLlxuICBjb25zdCBzdGFydFB0clJlZiA9IHVzZVJlZigtMSlcbiAgLy8gUGhhbnRvbS1idXJzdCBjYXAuIFJlc2V0cyBvbiBzY2FuIHN1Y2Nlc3MuXG4gIGNvbnN0IHBoYW50b21CdXJzdFJlZiA9IHVzZVJlZigwKVxuICAvLyBPbmUtZGVlcCBxdWV1ZTogbi9OIGFycml2aW5nIG1pZC1zZWVrIGdldHMgc3RvcmVkIChub3QgZHJvcHBlZCkgYW5kXG4gIC8vIGZpcmVzIGFmdGVyIHRoZSBzZWVrIGNvbXBsZXRlcy4gSG9sZGluZyBuIHN0YXlzIHNtb290aCB3aXRob3V0XG4gIC8vIHF1ZXVlaW5nIDMwIGp1bXBzLiBMYXRlc3QgcHJlc3Mgb3ZlcndyaXRlcyDigJQgd2Ugd2FudCB0aGUgZGlyZWN0aW9uXG4gIC8vIHRoZSB1c2VyIGlzIGdvaW5nIE5PVywgbm90IHdoZXJlIHRoZXkgd2VyZSAxMCBrZXlwcmVzc2VzIGFnby5cbiAgY29uc3QgcGVuZGluZ1N0ZXBSZWYgPSB1c2VSZWY8MSB8IC0xIHwgMD4oMClcbiAgLy8gc3RlcCArIGhpZ2hsaWdodCB2aWEgcmVmIHNvIHRoZSBzZWVrIGVmZmVjdCByZWFkcyBsYXRlc3Qgd2l0aG91dFxuICAvLyBjbG9zdXJlLWNhcHR1cmUgb3IgZGVwcyBjaHVybi5cbiAgY29uc3Qgc3RlcFJlZiA9IHVzZVJlZjwoZDogMSB8IC0xKSA9PiB2b2lkPigoKSA9PiB7fSlcbiAgY29uc3QgaGlnaGxpZ2h0UmVmID0gdXNlUmVmPChvcmQ6IG51bWJlcikgPT4gdm9pZD4oKCkgPT4ge30pXG4gIGNvbnN0IHNlYXJjaFN0YXRlID0gdXNlUmVmKHtcbiAgICBtYXRjaGVzOiBbXSBhcyBudW1iZXJbXSwgLy8gZGVkdXBsaWNhdGVkIG1zZyBpbmRpY2VzXG4gICAgcHRyOiAwLFxuICAgIHNjcmVlbk9yZDogMCxcbiAgICAvLyBDdW11bGF0aXZlIGVuZ2luZS1vY2N1cnJlbmNlIGNvdW50IGJlZm9yZSBlYWNoIG1hdGNoZXNba10uIExldHMgdXNcbiAgICAvLyBjb21wdXRlIGEgZ2xvYmFsIGN1cnJlbnQgaW5kZXg6IHByZWZpeFN1bVtwdHJdICsgc2NyZWVuT3JkICsgMS5cbiAgICAvLyBFbmdpbmUtY291bnRlZCAoaW5kZXhPZiBvbiBleHRyYWN0U2VhcmNoVGV4dCksIG5vdCByZW5kZXItY291bnRlZCDigJRcbiAgICAvLyBjbG9zZSBlbm91Z2ggZm9yIHRoZSBiYWRnZTsgZXhhY3QgY291bnRzIHdvdWxkIG5lZWQgc2NhbkVsZW1lbnQgb25cbiAgICAvLyBldmVyeSBtYXRjaGVkIG1lc3NhZ2UgKH4xLTNtcyDDlyBOKS4gdG90YWwgPSBwcmVmaXhTdW1bbWF0Y2hlcy5sZW5ndGhdLlxuICAgIHByZWZpeFN1bTogW10gYXMgbnVtYmVyW10sXG4gIH0pXG4gIC8vIHNjcm9sbFRvcCBhdCB0aGUgbW9tZW50IC8gd2FzIHByZXNzZWQuIEluY3NlYXJjaCBwcmV2aWV3LWp1bXBzIHNuYXBcbiAgLy8gYmFjayBoZXJlIHdoZW4gbWF0Y2hlcyBkcm9wIHRvIDAuIC0xID0gbm8gYW5jaG9yIChiZWZvcmUgZmlyc3QgLykuXG4gIGNvbnN0IHNlYXJjaEFuY2hvciA9IHVzZVJlZigtMSlcbiAgY29uc3QgaW5kZXhXYXJtZWQgPSB1c2VSZWYoZmFsc2UpXG5cbiAgLy8gU2Nyb2xsIHRhcmdldCBmb3IgbWVzc2FnZSBpOiBsYW5kIGF0IE1FU1NBR0UgVE9QLiBlc3QgPSB0b3AgLSBIRUFEUk9PTVxuICAvLyBzbyBsbyA9IHRvcCAtIGVzdCA9IEhFQURST09NIOKJpSAwIChvciBsbyA9IHRvcCBpZiBlc3QgY2xhbXBlZCB0byAwKS5cbiAgLy8gUG9zdC1jbGFtcCByZWFkLWJhY2sgaW4ganVtcCgpIGhhbmRsZXMgdGhlIHNjcm9sbEhlaWdodCBib3VuZGFyeS5cbiAgLy8gTm8gZnJhYyAocmVuZGVyIHRyYW5zZm9ybSBkaWRuJ3QgcmVzcGVjdCBpdCksIG5vIG1vbm90b25lIGNsYW1wXG4gIC8vICh3YXMgYSBzYWZldHkgbmV0IGZvciBmcmFjIGdhcmJhZ2Ug4oCUIHdpdGhvdXQgZnJhYywgZXN0IElTIHRoZSBuZXh0XG4gIC8vIG1lc3NhZ2UncyB0b3AsIHNwYW0tbi9OIGNvbnZlcmdlcyBiZWNhdXNlIG1lc3NhZ2UgdG9wcyBhcmUgb3JkZXJlZCkuXG4gIGZ1bmN0aW9uIHRhcmdldEZvcihpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHRvcCA9IGp1bXBTdGF0ZS5jdXJyZW50LmdldEl0ZW1Ub3AoaSlcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdG9wIC0gSEVBRFJPT00pXG4gIH1cblxuICAvLyBIaWdobGlnaHQgcG9zaXRpb25zW29yZF0uIFBvc2l0aW9ucyBhcmUgTUVTU0FHRS1SRUxBVElWRSAocm93IDAgPVxuICAvLyBlbGVtZW50IHRvcCwgZnJvbSBzY2FuRWxlbWVudCkuIENvbXB1dGUgcm93T2Zmc2V0ID0gZ2V0SXRlbVRvcCAtXG4gIC8vIHNjcm9sbFRvcCBmcmVzaC4gSWYgb3JkJ3MgcG9zaXRpb24gaXMgb2ZmLXZpZXdwb3J0LCBzY3JvbGwgdG8gYnJpbmdcbiAgLy8gaXQgaW4sIHJlY29tcHV0ZSByb3dPZmZzZXQuIHNldFBvc2l0aW9ucyB0cmlnZ2VycyBvdmVybGF5IHdyaXRlLlxuICBmdW5jdGlvbiBoaWdobGlnaHQob3JkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzID0gc2Nyb2xsUmVmLmN1cnJlbnRcbiAgICBjb25zdCB7IG1zZ0lkeCwgcG9zaXRpb25zIH0gPSBlbGVtZW50UG9zaXRpb25zLmN1cnJlbnRcbiAgICBpZiAoIXMgfHwgcG9zaXRpb25zLmxlbmd0aCA9PT0gMCB8fCBtc2dJZHggPCAwKSB7XG4gICAgICBzZXRQb3NpdGlvbnM/LihudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGlkeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG9yZCwgcG9zaXRpb25zLmxlbmd0aCAtIDEpKVxuICAgIGNvbnN0IHAgPSBwb3NpdGlvbnNbaWR4XSFcbiAgICBjb25zdCB0b3AgPSBqdW1wU3RhdGUuY3VycmVudC5nZXRJdGVtVG9wKG1zZ0lkeClcbiAgICAvLyBsbyA9IGl0ZW0ncyBwb3NpdGlvbiB3aXRoaW4gc2Nyb2xsIGNvbnRlbnQgKHdyYXBwZXItcmVsYXRpdmUpLlxuICAgIC8vIHZpZXdwb3J0VG9wID0gd2hlcmUgdGhlIHNjcm9sbCBjb250ZW50IHN0YXJ0cyBvbiBTQ1JFRU4gKGFmdGVyXG4gICAgLy8gU2Nyb2xsQm94IHBhZGRpbmcvYm9yZGVyICsgYW55IGNocm9tZSBhYm92ZSkuIEhpZ2hsaWdodCB3cml0ZXMgdG9cbiAgICAvLyBzY3JlZW4tYWJzb2x1dGUsIHNvIHJvd09mZnNldCA9IHZpZXdwb3J0VG9wICsgbG8uIE9ic2VydmVkOiBvZmYtYnktXG4gICAgLy8gMSsgd2l0aG91dCB2aWV3cG9ydFRvcCAoRnVsbHNjcmVlbkxheW91dCBoYXMgcGFkZGluZ1RvcD0xIG9uIHRoZVxuICAgIC8vIFNjcm9sbEJveCwgcGx1cyBhbnkgaGVhZGVyIGFib3ZlKS5cbiAgICBjb25zdCB2cFRvcCA9IHMuZ2V0Vmlld3BvcnRUb3AoKVxuICAgIGxldCBsbyA9IHRvcCAtIHMuZ2V0U2Nyb2xsVG9wKClcbiAgICBjb25zdCB2cCA9IHMuZ2V0Vmlld3BvcnRIZWlnaHQoKVxuICAgIGxldCBzY3JlZW5Sb3cgPSB2cFRvcCArIGxvICsgcC5yb3dcbiAgICAvLyBPZmYgdmlld3BvcnQg4oaSIHNjcm9sbCB0byBicmluZyBpdCBpbiAoSEVBRFJPT00gZnJvbSB0b3ApLlxuICAgIC8vIHNjcm9sbFRvIGNvbW1pdHMgc3luYzsgcmVhZC1iYWNrIGFmdGVyIGdpdmVzIGZyZXNoIGxvLlxuICAgIGlmIChzY3JlZW5Sb3cgPCB2cFRvcCB8fCBzY3JlZW5Sb3cgPj0gdnBUb3AgKyB2cCkge1xuICAgICAgcy5zY3JvbGxUbyhNYXRoLm1heCgwLCB0b3AgKyBwLnJvdyAtIEhFQURST09NKSlcbiAgICAgIGxvID0gdG9wIC0gcy5nZXRTY3JvbGxUb3AoKVxuICAgICAgc2NyZWVuUm93ID0gdnBUb3AgKyBsbyArIHAucm93XG4gICAgfVxuICAgIHNldFBvc2l0aW9ucz8uKHsgcG9zaXRpb25zLCByb3dPZmZzZXQ6IHZwVG9wICsgbG8sIGN1cnJlbnRJZHg6IGlkeCB9KVxuICAgIC8vIEJhZGdlOiBnbG9iYWwgY3VycmVudCA9IHN1bSBvZiBvY2N1cnJlbmNlcyBiZWZvcmUgdGhpcyBtc2cgKyBvcmQrMS5cbiAgICAvLyBwcmVmaXhTdW1bcHRyXSBpcyBlbmdpbmUtY291bnRlZCAoaW5kZXhPZiBvbiBleHRyYWN0U2VhcmNoVGV4dCk7XG4gICAgLy8gbWF5IGRyaWZ0IGZyb20gcmVuZGVyLWNvdW50IGZvciBnaG9zdCBtZXNzYWdlcyBidXQgY2xvc2UgZW5vdWdoIOKAlFxuICAgIC8vIGJhZGdlIGlzIGEgcm91Z2ggbG9jYXRpb24gaGludCwgbm90IGEgcHJvb2YuXG4gICAgY29uc3Qgc3QgPSBzZWFyY2hTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgdG90YWwgPSBzdC5wcmVmaXhTdW0uYXQoLTEpID8/IDBcbiAgICBjb25zdCBjdXJyZW50ID0gKHN0LnByZWZpeFN1bVtzdC5wdHJdID8/IDApICsgaWR4ICsgMVxuICAgIG9uU2VhcmNoTWF0Y2hlc0NoYW5nZT8uKHRvdGFsLCBjdXJyZW50KVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBoaWdobGlnaHQoaT0ke21zZ0lkeH0sIG9yZD0ke2lkeH0vJHtwb3NpdGlvbnMubGVuZ3RofSk6IGAgK1xuICAgICAgICBgcG9zPXtyb3c6JHtwLnJvd30sY29sOiR7cC5jb2x9fSBsbz0ke2xvfSBzY3JlZW5Sb3c9JHtzY3JlZW5Sb3d9IGAgK1xuICAgICAgICBgYmFkZ2U9JHtjdXJyZW50fS8ke3RvdGFsfWAsXG4gICAgKVxuICB9XG4gIGhpZ2hsaWdodFJlZi5jdXJyZW50ID0gaGlnaGxpZ2h0XG5cbiAgLy8gU2VlayBlZmZlY3QuIGp1bXAoKSBzZXRzIHNjYW5SZXF1ZXN0UmVmICsgc2Nyb2xsVG9JbmRleCArIGJ1bXAuXG4gIC8vIGJ1bXAg4oaSIHJlLXJlbmRlciDihpIgdXNlVmlydHVhbFNjcm9sbCBtb3VudHMgdGhlIHRhcmdldCAoc2Nyb2xsVG9JbmRleFxuICAvLyBndWFyYW50ZWVzIHRoaXMg4oCUIHNjcm9sbFRvcCBhbmQgdG9wU3BhY2VyIGFncmVlIHZpYSB0aGUgc2FtZVxuICAvLyBvZmZzZXRzIHZhbHVlKSDihpIgcmVzZXRBZnRlckNvbW1pdCBwYWludHMg4oaSIHRoaXMgcGFzc2l2ZSBlZmZlY3RcbiAgLy8gZmlyZXMgUE9TVC1QQUlOVCB3aXRoIHRoZSBlbGVtZW50IG1vdW50ZWQuIFByZWNpc2Ugc2Nyb2xsVG8gKyBzY2FuLlxuICAvL1xuICAvLyBEZXAgaXMgT05MWSBzZWVrR2VuIOKAlCBlZmZlY3QgZG9lc24ndCByZS1ydW4gb24gcmFuZG9tIHJlbmRlcnNcbiAgLy8gKG9uU2VhcmNoTWF0Y2hlc0NoYW5nZSBjaHVybiBkdXJpbmcgaW5jc2VhcmNoKS5cbiAgY29uc3QgW3NlZWtHZW4sIHNldFNlZWtHZW5dID0gdXNlU3RhdGUoMClcbiAgY29uc3QgYnVtcFNlZWsgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRTZWVrR2VuKGcgPT4gZyArIDEpLCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlcSA9IHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnRcbiAgICBpZiAoIXJlcSkgcmV0dXJuXG4gICAgY29uc3QgeyBpZHgsIHdhbnRMYXN0LCB0cmllcyB9ID0gcmVxXG4gICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgaWYgKCFzKSByZXR1cm5cbiAgICBjb25zdCB7IGdldEl0ZW1FbGVtZW50LCBnZXRJdGVtVG9wLCBzY3JvbGxUb0luZGV4IH0gPSBqdW1wU3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGVsID0gZ2V0SXRlbUVsZW1lbnQoaWR4KVxuICAgIGNvbnN0IGggPSBlbD8ueW9nYU5vZGU/LmdldENvbXB1dGVkSGVpZ2h0KCkgPz8gMFxuXG4gICAgaWYgKCFlbCB8fCBoID09PSAwKSB7XG4gICAgICAvLyBOb3QgbW91bnRlZCBhZnRlciBzY3JvbGxUb0luZGV4LiBTaG91bGRuJ3QgaGFwcGVuIOKAlCBzY3JvbGxUb0luZGV4XG4gICAgICAvLyBndWFyYW50ZWVzIG1vdW50IGJ5IGNvbnN0cnVjdGlvbiAoc2Nyb2xsVG9wIGFuZCB0b3BTcGFjZXIgYWdyZWVcbiAgICAgIC8vIHZpYSB0aGUgc2FtZSBvZmZzZXRzIHZhbHVlKS4gU2FuaXR5OiByZXRyeSBvbmNlLCB0aGVuIHNraXAuXG4gICAgICBpZiAodHJpZXMgPiAxKSB7XG4gICAgICAgIHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgc2VlayhpPSR7aWR4fSk6IG5vIG1vdW50IGFmdGVyIHNjcm9sbFRvSW5kZXgsIHNraXBgKVxuICAgICAgICBzdGVwUmVmLmN1cnJlbnQod2FudExhc3QgPyAtMSA6IDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2NhblJlcXVlc3RSZWYuY3VycmVudCA9IHsgaWR4LCB3YW50TGFzdCwgdHJpZXM6IHRyaWVzICsgMSB9XG4gICAgICBzY3JvbGxUb0luZGV4KGlkeClcbiAgICAgIGJ1bXBTZWVrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnQgPSBudWxsXG4gICAgLy8gUHJlY2lzZSBzY3JvbGxUbyDigJQgc2Nyb2xsVG9JbmRleCBnb3QgdXMgaW4gdGhlIG5laWdoYm9yaG9vZFxuICAgIC8vIChpdGVtIGlzIG1vdW50ZWQsIG1heWJlIGEgZmV3LWRvemVuIHJvd3Mgb2ZmIGR1ZSB0byBvdmVyc2NhblxuICAgIC8vIGVzdGltYXRlIGRyaWZ0KS4gTm93IGxhbmQgaXQgYXQgdG9wLUhFQURST09NLlxuICAgIHMuc2Nyb2xsVG8oTWF0aC5tYXgoMCwgZ2V0SXRlbVRvcChpZHgpIC0gSEVBRFJPT00pKVxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHNjYW5FbGVtZW50Py4oZWwpID8/IFtdXG4gICAgZWxlbWVudFBvc2l0aW9ucy5jdXJyZW50ID0geyBtc2dJZHg6IGlkeCwgcG9zaXRpb25zIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYHNlZWsoaT0ke2lkeH0gdD0ke3RyaWVzfSk6ICR7cG9zaXRpb25zLmxlbmd0aH0gcG9zaXRpb25zYClcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gUGhhbnRvbSDigJQgZW5naW5lIG1hdGNoZWQsIHJlbmRlciBkaWRuJ3QuIEF1dG8tYWR2YW5jZS5cbiAgICAgIGlmICgrK3BoYW50b21CdXJzdFJlZi5jdXJyZW50ID4gMjApIHtcbiAgICAgICAgcGhhbnRvbUJ1cnN0UmVmLmN1cnJlbnQgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc3RlcFJlZi5jdXJyZW50KHdhbnRMYXN0ID8gLTEgOiAxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHBoYW50b21CdXJzdFJlZi5jdXJyZW50ID0gMFxuICAgIGNvbnN0IG9yZCA9IHdhbnRMYXN0ID8gcG9zaXRpb25zLmxlbmd0aCAtIDEgOiAwXG4gICAgc2VhcmNoU3RhdGUuY3VycmVudC5zY3JlZW5PcmQgPSBvcmRcbiAgICBzdGFydFB0clJlZi5jdXJyZW50ID0gLTFcbiAgICBoaWdobGlnaHRSZWYuY3VycmVudChvcmQpXG4gICAgY29uc3QgcGVuZGluZyA9IHBlbmRpbmdTdGVwUmVmLmN1cnJlbnRcbiAgICBpZiAocGVuZGluZykge1xuICAgICAgcGVuZGluZ1N0ZXBSZWYuY3VycmVudCA9IDBcbiAgICAgIHN0ZXBSZWYuY3VycmVudChwZW5kaW5nKVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtzZWVrR2VuXSlcblxuICAvLyBTY3JvbGwgdG8gbWVzc2FnZSBpJ3MgdG9wLCBhcm0gc2NhblBlbmRpbmcuIHNjYW4tZWZmZWN0IHJlYWRzIGZyZXNoXG4gIC8vIHNjcmVlbiBuZXh0IHRpY2suIHdhbnRMYXN0OiBOLWludG8tbWVzc2FnZSDigJQgc2NyZWVuT3JkID0gbGVuZ3RoLTEuXG4gIGZ1bmN0aW9uIGp1bXAoaTogbnVtYmVyLCB3YW50TGFzdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWYuY3VycmVudFxuICAgIGlmICghcykgcmV0dXJuXG4gICAgY29uc3QganMgPSBqdW1wU3RhdGUuY3VycmVudFxuICAgIGNvbnN0IHsgZ2V0SXRlbUVsZW1lbnQsIHNjcm9sbFRvSW5kZXggfSA9IGpzXG4gICAgLy8gb2Zmc2V0cyBpcyBhIEZsb2F0NjRBcnJheSB3aG9zZSAubGVuZ3RoIGlzIHRoZSBhbGxvY2F0ZWQgYnVmZmVyIChvbmx5XG4gICAgLy8gZ3Jvd3MpIOKAlCBtZXNzYWdlcy5sZW5ndGggaXMgdGhlIGxvZ2ljYWwgaXRlbSBjb3VudC5cbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBqcy5tZXNzYWdlcy5sZW5ndGgpIHJldHVyblxuICAgIC8vIENsZWFyIHN0YWxlIGhpZ2hsaWdodCBiZWZvcmUgc2Nyb2xsLiBCZXR3ZWVuIG5vdyBhbmQgdGhlIHNlZWtcbiAgICAvLyBlZmZlY3QncyBoaWdobGlnaHQsIGludmVyc2Utb25seSBmcm9tIHNjYW4taGlnaGxpZ2h0IHNob3dzLlxuICAgIHNldFBvc2l0aW9ucz8uKG51bGwpXG4gICAgZWxlbWVudFBvc2l0aW9ucy5jdXJyZW50ID0geyBtc2dJZHg6IC0xLCBwb3NpdGlvbnM6IFtdIH1cbiAgICBzY2FuUmVxdWVzdFJlZi5jdXJyZW50ID0geyBpZHg6IGksIHdhbnRMYXN0LCB0cmllczogMCB9XG4gICAgY29uc3QgZWwgPSBnZXRJdGVtRWxlbWVudChpKVxuICAgIGNvbnN0IGggPSBlbD8ueW9nYU5vZGU/LmdldENvbXB1dGVkSGVpZ2h0KCkgPz8gMFxuICAgIC8vIE1vdW50ZWQg4oaSIHByZWNpc2Ugc2Nyb2xsVG8uIFVubW91bnRlZCDihpIgc2Nyb2xsVG9JbmRleCBtb3VudHMgaXRcbiAgICAvLyAoc2Nyb2xsVG9wIGFuZCB0b3BTcGFjZXIgYWdyZWUgdmlhIHRoZSBzYW1lIG9mZnNldHMgdmFsdWUg4oCUIGV4YWN0XG4gICAgLy8gYnkgY29uc3RydWN0aW9uLCBubyBlc3RpbWF0aW9uKS4gU2VlayBlZmZlY3QgZG9lcyB0aGUgcHJlY2lzZVxuICAgIC8vIHNjcm9sbFRvIGFmdGVyIHBhaW50IGVpdGhlciB3YXkuXG4gICAgaWYgKGVsICYmIGggPiAwKSB7XG4gICAgICBzLnNjcm9sbFRvKHRhcmdldEZvcihpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbmRleChpKVxuICAgIH1cbiAgICBidW1wU2VlaygpXG4gIH1cblxuICAvLyBBZHZhbmNlIHNjcmVlbk9yZCB3aXRoaW4gZWxlbWVudFBvc2l0aW9ucy4gRXhoYXVzdGVkIOKGkiBwdHIgYWR2YW5jZXMsXG4gIC8vIGp1bXAgdG8gbmV4dCBtYXRjaGVzW3B0cl0sIHJlLXNjYW4uIFBoYW50b20gKHNjYW4gZm91bmQgMCBhZnRlclxuICAvLyBqdW1wKSB0cmlnZ2VycyBhdXRvLWFkdmFuY2UgZnJvbSBzY2FuLWVmZmVjdC4gV3JhcGFyb3VuZCBndWFyZCBzdG9wc1xuICAvLyBpZiBldmVyeSBtZXNzYWdlIGlzIGEgcGhhbnRvbS5cbiAgZnVuY3Rpb24gc3RlcChkZWx0YTogMSB8IC0xKTogdm9pZCB7XG4gICAgY29uc3Qgc3QgPSBzZWFyY2hTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgeyBtYXRjaGVzLCBwcmVmaXhTdW0gfSA9IHN0XG4gICAgY29uc3QgdG90YWwgPSBwcmVmaXhTdW0uYXQoLTEpID8/IDBcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgLy8gU2VlayBpbi1mbGlnaHQg4oCUIHF1ZXVlIHRoaXMgcHJlc3MgKG9uZS1kZWVwLCBsYXRlc3Qgb3ZlcndyaXRlcykuXG4gICAgLy8gVGhlIHNlZWsgZWZmZWN0IGZpcmVzIGl0IGFmdGVyIGhpZ2hsaWdodC5cbiAgICBpZiAoc2NhblJlcXVlc3RSZWYuY3VycmVudCkge1xuICAgICAgcGVuZGluZ1N0ZXBSZWYuY3VycmVudCA9IGRlbHRhXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc3RhcnRQdHJSZWYuY3VycmVudCA8IDApIHN0YXJ0UHRyUmVmLmN1cnJlbnQgPSBzdC5wdHJcblxuICAgIGNvbnN0IHsgcG9zaXRpb25zIH0gPSBlbGVtZW50UG9zaXRpb25zLmN1cnJlbnRcbiAgICBjb25zdCBuZXdPcmQgPSBzdC5zY3JlZW5PcmQgKyBkZWx0YVxuICAgIGlmIChuZXdPcmQgPj0gMCAmJiBuZXdPcmQgPCBwb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzdC5zY3JlZW5PcmQgPSBuZXdPcmRcbiAgICAgIGhpZ2hsaWdodChuZXdPcmQpIC8vIHVwZGF0ZXMgYmFkZ2UgaW50ZXJuYWxseVxuICAgICAgc3RhcnRQdHJSZWYuY3VycmVudCA9IC0xXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBFeGhhdXN0ZWQgdmlzaWJsZS4gQWR2YW5jZSBwdHIg4oaSIGp1bXAg4oaSIHJlLXNjYW4uXG4gICAgY29uc3QgcHRyID0gKHN0LnB0ciArIGRlbHRhICsgbWF0Y2hlcy5sZW5ndGgpICUgbWF0Y2hlcy5sZW5ndGhcbiAgICBpZiAocHRyID09PSBzdGFydFB0clJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRQb3NpdGlvbnM/LihudWxsKVxuICAgICAgc3RhcnRQdHJSZWYuY3VycmVudCA9IC0xXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBzdGVwOiB3cmFwYXJvdW5kIGF0IHB0cj0ke3B0cn0sIGFsbCAke21hdGNoZXMubGVuZ3RofSBtc2dzIHBoYW50b21zYCxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdC5wdHIgPSBwdHJcbiAgICBzdC5zY3JlZW5PcmQgPSAwIC8vIHJlc29sdmVkIGFmdGVyIHNjYW4gKHdhbnRMYXN0IOKGkiBsZW5ndGgtMSlcbiAgICBqdW1wKG1hdGNoZXNbcHRyXSEsIGRlbHRhIDwgMClcbiAgICAvLyBzY3JlZW5PcmQgd2lsbCByZXNvbHZlIGFmdGVyIHNjYW4uIEJlc3QtZWZmb3J0OiBwcmVmaXhTdW1bcHRyXSArIDBcbiAgICAvLyBmb3IgbiAoZmlyc3QgcG9zKSwgcHJlZml4U3VtW3B0cisxXSBmb3IgTiAobGFzdCBwb3MgPSBjb3VudC0xKS5cbiAgICAvLyBUaGUgc2Nhbi1lZmZlY3QncyBoaWdobGlnaHQgd2lsbCBiZSB0aGUgcmVhbCB2YWx1ZTsgdGhpcyBpcyBhXG4gICAgLy8gcHJlLXNjYW4gcGxhY2Vob2xkZXIgc28gdGhlIGJhZGdlIHVwZGF0ZXMgaW1tZWRpYXRlbHkuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPVxuICAgICAgZGVsdGEgPCAwID8gKHByZWZpeFN1bVtwdHIgKyAxXSA/PyB0b3RhbCkgOiBwcmVmaXhTdW1bcHRyXSEgKyAxXG4gICAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlPy4odG90YWwsIHBsYWNlaG9sZGVyKVxuICB9XG4gIHN0ZXBSZWYuY3VycmVudCA9IHN0ZXBcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKFxuICAgIGp1bXBSZWYsXG4gICAgKCkgPT4gKHtcbiAgICAgIC8vIE5vbi1zZWFyY2gganVtcCAoc3RpY2t5IGhlYWRlciBjbGljaywgZXRjKS4gTm8gc2Nhbiwgbm8gcG9zaXRpb25zLlxuICAgICAganVtcFRvSW5kZXg6IChpOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGlmIChzKSBzLnNjcm9sbFRvKHRhcmdldEZvcihpKSlcbiAgICAgIH0sXG4gICAgICBzZXRTZWFyY2hRdWVyeTogKHE6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBOZXcgc2VhcmNoIGludmFsaWRhdGVzIGV2ZXJ5dGhpbmcuXG4gICAgICAgIHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgIGVsZW1lbnRQb3NpdGlvbnMuY3VycmVudCA9IHsgbXNnSWR4OiAtMSwgcG9zaXRpb25zOiBbXSB9XG4gICAgICAgIHN0YXJ0UHRyUmVmLmN1cnJlbnQgPSAtMVxuICAgICAgICBzZXRQb3NpdGlvbnM/LihudWxsKVxuICAgICAgICBjb25zdCBscSA9IHEudG9Mb3dlckNhc2UoKVxuICAgICAgICAvLyBPbmUgZW50cnkgcGVyIE1FU1NBR0UgKGRlZHVwbGljYXRlZCkuIEJvb2xlYW4gXCJkb2VzIHRoaXMgbXNnXG4gICAgICAgIC8vIGNvbnRhaW4gdGhlIHF1ZXJ5XCIuIH4xMG1zIGZvciA5ayBtZXNzYWdlcyB3aXRoIGNhY2hlZCBsb3dlcmVkLlxuICAgICAgICBjb25zdCBtYXRjaGVzOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIC8vIFBlci1tZXNzYWdlIG9jY3VycmVuY2UgY291bnQg4oaSIHByZWZpeFN1bSBmb3IgZ2xvYmFsIGN1cnJlbnRcbiAgICAgICAgLy8gaW5kZXguIEVuZ2luZS1jb3VudGVkIChjaGVhcCBpbmRleE9mIGxvb3ApOyBtYXkgZGlmZmVyIGZyb21cbiAgICAgICAgLy8gcmVuZGVyLWNvdW50IChzY2FuRWxlbWVudCkgZm9yIGdob3N0L3BoYW50b20gbWVzc2FnZXMgYnV0IGNsb3NlXG4gICAgICAgIC8vIGVub3VnaCBmb3IgdGhlIGJhZGdlLiBUaGUgYmFkZ2UgaXMgYSByb3VnaCBsb2NhdGlvbiBoaW50LlxuICAgICAgICBjb25zdCBwcmVmaXhTdW06IG51bWJlcltdID0gWzBdXG4gICAgICAgIGlmIChscSkge1xuICAgICAgICAgIGNvbnN0IG1zZ3MgPSBqdW1wU3RhdGUuY3VycmVudC5tZXNzYWdlc1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGV4dHJhY3RTZWFyY2hUZXh0KG1zZ3NbaV0hKVxuICAgICAgICAgICAgbGV0IHBvcyA9IHRleHQuaW5kZXhPZihscSlcbiAgICAgICAgICAgIGxldCBjbnQgPSAwXG4gICAgICAgICAgICB3aGlsZSAocG9zID49IDApIHtcbiAgICAgICAgICAgICAgY250KytcbiAgICAgICAgICAgICAgcG9zID0gdGV4dC5pbmRleE9mKGxxLCBwb3MgKyBscS5sZW5ndGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY250ID4gMCkge1xuICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goaSlcbiAgICAgICAgICAgICAgcHJlZml4U3VtLnB1c2gocHJlZml4U3VtLmF0KC0xKSEgKyBjbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvdGFsID0gcHJlZml4U3VtLmF0KC0xKSFcbiAgICAgICAgLy8gTmVhcmVzdCBNRVNTQUdFIHRvIHRoZSBhbmNob3IuIDw9IHNvIHRpZXMgZ28gdG8gbGF0ZXIuXG4gICAgICAgIGxldCBwdHIgPSAwXG4gICAgICAgIGNvbnN0IHMgPSBzY3JvbGxSZWYuY3VycmVudFxuICAgICAgICBjb25zdCB7IG9mZnNldHMsIHN0YXJ0LCBnZXRJdGVtVG9wIH0gPSBqdW1wU3RhdGUuY3VycmVudFxuICAgICAgICBjb25zdCBmaXJzdFRvcCA9IGdldEl0ZW1Ub3Aoc3RhcnQpXG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IGZpcnN0VG9wID49IDAgPyBmaXJzdFRvcCAtIG9mZnNldHNbc3RhcnRdISA6IDBcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCAmJiBzKSB7XG4gICAgICAgICAgY29uc3QgY3VyVG9wID1cbiAgICAgICAgICAgIHNlYXJjaEFuY2hvci5jdXJyZW50ID49IDAgPyBzZWFyY2hBbmNob3IuY3VycmVudCA6IHMuZ2V0U2Nyb2xsVG9wKClcbiAgICAgICAgICBsZXQgYmVzdCA9IEluZmluaXR5XG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBtYXRjaGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5hYnMob3JpZ2luICsgb2Zmc2V0c1ttYXRjaGVzW2tdIV0hIC0gY3VyVG9wKVxuICAgICAgICAgICAgaWYgKGQgPD0gYmVzdCkge1xuICAgICAgICAgICAgICBiZXN0ID0gZFxuICAgICAgICAgICAgICBwdHIgPSBrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBzZXRTZWFyY2hRdWVyeSgnJHtxfScpOiAke21hdGNoZXMubGVuZ3RofSBtc2dzIMK3IHB0cj0ke3B0cn0gYCArXG4gICAgICAgICAgICAgIGBtc2dJZHg9JHttYXRjaGVzW3B0cl19IGN1clRvcD0ke2N1clRvcH0gb3JpZ2luPSR7b3JpZ2lufWAsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHNlYXJjaFN0YXRlLmN1cnJlbnQgPSB7IG1hdGNoZXMsIHB0ciwgc2NyZWVuT3JkOiAwLCBwcmVmaXhTdW0gfVxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gd2FudExhc3Q9dHJ1ZTogcHJldmlldyB0aGUgTEFTVCBvY2N1cnJlbmNlIGluIHRoZSBuZWFyZXN0XG4gICAgICAgICAgLy8gbWVzc2FnZS4gQXQgc3RpY2t5LWJvdHRvbSAoY29tbW9uIC8gZW50cnkpLCBuZWFyZXN0IGlzIHRoZVxuICAgICAgICAgIC8vIGxhc3QgbXNnOyBpdHMgbGFzdCBvY2N1cnJlbmNlIGlzIGNsb3Nlc3QgdG8gd2hlcmUgdGhlIHVzZXJcbiAgICAgICAgICAvLyB3YXMg4oCUIG1pbmltYWwgdmlldyBtb3ZlbWVudC4gbiBhZHZhbmNlcyBmb3J3YXJkIGZyb20gdGhlcmUuXG4gICAgICAgICAganVtcChtYXRjaGVzW3B0cl0hLCB0cnVlKVxuICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaEFuY2hvci5jdXJyZW50ID49IDAgJiYgcykge1xuICAgICAgICAgIC8vIC9mb29iIOKGkiAwIG1hdGNoZXMg4oaSIHNuYXAgYmFjayB0byBhbmNob3IuIGxlc3MvdmltIGluY3NlYXJjaC5cbiAgICAgICAgICBzLnNjcm9sbFRvKHNlYXJjaEFuY2hvci5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICAgIC8vIEdsb2JhbCBvY2N1cnJlbmNlIGNvdW50ICsgMS1iYXNlZCBjdXJyZW50LiB3YW50TGFzdD10cnVlIHNvIHRoZVxuICAgICAgICAvLyBzY2FuIHdpbGwgbGFuZCBvbiB0aGUgbGFzdCBvY2N1cnJlbmNlIGluIG1hdGNoZXNbcHRyXS4gUGxhY2Vob2xkZXJcbiAgICAgICAgLy8gPSBwcmVmaXhTdW1bcHRyKzFdIChjb3VudCB0aHJvdWdoIHRoaXMgbXNnKS4gaGlnaGxpZ2h0KCkgdXBkYXRlc1xuICAgICAgICAvLyB0byB0aGUgZXhhY3QgdmFsdWUgYWZ0ZXIgc2NhbiBjb21wbGV0ZXMuXG4gICAgICAgIG9uU2VhcmNoTWF0Y2hlc0NoYW5nZT8uKFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIG1hdGNoZXMubGVuZ3RoID4gMCA/IChwcmVmaXhTdW1bcHRyICsgMV0gPz8gdG90YWwpIDogMCxcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIG5leHRNYXRjaDogKCkgPT4gc3RlcCgxKSxcbiAgICAgIHByZXZNYXRjaDogKCkgPT4gc3RlcCgtMSksXG4gICAgICBzZXRBbmNob3I6ICgpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGlmIChzKSBzZWFyY2hBbmNob3IuY3VycmVudCA9IHMuZ2V0U2Nyb2xsVG9wKClcbiAgICAgIH0sXG4gICAgICBkaXNhcm1TZWFyY2g6ICgpID0+IHtcbiAgICAgICAgLy8gTWFudWFsIHNjcm9sbCBpbnZhbGlkYXRlcyBzY3JlZW4tYWJzb2x1dGUgcG9zaXRpb25zLlxuICAgICAgICBzZXRQb3NpdGlvbnM/LihudWxsKVxuICAgICAgICBzY2FuUmVxdWVzdFJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICBlbGVtZW50UG9zaXRpb25zLmN1cnJlbnQgPSB7IG1zZ0lkeDogLTEsIHBvc2l0aW9uczogW10gfVxuICAgICAgICBzdGFydFB0clJlZi5jdXJyZW50ID0gLTFcbiAgICAgIH0sXG4gICAgICB3YXJtU2VhcmNoSW5kZXg6IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4V2FybWVkLmN1cnJlbnQpIHJldHVybiAwXG4gICAgICAgIGNvbnN0IG1zZ3MgPSBqdW1wU3RhdGUuY3VycmVudC5tZXNzYWdlc1xuICAgICAgICBjb25zdCBDSFVOSyA9IDUwMFxuICAgICAgICBsZXQgd29ya01zID0gMFxuICAgICAgICBjb25zdCB3YWxsU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZ3MubGVuZ3RoOyBpICs9IENIVU5LKSB7XG4gICAgICAgICAgYXdhaXQgc2xlZXAoMClcbiAgICAgICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5taW4oaSArIENIVU5LLCBtc2dzLmxlbmd0aClcbiAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGVuZDsgaisrKSB7XG4gICAgICAgICAgICBleHRyYWN0U2VhcmNoVGV4dChtc2dzW2pdISlcbiAgICAgICAgICB9XG4gICAgICAgICAgd29ya01zICs9IHBlcmZvcm1hbmNlLm5vdygpIC0gdDBcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YWxsTXMgPSBNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gd2FsbFN0YXJ0KVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYHdhcm1TZWFyY2hJbmRleDogJHttc2dzLmxlbmd0aH0gbXNncyDCtyB3b3JrPSR7TWF0aC5yb3VuZCh3b3JrTXMpfW1zIHdhbGw9JHt3YWxsTXN9bXMgY2h1bmtzPSR7TWF0aC5jZWlsKG1zZ3MubGVuZ3RoIC8gQ0hVTkspfWAsXG4gICAgICAgIClcbiAgICAgICAgaW5kZXhXYXJtZWQuY3VycmVudCA9IHRydWVcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQod29ya01zKVxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBDbG9zdXJlcyBvdmVyIHJlZnMgKyBjYWxsYmFja3MuIHNjcm9sbFJlZiBzdGFibGU7IG90aGVycyBhcmVcbiAgICAvLyB1c2VDYWxsYmFjayhbXSkgb3IgcHJvcC1kcmlsbGVkIGZyb20gUkVQTCAoc3RhYmxlKS5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW3Njcm9sbFJlZl0sXG4gIClcblxuICAvLyBTdGlja3lUcmFja2VyIGdvZXMgQUZURVIgdGhlIGxpc3QgY29udGVudC4gSXQgcmV0dXJucyBudWxsIChubyBET00gbm9kZSlcbiAgLy8gc28gb3JkZXIgc2hvdWxkbid0IG1hdHRlciBmb3IgbGF5b3V0IOKAlCBidXQgcHV0dGluZyBpdCBmaXJzdCBtZWFucyBldmVyeVxuICAvLyBmaW5lLWdyYWluZWQgY29tbWl0IGZyb20gaXRzIG93biBzY3JvbGwgc3Vic2NyaXB0aW9uIHJlY29uY2lsZXMgVEhST1VHSFxuICAvLyB0aGUgc2libGluZyBpdGVtcyAoUmVhY3Qgd2Fsa3MgY2hpbGRyZW4gaW4gb3JkZXIpLiBBZnRlciB0aGUgaXRlbXMsIGl0J3NcbiAgLy8gYSBsZWFmIHJlY29uY2lsZS4gRGVmZW5zaXZlOiBhbHNvIGF2b2lkcyBhbnkgWW9nYSBjaGlsZC1pbmRleCBxdWlya3MgaWZcbiAgLy8gdGhlIEluayByZWNvbmNpbGVyIGV2ZXIgbWF0ZXJpYWxpemVzIGEgcGxhY2Vob2xkZXIgZm9yIG51bGwgcmV0dXJucy5cbiAgY29uc3QgW2hvdmVyZWRLZXksIHNldEhvdmVyZWRLZXldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgLy8gU3RhYmxlIGNsaWNrL2hvdmVyIGhhbmRsZXJzIOKAlCBjYWxsZWQgd2l0aCBrLCBkaXNwYXRjaCBmcm9tIGEgcmVmIHNvXG4gIC8vIGNsb3N1cmUgaWRlbnRpdHkgZG9lc24ndCBjaGFuZ2UgcGVyIHJlbmRlci4gVGhlIHBlci1pdGVtIGhhbmRsZXJcbiAgLy8gY2xvc3VyZXMgKGBlID0+IC4uLmAsIGAoKSA9PiBzZXRIb3ZlcmVkS2V5KGspYCkgd2VyZSB0aGVcbiAgLy8gYG9wZXJhdGlvbk5ld0Fycm93RnVuY3Rpb25gIGxlYWZzIGluIHRoZSBzY3JvbGwgQ1BVIHByb2ZpbGU7IHRoZWlyXG4gIC8vIGNsZWFudXAgd2FzIDE2JSBvZiBHQyB0aW1lIChgRnVuY3Rpb25FeGVjdXRhYmxlOjpmaW5hbGl6ZVVuY29uZGl0aW9uYWxseWApLlxuICAvLyBBbGxvY2F0aW5nIDMgY2xvc3VyZXMgw5cgNjAgbW91bnRlZCBpdGVtcyDDlyAxMCBjb21taXRzL3NlYyBkdXJpbmcgZmFzdFxuICAvLyBzY3JvbGwgPSAxODAwIHNob3J0LWxpdmVkIGNsb3N1cmVzL3NlYy4gV2l0aCBzdGFibGUgcmVmcyB0aGUgaXRlbVxuICAvLyB3cmFwcGVyIHByb3BzIGRvbid0IGNoYW5nZSDihpIgVmlydHVhbEl0ZW0ubWVtbyBiYWlscyBmb3IgdGhlIH4zNVxuICAvLyB1bmNoYW5nZWQgaXRlbXMsIG9ubHkgfjI1IGZyZXNoIGl0ZW1zIHBheSBjcmVhdGVFbGVtZW50IGNvc3QuXG4gIGNvbnN0IGhhbmRsZXJzUmVmID0gdXNlUmVmKHsgb25JdGVtQ2xpY2ssIHNldEhvdmVyZWRLZXkgfSlcbiAgaGFuZGxlcnNSZWYuY3VycmVudCA9IHsgb25JdGVtQ2xpY2ssIHNldEhvdmVyZWRLZXkgfVxuICBjb25zdCBvbkNsaWNrSyA9IHVzZUNhbGxiYWNrKFxuICAgIChtc2c6IFJlbmRlcmFibGVNZXNzYWdlLCBjZWxsSXNCbGFuazogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IGhhbmRsZXJzUmVmLmN1cnJlbnRcbiAgICAgIGlmICghY2VsbElzQmxhbmsgJiYgaC5vbkl0ZW1DbGljaykgaC5vbkl0ZW1DbGljayhtc2cpXG4gICAgfSxcbiAgICBbXSxcbiAgKVxuICBjb25zdCBvbkVudGVySyA9IHVzZUNhbGxiYWNrKChrOiBzdHJpbmcpID0+IHtcbiAgICBoYW5kbGVyc1JlZi5jdXJyZW50LnNldEhvdmVyZWRLZXkoaylcbiAgfSwgW10pXG4gIGNvbnN0IG9uTGVhdmVLID0gdXNlQ2FsbGJhY2soKGs6IHN0cmluZykgPT4ge1xuICAgIGhhbmRsZXJzUmVmLmN1cnJlbnQuc2V0SG92ZXJlZEtleShwcmV2ID0+IChwcmV2ID09PSBrID8gbnVsbCA6IHByZXYpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IHJlZj17c3BhY2VyUmVmfSBoZWlnaHQ9e3RvcFNwYWNlcn0gZmxleFNocmluaz17MH0gLz5cbiAgICAgIHttZXNzYWdlcy5zbGljZShzdGFydCwgZW5kKS5tYXAoKG1zZywgaSkgPT4ge1xuICAgICAgICBjb25zdCBpZHggPSBzdGFydCArIGlcbiAgICAgICAgY29uc3QgayA9IGtleXNbaWR4XSFcbiAgICAgICAgY29uc3QgY2xpY2thYmxlID0gISFvbkl0ZW1DbGljayAmJiAoaXNJdGVtQ2xpY2thYmxlPy4obXNnKSA/PyB0cnVlKVxuICAgICAgICBjb25zdCBob3ZlcmVkID0gY2xpY2thYmxlICYmIGhvdmVyZWRLZXkgPT09IGtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBpc0l0ZW1FeHBhbmRlZD8uKG1zZylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VmlydHVhbEl0ZW1cbiAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgIGl0ZW1LZXk9e2t9XG4gICAgICAgICAgICBtc2c9e21zZ31cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgbWVhc3VyZVJlZj17bWVhc3VyZVJlZn1cbiAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZH1cbiAgICAgICAgICAgIGhvdmVyZWQ9e2hvdmVyZWR9XG4gICAgICAgICAgICBjbGlja2FibGU9e2NsaWNrYWJsZX1cbiAgICAgICAgICAgIG9uQ2xpY2tLPXtvbkNsaWNrS31cbiAgICAgICAgICAgIG9uRW50ZXJLPXtvbkVudGVyS31cbiAgICAgICAgICAgIG9uTGVhdmVLPXtvbkxlYXZlS31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICB7Ym90dG9tU3BhY2VyID4gMCAmJiA8Qm94IGhlaWdodD17Ym90dG9tU3BhY2VyfSBmbGV4U2hyaW5rPXswfSAvPn1cbiAgICAgIHt0cmFja1N0aWNreVByb21wdCAmJiAoXG4gICAgICAgIDxTdGlja3lUcmFja2VyXG4gICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgIHN0YXJ0PXtzdGFydH1cbiAgICAgICAgICBlbmQ9e2VuZH1cbiAgICAgICAgICBvZmZzZXRzPXtvZmZzZXRzfVxuICAgICAgICAgIGdldEl0ZW1Ub3A9e2dldEl0ZW1Ub3B9XG4gICAgICAgICAgZ2V0SXRlbUVsZW1lbnQ9e2dldEl0ZW1FbGVtZW50fVxuICAgICAgICAgIHNjcm9sbFJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBOT09QX1VOU1VCID0gKCkgPT4ge31cblxuLyoqXG4gKiBFZmZlY3Qtb25seSBjaGlsZCB0aGF0IHRyYWNrcyB0aGUgbGFzdCB1c2VyLXByb21wdCBzY3JvbGxlZCBhYm92ZSB0aGVcbiAqIHZpZXdwb3J0IHRvcCBhbmQgZmlyZXMgb25DaGFuZ2Ugd2hlbiBpdCBjaGFuZ2VzLlxuICpcbiAqIFJlbmRlcmVkIGFzIGEgc2VwYXJhdGUgY29tcG9uZW50IChub3QgYSBob29rIGluIFZpcnR1YWxNZXNzYWdlTGlzdCkgc28gaXRcbiAqIGNhbiBzdWJzY3JpYmUgdG8gc2Nyb2xsIGF0IEZJTkVSIGdyYW51bGFyaXR5IHRoYW4gU0NST0xMX1FVQU5UVU09NDAuIFRoZVxuICogbGlzdCBuZWVkcyB0aGUgY29hcnNlIHF1YW50dW0gdG8gYXZvaWQgcGVyLXdoZWVsLXRpY2sgWW9nYSByZWxheW91dHM7IHRoaXNcbiAqIHRyYWNrZXIgaXMganVzdCBhIHdhbGsgKyBjb21wYXJpc29uIGFuZCBjYW4gYWZmb3JkIHRvIHJ1biBldmVyeSB0aWNrLiBXaGVuXG4gKiBpdCByZS1yZW5kZXJzIGFsb25lLCB0aGUgbGlzdCdzIHJlY29uY2lsZWQgb3V0cHV0IGlzIHVuY2hhbmdlZCAoc2FtZSBwcm9wc1xuICogZnJvbSB0aGUgcGFyZW50J3MgbGFzdCBjb21taXQpIOKAlCBubyBZb2dhIHdvcmsuIFdpdGhvdXQgdGhpcyBzcGxpdCwgdGhlXG4gKiBoZWFkZXIgbGFncyBieSB+b25lIGNvbnZlcnNhdGlvbiB0dXJuICg0MCByb3dzIOKJiCBvbmUgcHJvbXB0ICsgcmVzcG9uc2UpLlxuICpcbiAqIGZpcnN0VmlzaWJsZSBkZXJpdmF0aW9uOiBpdGVtIEJveGVzIGFyZSBkaXJlY3QgWW9nYSBjaGlsZHJlbiBvZiB0aGVcbiAqIFNjcm9sbEJveCBjb250ZW50IHdyYXBwZXIgKGZyYWdtZW50cyBjb2xsYXBzZSBpbiB0aGUgSW5rIERPTSksIHNvXG4gKiB5b2dhLmdldENvbXB1dGVkVG9wIGlzIGNvbnRlbnQtd3JhcHBlci1yZWxhdGl2ZSDigJQgc2FtZSBjb29yZGluYXRlIHNwYWNlIGFzXG4gKiBzY3JvbGxUb3AuIENvbXBhcmUgYWdhaW5zdCBzY3JvbGxUb3AgKyBwZW5kaW5nRGVsdGEgKHRoZSBzY3JvbGwgVEFSR0VUIOKAlFxuICogc2Nyb2xsQnkgb25seSBzZXRzIHBlbmRpbmdEZWx0YSwgY29tbWl0dGVkIHNjcm9sbFRvcCBsYWdzKS4gV2FsayBiYWNrd2FyZFxuICogZnJvbSB0aGUgbW91bnQtcmFuZ2UgZW5kOyBicmVhayB3aGVuIGFuIGl0ZW0ncyB0b3AgaXMgYWJvdmUgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBTdGlja3lUcmFja2VyKHtcbiAgbWVzc2FnZXMsXG4gIHN0YXJ0LFxuICBlbmQsXG4gIG9mZnNldHMsXG4gIGdldEl0ZW1Ub3AsXG4gIGdldEl0ZW1FbGVtZW50LFxuICBzY3JvbGxSZWYsXG59OiB7XG4gIG1lc3NhZ2VzOiBSZW5kZXJhYmxlTWVzc2FnZVtdXG4gIHN0YXJ0OiBudW1iZXJcbiAgZW5kOiBudW1iZXJcbiAgb2Zmc2V0czogQXJyYXlMaWtlPG51bWJlcj5cbiAgZ2V0SXRlbVRvcDogKGluZGV4OiBudW1iZXIpID0+IG51bWJlclxuICBnZXRJdGVtRWxlbWVudDogKGluZGV4OiBudW1iZXIpID0+IERPTUVsZW1lbnQgfCBudWxsXG4gIHNjcm9sbFJlZjogUmVmT2JqZWN0PFNjcm9sbEJveEhhbmRsZSB8IG51bGw+XG59KTogbnVsbCB7XG4gIGNvbnN0IHsgc2V0U3RpY2t5UHJvbXB0IH0gPSB1c2VDb250ZXh0KFNjcm9sbENocm9tZUNvbnRleHQpXG4gIC8vIEZpbmUtZ3JhaW5lZCBzdWJzY3JpcHRpb24g4oCUIHNuYXBzaG90IGlzIHVucXVhbnRpemVkIHNjcm9sbFRvcCtkZWx0YSBzb1xuICAvLyBldmVyeSBzY3JvbGwgYWN0aW9uICh3aGVlbCB0aWNrLCBQZ1VwLCBkcmFnKSB0cmlnZ2VycyBhIHJlLXJlbmRlciBvZlxuICAvLyBUSElTIGNvbXBvbmVudCBvbmx5LiBTdGlja3kgYml0IGZvbGRlZCBpbnRvIHRoZSBzaWduIHNvIHN0aWNreeKGkmJyb2tlblxuICAvLyBhbHNvIHRyaWdnZXJzIChzY3JvbGxUb0JvdHRvbSBzZXRzIHN0aWNreSB3aXRob3V0IG1vdmluZyBzY3JvbGxUb3ApLlxuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjayhcbiAgICAobGlzdGVuZXI6ICgpID0+IHZvaWQpID0+XG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc3Vic2NyaWJlKGxpc3RlbmVyKSA/PyBOT09QX1VOU1VCLFxuICAgIFtzY3JvbGxSZWZdLFxuICApXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWYuY3VycmVudFxuICAgIGlmICghcykgcmV0dXJuIE5hTlxuICAgIGNvbnN0IHQgPSBzLmdldFNjcm9sbFRvcCgpICsgcy5nZXRQZW5kaW5nRGVsdGEoKVxuICAgIHJldHVybiBzLmlzU3RpY2t5KCkgPyAtMSAtIHQgOiB0XG4gIH0pXG5cbiAgLy8gUmVhZCBsaXZlIHNjcm9sbCBzdGF0ZSBvbiBldmVyeSByZW5kZXIuXG4gIGNvbnN0IGlzU3RpY2t5ID0gc2Nyb2xsUmVmLmN1cnJlbnQ/LmlzU3RpY2t5KCkgPz8gdHJ1ZVxuICBjb25zdCB0YXJnZXQgPSBNYXRoLm1heChcbiAgICAwLFxuICAgIChzY3JvbGxSZWYuY3VycmVudD8uZ2V0U2Nyb2xsVG9wKCkgPz8gMCkgK1xuICAgICAgKHNjcm9sbFJlZi5jdXJyZW50Py5nZXRQZW5kaW5nRGVsdGEoKSA/PyAwKSxcbiAgKVxuXG4gIC8vIFdhbGsgdGhlIG1vdW50ZWQgcmFuZ2UgdG8gZmluZCB0aGUgZmlyc3QgaXRlbSBhdC1vci1iZWxvdyB0aGUgdmlld3BvcnRcbiAgLy8gdG9wLiBgcmFuZ2VgIGlzIGZyb20gdGhlIHBhcmVudCdzIGNvYXJzZS1xdWFudHVtIHJlbmRlciAobWF5IGJlIHNsaWdodGx5XG4gIC8vIHN0YWxlKSBidXQgb3ZlcnNjYW4gZ3VhcmFudGVlcyBpdCBzcGFucyB3ZWxsIHBhc3QgdGhlIHZpZXdwb3J0IGluIGJvdGhcbiAgLy8gZGlyZWN0aW9ucy4gSXRlbXMgd2l0aG91dCBhIFlvZ2EgbGF5b3V0IHlldCAobmV3bHkgbW91bnRlZCB0aGlzIGZyYW1lKVxuICAvLyBhcmUgdHJlYXRlZCBhcyBhdC1vci1iZWxvdyDigJQgdGhleSdyZSBzb21ld2hlcmUgaW4gdmlldywgYW5kIGFzc3VtaW5nXG4gIC8vIG90aGVyd2lzZSB3b3VsZCBzaG93IGEgc3RpY2t5IGZvciBhIHByb21wdCB0aGF0J3MgYWN0dWFsbHkgb24gc2NyZWVuLlxuICBsZXQgZmlyc3RWaXNpYmxlID0gc3RhcnRcbiAgbGV0IGZpcnN0VmlzaWJsZVRvcCA9IC0xXG4gIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0OyBpLS0pIHtcbiAgICBjb25zdCB0b3AgPSBnZXRJdGVtVG9wKGkpXG4gICAgaWYgKHRvcCA+PSAwKSB7XG4gICAgICBpZiAodG9wIDwgdGFyZ2V0KSBicmVha1xuICAgICAgZmlyc3RWaXNpYmxlVG9wID0gdG9wXG4gICAgfVxuICAgIGZpcnN0VmlzaWJsZSA9IGlcbiAgfVxuXG4gIGxldCBpZHggPSAtMVxuICBsZXQgdGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgaWYgKGZpcnN0VmlzaWJsZSA+IDAgJiYgIWlzU3RpY2t5KSB7XG4gICAgZm9yIChsZXQgaSA9IGZpcnN0VmlzaWJsZSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCB0ID0gc3RpY2t5UHJvbXB0VGV4dChtZXNzYWdlc1tpXSEpXG4gICAgICBpZiAodCA9PT0gbnVsbCkgY29udGludWVcbiAgICAgIC8vIFRoZSBwcm9tcHQncyB3cmFwcGluZyBCb3ggdG9wIGlzIGFib3ZlIHRhcmdldCAodGhhdCdzIHdoeSBpdCdzIGluXG4gICAgICAvLyB0aGUgWzAsIGZpcnN0VmlzaWJsZSkgcmFuZ2UpLCBidXQgaXRzIOKdryBpcyBhdCB0b3ArMSAobWFyZ2luVG9wPTEpLlxuICAgICAgLy8gSWYgdGhlIOKdryBpcyBhdC1vci1iZWxvdyB0YXJnZXQsIGl0J3MgVklTSUJMRSBhdCB2aWV3cG9ydCB0b3Ag4oCUXG4gICAgICAvLyBzaG93aW5nIHRoZSBzYW1lIHRleHQgaW4gdGhlIGhlYWRlciB3b3VsZCBkdXBsaWNhdGUgaXQuIEhhcHBlbnNcbiAgICAgIC8vIGluIHRoZSAxLXJvdyBnYXAgYmV0d2VlbiBCb3ggdG9wIHNjcm9sbGluZyBwYXN0IGFuZCDina8gc2Nyb2xsaW5nXG4gICAgICAvLyBwYXN0LiBTa2lwIHRvIHRoZSBuZXh0LW9sZGVyIHByb21wdCAoaXRzIOKdryBpcyBkZWZpbml0ZWx5IGFib3ZlKS5cbiAgICAgIGNvbnN0IHRvcCA9IGdldEl0ZW1Ub3AoaSlcbiAgICAgIGlmICh0b3AgPj0gMCAmJiB0b3AgKyAxID49IHRhcmdldCkgY29udGludWVcbiAgICAgIGlkeCA9IGlcbiAgICAgIHRleHQgPSB0XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJhc2VPZmZzZXQgPVxuICAgIGZpcnN0VmlzaWJsZVRvcCA+PSAwID8gZmlyc3RWaXNpYmxlVG9wIC0gb2Zmc2V0c1tmaXJzdFZpc2libGVdISA6IDBcbiAgY29uc3QgZXN0aW1hdGUgPSBpZHggPj0gMCA/IE1hdGgubWF4KDAsIGJhc2VPZmZzZXQgKyBvZmZzZXRzW2lkeF0hKSA6IC0xXG5cbiAgLy8gRm9yIGNsaWNrLWp1bXBzIHRvIGl0ZW1zIG5vdCB5ZXQgbW91bnRlZCAodXNlciBzY3JvbGxlZCBmYXIgcGFzdCxcbiAgLy8gcHJvbXB0IGlzIGluIHRoZSB0b3BTcGFjZXIpLiBDbGljayBoYW5kbGVyIHNjcm9sbHMgdG8gdGhlIGVzdGltYXRlXG4gIC8vIHRvIG1vdW50IGl0OyB0aGlzIGFuY2hvcnMgYnkgZWxlbWVudCBvbmNlIGl0IGFwcGVhcnMuIHNjcm9sbFRvRWxlbWVudFxuICAvLyBkZWZlcnMgdGhlIFlvZ2EtcG9zaXRpb24gcmVhZCB0byByZW5kZXIgdGltZSAocmVuZGVyLW5vZGUtdG8tb3V0cHV0XG4gIC8vIHJlYWRzIGVsLnlvZ2FOb2RlLmdldENvbXB1dGVkVG9wKCkgaW4gdGhlIFNBTUUgY2FsY3VsYXRlTGF5b3V0IHBhc3NcbiAgLy8gdGhhdCBwcm9kdWNlcyBzY3JvbGxIZWlnaHQpIOKAlCBubyB0aHJvdHRsZSByYWNlLiBDYXAgcmV0cmllczogYSAvY2xlYXJcbiAgLy8gcmFjZSBjb3VsZCB1bm1vdW50IHRoZSBpdGVtIG1pZC1zZXF1ZW5jZS5cbiAgY29uc3QgcGVuZGluZyA9IHVzZVJlZih7IGlkeDogLTEsIHRyaWVzOiAwIH0pXG4gIC8vIFN1cHByZXNzaW9uIHN0YXRlIG1hY2hpbmUuIFRoZSBjbGljayBoYW5kbGVyIGFybXM7IHRoZSBvbkNoYW5nZSBlZmZlY3RcbiAgLy8gY29uc3VtZXMgKGFybWVk4oaSZm9yY2UpIHRoZW4gZmlyZXMtYW5kLWNsZWFycyBvbiB0aGUgcmVuZGVyIEFGVEVSIHRoYXRcbiAgLy8gKGZvcmNl4oaSbm9uZSkuIFRoZSBmb3JjZSBzdGVwIHBvaXNvbnMgdGhlIGRlZHVwOiBhZnRlciBjbGljaywgaWR4IG9mdGVuXG4gIC8vIHJlY29tcHV0ZXMgdG8gdGhlIFNBTUUgcHJvbXB0IChpdHMgdG9wIGlzIHN0aWxsIGFib3ZlIHRhcmdldCksIHNvXG4gIC8vIHdpdGhvdXQgZm9yY2UgdGhlIGxhc3QuaWR4PT09aWR4IGd1YXJkIHdvdWxkIGhvbGQgJ2NsaWNrZWQnIHVudGlsIHRoZVxuICAvLyB1c2VyIGNyb3NzZWQgYSBwcm9tcHQgYm91bmRhcnkuIFByZXZpb3VzbHkgZW5jb2RlZCBpbiBsYXN0LmlkeCBhc1xuICAvLyAtMS8tMi8tMyB3aGljaCBvdmVybGFwcGVkIHdpdGggcmVhbCBpbmRpY2VzIOKAlCB0b28gY2xldmVyLlxuICB0eXBlIFN1cHByZXNzID0gJ25vbmUnIHwgJ2FybWVkJyB8ICdmb3JjZSdcbiAgY29uc3Qgc3VwcHJlc3MgPSB1c2VSZWY8U3VwcHJlc3M+KCdub25lJylcbiAgLy8gRGVkdXAgb24gaWR4IG9ubHkg4oCUIGVzdGltYXRlIGRlcml2ZXMgZnJvbSBmaXJzdFZpc2libGVUb3Agd2hpY2ggc2hpZnRzXG4gIC8vIGV2ZXJ5IHNjcm9sbCB0aWNrLCBzbyBpbmNsdWRpbmcgaXQgaW4gdGhlIGtleSBtYWRlIHRoZSBndWFyZCBkZWFkXG4gIC8vIChzZXRTdGlja3lQcm9tcHQgZmlyZWQgYSBmcmVzaCB7dGV4dCxzY3JvbGxUb30gcGVyLWZyYW1lKS4gVGhlIHNjcm9sbFRvXG4gIC8vIGNsb3N1cmUgc3RpbGwgY2FwdHVyZXMgdGhlIGN1cnJlbnQgZXN0aW1hdGU7IGl0IGp1c3QgZG9lc24ndCBuZWVkIHRvXG4gIC8vIHJlLWZpcmUgd2hlbiBvbmx5IGVzdGltYXRlIG1vdmVkLlxuICBjb25zdCBsYXN0SWR4ID0gdXNlUmVmKC0xKVxuXG4gIC8vIHNldFN0aWNreVByb21wdCBlZmZlY3QgRklSU1Qg4oCUIG11c3Qgc2VlIHBlbmRpbmcuaWR4IGJlZm9yZSB0aGVcbiAgLy8gY29ycmVjdGlvbiBlZmZlY3QgYmVsb3cgY2xlYXJzIGl0LiBPbiB0aGUgZXN0aW1hdGUtZmFsbGJhY2sgcGF0aCwgdGhlXG4gIC8vIHJlbmRlciB0aGF0IG1vdW50cyB0aGUgaXRlbSBpcyBBTFNPIHRoZSByZW5kZXIgd2hlcmUgY29ycmVjdGlvbiBjbGVhcnNcbiAgLy8gcGVuZGluZzsgaWYgdGhpcyByYW4gc2Vjb25kLCB0aGUgcGVuZGluZyBnYXRlIHdvdWxkIGJlIGRlYWQgYW5kXG4gIC8vIHNldFN0aWNreVByb21wdChwcmV2UHJvbXB0KSB3b3VsZCBmaXJlIG1pZC1qdW1wLCByZS1tb3VudGluZyB0aGVcbiAgLy8gaGVhZGVyIG92ZXIgJ2NsaWNrZWQnLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEhvbGQgd2hpbGUgdHdvLXBoYXNlIGNvcnJlY3Rpb24gaXMgaW4gZmxpZ2h0LlxuICAgIGlmIChwZW5kaW5nLmN1cnJlbnQuaWR4ID49IDApIHJldHVyblxuICAgIGlmIChzdXBwcmVzcy5jdXJyZW50ID09PSAnYXJtZWQnKSB7XG4gICAgICBzdXBwcmVzcy5jdXJyZW50ID0gJ2ZvcmNlJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGZvcmNlID0gc3VwcHJlc3MuY3VycmVudCA9PT0gJ2ZvcmNlJ1xuICAgIHN1cHByZXNzLmN1cnJlbnQgPSAnbm9uZSdcbiAgICBpZiAoIWZvcmNlICYmIGxhc3RJZHguY3VycmVudCA9PT0gaWR4KSByZXR1cm5cbiAgICBsYXN0SWR4LmN1cnJlbnQgPSBpZHhcbiAgICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgICAgc2V0U3RpY2t5UHJvbXB0KG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gRmlyc3QgcGFyYWdyYXBoIG9ubHkgKHNwbGl0IG9uIGJsYW5rIGxpbmUpIOKAlCBhIHByb21wdCBsaWtlXG4gICAgLy8gXCJzdGlsbCBzZWVpbmcgYnVnczpcXG5cXG4xLiBmb29cXG4yLiBiYXJcIiBwcmV2aWV3cyBhcyBqdXN0IHRoZVxuICAgIC8vIGxlYWQtaW4uIHRyaW1TdGFydCBzbyBhIGxlYWRpbmcgYmxhbmsgbGluZSAocXVldWVkX2NvbW1hbmQgbWlkLVxuICAgIC8vIHR1cm4gbWVzc2FnZXMgc29tZXRpbWVzIGhhdmUgb25lKSBkb2Vzbid0IGZpbmQgcGFyYUVuZCBhdCAwLlxuICAgIGNvbnN0IHRyaW1tZWQgPSB0ZXh0LnRyaW1TdGFydCgpXG4gICAgY29uc3QgcGFyYUVuZCA9IHRyaW1tZWQuc2VhcmNoKC9cXG5cXHMqXFxuLylcbiAgICBjb25zdCBjb2xsYXBzZWQgPSAocGFyYUVuZCA+PSAwID8gdHJpbW1lZC5zbGljZSgwLCBwYXJhRW5kKSA6IHRyaW1tZWQpXG4gICAgICAuc2xpY2UoMCwgU1RJQ0tZX1RFWFRfQ0FQKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgLnRyaW0oKVxuICAgIGlmIChjb2xsYXBzZWQgPT09ICcnKSB7XG4gICAgICBzZXRTdGlja3lQcm9tcHQobnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjYXB0dXJlZElkeCA9IGlkeFxuICAgIGNvbnN0IGNhcHR1cmVkRXN0aW1hdGUgPSBlc3RpbWF0ZVxuICAgIHNldFN0aWNreVByb21wdCh7XG4gICAgICB0ZXh0OiBjb2xsYXBzZWQsXG4gICAgICBzY3JvbGxUbzogKCkgPT4ge1xuICAgICAgICAvLyBIaWRlIGhlYWRlciwga2VlcCBwYWRkaW5nIGNvbGxhcHNlZCDigJQgRnVsbHNjcmVlbkxheW91dCdzXG4gICAgICAgIC8vICdjbGlja2VkJyBzZW50aW5lbCDihpIgc2Nyb2xsQm94X3k9MCArIHBhZD0wIOKGkiB2aWV3cG9ydFRvcD0wLlxuICAgICAgICBzZXRTdGlja3lQcm9tcHQoJ2NsaWNrZWQnKVxuICAgICAgICBzdXBwcmVzcy5jdXJyZW50ID0gJ2FybWVkJ1xuICAgICAgICAvLyBzY3JvbGxUb0VsZW1lbnQgYW5jaG9ycyBieSBET01FbGVtZW50IHJlZiwgbm90IGEgbnVtYmVyOlxuICAgICAgICAvLyByZW5kZXItbm9kZS10by1vdXRwdXQgcmVhZHMgZWwueW9nYU5vZGUuZ2V0Q29tcHV0ZWRUb3AoKSBhdFxuICAgICAgICAvLyBwYWludCB0aW1lIChzYW1lIFlvZ2EgcGFzcyBhcyBzY3JvbGxIZWlnaHQpLiBObyBzdGFsZW5lc3MgZnJvbVxuICAgICAgICAvLyB0aGUgdGhyb3R0bGVkIHJlbmRlciDigJQgdGhlIHJlZiBpcyBzdGFibGUsIHRoZSBwb3NpdGlvbiByZWFkIGlzXG4gICAgICAgIC8vIGRlZmVycmVkLiBvZmZzZXQ9MSA9IFVzZXJQcm9tcHRNZXNzYWdlIG1hcmdpblRvcC5cbiAgICAgICAgY29uc3QgZWwgPSBnZXRJdGVtRWxlbWVudChjYXB0dXJlZElkeClcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvRWxlbWVudChlbCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOb3QgbW91bnRlZCAoc2Nyb2xsZWQgZmFyIHBhc3Qg4oCUIGluIHRvcFNwYWNlcikuIEp1bXAgdG9cbiAgICAgICAgICAvLyBlc3RpbWF0ZSB0byBtb3VudCBpdDsgY29ycmVjdGlvbiBlZmZlY3QgcmUtYW5jaG9ycyBvbmNlIGl0XG4gICAgICAgICAgLy8gYXBwZWFycy4gRXN0aW1hdGUgaXMgREVGQVVMVF9FU1RJTUFURS1iYXNlZCDigJQgbGFuZHMgc2hvcnQuXG4gICAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvKGNhcHR1cmVkRXN0aW1hdGUpXG4gICAgICAgICAgcGVuZGluZy5jdXJyZW50ID0geyBpZHg6IGNhcHR1cmVkSWR4LCB0cmllczogMCB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgICAvLyBObyBkZXBzIOKAlCBtdXN0IHJ1biBldmVyeSByZW5kZXIuIFN1cHByZXNzaW9uIHN0YXRlIGxpdmVzIGluIGEgcmVmXG4gICAgLy8gKG5vdCBpZHgvZXN0aW1hdGUpLCBzbyBhIGRlcHMtZ2F0ZWQgZWZmZWN0IHdvdWxkIG5ldmVyIHNlZSBpdCB0aWNrLlxuICAgIC8vIEJvZHkncyBvd24gZ3VhcmRzIHNob3J0LWNpcmN1aXQgd2hlbiBub3RoaW5nIGNoYW5nZWQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9KVxuXG4gIC8vIENvcnJlY3Rpb246IGZvciBjbGljay1qdW1wcyB0byB1bm1vdW50ZWQgaXRlbXMuIENsaWNrIGhhbmRsZXIgc2Nyb2xsZWRcbiAgLy8gdG8gdGhlIGVzdGltYXRlOyB0aGlzIHJlLWFuY2hvcnMgYnkgZWxlbWVudCBvbmNlIHRoZSBpdGVtIGFwcGVhcnMuXG4gIC8vIHNjcm9sbFRvRWxlbWVudCBkZWZlcnMgdGhlIFlvZ2EgcmVhZCB0byBwYWludCB0aW1lIOKAlCBkZXRlcm1pbmlzdGljLlxuICAvLyBTRUNPTkQgc28gaXQgY2xlYXJzIHBlbmRpbmcgQUZURVIgdGhlIG9uQ2hhbmdlIGdhdGUgYWJvdmUgaGFzIHNlZW4gaXQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBlbmRpbmcuY3VycmVudC5pZHggPCAwKSByZXR1cm5cbiAgICBjb25zdCBlbCA9IGdldEl0ZW1FbGVtZW50KHBlbmRpbmcuY3VycmVudC5pZHgpXG4gICAgaWYgKGVsKSB7XG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG9FbGVtZW50KGVsLCAxKVxuICAgICAgcGVuZGluZy5jdXJyZW50ID0geyBpZHg6IC0xLCB0cmllczogMCB9XG4gICAgfSBlbHNlIGlmICgrK3BlbmRpbmcuY3VycmVudC50cmllcyA+IDUpIHtcbiAgICAgIHBlbmRpbmcuY3VycmVudCA9IHsgaWR4OiAtMSwgdHJpZXM6IDAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gbnVsbFxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHR5cGUgeyBVVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXZlcnkgfSBmcm9tICdzcmMvdXRpbHMvc2V0LmpzJ1xuaW1wb3J0IHsgZ2V0SXNSZW1vdGVNb2RlIH0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBCTEFDS19DSVJDTEUgfSBmcm9tICcuLi9jb25zdGFudHMvZmlndXJlcy5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB0eXBlIHsgU2Nyb2xsQm94SGFuZGxlIH0gZnJvbSAnLi4vaW5rL2NvbXBvbmVudHMvU2Nyb2xsQm94LmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxOb3RpZmljYXRpb24gfSBmcm9tICcuLi9pbmsvdXNlVGVybWluYWxOb3RpZmljYXRpb24uanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VTaG9ydGN1dERpc3BsYXkgfSBmcm9tICcuLi9rZXliaW5kaW5ncy91c2VTaG9ydGN1dERpc3BsYXkuanMnXG5pbXBvcnQgdHlwZSB7IFNjcmVlbiB9IGZyb20gJy4uL3NjcmVlbnMvUkVQTC5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi9Ub29sLmpzJ1xuaW1wb3J0IHsgZmluZFRvb2xCeU5hbWUgfSBmcm9tICcuLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb25zUmVzdWx0IH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgdHlwZSB7XG4gIE1lc3NhZ2UgYXMgTWVzc2FnZVR5cGUsXG4gIE5vcm1hbGl6ZWRNZXNzYWdlLFxuICBQcm9ncmVzc01lc3NhZ2UgYXMgUHJvZ3Jlc3NNZXNzYWdlVHlwZSxcbiAgUmVuZGVyYWJsZU1lc3NhZ2UsXG59IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyB0eXBlIEFkdmlzb3JCbG9jaywgaXNBZHZpc29yQmxvY2sgfSBmcm9tICcuLi91dGlscy9hZHZpc29yLmpzJ1xuaW1wb3J0IHsgY29sbGFwc2VCYWNrZ3JvdW5kQmFzaE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi91dGlscy9jb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucy5qcydcbmltcG9ydCB7IGNvbGxhcHNlSG9va1N1bW1hcmllcyB9IGZyb20gJy4uL3V0aWxzL2NvbGxhcHNlSG9va1N1bW1hcmllcy5qcydcbmltcG9ydCB7IGNvbGxhcHNlUmVhZFNlYXJjaEdyb3VwcyB9IGZyb20gJy4uL3V0aWxzL2NvbGxhcHNlUmVhZFNlYXJjaC5qcydcbmltcG9ydCB7IGNvbGxhcHNlVGVhbW1hdGVTaHV0ZG93bnMgfSBmcm9tICcuLi91dGlscy9jb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGlzRnVsbHNjcmVlbkVudkVuYWJsZWQgfSBmcm9tICcuLi91dGlscy9mdWxsc2NyZWVuLmpzJ1xuaW1wb3J0IHsgYXBwbHlHcm91cGluZyB9IGZyb20gJy4uL3V0aWxzL2dyb3VwVG9vbFVzZXMuanMnXG5pbXBvcnQge1xuICBidWlsZE1lc3NhZ2VMb29rdXBzLFxuICBjcmVhdGVBc3Npc3RhbnRNZXNzYWdlLFxuICBkZXJpdmVVVUlELFxuICBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5LFxuICBnZXRUb29sVXNlSUQsXG4gIGdldFRvb2xVc2VJRHMsXG4gIGhhc1VucmVzb2x2ZWRIb29rc0Zyb21Mb29rdXAsXG4gIGlzTm90RW1wdHlNZXNzYWdlLFxuICBub3JtYWxpemVNZXNzYWdlcyxcbiAgcmVvcmRlck1lc3NhZ2VzSW5VSSxcbiAgdHlwZSBTdHJlYW1pbmdUaGlua2luZyxcbiAgdHlwZSBTdHJlYW1pbmdUb29sVXNlLFxuICBzaG91bGRTaG93VXNlck1lc3NhZ2UsXG59IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyByZW5kZXJhYmxlU2VhcmNoVGV4dCB9IGZyb20gJy4uL3V0aWxzL3RyYW5zY3JpcHRTZWFyY2guanMnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0RpdmlkZXIuanMnXG5pbXBvcnQgdHlwZSB7IFVuc2VlbkRpdmlkZXIgfSBmcm9tICcuL0Z1bGxzY3JlZW5MYXlvdXQuanMnXG5pbXBvcnQgeyBMb2dvVjIgfSBmcm9tICcuL0xvZ29WMi9Mb2dvVjIuanMnXG5pbXBvcnQgeyBTdHJlYW1pbmdNYXJrZG93biB9IGZyb20gJy4vTWFya2Rvd24uanMnXG5pbXBvcnQgeyBoYXNDb250ZW50QWZ0ZXJJbmRleCwgTWVzc2FnZVJvdyB9IGZyb20gJy4vTWVzc2FnZVJvdy5qcydcbmltcG9ydCB7XG4gIEluVmlydHVhbExpc3RDb250ZXh0LFxuICB0eXBlIE1lc3NhZ2VBY3Rpb25zTmF2LFxuICBNZXNzYWdlQWN0aW9uc1NlbGVjdGVkQ29udGV4dCxcbiAgdHlwZSBNZXNzYWdlQWN0aW9uc1N0YXRlLFxufSBmcm9tICcuL21lc3NhZ2VBY3Rpb25zLmpzJ1xuaW1wb3J0IHsgQXNzaXN0YW50VGhpbmtpbmdNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcy9Bc3Npc3RhbnRUaGlua2luZ01lc3NhZ2UuanMnXG5pbXBvcnQgeyBpc051bGxSZW5kZXJpbmdBdHRhY2htZW50IH0gZnJvbSAnLi9tZXNzYWdlcy9udWxsUmVuZGVyaW5nQXR0YWNobWVudHMuanMnXG5pbXBvcnQgeyBPZmZzY3JlZW5GcmVlemUgfSBmcm9tICcuL09mZnNjcmVlbkZyZWV6ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFVzZUNvbmZpcm0gfSBmcm9tICcuL3Blcm1pc3Npb25zL1Blcm1pc3Npb25SZXF1ZXN0LmpzJ1xuaW1wb3J0IHsgU3RhdHVzTm90aWNlcyB9IGZyb20gJy4vU3RhdHVzTm90aWNlcy5qcydcbmltcG9ydCB0eXBlIHsgSnVtcEhhbmRsZSB9IGZyb20gJy4vVmlydHVhbE1lc3NhZ2VMaXN0LmpzJ1xuXG4vLyBNZW1vZWQgbG9nbyBoZWFkZXI6IHRoaXMgYm94IGlzIHRoZSBGSVJTVCBzaWJsaW5nIGJlZm9yZSBhbGwgTWVzc2FnZVJvd3Ncbi8vIGluIG1haW4tc2NyZWVuIG1vZGUuIElmIGl0IGJlY29tZXMgZGlydHkgb24gZXZlcnkgTWVzc2FnZXMgcmUtcmVuZGVyLFxuLy8gcmVuZGVyQ2hpbGRyZW4ncyBzZWVuRGlydHlDaGlsZCBjYXNjYWRlIGRpc2FibGVzIHByZXZTY3JlZW4gKGJsaXQpIGZvclxuLy8gQUxMIHN1YnNlcXVlbnQgc2libGluZ3Mg4oCUIGV2ZXJ5IE1lc3NhZ2VSb3cgcmUtd3JpdGVzIGZyb20gc2NyYXRjaCBpbnN0ZWFkXG4vLyBvZiBibGl0dGluZy4gSW4gbG9uZyBzZXNzaW9ucyAofjI4MDAgbWVzc2FnZXMpIHRoaXMgaXMgMTUwSysgd3JpdGVzL2ZyYW1lXG4vLyBhbmQgcGVncyBDUFUgYXQgMTAwJS4gTWVtbyBvbiBhZ2VudERlZmluaXRpb25zIHNvIGEgbmV3IG1lc3NhZ2VzIGFycmF5XG4vLyBkb2Vzbid0IGludmFsaWRhdGUgdGhlIGxvZ28gc3VidHJlZS4gTG9nb1YyL1N0YXR1c05vdGljZXMgaW50ZXJuYWxseVxuLy8gc3Vic2NyaWJlIHRvIHVzZUFwcFN0YXRlL3VzZVNldHRpbmdzIGZvciB0aGVpciBvd24gdXBkYXRlcy5cbmNvbnN0IExvZ29IZWFkZXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIExvZ29IZWFkZXIoe1xuICBhZ2VudERlZmluaXRpb25zLFxufToge1xuICBhZ2VudERlZmluaXRpb25zOiBBZ2VudERlZmluaXRpb25zUmVzdWx0IHwgdW5kZWZpbmVkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gTG9nb1YyIGhhcyBpdHMgb3duIGludGVybmFsIE9mZnNjcmVlbkZyZWV6ZSAoY2F0Y2hlcyBpdHMgdXNlQXBwU3RhdGVcbiAgLy8gcmUtcmVuZGVycykuIFRoaXMgb3V0ZXIgZnJlZXplIGNhdGNoZXMgYWdlbnREZWZpbml0aW9ucyBjaGFuZ2VzIGFuZCBhbnlcbiAgLy8gZnV0dXJlIFN0YXR1c05vdGljZXMgc3Vic2NyaXB0aW9ucyB3aGlsZSB0aGUgaGVhZGVyIGlzIGluIHNjcm9sbGJhY2suXG4gIHJldHVybiAoXG4gICAgPE9mZnNjcmVlbkZyZWV6ZT5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxMb2dvVjIgLz5cbiAgICAgICAgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgICA8U3RhdHVzTm90aWNlcyBhZ2VudERlZmluaXRpb25zPXthZ2VudERlZmluaXRpb25zfSAvPlxuICAgICAgICA8L1JlYWN0LlN1c3BlbnNlPlxuICAgICAgPC9Cb3g+XG4gICAgPC9PZmZzY3JlZW5GcmVlemU+XG4gIClcbn0pXG5cbi8vIERlYWQgY29kZSBlbGltaW5hdGlvbjogY29uZGl0aW9uYWwgaW1wb3J0IGZvciBwcm9hY3RpdmUgbW9kZVxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuY29uc3QgcHJvYWN0aXZlTW9kdWxlID1cbiAgZmVhdHVyZSgnUFJPQUNUSVZFJykgfHwgZmVhdHVyZSgnS0FJUk9TJylcbiAgICA/IHJlcXVpcmUoJy4uL3Byb2FjdGl2ZS9pbmRleC5qcycpXG4gICAgOiBudWxsXG5jb25zdCBCUklFRl9UT09MX05BTUU6IHN0cmluZyB8IG51bGwgPVxuICBmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQlJJRUYnKVxuICAgID8gKFxuICAgICAgICByZXF1aXJlKCcuLi90b29scy9CcmllZlRvb2wvcHJvbXB0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vdG9vbHMvQnJpZWZUb29sL3Byb21wdC5qcycpXG4gICAgICApLkJSSUVGX1RPT0xfTkFNRVxuICAgIDogbnVsbFxuY29uc3QgU0VORF9VU0VSX0ZJTEVfVE9PTF9OQU1FOiBzdHJpbmcgfCBudWxsID0gZmVhdHVyZSgnS0FJUk9TJylcbiAgPyAoXG4gICAgICByZXF1aXJlKCcuLi90b29scy9TZW5kVXNlckZpbGVUb29sL3Byb21wdC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3Rvb2xzL1NlbmRVc2VyRmlsZVRvb2wvcHJvbXB0LmpzJylcbiAgICApLlNFTkRfVVNFUl9GSUxFX1RPT0xfTkFNRVxuICA6IG51bGxcblxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5pbXBvcnQgeyBWaXJ0dWFsTWVzc2FnZUxpc3QgfSBmcm9tICcuL1ZpcnR1YWxNZXNzYWdlTGlzdC5qcydcblxuLyoqXG4gKiBJbiBicmllZi1vbmx5IG1vZGUsIGZpbHRlciBtZXNzYWdlcyB0byBzaG93IE9OTFkgQnJpZWYgdG9vbF91c2UgYmxvY2tzLFxuICogdGhlaXIgdG9vbF9yZXN1bHRzLCBhbmQgcmVhbCB1c2VyIGlucHV0LiBBbGwgYXNzaXN0YW50IHRleHQgaXMgZHJvcHBlZCDigJRcbiAqIGlmIHRoZSBtb2RlbCBmb3JnZXRzIHRvIGNhbGwgQnJpZWYsIHRoZSB1c2VyIHNlZXMgbm90aGluZyBmb3IgdGhhdCB0dXJuLlxuICogVGhhdCdzIG9uIHRoZSBtb2RlbCB0byBnZXQgcmlnaHQ7IHRoZSBmaWx0ZXIgZG9lcyBub3Qgc2Vjb25kLWd1ZXNzIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRm9yQnJpZWZUb29sPFxuICBUIGV4dGVuZHMge1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHN1YnR5cGU/OiBzdHJpbmdcbiAgICBpc01ldGE/OiBib29sZWFuXG4gICAgaXNBcGlFcnJvck1lc3NhZ2U/OiBib29sZWFuXG4gICAgbWVzc2FnZT86IHtcbiAgICAgIGNvbnRlbnQ6IEFycmF5PHtcbiAgICAgICAgdHlwZTogc3RyaW5nXG4gICAgICAgIG5hbWU/OiBzdHJpbmdcbiAgICAgICAgdG9vbF91c2VfaWQ/OiBzdHJpbmdcbiAgICAgIH0+XG4gICAgfVxuICAgIGF0dGFjaG1lbnQ/OiB7XG4gICAgICB0eXBlOiBzdHJpbmdcbiAgICAgIGlzTWV0YT86IGJvb2xlYW5cbiAgICAgIG9yaWdpbj86IHVua25vd25cbiAgICAgIGNvbW1hbmRNb2RlPzogc3RyaW5nXG4gICAgfVxuICB9LFxuPihtZXNzYWdlczogVFtdLCBicmllZlRvb2xOYW1lczogc3RyaW5nW10pOiBUW10ge1xuICBjb25zdCBuYW1lU2V0ID0gbmV3IFNldChicmllZlRvb2xOYW1lcylcbiAgLy8gdG9vbF91c2UgYWx3YXlzIHByZWNlZGVzIGl0cyB0b29sX3Jlc3VsdCBpbiB0aGUgYXJyYXksIHNvIHdlIGNhbiBjb2xsZWN0XG4gIC8vIElEcyBhbmQgbWF0Y2ggYWdhaW5zdCB0aGVtIGluIGEgc2luZ2xlIHBhc3MuXG4gIGNvbnN0IGJyaWVmVG9vbFVzZUlEcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIHJldHVybiBtZXNzYWdlcy5maWx0ZXIobXNnID0+IHtcbiAgICAvLyBTeXN0ZW0gbWVzc2FnZXMgKGF0dGFjaCBjb25maXJtYXRpb24sIHJlbW90ZSBlcnJvcnMsIGNvbXBhY3QgYm91bmRhcmllcylcbiAgICAvLyBtdXN0IHN0YXkgdmlzaWJsZSDigJQgZHJvcHBpbmcgdGhlbSBsZWF2ZXMgdGhlIHZpZXdlciB3aXRoIG5vIGZlZWRiYWNrLlxuICAgIC8vIEV4Y2VwdGlvbjogYXBpX21ldHJpY3MgaXMgcGVyLXR1cm4gZGVidWcgbm9pc2UgKFRURlQsIGNvbmZpZyB3cml0ZXMsXG4gICAgLy8gaG9vayB0aW1pbmcpIHRoYXQgZGVmZWF0cyB0aGUgcG9pbnQgb2YgYnJpZWYgbW9kZS4gU3RpbGwgdmlzaWJsZSBpblxuICAgIC8vIHRyYW5zY3JpcHQgbW9kZSAoY3RybCtvKSB3aGljaCBieXBhc3NlcyB0aGlzIGZpbHRlci5cbiAgICBpZiAobXNnLnR5cGUgPT09ICdzeXN0ZW0nKSByZXR1cm4gbXNnLnN1YnR5cGUgIT09ICdhcGlfbWV0cmljcydcbiAgICBjb25zdCBibG9jayA9IG1zZy5tZXNzYWdlPy5jb250ZW50WzBdXG4gICAgaWYgKG1zZy50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgLy8gQVBJIGVycm9yIG1lc3NhZ2VzIChhdXRoIGZhaWx1cmVzLCByYXRlIGxpbWl0cywgZXRjLikgbXVzdCBzdGF5IHZpc2libGVcbiAgICAgIGlmIChtc2cuaXNBcGlFcnJvck1lc3NhZ2UpIHJldHVybiB0cnVlXG4gICAgICAvLyBLZWVwIEJyaWVmIHRvb2xfdXNlIGJsb2NrcyAocmVuZGVycyB3aXRoIHN0YW5kYXJkIHRvb2wgY2FsbCBjaHJvbWUsXG4gICAgICAvLyBhbmQgbXVzdCBiZSBpbiB0aGUgbGlzdCBzbyBidWlsZE1lc3NhZ2VMb29rdXBzIGNhbiByZXNvbHZlIHRvb2wgcmVzdWx0cylcbiAgICAgIGlmIChibG9jaz8udHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJiBibG9jay5uYW1lICYmIG5hbWVTZXQuaGFzKGJsb2NrLm5hbWUpKSB7XG4gICAgICAgIGlmICgnaWQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgYnJpZWZUb29sVXNlSURzLmFkZCgoYmxvY2sgYXMgeyBpZDogc3RyaW5nIH0pLmlkKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAndXNlcicpIHtcbiAgICAgIGlmIChibG9jaz8udHlwZSA9PT0gJ3Rvb2xfcmVzdWx0Jykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGJsb2NrLnRvb2xfdXNlX2lkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBicmllZlRvb2xVc2VJRHMuaGFzKGJsb2NrLnRvb2xfdXNlX2lkKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICAvLyBSZWFsIHVzZXIgaW5wdXQgb25seSDigJQgZHJvcCBtZXRhL3RpY2sgbWVzc2FnZXMuXG4gICAgICByZXR1cm4gIW1zZy5pc01ldGFcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnYXR0YWNobWVudCcpIHtcbiAgICAgIC8vIEh1bWFuIGlucHV0IGRyYWluZWQgbWlkLXR1cm4gYXJyaXZlcyBhcyBhIHF1ZXVlZF9jb21tYW5kIGF0dGFjaG1lbnRcbiAgICAgIC8vIChxdWVyeS50cyBtaWQtY2hhaW4gZHJhaW4g4oaSIGdldFF1ZXVlZENvbW1hbmRBdHRhY2htZW50cykuIEtlZXAgaXQg4oCUXG4gICAgICAvLyBpdCdzIHdoYXQgdGhlIHVzZXIgdHlwZWQuIGNvbW1hbmRNb2RlID09PSAncHJvbXB0JyBwb3NpdGl2ZWx5XG4gICAgICAvLyBpZGVudGlmaWVzIGh1bWFuLXR5cGVkIGlucHV0OyB0YXNrLW5vdGlmaWNhdGlvbiBjYWxsZXJzIHNldFxuICAgICAgLy8gbW9kZTogJ3Rhc2stbm90aWZpY2F0aW9uJyBidXQgbm90IG9yaWdpbi9pc01ldGEsIHNvIHRoZSBwb3NpdGl2ZVxuICAgICAgLy8gY29tbWFuZE1vZGUgY2hlY2sgaXMgcmVxdWlyZWQgdG8gZXhjbHVkZSB0aGVtLlxuICAgICAgY29uc3QgYXR0ID0gbXNnLmF0dGFjaG1lbnRcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGF0dD8udHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJyAmJlxuICAgICAgICBhdHQuY29tbWFuZE1vZGUgPT09ICdwcm9tcHQnICYmXG4gICAgICAgICFhdHQuaXNNZXRhICYmXG4gICAgICAgIGF0dC5vcmlnaW4gPT09IHVuZGVmaW5lZFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbn1cblxuLyoqXG4gKiBGdWxsLXRyYW5zY3JpcHQgY29tcGFuaW9uIHRvIGZpbHRlckZvckJyaWVmVG9vbC4gV2hlbiB0aGUgQnJpZWYgdG9vbCBpc1xuICogaW4gdXNlLCB0aGUgbW9kZWwncyB0ZXh0IG91dHB1dCBpcyByZWR1bmRhbnQgd2l0aCB0aGUgU2VuZFVzZXJNZXNzYWdlXG4gKiBjb250ZW50IGl0IHdyb3RlIHJpZ2h0IGFmdGVyIOKAlCBkcm9wIHRoZSB0ZXh0IHNvIG9ubHkgdGhlIFNlbmRVc2VyTWVzc2FnZVxuICogYmxvY2sgc2hvd3MuIFRvb2wgY2FsbHMgYW5kIHRoZWlyIHJlc3VsdHMgc3RheSB2aXNpYmxlLlxuICpcbiAqIFBlci10dXJuOiBvbmx5IGRyb3BzIHRleHQgaW4gdHVybnMgdGhhdCBhY3R1YWxseSBjYWxsZWQgQnJpZWYuIElmIHRoZVxuICogbW9kZWwgZm9yZ2V0cywgdGV4dCBzdGlsbCBzaG93cyDigJQgb3RoZXJ3aXNlIHRoZSB1c2VyIHdvdWxkIHNlZSBub3RoaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJvcFRleHRJbkJyaWVmVHVybnM8XG4gIFQgZXh0ZW5kcyB7XG4gICAgdHlwZTogc3RyaW5nXG4gICAgaXNNZXRhPzogYm9vbGVhblxuICAgIG1lc3NhZ2U/OiB7IGNvbnRlbnQ6IEFycmF5PHsgdHlwZTogc3RyaW5nOyBuYW1lPzogc3RyaW5nIH0+IH1cbiAgfSxcbj4obWVzc2FnZXM6IFRbXSwgYnJpZWZUb29sTmFtZXM6IHN0cmluZ1tdKTogVFtdIHtcbiAgY29uc3QgbmFtZVNldCA9IG5ldyBTZXQoYnJpZWZUb29sTmFtZXMpXG4gIC8vIEZpcnN0IHBhc3M6IGZpbmQgd2hpY2ggdHVybnMgKGJvdW5kZWQgYnkgbm9uLW1ldGEgdXNlciBtZXNzYWdlcykgY29udGFpblxuICAvLyBhIEJyaWVmIHRvb2xfdXNlLiBUYWcgZWFjaCBhc3Npc3RhbnQgdGV4dCBibG9jayB3aXRoIGl0cyB0dXJuIGluZGV4LlxuICBjb25zdCB0dXJuc1dpdGhCcmllZiA9IG5ldyBTZXQ8bnVtYmVyPigpXG4gIGNvbnN0IHRleHRJbmRleFRvVHVybjogbnVtYmVyW10gPSBbXVxuICBsZXQgdHVybiA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldIVxuICAgIGNvbnN0IGJsb2NrID0gbXNnLm1lc3NhZ2U/LmNvbnRlbnRbMF1cbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBibG9jaz8udHlwZSAhPT0gJ3Rvb2xfcmVzdWx0JyAmJiAhbXNnLmlzTWV0YSkge1xuICAgICAgdHVybisrXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICBpZiAoYmxvY2s/LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0ZXh0SW5kZXhUb1R1cm5baV0gPSB0dXJuXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBibG9jaz8udHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJlxuICAgICAgICBibG9jay5uYW1lICYmXG4gICAgICAgIG5hbWVTZXQuaGFzKGJsb2NrLm5hbWUpXG4gICAgICApIHtcbiAgICAgICAgdHVybnNXaXRoQnJpZWYuYWRkKHR1cm4pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0dXJuc1dpdGhCcmllZi5zaXplID09PSAwKSByZXR1cm4gbWVzc2FnZXNcbiAgLy8gU2Vjb25kIHBhc3M6IGRyb3AgdGV4dCBibG9ja3Mgd2hvc2UgdHVybiBjYWxsZWQgQnJpZWYuXG4gIHJldHVybiBtZXNzYWdlcy5maWx0ZXIoKF8sIGkpID0+IHtcbiAgICBjb25zdCB0ID0gdGV4dEluZGV4VG9UdXJuW2ldXG4gICAgcmV0dXJuIHQgPT09IHVuZGVmaW5lZCB8fCAhdHVybnNXaXRoQnJpZWYuaGFzKHQpXG4gIH0pXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlVHlwZVtdXG4gIHRvb2xzOiBUb29sc1xuICBjb21tYW5kczogQ29tbWFuZFtdXG4gIHZlcmJvc2U6IGJvb2xlYW5cbiAgdG9vbEpTWDoge1xuICAgIGpzeDogUmVhY3QuUmVhY3ROb2RlIHwgbnVsbFxuICAgIHNob3VsZEhpZGVQcm9tcHRJbnB1dDogYm9vbGVhblxuICAgIHNob3VsZENvbnRpbnVlQW5pbWF0aW9uPzogdHJ1ZVxuICB9IHwgbnVsbFxuICB0b29sVXNlQ29uZmlybVF1ZXVlOiBUb29sVXNlQ29uZmlybVtdXG4gIGluUHJvZ3Jlc3NUb29sVXNlSURzOiBTZXQ8c3RyaW5nPlxuICBpc01lc3NhZ2VTZWxlY3RvclZpc2libGU6IGJvb2xlYW5cbiAgY29udmVyc2F0aW9uSWQ6IHN0cmluZ1xuICBzY3JlZW46IFNjcmVlblxuICBzdHJlYW1pbmdUb29sVXNlczogU3RyZWFtaW5nVG9vbFVzZVtdXG4gIHNob3dBbGxJblRyYW5zY3JpcHQ/OiBib29sZWFuXG4gIGFnZW50RGVmaW5pdGlvbnM/OiBBZ2VudERlZmluaXRpb25zUmVzdWx0XG4gIG9uT3BlblJhdGVMaW1pdE9wdGlvbnM/OiAoKSA9PiB2b2lkXG4gIC8qKiBIaWRlIHRoZSBsb2dvL2hlYWRlciAtIHVzZWQgZm9yIHN1YmFnZW50IHpvb20gdmlldyAqL1xuICBoaWRlTG9nbz86IGJvb2xlYW5cbiAgaXNMb2FkaW5nOiBib29sZWFuXG4gIC8qKiBJbiB0cmFuc2NyaXB0IG1vZGUsIGhpZGUgYWxsIHRoaW5raW5nIGJsb2NrcyBleGNlcHQgdGhlIGxhc3Qgb25lICovXG4gIGhpZGVQYXN0VGhpbmtpbmc/OiBib29sZWFuXG4gIC8qKiBTdHJlYW1pbmcgdGhpbmtpbmcgY29udGVudCAobGl2ZSB1cGRhdGVzLCBub3QgZnJvemVuKSAqL1xuICBzdHJlYW1pbmdUaGlua2luZz86IFN0cmVhbWluZ1RoaW5raW5nIHwgbnVsbFxuICAvKiogU3RyZWFtaW5nIHRleHQgcHJldmlldyAocmVuZGVyZWQgYXMgbGFzdCBpdGVtIHNvIHRyYW5zaXRpb24gdG8gZmluYWwgbWVzc2FnZSBpcyBwb3NpdGlvbmFsbHkgc2VhbWxlc3MpICovXG4gIHN0cmVhbWluZ1RleHQ/OiBzdHJpbmcgfCBudWxsXG4gIC8qKiBXaGVuIHRydWUsIG9ubHkgc2hvdyBCcmllZiB0b29sIG91dHB1dCAoaGlkZSBldmVyeXRoaW5nIGVsc2UpICovXG4gIGlzQnJpZWZPbmx5PzogYm9vbGVhblxuICAvKiogRnVsbHNjcmVlbi1tb2RlIFwi4pSA4pSA4pSAIE4gbmV3IOKUgOKUgOKUgFwiIGRpdmlkZXIuIFJlbmRlcnMgYmVmb3JlIHRoZSBmaXJzdFxuICAgKiAgcmVuZGVyYWJsZU1lc3NhZ2UgZGVyaXZlZCBmcm9tIGZpcnN0VW5zZWVuVXVpZCAobWF0Y2hlZCBieSB0aGUgMjQtY2hhclxuICAgKiAgcHJlZml4IHRoYXQgZGVyaXZlVVVJRCBwcmVzZXJ2ZXMpLiAqL1xuICB1bnNlZW5EaXZpZGVyPzogVW5zZWVuRGl2aWRlclxuICAvKiogRnVsbHNjcmVlbi1tb2RlIFNjcm9sbEJveCBoYW5kbGUuIEVuYWJsZXMgUmVhY3QtbGV2ZWwgdmlydHVhbGl6YXRpb24gd2hlbiBwcmVzZW50LiAqL1xuICBzY3JvbGxSZWY/OiBSZWZPYmplY3Q8U2Nyb2xsQm94SGFuZGxlIHwgbnVsbD5cbiAgLyoqIEZ1bGxzY3JlZW4tbW9kZTogZW5hYmxlIHN0aWNreS1wcm9tcHQgdHJhY2tpbmcgKHdyaXRlcyB2aWEgU2Nyb2xsQ2hyb21lQ29udGV4dCkuICovXG4gIHRyYWNrU3RpY2t5UHJvbXB0PzogYm9vbGVhblxuICAvKiogVHJhbnNjcmlwdCBzZWFyY2g6IGp1bXAtdG8taW5kZXggKyBzZXRTZWFyY2hRdWVyeS9uZXh0TWF0Y2gvcHJldk1hdGNoLiAqL1xuICBqdW1wUmVmPzogUmVmT2JqZWN0PEp1bXBIYW5kbGUgfCBudWxsPlxuICAvKiogVHJhbnNjcmlwdCBzZWFyY2g6IGZpcmVzIHdoZW4gbWF0Y2ggY291bnQvcG9zaXRpb24gY2hhbmdlcy4gKi9cbiAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlPzogKGNvdW50OiBudW1iZXIsIGN1cnJlbnQ6IG51bWJlcikgPT4gdm9pZFxuICAvKiogUGFpbnQgYW4gZXhpc3RpbmcgRE9NIHN1YnRyZWUgdG8gZnJlc2ggU2NyZWVuLCBzY2FuLiBFbGVtZW50IGNvbWVzXG4gICAqICBmcm9tIHRoZSBtYWluIHRyZWUgKGFsbCByZWFsIHByb3ZpZGVycykuIE1lc3NhZ2UtcmVsYXRpdmUgcG9zaXRpb25zLiAqL1xuICBzY2FuRWxlbWVudD86IChcbiAgICBlbDogaW1wb3J0KCcuLi9pbmsvZG9tLmpzJykuRE9NRWxlbWVudCxcbiAgKSA9PiBpbXBvcnQoJy4uL2luay9yZW5kZXItdG8tc2NyZWVuLmpzJykuTWF0Y2hQb3NpdGlvbltdXG4gIC8qKiBQb3NpdGlvbi1iYXNlZCBDVVJSRU5UIGhpZ2hsaWdodC4gcG9zaXRpb25zIHN0YWJsZSAobXNnLXJlbGF0aXZlKSxcbiAgICogIHJvd09mZnNldCB0cmFja3Mgc2Nyb2xsLiBudWxsIGNsZWFycy4gKi9cbiAgc2V0UG9zaXRpb25zPzogKFxuICAgIHN0YXRlOiB7XG4gICAgICBwb3NpdGlvbnM6IGltcG9ydCgnLi4vaW5rL3JlbmRlci10by1zY3JlZW4uanMnKS5NYXRjaFBvc2l0aW9uW11cbiAgICAgIHJvd09mZnNldDogbnVtYmVyXG4gICAgICBjdXJyZW50SWR4OiBudW1iZXJcbiAgICB9IHwgbnVsbCxcbiAgKSA9PiB2b2lkXG4gIC8qKiBCeXBhc3MgTUFYX01FU1NBR0VTX1dJVEhPVVRfVklSVFVBTElaQVRJT04uIEZvciBvbmUtc2hvdCBoZWFkbGVzcyByZW5kZXJzXG4gICAqICAoZS5nLiAvZXhwb3J0IHZpYSByZW5kZXJUb1N0cmluZykgd2hlcmUgdGhlIG1lbW9yeSBjb25jZXJuIGRvZXNuJ3QgYXBwbHlcbiAgICogIGFuZCB0aGUgXCJhbHJlYWR5IGluIHNjcm9sbGJhY2tcIiBqdXN0aWZpY2F0aW9uIGRvZXNuJ3QgaG9sZC4gKi9cbiAgZGlzYWJsZVJlbmRlckNhcD86IGJvb2xlYW5cbiAgLyoqIEluLXRyYW5zY3JpcHQgY3Vyc29yOyBleHBhbmRlZCBvdmVycmlkZXMgdmVyYm9zZSBmb3Igc2VsZWN0ZWQgbWVzc2FnZS4gKi9cbiAgY3Vyc29yPzogTWVzc2FnZUFjdGlvbnNTdGF0ZSB8IG51bGxcbiAgc2V0Q3Vyc29yPzogKGN1cnNvcjogTWVzc2FnZUFjdGlvbnNTdGF0ZSB8IG51bGwpID0+IHZvaWRcbiAgLyoqIFBhc3NlZCB0aHJvdWdoIHRvIFZpcnR1YWxNZXNzYWdlTGlzdCAoaGVpZ2h0Q2FjaGUgb3ducyB2aXNpYmlsaXR5KS4gKi9cbiAgY3Vyc29yTmF2UmVmPzogUmVhY3QuUmVmPE1lc3NhZ2VBY3Rpb25zTmF2PlxuICAvKiogUmVuZGVyIG9ubHkgY29sbGFwc2VkLnNsaWNlKHN0YXJ0LCBlbmQpLiBGb3IgY2h1bmtlZCBoZWFkbGVzcyBleHBvcnRcbiAgICogIChzdHJlYW1SZW5kZXJlZE1lc3NhZ2VzIGluIGV4cG9ydFJlbmRlcmVyLnRzeCk6IHByZXAgcnVucyBvbiB0aGUgRlVMTFxuICAgKiAgbWVzc2FnZXMgYXJyYXkgc28gZ3JvdXBpbmcvbG9va3VwcyBhcmUgY29ycmVjdCwgYnV0IG9ubHkgdGhpcyBzbGljZVxuICAgKiAgY2h1bmsgaW5zdGVhZCBvZiB0aGUgZnVsbCBzZXNzaW9uLiBUaGUgbG9nbyByZW5kZXJzIG9ubHkgZm9yIGNodW5rIDBcbiAgICogIChzdGFydCA9PT0gMCk7IGxhdGVyIGNodW5rcyBhcmUgbWlkLXN0cmVhbSBjb250aW51YXRpb25zLlxuICAgKiAgTWVhc3VyZWQgTWFyIDIwMjY6IDUzOC1tc2cgc2Vzc2lvbiwgMjAgc2xpY2VzIOKGkiDiiJI1NSUgcGxhdGVhdSBSU1MuICovXG4gIHJlbmRlclJhbmdlPzogcmVhZG9ubHkgW3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyXVxufVxuXG5jb25zdCBNQVhfTUVTU0FHRVNfVE9fU0hPV19JTl9UUkFOU0NSSVBUX01PREUgPSAzMFxuXG4vLyBTYWZldHkgY2FwIGZvciB0aGUgbm9uLXZpcnR1YWxpemVkIHJlbmRlciBwYXRoIChmdWxsc2NyZWVuIG9mZiBvclxuLy8gZXhwbGljaXRseSBkaXNhYmxlZCkuIEluayBtb3VudHMgYSBmdWxsIGZpYmVyIHRyZWUgcGVyIG1lc3NhZ2UgKH4yNTAgS0Jcbi8vIFJTUyBlYWNoKTsgeW9nYSBsYXlvdXQgaGVpZ2h0IGdyb3dzIHVuYm91bmRlZDsgdGhlIHNjcmVlbiBidWZmZXIgaXMgc2l6ZWRcbi8vIHRvIGZpdCBldmVyeSBsaW5lLiBBdCB+MjAwMCBtZXNzYWdlcyB0aGlzIGlzIH4zMDAwLWxpbmUgc2NyZWVucywgfjUwMCBNQlxuLy8gb2YgZmliZXJzLCBhbmQgcGVyLWZyYW1lIHdyaXRlIGNvc3RzIHRoYXQgcHVzaCB0aGUgcHJvY2VzcyBpbnRvIGEgR0Ncbi8vIGRlYXRoIHNwaXJhbCAob2JzZXJ2ZWQ6IDU5IEdCIFJTUywgMTRrIG1tYXAvbXVubWFwL3NlYykuIENvbnRlbnQgZHJvcHBlZFxuLy8gZnJvbSB0aGlzIHNsaWNlIGhhcyBhbHJlYWR5IGJlZW4gcHJpbnRlZCB0byB0ZXJtaW5hbCBzY3JvbGxiYWNrIOKAlCB1c2Vyc1xuLy8gY2FuIHN0aWxsIHNjcm9sbCB1cCBuYXRpdmVseS4gVmlydHVhbE1lc3NhZ2VMaXN0ICh0aGUgZGVmYXVsdCBhbnQgcGF0aClcbi8vIGJ5cGFzc2VzIHRoaXMgY2FwIGVudGlyZWx5LiBIZWFkbGVzcyBvbmUtc2hvdCByZW5kZXJzIChlLmcuIC9leHBvcnQpXG4vLyBwYXNzIGRpc2FibGVSZW5kZXJDYXAgdG8gb3B0IG91dCDigJQgdGhleSBoYXZlIG5vIHNjcm9sbGJhY2sgYW5kIHRoZVxuLy8gbWVtb3J5IGNvbmNlcm4gZG9lc24ndCBhcHBseSB0byByZW5kZXJUb1N0cmluZy5cbi8vXG4vLyBUaGUgc2xpY2UgYm91bmRhcnkgaXMgdHJhY2tlZCBhcyBhIFVVSUQgYW5jaG9yLCBub3QgYSBjb3VudC1kZXJpdmVkXG4vLyBpbmRleC4gQ291bnQtYmFzZWQgc2xpY2luZyAoc2xpY2UoLTIwMCkpIGRyb3BzIG9uZSBtZXNzYWdlIGZyb20gdGhlXG4vLyBmcm9udCBvbiBldmVyeSBhcHBlbmQsIHNoaWZ0aW5nIHNjcm9sbGJhY2sgY29udGVudCBhbmQgZm9yY2luZyBhIGZ1bGxcbi8vIHRlcm1pbmFsIHJlc2V0IHBlciB0dXJuIChDQy05NDEpLiBRdWFudGl6aW5nIHRvIDUwLW1lc3NhZ2Ugc3RlcHNcbi8vIChDQy0xMTU0KSBoZWxwZWQgYnV0IHN0aWxsIHNoaWZ0ZWQgb24gY29tcGFjdGlvbiBhbmQgY29sbGFwc2UgcmVncm91cGluZ1xuLy8gc2luY2UgdGhvc2UgY2hhbmdlIGNvbGxhcHNlZC5sZW5ndGggd2l0aG91dCBhZGRpbmcgbWVzc2FnZXMuIFRoZSBVVUlEXG4vLyBhbmNob3Igb25seSBhZHZhbmNlcyB3aGVuIHJlbmRlcmVkIGNvdW50IGdlbnVpbmVseSBleGNlZWRzIENBUCtTVEVQIOKAlFxuLy8gaW1tdW5lIHRvIGxlbmd0aCBjaHVybiBmcm9tIGdyb3VwaW5nL2NvbXBhY3Rpb24gKENDLTExNzQpLlxuLy9cbi8vIFRoZSBhbmNob3Igc3RvcmVzIEJPVEggdXVpZCBhbmQgaW5kZXguIFNvbWUgdXVpZHMgYXJlIHVuc3RhYmxlIGJldHdlZW5cbi8vIHJlbmRlcnM6IGNvbGxhcHNlSG9va1N1bW1hcmllcyBkZXJpdmVzIHRoZSBtZXJnZWQgdXVpZCBmcm9tIHRoZSBmaXJzdFxuLy8gc3VtbWFyeSBpbiBhIGdyb3VwLCBidXQgcmVvcmRlck1lc3NhZ2VzSW5VSSByZXNodWZmbGVzIGhvb2sgYWRqYWNlbmN5XG4vLyBhcyB0b29sIHJlc3VsdHMgc3RyZWFtIGluLCBjaGFuZ2luZyB3aGljaCBzdW1tYXJ5IGlzIGZpcnN0LiBXaGVuIHRoZVxuLy8gdXVpZCB2YW5pc2hlcywgZmFsbGluZyBiYWNrIHRvIHRoZSBzdG9yZWQgaW5kZXggKGNsYW1wZWQpIGtlZXBzIHRoZVxuLy8gc2xpY2Ugcm91Z2hseSB3aGVyZSBpdCB3YXMgaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gMCDigJQgd2hpY2ggd291bGRcbi8vIGp1bXAgZnJvbSB+MjAwIHJlbmRlcmVkIG1lc3NhZ2VzIHRvIHRoZSBmdWxsIGhpc3RvcnksIG9ycGhhbmluZ1xuLy8gaW4tcHJvZ3Jlc3MgYmFkZ2Ugc25hcHNob3RzIGluIHNjcm9sbGJhY2suXG5jb25zdCBNQVhfTUVTU0FHRVNfV0lUSE9VVF9WSVJUVUFMSVpBVElPTiA9IDIwMFxuY29uc3QgTUVTU0FHRV9DQVBfU1RFUCA9IDUwXG5cbmV4cG9ydCB0eXBlIFNsaWNlQW5jaG9yID0geyB1dWlkOiBzdHJpbmc7IGlkeDogbnVtYmVyIH0gfCBudWxsXG5cbi8qKiBFeHBvcnRlZCBmb3IgdGVzdGluZy4gTXV0YXRlcyBhbmNob3JSZWYgd2hlbiB0aGUgd2luZG93IG5lZWRzIHRvIGFkdmFuY2UuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVNsaWNlU3RhcnQoXG4gIGNvbGxhcHNlZDogUmVhZG9ubHlBcnJheTx7IHV1aWQ6IHN0cmluZyB9PixcbiAgYW5jaG9yUmVmOiB7IGN1cnJlbnQ6IFNsaWNlQW5jaG9yIH0sXG4gIGNhcCA9IE1BWF9NRVNTQUdFU19XSVRIT1VUX1ZJUlRVQUxJWkFUSU9OLFxuICBzdGVwID0gTUVTU0FHRV9DQVBfU1RFUCxcbik6IG51bWJlciB7XG4gIGNvbnN0IGFuY2hvciA9IGFuY2hvclJlZi5jdXJyZW50XG4gIGNvbnN0IGFuY2hvcklkeCA9IGFuY2hvclxuICAgID8gY29sbGFwc2VkLmZpbmRJbmRleChtID0+IG0udXVpZCA9PT0gYW5jaG9yLnV1aWQpXG4gICAgOiAtMVxuICAvLyBBbmNob3IgZm91bmQg4oaSIHVzZSBpdC4gQW5jaG9yIGxvc3Qg4oaSIGZhbGwgYmFjayB0byBzdG9yZWQgaW5kZXhcbiAgLy8gKGNsYW1wZWQpIHNvIGNvbGxhcHNlLXJlZ3JvdXBpbmcgdXVpZCBjaHVybiBkb2Vzbid0IHJlc2V0IHRvIDAuXG4gIGxldCBzdGFydCA9XG4gICAgYW5jaG9ySWR4ID49IDBcbiAgICAgID8gYW5jaG9ySWR4XG4gICAgICA6IGFuY2hvclxuICAgICAgICA/IE1hdGgubWluKGFuY2hvci5pZHgsIE1hdGgubWF4KDAsIGNvbGxhcHNlZC5sZW5ndGggLSBjYXApKVxuICAgICAgICA6IDBcbiAgaWYgKGNvbGxhcHNlZC5sZW5ndGggLSBzdGFydCA+IGNhcCArIHN0ZXApIHtcbiAgICBzdGFydCA9IGNvbGxhcHNlZC5sZW5ndGggLSBjYXBcbiAgfVxuICAvLyBSZWZyZXNoIGFuY2hvciBmcm9tIHdoYXRldmVyIGxpdmVzIGF0IHRoZSBjdXJyZW50IHN0YXJ0IOKAlCBoZWFscyBhXG4gIC8vIHN0YWxlIHV1aWQgYWZ0ZXIgZmFsbGJhY2sgYW5kIGNhcHR1cmVzIGEgbmV3IG9uZSBhZnRlciBhZHZhbmNlbWVudC5cbiAgY29uc3QgbXNnQXRTdGFydCA9IGNvbGxhcHNlZFtzdGFydF1cbiAgaWYgKFxuICAgIG1zZ0F0U3RhcnQgJiZcbiAgICAoYW5jaG9yPy51dWlkICE9PSBtc2dBdFN0YXJ0LnV1aWQgfHwgYW5jaG9yLmlkeCAhPT0gc3RhcnQpXG4gICkge1xuICAgIGFuY2hvclJlZi5jdXJyZW50ID0geyB1dWlkOiBtc2dBdFN0YXJ0LnV1aWQsIGlkeDogc3RhcnQgfVxuICB9IGVsc2UgaWYgKCFtc2dBdFN0YXJ0ICYmIGFuY2hvcikge1xuICAgIGFuY2hvclJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiBzdGFydFxufVxuXG5jb25zdCBNZXNzYWdlc0ltcGwgPSAoe1xuICBtZXNzYWdlcyxcbiAgdG9vbHMsXG4gIGNvbW1hbmRzLFxuICB2ZXJib3NlLFxuICB0b29sSlNYLFxuICB0b29sVXNlQ29uZmlybVF1ZXVlLFxuICBpblByb2dyZXNzVG9vbFVzZUlEcyxcbiAgaXNNZXNzYWdlU2VsZWN0b3JWaXNpYmxlLFxuICBjb252ZXJzYXRpb25JZCxcbiAgc2NyZWVuLFxuICBzdHJlYW1pbmdUb29sVXNlcyxcbiAgc2hvd0FsbEluVHJhbnNjcmlwdCA9IGZhbHNlLFxuICBhZ2VudERlZmluaXRpb25zLFxuICBvbk9wZW5SYXRlTGltaXRPcHRpb25zLFxuICBoaWRlTG9nbyA9IGZhbHNlLFxuICBpc0xvYWRpbmcsXG4gIGhpZGVQYXN0VGhpbmtpbmcgPSBmYWxzZSxcbiAgc3RyZWFtaW5nVGhpbmtpbmcsXG4gIHN0cmVhbWluZ1RleHQsXG4gIGlzQnJpZWZPbmx5ID0gZmFsc2UsXG4gIHVuc2VlbkRpdmlkZXIsXG4gIHNjcm9sbFJlZixcbiAgdHJhY2tTdGlja3lQcm9tcHQsXG4gIGp1bXBSZWYsXG4gIG9uU2VhcmNoTWF0Y2hlc0NoYW5nZSxcbiAgc2NhbkVsZW1lbnQsXG4gIHNldFBvc2l0aW9ucyxcbiAgZGlzYWJsZVJlbmRlckNhcCA9IGZhbHNlLFxuICBjdXJzb3IgPSBudWxsLFxuICBzZXRDdXJzb3IsXG4gIGN1cnNvck5hdlJlZixcbiAgcmVuZGVyUmFuZ2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgdG9nZ2xlU2hvd0FsbFNob3J0Y3V0ID0gdXNlU2hvcnRjdXREaXNwbGF5KFxuICAgICd0cmFuc2NyaXB0OnRvZ2dsZVNob3dBbGwnLFxuICAgICdUcmFuc2NyaXB0JyxcbiAgICAnQ3RybCtFJyxcbiAgKVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWRNZXNzYWdlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbm9ybWFsaXplTWVzc2FnZXMobWVzc2FnZXMpLmZpbHRlcihpc05vdEVtcHR5TWVzc2FnZSksXG4gICAgW21lc3NhZ2VzXSxcbiAgKVxuXG4gIC8vIENoZWNrIGlmIHN0cmVhbWluZyB0aGlua2luZyBzaG91bGQgYmUgdmlzaWJsZSAoc3RyZWFtaW5nIG9yIHdpdGhpbiAzMHMgdGltZW91dClcbiAgY29uc3QgaXNTdHJlYW1pbmdUaGlua2luZ1Zpc2libGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXN0cmVhbWluZ1RoaW5raW5nKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoc3RyZWFtaW5nVGhpbmtpbmcuaXNTdHJlYW1pbmcpIHJldHVybiB0cnVlXG4gICAgaWYgKHN0cmVhbWluZ1RoaW5raW5nLnN0cmVhbWluZ0VuZGVkQXQpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gc3RyZWFtaW5nVGhpbmtpbmcuc3RyZWFtaW5nRW5kZWRBdCA8IDMwMDAwXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9LCBbc3RyZWFtaW5nVGhpbmtpbmddKVxuXG4gIC8vIEZpbmQgdGhlIGxhc3QgdGhpbmtpbmcgYmxvY2sgKG1lc3NhZ2UgVVVJRCArIGNvbnRlbnQgaW5kZXgpIGZvciBoaWRpbmcgcGFzdCB0aGlua2luZyBpbiB0cmFuc2NyaXB0IG1vZGVcbiAgLy8gV2hlbiBzdHJlYW1pbmcgdGhpbmtpbmcgaXMgdmlzaWJsZSwgdXNlIGEgc3BlY2lhbCBJRCB0aGF0IHdvbid0IG1hdGNoIGFueSBjb21wbGV0ZWQgdGhpbmtpbmcgYmxvY2tcbiAgLy8gV2l0aCBhZGFwdGl2ZSB0aGlua2luZywgb25seSBjb25zaWRlciB0aGlua2luZyBibG9ja3MgZnJvbSB0aGUgY3VycmVudCB0dXJuIGFuZCBzdG9wIHNlYXJjaGluZyBvbmNlIHdlXG4gIC8vIGhpdCB0aGUgbGFzdCB1c2VyIG1lc3NhZ2UuXG4gIGNvbnN0IGxhc3RUaGlua2luZ0Jsb2NrSWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWhpZGVQYXN0VGhpbmtpbmcpIHJldHVybiBudWxsXG4gICAgLy8gSWYgc3RyZWFtaW5nIHRoaW5raW5nIGlzIHZpc2libGUsIGhpZGUgYWxsIGNvbXBsZXRlZCB0aGlua2luZyBibG9ja3MgYnkgdXNpbmcgYSBub24tbWF0Y2hpbmcgSURcbiAgICBpZiAoaXNTdHJlYW1pbmdUaGlua2luZ1Zpc2libGUpIHJldHVybiAnc3RyZWFtaW5nJ1xuICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzIHRvIGZpbmQgdGhlIGxhc3QgbWVzc2FnZSB3aXRoIGEgdGhpbmtpbmcgYmxvY2tcbiAgICBmb3IgKGxldCBpID0gbm9ybWFsaXplZE1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBtc2cgPSBub3JtYWxpemVkTWVzc2FnZXNbaV1cbiAgICAgIGlmIChtc2c/LnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhc3QgdGhpbmtpbmcgYmxvY2sgaW4gdGhpcyBtZXNzYWdlXG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZW50Lmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgaWYgKGNvbnRlbnRbal0/LnR5cGUgPT09ICd0aGlua2luZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHttc2cudXVpZH06JHtqfWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobXNnPy50eXBlID09PSAndXNlcicpIHtcbiAgICAgICAgY29uc3QgaGFzVG9vbFJlc3VsdCA9IG1zZy5tZXNzYWdlLmNvbnRlbnQuc29tZShcbiAgICAgICAgICBibG9jayA9PiBibG9jay50eXBlID09PSAndG9vbF9yZXN1bHQnLFxuICAgICAgICApXG4gICAgICAgIGlmICghaGFzVG9vbFJlc3VsdCkge1xuICAgICAgICAgIC8vIFJlYWNoZWQgYSBwcmV2aW91cyB1c2VyIHR1cm4gc28gZG9uJ3Qgc2hvdyBzdGFsZSB0aGlua2luZyBmcm9tIGJlZm9yZVxuICAgICAgICAgIHJldHVybiAnbm8tdGhpbmtpbmcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSwgW25vcm1hbGl6ZWRNZXNzYWdlcywgaGlkZVBhc3RUaGlua2luZywgaXNTdHJlYW1pbmdUaGlua2luZ1Zpc2libGVdKVxuXG4gIC8vIEZpbmQgdGhlIGxhdGVzdCB1c2VyIGJhc2ggb3V0cHV0IG1lc3NhZ2UgKGZyb20gISBjb21tYW5kcylcbiAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gc2hvdyBmdWxsIG91dHB1dCBmb3IgdGhlIG1vc3QgcmVjZW50IGJhc2ggY29tbWFuZFxuICBjb25zdCBsYXRlc3RCYXNoT3V0cHV0VVVJRCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzIHRvIGZpbmQgdGhlIGxhc3QgdXNlciBtZXNzYWdlIHdpdGggYmFzaCBvdXRwdXRcbiAgICBmb3IgKGxldCBpID0gbm9ybWFsaXplZE1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBtc2cgPSBub3JtYWxpemVkTWVzc2FnZXNbaV1cbiAgICAgIGlmIChtc2c/LnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgdGV4dCBjb250ZW50IGlzIGJhc2ggb3V0cHV0XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBibG9jay50ZXh0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRleHQuc3RhcnRzV2l0aCgnPGJhc2gtc3Rkb3V0JykgfHxcbiAgICAgICAgICAgICAgdGV4dC5zdGFydHNXaXRoKCc8YmFzaC1zdGRlcnInKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2cudXVpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9LCBbbm9ybWFsaXplZE1lc3NhZ2VzXSlcblxuICAvLyBzdHJlYW1pbmdUb29sVXNlcyB1cGRhdGVzIG9uIGV2ZXJ5IGlucHV0X2pzb25fZGVsdGEgd2hpbGUgbm9ybWFsaXplZE1lc3NhZ2VzXG4gIC8vIHN0YXlzIHN0YWJsZSDigJQgcHJlY29tcHV0ZSB0aGUgU2V0IHNvIHRoZSBmaWx0ZXIgaXMgTyhrKSBub3QgTyhuw5drKSBwZXIgY2h1bmsuXG4gIGNvbnN0IG5vcm1hbGl6ZWRUb29sVXNlSURzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRUb29sVXNlSURzKG5vcm1hbGl6ZWRNZXNzYWdlcyksXG4gICAgW25vcm1hbGl6ZWRNZXNzYWdlc10sXG4gIClcblxuICBjb25zdCBzdHJlYW1pbmdUb29sVXNlc1dpdGhvdXRJblByb2dyZXNzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgc3RyZWFtaW5nVG9vbFVzZXMuZmlsdGVyKFxuICAgICAgICBzdHUgPT5cbiAgICAgICAgICAhaW5Qcm9ncmVzc1Rvb2xVc2VJRHMuaGFzKHN0dS5jb250ZW50QmxvY2suaWQpICYmXG4gICAgICAgICAgIW5vcm1hbGl6ZWRUb29sVXNlSURzLmhhcyhzdHUuY29udGVudEJsb2NrLmlkKSxcbiAgICAgICksXG4gICAgW3N0cmVhbWluZ1Rvb2xVc2VzLCBpblByb2dyZXNzVG9vbFVzZUlEcywgbm9ybWFsaXplZFRvb2xVc2VJRHNdLFxuICApXG5cbiAgY29uc3Qgc3ludGhldGljU3RyZWFtaW5nVG9vbFVzZU1lc3NhZ2VzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgc3RyZWFtaW5nVG9vbFVzZXNXaXRob3V0SW5Qcm9ncmVzcy5mbGF0TWFwKHN0cmVhbWluZ1Rvb2xVc2UgPT4ge1xuICAgICAgICBjb25zdCBtc2cgPSBjcmVhdGVBc3Npc3RhbnRNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBbc3RyZWFtaW5nVG9vbFVzZS5jb250ZW50QmxvY2tdLFxuICAgICAgICB9KVxuICAgICAgICAvLyBPdmVycmlkZSByYW5kb21VVUlEIHdpdGggZGV0ZXJtaW5pc3RpYyB2YWx1ZSBkZXJpdmVkIGZyb20gY29udGVudFxuICAgICAgICAvLyBibG9jayBJRCB0byBwcmV2ZW50IFJlYWN0IGtleSBjaGFuZ2VzIG9uIGV2ZXJ5IG1lbW8gcmVjb21wdXRhdGlvbi5cbiAgICAgICAgLy8gU2FtZSBjbGFzcyBvZiBidWcgZml4ZWQgaW4gbm9ybWFsaXplTWVzc2FnZXMgKGNvbW1pdCAzODMzMjZlNjEzKTpcbiAgICAgICAgLy8gZnJlc2ggcmFuZG9tVVVJRCDihpIgdW5zdGFibGUgUmVhY3Qga2V5cyDihpIgY29tcG9uZW50IHJlbW91bnRzIOKGklxuICAgICAgICAvLyBJbmsgcmVuZGVyaW5nIGNvcnJ1cHRpb24gKG92ZXJsYXBwaW5nIHRleHQgZnJvbSBzdGFsZSBET00gbm9kZXMpLlxuICAgICAgICBtc2cudXVpZCA9IGRlcml2ZVVVSUQoc3RyZWFtaW5nVG9vbFVzZS5jb250ZW50QmxvY2suaWQgYXMgVVVJRCwgMClcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZU1lc3NhZ2VzKFttc2ddKVxuICAgICAgfSksXG4gICAgW3N0cmVhbWluZ1Rvb2xVc2VzV2l0aG91dEluUHJvZ3Jlc3NdLFxuICApXG5cbiAgY29uc3QgaXNUcmFuc2NyaXB0TW9kZSA9IHNjcmVlbiA9PT0gJ3RyYW5zY3JpcHQnXG4gIC8vIEhvaXN0ZWQgdG8gbW91bnQtdGltZSDigJQgdGhpcyBjb21wb25lbnQgcmUtcmVuZGVycyBvbiBldmVyeSBzY3JvbGwuXG4gIGNvbnN0IGRpc2FibGVWaXJ0dWFsU2Nyb2xsID0gdXNlTWVtbyhcbiAgICAoKSA9PiBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9ESVNBQkxFX1ZJUlRVQUxfU0NST0xMKSxcbiAgICBbXSxcbiAgKVxuICAvLyBWaXJ0dWFsIHNjcm9sbCByZXBsYWNlcyB0aGUgdHJhbnNjcmlwdCBjYXA6IGV2ZXJ5dGhpbmcgaXMgc2Nyb2xsYWJsZSBhbmRcbiAgLy8gbWVtb3J5IGlzIGJvdW5kZWQgYnkgdGhlIG1vdW50ZWQtaXRlbSBjb3VudCwgbm90IHRoZSB0b3RhbC4gc2Nyb2xsUmVmIGlzXG4gIC8vIG9ubHkgcGFzc2VkIHdoZW4gaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpIGlzIHRydWUgKFJFUEwudHN4IGdhdGVzIGl0KSxcbiAgLy8gc28gc2Nyb2xsUmVmJ3MgcHJlc2VuY2UgaXMgdGhlIHNpZ25hbC5cbiAgY29uc3QgdmlydHVhbFNjcm9sbFJ1bnRpbWVHYXRlID0gc2Nyb2xsUmVmICE9IG51bGwgJiYgIWRpc2FibGVWaXJ0dWFsU2Nyb2xsXG4gIGNvbnN0IHNob3VsZFRydW5jYXRlID1cbiAgICBpc1RyYW5zY3JpcHRNb2RlICYmICFzaG93QWxsSW5UcmFuc2NyaXB0ICYmICF2aXJ0dWFsU2Nyb2xsUnVudGltZUdhdGVcblxuICAvLyBBbmNob3IgZm9yIHRoZSBmaXJzdCByZW5kZXJlZCBtZXNzYWdlIGluIHRoZSBub24tdmlydHVhbGl6ZWQgY2FwIHNsaWNlLlxuICAvLyBNb25vdG9uaWMgYWR2YW5jZSBvbmx5IOKAlCBtdXRhdGlvbiBkdXJpbmcgcmVuZGVyIGlzIGlkZW1wb3RlbnQgKHNhZmVcbiAgLy8gdW5kZXIgU3RyaWN0TW9kZSBkb3VibGUtcmVuZGVyKS4gU2VlIE1BWF9NRVNTQUdFU19XSVRIT1VUX1ZJUlRVQUxJWkFUSU9OXG4gIC8vIGNvbW1lbnQgYWJvdmUgZm9yIHdoeSB0aGlzIHJlcGxhY2VkIGNvdW50LWJhc2VkIHNsaWNpbmcuXG4gIGNvbnN0IHNsaWNlQW5jaG9yUmVmID0gdXNlUmVmPFNsaWNlQW5jaG9yPihudWxsKVxuXG4gIC8vIEV4cGVuc2l2ZSBtZXNzYWdlIHRyYW5zZm9ybXMg4oCUIGZpbHRlciwgcmVvcmRlciwgZ3JvdXAsIGNvbGxhcHNlLCBsb29rdXBzLlxuICAvLyBBbGwgTyhuKSBvdmVyIDI3ayBtZXNzYWdlcy4gU3BsaXQgZnJvbSB0aGUgcmVuZGVyUmFuZ2Ugc2xpY2Ugc28gc2Nyb2xsaW5nXG4gIC8vICh3aGljaCBvbmx5IGNoYW5nZXMgcmVuZGVyUmFuZ2UpIGRvZXNuJ3QgcmUtcnVuIHRoZXNlLiBQcmV2aW91c2x5IHRoaXNcbiAgLy8gdXNlTWVtbyBpbmNsdWRlZCByZW5kZXJSYW5nZSDihpIgZXZlcnkgc2Nyb2xsIHJlYnVpbHQgNiBNYXBzIG92ZXIgMjdrXG4gIC8vIG1lc3NhZ2VzICsgNCBmaWx0ZXIvbWFwIHBhc3NlcyA9IH41MG1zIGFsbG9jIHBlciBzY3JvbGwg4oaSIEdDIHByZXNzdXJlIOKGklxuICAvLyAxMDAtMTczbXMgc3RvcC10aGUtd29ybGQgcGF1c2VzIG9uIHRoZSAxR0IgaGVhcC5cbiAgY29uc3QgeyBjb2xsYXBzZWQsIGxvb2t1cHMsIGhhc1RydW5jYXRlZE1lc3NhZ2VzLCBoaWRkZW5NZXNzYWdlQ291bnQgfSA9XG4gICAgdXNlTWVtbygoKSA9PiB7XG4gICAgICAvLyBJbiBmdWxsc2NyZWVuIG1vZGUgdGhlIGFsdCBidWZmZXIgaGFzIG5vIG5hdGl2ZSBzY3JvbGxiYWNrLCBzbyB0aGVcbiAgICAgIC8vIGNvbXBhY3QtYm91bmRhcnkgZmlsdGVyIGp1c3QgaGlkZXMgaGlzdG9yeSB0aGUgU2Nyb2xsQm94IGNvdWxkXG4gICAgICAvLyBvdGhlcndpc2Ugc2Nyb2xsIHRvLiBNYWluLXNjcmVlbiBtb2RlIGtlZXBzIHRoZSBmaWx0ZXIg4oCUIHByZS1jb21wYWN0XG4gICAgICAvLyByb3dzIGxpdmUgYWJvdmUgdGhlIHZpZXdwb3J0IGluIG5hdGl2ZSBzY3JvbGxiYWNrIHRoZXJlLCBhbmRcbiAgICAgIC8vIHJlLXJlbmRlcmluZyB0aGVtIHRyaWdnZXJzIGZ1bGwgcmVzZXRzLlxuICAgICAgLy8gaW5jbHVkZVNuaXBwZWQ6IFVJIHJlbmRlcmluZyBrZWVwcyBzbmlwcGVkIG1lc3NhZ2VzIGZvciBzY3JvbGxiYWNrXG4gICAgICAvLyAodGhpcyBQUidzIGNvcmUgZ29hbCDigJQgZnVsbCBoaXN0b3J5IGluIFVJLCBmaWx0ZXIgb25seSBmb3IgdGhlIG1vZGVsKS5cbiAgICAgIC8vIEFsc28gYXZvaWRzIGEgVVVJRCBtaXNtYXRjaDogbm9ybWFsaXplTWVzc2FnZXMgZGVyaXZlcyBuZXcgVVVJRHMsIHNvXG4gICAgICAvLyBwcm9qZWN0U25pcHBlZFZpZXcncyBjaGVjayBhZ2FpbnN0IG9yaWdpbmFsIHJlbW92ZWRVdWlkcyB3b3VsZCBmYWlsLlxuICAgICAgY29uc3QgY29tcGFjdEF3YXJlTWVzc2FnZXMgPVxuICAgICAgICB2ZXJib3NlIHx8IGlzRnVsbHNjcmVlbkVudkVuYWJsZWQoKVxuICAgICAgICAgID8gbm9ybWFsaXplZE1lc3NhZ2VzXG4gICAgICAgICAgOiBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5KG5vcm1hbGl6ZWRNZXNzYWdlcywge1xuICAgICAgICAgICAgICBpbmNsdWRlU25pcHBlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzVG9TaG93Tm90VHJ1bmNhdGVkID0gcmVvcmRlck1lc3NhZ2VzSW5VSShcbiAgICAgICAgY29tcGFjdEF3YXJlTWVzc2FnZXNcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgKG1zZyk6IG1zZyBpcyBFeGNsdWRlPE5vcm1hbGl6ZWRNZXNzYWdlLCBQcm9ncmVzc01lc3NhZ2VUeXBlPiA9PlxuICAgICAgICAgICAgICBtc2cudHlwZSAhPT0gJ3Byb2dyZXNzJyxcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gQ0MtNzI0OiBkcm9wIGF0dGFjaG1lbnQgbWVzc2FnZXMgdGhhdCBBdHRhY2htZW50TWVzc2FnZSByZW5kZXJzIGFzXG4gICAgICAgICAgLy8gbnVsbCAoaG9va19zdWNjZXNzLCBob29rX2FkZGl0aW9uYWxfY29udGV4dCwgaG9va19jYW5jZWxsZWQsIGV0Yy4pXG4gICAgICAgICAgLy8gQkVGT1JFIGNvdW50aW5nL3NsaWNpbmcgc28gdGhleSBkb24ndCBpbmZsYXRlIHRoZSBcIk4gbWVzc2FnZXNcIlxuICAgICAgICAgIC8vIGNvdW50IGluIGN0cmwtbyBvciBjb25zdW1lIHNsb3RzIGluIHRoZSAyMDAtbWVzc2FnZSByZW5kZXIgY2FwLlxuICAgICAgICAgIC5maWx0ZXIobXNnID0+ICFpc051bGxSZW5kZXJpbmdBdHRhY2htZW50KG1zZykpXG4gICAgICAgICAgLmZpbHRlcihfID0+IHNob3VsZFNob3dVc2VyTWVzc2FnZShfLCBpc1RyYW5zY3JpcHRNb2RlKSksXG4gICAgICAgIHN5bnRoZXRpY1N0cmVhbWluZ1Rvb2xVc2VNZXNzYWdlcyxcbiAgICAgIClcbiAgICAgIC8vIFRocmVlLXRpZXIgZmlsdGVyaW5nLiBUcmFuc2NyaXB0IG1vZGUgKGN0cmwrbyBzY3JlZW4pIGlzIHRydWx5IHVuZmlsdGVyZWQuXG4gICAgICAvLyBCcmllZi1vbmx5OiBTZW5kVXNlck1lc3NhZ2UgKyB1c2VyIGlucHV0IG9ubHkuIERlZmF1bHQ6IGRyb3AgcmVkdW5kYW50XG4gICAgICAvLyBhc3Npc3RhbnQgdGV4dCBpbiB0dXJucyB3aGVyZSBTZW5kVXNlck1lc3NhZ2Ugd2FzIGNhbGxlZCAodGhlIG1vZGVsJ3NcbiAgICAgIC8vIHRleHQgaXMgd29ya2luZy1ub3RlcyB0aGF0IGR1cGxpY2F0ZSB0aGUgU2VuZFVzZXJNZXNzYWdlIGNvbnRlbnQpLlxuICAgICAgY29uc3QgYnJpZWZUb29sTmFtZXMgPSBbQlJJRUZfVE9PTF9OQU1FLCBTRU5EX1VTRVJfRklMRV9UT09MX05BTUVdLmZpbHRlcihcbiAgICAgICAgKG4pOiBuIGlzIHN0cmluZyA9PiBuICE9PSBudWxsLFxuICAgICAgKVxuICAgICAgLy8gZHJvcFRleHRJbkJyaWVmVHVybnMgc2hvdWxkIG9ubHkgdHJpZ2dlciBvbiBTZW5kVXNlck1lc3NhZ2UgdHVybnMg4oCUXG4gICAgICAvLyBTZW5kVXNlckZpbGUgZGVsaXZlcnMgYSBmaWxlIHdpdGhvdXQgcmVwbGFjZW1lbnQgdGV4dCwgc28gZHJvcHBpbmdcbiAgICAgIC8vIGFzc2lzdGFudCB0ZXh0IGZvciBmaWxlLW9ubHkgdHVybnMgd291bGQgbGVhdmUgdGhlIHVzZXIgd2l0aCBubyBjb250ZXh0LlxuICAgICAgY29uc3QgZHJvcFRleHRUb29sTmFtZXMgPSBbQlJJRUZfVE9PTF9OQU1FXS5maWx0ZXIoXG4gICAgICAgIChuKTogbiBpcyBzdHJpbmcgPT4gbiAhPT0gbnVsbCxcbiAgICAgIClcbiAgICAgIGNvbnN0IGJyaWVmRmlsdGVyZWQgPVxuICAgICAgICBicmllZlRvb2xOYW1lcy5sZW5ndGggPiAwICYmICFpc1RyYW5zY3JpcHRNb2RlXG4gICAgICAgICAgPyBpc0JyaWVmT25seVxuICAgICAgICAgICAgPyBmaWx0ZXJGb3JCcmllZlRvb2wobWVzc2FnZXNUb1Nob3dOb3RUcnVuY2F0ZWQsIGJyaWVmVG9vbE5hbWVzKVxuICAgICAgICAgICAgOiBkcm9wVGV4dFRvb2xOYW1lcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gZHJvcFRleHRJbkJyaWVmVHVybnMoXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZCxcbiAgICAgICAgICAgICAgICAgIGRyb3BUZXh0VG9vbE5hbWVzLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZFxuICAgICAgICAgIDogbWVzc2FnZXNUb1Nob3dOb3RUcnVuY2F0ZWRcblxuICAgICAgY29uc3QgbWVzc2FnZXNUb1Nob3cgPSBzaG91bGRUcnVuY2F0ZVxuICAgICAgICA/IGJyaWVmRmlsdGVyZWQuc2xpY2UoLU1BWF9NRVNTQUdFU19UT19TSE9XX0lOX1RSQU5TQ1JJUFRfTU9ERSlcbiAgICAgICAgOiBicmllZkZpbHRlcmVkXG5cbiAgICAgIGNvbnN0IGhhc1RydW5jYXRlZE1lc3NhZ2VzID1cbiAgICAgICAgc2hvdWxkVHJ1bmNhdGUgJiZcbiAgICAgICAgYnJpZWZGaWx0ZXJlZC5sZW5ndGggPiBNQVhfTUVTU0FHRVNfVE9fU0hPV19JTl9UUkFOU0NSSVBUX01PREVcblxuICAgICAgY29uc3QgeyBtZXNzYWdlczogZ3JvdXBlZE1lc3NhZ2VzIH0gPSBhcHBseUdyb3VwaW5nKFxuICAgICAgICBtZXNzYWdlc1RvU2hvdyxcbiAgICAgICAgdG9vbHMsXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGNvbGxhcHNlQmFja2dyb3VuZEJhc2hOb3RpZmljYXRpb25zKFxuICAgICAgICBjb2xsYXBzZUhvb2tTdW1tYXJpZXMoXG4gICAgICAgICAgY29sbGFwc2VUZWFtbWF0ZVNodXRkb3ducyhcbiAgICAgICAgICAgIGNvbGxhcHNlUmVhZFNlYXJjaEdyb3Vwcyhncm91cGVkTWVzc2FnZXMsIHRvb2xzKSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgICB2ZXJib3NlLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBsb29rdXBzID0gYnVpbGRNZXNzYWdlTG9va3Vwcyhub3JtYWxpemVkTWVzc2FnZXMsIG1lc3NhZ2VzVG9TaG93KVxuXG4gICAgICBjb25zdCBoaWRkZW5NZXNzYWdlQ291bnQgPVxuICAgICAgICBtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZC5sZW5ndGggLVxuICAgICAgICBNQVhfTUVTU0FHRVNfVE9fU0hPV19JTl9UUkFOU0NSSVBUX01PREVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29sbGFwc2VkLFxuICAgICAgICBsb29rdXBzLFxuICAgICAgICBoYXNUcnVuY2F0ZWRNZXNzYWdlcyxcbiAgICAgICAgaGlkZGVuTWVzc2FnZUNvdW50LFxuICAgICAgfVxuICAgIH0sIFtcbiAgICAgIHZlcmJvc2UsXG4gICAgICBub3JtYWxpemVkTWVzc2FnZXMsXG4gICAgICBpc1RyYW5zY3JpcHRNb2RlLFxuICAgICAgc3ludGhldGljU3RyZWFtaW5nVG9vbFVzZU1lc3NhZ2VzLFxuICAgICAgc2hvdWxkVHJ1bmNhdGUsXG4gICAgICB0b29scyxcbiAgICAgIGlzQnJpZWZPbmx5LFxuICAgIF0pXG5cbiAgLy8gQ2hlYXAgc2xpY2Ug4oCUIG9ubHkgcnVucyB3aGVuIHNjcm9sbCByYW5nZSBvciBzbGljZSBjb25maWcgY2hhbmdlcy5cbiAgY29uc3QgcmVuZGVyYWJsZU1lc3NhZ2VzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gU2FmZXR5IGNhcCBmb3IgdGhlIG5vbi12aXJ0dWFsaXplZCByZW5kZXIgcGF0aC4gQXBwbGllZCBoZXJlIChub3QgYXRcbiAgICAvLyB0aGUgSlNYIHNpdGUpIHNvIHJlbmRlck1lc3NhZ2VSb3cncyBpbmRleC1iYXNlZCBsb29rdXBzIGFuZFxuICAgIC8vIGRpdmlkZXJCZWZvcmVJbmRleCBjb21wdXRlIG9uIHRoZSBzYW1lIGFycmF5LiBWaXJ0dWFsTWVzc2FnZUxpc3RcbiAgICAvLyBuZXZlciBzZWVzIHRoaXMgc2xpY2Ug4oCUIHZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZSBpcyBjb25zdGFudCBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50J3MgbGlmZXRpbWUgKHNjcm9sbFJlZiBpcyBlaXRoZXIgYWx3YXlzIHBhc3NlZCBvciBuZXZlcikuXG4gICAgLy8gcmVuZGVyUmFuZ2UgaXMgZmlyc3Q6IHRoZSBjaHVua2VkIGV4cG9ydCBwYXRoIHNsaWNlcyB0aGVcbiAgICAvLyBwb3N0LWdyb3VwaW5nIGFycmF5IHNvIGVhY2ggY2h1bmsgZ2V0cyBjb3JyZWN0IHRvb2wtY2FsbCBncm91cGluZy5cbiAgICBjb25zdCBjYXBBcHBsaWVzID0gIXZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZSAmJiAhZGlzYWJsZVJlbmRlckNhcFxuICAgIGNvbnN0IHNsaWNlU3RhcnQgPSBjYXBBcHBsaWVzXG4gICAgICA/IGNvbXB1dGVTbGljZVN0YXJ0KGNvbGxhcHNlZCwgc2xpY2VBbmNob3JSZWYpXG4gICAgICA6IDBcbiAgICByZXR1cm4gcmVuZGVyUmFuZ2VcbiAgICAgID8gY29sbGFwc2VkLnNsaWNlKHJlbmRlclJhbmdlWzBdLCByZW5kZXJSYW5nZVsxXSlcbiAgICAgIDogc2xpY2VTdGFydCA+IDBcbiAgICAgICAgPyBjb2xsYXBzZWQuc2xpY2Uoc2xpY2VTdGFydClcbiAgICAgICAgOiBjb2xsYXBzZWRcbiAgfSwgW2NvbGxhcHNlZCwgcmVuZGVyUmFuZ2UsIHZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZSwgZGlzYWJsZVJlbmRlckNhcF0pXG5cbiAgY29uc3Qgc3RyZWFtaW5nVG9vbFVzZUlEcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbmV3IFNldChzdHJlYW1pbmdUb29sVXNlcy5tYXAoXyA9PiBfLmNvbnRlbnRCbG9jay5pZCkpLFxuICAgIFtzdHJlYW1pbmdUb29sVXNlc10sXG4gIClcblxuICAvLyBEaXZpZGVyIGluc2VydGlvbiBwb2ludDogZmlyc3QgcmVuZGVyYWJsZU1lc3NhZ2Ugd2hvc2UgdXVpZCBzaGFyZXMgdGhlXG4gIC8vIDI0LWNoYXIgcHJlZml4IHdpdGggZmlyc3RVbnNlZW5VdWlkIChkZXJpdmVVVUlEIGtlZXBzIHRoZSBmaXJzdCAyNFxuICAvLyBjaGFycyBvZiB0aGUgc291cmNlIG1lc3NhZ2UgdXVpZCwgc28gdGhpcyBtYXRjaGVzIGFueSBibG9jayBmcm9tIGl0KS5cbiAgY29uc3QgZGl2aWRlckJlZm9yZUluZGV4ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCF1bnNlZW5EaXZpZGVyKSByZXR1cm4gLTFcbiAgICBjb25zdCBwcmVmaXggPSB1bnNlZW5EaXZpZGVyLmZpcnN0VW5zZWVuVXVpZC5zbGljZSgwLCAyNClcbiAgICByZXR1cm4gcmVuZGVyYWJsZU1lc3NhZ2VzLmZpbmRJbmRleChtID0+IG0udXVpZC5zbGljZSgwLCAyNCkgPT09IHByZWZpeClcbiAgfSwgW3Vuc2VlbkRpdmlkZXIsIHJlbmRlcmFibGVNZXNzYWdlc10pXG5cbiAgY29uc3Qgc2VsZWN0ZWRJZHggPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWN1cnNvcikgcmV0dXJuIC0xXG4gICAgcmV0dXJuIHJlbmRlcmFibGVNZXNzYWdlcy5maW5kSW5kZXgobSA9PiBtLnV1aWQgPT09IGN1cnNvci51dWlkKVxuICB9LCBbY3Vyc29yLCByZW5kZXJhYmxlTWVzc2FnZXNdKVxuXG4gIC8vIEZ1bGxzY3JlZW46IGNsaWNrIGEgbWVzc2FnZSB0byB0b2dnbGUgdmVyYm9zZSByZW5kZXJpbmcgZm9yIGl0LiBLZXllZCBieVxuICAvLyB0b29sX3VzZV9pZCB3aGVyZSBhdmFpbGFibGUgc28gYSB0b29sX3VzZSBhbmQgaXRzIHRvb2xfcmVzdWx0IChzZXBhcmF0ZVxuICAvLyByb3dzKSBleHBhbmQgdG9nZXRoZXI7IGZhbGxzIGJhY2sgdG8gdXVpZCBmb3IgZ3JvdXBzL3RoaW5raW5nLiBTdGFsZSBrZXlzXG4gIC8vIGFyZSBoYXJtbGVzcyDigJQgdGhleSBuZXZlciBtYXRjaCBhbnl0aGluZyBpbiByZW5kZXJhYmxlTWVzc2FnZXMuXG4gIGNvbnN0IFtleHBhbmRlZEtleXMsIHNldEV4cGFuZGVkS2V5c10gPSB1c2VTdGF0ZTxSZWFkb25seVNldDxzdHJpbmc+PihcbiAgICAoKSA9PiBuZXcgU2V0KCksXG4gIClcbiAgY29uc3Qgb25JdGVtQ2xpY2sgPSB1c2VDYWxsYmFjaygobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGsgPSBleHBhbmRLZXkobXNnKVxuICAgIHNldEV4cGFuZGVkS2V5cyhwcmV2ID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSBuZXcgU2V0KHByZXYpXG4gICAgICBpZiAobmV4dC5oYXMoaykpIG5leHQuZGVsZXRlKGspXG4gICAgICBlbHNlIG5leHQuYWRkKGspXG4gICAgICByZXR1cm4gbmV4dFxuICAgIH0pXG4gIH0sIFtdKVxuICBjb25zdCBpc0l0ZW1FeHBhbmRlZCA9IHVzZUNhbGxiYWNrKFxuICAgIChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PlxuICAgICAgZXhwYW5kZWRLZXlzLnNpemUgPiAwICYmIGV4cGFuZGVkS2V5cy5oYXMoZXhwYW5kS2V5KG1zZykpLFxuICAgIFtleHBhbmRlZEtleXNdLFxuICApXG4gIC8vIE9ubHkgaG92ZXIvY2xpY2sgbWVzc2FnZXMgd2hlcmUgdGhlIHZlcmJvc2UgdG9nZ2xlIHJldmVhbHMgbW9yZTpcbiAgLy8gY29sbGFwc2VkIHJlYWQvc2VhcmNoIGdyb3Vwcywgb3IgdG9vbCByZXN1bHRzIHRoYXQgc2VsZi1yZXBvcnQgdHJ1bmNhdGlvblxuICAvLyB2aWEgaXNSZXN1bHRUcnVuY2F0ZWQuIENhbGxiYWNrIG11c3QgYmUgc3RhYmxlIGFjcm9zcyBtZXNzYWdlIHVwZGF0ZXM6IGlmXG4gIC8vIGl0cyBpZGVudGl0eSAob3IgcmV0dXJuIHZhbHVlKSBmbGlwcyBkdXJpbmcgc3RyZWFtaW5nLCBvbk1vdXNlRW50ZXJcbiAgLy8gYXR0YWNoZXMgYWZ0ZXIgdGhlIG1vdXNlIGlzIGFscmVhZHkgaW5zaWRlIOKGkiBob3ZlciBuZXZlciBmaXJlcy4gdG9vbHMgaXNcbiAgLy8gc2Vzc2lvbi1zdGFibGU7IGxvb2t1cHMgaXMgcmVhZCB2aWEgcmVmIHNvIHRoZSBjYWxsYmFjayBkb2Vzbid0IGNodXJuIG9uXG4gIC8vIGV2ZXJ5IG5ldyBtZXNzYWdlLlxuICBjb25zdCBsb29rdXBzUmVmID0gdXNlUmVmKGxvb2t1cHMpXG4gIGxvb2t1cHNSZWYuY3VycmVudCA9IGxvb2t1cHNcbiAgY29uc3QgaXNJdGVtQ2xpY2thYmxlID0gdXNlQ2FsbGJhY2soXG4gICAgKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCcpIHJldHVybiB0cnVlXG4gICAgICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAgIGNvbnN0IGIgPSBtc2cubWVzc2FnZS5jb250ZW50WzBdIGFzIHVua25vd24gYXMgQWR2aXNvckJsb2NrIHwgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYiAhPSBudWxsICYmXG4gICAgICAgICAgaXNBZHZpc29yQmxvY2soYikgJiZcbiAgICAgICAgICBiLnR5cGUgPT09ICdhZHZpc29yX3Rvb2xfcmVzdWx0JyAmJlxuICAgICAgICAgIGIuY29udGVudC50eXBlID09PSAnYWR2aXNvcl9yZXN1bHQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmIChtc2cudHlwZSAhPT0gJ3VzZXInKSByZXR1cm4gZmFsc2VcbiAgICAgIGNvbnN0IGIgPSBtc2cubWVzc2FnZS5jb250ZW50WzBdXG4gICAgICBpZiAoYj8udHlwZSAhPT0gJ3Rvb2xfcmVzdWx0JyB8fCBiLmlzX2Vycm9yIHx8ICFtc2cudG9vbFVzZVJlc3VsdClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBjb25zdCBuYW1lID0gbG9va3Vwc1JlZi5jdXJyZW50LnRvb2xVc2VCeVRvb2xVc2VJRC5nZXQoXG4gICAgICAgIGIudG9vbF91c2VfaWQsXG4gICAgICApPy5uYW1lXG4gICAgICBjb25zdCB0b29sID0gbmFtZSA/IGZpbmRUb29sQnlOYW1lKHRvb2xzLCBuYW1lKSA6IHVuZGVmaW5lZFxuICAgICAgcmV0dXJuIHRvb2w/LmlzUmVzdWx0VHJ1bmNhdGVkPy4obXNnLnRvb2xVc2VSZXN1bHQgYXMgbmV2ZXIpID8/IGZhbHNlXG4gICAgfSxcbiAgICBbdG9vbHNdLFxuICApXG5cbiAgY29uc3QgY2FuQW5pbWF0ZSA9XG4gICAgKCF0b29sSlNYIHx8ICEhdG9vbEpTWC5zaG91bGRDb250aW51ZUFuaW1hdGlvbikgJiZcbiAgICAhdG9vbFVzZUNvbmZpcm1RdWV1ZS5sZW5ndGggJiZcbiAgICAhaXNNZXNzYWdlU2VsZWN0b3JWaXNpYmxlXG5cbiAgY29uc3QgaGFzVG9vbHNJblByb2dyZXNzID0gaW5Qcm9ncmVzc1Rvb2xVc2VJRHMuc2l6ZSA+IDBcblxuICAvLyBSZXBvcnQgcHJvZ3Jlc3MgdG8gdGVybWluYWwgKGZvciB0ZXJtaW5hbHMgdGhhdCBzdXBwb3J0IE9TQyA5OzQpXG4gIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IHVzZVRlcm1pbmFsTm90aWZpY2F0aW9uKClcbiAgY29uc3QgcHJldlByb2dyZXNzU3RhdGUgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgcHJvZ3Jlc3NFbmFibGVkID1cbiAgICBnZXRHbG9iYWxDb25maWcoKS50ZXJtaW5hbFByb2dyZXNzQmFyRW5hYmxlZCAmJlxuICAgICFnZXRJc1JlbW90ZU1vZGUoKSAmJlxuICAgICEocHJvYWN0aXZlTW9kdWxlPy5pc1Byb2FjdGl2ZUFjdGl2ZSgpID8/IGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gcHJvZ3Jlc3NFbmFibGVkXG4gICAgICA/IGhhc1Rvb2xzSW5Qcm9ncmVzc1xuICAgICAgICA/ICdpbmRldGVybWluYXRlJ1xuICAgICAgICA6ICdjb21wbGV0ZWQnXG4gICAgICA6IG51bGxcbiAgICBpZiAocHJldlByb2dyZXNzU3RhdGUuY3VycmVudCA9PT0gc3RhdGUpIHJldHVyblxuICAgIHByZXZQcm9ncmVzc1N0YXRlLmN1cnJlbnQgPSBzdGF0ZVxuICAgIHByb2dyZXNzKHN0YXRlKVxuICB9LCBbcHJvZ3Jlc3MsIHByb2dyZXNzRW5hYmxlZCwgaGFzVG9vbHNJblByb2dyZXNzXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gcHJvZ3Jlc3MobnVsbClcbiAgfSwgW3Byb2dyZXNzXSlcblxuICBjb25zdCBtZXNzYWdlS2V5ID0gdXNlQ2FsbGJhY2soXG4gICAgKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpID0+IGAke21zZy51dWlkfS0ke2NvbnZlcnNhdGlvbklkfWAsXG4gICAgW2NvbnZlcnNhdGlvbklkXSxcbiAgKVxuXG4gIGNvbnN0IHJlbmRlck1lc3NhZ2VSb3cgPSAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByZXZUeXBlID0gaW5kZXggPiAwID8gcmVuZGVyYWJsZU1lc3NhZ2VzW2luZGV4IC0gMV0/LnR5cGUgOiB1bmRlZmluZWRcbiAgICBjb25zdCBpc1VzZXJDb250aW51YXRpb24gPSBtc2cudHlwZSA9PT0gJ3VzZXInICYmIHByZXZUeXBlID09PSAndXNlcidcbiAgICAvLyBoYXNDb250ZW50QWZ0ZXIgaXMgb25seSBjb25zdW1lZCBmb3IgY29sbGFwc2VkX3JlYWRfc2VhcmNoIGdyb3VwcztcbiAgICAvLyBza2lwIHRoZSBzY2FuIGZvciBldmVyeXRoaW5nIGVsc2UuIHN0cmVhbWluZ1RleHQgaXMgcmVuZGVyZWQgYXMgYVxuICAgIC8vIHNpYmxpbmcgYWZ0ZXIgdGhpcyBtYXAsIHNvIGl0J3MgbmV2ZXIgaW4gcmVuZGVyYWJsZU1lc3NhZ2VzIOKAlCBPUiBpdFxuICAgIC8vIGluIGV4cGxpY2l0bHkgc28gdGhlIGdyb3VwIGZsaXBzIHRvIHBhc3QgdGVuc2UgYXMgc29vbiBhcyB0ZXh0IHN0YXJ0c1xuICAgIC8vIHN0cmVhbWluZyBpbnN0ZWFkIG9mIHdhaXRpbmcgZm9yIHRoZSBibG9jayB0byBmaW5hbGl6ZS5cbiAgICBjb25zdCBoYXNDb250ZW50QWZ0ZXIgPVxuICAgICAgbXNnLnR5cGUgPT09ICdjb2xsYXBzZWRfcmVhZF9zZWFyY2gnICYmXG4gICAgICAoISFzdHJlYW1pbmdUZXh0IHx8XG4gICAgICAgIGhhc0NvbnRlbnRBZnRlckluZGV4KFxuICAgICAgICAgIHJlbmRlcmFibGVNZXNzYWdlcyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB0b29scyxcbiAgICAgICAgICBzdHJlYW1pbmdUb29sVXNlSURzLFxuICAgICAgICApKVxuXG4gICAgY29uc3QgayA9IG1lc3NhZ2VLZXkobXNnKVxuICAgIGNvbnN0IHJvdyA9IChcbiAgICAgIDxNZXNzYWdlUm93XG4gICAgICAgIGtleT17a31cbiAgICAgICAgbWVzc2FnZT17bXNnfVxuICAgICAgICBpc1VzZXJDb250aW51YXRpb249e2lzVXNlckNvbnRpbnVhdGlvbn1cbiAgICAgICAgaGFzQ29udGVudEFmdGVyPXtoYXNDb250ZW50QWZ0ZXJ9XG4gICAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgICAgY29tbWFuZHM9e2NvbW1hbmRzfVxuICAgICAgICB2ZXJib3NlPXtcbiAgICAgICAgICB2ZXJib3NlIHx8XG4gICAgICAgICAgaXNJdGVtRXhwYW5kZWQobXNnKSB8fFxuICAgICAgICAgIChjdXJzb3I/LmV4cGFuZGVkID09PSB0cnVlICYmIGluZGV4ID09PSBzZWxlY3RlZElkeClcbiAgICAgICAgfVxuICAgICAgICBpblByb2dyZXNzVG9vbFVzZUlEcz17aW5Qcm9ncmVzc1Rvb2xVc2VJRHN9XG4gICAgICAgIHN0cmVhbWluZ1Rvb2xVc2VJRHM9e3N0cmVhbWluZ1Rvb2xVc2VJRHN9XG4gICAgICAgIHNjcmVlbj17c2NyZWVufVxuICAgICAgICBjYW5BbmltYXRlPXtjYW5BbmltYXRlfVxuICAgICAgICBvbk9wZW5SYXRlTGltaXRPcHRpb25zPXtvbk9wZW5SYXRlTGltaXRPcHRpb25zfVxuICAgICAgICBsYXN0VGhpbmtpbmdCbG9ja0lkPXtsYXN0VGhpbmtpbmdCbG9ja0lkfVxuICAgICAgICBsYXRlc3RCYXNoT3V0cHV0VVVJRD17bGF0ZXN0QmFzaE91dHB1dFVVSUR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICBsb29rdXBzPXtsb29rdXBzfVxuICAgICAgLz5cbiAgICApXG5cbiAgICAvLyBQZXItcm93IFByb3ZpZGVyIOKAlCBvbmx5IDIgcm93cyByZS1yZW5kZXIgb24gc2VsZWN0aW9uIGNoYW5nZS5cbiAgICAvLyBXcmFwcGVkIEJFRk9SRSBkaXZpZGVyIGJyYW5jaCBzbyBib3RoIHJldHVybiBwYXRocyBnZXQgaXQuXG4gICAgY29uc3Qgd3JhcHBlZCA9IChcbiAgICAgIDxNZXNzYWdlQWN0aW9uc1NlbGVjdGVkQ29udGV4dC5Qcm92aWRlclxuICAgICAgICBrZXk9e2t9XG4gICAgICAgIHZhbHVlPXtpbmRleCA9PT0gc2VsZWN0ZWRJZHh9XG4gICAgICA+XG4gICAgICAgIHtyb3d9XG4gICAgICA8L01lc3NhZ2VBY3Rpb25zU2VsZWN0ZWRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcblxuICAgIGlmICh1bnNlZW5EaXZpZGVyICYmIGluZGV4ID09PSBkaXZpZGVyQmVmb3JlSW5kZXgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIDxCb3gga2V5PVwidW5zZWVuLWRpdmlkZXJcIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICB0aXRsZT17YCR7dW5zZWVuRGl2aWRlci5jb3VudH0gbmV3ICR7cGx1cmFsKHVuc2VlbkRpdmlkZXIuY291bnQsICdtZXNzYWdlJyl9YH1cbiAgICAgICAgICAgIHdpZHRoPXtjb2x1bW5zfVxuICAgICAgICAgICAgY29sb3I9XCJpbmFjdGl2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+LFxuICAgICAgICB3cmFwcGVkLFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlZFxuICB9XG5cbiAgLy8gU2VhcmNoIGluZGV4aW5nOiBmb3IgdG9vbF9yZXN1bHQgbWVzc2FnZXMsIGxvb2sgdXAgdGhlIFRvb2wgYW5kIHVzZVxuICAvLyBpdHMgZXh0cmFjdFNlYXJjaFRleHQg4oCUIHRvb2wtb3duZWQsIHByZWNpc2UsIG1hdGNoZXMgd2hhdFxuICAvLyByZW5kZXJUb29sUmVzdWx0TWVzc2FnZSBzaG93cy4gRmFsbHMgYmFjayB0byByZW5kZXJhYmxlU2VhcmNoVGV4dFxuICAvLyAoZHVjay10eXBlcyB0b29sVXNlUmVzdWx0KSBmb3IgdG9vbHMgdGhhdCBoYXZlbid0IGltcGxlbWVudGVkIGl0LFxuICAvLyBhbmQgZm9yIGFsbCBub24tdG9vbC1yZXN1bHQgbWVzc2FnZSB0eXBlcy4gVGhlIGRyaWZ0LWNhdGNoZXIgdGVzdFxuICAvLyAodG9vbFNlYXJjaFRleHQudGVzdC50c3gpIHJlbmRlcnMgKyBjb21wYXJlcyB0byBrZWVwIHRoZXNlIGluIHN5bmMuXG4gIC8vXG4gIC8vIEEgc2Vjb25kLVJlYWN0LXJvb3QgcmVjb25jaWxlIGFwcHJvYWNoIHdhcyB0cmllZCBhbmQgcnVsZWQgb3V0XG4gIC8vIChtZWFzdXJlZCAzLjFtcy9tc2csIGdyb3dpbmcg4oCUIGZsdXNoU3luY1dvcmsgcHJvY2Vzc2VzIGFsbCByb290cztcbiAgLy8gY29tcG9uZW50IGhvb2tzIG11dGF0ZSBzaGFyZWQgc3RhdGUg4oaSIG1haW4gcm9vdCBhY2N1bXVsYXRlcyB1cGRhdGVzKS5cbiAgY29uc3Qgc2VhcmNoVGV4dENhY2hlID0gdXNlUmVmKG5ldyBXZWFrTWFwPFJlbmRlcmFibGVNZXNzYWdlLCBzdHJpbmc+KCkpXG4gIGNvbnN0IGV4dHJhY3RTZWFyY2hUZXh0ID0gdXNlQ2FsbGJhY2soXG4gICAgKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBzdHJpbmcgPT4ge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VhcmNoVGV4dENhY2hlLmN1cnJlbnQuZ2V0KG1zZylcbiAgICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZFxuICAgICAgbGV0IHRleHQgPSByZW5kZXJhYmxlU2VhcmNoVGV4dChtc2cpXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG9vbF9yZXN1bHQgbWVzc2FnZSBhbmQgdGhlIHRvb2wgaW1wbGVtZW50c1xuICAgICAgLy8gZXh0cmFjdFNlYXJjaFRleHQsIHByZWZlciB0aGF0IOKAlCBpdCdzIHByZWNpc2UgKHRvb2wtb3duZWQpXG4gICAgICAvLyB2cyByZW5kZXJhYmxlU2VhcmNoVGV4dCdzIGZpZWxkLW5hbWUgaGV1cmlzdGljLlxuICAgICAgaWYgKFxuICAgICAgICBtc2cudHlwZSA9PT0gJ3VzZXInICYmXG4gICAgICAgIG1zZy50b29sVXNlUmVzdWx0ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkobXNnLm1lc3NhZ2UuY29udGVudClcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0ciA9IG1zZy5tZXNzYWdlLmNvbnRlbnQuZmluZChiID0+IGIudHlwZSA9PT0gJ3Rvb2xfcmVzdWx0JylcbiAgICAgICAgaWYgKHRyICYmICd0b29sX3VzZV9pZCcgaW4gdHIpIHtcbiAgICAgICAgICBjb25zdCB0dSA9IGxvb2t1cHMudG9vbFVzZUJ5VG9vbFVzZUlELmdldCh0ci50b29sX3VzZV9pZClcbiAgICAgICAgICBjb25zdCB0b29sID0gdHUgJiYgZmluZFRvb2xCeU5hbWUodG9vbHMsIHR1Lm5hbWUpXG4gICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gdG9vbD8uZXh0cmFjdFNlYXJjaFRleHQ/LihcbiAgICAgICAgICAgIG1zZy50b29sVXNlUmVzdWx0IGFzIG5ldmVyLFxuICAgICAgICAgIClcbiAgICAgICAgICAvLyB1bmRlZmluZWQgPSB0b29sIGRpZG4ndCBpbXBsZW1lbnQg4oaSIGtlZXAgaGV1cmlzdGljLiBFbXB0eVxuICAgICAgICAgIC8vIHN0cmluZyA9IHRvb2wgc2F5cyBcIm5vdGhpbmcgdG8gaW5kZXhcIiDihpIgcmVzcGVjdCB0aGF0LlxuICAgICAgICAgIGlmIChleHRyYWN0ZWQgIT09IHVuZGVmaW5lZCkgdGV4dCA9IGV4dHJhY3RlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDYWNoZSBMT1dFUkVEOiBzZXRTZWFyY2hRdWVyeSdzIGhvdCBsb29wIGluZGV4T2ZzIHBlciBrZXlzdHJva2UuXG4gICAgICAvLyBMb3dlcmluZyBoZXJlIChvbmNlLCBhdCB3YXJtKSB2cyB0aGVyZSAoZXZlcnkga2V5c3Ryb2tlKSB0cmFkZXNcbiAgICAgIC8vIH5zYW1lIHN0ZWFkeS1zdGF0ZSBtZW1vcnkgZm9yIHplcm8gcGVyLWtleXN0cm9rZSBhbGxvYy4gQ2FjaGVcbiAgICAgIC8vIEdDJ3Mgd2l0aCBtZXNzYWdlcyBvbiB0cmFuc2NyaXB0IGV4aXQuIFRvb2wgbWV0aG9kcyByZXR1cm4gcmF3O1xuICAgICAgLy8gcmVuZGVyYWJsZVNlYXJjaFRleHQgYWxyZWFkeSBsb3dlcmNhc2VzIChyZWR1bmRhbnQgYnV0IGNoZWFwKS5cbiAgICAgIGNvbnN0IGxvd2VyZWQgPSB0ZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgIHNlYXJjaFRleHRDYWNoZS5jdXJyZW50LnNldChtc2csIGxvd2VyZWQpXG4gICAgICByZXR1cm4gbG93ZXJlZFxuICAgIH0sXG4gICAgW3Rvb2xzLCBsb29rdXBzXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBMb2dvICovfVxuICAgICAgeyFoaWRlTG9nbyAmJiAhKHJlbmRlclJhbmdlICYmIHJlbmRlclJhbmdlWzBdID4gMCkgJiYgKFxuICAgICAgICA8TG9nb0hlYWRlciBhZ2VudERlZmluaXRpb25zPXthZ2VudERlZmluaXRpb25zfSAvPlxuICAgICAgKX1cblxuICAgICAgey8qIFRydW5jYXRpb24gaW5kaWNhdG9yICovfVxuICAgICAge2hhc1RydW5jYXRlZE1lc3NhZ2VzICYmIChcbiAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICB0aXRsZT17YCR7dG9nZ2xlU2hvd0FsbFNob3J0Y3V0fSB0byBzaG93ICR7Y2hhbGsuYm9sZChoaWRkZW5NZXNzYWdlQ291bnQpfSBwcmV2aW91cyBtZXNzYWdlc2B9XG4gICAgICAgICAgd2lkdGg9e2NvbHVtbnN9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogU2hvdyBhbGwgaW5kaWNhdG9yICovfVxuICAgICAge2lzVHJhbnNjcmlwdE1vZGUgJiZcbiAgICAgICAgc2hvd0FsbEluVHJhbnNjcmlwdCAmJlxuICAgICAgICBoaWRkZW5NZXNzYWdlQ291bnQgPiAwICYmXG4gICAgICAgIC8vIGRpc2FibGVSZW5kZXJDYXAgKGUuZy4gWyBkdW1wLXRvLXNjcm9sbGJhY2spIG1lYW5zIHdlJ3JlIHVuY2FwcGVkXG4gICAgICAgIC8vIGFzIGEgb25lLXNob3QgZXNjYXBlIGhhdGNoLCBub3QgYSB0b2dnbGUg4oCUIGN0cmwrZSBpcyBkZWFkIGFuZFxuICAgICAgICAvLyBub3RoaW5nIGlzIGFjdHVhbGx5IFwiaGlkZGVuXCIgdG8gcmVzdG9yZS5cbiAgICAgICAgIWRpc2FibGVSZW5kZXJDYXAgJiYgKFxuICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICB0aXRsZT17YCR7dG9nZ2xlU2hvd0FsbFNob3J0Y3V0fSB0byBoaWRlICR7Y2hhbGsuYm9sZChoaWRkZW5NZXNzYWdlQ291bnQpfSBwcmV2aW91cyBtZXNzYWdlc2B9XG4gICAgICAgICAgICB3aWR0aD17Y29sdW1uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICB7LyogTWVzc2FnZXMgLSByZW5kZXJlZCBhcyBtZW1vaXplZCBNZXNzYWdlUm93IGNvbXBvbmVudHMuXG4gICAgICAgICAgZmxhdE1hcCBpbnNlcnRzIHRoZSB1bnNlZW4tZGl2aWRlciBhcyBhIHNlcGFyYXRlIGtleWVkIHNpYmxpbmcgc29cbiAgICAgICAgICAoYSkgbm9uLWZ1bGxzY3JlZW4gcmVuZGVycyBwYXkgbm8gcGVyLW1lc3NhZ2UgRnJhZ21lbnQgd3JhcCwgYW5kXG4gICAgICAgICAgKGIpIGRpdmlkZXIgdG9nZ2xlIGluIGZ1bGxzY3JlZW4gcHJlc2VydmVzIGFsbCBNZXNzYWdlUm93cyBieSBrZXkuXG4gICAgICAgICAgUHJlLWNvbXB1dGUgZGVyaXZlZCB2YWx1ZXMgaW5zdGVhZCBvZiBwYXNzaW5nIHJlbmRlcmFibGVNZXNzYWdlcyB0b1xuICAgICAgICAgIGVhY2ggcm93IC0gUmVhY3QgQ29tcGlsZXIgcGlucyBwcm9wcyBpbiB0aGUgZmliZXIncyBtZW1vQ2FjaGUsIHNvXG4gICAgICAgICAgcGFzc2luZyB0aGUgYXJyYXkgd291bGQgYWNjdW11bGF0ZSBldmVyeSBoaXN0b3JpY2FsIHZlcnNpb25cbiAgICAgICAgICAofjEtMk1CIG92ZXIgYSA3LXR1cm4gc2Vzc2lvbikuICovfVxuICAgICAge3ZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZSA/IChcbiAgICAgICAgPEluVmlydHVhbExpc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0cnVlfT5cbiAgICAgICAgICA8VmlydHVhbE1lc3NhZ2VMaXN0XG4gICAgICAgICAgICBtZXNzYWdlcz17cmVuZGVyYWJsZU1lc3NhZ2VzfVxuICAgICAgICAgICAgc2Nyb2xsUmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgaXRlbUtleT17bWVzc2FnZUtleX1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlck1lc3NhZ2VSb3d9XG4gICAgICAgICAgICBvbkl0ZW1DbGljaz17b25JdGVtQ2xpY2t9XG4gICAgICAgICAgICBpc0l0ZW1DbGlja2FibGU9e2lzSXRlbUNsaWNrYWJsZX1cbiAgICAgICAgICAgIGlzSXRlbUV4cGFuZGVkPXtpc0l0ZW1FeHBhbmRlZH1cbiAgICAgICAgICAgIHRyYWNrU3RpY2t5UHJvbXB0PXt0cmFja1N0aWNreVByb21wdH1cbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9e3NlbGVjdGVkSWR4ID49IDAgPyBzZWxlY3RlZElkeCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGN1cnNvck5hdlJlZj17Y3Vyc29yTmF2UmVmfVxuICAgICAgICAgICAgc2V0Q3Vyc29yPXtzZXRDdXJzb3J9XG4gICAgICAgICAgICBqdW1wUmVmPXtqdW1wUmVmfVxuICAgICAgICAgICAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlPXtvblNlYXJjaE1hdGNoZXNDaGFuZ2V9XG4gICAgICAgICAgICBzY2FuRWxlbWVudD17c2NhbkVsZW1lbnR9XG4gICAgICAgICAgICBzZXRQb3NpdGlvbnM9e3NldFBvc2l0aW9uc31cbiAgICAgICAgICAgIGV4dHJhY3RTZWFyY2hUZXh0PXtleHRyYWN0U2VhcmNoVGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0luVmlydHVhbExpc3RDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKSA6IChcbiAgICAgICAgcmVuZGVyYWJsZU1lc3NhZ2VzLmZsYXRNYXAocmVuZGVyTWVzc2FnZVJvdylcbiAgICAgICl9XG5cbiAgICAgIHtzdHJlYW1pbmdUZXh0ICYmICFpc0JyaWVmT25seSAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgbWFyZ2luVG9wPXsxfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgIDxCb3ggbWluV2lkdGg9ezJ9PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInRleHRcIj57QkxBQ0tfQ0lSQ0xFfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxTdHJlYW1pbmdNYXJrZG93bj57c3RyZWFtaW5nVGV4dH08L1N0cmVhbWluZ01hcmtkb3duPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAge2lzU3RyZWFtaW5nVGhpbmtpbmdWaXNpYmxlICYmIHN0cmVhbWluZ1RoaW5raW5nICYmICFpc0JyaWVmT25seSAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8QXNzaXN0YW50VGhpbmtpbmdNZXNzYWdlXG4gICAgICAgICAgICBwYXJhbT17e1xuICAgICAgICAgICAgICB0eXBlOiAndGhpbmtpbmcnLFxuICAgICAgICAgICAgICB0aGlua2luZzogc3RyZWFtaW5nVGhpbmtpbmcudGhpbmtpbmcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYWRkTWFyZ2luPXtmYWxzZX1cbiAgICAgICAgICAgIGlzVHJhbnNjcmlwdE1vZGU9e3RydWV9XG4gICAgICAgICAgICB2ZXJib3NlPXt2ZXJib3NlfVxuICAgICAgICAgICAgaGlkZUluVHJhbnNjcmlwdD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbi8qKiBLZXkgZm9yIGNsaWNrLXRvLWV4cGFuZDogdG9vbF91c2VfaWQgd2hlcmUgYXZhaWxhYmxlIChzbyB0b29sX3VzZSArIGl0c1xuICogIHRvb2xfcmVzdWx0IGV4cGFuZCB0b2dldGhlciksIGVsc2UgdXVpZCBmb3IgZ3JvdXBzL3RoaW5raW5nLiAqL1xuZnVuY3Rpb24gZXhwYW5kS2V5KG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcgfHwgbXNnLnR5cGUgPT09ICd1c2VyJ1xuICAgICAgPyBnZXRUb29sVXNlSUQobXNnKVxuICAgICAgOiBudWxsKSA/PyBtc2cudXVpZFxuICApXG59XG5cbi8vIEN1c3RvbSBjb21wYXJhdG9yIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgcmUtcmVuZGVycyBkdXJpbmcgc3RyZWFtaW5nLlxuLy8gRGVmYXVsdCBSZWFjdC5tZW1vIGRvZXMgc2hhbGxvdyBjb21wYXJpc29uIHdoaWNoIGZhaWxzIHdoZW46XG4vLyAxLiBvbk9wZW5SYXRlTGltaXRPcHRpb25zIGNhbGxiYWNrIGlzIHJlY3JlYXRlZCAoZG9lc24ndCBhZmZlY3QgcmVuZGVyIG91dHB1dClcbi8vIDIuIHN0cmVhbWluZ1Rvb2xVc2VzIGFycmF5IGlzIHJlY3JlYXRlZCBvbiBldmVyeSBkZWx0YSwgYnV0IG9ubHkgY29udGVudEJsb2NrIG1hdHRlcnMgZm9yIHJlbmRlcmluZ1xuLy8gMy4gc3RyZWFtaW5nVGhpbmtpbmcgY2hhbmdlcyBvbiBldmVyeSBkZWx0YSAtIHdlIERPIHdhbnQgdG8gcmUtcmVuZGVyIGZvciB0aGlzXG5mdW5jdGlvbiBzZXRzRXF1YWw8VD4oYTogU2V0PFQ+LCBiOiBTZXQ8VD4pOiBib29sZWFuIHtcbiAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2VcbiAgZm9yIChjb25zdCBpdGVtIG9mIGEpIHtcbiAgICBpZiAoIWIuaGFzKGl0ZW0pKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgTWVzc2FnZXMgPSBSZWFjdC5tZW1vKE1lc3NhZ2VzSW1wbCwgKHByZXYsIG5leHQpID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByZXYpIGFzIChrZXlvZiB0eXBlb2YgcHJldilbXVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnb25PcGVuUmF0ZUxpbWl0T3B0aW9ucycgfHxcbiAgICAgIGtleSA9PT0gJ3Njcm9sbFJlZicgfHxcbiAgICAgIGtleSA9PT0gJ3RyYWNrU3RpY2t5UHJvbXB0JyB8fFxuICAgICAga2V5ID09PSAnc2V0Q3Vyc29yJyB8fFxuICAgICAga2V5ID09PSAnY3Vyc29yTmF2UmVmJyB8fFxuICAgICAga2V5ID09PSAnanVtcFJlZicgfHxcbiAgICAgIGtleSA9PT0gJ29uU2VhcmNoTWF0Y2hlc0NoYW5nZScgfHxcbiAgICAgIGtleSA9PT0gJ3NjYW5FbGVtZW50JyB8fFxuICAgICAga2V5ID09PSAnc2V0UG9zaXRpb25zJ1xuICAgIClcbiAgICAgIGNvbnRpbnVlXG4gICAgaWYgKHByZXZba2V5XSAhPT0gbmV4dFtrZXldKSB7XG4gICAgICBpZiAoa2V5ID09PSAnc3RyZWFtaW5nVG9vbFVzZXMnKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwcmV2LnN0cmVhbWluZ1Rvb2xVc2VzXG4gICAgICAgIGNvbnN0IG4gPSBuZXh0LnN0cmVhbWluZ1Rvb2xVc2VzXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwLmxlbmd0aCA9PT0gbi5sZW5ndGggJiZcbiAgICAgICAgICBwLmV2ZXJ5KChpdGVtLCBpKSA9PiBpdGVtLmNvbnRlbnRCbG9jayA9PT0gbltpXT8uY29udGVudEJsb2NrKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnaW5Qcm9ncmVzc1Rvb2xVc2VJRHMnKSB7XG4gICAgICAgIGlmIChzZXRzRXF1YWwocHJldi5pblByb2dyZXNzVG9vbFVzZUlEcywgbmV4dC5pblByb2dyZXNzVG9vbFVzZUlEcykpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAndW5zZWVuRGl2aWRlcicpIHtcbiAgICAgICAgY29uc3QgcCA9IHByZXYudW5zZWVuRGl2aWRlclxuICAgICAgICBjb25zdCBuID0gbmV4dC51bnNlZW5EaXZpZGVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwPy5maXJzdFVuc2VlblV1aWQgPT09IG4/LmZpcnN0VW5zZWVuVXVpZCAmJlxuICAgICAgICAgIHA/LmNvdW50ID09PSBuPy5jb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAndG9vbHMnKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwcmV2LnRvb2xzXG4gICAgICAgIGNvbnN0IG4gPSBuZXh0LnRvb2xzXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwLmxlbmd0aCA9PT0gbi5sZW5ndGggJiZcbiAgICAgICAgICBwLmV2ZXJ5KCh0b29sLCBpKSA9PiB0b29sLm5hbWUgPT09IG5baV0/Lm5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHN0cmVhbWluZ1RoaW5raW5nIGNoYW5nZXMgZnJlcXVlbnRseSAtIGFsd2F5cyByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzXG4gICAgICAvLyAobm8gc3BlY2lhbCBoYW5kbGluZyBuZWVkZWQsIGRlZmF1bHQgYmVoYXZpb3IgaXMgY29ycmVjdClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFJlbmRlclN0YXRpY2FsbHkoXG4gIG1lc3NhZ2U6IFJlbmRlcmFibGVNZXNzYWdlLFxuICBzdHJlYW1pbmdUb29sVXNlSURzOiBTZXQ8c3RyaW5nPixcbiAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHM6IFNldDxzdHJpbmc+LFxuICBzaWJsaW5nVG9vbFVzZUlEczogUmVhZG9ubHlTZXQ8c3RyaW5nPixcbiAgc2NyZWVuOiBTY3JlZW4sXG4gIGxvb2t1cHM6IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTWVzc2FnZUxvb2t1cHM+LFxuKTogYm9vbGVhbiB7XG4gIGlmIChzY3JlZW4gPT09ICd0cmFuc2NyaXB0Jykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICBjYXNlICdhdHRhY2htZW50JzpcbiAgICBjYXNlICd1c2VyJzpcbiAgICBjYXNlICdhc3Npc3RhbnQnOiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgICBjb25zdCBibG9jayA9IG1lc3NhZ2UubWVzc2FnZS5jb250ZW50WzBdXG4gICAgICAgIGlmIChibG9jaz8udHlwZSA9PT0gJ3NlcnZlcl90b29sX3VzZScpIHtcbiAgICAgICAgICByZXR1cm4gbG9va3Vwcy5yZXNvbHZlZFRvb2xVc2VJRHMuaGFzKGJsb2NrLmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0b29sVXNlSUQgPSBnZXRUb29sVXNlSUQobWVzc2FnZSlcbiAgICAgIGlmICghdG9vbFVzZUlEKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoc3RyZWFtaW5nVG9vbFVzZUlEcy5oYXModG9vbFVzZUlEKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmIChpblByb2dyZXNzVG9vbFVzZUlEcy5oYXModG9vbFVzZUlEKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSB1bnJlc29sdmVkIFBvc3RUb29sVXNlIGhvb2tzIGZvciB0aGlzIHRvb2wgdXNlXG4gICAgICAvLyBJZiBzbywga2VlcCB0aGUgbWVzc2FnZSB0cmFuc2llbnQgc28gdGhlIEhvb2tQcm9ncmVzc01lc3NhZ2UgY2FuIHVwZGF0ZVxuICAgICAgaWYgKGhhc1VucmVzb2x2ZWRIb29rc0Zyb21Mb29rdXAodG9vbFVzZUlELCAnUG9zdFRvb2xVc2UnLCBsb29rdXBzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZXJ5KHNpYmxpbmdUb29sVXNlSURzLCBsb29rdXBzLnJlc29sdmVkVG9vbFVzZUlEcylcbiAgICB9XG4gICAgY2FzZSAnc3lzdGVtJzoge1xuICAgICAgLy8gYXBpIGVycm9ycyBhbHdheXMgcmVuZGVyIGR5bmFtaWNhbGx5LCBzaW5jZSB3ZSBoaWRlXG4gICAgICAvLyB0aGVtIGFzIHNvb24gYXMgd2Ugc2VlIGFub3RoZXIgbm9uLWVycm9yIG1lc3NhZ2UuXG4gICAgICByZXR1cm4gbWVzc2FnZS5zdWJ0eXBlICE9PSAnYXBpX2Vycm9yJ1xuICAgIH1cbiAgICBjYXNlICdncm91cGVkX3Rvb2xfdXNlJzoge1xuICAgICAgY29uc3QgYWxsUmVzb2x2ZWQgPSBtZXNzYWdlLm1lc3NhZ2VzLmV2ZXJ5KG1zZyA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50WzBdXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29udGVudD8udHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJlxuICAgICAgICAgIGxvb2t1cHMucmVzb2x2ZWRUb29sVXNlSURzLmhhcyhjb250ZW50LmlkKVxuICAgICAgICApXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFsbFJlc29sdmVkXG4gICAgfVxuICAgIGNhc2UgJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCc6IHtcbiAgICAgIC8vIEluIHByb21wdCBtb2RlLCBuZXZlciBtYXJrIGFzIHN0YXRpYyB0byBwcmV2ZW50IGZsaWNrZXIgYmV0d2VlbiBBUEkgdHVybnNcbiAgICAgIC8vIChJbiB0cmFuc2NyaXB0IG1vZGUsIHdlIGFscmVhZHkgcmV0dXJuZWQgdHJ1ZSBhdCB0aGUgdG9wIG9mIHRoaXMgZnVuY3Rpb24pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFHK0QsT0FDaEI7QUFDQTtZQUNGO1VBQ0Y7QUFDQSxjQUFJc0IsUUFBUSxTQUFTO0FBQ25CLGtCQUFNQyxJQUFJNUQsS0FBS3hHO0FBQ2Ysa0JBQU04RSxJQUFJMkIsS0FBS3pHO0FBQ2YsZ0JBQ0VvSyxFQUFFL04sV0FBV3lJLEVBQUV6SSxVQUNmK04sRUFBRXpMLE1BQU0sQ0FBQ3dJLE1BQU0vSyxNQUFNK0ssS0FBSzlMLFNBQVN5SixFQUFFMUksQ0FBQyxHQUFHZixJQUFJLEdBQzdDO0FBQ0E7WUFDRjtVQUNGO0FBR0EsaUJBQU87UUFDVDtNQUNGO0FBQ0EsYUFBTztJQUNULENBQUM7OzsiLAogICJuYW1lcyI6IFsiUHJvbXB0T3ZlcmxheVByb3ZpZGVyIiwgInQwIiwgIiQiLCAiX2MiLCAiY2hpbGRyZW4iLCAiZGF0YSIsICJzZXREYXRhIiwgInVzZVN0YXRlIiwgImRpYWxvZyIsICJzZXREaWFsb2ciLCAidDEiLCAidDIiLCAidXNlUHJvbXB0T3ZlcmxheSIsICJ1c2VDb250ZXh0IiwgIkRhdGFDb250ZXh0IiwgInVzZVByb21wdE92ZXJsYXlEaWFsb2ciLCAiRGlhbG9nQ29udGV4dCIsICJ1c2VTZXRQcm9tcHRPdmVybGF5IiwgInNldCIsICJTZXRDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VTZXRQcm9tcHRPdmVybGF5RGlhbG9nIiwgIm5vZGUiLCAiU2V0RGlhbG9nQ29udGV4dCIsICJjcmVhdGVDb250ZXh0IiwgImZpbGVVUkxUb1BhdGgiLCAidXNlVW5zZWVuRGl2aWRlciIsICJtZXNzYWdlQ291bnQiLCAiZGl2aWRlckluZGV4IiwgInNldERpdmlkZXJJbmRleCIsICJ1c2VTdGF0ZSIsICJjb3VudFJlZiIsICJ1c2VSZWYiLCAiY3VycmVudCIsICJkaXZpZGVyWVJlZiIsICJvblJlcGluIiwgInVzZUNhbGxiYWNrIiwgIm9uU2Nyb2xsQXdheSIsICJoYW5kbGUiLCAibWF4IiwgIk1hdGgiLCAiZ2V0U2Nyb2xsSGVpZ2h0IiwgImdldFZpZXdwb3J0SGVpZ2h0IiwgImdldFNjcm9sbFRvcCIsICJnZXRQZW5kaW5nRGVsdGEiLCAianVtcFRvTmV3IiwgInNjcm9sbFRvQm90dG9tIiwgInVzZUVmZmVjdCIsICJzaGlmdERpdmlkZXIiLCAiaW5kZXhEZWx0YSIsICJoZWlnaHREZWx0YSIsICJpZHgiLCAiY291bnRVbnNlZW5Bc3Npc3RhbnRUdXJucyIsICJtZXNzYWdlcyIsICJjb3VudCIsICJwcmV2V2FzQXNzaXN0YW50IiwgImkiLCAibGVuZ3RoIiwgIm0iLCAidHlwZSIsICJhc3Npc3RhbnRIYXNWaXNpYmxlVGV4dCIsICJpc0Fzc2lzdGFudCIsICJiIiwgIm1lc3NhZ2UiLCAiY29udGVudCIsICJ0ZXh0IiwgInRyaW0iLCAiY29tcHV0ZVVuc2VlbkRpdmlkZXIiLCAidW5kZWZpbmVkIiwgImFuY2hvcklkeCIsICJpc051bGxSZW5kZXJpbmdBdHRhY2htZW50IiwgInV1aWQiLCAiZmlyc3RVbnNlZW5VdWlkIiwgInNjcm9sbGFibGUiLCAiYm90dG9tIiwgIm92ZXJsYXkiLCAiYm90dG9tRmxvYXQiLCAibW9kYWwiLCAibW9kYWxTY3JvbGxSZWYiLCAic2Nyb2xsUmVmIiwgImhpZGVQaWxsIiwgImhpZGVTdGlja3kiLCAibmV3TWVzc2FnZUNvdW50IiwgIm9uUGlsbENsaWNrIiwgImNvbHVtbnMiLCAiJCIsICJzZXRTdGlja3lQcm9tcHQiLCAibGlzdGVuZXIiLCAidDUiLCAidDYiLCAiZGl2aWRlclkiLCAidXNlTGF5b3V0RWZmZWN0IiwgImlzRnVsbHNjcmVlbkVudkVuYWJsZWQiLCAiaGVhZGVyUHJvbXB0IiwgInBhZENvbGxhcHNlZCIsICJzdGlja3kiLCAidDgiLCAidDEwIiwgInQxMSIsICJ0OSIsICJ0MTIiLCAicGlsbFZpc2libGUiLCAidDEzIiwgInQxNCIsICJ0MTYiLCAidDE1IiwgInQxNyIsICJ0MTgiLCAidGVybWluYWxSb3dzIiwgIk1PREFMX1RSQU5TQ1JJUFRfUEVFSyIsICJ0MTkiLCAiaW5rIiwgIm9uSHlwZXJsaW5rQ2xpY2siLCAic3RhcnRzV2l0aCIsICJvcGVuUGF0aCIsICJvcGVuQnJvd3NlciIsICJOZXdNZXNzYWdlc1BpbGwiLCAib25DbGljayIsICJ0MiIsICJ0MSIsICJzZXRIb3ZlciIsICJ0NCIsICJob3ZlciIsICJ0MyIsICJkYXRhIiwgInVzZVByb21wdE92ZXJsYXkiLCAibWF4Q29sdW1uV2lkdGgiLCAic2VsZWN0ZWRTdWdnZXN0aW9uIiwgInN1Z2dlc3Rpb25zIiwgInQwIiwgIm5vZGUiLCAidXNlUHJvbXB0T3ZlcmxheURpYWxvZyIsICJTY3JvbGxDaHJvbWVDb250ZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAiYyIsICJjIiwgImNhbGN1bGF0ZUZlZWRXaWR0aCIsICJjb25maWciLCAidGl0bGUiLCAibGluZXMiLCAiZm9vdGVyIiwgImVtcHR5TWVzc2FnZSIsICJjdXN0b21Db250ZW50IiwgIm1heFdpZHRoIiwgInN0cmluZ1dpZHRoIiwgInVuZGVmaW5lZCIsICJNYXRoIiwgIm1heCIsICJ3aWR0aCIsICJsZW5ndGgiLCAiZ2FwIiwgIm1heFRpbWVzdGFtcFdpZHRoIiwgIm1hcCIsICJsaW5lIiwgInRpbWVzdGFtcCIsICJ0aW1lc3RhbXBXaWR0aCIsICJsaW5lV2lkdGgiLCAidGV4dCIsICJGZWVkIiwgInQwIiwgIiQiLCAiX2MiLCAiYWN0dWFsV2lkdGgiLCAidDEiLCAiX3RlbXAiLCAidDIiLCAidDMiLCAiY29udGVudCIsICJ0cnVuY2F0ZSIsICJsaW5lXzAiLCAiaW5kZXgiLCAidGV4dFdpZHRoIiwgInBhZEVuZCIsICJ0NCIsICJGZWVkQ29sdW1uIiwgInQwIiwgIiQiLCAiX2MiLCAiZmVlZHMiLCAibWF4V2lkdGgiLCAidDEiLCAiZmVlZFdpZHRocyIsICJtYXAiLCAiX3RlbXAiLCAiTWF0aCIsICJtYXgiLCAibWF4T2ZBbGxGZWVkcyIsICJhY3R1YWxXaWR0aCIsICJtaW4iLCAidDIiLCAidDMiLCAibGVuZ3RoIiwgImZlZWRfMCIsICJpbmRleCIsICJmZWVkIiwgImNhbGN1bGF0ZUZlZWRXaWR0aCIsICJob21lZGlyIiwgImNyZWF0ZVJlY2VudEFjdGl2aXR5RmVlZCIsICJhY3Rpdml0aWVzIiwgImxpbmVzIiwgIm1hcCIsICJsb2ciLCAidGltZSIsICJmb3JtYXRSZWxhdGl2ZVRpbWVBZ28iLCAibW9kaWZpZWQiLCAiZGVzY3JpcHRpb24iLCAic3VtbWFyeSIsICJmaXJzdFByb21wdCIsICJ0ZXh0IiwgInRpbWVzdGFtcCIsICJ0aXRsZSIsICJmb290ZXIiLCAibGVuZ3RoIiwgInVuZGVmaW5lZCIsICJlbXB0eU1lc3NhZ2UiLCAiY3JlYXRlV2hhdHNOZXdGZWVkIiwgInJlbGVhc2VOb3RlcyIsICJub3RlIiwgIm1hdGNoIiwgImNyZWF0ZVByb2plY3RPbmJvYXJkaW5nRmVlZCIsICJzdGVwcyIsICJlbmFibGVkU3RlcHMiLCAiZmlsdGVyIiwgImlzRW5hYmxlZCIsICJzb3J0IiwgImEiLCAiYiIsICJOdW1iZXIiLCAiaXNDb21wbGV0ZSIsICJjaGVja21hcmsiLCAiZmlndXJlcyIsICJ0aWNrIiwgIndhcm5pbmdUZXh0IiwgImdldEN3ZCIsICJwdXNoIiwgImNyZWF0ZUd1ZXN0UGFzc2VzRmVlZCIsICJyZXdhcmQiLCAiZ2V0Q2FjaGVkUmVmZXJyZXJSZXdhcmQiLCAic3VidGl0bGUiLCAiZm9ybWF0Q3JlZGl0QW1vdW50IiwgImN1c3RvbUNvbnRlbnQiLCAiY29udGVudCIsICJ3aWR0aCIsICJob2xkIiwgInBvc2UiLCAib2Zmc2V0IiwgImZyYW1lcyIsICJBcnJheSIsICJmcm9tIiwgImxlbmd0aCIsICJBbmltYXRlZENsYXdkIiwgIiQiLCAiX2MiLCAiYm91bmNlT2Zmc2V0IiwgIm9uQ2xpY2siLCAidXNlQ2xhd2RBbmltYXRpb24iLCAidDAiLCAidDEiLCAidDIiLCAiQ0xBV0RfSEVJR0hUIiwgInJlZHVjZWRNb3Rpb24iLCAidXNlU3RhdGUiLCAiZ2V0SW5pdGlhbFNldHRpbmdzIiwgInByZWZlcnNSZWR1Y2VkTW90aW9uIiwgImZyYW1lSW5kZXgiLCAic2V0RnJhbWVJbmRleCIsICJzZXF1ZW5jZVJlZiIsICJ1c2VSZWYiLCAiSlVNUF9XQVZFIiwgImN1cnJlbnQiLCAiQ0xJQ0tfQU5JTUFUSU9OUyIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJ1c2VFZmZlY3QiLCAidGltZXIiLCAic2V0VGltZW91dCIsICJGUkFNRV9NUyIsICJpbmNyZW1lbnRGcmFtZSIsICJjbGVhclRpbWVvdXQiLCAic2VxIiwgIklETEUiLCAiTE9PS19BUk9VTkQiLCAiaSIsICJyZXNldElmUGFzc2VzUmVmcmVzaGVkIiwgInJlbWFpbmluZyIsICJnZXRDYWNoZWRSZW1haW5pbmdQYXNzZXMiLCAiY29uZmlnIiwgImdldEdsb2JhbENvbmZpZyIsICJsYXN0U2VlbiIsICJwYXNzZXNMYXN0U2VlblJlbWFpbmluZyIsICJzYXZlR2xvYmFsQ29uZmlnIiwgInByZXYiLCAicGFzc2VzVXBzZWxsU2VlbkNvdW50IiwgImhhc1Zpc2l0ZWRQYXNzZXMiLCAic2hvdWxkU2hvd0d1ZXN0UGFzc2VzVXBzZWxsIiwgImVsaWdpYmxlIiwgImhhc0NhY2hlIiwgImNoZWNrQ2FjaGVkUGFzc2VzRWxpZ2liaWxpdHkiLCAidXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsIiwgInNob3ciLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAiaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQiLCAibmV3Q291bnQiLCAibG9nRXZlbnQiLCAic2Vlbl9jb3VudCIsICJHdWVzdFBhc3Nlc1Vwc2VsbCIsICIkIiwgIl9jIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAicmV3YXJkIiwgImdldENhY2hlZFJlZmVycmVyUmV3YXJkIiwgImZvcm1hdENyZWRpdEFtb3VudCIsICJDb25kZW5zZWRMb2dvIiwgIiQiLCAiX2MiLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAiYWdlbnQiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAiLCAiZWZmb3J0VmFsdWUiLCAiX3RlbXAyIiwgIm1vZGVsIiwgInVzZU1haW5Mb29wTW9kZWwiLCAibW9kZWxEaXNwbGF5TmFtZSIsICJyZW5kZXJNb2RlbFNldHRpbmciLCAidmVyc2lvbiIsICJjd2QiLCAiYmlsbGluZ1R5cGUiLCAiYWdlbnROYW1lIiwgImFnZW50TmFtZUZyb21TZXR0aW5ncyIsICJnZXRMb2dvRGlzcGxheURhdGEiLCAic2hvd0d1ZXN0UGFzc2VzVXBzZWxsIiwgInVzZVNob3dHdWVzdFBhc3Nlc1Vwc2VsbCIsICJzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCIsICJ1c2VTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCIsICJ0MCIsICJ0MSIsICJpbmNyZW1lbnRHdWVzdFBhc3Nlc1NlZW5Db3VudCIsICJ1c2VFZmZlY3QiLCAidDIiLCAidDMiLCAiaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCIsICJ0ZXh0V2lkdGgiLCAiTWF0aCIsICJtYXgiLCAidHJ1bmNhdGVkVmVyc2lvbiIsICJ0cnVuY2F0ZSIsICJlZmZvcnRTdWZmaXgiLCAiZ2V0RWZmb3J0U3VmZml4IiwgInNob3VsZFNwbGl0IiwgInRydW5jYXRlZE1vZGVsIiwgInRydW5jYXRlZEJpbGxpbmciLCAiZm9ybWF0TW9kZWxBbmRCaWxsaW5nIiwgImN3ZEF2YWlsYWJsZVdpZHRoIiwgInN0cmluZ1dpZHRoIiwgInRydW5jYXRlZEN3ZCIsICJ0cnVuY2F0ZVBhdGgiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInNfMCIsICJzIiwgIkVtZXJnZW5jeVRpcCIsICJ0aXAiLCAidXNlTWVtbyIsICJnZXRUaXBPZkZlZWQiLCAibGFzdFNob3duVGlwIiwgImdldEdsb2JhbENvbmZpZyIsICJsYXN0U2hvd25FbWVyZ2VuY3lUaXAiLCAic2hvdWxkU2hvdyIsICJ1c2VFZmZlY3QiLCAic2F2ZUdsb2JhbENvbmZpZyIsICJjdXJyZW50IiwgImNvbG9yIiwgImRpbUNvbG9yIiwgImdldER5bmFtaWNDb25maWdfQ0FDSEVEX01BWV9CRV9TVEFMRSIsICJDT05GSUdfTkFNRSIsICJERUZBVUxUX1RJUCIsICJBbmltYXRlZEFzdGVyaXNrIiwgImNoYXIiLCAiVEVBUkRST1BfQVNURVJJU0siLCAicmVkdWNlZE1vdGlvbiIsICJ1c2VTdGF0ZSIsICJnZXRJbml0aWFsU2V0dGluZ3MiLCAicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCAiZG9uZSIsICJzZXREb25lIiwgInN0YXJ0VGltZVJlZiIsICJ1c2VSZWYiLCAicmVmIiwgInRpbWUiLCAidXNlQW5pbWF0aW9uRnJhbWUiLCAidXNlRWZmZWN0IiwgInQiLCAic2V0VGltZW91dCIsICJUT1RBTF9BTklNQVRJT05fTVMiLCAiY2xlYXJUaW1lb3V0IiwgIlNFVFRMRURfR1JFWSIsICJjdXJyZW50IiwgImVsYXBzZWQiLCAiaHVlIiwgIlNXRUVQX0RVUkFUSU9OX01TIiwgInRvUkdCQ29sb3IiLCAiaHVlVG9SZ2IiLCAiU1dFRVBfQ09VTlQiLCAiaW5pdF9maWd1cmVzIiwgInIiLCAiZyIsICJiIiwgInNob3VsZFNob3dPcHVzMW1NZXJnZU5vdGljZSIsICJpc09wdXMxbU1lcmdlRW5hYmxlZCIsICJnZXRHbG9iYWxDb25maWciLCAib3B1czFtTWVyZ2VOb3RpY2VTZWVuQ291bnQiLCAiTUFYX1NIT1dfQ09VTlQiLCAiT3B1czFtTWVyZ2VOb3RpY2UiLCAiJCIsICJfYyIsICJzaG93IiwgInVzZVN0YXRlIiwgInQwIiwgInQxIiwgIm5ld0NvdW50IiwgInNhdmVHbG9iYWxDb25maWciLCAicHJldiIsICJ1c2VFZmZlY3QiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJVUF9BUlJPVyIsICJpbml0X2ZpZ3VyZXMiLCAiVm9pY2VNb2RlTm90aWNlIiwgIiQiLCAiX2MiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJmZWF0dXJlIiwgIlZvaWNlTW9kZU5vdGljZUlubmVyIiwgInNob3ciLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAidDEiLCAibmV3Q291bnQiLCAiZ2V0R2xvYmFsQ29uZmlnIiwgInZvaWNlTm90aWNlU2VlbkNvdW50IiwgInNhdmVHbG9iYWxDb25maWciLCAicHJldiIsICJ1c2VFZmZlY3QiLCAidDIiLCAiaXNWb2ljZU1vZGVFbmFibGVkIiwgImdldEluaXRpYWxTZXR0aW5ncyIsICJ2b2ljZUVuYWJsZWQiLCAiTUFYX1NIT1dfQ09VTlQiLCAic2hvdWxkU2hvd09wdXMxbU1lcmdlTm90aWNlIiwgIkNoYW5uZWxzTm90aWNlIiwgIiQiLCAiX2MiLCAidDAiLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAiY2hhbm5lbHMiLCAiZGlzYWJsZWQiLCAibm9BdXRoIiwgInBvbGljeUJsb2NrZWQiLCAibGlzdCIsICJ1bm1hdGNoZWQiLCAibGVuZ3RoIiwgImhhc05vbkRldiIsICJzb21lIiwgIl90ZW1wMiIsICJmbGFnIiwgImdldEhhc0RldkNoYW5uZWxzIiwgInQxIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAidDMiLCAidDQiLCAibWFwIiwgIl90ZW1wMyIsICJ0NSIsICJfdGVtcDQiLCAidV8wIiwgImZvcm1hdEVudHJ5IiwgInUiLCAiZW50cnkiLCAid2h5IiwgImMiLCAiZGV2IiwgImNoIiwgImdldEFsbG93ZWRDaGFubmVscyIsICJsIiwgImpvaW4iLCAic3ViIiwgImdldFN1YnNjcmlwdGlvblR5cGUiLCAibWFuYWdlZCIsICJwb2xpY3kiLCAiZ2V0U2V0dGluZ3NGb3JTb3VyY2UiLCAiYWxsb3dsaXN0IiwgImdldEVmZmVjdGl2ZUNoYW5uZWxBbGxvd2xpc3QiLCAiYWxsb3dlZENoYW5uZWxQbHVnaW5zIiwgImlzQ2hhbm5lbHNFbmFibGVkIiwgImdldENsYXVkZUFJT0F1dGhUb2tlbnMiLCAiYWNjZXNzVG9rZW4iLCAiY2hhbm5lbHNFbmFibGVkIiwgImZpbmRVbm1hdGNoZWQiLCAia2luZCIsICJuYW1lIiwgIm1hcmtldHBsYWNlIiwgImVudHJpZXMiLCAic2NvcGVzIiwgImNvbmZpZ3VyZWQiLCAiU2V0IiwgInNjb3BlIiwgIk9iamVjdCIsICJrZXlzIiwgImdldE1jcENvbmZpZ3NCeVNjb3BlIiwgInNlcnZlcnMiLCAiYWRkIiwgImluc3RhbGxlZFBsdWdpbklkcyIsICJsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIiwgInBsdWdpbnMiLCAiYWxsb3dlZCIsICJzb3VyY2UiLCAib3V0IiwgImhhcyIsICJwdXNoIiwgImUiLCAicGx1Z2luIiwgImluaXRfY29uZmlnIiwgIkxvZ29WMiIsICIkIiwgIl9jIiwgImFjdGl2aXRpZXMiLCAiZ2V0UmVjZW50QWN0aXZpdHlTeW5jIiwgInVzZXJuYW1lIiwgImdldEdsb2JhbENvbmZpZyIsICJvYXV0aEFjY291bnQiLCAiZGlzcGxheU5hbWUiLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJzaG91bGRTaG93UHJvamVjdE9uYm9hcmRpbmciLCAic2hvd09uYm9hcmRpbmciLCAidDEiLCAiU2FuZGJveE1hbmFnZXIiLCAiaXNTYW5kYm94aW5nRW5hYmxlZCIsICJzaG93U2FuZGJveFN0YXR1cyIsICJzaG93R3Vlc3RQYXNzZXNVcHNlbGwiLCAidXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsIiwgInNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsIiwgInVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsIiwgImFnZW50IiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgImVmZm9ydFZhbHVlIiwgIl90ZW1wMiIsICJjb25maWciLCAiY2hhbmdlbG9nIiwgImdldFJlY2VudFJlbGVhc2VOb3Rlc1N5bmMiLCAiYW5ub3VuY2VtZW50IiwgInVzZVN0YXRlIiwgImFubm91bmNlbWVudHMiLCAiZ2V0SW5pdGlhbFNldHRpbmdzIiwgImNvbXBhbnlBbm5vdW5jZW1lbnRzIiwgImxlbmd0aCIsICJudW1TdGFydHVwcyIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJoYXNSZWxlYXNlTm90ZXMiLCAiY2hlY2tGb3JSZWxlYXNlTm90ZXNTeW5jIiwgImxhc3RSZWxlYXNlTm90ZXNTZWVuIiwgInQyIiwgImN1cnJlbnRDb25maWciLCAiTUFDUk8iLCAiVkVSU0lPTiIsICJzYXZlR2xvYmFsQ29uZmlnIiwgIl90ZW1wMyIsICJpbmNyZW1lbnRQcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCIsICJ0MyIsICJ1c2VFZmZlY3QiLCAidDQiLCAiaXNFbnZUcnV0aHkiLCAicHJvY2VzcyIsICJlbnYiLCAiQ0xBVURFX0NPREVfRk9SQ0VfRlVMTF9MT0dPIiwgImlzQ29uZGVuc2VkTW9kZSIsICJ0NSIsICJ0NiIsICJpbmNyZW1lbnRHdWVzdFBhc3Nlc1NlZW5Db3VudCIsICJ0NyIsICJ0OCIsICJpbmNyZW1lbnRPdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50IiwgIm1vZGVsIiwgInVzZU1haW5Mb29wTW9kZWwiLCAiZnVsbE1vZGVsRGlzcGxheU5hbWUiLCAicmVuZGVyTW9kZWxTZXR0aW5nIiwgInZlcnNpb24iLCAiY3dkIiwgImJpbGxpbmdUeXBlIiwgImFnZW50TmFtZSIsICJhZ2VudE5hbWVGcm9tU2V0dGluZ3MiLCAiZ2V0TG9nb0Rpc3BsYXlEYXRhIiwgImVmZm9ydFN1ZmZpeCIsICJnZXRFZmZvcnRTdWZmaXgiLCAidDkiLCAidDEwIiwgInRydW5jYXRlIiwgIkxFRlRfUEFORUxfTUFYX1dJRFRIIiwgIm1vZGVsRGlzcGxheU5hbWUiLCAidDExIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAidDE3IiwgIkNoYW5uZWxzTm90aWNlTW9kdWxlIiwgImlzRGVidWdNb2RlIiwgImlzRGVidWdUb1N0ZEVyciIsICJnZXREZWJ1Z0xvZ1BhdGgiLCAiQ0xBVURFX0NPREVfVE1VWF9TRVNTSU9OIiwgIkNMQVVERV9DT0RFX1RNVVhfUFJFRklYX0NPTkZMSUNUUyIsICJDTEFVREVfQ09ERV9UTVVYX1BSRUZJWCIsICJ0MTgiLCAiSVNfREVNTyIsICJvcmdhbml6YXRpb25OYW1lIiwgInQxOSIsICJ0MjAiLCAidDIxIiwgInQyMiIsICJ0MjMiLCAibGF5b3V0TW9kZSIsICJnZXRMYXlvdXRNb2RlIiwgInVzZXJUaGVtZSIsICJyZXNvbHZlVGhlbWVTZXR0aW5nIiwgInRoZW1lIiwgImJvcmRlclRpdGxlIiwgImNvbG9yIiwgImNvbXBhY3RCb3JkZXJUaXRsZSIsICJ3ZWxjb21lTWVzc2FnZSIsICJmb3JtYXRXZWxjb21lTWVzc2FnZSIsICJzdHJpbmdXaWR0aCIsICJjd2RBdmFpbGFibGVXaWR0aCIsICJ0cnVuY2F0ZWRDd2QiLCAidHJ1bmNhdGVQYXRoIiwgIm1heCIsICJjb250ZW50IiwgInBvc2l0aW9uIiwgImFsaWduIiwgIm9mZnNldCIsICJ3ZWxjb21lTWVzc2FnZV8wIiwgIm1vZGVsTGluZSIsICJjd2RBdmFpbGFibGVXaWR0aF8wIiwgInRydW5jYXRlZEN3ZF8wIiwgImN3ZExpbmUiLCAib3B0aW1hbExlZnRXaWR0aCIsICJjYWxjdWxhdGVPcHRpbWFsTGVmdFdpZHRoIiwgImxlZnRXaWR0aCIsICJyaWdodFdpZHRoIiwgImNhbGN1bGF0ZUxheW91dERpbWVuc2lvbnMiLCAiVDAiLCAiT2Zmc2NyZWVuRnJlZXplIiwgIlQxIiwgIkJveCIsICJUMiIsICJ0MjQiLCAidDI1IiwgImNyZWF0ZVByb2plY3RPbmJvYXJkaW5nRmVlZCIsICJnZXRTdGVwcyIsICJjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQiLCAiY3JlYXRlR3Vlc3RQYXNzZXNGZWVkIiwgImNyZWF0ZU92ZXJhZ2VDcmVkaXRGZWVkIiwgImNyZWF0ZVdoYXRzTmV3RmVlZCIsICJ0MjYiLCAidDI3IiwgInQyOCIsICJ0MjkiLCAidDMwIiwgInQzMSIsICJ0MzIiLCAidDMzIiwgInQzNCIsICJ0MzUiLCAidDM2IiwgInQzNyIsICJ0MzgiLCAidDM5IiwgInQ0MCIsICJ0NDEiLCAiY3VycmVudCIsICJzXzAiLCAicyIsICJmZWF0dXJlIiwgInJlcXVpcmUiLCAiTWVzc2FnZU1vZGVsIiwgInQwIiwgIiQiLCAiX2MiLCAibWVzc2FnZSIsICJpc1RyYW5zY3JpcHRNb2RlIiwgInNob3VsZFNob3dNb2RlbCIsICJ0eXBlIiwgIm1vZGVsIiwgImNvbnRlbnQiLCAic29tZSIsICJfdGVtcCIsICJ0MSIsICJzdHJpbmdXaWR0aCIsICJ0MiIsICJ0MyIsICJjIiwgIk1lc3NhZ2VUaW1lc3RhbXAiLCAidDAiLCAiJCIsICJfYyIsICJtZXNzYWdlIiwgImlzVHJhbnNjcmlwdE1vZGUiLCAic2hvdWxkU2hvd1RpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidHlwZSIsICJjb250ZW50IiwgInNvbWUiLCAiX3RlbXAiLCAiVDAiLCAiZm9ybWF0dGVkVGltZXN0YW1wIiwgInQxIiwgIkRhdGUiLCAidG9Mb2NhbGVUaW1lU3RyaW5nIiwgImhvdXIiLCAibWludXRlIiwgImhvdXIxMiIsICJCb3giLCAic3RyaW5nV2lkdGgiLCAidDIiLCAidDMiLCAiYyIsICJoYXNDb250ZW50QWZ0ZXJJbmRleCIsICJtZXNzYWdlcyIsICJpbmRleCIsICJ0b29scyIsICJzdHJlYW1pbmdUb29sVXNlSURzIiwgImkiLCAibGVuZ3RoIiwgIm1zZyIsICJ0eXBlIiwgImNvbnRlbnQiLCAibWVzc2FnZSIsICJnZXRUb29sU2VhcmNoT3JSZWFkSW5mbyIsICJuYW1lIiwgImlucHV0IiwgImlzQ29sbGFwc2libGUiLCAiaGFzIiwgImlkIiwgImZpcnN0SW5wdXQiLCAidG9vbE5hbWUiLCAiTWVzc2FnZVJvd0ltcGwiLCAidDAiLCAiJCIsICJfYyIsICJpc1VzZXJDb250aW51YXRpb24iLCAiaGFzQ29udGVudEFmdGVyIiwgImNvbW1hbmRzIiwgInZlcmJvc2UiLCAiaW5Qcm9ncmVzc1Rvb2xVc2VJRHMiLCAic2NyZWVuIiwgImNhbkFuaW1hdGUiLCAib25PcGVuUmF0ZUxpbWl0T3B0aW9ucyIsICJsYXN0VGhpbmtpbmdCbG9ja0lkIiwgImxhdGVzdEJhc2hPdXRwdXRVVUlEIiwgImNvbHVtbnMiLCAiaXNMb2FkaW5nIiwgImxvb2t1cHMiLCAiaXNUcmFuc2NyaXB0TW9kZSIsICJpc0dyb3VwZWQiLCAiaXNDb2xsYXBzZWQiLCAidDEiLCAiaGFzQW55VG9vbEluUHJvZ3Jlc3MiLCAiaXNBY3RpdmVDb2xsYXBzZWRHcm91cCIsICJ0MiIsICJkaXNwbGF5TWVzc2FnZSIsICJnZXREaXNwbGF5TWVzc2FnZUZyb21Db2xsYXBzZWQiLCAiZGlzcGxheU1zZyIsICJ0MyIsICJnZXRQcm9ncmVzc01lc3NhZ2VzRnJvbUxvb2t1cCIsICJwcm9ncmVzc01lc3NhZ2VzRm9yTWVzc2FnZSIsICJ0NCIsICJzaWJsaW5nVG9vbFVzZUlEcyIsICJFTVBUWV9TVFJJTkdfU0VUIiwgImdldFNpYmxpbmdUb29sVXNlSURzRnJvbUxvb2t1cCIsICJzaG91bGRSZW5kZXJTdGF0aWNhbGx5IiwgImlzU3RhdGljIiwgInNob3VsZEFuaW1hdGUiLCAidDUiLCAidDYiLCAibSIsICJzb21lIiwgInRvb2xVc2VJRCIsICJnZXRUb29sVXNlSUQiLCAiX3RlbXAiLCAidGltZXN0YW1wIiwgIm1vZGVsIiwgImhhc01ldGFkYXRhIiwgInQ3IiwgInVuZGVmaW5lZCIsICJ0OCIsICJtZXNzYWdlRWwiLCAidDkiLCAidDEwIiwgImMiLCAiaXNNZXNzYWdlU3RyZWFtaW5nIiwgInRvb2xJZHMiLCAiZ2V0VG9vbFVzZUlkc0Zyb21Db2xsYXBzZWRHcm91cCIsICJhbGxUb29sc1Jlc29sdmVkIiwgInJlc29sdmVkVG9vbFVzZUlEcyIsICJldmVyeSIsICJibG9jayIsICJhcmVNZXNzYWdlUm93UHJvcHNFcXVhbCIsICJwcmV2IiwgIm5leHQiLCAicHJldklzTGF0ZXN0QmFzaCIsICJ1dWlkIiwgIm5leHRJc0xhdGVzdEJhc2giLCAiaGFzVGhpbmtpbmdDb250ZW50IiwgImlzU3RyZWFtaW5nIiwgImlzUmVzb2x2ZWQiLCAiTWVzc2FnZVJvdyIsICJtZW1vIiwgInJlbGF0aXZlIiwgImdldEFjdGl2ZU5vdGljZXMiLCAiY29udGV4dCIsICJzdGF0dXNOb3RpY2VEZWZpbml0aW9ucyIsICJmaWx0ZXIiLCAibm90aWNlIiwgImlzQWN0aXZlIiwgImxhcmdlTWVtb3J5RmlsZXNOb3RpY2UiLCAiY2xhdWRlQWlTdWJzY3JpYmVyRXh0ZXJuYWxUb2tlbk5vdGljZSIsICJhcGlLZXlDb25mbGljdE5vdGljZSIsICJib3RoQXV0aE1ldGhvZHNOb3RpY2UiLCAibGFyZ2VBZ2VudERlc2NyaXB0aW9uc05vdGljZSIsICJqZXRicmFpbnNQbHVnaW5Ob3RpY2UiLCAiaWQiLCAidHlwZSIsICJjdHgiLCAiZ2V0TGFyZ2VNZW1vcnlGaWxlcyIsICJtZW1vcnlGaWxlcyIsICJsZW5ndGgiLCAicmVuZGVyIiwgImxhcmdlTWVtb3J5RmlsZXMiLCAibWFwIiwgImZpbGUiLCAiZGlzcGxheVBhdGgiLCAicGF0aCIsICJzdGFydHNXaXRoIiwgImdldEN3ZCIsICJmaWd1cmVzIiwgIndhcm5pbmciLCAiZm9ybWF0TnVtYmVyIiwgImNvbnRlbnQiLCAiTUFYX01FTU9SWV9DSEFSQUNURVJfQ09VTlQiLCAiYXV0aFRva2VuSW5mbyIsICJnZXRBdXRoVG9rZW5Tb3VyY2UiLCAiaXNDbGF1ZGVBSVN1YnNjcmliZXIiLCAic291cmNlIiwgImFwaUtleVNvdXJjZSIsICJnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlIiwgInNraXBSZXRyaWV2aW5nS2V5RnJvbUFwaUtleUhlbHBlciIsICJnZXRBcGlLZXlGcm9tQ29uZmlnT3JNYWNPU0tleWNoYWluIiwgInRvdGFsVG9rZW5zIiwgImdldEFnZW50RGVzY3JpcHRpb25zVG90YWxUb2tlbnMiLCAiYWdlbnREZWZpbml0aW9ucyIsICJBR0VOVF9ERVNDUklQVElPTlNfVEhSRVNIT0xEIiwgImlzU3VwcG9ydGVkSmV0QnJhaW5zVGVybWluYWwiLCAic2hvdWxkQXV0b0luc3RhbGwiLCAiY29uZmlnIiwgImF1dG9JbnN0YWxsSWRlRXh0ZW5zaW9uIiwgImlkZVR5cGUiLCAiZ2V0VGVybWluYWxJZGVUeXBlIiwgImlzSmV0QnJhaW5zUGx1Z2luSW5zdGFsbGVkQ2FjaGVkU3luYyIsICJpZGVOYW1lIiwgInRvSURFRGlzcGxheU5hbWUiLCAiYXJyb3dVcCIsICJTdGF0dXNOb3RpY2VzIiwgInQwIiwgIiQiLCAiX2MiLCAiYWdlbnREZWZpbml0aW9ucyIsICJ1bmRlZmluZWQiLCAidDEiLCAiZ2V0R2xvYmFsQ29uZmlnIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAiZ2V0TWVtb3J5RmlsZXMiLCAiY29udGV4dCIsICJjb25maWciLCAibWVtb3J5RmlsZXMiLCAidXNlIiwgImFjdGl2ZU5vdGljZXMiLCAiZ2V0QWN0aXZlTm90aWNlcyIsICJsZW5ndGgiLCAiVDAiLCAiQm94IiwgInQzIiwgInQ0IiwgInQ1IiwgIm1hcCIsICJub3RpY2UiLCAiaWQiLCAicmVuZGVyIiwgInQ2IiwgImxpc3RPcmlnaW4iLCAibmVlZGVkIiwgImNvdmVyYWdlIiwgImRlZmF1bHRFeHRyYWN0U2VhcmNoVGV4dCIsICJtc2ciLCAiY2FjaGVkIiwgImZhbGxiYWNrTG93ZXJDYWNoZSIsICJnZXQiLCAidW5kZWZpbmVkIiwgImxvd2VyZWQiLCAicmVuZGVyYWJsZVNlYXJjaFRleHQiLCAic2V0IiwgInN0aWNreVByb21wdFRleHQiLCAicHJvbXB0VGV4dENhY2hlIiwgInJlc3VsdCIsICJjb21wdXRlU3RpY2t5UHJvbXB0VGV4dCIsICJyYXciLCAidHlwZSIsICJpc01ldGEiLCAiaXNWaXNpYmxlSW5UcmFuc2NyaXB0T25seSIsICJibG9jayIsICJtZXNzYWdlIiwgImNvbnRlbnQiLCAidGV4dCIsICJhdHRhY2htZW50IiwgImNvbW1hbmRNb2RlIiwgInAiLCAicHJvbXB0IiwgImZsYXRNYXAiLCAiYiIsICJqb2luIiwgInQiLCAic3RyaXBTeXN0ZW1SZW1pbmRlcnMiLCAic3RhcnRzV2l0aCIsICJWaXJ0dWFsSXRlbSIsICJ0MCIsICIkIiwgIl9jIiwgIml0ZW1LZXkiLCAiayIsICJpZHgiLCAibWVhc3VyZVJlZiIsICJleHBhbmRlZCIsICJob3ZlcmVkIiwgImNsaWNrYWJsZSIsICJvbkNsaWNrSyIsICJvbkVudGVySyIsICJvbkxlYXZlSyIsICJyZW5kZXJJdGVtIiwgInQxIiwgInQyIiwgInQzIiwgInQ0IiwgImUiLCAiY2VsbElzQmxhbmsiLCAidDUiLCAidDYiLCAidDciLCAidDgiLCAidDkiLCAidDEwIiwgIlZpcnR1YWxNZXNzYWdlTGlzdCIsICJtZXNzYWdlcyIsICJzY3JvbGxSZWYiLCAiY29sdW1ucyIsICJvbkl0ZW1DbGljayIsICJpc0l0ZW1DbGlja2FibGUiLCAiaXNJdGVtRXhwYW5kZWQiLCAiZXh0cmFjdFNlYXJjaFRleHQiLCAidHJhY2tTdGlja3lQcm9tcHQiLCAic2VsZWN0ZWRJbmRleCIsICJjdXJzb3JOYXZSZWYiLCAic2V0Q3Vyc29yIiwgImp1bXBSZWYiLCAib25TZWFyY2hNYXRjaGVzQ2hhbmdlIiwgInNjYW5FbGVtZW50IiwgInNldFBvc2l0aW9ucyIsICJrZXlzUmVmIiwgInVzZVJlZiIsICJwcmV2TWVzc2FnZXNSZWYiLCAicHJldkl0ZW1LZXlSZWYiLCAiY3VycmVudCIsICJsZW5ndGgiLCAibWFwIiwgIm0iLCAiaSIsICJwdXNoIiwgImtleXMiLCAicmFuZ2UiLCAidG9wU3BhY2VyIiwgImJvdHRvbVNwYWNlciIsICJzcGFjZXJSZWYiLCAib2Zmc2V0cyIsICJnZXRJdGVtVG9wIiwgImdldEl0ZW1FbGVtZW50IiwgImdldEl0ZW1IZWlnaHQiLCAic2Nyb2xsVG9JbmRleCIsICJ1c2VWaXJ0dWFsU2Nyb2xsIiwgInN0YXJ0IiwgImVuZCIsICJpc1Zpc2libGUiLCAidXNlQ2FsbGJhY2siLCAiaCIsICJpc05hdmlnYWJsZU1lc3NhZ2UiLCAidXNlSW1wZXJhdGl2ZUhhbmRsZSIsICJzZWxlY3QiLCAidXVpZCIsICJtc2dUeXBlIiwgInRvb2xOYW1lIiwgInRvb2xDYWxsT2YiLCAibmFtZSIsICJzZWxJZHgiLCAic2NhbiIsICJmcm9tIiwgImRpciIsICJwcmVkIiwgImlzVXNlciIsICJlbnRlckN1cnNvciIsICJuYXZpZ2F0ZVByZXYiLCAibmF2aWdhdGVOZXh0IiwgInNjcm9sbFRvQm90dG9tIiwgIm5hdmlnYXRlUHJldlVzZXIiLCAibmF2aWdhdGVOZXh0VXNlciIsICJuYXZpZ2F0ZVRvcCIsICJuYXZpZ2F0ZUJvdHRvbSIsICJnZXRTZWxlY3RlZCIsICJqdW1wU3RhdGUiLCAidXNlRWZmZWN0IiwgInMiLCAiZWwiLCAic2Nyb2xsVG9FbGVtZW50IiwgInNjYW5SZXF1ZXN0UmVmIiwgImVsZW1lbnRQb3NpdGlvbnMiLCAibXNnSWR4IiwgInBvc2l0aW9ucyIsICJzdGFydFB0clJlZiIsICJwaGFudG9tQnVyc3RSZWYiLCAicGVuZGluZ1N0ZXBSZWYiLCAic3RlcFJlZiIsICJoaWdobGlnaHRSZWYiLCAic2VhcmNoU3RhdGUiLCAibWF0Y2hlcyIsICJwdHIiLCAic2NyZWVuT3JkIiwgInByZWZpeFN1bSIsICJzZWFyY2hBbmNob3IiLCAiaW5kZXhXYXJtZWQiLCAidGFyZ2V0Rm9yIiwgInRvcCIsICJNYXRoIiwgIm1heCIsICJIRUFEUk9PTSIsICJoaWdobGlnaHQiLCAib3JkIiwgIm1pbiIsICJ2cFRvcCIsICJnZXRWaWV3cG9ydFRvcCIsICJsbyIsICJnZXRTY3JvbGxUb3AiLCAidnAiLCAiZ2V0Vmlld3BvcnRIZWlnaHQiLCAic2NyZWVuUm93IiwgInJvdyIsICJzY3JvbGxUbyIsICJyb3dPZmZzZXQiLCAiY3VycmVudElkeCIsICJzdCIsICJ0b3RhbCIsICJhdCIsICJsb2dGb3JEZWJ1Z2dpbmciLCAiY29sIiwgInNlZWtHZW4iLCAic2V0U2Vla0dlbiIsICJ1c2VTdGF0ZSIsICJidW1wU2VlayIsICJnIiwgInJlcSIsICJ3YW50TGFzdCIsICJ0cmllcyIsICJ5b2dhTm9kZSIsICJnZXRDb21wdXRlZEhlaWdodCIsICJwZW5kaW5nIiwgImp1bXAiLCAianMiLCAic3RlcCIsICJkZWx0YSIsICJuZXdPcmQiLCAicGxhY2Vob2xkZXIiLCAianVtcFRvSW5kZXgiLCAic2V0U2VhcmNoUXVlcnkiLCAicSIsICJscSIsICJ0b0xvd2VyQ2FzZSIsICJtc2dzIiwgInBvcyIsICJpbmRleE9mIiwgImNudCIsICJmaXJzdFRvcCIsICJvcmlnaW4iLCAiY3VyVG9wIiwgImJlc3QiLCAiSW5maW5pdHkiLCAiZCIsICJhYnMiLCAibmV4dE1hdGNoIiwgInByZXZNYXRjaCIsICJzZXRBbmNob3IiLCAiZGlzYXJtU2VhcmNoIiwgIndhcm1TZWFyY2hJbmRleCIsICJDSFVOSyIsICJ3b3JrTXMiLCAid2FsbFN0YXJ0IiwgInBlcmZvcm1hbmNlIiwgIm5vdyIsICJzbGVlcCIsICJqIiwgIndhbGxNcyIsICJyb3VuZCIsICJjZWlsIiwgImhvdmVyZWRLZXkiLCAic2V0SG92ZXJlZEtleSIsICJoYW5kbGVyc1JlZiIsICJwcmV2IiwgInNsaWNlIiwgIlN0aWNreVRyYWNrZXIiLCAic2V0U3RpY2t5UHJvbXB0IiwgInVzZUNvbnRleHQiLCAiU2Nyb2xsQ2hyb21lQ29udGV4dCIsICJzdWJzY3JpYmUiLCAibGlzdGVuZXIiLCAiTk9PUF9VTlNVQiIsICJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsICJOYU4iLCAiZ2V0UGVuZGluZ0RlbHRhIiwgImlzU3RpY2t5IiwgInRhcmdldCIsICJmaXJzdFZpc2libGUiLCAiZmlyc3RWaXNpYmxlVG9wIiwgImJhc2VPZmZzZXQiLCAiZXN0aW1hdGUiLCAic3VwcHJlc3MiLCAibGFzdElkeCIsICJmb3JjZSIsICJ0cmltbWVkIiwgInRyaW1TdGFydCIsICJwYXJhRW5kIiwgInNlYXJjaCIsICJjb2xsYXBzZWQiLCAiU1RJQ0tZX1RFWFRfQ0FQIiwgInJlcGxhY2UiLCAidHJpbSIsICJjYXB0dXJlZElkeCIsICJjYXB0dXJlZEVzdGltYXRlIiwgIldlYWtNYXAiLCAiZmlsdGVyRm9yQnJpZWZUb29sIiwgIm1lc3NhZ2VzIiwgImJyaWVmVG9vbE5hbWVzIiwgIm5hbWVTZXQiLCAiU2V0IiwgImJyaWVmVG9vbFVzZUlEcyIsICJmaWx0ZXIiLCAibXNnIiwgInR5cGUiLCAic3VidHlwZSIsICJibG9jayIsICJtZXNzYWdlIiwgImNvbnRlbnQiLCAiaXNBcGlFcnJvck1lc3NhZ2UiLCAibmFtZSIsICJoYXMiLCAiYWRkIiwgImlkIiwgInRvb2xfdXNlX2lkIiwgInVuZGVmaW5lZCIsICJpc01ldGEiLCAiYXR0IiwgImF0dGFjaG1lbnQiLCAiY29tbWFuZE1vZGUiLCAib3JpZ2luIiwgImRyb3BUZXh0SW5CcmllZlR1cm5zIiwgInR1cm5zV2l0aEJyaWVmIiwgInRleHRJbmRleFRvVHVybiIsICJ0dXJuIiwgImkiLCAibGVuZ3RoIiwgInNpemUiLCAiXyIsICJ0IiwgImNvbXB1dGVTbGljZVN0YXJ0IiwgImNvbGxhcHNlZCIsICJhbmNob3JSZWYiLCAiY2FwIiwgIk1BWF9NRVNTQUdFU19XSVRIT1VUX1ZJUlRVQUxJWkFUSU9OIiwgInN0ZXAiLCAiTUVTU0FHRV9DQVBfU1RFUCIsICJhbmNob3IiLCAiY3VycmVudCIsICJhbmNob3JJZHgiLCAiZmluZEluZGV4IiwgIm0iLCAidXVpZCIsICJzdGFydCIsICJNYXRoIiwgIm1pbiIsICJpZHgiLCAibWF4IiwgIm1zZ0F0U3RhcnQiLCAiZXhwYW5kS2V5IiwgImdldFRvb2xVc2VJRCIsICJzZXRzRXF1YWwiLCAiYSIsICJiIiwgIml0ZW0iLCAic2hvdWxkUmVuZGVyU3RhdGljYWxseSIsICJzdHJlYW1pbmdUb29sVXNlSURzIiwgImluUHJvZ3Jlc3NUb29sVXNlSURzIiwgInNpYmxpbmdUb29sVXNlSURzIiwgInNjcmVlbiIsICJsb29rdXBzIiwgInJlc29sdmVkVG9vbFVzZUlEcyIsICJ0b29sVXNlSUQiLCAiaGFzVW5yZXNvbHZlZEhvb2tzRnJvbUxvb2t1cCIsICJldmVyeSIsICJhbGxSZXNvbHZlZCIsICJMb2dvSGVhZGVyIiwgInByb2FjdGl2ZU1vZHVsZSIsICJCUklFRl9UT09MX05BTUUiLCAiU0VORF9VU0VSX0ZJTEVfVE9PTF9OQU1FIiwgIk1BWF9NRVNTQUdFU19UT19TSE9XX0lOX1RSQU5TQ1JJUFRfTU9ERSIsICJNZXNzYWdlc0ltcGwiLCAiTWVzc2FnZXMiLCAiaW5pdF9maWd1cmVzIiwgIm1lbW8iLCAidDAiLCAiJCIsICJfYyIsICJhZ2VudERlZmluaXRpb25zIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAidDIiLCAiZmVhdHVyZSIsICJyZXF1aXJlIiwgInRvb2xzIiwgImNvbW1hbmRzIiwgInZlcmJvc2UiLCAidG9vbEpTWCIsICJ0b29sVXNlQ29uZmlybVF1ZXVlIiwgImlzTWVzc2FnZVNlbGVjdG9yVmlzaWJsZSIsICJjb252ZXJzYXRpb25JZCIsICJzdHJlYW1pbmdUb29sVXNlcyIsICJzaG93QWxsSW5UcmFuc2NyaXB0IiwgIm9uT3BlblJhdGVMaW1pdE9wdGlvbnMiLCAiaGlkZUxvZ28iLCAiaXNMb2FkaW5nIiwgImhpZGVQYXN0VGhpbmtpbmciLCAic3RyZWFtaW5nVGhpbmtpbmciLCAic3RyZWFtaW5nVGV4dCIsICJpc0JyaWVmT25seSIsICJ1bnNlZW5EaXZpZGVyIiwgInNjcm9sbFJlZiIsICJ0cmFja1N0aWNreVByb21wdCIsICJqdW1wUmVmIiwgIm9uU2VhcmNoTWF0Y2hlc0NoYW5nZSIsICJzY2FuRWxlbWVudCIsICJzZXRQb3NpdGlvbnMiLCAiZGlzYWJsZVJlbmRlckNhcCIsICJjdXJzb3IiLCAic2V0Q3Vyc29yIiwgImN1cnNvck5hdlJlZiIsICJyZW5kZXJSYW5nZSIsICJjb2x1bW5zIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJ0b2dnbGVTaG93QWxsU2hvcnRjdXQiLCAidXNlU2hvcnRjdXREaXNwbGF5IiwgIm5vcm1hbGl6ZWRNZXNzYWdlcyIsICJ1c2VNZW1vIiwgIm5vcm1hbGl6ZU1lc3NhZ2VzIiwgImlzTm90RW1wdHlNZXNzYWdlIiwgImlzU3RyZWFtaW5nVGhpbmtpbmdWaXNpYmxlIiwgImlzU3RyZWFtaW5nIiwgInN0cmVhbWluZ0VuZGVkQXQiLCAiRGF0ZSIsICJub3ciLCAibGFzdFRoaW5raW5nQmxvY2tJZCIsICJqIiwgImhhc1Rvb2xSZXN1bHQiLCAic29tZSIsICJsYXRlc3RCYXNoT3V0cHV0VVVJRCIsICJ0ZXh0IiwgInN0YXJ0c1dpdGgiLCAibm9ybWFsaXplZFRvb2xVc2VJRHMiLCAiZ2V0VG9vbFVzZUlEcyIsICJzdHJlYW1pbmdUb29sVXNlc1dpdGhvdXRJblByb2dyZXNzIiwgInN0dSIsICJjb250ZW50QmxvY2siLCAic3ludGhldGljU3RyZWFtaW5nVG9vbFVzZU1lc3NhZ2VzIiwgImZsYXRNYXAiLCAic3RyZWFtaW5nVG9vbFVzZSIsICJjcmVhdGVBc3Npc3RhbnRNZXNzYWdlIiwgImRlcml2ZVVVSUQiLCAiaXNUcmFuc2NyaXB0TW9kZSIsICJkaXNhYmxlVmlydHVhbFNjcm9sbCIsICJpc0VudlRydXRoeSIsICJwcm9jZXNzIiwgImVudiIsICJDTEFVREVfQ09ERV9ESVNBQkxFX1ZJUlRVQUxfU0NST0xMIiwgInZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZSIsICJzaG91bGRUcnVuY2F0ZSIsICJzbGljZUFuY2hvclJlZiIsICJ1c2VSZWYiLCAiaGFzVHJ1bmNhdGVkTWVzc2FnZXMiLCAiaGlkZGVuTWVzc2FnZUNvdW50IiwgImNvbXBhY3RBd2FyZU1lc3NhZ2VzIiwgImlzRnVsbHNjcmVlbkVudkVuYWJsZWQiLCAiZ2V0TWVzc2FnZXNBZnRlckNvbXBhY3RCb3VuZGFyeSIsICJpbmNsdWRlU25pcHBlZCIsICJtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZCIsICJyZW9yZGVyTWVzc2FnZXNJblVJIiwgImlzTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnQiLCAic2hvdWxkU2hvd1VzZXJNZXNzYWdlIiwgIm4iLCAiZHJvcFRleHRUb29sTmFtZXMiLCAiYnJpZWZGaWx0ZXJlZCIsICJtZXNzYWdlc1RvU2hvdyIsICJzbGljZSIsICJncm91cGVkTWVzc2FnZXMiLCAiYXBwbHlHcm91cGluZyIsICJjb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucyIsICJjb2xsYXBzZUhvb2tTdW1tYXJpZXMiLCAiY29sbGFwc2VUZWFtbWF0ZVNodXRkb3ducyIsICJjb2xsYXBzZVJlYWRTZWFyY2hHcm91cHMiLCAiYnVpbGRNZXNzYWdlTG9va3VwcyIsICJyZW5kZXJhYmxlTWVzc2FnZXMiLCAiY2FwQXBwbGllcyIsICJzbGljZVN0YXJ0IiwgIm1hcCIsICJkaXZpZGVyQmVmb3JlSW5kZXgiLCAicHJlZml4IiwgImZpcnN0VW5zZWVuVXVpZCIsICJzZWxlY3RlZElkeCIsICJleHBhbmRlZEtleXMiLCAic2V0RXhwYW5kZWRLZXlzIiwgInVzZVN0YXRlIiwgIm9uSXRlbUNsaWNrIiwgInVzZUNhbGxiYWNrIiwgImsiLCAicHJldiIsICJuZXh0IiwgImRlbGV0ZSIsICJpc0l0ZW1FeHBhbmRlZCIsICJsb29rdXBzUmVmIiwgImlzSXRlbUNsaWNrYWJsZSIsICJpc0Fkdmlzb3JCbG9jayIsICJpc19lcnJvciIsICJ0b29sVXNlUmVzdWx0IiwgInRvb2xVc2VCeVRvb2xVc2VJRCIsICJnZXQiLCAidG9vbCIsICJmaW5kVG9vbEJ5TmFtZSIsICJpc1Jlc3VsdFRydW5jYXRlZCIsICJjYW5BbmltYXRlIiwgInNob3VsZENvbnRpbnVlQW5pbWF0aW9uIiwgImhhc1Rvb2xzSW5Qcm9ncmVzcyIsICJwcm9ncmVzcyIsICJ1c2VUZXJtaW5hbE5vdGlmaWNhdGlvbiIsICJwcmV2UHJvZ3Jlc3NTdGF0ZSIsICJwcm9ncmVzc0VuYWJsZWQiLCAiZ2V0R2xvYmFsQ29uZmlnIiwgInRlcm1pbmFsUHJvZ3Jlc3NCYXJFbmFibGVkIiwgImdldElzUmVtb3RlTW9kZSIsICJpc1Byb2FjdGl2ZUFjdGl2ZSIsICJ1c2VFZmZlY3QiLCAic3RhdGUiLCAibWVzc2FnZUtleSIsICJyZW5kZXJNZXNzYWdlUm93IiwgImluZGV4IiwgInByZXZUeXBlIiwgImlzVXNlckNvbnRpbnVhdGlvbiIsICJoYXNDb250ZW50QWZ0ZXIiLCAiaGFzQ29udGVudEFmdGVySW5kZXgiLCAicm93IiwgImV4cGFuZGVkIiwgIndyYXBwZWQiLCAiY291bnQiLCAicGx1cmFsIiwgInNlYXJjaFRleHRDYWNoZSIsICJXZWFrTWFwIiwgImV4dHJhY3RTZWFyY2hUZXh0IiwgImNhY2hlZCIsICJyZW5kZXJhYmxlU2VhcmNoVGV4dCIsICJBcnJheSIsICJpc0FycmF5IiwgInRyIiwgImZpbmQiLCAidHUiLCAiZXh0cmFjdGVkIiwgImxvd2VyZWQiLCAidG9Mb3dlckNhc2UiLCAic2V0IiwgImNoYWxrIiwgImJvbGQiLCAiQkxBQ0tfQ0lSQ0xFIiwgInRoaW5raW5nIiwgImtleXMiLCAiT2JqZWN0IiwgImtleSIsICJwIl0KfQo=
