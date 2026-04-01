#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-Q23UA7RY.mjs";
import {
  getDisplayedEffortLevel,
  getEffortEnvOverride,
  getEffortValueDescription,
  init_AppState,
  init_effort,
  isEffortLevel,
  toPersistableEffort,
  useAppState,
  useSetAppState
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
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
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  c,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react,
  useEffect
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_settings2 as init_settings,
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
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
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
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
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

// src/commands/effort/effort.tsx
function setEffortValue(effortValue) {
  const persistable = toPersistableEffort(effortValue);
  if (persistable !== void 0) {
    const result = updateSettingsForSource("userSettings", {
      effortLevel: persistable
    });
    if (result.error) {
      return {
        message: `Failed to set effort level: ${result.error.message}`
      };
    }
  }
  logEvent("tengu_effort_command", {
    effort: effortValue
  });
  const envOverride = getEffortEnvOverride();
  if (envOverride !== void 0 && envOverride !== effortValue) {
    const envRaw = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    if (persistable === void 0) {
      return {
        message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${envRaw} overrides effort this session, and ${effortValue} is session-only (nothing saved)`,
        effortUpdate: {
          value: effortValue
        }
      };
    }
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${envRaw} overrides this session \u2014 clear it and ${effortValue} takes over`,
      effortUpdate: {
        value: effortValue
      }
    };
  }
  const description = getEffortValueDescription(effortValue);
  const suffix = persistable !== void 0 ? "" : " (this session only)";
  return {
    message: `Set effort level to ${effortValue}${suffix}: ${description}`,
    effortUpdate: {
      value: effortValue
    }
  };
}
function showCurrentEffort(appStateEffort, model) {
  const envOverride = getEffortEnvOverride();
  const effectiveValue = envOverride === null ? void 0 : envOverride ?? appStateEffort;
  if (effectiveValue === void 0) {
    const level = getDisplayedEffortLevel(model, appStateEffort);
    return {
      message: `Effort level: auto (currently ${level})`
    };
  }
  const description = getEffortValueDescription(effectiveValue);
  return {
    message: `Current effort level: ${effectiveValue} (${description})`
  };
}
function unsetEffortLevel() {
  const result = updateSettingsForSource("userSettings", {
    effortLevel: void 0
  });
  if (result.error) {
    return {
      message: `Failed to set effort level: ${result.error.message}`
    };
  }
  logEvent("tengu_effort_command", {
    effort: "auto"
  });
  const envOverride = getEffortEnvOverride();
  if (envOverride !== void 0 && envOverride !== null) {
    const envRaw = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `Cleared effort from settings, but CLAUDE_CODE_EFFORT_LEVEL=${envRaw} still controls this session`,
      effortUpdate: {
        value: void 0
      }
    };
  }
  return {
    message: "Effort level set to auto",
    effortUpdate: {
      value: void 0
    }
  };
}
function executeEffort(args) {
  const normalized = args.toLowerCase();
  if (normalized === "auto" || normalized === "unset") {
    return unsetEffortLevel();
  }
  if (!isEffortLevel(normalized)) {
    return {
      message: `Invalid argument: ${args}. Valid options are: low, medium, high, max, auto`
    };
  }
  return setEffortValue(normalized);
}
function ShowCurrentEffort(t0) {
  const {
    onDone
  } = t0;
  const effortValue = useAppState(_temp);
  const model = useMainLoopModel();
  const {
    message
  } = showCurrentEffort(effortValue, model);
  onDone(message);
  return null;
}
function _temp(s) {
  return s.effortValue;
}
function ApplyEffortAndClose(t0) {
  const $ = c(6);
  const {
    result,
    onDone
  } = t0;
  const setAppState = useSetAppState();
  const {
    effortUpdate,
    message
  } = result;
  let t1;
  let t2;
  if ($[0] !== effortUpdate || $[1] !== message || $[2] !== onDone || $[3] !== setAppState) {
    t1 = () => {
      if (effortUpdate) {
        setAppState((prev) => ({
          ...prev,
          effortValue: effortUpdate.value
        }));
      }
      onDone(message);
    };
    t2 = [setAppState, effortUpdate, message, onDone];
    $[0] = effortUpdate;
    $[1] = message;
    $[2] = onDone;
    $[3] = setAppState;
    $[4] = t1;
    $[5] = t2;
  } else {
    t1 = $[4];
    t2 = $[5];
  }
  useEffect(t1, t2);
  return null;
}
async function call(onDone, _context, args) {
  args = args?.trim() || "";
  if (COMMON_HELP_ARGS.includes(args)) {
    onDone("Usage: /effort [low|medium|high|max|auto]\n\nEffort levels:\n- low: Quick, straightforward implementation\n- medium: Balanced approach with standard testing\n- high: Comprehensive implementation with extensive testing\n- max: Maximum capability with deepest reasoning (Opus 4.6 only)\n- auto: Use the default effort level for your model");
    return;
  }
  if (!args || args === "current" || args === "status") {
    return /* @__PURE__ */ createElement(ShowCurrentEffort, { onDone });
  }
  const result = executeEffort(args);
  return /* @__PURE__ */ createElement(ApplyEffortAndClose, { result, onDone });
}
var COMMON_HELP_ARGS;
var init_effort2 = __esm({
  "src/commands/effort/effort.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useMainLoopModel();
    init_analytics();
    init_AppState();
    init_effort();
    init_settings();
    COMMON_HELP_ARGS = ["help", "-h", "--help"];
  }
});
init_effort2();
export {
  call,
  executeEffort,
  showCurrentEffort
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2VmZm9ydC9lZmZvcnQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1haW5Mb29wTW9kZWwgfSBmcm9tICcuLi8uLi9ob29rcy91c2VNYWluTG9vcE1vZGVsLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZVNldEFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQge1xuICB0eXBlIEVmZm9ydFZhbHVlLFxuICBnZXREaXNwbGF5ZWRFZmZvcnRMZXZlbCxcbiAgZ2V0RWZmb3J0RW52T3ZlcnJpZGUsXG4gIGdldEVmZm9ydFZhbHVlRGVzY3JpcHRpb24sXG4gIGlzRWZmb3J0TGV2ZWwsXG4gIHRvUGVyc2lzdGFibGVFZmZvcnQsXG59IGZyb20gJy4uLy4uL3V0aWxzL2VmZm9ydC5qcydcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbmNvbnN0IENPTU1PTl9IRUxQX0FSR1MgPSBbJ2hlbHAnLCAnLWgnLCAnLS1oZWxwJ11cblxudHlwZSBFZmZvcnRDb21tYW5kUmVzdWx0ID0ge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgZWZmb3J0VXBkYXRlPzogeyB2YWx1ZTogRWZmb3J0VmFsdWUgfCB1bmRlZmluZWQgfVxufVxuXG5mdW5jdGlvbiBzZXRFZmZvcnRWYWx1ZShlZmZvcnRWYWx1ZTogRWZmb3J0VmFsdWUpOiBFZmZvcnRDb21tYW5kUmVzdWx0IHtcbiAgY29uc3QgcGVyc2lzdGFibGUgPSB0b1BlcnNpc3RhYmxlRWZmb3J0KGVmZm9ydFZhbHVlKVxuICBpZiAocGVyc2lzdGFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7XG4gICAgICBlZmZvcnRMZXZlbDogcGVyc2lzdGFibGUsXG4gICAgfSlcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHNldCBlZmZvcnQgbGV2ZWw6ICR7cmVzdWx0LmVycm9yLm1lc3NhZ2V9YCxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXZlbnQoJ3Rlbmd1X2VmZm9ydF9jb21tYW5kJywge1xuICAgIGVmZm9ydDpcbiAgICAgIGVmZm9ydFZhbHVlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgLy8gRW52IHZhciB3aW5zIGF0IHJlc29sdmVBcHBsaWVkRWZmb3J0IHRpbWUuIE9ubHkgZmxhZyBpdCB3aGVuIGl0IGFjdHVhbGx5XG4gIC8vIGNvbmZsaWN0cyDigJQgaWYgZW52IG1hdGNoZXMgd2hhdCB0aGUgdXNlciBqdXN0IGFza2VkIGZvciwgdGhlIG91dGNvbWUgaXNcbiAgLy8gdGhlIHNhbWUsIHNvIFwiU2V0IGVmZm9ydCB0byBYXCIgaXMgdHJ1ZSBhbmQgdGhlIG5vdGUgaXMgbm9pc2UuXG4gIGNvbnN0IGVudk92ZXJyaWRlID0gZ2V0RWZmb3J0RW52T3ZlcnJpZGUoKVxuICBpZiAoZW52T3ZlcnJpZGUgIT09IHVuZGVmaW5lZCAmJiBlbnZPdmVycmlkZSAhPT0gZWZmb3J0VmFsdWUpIHtcbiAgICBjb25zdCBlbnZSYXcgPSBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FRkZPUlRfTEVWRUxcbiAgICBpZiAocGVyc2lzdGFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogYE5vdCBhcHBsaWVkOiBDTEFVREVfQ09ERV9FRkZPUlRfTEVWRUw9JHtlbnZSYXd9IG92ZXJyaWRlcyBlZmZvcnQgdGhpcyBzZXNzaW9uLCBhbmQgJHtlZmZvcnRWYWx1ZX0gaXMgc2Vzc2lvbi1vbmx5IChub3RoaW5nIHNhdmVkKWAsXG4gICAgICAgIGVmZm9ydFVwZGF0ZTogeyB2YWx1ZTogZWZmb3J0VmFsdWUgfSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBDTEFVREVfQ09ERV9FRkZPUlRfTEVWRUw9JHtlbnZSYXd9IG92ZXJyaWRlcyB0aGlzIHNlc3Npb24g4oCUIGNsZWFyIGl0IGFuZCAke2VmZm9ydFZhbHVlfSB0YWtlcyBvdmVyYCxcbiAgICAgIGVmZm9ydFVwZGF0ZTogeyB2YWx1ZTogZWZmb3J0VmFsdWUgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldEVmZm9ydFZhbHVlRGVzY3JpcHRpb24oZWZmb3J0VmFsdWUpXG4gIGNvbnN0IHN1ZmZpeCA9IHBlcnNpc3RhYmxlICE9PSB1bmRlZmluZWQgPyAnJyA6ICcgKHRoaXMgc2Vzc2lvbiBvbmx5KSdcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBgU2V0IGVmZm9ydCBsZXZlbCB0byAke2VmZm9ydFZhbHVlfSR7c3VmZml4fTogJHtkZXNjcmlwdGlvbn1gLFxuICAgIGVmZm9ydFVwZGF0ZTogeyB2YWx1ZTogZWZmb3J0VmFsdWUgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0N1cnJlbnRFZmZvcnQoXG4gIGFwcFN0YXRlRWZmb3J0OiBFZmZvcnRWYWx1ZSB8IHVuZGVmaW5lZCxcbiAgbW9kZWw6IHN0cmluZyxcbik6IEVmZm9ydENvbW1hbmRSZXN1bHQge1xuICBjb25zdCBlbnZPdmVycmlkZSA9IGdldEVmZm9ydEVudk92ZXJyaWRlKClcbiAgY29uc3QgZWZmZWN0aXZlVmFsdWUgPVxuICAgIGVudk92ZXJyaWRlID09PSBudWxsID8gdW5kZWZpbmVkIDogKGVudk92ZXJyaWRlID8/IGFwcFN0YXRlRWZmb3J0KVxuICBpZiAoZWZmZWN0aXZlVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGxldmVsID0gZ2V0RGlzcGxheWVkRWZmb3J0TGV2ZWwobW9kZWwsIGFwcFN0YXRlRWZmb3J0KVxuICAgIHJldHVybiB7IG1lc3NhZ2U6IGBFZmZvcnQgbGV2ZWw6IGF1dG8gKGN1cnJlbnRseSAke2xldmVsfSlgIH1cbiAgfVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldEVmZm9ydFZhbHVlRGVzY3JpcHRpb24oZWZmZWN0aXZlVmFsdWUpXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogYEN1cnJlbnQgZWZmb3J0IGxldmVsOiAke2VmZmVjdGl2ZVZhbHVlfSAoJHtkZXNjcmlwdGlvbn0pYCxcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnNldEVmZm9ydExldmVsKCk6IEVmZm9ydENvbW1hbmRSZXN1bHQge1xuICBjb25zdCByZXN1bHQgPSB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywge1xuICAgIGVmZm9ydExldmVsOiB1bmRlZmluZWQsXG4gIH0pXG4gIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogYEZhaWxlZCB0byBzZXQgZWZmb3J0IGxldmVsOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlfWAsXG4gICAgfVxuICB9XG4gIGxvZ0V2ZW50KCd0ZW5ndV9lZmZvcnRfY29tbWFuZCcsIHtcbiAgICBlZmZvcnQ6XG4gICAgICAnYXV0bycgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgfSlcbiAgLy8gZW52PWF1dG8vdW5zZXQgKG51bGwpIG1hdGNoZXMgd2hhdCAvZWZmb3J0IGF1dG8gYXNrcyBmb3IsIHNvIG9ubHkgd2FyblxuICAvLyB3aGVuIGVudiBpcyBwaW5uaW5nIGEgc3BlY2lmaWMgbGV2ZWwgdGhhdCB3aWxsIGtlZXAgb3ZlcnJpZGluZy5cbiAgY29uc3QgZW52T3ZlcnJpZGUgPSBnZXRFZmZvcnRFbnZPdmVycmlkZSgpXG4gIGlmIChlbnZPdmVycmlkZSAhPT0gdW5kZWZpbmVkICYmIGVudk92ZXJyaWRlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW52UmF3ID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRUZGT1JUX0xFVkVMXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBDbGVhcmVkIGVmZm9ydCBmcm9tIHNldHRpbmdzLCBidXQgQ0xBVURFX0NPREVfRUZGT1JUX0xFVkVMPSR7ZW52UmF3fSBzdGlsbCBjb250cm9scyB0aGlzIHNlc3Npb25gLFxuICAgICAgZWZmb3J0VXBkYXRlOiB7IHZhbHVlOiB1bmRlZmluZWQgfSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiAnRWZmb3J0IGxldmVsIHNldCB0byBhdXRvJyxcbiAgICBlZmZvcnRVcGRhdGU6IHsgdmFsdWU6IHVuZGVmaW5lZCB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlRWZmb3J0KGFyZ3M6IHN0cmluZyk6IEVmZm9ydENvbW1hbmRSZXN1bHQge1xuICBjb25zdCBub3JtYWxpemVkID0gYXJncy50b0xvd2VyQ2FzZSgpXG4gIGlmIChub3JtYWxpemVkID09PSAnYXV0bycgfHwgbm9ybWFsaXplZCA9PT0gJ3Vuc2V0Jykge1xuICAgIHJldHVybiB1bnNldEVmZm9ydExldmVsKClcbiAgfVxuXG4gIGlmICghaXNFZmZvcnRMZXZlbChub3JtYWxpemVkKSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBgSW52YWxpZCBhcmd1bWVudDogJHthcmdzfS4gVmFsaWQgb3B0aW9ucyBhcmU6IGxvdywgbWVkaXVtLCBoaWdoLCBtYXgsIGF1dG9gLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXRFZmZvcnRWYWx1ZShub3JtYWxpemVkKVxufVxuXG5mdW5jdGlvbiBTaG93Q3VycmVudEVmZm9ydCh7XG4gIG9uRG9uZSxcbn06IHtcbiAgb25Eb25lOiAocmVzdWx0OiBzdHJpbmcpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBlZmZvcnRWYWx1ZSA9IHVzZUFwcFN0YXRlKHMgPT4gcy5lZmZvcnRWYWx1ZSlcbiAgY29uc3QgbW9kZWwgPSB1c2VNYWluTG9vcE1vZGVsKClcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBzaG93Q3VycmVudEVmZm9ydChlZmZvcnRWYWx1ZSwgbW9kZWwpXG4gIG9uRG9uZShtZXNzYWdlKVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBBcHBseUVmZm9ydEFuZENsb3NlKHtcbiAgcmVzdWx0LFxuICBvbkRvbmUsXG59OiB7XG4gIHJlc3VsdDogRWZmb3J0Q29tbWFuZFJlc3VsdFxuICBvbkRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCB7IGVmZm9ydFVwZGF0ZSwgbWVzc2FnZSB9ID0gcmVzdWx0XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVmZm9ydFVwZGF0ZSkge1xuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBlZmZvcnRWYWx1ZTogZWZmb3J0VXBkYXRlLnZhbHVlLFxuICAgICAgfSkpXG4gICAgfVxuICAgIG9uRG9uZShtZXNzYWdlKVxuICB9LCBbc2V0QXBwU3RhdGUsIGVmZm9ydFVwZGF0ZSwgbWVzc2FnZSwgb25Eb25lXSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBfY29udGV4dDogdW5rbm93bixcbiAgYXJncz86IHN0cmluZyxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIGFyZ3MgPSBhcmdzPy50cmltKCkgfHwgJydcblxuICBpZiAoQ09NTU9OX0hFTFBfQVJHUy5pbmNsdWRlcyhhcmdzKSkge1xuICAgIG9uRG9uZShcbiAgICAgICdVc2FnZTogL2VmZm9ydCBbbG93fG1lZGl1bXxoaWdofG1heHxhdXRvXVxcblxcbkVmZm9ydCBsZXZlbHM6XFxuLSBsb3c6IFF1aWNrLCBzdHJhaWdodGZvcndhcmQgaW1wbGVtZW50YXRpb25cXG4tIG1lZGl1bTogQmFsYW5jZWQgYXBwcm9hY2ggd2l0aCBzdGFuZGFyZCB0ZXN0aW5nXFxuLSBoaWdoOiBDb21wcmVoZW5zaXZlIGltcGxlbWVudGF0aW9uIHdpdGggZXh0ZW5zaXZlIHRlc3RpbmdcXG4tIG1heDogTWF4aW11bSBjYXBhYmlsaXR5IHdpdGggZGVlcGVzdCByZWFzb25pbmcgKE9wdXMgNC42IG9ubHkpXFxuLSBhdXRvOiBVc2UgdGhlIGRlZmF1bHQgZWZmb3J0IGxldmVsIGZvciB5b3VyIG1vZGVsJyxcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWFyZ3MgfHwgYXJncyA9PT0gJ2N1cnJlbnQnIHx8IGFyZ3MgPT09ICdzdGF0dXMnKSB7XG4gICAgcmV0dXJuIDxTaG93Q3VycmVudEVmZm9ydCBvbkRvbmU9e29uRG9uZX0gLz5cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGV4ZWN1dGVFZmZvcnQoYXJncylcbiAgcmV0dXJuIDxBcHBseUVmZm9ydEFuZENsb3NlIHJlc3VsdD17cmVzdWx0fSBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUssS0FBSztBQUV2QixNQUFJQyxpQkFBaUJDLFNBQVN6QixJQUFJLEdBQUc7QUFDbkNNLFdBQ0Usa1ZBQ0Y7QUFDQTtFQUNGO0FBRUEsTUFBSSxDQUFDTixRQUFRQSxTQUFTLGFBQWFBLFNBQVMsVUFBVTtBQUNwRCxXQUFPLDhCQUFDLHFCQUFrQixRQUFlO0VBQzNDO0FBRUEsUUFBTTFCLFNBQVN5QixjQUFjQyxJQUFJO0FBQ2pDLFNBQU8sOEJBQUMsdUJBQW9CLFFBQWdCLFFBQWU7QUFDN0Q7SUFwS013Qjs7OztBQWxCTjtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBUUE7QUFFQSxJQUFNQSxtQkFBbUIsQ0FBQyxRQUFRLE1BQU0sUUFBUTs7OyIsCiAgIm5hbWVzIjogWyJzZXRFZmZvcnRWYWx1ZSIsICJlZmZvcnRWYWx1ZSIsICJwZXJzaXN0YWJsZSIsICJ0b1BlcnNpc3RhYmxlRWZmb3J0IiwgInVuZGVmaW5lZCIsICJyZXN1bHQiLCAidXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UiLCAiZWZmb3J0TGV2ZWwiLCAiZXJyb3IiLCAibWVzc2FnZSIsICJsb2dFdmVudCIsICJlZmZvcnQiLCAiZW52T3ZlcnJpZGUiLCAiZ2V0RWZmb3J0RW52T3ZlcnJpZGUiLCAiZW52UmF3IiwgInByb2Nlc3MiLCAiZW52IiwgIkNMQVVERV9DT0RFX0VGRk9SVF9MRVZFTCIsICJlZmZvcnRVcGRhdGUiLCAidmFsdWUiLCAiZGVzY3JpcHRpb24iLCAiZ2V0RWZmb3J0VmFsdWVEZXNjcmlwdGlvbiIsICJzdWZmaXgiLCAic2hvd0N1cnJlbnRFZmZvcnQiLCAiYXBwU3RhdGVFZmZvcnQiLCAibW9kZWwiLCAiZWZmZWN0aXZlVmFsdWUiLCAibGV2ZWwiLCAiZ2V0RGlzcGxheWVkRWZmb3J0TGV2ZWwiLCAidW5zZXRFZmZvcnRMZXZlbCIsICJleGVjdXRlRWZmb3J0IiwgImFyZ3MiLCAibm9ybWFsaXplZCIsICJ0b0xvd2VyQ2FzZSIsICJpc0VmZm9ydExldmVsIiwgIlNob3dDdXJyZW50RWZmb3J0IiwgInQwIiwgIm9uRG9uZSIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcCIsICJ1c2VNYWluTG9vcE1vZGVsIiwgInMiLCAiQXBwbHlFZmZvcnRBbmRDbG9zZSIsICIkIiwgIl9jIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgInQxIiwgInQyIiwgInByZXYiLCAiUmVhY3QiLCAidXNlRWZmZWN0IiwgImNhbGwiLCAiX2NvbnRleHQiLCAidHJpbSIsICJDT01NT05fSEVMUF9BUkdTIiwgImluY2x1ZGVzIl0KfQo=
