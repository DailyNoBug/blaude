#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Messages,
  init_Messages
} from "./chunk-IOZFABU2.mjs";
import {
  SearchBox,
  init_SearchBox,
  init_useSearchInput,
  useSearchInput
} from "./chunk-5JV7JIJC.mjs";
import {
  LoadingState,
  init_LoadingState
} from "./chunk-MJWMASF2.mjs";
import {
  Select,
  Spinner,
  TextInput,
  getAllBaseTools,
  getFirstMeaningfulUserMessageTextContent,
  getSessionIdFromLog,
  getWorktreePaths,
  init_Spinner,
  init_TextInput,
  init_getWorktreePaths,
  init_select,
  init_sessionStorage,
  init_shellQuote,
  init_sideQuery,
  init_tools2 as init_tools,
  isCustomTitleEnabled,
  isLiteLog,
  loadFullLog,
  quote,
  saveCustomTitle,
  sideQuery
} from "./chunk-5INIV6TQ.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_KeyboardShortcutHint
} from "./chunk-UPQJMBLU.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-WFZ47W7F.mjs";
import {
  Divider,
  init_Divider,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
} from "./chunk-36ZVP56J.mjs";
import {
  ThemedBox_default,
  ThemedText,
  applyColor,
  c,
  getTheme,
  init_colorize,
  init_ink,
  init_react_compiler_runtime,
  init_theme,
  useTerminalFocus,
  useTheme,
  use_input_default
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  getSmallFastModel,
  init_model,
  init_source,
  source_default
} from "./chunk-JQ55XPLZ.mjs";
import {
  count,
  init_array
} from "./chunk-B7JYVDBT.mjs";
import {
  formatLogMetadata,
  formatRelativeTimeAgo,
  init_format,
  init_stringWidth,
  stringWidth,
  truncateToWidth
} from "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  getBranch,
  init_git
} from "./chunk-SF3TOBTZ.mjs";
import {
  getLogDisplayTitle,
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_debug,
  init_slowOperations,
  jsonParse,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/SessionPreview.tsx
function SessionPreview(t0) {
  const $ = c(33);
  const {
    log,
    onExit,
    onSelect
  } = t0;
  const [fullLog, setFullLog] = react_default.useState(null);
  let t1;
  let t2;
  if ($[0] !== log) {
    t1 = () => {
      setFullLog(null);
      if (isLiteLog(log)) {
        loadFullLog(log).then(setFullLog);
      }
    };
    t2 = [log];
    $[0] = log;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  react_default.useEffect(t1, t2);
  const isLoading = isLiteLog(log) && fullLog === null;
  const displayLog = fullLog ?? log;
  let t3;
  if ($[3] !== displayLog) {
    t3 = getSessionIdFromLog(displayLog) || "";
    $[3] = displayLog;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const conversationId = t3;
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = getAllBaseTools();
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const tools = t4;
  let t5;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      context: "Confirmation"
    };
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  useKeybinding("confirm:no", onExit, t5);
  let t6;
  if ($[7] !== fullLog || $[8] !== log || $[9] !== onSelect) {
    t6 = () => {
      onSelect(fullLog ?? log);
    };
    $[7] = fullLog;
    $[8] = log;
    $[9] = onSelect;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  const handleSelect = t6;
  let t7;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      context: "Confirmation"
    };
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  useKeybinding("confirm:yes", handleSelect, t7);
  if (isLoading) {
    let t82;
    if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ react_default.createElement(LoadingState, { message: "Loading session\u2026" });
      $[12] = t82;
    } else {
      t82 = $[12];
    }
    let t92;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t92 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, t82, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))));
      $[13] = t92;
    } else {
      t92 = $[13];
    }
    return t92;
  }
  let t8;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = [];
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t10;
  let t9;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = [];
    t10 = /* @__PURE__ */ new Set();
    $[15] = t10;
    $[16] = t9;
  } else {
    t10 = $[15];
    t9 = $[16];
  }
  let t11;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = [];
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== conversationId || $[19] !== displayLog.messages) {
    t12 = /* @__PURE__ */ react_default.createElement(Messages, { messages: displayLog.messages, tools, commands: t8, verbose: true, toolJSX: null, toolUseConfirmQueue: t9, inProgressToolUseIDs: t10, isMessageSelectorVisible: false, conversationId, screen: "transcript", streamingToolUses: t11, showAllInTranscript: true, isLoading: false });
    $[18] = conversationId;
    $[19] = displayLog.messages;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  let t13;
  if ($[21] !== displayLog.modified) {
    t13 = formatRelativeTimeAgo(displayLog.modified);
    $[21] = displayLog.modified;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  const t14 = displayLog.gitBranch ? ` \xB7 ${displayLog.gitBranch}` : "";
  let t15;
  if ($[23] !== displayLog.messageCount || $[24] !== t13 || $[25] !== t14) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t13, " \xB7", " ", displayLog.messageCount, " messages", t14);
    $[23] = displayLog.messageCount;
    $[24] = t13;
    $[25] = t14;
    $[26] = t15;
  } else {
    t15 = $[26];
  }
  let t16;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "resume" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })));
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  let t17;
  if ($[28] !== t15) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0, flexDirection: "column", borderTopDimColor: true, borderBottom: false, borderLeft: false, borderRight: false, borderStyle: "single", paddingLeft: 2 }, t15, t16);
    $[28] = t15;
    $[29] = t17;
  } else {
    t17 = $[29];
  }
  let t18;
  if ($[30] !== t12 || $[31] !== t17) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t12, t17);
    $[30] = t12;
    $[31] = t17;
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  return t18;
}
var init_SessionPreview = __esm({
  "src/components/SessionPreview.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_tools();
    init_format();
    init_sessionStorage();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_LoadingState();
    init_Messages();
  }
});

// src/components/TagTabs.tsx
function getTabWidth(tab, maxWidth) {
  if (tab === ALL_TAB_LABEL) {
    return ALL_TAB_LABEL.length + TAB_PADDING;
  }
  const tagWidth = stringWidth(tab);
  const effectiveTagWidth = maxWidth ? Math.min(tagWidth, maxWidth - TAB_PADDING - HASH_PREFIX_LENGTH) : tagWidth;
  return Math.max(0, effectiveTagWidth) + TAB_PADDING + HASH_PREFIX_LENGTH;
}
function truncateTag(tag, maxWidth) {
  const availableForTag = maxWidth - TAB_PADDING - HASH_PREFIX_LENGTH;
  if (stringWidth(tag) <= availableForTag) {
    return tag;
  }
  if (availableForTag <= 1) {
    return tag.charAt(0);
  }
  return truncateToWidth(tag, availableForTag);
}
function TagTabs({
  tabs,
  selectedIndex,
  availableWidth,
  showAllProjects = false
}) {
  const resumeLabel = showAllProjects ? "Resume (All Projects)" : "Resume";
  const resumeLabelWidth = resumeLabel.length + 1;
  const rightHintWidth = Math.max(RIGHT_HINT_WIDTH_WITH_COUNT, RIGHT_HINT_WIDTH_NO_COUNT);
  const maxTabsWidth = availableWidth - resumeLabelWidth - rightHintWidth - 2;
  const safeSelectedIndex = Math.max(0, Math.min(selectedIndex, tabs.length - 1));
  const maxSingleTabWidth = Math.max(20, Math.floor(maxTabsWidth / 2));
  const tabWidths = tabs.map((tab) => getTabWidth(tab, maxSingleTabWidth));
  let startIndex = 0;
  let endIndex = tabs.length;
  const totalTabsWidth = tabWidths.reduce((sum, w, i) => sum + w + (i < tabWidths.length - 1 ? 1 : 0), 0);
  if (totalTabsWidth > maxTabsWidth) {
    const effectiveMaxWidth = maxTabsWidth - LEFT_ARROW_WIDTH;
    let windowWidth = tabWidths[safeSelectedIndex] ?? 0;
    startIndex = safeSelectedIndex;
    endIndex = safeSelectedIndex + 1;
    while (startIndex > 0 || endIndex < tabs.length) {
      const canExpandLeft = startIndex > 0;
      const canExpandRight = endIndex < tabs.length;
      if (canExpandLeft) {
        const leftWidth = (tabWidths[startIndex - 1] ?? 0) + 1;
        if (windowWidth + leftWidth <= effectiveMaxWidth) {
          startIndex--;
          windowWidth += leftWidth;
          continue;
        }
      }
      if (canExpandRight) {
        const rightWidth = (tabWidths[endIndex] ?? 0) + 1;
        if (windowWidth + rightWidth <= effectiveMaxWidth) {
          endIndex++;
          windowWidth += rightWidth;
          continue;
        }
      }
      break;
    }
  }
  const hiddenLeft = startIndex;
  const hiddenRight = tabs.length - endIndex;
  const visibleTabs = tabs.slice(startIndex, endIndex);
  const visibleIndices = visibleTabs.map((_, i_0) => startIndex + i_0);
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "suggestion" }, resumeLabel), hiddenLeft > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, LEFT_ARROW_PREFIX, hiddenLeft), visibleTabs.map((tab_0, i_1) => {
    const actualIndex = visibleIndices[i_1];
    const isSelected = actualIndex === safeSelectedIndex;
    const displayText = tab_0 === ALL_TAB_LABEL ? tab_0 : `#${truncateTag(tab_0, maxSingleTabWidth - TAB_PADDING)}`;
    return /* @__PURE__ */ react_default.createElement(ThemedText, { key: tab_0, backgroundColor: isSelected ? "suggestion" : void 0, color: isSelected ? "inverseText" : void 0, bold: isSelected }, " ", displayText, " ");
  }), hiddenRight > 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, RIGHT_HINT_WITH_COUNT_PREFIX, hiddenRight, RIGHT_HINT_SUFFIX) : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, RIGHT_HINT_NO_COUNT));
}
var ALL_TAB_LABEL, TAB_PADDING, HASH_PREFIX_LENGTH, LEFT_ARROW_PREFIX, RIGHT_HINT_WITH_COUNT_PREFIX, RIGHT_HINT_SUFFIX, RIGHT_HINT_NO_COUNT, MAX_OVERFLOW_DIGITS, LEFT_ARROW_WIDTH, RIGHT_HINT_WIDTH_WITH_COUNT, RIGHT_HINT_WIDTH_NO_COUNT;
var init_TagTabs = __esm({
  "src/components/TagTabs.tsx"() {
    init_react();
    init_stringWidth();
    init_ink();
    init_format();
    ALL_TAB_LABEL = "All";
    TAB_PADDING = 2;
    HASH_PREFIX_LENGTH = 1;
    LEFT_ARROW_PREFIX = "\u2190 ";
    RIGHT_HINT_WITH_COUNT_PREFIX = "\u2192";
    RIGHT_HINT_SUFFIX = " (tab to cycle)";
    RIGHT_HINT_NO_COUNT = "(tab to cycle)";
    MAX_OVERFLOW_DIGITS = 2;
    LEFT_ARROW_WIDTH = LEFT_ARROW_PREFIX.length + MAX_OVERFLOW_DIGITS + 1;
    RIGHT_HINT_WIDTH_WITH_COUNT = RIGHT_HINT_WITH_COUNT_PREFIX.length + MAX_OVERFLOW_DIGITS + RIGHT_HINT_SUFFIX.length;
    RIGHT_HINT_WIDTH_NO_COUNT = RIGHT_HINT_NO_COUNT.length;
  }
});

// src/components/ui/TreeSelect.tsx
function TreeSelect(t0) {
  const $ = c(48);
  const {
    nodes,
    onSelect,
    onCancel,
    onFocus,
    focusNodeId,
    visibleOptionCount,
    layout: t1,
    isDisabled: t2,
    hideIndexes: t3,
    isNodeExpanded,
    onExpand,
    onCollapse,
    getParentPrefix,
    getChildPrefix,
    onUpFromFirstItem
  } = t0;
  const layout = t1 === void 0 ? "expanded" : t1;
  const isDisabled = t2 === void 0 ? false : t2;
  const hideIndexes = t3 === void 0 ? false : t3;
  let t4;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ new Set();
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  const [internalExpandedIds, setInternalExpandedIds] = react_default.useState(t4);
  const isProgrammaticFocusRef = react_default.useRef(false);
  const lastFocusedIdRef = react_default.useRef(null);
  let t5;
  if ($[1] !== internalExpandedIds || $[2] !== isNodeExpanded) {
    t5 = (nodeId) => {
      if (isNodeExpanded) {
        return isNodeExpanded(nodeId);
      }
      return internalExpandedIds.has(nodeId);
    };
    $[1] = internalExpandedIds;
    $[2] = isNodeExpanded;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  const isExpanded = t5;
  let result;
  if ($[4] !== isExpanded || $[5] !== nodes) {
    let traverse = function(node, depth, parentId) {
      const hasChildren = !!node.children && node.children.length > 0;
      const nodeIsExpanded = isExpanded(node.id);
      result.push({
        node,
        depth,
        isExpanded: nodeIsExpanded,
        hasChildren,
        parentId
      });
      if (hasChildren && nodeIsExpanded && node.children) {
        for (const child of node.children) {
          traverse(child, depth + 1, node.id);
        }
      }
    };
    result = [];
    for (const node_0 of nodes) {
      traverse(node_0, 0);
    }
    $[4] = isExpanded;
    $[5] = nodes;
    $[6] = result;
  } else {
    result = $[6];
  }
  const flattenedNodes = result;
  const defaultGetParentPrefix = _temp;
  const defaultGetChildPrefix = _temp2;
  const parentPrefixFn = getParentPrefix ?? defaultGetParentPrefix;
  const childPrefixFn = getChildPrefix ?? defaultGetChildPrefix;
  let t6;
  if ($[7] !== childPrefixFn || $[8] !== parentPrefixFn) {
    t6 = (flatNode) => {
      let prefix = "";
      if (flatNode.hasChildren) {
        prefix = parentPrefixFn(flatNode.isExpanded);
      } else {
        if (flatNode.depth > 0) {
          prefix = childPrefixFn(flatNode.depth);
        }
      }
      return prefix + flatNode.node.label;
    };
    $[7] = childPrefixFn;
    $[8] = parentPrefixFn;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  const buildLabel = t6;
  let t7;
  if ($[10] !== buildLabel || $[11] !== flattenedNodes) {
    t7 = flattenedNodes.map((flatNode_0) => ({
      label: buildLabel(flatNode_0),
      description: flatNode_0.node.description,
      dimDescription: flatNode_0.node.dimDescription ?? true,
      value: flatNode_0.node.id
    }));
    $[10] = buildLabel;
    $[11] = flattenedNodes;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  const options = t7;
  let map;
  if ($[13] !== flattenedNodes) {
    map = /* @__PURE__ */ new Map();
    flattenedNodes.forEach((fn) => map.set(fn.node.id, fn.node));
    $[13] = flattenedNodes;
    $[14] = map;
  } else {
    map = $[14];
  }
  const nodeMap = map;
  let t8;
  if ($[15] !== flattenedNodes) {
    t8 = (nodeId_0) => flattenedNodes.find((fn_0) => fn_0.node.id === nodeId_0);
    $[15] = flattenedNodes;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  const findFlattenedNode = t8;
  let t9;
  if ($[17] !== findFlattenedNode || $[18] !== onCollapse || $[19] !== onExpand) {
    t9 = (nodeId_1, shouldExpand) => {
      const flatNode_1 = findFlattenedNode(nodeId_1);
      if (!flatNode_1 || !flatNode_1.hasChildren) {
        return;
      }
      if (shouldExpand) {
        if (onExpand) {
          onExpand(nodeId_1);
        } else {
          setInternalExpandedIds((prev) => new Set(prev).add(nodeId_1));
        }
      } else {
        if (onCollapse) {
          onCollapse(nodeId_1);
        } else {
          setInternalExpandedIds((prev_0) => {
            const newSet = new Set(prev_0);
            newSet.delete(nodeId_1);
            return newSet;
          });
        }
      }
    };
    $[17] = findFlattenedNode;
    $[18] = onCollapse;
    $[19] = onExpand;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  const toggleExpand = t9;
  let t10;
  if ($[21] !== findFlattenedNode || $[22] !== focusNodeId || $[23] !== isDisabled || $[24] !== nodeMap || $[25] !== onFocus || $[26] !== toggleExpand) {
    t10 = (e) => {
      if (!focusNodeId || isDisabled) {
        return;
      }
      const flatNode_2 = findFlattenedNode(focusNodeId);
      if (!flatNode_2) {
        return;
      }
      if (e.key === "right" && flatNode_2.hasChildren) {
        e.preventDefault();
        toggleExpand(focusNodeId, true);
      } else {
        if (e.key === "left") {
          if (flatNode_2.hasChildren && flatNode_2.isExpanded) {
            e.preventDefault();
            toggleExpand(focusNodeId, false);
          } else {
            if (flatNode_2.parentId !== void 0) {
              e.preventDefault();
              isProgrammaticFocusRef.current = true;
              toggleExpand(flatNode_2.parentId, false);
              if (onFocus) {
                const parentNode = nodeMap.get(flatNode_2.parentId);
                if (parentNode) {
                  onFocus(parentNode);
                }
              }
            }
          }
        }
      }
    };
    $[21] = findFlattenedNode;
    $[22] = focusNodeId;
    $[23] = isDisabled;
    $[24] = nodeMap;
    $[25] = onFocus;
    $[26] = toggleExpand;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  const handleKeyDown = t10;
  let t11;
  if ($[28] !== nodeMap || $[29] !== onSelect) {
    t11 = (nodeId_2) => {
      const node_1 = nodeMap.get(nodeId_2);
      if (!node_1) {
        return;
      }
      onSelect(node_1);
    };
    $[28] = nodeMap;
    $[29] = onSelect;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  const handleChange = t11;
  let t12;
  if ($[31] !== nodeMap || $[32] !== onFocus) {
    t12 = (nodeId_3) => {
      if (isProgrammaticFocusRef.current) {
        isProgrammaticFocusRef.current = false;
        return;
      }
      if (lastFocusedIdRef.current === nodeId_3) {
        return;
      }
      lastFocusedIdRef.current = nodeId_3;
      if (onFocus) {
        const node_2 = nodeMap.get(nodeId_3);
        if (node_2) {
          onFocus(node_2);
        }
      }
    };
    $[31] = nodeMap;
    $[32] = onFocus;
    $[33] = t12;
  } else {
    t12 = $[33];
  }
  const handleFocus = t12;
  let t13;
  if ($[34] !== focusNodeId || $[35] !== handleChange || $[36] !== handleFocus || $[37] !== hideIndexes || $[38] !== isDisabled || $[39] !== layout || $[40] !== onCancel || $[41] !== onUpFromFirstItem || $[42] !== options || $[43] !== visibleOptionCount) {
    t13 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleChange, onFocus: handleFocus, onCancel, defaultFocusValue: focusNodeId, visibleOptionCount, layout, isDisabled, hideIndexes, onUpFromFirstItem });
    $[34] = focusNodeId;
    $[35] = handleChange;
    $[36] = handleFocus;
    $[37] = hideIndexes;
    $[38] = isDisabled;
    $[39] = layout;
    $[40] = onCancel;
    $[41] = onUpFromFirstItem;
    $[42] = options;
    $[43] = visibleOptionCount;
    $[44] = t13;
  } else {
    t13 = $[44];
  }
  let t14;
  if ($[45] !== handleKeyDown || $[46] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t13);
    $[45] = handleKeyDown;
    $[46] = t13;
    $[47] = t14;
  } else {
    t14 = $[47];
  }
  return t14;
}
function _temp2(_depth) {
  return "  \u25B8 ";
}
function _temp(isExpanded_0) {
  return isExpanded_0 ? "\u25BC " : "\u25B6 ";
}
var init_TreeSelect = __esm({
  "src/components/ui/TreeSelect.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_select();
  }
});

// src/components/LogSelector.tsx
function normalizeAndTruncateToWidth(text, maxWidth) {
  const normalized = text.replace(/\s+/g, " ").trim();
  return truncateToWidth(normalized, maxWidth);
}
function formatSnippet({
  before,
  match,
  after
}, highlightColor) {
  return source_default.dim(before) + highlightColor(match) + source_default.dim(after);
}
function extractSnippet(text, query, contextChars) {
  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1) return null;
  const matchEnd = matchIndex + query.length;
  const snippetStart = Math.max(0, matchIndex - contextChars);
  const snippetEnd = Math.min(text.length, matchEnd + contextChars);
  const beforeRaw = text.slice(snippetStart, matchIndex);
  const matchText = text.slice(matchIndex, matchEnd);
  const afterRaw = text.slice(matchEnd, snippetEnd);
  return {
    before: (snippetStart > 0 ? "\u2026" : "") + beforeRaw.replace(/\s+/g, " ").trimStart(),
    match: matchText.trim(),
    after: afterRaw.replace(/\s+/g, " ").trimEnd() + (snippetEnd < text.length ? "\u2026" : "")
  };
}
function buildLogLabel(log, maxLabelWidth, options) {
  const {
    isGroupHeader = false,
    isChild = false,
    forkCount = 0
  } = options || {};
  const prefixWidth = isGroupHeader && forkCount > 0 ? PARENT_PREFIX_WIDTH : isChild ? CHILD_PREFIX_WIDTH : 0;
  const sessionCountSuffix = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "";
  const sidechainSuffix = log.isSidechain ? " (sidechain)" : "";
  const maxSummaryWidth = maxLabelWidth - prefixWidth - sidechainSuffix.length - sessionCountSuffix.length;
  const truncatedSummary = normalizeAndTruncateToWidth(getLogDisplayTitle(log), maxSummaryWidth);
  return `${truncatedSummary}${sidechainSuffix}${sessionCountSuffix}`;
}
function buildLogMetadata(log, options) {
  const {
    isChild = false,
    showProjectPath = false
  } = options || {};
  const childPadding = isChild ? "    " : "";
  const baseMetadata = formatLogMetadata(log);
  const projectSuffix = showProjectPath && log.projectPath ? ` \xB7 ${log.projectPath}` : "";
  return childPadding + baseMetadata + projectSuffix;
}
function LogSelector(t0) {
  const $ = c(247);
  const {
    logs,
    maxHeight: t1,
    forceWidth,
    onCancel,
    onSelect,
    onLogsChanged,
    onLoadMore,
    initialSearchQuery,
    showAllProjects: t2,
    onToggleAllProjects,
    onAgenticSearch
  } = t0;
  const maxHeight = t1 === void 0 ? Infinity : t1;
  const showAllProjects = t2 === void 0 ? false : t2;
  const terminalSize = useTerminalSize();
  const columns = forceWidth === void 0 ? terminalSize.columns : forceWidth;
  const exitState = useExitOnCtrlCDWithKeybindings(onCancel);
  const isTerminalFocused = useTerminalFocus();
  let t3;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = isCustomTitleEnabled();
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  const isResumeWithRenameEnabled = t3;
  const isDeepSearchEnabled = false;
  const [themeName] = useTheme();
  let t4;
  if ($[1] !== themeName) {
    t4 = getTheme(themeName);
    $[1] = themeName;
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const theme = t4;
  let t5;
  if ($[3] !== theme.warning) {
    t5 = (text) => applyColor(text, theme.warning);
    $[3] = theme.warning;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const highlightColor = t5;
  const isAgenticSearchEnabled = false;
  const [currentBranch, setCurrentBranch] = react_default.useState(null);
  const [branchFilterEnabled, setBranchFilterEnabled] = react_default.useState(false);
  const [showAllWorktrees, setShowAllWorktrees] = react_default.useState(false);
  const [hasMultipleWorktrees, setHasMultipleWorktrees] = react_default.useState(false);
  let t6;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = getOriginalCwd();
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  const currentCwd = t6;
  const [renameValue, setRenameValue] = react_default.useState("");
  const [renameCursorOffset, setRenameCursorOffset] = react_default.useState(0);
  let t7;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ new Set();
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const [expandedGroupSessionIds, setExpandedGroupSessionIds] = react_default.useState(t7);
  const [focusedNode, setFocusedNode] = react_default.useState(null);
  const [focusedIndex, setFocusedIndex] = react_default.useState(1);
  const [viewMode, setViewMode] = react_default.useState("list");
  const [previewLog, setPreviewLog] = react_default.useState(null);
  const prevFocusedIdRef = react_default.useRef(null);
  const [selectedTagIndex, setSelectedTagIndex] = react_default.useState(0);
  let t8;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = {
      status: "idle"
    };
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  const [agenticSearchState, setAgenticSearchState] = react_default.useState(t8);
  const [isAgenticSearchOptionFocused, setIsAgenticSearchOptionFocused] = react_default.useState(false);
  const agenticSearchAbortRef = react_default.useRef(null);
  const t9 = viewMode === "search" && agenticSearchState.status !== "searching";
  let t10;
  let t11;
  let t12;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => {
      setViewMode("list");
      logEvent("tengu_session_search_toggled", {
        enabled: false
      });
    };
    t11 = () => {
      setViewMode("list");
      logEvent("tengu_session_search_toggled", {
        enabled: false
      });
    };
    t12 = ["n"];
    $[8] = t10;
    $[9] = t11;
    $[10] = t12;
  } else {
    t10 = $[8];
    t11 = $[9];
    t12 = $[10];
  }
  const t13 = initialSearchQuery || "";
  let t14;
  if ($[11] !== t13 || $[12] !== t9) {
    t14 = {
      isActive: t9,
      onExit: t10,
      onExitUp: t11,
      passthroughCtrlKeys: t12,
      initialQuery: t13
    };
    $[11] = t13;
    $[12] = t9;
    $[13] = t14;
  } else {
    t14 = $[13];
  }
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput(t14);
  const deferredSearchQuery = react_default.useDeferredValue(searchQuery);
  const [debouncedDeepSearchQuery, setDebouncedDeepSearchQuery] = react_default.useState("");
  let t15;
  let t16;
  if ($[14] !== deferredSearchQuery) {
    t15 = () => {
      if (!deferredSearchQuery) {
        setDebouncedDeepSearchQuery("");
        return;
      }
      const timeoutId = setTimeout(setDebouncedDeepSearchQuery, 300, deferredSearchQuery);
      return () => clearTimeout(timeoutId);
    };
    t16 = [deferredSearchQuery];
    $[14] = deferredSearchQuery;
    $[15] = t15;
    $[16] = t16;
  } else {
    t15 = $[15];
    t16 = $[16];
  }
  react_default.useEffect(t15, t16);
  const [deepSearchResults, setDeepSearchResults] = react_default.useState(null);
  const [isSearching, setIsSearching] = react_default.useState(false);
  let t17;
  let t18;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = () => {
      getBranch().then((branch) => setCurrentBranch(branch));
      getWorktreePaths(currentCwd).then((paths) => {
        setHasMultipleWorktrees(paths.length > 1);
      });
    };
    t18 = [currentCwd];
    $[17] = t17;
    $[18] = t18;
  } else {
    t17 = $[17];
    t18 = $[18];
  }
  react_default.useEffect(t17, t18);
  const searchableTextByLog = new Map(logs.map(_temp8));
  let t19;
  t19 = null;
  let t20;
  if ($[19] !== logs) {
    t20 = getUniqueTags(logs);
    $[19] = logs;
    $[20] = t20;
  } else {
    t20 = $[20];
  }
  const uniqueTags = t20;
  const hasTags = uniqueTags.length > 0;
  let t21;
  if ($[21] !== hasTags || $[22] !== uniqueTags) {
    t21 = hasTags ? ["All", ...uniqueTags] : [];
    $[21] = hasTags;
    $[22] = uniqueTags;
    $[23] = t21;
  } else {
    t21 = $[23];
  }
  const tagTabs = t21;
  const effectiveTagIndex = tagTabs.length > 0 && selectedTagIndex < tagTabs.length ? selectedTagIndex : 0;
  const selectedTab = tagTabs[effectiveTagIndex];
  const tagFilter = selectedTab === "All" ? void 0 : selectedTab;
  const tagTabsLines = hasTags ? 1 : 0;
  let filtered = logs;
  if (isResumeWithRenameEnabled) {
    let t222;
    if ($[24] !== logs) {
      t222 = logs.filter(_temp22);
      $[24] = logs;
      $[25] = t222;
    } else {
      t222 = $[25];
    }
    filtered = t222;
  }
  if (tagFilter !== void 0) {
    let t222;
    if ($[26] !== filtered || $[27] !== tagFilter) {
      let t232;
      if ($[29] !== tagFilter) {
        t232 = (log_2) => log_2.tag === tagFilter;
        $[29] = tagFilter;
        $[30] = t232;
      } else {
        t232 = $[30];
      }
      t222 = filtered.filter(t232);
      $[26] = filtered;
      $[27] = tagFilter;
      $[28] = t222;
    } else {
      t222 = $[28];
    }
    filtered = t222;
  }
  if (branchFilterEnabled && currentBranch) {
    let t222;
    if ($[31] !== currentBranch || $[32] !== filtered) {
      let t232;
      if ($[34] !== currentBranch) {
        t232 = (log_3) => log_3.gitBranch === currentBranch;
        $[34] = currentBranch;
        $[35] = t232;
      } else {
        t232 = $[35];
      }
      t222 = filtered.filter(t232);
      $[31] = currentBranch;
      $[32] = filtered;
      $[33] = t222;
    } else {
      t222 = $[33];
    }
    filtered = t222;
  }
  if (hasMultipleWorktrees && !showAllWorktrees) {
    let t222;
    if ($[36] !== filtered) {
      let t232;
      if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t232 = (log_4) => log_4.projectPath === currentCwd;
        $[38] = t232;
      } else {
        t232 = $[38];
      }
      t222 = filtered.filter(t232);
      $[36] = filtered;
      $[37] = t222;
    } else {
      t222 = $[37];
    }
    filtered = t222;
  }
  const baseFilteredLogs = filtered;
  let t22;
  bb0: {
    if (!searchQuery) {
      t22 = baseFilteredLogs;
      break bb0;
    }
    let t232;
    if ($[39] !== baseFilteredLogs || $[40] !== searchQuery) {
      const query = searchQuery.toLowerCase();
      t232 = baseFilteredLogs.filter((log_5) => {
        const displayedTitle = getLogDisplayTitle(log_5).toLowerCase();
        const branch_0 = (log_5.gitBranch || "").toLowerCase();
        const tag = (log_5.tag || "").toLowerCase();
        const prInfo = log_5.prNumber ? `pr #${log_5.prNumber} ${log_5.prRepository || ""}`.toLowerCase() : "";
        return displayedTitle.includes(query) || branch_0.includes(query) || tag.includes(query) || prInfo.includes(query);
      });
      $[39] = baseFilteredLogs;
      $[40] = searchQuery;
      $[41] = t232;
    } else {
      t232 = $[41];
    }
    t22 = t232;
  }
  const titleFilteredLogs = t22;
  let t23;
  let t24;
  if ($[42] !== debouncedDeepSearchQuery || $[43] !== deferredSearchQuery) {
    t23 = () => {
      if (false) {
        setIsSearching(true);
      }
    };
    t24 = [deferredSearchQuery, debouncedDeepSearchQuery, false];
    $[42] = debouncedDeepSearchQuery;
    $[43] = deferredSearchQuery;
    $[44] = t23;
    $[45] = t24;
  } else {
    t23 = $[44];
    t24 = $[45];
  }
  react_default.useEffect(t23, t24);
  let t25;
  let t26;
  if ($[46] !== debouncedDeepSearchQuery) {
    t25 = () => {
      if (true) {
        setDeepSearchResults(null);
        setIsSearching(false);
        return;
      }
      const timeoutId_0 = setTimeout(_temp5, 0, null, debouncedDeepSearchQuery, setDeepSearchResults, setIsSearching);
      return () => {
        clearTimeout(timeoutId_0);
      };
    };
    t26 = [debouncedDeepSearchQuery, null, false];
    $[46] = debouncedDeepSearchQuery;
    $[47] = t25;
    $[48] = t26;
  } else {
    t25 = $[47];
    t26 = $[48];
  }
  react_default.useEffect(t25, t26);
  let filtered_0;
  let snippetMap;
  if ($[49] !== debouncedDeepSearchQuery || $[50] !== deepSearchResults || $[51] !== titleFilteredLogs) {
    snippetMap = /* @__PURE__ */ new Map();
    filtered_0 = titleFilteredLogs;
    if (deepSearchResults && debouncedDeepSearchQuery && deepSearchResults.query === debouncedDeepSearchQuery) {
      for (const result of deepSearchResults.results) {
        if (result.searchableText) {
          const snippet = extractSnippet(result.searchableText, debouncedDeepSearchQuery, SNIPPET_CONTEXT_CHARS);
          if (snippet) {
            snippetMap.set(result.log, snippet);
          }
        }
      }
      let t272;
      if ($[54] !== filtered_0) {
        t272 = new Set(filtered_0.map(_temp6));
        $[54] = filtered_0;
        $[55] = t272;
      } else {
        t272 = $[55];
      }
      const titleMatchIds = t272;
      let t282;
      if ($[56] !== deepSearchResults.results || $[57] !== filtered_0 || $[58] !== titleMatchIds) {
        let t292;
        if ($[60] !== titleMatchIds) {
          t292 = (log_7) => !titleMatchIds.has(log_7.messages[0]?.uuid);
          $[60] = titleMatchIds;
          $[61] = t292;
        } else {
          t292 = $[61];
        }
        const transcriptOnlyMatches = deepSearchResults.results.map(_temp7).filter(t292);
        t282 = [...filtered_0, ...transcriptOnlyMatches];
        $[56] = deepSearchResults.results;
        $[57] = filtered_0;
        $[58] = titleMatchIds;
        $[59] = t282;
      } else {
        t282 = $[59];
      }
      filtered_0 = t282;
    }
    $[49] = debouncedDeepSearchQuery;
    $[50] = deepSearchResults;
    $[51] = titleFilteredLogs;
    $[52] = filtered_0;
    $[53] = snippetMap;
  } else {
    filtered_0 = $[52];
    snippetMap = $[53];
  }
  let t27;
  if ($[62] !== filtered_0 || $[63] !== snippetMap) {
    t27 = {
      filteredLogs: filtered_0,
      snippets: snippetMap
    };
    $[62] = filtered_0;
    $[63] = snippetMap;
    $[64] = t27;
  } else {
    t27 = $[64];
  }
  const {
    filteredLogs,
    snippets
  } = t27;
  let t28;
  bb1: {
    if (agenticSearchState.status === "results" && agenticSearchState.results.length > 0) {
      t28 = agenticSearchState.results;
      break bb1;
    }
    t28 = filteredLogs;
  }
  const displayedLogs = t28;
  const maxLabelWidth = Math.max(30, columns - 4);
  let t29;
  bb2: {
    if (!isResumeWithRenameEnabled) {
      let t303;
      if ($[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t303 = [];
        $[65] = t303;
      } else {
        t303 = $[65];
      }
      t29 = t303;
      break bb2;
    }
    let t302;
    if ($[66] !== displayedLogs || $[67] !== highlightColor || $[68] !== maxLabelWidth || $[69] !== showAllProjects || $[70] !== snippets) {
      const sessionGroups = groupLogsBySessionId(displayedLogs);
      t302 = Array.from(sessionGroups.entries()).map((t312) => {
        const [sessionId, groupLogs] = t312;
        const latestLog = groupLogs[0];
        const indexInFiltered = displayedLogs.indexOf(latestLog);
        const snippet_0 = snippets.get(latestLog);
        const snippetStr = snippet_0 ? formatSnippet(snippet_0, highlightColor) : null;
        if (groupLogs.length === 1) {
          const metadata = buildLogMetadata(latestLog, {
            showProjectPath: showAllProjects
          });
          return {
            id: `log:${sessionId}:0`,
            value: {
              log: latestLog,
              indexInFiltered
            },
            label: buildLogLabel(latestLog, maxLabelWidth),
            description: snippetStr ? `${metadata}
  ${snippetStr}` : metadata,
            dimDescription: true
          };
        }
        const forkCount = groupLogs.length - 1;
        const children = groupLogs.slice(1).map((log_8, index) => {
          const childIndexInFiltered = displayedLogs.indexOf(log_8);
          const childSnippet = snippets.get(log_8);
          const childSnippetStr = childSnippet ? formatSnippet(childSnippet, highlightColor) : null;
          const childMetadata = buildLogMetadata(log_8, {
            isChild: true,
            showProjectPath: showAllProjects
          });
          return {
            id: `log:${sessionId}:${index + 1}`,
            value: {
              log: log_8,
              indexInFiltered: childIndexInFiltered
            },
            label: buildLogLabel(log_8, maxLabelWidth, {
              isChild: true
            }),
            description: childSnippetStr ? `${childMetadata}
      ${childSnippetStr}` : childMetadata,
            dimDescription: true
          };
        });
        const parentMetadata = buildLogMetadata(latestLog, {
          showProjectPath: showAllProjects
        });
        return {
          id: `group:${sessionId}`,
          value: {
            log: latestLog,
            indexInFiltered
          },
          label: buildLogLabel(latestLog, maxLabelWidth, {
            isGroupHeader: true,
            forkCount
          }),
          description: snippetStr ? `${parentMetadata}
  ${snippetStr}` : parentMetadata,
          dimDescription: true,
          children
        };
      });
      $[66] = displayedLogs;
      $[67] = highlightColor;
      $[68] = maxLabelWidth;
      $[69] = showAllProjects;
      $[70] = snippets;
      $[71] = t302;
    } else {
      t302 = $[71];
    }
    t29 = t302;
  }
  const treeNodes = t29;
  let t30;
  bb3: {
    if (isResumeWithRenameEnabled) {
      let t313;
      if ($[72] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t313 = [];
        $[72] = t313;
      } else {
        t313 = $[72];
      }
      t30 = t313;
      break bb3;
    }
    let t312;
    if ($[73] !== displayedLogs || $[74] !== highlightColor || $[75] !== maxLabelWidth || $[76] !== showAllProjects || $[77] !== snippets) {
      let t322;
      if ($[79] !== highlightColor || $[80] !== maxLabelWidth || $[81] !== showAllProjects || $[82] !== snippets) {
        t322 = (log_9, index_0) => {
          const rawSummary = getLogDisplayTitle(log_9);
          const summaryWithSidechain = rawSummary + (log_9.isSidechain ? " (sidechain)" : "");
          const summary = normalizeAndTruncateToWidth(summaryWithSidechain, maxLabelWidth);
          const baseDescription = formatLogMetadata(log_9);
          const projectSuffix = showAllProjects && log_9.projectPath ? ` \xB7 ${log_9.projectPath}` : "";
          const snippet_1 = snippets.get(log_9);
          const snippetStr_0 = snippet_1 ? formatSnippet(snippet_1, highlightColor) : null;
          return {
            label: summary,
            description: snippetStr_0 ? `${baseDescription}${projectSuffix}
  ${snippetStr_0}` : baseDescription + projectSuffix,
            dimDescription: true,
            value: index_0.toString()
          };
        };
        $[79] = highlightColor;
        $[80] = maxLabelWidth;
        $[81] = showAllProjects;
        $[82] = snippets;
        $[83] = t322;
      } else {
        t322 = $[83];
      }
      t312 = displayedLogs.map(t322);
      $[73] = displayedLogs;
      $[74] = highlightColor;
      $[75] = maxLabelWidth;
      $[76] = showAllProjects;
      $[77] = snippets;
      $[78] = t312;
    } else {
      t312 = $[78];
    }
    t30 = t312;
  }
  const flatOptions = t30;
  const focusedLog = focusedNode?.value.log ?? null;
  let t31;
  if ($[84] !== displayedLogs || $[85] !== expandedGroupSessionIds || $[86] !== focusedLog) {
    t31 = () => {
      if (!isResumeWithRenameEnabled || !focusedLog) {
        return "";
      }
      const sessionId_0 = getSessionIdFromLog(focusedLog);
      if (!sessionId_0) {
        return "";
      }
      const sessionLogs = displayedLogs.filter((log_10) => getSessionIdFromLog(log_10) === sessionId_0);
      const hasMultipleLogs = sessionLogs.length > 1;
      if (!hasMultipleLogs) {
        return "";
      }
      const isExpanded = expandedGroupSessionIds.has(sessionId_0);
      const isChildNode = sessionLogs.indexOf(focusedLog) > 0;
      if (isChildNode) {
        return "\u2190 to collapse";
      }
      return isExpanded ? "\u2190 to collapse" : "\u2192 to expand";
    };
    $[84] = displayedLogs;
    $[85] = expandedGroupSessionIds;
    $[86] = focusedLog;
    $[87] = t31;
  } else {
    t31 = $[87];
  }
  const getExpandCollapseHint = t31;
  let t32;
  if ($[88] !== focusedLog || $[89] !== onLogsChanged || $[90] !== renameValue) {
    t32 = async () => {
      const sessionId_1 = focusedLog ? getSessionIdFromLog(focusedLog) : void 0;
      if (!focusedLog || !sessionId_1) {
        setViewMode("list");
        setRenameValue("");
        return;
      }
      if (renameValue.trim()) {
        await saveCustomTitle(sessionId_1, renameValue.trim(), focusedLog.fullPath);
        if (isResumeWithRenameEnabled && onLogsChanged) {
          onLogsChanged();
        }
      }
      setViewMode("list");
      setRenameValue("");
    };
    $[88] = focusedLog;
    $[89] = onLogsChanged;
    $[90] = renameValue;
    $[91] = t32;
  } else {
    t32 = $[91];
  }
  const handleRenameSubmit = t32;
  let t33;
  if ($[92] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t33 = () => {
      setViewMode("list");
      logEvent("tengu_session_search_toggled", {
        enabled: false
      });
    };
    $[92] = t33;
  } else {
    t33 = $[92];
  }
  const exitSearchMode = t33;
  let t34;
  if ($[93] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t34 = () => {
      setViewMode("search");
      logEvent("tengu_session_search_toggled", {
        enabled: true
      });
    };
    $[93] = t34;
  } else {
    t34 = $[93];
  }
  const enterSearchMode = t34;
  let t35;
  if ($[94] !== logs || $[95] !== onAgenticSearch || $[96] !== searchQuery) {
    t35 = async () => {
      if (!searchQuery.trim() || !onAgenticSearch || true) {
        return;
      }
      agenticSearchAbortRef.current?.abort();
      const abortController = new AbortController();
      agenticSearchAbortRef.current = abortController;
      setAgenticSearchState({
        status: "searching"
      });
      logEvent("tengu_agentic_search_started", {
        query_length: searchQuery.length
      });
      ;
      try {
        const results_0 = await onAgenticSearch(searchQuery, logs, abortController.signal);
        if (abortController.signal.aborted) {
          return;
        }
        setAgenticSearchState({
          status: "results",
          results: results_0,
          query: searchQuery
        });
        logEvent("tengu_agentic_search_completed", {
          query_length: searchQuery.length,
          results_count: results_0.length
        });
      } catch (t362) {
        const error = t362;
        if (abortController.signal.aborted) {
          return;
        }
        setAgenticSearchState({
          status: "error",
          message: error instanceof Error ? error.message : "Search failed"
        });
        logEvent("tengu_agentic_search_error", {
          query_length: searchQuery.length
        });
      }
    };
    $[94] = logs;
    $[95] = onAgenticSearch;
    $[96] = searchQuery;
    $[97] = t35;
  } else {
    t35 = $[97];
  }
  const handleAgenticSearch = t35;
  let t36;
  if ($[98] !== agenticSearchState.query || $[99] !== agenticSearchState.status || $[100] !== searchQuery) {
    t36 = () => {
      if (agenticSearchState.status !== "idle" && agenticSearchState.status !== "searching") {
        if (agenticSearchState.status === "results" && agenticSearchState.query !== searchQuery || agenticSearchState.status === "error") {
          setAgenticSearchState({
            status: "idle"
          });
        }
      }
    };
    $[98] = agenticSearchState.query;
    $[99] = agenticSearchState.status;
    $[100] = searchQuery;
    $[101] = t36;
  } else {
    t36 = $[101];
  }
  let t37;
  if ($[102] !== agenticSearchState || $[103] !== searchQuery) {
    t37 = [searchQuery, agenticSearchState];
    $[102] = agenticSearchState;
    $[103] = searchQuery;
    $[104] = t37;
  } else {
    t37 = $[104];
  }
  react_default.useEffect(t36, t37);
  let t38;
  let t39;
  if ($[105] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t38 = () => () => {
      agenticSearchAbortRef.current?.abort();
    };
    t39 = [];
    $[105] = t38;
    $[106] = t39;
  } else {
    t38 = $[105];
    t39 = $[106];
  }
  react_default.useEffect(t38, t39);
  const prevAgenticStatusRef = react_default.useRef(agenticSearchState.status);
  let t40;
  if ($[107] !== agenticSearchState.status || $[108] !== displayedLogs[0] || $[109] !== displayedLogs.length || $[110] !== treeNodes) {
    t40 = () => {
      const prevStatus = prevAgenticStatusRef.current;
      prevAgenticStatusRef.current = agenticSearchState.status;
      if (prevStatus === "searching" && agenticSearchState.status === "results") {
        if (isResumeWithRenameEnabled && treeNodes.length > 0) {
          setFocusedNode(treeNodes[0]);
        } else {
          if (!isResumeWithRenameEnabled && displayedLogs.length > 0) {
            const firstLog = displayedLogs[0];
            setFocusedNode({
              id: "0",
              value: {
                log: firstLog,
                indexInFiltered: 0
              },
              label: ""
            });
          }
        }
      }
    };
    $[107] = agenticSearchState.status;
    $[108] = displayedLogs[0];
    $[109] = displayedLogs.length;
    $[110] = treeNodes;
    $[111] = t40;
  } else {
    t40 = $[111];
  }
  let t41;
  if ($[112] !== agenticSearchState.status || $[113] !== displayedLogs || $[114] !== treeNodes) {
    t41 = [agenticSearchState.status, isResumeWithRenameEnabled, treeNodes, displayedLogs];
    $[112] = agenticSearchState.status;
    $[113] = displayedLogs;
    $[114] = treeNodes;
    $[115] = t41;
  } else {
    t41 = $[115];
  }
  react_default.useEffect(t40, t41);
  let t42;
  if ($[116] !== displayedLogs) {
    t42 = (value) => {
      const index_1 = parseInt(value, 10);
      const log_11 = displayedLogs[index_1];
      if (!log_11 || prevFocusedIdRef.current === index_1.toString()) {
        return;
      }
      prevFocusedIdRef.current = index_1.toString();
      setFocusedNode({
        id: index_1.toString(),
        value: {
          log: log_11,
          indexInFiltered: index_1
        },
        label: ""
      });
      setFocusedIndex(index_1 + 1);
    };
    $[116] = displayedLogs;
    $[117] = t42;
  } else {
    t42 = $[117];
  }
  const handleFlatOptionsSelectFocus = t42;
  let t43;
  if ($[118] !== displayedLogs) {
    t43 = (node) => {
      setFocusedNode(node);
      const index_2 = displayedLogs.findIndex((log_12) => getSessionIdFromLog(log_12) === getSessionIdFromLog(node.value.log));
      if (index_2 >= 0) {
        setFocusedIndex(index_2 + 1);
      }
    };
    $[118] = displayedLogs;
    $[119] = t43;
  } else {
    t43 = $[119];
  }
  const handleTreeSelectFocus = t43;
  let t44;
  if ($[120] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t44 = () => {
      agenticSearchAbortRef.current?.abort();
      setAgenticSearchState({
        status: "idle"
      });
      logEvent("tengu_agentic_search_cancelled", {});
    };
    $[120] = t44;
  } else {
    t44 = $[120];
  }
  const t45 = viewMode !== "preview" && agenticSearchState.status === "searching";
  let t46;
  if ($[121] !== t45) {
    t46 = {
      context: "Confirmation",
      isActive: t45
    };
    $[121] = t45;
    $[122] = t46;
  } else {
    t46 = $[122];
  }
  useKeybinding("confirm:no", t44, t46);
  let t47;
  if ($[123] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t47 = () => {
      setViewMode("list");
      setRenameValue("");
    };
    $[123] = t47;
  } else {
    t47 = $[123];
  }
  const t48 = viewMode === "rename" && agenticSearchState.status !== "searching";
  let t49;
  if ($[124] !== t48) {
    t49 = {
      context: "Settings",
      isActive: t48
    };
    $[124] = t48;
    $[125] = t49;
  } else {
    t49 = $[125];
  }
  useKeybinding("confirm:no", t47, t49);
  let t50;
  if ($[126] !== onCancel || $[127] !== setSearchQuery) {
    t50 = () => {
      setSearchQuery("");
      setIsAgenticSearchOptionFocused(false);
      onCancel?.();
    };
    $[126] = onCancel;
    $[127] = setSearchQuery;
    $[128] = t50;
  } else {
    t50 = $[128];
  }
  const t51 = viewMode !== "preview" && viewMode !== "rename" && viewMode !== "search" && isAgenticSearchOptionFocused && agenticSearchState.status !== "searching";
  let t52;
  if ($[129] !== t51) {
    t52 = {
      context: "Confirmation",
      isActive: t51
    };
    $[129] = t51;
    $[130] = t52;
  } else {
    t52 = $[130];
  }
  useKeybinding("confirm:no", t50, t52);
  let t53;
  if ($[131] !== agenticSearchState.status || $[132] !== branchFilterEnabled || $[133] !== focusedLog || $[134] !== handleAgenticSearch || $[135] !== hasMultipleWorktrees || $[136] !== hasTags || $[137] !== isAgenticSearchOptionFocused || $[138] !== onAgenticSearch || $[139] !== onToggleAllProjects || $[140] !== searchQuery || $[141] !== setSearchQuery || $[142] !== showAllProjects || $[143] !== showAllWorktrees || $[144] !== tagTabs || $[145] !== uniqueTags || $[146] !== viewMode) {
    t53 = (input, key) => {
      if (viewMode === "preview") {
        return;
      }
      if (agenticSearchState.status === "searching") {
        return;
      }
      if (viewMode === "rename") {
      } else {
        if (viewMode === "search") {
          if (input.toLowerCase() === "n" && key.ctrl) {
            exitSearchMode();
          } else {
            if (key.return || key.downArrow) {
              if (searchQuery.trim() && onAgenticSearch && false) {
                setIsAgenticSearchOptionFocused(true);
              }
            }
          }
        } else {
          if (isAgenticSearchOptionFocused) {
            if (key.return) {
              handleAgenticSearch();
              setIsAgenticSearchOptionFocused(false);
              return;
            } else {
              if (key.downArrow) {
                setIsAgenticSearchOptionFocused(false);
                return;
              } else {
                if (key.upArrow) {
                  setViewMode("search");
                  setIsAgenticSearchOptionFocused(false);
                  return;
                }
              }
            }
          }
          if (hasTags && key.tab) {
            const offset = key.shift ? -1 : 1;
            setSelectedTagIndex((prev) => {
              const current = prev < tagTabs.length ? prev : 0;
              const newIndex = (current + tagTabs.length + offset) % tagTabs.length;
              const newTab = tagTabs[newIndex];
              logEvent("tengu_session_tag_filter_changed", {
                is_all: newTab === "All",
                tag_count: uniqueTags.length
              });
              return newIndex;
            });
            return;
          }
          const keyIsNotCtrlOrMeta = !key.ctrl && !key.meta;
          const lowerInput = input.toLowerCase();
          if (lowerInput === "a" && key.ctrl && onToggleAllProjects) {
            onToggleAllProjects();
            logEvent("tengu_session_all_projects_toggled", {
              enabled: !showAllProjects
            });
          } else {
            if (lowerInput === "b" && key.ctrl) {
              const newEnabled = !branchFilterEnabled;
              setBranchFilterEnabled(newEnabled);
              logEvent("tengu_session_branch_filter_toggled", {
                enabled: newEnabled
              });
            } else {
              if (lowerInput === "w" && key.ctrl && hasMultipleWorktrees) {
                const newValue = !showAllWorktrees;
                setShowAllWorktrees(newValue);
                logEvent("tengu_session_worktree_filter_toggled", {
                  enabled: newValue
                });
              } else {
                if (lowerInput === "/" && keyIsNotCtrlOrMeta) {
                  setViewMode("search");
                  logEvent("tengu_session_search_toggled", {
                    enabled: true
                  });
                } else {
                  if (lowerInput === "r" && key.ctrl && focusedLog) {
                    setViewMode("rename");
                    setRenameValue("");
                    logEvent("tengu_session_rename_started", {});
                  } else {
                    if (lowerInput === "v" && key.ctrl && focusedLog) {
                      setPreviewLog(focusedLog);
                      setViewMode("preview");
                      logEvent("tengu_session_preview_opened", {
                        messageCount: focusedLog.messageCount
                      });
                    } else {
                      if (focusedLog && keyIsNotCtrlOrMeta && input.length > 0 && !/^\s+$/.test(input)) {
                        setViewMode("search");
                        setSearchQuery(input);
                        logEvent("tengu_session_search_toggled", {
                          enabled: true
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    $[131] = agenticSearchState.status;
    $[132] = branchFilterEnabled;
    $[133] = focusedLog;
    $[134] = handleAgenticSearch;
    $[135] = hasMultipleWorktrees;
    $[136] = hasTags;
    $[137] = isAgenticSearchOptionFocused;
    $[138] = onAgenticSearch;
    $[139] = onToggleAllProjects;
    $[140] = searchQuery;
    $[141] = setSearchQuery;
    $[142] = showAllProjects;
    $[143] = showAllWorktrees;
    $[144] = tagTabs;
    $[145] = uniqueTags;
    $[146] = viewMode;
    $[147] = t53;
  } else {
    t53 = $[147];
  }
  let t54;
  if ($[148] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t54 = {
      isActive: true
    };
    $[148] = t54;
  } else {
    t54 = $[148];
  }
  use_input_default(t53, t54);
  let filterIndicators;
  if ($[149] !== branchFilterEnabled || $[150] !== currentBranch || $[151] !== hasMultipleWorktrees || $[152] !== showAllWorktrees) {
    filterIndicators = [];
    if (branchFilterEnabled && currentBranch) {
      filterIndicators.push(currentBranch);
    }
    if (hasMultipleWorktrees && !showAllWorktrees) {
      filterIndicators.push("current worktree");
    }
    $[149] = branchFilterEnabled;
    $[150] = currentBranch;
    $[151] = hasMultipleWorktrees;
    $[152] = showAllWorktrees;
    $[153] = filterIndicators;
  } else {
    filterIndicators = $[153];
  }
  const showAdditionalFilterLine = filterIndicators.length > 0 && viewMode !== "search";
  const headerLines = 8 + (showAdditionalFilterLine ? 1 : 0) + tagTabsLines;
  const visibleCount = Math.max(1, Math.floor((maxHeight - headerLines - 2) / 3));
  let t55;
  let t56;
  if ($[154] !== displayedLogs.length || $[155] !== focusedIndex || $[156] !== onLoadMore || $[157] !== visibleCount) {
    t55 = () => {
      if (!onLoadMore) {
        return;
      }
      const buffer = visibleCount * 2;
      if (focusedIndex + buffer >= displayedLogs.length) {
        onLoadMore(visibleCount * 3);
      }
    };
    t56 = [focusedIndex, visibleCount, displayedLogs.length, onLoadMore];
    $[154] = displayedLogs.length;
    $[155] = focusedIndex;
    $[156] = onLoadMore;
    $[157] = visibleCount;
    $[158] = t55;
    $[159] = t56;
  } else {
    t55 = $[158];
    t56 = $[159];
  }
  react_default.useEffect(t55, t56);
  if (logs.length === 0) {
    return null;
  }
  if (viewMode === "preview" && previewLog && isResumeWithRenameEnabled) {
    let t572;
    if ($[160] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t572 = () => {
        setViewMode("list");
        setPreviewLog(null);
      };
      $[160] = t572;
    } else {
      t572 = $[160];
    }
    let t582;
    if ($[161] !== onSelect || $[162] !== previewLog) {
      t582 = /* @__PURE__ */ react_default.createElement(SessionPreview, { log: previewLog, onExit: t572, onSelect });
      $[161] = onSelect;
      $[162] = previewLog;
      $[163] = t582;
    } else {
      t582 = $[163];
    }
    return t582;
  }
  const t57 = maxHeight - 1;
  let t58;
  if ($[164] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t58 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(Divider, { color: "suggestion" }));
    $[164] = t58;
  } else {
    t58 = $[164];
  }
  let t59;
  if ($[165] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t59 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
    $[165] = t59;
  } else {
    t59 = $[165];
  }
  let t60;
  if ($[166] !== columns || $[167] !== displayedLogs.length || $[168] !== effectiveTagIndex || $[169] !== focusedIndex || $[170] !== hasTags || $[171] !== showAllProjects || $[172] !== tagTabs || $[173] !== viewMode || $[174] !== visibleCount) {
    t60 = hasTags ? /* @__PURE__ */ react_default.createElement(TagTabs, { tabs: tagTabs, selectedIndex: effectiveTagIndex, availableWidth: columns, showAllProjects }) : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "suggestion" }, "Resume Session", viewMode === "list" && displayedLogs.length > visibleCount && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ", "(", focusedIndex, " of ", displayedLogs.length, ")")));
    $[166] = columns;
    $[167] = displayedLogs.length;
    $[168] = effectiveTagIndex;
    $[169] = focusedIndex;
    $[170] = hasTags;
    $[171] = showAllProjects;
    $[172] = tagTabs;
    $[173] = viewMode;
    $[174] = visibleCount;
    $[175] = t60;
  } else {
    t60 = $[175];
  }
  const t61 = viewMode === "search";
  let t62;
  if ($[176] !== isTerminalFocused || $[177] !== searchCursorOffset || $[178] !== searchQuery || $[179] !== t61) {
    t62 = /* @__PURE__ */ react_default.createElement(SearchBox, { query: searchQuery, isFocused: t61, isTerminalFocused, cursorOffset: searchCursorOffset });
    $[176] = isTerminalFocused;
    $[177] = searchCursorOffset;
    $[178] = searchQuery;
    $[179] = t61;
    $[180] = t62;
  } else {
    t62 = $[180];
  }
  let t63;
  if ($[181] !== filterIndicators || $[182] !== viewMode) {
    t63 = filterIndicators.length > 0 && viewMode !== "search" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0, paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, filterIndicators)));
    $[181] = filterIndicators;
    $[182] = viewMode;
    $[183] = t63;
  } else {
    t63 = $[183];
  }
  let t64;
  if ($[184] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t64 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
    $[184] = t64;
  } else {
    t64 = $[184];
  }
  let t65;
  if ($[185] !== agenticSearchState.status) {
    t65 = agenticSearchState.status === "searching" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1, flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Searching\u2026"));
    $[185] = agenticSearchState.status;
    $[186] = t65;
  } else {
    t65 = $[186];
  }
  let t66;
  if ($[187] !== agenticSearchState.results || $[188] !== agenticSearchState.status) {
    t66 = agenticSearchState.status === "results" && agenticSearchState.results.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1, marginBottom: 1, flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "Claude found these results:"));
    $[187] = agenticSearchState.results;
    $[188] = agenticSearchState.status;
    $[189] = t66;
  } else {
    t66 = $[189];
  }
  let t67;
  if ($[190] !== agenticSearchState.results || $[191] !== agenticSearchState.status || $[192] !== filteredLogs) {
    t67 = agenticSearchState.status === "results" && agenticSearchState.results.length === 0 && filteredLogs.length === 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1, marginBottom: 1, flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "No matching sessions found."));
    $[190] = agenticSearchState.results;
    $[191] = agenticSearchState.status;
    $[192] = filteredLogs;
    $[193] = t67;
  } else {
    t67 = $[193];
  }
  let t68;
  if ($[194] !== agenticSearchState.status || $[195] !== filteredLogs) {
    t68 = agenticSearchState.status === "error" && filteredLogs.length === 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1, marginBottom: 1, flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "No matching sessions found."));
    $[194] = agenticSearchState.status;
    $[195] = filteredLogs;
    $[196] = t68;
  } else {
    t68 = $[196];
  }
  let t69;
  if ($[197] !== agenticSearchState.status || $[198] !== isAgenticSearchOptionFocused || $[199] !== onAgenticSearch || $[200] !== searchQuery) {
    t69 = Boolean(searchQuery.trim()) && onAgenticSearch && false;
    $[197] = agenticSearchState.status;
    $[198] = isAgenticSearchOptionFocused;
    $[199] = onAgenticSearch;
    $[200] = searchQuery;
    $[201] = t69;
  } else {
    t69 = $[201];
  }
  let t70;
  if ($[202] !== agenticSearchState.status || $[203] !== branchFilterEnabled || $[204] !== columns || $[205] !== displayedLogs || $[206] !== expandedGroupSessionIds || $[207] !== flatOptions || $[208] !== focusedLog || $[209] !== focusedNode?.id || $[210] !== handleFlatOptionsSelectFocus || $[211] !== handleRenameSubmit || $[212] !== handleTreeSelectFocus || $[213] !== isAgenticSearchOptionFocused || $[214] !== onCancel || $[215] !== onSelect || $[216] !== renameCursorOffset || $[217] !== renameValue || $[218] !== treeNodes || $[219] !== viewMode || $[220] !== visibleCount) {
    t70 = agenticSearchState.status === "searching" ? null : viewMode === "rename" && focusedLog ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Rename session:"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingTop: 1 }, /* @__PURE__ */ react_default.createElement(TextInput, { value: renameValue, onChange: setRenameValue, onSubmit: handleRenameSubmit, placeholder: getLogDisplayTitle(focusedLog, "Enter new session name"), columns, cursorOffset: renameCursorOffset, onChangeCursorOffset: setRenameCursorOffset, showCursor: true }))) : isResumeWithRenameEnabled ? /* @__PURE__ */ react_default.createElement(TreeSelect, { nodes: treeNodes, onSelect: (node_0) => {
      onSelect(node_0.value.log);
    }, onFocus: handleTreeSelectFocus, onCancel, focusNodeId: focusedNode?.id, visibleOptionCount: visibleCount, layout: "expanded", isDisabled: viewMode === "search" || isAgenticSearchOptionFocused, hideIndexes: false, isNodeExpanded: (nodeId) => {
      if (viewMode === "search" || branchFilterEnabled) {
        return true;
      }
      const sessionId_2 = typeof nodeId === "string" && nodeId.startsWith("group:") ? nodeId.substring(6) : null;
      return sessionId_2 ? expandedGroupSessionIds.has(sessionId_2) : false;
    }, onExpand: (nodeId_0) => {
      const sessionId_3 = typeof nodeId_0 === "string" && nodeId_0.startsWith("group:") ? nodeId_0.substring(6) : null;
      if (sessionId_3) {
        setExpandedGroupSessionIds((prev_0) => new Set(prev_0).add(sessionId_3));
        logEvent("tengu_session_group_expanded", {});
      }
    }, onCollapse: (nodeId_1) => {
      const sessionId_4 = typeof nodeId_1 === "string" && nodeId_1.startsWith("group:") ? nodeId_1.substring(6) : null;
      if (sessionId_4) {
        setExpandedGroupSessionIds((prev_1) => {
          const newSet = new Set(prev_1);
          newSet.delete(sessionId_4);
          return newSet;
        });
      }
    }, onUpFromFirstItem: enterSearchMode }) : /* @__PURE__ */ react_default.createElement(Select, { options: flatOptions, onChange: (value_0) => {
      const itemIndex = parseInt(value_0, 10);
      const log_13 = displayedLogs[itemIndex];
      if (log_13) {
        onSelect(log_13);
      }
    }, visibleOptionCount: visibleCount, onCancel, onFocus: handleFlatOptionsSelectFocus, defaultFocusValue: focusedNode?.id.toString(), layout: "expanded", isDisabled: viewMode === "search" || isAgenticSearchOptionFocused, onUpFromFirstItem: enterSearchMode });
    $[202] = agenticSearchState.status;
    $[203] = branchFilterEnabled;
    $[204] = columns;
    $[205] = displayedLogs;
    $[206] = expandedGroupSessionIds;
    $[207] = flatOptions;
    $[208] = focusedLog;
    $[209] = focusedNode?.id;
    $[210] = handleFlatOptionsSelectFocus;
    $[211] = handleRenameSubmit;
    $[212] = handleTreeSelectFocus;
    $[213] = isAgenticSearchOptionFocused;
    $[214] = onCancel;
    $[215] = onSelect;
    $[216] = renameCursorOffset;
    $[217] = renameValue;
    $[218] = treeNodes;
    $[219] = viewMode;
    $[220] = visibleCount;
    $[221] = t70;
  } else {
    t70 = $[221];
  }
  let t71;
  if ($[222] !== agenticSearchState.status || $[223] !== currentBranch || $[224] !== exitState.keyName || $[225] !== exitState.pending || $[226] !== getExpandCollapseHint || $[227] !== hasMultipleWorktrees || $[228] !== isAgenticSearchOptionFocused || $[229] !== isSearching || $[230] !== onToggleAllProjects || $[231] !== showAllProjects || $[232] !== showAllWorktrees || $[233] !== viewMode) {
    t71 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press ", exitState.keyName, " again to exit") : viewMode === "rename" ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "save" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))) : agenticSearchState.status === "searching" ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Searching with Claude\u2026"), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))) : isAgenticSearchOptionFocused ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "search" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2193", action: "skip" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))) : viewMode === "search" ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, isSearching && false ? "Searching\u2026" : "Type to Search"), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "clear" }))) : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, onToggleAllProjects && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Ctrl+A", action: `show ${showAllProjects ? "current dir" : "all projects"}` }), currentBranch && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Ctrl+B", action: "toggle branch" }), hasMultipleWorktrees && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Ctrl+W", action: `show ${showAllWorktrees ? "current worktree" : "all worktrees"}` }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Ctrl+V", action: "preview" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Ctrl+R", action: "rename" }), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Type to search"), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }), getExpandCollapseHint() && /* @__PURE__ */ react_default.createElement(ThemedText, null, getExpandCollapseHint()))));
    $[222] = agenticSearchState.status;
    $[223] = currentBranch;
    $[224] = exitState.keyName;
    $[225] = exitState.pending;
    $[226] = getExpandCollapseHint;
    $[227] = hasMultipleWorktrees;
    $[228] = isAgenticSearchOptionFocused;
    $[229] = isSearching;
    $[230] = onToggleAllProjects;
    $[231] = showAllProjects;
    $[232] = showAllWorktrees;
    $[233] = viewMode;
    $[234] = t71;
  } else {
    t71 = $[234];
  }
  let t72;
  if ($[235] !== t57 || $[236] !== t60 || $[237] !== t62 || $[238] !== t63 || $[239] !== t65 || $[240] !== t66 || $[241] !== t67 || $[242] !== t68 || $[243] !== t69 || $[244] !== t70 || $[245] !== t71) {
    t72 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", height: t57 }, t58, t59, t60, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71);
    $[235] = t57;
    $[236] = t60;
    $[237] = t62;
    $[238] = t63;
    $[239] = t65;
    $[240] = t66;
    $[241] = t67;
    $[242] = t68;
    $[243] = t69;
    $[244] = t70;
    $[245] = t71;
    $[246] = t72;
  } else {
    t72 = $[246];
  }
  return t72;
}
function _temp7(r_0) {
  return r_0.log;
}
function _temp6(log_6) {
  return log_6.messages[0]?.uuid;
}
function _temp5(fuseIndex_0, debouncedDeepSearchQuery_0, setDeepSearchResults_0, setIsSearching_0) {
  const results = fuseIndex_0.search(debouncedDeepSearchQuery_0);
  results.sort(_temp3);
  setDeepSearchResults_0({
    results: results.map(_temp4),
    query: debouncedDeepSearchQuery_0
  });
  setIsSearching_0(false);
}
function _temp4(r) {
  return {
    log: r.item.log,
    score: r.score,
    searchableText: r.item.searchableText
  };
}
function _temp3(a, b) {
  const aTime = new Date(a.item.log.modified).getTime();
  const bTime = new Date(b.item.log.modified).getTime();
  const timeDiff = bTime - aTime;
  if (Math.abs(timeDiff) > DATE_TIE_THRESHOLD_MS) {
    return timeDiff;
  }
  return (a.score ?? 1) - (b.score ?? 1);
}
function _temp22(log_1) {
  const currentSessionId = getSessionId();
  const logSessionId = getSessionIdFromLog(log_1);
  const isCurrentSession = currentSessionId && logSessionId === currentSessionId;
  if (isCurrentSession) {
    return true;
  }
  if (log_1.customTitle) {
    return true;
  }
  const fromMessages = getFirstMeaningfulUserMessageTextContent(log_1.messages);
  if (fromMessages) {
    return true;
  }
  if (log_1.firstPrompt || log_1.customTitle) {
    return true;
  }
  return false;
}
function _temp8(log) {
  return [log, buildSearchableText(log)];
}
function extractSearchableText(message) {
  if (message.type !== "user" && message.type !== "assistant") {
    return "";
  }
  const content = "message" in message ? message.message?.content : void 0;
  if (!content) return "";
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((block) => {
      if (typeof block === "string") return block;
      if ("text" in block && typeof block.text === "string") return block.text;
      return "";
    }).filter(Boolean).join(" ");
  }
  return "";
}
function buildSearchableText(log) {
  const searchableMessages = log.messages.length <= DEEP_SEARCH_MAX_MESSAGES ? log.messages : [...log.messages.slice(0, DEEP_SEARCH_CROP_SIZE), ...log.messages.slice(-DEEP_SEARCH_CROP_SIZE)];
  const messageText = searchableMessages.map(extractSearchableText).filter(Boolean).join(" ");
  const metadata = [log.customTitle, log.summary, log.firstPrompt, log.gitBranch, log.tag, log.prNumber ? `PR #${log.prNumber}` : void 0, log.prRepository].filter(Boolean).join(" ");
  const fullText = `${metadata} ${messageText}`.trim();
  return fullText.length > DEEP_SEARCH_MAX_TEXT_LENGTH ? fullText.slice(0, DEEP_SEARCH_MAX_TEXT_LENGTH) : fullText;
}
function groupLogsBySessionId(filteredLogs) {
  const groups = /* @__PURE__ */ new Map();
  for (const log of filteredLogs) {
    const sessionId = getSessionIdFromLog(log);
    if (sessionId) {
      const existing = groups.get(sessionId);
      if (existing) {
        existing.push(log);
      } else {
        groups.set(sessionId, [log]);
      }
    }
  }
  groups.forEach((logs) => logs.sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()));
  return groups;
}
function getUniqueTags(logs) {
  const tags = /* @__PURE__ */ new Set();
  for (const log of logs) {
    if (log.tag) {
      tags.add(log.tag);
    }
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
var PARENT_PREFIX_WIDTH, CHILD_PREFIX_WIDTH, DEEP_SEARCH_MAX_MESSAGES, DEEP_SEARCH_CROP_SIZE, DEEP_SEARCH_MAX_TEXT_LENGTH, DATE_TIE_THRESHOLD_MS, SNIPPET_CONTEXT_CHARS;
var init_LogSelector = __esm({
  "src/components/LogSelector.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_state();
    init_useExitOnCtrlCDWithKeybindings();
    init_useSearchInput();
    init_useTerminalSize();
    init_colorize();
    init_ink();
    init_useKeybinding();
    init_analytics();
    init_format();
    init_getWorktreePaths();
    init_git();
    init_log();
    init_sessionStorage();
    init_theme();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_Divider();
    init_KeyboardShortcutHint();
    init_SearchBox();
    init_SessionPreview();
    init_Spinner();
    init_TagTabs();
    init_TextInput();
    init_TreeSelect();
    PARENT_PREFIX_WIDTH = 2;
    CHILD_PREFIX_WIDTH = 4;
    DEEP_SEARCH_MAX_MESSAGES = 2e3;
    DEEP_SEARCH_CROP_SIZE = 1e3;
    DEEP_SEARCH_MAX_TEXT_LENGTH = 5e4;
    DATE_TIE_THRESHOLD_MS = 60 * 1e3;
    SNIPPET_CONTEXT_CHARS = 50;
  }
});

// src/utils/agenticSessionSearch.ts
function extractMessageText(message) {
  if (message.type !== "user" && message.type !== "assistant") {
    return "";
  }
  const content = "message" in message ? message.message?.content : void 0;
  if (!content) return "";
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((block) => {
      if (typeof block === "string") return block;
      if ("text" in block && typeof block.text === "string") return block.text;
      return "";
    }).filter(Boolean).join(" ");
  }
  return "";
}
function extractTranscript(messages) {
  if (messages.length === 0) return "";
  const messagesToScan = messages.length <= MAX_MESSAGES_TO_SCAN ? messages : [
    ...messages.slice(0, MAX_MESSAGES_TO_SCAN / 2),
    ...messages.slice(-MAX_MESSAGES_TO_SCAN / 2)
  ];
  const text = messagesToScan.map(extractMessageText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  return text.length > MAX_TRANSCRIPT_CHARS ? text.slice(0, MAX_TRANSCRIPT_CHARS) + "\u2026" : text;
}
function logContainsQuery(log, queryLower) {
  const title = getLogDisplayTitle(log).toLowerCase();
  if (title.includes(queryLower)) return true;
  if (log.customTitle?.toLowerCase().includes(queryLower)) return true;
  if (log.tag?.toLowerCase().includes(queryLower)) return true;
  if (log.gitBranch?.toLowerCase().includes(queryLower)) return true;
  if (log.summary?.toLowerCase().includes(queryLower)) return true;
  if (log.firstPrompt?.toLowerCase().includes(queryLower)) return true;
  if (log.messages && log.messages.length > 0) {
    const transcript = extractTranscript(log.messages).toLowerCase();
    if (transcript.includes(queryLower)) return true;
  }
  return false;
}
async function agenticSessionSearch(query, logs, signal) {
  if (!query.trim() || logs.length === 0) {
    return [];
  }
  const queryLower = query.toLowerCase();
  const matchingLogs = logs.filter((log) => logContainsQuery(log, queryLower));
  let logsToSearch;
  if (matchingLogs.length >= MAX_SESSIONS_TO_SEARCH) {
    logsToSearch = matchingLogs.slice(0, MAX_SESSIONS_TO_SEARCH);
  } else {
    const nonMatchingLogs = logs.filter(
      (log) => !logContainsQuery(log, queryLower)
    );
    const remainingSlots = MAX_SESSIONS_TO_SEARCH - matchingLogs.length;
    logsToSearch = [
      ...matchingLogs,
      ...nonMatchingLogs.slice(0, remainingSlots)
    ];
  }
  logForDebugging(
    `Agentic search: ${logsToSearch.length}/${logs.length} logs, query="${query}", matching: ${matchingLogs.length}, with messages: ${count(logsToSearch, (l) => l.messages?.length > 0)}`
  );
  const logsWithTranscriptsPromises = logsToSearch.map(async (log) => {
    if (isLiteLog(log)) {
      try {
        return await loadFullLog(log);
      } catch (error) {
        logError(error);
        return log;
      }
    }
    return log;
  });
  const logsWithTranscripts = await Promise.all(logsWithTranscriptsPromises);
  logForDebugging(
    `Agentic search: loaded ${count(logsWithTranscripts, (l) => l.messages?.length > 0)}/${logsToSearch.length} logs with transcripts`
  );
  const sessionList = logsWithTranscripts.map((log, index) => {
    const parts = [`${index}:`];
    const displayTitle = getLogDisplayTitle(log);
    parts.push(displayTitle);
    if (log.customTitle && log.customTitle !== displayTitle) {
      parts.push(`[custom title: ${log.customTitle}]`);
    }
    if (log.tag) {
      parts.push(`[tag: ${log.tag}]`);
    }
    if (log.gitBranch) {
      parts.push(`[branch: ${log.gitBranch}]`);
    }
    if (log.summary) {
      parts.push(`- Summary: ${log.summary}`);
    }
    if (log.firstPrompt && log.firstPrompt !== "No prompt") {
      parts.push(`- First message: ${log.firstPrompt.slice(0, 300)}`);
    }
    if (log.messages && log.messages.length > 0) {
      const transcript = extractTranscript(log.messages);
      if (transcript) {
        parts.push(`- Transcript: ${transcript}`);
      }
    }
    return parts.join(" ");
  }).join("\n");
  const userMessage = `Sessions:
${sessionList}

Search query: "${query}"

Find the sessions that are most relevant to this query.`;
  logForDebugging(
    `Agentic search prompt (first 500 chars): ${userMessage.slice(0, 500)}...`
  );
  try {
    const model = getSmallFastModel();
    logForDebugging(`Agentic search using model: ${model}`);
    const response = await sideQuery({
      model,
      system: SESSION_SEARCH_SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
      signal,
      querySource: "session_search"
    });
    const textContent = response.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      logForDebugging("No text content in agentic search response");
      return [];
    }
    logForDebugging(`Agentic search response: ${textContent.text}`);
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      logForDebugging("Could not find JSON in agentic search response");
      return [];
    }
    const result = jsonParse(jsonMatch[0]);
    const relevantIndices = result.relevant_indices || [];
    const relevantLogs = relevantIndices.filter((index) => index >= 0 && index < logsWithTranscripts.length).map((index) => logsWithTranscripts[index]);
    logForDebugging(
      `Agentic search found ${relevantLogs.length} relevant sessions`
    );
    return relevantLogs;
  } catch (error) {
    logError(error);
    logForDebugging(`Agentic search error: ${error}`);
    return [];
  }
}
var MAX_TRANSCRIPT_CHARS, MAX_MESSAGES_TO_SCAN, MAX_SESSIONS_TO_SEARCH, SESSION_SEARCH_SYSTEM_PROMPT;
var init_agenticSessionSearch = __esm({
  "src/utils/agenticSessionSearch.ts"() {
    init_array();
    init_debug();
    init_log();
    init_model();
    init_sessionStorage();
    init_sideQuery();
    init_slowOperations();
    MAX_TRANSCRIPT_CHARS = 2e3;
    MAX_MESSAGES_TO_SCAN = 100;
    MAX_SESSIONS_TO_SEARCH = 100;
    SESSION_SEARCH_SYSTEM_PROMPT = `Your goal is to find relevant sessions based on a user's search query.

You will be given a list of sessions with their metadata and a search query. Identify which sessions are most relevant to the query.

Each session may include:
- Title (display name or custom title)
- Tag (user-assigned category, shown as [tag: name] - users tag sessions with /tag command to categorize them)
- Branch (git branch name, shown as [branch: name])
- Summary (AI-generated summary)
- First message (beginning of the conversation)
- Transcript (excerpt of conversation content)

IMPORTANT: Tags are user-assigned labels that indicate the session's topic or category. If the query matches a tag exactly or partially, those sessions should be highly prioritized.

For each session, consider (in order of priority):
1. Exact tag matches (highest priority - user explicitly categorized this session)
2. Partial tag matches or tag-related terms
3. Title matches (custom titles or first message content)
4. Branch name matches
5. Summary and transcript content matches
6. Semantic similarity and related concepts

CRITICAL: Be VERY inclusive in your matching. Include sessions that:
- Contain the query term anywhere in any field
- Are semantically related to the query (e.g., "testing" matches sessions about "tests", "unit tests", "QA", etc.)
- Discuss topics that could be related to the query
- Have transcripts that mention the concept even in passing

When in doubt, INCLUDE the session. It's better to return too many results than too few. The user can easily scan through results, but missing relevant sessions is frustrating.

Return sessions ordered by relevance (most relevant first). If truly no sessions have ANY connection to the query, return an empty array - but this should be rare.

Respond with ONLY the JSON object, no markdown formatting:
{"relevant_indices": [2, 5, 0]}`;
  }
});

// src/utils/crossProjectResume.ts
import { sep } from "path";
function checkCrossProjectResume(log, showAllProjects, worktreePaths) {
  const currentCwd = getOriginalCwd();
  if (!showAllProjects || !log.projectPath || log.projectPath === currentCwd) {
    return { isCrossProject: false };
  }
  if (process.env.USER_TYPE !== "ant") {
    const sessionId2 = getSessionIdFromLog(log);
    const command2 = `cd ${quote([log.projectPath])} && blaude --resume ${sessionId2}`;
    return {
      isCrossProject: true,
      isSameRepoWorktree: false,
      command: command2,
      projectPath: log.projectPath
    };
  }
  const isSameRepo = worktreePaths.some(
    (wt) => log.projectPath === wt || log.projectPath.startsWith(wt + sep)
  );
  if (isSameRepo) {
    return {
      isCrossProject: true,
      isSameRepoWorktree: true,
      projectPath: log.projectPath
    };
  }
  const sessionId = getSessionIdFromLog(log);
  const command = `cd ${quote([log.projectPath])} && blaude --resume ${sessionId}`;
  return {
    isCrossProject: true,
    isSameRepoWorktree: false,
    command,
    projectPath: log.projectPath
  };
}
var init_crossProjectResume = __esm({
  "src/utils/crossProjectResume.ts"() {
    init_state();
    init_shellQuote();
    init_sessionStorage();
  }
});

export {
  LogSelector,
  init_LogSelector,
  agenticSessionSearch,
  init_agenticSessionSearch,
  checkCrossProjectResume,
  init_crossProjectResume
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2Vzc2lvblByZXZpZXcudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1RhZ1RhYnMudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3VpL1RyZWVTZWxlY3QudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ1NlbGVjdG9yLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvYWdlbnRpY1Nlc3Npb25TZWFyY2gudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2Nyb3NzUHJvamVjdFJlc3VtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBVVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IGdldEFsbEJhc2VUb29scyB9IGZyb20gJy4uL3Rvb2xzLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24gfSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmVUaW1lQWdvIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2Vzc2lvbklkRnJvbUxvZyxcbiAgaXNMaXRlTG9nLFxuICBsb2FkRnVsbExvZyxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9Mb2FkaW5nU3RhdGUuanMnXG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vTWVzc2FnZXMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxvZzogTG9nT3B0aW9uXG4gIG9uRXhpdDogKCkgPT4gdm9pZFxuICBvblNlbGVjdDogKGxvZzogTG9nT3B0aW9uKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXNzaW9uUHJldmlldyh7XG4gIGxvZyxcbiAgb25FeGl0LFxuICBvblNlbGVjdCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gZnVsbExvZyBob2xkcyB0aGUgY29tcGxldGUgbG9nIHdpdGggbWVzc2FnZXMgbG9hZGVkLlxuICAvLyBUaGUgaW5wdXQgYGxvZ2AgbWF5IGJlIGEgXCJsaXRlIGxvZ1wiIChlbXB0eSBtZXNzYWdlcyBhcnJheSksXG4gIC8vIHNvIHdlIGxvYWQgdGhlIGZ1bGwgbWVzc2FnZXMgb24gbW91bnQgYW5kIHN0b3JlIHRoZW0gaGVyZS5cbiAgY29uc3QgW2Z1bGxMb2csIHNldEZ1bGxMb2ddID0gUmVhY3QudXNlU3RhdGU8TG9nT3B0aW9uIHwgbnVsbD4obnVsbClcblxuICAvLyBMb2FkIGZ1bGwgbWVzc2FnZXMgaWYgdGhpcyBpcyBhIGxpdGUgbG9nXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RnVsbExvZyhudWxsKVxuICAgIGlmIChpc0xpdGVMb2cobG9nKSkge1xuICAgICAgdm9pZCBsb2FkRnVsbExvZyhsb2cpLnRoZW4oc2V0RnVsbExvZylcbiAgICB9XG4gIH0sIFtsb2ddKVxuXG4gIGNvbnN0IGlzTG9hZGluZyA9IGlzTGl0ZUxvZyhsb2cpICYmIGZ1bGxMb2cgPT09IG51bGxcbiAgY29uc3QgZGlzcGxheUxvZyA9IGZ1bGxMb2cgPz8gbG9nXG4gIGNvbnN0IGNvbnZlcnNhdGlvbklkID0gZ2V0U2Vzc2lvbklkRnJvbUxvZyhkaXNwbGF5TG9nKSB8fCAoJycgYXMgVVVJRClcblxuICAvLyBHZXQgYWxsIGJhc2UgdG9vbHMgZm9yIHByZXZpZXcgKG5vIHBlcm1pc3Npb25zIG5lZWRlZCBmb3IgcmVhZC1vbmx5IHZpZXcpXG4gIGNvbnN0IHRvb2xzID0gZ2V0QWxsQmFzZVRvb2xzKClcblxuICAvLyBIYW5kbGUga2V5Ym9hcmQgaW5wdXQgdmlhIGtleWJpbmRpbmdzXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBvbkV4aXQsIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25TZWxlY3QoZnVsbExvZyA/PyBsb2cpXG4gIH0sIFtvblNlbGVjdCwgZnVsbExvZywgbG9nXSlcblxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOnllcycsIGhhbmRsZVNlbGVjdCwgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9KVxuXG4gIC8vIFNob3cgbG9hZGluZyBzdGF0ZSB3aGlsZSBmZXRjaGluZyBmdWxsIGxvZ1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmc9ezF9PlxuICAgICAgICA8TG9hZGluZ1N0YXRlIG1lc3NhZ2U9XCJMb2FkaW5nIHNlc3Npb27igKZcIiAvPlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxNZXNzYWdlc1xuICAgICAgICBtZXNzYWdlcz17ZGlzcGxheUxvZy5tZXNzYWdlc31cbiAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICBjb21tYW5kcz17W119XG4gICAgICAgIHZlcmJvc2U9e3RydWV9XG4gICAgICAgIHRvb2xKU1g9e251bGx9XG4gICAgICAgIHRvb2xVc2VDb25maXJtUXVldWU9e1tdfVxuICAgICAgICBpblByb2dyZXNzVG9vbFVzZUlEcz17bmV3IFNldCgpfVxuICAgICAgICBpc01lc3NhZ2VTZWxlY3RvclZpc2libGU9e2ZhbHNlfVxuICAgICAgICBjb252ZXJzYXRpb25JZD17Y29udmVyc2F0aW9uSWR9XG4gICAgICAgIHNjcmVlbj1cInRyYW5zY3JpcHRcIlxuICAgICAgICBzdHJlYW1pbmdUb29sVXNlcz17W119XG4gICAgICAgIHNob3dBbGxJblRyYW5zY3JpcHQ9e3RydWV9XG4gICAgICAgIGlzTG9hZGluZz17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgYm9yZGVyVG9wRGltQ29sb3JcbiAgICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgICAgYm9yZGVyTGVmdD17ZmFsc2V9XG4gICAgICAgIGJvcmRlclJpZ2h0PXtmYWxzZX1cbiAgICAgICAgYm9yZGVyU3R5bGU9XCJzaW5nbGVcIlxuICAgICAgICBwYWRkaW5nTGVmdD17Mn1cbiAgICAgID5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAge2Zvcm1hdFJlbGF0aXZlVGltZUFnbyhkaXNwbGF5TG9nLm1vZGlmaWVkKX0gwrd7JyAnfVxuICAgICAgICAgIHtkaXNwbGF5TG9nLm1lc3NhZ2VDb3VudH0gbWVzc2FnZXNcbiAgICAgICAgICB7ZGlzcGxheUxvZy5naXRCcmFuY2ggPyBgIMK3ICR7ZGlzcGxheUxvZy5naXRCcmFuY2h9YCA6ICcnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInJlc3VtZVwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdHJ1bmNhdGVUb1dpZHRoIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG4vLyBDb25zdGFudHMgZm9yIHdpZHRoIGNhbGN1bGF0aW9ucyAtIGRlcml2ZWQgZnJvbSBhY3R1YWwgcmVuZGVyZWQgc3RyaW5nc1xuY29uc3QgQUxMX1RBQl9MQUJFTCA9ICdBbGwnXG5jb25zdCBUQUJfUEFERElORyA9IDIgLy8gU3BhY2UgYmVmb3JlIGFuZCBhZnRlciB0YWIgdGV4dDogXCIge3RhYn0gXCJcbmNvbnN0IEhBU0hfUFJFRklYX0xFTkdUSCA9IDEgLy8gXCIjXCIgcHJlZml4IGZvciBub24tQWxsIHRhYnNcbmNvbnN0IExFRlRfQVJST1dfUFJFRklYID0gJ+KGkCAnXG5jb25zdCBSSUdIVF9ISU5UX1dJVEhfQ09VTlRfUFJFRklYID0gJ+KGkidcbmNvbnN0IFJJR0hUX0hJTlRfU1VGRklYID0gJyAodGFiIHRvIGN5Y2xlKSdcbmNvbnN0IFJJR0hUX0hJTlRfTk9fQ09VTlQgPSAnKHRhYiB0byBjeWNsZSknXG5jb25zdCBNQVhfT1ZFUkZMT1dfRElHSVRTID0gMiAvLyBBc3N1bWUgbWF4IDk5IGhpZGRlbiB0YWJzIGZvciB3aWR0aCBjYWxjdWxhdGlvblxuXG4vLyBDb21wdXRlZCB3aWR0aHNcbmNvbnN0IExFRlRfQVJST1dfV0lEVEggPSBMRUZUX0FSUk9XX1BSRUZJWC5sZW5ndGggKyBNQVhfT1ZFUkZMT1dfRElHSVRTICsgMSAvLyBcIuKGkCBOTiBcIiB3aXRoIGdhcFxuY29uc3QgUklHSFRfSElOVF9XSURUSF9XSVRIX0NPVU5UID1cbiAgUklHSFRfSElOVF9XSVRIX0NPVU5UX1BSRUZJWC5sZW5ndGggK1xuICBNQVhfT1ZFUkZMT1dfRElHSVRTICtcbiAgUklHSFRfSElOVF9TVUZGSVgubGVuZ3RoIC8vIFwi4oaSTk4gKHRhYiB0byBjeWNsZSlcIlxuY29uc3QgUklHSFRfSElOVF9XSURUSF9OT19DT1VOVCA9IFJJR0hUX0hJTlRfTk9fQ09VTlQubGVuZ3RoXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhYnM6IHN0cmluZ1tdXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlclxuICBhdmFpbGFibGVXaWR0aDogbnVtYmVyXG4gIHNob3dBbGxQcm9qZWN0cz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGRpc3BsYXkgd2lkdGggb2YgYSB0YWJcbiAqL1xuZnVuY3Rpb24gZ2V0VGFiV2lkdGgodGFiOiBzdHJpbmcsIG1heFdpZHRoPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHRhYiA9PT0gQUxMX1RBQl9MQUJFTCkge1xuICAgIHJldHVybiBBTExfVEFCX0xBQkVMLmxlbmd0aCArIFRBQl9QQURESU5HXG4gIH1cbiAgLy8gRm9yIG5vbi1BbGwgdGFiczogXCIgI3t0YWd9IFwiIGJ1dCB0cnVuY2F0ZSB0YWcgaWYgbmVlZGVkXG4gIGNvbnN0IHRhZ1dpZHRoID0gc3RyaW5nV2lkdGgodGFiKVxuICBjb25zdCBlZmZlY3RpdmVUYWdXaWR0aCA9IG1heFdpZHRoXG4gICAgPyBNYXRoLm1pbih0YWdXaWR0aCwgbWF4V2lkdGggLSBUQUJfUEFERElORyAtIEhBU0hfUFJFRklYX0xFTkdUSClcbiAgICA6IHRhZ1dpZHRoXG4gIHJldHVybiBNYXRoLm1heCgwLCBlZmZlY3RpdmVUYWdXaWR0aCkgKyBUQUJfUEFERElORyArIEhBU0hfUFJFRklYX0xFTkdUSFxufVxuXG4vKipcbiAqIFRydW5jYXRlIGEgdGFnIHRvIGZpdCB3aXRoaW4gbWF4V2lkdGgsIGFjY291bnRpbmcgZm9yIHBhZGRpbmcgYW5kIGhhc2ggcHJlZml4XG4gKi9cbmZ1bmN0aW9uIHRydW5jYXRlVGFnKHRhZzogc3RyaW5nLCBtYXhXaWR0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgLy8gQXZhaWxhYmxlIHNwYWNlIGZvciB0aGUgdGFnIHRleHQgaXRzZWxmOiBtYXhXaWR0aCAtIFwiICNcIiAtIFwiIFwiXG4gIGNvbnN0IGF2YWlsYWJsZUZvclRhZyA9IG1heFdpZHRoIC0gVEFCX1BBRERJTkcgLSBIQVNIX1BSRUZJWF9MRU5HVEhcbiAgaWYgKHN0cmluZ1dpZHRoKHRhZykgPD0gYXZhaWxhYmxlRm9yVGFnKSB7XG4gICAgcmV0dXJuIHRhZ1xuICB9XG4gIGlmIChhdmFpbGFibGVGb3JUYWcgPD0gMSkge1xuICAgIHJldHVybiB0YWcuY2hhckF0KDApXG4gIH1cbiAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aCh0YWcsIGF2YWlsYWJsZUZvclRhZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhZ1RhYnMoe1xuICB0YWJzLFxuICBzZWxlY3RlZEluZGV4LFxuICBhdmFpbGFibGVXaWR0aCxcbiAgc2hvd0FsbFByb2plY3RzID0gZmFsc2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHJlc3VtZUxhYmVsID0gc2hvd0FsbFByb2plY3RzID8gJ1Jlc3VtZSAoQWxsIFByb2plY3RzKScgOiAnUmVzdW1lJ1xuICBjb25zdCByZXN1bWVMYWJlbFdpZHRoID0gcmVzdW1lTGFiZWwubGVuZ3RoICsgMSAvLyArMSBmb3IgZ2FwXG5cbiAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIHdlIGhhdmUgZm9yIHRhYnMgKHVzZSB3b3JzdC1jYXNlIGhpbnQgd2lkdGgpXG4gIGNvbnN0IHJpZ2h0SGludFdpZHRoID0gTWF0aC5tYXgoXG4gICAgUklHSFRfSElOVF9XSURUSF9XSVRIX0NPVU5ULFxuICAgIFJJR0hUX0hJTlRfV0lEVEhfTk9fQ09VTlQsXG4gIClcbiAgY29uc3QgbWF4VGFic1dpZHRoID0gYXZhaWxhYmxlV2lkdGggLSByZXN1bWVMYWJlbFdpZHRoIC0gcmlnaHRIaW50V2lkdGggLSAyIC8vIDIgZm9yIGdhcHNcblxuICAvLyBDbGFtcCBzZWxlY3RlZEluZGV4IHRvIHZhbGlkIHJhbmdlXG4gIGNvbnN0IHNhZmVTZWxlY3RlZEluZGV4ID0gTWF0aC5tYXgoXG4gICAgMCxcbiAgICBNYXRoLm1pbihzZWxlY3RlZEluZGV4LCB0YWJzLmxlbmd0aCAtIDEpLFxuICApXG5cbiAgLy8gQ2FsY3VsYXRlIHdpZHRoIG9mIGVhY2ggdGFiLCB3aXRoIHRydW5jYXRpb24gZm9yIHZlcnkgbG9uZyB0YWdzXG4gIGNvbnN0IG1heFNpbmdsZVRhYldpZHRoID0gTWF0aC5tYXgoMjAsIE1hdGguZmxvb3IobWF4VGFic1dpZHRoIC8gMikpIC8vIEF0IGxlYXN0IHNob3cgaGFsZiB0aGUgc3BhY2UgZm9yIG9uZSB0YWJcbiAgY29uc3QgdGFiV2lkdGhzID0gdGFicy5tYXAodGFiID0+IGdldFRhYldpZHRoKHRhYiwgbWF4U2luZ2xlVGFiV2lkdGgpKVxuXG4gIC8vIEZpbmQgYSB3aW5kb3cgb2YgdGFicyB0aGF0IGZpdHMsIGNlbnRlcmVkIGFyb3VuZCBzZWxlY3RlZEluZGV4XG4gIGxldCBzdGFydEluZGV4ID0gMFxuICBsZXQgZW5kSW5kZXggPSB0YWJzLmxlbmd0aFxuXG4gIC8vIENhbGN1bGF0ZSB0b3RhbCB3aWR0aCBvZiBhbGwgdGFic1xuICBjb25zdCB0b3RhbFRhYnNXaWR0aCA9IHRhYldpZHRocy5yZWR1Y2UoXG4gICAgKHN1bSwgdywgaSkgPT4gc3VtICsgdyArIChpIDwgdGFiV2lkdGhzLmxlbmd0aCAtIDEgPyAxIDogMCksXG4gICAgMCxcbiAgKSAvLyArMSBmb3IgZ2FwcyBiZXR3ZWVuIHRhYnNcblxuICBpZiAodG90YWxUYWJzV2lkdGggPiBtYXhUYWJzV2lkdGgpIHtcbiAgICAvLyBOZWVkIHRvIHNob3cgYSBzdWJzZXQgLSBhY2NvdW50IGZvciBsZWZ0IGFycm93IHdoZW4gbm90IGF0IHN0YXJ0XG4gICAgY29uc3QgZWZmZWN0aXZlTWF4V2lkdGggPSBtYXhUYWJzV2lkdGggLSBMRUZUX0FSUk9XX1dJRFRIXG5cbiAgICAvLyBTdGFydCB3aXRoIHRoZSBzZWxlY3RlZCB0YWJcbiAgICBsZXQgd2luZG93V2lkdGggPSB0YWJXaWR0aHNbc2FmZVNlbGVjdGVkSW5kZXhdID8/IDBcbiAgICBzdGFydEluZGV4ID0gc2FmZVNlbGVjdGVkSW5kZXhcbiAgICBlbmRJbmRleCA9IHNhZmVTZWxlY3RlZEluZGV4ICsgMVxuXG4gICAgLy8gRXhwYW5kIHdpbmRvdyB0byBpbmNsdWRlIG1vcmUgdGFic1xuICAgIHdoaWxlIChzdGFydEluZGV4ID4gMCB8fCBlbmRJbmRleCA8IHRhYnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjYW5FeHBhbmRMZWZ0ID0gc3RhcnRJbmRleCA+IDBcbiAgICAgIGNvbnN0IGNhbkV4cGFuZFJpZ2h0ID0gZW5kSW5kZXggPCB0YWJzLmxlbmd0aFxuXG4gICAgICBpZiAoY2FuRXhwYW5kTGVmdCkge1xuICAgICAgICBjb25zdCBsZWZ0V2lkdGggPSAodGFiV2lkdGhzW3N0YXJ0SW5kZXggLSAxXSA/PyAwKSArIDEgLy8gKzEgZm9yIGdhcFxuICAgICAgICBpZiAod2luZG93V2lkdGggKyBsZWZ0V2lkdGggPD0gZWZmZWN0aXZlTWF4V2lkdGgpIHtcbiAgICAgICAgICBzdGFydEluZGV4LS1cbiAgICAgICAgICB3aW5kb3dXaWR0aCArPSBsZWZ0V2lkdGhcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5FeHBhbmRSaWdodCkge1xuICAgICAgICBjb25zdCByaWdodFdpZHRoID0gKHRhYldpZHRoc1tlbmRJbmRleF0gPz8gMCkgKyAxIC8vICsxIGZvciBnYXBcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoICsgcmlnaHRXaWR0aCA8PSBlZmZlY3RpdmVNYXhXaWR0aCkge1xuICAgICAgICAgIGVuZEluZGV4KytcbiAgICAgICAgICB3aW5kb3dXaWR0aCArPSByaWdodFdpZHRoXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpZGRlbkxlZnQgPSBzdGFydEluZGV4XG4gIGNvbnN0IGhpZGRlblJpZ2h0ID0gdGFicy5sZW5ndGggLSBlbmRJbmRleFxuICBjb25zdCB2aXNpYmxlVGFicyA9IHRhYnMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG4gIGNvbnN0IHZpc2libGVJbmRpY2VzID0gdmlzaWJsZVRhYnMubWFwKChfLCBpKSA9PiBzdGFydEluZGV4ICsgaSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0+XG4gICAgICA8VGV4dCBjb2xvcj1cInN1Z2dlc3Rpb25cIj57cmVzdW1lTGFiZWx9PC9UZXh0PlxuICAgICAge2hpZGRlbkxlZnQgPiAwICYmIChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAge0xFRlRfQVJST1dfUFJFRklYfVxuICAgICAgICAgIHtoaWRkZW5MZWZ0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgICAge3Zpc2libGVUYWJzLm1hcCgodGFiLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdmlzaWJsZUluZGljZXNbaV0hXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBhY3R1YWxJbmRleCA9PT0gc2FmZVNlbGVjdGVkSW5kZXhcbiAgICAgICAgY29uc3QgZGlzcGxheVRleHQgPVxuICAgICAgICAgIHRhYiA9PT0gQUxMX1RBQl9MQUJFTFxuICAgICAgICAgICAgPyB0YWJcbiAgICAgICAgICAgIDogYCMke3RydW5jYXRlVGFnKHRhYiwgbWF4U2luZ2xlVGFiV2lkdGggLSBUQUJfUEFERElORyl9YFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ2ludmVyc2VUZXh0JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGJvbGQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtkaXNwbGF5VGV4dH17JyAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICB7aGlkZGVuUmlnaHQgPiAwID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7UklHSFRfSElOVF9XSVRIX0NPVU5UX1BSRUZJWH1cbiAgICAgICAgICB7aGlkZGVuUmlnaHR9XG4gICAgICAgICAge1JJR0hUX0hJTlRfU1VGRklYfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj57UklHSFRfSElOVF9OT19DT1VOVH08L1RleHQ+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi4vLi4vaW5rL2V2ZW50cy9rZXlib2FyZC1ldmVudC5qcydcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHR5cGUgT3B0aW9uV2l0aERlc2NyaXB0aW9uLCBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuXG5leHBvcnQgdHlwZSBUcmVlTm9kZTxUPiA9IHtcbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICB2YWx1ZTogVFxuICBsYWJlbDogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRpbURlc2NyaXB0aW9uPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFRyZWVOb2RlPFQ+W11cbiAgbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG50eXBlIEZsYXR0ZW5lZE5vZGU8VD4gPSB7XG4gIG5vZGU6IFRyZWVOb2RlPFQ+XG4gIGRlcHRoOiBudW1iZXJcbiAgaXNFeHBhbmRlZDogYm9vbGVhblxuICBoYXNDaGlsZHJlbjogYm9vbGVhblxuICBwYXJlbnRJZD86IHN0cmluZyB8IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBUcmVlU2VsZWN0UHJvcHM8VD4gPSB7XG4gIC8qKlxuICAgKiBUcmVlIG5vZGVzIHRvIGRpc3BsYXkuXG4gICAqL1xuICByZWFkb25seSBub2RlczogVHJlZU5vZGU8VD5bXVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB3aGVuIGEgbm9kZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIHJlYWRvbmx5IG9uU2VsZWN0OiAobm9kZTogVHJlZU5vZGU8VD4pID0+IHZvaWRcblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiBjYW5jZWwgaXMgcHJlc3NlZC5cbiAgICovXG4gIHJlYWRvbmx5IG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB3aGVuIGZvY3VzZWQgbm9kZSBjaGFuZ2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgb25Gb2N1cz86IChub2RlOiBUcmVlTm9kZTxUPikgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBOb2RlIHRvIGZvY3VzIGJ5IElELlxuICAgKi9cbiAgcmVhZG9ubHkgZm9jdXNOb2RlSWQ/OiBzdHJpbmcgfCBudW1iZXJcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHZpc2libGUgb3B0aW9ucy5cbiAgICovXG4gIHJlYWRvbmx5IHZpc2libGVPcHRpb25Db3VudD86IG51bWJlclxuXG4gIC8qKlxuICAgKiBMYXlvdXQgb2YgdGhlIG9wdGlvbnMuXG4gICAqL1xuICByZWFkb25seSBsYXlvdXQ/OiAnY29tcGFjdCcgfCAnZXhwYW5kZWQnIHwgJ2NvbXBhY3QtdmVydGljYWwnXG5cbiAgLyoqXG4gICAqIFdoZW4gZGlzYWJsZWQsIHVzZXIgaW5wdXQgaXMgaWdub3JlZC5cbiAgICovXG4gIHJlYWRvbmx5IGlzRGlzYWJsZWQ/OiBib29sZWFuXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgaGlkZXMgdGhlIG51bWVyaWMgaW5kZXhlcyBuZXh0IHRvIGVhY2ggb3B0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgaGlkZUluZGV4ZXM/OiBib29sZWFuXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBhIG5vZGUgc2hvdWxkIGJlIGluaXRpYWxseSBleHBhbmRlZC5cbiAgICogSWYgbm90IHByb3ZpZGVkLCBhbGwgbm9kZXMgc3RhcnQgY29sbGFwc2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgaXNOb2RlRXhwYW5kZWQ/OiAobm9kZUlkOiBzdHJpbmcgfCBudW1iZXIpID0+IGJvb2xlYW5cblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiBhIG5vZGUgaXMgZXhwYW5kZWQuXG4gICAqL1xuICByZWFkb25seSBvbkV4cGFuZD86IChub2RlSWQ6IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB3aGVuIGEgbm9kZSBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICByZWFkb25seSBvbkNvbGxhcHNlPzogKG5vZGVJZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIEN1c3RvbSBwcmVmaXggZnVuY3Rpb24gZm9yIHBhcmVudCBub2Rlc1xuICAgKiBAcGFyYW0gaXNFeHBhbmRlZCAtIFdoZXRoZXIgdGhlIHBhcmVudCBub2RlIGlzIGN1cnJlbnRseSBleHBhbmRlZFxuICAgKiBAcmV0dXJucyBUaGUgcHJlZml4IHN0cmluZyB0byBkaXNwbGF5IChkZWZhdWx0OiAn4pa8ICcgd2hlbiBleHBhbmRlZCwgJ+KWtiAnIHdoZW4gY29sbGFwc2VkKVxuICAgKi9cbiAgcmVhZG9ubHkgZ2V0UGFyZW50UHJlZml4PzogKGlzRXhwYW5kZWQ6IGJvb2xlYW4pID0+IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBDdXN0b20gcHJlZml4IGZ1bmN0aW9uIGZvciBjaGlsZCBub2Rlc1xuICAgKiBAcGFyYW0gZGVwdGggLSBUaGUgZGVwdGggb2YgdGhlIGNoaWxkIG5vZGUgaW4gdGhlIHRyZWUgKDAtaW5kZXhlZCBmcm9tIHBhcmVudClcbiAgICogQHJldHVybnMgVGhlIHByZWZpeCBzdHJpbmcgdG8gZGlzcGxheSAoZGVmYXVsdDogJyAg4pa4ICcpXG4gICAqL1xuICByZWFkb25seSBnZXRDaGlsZFByZWZpeD86IChkZXB0aDogbnVtYmVyKSA9PiBzdHJpbmdcblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiB1c2VyIHByZXNzZXMgdXAgZnJvbSB0aGUgZmlyc3QgaXRlbS5cbiAgICogSWYgcHJvdmlkZWQsIG5hdmlnYXRpb24gd2lsbCBub3Qgd3JhcCB0byB0aGUgbGFzdCBpdGVtLlxuICAgKi9cbiAgcmVhZG9ubHkgb25VcEZyb21GaXJzdEl0ZW0/OiAoKSA9PiB2b2lkXG59XG5cbi8qKlxuICogVHJlZVNlbGVjdCBpcyBhIGdlbmVyaWMgY29tcG9uZW50IGZvciBzZWxlY3RpbmcgaXRlbXMgZnJvbSBhIGhpZXJhcmNoaWNhbCB0cmVlIHN0cnVjdHVyZS5cbiAqIEl0IGhhbmRsZXMgZXhwYW5kL2NvbGxhcHNlIHN0YXRlLCBrZXlib2FyZCBuYXZpZ2F0aW9uLCBhbmQgcmVuZGVycyB0aGUgdHJlZSBhcyBhIGZsYXQgbGlzdFxuICogdXNpbmcgdGhlIFNlbGVjdCBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmVlU2VsZWN0PFQ+KHtcbiAgbm9kZXMsXG4gIG9uU2VsZWN0LFxuICBvbkNhbmNlbCxcbiAgb25Gb2N1cyxcbiAgZm9jdXNOb2RlSWQsXG4gIHZpc2libGVPcHRpb25Db3VudCxcbiAgbGF5b3V0ID0gJ2V4cGFuZGVkJyxcbiAgaXNEaXNhYmxlZCA9IGZhbHNlLFxuICBoaWRlSW5kZXhlcyA9IGZhbHNlLFxuICBpc05vZGVFeHBhbmRlZCxcbiAgb25FeHBhbmQsXG4gIG9uQ29sbGFwc2UsXG4gIGdldFBhcmVudFByZWZpeCxcbiAgZ2V0Q2hpbGRQcmVmaXgsXG4gIG9uVXBGcm9tRmlyc3RJdGVtLFxufTogVHJlZVNlbGVjdFByb3BzPFQ+KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGV4cGFuZGVkIChpbnRlcm5hbCBzdGF0ZSBpZiBub3QgY29udHJvbGxlZCBleHRlcm5hbGx5KVxuICBjb25zdCBbaW50ZXJuYWxFeHBhbmRlZElkcywgc2V0SW50ZXJuYWxFeHBhbmRlZElkc10gPSBSZWFjdC51c2VTdGF0ZTxcbiAgICBTZXQ8c3RyaW5nIHwgbnVtYmVyPlxuICA+KG5ldyBTZXQoKSlcblxuICAvLyBUcmFjayBpZiB3ZSdyZSBwcm9ncmFtbWF0aWNhbGx5IHNldHRpbmcgZm9jdXMgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHNcbiAgY29uc3QgaXNQcm9ncmFtbWF0aWNGb2N1c1JlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcblxuICAvLyBUcmFjayBsYXN0IGZvY3VzZWQgSUQgdG8gcHJldmVudCBkdXBsaWNhdGUgZm9jdXMgY2FsbHNcbiAgY29uc3QgbGFzdEZvY3VzZWRJZFJlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihudWxsKVxuXG4gIC8vIERldGVybWluZSBpZiBhIG5vZGUgaXMgZXhwYW5kZWQgKHVzZSBleHRlcm5hbCBmdW5jdGlvbiBpZiBwcm92aWRlZCwgb3RoZXJ3aXNlIHVzZSBpbnRlcm5hbCBzdGF0ZSlcbiAgY29uc3QgaXNFeHBhbmRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChub2RlSWQ6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgaWYgKGlzTm9kZUV4cGFuZGVkKSB7XG4gICAgICAgIHJldHVybiBpc05vZGVFeHBhbmRlZChub2RlSWQpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW50ZXJuYWxFeHBhbmRlZElkcy5oYXMobm9kZUlkKVxuICAgIH0sXG4gICAgW2lzTm9kZUV4cGFuZGVkLCBpbnRlcm5hbEV4cGFuZGVkSWRzXSxcbiAgKVxuXG4gIC8vIEZsYXR0ZW4gdGhlIHRyZWUgaW50byBhIGxpbmVhciBsaXN0IGZvciB0aGUgU2VsZWN0IGNvbXBvbmVudFxuICBjb25zdCBmbGF0dGVuZWROb2RlcyA9IFJlYWN0LnVzZU1lbW8oKCk6IEZsYXR0ZW5lZE5vZGU8VD5bXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBGbGF0dGVuZWROb2RlPFQ+W10gPSBbXVxuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2UoXG4gICAgICBub2RlOiBUcmVlTm9kZTxUPixcbiAgICAgIGRlcHRoOiBudW1iZXIsXG4gICAgICBwYXJlbnRJZD86IHN0cmluZyB8IG51bWJlcixcbiAgICApOiB2b2lkIHtcbiAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgY29uc3Qgbm9kZUlzRXhwYW5kZWQgPSBpc0V4cGFuZGVkKG5vZGUuaWQpXG5cbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbm9kZSxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGlzRXhwYW5kZWQ6IG5vZGVJc0V4cGFuZGVkLFxuICAgICAgICBoYXNDaGlsZHJlbixcbiAgICAgICAgcGFyZW50SWQsXG4gICAgICB9KVxuXG4gICAgICAvLyBPbmx5IHRyYXZlcnNlIGNoaWxkcmVuIGlmIHRoaXMgbm9kZSBpcyBleHBhbmRlZFxuICAgICAgaWYgKGhhc0NoaWxkcmVuICYmIG5vZGVJc0V4cGFuZGVkICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdHJhdmVyc2UoY2hpbGQsIGRlcHRoICsgMSwgbm9kZS5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgdHJhdmVyc2Uobm9kZSwgMClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtub2RlcywgaXNFeHBhbmRlZF0pXG5cbiAgLy8gRGVmYXVsdCBwcmVmaXggZnVuY3Rpb25zXG4gIGNvbnN0IGRlZmF1bHRHZXRQYXJlbnRQcmVmaXggPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoaXNFeHBhbmRlZDogYm9vbGVhbik6IHN0cmluZyA9PiAoaXNFeHBhbmRlZCA/ICfilrwgJyA6ICfilrYgJyksXG4gICAgW10sXG4gIClcbiAgY29uc3QgZGVmYXVsdEdldENoaWxkUHJlZml4ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKF9kZXB0aDogbnVtYmVyKTogc3RyaW5nID0+ICcgIOKWuCAnLFxuICAgIFtdLFxuICApXG5cbiAgY29uc3QgcGFyZW50UHJlZml4Rm4gPSBnZXRQYXJlbnRQcmVmaXggPz8gZGVmYXVsdEdldFBhcmVudFByZWZpeFxuICBjb25zdCBjaGlsZFByZWZpeEZuID0gZ2V0Q2hpbGRQcmVmaXggPz8gZGVmYXVsdEdldENoaWxkUHJlZml4XG5cbiAgLy8gQnVpbGQgdGhlIGxhYmVsIHdpdGggYXBwcm9wcmlhdGUgcHJlZml4ZXMgYmFzZWQgb24gdHJlZSBwb3NpdGlvblxuICBjb25zdCBidWlsZExhYmVsID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGZsYXROb2RlOiBGbGF0dGVuZWROb2RlPFQ+KTogc3RyaW5nID0+IHtcbiAgICAgIGxldCBwcmVmaXggPSAnJ1xuXG4gICAgICBpZiAoZmxhdE5vZGUuaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgLy8gUGFyZW50IG5vZGUgd2l0aCBjaGlsZHJlblxuICAgICAgICBwcmVmaXggPSBwYXJlbnRQcmVmaXhGbihmbGF0Tm9kZS5pc0V4cGFuZGVkKVxuICAgICAgfSBlbHNlIGlmIChmbGF0Tm9kZS5kZXB0aCA+IDApIHtcbiAgICAgICAgLy8gQ2hpbGQgbm9kZVxuICAgICAgICBwcmVmaXggPSBjaGlsZFByZWZpeEZuKGZsYXROb2RlLmRlcHRoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJlZml4ICsgZmxhdE5vZGUubm9kZS5sYWJlbFxuICAgIH0sXG4gICAgW3BhcmVudFByZWZpeEZuLCBjaGlsZFByZWZpeEZuXSxcbiAgKVxuXG4gIC8vIENvbnZlcnQgZmxhdHRlbmVkIG5vZGVzIHRvIFNlbGVjdCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpOiBPcHRpb25XaXRoRGVzY3JpcHRpb248XG4gICAgc3RyaW5nIHwgbnVtYmVyXG4gID5bXSA9PiB7XG4gICAgcmV0dXJuIGZsYXR0ZW5lZE5vZGVzLm1hcChmbGF0Tm9kZSA9PiAoe1xuICAgICAgbGFiZWw6IGJ1aWxkTGFiZWwoZmxhdE5vZGUpLFxuICAgICAgZGVzY3JpcHRpb246IGZsYXROb2RlLm5vZGUuZGVzY3JpcHRpb24sXG4gICAgICBkaW1EZXNjcmlwdGlvbjogZmxhdE5vZGUubm9kZS5kaW1EZXNjcmlwdGlvbiA/PyB0cnVlLFxuICAgICAgdmFsdWU6IGZsYXROb2RlLm5vZGUuaWQsXG4gICAgfSkpXG4gIH0sIFtmbGF0dGVuZWROb2RlcywgYnVpbGRMYWJlbF0pXG5cbiAgLy8gTWFwIGZyb20gbm9kZSBJRCB0byB0aGUgYWN0dWFsIG5vZGUgZm9yIHF1aWNrIGxvb2t1cFxuICBjb25zdCBub2RlTWFwID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcgfCBudW1iZXIsIFRyZWVOb2RlPFQ+PigpXG4gICAgZmxhdHRlbmVkTm9kZXMuZm9yRWFjaChmbiA9PiBtYXAuc2V0KGZuLm5vZGUuaWQsIGZuLm5vZGUpKVxuICAgIHJldHVybiBtYXBcbiAgfSwgW2ZsYXR0ZW5lZE5vZGVzXSlcblxuICAvLyBGaW5kIHRoZSBmbGF0dGVuZWQgbm9kZSBieSBJRFxuICBjb25zdCBmaW5kRmxhdHRlbmVkTm9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChub2RlSWQ6IHN0cmluZyB8IG51bWJlcik6IEZsYXR0ZW5lZE5vZGU8VD4gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgcmV0dXJuIGZsYXR0ZW5lZE5vZGVzLmZpbmQoZm4gPT4gZm4ubm9kZS5pZCA9PT0gbm9kZUlkKVxuICAgIH0sXG4gICAgW2ZsYXR0ZW5lZE5vZGVzXSxcbiAgKVxuXG4gIC8vIEhhbmRsZSBleHBhbmQvY29sbGFwc2VcbiAgY29uc3QgdG9nZ2xlRXhwYW5kID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKG5vZGVJZDogc3RyaW5nIHwgbnVtYmVyLCBzaG91bGRFeHBhbmQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGZsYXROb2RlID0gZmluZEZsYXR0ZW5lZE5vZGUobm9kZUlkKVxuICAgICAgaWYgKCFmbGF0Tm9kZSB8fCAhZmxhdE5vZGUuaGFzQ2hpbGRyZW4pIHJldHVyblxuXG4gICAgICBpZiAoc2hvdWxkRXhwYW5kKSB7XG4gICAgICAgIGlmIChvbkV4cGFuZCkge1xuICAgICAgICAgIG9uRXhwYW5kKG5vZGVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRJbnRlcm5hbEV4cGFuZGVkSWRzKHByZXYgPT4gbmV3IFNldChwcmV2KS5hZGQobm9kZUlkKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9uQ29sbGFwc2UpIHtcbiAgICAgICAgICBvbkNvbGxhcHNlKG5vZGVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRJbnRlcm5hbEV4cGFuZGVkSWRzKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U2V0ID0gbmV3IFNldChwcmV2KVxuICAgICAgICAgICAgbmV3U2V0LmRlbGV0ZShub2RlSWQpXG4gICAgICAgICAgICByZXR1cm4gbmV3U2V0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2ZpbmRGbGF0dGVuZWROb2RlLCBvbkV4cGFuZCwgb25Db2xsYXBzZV0sXG4gIClcblxuICAvLyBIYW5kbGUgbGVmdC9yaWdodCBhcnJvdyBrZXlzIGZvciBleHBhbmQvY29sbGFwc2VcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKCFmb2N1c05vZGVJZCB8fCBpc0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IGZsYXROb2RlID0gZmluZEZsYXR0ZW5lZE5vZGUoZm9jdXNOb2RlSWQpXG4gICAgaWYgKCFmbGF0Tm9kZSkgcmV0dXJuXG5cbiAgICBpZiAoZS5rZXkgPT09ICdyaWdodCcgJiYgZmxhdE5vZGUuaGFzQ2hpbGRyZW4pIHtcbiAgICAgIC8vIEV4cGFuZCB0aGUgZm9jdXNlZCBub2RlIChvbmx5IGlmIGl0IGhhcyBjaGlsZHJlbilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdG9nZ2xlRXhwYW5kKGZvY3VzTm9kZUlkLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdsZWZ0Jykge1xuICAgICAgaWYgKGZsYXROb2RlLmhhc0NoaWxkcmVuICYmIGZsYXROb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgLy8gQ29sbGFwc2UgdGhlIGZvY3VzZWQgcGFyZW50IG5vZGVcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRvZ2dsZUV4cGFuZChmb2N1c05vZGVJZCwgZmFsc2UpXG4gICAgICB9IGVsc2UgaWYgKGZsYXROb2RlLnBhcmVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGNoaWxkIG5vZGUgT1IgYSBjb2xsYXBzZWQgcGFyZW50IHdpdGggYSBwYXJlbnQsXG4gICAgICAgIC8vIGNvbGxhcHNlIHRoZSBwYXJlbnQgYW5kIGZvY3VzIGl0XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpc1Byb2dyYW1tYXRpY0ZvY3VzUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgIHRvZ2dsZUV4cGFuZChmbGF0Tm9kZS5wYXJlbnRJZCwgZmFsc2UpXG4gICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGVNYXAuZ2V0KGZsYXROb2RlLnBhcmVudElkKVxuICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBvbkZvY3VzKHBhcmVudE5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIHNlbGVjdGlvblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAobm9kZUlkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlTWFwLmdldChub2RlSWQpXG4gICAgICBpZiAoIW5vZGUpIHJldHVyblxuXG4gICAgICAvLyBBbHdheXMgc2VsZWN0IHRoZSBub2RlIC0gZXhwYW5kL2NvbGxhcHNlIGlzIGhhbmRsZWQgYnkgYXJyb3cga2V5c1xuICAgICAgb25TZWxlY3Qobm9kZSlcbiAgICB9LFxuICAgIFtub2RlTWFwLCBvblNlbGVjdF0sXG4gIClcblxuICAvLyBIYW5kbGUgZm9jdXMgY2hhbmdlc1xuICBjb25zdCBoYW5kbGVGb2N1cyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChub2RlSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgLy8gU2tpcCBpZiB0aGlzIGlzIGEgcHJvZ3JhbW1hdGljIGZvY3VzIGNoYW5nZVxuICAgICAgaWYgKGlzUHJvZ3JhbW1hdGljRm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgICBpc1Byb2dyYW1tYXRpY0ZvY3VzUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBpZiBzYW1lIG5vZGUgYWxyZWFkeSBmb2N1c2VkXG4gICAgICBpZiAobGFzdEZvY3VzZWRJZFJlZi5jdXJyZW50ID09PSBub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsYXN0Rm9jdXNlZElkUmVmLmN1cnJlbnQgPSBub2RlSWRcblxuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVNYXAuZ2V0KG5vZGVJZClcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICBvbkZvY3VzKG5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkZvY3VzLCBub2RlTWFwXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCB0YWJJbmRleD17MH0gYXV0b0ZvY3VzIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtmb2N1c05vZGVJZH1cbiAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXt2aXNpYmxlT3B0aW9uQ291bnR9XG4gICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICBoaWRlSW5kZXhlcz17aGlkZUluZGV4ZXN9XG4gICAgICAgIG9uVXBGcm9tRmlyc3RJdGVtPXtvblVwRnJvbUZpcnN0SXRlbX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldE9yaWdpbmFsQ3dkLCBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICcuLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyB1c2VTZWFyY2hJbnB1dCB9IGZyb20gJy4uL2hvb2tzL3VzZVNlYXJjaElucHV0LmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgYXBwbHlDb2xvciB9IGZyb20gJy4uL2luay9jb2xvcml6ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29sb3IgfSBmcm9tICcuLi9pbmsvc3R5bGVzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VJbnB1dCwgdXNlVGVybWluYWxGb2N1cywgdXNlVGhlbWUgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24sIFNlcmlhbGl6ZWRNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IGZvcm1hdExvZ01ldGFkYXRhLCB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBnZXRXb3JrdHJlZVBhdGhzIH0gZnJvbSAnLi4vdXRpbHMvZ2V0V29ya3RyZWVQYXRocy5qcydcbmltcG9ydCB7IGdldEJyYW5jaCB9IGZyb20gJy4uL3V0aWxzL2dpdC5qcydcbmltcG9ydCB7IGdldExvZ0Rpc3BsYXlUaXRsZSB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7XG4gIGdldEZpcnN0TWVhbmluZ2Z1bFVzZXJNZXNzYWdlVGV4dENvbnRlbnQsXG4gIGdldFNlc3Npb25JZEZyb21Mb2csXG4gIGlzQ3VzdG9tVGl0bGVFbmFibGVkLFxuICBzYXZlQ3VzdG9tVGl0bGUsXG59IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tICcuLi91dGlscy90aGVtZS5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGl2aWRlci5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnLi9TZWFyY2hCb3guanMnXG5pbXBvcnQgeyBTZXNzaW9uUHJldmlldyB9IGZyb20gJy4vU2Vzc2lvblByZXZpZXcuanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyLmpzJ1xuaW1wb3J0IHsgVGFnVGFicyB9IGZyb20gJy4vVGFnVGFicy5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9UZXh0SW5wdXQuanMnXG5pbXBvcnQgeyB0eXBlIFRyZWVOb2RlLCBUcmVlU2VsZWN0IH0gZnJvbSAnLi91aS9UcmVlU2VsZWN0LmpzJ1xuXG50eXBlIEFnZW50aWNTZWFyY2hTdGF0ZSA9XG4gIHwgeyBzdGF0dXM6ICdpZGxlJyB9XG4gIHwgeyBzdGF0dXM6ICdzZWFyY2hpbmcnIH1cbiAgfCB7IHN0YXR1czogJ3Jlc3VsdHMnOyByZXN1bHRzOiBMb2dPcHRpb25bXTsgcXVlcnk6IHN0cmluZyB9XG4gIHwgeyBzdGF0dXM6ICdlcnJvcic7IG1lc3NhZ2U6IHN0cmluZyB9XG5cbmV4cG9ydCB0eXBlIExvZ1NlbGVjdG9yUHJvcHMgPSB7XG4gIGxvZ3M6IExvZ09wdGlvbltdXG4gIG1heEhlaWdodD86IG51bWJlclxuICBmb3JjZVdpZHRoPzogbnVtYmVyXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxuICBvblNlbGVjdDogKGxvZzogTG9nT3B0aW9uKSA9PiB2b2lkXG4gIG9uTG9nc0NoYW5nZWQ/OiAoKSA9PiB2b2lkXG4gIG9uTG9hZE1vcmU/OiAoY291bnQ6IG51bWJlcikgPT4gdm9pZFxuICBpbml0aWFsU2VhcmNoUXVlcnk/OiBzdHJpbmdcbiAgc2hvd0FsbFByb2plY3RzPzogYm9vbGVhblxuICBvblRvZ2dsZUFsbFByb2plY3RzPzogKCkgPT4gdm9pZFxuICBvbkFnZW50aWNTZWFyY2g/OiAoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBsb2dzOiBMb2dPcHRpb25bXSxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgKSA9PiBQcm9taXNlPExvZ09wdGlvbltdPlxufVxuXG50eXBlIExvZ1RyZWVOb2RlID0gVHJlZU5vZGU8eyBsb2c6IExvZ09wdGlvbjsgaW5kZXhJbkZpbHRlcmVkOiBudW1iZXIgfT5cblxuZnVuY3Rpb24gbm9ybWFsaXplQW5kVHJ1bmNhdGVUb1dpZHRoKHRleHQ6IHN0cmluZywgbWF4V2lkdGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aChub3JtYWxpemVkLCBtYXhXaWR0aClcbn1cblxuLy8gV2lkdGggb2YgcHJlZml4ZXMgdGhhdCBUcmVlU2VsZWN0IHdpbGwgYWRkXG5jb25zdCBQQVJFTlRfUFJFRklYX1dJRFRIID0gMiAvLyAn4pa8ICcgb3IgJ+KWtiAnXG5jb25zdCBDSElMRF9QUkVGSVhfV0lEVEggPSA0IC8vICcgIOKWuCAnXG5cbi8vIERlZXAgc2VhcmNoIGNvbnN0YW50c1xuY29uc3QgREVFUF9TRUFSQ0hfTUFYX01FU1NBR0VTID0gMjAwMFxuY29uc3QgREVFUF9TRUFSQ0hfQ1JPUF9TSVpFID0gMTAwMFxuY29uc3QgREVFUF9TRUFSQ0hfTUFYX1RFWFRfTEVOR1RIID0gNTAwMDAgLy8gQ2FwIHNlYXJjaGFibGUgdGV4dCBwZXIgc2Vzc2lvblxuY29uc3QgRlVTRV9USFJFU0hPTEQgPSAwLjNcbmNvbnN0IERBVEVfVElFX1RIUkVTSE9MRF9NUyA9IDYwICogMTAwMCAvLyAxIG1pbnV0ZSAtIHVzZSByZWxldmFuY2UgYXMgdGllLWJyZWFrZXIgd2l0aGluIHRoaXMgd2luZG93XG5jb25zdCBTTklQUEVUX0NPTlRFWFRfQ0hBUlMgPSA1MCAvLyBDaGFyYWN0ZXJzIHRvIHNob3cgYmVmb3JlL2FmdGVyIG1hdGNoXG5cbnR5cGUgU25pcHBldCA9IHsgYmVmb3JlOiBzdHJpbmc7IG1hdGNoOiBzdHJpbmc7IGFmdGVyOiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBmb3JtYXRTbmlwcGV0KFxuICB7IGJlZm9yZSwgbWF0Y2gsIGFmdGVyIH06IFNuaXBwZXQsXG4gIGhpZ2hsaWdodENvbG9yOiAodGV4dDogc3RyaW5nKSA9PiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gY2hhbGsuZGltKGJlZm9yZSkgKyBoaWdobGlnaHRDb2xvcihtYXRjaCkgKyBjaGFsay5kaW0oYWZ0ZXIpXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RTbmlwcGV0KFxuICB0ZXh0OiBzdHJpbmcsXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIGNvbnRleHRDaGFyczogbnVtYmVyLFxuKTogU25pcHBldCB8IG51bGwge1xuICAvLyBGaW5kIGV4YWN0IHF1ZXJ5IG9jY3VycmVuY2UgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICAvLyBOb3RlOiBGdXNlIGRvZXMgZnV6enkgbWF0Y2hpbmcsIHNvIHRoaXMgbWF5IG1pc3Mgc29tZSBmdXp6eSBtYXRjaGVzLlxuICAvLyBUaGlzIGlzIGFjY2VwdGFibGUgZm9yIG5vdyAtIGluIHRoZSBmdXR1cmUgd2UgY291bGQgdXNlIEZ1c2UncyBpbmNsdWRlTWF0Y2hlc1xuICAvLyBvcHRpb24gYW5kIHdvcmsgd2l0aCB0aGUgbWF0Y2ggaW5kaWNlcyBkaXJlY3RseS5cbiAgY29uc3QgbWF0Y2hJbmRleCA9IHRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gIGlmIChtYXRjaEluZGV4ID09PSAtMSkgcmV0dXJuIG51bGxcblxuICBjb25zdCBtYXRjaEVuZCA9IG1hdGNoSW5kZXggKyBxdWVyeS5sZW5ndGhcbiAgY29uc3Qgc25pcHBldFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF0Y2hJbmRleCAtIGNvbnRleHRDaGFycylcbiAgY29uc3Qgc25pcHBldEVuZCA9IE1hdGgubWluKHRleHQubGVuZ3RoLCBtYXRjaEVuZCArIGNvbnRleHRDaGFycylcblxuICBjb25zdCBiZWZvcmVSYXcgPSB0ZXh0LnNsaWNlKHNuaXBwZXRTdGFydCwgbWF0Y2hJbmRleClcbiAgY29uc3QgbWF0Y2hUZXh0ID0gdGV4dC5zbGljZShtYXRjaEluZGV4LCBtYXRjaEVuZClcbiAgY29uc3QgYWZ0ZXJSYXcgPSB0ZXh0LnNsaWNlKG1hdGNoRW5kLCBzbmlwcGV0RW5kKVxuXG4gIHJldHVybiB7XG4gICAgYmVmb3JlOlxuICAgICAgKHNuaXBwZXRTdGFydCA+IDAgPyAn4oCmJyA6ICcnKSArXG4gICAgICBiZWZvcmVSYXcucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW1TdGFydCgpLFxuICAgIG1hdGNoOiBtYXRjaFRleHQudHJpbSgpLFxuICAgIGFmdGVyOlxuICAgICAgYWZ0ZXJSYXcucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW1FbmQoKSArXG4gICAgICAoc25pcHBldEVuZCA8IHRleHQubGVuZ3RoID8gJ+KApicgOiAnJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRMb2dMYWJlbChcbiAgbG9nOiBMb2dPcHRpb24sXG4gIG1heExhYmVsV2lkdGg6IG51bWJlcixcbiAgb3B0aW9ucz86IHtcbiAgICBpc0dyb3VwSGVhZGVyPzogYm9vbGVhblxuICAgIGlzQ2hpbGQ/OiBib29sZWFuXG4gICAgZm9ya0NvdW50PzogbnVtYmVyXG4gIH0sXG4pOiBzdHJpbmcge1xuICBjb25zdCB7XG4gICAgaXNHcm91cEhlYWRlciA9IGZhbHNlLFxuICAgIGlzQ2hpbGQgPSBmYWxzZSxcbiAgICBmb3JrQ291bnQgPSAwLFxuICB9ID0gb3B0aW9ucyB8fCB7fVxuXG4gIC8vIFRyZWVTZWxlY3Qgd2lsbCBhZGQgdGhlIHByZWZpeCwgc28gd2UganVzdCBuZWVkIHRvIGFjY291bnQgZm9yIGl0cyB3aWR0aFxuICBjb25zdCBwcmVmaXhXaWR0aCA9XG4gICAgaXNHcm91cEhlYWRlciAmJiBmb3JrQ291bnQgPiAwXG4gICAgICA/IFBBUkVOVF9QUkVGSVhfV0lEVEhcbiAgICAgIDogaXNDaGlsZFxuICAgICAgICA/IENISUxEX1BSRUZJWF9XSURUSFxuICAgICAgICA6IDBcblxuICBjb25zdCBzZXNzaW9uQ291bnRTdWZmaXggPVxuICAgIGlzR3JvdXBIZWFkZXIgJiYgZm9ya0NvdW50ID4gMFxuICAgICAgPyBgICgrJHtmb3JrQ291bnR9IG90aGVyICR7Zm9ya0NvdW50ID09PSAxID8gJ3Nlc3Npb24nIDogJ3Nlc3Npb25zJ30pYFxuICAgICAgOiAnJ1xuXG4gIGNvbnN0IHNpZGVjaGFpblN1ZmZpeCA9IGxvZy5pc1NpZGVjaGFpbiA/ICcgKHNpZGVjaGFpbiknIDogJydcblxuICBjb25zdCBtYXhTdW1tYXJ5V2lkdGggPVxuICAgIG1heExhYmVsV2lkdGggLVxuICAgIHByZWZpeFdpZHRoIC1cbiAgICBzaWRlY2hhaW5TdWZmaXgubGVuZ3RoIC1cbiAgICBzZXNzaW9uQ291bnRTdWZmaXgubGVuZ3RoXG4gIGNvbnN0IHRydW5jYXRlZFN1bW1hcnkgPSBub3JtYWxpemVBbmRUcnVuY2F0ZVRvV2lkdGgoXG4gICAgZ2V0TG9nRGlzcGxheVRpdGxlKGxvZyksXG4gICAgbWF4U3VtbWFyeVdpZHRoLFxuICApXG4gIHJldHVybiBgJHt0cnVuY2F0ZWRTdW1tYXJ5fSR7c2lkZWNoYWluU3VmZml4fSR7c2Vzc2lvbkNvdW50U3VmZml4fWBcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2dNZXRhZGF0YShcbiAgbG9nOiBMb2dPcHRpb24sXG4gIG9wdGlvbnM/OiB7IGlzQ2hpbGQ/OiBib29sZWFuOyBzaG93UHJvamVjdFBhdGg/OiBib29sZWFuIH0sXG4pOiBzdHJpbmcge1xuICBjb25zdCB7IGlzQ2hpbGQgPSBmYWxzZSwgc2hvd1Byb2plY3RQYXRoID0gZmFsc2UgfSA9IG9wdGlvbnMgfHwge31cbiAgLy8gTWF0Y2ggdGhlIGNoaWxkIHByZWZpeCB3aWR0aCBmb3IgcHJvcGVyIGFsaWdubWVudFxuICBjb25zdCBjaGlsZFBhZGRpbmcgPSBpc0NoaWxkID8gJyAgICAnIDogJycgLy8gNCBzcGFjZXMgdG8gbWF0Y2ggJyAg4pa4ICdcbiAgY29uc3QgYmFzZU1ldGFkYXRhID0gZm9ybWF0TG9nTWV0YWRhdGEobG9nKVxuICBjb25zdCBwcm9qZWN0U3VmZml4ID1cbiAgICBzaG93UHJvamVjdFBhdGggJiYgbG9nLnByb2plY3RQYXRoID8gYCDCtyAke2xvZy5wcm9qZWN0UGF0aH1gIDogJydcbiAgcmV0dXJuIGNoaWxkUGFkZGluZyArIGJhc2VNZXRhZGF0YSArIHByb2plY3RTdWZmaXhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ1NlbGVjdG9yKHtcbiAgbG9ncyxcbiAgbWF4SGVpZ2h0ID0gSW5maW5pdHksXG4gIGZvcmNlV2lkdGgsXG4gIG9uQ2FuY2VsLFxuICBvblNlbGVjdCxcbiAgb25Mb2dzQ2hhbmdlZCxcbiAgb25Mb2FkTW9yZSxcbiAgaW5pdGlhbFNlYXJjaFF1ZXJ5LFxuICBzaG93QWxsUHJvamVjdHMgPSBmYWxzZSxcbiAgb25Ub2dnbGVBbGxQcm9qZWN0cyxcbiAgb25BZ2VudGljU2VhcmNoLFxufTogTG9nU2VsZWN0b3JQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHRlcm1pbmFsU2l6ZSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIGNvbnN0IGNvbHVtbnMgPSBmb3JjZVdpZHRoID09PSB1bmRlZmluZWQgPyB0ZXJtaW5hbFNpemUuY29sdW1ucyA6IGZvcmNlV2lkdGhcbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKG9uQ2FuY2VsKVxuICBjb25zdCBpc1Rlcm1pbmFsRm9jdXNlZCA9IHVzZVRlcm1pbmFsRm9jdXMoKVxuICBjb25zdCBpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkID0gaXNDdXN0b21UaXRsZUVuYWJsZWQoKVxuICBjb25zdCBpc0RlZXBTZWFyY2hFbmFibGVkID0gXCJleHRlcm5hbFwiID09PSAnYW50J1xuICBjb25zdCBbdGhlbWVOYW1lXSA9IHVzZVRoZW1lKClcbiAgY29uc3QgdGhlbWUgPSBnZXRUaGVtZSh0aGVtZU5hbWUpXG4gIGNvbnN0IGhpZ2hsaWdodENvbG9yID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAodGV4dDogc3RyaW5nKSA9PiBhcHBseUNvbG9yKHRleHQsIHRoZW1lLndhcm5pbmcgYXMgQ29sb3IpLFxuICAgIFt0aGVtZS53YXJuaW5nXSxcbiAgKVxuICBjb25zdCBpc0FnZW50aWNTZWFyY2hFbmFibGVkID0gXCJleHRlcm5hbFwiID09PSAnYW50J1xuXG4gIGNvbnN0IFtjdXJyZW50QnJhbmNoLCBzZXRDdXJyZW50QnJhbmNoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFticmFuY2hGaWx0ZXJFbmFibGVkLCBzZXRCcmFuY2hGaWx0ZXJFbmFibGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvd0FsbFdvcmt0cmVlcywgc2V0U2hvd0FsbFdvcmt0cmVlc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2hhc011bHRpcGxlV29ya3RyZWVzLCBzZXRIYXNNdWx0aXBsZVdvcmt0cmVlc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgY3VycmVudEN3ZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0T3JpZ2luYWxDd2QoKSwgW10pXG4gIGNvbnN0IFtyZW5hbWVWYWx1ZSwgc2V0UmVuYW1lVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZW5hbWVDdXJzb3JPZmZzZXQsIHNldFJlbmFtZUN1cnNvck9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBjb25zdCBbZXhwYW5kZWRHcm91cFNlc3Npb25JZHMsIHNldEV4cGFuZGVkR3JvdXBTZXNzaW9uSWRzXSA9IFJlYWN0LnVzZVN0YXRlPFxuICAgIFNldDxzdHJpbmc+XG4gID4obmV3IFNldCgpKVxuICBjb25zdCBbZm9jdXNlZE5vZGUsIHNldEZvY3VzZWROb2RlXSA9IFJlYWN0LnVzZVN0YXRlPExvZ1RyZWVOb2RlIHwgbnVsbD4obnVsbClcbiAgLy8gVHJhY2sgZm9jdXNlZCBpbmRleCBmb3Igc2Nyb2xsIHBvc2l0aW9uIGRpc3BsYXkgaW4gdGl0bGVcbiAgY29uc3QgW2ZvY3VzZWRJbmRleCwgc2V0Rm9jdXNlZEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDEpXG4gIGNvbnN0IFt2aWV3TW9kZSwgc2V0Vmlld01vZGVdID0gUmVhY3QudXNlU3RhdGU8XG4gICAgJ2xpc3QnIHwgJ3ByZXZpZXcnIHwgJ3JlbmFtZScgfCAnc2VhcmNoJ1xuICA+KCdsaXN0JylcbiAgY29uc3QgW3ByZXZpZXdMb2csIHNldFByZXZpZXdMb2ddID0gUmVhY3QudXNlU3RhdGU8TG9nT3B0aW9uIHwgbnVsbD4obnVsbClcbiAgY29uc3QgcHJldkZvY3VzZWRJZFJlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbc2VsZWN0ZWRUYWdJbmRleCwgc2V0U2VsZWN0ZWRUYWdJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gIC8vIEFnZW50aWMgc2VhcmNoIHN0YXRlXG4gIGNvbnN0IFthZ2VudGljU2VhcmNoU3RhdGUsIHNldEFnZW50aWNTZWFyY2hTdGF0ZV0gPVxuICAgIFJlYWN0LnVzZVN0YXRlPEFnZW50aWNTZWFyY2hTdGF0ZT4oeyBzdGF0dXM6ICdpZGxlJyB9KVxuICAvLyBUcmFjayBpZiB0aGUgXCJTZWFyY2ggZGVlcGx5IHVzaW5nIENsYXVkZVwiIG9wdGlvbiBpcyBmb2N1c2VkXG4gIGNvbnN0IFtpc0FnZW50aWNTZWFyY2hPcHRpb25Gb2N1c2VkLCBzZXRJc0FnZW50aWNTZWFyY2hPcHRpb25Gb2N1c2VkXSA9XG4gICAgUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIC8vIEFib3J0Q29udHJvbGxlciBmb3IgY2FuY2VsbGluZyBhZ2VudGljIHNlYXJjaFxuICBjb25zdCBhZ2VudGljU2VhcmNoQWJvcnRSZWYgPSBSZWFjdC51c2VSZWY8QWJvcnRDb250cm9sbGVyIHwgbnVsbD4obnVsbClcblxuICBjb25zdCB7XG4gICAgcXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgIHNldFF1ZXJ5OiBzZXRTZWFyY2hRdWVyeSxcbiAgICBjdXJzb3JPZmZzZXQ6IHNlYXJjaEN1cnNvck9mZnNldCxcbiAgfSA9IHVzZVNlYXJjaElucHV0KHtcbiAgICBpc0FjdGl2ZTpcbiAgICAgIHZpZXdNb2RlID09PSAnc2VhcmNoJyAmJiBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzICE9PSAnc2VhcmNoaW5nJyxcbiAgICBvbkV4aXQ6ICgpID0+IHtcbiAgICAgIHNldFZpZXdNb2RlKCdsaXN0JylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3NlYXJjaF90b2dnbGVkJywgeyBlbmFibGVkOiBmYWxzZSB9KVxuICAgIH0sXG4gICAgb25FeGl0VXA6ICgpID0+IHtcbiAgICAgIHNldFZpZXdNb2RlKCdsaXN0JylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3NlYXJjaF90b2dnbGVkJywgeyBlbmFibGVkOiBmYWxzZSB9KVxuICAgIH0sXG4gICAgcGFzc3Rocm91Z2hDdHJsS2V5czogWyduJ10sXG4gICAgaW5pdGlhbFF1ZXJ5OiBpbml0aWFsU2VhcmNoUXVlcnkgfHwgJycsXG4gIH0pXG5cbiAgLy8gRGVib3VuY2UgdHJhbnNjcmlwdCBzZWFyY2ggZm9yIHBlcmZvcm1hbmNlICh0aXRsZSBzZWFyY2ggaXMgaW5zdGFudClcbiAgY29uc3QgZGVmZXJyZWRTZWFyY2hRdWVyeSA9IFJlYWN0LnVzZURlZmVycmVkVmFsdWUoc2VhcmNoUXVlcnkpXG5cbiAgLy8gQWRkaXRpb25hbCBkZWJvdW5jZSBmb3IgZGVlcCBzZWFyY2ggLSB3YWl0IDMwMG1zIGFmdGVyIHR5cGluZyBzdG9wc1xuICBjb25zdCBbZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5LCBzZXREZWJvdW5jZWREZWVwU2VhcmNoUXVlcnldID1cbiAgICBSZWFjdC51c2VTdGF0ZSgnJylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRlZmVycmVkU2VhcmNoUXVlcnkpIHtcbiAgICAgIHNldERlYm91bmNlZERlZXBTZWFyY2hRdWVyeSgnJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KFxuICAgICAgc2V0RGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5LFxuICAgICAgMzAwLFxuICAgICAgZGVmZXJyZWRTZWFyY2hRdWVyeSxcbiAgICApXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG4gIH0sIFtkZWZlcnJlZFNlYXJjaFF1ZXJ5XSlcblxuICAvLyBTdGF0ZSBmb3IgYXN5bmMgZGVlcCBzZWFyY2ggcmVzdWx0c1xuICBjb25zdCBbZGVlcFNlYXJjaFJlc3VsdHMsIHNldERlZXBTZWFyY2hSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPHtcbiAgICByZXN1bHRzOiBBcnJheTx7IGxvZzogTG9nT3B0aW9uOyBzY29yZT86IG51bWJlcjsgc2VhcmNoYWJsZVRleHQ6IHN0cmluZyB9PlxuICAgIHF1ZXJ5OiBzdHJpbmdcbiAgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtpc1NlYXJjaGluZywgc2V0SXNTZWFyY2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIGdldEJyYW5jaCgpLnRoZW4oYnJhbmNoID0+IHNldEN1cnJlbnRCcmFuY2goYnJhbmNoKSlcbiAgICB2b2lkIGdldFdvcmt0cmVlUGF0aHMoY3VycmVudEN3ZCkudGhlbihwYXRocyA9PiB7XG4gICAgICBzZXRIYXNNdWx0aXBsZVdvcmt0cmVlcyhwYXRocy5sZW5ndGggPiAxKVxuICAgIH0pXG4gIH0sIFtjdXJyZW50Q3dkXSlcblxuICAvLyBNZW1vaXplIHNlYXJjaGFibGUgdGV4dCBleHRyYWN0aW9uIC0gb25seSByZWNvbXB1dGUgd2hlbiBsb2dzIGNoYW5nZVxuICBjb25zdCBzZWFyY2hhYmxlVGV4dEJ5TG9nID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBuZXcgTWFwKGxvZ3MubWFwKGxvZyA9PiBbbG9nLCBidWlsZFNlYXJjaGFibGVUZXh0KGxvZyldKSksXG4gICAgW2xvZ3NdLFxuICApXG5cbiAgLy8gUHJlLWJ1aWxkIEZ1c2UgaW5kZXggb25jZSB3aGVuIGxvZ3MgY2hhbmdlIChub3Qgb24gZXZlcnkgc2VhcmNoIHF1ZXJ5KVxuICBjb25zdCBmdXNlSW5kZXggPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWlzRGVlcFNlYXJjaEVuYWJsZWQpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBsb2dzV2l0aFRleHQgPSBsb2dzXG4gICAgICAubWFwKGxvZyA9PiAoe1xuICAgICAgICBsb2csXG4gICAgICAgIHNlYXJjaGFibGVUZXh0OiBzZWFyY2hhYmxlVGV4dEJ5TG9nLmdldChsb2cpID8/ICcnLFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWFyY2hhYmxlVGV4dClcblxuICAgIHJldHVybiBuZXcgRnVzZShsb2dzV2l0aFRleHQsIHtcbiAgICAgIGtleXM6IFsnc2VhcmNoYWJsZVRleHQnXSxcbiAgICAgIHRocmVzaG9sZDogRlVTRV9USFJFU0hPTEQsXG4gICAgICBpZ25vcmVMb2NhdGlvbjogdHJ1ZSxcbiAgICAgIGluY2x1ZGVTY29yZTogdHJ1ZSxcbiAgICB9KVxuICB9LCBbbG9ncywgc2VhcmNoYWJsZVRleHRCeUxvZywgaXNEZWVwU2VhcmNoRW5hYmxlZF0pXG5cbiAgLy8gQ29tcHV0ZSB1bmlxdWUgdGFncyBmcm9tIGxvZ3MgKGJlZm9yZSBhbnkgZmlsdGVyaW5nKVxuICBjb25zdCB1bmlxdWVUYWdzID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRVbmlxdWVUYWdzKGxvZ3MpLCBbbG9nc10pXG4gIGNvbnN0IGhhc1RhZ3MgPSB1bmlxdWVUYWdzLmxlbmd0aCA+IDBcbiAgY29uc3QgdGFnVGFicyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gKGhhc1RhZ3MgPyBbJ0FsbCcsIC4uLnVuaXF1ZVRhZ3NdIDogW10pLFxuICAgIFtoYXNUYWdzLCB1bmlxdWVUYWdzXSxcbiAgKVxuXG4gIC8vIENsYW1wIG91dC1vZi1ib3VuZHMgaW5kZXggKGUuZy4sIGFmdGVyIGxvZ3MgY2hhbmdlKSB3aXRob3V0IGFuIGV4dHJhIHJlbmRlclxuICBjb25zdCBlZmZlY3RpdmVUYWdJbmRleCA9XG4gICAgdGFnVGFicy5sZW5ndGggPiAwICYmIHNlbGVjdGVkVGFnSW5kZXggPCB0YWdUYWJzLmxlbmd0aFxuICAgICAgPyBzZWxlY3RlZFRhZ0luZGV4XG4gICAgICA6IDBcbiAgY29uc3Qgc2VsZWN0ZWRUYWIgPSB0YWdUYWJzW2VmZmVjdGl2ZVRhZ0luZGV4XVxuICBjb25zdCB0YWdGaWx0ZXIgPSBzZWxlY3RlZFRhYiA9PT0gJ0FsbCcgPyB1bmRlZmluZWQgOiBzZWxlY3RlZFRhYlxuXG4gIC8vIFRhZyB0YWJzIGFyZSBub3cgYSBzaW5nbGUgbGluZSB3aXRoIGhvcml6b250YWwgc2Nyb2xsaW5nXG4gIGNvbnN0IHRhZ1RhYnNMaW5lcyA9IGhhc1RhZ3MgPyAxIDogMFxuXG4gIC8vIEJhc2UgZmlsdGVyaW5nIChpbnN0YW50KSAtIGFwcGxpZXMgdGFnLCBicmFuY2gsIGFuZCByZXN1bWUgZmlsdGVyc1xuICBjb25zdCBiYXNlRmlsdGVyZWRMb2dzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IGZpbHRlcmVkID0gbG9nc1xuICAgIGlmIChpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkKSB7XG4gICAgICBmaWx0ZXJlZCA9IGxvZ3MuZmlsdGVyKGxvZyA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWQoKVxuICAgICAgICBjb25zdCBsb2dTZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWRGcm9tTG9nKGxvZylcbiAgICAgICAgY29uc3QgaXNDdXJyZW50U2Vzc2lvbiA9XG4gICAgICAgICAgY3VycmVudFNlc3Npb25JZCAmJiBsb2dTZXNzaW9uSWQgPT09IGN1cnJlbnRTZXNzaW9uSWRcbiAgICAgICAgLy8gQWx3YXlzIHNob3cgY3VycmVudCBzZXNzaW9uXG4gICAgICAgIGlmIChpc0N1cnJlbnRTZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgc2hvdyBzZXNzaW9ucyB3aXRoIGN1c3RvbSB0aXRsZXMgKGUuZy4sIGxvb3AgbW9kZSBzZXNzaW9ucylcbiAgICAgICAgaWYgKGxvZy5jdXN0b21UaXRsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGZ1bGwgbG9ncywgY2hlY2sgbWVzc2FnZXMgYXJyYXlcbiAgICAgICAgY29uc3QgZnJvbU1lc3NhZ2VzID0gZ2V0Rmlyc3RNZWFuaW5nZnVsVXNlck1lc3NhZ2VUZXh0Q29udGVudChcbiAgICAgICAgICBsb2cubWVzc2FnZXMsXG4gICAgICAgIClcbiAgICAgICAgaWYgKGZyb21NZXNzYWdlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxsIGxvZ3MgcmVhY2hpbmcgdGhpcyBjb21wb25lbnQgYXJlIGVucmljaGVkIOKAlCBpbmNsdWRlIGlmXG4gICAgICAgIC8vIHRoZXkgaGF2ZSBhIHByb21wdCBvciBjdXN0b20gdGl0bGVcbiAgICAgICAgaWYgKGxvZy5maXJzdFByb21wdCB8fCBsb2cuY3VzdG9tVGl0bGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0YWcgZmlsdGVyIGlmIHNwZWNpZmllZFxuICAgIGlmICh0YWdGaWx0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIobG9nID0+IGxvZy50YWcgPT09IHRhZ0ZpbHRlcilcbiAgICB9XG5cbiAgICBpZiAoYnJhbmNoRmlsdGVyRW5hYmxlZCAmJiBjdXJyZW50QnJhbmNoKSB7XG4gICAgICBmaWx0ZXJlZCA9IGZpbHRlcmVkLmZpbHRlcihsb2cgPT4gbG9nLmdpdEJyYW5jaCA9PT0gY3VycmVudEJyYW5jaClcbiAgICB9XG5cbiAgICBpZiAoaGFzTXVsdGlwbGVXb3JrdHJlZXMgJiYgIXNob3dBbGxXb3JrdHJlZXMpIHtcbiAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKGxvZyA9PiBsb2cucHJvamVjdFBhdGggPT09IGN1cnJlbnRDd2QpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkXG4gIH0sIFtcbiAgICBsb2dzLFxuICAgIGlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQsXG4gICAgdGFnRmlsdGVyLFxuICAgIGJyYW5jaEZpbHRlckVuYWJsZWQsXG4gICAgY3VycmVudEJyYW5jaCxcbiAgICBoYXNNdWx0aXBsZVdvcmt0cmVlcyxcbiAgICBzaG93QWxsV29ya3RyZWVzLFxuICAgIGN1cnJlbnRDd2QsXG4gIF0pXG5cbiAgLy8gSW5zdGFudCB0aXRsZS9icmFuY2gvdGFnL1BSIGZpbHRlcmluZyAocnVucyBvbiBldmVyeSBrZXlzdHJva2UsIGJ1dCBpcyBmYXN0KVxuICBjb25zdCB0aXRsZUZpbHRlcmVkTG9ncyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc2VhcmNoUXVlcnkpIHtcbiAgICAgIHJldHVybiBiYXNlRmlsdGVyZWRMb2dzXG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBiYXNlRmlsdGVyZWRMb2dzLmZpbHRlcihsb2cgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheWVkVGl0bGUgPSBnZXRMb2dEaXNwbGF5VGl0bGUobG9nKS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCBicmFuY2ggPSAobG9nLmdpdEJyYW5jaCB8fCAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdGFnID0gKGxvZy50YWcgfHwgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHBySW5mbyA9IGxvZy5wck51bWJlclxuICAgICAgICA/IGBwciAjJHtsb2cucHJOdW1iZXJ9ICR7bG9nLnByUmVwb3NpdG9yeSB8fCAnJ31gLnRvTG93ZXJDYXNlKClcbiAgICAgICAgOiAnJ1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZGlzcGxheWVkVGl0bGUuaW5jbHVkZXMocXVlcnkpIHx8XG4gICAgICAgIGJyYW5jaC5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgICAgdGFnLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgICBwckluZm8uaW5jbHVkZXMocXVlcnkpXG4gICAgICApXG4gICAgfSlcbiAgfSwgW2Jhc2VGaWx0ZXJlZExvZ3MsIHNlYXJjaFF1ZXJ5XSlcblxuICAvLyBTaG93IHNlYXJjaGluZyBpbmRpY2F0b3Igd2hlbiBxdWVyeSBpcyBwZW5kaW5nIGRlYm91bmNlXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaXNEZWVwU2VhcmNoRW5hYmxlZCAmJlxuICAgICAgZGVmZXJyZWRTZWFyY2hRdWVyeSAmJlxuICAgICAgZGVmZXJyZWRTZWFyY2hRdWVyeSAhPT0gZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5XG4gICAgKSB7XG4gICAgICBzZXRJc1NlYXJjaGluZyh0cnVlKVxuICAgIH1cbiAgfSwgW2RlZmVycmVkU2VhcmNoUXVlcnksIGRlYm91bmNlZERlZXBTZWFyY2hRdWVyeSwgaXNEZWVwU2VhcmNoRW5hYmxlZF0pXG5cbiAgLy8gQXN5bmMgZGVlcCBzZWFyY2ggZWZmZWN0IC0gcnVucyBhZnRlciAzMDBtcyBkZWJvdW5jZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNEZWVwU2VhcmNoRW5hYmxlZCB8fCAhZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5IHx8ICFmdXNlSW5kZXgpIHtcbiAgICAgIHNldERlZXBTZWFyY2hSZXN1bHRzKG51bGwpXG4gICAgICBzZXRJc1NlYXJjaGluZyhmYWxzZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFVzZSBzZXRUaW1lb3V0KDApIHRvIHlpZWxkIHRvIHRoZSBldmVudCBsb29wIC0gcHJldmVudHMgVUkgZnJlZXplXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgIChcbiAgICAgICAgZnVzZUluZGV4LFxuICAgICAgICBkZWJvdW5jZWREZWVwU2VhcmNoUXVlcnksXG4gICAgICAgIHNldERlZXBTZWFyY2hSZXN1bHRzLFxuICAgICAgICBzZXRJc1NlYXJjaGluZyxcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZnVzZUluZGV4LnNlYXJjaChkZWJvdW5jZWREZWVwU2VhcmNoUXVlcnkpXG5cbiAgICAgICAgLy8gU29ydCBieSBkYXRlIChuZXdlc3QgZmlyc3QpLCB3aXRoIHJlbGV2YW5jZSBhcyB0aWUtYnJlYWtlciB3aXRoaW4gc2FtZSBtaW51dGVcbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgY29uc3QgYVRpbWUgPSBuZXcgRGF0ZShhLml0ZW0ubG9nLm1vZGlmaWVkKS5nZXRUaW1lKClcbiAgICAgICAgICBjb25zdCBiVGltZSA9IG5ldyBEYXRlKGIuaXRlbS5sb2cubW9kaWZpZWQpLmdldFRpbWUoKVxuICAgICAgICAgIGNvbnN0IHRpbWVEaWZmID0gYlRpbWUgLSBhVGltZVxuICAgICAgICAgIGlmIChNYXRoLmFicyh0aW1lRGlmZikgPiBEQVRFX1RJRV9USFJFU0hPTERfTVMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lRGlmZlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXaXRoaW4gc2FtZSBtaW51dGUgd2luZG93LCB1c2UgcmVsZXZhbmNlIHNjb3JlIChsb3dlciBpcyBiZXR0ZXIpXG4gICAgICAgICAgcmV0dXJuIChhLnNjb3JlID8/IDEpIC0gKGIuc2NvcmUgPz8gMSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZXREZWVwU2VhcmNoUmVzdWx0cyh7XG4gICAgICAgICAgcmVzdWx0czogcmVzdWx0cy5tYXAociA9PiAoe1xuICAgICAgICAgICAgbG9nOiByLml0ZW0ubG9nLFxuICAgICAgICAgICAgc2NvcmU6IHIuc2NvcmUsXG4gICAgICAgICAgICBzZWFyY2hhYmxlVGV4dDogci5pdGVtLnNlYXJjaGFibGVUZXh0LFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBxdWVyeTogZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5LFxuICAgICAgICB9KVxuICAgICAgICBzZXRJc1NlYXJjaGluZyhmYWxzZSlcbiAgICAgIH0sXG4gICAgICAwLFxuICAgICAgZnVzZUluZGV4LFxuICAgICAgZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5LFxuICAgICAgc2V0RGVlcFNlYXJjaFJlc3VsdHMsXG4gICAgICBzZXRJc1NlYXJjaGluZyxcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICB9XG4gIH0sIFtkZWJvdW5jZWREZWVwU2VhcmNoUXVlcnksIGZ1c2VJbmRleCwgaXNEZWVwU2VhcmNoRW5hYmxlZF0pXG5cbiAgLy8gTWVyZ2UgdGl0bGUgbWF0Y2hlcyB3aXRoIGFzeW5jIGRlZXAgc2VhcmNoIHJlc3VsdHNcbiAgY29uc3QgeyBmaWx0ZXJlZExvZ3MsIHNuaXBwZXRzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzbmlwcGV0TWFwID0gbmV3IE1hcDxMb2dPcHRpb24sIFNuaXBwZXQ+KClcblxuICAgIC8vIFN0YXJ0IHdpdGggaW5zdGFudCB0aXRsZSBtYXRjaGVzXG4gICAgbGV0IGZpbHRlcmVkID0gdGl0bGVGaWx0ZXJlZExvZ3NcblxuICAgIC8vIE1lcmdlIGluIGRlZXAgc2VhcmNoIHJlc3VsdHMgaWYgYXZhaWxhYmxlIGFuZCBxdWVyeSBtYXRjaGVzXG4gICAgaWYgKFxuICAgICAgZGVlcFNlYXJjaFJlc3VsdHMgJiZcbiAgICAgIGRlYm91bmNlZERlZXBTZWFyY2hRdWVyeSAmJlxuICAgICAgZGVlcFNlYXJjaFJlc3VsdHMucXVlcnkgPT09IGRlYm91bmNlZERlZXBTZWFyY2hRdWVyeVxuICAgICkge1xuICAgICAgLy8gRXh0cmFjdCBzbmlwcGV0cyBmcm9tIGRlZXAgc2VhcmNoIHJlc3VsdHNcbiAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIGRlZXBTZWFyY2hSZXN1bHRzLnJlc3VsdHMpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2hhYmxlVGV4dCkge1xuICAgICAgICAgIGNvbnN0IHNuaXBwZXQgPSBleHRyYWN0U25pcHBldChcbiAgICAgICAgICAgIHJlc3VsdC5zZWFyY2hhYmxlVGV4dCxcbiAgICAgICAgICAgIGRlYm91bmNlZERlZXBTZWFyY2hRdWVyeSxcbiAgICAgICAgICAgIFNOSVBQRVRfQ09OVEVYVF9DSEFSUyxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHNuaXBwZXQpIHtcbiAgICAgICAgICAgIHNuaXBwZXRNYXAuc2V0KHJlc3VsdC5sb2csIHNuaXBwZXQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0cmFuc2NyaXB0LW9ubHkgbWF0Y2hlcyAobm90IGFscmVhZHkgaW4gdGl0bGUgbWF0Y2hlcylcbiAgICAgIGNvbnN0IHRpdGxlTWF0Y2hJZHMgPSBuZXcgU2V0KGZpbHRlcmVkLm1hcChsb2cgPT4gbG9nLm1lc3NhZ2VzWzBdPy51dWlkKSlcbiAgICAgIGNvbnN0IHRyYW5zY3JpcHRPbmx5TWF0Y2hlcyA9IGRlZXBTZWFyY2hSZXN1bHRzLnJlc3VsdHNcbiAgICAgICAgLm1hcChyID0+IHIubG9nKVxuICAgICAgICAuZmlsdGVyKGxvZyA9PiAhdGl0bGVNYXRjaElkcy5oYXMobG9nLm1lc3NhZ2VzWzBdPy51dWlkKSlcbiAgICAgIGZpbHRlcmVkID0gWy4uLmZpbHRlcmVkLCAuLi50cmFuc2NyaXB0T25seU1hdGNoZXNdXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZmlsdGVyZWRMb2dzOiBmaWx0ZXJlZCwgc25pcHBldHM6IHNuaXBwZXRNYXAgfVxuICB9LCBbdGl0bGVGaWx0ZXJlZExvZ3MsIGRlZXBTZWFyY2hSZXN1bHRzLCBkZWJvdW5jZWREZWVwU2VhcmNoUXVlcnldKVxuXG4gIC8vIFVzZSBhZ2VudGljIHNlYXJjaCByZXN1bHRzIHdoZW4gYXZhaWxhYmxlIGFuZCBub24tZW1wdHksIG90aGVyd2lzZSB1c2UgcmVndWxhciBmaWx0ZXJlZCBsb2dzXG4gIGNvbnN0IGRpc3BsYXllZExvZ3MgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzID09PSAncmVzdWx0cycgJiZcbiAgICAgIGFnZW50aWNTZWFyY2hTdGF0ZS5yZXN1bHRzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBhZ2VudGljU2VhcmNoU3RhdGUucmVzdWx0c1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRMb2dzXG4gIH0sIFthZ2VudGljU2VhcmNoU3RhdGUsIGZpbHRlcmVkTG9nc10pXG5cbiAgLy8gQ2FsY3VsYXRlIGF2YWlsYWJsZSB3aWR0aCBmb3IgdGhlIHN1bW1hcnkgdGV4dFxuICBjb25zdCBtYXhMYWJlbFdpZHRoID0gTWF0aC5tYXgoMzAsIGNvbHVtbnMgLSA0KVxuXG4gIC8vIEJ1aWxkIHRyZWUgbm9kZXMgZm9yIGdyb3VwZWQgdmlld1xuICBjb25zdCB0cmVlTm9kZXMgPSBSZWFjdC51c2VNZW1vPExvZ1RyZWVOb2RlW10+KCgpID0+IHtcbiAgICBpZiAoIWlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb25Hcm91cHMgPSBncm91cExvZ3NCeVNlc3Npb25JZChkaXNwbGF5ZWRMb2dzKVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20oc2Vzc2lvbkdyb3Vwcy5lbnRyaWVzKCkpLm1hcChcbiAgICAgIChbc2Vzc2lvbklkLCBncm91cExvZ3NdKTogTG9nVHJlZU5vZGUgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RMb2cgPSBncm91cExvZ3NbMF0hXG4gICAgICAgIGNvbnN0IGluZGV4SW5GaWx0ZXJlZCA9IGRpc3BsYXllZExvZ3MuaW5kZXhPZihsYXRlc3RMb2cpXG4gICAgICAgIGNvbnN0IHNuaXBwZXQgPSBzbmlwcGV0cy5nZXQobGF0ZXN0TG9nKVxuICAgICAgICBjb25zdCBzbmlwcGV0U3RyID0gc25pcHBldFxuICAgICAgICAgID8gZm9ybWF0U25pcHBldChzbmlwcGV0LCBoaWdobGlnaHRDb2xvcilcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgICBpZiAoZ3JvdXBMb2dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIFNpbmdsZSBsb2cgLSBubyBjaGlsZHJlblxuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYnVpbGRMb2dNZXRhZGF0YShsYXRlc3RMb2csIHtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0UGF0aDogc2hvd0FsbFByb2plY3RzLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBgbG9nOiR7c2Vzc2lvbklkfTowYCxcbiAgICAgICAgICAgIHZhbHVlOiB7IGxvZzogbGF0ZXN0TG9nLCBpbmRleEluRmlsdGVyZWQgfSxcbiAgICAgICAgICAgIGxhYmVsOiBidWlsZExvZ0xhYmVsKGxhdGVzdExvZywgbWF4TGFiZWxXaWR0aCksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc25pcHBldFN0ciA/IGAke21ldGFkYXRhfVxcbiAgJHtzbmlwcGV0U3RyfWAgOiBtZXRhZGF0YSxcbiAgICAgICAgICAgIGRpbURlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE11bHRpcGxlIGxvZ3MgLSBwYXJlbnQgd2l0aCBjaGlsZHJlblxuICAgICAgICBjb25zdCBmb3JrQ291bnQgPSBncm91cExvZ3MubGVuZ3RoIC0gMVxuICAgICAgICBjb25zdCBjaGlsZHJlbjogTG9nVHJlZU5vZGVbXSA9IGdyb3VwTG9ncy5zbGljZSgxKS5tYXAoKGxvZywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZEluZGV4SW5GaWx0ZXJlZCA9IGRpc3BsYXllZExvZ3MuaW5kZXhPZihsb2cpXG4gICAgICAgICAgY29uc3QgY2hpbGRTbmlwcGV0ID0gc25pcHBldHMuZ2V0KGxvZylcbiAgICAgICAgICBjb25zdCBjaGlsZFNuaXBwZXRTdHIgPSBjaGlsZFNuaXBwZXRcbiAgICAgICAgICAgID8gZm9ybWF0U25pcHBldChjaGlsZFNuaXBwZXQsIGhpZ2hsaWdodENvbG9yKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgY29uc3QgY2hpbGRNZXRhZGF0YSA9IGJ1aWxkTG9nTWV0YWRhdGEobG9nLCB7XG4gICAgICAgICAgICBpc0NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1Byb2plY3RQYXRoOiBzaG93QWxsUHJvamVjdHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGBsb2c6JHtzZXNzaW9uSWR9OiR7aW5kZXggKyAxfWAsXG4gICAgICAgICAgICB2YWx1ZTogeyBsb2csIGluZGV4SW5GaWx0ZXJlZDogY2hpbGRJbmRleEluRmlsdGVyZWQgfSxcbiAgICAgICAgICAgIGxhYmVsOiBidWlsZExvZ0xhYmVsKGxvZywgbWF4TGFiZWxXaWR0aCwgeyBpc0NoaWxkOiB0cnVlIH0pLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoaWxkU25pcHBldFN0clxuICAgICAgICAgICAgICA/IGAke2NoaWxkTWV0YWRhdGF9XFxuICAgICAgJHtjaGlsZFNuaXBwZXRTdHJ9YFxuICAgICAgICAgICAgICA6IGNoaWxkTWV0YWRhdGEsXG4gICAgICAgICAgICBkaW1EZXNjcmlwdGlvbjogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcGFyZW50TWV0YWRhdGEgPSBidWlsZExvZ01ldGFkYXRhKGxhdGVzdExvZywge1xuICAgICAgICAgIHNob3dQcm9qZWN0UGF0aDogc2hvd0FsbFByb2plY3RzLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBgZ3JvdXA6JHtzZXNzaW9uSWR9YCxcbiAgICAgICAgICB2YWx1ZTogeyBsb2c6IGxhdGVzdExvZywgaW5kZXhJbkZpbHRlcmVkIH0sXG4gICAgICAgICAgbGFiZWw6IGJ1aWxkTG9nTGFiZWwobGF0ZXN0TG9nLCBtYXhMYWJlbFdpZHRoLCB7XG4gICAgICAgICAgICBpc0dyb3VwSGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgZm9ya0NvdW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbmlwcGV0U3RyXG4gICAgICAgICAgICA/IGAke3BhcmVudE1ldGFkYXRhfVxcbiAgJHtzbmlwcGV0U3RyfWBcbiAgICAgICAgICAgIDogcGFyZW50TWV0YWRhdGEsXG4gICAgICAgICAgZGltRGVzY3JpcHRpb246IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKVxuICB9LCBbXG4gICAgaXNSZXN1bWVXaXRoUmVuYW1lRW5hYmxlZCxcbiAgICBkaXNwbGF5ZWRMb2dzLFxuICAgIG1heExhYmVsV2lkdGgsXG4gICAgc2hvd0FsbFByb2plY3RzLFxuICAgIHNuaXBwZXRzLFxuICAgIGhpZ2hsaWdodENvbG9yLFxuICBdKVxuXG4gIC8vIEJ1aWxkIG9wdGlvbnMgZm9yIG9sZCBmbGF0IGxpc3Qgdmlld1xuICBjb25zdCBmbGF0T3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTG9ncy5tYXAoKGxvZywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhd1N1bW1hcnkgPSBnZXRMb2dEaXNwbGF5VGl0bGUobG9nKVxuICAgICAgY29uc3Qgc3VtbWFyeVdpdGhTaWRlY2hhaW4gPVxuICAgICAgICByYXdTdW1tYXJ5ICsgKGxvZy5pc1NpZGVjaGFpbiA/ICcgKHNpZGVjaGFpbiknIDogJycpXG4gICAgICBjb25zdCBzdW1tYXJ5ID0gbm9ybWFsaXplQW5kVHJ1bmNhdGVUb1dpZHRoKFxuICAgICAgICBzdW1tYXJ5V2l0aFNpZGVjaGFpbixcbiAgICAgICAgbWF4TGFiZWxXaWR0aCxcbiAgICAgIClcblxuICAgICAgY29uc3QgYmFzZURlc2NyaXB0aW9uID0gZm9ybWF0TG9nTWV0YWRhdGEobG9nKVxuICAgICAgY29uc3QgcHJvamVjdFN1ZmZpeCA9XG4gICAgICAgIHNob3dBbGxQcm9qZWN0cyAmJiBsb2cucHJvamVjdFBhdGggPyBgIMK3ICR7bG9nLnByb2plY3RQYXRofWAgOiAnJ1xuICAgICAgY29uc3Qgc25pcHBldCA9IHNuaXBwZXRzLmdldChsb2cpXG4gICAgICBjb25zdCBzbmlwcGV0U3RyID0gc25pcHBldCA/IGZvcm1hdFNuaXBwZXQoc25pcHBldCwgaGlnaGxpZ2h0Q29sb3IpIDogbnVsbFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogc3VtbWFyeSxcbiAgICAgICAgZGVzY3JpcHRpb246IHNuaXBwZXRTdHJcbiAgICAgICAgICA/IGAke2Jhc2VEZXNjcmlwdGlvbn0ke3Byb2plY3RTdWZmaXh9XFxuICAke3NuaXBwZXRTdHJ9YFxuICAgICAgICAgIDogYmFzZURlc2NyaXB0aW9uICsgcHJvamVjdFN1ZmZpeCxcbiAgICAgICAgZGltRGVzY3JpcHRpb246IHRydWUsXG4gICAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtcbiAgICBpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkLFxuICAgIGRpc3BsYXllZExvZ3MsXG4gICAgaGlnaGxpZ2h0Q29sb3IsXG4gICAgbWF4TGFiZWxXaWR0aCxcbiAgICBzaG93QWxsUHJvamVjdHMsXG4gICAgc25pcHBldHMsXG4gIF0pXG5cbiAgLy8gRGVyaXZlIHRoZSBmb2N1c2VkIGxvZyBmcm9tIGZvY3VzZWROb2RlXG4gIGNvbnN0IGZvY3VzZWRMb2cgPSBmb2N1c2VkTm9kZT8udmFsdWUubG9nID8/IG51bGxcblxuICBjb25zdCBnZXRFeHBhbmRDb2xsYXBzZUhpbnQgPSAoKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQgfHwgIWZvY3VzZWRMb2cpIHJldHVybiAnJ1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZEZyb21Mb2coZm9jdXNlZExvZylcbiAgICBpZiAoIXNlc3Npb25JZCkgcmV0dXJuICcnXG5cbiAgICBjb25zdCBzZXNzaW9uTG9ncyA9IGRpc3BsYXllZExvZ3MuZmlsdGVyKFxuICAgICAgbG9nID0+IGdldFNlc3Npb25JZEZyb21Mb2cobG9nKSA9PT0gc2Vzc2lvbklkLFxuICAgIClcbiAgICBjb25zdCBoYXNNdWx0aXBsZUxvZ3MgPSBzZXNzaW9uTG9ncy5sZW5ndGggPiAxXG5cbiAgICBpZiAoIWhhc011bHRpcGxlTG9ncykgcmV0dXJuICcnXG5cbiAgICBjb25zdCBpc0V4cGFuZGVkID0gZXhwYW5kZWRHcm91cFNlc3Npb25JZHMuaGFzKHNlc3Npb25JZClcbiAgICBjb25zdCBpc0NoaWxkTm9kZSA9IHNlc3Npb25Mb2dzLmluZGV4T2YoZm9jdXNlZExvZykgPiAwXG5cbiAgICBpZiAoaXNDaGlsZE5vZGUpIHtcbiAgICAgIHJldHVybiAn4oaQIHRvIGNvbGxhcHNlJ1xuICAgIH1cblxuICAgIHJldHVybiBpc0V4cGFuZGVkID8gJ+KGkCB0byBjb2xsYXBzZScgOiAn4oaSIHRvIGV4cGFuZCdcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbmFtZVN1Ym1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBmb2N1c2VkTG9nID8gZ2V0U2Vzc2lvbklkRnJvbUxvZyhmb2N1c2VkTG9nKSA6IHVuZGVmaW5lZFxuICAgIGlmICghZm9jdXNlZExvZyB8fCAhc2Vzc2lvbklkKSB7XG4gICAgICBzZXRWaWV3TW9kZSgnbGlzdCcpXG4gICAgICBzZXRSZW5hbWVWYWx1ZSgnJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyZW5hbWVWYWx1ZS50cmltKCkpIHtcbiAgICAgIC8vIFBhc3MgZnVsbFBhdGggZm9yIGNyb3NzLXByb2plY3Qgc2Vzc2lvbnMgKGRpZmZlcmVudCB3b3JrdHJlZXMpXG4gICAgICBhd2FpdCBzYXZlQ3VzdG9tVGl0bGUoc2Vzc2lvbklkLCByZW5hbWVWYWx1ZS50cmltKCksIGZvY3VzZWRMb2cuZnVsbFBhdGgpXG4gICAgICBpZiAoaXNSZXN1bWVXaXRoUmVuYW1lRW5hYmxlZCAmJiBvbkxvZ3NDaGFuZ2VkKSB7XG4gICAgICAgIG9uTG9nc0NoYW5nZWQoKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRWaWV3TW9kZSgnbGlzdCcpXG4gICAgc2V0UmVuYW1lVmFsdWUoJycpXG4gIH0sIFtmb2N1c2VkTG9nLCByZW5hbWVWYWx1ZSwgb25Mb2dzQ2hhbmdlZCwgaXNSZXN1bWVXaXRoUmVuYW1lRW5hYmxlZF0pXG5cbiAgY29uc3QgZXhpdFNlYXJjaE1vZGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Vmlld01vZGUoJ2xpc3QnKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3NlYXJjaF90b2dnbGVkJywgeyBlbmFibGVkOiBmYWxzZSB9KVxuICB9LCBbXSlcblxuICBjb25zdCBlbnRlclNlYXJjaE1vZGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Vmlld01vZGUoJ3NlYXJjaCcpXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fc2VhcmNoX3RvZ2dsZWQnLCB7IGVuYWJsZWQ6IHRydWUgfSlcbiAgfSwgW10pXG5cbiAgLy8gSGFuZGxlciBmb3IgdHJpZ2dlcmluZyBhZ2VudGljIHNlYXJjaFxuICBjb25zdCBoYW5kbGVBZ2VudGljU2VhcmNoID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VhcmNoUXVlcnkudHJpbSgpIHx8ICFvbkFnZW50aWNTZWFyY2ggfHwgIWlzQWdlbnRpY1NlYXJjaEVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEFib3J0IGFueSBwcmV2aW91cyBzZWFyY2hcbiAgICBhZ2VudGljU2VhcmNoQWJvcnRSZWYuY3VycmVudD8uYWJvcnQoKVxuICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIGFnZW50aWNTZWFyY2hBYm9ydFJlZi5jdXJyZW50ID0gYWJvcnRDb250cm9sbGVyXG5cbiAgICBzZXRBZ2VudGljU2VhcmNoU3RhdGUoeyBzdGF0dXM6ICdzZWFyY2hpbmcnIH0pXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2FnZW50aWNfc2VhcmNoX3N0YXJ0ZWQnLCB7XG4gICAgICBxdWVyeV9sZW5ndGg6IHNlYXJjaFF1ZXJ5Lmxlbmd0aCxcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBvbkFnZW50aWNTZWFyY2goXG4gICAgICAgIHNlYXJjaFF1ZXJ5LFxuICAgICAgICBsb2dzLFxuICAgICAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgKVxuICAgICAgLy8gQ2hlY2sgaWYgYWJvcnRlZCBiZWZvcmUgdXBkYXRpbmcgc3RhdGVcbiAgICAgIGlmIChhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZXRBZ2VudGljU2VhcmNoU3RhdGUoeyBzdGF0dXM6ICdyZXN1bHRzJywgcmVzdWx0cywgcXVlcnk6IHNlYXJjaFF1ZXJ5IH0pXG4gICAgICBsb2dFdmVudCgndGVuZ3VfYWdlbnRpY19zZWFyY2hfY29tcGxldGVkJywge1xuICAgICAgICBxdWVyeV9sZW5ndGg6IHNlYXJjaFF1ZXJ5Lmxlbmd0aCxcbiAgICAgICAgcmVzdWx0c19jb3VudDogcmVzdWx0cy5sZW5ndGgsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBEb24ndCBzaG93IGVycm9yIGZvciBhYm9ydGVkIHJlcXVlc3RzXG4gICAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0QWdlbnRpY1NlYXJjaFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdTZWFyY2ggZmFpbGVkJyxcbiAgICAgIH0pXG4gICAgICBsb2dFdmVudCgndGVuZ3VfYWdlbnRpY19zZWFyY2hfZXJyb3InLCB7XG4gICAgICAgIHF1ZXJ5X2xlbmd0aDogc2VhcmNoUXVlcnkubGVuZ3RoLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtzZWFyY2hRdWVyeSwgb25BZ2VudGljU2VhcmNoLCBpc0FnZW50aWNTZWFyY2hFbmFibGVkLCBsb2dzXSlcblxuICAvLyBDbGVhciBhZ2VudGljIHNlYXJjaCByZXN1bHRzL2Vycm9yIHdoZW4gcXVlcnkgY2hhbmdlc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgIT09ICdpZGxlJyAmJlxuICAgICAgYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyAhPT0gJ3NlYXJjaGluZydcbiAgICApIHtcbiAgICAgIC8vIENsZWFyIGlmIHRoZSBxdWVyeSBoYXMgY2hhbmdlZCBmcm9tIHRoZSBvbmUgdXNlZCBmb3IgcmVzdWx0cy9lcnJvclxuICAgICAgaWYgKFxuICAgICAgICAoYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyA9PT0gJ3Jlc3VsdHMnICYmXG4gICAgICAgICAgYWdlbnRpY1NlYXJjaFN0YXRlLnF1ZXJ5ICE9PSBzZWFyY2hRdWVyeSkgfHxcbiAgICAgICAgYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJ1xuICAgICAgKSB7XG4gICAgICAgIHNldEFnZW50aWNTZWFyY2hTdGF0ZSh7IHN0YXR1czogJ2lkbGUnIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbc2VhcmNoUXVlcnksIGFnZW50aWNTZWFyY2hTdGF0ZV0pXG5cbiAgLy8gQ2xlYW51cDogYWJvcnQgYW55IGluLXByb2dyZXNzIGFnZW50aWMgc2VhcmNoIG9uIHVubW91bnRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYWdlbnRpY1NlYXJjaEFib3J0UmVmLmN1cnJlbnQ/LmFib3J0KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIEZvY3VzIGZpcnN0IGl0ZW0gd2hlbiBhZ2VudGljIHNlYXJjaCBjb21wbGV0ZXMgd2l0aCByZXN1bHRzXG4gIGNvbnN0IHByZXZBZ2VudGljU3RhdHVzUmVmID0gUmVhY3QudXNlUmVmKGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJldlN0YXR1cyA9IHByZXZBZ2VudGljU3RhdHVzUmVmLmN1cnJlbnRcbiAgICBwcmV2QWdlbnRpY1N0YXR1c1JlZi5jdXJyZW50ID0gYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1c1xuXG4gICAgLy8gV2hlbiBzZWFyY2gganVzdCBjb21wbGV0ZWQsIGZvY3VzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0XG4gICAgaWYgKHByZXZTdGF0dXMgPT09ICdzZWFyY2hpbmcnICYmIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgPT09ICdyZXN1bHRzJykge1xuICAgICAgaWYgKGlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQgJiYgdHJlZU5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0Rm9jdXNlZE5vZGUodHJlZU5vZGVzWzBdISlcbiAgICAgIH0gZWxzZSBpZiAoIWlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQgJiYgZGlzcGxheWVkTG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TG9nID0gZGlzcGxheWVkTG9nc1swXSFcbiAgICAgICAgc2V0Rm9jdXNlZE5vZGUoe1xuICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgdmFsdWU6IHsgbG9nOiBmaXJzdExvZywgaW5kZXhJbkZpbHRlcmVkOiAwIH0sXG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW1xuICAgIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMsXG4gICAgaXNSZXN1bWVXaXRoUmVuYW1lRW5hYmxlZCxcbiAgICB0cmVlTm9kZXMsXG4gICAgZGlzcGxheWVkTG9ncyxcbiAgXSlcblxuICBjb25zdCBoYW5kbGVGbGF0T3B0aW9uc1NlbGVjdEZvY3VzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICAgICAgY29uc3QgbG9nID0gZGlzcGxheWVkTG9nc1tpbmRleF1cbiAgICAgIGlmICghbG9nIHx8IHByZXZGb2N1c2VkSWRSZWYuY3VycmVudCA9PT0gaW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHByZXZGb2N1c2VkSWRSZWYuY3VycmVudCA9IGluZGV4LnRvU3RyaW5nKClcbiAgICAgIHNldEZvY3VzZWROb2RlKHtcbiAgICAgICAgaWQ6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiB7IGxvZywgaW5kZXhJbkZpbHRlcmVkOiBpbmRleCB9LFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICB9KVxuICAgICAgc2V0Rm9jdXNlZEluZGV4KGluZGV4ICsgMSlcbiAgICB9LFxuICAgIFtkaXNwbGF5ZWRMb2dzXSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVRyZWVTZWxlY3RGb2N1cyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChub2RlOiBMb2dUcmVlTm9kZSkgPT4ge1xuICAgICAgc2V0Rm9jdXNlZE5vZGUobm9kZSlcbiAgICAgIC8vIFVwZGF0ZSBmb2N1c2VkIGluZGV4IGZvciBzY3JvbGwgcG9zaXRpb24gZGlzcGxheVxuICAgICAgY29uc3QgaW5kZXggPSBkaXNwbGF5ZWRMb2dzLmZpbmRJbmRleChcbiAgICAgICAgbG9nID0+IGdldFNlc3Npb25JZEZyb21Mb2cobG9nKSA9PT0gZ2V0U2Vzc2lvbklkRnJvbUxvZyhub2RlLnZhbHVlLmxvZyksXG4gICAgICApXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBzZXRGb2N1c2VkSW5kZXgoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2Rpc3BsYXllZExvZ3NdLFxuICApXG5cbiAgLy8gRXNjYXBlIHRvIGFib3J0IGFnZW50aWMgc2VhcmNoIGluIHByb2dyZXNzXG4gIHVzZUtleWJpbmRpbmcoXG4gICAgJ2NvbmZpcm06bm8nLFxuICAgICgpID0+IHtcbiAgICAgIGFnZW50aWNTZWFyY2hBYm9ydFJlZi5jdXJyZW50Py5hYm9ydCgpXG4gICAgICBzZXRBZ2VudGljU2VhcmNoU3RhdGUoeyBzdGF0dXM6ICdpZGxlJyB9KVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2FnZW50aWNfc2VhcmNoX2NhbmNlbGxlZCcsIHt9KVxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ0NvbmZpcm1hdGlvbicsXG4gICAgICBpc0FjdGl2ZTpcbiAgICAgICAgdmlld01vZGUgIT09ICdwcmV2aWV3JyAmJiBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzID09PSAnc2VhcmNoaW5nJyxcbiAgICB9LFxuICApXG5cbiAgLy8gRXNjYXBlIGluIHJlbmFtZSBtb2RlIC0gZXhpdCByZW5hbWUgbW9kZVxuICAvLyBVc2UgU2V0dGluZ3MgY29udGV4dCBzbyAnbicga2V5IGRvZXNuJ3QgZXhpdCAoYWxsb3dzIHR5cGluZyAnbicgaW4gcmVuYW1lIGlucHV0KVxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRWaWV3TW9kZSgnbGlzdCcpXG4gICAgICBzZXRSZW5hbWVWYWx1ZSgnJylcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgICBpc0FjdGl2ZTpcbiAgICAgICAgdmlld01vZGUgPT09ICdyZW5hbWUnICYmIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgIT09ICdzZWFyY2hpbmcnLFxuICAgIH0sXG4gIClcblxuICAvLyBFc2NhcGUgd2hlbiBhZ2VudGljIHNlYXJjaCBvcHRpb24gZm9jdXNlZCAtIGNsZWFyIGFuZCBjYW5jZWxcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUXVlcnkoJycpXG4gICAgICBzZXRJc0FnZW50aWNTZWFyY2hPcHRpb25Gb2N1c2VkKGZhbHNlKVxuICAgICAgb25DYW5jZWw/LigpXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOlxuICAgICAgICB2aWV3TW9kZSAhPT0gJ3ByZXZpZXcnICYmXG4gICAgICAgIHZpZXdNb2RlICE9PSAncmVuYW1lJyAmJlxuICAgICAgICB2aWV3TW9kZSAhPT0gJ3NlYXJjaCcgJiZcbiAgICAgICAgaXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZCAmJlxuICAgICAgICBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzICE9PSAnc2VhcmNoaW5nJyxcbiAgICB9LFxuICApXG5cbiAgLy8gSGFuZGxlIG5vbi1lc2NhcGUgaW5wdXRcbiAgdXNlSW5wdXQoXG4gICAgKGlucHV0LCBrZXkpID0+IHtcbiAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ3ByZXZpZXcnKSB7XG4gICAgICAgIC8vIFByZXZpZXcgbW9kZSBoYW5kbGVzIGl0cyBvd24gaW5wdXRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEFnZW50aWMgc2VhcmNoIGFib3J0IGlzIG5vdyBoYW5kbGVkIHZpYSBrZXliaW5kaW5nXG4gICAgICBpZiAoYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyA9PT0gJ3NlYXJjaGluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ3JlbmFtZScpIHtcbiAgICAgICAgLy8gUmVuYW1lIG1vZGUgZXNjYXBlIGlzIG5vdyBoYW5kbGVkIHZpYSBrZXliaW5kaW5nXG4gICAgICAgIC8vIFRoaXMgYnJhbmNoIG9ubHkgaGFuZGxlcyBub24tZXNjYXBlIGlucHV0IGluIHJlbmFtZSBtb2RlICh2aWEgVGV4dElucHV0KVxuICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgLy8gVGV4dCBpbnB1dCBpcyBoYW5kbGVkIGJ5IHVzZVNlYXJjaElucHV0IGhvb2tcbiAgICAgICAgaWYgKGlucHV0LnRvTG93ZXJDYXNlKCkgPT09ICduJyAmJiBrZXkuY3RybCkge1xuICAgICAgICAgIGV4aXRTZWFyY2hNb2RlKClcbiAgICAgICAgfSBlbHNlIGlmIChrZXkucmV0dXJuIHx8IGtleS5kb3duQXJyb3cpIHtcbiAgICAgICAgICAvLyBGb2N1cyBhZ2VudGljIHNlYXJjaCBvcHRpb24gaWYgYXBwbGljYWJsZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5LnRyaW0oKSAmJlxuICAgICAgICAgICAgb25BZ2VudGljU2VhcmNoICYmXG4gICAgICAgICAgICBpc0FnZW50aWNTZWFyY2hFbmFibGVkICYmXG4gICAgICAgICAgICBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzICE9PSAncmVzdWx0cydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNldElzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWQodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBhZ2VudGljIHNlYXJjaCBvcHRpb24gd2hlbiBmb2N1c2VkIChlc2NhcGUgaGFuZGxlZCB2aWEga2V5YmluZGluZylcbiAgICAgICAgaWYgKGlzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWQpIHtcbiAgICAgICAgICBpZiAoa2V5LnJldHVybikge1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBhZ2VudGljIHNlYXJjaFxuICAgICAgICAgICAgdm9pZCBoYW5kbGVBZ2VudGljU2VhcmNoKClcbiAgICAgICAgICAgIHNldElzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWQoZmFsc2UpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS5kb3duQXJyb3cpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgZm9jdXMgdG8gdGhlIHNlc3Npb24gbGlzdFxuICAgICAgICAgICAgc2V0SXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZChmYWxzZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnVwQXJyb3cpIHtcbiAgICAgICAgICAgIC8vIEdvIGJhY2sgdG8gc2VhcmNoIG1vZGVcbiAgICAgICAgICAgIHNldFZpZXdNb2RlKCdzZWFyY2gnKVxuICAgICAgICAgICAgc2V0SXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZChmYWxzZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSB0YWIgY3ljbGluZyBmb3IgdGFnIHRhYnNcbiAgICAgICAgaWYgKGhhc1RhZ3MgJiYga2V5LnRhYikge1xuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGtleS5zaGlmdCA/IC0xIDogMVxuICAgICAgICAgIHNldFNlbGVjdGVkVGFnSW5kZXgocHJldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gcHJldiA8IHRhZ1RhYnMubGVuZ3RoID8gcHJldiA6IDBcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID1cbiAgICAgICAgICAgICAgKGN1cnJlbnQgKyB0YWdUYWJzLmxlbmd0aCArIG9mZnNldCkgJSB0YWdUYWJzLmxlbmd0aFxuICAgICAgICAgICAgY29uc3QgbmV3VGFiID0gdGFnVGFic1tuZXdJbmRleF1cbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3RhZ19maWx0ZXJfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgaXNfYWxsOiBuZXdUYWIgPT09ICdBbGwnLFxuICAgICAgICAgICAgICB0YWdfY291bnQ6IHVuaXF1ZVRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBuZXdJbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlJc05vdEN0cmxPck1ldGEgPSAha2V5LmN0cmwgJiYgIWtleS5tZXRhXG4gICAgICAgIGNvbnN0IGxvd2VySW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8vIEN0cmwrbGV0dGVyIHNob3J0Y3V0cyBmb3IgYWN0aW9ucyAoZnJlZWluZyB1cCBwbGFpbiBsZXR0ZXJzIGZvciB0eXBlLXRvLXNlYXJjaClcbiAgICAgICAgaWYgKGxvd2VySW5wdXQgPT09ICdhJyAmJiBrZXkuY3RybCAmJiBvblRvZ2dsZUFsbFByb2plY3RzKSB7XG4gICAgICAgICAgb25Ub2dnbGVBbGxQcm9qZWN0cygpXG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fYWxsX3Byb2plY3RzX3RvZ2dsZWQnLCB7XG4gICAgICAgICAgICBlbmFibGVkOiAhc2hvd0FsbFByb2plY3RzLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJJbnB1dCA9PT0gJ2InICYmIGtleS5jdHJsKSB7XG4gICAgICAgICAgY29uc3QgbmV3RW5hYmxlZCA9ICFicmFuY2hGaWx0ZXJFbmFibGVkXG4gICAgICAgICAgc2V0QnJhbmNoRmlsdGVyRW5hYmxlZChuZXdFbmFibGVkKVxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX2JyYW5jaF9maWx0ZXJfdG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IG5ld0VuYWJsZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChsb3dlcklucHV0ID09PSAndycgJiYga2V5LmN0cmwgJiYgaGFzTXVsdGlwbGVXb3JrdHJlZXMpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9ICFzaG93QWxsV29ya3RyZWVzXG4gICAgICAgICAgc2V0U2hvd0FsbFdvcmt0cmVlcyhuZXdWYWx1ZSlcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl93b3JrdHJlZV9maWx0ZXJfdG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IG5ld1ZhbHVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJJbnB1dCA9PT0gJy8nICYmIGtleUlzTm90Q3RybE9yTWV0YSkge1xuICAgICAgICAgIHNldFZpZXdNb2RlKCdzZWFyY2gnKVxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3NlYXJjaF90b2dnbGVkJywgeyBlbmFibGVkOiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJJbnB1dCA9PT0gJ3InICYmIGtleS5jdHJsICYmIGZvY3VzZWRMb2cpIHtcbiAgICAgICAgICBzZXRWaWV3TW9kZSgncmVuYW1lJylcbiAgICAgICAgICBzZXRSZW5hbWVWYWx1ZSgnJylcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9yZW5hbWVfc3RhcnRlZCcsIHt9KVxuICAgICAgICB9IGVsc2UgaWYgKGxvd2VySW5wdXQgPT09ICd2JyAmJiBrZXkuY3RybCAmJiBmb2N1c2VkTG9nKSB7XG4gICAgICAgICAgc2V0UHJldmlld0xvZyhmb2N1c2VkTG9nKVxuICAgICAgICAgIHNldFZpZXdNb2RlKCdwcmV2aWV3JylcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9wcmV2aWV3X29wZW5lZCcsIHtcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudDogZm9jdXNlZExvZy5tZXNzYWdlQ291bnQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBmb2N1c2VkTG9nICYmXG4gICAgICAgICAga2V5SXNOb3RDdHJsT3JNZXRhICYmXG4gICAgICAgICAgaW5wdXQubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICEvXlxccyskLy50ZXN0KGlucHV0KVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBBbnkgcHJpbnRhYmxlIGNoYXJhY3RlciBlbnRlcnMgc2VhcmNoIG1vZGUgYW5kIHN0YXJ0cyB0eXBpbmdcbiAgICAgICAgICBzZXRWaWV3TW9kZSgnc2VhcmNoJylcbiAgICAgICAgICBzZXRTZWFyY2hRdWVyeShpbnB1dClcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl9zZWFyY2hfdG9nZ2xlZCcsIHsgZW5hYmxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7IGlzQWN0aXZlOiB0cnVlIH0sXG4gIClcblxuICBjb25zdCBmaWx0ZXJJbmRpY2F0b3JzID0gW11cbiAgaWYgKGJyYW5jaEZpbHRlckVuYWJsZWQgJiYgY3VycmVudEJyYW5jaCkge1xuICAgIGZpbHRlckluZGljYXRvcnMucHVzaChjdXJyZW50QnJhbmNoKVxuICB9XG4gIGlmIChoYXNNdWx0aXBsZVdvcmt0cmVlcyAmJiAhc2hvd0FsbFdvcmt0cmVlcykge1xuICAgIGZpbHRlckluZGljYXRvcnMucHVzaCgnY3VycmVudCB3b3JrdHJlZScpXG4gIH1cblxuICBjb25zdCBzaG93QWRkaXRpb25hbEZpbHRlckxpbmUgPVxuICAgIGZpbHRlckluZGljYXRvcnMubGVuZ3RoID4gMCAmJiB2aWV3TW9kZSAhPT0gJ3NlYXJjaCdcblxuICAvLyBTZWFyY2ggYm94IHRha2VzIDMgbGluZXMgKGJvcmRlciB0b3AsIGNvbnRlbnQsIGJvcmRlciBib3R0b20pXG4gIGNvbnN0IHNlYXJjaEJveExpbmVzID0gM1xuICBjb25zdCBoZWFkZXJMaW5lcyA9XG4gICAgNSArIHNlYXJjaEJveExpbmVzICsgKHNob3dBZGRpdGlvbmFsRmlsdGVyTGluZSA/IDEgOiAwKSArIHRhZ1RhYnNMaW5lc1xuICBjb25zdCBmb290ZXJMaW5lcyA9IDJcbiAgY29uc3QgdmlzaWJsZUNvdW50ID0gTWF0aC5tYXgoXG4gICAgMSxcbiAgICBNYXRoLmZsb29yKChtYXhIZWlnaHQgLSBoZWFkZXJMaW5lcyAtIGZvb3RlckxpbmVzKSAvIDMpLFxuICApXG5cbiAgLy8gUHJvZ3Jlc3NpdmUgbG9hZGluZzogcmVxdWVzdCBtb3JlIGxvZ3Mgd2hlbiB1c2VyIHNjcm9sbHMgbmVhciB0aGUgZW5kXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvbkxvYWRNb3JlKSByZXR1cm5cbiAgICBjb25zdCBidWZmZXIgPSB2aXNpYmxlQ291bnQgKiAyXG4gICAgaWYgKGZvY3VzZWRJbmRleCArIGJ1ZmZlciA+PSBkaXNwbGF5ZWRMb2dzLmxlbmd0aCkge1xuICAgICAgb25Mb2FkTW9yZSh2aXNpYmxlQ291bnQgKiAzKVxuICAgIH1cbiAgfSwgW2ZvY3VzZWRJbmRleCwgdmlzaWJsZUNvdW50LCBkaXNwbGF5ZWRMb2dzLmxlbmd0aCwgb25Mb2FkTW9yZV0pXG5cbiAgLy8gRWFybHkgcmV0dXJuIGlmIG5vIGxvZ3NcbiAgaWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFNob3cgcHJldmlldyBtb2RlIGlmIGFjdGl2ZVxuICBpZiAodmlld01vZGUgPT09ICdwcmV2aWV3JyAmJiBwcmV2aWV3TG9nICYmIGlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlc3Npb25QcmV2aWV3XG4gICAgICAgIGxvZz17cHJldmlld0xvZ31cbiAgICAgICAgb25FeGl0PXsoKSA9PiB7XG4gICAgICAgICAgc2V0Vmlld01vZGUoJ2xpc3QnKVxuICAgICAgICAgIHNldFByZXZpZXdMb2cobnVsbClcbiAgICAgICAgfX1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD17bWF4SGVpZ2h0IC0gMX0+XG4gICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICA8RGl2aWRlciBjb2xvcj1cInN1Z2dlc3Rpb25cIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICA8VGV4dD4gPC9UZXh0PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtoYXNUYWdzID8gKFxuICAgICAgICA8VGFnVGFic1xuICAgICAgICAgIHRhYnM9e3RhZ1RhYnN9XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleD17ZWZmZWN0aXZlVGFnSW5kZXh9XG4gICAgICAgICAgYXZhaWxhYmxlV2lkdGg9e2NvbHVtbnN9XG4gICAgICAgICAgc2hvd0FsbFByb2plY3RzPXtzaG93QWxsUHJvamVjdHN9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJzdWdnZXN0aW9uXCI+XG4gICAgICAgICAgICBSZXN1bWUgU2Vzc2lvblxuICAgICAgICAgICAge3ZpZXdNb2RlID09PSAnbGlzdCcgJiYgZGlzcGxheWVkTG9ncy5sZW5ndGggPiB2aXNpYmxlQ291bnQgJiYgKFxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICh7Zm9jdXNlZEluZGV4fSBvZiB7ZGlzcGxheWVkTG9ncy5sZW5ndGh9KVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPFNlYXJjaEJveFxuICAgICAgICBxdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgIGlzRm9jdXNlZD17dmlld01vZGUgPT09ICdzZWFyY2gnfVxuICAgICAgICBpc1Rlcm1pbmFsRm9jdXNlZD17aXNUZXJtaW5hbEZvY3VzZWR9XG4gICAgICAgIGN1cnNvck9mZnNldD17c2VhcmNoQ3Vyc29yT2Zmc2V0fVxuICAgICAgLz5cbiAgICAgIHtmaWx0ZXJJbmRpY2F0b3JzLmxlbmd0aCA+IDAgJiYgdmlld01vZGUgIT09ICdzZWFyY2gnICYmIChcbiAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfSBwYWRkaW5nTGVmdD17Mn0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPntmaWx0ZXJJbmRpY2F0b3JzfTwvQnlsaW5lPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogQWdlbnRpYyBzZWFyY2ggbG9hZGluZyBzdGF0ZSAqL31cbiAgICAgIHthZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzID09PSAnc2VhcmNoaW5nJyAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezF9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPFRleHQ+IFNlYXJjaGluZ+KApjwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogUmVzdWx0cyBoZWFkZXIgd2hlbiBhZ2VudGljIHNlYXJjaCBjb21wbGV0ZWQgd2l0aCByZXN1bHRzICovfVxuICAgICAge2FnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgPT09ICdyZXN1bHRzJyAmJlxuICAgICAgICBhZ2VudGljU2VhcmNoU3RhdGUucmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsxfSBtYXJnaW5Cb3R0b209ezF9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICBDbGF1ZGUgZm91bmQgdGhlc2UgcmVzdWx0czpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgey8qIEZhbGxiYWNrIG1lc3NhZ2Ugd2hlbiBhZ2VudGljIHNlYXJjaCBmb3VuZCBubyByZXN1bHRzIGFuZCBkZWVwIHNlYXJjaCBhbHNvIGhhcyBub3RoaW5nICovfVxuICAgICAge2FnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgPT09ICdyZXN1bHRzJyAmJlxuICAgICAgICBhZ2VudGljU2VhcmNoU3RhdGUucmVzdWx0cy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgZmlsdGVyZWRMb2dzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17MX0gbWFyZ2luQm90dG9tPXsxfSBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgICAgTm8gbWF0Y2hpbmcgc2Vzc2lvbnMgZm91bmQuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgIHsvKiBFcnJvciBtZXNzYWdlIHdoZW4gYWdlbnRpYyBzZWFyY2ggZmFpbGVkIGFuZCBkZWVwIHNlYXJjaCBhbHNvIGhhcyBub3RoaW5nICovfVxuICAgICAge2FnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgPT09ICdlcnJvcicgJiYgZmlsdGVyZWRMb2dzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezF9IG1hcmdpbkJvdHRvbT17MX0gZmxleFNocmluaz17MH0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgTm8gbWF0Y2hpbmcgc2Vzc2lvbnMgZm91bmQuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBBZ2VudGljIHNlYXJjaCBvcHRpb24gLSBmaXJzdCBpdGVtIGluIGxpc3Qgd2hlbiBzZWFyY2hpbmcgKi99XG4gICAgICB7Qm9vbGVhbihzZWFyY2hRdWVyeS50cmltKCkpICYmXG4gICAgICAgIG9uQWdlbnRpY1NlYXJjaCAmJlxuICAgICAgICBpc0FnZW50aWNTZWFyY2hFbmFibGVkICYmXG4gICAgICAgIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgIT09ICdzZWFyY2hpbmcnICYmXG4gICAgICAgIGFnZW50aWNTZWFyY2hTdGF0ZS5zdGF0dXMgIT09ICdyZXN1bHRzJyAmJlxuICAgICAgICBhZ2VudGljU2VhcmNoU3RhdGUuc3RhdHVzICE9PSAnZXJyb3InICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgY29sb3I9e2lzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZCA/IGZpZ3VyZXMucG9pbnRlciA6ICcgJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNvbG9yPXtpc0FnZW50aWNTZWFyY2hPcHRpb25Gb2N1c2VkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGJvbGQ9e2lzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZWFyY2ggZGVlcGx5IHVzaW5nIENsYXVkZSDihpJcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGhlaWdodD17MX0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgey8qIEhpZGUgc2Vzc2lvbiBsaXN0IHdoZW4gYWdlbnRpYyBzZWFyY2ggaXMgaW4gcHJvZ3Jlc3MgKi99XG4gICAgICB7YWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyA9PT0gJ3NlYXJjaGluZycgPyBudWxsIDogdmlld01vZGUgPT09XG4gICAgICAgICAgJ3JlbmFtZScgJiYgZm9jdXNlZExvZyA/IChcbiAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGJvbGQ+UmVuYW1lIHNlc3Npb246PC9UZXh0PlxuICAgICAgICAgIDxCb3ggcGFkZGluZ1RvcD17MX0+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtyZW5hbWVWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFJlbmFtZVZhbHVlfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlUmVuYW1lU3VibWl0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0TG9nRGlzcGxheVRpdGxlKFxuICAgICAgICAgICAgICAgIGZvY3VzZWRMb2chLFxuICAgICAgICAgICAgICAgICdFbnRlciBuZXcgc2Vzc2lvbiBuYW1lJyxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgY3Vyc29yT2Zmc2V0PXtyZW5hbWVDdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlQ3Vyc29yT2Zmc2V0PXtzZXRSZW5hbWVDdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICAgIHNob3dDdXJzb3I9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICkgOiBpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkID8gKFxuICAgICAgICA8VHJlZVNlbGVjdFxuICAgICAgICAgIG5vZGVzPXt0cmVlTm9kZXN9XG4gICAgICAgICAgb25TZWxlY3Q9e25vZGUgPT4ge1xuICAgICAgICAgICAgb25TZWxlY3Qobm9kZS52YWx1ZS5sb2cpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVUcmVlU2VsZWN0Rm9jdXN9XG4gICAgICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgICAgIGZvY3VzTm9kZUlkPXtmb2N1c2VkTm9kZT8uaWR9XG4gICAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXt2aXNpYmxlQ291bnR9XG4gICAgICAgICAgbGF5b3V0PVwiZXhwYW5kZWRcIlxuICAgICAgICAgIGlzRGlzYWJsZWQ9e3ZpZXdNb2RlID09PSAnc2VhcmNoJyB8fCBpc0FnZW50aWNTZWFyY2hPcHRpb25Gb2N1c2VkfVxuICAgICAgICAgIGhpZGVJbmRleGVzPXtmYWxzZX1cbiAgICAgICAgICBpc05vZGVFeHBhbmRlZD17bm9kZUlkID0+IHtcbiAgICAgICAgICAgIC8vIEFsd2F5cyBleHBhbmQgaWYgaW4gc2VhcmNoIG9yIGJyYW5jaCBmaWx0ZXIgbW9kZVxuICAgICAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnc2VhcmNoJyB8fCBicmFuY2hGaWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFeHRyYWN0IHNlc3Npb25JZCBmcm9tIG5vZGUgSUQgKGZvcm1hdDogXCJncm91cDpzZXNzaW9uSWRcIilcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25JZCA9XG4gICAgICAgICAgICAgIHR5cGVvZiBub2RlSWQgPT09ICdzdHJpbmcnICYmIG5vZGVJZC5zdGFydHNXaXRoKCdncm91cDonKVxuICAgICAgICAgICAgICAgID8gbm9kZUlkLnN1YnN0cmluZyg2KVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25JZCA/IGV4cGFuZGVkR3JvdXBTZXNzaW9uSWRzLmhhcyhzZXNzaW9uSWQpIDogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRXhwYW5kPXtub2RlSWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbklkID1cbiAgICAgICAgICAgICAgdHlwZW9mIG5vZGVJZCA9PT0gJ3N0cmluZycgJiYgbm9kZUlkLnN0YXJ0c1dpdGgoJ2dyb3VwOicpXG4gICAgICAgICAgICAgICAgPyBub2RlSWQuc3Vic3RyaW5nKDYpXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkR3JvdXBTZXNzaW9uSWRzKHByZXYgPT4gbmV3IFNldChwcmV2KS5hZGQoc2Vzc2lvbklkKSlcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fZ3JvdXBfZXhwYW5kZWQnLCB7fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ29sbGFwc2U9e25vZGVJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSWQgPVxuICAgICAgICAgICAgICB0eXBlb2Ygbm9kZUlkID09PSAnc3RyaW5nJyAmJiBub2RlSWQuc3RhcnRzV2l0aCgnZ3JvdXA6JylcbiAgICAgICAgICAgICAgICA/IG5vZGVJZC5zdWJzdHJpbmcoNilcbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIGlmIChzZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgc2V0RXhwYW5kZWRHcm91cFNlc3Npb25JZHMocHJldiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2V0ID0gbmV3IFNldChwcmV2KVxuICAgICAgICAgICAgICAgIG5ld1NldC5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTZXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uVXBGcm9tRmlyc3RJdGVtPXtlbnRlclNlYXJjaE1vZGV9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17ZmxhdE9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgIC8vIE9sZCBmbGF0IGxpc3QgbW9kZSAtIGluZGV4IGRpcmVjdGx5IG1hcHMgdG8gZGlzcGxheWVkTG9nc1xuICAgICAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICAgICAgICAgICAgY29uc3QgbG9nID0gZGlzcGxheWVkTG9nc1tpdGVtSW5kZXhdXG4gICAgICAgICAgICBpZiAobG9nKSB7XG4gICAgICAgICAgICAgIG9uU2VsZWN0KGxvZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHZpc2libGVPcHRpb25Db3VudD17dmlzaWJsZUNvdW50fVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGbGF0T3B0aW9uc1NlbGVjdEZvY3VzfVxuICAgICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtmb2N1c2VkTm9kZT8uaWQudG9TdHJpbmcoKX1cbiAgICAgICAgICBsYXlvdXQ9XCJleHBhbmRlZFwiXG4gICAgICAgICAgaXNEaXNhYmxlZD17dmlld01vZGUgPT09ICdzZWFyY2gnIHx8IGlzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWR9XG4gICAgICAgICAgb25VcEZyb21GaXJzdEl0ZW09e2VudGVyU2VhcmNoTW9kZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfT5cbiAgICAgICAge2V4aXRTdGF0ZS5wZW5kaW5nID8gKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICAgICAgKSA6IHZpZXdNb2RlID09PSAncmVuYW1lJyA/IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwic2F2ZVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApIDogYWdlbnRpY1NlYXJjaFN0YXRlLnN0YXR1cyA9PT0gJ3NlYXJjaGluZycgPyAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8VGV4dD5TZWFyY2hpbmcgd2l0aCBDbGF1ZGXigKY8L1RleHQ+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApIDogaXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZCA/IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaTXCIgYWN0aW9uPVwic2tpcFwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApIDogdmlld01vZGUgPT09ICdzZWFyY2gnID8gKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAge2lzU2VhcmNoaW5nICYmIGlzRGVlcFNlYXJjaEVuYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gJ1NlYXJjaGluZ+KApidcbiAgICAgICAgICAgICAgICAgIDogJ1R5cGUgdG8gU2VhcmNoJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInNlbGVjdFwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjbGVhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICB7b25Ub2dnbGVBbGxQcm9qZWN0cyAmJiAoXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgICBzaG9ydGN1dD1cIkN0cmwrQVwiXG4gICAgICAgICAgICAgICAgICBhY3Rpb249e2BzaG93ICR7c2hvd0FsbFByb2plY3RzID8gJ2N1cnJlbnQgZGlyJyA6ICdhbGwgcHJvamVjdHMnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2N1cnJlbnRCcmFuY2ggJiYgKFxuICAgICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ9XCJDdHJsK0JcIlxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwidG9nZ2xlIGJyYW5jaFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2hhc011bHRpcGxlV29ya3RyZWVzICYmIChcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgIHNob3J0Y3V0PVwiQ3RybCtXXCJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17YHNob3cgJHtzaG93QWxsV29ya3RyZWVzID8gJ2N1cnJlbnQgd29ya3RyZWUnIDogJ2FsbCB3b3JrdHJlZXMnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiQ3RybCtWXCIgYWN0aW9uPVwicHJldmlld1wiIC8+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkN0cmwrUlwiIGFjdGlvbj1cInJlbmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxUZXh0PlR5cGUgdG8gc2VhcmNoPC9UZXh0PlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2dldEV4cGFuZENvbGxhcHNlSGludCgpICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dD57Z2V0RXhwYW5kQ29sbGFwc2VIaW50KCl9PC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBzZWFyY2hhYmxlIHRleHQgY29udGVudCBmcm9tIGEgbWVzc2FnZS5cbiAqIEhhbmRsZXMgYm90aCBzdHJpbmcgY29udGVudCBhbmQgc3RydWN0dXJlZCBjb250ZW50IGJsb2Nrcy5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFNlYXJjaGFibGVUZXh0KG1lc3NhZ2U6IFNlcmlhbGl6ZWRNZXNzYWdlKTogc3RyaW5nIHtcbiAgLy8gT25seSBleHRyYWN0IGZyb20gdXNlciBhbmQgYXNzaXN0YW50IG1lc3NhZ2VzIHRoYXQgaGF2ZSBjb250ZW50XG4gIGlmIChtZXNzYWdlLnR5cGUgIT09ICd1c2VyJyAmJiBtZXNzYWdlLnR5cGUgIT09ICdhc3Npc3RhbnQnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gJ21lc3NhZ2UnIGluIG1lc3NhZ2UgPyBtZXNzYWdlLm1lc3NhZ2U/LmNvbnRlbnQgOiB1bmRlZmluZWRcbiAgaWYgKCFjb250ZW50KSByZXR1cm4gJydcblxuICAvLyBIYW5kbGUgc3RyaW5nIGNvbnRlbnQgKHNpbXBsZSBtZXNzYWdlcylcbiAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICAvLyBIYW5kbGUgYXJyYXkgb2YgY29udGVudCBibG9ja3NcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm4gY29udGVudFxuICAgICAgLm1hcChibG9jayA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSByZXR1cm4gYmxvY2tcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBibG9jayAmJiB0eXBlb2YgYmxvY2sudGV4dCA9PT0gJ3N0cmluZycpIHJldHVybiBibG9jay50ZXh0XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgICAvLyB3ZSBkb24ndCByZXR1cm4gdGhpbmtpbmcgYmxvY2tzIGFuZCB0b29sIG5hbWVzIGhlcmU7XG4gICAgICAgIC8vIHRoZXkncmUgbm90IHVzZWZ1bCBmb3Igc2VhcmNoLCBhcyB0aGV5IGNhbiBhZGQgbm9pc2UgdG8gdGhlIGZ1enp5IG1hdGNoaW5nXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG5cbi8qKlxuICogQnVpbGRzIHNlYXJjaGFibGUgdGV4dCBmb3IgYSBsb2cgaW5jbHVkaW5nIG1lc3NhZ2VzLCB0aXRsZXMsIHN1bW1hcmllcywgYW5kIG1ldGFkYXRhLlxuICogQ3JvcHMgbG9uZyB0cmFuc2NyaXB0cyB0byBmaXJzdC9sYXN0IE4gbWVzc2FnZXMgZm9yIHBlcmZvcm1hbmNlLlxuICovXG5mdW5jdGlvbiBidWlsZFNlYXJjaGFibGVUZXh0KGxvZzogTG9nT3B0aW9uKTogc3RyaW5nIHtcbiAgY29uc3Qgc2VhcmNoYWJsZU1lc3NhZ2VzID1cbiAgICBsb2cubWVzc2FnZXMubGVuZ3RoIDw9IERFRVBfU0VBUkNIX01BWF9NRVNTQUdFU1xuICAgICAgPyBsb2cubWVzc2FnZXNcbiAgICAgIDogW1xuICAgICAgICAgIC4uLmxvZy5tZXNzYWdlcy5zbGljZSgwLCBERUVQX1NFQVJDSF9DUk9QX1NJWkUpLFxuICAgICAgICAgIC4uLmxvZy5tZXNzYWdlcy5zbGljZSgtREVFUF9TRUFSQ0hfQ1JPUF9TSVpFKSxcbiAgICAgICAgXVxuICBjb25zdCBtZXNzYWdlVGV4dCA9IHNlYXJjaGFibGVNZXNzYWdlc1xuICAgIC5tYXAoZXh0cmFjdFNlYXJjaGFibGVUZXh0KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgY29uc3QgbWV0YWRhdGEgPSBbXG4gICAgbG9nLmN1c3RvbVRpdGxlLFxuICAgIGxvZy5zdW1tYXJ5LFxuICAgIGxvZy5maXJzdFByb21wdCxcbiAgICBsb2cuZ2l0QnJhbmNoLFxuICAgIGxvZy50YWcsXG4gICAgbG9nLnByTnVtYmVyID8gYFBSICMke2xvZy5wck51bWJlcn1gIDogdW5kZWZpbmVkLFxuICAgIGxvZy5wclJlcG9zaXRvcnksXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuXG4gIGNvbnN0IGZ1bGxUZXh0ID0gYCR7bWV0YWRhdGF9ICR7bWVzc2FnZVRleHR9YC50cmltKClcbiAgcmV0dXJuIGZ1bGxUZXh0Lmxlbmd0aCA+IERFRVBfU0VBUkNIX01BWF9URVhUX0xFTkdUSFxuICAgID8gZnVsbFRleHQuc2xpY2UoMCwgREVFUF9TRUFSQ0hfTUFYX1RFWFRfTEVOR1RIKVxuICAgIDogZnVsbFRleHRcbn1cblxuZnVuY3Rpb24gZ3JvdXBMb2dzQnlTZXNzaW9uSWQoXG4gIGZpbHRlcmVkTG9nczogTG9nT3B0aW9uW10sXG4pOiBNYXA8c3RyaW5nLCBMb2dPcHRpb25bXT4ge1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgTG9nT3B0aW9uW10+KClcblxuICBmb3IgKGNvbnN0IGxvZyBvZiBmaWx0ZXJlZExvZ3MpIHtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWRGcm9tTG9nKGxvZylcbiAgICBpZiAoc2Vzc2lvbklkKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGdyb3Vwcy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGV4aXN0aW5nLnB1c2gobG9nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXBzLnNldChzZXNzaW9uSWQsIFtsb2ddKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNvcnQgbG9ncyB3aXRoaW4gZWFjaCBncm91cCBieSBtb2RpZmllZCBkYXRlIChuZXdlc3QgZmlyc3QpXG4gIGdyb3Vwcy5mb3JFYWNoKGxvZ3MgPT5cbiAgICBsb2dzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5tb2RpZmllZCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5tb2RpZmllZCkuZ2V0VGltZSgpLFxuICAgICksXG4gIClcblxuICByZXR1cm4gZ3JvdXBzXG59XG5cbi8qKlxuICogR2V0IHVuaXF1ZSB0YWdzIGZyb20gYSBsaXN0IG9mIGxvZ3MsIHNvcnRlZCBhbHBoYWJldGljYWxseVxuICovXG5mdW5jdGlvbiBnZXRVbmlxdWVUYWdzKGxvZ3M6IExvZ09wdGlvbltdKTogc3RyaW5nW10ge1xuICBjb25zdCB0YWdzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgIGlmIChsb2cudGFnKSB7XG4gICAgICB0YWdzLmFkZChsb2cudGFnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbSh0YWdzKS5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24sIFNlcmlhbGl6ZWRNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi9hcnJheS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5pbXBvcnQgeyBnZXRMb2dEaXNwbGF5VGl0bGUsIGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5pbXBvcnQgeyBnZXRTbWFsbEZhc3RNb2RlbCB9IGZyb20gJy4vbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQgeyBpc0xpdGVMb2csIGxvYWRGdWxsTG9nIH0gZnJvbSAnLi9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IHNpZGVRdWVyeSB9IGZyb20gJy4vc2lkZVF1ZXJ5LmpzJ1xuaW1wb3J0IHsganNvblBhcnNlIH0gZnJvbSAnLi9zbG93T3BlcmF0aW9ucy5qcydcblxuLy8gTGltaXRzIGZvciB0cmFuc2NyaXB0IGV4dHJhY3Rpb25cbmNvbnN0IE1BWF9UUkFOU0NSSVBUX0NIQVJTID0gMjAwMCAvLyBNYXggY2hhcnMgb2YgdHJhbnNjcmlwdCBwZXIgc2Vzc2lvblxuY29uc3QgTUFYX01FU1NBR0VTX1RPX1NDQU4gPSAxMDAgLy8gTWF4IG1lc3NhZ2VzIHRvIHNjYW4gZnJvbSBzdGFydC9lbmRcbmNvbnN0IE1BWF9TRVNTSU9OU19UT19TRUFSQ0ggPSAxMDAgLy8gTWF4IHNlc3Npb25zIHRvIHNlbmQgdG8gdGhlIEFQSVxuXG5jb25zdCBTRVNTSU9OX1NFQVJDSF9TWVNURU1fUFJPTVBUID0gYFlvdXIgZ29hbCBpcyB0byBmaW5kIHJlbGV2YW50IHNlc3Npb25zIGJhc2VkIG9uIGEgdXNlcidzIHNlYXJjaCBxdWVyeS5cblxuWW91IHdpbGwgYmUgZ2l2ZW4gYSBsaXN0IG9mIHNlc3Npb25zIHdpdGggdGhlaXIgbWV0YWRhdGEgYW5kIGEgc2VhcmNoIHF1ZXJ5LiBJZGVudGlmeSB3aGljaCBzZXNzaW9ucyBhcmUgbW9zdCByZWxldmFudCB0byB0aGUgcXVlcnkuXG5cbkVhY2ggc2Vzc2lvbiBtYXkgaW5jbHVkZTpcbi0gVGl0bGUgKGRpc3BsYXkgbmFtZSBvciBjdXN0b20gdGl0bGUpXG4tIFRhZyAodXNlci1hc3NpZ25lZCBjYXRlZ29yeSwgc2hvd24gYXMgW3RhZzogbmFtZV0gLSB1c2VycyB0YWcgc2Vzc2lvbnMgd2l0aCAvdGFnIGNvbW1hbmQgdG8gY2F0ZWdvcml6ZSB0aGVtKVxuLSBCcmFuY2ggKGdpdCBicmFuY2ggbmFtZSwgc2hvd24gYXMgW2JyYW5jaDogbmFtZV0pXG4tIFN1bW1hcnkgKEFJLWdlbmVyYXRlZCBzdW1tYXJ5KVxuLSBGaXJzdCBtZXNzYWdlIChiZWdpbm5pbmcgb2YgdGhlIGNvbnZlcnNhdGlvbilcbi0gVHJhbnNjcmlwdCAoZXhjZXJwdCBvZiBjb252ZXJzYXRpb24gY29udGVudClcblxuSU1QT1JUQU5UOiBUYWdzIGFyZSB1c2VyLWFzc2lnbmVkIGxhYmVscyB0aGF0IGluZGljYXRlIHRoZSBzZXNzaW9uJ3MgdG9waWMgb3IgY2F0ZWdvcnkuIElmIHRoZSBxdWVyeSBtYXRjaGVzIGEgdGFnIGV4YWN0bHkgb3IgcGFydGlhbGx5LCB0aG9zZSBzZXNzaW9ucyBzaG91bGQgYmUgaGlnaGx5IHByaW9yaXRpemVkLlxuXG5Gb3IgZWFjaCBzZXNzaW9uLCBjb25zaWRlciAoaW4gb3JkZXIgb2YgcHJpb3JpdHkpOlxuMS4gRXhhY3QgdGFnIG1hdGNoZXMgKGhpZ2hlc3QgcHJpb3JpdHkgLSB1c2VyIGV4cGxpY2l0bHkgY2F0ZWdvcml6ZWQgdGhpcyBzZXNzaW9uKVxuMi4gUGFydGlhbCB0YWcgbWF0Y2hlcyBvciB0YWctcmVsYXRlZCB0ZXJtc1xuMy4gVGl0bGUgbWF0Y2hlcyAoY3VzdG9tIHRpdGxlcyBvciBmaXJzdCBtZXNzYWdlIGNvbnRlbnQpXG40LiBCcmFuY2ggbmFtZSBtYXRjaGVzXG41LiBTdW1tYXJ5IGFuZCB0cmFuc2NyaXB0IGNvbnRlbnQgbWF0Y2hlc1xuNi4gU2VtYW50aWMgc2ltaWxhcml0eSBhbmQgcmVsYXRlZCBjb25jZXB0c1xuXG5DUklUSUNBTDogQmUgVkVSWSBpbmNsdXNpdmUgaW4geW91ciBtYXRjaGluZy4gSW5jbHVkZSBzZXNzaW9ucyB0aGF0OlxuLSBDb250YWluIHRoZSBxdWVyeSB0ZXJtIGFueXdoZXJlIGluIGFueSBmaWVsZFxuLSBBcmUgc2VtYW50aWNhbGx5IHJlbGF0ZWQgdG8gdGhlIHF1ZXJ5IChlLmcuLCBcInRlc3RpbmdcIiBtYXRjaGVzIHNlc3Npb25zIGFib3V0IFwidGVzdHNcIiwgXCJ1bml0IHRlc3RzXCIsIFwiUUFcIiwgZXRjLilcbi0gRGlzY3VzcyB0b3BpY3MgdGhhdCBjb3VsZCBiZSByZWxhdGVkIHRvIHRoZSBxdWVyeVxuLSBIYXZlIHRyYW5zY3JpcHRzIHRoYXQgbWVudGlvbiB0aGUgY29uY2VwdCBldmVuIGluIHBhc3NpbmdcblxuV2hlbiBpbiBkb3VidCwgSU5DTFVERSB0aGUgc2Vzc2lvbi4gSXQncyBiZXR0ZXIgdG8gcmV0dXJuIHRvbyBtYW55IHJlc3VsdHMgdGhhbiB0b28gZmV3LiBUaGUgdXNlciBjYW4gZWFzaWx5IHNjYW4gdGhyb3VnaCByZXN1bHRzLCBidXQgbWlzc2luZyByZWxldmFudCBzZXNzaW9ucyBpcyBmcnVzdHJhdGluZy5cblxuUmV0dXJuIHNlc3Npb25zIG9yZGVyZWQgYnkgcmVsZXZhbmNlIChtb3N0IHJlbGV2YW50IGZpcnN0KS4gSWYgdHJ1bHkgbm8gc2Vzc2lvbnMgaGF2ZSBBTlkgY29ubmVjdGlvbiB0byB0aGUgcXVlcnksIHJldHVybiBhbiBlbXB0eSBhcnJheSAtIGJ1dCB0aGlzIHNob3VsZCBiZSByYXJlLlxuXG5SZXNwb25kIHdpdGggT05MWSB0aGUgSlNPTiBvYmplY3QsIG5vIG1hcmtkb3duIGZvcm1hdHRpbmc6XG57XCJyZWxldmFudF9pbmRpY2VzXCI6IFsyLCA1LCAwXX1gXG5cbnR5cGUgQWdlbnRpY1NlYXJjaFJlc3VsdCA9IHtcbiAgcmVsZXZhbnRfaW5kaWNlczogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBzZWFyY2hhYmxlIHRleHQgY29udGVudCBmcm9tIGEgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdE1lc3NhZ2VUZXh0KG1lc3NhZ2U6IFNlcmlhbGl6ZWRNZXNzYWdlKTogc3RyaW5nIHtcbiAgaWYgKG1lc3NhZ2UudHlwZSAhPT0gJ3VzZXInICYmIG1lc3NhZ2UudHlwZSAhPT0gJ2Fzc2lzdGFudCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSAnbWVzc2FnZScgaW4gbWVzc2FnZSA/IG1lc3NhZ2UubWVzc2FnZT8uY29udGVudCA6IHVuZGVmaW5lZFxuICBpZiAoIWNvbnRlbnQpIHJldHVybiAnJ1xuXG4gIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm4gY29udGVudFxuICAgICAgLm1hcChibG9jayA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSByZXR1cm4gYmxvY2tcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBibG9jayAmJiB0eXBlb2YgYmxvY2sudGV4dCA9PT0gJ3N0cmluZycpIHJldHVybiBibG9jay50ZXh0XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcgJylcbiAgfVxuXG4gIHJldHVybiAnJ1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIGEgdHJ1bmNhdGVkIHRyYW5zY3JpcHQgZnJvbSBzZXNzaW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNjcmlwdChtZXNzYWdlczogU2VyaWFsaXplZE1lc3NhZ2VbXSk6IHN0cmluZyB7XG4gIGlmIChtZXNzYWdlcy5sZW5ndGggPT09IDApIHJldHVybiAnJ1xuXG4gIC8vIFRha2UgbWVzc2FnZXMgZnJvbSBzdGFydCBhbmQgZW5kIHRvIGdldCBjb250ZXh0XG4gIGNvbnN0IG1lc3NhZ2VzVG9TY2FuID1cbiAgICBtZXNzYWdlcy5sZW5ndGggPD0gTUFYX01FU1NBR0VTX1RPX1NDQU5cbiAgICAgID8gbWVzc2FnZXNcbiAgICAgIDogW1xuICAgICAgICAgIC4uLm1lc3NhZ2VzLnNsaWNlKDAsIE1BWF9NRVNTQUdFU19UT19TQ0FOIC8gMiksXG4gICAgICAgICAgLi4ubWVzc2FnZXMuc2xpY2UoLU1BWF9NRVNTQUdFU19UT19TQ0FOIC8gMiksXG4gICAgICAgIF1cblxuICBjb25zdCB0ZXh0ID0gbWVzc2FnZXNUb1NjYW5cbiAgICAubWFwKGV4dHJhY3RNZXNzYWdlVGV4dClcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAudHJpbSgpXG5cbiAgcmV0dXJuIHRleHQubGVuZ3RoID4gTUFYX1RSQU5TQ1JJUFRfQ0hBUlNcbiAgICA/IHRleHQuc2xpY2UoMCwgTUFYX1RSQU5TQ1JJUFRfQ0hBUlMpICsgJ1x1MjAyNidcbiAgICA6IHRleHRcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsb2cgY29udGFpbnMgdGhlIHF1ZXJ5IHRlcm0gaW4gYW55IHNlYXJjaGFibGUgZmllbGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ0NvbnRhaW5zUXVlcnkobG9nOiBMb2dPcHRpb24sIHF1ZXJ5TG93ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBDaGVjayB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGdldExvZ0Rpc3BsYXlUaXRsZShsb2cpLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRpdGxlLmluY2x1ZGVzKHF1ZXJ5TG93ZXIpKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIENoZWNrIGN1c3RvbSB0aXRsZVxuICBpZiAobG9nLmN1c3RvbVRpdGxlPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5TG93ZXIpKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIENoZWNrIHRhZ1xuICBpZiAobG9nLnRhZz8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeUxvd2VyKSkgcmV0dXJuIHRydWVcblxuICAvLyBDaGVjayBicmFuY2hcbiAgaWYgKGxvZy5naXRCcmFuY2g/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlMb3dlcikpIHJldHVybiB0cnVlXG5cbiAgLy8gQ2hlY2sgc3VtbWFyeVxuICBpZiAobG9nLnN1bW1hcnk/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlMb3dlcikpIHJldHVybiB0cnVlXG5cbiAgLy8gQ2hlY2sgZmlyc3QgcHJvbXB0XG4gIGlmIChsb2cuZmlyc3RQcm9tcHQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlMb3dlcikpIHJldHVybiB0cnVlXG5cbiAgLy8gQ2hlY2sgdHJhbnNjcmlwdCAobW9yZSBleHBlbnNpdmUsIGRvIGxhc3QpXG4gIGlmIChsb2cubWVzc2FnZXMgJiYgbG9nLm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB0cmFuc2NyaXB0ID0gZXh0cmFjdFRyYW5zY3JpcHQobG9nLm1lc3NhZ2VzKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKHRyYW5zY3JpcHQuaW5jbHVkZXMocXVlcnlMb3dlcikpIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhbiBhZ2VudGljIHNlYXJjaCB1c2luZyBDbGF1ZGUgdG8gZmluZCByZWxldmFudCBzZXNzaW9uc1xuICogYmFzZWQgb24gc2VtYW50aWMgdW5kZXJzdGFuZGluZyBvZiB0aGUgcXVlcnkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZ2VudGljU2Vzc2lvblNlYXJjaChcbiAgcXVlcnk6IHN0cmluZyxcbiAgbG9nczogTG9nT3B0aW9uW10sXG4gIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuKTogUHJvbWlzZTxMb2dPcHRpb25bXT4ge1xuICBpZiAoIXF1ZXJ5LnRyaW0oKSB8fCBsb2dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgY29uc3QgcXVlcnlMb3dlciA9IHF1ZXJ5LnRvTG93ZXJDYXNlKClcblxuICAvLyBQcmUtZmlsdGVyOiBmaW5kIHNlc3Npb25zIHRoYXQgY29udGFpbiB0aGUgcXVlcnkgdGVybVxuICAvLyBUaGlzIGVuc3VyZXMgd2Ugc2VhcmNoIHJlbGV2YW50IHNlc3Npb25zLCBub3QganVzdCByZWNlbnQgb25lc1xuICBjb25zdCBtYXRjaGluZ0xvZ3MgPSBsb2dzLmZpbHRlcihsb2cgPT4gbG9nQ29udGFpbnNRdWVyeShsb2csIHF1ZXJ5TG93ZXIpKVxuXG4gIC8vIFRha2UgdXAgdG8gTUFYX1NFU1NJT05TX1RPX1NFQVJDSCBtYXRjaGluZyBsb2dzXG4gIC8vIElmIGZld2VyIG1hdGNoZXMsIGZpbGwgcmVtYWluaW5nIHNsb3RzIHdpdGggcmVjZW50IG5vbi1tYXRjaGluZyBsb2dzIGZvciBjb250ZXh0XG4gIGxldCBsb2dzVG9TZWFyY2g6IExvZ09wdGlvbltdXG4gIGlmIChtYXRjaGluZ0xvZ3MubGVuZ3RoID49IE1BWF9TRVNTSU9OU19UT19TRUFSQ0gpIHtcbiAgICBsb2dzVG9TZWFyY2ggPSBtYXRjaGluZ0xvZ3Muc2xpY2UoMCwgTUFYX1NFU1NJT05TX1RPX1NFQVJDSClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25NYXRjaGluZ0xvZ3MgPSBsb2dzLmZpbHRlcihcbiAgICAgIGxvZyA9PiAhbG9nQ29udGFpbnNRdWVyeShsb2csIHF1ZXJ5TG93ZXIpLFxuICAgIClcbiAgICBjb25zdCByZW1haW5pbmdTbG90cyA9IE1BWF9TRVNTSU9OU19UT19TRUFSQ0ggLSBtYXRjaGluZ0xvZ3MubGVuZ3RoXG4gICAgbG9nc1RvU2VhcmNoID0gW1xuICAgICAgLi4ubWF0Y2hpbmdMb2dzLFxuICAgICAgLi4ubm9uTWF0Y2hpbmdMb2dzLnNsaWNlKDAsIHJlbWFpbmluZ1Nsb3RzKSxcbiAgICBdXG4gIH1cblxuICAvLyBEZWJ1ZzogbG9nIHdoYXQgZGF0YSB3ZSBoYXZlXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgQWdlbnRpYyBzZWFyY2g6ICR7bG9nc1RvU2VhcmNoLmxlbmd0aH0vJHtsb2dzLmxlbmd0aH0gbG9ncywgcXVlcnk9XCIke3F1ZXJ5fVwiLCBgICtcbiAgICAgIGBtYXRjaGluZzogJHttYXRjaGluZ0xvZ3MubGVuZ3RofSwgd2l0aCBtZXNzYWdlczogJHtjb3VudChsb2dzVG9TZWFyY2gsIGwgPT4gbC5tZXNzYWdlcz8ubGVuZ3RoID4gMCl9YCxcbiAgKVxuXG4gIC8vIExvYWQgZnVsbCBsb2dzIGZvciBsaXRlIGxvZ3MgdG8gZ2V0IHRyYW5zY3JpcHQgY29udGVudFxuICBjb25zdCBsb2dzV2l0aFRyYW5zY3JpcHRzUHJvbWlzZXMgPSBsb2dzVG9TZWFyY2gubWFwKGFzeW5jIGxvZyA9PiB7XG4gICAgaWYgKGlzTGl0ZUxvZyhsb2cpKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgbG9hZEZ1bGxMb2cobG9nKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgICAgIC8vIElmIGxvYWRpbmcgZmFpbHMsIHVzZSB0aGUgbGl0ZSBsb2cgKG5vIHRyYW5zY3JpcHQpXG4gICAgICAgIHJldHVybiBsb2dcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvZ1xuICB9KVxuICBjb25zdCBsb2dzV2l0aFRyYW5zY3JpcHRzID0gYXdhaXQgUHJvbWlzZS5hbGwobG9nc1dpdGhUcmFuc2NyaXB0c1Byb21pc2VzKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgQWdlbnRpYyBzZWFyY2g6IGxvYWRlZCAke2NvdW50KGxvZ3NXaXRoVHJhbnNjcmlwdHMsIGwgPT4gbC5tZXNzYWdlcz8ubGVuZ3RoID4gMCl9LyR7bG9nc1RvU2VhcmNoLmxlbmd0aH0gbG9ncyB3aXRoIHRyYW5zY3JpcHRzYCxcbiAgKVxuXG4gIC8vIEJ1aWxkIHNlc3Npb24gbGlzdCBmb3IgdGhlIHByb21wdCB3aXRoIGFsbCBzZWFyY2hhYmxlIG1ldGFkYXRhXG4gIGNvbnN0IHNlc3Npb25MaXN0ID0gbG9nc1dpdGhUcmFuc2NyaXB0c1xuICAgIC5tYXAoKGxvZywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtgJHtpbmRleH06YF1cblxuICAgICAgLy8gVGl0bGUgKGRpc3BsYXkgdGl0bGUsIG1heSBiZSBjdXN0b20gb3IgZnJvbSBmaXJzdCBwcm9tcHQpXG4gICAgICBjb25zdCBkaXNwbGF5VGl0bGUgPSBnZXRMb2dEaXNwbGF5VGl0bGUobG9nKVxuICAgICAgcGFydHMucHVzaChkaXNwbGF5VGl0bGUpXG5cbiAgICAgIC8vIEN1c3RvbSB0aXRsZSBpZiBkaWZmZXJlbnQgZnJvbSBkaXNwbGF5IHRpdGxlXG4gICAgICBpZiAobG9nLmN1c3RvbVRpdGxlICYmIGxvZy5jdXN0b21UaXRsZSAhPT0gZGlzcGxheVRpdGxlKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYFtjdXN0b20gdGl0bGU6ICR7bG9nLmN1c3RvbVRpdGxlfV1gKVxuICAgICAgfVxuXG4gICAgICAvLyBUYWdcbiAgICAgIGlmIChsb2cudGFnKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYFt0YWc6ICR7bG9nLnRhZ31dYClcbiAgICAgIH1cblxuICAgICAgLy8gR2l0IGJyYW5jaFxuICAgICAgaWYgKGxvZy5naXRCcmFuY2gpIHtcbiAgICAgICAgcGFydHMucHVzaChgW2JyYW5jaDogJHtsb2cuZ2l0QnJhbmNofV1gKVxuICAgICAgfVxuXG4gICAgICAvLyBTdW1tYXJ5XG4gICAgICBpZiAobG9nLnN1bW1hcnkpIHtcbiAgICAgICAgcGFydHMucHVzaChgLSBTdW1tYXJ5OiAke2xvZy5zdW1tYXJ5fWApXG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHByb21wdCBjb250ZW50ICh0cnVuY2F0ZWQpXG4gICAgICBpZiAobG9nLmZpcnN0UHJvbXB0ICYmIGxvZy5maXJzdFByb21wdCAhPT0gJ05vIHByb21wdCcpIHtcbiAgICAgICAgcGFydHMucHVzaChgLSBGaXJzdCBtZXNzYWdlOiAke2xvZy5maXJzdFByb21wdC5zbGljZSgwLCAzMDApfWApXG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zY3JpcHQgZXhjZXJwdCAoaWYgbWVzc2FnZXMgYXJlIGF2YWlsYWJsZSlcbiAgICAgIGlmIChsb2cubWVzc2FnZXMgJiYgbG9nLm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IGV4dHJhY3RUcmFuc2NyaXB0KGxvZy5tZXNzYWdlcylcbiAgICAgICAgaWYgKHRyYW5zY3JpcHQpIHtcbiAgICAgICAgICBwYXJ0cy5wdXNoKGAtIFRyYW5zY3JpcHQ6ICR7dHJhbnNjcmlwdH1gKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcgJylcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKVxuXG4gIGNvbnN0IHVzZXJNZXNzYWdlID0gYFNlc3Npb25zOlxuJHtzZXNzaW9uTGlzdH1cblxuU2VhcmNoIHF1ZXJ5OiBcIiR7cXVlcnl9XCJcblxuRmluZCB0aGUgc2Vzc2lvbnMgdGhhdCBhcmUgbW9zdCByZWxldmFudCB0byB0aGlzIHF1ZXJ5LmBcblxuICAvLyBEZWJ1ZzogbG9nIGZpcnN0IHBhcnQgb2YgdGhlIHNlc3Npb24gbGlzdFxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYEFnZW50aWMgc2VhcmNoIHByb21wdCAoZmlyc3QgNTAwIGNoYXJzKTogJHt1c2VyTWVzc2FnZS5zbGljZSgwLCA1MDApfS4uLmAsXG4gIClcblxuICB0cnkge1xuICAgIGNvbnN0IG1vZGVsID0gZ2V0U21hbGxGYXN0TW9kZWwoKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgQWdlbnRpYyBzZWFyY2ggdXNpbmcgbW9kZWw6ICR7bW9kZWx9YClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2lkZVF1ZXJ5KHtcbiAgICAgIG1vZGVsLFxuICAgICAgc3lzdGVtOiBTRVNTSU9OX1NFQVJDSF9TWVNURU1fUFJPTVBULFxuICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6ICd1c2VyJywgY29udGVudDogdXNlck1lc3NhZ2UgfV0sXG4gICAgICBzaWduYWwsXG4gICAgICBxdWVyeVNvdXJjZTogJ3Nlc3Npb25fc2VhcmNoJyxcbiAgICB9KVxuXG4gICAgLy8gRXh0cmFjdCB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LmZpbmQoYmxvY2sgPT4gYmxvY2sudHlwZSA9PT0gJ3RleHQnKVxuICAgIGlmICghdGV4dENvbnRlbnQgfHwgdGV4dENvbnRlbnQudHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ05vIHRleHQgY29udGVudCBpbiBhZ2VudGljIHNlYXJjaCByZXNwb25zZScpXG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICAvLyBEZWJ1ZzogbG9nIHRoZSByZXNwb25zZVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgQWdlbnRpYyBzZWFyY2ggcmVzcG9uc2U6ICR7dGV4dENvbnRlbnQudGV4dH1gKVxuXG4gICAgLy8gUGFyc2UgdGhlIEpTT04gcmVzcG9uc2VcbiAgICBjb25zdCBqc29uTWF0Y2ggPSB0ZXh0Q29udGVudC50ZXh0Lm1hdGNoKC9cXHtbXFxzXFxTXSpcXH0vKVxuICAgIGlmICghanNvbk1hdGNoKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0NvdWxkIG5vdCBmaW5kIEpTT04gaW4gYWdlbnRpYyBzZWFyY2ggcmVzcG9uc2UnKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBBZ2VudGljU2VhcmNoUmVzdWx0ID0ganNvblBhcnNlKGpzb25NYXRjaFswXSlcbiAgICBjb25zdCByZWxldmFudEluZGljZXMgPSByZXN1bHQucmVsZXZhbnRfaW5kaWNlcyB8fCBbXVxuXG4gICAgLy8gTWFwIGluZGljZXMgYmFjayB0byBsb2dzIChpbmRpY2VzIGFyZSByZWxhdGl2ZSB0byBsb2dzV2l0aFRyYW5zY3JpcHRzKVxuICAgIGNvbnN0IHJlbGV2YW50TG9ncyA9IHJlbGV2YW50SW5kaWNlc1xuICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCA+PSAwICYmIGluZGV4IDwgbG9nc1dpdGhUcmFuc2NyaXB0cy5sZW5ndGgpXG4gICAgICAubWFwKGluZGV4ID0+IGxvZ3NXaXRoVHJhbnNjcmlwdHNbaW5kZXhdISlcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBBZ2VudGljIHNlYXJjaCBmb3VuZCAke3JlbGV2YW50TG9ncy5sZW5ndGh9IHJlbGV2YW50IHNlc3Npb25zYCxcbiAgICApXG5cbiAgICByZXR1cm4gcmVsZXZhbnRMb2dzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgbG9nRm9yRGVidWdnaW5nKGBBZ2VudGljIHNlYXJjaCBlcnJvcjogJHtlcnJvcn1gKVxuICAgIHJldHVybiBbXVxuICB9XG59XG4iLCAiaW1wb3J0IHsgc2VwIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldE9yaWdpbmFsQ3dkIH0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24gfSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2Jhc2gvc2hlbGxRdW90ZS5qcydcbmltcG9ydCB7IGdldFNlc3Npb25JZEZyb21Mb2cgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlLmpzJ1xuXG5leHBvcnQgdHlwZSBDcm9zc1Byb2plY3RSZXN1bWVSZXN1bHQgPVxuICB8IHtcbiAgICAgIGlzQ3Jvc3NQcm9qZWN0OiBmYWxzZVxuICAgIH1cbiAgfCB7XG4gICAgICBpc0Nyb3NzUHJvamVjdDogdHJ1ZVxuICAgICAgaXNTYW1lUmVwb1dvcmt0cmVlOiB0cnVlXG4gICAgICBwcm9qZWN0UGF0aDogc3RyaW5nXG4gICAgfVxuICB8IHtcbiAgICAgIGlzQ3Jvc3NQcm9qZWN0OiB0cnVlXG4gICAgICBpc1NhbWVSZXBvV29ya3RyZWU6IGZhbHNlXG4gICAgICBjb21tYW5kOiBzdHJpbmdcbiAgICAgIHByb2plY3RQYXRoOiBzdHJpbmdcbiAgICB9XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBsb2cgaXMgZnJvbSBhIGRpZmZlcmVudCBwcm9qZWN0IGRpcmVjdG9yeSBhbmQgZGV0ZXJtaW5lXG4gKiB3aGV0aGVyIGl0J3MgYSByZWxhdGVkIHdvcmt0cmVlIG9yIGEgY29tcGxldGVseSBkaWZmZXJlbnQgcHJvamVjdC5cbiAqXG4gKiBGb3Igc2FtZS1yZXBvIHdvcmt0cmVlcywgd2UgY2FuIHJlc3VtZSBkaXJlY3RseSB3aXRob3V0IHJlcXVpcmluZyBjZC5cbiAqIEZvciBkaWZmZXJlbnQgcHJvamVjdHMsIHdlIGdlbmVyYXRlIHRoZSBjZCBjb21tYW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDcm9zc1Byb2plY3RSZXN1bWUoXG4gIGxvZzogTG9nT3B0aW9uLFxuICBzaG93QWxsUHJvamVjdHM6IGJvb2xlYW4sXG4gIHdvcmt0cmVlUGF0aHM6IHN0cmluZ1tdLFxuKTogQ3Jvc3NQcm9qZWN0UmVzdW1lUmVzdWx0IHtcbiAgY29uc3QgY3VycmVudEN3ZCA9IGdldE9yaWdpbmFsQ3dkKClcblxuICBpZiAoIXNob3dBbGxQcm9qZWN0cyB8fCAhbG9nLnByb2plY3RQYXRoIHx8IGxvZy5wcm9qZWN0UGF0aCA9PT0gY3VycmVudEN3ZCkge1xuICAgIHJldHVybiB7IGlzQ3Jvc3NQcm9qZWN0OiBmYWxzZSB9XG4gIH1cblxuICAvLyBHYXRlIHdvcmt0cmVlIGRldGVjdGlvbiB0byBhbnRzIG9ubHkgZm9yIHN0YWdlZCByb2xsb3V0XG4gIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgIT09ICdhbnQnKSB7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkRnJvbUxvZyhsb2cpXG4gICAgY29uc3QgY29tbWFuZCA9IGBjZCAke3F1b3RlKFtsb2cucHJvamVjdFBhdGhdKX0gJiYgYmxhdWRlIC0tcmVzdW1lICR7c2Vzc2lvbklkfWBcbiAgICByZXR1cm4ge1xuICAgICAgaXNDcm9zc1Byb2plY3Q6IHRydWUsXG4gICAgICBpc1NhbWVSZXBvV29ya3RyZWU6IGZhbHNlLFxuICAgICAgY29tbWFuZCxcbiAgICAgIHByb2plY3RQYXRoOiBsb2cucHJvamVjdFBhdGgsXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgbG9nLnByb2plY3RQYXRoIGlzIHVuZGVyIGEgd29ya3RyZWUgb2YgdGhlIHNhbWUgcmVwb1xuICBjb25zdCBpc1NhbWVSZXBvID0gd29ya3RyZWVQYXRocy5zb21lKFxuICAgIHd0ID0+IGxvZy5wcm9qZWN0UGF0aCA9PT0gd3QgfHwgbG9nLnByb2plY3RQYXRoIS5zdGFydHNXaXRoKHd0ICsgc2VwKSxcbiAgKVxuXG4gIGlmIChpc1NhbWVSZXBvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ3Jvc3NQcm9qZWN0OiB0cnVlLFxuICAgICAgaXNTYW1lUmVwb1dvcmt0cmVlOiB0cnVlLFxuICAgICAgcHJvamVjdFBhdGg6IGxvZy5wcm9qZWN0UGF0aCxcbiAgICB9XG4gIH1cblxuICAvLyBEaWZmZXJlbnQgcmVwbyAtIGdlbmVyYXRlIGNkIGNvbW1hbmRcbiAgY29uc3Qgc2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkRnJvbUxvZyhsb2cpXG4gIGNvbnN0IGNvbW1hbmQgPSBgY2QgJHtxdW90ZShbbG9nLnByb2plY3RQYXRoXSl9ICYmIGJsYXVkZSAtLXJlc3VtZSAke3Nlc3Npb25JZH1gXG4gIHJldHVybiB7XG4gICAgaXNDcm9zc1Byb2plY3Q6IHRydWUsXG4gICAgaXNTYW1lUmVwb1dvcmt0cmVlOiBmYWxzZSxcbiAgICBjb21tYW5kLFxuICAgIHByb2plY3RQYXRoOiBsb2cucHJvamVjdFBhdGgsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JPLFNBQUFBLGVBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBd0IsUUFBQTtJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFMO0FBUTdCLFFBQUEsQ0FBQU0sU0FBQUMsVUFBQSxJQUE4QkMsY0FBS0MsU0FBNEIsSUFBSTtBQUFDLE1BQUFDO0FBQUEsTUFBQUM7QUFBQSxNQUFBVixFQUFBLENBQUEsTUFBQUUsS0FBQTtBQUdwRE8sU0FBQUEsTUFBQTtBQUNkSCxpQkFBVyxJQUFJO0FBQ2YsVUFBSUssVUFBVVQsR0FBRyxHQUFDO0FBQ1hVLG9CQUFZVixHQUFHLEVBQUNXLEtBQU1QLFVBQVU7TUFBQztJQUN2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QUFDLHVCQUF1QkQsVUFBUztBQUM5RSxXQUFPO0FBQUEsTUFDTCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixTQUFBQztBQUFBLE1BQ0EsYUFBYSxJQUFJO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBR0EsUUFBTSxhQUFhLGNBQWM7QUFBQSxJQUMvQixRQUFNLElBQUksZ0JBQWdCLE1BQU0sSUFBSSxZQUFhLFdBQVcsS0FBSyxHQUFHO0FBQUEsRUFDdEU7QUFFQSxNQUFJLFlBQVk7QUFDZCxXQUFPO0FBQUEsTUFDTCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixhQUFhLElBQUk7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFHQSxRQUFNLFlBQVksb0JBQW9CLEdBQUc7QUFDekMsUUFBTSxVQUFVLE1BQU0sTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsdUJBQXVCLFNBQVM7QUFDOUUsU0FBTztBQUFBLElBQ0wsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEI7QUFBQSxJQUNBLGFBQWEsSUFBSTtBQUFBLEVBQ25CO0FBQ0Y7QUExRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIlNlc3Npb25QcmV2aWV3IiwgInQwIiwgIiQiLCAiX2MiLCAibG9nIiwgIm9uRXhpdCIsICJvblNlbGVjdCIsICJmdWxsTG9nIiwgInNldEZ1bGxMb2ciLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAidDEiLCAidDIiLCAiaXNMaXRlTG9nIiwgImxvYWRGdWxsTG9nIiwgInRoZW4iLCAidXNlRWZmZWN0IiwgImlzTG9hZGluZyIsICJkaXNwbGF5TG9nIiwgInQzIiwgImdldFNlc3Npb25JZEZyb21Mb2ciLCAiY29udmVyc2F0aW9uSWQiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJnZXRBbGxCYXNlVG9vbHMiLCAidG9vbHMiLCAidDUiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQ2IiwgImhhbmRsZVNlbGVjdCIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAiU2V0IiwgInQxMSIsICJ0MTIiLCAibWVzc2FnZXMiLCAidDEzIiwgIm1vZGlmaWVkIiwgImZvcm1hdFJlbGF0aXZlVGltZUFnbyIsICJ0MTQiLCAiZ2l0QnJhbmNoIiwgInQxNSIsICJtZXNzYWdlQ291bnQiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAiZ2V0VGFiV2lkdGgiLCAidGFiIiwgIm1heFdpZHRoIiwgIkFMTF9UQUJfTEFCRUwiLCAibGVuZ3RoIiwgIlRBQl9QQURESU5HIiwgInRhZ1dpZHRoIiwgInN0cmluZ1dpZHRoIiwgImVmZmVjdGl2ZVRhZ1dpZHRoIiwgIk1hdGgiLCAibWluIiwgIkhBU0hfUFJFRklYX0xFTkdUSCIsICJtYXgiLCAidHJ1bmNhdGVUYWciLCAidGFnIiwgImF2YWlsYWJsZUZvclRhZyIsICJjaGFyQXQiLCAidHJ1bmNhdGVUb1dpZHRoIiwgIlRhZ1RhYnMiLCAidGFicyIsICJzZWxlY3RlZEluZGV4IiwgImF2YWlsYWJsZVdpZHRoIiwgInNob3dBbGxQcm9qZWN0cyIsICJyZXN1bWVMYWJlbCIsICJyZXN1bWVMYWJlbFdpZHRoIiwgInJpZ2h0SGludFdpZHRoIiwgIlJJR0hUX0hJTlRfV0lEVEhfV0lUSF9DT1VOVCIsICJSSUdIVF9ISU5UX1dJRFRIX05PX0NPVU5UIiwgIm1heFRhYnNXaWR0aCIsICJzYWZlU2VsZWN0ZWRJbmRleCIsICJtYXhTaW5nbGVUYWJXaWR0aCIsICJmbG9vciIsICJ0YWJXaWR0aHMiLCAibWFwIiwgInN0YXJ0SW5kZXgiLCAiZW5kSW5kZXgiLCAidG90YWxUYWJzV2lkdGgiLCAicmVkdWNlIiwgInN1bSIsICJ3IiwgImkiLCAiZWZmZWN0aXZlTWF4V2lkdGgiLCAiTEVGVF9BUlJPV19XSURUSCIsICJ3aW5kb3dXaWR0aCIsICJjYW5FeHBhbmRMZWZ0IiwgImNhbkV4cGFuZFJpZ2h0IiwgImxlZnRXaWR0aCIsICJyaWdodFdpZHRoIiwgImhpZGRlbkxlZnQiLCAiaGlkZGVuUmlnaHQiLCAidmlzaWJsZVRhYnMiLCAic2xpY2UiLCAidmlzaWJsZUluZGljZXMiLCAiXyIsICJMRUZUX0FSUk9XX1BSRUZJWCIsICJhY3R1YWxJbmRleCIsICJpc1NlbGVjdGVkIiwgImRpc3BsYXlUZXh0IiwgInVuZGVmaW5lZCIsICJSSUdIVF9ISU5UX1dJVEhfQ09VTlRfUFJFRklYIiwgIlJJR0hUX0hJTlRfU1VGRklYIiwgIlJJR0hUX0hJTlRfTk9fQ09VTlQiLCAiTUFYX09WRVJGTE9XX0RJR0lUUyIsICJUcmVlU2VsZWN0IiwgInQwIiwgIiQiLCAiX2MiLCAibm9kZXMiLCAib25TZWxlY3QiLCAib25DYW5jZWwiLCAib25Gb2N1cyIsICJmb2N1c05vZGVJZCIsICJ2aXNpYmxlT3B0aW9uQ291bnQiLCAibGF5b3V0IiwgInQxIiwgImlzRGlzYWJsZWQiLCAidDIiLCAiaGlkZUluZGV4ZXMiLCAidDMiLCAiaXNOb2RlRXhwYW5kZWQiLCAib25FeHBhbmQiLCAib25Db2xsYXBzZSIsICJnZXRQYXJlbnRQcmVmaXgiLCAiZ2V0Q2hpbGRQcmVmaXgiLCAib25VcEZyb21GaXJzdEl0ZW0iLCAidW5kZWZpbmVkIiwgInQ0IiwgIlN5bWJvbCIsICJmb3IiLCAiU2V0IiwgImludGVybmFsRXhwYW5kZWRJZHMiLCAic2V0SW50ZXJuYWxFeHBhbmRlZElkcyIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJpc1Byb2dyYW1tYXRpY0ZvY3VzUmVmIiwgInVzZVJlZiIsICJsYXN0Rm9jdXNlZElkUmVmIiwgInQ1IiwgIm5vZGVJZCIsICJoYXMiLCAiaXNFeHBhbmRlZCIsICJyZXN1bHQiLCAidHJhdmVyc2UiLCAibm9kZSIsICJkZXB0aCIsICJwYXJlbnRJZCIsICJoYXNDaGlsZHJlbiIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAibm9kZUlzRXhwYW5kZWQiLCAiaWQiLCAicHVzaCIsICJjaGlsZCIsICJub2RlXzAiLCAiZmxhdHRlbmVkTm9kZXMiLCAiZGVmYXVsdEdldFBhcmVudFByZWZpeCIsICJfdGVtcCIsICJkZWZhdWx0R2V0Q2hpbGRQcmVmaXgiLCAiX3RlbXAyIiwgInBhcmVudFByZWZpeEZuIiwgImNoaWxkUHJlZml4Rm4iLCAidDYiLCAiZmxhdE5vZGUiLCAicHJlZml4IiwgImxhYmVsIiwgImJ1aWxkTGFiZWwiLCAidDciLCAibWFwIiwgImZsYXROb2RlXzAiLCAiZGVzY3JpcHRpb24iLCAiZGltRGVzY3JpcHRpb24iLCAidmFsdWUiLCAib3B0aW9ucyIsICJNYXAiLCAiZm9yRWFjaCIsICJmbiIsICJzZXQiLCAibm9kZU1hcCIsICJ0OCIsICJub2RlSWRfMCIsICJmaW5kIiwgImZuXzAiLCAiZmluZEZsYXR0ZW5lZE5vZGUiLCAidDkiLCAibm9kZUlkXzEiLCAic2hvdWxkRXhwYW5kIiwgImZsYXROb2RlXzEiLCAicHJldiIsICJhZGQiLCAicHJldl8wIiwgIm5ld1NldCIsICJkZWxldGUiLCAidG9nZ2xlRXhwYW5kIiwgInQxMCIsICJlIiwgImZsYXROb2RlXzIiLCAia2V5IiwgInByZXZlbnREZWZhdWx0IiwgImN1cnJlbnQiLCAicGFyZW50Tm9kZSIsICJnZXQiLCAiaGFuZGxlS2V5RG93biIsICJ0MTEiLCAibm9kZUlkXzIiLCAibm9kZV8xIiwgImhhbmRsZUNoYW5nZSIsICJ0MTIiLCAibm9kZUlkXzMiLCAibm9kZV8yIiwgImhhbmRsZUZvY3VzIiwgInQxMyIsICJ0MTQiLCAiX2RlcHRoIiwgImlzRXhwYW5kZWRfMCIsICJub3JtYWxpemVBbmRUcnVuY2F0ZVRvV2lkdGgiLCAidGV4dCIsICJtYXhXaWR0aCIsICJub3JtYWxpemVkIiwgInJlcGxhY2UiLCAidHJpbSIsICJ0cnVuY2F0ZVRvV2lkdGgiLCAiZm9ybWF0U25pcHBldCIsICJiZWZvcmUiLCAibWF0Y2giLCAiYWZ0ZXIiLCAiaGlnaGxpZ2h0Q29sb3IiLCAiY2hhbGsiLCAiZGltIiwgImV4dHJhY3RTbmlwcGV0IiwgInF1ZXJ5IiwgImNvbnRleHRDaGFycyIsICJtYXRjaEluZGV4IiwgInRvTG93ZXJDYXNlIiwgImluZGV4T2YiLCAibWF0Y2hFbmQiLCAibGVuZ3RoIiwgInNuaXBwZXRTdGFydCIsICJNYXRoIiwgIm1heCIsICJzbmlwcGV0RW5kIiwgIm1pbiIsICJiZWZvcmVSYXciLCAic2xpY2UiLCAibWF0Y2hUZXh0IiwgImFmdGVyUmF3IiwgInRyaW1TdGFydCIsICJ0cmltRW5kIiwgImJ1aWxkTG9nTGFiZWwiLCAibG9nIiwgIm1heExhYmVsV2lkdGgiLCAib3B0aW9ucyIsICJpc0dyb3VwSGVhZGVyIiwgImlzQ2hpbGQiLCAiZm9ya0NvdW50IiwgInByZWZpeFdpZHRoIiwgIlBBUkVOVF9QUkVGSVhfV0lEVEgiLCAiQ0hJTERfUFJFRklYX1dJRFRIIiwgInNlc3Npb25Db3VudFN1ZmZpeCIsICJzaWRlY2hhaW5TdWZmaXgiLCAiaXNTaWRlY2hhaW4iLCAibWF4U3VtbWFyeVdpZHRoIiwgInRydW5jYXRlZFN1bW1hcnkiLCAiZ2V0TG9nRGlzcGxheVRpdGxlIiwgImJ1aWxkTG9nTWV0YWRhdGEiLCAic2hvd1Byb2plY3RQYXRoIiwgImNoaWxkUGFkZGluZyIsICJiYXNlTWV0YWRhdGEiLCAiZm9ybWF0TG9nTWV0YWRhdGEiLCAicHJvamVjdFN1ZmZpeCIsICJwcm9qZWN0UGF0aCIsICJMb2dTZWxlY3RvciIsICJ0MCIsICIkIiwgIl9jIiwgImxvZ3MiLCAibWF4SGVpZ2h0IiwgInQxIiwgImZvcmNlV2lkdGgiLCAib25DYW5jZWwiLCAib25TZWxlY3QiLCAib25Mb2dzQ2hhbmdlZCIsICJvbkxvYWRNb3JlIiwgImluaXRpYWxTZWFyY2hRdWVyeSIsICJzaG93QWxsUHJvamVjdHMiLCAidDIiLCAib25Ub2dnbGVBbGxQcm9qZWN0cyIsICJvbkFnZW50aWNTZWFyY2giLCAidW5kZWZpbmVkIiwgIkluZmluaXR5IiwgInRlcm1pbmFsU2l6ZSIsICJ1c2VUZXJtaW5hbFNpemUiLCAiY29sdW1ucyIsICJleGl0U3RhdGUiLCAidXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIiwgImlzVGVybWluYWxGb2N1c2VkIiwgInVzZVRlcm1pbmFsRm9jdXMiLCAidDMiLCAiU3ltYm9sIiwgImZvciIsICJpc0N1c3RvbVRpdGxlRW5hYmxlZCIsICJpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkIiwgImlzRGVlcFNlYXJjaEVuYWJsZWQiLCAidGhlbWVOYW1lIiwgInVzZVRoZW1lIiwgInQ0IiwgImdldFRoZW1lIiwgInRoZW1lIiwgInQ1IiwgIndhcm5pbmciLCAiYXBwbHlDb2xvciIsICJpc0FnZW50aWNTZWFyY2hFbmFibGVkIiwgImN1cnJlbnRCcmFuY2giLCAic2V0Q3VycmVudEJyYW5jaCIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJicmFuY2hGaWx0ZXJFbmFibGVkIiwgInNldEJyYW5jaEZpbHRlckVuYWJsZWQiLCAic2hvd0FsbFdvcmt0cmVlcyIsICJzZXRTaG93QWxsV29ya3RyZWVzIiwgImhhc011bHRpcGxlV29ya3RyZWVzIiwgInNldEhhc011bHRpcGxlV29ya3RyZWVzIiwgInQ2IiwgImdldE9yaWdpbmFsQ3dkIiwgImN1cnJlbnRDd2QiLCAicmVuYW1lVmFsdWUiLCAic2V0UmVuYW1lVmFsdWUiLCAicmVuYW1lQ3Vyc29yT2Zmc2V0IiwgInNldFJlbmFtZUN1cnNvck9mZnNldCIsICJ0NyIsICJTZXQiLCAiZXhwYW5kZWRHcm91cFNlc3Npb25JZHMiLCAic2V0RXhwYW5kZWRHcm91cFNlc3Npb25JZHMiLCAiZm9jdXNlZE5vZGUiLCAic2V0Rm9jdXNlZE5vZGUiLCAiZm9jdXNlZEluZGV4IiwgInNldEZvY3VzZWRJbmRleCIsICJ2aWV3TW9kZSIsICJzZXRWaWV3TW9kZSIsICJwcmV2aWV3TG9nIiwgInNldFByZXZpZXdMb2ciLCAicHJldkZvY3VzZWRJZFJlZiIsICJ1c2VSZWYiLCAic2VsZWN0ZWRUYWdJbmRleCIsICJzZXRTZWxlY3RlZFRhZ0luZGV4IiwgInQ4IiwgInN0YXR1cyIsICJhZ2VudGljU2VhcmNoU3RhdGUiLCAic2V0QWdlbnRpY1NlYXJjaFN0YXRlIiwgImlzQWdlbnRpY1NlYXJjaE9wdGlvbkZvY3VzZWQiLCAic2V0SXNBZ2VudGljU2VhcmNoT3B0aW9uRm9jdXNlZCIsICJhZ2VudGljU2VhcmNoQWJvcnRSZWYiLCAidDkiLCAidDEwIiwgInQxMSIsICJ0MTIiLCAibG9nRXZlbnQiLCAiZW5hYmxlZCIsICJ0MTMiLCAidDE0IiwgImlzQWN0aXZlIiwgIm9uRXhpdCIsICJvbkV4aXRVcCIsICJwYXNzdGhyb3VnaEN0cmxLZXlzIiwgImluaXRpYWxRdWVyeSIsICJzZWFyY2hRdWVyeSIsICJzZXRRdWVyeSIsICJzZXRTZWFyY2hRdWVyeSIsICJjdXJzb3JPZmZzZXQiLCAic2VhcmNoQ3Vyc29yT2Zmc2V0IiwgInVzZVNlYXJjaElucHV0IiwgImRlZmVycmVkU2VhcmNoUXVlcnkiLCAidXNlRGVmZXJyZWRWYWx1ZSIsICJkZWJvdW5jZWREZWVwU2VhcmNoUXVlcnkiLCAic2V0RGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5IiwgInQxNSIsICJ0MTYiLCAidGltZW91dElkIiwgInNldFRpbWVvdXQiLCAiY2xlYXJUaW1lb3V0IiwgInVzZUVmZmVjdCIsICJkZWVwU2VhcmNoUmVzdWx0cyIsICJzZXREZWVwU2VhcmNoUmVzdWx0cyIsICJpc1NlYXJjaGluZyIsICJzZXRJc1NlYXJjaGluZyIsICJ0MTciLCAidDE4IiwgImdldEJyYW5jaCIsICJ0aGVuIiwgImJyYW5jaCIsICJnZXRXb3JrdHJlZVBhdGhzIiwgInBhdGhzIiwgInNlYXJjaGFibGVUZXh0QnlMb2ciLCAiTWFwIiwgIm1hcCIsICJfdGVtcCIsICJ0MTkiLCAidDIwIiwgImdldFVuaXF1ZVRhZ3MiLCAidW5pcXVlVGFncyIsICJoYXNUYWdzIiwgInQyMSIsICJ0YWdUYWJzIiwgImVmZmVjdGl2ZVRhZ0luZGV4IiwgInNlbGVjdGVkVGFiIiwgInRhZ0ZpbHRlciIsICJ0YWdUYWJzTGluZXMiLCAiZmlsdGVyZWQiLCAidDIyIiwgImZpbHRlciIsICJfdGVtcDIiLCAidDIzIiwgImxvZ18yIiwgInRhZyIsICJsb2dfMyIsICJnaXRCcmFuY2giLCAibG9nXzQiLCAiYmFzZUZpbHRlcmVkTG9ncyIsICJiYjAiLCAibG9nXzUiLCAiZGlzcGxheWVkVGl0bGUiLCAiYnJhbmNoXzAiLCAicHJJbmZvIiwgInByTnVtYmVyIiwgInByUmVwb3NpdG9yeSIsICJpbmNsdWRlcyIsICJ0aXRsZUZpbHRlcmVkTG9ncyIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJ0aW1lb3V0SWRfMCIsICJfdGVtcDUiLCAiZmlsdGVyZWRfMCIsICJzbmlwcGV0TWFwIiwgInJlc3VsdCIsICJyZXN1bHRzIiwgInNlYXJjaGFibGVUZXh0IiwgInNuaXBwZXQiLCAiU05JUFBFVF9DT05URVhUX0NIQVJTIiwgInNldCIsICJ0MjciLCAiX3RlbXA2IiwgInRpdGxlTWF0Y2hJZHMiLCAidDI4IiwgInQyOSIsICJsb2dfNyIsICJoYXMiLCAibWVzc2FnZXMiLCAidXVpZCIsICJ0cmFuc2NyaXB0T25seU1hdGNoZXMiLCAiX3RlbXA3IiwgImZpbHRlcmVkTG9ncyIsICJzbmlwcGV0cyIsICJiYjEiLCAiZGlzcGxheWVkTG9ncyIsICJiYjIiLCAidDMwIiwgInNlc3Npb25Hcm91cHMiLCAiZ3JvdXBMb2dzQnlTZXNzaW9uSWQiLCAiQXJyYXkiLCAiZnJvbSIsICJlbnRyaWVzIiwgInQzMSIsICJzZXNzaW9uSWQiLCAiZ3JvdXBMb2dzIiwgImxhdGVzdExvZyIsICJpbmRleEluRmlsdGVyZWQiLCAic25pcHBldF8wIiwgImdldCIsICJzbmlwcGV0U3RyIiwgIm1ldGFkYXRhIiwgImlkIiwgInZhbHVlIiwgImxhYmVsIiwgImRlc2NyaXB0aW9uIiwgImRpbURlc2NyaXB0aW9uIiwgImNoaWxkcmVuIiwgImxvZ184IiwgImluZGV4IiwgImNoaWxkSW5kZXhJbkZpbHRlcmVkIiwgImNoaWxkU25pcHBldCIsICJjaGlsZFNuaXBwZXRTdHIiLCAiY2hpbGRNZXRhZGF0YSIsICJwYXJlbnRNZXRhZGF0YSIsICJ0cmVlTm9kZXMiLCAiYmIzIiwgInQzMiIsICJsb2dfOSIsICJpbmRleF8wIiwgInJhd1N1bW1hcnkiLCAic3VtbWFyeVdpdGhTaWRlY2hhaW4iLCAic3VtbWFyeSIsICJiYXNlRGVzY3JpcHRpb24iLCAic25pcHBldF8xIiwgInNuaXBwZXRTdHJfMCIsICJ0b1N0cmluZyIsICJmbGF0T3B0aW9ucyIsICJmb2N1c2VkTG9nIiwgInNlc3Npb25JZF8wIiwgImdldFNlc3Npb25JZEZyb21Mb2ciLCAic2Vzc2lvbkxvZ3MiLCAibG9nXzEwIiwgImhhc011bHRpcGxlTG9ncyIsICJpc0V4cGFuZGVkIiwgImlzQ2hpbGROb2RlIiwgImdldEV4cGFuZENvbGxhcHNlSGludCIsICJzZXNzaW9uSWRfMSIsICJzYXZlQ3VzdG9tVGl0bGUiLCAiZnVsbFBhdGgiLCAiaGFuZGxlUmVuYW1lU3VibWl0IiwgInQzMyIsICJleGl0U2VhcmNoTW9kZSIsICJ0MzQiLCAiZW50ZXJTZWFyY2hNb2RlIiwgInQzNSIsICJjdXJyZW50IiwgImFib3J0IiwgImFib3J0Q29udHJvbGxlciIsICJBYm9ydENvbnRyb2xsZXIiLCAicXVlcnlfbGVuZ3RoIiwgInJlc3VsdHNfMCIsICJzaWduYWwiLCAiYWJvcnRlZCIsICJyZXN1bHRzX2NvdW50IiwgInQzNiIsICJlcnJvciIsICJtZXNzYWdlIiwgIkVycm9yIiwgImhhbmRsZUFnZW50aWNTZWFyY2giLCAidDM3IiwgInQzOCIsICJ0MzkiLCAicHJldkFnZW50aWNTdGF0dXNSZWYiLCAidDQwIiwgInByZXZTdGF0dXMiLCAiZmlyc3RMb2ciLCAidDQxIiwgInQ0MiIsICJpbmRleF8xIiwgInBhcnNlSW50IiwgImxvZ18xMSIsICJoYW5kbGVGbGF0T3B0aW9uc1NlbGVjdEZvY3VzIiwgInQ0MyIsICJub2RlIiwgImluZGV4XzIiLCAiZmluZEluZGV4IiwgImxvZ18xMiIsICJoYW5kbGVUcmVlU2VsZWN0Rm9jdXMiLCAidDQ0IiwgInQ0NSIsICJ0NDYiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQ0NyIsICJ0NDgiLCAidDQ5IiwgInQ1MCIsICJ0NTEiLCAidDUyIiwgInQ1MyIsICJpbnB1dCIsICJrZXkiLCAiY3RybCIsICJyZXR1cm4iLCAiZG93bkFycm93IiwgInVwQXJyb3ciLCAidGFiIiwgIm9mZnNldCIsICJzaGlmdCIsICJwcmV2IiwgIm5ld0luZGV4IiwgIm5ld1RhYiIsICJpc19hbGwiLCAidGFnX2NvdW50IiwgImtleUlzTm90Q3RybE9yTWV0YSIsICJtZXRhIiwgImxvd2VySW5wdXQiLCAibmV3RW5hYmxlZCIsICJuZXdWYWx1ZSIsICJtZXNzYWdlQ291bnQiLCAidGVzdCIsICJ0NTQiLCAidXNlSW5wdXQiLCAiZmlsdGVySW5kaWNhdG9ycyIsICJwdXNoIiwgInNob3dBZGRpdGlvbmFsRmlsdGVyTGluZSIsICJoZWFkZXJMaW5lcyIsICJ2aXNpYmxlQ291bnQiLCAiZmxvb3IiLCAidDU1IiwgInQ1NiIsICJidWZmZXIiLCAidDU3IiwgInQ1OCIsICJ0NTkiLCAidDYwIiwgInQ2MSIsICJ0NjIiLCAidDYzIiwgInQ2NCIsICJ0NjUiLCAidDY2IiwgInQ2NyIsICJ0NjgiLCAidDY5IiwgIkJvb2xlYW4iLCAidDcwIiwgIm5vZGVfMCIsICJub2RlSWQiLCAic2Vzc2lvbklkXzIiLCAic3RhcnRzV2l0aCIsICJzdWJzdHJpbmciLCAibm9kZUlkXzAiLCAic2Vzc2lvbklkXzMiLCAicHJldl8wIiwgImFkZCIsICJub2RlSWRfMSIsICJzZXNzaW9uSWRfNCIsICJwcmV2XzEiLCAibmV3U2V0IiwgImRlbGV0ZSIsICJ2YWx1ZV8wIiwgIml0ZW1JbmRleCIsICJsb2dfMTMiLCAidDcxIiwgImtleU5hbWUiLCAicGVuZGluZyIsICJ0NzIiLCAicl8wIiwgInIiLCAibG9nXzYiLCAiZnVzZUluZGV4XzAiLCAiZGVib3VuY2VkRGVlcFNlYXJjaFF1ZXJ5XzAiLCAic2V0RGVlcFNlYXJjaFJlc3VsdHNfMCIsICJzZXRJc1NlYXJjaGluZ18wIiwgImZ1c2VJbmRleCIsICJzZWFyY2giLCAic29ydCIsICJfdGVtcDMiLCAiX3RlbXA0IiwgIml0ZW0iLCAic2NvcmUiLCAiYSIsICJiIiwgImFUaW1lIiwgIkRhdGUiLCAibW9kaWZpZWQiLCAiZ2V0VGltZSIsICJiVGltZSIsICJ0aW1lRGlmZiIsICJhYnMiLCAiREFURV9USUVfVEhSRVNIT0xEX01TIiwgImxvZ18xIiwgImN1cnJlbnRTZXNzaW9uSWQiLCAiZ2V0U2Vzc2lvbklkIiwgImxvZ1Nlc3Npb25JZCIsICJpc0N1cnJlbnRTZXNzaW9uIiwgImN1c3RvbVRpdGxlIiwgImZyb21NZXNzYWdlcyIsICJnZXRGaXJzdE1lYW5pbmdmdWxVc2VyTWVzc2FnZVRleHRDb250ZW50IiwgImZpcnN0UHJvbXB0IiwgImJ1aWxkU2VhcmNoYWJsZVRleHQiLCAiZXh0cmFjdFNlYXJjaGFibGVUZXh0IiwgInR5cGUiLCAiY29udGVudCIsICJpc0FycmF5IiwgImJsb2NrIiwgImpvaW4iLCAic2VhcmNoYWJsZU1lc3NhZ2VzIiwgIkRFRVBfU0VBUkNIX01BWF9NRVNTQUdFUyIsICJERUVQX1NFQVJDSF9DUk9QX1NJWkUiLCAibWVzc2FnZVRleHQiLCAiZnVsbFRleHQiLCAiREVFUF9TRUFSQ0hfTUFYX1RFWFRfTEVOR1RIIiwgImdyb3VwcyIsICJleGlzdGluZyIsICJmb3JFYWNoIiwgInRhZ3MiLCAibG9jYWxlQ29tcGFyZSIsICJzZXNzaW9uSWQiLCAiY29tbWFuZCJdCn0K
