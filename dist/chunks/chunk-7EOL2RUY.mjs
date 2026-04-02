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
} from "./chunk-7XWSOXGK.mjs";
import {
  checkForReleaseNotesSync,
  init_releaseNotes
} from "./chunk-3CKXPEPP.mjs";
import {
  getEffectiveChannelAllowlist,
  init_channelNotification
} from "./chunk-OL5S76VS.mjs";
import {
  init_channelAllowlist,
  isChannelsEnabled
} from "./chunk-5VAWKU3E.mjs";
import {
  AGENT_DESCRIPTIONS_THRESHOLD,
  getAgentDescriptionsTotalTokens,
  init_statusNoticeHelpers
} from "./chunk-CK237OUO.mjs";
import {
  OverageCreditUpsell,
  createOverageCreditFeed,
  incrementOverageCreditUpsellSeenCount,
  init_OverageCreditUpsell,
  useShowOverageCreditUpsell
} from "./chunk-6DOUMYB2.mjs";
import {
  PromptInputFooterSuggestions_default,
  init_PromptInputFooterSuggestions
} from "./chunk-CMU6H2E2.mjs";
import {
  ScrollBox_default,
  init_ScrollBox
} from "./chunk-U2LTAULA.mjs";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-QHAFY3TI.mjs";
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
  init_config as init_config2,
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
} from "./chunk-FMU4URRE.mjs";
import {
  init_useShortcutDisplay,
  useShortcutDisplay
} from "./chunk-PEMK4FQH.mjs";
import {
  checkCachedPassesEligibility,
  formatCreditAmount,
  getCachedReferrerReward,
  getCachedRemainingPasses,
  init_referral
} from "./chunk-Y2PD6CVC.mjs";
import {
  Divider,
  ModalContext,
  init_Divider,
  init_modalContext,
  init_useTerminalSize,
  useTerminalSize
} from "./chunk-HO5F7BV3.mjs";
import {
  getSteps,
  incrementProjectOnboardingSeenCount,
  init_projectOnboardingState,
  shouldShowProjectOnboarding
} from "./chunk-H474P6P2.mjs";
import {
  init_voiceModeEnabled,
  isVoiceModeEnabled
} from "./chunk-KNCFJEES.mjs";
import {
  findToolByName,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
import {
  init_browser,
  openBrowser,
  openPath
} from "./chunk-IAEMXMG4.mjs";
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
} from "./chunk-HWTXKBLR.mjs";
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
  init_config2 as init_config,
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
} from "./chunk-NKGQGSP5.mjs";
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
  STATUS_TAG,
  SUMMARY_TAG,
  TASK_NOTIFICATION_TAG,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
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
  const dogPose = DOG_POSES[pose];
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, dogPose.top), /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, dogPose.face), /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, " /|"), /* @__PURE__ */ createElement(ThemedText, { color: "permission" }, "[ ]"), /* @__PURE__ */ createElement(ThemedText, { color: "clawd_body" }, "|\\\\ ")));
}
var DOG_POSES;
var init_Clawd = __esm({
  "src/components/LogoV2/Clawd.tsx"() {
    init_react();
    init_ink();
    DOG_POSES = {
      default: {
        top: " /v---v\\ ",
        face: "V  o o  V"
      },
      "look-left": {
        top: " /v---v\\ ",
        face: "V o o   V"
      },
      "look-right": {
        top: " /v---v\\ ",
        face: "V   o o V"
      },
      "arms-up": {
        top: " /^-^-^\\ ",
        face: "V  o o  V"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbnRleHQvcHJvbXB0T3ZlcmxheUNvbnRleHQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL251bGxSZW5kZXJpbmdBdHRhY2htZW50cy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GdWxsc2NyZWVuTGF5b3V0LnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvc2V0LnRzIiwgIi4uLy4uL3NyYy91dGlscy9jb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucy50cyIsICIuLi8uLi9zcmMvdXRpbHMvY29sbGFwc2VIb29rU3VtbWFyaWVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9jb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zLnRzIiwgIi4uLy4uL3NyYy91dGlscy9ncm91cFRvb2xVc2VzLnRzIiwgIi4uLy4uL3NyYy91dGlscy90cmFuc2NyaXB0U2VhcmNoLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9DbGF3ZC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL0ZlZWQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9GZWVkQ29sdW1uLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvZmVlZENvbmZpZ3MudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9BbmltYXRlZENsYXdkLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvR3Vlc3RQYXNzZXNVcHNlbGwudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9Db25kZW5zZWRMb2dvLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvRW1lcmdlbmN5VGlwLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvQW5pbWF0ZWRBc3Rlcmlzay50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL09wdXMxbU1lcmdlTm90aWNlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvVm9pY2VNb2RlTm90aWNlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dvVjIvQ2hhbm5lbHNOb3RpY2UudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29WMi9Mb2dvVjIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VNb2RlbC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVRpbWVzdGFtcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZVJvdy50c3giLCAiLi4vLi4vc3JjL3V0aWxzL3N0YXR1c05vdGljZURlZmluaXRpb25zLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0dXNOb3RpY2VzLnRzeCIsICIuLi8uLi9zcmMvaG9va3MvdXNlVmlydHVhbFNjcm9sbC50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9WaXJ0dWFsTWVzc2FnZUxpc3QudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBQb3J0YWwgZm9yIGNvbnRlbnQgdGhhdCBmbG9hdHMgYWJvdmUgdGhlIHByb21wdCBzbyBpdCBlc2NhcGVzXG4gKiBGdWxsc2NyZWVuTGF5b3V0J3MgYm90dG9tLXNsb3QgYG92ZXJmbG93WTpoaWRkZW5gIGNsaXAuXG4gKlxuICogVGhlIGNsaXAgaXMgbG9hZC1iZWFyaW5nIChDQy02Njg6IHRhbGwgcGFzdGVzIHNxdWFzaCB0aGUgU2Nyb2xsQm94XG4gKiB3aXRob3V0IGl0KSwgYnV0IGZsb2F0aW5nIG92ZXJsYXlzIHVzZSBgcG9zaXRpb246YWJzb2x1dGVcbiAqIGJvdHRvbT1cIjEwMCVcImAgdG8gZmxvYXQgYWJvdmUgdGhlIHByb21wdCDigJQgYW5kIEluaydzIGNsaXAgc3RhY2tcbiAqIGludGVyc2VjdHMgQUxMIGRlc2NlbmRhbnRzLCBzbyB0aGV5IHdlcmUgY2xpcHBlZCB0byB+MSByb3cuXG4gKlxuICogVHdvIGNoYW5uZWxzOlxuICogLSBgdXNlU2V0UHJvbXB0T3ZlcmxheWAg4oCUIHNsYXNoLWNvbW1hbmQgc3VnZ2VzdGlvbiBkYXRhIChzdHJ1Y3R1cmVkLFxuICogICB3cml0dGVuIGJ5IFByb21wdElucHV0Rm9vdGVyKVxuICogLSBgdXNlU2V0UHJvbXB0T3ZlcmxheURpYWxvZ2Ag4oCUIGFyYml0cmFyeSBkaWFsb2cgbm9kZSAoZS5nLlxuICogICBBdXRvTW9kZU9wdEluRGlhbG9nLCB3cml0dGVuIGJ5IFByb21wdElucHV0KVxuICpcbiAqIEZ1bGxzY3JlZW5MYXlvdXQgcmVhZHMgYm90aCBhbmQgcmVuZGVycyB0aGVtIG91dHNpZGUgdGhlIGNsaXBwZWQgc2xvdC5cbiAqXG4gKiBTcGxpdCBpbnRvIGRhdGEvc2V0dGVyIGNvbnRleHQgcGFpcnMgc28gd3JpdGVycyBuZXZlciByZS1yZW5kZXIgb25cbiAqIHRoZWlyIG93biB3cml0ZXMg4oCUIHRoZSBzZXR0ZXIgY29udGV4dHMgYXJlIHN0YWJsZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHR5cGUgUmVhY3ROb2RlLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgU3VnZ2VzdGlvbkl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb21wdElucHV0L1Byb21wdElucHV0Rm9vdGVyU3VnZ2VzdGlvbnMuanMnXG5cbmV4cG9ydCB0eXBlIFByb21wdE92ZXJsYXlEYXRhID0ge1xuICBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbkl0ZW1bXVxuICBzZWxlY3RlZFN1Z2dlc3Rpb246IG51bWJlclxuICBtYXhDb2x1bW5XaWR0aD86IG51bWJlclxufVxuXG50eXBlIFNldHRlcjxUPiA9IChkOiBUIHwgbnVsbCkgPT4gdm9pZFxuXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UHJvbXB0T3ZlcmxheURhdGEgfCBudWxsPihudWxsKVxuY29uc3QgU2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2V0dGVyPFByb21wdE92ZXJsYXlEYXRhPiB8IG51bGw+KG51bGwpXG5jb25zdCBEaWFsb2dDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxSZWFjdE5vZGU+KG51bGwpXG5jb25zdCBTZXREaWFsb2dDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZXR0ZXI8UmVhY3ROb2RlPiB8IG51bGw+KG51bGwpXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tcHRPdmVybGF5UHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufSk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFByb21wdE92ZXJsYXlEYXRhIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IHVzZVN0YXRlPFJlYWN0Tm9kZT4obnVsbClcbiAgcmV0dXJuIChcbiAgICA8U2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0RGF0YX0+XG4gICAgICA8U2V0RGlhbG9nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0RGlhbG9nfT5cbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICAgICAgICA8RGlhbG9nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlhbG9nfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NldERpYWxvZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9TZXRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9tcHRPdmVybGF5KCk6IFByb21wdE92ZXJsYXlEYXRhIHwgbnVsbCB7XG4gIHJldHVybiB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvbXB0T3ZlcmxheURpYWxvZygpOiBSZWFjdE5vZGUge1xuICByZXR1cm4gdXNlQ29udGV4dChEaWFsb2dDb250ZXh0KVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHN1Z2dlc3Rpb24gZGF0YSBmb3IgdGhlIGZsb2F0aW5nIG92ZXJsYXkuIENsZWFycyBvbiB1bm1vdW50LlxuICogTm8tb3Agb3V0c2lkZSB0aGUgcHJvdmlkZXIgKG5vbi1mdWxsc2NyZWVuIHJlbmRlcnMgaW5saW5lIGluc3RlYWQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU2V0UHJvbXB0T3ZlcmxheShkYXRhOiBQcm9tcHRPdmVybGF5RGF0YSB8IG51bGwpOiB2b2lkIHtcbiAgY29uc3Qgc2V0ID0gdXNlQ29udGV4dChTZXRDb250ZXh0KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2V0KSByZXR1cm5cbiAgICBzZXQoZGF0YSlcbiAgICByZXR1cm4gKCkgPT4gc2V0KG51bGwpXG4gIH0sIFtzZXQsIGRhdGFdKVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZGlhbG9nIG5vZGUgdG8gZmxvYXQgYWJvdmUgdGhlIHByb21wdC4gQ2xlYXJzIG9uIHVubW91bnQuXG4gKiBOby1vcCBvdXRzaWRlIHRoZSBwcm92aWRlciAobm9uLWZ1bGxzY3JlZW4gcmVuZGVycyBpbmxpbmUgaW5zdGVhZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXRQcm9tcHRPdmVybGF5RGlhbG9nKG5vZGU6IFJlYWN0Tm9kZSk6IHZvaWQge1xuICBjb25zdCBzZXQgPSB1c2VDb250ZXh0KFNldERpYWxvZ0NvbnRleHQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXQpIHJldHVyblxuICAgIHNldChub2RlKVxuICAgIHJldHVybiAoKSA9PiBzZXQobnVsbClcbiAgfSwgW3NldCwgbm9kZV0pXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBdHRhY2htZW50IH0gZnJvbSAnc3JjL3V0aWxzL2F0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlLCBOb3JtYWxpemVkTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbi8qKlxuICogQXR0YWNobWVudCB0eXBlcyB0aGF0IEF0dGFjaG1lbnRNZXNzYWdlIHJlbmRlcnMgYXMgYG51bGxgIHVuY29uZGl0aW9uYWxseVxuICogKG5vIHZpc2libGUgb3V0cHV0IHJlZ2FyZGxlc3Mgb2YgcnVudGltZSBzdGF0ZSkuIE1lc3NhZ2VzLnRzeCBmaWx0ZXJzIHRoZXNlXG4gKiBvdXQgQkVGT1JFIHRoZSByZW5kZXIgY2FwIC8gbWVzc2FnZSBjb3VudCBzbyBpbnZpc2libGUgZW50cmllcyBkb24ndCBjb25zdW1lXG4gKiB0aGUgMjAwLW1lc3NhZ2UgcmVuZGVyIGJ1ZGdldCAoQ0MtNzI0KS5cbiAqXG4gKiBTeW5jIGlzIGVuZm9yY2VkIGJ5IFR5cGVTY3JpcHQ6IEF0dGFjaG1lbnRNZXNzYWdlJ3Mgc3dpdGNoIGBkZWZhdWx0OmAgYnJhbmNoXG4gKiBhc3NlcnRzIGBhdHRhY2htZW50LnR5cGUgc2F0aXNmaWVzIE51bGxSZW5kZXJpbmdBdHRhY2htZW50VHlwZWAuIEFkZGluZyBhIG5ld1xuICogQXR0YWNobWVudCB0eXBlIHdpdGhvdXQgZWl0aGVyIGEgY2FzZSBvciBhbiBlbnRyeSBoZXJlIHdpbGwgZmFpbCB0eXBlY2hlY2suXG4gKi9cbmNvbnN0IE5VTExfUkVOREVSSU5HX1RZUEVTID0gW1xuICAnaG9va19zdWNjZXNzJyxcbiAgJ2hvb2tfYWRkaXRpb25hbF9jb250ZXh0JyxcbiAgJ2hvb2tfY2FuY2VsbGVkJyxcbiAgJ2NvbW1hbmRfcGVybWlzc2lvbnMnLFxuICAnYWdlbnRfbWVudGlvbicsXG4gICdidWRnZXRfdXNkJyxcbiAgJ2NyaXRpY2FsX3N5c3RlbV9yZW1pbmRlcicsXG4gICdlZGl0ZWRfaW1hZ2VfZmlsZScsXG4gICdlZGl0ZWRfdGV4dF9maWxlJyxcbiAgJ29wZW5lZF9maWxlX2luX2lkZScsXG4gICdvdXRwdXRfc3R5bGUnLFxuICAncGxhbl9tb2RlJyxcbiAgJ3BsYW5fbW9kZV9leGl0JyxcbiAgJ3BsYW5fbW9kZV9yZWVudHJ5JyxcbiAgJ3N0cnVjdHVyZWRfb3V0cHV0JyxcbiAgJ3RlYW1fY29udGV4dCcsXG4gICd0b2RvX3JlbWluZGVyJyxcbiAgJ2NvbnRleHRfZWZmaWNpZW5jeScsXG4gICdkZWZlcnJlZF90b29sc19kZWx0YScsXG4gICdtY3BfaW5zdHJ1Y3Rpb25zX2RlbHRhJyxcbiAgJ2NvbXBhbmlvbl9pbnRybycsXG4gICd0b2tlbl91c2FnZScsXG4gICd1bHRyYXRoaW5rX2VmZm9ydCcsXG4gICdtYXhfdHVybnNfcmVhY2hlZCcsXG4gICd0YXNrX3JlbWluZGVyJyxcbiAgJ2F1dG9fbW9kZScsXG4gICdhdXRvX21vZGVfZXhpdCcsXG4gICdvdXRwdXRfdG9rZW5fdXNhZ2UnLFxuICAncGVuX21vZGVfZW50ZXInLFxuICAncGVuX21vZGVfZXhpdCcsXG4gICd2ZXJpZnlfcGxhbl9yZW1pbmRlcicsXG4gICdjdXJyZW50X3Nlc3Npb25fbWVtb3J5JyxcbiAgJ2NvbXBhY3Rpb25fcmVtaW5kZXInLFxuICAnZGF0ZV9jaGFuZ2UnLFxuXSBhcyBjb25zdCBzYXRpc2ZpZXMgcmVhZG9ubHkgQXR0YWNobWVudFsndHlwZSddW11cblxuZXhwb3J0IHR5cGUgTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnRUeXBlID0gKHR5cGVvZiBOVUxMX1JFTkRFUklOR19UWVBFUylbbnVtYmVyXVxuXG5jb25zdCBOVUxMX1JFTkRFUklOR19BVFRBQ0hNRU5UX1RZUEVTOiBSZWFkb25seVNldDxBdHRhY2htZW50Wyd0eXBlJ10+ID1cbiAgbmV3IFNldChOVUxMX1JFTkRFUklOR19UWVBFUylcblxuLyoqXG4gKiBUcnVlIHdoZW4gdGhpcyBtZXNzYWdlIGlzIGFuIGF0dGFjaG1lbnQgdGhhdCBBdHRhY2htZW50TWVzc2FnZSByZW5kZXJzIGFzXG4gKiBudWxsIHdpdGggbm8gdmlzaWJsZSBvdXRwdXQuIE1lc3NhZ2VzLnRzeCBmaWx0ZXJzIHRoZXNlIG91dCBiZWZvcmUgY291bnRpbmdcbiAqIGFuZCBiZWZvcmUgYXBwbHlpbmcgdGhlIDIwMC1tZXNzYWdlIHJlbmRlciBjYXAsIHNvIGludmlzaWJsZSBob29rXG4gKiBhdHRhY2htZW50cyAoaG9va19zdWNjZXNzLCBob29rX2FkZGl0aW9uYWxfY29udGV4dCwgaG9va19jYW5jZWxsZWQpIGRvbid0XG4gKiBpbmZsYXRlIHRoZSBcIk4gbWVzc2FnZXNcIiBjb3VudCBvciBlYXQgaW50byB0aGUgcmVuZGVyIGJ1ZGdldCAoQ0MtNzI0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnQoXG4gIG1zZzogTWVzc2FnZSB8IE5vcm1hbGl6ZWRNZXNzYWdlLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbXNnLnR5cGUgPT09ICdhdHRhY2htZW50JyAmJlxuICAgIE5VTExfUkVOREVSSU5HX0FUVEFDSE1FTlRfVFlQRVMuaGFzKG1zZy5hdHRhY2htZW50LnR5cGUpXG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHR5cGUgUmVhY3ROb2RlLFxuICB0eXBlIFJlZk9iamVjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9tb2RhbENvbnRleHQuanMnXG5pbXBvcnQge1xuICBQcm9tcHRPdmVybGF5UHJvdmlkZXIsXG4gIHVzZVByb21wdE92ZXJsYXksXG4gIHVzZVByb21wdE92ZXJsYXlEaWFsb2csXG59IGZyb20gJy4uL2NvbnRleHQvcHJvbXB0T3ZlcmxheUNvbnRleHQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgU2Nyb2xsQm94LCB7IHR5cGUgU2Nyb2xsQm94SGFuZGxlIH0gZnJvbSAnLi4vaW5rL2NvbXBvbmVudHMvU2Nyb2xsQm94LmpzJ1xuaW1wb3J0IGluc3RhbmNlcyBmcm9tICcuLi9pbmsvaW5zdGFuY2VzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyLCBvcGVuUGF0aCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQgeyBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIH0gZnJvbSAnLi4vdXRpbHMvZnVsbHNjcmVlbi5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgaXNOdWxsUmVuZGVyaW5nQXR0YWNobWVudCB9IGZyb20gJy4vbWVzc2FnZXMvbnVsbFJlbmRlcmluZ0F0dGFjaG1lbnRzLmpzJ1xuaW1wb3J0IFByb21wdElucHV0Rm9vdGVyU3VnZ2VzdGlvbnMgZnJvbSAnLi9Qcm9tcHRJbnB1dC9Qcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdGlja3lQcm9tcHQgfSBmcm9tICcuL1ZpcnR1YWxNZXNzYWdlTGlzdC5qcydcblxuLyoqIFJvd3Mgb2YgdHJhbnNjcmlwdCBjb250ZXh0IGtlcHQgdmlzaWJsZSBhYm92ZSB0aGUgbW9kYWwgcGFuZSdzIOKWlCBkaXZpZGVyLiAqL1xuY29uc3QgTU9EQUxfVFJBTlNDUklQVF9QRUVLID0gMlxuXG4vKiogQ29udGV4dCBmb3Igc2Nyb2xsLWRlcml2ZWQgY2hyb21lIChzdGlja3kgaGVhZGVyLCBwaWxsKS4gU3RpY2t5VHJhY2tlclxuICogIGluIFZpcnR1YWxNZXNzYWdlTGlzdCB3cml0ZXMgdmlhIHRoaXMgaW5zdGVhZCBvZiB0aHJlYWRpbmcgYSBjYWxsYmFja1xuICogIHVwIHRocm91Z2ggTWVzc2FnZXMg4oaSIFJFUEwg4oaSIEZ1bGxzY3JlZW5MYXlvdXQuIFRoZSBzZXR0ZXIgaXMgc3RhYmxlIHNvXG4gKiAgY29uc3VtaW5nIHRoaXMgY29udGV4dCBuZXZlciBjYXVzZXMgcmUtcmVuZGVycy4gKi9cbmV4cG9ydCBjb25zdCBTY3JvbGxDaHJvbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gIHNldFN0aWNreVByb21wdDogKHA6IFN0aWNreVByb21wdCB8IG51bGwpID0+IHZvaWRcbn0+KHsgc2V0U3RpY2t5UHJvbXB0OiAoKSA9PiB7fSB9KVxuXG50eXBlIFByb3BzID0ge1xuICAvKiogQ29udGVudCB0aGF0IHNjcm9sbHMgKG1lc3NhZ2VzLCB0b29sIG91dHB1dCkgKi9cbiAgc2Nyb2xsYWJsZTogUmVhY3ROb2RlXG4gIC8qKiBDb250ZW50IHBpbm5lZCB0byB0aGUgYm90dG9tIChzcGlubmVyLCBwcm9tcHQsIHBlcm1pc3Npb25zKSAqL1xuICBib3R0b206IFJlYWN0Tm9kZVxuICAvKiogQ29udGVudCByZW5kZXJlZCBpbnNpZGUgdGhlIFNjcm9sbEJveCBhZnRlciBtZXNzYWdlcyDigJQgdXNlciBjYW4gc2Nyb2xsXG4gICAqICB1cCB0byBzZWUgY29udGV4dCB3aGlsZSBpdCdzIHNob3dpbmcgKHVzZWQgYnkgUGVybWlzc2lvblJlcXVlc3QpLiAqL1xuICBvdmVybGF5PzogUmVhY3ROb2RlXG4gIC8qKiBBYnNvbHV0ZS1wb3NpdGlvbmVkIGNvbnRlbnQgYW5jaG9yZWQgYXQgdGhlIGJvdHRvbS1yaWdodCBvZiB0aGVcbiAgICogIFNjcm9sbEJveCBhcmVhLCBmbG9hdGluZyBvdmVyIHNjcm9sbGJhY2suIFJlbmRlcmVkIGluc2lkZSB0aGUgZmxleEdyb3dcbiAgICogIHJlZ2lvbiAobm90IHRoZSBib3R0b20gc2xvdCkgc28gdGhlIG92ZXJmbG93WTpoaWRkZW4gY2FwIGRvZXNuJ3QgY2xpcFxuICAgKiAgaXQuIEZ1bGxzY3JlZW4gb25seSDigJQgdXNlZCBmb3IgdGhlIGNvbXBhbmlvbiBzcGVlY2ggYnViYmxlLiAqL1xuICBib3R0b21GbG9hdD86IFJlYWN0Tm9kZVxuICAvKiogU2xhc2gtY29tbWFuZCBkaWFsb2cgY29udGVudC4gUmVuZGVyZWQgaW4gYW4gYWJzb2x1dGUtcG9zaXRpb25lZFxuICAgKiAgYm90dG9tLWFuY2hvcmVkIHBhbmUgKOKWlCBkaXZpZGVyLCBwYWRkaW5nWD0yKSB0aGF0IHBhaW50cyBvdmVyIHRoZVxuICAgKiAgU2Nyb2xsQm94IEFORCBib3R0b20gc2xvdC4gUHJvdmlkZXMgTW9kYWxDb250ZXh0IHNvIFBhbmUvRGlhbG9nIGluc2lkZVxuICAgKiAgc2tpcCB0aGVpciBvd24gZnJhbWUuIEZ1bGxzY3JlZW4gb25seTsgaW5saW5lIGFmdGVyIG92ZXJsYXkgb3RoZXJ3aXNlLiAqL1xuICBtb2RhbD86IFJlYWN0Tm9kZVxuICAvKiogUmVmIHBhc3NlZCB2aWEgTW9kYWxDb250ZXh0IHNvIFRhYnMgKG9yIGFueSBzY3JvbGwtb3duaW5nIGRlc2NlbmRhbnQpXG4gICAqICBjYW4gYXR0YWNoIGl0IHRvIHRoZWlyIG93biBTY3JvbGxCb3ggZm9yIHRhbGwgY29udGVudC4gKi9cbiAgbW9kYWxTY3JvbGxSZWY/OiBSZWFjdC5SZWZPYmplY3Q8U2Nyb2xsQm94SGFuZGxlIHwgbnVsbD5cbiAgLyoqIFJlZiB0byB0aGUgc2Nyb2xsIGJveCBmb3Iga2V5Ym9hcmQgc2Nyb2xsaW5nLiBSZWZPYmplY3QgKG5vdCBSZWYpIHNvXG4gICAqICBwaWxsVmlzaWJsZSdzIHVzZVN5bmNFeHRlcm5hbFN0b3JlIGNhbiBzdWJzY3JpYmUgdG8gc2Nyb2xsIGNoYW5nZXMuICovXG4gIHNjcm9sbFJlZj86IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPlxuICAvKiogWS1wb3NpdGlvbiAoc2Nyb2xsSGVpZ2h0IGF0IHNuYXBzaG90KSBvZiB0aGUgdW5zZWVuLWRpdmlkZXIuIFBpbGxcbiAgICogIHNob3dzIHdoaWxlIHZpZXdwb3J0IGJvdHRvbSBoYXNuJ3QgcmVhY2hlZCB0aGlzLiBSZWYgc28gUkVQTCBkb2Vzbid0XG4gICAqICByZS1yZW5kZXIgb24gdGhlIG9uZS1zaG90IHNuYXBzaG90IHdyaXRlLiAqL1xuICBkaXZpZGVyWVJlZj86IFJlZk9iamVjdDxudW1iZXIgfCBudWxsPlxuICAvKiogRm9yY2UtaGlkZSB0aGUgcGlsbCAoZS5nLiB2aWV3aW5nIGEgc3ViLWFnZW50IHRhc2spLiAqL1xuICBoaWRlUGlsbD86IGJvb2xlYW5cbiAgLyoqIEZvcmNlLWhpZGUgdGhlIHN0aWNreSBwcm9tcHQgaGVhZGVyIChlLmcuIHZpZXdpbmcgYSB0ZWFtbWF0ZSB0YXNrKS4gKi9cbiAgaGlkZVN0aWNreT86IGJvb2xlYW5cbiAgLyoqIENvdW50IGZvciB0aGUgcGlsbCB0ZXh0LiAwIOKGkiBcIkp1bXAgdG8gYm90dG9tXCIsID4wIOKGkiBcIk4gbmV3IG1lc3NhZ2VzXCIuICovXG4gIG5ld01lc3NhZ2VDb3VudD86IG51bWJlclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBcIk4gbmV3XCIgcGlsbC4gKi9cbiAgb25QaWxsQ2xpY2s/OiAoKSA9PiB2b2lkXG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSBpbi10cmFuc2NyaXB0IFwiTiBuZXcgbWVzc2FnZXNcIiBkaXZpZGVyIHBvc2l0aW9uIHdoaWxlIHRoZVxuICogdXNlciBpcyBzY3JvbGxlZCB1cC4gU25hcHNob3RzIG1lc3NhZ2UgY291bnQgQU5EIHNjcm9sbEhlaWdodCB0aGUgZmlyc3RcbiAqIHRpbWUgc3RpY2t5IGJyZWFrcy4gc2Nyb2xsSGVpZ2h0IOKJiCB0aGUgeS1wb3NpdGlvbiBvZiB0aGUgZGl2aWRlciBpbiB0aGVcbiAqIHNjcm9sbCBjb250ZW50IChpdCByZW5kZXJzIHJpZ2h0IGFmdGVyIHRoZSBsYXN0IG1lc3NhZ2UgdGhhdCBleGlzdGVkIGF0XG4gKiBzbmFwc2hvdCB0aW1lKS5cbiAqXG4gKiBgcGlsbFZpc2libGVgIGxpdmVzIGluIEZ1bGxzY3JlZW5MYXlvdXQgKG5vdCBoZXJlKSDigJQgaXQgc3Vic2NyaWJlc1xuICogZGlyZWN0bHkgdG8gU2Nyb2xsQm94IHZpYSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB3aXRoIGEgYm9vbGVhbiBzbmFwc2hvdFxuICogYWdhaW5zdCBgZGl2aWRlcllSZWZgLCBzbyBwZXItZnJhbWUgc2Nyb2xsIG5ldmVyIHJlLXJlbmRlcnMgUkVQTC5cbiAqIGBkaXZpZGVySW5kZXhgIHN0YXlzIGhlcmUgYmVjYXVzZSBSRVBMIG5lZWRzIGl0IGZvciBjb21wdXRlVW5zZWVuRGl2aWRlclxuICog4oaSIE1lc3NhZ2VzJyBkaXZpZGVyIGxpbmU7IGl0IGNoYW5nZXMgb25seSB+dHdpY2Uvc2Nyb2xsLXNlc3Npb25cbiAqIChmaXJzdCBzY3JvbGwtYXdheSArIHJlcGluKSwgYWNjZXB0YWJsZSBSRVBMIHJlLXJlbmRlciBjb3N0LlxuICpcbiAqIGBvblNjcm9sbEF3YXlgIG11c3QgYmUgY2FsbGVkIGJ5IGV2ZXJ5IHNjcm9sbC1hd2F5IGFjdGlvbiB3aXRoIHRoZVxuICogaGFuZGxlOyBgb25SZXBpbmAgYnkgc3VibWl0L3Njcm9sbC10by1ib3R0b20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVbnNlZW5EaXZpZGVyKG1lc3NhZ2VDb3VudDogbnVtYmVyKToge1xuICAvKiogSW5kZXggaW50byBtZXNzYWdlc1tdIHdoZXJlIHRoZSBkaXZpZGVyIGxpbmUgcmVuZGVycy4gQ2xlYXJlZCBvblxuICAgKiAgc3RpY2t5LXJlc3VtZSAoc2Nyb2xsIGJhY2sgdG8gYm90dG9tKSBzbyB0aGUgXCJOIG5ld1wiIGxpbmUgZG9lc24ndFxuICAgKiAgbGluZ2VyIG9uY2UgZXZlcnl0aGluZyBpcyB2aXNpYmxlLiAqL1xuICBkaXZpZGVySW5kZXg6IG51bWJlciB8IG51bGxcbiAgLyoqIHNjcm9sbEhlaWdodCBzbmFwc2hvdCBhdCBmaXJzdCBzY3JvbGwtYXdheSDigJQgdGhlIGRpdmlkZXIncyB5LXBvc2l0aW9uLlxuICAgKiAgRnVsbHNjcmVlbkxheW91dCBzdWJzY3JpYmVzIHRvIFNjcm9sbEJveCBhbmQgY29tcGFyZXMgdmlld3BvcnQgYm90dG9tXG4gICAqICBhZ2FpbnN0IHRoaXMgZm9yIHBpbGxWaXNpYmxlLiBSZWYgc28gd3JpdGVzIGRvbid0IHJlLXJlbmRlciBSRVBMLiAqL1xuICBkaXZpZGVyWVJlZjogUmVmT2JqZWN0PG51bWJlciB8IG51bGw+XG4gIG9uU2Nyb2xsQXdheTogKGhhbmRsZTogU2Nyb2xsQm94SGFuZGxlKSA9PiB2b2lkXG4gIG9uUmVwaW46ICgpID0+IHZvaWRcbiAgLyoqIFNjcm9sbCB0aGUgaGFuZGxlIHNvIHRoZSBkaXZpZGVyIGxpbmUgaXMgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQuICovXG4gIGp1bXBUb05ldzogKGhhbmRsZTogU2Nyb2xsQm94SGFuZGxlIHwgbnVsbCkgPT4gdm9pZFxuICAvKiogU2hpZnQgZGl2aWRlckluZGV4IGFuZCBkaXZpZGVyWVJlZiB3aGVuIG1lc3NhZ2VzIGFyZSBwcmVwZW5kZWRcbiAgICogIChpbmZpbml0ZSBzY3JvbGwtYmFjaykuIGluZGV4RGVsdGEgPSBudW1iZXIgb2YgbWVzc2FnZXMgcHJlcGVuZGVkO1xuICAgKiAgaGVpZ2h0RGVsdGEgPSBjb250ZW50IGhlaWdodCBncm93dGggaW4gcm93cy4gKi9cbiAgc2hpZnREaXZpZGVyOiAoaW5kZXhEZWx0YTogbnVtYmVyLCBoZWlnaHREZWx0YTogbnVtYmVyKSA9PiB2b2lkXG59IHtcbiAgY29uc3QgW2RpdmlkZXJJbmRleCwgc2V0RGl2aWRlckluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIC8vIFJlZiBob2xkcyB0aGUgY3VycmVudCBjb3VudCBmb3Igb25TY3JvbGxBd2F5IHRvIHNuYXBzaG90LiBXcml0dGVuIGluXG4gIC8vIHRoZSByZW5kZXIgYm9keSAobm90IHVzZUVmZmVjdCkgc28gd2hlZWwgZXZlbnRzIGFycml2aW5nIGJldHdlZW4gYVxuICAvLyBtZXNzYWdlLWFwcGVuZCByZW5kZXIgYW5kIGl0cyBlZmZlY3QgZmx1c2ggZG9uJ3QgY2FwdHVyZSBhIHN0YWxlXG4gIC8vIGNvdW50IChvZmYtYnktb25lIGluIHRoZSBiYXNlbGluZSkuIFJlYWN0IENvbXBpbGVyIGJhaWxzIG91dCBoZXJlIOKAlFxuICAvLyBhY2NlcHRhYmxlIGZvciBhIGhvb2sgaW5zdGFudGlhdGVkIG9uY2UgaW4gUkVQTC5cbiAgY29uc3QgY291bnRSZWYgPSB1c2VSZWYobWVzc2FnZUNvdW50KVxuICBjb3VudFJlZi5jdXJyZW50ID0gbWVzc2FnZUNvdW50XG4gIC8vIHNjcm9sbEhlaWdodCBzbmFwc2hvdCDigJQgdGhlIGRpdmlkZXIncyB5IGluIGNvbnRlbnQgY29vcmRzLiBSZWYtb25seTpcbiAgLy8gcmVhZCBzeW5jaHJvbm91c2x5IGluIG9uU2Nyb2xsQXdheSAoc2V0U3RhdGUgaXMgYmF0Y2hlZCwgY2FuJ3RcbiAgLy8gcmVhZC10aGVuLXdyaXRlIGluIHRoZSBzYW1lIGNhbGxiYWNrKSBBTkQgYnkgRnVsbHNjcmVlbkxheW91dCdzXG4gIC8vIHBpbGxWaXNpYmxlIHN1YnNjcmlwdGlvbi4gbnVsbCA9IHBpbm5lZCB0byBib3R0b20uXG4gIGNvbnN0IGRpdmlkZXJZUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgb25SZXBpbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBEb24ndCBjbGVhciBkaXZpZGVyWVJlZiBoZXJlIOKAlCBhIHRyYWNrcGFkIG1vbWVudHVtIHdoZWVsIGV2ZW50XG4gICAgLy8gcmFjaW5nIGluIHRoZSBzYW1lIHN0ZGluIGJhdGNoIHdvdWxkIHNlZSBudWxsIGFuZCByZS1zbmFwc2hvdCxcbiAgICAvLyBvdmVycmlkaW5nIHRoZSBzZXREaXZpZGVySW5kZXgobnVsbCkgYmVsb3cuIFRoZSB1c2VFZmZlY3QgYmVsb3dcbiAgICAvLyBjbGVhcnMgdGhlIHJlZiBhZnRlciBSZWFjdCBjb21taXRzIHRoZSBudWxsIGRpdmlkZXJJbmRleCwgc28gdGhlXG4gICAgLy8gcmVmIHN0YXlzIG5vbi1udWxsIHVudGlsIHRoZSBzdGF0ZSBzZXR0bGVzLlxuICAgIHNldERpdmlkZXJJbmRleChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBvblNjcm9sbEF3YXkgPSB1c2VDYWxsYmFjaygoaGFuZGxlOiBTY3JvbGxCb3hIYW5kbGUpID0+IHtcbiAgICAvLyBOb3RoaW5nIGJlbG93IHRoZSB2aWV3cG9ydCDihpIgbm90aGluZyB0byBqdW1wIHRvLiBDb3ZlcnMgYm90aDpcbiAgICAvLyDigKIgZW1wdHkvc2hvcnQgc2Vzc2lvbjogc2Nyb2xsVXAgY2FsbHMgc2Nyb2xsVG8oMCkgd2hpY2ggYnJlYWtzIHN0aWNreVxuICAgIC8vICAgZXZlbiBhdCBzY3JvbGxUb3A9MCAod2hlZWwtdXAgb24gZnJlc2ggc2Vzc2lvbiBzaG93ZWQgdGhlIHBpbGwpXG4gICAgLy8g4oCiIGNsaWNrLXRvLXNlbGVjdCBhdCBib3R0b206IHVzZURyYWdUb1Njcm9sbC5jaGVjaygpIGNhbGxzXG4gICAgLy8gICBzY3JvbGxUbyhjdXJyZW50KSB0byBicmVhayBzdGlja3kgc28gc3RyZWFtaW5nIGNvbnRlbnQgZG9lc24ndCBzaGlmdFxuICAgIC8vICAgdW5kZXIgdGhlIHNlbGVjdGlvbiwgdGhlbiBvblNjcm9sbChmYWxzZSwg4oCmKSDigJQgYnV0IHNjcm9sbFRvcCBpcyBzdGlsbFxuICAgIC8vICAgYXQgbWF4IChTYXJhaCBEZWF0b24sICNjbGF1ZGUtY29kZS1mZWVkYmFjayAyMDI2LTAzLTE1KVxuICAgIC8vIHBlbmRpbmdEZWx0YTogc2Nyb2xsQnkgYWNjdW11bGF0ZXMgd2l0aG91dCB1cGRhdGluZyBzY3JvbGxUb3AuIFdpdGhvdXRcbiAgICAvLyBpdCwgd2hlZWxpbmcgdXAgZnJvbSBtYXggd291bGQgc2VlIHNjcm9sbFRvcD09bWF4IGFuZCBzdXBwcmVzcyB0aGUgcGlsbC5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICBoYW5kbGUuZ2V0U2Nyb2xsSGVpZ2h0KCkgLSBoYW5kbGUuZ2V0Vmlld3BvcnRIZWlnaHQoKSxcbiAgICApXG4gICAgaWYgKGhhbmRsZS5nZXRTY3JvbGxUb3AoKSArIGhhbmRsZS5nZXRQZW5kaW5nRGVsdGEoKSA+PSBtYXgpIHJldHVyblxuICAgIC8vIFNuYXBzaG90IG9ubHkgb24gdGhlIEZJUlNUIHNjcm9sbC1hd2F5LiBvblNjcm9sbEF3YXkgZmlyZXMgb24gRVZFUllcbiAgICAvLyBzY3JvbGwgYWN0aW9uIChub3QganVzdCB0aGUgaW5pdGlhbCBicmVhayBmcm9tIHN0aWNreSkg4oCUIHRoaXMgZ3VhcmRcbiAgICAvLyBwcmVzZXJ2ZXMgdGhlIG9yaWdpbmFsIGJhc2VsaW5lIHNvIHRoZSBjb3VudCBkb2Vzbid0IHJlc2V0IG9uIHRoZVxuICAgIC8vIHNlY29uZCBQYWdlVXAuIFN1YnNlcXVlbnQgY2FsbHMgYXJlIHJlZi1vbmx5IG5vLW9wcyAobm8gUkVQTCByZS1yZW5kZXIpLlxuICAgIGlmIChkaXZpZGVyWVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICBkaXZpZGVyWVJlZi5jdXJyZW50ID0gaGFuZGxlLmdldFNjcm9sbEhlaWdodCgpXG4gICAgICAvLyBOZXcgc2Nyb2xsLWF3YXkgc2Vzc2lvbiDihpIgbW92ZSB0aGUgZGl2aWRlciBoZXJlIChyZXBsYWNlcyBvbGQgb25lKVxuICAgICAgc2V0RGl2aWRlckluZGV4KGNvdW50UmVmLmN1cnJlbnQpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBqdW1wVG9OZXcgPSB1c2VDYWxsYmFjaygoaGFuZGxlOiBTY3JvbGxCb3hIYW5kbGUgfCBudWxsKSA9PiB7XG4gICAgaWYgKCFoYW5kbGUpIHJldHVyblxuICAgIC8vIHNjcm9sbFRvQm90dG9tIChub3Qgc2Nyb2xsVG8oZGl2aWRlclkpKTogc2V0cyBzdGlja3lTY3JvbGw9dHJ1ZSBzb1xuICAgIC8vIHVzZVZpcnR1YWxTY3JvbGwgbW91bnRzIHRoZSB0YWlsIGFuZCByZW5kZXItbm9kZS10by1vdXRwdXQgcGluc1xuICAgIC8vIHNjcm9sbFRvcD1tYXhTY3JvbGwuIHNjcm9sbFRvIHNldHMgc3RpY2t5U2Nyb2xsPWZhbHNlIOKGkiB0aGUgY2xhbXBcbiAgICAvLyAoc3RpbGwgYXQgdG9wLXJhbmdlIGJvdW5kcyBiZWZvcmUgUmVhY3QgcmUtcmVuZGVycykgcGlucyBzY3JvbGxUb3BcbiAgICAvLyBiYWNrLCBzdG9wcGluZyBzaG9ydC4gVGhlIGRpdmlkZXIgc3RheXMgcmVuZGVyZWQgKGRpdmlkZXJJbmRleFxuICAgIC8vIHVuY2hhbmdlZCkgc28gdXNlcnMgc2VlIHdoZXJlIG5ldyBtZXNzYWdlcyBzdGFydGVkOyB0aGUgY2xlYXIgb25cbiAgICAvLyBuZXh0IHN1Ym1pdC9leHBsaWNpdCBzY3JvbGwtdG8tYm90dG9tIGhhbmRsZXMgY2xlYW51cC5cbiAgICBoYW5kbGUuc2Nyb2xsVG9Cb3R0b20oKVxuICB9LCBbXSlcblxuICAvLyBTeW5jIGRpdmlkZXJZUmVmIHdpdGggZGl2aWRlckluZGV4LiBXaGVuIG9uUmVwaW4gZmlyZXMgKHN1Ym1pdCxcbiAgLy8gc2Nyb2xsLXRvLWJvdHRvbSksIGl0IHNldHMgZGl2aWRlckluZGV4PW51bGwgYnV0IGxlYXZlcyB0aGUgcmVmXG4gIC8vIG5vbi1udWxsIOKAlCBhIHdoZWVsIGV2ZW50IHJhY2luZyBpbiB0aGUgc2FtZSBzdGRpbiBiYXRjaCB3b3VsZFxuICAvLyBvdGhlcndpc2Ugc2VlIG51bGwgYW5kIHJlLXNuYXBzaG90LiBEZWZlcnJpbmcgdGhlIHJlZiBjbGVhciB0b1xuICAvLyB1c2VFZmZlY3QgZ3VhcmFudGVlcyB0aGUgcmVmIHN0YXlzIG5vbi1udWxsIHVudGlsIFJlYWN0IGhhcyBjb21taXR0ZWRcbiAgLy8gdGhlIG51bGwgZGl2aWRlckluZGV4LCBibG9ja2luZyB0aGUgaWYtbnVsbCBndWFyZCBpbiBvblNjcm9sbEF3YXkuXG4gIC8vXG4gIC8vIEFsc28gaGFuZGxlcyAvY2xlYXIsIHJld2luZCwgdGVhbW1hdGUtdmlldyBzd2FwIOKAlCBpZiB0aGUgY291bnQgZHJvcHNcbiAgLy8gYmVsb3cgdGhlIGRpdmlkZXIgaW5kZXgsIHRoZSBkaXZpZGVyIHdvdWxkIHBvaW50IGF0IG5vdGhpbmcuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpdmlkZXJJbmRleCA9PT0gbnVsbCkge1xuICAgICAgZGl2aWRlcllSZWYuY3VycmVudCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VDb3VudCA8IGRpdmlkZXJJbmRleCkge1xuICAgICAgZGl2aWRlcllSZWYuY3VycmVudCA9IG51bGxcbiAgICAgIHNldERpdmlkZXJJbmRleChudWxsKVxuICAgIH1cbiAgfSwgW21lc3NhZ2VDb3VudCwgZGl2aWRlckluZGV4XSlcblxuICBjb25zdCBzaGlmdERpdmlkZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXhEZWx0YTogbnVtYmVyLCBoZWlnaHREZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICBzZXREaXZpZGVySW5kZXgoaWR4ID0+IChpZHggPT09IG51bGwgPyBudWxsIDogaWR4ICsgaW5kZXhEZWx0YSkpXG4gICAgICBpZiAoZGl2aWRlcllSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICBkaXZpZGVyWVJlZi5jdXJyZW50ICs9IGhlaWdodERlbHRhXG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZGl2aWRlckluZGV4LFxuICAgIGRpdmlkZXJZUmVmLFxuICAgIG9uU2Nyb2xsQXdheSxcbiAgICBvblJlcGluLFxuICAgIGp1bXBUb05ldyxcbiAgICBzaGlmdERpdmlkZXIsXG4gIH1cbn1cblxuLyoqXG4gKiBDb3VudHMgYXNzaXN0YW50IHR1cm5zIGluIG1lc3NhZ2VzW2RpdmlkZXJJbmRleC4uZW5kKS4gQSBcInR1cm5cIiBpcyB3aGF0XG4gKiB1c2VycyB0aGluayBvZiBhcyBcImEgbmV3IG1lc3NhZ2UgZnJvbSBDbGF1ZGVcIiDigJQgbm90IHJhdyBhc3Npc3RhbnQgZW50cmllc1xuICogKG9uZSB0dXJuIHlpZWxkcyBtdWx0aXBsZSBlbnRyaWVzOiB0b29sX3VzZSBibG9ja3MgKyB0ZXh0IGJsb2NrcykuIFdlIGNvdW50XG4gKiBub24tYXNzaXN0YW504oaSYXNzaXN0YW50IHRyYW5zaXRpb25zLCBidXQgb25seSBmb3IgZW50cmllcyB0aGF0IGFjdHVhbGx5XG4gKiBjYXJyeSB0ZXh0IOKAlCB0b29sLXVzZS1vbmx5IGVudHJpZXMgYXJlIHNraXBwZWQgKGxpa2UgcHJvZ3Jlc3MgbWVzc2FnZXMpXG4gKiBzbyBcIuKPuiBTZWFyY2hlZCBmb3IgMTMgcGF0dGVybnMsIHJlYWQgNiBmaWxlc1wiIGRvZXNuJ3QgdGljayB0aGUgcGlsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50VW5zZWVuQXNzaXN0YW50VHVybnMoXG4gIG1lc3NhZ2VzOiByZWFkb25seSBNZXNzYWdlW10sXG4gIGRpdmlkZXJJbmRleDogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgbGV0IGNvdW50ID0gMFxuICBsZXQgcHJldldhc0Fzc2lzdGFudCA9IGZhbHNlXG4gIGZvciAobGV0IGkgPSBkaXZpZGVySW5kZXg7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG0gPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAobS50eXBlID09PSAncHJvZ3Jlc3MnKSBjb250aW51ZVxuICAgIC8vIFRvb2wtdXNlLW9ubHkgYXNzaXN0YW50IGVudHJpZXMgYXJlbid0IFwibmV3IG1lc3NhZ2VzXCIgdG8gdGhlIHVzZXIg4oCUXG4gICAgLy8gc2tpcCB0aGVtIHRoZSBzYW1lIHdheSB3ZSBza2lwIHByb2dyZXNzLiBwcmV2V2FzQXNzaXN0YW50IGlzIE5PVFxuICAgIC8vIHVwZGF0ZWQsIHNvIGEgdGV4dCBibG9jayBpbW1lZGlhdGVseSBmb2xsb3dpbmcgc3RpbGwgY291bnRzIGFzIHRoZVxuICAgIC8vIHNhbWUgdHVybiAodG9vbF91c2UgKyB0ZXh0IGZyb20gb25lIEFQSSByZXNwb25zZSA9IDEpLlxuICAgIGlmIChtLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmICFhc3Npc3RhbnRIYXNWaXNpYmxlVGV4dChtKSkgY29udGludWVcbiAgICBjb25zdCBpc0Fzc2lzdGFudCA9IG0udHlwZSA9PT0gJ2Fzc2lzdGFudCdcbiAgICBpZiAoaXNBc3Npc3RhbnQgJiYgIXByZXZXYXNBc3Npc3RhbnQpIGNvdW50KytcbiAgICBwcmV2V2FzQXNzaXN0YW50ID0gaXNBc3Npc3RhbnRcbiAgfVxuICByZXR1cm4gY291bnRcbn1cblxuZnVuY3Rpb24gYXNzaXN0YW50SGFzVmlzaWJsZVRleHQobTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICBpZiAobS50eXBlICE9PSAnYXNzaXN0YW50JykgcmV0dXJuIGZhbHNlXG4gIGZvciAoY29uc3QgYiBvZiBtLm1lc3NhZ2UuY29udGVudCkge1xuICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0JyAmJiBiLnRleHQudHJpbSgpICE9PSAnJykgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgVW5zZWVuRGl2aWRlciA9IHsgZmlyc3RVbnNlZW5VdWlkOiBNZXNzYWdlWyd1dWlkJ107IGNvdW50OiBudW1iZXIgfVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgdW5zZWVuRGl2aWRlciBvYmplY3QgUkVQTCBwYXNzZXMgdG8gTWVzc2FnZXMgKyB0aGUgcGlsbC5cbiAqIFJldHVybnMgdW5kZWZpbmVkIG9ubHkgd2hlbiBubyBjb250ZW50IGhhcyBhcnJpdmVkIHBhc3QgdGhlIGRpdmlkZXJcbiAqIHlldCAobWVzc2FnZXNbZGl2aWRlckluZGV4XSBkb2Vzbid0IGV4aXN0KS4gT25jZSBBTlkgbWVzc2FnZSBhcnJpdmVzXG4gKiDigJQgaW5jbHVkaW5nIHRvb2xfdXNlLW9ubHkgYXNzaXN0YW50IGVudHJpZXMgYW5kIHRvb2xfcmVzdWx0IHVzZXIgZW50cmllc1xuICogdGhhdCBjb3VudFVuc2VlbkFzc2lzdGFudFR1cm5zIHNraXBzIOKAlCBjb3VudCBmbG9vcnMgYXQgMSBzbyB0aGUgcGlsbFxuICogZmxpcHMgZnJvbSBcIkp1bXAgdG8gYm90dG9tXCIgdG8gXCIxIG5ldyBtZXNzYWdlXCIuIFdpdGhvdXQgdGhlIGZsb29yLFxuICogdGhlIHBpbGwgc3RheXMgXCJKdW1wIHRvIGJvdHRvbVwiIHRocm91Z2ggYW4gZW50aXJlIHRvb2wtY2FsbCBzZXF1ZW5jZVxuICogdW50aWwgQ2xhdWRlJ3MgdGV4dCByZXNwb25zZSBsYW5kcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVVbnNlZW5EaXZpZGVyKFxuICBtZXNzYWdlczogcmVhZG9ubHkgTWVzc2FnZVtdLFxuICBkaXZpZGVySW5kZXg6IG51bWJlciB8IG51bGwsXG4pOiBVbnNlZW5EaXZpZGVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGRpdmlkZXJJbmRleCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICAvLyBTa2lwIHByb2dyZXNzIGFuZCBudWxsLXJlbmRlcmluZyBhdHRhY2htZW50cyB3aGVuIHBpY2tpbmcgdGhlIGRpdmlkZXJcbiAgLy8gYW5jaG9yIOKAlCBNZXNzYWdlcy50c3ggZmlsdGVycyB0aGVzZSBvdXQgb2YgcmVuZGVyYWJsZU1lc3NhZ2VzIGJlZm9yZSB0aGVcbiAgLy8gZGl2aWRlckJlZm9yZUluZGV4IHNlYXJjaCwgc28gdGhlaXIgVVVJRCB3b3VsZG4ndCBiZSBmb3VuZCAoQ0MtNzI0KS5cbiAgLy8gSG9vayBhdHRhY2htZW50cyB1c2UgcmFuZG9tVVVJRCgpIHNvIG5vdGhpbmcgc2hhcmVzIHRoZWlyIDI0LWNoYXIgcHJlZml4LlxuICBsZXQgYW5jaG9ySWR4ID0gZGl2aWRlckluZGV4XG4gIHdoaWxlIChcbiAgICBhbmNob3JJZHggPCBtZXNzYWdlcy5sZW5ndGggJiZcbiAgICAobWVzc2FnZXNbYW5jaG9ySWR4XT8udHlwZSA9PT0gJ3Byb2dyZXNzJyB8fFxuICAgICAgaXNOdWxsUmVuZGVyaW5nQXR0YWNobWVudChtZXNzYWdlc1thbmNob3JJZHhdISkpXG4gICkge1xuICAgIGFuY2hvcklkeCsrXG4gIH1cbiAgY29uc3QgdXVpZCA9IG1lc3NhZ2VzW2FuY2hvcklkeF0/LnV1aWRcbiAgaWYgKCF1dWlkKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IGNvdW50ID0gY291bnRVbnNlZW5Bc3Npc3RhbnRUdXJucyhtZXNzYWdlcywgZGl2aWRlckluZGV4KVxuICByZXR1cm4geyBmaXJzdFVuc2VlblV1aWQ6IHV1aWQsIGNvdW50OiBNYXRoLm1heCgxLCBjb3VudCkgfVxufVxuXG4vKipcbiAqIExheW91dCB3cmFwcGVyIGZvciB0aGUgUkVQTC4gSW4gZnVsbHNjcmVlbiBtb2RlLCBwdXRzIHNjcm9sbGFibGVcbiAqIGNvbnRlbnQgaW4gYSBzdGlja3ktc2Nyb2xsIGJveCBhbmQgcGlucyBib3R0b20gY29udGVudCB2aWEgZmxleGJveC5cbiAqIE91dHNpZGUgZnVsbHNjcmVlbiBtb2RlLCByZW5kZXJzIGNvbnRlbnQgc2VxdWVudGlhbGx5IHNvIHRoZSBleGlzdGluZ1xuICogbWFpbi1zY3JlZW4gc2Nyb2xsYmFjayByZW5kZXJpbmcgd29ya3MgdW5jaGFuZ2VkLlxuICpcbiAqIEZ1bGxzY3JlZW4gbW9kZSBkZWZhdWx0cyBvbiBmb3IgYW50cyAoQ0xBVURFX0NPREVfTk9fRkxJQ0tFUj0wIHRvIG9wdCBvdXQpXG4gKiBhbmQgb2ZmIGZvciBleHRlcm5hbCB1c2VycyAoQ0xBVURFX0NPREVfTk9fRkxJQ0tFUj0xIHRvIG9wdCBpbikuXG4gKiBUaGUgPEFsdGVybmF0ZVNjcmVlbj4gd3JhcHBlclxuICogKGFsdCBidWZmZXIgKyBtb3VzZSB0cmFja2luZyArIGhlaWdodCBjb25zdHJhaW50KSBsaXZlcyBhdCBSRVBMJ3Mgcm9vdFxuICogc28gbm90aGluZyBjYW4gYWNjaWRlbnRhbGx5IHJlbmRlciBvdXRzaWRlIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gRnVsbHNjcmVlbkxheW91dCh7XG4gIHNjcm9sbGFibGUsXG4gIGJvdHRvbSxcbiAgb3ZlcmxheSxcbiAgYm90dG9tRmxvYXQsXG4gIG1vZGFsLFxuICBtb2RhbFNjcm9sbFJlZixcbiAgc2Nyb2xsUmVmLFxuICBkaXZpZGVyWVJlZixcbiAgaGlkZVBpbGwgPSBmYWxzZSxcbiAgaGlkZVN0aWNreSA9IGZhbHNlLFxuICBuZXdNZXNzYWdlQ291bnQgPSAwLFxuICBvblBpbGxDbGljayxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzOiB0ZXJtaW5hbFJvd3MsIGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIC8vIFNjcm9sbC1kZXJpdmVkIGNocm9tZSBzdGF0ZSBsaXZlcyBIRVJFLCBub3QgaW4gUkVQTC4gU3RpY2t5VHJhY2tlclxuICAvLyB3cml0ZXMgdmlhIFNjcm9sbENocm9tZUNvbnRleHQ7IHBpbGxWaXNpYmxlIHN1YnNjcmliZXMgZGlyZWN0bHkgdG9cbiAgLy8gU2Nyb2xsQm94LiBCb3RoIGNoYW5nZSByYXJlbHkgKHBpbGwgZmxpcHMgb25jZSBwZXIgdGhyZXNob2xkIGNyb3NzaW5nLFxuICAvLyBzdGlja3kgY2hhbmdlcyB+NS0yMMOXL3RyYW5zY3JpcHQpIOKAlCByZS1yZW5kZXJpbmcgRnVsbHNjcmVlbkxheW91dCBvblxuICAvLyB0aG9zZSBpcyBmaW5lOyByZS1yZW5kZXJpbmcgdGhlIDY5NjYtbGluZSBSRVBMICsgaXRzIDIyKyB1c2VBcHBTdGF0ZVxuICAvLyBzZWxlY3RvcnMgcGVyLXNjcm9sbC1mcmFtZSB3YXMgbm90LlxuICBjb25zdCBbc3RpY2t5UHJvbXB0LCBzZXRTdGlja3lQcm9tcHRdID0gdXNlU3RhdGU8U3RpY2t5UHJvbXB0IHwgbnVsbD4obnVsbClcbiAgY29uc3QgY2hyb21lQ3R4ID0gdXNlTWVtbygoKSA9PiAoeyBzZXRTdGlja3lQcm9tcHQgfSksIFtdKVxuICAvLyBCb29sZWFuLXF1YW50aXplZCBzY3JvbGwgc3Vic2NyaXB0aW9uLiBTbmFwc2hvdCBpcyBcImlzIHZpZXdwb3J0IGJvdHRvbVxuICAvLyBhYm92ZSB0aGUgZGl2aWRlciB5P1wiIOKAlCBPYmplY3QuaXMgb24gYSBib29sZWFuIOKGkiBGdWxsc2NyZWVuTGF5b3V0IG9ubHlcbiAgLy8gcmUtcmVuZGVycyB3aGVuIHRoZSBwaWxsIHNob3VsZCBhY3R1YWxseSBmbGlwLCBub3QgcGVyLWZyYW1lLlxuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjayhcbiAgICAobGlzdGVuZXI6ICgpID0+IHZvaWQpID0+XG4gICAgICBzY3JvbGxSZWY/LmN1cnJlbnQ/LnN1YnNjcmliZShsaXN0ZW5lcikgPz8gKCgpID0+IHt9KSxcbiAgICBbc2Nyb2xsUmVmXSxcbiAgKVxuICBjb25zdCBwaWxsVmlzaWJsZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWY/LmN1cnJlbnRcbiAgICBjb25zdCBkaXZpZGVyWSA9IGRpdmlkZXJZUmVmPy5jdXJyZW50XG4gICAgaWYgKCFzIHx8IGRpdmlkZXJZID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiAoXG4gICAgICBzLmdldFNjcm9sbFRvcCgpICsgcy5nZXRQZW5kaW5nRGVsdGEoKSArIHMuZ2V0Vmlld3BvcnRIZWlnaHQoKSA8IGRpdmlkZXJZXG4gICAgKVxuICB9KVxuICAvLyBXaXJlIHVwIGh5cGVybGluayBjbGljayBoYW5kbGluZyDigJQgaW4gZnVsbHNjcmVlbiBtb2RlLCBtb3VzZSB0cmFja2luZ1xuICAvLyBpbnRlcmNlcHRzIGNsaWNrcyBiZWZvcmUgdGhlIHRlcm1pbmFsIGNhbiBvcGVuIE9TQyA4IGxpbmtzIG5hdGl2ZWx5LlxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpKSByZXR1cm5cbiAgICBjb25zdCBpbmsgPSBpbnN0YW5jZXMuZ2V0KHByb2Nlc3Muc3Rkb3V0KVxuICAgIGlmICghaW5rKSByZXR1cm5cbiAgICBpbmsub25IeXBlcmxpbmtDbGljayA9IHVybCA9PiB7XG4gICAgICAvLyBNb3N0IE9TQyA4IGxpbmtzIGVtaXR0ZWQgYnkgQ2xhdWRlIENvZGUgYXJlIGZpbGU6Ly8gVVJMcyBmcm9tXG4gICAgICAvLyBGaWxlUGF0aExpbmsgKEZpbGVFZGl0L0ZpbGVXcml0ZS9GaWxlUmVhZCB0b29sIG91dHB1dCkuIG9wZW5Ccm93c2VyXG4gICAgICAvLyByZWplY3RzIG5vbi1odHRwKHMpIHByb3RvY29scyDigJQgcm91dGUgZmlsZTogdG8gb3BlblBhdGggaW5zdGVhZC5cbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnZmlsZTonKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZvaWQgb3BlblBhdGgoZmlsZVVSTFRvUGF0aCh1cmwpKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBNYWxmb3JtZWQgZmlsZTogVVJMcyAoZS5nLiBmaWxlOi8vaG9zdC9wYXRoIGZyb20gcGxhaW4tdGV4dFxuICAgICAgICAgIC8vIGRldGVjdGlvbikgY2F1c2UgZmlsZVVSTFRvUGF0aCB0byB0aHJvdyDigJQgaWdub3JlIHNpbGVudGx5LlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKHVybClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluay5vbkh5cGVybGlua0NsaWNrID0gdW5kZWZpbmVkXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAoaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpKSB7XG4gICAgLy8gT3ZlcmxheSByZW5kZXJzIEJFTE9XIG1lc3NhZ2VzIGluc2lkZSB0aGUgc2FtZSBTY3JvbGxCb3gg4oCUIHVzZXIgY2FuXG4gICAgLy8gc2Nyb2xsIHVwIHRvIHNlZSBwcmlvciBjb250ZXh0IHdoaWxlIGEgcGVybWlzc2lvbiBkaWFsb2cgaXMgc2hvd2luZy5cbiAgICAvLyBUaGUgU2Nyb2xsQm94IG5ldmVyIHVubW91bnRzIGFjcm9zcyBvdmVybGF5IHRyYW5zaXRpb25zLCBzbyBzY3JvbGxcbiAgICAvLyBwb3NpdGlvbiBpcyBwcmVzZXJ2ZWQgd2l0aG91dCBzYXZlL3Jlc3RvcmUuIHN0aWNreVNjcm9sbCBhdXRvLXNjcm9sbHNcbiAgICAvLyB0byB0aGUgYXBwZW5kZWQgb3ZlcmxheSB3aGVuIGl0IG1vdW50cyAoaWYgdXNlciB3YXMgYWxyZWFkeSBhdFxuICAgIC8vIGJvdHRvbSk7IFJFUEwgcmUtcGlucyBvbiB0aGUgb3ZlcmxheSBhcHBlYXIvZGlzbWlzcyB0cmFuc2l0aW9uIGZvclxuICAgIC8vIHRoZSBjYXNlIHdoZXJlIHN0aWNreSB3YXMgYnJva2VuLiBUYWxsIGRpYWxvZ3MgKEZpbGVFZGl0IGRpZmZzKSBzdGlsbFxuICAgIC8vIGdldCBQZ1VwL1BnRG4vd2hlZWwg4oCUIHNhbWUgc2Nyb2xsUmVmIGRyaXZlcyB0aGUgc2FtZSBTY3JvbGxCb3guXG4gICAgLy8gVGhyZWUgc3RpY2t5IHN0YXRlczogbnVsbCAoYXQgYm90dG9tKSwge3RleHQsc2Nyb2xsVG99IChzY3JvbGxlZCB1cCxcbiAgICAvLyBoZWFkZXIgc2hvd3MpLCAnY2xpY2tlZCcgKGp1c3QgY2xpY2tlZCBoZWFkZXIg4oCUIGhpZGUgaXQgc28gdGhlXG4gICAgLy8gY29udGVudCDina8gdGFrZXMgcm93IDApLiBwYWRDb2xsYXBzZWQgY292ZXJzIHRoZSBsYXR0ZXIgdHdvOiBvbmNlXG4gICAgLy8gc2Nyb2xsZWQgYXdheSBmcm9tIGJvdHRvbSwgcGFkZGluZyBkcm9wcyB0byAwIGFuZCBzdGF5cyB0aGVyZSB1bnRpbFxuICAgIC8vIHJlcGluLiBoZWFkZXJWaXNpYmxlIGlzIG9ubHkgdGhlIG1pZGRsZSBzdGF0ZS4gQWZ0ZXIgY2xpY2s6XG4gICAgLy8gc2Nyb2xsQm94X3k9MCAoaGVhZGVyIGdvbmUpICsgcGFkZGluZz0wIOKGkiB2aWV3cG9ydFRvcD0wIOKGkiDina8gYXRcbiAgICAvLyByb3cgMC4gT24gbmV4dCBzY3JvbGwgdGhlIG9uQ2hhbmdlIGZpcmVzIHdpdGggYSBmcmVzaCB7dGV4dH0gYW5kXG4gICAgLy8gaGVhZGVyIGNvbWVzIGJhY2sgKHZpZXdwb3J0VG9wIDDihpIxLCBhIHNpbmdsZSAxLXJvdyBzaGlmdCDigJRcbiAgICAvLyBhY2NlcHRhYmxlIHNpbmNlIHVzZXIgZXhwbGljaXRseSBzY3JvbGxlZCkuXG4gICAgY29uc3Qgc3RpY2t5ID0gaGlkZVN0aWNreSA/IG51bGwgOiBzdGlja3lQcm9tcHRcbiAgICBjb25zdCBoZWFkZXJQcm9tcHQgPVxuICAgICAgc3RpY2t5ICE9IG51bGwgJiYgc3RpY2t5ICE9PSAnY2xpY2tlZCcgJiYgb3ZlcmxheSA9PSBudWxsID8gc3RpY2t5IDogbnVsbFxuICAgIGNvbnN0IHBhZENvbGxhcHNlZCA9IHN0aWNreSAhPSBudWxsICYmIG92ZXJsYXkgPT0gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8UHJvbXB0T3ZlcmxheVByb3ZpZGVyPlxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgICB7aGVhZGVyUHJvbXB0ICYmIChcbiAgICAgICAgICAgIDxTdGlja3lQcm9tcHRIZWFkZXJcbiAgICAgICAgICAgICAgdGV4dD17aGVhZGVyUHJvbXB0LnRleHR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlYWRlclByb21wdC5zY3JvbGxUb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8U2Nyb2xsQm94XG4gICAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBwYWRkaW5nVG9wPXtwYWRDb2xsYXBzZWQgPyAwIDogMX1cbiAgICAgICAgICAgIHN0aWNreVNjcm9sbFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTY3JvbGxDaHJvbWVDb250ZXh0IHZhbHVlPXtjaHJvbWVDdHh9PlxuICAgICAgICAgICAgICB7c2Nyb2xsYWJsZX1cbiAgICAgICAgICAgIDwvU2Nyb2xsQ2hyb21lQ29udGV4dD5cbiAgICAgICAgICAgIHtvdmVybGF5fVxuICAgICAgICAgIDwvU2Nyb2xsQm94PlxuICAgICAgICAgIHshaGlkZVBpbGwgJiYgcGlsbFZpc2libGUgJiYgb3ZlcmxheSA9PSBudWxsICYmIChcbiAgICAgICAgICAgIDxOZXdNZXNzYWdlc1BpbGwgY291bnQ9e25ld01lc3NhZ2VDb3VudH0gb25DbGljaz17b25QaWxsQ2xpY2t9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Ym90dG9tRmxvYXQgIT0gbnVsbCAmJiAoXG4gICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBib3R0b209ezB9IHJpZ2h0PXswfSBvcGFxdWU+XG4gICAgICAgICAgICAgIHtib3R0b21GbG9hdH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4U2hyaW5rPXswfSB3aWR0aD1cIjEwMCVcIiBtYXhIZWlnaHQ9XCI1MCVcIj5cbiAgICAgICAgICA8U3VnZ2VzdGlvbnNPdmVybGF5IC8+XG4gICAgICAgICAgPERpYWxvZ092ZXJsYXkgLz5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgIG92ZXJmbG93WT1cImhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2JvdHRvbX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHttb2RhbCAhPSBudWxsICYmIChcbiAgICAgICAgICA8TW9kYWxDb250ZXh0XG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICByb3dzOiB0ZXJtaW5hbFJvd3MgLSBNT0RBTF9UUkFOU0NSSVBUX1BFRUsgLSAxLFxuICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zIC0gNCxcbiAgICAgICAgICAgICAgc2Nyb2xsUmVmOiBtb2RhbFNjcm9sbFJlZiA/PyBudWxsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQm90dG9tLWFuY2hvcmVkLCBncm93cyB1cHdhcmQgdG8gZml0IGNvbnRlbnQuIG1heEhlaWdodCBrZWVwcyBhXG4gICAgICAgICAgICAgICAgZmV3IHJvd3Mgb2YgdHJhbnNjcmlwdCBwZWVrIGFib3ZlIHRoZSDilpQgZGl2aWRlci4gU2hvcnQgbW9kYWxzXG4gICAgICAgICAgICAgICAgKC9tb2RlbCkgc2l0IHNtYWxsIGF0IHRoZSBib3R0b20gd2l0aCBsb3RzIG9mIHRyYW5zY3JpcHQgYWJvdmU7XG4gICAgICAgICAgICAgICAgdGFsbCBtb2RhbHMgKC9idWRkeSBDYXJkKSBncm93IGFzIG5lZWRlZCwgY2xpcHBlZCBieSBvdmVyZmxvdy5cbiAgICAgICAgICAgICAgICBQcmV2aW91c2x5IGZpeGVkLWhlaWdodCAodG9wK2JvdHRvbSBhbmNob3JlZCkg4oCUIGFueSBmaXhlZCBjYXBcbiAgICAgICAgICAgICAgICBlaXRoZXIgY2xpcHBlZCB0YWxsIGNvbnRlbnQgb3IgbGVmdCBzaG9ydCBjb250ZW50IGZsb2F0aW5nIGluXG4gICAgICAgICAgICAgICAgYSBtb3N0bHktZW1wdHkgcGFuZS5cblxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9MCBvbiB0aGUgaW5uZXIgQm94IGlzIGxvYWQtYmVhcmluZzogd2l0aCBTaHJpbms9MSxcbiAgICAgICAgICAgICAgICB5b2dhIHNxdWVlemVzIGRlZXAgY2hpbGRyZW4gdG8gaD0wIHdoZW4gY29udGVudCA+IG1heEhlaWdodCxcbiAgICAgICAgICAgICAgICBhbmQgc2libGluZyBUZXh0cyBsYW5kIG9uIHRoZSBzYW1lIHJvdyDihpIgZ2hvc3Qgb3ZlcmxhcFxuICAgICAgICAgICAgICAgIChcIjUgc2VydmVyc1Agc2VydmVyc1wiKS4gQ2xpcHBpbmcgYXQgdGhlIG91dGVyIEJveCdzIG1heEhlaWdodFxuICAgICAgICAgICAgICAgIGtlZXBzIGNoaWxkcmVuIGF0IG5hdHVyYWwgc2l6ZS5cblxuICAgICAgICAgICAgICAgIERpdmlkZXIgd3JhcHBlZCBpbiBmbGV4U2hyaW5rPTA6IHdoZW4gdGhlIGlubmVyIGJveCBvdmVyZmxvd3NcbiAgICAgICAgICAgICAgICAodGFsbCAvY29uZmlnIG9wdGlvbiBsaXN0KSwgeW9nYSBzaHJpbmtzIHRoZSBkaXZpZGVyIFRleHQgdG9cbiAgICAgICAgICAgICAgICBoPTAgdG8gYWJzb3JiIHRoZSBkZWZpY2l0IOKAlCBpdCdzIHRoZSBvbmx5IHNocmlua2FibGUgc2libGluZy5cbiAgICAgICAgICAgICAgICBUaGUgd3JhcHBlciBrZWVwcyBpdCBhdCAxIHJvdzsgb3ZlcmZsb3cgcGFzdCBtYXhIZWlnaHQgaXNcbiAgICAgICAgICAgICAgICBjbGlwcGVkIGF0IHRoZSBib3R0b20gYnkgb3ZlcmZsb3c9aGlkZGVuIGluc3RlYWQuICovfVxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICAgICAgbWF4SGVpZ2h0PXt0ZXJtaW5hbFJvd3MgLSBNT0RBTF9UUkFOU0NSSVBUX1BFRUt9XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgIG9wYXF1ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwicGVybWlzc2lvblwiPnsn4paUJy5yZXBlYXQoY29sdW1ucyl9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIHBhZGRpbmdYPXsyfVxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21vZGFsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvTW9kYWxDb250ZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Qcm9tcHRPdmVybGF5UHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Njcm9sbGFibGV9XG4gICAgICB7Ym90dG9tfVxuICAgICAge292ZXJsYXl9XG4gICAgICB7bW9kYWx9XG4gICAgPC8+XG4gIClcbn1cblxuLy8gU2xhY2stc3R5bGUgcGlsbC4gQWJzb2x1dGUgb3ZlcmxheSBhdCBib3R0b209ezB9IG9mIHRoZSBzY3JvbGx3cmFwIOKAlCBmbG9hdHNcbi8vIG92ZXIgdGhlIFNjcm9sbEJveCdzIGxhc3QgY29udGVudCByb3csIG9ubHkgb2JzY3VyaW5nIHRoZSBjZW50ZXJlZCBwaWxsXG4vLyB0ZXh0ICh0aGUgcmVzdCBvZiB0aGUgcm93IHNob3dzIFNjcm9sbEJveCBjb250ZW50KS4gU2Nyb2xsLXNtZWFyIGZyb21cbi8vIERFQ1NUQk0gc2hpZnRpbmcgdGhlIHBpbGwncyBwaXhlbHMgaXMgcmVwYWlyZWQgYXQgdGhlIEluayBsYXllclxuLy8gKGFic29sdXRlUmVjdHNQcmV2IHRoaXJkLXBhc3MgaW4gcmVuZGVyLW5vZGUtdG8tb3V0cHV0LnRzLCAjMjM5MzkpLiBTaG93c1xuLy8gXCJKdW1wIHRvIGJvdHRvbVwiIHdoZW4gY291bnQgaXMgMCAoc2Nyb2xsZWQgYXdheSBidXQgbm8gbmV3IG1lc3NhZ2VzIHlldCDigJRcbi8vIHRoZSBkZWFkIHpvbmUgd2hlcmUgdXNlcnMgcHJldmlvdXNseSB0aG91Z2h0IGNoYXQgc3RhbGxlZCkuXG5mdW5jdGlvbiBOZXdNZXNzYWdlc1BpbGwoe1xuICBjb3VudCxcbiAgb25DbGljayxcbn06IHtcbiAgY291bnQ6IG51bWJlclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICBib3R0b209ezB9XG4gICAgICBsZWZ0PXswfVxuICAgICAgcmlnaHQ9ezB9XG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1xuICAgICAgICAgICAgaG92ZXIgPyAndXNlck1lc3NhZ2VCYWNrZ3JvdW5kSG92ZXInIDogJ3VzZXJNZXNzYWdlQmFja2dyb3VuZCdcbiAgICAgICAgICB9XG4gICAgICAgICAgZGltQ29sb3JcbiAgICAgICAgPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAge2NvdW50ID4gMFxuICAgICAgICAgICAgPyBgJHtjb3VudH0gbmV3ICR7cGx1cmFsKGNvdW50LCAnbWVzc2FnZScpfWBcbiAgICAgICAgICAgIDogJ0p1bXAgdG8gYm90dG9tJ317JyAnfVxuICAgICAgICAgIHtmaWd1cmVzLmFycm93RG93bn17JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vLyBDb250ZXh0IGJyZWFkY3J1bWI6IHdoZW4gc2Nyb2xsZWQgdXAgaW50byBoaXN0b3J5LCBwaW4gdGhlIGN1cnJlbnRcbi8vIGNvbnZlcnNhdGlvbiB0dXJuJ3MgcHJvbXB0IGFib3ZlIHRoZSB2aWV3cG9ydCBzbyB5b3Uga25vdyB3aGF0IENsYXVkZSB3YXNcbi8vIHJlc3BvbmRpbmcgdG8uIE5vcm1hbC1mbG93IHNpYmxpbmcgQkVGT1JFIHRoZSBTY3JvbGxCb3ggKG1pcnJvcnMgdGhlIHBpbGxcbi8vIGJlbG93IGl0KSDigJQgc2hyaW5rcyB0aGUgU2Nyb2xsQm94IGJ5IGV4YWN0bHkgMSByb3cgdmlhIGZsZXgsIHN0YXlzIG91dHNpZGVcbi8vIHRoZSBERUNTVEJNIHNjcm9sbCByZWdpb24uIENsaWNrIGp1bXBzIGJhY2sgdG8gdGhlIHByb21wdC5cbi8vXG4vLyBIZWlnaHQgaXMgRklYRUQgYXQgMSByb3cgKHRydW5jYXRlLWVuZCBmb3IgbG9uZyBwcm9tcHRzKS4gQSB2YXJpYWJsZS1oZWlnaHRcbi8vIGhlYWRlciAoMSB3aGVuIHNob3J0LCAyIHdoZW4gd3JhcHBlZCkgc2hpZnRzIHRoZSBTY3JvbGxCb3ggYnkgMSByb3cgZXZlcnlcbi8vIHRpbWUgdGhlIHN0aWNreSBwcm9tcHQgc3dpdGNoZXMgZHVyaW5nIHNjcm9sbCDigJQgY29udGVudCBqdW1wcyBvbiBzY3JlZW5cbi8vIGV2ZW4gd2l0aCBzY3JvbGxUb3AgdW5jaGFuZ2VkICh0aGUgREVDU1RCTSByZWdpb24gdG9wIHNoaWZ0cyB3aXRoIHRoZVxuLy8gU2Nyb2xsQm94LCBhbmQgdGhlIGRpZmYgZW5naW5lIHNlZXMgXCJldmVyeXRoaW5nIG1vdmVkXCIpLiBGaXhlZCBoZWlnaHRcbi8vIGtlZXBzIHRoZSBTY3JvbGxCb3ggYW5jaG9yZWQ7IG9ubHkgdGhlIGhlYWRlciBURVhUIGNoYW5nZXMsIG5vdCBpdHMgYm94LlxuZnVuY3Rpb24gU3RpY2t5UHJvbXB0SGVhZGVyKHtcbiAgdGV4dCxcbiAgb25DbGljayxcbn06IHtcbiAgdGV4dDogc3RyaW5nXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PXsxfVxuICAgICAgcGFkZGluZ1JpZ2h0PXsxfVxuICAgICAgYmFja2dyb3VuZENvbG9yPXtcbiAgICAgICAgaG92ZXIgPyAndXNlck1lc3NhZ2VCYWNrZ3JvdW5kSG92ZXInIDogJ3VzZXJNZXNzYWdlQmFja2dyb3VuZCdcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPFRleHQgY29sb3I9XCJzdWJ0bGVcIiB3cmFwPVwidHJ1bmNhdGUtZW5kXCI+XG4gICAgICAgIHtmaWd1cmVzLnBvaW50ZXJ9IHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbi8vIFNsYXNoLWNvbW1hbmQgc3VnZ2VzdGlvbiBvdmVybGF5IOKAlCBzZWUgcHJvbXB0T3ZlcmxheUNvbnRleHQudHN4IGZvciB3aHlcbi8vIGl0J3MgcG9ydGFsZWQuIFNjcm9sbC1zbWVhciBmcm9tIGZsb2F0aW5nIG92ZXIgdGhlIERFQ1NUQk0gcmVnaW9uIGlzXG4vLyByZXBhaXJlZCBhdCB0aGUgSW5rIGxheWVyIChhYnNvbHV0ZVJlY3RzUHJldiBpbiByZW5kZXItbm9kZS10by1vdXRwdXQudHMpLlxuLy8gVGhlIHJlbmRlcmVyIGNsYW1wcyBuZWdhdGl2ZSB5IHRvIDAgZm9yIGFic29sdXRlIGVsZW1lbnRzIChzZWVcbi8vIHJlbmRlci1ub2RlLXRvLW91dHB1dC50cyksIHNvIHRoZSB0b3Agcm93cyAoYmVzdCBtYXRjaGVzKSBzdGF5IHZpc2libGVcbi8vIGV2ZW4gd2hlbiB0aGUgb3ZlcmxheSBleHRlbmRzIGFib3ZlIHRoZSB2aWV3cG9ydC4gV2Ugb21pdCBtaW5IZWlnaHQgYW5kXG4vLyBmbGV4LWVuZCBoZXJlOiB0aGV5IHdvdWxkIGNyZWF0ZSBlbXB0eSBwYWRkaW5nIHJvd3MgdGhhdCBzaGlmdCB2aXNpYmxlXG4vLyBpdGVtcyBkb3duIGludG8gdGhlIHByb21wdCBhcmVhIHdoZW4gdGhlIGxpc3QgaGFzIGZld2VyIGl0ZW1zIHRoYW4gbWF4LlxuZnVuY3Rpb24gU3VnZ2VzdGlvbnNPdmVybGF5KCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VQcm9tcHRPdmVybGF5KClcbiAgaWYgKCFkYXRhIHx8IGRhdGEuc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgYm90dG9tPVwiMTAwJVwiXG4gICAgICBsZWZ0PXswfVxuICAgICAgcmlnaHQ9ezB9XG4gICAgICBwYWRkaW5nWD17Mn1cbiAgICAgIHBhZGRpbmdUb3A9ezF9XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIG9wYXF1ZVxuICAgID5cbiAgICAgIDxQcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zXG4gICAgICAgIHN1Z2dlc3Rpb25zPXtkYXRhLnN1Z2dlc3Rpb25zfVxuICAgICAgICBzZWxlY3RlZFN1Z2dlc3Rpb249e2RhdGEuc2VsZWN0ZWRTdWdnZXN0aW9ufVxuICAgICAgICBtYXhDb2x1bW5XaWR0aD17ZGF0YS5tYXhDb2x1bW5XaWR0aH1cbiAgICAgICAgb3ZlcmxheVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vLyBEaWFsb2cgcG9ydGFsZWQgZnJvbSBQcm9tcHRJbnB1dCAoQXV0b01vZGVPcHRJbkRpYWxvZykg4oCUIHNhbWUgY2xpcC1lc2NhcGVcbi8vIHBhdHRlcm4gYXMgU3VnZ2VzdGlvbnNPdmVybGF5LiBSZW5kZXJzIGxhdGVyIGluIHRyZWUgb3JkZXIgc28gaXQgcGFpbnRzXG4vLyBvdmVyIHN1Z2dlc3Rpb25zIGlmIGJvdGggYXJlIGV2ZXIgdXAgKHRoZXkgc2hvdWxkbid0IGJlKS5cbmZ1bmN0aW9uIERpYWxvZ092ZXJsYXkoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgbm9kZSA9IHVzZVByb21wdE92ZXJsYXlEaWFsb2coKVxuICBpZiAoIW5vZGUpIHJldHVybiBudWxsXG4gIHJldHVybiAoXG4gICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPVwiMTAwJVwiIGxlZnQ9ezB9IHJpZ2h0PXswfSBvcGFxdWU+XG4gICAgICB7bm9kZX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgIi8qKlxuICogTm90ZTogdGhpcyBjb2RlIGlzIGhvdCwgc28gaXMgb3B0aW1pemVkIGZvciBzcGVlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2U8QT4oYTogU2V0PEE+LCBiOiBTZXQ8QT4pOiBTZXQ8QT4ge1xuICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PEE+KClcbiAgZm9yIChjb25zdCBpdGVtIG9mIGEpIHtcbiAgICBpZiAoIWIuaGFzKGl0ZW0pKSB7XG4gICAgICByZXN1bHQuYWRkKGl0ZW0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBOb3RlOiB0aGlzIGNvZGUgaXMgaG90LCBzbyBpcyBvcHRpbWl6ZWQgZm9yIHNwZWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0czxBPihhOiBTZXQ8QT4sIGI6IFNldDxBPik6IGJvb2xlYW4ge1xuICBpZiAoYS5zaXplID09PSAwIHx8IGIuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgaWYgKGIuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBOb3RlOiB0aGlzIGNvZGUgaXMgaG90LCBzbyBpcyBvcHRpbWl6ZWQgZm9yIHNwZWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlcnk8QT4oYTogUmVhZG9ubHlTZXQ8QT4sIGI6IFJlYWRvbmx5U2V0PEE+KTogYm9vbGVhbiB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgaWYgKCFiLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogTm90ZTogdGhpcyBjb2RlIGlzIGhvdCwgc28gaXMgb3B0aW1pemVkIGZvciBzcGVlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uPEE+KGE6IFNldDxBPiwgYjogU2V0PEE+KTogU2V0PEE+IHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxBPigpXG4gIGZvciAoY29uc3QgaXRlbSBvZiBhKSB7XG4gICAgcmVzdWx0LmFkZChpdGVtKVxuICB9XG4gIGZvciAoY29uc3QgaXRlbSBvZiBiKSB7XG4gICAgcmVzdWx0LmFkZChpdGVtKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJpbXBvcnQge1xuICBTVEFUVVNfVEFHLFxuICBTVU1NQVJZX1RBRyxcbiAgVEFTS19OT1RJRklDQVRJT05fVEFHLFxufSBmcm9tICcuLi9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHsgQkFDS0dST1VORF9CQVNIX1NVTU1BUllfUFJFRklYIH0gZnJvbSAnLi4vdGFza3MvTG9jYWxTaGVsbFRhc2svTG9jYWxTaGVsbFRhc2suanMnXG5pbXBvcnQgdHlwZSB7XG4gIE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgUmVuZGVyYWJsZU1lc3NhZ2UsXG59IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIH0gZnJvbSAnLi9mdWxsc2NyZWVuLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFRhZyB9IGZyb20gJy4vbWVzc2FnZXMuanMnXG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVkQmFja2dyb3VuZEJhc2goXG4gIG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsXG4pOiBtc2cgaXMgTm9ybWFsaXplZFVzZXJNZXNzYWdlIHtcbiAgaWYgKG1zZy50eXBlICE9PSAndXNlcicpIHJldHVybiBmYWxzZVxuICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICBpZiAoY29udGVudD8udHlwZSAhPT0gJ3RleHQnKSByZXR1cm4gZmFsc2VcbiAgaWYgKCFjb250ZW50LnRleHQuaW5jbHVkZXMoYDwke1RBU0tfTk9USUZJQ0FUSU9OX1RBR31gKSkgcmV0dXJuIGZhbHNlXG4gIC8vIE9ubHkgY29sbGFwc2Ugc3VjY2Vzc2Z1bCBjb21wbGV0aW9ucyBcdTIwMTQgZmFpbGVkL2tpbGxlZCBzdGF5IHZpc2libGUgaW5kaXZpZHVhbGx5LlxuICBpZiAoZXh0cmFjdFRhZyhjb250ZW50LnRleHQsIFNUQVRVU19UQUcpICE9PSAnY29tcGxldGVkJykgcmV0dXJuIGZhbHNlXG4gIC8vIFRoZSBwcmVmaXggY29uc3RhbnQgZGlzdGluZ3Vpc2hlcyBiYXNoLWtpbmQgTG9jYWxTaGVsbFRhc2sgY29tcGxldGlvbnMgZnJvbVxuICAvLyBhZ2VudC93b3JrZmxvdy9tb25pdG9yIG5vdGlmaWNhdGlvbnMuIE1vbml0b3Ita2luZCBjb21wbGV0aW9ucyBoYXZlIHRoZWlyXG4gIC8vIG93biBzdW1tYXJ5IHdvcmRpbmcgYW5kIGRlbGliZXJhdGVseSBkb24ndCBjb2xsYXBzZSBoZXJlLlxuICByZXR1cm4gKFxuICAgIGV4dHJhY3RUYWcoY29udGVudC50ZXh0LCBTVU1NQVJZX1RBRyk/LnN0YXJ0c1dpdGgoXG4gICAgICBCQUNLR1JPVU5EX0JBU0hfU1VNTUFSWV9QUkVGSVgsXG4gICAgKSA/PyBmYWxzZVxuICApXG59XG5cbi8qKlxuICogQ29sbGFwc2VzIGNvbnNlY3V0aXZlIGNvbXBsZXRlZC1iYWNrZ3JvdW5kLWJhc2ggdGFzay1ub3RpZmljYXRpb25zIGludG8gYVxuICogc2luZ2xlIHN5bnRoZXRpYyBcIk4gYmFja2dyb3VuZCBjb21tYW5kcyBjb21wbGV0ZWRcIiBub3RpZmljYXRpb24uIEZhaWxlZC9raWxsZWRcbiAqIHRhc2tzIGFuZCBhZ2VudC93b3JrZmxvdyBub3RpZmljYXRpb25zIGFyZSBsZWZ0IGFsb25lLiBNb25pdG9yIHN0cmVhbVxuICogZXZlbnRzIChlbnF1ZXVlU3RyZWFtRXZlbnQpIGhhdmUgbm8gPHN0YXR1cz4gdGFnIGFuZCBuZXZlciBtYXRjaC5cbiAqXG4gKiBQYXNzLXRocm91Z2ggaW4gdmVyYm9zZSBtb2RlIHNvIGN0cmwrTyBzaG93cyBlYWNoIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucyhcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW10sXG4gIHZlcmJvc2U6IGJvb2xlYW4sXG4pOiBSZW5kZXJhYmxlTWVzc2FnZVtdIHtcbiAgaWYgKCFpc0Z1bGxzY3JlZW5FbnZFbmFibGVkKCkpIHJldHVybiBtZXNzYWdlc1xuICBpZiAodmVyYm9zZSkgcmV0dXJuIG1lc3NhZ2VzXG5cbiAgY29uc3QgcmVzdWx0OiBSZW5kZXJhYmxlTWVzc2FnZVtdID0gW11cbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCBtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAoaXNDb21wbGV0ZWRCYWNrZ3JvdW5kQmFzaChtc2cpKSB7XG4gICAgICBsZXQgY291bnQgPSAwXG4gICAgICB3aGlsZSAoaSA8IG1lc3NhZ2VzLmxlbmd0aCAmJiBpc0NvbXBsZXRlZEJhY2tncm91bmRCYXNoKG1lc3NhZ2VzW2ldISkpIHtcbiAgICAgICAgY291bnQrK1xuICAgICAgICBpKytcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChtc2cpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTeW50aGVzaXplIGEgdGFzay1ub3RpZmljYXRpb24gdGhhdCBVc2VyQWdlbnROb3RpZmljYXRpb25NZXNzYWdlXG4gICAgICAgIC8vIGFscmVhZHkga25vd3MgaG93IHRvIHJlbmRlciBcdTIwMTQgbm8gbmV3IHJlbmRlcmVyIG5lZWRlZC5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIC4uLm1zZyxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dDogYDwke1RBU0tfTk9USUZJQ0FUSU9OX1RBR30+PCR7U1RBVFVTX1RBR30+Y29tcGxldGVkPC8ke1NUQVRVU19UQUd9Pjwke1NVTU1BUllfVEFHfT4ke2NvdW50fSBiYWNrZ3JvdW5kIGNvbW1hbmRzIGNvbXBsZXRlZDwvJHtTVU1NQVJZX1RBR30+PC8ke1RBU0tfTk9USUZJQ0FUSU9OX1RBR30+YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2gobXNnKVxuICAgICAgaSsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgUmVuZGVyYWJsZU1lc3NhZ2UsXG4gIFN5c3RlbVN0b3BIb29rU3VtbWFyeU1lc3NhZ2UsXG59IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbmZ1bmN0aW9uIGlzTGFiZWxlZEhvb2tTdW1tYXJ5KFxuICBtc2c6IFJlbmRlcmFibGVNZXNzYWdlLFxuKTogbXNnIGlzIFN5c3RlbVN0b3BIb29rU3VtbWFyeU1lc3NhZ2Uge1xuICByZXR1cm4gKFxuICAgIG1zZy50eXBlID09PSAnc3lzdGVtJyAmJlxuICAgIG1zZy5zdWJ0eXBlID09PSAnc3RvcF9ob29rX3N1bW1hcnknICYmXG4gICAgbXNnLmhvb2tMYWJlbCAhPT0gdW5kZWZpbmVkXG4gIClcbn1cblxuLyoqXG4gKiBDb2xsYXBzZXMgY29uc2VjdXRpdmUgaG9vayBzdW1tYXJ5IG1lc3NhZ2VzIHdpdGggdGhlIHNhbWUgaG9va0xhYmVsXG4gKiAoZS5nLiBQb3N0VG9vbFVzZSkgaW50byBhIHNpbmdsZSBzdW1tYXJ5LiBUaGlzIGhhcHBlbnMgd2hlbiBwYXJhbGxlbFxuICogdG9vbCBjYWxscyBlYWNoIGVtaXQgdGhlaXIgb3duIGhvb2sgc3VtbWFyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlSG9va1N1bW1hcmllcyhcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW10sXG4pOiBSZW5kZXJhYmxlTWVzc2FnZVtdIHtcbiAgY29uc3QgcmVzdWx0OiBSZW5kZXJhYmxlTWVzc2FnZVtdID0gW11cbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCBtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXSFcbiAgICBpZiAoaXNMYWJlbGVkSG9va1N1bW1hcnkobXNnKSkge1xuICAgICAgY29uc3QgbGFiZWwgPSBtc2cuaG9va0xhYmVsXG4gICAgICBjb25zdCBncm91cDogU3lzdGVtU3RvcEhvb2tTdW1tYXJ5TWVzc2FnZVtdID0gW11cbiAgICAgIHdoaWxlIChpIDwgbWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBtZXNzYWdlc1tpXSFcbiAgICAgICAgaWYgKCFpc0xhYmVsZWRIb29rU3VtbWFyeShuZXh0KSB8fCBuZXh0Lmhvb2tMYWJlbCAhPT0gbGFiZWwpIGJyZWFrXG4gICAgICAgIGdyb3VwLnB1c2gobmV4dClcbiAgICAgICAgaSsrXG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAuLi5tc2csXG4gICAgICAgICAgaG9va0NvdW50OiBncm91cC5yZWR1Y2UoKHN1bSwgbSkgPT4gc3VtICsgbS5ob29rQ291bnQsIDApLFxuICAgICAgICAgIGhvb2tJbmZvczogZ3JvdXAuZmxhdE1hcChtID0+IG0uaG9va0luZm9zKSxcbiAgICAgICAgICBob29rRXJyb3JzOiBncm91cC5mbGF0TWFwKG0gPT4gbS5ob29rRXJyb3JzKSxcbiAgICAgICAgICBwcmV2ZW50ZWRDb250aW51YXRpb246IGdyb3VwLnNvbWUobSA9PiBtLnByZXZlbnRlZENvbnRpbnVhdGlvbiksXG4gICAgICAgICAgaGFzT3V0cHV0OiBncm91cC5zb21lKG0gPT4gbS5oYXNPdXRwdXQpLFxuICAgICAgICAgIC8vIFBhcmFsbGVsIHRvb2wgY2FsbHMnIGhvb2tzIG92ZXJsYXA7IG1heCBpcyBjbG9zZXN0IHRvIHdhbGwtY2xvY2suXG4gICAgICAgICAgdG90YWxEdXJhdGlvbk1zOiBNYXRoLm1heCguLi5ncm91cC5tYXAobSA9PiBtLnRvdGFsRHVyYXRpb25NcyA/PyAwKSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIGkrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEF0dGFjaG1lbnRNZXNzYWdlLCBSZW5kZXJhYmxlTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbmZ1bmN0aW9uIGlzVGVhbW1hdGVTaHV0ZG93bkF0dGFjaG1lbnQoXG4gIG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsXG4pOiBtc2cgaXMgQXR0YWNobWVudE1lc3NhZ2Uge1xuICByZXR1cm4gKFxuICAgIG1zZy50eXBlID09PSAnYXR0YWNobWVudCcgJiZcbiAgICBtc2cuYXR0YWNobWVudC50eXBlID09PSAndGFza19zdGF0dXMnICYmXG4gICAgbXNnLmF0dGFjaG1lbnQudGFza1R5cGUgPT09ICdpbl9wcm9jZXNzX3RlYW1tYXRlJyAmJlxuICAgIG1zZy5hdHRhY2htZW50LnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCdcbiAgKVxufVxuXG4vKipcbiAqIENvbGxhcHNlcyBjb25zZWN1dGl2ZSBpbi1wcm9jZXNzIHRlYW1tYXRlIHNodXRkb3duIHRhc2tfc3RhdHVzIGF0dGFjaG1lbnRzXG4gKiBpbnRvIGEgc2luZ2xlIGB0ZWFtbWF0ZV9zaHV0ZG93bl9iYXRjaGAgYXR0YWNobWVudCB3aXRoIGEgY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zKFxuICBtZXNzYWdlczogUmVuZGVyYWJsZU1lc3NhZ2VbXSxcbik6IFJlbmRlcmFibGVNZXNzYWdlW10ge1xuICBjb25zdCByZXN1bHQ6IFJlbmRlcmFibGVNZXNzYWdlW10gPSBbXVxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldIVxuICAgIGlmIChpc1RlYW1tYXRlU2h1dGRvd25BdHRhY2htZW50KG1zZykpIHtcbiAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgIHdoaWxlIChcbiAgICAgICAgaSA8IG1lc3NhZ2VzLmxlbmd0aCAmJlxuICAgICAgICBpc1RlYW1tYXRlU2h1dGRvd25BdHRhY2htZW50KG1lc3NhZ2VzW2ldISlcbiAgICAgICkge1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGkrK1xuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYXR0YWNobWVudCcsXG4gICAgICAgICAgdXVpZDogbXNnLnV1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiBtc2cudGltZXN0YW1wLFxuICAgICAgICAgIGF0dGFjaG1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZWFtbWF0ZV9zaHV0ZG93bl9iYXRjaCcsXG4gICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChtc2cpXG4gICAgICBpKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBCZXRhVG9vbFVzZUJsb2NrIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL2JldGEvbWVzc2FnZXMvbWVzc2FnZXMubWpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sUmVzdWx0QmxvY2tQYXJhbSB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9tZXNzYWdlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgR3JvdXBlZFRvb2xVc2VNZXNzYWdlLFxuICBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZSxcbiAgTm9ybWFsaXplZE1lc3NhZ2UsXG4gIE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgUHJvZ3Jlc3NNZXNzYWdlLFxuICBSZW5kZXJhYmxlTWVzc2FnZSxcbn0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcblxuZXhwb3J0IHR5cGUgTWVzc2FnZVdpdGhvdXRQcm9ncmVzcyA9IEV4Y2x1ZGU8Tm9ybWFsaXplZE1lc3NhZ2UsIFByb2dyZXNzTWVzc2FnZT5cblxuZXhwb3J0IHR5cGUgR3JvdXBpbmdSZXN1bHQgPSB7XG4gIG1lc3NhZ2VzOiBSZW5kZXJhYmxlTWVzc2FnZVtdXG59XG5cbi8vIENhY2hlIHRoZSBzZXQgb2YgdG9vbCBuYW1lcyB0aGF0IHN1cHBvcnQgZ3JvdXBlZCByZW5kZXJpbmcsIGtleWVkIGJ5IHRoZVxuLy8gdG9vbHMgYXJyYXkgcmVmZXJlbmNlLiBUaGUgdG9vbHMgYXJyYXkgaXMgc3RhYmxlIGFjcm9zcyByZW5kZXJzIChvbmx5XG4vLyByZXBsYWNlZCBvbiBNQ1AgY29ubmVjdC9kaXNjb25uZWN0KSwgc28gdGhpcyBhdm9pZHMgcmVidWlsZGluZyB0aGUgc2V0IG9uXG4vLyBldmVyeSBjYWxsLiBXZWFrTWFwIGxldHMgb2xkIGVudHJpZXMgYmUgR0MnZCB3aGVuIHRoZSBhcnJheSBpcyByZXBsYWNlZC5cbmNvbnN0IEdST1VQSU5HX0NBQ0hFID0gbmV3IFdlYWtNYXA8VG9vbHMsIFNldDxzdHJpbmc+PigpXG5cbmZ1bmN0aW9uIGdldFRvb2xzV2l0aEdyb3VwaW5nKHRvb2xzOiBUb29scyk6IFNldDxzdHJpbmc+IHtcbiAgbGV0IGNhY2hlZCA9IEdST1VQSU5HX0NBQ0hFLmdldCh0b29scylcbiAgaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBuZXcgU2V0KHRvb2xzLmZpbHRlcih0ID0+IHQucmVuZGVyR3JvdXBlZFRvb2xVc2UpLm1hcCh0ID0+IHQubmFtZSkpXG4gICAgR1JPVVBJTkdfQ0FDSEUuc2V0KHRvb2xzLCBjYWNoZWQpXG4gIH1cbiAgcmV0dXJuIGNhY2hlZFxufVxuXG5mdW5jdGlvbiBnZXRUb29sVXNlSW5mbyhcbiAgbXNnOiBNZXNzYWdlV2l0aG91dFByb2dyZXNzLFxuKTogeyBtZXNzYWdlSWQ6IHN0cmluZzsgdG9vbFVzZUlkOiBzdHJpbmc7IHRvb2xOYW1lOiBzdHJpbmcgfSB8IG51bGwge1xuICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmIG1zZy5tZXNzYWdlLmNvbnRlbnRbMF0/LnR5cGUgPT09ICd0b29sX3VzZScpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlSWQ6IG1zZy5tZXNzYWdlLmlkLFxuICAgICAgdG9vbFVzZUlkOiBjb250ZW50LmlkLFxuICAgICAgdG9vbE5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBHcm91cHMgdG9vbCB1c2VzIGJ5IG1lc3NhZ2UuaWQgKHNhbWUgQVBJIHJlc3BvbnNlKSBpZiB0aGUgdG9vbCBzdXBwb3J0cyBncm91cGVkIHJlbmRlcmluZy5cbiAqIE9ubHkgZ3JvdXBzIDIrIHRvb2xzIG9mIHRoZSBzYW1lIHR5cGUgZnJvbSB0aGUgc2FtZSBtZXNzYWdlLlxuICogQWxzbyBjb2xsZWN0cyBjb3JyZXNwb25kaW5nIHRvb2xfcmVzdWx0cyBhbmQgYXR0YWNoZXMgdGhlbSB0byB0aGUgZ3JvdXBlZCBtZXNzYWdlLlxuICogV2hlbiB2ZXJib3NlIGlzIHRydWUsIHNraXBzIGdyb3VwaW5nIHNvIG1lc3NhZ2VzIHJlbmRlciBhdCBvcmlnaW5hbCBwb3NpdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUdyb3VwaW5nKFxuICBtZXNzYWdlczogTWVzc2FnZVdpdGhvdXRQcm9ncmVzc1tdLFxuICB0b29sczogVG9vbHMsXG4gIHZlcmJvc2U6IGJvb2xlYW4gPSBmYWxzZSxcbik6IEdyb3VwaW5nUmVzdWx0IHtcbiAgLy8gSW4gdmVyYm9zZSBtb2RlLCBkb24ndCBncm91cCAtIGVhY2ggbWVzc2FnZSByZW5kZXJzIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuICBpZiAodmVyYm9zZSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgfVxuICB9XG4gIGNvbnN0IHRvb2xzV2l0aEdyb3VwaW5nID0gZ2V0VG9vbHNXaXRoR3JvdXBpbmcodG9vbHMpXG5cbiAgLy8gRmlyc3QgcGFzczogZ3JvdXAgdG9vbCB1c2VzIGJ5IG1lc3NhZ2UuaWQgKyB0b29sIG5hbWVcbiAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgTm9ybWFsaXplZEFzc2lzdGFudE1lc3NhZ2U8QmV0YVRvb2xVc2VCbG9jaz5bXVxuICA+KClcblxuICBmb3IgKGNvbnN0IG1zZyBvZiBtZXNzYWdlcykge1xuICAgIGNvbnN0IGluZm8gPSBnZXRUb29sVXNlSW5mbyhtc2cpXG4gICAgaWYgKGluZm8gJiYgdG9vbHNXaXRoR3JvdXBpbmcuaGFzKGluZm8udG9vbE5hbWUpKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpbmZvLm1lc3NhZ2VJZH06JHtpbmZvLnRvb2xOYW1lfWBcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpID8/IFtdXG4gICAgICBncm91cC5wdXNoKG1zZyBhcyBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZTxCZXRhVG9vbFVzZUJsb2NrPilcbiAgICAgIGdyb3Vwcy5zZXQoa2V5LCBncm91cClcbiAgICB9XG4gIH1cblxuICAvLyBJZGVudGlmeSB2YWxpZCBncm91cHMgKDIrIGl0ZW1zKSBhbmQgY29sbGVjdCB0aGVpciB0b29sIHVzZSBJRHNcbiAgY29uc3QgdmFsaWRHcm91cHMgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICBOb3JtYWxpemVkQXNzaXN0YW50TWVzc2FnZTxCZXRhVG9vbFVzZUJsb2NrPltdXG4gID4oKVxuICBjb25zdCBncm91cGVkVG9vbFVzZUlkcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgZm9yIChjb25zdCBba2V5LCBncm91cF0gb2YgZ3JvdXBzKSB7XG4gICAgaWYgKGdyb3VwLmxlbmd0aCA+PSAyKSB7XG4gICAgICB2YWxpZEdyb3Vwcy5zZXQoa2V5LCBncm91cClcbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRUb29sVXNlSW5mbyhtc2cpXG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgZ3JvdXBlZFRvb2xVc2VJZHMuYWRkKGluZm8udG9vbFVzZUlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29sbGVjdCByZXN1bHQgbWVzc2FnZXMgZm9yIGdyb3VwZWQgdG9vbF91c2VzXG4gIC8vIE1hcCBmcm9tIHRvb2xfdXNlX2lkIHRvIHRoZSB1c2VyIG1lc3NhZ2UgY29udGFpbmluZyB0aGF0IHJlc3VsdFxuICBjb25zdCByZXN1bHRzQnlUb29sVXNlSWQgPSBuZXcgTWFwPHN0cmluZywgTm9ybWFsaXplZFVzZXJNZXNzYWdlPigpXG5cbiAgZm9yIChjb25zdCBtc2cgb2YgbWVzc2FnZXMpIHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIG1zZy5tZXNzYWdlLmNvbnRlbnQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbnRlbnQudHlwZSA9PT0gJ3Rvb2xfcmVzdWx0JyAmJlxuICAgICAgICAgIGdyb3VwZWRUb29sVXNlSWRzLmhhcyhjb250ZW50LnRvb2xfdXNlX2lkKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHRzQnlUb29sVXNlSWQuc2V0KGNvbnRlbnQudG9vbF91c2VfaWQsIG1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlY29uZCBwYXNzOiBidWlsZCBvdXRwdXQsIGVtaXR0aW5nIGVhY2ggZ3JvdXAgb25seSBvbmNlXG4gIGNvbnN0IHJlc3VsdDogUmVuZGVyYWJsZU1lc3NhZ2VbXSA9IFtdXG4gIGNvbnN0IGVtaXR0ZWRHcm91cHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGZvciAoY29uc3QgbXNnIG9mIG1lc3NhZ2VzKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldFRvb2xVc2VJbmZvKG1zZylcblxuICAgIGlmIChpbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpbmZvLm1lc3NhZ2VJZH06JHtpbmZvLnRvb2xOYW1lfWBcbiAgICAgIGNvbnN0IGdyb3VwID0gdmFsaWRHcm91cHMuZ2V0KGtleSlcblxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGlmICghZW1pdHRlZEdyb3Vwcy5oYXMoa2V5KSkge1xuICAgICAgICAgIGVtaXR0ZWRHcm91cHMuYWRkKGtleSlcbiAgICAgICAgICBjb25zdCBmaXJzdE1zZyA9IGdyb3VwWzBdIVxuXG4gICAgICAgICAgLy8gQ29sbGVjdCByZXN1bHRzIGZvciB0aGlzIGdyb3VwXG4gICAgICAgICAgY29uc3QgcmVzdWx0czogTm9ybWFsaXplZFVzZXJNZXNzYWdlW10gPSBbXVxuICAgICAgICAgIGZvciAoY29uc3QgYXNzaXN0YW50TXNnIG9mIGdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCB0b29sVXNlSWQgPSAoXG4gICAgICAgICAgICAgIGFzc2lzdGFudE1zZy5tZXNzYWdlLmNvbnRlbnRbMF0gYXMgeyBpZDogc3RyaW5nIH1cbiAgICAgICAgICAgICkuaWRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdE1zZyA9IHJlc3VsdHNCeVRvb2xVc2VJZC5nZXQodG9vbFVzZUlkKVxuICAgICAgICAgICAgaWYgKHJlc3VsdE1zZykge1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGdyb3VwZWRNZXNzYWdlOiBHcm91cGVkVG9vbFVzZU1lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZ3JvdXBlZF90b29sX3VzZScsXG4gICAgICAgICAgICB0b29sTmFtZTogaW5mby50b29sTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBncm91cCxcbiAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICBkaXNwbGF5TWVzc2FnZTogZmlyc3RNc2csXG4gICAgICAgICAgICB1dWlkOiBgZ3JvdXBlZC0ke2ZpcnN0TXNnLnV1aWR9YCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyc3RNc2cudGltZXN0YW1wLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBpbmZvLm1lc3NhZ2VJZCxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goZ3JvdXBlZE1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTa2lwIHVzZXIgbWVzc2FnZXMgd2hvc2UgdG9vbF9yZXN1bHRzIGFyZSBhbGwgZ3JvdXBlZFxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICBjb25zdCB0b29sUmVzdWx0cyA9IG1zZy5tZXNzYWdlLmNvbnRlbnQuZmlsdGVyKFxuICAgICAgICAoYyk6IGMgaXMgVG9vbFJlc3VsdEJsb2NrUGFyYW0gPT4gYy50eXBlID09PSAndG9vbF9yZXN1bHQnLFxuICAgICAgKVxuICAgICAgaWYgKHRvb2xSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsR3JvdXBlZCA9IHRvb2xSZXN1bHRzLmV2ZXJ5KHRyID0+XG4gICAgICAgICAgZ3JvdXBlZFRvb2xVc2VJZHMuaGFzKHRyLnRvb2xfdXNlX2lkKSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoYWxsR3JvdXBlZCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChtc2cpXG4gIH1cblxuICByZXR1cm4geyBtZXNzYWdlczogcmVzdWx0IH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJlbmRlcmFibGVNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7XG4gIElOVEVSUlVQVF9NRVNTQUdFLFxuICBJTlRFUlJVUFRfTUVTU0FHRV9GT1JfVE9PTF9VU0UsXG59IGZyb20gJy4vbWVzc2FnZXMuanMnXG5cbmNvbnN0IFNZU1RFTV9SRU1JTkRFUl9DTE9TRSA9ICc8L3N5c3RlbS1yZW1pbmRlcj4nXG5cbi8vIFVzZXJUZXh0TWVzc2FnZS50c3g6fjg0IHJlcGxhY2VzIHRoZXNlIHdpdGggPEludGVycnVwdGVkQnlVc2VyIC8+XG4vLyAocmVuZGVycyAnSW50ZXJydXB0ZWQgXHUwMEI3IC9pc3N1ZS4uLicpLiBSYXcgdGV4dCBuZXZlciBhcHBlYXJzIG9uIHNjcmVlbjtcbi8vIHNlYXJjaGluZyBpdCB5aWVsZHMgcGhhbnRvbSBtYXRjaGVzIFx1MjAxNCAvdGVyciBcdTIxOTIgaW5bdGVycl11cHRlZC5cbmNvbnN0IFJFTkRFUkVEX0FTX1NFTlRJTkVMID0gbmV3IFNldChbXG4gIElOVEVSUlVQVF9NRVNTQUdFLFxuICBJTlRFUlJVUFRfTUVTU0FHRV9GT1JfVE9PTF9VU0UsXG5dKVxuXG5jb25zdCBzZWFyY2hUZXh0Q2FjaGUgPSBuZXcgV2Vha01hcDxSZW5kZXJhYmxlTWVzc2FnZSwgc3RyaW5nPigpXG5cbi8qKiBGbGF0dGVuIGEgUmVuZGVyYWJsZU1lc3NhZ2UgdG8gbG93ZXJjYXNlZCBzZWFyY2hhYmxlIHRleHQuIFdlYWtNYXAtXG4gKiAgY2FjaGVkIFx1MjAxNCBtZXNzYWdlcyBhcmUgYXBwZW5kLW9ubHkgYW5kIGltbXV0YWJsZSBzbyBhIGhpdCBpcyBhbHdheXNcbiAqICB2YWxpZC4gTG93ZXJjYXNlZCBhdCBjYWNoZSB0aW1lOiB0aGUgb25seSBjYWxsZXIgaW1tZWRpYXRlbHlcbiAqICAudG9Mb3dlckNhc2UoKWQgdGhlIHJlc3VsdCwgcmUtbG93ZXJpbmcgfjEuNU1CIG9uIGV2ZXJ5IGtleXN0cm9rZVxuICogICh0aGUgYmFja3NwYWNlIGhhbmcpLiBSZXR1cm5zICcnIGZvciBub24tc2VhcmNoYWJsZSB0eXBlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJhYmxlU2VhcmNoVGV4dChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKTogc3RyaW5nIHtcbiAgY29uc3QgY2FjaGVkID0gc2VhcmNoVGV4dENhY2hlLmdldChtc2cpXG4gIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZFxuICBjb25zdCByZXN1bHQgPSBjb21wdXRlU2VhcmNoVGV4dChtc2cpLnRvTG93ZXJDYXNlKClcbiAgc2VhcmNoVGV4dENhY2hlLnNldChtc2csIHJlc3VsdClcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjb21wdXRlU2VhcmNoVGV4dChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKTogc3RyaW5nIHtcbiAgbGV0IHJhdyA9ICcnXG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICd1c2VyJzoge1xuICAgICAgY29uc3QgYyA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmF3ID0gUkVOREVSRURfQVNfU0VOVElORUwuaGFzKGMpID8gJycgOiBjXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGIgb2YgYykge1xuICAgICAgICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgaWYgKCFSRU5ERVJFRF9BU19TRU5USU5FTC5oYXMoYi50ZXh0KSkgcGFydHMucHVzaChiLnRleHQpXG4gICAgICAgICAgfSBlbHNlIGlmIChiLnR5cGUgPT09ICd0b29sX3Jlc3VsdCcpIHtcbiAgICAgICAgICAgIC8vIGIuY29udGVudCBpcyB0aGUgTU9ERUwtZmFjaW5nIHNlcmlhbGl6YXRpb24gKGZyb20gZWFjaCB0b29sJ3NcbiAgICAgICAgICAgIC8vIG1hcFRvb2xSZXN1bHRUb1Rvb2xSZXN1bHRCbG9ja1BhcmFtKSBcdTIwMTQgYWRkcyBzeXN0ZW0tcmVtaW5kZXJzLFxuICAgICAgICAgICAgLy8gPHBlcnNpc3RlZC1vdXRwdXQ+IHdyYXBwZXJzLCBiYWNrZ3JvdW5kSW5mbyBzdHJpbmdzLFxuICAgICAgICAgICAgLy8gQ1lCRVJfUklTS19NSVRJR0FUSU9OX1JFTUlOREVSLiBUaGUgVUlcbiAgICAgICAgICAgIC8vIHJlbmRlcnMgbXNnLnRvb2xVc2VSZXN1bHQgKHRoZSB0b29sJ3MgbmF0aXZlIE91dCkgdmlhXG4gICAgICAgICAgICAvLyByZW5kZXJUb29sUmVzdWx0TWVzc2FnZSBcdTIwMTQgRElGRkVSRU5UIHRleHQuIEluZGV4aW5nIGIuY29udGVudFxuICAgICAgICAgICAgLy8geWllbGRzIHBoYW50b21zOiAvbWFsd2FyZSBcdTIxOTIgbWF0Y2hlcyB0aGUgcmVtaW5kZXIsIC9iYWNrZ3JvdW5kXG4gICAgICAgICAgICAvLyBcdTIxOTIgbWF0Y2hlcyB0aGUgbW9kZWwtb25seSBJRCBzdHJpbmcsIG5vbmUgcmVuZGVyLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIER1Y2stdHlwZSB0aGUgbmF0aXZlIE91dCBpbnN0ZWFkLiBDb3ZlcnMgdGhlIGNvbW1vbiBzaGFwZXM6XG4gICAgICAgICAgICAvLyBCYXNoIHtzdGRvdXQsc3RkZXJyfSwgR3JlcCB7Y29udGVudCxmaWxlbmFtZXN9LCBSZWFkXG4gICAgICAgICAgICAvLyB7ZmlsZS5jb250ZW50fS4gVW5rbm93biBzaGFwZXMgaW5kZXggZW1wdHkgXHUyMDE0IHVuZGVyLWNvdW50IGlzXG4gICAgICAgICAgICAvLyBob25lc3QsIHBoYW50b20gaXMgYSBsaWUuIFByb3BlciBmaXggaXMgcGVyLXRvb2xcbiAgICAgICAgICAgIC8vIGV4dHJhY3RTZWFyY2hUZXh0KE91dCkgb24gdGhlIFRvb2wgaW50ZXJmYWNlIChUT0RPKS5cbiAgICAgICAgICAgIHBhcnRzLnB1c2godG9vbFJlc3VsdFNlYXJjaFRleHQobXNnLnRvb2xVc2VSZXN1bHQpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByYXcgPSBwYXJ0cy5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSAnYXNzaXN0YW50Jzoge1xuICAgICAgY29uc3QgYyA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICAgIC8vIHRleHQgYmxvY2tzICsgdG9vbF91c2UgaW5wdXRzLiB0b29sX3VzZSByZW5kZXJzIGFzIFwiXHUyM0ZBIEJhc2goY21kKVwiXG4gICAgICAgIC8vIFx1MjAxNCB0aGUgY29tbWFuZC9wYXR0ZXJuL3BhdGggaXMgdmlzaWJsZSBhbmQgc2VhcmNoYWJsZS1leHBlY3RlZC5cbiAgICAgICAgLy8gU2tpcCB0aGlua2luZyAoaGlkZGVuIGJ5IGhpZGVQYXN0VGhpbmtpbmcgaW4gdHJhbnNjcmlwdCBtb3VudCkuXG4gICAgICAgIHJhdyA9IGNcbiAgICAgICAgICAuZmxhdE1hcChiID0+IHtcbiAgICAgICAgICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIFtiLnRleHRdXG4gICAgICAgICAgICBpZiAoYi50eXBlID09PSAndG9vbF91c2UnKSByZXR1cm4gW3Rvb2xVc2VTZWFyY2hUZXh0KGIuaW5wdXQpXVxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuam9pbignXFxuJylcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ2F0dGFjaG1lbnQnOiB7XG4gICAgICAvLyByZWxldmFudF9tZW1vcmllcyByZW5kZXJzIGZ1bGwgbS5jb250ZW50IGluIHRyYW5zY3JpcHQgbW9kZVxuICAgICAgLy8gKEF0dGFjaG1lbnRNZXNzYWdlLnRzeCA8QW5zaT57bS5jb250ZW50fTwvQW5zaT4pLiBWaXNpYmxlIGJ1dFxuICAgICAgLy8gdW5zZWFyY2hhYmxlIHdpdGhvdXQgdGhpcyBcdTIwMTQgWyBkdW1wIGZpbmRzIGl0LCAvIGRvZXNuJ3QuXG4gICAgICBpZiAobXNnLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3JlbGV2YW50X21lbW9yaWVzJykge1xuICAgICAgICByYXcgPSBtc2cuYXR0YWNobWVudC5tZW1vcmllcy5tYXAobSA9PiBtLmNvbnRlbnQpLmpvaW4oJ1xcbicpXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAvLyBNaWQtdHVybiBwcm9tcHRzIFx1MjAxNCBxdWV1ZWQgd2hpbGUgYW4gYWdlbnQgaXMgcnVubmluZy4gUmVuZGVyIHZpYVxuICAgICAgICAvLyBVc2VyVGV4dE1lc3NhZ2UgKEF0dGFjaG1lbnRNZXNzYWdlLnRzeDp+MzQ4KS4gc3RpY2t5UHJvbXB0VGV4dFxuICAgICAgICAvLyAoVmlydHVhbE1lc3NhZ2VMaXN0LnRzeDp+MTAzKSBoYXMgdGhlIHNhbWUgZ3VhcmRzIFx1MjAxNCBtaXJyb3IgaGVyZS5cbiAgICAgICAgbXNnLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJyAmJlxuICAgICAgICBtc2cuYXR0YWNobWVudC5jb21tYW5kTW9kZSAhPT0gJ3Rhc2stbm90aWZpY2F0aW9uJyAmJlxuICAgICAgICAhbXNnLmF0dGFjaG1lbnQuaXNNZXRhXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcCA9IG1zZy5hdHRhY2htZW50LnByb21wdFxuICAgICAgICByYXcgPVxuICAgICAgICAgIHR5cGVvZiBwID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBwXG4gICAgICAgICAgICA6IHAuZmxhdE1hcChiID0+IChiLnR5cGUgPT09ICd0ZXh0JyA/IFtiLnRleHRdIDogW10pKS5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJzoge1xuICAgICAgLy8gcmVsZXZhbnRfbWVtb3JpZXMgYXR0YWNobWVudHMgYXJlIGFic29yYmVkIGludG8gY29sbGFwc2UgZ3JvdXBzXG4gICAgICAvLyAoY29sbGFwc2VSZWFkU2VhcmNoLnRzKTsgdGhlaXIgY29udGVudCBpcyB2aXNpYmxlIGluIHRyYW5zY3JpcHQgbW9kZVxuICAgICAgLy8gdmlhIENvbGxhcHNlZFJlYWRTZWFyY2hDb250ZW50LCBzbyBtaXJyb3IgaXQgaGVyZSBmb3IgLyBzZWFyY2guXG4gICAgICBpZiAobXNnLnJlbGV2YW50TWVtb3JpZXMpIHtcbiAgICAgICAgcmF3ID0gbXNnLnJlbGV2YW50TWVtb3JpZXMubWFwKG0gPT4gbS5jb250ZW50KS5qb2luKCdcXG4nKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGdyb3VwZWRfdG9vbF91c2UsIHN5c3RlbSBcdTIwMTQgbm8gdGV4dCBjb250ZW50XG4gICAgICBicmVha1xuICB9XG4gIC8vIFN0cmlwIDxzeXN0ZW0tcmVtaW5kZXI+IGFueXdoZXJlIFx1MjAxNCBDbGF1ZGUgY29udGV4dCwgbm90IHVzZXItdmlzaWJsZS5cbiAgLy8gTWlkLW1lc3NhZ2Ugb24gY2MgLWMgcmVzdW1lcyAobWVtb3J5IHJlbWluZGVycyBiZXR3ZWVuIHByb21wdCBsaW5lcykuXG4gIGxldCB0ID0gcmF3XG4gIGxldCBvcGVuID0gdC5pbmRleE9mKCc8c3lzdGVtLXJlbWluZGVyPicpXG4gIHdoaWxlIChvcGVuID49IDApIHtcbiAgICBjb25zdCBjbG9zZSA9IHQuaW5kZXhPZihTWVNURU1fUkVNSU5ERVJfQ0xPU0UsIG9wZW4pXG4gICAgaWYgKGNsb3NlIDwgMCkgYnJlYWtcbiAgICB0ID0gdC5zbGljZSgwLCBvcGVuKSArIHQuc2xpY2UoY2xvc2UgKyBTWVNURU1fUkVNSU5ERVJfQ0xPU0UubGVuZ3RoKVxuICAgIG9wZW4gPSB0LmluZGV4T2YoJzxzeXN0ZW0tcmVtaW5kZXI+JylcbiAgfVxuICByZXR1cm4gdFxufVxuXG4vKiogVG9vbCBpbnZvY2F0aW9uIGRpc3BsYXk6IHJlbmRlclRvb2xVc2VNZXNzYWdlIHNob3dzIGlucHV0IGZpZWxkcyBsaWtlXG4gKiAgY29tbWFuZCAoQmFzaCksIHBhdHRlcm4gKEdyZXApLCBmaWxlX3BhdGggKFJlYWQvRWRpdCksIHByb21wdCAoQWdlbnQpLlxuICogIFNhbWUgZHVjay10eXBlIHN0cmF0ZWd5IGFzIHRvb2xSZXN1bHRTZWFyY2hUZXh0IFx1MjAxNCBrbm93biBmaWVsZCBuYW1lcyxcbiAqICB1bmtub3duIFx1MjE5MiBlbXB0eS4gVW5kZXItY291bnQgPiBwaGFudG9tLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvb2xVc2VTZWFyY2hUZXh0KGlucHV0OiB1bmtub3duKTogc3RyaW5nIHtcbiAgaWYgKCFpbnB1dCB8fCB0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnKSByZXR1cm4gJydcbiAgY29uc3QgbyA9IGlucHV0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIC8vIHJlbmRlclRvb2xVc2VNZXNzYWdlIHR5cGljYWxseSBzaG93cyBvbmUgb3IgdHdvIG9mIHRoZXNlIGFzIHRoZVxuICAvLyBwcmltYXJ5IGFyZ3VtZW50LiB0b29sX25hbWUgaXRzZWxmIGlzIGluIHRoZSBcIlx1MjNGQSBCYXNoKC4uLilcIiBjaHJvbWUsXG4gIC8vIGhhbmRsZWQgYnkgdW5kZXItY291bnQgKHRoZSBvdmVybGF5IG1hdGNoZXMgaXQgYnV0IHdlIGRvbid0IGNvdW50IGl0KS5cbiAgZm9yIChjb25zdCBrIG9mIFtcbiAgICAnY29tbWFuZCcsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdmaWxlX3BhdGgnLFxuICAgICdwYXRoJyxcbiAgICAncHJvbXB0JyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICdxdWVyeScsXG4gICAgJ3VybCcsXG4gICAgJ3NraWxsJywgLy8gU2tpbGxUb29sXG4gIF0pIHtcbiAgICBjb25zdCB2ID0gb1trXVxuICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHBhcnRzLnB1c2godilcbiAgfVxuICAvLyBhcmdzW10gKFRtdXgvVHVuZ3N0ZW5Ub29sKSwgZmlsZXNbXSAoU2VuZFVzZXJGaWxlKSBcdTIwMTQgdG9vbC11c2VcbiAgLy8gcmVuZGVycyB0aGUgam9pbmVkIGFycmF5IGFzIHRoZSBwcmltYXJ5IGRpc3BsYXkuIFVuZGVyLWNvdW50ID4gc2tpcC5cbiAgZm9yIChjb25zdCBrIG9mIFsnYXJncycsICdmaWxlcyddKSB7XG4gICAgY29uc3QgdiA9IG9ba11cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSAmJiB2LmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnKSkge1xuICAgICAgcGFydHMucHVzaCgodiBhcyBzdHJpbmdbXSkuam9pbignICcpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignXFxuJylcbn1cblxuLyoqIER1Y2stdHlwZSB0aGUgdG9vbCdzIG5hdGl2ZSBPdXQgZm9yIHNlYXJjaGFibGUgdGV4dC4gS25vd24gc2hhcGVzOlxuICogIHtzdGRvdXQsc3RkZXJyfSAoQmFzaC9TaGVsbCksIHtjb250ZW50fSAoR3JlcCksIHtmaWxlOntjb250ZW50fX0gKFJlYWQpLFxuICogIHtmaWxlbmFtZXM6W119IChHcmVwL0dsb2IpLCB7b3V0cHV0fSAoZ2VuZXJpYykuIEZhbGxzIGJhY2sgdG8gY29uY2F0aW5nXG4gKiAgYWxsIHRvcC1sZXZlbCBzdHJpbmcgZmllbGRzIFx1MjAxNCBjcnVkZSBidXQgYmV0dGVyIHRoYW4gaW5kZXhpbmcgbW9kZWwtY2hhdHRlci5cbiAqICBFbXB0eSBmb3IgdW5rbm93biBzaGFwZXM6IHVuZGVyLWNvdW50ID4gcGhhbnRvbS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b29sUmVzdWx0U2VhcmNoVGV4dChyOiB1bmtub3duKTogc3RyaW5nIHtcbiAgaWYgKCFyIHx8IHR5cGVvZiByICE9PSAnb2JqZWN0JykgcmV0dXJuIHR5cGVvZiByID09PSAnc3RyaW5nJyA/IHIgOiAnJ1xuICBjb25zdCBvID0gciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAvLyBLbm93biBzaGFwZXMgZmlyc3QgKGNvbW1vbiB0b29scykuXG4gIGlmICh0eXBlb2Ygby5zdGRvdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZXJyID0gdHlwZW9mIG8uc3RkZXJyID09PSAnc3RyaW5nJyA/IG8uc3RkZXJyIDogJydcbiAgICByZXR1cm4gby5zdGRvdXQgKyAoZXJyID8gJ1xcbicgKyBlcnIgOiAnJylcbiAgfVxuICBpZiAoXG4gICAgby5maWxlICYmXG4gICAgdHlwZW9mIG8uZmlsZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgKG8uZmlsZSBhcyB7IGNvbnRlbnQ/OiB1bmtub3duIH0pLmNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiAoby5maWxlIGFzIHsgY29udGVudDogc3RyaW5nIH0pLmNvbnRlbnRcbiAgfVxuICAvLyBLbm93biBvdXRwdXQtZmllbGQgbmFtZXMgb25seS4gQSBibGluZCB3YWxrIHdvdWxkIGluZGV4IG1ldGFkYXRhXG4gIC8vIHRoZSBVSSBkb2Vzbid0IHNob3cgKHJhd091dHB1dFBhdGgsIGJhY2tncm91bmRUYXNrSWQsIGZpbGVQYXRoLFxuICAvLyBkdXJhdGlvbk1zLWFzLXN0cmluZykuIEFsbG93bGlzdCB0aGUgZmllbGRzIHRvb2xzIGFjdHVhbGx5IHJlbmRlci5cbiAgLy8gVG9vbHMgbm90IG1hdGNoaW5nIGFueSBzaGFwZSBpbmRleCBlbXB0eSBcdTIwMTQgYWRkIHRoZW0gaGVyZSBhcyBmb3VuZC5cbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBrIG9mIFsnY29udGVudCcsICdvdXRwdXQnLCAncmVzdWx0JywgJ3RleHQnLCAnbWVzc2FnZSddKSB7XG4gICAgY29uc3QgdiA9IG9ba11cbiAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKSBwYXJ0cy5wdXNoKHYpXG4gIH1cbiAgZm9yIChjb25zdCBrIG9mIFsnZmlsZW5hbWVzJywgJ2xpbmVzJywgJ3Jlc3VsdHMnXSkge1xuICAgIGNvbnN0IHYgPSBvW2tdXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikgJiYgdi5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHtcbiAgICAgIHBhcnRzLnB1c2goKHYgYXMgc3RyaW5nW10pLmpvaW4oJ1xcbicpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignXFxuJylcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxuZXhwb3J0IHR5cGUgQ2xhd2RQb3NlID1cbiAgfCAnZGVmYXVsdCdcbiAgfCAnYXJtcy11cCdcbiAgfCAnbG9vay1sZWZ0J1xuICB8ICdsb29rLXJpZ2h0J1xuXG50eXBlIFByb3BzID0ge1xuICBwb3NlPzogQ2xhd2RQb3NlXG59XG5cbnR5cGUgRG9nUG9zZSA9IHtcbiAgdG9wOiBzdHJpbmdcbiAgZmFjZTogc3RyaW5nXG59XG5cbmNvbnN0IERPR19QT1NFUzogUmVjb3JkPENsYXdkUG9zZSwgRG9nUG9zZT4gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICB0b3A6ICcgL3YtLS12XFxcXCAnLFxuICAgIGZhY2U6ICdWICBvIG8gIFYnLFxuICB9LFxuICAnbG9vay1sZWZ0Jzoge1xuICAgIHRvcDogJyAvdi0tLXZcXFxcICcsXG4gICAgZmFjZTogJ1YgbyBvICAgVicsXG4gIH0sXG4gICdsb29rLXJpZ2h0Jzoge1xuICAgIHRvcDogJyAvdi0tLXZcXFxcICcsXG4gICAgZmFjZTogJ1YgICBvIG8gVicsXG4gIH0sXG4gICdhcm1zLXVwJzoge1xuICAgIHRvcDogJyAvXi1eLV5cXFxcICcsXG4gICAgZmFjZTogJ1YgIG8gbyAgVicsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDbGF3ZCh7IHBvc2UgPSAnZGVmYXVsdCcgfTogUHJvcHMgPSB7fSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRvZ1Bvc2UgPSBET0dfUE9TRVNbcG9zZV1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCI+e2RvZ1Bvc2UudG9wfTwvVGV4dD5cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPntkb2dQb3NlLmZhY2V9PC9UZXh0PlxuICAgICAgPFRleHQ+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPiAvfDwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJwZXJtaXNzaW9uXCI+WyBdPC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXdkX2JvZHlcIj58XFxcXCA8L1RleHQ+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdHJ1bmNhdGUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5cbmV4cG9ydCB0eXBlIEZlZWRMaW5lID0ge1xuICB0ZXh0OiBzdHJpbmdcbiAgdGltZXN0YW1wPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEZlZWRDb25maWcgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgbGluZXM6IEZlZWRMaW5lW11cbiAgZm9vdGVyPzogc3RyaW5nXG4gIGVtcHR5TWVzc2FnZT86IHN0cmluZ1xuICBjdXN0b21Db250ZW50PzogeyBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7IHdpZHRoOiBudW1iZXIgfVxufVxuXG50eXBlIEZlZWRQcm9wcyA9IHtcbiAgY29uZmlnOiBGZWVkQ29uZmlnXG4gIGFjdHVhbFdpZHRoOiBudW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUZlZWRXaWR0aChjb25maWc6IEZlZWRDb25maWcpOiBudW1iZXIge1xuICBjb25zdCB7IHRpdGxlLCBsaW5lcywgZm9vdGVyLCBlbXB0eU1lc3NhZ2UsIGN1c3RvbUNvbnRlbnQgfSA9IGNvbmZpZ1xuXG4gIGxldCBtYXhXaWR0aCA9IHN0cmluZ1dpZHRoKHRpdGxlKVxuXG4gIGlmIChjdXN0b21Db250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBjdXN0b21Db250ZW50LndpZHRoKVxuICB9IGVsc2UgaWYgKGxpbmVzLmxlbmd0aCA9PT0gMCAmJiBlbXB0eU1lc3NhZ2UpIHtcbiAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBzdHJpbmdXaWR0aChlbXB0eU1lc3NhZ2UpKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGdhcCA9ICcgICdcbiAgICBjb25zdCBtYXhUaW1lc3RhbXBXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIC4uLmxpbmVzLm1hcChsaW5lID0+IChsaW5lLnRpbWVzdGFtcCA/IHN0cmluZ1dpZHRoKGxpbmUudGltZXN0YW1wKSA6IDApKSxcbiAgICApXG5cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcFdpZHRoID0gbWF4VGltZXN0YW1wV2lkdGggPiAwID8gbWF4VGltZXN0YW1wV2lkdGggOiAwXG4gICAgICBjb25zdCBsaW5lV2lkdGggPVxuICAgICAgICBzdHJpbmdXaWR0aChsaW5lLnRleHQpICtcbiAgICAgICAgKHRpbWVzdGFtcFdpZHRoID4gMCA/IHRpbWVzdGFtcFdpZHRoICsgZ2FwLmxlbmd0aCA6IDApXG4gICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KG1heFdpZHRoLCBsaW5lV2lkdGgpXG4gICAgfVxuICB9XG5cbiAgaWYgKGZvb3Rlcikge1xuICAgIG1heFdpZHRoID0gTWF0aC5tYXgobWF4V2lkdGgsIHN0cmluZ1dpZHRoKGZvb3RlcikpXG4gIH1cblxuICByZXR1cm4gbWF4V2lkdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlZWQoeyBjb25maWcsIGFjdHVhbFdpZHRoIH06IEZlZWRQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgdGl0bGUsIGxpbmVzLCBmb290ZXIsIGVtcHR5TWVzc2FnZSwgY3VzdG9tQ29udGVudCB9ID0gY29uZmlnXG5cbiAgY29uc3QgZ2FwID0gJyAgJ1xuICBjb25zdCBtYXhUaW1lc3RhbXBXaWR0aCA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgLi4ubGluZXMubWFwKGxpbmUgPT4gKGxpbmUudGltZXN0YW1wID8gc3RyaW5nV2lkdGgobGluZS50aW1lc3RhbXApIDogMCkpLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiB3aWR0aD17YWN0dWFsV2lkdGh9PlxuICAgICAgPFRleHQgYm9sZCBjb2xvcj1cImNsYXVkZVwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RleHQ+XG4gICAgICB7Y3VzdG9tQ29udGVudCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7Y3VzdG9tQ29udGVudC5jb250ZW50fVxuICAgICAgICAgIHtmb290ZXIgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICB7dHJ1bmNhdGUoZm9vdGVyLCBhY3R1YWxXaWR0aCl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogbGluZXMubGVuZ3RoID09PSAwICYmIGVtcHR5TWVzc2FnZSA/IChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+e3RydW5jYXRlKGVtcHR5TWVzc2FnZSwgYWN0dWFsV2lkdGgpfTwvVGV4dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xpbmVzLm1hcCgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgYWN0dWFsV2lkdGggLVxuICAgICAgICAgICAgICAgIChtYXhUaW1lc3RhbXBXaWR0aCA+IDAgPyBtYXhUaW1lc3RhbXBXaWR0aCArIGdhcC5sZW5ndGggOiAwKSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRleHQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge21heFRpbWVzdGFtcFdpZHRoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgICAgICB7KGxpbmUudGltZXN0YW1wIHx8ICcnKS5wYWRFbmQobWF4VGltZXN0YW1wV2lkdGgpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtnYXB9XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxUZXh0Pnt0cnVuY2F0ZShsaW5lLnRleHQsIHRleHRXaWR0aCl9PC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgICAge2Zvb3RlciAmJiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgIHt0cnVuY2F0ZShmb290ZXIsIGFjdHVhbFdpZHRoKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpdmlkZXIuanMnXG5pbXBvcnQgdHlwZSB7IEZlZWRDb25maWcgfSBmcm9tICcuL0ZlZWQuanMnXG5pbXBvcnQgeyBjYWxjdWxhdGVGZWVkV2lkdGgsIEZlZWQgfSBmcm9tICcuL0ZlZWQuanMnXG5cbnR5cGUgRmVlZENvbHVtblByb3BzID0ge1xuICBmZWVkczogRmVlZENvbmZpZ1tdXG4gIG1heFdpZHRoOiBudW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRDb2x1bW4oe1xuICBmZWVkcyxcbiAgbWF4V2lkdGgsXG59OiBGZWVkQ29sdW1uUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBmZWVkV2lkdGhzID0gZmVlZHMubWFwKGZlZWQgPT4gY2FsY3VsYXRlRmVlZFdpZHRoKGZlZWQpKVxuICBjb25zdCBtYXhPZkFsbEZlZWRzID0gTWF0aC5tYXgoLi4uZmVlZFdpZHRocylcbiAgY29uc3QgYWN0dWFsV2lkdGggPSBNYXRoLm1pbihtYXhPZkFsbEZlZWRzLCBtYXhXaWR0aClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAge2ZlZWRzLm1hcCgoZmVlZCwgaW5kZXgpID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxGZWVkIGNvbmZpZz17ZmVlZH0gYWN0dWFsV2lkdGg9e2FjdHVhbFdpZHRofSAvPlxuICAgICAgICAgIHtpbmRleCA8IGZlZWRzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgPERpdmlkZXIgY29sb3I9XCJjbGF1ZGVcIiB3aWR0aD17YWN0dWFsV2lkdGh9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdGVwIH0gZnJvbSAnLi4vLi4vcHJvamVjdE9uYm9hcmRpbmdTdGF0ZS5qcydcbmltcG9ydCB7XG4gIGZvcm1hdENyZWRpdEFtb3VudCxcbiAgZ2V0Q2FjaGVkUmVmZXJyZXJSZXdhcmQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9yZWZlcnJhbC5qcydcbmltcG9ydCB0eXBlIHsgTG9nT3B0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlVGltZUFnbyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB0eXBlIHsgRmVlZENvbmZpZywgRmVlZExpbmUgfSBmcm9tICcuL0ZlZWQuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQoYWN0aXZpdGllczogTG9nT3B0aW9uW10pOiBGZWVkQ29uZmlnIHtcbiAgY29uc3QgbGluZXM6IEZlZWRMaW5lW10gPSBhY3Rpdml0aWVzLm1hcChsb2cgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBmb3JtYXRSZWxhdGl2ZVRpbWVBZ28obG9nLm1vZGlmaWVkKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID1cbiAgICAgIGxvZy5zdW1tYXJ5ICYmIGxvZy5zdW1tYXJ5ICE9PSAnTm8gcHJvbXB0JyA/IGxvZy5zdW1tYXJ5IDogbG9nLmZpcnN0UHJvbXB0XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0aW1lc3RhbXA6IHRpbWUsXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWNlbnQgYWN0aXZpdHknLFxuICAgIGxpbmVzLFxuICAgIGZvb3RlcjogbGluZXMubGVuZ3RoID4gMCA/ICcvcmVzdW1lIGZvciBtb3JlJyA6IHVuZGVmaW5lZCxcbiAgICBlbXB0eU1lc3NhZ2U6ICdObyByZWNlbnQgYWN0aXZpdHknLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaGF0c05ld0ZlZWQocmVsZWFzZU5vdGVzOiBzdHJpbmdbXSk6IEZlZWRDb25maWcge1xuICBjb25zdCBsaW5lczogRmVlZExpbmVbXSA9IHJlbGVhc2VOb3Rlcy5tYXAobm90ZSA9PiB7XG4gICAgaWYgKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gbm90ZS5tYXRjaCgvXihcXGQrXFxzK1xcdytcXHMrYWdvKVxccysoLispJC8pXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aW1lc3RhbXA6IG1hdGNoWzFdLFxuICAgICAgICAgIHRleHQ6IG1hdGNoWzJdIHx8ICcnLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBub3RlLFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBlbXB0eU1lc3NhZ2UgPVxuICAgIFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCdcbiAgICAgID8gJ1VuYWJsZSB0byBmZXRjaCBsYXRlc3QgY2xhdWRlLWNsaS1pbnRlcm5hbCBjb21taXRzJ1xuICAgICAgOiAnQ2hlY2sgdGhlIENsYXVkZSBDb2RlIGNoYW5nZWxvZyBmb3IgdXBkYXRlcydcblxuICByZXR1cm4ge1xuICAgIHRpdGxlOlxuICAgICAgXCJleHRlcm5hbFwiID09PSAnYW50J1xuICAgICAgICA/IFwiV2hhdCdzIG5ldyBbQU5ULU9OTFk6IExhdGVzdCBDQyBjb21taXRzXVwiXG4gICAgICAgIDogXCJXaGF0J3MgbmV3XCIsXG4gICAgbGluZXMsXG4gICAgZm9vdGVyOiBsaW5lcy5sZW5ndGggPiAwID8gJy9yZWxlYXNlLW5vdGVzIGZvciBtb3JlJyA6IHVuZGVmaW5lZCxcbiAgICBlbXB0eU1lc3NhZ2UsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPbmJvYXJkaW5nRmVlZChzdGVwczogU3RlcFtdKTogRmVlZENvbmZpZyB7XG4gIGNvbnN0IGVuYWJsZWRTdGVwcyA9IHN0ZXBzXG4gICAgLmZpbHRlcigoeyBpc0VuYWJsZWQgfSkgPT4gaXNFbmFibGVkKVxuICAgIC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYS5pc0NvbXBsZXRlKSAtIE51bWJlcihiLmlzQ29tcGxldGUpKVxuXG4gIGNvbnN0IGxpbmVzOiBGZWVkTGluZVtdID0gZW5hYmxlZFN0ZXBzLm1hcCgoeyB0ZXh0LCBpc0NvbXBsZXRlIH0pID0+IHtcbiAgICBjb25zdCBjaGVja21hcmsgPSBpc0NvbXBsZXRlID8gYCR7ZmlndXJlcy50aWNrfSBgIDogJydcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYCR7Y2hlY2ttYXJrfSR7dGV4dH1gLFxuICAgIH1cbiAgfSlcblxuICBjb25zdCB3YXJuaW5nVGV4dCA9XG4gICAgZ2V0Q3dkKCkgPT09IGhvbWVkaXIoKVxuICAgICAgPyAnTm90ZTogWW91IGhhdmUgbGF1bmNoZWQgY2xhdWRlIGluIHlvdXIgaG9tZSBkaXJlY3RvcnkuIEZvciB0aGUgYmVzdCBleHBlcmllbmNlLCBsYXVuY2ggaXQgaW4gYSBwcm9qZWN0IGRpcmVjdG9yeSBpbnN0ZWFkLidcbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgaWYgKHdhcm5pbmdUZXh0KSB7XG4gICAgbGluZXMucHVzaCh7XG4gICAgICB0ZXh0OiB3YXJuaW5nVGV4dCxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RpcHMgZm9yIGdldHRpbmcgc3RhcnRlZCcsXG4gICAgbGluZXMsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUd1ZXN0UGFzc2VzRmVlZCgpOiBGZWVkQ29uZmlnIHtcbiAgY29uc3QgcmV3YXJkID0gZ2V0Q2FjaGVkUmVmZXJyZXJSZXdhcmQoKVxuICBjb25zdCBzdWJ0aXRsZSA9IHJld2FyZFxuICAgID8gYFNoYXJlIENsYXVkZSBDb2RlIGFuZCBlYXJuICR7Zm9ybWF0Q3JlZGl0QW1vdW50KHJld2FyZCl9IG9mIGV4dHJhIHVzYWdlYFxuICAgIDogJ1NoYXJlIENsYXVkZSBDb2RlIHdpdGggZnJpZW5kcydcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJzMgZ3Vlc3QgcGFzc2VzJyxcbiAgICBsaW5lczogW10sXG4gICAgY3VzdG9tQ29udGVudDoge1xuICAgICAgY29udGVudDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCb3ggbWFyZ2luWT17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPlvinLtdIFvinLtdIFvinLtdPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntzdWJ0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvPlxuICAgICAgKSxcbiAgICAgIHdpZHRoOiA0OCxcbiAgICB9LFxuICAgIGZvb3RlcjogJy9wYXNzZXMnLFxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGdldEluaXRpYWxTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgQ2xhd2QsIHR5cGUgQ2xhd2RQb3NlIH0gZnJvbSAnLi9DbGF3ZC5qcydcblxudHlwZSBGcmFtZSA9IHsgcG9zZTogQ2xhd2RQb3NlOyBvZmZzZXQ6IG51bWJlciB9XG5cbi8qKiBIb2xkIGEgcG9zZSBmb3IgbiBmcmFtZXMgKDYwbXMgZWFjaCkuICovXG5mdW5jdGlvbiBob2xkKHBvc2U6IENsYXdkUG9zZSwgb2Zmc2V0OiBudW1iZXIsIGZyYW1lczogbnVtYmVyKTogRnJhbWVbXSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBmcmFtZXMgfSwgKCkgPT4gKHsgcG9zZSwgb2Zmc2V0IH0pKVxufVxuXG4vLyBPZmZzZXQgc2VtYW50aWNzOiBtYXJnaW5Ub3AgaW4gYSBmaXhlZC1oZWlnaHQtMyBjb250YWluZXIuIDAgPSBub3JtYWwsXG4vLyAxID0gY3JvdWNoZWQuIENvbnRhaW5lciBoZWlnaHQgc3RheXMgMyBzbyB0aGUgbGF5b3V0IG5ldmVyIHNoaWZ0czsgZHVyaW5nXG4vLyBhIGNyb3VjaCAob2Zmc2V0PTEpIENsYXdkJ3MgZmVldCByb3cgZGlwcyBiZWxvdyB0aGUgY29udGFpbmVyIGFuZCBnZXRzXG4vLyBjbGlwcGVkIOKAlCByZWFkcyBhcyBcImR1Y2tpbmcgYmVsb3cgdGhlIGZyYW1lXCIgYmVmb3JlIHNwcmluZ2luZyBiYWNrIHVwLlxuXG4vLyBDbGljayBhbmltYXRpb246IGNyb3VjaCwgdGhlbiBzcHJpbmcgdXAgd2l0aCBib3RoIGFybXMgcmFpc2VkLiBUd2ljZS5cbmNvbnN0IEpVTVBfV0FWRTogcmVhZG9ubHkgRnJhbWVbXSA9IFtcbiAgLi4uaG9sZCgnZGVmYXVsdCcsIDEsIDIpLCAvLyBjcm91Y2hcbiAgLi4uaG9sZCgnYXJtcy11cCcsIDAsIDMpLCAvLyBzcHJpbmchXG4gIC4uLmhvbGQoJ2RlZmF1bHQnLCAwLCAxKSxcbiAgLi4uaG9sZCgnZGVmYXVsdCcsIDEsIDIpLCAvLyBjcm91Y2ggYWdhaW5cbiAgLi4uaG9sZCgnYXJtcy11cCcsIDAsIDMpLCAvLyBzcHJpbmchXG4gIC4uLmhvbGQoJ2RlZmF1bHQnLCAwLCAxKSxcbl1cblxuLy8gQ2xpY2sgYW5pbWF0aW9uOiBnbGFuY2UgcmlnaHQsIHRoZW4gbGVmdCwgdGhlbiBiYWNrLlxuY29uc3QgTE9PS19BUk9VTkQ6IHJlYWRvbmx5IEZyYW1lW10gPSBbXG4gIC4uLmhvbGQoJ2xvb2stcmlnaHQnLCAwLCA1KSxcbiAgLi4uaG9sZCgnbG9vay1sZWZ0JywgMCwgNSksXG4gIC4uLmhvbGQoJ2RlZmF1bHQnLCAwLCAxKSxcbl1cblxuY29uc3QgQ0xJQ0tfQU5JTUFUSU9OUzogcmVhZG9ubHkgKHJlYWRvbmx5IEZyYW1lW10pW10gPSBbSlVNUF9XQVZFLCBMT09LX0FST1VORF1cblxuY29uc3QgSURMRTogRnJhbWUgPSB7IHBvc2U6ICdkZWZhdWx0Jywgb2Zmc2V0OiAwIH1cbmNvbnN0IEZSQU1FX01TID0gNjBcbmNvbnN0IGluY3JlbWVudEZyYW1lID0gKGk6IG51bWJlcikgPT4gaSArIDFcbmNvbnN0IENMQVdEX0hFSUdIVCA9IDNcblxuLyoqXG4gKiBDbGF3ZCB3aXRoIGNsaWNrLXRyaWdnZXJlZCBhbmltYXRpb25zIChjcm91Y2gtanVtcCB3aXRoIGFybXMgdXAsIG9yXG4gKiBsb29rLWFyb3VuZCkuIENvbnRhaW5lciBoZWlnaHQgaXMgZml4ZWQgYXQgQ0xBV0RfSEVJR0hUIOKAlCBzYW1lIGZvb3RwcmludFxuICogYXMgYSBiYXJlIGA8Q2xhd2QgLz5gIOKAlCBzbyB0aGUgc3Vycm91bmRpbmcgbGF5b3V0IG5ldmVyIHNoaWZ0cy4gRHVyaW5nIGFcbiAqIGNyb3VjaCBvbmx5IHRoZSBmZWV0IHJvdyBjbGlwcyAoc2VlIGNvbW1lbnQgYWJvdmUpLiBDbGljayBvbmx5IGZpcmVzIHdoZW5cbiAqIG1vdXNlIHRyYWNraW5nIGlzIGVuYWJsZWQgKGkuZS4gaW5zaWRlIGA8QWx0ZXJuYXRlU2NyZWVuPmAgLyBmdWxsc2NyZWVuKTtcbiAqIGVsc2V3aGVyZSB0aGlzIHJlbmRlcnMgYW5kIGJlaGF2ZXMgaWRlbnRpY2FsbHkgdG8gcGxhaW4gYDxDbGF3ZCAvPmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBbmltYXRlZENsYXdkKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgcG9zZSwgYm91bmNlT2Zmc2V0LCBvbkNsaWNrIH0gPSB1c2VDbGF3ZEFuaW1hdGlvbigpXG4gIHJldHVybiAoXG4gICAgPEJveCBoZWlnaHQ9e0NMQVdEX0hFSUdIVH0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPEJveCBtYXJnaW5Ub3A9e2JvdW5jZU9mZnNldH0gZmxleFNocmluaz17MH0+XG4gICAgICAgIDxDbGF3ZCBwb3NlPXtwb3NlfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gdXNlQ2xhd2RBbmltYXRpb24oKToge1xuICBwb3NlOiBDbGF3ZFBvc2VcbiAgYm91bmNlT2Zmc2V0OiBudW1iZXJcbiAgb25DbGljazogKCkgPT4gdm9pZFxufSB7XG4gIC8vIFJlYWQgb25jZSBhdCBtb3VudCDigJQgbm8gdXNlU2V0dGluZ3MoKSBzdWJzY3JpcHRpb24sIHNpbmNlIHRoYXQgd291bGRcbiAgLy8gcmUtcmVuZGVyIG9uIGFueSBzZXR0aW5ncyBjaGFuZ2UuXG4gIGNvbnN0IFtyZWR1Y2VkTW90aW9uXSA9IHVzZVN0YXRlKFxuICAgICgpID0+IGdldEluaXRpYWxTZXR0aW5ncygpLnByZWZlcnNSZWR1Y2VkTW90aW9uID8/IGZhbHNlLFxuICApXG4gIGNvbnN0IFtmcmFtZUluZGV4LCBzZXRGcmFtZUluZGV4XSA9IHVzZVN0YXRlKC0xKVxuICBjb25zdCBzZXF1ZW5jZVJlZiA9IHVzZVJlZjxyZWFkb25seSBGcmFtZVtdPihKVU1QX1dBVkUpXG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAocmVkdWNlZE1vdGlvbiB8fCBmcmFtZUluZGV4ICE9PSAtMSkgcmV0dXJuXG4gICAgc2VxdWVuY2VSZWYuY3VycmVudCA9XG4gICAgICBDTElDS19BTklNQVRJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENMSUNLX0FOSU1BVElPTlMubGVuZ3RoKV0hXG4gICAgc2V0RnJhbWVJbmRleCgwKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZnJhbWVJbmRleCA9PT0gLTEpIHJldHVyblxuICAgIGlmIChmcmFtZUluZGV4ID49IHNlcXVlbmNlUmVmLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICBzZXRGcmFtZUluZGV4KC0xKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChzZXRGcmFtZUluZGV4LCBGUkFNRV9NUywgaW5jcmVtZW50RnJhbWUpXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgfSwgW2ZyYW1lSW5kZXhdKVxuXG4gIGNvbnN0IHNlcSA9IHNlcXVlbmNlUmVmLmN1cnJlbnRcbiAgY29uc3QgY3VycmVudCA9XG4gICAgZnJhbWVJbmRleCA+PSAwICYmIGZyYW1lSW5kZXggPCBzZXEubGVuZ3RoID8gc2VxW2ZyYW1lSW5kZXhdISA6IElETEVcbiAgcmV0dXJuIHsgcG9zZTogY3VycmVudC5wb3NlLCBib3VuY2VPZmZzZXQ6IGN1cnJlbnQub2Zmc2V0LCBvbkNsaWNrIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQge1xuICBjaGVja0NhY2hlZFBhc3Nlc0VsaWdpYmlsaXR5LFxuICBmb3JtYXRDcmVkaXRBbW91bnQsXG4gIGdldENhY2hlZFJlZmVycmVyUmV3YXJkLFxuICBnZXRDYWNoZWRSZW1haW5pbmdQYXNzZXMsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9yZWZlcnJhbC5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcblxuZnVuY3Rpb24gcmVzZXRJZlBhc3Nlc1JlZnJlc2hlZCgpOiB2b2lkIHtcbiAgY29uc3QgcmVtYWluaW5nID0gZ2V0Q2FjaGVkUmVtYWluaW5nUGFzc2VzKClcbiAgaWYgKHJlbWFpbmluZyA9PSBudWxsIHx8IHJlbWFpbmluZyA8PSAwKSByZXR1cm5cbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgY29uc3QgbGFzdFNlZW4gPSBjb25maWcucGFzc2VzTGFzdFNlZW5SZW1haW5pbmcgPz8gMFxuICBpZiAocmVtYWluaW5nID4gbGFzdFNlZW4pIHtcbiAgICBzYXZlR2xvYmFsQ29uZmlnKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwYXNzZXNVcHNlbGxTZWVuQ291bnQ6IDAsXG4gICAgICBoYXNWaXNpdGVkUGFzc2VzOiBmYWxzZSxcbiAgICAgIHBhc3Nlc0xhc3RTZWVuUmVtYWluaW5nOiByZW1haW5pbmcsXG4gICAgfSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkU2hvd0d1ZXN0UGFzc2VzVXBzZWxsKCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IGVsaWdpYmxlLCBoYXNDYWNoZSB9ID0gY2hlY2tDYWNoZWRQYXNzZXNFbGlnaWJpbGl0eSgpXG4gIC8vIE9ubHkgc2hvdyBpZiBlbGlnaWJsZSBhbmQgY2FjaGUgZXhpc3RzIChkb24ndCBibG9jayBvbiBmZXRjaClcbiAgaWYgKCFlbGlnaWJsZSB8fCAhaGFzQ2FjaGUpIHJldHVybiBmYWxzZVxuICAvLyBSZXNldCB1cHNlbGwgY291bnRlcnMgaWYgcGFzc2VzIHdlcmUgcmVmcmVzaGVkIChjb3ZlcnMgYm90aCBjYW1wYWlnbiBjaGFuZ2UgYW5kIHBhc3MgcmVmcmVzaClcbiAgcmVzZXRJZlBhc3Nlc1JlZnJlc2hlZCgpXG5cbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgaWYgKChjb25maWcucGFzc2VzVXBzZWxsU2VlbkNvdW50ID8/IDApID49IDMpIHJldHVybiBmYWxzZVxuICBpZiAoY29uZmlnLmhhc1Zpc2l0ZWRQYXNzZXMpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaG93R3Vlc3RQYXNzZXNVcHNlbGwoKTogYm9vbGVhbiB7XG4gIGNvbnN0IFtzaG93XSA9IHVzZVN0YXRlKCgpID0+IHNob3VsZFNob3dHdWVzdFBhc3Nlc1Vwc2VsbCgpKVxuICByZXR1cm4gc2hvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQoKTogdm9pZCB7XG4gIGxldCBuZXdDb3VudCA9IDBcbiAgc2F2ZUdsb2JhbENvbmZpZyhwcmV2ID0+IHtcbiAgICBuZXdDb3VudCA9IChwcmV2LnBhc3Nlc1Vwc2VsbFNlZW5Db3VudCA/PyAwKSArIDFcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJldixcbiAgICAgIHBhc3Nlc1Vwc2VsbFNlZW5Db3VudDogbmV3Q291bnQsXG4gICAgfVxuICB9KVxuICBsb2dFdmVudCgndGVuZ3VfZ3Vlc3RfcGFzc2VzX3Vwc2VsbF9zaG93bicsIHtcbiAgICBzZWVuX2NvdW50OiBuZXdDb3VudCxcbiAgfSlcbn1cblxuLy8gQ29uZGVuc2VkIGxheW91dCBmb3IgbWluaSB3ZWxjb21lIHNjcmVlblxuZXhwb3J0IGZ1bmN0aW9uIEd1ZXN0UGFzc2VzVXBzZWxsKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHJld2FyZCA9IGdldENhY2hlZFJlZmVycmVyUmV3YXJkKClcbiAgcmV0dXJuIChcbiAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+W+Kcu108L1RleHQ+IDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+W+Kcu108L1RleHQ+eycgJ31cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+W+Kcu108L1RleHQ+IMK3eycgJ31cbiAgICAgIHtyZXdhcmRcbiAgICAgICAgPyBgU2hhcmUgQ2xhdWRlIENvZGUgYW5kIGVhcm4gJHtmb3JtYXRDcmVkaXRBbW91bnQocmV3YXJkKX0gb2YgZXh0cmEgdXNhZ2UgwrcgL3Bhc3Nlc2BcbiAgICAgICAgOiAnMyBndWVzdCBwYXNzZXMgYXQgL3Bhc3Nlcyd9XG4gICAgPC9UZXh0PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0eXBlIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNYWluTG9vcE1vZGVsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWFpbkxvb3BNb2RlbC5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldEVmZm9ydFN1ZmZpeCB9IGZyb20gJy4uLy4uL3V0aWxzL2VmZm9ydC5qcydcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNGdWxsc2NyZWVuRW52RW5hYmxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bGxzY3JlZW4uanMnXG5pbXBvcnQge1xuICBmb3JtYXRNb2RlbEFuZEJpbGxpbmcsXG4gIGdldExvZ29EaXNwbGF5RGF0YSxcbiAgdHJ1bmNhdGVQYXRoLFxufSBmcm9tICcuLi8uLi91dGlscy9sb2dvVjJVdGlscy5qcydcbmltcG9ydCB7IHJlbmRlck1vZGVsU2V0dGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgT2Zmc2NyZWVuRnJlZXplIH0gZnJvbSAnLi4vT2Zmc2NyZWVuRnJlZXplLmpzJ1xuaW1wb3J0IHsgQW5pbWF0ZWRDbGF3ZCB9IGZyb20gJy4vQW5pbWF0ZWRDbGF3ZC5qcydcbmltcG9ydCB7IENsYXdkIH0gZnJvbSAnLi9DbGF3ZC5qcydcbmltcG9ydCB7XG4gIEd1ZXN0UGFzc2VzVXBzZWxsLFxuICBpbmNyZW1lbnRHdWVzdFBhc3Nlc1NlZW5Db3VudCxcbiAgdXNlU2hvd0d1ZXN0UGFzc2VzVXBzZWxsLFxufSBmcm9tICcuL0d1ZXN0UGFzc2VzVXBzZWxsLmpzJ1xuaW1wb3J0IHtcbiAgaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCxcbiAgT3ZlcmFnZUNyZWRpdFVwc2VsbCxcbiAgdXNlU2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwsXG59IGZyb20gJy4vT3ZlcmFnZUNyZWRpdFVwc2VsbC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIENvbmRlbnNlZExvZ28oKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBjb2x1bW5zIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCBhZ2VudCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5hZ2VudClcbiAgY29uc3QgZWZmb3J0VmFsdWUgPSB1c2VBcHBTdGF0ZShzID0+IHMuZWZmb3J0VmFsdWUpXG4gIGNvbnN0IG1vZGVsID0gdXNlTWFpbkxvb3BNb2RlbCgpXG4gIGNvbnN0IG1vZGVsRGlzcGxheU5hbWUgPSByZW5kZXJNb2RlbFNldHRpbmcobW9kZWwpXG4gIGNvbnN0IHsgdmVyc2lvbiwgY3dkLCBiaWxsaW5nVHlwZSwgYWdlbnROYW1lOiBhZ2VudE5hbWVGcm9tU2V0dGluZ3MgfSA9IGdldExvZ29EaXNwbGF5RGF0YSgpXG5cbiAgLy8gUHJlZmVyIEFwcFN0YXRlLmFnZW50IChzZXQgZnJvbSAtLWFnZW50IENMSSBmbGFnKSBvdmVyIHNldHRpbmdzXG4gIGNvbnN0IGFnZW50TmFtZSA9IGFnZW50ID8/IGFnZW50TmFtZUZyb21TZXR0aW5nc1xuICBjb25zdCBzaG93R3Vlc3RQYXNzZXNVcHNlbGwgPSB1c2VTaG93R3Vlc3RQYXNzZXNVcHNlbGwoKVxuICBjb25zdCBzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCA9IHVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93R3Vlc3RQYXNzZXNVcHNlbGwpIHtcbiAgICAgIGluY3JlbWVudEd1ZXN0UGFzc2VzU2VlbkNvdW50KClcbiAgICB9XG4gIH0sIFtzaG93R3Vlc3RQYXNzZXNVcHNlbGxdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsICYmICFzaG93R3Vlc3RQYXNzZXNVcHNlbGwpIHtcbiAgICAgIGluY3JlbWVudE92ZXJhZ2VDcmVkaXRVcHNlbGxTZWVuQ291bnQoKVxuICAgIH1cbiAgfSwgW3Nob3dPdmVyYWdlQ3JlZGl0VXBzZWxsLCBzaG93R3Vlc3RQYXNzZXNVcHNlbGxdKVxuXG4gIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgd2lkdGggZm9yIHRleHQgY29udGVudFxuICAvLyBBY2NvdW50IGZvcjogY29uZGVuc2VkIGNsYXdkIHdpZHRoICgxMSBjaGFycykgKyBnYXAgKDIpICsgcGFkZGluZyAoMikgPSAxNSBjaGFyc1xuICBjb25zdCB0ZXh0V2lkdGggPSBNYXRoLm1heChjb2x1bW5zIC0gMTUsIDIwKVxuXG4gIC8vIFRydW5jYXRlIHZlcnNpb24gdG8gZml0IHdpdGhpbiBhdmFpbGFibGUgd2lkdGgsIGFjY291bnRpbmcgZm9yIFwiQ2xhdWRlIENvZGUgdlwiIHByZWZpeFxuICBjb25zdCB2ZXJzaW9uUHJlZml4ID0gJ0NsYXVkZSBDb2RlIHYnXG4gIGNvbnN0IHRydW5jYXRlZFZlcnNpb24gPSB0cnVuY2F0ZShcbiAgICB2ZXJzaW9uLFxuICAgIE1hdGgubWF4KHRleHRXaWR0aCAtIHZlcnNpb25QcmVmaXgubGVuZ3RoLCA2KSxcbiAgKVxuXG4gIGNvbnN0IGVmZm9ydFN1ZmZpeCA9IGdldEVmZm9ydFN1ZmZpeChtb2RlbCwgZWZmb3J0VmFsdWUpXG4gIGNvbnN0IHsgc2hvdWxkU3BsaXQsIHRydW5jYXRlZE1vZGVsLCB0cnVuY2F0ZWRCaWxsaW5nIH0gPVxuICAgIGZvcm1hdE1vZGVsQW5kQmlsbGluZyhcbiAgICAgIG1vZGVsRGlzcGxheU5hbWUgKyBlZmZvcnRTdWZmaXgsXG4gICAgICBiaWxsaW5nVHlwZSxcbiAgICAgIHRleHRXaWR0aCxcbiAgICApXG5cbiAgLy8gVHJ1bmNhdGUgcGF0aCwgYWNjb3VudGluZyBmb3IgYWdlbnQgbmFtZSBpZiBwcmVzZW50XG4gIGNvbnN0IHNlcGFyYXRvciA9ICcgwrcgJ1xuICBjb25zdCBhdFByZWZpeCA9ICdAJ1xuICBjb25zdCBjd2RBdmFpbGFibGVXaWR0aCA9IGFnZW50TmFtZVxuICAgID8gdGV4dFdpZHRoIC0gYXRQcmVmaXgubGVuZ3RoIC0gc3RyaW5nV2lkdGgoYWdlbnROYW1lKSAtIHNlcGFyYXRvci5sZW5ndGhcbiAgICA6IHRleHRXaWR0aFxuICBjb25zdCB0cnVuY2F0ZWRDd2QgPSB0cnVuY2F0ZVBhdGgoY3dkLCBNYXRoLm1heChjd2RBdmFpbGFibGVXaWR0aCwgMTApKVxuXG4gIC8vIE9mZnNjcmVlbkZyZWV6ZTogdGhlIGxvZ28gc2l0cyBhdCB0aGUgdG9wIG9mIHRoZSBtZXNzYWdlIGxpc3QgYW5kIGlzIHRoZVxuICAvLyBmaXJzdCB0aGluZyB0byBlbnRlciBzY3JvbGxiYWNrLiB1c2VNYWluTG9vcE1vZGVsKCkgc3Vic2NyaWJlcyB0byBtb2RlbFxuICAvLyBjaGFuZ2VzIGFuZCBnZXRMb2dvRGlzcGxheURhdGEoKSByZWFkcyBnZXRDd2QoKS9zdWJzY3JpcHRpb24gc3RhdGUg4oCUIGFueVxuICAvLyBvZiB3aGljaCBjaGFuZ2luZyB3aGlsZSBpbiBzY3JvbGxiYWNrIHdvdWxkIGZvcmNlIGEgZnVsbCB0ZXJtaW5hbCByZXNldC5cbiAgcmV0dXJuIChcbiAgICA8T2Zmc2NyZWVuRnJlZXplPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICB7aXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpID8gPEFuaW1hdGVkQ2xhd2QgLz4gOiA8Q2xhd2QgLz59XG5cbiAgICAgIHsvKiBJbmZvICovfVxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+Q2xhdWRlIENvZGU8L1RleHQ+eycgJ31cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj52e3RydW5jYXRlZFZlcnNpb259PC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtzaG91bGRTcGxpdCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3RydW5jYXRlZE1vZGVsfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnt0cnVuY2F0ZWRCaWxsaW5nfTwvVGV4dD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIHt0cnVuY2F0ZWRNb2RlbH0gwrcge3RydW5jYXRlZEJpbGxpbmd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7YWdlbnROYW1lID8gYEAke2FnZW50TmFtZX0gwrcgJHt0cnVuY2F0ZWRDd2R9YCA6IHRydW5jYXRlZEN3ZH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7c2hvd0d1ZXN0UGFzc2VzVXBzZWxsICYmIDxHdWVzdFBhc3Nlc1Vwc2VsbCAvPn1cbiAgICAgICAgeyFzaG93R3Vlc3RQYXNzZXNVcHNlbGwgJiYgc2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwgJiYgKFxuICAgICAgICAgIDxPdmVyYWdlQ3JlZGl0VXBzZWxsIG1heFdpZHRoPXt0ZXh0V2lkdGh9IHR3b0xpbmUgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9PZmZzY3JlZW5GcmVlemU+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnc3JjL2luay5qcydcbmltcG9ydCB7IGdldER5bmFtaWNDb25maWdfQ0FDSEVEX01BWV9CRV9TVEFMRSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJ3NyYy91dGlscy9jb25maWcuanMnXG5cbmNvbnN0IENPTkZJR19OQU1FID0gJ3Rlbmd1LXRvcC1vZi1mZWVkLXRpcCdcblxuZXhwb3J0IGZ1bmN0aW9uIEVtZXJnZW5jeVRpcCgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB0aXAgPSB1c2VNZW1vKGdldFRpcE9mRmVlZCwgW10pXG4gIC8vIE1lbW9pemUgdG8gcHJldmVudCByZS1yZWFkcyBhZnRlciB3ZSBzYXZlIC0gd2Ugd2FudCB0aGUgdmFsdWUgYXQgbW91bnQgdGltZVxuICBjb25zdCBsYXN0U2hvd25UaXAgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldEdsb2JhbENvbmZpZygpLmxhc3RTaG93bkVtZXJnZW5jeVRpcCxcbiAgICBbXSxcbiAgKVxuXG4gIC8vIE9ubHkgc2hvdyBpZiB0aGlzIGlzIGEgbmV3L2RpZmZlcmVudCB0aXBcbiAgY29uc3Qgc2hvdWxkU2hvdyA9IHRpcC50aXAgJiYgdGlwLnRpcCAhPT0gbGFzdFNob3duVGlwXG5cbiAgLy8gU2F2ZSB0aGUgdGlwIHdlJ3JlIHNob3dpbmcgc28gd2UgZG9uJ3Qgc2hvdyBpdCBhZ2FpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgICBpZiAoY3VycmVudC5sYXN0U2hvd25FbWVyZ2VuY3lUaXAgPT09IHRpcC50aXApIHJldHVybiBjdXJyZW50XG4gICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIGxhc3RTaG93bkVtZXJnZW5jeVRpcDogdGlwLnRpcCB9XG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3Nob3VsZFNob3csIHRpcC50aXBdKVxuXG4gIGlmICghc2hvdWxkU2hvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxUZXh0XG4gICAgICAgIHsuLi4odGlwLmNvbG9yID09PSAnd2FybmluZydcbiAgICAgICAgICA/IHsgY29sb3I6ICd3YXJuaW5nJyB9XG4gICAgICAgICAgOiB0aXAuY29sb3IgPT09ICdlcnJvcidcbiAgICAgICAgICAgID8geyBjb2xvcjogJ2Vycm9yJyB9XG4gICAgICAgICAgICA6IHsgZGltQ29sb3I6IHRydWUgfSl9XG4gICAgICA+XG4gICAgICAgIHt0aXAudGlwfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbnR5cGUgVGlwT2ZGZWVkID0ge1xuICB0aXA6IHN0cmluZ1xuICBjb2xvcj86ICdkaW0nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJ1xufVxuXG5jb25zdCBERUZBVUxUX1RJUDogVGlwT2ZGZWVkID0geyB0aXA6ICcnLCBjb2xvcjogJ2RpbScgfVxuXG4vKipcbiAqIEdldCB0aGUgdGlwIG9mIHRoZSBmZWVkIGZyb20gZHluYW1pYyBjb25maWcgd2l0aCBjYWNoaW5nXG4gKiBSZXR1cm5zIGNhY2hlZCB2YWx1ZSBpbW1lZGlhdGVseSwgdXBkYXRlcyBpbiBiYWNrZ3JvdW5kXG4gKi9cbmZ1bmN0aW9uIGdldFRpcE9mRmVlZCgpOiBUaXBPZkZlZWQge1xuICByZXR1cm4gZ2V0RHluYW1pY0NvbmZpZ19DQUNIRURfTUFZX0JFX1NUQUxFPFRpcE9mRmVlZD4oXG4gICAgQ09ORklHX05BTUUsXG4gICAgREVGQVVMVF9USVAsXG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVEVBUkRST1BfQVNURVJJU0sgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZmlndXJlcy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCwgdXNlQW5pbWF0aW9uRnJhbWUgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IGh1ZVRvUmdiLCB0b1JHQkNvbG9yIH0gZnJvbSAnLi4vU3Bpbm5lci91dGlscy5qcydcblxuY29uc3QgU1dFRVBfRFVSQVRJT05fTVMgPSAxNTAwXG5jb25zdCBTV0VFUF9DT1VOVCA9IDJcbmNvbnN0IFRPVEFMX0FOSU1BVElPTl9NUyA9IFNXRUVQX0RVUkFUSU9OX01TICogU1dFRVBfQ09VTlRcbmNvbnN0IFNFVFRMRURfR1JFWSA9IHRvUkdCQ29sb3IoeyByOiAxNTMsIGc6IDE1MywgYjogMTUzIH0pXG5cbmV4cG9ydCBmdW5jdGlvbiBBbmltYXRlZEFzdGVyaXNrKHtcbiAgY2hhciA9IFRFQVJEUk9QX0FTVEVSSVNLLFxufToge1xuICBjaGFyPzogc3RyaW5nXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gUmVhZCBwcmVmZXJzUmVkdWNlZE1vdGlvbiBvbmNlIGF0IG1vdW50IOKAlCBubyB1c2VTZXR0aW5ncygpIHN1YnNjcmlwdGlvbixcbiAgLy8gc2luY2UgdGhhdCB3b3VsZCByZS1yZW5kZXIgd2hlbmV2ZXIgc2V0dGluZ3MgY2hhbmdlLlxuICBjb25zdCBbcmVkdWNlZE1vdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBnZXRJbml0aWFsU2V0dGluZ3MoKS5wcmVmZXJzUmVkdWNlZE1vdGlvbiA/PyBmYWxzZSxcbiAgKVxuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShyZWR1Y2VkTW90aW9uKVxuICAvLyB1c2VBbmltYXRpb25GcmFtZSdzIGNsb2NrIGlzIHNoYXJlZCDigJQgY2FwdHVyZSBvdXIgc3RhcnQgb2Zmc2V0IHNvIHRoZVxuICAvLyBzd2VlcCBhbHdheXMgYmVnaW5zIGF0IGh1ZSAwIHJlZ2FyZGxlc3Mgb2Ygd2hlbiB3ZSBtb3VudC5cbiAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpXG4gIC8vIFdpcmUgdGhlIHJlZiBzbyB1c2VBbmltYXRpb25GcmFtZSdzIHZpZXdwb3J0LXBhdXNlIGtpY2tzIGluOiBpZiB0aGVcbiAgLy8gdXNlciBzdWJtaXRzIGEgbWVzc2FnZSBiZWZvcmUgdGhlIHN3ZWVwIGZpbmlzaGVzLCB0aGUgY2xvY2sgc3RvcHNcbiAgLy8gYXV0b21hdGljYWxseSBvbmNlIHRoaXMgcm93IGVudGVycyBzY3JvbGxiYWNrIChwcmV2ZW50cyBmbGlja2VyKS5cbiAgY29uc3QgW3JlZiwgdGltZV0gPSB1c2VBbmltYXRpb25GcmFtZShkb25lID8gbnVsbCA6IDUwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvbmUpIHJldHVyblxuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KHNldERvbmUsIFRPVEFMX0FOSU1BVElPTl9NUywgdHJ1ZSlcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHQpXG4gIH0sIFtkb25lXSlcblxuICBpZiAoZG9uZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHJlZj17cmVmfT5cbiAgICAgICAgPFRleHQgY29sb3I9e1NFVFRMRURfR1JFWX0+e2NoYXJ9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0VGltZVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSB0aW1lXG4gIH1cbiAgY29uc3QgZWxhcHNlZCA9IHRpbWUgLSBzdGFydFRpbWVSZWYuY3VycmVudFxuICBjb25zdCBodWUgPSAoKGVsYXBzZWQgLyBTV0VFUF9EVVJBVElPTl9NUykgKiAzNjApICUgMzYwXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJlZj17cmVmfT5cbiAgICAgIDxUZXh0IGNvbG9yPXt0b1JHQkNvbG9yKGh1ZVRvUmdiKGh1ZSkpfT57Y2hhcn08L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVQX0FSUk9XIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBpc09wdXMxbU1lcmdlRW5hYmxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgQW5pbWF0ZWRBc3RlcmlzayB9IGZyb20gJy4vQW5pbWF0ZWRBc3Rlcmlzay5qcydcblxuY29uc3QgTUFYX1NIT1dfQ09VTlQgPSA2XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTaG93T3B1czFtTWVyZ2VOb3RpY2UoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaXNPcHVzMW1NZXJnZUVuYWJsZWQoKSAmJlxuICAgIChnZXRHbG9iYWxDb25maWcoKS5vcHVzMW1NZXJnZU5vdGljZVNlZW5Db3VudCA/PyAwKSA8IE1BWF9TSE9XX0NPVU5UXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9wdXMxbU1lcmdlTm90aWNlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzaG93XSA9IHVzZVN0YXRlKHNob3VsZFNob3dPcHVzMW1NZXJnZU5vdGljZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2hvdykgcmV0dXJuXG4gICAgY29uc3QgbmV3Q291bnQgPSAoZ2V0R2xvYmFsQ29uZmlnKCkub3B1czFtTWVyZ2VOb3RpY2VTZWVuQ291bnQgPz8gMCkgKyAxXG4gICAgc2F2ZUdsb2JhbENvbmZpZyhwcmV2ID0+IHtcbiAgICAgIGlmICgocHJldi5vcHVzMW1NZXJnZU5vdGljZVNlZW5Db3VudCA/PyAwKSA+PSBuZXdDb3VudCkgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIG9wdXMxbU1lcmdlTm90aWNlU2VlbkNvdW50OiBuZXdDb3VudCB9XG4gICAgfSlcbiAgfSwgW3Nob3ddKVxuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgPEFuaW1hdGVkQXN0ZXJpc2sgY2hhcj17VVBfQVJST1d9IC8+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgT3B1cyBub3cgZGVmYXVsdHMgdG8gMU0gY29udGV4dCDCtyA1eCBtb3JlIHJvb20sIHNhbWUgcHJpY2luZ1xuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGdldEluaXRpYWxTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgaXNWb2ljZU1vZGVFbmFibGVkIH0gZnJvbSAnLi4vLi4vdm9pY2Uvdm9pY2VNb2RlRW5hYmxlZC5qcydcbmltcG9ydCB7IEFuaW1hdGVkQXN0ZXJpc2sgfSBmcm9tICcuL0FuaW1hdGVkQXN0ZXJpc2suanMnXG5pbXBvcnQgeyBzaG91bGRTaG93T3B1czFtTWVyZ2VOb3RpY2UgfSBmcm9tICcuL09wdXMxbU1lcmdlTm90aWNlLmpzJ1xuXG5jb25zdCBNQVhfU0hPV19DT1VOVCA9IDNcblxuZXhwb3J0IGZ1bmN0aW9uIFZvaWNlTW9kZU5vdGljZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBQb3NpdGl2ZSB0ZXJuYXJ5IHBhdHRlcm4g4oCUIHNlZSBkb2NzL2ZlYXR1cmUtZ2F0aW5nLm1kLlxuICAvLyBBbGwgc3RyaW5ncyBtdXN0IGJlIGluc2lkZSB0aGUgZ3VhcmRlZCBicmFuY2ggZm9yIGRlYWQtY29kZSBlbGltaW5hdGlvbi5cbiAgcmV0dXJuIGZlYXR1cmUoJ1ZPSUNFX01PREUnKSA/IDxWb2ljZU1vZGVOb3RpY2VJbm5lciAvPiA6IG51bGxcbn1cblxuZnVuY3Rpb24gVm9pY2VNb2RlTm90aWNlSW5uZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gQ2FwdHVyZSBlbGlnaWJpbGl0eSBvbmNlIGF0IG1vdW50IOKAlCBubyByZWFjdGl2ZSBzdWJzY3JpcHRpb25zLiBUaGlzIHNpdHNcbiAgLy8gYXQgdGhlIHRvcCBvZiB0aGUgbWVzc2FnZSBsaXN0IGFuZCBlbnRlcnMgc2Nyb2xsYmFjayBxdWlja2x5OyBhbnlcbiAgLy8gcmUtcmVuZGVyIGFmdGVyIGl0J3MgaW4gc2Nyb2xsYmFjayB3b3VsZCBmb3JjZSBhIGZ1bGwgdGVybWluYWwgcmVzZXQuXG4gIC8vIElmIHRoZSB1c2VyIHJ1bnMgL3ZvaWNlIHRoaXMgc2Vzc2lvbiwgdGhlIG5vdGljZSBzdGF5cyB2aXNpYmxlOyBpdCB3b24ndFxuICAvLyBzaG93IG5leHQgc2Vzc2lvbiBzaW5jZSB2b2ljZUVuYWJsZWQgd2lsbCBiZSB0cnVlIG9uIGRpc2suXG4gIGNvbnN0IFtzaG93XSA9IHVzZVN0YXRlKFxuICAgICgpID0+XG4gICAgICBpc1ZvaWNlTW9kZUVuYWJsZWQoKSAmJlxuICAgICAgZ2V0SW5pdGlhbFNldHRpbmdzKCkudm9pY2VFbmFibGVkICE9PSB0cnVlICYmXG4gICAgICAoZ2V0R2xvYmFsQ29uZmlnKCkudm9pY2VOb3RpY2VTZWVuQ291bnQgPz8gMCkgPCBNQVhfU0hPV19DT1VOVCAmJlxuICAgICAgIXNob3VsZFNob3dPcHVzMW1NZXJnZU5vdGljZSgpLFxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNob3cpIHJldHVyblxuICAgIC8vIENhcHR1cmUgb3V0c2lkZSB0aGUgdXBkYXRlciBzbyBTdHJpY3RNb2RlJ3Mgc2Vjb25kIGludm9jYXRpb24gaXMgYSBuby1vcC5cbiAgICBjb25zdCBuZXdDb3VudCA9IChnZXRHbG9iYWxDb25maWcoKS52b2ljZU5vdGljZVNlZW5Db3VudCA/PyAwKSArIDFcbiAgICBzYXZlR2xvYmFsQ29uZmlnKHByZXYgPT4ge1xuICAgICAgaWYgKChwcmV2LnZvaWNlTm90aWNlU2VlbkNvdW50ID8/IDApID49IG5ld0NvdW50KSByZXR1cm4gcHJldlxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdm9pY2VOb3RpY2VTZWVuQ291bnQ6IG5ld0NvdW50IH1cbiAgICB9KVxuICB9LCBbc2hvd10pXG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBwYWRkaW5nTGVmdD17Mn0+XG4gICAgICA8QW5pbWF0ZWRBc3RlcmlzayAvPlxuICAgICAgPFRleHQgZGltQ29sb3I+IFZvaWNlIG1vZGUgaXMgbm93IGF2YWlsYWJsZSDCtyAvdm9pY2UgdG8gZW5hYmxlPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiLy8gQ29uZGl0aW9uYWxseSByZXF1aXJlKCknZCBpbiBMb2dvVjIudHN4IGJlaGluZCBmZWF0dXJlKCdLQUlST1MnKSB8fFxuLy8gZmVhdHVyZSgnS0FJUk9TX0NIQU5ORUxTJykuIE5vIGZlYXR1cmUoKSBndWFyZCBoZXJlIOKAlCB0aGUgd2hvbGUgZmlsZVxuLy8gdHJlZS1zaGFrZXMgdmlhIHRoZSByZXF1aXJlIHBhdHRlcm4gd2hlbiBib3RoIGZsYWdzIGFyZSBmYWxzZSAoc2VlXG4vLyBkb2NzL2ZlYXR1cmUtZ2F0aW5nLm1kKS4gRG8gTk9UIGltcG9ydCB0aGlzIG1vZHVsZSBzdGF0aWNhbGx5IGZyb21cbi8vIHVuZ3VhcmRlZCBjb2RlLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB0eXBlIENoYW5uZWxFbnRyeSxcbiAgZ2V0QWxsb3dlZENoYW5uZWxzLFxuICBnZXRIYXNEZXZDaGFubmVscyxcbn0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgaXNDaGFubmVsc0VuYWJsZWQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvY2hhbm5lbEFsbG93bGlzdC5qcydcbmltcG9ydCB7IGdldEVmZmVjdGl2ZUNoYW5uZWxBbGxvd2xpc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvY2hhbm5lbE5vdGlmaWNhdGlvbi5qcydcbmltcG9ydCB7IGdldE1jcENvbmZpZ3NCeVNjb3BlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGdldENsYXVkZUFJT0F1dGhUb2tlbnMsXG4gIGdldFN1YnNjcmlwdGlvblR5cGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguanMnXG5pbXBvcnQgeyBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsZWRQbHVnaW5zTWFuYWdlci5qcydcbmltcG9ydCB7IGdldFNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFubmVsc05vdGljZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBTbmFwc2hvdCBhbGwgcmVhZHMgYXQgbW91bnQuIFRoaXMgbm90aWNlIGVudGVycyBzY3JvbGxiYWNrIGltbWVkaWF0ZWx5XG4gIC8vIGFmdGVyIHRoZSBsb2dvOyBhbnkgcmUtcmVuZGVyIHBhc3QgdGhhdCBwb2ludCBmb3JjZXMgYSBmdWxsIHRlcm1pbmFsXG4gIC8vIHJlc2V0LiBnZXRBbGxvd2VkQ2hhbm5lbHMgKGJvb3RzdHJhcCBzdGF0ZSksIGdldFNldHRpbmdzRm9yU291cmNlXG4gIC8vIChzZXNzaW9uIGNhY2hlIHVwZGF0ZWQgYnkgYmFja2dyb3VuZCBwb2xsaW5nIC8gL2xvZ2luKSwgYW5kXG4gIC8vIGlzQ2hhbm5lbHNFbmFibGVkIChHcm93dGhCb29rIDUtbWluIHJlZnJlc2gpIG11c3QgYmUgY2FwdHVyZWQgb25jZVxuICAvLyBzbyBhIGxhdGVyIHJlLXJlbmRlciBjYW5ub3QgZmxpcCBicmFuY2hlcy5cbiAgY29uc3QgW3sgY2hhbm5lbHMsIGRpc2FibGVkLCBub0F1dGgsIHBvbGljeUJsb2NrZWQsIGxpc3QsIHVubWF0Y2hlZCB9XSA9XG4gICAgdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgY29uc3QgY2ggPSBnZXRBbGxvd2VkQ2hhbm5lbHMoKVxuICAgICAgaWYgKGNoLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGFubmVsczogY2gsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIG5vQXV0aDogZmFsc2UsXG4gICAgICAgICAgcG9saWN5QmxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgbGlzdDogJycsXG4gICAgICAgICAgdW5tYXRjaGVkOiBbXSBhcyBVbm1hdGNoZWRbXSxcbiAgICAgICAgfVxuICAgICAgY29uc3QgbCA9IGNoLm1hcChmb3JtYXRFbnRyeSkuam9pbignLCAnKVxuICAgICAgY29uc3Qgc3ViID0gZ2V0U3Vic2NyaXB0aW9uVHlwZSgpXG4gICAgICBjb25zdCBtYW5hZ2VkID0gc3ViID09PSAndGVhbScgfHwgc3ViID09PSAnZW50ZXJwcmlzZSdcbiAgICAgIGNvbnN0IHBvbGljeSA9IGdldFNldHRpbmdzRm9yU291cmNlKCdwb2xpY3lTZXR0aW5ncycpXG4gICAgICBjb25zdCBhbGxvd2xpc3QgPSBnZXRFZmZlY3RpdmVDaGFubmVsQWxsb3dsaXN0KFxuICAgICAgICBzdWIsXG4gICAgICAgIHBvbGljeT8uYWxsb3dlZENoYW5uZWxQbHVnaW5zLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbm5lbHM6IGNoLFxuICAgICAgICBkaXNhYmxlZDogIWlzQ2hhbm5lbHNFbmFibGVkKCksXG4gICAgICAgIG5vQXV0aDogIWdldENsYXVkZUFJT0F1dGhUb2tlbnMoKT8uYWNjZXNzVG9rZW4sXG4gICAgICAgIHBvbGljeUJsb2NrZWQ6IG1hbmFnZWQgJiYgcG9saWN5Py5jaGFubmVsc0VuYWJsZWQgIT09IHRydWUsXG4gICAgICAgIGxpc3Q6IGwsXG4gICAgICAgIHVubWF0Y2hlZDogZmluZFVubWF0Y2hlZChjaCwgYWxsb3dsaXN0KSxcbiAgICAgIH1cbiAgICB9KVxuICBpZiAoY2hhbm5lbHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIC8vIFdoZW4gYm90aCBmbGFncyBhcmUgcGFzc2VkLCB0aGUgbGlzdCBtaXhlcyBlbnRyaWVzIGFuZCBhIHNpbmdsZSBmbGFnXG4gIC8vIG5hbWUgd291bGQgYmUgd3JvbmcgZm9yIGhhbGYgb2YgaXQuIGVudHJ5LmRldiBkaXN0aW5ndWlzaGVzIG9yaWdpbi5cbiAgY29uc3QgaGFzTm9uRGV2ID0gY2hhbm5lbHMuc29tZShjID0+ICFjLmRldilcbiAgY29uc3QgZmxhZyA9XG4gICAgZ2V0SGFzRGV2Q2hhbm5lbHMoKSAmJiBoYXNOb25EZXZcbiAgICAgID8gJ0NoYW5uZWxzJ1xuICAgICAgOiBnZXRIYXNEZXZDaGFubmVscygpXG4gICAgICAgID8gJy0tZGFuZ2Vyb3VzbHktbG9hZC1kZXZlbG9wbWVudC1jaGFubmVscydcbiAgICAgICAgOiAnLS1jaGFubmVscydcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAge2ZsYWd9IGlnbm9yZWQgKHtsaXN0fSlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5DaGFubmVscyBhcmUgbm90IGN1cnJlbnRseSBhdmFpbGFibGU8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAobm9BdXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgIHtmbGFnfSBpZ25vcmVkICh7bGlzdH0pXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgQ2hhbm5lbHMgcmVxdWlyZSBjbGF1ZGUuYWkgYXV0aGVudGljYXRpb24gwrcgcnVuIC9sb2dpbiwgdGhlbiByZXN0YXJ0XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChwb2xpY3lCbG9ja2VkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgIHtmbGFnfSBibG9ja2VkIGJ5IG9yZyBwb2xpY3kgKHtsaXN0fSlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5JbmJvdW5kIG1lc3NhZ2VzIHdpbGwgYmUgc2lsZW50bHkgZHJvcHBlZDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgSGF2ZSBhbiBhZG1pbmlzdHJhdG9yIHNldCBjaGFubmVsc0VuYWJsZWQ6IHRydWUgaW4gbWFuYWdlZCBzZXR0aW5ncyB0b1xuICAgICAgICAgIGVuYWJsZVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHt1bm1hdGNoZWQubWFwKHUgPT4gKFxuICAgICAgICAgIDxUZXh0IGtleT17YCR7Zm9ybWF0RW50cnkodS5lbnRyeSl9OiR7dS53aHl9YH0gY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICB7Zm9ybWF0RW50cnkodS5lbnRyeSl9IMK3IHt1LndoeX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gXCJMaXN0ZW5pbmcgZm9yXCIgbm90IFwiYWN0aXZlXCIg4oCUIGF0IHRoaXMgcG9pbnQgd2Ugb25seSBrbm93IHRoZSBhbGxvd2xpc3RcbiAgLy8gd2FzIHNldC4gU2VydmVyIGNvbm5lY3Rpb24sIGNhcGFiaWxpdHkgZGVjbGFyYXRpb24sIGFuZCB3aGV0aGVyIHRoZSBuYW1lXG4gIC8vIGV2ZW4gbWF0Y2hlcyBhIGNvbmZpZ3VyZWQgTUNQIHNlcnZlciBhcmUgYWxsIHN0aWxsIHVua25vd24uXG4gIHJldHVybiAoXG4gICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkxpc3RlbmluZyBmb3IgY2hhbm5lbCBtZXNzYWdlcyBmcm9tOiB7bGlzdH08L1RleHQ+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgRXhwZXJpbWVudGFsIMK3IGluYm91bmQgbWVzc2FnZXMgd2lsbCBiZSBwdXNoZWQgaW50byB0aGlzIHNlc3Npb24sIHRoaXNcbiAgICAgICAgY2FycmllcyBwcm9tcHQgaW5qZWN0aW9uIHJpc2tzLiBSZXN0YXJ0IENsYXVkZSBDb2RlIHdpdGhvdXQge2ZsYWd9IHRvXG4gICAgICAgIGRpc2FibGUuXG4gICAgICA8L1RleHQ+XG4gICAgICB7dW5tYXRjaGVkLm1hcCh1ID0+IChcbiAgICAgICAgPFRleHQga2V5PXtgJHtmb3JtYXRFbnRyeSh1LmVudHJ5KX06JHt1LndoeX1gfSBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICB7Zm9ybWF0RW50cnkodS5lbnRyeSl9IMK3IHt1LndoeX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RW50cnkoYzogQ2hhbm5lbEVudHJ5KTogc3RyaW5nIHtcbiAgcmV0dXJuIGMua2luZCA9PT0gJ3BsdWdpbidcbiAgICA/IGBwbHVnaW46JHtjLm5hbWV9QCR7Yy5tYXJrZXRwbGFjZX1gXG4gICAgOiBgc2VydmVyOiR7Yy5uYW1lfWBcbn1cblxudHlwZSBVbm1hdGNoZWQgPSB7IGVudHJ5OiBDaGFubmVsRW50cnk7IHdoeTogc3RyaW5nIH1cblxuZnVuY3Rpb24gZmluZFVubWF0Y2hlZChcbiAgZW50cmllczogcmVhZG9ubHkgQ2hhbm5lbEVudHJ5W10sXG4gIGFsbG93bGlzdDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0RWZmZWN0aXZlQ2hhbm5lbEFsbG93bGlzdD4sXG4pOiBVbm1hdGNoZWRbXSB7XG4gIC8vIFNlcnZlci1raW5kOiBidWlsZCBvbmUgU2V0IGZyb20gYWxsIHNjb3BlcyB1cCBmcm9udC4gZ2V0TWNwQ29uZmlnc0J5U2NvcGVcbiAgLy8gaXMgbm90IGNhY2hlZCAocHJvamVjdCBzY29wZSB3YWxrcyB0aGUgZGlyIHRyZWUpOyBnZXRNY3BDb25maWdCeU5hbWUgd291bGRcbiAgLy8gcmVkbyB0aGF0IHdhbGsgcGVyIGVudHJ5LlxuICBjb25zdCBzY29wZXMgPSBbJ2VudGVycHJpc2UnLCAndXNlcicsICdwcm9qZWN0JywgJ2xvY2FsJ10gYXMgY29uc3RcbiAgY29uc3QgY29uZmlndXJlZCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGdldE1jcENvbmZpZ3NCeVNjb3BlKHNjb3BlKS5zZXJ2ZXJzKSkge1xuICAgICAgY29uZmlndXJlZC5hZGQobmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBQbHVnaW4ta2luZCBpbnN0YWxsZWQgY2hlY2s6IGluc3RhbGxlZF9wbHVnaW5zLmpzb24ga2V5cyBhcmVcbiAgLy8gYG5hbWVAbWFya2V0cGxhY2VgLiBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIGlzIGNhY2hlZC5cbiAgY29uc3QgaW5zdGFsbGVkUGx1Z2luSWRzID0gbmV3IFNldChcbiAgICBPYmplY3Qua2V5cyhsb2FkSW5zdGFsbGVkUGx1Z2luc1YyKCkucGx1Z2lucyksXG4gIClcblxuICAvLyBQbHVnaW4ta2luZCBhbGxvd2xpc3QgY2hlY2s6IHNhbWUge21hcmtldHBsYWNlLCBwbHVnaW59IHRlc3QgYXMgdGhlXG4gIC8vIGdhdGUgYXQgY2hhbm5lbE5vdGlmaWNhdGlvbi50cy4gZW50cnkuZGV2IGJ5cGFzc2VzIChkZXYgZmxhZyBvcHRzIG91dFxuICAvLyBvZiB0aGUgYWxsb3dsaXN0KS4gT3JnIGxpc3QgcmVwbGFjZXMgbGVkZ2VyIHdoZW4gc2V0ICh0ZWFtL2VudGVycHJpc2UpLlxuICAvLyBHcm93dGhCb29rIF9DQUNIRURfTUFZX0JFX1NUQUxFIOKAlCBjb2xkIGNhY2hlIHlpZWxkcyBbXSBzbyBldmVyeSBwbHVnaW5cbiAgLy8gZW50cnkgd2FybnM7IHNhbWUgdHJhZGVvZmYgdGhlIGdhdGUgYWxyZWFkeSBhY2NlcHRzLlxuICBjb25zdCB7IGVudHJpZXM6IGFsbG93ZWQsIHNvdXJjZSB9ID0gYWxsb3dsaXN0XG5cbiAgLy8gSW5kZXBlbmRlbnQgaWZzIOKAlCBhIHBsdWdpbiBlbnRyeSB0aGF0J3MgYm90aCB1bmluc3RhbGxlZCBBTkRcbiAgLy8gdW5saXN0ZWQgc2hvd3MgdHdvIGxpbmVzLiBTZXJ2ZXIga2luZCBjaGVja3MgY29uZmlnICsgZGV2IGZsYWcuXG4gIGNvbnN0IG91dDogVW5tYXRjaGVkW10gPSBbXVxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICBpZiAoZW50cnkua2luZCA9PT0gJ3NlcnZlcicpIHtcbiAgICAgIGlmICghY29uZmlndXJlZC5oYXMoZW50cnkubmFtZSkpIHtcbiAgICAgICAgb3V0LnB1c2goeyBlbnRyeSwgd2h5OiAnbm8gTUNQIHNlcnZlciBjb25maWd1cmVkIHdpdGggdGhhdCBuYW1lJyB9KVxuICAgICAgfVxuICAgICAgaWYgKCFlbnRyeS5kZXYpIHtcbiAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgIHdoeTogJ3NlcnZlcjogZW50cmllcyBuZWVkIC0tZGFuZ2Vyb3VzbHktbG9hZC1kZXZlbG9wbWVudC1jaGFubmVscycsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoIWluc3RhbGxlZFBsdWdpbklkcy5oYXMoYCR7ZW50cnkubmFtZX1AJHtlbnRyeS5tYXJrZXRwbGFjZX1gKSkge1xuICAgICAgb3V0LnB1c2goeyBlbnRyeSwgd2h5OiAncGx1Z2luIG5vdCBpbnN0YWxsZWQnIH0pXG4gICAgfVxuICAgIGlmIChcbiAgICAgICFlbnRyeS5kZXYgJiZcbiAgICAgICFhbGxvd2VkLnNvbWUoXG4gICAgICAgIGUgPT4gZS5wbHVnaW4gPT09IGVudHJ5Lm5hbWUgJiYgZS5tYXJrZXRwbGFjZSA9PT0gZW50cnkubWFya2V0cGxhY2UsXG4gICAgICApXG4gICAgKSB7XG4gICAgICBvdXQucHVzaCh7XG4gICAgICAgIGVudHJ5LFxuICAgICAgICB3aHk6XG4gICAgICAgICAgc291cmNlID09PSAnb3JnJ1xuICAgICAgICAgICAgPyBcIm5vdCBvbiB5b3VyIG9yZydzIGFwcHJvdmVkIGNoYW5uZWxzIGxpc3RcIlxuICAgICAgICAgICAgOiAnbm90IG9uIHRoZSBhcHByb3ZlZCBjaGFubmVscyBhbGxvd2xpc3QnLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuIiwgIi8vIGJpb21lLWlnbm9yZS1hbGwgYXNzaXN0L3NvdXJjZS9vcmdhbml6ZUltcG9ydHM6IEFOVC1PTkxZIGltcG9ydCBtYXJrZXJzIG11c3Qgbm90IGJlIHJlb3JkZXJlZFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQsIGNvbG9yIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgc3RyaW5nV2lkdGggfSBmcm9tICcuLi8uLi9pbmsvc3RyaW5nV2lkdGguanMnXG5pbXBvcnQge1xuICBnZXRMYXlvdXRNb2RlLFxuICBjYWxjdWxhdGVMYXlvdXREaW1lbnNpb25zLFxuICBjYWxjdWxhdGVPcHRpbWFsTGVmdFdpZHRoLFxuICBmb3JtYXRXZWxjb21lTWVzc2FnZSxcbiAgdHJ1bmNhdGVQYXRoLFxuICBnZXRSZWNlbnRBY3Rpdml0eVN5bmMsXG4gIGdldFJlY2VudFJlbGVhc2VOb3Rlc1N5bmMsXG4gIGdldExvZ29EaXNwbGF5RGF0YSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nb1YyVXRpbHMuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGdldERpc3BsYXlQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsZS5qcydcbmltcG9ydCB7IENsYXdkIH0gZnJvbSAnLi9DbGF3ZC5qcydcbmltcG9ydCB7IEZlZWRDb2x1bW4gfSBmcm9tICcuL0ZlZWRDb2x1bW4uanMnXG5pbXBvcnQge1xuICBjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQsXG4gIGNyZWF0ZVdoYXRzTmV3RmVlZCxcbiAgY3JlYXRlUHJvamVjdE9uYm9hcmRpbmdGZWVkLFxuICBjcmVhdGVHdWVzdFBhc3Nlc0ZlZWQsXG59IGZyb20gJy4vZmVlZENvbmZpZ3MuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICdzcmMvdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZVRoZW1lU2V0dGluZyB9IGZyb20gJ3NyYy91dGlscy9zeXN0ZW1UaGVtZS5qcydcbmltcG9ydCB7IGdldEluaXRpYWxTZXR0aW5ncyB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7XG4gIGlzRGVidWdNb2RlLFxuICBpc0RlYnVnVG9TdGRFcnIsXG4gIGdldERlYnVnTG9nUGF0aCxcbn0gZnJvbSAnc3JjL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZ2V0U3RlcHMsXG4gIHNob3VsZFNob3dQcm9qZWN0T25ib2FyZGluZyxcbiAgaW5jcmVtZW50UHJvamVjdE9uYm9hcmRpbmdTZWVuQ291bnQsXG59IGZyb20gJy4uLy4uL3Byb2plY3RPbmJvYXJkaW5nU3RhdGUuanMnXG5pbXBvcnQgeyBDb25kZW5zZWRMb2dvIH0gZnJvbSAnLi9Db25kZW5zZWRMb2dvLmpzJ1xuaW1wb3J0IHsgT2Zmc2NyZWVuRnJlZXplIH0gZnJvbSAnLi4vT2Zmc2NyZWVuRnJlZXplLmpzJ1xuaW1wb3J0IHsgY2hlY2tGb3JSZWxlYXNlTm90ZXNTeW5jIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVsZWFzZU5vdGVzLmpzJ1xuaW1wb3J0IHsgZ2V0RHVtcFByb21wdHNQYXRoIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS9kdW1wUHJvbXB0cy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnc3JjL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U3RhcnR1cFBlcmZMb2dQYXRoLFxuICBpc0RldGFpbGVkUHJvZmlsaW5nRW5hYmxlZCxcbn0gZnJvbSAnc3JjL3V0aWxzL3N0YXJ0dXBQcm9maWxlci5qcydcbmltcG9ydCB7IEVtZXJnZW5jeVRpcCB9IGZyb20gJy4vRW1lcmdlbmN5VGlwLmpzJ1xuaW1wb3J0IHsgVm9pY2VNb2RlTm90aWNlIH0gZnJvbSAnLi9Wb2ljZU1vZGVOb3RpY2UuanMnXG5pbXBvcnQgeyBPcHVzMW1NZXJnZU5vdGljZSB9IGZyb20gJy4vT3B1czFtTWVyZ2VOb3RpY2UuanMnXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcblxuLy8gQ29uZGl0aW9uYWwgcmVxdWlyZSBzbyBDaGFubmVsc05vdGljZS50c3ggdHJlZS1zaGFrZXMgd2hlbiBib3RoIGZsYWdzIGFyZVxuLy8gZmFsc2UuIEEgbW9kdWxlLXNjb3BlIGhlbHBlciBjb21wb25lbnQgaW5zaWRlIGEgZmVhdHVyZSgpIHRlcm5hcnkgZG9lcyBOT1Rcbi8vIHRyZWUtc2hha2UgKGRvY3MvZmVhdHVyZS1nYXRpbmcubWQpOyB0aGUgcmVxdWlyZSBwYXR0ZXJuIGVsaW1pbmF0ZXMgdGhlXG4vLyB3aG9sZSBmaWxlLiBWb2ljZU1vZGVOb3RpY2UgdXNlcyB0aGUgdW5zYWZlIGhlbHBlciBwYXR0ZXJuIGJ1dCBWT0lDRV9NT0RFXG4vLyBpcyBleHRlcm5hbDogdHJ1ZSBzbyBpdCdzIG1vb3QgdGhlcmUuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBDaGFubmVsc05vdGljZU1vZHVsZSA9XG4gIGZlYXR1cmUoJ0tBSVJPUycpIHx8IGZlYXR1cmUoJ0tBSVJPU19DSEFOTkVMUycpXG4gICAgPyAocmVxdWlyZSgnLi9DaGFubmVsc05vdGljZS5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4vQ2hhbm5lbHNOb3RpY2UuanMnKSlcbiAgICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuaW1wb3J0IHsgU2FuZGJveE1hbmFnZXIgfSBmcm9tICdzcmMvdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5pbXBvcnQge1xuICB1c2VTaG93R3Vlc3RQYXNzZXNVcHNlbGwsXG4gIGluY3JlbWVudEd1ZXN0UGFzc2VzU2VlbkNvdW50LFxufSBmcm9tICcuL0d1ZXN0UGFzc2VzVXBzZWxsLmpzJ1xuaW1wb3J0IHtcbiAgdXNlU2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwsXG4gIGluY3JlbWVudE92ZXJhZ2VDcmVkaXRVcHNlbGxTZWVuQ291bnQsXG4gIGNyZWF0ZU92ZXJhZ2VDcmVkaXRGZWVkLFxufSBmcm9tICcuL092ZXJhZ2VDcmVkaXRVcHNlbGwuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBnZXRFZmZvcnRTdWZmaXggfSBmcm9tICcuLi8uLi91dGlscy9lZmZvcnQuanMnXG5pbXBvcnQgeyB1c2VNYWluTG9vcE1vZGVsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWFpbkxvb3BNb2RlbC5qcydcbmltcG9ydCB7IHJlbmRlck1vZGVsU2V0dGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuXG5jb25zdCBMRUZUX1BBTkVMX01BWF9XSURUSCA9IDUwXG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dvVjIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgYWN0aXZpdGllcyA9IGdldFJlY2VudEFjdGl2aXR5U3luYygpXG4gIGNvbnN0IHVzZXJuYW1lID0gZ2V0R2xvYmFsQ29uZmlnKCkub2F1dGhBY2NvdW50Py5kaXNwbGF5TmFtZSA/PyAnJ1xuXG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3Qgc2hvd09uYm9hcmRpbmcgPSBzaG91bGRTaG93UHJvamVjdE9uYm9hcmRpbmcoKVxuICBjb25zdCBzaG93U2FuZGJveFN0YXR1cyA9IFNhbmRib3hNYW5hZ2VyLmlzU2FuZGJveGluZ0VuYWJsZWQoKVxuICBjb25zdCBzaG93R3Vlc3RQYXNzZXNVcHNlbGwgPSB1c2VTaG93R3Vlc3RQYXNzZXNVcHNlbGwoKVxuICBjb25zdCBzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCA9IHVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsKClcbiAgY29uc3QgYWdlbnQgPSB1c2VBcHBTdGF0ZShzID0+IHMuYWdlbnQpXG4gIGNvbnN0IGVmZm9ydFZhbHVlID0gdXNlQXBwU3RhdGUocyA9PiBzLmVmZm9ydFZhbHVlKVxuXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG5cbiAgbGV0IGNoYW5nZWxvZzogc3RyaW5nW11cbiAgdHJ5IHtcbiAgICBjaGFuZ2Vsb2cgPSBnZXRSZWNlbnRSZWxlYXNlTm90ZXNTeW5jKDMpXG4gIH0gY2F0Y2gge1xuICAgIGNoYW5nZWxvZyA9IFtdXG4gIH1cblxuICAvLyBHZXQgY29tcGFueSBhbm5vdW5jZW1lbnRzIGFuZCBzZWxlY3Qgb25lOlxuICAvLyAtIEZpcnN0IHN0YXJ0dXAgKG51bVN0YXJ0dXBzID09PSAxKTogc2hvdyBmaXJzdCBhbm5vdW5jZW1lbnRcbiAgLy8gLSBBbGwgb3RoZXIgc3RhcnR1cHM6IHJhbmRvbWx5IHNlbGVjdCBmcm9tIGFubm91bmNlbWVudHNcbiAgY29uc3QgW2Fubm91bmNlbWVudF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgYW5ub3VuY2VtZW50cyA9IGdldEluaXRpYWxTZXR0aW5ncygpLmNvbXBhbnlBbm5vdW5jZW1lbnRzXG4gICAgaWYgKCFhbm5vdW5jZW1lbnRzIHx8IGFubm91bmNlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGNvbmZpZy5udW1TdGFydHVwcyA9PT0gMVxuICAgICAgPyBhbm5vdW5jZW1lbnRzWzBdXG4gICAgICA6IGFubm91bmNlbWVudHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW5ub3VuY2VtZW50cy5sZW5ndGgpXVxuICB9KVxuICBjb25zdCB7IGhhc1JlbGVhc2VOb3RlcyB9ID0gY2hlY2tGb3JSZWxlYXNlTm90ZXNTeW5jKFxuICAgIGNvbmZpZy5sYXN0UmVsZWFzZU5vdGVzU2VlbixcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgaWYgKGN1cnJlbnRDb25maWcubGFzdFJlbGVhc2VOb3Rlc1NlZW4gPT09IE1BQ1JPLlZFUlNJT04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQubGFzdFJlbGVhc2VOb3Rlc1NlZW4gPT09IE1BQ1JPLlZFUlNJT04pIHJldHVybiBjdXJyZW50XG4gICAgICByZXR1cm4geyAuLi5jdXJyZW50LCBsYXN0UmVsZWFzZU5vdGVzU2VlbjogTUFDUk8uVkVSU0lPTiB9XG4gICAgfSlcbiAgICBpZiAoc2hvd09uYm9hcmRpbmcpIHtcbiAgICAgIGluY3JlbWVudFByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50KClcbiAgICB9XG4gIH0sIFtjb25maWcsIHNob3dPbmJvYXJkaW5nXSlcblxuICAvLyBJbiBjb25kZW5zZWQgbW9kZSAoZWFybHktcmV0dXJuIGJlbG93IHJlbmRlcnMgPENvbmRlbnNlZExvZ28vPiksXG4gIC8vIENvbmRlbnNlZExvZ28ncyBvd24gdXNlRWZmZWN0IGhhbmRsZXMgdGhlIGltcHJlc3Npb24gY291bnQuIFNraXBwaW5nXG4gIC8vIGhlcmUgYXZvaWRzIGRvdWJsZS1jb3VudGluZyBzaW5jZSBob29rcyBmaXJlIGJlZm9yZSB0aGUgZWFybHkgcmV0dXJuLlxuICBjb25zdCBpc0NvbmRlbnNlZE1vZGUgPVxuICAgICFoYXNSZWxlYXNlTm90ZXMgJiZcbiAgICAhc2hvd09uYm9hcmRpbmcgJiZcbiAgICAhaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRk9SQ0VfRlVMTF9MT0dPKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dHdWVzdFBhc3Nlc1Vwc2VsbCAmJiAhc2hvd09uYm9hcmRpbmcgJiYgIWlzQ29uZGVuc2VkTW9kZSkge1xuICAgICAgaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQoKVxuICAgIH1cbiAgfSwgW3Nob3dHdWVzdFBhc3Nlc1Vwc2VsbCwgc2hvd09uYm9hcmRpbmcsIGlzQ29uZGVuc2VkTW9kZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCAmJlxuICAgICAgIXNob3dPbmJvYXJkaW5nICYmXG4gICAgICAhc2hvd0d1ZXN0UGFzc2VzVXBzZWxsICYmXG4gICAgICAhaXNDb25kZW5zZWRNb2RlXG4gICAgKSB7XG4gICAgICBpbmNyZW1lbnRPdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50KClcbiAgICB9XG4gIH0sIFtcbiAgICBzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCxcbiAgICBzaG93T25ib2FyZGluZyxcbiAgICBzaG93R3Vlc3RQYXNzZXNVcHNlbGwsXG4gICAgaXNDb25kZW5zZWRNb2RlLFxuICBdKVxuXG4gIGNvbnN0IG1vZGVsID0gdXNlTWFpbkxvb3BNb2RlbCgpXG4gIGNvbnN0IGZ1bGxNb2RlbERpc3BsYXlOYW1lID0gcmVuZGVyTW9kZWxTZXR0aW5nKG1vZGVsKVxuICBjb25zdCB7XG4gICAgdmVyc2lvbixcbiAgICBjd2QsXG4gICAgYmlsbGluZ1R5cGUsXG4gICAgYWdlbnROYW1lOiBhZ2VudE5hbWVGcm9tU2V0dGluZ3MsXG4gIH0gPSBnZXRMb2dvRGlzcGxheURhdGEoKVxuICAvLyBQcmVmZXIgQXBwU3RhdGUuYWdlbnQgKHNldCBmcm9tIC0tYWdlbnQgQ0xJIGZsYWcpIG92ZXIgc2V0dGluZ3NcbiAgY29uc3QgYWdlbnROYW1lID0gYWdlbnQgPz8gYWdlbnROYW1lRnJvbVNldHRpbmdzXG4gIC8vIC0yMCB0byBhY2NvdW50IGZvciB0aGUgbWF4IGxlbmd0aCBvZiBzdWJzY3JpcHRpb24gbmFtZSBcIiDCtyBDbGF1ZGUgRW50ZXJwcmlzZVwiLlxuICBjb25zdCBlZmZvcnRTdWZmaXggPSBnZXRFZmZvcnRTdWZmaXgobW9kZWwsIGVmZm9ydFZhbHVlKVxuICBjb25zdCBtb2RlbERpc3BsYXlOYW1lID0gdHJ1bmNhdGUoXG4gICAgZnVsbE1vZGVsRGlzcGxheU5hbWUgKyBlZmZvcnRTdWZmaXgsXG4gICAgTEVGVF9QQU5FTF9NQVhfV0lEVEggLSAyMCxcbiAgKVxuXG4gIC8vIFNob3cgY29uZGVuc2VkIGxvZ28gaWYgbm8gbmV3IGNoYW5nZWxvZyBhbmQgbm90IHNob3dpbmcgb25ib2FyZGluZyBhbmQgbm90IGZvcmNpbmcgZnVsbCBsb2dvXG4gIGlmIChcbiAgICAhaGFzUmVsZWFzZU5vdGVzICYmXG4gICAgIXNob3dPbmJvYXJkaW5nICYmXG4gICAgIWlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0ZPUkNFX0ZVTExfTE9HTylcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxDb25kZW5zZWRMb2dvIC8+XG4gICAgICAgIDxWb2ljZU1vZGVOb3RpY2UgLz5cbiAgICAgICAgPE9wdXMxbU1lcmdlTm90aWNlIC8+XG4gICAgICAgIHtDaGFubmVsc05vdGljZU1vZHVsZSAmJiA8Q2hhbm5lbHNOb3RpY2VNb2R1bGUuQ2hhbm5lbHNOb3RpY2UgLz59XG4gICAgICAgIHtpc0RlYnVnTW9kZSgpICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5EZWJ1ZyBtb2RlIGVuYWJsZWQ8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgTG9nZ2luZyB0bzoge2lzRGVidWdUb1N0ZEVycigpID8gJ3N0ZGVycicgOiBnZXREZWJ1Z0xvZ1BhdGgoKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEVtZXJnZW5jeVRpcCAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9TRVNTSU9OICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgdG11eCBzZXNzaW9uOiB7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9TRVNTSU9OfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1BSRUZJWF9DT05GTElDVFNcbiAgICAgICAgICAgICAgICA/IGBEZXRhY2g6ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9IGQgKHByZXNzIHByZWZpeCB0d2ljZSAtIENsYXVkZSB1c2VzICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9KWBcbiAgICAgICAgICAgICAgICA6IGBEZXRhY2g6ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9IGRgfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7YW5ub3VuY2VtZW50ICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICB7IXByb2Nlc3MuZW52LklTX0RFTU8gJiYgY29uZmlnLm9hdXRoQWNjb3VudD8ub3JnYW5pemF0aW9uTmFtZSAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIE1lc3NhZ2UgZnJvbSB7Y29uZmlnLm9hdXRoQWNjb3VudC5vcmdhbml6YXRpb25OYW1lfTpcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0Pnthbm5vdW5jZW1lbnR9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiAhcHJvY2Vzcy5lbnYuREVNT19WRVJTSU9OICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Vc2UgL2lzc3VlIHRvIHJlcG9ydCBtb2RlbCBiZWhhdmlvciBpc3N1ZXM8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtcImV4dGVybmFsXCIgPT09ICdhbnQnICYmICFwcm9jZXNzLmVudi5ERU1PX1ZFUlNJT04gJiYgKFxuICAgICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPltBTlQtT05MWV0gTG9nczo8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgQVBJIGNhbGxzOiB7Z2V0RGlzcGxheVBhdGgoZ2V0RHVtcFByb21wdHNQYXRoKCkpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIERlYnVnIGxvZ3M6IHtnZXREaXNwbGF5UGF0aChnZXREZWJ1Z0xvZ1BhdGgoKSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7aXNEZXRhaWxlZFByb2ZpbGluZ0VuYWJsZWQoKSAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIFN0YXJ0dXAgUGVyZjoge2dldERpc3BsYXlQYXRoKGdldFN0YXJ0dXBQZXJmTG9nUGF0aCgpKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEdhdGVPdmVycmlkZXNXYXJuaW5nIC8+fVxuICAgICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiA8RXhwZXJpbWVudEVucm9sbG1lbnROb3RpY2UgLz59XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICAvLyBDYWxjdWxhdGUgbGF5b3V0IGFuZCBkaXNwbGF5IHZhbHVlc1xuICBjb25zdCBsYXlvdXRNb2RlID0gZ2V0TGF5b3V0TW9kZShjb2x1bW5zKVxuXG4gIGNvbnN0IHVzZXJUaGVtZSA9IHJlc29sdmVUaGVtZVNldHRpbmcoZ2V0R2xvYmFsQ29uZmlnKCkudGhlbWUpXG4gIGNvbnN0IGJvcmRlclRpdGxlID0gYCAke2NvbG9yKCdjbGF1ZGUnLCB1c2VyVGhlbWUpKCdDbGF1ZGUgQ29kZScpfSAke2NvbG9yKCdpbmFjdGl2ZScsIHVzZXJUaGVtZSkoYHYke3ZlcnNpb259YCl9IGBcbiAgY29uc3QgY29tcGFjdEJvcmRlclRpdGxlID0gY29sb3IoJ2NsYXVkZScsIHVzZXJUaGVtZSkoJyBDbGF1ZGUgQ29kZSAnKVxuXG4gIC8vIEVhcmx5IHJldHVybiBmb3IgY29tcGFjdCBtb2RlXG4gIGlmIChsYXlvdXRNb2RlID09PSAnY29tcGFjdCcpIHtcbiAgICBjb25zdCBsYXlvdXRXaWR0aCA9IDQgLy8gYm9yZGVyICsgcGFkZGluZ1xuICAgIGxldCB3ZWxjb21lTWVzc2FnZSA9IGZvcm1hdFdlbGNvbWVNZXNzYWdlKHVzZXJuYW1lKVxuICAgIGlmIChzdHJpbmdXaWR0aCh3ZWxjb21lTWVzc2FnZSkgPiBjb2x1bW5zIC0gbGF5b3V0V2lkdGgpIHtcbiAgICAgIHdlbGNvbWVNZXNzYWdlID0gZm9ybWF0V2VsY29tZU1lc3NhZ2UobnVsbClcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgY3dkIHdpZHRoIGFjY291bnRpbmcgZm9yIGFnZW50IG5hbWUgaWYgcHJlc2VudFxuICAgIGNvbnN0IHNlcGFyYXRvciA9ICcgwrcgJ1xuICAgIGNvbnN0IGF0UHJlZml4ID0gJ0AnXG4gICAgY29uc3QgY3dkQXZhaWxhYmxlV2lkdGggPSBhZ2VudE5hbWVcbiAgICAgID8gY29sdW1ucyAtXG4gICAgICAgIGxheW91dFdpZHRoIC1cbiAgICAgICAgYXRQcmVmaXgubGVuZ3RoIC1cbiAgICAgICAgc3RyaW5nV2lkdGgoYWdlbnROYW1lKSAtXG4gICAgICAgIHNlcGFyYXRvci5sZW5ndGhcbiAgICAgIDogY29sdW1ucyAtIGxheW91dFdpZHRoXG4gICAgY29uc3QgdHJ1bmNhdGVkQ3dkID0gdHJ1bmNhdGVQYXRoKGN3ZCwgTWF0aC5tYXgoY3dkQXZhaWxhYmxlV2lkdGgsIDEwKSlcbiAgICAvLyBPZmZzY3JlZW5GcmVlemU6IGxvZ28gaXMgdGhlIGZpcnN0IHRoaW5nIHRvIGVudGVyIHNjcm9sbGJhY2s7IHVzZU1haW5Mb29wTW9kZWwoKVxuICAgIC8vIHN1YnNjcmliZXMgdG8gbW9kZWwgY2hhbmdlcyBhbmQgZ2V0TG9nb0Rpc3BsYXlEYXRhKCkgcmVhZHMgY3dkL3N1YnNjcmlwdGlvbiDigJRcbiAgICAvLyBhbnkgY2hhbmdlIHdoaWxlIGluIHNjcm9sbGJhY2sgZm9yY2VzIGEgZnVsbCByZXNldC5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE9mZnNjcmVlbkZyZWV6ZT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlPVwicm91bmRcIlxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJjbGF1ZGVcIlxuICAgICAgICAgICAgYm9yZGVyVGV4dD17e1xuICAgICAgICAgICAgICBjb250ZW50OiBjb21wYWN0Qm9yZGVyVGl0bGUsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwYWRkaW5nWD17MX1cbiAgICAgICAgICAgIHBhZGRpbmdZPXsxfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICB3aWR0aD17Y29sdW1uc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBib2xkPnt3ZWxjb21lTWVzc2FnZX08L1RleHQ+XG4gICAgICAgICAgICA8Qm94IG1hcmdpblk9ezF9PlxuICAgICAgICAgICAgICA8Q2xhd2QgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e21vZGVsRGlzcGxheU5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e2JpbGxpbmdUeXBlfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICB7YWdlbnROYW1lID8gYEAke2FnZW50TmFtZX0gwrcgJHt0cnVuY2F0ZWRDd2R9YCA6IHRydW5jYXRlZEN3ZH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9PZmZzY3JlZW5GcmVlemU+XG4gICAgICAgIDxWb2ljZU1vZGVOb3RpY2UgLz5cbiAgICAgICAgPE9wdXMxbU1lcmdlTm90aWNlIC8+XG4gICAgICAgIHtDaGFubmVsc05vdGljZU1vZHVsZSAmJiA8Q2hhbm5lbHNOb3RpY2VNb2R1bGUuQ2hhbm5lbHNOb3RpY2UgLz59XG4gICAgICAgIHtzaG93U2FuZGJveFN0YXR1cyAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICBZb3VyIGJhc2ggY29tbWFuZHMgd2lsbCBiZSBzYW5kYm94ZWQuIERpc2FibGUgd2l0aCAvc2FuZGJveC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgPEdhdGVPdmVycmlkZXNXYXJuaW5nIC8+fVxuICAgICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiA8RXhwZXJpbWVudEVucm9sbG1lbnROb3RpY2UgLz59XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGZvcm1hdFdlbGNvbWVNZXNzYWdlKHVzZXJuYW1lKVxuICBjb25zdCBtb2RlbExpbmUgPVxuICAgICFwcm9jZXNzLmVudi5JU19ERU1PICYmIGNvbmZpZy5vYXV0aEFjY291bnQ/Lm9yZ2FuaXphdGlvbk5hbWVcbiAgICAgID8gYCR7bW9kZWxEaXNwbGF5TmFtZX0gwrcgJHtiaWxsaW5nVHlwZX0gwrcgJHtjb25maWcub2F1dGhBY2NvdW50Lm9yZ2FuaXphdGlvbk5hbWV9YFxuICAgICAgOiBgJHttb2RlbERpc3BsYXlOYW1lfSDCtyAke2JpbGxpbmdUeXBlfWBcbiAgLy8gQ2FsY3VsYXRlIGN3ZCB3aWR0aCBhY2NvdW50aW5nIGZvciBhZ2VudCBuYW1lIGlmIHByZXNlbnRcbiAgY29uc3QgY3dkU2VwYXJhdG9yID0gJyDCtyAnXG4gIGNvbnN0IGN3ZEF0UHJlZml4ID0gJ0AnXG4gIGNvbnN0IGN3ZEF2YWlsYWJsZVdpZHRoID0gYWdlbnROYW1lXG4gICAgPyBMRUZUX1BBTkVMX01BWF9XSURUSCAtXG4gICAgICBjd2RBdFByZWZpeC5sZW5ndGggLVxuICAgICAgc3RyaW5nV2lkdGgoYWdlbnROYW1lKSAtXG4gICAgICBjd2RTZXBhcmF0b3IubGVuZ3RoXG4gICAgOiBMRUZUX1BBTkVMX01BWF9XSURUSFxuICBjb25zdCB0cnVuY2F0ZWRDd2QgPSB0cnVuY2F0ZVBhdGgoY3dkLCBNYXRoLm1heChjd2RBdmFpbGFibGVXaWR0aCwgMTApKVxuICBjb25zdCBjd2RMaW5lID0gYWdlbnROYW1lID8gYEAke2FnZW50TmFtZX0gwrcgJHt0cnVuY2F0ZWRDd2R9YCA6IHRydW5jYXRlZEN3ZFxuICBjb25zdCBvcHRpbWFsTGVmdFdpZHRoID0gY2FsY3VsYXRlT3B0aW1hbExlZnRXaWR0aChcbiAgICB3ZWxjb21lTWVzc2FnZSxcbiAgICBjd2RMaW5lLFxuICAgIG1vZGVsTGluZSxcbiAgKVxuXG4gIC8vIENhbGN1bGF0ZSBsYXlvdXQgZGltZW5zaW9uc1xuICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gY2FsY3VsYXRlTGF5b3V0RGltZW5zaW9ucyhcbiAgICBjb2x1bW5zLFxuICAgIGxheW91dE1vZGUsXG4gICAgb3B0aW1hbExlZnRXaWR0aCxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPZmZzY3JlZW5GcmVlemU+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBib3JkZXJTdHlsZT1cInJvdW5kXCJcbiAgICAgICAgICBib3JkZXJDb2xvcj1cImNsYXVkZVwiXG4gICAgICAgICAgYm9yZGVyVGV4dD17e1xuICAgICAgICAgICAgY29udGVudDogYm9yZGVyVGl0bGUsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgICAgIG9mZnNldDogMyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIE1haW4gY29udGVudCAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtsYXlvdXRNb2RlID09PSAnaG9yaXpvbnRhbCcgPyAncm93JyA6ICdjb2x1bW4nfVxuICAgICAgICAgICAgcGFkZGluZ1g9ezF9XG4gICAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIExlZnQgUGFuZWwgKi99XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICB3aWR0aD17bGVmdFdpZHRofVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgICAgPFRleHQgYm9sZD57d2VsY29tZU1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Q2xhd2QgLz5cblxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e21vZGVsTGluZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e2N3ZExpbmV9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICB7LyogVmVydGljYWwgZGl2aWRlciAqL31cbiAgICAgICAgICAgIHtsYXlvdXRNb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU9XCJzaW5nbGVcIlxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiY2xhdWRlXCJcbiAgICAgICAgICAgICAgICBib3JkZXJEaW1Db2xvclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0PXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiBSaWdodCBQYW5lbCAtIFByb2plY3QgT25ib2FyZGluZyBvciBSZWNlbnQgQWN0aXZpdHkgYW5kIFdoYXQncyBOZXcgKi99XG4gICAgICAgICAgICB7bGF5b3V0TW9kZSA9PT0gJ2hvcml6b250YWwnICYmIChcbiAgICAgICAgICAgICAgPEZlZWRDb2x1bW5cbiAgICAgICAgICAgICAgICBmZWVkcz17XG4gICAgICAgICAgICAgICAgICBzaG93T25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RPbmJvYXJkaW5nRmVlZChnZXRTdGVwcygpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlY2VudEFjdGl2aXR5RmVlZChhY3Rpdml0aWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogc2hvd0d1ZXN0UGFzc2VzVXBzZWxsXG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlY2VudEFjdGl2aXR5RmVlZChhY3Rpdml0aWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlR3Vlc3RQYXNzZXNGZWVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgOiBzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjZW50QWN0aXZpdHlGZWVkKGFjdGl2aXRpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU92ZXJhZ2VDcmVkaXRGZWVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlY2VudEFjdGl2aXR5RmVlZChhY3Rpdml0aWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXaGF0c05ld0ZlZWQoY2hhbmdlbG9nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXhXaWR0aD17cmlnaHRXaWR0aH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9PZmZzY3JlZW5GcmVlemU+XG4gICAgICA8Vm9pY2VNb2RlTm90aWNlIC8+XG4gICAgICA8T3B1czFtTWVyZ2VOb3RpY2UgLz5cbiAgICAgIHtDaGFubmVsc05vdGljZU1vZHVsZSAmJiA8Q2hhbm5lbHNOb3RpY2VNb2R1bGUuQ2hhbm5lbHNOb3RpY2UgLz59XG4gICAgICB7aXNEZWJ1Z01vZGUoKSAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5EZWJ1ZyBtb2RlIGVuYWJsZWQ8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBMb2dnaW5nIHRvOiB7aXNEZWJ1Z1RvU3RkRXJyKCkgPyAnc3RkZXJyJyA6IGdldERlYnVnTG9nUGF0aCgpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPEVtZXJnZW5jeVRpcCAvPlxuICAgICAge3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfU0VTU0lPTiAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIHRtdXggc2Vzc2lvbjoge3Byb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RNVVhfU0VTU0lPTn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVhfQ09ORkxJQ1RTXG4gICAgICAgICAgICAgID8gYERldGFjaDogJHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1BSRUZJWH0gJHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1BSRUZJWH0gZCAocHJlc3MgcHJlZml4IHR3aWNlIC0gQ2xhdWRlIHVzZXMgJHtwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9UTVVYX1BSRUZJWH0pYFxuICAgICAgICAgICAgICA6IGBEZXRhY2g6ICR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVE1VWF9QUkVGSVh9IGRgfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAge2Fubm91bmNlbWVudCAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7IXByb2Nlc3MuZW52LklTX0RFTU8gJiYgY29uZmlnLm9hdXRoQWNjb3VudD8ub3JnYW5pemF0aW9uTmFtZSAmJiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgTWVzc2FnZSBmcm9tIHtjb25maWcub2F1dGhBY2NvdW50Lm9yZ2FuaXphdGlvbk5hbWV9OlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFRleHQ+e2Fubm91bmNlbWVudH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIHtzaG93U2FuZGJveFN0YXR1cyAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIFlvdXIgYmFzaCBjb21tYW5kcyB3aWxsIGJlIHNhbmRib3hlZC4gRGlzYWJsZSB3aXRoIC9zYW5kYm94LlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAge1wiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgIXByb2Nlc3MuZW52LkRFTU9fVkVSU0lPTiAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Vc2UgL2lzc3VlIHRvIHJlcG9ydCBtb2RlbCBiZWhhdmlvciBpc3N1ZXM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIHtcImV4dGVybmFsXCIgPT09ICdhbnQnICYmICFwcm9jZXNzLmVudi5ERU1PX1ZFUlNJT04gJiYgKFxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+W0FOVC1PTkxZXSBMb2dzOjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIEFQSSBjYWxsczoge2dldERpc3BsYXlQYXRoKGdldER1bXBQcm9tcHRzUGF0aCgpKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+RGVidWcgbG9nczoge2dldERpc3BsYXlQYXRoKGdldERlYnVnTG9nUGF0aCgpKX08L1RleHQ+XG4gICAgICAgICAge2lzRGV0YWlsZWRQcm9maWxpbmdFbmFibGVkKCkgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIFN0YXJ0dXAgUGVyZjoge2dldERpc3BsYXlQYXRoKGdldFN0YXJ0dXBQZXJmTG9nUGF0aCgpKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiA8R2F0ZU92ZXJyaWRlc1dhcm5pbmcgLz59XG4gICAgICB7XCJleHRlcm5hbFwiID09PSAnYW50JyAmJiA8RXhwZXJpbWVudEVucm9sbG1lbnROb3RpY2UgLz59XG4gICAgPC8+XG4gIClcbn1cblxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBOb3JtYWxpemVkTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2U6IE5vcm1hbGl6ZWRNZXNzYWdlXG4gIGlzVHJhbnNjcmlwdE1vZGU6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lc3NhZ2VNb2RlbCh7XG4gIG1lc3NhZ2UsXG4gIGlzVHJhbnNjcmlwdE1vZGUsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHNob3VsZFNob3dNb2RlbCA9XG4gICAgaXNUcmFuc2NyaXB0TW9kZSAmJlxuICAgIG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiZcbiAgICBtZXNzYWdlLm1lc3NhZ2UubW9kZWwgJiZcbiAgICBtZXNzYWdlLm1lc3NhZ2UuY29udGVudC5zb21lKGMgPT4gYy50eXBlID09PSAndGV4dCcpXG5cbiAgaWYgKCFzaG91bGRTaG93TW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1pbldpZHRoPXtzdHJpbmdXaWR0aChtZXNzYWdlLm1lc3NhZ2UubW9kZWwpICsgOH0+XG4gICAgICA8VGV4dCBkaW1Db2xvcj57bWVzc2FnZS5tZXNzYWdlLm1vZGVsfTwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBOb3JtYWxpemVkTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2U6IE5vcm1hbGl6ZWRNZXNzYWdlXG4gIGlzVHJhbnNjcmlwdE1vZGU6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lc3NhZ2VUaW1lc3RhbXAoe1xuICBtZXNzYWdlLFxuICBpc1RyYW5zY3JpcHRNb2RlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzaG91bGRTaG93VGltZXN0YW1wID1cbiAgICBpc1RyYW5zY3JpcHRNb2RlICYmXG4gICAgbWVzc2FnZS50aW1lc3RhbXAgJiZcbiAgICBtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmXG4gICAgbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQuc29tZShjID0+IGMudHlwZSA9PT0gJ3RleHQnKVxuXG4gIGlmICghc2hvdWxkU2hvd1RpbWVzdGFtcCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZWRUaW1lc3RhbXAgPSBuZXcgRGF0ZShtZXNzYWdlLnRpbWVzdGFtcCkudG9Mb2NhbGVUaW1lU3RyaW5nKFxuICAgICdlbi1VUycsXG4gICAge1xuICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICBob3VyMTI6IHRydWUsXG4gICAgfSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtaW5XaWR0aD17c3RyaW5nV2lkdGgoZm9ybWF0dGVkVGltZXN0YW1wKX0+XG4gICAgICA8VGV4dCBkaW1Db2xvcj57Zm9ybWF0dGVkVGltZXN0YW1wfTwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFNjcmVlbiB9IGZyb20gJy4uL3NjcmVlbnMvUkVQTC5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBSZW5kZXJhYmxlTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQge1xuICBnZXREaXNwbGF5TWVzc2FnZUZyb21Db2xsYXBzZWQsXG4gIGdldFRvb2xTZWFyY2hPclJlYWRJbmZvLFxuICBnZXRUb29sVXNlSWRzRnJvbUNvbGxhcHNlZEdyb3VwLFxuICBoYXNBbnlUb29sSW5Qcm9ncmVzcyxcbn0gZnJvbSAnLi4vdXRpbHMvY29sbGFwc2VSZWFkU2VhcmNoLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBidWlsZE1lc3NhZ2VMb29rdXBzLFxuICBFTVBUWV9TVFJJTkdfU0VULFxuICBnZXRQcm9ncmVzc01lc3NhZ2VzRnJvbUxvb2t1cCxcbiAgZ2V0U2libGluZ1Rvb2xVc2VJRHNGcm9tTG9va3VwLFxuICBnZXRUb29sVXNlSUQsXG59IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgaGFzVGhpbmtpbmdDb250ZW50LCBNZXNzYWdlIH0gZnJvbSAnLi9NZXNzYWdlLmpzJ1xuaW1wb3J0IHsgTWVzc2FnZU1vZGVsIH0gZnJvbSAnLi9NZXNzYWdlTW9kZWwuanMnXG5pbXBvcnQgeyBzaG91bGRSZW5kZXJTdGF0aWNhbGx5IH0gZnJvbSAnLi9NZXNzYWdlcy5qcydcbmltcG9ydCB7IE1lc3NhZ2VUaW1lc3RhbXAgfSBmcm9tICcuL01lc3NhZ2VUaW1lc3RhbXAuanMnXG5pbXBvcnQgeyBPZmZzY3JlZW5GcmVlemUgfSBmcm9tICcuL09mZnNjcmVlbkZyZWV6ZS5qcydcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2U6IFJlbmRlcmFibGVNZXNzYWdlXG4gIC8qKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBtZXNzYWdlIGluIHJlbmRlcmFibGVNZXNzYWdlcyBpcyBhbHNvIGEgdXNlciBtZXNzYWdlLiAqL1xuICBpc1VzZXJDb250aW51YXRpb246IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgaXMgbm9uLXNraXBwYWJsZSBjb250ZW50IGFmdGVyIHRoaXMgbWVzc2FnZSBpbiByZW5kZXJhYmxlTWVzc2FnZXMuXG4gICAqIE9ubHkgbmVlZHMgdG8gYmUgYWNjdXJhdGUgZm9yIGBjb2xsYXBzZWRfcmVhZF9zZWFyY2hgIG1lc3NhZ2VzIOKAlCB1c2VkIHRvIGRlY2lkZVxuICAgKiBpZiB0aGUgY29sbGFwc2VkIGdyb3VwIHNwaW5uZXIgc2hvdWxkIHN0YXkgYWN0aXZlLiBQYXNzIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgaGFzQ29udGVudEFmdGVyOiBib29sZWFuXG4gIHRvb2xzOiBUb29sc1xuICBjb21tYW5kczogQ29tbWFuZFtdXG4gIHZlcmJvc2U6IGJvb2xlYW5cbiAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHM6IFNldDxzdHJpbmc+XG4gIHN0cmVhbWluZ1Rvb2xVc2VJRHM6IFNldDxzdHJpbmc+XG4gIHNjcmVlbjogU2NyZWVuXG4gIGNhbkFuaW1hdGU6IGJvb2xlYW5cbiAgb25PcGVuUmF0ZUxpbWl0T3B0aW9ucz86ICgpID0+IHZvaWRcbiAgbGFzdFRoaW5raW5nQmxvY2tJZDogc3RyaW5nIHwgbnVsbFxuICBsYXRlc3RCYXNoT3V0cHV0VVVJRDogc3RyaW5nIHwgbnVsbFxuICBjb2x1bW5zOiBudW1iZXJcbiAgaXNMb2FkaW5nOiBib29sZWFuXG4gIGxvb2t1cHM6IFJldHVyblR5cGU8dHlwZW9mIGJ1aWxkTWVzc2FnZUxvb2t1cHM+XG59XG5cbi8qKlxuICogU2NhbnMgZm9yd2FyZCBmcm9tIGBpbmRleCsxYCB0byBjaGVjayBpZiBhbnkgXCJyZWFsXCIgY29udGVudCBmb2xsb3dzLiBVc2VkIHRvXG4gKiBkZWNpZGUgd2hldGhlciBhIGNvbGxhcHNlZCByZWFkL3NlYXJjaCBncm91cCBzaG91bGQgc3RheSBpbiBpdHMgYWN0aXZlXG4gKiAoZ3JleSBkb3QsIHByZXNlbnQtdGVuc2UgXCJSZWFkaW5n4oCmXCIpIHN0YXRlIHdoaWxlIHRoZSBxdWVyeSBpcyBzdGlsbCBsb2FkaW5nLlxuICpcbiAqIEV4cG9ydGVkIHNvIE1lc3NhZ2VzLnRzeCBjYW4gY29tcHV0ZSB0aGlzIG9uY2UgcGVyIG1lc3NhZ2UgYW5kIHBhc3MgdGhlXG4gKiByZXN1bHQgYXMgYSBib29sZWFuIHByb3Ag4oCUIGF2b2lkcyBwYXNzaW5nIHRoZSBmdWxsIGByZW5kZXJhYmxlTWVzc2FnZXNgIGFycmF5XG4gKiB0byBlYWNoIE1lc3NhZ2VSb3cgKHdoaWNoIFJlYWN0IENvbXBpbGVyIHdvdWxkIHBpbiBpbiB0aGUgZmliZXIncyBtZW1vQ2FjaGUsXG4gKiBhY2N1bXVsYXRpbmcgZXZlcnkgaGlzdG9yaWNhbCB2ZXJzaW9uIG9mIHRoZSBhcnJheSDiiYggMS0yTUIgb3ZlciBhIDctdHVybiBzZXNzaW9uKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbnRlbnRBZnRlckluZGV4KFxuICBtZXNzYWdlczogUmVuZGVyYWJsZU1lc3NhZ2VbXSxcbiAgaW5kZXg6IG51bWJlcixcbiAgdG9vbHM6IFRvb2xzLFxuICBzdHJlYW1pbmdUb29sVXNlSURzOiBTZXQ8c3RyaW5nPixcbik6IGJvb2xlYW4ge1xuICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgbWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tpXVxuICAgIGlmIChtc2c/LnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICAgICAgaWYgKFxuICAgICAgICBjb250ZW50Py50eXBlID09PSAndGhpbmtpbmcnIHx8XG4gICAgICAgIGNvbnRlbnQ/LnR5cGUgPT09ICdyZWRhY3RlZF90aGlua2luZydcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnQ/LnR5cGUgPT09ICd0b29sX3VzZScpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldFRvb2xTZWFyY2hPclJlYWRJbmZvKGNvbnRlbnQubmFtZSwgY29udGVudC5pbnB1dCwgdG9vbHMpXG4gICAgICAgICAgICAuaXNDb2xsYXBzaWJsZVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIC8vIE5vbi1jb2xsYXBzaWJsZSB0b29sIHVzZXMgYXBwZWFyIGluIHN5bnRoZXRpY1N0cmVhbWluZ1Rvb2xVc2VNZXNzYWdlc1xuICAgICAgICAvLyBiZWZvcmUgdGhlaXIgSUQgaXMgYWRkZWQgdG8gaW5Qcm9ncmVzc1Rvb2xVc2VJRHMuIFNraXAgd2hpbGUgc3RyZWFtaW5nXG4gICAgICAgIC8vIHRvIGF2b2lkIGJyaWVmbHkgZmluYWxpemluZyB0aGUgcmVhZCBncm91cC5cbiAgICAgICAgaWYgKHN0cmVhbWluZ1Rvb2xVc2VJRHMuaGFzKGNvbnRlbnQuaWQpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKG1zZz8udHlwZSA9PT0gJ3N5c3RlbScgfHwgbXNnPy50eXBlID09PSAnYXR0YWNobWVudCcpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIC8vIFRvb2wgcmVzdWx0cyBhcnJpdmUgd2hpbGUgdGhlIGNvbGxhcHNlZCBncm91cCBpcyBzdGlsbCBiZWluZyBidWlsdFxuICAgIGlmIChtc2c/LnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgIGlmIChjb250ZW50Py50eXBlID09PSAndG9vbF9yZXN1bHQnKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIENvbGxhcHNpYmxlIGdyb3VwZWRfdG9vbF91c2UgbWVzc2FnZXMgYXJyaXZlIHRyYW5zaWVudGx5IGJlZm9yZSBiZWluZ1xuICAgIC8vIG1lcmdlZCBpbnRvIHRoZSBjdXJyZW50IGNvbGxhcHNlZCBncm91cCBvbiB0aGUgbmV4dCByZW5kZXIgY3ljbGVcbiAgICBpZiAobXNnPy50eXBlID09PSAnZ3JvdXBlZF90b29sX3VzZScpIHtcbiAgICAgIGNvbnN0IGZpcnN0SW5wdXQgPSBtc2cubWVzc2FnZXNbMF0/Lm1lc3NhZ2UuY29udGVudFswXT8uaW5wdXRcbiAgICAgIGlmIChcbiAgICAgICAgZ2V0VG9vbFNlYXJjaE9yUmVhZEluZm8obXNnLnRvb2xOYW1lLCBmaXJzdElucHV0LCB0b29scykuaXNDb2xsYXBzaWJsZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VSb3dJbXBsKHtcbiAgbWVzc2FnZTogbXNnLFxuICBpc1VzZXJDb250aW51YXRpb24sXG4gIGhhc0NvbnRlbnRBZnRlcixcbiAgdG9vbHMsXG4gIGNvbW1hbmRzLFxuICB2ZXJib3NlLFxuICBpblByb2dyZXNzVG9vbFVzZUlEcyxcbiAgc3RyZWFtaW5nVG9vbFVzZUlEcyxcbiAgc2NyZWVuLFxuICBjYW5BbmltYXRlLFxuICBvbk9wZW5SYXRlTGltaXRPcHRpb25zLFxuICBsYXN0VGhpbmtpbmdCbG9ja0lkLFxuICBsYXRlc3RCYXNoT3V0cHV0VVVJRCxcbiAgY29sdW1ucyxcbiAgaXNMb2FkaW5nLFxuICBsb29rdXBzLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBpc1RyYW5zY3JpcHRNb2RlID0gc2NyZWVuID09PSAndHJhbnNjcmlwdCdcbiAgY29uc3QgaXNHcm91cGVkID0gbXNnLnR5cGUgPT09ICdncm91cGVkX3Rvb2xfdXNlJ1xuICBjb25zdCBpc0NvbGxhcHNlZCA9IG1zZy50eXBlID09PSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJ1xuXG4gIC8vIEEgY29sbGFwc2VkIGdyb3VwIGlzIFwiYWN0aXZlXCIgKGdyZXkgZG90LCBwcmVzZW50IHRlbnNlIFwiUmVhZGluZ+KAplwiKSB3aGVuIGl0cyB0b29sc1xuICAvLyBhcmUgc3RpbGwgZXhlY3V0aW5nIE9SIHdoZW4gdGhlIG92ZXJhbGwgcXVlcnkgaXMgc3RpbGwgcnVubmluZyB3aXRoIG5vdGhpbmcgYWZ0ZXIgaXQuXG4gIC8vIGhhc0FueVRvb2xJblByb2dyZXNzIHRha2VzIHByaW9yaXR5OiBpZiB0b29scyBhcmUgcnVubmluZywgYWx3YXlzIHNob3cgYWN0aXZlIHJlZ2FyZGxlc3NcbiAgLy8gb2Ygd2hhdCBlbHNlIGlzIGluIHRoZSBtZXNzYWdlIGxpc3QgKGF2b2lkcyBmYWxzZSBmaW5hbGl6YXRpb24gZHVyaW5nIHBhcmFsbGVsIGV4ZWN1dGlvbikuXG4gIGNvbnN0IGlzQWN0aXZlQ29sbGFwc2VkR3JvdXAgPVxuICAgIGlzQ29sbGFwc2VkICYmXG4gICAgKGhhc0FueVRvb2xJblByb2dyZXNzKG1zZywgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMpIHx8XG4gICAgICAoaXNMb2FkaW5nICYmICFoYXNDb250ZW50QWZ0ZXIpKVxuXG4gIGNvbnN0IGRpc3BsYXlNc2cgPSBpc0dyb3VwZWRcbiAgICA/IG1zZy5kaXNwbGF5TWVzc2FnZVxuICAgIDogaXNDb2xsYXBzZWRcbiAgICAgID8gZ2V0RGlzcGxheU1lc3NhZ2VGcm9tQ29sbGFwc2VkKG1zZylcbiAgICAgIDogbXNnXG5cbiAgY29uc3QgcHJvZ3Jlc3NNZXNzYWdlc0Zvck1lc3NhZ2UgPVxuICAgIGlzR3JvdXBlZCB8fCBpc0NvbGxhcHNlZCA/IFtdIDogZ2V0UHJvZ3Jlc3NNZXNzYWdlc0Zyb21Mb29rdXAobXNnLCBsb29rdXBzKVxuXG4gIGNvbnN0IHNpYmxpbmdUb29sVXNlSURzID1cbiAgICBpc0dyb3VwZWQgfHwgaXNDb2xsYXBzZWRcbiAgICAgID8gRU1QVFlfU1RSSU5HX1NFVFxuICAgICAgOiBnZXRTaWJsaW5nVG9vbFVzZUlEc0Zyb21Mb29rdXAobXNnLCBsb29rdXBzKVxuXG4gIGNvbnN0IGlzU3RhdGljID0gc2hvdWxkUmVuZGVyU3RhdGljYWxseShcbiAgICBtc2csXG4gICAgc3RyZWFtaW5nVG9vbFVzZUlEcyxcbiAgICBpblByb2dyZXNzVG9vbFVzZUlEcyxcbiAgICBzaWJsaW5nVG9vbFVzZUlEcyxcbiAgICBzY3JlZW4sXG4gICAgbG9va3VwcyxcbiAgKVxuXG4gIGxldCBzaG91bGRBbmltYXRlID0gZmFsc2VcbiAgaWYgKGNhbkFuaW1hdGUpIHtcbiAgICBpZiAoaXNHcm91cGVkKSB7XG4gICAgICBzaG91bGRBbmltYXRlID0gbXNnLm1lc3NhZ2VzLnNvbWUobSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtLm1lc3NhZ2UuY29udGVudFswXVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbnRlbnQ/LnR5cGUgPT09ICd0b29sX3VzZScgJiYgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMuaGFzKGNvbnRlbnQuaWQpXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0NvbGxhcHNlZCkge1xuICAgICAgc2hvdWxkQW5pbWF0ZSA9IGhhc0FueVRvb2xJblByb2dyZXNzKG1zZywgaW5Qcm9ncmVzc1Rvb2xVc2VJRHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvb2xVc2VJRCA9IGdldFRvb2xVc2VJRChtc2cpXG4gICAgICBzaG91bGRBbmltYXRlID0gIXRvb2xVc2VJRCB8fCBpblByb2dyZXNzVG9vbFVzZUlEcy5oYXModG9vbFVzZUlEKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc01ldGFkYXRhID1cbiAgICBpc1RyYW5zY3JpcHRNb2RlICYmXG4gICAgZGlzcGxheU1zZy50eXBlID09PSAnYXNzaXN0YW50JyAmJlxuICAgIGRpc3BsYXlNc2cubWVzc2FnZS5jb250ZW50LnNvbWUoYyA9PiBjLnR5cGUgPT09ICd0ZXh0JykgJiZcbiAgICAoZGlzcGxheU1zZy50aW1lc3RhbXAgfHwgZGlzcGxheU1zZy5tZXNzYWdlLm1vZGVsKVxuXG4gIGNvbnN0IG1lc3NhZ2VFbCA9IChcbiAgICA8TWVzc2FnZVxuICAgICAgbWVzc2FnZT17bXNnfVxuICAgICAgbG9va3Vwcz17bG9va3Vwc31cbiAgICAgIGFkZE1hcmdpbj17IWhhc01ldGFkYXRhfVxuICAgICAgY29udGFpbmVyV2lkdGg9e2hhc01ldGFkYXRhID8gdW5kZWZpbmVkIDogY29sdW1uc31cbiAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgIGNvbW1hbmRzPXtjb21tYW5kc31cbiAgICAgIHZlcmJvc2U9e3ZlcmJvc2V9XG4gICAgICBpblByb2dyZXNzVG9vbFVzZUlEcz17aW5Qcm9ncmVzc1Rvb2xVc2VJRHN9XG4gICAgICBwcm9ncmVzc01lc3NhZ2VzRm9yTWVzc2FnZT17cHJvZ3Jlc3NNZXNzYWdlc0Zvck1lc3NhZ2V9XG4gICAgICBzaG91bGRBbmltYXRlPXtzaG91bGRBbmltYXRlfVxuICAgICAgc2hvdWxkU2hvd0RvdD17dHJ1ZX1cbiAgICAgIGlzVHJhbnNjcmlwdE1vZGU9e2lzVHJhbnNjcmlwdE1vZGV9XG4gICAgICBpc1N0YXRpYz17aXNTdGF0aWN9XG4gICAgICBvbk9wZW5SYXRlTGltaXRPcHRpb25zPXtvbk9wZW5SYXRlTGltaXRPcHRpb25zfVxuICAgICAgaXNBY3RpdmVDb2xsYXBzZWRHcm91cD17aXNBY3RpdmVDb2xsYXBzZWRHcm91cH1cbiAgICAgIGlzVXNlckNvbnRpbnVhdGlvbj17aXNVc2VyQ29udGludWF0aW9ufVxuICAgICAgbGFzdFRoaW5raW5nQmxvY2tJZD17bGFzdFRoaW5raW5nQmxvY2tJZH1cbiAgICAgIGxhdGVzdEJhc2hPdXRwdXRVVUlEPXtsYXRlc3RCYXNoT3V0cHV0VVVJRH1cbiAgICAvPlxuICApXG4gIC8vIE9mZnNjcmVlbkZyZWV6ZTogdGhlIG91dGVyIFJlYWN0Lm1lbW8gYWxyZWFkeSBiYWlscyBmb3Igc3RhdGljIG1lc3NhZ2VzLFxuICAvLyBzbyB0aGlzIG9ubHkgd3JhcHMgcm93cyB0aGF0IERPIHJlLXJlbmRlciDigJQgaW4tcHJvZ3Jlc3MgdG9vbHMsIGNvbGxhcHNlZFxuICAvLyByZWFkL3NlYXJjaCBzcGlubmVycywgYmFzaCBlbGFwc2VkIHRpbWVycy4gV2hlbiB0aG9zZSByb3dzIGhhdmUgc2Nyb2xsZWRcbiAgLy8gaW50byB0ZXJtaW5hbCBzY3JvbGxiYWNrIChub24tZnVsbHNjcmVlbiBleHRlcm5hbCBidWlsZHMpLCBhbnkgY29udGVudFxuICAvLyBjaGFuZ2UgZm9yY2VzIGxvZy11cGRhdGUudHMgaW50byBhIGZ1bGwgdGVybWluYWwgcmVzZXQgcGVyIHRpY2suIEZyZWV6aW5nXG4gIC8vIHJldHVybnMgdGhlIGNhY2hlZCBlbGVtZW50IHJlZiBzbyBSZWFjdCBiYWlscyBhbmQgcHJvZHVjZXMgemVybyBkaWZmLlxuICBpZiAoIWhhc01ldGFkYXRhKSB7XG4gICAgcmV0dXJuIDxPZmZzY3JlZW5GcmVlemU+e21lc3NhZ2VFbH08L09mZnNjcmVlbkZyZWV6ZT5cbiAgfVxuICAvLyBNYXJnaW4gb24gY2hpbGRyZW4sIG5vdCBoZXJlIOKAlCBlbHNlIG51bGwgaXRlbXMgKGhvb2tfc3VjY2VzcyBldGMuKSBnZXQgcGhhbnRvbSAxLXJvdyBzcGFjaW5nLlxuICByZXR1cm4gKFxuICAgIDxPZmZzY3JlZW5GcmVlemU+XG4gICAgICA8Qm94IHdpZHRoPXtjb2x1bW5zfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgbWFyZ2luVG9wPXsxfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VUaW1lc3RhbXBcbiAgICAgICAgICAgIG1lc3NhZ2U9e2Rpc3BsYXlNc2d9XG4gICAgICAgICAgICBpc1RyYW5zY3JpcHRNb2RlPXtpc1RyYW5zY3JpcHRNb2RlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lc3NhZ2VNb2RlbFxuICAgICAgICAgICAgbWVzc2FnZT17ZGlzcGxheU1zZ31cbiAgICAgICAgICAgIGlzVHJhbnNjcmlwdE1vZGU9e2lzVHJhbnNjcmlwdE1vZGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHttZXNzYWdlRWx9XG4gICAgICA8L0JveD5cbiAgICA8L09mZnNjcmVlbkZyZWV6ZT5cbiAgKVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1lc3NhZ2UgaXMgXCJzdHJlYW1pbmdcIiAtIGkuZS4sIGl0cyBjb250ZW50IG1heSBzdGlsbCBiZSBjaGFuZ2luZy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlU3RyZWFtaW5nKFxuICBtc2c6IFJlbmRlcmFibGVNZXNzYWdlLFxuICBzdHJlYW1pbmdUb29sVXNlSURzOiBTZXQ8c3RyaW5nPixcbik6IGJvb2xlYW4ge1xuICBpZiAobXNnLnR5cGUgPT09ICdncm91cGVkX3Rvb2xfdXNlJykge1xuICAgIHJldHVybiBtc2cubWVzc2FnZXMuc29tZShtID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtLm1lc3NhZ2UuY29udGVudFswXVxuICAgICAgcmV0dXJuIGNvbnRlbnQ/LnR5cGUgPT09ICd0b29sX3VzZScgJiYgc3RyZWFtaW5nVG9vbFVzZUlEcy5oYXMoY29udGVudC5pZClcbiAgICB9KVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCcpIHtcbiAgICBjb25zdCB0b29sSWRzID0gZ2V0VG9vbFVzZUlkc0Zyb21Db2xsYXBzZWRHcm91cChtc2cpXG4gICAgcmV0dXJuIHRvb2xJZHMuc29tZShpZCA9PiBzdHJlYW1pbmdUb29sVXNlSURzLmhhcyhpZCkpXG4gIH1cbiAgY29uc3QgdG9vbFVzZUlEID0gZ2V0VG9vbFVzZUlEKG1zZylcbiAgcmV0dXJuICEhdG9vbFVzZUlEICYmIHN0cmVhbWluZ1Rvb2xVc2VJRHMuaGFzKHRvb2xVc2VJRClcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYWxsIHRvb2xzIGluIGEgbWVzc2FnZSBhcmUgcmVzb2x2ZWQuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbFRvb2xzUmVzb2x2ZWQoXG4gIG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsXG4gIHJlc29sdmVkVG9vbFVzZUlEczogU2V0PHN0cmluZz4sXG4pOiBib29sZWFuIHtcbiAgaWYgKG1zZy50eXBlID09PSAnZ3JvdXBlZF90b29sX3VzZScpIHtcbiAgICByZXR1cm4gbXNnLm1lc3NhZ2VzLmV2ZXJ5KG0gPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG0ubWVzc2FnZS5jb250ZW50WzBdXG4gICAgICByZXR1cm4gY29udGVudD8udHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJiByZXNvbHZlZFRvb2xVc2VJRHMuaGFzKGNvbnRlbnQuaWQpXG4gICAgfSlcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09ICdjb2xsYXBzZWRfcmVhZF9zZWFyY2gnKSB7XG4gICAgY29uc3QgdG9vbElkcyA9IGdldFRvb2xVc2VJZHNGcm9tQ29sbGFwc2VkR3JvdXAobXNnKVxuICAgIHJldHVybiB0b29sSWRzLmV2ZXJ5KGlkID0+IHJlc29sdmVkVG9vbFVzZUlEcy5oYXMoaWQpKVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICBjb25zdCBibG9jayA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICBpZiAoYmxvY2s/LnR5cGUgPT09ICdzZXJ2ZXJfdG9vbF91c2UnKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRUb29sVXNlSURzLmhhcyhibG9jay5pZClcbiAgICB9XG4gIH1cbiAgY29uc3QgdG9vbFVzZUlEID0gZ2V0VG9vbFVzZUlEKG1zZylcbiAgcmV0dXJuICF0b29sVXNlSUQgfHwgcmVzb2x2ZWRUb29sVXNlSURzLmhhcyh0b29sVXNlSUQpXG59XG5cbi8qKlxuICogQ29uc2VydmF0aXZlIG1lbW8gY29tcGFyYXRvciB0aGF0IG9ubHkgYmFpbHMgb3V0IHdoZW4gd2UncmUgQ0VSVEFJTlxuICogdGhlIG1lc3NhZ2Ugd29uJ3QgY2hhbmdlLiBGYWlscyBzYWZlIGJ5IHJlLXJlbmRlcmluZyB3aGVuIHVuY2VydGFpbi5cbiAqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZU1lc3NhZ2VSb3dQcm9wc0VxdWFsKHByZXY6IFByb3BzLCBuZXh0OiBQcm9wcyk6IGJvb2xlYW4ge1xuICAvLyBEaWZmZXJlbnQgbWVzc2FnZSByZWZlcmVuY2UgPSBjb250ZW50IG1heSBoYXZlIGNoYW5nZWQsIG11c3QgcmUtcmVuZGVyXG4gIGlmIChwcmV2Lm1lc3NhZ2UgIT09IG5leHQubWVzc2FnZSkgcmV0dXJuIGZhbHNlXG5cbiAgLy8gU2NyZWVuIG1vZGUgY2hhbmdlID0gcmUtcmVuZGVyXG4gIGlmIChwcmV2LnNjcmVlbiAhPT0gbmV4dC5zY3JlZW4pIHJldHVybiBmYWxzZVxuXG4gIC8vIFZlcmJvc2UgdG9nZ2xlIGNoYW5nZXMgdGhpbmtpbmcgYmxvY2sgdmlzaWJpbGl0eVxuICBpZiAocHJldi52ZXJib3NlICE9PSBuZXh0LnZlcmJvc2UpIHJldHVybiBmYWxzZVxuXG4gIC8vIGNvbGxhcHNlZF9yZWFkX3NlYXJjaCBpcyBuZXZlciBzdGF0aWMgaW4gcHJvbXB0IG1vZGUgKG1hdGNoZXMgc2hvdWxkUmVuZGVyU3RhdGljYWxseSlcbiAgaWYgKFxuICAgIHByZXYubWVzc2FnZS50eXBlID09PSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJyAmJlxuICAgIG5leHQuc2NyZWVuICE9PSAndHJhbnNjcmlwdCdcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBXaWR0aCBjaGFuZ2UgYWZmZWN0cyBCb3ggbGF5b3V0XG4gIGlmIChwcmV2LmNvbHVtbnMgIT09IG5leHQuY29sdW1ucykgcmV0dXJuIGZhbHNlXG5cbiAgLy8gbGF0ZXN0QmFzaE91dHB1dFVVSUQgYWZmZWN0cyByZW5kZXJpbmcgKGZ1bGwgdnMgdHJ1bmNhdGVkIG91dHB1dClcbiAgY29uc3QgcHJldklzTGF0ZXN0QmFzaCA9IHByZXYubGF0ZXN0QmFzaE91dHB1dFVVSUQgPT09IHByZXYubWVzc2FnZS51dWlkXG4gIGNvbnN0IG5leHRJc0xhdGVzdEJhc2ggPSBuZXh0LmxhdGVzdEJhc2hPdXRwdXRVVUlEID09PSBuZXh0Lm1lc3NhZ2UudXVpZFxuICBpZiAocHJldklzTGF0ZXN0QmFzaCAhPT0gbmV4dElzTGF0ZXN0QmFzaCkgcmV0dXJuIGZhbHNlXG5cbiAgLy8gbGFzdFRoaW5raW5nQmxvY2tJZCBhZmZlY3RzIHRoaW5raW5nIGJsb2NrIHZpc2liaWxpdHkg4oCUIGJ1dCBvbmx5IGZvclxuICAvLyBtZXNzYWdlcyB0aGF0IEhBVkUgdGhpbmtpbmcgY29udGVudC4gQ2hlY2tpbmcgdW5jb25kaXRpb25hbGx5IGJ1c3RzIHRoZVxuICAvLyBtZW1vIGZvciBldmVyeSBzY3JvbGxiYWNrIG1lc3NhZ2Ugd2hlbmV2ZXIgdGhpbmtpbmcgc3RhcnRzL3N0b3BzIChDQy05NDEpLlxuICBpZiAoXG4gICAgcHJldi5sYXN0VGhpbmtpbmdCbG9ja0lkICE9PSBuZXh0Lmxhc3RUaGlua2luZ0Jsb2NrSWQgJiZcbiAgICBoYXNUaGlua2luZ0NvbnRlbnQobmV4dC5tZXNzYWdlKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoaXMgbWVzc2FnZSBpcyBzdGlsbCBcImluIGZsaWdodFwiXG4gIGNvbnN0IGlzU3RyZWFtaW5nID0gaXNNZXNzYWdlU3RyZWFtaW5nKHByZXYubWVzc2FnZSwgcHJldi5zdHJlYW1pbmdUb29sVXNlSURzKVxuICBjb25zdCBpc1Jlc29sdmVkID0gYWxsVG9vbHNSZXNvbHZlZChcbiAgICBwcmV2Lm1lc3NhZ2UsXG4gICAgcHJldi5sb29rdXBzLnJlc29sdmVkVG9vbFVzZUlEcyxcbiAgKVxuXG4gIC8vIE9ubHkgYmFpbCBvdXQgZm9yIHRydWx5IHN0YXRpYyBtZXNzYWdlc1xuICBpZiAoaXNTdHJlYW1pbmcgfHwgIWlzUmVzb2x2ZWQpIHJldHVybiBmYWxzZVxuXG4gIC8vIFN0YXRpYyBtZXNzYWdlIC0gc2FmZSB0byBza2lwIHJlLXJlbmRlclxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgTWVzc2FnZVJvdyA9IFJlYWN0Lm1lbW8oTWVzc2FnZVJvd0ltcGwsIGFyZU1lc3NhZ2VSb3dQcm9wc0VxdWFsKVxuIiwgIi8vIGJpb21lLWlnbm9yZS1hbGwgYXNzaXN0L3NvdXJjZS9vcmdhbml6ZUltcG9ydHM6IEFOVC1PTkxZIGltcG9ydCBtYXJrZXJzIG11c3Qgbm90IGJlIHJlb3JkZXJlZFxuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBnZXRMYXJnZU1lbW9yeUZpbGVzLFxuICBNQVhfTUVNT1JZX0NIQVJBQ1RFUl9DT1VOVCxcbiAgdHlwZSBNZW1vcnlGaWxlSW5mbyxcbn0gZnJvbSAnLi9jbGF1ZGVtZC5qcydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuL2N3ZC5qcydcbmltcG9ydCB7IHJlbGF0aXZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJy4vZm9ybWF0LmpzJ1xuaW1wb3J0IHR5cGUgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGdldEFudGhyb3BpY0FwaUtleVdpdGhTb3VyY2UsXG4gIGdldEFwaUtleUZyb21Db25maWdPck1hY09TS2V5Y2hhaW4sXG4gIGdldEF1dGhUb2tlblNvdXJjZSxcbiAgaXNDbGF1ZGVBSVN1YnNjcmliZXIsXG59IGZyb20gJy4vYXV0aC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uc1Jlc3VsdCB9IGZyb20gJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0QWdlbnREZXNjcmlwdGlvbnNUb3RhbFRva2VucyxcbiAgQUdFTlRfREVTQ1JJUFRJT05TX1RIUkVTSE9MRCxcbn0gZnJvbSAnLi9zdGF0dXNOb3RpY2VIZWxwZXJzLmpzJ1xuaW1wb3J0IHtcbiAgaXNTdXBwb3J0ZWRKZXRCcmFpbnNUZXJtaW5hbCxcbiAgdG9JREVEaXNwbGF5TmFtZSxcbiAgZ2V0VGVybWluYWxJZGVUeXBlLFxufSBmcm9tICcuL2lkZS5qcydcbmltcG9ydCB7IGlzSmV0QnJhaW5zUGx1Z2luSW5zdGFsbGVkQ2FjaGVkU3luYyB9IGZyb20gJy4vamV0YnJhaW5zLmpzJ1xuXG4vLyBUeXBlc1xuZXhwb3J0IHR5cGUgU3RhdHVzTm90aWNlVHlwZSA9ICd3YXJuaW5nJyB8ICdpbmZvJ1xuXG5leHBvcnQgdHlwZSBTdGF0dXNOb3RpY2VDb250ZXh0ID0ge1xuICBjb25maWc6IFJldHVyblR5cGU8dHlwZW9mIGdldEdsb2JhbENvbmZpZz5cbiAgYWdlbnREZWZpbml0aW9ucz86IEFnZW50RGVmaW5pdGlvbnNSZXN1bHRcbiAgbWVtb3J5RmlsZXM6IE1lbW9yeUZpbGVJbmZvW11cbn1cblxuZXhwb3J0IHR5cGUgU3RhdHVzTm90aWNlRGVmaW5pdGlvbiA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0eXBlOiBTdGF0dXNOb3RpY2VUeXBlXG4gIGlzQWN0aXZlOiAoY29udGV4dDogU3RhdHVzTm90aWNlQ29udGV4dCkgPT4gYm9vbGVhblxuICByZW5kZXI6IChjb250ZXh0OiBTdGF0dXNOb3RpY2VDb250ZXh0KSA9PiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLy8gSW5kaXZpZHVhbCBub3RpY2UgZGVmaW5pdGlvbnNcbmNvbnN0IGxhcmdlTWVtb3J5RmlsZXNOb3RpY2U6IFN0YXR1c05vdGljZURlZmluaXRpb24gPSB7XG4gIGlkOiAnbGFyZ2UtbWVtb3J5LWZpbGVzJyxcbiAgdHlwZTogJ3dhcm5pbmcnLFxuICBpc0FjdGl2ZTogY3R4ID0+IGdldExhcmdlTWVtb3J5RmlsZXMoY3R4Lm1lbW9yeUZpbGVzKS5sZW5ndGggPiAwLFxuICByZW5kZXI6IGN0eCA9PiB7XG4gICAgY29uc3QgbGFyZ2VNZW1vcnlGaWxlcyA9IGdldExhcmdlTWVtb3J5RmlsZXMoY3R4Lm1lbW9yeUZpbGVzKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7bGFyZ2VNZW1vcnlGaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlzcGxheVBhdGggPSBmaWxlLnBhdGguc3RhcnRzV2l0aChnZXRDd2QoKSlcbiAgICAgICAgICAgID8gcmVsYXRpdmUoZ2V0Q3dkKCksIGZpbGUucGF0aClcbiAgICAgICAgICAgIDogZmlsZS5wYXRoXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJveCBrZXk9e2ZpbGUucGF0aH0gZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj57ZmlndXJlcy53YXJuaW5nfTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgTGFyZ2UgPFRleHQgYm9sZD57ZGlzcGxheVBhdGh9PC9UZXh0PiB3aWxsIGltcGFjdCBwZXJmb3JtYW5jZSAoXG4gICAgICAgICAgICAgICAge2Zvcm1hdE51bWJlcihmaWxlLmNvbnRlbnQubGVuZ3RoKX0gY2hhcnMgJmd0O3snICd9XG4gICAgICAgICAgICAgICAge2Zvcm1hdE51bWJlcihNQVhfTUVNT1JZX0NIQVJBQ1RFUl9DT1VOVCl9KVxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyAvbWVtb3J5IHRvIGVkaXQ8L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH0sXG59XG5cbmNvbnN0IGNsYXVkZUFpU3Vic2NyaWJlckV4dGVybmFsVG9rZW5Ob3RpY2U6IFN0YXR1c05vdGljZURlZmluaXRpb24gPSB7XG4gIGlkOiAnY2xhdWRlLWFpLWV4dGVybmFsLXRva2VuJyxcbiAgdHlwZTogJ3dhcm5pbmcnLFxuICBpc0FjdGl2ZTogKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhUb2tlbkluZm8gPSBnZXRBdXRoVG9rZW5Tb3VyY2UoKVxuICAgIHJldHVybiAoXG4gICAgICBpc0NsYXVkZUFJU3Vic2NyaWJlcigpICYmXG4gICAgICAoYXV0aFRva2VuSW5mby5zb3VyY2UgPT09ICdBTlRIUk9QSUNfQVVUSF9UT0tFTicgfHxcbiAgICAgICAgYXV0aFRva2VuSW5mby5zb3VyY2UgPT09ICdhcGlLZXlIZWxwZXInKVxuICAgIClcbiAgfSxcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgY29uc3QgYXV0aFRva2VuSW5mbyA9IGdldEF1dGhUb2tlblNvdXJjZSgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPntmaWd1cmVzLndhcm5pbmd9PC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICBBdXRoIGNvbmZsaWN0OiBVc2luZyB7YXV0aFRva2VuSW5mby5zb3VyY2V9IGluc3RlYWQgb2YgQ2xhdWRlIGFjY291bnRcbiAgICAgICAgICBzdWJzY3JpcHRpb24gdG9rZW4uIEVpdGhlciB1bnNldCB7YXV0aFRva2VuSW5mby5zb3VyY2V9LCBvciBydW5cbiAgICAgICAgICBgY2xhdWRlIC9sb2dvdXRgLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0sXG59XG5cbmNvbnN0IGFwaUtleUNvbmZsaWN0Tm90aWNlOiBTdGF0dXNOb3RpY2VEZWZpbml0aW9uID0ge1xuICBpZDogJ2FwaS1rZXktY29uZmxpY3QnLFxuICB0eXBlOiAnd2FybmluZycsXG4gIGlzQWN0aXZlOiAoKSA9PiB7XG4gICAgY29uc3QgeyBzb3VyY2U6IGFwaUtleVNvdXJjZSB9ID0gZ2V0QW50aHJvcGljQXBpS2V5V2l0aFNvdXJjZSh7XG4gICAgICBza2lwUmV0cmlldmluZ0tleUZyb21BcGlLZXlIZWxwZXI6IHRydWUsXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgISFnZXRBcGlLZXlGcm9tQ29uZmlnT3JNYWNPU0tleWNoYWluKCkgJiZcbiAgICAgIChhcGlLZXlTb3VyY2UgPT09ICdBTlRIUk9QSUNfQVBJX0tFWScgfHwgYXBpS2V5U291cmNlID09PSAnYXBpS2V5SGVscGVyJylcbiAgICApXG4gIH0sXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlOiBhcGlLZXlTb3VyY2UgfSA9IGdldEFudGhyb3BpY0FwaUtleVdpdGhTb3VyY2Uoe1xuICAgICAgc2tpcFJldHJpZXZpbmdLZXlGcm9tQXBpS2V5SGVscGVyOiB0cnVlLFxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPntmaWd1cmVzLndhcm5pbmd9PC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICBBdXRoIGNvbmZsaWN0OiBVc2luZyB7YXBpS2V5U291cmNlfSBpbnN0ZWFkIG9mIEFudGhyb3BpYyBDb25zb2xlIGtleS5cbiAgICAgICAgICBFaXRoZXIgdW5zZXQge2FwaUtleVNvdXJjZX0sIG9yIHJ1biBgY2xhdWRlIC9sb2dvdXRgLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0sXG59XG5cbmNvbnN0IGJvdGhBdXRoTWV0aG9kc05vdGljZTogU3RhdHVzTm90aWNlRGVmaW5pdGlvbiA9IHtcbiAgaWQ6ICdib3RoLWF1dGgtbWV0aG9kcycsXG4gIHR5cGU6ICd3YXJuaW5nJyxcbiAgaXNBY3RpdmU6ICgpID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZTogYXBpS2V5U291cmNlIH0gPSBnZXRBbnRocm9waWNBcGlLZXlXaXRoU291cmNlKHtcbiAgICAgIHNraXBSZXRyaWV2aW5nS2V5RnJvbUFwaUtleUhlbHBlcjogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IGF1dGhUb2tlbkluZm8gPSBnZXRBdXRoVG9rZW5Tb3VyY2UoKVxuICAgIHJldHVybiAoXG4gICAgICBhcGlLZXlTb3VyY2UgIT09ICdub25lJyAmJlxuICAgICAgYXV0aFRva2VuSW5mby5zb3VyY2UgIT09ICdub25lJyAmJlxuICAgICAgIShcbiAgICAgICAgYXBpS2V5U291cmNlID09PSAnYXBpS2V5SGVscGVyJyAmJlxuICAgICAgICBhdXRoVG9rZW5JbmZvLnNvdXJjZSA9PT0gJ2FwaUtleUhlbHBlcidcbiAgICAgIClcbiAgICApXG4gIH0sXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlOiBhcGlLZXlTb3VyY2UgfSA9IGdldEFudGhyb3BpY0FwaUtleVdpdGhTb3VyY2Uoe1xuICAgICAgc2tpcFJldHJpZXZpbmdLZXlGcm9tQXBpS2V5SGVscGVyOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgYXV0aFRva2VuSW5mbyA9IGdldEF1dGhUb2tlblNvdXJjZSgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPntmaWd1cmVzLndhcm5pbmd9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgQXV0aCBjb25mbGljdDogQm90aCBhIHRva2VuICh7YXV0aFRva2VuSW5mby5zb3VyY2V9KSBhbmQgYW4gQVBJIGtleVxuICAgICAgICAgICAgKHthcGlLZXlTb3VyY2V9KSBhcmUgc2V0LiBUaGlzIG1heSBsZWFkIHRvIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICDCtyBUcnlpbmcgdG8gdXNleycgJ31cbiAgICAgICAgICAgIHthdXRoVG9rZW5JbmZvLnNvdXJjZSA9PT0gJ2NsYXVkZS5haSdcbiAgICAgICAgICAgICAgPyAnY2xhdWRlLmFpJ1xuICAgICAgICAgICAgICA6IGF1dGhUb2tlbkluZm8uc291cmNlfVxuICAgICAgICAgICAgP3snICd9XG4gICAgICAgICAgICB7YXBpS2V5U291cmNlID09PSAnQU5USFJPUElDX0FQSV9LRVknXG4gICAgICAgICAgICAgID8gJ1Vuc2V0IHRoZSBBTlRIUk9QSUNfQVBJX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZSwgb3IgY2xhdWRlIC9sb2dvdXQgdGhlbiBzYXkgXCJOb1wiIHRvIHRoZSBBUEkga2V5IGFwcHJvdmFsIGJlZm9yZSBsb2dpbi4nXG4gICAgICAgICAgICAgIDogYXBpS2V5U291cmNlID09PSAnYXBpS2V5SGVscGVyJ1xuICAgICAgICAgICAgICAgID8gJ1Vuc2V0IHRoZSBhcGlLZXlIZWxwZXIgc2V0dGluZy4nXG4gICAgICAgICAgICAgICAgOiAnY2xhdWRlIC9sb2dvdXQnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIMK3IFRyeWluZyB0byB1c2Uge2FwaUtleVNvdXJjZX0/eycgJ31cbiAgICAgICAgICAgIHthdXRoVG9rZW5JbmZvLnNvdXJjZSA9PT0gJ2NsYXVkZS5haSdcbiAgICAgICAgICAgICAgPyAnY2xhdWRlIC9sb2dvdXQgdG8gc2lnbiBvdXQgb2YgY2xhdWRlLmFpLidcbiAgICAgICAgICAgICAgOiBgVW5zZXQgdGhlICR7YXV0aFRva2VuSW5mby5zb3VyY2V9IGVudmlyb25tZW50IHZhcmlhYmxlLmB9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSxcbn1cblxuY29uc3QgbGFyZ2VBZ2VudERlc2NyaXB0aW9uc05vdGljZTogU3RhdHVzTm90aWNlRGVmaW5pdGlvbiA9IHtcbiAgaWQ6ICdsYXJnZS1hZ2VudC1kZXNjcmlwdGlvbnMnLFxuICB0eXBlOiAnd2FybmluZycsXG4gIGlzQWN0aXZlOiBjb250ZXh0ID0+IHtcbiAgICBjb25zdCB0b3RhbFRva2VucyA9IGdldEFnZW50RGVzY3JpcHRpb25zVG90YWxUb2tlbnMoXG4gICAgICBjb250ZXh0LmFnZW50RGVmaW5pdGlvbnMsXG4gICAgKVxuICAgIHJldHVybiB0b3RhbFRva2VucyA+IEFHRU5UX0RFU0NSSVBUSU9OU19USFJFU0hPTERcbiAgfSxcbiAgcmVuZGVyOiBjb250ZXh0ID0+IHtcbiAgICBjb25zdCB0b3RhbFRva2VucyA9IGdldEFnZW50RGVzY3JpcHRpb25zVG90YWxUb2tlbnMoXG4gICAgICBjb250ZXh0LmFnZW50RGVmaW5pdGlvbnMsXG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+e2ZpZ3VyZXMud2FybmluZ308L1RleHQ+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgIExhcmdlIGN1bXVsYXRpdmUgYWdlbnQgZGVzY3JpcHRpb25zIHdpbGwgaW1wYWN0IHBlcmZvcm1hbmNlICh+XG4gICAgICAgICAge2Zvcm1hdE51bWJlcih0b3RhbFRva2Vucyl9IHRva2VucyAmZ3Q7eycgJ31cbiAgICAgICAgICB7Zm9ybWF0TnVtYmVyKEFHRU5UX0RFU0NSSVBUSU9OU19USFJFU0hPTEQpfSlcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgL2FnZW50cyB0byBtYW5hZ2U8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSxcbn1cblxuY29uc3QgamV0YnJhaW5zUGx1Z2luTm90aWNlOiBTdGF0dXNOb3RpY2VEZWZpbml0aW9uID0ge1xuICBpZDogJ2pldGJyYWlucy1wbHVnaW4taW5zdGFsbCcsXG4gIHR5cGU6ICdpbmZvJyxcbiAgaXNBY3RpdmU6IGNvbnRleHQgPT4ge1xuICAgIC8vIE9ubHkgc2hvdyBpZiBydW5uaW5nIGluIEpldEJyYWlucyBidWlsdC1pbiB0ZXJtaW5hbFxuICAgIGlmICghaXNTdXBwb3J0ZWRKZXRCcmFpbnNUZXJtaW5hbCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gRG9uJ3Qgc2hvdyBpZiBhdXRvLWluc3RhbGwgaXMgZGlzYWJsZWRcbiAgICBjb25zdCBzaG91bGRBdXRvSW5zdGFsbCA9IGNvbnRleHQuY29uZmlnLmF1dG9JbnN0YWxsSWRlRXh0ZW5zaW9uID8/IHRydWVcbiAgICBpZiAoIXNob3VsZEF1dG9JbnN0YWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgcGx1Z2luIGlzIGFscmVhZHkgaW5zdGFsbGVkIChjYWNoZWQgdG8gYXZvaWQgcmVwZWF0ZWQgZmlsZXN5c3RlbSBjaGVja3MpXG4gICAgY29uc3QgaWRlVHlwZSA9IGdldFRlcm1pbmFsSWRlVHlwZSgpXG4gICAgcmV0dXJuIGlkZVR5cGUgIT09IG51bGwgJiYgIWlzSmV0QnJhaW5zUGx1Z2luSW5zdGFsbGVkQ2FjaGVkU3luYyhpZGVUeXBlKVxuICB9LFxuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBpZGVUeXBlID0gZ2V0VGVybWluYWxJZGVUeXBlKClcbiAgICBjb25zdCBpZGVOYW1lID0gdG9JREVEaXNwbGF5TmFtZShpZGVUeXBlKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9IG1hcmdpbkxlZnQ9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImlkZVwiPntmaWd1cmVzLmFycm93VXB9PC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBJbnN0YWxsIHRoZSA8VGV4dCBjb2xvcj1cImlkZVwiPntpZGVOYW1lfTwvVGV4dD4gcGx1Z2luIGZyb20gdGhlXG4gICAgICAgICAgSmV0QnJhaW5zIE1hcmtldHBsYWNlOnsnICd9XG4gICAgICAgICAgPFRleHQgYm9sZD5odHRwczovL2RvY3MuY2xhdWRlLmNvbS9zL2NsYXVkZS1jb2RlLWpldGJyYWluczwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9LFxufVxuXG5cbi8vIEFsbCBub3RpY2UgZGVmaW5pdGlvbnNcbmV4cG9ydCBjb25zdCBzdGF0dXNOb3RpY2VEZWZpbml0aW9uczogU3RhdHVzTm90aWNlRGVmaW5pdGlvbltdID0gW1xuICBsYXJnZU1lbW9yeUZpbGVzTm90aWNlLFxuICBsYXJnZUFnZW50RGVzY3JpcHRpb25zTm90aWNlLFxuICBjbGF1ZGVBaVN1YnNjcmliZXJFeHRlcm5hbFRva2VuTm90aWNlLFxuICBhcGlLZXlDb25mbGljdE5vdGljZSxcbiAgYm90aEF1dGhNZXRob2RzTm90aWNlLFxuICBqZXRicmFpbnNQbHVnaW5Ob3RpY2UsXG5dXG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIGV4dGVybmFsIHVzZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZU5vdGljZXMoXG4gIGNvbnRleHQ6IFN0YXR1c05vdGljZUNvbnRleHQsXG4pOiBTdGF0dXNOb3RpY2VEZWZpbml0aW9uW10ge1xuICByZXR1cm4gc3RhdHVzTm90aWNlRGVmaW5pdGlvbnMuZmlsdGVyKG5vdGljZSA9PiBub3RpY2UuaXNBY3RpdmUoY29udGV4dCkpXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uc1Jlc3VsdCB9IGZyb20gJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHsgZ2V0TWVtb3J5RmlsZXMgfSBmcm9tICcuLi91dGlscy9jbGF1ZGVtZC5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGdldEFjdGl2ZU5vdGljZXMsXG4gIHR5cGUgU3RhdHVzTm90aWNlQ29udGV4dCxcbn0gZnJvbSAnLi4vdXRpbHMvc3RhdHVzTm90aWNlRGVmaW5pdGlvbnMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFnZW50RGVmaW5pdGlvbnM/OiBBZ2VudERlZmluaXRpb25zUmVzdWx0XG59XG5cbi8qKlxuICogU3RhdHVzTm90aWNlcyBjb250YWlucyB0aGUgaW5mb3JtYXRpb24gZGlzcGxheWVkIHRvIHVzZXJzIGF0IHN0YXJ0dXAuIFdlIGhhdmVcbiAqIG1vdmVkIG5ldXRyYWwgb3IgcG9zaXRpdmUgc3RhdHVzIHRvIHNyYy9jb21wb25lbnRzL1N0YXR1cy50c3ggaW5zdGVhZCwgd2hpY2hcbiAqIHVzZXJzIGNhbiBhY2Nlc3MgdGhyb3VnaCAvc3RhdHVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU3RhdHVzTm90aWNlcyh7XG4gIGFnZW50RGVmaW5pdGlvbnMsXG59OiBQcm9wcyA9IHt9KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgY29udGV4dDogU3RhdHVzTm90aWNlQ29udGV4dCA9IHtcbiAgICBjb25maWc6IGdldEdsb2JhbENvbmZpZygpLFxuICAgIGFnZW50RGVmaW5pdGlvbnMsXG4gICAgbWVtb3J5RmlsZXM6IHVzZShnZXRNZW1vcnlGaWxlcygpKSxcbiAgfVxuICBjb25zdCBhY3RpdmVOb3RpY2VzID0gZ2V0QWN0aXZlTm90aWNlcyhjb250ZXh0KVxuICBpZiAoYWN0aXZlTm90aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nTGVmdD17MX0+XG4gICAgICB7YWN0aXZlTm90aWNlcy5tYXAobm90aWNlID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bm90aWNlLmlkfT5cbiAgICAgICAgICB7bm90aWNlLnJlbmRlcihjb250ZXh0KX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHVzZUNhbGxiYWNrLFxuICB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBTY3JvbGxCb3hIYW5kbGUgfSBmcm9tICcuLi9pbmsvY29tcG9uZW50cy9TY3JvbGxCb3guanMnXG5pbXBvcnQgdHlwZSB7IERPTUVsZW1lbnQgfSBmcm9tICcuLi9pbmsvZG9tLmpzJ1xuXG4vKipcbiAqIEVzdGltYXRlZCBoZWlnaHQgKHJvd3MpIGZvciBpdGVtcyBub3QgeWV0IG1lYXN1cmVkLiBJbnRlbnRpb25hbGx5IExPVzpcbiAqIG92ZXJlc3RpbWF0aW5nIGNhdXNlcyBibGFuayBzcGFjZSAod2Ugc3RvcCBtb3VudGluZyB0b28gZWFybHkgYW5kIHRoZVxuICogdmlld3BvcnQgYm90dG9tIHNob3dzIGVtcHR5IHNwYWNlciksIHdoaWxlIHVuZGVyZXN0aW1hdGluZyBqdXN0IG1vdW50c1xuICogYSBmZXcgZXh0cmEgaXRlbXMgaW50byBvdmVyc2Nhbi4gVGhlIGFzeW1tZXRyeSBtZWFucyB3ZSdkIHJhdGhlciBlcnIgbG93LlxuICovXG5jb25zdCBERUZBVUxUX0VTVElNQVRFID0gM1xuLyoqXG4gKiBFeHRyYSByb3dzIHJlbmRlcmVkIGFib3ZlIGFuZCBiZWxvdyB0aGUgdmlld3BvcnQuIEdlbmVyb3VzIGJlY2F1c2UgcmVhbFxuICogaGVpZ2h0cyBjYW4gYmUgMTB4IHRoZSBlc3RpbWF0ZSBmb3IgbG9uZyB0b29sIHJlc3VsdHMuXG4gKi9cbmNvbnN0IE9WRVJTQ0FOX1JPV1MgPSA4MFxuLyoqIEl0ZW1zIHJlbmRlcmVkIGJlZm9yZSB0aGUgU2Nyb2xsQm94IGhhcyBsYWlkIG91dCAodmlld3BvcnRIZWlnaHQ9MCkuICovXG5jb25zdCBDT0xEX1NUQVJUX0NPVU5UID0gMzBcbi8qKlxuICogc2Nyb2xsVG9wIHF1YW50aXphdGlvbiBmb3IgdGhlIHVzZVN5bmNFeHRlcm5hbFN0b3JlIHNuYXBzaG90LiBXaXRob3V0XG4gKiB0aGlzLCBldmVyeSB3aGVlbCB0aWNrICgzLTUgcGVyIG5vdGNoKSB0cmlnZ2VycyBhIGZ1bGwgUmVhY3QgY29tbWl0ICtcbiAqIFlvZ2EgY2FsY3VsYXRlTGF5b3V0KCkgKyBJbmsgZGlmZiBjeWNsZSBcdTIwMTQgdGhlIENQVSBzcGlrZS4gVmlzdWFsIHNjcm9sbFxuICogc3RheXMgc21vb3RoIHJlZ2FyZGxlc3M6IFNjcm9sbEJveC5mb3JjZVJlbmRlciBmaXJlcyBvbiBldmVyeSBzY3JvbGxCeVxuICogYW5kIEluayByZWFkcyB0aGUgUkVBTCBzY3JvbGxUb3AgZnJvbSB0aGUgRE9NIG5vZGUsIGluZGVwZW5kZW50IG9mIHdoYXRcbiAqIFJlYWN0IHRoaW5rcy4gUmVhY3Qgb25seSBuZWVkcyB0byByZS1yZW5kZXIgd2hlbiB0aGUgbW91bnRlZCByYW5nZSBtdXN0XG4gKiBzaGlmdDsgaGFsZiBvZiBPVkVSU0NBTl9ST1dTIGlzIHRoZSB0aWdodGVzdCBzYWZlIGJpbiAoZ3VhcmFudGVlcyBcdTIyNjU0MFxuICogcm93cyBvZiBvdmVyc2NhbiByZW1haW4gYmVmb3JlIHRoZSBuZXcgcmFuZ2UgaXMgbmVlZGVkKS5cbiAqL1xuY29uc3QgU0NST0xMX1FVQU5UVU0gPSBPVkVSU0NBTl9ST1dTID4+IDFcbi8qKlxuICogV29yc3QtY2FzZSBoZWlnaHQgYXNzdW1lZCBmb3IgdW5tZWFzdXJlZCBpdGVtcyB3aGVuIGNvbXB1dGluZyBjb3ZlcmFnZS5cbiAqIEEgTWVzc2FnZVJvdyBjYW4gYmUgYXMgc21hbGwgYXMgMSByb3cgKHNpbmdsZS1saW5lIHRvb2wgY2FsbCkuIFVzaW5nIDFcbiAqIGhlcmUgZ3VhcmFudGVlcyB0aGUgbW91bnRlZCBzcGFuIHBoeXNpY2FsbHkgcmVhY2hlcyB0aGUgdmlld3BvcnQgYm90dG9tXG4gKiByZWdhcmRsZXNzIG9mIGhvdyBzbWFsbCBpdGVtcyBhY3R1YWxseSBhcmUgXHUyMDE0IGF0IHRoZSBjb3N0IG9mIG92ZXItbW91bnRpbmdcbiAqIHdoZW4gaXRlbXMgYXJlIGxhcmdlciAod2hpY2ggaXMgZmluZSwgb3ZlcnNjYW4gYWJzb3JicyBpdCkuXG4gKi9cbmNvbnN0IFBFU1NJTUlTVElDX0hFSUdIVCA9IDFcbi8qKiBDYXAgb24gbW91bnRlZCBpdGVtcyB0byBib3VuZCBmaWJlciBhbGxvY2F0aW9uIGV2ZW4gaW4gZGVnZW5lcmF0ZSBjYXNlcy4gKi9cbmNvbnN0IE1BWF9NT1VOVEVEX0lURU1TID0gMzAwXG4vKipcbiAqIE1heCBORVcgaXRlbXMgdG8gbW91bnQgaW4gYSBzaW5nbGUgY29tbWl0LiBTY3JvbGxpbmcgaW50byBhIGZyZXNoIHJhbmdlXG4gKiB3aXRoIFBFU1NJTUlTVElDX0hFSUdIVD0xIHdvdWxkIG1vdW50IDE5NCBpdGVtcyBhdCBvbmNlIChPVkVSU0NBTl9ST1dTKjIrXG4gKiB2aWV3cG9ydEggPSAxOTQpOyBlYWNoIGZyZXNoIE1lc3NhZ2VSb3cgcmVuZGVyIGNvc3RzIH4xLjVtcyAobWFya2VkIGxleGVyXG4gKiArIGZvcm1hdFRva2VuICsgfjExIGNyZWF0ZUluc3RhbmNlKSA9IH4yOTBtcyBzeW5jIGJsb2NrLiBTbGlkaW5nIHRoZSByYW5nZVxuICogdG93YXJkIHRoZSB0YXJnZXQgb3ZlciBtdWx0aXBsZSBjb21taXRzIGtlZXBzIHBlci1jb21taXQgbW91bnQgY29zdFxuICogYm91bmRlZC4gVGhlIHJlbmRlci10aW1lIGNsYW1wIChzY3JvbGxDbGFtcE1pbi9NYXgpIGhvbGRzIHRoZSB2aWV3cG9ydCBhdFxuICogdGhlIGVkZ2Ugb2YgbW91bnRlZCBjb250ZW50IHNvIHRoZXJlJ3Mgbm8gYmxhbmsgZHVyaW5nIGNhdGNoLXVwLlxuICovXG5jb25zdCBTTElERV9TVEVQID0gMjVcblxuY29uc3QgTk9PUF9VTlNVQiA9ICgpID0+IHt9XG5cbmV4cG9ydCB0eXBlIFZpcnR1YWxTY3JvbGxSZXN1bHQgPSB7XG4gIC8qKiBbc3RhcnRJbmRleCwgZW5kSW5kZXgpIGhhbGYtb3BlbiBzbGljZSBvZiBpdGVtcyB0byByZW5kZXIuICovXG4gIHJhbmdlOiByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdXG4gIC8qKiBIZWlnaHQgKHJvd3MpIG9mIHNwYWNlciBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlcmVkIGl0ZW0uICovXG4gIHRvcFNwYWNlcjogbnVtYmVyXG4gIC8qKiBIZWlnaHQgKHJvd3MpIG9mIHNwYWNlciBhZnRlciB0aGUgbGFzdCByZW5kZXJlZCBpdGVtLiAqL1xuICBib3R0b21TcGFjZXI6IG51bWJlclxuICAvKipcbiAgICogQ2FsbGJhY2sgcmVmIGZhY3RvcnkuIEF0dGFjaCBgbWVhc3VyZVJlZihpdGVtS2V5KWAgdG8gZWFjaCByZW5kZXJlZFxuICAgKiBpdGVtJ3Mgcm9vdCBCb3g7IGFmdGVyIFlvZ2EgbGF5b3V0LCB0aGUgY29tcHV0ZWQgaGVpZ2h0IGlzIGNhY2hlZC5cbiAgICovXG4gIG1lYXN1cmVSZWY6IChrZXk6IHN0cmluZykgPT4gKGVsOiBET01FbGVtZW50IHwgbnVsbCkgPT4gdm9pZFxuICAvKipcbiAgICogQXR0YWNoIHRvIHRoZSB0b3BTcGFjZXIgQm94LiBJdHMgWW9nYSBjb21wdXRlZFRvcCBJUyBsaXN0T3JpZ2luXG4gICAqIChmaXJzdCBjaGlsZCBvZiB0aGUgdmlydHVhbGl6ZWQgcmVnaW9uLCBzbyBpdHMgdG9wID0gY3VtdWxhdGl2ZVxuICAgKiBoZWlnaHQgb2YgZXZlcnl0aGluZyByZW5kZXJlZCBiZWZvcmUgdGhlIGxpc3QgaW4gdGhlIFNjcm9sbEJveCkuXG4gICAqIERyaWZ0LWZyZWU6IG5vIHN1YnRyYWN0aW9uIG9mIG9mZnNldHMsIG5vIGRlcGVuZGVuY2Ugb24gaXRlbVxuICAgKiBoZWlnaHRzIHRoYXQgY2hhbmdlIGJldHdlZW4gcmVuZGVycyAodG11eCByZXNpemUpLlxuICAgKi9cbiAgc3BhY2VyUmVmOiBSZWZPYmplY3Q8RE9NRWxlbWVudCB8IG51bGw+XG4gIC8qKlxuICAgKiBDdW11bGF0aXZlIHktb2Zmc2V0IG9mIGVhY2ggaXRlbSBpbiBsaXN0LXdyYXBwZXIgY29vcmRzIChOT1Qgc2Nyb2xsYm94XG4gICAqIGNvb3JkcyBcdTIwMTQgbG9nby9zaWJsaW5ncyBiZWZvcmUgdGhpcyBsaXN0IHNoaWZ0IHRoZSBvcmlnaW4pLlxuICAgKiBvZmZzZXRzW2ldID0gcm93cyBhYm92ZSBpdGVtIGk7IG9mZnNldHNbbl0gPSB0b3RhbEhlaWdodC5cbiAgICogUmVjb21wdXRlZCBldmVyeSByZW5kZXIgXHUyMDE0IGRvbid0IG1lbW8gb24gaWRlbnRpdHkuXG4gICAqL1xuICBvZmZzZXRzOiBBcnJheUxpa2U8bnVtYmVyPlxuICAvKipcbiAgICogUmVhZCBZb2dhIGNvbXB1dGVkVG9wIGZvciBpdGVtIGF0IGluZGV4LiBSZXR1cm5zIC0xIGlmIHRoZSBpdGVtIGlzbid0XG4gICAqIG1vdW50ZWQgb3IgaGFzbid0IGJlZW4gbGFpZCBvdXQuIEl0ZW0gQm94ZXMgYXJlIGRpcmVjdCBZb2dhIGNoaWxkcmVuXG4gICAqIG9mIHRoZSBTY3JvbGxCb3ggY29udGVudCB3cmFwcGVyIChmcmFnbWVudHMgY29sbGFwc2UgaW4gdGhlIEluayBET00pLFxuICAgKiBzbyB0aGlzIGlzIGNvbnRlbnQtd3JhcHBlci1yZWxhdGl2ZSBcdTIwMTQgc2FtZSBjb29yZGluYXRlIHNwYWNlIGFzXG4gICAqIHNjcm9sbFRvcC4gWW9nYSBsYXlvdXQgaXMgc2Nyb2xsLWluZGVwZW5kZW50ICh0cmFuc2xhdGlvbiBoYXBwZW5zXG4gICAqIGxhdGVyIGluIHJlbmRlck5vZGVUb091dHB1dCksIHNvIHBvc2l0aW9ucyBzdGF5IHZhbGlkIGFjcm9zcyBzY3JvbGxzXG4gICAqIHdpdGhvdXQgd2FpdGluZyBmb3IgSW5rIHRvIHJlLXJlbmRlci4gU3RpY2t5VHJhY2tlciB3YWxrcyB0aGUgbW91bnRcbiAgICogcmFuZ2Ugd2l0aCB0aGlzIHRvIGZpbmQgdGhlIHZpZXdwb3J0IGJvdW5kYXJ5IGF0IHBlci1zY3JvbGwtdGlja1xuICAgKiBncmFudWxhcml0eSAoZmluZXIgdGhhbiB0aGUgNDAtcm93IHF1YW50dW0gdGhpcyBob29rIHJlLXJlbmRlcnMgYXQpLlxuICAgKi9cbiAgZ2V0SXRlbVRvcDogKGluZGV4OiBudW1iZXIpID0+IG51bWJlclxuICAvKipcbiAgICogR2V0IHRoZSBtb3VudGVkIERPTUVsZW1lbnQgZm9yIGl0ZW0gYXQgaW5kZXgsIG9yIG51bGwuIEZvclxuICAgKiBTY3JvbGxCb3guc2Nyb2xsVG9FbGVtZW50IFx1MjAxNCBhbmNob3JpbmcgYnkgZWxlbWVudCByZWYgZGVmZXJzIHRoZVxuICAgKiBZb2dhLXBvc2l0aW9uIHJlYWQgdG8gcmVuZGVyIHRpbWUgKGRldGVybWluaXN0aWM7IG5vIHRocm90dGxlIHJhY2UpLlxuICAgKi9cbiAgZ2V0SXRlbUVsZW1lbnQ6IChpbmRleDogbnVtYmVyKSA9PiBET01FbGVtZW50IHwgbnVsbFxuICAvKiogTWVhc3VyZWQgWW9nYSBoZWlnaHQuIHVuZGVmaW5lZCA9IG5vdCB5ZXQgbWVhc3VyZWQ7IDAgPSByZW5kZXJlZCBub3RoaW5nLiAqL1xuICBnZXRJdGVtSGVpZ2h0OiAoaW5kZXg6IG51bWJlcikgPT4gbnVtYmVyIHwgdW5kZWZpbmVkXG4gIC8qKlxuICAgKiBTY3JvbGwgc28gaXRlbSBgaWAgaXMgaW4gdGhlIG1vdW50ZWQgcmFuZ2UuIFNldHMgc2Nyb2xsVG9wID1cbiAgICogb2Zmc2V0c1tpXSArIGxpc3RPcmlnaW4uIFRoZSByYW5nZSBsb2dpYyBmaW5kcyBzdGFydCBmcm9tXG4gICAqIHNjcm9sbFRvcCB2cyBvZmZzZXRzW10gXHUyMDE0IEJPVEggdXNlIHRoZSBzYW1lIG9mZnNldHMgdmFsdWUsIHNvIHRoZXlcbiAgICogYWdyZWUgYnkgY29uc3RydWN0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBvZmZzZXRzW2ldIGlzIHRoZVxuICAgKiBcInRydWVcIiBwb3NpdGlvbi4gSXRlbSBpIG1vdW50czsgaXRzIHNjcmVlbiBwb3NpdGlvbiBtYXkgYmUgb2ZmIGJ5XG4gICAqIGEgZmV3LWRvemVuIHJvd3MgKG92ZXJzY2FuLXdvcnRoIG9mIGVzdGltYXRlIGRyaWZ0KSwgYnV0IGl0J3MgaW5cbiAgICogdGhlIERPTS4gRm9sbG93IHdpdGggZ2V0SXRlbVRvcChpKSBmb3IgdGhlIHByZWNpc2UgcG9zaXRpb24uXG4gICAqL1xuICBzY3JvbGxUb0luZGV4OiAoaTogbnVtYmVyKSA9PiB2b2lkXG59XG5cbi8qKlxuICogUmVhY3QtbGV2ZWwgdmlydHVhbGl6YXRpb24gZm9yIGl0ZW1zIGluc2lkZSBhIFNjcm9sbEJveC5cbiAqXG4gKiBUaGUgU2Nyb2xsQm94IGFscmVhZHkgZG9lcyBJbmstb3V0cHV0LWxldmVsIHZpZXdwb3J0IGN1bGxpbmdcbiAqIChyZW5kZXItbm9kZS10by1vdXRwdXQudHM6NjE3IHNraXBzIGNoaWxkcmVuIG91dHNpZGUgdGhlIHZpc2libGUgd2luZG93KSxcbiAqIGJ1dCBhbGwgUmVhY3QgZmliZXJzICsgWW9nYSBub2RlcyBhcmUgc3RpbGwgYWxsb2NhdGVkLiBBdCB+MjUwIEtCIFJTUyBwZXJcbiAqIE1lc3NhZ2VSb3csIGEgMTAwMC1tZXNzYWdlIHNlc3Npb24gY29zdHMgfjI1MCBNQiBvZiBncm93LW9ubHkgbWVtb3J5XG4gKiAoSW5rIHNjcmVlbiBidWZmZXIsIFdBU00gbGluZWFyIG1lbW9yeSwgSlNDIHBhZ2UgcmV0ZW50aW9uIGFsbCBncm93LW9ubHkpLlxuICpcbiAqIFRoaXMgaG9vayBtb3VudHMgb25seSBpdGVtcyBpbiB2aWV3cG9ydCArIG92ZXJzY2FuLiBTcGFjZXIgYm94ZXMgaG9sZCB0aGVcbiAqIHNjcm9sbCBoZWlnaHQgY29uc3RhbnQgZm9yIHRoZSByZXN0IGF0IE8oMSkgZmliZXIgY29zdCBlYWNoLlxuICpcbiAqIEhlaWdodCBlc3RpbWF0aW9uOiBmaXhlZCBERUZBVUxUX0VTVElNQVRFIGZvciB1bm1lYXN1cmVkIGl0ZW1zLCByZXBsYWNlZFxuICogYnkgcmVhbCBZb2dhIGhlaWdodHMgYWZ0ZXIgZmlyc3QgbGF5b3V0LiBObyBzY3JvbGwgYW5jaG9yaW5nIFx1MjAxNCBvdmVyc2NhblxuICogYWJzb3JicyBlc3RpbWF0ZSBlcnJvcnMuIElmIGRyaWZ0IGlzIG5vdGljZWFibGUgaW4gcHJhY3RpY2UsIGFuY2hvcmluZ1xuICogKHNjcm9sbEJ5KGRlbHRhKSB3aGVuIHRvcFNwYWNlciBjaGFuZ2VzKSBpcyBhIHN0cmFpZ2h0Zm9yd2FyZCBmb2xsb3d1cC5cbiAqXG4gKiBzdGlja3lTY3JvbGwgY2F2ZWF0OiByZW5kZXItbm9kZS10by1vdXRwdXQudHM6NDUwIHNldHMgc2Nyb2xsVG9wPW1heFNjcm9sbFxuICogZHVyaW5nIEluaydzIHJlbmRlciBwaGFzZSwgd2hpY2ggZG9lcyBOT1QgZmlyZSBTY3JvbGxCb3guc3Vic2NyaWJlLiBUaGVcbiAqIGF0LWJvdHRvbSBjaGVjayBiZWxvdyBoYW5kbGVzIHRoaXMgXHUyMDE0IHdoZW4gcGlubmVkIHRvIHRoZSBib3R0b20sIHdlIHJlbmRlclxuICogdGhlIGxhc3QgTiBpdGVtcyByZWdhcmRsZXNzIG9mIHdoYXQgc2Nyb2xsVG9wIGNsYWltcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpcnR1YWxTY3JvbGwoXG4gIHNjcm9sbFJlZjogUmVmT2JqZWN0PFNjcm9sbEJveEhhbmRsZSB8IG51bGw+LFxuICBpdGVtS2V5czogcmVhZG9ubHkgc3RyaW5nW10sXG4gIC8qKlxuICAgKiBUZXJtaW5hbCBjb2x1bW4gY291bnQuIE9uIGNoYW5nZSwgY2FjaGVkIGhlaWdodHMgYXJlIHN0YWxlICh0ZXh0XG4gICAqIHJld3JhcHMpIFx1MjAxNCBTQ0FMRUQgYnkgb2xkQ29scy9uZXdDb2xzIHJhdGhlciB0aGFuIGNsZWFyZWQuIENsZWFyaW5nXG4gICAqIG1hZGUgdGhlIHBlc3NpbWlzdGljIGNvdmVyYWdlIGJhY2std2FsayBtb3VudCB+MTkwIGl0ZW1zIChldmVyeVxuICAgKiB1bmNhY2hlZCBpdGVtIFx1MjE5MiBQRVNTSU1JU1RJQ19IRUlHSFQ9MSBcdTIxOTIgd2FsayAxOTAgdG8gcmVhY2hcbiAgICogdmlld3BvcnQrMlx1MDBEN292ZXJzY2FuKS4gRWFjaCBmcmVzaCBtb3VudCBydW5zIG1hcmtlZC5sZXhlciArIHN5bnRheFxuICAgKiBoaWdobGlnaHRpbmcgXHUyMjQ4IDNtczsgfjYwMG1zIFJlYWN0IHJlY29uY2lsZSBvbiBmaXJzdCByZXNpemUgd2l0aCBhXG4gICAqIGxvbmcgY29udmVyc2F0aW9uLiBTY2FsaW5nIGtlZXBzIGhlaWdodENhY2hlIHBvcHVsYXRlZCBcdTIxOTIgYmFjay13YWxrXG4gICAqIHVzZXMgcmVhbC1pc2ggaGVpZ2h0cyBcdTIxOTIgbW91bnQgcmFuZ2Ugc3RheXMgdGlnaHQuIFNjYWxlZCBlc3RpbWF0ZXNcbiAgICogYXJlIG92ZXJ3cml0dGVuIGJ5IHJlYWwgWW9nYSBoZWlnaHRzIG9uIG5leHQgdXNlTGF5b3V0RWZmZWN0LlxuICAgKlxuICAgKiBTY2FsZWQgaGVpZ2h0cyBhcmUgY2xvc2UgZW5vdWdoIHRoYXQgdGhlIGJsYWNrLXNjcmVlbi1vbi13aWRlbiBidWdcbiAgICogKGluZmxhdGVkIHByZS1yZXNpemUgb2Zmc2V0cyBvdmVyc2hvb3QgcG9zdC1yZXNpemUgc2Nyb2xsVG9wIFx1MjE5MiBlbmRcbiAgICogbG9vcCBzdG9wcyBzaG9ydCBvZiB0YWlsKSBkb2Vzbid0IHRyaWdnZXI6IHJhdGlvPDEgb24gd2lkZW4gc2NhbGVzXG4gICAqIGhlaWdodHMgRE9XTiwga2VlcGluZyBvZmZzZXRzIHJvdWdobHkgYWxpZ25lZCB3aXRoIHBvc3QtcmVzaXplIFlvZ2EuXG4gICAqL1xuICBjb2x1bW5zOiBudW1iZXIsXG4pOiBWaXJ0dWFsU2Nyb2xsUmVzdWx0IHtcbiAgY29uc3QgaGVpZ2h0Q2FjaGUgPSB1c2VSZWYobmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKSlcbiAgLy8gQnVtcCB3aGVuZXZlciBoZWlnaHRDYWNoZSBtdXRhdGVzIHNvIG9mZnNldHMgcmVidWlsZCBvbiBuZXh0IHJlYWQuIFJlZlxuICAvLyAobm90IHN0YXRlKSBcdTIwMTQgY2hlY2tlZCBkdXJpbmcgcmVuZGVyIHBoYXNlLCB6ZXJvIGV4dHJhIGNvbW1pdHMuXG4gIGNvbnN0IG9mZnNldFZlcnNpb25SZWYgPSB1c2VSZWYoMClcbiAgLy8gc2Nyb2xsVG9wIGF0IGxhc3QgY29tbWl0LCBmb3IgZGV0ZWN0aW5nIGZhc3Qtc2Nyb2xsIG1vZGUgKHNsaWRlIGNhcCBnYXRlKS5cbiAgY29uc3QgbGFzdFNjcm9sbFRvcFJlZiA9IHVzZVJlZigwKVxuICBjb25zdCBvZmZzZXRzUmVmID0gdXNlUmVmPHsgYXJyOiBGbG9hdDY0QXJyYXk7IHZlcnNpb246IG51bWJlcjsgbjogbnVtYmVyIH0+KHtcbiAgICBhcnI6IG5ldyBGbG9hdDY0QXJyYXkoMCksXG4gICAgdmVyc2lvbjogLTEsXG4gICAgbjogLTEsXG4gIH0pXG4gIGNvbnN0IGl0ZW1SZWZzID0gdXNlUmVmKG5ldyBNYXA8c3RyaW5nLCBET01FbGVtZW50PigpKVxuICBjb25zdCByZWZDYWNoZSA9IHVzZVJlZihuZXcgTWFwPHN0cmluZywgKGVsOiBET01FbGVtZW50IHwgbnVsbCkgPT4gdm9pZD4oKSlcbiAgLy8gSW5saW5lIHJlZi1jb21wYXJlOiBtdXN0IHJ1biBiZWZvcmUgb2Zmc2V0cyBpcyBjb21wdXRlZCBiZWxvdy4gVGhlXG4gIC8vIHNraXAtZmxhZyBndWFyZHMgdXNlTGF5b3V0RWZmZWN0IGZyb20gcmUtcG9wdWxhdGluZyBoZWlnaHRDYWNoZSB3aXRoXG4gIC8vIFBSRS1yZXNpemUgWW9nYSBoZWlnaHRzICh1c2VMYXlvdXRFZmZlY3QgcmVhZHMgWW9nYSBmcm9tIHRoZSBmcmFtZVxuICAvLyBCRUZPUkUgdGhpcyByZW5kZXIncyBjYWxjdWxhdGVMYXlvdXQgXHUyMDE0IHRoZSBvbmUgdGhhdCBoYWQgdGhlIG9sZCB3aWR0aCkuXG4gIC8vIE5leHQgcmVuZGVyJ3MgdXNlTGF5b3V0RWZmZWN0IHJlYWRzIHBvc3QtcmVzaXplIFlvZ2EgXHUyMTkyIGNvcnJlY3QuXG4gIGNvbnN0IHByZXZDb2x1bW5zID0gdXNlUmVmKGNvbHVtbnMpXG4gIGNvbnN0IHNraXBNZWFzdXJlbWVudFJlZiA9IHVzZVJlZihmYWxzZSlcbiAgLy8gRnJlZXplIHRoZSBtb3VudCByYW5nZSBmb3IgdGhlIHJlc2l6ZS1zZXR0bGluZyBjeWNsZS4gQWxyZWFkeS1tb3VudGVkXG4gIC8vIGl0ZW1zIGhhdmUgd2FybSB1c2VNZW1vIChtYXJrZWQubGV4ZXIsIGhpZ2hsaWdodGluZyk7IHJlY29tcHV0aW5nIHJhbmdlXG4gIC8vIGZyb20gc2NhbGVkL3Blc3NpbWlzdGljIGVzdGltYXRlcyBjYXVzZXMgbW91bnQvdW5tb3VudCBjaHVybiAofjNtcyBwZXJcbiAgLy8gZnJlc2ggbW91bnQgPSB+MTUwbXMgdmlzaWJsZSBhcyBhIHNlY29uZCBmbGFzaCkuIFRoZSBwcmUtcmVzaXplIHJhbmdlIGlzXG4gIC8vIGFzIGdvb2QgYXMgYW55IFx1MjAxNCBpdGVtcyB2aXNpYmxlIGF0IG9sZCB3aWR0aCBhcmUgd2hhdCB0aGUgdXNlciB3YW50cyBhdFxuICAvLyBuZXcgd2lkdGguIEZyb3plbiBmb3IgMiByZW5kZXJzOiByZW5kZXIgIzEgaGFzIHNraXBNZWFzdXJlbWVudCAoWW9nYVxuICAvLyBzdGlsbCBwcmUtcmVzaXplKSwgcmVuZGVyICMyJ3MgdXNlTGF5b3V0RWZmZWN0IHJlYWRzIHBvc3QtcmVzaXplIFlvZ2FcbiAgLy8gaW50byBoZWlnaHRDYWNoZS4gUmVuZGVyICMzIGhhcyBhY2N1cmF0ZSBoZWlnaHRzIFx1MjE5MiBub3JtYWwgcmVjb21wdXRlLlxuICBjb25zdCBwcmV2UmFuZ2VSZWYgPSB1c2VSZWY8cmVhZG9ubHkgW251bWJlciwgbnVtYmVyXSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IGZyZWV6ZVJlbmRlcnNSZWYgPSB1c2VSZWYoMClcbiAgaWYgKHByZXZDb2x1bW5zLmN1cnJlbnQgIT09IGNvbHVtbnMpIHtcbiAgICBjb25zdCByYXRpbyA9IHByZXZDb2x1bW5zLmN1cnJlbnQgLyBjb2x1bW5zXG4gICAgcHJldkNvbHVtbnMuY3VycmVudCA9IGNvbHVtbnNcbiAgICBmb3IgKGNvbnN0IFtrLCBoXSBvZiBoZWlnaHRDYWNoZS5jdXJyZW50KSB7XG4gICAgICBoZWlnaHRDYWNoZS5jdXJyZW50LnNldChrLCBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGggKiByYXRpbykpKVxuICAgIH1cbiAgICBvZmZzZXRWZXJzaW9uUmVmLmN1cnJlbnQrK1xuICAgIHNraXBNZWFzdXJlbWVudFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgIGZyZWV6ZVJlbmRlcnNSZWYuY3VycmVudCA9IDJcbiAgfVxuICBjb25zdCBmcm96ZW5SYW5nZSA9IGZyZWV6ZVJlbmRlcnNSZWYuY3VycmVudCA+IDAgPyBwcmV2UmFuZ2VSZWYuY3VycmVudCA6IG51bGxcbiAgLy8gTGlzdCBvcmlnaW4gaW4gY29udGVudC13cmFwcGVyIGNvb3Jkcy4gc2Nyb2xsVG9wIGlzIGNvbnRlbnQtd3JhcHBlci1cbiAgLy8gcmVsYXRpdmUsIGJ1dCBvZmZzZXRzW10gYXJlIGxpc3QtbG9jYWwgKDAgPSBmaXJzdCB2aXJ0dWFsaXplZCBpdGVtKS5cbiAgLy8gU2libGluZ3MgdGhhdCByZW5kZXIgQkVGT1JFIHRoaXMgbGlzdCBpbnNpZGUgdGhlIFNjcm9sbEJveCBcdTIwMTQgTG9nbyxcbiAgLy8gU3RhdHVzTm90aWNlcywgdHJ1bmNhdGlvbiBkaXZpZGVyIGluIE1lc3NhZ2VzLnRzeCBcdTIwMTQgc2hpZnQgaXRlbSBZb2dhXG4gIC8vIHBvc2l0aW9ucyBieSB0aGVpciBjdW11bGF0aXZlIGhlaWdodC4gV2l0aG91dCBzdWJ0cmFjdGluZyB0aGlzLCB0aGVcbiAgLy8gbm9uLXN0aWNreSBicmFuY2gncyBlZmZMby9lZmZIaSBhcmUgaW5mbGF0ZWQgYW5kIHN0YXJ0IGFkdmFuY2VzIHBhc3RcbiAgLy8gaXRlbXMgdGhhdCBhcmUgYWN0dWFsbHkgaW4gdmlldyAoYmxhbmsgdmlld3BvcnQgb24gY2xpY2svc2Nyb2xsIHdoZW5cbiAgLy8gc3RpY2t5IGJyZWFrcyB3aGlsZSBzY3JvbGxUb3AgaXMgbmVhciBtYXgpLiBSZWFkIGZyb20gdGhlIHRvcFNwYWNlcidzXG4gIC8vIFlvZ2EgY29tcHV0ZWRUb3AgXHUyMDE0IGl0J3MgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSB2aXJ0dWFsaXplZCByZWdpb24sIHNvXG4gIC8vIGl0cyB0b3AgSVMgbGlzdE9yaWdpbi4gTm8gc3VidHJhY3Rpb24gb2Ygb2Zmc2V0cyBcdTIxOTIgbm8gZHJpZnQgd2hlbiBpdGVtXG4gIC8vIGhlaWdodHMgY2hhbmdlIGJldHdlZW4gcmVuZGVycyAodG11eCByZXNpemU6IGNvbHVtbnMgY2hhbmdlIFx1MjE5MiByZS13cmFwXG4gIC8vIFx1MjE5MiBoZWlnaHRzIHNocmluayBcdTIxOTIgdGhlIG9sZCBpdGVtLXNhbXBsZSBzdWJ0cmFjdGlvbiB3ZW50IG5lZ2F0aXZlIFx1MjE5MlxuICAvLyBlZmZMbyBpbmZsYXRlZCBcdTIxOTIgYmxhY2sgc2NyZWVuKS4gT25lLWZyYW1lIGxhZyBsaWtlIGhlaWdodENhY2hlLlxuICBjb25zdCBsaXN0T3JpZ2luUmVmID0gdXNlUmVmKDApXG4gIGNvbnN0IHNwYWNlclJlZiA9IHVzZVJlZjxET01FbGVtZW50IHwgbnVsbD4obnVsbClcblxuICAvLyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB0aWVzIHJlLXJlbmRlcnMgdG8gaW1wZXJhdGl2ZSBzY3JvbGwuIFNuYXBzaG90IGlzXG4gIC8vIHNjcm9sbFRvcCBRVUFOVElaRUQgdG8gU0NST0xMX1FVQU5UVU0gYmlucyBcdTIwMTQgT2JqZWN0LmlzIHNlZXMgbm8gY2hhbmdlXG4gIC8vIGZvciBzbWFsbCBzY3JvbGxzIChtb3N0IHdoZWVsIHRpY2tzKSwgc28gUmVhY3Qgc2tpcHMgdGhlIGNvbW1pdCArIFlvZ2FcbiAgLy8gKyBJbmsgY3ljbGUgZW50aXJlbHkgdW50aWwgdGhlIGFjY3VtdWxhdGVkIGRlbHRhIGNyb3NzZXMgYSBiaW4uXG4gIC8vIFN0aWNreSBpcyBmb2xkZWQgaW50byB0aGUgc25hcHNob3QgKHNpZ24gYml0KSBzbyBzdGlja3lcdTIxOTJicm9rZW4gYWxzb1xuICAvLyB0cmlnZ2Vyczogc2Nyb2xsVG9Cb3R0b20gc2V0cyBzdGlja3k9dHJ1ZSB3aXRob3V0IG1vdmluZyBzY3JvbGxUb3BcbiAgLy8gKEluayBtb3ZlcyBpdCBsYXRlciksIGFuZCB0aGUgZmlyc3Qgc2Nyb2xsQnkgYWZ0ZXIgbWF5IGxhbmQgaW4gdGhlXG4gIC8vIHNhbWUgYmluLiBOYU4gc2VudGluZWwgPSByZWYgbm90IGF0dGFjaGVkLlxuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjayhcbiAgICAobGlzdGVuZXI6ICgpID0+IHZvaWQpID0+XG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc3Vic2NyaWJlKGxpc3RlbmVyKSA/PyBOT09QX1VOU1VCLFxuICAgIFtzY3JvbGxSZWZdLFxuICApXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWYuY3VycmVudFxuICAgIGlmICghcykgcmV0dXJuIE5hTlxuICAgIC8vIFNuYXBzaG90IHVzZXMgdGhlIFRBUkdFVCAoc2Nyb2xsVG9wICsgcGVuZGluZ0RlbHRhKSwgbm90IGNvbW1pdHRlZFxuICAgIC8vIHNjcm9sbFRvcC4gc2Nyb2xsQnkgb25seSBtdXRhdGVzIHBlbmRpbmdEZWx0YSAocmVuZGVyZXIgZHJhaW5zIGl0XG4gICAgLy8gYWNyb3NzIGZyYW1lcyk7IGNvbW1pdHRlZCBzY3JvbGxUb3AgbGFncy4gVXNpbmcgdGFyZ2V0IG1lYW5zXG4gICAgLy8gbm90aWZ5KCkgb24gc2Nyb2xsQnkgYWN0dWFsbHkgY2hhbmdlcyB0aGUgc25hcHNob3QgXHUyMTkyIFJlYWN0IHJlbW91bnRzXG4gICAgLy8gY2hpbGRyZW4gZm9yIHRoZSBkZXN0aW5hdGlvbiBiZWZvcmUgSW5rJ3MgZHJhaW4gZnJhbWVzIG5lZWQgdGhlbS5cbiAgICBjb25zdCB0YXJnZXQgPSBzLmdldFNjcm9sbFRvcCgpICsgcy5nZXRQZW5kaW5nRGVsdGEoKVxuICAgIGNvbnN0IGJpbiA9IE1hdGguZmxvb3IodGFyZ2V0IC8gU0NST0xMX1FVQU5UVU0pXG4gICAgcmV0dXJuIHMuaXNTdGlja3koKSA/IH5iaW4gOiBiaW5cbiAgfSlcbiAgLy8gUmVhZCB0aGUgUkVBTCBjb21taXR0ZWQgc2Nyb2xsVG9wIChub3QgcXVhbnRpemVkKSBmb3IgcmFuZ2UgbWF0aCBcdTIwMTRcbiAgLy8gcXVhbnRpemF0aW9uIGlzIG9ubHkgdGhlIHJlLXJlbmRlciBnYXRlLCBub3QgdGhlIHBvc2l0aW9uLlxuICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxSZWYuY3VycmVudD8uZ2V0U2Nyb2xsVG9wKCkgPz8gLTFcbiAgLy8gUmFuZ2UgbXVzdCBzcGFuIEJPVEggY29tbWl0dGVkIHNjcm9sbFRvcCAod2hlcmUgSW5rIGlzIHJlbmRlcmluZyBOT1cpXG4gIC8vIGFuZCB0YXJnZXQgKHdoZXJlIHBlbmRpbmcgd2lsbCBkcmFpbiB0bykuIER1cmluZyBkcmFpbiwgaW50ZXJtZWRpYXRlXG4gIC8vIGZyYW1lcyByZW5kZXIgYXQgc2Nyb2xsVG9wcyBiZXR3ZWVuIHRoZSB0d28gXHUyMDE0IGlmIHdlIG9ubHkgbW91bnQgZm9yXG4gIC8vIHRoZSB0YXJnZXQsIHRob3NlIGZyYW1lcyBmaW5kIG5vIGNoaWxkcmVuIChibGFuayByb3dzKS5cbiAgY29uc3QgcGVuZGluZ0RlbHRhID0gc2Nyb2xsUmVmLmN1cnJlbnQ/LmdldFBlbmRpbmdEZWx0YSgpID8/IDBcbiAgY29uc3Qgdmlld3BvcnRIID0gc2Nyb2xsUmVmLmN1cnJlbnQ/LmdldFZpZXdwb3J0SGVpZ2h0KCkgPz8gMFxuICAvLyBUcnVlIG1lYW5zIHRoZSBTY3JvbGxCb3ggaXMgcGlubmVkIHRvIHRoZSBib3R0b20uIFRoaXMgaXMgdGhlIE9OTFlcbiAgLy8gc3RhYmxlIFwiYXQgYm90dG9tXCIgc2lnbmFsOiBzY3JvbGxUb3Avc2Nyb2xsSGVpZ2h0IGJvdGggcmVmbGVjdCB0aGVcbiAgLy8gUFJFVklPVVMgcmVuZGVyJ3MgbGF5b3V0LCB3aGljaCBkZXBlbmRzIG9uIHdoYXQgV0UgcmVuZGVyZWQgKHRvcFNwYWNlciArXG4gIC8vIGl0ZW1zKSwgY3JlYXRpbmcgYSBmZWVkYmFjayBsb29wIChyYW5nZSBcdTIxOTIgbGF5b3V0IFx1MjE5MiBhdEJvdHRvbSBcdTIxOTIgcmFuZ2UpLlxuICAvLyBzdGlja3lTY3JvbGwgaXMgc2V0IGJ5IHVzZXIgYWN0aW9uIChzY3JvbGxUb0JvdHRvbS9zY3JvbGxCeSksIHRoZSBpbml0aWFsXG4gIC8vIGF0dHJpYnV0ZSwgQU5EIGJ5IHJlbmRlci1ub2RlLXRvLW91dHB1dCB3aGVuIGl0cyBwb3NpdGlvbmFsIGZvbGxvdyBmaXJlc1xuICAvLyAoc2Nyb2xsVG9wPj1wcmV2TWF4IFx1MjE5MiBwaW4gdG8gbmV3IG1heCBcdTIxOTIgc2V0IGZsYWcpLiBUaGUgcmVuZGVyZXIgd3JpdGUgaXNcbiAgLy8gZmVlZGJhY2stc2FmZTogaXQgb25seSBmbGlwcyBmYWxzZVx1MjE5MnRydWUsIG9ubHkgd2hlbiBhbHJlYWR5IGF0IHRoZVxuICAvLyBwb3NpdGlvbmFsIGJvdHRvbSwgYW5kIHRoZSBmbGFnIGJlaW5nIHRydWUgaGVyZSBqdXN0IG1lYW5zIFwidGFpbC13YWxrLFxuICAvLyBjbGVhciBjbGFtcFwiIFx1MjAxNCB0aGUgc2FtZSBiZWhhdmlvciBhcyBpZiB3ZSdkIHJlYWQgc2Nyb2xsVG9wPT1tYXhTY3JvbGxcbiAgLy8gZGlyZWN0bHksIG1pbnVzIHRoZSBpbnN0YWJpbGl0eS4gRGVmYXVsdCB0cnVlOiBiZWZvcmUgdGhlIHJlZiBhdHRhY2hlcyxcbiAgLy8gYXNzdW1lIGJvdHRvbSAoc3RpY2t5IHdpbGwgcGluIHVzIHRoZXJlIG9uIGZpcnN0IEluayByZW5kZXIpLlxuICBjb25zdCBpc1N0aWNreSA9IHNjcm9sbFJlZi5jdXJyZW50Py5pc1N0aWNreSgpID8/IHRydWVcblxuICAvLyBHQyBzdGFsZSBjYWNoZSBlbnRyaWVzIChjb21wYWN0aW9uLCAvY2xlYXIsIHNjcmVlblRvZ2dsZUlkIGJ1bXApLiBPbmx5XG4gIC8vIHJ1bnMgd2hlbiBpdGVtS2V5cyBpZGVudGl0eSBjaGFuZ2VzIFx1MjAxNCBzY3JvbGxpbmcgZG9lc24ndCB0b3VjaCBrZXlzLlxuICAvLyBpdGVtUmVmcyBzZWxmLWNsZWFucyB2aWEgcmVmKG51bGwpIG9uIHVubW91bnQuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgLS0gcmVmcyBhcmUgc3RhYmxlXG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxpdmUgPSBuZXcgU2V0KGl0ZW1LZXlzKVxuICAgIGxldCBkaXJ0eSA9IGZhbHNlXG4gICAgZm9yIChjb25zdCBrIG9mIGhlaWdodENhY2hlLmN1cnJlbnQua2V5cygpKSB7XG4gICAgICBpZiAoIWxpdmUuaGFzKGspKSB7XG4gICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuZGVsZXRlKGspXG4gICAgICAgIGRpcnR5ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgb2YgcmVmQ2FjaGUuY3VycmVudC5rZXlzKCkpIHtcbiAgICAgIGlmICghbGl2ZS5oYXMoaykpIHJlZkNhY2hlLmN1cnJlbnQuZGVsZXRlKGspXG4gICAgfVxuICAgIGlmIChkaXJ0eSkgb2Zmc2V0VmVyc2lvblJlZi5jdXJyZW50KytcbiAgfSwgW2l0ZW1LZXlzXSlcblxuICAvLyBPZmZzZXRzIGNhY2hlZCBhY3Jvc3MgcmVuZGVycywgaW52YWxpZGF0ZWQgYnkgb2Zmc2V0VmVyc2lvbiByZWYgYnVtcC5cbiAgLy8gVGhlIHByZXZpb3VzIGFwcHJvYWNoIGFsbG9jYXRlZCBuZXcgQXJyYXkobisxKSArIHJhbiBuIE1hcC5nZXQgcGVyXG4gIC8vIHJlbmRlcjsgZm9yIG5cdTIyNDgyN2sgYXQga2V5LXJlcGVhdCBzY3JvbGwgcmF0ZSAofjExIGNvbW1pdHMvc2VjKSB0aGF0J3NcbiAgLy8gfjMwMGsgbG9va3Vwcy9zZWMgb24gYSBmcmVzaGx5LWFsbG9jYXRlZCBhcnJheSBcdTIxOTIgR0MgY2h1cm4gKyB+Mm1zL3JlbmRlci5cbiAgLy8gVmVyc2lvbiBidW1wZWQgYnkgaGVpZ2h0Q2FjaGUgd3JpdGVycyAobWVhc3VyZVJlZiwgcmVzaXplLXNjYWxlLCBHQykuXG4gIC8vIE5vIHNldFN0YXRlIFx1MjAxNCB0aGUgcmVidWlsZCBpcyByZWFkLXNpZGUtbGF6eSB2aWEgcmVmIHZlcnNpb24gY2hlY2sgZHVyaW5nXG4gIC8vIHJlbmRlciAoc2FtZSBjb21taXQsIHplcm8gZXh0cmEgc2NoZWR1bGUpLiBUaGUgZmxpY2tlciB0aGF0IGZvcmNlZFxuICAvLyBpbmxpbmUtcmVjb21wdXRlIGNhbWUgZnJvbSBzZXRTdGF0ZS1kcml2ZW4gaW52YWxpZGF0aW9uLlxuICBjb25zdCBuID0gaXRlbUtleXMubGVuZ3RoXG4gIGlmIChcbiAgICBvZmZzZXRzUmVmLmN1cnJlbnQudmVyc2lvbiAhPT0gb2Zmc2V0VmVyc2lvblJlZi5jdXJyZW50IHx8XG4gICAgb2Zmc2V0c1JlZi5jdXJyZW50Lm4gIT09IG5cbiAgKSB7XG4gICAgY29uc3QgYXJyID1cbiAgICAgIG9mZnNldHNSZWYuY3VycmVudC5hcnIubGVuZ3RoID49IG4gKyAxXG4gICAgICAgID8gb2Zmc2V0c1JlZi5jdXJyZW50LmFyclxuICAgICAgICA6IG5ldyBGbG9hdDY0QXJyYXkobiArIDEpXG4gICAgYXJyWzBdID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBhcnJbaSArIDFdID1cbiAgICAgICAgYXJyW2ldISArIChoZWlnaHRDYWNoZS5jdXJyZW50LmdldChpdGVtS2V5c1tpXSEpID8/IERFRkFVTFRfRVNUSU1BVEUpXG4gICAgfVxuICAgIG9mZnNldHNSZWYuY3VycmVudCA9IHsgYXJyLCB2ZXJzaW9uOiBvZmZzZXRWZXJzaW9uUmVmLmN1cnJlbnQsIG4gfVxuICB9XG4gIGNvbnN0IG9mZnNldHMgPSBvZmZzZXRzUmVmLmN1cnJlbnQuYXJyXG4gIGNvbnN0IHRvdGFsSGVpZ2h0ID0gb2Zmc2V0c1tuXSFcblxuICBsZXQgc3RhcnQ6IG51bWJlclxuICBsZXQgZW5kOiBudW1iZXJcblxuICBpZiAoZnJvemVuUmFuZ2UpIHtcbiAgICAvLyBDb2x1bW4ganVzdCBjaGFuZ2VkLiBLZWVwIHRoZSBwcmUtcmVzaXplIHJhbmdlIHRvIGF2b2lkIG1vdW50IGNodXJuLlxuICAgIC8vIENsYW1wIHRvIG4gaW4gY2FzZSBtZXNzYWdlcyB3ZXJlIHJlbW92ZWQgKC9jbGVhciwgY29tcGFjdGlvbikuXG4gICAgO1tzdGFydCwgZW5kXSA9IGZyb3plblJhbmdlXG4gICAgc3RhcnQgPSBNYXRoLm1pbihzdGFydCwgbilcbiAgICBlbmQgPSBNYXRoLm1pbihlbmQsIG4pXG4gIH0gZWxzZSBpZiAodmlld3BvcnRIID09PSAwIHx8IHNjcm9sbFRvcCA8IDApIHtcbiAgICAvLyBDb2xkIHN0YXJ0OiBTY3JvbGxCb3ggaGFzbid0IGxhaWQgb3V0IHlldC4gUmVuZGVyIHRoZSB0YWlsIFx1MjAxNCBzdGlja3lcbiAgICAvLyBzY3JvbGwgcGlucyB0byB0aGUgYm90dG9tIG9uIGZpcnN0IEluayByZW5kZXIsIHNvIHRoZXNlIGFyZSB0aGUgaXRlbXNcbiAgICAvLyB0aGUgdXNlciBhY3R1YWxseSBzZWVzLiBBbnkgc2Nyb2xsLXVwIGFmdGVyIHRoYXQgZ29lcyB0aHJvdWdoXG4gICAgLy8gc2Nyb2xsQnkgXHUyMTkyIHN1YnNjcmliZSBmaXJlcyBcdTIxOTIgd2UgcmUtcmVuZGVyIHdpdGggcmVhbCB2YWx1ZXMuXG4gICAgc3RhcnQgPSBNYXRoLm1heCgwLCBuIC0gQ09MRF9TVEFSVF9DT1VOVClcbiAgICBlbmQgPSBuXG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzU3RpY2t5KSB7XG4gICAgICAvLyBTdGlja3ktc2Nyb2xsIGZhbGxiYWNrLiByZW5kZXItbm9kZS10by1vdXRwdXQgbWF5IGhhdmUgbW92ZWQgc2Nyb2xsVG9wXG4gICAgICAvLyB3aXRob3V0IG5vdGlmeWluZyB1cywgc28gdHJ1c3QgXCJhdCBib3R0b21cIiBvdmVyIHRoZSBzdGFsZSBzbmFwc2hvdC5cbiAgICAgIC8vIFdhbGsgYmFjayBmcm9tIHRoZSB0YWlsIHVudGlsIHdlJ3ZlIGNvdmVyZWQgdmlld3BvcnQgKyBvdmVyc2Nhbi5cbiAgICAgIGNvbnN0IGJ1ZGdldCA9IHZpZXdwb3J0SCArIE9WRVJTQ0FOX1JPV1NcbiAgICAgIHN0YXJ0ID0gblxuICAgICAgd2hpbGUgKHN0YXJ0ID4gMCAmJiB0b3RhbEhlaWdodCAtIG9mZnNldHNbc3RhcnQgLSAxXSEgPCBidWRnZXQpIHtcbiAgICAgICAgc3RhcnQtLVxuICAgICAgfVxuICAgICAgZW5kID0gblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2VyIGhhcyBzY3JvbGxlZCB1cC4gQ29tcHV0ZSBzdGFydCBmcm9tIG9mZnNldHMgKGVzdGltYXRlLWJhc2VkOlxuICAgICAgLy8gbWF5IHVuZGVyc2hvb3Qgd2hpY2ggaXMgZmluZSBcdTIwMTQgd2UganVzdCBzdGFydCBtb3VudGluZyBhIGJpdCBlYXJseSkuXG4gICAgICAvLyBUaGVuIGV4dGVuZCBlbmQgYnkgQ1VNVUxBVElWRSBCRVNULUtOT1dOIEhFSUdIVCwgbm90IGVzdGltYXRlZFxuICAgICAgLy8gb2Zmc2V0cy4gVGhlIGludmFyaWFudCBpczpcbiAgICAgIC8vICAgdG9wU3BhY2VyICsgc3VtKHJlYWxfaGVpZ2h0c1tzdGFydC4uZW5kXSkgPj0gc2Nyb2xsVG9wICsgdmlld3BvcnRIICsgb3ZlcnNjYW5cbiAgICAgIC8vIFNpbmNlIHRvcFNwYWNlciA9IG9mZnNldHNbc3RhcnRdIFx1MjI2NCBzY3JvbGxUb3AgLSBvdmVyc2Nhbiwgd2UgbmVlZDpcbiAgICAgIC8vICAgc3VtKHJlYWxfaGVpZ2h0cykgPj0gdmlld3BvcnRIICsgMipvdmVyc2NhblxuICAgICAgLy8gRm9yIHVubWVhc3VyZWQgaXRlbXMsIGFzc3VtZSBQRVNTSU1JU1RJQ19IRUlHSFQ9MSBcdTIwMTQgdGhlIHNtYWxsZXN0IGFcbiAgICAgIC8vIE1lc3NhZ2VSb3cgY2FuIGJlLiBUaGlzIG92ZXItbW91bnRzIHdoZW4gaXRlbXMgYXJlIGxhcmdlLCBidXQgTkVWRVJcbiAgICAgIC8vIGxlYXZlcyB0aGUgdmlld3BvcnQgc2hvd2luZyBlbXB0eSBzcGFjZXIgZHVyaW5nIGZhc3Qgc2Nyb2xsIHRocm91Z2hcbiAgICAgIC8vIHVubWVhc3VyZWQgdGVycml0b3J5LiBPbmNlIGhlaWdodHMgYXJlIGNhY2hlZCAobmV4dCByZW5kZXIpLFxuICAgICAgLy8gY292ZXJhZ2UgaXMgY29tcHV0ZWQgd2l0aCByZWFsIHZhbHVlcyBhbmQgdGhlIHJhbmdlIHRpZ2h0ZW5zLlxuICAgICAgLy8gQWR2YW5jZSBzdGFydCBwYXN0IGl0ZW0gSyBvbmx5IGlmIEsgaXMgc2FmZSB0byBmb2xkIGludG8gdG9wU3BhY2VyXG4gICAgICAvLyB3aXRob3V0IGEgdmlzaWJsZSBqdW1wLiBUd28gY2FzZXMgYXJlIHNhZmU6XG4gICAgICAvLyAgIChhKSBLIGlzIE5PVCBjdXJyZW50bHkgbW91bnRlZCAoaXRlbVJlZnMgaGFzIG5vIGVudHJ5KS4gSXRzXG4gICAgICAvLyAgICAgICBjb250cmlidXRpb24gdG8gb2Zmc2V0cyBoYXMgQUxXQVlTIGJlZW4gdGhlIGVzdGltYXRlIFx1MjAxNCB0aGVcbiAgICAgIC8vICAgICAgIHNwYWNlciBhbHJlYWR5IG1hdGNoZXMgd2hhdCB3YXMgdGhlcmUuIE5vIGxheW91dCBjaGFuZ2UuXG4gICAgICAvLyAgIChiKSBLIGlzIG1vdW50ZWQgQU5EIGl0cyBoZWlnaHQgaXMgY2FjaGVkLiBvZmZzZXRzW3N0YXJ0KzFdIHVzZXNcbiAgICAgIC8vICAgICAgIHRoZSByZWFsIGhlaWdodCwgc28gdG9wU3BhY2VyID0gb2Zmc2V0c1tzdGFydCsxXSBleGFjdGx5XG4gICAgICAvLyAgICAgICBlcXVhbHMgdGhlIFlvZ2Egc3BhbiBLIG9jY3VwaWVkLiBTZWFtbGVzcyB1bm1vdW50LlxuICAgICAgLy8gVGhlIHVuc2FmZSBjYXNlIFx1MjAxNCBLIGlzIG1vdW50ZWQgYnV0IHVuY2FjaGVkIFx1MjAxNCBpcyB0aGUgb25lLXJlbmRlclxuICAgICAgLy8gd2luZG93IGJldHdlZW4gbW91bnQgYW5kIHVzZUxheW91dEVmZmVjdCBtZWFzdXJlbWVudC4gS2VlcGluZyBLXG4gICAgICAvLyBtb3VudGVkIHRoYXQgb25lIGV4dHJhIHJlbmRlciBsZXRzIHRoZSBtZWFzdXJlbWVudCBsYW5kLlxuICAgICAgLy8gTW91bnQgcmFuZ2Ugc3BhbnMgW2NvbW1pdHRlZCwgdGFyZ2V0XSBzbyBldmVyeSBkcmFpbiBmcmFtZSBpc1xuICAgICAgLy8gY292ZXJlZC4gQ2xhbXAgYXQgMDogYWdncmVzc2l2ZSB3aGVlbC11cCBjYW4gcHVzaCBwZW5kaW5nRGVsdGFcbiAgICAgIC8vIGZhciBwYXN0IHplcm8gKE1YIE1hc3RlciBmcmVlLXNwaW4pLCBidXQgc2Nyb2xsVG9wIG5ldmVyIGdvZXNcbiAgICAgIC8vIG5lZ2F0aXZlLiBXaXRob3V0IHRoZSBjbGFtcCwgZWZmTG8gZHJhZ3Mgc3RhcnQgdG8gMCB3aGlsZSBlZmZIaVxuICAgICAgLy8gc3RheXMgYXQgdGhlIGN1cnJlbnQgKGhpZ2gpIHNjcm9sbFRvcCBcdTIwMTQgc3BhbiBleGNlZWRzIHdoYXRcbiAgICAgIC8vIE1BWF9NT1VOVEVEX0lURU1TIGNhbiBjb3ZlciBhbmQgZWFybHkgZHJhaW4gZnJhbWVzIHNlZSBibGFuay5cbiAgICAgIC8vIGxpc3RPcmlnaW4gdHJhbnNsYXRlcyBzY3JvbGxUb3AgKGNvbnRlbnQtd3JhcHBlciBjb29yZHMpIGludG9cbiAgICAgIC8vIGxpc3QtbG9jYWwgY29vcmRzIGJlZm9yZSBjb21wYXJpbmcgYWdhaW5zdCBvZmZzZXRzW10uIFdpdGhvdXRcbiAgICAgIC8vIHRoaXMsIHByZS1saXN0IHNpYmxpbmdzIChMb2dvK25vdGljZXMgaW4gTWVzc2FnZXMudHN4KSBpbmZsYXRlXG4gICAgICAvLyBzY3JvbGxUb3AgYnkgdGhlaXIgaGVpZ2h0IGFuZCBzdGFydCBvdmVyLWFkdmFuY2VzIFx1MjAxNCBlYXRzIG92ZXJzY2FuXG4gICAgICAvLyBmaXJzdCwgdGhlbiB2aXNpYmxlIHJvd3Mgb25jZSB0aGUgaW5mbGF0aW9uIGV4Y2VlZHMgT1ZFUlNDQU5fUk9XUy5cbiAgICAgIGNvbnN0IGxpc3RPcmlnaW4gPSBsaXN0T3JpZ2luUmVmLmN1cnJlbnRcbiAgICAgIC8vIENhcCB0aGUgW2NvbW1pdHRlZC4udGFyZ2V0XSBzcGFuLiBXaGVuIGlucHV0IG91dHBhY2VzIHJlbmRlcixcbiAgICAgIC8vIHBlbmRpbmdEZWx0YSBncm93cyB1bmJvdW5kZWQgXHUyMTkyIGVmZkxvLi5lZmZIaSBjb3ZlcnMgaHVuZHJlZHMgb2ZcbiAgICAgIC8vIHVubW91bnRlZCByb3dzIFx1MjE5MiBvbmUgY29tbWl0IG1vdW50cyAxOTQgZnJlc2ggTWVzc2FnZVJvd3MgXHUyMTkyIDNzK1xuICAgICAgLy8gc3luYyBibG9jayBcdTIxOTIgbW9yZSBpbnB1dCBxdWV1ZXMgXHUyMTkyIGJpZ2dlciBkZWx0YSBuZXh0IHRpbWUuIERlYXRoXG4gICAgICAvLyBzcGlyYWwuIENhcHBpbmcgdGhlIHNwYW4gYm91bmRzIGZyZXNoIG1vdW50cyBwZXIgY29tbWl0OyB0aGVcbiAgICAgIC8vIGNsYW1wIChzZXRDbGFtcEJvdW5kcykgc2hvd3MgZWRnZS1vZi1tb3VudGVkIGR1cmluZyBjYXRjaC11cCBzb1xuICAgICAgLy8gdGhlcmUncyBubyBibGFuayBzY3JlZW4gXHUyMDE0IHNjcm9sbCByZWFjaGVzIHRhcmdldCBvdmVyIGEgZmV3XG4gICAgICAvLyBmcmFtZXMgaW5zdGVhZCBvZiBmcmVlemluZyBvbmNlIGZvciBzZWNvbmRzLlxuICAgICAgY29uc3QgTUFYX1NQQU5fUk9XUyA9IHZpZXdwb3J0SCAqIDNcbiAgICAgIGNvbnN0IHJhd0xvID0gTWF0aC5taW4oc2Nyb2xsVG9wLCBzY3JvbGxUb3AgKyBwZW5kaW5nRGVsdGEpXG4gICAgICBjb25zdCByYXdIaSA9IE1hdGgubWF4KHNjcm9sbFRvcCwgc2Nyb2xsVG9wICsgcGVuZGluZ0RlbHRhKVxuICAgICAgY29uc3Qgc3BhbiA9IHJhd0hpIC0gcmF3TG9cbiAgICAgIGNvbnN0IGNsYW1wZWRMbyA9XG4gICAgICAgIHNwYW4gPiBNQVhfU1BBTl9ST1dTXG4gICAgICAgICAgPyBwZW5kaW5nRGVsdGEgPCAwXG4gICAgICAgICAgICA/IHJhd0hpIC0gTUFYX1NQQU5fUk9XUyAvLyBzY3JvbGxpbmcgdXA6IGtlZXAgbmVhciB0YXJnZXQgKGxvdyBlbmQpXG4gICAgICAgICAgICA6IHJhd0xvIC8vIHNjcm9sbGluZyBkb3duOiBrZWVwIG5lYXIgY29tbWl0dGVkXG4gICAgICAgICAgOiByYXdMb1xuICAgICAgY29uc3QgY2xhbXBlZEhpID0gY2xhbXBlZExvICsgTWF0aC5taW4oc3BhbiwgTUFYX1NQQU5fUk9XUylcbiAgICAgIGNvbnN0IGVmZkxvID0gTWF0aC5tYXgoMCwgY2xhbXBlZExvIC0gbGlzdE9yaWdpbilcbiAgICAgIGNvbnN0IGVmZkhpID0gY2xhbXBlZEhpIC0gbGlzdE9yaWdpblxuICAgICAgY29uc3QgbG8gPSBlZmZMbyAtIE9WRVJTQ0FOX1JPV1NcbiAgICAgIC8vIEJpbmFyeSBzZWFyY2ggZm9yIHN0YXJ0IFx1MjAxNCBvZmZzZXRzIGlzIG1vbm90b25lLWluY3JlYXNpbmcuIFRoZVxuICAgICAgLy8gbGluZWFyIHdoaWxlKHN0YXJ0KyspIHNjYW4gaXRlcmF0ZWQgfjI3ayB0aW1lcyBwZXIgcmVuZGVyIGZvciB0aGVcbiAgICAgIC8vIDI3ay1tc2cgc2Vzc2lvbiAoc2Nyb2xsaW5nIGZyb20gYm90dG9tLCBzdGFydFx1MjI0ODI3MjAwKS4gTyhsb2cgbikuXG4gICAgICB7XG4gICAgICAgIGxldCBsID0gMFxuICAgICAgICBsZXQgciA9IG5cbiAgICAgICAgd2hpbGUgKGwgPCByKSB7XG4gICAgICAgICAgY29uc3QgbSA9IChsICsgcikgPj4gMVxuICAgICAgICAgIGlmIChvZmZzZXRzW20gKyAxXSEgPD0gbG8pIGwgPSBtICsgMVxuICAgICAgICAgIGVsc2UgciA9IG1cbiAgICAgICAgfVxuICAgICAgICBzdGFydCA9IGxcbiAgICAgIH1cbiAgICAgIC8vIEd1YXJkOiBkb24ndCBhZHZhbmNlIHBhc3QgbW91bnRlZC1idXQtdW5tZWFzdXJlZCBpdGVtcy4gRHVyaW5nIHRoZVxuICAgICAgLy8gb25lLXJlbmRlciB3aW5kb3cgYmV0d2VlbiBtb3VudCBhbmQgdXNlTGF5b3V0RWZmZWN0IG1lYXN1cmVtZW50LFxuICAgICAgLy8gdW5tb3VudGluZyBzdWNoIGl0ZW1zIHdvdWxkIHVzZSBERUZBVUxUX0VTVElNQVRFIGluIHRvcFNwYWNlcixcbiAgICAgIC8vIHdoaWNoIGRvZXNuJ3QgbWF0Y2ggdGhlaXIgKHVua25vd24pIHJlYWwgc3BhbiBcdTIxOTIgZmxpY2tlci4gTW91bnRlZFxuICAgICAgLy8gaXRlbXMgYXJlIGluIFtwcmV2U3RhcnQsIHByZXZFbmQpOyBzY2FuIHRoYXQsIG5vdCBhbGwgbi5cbiAgICAgIHtcbiAgICAgICAgY29uc3QgcCA9IHByZXZSYW5nZVJlZi5jdXJyZW50XG4gICAgICAgIGlmIChwICYmIHBbMF0gPCBzdGFydCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSBwWzBdOyBpIDwgTWF0aC5taW4oc3RhcnQsIHBbMV0pOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBpdGVtS2V5c1tpXSFcbiAgICAgICAgICAgIGlmIChpdGVtUmVmcy5jdXJyZW50LmhhcyhrKSAmJiAhaGVpZ2h0Q2FjaGUuY3VycmVudC5oYXMoaykpIHtcbiAgICAgICAgICAgICAgc3RhcnQgPSBpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5lZWRlZCA9IHZpZXdwb3J0SCArIDIgKiBPVkVSU0NBTl9ST1dTXG4gICAgICBjb25zdCBtYXhFbmQgPSBNYXRoLm1pbihuLCBzdGFydCArIE1BWF9NT1VOVEVEX0lURU1TKVxuICAgICAgbGV0IGNvdmVyYWdlID0gMFxuICAgICAgZW5kID0gc3RhcnRcbiAgICAgIHdoaWxlIChcbiAgICAgICAgZW5kIDwgbWF4RW5kICYmXG4gICAgICAgIChjb3ZlcmFnZSA8IG5lZWRlZCB8fCBvZmZzZXRzW2VuZF0hIDwgZWZmSGkgKyB2aWV3cG9ydEggKyBPVkVSU0NBTl9ST1dTKVxuICAgICAgKSB7XG4gICAgICAgIGNvdmVyYWdlICs9XG4gICAgICAgICAgaGVpZ2h0Q2FjaGUuY3VycmVudC5nZXQoaXRlbUtleXNbZW5kXSEpID8/IFBFU1NJTUlTVElDX0hFSUdIVFxuICAgICAgICBlbmQrK1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTYW1lIGNvdmVyYWdlIGd1YXJhbnRlZSBmb3IgdGhlIGF0Qm90dG9tIHBhdGggKGl0IHdhbGtlZCBzdGFydCBiYWNrXG4gICAgLy8gYnkgZXN0aW1hdGVkIG9mZnNldHMsIHdoaWNoIGNhbiB1bmRlcnNob290IGlmIGl0ZW1zIGFyZSBzbWFsbCkuXG4gICAgY29uc3QgbmVlZGVkID0gdmlld3BvcnRIICsgMiAqIE9WRVJTQ0FOX1JPV1NcbiAgICBjb25zdCBtaW5TdGFydCA9IE1hdGgubWF4KDAsIGVuZCAtIE1BWF9NT1VOVEVEX0lURU1TKVxuICAgIGxldCBjb3ZlcmFnZSA9IDBcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgY292ZXJhZ2UgKz0gaGVpZ2h0Q2FjaGUuY3VycmVudC5nZXQoaXRlbUtleXNbaV0hKSA/PyBQRVNTSU1JU1RJQ19IRUlHSFRcbiAgICB9XG4gICAgd2hpbGUgKHN0YXJ0ID4gbWluU3RhcnQgJiYgY292ZXJhZ2UgPCBuZWVkZWQpIHtcbiAgICAgIHN0YXJ0LS1cbiAgICAgIGNvdmVyYWdlICs9XG4gICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuZ2V0KGl0ZW1LZXlzW3N0YXJ0XSEpID8/IFBFU1NJTUlTVElDX0hFSUdIVFxuICAgIH1cbiAgICAvLyBTbGlkZSBjYXA6IGxpbWl0IGhvdyBtYW55IE5FVyBpdGVtcyBtb3VudCB0aGlzIGNvbW1pdC4gU2Nyb2xsaW5nIGludG9cbiAgICAvLyBhIGZyZXNoIHJhbmdlIHdvdWxkIG90aGVyd2lzZSBtb3VudCAxOTQgaXRlbXMgYXQgUEVTU0lNSVNUSUNfSEVJR0hUPTFcbiAgICAvLyBjb3ZlcmFnZSBcdTIwMTQgfjI5MG1zIFJlYWN0IHJlbmRlciBibG9jay4gR2F0ZXMgb24gc2Nyb2xsIFZFTE9DSVRZXG4gICAgLy8gKHxzY3JvbGxUb3AgZGVsdGEgc2luY2UgbGFzdCBjb21taXR8ID4gMlx1MDBEN3ZpZXdwb3J0SCBcdTIwMTQga2V5LXJlcGVhdCBQYWdlVXBcbiAgICAvLyBtb3ZlcyB+dmlld3BvcnRILzIgcGVyIHByZXNzLCAzKyBwcmVzc2VzIGJhdGNoZWQgPSBmYXN0IG1vZGUpLiBDb3ZlcnNcbiAgICAvLyBib3RoIHNjcm9sbEJ5IChwZW5kaW5nRGVsdGEpIGFuZCBzY3JvbGxUbyAoZGlyZWN0IHdyaXRlKS4gTm9ybWFsXG4gICAgLy8gc2luZ2xlLVBhZ2VVcCBvciBzdGlja3ktYnJlYWsganVtcHMgc2tpcCB0aGlzLiBUaGUgY2xhbXBcbiAgICAvLyAoc2V0Q2xhbXBCb3VuZHMpIGhvbGRzIHRoZSB2aWV3cG9ydCBhdCB0aGUgbW91bnRlZCBlZGdlIGR1cmluZ1xuICAgIC8vIGNhdGNoLXVwLiBPbmx5IGNhcHMgcmFuZ2UgR1JPV1RIOyBzaHJpbmtpbmcgaXMgdW5ib3VuZGVkLlxuICAgIGNvbnN0IHByZXYgPSBwcmV2UmFuZ2VSZWYuY3VycmVudFxuICAgIGNvbnN0IHNjcm9sbFZlbG9jaXR5ID1cbiAgICAgIE1hdGguYWJzKHNjcm9sbFRvcCAtIGxhc3RTY3JvbGxUb3BSZWYuY3VycmVudCkgKyBNYXRoLmFicyhwZW5kaW5nRGVsdGEpXG4gICAgaWYgKHByZXYgJiYgc2Nyb2xsVmVsb2NpdHkgPiB2aWV3cG9ydEggKiAyKSB7XG4gICAgICBjb25zdCBbcFMsIHBFXSA9IHByZXZcbiAgICAgIGlmIChzdGFydCA8IHBTIC0gU0xJREVfU1RFUCkgc3RhcnQgPSBwUyAtIFNMSURFX1NURVBcbiAgICAgIGlmIChlbmQgPiBwRSArIFNMSURFX1NURVApIGVuZCA9IHBFICsgU0xJREVfU1RFUFxuICAgICAgLy8gQSBsYXJnZSBmb3J3YXJkIGp1bXAgY2FuIHB1c2ggc3RhcnQgcGFzdCB0aGUgY2FwcGVkIGVuZCAoc3RhcnRcbiAgICAgIC8vIGFkdmFuY2VzIHZpYSBiaW5hcnkgc2VhcmNoIHdoaWxlIGVuZCBpcyBjYXBwZWQgYXQgcEUgKyBTTElERV9TVEVQKS5cbiAgICAgIC8vIE1vdW50IFNMSURFX1NURVAgaXRlbXMgZnJvbSB0aGUgbmV3IHN0YXJ0IHNvIHRoZSB2aWV3cG9ydCBpc24ndFxuICAgICAgLy8gYmxhbmsgZHVyaW5nIGNhdGNoLXVwLlxuICAgICAgaWYgKHN0YXJ0ID4gZW5kKSBlbmQgPSBNYXRoLm1pbihzdGFydCArIFNMSURFX1NURVAsIG4pXG4gICAgfVxuICAgIGxhc3RTY3JvbGxUb3BSZWYuY3VycmVudCA9IHNjcm9sbFRvcFxuICB9XG5cbiAgLy8gRGVjcmVtZW50IGZyZWV6ZSBBRlRFUiByYW5nZSBpcyBjb21wdXRlZC4gRG9uJ3QgdXBkYXRlIHByZXZSYW5nZVJlZlxuICAvLyBkdXJpbmcgZnJlZXplIHNvIGJvdGggZnJvemVuIHJlbmRlcnMgcmV1c2UgdGhlIE9SSUdJTkFMIHByZS1yZXNpemVcbiAgLy8gcmFuZ2UgKG5vdCB0aGUgY2xhbXBlZC10by1uIHZlcnNpb24gaWYgbWVzc2FnZXMgY2hhbmdlZCBtaWQtZnJlZXplKS5cbiAgaWYgKGZyZWV6ZVJlbmRlcnNSZWYuY3VycmVudCA+IDApIHtcbiAgICBmcmVlemVSZW5kZXJzUmVmLmN1cnJlbnQtLVxuICB9IGVsc2Uge1xuICAgIHByZXZSYW5nZVJlZi5jdXJyZW50ID0gW3N0YXJ0LCBlbmRdXG4gIH1cbiAgLy8gdXNlRGVmZXJyZWRWYWx1ZSBsZXRzIFJlYWN0IHJlbmRlciB3aXRoIHRoZSBPTEQgcmFuZ2UgZmlyc3QgKGNoZWFwIFx1MjAxNFxuICAvLyBhbGwgbWVtbyBoaXRzKSB0aGVuIHRyYW5zaXRpb24gdG8gdGhlIE5FVyByYW5nZSAoZXhwZW5zaXZlIFx1MjAxNCBmcmVzaFxuICAvLyBtb3VudHMgd2l0aCBtYXJrZWQubGV4ZXIgKyBmb3JtYXRUb2tlbikuIFRoZSB1cmdlbnQgcmVuZGVyIGtlZXBzIElua1xuICAvLyBwYWludGluZyBhdCBpbnB1dCByYXRlOyBmcmVzaCBtb3VudHMgaGFwcGVuIGluIGEgbm9uLWJsb2NraW5nXG4gIC8vIGJhY2tncm91bmQgcmVuZGVyLiBUaGlzIGlzIFJlYWN0J3MgbmF0aXZlIHRpbWUtc2xpY2luZzogdGhlIDYybXNcbiAgLy8gZnJlc2gtbW91bnQgYmxvY2sgYmVjb21lcyBpbnRlcnJ1cHRpYmxlLiBUaGUgY2xhbXAgKHNldENsYW1wQm91bmRzKVxuICAvLyBhbHJlYWR5IGhhbmRsZXMgdmlld3BvcnQgcGlubmluZyBzbyB0aGVyZSdzIG5vIHZpc3VhbCBhcnRpZmFjdCBmcm9tXG4gIC8vIHRoZSBkZWZlcnJlZCByYW5nZSBsYWdnaW5nIGJyaWVmbHkgYmVoaW5kIHNjcm9sbFRvcC5cbiAgLy9cbiAgLy8gT25seSBkZWZlciByYW5nZSBHUk9XVEggKHN0YXJ0IG1vdmluZyBlYXJsaWVyIC8gZW5kIG1vdmluZyBsYXRlciBhZGRzXG4gIC8vIGZyZXNoIG1vdW50cykuIFNocmlua2luZyBpcyBjaGVhcCAodW5tb3VudCA9IHJlbW92ZSBmaWJlciwgbm8gcGFyc2UpXG4gIC8vIGFuZCB0aGUgZGVmZXJyZWQgdmFsdWUgbGFnZ2luZyBzaHJpbmsgY2F1c2VzIHN0YWxlIG92ZXJzY2FuIHRvIHN0YXlcbiAgLy8gbW91bnRlZCBvbmUgZXh0cmEgdGljayBcdTIwMTQgaGFybWxlc3MgYnV0IGZhaWxzIHRlc3RzIGNoZWNraW5nIGV4YWN0XG4gIC8vIHJhbmdlIGFmdGVyIG1lYXN1cmVtZW50LWRyaXZlbiB0aWdodGVuaW5nLlxuICBjb25zdCBkU3RhcnQgPSB1c2VEZWZlcnJlZFZhbHVlKHN0YXJ0KVxuICBjb25zdCBkRW5kID0gdXNlRGVmZXJyZWRWYWx1ZShlbmQpXG4gIGxldCBlZmZTdGFydCA9IHN0YXJ0IDwgZFN0YXJ0ID8gZFN0YXJ0IDogc3RhcnRcbiAgbGV0IGVmZkVuZCA9IGVuZCA+IGRFbmQgPyBkRW5kIDogZW5kXG4gIC8vIEEgbGFyZ2UganVtcCBjYW4gbWFrZSBlZmZTdGFydCA+IGVmZkVuZCAoc3RhcnQganVtcHMgZm9yd2FyZCB3aGlsZSBkRW5kXG4gIC8vIHN0aWxsIGhvbGRzIHRoZSBvbGQgcmFuZ2UncyBlbmQpLiBTa2lwIGRlZmVycmFsIHRvIGF2b2lkIGFuIGludmVydGVkXG4gIC8vIHJhbmdlLiBBbHNvIHNraXAgd2hlbiBzdGlja3kgXHUyMDE0IHNjcm9sbFRvQm90dG9tIG5lZWRzIHRoZSB0YWlsIG1vdW50ZWRcbiAgLy8gTk9XIHNvIHNjcm9sbFRvcD1tYXhTY3JvbGwgbGFuZHMgb24gY29udGVudCwgbm90IGJvdHRvbVNwYWNlci4gVGhlXG4gIC8vIGRlZmVycmVkIGRFbmQgKHN0aWxsIGF0IG9sZCByYW5nZSkgd291bGQgcmVuZGVyIGFuIGluY29tcGxldGUgdGFpbCxcbiAgLy8gbWF4U2Nyb2xsIHN0YXlzIGF0IHRoZSBvbGQgY29udGVudCBoZWlnaHQsIGFuZCBcImp1bXAgdG8gYm90dG9tXCIgc3RvcHNcbiAgLy8gc2hvcnQuIFN0aWNreSBzbmFwIGlzIGEgc2luZ2xlIGZyYW1lLCBub3QgY29udGludW91cyBzY3JvbGwgXHUyMDE0IHRoZVxuICAvLyB0aW1lLXNsaWNpbmcgYmVuZWZpdCBkb2Vzbid0IGFwcGx5LlxuICBpZiAoZWZmU3RhcnQgPiBlZmZFbmQgfHwgaXNTdGlja3kpIHtcbiAgICBlZmZTdGFydCA9IHN0YXJ0XG4gICAgZWZmRW5kID0gZW5kXG4gIH1cbiAgLy8gU2Nyb2xsaW5nIERPV04gKHBlbmRpbmdEZWx0YSA+IDApOiBieXBhc3MgZWZmRW5kIGRlZmVycmFsIHNvIHRoZSB0YWlsXG4gIC8vIG1vdW50cyBpbW1lZGlhdGVseS4gV2l0aG91dCB0aGlzLCB0aGUgY2xhbXAgKGJhc2VkIG9uIGVmZkVuZCkgaG9sZHNcbiAgLy8gc2Nyb2xsVG9wIHNob3J0IG9mIHRoZSByZWFsIGJvdHRvbSBcdTIwMTQgdXNlciBzY3JvbGxzIGRvd24sIGhpdHMgY2xhbXBNYXgsXG4gIC8vIHN0b3BzLCBSZWFjdCBjYXRjaGVzIHVwIGVmZkVuZCwgY2xhbXBNYXggd2lkZW5zLCBidXQgdGhlIHVzZXIgYWxyZWFkeVxuICAvLyByZWxlYXNlZC4gRmVlbHMgc3R1Y2stYmVmb3JlLWJvdHRvbS4gZWZmU3RhcnQgc3RheXMgZGVmZXJyZWQgc29cbiAgLy8gc2Nyb2xsLVVQIGtlZXBzIHRpbWUtc2xpY2luZyAob2xkZXIgbWVzc2FnZXMgcGFyc2Ugb24gbW91bnQgXHUyMDE0IHRoZVxuICAvLyBleHBlbnNpdmUgZGlyZWN0aW9uKS5cbiAgaWYgKHBlbmRpbmdEZWx0YSA+IDApIHtcbiAgICBlZmZFbmQgPSBlbmRcbiAgfVxuICAvLyBGaW5hbCBPKHZpZXdwb3J0KSBlbmZvcmNlbWVudC4gVGhlIGludGVybWVkaWF0ZSBjYXBzIChtYXhFbmQ9c3RhcnQrXG4gIC8vIE1BWF9NT1VOVEVEX0lURU1TLCBzbGlkZSBjYXAsIGRlZmVycmVkLWludGVyc2VjdGlvbikgYm91bmQgW3N0YXJ0LGVuZF1cbiAgLy8gYnV0IHRoZSBkZWZlcnJlZCtieXBhc3MgY29tYmluYXRpb25zIGFib3ZlIGNhbiBsZXQgW2VmZlN0YXJ0LGVmZkVuZF1cbiAgLy8gc2xpcDogZS5nLiBkdXJpbmcgc3VzdGFpbmVkIFBhZ2VVcCB3aGVuIGNvbmN1cnJlbnQgbW9kZSBpbnRlcmxlYXZlc1xuICAvLyBkU3RhcnQgdXBkYXRlcyB3aXRoIGVmZkVuZD1lbmQgYnlwYXNzZXMgYWNyb3NzIGNvbW1pdHMsIHRoZSBlZmZlY3RpdmVcbiAgLy8gd2luZG93IGNhbiBkcmlmdCB3aWRlciB0aGFuIGVpdGhlciBpbW1lZGlhdGUgb3IgZGVmZXJyZWQgYWxvbmUuIE9uIGFcbiAgLy8gMTBLLWxpbmUgcmVzdW1lZCBzZXNzaW9uIHRoaXMgc2hvd2VkIGFzICsyNzBNQiBSU1MgZHVyaW5nIFBhZ2VVcCBzcGFtXG4gIC8vICh5b2dhIE5vZGUgY29uc3RydWN0b3IgKyBjcmVhdGVXb3JrSW5Qcm9ncmVzcyBmaWJlciBhbGxvYyBwcm9wb3J0aW9uYWxcbiAgLy8gdG8gc2Nyb2xsIGRpc3RhbmNlKS4gVHJpbSB0aGUgZmFyIGVkZ2UgXHUyMDE0IGJ5IHZpZXdwb3J0IHBvc2l0aW9uIFx1MjAxNCB0byBrZWVwXG4gIC8vIGZpYmVyIGNvdW50IE8odmlld3BvcnQpIHJlZ2FyZGxlc3Mgb2YgZGVmZXJyZWQtdmFsdWUgc2NoZWR1bGluZy5cbiAgaWYgKGVmZkVuZCAtIGVmZlN0YXJ0ID4gTUFYX01PVU5URURfSVRFTVMpIHtcbiAgICAvLyBUcmltIHNpZGUgaXMgZGVjaWRlZCBieSB2aWV3cG9ydCBQT1NJVElPTiwgbm90IHBlbmRpbmdEZWx0YSBkaXJlY3Rpb24uXG4gICAgLy8gcGVuZGluZ0RlbHRhIGRyYWlucyB0byAwIGJldHdlZW4gZnJhbWVzIHdoaWxlIGRTdGFydC9kRW5kIGxhZyB1bmRlclxuICAgIC8vIGNvbmN1cnJlbnQgc2NoZWR1bGluZzsgYSBkaXJlY3Rpb24tYmFzZWQgdHJpbSB0aGVuIGZsaXBzIGZyb20gXCJ0cmltXG4gICAgLy8gdGFpbFwiIHRvIFwidHJpbSBoZWFkXCIgbWlkLXNldHRsZSwgYnVtcGluZyBlZmZTdGFydCBcdTIxOTIgZWZmVG9wU3BhY2VyIFx1MjE5MlxuICAgIC8vIGNsYW1wTWluIFx1MjE5MiBzZXRDbGFtcEJvdW5kcyB5YW5rcyBzY3JvbGxUb3AgZG93biBcdTIxOTIgc2Nyb2xsYmFjayB2YW5pc2hlcy5cbiAgICAvLyBQb3NpdGlvbi1iYXNlZDoga2VlcCB3aGljaGV2ZXIgZW5kIHRoZSB2aWV3cG9ydCBpcyBjbG9zZXIgdG8uXG4gICAgY29uc3QgbWlkID0gKG9mZnNldHNbZWZmU3RhcnRdISArIG9mZnNldHNbZWZmRW5kXSEpIC8gMlxuICAgIGlmIChzY3JvbGxUb3AgLSBsaXN0T3JpZ2luUmVmLmN1cnJlbnQgPCBtaWQpIHtcbiAgICAgIGVmZkVuZCA9IGVmZlN0YXJ0ICsgTUFYX01PVU5URURfSVRFTVNcbiAgICB9IGVsc2Uge1xuICAgICAgZWZmU3RhcnQgPSBlZmZFbmQgLSBNQVhfTU9VTlRFRF9JVEVNU1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyaXRlIHJlbmRlci10aW1lIGNsYW1wIGJvdW5kcyBpbiBhIGxheW91dCBlZmZlY3QgKG5vdCBkdXJpbmcgcmVuZGVyIFx1MjAxNFxuICAvLyBtdXRhdGluZyBET00gZHVyaW5nIFJlYWN0IHJlbmRlciB2aW9sYXRlcyBwdXJpdHkpLiByZW5kZXItbm9kZS10by1vdXRwdXRcbiAgLy8gY2xhbXBzIHNjcm9sbFRvcCB0byB0aGlzIHNwYW4gc28gYnVyc3Qgc2Nyb2xsVG8gY2FsbHMgdGhhdCByYWNlIHBhc3RcbiAgLy8gUmVhY3QncyBhc3luYyByZS1yZW5kZXIgc2hvdyB0aGUgRURHRSBvZiBtb3VudGVkIGNvbnRlbnQgKHRoZSBsYXN0L2ZpcnN0XG4gIC8vIHZpc2libGUgbWVzc2FnZSkgaW5zdGVhZCBvZiBibGFuayBzcGFjZXIuXG4gIC8vXG4gIC8vIENsYW1wIE1VU1QgdXNlIHRoZSBFRkZFQ1RJVkUgKGRlZmVycmVkKSByYW5nZSwgbm90IHRoZSBpbW1lZGlhdGUgb25lLlxuICAvLyBEdXJpbmcgZmFzdCBzY3JvbGwsIGltbWVkaWF0ZSBbc3RhcnQsZW5kXSBtYXkgYWxyZWFkeSBjb3ZlciB0aGUgbmV3XG4gIC8vIHNjcm9sbFRvcCBwb3NpdGlvbiwgYnV0IHRoZSBjaGlsZHJlbiBzdGlsbCByZW5kZXIgYXQgdGhlIGRlZmVycmVkXG4gIC8vIChvbGRlcikgcmFuZ2UuIElmIGNsYW1wIHVzZXMgaW1tZWRpYXRlIGJvdW5kcywgdGhlIGRyYWluLWdhdGUgaW5cbiAgLy8gcmVuZGVyLW5vZGUtdG8tb3V0cHV0IHNlZXMgc2Nyb2xsVG9wIHdpdGhpbiBjbGFtcCBcdTIxOTIgZHJhaW5zIHBhc3QgdGhlXG4gIC8vIGRlZmVycmVkIGNoaWxkcmVuJ3Mgc3BhbiBcdTIxOTIgdmlld3BvcnQgbGFuZHMgaW4gc3BhY2VyIFx1MjE5MiB3aGl0ZSBmbGFzaC5cbiAgLy8gVXNpbmcgZWZmU3RhcnQvZWZmRW5kIGtlZXBzIGNsYW1wIHN5bmNlZCB3aXRoIHdoYXQncyBhY3R1YWxseSBtb3VudGVkLlxuICAvL1xuICAvLyBTa2lwIGNsYW1wIHdoZW4gc3RpY2t5IFx1MjAxNCByZW5kZXItbm9kZS10by1vdXRwdXQgcGlucyBzY3JvbGxUb3A9bWF4U2Nyb2xsXG4gIC8vIGF1dGhvcml0YXRpdmVseS4gQ2xhbXBpbmcgZHVyaW5nIGNvbGQtc3RhcnQvbG9hZCBjYXVzZXMgZmxpY2tlcjogZmlyc3RcbiAgLy8gcmVuZGVyIHVzZXMgZXN0aW1hdGUtYmFzZWQgb2Zmc2V0cywgY2xhbXAgc2V0LCBzdGlja3ktZm9sbG93IG1vdmVzXG4gIC8vIHNjcm9sbFRvcCwgbWVhc3VyZW1lbnQgZmlyZXMsIG9mZnNldHMgcmVidWlsZCB3aXRoIHJlYWwgaGVpZ2h0cywgc2Vjb25kXG4gIC8vIHJlbmRlcidzIGNsYW1wIGRpZmZlcnMgXHUyMTkyIHNjcm9sbFRvcCBjbGFtcC1hZGp1c3RzIFx1MjE5MiBjb250ZW50IHNoaWZ0cy5cbiAgY29uc3QgbGlzdE9yaWdpbiA9IGxpc3RPcmlnaW5SZWYuY3VycmVudFxuICBjb25zdCBlZmZUb3BTcGFjZXIgPSBvZmZzZXRzW2VmZlN0YXJ0XSFcbiAgLy8gQXQgZWZmU3RhcnQ9MCB0aGVyZSdzIG5vIHVubW91bnRlZCBjb250ZW50IGFib3ZlIFx1MjAxNCB0aGUgY2xhbXAgbXVzdCBhbGxvd1xuICAvLyBzY3JvbGxpbmcgcGFzdCBsaXN0T3JpZ2luIHRvIHNlZSBwcmUtbGlzdCBjb250ZW50IChsb2dvLCBoZWFkZXIpIHRoYXRcbiAgLy8gc2l0cyBpbiB0aGUgU2Nyb2xsQm94IGJ1dCBvdXRzaWRlIFZpcnR1YWxNZXNzYWdlTGlzdC4gT25seSBjbGFtcCB3aGVuXG4gIC8vIHRoZSB0b3BTcGFjZXIgaXMgbm9uemVybyAodGhlcmUgQVJFIHVubW91bnRlZCBpdGVtcyBhYm92ZSkuXG4gIGNvbnN0IGNsYW1wTWluID0gZWZmU3RhcnQgPT09IDAgPyAwIDogZWZmVG9wU3BhY2VyICsgbGlzdE9yaWdpblxuICAvLyBBdCBlZmZFbmQ9biB0aGVyZSdzIG5vIGJvdHRvbVNwYWNlciBcdTIwMTQgbm90aGluZyB0byBhdm9pZCByYWNpbmcgcGFzdC4gVXNpbmdcbiAgLy8gb2Zmc2V0c1tuXSBoZXJlIHdvdWxkIGJha2UgaW4gaGVpZ2h0Q2FjaGUgKG9uZSByZW5kZXIgYmVoaW5kIFlvZ2EpLCBhbmRcbiAgLy8gd2hlbiB0aGUgdGFpbCBpdGVtIGlzIFNUUkVBTUlORyBpdHMgY2FjaGVkIGhlaWdodCBsYWdzIGl0cyByZWFsIGhlaWdodCBieVxuICAvLyBob3dldmVyIG11Y2ggYXJyaXZlZCBzaW5jZSBsYXN0IG1lYXN1cmUuIFN0aWNreS1icmVhayB0aGVuIGNsYW1wc1xuICAvLyBzY3JvbGxUb3AgYmVsb3cgdGhlIHJlYWwgbWF4LCBwdXNoaW5nIHRoZSBzdHJlYW1pbmcgdGV4dCBvZmYtdmlld3BvcnRcbiAgLy8gKHRoZSBcInNjcm9sbGVkIHVwLCByZXNwb25zZSBkaXNhcHBlYXJlZFwiIGJ1ZykuIEluZmluaXR5ID0gdW5ib3VuZGVkOlxuICAvLyByZW5kZXItbm9kZS10by1vdXRwdXQncyBvd24gTWF0aC5taW4oY3VyLCBtYXhTY3JvbGwpIGdvdmVybnMgaW5zdGVhZC5cbiAgY29uc3QgY2xhbXBNYXggPVxuICAgIGVmZkVuZCA9PT0gblxuICAgICAgPyBJbmZpbml0eVxuICAgICAgOiBNYXRoLm1heChlZmZUb3BTcGFjZXIsIG9mZnNldHNbZWZmRW5kXSEgLSB2aWV3cG9ydEgpICsgbGlzdE9yaWdpblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N0aWNreSkge1xuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNldENsYW1wQm91bmRzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2V0Q2xhbXBCb3VuZHMoY2xhbXBNaW4sIGNsYW1wTWF4KVxuICAgIH1cbiAgfSlcblxuICAvLyBNZWFzdXJlIGhlaWdodHMgZnJvbSB0aGUgUFJFVklPVVMgSW5rIHJlbmRlci4gUnVucyBldmVyeSBjb21taXQgKG5vXG4gIC8vIGRlcHMpIGJlY2F1c2UgWW9nYSByZWNvbXB1dGVzIGxheW91dCB3aXRob3V0IFJlYWN0IGtub3dpbmcuIHlvZ2FOb2RlXG4gIC8vIGhlaWdodHMgZm9yIGl0ZW1zIG1vdW50ZWQgXHUyMjY1MSBmcmFtZSBhZ28gYXJlIHZhbGlkOyBicmFuZC1uZXcgaXRlbXNcbiAgLy8gaGF2ZW4ndCBiZWVuIGxhaWQgb3V0IHlldCAodGhhdCBoYXBwZW5zIGluIHJlc2V0QWZ0ZXJDb21taXQgXHUyMTkyIG9uUmVuZGVyLFxuICAvLyBhZnRlciB0aGlzIGVmZmVjdCkuXG4gIC8vXG4gIC8vIERpc3Rpbmd1aXNoaW5nIFwiaD0wOiBZb2dhIGhhc24ndCBydW5cIiAodHJhbnNpZW50LCBza2lwKSBmcm9tIFwiaD0wOlxuICAvLyBNZXNzYWdlUm93IHJlbmRlcmVkIG51bGxcIiAocGVybWFuZW50LCBjYWNoZSBpdCk6IGdldENvbXB1dGVkV2lkdGgoKSA+IDBcbiAgLy8gcHJvdmVzIFlvZ2EgSEFTIGxhaWQgb3V0IHRoaXMgbm9kZSAod2lkdGggY29tZXMgZnJvbSB0aGUgY29udGFpbmVyLFxuICAvLyBhbHdheXMgbm9uLXplcm8gZm9yIGEgQm94IGluIGEgY29sdW1uKS4gSWYgd2lkdGggaXMgc2V0IGFuZCBoZWlnaHQgaXNcbiAgLy8gMCwgdGhlIGl0ZW0gaXMgZ2VudWluZWx5IGVtcHR5IFx1MjAxNCBjYWNoZSAwIHNvIHRoZSBzdGFydC1hZHZhbmNlIGdhdGVcbiAgLy8gZG9lc24ndCBibG9jayBvbiBpdCBmb3JldmVyLiBXaXRob3V0IHRoaXMsIGEgbnVsbC1yZW5kZXJpbmcgbWVzc2FnZVxuICAvLyBhdCB0aGUgc3RhcnQgYm91bmRhcnkgZnJlZXplcyB0aGUgcmFuZ2UgKHNlZW4gYXMgYmxhbmsgdmlld3BvcnQgd2hlblxuICAvLyBzY3JvbGxpbmcgZG93biBhZnRlciBzY3JvbGxpbmcgdXApLlxuICAvL1xuICAvLyBOTyBzZXRTdGF0ZS4gQSBzZXRTdGF0ZSBoZXJlIHdvdWxkIHNjaGVkdWxlIGEgc2Vjb25kIGNvbW1pdCB3aXRoXG4gIC8vIHNoaWZ0ZWQgb2Zmc2V0cywgYW5kIHNpbmNlIEluayB3cml0ZXMgc3Rkb3V0IG9uIGV2ZXJ5IGNvbW1pdFxuICAvLyAocmVjb25jaWxlci5yZXNldEFmdGVyQ29tbWl0IFx1MjE5MiBvblJlbmRlciksIHRoYXQncyB0d28gd3JpdGVzIHdpdGhcbiAgLy8gZGlmZmVyZW50IHNwYWNlciBoZWlnaHRzIFx1MjE5MiB2aXNpYmxlIGZsaWNrZXIuIEhlaWdodHMgcHJvcGFnYXRlIHRvXG4gIC8vIG9mZnNldHMgb24gdGhlIG5leHQgbmF0dXJhbCByZW5kZXIuIE9uZS1mcmFtZSBsYWcsIGFic29yYmVkIGJ5IG92ZXJzY2FuLlxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNwYWNlcllvZ2EgPSBzcGFjZXJSZWYuY3VycmVudD8ueW9nYU5vZGVcbiAgICBpZiAoc3BhY2VyWW9nYSAmJiBzcGFjZXJZb2dhLmdldENvbXB1dGVkV2lkdGgoKSA+IDApIHtcbiAgICAgIGxpc3RPcmlnaW5SZWYuY3VycmVudCA9IHNwYWNlcllvZ2EuZ2V0Q29tcHV0ZWRUb3AoKVxuICAgIH1cbiAgICBpZiAoc2tpcE1lYXN1cmVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHNraXBNZWFzdXJlbWVudFJlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgYW55Q2hhbmdlZCA9IGZhbHNlXG4gICAgZm9yIChjb25zdCBba2V5LCBlbF0gb2YgaXRlbVJlZnMuY3VycmVudCkge1xuICAgICAgY29uc3QgeW9nYSA9IGVsLnlvZ2FOb2RlXG4gICAgICBpZiAoIXlvZ2EpIGNvbnRpbnVlXG4gICAgICBjb25zdCBoID0geW9nYS5nZXRDb21wdXRlZEhlaWdodCgpXG4gICAgICBjb25zdCBwcmV2ID0gaGVpZ2h0Q2FjaGUuY3VycmVudC5nZXQoa2V5KVxuICAgICAgaWYgKGggPiAwKSB7XG4gICAgICAgIGlmIChwcmV2ICE9PSBoKSB7XG4gICAgICAgICAgaGVpZ2h0Q2FjaGUuY3VycmVudC5zZXQoa2V5LCBoKVxuICAgICAgICAgIGFueUNoYW5nZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoeW9nYS5nZXRDb21wdXRlZFdpZHRoKCkgPiAwICYmIHByZXYgIT09IDApIHtcbiAgICAgICAgaGVpZ2h0Q2FjaGUuY3VycmVudC5zZXQoa2V5LCAwKVxuICAgICAgICBhbnlDaGFuZ2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYW55Q2hhbmdlZCkgb2Zmc2V0VmVyc2lvblJlZi5jdXJyZW50KytcbiAgfSlcblxuICAvLyBTdGFibGUgcGVyLWtleSBjYWxsYmFjayByZWZzLiBSZWFjdCdzIHJlZi1zd2FwIGRhbmNlIChvbGQobnVsbCkgdGhlblxuICAvLyBuZXcoZWwpKSBpcyBhIG5vLW9wIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGlkZW50aXR5LXN0YWJsZSwgYXZvaWRpbmdcbiAgLy8gaXRlbVJlZnMgY2h1cm4gb24gZXZlcnkgcmVuZGVyLiBHQydkIGFsb25nc2lkZSBoZWlnaHRDYWNoZSBhYm92ZS5cbiAgLy8gVGhlIHJlZihudWxsKSBwYXRoIGFsc28gY2FwdHVyZXMgaGVpZ2h0IGF0IHVubW91bnQgXHUyMDE0IHRoZSB5b2dhTm9kZSBpc1xuICAvLyBzdGlsbCB2YWxpZCB0aGVuIChyZWNvbmNpbGVyIGNhbGxzIHJlZihudWxsKSBiZWZvcmUgcmVtb3ZlQ2hpbGQgXHUyMTkyXG4gIC8vIGZyZWVSZWN1cnNpdmUpLCBzbyB3ZSBnZXQgdGhlIGZpbmFsIG1lYXN1cmVtZW50IGJlZm9yZSBXQVNNIHJlbGVhc2UuXG4gIGNvbnN0IG1lYXN1cmVSZWYgPSB1c2VDYWxsYmFjaygoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgZm4gPSByZWZDYWNoZS5jdXJyZW50LmdldChrZXkpXG4gICAgaWYgKCFmbikge1xuICAgICAgZm4gPSAoZWw6IERPTUVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGl0ZW1SZWZzLmN1cnJlbnQuc2V0KGtleSwgZWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgeW9nYSA9IGl0ZW1SZWZzLmN1cnJlbnQuZ2V0KGtleSk/LnlvZ2FOb2RlXG4gICAgICAgICAgaWYgKHlvZ2EgJiYgIXNraXBNZWFzdXJlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBoID0geW9nYS5nZXRDb21wdXRlZEhlaWdodCgpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChoID4gMCB8fCB5b2dhLmdldENvbXB1dGVkV2lkdGgoKSA+IDApICYmXG4gICAgICAgICAgICAgIGhlaWdodENhY2hlLmN1cnJlbnQuZ2V0KGtleSkgIT09IGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBoZWlnaHRDYWNoZS5jdXJyZW50LnNldChrZXksIGgpXG4gICAgICAgICAgICAgIG9mZnNldFZlcnNpb25SZWYuY3VycmVudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1SZWZzLmN1cnJlbnQuZGVsZXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVmQ2FjaGUuY3VycmVudC5zZXQoa2V5LCBmbilcbiAgICB9XG4gICAgcmV0dXJuIGZuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGdldEl0ZW1Ub3AgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeW9nYSA9IGl0ZW1SZWZzLmN1cnJlbnQuZ2V0KGl0ZW1LZXlzW2luZGV4XSEpPy55b2dhTm9kZVxuICAgICAgaWYgKCF5b2dhIHx8IHlvZ2EuZ2V0Q29tcHV0ZWRXaWR0aCgpID09PSAwKSByZXR1cm4gLTFcbiAgICAgIHJldHVybiB5b2dhLmdldENvbXB1dGVkVG9wKClcbiAgICB9LFxuICAgIFtpdGVtS2V5c10sXG4gIClcblxuICBjb25zdCBnZXRJdGVtRWxlbWVudCA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiBpdGVtUmVmcy5jdXJyZW50LmdldChpdGVtS2V5c1tpbmRleF0hKSA/PyBudWxsLFxuICAgIFtpdGVtS2V5c10sXG4gIClcbiAgY29uc3QgZ2V0SXRlbUhlaWdodCA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiBoZWlnaHRDYWNoZS5jdXJyZW50LmdldChpdGVtS2V5c1tpbmRleF0hKSxcbiAgICBbaXRlbUtleXNdLFxuICApXG4gIGNvbnN0IHNjcm9sbFRvSW5kZXggPSB1c2VDYWxsYmFjayhcbiAgICAoaTogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBvZmZzZXRzUmVmLmN1cnJlbnQgaG9sZHMgbGF0ZXN0IGNhY2hlZCBvZmZzZXRzIChldmVudCBoYW5kbGVycyBydW5cbiAgICAgIC8vIGJldHdlZW4gcmVuZGVyczsgYSByZW5kZXItdGltZSBjbG9zdXJlIHdvdWxkIGJlIHN0YWxlKS5cbiAgICAgIGNvbnN0IG8gPSBvZmZzZXRzUmVmLmN1cnJlbnRcbiAgICAgIGlmIChpIDwgMCB8fCBpID49IG8ubikgcmV0dXJuXG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG8oby5hcnJbaV0hICsgbGlzdE9yaWdpblJlZi5jdXJyZW50KVxuICAgIH0sXG4gICAgW3Njcm9sbFJlZl0sXG4gIClcblxuICBjb25zdCBlZmZCb3R0b21TcGFjZXIgPSB0b3RhbEhlaWdodCAtIG9mZnNldHNbZWZmRW5kXSFcblxuICByZXR1cm4ge1xuICAgIHJhbmdlOiBbZWZmU3RhcnQsIGVmZkVuZF0sXG4gICAgdG9wU3BhY2VyOiBlZmZUb3BTcGFjZXIsXG4gICAgYm90dG9tU3BhY2VyOiBlZmZCb3R0b21TcGFjZXIsXG4gICAgbWVhc3VyZVJlZixcbiAgICBzcGFjZXJSZWYsXG4gICAgb2Zmc2V0cyxcbiAgICBnZXRJdGVtVG9wLFxuICAgIGdldEl0ZW1FbGVtZW50LFxuICAgIGdldEl0ZW1IZWlnaHQsXG4gICAgc2Nyb2xsVG9JbmRleCxcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9ob29rcy91c2VWaXJ0dWFsU2Nyb2xsLmpzJ1xuaW1wb3J0IHR5cGUgeyBTY3JvbGxCb3hIYW5kbGUgfSBmcm9tICcuLi9pbmsvY29tcG9uZW50cy9TY3JvbGxCb3guanMnXG5pbXBvcnQgdHlwZSB7IERPTUVsZW1lbnQgfSBmcm9tICcuLi9pbmsvZG9tLmpzJ1xuaW1wb3J0IHR5cGUgeyBNYXRjaFBvc2l0aW9uIH0gZnJvbSAnLi4vaW5rL3JlbmRlci10by1zY3JlZW4uanMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFJlbmRlcmFibGVNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IFRleHRIb3ZlckNvbG9yQ29udGV4dCB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9UaGVtZWRUZXh0LmpzJ1xuaW1wb3J0IHsgU2Nyb2xsQ2hyb21lQ29udGV4dCB9IGZyb20gJy4vRnVsbHNjcmVlbkxheW91dC5qcydcblxuLy8gUm93cyBvZiBicmVhdGhpbmcgcm9vbSBhYm92ZSB0aGUgdGFyZ2V0IHdoZW4gd2Ugc2Nyb2xsVG8uXG5jb25zdCBIRUFEUk9PTSA9IDNcblxuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsgcmVuZGVyYWJsZVNlYXJjaFRleHQgfSBmcm9tICcuLi91dGlscy90cmFuc2NyaXB0U2VhcmNoLmpzJ1xuaW1wb3J0IHtcbiAgaXNOYXZpZ2FibGVNZXNzYWdlLFxuICB0eXBlIE1lc3NhZ2VBY3Rpb25zTmF2LFxuICB0eXBlIE1lc3NhZ2VBY3Rpb25zU3RhdGUsXG4gIHR5cGUgTmF2aWdhYmxlTWVzc2FnZSxcbiAgc3RyaXBTeXN0ZW1SZW1pbmRlcnMsXG4gIHRvb2xDYWxsT2YsXG59IGZyb20gJy4vbWVzc2FnZUFjdGlvbnMuanMnXG5cbi8vIEZhbGxiYWNrIGV4dHJhY3RvcjogbG93ZXIgKyBjYWNoZSBoZXJlIGZvciBjYWxsZXJzIHdpdGhvdXQgdGhlXG4vLyBNZXNzYWdlcy50c3ggdG9vbC1sb29rdXAgcGF0aCAodGVzdHMsIHN0YXRpYyBjb250ZXh0cykuIE1lc3NhZ2VzLnRzeFxuLy8gcHJvdmlkZXMgaXRzIG93biBsb3dlcmluZyBjYWNoZSB0aGF0IGFsc28gaGFuZGxlcyB0b29sIGV4dHJhY3RTZWFyY2hUZXh0LlxuY29uc3QgZmFsbGJhY2tMb3dlckNhY2hlID0gbmV3IFdlYWtNYXA8UmVuZGVyYWJsZU1lc3NhZ2UsIHN0cmluZz4oKVxuZnVuY3Rpb24gZGVmYXVsdEV4dHJhY3RTZWFyY2hUZXh0KG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpOiBzdHJpbmcge1xuICBjb25zdCBjYWNoZWQgPSBmYWxsYmFja0xvd2VyQ2FjaGUuZ2V0KG1zZylcbiAgaWYgKGNhY2hlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY2FjaGVkXG4gIGNvbnN0IGxvd2VyZWQgPSByZW5kZXJhYmxlU2VhcmNoVGV4dChtc2cpXG4gIGZhbGxiYWNrTG93ZXJDYWNoZS5zZXQobXNnLCBsb3dlcmVkKVxuICByZXR1cm4gbG93ZXJlZFxufVxuXG5leHBvcnQgdHlwZSBTdGlja3lQcm9tcHQgPVxuICB8IHsgdGV4dDogc3RyaW5nOyBzY3JvbGxUbzogKCkgPT4gdm9pZCB9XG4gIC8vIENsaWNrIHNldHMgdGhpcyDigJQgaGVhZGVyIEhJREVTIGJ1dCBwYWRkaW5nIHN0YXlzIGNvbGxhcHNlZCAoMCkgc29cbiAgLy8gdGhlIGNvbnRlbnQg4p2vIGxhbmRzIGF0IHNjcmVlbiByb3cgMCBpbnN0ZWFkIG9mIHJvdyAxLiBDbGVhcmVkIG9uXG4gIC8vIHRoZSBuZXh0IHN0aWNreS1wcm9tcHQgY29tcHV0ZSAodXNlciBzY3JvbGxzIGFnYWluKS5cbiAgfCAnY2xpY2tlZCdcblxuLyoqIEh1Z2UgcGFzdGVkIHByb21wdHMgKGNhdCBmaWxlIHwgY2xhdWRlKSBjYW4gYmUgTUJzLiBIZWFkZXIgd3JhcHMgaW50b1xuICogIDIgcm93cyB2aWEgb3ZlcmZsb3c6aGlkZGVuIOKAlCB0aGlzIGp1c3QgYm91bmRzIHRoZSBSZWFjdCBwcm9wIHNpemUuICovXG5jb25zdCBTVElDS1lfVEVYVF9DQVAgPSA1MDBcblxuLyoqIEltcGVyYXRpdmUgaGFuZGxlIGZvciB0cmFuc2NyaXB0IG5hdmlnYXRpb24uIE1ldGhvZHMgY29tcHV0ZSBtYXRjaGVzXG4gKiAgSEVSRSAocmVuZGVyYWJsZU1lc3NhZ2VzIGluZGljZXMgYXJlIG9ubHkgdmFsaWQgaW5zaWRlIHRoaXMgY29tcG9uZW50IOKAlFxuICogIE1lc3NhZ2VzLnRzeCBmaWx0ZXJzIGFuZCByZW9yZGVycywgUkVQTCBjYW4ndCBjb21wdXRlIGV4dGVybmFsbHkpLiAqL1xuZXhwb3J0IHR5cGUgSnVtcEhhbmRsZSA9IHtcbiAganVtcFRvSW5kZXg6IChpOiBudW1iZXIpID0+IHZvaWRcbiAgc2V0U2VhcmNoUXVlcnk6IChxOiBzdHJpbmcpID0+IHZvaWRcbiAgbmV4dE1hdGNoOiAoKSA9PiB2b2lkXG4gIHByZXZNYXRjaDogKCkgPT4gdm9pZFxuICAvKiogQ2FwdHVyZSBjdXJyZW50IHNjcm9sbFRvcCBhcyB0aGUgaW5jc2VhcmNoIGFuY2hvci4gVHlwaW5nIGp1bXBzXG4gICAqICBhcm91bmQgYXMgcHJldmlldzsgMC1tYXRjaGVzIHNuYXBzIGJhY2sgaGVyZS4gRW50ZXIvbi9OIG5ldmVyXG4gICAqICByZXN0b3JlICh0aGV5IGRvbid0IGNhbGwgc2V0U2VhcmNoUXVlcnkgd2l0aCBlbXB0eSkuIE5leHQgLyBjYWxsXG4gICAqICBvdmVyd3JpdGVzLiAqL1xuICBzZXRBbmNob3I6ICgpID0+IHZvaWRcbiAgLyoqIFdhcm0gdGhlIHNlYXJjaC10ZXh0IGNhY2hlIGJ5IGV4dHJhY3RpbmcgZXZlcnkgbWVzc2FnZSdzIHRleHQuXG4gICAqICBSZXR1cm5zIGVsYXBzZWQgbXMsIG9yIDAgaWYgYWxyZWFkeSB3YXJtIChzdWJzZXF1ZW50IC8gaW4gc2FtZVxuICAgKiAgdHJhbnNjcmlwdCBzZXNzaW9uKS4gWWllbGRzIGJlZm9yZSB3b3JrIHNvIHRoZSBjYWxsZXIgY2FuIHBhaW50XG4gICAqICBcImluZGV4aW5n4oCmXCIgZmlyc3QuIENhbGxlciBzaG93cyBcImluZGV4ZWQgaW4gWG1zXCIgb24gcmVzb2x2ZS4gKi9cbiAgd2FybVNlYXJjaEluZGV4OiAoKSA9PiBQcm9taXNlPG51bWJlcj5cbiAgLyoqIE1hbnVhbCBzY3JvbGwgKGovay9QZ1VwL3doZWVsKSBleGl0ZWQgdGhlIHNlYXJjaCBjb250ZXh0LiBDbGVhclxuICAgKiAgcG9zaXRpb25zICh5ZWxsb3cgZ29lcyBhd2F5LCBpbnZlcnNlIGhpZ2hsaWdodHMgc3RheSkuIE5leHQgbi9OXG4gICAqICByZS1lc3RhYmxpc2hlcyB2aWEgc3RlcCgp4oaSanVtcCgpLiBXaXJlZCBmcm9tIFNjcm9sbEtleWJpbmRpbmdIYW5kbGVyJ3NcbiAgICogIG9uU2Nyb2xsIOKAlCBvbmx5IGZpcmVzIGZvciBrZXlib2FyZC93aGVlbCwgbm90IHByb2dyYW1tYXRpYyBzY3JvbGxUby4gKi9cbiAgZGlzYXJtU2VhcmNoOiAoKSA9PiB2b2lkXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBSZW5kZXJhYmxlTWVzc2FnZVtdXG4gIHNjcm9sbFJlZjogUmVmT2JqZWN0PFNjcm9sbEJveEhhbmRsZSB8IG51bGw+XG4gIC8qKiBJbnZhbGlkYXRlcyBoZWlnaHRDYWNoZSBvbiBjaGFuZ2Ug4oCUIGNhY2hlZCBoZWlnaHRzIGZyb20gYSBkaWZmZXJlbnRcbiAgICogIHdpZHRoIGFyZSB3cm9uZyAodGV4dCByZXdyYXAg4oaSIGJsYWNrIHNjcmVlbiBvbiBzY3JvbGwtdXAgYWZ0ZXIgd2lkZW4pLiAqL1xuICBjb2x1bW5zOiBudW1iZXJcbiAgaXRlbUtleTogKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpID0+IHN0cmluZ1xuICByZW5kZXJJdGVtOiAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSwgaW5kZXg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKiBGaXJlcyB3aGVuIGEgbWVzc2FnZSBCb3ggaXMgY2xpY2tlZCAodG9nZ2xlIHBlci1tZXNzYWdlIHZlcmJvc2UpLiAqL1xuICBvbkl0ZW1DbGljaz86IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PiB2b2lkXG4gIC8qKiBQZXItaXRlbSBmaWx0ZXIg4oCUIHN1cHByZXNzIGhvdmVyL2NsaWNrIGZvciBtZXNzYWdlcyB3aGVyZSB0aGUgdmVyYm9zZVxuICAgKiAgdG9nZ2xlIGRvZXMgbm90aGluZyAodGV4dCwgZmlsZSBlZGl0cywgZXRjKS4gRGVmYXVsdHMgdG8gYWxsLWNsaWNrYWJsZS4gKi9cbiAgaXNJdGVtQ2xpY2thYmxlPzogKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpID0+IGJvb2xlYW5cbiAgLyoqIEV4cGFuZGVkIGl0ZW1zIGdldCBhIHBlcnNpc3RlbnQgZ3JleSBiZyAobm90IGp1c3Qgb24gaG92ZXIpLiAqL1xuICBpc0l0ZW1FeHBhbmRlZD86IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PiBib29sZWFuXG4gIC8qKiBQUkUtTE9XRVJFRCBzZWFyY2ggdGV4dC4gTWVzc2FnZXMudHN4IGNhY2hlcyB0aGUgbG93ZXJlZCByZXN1bHRcbiAgICogIG9uY2UgYXQgd2FybSB0aW1lIHNvIHNldFNlYXJjaFF1ZXJ5J3MgcGVyLWtleXN0cm9rZSBsb29wIGRvZXNcbiAgICogIG9ubHkgaW5kZXhPZiAoemVybyB0b0xvd2VyQ2FzZSBhbGxvYykuIEZhbGxzIGJhY2sgdG8gYSBsb3dlcmluZ1xuICAgKiAgd3JhcHBlciBvbiByZW5kZXJhYmxlU2VhcmNoVGV4dCBmb3IgY2FsbGVycyB3aXRob3V0IHRoZSBjYWNoZS4gKi9cbiAgZXh0cmFjdFNlYXJjaFRleHQ/OiAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSkgPT4gc3RyaW5nXG4gIC8qKiBFbmFibGUgdGhlIHN0aWNreS1wcm9tcHQgdHJhY2tlci4gU3RpY2t5VHJhY2tlciB3cml0ZXMgdmlhXG4gICAqICBTY3JvbGxDaHJvbWVDb250ZXh0IChub3QgYSBjYWxsYmFjayBwcm9wKSBzbyBzdGF0ZSBsaXZlcyBpblxuICAgKiAgRnVsbHNjcmVlbkxheW91dCBpbnN0ZWFkIG9mIFJFUEwuICovXG4gIHRyYWNrU3RpY2t5UHJvbXB0PzogYm9vbGVhblxuICBzZWxlY3RlZEluZGV4PzogbnVtYmVyXG4gIC8qKiBOYXYgaGFuZGxlIGxpdmVzIGhlcmUgYmVjYXVzZSBoZWlnaHQgbWVhc3VyZW1lbnQgbGl2ZXMgaGVyZS4gKi9cbiAgY3Vyc29yTmF2UmVmPzogUmVhY3QuUmVmPE1lc3NhZ2VBY3Rpb25zTmF2PlxuICBzZXRDdXJzb3I/OiAoYzogTWVzc2FnZUFjdGlvbnNTdGF0ZSB8IG51bGwpID0+IHZvaWRcbiAganVtcFJlZj86IFJlZk9iamVjdDxKdW1wSGFuZGxlIHwgbnVsbD5cbiAgLyoqIEZpcmVzIHdoZW4gc2VhcmNoIG1hdGNoZXMgY2hhbmdlIChxdWVyeSBlZGl0LCBuL04pLiBjdXJyZW50IGlzXG4gICAqICAxLWJhc2VkIGZvciBcIjMvNDdcIiBkaXNwbGF5OyAwIG1lYW5zIG5vIG1hdGNoZXMuICovXG4gIG9uU2VhcmNoTWF0Y2hlc0NoYW5nZT86IChjb3VudDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIpID0+IHZvaWRcbiAgLyoqIFBhaW50IGV4aXN0aW5nIERPTSBzdWJ0cmVlIHRvIGZyZXNoIFNjcmVlbiwgc2Nhbi4gRWxlbWVudCBmcm9tIHRoZVxuICAgKiAgbWFpbiB0cmVlIChhbGwgcHJvdmlkZXJzKS4gTWVzc2FnZS1yZWxhdGl2ZSBwb3NpdGlvbnMgKHJvdyAwID0gZWxcbiAgICogIHRvcCkuIFdvcmtzIGZvciBhbnkgaGVpZ2h0IOKAlCBjbG9zZXMgdGhlIHRhbGwtbWVzc2FnZSBnYXAuICovXG4gIHNjYW5FbGVtZW50PzogKGVsOiBET01FbGVtZW50KSA9PiBNYXRjaFBvc2l0aW9uW11cbiAgLyoqIFBvc2l0aW9uLWJhc2VkIENVUlJFTlQgaGlnaGxpZ2h0LiBQb3NpdGlvbnMga25vd24gdXBmcm9udCAoZnJvbVxuICAgKiAgc2NhbkVsZW1lbnQpLCBuYXZpZ2F0aW9uID0gaW5kZXggYXJpdGhtZXRpYyArIHNjcm9sbFRvLiByb3dPZmZzZXRcbiAgICogID0gbWVzc2FnZSdzIGN1cnJlbnQgc2NyZWVuLXRvcDsgcG9zaXRpb25zIHN0YXkgc3RhYmxlLiAqL1xuICBzZXRQb3NpdGlvbnM/OiAoXG4gICAgc3RhdGU6IHtcbiAgICAgIHBvc2l0aW9uczogTWF0Y2hQb3NpdGlvbltdXG4gICAgICByb3dPZmZzZXQ6IG51bWJlclxuICAgICAgY3VycmVudElkeDogbnVtYmVyXG4gICAgfSB8IG51bGwsXG4gICkgPT4gdm9pZFxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRleHQgb2YgYSByZWFsIHVzZXIgcHJvbXB0LCBvciBudWxsIGZvciBhbnl0aGluZyBlbHNlLlxuICogXCJSZWFsXCIgPSB3aGF0IHRoZSBodW1hbiB0eXBlZDogbm90IHRvb2wgcmVzdWx0cywgbm90IFhNTC13cmFwcGVkIHBheWxvYWRzXG4gKiAoPGJhc2gtc3Rkb3V0PiwgPGNvbW1hbmQtbWVzc2FnZT4sIDx0ZWFtbWF0ZS1tZXNzYWdlPiwgZXRjLiksIG5vdCBtZXRhLlxuICpcbiAqIFR3byBzaGFwZXMgbGFuZCBoZXJlOiBOb3JtYWxpemVkVXNlck1lc3NhZ2UgKG5vcm1hbCBwcm9tcHRzKSBhbmRcbiAqIEF0dGFjaG1lbnRNZXNzYWdlIHdpdGggdHlwZT09PSdxdWV1ZWRfY29tbWFuZCcgKHByb21wdHMgc2VudCBtaWQtdHVyblxuICogd2hpbGUgYSB0b29sIHdhcyBleGVjdXRpbmcg4oCUIHRoZXkgZ2V0IGRyYWluZWQgYXMgYXR0YWNobWVudHMgb24gdGhlXG4gKiBuZXh0IHR1cm4sIHNlZSBxdWVyeS50czoxNDEwKS4gQm90aCByZW5kZXIgYXMg4p2vLXByZWZpeGVkIFVzZXJUZXh0TWVzc2FnZVxuICogaW4gdGhlIFVJIHNvIGJvdGggc2hvdWxkIHN0aWNrLlxuICpcbiAqIExlYWRpbmcgPHN5c3RlbS1yZW1pbmRlcj4gYmxvY2tzIGFyZSBzdHJpcHBlZCBiZWZvcmUgY2hlY2tpbmcg4oCUIHRoZXkgZ2V0XG4gKiBwcmVwZW5kZWQgdG8gdGhlIHN0b3JlZCB0ZXh0IGZvciBDbGF1ZGUncyBjb250ZXh0IChtZW1vcnkgdXBkYXRlcywgYXV0b1xuICogbW9kZSByZW1pbmRlcnMpIGJ1dCBhcmVuJ3Qgd2hhdCB0aGUgdXNlciB0eXBlZC4gV2l0aG91dCBzdHJpcHBpbmcsIGFueVxuICogcHJvbXB0IHRoYXQgaGFwcGVuZWQgdG8gZ2V0IGEgcmVtaW5kZXIgaXMgcmVqZWN0ZWQgYnkgdGhlIHN0YXJ0c1dpdGgoJzwnKVxuICogY2hlY2suIFNob3dzIHVwIG9uIGBjYyAtY2AgcmVzdW1lcyB3aGVyZSBtZW1vcnktdXBkYXRlIHJlbWluZGVycyBhcmUgZGVuc2UuXG4gKi9cbmNvbnN0IHByb21wdFRleHRDYWNoZSA9IG5ldyBXZWFrTWFwPFJlbmRlcmFibGVNZXNzYWdlLCBzdHJpbmcgfCBudWxsPigpXG5cbmZ1bmN0aW9uIHN0aWNreVByb21wdFRleHQobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSk6IHN0cmluZyB8IG51bGwge1xuICAvLyBDYWNoZSBrZXllZCBvbiBtZXNzYWdlIG9iamVjdCDigJQgbWVzc2FnZXMgYXJlIGFwcGVuZC1vbmx5IGFuZCBkb24ndFxuICAvLyBtdXRhdGUsIHNvIGEgV2Vha01hcCBoaXQgaXMgYWx3YXlzIHZhbGlkLiBUaGUgd2FsayAoU3RpY2t5VHJhY2tlcixcbiAgLy8gcGVyLXNjcm9sbC10aWNrKSBjYWxscyB0aGlzIDUtNTArIHRpbWVzIHdpdGggdGhlIFNBTUUgbWVzc2FnZXMgZXZlcnlcbiAgLy8gdGljazsgdGhlIHN5c3RlbS1yZW1pbmRlciBzdHJpcCBhbGxvY2F0ZXMgYSBmcmVzaCBzdHJpbmcgb24gZWFjaFxuICAvLyBwYXJzZS4gV2Vha01hcCBzZWxmLUdDcyBvbiBjb21wYWN0aW9uL2NsZWFyIChtZXNzYWdlc1tdIHJlcGxhY2VkKS5cbiAgY29uc3QgY2FjaGVkID0gcHJvbXB0VGV4dENhY2hlLmdldChtc2cpXG4gIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZFxuICBjb25zdCByZXN1bHQgPSBjb21wdXRlU3RpY2t5UHJvbXB0VGV4dChtc2cpXG4gIHByb21wdFRleHRDYWNoZS5zZXQobXNnLCByZXN1bHQpXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0aWNreVByb21wdFRleHQobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSk6IHN0cmluZyB8IG51bGwge1xuICBsZXQgcmF3OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJykge1xuICAgIGlmIChtc2cuaXNNZXRhIHx8IG1zZy5pc1Zpc2libGVJblRyYW5zY3JpcHRPbmx5KSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGJsb2NrID0gbXNnLm1lc3NhZ2UuY29udGVudFswXVxuICAgIGlmIChibG9jaz8udHlwZSAhPT0gJ3RleHQnKSByZXR1cm4gbnVsbFxuICAgIHJhdyA9IGJsb2NrLnRleHRcbiAgfSBlbHNlIGlmIChcbiAgICBtc2cudHlwZSA9PT0gJ2F0dGFjaG1lbnQnICYmXG4gICAgbXNnLmF0dGFjaG1lbnQudHlwZSA9PT0gJ3F1ZXVlZF9jb21tYW5kJyAmJlxuICAgIG1zZy5hdHRhY2htZW50LmNvbW1hbmRNb2RlICE9PSAndGFzay1ub3RpZmljYXRpb24nICYmXG4gICAgIW1zZy5hdHRhY2htZW50LmlzTWV0YVxuICApIHtcbiAgICBjb25zdCBwID0gbXNnLmF0dGFjaG1lbnQucHJvbXB0XG4gICAgcmF3ID1cbiAgICAgIHR5cGVvZiBwID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHBcbiAgICAgICAgOiBwLmZsYXRNYXAoYiA9PiAoYi50eXBlID09PSAndGV4dCcgPyBbYi50ZXh0XSA6IFtdKSkuam9pbignXFxuJylcbiAgfVxuICBpZiAocmF3ID09PSBudWxsKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHQgPSBzdHJpcFN5c3RlbVJlbWluZGVycyhyYXcpXG4gIGlmICh0LnN0YXJ0c1dpdGgoJzwnKSB8fCB0ID09PSAnJykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHRcbn1cblxuLyoqXG4gKiBWaXJ0dWFsaXplZCBtZXNzYWdlIGxpc3QgZm9yIGZ1bGxzY3JlZW4gbW9kZS4gU3BsaXQgZnJvbSBNZXNzYWdlcy50c3ggc29cbiAqIHVzZVZpcnR1YWxTY3JvbGwgaXMgY2FsbGVkIHVuY29uZGl0aW9uYWxseSAocnVsZXMtb2YtaG9va3MpIOKAlCBNZXNzYWdlcy50c3hcbiAqIGNvbmRpdGlvbmFsbHkgcmVuZGVycyBlaXRoZXIgdGhpcyBvciBhIHBsYWluIC5tYXAoKS5cbiAqXG4gKiBUaGUgd3JhcHBpbmcgPEJveCByZWY+IGlzIHRoZSBtZWFzdXJlbWVudCBhbmNob3Ig4oCUIE1lc3NhZ2VSb3cgZG9lc24ndCB0YWtlXG4gKiBhIHJlZi4gU2luZ2xlLWNoaWxkIGNvbHVtbiBCb3ggcGFzc2VzIFlvZ2EgaGVpZ2h0IHRocm91Z2ggdW5jaGFuZ2VkLlxuICovXG50eXBlIFZpcnR1YWxJdGVtUHJvcHMgPSB7XG4gIGl0ZW1LZXk6IHN0cmluZ1xuICBtc2c6IFJlbmRlcmFibGVNZXNzYWdlXG4gIGlkeDogbnVtYmVyXG4gIG1lYXN1cmVSZWY6IChrZXk6IHN0cmluZykgPT4gKGVsOiBET01FbGVtZW50IHwgbnVsbCkgPT4gdm9pZFxuICBleHBhbmRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICBob3ZlcmVkOiBib29sZWFuXG4gIGNsaWNrYWJsZTogYm9vbGVhblxuICBvbkNsaWNrSzogKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsIGNlbGxJc0JsYW5rOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uRW50ZXJLOiAoazogc3RyaW5nKSA9PiB2b2lkXG4gIG9uTGVhdmVLOiAoazogc3RyaW5nKSA9PiB2b2lkXG4gIHJlbmRlckl0ZW06IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlLCBpZHg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8vIEl0ZW0gd3JhcHBlciB3aXRoIHN0YWJsZSBjbGljayBoYW5kbGVycy4gVGhlIHBlci1pdGVtIGNsb3N1cmVzIHdlcmUgdGhlXG4vLyBgb3BlcmF0aW9uTmV3QXJyb3dGdW5jdGlvbmAgbGVhZnMg4oaSIGBGdW5jdGlvbkV4ZWN1dGFibGU6OmZpbmFsaXplVW5jb25kaXRpb25hbGx5YFxuLy8gR0MgY2xlYW51cCAoMTYlIG9mIEdDIHRpbWUgZHVyaW5nIGZhc3Qgc2Nyb2xsKS4gMyBjbG9zdXJlcyDDlyA2MCBtb3VudGVkIMOXXG4vLyAxMCBjb21taXRzL3NlYyA9IDE4MDAgY2xvc3VyZXMvc2VjLiBXaXRoIHN0YWJsZSBvbkNsaWNrSy9vbkVudGVySy9vbkxlYXZlS1xuLy8gdGhyZWFkZWQgdmlhIGl0ZW1LZXksIHRoZSBjbG9zdXJlcyBoZXJlIGFyZSBwZXItaXRlbS1wZXItcmVuZGVyIGJ1dCBDSEVBUFxuLy8gKGp1c3Qgd3JhcCB0aGUgc3RhYmxlIGNhbGxiYWNrIHdpdGggayBib3VuZCkgYW5kIGRvbid0IGNsb3NlIG92ZXIgbXNnL2lkeFxuLy8gd2hpY2ggbGV0cyBKSVQgaW5saW5lIHRoZW0uIFRoZSBiaWdnZXIgd2luIGlzIGluc2lkZTogTWVzc2FnZVJvdy5tZW1vXG4vLyBiYWlscyBmb3IgdW5jaGFuZ2VkIG1zZ3MsIHNraXBwaW5nIG1hcmtlZC5sZXhlciArIGZvcm1hdFRva2VuLlxuLy9cbi8vIE5PVCBSZWFjdC5tZW1vJ2Qg4oCUIHJlbmRlckl0ZW0gY2FwdHVyZXMgY2hhbmdpbmcgc3RhdGUgKGN1cnNvciwgc2VsZWN0ZWRJZHgsXG4vLyB2ZXJib3NlKS4gTWVtb2luZyB3aXRoIGEgY29tcGFyYXRvciB0aGF0IGlnbm9yZXMgcmVuZGVySXRlbSB3b3VsZCB1c2UgYVxuLy8gU1RBTEUgY2xvc3VyZSBvbiBiYWlsICh3cm9uZyBzZWxlY3Rpb24gaGlnaGxpZ2h0LCBzdGFsZSB2ZXJib3NlKS4gSW5jbHVkaW5nXG4vLyByZW5kZXJJdGVtIGluIHRoZSBjb21wYXJhdG9yIGRlZmVhdHMgbWVtbyBzaW5jZSBpdCdzIGZyZXNoIGVhY2ggcmVuZGVyLlxuZnVuY3Rpb24gVmlydHVhbEl0ZW0oe1xuICBpdGVtS2V5OiBrLFxuICBtc2csXG4gIGlkeCxcbiAgbWVhc3VyZVJlZixcbiAgZXhwYW5kZWQsXG4gIGhvdmVyZWQsXG4gIGNsaWNrYWJsZSxcbiAgb25DbGlja0ssXG4gIG9uRW50ZXJLLFxuICBvbkxlYXZlSyxcbiAgcmVuZGVySXRlbSxcbn06IFZpcnR1YWxJdGVtUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17bWVhc3VyZVJlZihrKX1cbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYmFja2dyb3VuZENvbG9yPXtleHBhbmRlZCA/ICd1c2VyTWVzc2FnZUJhY2tncm91bmRIb3ZlcicgOiB1bmRlZmluZWR9XG4gICAgICAvLyBiZyBoZXJlIG1hc2tzIHVzZVZpcnR1YWxTY3JvbGwncyBvbmUtZnJhbWUgb2Zmc2V0IGxhZyBvbiBleHBhbmQg4oCUXG4gICAgICAvLyBkb24ndCBtb3ZlIHRvIHRoZSBtYXJnaW5lZCBCb3ggaW5zaWRlLiBwYWRkaW5nQm90dG9tIG1pcnJvcnMgdGhlXG4gICAgICAvLyB0aW50ZWQgbWFyZ2luVG9wLlxuICAgICAgcGFkZGluZ0JvdHRvbT17ZXhwYW5kZWQgPyAxIDogdW5kZWZpbmVkfVxuICAgICAgb25DbGljaz17Y2xpY2thYmxlID8gZSA9PiBvbkNsaWNrSyhtc2csIGUuY2VsbElzQmxhbmspIDogdW5kZWZpbmVkfVxuICAgICAgb25Nb3VzZUVudGVyPXtjbGlja2FibGUgPyAoKSA9PiBvbkVudGVySyhrKSA6IHVuZGVmaW5lZH1cbiAgICAgIG9uTW91c2VMZWF2ZT17Y2xpY2thYmxlID8gKCkgPT4gb25MZWF2ZUsoaykgOiB1bmRlZmluZWR9XG4gICAgPlxuICAgICAgPFRleHRIb3ZlckNvbG9yQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17aG92ZXJlZCAmJiAhZXhwYW5kZWQgPyAndGV4dCcgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJJdGVtKG1zZywgaWR4KX1cbiAgICAgIDwvVGV4dEhvdmVyQ29sb3JDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaXJ0dWFsTWVzc2FnZUxpc3Qoe1xuICBtZXNzYWdlcyxcbiAgc2Nyb2xsUmVmLFxuICBjb2x1bW5zLFxuICBpdGVtS2V5LFxuICByZW5kZXJJdGVtLFxuICBvbkl0ZW1DbGljayxcbiAgaXNJdGVtQ2xpY2thYmxlLFxuICBpc0l0ZW1FeHBhbmRlZCxcbiAgZXh0cmFjdFNlYXJjaFRleHQgPSBkZWZhdWx0RXh0cmFjdFNlYXJjaFRleHQsXG4gIHRyYWNrU3RpY2t5UHJvbXB0LFxuICBzZWxlY3RlZEluZGV4LFxuICBjdXJzb3JOYXZSZWYsXG4gIHNldEN1cnNvcixcbiAganVtcFJlZixcbiAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlLFxuICBzY2FuRWxlbWVudCxcbiAgc2V0UG9zaXRpb25zLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBJbmNyZW1lbnRhbCBrZXkgYXJyYXkuIFN0cmVhbWluZyBhcHBlbmRzIG9uZSBtZXNzYWdlIGF0IGEgdGltZTsgcmVidWlsZGluZ1xuICAvLyB0aGUgZnVsbCBzdHJpbmcgYXJyYXkgb24gZXZlcnkgY29tbWl0IGFsbG9jYXRlcyBPKG4pIHBlciBtZXNzYWdlICh+MU1CXG4gIC8vIGNodXJuIGF0IDI3ayBtZXNzYWdlcykuIEFwcGVuZC1vbmx5IGRlbHRhIHB1c2ggd2hlbiB0aGUgcHJlZml4IG1hdGNoZXM7XG4gIC8vIGZhbGwgYmFjayB0byBmdWxsIHJlYnVpbGQgb24gY29tcGFjdGlvbiwgL2NsZWFyLCBvciBpdGVtS2V5IGNoYW5nZS5cbiAgY29uc3Qga2V5c1JlZiA9IHVzZVJlZjxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IHByZXZNZXNzYWdlc1JlZiA9IHVzZVJlZjx0eXBlb2YgbWVzc2FnZXM+KG1lc3NhZ2VzKVxuICBjb25zdCBwcmV2SXRlbUtleVJlZiA9IHVzZVJlZihpdGVtS2V5KVxuICBpZiAoXG4gICAgcHJldkl0ZW1LZXlSZWYuY3VycmVudCAhPT0gaXRlbUtleSB8fFxuICAgIG1lc3NhZ2VzLmxlbmd0aCA8IGtleXNSZWYuY3VycmVudC5sZW5ndGggfHxcbiAgICBtZXNzYWdlc1swXSAhPT0gcHJldk1lc3NhZ2VzUmVmLmN1cnJlbnRbMF1cbiAgKSB7XG4gICAga2V5c1JlZi5jdXJyZW50ID0gbWVzc2FnZXMubWFwKG0gPT4gaXRlbUtleShtKSlcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0ga2V5c1JlZi5jdXJyZW50Lmxlbmd0aDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzUmVmLmN1cnJlbnQucHVzaChpdGVtS2V5KG1lc3NhZ2VzW2ldISkpXG4gICAgfVxuICB9XG4gIHByZXZNZXNzYWdlc1JlZi5jdXJyZW50ID0gbWVzc2FnZXNcbiAgcHJldkl0ZW1LZXlSZWYuY3VycmVudCA9IGl0ZW1LZXlcbiAgY29uc3Qga2V5cyA9IGtleXNSZWYuY3VycmVudFxuICBjb25zdCB7XG4gICAgcmFuZ2UsXG4gICAgdG9wU3BhY2VyLFxuICAgIGJvdHRvbVNwYWNlcixcbiAgICBtZWFzdXJlUmVmLFxuICAgIHNwYWNlclJlZixcbiAgICBvZmZzZXRzLFxuICAgIGdldEl0ZW1Ub3AsXG4gICAgZ2V0SXRlbUVsZW1lbnQsXG4gICAgZ2V0SXRlbUhlaWdodCxcbiAgICBzY3JvbGxUb0luZGV4LFxuICB9ID0gdXNlVmlydHVhbFNjcm9sbChzY3JvbGxSZWYsIGtleXMsIGNvbHVtbnMpXG4gIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlXG5cbiAgLy8gVW5tZWFzdXJlZCAodW5kZWZpbmVkIGhlaWdodCkgZmFsbHMgdGhyb3VnaCDigJQgYXNzdW1lIHZpc2libGUuXG4gIGNvbnN0IGlzVmlzaWJsZSA9IHVzZUNhbGxiYWNrKFxuICAgIChpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGggPSBnZXRJdGVtSGVpZ2h0KGkpXG4gICAgICBpZiAoaCA9PT0gMCkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gaXNOYXZpZ2FibGVNZXNzYWdlKG1lc3NhZ2VzW2ldISlcbiAgICB9LFxuICAgIFtnZXRJdGVtSGVpZ2h0LCBtZXNzYWdlc10sXG4gIClcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShjdXJzb3JOYXZSZWYsICgpOiBNZXNzYWdlQWN0aW9uc05hdiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gKG06IE5hdmlnYWJsZU1lc3NhZ2UpID0+XG4gICAgICBzZXRDdXJzb3I/Lih7XG4gICAgICAgIHV1aWQ6IG0udXVpZCxcbiAgICAgICAgbXNnVHlwZTogbS50eXBlLFxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIHRvb2xOYW1lOiB0b29sQ2FsbE9mKG0pPy5uYW1lLFxuICAgICAgfSlcbiAgICBjb25zdCBzZWxJZHggPSBzZWxlY3RlZEluZGV4ID8/IC0xXG4gICAgY29uc3Qgc2NhbiA9IChcbiAgICAgIGZyb206IG51bWJlcixcbiAgICAgIGRpcjogMSB8IC0xLFxuICAgICAgcHJlZDogKGk6IG51bWJlcikgPT4gYm9vbGVhbiA9IGlzVmlzaWJsZSxcbiAgICApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBmcm9tOyBpID49IDAgJiYgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWQoaSkpIHtcbiAgICAgICAgICBzZWxlY3QobWVzc2FnZXNbaV0hKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBpc1VzZXIgPSAoaTogbnVtYmVyKSA9PiBpc1Zpc2libGUoaSkgJiYgbWVzc2FnZXNbaV0hLnR5cGUgPT09ICd1c2VyJ1xuICAgIHJldHVybiB7XG4gICAgICAvLyBFbnRyeSB2aWEgc2hpZnQr4oaRID0gc2FtZSBzZW1hbnRpYyBhcyBpbi1jdXJzb3Igc2hpZnQr4oaRIChwcmV2VXNlcikuXG4gICAgICBlbnRlckN1cnNvcjogKCkgPT4gc2NhbihtZXNzYWdlcy5sZW5ndGggLSAxLCAtMSwgaXNVc2VyKSxcbiAgICAgIG5hdmlnYXRlUHJldjogKCkgPT4gc2NhbihzZWxJZHggLSAxLCAtMSksXG4gICAgICBuYXZpZ2F0ZU5leHQ6ICgpID0+IHtcbiAgICAgICAgaWYgKHNjYW4oc2VsSWR4ICsgMSwgMSkpIHJldHVyblxuICAgICAgICAvLyBQYXN0IGxhc3QgdmlzaWJsZSDihpIgZXhpdCArIHJlcGluLiBMYXN0IG1lc3NhZ2UncyBUT1AgaXMgYXQgdmlld3BvcnRcbiAgICAgICAgLy8gdG9wIChzZWxlY3Rpb24tc2Nyb2xsIGVmZmVjdCk7IGl0cyBCT1RUT00gbWF5IGJlIGJlbG93IHRoZSBmb2xkLlxuICAgICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKVxuICAgICAgICBzZXRDdXJzb3I/LihudWxsKVxuICAgICAgfSxcbiAgICAgIC8vIHR5cGU6J3VzZXInIG9ubHkg4oCUIHF1ZXVlZF9jb21tYW5kIGF0dGFjaG1lbnRzIGxvb2sgbGlrZSBwcm9tcHRzIGJ1dCBoYXZlIG5vIHJhdyBVc2VyTWVzc2FnZSB0byByZXdpbmQgdG8uXG4gICAgICBuYXZpZ2F0ZVByZXZVc2VyOiAoKSA9PiBzY2FuKHNlbElkeCAtIDEsIC0xLCBpc1VzZXIpLFxuICAgICAgbmF2aWdhdGVOZXh0VXNlcjogKCkgPT4gc2NhbihzZWxJZHggKyAxLCAxLCBpc1VzZXIpLFxuICAgICAgbmF2aWdhdGVUb3A6ICgpID0+IHNjYW4oMCwgMSksXG4gICAgICBuYXZpZ2F0ZUJvdHRvbTogKCkgPT4gc2NhbihtZXNzYWdlcy5sZW5ndGggLSAxLCAtMSksXG4gICAgICBnZXRTZWxlY3RlZDogKCkgPT4gKHNlbElkeCA+PSAwID8gKG1lc3NhZ2VzW3NlbElkeF0gPz8gbnVsbCkgOiBudWxsKSxcbiAgICB9XG4gIH0sIFttZXNzYWdlcywgc2VsZWN0ZWRJbmRleCwgc2V0Q3Vyc29yLCBpc1Zpc2libGVdKVxuICAvLyBUd28tcGhhc2UganVtcCArIHNlYXJjaCBlbmdpbmUuIFJlYWQtdGhyb3VnaC1yZWYgc28gdGhlIGhhbmRsZSBzdGF5c1xuICAvLyBzdGFibGUgYWNyb3NzIHJlbmRlcnMg4oCUIG9mZnNldHMvbWVzc2FnZXMgaWRlbnRpdHkgY2hhbmdlcyBldmVyeSByZW5kZXIsXG4gIC8vIGNhbid0IGdvIGluIHVzZUltcGVyYXRpdmVIYW5kbGUgZGVwcyB3aXRob3V0IHJlY3JlYXRpbmcgdGhlIGhhbmRsZS5cbiAgY29uc3QganVtcFN0YXRlID0gdXNlUmVmKHtcbiAgICBvZmZzZXRzLFxuICAgIHN0YXJ0LFxuICAgIGdldEl0ZW1FbGVtZW50LFxuICAgIGdldEl0ZW1Ub3AsXG4gICAgbWVzc2FnZXMsXG4gICAgc2Nyb2xsVG9JbmRleCxcbiAgfSlcbiAganVtcFN0YXRlLmN1cnJlbnQgPSB7XG4gICAgb2Zmc2V0cyxcbiAgICBzdGFydCxcbiAgICBnZXRJdGVtRWxlbWVudCxcbiAgICBnZXRJdGVtVG9wLFxuICAgIG1lc3NhZ2VzLFxuICAgIHNjcm9sbFRvSW5kZXgsXG4gIH1cblxuICAvLyBLZWVwIGN1cnNvci1zZWxlY3RlZCBtZXNzYWdlIHZpc2libGUuIG9mZnNldHMgcmVidWlsZHMgZXZlcnkgcmVuZGVyXG4gIC8vIOKAlCBhcyBhIGJhcmUgZGVwIHRoaXMgcmUtcGlubmVkIG9uIGV2ZXJ5IG1vdXNld2hlZWwgdGljay4gUmVhZCB0aHJvdWdoXG4gIC8vIGp1bXBTdGF0ZSBpbnN0ZWFkOyBwYXN0LW92ZXJzY2FuIGp1bXBzIGxhbmQgdmlhIHNjcm9sbFRvSW5kZXgsIG5leHRcbiAgLy8gbmF2IGlzIHByZWNpc2UuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgY29uc3QgcyA9IGp1bXBTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgZWwgPSBzLmdldEl0ZW1FbGVtZW50KHNlbGVjdGVkSW5kZXgpXG4gICAgaWYgKGVsKSB7XG4gICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG9FbGVtZW50KGVsLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBzLnNjcm9sbFRvSW5kZXgoc2VsZWN0ZWRJbmRleClcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEluZGV4LCBzY3JvbGxSZWZdKVxuXG4gIC8vIFBlbmRpbmcgc2VlayByZXF1ZXN0LiBqdW1wKCkgc2V0cyB0aGlzICsgYnVtcHMgc2Vla0dlbi4gVGhlIHNlZWtcbiAgLy8gZWZmZWN0IGZpcmVzIHBvc3QtcGFpbnQgKHBhc3NpdmUgZWZmZWN0IOKAlCBhZnRlciByZXNldEFmdGVyQ29tbWl0KSxcbiAgLy8gY2hlY2tzIGlmIHRhcmdldCBpcyBtb3VudGVkLiBZZXMg4oaSIHNjYW4raGlnaGxpZ2h0LiBObyDihpIgcmUtZXN0aW1hdGVcbiAgLy8gd2l0aCBhIGZyZXNoZXIgYW5jaG9yIChzdGFydCBtb3ZlZCB0b3dhcmQgaWR4KSBhbmQgc2Nyb2xsVG8gYWdhaW4uXG4gIGNvbnN0IHNjYW5SZXF1ZXN0UmVmID0gdXNlUmVmPHtcbiAgICBpZHg6IG51bWJlclxuICAgIHdhbnRMYXN0OiBib29sZWFuXG4gICAgdHJpZXM6IG51bWJlclxuICB9IHwgbnVsbD4obnVsbClcbiAgLy8gTWVzc2FnZS1yZWxhdGl2ZSBwb3NpdGlvbnMgZnJvbSBzY2FuRWxlbWVudC4gUm93IDAgPSBtZXNzYWdlIHRvcC5cbiAgLy8gU3RhYmxlIGFjcm9zcyBzY3JvbGwg4oCUIGhpZ2hsaWdodCBjb21wdXRlcyByb3dPZmZzZXQgZnJlc2guIG1zZ0lkeFxuICAvLyBmb3IgY29tcHV0aW5nIHJvd09mZnNldCA9IGdldEl0ZW1Ub3AobXNnSWR4KSAtIHNjcm9sbFRvcC5cbiAgY29uc3QgZWxlbWVudFBvc2l0aW9ucyA9IHVzZVJlZjx7XG4gICAgbXNnSWR4OiBudW1iZXJcbiAgICBwb3NpdGlvbnM6IE1hdGNoUG9zaXRpb25bXVxuICB9Pih7IG1zZ0lkeDogLTEsIHBvc2l0aW9uczogW10gfSlcbiAgLy8gV3JhcGFyb3VuZCBndWFyZC4gQXV0by1hZHZhbmNlIHN0b3BzIGlmIHB0ciB3cmFwcyBiYWNrIHRvIGhlcmUuXG4gIGNvbnN0IHN0YXJ0UHRyUmVmID0gdXNlUmVmKC0xKVxuICAvLyBQaGFudG9tLWJ1cnN0IGNhcC4gUmVzZXRzIG9uIHNjYW4gc3VjY2Vzcy5cbiAgY29uc3QgcGhhbnRvbUJ1cnN0UmVmID0gdXNlUmVmKDApXG4gIC8vIE9uZS1kZWVwIHF1ZXVlOiBuL04gYXJyaXZpbmcgbWlkLXNlZWsgZ2V0cyBzdG9yZWQgKG5vdCBkcm9wcGVkKSBhbmRcbiAgLy8gZmlyZXMgYWZ0ZXIgdGhlIHNlZWsgY29tcGxldGVzLiBIb2xkaW5nIG4gc3RheXMgc21vb3RoIHdpdGhvdXRcbiAgLy8gcXVldWVpbmcgMzAganVtcHMuIExhdGVzdCBwcmVzcyBvdmVyd3JpdGVzIOKAlCB3ZSB3YW50IHRoZSBkaXJlY3Rpb25cbiAgLy8gdGhlIHVzZXIgaXMgZ29pbmcgTk9XLCBub3Qgd2hlcmUgdGhleSB3ZXJlIDEwIGtleXByZXNzZXMgYWdvLlxuICBjb25zdCBwZW5kaW5nU3RlcFJlZiA9IHVzZVJlZjwxIHwgLTEgfCAwPigwKVxuICAvLyBzdGVwICsgaGlnaGxpZ2h0IHZpYSByZWYgc28gdGhlIHNlZWsgZWZmZWN0IHJlYWRzIGxhdGVzdCB3aXRob3V0XG4gIC8vIGNsb3N1cmUtY2FwdHVyZSBvciBkZXBzIGNodXJuLlxuICBjb25zdCBzdGVwUmVmID0gdXNlUmVmPChkOiAxIHwgLTEpID0+IHZvaWQ+KCgpID0+IHt9KVxuICBjb25zdCBoaWdobGlnaHRSZWYgPSB1c2VSZWY8KG9yZDogbnVtYmVyKSA9PiB2b2lkPigoKSA9PiB7fSlcbiAgY29uc3Qgc2VhcmNoU3RhdGUgPSB1c2VSZWYoe1xuICAgIG1hdGNoZXM6IFtdIGFzIG51bWJlcltdLCAvLyBkZWR1cGxpY2F0ZWQgbXNnIGluZGljZXNcbiAgICBwdHI6IDAsXG4gICAgc2NyZWVuT3JkOiAwLFxuICAgIC8vIEN1bXVsYXRpdmUgZW5naW5lLW9jY3VycmVuY2UgY291bnQgYmVmb3JlIGVhY2ggbWF0Y2hlc1trXS4gTGV0cyB1c1xuICAgIC8vIGNvbXB1dGUgYSBnbG9iYWwgY3VycmVudCBpbmRleDogcHJlZml4U3VtW3B0cl0gKyBzY3JlZW5PcmQgKyAxLlxuICAgIC8vIEVuZ2luZS1jb3VudGVkIChpbmRleE9mIG9uIGV4dHJhY3RTZWFyY2hUZXh0KSwgbm90IHJlbmRlci1jb3VudGVkIOKAlFxuICAgIC8vIGNsb3NlIGVub3VnaCBmb3IgdGhlIGJhZGdlOyBleGFjdCBjb3VudHMgd291bGQgbmVlZCBzY2FuRWxlbWVudCBvblxuICAgIC8vIGV2ZXJ5IG1hdGNoZWQgbWVzc2FnZSAofjEtM21zIMOXIE4pLiB0b3RhbCA9IHByZWZpeFN1bVttYXRjaGVzLmxlbmd0aF0uXG4gICAgcHJlZml4U3VtOiBbXSBhcyBudW1iZXJbXSxcbiAgfSlcbiAgLy8gc2Nyb2xsVG9wIGF0IHRoZSBtb21lbnQgLyB3YXMgcHJlc3NlZC4gSW5jc2VhcmNoIHByZXZpZXctanVtcHMgc25hcFxuICAvLyBiYWNrIGhlcmUgd2hlbiBtYXRjaGVzIGRyb3AgdG8gMC4gLTEgPSBubyBhbmNob3IgKGJlZm9yZSBmaXJzdCAvKS5cbiAgY29uc3Qgc2VhcmNoQW5jaG9yID0gdXNlUmVmKC0xKVxuICBjb25zdCBpbmRleFdhcm1lZCA9IHVzZVJlZihmYWxzZSlcblxuICAvLyBTY3JvbGwgdGFyZ2V0IGZvciBtZXNzYWdlIGk6IGxhbmQgYXQgTUVTU0FHRSBUT1AuIGVzdCA9IHRvcCAtIEhFQURST09NXG4gIC8vIHNvIGxvID0gdG9wIC0gZXN0ID0gSEVBRFJPT00g4omlIDAgKG9yIGxvID0gdG9wIGlmIGVzdCBjbGFtcGVkIHRvIDApLlxuICAvLyBQb3N0LWNsYW1wIHJlYWQtYmFjayBpbiBqdW1wKCkgaGFuZGxlcyB0aGUgc2Nyb2xsSGVpZ2h0IGJvdW5kYXJ5LlxuICAvLyBObyBmcmFjIChyZW5kZXIgdHJhbnNmb3JtIGRpZG4ndCByZXNwZWN0IGl0KSwgbm8gbW9ub3RvbmUgY2xhbXBcbiAgLy8gKHdhcyBhIHNhZmV0eSBuZXQgZm9yIGZyYWMgZ2FyYmFnZSDigJQgd2l0aG91dCBmcmFjLCBlc3QgSVMgdGhlIG5leHRcbiAgLy8gbWVzc2FnZSdzIHRvcCwgc3BhbS1uL04gY29udmVyZ2VzIGJlY2F1c2UgbWVzc2FnZSB0b3BzIGFyZSBvcmRlcmVkKS5cbiAgZnVuY3Rpb24gdGFyZ2V0Rm9yKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdG9wID0ganVtcFN0YXRlLmN1cnJlbnQuZ2V0SXRlbVRvcChpKVxuICAgIHJldHVybiBNYXRoLm1heCgwLCB0b3AgLSBIRUFEUk9PTSlcbiAgfVxuXG4gIC8vIEhpZ2hsaWdodCBwb3NpdGlvbnNbb3JkXS4gUG9zaXRpb25zIGFyZSBNRVNTQUdFLVJFTEFUSVZFIChyb3cgMCA9XG4gIC8vIGVsZW1lbnQgdG9wLCBmcm9tIHNjYW5FbGVtZW50KS4gQ29tcHV0ZSByb3dPZmZzZXQgPSBnZXRJdGVtVG9wIC1cbiAgLy8gc2Nyb2xsVG9wIGZyZXNoLiBJZiBvcmQncyBwb3NpdGlvbiBpcyBvZmYtdmlld3BvcnQsIHNjcm9sbCB0byBicmluZ1xuICAvLyBpdCBpbiwgcmVjb21wdXRlIHJvd09mZnNldC4gc2V0UG9zaXRpb25zIHRyaWdnZXJzIG92ZXJsYXkgd3JpdGUuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodChvcmQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHMgPSBzY3JvbGxSZWYuY3VycmVudFxuICAgIGNvbnN0IHsgbXNnSWR4LCBwb3NpdGlvbnMgfSA9IGVsZW1lbnRQb3NpdGlvbnMuY3VycmVudFxuICAgIGlmICghcyB8fCBwb3NpdGlvbnMubGVuZ3RoID09PSAwIHx8IG1zZ0lkeCA8IDApIHtcbiAgICAgIHNldFBvc2l0aW9ucz8uKG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaWR4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ob3JkLCBwb3NpdGlvbnMubGVuZ3RoIC0gMSkpXG4gICAgY29uc3QgcCA9IHBvc2l0aW9uc1tpZHhdIVxuICAgIGNvbnN0IHRvcCA9IGp1bXBTdGF0ZS5jdXJyZW50LmdldEl0ZW1Ub3AobXNnSWR4KVxuICAgIC8vIGxvID0gaXRlbSdzIHBvc2l0aW9uIHdpdGhpbiBzY3JvbGwgY29udGVudCAod3JhcHBlci1yZWxhdGl2ZSkuXG4gICAgLy8gdmlld3BvcnRUb3AgPSB3aGVyZSB0aGUgc2Nyb2xsIGNvbnRlbnQgc3RhcnRzIG9uIFNDUkVFTiAoYWZ0ZXJcbiAgICAvLyBTY3JvbGxCb3ggcGFkZGluZy9ib3JkZXIgKyBhbnkgY2hyb21lIGFib3ZlKS4gSGlnaGxpZ2h0IHdyaXRlcyB0b1xuICAgIC8vIHNjcmVlbi1hYnNvbHV0ZSwgc28gcm93T2Zmc2V0ID0gdmlld3BvcnRUb3AgKyBsby4gT2JzZXJ2ZWQ6IG9mZi1ieS1cbiAgICAvLyAxKyB3aXRob3V0IHZpZXdwb3J0VG9wIChGdWxsc2NyZWVuTGF5b3V0IGhhcyBwYWRkaW5nVG9wPTEgb24gdGhlXG4gICAgLy8gU2Nyb2xsQm94LCBwbHVzIGFueSBoZWFkZXIgYWJvdmUpLlxuICAgIGNvbnN0IHZwVG9wID0gcy5nZXRWaWV3cG9ydFRvcCgpXG4gICAgbGV0IGxvID0gdG9wIC0gcy5nZXRTY3JvbGxUb3AoKVxuICAgIGNvbnN0IHZwID0gcy5nZXRWaWV3cG9ydEhlaWdodCgpXG4gICAgbGV0IHNjcmVlblJvdyA9IHZwVG9wICsgbG8gKyBwLnJvd1xuICAgIC8vIE9mZiB2aWV3cG9ydCDihpIgc2Nyb2xsIHRvIGJyaW5nIGl0IGluIChIRUFEUk9PTSBmcm9tIHRvcCkuXG4gICAgLy8gc2Nyb2xsVG8gY29tbWl0cyBzeW5jOyByZWFkLWJhY2sgYWZ0ZXIgZ2l2ZXMgZnJlc2ggbG8uXG4gICAgaWYgKHNjcmVlblJvdyA8IHZwVG9wIHx8IHNjcmVlblJvdyA+PSB2cFRvcCArIHZwKSB7XG4gICAgICBzLnNjcm9sbFRvKE1hdGgubWF4KDAsIHRvcCArIHAucm93IC0gSEVBRFJPT00pKVxuICAgICAgbG8gPSB0b3AgLSBzLmdldFNjcm9sbFRvcCgpXG4gICAgICBzY3JlZW5Sb3cgPSB2cFRvcCArIGxvICsgcC5yb3dcbiAgICB9XG4gICAgc2V0UG9zaXRpb25zPy4oeyBwb3NpdGlvbnMsIHJvd09mZnNldDogdnBUb3AgKyBsbywgY3VycmVudElkeDogaWR4IH0pXG4gICAgLy8gQmFkZ2U6IGdsb2JhbCBjdXJyZW50ID0gc3VtIG9mIG9jY3VycmVuY2VzIGJlZm9yZSB0aGlzIG1zZyArIG9yZCsxLlxuICAgIC8vIHByZWZpeFN1bVtwdHJdIGlzIGVuZ2luZS1jb3VudGVkIChpbmRleE9mIG9uIGV4dHJhY3RTZWFyY2hUZXh0KTtcbiAgICAvLyBtYXkgZHJpZnQgZnJvbSByZW5kZXItY291bnQgZm9yIGdob3N0IG1lc3NhZ2VzIGJ1dCBjbG9zZSBlbm91Z2gg4oCUXG4gICAgLy8gYmFkZ2UgaXMgYSByb3VnaCBsb2NhdGlvbiBoaW50LCBub3QgYSBwcm9vZi5cbiAgICBjb25zdCBzdCA9IHNlYXJjaFN0YXRlLmN1cnJlbnRcbiAgICBjb25zdCB0b3RhbCA9IHN0LnByZWZpeFN1bS5hdCgtMSkgPz8gMFxuICAgIGNvbnN0IGN1cnJlbnQgPSAoc3QucHJlZml4U3VtW3N0LnB0cl0gPz8gMCkgKyBpZHggKyAxXG4gICAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlPy4odG90YWwsIGN1cnJlbnQpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYGhpZ2hsaWdodChpPSR7bXNnSWR4fSwgb3JkPSR7aWR4fS8ke3Bvc2l0aW9ucy5sZW5ndGh9KTogYCArXG4gICAgICAgIGBwb3M9e3Jvdzoke3Aucm93fSxjb2w6JHtwLmNvbH19IGxvPSR7bG99IHNjcmVlblJvdz0ke3NjcmVlblJvd30gYCArXG4gICAgICAgIGBiYWRnZT0ke2N1cnJlbnR9LyR7dG90YWx9YCxcbiAgICApXG4gIH1cbiAgaGlnaGxpZ2h0UmVmLmN1cnJlbnQgPSBoaWdobGlnaHRcblxuICAvLyBTZWVrIGVmZmVjdC4ganVtcCgpIHNldHMgc2NhblJlcXVlc3RSZWYgKyBzY3JvbGxUb0luZGV4ICsgYnVtcC5cbiAgLy8gYnVtcCDihpIgcmUtcmVuZGVyIOKGkiB1c2VWaXJ0dWFsU2Nyb2xsIG1vdW50cyB0aGUgdGFyZ2V0IChzY3JvbGxUb0luZGV4XG4gIC8vIGd1YXJhbnRlZXMgdGhpcyDigJQgc2Nyb2xsVG9wIGFuZCB0b3BTcGFjZXIgYWdyZWUgdmlhIHRoZSBzYW1lXG4gIC8vIG9mZnNldHMgdmFsdWUpIOKGkiByZXNldEFmdGVyQ29tbWl0IHBhaW50cyDihpIgdGhpcyBwYXNzaXZlIGVmZmVjdFxuICAvLyBmaXJlcyBQT1NULVBBSU5UIHdpdGggdGhlIGVsZW1lbnQgbW91bnRlZC4gUHJlY2lzZSBzY3JvbGxUbyArIHNjYW4uXG4gIC8vXG4gIC8vIERlcCBpcyBPTkxZIHNlZWtHZW4g4oCUIGVmZmVjdCBkb2Vzbid0IHJlLXJ1biBvbiByYW5kb20gcmVuZGVyc1xuICAvLyAob25TZWFyY2hNYXRjaGVzQ2hhbmdlIGNodXJuIGR1cmluZyBpbmNzZWFyY2gpLlxuICBjb25zdCBbc2Vla0dlbiwgc2V0U2Vla0dlbl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBidW1wU2VlayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNlZWtHZW4oZyA9PiBnICsgMSksIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVxID0gc2NhblJlcXVlc3RSZWYuY3VycmVudFxuICAgIGlmICghcmVxKSByZXR1cm5cbiAgICBjb25zdCB7IGlkeCwgd2FudExhc3QsIHRyaWVzIH0gPSByZXFcbiAgICBjb25zdCBzID0gc2Nyb2xsUmVmLmN1cnJlbnRcbiAgICBpZiAoIXMpIHJldHVyblxuICAgIGNvbnN0IHsgZ2V0SXRlbUVsZW1lbnQsIGdldEl0ZW1Ub3AsIHNjcm9sbFRvSW5kZXggfSA9IGp1bXBTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgZWwgPSBnZXRJdGVtRWxlbWVudChpZHgpXG4gICAgY29uc3QgaCA9IGVsPy55b2dhTm9kZT8uZ2V0Q29tcHV0ZWRIZWlnaHQoKSA/PyAwXG5cbiAgICBpZiAoIWVsIHx8IGggPT09IDApIHtcbiAgICAgIC8vIE5vdCBtb3VudGVkIGFmdGVyIHNjcm9sbFRvSW5kZXguIFNob3VsZG4ndCBoYXBwZW4g4oCUIHNjcm9sbFRvSW5kZXhcbiAgICAgIC8vIGd1YXJhbnRlZXMgbW91bnQgYnkgY29uc3RydWN0aW9uIChzY3JvbGxUb3AgYW5kIHRvcFNwYWNlciBhZ3JlZVxuICAgICAgLy8gdmlhIHRoZSBzYW1lIG9mZnNldHMgdmFsdWUpLiBTYW5pdHk6IHJldHJ5IG9uY2UsIHRoZW4gc2tpcC5cbiAgICAgIGlmICh0cmllcyA+IDEpIHtcbiAgICAgICAgc2NhblJlcXVlc3RSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBzZWVrKGk9JHtpZHh9KTogbm8gbW91bnQgYWZ0ZXIgc2Nyb2xsVG9JbmRleCwgc2tpcGApXG4gICAgICAgIHN0ZXBSZWYuY3VycmVudCh3YW50TGFzdCA/IC0xIDogMSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzY2FuUmVxdWVzdFJlZi5jdXJyZW50ID0geyBpZHgsIHdhbnRMYXN0LCB0cmllczogdHJpZXMgKyAxIH1cbiAgICAgIHNjcm9sbFRvSW5kZXgoaWR4KVxuICAgICAgYnVtcFNlZWsoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2NhblJlcXVlc3RSZWYuY3VycmVudCA9IG51bGxcbiAgICAvLyBQcmVjaXNlIHNjcm9sbFRvIOKAlCBzY3JvbGxUb0luZGV4IGdvdCB1cyBpbiB0aGUgbmVpZ2hib3Job29kXG4gICAgLy8gKGl0ZW0gaXMgbW91bnRlZCwgbWF5YmUgYSBmZXctZG96ZW4gcm93cyBvZmYgZHVlIHRvIG92ZXJzY2FuXG4gICAgLy8gZXN0aW1hdGUgZHJpZnQpLiBOb3cgbGFuZCBpdCBhdCB0b3AtSEVBRFJPT00uXG4gICAgcy5zY3JvbGxUbyhNYXRoLm1heCgwLCBnZXRJdGVtVG9wKGlkeCkgLSBIRUFEUk9PTSkpXG4gICAgY29uc3QgcG9zaXRpb25zID0gc2NhbkVsZW1lbnQ/LihlbCkgPz8gW11cbiAgICBlbGVtZW50UG9zaXRpb25zLmN1cnJlbnQgPSB7IG1zZ0lkeDogaWR4LCBwb3NpdGlvbnMgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgc2VlayhpPSR7aWR4fSB0PSR7dHJpZXN9KTogJHtwb3NpdGlvbnMubGVuZ3RofSBwb3NpdGlvbnNgKVxuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBQaGFudG9tIOKAlCBlbmdpbmUgbWF0Y2hlZCwgcmVuZGVyIGRpZG4ndC4gQXV0by1hZHZhbmNlLlxuICAgICAgaWYgKCsrcGhhbnRvbUJ1cnN0UmVmLmN1cnJlbnQgPiAyMCkge1xuICAgICAgICBwaGFudG9tQnVyc3RSZWYuY3VycmVudCA9IDBcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzdGVwUmVmLmN1cnJlbnQod2FudExhc3QgPyAtMSA6IDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcGhhbnRvbUJ1cnN0UmVmLmN1cnJlbnQgPSAwXG4gICAgY29uc3Qgb3JkID0gd2FudExhc3QgPyBwb3NpdGlvbnMubGVuZ3RoIC0gMSA6IDBcbiAgICBzZWFyY2hTdGF0ZS5jdXJyZW50LnNjcmVlbk9yZCA9IG9yZFxuICAgIHN0YXJ0UHRyUmVmLmN1cnJlbnQgPSAtMVxuICAgIGhpZ2hsaWdodFJlZi5jdXJyZW50KG9yZClcbiAgICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ1N0ZXBSZWYuY3VycmVudFxuICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nU3RlcFJlZi5jdXJyZW50ID0gMFxuICAgICAgc3RlcFJlZi5jdXJyZW50KHBlbmRpbmcpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3NlZWtHZW5dKVxuXG4gIC8vIFNjcm9sbCB0byBtZXNzYWdlIGkncyB0b3AsIGFybSBzY2FuUGVuZGluZy4gc2Nhbi1lZmZlY3QgcmVhZHMgZnJlc2hcbiAgLy8gc2NyZWVuIG5leHQgdGljay4gd2FudExhc3Q6IE4taW50by1tZXNzYWdlIOKAlCBzY3JlZW5PcmQgPSBsZW5ndGgtMS5cbiAgZnVuY3Rpb24ganVtcChpOiBudW1iZXIsIHdhbnRMYXN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgaWYgKCFzKSByZXR1cm5cbiAgICBjb25zdCBqcyA9IGp1bXBTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgeyBnZXRJdGVtRWxlbWVudCwgc2Nyb2xsVG9JbmRleCB9ID0ganNcbiAgICAvLyBvZmZzZXRzIGlzIGEgRmxvYXQ2NEFycmF5IHdob3NlIC5sZW5ndGggaXMgdGhlIGFsbG9jYXRlZCBidWZmZXIgKG9ubHlcbiAgICAvLyBncm93cykg4oCUIG1lc3NhZ2VzLmxlbmd0aCBpcyB0aGUgbG9naWNhbCBpdGVtIGNvdW50LlxuICAgIGlmIChpIDwgMCB8fCBpID49IGpzLm1lc3NhZ2VzLmxlbmd0aCkgcmV0dXJuXG4gICAgLy8gQ2xlYXIgc3RhbGUgaGlnaGxpZ2h0IGJlZm9yZSBzY3JvbGwuIEJldHdlZW4gbm93IGFuZCB0aGUgc2Vla1xuICAgIC8vIGVmZmVjdCdzIGhpZ2hsaWdodCwgaW52ZXJzZS1vbmx5IGZyb20gc2Nhbi1oaWdobGlnaHQgc2hvd3MuXG4gICAgc2V0UG9zaXRpb25zPy4obnVsbClcbiAgICBlbGVtZW50UG9zaXRpb25zLmN1cnJlbnQgPSB7IG1zZ0lkeDogLTEsIHBvc2l0aW9uczogW10gfVxuICAgIHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnQgPSB7IGlkeDogaSwgd2FudExhc3QsIHRyaWVzOiAwIH1cbiAgICBjb25zdCBlbCA9IGdldEl0ZW1FbGVtZW50KGkpXG4gICAgY29uc3QgaCA9IGVsPy55b2dhTm9kZT8uZ2V0Q29tcHV0ZWRIZWlnaHQoKSA/PyAwXG4gICAgLy8gTW91bnRlZCDihpIgcHJlY2lzZSBzY3JvbGxUby4gVW5tb3VudGVkIOKGkiBzY3JvbGxUb0luZGV4IG1vdW50cyBpdFxuICAgIC8vIChzY3JvbGxUb3AgYW5kIHRvcFNwYWNlciBhZ3JlZSB2aWEgdGhlIHNhbWUgb2Zmc2V0cyB2YWx1ZSDigJQgZXhhY3RcbiAgICAvLyBieSBjb25zdHJ1Y3Rpb24sIG5vIGVzdGltYXRpb24pLiBTZWVrIGVmZmVjdCBkb2VzIHRoZSBwcmVjaXNlXG4gICAgLy8gc2Nyb2xsVG8gYWZ0ZXIgcGFpbnQgZWl0aGVyIHdheS5cbiAgICBpZiAoZWwgJiYgaCA+IDApIHtcbiAgICAgIHMuc2Nyb2xsVG8odGFyZ2V0Rm9yKGkpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0luZGV4KGkpXG4gICAgfVxuICAgIGJ1bXBTZWVrKClcbiAgfVxuXG4gIC8vIEFkdmFuY2Ugc2NyZWVuT3JkIHdpdGhpbiBlbGVtZW50UG9zaXRpb25zLiBFeGhhdXN0ZWQg4oaSIHB0ciBhZHZhbmNlcyxcbiAgLy8ganVtcCB0byBuZXh0IG1hdGNoZXNbcHRyXSwgcmUtc2Nhbi4gUGhhbnRvbSAoc2NhbiBmb3VuZCAwIGFmdGVyXG4gIC8vIGp1bXApIHRyaWdnZXJzIGF1dG8tYWR2YW5jZSBmcm9tIHNjYW4tZWZmZWN0LiBXcmFwYXJvdW5kIGd1YXJkIHN0b3BzXG4gIC8vIGlmIGV2ZXJ5IG1lc3NhZ2UgaXMgYSBwaGFudG9tLlxuICBmdW5jdGlvbiBzdGVwKGRlbHRhOiAxIHwgLTEpOiB2b2lkIHtcbiAgICBjb25zdCBzdCA9IHNlYXJjaFN0YXRlLmN1cnJlbnRcbiAgICBjb25zdCB7IG1hdGNoZXMsIHByZWZpeFN1bSB9ID0gc3RcbiAgICBjb25zdCB0b3RhbCA9IHByZWZpeFN1bS5hdCgtMSkgPz8gMFxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAvLyBTZWVrIGluLWZsaWdodCDigJQgcXVldWUgdGhpcyBwcmVzcyAob25lLWRlZXAsIGxhdGVzdCBvdmVyd3JpdGVzKS5cbiAgICAvLyBUaGUgc2VlayBlZmZlY3QgZmlyZXMgaXQgYWZ0ZXIgaGlnaGxpZ2h0LlxuICAgIGlmIChzY2FuUmVxdWVzdFJlZi5jdXJyZW50KSB7XG4gICAgICBwZW5kaW5nU3RlcFJlZi5jdXJyZW50ID0gZGVsdGFcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzdGFydFB0clJlZi5jdXJyZW50IDwgMCkgc3RhcnRQdHJSZWYuY3VycmVudCA9IHN0LnB0clxuXG4gICAgY29uc3QgeyBwb3NpdGlvbnMgfSA9IGVsZW1lbnRQb3NpdGlvbnMuY3VycmVudFxuICAgIGNvbnN0IG5ld09yZCA9IHN0LnNjcmVlbk9yZCArIGRlbHRhXG4gICAgaWYgKG5ld09yZCA+PSAwICYmIG5ld09yZCA8IHBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHN0LnNjcmVlbk9yZCA9IG5ld09yZFxuICAgICAgaGlnaGxpZ2h0KG5ld09yZCkgLy8gdXBkYXRlcyBiYWRnZSBpbnRlcm5hbGx5XG4gICAgICBzdGFydFB0clJlZi5jdXJyZW50ID0gLTFcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEV4aGF1c3RlZCB2aXNpYmxlLiBBZHZhbmNlIHB0ciDihpIganVtcCDihpIgcmUtc2Nhbi5cbiAgICBjb25zdCBwdHIgPSAoc3QucHRyICsgZGVsdGEgKyBtYXRjaGVzLmxlbmd0aCkgJSBtYXRjaGVzLmxlbmd0aFxuICAgIGlmIChwdHIgPT09IHN0YXJ0UHRyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFBvc2l0aW9ucz8uKG51bGwpXG4gICAgICBzdGFydFB0clJlZi5jdXJyZW50ID0gLTFcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYHN0ZXA6IHdyYXBhcm91bmQgYXQgcHRyPSR7cHRyfSwgYWxsICR7bWF0Y2hlcy5sZW5ndGh9IG1zZ3MgcGhhbnRvbXNgLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN0LnB0ciA9IHB0clxuICAgIHN0LnNjcmVlbk9yZCA9IDAgLy8gcmVzb2x2ZWQgYWZ0ZXIgc2NhbiAod2FudExhc3Qg4oaSIGxlbmd0aC0xKVxuICAgIGp1bXAobWF0Y2hlc1twdHJdISwgZGVsdGEgPCAwKVxuICAgIC8vIHNjcmVlbk9yZCB3aWxsIHJlc29sdmUgYWZ0ZXIgc2Nhbi4gQmVzdC1lZmZvcnQ6IHByZWZpeFN1bVtwdHJdICsgMFxuICAgIC8vIGZvciBuIChmaXJzdCBwb3MpLCBwcmVmaXhTdW1bcHRyKzFdIGZvciBOIChsYXN0IHBvcyA9IGNvdW50LTEpLlxuICAgIC8vIFRoZSBzY2FuLWVmZmVjdCdzIGhpZ2hsaWdodCB3aWxsIGJlIHRoZSByZWFsIHZhbHVlOyB0aGlzIGlzIGFcbiAgICAvLyBwcmUtc2NhbiBwbGFjZWhvbGRlciBzbyB0aGUgYmFkZ2UgdXBkYXRlcyBpbW1lZGlhdGVseS5cbiAgICBjb25zdCBwbGFjZWhvbGRlciA9XG4gICAgICBkZWx0YSA8IDAgPyAocHJlZml4U3VtW3B0ciArIDFdID8/IHRvdGFsKSA6IHByZWZpeFN1bVtwdHJdISArIDFcbiAgICBvblNlYXJjaE1hdGNoZXNDaGFuZ2U/Lih0b3RhbCwgcGxhY2Vob2xkZXIpXG4gIH1cbiAgc3RlcFJlZi5jdXJyZW50ID0gc3RlcFxuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUoXG4gICAganVtcFJlZixcbiAgICAoKSA9PiAoe1xuICAgICAgLy8gTm9uLXNlYXJjaCBqdW1wIChzdGlja3kgaGVhZGVyIGNsaWNrLCBldGMpLiBObyBzY2FuLCBubyBwb3NpdGlvbnMuXG4gICAgICBqdW1wVG9JbmRleDogKGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBzID0gc2Nyb2xsUmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKHMpIHMuc2Nyb2xsVG8odGFyZ2V0Rm9yKGkpKVxuICAgICAgfSxcbiAgICAgIHNldFNlYXJjaFF1ZXJ5OiAocTogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIE5ldyBzZWFyY2ggaW52YWxpZGF0ZXMgZXZlcnl0aGluZy5cbiAgICAgICAgc2NhblJlcXVlc3RSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgZWxlbWVudFBvc2l0aW9ucy5jdXJyZW50ID0geyBtc2dJZHg6IC0xLCBwb3NpdGlvbnM6IFtdIH1cbiAgICAgICAgc3RhcnRQdHJSZWYuY3VycmVudCA9IC0xXG4gICAgICAgIHNldFBvc2l0aW9ucz8uKG51bGwpXG4gICAgICAgIGNvbnN0IGxxID0gcS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8vIE9uZSBlbnRyeSBwZXIgTUVTU0FHRSAoZGVkdXBsaWNhdGVkKS4gQm9vbGVhbiBcImRvZXMgdGhpcyBtc2dcbiAgICAgICAgLy8gY29udGFpbiB0aGUgcXVlcnlcIi4gfjEwbXMgZm9yIDlrIG1lc3NhZ2VzIHdpdGggY2FjaGVkIGxvd2VyZWQuXG4gICAgICAgIGNvbnN0IG1hdGNoZXM6IG51bWJlcltdID0gW11cbiAgICAgICAgLy8gUGVyLW1lc3NhZ2Ugb2NjdXJyZW5jZSBjb3VudCDihpIgcHJlZml4U3VtIGZvciBnbG9iYWwgY3VycmVudFxuICAgICAgICAvLyBpbmRleC4gRW5naW5lLWNvdW50ZWQgKGNoZWFwIGluZGV4T2YgbG9vcCk7IG1heSBkaWZmZXIgZnJvbVxuICAgICAgICAvLyByZW5kZXItY291bnQgKHNjYW5FbGVtZW50KSBmb3IgZ2hvc3QvcGhhbnRvbSBtZXNzYWdlcyBidXQgY2xvc2VcbiAgICAgICAgLy8gZW5vdWdoIGZvciB0aGUgYmFkZ2UuIFRoZSBiYWRnZSBpcyBhIHJvdWdoIGxvY2F0aW9uIGhpbnQuXG4gICAgICAgIGNvbnN0IHByZWZpeFN1bTogbnVtYmVyW10gPSBbMF1cbiAgICAgICAgaWYgKGxxKSB7XG4gICAgICAgICAgY29uc3QgbXNncyA9IGp1bXBTdGF0ZS5jdXJyZW50Lm1lc3NhZ2VzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZXh0cmFjdFNlYXJjaFRleHQobXNnc1tpXSEpXG4gICAgICAgICAgICBsZXQgcG9zID0gdGV4dC5pbmRleE9mKGxxKVxuICAgICAgICAgICAgbGV0IGNudCA9IDBcbiAgICAgICAgICAgIHdoaWxlIChwb3MgPj0gMCkge1xuICAgICAgICAgICAgICBjbnQrK1xuICAgICAgICAgICAgICBwb3MgPSB0ZXh0LmluZGV4T2YobHEsIHBvcyArIGxxLmxlbmd0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbnQgPiAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMucHVzaChpKVxuICAgICAgICAgICAgICBwcmVmaXhTdW0ucHVzaChwcmVmaXhTdW0uYXQoLTEpISArIGNudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG90YWwgPSBwcmVmaXhTdW0uYXQoLTEpIVxuICAgICAgICAvLyBOZWFyZXN0IE1FU1NBR0UgdG8gdGhlIGFuY2hvci4gPD0gc28gdGllcyBnbyB0byBsYXRlci5cbiAgICAgICAgbGV0IHB0ciA9IDBcbiAgICAgICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0cywgc3RhcnQsIGdldEl0ZW1Ub3AgfSA9IGp1bXBTdGF0ZS5jdXJyZW50XG4gICAgICAgIGNvbnN0IGZpcnN0VG9wID0gZ2V0SXRlbVRvcChzdGFydClcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gZmlyc3RUb3AgPj0gMCA/IGZpcnN0VG9wIC0gb2Zmc2V0c1tzdGFydF0hIDogMFxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwICYmIHMpIHtcbiAgICAgICAgICBjb25zdCBjdXJUb3AgPVxuICAgICAgICAgICAgc2VhcmNoQW5jaG9yLmN1cnJlbnQgPj0gMCA/IHNlYXJjaEFuY2hvci5jdXJyZW50IDogcy5nZXRTY3JvbGxUb3AoKVxuICAgICAgICAgIGxldCBiZXN0ID0gSW5maW5pdHlcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1hdGNoZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmFicyhvcmlnaW4gKyBvZmZzZXRzW21hdGNoZXNba10hXSEgLSBjdXJUb3ApXG4gICAgICAgICAgICBpZiAoZCA8PSBiZXN0KSB7XG4gICAgICAgICAgICAgIGJlc3QgPSBkXG4gICAgICAgICAgICAgIHB0ciA9IGtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYHNldFNlYXJjaFF1ZXJ5KCcke3F9Jyk6ICR7bWF0Y2hlcy5sZW5ndGh9IG1zZ3MgwrcgcHRyPSR7cHRyfSBgICtcbiAgICAgICAgICAgICAgYG1zZ0lkeD0ke21hdGNoZXNbcHRyXX0gY3VyVG9wPSR7Y3VyVG9wfSBvcmlnaW49JHtvcmlnaW59YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoU3RhdGUuY3VycmVudCA9IHsgbWF0Y2hlcywgcHRyLCBzY3JlZW5PcmQ6IDAsIHByZWZpeFN1bSB9XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyB3YW50TGFzdD10cnVlOiBwcmV2aWV3IHRoZSBMQVNUIG9jY3VycmVuY2UgaW4gdGhlIG5lYXJlc3RcbiAgICAgICAgICAvLyBtZXNzYWdlLiBBdCBzdGlja3ktYm90dG9tIChjb21tb24gLyBlbnRyeSksIG5lYXJlc3QgaXMgdGhlXG4gICAgICAgICAgLy8gbGFzdCBtc2c7IGl0cyBsYXN0IG9jY3VycmVuY2UgaXMgY2xvc2VzdCB0byB3aGVyZSB0aGUgdXNlclxuICAgICAgICAgIC8vIHdhcyDigJQgbWluaW1hbCB2aWV3IG1vdmVtZW50LiBuIGFkdmFuY2VzIGZvcndhcmQgZnJvbSB0aGVyZS5cbiAgICAgICAgICBqdW1wKG1hdGNoZXNbcHRyXSEsIHRydWUpXG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoQW5jaG9yLmN1cnJlbnQgPj0gMCAmJiBzKSB7XG4gICAgICAgICAgLy8gL2Zvb2Ig4oaSIDAgbWF0Y2hlcyDihpIgc25hcCBiYWNrIHRvIGFuY2hvci4gbGVzcy92aW0gaW5jc2VhcmNoLlxuICAgICAgICAgIHMuc2Nyb2xsVG8oc2VhcmNoQW5jaG9yLmN1cnJlbnQpXG4gICAgICAgIH1cbiAgICAgICAgLy8gR2xvYmFsIG9jY3VycmVuY2UgY291bnQgKyAxLWJhc2VkIGN1cnJlbnQuIHdhbnRMYXN0PXRydWUgc28gdGhlXG4gICAgICAgIC8vIHNjYW4gd2lsbCBsYW5kIG9uIHRoZSBsYXN0IG9jY3VycmVuY2UgaW4gbWF0Y2hlc1twdHJdLiBQbGFjZWhvbGRlclxuICAgICAgICAvLyA9IHByZWZpeFN1bVtwdHIrMV0gKGNvdW50IHRocm91Z2ggdGhpcyBtc2cpLiBoaWdobGlnaHQoKSB1cGRhdGVzXG4gICAgICAgIC8vIHRvIHRoZSBleGFjdCB2YWx1ZSBhZnRlciBzY2FuIGNvbXBsZXRlcy5cbiAgICAgICAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlPy4oXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgbWF0Y2hlcy5sZW5ndGggPiAwID8gKHByZWZpeFN1bVtwdHIgKyAxXSA/PyB0b3RhbCkgOiAwLFxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgbmV4dE1hdGNoOiAoKSA9PiBzdGVwKDEpLFxuICAgICAgcHJldk1hdGNoOiAoKSA9PiBzdGVwKC0xKSxcbiAgICAgIHNldEFuY2hvcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gc2Nyb2xsUmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKHMpIHNlYXJjaEFuY2hvci5jdXJyZW50ID0gcy5nZXRTY3JvbGxUb3AoKVxuICAgICAgfSxcbiAgICAgIGRpc2FybVNlYXJjaDogKCkgPT4ge1xuICAgICAgICAvLyBNYW51YWwgc2Nyb2xsIGludmFsaWRhdGVzIHNjcmVlbi1hYnNvbHV0ZSBwb3NpdGlvbnMuXG4gICAgICAgIHNldFBvc2l0aW9ucz8uKG51bGwpXG4gICAgICAgIHNjYW5SZXF1ZXN0UmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgIGVsZW1lbnRQb3NpdGlvbnMuY3VycmVudCA9IHsgbXNnSWR4OiAtMSwgcG9zaXRpb25zOiBbXSB9XG4gICAgICAgIHN0YXJ0UHRyUmVmLmN1cnJlbnQgPSAtMVxuICAgICAgfSxcbiAgICAgIHdhcm1TZWFyY2hJbmRleDogYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhXYXJtZWQuY3VycmVudCkgcmV0dXJuIDBcbiAgICAgICAgY29uc3QgbXNncyA9IGp1bXBTdGF0ZS5jdXJyZW50Lm1lc3NhZ2VzXG4gICAgICAgIGNvbnN0IENIVU5LID0gNTAwXG4gICAgICAgIGxldCB3b3JrTXMgPSAwXG4gICAgICAgIGNvbnN0IHdhbGxTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkgKz0gQ0hVTkspIHtcbiAgICAgICAgICBhd2FpdCBzbGVlcCgwKVxuICAgICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihpICsgQ0hVTkssIG1zZ3MubGVuZ3RoKVxuICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgZW5kOyBqKyspIHtcbiAgICAgICAgICAgIGV4dHJhY3RTZWFyY2hUZXh0KG1zZ3Nbal0hKVxuICAgICAgICAgIH1cbiAgICAgICAgICB3b3JrTXMgKz0gcGVyZm9ybWFuY2Uubm93KCkgLSB0MFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdhbGxNcyA9IE1hdGgucm91bmQocGVyZm9ybWFuY2Uubm93KCkgLSB3YWxsU3RhcnQpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgd2FybVNlYXJjaEluZGV4OiAke21zZ3MubGVuZ3RofSBtc2dzIMK3IHdvcms9JHtNYXRoLnJvdW5kKHdvcmtNcyl9bXMgd2FsbD0ke3dhbGxNc31tcyBjaHVua3M9JHtNYXRoLmNlaWwobXNncy5sZW5ndGggLyBDSFVOSyl9YCxcbiAgICAgICAgKVxuICAgICAgICBpbmRleFdhcm1lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh3b3JrTXMpXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIENsb3N1cmVzIG92ZXIgcmVmcyArIGNhbGxiYWNrcy4gc2Nyb2xsUmVmIHN0YWJsZTsgb3RoZXJzIGFyZVxuICAgIC8vIHVzZUNhbGxiYWNrKFtdKSBvciBwcm9wLWRyaWxsZWQgZnJvbSBSRVBMIChzdGFibGUpLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbc2Nyb2xsUmVmXSxcbiAgKVxuXG4gIC8vIFN0aWNreVRyYWNrZXIgZ29lcyBBRlRFUiB0aGUgbGlzdCBjb250ZW50LiBJdCByZXR1cm5zIG51bGwgKG5vIERPTSBub2RlKVxuICAvLyBzbyBvcmRlciBzaG91bGRuJ3QgbWF0dGVyIGZvciBsYXlvdXQg4oCUIGJ1dCBwdXR0aW5nIGl0IGZpcnN0IG1lYW5zIGV2ZXJ5XG4gIC8vIGZpbmUtZ3JhaW5lZCBjb21taXQgZnJvbSBpdHMgb3duIHNjcm9sbCBzdWJzY3JpcHRpb24gcmVjb25jaWxlcyBUSFJPVUdIXG4gIC8vIHRoZSBzaWJsaW5nIGl0ZW1zIChSZWFjdCB3YWxrcyBjaGlsZHJlbiBpbiBvcmRlcikuIEFmdGVyIHRoZSBpdGVtcywgaXQnc1xuICAvLyBhIGxlYWYgcmVjb25jaWxlLiBEZWZlbnNpdmU6IGFsc28gYXZvaWRzIGFueSBZb2dhIGNoaWxkLWluZGV4IHF1aXJrcyBpZlxuICAvLyB0aGUgSW5rIHJlY29uY2lsZXIgZXZlciBtYXRlcmlhbGl6ZXMgYSBwbGFjZWhvbGRlciBmb3IgbnVsbCByZXR1cm5zLlxuICBjb25zdCBbaG92ZXJlZEtleSwgc2V0SG92ZXJlZEtleV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICAvLyBTdGFibGUgY2xpY2svaG92ZXIgaGFuZGxlcnMg4oCUIGNhbGxlZCB3aXRoIGssIGRpc3BhdGNoIGZyb20gYSByZWYgc29cbiAgLy8gY2xvc3VyZSBpZGVudGl0eSBkb2Vzbid0IGNoYW5nZSBwZXIgcmVuZGVyLiBUaGUgcGVyLWl0ZW0gaGFuZGxlclxuICAvLyBjbG9zdXJlcyAoYGUgPT4gLi4uYCwgYCgpID0+IHNldEhvdmVyZWRLZXkoaylgKSB3ZXJlIHRoZVxuICAvLyBgb3BlcmF0aW9uTmV3QXJyb3dGdW5jdGlvbmAgbGVhZnMgaW4gdGhlIHNjcm9sbCBDUFUgcHJvZmlsZTsgdGhlaXJcbiAgLy8gY2xlYW51cCB3YXMgMTYlIG9mIEdDIHRpbWUgKGBGdW5jdGlvbkV4ZWN1dGFibGU6OmZpbmFsaXplVW5jb25kaXRpb25hbGx5YCkuXG4gIC8vIEFsbG9jYXRpbmcgMyBjbG9zdXJlcyDDlyA2MCBtb3VudGVkIGl0ZW1zIMOXIDEwIGNvbW1pdHMvc2VjIGR1cmluZyBmYXN0XG4gIC8vIHNjcm9sbCA9IDE4MDAgc2hvcnQtbGl2ZWQgY2xvc3VyZXMvc2VjLiBXaXRoIHN0YWJsZSByZWZzIHRoZSBpdGVtXG4gIC8vIHdyYXBwZXIgcHJvcHMgZG9uJ3QgY2hhbmdlIOKGkiBWaXJ0dWFsSXRlbS5tZW1vIGJhaWxzIGZvciB0aGUgfjM1XG4gIC8vIHVuY2hhbmdlZCBpdGVtcywgb25seSB+MjUgZnJlc2ggaXRlbXMgcGF5IGNyZWF0ZUVsZW1lbnQgY29zdC5cbiAgY29uc3QgaGFuZGxlcnNSZWYgPSB1c2VSZWYoeyBvbkl0ZW1DbGljaywgc2V0SG92ZXJlZEtleSB9KVxuICBoYW5kbGVyc1JlZi5jdXJyZW50ID0geyBvbkl0ZW1DbGljaywgc2V0SG92ZXJlZEtleSB9XG4gIGNvbnN0IG9uQ2xpY2tLID0gdXNlQ2FsbGJhY2soXG4gICAgKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UsIGNlbGxJc0JsYW5rOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0gaGFuZGxlcnNSZWYuY3VycmVudFxuICAgICAgaWYgKCFjZWxsSXNCbGFuayAmJiBoLm9uSXRlbUNsaWNrKSBoLm9uSXRlbUNsaWNrKG1zZylcbiAgICB9LFxuICAgIFtdLFxuICApXG4gIGNvbnN0IG9uRW50ZXJLID0gdXNlQ2FsbGJhY2soKGs6IHN0cmluZykgPT4ge1xuICAgIGhhbmRsZXJzUmVmLmN1cnJlbnQuc2V0SG92ZXJlZEtleShrKVxuICB9LCBbXSlcbiAgY29uc3Qgb25MZWF2ZUsgPSB1c2VDYWxsYmFjaygoazogc3RyaW5nKSA9PiB7XG4gICAgaGFuZGxlcnNSZWYuY3VycmVudC5zZXRIb3ZlcmVkS2V5KHByZXYgPT4gKHByZXYgPT09IGsgPyBudWxsIDogcHJldikpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggcmVmPXtzcGFjZXJSZWZ9IGhlaWdodD17dG9wU3BhY2VyfSBmbGV4U2hyaW5rPXswfSAvPlxuICAgICAge21lc3NhZ2VzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgobXNnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHN0YXJ0ICsgaVxuICAgICAgICBjb25zdCBrID0ga2V5c1tpZHhdIVxuICAgICAgICBjb25zdCBjbGlja2FibGUgPSAhIW9uSXRlbUNsaWNrICYmIChpc0l0ZW1DbGlja2FibGU/Lihtc2cpID8/IHRydWUpXG4gICAgICAgIGNvbnN0IGhvdmVyZWQgPSBjbGlja2FibGUgJiYgaG92ZXJlZEtleSA9PT0ga1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IGlzSXRlbUV4cGFuZGVkPy4obXNnKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxWaXJ0dWFsSXRlbVxuICAgICAgICAgICAga2V5PXtrfVxuICAgICAgICAgICAgaXRlbUtleT17a31cbiAgICAgICAgICAgIG1zZz17bXNnfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICBtZWFzdXJlUmVmPXttZWFzdXJlUmVmfVxuICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgICAgaG92ZXJlZD17aG92ZXJlZH1cbiAgICAgICAgICAgIGNsaWNrYWJsZT17Y2xpY2thYmxlfVxuICAgICAgICAgICAgb25DbGlja0s9e29uQ2xpY2tLfVxuICAgICAgICAgICAgb25FbnRlcks9e29uRW50ZXJLfVxuICAgICAgICAgICAgb25MZWF2ZUs9e29uTGVhdmVLfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIHtib3R0b21TcGFjZXIgPiAwICYmIDxCb3ggaGVpZ2h0PXtib3R0b21TcGFjZXJ9IGZsZXhTaHJpbms9ezB9IC8+fVxuICAgICAge3RyYWNrU3RpY2t5UHJvbXB0ICYmIChcbiAgICAgICAgPFN0aWNreVRyYWNrZXJcbiAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgc3RhcnQ9e3N0YXJ0fVxuICAgICAgICAgIGVuZD17ZW5kfVxuICAgICAgICAgIG9mZnNldHM9e29mZnNldHN9XG4gICAgICAgICAgZ2V0SXRlbVRvcD17Z2V0SXRlbVRvcH1cbiAgICAgICAgICBnZXRJdGVtRWxlbWVudD17Z2V0SXRlbUVsZW1lbnR9XG4gICAgICAgICAgc2Nyb2xsUmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IE5PT1BfVU5TVUIgPSAoKSA9PiB7fVxuXG4vKipcbiAqIEVmZmVjdC1vbmx5IGNoaWxkIHRoYXQgdHJhY2tzIHRoZSBsYXN0IHVzZXItcHJvbXB0IHNjcm9sbGVkIGFib3ZlIHRoZVxuICogdmlld3BvcnQgdG9wIGFuZCBmaXJlcyBvbkNoYW5nZSB3aGVuIGl0IGNoYW5nZXMuXG4gKlxuICogUmVuZGVyZWQgYXMgYSBzZXBhcmF0ZSBjb21wb25lbnQgKG5vdCBhIGhvb2sgaW4gVmlydHVhbE1lc3NhZ2VMaXN0KSBzbyBpdFxuICogY2FuIHN1YnNjcmliZSB0byBzY3JvbGwgYXQgRklORVIgZ3JhbnVsYXJpdHkgdGhhbiBTQ1JPTExfUVVBTlRVTT00MC4gVGhlXG4gKiBsaXN0IG5lZWRzIHRoZSBjb2Fyc2UgcXVhbnR1bSB0byBhdm9pZCBwZXItd2hlZWwtdGljayBZb2dhIHJlbGF5b3V0czsgdGhpc1xuICogdHJhY2tlciBpcyBqdXN0IGEgd2FsayArIGNvbXBhcmlzb24gYW5kIGNhbiBhZmZvcmQgdG8gcnVuIGV2ZXJ5IHRpY2suIFdoZW5cbiAqIGl0IHJlLXJlbmRlcnMgYWxvbmUsIHRoZSBsaXN0J3MgcmVjb25jaWxlZCBvdXRwdXQgaXMgdW5jaGFuZ2VkIChzYW1lIHByb3BzXG4gKiBmcm9tIHRoZSBwYXJlbnQncyBsYXN0IGNvbW1pdCkg4oCUIG5vIFlvZ2Egd29yay4gV2l0aG91dCB0aGlzIHNwbGl0LCB0aGVcbiAqIGhlYWRlciBsYWdzIGJ5IH5vbmUgY29udmVyc2F0aW9uIHR1cm4gKDQwIHJvd3Mg4omIIG9uZSBwcm9tcHQgKyByZXNwb25zZSkuXG4gKlxuICogZmlyc3RWaXNpYmxlIGRlcml2YXRpb246IGl0ZW0gQm94ZXMgYXJlIGRpcmVjdCBZb2dhIGNoaWxkcmVuIG9mIHRoZVxuICogU2Nyb2xsQm94IGNvbnRlbnQgd3JhcHBlciAoZnJhZ21lbnRzIGNvbGxhcHNlIGluIHRoZSBJbmsgRE9NKSwgc29cbiAqIHlvZ2EuZ2V0Q29tcHV0ZWRUb3AgaXMgY29udGVudC13cmFwcGVyLXJlbGF0aXZlIOKAlCBzYW1lIGNvb3JkaW5hdGUgc3BhY2UgYXNcbiAqIHNjcm9sbFRvcC4gQ29tcGFyZSBhZ2FpbnN0IHNjcm9sbFRvcCArIHBlbmRpbmdEZWx0YSAodGhlIHNjcm9sbCBUQVJHRVQg4oCUXG4gKiBzY3JvbGxCeSBvbmx5IHNldHMgcGVuZGluZ0RlbHRhLCBjb21taXR0ZWQgc2Nyb2xsVG9wIGxhZ3MpLiBXYWxrIGJhY2t3YXJkXG4gKiBmcm9tIHRoZSBtb3VudC1yYW5nZSBlbmQ7IGJyZWFrIHdoZW4gYW4gaXRlbSdzIHRvcCBpcyBhYm92ZSB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIFN0aWNreVRyYWNrZXIoe1xuICBtZXNzYWdlcyxcbiAgc3RhcnQsXG4gIGVuZCxcbiAgb2Zmc2V0cyxcbiAgZ2V0SXRlbVRvcCxcbiAgZ2V0SXRlbUVsZW1lbnQsXG4gIHNjcm9sbFJlZixcbn06IHtcbiAgbWVzc2FnZXM6IFJlbmRlcmFibGVNZXNzYWdlW11cbiAgc3RhcnQ6IG51bWJlclxuICBlbmQ6IG51bWJlclxuICBvZmZzZXRzOiBBcnJheUxpa2U8bnVtYmVyPlxuICBnZXRJdGVtVG9wOiAoaW5kZXg6IG51bWJlcikgPT4gbnVtYmVyXG4gIGdldEl0ZW1FbGVtZW50OiAoaW5kZXg6IG51bWJlcikgPT4gRE9NRWxlbWVudCB8IG51bGxcbiAgc2Nyb2xsUmVmOiBSZWZPYmplY3Q8U2Nyb2xsQm94SGFuZGxlIHwgbnVsbD5cbn0pOiBudWxsIHtcbiAgY29uc3QgeyBzZXRTdGlja3lQcm9tcHQgfSA9IHVzZUNvbnRleHQoU2Nyb2xsQ2hyb21lQ29udGV4dClcbiAgLy8gRmluZS1ncmFpbmVkIHN1YnNjcmlwdGlvbiDigJQgc25hcHNob3QgaXMgdW5xdWFudGl6ZWQgc2Nyb2xsVG9wK2RlbHRhIHNvXG4gIC8vIGV2ZXJ5IHNjcm9sbCBhY3Rpb24gKHdoZWVsIHRpY2ssIFBnVXAsIGRyYWcpIHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mXG4gIC8vIFRISVMgY29tcG9uZW50IG9ubHkuIFN0aWNreSBiaXQgZm9sZGVkIGludG8gdGhlIHNpZ24gc28gc3RpY2t54oaSYnJva2VuXG4gIC8vIGFsc28gdHJpZ2dlcnMgKHNjcm9sbFRvQm90dG9tIHNldHMgc3RpY2t5IHdpdGhvdXQgbW92aW5nIHNjcm9sbFRvcCkuXG4gIGNvbnN0IHN1YnNjcmliZSA9IHVzZUNhbGxiYWNrKFxuICAgIChsaXN0ZW5lcjogKCkgPT4gdm9pZCkgPT5cbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zdWJzY3JpYmUobGlzdGVuZXIpID8/IE5PT1BfVU5TVUIsXG4gICAgW3Njcm9sbFJlZl0sXG4gIClcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCAoKSA9PiB7XG4gICAgY29uc3QgcyA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgaWYgKCFzKSByZXR1cm4gTmFOXG4gICAgY29uc3QgdCA9IHMuZ2V0U2Nyb2xsVG9wKCkgKyBzLmdldFBlbmRpbmdEZWx0YSgpXG4gICAgcmV0dXJuIHMuaXNTdGlja3koKSA/IC0xIC0gdCA6IHRcbiAgfSlcblxuICAvLyBSZWFkIGxpdmUgc2Nyb2xsIHN0YXRlIG9uIGV2ZXJ5IHJlbmRlci5cbiAgY29uc3QgaXNTdGlja3kgPSBzY3JvbGxSZWYuY3VycmVudD8uaXNTdGlja3koKSA/PyB0cnVlXG4gIGNvbnN0IHRhcmdldCA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgKHNjcm9sbFJlZi5jdXJyZW50Py5nZXRTY3JvbGxUb3AoKSA/PyAwKSArXG4gICAgICAoc2Nyb2xsUmVmLmN1cnJlbnQ/LmdldFBlbmRpbmdEZWx0YSgpID8/IDApLFxuICApXG5cbiAgLy8gV2FsayB0aGUgbW91bnRlZCByYW5nZSB0byBmaW5kIHRoZSBmaXJzdCBpdGVtIGF0LW9yLWJlbG93IHRoZSB2aWV3cG9ydFxuICAvLyB0b3AuIGByYW5nZWAgaXMgZnJvbSB0aGUgcGFyZW50J3MgY29hcnNlLXF1YW50dW0gcmVuZGVyIChtYXkgYmUgc2xpZ2h0bHlcbiAgLy8gc3RhbGUpIGJ1dCBvdmVyc2NhbiBndWFyYW50ZWVzIGl0IHNwYW5zIHdlbGwgcGFzdCB0aGUgdmlld3BvcnQgaW4gYm90aFxuICAvLyBkaXJlY3Rpb25zLiBJdGVtcyB3aXRob3V0IGEgWW9nYSBsYXlvdXQgeWV0IChuZXdseSBtb3VudGVkIHRoaXMgZnJhbWUpXG4gIC8vIGFyZSB0cmVhdGVkIGFzIGF0LW9yLWJlbG93IOKAlCB0aGV5J3JlIHNvbWV3aGVyZSBpbiB2aWV3LCBhbmQgYXNzdW1pbmdcbiAgLy8gb3RoZXJ3aXNlIHdvdWxkIHNob3cgYSBzdGlja3kgZm9yIGEgcHJvbXB0IHRoYXQncyBhY3R1YWxseSBvbiBzY3JlZW4uXG4gIGxldCBmaXJzdFZpc2libGUgPSBzdGFydFxuICBsZXQgZmlyc3RWaXNpYmxlVG9wID0gLTFcbiAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQ7IGktLSkge1xuICAgIGNvbnN0IHRvcCA9IGdldEl0ZW1Ub3AoaSlcbiAgICBpZiAodG9wID49IDApIHtcbiAgICAgIGlmICh0b3AgPCB0YXJnZXQpIGJyZWFrXG4gICAgICBmaXJzdFZpc2libGVUb3AgPSB0b3BcbiAgICB9XG4gICAgZmlyc3RWaXNpYmxlID0gaVxuICB9XG5cbiAgbGV0IGlkeCA9IC0xXG4gIGxldCB0ZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBpZiAoZmlyc3RWaXNpYmxlID4gMCAmJiAhaXNTdGlja3kpIHtcbiAgICBmb3IgKGxldCBpID0gZmlyc3RWaXNpYmxlIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHQgPSBzdGlja3lQcm9tcHRUZXh0KG1lc3NhZ2VzW2ldISlcbiAgICAgIGlmICh0ID09PSBudWxsKSBjb250aW51ZVxuICAgICAgLy8gVGhlIHByb21wdCdzIHdyYXBwaW5nIEJveCB0b3AgaXMgYWJvdmUgdGFyZ2V0ICh0aGF0J3Mgd2h5IGl0J3MgaW5cbiAgICAgIC8vIHRoZSBbMCwgZmlyc3RWaXNpYmxlKSByYW5nZSksIGJ1dCBpdHMg4p2vIGlzIGF0IHRvcCsxIChtYXJnaW5Ub3A9MSkuXG4gICAgICAvLyBJZiB0aGUg4p2vIGlzIGF0LW9yLWJlbG93IHRhcmdldCwgaXQncyBWSVNJQkxFIGF0IHZpZXdwb3J0IHRvcCDigJRcbiAgICAgIC8vIHNob3dpbmcgdGhlIHNhbWUgdGV4dCBpbiB0aGUgaGVhZGVyIHdvdWxkIGR1cGxpY2F0ZSBpdC4gSGFwcGVuc1xuICAgICAgLy8gaW4gdGhlIDEtcm93IGdhcCBiZXR3ZWVuIEJveCB0b3Agc2Nyb2xsaW5nIHBhc3QgYW5kIOKdryBzY3JvbGxpbmdcbiAgICAgIC8vIHBhc3QuIFNraXAgdG8gdGhlIG5leHQtb2xkZXIgcHJvbXB0IChpdHMg4p2vIGlzIGRlZmluaXRlbHkgYWJvdmUpLlxuICAgICAgY29uc3QgdG9wID0gZ2V0SXRlbVRvcChpKVxuICAgICAgaWYgKHRvcCA+PSAwICYmIHRvcCArIDEgPj0gdGFyZ2V0KSBjb250aW51ZVxuICAgICAgaWR4ID0gaVxuICAgICAgdGV4dCA9IHRcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmFzZU9mZnNldCA9XG4gICAgZmlyc3RWaXNpYmxlVG9wID49IDAgPyBmaXJzdFZpc2libGVUb3AgLSBvZmZzZXRzW2ZpcnN0VmlzaWJsZV0hIDogMFxuICBjb25zdCBlc3RpbWF0ZSA9IGlkeCA+PSAwID8gTWF0aC5tYXgoMCwgYmFzZU9mZnNldCArIG9mZnNldHNbaWR4XSEpIDogLTFcblxuICAvLyBGb3IgY2xpY2stanVtcHMgdG8gaXRlbXMgbm90IHlldCBtb3VudGVkICh1c2VyIHNjcm9sbGVkIGZhciBwYXN0LFxuICAvLyBwcm9tcHQgaXMgaW4gdGhlIHRvcFNwYWNlcikuIENsaWNrIGhhbmRsZXIgc2Nyb2xscyB0byB0aGUgZXN0aW1hdGVcbiAgLy8gdG8gbW91bnQgaXQ7IHRoaXMgYW5jaG9ycyBieSBlbGVtZW50IG9uY2UgaXQgYXBwZWFycy4gc2Nyb2xsVG9FbGVtZW50XG4gIC8vIGRlZmVycyB0aGUgWW9nYS1wb3NpdGlvbiByZWFkIHRvIHJlbmRlciB0aW1lIChyZW5kZXItbm9kZS10by1vdXRwdXRcbiAgLy8gcmVhZHMgZWwueW9nYU5vZGUuZ2V0Q29tcHV0ZWRUb3AoKSBpbiB0aGUgU0FNRSBjYWxjdWxhdGVMYXlvdXQgcGFzc1xuICAvLyB0aGF0IHByb2R1Y2VzIHNjcm9sbEhlaWdodCkg4oCUIG5vIHRocm90dGxlIHJhY2UuIENhcCByZXRyaWVzOiBhIC9jbGVhclxuICAvLyByYWNlIGNvdWxkIHVubW91bnQgdGhlIGl0ZW0gbWlkLXNlcXVlbmNlLlxuICBjb25zdCBwZW5kaW5nID0gdXNlUmVmKHsgaWR4OiAtMSwgdHJpZXM6IDAgfSlcbiAgLy8gU3VwcHJlc3Npb24gc3RhdGUgbWFjaGluZS4gVGhlIGNsaWNrIGhhbmRsZXIgYXJtczsgdGhlIG9uQ2hhbmdlIGVmZmVjdFxuICAvLyBjb25zdW1lcyAoYXJtZWTihpJmb3JjZSkgdGhlbiBmaXJlcy1hbmQtY2xlYXJzIG9uIHRoZSByZW5kZXIgQUZURVIgdGhhdFxuICAvLyAoZm9yY2XihpJub25lKS4gVGhlIGZvcmNlIHN0ZXAgcG9pc29ucyB0aGUgZGVkdXA6IGFmdGVyIGNsaWNrLCBpZHggb2Z0ZW5cbiAgLy8gcmVjb21wdXRlcyB0byB0aGUgU0FNRSBwcm9tcHQgKGl0cyB0b3AgaXMgc3RpbGwgYWJvdmUgdGFyZ2V0KSwgc29cbiAgLy8gd2l0aG91dCBmb3JjZSB0aGUgbGFzdC5pZHg9PT1pZHggZ3VhcmQgd291bGQgaG9sZCAnY2xpY2tlZCcgdW50aWwgdGhlXG4gIC8vIHVzZXIgY3Jvc3NlZCBhIHByb21wdCBib3VuZGFyeS4gUHJldmlvdXNseSBlbmNvZGVkIGluIGxhc3QuaWR4IGFzXG4gIC8vIC0xLy0yLy0zIHdoaWNoIG92ZXJsYXBwZWQgd2l0aCByZWFsIGluZGljZXMg4oCUIHRvbyBjbGV2ZXIuXG4gIHR5cGUgU3VwcHJlc3MgPSAnbm9uZScgfCAnYXJtZWQnIHwgJ2ZvcmNlJ1xuICBjb25zdCBzdXBwcmVzcyA9IHVzZVJlZjxTdXBwcmVzcz4oJ25vbmUnKVxuICAvLyBEZWR1cCBvbiBpZHggb25seSDigJQgZXN0aW1hdGUgZGVyaXZlcyBmcm9tIGZpcnN0VmlzaWJsZVRvcCB3aGljaCBzaGlmdHNcbiAgLy8gZXZlcnkgc2Nyb2xsIHRpY2ssIHNvIGluY2x1ZGluZyBpdCBpbiB0aGUga2V5IG1hZGUgdGhlIGd1YXJkIGRlYWRcbiAgLy8gKHNldFN0aWNreVByb21wdCBmaXJlZCBhIGZyZXNoIHt0ZXh0LHNjcm9sbFRvfSBwZXItZnJhbWUpLiBUaGUgc2Nyb2xsVG9cbiAgLy8gY2xvc3VyZSBzdGlsbCBjYXB0dXJlcyB0aGUgY3VycmVudCBlc3RpbWF0ZTsgaXQganVzdCBkb2Vzbid0IG5lZWQgdG9cbiAgLy8gcmUtZmlyZSB3aGVuIG9ubHkgZXN0aW1hdGUgbW92ZWQuXG4gIGNvbnN0IGxhc3RJZHggPSB1c2VSZWYoLTEpXG5cbiAgLy8gc2V0U3RpY2t5UHJvbXB0IGVmZmVjdCBGSVJTVCDigJQgbXVzdCBzZWUgcGVuZGluZy5pZHggYmVmb3JlIHRoZVxuICAvLyBjb3JyZWN0aW9uIGVmZmVjdCBiZWxvdyBjbGVhcnMgaXQuIE9uIHRoZSBlc3RpbWF0ZS1mYWxsYmFjayBwYXRoLCB0aGVcbiAgLy8gcmVuZGVyIHRoYXQgbW91bnRzIHRoZSBpdGVtIGlzIEFMU08gdGhlIHJlbmRlciB3aGVyZSBjb3JyZWN0aW9uIGNsZWFyc1xuICAvLyBwZW5kaW5nOyBpZiB0aGlzIHJhbiBzZWNvbmQsIHRoZSBwZW5kaW5nIGdhdGUgd291bGQgYmUgZGVhZCBhbmRcbiAgLy8gc2V0U3RpY2t5UHJvbXB0KHByZXZQcm9tcHQpIHdvdWxkIGZpcmUgbWlkLWp1bXAsIHJlLW1vdW50aW5nIHRoZVxuICAvLyBoZWFkZXIgb3ZlciAnY2xpY2tlZCcuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSG9sZCB3aGlsZSB0d28tcGhhc2UgY29ycmVjdGlvbiBpcyBpbiBmbGlnaHQuXG4gICAgaWYgKHBlbmRpbmcuY3VycmVudC5pZHggPj0gMCkgcmV0dXJuXG4gICAgaWYgKHN1cHByZXNzLmN1cnJlbnQgPT09ICdhcm1lZCcpIHtcbiAgICAgIHN1cHByZXNzLmN1cnJlbnQgPSAnZm9yY2UnXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZm9yY2UgPSBzdXBwcmVzcy5jdXJyZW50ID09PSAnZm9yY2UnXG4gICAgc3VwcHJlc3MuY3VycmVudCA9ICdub25lJ1xuICAgIGlmICghZm9yY2UgJiYgbGFzdElkeC5jdXJyZW50ID09PSBpZHgpIHJldHVyblxuICAgIGxhc3RJZHguY3VycmVudCA9IGlkeFxuICAgIGlmICh0ZXh0ID09PSBudWxsKSB7XG4gICAgICBzZXRTdGlja3lQcm9tcHQobnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBGaXJzdCBwYXJhZ3JhcGggb25seSAoc3BsaXQgb24gYmxhbmsgbGluZSkg4oCUIGEgcHJvbXB0IGxpa2VcbiAgICAvLyBcInN0aWxsIHNlZWluZyBidWdzOlxcblxcbjEuIGZvb1xcbjIuIGJhclwiIHByZXZpZXdzIGFzIGp1c3QgdGhlXG4gICAgLy8gbGVhZC1pbi4gdHJpbVN0YXJ0IHNvIGEgbGVhZGluZyBibGFuayBsaW5lIChxdWV1ZWRfY29tbWFuZCBtaWQtXG4gICAgLy8gdHVybiBtZXNzYWdlcyBzb21ldGltZXMgaGF2ZSBvbmUpIGRvZXNuJ3QgZmluZCBwYXJhRW5kIGF0IDAuXG4gICAgY29uc3QgdHJpbW1lZCA9IHRleHQudHJpbVN0YXJ0KClcbiAgICBjb25zdCBwYXJhRW5kID0gdHJpbW1lZC5zZWFyY2goL1xcblxccypcXG4vKVxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IChwYXJhRW5kID49IDAgPyB0cmltbWVkLnNsaWNlKDAsIHBhcmFFbmQpIDogdHJpbW1lZClcbiAgICAgIC5zbGljZSgwLCBTVElDS1lfVEVYVF9DQVApXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAudHJpbSgpXG4gICAgaWYgKGNvbGxhcHNlZCA9PT0gJycpIHtcbiAgICAgIHNldFN0aWNreVByb21wdChudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNhcHR1cmVkSWR4ID0gaWR4XG4gICAgY29uc3QgY2FwdHVyZWRFc3RpbWF0ZSA9IGVzdGltYXRlXG4gICAgc2V0U3RpY2t5UHJvbXB0KHtcbiAgICAgIHRleHQ6IGNvbGxhcHNlZCxcbiAgICAgIHNjcm9sbFRvOiAoKSA9PiB7XG4gICAgICAgIC8vIEhpZGUgaGVhZGVyLCBrZWVwIHBhZGRpbmcgY29sbGFwc2VkIOKAlCBGdWxsc2NyZWVuTGF5b3V0J3NcbiAgICAgICAgLy8gJ2NsaWNrZWQnIHNlbnRpbmVsIOKGkiBzY3JvbGxCb3hfeT0wICsgcGFkPTAg4oaSIHZpZXdwb3J0VG9wPTAuXG4gICAgICAgIHNldFN0aWNreVByb21wdCgnY2xpY2tlZCcpXG4gICAgICAgIHN1cHByZXNzLmN1cnJlbnQgPSAnYXJtZWQnXG4gICAgICAgIC8vIHNjcm9sbFRvRWxlbWVudCBhbmNob3JzIGJ5IERPTUVsZW1lbnQgcmVmLCBub3QgYSBudW1iZXI6XG4gICAgICAgIC8vIHJlbmRlci1ub2RlLXRvLW91dHB1dCByZWFkcyBlbC55b2dhTm9kZS5nZXRDb21wdXRlZFRvcCgpIGF0XG4gICAgICAgIC8vIHBhaW50IHRpbWUgKHNhbWUgWW9nYSBwYXNzIGFzIHNjcm9sbEhlaWdodCkuIE5vIHN0YWxlbmVzcyBmcm9tXG4gICAgICAgIC8vIHRoZSB0aHJvdHRsZWQgcmVuZGVyIOKAlCB0aGUgcmVmIGlzIHN0YWJsZSwgdGhlIHBvc2l0aW9uIHJlYWQgaXNcbiAgICAgICAgLy8gZGVmZXJyZWQuIG9mZnNldD0xID0gVXNlclByb21wdE1lc3NhZ2UgbWFyZ2luVG9wLlxuICAgICAgICBjb25zdCBlbCA9IGdldEl0ZW1FbGVtZW50KGNhcHR1cmVkSWR4KVxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG9FbGVtZW50KGVsLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vdCBtb3VudGVkIChzY3JvbGxlZCBmYXIgcGFzdCDigJQgaW4gdG9wU3BhY2VyKS4gSnVtcCB0b1xuICAgICAgICAgIC8vIGVzdGltYXRlIHRvIG1vdW50IGl0OyBjb3JyZWN0aW9uIGVmZmVjdCByZS1hbmNob3JzIG9uY2UgaXRcbiAgICAgICAgICAvLyBhcHBlYXJzLiBFc3RpbWF0ZSBpcyBERUZBVUxUX0VTVElNQVRFLWJhc2VkIOKAlCBsYW5kcyBzaG9ydC5cbiAgICAgICAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsVG8oY2FwdHVyZWRFc3RpbWF0ZSlcbiAgICAgICAgICBwZW5kaW5nLmN1cnJlbnQgPSB7IGlkeDogY2FwdHVyZWRJZHgsIHRyaWVzOiAwIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICAgIC8vIE5vIGRlcHMg4oCUIG11c3QgcnVuIGV2ZXJ5IHJlbmRlci4gU3VwcHJlc3Npb24gc3RhdGUgbGl2ZXMgaW4gYSByZWZcbiAgICAvLyAobm90IGlkeC9lc3RpbWF0ZSksIHNvIGEgZGVwcy1nYXRlZCBlZmZlY3Qgd291bGQgbmV2ZXIgc2VlIGl0IHRpY2suXG4gICAgLy8gQm9keSdzIG93biBndWFyZHMgc2hvcnQtY2lyY3VpdCB3aGVuIG5vdGhpbmcgY2hhbmdlZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0pXG5cbiAgLy8gQ29ycmVjdGlvbjogZm9yIGNsaWNrLWp1bXBzIHRvIHVubW91bnRlZCBpdGVtcy4gQ2xpY2sgaGFuZGxlciBzY3JvbGxlZFxuICAvLyB0byB0aGUgZXN0aW1hdGU7IHRoaXMgcmUtYW5jaG9ycyBieSBlbGVtZW50IG9uY2UgdGhlIGl0ZW0gYXBwZWFycy5cbiAgLy8gc2Nyb2xsVG9FbGVtZW50IGRlZmVycyB0aGUgWW9nYSByZWFkIHRvIHBhaW50IHRpbWUg4oCUIGRldGVybWluaXN0aWMuXG4gIC8vIFNFQ09ORCBzbyBpdCBjbGVhcnMgcGVuZGluZyBBRlRFUiB0aGUgb25DaGFuZ2UgZ2F0ZSBhYm92ZSBoYXMgc2VlbiBpdC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGVuZGluZy5jdXJyZW50LmlkeCA8IDApIHJldHVyblxuICAgIGNvbnN0IGVsID0gZ2V0SXRlbUVsZW1lbnQocGVuZGluZy5jdXJyZW50LmlkeClcbiAgICBpZiAoZWwpIHtcbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxUb0VsZW1lbnQoZWwsIDEpXG4gICAgICBwZW5kaW5nLmN1cnJlbnQgPSB7IGlkeDogLTEsIHRyaWVzOiAwIH1cbiAgICB9IGVsc2UgaWYgKCsrcGVuZGluZy5jdXJyZW50LnRyaWVzID4gNSkge1xuICAgICAgcGVuZGluZy5jdXJyZW50ID0geyBpZHg6IC0xLCB0cmllczogMCB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBudWxsXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldmVyeSB9IGZyb20gJ3NyYy91dGlscy9zZXQuanMnXG5pbXBvcnQgeyBnZXRJc1JlbW90ZU1vZGUgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IEJMQUNLX0NJUkNMRSB9IGZyb20gJy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHR5cGUgeyBTY3JvbGxCb3hIYW5kbGUgfSBmcm9tICcuLi9pbmsvY29tcG9uZW50cy9TY3JvbGxCb3guanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2luay91c2VUZXJtaW5hbE5vdGlmaWNhdGlvbi5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7IHVzZVNob3J0Y3V0RGlzcGxheSB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZVNob3J0Y3V0RGlzcGxheS5qcydcbmltcG9ydCB0eXBlIHsgU2NyZWVuIH0gZnJvbSAnLi4vc2NyZWVucy9SRVBMLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29scyB9IGZyb20gJy4uL1Rvb2wuanMnXG5pbXBvcnQgeyBmaW5kVG9vbEJ5TmFtZSB9IGZyb20gJy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB0eXBlIHtcbiAgTWVzc2FnZSBhcyBNZXNzYWdlVHlwZSxcbiAgTm9ybWFsaXplZE1lc3NhZ2UsXG4gIFByb2dyZXNzTWVzc2FnZSBhcyBQcm9ncmVzc01lc3NhZ2VUeXBlLFxuICBSZW5kZXJhYmxlTWVzc2FnZSxcbn0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IHR5cGUgQWR2aXNvckJsb2NrLCBpc0Fkdmlzb3JCbG9jayB9IGZyb20gJy4uL3V0aWxzL2Fkdmlzb3IuanMnXG5pbXBvcnQgeyBjb2xsYXBzZUJhY2tncm91bmRCYXNoTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL3V0aWxzL2NvbGxhcHNlQmFja2dyb3VuZEJhc2hOb3RpZmljYXRpb25zLmpzJ1xuaW1wb3J0IHsgY29sbGFwc2VIb29rU3VtbWFyaWVzIH0gZnJvbSAnLi4vdXRpbHMvY29sbGFwc2VIb29rU3VtbWFyaWVzLmpzJ1xuaW1wb3J0IHsgY29sbGFwc2VSZWFkU2VhcmNoR3JvdXBzIH0gZnJvbSAnLi4vdXRpbHMvY29sbGFwc2VSZWFkU2VhcmNoLmpzJ1xuaW1wb3J0IHsgY29sbGFwc2VUZWFtbWF0ZVNodXRkb3ducyB9IGZyb20gJy4uL3V0aWxzL2NvbGxhcHNlVGVhbW1hdGVTaHV0ZG93bnMuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgaXNGdWxsc2NyZWVuRW52RW5hYmxlZCB9IGZyb20gJy4uL3V0aWxzL2Z1bGxzY3JlZW4uanMnXG5pbXBvcnQgeyBhcHBseUdyb3VwaW5nIH0gZnJvbSAnLi4vdXRpbHMvZ3JvdXBUb29sVXNlcy5qcydcbmltcG9ydCB7XG4gIGJ1aWxkTWVzc2FnZUxvb2t1cHMsXG4gIGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2UsXG4gIGRlcml2ZVVVSUQsXG4gIGdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnksXG4gIGdldFRvb2xVc2VJRCxcbiAgZ2V0VG9vbFVzZUlEcyxcbiAgaGFzVW5yZXNvbHZlZEhvb2tzRnJvbUxvb2t1cCxcbiAgaXNOb3RFbXB0eU1lc3NhZ2UsXG4gIG5vcm1hbGl6ZU1lc3NhZ2VzLFxuICByZW9yZGVyTWVzc2FnZXNJblVJLFxuICB0eXBlIFN0cmVhbWluZ1RoaW5raW5nLFxuICB0eXBlIFN0cmVhbWluZ1Rvb2xVc2UsXG4gIHNob3VsZFNob3dVc2VyTWVzc2FnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IHJlbmRlcmFibGVTZWFyY2hUZXh0IH0gZnJvbSAnLi4vdXRpbHMvdHJhbnNjcmlwdFNlYXJjaC5qcydcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGl2aWRlci5qcydcbmltcG9ydCB0eXBlIHsgVW5zZWVuRGl2aWRlciB9IGZyb20gJy4vRnVsbHNjcmVlbkxheW91dC5qcydcbmltcG9ydCB7IExvZ29WMiB9IGZyb20gJy4vTG9nb1YyL0xvZ29WMi5qcydcbmltcG9ydCB7IFN0cmVhbWluZ01hcmtkb3duIH0gZnJvbSAnLi9NYXJrZG93bi5qcydcbmltcG9ydCB7IGhhc0NvbnRlbnRBZnRlckluZGV4LCBNZXNzYWdlUm93IH0gZnJvbSAnLi9NZXNzYWdlUm93LmpzJ1xuaW1wb3J0IHtcbiAgSW5WaXJ0dWFsTGlzdENvbnRleHQsXG4gIHR5cGUgTWVzc2FnZUFjdGlvbnNOYXYsXG4gIE1lc3NhZ2VBY3Rpb25zU2VsZWN0ZWRDb250ZXh0LFxuICB0eXBlIE1lc3NhZ2VBY3Rpb25zU3RhdGUsXG59IGZyb20gJy4vbWVzc2FnZUFjdGlvbnMuanMnXG5pbXBvcnQgeyBBc3Npc3RhbnRUaGlua2luZ01lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzL0Fzc2lzdGFudFRoaW5raW5nTWVzc2FnZS5qcydcbmltcG9ydCB7IGlzTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnQgfSBmcm9tICcuL21lc3NhZ2VzL251bGxSZW5kZXJpbmdBdHRhY2htZW50cy5qcydcbmltcG9ydCB7IE9mZnNjcmVlbkZyZWV6ZSB9IGZyb20gJy4vT2Zmc2NyZWVuRnJlZXplLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sVXNlQ29uZmlybSB9IGZyb20gJy4vcGVybWlzc2lvbnMvUGVybWlzc2lvblJlcXVlc3QuanMnXG5pbXBvcnQgeyBTdGF0dXNOb3RpY2VzIH0gZnJvbSAnLi9TdGF0dXNOb3RpY2VzLmpzJ1xuaW1wb3J0IHR5cGUgeyBKdW1wSGFuZGxlIH0gZnJvbSAnLi9WaXJ0dWFsTWVzc2FnZUxpc3QuanMnXG5cbi8vIE1lbW9lZCBsb2dvIGhlYWRlcjogdGhpcyBib3ggaXMgdGhlIEZJUlNUIHNpYmxpbmcgYmVmb3JlIGFsbCBNZXNzYWdlUm93c1xuLy8gaW4gbWFpbi1zY3JlZW4gbW9kZS4gSWYgaXQgYmVjb21lcyBkaXJ0eSBvbiBldmVyeSBNZXNzYWdlcyByZS1yZW5kZXIsXG4vLyByZW5kZXJDaGlsZHJlbidzIHNlZW5EaXJ0eUNoaWxkIGNhc2NhZGUgZGlzYWJsZXMgcHJldlNjcmVlbiAoYmxpdCkgZm9yXG4vLyBBTEwgc3Vic2VxdWVudCBzaWJsaW5ncyDigJQgZXZlcnkgTWVzc2FnZVJvdyByZS13cml0ZXMgZnJvbSBzY3JhdGNoIGluc3RlYWRcbi8vIG9mIGJsaXR0aW5nLiBJbiBsb25nIHNlc3Npb25zICh+MjgwMCBtZXNzYWdlcykgdGhpcyBpcyAxNTBLKyB3cml0ZXMvZnJhbWVcbi8vIGFuZCBwZWdzIENQVSBhdCAxMDAlLiBNZW1vIG9uIGFnZW50RGVmaW5pdGlvbnMgc28gYSBuZXcgbWVzc2FnZXMgYXJyYXlcbi8vIGRvZXNuJ3QgaW52YWxpZGF0ZSB0aGUgbG9nbyBzdWJ0cmVlLiBMb2dvVjIvU3RhdHVzTm90aWNlcyBpbnRlcm5hbGx5XG4vLyBzdWJzY3JpYmUgdG8gdXNlQXBwU3RhdGUvdXNlU2V0dGluZ3MgZm9yIHRoZWlyIG93biB1cGRhdGVzLlxuY29uc3QgTG9nb0hlYWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gTG9nb0hlYWRlcih7XG4gIGFnZW50RGVmaW5pdGlvbnMsXG59OiB7XG4gIGFnZW50RGVmaW5pdGlvbnM6IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfCB1bmRlZmluZWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBMb2dvVjIgaGFzIGl0cyBvd24gaW50ZXJuYWwgT2Zmc2NyZWVuRnJlZXplIChjYXRjaGVzIGl0cyB1c2VBcHBTdGF0ZVxuICAvLyByZS1yZW5kZXJzKS4gVGhpcyBvdXRlciBmcmVlemUgY2F0Y2hlcyBhZ2VudERlZmluaXRpb25zIGNoYW5nZXMgYW5kIGFueVxuICAvLyBmdXR1cmUgU3RhdHVzTm90aWNlcyBzdWJzY3JpcHRpb25zIHdoaWxlIHRoZSBoZWFkZXIgaXMgaW4gc2Nyb2xsYmFjay5cbiAgcmV0dXJuIChcbiAgICA8T2Zmc2NyZWVuRnJlZXplPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPExvZ29WMiAvPlxuICAgICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgICAgIDxTdGF0dXNOb3RpY2VzIGFnZW50RGVmaW5pdGlvbnM9e2FnZW50RGVmaW5pdGlvbnN9IC8+XG4gICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgICA8L0JveD5cbiAgICA8L09mZnNjcmVlbkZyZWV6ZT5cbiAgKVxufSlcblxuLy8gRGVhZCBjb2RlIGVsaW1pbmF0aW9uOiBjb25kaXRpb25hbCBpbXBvcnQgZm9yIHByb2FjdGl2ZSBtb2RlXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5jb25zdCBwcm9hY3RpdmVNb2R1bGUgPVxuICBmZWF0dXJlKCdQUk9BQ1RJVkUnKSB8fCBmZWF0dXJlKCdLQUlST1MnKVxuICAgID8gcmVxdWlyZSgnLi4vcHJvYWN0aXZlL2luZGV4LmpzJylcbiAgICA6IG51bGxcbmNvbnN0IEJSSUVGX1RPT0xfTkFNRTogc3RyaW5nIHwgbnVsbCA9XG4gIGZlYXR1cmUoJ0tBSVJPUycpIHx8IGZlYXR1cmUoJ0tBSVJPU19CUklFRicpXG4gICAgPyAoXG4gICAgICAgIHJlcXVpcmUoJy4uL3Rvb2xzL0JyaWVmVG9vbC9wcm9tcHQuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi90b29scy9CcmllZlRvb2wvcHJvbXB0LmpzJylcbiAgICAgICkuQlJJRUZfVE9PTF9OQU1FXG4gICAgOiBudWxsXG5jb25zdCBTRU5EX1VTRVJfRklMRV9UT09MX05BTUU6IHN0cmluZyB8IG51bGwgPSBmZWF0dXJlKCdLQUlST1MnKVxuICA/IChcbiAgICAgIHJlcXVpcmUoJy4uL3Rvb2xzL1NlbmRVc2VyRmlsZVRvb2wvcHJvbXB0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vdG9vbHMvU2VuZFVzZXJGaWxlVG9vbC9wcm9tcHQuanMnKVxuICAgICkuU0VORF9VU0VSX0ZJTEVfVE9PTF9OQU1FXG4gIDogbnVsbFxuXG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmltcG9ydCB7IFZpcnR1YWxNZXNzYWdlTGlzdCB9IGZyb20gJy4vVmlydHVhbE1lc3NhZ2VMaXN0LmpzJ1xuXG4vKipcbiAqIEluIGJyaWVmLW9ubHkgbW9kZSwgZmlsdGVyIG1lc3NhZ2VzIHRvIHNob3cgT05MWSBCcmllZiB0b29sX3VzZSBibG9ja3MsXG4gKiB0aGVpciB0b29sX3Jlc3VsdHMsIGFuZCByZWFsIHVzZXIgaW5wdXQuIEFsbCBhc3Npc3RhbnQgdGV4dCBpcyBkcm9wcGVkIOKAlFxuICogaWYgdGhlIG1vZGVsIGZvcmdldHMgdG8gY2FsbCBCcmllZiwgdGhlIHVzZXIgc2VlcyBub3RoaW5nIGZvciB0aGF0IHR1cm4uXG4gKiBUaGF0J3Mgb24gdGhlIG1vZGVsIHRvIGdldCByaWdodDsgdGhlIGZpbHRlciBkb2VzIG5vdCBzZWNvbmQtZ3Vlc3MgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGb3JCcmllZlRvb2w8XG4gIFQgZXh0ZW5kcyB7XG4gICAgdHlwZTogc3RyaW5nXG4gICAgc3VidHlwZT86IHN0cmluZ1xuICAgIGlzTWV0YT86IGJvb2xlYW5cbiAgICBpc0FwaUVycm9yTWVzc2FnZT86IGJvb2xlYW5cbiAgICBtZXNzYWdlPzoge1xuICAgICAgY29udGVudDogQXJyYXk8e1xuICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgICAgbmFtZT86IHN0cmluZ1xuICAgICAgICB0b29sX3VzZV9pZD86IHN0cmluZ1xuICAgICAgfT5cbiAgICB9XG4gICAgYXR0YWNobWVudD86IHtcbiAgICAgIHR5cGU6IHN0cmluZ1xuICAgICAgaXNNZXRhPzogYm9vbGVhblxuICAgICAgb3JpZ2luPzogdW5rbm93blxuICAgICAgY29tbWFuZE1vZGU/OiBzdHJpbmdcbiAgICB9XG4gIH0sXG4+KG1lc3NhZ2VzOiBUW10sIGJyaWVmVG9vbE5hbWVzOiBzdHJpbmdbXSk6IFRbXSB7XG4gIGNvbnN0IG5hbWVTZXQgPSBuZXcgU2V0KGJyaWVmVG9vbE5hbWVzKVxuICAvLyB0b29sX3VzZSBhbHdheXMgcHJlY2VkZXMgaXRzIHRvb2xfcmVzdWx0IGluIHRoZSBhcnJheSwgc28gd2UgY2FuIGNvbGxlY3RcbiAgLy8gSURzIGFuZCBtYXRjaCBhZ2FpbnN0IHRoZW0gaW4gYSBzaW5nbGUgcGFzcy5cbiAgY29uc3QgYnJpZWZUb29sVXNlSURzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgcmV0dXJuIG1lc3NhZ2VzLmZpbHRlcihtc2cgPT4ge1xuICAgIC8vIFN5c3RlbSBtZXNzYWdlcyAoYXR0YWNoIGNvbmZpcm1hdGlvbiwgcmVtb3RlIGVycm9ycywgY29tcGFjdCBib3VuZGFyaWVzKVxuICAgIC8vIG11c3Qgc3RheSB2aXNpYmxlIOKAlCBkcm9wcGluZyB0aGVtIGxlYXZlcyB0aGUgdmlld2VyIHdpdGggbm8gZmVlZGJhY2suXG4gICAgLy8gRXhjZXB0aW9uOiBhcGlfbWV0cmljcyBpcyBwZXItdHVybiBkZWJ1ZyBub2lzZSAoVFRGVCwgY29uZmlnIHdyaXRlcyxcbiAgICAvLyBob29rIHRpbWluZykgdGhhdCBkZWZlYXRzIHRoZSBwb2ludCBvZiBicmllZiBtb2RlLiBTdGlsbCB2aXNpYmxlIGluXG4gICAgLy8gdHJhbnNjcmlwdCBtb2RlIChjdHJsK28pIHdoaWNoIGJ5cGFzc2VzIHRoaXMgZmlsdGVyLlxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3N5c3RlbScpIHJldHVybiBtc2cuc3VidHlwZSAhPT0gJ2FwaV9tZXRyaWNzJ1xuICAgIGNvbnN0IGJsb2NrID0gbXNnLm1lc3NhZ2U/LmNvbnRlbnRbMF1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAvLyBBUEkgZXJyb3IgbWVzc2FnZXMgKGF1dGggZmFpbHVyZXMsIHJhdGUgbGltaXRzLCBldGMuKSBtdXN0IHN0YXkgdmlzaWJsZVxuICAgICAgaWYgKG1zZy5pc0FwaUVycm9yTWVzc2FnZSkgcmV0dXJuIHRydWVcbiAgICAgIC8vIEtlZXAgQnJpZWYgdG9vbF91c2UgYmxvY2tzIChyZW5kZXJzIHdpdGggc3RhbmRhcmQgdG9vbCBjYWxsIGNocm9tZSxcbiAgICAgIC8vIGFuZCBtdXN0IGJlIGluIHRoZSBsaXN0IHNvIGJ1aWxkTWVzc2FnZUxvb2t1cHMgY2FuIHJlc29sdmUgdG9vbCByZXN1bHRzKVxuICAgICAgaWYgKGJsb2NrPy50eXBlID09PSAndG9vbF91c2UnICYmIGJsb2NrLm5hbWUgJiYgbmFtZVNldC5oYXMoYmxvY2submFtZSkpIHtcbiAgICAgICAgaWYgKCdpZCcgaW4gYmxvY2spIHtcbiAgICAgICAgICBicmllZlRvb2xVc2VJRHMuYWRkKChibG9jayBhcyB7IGlkOiBzdHJpbmcgfSkuaWQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgaWYgKGJsb2NrPy50eXBlID09PSAndG9vbF9yZXN1bHQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYmxvY2sudG9vbF91c2VfaWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIGJyaWVmVG9vbFVzZUlEcy5oYXMoYmxvY2sudG9vbF91c2VfaWQpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIC8vIFJlYWwgdXNlciBpbnB1dCBvbmx5IOKAlCBkcm9wIG1ldGEvdGljayBtZXNzYWdlcy5cbiAgICAgIHJldHVybiAhbXNnLmlzTWV0YVxuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhdHRhY2htZW50Jykge1xuICAgICAgLy8gSHVtYW4gaW5wdXQgZHJhaW5lZCBtaWQtdHVybiBhcnJpdmVzIGFzIGEgcXVldWVkX2NvbW1hbmQgYXR0YWNobWVudFxuICAgICAgLy8gKHF1ZXJ5LnRzIG1pZC1jaGFpbiBkcmFpbiDihpIgZ2V0UXVldWVkQ29tbWFuZEF0dGFjaG1lbnRzKS4gS2VlcCBpdCDigJRcbiAgICAgIC8vIGl0J3Mgd2hhdCB0aGUgdXNlciB0eXBlZC4gY29tbWFuZE1vZGUgPT09ICdwcm9tcHQnIHBvc2l0aXZlbHlcbiAgICAgIC8vIGlkZW50aWZpZXMgaHVtYW4tdHlwZWQgaW5wdXQ7IHRhc2stbm90aWZpY2F0aW9uIGNhbGxlcnMgc2V0XG4gICAgICAvLyBtb2RlOiAndGFzay1ub3RpZmljYXRpb24nIGJ1dCBub3Qgb3JpZ2luL2lzTWV0YSwgc28gdGhlIHBvc2l0aXZlXG4gICAgICAvLyBjb21tYW5kTW9kZSBjaGVjayBpcyByZXF1aXJlZCB0byBleGNsdWRlIHRoZW0uXG4gICAgICBjb25zdCBhdHQgPSBtc2cuYXR0YWNobWVudFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXR0Py50eXBlID09PSAncXVldWVkX2NvbW1hbmQnICYmXG4gICAgICAgIGF0dC5jb21tYW5kTW9kZSA9PT0gJ3Byb21wdCcgJiZcbiAgICAgICAgIWF0dC5pc01ldGEgJiZcbiAgICAgICAgYXR0Lm9yaWdpbiA9PT0gdW5kZWZpbmVkXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxufVxuXG4vKipcbiAqIEZ1bGwtdHJhbnNjcmlwdCBjb21wYW5pb24gdG8gZmlsdGVyRm9yQnJpZWZUb29sLiBXaGVuIHRoZSBCcmllZiB0b29sIGlzXG4gKiBpbiB1c2UsIHRoZSBtb2RlbCdzIHRleHQgb3V0cHV0IGlzIHJlZHVuZGFudCB3aXRoIHRoZSBTZW5kVXNlck1lc3NhZ2VcbiAqIGNvbnRlbnQgaXQgd3JvdGUgcmlnaHQgYWZ0ZXIg4oCUIGRyb3AgdGhlIHRleHQgc28gb25seSB0aGUgU2VuZFVzZXJNZXNzYWdlXG4gKiBibG9jayBzaG93cy4gVG9vbCBjYWxscyBhbmQgdGhlaXIgcmVzdWx0cyBzdGF5IHZpc2libGUuXG4gKlxuICogUGVyLXR1cm46IG9ubHkgZHJvcHMgdGV4dCBpbiB0dXJucyB0aGF0IGFjdHVhbGx5IGNhbGxlZCBCcmllZi4gSWYgdGhlXG4gKiBtb2RlbCBmb3JnZXRzLCB0ZXh0IHN0aWxsIHNob3dzIOKAlCBvdGhlcndpc2UgdGhlIHVzZXIgd291bGQgc2VlIG5vdGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcm9wVGV4dEluQnJpZWZUdXJuczxcbiAgVCBleHRlbmRzIHtcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBpc01ldGE/OiBib29sZWFuXG4gICAgbWVzc2FnZT86IHsgY29udGVudDogQXJyYXk8eyB0eXBlOiBzdHJpbmc7IG5hbWU/OiBzdHJpbmcgfT4gfVxuICB9LFxuPihtZXNzYWdlczogVFtdLCBicmllZlRvb2xOYW1lczogc3RyaW5nW10pOiBUW10ge1xuICBjb25zdCBuYW1lU2V0ID0gbmV3IFNldChicmllZlRvb2xOYW1lcylcbiAgLy8gRmlyc3QgcGFzczogZmluZCB3aGljaCB0dXJucyAoYm91bmRlZCBieSBub24tbWV0YSB1c2VyIG1lc3NhZ2VzKSBjb250YWluXG4gIC8vIGEgQnJpZWYgdG9vbF91c2UuIFRhZyBlYWNoIGFzc2lzdGFudCB0ZXh0IGJsb2NrIHdpdGggaXRzIHR1cm4gaW5kZXguXG4gIGNvbnN0IHR1cm5zV2l0aEJyaWVmID0gbmV3IFNldDxudW1iZXI+KClcbiAgY29uc3QgdGV4dEluZGV4VG9UdXJuOiBudW1iZXJbXSA9IFtdXG4gIGxldCB0dXJuID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbXNnID0gbWVzc2FnZXNbaV0hXG4gICAgY29uc3QgYmxvY2sgPSBtc2cubWVzc2FnZT8uY29udGVudFswXVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInICYmIGJsb2NrPy50eXBlICE9PSAndG9vbF9yZXN1bHQnICYmICFtc2cuaXNNZXRhKSB7XG4gICAgICB0dXJuKytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgIGlmIChibG9jaz8udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRleHRJbmRleFRvVHVybltpXSA9IHR1cm5cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGJsb2NrPy50eXBlID09PSAndG9vbF91c2UnICYmXG4gICAgICAgIGJsb2NrLm5hbWUgJiZcbiAgICAgICAgbmFtZVNldC5oYXMoYmxvY2submFtZSlcbiAgICAgICkge1xuICAgICAgICB0dXJuc1dpdGhCcmllZi5hZGQodHVybilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHR1cm5zV2l0aEJyaWVmLnNpemUgPT09IDApIHJldHVybiBtZXNzYWdlc1xuICAvLyBTZWNvbmQgcGFzczogZHJvcCB0ZXh0IGJsb2NrcyB3aG9zZSB0dXJuIGNhbGxlZCBCcmllZi5cbiAgcmV0dXJuIG1lc3NhZ2VzLmZpbHRlcigoXywgaSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0ZXh0SW5kZXhUb1R1cm5baV1cbiAgICByZXR1cm4gdCA9PT0gdW5kZWZpbmVkIHx8ICF0dXJuc1dpdGhCcmllZi5oYXModClcbiAgfSlcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VUeXBlW11cbiAgdG9vbHM6IFRvb2xzXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgdmVyYm9zZTogYm9vbGVhblxuICB0b29sSlNYOiB7XG4gICAganN4OiBSZWFjdC5SZWFjdE5vZGUgfCBudWxsXG4gICAgc2hvdWxkSGlkZVByb21wdElucHV0OiBib29sZWFuXG4gICAgc2hvdWxkQ29udGludWVBbmltYXRpb24/OiB0cnVlXG4gIH0gfCBudWxsXG4gIHRvb2xVc2VDb25maXJtUXVldWU6IFRvb2xVc2VDb25maXJtW11cbiAgaW5Qcm9ncmVzc1Rvb2xVc2VJRHM6IFNldDxzdHJpbmc+XG4gIGlzTWVzc2FnZVNlbGVjdG9yVmlzaWJsZTogYm9vbGVhblxuICBjb252ZXJzYXRpb25JZDogc3RyaW5nXG4gIHNjcmVlbjogU2NyZWVuXG4gIHN0cmVhbWluZ1Rvb2xVc2VzOiBTdHJlYW1pbmdUb29sVXNlW11cbiAgc2hvd0FsbEluVHJhbnNjcmlwdD86IGJvb2xlYW5cbiAgYWdlbnREZWZpbml0aW9ucz86IEFnZW50RGVmaW5pdGlvbnNSZXN1bHRcbiAgb25PcGVuUmF0ZUxpbWl0T3B0aW9ucz86ICgpID0+IHZvaWRcbiAgLyoqIEhpZGUgdGhlIGxvZ28vaGVhZGVyIC0gdXNlZCBmb3Igc3ViYWdlbnQgem9vbSB2aWV3ICovXG4gIGhpZGVMb2dvPzogYm9vbGVhblxuICBpc0xvYWRpbmc6IGJvb2xlYW5cbiAgLyoqIEluIHRyYW5zY3JpcHQgbW9kZSwgaGlkZSBhbGwgdGhpbmtpbmcgYmxvY2tzIGV4Y2VwdCB0aGUgbGFzdCBvbmUgKi9cbiAgaGlkZVBhc3RUaGlua2luZz86IGJvb2xlYW5cbiAgLyoqIFN0cmVhbWluZyB0aGlua2luZyBjb250ZW50IChsaXZlIHVwZGF0ZXMsIG5vdCBmcm96ZW4pICovXG4gIHN0cmVhbWluZ1RoaW5raW5nPzogU3RyZWFtaW5nVGhpbmtpbmcgfCBudWxsXG4gIC8qKiBTdHJlYW1pbmcgdGV4dCBwcmV2aWV3IChyZW5kZXJlZCBhcyBsYXN0IGl0ZW0gc28gdHJhbnNpdGlvbiB0byBmaW5hbCBtZXNzYWdlIGlzIHBvc2l0aW9uYWxseSBzZWFtbGVzcykgKi9cbiAgc3RyZWFtaW5nVGV4dD86IHN0cmluZyB8IG51bGxcbiAgLyoqIFdoZW4gdHJ1ZSwgb25seSBzaG93IEJyaWVmIHRvb2wgb3V0cHV0IChoaWRlIGV2ZXJ5dGhpbmcgZWxzZSkgKi9cbiAgaXNCcmllZk9ubHk/OiBib29sZWFuXG4gIC8qKiBGdWxsc2NyZWVuLW1vZGUgXCLilIDilIDilIAgTiBuZXcg4pSA4pSA4pSAXCIgZGl2aWRlci4gUmVuZGVycyBiZWZvcmUgdGhlIGZpcnN0XG4gICAqICByZW5kZXJhYmxlTWVzc2FnZSBkZXJpdmVkIGZyb20gZmlyc3RVbnNlZW5VdWlkIChtYXRjaGVkIGJ5IHRoZSAyNC1jaGFyXG4gICAqICBwcmVmaXggdGhhdCBkZXJpdmVVVUlEIHByZXNlcnZlcykuICovXG4gIHVuc2VlbkRpdmlkZXI/OiBVbnNlZW5EaXZpZGVyXG4gIC8qKiBGdWxsc2NyZWVuLW1vZGUgU2Nyb2xsQm94IGhhbmRsZS4gRW5hYmxlcyBSZWFjdC1sZXZlbCB2aXJ0dWFsaXphdGlvbiB3aGVuIHByZXNlbnQuICovXG4gIHNjcm9sbFJlZj86IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPlxuICAvKiogRnVsbHNjcmVlbi1tb2RlOiBlbmFibGUgc3RpY2t5LXByb21wdCB0cmFja2luZyAod3JpdGVzIHZpYSBTY3JvbGxDaHJvbWVDb250ZXh0KS4gKi9cbiAgdHJhY2tTdGlja3lQcm9tcHQ/OiBib29sZWFuXG4gIC8qKiBUcmFuc2NyaXB0IHNlYXJjaDoganVtcC10by1pbmRleCArIHNldFNlYXJjaFF1ZXJ5L25leHRNYXRjaC9wcmV2TWF0Y2guICovXG4gIGp1bXBSZWY/OiBSZWZPYmplY3Q8SnVtcEhhbmRsZSB8IG51bGw+XG4gIC8qKiBUcmFuc2NyaXB0IHNlYXJjaDogZmlyZXMgd2hlbiBtYXRjaCBjb3VudC9wb3NpdGlvbiBjaGFuZ2VzLiAqL1xuICBvblNlYXJjaE1hdGNoZXNDaGFuZ2U/OiAoY291bnQ6IG51bWJlciwgY3VycmVudDogbnVtYmVyKSA9PiB2b2lkXG4gIC8qKiBQYWludCBhbiBleGlzdGluZyBET00gc3VidHJlZSB0byBmcmVzaCBTY3JlZW4sIHNjYW4uIEVsZW1lbnQgY29tZXNcbiAgICogIGZyb20gdGhlIG1haW4gdHJlZSAoYWxsIHJlYWwgcHJvdmlkZXJzKS4gTWVzc2FnZS1yZWxhdGl2ZSBwb3NpdGlvbnMuICovXG4gIHNjYW5FbGVtZW50PzogKFxuICAgIGVsOiBpbXBvcnQoJy4uL2luay9kb20uanMnKS5ET01FbGVtZW50LFxuICApID0+IGltcG9ydCgnLi4vaW5rL3JlbmRlci10by1zY3JlZW4uanMnKS5NYXRjaFBvc2l0aW9uW11cbiAgLyoqIFBvc2l0aW9uLWJhc2VkIENVUlJFTlQgaGlnaGxpZ2h0LiBwb3NpdGlvbnMgc3RhYmxlIChtc2ctcmVsYXRpdmUpLFxuICAgKiAgcm93T2Zmc2V0IHRyYWNrcyBzY3JvbGwuIG51bGwgY2xlYXJzLiAqL1xuICBzZXRQb3NpdGlvbnM/OiAoXG4gICAgc3RhdGU6IHtcbiAgICAgIHBvc2l0aW9uczogaW1wb3J0KCcuLi9pbmsvcmVuZGVyLXRvLXNjcmVlbi5qcycpLk1hdGNoUG9zaXRpb25bXVxuICAgICAgcm93T2Zmc2V0OiBudW1iZXJcbiAgICAgIGN1cnJlbnRJZHg6IG51bWJlclxuICAgIH0gfCBudWxsLFxuICApID0+IHZvaWRcbiAgLyoqIEJ5cGFzcyBNQVhfTUVTU0FHRVNfV0lUSE9VVF9WSVJUVUFMSVpBVElPTi4gRm9yIG9uZS1zaG90IGhlYWRsZXNzIHJlbmRlcnNcbiAgICogIChlLmcuIC9leHBvcnQgdmlhIHJlbmRlclRvU3RyaW5nKSB3aGVyZSB0aGUgbWVtb3J5IGNvbmNlcm4gZG9lc24ndCBhcHBseVxuICAgKiAgYW5kIHRoZSBcImFscmVhZHkgaW4gc2Nyb2xsYmFja1wiIGp1c3RpZmljYXRpb24gZG9lc24ndCBob2xkLiAqL1xuICBkaXNhYmxlUmVuZGVyQ2FwPzogYm9vbGVhblxuICAvKiogSW4tdHJhbnNjcmlwdCBjdXJzb3I7IGV4cGFuZGVkIG92ZXJyaWRlcyB2ZXJib3NlIGZvciBzZWxlY3RlZCBtZXNzYWdlLiAqL1xuICBjdXJzb3I/OiBNZXNzYWdlQWN0aW9uc1N0YXRlIHwgbnVsbFxuICBzZXRDdXJzb3I/OiAoY3Vyc29yOiBNZXNzYWdlQWN0aW9uc1N0YXRlIHwgbnVsbCkgPT4gdm9pZFxuICAvKiogUGFzc2VkIHRocm91Z2ggdG8gVmlydHVhbE1lc3NhZ2VMaXN0IChoZWlnaHRDYWNoZSBvd25zIHZpc2liaWxpdHkpLiAqL1xuICBjdXJzb3JOYXZSZWY/OiBSZWFjdC5SZWY8TWVzc2FnZUFjdGlvbnNOYXY+XG4gIC8qKiBSZW5kZXIgb25seSBjb2xsYXBzZWQuc2xpY2Uoc3RhcnQsIGVuZCkuIEZvciBjaHVua2VkIGhlYWRsZXNzIGV4cG9ydFxuICAgKiAgKHN0cmVhbVJlbmRlcmVkTWVzc2FnZXMgaW4gZXhwb3J0UmVuZGVyZXIudHN4KTogcHJlcCBydW5zIG9uIHRoZSBGVUxMXG4gICAqICBtZXNzYWdlcyBhcnJheSBzbyBncm91cGluZy9sb29rdXBzIGFyZSBjb3JyZWN0LCBidXQgb25seSB0aGlzIHNsaWNlXG4gICAqICBjaHVuayBpbnN0ZWFkIG9mIHRoZSBmdWxsIHNlc3Npb24uIFRoZSBsb2dvIHJlbmRlcnMgb25seSBmb3IgY2h1bmsgMFxuICAgKiAgKHN0YXJ0ID09PSAwKTsgbGF0ZXIgY2h1bmtzIGFyZSBtaWQtc3RyZWFtIGNvbnRpbnVhdGlvbnMuXG4gICAqICBNZWFzdXJlZCBNYXIgMjAyNjogNTM4LW1zZyBzZXNzaW9uLCAyMCBzbGljZXMg4oaSIOKIkjU1JSBwbGF0ZWF1IFJTUy4gKi9cbiAgcmVuZGVyUmFuZ2U/OiByZWFkb25seSBbc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXJdXG59XG5cbmNvbnN0IE1BWF9NRVNTQUdFU19UT19TSE9XX0lOX1RSQU5TQ1JJUFRfTU9ERSA9IDMwXG5cbi8vIFNhZmV0eSBjYXAgZm9yIHRoZSBub24tdmlydHVhbGl6ZWQgcmVuZGVyIHBhdGggKGZ1bGxzY3JlZW4gb2ZmIG9yXG4vLyBleHBsaWNpdGx5IGRpc2FibGVkKS4gSW5rIG1vdW50cyBhIGZ1bGwgZmliZXIgdHJlZSBwZXIgbWVzc2FnZSAofjI1MCBLQlxuLy8gUlNTIGVhY2gpOyB5b2dhIGxheW91dCBoZWlnaHQgZ3Jvd3MgdW5ib3VuZGVkOyB0aGUgc2NyZWVuIGJ1ZmZlciBpcyBzaXplZFxuLy8gdG8gZml0IGV2ZXJ5IGxpbmUuIEF0IH4yMDAwIG1lc3NhZ2VzIHRoaXMgaXMgfjMwMDAtbGluZSBzY3JlZW5zLCB+NTAwIE1CXG4vLyBvZiBmaWJlcnMsIGFuZCBwZXItZnJhbWUgd3JpdGUgY29zdHMgdGhhdCBwdXNoIHRoZSBwcm9jZXNzIGludG8gYSBHQ1xuLy8gZGVhdGggc3BpcmFsIChvYnNlcnZlZDogNTkgR0IgUlNTLCAxNGsgbW1hcC9tdW5tYXAvc2VjKS4gQ29udGVudCBkcm9wcGVkXG4vLyBmcm9tIHRoaXMgc2xpY2UgaGFzIGFscmVhZHkgYmVlbiBwcmludGVkIHRvIHRlcm1pbmFsIHNjcm9sbGJhY2sg4oCUIHVzZXJzXG4vLyBjYW4gc3RpbGwgc2Nyb2xsIHVwIG5hdGl2ZWx5LiBWaXJ0dWFsTWVzc2FnZUxpc3QgKHRoZSBkZWZhdWx0IGFudCBwYXRoKVxuLy8gYnlwYXNzZXMgdGhpcyBjYXAgZW50aXJlbHkuIEhlYWRsZXNzIG9uZS1zaG90IHJlbmRlcnMgKGUuZy4gL2V4cG9ydClcbi8vIHBhc3MgZGlzYWJsZVJlbmRlckNhcCB0byBvcHQgb3V0IOKAlCB0aGV5IGhhdmUgbm8gc2Nyb2xsYmFjayBhbmQgdGhlXG4vLyBtZW1vcnkgY29uY2VybiBkb2Vzbid0IGFwcGx5IHRvIHJlbmRlclRvU3RyaW5nLlxuLy9cbi8vIFRoZSBzbGljZSBib3VuZGFyeSBpcyB0cmFja2VkIGFzIGEgVVVJRCBhbmNob3IsIG5vdCBhIGNvdW50LWRlcml2ZWRcbi8vIGluZGV4LiBDb3VudC1iYXNlZCBzbGljaW5nIChzbGljZSgtMjAwKSkgZHJvcHMgb25lIG1lc3NhZ2UgZnJvbSB0aGVcbi8vIGZyb250IG9uIGV2ZXJ5IGFwcGVuZCwgc2hpZnRpbmcgc2Nyb2xsYmFjayBjb250ZW50IGFuZCBmb3JjaW5nIGEgZnVsbFxuLy8gdGVybWluYWwgcmVzZXQgcGVyIHR1cm4gKENDLTk0MSkuIFF1YW50aXppbmcgdG8gNTAtbWVzc2FnZSBzdGVwc1xuLy8gKENDLTExNTQpIGhlbHBlZCBidXQgc3RpbGwgc2hpZnRlZCBvbiBjb21wYWN0aW9uIGFuZCBjb2xsYXBzZSByZWdyb3VwaW5nXG4vLyBzaW5jZSB0aG9zZSBjaGFuZ2UgY29sbGFwc2VkLmxlbmd0aCB3aXRob3V0IGFkZGluZyBtZXNzYWdlcy4gVGhlIFVVSURcbi8vIGFuY2hvciBvbmx5IGFkdmFuY2VzIHdoZW4gcmVuZGVyZWQgY291bnQgZ2VudWluZWx5IGV4Y2VlZHMgQ0FQK1NURVAg4oCUXG4vLyBpbW11bmUgdG8gbGVuZ3RoIGNodXJuIGZyb20gZ3JvdXBpbmcvY29tcGFjdGlvbiAoQ0MtMTE3NCkuXG4vL1xuLy8gVGhlIGFuY2hvciBzdG9yZXMgQk9USCB1dWlkIGFuZCBpbmRleC4gU29tZSB1dWlkcyBhcmUgdW5zdGFibGUgYmV0d2VlblxuLy8gcmVuZGVyczogY29sbGFwc2VIb29rU3VtbWFyaWVzIGRlcml2ZXMgdGhlIG1lcmdlZCB1dWlkIGZyb20gdGhlIGZpcnN0XG4vLyBzdW1tYXJ5IGluIGEgZ3JvdXAsIGJ1dCByZW9yZGVyTWVzc2FnZXNJblVJIHJlc2h1ZmZsZXMgaG9vayBhZGphY2VuY3lcbi8vIGFzIHRvb2wgcmVzdWx0cyBzdHJlYW0gaW4sIGNoYW5naW5nIHdoaWNoIHN1bW1hcnkgaXMgZmlyc3QuIFdoZW4gdGhlXG4vLyB1dWlkIHZhbmlzaGVzLCBmYWxsaW5nIGJhY2sgdG8gdGhlIHN0b3JlZCBpbmRleCAoY2xhbXBlZCkga2VlcHMgdGhlXG4vLyBzbGljZSByb3VnaGx5IHdoZXJlIGl0IHdhcyBpbnN0ZWFkIG9mIHJlc2V0dGluZyB0byAwIOKAlCB3aGljaCB3b3VsZFxuLy8ganVtcCBmcm9tIH4yMDAgcmVuZGVyZWQgbWVzc2FnZXMgdG8gdGhlIGZ1bGwgaGlzdG9yeSwgb3JwaGFuaW5nXG4vLyBpbi1wcm9ncmVzcyBiYWRnZSBzbmFwc2hvdHMgaW4gc2Nyb2xsYmFjay5cbmNvbnN0IE1BWF9NRVNTQUdFU19XSVRIT1VUX1ZJUlRVQUxJWkFUSU9OID0gMjAwXG5jb25zdCBNRVNTQUdFX0NBUF9TVEVQID0gNTBcblxuZXhwb3J0IHR5cGUgU2xpY2VBbmNob3IgPSB7IHV1aWQ6IHN0cmluZzsgaWR4OiBudW1iZXIgfSB8IG51bGxcblxuLyoqIEV4cG9ydGVkIGZvciB0ZXN0aW5nLiBNdXRhdGVzIGFuY2hvclJlZiB3aGVuIHRoZSB3aW5kb3cgbmVlZHMgdG8gYWR2YW5jZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlU2xpY2VTdGFydChcbiAgY29sbGFwc2VkOiBSZWFkb25seUFycmF5PHsgdXVpZDogc3RyaW5nIH0+LFxuICBhbmNob3JSZWY6IHsgY3VycmVudDogU2xpY2VBbmNob3IgfSxcbiAgY2FwID0gTUFYX01FU1NBR0VTX1dJVEhPVVRfVklSVFVBTElaQVRJT04sXG4gIHN0ZXAgPSBNRVNTQUdFX0NBUF9TVEVQLFxuKTogbnVtYmVyIHtcbiAgY29uc3QgYW5jaG9yID0gYW5jaG9yUmVmLmN1cnJlbnRcbiAgY29uc3QgYW5jaG9ySWR4ID0gYW5jaG9yXG4gICAgPyBjb2xsYXBzZWQuZmluZEluZGV4KG0gPT4gbS51dWlkID09PSBhbmNob3IudXVpZClcbiAgICA6IC0xXG4gIC8vIEFuY2hvciBmb3VuZCDihpIgdXNlIGl0LiBBbmNob3IgbG9zdCDihpIgZmFsbCBiYWNrIHRvIHN0b3JlZCBpbmRleFxuICAvLyAoY2xhbXBlZCkgc28gY29sbGFwc2UtcmVncm91cGluZyB1dWlkIGNodXJuIGRvZXNuJ3QgcmVzZXQgdG8gMC5cbiAgbGV0IHN0YXJ0ID1cbiAgICBhbmNob3JJZHggPj0gMFxuICAgICAgPyBhbmNob3JJZHhcbiAgICAgIDogYW5jaG9yXG4gICAgICAgID8gTWF0aC5taW4oYW5jaG9yLmlkeCwgTWF0aC5tYXgoMCwgY29sbGFwc2VkLmxlbmd0aCAtIGNhcCkpXG4gICAgICAgIDogMFxuICBpZiAoY29sbGFwc2VkLmxlbmd0aCAtIHN0YXJ0ID4gY2FwICsgc3RlcCkge1xuICAgIHN0YXJ0ID0gY29sbGFwc2VkLmxlbmd0aCAtIGNhcFxuICB9XG4gIC8vIFJlZnJlc2ggYW5jaG9yIGZyb20gd2hhdGV2ZXIgbGl2ZXMgYXQgdGhlIGN1cnJlbnQgc3RhcnQg4oCUIGhlYWxzIGFcbiAgLy8gc3RhbGUgdXVpZCBhZnRlciBmYWxsYmFjayBhbmQgY2FwdHVyZXMgYSBuZXcgb25lIGFmdGVyIGFkdmFuY2VtZW50LlxuICBjb25zdCBtc2dBdFN0YXJ0ID0gY29sbGFwc2VkW3N0YXJ0XVxuICBpZiAoXG4gICAgbXNnQXRTdGFydCAmJlxuICAgIChhbmNob3I/LnV1aWQgIT09IG1zZ0F0U3RhcnQudXVpZCB8fCBhbmNob3IuaWR4ICE9PSBzdGFydClcbiAgKSB7XG4gICAgYW5jaG9yUmVmLmN1cnJlbnQgPSB7IHV1aWQ6IG1zZ0F0U3RhcnQudXVpZCwgaWR4OiBzdGFydCB9XG4gIH0gZWxzZSBpZiAoIW1zZ0F0U3RhcnQgJiYgYW5jaG9yKSB7XG4gICAgYW5jaG9yUmVmLmN1cnJlbnQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIHN0YXJ0XG59XG5cbmNvbnN0IE1lc3NhZ2VzSW1wbCA9ICh7XG4gIG1lc3NhZ2VzLFxuICB0b29scyxcbiAgY29tbWFuZHMsXG4gIHZlcmJvc2UsXG4gIHRvb2xKU1gsXG4gIHRvb2xVc2VDb25maXJtUXVldWUsXG4gIGluUHJvZ3Jlc3NUb29sVXNlSURzLFxuICBpc01lc3NhZ2VTZWxlY3RvclZpc2libGUsXG4gIGNvbnZlcnNhdGlvbklkLFxuICBzY3JlZW4sXG4gIHN0cmVhbWluZ1Rvb2xVc2VzLFxuICBzaG93QWxsSW5UcmFuc2NyaXB0ID0gZmFsc2UsXG4gIGFnZW50RGVmaW5pdGlvbnMsXG4gIG9uT3BlblJhdGVMaW1pdE9wdGlvbnMsXG4gIGhpZGVMb2dvID0gZmFsc2UsXG4gIGlzTG9hZGluZyxcbiAgaGlkZVBhc3RUaGlua2luZyA9IGZhbHNlLFxuICBzdHJlYW1pbmdUaGlua2luZyxcbiAgc3RyZWFtaW5nVGV4dCxcbiAgaXNCcmllZk9ubHkgPSBmYWxzZSxcbiAgdW5zZWVuRGl2aWRlcixcbiAgc2Nyb2xsUmVmLFxuICB0cmFja1N0aWNreVByb21wdCxcbiAganVtcFJlZixcbiAgb25TZWFyY2hNYXRjaGVzQ2hhbmdlLFxuICBzY2FuRWxlbWVudCxcbiAgc2V0UG9zaXRpb25zLFxuICBkaXNhYmxlUmVuZGVyQ2FwID0gZmFsc2UsXG4gIGN1cnNvciA9IG51bGwsXG4gIHNldEN1cnNvcixcbiAgY3Vyc29yTmF2UmVmLFxuICByZW5kZXJSYW5nZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgY29uc3QgeyBjb2x1bW5zIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCB0b2dnbGVTaG93QWxsU2hvcnRjdXQgPSB1c2VTaG9ydGN1dERpc3BsYXkoXG4gICAgJ3RyYW5zY3JpcHQ6dG9nZ2xlU2hvd0FsbCcsXG4gICAgJ1RyYW5zY3JpcHQnLFxuICAgICdDdHJsK0UnLFxuICApXG5cbiAgY29uc3Qgbm9ybWFsaXplZE1lc3NhZ2VzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBub3JtYWxpemVNZXNzYWdlcyhtZXNzYWdlcykuZmlsdGVyKGlzTm90RW1wdHlNZXNzYWdlKSxcbiAgICBbbWVzc2FnZXNdLFxuICApXG5cbiAgLy8gQ2hlY2sgaWYgc3RyZWFtaW5nIHRoaW5raW5nIHNob3VsZCBiZSB2aXNpYmxlIChzdHJlYW1pbmcgb3Igd2l0aGluIDMwcyB0aW1lb3V0KVxuICBjb25zdCBpc1N0cmVhbWluZ1RoaW5raW5nVmlzaWJsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc3RyZWFtaW5nVGhpbmtpbmcpIHJldHVybiBmYWxzZVxuICAgIGlmIChzdHJlYW1pbmdUaGlua2luZy5pc1N0cmVhbWluZykgcmV0dXJuIHRydWVcbiAgICBpZiAoc3RyZWFtaW5nVGhpbmtpbmcuc3RyZWFtaW5nRW5kZWRBdCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBzdHJlYW1pbmdUaGlua2luZy5zdHJlYW1pbmdFbmRlZEF0IDwgMzAwMDBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIFtzdHJlYW1pbmdUaGlua2luZ10pXG5cbiAgLy8gRmluZCB0aGUgbGFzdCB0aGlua2luZyBibG9jayAobWVzc2FnZSBVVUlEICsgY29udGVudCBpbmRleCkgZm9yIGhpZGluZyBwYXN0IHRoaW5raW5nIGluIHRyYW5zY3JpcHQgbW9kZVxuICAvLyBXaGVuIHN0cmVhbWluZyB0aGlua2luZyBpcyB2aXNpYmxlLCB1c2UgYSBzcGVjaWFsIElEIHRoYXQgd29uJ3QgbWF0Y2ggYW55IGNvbXBsZXRlZCB0aGlua2luZyBibG9ja1xuICAvLyBXaXRoIGFkYXB0aXZlIHRoaW5raW5nLCBvbmx5IGNvbnNpZGVyIHRoaW5raW5nIGJsb2NrcyBmcm9tIHRoZSBjdXJyZW50IHR1cm4gYW5kIHN0b3Agc2VhcmNoaW5nIG9uY2Ugd2VcbiAgLy8gaGl0IHRoZSBsYXN0IHVzZXIgbWVzc2FnZS5cbiAgY29uc3QgbGFzdFRoaW5raW5nQmxvY2tJZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghaGlkZVBhc3RUaGlua2luZykgcmV0dXJuIG51bGxcbiAgICAvLyBJZiBzdHJlYW1pbmcgdGhpbmtpbmcgaXMgdmlzaWJsZSwgaGlkZSBhbGwgY29tcGxldGVkIHRoaW5raW5nIGJsb2NrcyBieSB1c2luZyBhIG5vbi1tYXRjaGluZyBJRFxuICAgIGlmIChpc1N0cmVhbWluZ1RoaW5raW5nVmlzaWJsZSkgcmV0dXJuICdzdHJlYW1pbmcnXG4gICAgLy8gSXRlcmF0ZSBiYWNrd2FyZHMgdG8gZmluZCB0aGUgbGFzdCBtZXNzYWdlIHdpdGggYSB0aGlua2luZyBibG9ja1xuICAgIGZvciAobGV0IGkgPSBub3JtYWxpemVkTWVzc2FnZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IG1zZyA9IG5vcm1hbGl6ZWRNZXNzYWdlc1tpXVxuICAgICAgaWYgKG1zZz8udHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgICAgLy8gRmluZCB0aGUgbGFzdCB0aGlua2luZyBibG9jayBpbiB0aGlzIG1lc3NhZ2VcbiAgICAgICAgZm9yIChsZXQgaiA9IGNvbnRlbnQubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICBpZiAoY29udGVudFtqXT8udHlwZSA9PT0gJ3RoaW5raW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke21zZy51dWlkfToke2p9YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtc2c/LnR5cGUgPT09ICd1c2VyJykge1xuICAgICAgICBjb25zdCBoYXNUb29sUmVzdWx0ID0gbXNnLm1lc3NhZ2UuY29udGVudC5zb21lKFxuICAgICAgICAgIGJsb2NrID0+IGJsb2NrLnR5cGUgPT09ICd0b29sX3Jlc3VsdCcsXG4gICAgICAgIClcbiAgICAgICAgaWYgKCFoYXNUb29sUmVzdWx0KSB7XG4gICAgICAgICAgLy8gUmVhY2hlZCBhIHByZXZpb3VzIHVzZXIgdHVybiBzbyBkb24ndCBzaG93IHN0YWxlIHRoaW5raW5nIGZyb20gYmVmb3JlXG4gICAgICAgICAgcmV0dXJuICduby10aGlua2luZydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9LCBbbm9ybWFsaXplZE1lc3NhZ2VzLCBoaWRlUGFzdFRoaW5raW5nLCBpc1N0cmVhbWluZ1RoaW5raW5nVmlzaWJsZV0pXG5cbiAgLy8gRmluZCB0aGUgbGF0ZXN0IHVzZXIgYmFzaCBvdXRwdXQgbWVzc2FnZSAoZnJvbSAhIGNvbW1hbmRzKVxuICAvLyBUaGlzIGFsbG93cyB1cyB0byBzaG93IGZ1bGwgb3V0cHV0IGZvciB0aGUgbW9zdCByZWNlbnQgYmFzaCBjb21tYW5kXG4gIGNvbnN0IGxhdGVzdEJhc2hPdXRwdXRVVUlEID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gSXRlcmF0ZSBiYWNrd2FyZHMgdG8gZmluZCB0aGUgbGFzdCB1c2VyIG1lc3NhZ2Ugd2l0aCBiYXNoIG91dHB1dFxuICAgIGZvciAobGV0IGkgPSBub3JtYWxpemVkTWVzc2FnZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IG1zZyA9IG5vcm1hbGl6ZWRNZXNzYWdlc1tpXVxuICAgICAgaWYgKG1zZz8udHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSB0ZXh0IGNvbnRlbnQgaXMgYmFzaCBvdXRwdXRcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGJsb2NrLnRleHRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGV4dC5zdGFydHNXaXRoKCc8YmFzaC1zdGRvdXQnKSB8fFxuICAgICAgICAgICAgICB0ZXh0LnN0YXJ0c1dpdGgoJzxiYXNoLXN0ZGVycicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1zZy51dWlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH0sIFtub3JtYWxpemVkTWVzc2FnZXNdKVxuXG4gIC8vIHN0cmVhbWluZ1Rvb2xVc2VzIHVwZGF0ZXMgb24gZXZlcnkgaW5wdXRfanNvbl9kZWx0YSB3aGlsZSBub3JtYWxpemVkTWVzc2FnZXNcbiAgLy8gc3RheXMgc3RhYmxlIOKAlCBwcmVjb21wdXRlIHRoZSBTZXQgc28gdGhlIGZpbHRlciBpcyBPKGspIG5vdCBPKG7Dl2spIHBlciBjaHVuay5cbiAgY29uc3Qgbm9ybWFsaXplZFRvb2xVc2VJRHMgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldFRvb2xVc2VJRHMobm9ybWFsaXplZE1lc3NhZ2VzKSxcbiAgICBbbm9ybWFsaXplZE1lc3NhZ2VzXSxcbiAgKVxuXG4gIGNvbnN0IHN0cmVhbWluZ1Rvb2xVc2VzV2l0aG91dEluUHJvZ3Jlc3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBzdHJlYW1pbmdUb29sVXNlcy5maWx0ZXIoXG4gICAgICAgIHN0dSA9PlxuICAgICAgICAgICFpblByb2dyZXNzVG9vbFVzZUlEcy5oYXMoc3R1LmNvbnRlbnRCbG9jay5pZCkgJiZcbiAgICAgICAgICAhbm9ybWFsaXplZFRvb2xVc2VJRHMuaGFzKHN0dS5jb250ZW50QmxvY2suaWQpLFxuICAgICAgKSxcbiAgICBbc3RyZWFtaW5nVG9vbFVzZXMsIGluUHJvZ3Jlc3NUb29sVXNlSURzLCBub3JtYWxpemVkVG9vbFVzZUlEc10sXG4gIClcblxuICBjb25zdCBzeW50aGV0aWNTdHJlYW1pbmdUb29sVXNlTWVzc2FnZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBzdHJlYW1pbmdUb29sVXNlc1dpdGhvdXRJblByb2dyZXNzLmZsYXRNYXAoc3RyZWFtaW5nVG9vbFVzZSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2Uoe1xuICAgICAgICAgIGNvbnRlbnQ6IFtzdHJlYW1pbmdUb29sVXNlLmNvbnRlbnRCbG9ja10sXG4gICAgICAgIH0pXG4gICAgICAgIC8vIE92ZXJyaWRlIHJhbmRvbVVVSUQgd2l0aCBkZXRlcm1pbmlzdGljIHZhbHVlIGRlcml2ZWQgZnJvbSBjb250ZW50XG4gICAgICAgIC8vIGJsb2NrIElEIHRvIHByZXZlbnQgUmVhY3Qga2V5IGNoYW5nZXMgb24gZXZlcnkgbWVtbyByZWNvbXB1dGF0aW9uLlxuICAgICAgICAvLyBTYW1lIGNsYXNzIG9mIGJ1ZyBmaXhlZCBpbiBub3JtYWxpemVNZXNzYWdlcyAoY29tbWl0IDM4MzMyNmU2MTMpOlxuICAgICAgICAvLyBmcmVzaCByYW5kb21VVUlEIOKGkiB1bnN0YWJsZSBSZWFjdCBrZXlzIOKGkiBjb21wb25lbnQgcmVtb3VudHMg4oaSXG4gICAgICAgIC8vIEluayByZW5kZXJpbmcgY29ycnVwdGlvbiAob3ZlcmxhcHBpbmcgdGV4dCBmcm9tIHN0YWxlIERPTSBub2RlcykuXG4gICAgICAgIG1zZy51dWlkID0gZGVyaXZlVVVJRChzdHJlYW1pbmdUb29sVXNlLmNvbnRlbnRCbG9jay5pZCBhcyBVVUlELCAwKVxuICAgICAgICByZXR1cm4gbm9ybWFsaXplTWVzc2FnZXMoW21zZ10pXG4gICAgICB9KSxcbiAgICBbc3RyZWFtaW5nVG9vbFVzZXNXaXRob3V0SW5Qcm9ncmVzc10sXG4gIClcblxuICBjb25zdCBpc1RyYW5zY3JpcHRNb2RlID0gc2NyZWVuID09PSAndHJhbnNjcmlwdCdcbiAgLy8gSG9pc3RlZCB0byBtb3VudC10aW1lIOKAlCB0aGlzIGNvbXBvbmVudCByZS1yZW5kZXJzIG9uIGV2ZXJ5IHNjcm9sbC5cbiAgY29uc3QgZGlzYWJsZVZpcnR1YWxTY3JvbGwgPSB1c2VNZW1vKFxuICAgICgpID0+IGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0RJU0FCTEVfVklSVFVBTF9TQ1JPTEwpLFxuICAgIFtdLFxuICApXG4gIC8vIFZpcnR1YWwgc2Nyb2xsIHJlcGxhY2VzIHRoZSB0cmFuc2NyaXB0IGNhcDogZXZlcnl0aGluZyBpcyBzY3JvbGxhYmxlIGFuZFxuICAvLyBtZW1vcnkgaXMgYm91bmRlZCBieSB0aGUgbW91bnRlZC1pdGVtIGNvdW50LCBub3QgdGhlIHRvdGFsLiBzY3JvbGxSZWYgaXNcbiAgLy8gb25seSBwYXNzZWQgd2hlbiBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkKCkgaXMgdHJ1ZSAoUkVQTC50c3ggZ2F0ZXMgaXQpLFxuICAvLyBzbyBzY3JvbGxSZWYncyBwcmVzZW5jZSBpcyB0aGUgc2lnbmFsLlxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUnVudGltZUdhdGUgPSBzY3JvbGxSZWYgIT0gbnVsbCAmJiAhZGlzYWJsZVZpcnR1YWxTY3JvbGxcbiAgY29uc3Qgc2hvdWxkVHJ1bmNhdGUgPVxuICAgIGlzVHJhbnNjcmlwdE1vZGUgJiYgIXNob3dBbGxJblRyYW5zY3JpcHQgJiYgIXZpcnR1YWxTY3JvbGxSdW50aW1lR2F0ZVxuXG4gIC8vIEFuY2hvciBmb3IgdGhlIGZpcnN0IHJlbmRlcmVkIG1lc3NhZ2UgaW4gdGhlIG5vbi12aXJ0dWFsaXplZCBjYXAgc2xpY2UuXG4gIC8vIE1vbm90b25pYyBhZHZhbmNlIG9ubHkg4oCUIG11dGF0aW9uIGR1cmluZyByZW5kZXIgaXMgaWRlbXBvdGVudCAoc2FmZVxuICAvLyB1bmRlciBTdHJpY3RNb2RlIGRvdWJsZS1yZW5kZXIpLiBTZWUgTUFYX01FU1NBR0VTX1dJVEhPVVRfVklSVFVBTElaQVRJT05cbiAgLy8gY29tbWVudCBhYm92ZSBmb3Igd2h5IHRoaXMgcmVwbGFjZWQgY291bnQtYmFzZWQgc2xpY2luZy5cbiAgY29uc3Qgc2xpY2VBbmNob3JSZWYgPSB1c2VSZWY8U2xpY2VBbmNob3I+KG51bGwpXG5cbiAgLy8gRXhwZW5zaXZlIG1lc3NhZ2UgdHJhbnNmb3JtcyDigJQgZmlsdGVyLCByZW9yZGVyLCBncm91cCwgY29sbGFwc2UsIGxvb2t1cHMuXG4gIC8vIEFsbCBPKG4pIG92ZXIgMjdrIG1lc3NhZ2VzLiBTcGxpdCBmcm9tIHRoZSByZW5kZXJSYW5nZSBzbGljZSBzbyBzY3JvbGxpbmdcbiAgLy8gKHdoaWNoIG9ubHkgY2hhbmdlcyByZW5kZXJSYW5nZSkgZG9lc24ndCByZS1ydW4gdGhlc2UuIFByZXZpb3VzbHkgdGhpc1xuICAvLyB1c2VNZW1vIGluY2x1ZGVkIHJlbmRlclJhbmdlIOKGkiBldmVyeSBzY3JvbGwgcmVidWlsdCA2IE1hcHMgb3ZlciAyN2tcbiAgLy8gbWVzc2FnZXMgKyA0IGZpbHRlci9tYXAgcGFzc2VzID0gfjUwbXMgYWxsb2MgcGVyIHNjcm9sbCDihpIgR0MgcHJlc3N1cmUg4oaSXG4gIC8vIDEwMC0xNzNtcyBzdG9wLXRoZS13b3JsZCBwYXVzZXMgb24gdGhlIDFHQiBoZWFwLlxuICBjb25zdCB7IGNvbGxhcHNlZCwgbG9va3VwcywgaGFzVHJ1bmNhdGVkTWVzc2FnZXMsIGhpZGRlbk1lc3NhZ2VDb3VudCB9ID1cbiAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgIC8vIEluIGZ1bGxzY3JlZW4gbW9kZSB0aGUgYWx0IGJ1ZmZlciBoYXMgbm8gbmF0aXZlIHNjcm9sbGJhY2ssIHNvIHRoZVxuICAgICAgLy8gY29tcGFjdC1ib3VuZGFyeSBmaWx0ZXIganVzdCBoaWRlcyBoaXN0b3J5IHRoZSBTY3JvbGxCb3ggY291bGRcbiAgICAgIC8vIG90aGVyd2lzZSBzY3JvbGwgdG8uIE1haW4tc2NyZWVuIG1vZGUga2VlcHMgdGhlIGZpbHRlciDigJQgcHJlLWNvbXBhY3RcbiAgICAgIC8vIHJvd3MgbGl2ZSBhYm92ZSB0aGUgdmlld3BvcnQgaW4gbmF0aXZlIHNjcm9sbGJhY2sgdGhlcmUsIGFuZFxuICAgICAgLy8gcmUtcmVuZGVyaW5nIHRoZW0gdHJpZ2dlcnMgZnVsbCByZXNldHMuXG4gICAgICAvLyBpbmNsdWRlU25pcHBlZDogVUkgcmVuZGVyaW5nIGtlZXBzIHNuaXBwZWQgbWVzc2FnZXMgZm9yIHNjcm9sbGJhY2tcbiAgICAgIC8vICh0aGlzIFBSJ3MgY29yZSBnb2FsIOKAlCBmdWxsIGhpc3RvcnkgaW4gVUksIGZpbHRlciBvbmx5IGZvciB0aGUgbW9kZWwpLlxuICAgICAgLy8gQWxzbyBhdm9pZHMgYSBVVUlEIG1pc21hdGNoOiBub3JtYWxpemVNZXNzYWdlcyBkZXJpdmVzIG5ldyBVVUlEcywgc29cbiAgICAgIC8vIHByb2plY3RTbmlwcGVkVmlldydzIGNoZWNrIGFnYWluc3Qgb3JpZ2luYWwgcmVtb3ZlZFV1aWRzIHdvdWxkIGZhaWwuXG4gICAgICBjb25zdCBjb21wYWN0QXdhcmVNZXNzYWdlcyA9XG4gICAgICAgIHZlcmJvc2UgfHwgaXNGdWxsc2NyZWVuRW52RW5hYmxlZCgpXG4gICAgICAgICAgPyBub3JtYWxpemVkTWVzc2FnZXNcbiAgICAgICAgICA6IGdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnkobm9ybWFsaXplZE1lc3NhZ2VzLCB7XG4gICAgICAgICAgICAgIGluY2x1ZGVTbmlwcGVkOiB0cnVlLFxuICAgICAgICAgICAgfSlcblxuICAgICAgY29uc3QgbWVzc2FnZXNUb1Nob3dOb3RUcnVuY2F0ZWQgPSByZW9yZGVyTWVzc2FnZXNJblVJKFxuICAgICAgICBjb21wYWN0QXdhcmVNZXNzYWdlc1xuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAobXNnKTogbXNnIGlzIEV4Y2x1ZGU8Tm9ybWFsaXplZE1lc3NhZ2UsIFByb2dyZXNzTWVzc2FnZVR5cGU+ID0+XG4gICAgICAgICAgICAgIG1zZy50eXBlICE9PSAncHJvZ3Jlc3MnLFxuICAgICAgICAgIClcbiAgICAgICAgICAvLyBDQy03MjQ6IGRyb3AgYXR0YWNobWVudCBtZXNzYWdlcyB0aGF0IEF0dGFjaG1lbnRNZXNzYWdlIHJlbmRlcnMgYXNcbiAgICAgICAgICAvLyBudWxsIChob29rX3N1Y2Nlc3MsIGhvb2tfYWRkaXRpb25hbF9jb250ZXh0LCBob29rX2NhbmNlbGxlZCwgZXRjLilcbiAgICAgICAgICAvLyBCRUZPUkUgY291bnRpbmcvc2xpY2luZyBzbyB0aGV5IGRvbid0IGluZmxhdGUgdGhlIFwiTiBtZXNzYWdlc1wiXG4gICAgICAgICAgLy8gY291bnQgaW4gY3RybC1vIG9yIGNvbnN1bWUgc2xvdHMgaW4gdGhlIDIwMC1tZXNzYWdlIHJlbmRlciBjYXAuXG4gICAgICAgICAgLmZpbHRlcihtc2cgPT4gIWlzTnVsbFJlbmRlcmluZ0F0dGFjaG1lbnQobXNnKSlcbiAgICAgICAgICAuZmlsdGVyKF8gPT4gc2hvdWxkU2hvd1VzZXJNZXNzYWdlKF8sIGlzVHJhbnNjcmlwdE1vZGUpKSxcbiAgICAgICAgc3ludGhldGljU3RyZWFtaW5nVG9vbFVzZU1lc3NhZ2VzLFxuICAgICAgKVxuICAgICAgLy8gVGhyZWUtdGllciBmaWx0ZXJpbmcuIFRyYW5zY3JpcHQgbW9kZSAoY3RybCtvIHNjcmVlbikgaXMgdHJ1bHkgdW5maWx0ZXJlZC5cbiAgICAgIC8vIEJyaWVmLW9ubHk6IFNlbmRVc2VyTWVzc2FnZSArIHVzZXIgaW5wdXQgb25seS4gRGVmYXVsdDogZHJvcCByZWR1bmRhbnRcbiAgICAgIC8vIGFzc2lzdGFudCB0ZXh0IGluIHR1cm5zIHdoZXJlIFNlbmRVc2VyTWVzc2FnZSB3YXMgY2FsbGVkICh0aGUgbW9kZWwnc1xuICAgICAgLy8gdGV4dCBpcyB3b3JraW5nLW5vdGVzIHRoYXQgZHVwbGljYXRlIHRoZSBTZW5kVXNlck1lc3NhZ2UgY29udGVudCkuXG4gICAgICBjb25zdCBicmllZlRvb2xOYW1lcyA9IFtCUklFRl9UT09MX05BTUUsIFNFTkRfVVNFUl9GSUxFX1RPT0xfTkFNRV0uZmlsdGVyKFxuICAgICAgICAobik6IG4gaXMgc3RyaW5nID0+IG4gIT09IG51bGwsXG4gICAgICApXG4gICAgICAvLyBkcm9wVGV4dEluQnJpZWZUdXJucyBzaG91bGQgb25seSB0cmlnZ2VyIG9uIFNlbmRVc2VyTWVzc2FnZSB0dXJucyDigJRcbiAgICAgIC8vIFNlbmRVc2VyRmlsZSBkZWxpdmVycyBhIGZpbGUgd2l0aG91dCByZXBsYWNlbWVudCB0ZXh0LCBzbyBkcm9wcGluZ1xuICAgICAgLy8gYXNzaXN0YW50IHRleHQgZm9yIGZpbGUtb25seSB0dXJucyB3b3VsZCBsZWF2ZSB0aGUgdXNlciB3aXRoIG5vIGNvbnRleHQuXG4gICAgICBjb25zdCBkcm9wVGV4dFRvb2xOYW1lcyA9IFtCUklFRl9UT09MX05BTUVdLmZpbHRlcihcbiAgICAgICAgKG4pOiBuIGlzIHN0cmluZyA9PiBuICE9PSBudWxsLFxuICAgICAgKVxuICAgICAgY29uc3QgYnJpZWZGaWx0ZXJlZCA9XG4gICAgICAgIGJyaWVmVG9vbE5hbWVzLmxlbmd0aCA+IDAgJiYgIWlzVHJhbnNjcmlwdE1vZGVcbiAgICAgICAgICA/IGlzQnJpZWZPbmx5XG4gICAgICAgICAgICA/IGZpbHRlckZvckJyaWVmVG9vbChtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZCwgYnJpZWZUb29sTmFtZXMpXG4gICAgICAgICAgICA6IGRyb3BUZXh0VG9vbE5hbWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBkcm9wVGV4dEluQnJpZWZUdXJucyhcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzVG9TaG93Tm90VHJ1bmNhdGVkLFxuICAgICAgICAgICAgICAgICAgZHJvcFRleHRUb29sTmFtZXMsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IG1lc3NhZ2VzVG9TaG93Tm90VHJ1bmNhdGVkXG4gICAgICAgICAgOiBtZXNzYWdlc1RvU2hvd05vdFRydW5jYXRlZFxuXG4gICAgICBjb25zdCBtZXNzYWdlc1RvU2hvdyA9IHNob3VsZFRydW5jYXRlXG4gICAgICAgID8gYnJpZWZGaWx0ZXJlZC5zbGljZSgtTUFYX01FU1NBR0VTX1RPX1NIT1dfSU5fVFJBTlNDUklQVF9NT0RFKVxuICAgICAgICA6IGJyaWVmRmlsdGVyZWRcblxuICAgICAgY29uc3QgaGFzVHJ1bmNhdGVkTWVzc2FnZXMgPVxuICAgICAgICBzaG91bGRUcnVuY2F0ZSAmJlxuICAgICAgICBicmllZkZpbHRlcmVkLmxlbmd0aCA+IE1BWF9NRVNTQUdFU19UT19TSE9XX0lOX1RSQU5TQ1JJUFRfTU9ERVxuXG4gICAgICBjb25zdCB7IG1lc3NhZ2VzOiBncm91cGVkTWVzc2FnZXMgfSA9IGFwcGx5R3JvdXBpbmcoXG4gICAgICAgIG1lc3NhZ2VzVG9TaG93LFxuICAgICAgICB0b29scyxcbiAgICAgICAgdmVyYm9zZSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY29sbGFwc2VkID0gY29sbGFwc2VCYWNrZ3JvdW5kQmFzaE5vdGlmaWNhdGlvbnMoXG4gICAgICAgIGNvbGxhcHNlSG9va1N1bW1hcmllcyhcbiAgICAgICAgICBjb2xsYXBzZVRlYW1tYXRlU2h1dGRvd25zKFxuICAgICAgICAgICAgY29sbGFwc2VSZWFkU2VhcmNoR3JvdXBzKGdyb3VwZWRNZXNzYWdlcywgdG9vbHMpLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGxvb2t1cHMgPSBidWlsZE1lc3NhZ2VMb29rdXBzKG5vcm1hbGl6ZWRNZXNzYWdlcywgbWVzc2FnZXNUb1Nob3cpXG5cbiAgICAgIGNvbnN0IGhpZGRlbk1lc3NhZ2VDb3VudCA9XG4gICAgICAgIG1lc3NhZ2VzVG9TaG93Tm90VHJ1bmNhdGVkLmxlbmd0aCAtXG4gICAgICAgIE1BWF9NRVNTQUdFU19UT19TSE9XX0lOX1RSQU5TQ1JJUFRfTU9ERVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2xsYXBzZWQsXG4gICAgICAgIGxvb2t1cHMsXG4gICAgICAgIGhhc1RydW5jYXRlZE1lc3NhZ2VzLFxuICAgICAgICBoaWRkZW5NZXNzYWdlQ291bnQsXG4gICAgICB9XG4gICAgfSwgW1xuICAgICAgdmVyYm9zZSxcbiAgICAgIG5vcm1hbGl6ZWRNZXNzYWdlcyxcbiAgICAgIGlzVHJhbnNjcmlwdE1vZGUsXG4gICAgICBzeW50aGV0aWNTdHJlYW1pbmdUb29sVXNlTWVzc2FnZXMsXG4gICAgICBzaG91bGRUcnVuY2F0ZSxcbiAgICAgIHRvb2xzLFxuICAgICAgaXNCcmllZk9ubHksXG4gICAgXSlcblxuICAvLyBDaGVhcCBzbGljZSDigJQgb25seSBydW5zIHdoZW4gc2Nyb2xsIHJhbmdlIG9yIHNsaWNlIGNvbmZpZyBjaGFuZ2VzLlxuICBjb25zdCByZW5kZXJhYmxlTWVzc2FnZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAvLyBTYWZldHkgY2FwIGZvciB0aGUgbm9uLXZpcnR1YWxpemVkIHJlbmRlciBwYXRoLiBBcHBsaWVkIGhlcmUgKG5vdCBhdFxuICAgIC8vIHRoZSBKU1ggc2l0ZSkgc28gcmVuZGVyTWVzc2FnZVJvdydzIGluZGV4LWJhc2VkIGxvb2t1cHMgYW5kXG4gICAgLy8gZGl2aWRlckJlZm9yZUluZGV4IGNvbXB1dGUgb24gdGhlIHNhbWUgYXJyYXkuIFZpcnR1YWxNZXNzYWdlTGlzdFxuICAgIC8vIG5ldmVyIHNlZXMgdGhpcyBzbGljZSDigJQgdmlydHVhbFNjcm9sbFJ1bnRpbWVHYXRlIGlzIGNvbnN0YW50IGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQncyBsaWZldGltZSAoc2Nyb2xsUmVmIGlzIGVpdGhlciBhbHdheXMgcGFzc2VkIG9yIG5ldmVyKS5cbiAgICAvLyByZW5kZXJSYW5nZSBpcyBmaXJzdDogdGhlIGNodW5rZWQgZXhwb3J0IHBhdGggc2xpY2VzIHRoZVxuICAgIC8vIHBvc3QtZ3JvdXBpbmcgYXJyYXkgc28gZWFjaCBjaHVuayBnZXRzIGNvcnJlY3QgdG9vbC1jYWxsIGdyb3VwaW5nLlxuICAgIGNvbnN0IGNhcEFwcGxpZXMgPSAhdmlydHVhbFNjcm9sbFJ1bnRpbWVHYXRlICYmICFkaXNhYmxlUmVuZGVyQ2FwXG4gICAgY29uc3Qgc2xpY2VTdGFydCA9IGNhcEFwcGxpZXNcbiAgICAgID8gY29tcHV0ZVNsaWNlU3RhcnQoY29sbGFwc2VkLCBzbGljZUFuY2hvclJlZilcbiAgICAgIDogMFxuICAgIHJldHVybiByZW5kZXJSYW5nZVxuICAgICAgPyBjb2xsYXBzZWQuc2xpY2UocmVuZGVyUmFuZ2VbMF0sIHJlbmRlclJhbmdlWzFdKVxuICAgICAgOiBzbGljZVN0YXJ0ID4gMFxuICAgICAgICA/IGNvbGxhcHNlZC5zbGljZShzbGljZVN0YXJ0KVxuICAgICAgICA6IGNvbGxhcHNlZFxuICB9LCBbY29sbGFwc2VkLCByZW5kZXJSYW5nZSwgdmlydHVhbFNjcm9sbFJ1bnRpbWVHYXRlLCBkaXNhYmxlUmVuZGVyQ2FwXSlcblxuICBjb25zdCBzdHJlYW1pbmdUb29sVXNlSURzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBuZXcgU2V0KHN0cmVhbWluZ1Rvb2xVc2VzLm1hcChfID0+IF8uY29udGVudEJsb2NrLmlkKSksXG4gICAgW3N0cmVhbWluZ1Rvb2xVc2VzXSxcbiAgKVxuXG4gIC8vIERpdmlkZXIgaW5zZXJ0aW9uIHBvaW50OiBmaXJzdCByZW5kZXJhYmxlTWVzc2FnZSB3aG9zZSB1dWlkIHNoYXJlcyB0aGVcbiAgLy8gMjQtY2hhciBwcmVmaXggd2l0aCBmaXJzdFVuc2VlblV1aWQgKGRlcml2ZVVVSUQga2VlcHMgdGhlIGZpcnN0IDI0XG4gIC8vIGNoYXJzIG9mIHRoZSBzb3VyY2UgbWVzc2FnZSB1dWlkLCBzbyB0aGlzIG1hdGNoZXMgYW55IGJsb2NrIGZyb20gaXQpLlxuICBjb25zdCBkaXZpZGVyQmVmb3JlSW5kZXggPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXVuc2VlbkRpdmlkZXIpIHJldHVybiAtMVxuICAgIGNvbnN0IHByZWZpeCA9IHVuc2VlbkRpdmlkZXIuZmlyc3RVbnNlZW5VdWlkLnNsaWNlKDAsIDI0KVxuICAgIHJldHVybiByZW5kZXJhYmxlTWVzc2FnZXMuZmluZEluZGV4KG0gPT4gbS51dWlkLnNsaWNlKDAsIDI0KSA9PT0gcHJlZml4KVxuICB9LCBbdW5zZWVuRGl2aWRlciwgcmVuZGVyYWJsZU1lc3NhZ2VzXSlcblxuICBjb25zdCBzZWxlY3RlZElkeCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY3Vyc29yKSByZXR1cm4gLTFcbiAgICByZXR1cm4gcmVuZGVyYWJsZU1lc3NhZ2VzLmZpbmRJbmRleChtID0+IG0udXVpZCA9PT0gY3Vyc29yLnV1aWQpXG4gIH0sIFtjdXJzb3IsIHJlbmRlcmFibGVNZXNzYWdlc10pXG5cbiAgLy8gRnVsbHNjcmVlbjogY2xpY2sgYSBtZXNzYWdlIHRvIHRvZ2dsZSB2ZXJib3NlIHJlbmRlcmluZyBmb3IgaXQuIEtleWVkIGJ5XG4gIC8vIHRvb2xfdXNlX2lkIHdoZXJlIGF2YWlsYWJsZSBzbyBhIHRvb2xfdXNlIGFuZCBpdHMgdG9vbF9yZXN1bHQgKHNlcGFyYXRlXG4gIC8vIHJvd3MpIGV4cGFuZCB0b2dldGhlcjsgZmFsbHMgYmFjayB0byB1dWlkIGZvciBncm91cHMvdGhpbmtpbmcuIFN0YWxlIGtleXNcbiAgLy8gYXJlIGhhcm1sZXNzIOKAlCB0aGV5IG5ldmVyIG1hdGNoIGFueXRoaW5nIGluIHJlbmRlcmFibGVNZXNzYWdlcy5cbiAgY29uc3QgW2V4cGFuZGVkS2V5cywgc2V0RXhwYW5kZWRLZXlzXSA9IHVzZVN0YXRlPFJlYWRvbmx5U2V0PHN0cmluZz4+KFxuICAgICgpID0+IG5ldyBTZXQoKSxcbiAgKVxuICBjb25zdCBvbkl0ZW1DbGljayA9IHVzZUNhbGxiYWNrKChtc2c6IFJlbmRlcmFibGVNZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgayA9IGV4cGFuZEtleShtc2cpXG4gICAgc2V0RXhwYW5kZWRLZXlzKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldilcbiAgICAgIGlmIChuZXh0LmhhcyhrKSkgbmV4dC5kZWxldGUoaylcbiAgICAgIGVsc2UgbmV4dC5hZGQoaylcbiAgICAgIHJldHVybiBuZXh0XG4gICAgfSlcbiAgfSwgW10pXG4gIGNvbnN0IGlzSXRlbUV4cGFuZGVkID0gdXNlQ2FsbGJhY2soXG4gICAgKG1zZzogUmVuZGVyYWJsZU1lc3NhZ2UpID0+XG4gICAgICBleHBhbmRlZEtleXMuc2l6ZSA+IDAgJiYgZXhwYW5kZWRLZXlzLmhhcyhleHBhbmRLZXkobXNnKSksXG4gICAgW2V4cGFuZGVkS2V5c10sXG4gIClcbiAgLy8gT25seSBob3Zlci9jbGljayBtZXNzYWdlcyB3aGVyZSB0aGUgdmVyYm9zZSB0b2dnbGUgcmV2ZWFscyBtb3JlOlxuICAvLyBjb2xsYXBzZWQgcmVhZC9zZWFyY2ggZ3JvdXBzLCBvciB0b29sIHJlc3VsdHMgdGhhdCBzZWxmLXJlcG9ydCB0cnVuY2F0aW9uXG4gIC8vIHZpYSBpc1Jlc3VsdFRydW5jYXRlZC4gQ2FsbGJhY2sgbXVzdCBiZSBzdGFibGUgYWNyb3NzIG1lc3NhZ2UgdXBkYXRlczogaWZcbiAgLy8gaXRzIGlkZW50aXR5IChvciByZXR1cm4gdmFsdWUpIGZsaXBzIGR1cmluZyBzdHJlYW1pbmcsIG9uTW91c2VFbnRlclxuICAvLyBhdHRhY2hlcyBhZnRlciB0aGUgbW91c2UgaXMgYWxyZWFkeSBpbnNpZGUg4oaSIGhvdmVyIG5ldmVyIGZpcmVzLiB0b29scyBpc1xuICAvLyBzZXNzaW9uLXN0YWJsZTsgbG9va3VwcyBpcyByZWFkIHZpYSByZWYgc28gdGhlIGNhbGxiYWNrIGRvZXNuJ3QgY2h1cm4gb25cbiAgLy8gZXZlcnkgbmV3IG1lc3NhZ2UuXG4gIGNvbnN0IGxvb2t1cHNSZWYgPSB1c2VSZWYobG9va3VwcylcbiAgbG9va3Vwc1JlZi5jdXJyZW50ID0gbG9va3Vwc1xuICBjb25zdCBpc0l0ZW1DbGlja2FibGUgPSB1c2VDYWxsYmFjayhcbiAgICAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgaWYgKG1zZy50eXBlID09PSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJykgcmV0dXJuIHRydWVcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgY29uc3QgYiA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF0gYXMgdW5rbm93biBhcyBBZHZpc29yQmxvY2sgfCB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBiICE9IG51bGwgJiZcbiAgICAgICAgICBpc0Fkdmlzb3JCbG9jayhiKSAmJlxuICAgICAgICAgIGIudHlwZSA9PT0gJ2Fkdmlzb3JfdG9vbF9yZXN1bHQnICYmXG4gICAgICAgICAgYi5jb250ZW50LnR5cGUgPT09ICdhZHZpc29yX3Jlc3VsdCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKG1zZy50eXBlICE9PSAndXNlcicpIHJldHVybiBmYWxzZVxuICAgICAgY29uc3QgYiA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgIGlmIChiPy50eXBlICE9PSAndG9vbF9yZXN1bHQnIHx8IGIuaXNfZXJyb3IgfHwgIW1zZy50b29sVXNlUmVzdWx0KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGNvbnN0IG5hbWUgPSBsb29rdXBzUmVmLmN1cnJlbnQudG9vbFVzZUJ5VG9vbFVzZUlELmdldChcbiAgICAgICAgYi50b29sX3VzZV9pZCxcbiAgICAgICk/Lm5hbWVcbiAgICAgIGNvbnN0IHRvb2wgPSBuYW1lID8gZmluZFRvb2xCeU5hbWUodG9vbHMsIG5hbWUpIDogdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdG9vbD8uaXNSZXN1bHRUcnVuY2F0ZWQ/Lihtc2cudG9vbFVzZVJlc3VsdCBhcyBuZXZlcikgPz8gZmFsc2VcbiAgICB9LFxuICAgIFt0b29sc10sXG4gIClcblxuICBjb25zdCBjYW5BbmltYXRlID1cbiAgICAoIXRvb2xKU1ggfHwgISF0b29sSlNYLnNob3VsZENvbnRpbnVlQW5pbWF0aW9uKSAmJlxuICAgICF0b29sVXNlQ29uZmlybVF1ZXVlLmxlbmd0aCAmJlxuICAgICFpc01lc3NhZ2VTZWxlY3RvclZpc2libGVcblxuICBjb25zdCBoYXNUb29sc0luUHJvZ3Jlc3MgPSBpblByb2dyZXNzVG9vbFVzZUlEcy5zaXplID4gMFxuXG4gIC8vIFJlcG9ydCBwcm9ncmVzcyB0byB0ZXJtaW5hbCAoZm9yIHRlcm1pbmFscyB0aGF0IHN1cHBvcnQgT1NDIDk7NClcbiAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdXNlVGVybWluYWxOb3RpZmljYXRpb24oKVxuICBjb25zdCBwcmV2UHJvZ3Jlc3NTdGF0ZSA9IHVzZVJlZjxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBwcm9ncmVzc0VuYWJsZWQgPVxuICAgIGdldEdsb2JhbENvbmZpZygpLnRlcm1pbmFsUHJvZ3Jlc3NCYXJFbmFibGVkICYmXG4gICAgIWdldElzUmVtb3RlTW9kZSgpICYmXG4gICAgIShwcm9hY3RpdmVNb2R1bGU/LmlzUHJvYWN0aXZlQWN0aXZlKCkgPz8gZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBwcm9ncmVzc0VuYWJsZWRcbiAgICAgID8gaGFzVG9vbHNJblByb2dyZXNzXG4gICAgICAgID8gJ2luZGV0ZXJtaW5hdGUnXG4gICAgICAgIDogJ2NvbXBsZXRlZCdcbiAgICAgIDogbnVsbFxuICAgIGlmIChwcmV2UHJvZ3Jlc3NTdGF0ZS5jdXJyZW50ID09PSBzdGF0ZSkgcmV0dXJuXG4gICAgcHJldlByb2dyZXNzU3RhdGUuY3VycmVudCA9IHN0YXRlXG4gICAgcHJvZ3Jlc3Moc3RhdGUpXG4gIH0sIFtwcm9ncmVzcywgcHJvZ3Jlc3NFbmFibGVkLCBoYXNUb29sc0luUHJvZ3Jlc3NdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBwcm9ncmVzcyhudWxsKVxuICB9LCBbcHJvZ3Jlc3NdKVxuXG4gIGNvbnN0IG1lc3NhZ2VLZXkgPSB1c2VDYWxsYmFjayhcbiAgICAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSkgPT4gYCR7bXNnLnV1aWR9LSR7Y29udmVyc2F0aW9uSWR9YCxcbiAgICBbY29udmVyc2F0aW9uSWRdLFxuICApXG5cbiAgY29uc3QgcmVuZGVyTWVzc2FnZVJvdyA9IChtc2c6IFJlbmRlcmFibGVNZXNzYWdlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJldlR5cGUgPSBpbmRleCA+IDAgPyByZW5kZXJhYmxlTWVzc2FnZXNbaW5kZXggLSAxXT8udHlwZSA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IGlzVXNlckNvbnRpbnVhdGlvbiA9IG1zZy50eXBlID09PSAndXNlcicgJiYgcHJldlR5cGUgPT09ICd1c2VyJ1xuICAgIC8vIGhhc0NvbnRlbnRBZnRlciBpcyBvbmx5IGNvbnN1bWVkIGZvciBjb2xsYXBzZWRfcmVhZF9zZWFyY2ggZ3JvdXBzO1xuICAgIC8vIHNraXAgdGhlIHNjYW4gZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gc3RyZWFtaW5nVGV4dCBpcyByZW5kZXJlZCBhcyBhXG4gICAgLy8gc2libGluZyBhZnRlciB0aGlzIG1hcCwgc28gaXQncyBuZXZlciBpbiByZW5kZXJhYmxlTWVzc2FnZXMg4oCUIE9SIGl0XG4gICAgLy8gaW4gZXhwbGljaXRseSBzbyB0aGUgZ3JvdXAgZmxpcHMgdG8gcGFzdCB0ZW5zZSBhcyBzb29uIGFzIHRleHQgc3RhcnRzXG4gICAgLy8gc3RyZWFtaW5nIGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgdGhlIGJsb2NrIHRvIGZpbmFsaXplLlxuICAgIGNvbnN0IGhhc0NvbnRlbnRBZnRlciA9XG4gICAgICBtc2cudHlwZSA9PT0gJ2NvbGxhcHNlZF9yZWFkX3NlYXJjaCcgJiZcbiAgICAgICghIXN0cmVhbWluZ1RleHQgfHxcbiAgICAgICAgaGFzQ29udGVudEFmdGVySW5kZXgoXG4gICAgICAgICAgcmVuZGVyYWJsZU1lc3NhZ2VzLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHRvb2xzLFxuICAgICAgICAgIHN0cmVhbWluZ1Rvb2xVc2VJRHMsXG4gICAgICAgICkpXG5cbiAgICBjb25zdCBrID0gbWVzc2FnZUtleShtc2cpXG4gICAgY29uc3Qgcm93ID0gKFxuICAgICAgPE1lc3NhZ2VSb3dcbiAgICAgICAga2V5PXtrfVxuICAgICAgICBtZXNzYWdlPXttc2d9XG4gICAgICAgIGlzVXNlckNvbnRpbnVhdGlvbj17aXNVc2VyQ29udGludWF0aW9ufVxuICAgICAgICBoYXNDb250ZW50QWZ0ZXI9e2hhc0NvbnRlbnRBZnRlcn1cbiAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICBjb21tYW5kcz17Y29tbWFuZHN9XG4gICAgICAgIHZlcmJvc2U9e1xuICAgICAgICAgIHZlcmJvc2UgfHxcbiAgICAgICAgICBpc0l0ZW1FeHBhbmRlZChtc2cpIHx8XG4gICAgICAgICAgKGN1cnNvcj8uZXhwYW5kZWQgPT09IHRydWUgJiYgaW5kZXggPT09IHNlbGVjdGVkSWR4KVxuICAgICAgICB9XG4gICAgICAgIGluUHJvZ3Jlc3NUb29sVXNlSURzPXtpblByb2dyZXNzVG9vbFVzZUlEc31cbiAgICAgICAgc3RyZWFtaW5nVG9vbFVzZUlEcz17c3RyZWFtaW5nVG9vbFVzZUlEc31cbiAgICAgICAgc2NyZWVuPXtzY3JlZW59XG4gICAgICAgIGNhbkFuaW1hdGU9e2NhbkFuaW1hdGV9XG4gICAgICAgIG9uT3BlblJhdGVMaW1pdE9wdGlvbnM9e29uT3BlblJhdGVMaW1pdE9wdGlvbnN9XG4gICAgICAgIGxhc3RUaGlua2luZ0Jsb2NrSWQ9e2xhc3RUaGlua2luZ0Jsb2NrSWR9XG4gICAgICAgIGxhdGVzdEJhc2hPdXRwdXRVVUlEPXtsYXRlc3RCYXNoT3V0cHV0VVVJRH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIGxvb2t1cHM9e2xvb2t1cHN9XG4gICAgICAvPlxuICAgIClcblxuICAgIC8vIFBlci1yb3cgUHJvdmlkZXIg4oCUIG9ubHkgMiByb3dzIHJlLXJlbmRlciBvbiBzZWxlY3Rpb24gY2hhbmdlLlxuICAgIC8vIFdyYXBwZWQgQkVGT1JFIGRpdmlkZXIgYnJhbmNoIHNvIGJvdGggcmV0dXJuIHBhdGhzIGdldCBpdC5cbiAgICBjb25zdCB3cmFwcGVkID0gKFxuICAgICAgPE1lc3NhZ2VBY3Rpb25zU2VsZWN0ZWRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIGtleT17a31cbiAgICAgICAgdmFsdWU9e2luZGV4ID09PSBzZWxlY3RlZElkeH1cbiAgICAgID5cbiAgICAgICAge3Jvd31cbiAgICAgIDwvTWVzc2FnZUFjdGlvbnNTZWxlY3RlZENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG4gICAgaWYgKHVuc2VlbkRpdmlkZXIgJiYgaW5kZXggPT09IGRpdmlkZXJCZWZvcmVJbmRleCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPEJveCBrZXk9XCJ1bnNlZW4tZGl2aWRlclwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgIHRpdGxlPXtgJHt1bnNlZW5EaXZpZGVyLmNvdW50fSBuZXcgJHtwbHVyYWwodW5zZWVuRGl2aWRlci5jb3VudCwgJ21lc3NhZ2UnKX1gfVxuICAgICAgICAgICAgd2lkdGg9e2NvbHVtbnN9XG4gICAgICAgICAgICBjb2xvcj1cImluYWN0aXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD4sXG4gICAgICAgIHdyYXBwZWQsXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVkXG4gIH1cblxuICAvLyBTZWFyY2ggaW5kZXhpbmc6IGZvciB0b29sX3Jlc3VsdCBtZXNzYWdlcywgbG9vayB1cCB0aGUgVG9vbCBhbmQgdXNlXG4gIC8vIGl0cyBleHRyYWN0U2VhcmNoVGV4dCDigJQgdG9vbC1vd25lZCwgcHJlY2lzZSwgbWF0Y2hlcyB3aGF0XG4gIC8vIHJlbmRlclRvb2xSZXN1bHRNZXNzYWdlIHNob3dzLiBGYWxscyBiYWNrIHRvIHJlbmRlcmFibGVTZWFyY2hUZXh0XG4gIC8vIChkdWNrLXR5cGVzIHRvb2xVc2VSZXN1bHQpIGZvciB0b29scyB0aGF0IGhhdmVuJ3QgaW1wbGVtZW50ZWQgaXQsXG4gIC8vIGFuZCBmb3IgYWxsIG5vbi10b29sLXJlc3VsdCBtZXNzYWdlIHR5cGVzLiBUaGUgZHJpZnQtY2F0Y2hlciB0ZXN0XG4gIC8vICh0b29sU2VhcmNoVGV4dC50ZXN0LnRzeCkgcmVuZGVycyArIGNvbXBhcmVzIHRvIGtlZXAgdGhlc2UgaW4gc3luYy5cbiAgLy9cbiAgLy8gQSBzZWNvbmQtUmVhY3Qtcm9vdCByZWNvbmNpbGUgYXBwcm9hY2ggd2FzIHRyaWVkIGFuZCBydWxlZCBvdXRcbiAgLy8gKG1lYXN1cmVkIDMuMW1zL21zZywgZ3Jvd2luZyDigJQgZmx1c2hTeW5jV29yayBwcm9jZXNzZXMgYWxsIHJvb3RzO1xuICAvLyBjb21wb25lbnQgaG9va3MgbXV0YXRlIHNoYXJlZCBzdGF0ZSDihpIgbWFpbiByb290IGFjY3VtdWxhdGVzIHVwZGF0ZXMpLlxuICBjb25zdCBzZWFyY2hUZXh0Q2FjaGUgPSB1c2VSZWYobmV3IFdlYWtNYXA8UmVuZGVyYWJsZU1lc3NhZ2UsIHN0cmluZz4oKSlcbiAgY29uc3QgZXh0cmFjdFNlYXJjaFRleHQgPSB1c2VDYWxsYmFjayhcbiAgICAobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSk6IHN0cmluZyA9PiB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZWFyY2hUZXh0Q2FjaGUuY3VycmVudC5nZXQobXNnKVxuICAgICAgaWYgKGNhY2hlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY2FjaGVkXG4gICAgICBsZXQgdGV4dCA9IHJlbmRlcmFibGVTZWFyY2hUZXh0KG1zZylcbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b29sX3Jlc3VsdCBtZXNzYWdlIGFuZCB0aGUgdG9vbCBpbXBsZW1lbnRzXG4gICAgICAvLyBleHRyYWN0U2VhcmNoVGV4dCwgcHJlZmVyIHRoYXQg4oCUIGl0J3MgcHJlY2lzZSAodG9vbC1vd25lZClcbiAgICAgIC8vIHZzIHJlbmRlcmFibGVTZWFyY2hUZXh0J3MgZmllbGQtbmFtZSBoZXVyaXN0aWMuXG4gICAgICBpZiAoXG4gICAgICAgIG1zZy50eXBlID09PSAndXNlcicgJiZcbiAgICAgICAgbXNnLnRvb2xVc2VSZXN1bHQgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShtc2cubWVzc2FnZS5jb250ZW50KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRyID0gbXNnLm1lc3NhZ2UuY29udGVudC5maW5kKGIgPT4gYi50eXBlID09PSAndG9vbF9yZXN1bHQnKVxuICAgICAgICBpZiAodHIgJiYgJ3Rvb2xfdXNlX2lkJyBpbiB0cikge1xuICAgICAgICAgIGNvbnN0IHR1ID0gbG9va3Vwcy50b29sVXNlQnlUb29sVXNlSUQuZ2V0KHRyLnRvb2xfdXNlX2lkKVxuICAgICAgICAgIGNvbnN0IHRvb2wgPSB0dSAmJiBmaW5kVG9vbEJ5TmFtZSh0b29scywgdHUubmFtZSlcbiAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSB0b29sPy5leHRyYWN0U2VhcmNoVGV4dD8uKFxuICAgICAgICAgICAgbXNnLnRvb2xVc2VSZXN1bHQgYXMgbmV2ZXIsXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIHVuZGVmaW5lZCA9IHRvb2wgZGlkbid0IGltcGxlbWVudCDihpIga2VlcCBoZXVyaXN0aWMuIEVtcHR5XG4gICAgICAgICAgLy8gc3RyaW5nID0gdG9vbCBzYXlzIFwibm90aGluZyB0byBpbmRleFwiIOKGkiByZXNwZWN0IHRoYXQuXG4gICAgICAgICAgaWYgKGV4dHJhY3RlZCAhPT0gdW5kZWZpbmVkKSB0ZXh0ID0gZXh0cmFjdGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIENhY2hlIExPV0VSRUQ6IHNldFNlYXJjaFF1ZXJ5J3MgaG90IGxvb3AgaW5kZXhPZnMgcGVyIGtleXN0cm9rZS5cbiAgICAgIC8vIExvd2VyaW5nIGhlcmUgKG9uY2UsIGF0IHdhcm0pIHZzIHRoZXJlIChldmVyeSBrZXlzdHJva2UpIHRyYWRlc1xuICAgICAgLy8gfnNhbWUgc3RlYWR5LXN0YXRlIG1lbW9yeSBmb3IgemVybyBwZXIta2V5c3Ryb2tlIGFsbG9jLiBDYWNoZVxuICAgICAgLy8gR0MncyB3aXRoIG1lc3NhZ2VzIG9uIHRyYW5zY3JpcHQgZXhpdC4gVG9vbCBtZXRob2RzIHJldHVybiByYXc7XG4gICAgICAvLyByZW5kZXJhYmxlU2VhcmNoVGV4dCBhbHJlYWR5IGxvd2VyY2FzZXMgKHJlZHVuZGFudCBidXQgY2hlYXApLlxuICAgICAgY29uc3QgbG93ZXJlZCA9IHRleHQudG9Mb3dlckNhc2UoKVxuICAgICAgc2VhcmNoVGV4dENhY2hlLmN1cnJlbnQuc2V0KG1zZywgbG93ZXJlZClcbiAgICAgIHJldHVybiBsb3dlcmVkXG4gICAgfSxcbiAgICBbdG9vbHMsIGxvb2t1cHNdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIExvZ28gKi99XG4gICAgICB7IWhpZGVMb2dvICYmICEocmVuZGVyUmFuZ2UgJiYgcmVuZGVyUmFuZ2VbMF0gPiAwKSAmJiAoXG4gICAgICAgIDxMb2dvSGVhZGVyIGFnZW50RGVmaW5pdGlvbnM9e2FnZW50RGVmaW5pdGlvbnN9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogVHJ1bmNhdGlvbiBpbmRpY2F0b3IgKi99XG4gICAgICB7aGFzVHJ1bmNhdGVkTWVzc2FnZXMgJiYgKFxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIHRpdGxlPXtgJHt0b2dnbGVTaG93QWxsU2hvcnRjdXR9IHRvIHNob3cgJHtjaGFsay5ib2xkKGhpZGRlbk1lc3NhZ2VDb3VudCl9IHByZXZpb3VzIG1lc3NhZ2VzYH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uc31cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBTaG93IGFsbCBpbmRpY2F0b3IgKi99XG4gICAgICB7aXNUcmFuc2NyaXB0TW9kZSAmJlxuICAgICAgICBzaG93QWxsSW5UcmFuc2NyaXB0ICYmXG4gICAgICAgIGhpZGRlbk1lc3NhZ2VDb3VudCA+IDAgJiZcbiAgICAgICAgLy8gZGlzYWJsZVJlbmRlckNhcCAoZS5nLiBbIGR1bXAtdG8tc2Nyb2xsYmFjaykgbWVhbnMgd2UncmUgdW5jYXBwZWRcbiAgICAgICAgLy8gYXMgYSBvbmUtc2hvdCBlc2NhcGUgaGF0Y2gsIG5vdCBhIHRvZ2dsZSDigJQgY3RybCtlIGlzIGRlYWQgYW5kXG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWN0dWFsbHkgXCJoaWRkZW5cIiB0byByZXN0b3JlLlxuICAgICAgICAhZGlzYWJsZVJlbmRlckNhcCAmJiAoXG4gICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgIHRpdGxlPXtgJHt0b2dnbGVTaG93QWxsU2hvcnRjdXR9IHRvIGhpZGUgJHtjaGFsay5ib2xkKGhpZGRlbk1lc3NhZ2VDb3VudCl9IHByZXZpb3VzIG1lc3NhZ2VzYH1cbiAgICAgICAgICAgIHdpZHRoPXtjb2x1bW5zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgIHsvKiBNZXNzYWdlcyAtIHJlbmRlcmVkIGFzIG1lbW9pemVkIE1lc3NhZ2VSb3cgY29tcG9uZW50cy5cbiAgICAgICAgICBmbGF0TWFwIGluc2VydHMgdGhlIHVuc2Vlbi1kaXZpZGVyIGFzIGEgc2VwYXJhdGUga2V5ZWQgc2libGluZyBzb1xuICAgICAgICAgIChhKSBub24tZnVsbHNjcmVlbiByZW5kZXJzIHBheSBubyBwZXItbWVzc2FnZSBGcmFnbWVudCB3cmFwLCBhbmRcbiAgICAgICAgICAoYikgZGl2aWRlciB0b2dnbGUgaW4gZnVsbHNjcmVlbiBwcmVzZXJ2ZXMgYWxsIE1lc3NhZ2VSb3dzIGJ5IGtleS5cbiAgICAgICAgICBQcmUtY29tcHV0ZSBkZXJpdmVkIHZhbHVlcyBpbnN0ZWFkIG9mIHBhc3NpbmcgcmVuZGVyYWJsZU1lc3NhZ2VzIHRvXG4gICAgICAgICAgZWFjaCByb3cgLSBSZWFjdCBDb21waWxlciBwaW5zIHByb3BzIGluIHRoZSBmaWJlcidzIG1lbW9DYWNoZSwgc29cbiAgICAgICAgICBwYXNzaW5nIHRoZSBhcnJheSB3b3VsZCBhY2N1bXVsYXRlIGV2ZXJ5IGhpc3RvcmljYWwgdmVyc2lvblxuICAgICAgICAgICh+MS0yTUIgb3ZlciBhIDctdHVybiBzZXNzaW9uKS4gKi99XG4gICAgICB7dmlydHVhbFNjcm9sbFJ1bnRpbWVHYXRlID8gKFxuICAgICAgICA8SW5WaXJ0dWFsTGlzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RydWV9PlxuICAgICAgICAgIDxWaXJ0dWFsTWVzc2FnZUxpc3RcbiAgICAgICAgICAgIG1lc3NhZ2VzPXtyZW5kZXJhYmxlTWVzc2FnZXN9XG4gICAgICAgICAgICBzY3JvbGxSZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpdGVtS2V5PXttZXNzYWdlS2V5fVxuICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVyTWVzc2FnZVJvd31cbiAgICAgICAgICAgIG9uSXRlbUNsaWNrPXtvbkl0ZW1DbGlja31cbiAgICAgICAgICAgIGlzSXRlbUNsaWNrYWJsZT17aXNJdGVtQ2xpY2thYmxlfVxuICAgICAgICAgICAgaXNJdGVtRXhwYW5kZWQ9e2lzSXRlbUV4cGFuZGVkfVxuICAgICAgICAgICAgdHJhY2tTdGlja3lQcm9tcHQ9e3RyYWNrU3RpY2t5UHJvbXB0fVxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJZHggPj0gMCA/IHNlbGVjdGVkSWR4IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgY3Vyc29yTmF2UmVmPXtjdXJzb3JOYXZSZWZ9XG4gICAgICAgICAgICBzZXRDdXJzb3I9e3NldEN1cnNvcn1cbiAgICAgICAgICAgIGp1bXBSZWY9e2p1bXBSZWZ9XG4gICAgICAgICAgICBvblNlYXJjaE1hdGNoZXNDaGFuZ2U9e29uU2VhcmNoTWF0Y2hlc0NoYW5nZX1cbiAgICAgICAgICAgIHNjYW5FbGVtZW50PXtzY2FuRWxlbWVudH1cbiAgICAgICAgICAgIHNldFBvc2l0aW9ucz17c2V0UG9zaXRpb25zfVxuICAgICAgICAgICAgZXh0cmFjdFNlYXJjaFRleHQ9e2V4dHJhY3RTZWFyY2hUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5WaXJ0dWFsTGlzdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApIDogKFxuICAgICAgICByZW5kZXJhYmxlTWVzc2FnZXMuZmxhdE1hcChyZW5kZXJNZXNzYWdlUm93KVxuICAgICAgKX1cblxuICAgICAge3N0cmVhbWluZ1RleHQgJiYgIWlzQnJpZWZPbmx5ICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezF9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgPEJveCBtaW5XaWR0aD17Mn0+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwidGV4dFwiPntCTEFDS19DSVJDTEV9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPFN0cmVhbWluZ01hcmtkb3duPntzdHJlYW1pbmdUZXh0fTwvU3RyZWFtaW5nTWFya2Rvd24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7aXNTdHJlYW1pbmdUaGlua2luZ1Zpc2libGUgJiYgc3RyZWFtaW5nVGhpbmtpbmcgJiYgIWlzQnJpZWZPbmx5ICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxBc3Npc3RhbnRUaGlua2luZ01lc3NhZ2VcbiAgICAgICAgICAgIHBhcmFtPXt7XG4gICAgICAgICAgICAgIHR5cGU6ICd0aGlua2luZycsXG4gICAgICAgICAgICAgIHRoaW5raW5nOiBzdHJlYW1pbmdUaGlua2luZy50aGlua2luZyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhZGRNYXJnaW49e2ZhbHNlfVxuICAgICAgICAgICAgaXNUcmFuc2NyaXB0TW9kZT17dHJ1ZX1cbiAgICAgICAgICAgIHZlcmJvc2U9e3ZlcmJvc2V9XG4gICAgICAgICAgICBoaWRlSW5UcmFuc2NyaXB0PXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuLyoqIEtleSBmb3IgY2xpY2stdG8tZXhwYW5kOiB0b29sX3VzZV9pZCB3aGVyZSBhdmFpbGFibGUgKHNvIHRvb2xfdXNlICsgaXRzXG4gKiAgdG9vbF9yZXN1bHQgZXhwYW5kIHRvZ2V0aGVyKSwgZWxzZSB1dWlkIGZvciBncm91cHMvdGhpbmtpbmcuICovXG5mdW5jdGlvbiBleHBhbmRLZXkobXNnOiBSZW5kZXJhYmxlTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiAoXG4gICAgKG1zZy50eXBlID09PSAnYXNzaXN0YW50JyB8fCBtc2cudHlwZSA9PT0gJ3VzZXInXG4gICAgICA/IGdldFRvb2xVc2VJRChtc2cpXG4gICAgICA6IG51bGwpID8/IG1zZy51dWlkXG4gIClcbn1cblxuLy8gQ3VzdG9tIGNvbXBhcmF0b3IgdG8gcHJldmVudCB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzIGR1cmluZyBzdHJlYW1pbmcuXG4vLyBEZWZhdWx0IFJlYWN0Lm1lbW8gZG9lcyBzaGFsbG93IGNvbXBhcmlzb24gd2hpY2ggZmFpbHMgd2hlbjpcbi8vIDEuIG9uT3BlblJhdGVMaW1pdE9wdGlvbnMgY2FsbGJhY2sgaXMgcmVjcmVhdGVkIChkb2Vzbid0IGFmZmVjdCByZW5kZXIgb3V0cHV0KVxuLy8gMi4gc3RyZWFtaW5nVG9vbFVzZXMgYXJyYXkgaXMgcmVjcmVhdGVkIG9uIGV2ZXJ5IGRlbHRhLCBidXQgb25seSBjb250ZW50QmxvY2sgbWF0dGVycyBmb3IgcmVuZGVyaW5nXG4vLyAzLiBzdHJlYW1pbmdUaGlua2luZyBjaGFuZ2VzIG9uIGV2ZXJ5IGRlbHRhIC0gd2UgRE8gd2FudCB0byByZS1yZW5kZXIgZm9yIHRoaXNcbmZ1bmN0aW9uIHNldHNFcXVhbDxUPihhOiBTZXQ8VD4sIGI6IFNldDxUPik6IGJvb2xlYW4ge1xuICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZVxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYSkge1xuICAgIGlmICghYi5oYXMoaXRlbSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlcyA9IFJlYWN0Lm1lbW8oTWVzc2FnZXNJbXBsLCAocHJldiwgbmV4dCkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJldikgYXMgKGtleW9mIHR5cGVvZiBwcmV2KVtdXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICdvbk9wZW5SYXRlTGltaXRPcHRpb25zJyB8fFxuICAgICAga2V5ID09PSAnc2Nyb2xsUmVmJyB8fFxuICAgICAga2V5ID09PSAndHJhY2tTdGlja3lQcm9tcHQnIHx8XG4gICAgICBrZXkgPT09ICdzZXRDdXJzb3InIHx8XG4gICAgICBrZXkgPT09ICdjdXJzb3JOYXZSZWYnIHx8XG4gICAgICBrZXkgPT09ICdqdW1wUmVmJyB8fFxuICAgICAga2V5ID09PSAnb25TZWFyY2hNYXRjaGVzQ2hhbmdlJyB8fFxuICAgICAga2V5ID09PSAnc2NhbkVsZW1lbnQnIHx8XG4gICAgICBrZXkgPT09ICdzZXRQb3NpdGlvbnMnXG4gICAgKVxuICAgICAgY29udGludWVcbiAgICBpZiAocHJldltrZXldICE9PSBuZXh0W2tleV0pIHtcbiAgICAgIGlmIChrZXkgPT09ICdzdHJlYW1pbmdUb29sVXNlcycpIHtcbiAgICAgICAgY29uc3QgcCA9IHByZXYuc3RyZWFtaW5nVG9vbFVzZXNcbiAgICAgICAgY29uc3QgbiA9IG5leHQuc3RyZWFtaW5nVG9vbFVzZXNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHAubGVuZ3RoID09PSBuLmxlbmd0aCAmJlxuICAgICAgICAgIHAuZXZlcnkoKGl0ZW0sIGkpID0+IGl0ZW0uY29udGVudEJsb2NrID09PSBuW2ldPy5jb250ZW50QmxvY2spXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdpblByb2dyZXNzVG9vbFVzZUlEcycpIHtcbiAgICAgICAgaWYgKHNldHNFcXVhbChwcmV2LmluUHJvZ3Jlc3NUb29sVXNlSURzLCBuZXh0LmluUHJvZ3Jlc3NUb29sVXNlSURzKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICd1bnNlZW5EaXZpZGVyJykge1xuICAgICAgICBjb25zdCBwID0gcHJldi51bnNlZW5EaXZpZGVyXG4gICAgICAgIGNvbnN0IG4gPSBuZXh0LnVuc2VlbkRpdmlkZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHA/LmZpcnN0VW5zZWVuVXVpZCA9PT0gbj8uZmlyc3RVbnNlZW5VdWlkICYmXG4gICAgICAgICAgcD8uY291bnQgPT09IG4/LmNvdW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICd0b29scycpIHtcbiAgICAgICAgY29uc3QgcCA9IHByZXYudG9vbHNcbiAgICAgICAgY29uc3QgbiA9IG5leHQudG9vbHNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHAubGVuZ3RoID09PSBuLmxlbmd0aCAmJlxuICAgICAgICAgIHAuZXZlcnkoKHRvb2wsIGkpID0+IHRvb2wubmFtZSA9PT0gbltpXT8ubmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc3RyZWFtaW5nVGhpbmtpbmcgY2hhbmdlcyBmcmVxdWVudGx5IC0gYWx3YXlzIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXNcbiAgICAgIC8vIChubyBzcGVjaWFsIGhhbmRsaW5nIG5lZWRlZCwgZGVmYXVsdCBiZWhhdmlvciBpcyBjb3JyZWN0KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUmVuZGVyU3RhdGljYWxseShcbiAgbWVzc2FnZTogUmVuZGVyYWJsZU1lc3NhZ2UsXG4gIHN0cmVhbWluZ1Rvb2xVc2VJRHM6IFNldDxzdHJpbmc+LFxuICBpblByb2dyZXNzVG9vbFVzZUlEczogU2V0PHN0cmluZz4sXG4gIHNpYmxpbmdUb29sVXNlSURzOiBSZWFkb25seVNldDxzdHJpbmc+LFxuICBzY3JlZW46IFNjcmVlbixcbiAgbG9va3VwczogUmV0dXJuVHlwZTx0eXBlb2YgYnVpbGRNZXNzYWdlTG9va3Vwcz4sXG4pOiBib29sZWFuIHtcbiAgaWYgKHNjcmVlbiA9PT0gJ3RyYW5zY3JpcHQnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgIGNhc2UgJ2F0dGFjaG1lbnQnOlxuICAgIGNhc2UgJ3VzZXInOlxuICAgIGNhc2UgJ2Fzc2lzdGFudCc6IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgICAgaWYgKGJsb2NrPy50eXBlID09PSAnc2VydmVyX3Rvb2xfdXNlJykge1xuICAgICAgICAgIHJldHVybiBsb29rdXBzLnJlc29sdmVkVG9vbFVzZUlEcy5oYXMoYmxvY2suaWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvb2xVc2VJRCA9IGdldFRvb2xVc2VJRChtZXNzYWdlKVxuICAgICAgaWYgKCF0b29sVXNlSUQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChzdHJlYW1pbmdUb29sVXNlSURzLmhhcyh0b29sVXNlSUQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKGluUHJvZ3Jlc3NUb29sVXNlSURzLmhhcyh0b29sVXNlSUQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IHVucmVzb2x2ZWQgUG9zdFRvb2xVc2UgaG9va3MgZm9yIHRoaXMgdG9vbCB1c2VcbiAgICAgIC8vIElmIHNvLCBrZWVwIHRoZSBtZXNzYWdlIHRyYW5zaWVudCBzbyB0aGUgSG9va1Byb2dyZXNzTWVzc2FnZSBjYW4gdXBkYXRlXG4gICAgICBpZiAoaGFzVW5yZXNvbHZlZEhvb2tzRnJvbUxvb2t1cCh0b29sVXNlSUQsICdQb3N0VG9vbFVzZScsIGxvb2t1cHMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlcnkoc2libGluZ1Rvb2xVc2VJRHMsIGxvb2t1cHMucmVzb2x2ZWRUb29sVXNlSURzKVxuICAgIH1cbiAgICBjYXNlICdzeXN0ZW0nOiB7XG4gICAgICAvLyBhcGkgZXJyb3JzIGFsd2F5cyByZW5kZXIgZHluYW1pY2FsbHksIHNpbmNlIHdlIGhpZGVcbiAgICAgIC8vIHRoZW0gYXMgc29vbiBhcyB3ZSBzZWUgYW5vdGhlciBub24tZXJyb3IgbWVzc2FnZS5cbiAgICAgIHJldHVybiBtZXNzYWdlLnN1YnR5cGUgIT09ICdhcGlfZXJyb3InXG4gICAgfVxuICAgIGNhc2UgJ2dyb3VwZWRfdG9vbF91c2UnOiB7XG4gICAgICBjb25zdCBhbGxSZXNvbHZlZCA9IG1lc3NhZ2UubWVzc2FnZXMuZXZlcnkobXNnID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRbMF1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjb250ZW50Py50eXBlID09PSAndG9vbF91c2UnICYmXG4gICAgICAgICAgbG9va3Vwcy5yZXNvbHZlZFRvb2xVc2VJRHMuaGFzKGNvbnRlbnQuaWQpXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWxsUmVzb2x2ZWRcbiAgICB9XG4gICAgY2FzZSAnY29sbGFwc2VkX3JlYWRfc2VhcmNoJzoge1xuICAgICAgLy8gSW4gcHJvbXB0IG1vZGUsIG5ldmVyIG1hcmsgYXMgc3RhdGljIHRvIHByZXZlbnQgZmxpY2tlciBiZXR3ZWVuIEFQSSB0dXJuc1xuICAgICAgLy8gKEluIHRyYW5zY3JpcHQgbW9kZSwgd2UgYWxyZWFkeSByZXR1cm5lZCB0cnVlIGF0IHRoZSB0b3Agb2YgdGhpcyBmdW5jdGlvbilcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxJQUFJNUQsS0FBS3hHO0FBQ2Ysa0JBQU04RSxJQUFJMkIsS0FBS3pHO0FBQ2YsZ0JBQ0VvSyxFQUFFL04sV0FBV3lJLEVBQUV6SSxVQUNmK04sRUFBRXpMLE1BQU0sQ0FBQ3dJLE1BQU0vSyxNQUFNK0ssS0FBSzlMLFNBQVN5SixFQUFFMUksQ0FBQyxHQUFHZixJQUFJLEdBQzdDO0FBQ0E7WUFDRjtVQUNGO0FBR0EsaUJBQU87UUFDVDtNQUNGO0FBQ0EsYUFBTztJQUNULENBQUM7OzsiLAogICJuYW1lcyI6IFsiUHJvbXB0T3ZlcmxheVByb3ZpZGVyIiwgInQwIiwgIiQiLCAiX2MiLCAiY2hpbGRyZW4iLCAiZGF0YSIsICJzZXREYXRhIiwgInVzZVN0YXRlIiwgImRpYWxvZyIsICJzZXREaWFsb2ciLCAidDEiLCAidDIiLCAidXNlUHJvbXB0T3ZlcmxheSIsICJ1c2VDb250ZXh0IiwgIkRhdGFDb250ZXh0IiwgInVzZVByb21wdE92ZXJsYXlEaWFsb2ciLCAiRGlhbG9nQ29udGV4dCIsICJ1c2VTZXRQcm9tcHRPdmVybGF5IiwgInNldCIsICJTZXRDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VTZXRQcm9tcHRPdmVybGF5RGlhbG9nIiwgIm5vZGUiLCAiU2V0RGlhbG9nQ29udGV4dCIsICJjcmVhdGVDb250ZXh0IiwgImZpbGVVUkxUb1BhdGgiLCAidXNlVW5zZWVuRGl2aWRlciIsICJtZXNzYWdlQ291bnQiLCAiZGl2aWRlckluZGV4IiwgInNldERpdmlkZXJJbmRleCIsICJ1c2VTdGF0ZSIsICJjb3VudFJlZiIsICJ1c2VSZWYiLCAiY3VycmVudCIsICJkaXZpZGVyWVJlZiIsICJvblJlcGluIiwgInVzZUNhbGxiYWNrIiwgIm9uU2Nyb2xsQXdheSIsICJoYW5kbGUiLCAibWF4IiwgIk1hdGgiLCAiZ2V0U2Nyb2xsSGVpZ2h0IiwgImdldFZpZXdwb3J0SGVpZ2h0IiwgImdldFNjcm9sbFRvcCIsICJnZXRQZW5kaW5nRGVsdGEiLCAianVtcFRvTmV3IiwgInNjcm9sbFRvQm90dG9tIiwgInVzZUVmZmVjdCIsICJzaGlmdERpdmlkZXIiLCAiaW5kZXhEZWx0YSIsICJoZWlnaHREZWx0YSIsICJpZHgiLCAiY291bnRVbnNlZW5Bc3Npc3RhbnRUdXJucyIsICJtZXNzYWdlcyIsICJjb3VudCIsICJwcmV2V2FzQXNzaXN0YW50IiwgImkiLCAibGVuZ3RoIiwgIm0iLCAidHlwZSIsICJhc3Npc3RhbnRIYXNWaXNpYmxlVGV4dCIsICJpc0Fzc2lzdGFudCIsICJiIiwgIm1lc3NhZ2UiLCAiY29udGVudCIsICJ0ZXh0IiwgInRyaW0iLCAiY29tcHV0ZVVuc2VlbkRpdmlkZXIiLCAidW5kZWZpbmVkIiwgImFuY2hvcklkeCIsICJpc051bGxSZW5kZXJpbmdBdHRhY2htZW50IiwgInV1aWQiLCAiZmlyc3RVbnNlZW5VdWlkIiwgIkZ1bGxzY3JlZW5MYXlvdXQiLCAidDAiLCAiJCIsICJfYyIsICJzY3JvbGxhYmxlIiwgImJvdHRvbSIsICJvdmVybGF5IiwgImJvdHRvbUZsb2F0IiwgIm1vZGFsIiwgIm1vZGFsU2Nyb2xsUmVmIiwgInNjcm9sbFJlZiIsICJoaWRlUGlsbCIsICJ0MSIsICJoaWRlU3RpY2t5IiwgInQyIiwgIm5ld01lc3NhZ2VDb3VudCIsICJ0MyIsICJvblBpbGxDbGljayIsICJyb3dzIiwgInRlcm1pbmFsUm93cyIsICJjb2x1bW5zIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJzdGlja3lQcm9tcHQiLCAic2V0U3RpY2t5UHJvbXB0IiwgInQ0IiwgIlN5bWJvbCIsICJmb3IiLCAiY2hyb21lQ3R4IiwgInQ1IiwgImxpc3RlbmVyIiwgInN1YnNjcmliZSIsICJfdGVtcCIsICJ0NiIsICJzIiwgImRpdmlkZXJZIiwgInBpbGxWaXNpYmxlIiwgInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwgInQ3IiwgInVzZUxheW91dEVmZmVjdCIsICJfdGVtcDMiLCAiaXNGdWxsc2NyZWVuRW52RW5hYmxlZCIsICJzdGlja3kiLCAiaGVhZGVyUHJvbXB0IiwgInBhZENvbGxhcHNlZCIsICJ0OCIsICJzY3JvbGxUbyIsICJ0OSIsICJ0MTAiLCAidDExIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJNT0RBTF9UUkFOU0NSSVBUX1BFRUsiLCAicmVwZWF0IiwgInQxOSIsICJpbmsiLCAiaW5zdGFuY2VzIiwgImdldCIsICJwcm9jZXNzIiwgInN0ZG91dCIsICJvbkh5cGVybGlua0NsaWNrIiwgIl90ZW1wMiIsICJ1cmwiLCAic3RhcnRzV2l0aCIsICJvcGVuUGF0aCIsICJvcGVuQnJvd3NlciIsICJOZXdNZXNzYWdlc1BpbGwiLCAib25DbGljayIsICJob3ZlciIsICJzZXRIb3ZlciIsICJwbHVyYWwiLCAiZmlndXJlcyIsICJhcnJvd0Rvd24iLCAiU3RpY2t5UHJvbXB0SGVhZGVyIiwgInBvaW50ZXIiLCAiU3VnZ2VzdGlvbnNPdmVybGF5IiwgImRhdGEiLCAidXNlUHJvbXB0T3ZlcmxheSIsICJzdWdnZXN0aW9ucyIsICJtYXhDb2x1bW5XaWR0aCIsICJzZWxlY3RlZFN1Z2dlc3Rpb24iLCAiRGlhbG9nT3ZlcmxheSIsICJub2RlIiwgInVzZVByb21wdE92ZXJsYXlEaWFsb2ciLCAiU2Nyb2xsQ2hyb21lQ29udGV4dCIsICJjcmVhdGVDb250ZXh0IiwgImMiLCAiYyIsICJjYWxjdWxhdGVGZWVkV2lkdGgiLCAiY29uZmlnIiwgInRpdGxlIiwgImxpbmVzIiwgImZvb3RlciIsICJlbXB0eU1lc3NhZ2UiLCAiY3VzdG9tQ29udGVudCIsICJtYXhXaWR0aCIsICJzdHJpbmdXaWR0aCIsICJ1bmRlZmluZWQiLCAiTWF0aCIsICJtYXgiLCAid2lkdGgiLCAibGVuZ3RoIiwgImdhcCIsICJtYXhUaW1lc3RhbXBXaWR0aCIsICJtYXAiLCAibGluZSIsICJ0aW1lc3RhbXAiLCAidGltZXN0YW1wV2lkdGgiLCAibGluZVdpZHRoIiwgInRleHQiLCAiRmVlZCIsICJ0MCIsICIkIiwgIl9jIiwgImFjdHVhbFdpZHRoIiwgInQxIiwgIl90ZW1wIiwgInQyIiwgInQzIiwgImNvbnRlbnQiLCAidHJ1bmNhdGUiLCAibGluZV8wIiwgImluZGV4IiwgInRleHRXaWR0aCIsICJwYWRFbmQiLCAidDQiLCAiRmVlZENvbHVtbiIsICJ0MCIsICIkIiwgIl9jIiwgImZlZWRzIiwgIm1heFdpZHRoIiwgInQxIiwgImZlZWRXaWR0aHMiLCAibWFwIiwgIl90ZW1wIiwgIk1hdGgiLCAibWF4IiwgIm1heE9mQWxsRmVlZHMiLCAiYWN0dWFsV2lkdGgiLCAibWluIiwgInQyIiwgInQzIiwgImxlbmd0aCIsICJmZWVkXzAiLCAiaW5kZXgiLCAiZmVlZCIsICJjYWxjdWxhdGVGZWVkV2lkdGgiLCAiaG9tZWRpciIsICJjcmVhdGVSZWNlbnRBY3Rpdml0eUZlZWQiLCAiYWN0aXZpdGllcyIsICJsaW5lcyIsICJtYXAiLCAibG9nIiwgInRpbWUiLCAiZm9ybWF0UmVsYXRpdmVUaW1lQWdvIiwgIm1vZGlmaWVkIiwgImRlc2NyaXB0aW9uIiwgInN1bW1hcnkiLCAiZmlyc3RQcm9tcHQiLCAidGV4dCIsICJ0aW1lc3RhbXAiLCAidGl0bGUiLCAiZm9vdGVyIiwgImxlbmd0aCIsICJ1bmRlZmluZWQiLCAiZW1wdHlNZXNzYWdlIiwgImNyZWF0ZVdoYXRzTmV3RmVlZCIsICJyZWxlYXNlTm90ZXMiLCAibm90ZSIsICJtYXRjaCIsICJjcmVhdGVQcm9qZWN0T25ib2FyZGluZ0ZlZWQiLCAic3RlcHMiLCAiZW5hYmxlZFN0ZXBzIiwgImZpbHRlciIsICJpc0VuYWJsZWQiLCAic29ydCIsICJhIiwgImIiLCAiTnVtYmVyIiwgImlzQ29tcGxldGUiLCAiY2hlY2ttYXJrIiwgImZpZ3VyZXMiLCAidGljayIsICJ3YXJuaW5nVGV4dCIsICJnZXRDd2QiLCAicHVzaCIsICJjcmVhdGVHdWVzdFBhc3Nlc0ZlZWQiLCAicmV3YXJkIiwgImdldENhY2hlZFJlZmVycmVyUmV3YXJkIiwgInN1YnRpdGxlIiwgImZvcm1hdENyZWRpdEFtb3VudCIsICJjdXN0b21Db250ZW50IiwgImNvbnRlbnQiLCAid2lkdGgiLCAiaG9sZCIsICJwb3NlIiwgIm9mZnNldCIsICJmcmFtZXMiLCAiQXJyYXkiLCAiZnJvbSIsICJsZW5ndGgiLCAiQW5pbWF0ZWRDbGF3ZCIsICIkIiwgIl9jIiwgImJvdW5jZU9mZnNldCIsICJvbkNsaWNrIiwgInVzZUNsYXdkQW5pbWF0aW9uIiwgInQwIiwgInQxIiwgInQyIiwgIkNMQVdEX0hFSUdIVCIsICJyZWR1Y2VkTW90aW9uIiwgInVzZVN0YXRlIiwgImdldEluaXRpYWxTZXR0aW5ncyIsICJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsICJmcmFtZUluZGV4IiwgInNldEZyYW1lSW5kZXgiLCAic2VxdWVuY2VSZWYiLCAidXNlUmVmIiwgIkpVTVBfV0FWRSIsICJjdXJyZW50IiwgIkNMSUNLX0FOSU1BVElPTlMiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAidXNlRWZmZWN0IiwgInRpbWVyIiwgInNldFRpbWVvdXQiLCAiRlJBTUVfTVMiLCAiaW5jcmVtZW50RnJhbWUiLCAiY2xlYXJUaW1lb3V0IiwgInNlcSIsICJJRExFIiwgIkxPT0tfQVJPVU5EIiwgImkiLCAicmVzZXRJZlBhc3Nlc1JlZnJlc2hlZCIsICJyZW1haW5pbmciLCAiZ2V0Q2FjaGVkUmVtYWluaW5nUGFzc2VzIiwgImNvbmZpZyIsICJnZXRHbG9iYWxDb25maWciLCAibGFzdFNlZW4iLCAicGFzc2VzTGFzdFNlZW5SZW1haW5pbmciLCAic2F2ZUdsb2JhbENvbmZpZyIsICJwcmV2IiwgInBhc3Nlc1Vwc2VsbFNlZW5Db3VudCIsICJoYXNWaXNpdGVkUGFzc2VzIiwgInNob3VsZFNob3dHdWVzdFBhc3Nlc1Vwc2VsbCIsICJlbGlnaWJsZSIsICJoYXNDYWNoZSIsICJjaGVja0NhY2hlZFBhc3Nlc0VsaWdpYmlsaXR5IiwgInVzZVNob3dHdWVzdFBhc3Nlc1Vwc2VsbCIsICJzaG93IiwgInVzZVN0YXRlIiwgIl90ZW1wIiwgImluY3JlbWVudEd1ZXN0UGFzc2VzU2VlbkNvdW50IiwgIm5ld0NvdW50IiwgImxvZ0V2ZW50IiwgInNlZW5fY291bnQiLCAiR3Vlc3RQYXNzZXNVcHNlbGwiLCAiJCIsICJfYyIsICJ0MCIsICJTeW1ib2wiLCAiZm9yIiwgInJld2FyZCIsICJnZXRDYWNoZWRSZWZlcnJlclJld2FyZCIsICJmb3JtYXRDcmVkaXRBbW91bnQiLCAiQ29uZGVuc2VkTG9nbyIsICIkIiwgIl9jIiwgImNvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgImFnZW50IiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgImVmZm9ydFZhbHVlIiwgIl90ZW1wMiIsICJtb2RlbCIsICJ1c2VNYWluTG9vcE1vZGVsIiwgIm1vZGVsRGlzcGxheU5hbWUiLCAicmVuZGVyTW9kZWxTZXR0aW5nIiwgInZlcnNpb24iLCAiY3dkIiwgImJpbGxpbmdUeXBlIiwgImFnZW50TmFtZSIsICJhZ2VudE5hbWVGcm9tU2V0dGluZ3MiLCAiZ2V0TG9nb0Rpc3BsYXlEYXRhIiwgInNob3dHdWVzdFBhc3Nlc1Vwc2VsbCIsICJ1c2VTaG93R3Vlc3RQYXNzZXNVcHNlbGwiLCAic2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwiLCAidXNlU2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwiLCAidDAiLCAidDEiLCAiaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQiLCAidXNlRWZmZWN0IiwgInQyIiwgInQzIiwgImluY3JlbWVudE92ZXJhZ2VDcmVkaXRVcHNlbGxTZWVuQ291bnQiLCAidGV4dFdpZHRoIiwgIk1hdGgiLCAibWF4IiwgInRydW5jYXRlZFZlcnNpb24iLCAidHJ1bmNhdGUiLCAiZWZmb3J0U3VmZml4IiwgImdldEVmZm9ydFN1ZmZpeCIsICJzaG91bGRTcGxpdCIsICJ0cnVuY2F0ZWRNb2RlbCIsICJ0cnVuY2F0ZWRCaWxsaW5nIiwgImZvcm1hdE1vZGVsQW5kQmlsbGluZyIsICJjd2RBdmFpbGFibGVXaWR0aCIsICJzdHJpbmdXaWR0aCIsICJ0cnVuY2F0ZWRDd2QiLCAidHJ1bmNhdGVQYXRoIiwgInQ0IiwgIlN5bWJvbCIsICJmb3IiLCAiaXNGdWxsc2NyZWVuRW52RW5hYmxlZCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAidDExIiwgInQxMiIsICJzXzAiLCAicyIsICJFbWVyZ2VuY3lUaXAiLCAidGlwIiwgInVzZU1lbW8iLCAiZ2V0VGlwT2ZGZWVkIiwgImxhc3RTaG93blRpcCIsICJnZXRHbG9iYWxDb25maWciLCAibGFzdFNob3duRW1lcmdlbmN5VGlwIiwgInNob3VsZFNob3ciLCAidXNlRWZmZWN0IiwgInNhdmVHbG9iYWxDb25maWciLCAiY3VycmVudCIsICJjb2xvciIsICJkaW1Db2xvciIsICJnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEUiLCAiQ09ORklHX05BTUUiLCAiREVGQVVMVF9USVAiLCAiQW5pbWF0ZWRBc3RlcmlzayIsICJjaGFyIiwgIlRFQVJEUk9QX0FTVEVSSVNLIiwgInJlZHVjZWRNb3Rpb24iLCAidXNlU3RhdGUiLCAiZ2V0SW5pdGlhbFNldHRpbmdzIiwgInByZWZlcnNSZWR1Y2VkTW90aW9uIiwgImRvbmUiLCAic2V0RG9uZSIsICJzdGFydFRpbWVSZWYiLCAidXNlUmVmIiwgInJlZiIsICJ0aW1lIiwgInVzZUFuaW1hdGlvbkZyYW1lIiwgInVzZUVmZmVjdCIsICJ0IiwgInNldFRpbWVvdXQiLCAiVE9UQUxfQU5JTUFUSU9OX01TIiwgImNsZWFyVGltZW91dCIsICJTRVRUTEVEX0dSRVkiLCAiY3VycmVudCIsICJlbGFwc2VkIiwgImh1ZSIsICJTV0VFUF9EVVJBVElPTl9NUyIsICJ0b1JHQkNvbG9yIiwgImh1ZVRvUmdiIiwgIlNXRUVQX0NPVU5UIiwgImluaXRfZmlndXJlcyIsICJyIiwgImciLCAiYiIsICJzaG91bGRTaG93T3B1czFtTWVyZ2VOb3RpY2UiLCAiaXNPcHVzMW1NZXJnZUVuYWJsZWQiLCAiZ2V0R2xvYmFsQ29uZmlnIiwgIm9wdXMxbU1lcmdlTm90aWNlU2VlbkNvdW50IiwgIk1BWF9TSE9XX0NPVU5UIiwgIk9wdXMxbU1lcmdlTm90aWNlIiwgIiQiLCAiX2MiLCAic2hvdyIsICJ1c2VTdGF0ZSIsICJ0MCIsICJ0MSIsICJuZXdDb3VudCIsICJzYXZlR2xvYmFsQ29uZmlnIiwgInByZXYiLCAidXNlRWZmZWN0IiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAiVVBfQVJST1ciLCAiaW5pdF9maWd1cmVzIiwgIlZvaWNlTW9kZU5vdGljZSIsICIkIiwgIl9jIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAiZmVhdHVyZSIsICJWb2ljZU1vZGVOb3RpY2VJbm5lciIsICJzaG93IiwgInVzZVN0YXRlIiwgIl90ZW1wIiwgInQxIiwgIm5ld0NvdW50IiwgImdldEdsb2JhbENvbmZpZyIsICJ2b2ljZU5vdGljZVNlZW5Db3VudCIsICJzYXZlR2xvYmFsQ29uZmlnIiwgInByZXYiLCAidXNlRWZmZWN0IiwgInQyIiwgImlzVm9pY2VNb2RlRW5hYmxlZCIsICJnZXRJbml0aWFsU2V0dGluZ3MiLCAidm9pY2VFbmFibGVkIiwgIk1BWF9TSE9XX0NPVU5UIiwgInNob3VsZFNob3dPcHVzMW1NZXJnZU5vdGljZSIsICJDaGFubmVsc05vdGljZSIsICIkIiwgIl9jIiwgInQwIiwgInVzZVN0YXRlIiwgIl90ZW1wIiwgImNoYW5uZWxzIiwgImRpc2FibGVkIiwgIm5vQXV0aCIsICJwb2xpY3lCbG9ja2VkIiwgImxpc3QiLCAidW5tYXRjaGVkIiwgImxlbmd0aCIsICJoYXNOb25EZXYiLCAic29tZSIsICJfdGVtcDIiLCAiZmxhZyIsICJnZXRIYXNEZXZDaGFubmVscyIsICJ0MSIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgInQzIiwgInQ0IiwgIm1hcCIsICJfdGVtcDMiLCAidDUiLCAiX3RlbXA0IiwgInVfMCIsICJmb3JtYXRFbnRyeSIsICJ1IiwgImVudHJ5IiwgIndoeSIsICJjIiwgImRldiIsICJjaCIsICJnZXRBbGxvd2VkQ2hhbm5lbHMiLCAibCIsICJqb2luIiwgInN1YiIsICJnZXRTdWJzY3JpcHRpb25UeXBlIiwgIm1hbmFnZWQiLCAicG9saWN5IiwgImdldFNldHRpbmdzRm9yU291cmNlIiwgImFsbG93bGlzdCIsICJnZXRFZmZlY3RpdmVDaGFubmVsQWxsb3dsaXN0IiwgImFsbG93ZWRDaGFubmVsUGx1Z2lucyIsICJpc0NoYW5uZWxzRW5hYmxlZCIsICJnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zIiwgImFjY2Vzc1Rva2VuIiwgImNoYW5uZWxzRW5hYmxlZCIsICJmaW5kVW5tYXRjaGVkIiwgImtpbmQiLCAibmFtZSIsICJtYXJrZXRwbGFjZSIsICJlbnRyaWVzIiwgInNjb3BlcyIsICJjb25maWd1cmVkIiwgIlNldCIsICJzY29wZSIsICJPYmplY3QiLCAia2V5cyIsICJnZXRNY3BDb25maWdzQnlTY29wZSIsICJzZXJ2ZXJzIiwgImFkZCIsICJpbnN0YWxsZWRQbHVnaW5JZHMiLCAibG9hZEluc3RhbGxlZFBsdWdpbnNWMiIsICJwbHVnaW5zIiwgImFsbG93ZWQiLCAic291cmNlIiwgIm91dCIsICJoYXMiLCAicHVzaCIsICJlIiwgInBsdWdpbiIsICJpbml0X2NvbmZpZyIsICJMb2dvVjIiLCAiJCIsICJfYyIsICJhY3Rpdml0aWVzIiwgImdldFJlY2VudEFjdGl2aXR5U3luYyIsICJ1c2VybmFtZSIsICJnZXRHbG9iYWxDb25maWciLCAib2F1dGhBY2NvdW50IiwgImRpc3BsYXlOYW1lIiwgImNvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAic2hvdWxkU2hvd1Byb2plY3RPbmJvYXJkaW5nIiwgInNob3dPbmJvYXJkaW5nIiwgInQxIiwgIlNhbmRib3hNYW5hZ2VyIiwgImlzU2FuZGJveGluZ0VuYWJsZWQiLCAic2hvd1NhbmRib3hTdGF0dXMiLCAic2hvd0d1ZXN0UGFzc2VzVXBzZWxsIiwgInVzZVNob3dHdWVzdFBhc3Nlc1Vwc2VsbCIsICJzaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCIsICJ1c2VTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCIsICJhZ2VudCIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcCIsICJlZmZvcnRWYWx1ZSIsICJfdGVtcDIiLCAiY29uZmlnIiwgImNoYW5nZWxvZyIsICJnZXRSZWNlbnRSZWxlYXNlTm90ZXNTeW5jIiwgImFubm91bmNlbWVudCIsICJ1c2VTdGF0ZSIsICJhbm5vdW5jZW1lbnRzIiwgImdldEluaXRpYWxTZXR0aW5ncyIsICJjb21wYW55QW5ub3VuY2VtZW50cyIsICJsZW5ndGgiLCAibnVtU3RhcnR1cHMiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAiaGFzUmVsZWFzZU5vdGVzIiwgImNoZWNrRm9yUmVsZWFzZU5vdGVzU3luYyIsICJsYXN0UmVsZWFzZU5vdGVzU2VlbiIsICJ0MiIsICJjdXJyZW50Q29uZmlnIiwgIk1BQ1JPIiwgIlZFUlNJT04iLCAic2F2ZUdsb2JhbENvbmZpZyIsICJfdGVtcDMiLCAiaW5jcmVtZW50UHJvamVjdE9uYm9hcmRpbmdTZWVuQ291bnQiLCAidDMiLCAidXNlRWZmZWN0IiwgInQ0IiwgImlzRW52VHJ1dGh5IiwgInByb2Nlc3MiLCAiZW52IiwgIkNMQVVERV9DT0RFX0ZPUkNFX0ZVTExfTE9HTyIsICJpc0NvbmRlbnNlZE1vZGUiLCAidDUiLCAidDYiLCAiaW5jcmVtZW50R3Vlc3RQYXNzZXNTZWVuQ291bnQiLCAidDciLCAidDgiLCAiaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCIsICJtb2RlbCIsICJ1c2VNYWluTG9vcE1vZGVsIiwgImZ1bGxNb2RlbERpc3BsYXlOYW1lIiwgInJlbmRlck1vZGVsU2V0dGluZyIsICJ2ZXJzaW9uIiwgImN3ZCIsICJiaWxsaW5nVHlwZSIsICJhZ2VudE5hbWUiLCAiYWdlbnROYW1lRnJvbVNldHRpbmdzIiwgImdldExvZ29EaXNwbGF5RGF0YSIsICJlZmZvcnRTdWZmaXgiLCAiZ2V0RWZmb3J0U3VmZml4IiwgInQ5IiwgInQxMCIsICJ0cnVuY2F0ZSIsICJMRUZUX1BBTkVMX01BWF9XSURUSCIsICJtb2RlbERpc3BsYXlOYW1lIiwgInQxMSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJDaGFubmVsc05vdGljZU1vZHVsZSIsICJpc0RlYnVnTW9kZSIsICJpc0RlYnVnVG9TdGRFcnIiLCAiZ2V0RGVidWdMb2dQYXRoIiwgIkNMQVVERV9DT0RFX1RNVVhfU0VTU0lPTiIsICJDTEFVREVfQ09ERV9UTVVYX1BSRUZJWF9DT05GTElDVFMiLCAiQ0xBVURFX0NPREVfVE1VWF9QUkVGSVgiLCAidDE4IiwgIklTX0RFTU8iLCAib3JnYW5pemF0aW9uTmFtZSIsICJ0MTkiLCAidDIwIiwgInQyMSIsICJ0MjIiLCAidDIzIiwgImxheW91dE1vZGUiLCAiZ2V0TGF5b3V0TW9kZSIsICJ1c2VyVGhlbWUiLCAicmVzb2x2ZVRoZW1lU2V0dGluZyIsICJ0aGVtZSIsICJib3JkZXJUaXRsZSIsICJjb2xvciIsICJjb21wYWN0Qm9yZGVyVGl0bGUiLCAid2VsY29tZU1lc3NhZ2UiLCAiZm9ybWF0V2VsY29tZU1lc3NhZ2UiLCAic3RyaW5nV2lkdGgiLCAiY3dkQXZhaWxhYmxlV2lkdGgiLCAidHJ1bmNhdGVkQ3dkIiwgInRydW5jYXRlUGF0aCIsICJtYXgiLCAiY29udGVudCIsICJwb3NpdGlvbiIsICJhbGlnbiIsICJvZmZzZXQiLCAid2VsY29tZU1lc3NhZ2VfMCIsICJtb2RlbExpbmUiLCAiY3dkQXZhaWxhYmxlV2lkdGhfMCIsICJ0cnVuY2F0ZWRDd2RfMCIsICJjd2RMaW5lIiwgIm9wdGltYWxMZWZ0V2lkdGgiLCAiY2FsY3VsYXRlT3B0aW1hbExlZnRXaWR0aCIsICJsZWZ0V2lkdGgiLCAicmlnaHRXaWR0aCIsICJjYWxjdWxhdGVMYXlvdXREaW1lbnNpb25zIiwgIlQwIiwgIk9mZnNjcmVlbkZyZWV6ZSIsICJUMSIsICJCb3giLCAiVDIiLCAidDI0IiwgInQyNSIsICJjcmVhdGVQcm9qZWN0T25ib2FyZGluZ0ZlZWQiLCAiZ2V0U3RlcHMiLCAiY3JlYXRlUmVjZW50QWN0aXZpdHlGZWVkIiwgImNyZWF0ZUd1ZXN0UGFzc2VzRmVlZCIsICJjcmVhdGVPdmVyYWdlQ3JlZGl0RmVlZCIsICJjcmVhdGVXaGF0c05ld0ZlZWQiLCAidDI2IiwgInQyNyIsICJ0MjgiLCAidDI5IiwgInQzMCIsICJ0MzEiLCAidDMyIiwgInQzMyIsICJ0MzQiLCAidDM1IiwgInQzNiIsICJ0MzciLCAidDM4IiwgInQzOSIsICJ0NDAiLCAidDQxIiwgImN1cnJlbnQiLCAic18wIiwgInMiLCAiZmVhdHVyZSIsICJyZXF1aXJlIiwgIk1lc3NhZ2VNb2RlbCIsICJ0MCIsICIkIiwgIl9jIiwgIm1lc3NhZ2UiLCAiaXNUcmFuc2NyaXB0TW9kZSIsICJzaG91bGRTaG93TW9kZWwiLCAidHlwZSIsICJtb2RlbCIsICJjb250ZW50IiwgInNvbWUiLCAiX3RlbXAiLCAidDEiLCAic3RyaW5nV2lkdGgiLCAidDIiLCAidDMiLCAiYyIsICJNZXNzYWdlVGltZXN0YW1wIiwgInQwIiwgIiQiLCAiX2MiLCAibWVzc2FnZSIsICJpc1RyYW5zY3JpcHRNb2RlIiwgInNob3VsZFNob3dUaW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInR5cGUiLCAiY29udGVudCIsICJzb21lIiwgIl90ZW1wIiwgIlQwIiwgImZvcm1hdHRlZFRpbWVzdGFtcCIsICJ0MSIsICJEYXRlIiwgInRvTG9jYWxlVGltZVN0cmluZyIsICJob3VyIiwgIm1pbnV0ZSIsICJob3VyMTIiLCAiQm94IiwgInN0cmluZ1dpZHRoIiwgInQyIiwgInQzIiwgImMiLCAiaGFzQ29udGVudEFmdGVySW5kZXgiLCAibWVzc2FnZXMiLCAiaW5kZXgiLCAidG9vbHMiLCAic3RyZWFtaW5nVG9vbFVzZUlEcyIsICJpIiwgImxlbmd0aCIsICJtc2ciLCAidHlwZSIsICJjb250ZW50IiwgIm1lc3NhZ2UiLCAiZ2V0VG9vbFNlYXJjaE9yUmVhZEluZm8iLCAibmFtZSIsICJpbnB1dCIsICJpc0NvbGxhcHNpYmxlIiwgImhhcyIsICJpZCIsICJmaXJzdElucHV0IiwgInRvb2xOYW1lIiwgIk1lc3NhZ2VSb3dJbXBsIiwgInQwIiwgIiQiLCAiX2MiLCAiaXNVc2VyQ29udGludWF0aW9uIiwgImhhc0NvbnRlbnRBZnRlciIsICJjb21tYW5kcyIsICJ2ZXJib3NlIiwgImluUHJvZ3Jlc3NUb29sVXNlSURzIiwgInNjcmVlbiIsICJjYW5BbmltYXRlIiwgIm9uT3BlblJhdGVMaW1pdE9wdGlvbnMiLCAibGFzdFRoaW5raW5nQmxvY2tJZCIsICJsYXRlc3RCYXNoT3V0cHV0VVVJRCIsICJjb2x1bW5zIiwgImlzTG9hZGluZyIsICJsb29rdXBzIiwgImlzVHJhbnNjcmlwdE1vZGUiLCAiaXNHcm91cGVkIiwgImlzQ29sbGFwc2VkIiwgInQxIiwgImhhc0FueVRvb2xJblByb2dyZXNzIiwgImlzQWN0aXZlQ29sbGFwc2VkR3JvdXAiLCAidDIiLCAiZGlzcGxheU1lc3NhZ2UiLCAiZ2V0RGlzcGxheU1lc3NhZ2VGcm9tQ29sbGFwc2VkIiwgImRpc3BsYXlNc2ciLCAidDMiLCAiZ2V0UHJvZ3Jlc3NNZXNzYWdlc0Zyb21Mb29rdXAiLCAicHJvZ3Jlc3NNZXNzYWdlc0Zvck1lc3NhZ2UiLCAidDQiLCAic2libGluZ1Rvb2xVc2VJRHMiLCAiRU1QVFlfU1RSSU5HX1NFVCIsICJnZXRTaWJsaW5nVG9vbFVzZUlEc0Zyb21Mb29rdXAiLCAic2hvdWxkUmVuZGVyU3RhdGljYWxseSIsICJpc1N0YXRpYyIsICJzaG91bGRBbmltYXRlIiwgInQ1IiwgInQ2IiwgIm0iLCAic29tZSIsICJ0b29sVXNlSUQiLCAiZ2V0VG9vbFVzZUlEIiwgIl90ZW1wIiwgInRpbWVzdGFtcCIsICJtb2RlbCIsICJoYXNNZXRhZGF0YSIsICJ0NyIsICJ1bmRlZmluZWQiLCAidDgiLCAibWVzc2FnZUVsIiwgInQ5IiwgInQxMCIsICJjIiwgImlzTWVzc2FnZVN0cmVhbWluZyIsICJ0b29sSWRzIiwgImdldFRvb2xVc2VJZHNGcm9tQ29sbGFwc2VkR3JvdXAiLCAiYWxsVG9vbHNSZXNvbHZlZCIsICJyZXNvbHZlZFRvb2xVc2VJRHMiLCAiZXZlcnkiLCAiYmxvY2siLCAiYXJlTWVzc2FnZVJvd1Byb3BzRXF1YWwiLCAicHJldiIsICJuZXh0IiwgInByZXZJc0xhdGVzdEJhc2giLCAidXVpZCIsICJuZXh0SXNMYXRlc3RCYXNoIiwgImhhc1RoaW5raW5nQ29udGVudCIsICJpc1N0cmVhbWluZyIsICJpc1Jlc29sdmVkIiwgIk1lc3NhZ2VSb3ciLCAibWVtbyIsICJyZWxhdGl2ZSIsICJnZXRBY3RpdmVOb3RpY2VzIiwgImNvbnRleHQiLCAic3RhdHVzTm90aWNlRGVmaW5pdGlvbnMiLCAiZmlsdGVyIiwgIm5vdGljZSIsICJpc0FjdGl2ZSIsICJsYXJnZU1lbW9yeUZpbGVzTm90aWNlIiwgImNsYXVkZUFpU3Vic2NyaWJlckV4dGVybmFsVG9rZW5Ob3RpY2UiLCAiYXBpS2V5Q29uZmxpY3ROb3RpY2UiLCAiYm90aEF1dGhNZXRob2RzTm90aWNlIiwgImxhcmdlQWdlbnREZXNjcmlwdGlvbnNOb3RpY2UiLCAiamV0YnJhaW5zUGx1Z2luTm90aWNlIiwgImlkIiwgInR5cGUiLCAiY3R4IiwgImdldExhcmdlTWVtb3J5RmlsZXMiLCAibWVtb3J5RmlsZXMiLCAibGVuZ3RoIiwgInJlbmRlciIsICJsYXJnZU1lbW9yeUZpbGVzIiwgIm1hcCIsICJmaWxlIiwgImRpc3BsYXlQYXRoIiwgInBhdGgiLCAic3RhcnRzV2l0aCIsICJnZXRDd2QiLCAiZmlndXJlcyIsICJ3YXJuaW5nIiwgImZvcm1hdE51bWJlciIsICJjb250ZW50IiwgIk1BWF9NRU1PUllfQ0hBUkFDVEVSX0NPVU5UIiwgImF1dGhUb2tlbkluZm8iLCAiZ2V0QXV0aFRva2VuU291cmNlIiwgImlzQ2xhdWRlQUlTdWJzY3JpYmVyIiwgInNvdXJjZSIsICJhcGlLZXlTb3VyY2UiLCAiZ2V0QW50aHJvcGljQXBpS2V5V2l0aFNvdXJjZSIsICJza2lwUmV0cmlldmluZ0tleUZyb21BcGlLZXlIZWxwZXIiLCAiZ2V0QXBpS2V5RnJvbUNvbmZpZ09yTWFjT1NLZXljaGFpbiIsICJ0b3RhbFRva2VucyIsICJnZXRBZ2VudERlc2NyaXB0aW9uc1RvdGFsVG9rZW5zIiwgImFnZW50RGVmaW5pdGlvbnMiLCAiQUdFTlRfREVTQ1JJUFRJT05TX1RIUkVTSE9MRCIsICJpc1N1cHBvcnRlZEpldEJyYWluc1Rlcm1pbmFsIiwgInNob3VsZEF1dG9JbnN0YWxsIiwgImNvbmZpZyIsICJhdXRvSW5zdGFsbElkZUV4dGVuc2lvbiIsICJpZGVUeXBlIiwgImdldFRlcm1pbmFsSWRlVHlwZSIsICJpc0pldEJyYWluc1BsdWdpbkluc3RhbGxlZENhY2hlZFN5bmMiLCAiaWRlTmFtZSIsICJ0b0lERURpc3BsYXlOYW1lIiwgImFycm93VXAiLCAiU3RhdHVzTm90aWNlcyIsICJ0MCIsICIkIiwgIl9jIiwgImFnZW50RGVmaW5pdGlvbnMiLCAidW5kZWZpbmVkIiwgInQxIiwgImdldEdsb2JhbENvbmZpZyIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgImdldE1lbW9yeUZpbGVzIiwgImNvbnRleHQiLCAiY29uZmlnIiwgIm1lbW9yeUZpbGVzIiwgInVzZSIsICJhY3RpdmVOb3RpY2VzIiwgImdldEFjdGl2ZU5vdGljZXMiLCAibGVuZ3RoIiwgIlQwIiwgIkJveCIsICJ0MyIsICJ0NCIsICJ0NSIsICJtYXAiLCAibm90aWNlIiwgImlkIiwgInJlbmRlciIsICJ0NiIsICJsaXN0T3JpZ2luIiwgIm5lZWRlZCIsICJjb3ZlcmFnZSIsICJkZWZhdWx0RXh0cmFjdFNlYXJjaFRleHQiLCAibXNnIiwgImNhY2hlZCIsICJmYWxsYmFja0xvd2VyQ2FjaGUiLCAiZ2V0IiwgInVuZGVmaW5lZCIsICJsb3dlcmVkIiwgInJlbmRlcmFibGVTZWFyY2hUZXh0IiwgInNldCIsICJzdGlja3lQcm9tcHRUZXh0IiwgInByb21wdFRleHRDYWNoZSIsICJyZXN1bHQiLCAiY29tcHV0ZVN0aWNreVByb21wdFRleHQiLCAicmF3IiwgInR5cGUiLCAiaXNNZXRhIiwgImlzVmlzaWJsZUluVHJhbnNjcmlwdE9ubHkiLCAiYmxvY2siLCAibWVzc2FnZSIsICJjb250ZW50IiwgInRleHQiLCAiYXR0YWNobWVudCIsICJjb21tYW5kTW9kZSIsICJwIiwgInByb21wdCIsICJmbGF0TWFwIiwgImIiLCAiam9pbiIsICJ0IiwgInN0cmlwU3lzdGVtUmVtaW5kZXJzIiwgInN0YXJ0c1dpdGgiLCAiVmlydHVhbEl0ZW0iLCAidDAiLCAiJCIsICJfYyIsICJpdGVtS2V5IiwgImsiLCAiaWR4IiwgIm1lYXN1cmVSZWYiLCAiZXhwYW5kZWQiLCAiaG92ZXJlZCIsICJjbGlja2FibGUiLCAib25DbGlja0siLCAib25FbnRlcksiLCAib25MZWF2ZUsiLCAicmVuZGVySXRlbSIsICJ0MSIsICJ0MiIsICJ0MyIsICJ0NCIsICJlIiwgImNlbGxJc0JsYW5rIiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgInQxMCIsICJWaXJ0dWFsTWVzc2FnZUxpc3QiLCAibWVzc2FnZXMiLCAic2Nyb2xsUmVmIiwgImNvbHVtbnMiLCAib25JdGVtQ2xpY2siLCAiaXNJdGVtQ2xpY2thYmxlIiwgImlzSXRlbUV4cGFuZGVkIiwgImV4dHJhY3RTZWFyY2hUZXh0IiwgInRyYWNrU3RpY2t5UHJvbXB0IiwgInNlbGVjdGVkSW5kZXgiLCAiY3Vyc29yTmF2UmVmIiwgInNldEN1cnNvciIsICJqdW1wUmVmIiwgIm9uU2VhcmNoTWF0Y2hlc0NoYW5nZSIsICJzY2FuRWxlbWVudCIsICJzZXRQb3NpdGlvbnMiLCAia2V5c1JlZiIsICJ1c2VSZWYiLCAicHJldk1lc3NhZ2VzUmVmIiwgInByZXZJdGVtS2V5UmVmIiwgImN1cnJlbnQiLCAibGVuZ3RoIiwgIm1hcCIsICJtIiwgImkiLCAicHVzaCIsICJrZXlzIiwgInJhbmdlIiwgInRvcFNwYWNlciIsICJib3R0b21TcGFjZXIiLCAic3BhY2VyUmVmIiwgIm9mZnNldHMiLCAiZ2V0SXRlbVRvcCIsICJnZXRJdGVtRWxlbWVudCIsICJnZXRJdGVtSGVpZ2h0IiwgInNjcm9sbFRvSW5kZXgiLCAidXNlVmlydHVhbFNjcm9sbCIsICJzdGFydCIsICJlbmQiLCAiaXNWaXNpYmxlIiwgInVzZUNhbGxiYWNrIiwgImgiLCAiaXNOYXZpZ2FibGVNZXNzYWdlIiwgInVzZUltcGVyYXRpdmVIYW5kbGUiLCAic2VsZWN0IiwgInV1aWQiLCAibXNnVHlwZSIsICJ0b29sTmFtZSIsICJ0b29sQ2FsbE9mIiwgIm5hbWUiLCAic2VsSWR4IiwgInNjYW4iLCAiZnJvbSIsICJkaXIiLCAicHJlZCIsICJpc1VzZXIiLCAiZW50ZXJDdXJzb3IiLCAibmF2aWdhdGVQcmV2IiwgIm5hdmlnYXRlTmV4dCIsICJzY3JvbGxUb0JvdHRvbSIsICJuYXZpZ2F0ZVByZXZVc2VyIiwgIm5hdmlnYXRlTmV4dFVzZXIiLCAibmF2aWdhdGVUb3AiLCAibmF2aWdhdGVCb3R0b20iLCAiZ2V0U2VsZWN0ZWQiLCAianVtcFN0YXRlIiwgInVzZUVmZmVjdCIsICJzIiwgImVsIiwgInNjcm9sbFRvRWxlbWVudCIsICJzY2FuUmVxdWVzdFJlZiIsICJlbGVtZW50UG9zaXRpb25zIiwgIm1zZ0lkeCIsICJwb3NpdGlvbnMiLCAic3RhcnRQdHJSZWYiLCAicGhhbnRvbUJ1cnN0UmVmIiwgInBlbmRpbmdTdGVwUmVmIiwgInN0ZXBSZWYiLCAiaGlnaGxpZ2h0UmVmIiwgInNlYXJjaFN0YXRlIiwgIm1hdGNoZXMiLCAicHRyIiwgInNjcmVlbk9yZCIsICJwcmVmaXhTdW0iLCAic2VhcmNoQW5jaG9yIiwgImluZGV4V2FybWVkIiwgInRhcmdldEZvciIsICJ0b3AiLCAiTWF0aCIsICJtYXgiLCAiSEVBRFJPT00iLCAiaGlnaGxpZ2h0IiwgIm9yZCIsICJtaW4iLCAidnBUb3AiLCAiZ2V0Vmlld3BvcnRUb3AiLCAibG8iLCAiZ2V0U2Nyb2xsVG9wIiwgInZwIiwgImdldFZpZXdwb3J0SGVpZ2h0IiwgInNjcmVlblJvdyIsICJyb3ciLCAic2Nyb2xsVG8iLCAicm93T2Zmc2V0IiwgImN1cnJlbnRJZHgiLCAic3QiLCAidG90YWwiLCAiYXQiLCAibG9nRm9yRGVidWdnaW5nIiwgImNvbCIsICJzZWVrR2VuIiwgInNldFNlZWtHZW4iLCAidXNlU3RhdGUiLCAiYnVtcFNlZWsiLCAiZyIsICJyZXEiLCAid2FudExhc3QiLCAidHJpZXMiLCAieW9nYU5vZGUiLCAiZ2V0Q29tcHV0ZWRIZWlnaHQiLCAicGVuZGluZyIsICJqdW1wIiwgImpzIiwgInN0ZXAiLCAiZGVsdGEiLCAibmV3T3JkIiwgInBsYWNlaG9sZGVyIiwgImp1bXBUb0luZGV4IiwgInNldFNlYXJjaFF1ZXJ5IiwgInEiLCAibHEiLCAidG9Mb3dlckNhc2UiLCAibXNncyIsICJwb3MiLCAiaW5kZXhPZiIsICJjbnQiLCAiZmlyc3RUb3AiLCAib3JpZ2luIiwgImN1clRvcCIsICJiZXN0IiwgIkluZmluaXR5IiwgImQiLCAiYWJzIiwgIm5leHRNYXRjaCIsICJwcmV2TWF0Y2giLCAic2V0QW5jaG9yIiwgImRpc2FybVNlYXJjaCIsICJ3YXJtU2VhcmNoSW5kZXgiLCAiQ0hVTksiLCAid29ya01zIiwgIndhbGxTdGFydCIsICJwZXJmb3JtYW5jZSIsICJub3ciLCAic2xlZXAiLCAiaiIsICJ3YWxsTXMiLCAicm91bmQiLCAiY2VpbCIsICJob3ZlcmVkS2V5IiwgInNldEhvdmVyZWRLZXkiLCAiaGFuZGxlcnNSZWYiLCAicHJldiIsICJzbGljZSIsICJTdGlja3lUcmFja2VyIiwgInNldFN0aWNreVByb21wdCIsICJ1c2VDb250ZXh0IiwgIlNjcm9sbENocm9tZUNvbnRleHQiLCAic3Vic2NyaWJlIiwgImxpc3RlbmVyIiwgIk5PT1BfVU5TVUIiLCAidXNlU3luY0V4dGVybmFsU3RvcmUiLCAiTmFOIiwgImdldFBlbmRpbmdEZWx0YSIsICJpc1N0aWNreSIsICJ0YXJnZXQiLCAiZmlyc3RWaXNpYmxlIiwgImZpcnN0VmlzaWJsZVRvcCIsICJiYXNlT2Zmc2V0IiwgImVzdGltYXRlIiwgInN1cHByZXNzIiwgImxhc3RJZHgiLCAiZm9yY2UiLCAidHJpbW1lZCIsICJ0cmltU3RhcnQiLCAicGFyYUVuZCIsICJzZWFyY2giLCAiY29sbGFwc2VkIiwgIlNUSUNLWV9URVhUX0NBUCIsICJyZXBsYWNlIiwgInRyaW0iLCAiY2FwdHVyZWRJZHgiLCAiY2FwdHVyZWRFc3RpbWF0ZSIsICJXZWFrTWFwIiwgImZpbHRlckZvckJyaWVmVG9vbCIsICJtZXNzYWdlcyIsICJicmllZlRvb2xOYW1lcyIsICJuYW1lU2V0IiwgIlNldCIsICJicmllZlRvb2xVc2VJRHMiLCAiZmlsdGVyIiwgIm1zZyIsICJ0eXBlIiwgInN1YnR5cGUiLCAiYmxvY2siLCAibWVzc2FnZSIsICJjb250ZW50IiwgImlzQXBpRXJyb3JNZXNzYWdlIiwgIm5hbWUiLCAiaGFzIiwgImFkZCIsICJpZCIsICJ0b29sX3VzZV9pZCIsICJ1bmRlZmluZWQiLCAiaXNNZXRhIiwgImF0dCIsICJhdHRhY2htZW50IiwgImNvbW1hbmRNb2RlIiwgIm9yaWdpbiIsICJkcm9wVGV4dEluQnJpZWZUdXJucyIsICJ0dXJuc1dpdGhCcmllZiIsICJ0ZXh0SW5kZXhUb1R1cm4iLCAidHVybiIsICJpIiwgImxlbmd0aCIsICJzaXplIiwgIl8iLCAidCIsICJjb21wdXRlU2xpY2VTdGFydCIsICJjb2xsYXBzZWQiLCAiYW5jaG9yUmVmIiwgImNhcCIsICJNQVhfTUVTU0FHRVNfV0lUSE9VVF9WSVJUVUFMSVpBVElPTiIsICJzdGVwIiwgIk1FU1NBR0VfQ0FQX1NURVAiLCAiYW5jaG9yIiwgImN1cnJlbnQiLCAiYW5jaG9ySWR4IiwgImZpbmRJbmRleCIsICJtIiwgInV1aWQiLCAic3RhcnQiLCAiTWF0aCIsICJtaW4iLCAiaWR4IiwgIm1heCIsICJtc2dBdFN0YXJ0IiwgImV4cGFuZEtleSIsICJnZXRUb29sVXNlSUQiLCAic2V0c0VxdWFsIiwgImEiLCAiYiIsICJpdGVtIiwgInNob3VsZFJlbmRlclN0YXRpY2FsbHkiLCAic3RyZWFtaW5nVG9vbFVzZUlEcyIsICJpblByb2dyZXNzVG9vbFVzZUlEcyIsICJzaWJsaW5nVG9vbFVzZUlEcyIsICJzY3JlZW4iLCAibG9va3VwcyIsICJyZXNvbHZlZFRvb2xVc2VJRHMiLCAidG9vbFVzZUlEIiwgImhhc1VucmVzb2x2ZWRIb29rc0Zyb21Mb29rdXAiLCAiZXZlcnkiLCAiYWxsUmVzb2x2ZWQiLCAiTG9nb0hlYWRlciIsICJwcm9hY3RpdmVNb2R1bGUiLCAiQlJJRUZfVE9PTF9OQU1FIiwgIlNFTkRfVVNFUl9GSUxFX1RPT0xfTkFNRSIsICJNQVhfTUVTU0FHRVNfVE9fU0hPV19JTl9UUkFOU0NSSVBUX01PREUiLCAiTWVzc2FnZXNJbXBsIiwgIk1lc3NhZ2VzIiwgImluaXRfZmlndXJlcyIsICJtZW1vIiwgInQwIiwgIiQiLCAiX2MiLCAiYWdlbnREZWZpbml0aW9ucyIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgInQyIiwgImZlYXR1cmUiLCAicmVxdWlyZSIsICJ0b29scyIsICJjb21tYW5kcyIsICJ2ZXJib3NlIiwgInRvb2xKU1giLCAidG9vbFVzZUNvbmZpcm1RdWV1ZSIsICJpc01lc3NhZ2VTZWxlY3RvclZpc2libGUiLCAiY29udmVyc2F0aW9uSWQiLCAic3RyZWFtaW5nVG9vbFVzZXMiLCAic2hvd0FsbEluVHJhbnNjcmlwdCIsICJvbk9wZW5SYXRlTGltaXRPcHRpb25zIiwgImhpZGVMb2dvIiwgImlzTG9hZGluZyIsICJoaWRlUGFzdFRoaW5raW5nIiwgInN0cmVhbWluZ1RoaW5raW5nIiwgInN0cmVhbWluZ1RleHQiLCAiaXNCcmllZk9ubHkiLCAidW5zZWVuRGl2aWRlciIsICJzY3JvbGxSZWYiLCAidHJhY2tTdGlja3lQcm9tcHQiLCAianVtcFJlZiIsICJvblNlYXJjaE1hdGNoZXNDaGFuZ2UiLCAic2NhbkVsZW1lbnQiLCAic2V0UG9zaXRpb25zIiwgImRpc2FibGVSZW5kZXJDYXAiLCAiY3Vyc29yIiwgInNldEN1cnNvciIsICJjdXJzb3JOYXZSZWYiLCAicmVuZGVyUmFuZ2UiLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAidG9nZ2xlU2hvd0FsbFNob3J0Y3V0IiwgInVzZVNob3J0Y3V0RGlzcGxheSIsICJub3JtYWxpemVkTWVzc2FnZXMiLCAidXNlTWVtbyIsICJub3JtYWxpemVNZXNzYWdlcyIsICJpc05vdEVtcHR5TWVzc2FnZSIsICJpc1N0cmVhbWluZ1RoaW5raW5nVmlzaWJsZSIsICJpc1N0cmVhbWluZyIsICJzdHJlYW1pbmdFbmRlZEF0IiwgIkRhdGUiLCAibm93IiwgImxhc3RUaGlua2luZ0Jsb2NrSWQiLCAiaiIsICJoYXNUb29sUmVzdWx0IiwgInNvbWUiLCAibGF0ZXN0QmFzaE91dHB1dFVVSUQiLCAidGV4dCIsICJzdGFydHNXaXRoIiwgIm5vcm1hbGl6ZWRUb29sVXNlSURzIiwgImdldFRvb2xVc2VJRHMiLCAic3RyZWFtaW5nVG9vbFVzZXNXaXRob3V0SW5Qcm9ncmVzcyIsICJzdHUiLCAiY29udGVudEJsb2NrIiwgInN5bnRoZXRpY1N0cmVhbWluZ1Rvb2xVc2VNZXNzYWdlcyIsICJmbGF0TWFwIiwgInN0cmVhbWluZ1Rvb2xVc2UiLCAiY3JlYXRlQXNzaXN0YW50TWVzc2FnZSIsICJkZXJpdmVVVUlEIiwgImlzVHJhbnNjcmlwdE1vZGUiLCAiZGlzYWJsZVZpcnR1YWxTY3JvbGwiLCAiaXNFbnZUcnV0aHkiLCAicHJvY2VzcyIsICJlbnYiLCAiQ0xBVURFX0NPREVfRElTQUJMRV9WSVJUVUFMX1NDUk9MTCIsICJ2aXJ0dWFsU2Nyb2xsUnVudGltZUdhdGUiLCAic2hvdWxkVHJ1bmNhdGUiLCAic2xpY2VBbmNob3JSZWYiLCAidXNlUmVmIiwgImhhc1RydW5jYXRlZE1lc3NhZ2VzIiwgImhpZGRlbk1lc3NhZ2VDb3VudCIsICJjb21wYWN0QXdhcmVNZXNzYWdlcyIsICJpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIiwgImdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnkiLCAiaW5jbHVkZVNuaXBwZWQiLCAibWVzc2FnZXNUb1Nob3dOb3RUcnVuY2F0ZWQiLCAicmVvcmRlck1lc3NhZ2VzSW5VSSIsICJpc051bGxSZW5kZXJpbmdBdHRhY2htZW50IiwgInNob3VsZFNob3dVc2VyTWVzc2FnZSIsICJuIiwgImRyb3BUZXh0VG9vbE5hbWVzIiwgImJyaWVmRmlsdGVyZWQiLCAibWVzc2FnZXNUb1Nob3ciLCAic2xpY2UiLCAiZ3JvdXBlZE1lc3NhZ2VzIiwgImFwcGx5R3JvdXBpbmciLCAiY29sbGFwc2VCYWNrZ3JvdW5kQmFzaE5vdGlmaWNhdGlvbnMiLCAiY29sbGFwc2VIb29rU3VtbWFyaWVzIiwgImNvbGxhcHNlVGVhbW1hdGVTaHV0ZG93bnMiLCAiY29sbGFwc2VSZWFkU2VhcmNoR3JvdXBzIiwgImJ1aWxkTWVzc2FnZUxvb2t1cHMiLCAicmVuZGVyYWJsZU1lc3NhZ2VzIiwgImNhcEFwcGxpZXMiLCAic2xpY2VTdGFydCIsICJtYXAiLCAiZGl2aWRlckJlZm9yZUluZGV4IiwgInByZWZpeCIsICJmaXJzdFVuc2VlblV1aWQiLCAic2VsZWN0ZWRJZHgiLCAiZXhwYW5kZWRLZXlzIiwgInNldEV4cGFuZGVkS2V5cyIsICJ1c2VTdGF0ZSIsICJvbkl0ZW1DbGljayIsICJ1c2VDYWxsYmFjayIsICJrIiwgInByZXYiLCAibmV4dCIsICJkZWxldGUiLCAiaXNJdGVtRXhwYW5kZWQiLCAibG9va3Vwc1JlZiIsICJpc0l0ZW1DbGlja2FibGUiLCAiaXNBZHZpc29yQmxvY2siLCAiaXNfZXJyb3IiLCAidG9vbFVzZVJlc3VsdCIsICJ0b29sVXNlQnlUb29sVXNlSUQiLCAiZ2V0IiwgInRvb2wiLCAiZmluZFRvb2xCeU5hbWUiLCAiaXNSZXN1bHRUcnVuY2F0ZWQiLCAiY2FuQW5pbWF0ZSIsICJzaG91bGRDb250aW51ZUFuaW1hdGlvbiIsICJoYXNUb29sc0luUHJvZ3Jlc3MiLCAicHJvZ3Jlc3MiLCAidXNlVGVybWluYWxOb3RpZmljYXRpb24iLCAicHJldlByb2dyZXNzU3RhdGUiLCAicHJvZ3Jlc3NFbmFibGVkIiwgImdldEdsb2JhbENvbmZpZyIsICJ0ZXJtaW5hbFByb2dyZXNzQmFyRW5hYmxlZCIsICJnZXRJc1JlbW90ZU1vZGUiLCAiaXNQcm9hY3RpdmVBY3RpdmUiLCAidXNlRWZmZWN0IiwgInN0YXRlIiwgIm1lc3NhZ2VLZXkiLCAicmVuZGVyTWVzc2FnZVJvdyIsICJpbmRleCIsICJwcmV2VHlwZSIsICJpc1VzZXJDb250aW51YXRpb24iLCAiaGFzQ29udGVudEFmdGVyIiwgImhhc0NvbnRlbnRBZnRlckluZGV4IiwgInJvdyIsICJleHBhbmRlZCIsICJ3cmFwcGVkIiwgImNvdW50IiwgInBsdXJhbCIsICJzZWFyY2hUZXh0Q2FjaGUiLCAiV2Vha01hcCIsICJleHRyYWN0U2VhcmNoVGV4dCIsICJjYWNoZWQiLCAicmVuZGVyYWJsZVNlYXJjaFRleHQiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJ0ciIsICJmaW5kIiwgInR1IiwgImV4dHJhY3RlZCIsICJsb3dlcmVkIiwgInRvTG93ZXJDYXNlIiwgInNldCIsICJjaGFsayIsICJib2xkIiwgIkJMQUNLX0NJUkNMRSIsICJ0aGlua2luZyIsICJrZXlzIiwgIk9iamVjdCIsICJrZXkiLCAicCJdCn0K
