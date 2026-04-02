#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_AppState,
  useAppState,
  useSetAppState
} from "./chunk-5INIV6TQ.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-UPQJMBLU.mjs";
import {
  init_useKeybinding,
  useKeybindings
} from "./chunk-36ZVP56J.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_color,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-V7ZPGO35.mjs";
import {
  FAST_MODE_MODEL_DISPLAY,
  LIGHTNING_BOLT,
  clearFastModeCooldown,
  formatModelPricing,
  getFastModeModel,
  getFastModeRuntimeState,
  getFastModeUnavailableReason,
  getGlobalConfig,
  getOpus46CostTier,
  init_config,
  init_fastMode,
  init_figures,
  init_modelCost,
  init_settings2 as init_settings,
  init_source,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  prefetchFastModeStatus,
  source_default,
  updateSettingsForSource
} from "./chunk-JQ55XPLZ.mjs";
import {
  formatDuration,
  init_format
} from "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/FastIcon.tsx
function FastIcon(t0) {
  const $ = c(2);
  const {
    cooldown
  } = t0;
  if (cooldown) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ createElement(ThemedText, { color: "promptBorder", dimColor: true }, LIGHTNING_BOLT);
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { color: "fastMode" }, LIGHTNING_BOLT);
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function getFastIconString(applyColor = true, cooldown = false) {
  if (!applyColor) {
    return LIGHTNING_BOLT;
  }
  const themeName = resolveThemeSetting(getGlobalConfig().theme);
  if (cooldown) {
    return source_default.dim(color("promptBorder", themeName)(LIGHTNING_BOLT));
  }
  return color("fastMode", themeName)(LIGHTNING_BOLT);
}
var init_FastIcon = __esm({
  "src/components/FastIcon.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_figures();
    init_ink();
    init_config();
    init_systemTheme();
    init_color();
  }
});

// src/commands/fast/fast.tsx
function applyFastMode(enable, setAppState) {
  clearFastModeCooldown();
  updateSettingsForSource("userSettings", {
    fastMode: enable ? true : void 0
  });
  if (enable) {
    setAppState((prev) => {
      const needsModelSwitch = !isFastModeSupportedByModel(prev.mainLoopModel);
      return {
        ...prev,
        ...needsModelSwitch ? {
          mainLoopModel: getFastModeModel(),
          mainLoopModelForSession: null
        } : {},
        fastMode: true
      };
    });
  } else {
    setAppState((prev) => ({
      ...prev,
      fastMode: false
    }));
  }
}
function FastModePicker(t0) {
  const $ = c(30);
  const {
    onDone,
    unavailableReason
  } = t0;
  const model = useAppState(_temp);
  const initialFastMode = useAppState(_temp2);
  const setAppState = useSetAppState();
  const [enableFastMode, setEnableFastMode] = useState(initialFastMode ?? false);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getFastModeRuntimeState();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const runtimeState = t1;
  const isCooldown = runtimeState.status === "cooldown";
  const isUnavailable = unavailableReason !== null;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = formatModelPricing(getOpus46CostTier(true));
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const pricing = t2;
  let t3;
  if ($[2] !== enableFastMode || $[3] !== isUnavailable || $[4] !== model || $[5] !== onDone || $[6] !== setAppState) {
    t3 = function handleConfirm2() {
      if (isUnavailable) {
        return;
      }
      applyFastMode(enableFastMode, setAppState);
      logEvent("tengu_fast_mode_toggled", {
        enabled: enableFastMode,
        source: "picker"
      });
      if (enableFastMode) {
        const fastIcon = getFastIconString(enableFastMode);
        const modelUpdated = !isFastModeSupportedByModel(model) ? ` \xB7 model set to ${FAST_MODE_MODEL_DISPLAY}` : "";
        onDone(`${fastIcon} Fast mode ON${modelUpdated} \xB7 ${pricing}`);
      } else {
        setAppState(_temp3);
        onDone("Fast mode OFF");
      }
    };
    $[2] = enableFastMode;
    $[3] = isUnavailable;
    $[4] = model;
    $[5] = onDone;
    $[6] = setAppState;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const handleConfirm = t3;
  let t4;
  if ($[8] !== initialFastMode || $[9] !== isUnavailable || $[10] !== onDone || $[11] !== setAppState) {
    t4 = function handleCancel2() {
      if (isUnavailable) {
        if (initialFastMode) {
          applyFastMode(false, setAppState);
        }
        onDone("Fast mode OFF", {
          display: "system"
        });
        return;
      }
      const message = initialFastMode ? `${getFastIconString()} Kept Fast mode ON` : "Kept Fast mode OFF";
      onDone(message, {
        display: "system"
      });
    };
    $[8] = initialFastMode;
    $[9] = isUnavailable;
    $[10] = onDone;
    $[11] = setAppState;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const handleCancel = t4;
  let t5;
  if ($[13] !== isUnavailable) {
    t5 = function handleToggle2() {
      if (isUnavailable) {
        return;
      }
      setEnableFastMode(_temp4);
    };
    $[13] = isUnavailable;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  const handleToggle = t5;
  let t6;
  if ($[15] !== handleConfirm || $[16] !== handleToggle) {
    t6 = {
      "confirm:yes": handleConfirm,
      "confirm:nextField": handleToggle,
      "confirm:next": handleToggle,
      "confirm:previous": handleToggle,
      "confirm:cycleMode": handleToggle,
      "confirm:toggle": handleToggle
    };
    $[15] = handleConfirm;
    $[16] = handleToggle;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  let t7;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      context: "Confirmation"
    };
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  useKeybindings(t6, t7);
  let t8;
  if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(FastIcon, { cooldown: isCooldown }), " Fast mode (research preview)");
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  const title = t8;
  let t9;
  if ($[20] !== isUnavailable) {
    t9 = (exitState) => exitState.pending ? /* @__PURE__ */ createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : isUnavailable ? /* @__PURE__ */ createElement(ThemedText, null, "Esc to cancel") : /* @__PURE__ */ createElement(ThemedText, null, "Tab to toggle \xB7 Enter to confirm \xB7 Esc to cancel");
    $[20] = isUnavailable;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[22] !== enableFastMode || $[23] !== unavailableReason) {
    t10 = unavailableReason ? /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, unavailableReason)) : /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 0, marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 2 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Fast mode"), /* @__PURE__ */ createElement(ThemedText, { color: enableFastMode ? "fastMode" : void 0, bold: enableFastMode }, enableFastMode ? "ON " : "OFF"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, pricing))), isCooldown && runtimeState.status === "cooldown" && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, runtimeState.reason === "overloaded" ? "Fast mode overloaded and is temporarily unavailable" : "You've hit your fast limit", " \xB7 resets in ", formatDuration(runtimeState.resetAt - Date.now(), {
      hideTrailingZeros: true
    }))));
    $[22] = enableFastMode;
    $[23] = unavailableReason;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  let t11;
  if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Learn more:", " ", /* @__PURE__ */ createElement(Link, { url: "https://code.claude.com/docs/en/fast-mode" }, "https://code.claude.com/docs/en/fast-mode"));
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  let t12;
  if ($[26] !== handleCancel || $[27] !== t10 || $[28] !== t9) {
    t12 = /* @__PURE__ */ createElement(Dialog, { title, subtitle: `High-speed mode for ${FAST_MODE_MODEL_DISPLAY}. Billed as extra usage at a premium rate. Separate rate limits apply.`, onCancel: handleCancel, color: "fastMode", inputGuide: t9 }, t10, t11);
    $[26] = handleCancel;
    $[27] = t10;
    $[28] = t9;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  return t12;
}
function _temp4(prev_0) {
  return !prev_0;
}
function _temp3(prev) {
  return {
    ...prev,
    fastMode: false
  };
}
function _temp2(s_0) {
  return s_0.fastMode;
}
function _temp(s) {
  return s.mainLoopModel;
}
async function handleFastModeShortcut(enable, getAppState, setAppState) {
  const unavailableReason = getFastModeUnavailableReason();
  if (unavailableReason) {
    return `Fast mode unavailable: ${unavailableReason}`;
  }
  const {
    mainLoopModel
  } = getAppState();
  applyFastMode(enable, setAppState);
  logEvent("tengu_fast_mode_toggled", {
    enabled: enable,
    source: "shortcut"
  });
  if (enable) {
    const fastIcon = getFastIconString(true);
    const modelUpdated = !isFastModeSupportedByModel(mainLoopModel) ? ` \xB7 model set to ${FAST_MODE_MODEL_DISPLAY}` : "";
    const pricing = formatModelPricing(getOpus46CostTier(true));
    return `${fastIcon} Fast mode ON${modelUpdated} \xB7 ${pricing}`;
  } else {
    return `Fast mode OFF`;
  }
}
async function call(onDone, context, args) {
  if (!isFastModeEnabled()) {
    return null;
  }
  await prefetchFastModeStatus();
  const arg = args?.trim().toLowerCase();
  if (arg === "on" || arg === "off") {
    const result = await handleFastModeShortcut(arg === "on", context.getAppState, context.setAppState);
    onDone(result);
    return null;
  }
  const unavailableReason = getFastModeUnavailableReason();
  logEvent("tengu_fast_mode_picker_shown", {
    unavailable_reason: unavailableReason ?? ""
  });
  return /* @__PURE__ */ createElement(FastModePicker, { onDone, unavailableReason });
}
var init_fast = __esm({
  "src/commands/fast/fast.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_Dialog();
    init_FastIcon();
    init_ink();
    init_useKeybinding();
    init_analytics();
    init_AppState();
    init_fastMode();
    init_format();
    init_modelCost();
    init_settings();
  }
});

export {
  getFastIconString,
  init_FastIcon,
  FastModePicker,
  call,
  init_fast
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmFzdEljb24udHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9mYXN0L2Zhc3QudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExJR0hUTklOR19CT0xUIH0gZnJvbSAnLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZVRoZW1lU2V0dGluZyB9IGZyb20gJy4uL3V0aWxzL3N5c3RlbVRoZW1lLmpzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vY29sb3IuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvb2xkb3duPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmFzdEljb24oeyBjb29sZG93biB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmIChjb29sZG93bikge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBjb2xvcj1cInByb21wdEJvcmRlclwiIGRpbUNvbG9yPlxuICAgICAgICB7TElHSFROSU5HX0JPTFR9XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG4gIHJldHVybiA8VGV4dCBjb2xvcj1cImZhc3RNb2RlXCI+e0xJR0hUTklOR19CT0xUfTwvVGV4dD5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhc3RJY29uU3RyaW5nKGFwcGx5Q29sb3IgPSB0cnVlLCBjb29sZG93biA9IGZhbHNlKTogc3RyaW5nIHtcbiAgaWYgKCFhcHBseUNvbG9yKSB7XG4gICAgcmV0dXJuIExJR0hUTklOR19CT0xUXG4gIH1cbiAgY29uc3QgdGhlbWVOYW1lID0gcmVzb2x2ZVRoZW1lU2V0dGluZyhnZXRHbG9iYWxDb25maWcoKS50aGVtZSlcbiAgaWYgKGNvb2xkb3duKSB7XG4gICAgcmV0dXJuIGNoYWxrLmRpbShjb2xvcigncHJvbXB0Qm9yZGVyJywgdGhlbWVOYW1lKShMSUdIVE5JTkdfQk9MVCkpXG4gIH1cbiAgcmV0dXJuIGNvbG9yKCdmYXN0TW9kZScsIHRoZW1lTmFtZSkoTElHSFROSU5HX0JPTFQpXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUge1xuICBDb21tYW5kUmVzdWx0RGlzcGxheSxcbiAgTG9jYWxKU1hDb21tYW5kQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgRmFzdEljb24sIGdldEZhc3RJY29uU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GYXN0SWNvbi5qcydcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIHR5cGUgQXBwU3RhdGUsXG4gIHVzZUFwcFN0YXRlLFxuICB1c2VTZXRBcHBTdGF0ZSxcbn0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQge1xuICBjbGVhckZhc3RNb2RlQ29vbGRvd24sXG4gIEZBU1RfTU9ERV9NT0RFTF9ESVNQTEFZLFxuICBnZXRGYXN0TW9kZU1vZGVsLFxuICBnZXRGYXN0TW9kZVJ1bnRpbWVTdGF0ZSxcbiAgZ2V0RmFzdE1vZGVVbmF2YWlsYWJsZVJlYXNvbixcbiAgaXNGYXN0TW9kZUVuYWJsZWQsXG4gIGlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsLFxuICBwcmVmZXRjaEZhc3RNb2RlU3RhdHVzLFxufSBmcm9tICcuLi8uLi91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgZm9ybWF0TW9kZWxQcmljaW5nLCBnZXRPcHVzNDZDb3N0VGllciB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsQ29zdC5qcydcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbmZ1bmN0aW9uIGFwcGx5RmFzdE1vZGUoXG4gIGVuYWJsZTogYm9vbGVhbixcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuKTogdm9pZCB7XG4gIGNsZWFyRmFzdE1vZGVDb29sZG93bigpXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7XG4gICAgZmFzdE1vZGU6IGVuYWJsZSA/IHRydWUgOiB1bmRlZmluZWQsXG4gIH0pXG4gIGlmIChlbmFibGUpIHtcbiAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgIC8vIE9ubHkgc3dpdGNoIG1vZGVsIGlmIGN1cnJlbnQgbW9kZWwgZG9lc24ndCBzdXBwb3J0IGZhc3QgbW9kZVxuICAgICAgY29uc3QgbmVlZHNNb2RlbFN3aXRjaCA9ICFpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbChwcmV2Lm1haW5Mb29wTW9kZWwpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICAuLi4obmVlZHNNb2RlbFN3aXRjaFxuICAgICAgICAgID8geyBtYWluTG9vcE1vZGVsOiBnZXRGYXN0TW9kZU1vZGVsKCksIG1haW5Mb29wTW9kZWxGb3JTZXNzaW9uOiBudWxsIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgZmFzdE1vZGU6IHRydWUsXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGZhc3RNb2RlOiBmYWxzZSB9KSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmFzdE1vZGVQaWNrZXIoe1xuICBvbkRvbmUsXG4gIHVuYXZhaWxhYmxlUmVhc29uLFxufToge1xuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxuICB1bmF2YWlsYWJsZVJlYXNvbjogc3RyaW5nIHwgbnVsbFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IG1vZGVsID0gdXNlQXBwU3RhdGUocyA9PiBzLm1haW5Mb29wTW9kZWwpXG4gIGNvbnN0IGluaXRpYWxGYXN0TW9kZSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5mYXN0TW9kZSlcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IFtlbmFibGVGYXN0TW9kZSwgc2V0RW5hYmxlRmFzdE1vZGVdID0gdXNlU3RhdGUoaW5pdGlhbEZhc3RNb2RlID8/IGZhbHNlKVxuICBjb25zdCBydW50aW1lU3RhdGUgPSBnZXRGYXN0TW9kZVJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGlzQ29vbGRvd24gPSBydW50aW1lU3RhdGUuc3RhdHVzID09PSAnY29vbGRvd24nXG4gIGNvbnN0IGlzVW5hdmFpbGFibGUgPSB1bmF2YWlsYWJsZVJlYXNvbiAhPT0gbnVsbFxuICBjb25zdCBwcmljaW5nID0gZm9ybWF0TW9kZWxQcmljaW5nKGdldE9wdXM0NkNvc3RUaWVyKHRydWUpKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm0oKTogdm9pZCB7XG4gICAgaWYgKGlzVW5hdmFpbGFibGUpIHJldHVyblxuICAgIGFwcGx5RmFzdE1vZGUoZW5hYmxlRmFzdE1vZGUsIHNldEFwcFN0YXRlKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9mYXN0X21vZGVfdG9nZ2xlZCcsIHtcbiAgICAgIGVuYWJsZWQ6IGVuYWJsZUZhc3RNb2RlLFxuICAgICAgc291cmNlOlxuICAgICAgICAncGlja2VyJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gICAgaWYgKGVuYWJsZUZhc3RNb2RlKSB7XG4gICAgICBjb25zdCBmYXN0SWNvbiA9IGdldEZhc3RJY29uU3RyaW5nKGVuYWJsZUZhc3RNb2RlKVxuICAgICAgY29uc3QgbW9kZWxVcGRhdGVkID0gIWlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsKG1vZGVsKVxuICAgICAgICA/IGAgwrcgbW9kZWwgc2V0IHRvICR7RkFTVF9NT0RFX01PREVMX0RJU1BMQVl9YFxuICAgICAgICA6ICcnXG4gICAgICBvbkRvbmUoYCR7ZmFzdEljb259IEZhc3QgbW9kZSBPTiR7bW9kZWxVcGRhdGVkfSDCtyAke3ByaWNpbmd9YClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBmYXN0TW9kZTogZmFsc2UgfSkpXG4gICAgICBvbkRvbmUoYEZhc3QgbW9kZSBPRkZgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbCgpOiB2b2lkIHtcbiAgICBpZiAoaXNVbmF2YWlsYWJsZSkge1xuICAgICAgLy8gRW5zdXJlIGZhc3QgbW9kZSBpcyBvZmYgaWYgdGhlIG9yZyBoYXMgZGlzYWJsZWQgaXRcbiAgICAgIGlmIChpbml0aWFsRmFzdE1vZGUpIHtcbiAgICAgICAgYXBwbHlGYXN0TW9kZShmYWxzZSwgc2V0QXBwU3RhdGUpXG4gICAgICB9XG4gICAgICBvbkRvbmUoJ0Zhc3QgbW9kZSBPRkYnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IGluaXRpYWxGYXN0TW9kZVxuICAgICAgPyBgJHtnZXRGYXN0SWNvblN0cmluZygpfSBLZXB0IEZhc3QgbW9kZSBPTmBcbiAgICAgIDogYEtlcHQgRmFzdCBtb2RlIE9GRmBcbiAgICBvbkRvbmUobWVzc2FnZSwgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmIChpc1VuYXZhaWxhYmxlKSByZXR1cm5cbiAgICBzZXRFbmFibGVGYXN0TW9kZShwcmV2ID0+ICFwcmV2KVxuICB9XG5cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ2NvbmZpcm06eWVzJzogaGFuZGxlQ29uZmlybSxcbiAgICAgICdjb25maXJtOm5leHRGaWVsZCc6IGhhbmRsZVRvZ2dsZSxcbiAgICAgICdjb25maXJtOm5leHQnOiBoYW5kbGVUb2dnbGUsXG4gICAgICAnY29uZmlybTpwcmV2aW91cyc6IGhhbmRsZVRvZ2dsZSxcbiAgICAgICdjb25maXJtOmN5Y2xlTW9kZSc6IGhhbmRsZVRvZ2dsZSxcbiAgICAgICdjb25maXJtOnRvZ2dsZSc6IGhhbmRsZVRvZ2dsZSxcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSxcbiAgKVxuXG4gIGNvbnN0IHRpdGxlID0gKFxuICAgIDxUZXh0PlxuICAgICAgPEZhc3RJY29uIGNvb2xkb3duPXtpc0Nvb2xkb3dufSAvPiBGYXN0IG1vZGUgKHJlc2VhcmNoIHByZXZpZXcpXG4gICAgPC9UZXh0PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdWJ0aXRsZT17YEhpZ2gtc3BlZWQgbW9kZSBmb3IgJHtGQVNUX01PREVfTU9ERUxfRElTUExBWX0uIEJpbGxlZCBhcyBleHRyYSB1c2FnZSBhdCBhIHByZW1pdW0gcmF0ZS4gU2VwYXJhdGUgcmF0ZSBsaW1pdHMgYXBwbHkuYH1cbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cImZhc3RNb2RlXCJcbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiBpc1VuYXZhaWxhYmxlID8gKFxuICAgICAgICAgIDxUZXh0PkVzYyB0byBjYW5jZWw8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQ+VGFiIHRvIHRvZ2dsZSDCtyBFbnRlciB0byBjb25maXJtIMK3IEVzYyB0byBjYW5jZWw8L1RleHQ+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA+XG4gICAgICB7dW5hdmFpbGFibGVSZWFzb24gPyAoXG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPnt1bmF2YWlsYWJsZVJlYXNvbn08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezB9IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsyfT5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD5GYXN0IG1vZGU8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgY29sb3I9e2VuYWJsZUZhc3RNb2RlID8gJ2Zhc3RNb2RlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBib2xkPXtlbmFibGVGYXN0TW9kZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlbmFibGVGYXN0TW9kZSA/ICdPTiAnIDogJ09GRid9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3ByaWNpbmd9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7aXNDb29sZG93biAmJiBydW50aW1lU3RhdGUuc3RhdHVzID09PSAnY29vbGRvd24nICYmIChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIHtydW50aW1lU3RhdGUucmVhc29uID09PSAnb3ZlcmxvYWRlZCdcbiAgICAgICAgICAgICAgICAgID8gJ0Zhc3QgbW9kZSBvdmVybG9hZGVkIGFuZCBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZSdcbiAgICAgICAgICAgICAgICAgIDogXCJZb3UndmUgaGl0IHlvdXIgZmFzdCBsaW1pdFwifVxuICAgICAgICAgICAgICAgIHsnIMK3IHJlc2V0cyBpbiAnfVxuICAgICAgICAgICAgICAgIHtmb3JtYXREdXJhdGlvbihydW50aW1lU3RhdGUucmVzZXRBdCAtIERhdGUubm93KCksIHtcbiAgICAgICAgICAgICAgICAgIGhpZGVUcmFpbGluZ1plcm9zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgTGVhcm4gbW9yZTp7JyAnfVxuICAgICAgICA8TGluayB1cmw9XCJodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL2Zhc3QtbW9kZVwiPlxuICAgICAgICAgIGh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vZmFzdC1tb2RlXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVGYXN0TW9kZVNob3J0Y3V0KFxuICBlbmFibGU6IGJvb2xlYW4sXG4gIGdldEFwcFN0YXRlOiAoKSA9PiBBcHBTdGF0ZSxcbiAgc2V0QXBwU3RhdGU6IChmOiAocHJldjogQXBwU3RhdGUpID0+IEFwcFN0YXRlKSA9PiB2b2lkLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdW5hdmFpbGFibGVSZWFzb24gPSBnZXRGYXN0TW9kZVVuYXZhaWxhYmxlUmVhc29uKClcbiAgaWYgKHVuYXZhaWxhYmxlUmVhc29uKSB7XG4gICAgcmV0dXJuIGBGYXN0IG1vZGUgdW5hdmFpbGFibGU6ICR7dW5hdmFpbGFibGVSZWFzb259YFxuICB9XG5cbiAgY29uc3QgeyBtYWluTG9vcE1vZGVsIH0gPSBnZXRBcHBTdGF0ZSgpXG4gIGFwcGx5RmFzdE1vZGUoZW5hYmxlLCBzZXRBcHBTdGF0ZSlcbiAgbG9nRXZlbnQoJ3Rlbmd1X2Zhc3RfbW9kZV90b2dnbGVkJywge1xuICAgIGVuYWJsZWQ6IGVuYWJsZSxcbiAgICBzb3VyY2U6XG4gICAgICAnc2hvcnRjdXQnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgaWYgKGVuYWJsZSkge1xuICAgIGNvbnN0IGZhc3RJY29uID0gZ2V0RmFzdEljb25TdHJpbmcodHJ1ZSlcbiAgICBjb25zdCBtb2RlbFVwZGF0ZWQgPSAhaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwobWFpbkxvb3BNb2RlbClcbiAgICAgID8gYCDCtyBtb2RlbCBzZXQgdG8gJHtGQVNUX01PREVfTU9ERUxfRElTUExBWX1gXG4gICAgICA6ICcnXG4gICAgY29uc3QgcHJpY2luZyA9IGZvcm1hdE1vZGVsUHJpY2luZyhnZXRPcHVzNDZDb3N0VGllcih0cnVlKSlcbiAgICByZXR1cm4gYCR7ZmFzdEljb259IEZhc3QgbW9kZSBPTiR7bW9kZWxVcGRhdGVkfSDCtyAke3ByaWNpbmd9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBgRmFzdCBtb2RlIE9GRmBcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIGFyZ3M/OiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZSB8IG51bGw+IHtcbiAgaWYgKCFpc0Zhc3RNb2RlRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIEZldGNoIG9yZyBmYXN0IG1vZGUgc3RhdHVzIGJlZm9yZSBzaG93aW5nIHRoZSBwaWNrZXIuIFdlIG11c3Qga25vd1xuICAvLyB3aGV0aGVyIHRoZSBvcmcgaGFzIGRpc2FibGVkIGZhc3QgbW9kZSBiZWZvcmUgYWxsb3dpbmcgYW55IHRvZ2dsZS5cbiAgLy8gSWYgYSBzdGFydHVwIHByZWZldGNoIGlzIGFscmVhZHkgaW4gZmxpZ2h0LCB0aGlzIGF3YWl0cyBpdC5cbiAgYXdhaXQgcHJlZmV0Y2hGYXN0TW9kZVN0YXR1cygpXG5cbiAgY29uc3QgYXJnID0gYXJncz8udHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgaWYgKGFyZyA9PT0gJ29uJyB8fCBhcmcgPT09ICdvZmYnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlRmFzdE1vZGVTaG9ydGN1dChcbiAgICAgIGFyZyA9PT0gJ29uJyxcbiAgICAgIGNvbnRleHQuZ2V0QXBwU3RhdGUsXG4gICAgICBjb250ZXh0LnNldEFwcFN0YXRlLFxuICAgIClcbiAgICBvbkRvbmUocmVzdWx0KVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB1bmF2YWlsYWJsZVJlYXNvbiA9IGdldEZhc3RNb2RlVW5hdmFpbGFibGVSZWFzb24oKVxuICBsb2dFdmVudCgndGVuZ3VfZmFzdF9tb2RlX3BpY2tlcl9zaG93bicsIHtcbiAgICB1bmF2YWlsYWJsZV9yZWFzb246ICh1bmF2YWlsYWJsZVJlYXNvbiA/P1xuICAgICAgJycpIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPEZhc3RNb2RlUGlja2VyIG9uRG9uZT17b25Eb25lfSB1bmF2YWlsYWJsZVJlYXNvbj17dW5hdmFpbGFibGVSZWFzb259IC8+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBQUEsU0FBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsQ0FBQTtBQUFrQixRQUFBO0lBQUFDO0VBQUEsSUFBQUg7QUFDdkIsTUFBSUcsVUFBUTtBQUFBLFFBQUFDO0FBQUEsUUFBQUgsRUFBQSxDQUFBLE1BQUFJLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFUkYsTUFBQUEsTUFBQSw4QkFBQyxjQUFXLE9BQUEsZ0JBQWUsVUFBQSxRQUN4QkcsY0FDSDtBQUFPTixRQUFBLENBQUEsSUFBQUc7SUFBQSxPQUFBO0FBQUFBLE1BQUFBLE1BQUFILEVBQUEsQ0FBQTtJQUFBO0FBQUEsV0FGUEc7RUFFTztBQUVWLE1BQUFBO0FBQUEsTUFBQUgsRUFBQSxDQUFBLE1BQUFJLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDTUYsU0FBQSw4QkFBQyxjQUFXLE9BQUEsY0FBWUcsY0FBZTtBQUFPTixNQUFBLENBQUEsSUFBQUc7RUFBQSxPQUFBO0FBQUFB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dkMsVUFBTUMsZUFBZSxDQUFDdEMsMkJBQTJCQyxhQUFhLElBQzFELHNCQUFtQnNDLHVCQUF1QixLQUMxQztBQUNKLFVBQU1ULFVBQVVGLG1CQUFtQkMsa0JBQWtCLElBQUksQ0FBQztBQUMxRCxXQUFPLEdBQUdPLFFBQVEsZ0JBQWdCRSxZQUFZLFNBQU1SLE9BQU87RUFDN0QsT0FBTztBQUNMLFdBQU87RUFDVDtBQUNGO0FBRUEsZUFBc0IyQyxLQUNwQmpFLFFBQ0EwQyxTQUNBd0IsTUFDaUM7QUFDakMsTUFBSSxDQUFDQyxrQkFBa0IsR0FBRztBQUN4QixXQUFPO0VBQ1Q7QUFLQSxRQUFNQyx1QkFBdUI7QUFFN0IsUUFBTUMsTUFBTUgsTUFBTUksS0FBSyxFQUFFQyxZQUFZO0FBQ3JDLE1BQUlGLFFBQVEsUUFBUUEsUUFBUSxPQUFPO0FBQ2pDLFVBQU1HLFNBQVMsTUFBTVYsdUJBQ25CTyxRQUFRLE1BQ1IzQixRQUFRcUIsYUFDUnJCLFFBQVF6RCxXQUNWO0FBQ0FlLFdBQU93RSxNQUFNO0FBQ2IsV0FBTztFQUNUO0FBRUEsUUFBTXZFLG9CQUFvQitELDZCQUE2QjtBQUN2RHZDLFdBQVMsZ0NBQWdDO0lBQ3ZDZ0Qsb0JBQXFCeEUscUJBQ25CO0VBQ0osQ0FBQztBQUNELFNBQ0UsOEJBQUMsa0JBQWUsUUFBZ0IsbUJBQXFDO0FBRXpFOzs7O0FBblFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQVVBO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJGYXN0SWNvbiIsICJ0MCIsICIkIiwgIl9jIiwgImNvb2xkb3duIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiTElHSFROSU5HX0JPTFQiLCAiZ2V0RmFzdEljb25TdHJpbmciLCAiYXBwbHlDb2xvciIsICJ0aGVtZU5hbWUiLCAicmVzb2x2ZVRoZW1lU2V0dGluZyIsICJnZXRHbG9iYWxDb25maWciLCAidGhlbWUiLCAiY2hhbGsiLCAiZGltIiwgImNvbG9yIiwgImFwcGx5RmFzdE1vZGUiLCAiZW5hYmxlIiwgInNldEFwcFN0YXRlIiwgImNsZWFyRmFzdE1vZGVDb29sZG93biIsICJ1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSIsICJmYXN0TW9kZSIsICJ1bmRlZmluZWQiLCAicHJldiIsICJuZWVkc01vZGVsU3dpdGNoIiwgImlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsIiwgIm1haW5Mb29wTW9kZWwiLCAiZ2V0RmFzdE1vZGVNb2RlbCIsICJtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbiIsICJGYXN0TW9kZVBpY2tlciIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJ1bmF2YWlsYWJsZVJlYXNvbiIsICJtb2RlbCIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcCIsICJpbml0aWFsRmFzdE1vZGUiLCAiX3RlbXAyIiwgInVzZVNldEFwcFN0YXRlIiwgImVuYWJsZUZhc3RNb2RlIiwgInNldEVuYWJsZUZhc3RNb2RlIiwgInVzZVN0YXRlIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiZ2V0RmFzdE1vZGVSdW50aW1lU3RhdGUiLCAicnVudGltZVN0YXRlIiwgImlzQ29vbGRvd24iLCAic3RhdHVzIiwgImlzVW5hdmFpbGFibGUiLCAidDIiLCAiZm9ybWF0TW9kZWxQcmljaW5nIiwgImdldE9wdXM0NkNvc3RUaWVyIiwgInByaWNpbmciLCAidDMiLCAiaGFuZGxlQ29uZmlybSIsICJsb2dFdmVudCIsICJlbmFibGVkIiwgInNvdXJjZSIsICJmYXN0SWNvbiIsICJnZXRGYXN0SWNvblN0cmluZyIsICJtb2RlbFVwZGF0ZWQiLCAiRkFTVF9NT0RFX01PREVMX0RJU1BMQVkiLCAiX3RlbXAzIiwgInQ0IiwgImhhbmRsZUNhbmNlbCIsICJkaXNwbGF5IiwgIm1lc3NhZ2UiLCAidDUiLCAiaGFuZGxlVG9nZ2xlIiwgIl90ZW1wNCIsICJ0NiIsICJ0NyIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmdzIiwgInQ4IiwgInRpdGxlIiwgInQ5IiwgImV4aXRTdGF0ZSIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAidDEwIiwgInJlYXNvbiIsICJmb3JtYXREdXJhdGlvbiIsICJyZXNldEF0IiwgIkRhdGUiLCAibm93IiwgImhpZGVUcmFpbGluZ1plcm9zIiwgInQxMSIsICJ0MTIiLCAicHJldl8wIiwgInNfMCIsICJzIiwgImhhbmRsZUZhc3RNb2RlU2hvcnRjdXQiLCAiZ2V0QXBwU3RhdGUiLCAiZ2V0RmFzdE1vZGVVbmF2YWlsYWJsZVJlYXNvbiIsICJjYWxsIiwgImFyZ3MiLCAiaXNGYXN0TW9kZUVuYWJsZWQiLCAicHJlZmV0Y2hGYXN0TW9kZVN0YXR1cyIsICJhcmciLCAidHJpbSIsICJ0b0xvd2VyQ2FzZSIsICJyZXN1bHQiLCAidW5hdmFpbGFibGVfcmVhc29uIl0KfQo=
