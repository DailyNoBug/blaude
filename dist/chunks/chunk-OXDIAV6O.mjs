#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  convertEffortValueToLevel,
  getDefaultEffortForModel,
  getDisplayedEffortLevel,
  getModelOptions,
  init_AppState,
  init_CustomSelect,
  init_effort,
  init_modelOptions,
  modelSupportsEffort,
  modelSupportsMaxEffort,
  resolvePickerEffortPersistence,
  toPersistableEffort,
  useAppState,
  useSetAppState
} from "./chunk-OPLSBIOC.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_KeyboardShortcutHint
} from "./chunk-SR5JKAMQ.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-ADZQUMT7.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  useKeybindings
} from "./chunk-2LTMY2QU.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  EFFORT_HIGH,
  EFFORT_LOW,
  EFFORT_MAX,
  EFFORT_MEDIUM,
  FAST_MODE_MODEL_DISPLAY,
  capitalize_default,
  getDefaultMainLoopModel,
  getSettingsForSource,
  has1mContext,
  init_auth,
  init_capitalize,
  init_context,
  init_fastMode,
  init_figures,
  init_model,
  init_settings2 as init_settings,
  isClaudeAISubscriber,
  isFastModeAvailable,
  isFastModeCooldown,
  isFastModeEnabled,
  modelDisplayString,
  parseUserSpecifiedModel,
  updateSettingsForSource
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/EffortIndicator.ts
function getEffortNotificationText(effortValue, model) {
  if (!modelSupportsEffort(model)) return void 0;
  const level = getDisplayedEffortLevel(model, effortValue);
  return `${effortLevelToSymbol(level)} ${level} \xB7 /effort`;
}
function effortLevelToSymbol(level) {
  switch (level) {
    case "low":
      return EFFORT_LOW;
    case "medium":
      return EFFORT_MEDIUM;
    case "high":
      return EFFORT_HIGH;
    case "max":
      return EFFORT_MAX;
    default:
      return EFFORT_HIGH;
  }
}
var init_EffortIndicator = __esm({
  "src/components/EffortIndicator.ts"() {
    init_figures();
    init_effort();
  }
});

// src/components/ModelPicker.tsx
function ModelPicker(t0) {
  const $ = c(82);
  const {
    initial,
    sessionModel,
    onSelect,
    onCancel,
    isStandaloneCommand,
    showFastModeNotice,
    headerText,
    skipSettingsWrite
  } = t0;
  const setAppState = useSetAppState();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const initialValue = initial === null ? NO_PREFERENCE : initial;
  const [focusedValue, setFocusedValue] = useState(initialValue);
  const isFastMode = useAppState(_temp);
  const [hasToggledEffort, setHasToggledEffort] = useState(false);
  const effortValue = useAppState(_temp2);
  let t1;
  if ($[0] !== effortValue) {
    t1 = effortValue !== void 0 ? convertEffortValueToLevel(effortValue) : void 0;
    $[0] = effortValue;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [effort, setEffort] = useState(t1);
  const t2 = isFastMode ?? false;
  let t3;
  if ($[2] !== t2) {
    t3 = getModelOptions(t2);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const modelOptions = t3;
  let t4;
  bb0: {
    if (initial !== null && !modelOptions.some((opt) => opt.value === initial)) {
      let t52;
      if ($[4] !== initial) {
        t52 = modelDisplayString(initial);
        $[4] = initial;
        $[5] = t52;
      } else {
        t52 = $[5];
      }
      let t62;
      if ($[6] !== initial || $[7] !== t52) {
        t62 = {
          value: initial,
          label: t52,
          description: "Current model"
        };
        $[6] = initial;
        $[7] = t52;
        $[8] = t62;
      } else {
        t62 = $[8];
      }
      let t72;
      if ($[9] !== modelOptions || $[10] !== t62) {
        t72 = [...modelOptions, t62];
        $[9] = modelOptions;
        $[10] = t62;
        $[11] = t72;
      } else {
        t72 = $[11];
      }
      t4 = t72;
      break bb0;
    }
    t4 = modelOptions;
  }
  const optionsWithInitial = t4;
  let t5;
  if ($[12] !== optionsWithInitial) {
    t5 = optionsWithInitial.map(_temp3);
    $[12] = optionsWithInitial;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const selectOptions = t5;
  let t6;
  if ($[14] !== initialValue || $[15] !== selectOptions) {
    t6 = selectOptions.some((_) => _.value === initialValue) ? initialValue : selectOptions[0]?.value ?? void 0;
    $[14] = initialValue;
    $[15] = selectOptions;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const initialFocusValue = t6;
  const visibleCount = Math.min(10, selectOptions.length);
  const hiddenCount = Math.max(0, selectOptions.length - visibleCount);
  let t7;
  if ($[17] !== focusedValue || $[18] !== selectOptions) {
    t7 = selectOptions.find((opt_1) => opt_1.value === focusedValue)?.label;
    $[17] = focusedValue;
    $[18] = selectOptions;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  const focusedModelName = t7;
  let focusedSupportsEffort;
  let t8;
  if ($[20] !== focusedValue) {
    const focusedModel = resolveOptionModel(focusedValue);
    focusedSupportsEffort = focusedModel ? modelSupportsEffort(focusedModel) : false;
    t8 = focusedModel ? modelSupportsMaxEffort(focusedModel) : false;
    $[20] = focusedValue;
    $[21] = focusedSupportsEffort;
    $[22] = t8;
  } else {
    focusedSupportsEffort = $[21];
    t8 = $[22];
  }
  const focusedSupportsMax = t8;
  let t9;
  if ($[23] !== focusedValue) {
    t9 = getDefaultEffortLevelForOption(focusedValue);
    $[23] = focusedValue;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  const focusedDefaultEffort = t9;
  const displayEffort = effort === "max" && !focusedSupportsMax ? "high" : effort;
  let t10;
  if ($[25] !== effortValue || $[26] !== hasToggledEffort) {
    t10 = (value) => {
      setFocusedValue(value);
      if (!hasToggledEffort && effortValue === void 0) {
        setEffort(getDefaultEffortLevelForOption(value));
      }
    };
    $[25] = effortValue;
    $[26] = hasToggledEffort;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  const handleFocus = t10;
  let t11;
  if ($[28] !== focusedDefaultEffort || $[29] !== focusedSupportsEffort || $[30] !== focusedSupportsMax) {
    t11 = (direction) => {
      if (!focusedSupportsEffort) {
        return;
      }
      setEffort((prev) => cycleEffortLevel(prev ?? focusedDefaultEffort, direction, focusedSupportsMax));
      setHasToggledEffort(true);
    };
    $[28] = focusedDefaultEffort;
    $[29] = focusedSupportsEffort;
    $[30] = focusedSupportsMax;
    $[31] = t11;
  } else {
    t11 = $[31];
  }
  const handleCycleEffort = t11;
  let t12;
  if ($[32] !== handleCycleEffort) {
    t12 = {
      "modelPicker:decreaseEffort": () => handleCycleEffort("left"),
      "modelPicker:increaseEffort": () => handleCycleEffort("right")
    };
    $[32] = handleCycleEffort;
    $[33] = t12;
  } else {
    t12 = $[33];
  }
  let t13;
  if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = {
      context: "ModelPicker"
    };
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  useKeybindings(t12, t13);
  let t14;
  if ($[35] !== effort || $[36] !== hasToggledEffort || $[37] !== onSelect || $[38] !== setAppState || $[39] !== skipSettingsWrite) {
    t14 = function handleSelect2(value_0) {
      logEvent("tengu_model_command_menu_effort", {
        effort
      });
      if (!skipSettingsWrite) {
        const effortLevel = resolvePickerEffortPersistence(effort, getDefaultEffortLevelForOption(value_0), getSettingsForSource("userSettings")?.effortLevel, hasToggledEffort);
        const persistable = toPersistableEffort(effortLevel);
        if (persistable !== void 0) {
          updateSettingsForSource("userSettings", {
            effortLevel: persistable
          });
        }
        setAppState((prev_0) => ({
          ...prev_0,
          effortValue: effortLevel
        }));
      }
      const selectedModel = resolveOptionModel(value_0);
      const selectedEffort = hasToggledEffort && selectedModel && modelSupportsEffort(selectedModel) ? effort : void 0;
      if (value_0 === NO_PREFERENCE) {
        onSelect(null, selectedEffort);
        return;
      }
      onSelect(value_0, selectedEffort);
    };
    $[35] = effort;
    $[36] = hasToggledEffort;
    $[37] = onSelect;
    $[38] = setAppState;
    $[39] = skipSettingsWrite;
    $[40] = t14;
  } else {
    t14 = $[40];
  }
  const handleSelect = t14;
  let t15;
  if ($[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ createElement(ThemedText, { color: "remember", bold: true }, "Select model");
    $[41] = t15;
  } else {
    t15 = $[41];
  }
  const t16 = headerText ?? "Switch between Claude models. Applies to this session and future Claude Code sessions. For other/previous model names, specify with --model.";
  let t17;
  if ($[42] !== t16) {
    t17 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t16);
    $[42] = t16;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  let t18;
  if ($[44] !== sessionModel) {
    t18 = sessionModel && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Currently using ", modelDisplayString(sessionModel), " for this session (set by plan mode). Selecting a model will undo this.");
    $[44] = sessionModel;
    $[45] = t18;
  } else {
    t18 = $[45];
  }
  let t19;
  if ($[46] !== t17 || $[47] !== t18) {
    t19 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, t15, t17, t18);
    $[46] = t17;
    $[47] = t18;
    $[48] = t19;
  } else {
    t19 = $[48];
  }
  const t20 = onCancel ?? _temp4;
  let t21;
  if ($[49] !== handleFocus || $[50] !== handleSelect || $[51] !== initialFocusValue || $[52] !== initialValue || $[53] !== selectOptions || $[54] !== t20 || $[55] !== visibleCount) {
    t21 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(Select, { defaultValue: initialValue, defaultFocusValue: initialFocusValue, options: selectOptions, onChange: handleSelect, onFocus: handleFocus, onCancel: t20, visibleOptionCount: visibleCount }));
    $[49] = handleFocus;
    $[50] = handleSelect;
    $[51] = initialFocusValue;
    $[52] = initialValue;
    $[53] = selectOptions;
    $[54] = t20;
    $[55] = visibleCount;
    $[56] = t21;
  } else {
    t21 = $[56];
  }
  let t22;
  if ($[57] !== hiddenCount) {
    t22 = hiddenCount > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "and ", hiddenCount, " more\u2026"));
    $[57] = hiddenCount;
    $[58] = t22;
  } else {
    t22 = $[58];
  }
  let t23;
  if ($[59] !== t21 || $[60] !== t22) {
    t23 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, t21, t22);
    $[59] = t21;
    $[60] = t22;
    $[61] = t23;
  } else {
    t23 = $[61];
  }
  let t24;
  if ($[62] !== displayEffort || $[63] !== focusedDefaultEffort || $[64] !== focusedModelName || $[65] !== focusedSupportsEffort) {
    t24 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, focusedSupportsEffort ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(EffortLevelIndicator, { effort: displayEffort }), " ", capitalize_default(displayEffort), " effort", displayEffort === focusedDefaultEffort ? " (default)" : "", " ", /* @__PURE__ */ createElement(ThemedText, { color: "subtle" }, "\u2190 \u2192 to adjust")) : /* @__PURE__ */ createElement(ThemedText, { color: "subtle" }, /* @__PURE__ */ createElement(EffortLevelIndicator, { effort: void 0 }), " Effort not supported", focusedModelName ? ` for ${focusedModelName}` : ""));
    $[62] = displayEffort;
    $[63] = focusedDefaultEffort;
    $[64] = focusedModelName;
    $[65] = focusedSupportsEffort;
    $[66] = t24;
  } else {
    t24 = $[66];
  }
  let t25;
  if ($[67] !== showFastModeNotice) {
    t25 = isFastModeEnabled() ? showFastModeNotice ? /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Fast mode is ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "ON"), " and available with", " ", FAST_MODE_MODEL_DISPLAY, " only (/fast). Switching to other models turn off fast mode.")) : isFastModeAvailable() && !isFastModeCooldown() ? /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Use ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "/fast"), " to turn on Fast mode (", FAST_MODE_MODEL_DISPLAY, " only).")) : null : null;
    $[67] = showFastModeNotice;
    $[68] = t25;
  } else {
    t25 = $[68];
  }
  let t26;
  if ($[69] !== t19 || $[70] !== t23 || $[71] !== t24 || $[72] !== t25) {
    t26 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t19, t23, t24, t25);
    $[69] = t19;
    $[70] = t23;
    $[71] = t24;
    $[72] = t25;
    $[73] = t26;
  } else {
    t26 = $[73];
  }
  let t27;
  if ($[74] !== exitState || $[75] !== isStandaloneCommand) {
    t27 = isStandaloneCommand && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:cancel", context: "Select", fallback: "Esc", description: "exit" })));
    $[74] = exitState;
    $[75] = isStandaloneCommand;
    $[76] = t27;
  } else {
    t27 = $[76];
  }
  let t28;
  if ($[77] !== t26 || $[78] !== t27) {
    t28 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t26, t27);
    $[77] = t26;
    $[78] = t27;
    $[79] = t28;
  } else {
    t28 = $[79];
  }
  const content = t28;
  if (!isStandaloneCommand) {
    return content;
  }
  let t29;
  if ($[80] !== content) {
    t29 = /* @__PURE__ */ createElement(Pane, { color: "permission" }, content);
    $[80] = content;
    $[81] = t29;
  } else {
    t29 = $[81];
  }
  return t29;
}
function _temp4() {
}
function _temp3(opt_0) {
  return {
    ...opt_0,
    value: opt_0.value === null ? NO_PREFERENCE : opt_0.value
  };
}
function _temp2(s_0) {
  return s_0.effortValue;
}
function _temp(s) {
  return isFastModeEnabled() ? s.fastMode : false;
}
function resolveOptionModel(value) {
  if (!value) return void 0;
  return value === NO_PREFERENCE ? getDefaultMainLoopModel() : parseUserSpecifiedModel(value);
}
function EffortLevelIndicator(t0) {
  const $ = c(5);
  const {
    effort
  } = t0;
  const t1 = effort ? "claude" : "subtle";
  const t2 = effort ?? "low";
  let t3;
  if ($[0] !== t2) {
    t3 = effortLevelToSymbol(t2);
    $[0] = t2;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] !== t1 || $[3] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedText, { color: t1 }, t3);
    $[2] = t1;
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
}
function cycleEffortLevel(current, direction, includeMax) {
  const levels = includeMax ? ["low", "medium", "high", "max"] : ["low", "medium", "high"];
  const idx = levels.indexOf(current);
  const currentIndex = idx !== -1 ? idx : levels.indexOf("high");
  if (direction === "right") {
    return levels[(currentIndex + 1) % levels.length];
  } else {
    return levels[(currentIndex - 1 + levels.length) % levels.length];
  }
}
function getDefaultEffortLevelForOption(value) {
  const resolved = resolveOptionModel(value) ?? getDefaultMainLoopModel();
  const defaultValue = getDefaultEffortForModel(resolved);
  return defaultValue !== void 0 ? convertEffortValueToLevel(defaultValue) : "high";
}
var NO_PREFERENCE;
var init_ModelPicker = __esm({
  "src/components/ModelPicker.tsx"() {
    init_react_compiler_runtime();
    init_capitalize();
    init_react();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_analytics();
    init_fastMode();
    init_ink();
    init_useKeybinding();
    init_AppState();
    init_effort();
    init_model();
    init_modelOptions();
    init_settings();
    init_ConfigurableShortcutHint();
    init_CustomSelect();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Pane();
    init_EffortIndicator();
    NO_PREFERENCE = "__NO_PREFERENCE__";
  }
});

// src/utils/extraUsage.ts
function isBilledAsExtraUsage(model, isFastMode, isOpus1mMerged) {
  if (!isClaudeAISubscriber()) return false;
  if (isFastMode) return true;
  if (model === null || !has1mContext(model)) return false;
  const m = model.toLowerCase().replace(/\[1m\]$/, "").trim();
  const isOpus46 = m === "opus" || m.includes("opus-4-6");
  const isSonnet46 = m === "sonnet" || m.includes("sonnet-4-6");
  if (isOpus46 && isOpus1mMerged) return false;
  return isOpus46 || isSonnet46;
}
var init_extraUsage = __esm({
  "src/utils/extraUsage.ts"() {
    init_auth();
    init_context();
  }
});

export {
  getEffortNotificationText,
  effortLevelToSymbol,
  init_EffortIndicator,
  ModelPicker,
  init_ModelPicker,
  isBilledAsExtraUsage,
  init_extraUsage
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRWZmb3J0SW5kaWNhdG9yLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01vZGVsUGlja2VyLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvZXh0cmFVc2FnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgRUZGT1JUX0hJR0gsXG4gIEVGRk9SVF9MT1csXG4gIEVGRk9SVF9NQVgsXG4gIEVGRk9SVF9NRURJVU0sXG59IGZyb20gJy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBFZmZvcnRMZXZlbCxcbiAgdHlwZSBFZmZvcnRWYWx1ZSxcbiAgZ2V0RGlzcGxheWVkRWZmb3J0TGV2ZWwsXG4gIG1vZGVsU3VwcG9ydHNFZmZvcnQsXG59IGZyb20gJy4uL3V0aWxzL2VmZm9ydC5qcydcblxuLyoqXG4gKiBCdWlsZCB0aGUgdGV4dCBmb3IgdGhlIGVmZm9ydC1jaGFuZ2VkIG5vdGlmaWNhdGlvbiwgZS5nLiBcIlx1MjVEMCBtZWRpdW0gXHUwMEI3IC9lZmZvcnRcIi5cbiAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZSBtb2RlbCBkb2Vzbid0IHN1cHBvcnQgZWZmb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmb3J0Tm90aWZpY2F0aW9uVGV4dChcbiAgZWZmb3J0VmFsdWU6IEVmZm9ydFZhbHVlIHwgdW5kZWZpbmVkLFxuICBtb2RlbDogc3RyaW5nLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFtb2RlbFN1cHBvcnRzRWZmb3J0KG1vZGVsKSkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBsZXZlbCA9IGdldERpc3BsYXllZEVmZm9ydExldmVsKG1vZGVsLCBlZmZvcnRWYWx1ZSlcbiAgcmV0dXJuIGAke2VmZm9ydExldmVsVG9TeW1ib2wobGV2ZWwpfSAke2xldmVsfSBcdTAwQjcgL2VmZm9ydGBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVmZm9ydExldmVsVG9TeW1ib2wobGV2ZWw6IEVmZm9ydExldmVsKTogc3RyaW5nIHtcbiAgc3dpdGNoIChsZXZlbCkge1xuICAgIGNhc2UgJ2xvdyc6XG4gICAgICByZXR1cm4gRUZGT1JUX0xPV1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gRUZGT1JUX01FRElVTVxuICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgcmV0dXJuIEVGRk9SVF9ISUdIXG4gICAgY2FzZSAnbWF4JzpcbiAgICAgIHJldHVybiBFRkZPUlRfTUFYXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIERlZmVuc2l2ZTogbGV2ZWwgY2FuIG9yaWdpbmF0ZSBmcm9tIHJlbW90ZSBjb25maWcuIElmIGFuIHVua25vd25cbiAgICAgIC8vIHZhbHVlIHNsaXBzIHRocm91Z2gsIHJlbmRlciB0aGUgaGlnaCBzeW1ib2wgcmF0aGVyIHRoYW4gdW5kZWZpbmVkLlxuICAgICAgcmV0dXJuIEVGRk9SVF9ISUdIXG4gIH1cbn1cbiIsICJpbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gtZXMvY2FwaXRhbGl6ZS5qcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICdzcmMvaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIEZBU1RfTU9ERV9NT0RFTF9ESVNQTEFZLFxuICBpc0Zhc3RNb2RlQXZhaWxhYmxlLFxuICBpc0Zhc3RNb2RlQ29vbGRvd24sXG4gIGlzRmFzdE1vZGVFbmFibGVkLFxufSBmcm9tICdzcmMvdXRpbHMvZmFzdE1vZGUuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7XG4gIGNvbnZlcnRFZmZvcnRWYWx1ZVRvTGV2ZWwsXG4gIHR5cGUgRWZmb3J0TGV2ZWwsXG4gIGdldERlZmF1bHRFZmZvcnRGb3JNb2RlbCxcbiAgbW9kZWxTdXBwb3J0c0VmZm9ydCxcbiAgbW9kZWxTdXBwb3J0c01heEVmZm9ydCxcbiAgcmVzb2x2ZVBpY2tlckVmZm9ydFBlcnNpc3RlbmNlLFxuICB0b1BlcnNpc3RhYmxlRWZmb3J0LFxufSBmcm9tICcuLi91dGlscy9lZmZvcnQuanMnXG5pbXBvcnQge1xuICBnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCxcbiAgdHlwZSBNb2RlbFNldHRpbmcsXG4gIG1vZGVsRGlzcGxheVN0cmluZyxcbiAgcGFyc2VVc2VyU3BlY2lmaWVkTW9kZWwsXG59IGZyb20gJy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kZWxPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvbW9kZWwvbW9kZWxPcHRpb25zLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UsXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlLFxufSBmcm9tICcuLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL1BhbmUuanMnXG5pbXBvcnQgeyBlZmZvcnRMZXZlbFRvU3ltYm9sIH0gZnJvbSAnLi9FZmZvcnRJbmRpY2F0b3IuanMnXG5cbmV4cG9ydCB0eXBlIFByb3BzID0ge1xuICBpbml0aWFsOiBzdHJpbmcgfCBudWxsXG4gIHNlc3Npb25Nb2RlbD86IE1vZGVsU2V0dGluZ1xuICBvblNlbGVjdDogKG1vZGVsOiBzdHJpbmcgfCBudWxsLCBlZmZvcnQ6IEVmZm9ydExldmVsIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxuICBpc1N0YW5kYWxvbmVDb21tYW5kPzogYm9vbGVhblxuICBzaG93RmFzdE1vZGVOb3RpY2U/OiBib29sZWFuXG4gIC8qKiBPdmVycmlkZXMgdGhlIGRpbSBoZWFkZXIgbGluZSBiZWxvdyBcIlNlbGVjdCBtb2RlbFwiLiAqL1xuICBoZWFkZXJUZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNraXAgd3JpdGluZyBlZmZvcnRMZXZlbCB0byB1c2VyU2V0dGluZ3Mgb24gc2VsZWN0aW9uLlxuICAgKiBVc2VkIGJ5IHRoZSBhc3Npc3RhbnQgaW5zdGFsbGVyIHdpemFyZCB3aGVyZSB0aGUgbW9kZWwgY2hvaWNlIGlzXG4gICAqIHByb2plY3Qtc2NvcGVkICh3cml0dGVuIHRvIHRoZSBhc3Npc3RhbnQncyAuY2xhdWRlL3NldHRpbmdzLmpzb24gdmlhXG4gICAqIGluc3RhbGwudHMpIGFuZCBzaG91bGQgbm90IGxlYWsgdG8gdGhlIHVzZXIncyBnbG9iYWwgfi8uY2xhdWRlL3NldHRpbmdzLlxuICAgKi9cbiAgc2tpcFNldHRpbmdzV3JpdGU/OiBib29sZWFuXG59XG5cbmNvbnN0IE5PX1BSRUZFUkVOQ0UgPSAnX19OT19QUkVGRVJFTkNFX18nXG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RlbFBpY2tlcih7XG4gIGluaXRpYWwsXG4gIHNlc3Npb25Nb2RlbCxcbiAgb25TZWxlY3QsXG4gIG9uQ2FuY2VsLFxuICBpc1N0YW5kYWxvbmVDb21tYW5kLFxuICBzaG93RmFzdE1vZGVOb3RpY2UsXG4gIGhlYWRlclRleHQsXG4gIHNraXBTZXR0aW5nc1dyaXRlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzZXRBcHBTdGF0ZSA9IHVzZVNldEFwcFN0YXRlKClcbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKClcbiAgY29uc3QgbWF4VmlzaWJsZSA9IDEwXG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlID0gaW5pdGlhbCA9PT0gbnVsbCA/IE5PX1BSRUZFUkVOQ0UgOiBpbml0aWFsXG4gIGNvbnN0IFtmb2N1c2VkVmFsdWUsIHNldEZvY3VzZWRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFxuICAgIGluaXRpYWxWYWx1ZSxcbiAgKVxuXG4gIGNvbnN0IGlzRmFzdE1vZGUgPSB1c2VBcHBTdGF0ZShzID0+XG4gICAgaXNGYXN0TW9kZUVuYWJsZWQoKSA/IHMuZmFzdE1vZGUgOiBmYWxzZSxcbiAgKVxuXG4gIGNvbnN0IFtoYXNUb2dnbGVkRWZmb3J0LCBzZXRIYXNUb2dnbGVkRWZmb3J0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBlZmZvcnRWYWx1ZSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5lZmZvcnRWYWx1ZSlcbiAgY29uc3QgW2VmZm9ydCwgc2V0RWZmb3J0XSA9IHVzZVN0YXRlPEVmZm9ydExldmVsIHwgdW5kZWZpbmVkPihcbiAgICBlZmZvcnRWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGNvbnZlcnRFZmZvcnRWYWx1ZVRvTGV2ZWwoZWZmb3J0VmFsdWUpXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgKVxuXG4gIC8vIE1lbW9pemUgYWxsIGRlcml2ZWQgdmFsdWVzIHRvIHByZXZlbnQgcmUtcmVuZGVyc1xuICBjb25zdCBtb2RlbE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldE1vZGVsT3B0aW9ucyhpc0Zhc3RNb2RlID8/IGZhbHNlKSxcbiAgICBbaXNGYXN0TW9kZV0sXG4gIClcblxuICAvLyBFbnN1cmUgdGhlIGluaXRpYWwgdmFsdWUgaXMgaW4gdGhlIG9wdGlvbnMgbGlzdFxuICAvLyBUaGlzIGhhbmRsZXMgZWRnZSBjYXNlcyB3aGVyZSB0aGUgdXNlcidzIGN1cnJlbnQgbW9kZWwgKGUuZy4sICdoYWlrdScgZm9yIDNQIHVzZXJzKVxuICAvLyBpcyBub3QgaW4gdGhlIGJhc2Ugb3B0aW9ucyBidXQgc2hvdWxkIHN0aWxsIGJlIHNlbGVjdGFibGUgYW5kIHNob3duIGFzIHNlbGVjdGVkXG4gIGNvbnN0IG9wdGlvbnNXaXRoSW5pdGlhbCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpbml0aWFsICE9PSBudWxsICYmICFtb2RlbE9wdGlvbnMuc29tZShvcHQgPT4gb3B0LnZhbHVlID09PSBpbml0aWFsKSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubW9kZWxPcHRpb25zLFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IGluaXRpYWwsXG4gICAgICAgICAgbGFiZWw6IG1vZGVsRGlzcGxheVN0cmluZyhpbml0aWFsKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0N1cnJlbnQgbW9kZWwnLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gbW9kZWxPcHRpb25zXG4gIH0sIFttb2RlbE9wdGlvbnMsIGluaXRpYWxdKVxuXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBvcHRpb25zV2l0aEluaXRpYWwubWFwKG9wdCA9PiAoe1xuICAgICAgICAuLi5vcHQsXG4gICAgICAgIHZhbHVlOiBvcHQudmFsdWUgPT09IG51bGwgPyBOT19QUkVGRVJFTkNFIDogb3B0LnZhbHVlLFxuICAgICAgfSkpLFxuICAgIFtvcHRpb25zV2l0aEluaXRpYWxdLFxuICApXG4gIGNvbnN0IGluaXRpYWxGb2N1c1ZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgc2VsZWN0T3B0aW9ucy5zb21lKF8gPT4gXy52YWx1ZSA9PT0gaW5pdGlhbFZhbHVlKVxuICAgICAgICA/IGluaXRpYWxWYWx1ZVxuICAgICAgICA6IChzZWxlY3RPcHRpb25zWzBdPy52YWx1ZSA/PyB1bmRlZmluZWQpLFxuICAgIFtzZWxlY3RPcHRpb25zLCBpbml0aWFsVmFsdWVdLFxuICApXG4gIGNvbnN0IHZpc2libGVDb3VudCA9IE1hdGgubWluKG1heFZpc2libGUsIHNlbGVjdE9wdGlvbnMubGVuZ3RoKVxuICBjb25zdCBoaWRkZW5Db3VudCA9IE1hdGgubWF4KDAsIHNlbGVjdE9wdGlvbnMubGVuZ3RoIC0gdmlzaWJsZUNvdW50KVxuXG4gIGNvbnN0IGZvY3VzZWRNb2RlbE5hbWUgPSBzZWxlY3RPcHRpb25zLmZpbmQoXG4gICAgb3B0ID0+IG9wdC52YWx1ZSA9PT0gZm9jdXNlZFZhbHVlLFxuICApPy5sYWJlbFxuICBjb25zdCBmb2N1c2VkTW9kZWwgPSByZXNvbHZlT3B0aW9uTW9kZWwoZm9jdXNlZFZhbHVlKVxuICBjb25zdCBmb2N1c2VkU3VwcG9ydHNFZmZvcnQgPSBmb2N1c2VkTW9kZWxcbiAgICA/IG1vZGVsU3VwcG9ydHNFZmZvcnQoZm9jdXNlZE1vZGVsKVxuICAgIDogZmFsc2VcbiAgY29uc3QgZm9jdXNlZFN1cHBvcnRzTWF4ID0gZm9jdXNlZE1vZGVsXG4gICAgPyBtb2RlbFN1cHBvcnRzTWF4RWZmb3J0KGZvY3VzZWRNb2RlbClcbiAgICA6IGZhbHNlXG4gIGNvbnN0IGZvY3VzZWREZWZhdWx0RWZmb3J0ID0gZ2V0RGVmYXVsdEVmZm9ydExldmVsRm9yT3B0aW9uKGZvY3VzZWRWYWx1ZSlcbiAgLy8gQ2xhbXAgZGlzcGxheSB3aGVuICdtYXgnIGlzIHNlbGVjdGVkIGJ1dCB0aGUgZm9jdXNlZCBtb2RlbCBkb2Vzbid0IHN1cHBvcnQgaXQuXG4gIC8vIHJlc29sdmVBcHBsaWVkRWZmb3J0KCkgZG9lcyB0aGUgc2FtZSBkb3duZ3JhZGUgYXQgQVBJLXNlbmQgdGltZS5cbiAgY29uc3QgZGlzcGxheUVmZm9ydCA9XG4gICAgZWZmb3J0ID09PSAnbWF4JyAmJiAhZm9jdXNlZFN1cHBvcnRzTWF4ID8gJ2hpZ2gnIDogZWZmb3J0XG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgc2V0Rm9jdXNlZFZhbHVlKHZhbHVlKVxuICAgICAgaWYgKCFoYXNUb2dnbGVkRWZmb3J0ICYmIGVmZm9ydFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0RWZmb3J0KGdldERlZmF1bHRFZmZvcnRMZXZlbEZvck9wdGlvbih2YWx1ZSkpXG4gICAgICB9XG4gICAgfSxcbiAgICBbaGFzVG9nZ2xlZEVmZm9ydCwgZWZmb3J0VmFsdWVdLFxuICApXG5cbiAgLy8gRWZmb3J0IGxldmVsIGN5Y2xpbmcga2V5YmluZGluZ3NcbiAgY29uc3QgaGFuZGxlQ3ljbGVFZmZvcnQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnKSA9PiB7XG4gICAgICBpZiAoIWZvY3VzZWRTdXBwb3J0c0VmZm9ydCkgcmV0dXJuXG4gICAgICBzZXRFZmZvcnQocHJldiA9PlxuICAgICAgICBjeWNsZUVmZm9ydExldmVsKFxuICAgICAgICAgIHByZXYgPz8gZm9jdXNlZERlZmF1bHRFZmZvcnQsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIGZvY3VzZWRTdXBwb3J0c01heCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIHNldEhhc1RvZ2dsZWRFZmZvcnQodHJ1ZSlcbiAgICB9LFxuICAgIFtmb2N1c2VkU3VwcG9ydHNFZmZvcnQsIGZvY3VzZWRTdXBwb3J0c01heCwgZm9jdXNlZERlZmF1bHRFZmZvcnRdLFxuICApXG5cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ21vZGVsUGlja2VyOmRlY3JlYXNlRWZmb3J0JzogKCkgPT4gaGFuZGxlQ3ljbGVFZmZvcnQoJ2xlZnQnKSxcbiAgICAgICdtb2RlbFBpY2tlcjppbmNyZWFzZUVmZm9ydCc6ICgpID0+IGhhbmRsZUN5Y2xlRWZmb3J0KCdyaWdodCcpLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnTW9kZWxQaWNrZXInIH0sXG4gIClcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tb2RlbF9jb21tYW5kX21lbnVfZWZmb3J0Jywge1xuICAgICAgZWZmb3J0OlxuICAgICAgICBlZmZvcnQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIGlmICghc2tpcFNldHRpbmdzV3JpdGUpIHtcbiAgICAgIC8vIFByaW9yIGNvbWVzIGZyb20gdXNlclNldHRpbmdzIG9uIGRpc2sg4oCUIE5PVCBtZXJnZWQgc2V0dGluZ3MgKHdoaWNoXG4gICAgICAvLyBpbmNsdWRlcyBwcm9qZWN0L3BvbGljeSBsYXllcnMgdGhhdCBtdXN0IG5vdCBsZWFrIGludG8gdGhlIHVzZXInc1xuICAgICAgLy8gZ2xvYmFsIH4vLmNsYXVkZS9zZXR0aW5ncy5qc29uKSwgYW5kIE5PVCBBcHBTdGF0ZS5lZmZvcnRWYWx1ZSAod2hpY2hcbiAgICAgIC8vIGluY2x1ZGVzIHNlc3Npb24tZXBoZW1lcmFsIHNvdXJjZXMgbGlrZSAtLWVmZm9ydCBDTEkgZmxhZykuXG4gICAgICAvLyBTZWUgcmVzb2x2ZVBpY2tlckVmZm9ydFBlcnNpc3RlbmNlIEpTRG9jLlxuICAgICAgY29uc3QgZWZmb3J0TGV2ZWwgPSByZXNvbHZlUGlja2VyRWZmb3J0UGVyc2lzdGVuY2UoXG4gICAgICAgIGVmZm9ydCxcbiAgICAgICAgZ2V0RGVmYXVsdEVmZm9ydExldmVsRm9yT3B0aW9uKHZhbHVlKSxcbiAgICAgICAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycpPy5lZmZvcnRMZXZlbCxcbiAgICAgICAgaGFzVG9nZ2xlZEVmZm9ydCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHBlcnNpc3RhYmxlID0gdG9QZXJzaXN0YWJsZUVmZm9ydChlZmZvcnRMZXZlbClcbiAgICAgIGlmIChwZXJzaXN0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7IGVmZm9ydExldmVsOiBwZXJzaXN0YWJsZSB9KVxuICAgICAgfVxuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBlZmZvcnRWYWx1ZTogZWZmb3J0TGV2ZWwgfSkpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRNb2RlbCA9IHJlc29sdmVPcHRpb25Nb2RlbCh2YWx1ZSlcbiAgICBjb25zdCBzZWxlY3RlZEVmZm9ydCA9XG4gICAgICBoYXNUb2dnbGVkRWZmb3J0ICYmIHNlbGVjdGVkTW9kZWwgJiYgbW9kZWxTdXBwb3J0c0VmZm9ydChzZWxlY3RlZE1vZGVsKVxuICAgICAgICA/IGVmZm9ydFxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGlmICh2YWx1ZSA9PT0gTk9fUFJFRkVSRU5DRSkge1xuICAgICAgb25TZWxlY3QobnVsbCwgc2VsZWN0ZWRFZmZvcnQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb25TZWxlY3QodmFsdWUsIHNlbGVjdGVkRWZmb3J0KVxuICB9XG5cbiAgY29uc3QgY29udGVudCA9IChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwicmVtZW1iZXJcIiBib2xkPlxuICAgICAgICAgICAgU2VsZWN0IG1vZGVsXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAge2hlYWRlclRleHQgPz9cbiAgICAgICAgICAgICAgJ1N3aXRjaCBiZXR3ZWVuIENsYXVkZSBtb2RlbHMuIEFwcGxpZXMgdG8gdGhpcyBzZXNzaW9uIGFuZCBmdXR1cmUgQ2xhdWRlIENvZGUgc2Vzc2lvbnMuIEZvciBvdGhlci9wcmV2aW91cyBtb2RlbCBuYW1lcywgc3BlY2lmeSB3aXRoIC0tbW9kZWwuJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAge3Nlc3Npb25Nb2RlbCAmJiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgQ3VycmVudGx5IHVzaW5nIHttb2RlbERpc3BsYXlTdHJpbmcoc2Vzc2lvbk1vZGVsKX0gZm9yIHRoaXNcbiAgICAgICAgICAgICAgc2Vzc2lvbiAoc2V0IGJ5IHBsYW4gbW9kZSkuIFNlbGVjdGluZyBhIG1vZGVsIHdpbGwgdW5kbyB0aGlzLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbFZhbHVlfVxuICAgICAgICAgICAgICBkZWZhdWx0Rm9jdXNWYWx1ZT17aW5pdGlhbEZvY3VzVmFsdWV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWwgPz8gKCgpID0+IHt9KX1cbiAgICAgICAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXt2aXNpYmxlQ291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHtoaWRkZW5Db3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPEJveCBwYWRkaW5nTGVmdD17M30+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPmFuZCB7aGlkZGVuQ291bnR9IG1vcmXigKY8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHtmb2N1c2VkU3VwcG9ydHNFZmZvcnQgPyAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgPEVmZm9ydExldmVsSW5kaWNhdG9yIGVmZm9ydD17ZGlzcGxheUVmZm9ydH0gLz57JyAnfVxuICAgICAgICAgICAgICB7Y2FwaXRhbGl6ZShkaXNwbGF5RWZmb3J0KX0gZWZmb3J0XG4gICAgICAgICAgICAgIHtkaXNwbGF5RWZmb3J0ID09PSBmb2N1c2VkRGVmYXVsdEVmZm9ydCA/IGAgKGRlZmF1bHQpYCA6IGBgfXsnICd9XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VidGxlXCI+4oaQIOKGkiB0byBhZGp1c3Q8L1RleHQ+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VidGxlXCI+XG4gICAgICAgICAgICAgIDxFZmZvcnRMZXZlbEluZGljYXRvciBlZmZvcnQ9e3VuZGVmaW5lZH0gLz4gRWZmb3J0IG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAge2ZvY3VzZWRNb2RlbE5hbWUgPyBgIGZvciAke2ZvY3VzZWRNb2RlbE5hbWV9YCA6ICcnfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHtpc0Zhc3RNb2RlRW5hYmxlZCgpID8gKFxuICAgICAgICAgIHNob3dGYXN0TW9kZU5vdGljZSA/IChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgRmFzdCBtb2RlIGlzIDxUZXh0IGJvbGQ+T048L1RleHQ+IGFuZCBhdmFpbGFibGUgd2l0aHsnICd9XG4gICAgICAgICAgICAgICAge0ZBU1RfTU9ERV9NT0RFTF9ESVNQTEFZfSBvbmx5ICgvZmFzdCkuIFN3aXRjaGluZyB0byBvdGhlclxuICAgICAgICAgICAgICAgIG1vZGVscyB0dXJuIG9mZiBmYXN0IG1vZGUuXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkgOiBpc0Zhc3RNb2RlQXZhaWxhYmxlKCkgJiYgIWlzRmFzdE1vZGVDb29sZG93bigpID8gKFxuICAgICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBVc2UgPFRleHQgYm9sZD4vZmFzdDwvVGV4dD4gdG8gdHVybiBvbiBGYXN0IG1vZGUgKFxuICAgICAgICAgICAgICAgIHtGQVNUX01PREVfTU9ERUxfRElTUExBWX0gb25seSkuXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtpc1N0YW5kYWxvbmVDb21tYW5kICYmIChcbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIHtleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6Y2FuY2VsXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJleGl0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcblxuICBpZiAoIWlzU3RhbmRhbG9uZUNvbW1hbmQpIHtcbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgcmV0dXJuIDxQYW5lIGNvbG9yPVwicGVybWlzc2lvblwiPntjb250ZW50fTwvUGFuZT5cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbk1vZGVsKHZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZFxuICByZXR1cm4gdmFsdWUgPT09IE5PX1BSRUZFUkVOQ0VcbiAgICA/IGdldERlZmF1bHRNYWluTG9vcE1vZGVsKClcbiAgICA6IHBhcnNlVXNlclNwZWNpZmllZE1vZGVsKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBFZmZvcnRMZXZlbEluZGljYXRvcih7XG4gIGVmZm9ydCxcbn06IHtcbiAgZWZmb3J0PzogRWZmb3J0TGV2ZWxcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxUZXh0IGNvbG9yPXtlZmZvcnQgPyAnY2xhdWRlJyA6ICdzdWJ0bGUnfT5cbiAgICAgIHtlZmZvcnRMZXZlbFRvU3ltYm9sKGVmZm9ydCA/PyAnbG93Jyl9XG4gICAgPC9UZXh0PlxuICApXG59XG5cbmZ1bmN0aW9uIGN5Y2xlRWZmb3J0TGV2ZWwoXG4gIGN1cnJlbnQ6IEVmZm9ydExldmVsLFxuICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsXG4gIGluY2x1ZGVNYXg6IGJvb2xlYW4sXG4pOiBFZmZvcnRMZXZlbCB7XG4gIGNvbnN0IGxldmVsczogRWZmb3J0TGV2ZWxbXSA9IGluY2x1ZGVNYXhcbiAgICA/IFsnbG93JywgJ21lZGl1bScsICdoaWdoJywgJ21heCddXG4gICAgOiBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXG4gIC8vIElmIHRoZSBjdXJyZW50IGxldmVsIGlzbid0IGluIHRoZSBjeWNsZSAoZS5nLiAnbWF4JyBhZnRlciBzd2l0Y2hpbmcgdG8gYVxuICAvLyBub24tT3B1cyBtb2RlbCksIGNsYW1wIHRvICdoaWdoJy5cbiAgY29uc3QgaWR4ID0gbGV2ZWxzLmluZGV4T2YoY3VycmVudClcbiAgY29uc3QgY3VycmVudEluZGV4ID0gaWR4ICE9PSAtMSA/IGlkeCA6IGxldmVscy5pbmRleE9mKCdoaWdoJylcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiBsZXZlbHNbKGN1cnJlbnRJbmRleCArIDEpICUgbGV2ZWxzLmxlbmd0aF0hXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxldmVsc1soY3VycmVudEluZGV4IC0gMSArIGxldmVscy5sZW5ndGgpICUgbGV2ZWxzLmxlbmd0aF0hXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEVmZm9ydExldmVsRm9yT3B0aW9uKHZhbHVlPzogc3RyaW5nKTogRWZmb3J0TGV2ZWwge1xuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVPcHRpb25Nb2RlbCh2YWx1ZSkgPz8gZ2V0RGVmYXVsdE1haW5Mb29wTW9kZWwoKVxuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBnZXREZWZhdWx0RWZmb3J0Rm9yTW9kZWwocmVzb2x2ZWQpXG4gIHJldHVybiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZFxuICAgID8gY29udmVydEVmZm9ydFZhbHVlVG9MZXZlbChkZWZhdWx0VmFsdWUpXG4gICAgOiAnaGlnaCdcbn1cbiIsICJpbXBvcnQgeyBpc0NsYXVkZUFJU3Vic2NyaWJlciB9IGZyb20gJy4vYXV0aC5qcydcbmltcG9ydCB7IGhhczFtQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmlsbGVkQXNFeHRyYVVzYWdlKFxuICBtb2RlbDogc3RyaW5nIHwgbnVsbCxcbiAgaXNGYXN0TW9kZTogYm9vbGVhbixcbiAgaXNPcHVzMW1NZXJnZWQ6IGJvb2xlYW4sXG4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0NsYXVkZUFJU3Vic2NyaWJlcigpKSByZXR1cm4gZmFsc2VcbiAgaWYgKGlzRmFzdE1vZGUpIHJldHVybiB0cnVlXG4gIGlmIChtb2RlbCA9PT0gbnVsbCB8fCAhaGFzMW1Db250ZXh0KG1vZGVsKSkgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgbSA9IG1vZGVsXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXFxbMW1cXF0kLywgJycpXG4gICAgLnRyaW0oKVxuICBjb25zdCBpc09wdXM0NiA9IG0gPT09ICdvcHVzJyB8fCBtLmluY2x1ZGVzKCdvcHVzLTQtNicpXG4gIGNvbnN0IGlzU29ubmV0NDYgPSBtID09PSAnc29ubmV0JyB8fCBtLmluY2x1ZGVzKCdzb25uZXQtNC02JylcblxuICBpZiAoaXNPcHVzNDYgJiYgaXNPcHVzMW1NZXJnZWQpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiBp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Q25FLFFBQU1tRyxXQUFXMUUsbUJBQW1CekIsS0FBSyxLQUFLeUYsd0JBQXdCO0FBQ3RFLFFBQU1XLGVBQWVDLHlCQUF5QkYsUUFBUTtBQUN0RCxTQUFPQyxpQkFBaUJoSCxTQUNwQkMsMEJBQTBCK0csWUFBWSxJQUN0QztBQUNOO0lBalRNNUg7Ozs7QUE5RE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvQkEsSUFBTUEsZ0JBQWdCOzs7OztBQzNEZixTQUFTLHFCQUNkLE9BQ0EsWUFDQSxnQkFDUztBQUNULE1BQUksQ0FBQyxxQkFBcUIsRUFBRyxRQUFPO0FBQ3BDLE1BQUksV0FBWSxRQUFPO0FBQ3ZCLE1BQUksVUFBVSxRQUFRLENBQUMsYUFBYSxLQUFLLEVBQUcsUUFBTztBQUVuRCxRQUFNLElBQUksTUFDUCxZQUFZLEVBQ1osUUFBUSxXQUFXLEVBQUUsRUFDckIsS0FBSztBQUNSLFFBQU0sV0FBVyxNQUFNLFVBQVUsRUFBRSxTQUFTLFVBQVU7QUFDdEQsUUFBTSxhQUFhLE1BQU0sWUFBWSxFQUFFLFNBQVMsWUFBWTtBQUU1RCxNQUFJLFlBQVksZUFBZ0IsUUFBTztBQUV2QyxTQUFPLFlBQVk7QUFDckI7QUF0QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJNb2RlbFBpY2tlciIsICJ0MCIsICIkIiwgIl9jIiwgImluaXRpYWwiLCAic2Vzc2lvbk1vZGVsIiwgIm9uU2VsZWN0IiwgIm9uQ2FuY2VsIiwgImlzU3RhbmRhbG9uZUNvbW1hbmQiLCAic2hvd0Zhc3RNb2RlTm90aWNlIiwgImhlYWRlclRleHQiLCAic2tpcFNldHRpbmdzV3JpdGUiLCAic2V0QXBwU3RhdGUiLCAidXNlU2V0QXBwU3RhdGUiLCAiZXhpdFN0YXRlIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJpbml0aWFsVmFsdWUiLCAiTk9fUFJFRkVSRU5DRSIsICJmb2N1c2VkVmFsdWUiLCAic2V0Rm9jdXNlZFZhbHVlIiwgInVzZVN0YXRlIiwgImlzRmFzdE1vZGUiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAiLCAiaGFzVG9nZ2xlZEVmZm9ydCIsICJzZXRIYXNUb2dnbGVkRWZmb3J0IiwgImVmZm9ydFZhbHVlIiwgIl90ZW1wMiIsICJ0MSIsICJ1bmRlZmluZWQiLCAiY29udmVydEVmZm9ydFZhbHVlVG9MZXZlbCIsICJlZmZvcnQiLCAic2V0RWZmb3J0IiwgInQyIiwgInQzIiwgImdldE1vZGVsT3B0aW9ucyIsICJtb2RlbE9wdGlvbnMiLCAidDQiLCAiYmIwIiwgInNvbWUiLCAib3B0IiwgInZhbHVlIiwgInQ1IiwgIm1vZGVsRGlzcGxheVN0cmluZyIsICJ0NiIsICJsYWJlbCIsICJkZXNjcmlwdGlvbiIsICJ0NyIsICJvcHRpb25zV2l0aEluaXRpYWwiLCAibWFwIiwgIl90ZW1wMyIsICJzZWxlY3RPcHRpb25zIiwgIl8iLCAiaW5pdGlhbEZvY3VzVmFsdWUiLCAidmlzaWJsZUNvdW50IiwgIk1hdGgiLCAibWluIiwgImxlbmd0aCIsICJoaWRkZW5Db3VudCIsICJtYXgiLCAiZmluZCIsICJvcHRfMSIsICJmb2N1c2VkTW9kZWxOYW1lIiwgImZvY3VzZWRTdXBwb3J0c0VmZm9ydCIsICJ0OCIsICJmb2N1c2VkTW9kZWwiLCAicmVzb2x2ZU9wdGlvbk1vZGVsIiwgIm1vZGVsU3VwcG9ydHNFZmZvcnQiLCAibW9kZWxTdXBwb3J0c01heEVmZm9ydCIsICJmb2N1c2VkU3VwcG9ydHNNYXgiLCAidDkiLCAiZ2V0RGVmYXVsdEVmZm9ydExldmVsRm9yT3B0aW9uIiwgImZvY3VzZWREZWZhdWx0RWZmb3J0IiwgImRpc3BsYXlFZmZvcnQiLCAidDEwIiwgImhhbmRsZUZvY3VzIiwgInQxMSIsICJkaXJlY3Rpb24iLCAicHJldiIsICJjeWNsZUVmZm9ydExldmVsIiwgImhhbmRsZUN5Y2xlRWZmb3J0IiwgInQxMiIsICJtb2RlbFBpY2tlcjpkZWNyZWFzZUVmZm9ydCIsICJtb2RlbFBpY2tlcjppbmNyZWFzZUVmZm9ydCIsICJ0MTMiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmdzIiwgInQxNCIsICJoYW5kbGVTZWxlY3QiLCAidmFsdWVfMCIsICJsb2dFdmVudCIsICJlZmZvcnRMZXZlbCIsICJyZXNvbHZlUGlja2VyRWZmb3J0UGVyc2lzdGVuY2UiLCAiZ2V0U2V0dGluZ3NGb3JTb3VyY2UiLCAicGVyc2lzdGFibGUiLCAidG9QZXJzaXN0YWJsZUVmZm9ydCIsICJ1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSIsICJwcmV2XzAiLCAic2VsZWN0ZWRNb2RlbCIsICJzZWxlY3RlZEVmZm9ydCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJfdGVtcDQiLCAidDIxIiwgInQyMiIsICJ0MjMiLCAidDI0IiwgImNhcGl0YWxpemUiLCAidDI1IiwgImlzRmFzdE1vZGVFbmFibGVkIiwgIkZBU1RfTU9ERV9NT0RFTF9ESVNQTEFZIiwgImlzRmFzdE1vZGVBdmFpbGFibGUiLCAiaXNGYXN0TW9kZUNvb2xkb3duIiwgInQyNiIsICJ0MjciLCAicGVuZGluZyIsICJrZXlOYW1lIiwgInQyOCIsICJjb250ZW50IiwgInQyOSIsICJvcHRfMCIsICJzXzAiLCAicyIsICJmYXN0TW9kZSIsICJnZXREZWZhdWx0TWFpbkxvb3BNb2RlbCIsICJwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbCIsICJFZmZvcnRMZXZlbEluZGljYXRvciIsICJlZmZvcnRMZXZlbFRvU3ltYm9sIiwgImN1cnJlbnQiLCAiaW5jbHVkZU1heCIsICJsZXZlbHMiLCAiaWR4IiwgImluZGV4T2YiLCAiY3VycmVudEluZGV4IiwgInJlc29sdmVkIiwgImRlZmF1bHRWYWx1ZSIsICJnZXREZWZhdWx0RWZmb3J0Rm9yTW9kZWwiXQp9Cg==
