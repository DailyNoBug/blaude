#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Cursor,
  getLastKill,
  init_Cursor,
  pushToKillRing,
  recordYank,
  resetKillAccumulation,
  resetYankState,
  updateYankLength,
  yankPop
} from "./chunk-OPLSBIOC.mjs";
import {
  init_useTerminalSize,
  useTerminalSize
} from "./chunk-2LTMY2QU.mjs";
import {
  KeyboardEvent,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_keyboard_event,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/hooks/useSearchInput.ts
function isKillKey(e) {
  if (e.ctrl && (e.key === "k" || e.key === "u" || e.key === "w")) {
    return true;
  }
  if (e.meta && e.key === "backspace") {
    return true;
  }
  return false;
}
function isYankKey(e) {
  return (e.ctrl || e.meta) && e.key === "y";
}
function useSearchInput({
  isActive,
  onExit,
  onCancel,
  onExitUp,
  columns,
  passthroughCtrlKeys = [],
  initialQuery = "",
  backspaceExitsOnEmpty = true
}) {
  const { columns: terminalColumns } = useTerminalSize();
  const effectiveColumns = columns ?? terminalColumns;
  const [query, setQueryState] = useState(initialQuery);
  const [cursorOffset, setCursorOffset] = useState(initialQuery.length);
  const setQuery = useCallback((q) => {
    setQueryState(q);
    setCursorOffset(q.length);
  }, []);
  const handleKeyDown = (e) => {
    if (!isActive) return;
    const cursor = Cursor.fromText(query, effectiveColumns, cursorOffset);
    if (e.ctrl && passthroughCtrlKeys.includes(e.key.toLowerCase())) {
      return;
    }
    if (!isKillKey(e)) {
      resetKillAccumulation();
    }
    if (!isYankKey(e)) {
      resetYankState();
    }
    if (e.key === "return" || e.key === "down") {
      e.preventDefault();
      onExit();
      return;
    }
    if (e.key === "up") {
      e.preventDefault();
      if (onExitUp) {
        onExitUp();
      }
      return;
    }
    if (e.key === "escape") {
      e.preventDefault();
      if (onCancel) {
        onCancel();
      } else if (query.length > 0) {
        setQueryState("");
        setCursorOffset(0);
      } else {
        onExit();
      }
      return;
    }
    if (e.key === "backspace") {
      e.preventDefault();
      if (e.meta) {
        const { cursor: newCursor2, killed } = cursor.deleteWordBefore();
        pushToKillRing(killed, "prepend");
        setQueryState(newCursor2.text);
        setCursorOffset(newCursor2.offset);
        return;
      }
      if (query.length === 0) {
        if (backspaceExitsOnEmpty) (onCancel ?? onExit)();
        return;
      }
      const newCursor = cursor.backspace();
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "delete") {
      e.preventDefault();
      const newCursor = cursor.del();
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "left" && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault();
      const newCursor = cursor.prevWord();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "right" && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault();
      const newCursor = cursor.nextWord();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "left") {
      e.preventDefault();
      const newCursor = cursor.left();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "right") {
      e.preventDefault();
      const newCursor = cursor.right();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "home") {
      e.preventDefault();
      setCursorOffset(0);
      return;
    }
    if (e.key === "end") {
      e.preventDefault();
      setCursorOffset(query.length);
      return;
    }
    if (e.ctrl) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case "a":
          setCursorOffset(0);
          return;
        case "e":
          setCursorOffset(query.length);
          return;
        case "b":
          setCursorOffset(cursor.left().offset);
          return;
        case "f":
          setCursorOffset(cursor.right().offset);
          return;
        case "d": {
          if (query.length === 0) {
            ;
            (onCancel ?? onExit)();
            return;
          }
          const newCursor = cursor.del();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "h": {
          if (query.length === 0) {
            if (backspaceExitsOnEmpty) (onCancel ?? onExit)();
            return;
          }
          const newCursor = cursor.backspace();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "k": {
          const { cursor: newCursor, killed } = cursor.deleteToLineEnd();
          pushToKillRing(killed, "append");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "u": {
          const { cursor: newCursor, killed } = cursor.deleteToLineStart();
          pushToKillRing(killed, "prepend");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "w": {
          const { cursor: newCursor, killed } = cursor.deleteWordBefore();
          pushToKillRing(killed, "prepend");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "y": {
          const text = getLastKill();
          if (text.length > 0) {
            const startOffset = cursor.offset;
            const newCursor = cursor.insert(text);
            recordYank(startOffset, text.length);
            setQueryState(newCursor.text);
            setCursorOffset(newCursor.offset);
          }
          return;
        }
        case "g":
        case "c":
          if (onCancel) {
            onCancel();
            return;
          }
      }
      return;
    }
    if (e.meta) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case "b":
          setCursorOffset(cursor.prevWord().offset);
          return;
        case "f":
          setCursorOffset(cursor.nextWord().offset);
          return;
        case "d": {
          const newCursor = cursor.deleteWordAfter();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "y": {
          const popResult = yankPop();
          if (popResult) {
            const { text, start, length } = popResult;
            const before = query.slice(0, start);
            const after = query.slice(start + length);
            const newText = before + text + after;
            const newOffset = start + text.length;
            updateYankLength(text.length);
            setQueryState(newText);
            setCursorOffset(newOffset);
          }
          return;
        }
      }
      return;
    }
    if (e.key === "tab") {
      return;
    }
    if (e.key.length >= 1 && !UNHANDLED_SPECIAL_KEYS.has(e.key)) {
      e.preventDefault();
      const newCursor = cursor.insert(e.key);
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
    }
  };
  use_input_default(
    (_input, _key, event) => {
      handleKeyDown(new KeyboardEvent(event.keypress));
    },
    { isActive }
  );
  return { query, setQuery, cursorOffset, handleKeyDown };
}
var UNHANDLED_SPECIAL_KEYS;
var init_useSearchInput = __esm({
  "src/hooks/useSearchInput.ts"() {
    init_react();
    init_keyboard_event();
    init_ink();
    init_Cursor();
    init_useTerminalSize();
    UNHANDLED_SPECIAL_KEYS = /* @__PURE__ */ new Set([
      "pageup",
      "pagedown",
      "insert",
      "wheelup",
      "wheeldown",
      "mouse",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "f10",
      "f11",
      "f12"
    ]);
  }
});

// src/components/SearchBox.tsx
function SearchBox(t0) {
  const $ = c(17);
  const {
    query,
    placeholder: t1,
    isFocused,
    isTerminalFocused,
    prefix: t2,
    width,
    cursorOffset,
    borderless: t3
  } = t0;
  const placeholder = t1 === void 0 ? "Search\u2026" : t1;
  const prefix = t2 === void 0 ? "\u2315" : t2;
  const borderless = t3 === void 0 ? false : t3;
  const offset = cursorOffset ?? query.length;
  const t4 = borderless ? void 0 : "round";
  const t5 = isFocused ? "suggestion" : void 0;
  const t6 = !isFocused;
  const t7 = borderless ? 0 : 1;
  const t8 = !isFocused;
  let t9;
  if ($[0] !== isFocused || $[1] !== isTerminalFocused || $[2] !== offset || $[3] !== placeholder || $[4] !== query) {
    t9 = isFocused ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, query ? isTerminalFocused ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, query.slice(0, offset)), /* @__PURE__ */ react_default.createElement(ThemedText, { inverse: true }, offset < query.length ? query[offset] : " "), offset < query.length && /* @__PURE__ */ react_default.createElement(ThemedText, null, query.slice(offset + 1))) : /* @__PURE__ */ react_default.createElement(ThemedText, null, query) : isTerminalFocused ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, { inverse: true }, placeholder.charAt(0)), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, placeholder.slice(1))) : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, placeholder)) : query ? /* @__PURE__ */ react_default.createElement(ThemedText, null, query) : /* @__PURE__ */ react_default.createElement(ThemedText, null, placeholder);
    $[0] = isFocused;
    $[1] = isTerminalFocused;
    $[2] = offset;
    $[3] = placeholder;
    $[4] = query;
    $[5] = t9;
  } else {
    t9 = $[5];
  }
  let t10;
  if ($[6] !== prefix || $[7] !== t8 || $[8] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: t8 }, prefix, " ", t9);
    $[6] = prefix;
    $[7] = t8;
    $[8] = t9;
    $[9] = t10;
  } else {
    t10 = $[9];
  }
  let t11;
  if ($[10] !== t10 || $[11] !== t4 || $[12] !== t5 || $[13] !== t6 || $[14] !== t7 || $[15] !== width) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0, borderStyle: t4, borderColor: t5, borderDimColor: t6, paddingX: t7, width }, t10);
    $[10] = t10;
    $[11] = t4;
    $[12] = t5;
    $[13] = t6;
    $[14] = t7;
    $[15] = width;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  return t11;
}
var init_SearchBox = __esm({
  "src/components/SearchBox.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

export {
  SearchBox,
  init_SearchBox,
  useSearchInput,
  init_useSearchInput
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2hvb2tzL3VzZVNlYXJjaElucHV0LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJveC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3ByZWZlci11c2Uta2V5YmluZGluZ3MgLS0gYmFja3dhcmQtY29tcGF0IGJyaWRnZSB1bnRpbCBjb25zdW1lcnMgd2lyZSBoYW5kbGVLZXlEb3duIHRvIDxCb3ggb25LZXlEb3duPlxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQge1xuICBDdXJzb3IsXG4gIGdldExhc3RLaWxsLFxuICBwdXNoVG9LaWxsUmluZyxcbiAgcmVjb3JkWWFuayxcbiAgcmVzZXRLaWxsQWNjdW11bGF0aW9uLFxuICByZXNldFlhbmtTdGF0ZSxcbiAgdXBkYXRlWWFua0xlbmd0aCxcbiAgeWFua1BvcCxcbn0gZnJvbSAnLi4vdXRpbHMvQ3Vyc29yLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi91c2VUZXJtaW5hbFNpemUuanMnXG5cbnR5cGUgVXNlU2VhcmNoSW5wdXRPcHRpb25zID0ge1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICBvbkV4aXQ6ICgpID0+IHZvaWRcbiAgLyoqIEVzYyArIEN0cmwrQyBhYmFuZG9uIChkaXN0aW5jdCBmcm9tIG9uRXhpdCA9IEVudGVyIGNvbW1pdCkuIFdoZW5cbiAgICogIHByb3ZpZGVkOiBzaW5nbGUtRXNjIGNhbGxzIHRoaXMgZGlyZWN0bHkgKG5vIGNsZWFyLWZpcnN0LXRoZW4tZXhpdFxuICAgKiAgdHdvLXByZXNzKS4gV2hlbiBhYnNlbnQ6IGN1cnJlbnQgYmVoYXZpb3IgXHUyMDE0IEVzYyBjbGVhcnMgbm9uLWVtcHR5XG4gICAqICBxdWVyeSwgZXhpdHMgb24gZW1wdHk7IEN0cmwrQyBzaWxlbnRseSBzd2FsbG93ZWQgKG5vIHN3aXRjaCBjYXNlKS4gKi9cbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkXG4gIG9uRXhpdFVwPzogKCkgPT4gdm9pZFxuICBjb2x1bW5zPzogbnVtYmVyXG4gIHBhc3N0aHJvdWdoQ3RybEtleXM/OiBzdHJpbmdbXVxuICBpbml0aWFsUXVlcnk/OiBzdHJpbmdcbiAgLyoqIEJhY2tzcGFjZSAoYW5kIGN0cmwraCkgb24gZW1wdHkgcXVlcnkgY2FsbHMgb25DYW5jZWwgPz8gb25FeGl0IFx1MjAxNCB0aGVcbiAgICogIGxlc3MvdmltIFwiZGVsZXRlIHBhc3QgdGhlIC9cIiBjb252ZW50aW9uLiBEaWFsb2dzIHRoYXQgd2FudCBFc2Mtb25seVxuICAgKiAgY2FuY2VsIHNldCB0aGlzIGZhbHNlIHNvIGEgaGVsZCBiYWNrc3BhY2UgZG9lc24ndCBlamVjdCB0aGUgdXNlci4gKi9cbiAgYmFja3NwYWNlRXhpdHNPbkVtcHR5PzogYm9vbGVhblxufVxuXG50eXBlIFVzZVNlYXJjaElucHV0UmV0dXJuID0ge1xuICBxdWVyeTogc3RyaW5nXG4gIHNldFF1ZXJ5OiAocTogc3RyaW5nKSA9PiB2b2lkXG4gIGN1cnNvck9mZnNldDogbnVtYmVyXG4gIGhhbmRsZUtleURvd246IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIGlzS2lsbEtleShlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XG4gIGlmIChlLmN0cmwgJiYgKGUua2V5ID09PSAnaycgfHwgZS5rZXkgPT09ICd1JyB8fCBlLmtleSA9PT0gJ3cnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGUubWV0YSAmJiBlLmtleSA9PT0gJ2JhY2tzcGFjZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBpc1lhbmtLZXkoZTogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKGUuY3RybCB8fCBlLm1ldGEpICYmIGUua2V5ID09PSAneSdcbn1cblxuLy8gU3BlY2lhbCBrZXkgbmFtZXMgdGhhdCBmYWxsIHRocm91Z2ggdGhlIGV4cGxpY2l0IGhhbmRsZXJzIGFib3ZlIHRoZVxuLy8gdGV4dC1pbnB1dCBicmFuY2ggKHJldHVybi9lc2NhcGUvYXJyb3dzL2hvbWUvZW5kL3RhYi9iYWNrc3BhY2UvZGVsZXRlXG4vLyBhbGwgZWFybHktcmV0dXJuKS4gUmVqZWN0IHRoZXNlIHNvIGUuZy4gUGFnZVVwIGRvZXNuJ3QgbGVhayAncGFnZXVwJ1xuLy8gYXMgbGl0ZXJhbCB0ZXh0LiBUaGUgbGVuZ3RoPj0xIGNoZWNrIGJlbG93IGlzIGludGVudGlvbmFsbHkgbG9vc2UgXHUyMDE0XG4vLyBiYXRjaGVkIGlucHV0IGxpa2Ugc3RkaW4ud3JpdGUoJ2FiYycpIGFycml2ZXMgYXMgb25lIG11bHRpLWNoYXIgZS5rZXksXG4vLyBtYXRjaGluZyB0aGUgb2xkIHVzZUlucHV0KGlucHV0KSBiZWhhdmlvciB3aGVyZSBjdXJzb3IuaW5zZXJ0KGlucHV0KVxuLy8gaW5zZXJ0ZWQgdGhlIGZ1bGwgY2h1bmsuXG5jb25zdCBVTkhBTkRMRURfU1BFQ0lBTF9LRVlTID0gbmV3IFNldChbXG4gICdwYWdldXAnLFxuICAncGFnZWRvd24nLFxuICAnaW5zZXJ0JyxcbiAgJ3doZWVsdXAnLFxuICAnd2hlZWxkb3duJyxcbiAgJ21vdXNlJyxcbiAgJ2YxJyxcbiAgJ2YyJyxcbiAgJ2YzJyxcbiAgJ2Y0JyxcbiAgJ2Y1JyxcbiAgJ2Y2JyxcbiAgJ2Y3JyxcbiAgJ2Y4JyxcbiAgJ2Y5JyxcbiAgJ2YxMCcsXG4gICdmMTEnLFxuICAnZjEyJyxcbl0pXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZWFyY2hJbnB1dCh7XG4gIGlzQWN0aXZlLFxuICBvbkV4aXQsXG4gIG9uQ2FuY2VsLFxuICBvbkV4aXRVcCxcbiAgY29sdW1ucyxcbiAgcGFzc3Rocm91Z2hDdHJsS2V5cyA9IFtdLFxuICBpbml0aWFsUXVlcnkgPSAnJyxcbiAgYmFja3NwYWNlRXhpdHNPbkVtcHR5ID0gdHJ1ZSxcbn06IFVzZVNlYXJjaElucHV0T3B0aW9ucyk6IFVzZVNlYXJjaElucHV0UmV0dXJuIHtcbiAgY29uc3QgeyBjb2x1bW5zOiB0ZXJtaW5hbENvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIGNvbnN0IGVmZmVjdGl2ZUNvbHVtbnMgPSBjb2x1bW5zID8/IHRlcm1pbmFsQ29sdW1uc1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFF1ZXJ5KVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoaW5pdGlhbFF1ZXJ5Lmxlbmd0aClcblxuICBjb25zdCBzZXRRdWVyeSA9IHVzZUNhbGxiYWNrKChxOiBzdHJpbmcpID0+IHtcbiAgICBzZXRRdWVyeVN0YXRlKHEpXG4gICAgc2V0Q3Vyc29yT2Zmc2V0KHEubGVuZ3RoKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWlzQWN0aXZlKSByZXR1cm5cblxuICAgIGNvbnN0IGN1cnNvciA9IEN1cnNvci5mcm9tVGV4dChxdWVyeSwgZWZmZWN0aXZlQ29sdW1ucywgY3Vyc29yT2Zmc2V0KVxuXG4gICAgLy8gQ2hlY2sgcGFzc3Rocm91Z2ggY3RybCBrZXlzXG4gICAgaWYgKGUuY3RybCAmJiBwYXNzdGhyb3VnaEN0cmxLZXlzLmluY2x1ZGVzKGUua2V5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBSZXNldCBraWxsIGFjY3VtdWxhdGlvbiBmb3Igbm9uLWtpbGwga2V5c1xuICAgIGlmICghaXNLaWxsS2V5KGUpKSB7XG4gICAgICByZXNldEtpbGxBY2N1bXVsYXRpb24oKVxuICAgIH1cblxuICAgIC8vIFJlc2V0IHlhbmsgc3RhdGUgZm9yIG5vbi15YW5rIGtleXNcbiAgICBpZiAoIWlzWWFua0tleShlKSkge1xuICAgICAgcmVzZXRZYW5rU3RhdGUoKVxuICAgIH1cblxuICAgIC8vIEV4aXQgY29uZGl0aW9uc1xuICAgIGlmIChlLmtleSA9PT0gJ3JldHVybicgfHwgZS5rZXkgPT09ICdkb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbkV4aXQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ3VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAob25FeGl0VXApIHtcbiAgICAgICAgb25FeGl0VXAoKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ2VzY2FwZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH0gZWxzZSBpZiAocXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXRRdWVyeVN0YXRlKCcnKVxuICAgICAgICBzZXRDdXJzb3JPZmZzZXQoMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRXhpdCgpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBCYWNrc3BhY2UvRGVsZXRlXG4gICAgaWYgKGUua2V5ID09PSAnYmFja3NwYWNlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZS5tZXRhKSB7XG4gICAgICAgIC8vIE1ldGErQmFja3NwYWNlOiBraWxsIHdvcmQgYmVmb3JlXG4gICAgICAgIGNvbnN0IHsgY3Vyc29yOiBuZXdDdXJzb3IsIGtpbGxlZCB9ID0gY3Vyc29yLmRlbGV0ZVdvcmRCZWZvcmUoKVxuICAgICAgICBwdXNoVG9LaWxsUmluZyhraWxsZWQsICdwcmVwZW5kJylcbiAgICAgICAgc2V0UXVlcnlTdGF0ZShuZXdDdXJzb3IudGV4dClcbiAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBCYWNrc3BhY2UgcGFzdCB0aGUgLyBcdTIwMTQgY2FuY2VsIChjbGVhciArIHNuYXAgYmFjayksIG5vdCBjb21taXQuXG4gICAgICAgIC8vIGxlc3M6IHNhbWUuIHZpbTogZGVsZXRlcyB0aGUgLyBhbmQgZXhpdHMgY29tbWFuZCBtb2RlLlxuICAgICAgICBpZiAoYmFja3NwYWNlRXhpdHNPbkVtcHR5KSAob25DYW5jZWwgPz8gb25FeGl0KSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgbmV3Q3Vyc29yID0gY3Vyc29yLmJhY2tzcGFjZSgpXG4gICAgICBzZXRRdWVyeVN0YXRlKG5ld0N1cnNvci50ZXh0KVxuICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdkZWxldGUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5kZWwoKVxuICAgICAgc2V0UXVlcnlTdGF0ZShuZXdDdXJzb3IudGV4dClcbiAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQXJyb3cga2V5cyB3aXRoIG1vZGlmaWVycyAod29yZCBqdW1wKVxuICAgIGlmIChlLmtleSA9PT0gJ2xlZnQnICYmIChlLmN0cmwgfHwgZS5tZXRhIHx8IGUuZm4pKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5wcmV2V29yZCgpXG4gICAgICBzZXRDdXJzb3JPZmZzZXQobmV3Q3Vyc29yLm9mZnNldClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdyaWdodCcgJiYgKGUuY3RybCB8fCBlLm1ldGEgfHwgZS5mbikpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgbmV3Q3Vyc29yID0gY3Vyc29yLm5leHRXb3JkKClcbiAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gUGxhaW4gYXJyb3cga2V5c1xuICAgIGlmIChlLmtleSA9PT0gJ2xlZnQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5sZWZ0KClcbiAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdDdXJzb3IgPSBjdXJzb3IucmlnaHQoKVxuICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBIb21lL0VuZFxuICAgIGlmIChlLmtleSA9PT0gJ2hvbWUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHNldEN1cnNvck9mZnNldCgwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ2VuZCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgc2V0Q3Vyc29yT2Zmc2V0KHF1ZXJ5Lmxlbmd0aClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEN0cmwga2V5IGJpbmRpbmdzXG4gICAgaWYgKGUuY3RybCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzd2l0Y2ggKGUua2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KDApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgIHNldEN1cnNvck9mZnNldChxdWVyeS5sZW5ndGgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgIHNldEN1cnNvck9mZnNldChjdXJzb3IubGVmdCgpLm9mZnNldClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KGN1cnNvci5yaWdodCgpLm9mZnNldClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnZCc6IHtcbiAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICA7KG9uQ2FuY2VsID8/IG9uRXhpdCkoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5kZWwoKVxuICAgICAgICAgIHNldFF1ZXJ5U3RhdGUobmV3Q3Vyc29yLnRleHQpXG4gICAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaCc6IHtcbiAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoYmFja3NwYWNlRXhpdHNPbkVtcHR5KSAob25DYW5jZWwgPz8gb25FeGl0KSgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3Q3Vyc29yID0gY3Vyc29yLmJhY2tzcGFjZSgpXG4gICAgICAgICAgc2V0UXVlcnlTdGF0ZShuZXdDdXJzb3IudGV4dClcbiAgICAgICAgICBzZXRDdXJzb3JPZmZzZXQobmV3Q3Vyc29yLm9mZnNldClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdrJzoge1xuICAgICAgICAgIGNvbnN0IHsgY3Vyc29yOiBuZXdDdXJzb3IsIGtpbGxlZCB9ID0gY3Vyc29yLmRlbGV0ZVRvTGluZUVuZCgpXG4gICAgICAgICAgcHVzaFRvS2lsbFJpbmcoa2lsbGVkLCAnYXBwZW5kJylcbiAgICAgICAgICBzZXRRdWVyeVN0YXRlKG5ld0N1cnNvci50ZXh0KVxuICAgICAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3UnOiB7XG4gICAgICAgICAgY29uc3QgeyBjdXJzb3I6IG5ld0N1cnNvciwga2lsbGVkIH0gPSBjdXJzb3IuZGVsZXRlVG9MaW5lU3RhcnQoKVxuICAgICAgICAgIHB1c2hUb0tpbGxSaW5nKGtpbGxlZCwgJ3ByZXBlbmQnKVxuICAgICAgICAgIHNldFF1ZXJ5U3RhdGUobmV3Q3Vyc29yLnRleHQpXG4gICAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndyc6IHtcbiAgICAgICAgICBjb25zdCB7IGN1cnNvcjogbmV3Q3Vyc29yLCBraWxsZWQgfSA9IGN1cnNvci5kZWxldGVXb3JkQmVmb3JlKClcbiAgICAgICAgICBwdXNoVG9LaWxsUmluZyhraWxsZWQsICdwcmVwZW5kJylcbiAgICAgICAgICBzZXRRdWVyeVN0YXRlKG5ld0N1cnNvci50ZXh0KVxuICAgICAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3knOiB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGdldExhc3RLaWxsKClcbiAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydE9mZnNldCA9IGN1cnNvci5vZmZzZXRcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5pbnNlcnQodGV4dClcbiAgICAgICAgICAgIHJlY29yZFlhbmsoc3RhcnRPZmZzZXQsIHRleHQubGVuZ3RoKVxuICAgICAgICAgICAgc2V0UXVlcnlTdGF0ZShuZXdDdXJzb3IudGV4dClcbiAgICAgICAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdnJzpcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgLy8gQ2FuY2VsIChhYmFuZG9uIHNlYXJjaCkuIGN0cmwrZyBpcyBsZXNzJ3MgY2FuY2VsIGtleS4gT25seVxuICAgICAgICAgIC8vIGZpcmVzIGlmIG9uQ2FuY2VsIHByb3ZpZGVkIFx1MjAxNCBvdGhlcndpc2UgZmFsbHMgdGhyb3VnaCBhbmRcbiAgICAgICAgICAvLyByZXR1cm5zIHNpbGVudGx5ICgxMSBjYWxsIHNpdGVzLCBtb3N0IGV4cGVjdCBjdHJsK2MgdG8gbm8tb3ApLlxuICAgICAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICAgICAgb25DYW5jZWwoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWV0YSBrZXkgYmluZGluZ3NcbiAgICBpZiAoZS5tZXRhKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHN3aXRjaCAoZS5rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICBzZXRDdXJzb3JPZmZzZXQoY3Vyc29yLnByZXZXb3JkKCkub2Zmc2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICBzZXRDdXJzb3JPZmZzZXQoY3Vyc29yLm5leHRXb3JkKCkub2Zmc2V0KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjYXNlICdkJzoge1xuICAgICAgICAgIGNvbnN0IG5ld0N1cnNvciA9IGN1cnNvci5kZWxldGVXb3JkQWZ0ZXIoKVxuICAgICAgICAgIHNldFF1ZXJ5U3RhdGUobmV3Q3Vyc29yLnRleHQpXG4gICAgICAgICAgc2V0Q3Vyc29yT2Zmc2V0KG5ld0N1cnNvci5vZmZzZXQpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAneSc6IHtcbiAgICAgICAgICBjb25zdCBwb3BSZXN1bHQgPSB5YW5rUG9wKClcbiAgICAgICAgICBpZiAocG9wUmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zdCB7IHRleHQsIHN0YXJ0LCBsZW5ndGggfSA9IHBvcFJlc3VsdFxuICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gcXVlcnkuc2xpY2UoMCwgc3RhcnQpXG4gICAgICAgICAgICBjb25zdCBhZnRlciA9IHF1ZXJ5LnNsaWNlKHN0YXJ0ICsgbGVuZ3RoKVxuICAgICAgICAgICAgY29uc3QgbmV3VGV4dCA9IGJlZm9yZSArIHRleHQgKyBhZnRlclxuICAgICAgICAgICAgY29uc3QgbmV3T2Zmc2V0ID0gc3RhcnQgKyB0ZXh0Lmxlbmd0aFxuICAgICAgICAgICAgdXBkYXRlWWFua0xlbmd0aCh0ZXh0Lmxlbmd0aClcbiAgICAgICAgICAgIHNldFF1ZXJ5U3RhdGUobmV3VGV4dClcbiAgICAgICAgICAgIHNldEN1cnNvck9mZnNldChuZXdPZmZzZXQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUYWI6IGlnbm9yZVxuICAgIGlmIChlLmtleSA9PT0gJ3RhYicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFJlZ3VsYXIgY2hhcmFjdGVyIGlucHV0LiBBY2NlcHRzIG11bHRpLWNoYXIgZS5rZXkgc28gYmF0Y2hlZCB3cml0ZXNcbiAgICAvLyAoc3RkaW4ud3JpdGUoJ2FiYycpIGluIHRlc3RzLCBvciBwYXN0ZSBvdXRzaWRlIGJyYWNrZXRlZC1wYXN0ZSBtb2RlKVxuICAgIC8vIGluc2VydCB0aGUgZnVsbCBjaHVuayBcdTIwMTQgbWF0Y2hpbmcgdGhlIG9sZCB1c2VJbnB1dCBiZWhhdmlvci5cbiAgICBpZiAoZS5rZXkubGVuZ3RoID49IDEgJiYgIVVOSEFORExFRF9TUEVDSUFMX0tFWVMuaGFzKGUua2V5KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdDdXJzb3IgPSBjdXJzb3IuaW5zZXJ0KGUua2V5KVxuICAgICAgc2V0UXVlcnlTdGF0ZShuZXdDdXJzb3IudGV4dClcbiAgICAgIHNldEN1cnNvck9mZnNldChuZXdDdXJzb3Iub2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEJhY2t3YXJkLWNvbXBhdCBicmlkZ2U6IGV4aXN0aW5nIGNvbnN1bWVycyBkb24ndCB5ZXQgd2lyZSBoYW5kbGVLZXlEb3duXG4gIC8vIHRvIDxCb3ggb25LZXlEb3duPi4gU3Vic2NyaWJlIHZpYSB1c2VJbnB1dCBhbmQgYWRhcHQgSW5wdXRFdmVudCBcdTIxOTJcbiAgLy8gS2V5Ym9hcmRFdmVudCB1bnRpbCBhbGwgMTEgY2FsbCBzaXRlcyBhcmUgbWlncmF0ZWQgKHNlcGFyYXRlIFBScykuXG4gIC8vIFRPRE8ob25LZXlEb3duLW1pZ3JhdGlvbik6IHJlbW92ZSBvbmNlIGFsbCBjb25zdW1lcnMgcGFzcyBoYW5kbGVLZXlEb3duLlxuICB1c2VJbnB1dChcbiAgICAoX2lucHV0LCBfa2V5LCBldmVudCkgPT4ge1xuICAgICAgaGFuZGxlS2V5RG93bihuZXcgS2V5Ym9hcmRFdmVudChldmVudC5rZXlwcmVzcykpXG4gICAgfSxcbiAgICB7IGlzQWN0aXZlIH0sXG4gIClcblxuICByZXR1cm4geyBxdWVyeSwgc2V0UXVlcnksIGN1cnNvck9mZnNldCwgaGFuZGxlS2V5RG93biB9XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBxdWVyeTogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIGlzRm9jdXNlZDogYm9vbGVhblxuICBpc1Rlcm1pbmFsRm9jdXNlZDogYm9vbGVhblxuICBwcmVmaXg/OiBzdHJpbmdcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbiAgY3Vyc29yT2Zmc2V0PzogbnVtYmVyXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCb3goe1xuICBxdWVyeSxcbiAgcGxhY2Vob2xkZXIgPSAnU2VhcmNo4oCmJyxcbiAgaXNGb2N1c2VkLFxuICBpc1Rlcm1pbmFsRm9jdXNlZCxcbiAgcHJlZml4ID0gJ+KMlScsXG4gIHdpZHRoLFxuICBjdXJzb3JPZmZzZXQsXG4gIGJvcmRlcmxlc3MgPSBmYWxzZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgb2Zmc2V0ID0gY3Vyc29yT2Zmc2V0ID8/IHF1ZXJ5Lmxlbmd0aFxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleFNocmluaz17MH1cbiAgICAgIGJvcmRlclN0eWxlPXtib3JkZXJsZXNzID8gdW5kZWZpbmVkIDogJ3JvdW5kJ31cbiAgICAgIGJvcmRlckNvbG9yPXtpc0ZvY3VzZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9XG4gICAgICBib3JkZXJEaW1Db2xvcj17IWlzRm9jdXNlZH1cbiAgICAgIHBhZGRpbmdYPXtib3JkZXJsZXNzID8gMCA6IDF9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgPlxuICAgICAgPFRleHQgZGltQ29sb3I9eyFpc0ZvY3VzZWR9PlxuICAgICAgICB7cHJlZml4fXsnICd9XG4gICAgICAgIHtpc0ZvY3VzZWQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtxdWVyeSA/IChcbiAgICAgICAgICAgICAgaXNUZXJtaW5hbEZvY3VzZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PntxdWVyeS5zbGljZSgwLCBvZmZzZXQpfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGludmVyc2U+XG4gICAgICAgICAgICAgICAgICAgIHtvZmZzZXQgPCBxdWVyeS5sZW5ndGggPyBxdWVyeVtvZmZzZXRdIDogJyAnfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAge29mZnNldCA8IHF1ZXJ5Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PntxdWVyeS5zbGljZShvZmZzZXQgKyAxKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUZXh0PntxdWVyeX08L1RleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBpc1Rlcm1pbmFsRm9jdXNlZCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dCBpbnZlcnNlPntwbGFjZWhvbGRlci5jaGFyQXQoMCl9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntwbGFjZWhvbGRlci5zbGljZSgxKX08L1RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3BsYWNlaG9sZGVyfTwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBxdWVyeSA/IChcbiAgICAgICAgICA8VGV4dD57cXVlcnl9PC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0PntwbGFjZWhvbGRlcn08L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQSxTQUFTLFVBQVUsR0FBMkI7QUFDNUMsTUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLE9BQU8sRUFBRSxRQUFRLE9BQU8sRUFBRSxRQUFRLE1BQU07QUFDL0QsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsYUFBYTtBQUNuQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQUVBLFNBQVMsVUFBVSxHQUEyQjtBQUM1QyxVQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRO0FBQ3pDO0FBOEJPLFNBQVMsZUFBZTtBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0Esc0JBQXNCLENBQUM7QUFBQSxFQUN2QixlQUFlO0FBQUEsRUFDZix3QkFBd0I7QUFDMUIsR0FBZ0Q7QUFDOUMsUUFBTSxFQUFFLFNBQVMsZ0JBQWdCLElBQUksZ0JBQWdCO0FBQ3JELFFBQU0sbUJBQW1CLFdBQVc7QUFDcEMsUUFBTSxDQUFDLE9BQU8sYUFBYSxJQUFJLFNBQVMsWUFBWTtBQUNwRCxRQUFNLENBQUMsY0FBYyxlQUFlLElBQUksU0FBUyxhQUFhLE1BQU07QUFFcEUsUUFBTSxXQUFXLFlBQVksQ0FBQyxNQUFjO0FBQzFDLGtCQUFjLENBQUM7QUFDZixvQkFBZ0IsRUFBRSxNQUFNO0FBQUEsRUFDMUIsR0FBRyxDQUFDLENBQUM7QUFFTCxRQUFNLGdCQUFnQixDQUFDLE1BQTJCO0FBQ2hELFFBQUksQ0FBQyxTQUFVO0FBRWYsVUFBTSxTQUFTLE9BQU8sU0FBUyxPQUFPLGtCQUFrQixZQUFZO0FBR3BFLFFBQUksRUFBRSxRQUFRLG9CQUFvQixTQUFTLEVBQUUsSUFBSSxZ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QUFBO0FBQUFBLFNBQUFyQixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUF3QjtBQUFBLE1BQUF4QixFQUFBLENBQUEsTUFBQU8sVUFBQVAsRUFBQSxDQUFBLE1BQUFvQixNQUFBcEIsRUFBQSxDQUFBLE1BQUFxQixJQUFBO0FBL0JIRyxVQUFBLDRDQUFDLGNBQWUsVUFBQUosTUFDYmIsUUFBUSxLQUNSYyxFQThCSDtBQUFPckIsTUFBQSxDQUFBLElBQUFPO0FBQUFQLE1BQUEsQ0FBQSxJQUFBb0I7QUFBQXBCLE1BQUEsQ0FBQSxJQUFBcUI7QUFBQXJCLE1BQUEsQ0FBQSxJQUFBd0I7RUFBQSxPQUFBO0FBQUFBLFVBQUF4QixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUF5QjtBQUFBLE1BQUF6QixFQUFBLEVBQUEsTUFBQXdCLE9BQUF4QixFQUFBLEVBQUEsTUFBQWdCLE1BQUFoQixFQUFBLEVBQUEsTUFBQWlCLE1BQUFqQixFQUFBLEVBQUEsTUFBQWtCLE1BQUFsQixFQUFBLEVBQUEsTUFBQW1CLE1BQUFuQixFQUFBLEVBQUEsTUFBQVMsT0FBQTtBQXhDVGdCLFVBQUEsNENBQUMscUJBQ2EsWUFBQSxHQUNDLGFBQUFULElBQ0EsYUFBQUMsSUFDRyxnQkFBQUMsSUFDTixVQUFBQyxJQUNIVixTQUVQZSxHQWlDRjtBQUFNeEIsTUFBQSxFQUFBLElBQUF3QjtBQUFBeEIsTUFBQSxFQUFBLElBQUFnQjtBQUFBaEIsTUFBQSxFQUFBLElBQUFpQjtBQUFBakIsTUFBQSxFQUFBLElBQUFrQjtBQUFBbEIsTUFBQSxFQUFBLElBQUFtQjtBQUFBbkIsTUFBQSxFQUFBLElBQUFTO0FBQUFULE1BQUEsRUFBQSxJQUFBeUI7RUFBQSxPQUFBO0FBQUFBLFVBQUF6QixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBekNOeUI7QUF5Q007Ozs7QUFwRVY7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJuZXdDdXJzb3IiLCAiU2VhcmNoQm94IiwgInQwIiwgIiQiLCAiX2MiLCAicXVlcnkiLCAicGxhY2Vob2xkZXIiLCAidDEiLCAiaXNGb2N1c2VkIiwgImlzVGVybWluYWxGb2N1c2VkIiwgInByZWZpeCIsICJ0MiIsICJ3aWR0aCIsICJjdXJzb3JPZmZzZXQiLCAiYm9yZGVybGVzcyIsICJ0MyIsICJ1bmRlZmluZWQiLCAib2Zmc2V0IiwgImxlbmd0aCIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJzbGljZSIsICJjaGFyQXQiLCAidDEwIiwgInQxMSJdCn0K
