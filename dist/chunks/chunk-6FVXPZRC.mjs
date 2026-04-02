#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_useTerminalSize,
  useTerminalSize
} from "./chunk-SY3WEZL4.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  createElement,
  init_react,
  memo
} from "./chunk-TEJH3H3H.mjs";
import {
  init_format,
  init_stringWidth,
  stringWidth,
  truncatePathMiddle,
  truncateToWidth
} from "./chunk-OGGCTXYU.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/PromptInput/PromptInputFooterSuggestions.tsx
function getIcon(itemId) {
  if (itemId.startsWith("file-")) return "+";
  if (itemId.startsWith("mcp-resource-")) return "\u25C7";
  if (itemId.startsWith("agent-")) return "*";
  return "+";
}
function isUnifiedSuggestion(itemId) {
  return itemId.startsWith("file-") || itemId.startsWith("mcp-resource-") || itemId.startsWith("agent-");
}
function PromptInputFooterSuggestions(t0) {
  const $ = c(22);
  const {
    suggestions,
    selectedSuggestion,
    maxColumnWidth: maxColumnWidthProp,
    overlay
  } = t0;
  const {
    rows
  } = useTerminalSize();
  const maxVisibleItems = overlay ? OVERLAY_MAX_ITEMS : Math.min(6, Math.max(1, rows - 3));
  if (suggestions.length === 0) {
    return null;
  }
  let t1;
  if ($[0] !== maxColumnWidthProp || $[1] !== suggestions) {
    t1 = maxColumnWidthProp ?? Math.max(...suggestions.map(_temp)) + 5;
    $[0] = maxColumnWidthProp;
    $[1] = suggestions;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const maxColumnWidth = t1;
  const startIndex = Math.max(0, Math.min(selectedSuggestion - Math.floor(maxVisibleItems / 2), suggestions.length - maxVisibleItems));
  const endIndex = Math.min(startIndex + maxVisibleItems, suggestions.length);
  let T0;
  let t2;
  let t3;
  let t4;
  if ($[3] !== endIndex || $[4] !== maxColumnWidth || $[5] !== overlay || $[6] !== selectedSuggestion || $[7] !== startIndex || $[8] !== suggestions) {
    const visibleItems = suggestions.slice(startIndex, endIndex);
    T0 = ThemedBox_default;
    t2 = "column";
    t3 = overlay ? void 0 : "flex-end";
    let t52;
    if ($[13] !== maxColumnWidth || $[14] !== selectedSuggestion || $[15] !== suggestions) {
      t52 = (item_0) => /* @__PURE__ */ createElement(SuggestionItemRow, { key: item_0.id, item: item_0, maxColumnWidth, isSelected: item_0.id === suggestions[selectedSuggestion]?.id });
      $[13] = maxColumnWidth;
      $[14] = selectedSuggestion;
      $[15] = suggestions;
      $[16] = t52;
    } else {
      t52 = $[16];
    }
    t4 = visibleItems.map(t52);
    $[3] = endIndex;
    $[4] = maxColumnWidth;
    $[5] = overlay;
    $[6] = selectedSuggestion;
    $[7] = startIndex;
    $[8] = suggestions;
    $[9] = T0;
    $[10] = t2;
    $[11] = t3;
    $[12] = t4;
  } else {
    T0 = $[9];
    t2 = $[10];
    t3 = $[11];
    t4 = $[12];
  }
  let t5;
  if ($[17] !== T0 || $[18] !== t2 || $[19] !== t3 || $[20] !== t4) {
    t5 = /* @__PURE__ */ createElement(T0, { flexDirection: t2, justifyContent: t3 }, t4);
    $[17] = T0;
    $[18] = t2;
    $[19] = t3;
    $[20] = t4;
    $[21] = t5;
  } else {
    t5 = $[21];
  }
  return t5;
}
function _temp(item) {
  return stringWidth(item.displayText);
}
var OVERLAY_MAX_ITEMS, SuggestionItemRow, PromptInputFooterSuggestions_default;
var init_PromptInputFooterSuggestions = __esm({
  "src/components/PromptInput/PromptInputFooterSuggestions.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_useTerminalSize();
    init_stringWidth();
    init_ink();
    init_format();
    OVERLAY_MAX_ITEMS = 5;
    SuggestionItemRow = memo(function SuggestionItemRow2(t0) {
      const $ = c(36);
      const {
        item,
        maxColumnWidth,
        isSelected
      } = t0;
      const columns = useTerminalSize().columns;
      const isUnified = isUnifiedSuggestion(item.id);
      if (isUnified) {
        let t12;
        if ($[0] !== item.id) {
          t12 = getIcon(item.id);
          $[0] = item.id;
          $[1] = t12;
        } else {
          t12 = $[1];
        }
        const icon = t12;
        const textColor = isSelected ? "suggestion" : void 0;
        const dimColor = !isSelected;
        const isFile = item.id.startsWith("file-");
        const isMcpResource = item.id.startsWith("mcp-resource-");
        const separatorWidth = item.description ? 3 : 0;
        let displayText;
        if (isFile) {
          let t23;
          if ($[2] !== item.description) {
            t23 = item.description ? Math.min(20, stringWidth(item.description)) : 0;
            $[2] = item.description;
            $[3] = t23;
          } else {
            t23 = $[3];
          }
          const descReserve = t23;
          const maxPathLength = columns - 2 - 4 - separatorWidth - descReserve;
          let t32;
          if ($[4] !== item.displayText || $[5] !== maxPathLength) {
            t32 = truncatePathMiddle(item.displayText, maxPathLength);
            $[4] = item.displayText;
            $[5] = maxPathLength;
            $[6] = t32;
          } else {
            t32 = $[6];
          }
          displayText = t32;
        } else {
          if (isMcpResource) {
            let t23;
            if ($[7] !== item.displayText) {
              t23 = truncateToWidth(item.displayText, 30);
              $[7] = item.displayText;
              $[8] = t23;
            } else {
              t23 = $[8];
            }
            displayText = t23;
          } else {
            displayText = item.displayText;
          }
        }
        const availableWidth = columns - 2 - stringWidth(displayText) - separatorWidth - 4;
        let lineContent;
        if (item.description) {
          const maxDescLength = Math.max(0, availableWidth);
          let t23;
          if ($[9] !== item.description || $[10] !== maxDescLength) {
            t23 = truncateToWidth(item.description.replace(/\s+/g, " "), maxDescLength);
            $[9] = item.description;
            $[10] = maxDescLength;
            $[11] = t23;
          } else {
            t23 = $[11];
          }
          const truncatedDesc = t23;
          lineContent = `${icon} ${displayText} \u2013 ${truncatedDesc}`;
        } else {
          lineContent = `${icon} ${displayText}`;
        }
        let t22;
        if ($[12] !== dimColor || $[13] !== lineContent || $[14] !== textColor) {
          t22 = /* @__PURE__ */ createElement(ThemedText, { color: textColor, dimColor, wrap: "truncate" }, lineContent);
          $[12] = dimColor;
          $[13] = lineContent;
          $[14] = textColor;
          $[15] = t22;
        } else {
          t22 = $[15];
        }
        return t22;
      }
      const maxNameWidth = Math.floor(columns * 0.4);
      const displayTextWidth = Math.min(maxColumnWidth ?? stringWidth(item.displayText) + 5, maxNameWidth);
      const textColor_0 = item.color || (isSelected ? "suggestion" : void 0);
      const shouldDim = !isSelected;
      let displayText_0 = item.displayText;
      if (stringWidth(displayText_0) > displayTextWidth - 2) {
        const t12 = displayTextWidth - 2;
        let t22;
        if ($[16] !== displayText_0 || $[17] !== t12) {
          t22 = truncateToWidth(displayText_0, t12);
          $[16] = displayText_0;
          $[17] = t12;
          $[18] = t22;
        } else {
          t22 = $[18];
        }
        displayText_0 = t22;
      }
      const paddedDisplayText = displayText_0 + " ".repeat(Math.max(0, displayTextWidth - stringWidth(displayText_0)));
      const tagText = item.tag ? `[${item.tag}] ` : "";
      const tagWidth = stringWidth(tagText);
      const descriptionWidth = Math.max(0, columns - displayTextWidth - tagWidth - 4);
      let t1;
      if ($[19] !== descriptionWidth || $[20] !== item.description) {
        t1 = item.description ? truncateToWidth(item.description.replace(/\s+/g, " "), descriptionWidth) : "";
        $[19] = descriptionWidth;
        $[20] = item.description;
        $[21] = t1;
      } else {
        t1 = $[21];
      }
      const truncatedDescription = t1;
      let t2;
      if ($[22] !== paddedDisplayText || $[23] !== shouldDim || $[24] !== textColor_0) {
        t2 = /* @__PURE__ */ createElement(ThemedText, { color: textColor_0, dimColor: shouldDim }, paddedDisplayText);
        $[22] = paddedDisplayText;
        $[23] = shouldDim;
        $[24] = textColor_0;
        $[25] = t2;
      } else {
        t2 = $[25];
      }
      let t3;
      if ($[26] !== tagText) {
        t3 = tagText ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, tagText) : null;
        $[26] = tagText;
        $[27] = t3;
      } else {
        t3 = $[27];
      }
      const t4 = isSelected ? "suggestion" : void 0;
      const t5 = !isSelected;
      let t6;
      if ($[28] !== t4 || $[29] !== t5 || $[30] !== truncatedDescription) {
        t6 = /* @__PURE__ */ createElement(ThemedText, { color: t4, dimColor: t5 }, truncatedDescription);
        $[28] = t4;
        $[29] = t5;
        $[30] = truncatedDescription;
        $[31] = t6;
      } else {
        t6 = $[31];
      }
      let t7;
      if ($[32] !== t2 || $[33] !== t3 || $[34] !== t6) {
        t7 = /* @__PURE__ */ createElement(ThemedText, { wrap: "truncate" }, t2, t3, t6);
        $[32] = t2;
        $[33] = t3;
        $[34] = t6;
        $[35] = t7;
      } else {
        t7 = $[35];
      }
      return t7;
    });
    PromptInputFooterSuggestions_default = memo(PromptInputFooterSuggestions);
  }
});

export {
  PromptInputFooterSuggestions,
  PromptInputFooterSuggestions_default,
  init_PromptInputFooterSuggestions
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvbXB0SW5wdXQvUHJvbXB0SW5wdXRGb290ZXJTdWdnZXN0aW9ucy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVtbywgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdHJ1bmNhdGVQYXRoTWlkZGxlLCB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUuanMnXG5cbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25JdGVtID0ge1xuICBpZDogc3RyaW5nXG4gIGRpc3BsYXlUZXh0OiBzdHJpbmdcbiAgdGFnPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIG1ldGFkYXRhPzogdW5rbm93blxuICBjb2xvcj86IGtleW9mIFRoZW1lXG59XG5cbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25UeXBlID1cbiAgfCAnY29tbWFuZCdcbiAgfCAnZmlsZSdcbiAgfCAnZGlyZWN0b3J5J1xuICB8ICdhZ2VudCdcbiAgfCAnc2hlbGwnXG4gIHwgJ2N1c3RvbS10aXRsZSdcbiAgfCAnc2xhY2stY2hhbm5lbCdcbiAgfCAnbm9uZSdcblxuZXhwb3J0IGNvbnN0IE9WRVJMQVlfTUFYX0lURU1TID0gNVxuXG4vKipcbiAqIEdldCB0aGUgaWNvbiBmb3IgYSBzdWdnZXN0aW9uIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBJY29uczogKyBmb3IgZmlsZXMsIOKXhyBmb3IgTUNQIHJlc291cmNlcywgKiBmb3IgYWdlbnRzXG4gKi9cbmZ1bmN0aW9uIGdldEljb24oaXRlbUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaXRlbUlkLnN0YXJ0c1dpdGgoJ2ZpbGUtJykpIHJldHVybiAnKydcbiAgaWYgKGl0ZW1JZC5zdGFydHNXaXRoKCdtY3AtcmVzb3VyY2UtJykpIHJldHVybiAn4peHJ1xuICBpZiAoaXRlbUlkLnN0YXJ0c1dpdGgoJ2FnZW50LScpKSByZXR1cm4gJyonXG4gIHJldHVybiAnKydcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBpdGVtIGlzIGEgdW5pZmllZCBzdWdnZXN0aW9uIHR5cGUgKGZpbGUsIG1jcC1yZXNvdXJjZSwgb3IgYWdlbnQpXG4gKi9cbmZ1bmN0aW9uIGlzVW5pZmllZFN1Z2dlc3Rpb24oaXRlbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpdGVtSWQuc3RhcnRzV2l0aCgnZmlsZS0nKSB8fFxuICAgIGl0ZW1JZC5zdGFydHNXaXRoKCdtY3AtcmVzb3VyY2UtJykgfHxcbiAgICBpdGVtSWQuc3RhcnRzV2l0aCgnYWdlbnQtJylcbiAgKVxufVxuXG5jb25zdCBTdWdnZXN0aW9uSXRlbVJvdyA9IG1lbW8oZnVuY3Rpb24gU3VnZ2VzdGlvbkl0ZW1Sb3coe1xuICBpdGVtLFxuICBtYXhDb2x1bW5XaWR0aCxcbiAgaXNTZWxlY3RlZCxcbn06IHtcbiAgaXRlbTogU3VnZ2VzdGlvbkl0ZW1cbiAgbWF4Q29sdW1uV2lkdGg/OiBudW1iZXJcbiAgaXNTZWxlY3RlZDogYm9vbGVhblxufSk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VUZXJtaW5hbFNpemUoKS5jb2x1bW5zXG4gIGNvbnN0IGlzVW5pZmllZCA9IGlzVW5pZmllZFN1Z2dlc3Rpb24oaXRlbS5pZClcblxuICAvLyBGb3IgdW5pZmllZCBzdWdnZXN0aW9ucyAoZmlsZSwgbWNwLXJlc291cmNlLCBhZ2VudCksIHVzZSBzaW5nbGUtbGluZSBsYXlvdXQgd2l0aCBpY29uXG4gIGlmIChpc1VuaWZpZWQpIHtcbiAgICBjb25zdCBpY29uID0gZ2V0SWNvbihpdGVtLmlkKVxuICAgIGNvbnN0IHRleHRDb2xvcjoga2V5b2YgVGhlbWUgfCB1bmRlZmluZWQgPSBpc1NlbGVjdGVkXG4gICAgICA/ICdzdWdnZXN0aW9uJ1xuICAgICAgOiB1bmRlZmluZWRcbiAgICBjb25zdCBkaW1Db2xvciA9ICFpc1NlbGVjdGVkXG5cbiAgICBjb25zdCBpc0ZpbGUgPSBpdGVtLmlkLnN0YXJ0c1dpdGgoJ2ZpbGUtJylcbiAgICBjb25zdCBpc01jcFJlc291cmNlID0gaXRlbS5pZC5zdGFydHNXaXRoKCdtY3AtcmVzb3VyY2UtJylcblxuICAgIC8vIENhbGN1bGF0ZSBsYXlvdXQgd2lkdGhzXG4gICAgLy8gTGF5b3V0OiBcIlggXCIgKDIpICsgZGlzcGxheVRleHQgKyBcIiDigJMgXCIgKDMpICsgZGVzY3JpcHRpb24gKyBwYWRkaW5nICg0KVxuICAgIGNvbnN0IGljb25XaWR0aCA9IDIgLy8gaWNvbiArIHNwYWNlIChmaXhlZClcbiAgICBjb25zdCBwYWRkaW5nV2lkdGggPSA0XG4gICAgY29uc3Qgc2VwYXJhdG9yV2lkdGggPSBpdGVtLmRlc2NyaXB0aW9uID8gMyA6IDAgLy8gJyDigJMgJyBzZXBhcmF0b3JcblxuICAgIC8vIEZvciBmaWxlcywgdHJ1bmNhdGUgbWlkZGxlIG9mIHBhdGggdG8gc2hvdyBib3RoIGRpcmVjdG9yeSBjb250ZXh0IGFuZCBmaWxlbmFtZVxuICAgIC8vIEZvciBNQ1AgcmVzb3VyY2VzLCBsaW1pdCBkaXNwbGF5VGV4dCB0byAzMCBjaGFycyAodHJ1bmNhdGUgZnJvbSBlbmQpXG4gICAgLy8gRm9yIGFnZW50cywgbm8gdHJ1bmNhdGlvblxuICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nXG4gICAgaWYgKGlzRmlsZSkge1xuICAgICAgLy8gUmVzZXJ2ZSBzcGFjZSBmb3IgZGVzY3JpcHRpb24gaWYgcHJlc2VudCwgb3RoZXJ3aXNlIHVzZSBhbGwgYXZhaWxhYmxlIHNwYWNlXG4gICAgICBjb25zdCBkZXNjUmVzZXJ2ZSA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgPyBNYXRoLm1pbigyMCwgc3RyaW5nV2lkdGgoaXRlbS5kZXNjcmlwdGlvbikpXG4gICAgICAgIDogMFxuICAgICAgY29uc3QgbWF4UGF0aExlbmd0aCA9XG4gICAgICAgIGNvbHVtbnMgLSBpY29uV2lkdGggLSBwYWRkaW5nV2lkdGggLSBzZXBhcmF0b3JXaWR0aCAtIGRlc2NSZXNlcnZlXG4gICAgICBkaXNwbGF5VGV4dCA9IHRydW5jYXRlUGF0aE1pZGRsZShpdGVtLmRpc3BsYXlUZXh0LCBtYXhQYXRoTGVuZ3RoKVxuICAgIH0gZWxzZSBpZiAoaXNNY3BSZXNvdXJjZSkge1xuICAgICAgY29uc3QgbWF4RGlzcGxheVRleHRMZW5ndGggPSAzMFxuICAgICAgZGlzcGxheVRleHQgPSB0cnVuY2F0ZVRvV2lkdGgoaXRlbS5kaXNwbGF5VGV4dCwgbWF4RGlzcGxheVRleHRMZW5ndGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlUZXh0ID0gaXRlbS5kaXNwbGF5VGV4dFxuICAgIH1cblxuICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID1cbiAgICAgIGNvbHVtbnMgLVxuICAgICAgaWNvbldpZHRoIC1cbiAgICAgIHN0cmluZ1dpZHRoKGRpc3BsYXlUZXh0KSAtXG4gICAgICBzZXBhcmF0b3JXaWR0aCAtXG4gICAgICBwYWRkaW5nV2lkdGhcblxuICAgIC8vIEJ1aWxkIHRoZSBmdWxsIGxpbmUgYXMgYSBzaW5nbGUgc3RyaW5nIHRvIHByZXZlbnQgd3JhcHBpbmdcbiAgICBsZXQgbGluZUNvbnRlbnQ6IHN0cmluZ1xuICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBtYXhEZXNjTGVuZ3RoID0gTWF0aC5tYXgoMCwgYXZhaWxhYmxlV2lkdGgpXG4gICAgICBjb25zdCB0cnVuY2F0ZWREZXNjID0gdHJ1bmNhdGVUb1dpZHRoKFxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKSxcbiAgICAgICAgbWF4RGVzY0xlbmd0aCxcbiAgICAgIClcbiAgICAgIGxpbmVDb250ZW50ID0gYCR7aWNvbn0gJHtkaXNwbGF5VGV4dH0g4oCTICR7dHJ1bmNhdGVkRGVzY31gXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVDb250ZW50ID0gYCR7aWNvbn0gJHtkaXNwbGF5VGV4dH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0IGNvbG9yPXt0ZXh0Q29sb3J9IGRpbUNvbG9yPXtkaW1Db2xvcn0gd3JhcD1cInRydW5jYXRlXCI+XG4gICAgICAgIHtsaW5lQ29udGVudH1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cblxuICAvLyBGb3Igbm9uLXVuaWZpZWQgc3VnZ2VzdGlvbnMgKGNvbW1hbmRzLCBzaGVsbCwgZXRjLiksIHVzZSBpbXByb3ZlZCBsYXlvdXQgZnJvbSBtYWluXG4gIC8vIENhcCB0aGUgY29tbWFuZCBuYW1lIGNvbHVtbiBhdCA0MCUgb2YgdGVybWluYWwgd2lkdGggdG8gZW5zdXJlIGRlc2NyaXB0aW9uIGhhcyBzcGFjZVxuICBjb25zdCBtYXhOYW1lV2lkdGggPSBNYXRoLmZsb29yKGNvbHVtbnMgKiAwLjQpXG4gIGNvbnN0IGRpc3BsYXlUZXh0V2lkdGggPSBNYXRoLm1pbihcbiAgICBtYXhDb2x1bW5XaWR0aCA/PyBzdHJpbmdXaWR0aChpdGVtLmRpc3BsYXlUZXh0KSArIDUsXG4gICAgbWF4TmFtZVdpZHRoLFxuICApXG5cbiAgY29uc3QgdGV4dENvbG9yID0gaXRlbS5jb2xvciB8fCAoaXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZClcbiAgY29uc3Qgc2hvdWxkRGltID0gIWlzU2VsZWN0ZWRcblxuICAvLyBUcnVuY2F0ZSBhbmQgcGFkIHRoZSBkaXNwbGF5IHRleHQgdG8gZml4ZWQgd2lkdGhcbiAgbGV0IGRpc3BsYXlUZXh0ID0gaXRlbS5kaXNwbGF5VGV4dFxuICBpZiAoc3RyaW5nV2lkdGgoZGlzcGxheVRleHQpID4gZGlzcGxheVRleHRXaWR0aCAtIDIpIHtcbiAgICBkaXNwbGF5VGV4dCA9IHRydW5jYXRlVG9XaWR0aChkaXNwbGF5VGV4dCwgZGlzcGxheVRleHRXaWR0aCAtIDIpXG4gIH1cbiAgY29uc3QgcGFkZGVkRGlzcGxheVRleHQgPVxuICAgIGRpc3BsYXlUZXh0ICtcbiAgICAnICcucmVwZWF0KE1hdGgubWF4KDAsIGRpc3BsYXlUZXh0V2lkdGggLSBzdHJpbmdXaWR0aChkaXNwbGF5VGV4dCkpKVxuXG4gIGNvbnN0IHRhZ1RleHQgPSBpdGVtLnRhZyA/IGBbJHtpdGVtLnRhZ31dIGAgOiAnJ1xuICBjb25zdCB0YWdXaWR0aCA9IHN0cmluZ1dpZHRoKHRhZ1RleHQpXG4gIGNvbnN0IGRlc2NyaXB0aW9uV2lkdGggPSBNYXRoLm1heChcbiAgICAwLFxuICAgIGNvbHVtbnMgLSBkaXNwbGF5VGV4dFdpZHRoIC0gdGFnV2lkdGggLSA0LFxuICApXG4gIC8vIFNraWxsIGRlc2NyaXB0aW9ucyBjYW4gY29udGFpbiBuZXdsaW5lcyAoZS5nLiAvY2xhdWRlLWFwaSdzIFwiVFJJR0dFUlxuICAvLyB3aGVuOlwiIGJsb2NrKS4gQSBtdWx0aS1saW5lIHJvdyBncm93cyB0aGUgb3ZlcmxheSBwYXN0IG1pbkhlaWdodDsgd2hlblxuICAvLyB0aGUgZmlsdGVyIG5hcnJvd3MgcGFzdCB0aGF0IHNraWxsLCB0aGUgb3ZlcmxheSBzaHJpbmtzIGFuZCBsZWF2ZXNcbiAgLy8gZ2hvc3Qgcm93cy4gRmxhdHRlbiB0byBvbmUgbGluZSBiZWZvcmUgdHJ1bmNhdGluZy5cbiAgY29uc3QgdHJ1bmNhdGVkRGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uXG4gICAgPyB0cnVuY2F0ZVRvV2lkdGgoaXRlbS5kZXNjcmlwdGlvbi5yZXBsYWNlKC9cXHMrL2csICcgJyksIGRlc2NyaXB0aW9uV2lkdGgpXG4gICAgOiAnJ1xuXG4gIHJldHVybiAoXG4gICAgPFRleHQgd3JhcD1cInRydW5jYXRlXCI+XG4gICAgICA8VGV4dCBjb2xvcj17dGV4dENvbG9yfSBkaW1Db2xvcj17c2hvdWxkRGltfT5cbiAgICAgICAge3BhZGRlZERpc3BsYXlUZXh0fVxuICAgICAgPC9UZXh0PlxuICAgICAge3RhZ1RleHQgPyA8VGV4dCBkaW1Db2xvcj57dGFnVGV4dH08L1RleHQ+IDogbnVsbH1cbiAgICAgIDxUZXh0XG4gICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9XG4gICAgICA+XG4gICAgICAgIHt0cnVuY2F0ZWREZXNjcmlwdGlvbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L1RleHQ+XG4gIClcbn0pXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN1Z2dlc3Rpb25zOiBTdWdnZXN0aW9uSXRlbVtdXG4gIHNlbGVjdGVkU3VnZ2VzdGlvbjogbnVtYmVyXG4gIG1heENvbHVtbldpZHRoPzogbnVtYmVyXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBzdWdnZXN0aW9ucyBhcmUgcmVuZGVyZWQgaW5zaWRlIGEgcG9zaXRpb249YWJzb2x1dGVcbiAgICogb3ZlcmxheS4gV2Ugb21pdCBtaW5IZWlnaHQgYW5kIGZsZXgtZW5kIHNvIHRoZSB5LWNsYW1wIGluIHRoZVxuICAgKiByZW5kZXJlciBkb2Vzbid0IHB1c2ggZmV3ZXIgaXRlbXMgZG93biBpbnRvIHRoZSBwcm9tcHQgYXJlYS5cbiAgICovXG4gIG92ZXJsYXk/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zKHtcbiAgc3VnZ2VzdGlvbnMsXG4gIHNlbGVjdGVkU3VnZ2VzdGlvbixcbiAgbWF4Q29sdW1uV2lkdGg6IG1heENvbHVtbldpZHRoUHJvcCxcbiAgb3ZlcmxheSxcbn06IFByb3BzKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICAvLyBNYXhpbXVtIG51bWJlciBvZiBzdWdnZXN0aW9ucyB0byBzaG93IGF0IG9uY2UgKGxlYXZpbmcgc3BhY2UgZm9yIHByb21wdCkuXG4gIC8vIE92ZXJsYXkgbW9kZSAoZnVsbHNjcmVlbikgdXNlcyBhIGZpeGVkIDUg4oCUIHRoZSBmbG9hdGluZyBib3ggc2l0cyBvdmVyXG4gIC8vIHRoZSBTY3JvbGxCb3gsIHNvIHRlcm1pbmFsIGhlaWdodCBpc24ndCB0aGUgY29uc3RyYWludC5cbiAgY29uc3QgbWF4VmlzaWJsZUl0ZW1zID0gb3ZlcmxheVxuICAgID8gT1ZFUkxBWV9NQVhfSVRFTVNcbiAgICA6IE1hdGgubWluKDYsIE1hdGgubWF4KDEsIHJvd3MgLSAzKSlcblxuICAvLyBObyBzdWdnZXN0aW9ucyB0byBkaXNwbGF5XG4gIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gVXNlIHByb3AgaWYgcHJvdmlkZWQgKHN0YWJsZSB3aWR0aCBmcm9tIGFsbCBjb21tYW5kcyksIG90aGVyd2lzZSBjYWxjdWxhdGUgZnJvbSB2aXNpYmxlXG4gIGNvbnN0IG1heENvbHVtbldpZHRoID1cbiAgICBtYXhDb2x1bW5XaWR0aFByb3AgPz9cbiAgICBNYXRoLm1heCguLi5zdWdnZXN0aW9ucy5tYXAoaXRlbSA9PiBzdHJpbmdXaWR0aChpdGVtLmRpc3BsYXlUZXh0KSkpICsgNVxuXG4gIC8vIENhbGN1bGF0ZSB2aXNpYmxlIGl0ZW1zIHJhbmdlIGJhc2VkIG9uIHNlbGVjdGVkIGluZGV4XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSBNYXRoLm1heChcbiAgICAwLFxuICAgIE1hdGgubWluKFxuICAgICAgc2VsZWN0ZWRTdWdnZXN0aW9uIC0gTWF0aC5mbG9vcihtYXhWaXNpYmxlSXRlbXMgLyAyKSxcbiAgICAgIHN1Z2dlc3Rpb25zLmxlbmd0aCAtIG1heFZpc2libGVJdGVtcyxcbiAgICApLFxuICApXG4gIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIG1heFZpc2libGVJdGVtcywgc3VnZ2VzdGlvbnMubGVuZ3RoKVxuICBjb25zdCB2aXNpYmxlSXRlbXMgPSBzdWdnZXN0aW9ucy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuICAvLyBJbiBub24tb3ZlcmxheSAoaW5saW5lKSBtb2RlLCBqdXN0aWZ5Q29udGVudCBrZWVwcyBzdWdnZXN0aW9uc1xuICAvLyBhbmNob3JlZCB0byB0aGUgYm90dG9tIChuZWFyIHRoZSBwcm9tcHQpLiBJbiBvdmVybGF5IG1vZGUgd2Ugb21pdFxuICAvLyBib3RoIG1pbkhlaWdodCBhbmQgZmxleC1lbmQ6IHRoZSBwYXJlbnQgaXMgcG9zaXRpb249YWJzb2x1dGUgd2l0aFxuICAvLyBib3R0b209JzEwMCUnLCBzbyBpdHMgeSBpcyBjbGFtcGVkIHRvIDAgYnkgdGhlIHJlbmRlcmVyIHdoZW4gaXRcbiAgLy8gd291bGQgZ28gbmVnYXRpdmUuIEFkZGluZyBtaW5IZWlnaHQgKyBmbGV4LWVuZCB3b3VsZCBjcmVhdGUgZW1wdHlcbiAgLy8gcGFkZGluZyByb3dzIHRoYXQgc2hpZnQgdGhlIHZpc2libGUgaXRlbXMgZG93biBpbnRvIHRoZSBwcm9tcHQgYXJlYVxuICAvLyB3aGVuIHRoZSBsaXN0IGhhcyBmZXdlciBpdGVtcyB0aGFuIG1heFZpc2libGVJdGVtcy5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PXtvdmVybGF5ID8gdW5kZWZpbmVkIDogJ2ZsZXgtZW5kJ31cbiAgICA+XG4gICAgICB7dmlzaWJsZUl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgPFN1Z2dlc3Rpb25JdGVtUm93XG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgbWF4Q29sdW1uV2lkdGg9e21heENvbHVtbldpZHRofVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaWQgPT09IHN1Z2dlc3Rpb25zW3NlbGVjdGVkU3VnZ2VzdGlvbl0/LmlkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQcm9tcHRJbnB1dEZvb3RlclN1Z2dlc3Rpb25zKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSxTQUFTQSxRQUFRQyxRQUF3QjtBQUN2QyxNQUFJQSxPQUFPQyxXQUFXLE9BQU8sRUFBRyxRQUFPO0FBQ3ZDLE1BQUlELE9BQU9DLFdBQVcsZUFBZSxFQUFHLFFBQU87QUFDL0MsTUFBSUQsT0FBT0MsV0FBVyxRQUFRLEVBQUcsUUFBTztBQUN4QyxTQUFPO0FBQ1Q7QUFLQSxTQUFTQyxvQkFBb0JGLFFBQXlCO0FBQ3BELFNBQ0VBLE9BQU9DLFdBQVcsT0FBTyxLQUN6QkQsT0FBT0MsV0FBVyxlQUFlLEtBQ2pDRCxPQUFPQyxXQUFXLFFBQVE7QUFFOUI7QUEySU8sU0FBQUUsNkJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBc0MsUUFBQTtJQUFBQztJQUFBQztJQUFBQyxnQkFBQUM7SUFBQUM7RUFBQSxJQUFBUDtBQU0zQyxRQUFBO0lBQUFRO0VBQUEsSUFBaUJDLGdCQUFnQjtBQUlqQyxRQUFBQyxrQkFBd0JILFVBQUFJLG9CQUVwQkMsS0FBSUMsSUFBSyxHQUFHRCxLQUFJRSxJQUFLLEdBQUdOLE9BQU8sQ0FBQyxDQUFDO0FBR3JDLE1BQUlMLFlBQVdZLFdBQVksR0FBQztBQUFBLFdBQ25CO0VBQUk7QUFDWixNQUFBQztBQUFBLE1BQUFmLEVBQUEsQ0FBQSxNQUFBSyxzQkFBQUwsRUFBQSxDQUFBLE1BQUFFLGFBQUE7QUFJQ2EsU0FBQVYsc0JBQ0FNLEtBQUlFLElBQUksR0FBSVgsWUFBV2MsSUFBS0MsS0FBcUMsQ0FBQyxJQUFJO0FBQUNqQixNQUFBLENBQUEsSUFBQUs7QUFBQUwsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBZTtFQUFBLE9BQUE7QUFBQUEsU0FBQWYsRUFBQSxDQUFBO0VBQUE7QUFGekUsUUFBQUksaUJBQ0VXO0FBSUYsUUFBQUcsYUFBbUJQLEtBQUlFLElBQ3JCLEdBQ0FGLEtBQUlDLElBQ0ZULHFCQUFxQlEsS0FBSVEsTUFBT1Ysa0JBQWtCLENBQUMsR0FDbkRQLFlBQVdZLFNBQVVMLGVBQ3ZCLENBQ0Y7QUFDQSxRQUFBVyxXQUFpQlQsS0FBSUMsSUFBS00sYUFBYVQsaUJBQWlCUCxZQUFXWSxNQUFPO0FBQUMsTUFBQU87QUFBQSxNQUFBQztBQUFBLE1BQUFDO0FBQUEsTUFBQUM7QUFBQSxNQUFBeEIsRUFBQSxDQUFBLE1BQUFvQixZQUFBcEIsRUFBQSxDQUFBLE1BQUFJLGtCQUFBSixFQUFBLENBQUEsTUFBQU0sV0FBQU4sRUFBQSxDQUFBLE1BQUFHLHNCQUFBSCxFQUFBLENBQUEsTUFBQWtCLGNBQUFsQixFQUFBLENBQUEsTUFBQUUsYUFBQTtBQUMzRSxVQUFBdUIsZUFBcUJ2QixZQUFXd0IsTUFBT1IsWUFBWUUsUUFBUTtBQVV4REMsU0FBQU07QUFDZUwsU0FBQTtBQUNFQyxTQUFBakIsVUFBQXNCLFNBQUE7QUFBZ0MsUUFBQUM7QUFBQSxRQUFBN0IsRUFBQSxFQUFBLE1BQUFJLGtCQUFBSixFQUFBLEVBQUEsTUFBQUcsc0JBQUFILEVBQUEsRUFBQSxNQUFBRSxhQUFBO0FBRTlCMkIsTUFBQUEsTUFBQUMsWUFDaEIsOEJBQUMscUJBQ00sS0FBQUMsT0FBSUMsSUFDSEQsTUFBQUEsUUFDVTNCLGdCQUNKLFlBQUEyQixPQUFJQyxPQUFROUIsWUFBWUMsa0JBQWtCLEdBQUs2QixJQUFBO0FBRTlEaEMsUUFBQSxFQUFBLElBQUFJO0FBQUFKLFFBQUEsRUFBQSxJQUFBRztBQUFBSCxRQUFBLEVBQUEsSUFBQUU7QUFBQUYsUUFBQSxFQUFBLElBQUE2QjtJQUFBLE9BQUE7QUFBQUEsTUFBQUEsTUFBQTdCLEVBQUEsRUFBQTtJQUFBO0FBUEF3QixTQUFBQyxhQUFZVCxJQUFLYSxHQU9qQjtBQUFDN0IsTUFBQSxDQUFBLElBQUFvQjtBQUFBcEIsTUFBQSxDQUFBLElBQUFJO0FBQUFKLE1BQUEsQ0FBQSxJQUFBTTtBQUFBTixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFrQjtBQUFBbEIsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBcUI7QUFBQXJCLE1BQUEsRUFBQSxJQUFBc0I7QUFBQXRCLE1BQUEsRUFBQSxJQUFBdUI7QUFBQXZCLE1BQUEsRUFBQSxJQUFBd0I7RUFBQSxPQUFBO0FBQUFILFNBQUFyQixFQUFBLENBQUE7QUFBQXNCLFNBQUF0QixFQUFBLEVBQUE7QUFBQXVCLFNBQUF2QixFQUFBLEVBQUE7QUFBQXdCLFNBQUF4QixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUE2QjtBQUFBLE1BQUE3QixFQUFBLEVBQUEsTUFBQXFCLE1BQUFyQixFQUFBLEVBQUEsTUFBQXNCLE1BQUF0QixFQUFBLEVBQUEsTUFBQXVCLE1BQUF2QixFQUFBLEVBQUEsTUFBQXdCLElBQUE7QUFYSkssU0FBQSw4QkFBQyxNQUNlLGVBQUFQLElBQ0UsZ0JBQUFDLE1BRWZDLEVBUUg7QUFBTXhCLE1BQUEsRUFBQSxJQUFBcUI7QUFBQXJCLE1BQUEsRUFBQSxJQUFBc0I7QUFBQXRCLE1BQUEsRUFBQSxJQUFBdUI7QUFBQXZCLE1BQUEsRUFBQSxJQUFBd0I7QUFBQXhCLE1BQUEsRUFBQSxJQUFBNkI7RUFBQSxPQUFBO0FBQUFBLFNBQUE3QixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBWk42QjtBQVlNO0FBdkRILFNBQUFaLE1BQUFjLE1BQUE7QUFBQSxTQXNCaUNFLFlBQVlGLEtBQUlHLFdBQVk7QUFBQztJQXZMeER4QixtQkF3QlB5QixtQkFvTU47Ozs7QUF2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0JPLElBQU16QixvQkFBb0I7QUF3QmpDLElBQU15QixvQkFBb0JDLEtBQUssU0FBQUQsbUJBQUFwQyxJQUFBO0FBQUEsWUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQTJCLFlBQUE7UUFBQThCO1FBQUEzQjtRQUFBaUM7TUFBQSxJQUFBdEM7QUFTeEQsWUFBQXVDLFVBQWdCOUIsZ0JBQWdCLEVBQUM4QjtBQUNqQyxZQUFBQyxZQUFrQjFDLG9CQUFvQmtDLEtBQUlDLEVBQUc7QUFHN0MsVUFBSU8sV0FBUztBQUFBLFlBQUF4QjtBQUFBLFlBQUFmLEVBQUEsQ0FBQSxNQUFBK0IsS0FBQUMsSUFBQTtBQUNFakIsVUFBQUEsTUFBQXJCLFFBQVFxQyxLQUFJQyxFQUFHO0FBQUNoQyxZQUFBLENBQUEsSUFBQStCLEtBQUFDO0FBQUFoQyxZQUFBLENBQUEsSUFBQWU7UUFBQSxPQUFBO0FBQUFBLFVBQUFBLE1BQUFmLEVBQUEsQ0FBQTtRQUFBO0FBQTdCLGNBQUF3QyxPQUFhekI7QUFDYixjQUFBMEIsWUFBMkNKLGFBQUEsZUFBQVQ7QUFHM0MsY0FBQWMsV0FBaUIsQ0FBQ0w7QUFFbEIsY0FBQU0sU0FBZVosS0FBSUMsR0FBR3BDLFdBQVksT0FBTztBQUN6QyxjQUFBZ0QsZ0JBQXNCYixLQUFJQyxHQUFHcEMsV0FBWSxlQUFlO0FBTXhELGNBQUFpRCxpQkFBdUJkLEtBQUllLGNBQUosSUFBQTtBQUtuQlosWUFBQUE7QUFDSixZQUFJUyxRQUFNO0FBQUEsY0FBQXJCO0FBQUEsY0FBQXRCLEVBQUEsQ0FBQSxNQUFBK0IsS0FBQWUsYUFBQTtBQUVZeEIsWUFBQUEsTUFBQVMsS0FBSWUsY0FDcEJuQyxLQUFJQyxJQUFLLElBQUlxQixZQUFZRixLQUFJZSxXQUFZLENBQ3pDLElBRmdCO0FBRWY5QyxjQUFBLENBQUEsSUFBQStCLEtBQUFlO0FBQUE5QyxjQUFBLENBQUEsSUFBQXNCO1VBQUEsT0FBQTtBQUFBQSxZQUFBQSxNQUFBdEIsRUFBQSxDQUFBO1VBQUE7QUFGTCxnQkFBQStDLGNBQW9CekI7QUFHcEIsZ0JBQUEwQixnQkFDRVYsVUFkYyxJQUNHLElBYW9CTyxpQkFBaUJFO0FBQVcsY0FBQXhCO0FBQUEsY0FBQXZCLEVBQUEsQ0FBQSxNQUFBK0IsS0FBQUcsZUFBQWxDLEVBQUEsQ0FBQSxNQUFBZ0QsZUFBQTtBQUNyRHpCLFlBQUFBLE1BQUEwQixtQkFBbUJsQixLQUFJRyxhQUFjYyxhQUFhO0FBQUNoRCxjQUFBLENBQUEsSUFBQStCLEtBQUFHO0FBQUFsQyxjQUFBLENBQUEsSUFBQWdEO0FBQUFoRCxjQUFBLENBQUEsSUFBQXVCO1VBQUEsT0FBQTtBQUFBQSxZQUFBQSxNQUFBdkIsRUFBQSxDQUFBO1VBQUE7QUFBakVrQyx3QkFBY0E7UUFBSCxPQUFBO0FBQ04sY0FBSVUsZUFBYTtBQUFBLGdCQUFBdEI7QUFBQSxnQkFBQXRCLEVBQUEsQ0FBQSxNQUFBK0IsS0FBQUcsYUFBQTtBQUVSWixjQUFBQSxNQUFBNEIsZ0JBQWdCbkIsS0FBSUcsYUFETCxFQUN1QztBQUFDbEMsZ0JBQUEsQ0FBQSxJQUFBK0IsS0FBQUc7QUFBQWxDLGdCQUFBLENBQUEsSUFBQXNCO1lBQUEsT0FBQTtBQUFBQSxjQUFBQSxNQUFBdEIsRUFBQSxDQUFBO1lBQUE7QUFBckVrQywwQkFBY0E7VUFBSCxPQUFBO0FBRVhBLDBCQUFjSCxLQUFJRztVQUFQO1FBQ1o7QUFFRCxjQUFBaUIsaUJBQ0ViLFVBeEJnQixJQTBCaEJMLFlBQVlDLFdBQVcsSUFDdkJXLGlCQTFCbUI7QUE4QmpCTyxZQUFBQTtBQUNKLFlBQUlyQixLQUFJZSxhQUFZO0FBQ2xCLGdCQUFBTyxnQkFBc0IxQyxLQUFJRSxJQUFLLEdBQUdzQyxjQUFjO0FBQUMsY0FBQTdCO0FBQUEsY0FBQXRCLEVBQUEsQ0FBQSxNQUFBK0IsS0FBQWUsZUFBQTlDLEVBQUEsRUFBQSxNQUFBcUQsZUFBQTtBQUMzQi9CLFlBQUFBLE1BQUE0QixnQkFDcEJuQixLQUFJZSxZQUFZUSxRQUFTLFFBQVEsR0FBRyxHQUNwQ0QsYUFDRjtBQUFDckQsY0FBQSxDQUFBLElBQUErQixLQUFBZTtBQUFBOUMsY0FBQSxFQUFBLElBQUFxRDtBQUFBckQsY0FBQSxFQUFBLElBQUFzQjtVQUFBLE9BQUE7QUFBQUEsWUFBQUEsTUFBQXRCLEVBQUEsRUFBQTtVQUFBO0FBSEQsZ0JBQUF1RCxnQkFBc0JqQztBQUl0QjhCLHdCQUFjQSxHQUFHWixJQUFJLElBQUlOLFdBQVcsV0FBTXFCLGFBQWE7UUFBNUMsT0FBQTtBQUVYSCx3QkFBY0EsR0FBR1osSUFBSSxJQUFJTixXQUFXO1FBQXpCO0FBQ1osWUFBQVo7QUFBQSxZQUFBdEIsRUFBQSxFQUFBLE1BQUEwQyxZQUFBMUMsRUFBQSxFQUFBLE1BQUFvRCxlQUFBcEQsRUFBQSxFQUFBLE1BQUF5QyxXQUFBO0FBR0NuQixVQUFBQSxNQUFBLDhCQUFDLGNBQVltQixPQUFBQSxXQUFxQkMsVUFBZSxNQUFBLGNBQzlDVSxXQUNIO0FBQU9wRCxZQUFBLEVBQUEsSUFBQTBDO0FBQUExQyxZQUFBLEVBQUEsSUFBQW9EO0FBQUFwRCxZQUFBLEVBQUEsSUFBQXlDO0FBQUF6QyxZQUFBLEVBQUEsSUFBQXNCO1FBQUEsT0FBQTtBQUFBQSxVQUFBQSxNQUFBdEIsRUFBQSxFQUFBO1FBQUE7QUFBQSxlQUZQc0I7TUFFTztBQU1YLFlBQUFrQyxlQUFxQjdDLEtBQUlRLE1BQU9tQixVQUFVLEdBQUc7QUFDN0MsWUFBQW1CLG1CQUF5QjlDLEtBQUlDLElBQzNCUixrQkFBa0I2QixZQUFZRixLQUFJRyxXQUFZLElBQUksR0FDbERzQixZQUNGO0FBRUEsWUFBQUUsY0FBa0IzQixLQUFJNEIsVUFBV3RCLGFBQUEsZUFBQVQ7QUFDakMsWUFBQWdDLFlBQWtCLENBQUN2QjtBQUduQixVQUFBd0IsZ0JBQWtCOUIsS0FBSUc7QUFDdEIsVUFBSUQsWUFBWUMsYUFBVyxJQUFJdUIsbUJBQW1CLEdBQUM7QUFDTixjQUFBMUMsTUFBQTBDLG1CQUFtQjtBQUFDLFlBQUFuQztBQUFBLFlBQUF0QixFQUFBLEVBQUEsTUFBQTZELGlCQUFBN0QsRUFBQSxFQUFBLE1BQUFlLEtBQUE7QUFBakRPLFVBQUFBLE1BQUE0QixnQkFBZ0JoQixlQUFhbkIsR0FBb0I7QUFBQ2YsWUFBQSxFQUFBLElBQUE2RDtBQUFBN0QsWUFBQSxFQUFBLElBQUFlO0FBQUFmLFlBQUEsRUFBQSxJQUFBc0I7UUFBQSxPQUFBO0FBQUFBLFVBQUFBLE1BQUF0QixFQUFBLEVBQUE7UUFBQTtBQUFoRWtDLHdCQUFjQTtNQUFIO0FBRWIsWUFBQTRCLG9CQUNFNUIsZ0JBQ0EsSUFBRzZCLE9BQVFwRCxLQUFJRSxJQUFLLEdBQUc0QyxtQkFBbUJ4QixZQUFZQyxhQUFXLENBQUMsQ0FBQztBQUVyRSxZQUFBOEIsVUFBZ0JqQyxLQUFJa0MsTUFBSixJQUFlbEMsS0FBSWtDLEdBQUksT0FBdkI7QUFDaEIsWUFBQUMsV0FBaUJqQyxZQUFZK0IsT0FBTztBQUNwQyxZQUFBRyxtQkFBeUJ4RCxLQUFJRSxJQUMzQixHQUNBeUIsVUFBVW1CLG1CQUFtQlMsV0FBVyxDQUMxQztBQUFDLFVBQUFuRDtBQUFBLFVBQUFmLEVBQUEsRUFBQSxNQUFBbUUsb0JBQUFuRSxFQUFBLEVBQUEsTUFBQStCLEtBQUFlLGFBQUE7QUFLNEIvQixhQUFBZ0IsS0FBSWUsY0FDN0JJLGdCQUFnQm5CLEtBQUllLFlBQVlRLFFBQVMsUUFBUSxHQUFHLEdBQUdhLGdCQUN0RCxJQUZ3QjtBQUV2Qm5FLFVBQUEsRUFBQSxJQUFBbUU7QUFBQW5FLFVBQUEsRUFBQSxJQUFBK0IsS0FBQWU7QUFBQTlDLFVBQUEsRUFBQSxJQUFBZTtNQUFBLE9BQUE7QUFBQUEsYUFBQWYsRUFBQSxFQUFBO01BQUE7QUFGTixZQUFBb0UsdUJBQTZCckQ7QUFFdkIsVUFBQU87QUFBQSxVQUFBdEIsRUFBQSxFQUFBLE1BQUE4RCxxQkFBQTlELEVBQUEsRUFBQSxNQUFBNEQsYUFBQTVELEVBQUEsRUFBQSxNQUFBMEQsYUFBQTtBQUlGcEMsYUFBQSw4QkFBQyxjQUFZbUIsT0FBQUEsYUFBcUJtQixVQUFBQSxhQUMvQkUsaUJBQ0g7QUFBTzlELFVBQUEsRUFBQSxJQUFBOEQ7QUFBQTlELFVBQUEsRUFBQSxJQUFBNEQ7QUFBQTVELFVBQUEsRUFBQSxJQUFBMEQ7QUFBQTFELFVBQUEsRUFBQSxJQUFBc0I7TUFBQSxPQUFBO0FBQUFBLGFBQUF0QixFQUFBLEVBQUE7TUFBQTtBQUFBLFVBQUF1QjtBQUFBLFVBQUF2QixFQUFBLEVBQUEsTUFBQWdFLFNBQUE7QUFDTnpDLGFBQUF5QyxVQUFVLDhCQUFDLGNBQUssVUFBQSxRQUFVQSxPQUFRLElBQWxDO0FBQWdEaEUsVUFBQSxFQUFBLElBQUFnRTtBQUFBaEUsVUFBQSxFQUFBLElBQUF1QjtNQUFBLE9BQUE7QUFBQUEsYUFBQXZCLEVBQUEsRUFBQTtNQUFBO0FBRXhDLFlBQUF3QixLQUFBYSxhQUFBLGVBQUFUO0FBQ0csWUFBQUMsS0FBQSxDQUFDUTtBQUFVLFVBQUFnQztBQUFBLFVBQUFyRSxFQUFBLEVBQUEsTUFBQXdCLE1BQUF4QixFQUFBLEVBQUEsTUFBQTZCLE1BQUE3QixFQUFBLEVBQUEsTUFBQW9FLHNCQUFBO0FBRnZCQyxhQUFBLDhCQUFDLGNBQ1EsT0FBQTdDLElBQ0csVUFBQUssTUFFVHVDLG9CQUNIO0FBQU9wRSxVQUFBLEVBQUEsSUFBQXdCO0FBQUF4QixVQUFBLEVBQUEsSUFBQTZCO0FBQUE3QixVQUFBLEVBQUEsSUFBQW9FO0FBQUFwRSxVQUFBLEVBQUEsSUFBQXFFO01BQUEsT0FBQTtBQUFBQSxhQUFBckUsRUFBQSxFQUFBO01BQUE7QUFBQSxVQUFBc0U7QUFBQSxVQUFBdEUsRUFBQSxFQUFBLE1BQUFzQixNQUFBdEIsRUFBQSxFQUFBLE1BQUF1QixNQUFBdkIsRUFBQSxFQUFBLE1BQUFxRSxJQUFBO0FBVlRDLGFBQUEsOEJBQUMsY0FBVSxNQUFBLGNBQ1RoRCxJQUdDQyxJQUNEOEMsRUFNRjtBQUFPckUsVUFBQSxFQUFBLElBQUFzQjtBQUFBdEIsVUFBQSxFQUFBLElBQUF1QjtBQUFBdkIsVUFBQSxFQUFBLElBQUFxRTtBQUFBckUsVUFBQSxFQUFBLElBQUFzRTtNQUFBLE9BQUE7QUFBQUEsYUFBQXRFLEVBQUEsRUFBQTtNQUFBO0FBQUEsYUFYUHNFO0lBV08sQ0FFVjtBQXlFRCxJQUFBLHVDQUFlbEMsS0FBS3RDLDRCQUE0Qjs7OyIsCiAgIm5hbWVzIjogWyJnZXRJY29uIiwgIml0ZW1JZCIsICJzdGFydHNXaXRoIiwgImlzVW5pZmllZFN1Z2dlc3Rpb24iLCAiUHJvbXB0SW5wdXRGb290ZXJTdWdnZXN0aW9ucyIsICJ0MCIsICIkIiwgIl9jIiwgInN1Z2dlc3Rpb25zIiwgInNlbGVjdGVkU3VnZ2VzdGlvbiIsICJtYXhDb2x1bW5XaWR0aCIsICJtYXhDb2x1bW5XaWR0aFByb3AiLCAib3ZlcmxheSIsICJyb3dzIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJtYXhWaXNpYmxlSXRlbXMiLCAiT1ZFUkxBWV9NQVhfSVRFTVMiLCAiTWF0aCIsICJtaW4iLCAibWF4IiwgImxlbmd0aCIsICJ0MSIsICJtYXAiLCAiX3RlbXAiLCAic3RhcnRJbmRleCIsICJmbG9vciIsICJlbmRJbmRleCIsICJUMCIsICJ0MiIsICJ0MyIsICJ0NCIsICJ2aXNpYmxlSXRlbXMiLCAic2xpY2UiLCAiQm94IiwgInVuZGVmaW5lZCIsICJ0NSIsICJpdGVtXzAiLCAiaXRlbSIsICJpZCIsICJzdHJpbmdXaWR0aCIsICJkaXNwbGF5VGV4dCIsICJTdWdnZXN0aW9uSXRlbVJvdyIsICJtZW1vIiwgImlzU2VsZWN0ZWQiLCAiY29sdW1ucyIsICJpc1VuaWZpZWQiLCAiaWNvbiIsICJ0ZXh0Q29sb3IiLCAiZGltQ29sb3IiLCAiaXNGaWxlIiwgImlzTWNwUmVzb3VyY2UiLCAic2VwYXJhdG9yV2lkdGgiLCAiZGVzY3JpcHRpb24iLCAiZGVzY1Jlc2VydmUiLCAibWF4UGF0aExlbmd0aCIsICJ0cnVuY2F0ZVBhdGhNaWRkbGUiLCAidHJ1bmNhdGVUb1dpZHRoIiwgImF2YWlsYWJsZVdpZHRoIiwgImxpbmVDb250ZW50IiwgIm1heERlc2NMZW5ndGgiLCAicmVwbGFjZSIsICJ0cnVuY2F0ZWREZXNjIiwgIm1heE5hbWVXaWR0aCIsICJkaXNwbGF5VGV4dFdpZHRoIiwgInRleHRDb2xvcl8wIiwgImNvbG9yIiwgInNob3VsZERpbSIsICJkaXNwbGF5VGV4dF8wIiwgInBhZGRlZERpc3BsYXlUZXh0IiwgInJlcGVhdCIsICJ0YWdUZXh0IiwgInRhZyIsICJ0YWdXaWR0aCIsICJkZXNjcmlwdGlvbldpZHRoIiwgInRydW5jYXRlZERlc2NyaXB0aW9uIiwgInQ2IiwgInQ3Il0KfQo=
