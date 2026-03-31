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
  Link,
  ThemedBox_default,
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
  saveCurrentProjectConfig
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/ClaudeMdExternalIncludesDialog.tsx
function ClaudeMdExternalIncludesDialog(t0) {
  const $ = c(18);
  const {
    onDone,
    isStandaloneDialog,
    externalIncludes
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  react_default.useEffect(_temp, t1);
  let t2;
  if ($[1] !== onDone) {
    t2 = (value) => {
      if (value === "no") {
        logEvent("tengu_claude_md_external_includes_dialog_declined", {});
        saveCurrentProjectConfig(_temp2);
      } else {
        logEvent("tengu_claude_md_external_includes_dialog_accepted", {});
        saveCurrentProjectConfig(_temp3);
      }
      onDone();
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleSelection = t2;
  let t3;
  if ($[3] !== handleSelection) {
    t3 = () => {
      handleSelection("no");
    };
    $[3] = handleSelection;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const handleEscape = t3;
  const t4 = !isStandaloneDialog;
  const t5 = !isStandaloneDialog;
  let t6;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories.");
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  let t7;
  if ($[6] !== externalIncludes) {
    t7 = externalIncludes && externalIncludes.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "External imports:"), externalIncludes.map(_temp4));
    $[6] = externalIncludes;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/security" }), " ");
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Yes, allow external imports",
      value: "yes"
    }, {
      label: "No, disable external imports",
      value: "no"
    }];
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  let t10;
  if ($[10] !== handleSelection) {
    t10 = /* @__PURE__ */ react_default.createElement(Select, { options: t9, onChange: (value_0) => handleSelection(value_0) });
    $[10] = handleSelection;
    $[11] = t10;
  } else {
    t10 = $[11];
  }
  let t11;
  if ($[12] !== handleEscape || $[13] !== t10 || $[14] !== t4 || $[15] !== t5 || $[16] !== t7) {
    t11 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Allow external CLAUDE.md file imports?", color: "warning", onCancel: handleEscape, hideBorder: t4, hideInputGuide: t5 }, t6, t7, t8, t10);
    $[12] = handleEscape;
    $[13] = t10;
    $[14] = t4;
    $[15] = t5;
    $[16] = t7;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  return t11;
}
function _temp4(include, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: true }, "  ", include.path);
}
function _temp3(current_0) {
  return {
    ...current_0,
    hasClaudeMdExternalIncludesApproved: true,
    hasClaudeMdExternalIncludesWarningShown: true
  };
}
function _temp2(current) {
  return {
    ...current,
    hasClaudeMdExternalIncludesApproved: false,
    hasClaudeMdExternalIncludesWarningShown: true
  };
}
function _temp() {
  logEvent("tengu_claude_md_includes_dialog_shown", {});
}
var init_ClaudeMdExternalIncludesDialog = __esm({
  "src/components/ClaudeMdExternalIncludesDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_analytics();
    init_ink();
    init_config();
    init_CustomSelect();
    init_Dialog();
  }
});

export {
  ClaudeMdExternalIncludesDialog,
  init_ClaudeMdExternalIncludesDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzRGlhbG9nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IEV4dGVybmFsQ2xhdWRlTWRJbmNsdWRlIH0gZnJvbSAnLi4vdXRpbHMvY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBzYXZlQ3VycmVudFByb2plY3RDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL0N1c3RvbVNlbGVjdC9pbmRleC5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZSgpOiB2b2lkXG4gIGlzU3RhbmRhbG9uZURpYWxvZz86IGJvb2xlYW5cbiAgZXh0ZXJuYWxJbmNsdWRlcz86IEV4dGVybmFsQ2xhdWRlTWRJbmNsdWRlW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENsYXVkZU1kRXh0ZXJuYWxJbmNsdWRlc0RpYWxvZyh7XG4gIG9uRG9uZSxcbiAgaXNTdGFuZGFsb25lRGlhbG9nLFxuICBleHRlcm5hbEluY2x1ZGVzLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExvZyB3aGVuIGRpYWxvZyBpcyBzaG93blxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVfbWRfaW5jbHVkZXNfZGlhbG9nX3Nob3duJywge30pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogJ3llcycgfCAnbm8nKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09ICdubycpIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NsYXVkZV9tZF9leHRlcm5hbF9pbmNsdWRlc19kaWFsb2dfZGVjbGluZWQnLCB7fSlcbiAgICAgICAgLy8gTWFyayB0aGF0IHdlJ3ZlIHNob3duIHRoZSBkaWFsb2cgYnV0IGl0IHdhcyBkZWNsaW5lZFxuICAgICAgICBzYXZlQ3VycmVudFByb2plY3RDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzQXBwcm92ZWQ6IGZhbHNlLFxuICAgICAgICAgIGhhc0NsYXVkZU1kRXh0ZXJuYWxJbmNsdWRlc1dhcm5pbmdTaG93bjogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dFdmVudCgndGVuZ3VfY2xhdWRlX21kX2V4dGVybmFsX2luY2x1ZGVzX2RpYWxvZ19hY2NlcHRlZCcsIHt9KVxuICAgICAgICBzYXZlQ3VycmVudFByb2plY3RDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzQXBwcm92ZWQ6IHRydWUsXG4gICAgICAgICAgaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzV2FybmluZ1Nob3duOiB0cnVlLFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgb25Eb25lKClcbiAgICB9LFxuICAgIFtvbkRvbmVdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlRXNjYXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZVNlbGVjdGlvbignbm8nKVxuICB9LCBbaGFuZGxlU2VsZWN0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiQWxsb3cgZXh0ZXJuYWwgQ0xBVURFLm1kIGZpbGUgaW1wb3J0cz9cIlxuICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVFc2NhcGV9XG4gICAgICBoaWRlQm9yZGVyPXshaXNTdGFuZGFsb25lRGlhbG9nfVxuICAgICAgaGlkZUlucHV0R3VpZGU9eyFpc1N0YW5kYWxvbmVEaWFsb2d9XG4gICAgPlxuICAgICAgPFRleHQ+XG4gICAgICAgIFRoaXMgcHJvamVjdCZhcG9zO3MgQ0xBVURFLm1kIGltcG9ydHMgZmlsZXMgb3V0c2lkZSB0aGUgY3VycmVudCB3b3JraW5nXG4gICAgICAgIGRpcmVjdG9yeS4gTmV2ZXIgYWxsb3cgdGhpcyBmb3IgdGhpcmQtcGFydHkgcmVwb3NpdG9yaWVzLlxuICAgICAgPC9UZXh0PlxuXG4gICAgICB7ZXh0ZXJuYWxJbmNsdWRlcyAmJiBleHRlcm5hbEluY2x1ZGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5FeHRlcm5hbCBpbXBvcnRzOjwvVGV4dD5cbiAgICAgICAgICB7ZXh0ZXJuYWxJbmNsdWRlcy5tYXAoKGluY2x1ZGUsIGkpID0+IChcbiAgICAgICAgICAgIDxUZXh0IGtleT17aX0gZGltQ29sb3I+XG4gICAgICAgICAgICAgIHsnICAnfVxuICAgICAgICAgICAgICB7aW5jbHVkZS5wYXRofVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICBJbXBvcnRhbnQ6IE9ubHkgdXNlIENsYXVkZSBDb2RlIHdpdGggZmlsZXMgeW91IHRydXN0LiBBY2Nlc3NpbmdcbiAgICAgICAgdW50cnVzdGVkIGZpbGVzIG1heSBwb3NlIHNlY3VyaXR5IHJpc2tzeycgJ31cbiAgICAgICAgPExpbmsgdXJsPVwiaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9zZWN1cml0eVwiIC8+eycgJ31cbiAgICAgIDwvVGV4dD5cblxuICAgICAgPFNlbGVjdFxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgeyBsYWJlbDogJ1llcywgYWxsb3cgZXh0ZXJuYWwgaW1wb3J0cycsIHZhbHVlOiAneWVzJyB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdObywgZGlzYWJsZSBleHRlcm5hbCBpbXBvcnRzJywgdmFsdWU6ICdubycgfSxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IGhhbmRsZVNlbGVjdGlvbih2YWx1ZSBhcyAneWVzJyB8ICdubycpfVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY08sU0FBQUEsK0JBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBd0MsUUFBQTtJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFMO0FBSXZDLE1BQUFNO0FBQUEsTUFBQUwsRUFBQSxDQUFBLE1BQUFNLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFJSEYsU0FBQSxDQUFBO0FBQUVMLE1BQUEsQ0FBQSxJQUFBSztFQUFBLE9BQUE7QUFBQUEsU0FBQUwsRUFBQSxDQUFBO0VBQUE7QUFITFEsZ0JBQUtDLFVBQVdDLE9BR2JMLEVBQUU7QUFBQyxNQUFBTTtBQUFBLE1BQUFYLEVBQUEsQ0FBQSxNQUFBRSxRQUFBO0FBR0pTLFNBQUFDLFdBQUE7QUFDRSxVQUFJQSxVQUFVLE1BQUk7QUFDaEJDLGlCQUFTLHFEQUFxRCxDQUFDLENBQUM7QUFFaEVDLGlDQUF5QkMsTUFJdkI7TUFBQyxPQUFBO0FBRUhGLGlCQUFTLHFEQUFxRCxDQUFDLENBQUM7QUFDaEVDLGlDQUF5QkUsTUFJdkI7TUFBQztBQUdMZCxhQUFPO0lBQUM7QUFDVEYsTUFBQSxDQUFBLElBQUFFO0FBQUFG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U0FBQU4sT0FBQU8sU0FBQUMsR0FBQTtBQUFBLFNBdURLLDRDQUFDLGNBQVVBLEtBQUFBLEdBQUcsVUFBQSxRQUNYLE1BQ0FELFFBQU9FLElBQ1Y7QUFBTztBQTFEWixTQUFBbkIsT0FBQW9CLFdBQUE7QUFBQSxTQXNCc0M7SUFBQSxHQUNoQ0M7SUFBT0MscUNBQzJCO0lBQUlDLHlDQUNBO0VBQzNDO0FBQUM7QUExQkYsU0FBQXhCLE9BQUFzQixTQUFBO0FBQUEsU0Flc0M7SUFBQSxHQUNoQ0E7SUFBT0MscUNBQzJCO0lBQUtDLHlDQUNEO0VBQzNDO0FBQUM7QUFuQkYsU0FBQTdCLFFBQUE7QUFPSEcsV0FBUyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQUM7Ozs7QUFyQnpEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJDbGF1ZGVNZEV4dGVybmFsSW5jbHVkZXNEaWFsb2ciLCAidDAiLCAiJCIsICJfYyIsICJvbkRvbmUiLCAiaXNTdGFuZGFsb25lRGlhbG9nIiwgImV4dGVybmFsSW5jbHVkZXMiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJSZWFjdCIsICJ1c2VFZmZlY3QiLCAiX3RlbXAiLCAidDIiLCAidmFsdWUiLCAibG9nRXZlbnQiLCAic2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnIiwgIl90ZW1wMiIsICJfdGVtcDMiLCAiaGFuZGxlU2VsZWN0aW9uIiwgInQzIiwgImhhbmRsZUVzY2FwZSIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJsZW5ndGgiLCAibWFwIiwgIl90ZW1wNCIsICJ0OCIsICJ0OSIsICJsYWJlbCIsICJ0MTAiLCAidmFsdWVfMCIsICJ0MTEiLCAiaW5jbHVkZSIsICJpIiwgInBhdGgiLCAiY3VycmVudF8wIiwgImN1cnJlbnQiLCAiaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzQXBwcm92ZWQiLCAiaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzV2FybmluZ1Nob3duIl0KfQo=
