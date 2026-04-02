#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  LoadingState,
  init_LoadingState
} from "./chunk-FY7MOJ5Y.mjs";
import {
  Select,
  fetchEnvironments,
  init_environments,
  init_select
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-2MSZ62QE.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-5MQ7MACZ.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  createElement,
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  SETTING_SOURCES,
  getSettingSourceName,
  getSettingsForSource,
  getSettings_DEPRECATED,
  init_constants,
  init_settings2 as init_settings,
  init_source,
  source_default,
  updateSettingsForSource
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  init_errors,
  toError
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/teleport/environmentSelection.ts
async function getEnvironmentSelectionInfo() {
  const environments = await fetchEnvironments();
  if (environments.length === 0) {
    return {
      availableEnvironments: [],
      selectedEnvironment: null,
      selectedEnvironmentSource: null
    };
  }
  const mergedSettings = getSettings_DEPRECATED();
  const defaultEnvironmentId = mergedSettings?.remote?.defaultEnvironmentId;
  let selectedEnvironment = environments.find((env) => env.kind !== "bridge") ?? environments[0];
  let selectedEnvironmentSource = null;
  if (defaultEnvironmentId) {
    const matchingEnvironment = environments.find(
      (env) => env.environment_id === defaultEnvironmentId
    );
    if (matchingEnvironment) {
      selectedEnvironment = matchingEnvironment;
      for (let i = SETTING_SOURCES.length - 1; i >= 0; i--) {
        const source = SETTING_SOURCES[i];
        if (!source || source === "flagSettings") {
          continue;
        }
        const sourceSettings = getSettingsForSource(source);
        if (sourceSettings?.remote?.defaultEnvironmentId === defaultEnvironmentId) {
          selectedEnvironmentSource = source;
          break;
        }
      }
    }
  }
  return {
    availableEnvironments: environments,
    selectedEnvironment,
    selectedEnvironmentSource
  };
}
var init_environmentSelection = __esm({
  "src/utils/teleport/environmentSelection.ts"() {
    init_constants();
    init_settings();
    init_environments();
  }
});

// src/components/RemoteEnvironmentDialog.tsx
function RemoteEnvironmentDialog(t0) {
  const $ = c(27);
  const {
    onDone
  } = t0;
  const [loadingState, setLoadingState] = useState("loading");
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [environments, setEnvironments] = useState(t1);
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);
  const [selectedEnvironmentSource, setSelectedEnvironmentSource] = useState(null);
  const [error, setError] = useState(null);
  let t2;
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      let cancelled = false;
      const fetchInfo = async function fetchInfo2() {
        ;
        try {
          const result = await getEnvironmentSelectionInfo();
          if (cancelled) {
            return;
          }
          setEnvironments(result.availableEnvironments);
          setSelectedEnvironment(result.selectedEnvironment);
          setSelectedEnvironmentSource(result.selectedEnvironmentSource);
          setLoadingState(null);
        } catch (t42) {
          const err = t42;
          if (cancelled) {
            return;
          }
          const fetchError = toError(err);
          logError(fetchError);
          setError(fetchError.message);
          setLoadingState(null);
        }
      };
      fetchInfo();
      return () => {
        cancelled = true;
      };
    };
    t3 = [];
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  useEffect(t2, t3);
  let t4;
  if ($[3] !== environments || $[4] !== onDone) {
    t4 = function handleSelect2(value) {
      if (value === "cancel") {
        onDone();
        return;
      }
      setLoadingState("updating");
      const selectedEnv = environments.find((env) => env.environment_id === value);
      if (!selectedEnv) {
        onDone("Error: Selected environment not found");
        return;
      }
      updateSettingsForSource("localSettings", {
        remote: {
          defaultEnvironmentId: selectedEnv.environment_id
        }
      });
      onDone(`Set default remote environment to ${source_default.bold(selectedEnv.name)} (${selectedEnv.environment_id})`);
    };
    $[3] = environments;
    $[4] = onDone;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const handleSelect = t4;
  if (loadingState === "loading") {
    let t52;
    if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ createElement(LoadingState, { message: "Loading environments\u2026" });
      $[6] = t52;
    } else {
      t52 = $[6];
    }
    let t6;
    if ($[7] !== onDone) {
      t6 = /* @__PURE__ */ createElement(Dialog, { title: DIALOG_TITLE, onCancel: onDone, hideInputGuide: true }, t52);
      $[7] = onDone;
      $[8] = t6;
    } else {
      t6 = $[8];
    }
    return t6;
  }
  if (error) {
    let t52;
    if ($[9] !== error) {
      t52 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", error);
      $[9] = error;
      $[10] = t52;
    } else {
      t52 = $[10];
    }
    let t6;
    if ($[11] !== onDone || $[12] !== t52) {
      t6 = /* @__PURE__ */ createElement(Dialog, { title: DIALOG_TITLE, onCancel: onDone }, t52);
      $[11] = onDone;
      $[12] = t52;
      $[13] = t6;
    } else {
      t6 = $[13];
    }
    return t6;
  }
  if (!selectedEnvironment) {
    let t52;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ createElement(ThemedText, null, "No remote environments available.");
      $[14] = t52;
    } else {
      t52 = $[14];
    }
    let t6;
    if ($[15] !== onDone) {
      t6 = /* @__PURE__ */ createElement(Dialog, { title: DIALOG_TITLE, subtitle: SETUP_HINT, onCancel: onDone }, t52);
      $[15] = onDone;
      $[16] = t6;
    } else {
      t6 = $[16];
    }
    return t6;
  }
  if (environments.length === 1) {
    let t52;
    if ($[17] !== onDone || $[18] !== selectedEnvironment) {
      t52 = /* @__PURE__ */ createElement(SingleEnvironmentContent, { environment: selectedEnvironment, onDone });
      $[17] = onDone;
      $[18] = selectedEnvironment;
      $[19] = t52;
    } else {
      t52 = $[19];
    }
    return t52;
  }
  let t5;
  if ($[20] !== environments || $[21] !== handleSelect || $[22] !== loadingState || $[23] !== onDone || $[24] !== selectedEnvironment || $[25] !== selectedEnvironmentSource) {
    t5 = /* @__PURE__ */ createElement(MultipleEnvironmentsContent, { environments, selectedEnvironment, selectedEnvironmentSource, loadingState, onSelect: handleSelect, onCancel: onDone });
    $[20] = environments;
    $[21] = handleSelect;
    $[22] = loadingState;
    $[23] = onDone;
    $[24] = selectedEnvironment;
    $[25] = selectedEnvironmentSource;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  return t5;
}
function EnvironmentLabel(t0) {
  const $ = c(7);
  const {
    environment
  } = t0;
  let t1;
  if ($[0] !== environment.name) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, environment.name);
    $[0] = environment.name;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== environment.environment_id) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(", environment.environment_id, ")");
    $[2] = environment.environment_id;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedText, null, figures_default.tick, " Using ", t1, " ", t2);
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}
function SingleEnvironmentContent(t0) {
  const $ = c(6);
  const {
    environment,
    onDone
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Confirmation"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:yes", onDone, t1);
  let t2;
  if ($[1] !== environment) {
    t2 = /* @__PURE__ */ createElement(EnvironmentLabel, { environment });
    $[1] = environment;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== onDone || $[4] !== t2) {
    t3 = /* @__PURE__ */ createElement(Dialog, { title: DIALOG_TITLE, subtitle: SETUP_HINT, onCancel: onDone }, t2);
    $[3] = onDone;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
function MultipleEnvironmentsContent(t0) {
  const $ = c(18);
  const {
    environments,
    selectedEnvironment,
    selectedEnvironmentSource,
    loadingState,
    onSelect,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== selectedEnvironmentSource) {
    t1 = selectedEnvironmentSource && selectedEnvironmentSource !== "localSettings" ? ` (from ${getSettingSourceName(selectedEnvironmentSource)} settings)` : "";
    $[0] = selectedEnvironmentSource;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const sourceSuffix = t1;
  let t2;
  if ($[2] !== selectedEnvironment.name) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedEnvironment.name);
    $[2] = selectedEnvironment.name;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== sourceSuffix || $[5] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedText, null, "Currently using: ", t2, sourceSuffix);
    $[4] = sourceSuffix;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const subtitle = t3;
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, SETUP_HINT);
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== environments || $[9] !== loadingState || $[10] !== onSelect || $[11] !== selectedEnvironment.environment_id) {
    t5 = loadingState === "updating" ? /* @__PURE__ */ createElement(LoadingState, { message: "Updating\u2026" }) : /* @__PURE__ */ createElement(Select, { options: environments.map(_temp), defaultValue: selectedEnvironment.environment_id, onChange: onSelect, onCancel: () => onSelect("cancel"), layout: "compact-vertical" });
    $[8] = environments;
    $[9] = loadingState;
    $[10] = onSelect;
    $[11] = selectedEnvironment.environment_id;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })));
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== onCancel || $[15] !== subtitle || $[16] !== t5) {
    t7 = /* @__PURE__ */ createElement(Dialog, { title: DIALOG_TITLE, subtitle, onCancel, hideInputGuide: true }, t4, t5, t6);
    $[14] = onCancel;
    $[15] = subtitle;
    $[16] = t5;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  return t7;
}
function _temp(env) {
  return {
    label: /* @__PURE__ */ createElement(ThemedText, null, env.name, " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(", env.environment_id, ")")),
    value: env.environment_id
  };
}
var DIALOG_TITLE, SETUP_HINT;
var init_RemoteEnvironmentDialog = __esm({
  "src/components/RemoteEnvironmentDialog.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_figures();
    init_react();
    init_react();
    init_ink();
    init_useKeybinding();
    init_errors();
    init_log();
    init_constants();
    init_settings();
    init_environmentSelection();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_LoadingState();
    DIALOG_TITLE = "Select Remote Environment";
    SETUP_HINT = `Configure environments at: https://claude.ai/code`;
  }
});

// src/commands/remote-env/remote-env.tsx
async function call(onDone) {
  return /* @__PURE__ */ createElement(RemoteEnvironmentDialog, { onDone });
}
var init_remote_env = __esm({
  "src/commands/remote-env/remote-env.tsx"() {
    init_react();
    init_RemoteEnvironmentDialog();
  }
});
init_remote_env();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3RlbGVwb3J0L2Vudmlyb25tZW50U2VsZWN0aW9uLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1JlbW90ZUVudmlyb25tZW50RGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcmVtb3RlLWVudi9yZW1vdGUtZW52LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU0VUVElOR19TT1VSQ0VTLCB0eXBlIFNldHRpbmdTb3VyY2UgfSBmcm9tICcuLi9zZXR0aW5ncy9jb25zdGFudHMuanMnXG5pbXBvcnQge1xuICBnZXRTZXR0aW5nc19ERVBSRUNBVEVELFxuICBnZXRTZXR0aW5nc0ZvclNvdXJjZSxcbn0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyB0eXBlIEVudmlyb25tZW50UmVzb3VyY2UsIGZldGNoRW52aXJvbm1lbnRzIH0gZnJvbSAnLi9lbnZpcm9ubWVudHMuanMnXG5cbmV4cG9ydCB0eXBlIEVudmlyb25tZW50U2VsZWN0aW9uSW5mbyA9IHtcbiAgYXZhaWxhYmxlRW52aXJvbm1lbnRzOiBFbnZpcm9ubWVudFJlc291cmNlW11cbiAgc2VsZWN0ZWRFbnZpcm9ubWVudDogRW52aXJvbm1lbnRSZXNvdXJjZSB8IG51bGxcbiAgc2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZTogU2V0dGluZ1NvdXJjZSB8IG51bGxcbn1cblxuLyoqXG4gKiBHZXRzIGluZm9ybWF0aW9uIGFib3V0IGF2YWlsYWJsZSBlbnZpcm9ubWVudHMgYW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb25lLlxuICpcbiAqIEByZXR1cm5zIFByb21pc2U8RW52aXJvbm1lbnRTZWxlY3Rpb25JbmZvPiBjb250YWluaW5nOlxuICogICAtIGF2YWlsYWJsZUVudmlyb25tZW50czogYWxsIGVudmlyb25tZW50cyBmcm9tIHRoZSBBUElcbiAqICAgLSBzZWxlY3RlZEVudmlyb25tZW50OiB0aGUgZW52aXJvbm1lbnQgdGhhdCB3b3VsZCBiZSB1c2VkIChiYXNlZCBvbiBzZXR0aW5ncyBvciBmaXJzdCBhdmFpbGFibGUpLFxuICogICAgIG9yIG51bGwgaWYgbm8gZW52aXJvbm1lbnRzIGFyZSBhdmFpbGFibGVcbiAqICAgLSBzZWxlY3RlZEVudmlyb25tZW50U291cmNlOiB0aGUgU2V0dGluZ1NvdXJjZSB3aGVyZSBkZWZhdWx0RW52aXJvbm1lbnRJZCBpcyBjb25maWd1cmVkLFxuICogICAgIG9yIG51bGwgaWYgdXNpbmcgdGhlIGRlZmF1bHQgKGZpcnN0IGVudmlyb25tZW50KVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW52aXJvbm1lbnRTZWxlY3Rpb25JbmZvKCk6IFByb21pc2U8RW52aXJvbm1lbnRTZWxlY3Rpb25JbmZvPiB7XG4gIC8vIEZldGNoIGF2YWlsYWJsZSBlbnZpcm9ubWVudHNcbiAgY29uc3QgZW52aXJvbm1lbnRzID0gYXdhaXQgZmV0Y2hFbnZpcm9ubWVudHMoKVxuXG4gIGlmIChlbnZpcm9ubWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZUVudmlyb25tZW50czogW10sXG4gICAgICBzZWxlY3RlZEVudmlyb25tZW50OiBudWxsLFxuICAgICAgc2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZTogbnVsbCxcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIG1lcmdlZCBzZXR0aW5ncyB0byBzZWUgd2hhdCB3b3VsZCBhY3R1YWxseSBiZSB1c2VkXG4gIGNvbnN0IG1lcmdlZFNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gIGNvbnN0IGRlZmF1bHRFbnZpcm9ubWVudElkID0gbWVyZ2VkU2V0dGluZ3M/LnJlbW90ZT8uZGVmYXVsdEVudmlyb25tZW50SWRcblxuICAvLyBGaW5kIHdoaWNoIGVudmlyb25tZW50IHdvdWxkIGJlIHNlbGVjdGVkXG4gIGxldCBzZWxlY3RlZEVudmlyb25tZW50OiBFbnZpcm9ubWVudFJlc291cmNlID1cbiAgICBlbnZpcm9ubWVudHMuZmluZChlbnYgPT4gZW52LmtpbmQgIT09ICdicmlkZ2UnKSA/PyBlbnZpcm9ubWVudHNbMF0hXG4gIGxldCBzZWxlY3RlZEVudmlyb25tZW50U291cmNlOiBTZXR0aW5nU291cmNlIHwgbnVsbCA9IG51bGxcblxuICBpZiAoZGVmYXVsdEVudmlyb25tZW50SWQpIHtcbiAgICBjb25zdCBtYXRjaGluZ0Vudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoXG4gICAgICBlbnYgPT4gZW52LmVudmlyb25tZW50X2lkID09PSBkZWZhdWx0RW52aXJvbm1lbnRJZCxcbiAgICApXG5cbiAgICBpZiAobWF0Y2hpbmdFbnZpcm9ubWVudCkge1xuICAgICAgc2VsZWN0ZWRFbnZpcm9ubWVudCA9IG1hdGNoaW5nRW52aXJvbm1lbnRcblxuICAgICAgLy8gRmluZCB3aGljaCBzb3VyY2UgaGFzIHRoaXMgc2V0dGluZ1xuICAgICAgLy8gSXRlcmF0ZSBmcm9tIGxvd2VzdCB0byBoaWdoZXN0IHByaW9yaXR5LCBzbyB0aGUgbGFzdCBtYXRjaCB3aW5zIChoaWdoZXN0IHByaW9yaXR5KVxuICAgICAgZm9yIChsZXQgaSA9IFNFVFRJTkdfU09VUkNFUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBTRVRUSU5HX1NPVVJDRVNbaV1cbiAgICAgICAgaWYgKCFzb3VyY2UgfHwgc291cmNlID09PSAnZmxhZ1NldHRpbmdzJykge1xuICAgICAgICAgIC8vIFNraXAgZmxhZ1NldHRpbmdzIGFzIGl0J3Mgbm90IGEgbm9ybWFsIHNvdXJjZSB3ZSBjaGVja1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlU2V0dGluZ3MgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZShzb3VyY2UpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBzb3VyY2VTZXR0aW5ncz8ucmVtb3RlPy5kZWZhdWx0RW52aXJvbm1lbnRJZCA9PT0gZGVmYXVsdEVudmlyb25tZW50SWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZSA9IHNvdXJjZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJsZUVudmlyb25tZW50czogZW52aXJvbm1lbnRzLFxuICAgIHNlbGVjdGVkRW52aXJvbm1lbnQsXG4gICAgc2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZSxcbiAgfVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7XG4gIGdldFNldHRpbmdTb3VyY2VOYW1lLFxuICB0eXBlIFNldHRpbmdTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudFNlbGVjdGlvbkluZm8gfSBmcm9tICcuLi91dGlscy90ZWxlcG9ydC9lbnZpcm9ubWVudFNlbGVjdGlvbi5qcydcbmltcG9ydCB0eXBlIHsgRW52aXJvbm1lbnRSZXNvdXJjZSB9IGZyb20gJy4uL3V0aWxzL3RlbGVwb3J0L2Vudmlyb25tZW50cy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9Mb2FkaW5nU3RhdGUuanMnXG5cbmNvbnN0IERJQUxPR19USVRMRSA9ICdTZWxlY3QgUmVtb3RlIEVudmlyb25tZW50J1xuY29uc3QgU0VUVVBfSElOVCA9IGBDb25maWd1cmUgZW52aXJvbm1lbnRzIGF0OiBodHRwczovL2NsYXVkZS5haS9jb2RlYFxuXG50eXBlIFByb3BzID0ge1xuICBvbkRvbmU6IChtZXNzYWdlPzogc3RyaW5nKSA9PiB2b2lkXG59XG5cbnR5cGUgTG9hZGluZ1N0YXRlID0gJ2xvYWRpbmcnIHwgJ3VwZGF0aW5nJyB8IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIFJlbW90ZUVudmlyb25tZW50RGlhbG9nKHsgb25Eb25lIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlPExvYWRpbmdTdGF0ZT4oJ2xvYWRpbmcnKVxuICBjb25zdCBbZW52aXJvbm1lbnRzLCBzZXRFbnZpcm9ubWVudHNdID0gdXNlU3RhdGU8RW52aXJvbm1lbnRSZXNvdXJjZVtdPihbXSlcbiAgY29uc3QgW3NlbGVjdGVkRW52aXJvbm1lbnQsIHNldFNlbGVjdGVkRW52aXJvbm1lbnRdID1cbiAgICB1c2VTdGF0ZTxFbnZpcm9ubWVudFJlc291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3NlbGVjdGVkRW52aXJvbm1lbnRTb3VyY2UsIHNldFNlbGVjdGVkRW52aXJvbm1lbnRTb3VyY2VdID1cbiAgICB1c2VTdGF0ZTxTZXR0aW5nU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbmZvKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RW52aXJvbm1lbnRTZWxlY3Rpb25JbmZvKClcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgIHNldEVudmlyb25tZW50cyhyZXN1bHQuYXZhaWxhYmxlRW52aXJvbm1lbnRzKVxuICAgICAgICBzZXRTZWxlY3RlZEVudmlyb25tZW50KHJlc3VsdC5zZWxlY3RlZEVudmlyb25tZW50KVxuICAgICAgICBzZXRTZWxlY3RlZEVudmlyb25tZW50U291cmNlKHJlc3VsdC5zZWxlY3RlZEVudmlyb25tZW50U291cmNlKVxuICAgICAgICBzZXRMb2FkaW5nU3RhdGUobnVsbClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgY29uc3QgZmV0Y2hFcnJvciA9IHRvRXJyb3IoZXJyKVxuICAgICAgICBsb2dFcnJvcihmZXRjaEVycm9yKVxuICAgICAgICBzZXRFcnJvcihmZXRjaEVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHNldExvYWRpbmdTdGF0ZShudWxsKVxuICAgICAgfVxuICAgIH1cbiAgICB2b2lkIGZldGNoSW5mbygpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSAnY2FuY2VsJykge1xuICAgICAgb25Eb25lKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldExvYWRpbmdTdGF0ZSgndXBkYXRpbmcnKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRFbnYgPSBlbnZpcm9ubWVudHMuZmluZChlbnYgPT4gZW52LmVudmlyb25tZW50X2lkID09PSB2YWx1ZSlcblxuICAgIGlmICghc2VsZWN0ZWRFbnYpIHtcbiAgICAgIG9uRG9uZSgnRXJyb3I6IFNlbGVjdGVkIGVudmlyb25tZW50IG5vdCBmb3VuZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgnbG9jYWxTZXR0aW5ncycsIHtcbiAgICAgIHJlbW90ZToge1xuICAgICAgICBkZWZhdWx0RW52aXJvbm1lbnRJZDogc2VsZWN0ZWRFbnYuZW52aXJvbm1lbnRfaWQsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBvbkRvbmUoXG4gICAgICBgU2V0IGRlZmF1bHQgcmVtb3RlIGVudmlyb25tZW50IHRvICR7Y2hhbGsuYm9sZChzZWxlY3RlZEVudi5uYW1lKX0gKCR7c2VsZWN0ZWRFbnYuZW52aXJvbm1lbnRfaWR9KWAsXG4gICAgKVxuICB9XG5cbiAgLy8gTG9hZGluZyBzdGF0ZVxuICBpZiAobG9hZGluZ1N0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZyB0aXRsZT17RElBTE9HX1RJVExFfSBvbkNhbmNlbD17b25Eb25lfSBoaWRlSW5wdXRHdWlkZT5cbiAgICAgICAgPExvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiTG9hZGluZyBlbnZpcm9ubWVudHPigKZcIiAvPlxuICAgICAgPC9EaWFsb2c+XG4gICAgKVxuICB9XG5cbiAgLy8gRXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2cgdGl0bGU9e0RJQUxPR19USVRMRX0gb25DYW5jZWw9e29uRG9uZX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5FcnJvcjoge2Vycm9yfTwvVGV4dD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIClcbiAgfVxuXG4gIC8vIE5vIGVudmlyb25tZW50cyBhdmFpbGFibGVcbiAgaWYgKCFzZWxlY3RlZEVudmlyb25tZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2cgdGl0bGU9e0RJQUxPR19USVRMRX0gc3VidGl0bGU9e1NFVFVQX0hJTlR9IG9uQ2FuY2VsPXtvbkRvbmV9PlxuICAgICAgICA8VGV4dD5ObyByZW1vdGUgZW52aXJvbm1lbnRzIGF2YWlsYWJsZS48L1RleHQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICAvLyBTaW5nbGUgZW52aXJvbm1lbnQgLSBqdXN0IHNob3cgaW5mb1xuICBpZiAoZW52aXJvbm1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2luZ2xlRW52aXJvbm1lbnRDb250ZW50XG4gICAgICAgIGVudmlyb25tZW50PXtzZWxlY3RlZEVudmlyb25tZW50fVxuICAgICAgICBvbkRvbmU9e29uRG9uZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgLy8gTXVsdGlwbGUgZW52aXJvbm1lbnRzIC0gc2hvdyBzZWxlY3Rpb24gVUlcbiAgcmV0dXJuIChcbiAgICA8TXVsdGlwbGVFbnZpcm9ubWVudHNDb250ZW50XG4gICAgICBlbnZpcm9ubWVudHM9e2Vudmlyb25tZW50c31cbiAgICAgIHNlbGVjdGVkRW52aXJvbm1lbnQ9e3NlbGVjdGVkRW52aXJvbm1lbnR9XG4gICAgICBzZWxlY3RlZEVudmlyb25tZW50U291cmNlPXtzZWxlY3RlZEVudmlyb25tZW50U291cmNlfVxuICAgICAgbG9hZGluZ1N0YXRlPXtsb2FkaW5nU3RhdGV9XG4gICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxuICAgICAgb25DYW5jZWw9e29uRG9uZX1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIEVudmlyb25tZW50TGFiZWwoe1xuICBlbnZpcm9ubWVudCxcbn06IHtcbiAgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50UmVzb3VyY2Vcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxUZXh0PlxuICAgICAge2ZpZ3VyZXMudGlja30gVXNpbmcgPFRleHQgYm9sZD57ZW52aXJvbm1lbnQubmFtZX08L1RleHQ+eycgJ31cbiAgICAgIDxUZXh0IGRpbUNvbG9yPih7ZW52aXJvbm1lbnQuZW52aXJvbm1lbnRfaWR9KTwvVGV4dD5cbiAgICA8L1RleHQ+XG4gIClcbn1cblxuZnVuY3Rpb24gU2luZ2xlRW52aXJvbm1lbnRDb250ZW50KHtcbiAgZW52aXJvbm1lbnQsXG4gIG9uRG9uZSxcbn06IHtcbiAgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50UmVzb3VyY2VcbiAgb25Eb25lOiAoKSA9PiB2b2lkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gSGFuZGxlIEVudGVyIHRvIGNvbnRpbnVlXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06eWVzJywgb25Eb25lLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIHRpdGxlPXtESUFMT0dfVElUTEV9IHN1YnRpdGxlPXtTRVRVUF9ISU5UfSBvbkNhbmNlbD17b25Eb25lfT5cbiAgICAgIDxFbnZpcm9ubWVudExhYmVsIGVudmlyb25tZW50PXtlbnZpcm9ubWVudH0gLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5mdW5jdGlvbiBNdWx0aXBsZUVudmlyb25tZW50c0NvbnRlbnQoe1xuICBlbnZpcm9ubWVudHMsXG4gIHNlbGVjdGVkRW52aXJvbm1lbnQsXG4gIHNlbGVjdGVkRW52aXJvbm1lbnRTb3VyY2UsXG4gIGxvYWRpbmdTdGF0ZSxcbiAgb25TZWxlY3QsXG4gIG9uQ2FuY2VsLFxufToge1xuICBlbnZpcm9ubWVudHM6IEVudmlyb25tZW50UmVzb3VyY2VbXVxuICBzZWxlY3RlZEVudmlyb25tZW50OiBFbnZpcm9ubWVudFJlc291cmNlXG4gIHNlbGVjdGVkRW52aXJvbm1lbnRTb3VyY2U6IFNldHRpbmdTb3VyY2UgfCBudWxsXG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlXG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHNvdXJjZVN1ZmZpeCA9XG4gICAgc2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZSAmJiBzZWxlY3RlZEVudmlyb25tZW50U291cmNlICE9PSAnbG9jYWxTZXR0aW5ncydcbiAgICAgID8gYCAoZnJvbSAke2dldFNldHRpbmdTb3VyY2VOYW1lKHNlbGVjdGVkRW52aXJvbm1lbnRTb3VyY2UpfSBzZXR0aW5ncylgXG4gICAgICA6ICcnXG5cbiAgY29uc3Qgc3VidGl0bGUgPSAoXG4gICAgPFRleHQ+XG4gICAgICBDdXJyZW50bHkgdXNpbmc6IDxUZXh0IGJvbGQ+e3NlbGVjdGVkRW52aXJvbm1lbnQubmFtZX08L1RleHQ+XG4gICAgICB7c291cmNlU3VmZml4fVxuICAgIDwvVGV4dD5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9e0RJQUxPR19USVRMRX1cbiAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgPlxuICAgICAgPFRleHQgZGltQ29sb3I+e1NFVFVQX0hJTlR9PC9UZXh0PlxuICAgICAge2xvYWRpbmdTdGF0ZSA9PT0gJ3VwZGF0aW5nJyA/IChcbiAgICAgICAgPExvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiVXBkYXRpbmfigKZcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e2Vudmlyb25tZW50cy5tYXAoZW52ID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICB7ZW52Lm5hbWV9IDxUZXh0IGRpbUNvbG9yPih7ZW52LmVudmlyb25tZW50X2lkfSk8L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB2YWx1ZTogZW52LmVudmlyb25tZW50X2lkLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkRW52aXJvbm1lbnQuZW52aXJvbm1lbnRfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBvblNlbGVjdCgnY2FuY2VsJyl9XG4gICAgICAgICAgbGF5b3V0PVwiY29tcGFjdC12ZXJ0aWNhbFwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICA8L1RleHQ+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlbW90ZUVudmlyb25tZW50RGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZW1vdGVFbnZpcm9ubWVudERpYWxvZy5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgcmV0dXJuIDxSZW1vdGVFbnZpcm9ubWVudERpYWxvZyBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsZUFBc0IsOEJBQWlFO0FBRXJGLFFBQU0sZUFBZSxNQUFNLGtCQUFrQjtBQUU3QyxNQUFJLGFBQWEsV0FBVyxHQUFHO0FBQzdCLFdBQU87QUFBQSxNQUNMLHVCQUF1QixDQUFDO0FBQUEsTUFDeEIscUJBQXFCO0FBQUEsTUFDckIsMkJBQTJCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBR0EsUUFBTSxpQkFBaUIsdUJBQXVCO0FBQzlDLFFBQU0sdUJBQXVCLGdCQUFnQixRQUFRO0FBR3JELE1BQUksc0JBQ0YsYUFBYSxLQUFLLFNBQU8sSUFBSSxTQUFTLFFBQVEsS0FBSyxhQUFhLENBQUM7QUFDbkUsTUFBSSw0QkFBa0Q7QUFFdEQsTUFBSSxzQkFBc0I7QUFDeEIsVUFBTSxzQkFBc0IsYUFBYTtBQUFBLE1BQ3ZDLFNBQU8sSUFBSSxtQkFBbUI7QUFBQSxJQUNoQztBQUVBLFFBQUks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QUEsRUFBQSxNQUFBMkMsSUFBQTtBQW5DVG9CLFNBQUEsOEJBQUMsVUFDUWxCLE9BQUFBLGNBQ0dlLFVBQ0FILFVBQ1YsZ0JBQUEsUUFFQWpDLElBQ0NtQixJQWtCREMsRUFXRjtBQUFTNUMsTUFBQSxFQUFBLElBQUF5RDtBQUFBekQsTUFBQSxFQUFBLElBQUE0RDtBQUFBNUQsTUFBQSxFQUFBLElBQUEyQztBQUFBM0MsTUFBQSxFQUFBLElBQUErRDtFQUFBLE9BQUE7QUFBQUEsU0FBQS9ELEVBQUEsRUFBQTtFQUFBO0FBQUEsU0FwQ1QrRDtBQW9DUztBQWhFYixTQUFBRCxNQUFBM0IsS0FBQTtBQUFBLFNBdUM0QztJQUFBNkIsT0FFOUIsOEJBQUMsa0JBQ0U3QixJQUFHTyxNQUFNLEtBQUMsOEJBQUMsY0FBSyxVQUFBLFFBQVMsS0FBRVAsSUFBR0MsZ0JBQWdCLEdBQUMsQ0FDbEQ7SUFBT0osT0FFRkcsSUFBR0M7RUFDWjtBQUFDO0lBbE1MUyxjQUNBQzs7OztBQXZCTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUQsZUFBZTtBQUNyQixJQUFNQyxhQUFhOzs7OztBQ25CbkIsZUFBc0JtQixLQUNwQkMsUUFDMEI7QUFDMUIsU0FBTyw4QkFBQywyQkFBd0IsUUFBZTtBQUNqRDtBQVJBOzs7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJSZW1vdGVFbnZpcm9ubWVudERpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJsb2FkaW5nU3RhdGUiLCAic2V0TG9hZGluZ1N0YXRlIiwgInVzZVN0YXRlIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiZW52aXJvbm1lbnRzIiwgInNldEVudmlyb25tZW50cyIsICJzZWxlY3RlZEVudmlyb25tZW50IiwgInNldFNlbGVjdGVkRW52aXJvbm1lbnQiLCAic2VsZWN0ZWRFbnZpcm9ubWVudFNvdXJjZSIsICJzZXRTZWxlY3RlZEVudmlyb25tZW50U291cmNlIiwgImVycm9yIiwgInNldEVycm9yIiwgInQyIiwgInQzIiwgImNhbmNlbGxlZCIsICJmZXRjaEluZm8iLCAicmVzdWx0IiwgImdldEVudmlyb25tZW50U2VsZWN0aW9uSW5mbyIsICJhdmFpbGFibGVFbnZpcm9ubWVudHMiLCAidDQiLCAiZXJyIiwgImZldGNoRXJyb3IiLCAidG9FcnJvciIsICJsb2dFcnJvciIsICJtZXNzYWdlIiwgInVzZUVmZmVjdCIsICJoYW5kbGVTZWxlY3QiLCAidmFsdWUiLCAic2VsZWN0ZWRFbnYiLCAiZmluZCIsICJlbnYiLCAiZW52aXJvbm1lbnRfaWQiLCAidXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UiLCAicmVtb3RlIiwgImRlZmF1bHRFbnZpcm9ubWVudElkIiwgImNoYWxrIiwgImJvbGQiLCAibmFtZSIsICJ0NSIsICJ0NiIsICJESUFMT0dfVElUTEUiLCAiU0VUVVBfSElOVCIsICJsZW5ndGgiLCAiRW52aXJvbm1lbnRMYWJlbCIsICJlbnZpcm9ubWVudCIsICJmaWd1cmVzIiwgInRpY2siLCAiU2luZ2xlRW52aXJvbm1lbnRDb250ZW50IiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZyIsICJNdWx0aXBsZUVudmlyb25tZW50c0NvbnRlbnQiLCAib25TZWxlY3QiLCAib25DYW5jZWwiLCAiZ2V0U2V0dGluZ1NvdXJjZU5hbWUiLCAic291cmNlU3VmZml4IiwgInN1YnRpdGxlIiwgIm1hcCIsICJfdGVtcCIsICJ0NyIsICJsYWJlbCIsICJjYWxsIiwgIm9uRG9uZSJdCn0K
