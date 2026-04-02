#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Ansi,
  TerminalSizeContext,
  ThemedBox_default,
  ThemedText,
  c,
  init_TerminalSizeContext,
  init_ink,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-KMJXN3MK.mjs";
import {
  createContext,
  init_react,
  react_default,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect
} from "./chunk-TEJH3H3H.mjs";
import {
  init_stringWidth,
  stringWidth
} from "./chunk-OGGCTXYU.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/hooks/useTerminalSize.ts
function useTerminalSize() {
  const size = useContext(TerminalSizeContext);
  if (!size) {
    throw new Error("useTerminalSize must be used within an Ink App component");
  }
  return size;
}
var init_useTerminalSize = __esm({
  "src/hooks/useTerminalSize.ts"() {
    init_react();
    init_TerminalSizeContext();
  }
});

// src/keybindings/match.ts
function getKeyName(input, key) {
  if (key.escape) return "escape";
  if (key.return) return "enter";
  if (key.tab) return "tab";
  if (key.backspace) return "backspace";
  if (key.delete) return "delete";
  if (key.upArrow) return "up";
  if (key.downArrow) return "down";
  if (key.leftArrow) return "left";
  if (key.rightArrow) return "right";
  if (key.pageUp) return "pageup";
  if (key.pageDown) return "pagedown";
  if (key.wheelUp) return "wheelup";
  if (key.wheelDown) return "wheeldown";
  if (key.home) return "home";
  if (key.end) return "end";
  if (input.length === 1) return input.toLowerCase();
  return null;
}
var init_match = __esm({
  "src/keybindings/match.ts"() {
  }
});

// src/keybindings/parser.ts
function parseKeystroke(input) {
  const parts = input.split("+");
  const keystroke = {
    key: "",
    ctrl: false,
    alt: false,
    shift: false,
    meta: false,
    super: false
  };
  for (const part of parts) {
    const lower = part.toLowerCase();
    switch (lower) {
      case "ctrl":
      case "control":
        keystroke.ctrl = true;
        break;
      case "alt":
      case "opt":
      case "option":
        keystroke.alt = true;
        break;
      case "shift":
        keystroke.shift = true;
        break;
      case "meta":
        keystroke.meta = true;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        keystroke.super = true;
        break;
      case "esc":
        keystroke.key = "escape";
        break;
      case "return":
        keystroke.key = "enter";
        break;
      case "space":
        keystroke.key = " ";
        break;
      case "\u2191":
        keystroke.key = "up";
        break;
      case "\u2193":
        keystroke.key = "down";
        break;
      case "\u2190":
        keystroke.key = "left";
        break;
      case "\u2192":
        keystroke.key = "right";
        break;
      default:
        keystroke.key = lower;
        break;
    }
  }
  return keystroke;
}
function parseChord(input) {
  if (input === " ") return [parseKeystroke("space")];
  return input.trim().split(/\s+/).map(parseKeystroke);
}
function keystrokeToString(ks) {
  const parts = [];
  if (ks.ctrl) parts.push("ctrl");
  if (ks.alt) parts.push("alt");
  if (ks.shift) parts.push("shift");
  if (ks.meta) parts.push("meta");
  if (ks.super) parts.push("cmd");
  const displayKey = keyToDisplayName(ks.key);
  parts.push(displayKey);
  return parts.join("+");
}
function keyToDisplayName(key) {
  switch (key) {
    case "escape":
      return "Esc";
    case " ":
      return "Space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return key;
  }
}
function chordToString(chord) {
  return chord.map(keystrokeToString).join(" ");
}
function parseBindings(blocks) {
  const bindings = [];
  for (const block of blocks) {
    for (const [key, action] of Object.entries(block.bindings)) {
      bindings.push({
        chord: parseChord(key),
        action,
        context: block.context
      });
    }
  }
  return bindings;
}
var init_parser = __esm({
  "src/keybindings/parser.ts"() {
  }
});

// src/keybindings/resolver.ts
function getBindingDisplayText(action, context, bindings) {
  const binding = bindings.findLast(
    (b) => b.action === action && b.context === context
  );
  return binding ? chordToString(binding.chord) : void 0;
}
function buildKeystroke(input, key) {
  const keyName = getKeyName(input, key);
  if (!keyName) return null;
  const effectiveMeta = key.escape ? false : key.meta;
  return {
    key: keyName,
    ctrl: key.ctrl,
    alt: effectiveMeta,
    shift: key.shift,
    meta: effectiveMeta,
    super: key.super
  };
}
function keystrokesEqual(a, b) {
  return a.key === b.key && a.ctrl === b.ctrl && a.shift === b.shift && (a.alt || a.meta) === (b.alt || b.meta) && a.super === b.super;
}
function chordPrefixMatches(prefix, binding) {
  if (prefix.length >= binding.chord.length) return false;
  for (let i = 0; i < prefix.length; i++) {
    const prefixKey = prefix[i];
    const bindingKey = binding.chord[i];
    if (!prefixKey || !bindingKey) return false;
    if (!keystrokesEqual(prefixKey, bindingKey)) return false;
  }
  return true;
}
function chordExactlyMatches(chord, binding) {
  if (chord.length !== binding.chord.length) return false;
  for (let i = 0; i < chord.length; i++) {
    const chordKey = chord[i];
    const bindingKey = binding.chord[i];
    if (!chordKey || !bindingKey) return false;
    if (!keystrokesEqual(chordKey, bindingKey)) return false;
  }
  return true;
}
function resolveKeyWithChordState(input, key, activeContexts, bindings, pending) {
  if (key.escape && pending !== null) {
    return { type: "chord_cancelled" };
  }
  const currentKeystroke = buildKeystroke(input, key);
  if (!currentKeystroke) {
    if (pending !== null) {
      return { type: "chord_cancelled" };
    }
    return { type: "none" };
  }
  const testChord = pending ? [...pending, currentKeystroke] : [currentKeystroke];
  const ctxSet = new Set(activeContexts);
  const contextBindings = bindings.filter((b) => ctxSet.has(b.context));
  const chordWinners = /* @__PURE__ */ new Map();
  for (const binding of contextBindings) {
    if (binding.chord.length > testChord.length && chordPrefixMatches(testChord, binding)) {
      chordWinners.set(chordToString(binding.chord), binding.action);
    }
  }
  let hasLongerChords = false;
  for (const action of chordWinners.values()) {
    if (action !== null) {
      hasLongerChords = true;
      break;
    }
  }
  if (hasLongerChords) {
    return { type: "chord_started", pending: testChord };
  }
  let exactMatch;
  for (const binding of contextBindings) {
    if (chordExactlyMatches(testChord, binding)) {
      exactMatch = binding;
    }
  }
  if (exactMatch) {
    if (exactMatch.action === null) {
      return { type: "unbound" };
    }
    return { type: "match", action: exactMatch.action };
  }
  if (pending !== null) {
    return { type: "chord_cancelled" };
  }
  return { type: "none" };
}
var init_resolver = __esm({
  "src/keybindings/resolver.ts"() {
    init_match();
    init_parser();
  }
});

// src/keybindings/KeybindingContext.tsx
function KeybindingProvider(t0) {
  const $ = c(24);
  const {
    bindings,
    pendingChordRef,
    pendingChord,
    setPendingChord,
    activeContexts,
    registerActiveContext,
    unregisterActiveContext,
    handlerRegistryRef,
    children
  } = t0;
  let t1;
  if ($[0] !== bindings) {
    t1 = (action, context) => getBindingDisplayText(action, context, bindings);
    $[0] = bindings;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const getDisplay = t1;
  let t2;
  if ($[2] !== handlerRegistryRef) {
    t2 = (registration) => {
      const registry = handlerRegistryRef.current;
      if (!registry) {
        return _temp;
      }
      if (!registry.has(registration.action)) {
        registry.set(registration.action, /* @__PURE__ */ new Set());
      }
      registry.get(registration.action).add(registration);
      return () => {
        const handlers = registry.get(registration.action);
        if (handlers) {
          handlers.delete(registration);
          if (handlers.size === 0) {
            registry.delete(registration.action);
          }
        }
      };
    };
    $[2] = handlerRegistryRef;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const registerHandler = t2;
  let t3;
  if ($[4] !== activeContexts || $[5] !== handlerRegistryRef) {
    t3 = (action_0) => {
      const registry_0 = handlerRegistryRef.current;
      if (!registry_0) {
        return false;
      }
      const handlers_0 = registry_0.get(action_0);
      if (!handlers_0 || handlers_0.size === 0) {
        return false;
      }
      for (const registration_0 of handlers_0) {
        if (activeContexts.has(registration_0.context)) {
          registration_0.handler();
          return true;
        }
      }
      return false;
    };
    $[4] = activeContexts;
    $[5] = handlerRegistryRef;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const invokeAction = t3;
  let t4;
  if ($[7] !== bindings || $[8] !== pendingChordRef) {
    t4 = (input, key, contexts) => resolveKeyWithChordState(input, key, contexts, bindings, pendingChordRef.current);
    $[7] = bindings;
    $[8] = pendingChordRef;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== activeContexts || $[11] !== bindings || $[12] !== getDisplay || $[13] !== invokeAction || $[14] !== pendingChord || $[15] !== registerActiveContext || $[16] !== registerHandler || $[17] !== setPendingChord || $[18] !== t4 || $[19] !== unregisterActiveContext) {
    t5 = {
      resolve: t4,
      setPendingChord,
      getDisplayText: getDisplay,
      bindings,
      pendingChord,
      activeContexts,
      registerActiveContext,
      unregisterActiveContext,
      registerHandler,
      invokeAction
    };
    $[10] = activeContexts;
    $[11] = bindings;
    $[12] = getDisplay;
    $[13] = invokeAction;
    $[14] = pendingChord;
    $[15] = registerActiveContext;
    $[16] = registerHandler;
    $[17] = setPendingChord;
    $[18] = t4;
    $[19] = unregisterActiveContext;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  const value = t5;
  let t6;
  if ($[21] !== children || $[22] !== value) {
    t6 = /* @__PURE__ */ react_default.createElement(KeybindingContext.Provider, { value }, children);
    $[21] = children;
    $[22] = value;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  return t6;
}
function _temp() {
}
function useOptionalKeybindingContext() {
  return useContext(KeybindingContext);
}
function useRegisterKeybindingContext(context, t0) {
  const $ = c(5);
  const isActive = t0 === void 0 ? true : t0;
  const keybindingContext = useOptionalKeybindingContext();
  let t1;
  let t2;
  if ($[0] !== context || $[1] !== isActive || $[2] !== keybindingContext) {
    t1 = () => {
      if (!keybindingContext || !isActive) {
        return;
      }
      keybindingContext.registerActiveContext(context);
      return () => {
        keybindingContext.unregisterActiveContext(context);
      };
    };
    t2 = [context, keybindingContext, isActive];
    $[0] = context;
    $[1] = isActive;
    $[2] = keybindingContext;
    $[3] = t1;
    $[4] = t2;
  } else {
    t1 = $[3];
    t2 = $[4];
  }
  useLayoutEffect(t1, t2);
}
var KeybindingContext;
var init_KeybindingContext = __esm({
  "src/keybindings/KeybindingContext.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_resolver();
    KeybindingContext = createContext(null);
  }
});

// src/keybindings/useKeybinding.ts
function useKeybinding(action, handler, options = {}) {
  const { context = "Global", isActive = true } = options;
  const keybindingContext = useOptionalKeybindingContext();
  useEffect(() => {
    if (!keybindingContext || !isActive) return;
    return keybindingContext.registerHandler({ action, context, handler });
  }, [action, context, handler, keybindingContext, isActive]);
  const handleInput = useCallback(
    (input, key, event) => {
      if (!keybindingContext) return;
      const contextsToCheck = [
        ...keybindingContext.activeContexts,
        context,
        "Global"
      ];
      const uniqueContexts = [...new Set(contextsToCheck)];
      const result = keybindingContext.resolve(input, key, uniqueContexts);
      switch (result.type) {
        case "match":
          keybindingContext.setPendingChord(null);
          if (result.action === action) {
            if (handler() !== false) {
              event.stopImmediatePropagation();
            }
          }
          break;
        case "chord_started":
          keybindingContext.setPendingChord(result.pending);
          event.stopImmediatePropagation();
          break;
        case "chord_cancelled":
          keybindingContext.setPendingChord(null);
          break;
        case "unbound":
          keybindingContext.setPendingChord(null);
          event.stopImmediatePropagation();
          break;
        case "none":
          break;
      }
    },
    [action, context, handler, keybindingContext]
  );
  use_input_default(handleInput, { isActive });
}
function useKeybindings(handlers, options = {}) {
  const { context = "Global", isActive = true } = options;
  const keybindingContext = useOptionalKeybindingContext();
  useEffect(() => {
    if (!keybindingContext || !isActive) return;
    const unregisterFns = [];
    for (const [action, handler] of Object.entries(handlers)) {
      unregisterFns.push(
        keybindingContext.registerHandler({ action, context, handler })
      );
    }
    return () => {
      for (const unregister of unregisterFns) {
        unregister();
      }
    };
  }, [context, handlers, keybindingContext, isActive]);
  const handleInput = useCallback(
    (input, key, event) => {
      if (!keybindingContext) return;
      const contextsToCheck = [
        ...keybindingContext.activeContexts,
        context,
        "Global"
      ];
      const uniqueContexts = [...new Set(contextsToCheck)];
      const result = keybindingContext.resolve(input, key, uniqueContexts);
      switch (result.type) {
        case "match":
          keybindingContext.setPendingChord(null);
          if (result.action in handlers) {
            const handler = handlers[result.action];
            if (handler && handler() !== false) {
              event.stopImmediatePropagation();
            }
          }
          break;
        case "chord_started":
          keybindingContext.setPendingChord(result.pending);
          event.stopImmediatePropagation();
          break;
        case "chord_cancelled":
          keybindingContext.setPendingChord(null);
          break;
        case "unbound":
          keybindingContext.setPendingChord(null);
          event.stopImmediatePropagation();
          break;
        case "none":
          break;
      }
    },
    [context, handlers, keybindingContext]
  );
  use_input_default(handleInput, { isActive });
}
var init_useKeybinding = __esm({
  "src/keybindings/useKeybinding.ts"() {
    init_react();
    init_ink();
    init_KeybindingContext();
  }
});

// src/context/modalContext.tsx
function useIsInsideModal() {
  return useContext(ModalContext) !== null;
}
function useModalOrTerminalSize(fallback) {
  const $ = c(3);
  const ctx = useContext(ModalContext);
  let t0;
  if ($[0] !== ctx || $[1] !== fallback) {
    t0 = ctx ? {
      rows: ctx.rows,
      columns: ctx.columns
    } : fallback;
    $[0] = ctx;
    $[1] = fallback;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}
function useModalScrollRef() {
  return useContext(ModalContext)?.scrollRef ?? null;
}
var ModalContext;
var init_modalContext = __esm({
  "src/context/modalContext.tsx"() {
    init_react_compiler_runtime();
    init_react();
    ModalContext = createContext(null);
  }
});

// src/components/design-system/Divider.tsx
function Divider(t0) {
  const $ = c(21);
  const {
    width,
    color,
    char: t1,
    padding: t2,
    title
  } = t0;
  const char = t1 === void 0 ? "\u2500" : t1;
  const padding = t2 === void 0 ? 0 : t2;
  const {
    columns: terminalWidth
  } = useTerminalSize();
  const effectiveWidth = Math.max(0, (width ?? terminalWidth) - padding);
  if (title) {
    const titleWidth = stringWidth(title) + 2;
    const sideWidth = Math.max(0, effectiveWidth - titleWidth);
    const leftWidth = Math.floor(sideWidth / 2);
    const rightWidth = sideWidth - leftWidth;
    const t32 = !color;
    let t42;
    if ($[0] !== char || $[1] !== leftWidth) {
      t42 = char.repeat(leftWidth);
      $[0] = char;
      $[1] = leftWidth;
      $[2] = t42;
    } else {
      t42 = $[2];
    }
    let t52;
    if ($[3] !== title) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Ansi, null, title));
      $[3] = title;
      $[4] = t52;
    } else {
      t52 = $[4];
    }
    let t6;
    if ($[5] !== char || $[6] !== rightWidth) {
      t6 = char.repeat(rightWidth);
      $[5] = char;
      $[6] = rightWidth;
      $[7] = t6;
    } else {
      t6 = $[7];
    }
    let t7;
    if ($[8] !== color || $[9] !== t32 || $[10] !== t42 || $[11] !== t52 || $[12] !== t6) {
      t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { color, dimColor: t32 }, t42, " ", t52, " ", t6);
      $[8] = color;
      $[9] = t32;
      $[10] = t42;
      $[11] = t52;
      $[12] = t6;
      $[13] = t7;
    } else {
      t7 = $[13];
    }
    return t7;
  }
  const t3 = !color;
  let t4;
  if ($[14] !== char || $[15] !== effectiveWidth) {
    t4 = char.repeat(effectiveWidth);
    $[14] = char;
    $[15] = effectiveWidth;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  let t5;
  if ($[17] !== color || $[18] !== t3 || $[19] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { color, dimColor: t3 }, t4);
    $[17] = color;
    $[18] = t3;
    $[19] = t4;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  return t5;
}
var init_Divider = __esm({
  "src/components/design-system/Divider.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useTerminalSize();
    init_stringWidth();
    init_ink();
  }
});

// src/components/design-system/Pane.tsx
function Pane(t0) {
  const $ = c(9);
  const {
    children,
    color
  } = t0;
  if (useIsInsideModal()) {
    let t12;
    if ($[0] !== children) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 1, flexShrink: 0 }, children);
      $[0] = children;
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  let t1;
  if ($[2] !== color) {
    t1 = /* @__PURE__ */ react_default.createElement(Divider, { color });
    $[2] = color;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== children) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2 }, children);
    $[4] = children;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t1 || $[7] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingTop: 1 }, t1, t2);
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
var init_Pane = __esm({
  "src/components/design-system/Pane.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_modalContext();
    init_ink();
    init_Divider();
  }
});

export {
  useTerminalSize,
  init_useTerminalSize,
  parseKeystroke,
  parseChord,
  chordToString,
  parseBindings,
  init_parser,
  getBindingDisplayText,
  keystrokesEqual,
  resolveKeyWithChordState,
  init_resolver,
  KeybindingProvider,
  useOptionalKeybindingContext,
  useRegisterKeybindingContext,
  init_KeybindingContext,
  useKeybinding,
  useKeybindings,
  init_useKeybinding,
  ModalContext,
  useIsInsideModal,
  useModalOrTerminalSize,
  useModalScrollRef,
  init_modalContext,
  Divider,
  init_Divider,
  Pane,
  init_Pane
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS50cyIsICIuLi8uLi9zcmMva2V5YmluZGluZ3MvbWF0Y2gudHMiLCAiLi4vLi4vc3JjL2tleWJpbmRpbmdzL3BhcnNlci50cyIsICIuLi8uLi9zcmMva2V5YmluZGluZ3MvcmVzb2x2ZXIudHMiLCAiLi4vLi4vc3JjL2tleWJpbmRpbmdzL0tleWJpbmRpbmdDb250ZXh0LnRzeCIsICIuLi8uLi9zcmMva2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy50cyIsICIuLi8uLi9zcmMvY29udGV4dC9tb2RhbENvbnRleHQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vRGl2aWRlci50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9QYW5lLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBUZXJtaW5hbFNpemUsXG4gIFRlcm1pbmFsU2l6ZUNvbnRleHQsXG59IGZyb20gJ3NyYy9pbmsvY29tcG9uZW50cy9UZXJtaW5hbFNpemVDb250ZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVybWluYWxTaXplKCk6IFRlcm1pbmFsU2l6ZSB7XG4gIGNvbnN0IHNpemUgPSB1c2VDb250ZXh0KFRlcm1pbmFsU2l6ZUNvbnRleHQpXG5cbiAgaWYgKCFzaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VUZXJtaW5hbFNpemUgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBJbmsgQXBwIGNvbXBvbmVudCcpXG4gIH1cblxuICByZXR1cm4gc2l6ZVxufVxuIiwgImltcG9ydCB0eXBlIHsgS2V5IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBQYXJzZWRCaW5kaW5nLCBQYXJzZWRLZXlzdHJva2UgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG4vKipcbiAqIE1vZGlmaWVyIGtleXMgZnJvbSBJbmsncyBLZXkgdHlwZSB0aGF0IHdlIGNhcmUgYWJvdXQgZm9yIG1hdGNoaW5nLlxuICogTm90ZTogYGZuYCBmcm9tIEtleSBpcyBpbnRlbnRpb25hbGx5IGV4Y2x1ZGVkIGFzIGl0J3MgcmFyZWx5IHVzZWQgYW5kXG4gKiBub3QgY29tbW9ubHkgY29uZmlndXJhYmxlIGluIHRlcm1pbmFsIGFwcGxpY2F0aW9ucy5cbiAqL1xudHlwZSBJbmtNb2RpZmllcnMgPSBQaWNrPEtleSwgJ2N0cmwnIHwgJ3NoaWZ0JyB8ICdtZXRhJyB8ICdzdXBlcic+XG5cbi8qKlxuICogRXh0cmFjdCBtb2RpZmllcnMgZnJvbSBhbiBJbmsgS2V5IG9iamVjdC5cbiAqIFRoaXMgZnVuY3Rpb24gZW5zdXJlcyB3ZSdyZSBleHBsaWNpdGx5IGV4dHJhY3RpbmcgdGhlIG1vZGlmaWVycyB3ZSBjYXJlIGFib3V0LlxuICovXG5mdW5jdGlvbiBnZXRJbmtNb2RpZmllcnMoa2V5OiBLZXkpOiBJbmtNb2RpZmllcnMge1xuICByZXR1cm4ge1xuICAgIGN0cmw6IGtleS5jdHJsLFxuICAgIHNoaWZ0OiBrZXkuc2hpZnQsXG4gICAgbWV0YToga2V5Lm1ldGEsXG4gICAgc3VwZXI6IGtleS5zdXBlcixcbiAgfVxufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIG5vcm1hbGl6ZWQga2V5IG5hbWUgZnJvbSBJbmsncyBLZXkgKyBpbnB1dC5cbiAqIE1hcHMgSW5rJ3MgYm9vbGVhbiBmbGFncyAoa2V5LmVzY2FwZSwga2V5LnJldHVybiwgZXRjLikgdG8gc3RyaW5nIG5hbWVzXG4gKiB0aGF0IG1hdGNoIG91ciBQYXJzZWRLZXlzdHJva2Uua2V5IGZvcm1hdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEtleU5hbWUoaW5wdXQ6IHN0cmluZywga2V5OiBLZXkpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKGtleS5lc2NhcGUpIHJldHVybiAnZXNjYXBlJ1xuICBpZiAoa2V5LnJldHVybikgcmV0dXJuICdlbnRlcidcbiAgaWYgKGtleS50YWIpIHJldHVybiAndGFiJ1xuICBpZiAoa2V5LmJhY2tzcGFjZSkgcmV0dXJuICdiYWNrc3BhY2UnXG4gIGlmIChrZXkuZGVsZXRlKSByZXR1cm4gJ2RlbGV0ZSdcbiAgaWYgKGtleS51cEFycm93KSByZXR1cm4gJ3VwJ1xuICBpZiAoa2V5LmRvd25BcnJvdykgcmV0dXJuICdkb3duJ1xuICBpZiAoa2V5LmxlZnRBcnJvdykgcmV0dXJuICdsZWZ0J1xuICBpZiAoa2V5LnJpZ2h0QXJyb3cpIHJldHVybiAncmlnaHQnXG4gIGlmIChrZXkucGFnZVVwKSByZXR1cm4gJ3BhZ2V1cCdcbiAgaWYgKGtleS5wYWdlRG93bikgcmV0dXJuICdwYWdlZG93bidcbiAgaWYgKGtleS53aGVlbFVwKSByZXR1cm4gJ3doZWVsdXAnXG4gIGlmIChrZXkud2hlZWxEb3duKSByZXR1cm4gJ3doZWVsZG93bidcbiAgaWYgKGtleS5ob21lKSByZXR1cm4gJ2hvbWUnXG4gIGlmIChrZXkuZW5kKSByZXR1cm4gJ2VuZCdcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbGwgbW9kaWZpZXJzIG1hdGNoIGJldHdlZW4gSW5rIEtleSBhbmQgUGFyc2VkS2V5c3Ryb2tlLlxuICpcbiAqIEFsdCBhbmQgTWV0YTogSW5rIGhpc3RvcmljYWxseSBzZXQgYGtleS5tZXRhYCBmb3IgQWx0L09wdGlvbi4gQSBgbWV0YWBcbiAqIG1vZGlmaWVyIGluIGNvbmZpZyBpcyB0cmVhdGVkIGFzIGFuIGFsaWFzIGZvciBgYWx0YCBcdTIwMTQgYm90aCBtYXRjaCB3aGVuXG4gKiBga2V5Lm1ldGFgIGlzIHRydWUuXG4gKlxuICogU3VwZXIgKENtZC9XaW4pOiBkaXN0aW5jdCBmcm9tIGFsdC9tZXRhLiBPbmx5IGFycml2ZXMgdmlhIHRoZSBraXR0eVxuICoga2V5Ym9hcmQgcHJvdG9jb2wgb24gc3VwcG9ydGluZyB0ZXJtaW5hbHMuIEEgYGNtZGAvYHN1cGVyYCBiaW5kaW5nIHdpbGxcbiAqIHNpbXBseSBuZXZlciBmaXJlIG9uIHRlcm1pbmFscyB0aGF0IGRvbid0IHNlbmQgaXQuXG4gKi9cbmZ1bmN0aW9uIG1vZGlmaWVyc01hdGNoKFxuICBpbmtNb2RzOiBJbmtNb2RpZmllcnMsXG4gIHRhcmdldDogUGFyc2VkS2V5c3Ryb2tlLFxuKTogYm9vbGVhbiB7XG4gIC8vIENoZWNrIGN0cmwgbW9kaWZpZXJcbiAgaWYgKGlua01vZHMuY3RybCAhPT0gdGFyZ2V0LmN0cmwpIHJldHVybiBmYWxzZVxuXG4gIC8vIENoZWNrIHNoaWZ0IG1vZGlmaWVyXG4gIGlmIChpbmtNb2RzLnNoaWZ0ICE9PSB0YXJnZXQuc2hpZnQpIHJldHVybiBmYWxzZVxuXG4gIC8vIEFsdCBhbmQgbWV0YSBib3RoIG1hcCB0byBrZXkubWV0YSBpbiBJbmsgKHRlcm1pbmFsIGxpbWl0YXRpb24pXG4gIC8vIFNvIHdlIGNoZWNrIGlmIEVJVEhFUiBhbHQgT1IgbWV0YSBpcyByZXF1aXJlZCBpbiB0YXJnZXRcbiAgY29uc3QgdGFyZ2V0TmVlZHNNZXRhID0gdGFyZ2V0LmFsdCB8fCB0YXJnZXQubWV0YVxuICBpZiAoaW5rTW9kcy5tZXRhICE9PSB0YXJnZXROZWVkc01ldGEpIHJldHVybiBmYWxzZVxuXG4gIC8vIFN1cGVyIChjbWQvd2luKSBpcyBhIGRpc3RpbmN0IG1vZGlmaWVyIGZyb20gYWx0L21ldGFcbiAgaWYgKGlua01vZHMuc3VwZXIgIT09IHRhcmdldC5zdXBlcikgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIFBhcnNlZEtleXN0cm9rZSBtYXRjaGVzIHRoZSBnaXZlbiBJbmsgaW5wdXQgKyBLZXkuXG4gKlxuICogVGhlIGRpc3BsYXkgdGV4dCB3aWxsIHNob3cgcGxhdGZvcm0tYXBwcm9wcmlhdGUgbmFtZXMgKG9wdCBvbiBtYWNPUywgYWx0IGVsc2V3aGVyZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzS2V5c3Ryb2tlKFxuICBpbnB1dDogc3RyaW5nLFxuICBrZXk6IEtleSxcbiAgdGFyZ2V0OiBQYXJzZWRLZXlzdHJva2UsXG4pOiBib29sZWFuIHtcbiAgY29uc3Qga2V5TmFtZSA9IGdldEtleU5hbWUoaW5wdXQsIGtleSlcbiAgaWYgKGtleU5hbWUgIT09IHRhcmdldC5rZXkpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGlua01vZHMgPSBnZXRJbmtNb2RpZmllcnMoa2V5KVxuXG4gIC8vIFFVSVJLOiBJbmsgc2V0cyBrZXkubWV0YT10cnVlIHdoZW4gZXNjYXBlIGlzIHByZXNzZWQgKHNlZSBpbnB1dC1ldmVudC50cykuXG4gIC8vIFRoaXMgaXMgYSBsZWdhY3kgYmVoYXZpb3IgZnJvbSBob3cgZXNjYXBlIHNlcXVlbmNlcyB3b3JrIGluIHRlcm1pbmFscy5cbiAgLy8gV2UgbmVlZCB0byBpZ25vcmUgdGhlIG1ldGEgbW9kaWZpZXIgd2hlbiBtYXRjaGluZyB0aGUgZXNjYXBlIGtleSBpdHNlbGYsXG4gIC8vIG90aGVyd2lzZSBiaW5kaW5ncyBsaWtlIFwiZXNjYXBlXCIgKHdpdGhvdXQgbW9kaWZpZXJzKSB3b3VsZCBuZXZlciBtYXRjaC5cbiAgaWYgKGtleS5lc2NhcGUpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzTWF0Y2goeyAuLi5pbmtNb2RzLCBtZXRhOiBmYWxzZSB9LCB0YXJnZXQpXG4gIH1cblxuICByZXR1cm4gbW9kaWZpZXJzTWF0Y2goaW5rTW9kcywgdGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIEluaydzIEtleSArIGlucHV0IG1hdGNoZXMgYSBwYXJzZWQgYmluZGluZydzIGZpcnN0IGtleXN0cm9rZS5cbiAqIEZvciBzaW5nbGUta2V5c3Ryb2tlIGJpbmRpbmdzIG9ubHkgKFBoYXNlIDEpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc0JpbmRpbmcoXG4gIGlucHV0OiBzdHJpbmcsXG4gIGtleTogS2V5LFxuICBiaW5kaW5nOiBQYXJzZWRCaW5kaW5nLFxuKTogYm9vbGVhbiB7XG4gIGlmIChiaW5kaW5nLmNob3JkLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IGtleXN0cm9rZSA9IGJpbmRpbmcuY2hvcmRbMF1cbiAgaWYgKCFrZXlzdHJva2UpIHJldHVybiBmYWxzZVxuICByZXR1cm4gbWF0Y2hlc0tleXN0cm9rZShpbnB1dCwga2V5LCBrZXlzdHJva2UpXG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDaG9yZCxcbiAgS2V5YmluZGluZ0Jsb2NrLFxuICBQYXJzZWRCaW5kaW5nLFxuICBQYXJzZWRLZXlzdHJva2UsXG59IGZyb20gJy4vdHlwZXMuanMnXG5cbi8qKlxuICogUGFyc2UgYSBrZXlzdHJva2Ugc3RyaW5nIGxpa2UgXCJjdHJsK3NoaWZ0K2tcIiBpbnRvIGEgUGFyc2VkS2V5c3Ryb2tlLlxuICogU3VwcG9ydHMgdmFyaW91cyBtb2RpZmllciBhbGlhc2VzIChjdHJsL2NvbnRyb2wsIGFsdC9vcHQvb3B0aW9uL21ldGEsXG4gKiBjbWQvY29tbWFuZC9zdXBlci93aW4pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VLZXlzdHJva2UoaW5wdXQ6IHN0cmluZyk6IFBhcnNlZEtleXN0cm9rZSB7XG4gIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQoJysnKVxuICBjb25zdCBrZXlzdHJva2U6IFBhcnNlZEtleXN0cm9rZSA9IHtcbiAgICBrZXk6ICcnLFxuICAgIGN0cmw6IGZhbHNlLFxuICAgIGFsdDogZmFsc2UsXG4gICAgc2hpZnQ6IGZhbHNlLFxuICAgIG1ldGE6IGZhbHNlLFxuICAgIHN1cGVyOiBmYWxzZSxcbiAgfVxuICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICBjb25zdCBsb3dlciA9IHBhcnQudG9Mb3dlckNhc2UoKVxuICAgIHN3aXRjaCAobG93ZXIpIHtcbiAgICAgIGNhc2UgJ2N0cmwnOlxuICAgICAgY2FzZSAnY29udHJvbCc6XG4gICAgICAgIGtleXN0cm9rZS5jdHJsID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYWx0JzpcbiAgICAgIGNhc2UgJ29wdCc6XG4gICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICBrZXlzdHJva2UuYWx0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc2hpZnQnOlxuICAgICAgICBrZXlzdHJva2Uuc2hpZnQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAga2V5c3Ryb2tlLm1ldGEgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjbWQnOlxuICAgICAgY2FzZSAnY29tbWFuZCc6XG4gICAgICBjYXNlICdzdXBlcic6XG4gICAgICBjYXNlICd3aW4nOlxuICAgICAgICBrZXlzdHJva2Uuc3VwZXIgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlc2MnOlxuICAgICAgICBrZXlzdHJva2Uua2V5ID0gJ2VzY2FwZSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JldHVybic6XG4gICAgICAgIGtleXN0cm9rZS5rZXkgPSAnZW50ZXInXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgIGtleXN0cm9rZS5rZXkgPSAnICdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ1x1MjE5MSc6XG4gICAgICAgIGtleXN0cm9rZS5rZXkgPSAndXAnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdcdTIxOTMnOlxuICAgICAgICBrZXlzdHJva2Uua2V5ID0gJ2Rvd24nXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdcdTIxOTAnOlxuICAgICAgICBrZXlzdHJva2Uua2V5ID0gJ2xlZnQnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdcdTIxOTInOlxuICAgICAgICBrZXlzdHJva2Uua2V5ID0gJ3JpZ2h0J1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAga2V5c3Ryb2tlLmtleSA9IGxvd2VyXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGtleXN0cm9rZVxufVxuXG4vKipcbiAqIFBhcnNlIGEgY2hvcmQgc3RyaW5nIGxpa2UgXCJjdHJsK2sgY3RybCtzXCIgaW50byBhbiBhcnJheSBvZiBQYXJzZWRLZXlzdHJva2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDaG9yZChpbnB1dDogc3RyaW5nKTogQ2hvcmQge1xuICAvLyBBIGxvbmUgc3BhY2UgY2hhcmFjdGVyIElTIHRoZSBzcGFjZSBrZXkgYmluZGluZywgbm90IGEgc2VwYXJhdG9yXG4gIGlmIChpbnB1dCA9PT0gJyAnKSByZXR1cm4gW3BhcnNlS2V5c3Ryb2tlKCdzcGFjZScpXVxuICByZXR1cm4gaW5wdXQudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKHBhcnNlS2V5c3Ryb2tlKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBQYXJzZWRLZXlzdHJva2UgdG8gaXRzIGNhbm9uaWNhbCBzdHJpbmcgcmVwcmVzZW50YXRpb24gZm9yIGRpc3BsYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZXlzdHJva2VUb1N0cmluZyhrczogUGFyc2VkS2V5c3Ryb2tlKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGtzLmN0cmwpIHBhcnRzLnB1c2goJ2N0cmwnKVxuICBpZiAoa3MuYWx0KSBwYXJ0cy5wdXNoKCdhbHQnKVxuICBpZiAoa3Muc2hpZnQpIHBhcnRzLnB1c2goJ3NoaWZ0JylcbiAgaWYgKGtzLm1ldGEpIHBhcnRzLnB1c2goJ21ldGEnKVxuICBpZiAoa3Muc3VwZXIpIHBhcnRzLnB1c2goJ2NtZCcpXG4gIC8vIFVzZSByZWFkYWJsZSBuYW1lcyBmb3IgZGlzcGxheVxuICBjb25zdCBkaXNwbGF5S2V5ID0ga2V5VG9EaXNwbGF5TmFtZShrcy5rZXkpXG4gIHBhcnRzLnB1c2goZGlzcGxheUtleSlcbiAgcmV0dXJuIHBhcnRzLmpvaW4oJysnKVxufVxuXG4vKipcbiAqIE1hcCBpbnRlcm5hbCBrZXkgbmFtZXMgdG8gaHVtYW4tcmVhZGFibGUgZGlzcGxheSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24ga2V5VG9EaXNwbGF5TmFtZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnZXNjYXBlJzpcbiAgICAgIHJldHVybiAnRXNjJ1xuICAgIGNhc2UgJyAnOlxuICAgICAgcmV0dXJuICdTcGFjZSdcbiAgICBjYXNlICd0YWInOlxuICAgICAgcmV0dXJuICd0YWInXG4gICAgY2FzZSAnZW50ZXInOlxuICAgICAgcmV0dXJuICdFbnRlcidcbiAgICBjYXNlICdiYWNrc3BhY2UnOlxuICAgICAgcmV0dXJuICdCYWNrc3BhY2UnXG4gICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgIHJldHVybiAnRGVsZXRlJ1xuICAgIGNhc2UgJ3VwJzpcbiAgICAgIHJldHVybiAnXHUyMTkxJ1xuICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgcmV0dXJuICdcdTIxOTMnXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gJ1x1MjE5MCdcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gJ1x1MjE5MidcbiAgICBjYXNlICdwYWdldXAnOlxuICAgICAgcmV0dXJuICdQYWdlVXAnXG4gICAgY2FzZSAncGFnZWRvd24nOlxuICAgICAgcmV0dXJuICdQYWdlRG93bidcbiAgICBjYXNlICdob21lJzpcbiAgICAgIHJldHVybiAnSG9tZSdcbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuICdFbmQnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBrZXlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBDaG9yZCB0byBpdHMgY2Fub25pY2FsIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgZGlzcGxheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNob3JkVG9TdHJpbmcoY2hvcmQ6IENob3JkKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNob3JkLm1hcChrZXlzdHJva2VUb1N0cmluZykuam9pbignICcpXG59XG5cbi8qKlxuICogRGlzcGxheSBwbGF0Zm9ybSB0eXBlIC0gYSBzdWJzZXQgb2YgUGxhdGZvcm0gdGhhdCB3ZSBjYXJlIGFib3V0IGZvciBkaXNwbGF5LlxuICogV1NMIGFuZCB1bmtub3duIGFyZSB0cmVhdGVkIGFzIGxpbnV4IGZvciBkaXNwbGF5IHB1cnBvc2VzLlxuICovXG50eXBlIERpc3BsYXlQbGF0Zm9ybSA9ICdtYWNvcycgfCAnd2luZG93cycgfCAnbGludXgnIHwgJ3dzbCcgfCAndW5rbm93bidcblxuLyoqXG4gKiBDb252ZXJ0IGEgUGFyc2VkS2V5c3Ryb2tlIHRvIGEgcGxhdGZvcm0tYXBwcm9wcmlhdGUgZGlzcGxheSBzdHJpbmcuXG4gKiBVc2VzIFwib3B0XCIgZm9yIGFsdCBvbiBtYWNPUywgXCJhbHRcIiBlbHNld2hlcmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZXlzdHJva2VUb0Rpc3BsYXlTdHJpbmcoXG4gIGtzOiBQYXJzZWRLZXlzdHJva2UsXG4gIHBsYXRmb3JtOiBEaXNwbGF5UGxhdGZvcm0gPSAnbGludXgnLFxuKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgaWYgKGtzLmN0cmwpIHBhcnRzLnB1c2goJ2N0cmwnKVxuICAvLyBBbHQvbWV0YSBhcmUgZXF1aXZhbGVudCBpbiB0ZXJtaW5hbHMsIHNob3cgcGxhdGZvcm0tYXBwcm9wcmlhdGUgbmFtZVxuICBpZiAoa3MuYWx0IHx8IGtzLm1ldGEpIHtcbiAgICAvLyBPbmx5IG1hY09TIHVzZXMgXCJvcHRcIiwgYWxsIG90aGVyIHBsYXRmb3JtcyB1c2UgXCJhbHRcIlxuICAgIHBhcnRzLnB1c2gocGxhdGZvcm0gPT09ICdtYWNvcycgPyAnb3B0JyA6ICdhbHQnKVxuICB9XG4gIGlmIChrcy5zaGlmdCkgcGFydHMucHVzaCgnc2hpZnQnKVxuICBpZiAoa3Muc3VwZXIpIHtcbiAgICBwYXJ0cy5wdXNoKHBsYXRmb3JtID09PSAnbWFjb3MnID8gJ2NtZCcgOiAnc3VwZXInKVxuICB9XG4gIC8vIFVzZSByZWFkYWJsZSBuYW1lcyBmb3IgZGlzcGxheVxuICBjb25zdCBkaXNwbGF5S2V5ID0ga2V5VG9EaXNwbGF5TmFtZShrcy5rZXkpXG4gIHBhcnRzLnB1c2goZGlzcGxheUtleSlcbiAgcmV0dXJuIHBhcnRzLmpvaW4oJysnKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBDaG9yZCB0byBhIHBsYXRmb3JtLWFwcHJvcHJpYXRlIGRpc3BsYXkgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hvcmRUb0Rpc3BsYXlTdHJpbmcoXG4gIGNob3JkOiBDaG9yZCxcbiAgcGxhdGZvcm06IERpc3BsYXlQbGF0Zm9ybSA9ICdsaW51eCcsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gY2hvcmQubWFwKGtzID0+IGtleXN0cm9rZVRvRGlzcGxheVN0cmluZyhrcywgcGxhdGZvcm0pKS5qb2luKCcgJylcbn1cblxuLyoqXG4gKiBQYXJzZSBrZXliaW5kaW5nIGJsb2NrcyAoZnJvbSBKU09OIGNvbmZpZykgaW50byBhIGZsYXQgbGlzdCBvZiBQYXJzZWRCaW5kaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmluZGluZ3MoYmxvY2tzOiBLZXliaW5kaW5nQmxvY2tbXSk6IFBhcnNlZEJpbmRpbmdbXSB7XG4gIGNvbnN0IGJpbmRpbmdzOiBQYXJzZWRCaW5kaW5nW10gPSBbXVxuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgYWN0aW9uXSBvZiBPYmplY3QuZW50cmllcyhibG9jay5iaW5kaW5ncykpIHtcbiAgICAgIGJpbmRpbmdzLnB1c2goe1xuICAgICAgICBjaG9yZDogcGFyc2VDaG9yZChrZXkpLFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGNvbnRleHQ6IGJsb2NrLmNvbnRleHQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmluZGluZ3Ncbn1cbiIsICJpbXBvcnQgdHlwZSB7IEtleSB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7IGdldEtleU5hbWUsIG1hdGNoZXNCaW5kaW5nIH0gZnJvbSAnLi9tYXRjaC5qcydcbmltcG9ydCB7IGNob3JkVG9TdHJpbmcgfSBmcm9tICcuL3BhcnNlci5qcydcbmltcG9ydCB0eXBlIHtcbiAgS2V5YmluZGluZ0NvbnRleHROYW1lLFxuICBQYXJzZWRCaW5kaW5nLFxuICBQYXJzZWRLZXlzdHJva2UsXG59IGZyb20gJy4vdHlwZXMuanMnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVSZXN1bHQgPVxuICB8IHsgdHlwZTogJ21hdGNoJzsgYWN0aW9uOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogJ25vbmUnIH1cbiAgfCB7IHR5cGU6ICd1bmJvdW5kJyB9XG5cbmV4cG9ydCB0eXBlIENob3JkUmVzb2x2ZVJlc3VsdCA9XG4gIHwgeyB0eXBlOiAnbWF0Y2gnOyBhY3Rpb246IHN0cmluZyB9XG4gIHwgeyB0eXBlOiAnbm9uZScgfVxuICB8IHsgdHlwZTogJ3VuYm91bmQnIH1cbiAgfCB7IHR5cGU6ICdjaG9yZF9zdGFydGVkJzsgcGVuZGluZzogUGFyc2VkS2V5c3Ryb2tlW10gfVxuICB8IHsgdHlwZTogJ2Nob3JkX2NhbmNlbGxlZCcgfVxuXG4vKipcbiAqIFJlc29sdmUgYSBrZXkgaW5wdXQgdG8gYW4gYWN0aW9uLlxuICogUHVyZSBmdW5jdGlvbiAtIG5vIHN0YXRlLCBubyBzaWRlIGVmZmVjdHMsIGp1c3QgbWF0Y2hpbmcgbG9naWMuXG4gKlxuICogQHBhcmFtIGlucHV0IC0gVGhlIGNoYXJhY3RlciBpbnB1dCBmcm9tIElua1xuICogQHBhcmFtIGtleSAtIFRoZSBLZXkgb2JqZWN0IGZyb20gSW5rIHdpdGggbW9kaWZpZXIgZmxhZ3NcbiAqIEBwYXJhbSBhY3RpdmVDb250ZXh0cyAtIEFycmF5IG9mIGN1cnJlbnRseSBhY3RpdmUgY29udGV4dHMgKGUuZy4sIFsnQ2hhdCcsICdHbG9iYWwnXSlcbiAqIEBwYXJhbSBiaW5kaW5ncyAtIEFsbCBwYXJzZWQgYmluZGluZ3MgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEByZXR1cm5zIFRoZSByZXNvbHV0aW9uIHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUtleShcbiAgaW5wdXQ6IHN0cmluZyxcbiAga2V5OiBLZXksXG4gIGFjdGl2ZUNvbnRleHRzOiBLZXliaW5kaW5nQ29udGV4dE5hbWVbXSxcbiAgYmluZGluZ3M6IFBhcnNlZEJpbmRpbmdbXSxcbik6IFJlc29sdmVSZXN1bHQge1xuICAvLyBGaW5kIG1hdGNoaW5nIGJpbmRpbmdzIChsYXN0IG9uZSB3aW5zIGZvciB1c2VyIG92ZXJyaWRlcylcbiAgbGV0IG1hdGNoOiBQYXJzZWRCaW5kaW5nIHwgdW5kZWZpbmVkXG4gIGNvbnN0IGN0eFNldCA9IG5ldyBTZXQoYWN0aXZlQ29udGV4dHMpXG5cbiAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGJpbmRpbmdzKSB7XG4gICAgLy8gUGhhc2UgMTogT25seSBzaW5nbGUta2V5c3Ryb2tlIGJpbmRpbmdzXG4gICAgaWYgKGJpbmRpbmcuY2hvcmQubGVuZ3RoICE9PSAxKSBjb250aW51ZVxuICAgIGlmICghY3R4U2V0LmhhcyhiaW5kaW5nLmNvbnRleHQpKSBjb250aW51ZVxuXG4gICAgaWYgKG1hdGNoZXNCaW5kaW5nKGlucHV0LCBrZXksIGJpbmRpbmcpKSB7XG4gICAgICBtYXRjaCA9IGJpbmRpbmdcbiAgICB9XG4gIH1cblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ25vbmUnIH1cbiAgfVxuXG4gIGlmIChtYXRjaC5hY3Rpb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4geyB0eXBlOiAndW5ib3VuZCcgfVxuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogJ21hdGNoJywgYWN0aW9uOiBtYXRjaC5hY3Rpb24gfVxufVxuXG4vKipcbiAqIEdldCBkaXNwbGF5IHRleHQgZm9yIGFuIGFjdGlvbiBmcm9tIGJpbmRpbmdzIChlLmcuLCBcImN0cmwrdFwiIGZvciBcImFwcDp0b2dnbGVUb2Rvc1wiKS5cbiAqIFNlYXJjaGVzIGluIHJldmVyc2Ugb3JkZXIgc28gdXNlciBvdmVycmlkZXMgdGFrZSBwcmVjZWRlbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmluZGluZ0Rpc3BsYXlUZXh0KFxuICBhY3Rpb246IHN0cmluZyxcbiAgY29udGV4dDogS2V5YmluZGluZ0NvbnRleHROYW1lLFxuICBiaW5kaW5nczogUGFyc2VkQmluZGluZ1tdLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgLy8gRmluZCB0aGUgbGFzdCBiaW5kaW5nIGZvciB0aGlzIGFjdGlvbiBpbiB0aGlzIGNvbnRleHRcbiAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzLmZpbmRMYXN0KFxuICAgIGIgPT4gYi5hY3Rpb24gPT09IGFjdGlvbiAmJiBiLmNvbnRleHQgPT09IGNvbnRleHQsXG4gIClcbiAgcmV0dXJuIGJpbmRpbmcgPyBjaG9yZFRvU3RyaW5nKGJpbmRpbmcuY2hvcmQpIDogdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQnVpbGQgYSBQYXJzZWRLZXlzdHJva2UgZnJvbSBJbmsncyBpbnB1dC9rZXkuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkS2V5c3Ryb2tlKGlucHV0OiBzdHJpbmcsIGtleTogS2V5KTogUGFyc2VkS2V5c3Ryb2tlIHwgbnVsbCB7XG4gIGNvbnN0IGtleU5hbWUgPSBnZXRLZXlOYW1lKGlucHV0LCBrZXkpXG4gIGlmICgha2V5TmFtZSkgcmV0dXJuIG51bGxcblxuICAvLyBRVUlSSzogSW5rIHNldHMga2V5Lm1ldGE9dHJ1ZSB3aGVuIGVzY2FwZSBpcyBwcmVzc2VkIChzZWUgaW5wdXQtZXZlbnQudHMpLlxuICAvLyBUaGlzIGlzIGxlZ2FjeSB0ZXJtaW5hbCBiZWhhdmlvciAtIHdlIHNob3VsZCBOT1QgcmVjb3JkIHRoaXMgYXMgYSBtb2RpZmllclxuICAvLyBmb3IgdGhlIGVzY2FwZSBrZXkgaXRzZWxmLCBvdGhlcndpc2UgY2hvcmQgbWF0Y2hpbmcgd2lsbCBmYWlsLlxuICBjb25zdCBlZmZlY3RpdmVNZXRhID0ga2V5LmVzY2FwZSA/IGZhbHNlIDoga2V5Lm1ldGFcblxuICByZXR1cm4ge1xuICAgIGtleToga2V5TmFtZSxcbiAgICBjdHJsOiBrZXkuY3RybCxcbiAgICBhbHQ6IGVmZmVjdGl2ZU1ldGEsXG4gICAgc2hpZnQ6IGtleS5zaGlmdCxcbiAgICBtZXRhOiBlZmZlY3RpdmVNZXRhLFxuICAgIHN1cGVyOiBrZXkuc3VwZXIsXG4gIH1cbn1cblxuLyoqXG4gKiBDb21wYXJlIHR3byBQYXJzZWRLZXlzdHJva2VzIGZvciBlcXVhbGl0eS4gQ29sbGFwc2VzIGFsdC9tZXRhIGludG9cbiAqIG9uZSBsb2dpY2FsIG1vZGlmaWVyIFx1MjAxNCBsZWdhY3kgdGVybWluYWxzIGNhbid0IGRpc3Rpbmd1aXNoIHRoZW0gKHNlZVxuICogbWF0Y2gudHMgbW9kaWZpZXJzTWF0Y2gpLCBzbyBcImFsdCtrXCIgYW5kIFwibWV0YStrXCIgYXJlIHRoZSBzYW1lIGtleS5cbiAqIFN1cGVyIChjbWQvd2luKSBpcyBkaXN0aW5jdCBcdTIwMTQgb25seSBhcnJpdmVzIHZpYSBraXR0eSBrZXlib2FyZCBwcm90b2NvbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtleXN0cm9rZXNFcXVhbChcbiAgYTogUGFyc2VkS2V5c3Ryb2tlLFxuICBiOiBQYXJzZWRLZXlzdHJva2UsXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhLmtleSA9PT0gYi5rZXkgJiZcbiAgICBhLmN0cmwgPT09IGIuY3RybCAmJlxuICAgIGEuc2hpZnQgPT09IGIuc2hpZnQgJiZcbiAgICAoYS5hbHQgfHwgYS5tZXRhKSA9PT0gKGIuYWx0IHx8IGIubWV0YSkgJiZcbiAgICBhLnN1cGVyID09PSBiLnN1cGVyXG4gIClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNob3JkIHByZWZpeCBtYXRjaGVzIHRoZSBiZWdpbm5pbmcgb2YgYSBiaW5kaW5nJ3MgY2hvcmQuXG4gKi9cbmZ1bmN0aW9uIGNob3JkUHJlZml4TWF0Y2hlcyhcbiAgcHJlZml4OiBQYXJzZWRLZXlzdHJva2VbXSxcbiAgYmluZGluZzogUGFyc2VkQmluZGluZyxcbik6IGJvb2xlYW4ge1xuICBpZiAocHJlZml4Lmxlbmd0aCA+PSBiaW5kaW5nLmNob3JkLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4S2V5ID0gcHJlZml4W2ldXG4gICAgY29uc3QgYmluZGluZ0tleSA9IGJpbmRpbmcuY2hvcmRbaV1cbiAgICBpZiAoIXByZWZpeEtleSB8fCAhYmluZGluZ0tleSkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKCFrZXlzdHJva2VzRXF1YWwocHJlZml4S2V5LCBiaW5kaW5nS2V5KSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGZ1bGwgY2hvcmQgbWF0Y2hlcyBhIGJpbmRpbmcncyBjaG9yZC5cbiAqL1xuZnVuY3Rpb24gY2hvcmRFeGFjdGx5TWF0Y2hlcyhcbiAgY2hvcmQ6IFBhcnNlZEtleXN0cm9rZVtdLFxuICBiaW5kaW5nOiBQYXJzZWRCaW5kaW5nLFxuKTogYm9vbGVhbiB7XG4gIGlmIChjaG9yZC5sZW5ndGggIT09IGJpbmRpbmcuY2hvcmQubGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9yZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNob3JkS2V5ID0gY2hvcmRbaV1cbiAgICBjb25zdCBiaW5kaW5nS2V5ID0gYmluZGluZy5jaG9yZFtpXVxuICAgIGlmICghY2hvcmRLZXkgfHwgIWJpbmRpbmdLZXkpIHJldHVybiBmYWxzZVxuICAgIGlmICgha2V5c3Ryb2tlc0VxdWFsKGNob3JkS2V5LCBiaW5kaW5nS2V5KSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEga2V5IHdpdGggY2hvcmQgc3RhdGUgc3VwcG9ydC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgbXVsdGkta2V5c3Ryb2tlIGNob3JkIGJpbmRpbmdzIGxpa2UgXCJjdHJsK2sgY3RybCtzXCIuXG4gKlxuICogQHBhcmFtIGlucHV0IC0gVGhlIGNoYXJhY3RlciBpbnB1dCBmcm9tIElua1xuICogQHBhcmFtIGtleSAtIFRoZSBLZXkgb2JqZWN0IGZyb20gSW5rIHdpdGggbW9kaWZpZXIgZmxhZ3NcbiAqIEBwYXJhbSBhY3RpdmVDb250ZXh0cyAtIEFycmF5IG9mIGN1cnJlbnRseSBhY3RpdmUgY29udGV4dHNcbiAqIEBwYXJhbSBiaW5kaW5ncyAtIEFsbCBwYXJzZWQgYmluZGluZ3NcbiAqIEBwYXJhbSBwZW5kaW5nIC0gQ3VycmVudCBjaG9yZCBzdGF0ZSAobnVsbCBpZiBub3QgaW4gYSBjaG9yZClcbiAqIEByZXR1cm5zIFJlc29sdXRpb24gcmVzdWx0IHdpdGggY2hvcmQgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVLZXlXaXRoQ2hvcmRTdGF0ZShcbiAgaW5wdXQ6IHN0cmluZyxcbiAga2V5OiBLZXksXG4gIGFjdGl2ZUNvbnRleHRzOiBLZXliaW5kaW5nQ29udGV4dE5hbWVbXSxcbiAgYmluZGluZ3M6IFBhcnNlZEJpbmRpbmdbXSxcbiAgcGVuZGluZzogUGFyc2VkS2V5c3Ryb2tlW10gfCBudWxsLFxuKTogQ2hvcmRSZXNvbHZlUmVzdWx0IHtcbiAgLy8gQ2FuY2VsIGNob3JkIG9uIGVzY2FwZVxuICBpZiAoa2V5LmVzY2FwZSAmJiBwZW5kaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ2Nob3JkX2NhbmNlbGxlZCcgfVxuICB9XG5cbiAgLy8gQnVpbGQgY3VycmVudCBrZXlzdHJva2VcbiAgY29uc3QgY3VycmVudEtleXN0cm9rZSA9IGJ1aWxkS2V5c3Ryb2tlKGlucHV0LCBrZXkpXG4gIGlmICghY3VycmVudEtleXN0cm9rZSkge1xuICAgIGlmIChwZW5kaW5nICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiAnY2hvcmRfY2FuY2VsbGVkJyB9XG4gICAgfVxuICAgIHJldHVybiB7IHR5cGU6ICdub25lJyB9XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgZnVsbCBjaG9yZCBzZXF1ZW5jZSB0byB0ZXN0XG4gIGNvbnN0IHRlc3RDaG9yZCA9IHBlbmRpbmdcbiAgICA/IFsuLi5wZW5kaW5nLCBjdXJyZW50S2V5c3Ryb2tlXVxuICAgIDogW2N1cnJlbnRLZXlzdHJva2VdXG5cbiAgLy8gRmlsdGVyIGJpbmRpbmdzIGJ5IGFjdGl2ZSBjb250ZXh0cyAoU2V0IGxvb2t1cDogTyhuKSBpbnN0ZWFkIG9mIE8oblx1MDBCN20pKVxuICBjb25zdCBjdHhTZXQgPSBuZXcgU2V0KGFjdGl2ZUNvbnRleHRzKVxuICBjb25zdCBjb250ZXh0QmluZGluZ3MgPSBiaW5kaW5ncy5maWx0ZXIoYiA9PiBjdHhTZXQuaGFzKGIuY29udGV4dCkpXG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBjb3VsZCBiZSBhIHByZWZpeCBmb3IgbG9uZ2VyIGNob3Jkcy4gR3JvdXAgYnkgY2hvcmRcbiAgLy8gc3RyaW5nIHNvIGEgbGF0ZXIgbnVsbC1vdmVycmlkZSBzaGFkb3dzIHRoZSBkZWZhdWx0IGl0IHVuYmluZHMgXHUyMDE0XG4gIC8vIG90aGVyd2lzZSBudWxsLXVuYmluZGluZyBgY3RybCt4IGN0cmwra2Agc3RpbGwgbWFrZXMgYGN0cmwreGAgZW50ZXJcbiAgLy8gY2hvcmQtd2FpdCBhbmQgdGhlIHNpbmdsZS1rZXkgYmluZGluZyBvbiB0aGUgcHJlZml4IG5ldmVyIGZpcmVzLlxuICBjb25zdCBjaG9yZFdpbm5lcnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgbnVsbD4oKVxuICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgY29udGV4dEJpbmRpbmdzKSB7XG4gICAgaWYgKFxuICAgICAgYmluZGluZy5jaG9yZC5sZW5ndGggPiB0ZXN0Q2hvcmQubGVuZ3RoICYmXG4gICAgICBjaG9yZFByZWZpeE1hdGNoZXModGVzdENob3JkLCBiaW5kaW5nKVxuICAgICkge1xuICAgICAgY2hvcmRXaW5uZXJzLnNldChjaG9yZFRvU3RyaW5nKGJpbmRpbmcuY2hvcmQpLCBiaW5kaW5nLmFjdGlvbilcbiAgICB9XG4gIH1cbiAgbGV0IGhhc0xvbmdlckNob3JkcyA9IGZhbHNlXG4gIGZvciAoY29uc3QgYWN0aW9uIG9mIGNob3JkV2lubmVycy52YWx1ZXMoKSkge1xuICAgIGlmIChhY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGhhc0xvbmdlckNob3JkcyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhpcyBrZXlzdHJva2UgY291bGQgc3RhcnQgYSBsb25nZXIgY2hvcmQsIHByZWZlciB0aGF0XG4gIC8vIChldmVuIGlmIHRoZXJlJ3MgYW4gZXhhY3Qgc2luZ2xlLWtleSBtYXRjaClcbiAgaWYgKGhhc0xvbmdlckNob3Jkcykge1xuICAgIHJldHVybiB7IHR5cGU6ICdjaG9yZF9zdGFydGVkJywgcGVuZGluZzogdGVzdENob3JkIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBleGFjdCBtYXRjaGVzIChsYXN0IG9uZSB3aW5zKVxuICBsZXQgZXhhY3RNYXRjaDogUGFyc2VkQmluZGluZyB8IHVuZGVmaW5lZFxuICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgY29udGV4dEJpbmRpbmdzKSB7XG4gICAgaWYgKGNob3JkRXhhY3RseU1hdGNoZXModGVzdENob3JkLCBiaW5kaW5nKSkge1xuICAgICAgZXhhY3RNYXRjaCA9IGJpbmRpbmdcbiAgICB9XG4gIH1cblxuICBpZiAoZXhhY3RNYXRjaCkge1xuICAgIGlmIChleGFjdE1hdGNoLmFjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ3VuYm91bmQnIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdHlwZTogJ21hdGNoJywgYWN0aW9uOiBleGFjdE1hdGNoLmFjdGlvbiB9XG4gIH1cblxuICAvLyBObyBtYXRjaCBhbmQgbm8gcG90ZW50aWFsIGxvbmdlciBjaG9yZHNcbiAgaWYgKHBlbmRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm4geyB0eXBlOiAnY2hvcmRfY2FuY2VsbGVkJyB9XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiAnbm9uZScgfVxufVxuIiwgImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LFxuICB0eXBlIFJlZk9iamVjdCxcbiAgdXNlQ29udGV4dCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgS2V5IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBDaG9yZFJlc29sdmVSZXN1bHQsXG4gIGdldEJpbmRpbmdEaXNwbGF5VGV4dCxcbiAgcmVzb2x2ZUtleVdpdGhDaG9yZFN0YXRlLFxufSBmcm9tICcuL3Jlc29sdmVyLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBLZXliaW5kaW5nQ29udGV4dE5hbWUsXG4gIFBhcnNlZEJpbmRpbmcsXG4gIFBhcnNlZEtleXN0cm9rZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcblxuLyoqIEhhbmRsZXIgcmVnaXN0cmF0aW9uIGZvciBhY3Rpb24gY2FsbGJhY2tzICovXG50eXBlIEhhbmRsZXJSZWdpc3RyYXRpb24gPSB7XG4gIGFjdGlvbjogc3RyaW5nXG4gIGNvbnRleHQ6IEtleWJpbmRpbmdDb250ZXh0TmFtZVxuICBoYW5kbGVyOiAoKSA9PiB2b2lkXG59XG5cbnR5cGUgS2V5YmluZGluZ0NvbnRleHRWYWx1ZSA9IHtcbiAgLyoqIFJlc29sdmUgYSBrZXkgaW5wdXQgdG8gYW4gYWN0aW9uIG5hbWUgKHdpdGggY2hvcmQgc3VwcG9ydCkgKi9cbiAgcmVzb2x2ZTogKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAga2V5OiBLZXksXG4gICAgYWN0aXZlQ29udGV4dHM6IEtleWJpbmRpbmdDb250ZXh0TmFtZVtdLFxuICApID0+IENob3JkUmVzb2x2ZVJlc3VsdFxuXG4gIC8qKiBVcGRhdGUgdGhlIHBlbmRpbmcgY2hvcmQgc3RhdGUgKi9cbiAgc2V0UGVuZGluZ0Nob3JkOiAocGVuZGluZzogUGFyc2VkS2V5c3Ryb2tlW10gfCBudWxsKSA9PiB2b2lkXG5cbiAgLyoqIEdldCBkaXNwbGF5IHRleHQgZm9yIGFuIGFjdGlvbiAoZS5nLiwgXCJjdHJsK3RcIikgKi9cbiAgZ2V0RGlzcGxheVRleHQ6IChcbiAgICBhY3Rpb246IHN0cmluZyxcbiAgICBjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWUsXG4gICkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLyoqIEFsbCBwYXJzZWQgYmluZGluZ3MgKGZvciBoZWxwIGRpc3BsYXkpICovXG4gIGJpbmRpbmdzOiBQYXJzZWRCaW5kaW5nW11cblxuICAvKiogQ3VycmVudCBwZW5kaW5nIGNob3JkIGtleXN0cm9rZXMgKG51bGwgaWYgbm90IGluIGEgY2hvcmQpICovXG4gIHBlbmRpbmdDaG9yZDogUGFyc2VkS2V5c3Ryb2tlW10gfCBudWxsXG5cbiAgLyoqIEN1cnJlbnRseSBhY3RpdmUga2V5YmluZGluZyBjb250ZXh0cyAoZm9yIHByaW9yaXR5IHJlc29sdXRpb24pICovXG4gIGFjdGl2ZUNvbnRleHRzOiBTZXQ8S2V5YmluZGluZ0NvbnRleHROYW1lPlxuXG4gIC8qKiBSZWdpc3RlciBhIGNvbnRleHQgYXMgYWN0aXZlIChjYWxsIG9uIG1vdW50KSAqL1xuICByZWdpc3RlckFjdGl2ZUNvbnRleHQ6IChjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWUpID0+IHZvaWRcblxuICAvKiogVW5yZWdpc3RlciBhIGNvbnRleHQgKGNhbGwgb24gdW5tb3VudCkgKi9cbiAgdW5yZWdpc3RlckFjdGl2ZUNvbnRleHQ6IChjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWUpID0+IHZvaWRcblxuICAvKiogUmVnaXN0ZXIgYSBoYW5kbGVyIGZvciBhbiBhY3Rpb24gKHVzZWQgYnkgdXNlS2V5YmluZGluZykgKi9cbiAgcmVnaXN0ZXJIYW5kbGVyOiAocmVnaXN0cmF0aW9uOiBIYW5kbGVyUmVnaXN0cmF0aW9uKSA9PiAoKSA9PiB2b2lkXG5cbiAgLyoqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIGFuIGFjdGlvbiAodXNlZCBieSBDaG9yZEludGVyY2VwdG9yKSAqL1xuICBpbnZva2VBY3Rpb246IChhY3Rpb246IHN0cmluZykgPT4gYm9vbGVhblxufVxuXG5jb25zdCBLZXliaW5kaW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8S2V5YmluZGluZ0NvbnRleHRWYWx1ZSB8IG51bGw+KG51bGwpXG5cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgYmluZGluZ3M6IFBhcnNlZEJpbmRpbmdbXVxuICAvKiogUmVmIGZvciBpbW1lZGlhdGUgYWNjZXNzIHRvIHBlbmRpbmcgY2hvcmQgKGF2b2lkcyBSZWFjdCBzdGF0ZSBkZWxheSkgKi9cbiAgcGVuZGluZ0Nob3JkUmVmOiBSZWZPYmplY3Q8UGFyc2VkS2V5c3Ryb2tlW10gfCBudWxsPlxuICAvKiogU3RhdGUgdmFsdWUgZm9yIHJlLXJlbmRlcnMgKFVJIHVwZGF0ZXMpICovXG4gIHBlbmRpbmdDaG9yZDogUGFyc2VkS2V5c3Ryb2tlW10gfCBudWxsXG4gIHNldFBlbmRpbmdDaG9yZDogKHBlbmRpbmc6IFBhcnNlZEtleXN0cm9rZVtdIHwgbnVsbCkgPT4gdm9pZFxuICBhY3RpdmVDb250ZXh0czogU2V0PEtleWJpbmRpbmdDb250ZXh0TmFtZT5cbiAgcmVnaXN0ZXJBY3RpdmVDb250ZXh0OiAoY29udGV4dDogS2V5YmluZGluZ0NvbnRleHROYW1lKSA9PiB2b2lkXG4gIHVucmVnaXN0ZXJBY3RpdmVDb250ZXh0OiAoY29udGV4dDogS2V5YmluZGluZ0NvbnRleHROYW1lKSA9PiB2b2lkXG4gIC8qKiBSZWYgdG8gaGFuZGxlciByZWdpc3RyeSAodXNlZCBieSBDaG9yZEludGVyY2VwdG9yKSAqL1xuICBoYW5kbGVyUmVnaXN0cnlSZWY6IFJlZk9iamVjdDxNYXA8c3RyaW5nLCBTZXQ8SGFuZGxlclJlZ2lzdHJhdGlvbj4+PlxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBLZXliaW5kaW5nUHJvdmlkZXIoe1xuICBiaW5kaW5ncyxcbiAgcGVuZGluZ0Nob3JkUmVmLFxuICBwZW5kaW5nQ2hvcmQsXG4gIHNldFBlbmRpbmdDaG9yZCxcbiAgYWN0aXZlQ29udGV4dHMsXG4gIHJlZ2lzdGVyQWN0aXZlQ29udGV4dCxcbiAgdW5yZWdpc3RlckFjdGl2ZUNvbnRleHQsXG4gIGhhbmRsZXJSZWdpc3RyeVJlZixcbiAgY2hpbGRyZW4sXG59OiBQcm92aWRlclByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vPEtleWJpbmRpbmdDb250ZXh0VmFsdWU+KCgpID0+IHtcbiAgICBjb25zdCBnZXREaXNwbGF5ID0gKGFjdGlvbjogc3RyaW5nLCBjb250ZXh0OiBLZXliaW5kaW5nQ29udGV4dE5hbWUpID0+XG4gICAgICBnZXRCaW5kaW5nRGlzcGxheVRleHQoYWN0aW9uLCBjb250ZXh0LCBiaW5kaW5ncylcblxuICAgIC8vIFJlZ2lzdGVyIGEgaGFuZGxlciBmb3IgYW4gYWN0aW9uXG4gICAgY29uc3QgcmVnaXN0ZXJIYW5kbGVyID0gKHJlZ2lzdHJhdGlvbjogSGFuZGxlclJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcmVnaXN0cnkgPSBoYW5kbGVyUmVnaXN0cnlSZWYuY3VycmVudFxuICAgICAgaWYgKCFyZWdpc3RyeSkgcmV0dXJuICgpID0+IHt9XG5cbiAgICAgIGlmICghcmVnaXN0cnkuaGFzKHJlZ2lzdHJhdGlvbi5hY3Rpb24pKSB7XG4gICAgICAgIHJlZ2lzdHJ5LnNldChyZWdpc3RyYXRpb24uYWN0aW9uLCBuZXcgU2V0KCkpXG4gICAgICB9XG4gICAgICByZWdpc3RyeS5nZXQocmVnaXN0cmF0aW9uLmFjdGlvbikhLmFkZChyZWdpc3RyYXRpb24pXG5cbiAgICAgIC8vIFJldHVybiB1bnJlZ2lzdGVyIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChyZWdpc3RyYXRpb24uYWN0aW9uKVxuICAgICAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgICAgICBoYW5kbGVycy5kZWxldGUocmVnaXN0cmF0aW9uKVxuICAgICAgICAgIGlmIChoYW5kbGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZWdpc3RyeS5kZWxldGUocmVnaXN0cmF0aW9uLmFjdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciBhbiBhY3Rpb25cbiAgICBjb25zdCBpbnZva2VBY3Rpb24gPSAoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lzdHJ5ID0gaGFuZGxlclJlZ2lzdHJ5UmVmLmN1cnJlbnRcbiAgICAgIGlmICghcmVnaXN0cnkpIHJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChhY3Rpb24pXG4gICAgICBpZiAoIWhhbmRsZXJzIHx8IGhhbmRsZXJzLnNpemUgPT09IDApIHJldHVybiBmYWxzZVxuXG4gICAgICAvLyBGaW5kIGhhbmRsZXJzIHdob3NlIGNvbnRleHQgaXMgYWN0aXZlXG4gICAgICBmb3IgKGNvbnN0IHJlZ2lzdHJhdGlvbiBvZiBoYW5kbGVycykge1xuICAgICAgICBpZiAoYWN0aXZlQ29udGV4dHMuaGFzKHJlZ2lzdHJhdGlvbi5jb250ZXh0KSkge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi5oYW5kbGVyKClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gVXNlIHJlZiBmb3IgaW1tZWRpYXRlIGFjY2VzcyB0byBwZW5kaW5nIGNob3JkLCBhdm9pZGluZyBSZWFjdCBzdGF0ZSBkZWxheVxuICAgICAgLy8gVGhpcyBpcyBjcml0aWNhbCBmb3IgY2hvcmQgc2VxdWVuY2VzIHdoZXJlIHRoZSBzZWNvbmQga2V5IG1pZ2h0IGJlIHByZXNzZWRcbiAgICAgIC8vIGJlZm9yZSBSZWFjdCByZS1yZW5kZXJzIHdpdGggdGhlIHVwZGF0ZWQgcGVuZGluZ0Nob3JkIHN0YXRlXG4gICAgICByZXNvbHZlOiAoaW5wdXQsIGtleSwgY29udGV4dHMpID0+XG4gICAgICAgIHJlc29sdmVLZXlXaXRoQ2hvcmRTdGF0ZShcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgY29udGV4dHMsXG4gICAgICAgICAgYmluZGluZ3MsXG4gICAgICAgICAgcGVuZGluZ0Nob3JkUmVmLmN1cnJlbnQsXG4gICAgICAgICksXG4gICAgICBzZXRQZW5kaW5nQ2hvcmQsXG4gICAgICBnZXREaXNwbGF5VGV4dDogZ2V0RGlzcGxheSxcbiAgICAgIGJpbmRpbmdzLFxuICAgICAgcGVuZGluZ0Nob3JkLFxuICAgICAgYWN0aXZlQ29udGV4dHMsXG4gICAgICByZWdpc3RlckFjdGl2ZUNvbnRleHQsXG4gICAgICB1bnJlZ2lzdGVyQWN0aXZlQ29udGV4dCxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICAgIGludm9rZUFjdGlvbixcbiAgICB9XG4gIH0sIFtcbiAgICBiaW5kaW5ncyxcbiAgICBwZW5kaW5nQ2hvcmRSZWYsXG4gICAgcGVuZGluZ0Nob3JkLFxuICAgIHNldFBlbmRpbmdDaG9yZCxcbiAgICBhY3RpdmVDb250ZXh0cyxcbiAgICByZWdpc3RlckFjdGl2ZUNvbnRleHQsXG4gICAgdW5yZWdpc3RlckFjdGl2ZUNvbnRleHQsXG4gICAgaGFuZGxlclJlZ2lzdHJ5UmVmLFxuICBdKVxuXG4gIHJldHVybiAoXG4gICAgPEtleWJpbmRpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9LZXliaW5kaW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlS2V5YmluZGluZ0NvbnRleHQoKTogS2V5YmluZGluZ0NvbnRleHRWYWx1ZSB7XG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoS2V5YmluZGluZ0NvbnRleHQpXG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3VzZUtleWJpbmRpbmdDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gS2V5YmluZGluZ1Byb3ZpZGVyJyxcbiAgICApXG4gIH1cbiAgcmV0dXJuIGN0eFxufVxuXG4vKipcbiAqIE9wdGlvbmFsIGhvb2sgdGhhdCByZXR1cm5zIHVuZGVmaW5lZCBvdXRzaWRlIG9mIEtleWJpbmRpbmdQcm92aWRlci5cbiAqIFVzZWZ1bCBmb3IgY29tcG9uZW50cyB0aGF0IG1heSByZW5kZXIgYmVmb3JlIHByb3ZpZGVyIGlzIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU9wdGlvbmFsS2V5YmluZGluZ0NvbnRleHQoKTogS2V5YmluZGluZ0NvbnRleHRWYWx1ZSB8IG51bGwge1xuICByZXR1cm4gdXNlQ29udGV4dChLZXliaW5kaW5nQ29udGV4dClcbn1cblxuLyoqXG4gKiBIb29rIHRvIHJlZ2lzdGVyIGEga2V5YmluZGluZyBjb250ZXh0IGFzIGFjdGl2ZSB3aGlsZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gKlxuICogV2hlbiBhIGNvbnRleHQgaXMgcmVnaXN0ZXJlZCwgaXRzIGtleWJpbmRpbmdzIHRha2UgcHJlY2VkZW5jZSBvdmVyIEdsb2JhbCBiaW5kaW5ncy5cbiAqIFRoaXMgYWxsb3dzIGNvbnRleHQtc3BlY2lmaWMgYmluZGluZ3MgKGxpa2UgVGhlbWVQaWNrZXIncyBjdHJsK3QpIHRvIG92ZXJyaWRlXG4gKiBnbG9iYWwgYmluZGluZ3MgKGxpa2UgdGhlIHRvZG8gdG9nZ2xlKSB3aGVuIHRoZSBjb250ZXh0IGlzIGFjdGl2ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiBmdW5jdGlvbiBUaGVtZVBpY2tlcigpIHtcbiAqICAgdXNlUmVnaXN0ZXJLZXliaW5kaW5nQ29udGV4dCgnVGhlbWVQaWNrZXInKVxuICogICAvLyBOb3cgVGhlbWVQaWNrZXIncyBjdHJsK3QgYmluZGluZyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgR2xvYmFsXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyS2V5YmluZGluZ0NvbnRleHQoXG4gIGNvbnRleHQ6IEtleWJpbmRpbmdDb250ZXh0TmFtZSxcbiAgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlLFxuKTogdm9pZCB7XG4gIGNvbnN0IGtleWJpbmRpbmdDb250ZXh0ID0gdXNlT3B0aW9uYWxLZXliaW5kaW5nQ29udGV4dCgpXG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWtleWJpbmRpbmdDb250ZXh0IHx8ICFpc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICBrZXliaW5kaW5nQ29udGV4dC5yZWdpc3RlckFjdGl2ZUNvbnRleHQoY29udGV4dClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAga2V5YmluZGluZ0NvbnRleHQudW5yZWdpc3RlckFjdGl2ZUNvbnRleHQoY29udGV4dClcbiAgICB9XG4gIH0sIFtjb250ZXh0LCBrZXliaW5kaW5nQ29udGV4dCwgaXNBY3RpdmVdKVxufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgSW5wdXRFdmVudCB9IGZyb20gJy4uL2luay9ldmVudHMvaW5wdXQtZXZlbnQuanMnXG5pbXBvcnQgeyB0eXBlIEtleSwgdXNlSW5wdXQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VPcHRpb25hbEtleWJpbmRpbmdDb250ZXh0IH0gZnJvbSAnLi9LZXliaW5kaW5nQ29udGV4dC5qcydcbmltcG9ydCB0eXBlIHsgS2V5YmluZGluZ0NvbnRleHROYW1lIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBPcHRpb25zID0ge1xuICAvKiogV2hpY2ggY29udGV4dCB0aGlzIGJpbmRpbmcgYmVsb25ncyB0byAoZGVmYXVsdDogJ0dsb2JhbCcpICovXG4gIGNvbnRleHQ/OiBLZXliaW5kaW5nQ29udGV4dE5hbWVcbiAgLyoqIE9ubHkgaGFuZGxlIHdoZW4gYWN0aXZlIChsaWtlIHVzZUlucHV0J3MgaXNBY3RpdmUpICovXG4gIGlzQWN0aXZlPzogYm9vbGVhblxufVxuXG4vKipcbiAqIEluay1uYXRpdmUgaG9vayBmb3IgaGFuZGxpbmcgYSBrZXliaW5kaW5nLlxuICpcbiAqIFRoZSBoYW5kbGVyIHN0YXlzIGluIHRoZSBjb21wb25lbnQgKFJlYWN0IHdheSkuXG4gKiBUaGUgYmluZGluZyAoa2V5c3Ryb2tlIFx1MjE5MiBhY3Rpb24pIGNvbWVzIGZyb20gY29uZmlnLlxuICpcbiAqIFN1cHBvcnRzIGNob3JkIHNlcXVlbmNlcyAoZS5nLiwgXCJjdHJsK2sgY3RybCtzXCIpLiBXaGVuIGEgY2hvcmQgaXMgc3RhcnRlZCxcbiAqIHRoZSBob29rIHdpbGwgbWFuYWdlIHRoZSBwZW5kaW5nIHN0YXRlIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogVXNlcyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB0byBwcmV2ZW50IG90aGVyIGhhbmRsZXJzIGZyb20gZmlyaW5nXG4gKiBvbmNlIHRoaXMgYmluZGluZyBpcyBoYW5kbGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIHVzZUtleWJpbmRpbmcoJ2FwcDp0b2dnbGVUb2RvcycsICgpID0+IHtcbiAqICAgc2V0U2hvd1RvZG9zKHByZXYgPT4gIXByZXYpXG4gKiB9LCB7IGNvbnRleHQ6ICdHbG9iYWwnIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleWJpbmRpbmcoXG4gIGFjdGlvbjogc3RyaW5nLFxuICBoYW5kbGVyOiAoKSA9PiB2b2lkIHwgZmFsc2UgfCBQcm9taXNlPHZvaWQ+LFxuICBvcHRpb25zOiBPcHRpb25zID0ge30sXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBjb250ZXh0ID0gJ0dsb2JhbCcsIGlzQWN0aXZlID0gdHJ1ZSB9ID0gb3B0aW9uc1xuICBjb25zdCBrZXliaW5kaW5nQ29udGV4dCA9IHVzZU9wdGlvbmFsS2V5YmluZGluZ0NvbnRleHQoKVxuXG4gIC8vIFJlZ2lzdGVyIGhhbmRsZXIgd2l0aCB0aGUgY29udGV4dCBmb3IgQ2hvcmRJbnRlcmNlcHRvciB0byBpbnZva2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWtleWJpbmRpbmdDb250ZXh0IHx8ICFpc0FjdGl2ZSkgcmV0dXJuXG4gICAgcmV0dXJuIGtleWJpbmRpbmdDb250ZXh0LnJlZ2lzdGVySGFuZGxlcih7IGFjdGlvbiwgY29udGV4dCwgaGFuZGxlciB9KVxuICB9LCBbYWN0aW9uLCBjb250ZXh0LCBoYW5kbGVyLCBrZXliaW5kaW5nQ29udGV4dCwgaXNBY3RpdmVdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGlucHV0OiBzdHJpbmcsIGtleTogS2V5LCBldmVudDogSW5wdXRFdmVudCkgPT4ge1xuICAgICAgLy8gSWYgbm8ga2V5YmluZGluZyBjb250ZXh0IGF2YWlsYWJsZSwgc2tpcCByZXNvbHV0aW9uXG4gICAgICBpZiAoIWtleWJpbmRpbmdDb250ZXh0KSByZXR1cm5cblxuICAgICAgLy8gQnVpbGQgY29udGV4dCBsaXN0OiByZWdpc3RlcmVkIGFjdGl2ZSBjb250ZXh0cyArIHRoaXMgY29udGV4dCArIEdsb2JhbFxuICAgICAgLy8gTW9yZSBzcGVjaWZpYyBjb250ZXh0cyAocmVnaXN0ZXJlZCBvbmVzKSB0YWtlIHByZWNlZGVuY2Ugb3ZlciBHbG9iYWxcbiAgICAgIGNvbnN0IGNvbnRleHRzVG9DaGVjazogS2V5YmluZGluZ0NvbnRleHROYW1lW10gPSBbXG4gICAgICAgIC4uLmtleWJpbmRpbmdDb250ZXh0LmFjdGl2ZUNvbnRleHRzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICAnR2xvYmFsJyxcbiAgICAgIF1cbiAgICAgIC8vIERlZHVwbGljYXRlIHdoaWxlIHByZXNlcnZpbmcgb3JkZXIgKGZpcnN0IG9jY3VycmVuY2Ugd2lucyBmb3IgcHJpb3JpdHkpXG4gICAgICBjb25zdCB1bmlxdWVDb250ZXh0cyA9IFsuLi5uZXcgU2V0KGNvbnRleHRzVG9DaGVjayldXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGtleWJpbmRpbmdDb250ZXh0LnJlc29sdmUoaW5wdXQsIGtleSwgdW5pcXVlQ29udGV4dHMpXG5cbiAgICAgIHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICAgIC8vIENob3JkIGNvbXBsZXRlZCAoaWYgYW55KSAtIGNsZWFyIHBlbmRpbmcgc3RhdGVcbiAgICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5zZXRQZW5kaW5nQ2hvcmQobnVsbClcbiAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcigpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdjaG9yZF9zdGFydGVkJzpcbiAgICAgICAgICAvLyBVc2VyIHN0YXJ0ZWQgYSBjaG9yZCBzZXF1ZW5jZSAtIHVwZGF0ZSBwZW5kaW5nIHN0YXRlXG4gICAgICAgICAga2V5YmluZGluZ0NvbnRleHQuc2V0UGVuZGluZ0Nob3JkKHJlc3VsdC5wZW5kaW5nKVxuICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnY2hvcmRfY2FuY2VsbGVkJzpcbiAgICAgICAgICAvLyBDaG9yZCB3YXMgY2FuY2VsbGVkIChlc2NhcGUgb3IgaW52YWxpZCBrZXkpXG4gICAgICAgICAga2V5YmluZGluZ0NvbnRleHQuc2V0UGVuZGluZ0Nob3JkKG51bGwpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAndW5ib3VuZCc6XG4gICAgICAgICAgLy8gRXhwbGljaXRseSB1bmJvdW5kIC0gY2xlYXIgYW55IHBlbmRpbmcgY2hvcmRcbiAgICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5zZXRQZW5kaW5nQ2hvcmQobnVsbClcbiAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgIC8vIE5vIG1hdGNoIC0gbGV0IG90aGVyIGhhbmRsZXJzIHRyeVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSxcbiAgICBbYWN0aW9uLCBjb250ZXh0LCBoYW5kbGVyLCBrZXliaW5kaW5nQ29udGV4dF0sXG4gIClcblxuICB1c2VJbnB1dChoYW5kbGVJbnB1dCwgeyBpc0FjdGl2ZSB9KVxufVxuXG4vKipcbiAqIEhhbmRsZSBtdWx0aXBsZSBrZXliaW5kaW5ncyBpbiBvbmUgaG9vayAocmVkdWNlcyB1c2VJbnB1dCBjYWxscykuXG4gKlxuICogU3VwcG9ydHMgY2hvcmQgc2VxdWVuY2VzLiBXaGVuIGEgY2hvcmQgaXMgc3RhcnRlZCwgdGhlIGhvb2sgd2lsbFxuICogbWFuYWdlIHRoZSBwZW5kaW5nIHN0YXRlIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogdXNlS2V5YmluZGluZ3Moe1xuICogICAnY2hhdDpzdWJtaXQnOiAoKSA9PiBoYW5kbGVTdWJtaXQoKSxcbiAqICAgJ2NoYXQ6Y2FuY2VsJzogKCkgPT4gaGFuZGxlQ2FuY2VsKCksXG4gKiB9LCB7IGNvbnRleHQ6ICdDaGF0JyB9KVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VLZXliaW5kaW5ncyhcbiAgLy8gSGFuZGxlciByZXR1cm5pbmcgYGZhbHNlYCBtZWFucyBcIm5vdCBjb25zdW1lZFwiIFx1MjAxNCB0aGUgZXZlbnQgcHJvcGFnYXRlc1xuICAvLyB0byBsYXRlciB1c2VJbnB1dC91c2VLZXliaW5kaW5ncyBoYW5kbGVycy4gVXNlZnVsIGZvciBmYWxsLXRocm91Z2g6XG4gIC8vIGUuZy4gU2Nyb2xsS2V5YmluZGluZ0hhbmRsZXIncyBzY3JvbGw6bGluZSogcmV0dXJucyBmYWxzZSB3aGVuIHRoZVxuICAvLyBTY3JvbGxCb3ggY29udGVudCBmaXRzIChzY3JvbGwgaXMgYSBuby1vcCksIGxldHRpbmcgYSBjaGlsZCBjb21wb25lbnQnc1xuICAvLyBoYW5kbGVyIHRha2UgdGhlIHdoZWVsIGV2ZW50IGZvciBsaXN0IG5hdmlnYXRpb24gaW5zdGVhZC4gUHJvbWlzZTx2b2lkPlxuICAvLyBpcyBhbGxvd2VkIGZvciBmaXJlLWFuZC1mb3JnZXQgYXN5bmMgaGFuZGxlcnMgKHRoZSBgIT09IGZhbHNlYCBjaGVja1xuICAvLyBvbmx5IHNraXBzIHByb3BhZ2F0aW9uIGZvciBhIHN5bmMgYGZhbHNlYCwgbm90IGEgcGVuZGluZyBQcm9taXNlKS5cbiAgaGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsICgpID0+IHZvaWQgfCBmYWxzZSB8IFByb21pc2U8dm9pZD4+LFxuICBvcHRpb25zOiBPcHRpb25zID0ge30sXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBjb250ZXh0ID0gJ0dsb2JhbCcsIGlzQWN0aXZlID0gdHJ1ZSB9ID0gb3B0aW9uc1xuICBjb25zdCBrZXliaW5kaW5nQ29udGV4dCA9IHVzZU9wdGlvbmFsS2V5YmluZGluZ0NvbnRleHQoKVxuXG4gIC8vIFJlZ2lzdGVyIGFsbCBoYW5kbGVycyB3aXRoIHRoZSBjb250ZXh0IGZvciBDaG9yZEludGVyY2VwdG9yIHRvIGludm9rZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgha2V5YmluZGluZ0NvbnRleHQgfHwgIWlzQWN0aXZlKSByZXR1cm5cblxuICAgIGNvbnN0IHVucmVnaXN0ZXJGbnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW11cbiAgICBmb3IgKGNvbnN0IFthY3Rpb24sIGhhbmRsZXJdIG9mIE9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKSkge1xuICAgICAgdW5yZWdpc3RlckZucy5wdXNoKFxuICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5yZWdpc3RlckhhbmRsZXIoeyBhY3Rpb24sIGNvbnRleHQsIGhhbmRsZXIgfSksXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgdW5yZWdpc3RlciBvZiB1bnJlZ2lzdGVyRm5zKSB7XG4gICAgICAgIHVucmVnaXN0ZXIoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvbnRleHQsIGhhbmRsZXJzLCBrZXliaW5kaW5nQ29udGV4dCwgaXNBY3RpdmVdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGlucHV0OiBzdHJpbmcsIGtleTogS2V5LCBldmVudDogSW5wdXRFdmVudCkgPT4ge1xuICAgICAgLy8gSWYgbm8ga2V5YmluZGluZyBjb250ZXh0IGF2YWlsYWJsZSwgc2tpcCByZXNvbHV0aW9uXG4gICAgICBpZiAoIWtleWJpbmRpbmdDb250ZXh0KSByZXR1cm5cblxuICAgICAgLy8gQnVpbGQgY29udGV4dCBsaXN0OiByZWdpc3RlcmVkIGFjdGl2ZSBjb250ZXh0cyArIHRoaXMgY29udGV4dCArIEdsb2JhbFxuICAgICAgLy8gTW9yZSBzcGVjaWZpYyBjb250ZXh0cyAocmVnaXN0ZXJlZCBvbmVzKSB0YWtlIHByZWNlZGVuY2Ugb3ZlciBHbG9iYWxcbiAgICAgIGNvbnN0IGNvbnRleHRzVG9DaGVjazogS2V5YmluZGluZ0NvbnRleHROYW1lW10gPSBbXG4gICAgICAgIC4uLmtleWJpbmRpbmdDb250ZXh0LmFjdGl2ZUNvbnRleHRzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICAnR2xvYmFsJyxcbiAgICAgIF1cbiAgICAgIC8vIERlZHVwbGljYXRlIHdoaWxlIHByZXNlcnZpbmcgb3JkZXIgKGZpcnN0IG9jY3VycmVuY2Ugd2lucyBmb3IgcHJpb3JpdHkpXG4gICAgICBjb25zdCB1bmlxdWVDb250ZXh0cyA9IFsuLi5uZXcgU2V0KGNvbnRleHRzVG9DaGVjayldXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGtleWJpbmRpbmdDb250ZXh0LnJlc29sdmUoaW5wdXQsIGtleSwgdW5pcXVlQ29udGV4dHMpXG5cbiAgICAgIHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICAgIC8vIENob3JkIGNvbXBsZXRlZCAoaWYgYW55KSAtIGNsZWFyIHBlbmRpbmcgc3RhdGVcbiAgICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5zZXRQZW5kaW5nQ2hvcmQobnVsbClcbiAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiBpbiBoYW5kbGVycykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW3Jlc3VsdC5hY3Rpb25dXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyKCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Nob3JkX3N0YXJ0ZWQnOlxuICAgICAgICAgIC8vIFVzZXIgc3RhcnRlZCBhIGNob3JkIHNlcXVlbmNlIC0gdXBkYXRlIHBlbmRpbmcgc3RhdGVcbiAgICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5zZXRQZW5kaW5nQ2hvcmQocmVzdWx0LnBlbmRpbmcpXG4gICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdjaG9yZF9jYW5jZWxsZWQnOlxuICAgICAgICAgIC8vIENob3JkIHdhcyBjYW5jZWxsZWQgKGVzY2FwZSBvciBpbnZhbGlkIGtleSlcbiAgICAgICAgICBrZXliaW5kaW5nQ29udGV4dC5zZXRQZW5kaW5nQ2hvcmQobnVsbClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd1bmJvdW5kJzpcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHVuYm91bmQgLSBjbGVhciBhbnkgcGVuZGluZyBjaG9yZFxuICAgICAgICAgIGtleWJpbmRpbmdDb250ZXh0LnNldFBlbmRpbmdDaG9yZChudWxsKVxuICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgLy8gTm8gbWF0Y2ggLSBsZXQgb3RoZXIgaGFuZGxlcnMgdHJ5XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb250ZXh0LCBoYW5kbGVycywga2V5YmluZGluZ0NvbnRleHRdLFxuICApXG5cbiAgdXNlSW5wdXQoaGFuZGxlSW5wdXQsIHsgaXNBY3RpdmUgfSlcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB0eXBlIFJlZk9iamVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBTY3JvbGxCb3hIYW5kbGUgfSBmcm9tICcuLi9pbmsvY29tcG9uZW50cy9TY3JvbGxCb3guanMnXG5cbi8qKlxuICogU2V0IGJ5IEZ1bGxzY3JlZW5MYXlvdXQgd2hlbiByZW5kZXJpbmcgY29udGVudCBpbiBpdHMgYG1vZGFsYCBzbG90IOKAlFxuICogdGhlIGFic29sdXRlLXBvc2l0aW9uZWQgYm90dG9tLWFuY2hvcmVkIHBhbmUgZm9yIHNsYXNoLWNvbW1hbmQgZGlhbG9ncy5cbiAqIENvbnN1bWVycyB1c2UgdGhpcyB0bzpcbiAqXG4gKiAtIFN1cHByZXNzIHRvcC1sZXZlbCBmcmFtaW5nIOKAlCBgUGFuZWAgc2tpcHMgaXRzIGZ1bGwtdGVybWluYWwtd2lkdGhcbiAqICAgYERpdmlkZXJgIChGdWxsc2NyZWVuTGF5b3V0IGFscmVhZHkgZHJhd3MgdGhlIOKWlCBkaXZpZGVyKS5cbiAqIC0gU2l6ZSBTZWxlY3QgcGFnaW5hdGlvbiB0byB0aGUgYXZhaWxhYmxlIHJvd3Mg4oCUIHRoZSBtb2RhbCdzIGlubmVyXG4gKiAgIGFyZWEgaXMgc21hbGxlciB0aGFuIHRoZSB0ZXJtaW5hbCAocm93cyBtaW51cyB0cmFuc2NyaXB0IHBlZWsgbWludXNcbiAqICAgZGl2aWRlciksIHNvIGNvbXBvbmVudHMgdGhhdCBjYXAgdGhlaXIgdmlzaWJsZSBvcHRpb24gY291bnQgZnJvbVxuICogICBgdXNlVGVybWluYWxTaXplKCkucm93c2Agd291bGQgb3ZlcmZsb3cgd2l0aG91dCB0aGlzIGNvbnRleHQuXG4gKiAtIFJlc2V0IHNjcm9sbCBvbiB0YWIgc3dpdGNoIOKAlCBUYWJzIGtleXMgaXRzIFNjcm9sbEJveCBieVxuICogICBgc2VsZWN0ZWRUYWJJbmRleGAsIHJlbW91bnRpbmcgb24gdGFiIHN3aXRjaCBzbyBzY3JvbGxUb3AgcmVzZXRzIHRvIDBcbiAqICAgd2l0aG91dCBzY3JvbGxUbygpIHRpbWluZyBnYW1lcy5cbiAqXG4gKiBudWxsID0gbm90IGluc2lkZSB0aGUgbW9kYWwgc2xvdC5cbiAqL1xudHlwZSBNb2RhbEN0eCA9IHtcbiAgcm93czogbnVtYmVyXG4gIGNvbHVtbnM6IG51bWJlclxuICBzY3JvbGxSZWY6IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPiB8IG51bGxcbn1cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1vZGFsQ3R4IHwgbnVsbD4obnVsbClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzSW5zaWRlTW9kYWwoKTogYm9vbGVhbiB7XG4gIHJldHVybiB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCkgIT09IG51bGxcbn1cblxuLyoqXG4gKiBBdmFpbGFibGUgY29udGVudCByb3dzL2NvbHVtbnMgd2hlbiBpbnNpZGUgYSBNb2RhbCwgZWxzZSBmYWxscyBiYWNrIHRvXG4gKiB0aGUgcHJvdmlkZWQgdGVybWluYWwgc2l6ZS4gVXNlIGluc3RlYWQgb2YgYHVzZVRlcm1pbmFsU2l6ZSgpYCB3aGVuIGFcbiAqIGNvbXBvbmVudCBjYXBzIGl0cyB2aXNpYmxlIGNvbnRlbnQgaGVpZ2h0IOKAlCB0aGUgbW9kYWwncyBpbm5lciBhcmVhIGlzXG4gKiBzbWFsbGVyIHRoYW4gdGhlIHRlcm1pbmFsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9kYWxPclRlcm1pbmFsU2l6ZShmYWxsYmFjazoge1xuICByb3dzOiBudW1iZXJcbiAgY29sdW1uczogbnVtYmVyXG59KTogeyByb3dzOiBudW1iZXI7IGNvbHVtbnM6IG51bWJlciB9IHtcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXG4gIHJldHVybiBjdHggPyB7IHJvd3M6IGN0eC5yb3dzLCBjb2x1bW5zOiBjdHguY29sdW1ucyB9IDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsU2Nyb2xsUmVmKCk6IFJlZk9iamVjdDxTY3JvbGxCb3hIYW5kbGUgfCBudWxsPiB8IG51bGwge1xuICByZXR1cm4gdXNlQ29udGV4dChNb2RhbENvbnRleHQpPy5zY3JvbGxSZWYgPz8gbnVsbFxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgQW5zaSwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICcuLi8uLi91dGlscy90aGVtZS5qcydcblxudHlwZSBEaXZpZGVyUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgZGl2aWRlciBpbiBjaGFyYWN0ZXJzLlxuICAgKiBEZWZhdWx0cyB0byB0ZXJtaW5hbCB3aWR0aC5cbiAgICovXG4gIHdpZHRoPzogbnVtYmVyXG5cbiAgLyoqXG4gICAqIFRoZW1lIGNvbG9yIGZvciB0aGUgZGl2aWRlci5cbiAgICogSWYgbm90IHByb3ZpZGVkLCBkaW1Db2xvciBpcyB1c2VkLlxuICAgKi9cbiAgY29sb3I/OiBrZXlvZiBUaGVtZVxuXG4gIC8qKlxuICAgKiBDaGFyYWN0ZXIgdG8gdXNlIGZvciB0aGUgZGl2aWRlciBsaW5lLlxuICAgKiBAZGVmYXVsdCAn4pSAJ1xuICAgKi9cbiAgY2hhcj86IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBQYWRkaW5nIHRvIHN1YnRyYWN0IGZyb20gdGhlIHdpZHRoIChlLmcuLCBmb3IgaW5kZW50YXRpb24pLlxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBwYWRkaW5nPzogbnVtYmVyXG5cbiAgLyoqXG4gICAqIFRpdGxlIHNob3duIGluIHRoZSBtaWRkbGUgb2YgdGhlIGRpdmlkZXIuXG4gICAqIE1heSBjb250YWluIEFOU0kgY29kZXMgKGUuZy4sIGNoYWxrLXN0eWxlZCB0ZXh0KS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIFRpdGxlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgKiA8RGl2aWRlciB0aXRsZT1cIlRpdGxlXCIgLz5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogQSBob3Jpem9udGFsIGRpdmlkZXIgbGluZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRnVsbC13aWR0aCBkaW1tZWQgZGl2aWRlclxuICogPERpdmlkZXIgLz5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29sb3JlZCBkaXZpZGVyXG4gKiA8RGl2aWRlciBjb2xvcj1cInN1Z2dlc3Rpb25cIiAvPlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGaXhlZCB3aWR0aFxuICogPERpdmlkZXIgd2lkdGg9ezQwfSAvPlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGdWxsIHdpZHRoIG1pbnVzIHBhZGRpbmcgKGZvciBpbmRlbnRlZCBjb250ZW50KVxuICogPERpdmlkZXIgcGFkZGluZz17NH0gLz5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2l0aCBjZW50ZXJlZCB0aXRsZVxuICogPERpdmlkZXIgdGl0bGU9XCIzIG5ldyBtZXNzYWdlc1wiIC8+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEaXZpZGVyKHtcbiAgd2lkdGgsXG4gIGNvbG9yLFxuICBjaGFyID0gJ+KUgCcsXG4gIHBhZGRpbmcgPSAwLFxuICB0aXRsZSxcbn06IERpdmlkZXJQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgY29sdW1uczogdGVybWluYWxXaWR0aCB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgZWZmZWN0aXZlV2lkdGggPSBNYXRoLm1heCgwLCAod2lkdGggPz8gdGVybWluYWxXaWR0aCkgLSBwYWRkaW5nKVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlV2lkdGggPSBzdHJpbmdXaWR0aCh0aXRsZSkgKyAyIC8vICsyIGZvciBzcGFjZXMgYXJvdW5kIHRpdGxlXG4gICAgY29uc3Qgc2lkZVdpZHRoID0gTWF0aC5tYXgoMCwgZWZmZWN0aXZlV2lkdGggLSB0aXRsZVdpZHRoKVxuICAgIGNvbnN0IGxlZnRXaWR0aCA9IE1hdGguZmxvb3Ioc2lkZVdpZHRoIC8gMilcbiAgICBjb25zdCByaWdodFdpZHRoID0gc2lkZVdpZHRoIC0gbGVmdFdpZHRoXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0IGNvbG9yPXtjb2xvcn0gZGltQ29sb3I9eyFjb2xvcn0+XG4gICAgICAgIHtjaGFyLnJlcGVhdChsZWZ0V2lkdGgpfXsnICd9XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIDxBbnNpPnt0aXRsZX08L0Fuc2k+XG4gICAgICAgIDwvVGV4dD57JyAnfVxuICAgICAgICB7Y2hhci5yZXBlYXQocmlnaHRXaWR0aCl9XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dCBjb2xvcj17Y29sb3J9IGRpbUNvbG9yPXshY29sb3J9PlxuICAgICAge2NoYXIucmVwZWF0KGVmZmVjdGl2ZVdpZHRoKX1cbiAgICA8L1RleHQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VJc0luc2lkZU1vZGFsIH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb2RhbENvbnRleHQuanMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUuanMnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnLi9EaXZpZGVyLmpzJ1xuXG50eXBlIFBhbmVQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogVGhlbWUgY29sb3IgZm9yIHRoZSB0b3AgYm9yZGVyIGxpbmUuXG4gICAqL1xuICBjb2xvcj86IGtleW9mIFRoZW1lXG59XG5cbi8qKlxuICogQSBwYW5lIOKAlCBhIHJlZ2lvbiBvZiB0aGUgdGVybWluYWwgdGhhdCBhcHBlYXJzIGJlbG93IHRoZSBSRVBMIHByb21wdCxcbiAqIGJvdW5kZWQgYnkgYSBjb2xvcmVkIHRvcCBsaW5lIHdpdGggYSBvbmUtcm93IGdhcCBhYm92ZSBhbmQgaG9yaXpvbnRhbFxuICogcGFkZGluZy4gVXNlZCBieSBhbGwgc2xhc2gtY29tbWFuZCBzY3JlZW5zOiAvY29uZmlnLCAvaGVscCwgL3BsdWdpbnMsXG4gKiAvc2FuZGJveCwgL3N0YXRzLCAvcGVybWlzc2lvbnMuXG4gKlxuICogRm9yIGNvbmZpcm0vY2FuY2VsIGRpYWxvZ3MgKEVzYyB0byBkaXNtaXNzLCBFbnRlciB0byBjb25maXJtKSwgdXNlXG4gKiBgPERpYWxvZz5gIGluc3RlYWQg4oCUIGl0IHJlZ2lzdGVycyBpdHMgb3duIGtleWJpbmRpbmdzLiBGb3IgYSBmdWxsXG4gKiByb3VuZGVkLWJvcmRlciBjYXJkLCB1c2UgYDxQYW5lbD5gLlxuICpcbiAqIFN1Ym1lbnVzIHJlbmRlcmVkIGluc2lkZSBhIFBhbmUgc2hvdWxkIHVzZSBgaGlkZUJvcmRlcmAgb24gdGhlaXIgRGlhbG9nXG4gKiBzbyB0aGUgUGFuZSdzIGJvcmRlciByZW1haW5zIHRoZSBzaW5nbGUgZnJhbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxQYW5lIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICogICA8VGFicyB0aXRsZT1cIlNhbmRib3g6XCI+Li4uPC9UYWJzPlxuICogPC9QYW5lPlxuICovXG5leHBvcnQgZnVuY3Rpb24gUGFuZSh7IGNoaWxkcmVuLCBjb2xvciB9OiBQYW5lUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBXaGVuIHJlbmRlcmVkIGluc2lkZSBGdWxsc2NyZWVuTGF5b3V0J3MgbW9kYWwgc2xvdCwgaXRzIOKWlCBkaXZpZGVyIElTXG4gIC8vIHRoZSBmcmFtZS4gU2tpcCBvdXIgb3duIERpdmlkZXIgKHdvdWxkIGRvdWJsZS1mcmFtZSkgYW5kIHRoZSBleHRyYSB0b3BcbiAgLy8gcGFkZGluZy4gVGhpcyBsZXRzIHNsYXNoLWNvbW1hbmQgc2NyZWVucyB0aGF0IHdyYXAgaW4gUGFuZSAoZS5nLlxuICAvLyAvbW9kZWwg4oaSIE1vZGVsUGlja2VyKSByb3V0ZSB0aHJvdWdoIHRoZSBtb2RhbCBzbG90IHVuY2hhbmdlZC5cbiAgaWYgKHVzZUlzSW5zaWRlTW9kYWwoKSkge1xuICAgIC8vIGZsZXhTaHJpbms9MDogdGhlIG1vZGFsIHNsb3QncyBhYnNvbHV0ZSBCb3ggaGFzIG5vIGV4cGxpY2l0IGhlaWdodFxuICAgIC8vIChncm93cyB0byBmaXQsIG1heEhlaWdodCBjYXApLiBXaXRoIGZsZXhHcm93PTEsIHJlLXJlbmRlcnMgY2F1c2VcbiAgICAvLyB5b2dhIHRvIHJlc29sdmUgdGhpcyBCb3gncyBoZWlnaHQgdG8gMCBhZ2FpbnN0IHRoZSB1bmRldGVybWluZWRcbiAgICAvLyBwYXJlbnQg4oCUIC9wZXJtaXNzaW9ucyBib2R5IGJsYW5rcyBvbiBEb3duIGFycm93LiBTZWUgIzIzNTkyLlxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nWD17MX0gZmxleFNocmluaz17MH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdUb3A9ezF9PlxuICAgICAgPERpdmlkZXIgY29sb3I9e2NvbG9yfSAvPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1g9ezJ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTyxTQUFTLGtCQUFnQztBQUM5QyxRQUFNLE9BQU8sV0FBVyxtQkFBbUI7QUFFM0MsTUFBSSxDQUFDLE1BQU07QUFDVCxVQUFNLElBQUksTUFBTSwwREFBMEQ7QUFBQSxFQUM1RTtBQUVBLFNBQU87QUFDVDtBQWRBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FDMkJPLFNBQVMsV0FBVyxPQUFlLEtBQXlCO0FBQ2pFLE1BQUksSUFBSSxPQUFRLFFBQU87QUFDdkIsTUFBSSxJQUFJLE9BQVEsUUFBTztBQUN2QixNQUFJLElBQUksSUFBSyxRQUFPO0FBQ3BCLE1BQUksSUFBSSxVQUFXLFFBQU87QUFDMUIs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ZXMiOiBbIktleWJpbmRpbmdQcm92aWRlciIsICJ0MCIsICIkIiwgIl9jIiwgImJpbmRpbmdzIiwgInBlbmRpbmdDaG9yZFJlZiIsICJwZW5kaW5nQ2hvcmQiLCAic2V0UGVuZGluZ0Nob3JkIiwgImFjdGl2ZUNvbnRleHRzIiwgInJlZ2lzdGVyQWN0aXZlQ29udGV4dCIsICJ1bnJlZ2lzdGVyQWN0aXZlQ29udGV4dCIsICJoYW5kbGVyUmVnaXN0cnlSZWYiLCAiY2hpbGRyZW4iLCAidDEiLCAiYWN0aW9uIiwgImNvbnRleHQiLCAiZ2V0QmluZGluZ0Rpc3BsYXlUZXh0IiwgImdldERpc3BsYXkiLCAidDIiLCAicmVnaXN0cmF0aW9uIiwgInJlZ2lzdHJ5IiwgImN1cnJlbnQiLCAiX3RlbXAiLCAiaGFzIiwgInNldCIsICJTZXQiLCAiZ2V0IiwgImFkZCIsICJoYW5kbGVycyIsICJkZWxldGUiLCAic2l6ZSIsICJyZWdpc3RlckhhbmRsZXIiLCAidDMiLCAiYWN0aW9uXzAiLCAicmVnaXN0cnlfMCIsICJoYW5kbGVyc18wIiwgInJlZ2lzdHJhdGlvbl8wIiwgImhhbmRsZXIiLCAiaW52b2tlQWN0aW9uIiwgInQ0IiwgImlucHV0IiwgImtleSIsICJjb250ZXh0cyIsICJyZXNvbHZlS2V5V2l0aENob3JkU3RhdGUiLCAidDUiLCAicmVzb2x2ZSIsICJnZXREaXNwbGF5VGV4dCIsICJ2YWx1ZSIsICJ0NiIsICJ1c2VPcHRpb25hbEtleWJpbmRpbmdDb250ZXh0IiwgInVzZUNvbnRleHQiLCAiS2V5YmluZGluZ0NvbnRleHQiLCAidXNlUmVnaXN0ZXJLZXliaW5kaW5nQ29udGV4dCIsICJpc0FjdGl2ZSIsICJ1bmRlZmluZWQiLCAia2V5YmluZGluZ0NvbnRleHQiLCAidXNlTGF5b3V0RWZmZWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlSXNJbnNpZGVNb2RhbCIsICJ1c2VDb250ZXh0IiwgIk1vZGFsQ29udGV4dCIsICJ1c2VNb2RhbE9yVGVybWluYWxTaXplIiwgImZhbGxiYWNrIiwgIiQiLCAiX2MiLCAiY3R4IiwgInQwIiwgInJvd3MiLCAiY29sdW1ucyIsICJ1c2VNb2RhbFNjcm9sbFJlZiIsICJzY3JvbGxSZWYiLCAiY3JlYXRlQ29udGV4dCIsICJEaXZpZGVyIiwgInQwIiwgIiQiLCAiX2MiLCAid2lkdGgiLCAiY29sb3IiLCAiY2hhciIsICJ0MSIsICJwYWRkaW5nIiwgInQyIiwgInRpdGxlIiwgInVuZGVmaW5lZCIsICJjb2x1bW5zIiwgInRlcm1pbmFsV2lkdGgiLCAidXNlVGVybWluYWxTaXplIiwgImVmZmVjdGl2ZVdpZHRoIiwgIk1hdGgiLCAibWF4IiwgInRpdGxlV2lkdGgiLCAic3RyaW5nV2lkdGgiLCAic2lkZVdpZHRoIiwgImxlZnRXaWR0aCIsICJmbG9vciIsICJyaWdodFdpZHRoIiwgInQzIiwgInQ0IiwgInJlcGVhdCIsICJ0NSIsICJ0NiIsICJ0NyIsICJQYW5lIiwgInQwIiwgIiQiLCAiX2MiLCAiY2hpbGRyZW4iLCAiY29sb3IiLCAidXNlSXNJbnNpZGVNb2RhbCIsICJ0MSIsICJ0MiIsICJ0MyJdCn0K
