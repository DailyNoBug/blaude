#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Spinner,
  init_Spinner
} from "./chunk-PWGYNHQM.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/design-system/LoadingState.tsx
function LoadingState(t0) {
  const $ = c(10);
  const {
    message,
    bold: t1,
    dimColor: t2,
    subtitle
  } = t0;
  const bold = t1 === void 0 ? false : t1;
  const dimColor = t2 === void 0 ? false : t2;
  let t3;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(Spinner, null);
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  let t4;
  if ($[1] !== bold || $[2] !== dimColor || $[3] !== message) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, t3, /* @__PURE__ */ react_default.createElement(ThemedText, { bold, dimColor }, " ", message));
    $[1] = bold;
    $[2] = dimColor;
    $[3] = message;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== subtitle) {
    t5 = subtitle && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, subtitle);
    $[5] = subtitle;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== t4 || $[8] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t4, t5);
    $[7] = t4;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  return t6;
}
var init_LoadingState = __esm({
  "src/components/design-system/LoadingState.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_Spinner();
  }
});

export {
  LoadingState,
  init_LoadingState
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9Mb2FkaW5nU3RhdGUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lci5qcydcblxudHlwZSBMb2FkaW5nU3RhdGVQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBsb2FkaW5nIG1lc3NhZ2UgdG8gZGlzcGxheSBuZXh0IHRvIHRoZSBzcGlubmVyLlxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nXG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIG1lc3NhZ2UgaW4gYm9sZC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGJvbGQ/OiBib29sZWFuXG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIG1lc3NhZ2UgaW4gZGltbWVkIGNvbG9yLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGltQ29sb3I/OiBib29sZWFuXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHN1YnRpdGxlIGRpc3BsYXllZCBiZWxvdyB0aGUgbWFpbiBtZXNzYWdlLlxuICAgKi9cbiAgc3VidGl0bGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBBIHNwaW5uZXIgd2l0aCBsb2FkaW5nIG1lc3NhZ2UgZm9yIGFzeW5jIG9wZXJhdGlvbnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEJhc2ljIGxvYWRpbmdcbiAqIDxMb2FkaW5nU3RhdGUgbWVzc2FnZT1cIkxvYWRpbmcuLi5cIiAvPlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBCb2xkIGxvYWRpbmcgbWVzc2FnZVxuICogPExvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiTG9hZGluZyBzZXNzaW9uc1wiIGJvbGQgLz5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2l0aCBzdWJ0aXRsZVxuICogPExvYWRpbmdTdGF0ZVxuICogICBtZXNzYWdlPVwiTG9hZGluZyBzZXNzaW9uc1wiXG4gKiAgIGJvbGRcbiAqICAgc3VidGl0bGU9XCJGZXRjaGluZyB5b3VyIENsYXVkZSBDb2RlIHNlc3Npb25zLi4uXCJcbiAqIC8+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nU3RhdGUoe1xuICBtZXNzYWdlLFxuICBib2xkID0gZmFsc2UsXG4gIGRpbUNvbG9yID0gZmFsc2UsXG4gIHN1YnRpdGxlLFxufTogTG9hZGluZ1N0YXRlUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDxUZXh0IGJvbGQ9e2JvbGR9IGRpbUNvbG9yPXtkaW1Db2xvcn0+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICB7c3VidGl0bGUgJiYgPFRleHQgZGltQ29sb3I+e3N1YnRpdGxlfTwvVGV4dD59XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NPLFNBQUFBLGFBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBc0IsUUFBQTtJQUFBQztJQUFBQyxNQUFBQztJQUFBQyxVQUFBQztJQUFBQztFQUFBLElBQUFSO0FBRTNCLFFBQUFJLE9BQUFDLE9BQUFJLFNBQUEsUUFBQUo7QUFDQSxRQUFBQyxXQUFBQyxPQUFBRSxTQUFBLFFBQUFGO0FBQWdCLE1BQUFHO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFVLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFNVkYsU0FBQSw0Q0FBQyxhQUFPO0FBQUdULE1BQUEsQ0FBQSxJQUFBUztFQUFBLE9BQUE7QUFBQUEsU0FBQVQsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBWTtBQUFBLE1BQUFaLEVBQUEsQ0FBQSxNQUFBRyxRQUFBSCxFQUFBLENBQUEsTUFBQUssWUFBQUwsRUFBQSxDQUFBLE1BQUFFLFNBQUE7QUFEYlUsU0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxTQUNqQkgsSUFDQSw0Q0FBQyxjQUFXTixNQUFnQkUsWUFDekIsS0FDQUgsT0FDSCxDQUNGO0FBQU1GLE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQUs7QUFBQUwsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBWTtFQUFBLE9BQUE7QUFBQUEsU0FBQVosRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBYTtBQUFBLE1BQUFiLEVBQUEsQ0FBQSxNQUFBTyxVQUFBO0FBQ0xNLFNBQUFOLFlBQVksNENBQUMsY0FBSyxVQUFBLFFBQVVBLFFBQVM7QUFBT1AsTUFBQSxDQUFBLElBQUFPO0FBQUFQLE1BQUEsQ0FBQSxJQUFBYTtFQUFBLE9BQUE7QUFBQUEsU0FBQWIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBYztBQUFBLE1BQUFkLEVBQUEsQ0FBQSxNQUFBWSxNQUFBWixFQUFBLENBQUEsTUFBQWEsSUFBQTtBQVIvQ0MsU0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxZQUNqQkYsSUFPQ0MsRUFDSDtBQUFNYixNQUFBLENBQUEsSUFBQVk7QUFBQVosTUFBQSxDQUFBLElBQUFhO0FBQUFiLE1BQUEsQ0FBQSxJQUFBYztFQUFBLE9BQUE7QUFBQUEsU0FBQWQsRUFBQSxDQUFBO0VBQUE7QUFBQSxTQVROYztBQVNNOzs7O0FBL0RWO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJMb2FkaW5nU3RhdGUiLCAidDAiLCAiJCIsICJfYyIsICJtZXNzYWdlIiwgImJvbGQiLCAidDEiLCAiZGltQ29sb3IiLCAidDIiLCAic3VidGl0bGUiLCAidW5kZWZpbmVkIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAidDQiLCAidDUiLCAidDYiXQp9Cg==
