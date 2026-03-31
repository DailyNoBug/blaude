#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-ADZQUMT7.mjs";
import {
  Pane,
  init_KeybindingContext,
  init_Pane,
  init_useKeybinding,
  useKeybinding,
  useOptionalKeybindingContext
} from "./chunk-2LTMY2QU.mjs";
import {
  Text,
  ThemedBox_default,
  ThemedText,
  c,
  init_Text,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  Children,
  createElement,
  init_react,
  isValidElement,
  react_default,
  useEffect,
  useRef
} from "./chunk-TEJH3H3H.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/keybindings/useShortcutDisplay.ts
function useShortcutDisplay(action, context, fallback) {
  const keybindingContext = useOptionalKeybindingContext();
  const resolved = keybindingContext?.getDisplayText(action, context);
  const isFallback = resolved === void 0;
  const reason = keybindingContext ? "action_not_found" : "no_context";
  const hasLoggedRef = useRef(false);
  useEffect(() => {
    if (isFallback && !hasLoggedRef.current) {
      hasLoggedRef.current = true;
      logEvent("tengu_keybinding_fallback_used", {
        action,
        context,
        fallback,
        reason
      });
    }
  }, [isFallback, action, context, fallback, reason]);
  return isFallback ? fallback : resolved;
}
var init_useShortcutDisplay = __esm({
  "src/keybindings/useShortcutDisplay.ts"() {
    init_react();
    init_analytics();
    init_KeybindingContext();
  }
});

// src/components/design-system/KeyboardShortcutHint.tsx
function KeyboardShortcutHint(t0) {
  const $ = c(9);
  const {
    shortcut,
    action,
    parens: t1,
    bold: t2
  } = t0;
  const parens = t1 === void 0 ? false : t1;
  const bold = t2 === void 0 ? false : t2;
  let t3;
  if ($[0] !== bold || $[1] !== shortcut) {
    t3 = bold ? /* @__PURE__ */ react_default.createElement(Text, { bold: true }, shortcut) : shortcut;
    $[0] = bold;
    $[1] = shortcut;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const shortcutText = t3;
  if (parens) {
    let t42;
    if ($[3] !== action || $[4] !== shortcutText) {
      t42 = /* @__PURE__ */ react_default.createElement(Text, null, "(", shortcutText, " to ", action, ")");
      $[3] = action;
      $[4] = shortcutText;
      $[5] = t42;
    } else {
      t42 = $[5];
    }
    return t42;
  }
  let t4;
  if ($[6] !== action || $[7] !== shortcutText) {
    t4 = /* @__PURE__ */ react_default.createElement(Text, null, shortcutText, " to ", action);
    $[6] = action;
    $[7] = shortcutText;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  return t4;
}
var init_KeyboardShortcutHint = __esm({
  "src/components/design-system/KeyboardShortcutHint.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_Text();
  }
});

// src/components/ConfigurableShortcutHint.tsx
function ConfigurableShortcutHint(t0) {
  const $ = c(5);
  const {
    action,
    context,
    fallback,
    description,
    parens,
    bold
  } = t0;
  const shortcut = useShortcutDisplay(action, context, fallback);
  let t1;
  if ($[0] !== bold || $[1] !== description || $[2] !== parens || $[3] !== shortcut) {
    t1 = /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut, action: description, parens, bold });
    $[0] = bold;
    $[1] = description;
    $[2] = parens;
    $[3] = shortcut;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
}
var init_ConfigurableShortcutHint = __esm({
  "src/components/ConfigurableShortcutHint.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useShortcutDisplay();
    init_KeyboardShortcutHint();
  }
});

// src/components/design-system/Byline.tsx
function Byline(t0) {
  const $ = c(5);
  const {
    children
  } = t0;
  let t1;
  let t2;
  if ($[0] !== children) {
    t2 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb0: {
      const validChildren = Children.toArray(children);
      if (validChildren.length === 0) {
        t2 = null;
        break bb0;
      }
      t1 = validChildren.map(_temp);
    }
    $[0] = children;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  if (t2 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t2;
  }
  let t3;
  if ($[3] !== t1) {
    t3 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t1);
    $[3] = t1;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp(child, index) {
  return /* @__PURE__ */ react_default.createElement(react_default.Fragment, { key: isValidElement(child) ? child.key ?? index : index }, index > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \xB7 "), child);
}
var init_Byline = __esm({
  "src/components/design-system/Byline.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

// src/components/design-system/Dialog.tsx
function Dialog(t0) {
  const $ = c(27);
  const {
    title,
    subtitle,
    children,
    onCancel,
    color: t1,
    hideInputGuide,
    hideBorder,
    inputGuide,
    isCancelActive: t2
  } = t0;
  const color = t1 === void 0 ? "permission" : t1;
  const isCancelActive = t2 === void 0 ? true : t2;
  const exitState = useExitOnCtrlCDWithKeybindings(void 0, void 0, isCancelActive);
  let t3;
  if ($[0] !== isCancelActive) {
    t3 = {
      context: "Confirmation",
      isActive: isCancelActive
    };
    $[0] = isCancelActive;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  useKeybinding("confirm:no", onCancel, t3);
  let t4;
  if ($[2] !== exitState.keyName || $[3] !== exitState.pending) {
    t4 = exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }));
    $[2] = exitState.keyName;
    $[3] = exitState.pending;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const defaultInputGuide = t4;
  let t5;
  if ($[5] !== color || $[6] !== title) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color }, title);
    $[5] = color;
    $[6] = title;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== subtitle) {
    t6 = subtitle && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, subtitle);
    $[8] = subtitle;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t5 || $[11] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t5, t6);
    $[10] = t5;
    $[11] = t6;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== children || $[14] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t7, children);
    $[13] = children;
    $[14] = t7;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] !== defaultInputGuide || $[17] !== exitState || $[18] !== hideInputGuide || $[19] !== inputGuide) {
    t9 = !hideInputGuide && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, inputGuide ? inputGuide(exitState) : defaultInputGuide));
    $[16] = defaultInputGuide;
    $[17] = exitState;
    $[18] = hideInputGuide;
    $[19] = inputGuide;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  let t10;
  if ($[21] !== t8 || $[22] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t8, t9);
    $[21] = t8;
    $[22] = t9;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  const content = t10;
  if (hideBorder) {
    return content;
  }
  let t11;
  if ($[24] !== color || $[25] !== content) {
    t11 = /* @__PURE__ */ react_default.createElement(Pane, { color }, content);
    $[24] = color;
    $[25] = content;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  return t11;
}
var init_Dialog = __esm({
  "src/components/design-system/Dialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_useKeybinding();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Pane();
  }
});

// src/utils/claudeInChrome/prompt.ts
function getChromeSystemPrompt() {
  return BASE_CHROME_PROMPT;
}
var BASE_CHROME_PROMPT, CHROME_TOOL_SEARCH_INSTRUCTIONS, CLAUDE_IN_CHROME_SKILL_HINT, CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER;
var init_prompt = __esm({
  "src/utils/claudeInChrome/prompt.ts"() {
    BASE_CHROME_PROMPT = `# Claude in Chrome browser automation

You have access to browser automation tools (mcp__claude-in-chrome__*) for interacting with web pages in Chrome. Follow these guidelines for effective browser automation.

## GIF recording

When performing multi-step browser interactions that the user may want to review or share, use mcp__claude-in-chrome__gif_creator to record them.

You must ALWAYS:
* Capture extra frames before and after taking actions to ensure smooth playback
* Name the file meaningfully to help the user identify it later (e.g., "login_process.gif")

## Console log debugging

You can use mcp__claude-in-chrome__read_console_messages to read console output. Console output may be verbose. If you are looking for specific log entries, use the 'pattern' parameter with a regex-compatible pattern. This filters results efficiently and avoids overwhelming output. For example, use pattern: "[MyApp]" to filter for application-specific logs rather than reading all console output.

## Alerts and dialogs

IMPORTANT: Do not trigger JavaScript alerts, confirms, prompts, or browser modal dialogs through your actions. These browser dialogs block all further browser events and will prevent the extension from receiving any subsequent commands. Instead, when possible, use console.log for debugging and then use the mcp__claude-in-chrome__read_console_messages tool to read those log messages. If a page has dialog-triggering elements:
1. Avoid clicking buttons or links that may trigger alerts (e.g., "Delete" buttons with confirmation dialogs)
2. If you must interact with such elements, warn the user first that this may interrupt the session
3. Use mcp__claude-in-chrome__javascript_tool to check for and dismiss any existing dialogs before proceeding

If you accidentally trigger a dialog and lose responsiveness, inform the user they need to manually dismiss it in the browser.

## Avoid rabbit holes and loops

When using browser automation tools, stay focused on the specific task. If you encounter any of the following, stop and ask the user for guidance:
- Unexpected complexity or tangential browser exploration
- Browser tool calls failing or returning errors after 2-3 attempts
- No response from the browser extension
- Page elements not responding to clicks or input
- Pages not loading or timing out
- Unable to complete the browser task despite multiple approaches

Explain what you attempted, what went wrong, and ask how the user would like to proceed. Do not keep retrying the same failing browser action or explore unrelated pages without checking in first.

## Tab context and session startup

IMPORTANT: At the start of each browser automation session, call mcp__claude-in-chrome__tabs_context_mcp first to get information about the user's current browser tabs. Use this context to understand what the user might want to work with before creating new tabs.

Never reuse tab IDs from a previous/other session. Follow these guidelines:
1. Only reuse an existing tab if the user explicitly asks to work with it
2. Otherwise, create a new tab with mcp__claude-in-chrome__tabs_create_mcp
3. If a tool returns an error indicating the tab doesn't exist or is invalid, call tabs_context_mcp to get fresh tab IDs
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`;
    CHROME_TOOL_SEARCH_INSTRUCTIONS = `**IMPORTANT: Before using any chrome browser tools, you MUST first load them using ToolSearch.**

Chrome browser tools are MCP tools that require loading before use. Before calling any mcp__claude-in-chrome__* tool:
1. Use ToolSearch with \`select:mcp__claude-in-chrome__<tool_name>\` to load the specific tool
2. Then call the tool

For example, to get tab context:
1. First: ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp"
2. Then: Call mcp__claude-in-chrome__tabs_context_mcp`;
    CLAUDE_IN_CHROME_SKILL_HINT = `**Browser Automation**: Chrome browser tools are available via the "claude-in-chrome" skill. CRITICAL: Before using any mcp__claude-in-chrome__* tools, invoke the skill by calling the Skill tool with skill: "claude-in-chrome". The skill provides browser automation instructions and enables the tools.`;
    CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER = `**Browser Automation**: Use WebBrowser for development (dev servers, JS eval, console, screenshots). Use claude-in-chrome for the user's real Chrome when you need logged-in sessions, OAuth, or computer-use \u2014 invoke Skill(skill: "claude-in-chrome") before any mcp__claude-in-chrome__* tool.`;
  }
});

export {
  useShortcutDisplay,
  init_useShortcutDisplay,
  KeyboardShortcutHint,
  init_KeyboardShortcutHint,
  ConfigurableShortcutHint,
  init_ConfigurableShortcutHint,
  Byline,
  init_Byline,
  Dialog,
  init_Dialog,
  BASE_CHROME_PROMPT,
  CHROME_TOOL_SEARCH_INSTRUCTIONS,
  getChromeSystemPrompt,
  CLAUDE_IN_CHROME_SKILL_HINT,
  CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER,
  init_prompt
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2tleWJpbmRpbmdzL3VzZVNob3J0Y3V0RGlzcGxheS50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy50c3giLCAiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL3Byb21wdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHVzZU9wdGlvbmFsS2V5YmluZGluZ0NvbnRleHQgfSBmcm9tICcuL0tleWJpbmRpbmdDb250ZXh0LmpzJ1xuaW1wb3J0IHR5cGUgeyBLZXliaW5kaW5nQ29udGV4dE5hbWUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG4vLyBUT0RPKGtleWJpbmRpbmdzLW1pZ3JhdGlvbik6IFJlbW92ZSBmYWxsYmFjayBwYXJhbWV0ZXIgYWZ0ZXIgbWlncmF0aW9uIGlzIGNvbXBsZXRlXG4vLyBhbmQgd2UndmUgY29uZmlybWVkIG5vICdrZXliaW5kaW5nX2ZhbGxiYWNrX3VzZWQnIGV2ZW50cyBhcmUgYmVpbmcgbG9nZ2VkLlxuLy8gVGhlIGZhbGxiYWNrIGV4aXN0cyBhcyBhIHNhZmV0eSBuZXQgZHVyaW5nIG1pZ3JhdGlvbiAtIGlmIGJpbmRpbmdzIGZhaWwgdG8gbG9hZFxuLy8gb3IgYW4gYWN0aW9uIGlzbid0IGZvdW5kLCB3ZSBmYWxsIGJhY2sgdG8gaGFyZGNvZGVkIHZhbHVlcy4gT25jZSBzdGFibGUsIGNhbGxlcnNcbi8vIHNob3VsZCBiZSBhYmxlIHRvIHRydXN0IHRoYXQgZ2V0QmluZGluZ0Rpc3BsYXlUZXh0IGFsd2F5cyByZXR1cm5zIGEgdmFsdWUgZm9yXG4vLyBrbm93biBhY3Rpb25zLCBhbmQgd2UgY2FuIHJlbW92ZSB0aGlzIGRlZmVuc2l2ZSBwYXR0ZXJuLlxuXG4vKipcbiAqIEhvb2sgdG8gZ2V0IHRoZSBkaXNwbGF5IHRleHQgZm9yIGEgY29uZmlndXJlZCBzaG9ydGN1dC5cbiAqIFJldHVybnMgdGhlIGNvbmZpZ3VyZWQgYmluZGluZyBvciBhIGZhbGxiYWNrIGlmIHVuYXZhaWxhYmxlLlxuICpcbiAqIEBwYXJhbSBhY3Rpb24gLSBUaGUgYWN0aW9uIG5hbWUgKGUuZy4sICdhcHA6dG9nZ2xlVHJhbnNjcmlwdCcpXG4gKiBAcGFyYW0gY29udGV4dCAtIFRoZSBrZXliaW5kaW5nIGNvbnRleHQgKGUuZy4sICdHbG9iYWwnKVxuICogQHBhcmFtIGZhbGxiYWNrIC0gRmFsbGJhY2sgdGV4dCBpZiBrZXliaW5kaW5nIGNvbnRleHQgdW5hdmFpbGFibGVcbiAqIEByZXR1cm5zIFRoZSBjb25maWd1cmVkIHNob3J0Y3V0IGRpc3BsYXkgdGV4dFxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBleHBhbmRTaG9ydGN1dCA9IHVzZVNob3J0Y3V0RGlzcGxheSgnYXBwOnRvZ2dsZVRyYW5zY3JpcHQnLCAnR2xvYmFsJywgJ2N0cmwrbycpXG4gKiAvLyBSZXR1cm5zIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBiaW5kaW5nLCBvciAnY3RybCtvJyBhcyBkZWZhdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaG9ydGN1dERpc3BsYXkoXG4gIGFjdGlvbjogc3RyaW5nLFxuICBjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWUsXG4gIGZhbGxiYWNrOiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICBjb25zdCBrZXliaW5kaW5nQ29udGV4dCA9IHVzZU9wdGlvbmFsS2V5YmluZGluZ0NvbnRleHQoKVxuICBjb25zdCByZXNvbHZlZCA9IGtleWJpbmRpbmdDb250ZXh0Py5nZXREaXNwbGF5VGV4dChhY3Rpb24sIGNvbnRleHQpXG4gIGNvbnN0IGlzRmFsbGJhY2sgPSByZXNvbHZlZCA9PT0gdW5kZWZpbmVkXG4gIGNvbnN0IHJlYXNvbiA9IGtleWJpbmRpbmdDb250ZXh0ID8gJ2FjdGlvbl9ub3RfZm91bmQnIDogJ25vX2NvbnRleHQnXG5cbiAgLy8gTG9nIGZhbGxiYWNrIHVzYWdlIG9uY2UgcGVyIG1vdW50IChub3Qgb24gZXZlcnkgcmVuZGVyKSB0byBhdm9pZFxuICAvLyBmbG9vZGluZyBhbmFseXRpY3Mgd2l0aCBldmVudHMgZnJvbSBmcmVxdWVudCByZS1yZW5kZXJzLlxuICBjb25zdCBoYXNMb2dnZWRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRmFsbGJhY2sgJiYgIWhhc0xvZ2dlZFJlZi5jdXJyZW50KSB7XG4gICAgICBoYXNMb2dnZWRSZWYuY3VycmVudCA9IHRydWVcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9rZXliaW5kaW5nX2ZhbGxiYWNrX3VzZWQnLCB7XG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICBhY3Rpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgY29udGV4dDpcbiAgICAgICAgICBjb250ZXh0IGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGZhbGxiYWNrOlxuICAgICAgICAgIGZhbGxiYWNrIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIHJlYXNvbjpcbiAgICAgICAgICByZWFzb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbaXNGYWxsYmFjaywgYWN0aW9uLCBjb250ZXh0LCBmYWxsYmFjaywgcmVhc29uXSlcblxuICByZXR1cm4gaXNGYWxsYmFjayA/IGZhbGxiYWNrIDogcmVzb2x2ZWRcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi9pbmsvY29tcG9uZW50cy9UZXh0LmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICAvKiogVGhlIGtleSBvciBjaG9yZCB0byBkaXNwbGF5IChlLmcuLCBcImN0cmwrb1wiLCBcIkVudGVyXCIsIFwi4oaRL+KGk1wiKSAqL1xuICBzaG9ydGN1dDogc3RyaW5nXG4gIC8qKiBUaGUgYWN0aW9uIHRoZSBrZXkgcGVyZm9ybXMgKGUuZy4sIFwiZXhwYW5kXCIsIFwic2VsZWN0XCIsIFwibmF2aWdhdGVcIikgKi9cbiAgYWN0aW9uOiBzdHJpbmdcbiAgLyoqIFdoZXRoZXIgdG8gd3JhcCB0aGUgaGludCBpbiBwYXJlbnRoZXNlcy4gRGVmYXVsdDogZmFsc2UgKi9cbiAgcGFyZW5zPzogYm9vbGVhblxuICAvKiogV2hldGhlciB0byByZW5kZXIgdGhlIHNob3J0Y3V0IGluIGJvbGQuIERlZmF1bHQ6IGZhbHNlICovXG4gIGJvbGQ/OiBib29sZWFuXG59XG5cbi8qKlxuICogUmVuZGVycyBhIGtleWJvYXJkIHNob3J0Y3V0IGhpbnQgbGlrZSBcImN0cmwrbyB0byBleHBhbmRcIiBvciBcIih0YWIgdG8gdG9nZ2xlKVwiXG4gKlxuICogV3JhcCBpbiA8VGV4dCBkaW1Db2xvcj4gZm9yIHRoZSBjb21tb24gZGltIHN0eWxpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNpbXBsZSBoaW50IHdyYXBwZWQgaW4gZGltIFRleHRcbiAqIDxUZXh0IGRpbUNvbG9yPjxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cImVzY1wiIGFjdGlvbj1cImNhbmNlbFwiIC8+PC9UZXh0PlxuICpcbiAqIC8vIFdpdGggcGFyZW50aGVzZXM6IFwiKGN0cmwrbyB0byBleHBhbmQpXCJcbiAqIDxUZXh0IGRpbUNvbG9yPjxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cImN0cmwrb1wiIGFjdGlvbj1cImV4cGFuZFwiIHBhcmVucyAvPjwvVGV4dD5cbiAqXG4gKiAvLyBXaXRoIGJvbGQgc2hvcnRjdXQ6IFwiRW50ZXIgdG8gY29uZmlybVwiIChFbnRlciBpcyBib2xkKVxuICogPFRleHQgZGltQ29sb3I+PEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJjb25maXJtXCIgYm9sZCAvPjwvVGV4dD5cbiAqXG4gKiAvLyBNdWx0aXBsZSBoaW50cyB3aXRoIG1pZGRvdCBzZXBhcmF0b3IgLSB1c2UgQnlsaW5lXG4gKiA8VGV4dCBkaW1Db2xvcj5cbiAqICAgPEJ5bGluZT5cbiAqICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbmZpcm1cIiAvPlxuICogICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzY1wiIGFjdGlvbj1cImNhbmNlbFwiIC8+XG4gKiAgIDwvQnlsaW5lPlxuICogPC9UZXh0PlxuICovXG5leHBvcnQgZnVuY3Rpb24gS2V5Ym9hcmRTaG9ydGN1dEhpbnQoe1xuICBzaG9ydGN1dCxcbiAgYWN0aW9uLFxuICBwYXJlbnMgPSBmYWxzZSxcbiAgYm9sZCA9IGZhbHNlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzaG9ydGN1dFRleHQgPSBib2xkID8gPFRleHQgYm9sZD57c2hvcnRjdXR9PC9UZXh0PiA6IHNob3J0Y3V0XG5cbiAgaWYgKHBhcmVucykge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dD5cbiAgICAgICAgKHtzaG9ydGN1dFRleHR9IHRvIHthY3Rpb259KVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxUZXh0PlxuICAgICAge3Nob3J0Y3V0VGV4dH0gdG8ge2FjdGlvbn1cbiAgICA8L1RleHQ+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtcbiAgS2V5YmluZGluZ0FjdGlvbixcbiAgS2V5YmluZGluZ0NvbnRleHROYW1lLFxufSBmcm9tICcuLi9rZXliaW5kaW5ncy90eXBlcy5qcydcbmltcG9ydCB7IHVzZVNob3J0Y3V0RGlzcGxheSB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZVNob3J0Y3V0RGlzcGxheS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICAvKiogVGhlIGtleWJpbmRpbmcgYWN0aW9uIChlLmcuLCAnYXBwOnRvZ2dsZVRyYW5zY3JpcHQnKSAqL1xuICBhY3Rpb246IEtleWJpbmRpbmdBY3Rpb25cbiAgLyoqIFRoZSBrZXliaW5kaW5nIGNvbnRleHQgKGUuZy4sICdHbG9iYWwnKSAqL1xuICBjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWVcbiAgLyoqIERlZmF1bHQgc2hvcnRjdXQgaWYga2V5YmluZGluZyBub3QgY29uZmlndXJlZCAqL1xuICBmYWxsYmFjazogc3RyaW5nXG4gIC8qKiBUaGUgYWN0aW9uIGRlc2NyaXB0aW9uIHRleHQgKGUuZy4sICdleHBhbmQnKSAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIC8qKiBXaGV0aGVyIHRvIHdyYXAgaW4gcGFyZW50aGVzZXMgKi9cbiAgcGFyZW5zPzogYm9vbGVhblxuICAvKiogV2hldGhlciB0byBzaG93IGluIGJvbGQgKi9cbiAgYm9sZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBLZXlib2FyZFNob3J0Y3V0SGludCB0aGF0IGRpc3BsYXlzIHRoZSB1c2VyLWNvbmZpZ3VyZWQgc2hvcnRjdXQuXG4gKiBGYWxscyBiYWNrIHRvIGRlZmF1bHQgaWYga2V5YmluZGluZyBjb250ZXh0IGlzIG5vdCBhdmFpbGFibGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAqICAgYWN0aW9uPVwiYXBwOnRvZ2dsZVRyYW5zY3JpcHRcIlxuICogICBjb250ZXh0PVwiR2xvYmFsXCJcbiAqICAgZmFsbGJhY2s9XCJjdHJsK29cIlxuICogICBkZXNjcmlwdGlvbj1cImV4cGFuZFwiXG4gKiAvPlxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50KHtcbiAgYWN0aW9uLFxuICBjb250ZXh0LFxuICBmYWxsYmFjayxcbiAgZGVzY3JpcHRpb24sXG4gIHBhcmVucyxcbiAgYm9sZCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgc2hvcnRjdXQgPSB1c2VTaG9ydGN1dERpc3BsYXkoYWN0aW9uLCBjb250ZXh0LCBmYWxsYmFjaylcbiAgcmV0dXJuIChcbiAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnRcbiAgICAgIHNob3J0Y3V0PXtzaG9ydGN1dH1cbiAgICAgIGFjdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICBwYXJlbnM9e3BhcmVuc31cbiAgICAgIGJvbGQ9e2JvbGR9XG4gICAgLz5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIC8qKiBUaGUgaXRlbXMgdG8gam9pbiB3aXRoIGEgbWlkZG90IHNlcGFyYXRvciAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICogSm9pbnMgY2hpbGRyZW4gd2l0aCBhIG1pZGRvdCBzZXBhcmF0b3IgKFwiIMK3IFwiKSBmb3IgaW5saW5lIG1ldGFkYXRhIGRpc3BsYXkuXG4gKlxuICogTmFtZWQgYWZ0ZXIgdGhlIHB1Ymxpc2hpbmcgdGVybSBcImJ5bGluZVwiIC0gdGhlIGxpbmUgb2YgbWV0YWRhdGEgdHlwaWNhbGx5XG4gKiBzaG93biBiZWxvdyBhIHRpdGxlIChlLmcuLCBcIkpvaG4gRG9lIMK3IDUgbWluIHJlYWQgwrcgTWFyIDEyXCIpLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgZmlsdGVycyBvdXQgbnVsbC91bmRlZmluZWQvZmFsc2UgY2hpbGRyZW4gYW5kIG9ubHkgcmVuZGVyc1xuICogc2VwYXJhdG9ycyBiZXR3ZWVuIHZhbGlkIGVsZW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBCYXNpYyB1c2FnZTogXCJFbnRlciB0byBjb25maXJtIMK3IEVzYyB0byBjYW5jZWxcIlxuICogPFRleHQgZGltQ29sb3I+XG4gKiAgIDxCeWxpbmU+XG4gKiAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJjb25maXJtXCIgLz5cbiAqICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFc2NcIiBhY3Rpb249XCJjYW5jZWxcIiAvPlxuICogICA8L0J5bGluZT5cbiAqIDwvVGV4dD5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2l0aCBjb25kaXRpb25hbCBjaGlsZHJlbjogXCJFc2MgdG8gY2FuY2VsXCIgKG9ubHkgb25lIGl0ZW0gc2hvd24pXG4gKiA8VGV4dCBkaW1Db2xvcj5cbiAqICAgPEJ5bGluZT5cbiAqICAgICB7c2hvd0VudGVyICYmIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+fVxuICogICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzY1wiIGFjdGlvbj1cImNhbmNlbFwiIC8+XG4gKiAgIDwvQnlsaW5lPlxuICogPC9UZXh0PlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJ5bGluZSh7IGNoaWxkcmVuIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gQ2hpbGRyZW4udG9BcnJheSBhbHJlYWR5IGZpbHRlcnMgb3V0IG51bGwsIHVuZGVmaW5lZCwgYW5kIGJvb2xlYW5zXG4gIGNvbnN0IHZhbGlkQ2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxuXG4gIGlmICh2YWxpZENoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dmFsaWRDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnRcbiAgICAgICAgICBrZXk9e2lzVmFsaWRFbGVtZW50KGNoaWxkKSA/IChjaGlsZC5rZXkgPz8gaW5kZXgpIDogaW5kZXh9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5kZXggPiAwICYmIDxUZXh0IGRpbUNvbG9yPiDCtyA8L1RleHQ+fVxuICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBFeGl0U3RhdGUsXG4gIHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyxcbn0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuL1BhbmUuanMnXG5cbnR5cGUgRGlhbG9nUHJvcHMgPSB7XG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgc3VidGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBjb2xvcj86IGtleW9mIFRoZW1lXG4gIGhpZGVJbnB1dEd1aWRlPzogYm9vbGVhblxuICBoaWRlQm9yZGVyPzogYm9vbGVhblxuICAvKiogQ3VzdG9tIGlucHV0IGd1aWRlIGNvbnRlbnQuIFJlY2VpdmVzIGV4aXRTdGF0ZSBmb3IgQ3RybCtDL0QgcGVuZGluZyBkaXNwbGF5LiAqL1xuICBpbnB1dEd1aWRlPzogKGV4aXRTdGF0ZTogRXhpdFN0YXRlKSA9PiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgRGlhbG9nJ3MgYnVpbHQtaW4gY29uZmlybTpubyAoRXNjL24pIGFuZCBhcHA6ZXhpdC9pbnRlcnJ1cHRcbiAgICogKEN0cmwtQy9EKSBrZXliaW5kaW5ncyBhcmUgYWN0aXZlLiBTZXQgdG8gYGZhbHNlYCB3aGlsZSBhbiBlbWJlZGRlZCB0ZXh0XG4gICAqIGZpZWxkIGlzIGJlaW5nIGVkaXRlZCBzbyB0aG9zZSBrZXlzIHJlYWNoIHRoZSBmaWVsZCBpbnN0ZWFkIG9mIGJlaW5nXG4gICAqIGNvbnN1bWVkIGJ5IERpYWxvZy4gVGV4dElucHV0IGhhcyBpdHMgb3duIGN0cmwrYy9kIGhhbmRsZXJzIChjYW5jZWwgb25cbiAgICogcHJlc3MsIGRlbGV0ZS1mb3J3YXJkIG9uIGN0cmwrZCB3aXRoIHRleHQpLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqL1xuICBpc0NhbmNlbEFjdGl2ZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERpYWxvZyh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIG9uQ2FuY2VsLFxuICBjb2xvciA9ICdwZXJtaXNzaW9uJyxcbiAgaGlkZUlucHV0R3VpZGUsXG4gIGhpZGVCb3JkZXIsXG4gIGlucHV0R3VpZGUsXG4gIGlzQ2FuY2VsQWN0aXZlID0gdHJ1ZSxcbn06IERpYWxvZ1Byb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQsXG4gICAgaXNDYW5jZWxBY3RpdmUsXG4gIClcblxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmcgZm9yIEVTQyB0byBjYW5jZWwuXG4gIC8vIGlzQ2FuY2VsQWN0aXZlIGxldHMgY29uc3VtZXJzIChlLmcuIEVsaWNpdGF0aW9uRGlhbG9nKSBkaXNhYmxlIHRoaXMgd2hpbGVcbiAgLy8gYW4gZW1iZWRkZWQgVGV4dElucHV0IGlzIGZvY3VzZWQsIHNvIHRoYXQga2V5cyBsaWtlICduJyByZWFjaCB0aGUgZmllbGRcbiAgLy8gaW5zdGVhZCBvZiBiZWluZyBjb25zdW1lZCBoZXJlLlxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgb25DYW5jZWwsIHtcbiAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICBpc0FjdGl2ZTogaXNDYW5jZWxBY3RpdmUsXG4gIH0pXG5cbiAgY29uc3QgZGVmYXVsdElucHV0R3VpZGUgPSBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICkgOiAoXG4gICAgPEJ5bGluZT5cbiAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAvPlxuICAgIDwvQnlsaW5lPlxuICApXG5cbiAgY29uc3QgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7c3VidGl0bGUgJiYgPFRleHQgZGltQ29sb3I+e3N1YnRpdGxlfTwvVGV4dD59XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICAgIHshaGlkZUlucHV0R3VpZGUgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAge2lucHV0R3VpZGUgPyBpbnB1dEd1aWRlKGV4aXRTdGF0ZSkgOiBkZWZhdWx0SW5wdXRHdWlkZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxuXG4gIGlmIChoaWRlQm9yZGVyKSB7XG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIHJldHVybiA8UGFuZSBjb2xvcj17Y29sb3J9Pntjb250ZW50fTwvUGFuZT5cbn1cbiIsICJleHBvcnQgY29uc3QgQkFTRV9DSFJPTUVfUFJPTVBUID0gYCMgQ2xhdWRlIGluIENocm9tZSBicm93c2VyIGF1dG9tYXRpb25cblxuWW91IGhhdmUgYWNjZXNzIHRvIGJyb3dzZXIgYXV0b21hdGlvbiB0b29scyAobWNwX19jbGF1ZGUtaW4tY2hyb21lX18qKSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB3ZWIgcGFnZXMgaW4gQ2hyb21lLiBGb2xsb3cgdGhlc2UgZ3VpZGVsaW5lcyBmb3IgZWZmZWN0aXZlIGJyb3dzZXIgYXV0b21hdGlvbi5cblxuIyMgR0lGIHJlY29yZGluZ1xuXG5XaGVuIHBlcmZvcm1pbmcgbXVsdGktc3RlcCBicm93c2VyIGludGVyYWN0aW9ucyB0aGF0IHRoZSB1c2VyIG1heSB3YW50IHRvIHJldmlldyBvciBzaGFyZSwgdXNlIG1jcF9fY2xhdWRlLWluLWNocm9tZV9fZ2lmX2NyZWF0b3IgdG8gcmVjb3JkIHRoZW0uXG5cbllvdSBtdXN0IEFMV0FZUzpcbiogQ2FwdHVyZSBleHRyYSBmcmFtZXMgYmVmb3JlIGFuZCBhZnRlciB0YWtpbmcgYWN0aW9ucyB0byBlbnN1cmUgc21vb3RoIHBsYXliYWNrXG4qIE5hbWUgdGhlIGZpbGUgbWVhbmluZ2Z1bGx5IHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgaXQgbGF0ZXIgKGUuZy4sIFwibG9naW5fcHJvY2Vzcy5naWZcIilcblxuIyMgQ29uc29sZSBsb2cgZGVidWdnaW5nXG5cbllvdSBjYW4gdXNlIG1jcF9fY2xhdWRlLWluLWNocm9tZV9fcmVhZF9jb25zb2xlX21lc3NhZ2VzIHRvIHJlYWQgY29uc29sZSBvdXRwdXQuIENvbnNvbGUgb3V0cHV0IG1heSBiZSB2ZXJib3NlLiBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIHNwZWNpZmljIGxvZyBlbnRyaWVzLCB1c2UgdGhlICdwYXR0ZXJuJyBwYXJhbWV0ZXIgd2l0aCBhIHJlZ2V4LWNvbXBhdGlibGUgcGF0dGVybi4gVGhpcyBmaWx0ZXJzIHJlc3VsdHMgZWZmaWNpZW50bHkgYW5kIGF2b2lkcyBvdmVyd2hlbG1pbmcgb3V0cHV0LiBGb3IgZXhhbXBsZSwgdXNlIHBhdHRlcm46IFwiW015QXBwXVwiIHRvIGZpbHRlciBmb3IgYXBwbGljYXRpb24tc3BlY2lmaWMgbG9ncyByYXRoZXIgdGhhbiByZWFkaW5nIGFsbCBjb25zb2xlIG91dHB1dC5cblxuIyMgQWxlcnRzIGFuZCBkaWFsb2dzXG5cbklNUE9SVEFOVDogRG8gbm90IHRyaWdnZXIgSmF2YVNjcmlwdCBhbGVydHMsIGNvbmZpcm1zLCBwcm9tcHRzLCBvciBicm93c2VyIG1vZGFsIGRpYWxvZ3MgdGhyb3VnaCB5b3VyIGFjdGlvbnMuIFRoZXNlIGJyb3dzZXIgZGlhbG9ncyBibG9jayBhbGwgZnVydGhlciBicm93c2VyIGV2ZW50cyBhbmQgd2lsbCBwcmV2ZW50IHRoZSBleHRlbnNpb24gZnJvbSByZWNlaXZpbmcgYW55IHN1YnNlcXVlbnQgY29tbWFuZHMuIEluc3RlYWQsIHdoZW4gcG9zc2libGUsIHVzZSBjb25zb2xlLmxvZyBmb3IgZGVidWdnaW5nIGFuZCB0aGVuIHVzZSB0aGUgbWNwX19jbGF1ZGUtaW4tY2hyb21lX19yZWFkX2NvbnNvbGVfbWVzc2FnZXMgdG9vbCB0byByZWFkIHRob3NlIGxvZyBtZXNzYWdlcy4gSWYgYSBwYWdlIGhhcyBkaWFsb2ctdHJpZ2dlcmluZyBlbGVtZW50czpcbjEuIEF2b2lkIGNsaWNraW5nIGJ1dHRvbnMgb3IgbGlua3MgdGhhdCBtYXkgdHJpZ2dlciBhbGVydHMgKGUuZy4sIFwiRGVsZXRlXCIgYnV0dG9ucyB3aXRoIGNvbmZpcm1hdGlvbiBkaWFsb2dzKVxuMi4gSWYgeW91IG11c3QgaW50ZXJhY3Qgd2l0aCBzdWNoIGVsZW1lbnRzLCB3YXJuIHRoZSB1c2VyIGZpcnN0IHRoYXQgdGhpcyBtYXkgaW50ZXJydXB0IHRoZSBzZXNzaW9uXG4zLiBVc2UgbWNwX19jbGF1ZGUtaW4tY2hyb21lX19qYXZhc2NyaXB0X3Rvb2wgdG8gY2hlY2sgZm9yIGFuZCBkaXNtaXNzIGFueSBleGlzdGluZyBkaWFsb2dzIGJlZm9yZSBwcm9jZWVkaW5nXG5cbklmIHlvdSBhY2NpZGVudGFsbHkgdHJpZ2dlciBhIGRpYWxvZyBhbmQgbG9zZSByZXNwb25zaXZlbmVzcywgaW5mb3JtIHRoZSB1c2VyIHRoZXkgbmVlZCB0byBtYW51YWxseSBkaXNtaXNzIGl0IGluIHRoZSBicm93c2VyLlxuXG4jIyBBdm9pZCByYWJiaXQgaG9sZXMgYW5kIGxvb3BzXG5cbldoZW4gdXNpbmcgYnJvd3NlciBhdXRvbWF0aW9uIHRvb2xzLCBzdGF5IGZvY3VzZWQgb24gdGhlIHNwZWNpZmljIHRhc2suIElmIHlvdSBlbmNvdW50ZXIgYW55IG9mIHRoZSBmb2xsb3dpbmcsIHN0b3AgYW5kIGFzayB0aGUgdXNlciBmb3IgZ3VpZGFuY2U6XG4tIFVuZXhwZWN0ZWQgY29tcGxleGl0eSBvciB0YW5nZW50aWFsIGJyb3dzZXIgZXhwbG9yYXRpb25cbi0gQnJvd3NlciB0b29sIGNhbGxzIGZhaWxpbmcgb3IgcmV0dXJuaW5nIGVycm9ycyBhZnRlciAyLTMgYXR0ZW1wdHNcbi0gTm8gcmVzcG9uc2UgZnJvbSB0aGUgYnJvd3NlciBleHRlbnNpb25cbi0gUGFnZSBlbGVtZW50cyBub3QgcmVzcG9uZGluZyB0byBjbGlja3Mgb3IgaW5wdXRcbi0gUGFnZXMgbm90IGxvYWRpbmcgb3IgdGltaW5nIG91dFxuLSBVbmFibGUgdG8gY29tcGxldGUgdGhlIGJyb3dzZXIgdGFzayBkZXNwaXRlIG11bHRpcGxlIGFwcHJvYWNoZXNcblxuRXhwbGFpbiB3aGF0IHlvdSBhdHRlbXB0ZWQsIHdoYXQgd2VudCB3cm9uZywgYW5kIGFzayBob3cgdGhlIHVzZXIgd291bGQgbGlrZSB0byBwcm9jZWVkLiBEbyBub3Qga2VlcCByZXRyeWluZyB0aGUgc2FtZSBmYWlsaW5nIGJyb3dzZXIgYWN0aW9uIG9yIGV4cGxvcmUgdW5yZWxhdGVkIHBhZ2VzIHdpdGhvdXQgY2hlY2tpbmcgaW4gZmlyc3QuXG5cbiMjIFRhYiBjb250ZXh0IGFuZCBzZXNzaW9uIHN0YXJ0dXBcblxuSU1QT1JUQU5UOiBBdCB0aGUgc3RhcnQgb2YgZWFjaCBicm93c2VyIGF1dG9tYXRpb24gc2Vzc2lvbiwgY2FsbCBtY3BfX2NsYXVkZS1pbi1jaHJvbWVfX3RhYnNfY29udGV4dF9tY3AgZmlyc3QgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyJ3MgY3VycmVudCBicm93c2VyIHRhYnMuIFVzZSB0aGlzIGNvbnRleHQgdG8gdW5kZXJzdGFuZCB3aGF0IHRoZSB1c2VyIG1pZ2h0IHdhbnQgdG8gd29yayB3aXRoIGJlZm9yZSBjcmVhdGluZyBuZXcgdGFicy5cblxuTmV2ZXIgcmV1c2UgdGFiIElEcyBmcm9tIGEgcHJldmlvdXMvb3RoZXIgc2Vzc2lvbi4gRm9sbG93IHRoZXNlIGd1aWRlbGluZXM6XG4xLiBPbmx5IHJldXNlIGFuIGV4aXN0aW5nIHRhYiBpZiB0aGUgdXNlciBleHBsaWNpdGx5IGFza3MgdG8gd29yayB3aXRoIGl0XG4yLiBPdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyB0YWIgd2l0aCBtY3BfX2NsYXVkZS1pbi1jaHJvbWVfX3RhYnNfY3JlYXRlX21jcFxuMy4gSWYgYSB0b29sIHJldHVybnMgYW4gZXJyb3IgaW5kaWNhdGluZyB0aGUgdGFiIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgaW52YWxpZCwgY2FsbCB0YWJzX2NvbnRleHRfbWNwIHRvIGdldCBmcmVzaCB0YWIgSURzXG40LiBXaGVuIGEgdGFiIGlzIGNsb3NlZCBieSB0aGUgdXNlciBvciBhIG5hdmlnYXRpb24gZXJyb3Igb2NjdXJzLCBjYWxsIHRhYnNfY29udGV4dF9tY3AgdG8gc2VlIHdoYXQgdGFicyBhcmUgYXZhaWxhYmxlYFxuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5zdHJ1Y3Rpb25zIGZvciBjaHJvbWUgdG9vbHMgd2hlbiB0b29sIHNlYXJjaCBpcyBlbmFibGVkLlxuICogVGhlc2UgaW5zdHJ1Y3QgdGhlIG1vZGVsIHRvIGxvYWQgY2hyb21lIHRvb2xzIHZpYSBUb29sU2VhcmNoIGJlZm9yZSB1c2luZyB0aGVtLlxuICogT25seSBpbmplY3RlZCB3aGVuIHRvb2wgc2VhcmNoIGlzIGFjdHVhbGx5IGVuYWJsZWQgKG5vdCBqdXN0IG9wdGltaXN0aWNhbGx5IHBvc3NpYmxlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IENIUk9NRV9UT09MX1NFQVJDSF9JTlNUUlVDVElPTlMgPSBgKipJTVBPUlRBTlQ6IEJlZm9yZSB1c2luZyBhbnkgY2hyb21lIGJyb3dzZXIgdG9vbHMsIHlvdSBNVVNUIGZpcnN0IGxvYWQgdGhlbSB1c2luZyBUb29sU2VhcmNoLioqXG5cbkNocm9tZSBicm93c2VyIHRvb2xzIGFyZSBNQ1AgdG9vbHMgdGhhdCByZXF1aXJlIGxvYWRpbmcgYmVmb3JlIHVzZS4gQmVmb3JlIGNhbGxpbmcgYW55IG1jcF9fY2xhdWRlLWluLWNocm9tZV9fKiB0b29sOlxuMS4gVXNlIFRvb2xTZWFyY2ggd2l0aCBcXGBzZWxlY3Q6bWNwX19jbGF1ZGUtaW4tY2hyb21lX188dG9vbF9uYW1lPlxcYCB0byBsb2FkIHRoZSBzcGVjaWZpYyB0b29sXG4yLiBUaGVuIGNhbGwgdGhlIHRvb2xcblxuRm9yIGV4YW1wbGUsIHRvIGdldCB0YWIgY29udGV4dDpcbjEuIEZpcnN0OiBUb29sU2VhcmNoIHdpdGggcXVlcnkgXCJzZWxlY3Q6bWNwX19jbGF1ZGUtaW4tY2hyb21lX190YWJzX2NvbnRleHRfbWNwXCJcbjIuIFRoZW46IENhbGwgbWNwX19jbGF1ZGUtaW4tY2hyb21lX190YWJzX2NvbnRleHRfbWNwYFxuXG4vKipcbiAqIEdldCB0aGUgYmFzZSBjaHJvbWUgc3lzdGVtIHByb21wdCAod2l0aG91dCB0b29sIHNlYXJjaCBpbnN0cnVjdGlvbnMpLlxuICogVG9vbCBzZWFyY2ggaW5zdHJ1Y3Rpb25zIGFyZSBpbmplY3RlZCBzZXBhcmF0ZWx5IGF0IHJlcXVlc3QgdGltZSBpbiBjbGF1ZGUudHNcbiAqIGJhc2VkIG9uIHRoZSBhY3R1YWwgdG9vbCBzZWFyY2ggZW5hYmxlZCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENocm9tZVN5c3RlbVByb21wdCgpOiBzdHJpbmcge1xuICByZXR1cm4gQkFTRV9DSFJPTUVfUFJPTVBUXG59XG5cbi8qKlxuICogTWluaW1hbCBoaW50IGFib3V0IENsYXVkZSBpbiBDaHJvbWUgc2tpbGwgYXZhaWxhYmlsaXR5LiBUaGlzIGlzIGluamVjdGVkIGF0IHN0YXJ0dXAgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZFxuICogdG8gZ3VpZGUgdGhlIG1vZGVsIHRvIGludm9rZSB0aGUgc2tpbGwgYmVmb3JlIHVzaW5nIHRoZSBNQ1AgdG9vbHMuXG4gKi9cbmV4cG9ydCBjb25zdCBDTEFVREVfSU5fQ0hST01FX1NLSUxMX0hJTlQgPSBgKipCcm93c2VyIEF1dG9tYXRpb24qKjogQ2hyb21lIGJyb3dzZXIgdG9vbHMgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIFwiY2xhdWRlLWluLWNocm9tZVwiIHNraWxsLiBDUklUSUNBTDogQmVmb3JlIHVzaW5nIGFueSBtY3BfX2NsYXVkZS1pbi1jaHJvbWVfXyogdG9vbHMsIGludm9rZSB0aGUgc2tpbGwgYnkgY2FsbGluZyB0aGUgU2tpbGwgdG9vbCB3aXRoIHNraWxsOiBcImNsYXVkZS1pbi1jaHJvbWVcIi4gVGhlIHNraWxsIHByb3ZpZGVzIGJyb3dzZXIgYXV0b21hdGlvbiBpbnN0cnVjdGlvbnMgYW5kIGVuYWJsZXMgdGhlIHRvb2xzLmBcblxuLyoqXG4gKiBWYXJpYW50IHdoZW4gdGhlIGJ1aWx0LWluIFdlYkJyb3dzZXIgdG9vbCBpcyBhbHNvIGF2YWlsYWJsZSBcdTIwMTQgc3RlZXJcbiAqIGRldi1sb29wIHRhc2tzIHRvIFdlYkJyb3dzZXIgYW5kIHJlc2VydmUgdGhlIGV4dGVuc2lvbiBmb3IgdGhlIHVzZXInc1xuICogYXV0aGVudGljYXRlZCBDaHJvbWUgKGxvZ2dlZC1pbiBzaXRlcywgT0F1dGgsIGNvbXB1dGVyLXVzZSkuXG4gKi9cbmV4cG9ydCBjb25zdCBDTEFVREVfSU5fQ0hST01FX1NLSUxMX0hJTlRfV0lUSF9XRUJCUk9XU0VSID0gYCoqQnJvd3NlciBBdXRvbWF0aW9uKio6IFVzZSBXZWJCcm93c2VyIGZvciBkZXZlbG9wbWVudCAoZGV2IHNlcnZlcnMsIEpTIGV2YWwsIGNvbnNvbGUsIHNjcmVlbnNob3RzKS4gVXNlIGNsYXVkZS1pbi1jaHJvbWUgZm9yIHRoZSB1c2VyJ3MgcmVhbCBDaHJvbWUgd2hlbiB5b3UgbmVlZCBsb2dnZWQtaW4gc2Vzc2lvbnMsIE9BdXRoLCBvciBjb21wdXRlci11c2UgXHUyMDE0IGludm9rZSBTa2lsbChza2lsbDogXCJjbGF1ZGUtaW4tY2hyb21lXCIpIGJlZm9yZSBhbnkgbWNwX19jbGF1ZGUtaW4tY2hyb21lX18qIHRvb2wuYFxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJPLFNBQVMsbUJBQ2QsUUFDQSxTQUNBLFVBQ1E7QUFDUixRQUFNLG9CQUFvQiw2QkFBNkI7QUFDdkQsUUFBTSxXQUFXLG1CQUFtQixlQUFlLFFBQVEsT0FBTztBQUNsRSxRQUFNLGFBQWEsYUFBYTtBQUNoQyxRQUFNLFNBQVMsb0JBQW9CLHFCQUFxQjtBQUl4RCxRQUFNLGVBQWUsT0FBTyxLQUFLO0FBQ2pDLFlBQVUsTUFBTTtBQUNkLFFBQUksY0FBYyxDQUFDLGFBQWEsU0FBUztBQUN2QyxtQkFBYSxVQUFVO0FBQ3ZCLGVBQVMsa0NBQWtDO0FBQUEsUUFDekM7QUFBQSxRQUVBO0FBQUEsUUFFQTtBQUFBLFFBRUE7QUFBQSxNQUVGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixHQUFHLENBQUMsWUFBWSxRQUFRLFNBQVMsVUFBVSxNQUFNLENBQUM7QUFFbEQsU0FBTyxhQUFhLFdBQVc7QUFDakM7QUExREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7OztBQ2dDTyxTQUFBQSxxQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsQ0FBQTtBQUE4QixRQUFBO0lBQUFDO0lBQUFDO0lBQUFD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VTtBQUFBLFdBQ0xxQjtFQUFPO0FBQ2YsTUFBQUM7QUFBQSxNQUFBL0IsRUFBQSxFQUFBLE1BQUFNLFNBQUFOLEVBQUEsRUFBQSxNQUFBOEIsU0FBQTtBQUVNQyxVQUFBLDRDQUFDLFFBQVl6QixTQUFRd0IsT0FBUTtBQUFPOUIsTUFBQSxFQUFBLElBQUFNO0FBQUFOLE1BQUEsRUFBQSxJQUFBOEI7QUFBQTlCLE1BQUEsRUFBQSxJQUFBK0I7RUFBQSxPQUFBO0FBQUFBLFVBQUEvQixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBQXBDK0I7QUFBb0M7Ozs7QUFsRzdDO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDd0RPLFNBQVMsd0JBQWdDO0FBQzlDLFNBQU87QUFDVDtBQXJFQSxJQUFhLG9CQW9EQSxpQ0F1QkEsNkJBT0E7QUFsRmI7QUFBQTtBQUFPLElBQU0scUJBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0QzQixJQUFNLGtDQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QnhDLElBQU0sOEJBQThCO0FBT3BDLElBQU0sOENBQThDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiS2V5Ym9hcmRTaG9ydGN1dEhpbnQiLCAidDAiLCAiJCIsICJfYyIsICJzaG9ydGN1dCIsICJhY3Rpb24iLCAicGFyZW5zIiwgInQxIiwgImJvbGQiLCAidDIiLCAidW5kZWZpbmVkIiwgInQzIiwgInNob3J0Y3V0VGV4dCIsICJ0NCIsICJDb25maWd1cmFibGVTaG9ydGN1dEhpbnQiLCAidDAiLCAiJCIsICJfYyIsICJhY3Rpb24iLCAiY29udGV4dCIsICJmYWxsYmFjayIsICJkZXNjcmlwdGlvbiIsICJwYXJlbnMiLCAiYm9sZCIsICJzaG9ydGN1dCIsICJ1c2VTaG9ydGN1dERpc3BsYXkiLCAidDEiLCAiQnlsaW5lIiwgInQwIiwgIiQiLCAiX2MiLCAiY2hpbGRyZW4iLCAidDEiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJiYjAiLCAidmFsaWRDaGlsZHJlbiIsICJDaGlsZHJlbiIsICJ0b0FycmF5IiwgImxlbmd0aCIsICJtYXAiLCAiX3RlbXAiLCAidDMiLCAiY2hpbGQiLCAiaW5kZXgiLCAiaXNWYWxpZEVsZW1lbnQiLCAia2V5IiwgIkRpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgInRpdGxlIiwgInN1YnRpdGxlIiwgImNoaWxkcmVuIiwgIm9uQ2FuY2VsIiwgImNvbG9yIiwgInQxIiwgImhpZGVJbnB1dEd1aWRlIiwgImhpZGVCb3JkZXIiLCAiaW5wdXRHdWlkZSIsICJpc0NhbmNlbEFjdGl2ZSIsICJ0MiIsICJ1bmRlZmluZWQiLCAiZXhpdFN0YXRlIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJ0MyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmciLCAidDQiLCAia2V5TmFtZSIsICJwZW5kaW5nIiwgImRlZmF1bHRJbnB1dEd1aWRlIiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgInQxMCIsICJjb250ZW50IiwgInQxMSJdCn0K
