#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  init_CustomSelect
} from "./chunk-OPLSBIOC.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-SR5JKAMQ.mjs";
import {
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  init_config2 as init_config,
  saveGlobalConfig
} from "./chunk-Z6CSO4BY.mjs";

// src/components/ApproveApiKey.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_config();
init_CustomSelect();
init_Dialog();
function ApproveApiKey(t0) {
  const $ = c(17);
  const {
    customApiKeyTruncated,
    onDone
  } = t0;
  let t1;
  if ($[0] !== customApiKeyTruncated || $[1] !== onDone) {
    t1 = function onChange2(value) {
      bb2: switch (value) {
        case "yes": {
          saveGlobalConfig((current_0) => ({
            ...current_0,
            customApiKeyResponses: {
              ...current_0.customApiKeyResponses,
              approved: [...current_0.customApiKeyResponses?.approved ?? [], customApiKeyTruncated]
            }
          }));
          onDone(true);
          break bb2;
        }
        case "no": {
          saveGlobalConfig((current) => ({
            ...current,
            customApiKeyResponses: {
              ...current.customApiKeyResponses,
              rejected: [...current.customApiKeyResponses?.rejected ?? [], customApiKeyTruncated]
            }
          }));
          onDone(false);
        }
      }
    };
    $[0] = customApiKeyTruncated;
    $[1] = onDone;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const onChange = t1;
  let t2;
  if ($[3] !== onChange) {
    t2 = () => onChange("no");
    $[3] = onChange;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "ANTHROPIC_API_KEY");
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== customApiKeyTruncated) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t3, /* @__PURE__ */ react_default.createElement(ThemedText, null, ": sk-ant-...", customApiKeyTruncated));
    $[6] = customApiKeyTruncated;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Do you want to use this API key?");
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      label: "Yes",
      value: "yes"
    };
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = [t6, {
      label: /* @__PURE__ */ react_default.createElement(ThemedText, null, "No (", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "recommended"), ")"),
      value: "no"
    }];
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== onChange) {
    t8 = /* @__PURE__ */ react_default.createElement(Select, { defaultValue: "no", defaultFocusValue: "no", options: t7, onChange: (value_0) => onChange(value_0), onCancel: () => onChange("no") });
    $[11] = onChange;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== t2 || $[14] !== t4 || $[15] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Detected a custom API key in your environment", color: "warning", onCancel: t2 }, t4, t5, t8);
    $[13] = t2;
    $[14] = t4;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
}

export {
  ApproveApiKey
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQXBwcm92ZUFwaUtleS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjdXN0b21BcGlLZXlUcnVuY2F0ZWQ6IHN0cmluZ1xuICBvbkRvbmUoYXBwcm92ZWQ6IGJvb2xlYW4pOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHByb3ZlQXBpS2V5KHtcbiAgY3VzdG9tQXBpS2V5VHJ1bmNhdGVkLFxuICBvbkRvbmUsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlOiAneWVzJyB8ICdubycpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICd5ZXMnOiB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgY3VzdG9tQXBpS2V5UmVzcG9uc2VzOiB7XG4gICAgICAgICAgICAuLi5jdXJyZW50LmN1c3RvbUFwaUtleVJlc3BvbnNlcyxcbiAgICAgICAgICAgIGFwcHJvdmVkOiBbXG4gICAgICAgICAgICAgIC4uLihjdXJyZW50LmN1c3RvbUFwaUtleVJlc3BvbnNlcz8uYXBwcm92ZWQgPz8gW10pLFxuICAgICAgICAgICAgICBjdXN0b21BcGlLZXlUcnVuY2F0ZWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgICBvbkRvbmUodHJ1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ25vJzoge1xuICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgIGN1c3RvbUFwaUtleVJlc3BvbnNlczoge1xuICAgICAgICAgICAgLi4uY3VycmVudC5jdXN0b21BcGlLZXlSZXNwb25zZXMsXG4gICAgICAgICAgICByZWplY3RlZDogW1xuICAgICAgICAgICAgICAuLi4oY3VycmVudC5jdXN0b21BcGlLZXlSZXNwb25zZXM/LnJlamVjdGVkID8/IFtdKSxcbiAgICAgICAgICAgICAgY3VzdG9tQXBpS2V5VHJ1bmNhdGVkLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSlcbiAgICAgICAgb25Eb25lKGZhbHNlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJEZXRlY3RlZCBhIGN1c3RvbSBBUEkga2V5IGluIHlvdXIgZW52aXJvbm1lbnRcIlxuICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiBvbkNoYW5nZSgnbm8nKX1cbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAgPFRleHQgYm9sZD5BTlRIUk9QSUNfQVBJX0tFWTwvVGV4dD5cbiAgICAgICAgPFRleHQ+OiBzay1hbnQtLi4ue2N1c3RvbUFwaUtleVRydW5jYXRlZH08L1RleHQ+XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dD5EbyB5b3Ugd2FudCB0byB1c2UgdGhpcyBBUEkga2V5PzwvVGV4dD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgZGVmYXVsdFZhbHVlPVwibm9cIlxuICAgICAgICBkZWZhdWx0Rm9jdXNWYWx1ZT1cIm5vXCJcbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgbGFiZWw6ICdZZXMnLCB2YWx1ZTogJ3llcycgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBObyAoPFRleHQgYm9sZD5yZWNvbW1lbmRlZDwvVGV4dD4pXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB2YWx1ZTogJ25vJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2UodmFsdWUgYXMgJ3llcycgfCAnbm8nKX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IG9uQ2hhbmdlKCdubycpfVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPTyxTQUFBQSxjQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQXVCLFFBQUE7SUFBQUM7SUFBQUM7RUFBQSxJQUFBSjtBQUd0QixNQUFBSztBQUFBLE1BQUFKLEVBQUEsQ0FBQSxNQUFBRSx5QkFBQUYsRUFBQSxDQUFBLE1BQUFHLFFBQUE7QUFDTkMsU0FBQSxTQUFBQyxVQUFBQyxPQUFBO0FBQUFDLFVBQ0UsU0FBUUQsT0FBSztRQUFBLEtBQ04sT0FBSztBQUNSRSwyQkFBaUJDLGdCQUFZO1lBQUEsR0FDeEJDO1lBQU9DLHVCQUNhO2NBQUEsR0FDbEJELFVBQU9DO2NBQXNCQyxVQUN0QixDQUFBLEdBQ0pGLFVBQU9DLHVCQUFnQ0MsWUFBdkMsQ0FBQSxHQUNKVixxQkFBcUI7WUFFekI7VUFDRixFQUFFO0FBQ0ZDLGlCQUFPLElBQUk7QUFDWCxnQkFBQUk7UUFBSztRQUFBLEtBRUYsTUFBSTtBQUNQQywyQkFBaUJFLGNBQVk7WUFBQSxHQUN4QkE7WUFBT0MsdUJBQ2E7Y0FBQSxHQUNsQkQsUUFBT0M7Y0FBc0JFLFVBQ3RCLENBQUEsR0FDSkgsUUFBT0MsdUJBQWdDRSxZQUF2QyxDQUFBLEdBQ0pYLHFCQUFxQjtZQUV6QjtVQUNGLEVBQUU7QUFDRkMsaUJBQU8sS0FBSztRQUFDO01BR2pCO0lBQUM7QUFDRkgsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQUk7RUFBQSxPQUFBO0FBQUFBLFNBQUFKLEVBQUEsQ0FBQTtFQUFBO0FBL0JELFFBQUFLLFdBQUFEO0FBK0JDLE1BQUFVO0FBQUEsTUFBQWQsRUFBQSxDQUFBLE1BQUFLLFVBQUE7QUFNYVMsU0FBQUEsTUFBTVQsU0FBUyxJQUFJO0FBQUNMLE1BQUEsQ0FBQSxJQUFBSztBQUFBTCxNQUFBLENBQUEsSUFBQWM7RUFBQSxPQUFBO0FBQUFBLFNBQUFkLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQWU7QUFBQSxNQUFBZixFQUFBLENBQUEsTUFBQWdCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHNUJGLFNBQUEsNENBQUMsY0FBSyxNQUFBLFFBQUssbUJBQWlCO0FBQU9mLE1BQUEsQ0FBQSxJQUFBZTtFQUFBLE9BQUE7QUFBQUEsU0FBQWYsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBa0I7QUFBQSxNQUFBbEIsRUFBQSxDQUFBLE1BQUFFLHVCQUFBO0FBRHJDZ0IsU0FBQSw0Q0FBQyxrQkFDQ0gsSUFDQSw0Q0FBQyxrQkFBSyxnQkFBYWIscUJBQXNCLENBQzNDO0FBQU9GLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQWtCO0VBQUEsT0FBQTtBQUFBQSxTQUFBbEIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBbUI7QUFBQSxNQUFBbkIsRUFBQSxDQUFBLE1BQUFnQix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBQ1BFLFNBQUEsNENBQUMsa0JBQUssa0NBQWdDO0FBQU9uQixNQUFBLENBQUEsSUFBQW1CO0VBQUEsT0FBQTtBQUFBQSxTQUFBbkIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBb0I7QUFBQSxNQUFBcEIsRUFBQSxDQUFBLE1BQUFnQix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBS3pDRyxTQUFBO01BQUFDLE9BQVM7TUFBS2YsT0FBUztJQUFNO0FBQUNOLE1BQUEsQ0FBQSxJQUFBb0I7RUFBQSxPQUFBO0FBQUFBLFNBQUFwQixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFzQjtBQUFBLE1BQUF0QixFQUFBLEVBQUEsTUFBQWdCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFEdkJLLFNBQUEsQ0FDUEYsSUFDQTtNQUFBQyxPQUVJLDRDQUFDLGtCQUFLLFFBQ0EsNENBQUMsY0FBSyxNQUFBLFFBQUssYUFBVyxHQUFPLEdBQ25DO01BQU9mLE9BRUY7SUFDVCxDQUFDO0FBQ0ZOLE1BQUEsRUFBQSxJQUFBc0I7RUFBQSxPQUFBO0FBQUFBLFNBQUF0QixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUF1QjtBQUFBLE1BQUF2QixFQUFBLEVBQUEsTUFBQUssVUFBQTtBQWJIa0IsU0FBQSw0Q0FBQyxVQUNjLGNBQUEsTUFDSyxtQkFBQSxNQUNULFNBQUFELElBV0MsVUFBQUUsYUFBU25CLFNBQVNDLE9BQXFCLEdBQ3ZDLFVBQUEsTUFBTUQsU0FBUyxJQUFJLEdBQUM7QUFDOUJMLE1BQUEsRUFBQSxJQUFBSztBQUFBTCxNQUFBLEVBQUEsSUFBQXVCO0VBQUEsT0FBQTtBQUFBQSxTQUFBdkIsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBeUI7QUFBQSxNQUFBekIsRUFBQSxFQUFBLE1BQUFjLE1BQUFkLEVBQUEsRUFBQSxNQUFBa0IsTUFBQWxCLEVBQUEsRUFBQSxNQUFBdUIsSUFBQTtBQTFCSkUsU0FBQSw0Q0FBQyxVQUNPLE9BQUEsaURBQ0EsT0FBQSxXQUNJLFVBQUFYLE1BRVZJLElBSUFDLElBQ0FJLEVBaUJGO0FBQVN2QixNQUFBLEVBQUEsSUFBQWM7QUFBQWQsTUFBQSxFQUFBLElBQUFrQjtBQUFBbEIsTUFBQSxFQUFBLElBQUF1QjtBQUFBdkIsTUFBQSxFQUFBLElBQUF5QjtFQUFBLE9BQUE7QUFBQUEsU0FBQXpCLEVBQUEsRUFBQTtFQUFBO0FBQUEsU0EzQlR5QjtBQTJCUzsiLAogICJuYW1lcyI6IFsiQXBwcm92ZUFwaUtleSIsICJ0MCIsICIkIiwgIl9jIiwgImN1c3RvbUFwaUtleVRydW5jYXRlZCIsICJvbkRvbmUiLCAidDEiLCAib25DaGFuZ2UiLCAidmFsdWUiLCAiYmIyIiwgInNhdmVHbG9iYWxDb25maWciLCAiY3VycmVudF8wIiwgImN1cnJlbnQiLCAiY3VzdG9tQXBpS2V5UmVzcG9uc2VzIiwgImFwcHJvdmVkIiwgInJlamVjdGVkIiwgInQyIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAidDQiLCAidDUiLCAidDYiLCAibGFiZWwiLCAidDciLCAidDgiLCAidmFsdWVfMCIsICJ0OSJdCn0K
