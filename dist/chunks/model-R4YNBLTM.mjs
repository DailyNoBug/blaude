#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ModelPicker,
  init_ModelPicker,
  init_extraUsage,
  isBilledAsExtraUsage
} from "./chunk-MQZAKUXQ.mjs";
import {
  checkOpus1mAccess,
  checkSonnet1mAccess,
  init_AppState,
  init_check1mAccess,
  init_validateModel,
  useAppState,
  useSetAppState,
  validateModel
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  c,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  useEffect
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  MODEL_ALIASES,
  clearFastModeCooldown,
  getDefaultMainLoopModelSetting,
  init_aliases,
  init_fastMode,
  init_model,
  init_modelAllowlist,
  init_source,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  isModelAllowed,
  isOpus1mMergeEnabled,
  renderDefaultModelSetting,
  source_default
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  COMMON_HELP_ARGS,
  COMMON_INFO_ARGS,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
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

// src/commands/model/model.tsx
function ModelPickerWrapper(t0) {
  const $ = c(17);
  const {
    onDone
  } = t0;
  const mainLoopModel = useAppState(_temp);
  const mainLoopModelForSession = useAppState(_temp2);
  const isFastMode = useAppState(_temp3);
  const setAppState = useSetAppState();
  let t1;
  if ($[0] !== mainLoopModel || $[1] !== onDone) {
    t1 = function handleCancel2() {
      logEvent("tengu_model_command_menu", {
        action: "cancel"
      });
      const displayModel = renderModelLabel(mainLoopModel);
      onDone(`Kept model as ${source_default.bold(displayModel)}`, {
        display: "system"
      });
    };
    $[0] = mainLoopModel;
    $[1] = onDone;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleCancel = t1;
  let t2;
  if ($[3] !== isFastMode || $[4] !== mainLoopModel || $[5] !== onDone || $[6] !== setAppState) {
    t2 = function handleSelect2(model, effort) {
      logEvent("tengu_model_command_menu", {
        action: model,
        from_model: mainLoopModel,
        to_model: model
      });
      setAppState((prev) => ({
        ...prev,
        mainLoopModel: model,
        mainLoopModelForSession: null
      }));
      let message = `Set model to ${source_default.bold(renderModelLabel(model))}`;
      if (effort !== void 0) {
        message = message + ` with ${source_default.bold(effort)} effort`;
      }
      let wasFastModeToggledOn = void 0;
      if (isFastModeEnabled()) {
        clearFastModeCooldown();
        if (!isFastModeSupportedByModel(model) && isFastMode) {
          setAppState(_temp4);
          wasFastModeToggledOn = false;
        } else {
          if (isFastModeSupportedByModel(model) && isFastModeAvailable() && isFastMode) {
            message = message + " \xB7 Fast mode ON";
            wasFastModeToggledOn = true;
          }
        }
      }
      if (isBilledAsExtraUsage(model, wasFastModeToggledOn === true, isOpus1mMergeEnabled())) {
        message = message + " \xB7 Billed as extra usage";
      }
      if (wasFastModeToggledOn === false) {
        message = message + " \xB7 Fast mode OFF";
      }
      onDone(message);
    };
    $[3] = isFastMode;
    $[4] = mainLoopModel;
    $[5] = onDone;
    $[6] = setAppState;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const handleSelect = t2;
  let t3;
  if ($[8] !== isFastMode || $[9] !== mainLoopModel) {
    t3 = isFastModeEnabled() && isFastMode && isFastModeSupportedByModel(mainLoopModel) && isFastModeAvailable();
    $[8] = isFastMode;
    $[9] = mainLoopModel;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  let t4;
  if ($[11] !== handleCancel || $[12] !== handleSelect || $[13] !== mainLoopModel || $[14] !== mainLoopModelForSession || $[15] !== t3) {
    t4 = /* @__PURE__ */ createElement(ModelPicker, { initial: mainLoopModel, sessionModel: mainLoopModelForSession, onSelect: handleSelect, onCancel: handleCancel, isStandaloneCommand: true, showFastModeNotice: t3 });
    $[11] = handleCancel;
    $[12] = handleSelect;
    $[13] = mainLoopModel;
    $[14] = mainLoopModelForSession;
    $[15] = t3;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  return t4;
}
function _temp4(prev_0) {
  return {
    ...prev_0,
    fastMode: false
  };
}
function _temp3(s_1) {
  return s_1.fastMode;
}
function _temp2(s_0) {
  return s_0.mainLoopModelForSession;
}
function _temp(s) {
  return s.mainLoopModel;
}
function SetModelAndClose({
  args,
  onDone
}) {
  const isFastMode = useAppState((s) => s.fastMode);
  const setAppState = useSetAppState();
  const model = args === "default" ? null : args;
  useEffect(() => {
    async function handleModelChange() {
      if (model && !isModelAllowed(model)) {
        onDone(`Model '${model}' is not available. Your organization restricts model selection.`, {
          display: "system"
        });
        return;
      }
      if (model && isOpus1mUnavailable(model)) {
        onDone(`Opus 4.6 with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m`, {
          display: "system"
        });
        return;
      }
      if (model && isSonnet1mUnavailable(model)) {
        onDone(`Sonnet 4.6 with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m`, {
          display: "system"
        });
        return;
      }
      if (!model) {
        setModel(null);
        return;
      }
      if (isKnownAlias(model)) {
        setModel(model);
        return;
      }
      try {
        const {
          valid,
          error: error_0
        } = await validateModel(model);
        if (valid) {
          setModel(model);
        } else {
          onDone(error_0 || `Model '${model}' not found`, {
            display: "system"
          });
        }
      } catch (error) {
        onDone(`Failed to validate model: ${error.message}`, {
          display: "system"
        });
      }
    }
    function setModel(modelValue) {
      setAppState((prev) => ({
        ...prev,
        mainLoopModel: modelValue,
        mainLoopModelForSession: null
      }));
      let message = `Set model to ${source_default.bold(renderModelLabel(modelValue))}`;
      let wasFastModeToggledOn = void 0;
      if (isFastModeEnabled()) {
        clearFastModeCooldown();
        if (!isFastModeSupportedByModel(modelValue) && isFastMode) {
          setAppState((prev_0) => ({
            ...prev_0,
            fastMode: false
          }));
          wasFastModeToggledOn = false;
        } else if (isFastModeSupportedByModel(modelValue) && isFastMode) {
          message += ` \xB7 Fast mode ON`;
          wasFastModeToggledOn = true;
        }
      }
      if (isBilledAsExtraUsage(modelValue, wasFastModeToggledOn === true, isOpus1mMergeEnabled())) {
        message += ` \xB7 Billed as extra usage`;
      }
      if (wasFastModeToggledOn === false) {
        message += ` \xB7 Fast mode OFF`;
      }
      onDone(message);
    }
    void handleModelChange();
  }, [model, onDone, setAppState]);
  return null;
}
function isKnownAlias(model) {
  return MODEL_ALIASES.includes(model.toLowerCase().trim());
}
function isOpus1mUnavailable(model) {
  const m = model.toLowerCase();
  return !checkOpus1mAccess() && !isOpus1mMergeEnabled() && m.includes("opus") && m.includes("[1m]");
}
function isSonnet1mUnavailable(model) {
  const m = model.toLowerCase();
  return !checkSonnet1mAccess() && (m.includes("sonnet[1m]") || m.includes("sonnet-4-6[1m]"));
}
function ShowModelAndClose(t0) {
  const {
    onDone
  } = t0;
  const mainLoopModel = useAppState(_temp7);
  const mainLoopModelForSession = useAppState(_temp8);
  const effortValue = useAppState(_temp9);
  const displayModel = renderModelLabel(mainLoopModel);
  const effortInfo = effortValue !== void 0 ? ` (effort: ${effortValue})` : "";
  if (mainLoopModelForSession) {
    onDone(`Current model: ${source_default.bold(renderModelLabel(mainLoopModelForSession))} (session override from plan mode)
Base model: ${displayModel}${effortInfo}`);
  } else {
    onDone(`Current model: ${displayModel}${effortInfo}`);
  }
  return null;
}
function _temp9(s_1) {
  return s_1.effortValue;
}
function _temp8(s_0) {
  return s_0.mainLoopModelForSession;
}
function _temp7(s) {
  return s.mainLoopModel;
}
function renderModelLabel(model) {
  const rendered = renderDefaultModelSetting(model ?? getDefaultMainLoopModelSetting());
  return model === null ? `${rendered} (default)` : rendered;
}
var call;
var init_model2 = __esm({
  "src/commands/model/model.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_ModelPicker();
    init_xml();
    init_analytics();
    init_AppState();
    init_extraUsage();
    init_fastMode();
    init_aliases();
    init_check1mAccess();
    init_model();
    init_modelAllowlist();
    init_validateModel();
    call = async (onDone, _context, args) => {
      args = args?.trim() || "";
      if (COMMON_INFO_ARGS.includes(args)) {
        logEvent("tengu_model_command_inline_help", {
          args
        });
        return /* @__PURE__ */ createElement(ShowModelAndClose, { onDone });
      }
      if (COMMON_HELP_ARGS.includes(args)) {
        onDone("Run /model to open the model selection menu, or /model [modelName] to set the model.", {
          display: "system"
        });
        return;
      }
      if (args) {
        logEvent("tengu_model_command_inline", {
          args
        });
        return /* @__PURE__ */ createElement(SetModelAndClose, { args, onDone });
      }
      return /* @__PURE__ */ createElement(ModelPickerWrapper, { onDone });
    };
  }
});
init_model2();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVsL21vZGVsLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBNb2RlbFBpY2tlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kZWxQaWNrZXIuanMnXG5pbXBvcnQgeyBDT01NT05fSEVMUF9BUkdTLCBDT01NT05fSU5GT19BUkdTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHVzZUFwcFN0YXRlLCB1c2VTZXRBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgRWZmb3J0TGV2ZWwgfSBmcm9tICcuLi8uLi91dGlscy9lZmZvcnQuanMnXG5pbXBvcnQgeyBpc0JpbGxlZEFzRXh0cmFVc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2V4dHJhVXNhZ2UuanMnXG5pbXBvcnQge1xuICBjbGVhckZhc3RNb2RlQ29vbGRvd24sXG4gIGlzRmFzdE1vZGVBdmFpbGFibGUsXG4gIGlzRmFzdE1vZGVFbmFibGVkLFxuICBpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmFzdE1vZGUuanMnXG5pbXBvcnQgeyBNT0RFTF9BTElBU0VTIH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvYWxpYXNlcy5qcydcbmltcG9ydCB7XG4gIGNoZWNrT3B1czFtQWNjZXNzLFxuICBjaGVja1Nvbm5ldDFtQWNjZXNzLFxufSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9jaGVjazFtQWNjZXNzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdE1haW5Mb29wTW9kZWxTZXR0aW5nLFxuICBpc09wdXMxbU1lcmdlRW5hYmxlZCxcbiAgcmVuZGVyRGVmYXVsdE1vZGVsU2V0dGluZyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQgeyBpc01vZGVsQWxsb3dlZCB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL21vZGVsQWxsb3dsaXN0LmpzJ1xuaW1wb3J0IHsgdmFsaWRhdGVNb2RlbCB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL3ZhbGlkYXRlTW9kZWwuanMnXG5cbmZ1bmN0aW9uIE1vZGVsUGlja2VyV3JhcHBlcih7XG4gIG9uRG9uZSxcbn06IHtcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBtYWluTG9vcE1vZGVsID0gdXNlQXBwU3RhdGUocyA9PiBzLm1haW5Mb29wTW9kZWwpXG4gIGNvbnN0IG1haW5Mb29wTW9kZWxGb3JTZXNzaW9uID0gdXNlQXBwU3RhdGUocyA9PiBzLm1haW5Mb29wTW9kZWxGb3JTZXNzaW9uKVxuICBjb25zdCBpc0Zhc3RNb2RlID0gdXNlQXBwU3RhdGUocyA9PiBzLmZhc3RNb2RlKVxuICBjb25zdCBzZXRBcHBTdGF0ZSA9IHVzZVNldEFwcFN0YXRlKClcblxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwoKTogdm9pZCB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X21vZGVsX2NvbW1hbmRfbWVudScsIHtcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgJ2NhbmNlbCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIGNvbnN0IGRpc3BsYXlNb2RlbCA9IHJlbmRlck1vZGVsTGFiZWwobWFpbkxvb3BNb2RlbClcbiAgICBvbkRvbmUoYEtlcHQgbW9kZWwgYXMgJHtjaGFsay5ib2xkKGRpc3BsYXlNb2RlbCl9YCwge1xuICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChcbiAgICBtb2RlbDogc3RyaW5nIHwgbnVsbCxcbiAgICBlZmZvcnQ6IEVmZm9ydExldmVsIHwgdW5kZWZpbmVkLFxuICApOiB2b2lkIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfbW9kZWxfY29tbWFuZF9tZW51Jywge1xuICAgICAgYWN0aW9uOlxuICAgICAgICBtb2RlbCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgZnJvbV9tb2RlbDpcbiAgICAgICAgbWFpbkxvb3BNb2RlbCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgdG9fbW9kZWw6XG4gICAgICAgIG1vZGVsIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcbiAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgbWFpbkxvb3BNb2RlbDogbW9kZWwsXG4gICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogbnVsbCxcbiAgICB9KSlcblxuICAgIGxldCBtZXNzYWdlID0gYFNldCBtb2RlbCB0byAke2NoYWxrLmJvbGQocmVuZGVyTW9kZWxMYWJlbChtb2RlbCkpfWBcbiAgICBpZiAoZWZmb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCB3aXRoICR7Y2hhbGsuYm9sZChlZmZvcnQpfSBlZmZvcnRgXG4gICAgfVxuXG4gICAgLy8gVHVybiBvZmYgZmFzdCBtb2RlIGlmIHN3aXRjaGluZyB0byB1bnN1cHBvcnRlZCBtb2RlbFxuICAgIGxldCB3YXNGYXN0TW9kZVRvZ2dsZWRPbiA9IHVuZGVmaW5lZFxuICAgIGlmIChpc0Zhc3RNb2RlRW5hYmxlZCgpKSB7XG4gICAgICBjbGVhckZhc3RNb2RlQ29vbGRvd24oKVxuICAgICAgaWYgKCFpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbChtb2RlbCkgJiYgaXNGYXN0TW9kZSkge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBmYXN0TW9kZTogZmFsc2UsXG4gICAgICAgIH0pKVxuICAgICAgICB3YXNGYXN0TW9kZVRvZ2dsZWRPbiA9IGZhbHNlXG4gICAgICAgIC8vIERvIG5vdCB1cGRhdGUgZmFzdCBtb2RlIGluIHNldHRpbmdzIHNpbmNlIHRoaXMgaXMgYW4gYXV0b21hdGljIGRvd25ncmFkZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwobW9kZWwpICYmXG4gICAgICAgIGlzRmFzdE1vZGVBdmFpbGFibGUoKSAmJlxuICAgICAgICBpc0Zhc3RNb2RlXG4gICAgICApIHtcbiAgICAgICAgbWVzc2FnZSArPSBgIMK3IEZhc3QgbW9kZSBPTmBcbiAgICAgICAgd2FzRmFzdE1vZGVUb2dnbGVkT24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaXNCaWxsZWRBc0V4dHJhVXNhZ2UoXG4gICAgICAgIG1vZGVsLFxuICAgICAgICB3YXNGYXN0TW9kZVRvZ2dsZWRPbiA9PT0gdHJ1ZSxcbiAgICAgICAgaXNPcHVzMW1NZXJnZUVuYWJsZWQoKSxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCDCtyBCaWxsZWQgYXMgZXh0cmEgdXNhZ2VgXG4gICAgfVxuXG4gICAgaWYgKHdhc0Zhc3RNb2RlVG9nZ2xlZE9uID09PSBmYWxzZSkge1xuICAgICAgLy8gRmFzdCBtb2RlIHdhcyB0b2dnbGVkIG9mZiwgc2hvdyBzdWZmaXggYWZ0ZXIgZXh0cmEgdXNhZ2UgYmlsbGluZ1xuICAgICAgbWVzc2FnZSArPSBgIMK3IEZhc3QgbW9kZSBPRkZgXG4gICAgfVxuXG4gICAgb25Eb25lKG1lc3NhZ2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNb2RlbFBpY2tlclxuICAgICAgaW5pdGlhbD17bWFpbkxvb3BNb2RlbH1cbiAgICAgIHNlc3Npb25Nb2RlbD17bWFpbkxvb3BNb2RlbEZvclNlc3Npb259XG4gICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxuICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgIGlzU3RhbmRhbG9uZUNvbW1hbmRcbiAgICAgIHNob3dGYXN0TW9kZU5vdGljZT17XG4gICAgICAgIGlzRmFzdE1vZGVFbmFibGVkKCkgJiZcbiAgICAgICAgaXNGYXN0TW9kZSAmJlxuICAgICAgICBpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbChtYWluTG9vcE1vZGVsKSAmJlxuICAgICAgICBpc0Zhc3RNb2RlQXZhaWxhYmxlKClcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFNldE1vZGVsQW5kQ2xvc2Uoe1xuICBhcmdzLFxuICBvbkRvbmUsXG59OiB7XG4gIGFyZ3M6IHN0cmluZ1xuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGlzRmFzdE1vZGUgPSB1c2VBcHBTdGF0ZShzID0+IHMuZmFzdE1vZGUpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBtb2RlbCA9IGFyZ3MgPT09ICdkZWZhdWx0JyA/IG51bGwgOiBhcmdzXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVNb2RlbENoYW5nZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGlmIChtb2RlbCAmJiAhaXNNb2RlbEFsbG93ZWQobW9kZWwpKSB7XG4gICAgICAgIG9uRG9uZShcbiAgICAgICAgICBgTW9kZWwgJyR7bW9kZWx9JyBpcyBub3QgYXZhaWxhYmxlLiBZb3VyIG9yZ2FuaXphdGlvbiByZXN0cmljdHMgbW9kZWwgc2VsZWN0aW9uLmAsXG4gICAgICAgICAgeyBkaXNwbGF5OiAnc3lzdGVtJyB9LFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBAW01PREVMIExBVU5DSF06IFVwZGF0ZSBjaGVjayBmb3IgMU0gYWNjZXNzLlxuICAgICAgaWYgKG1vZGVsICYmIGlzT3B1czFtVW5hdmFpbGFibGUobW9kZWwpKSB7XG4gICAgICAgIG9uRG9uZShcbiAgICAgICAgICBgT3B1cyA0LjYgd2l0aCAxTSBjb250ZXh0IGlzIG5vdCBhdmFpbGFibGUgZm9yIHlvdXIgYWNjb3VudC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9tb2RlbC1jb25maWcjZXh0ZW5kZWQtY29udGV4dC13aXRoLTFtYCxcbiAgICAgICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlbCAmJiBpc1Nvbm5ldDFtVW5hdmFpbGFibGUobW9kZWwpKSB7XG4gICAgICAgIG9uRG9uZShcbiAgICAgICAgICBgU29ubmV0IDQuNiB3aXRoIDFNIGNvbnRleHQgaXMgbm90IGF2YWlsYWJsZSBmb3IgeW91ciBhY2NvdW50LiBMZWFybiBtb3JlOiBodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL21vZGVsLWNvbmZpZyNleHRlbmRlZC1jb250ZXh0LXdpdGgtMW1gLFxuICAgICAgICAgIHsgZGlzcGxheTogJ3N5c3RlbScgfSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCB2YWxpZGF0aW9uIGZvciBkZWZhdWx0IG1vZGVsXG4gICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgIHNldE1vZGVsKG51bGwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIHZhbGlkYXRpb24gZm9yIGtub3duIGFsaWFzZXMgLSB0aGV5J3JlIHByZWRlZmluZWQgYW5kIHNob3VsZCB3b3JrXG4gICAgICBpZiAoaXNLbm93bkFsaWFzKG1vZGVsKSkge1xuICAgICAgICBzZXRNb2RlbChtb2RlbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkYXRlIGFuZCBzZXQgY3VzdG9tIG1vZGVsXG4gICAgICB0cnkge1xuICAgICAgICAvLyBEb24ndCB1c2UgcGFyc2VVc2VyU3BlY2lmaWVkTW9kZWwgZm9yIG5vbi1hbGlhc2VzIHNpbmNlIGl0IGxvd2VyY2FzZXMgdGhlIGlucHV0XG4gICAgICAgIC8vIGFuZCBtb2RlbCBuYW1lcyBhcmUgY2FzZS1zZW5zaXRpdmVcbiAgICAgICAgY29uc3QgeyB2YWxpZCwgZXJyb3IgfSA9IGF3YWl0IHZhbGlkYXRlTW9kZWwobW9kZWwpXG5cbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgc2V0TW9kZWwobW9kZWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25Eb25lKGVycm9yIHx8IGBNb2RlbCAnJHttb2RlbH0nIG5vdCBmb3VuZGAsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdzeXN0ZW0nLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uRG9uZShgRmFpbGVkIHRvIHZhbGlkYXRlIG1vZGVsOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gLCB7XG4gICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TW9kZWwobW9kZWxWYWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBtYWluTG9vcE1vZGVsOiBtb2RlbFZhbHVlLFxuICAgICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogbnVsbCxcbiAgICAgIH0pKVxuICAgICAgbGV0IG1lc3NhZ2UgPSBgU2V0IG1vZGVsIHRvICR7Y2hhbGsuYm9sZChyZW5kZXJNb2RlbExhYmVsKG1vZGVsVmFsdWUpKX1gXG5cbiAgICAgIGxldCB3YXNGYXN0TW9kZVRvZ2dsZWRPbiA9IHVuZGVmaW5lZFxuICAgICAgaWYgKGlzRmFzdE1vZGVFbmFibGVkKCkpIHtcbiAgICAgICAgY2xlYXJGYXN0TW9kZUNvb2xkb3duKClcbiAgICAgICAgaWYgKCFpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbChtb2RlbFZhbHVlKSAmJiBpc0Zhc3RNb2RlKSB7XG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZhc3RNb2RlOiBmYWxzZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICB3YXNGYXN0TW9kZVRvZ2dsZWRPbiA9IGZhbHNlXG4gICAgICAgICAgLy8gRG8gbm90IHVwZGF0ZSBmYXN0IG1vZGUgaW4gc2V0dGluZ3Mgc2luY2UgdGhpcyBpcyBhbiBhdXRvbWF0aWMgZG93bmdyYWRlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGYXN0TW9kZVN1cHBvcnRlZEJ5TW9kZWwobW9kZWxWYWx1ZSkgJiYgaXNGYXN0TW9kZSkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gYCDCtyBGYXN0IG1vZGUgT05gXG4gICAgICAgICAgd2FzRmFzdE1vZGVUb2dnbGVkT24gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpc0JpbGxlZEFzRXh0cmFVc2FnZShcbiAgICAgICAgICBtb2RlbFZhbHVlLFxuICAgICAgICAgIHdhc0Zhc3RNb2RlVG9nZ2xlZE9uID09PSB0cnVlLFxuICAgICAgICAgIGlzT3B1czFtTWVyZ2VFbmFibGVkKCksXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBtZXNzYWdlICs9IGAgwrcgQmlsbGVkIGFzIGV4dHJhIHVzYWdlYFxuICAgICAgfVxuXG4gICAgICBpZiAod2FzRmFzdE1vZGVUb2dnbGVkT24gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEZhc3QgbW9kZSB3YXMgdG9nZ2xlZCBvZmYsIHNob3cgc3VmZml4IGFmdGVyIGV4dHJhIHVzYWdlIGJpbGxpbmdcbiAgICAgICAgbWVzc2FnZSArPSBgIMK3IEZhc3QgbW9kZSBPRkZgXG4gICAgICB9XG5cbiAgICAgIG9uRG9uZShtZXNzYWdlKVxuICAgIH1cblxuICAgIHZvaWQgaGFuZGxlTW9kZWxDaGFuZ2UoKVxuICB9LCBbbW9kZWwsIG9uRG9uZSwgc2V0QXBwU3RhdGVdKVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGlzS25vd25BbGlhcyhtb2RlbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAoTU9ERUxfQUxJQVNFUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMoXG4gICAgbW9kZWwudG9Mb3dlckNhc2UoKS50cmltKCksXG4gIClcbn1cblxuZnVuY3Rpb24gaXNPcHVzMW1VbmF2YWlsYWJsZShtb2RlbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IG0gPSBtb2RlbC50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiAoXG4gICAgIWNoZWNrT3B1czFtQWNjZXNzKCkgJiZcbiAgICAhaXNPcHVzMW1NZXJnZUVuYWJsZWQoKSAmJlxuICAgIG0uaW5jbHVkZXMoJ29wdXMnKSAmJlxuICAgIG0uaW5jbHVkZXMoJ1sxbV0nKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzU29ubmV0MW1VbmF2YWlsYWJsZShtb2RlbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IG0gPSBtb2RlbC50b0xvd2VyQ2FzZSgpXG4gIC8vIFdhcm4gYWJvdXQgU29ubmV0IGFuZCBTb25uZXQgNC42LCBidXQgbm90IFNvbm5ldCA0LjUgc2luY2UgdGhhdCBoYWRcbiAgLy8gYSBkaWZmZXJlbnQgYWNjZXNzIGNyaXRlcmlhLlxuICByZXR1cm4gKFxuICAgICFjaGVja1Nvbm5ldDFtQWNjZXNzKCkgJiZcbiAgICAobS5pbmNsdWRlcygnc29ubmV0WzFtXScpIHx8IG0uaW5jbHVkZXMoJ3Nvbm5ldC00LTZbMW1dJykpXG4gIClcbn1cblxuZnVuY3Rpb24gU2hvd01vZGVsQW5kQ2xvc2Uoe1xuICBvbkRvbmUsXG59OiB7XG4gIG9uRG9uZTogKHJlc3VsdD86IHN0cmluZykgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IG1haW5Mb29wTW9kZWwgPSB1c2VBcHBTdGF0ZShzID0+IHMubWFpbkxvb3BNb2RlbClcbiAgY29uc3QgbWFpbkxvb3BNb2RlbEZvclNlc3Npb24gPSB1c2VBcHBTdGF0ZShzID0+IHMubWFpbkxvb3BNb2RlbEZvclNlc3Npb24pXG4gIGNvbnN0IGVmZm9ydFZhbHVlID0gdXNlQXBwU3RhdGUocyA9PiBzLmVmZm9ydFZhbHVlKVxuICBjb25zdCBkaXNwbGF5TW9kZWwgPSByZW5kZXJNb2RlbExhYmVsKG1haW5Mb29wTW9kZWwpXG4gIGNvbnN0IGVmZm9ydEluZm8gPVxuICAgIGVmZm9ydFZhbHVlICE9PSB1bmRlZmluZWQgPyBgIChlZmZvcnQ6ICR7ZWZmb3J0VmFsdWV9KWAgOiAnJ1xuXG4gIGlmIChtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbikge1xuICAgIG9uRG9uZShcbiAgICAgIGBDdXJyZW50IG1vZGVsOiAke2NoYWxrLmJvbGQocmVuZGVyTW9kZWxMYWJlbChtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbikpfSAoc2Vzc2lvbiBvdmVycmlkZSBmcm9tIHBsYW4gbW9kZSlcXG5CYXNlIG1vZGVsOiAke2Rpc3BsYXlNb2RlbH0ke2VmZm9ydEluZm99YCxcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgb25Eb25lKGBDdXJyZW50IG1vZGVsOiAke2Rpc3BsYXlNb2RlbH0ke2VmZm9ydEluZm99YClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbEpTWENvbW1hbmRDYWxsID0gYXN5bmMgKG9uRG9uZSwgX2NvbnRleHQsIGFyZ3MpID0+IHtcbiAgYXJncyA9IGFyZ3M/LnRyaW0oKSB8fCAnJ1xuICBpZiAoQ09NTU9OX0lORk9fQVJHUy5pbmNsdWRlcyhhcmdzKSkge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tb2RlbF9jb21tYW5kX2lubGluZV9oZWxwJywge1xuICAgICAgYXJnczogYXJncyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gICAgcmV0dXJuIDxTaG93TW9kZWxBbmRDbG9zZSBvbkRvbmU9e29uRG9uZX0gLz5cbiAgfVxuICBpZiAoQ09NTU9OX0hFTFBfQVJHUy5pbmNsdWRlcyhhcmdzKSkge1xuICAgIG9uRG9uZShcbiAgICAgICdSdW4gL21vZGVsIHRvIG9wZW4gdGhlIG1vZGVsIHNlbGVjdGlvbiBtZW51LCBvciAvbW9kZWwgW21vZGVsTmFtZV0gdG8gc2V0IHRoZSBtb2RlbC4nLFxuICAgICAgeyBkaXNwbGF5OiAnc3lzdGVtJyB9LFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChhcmdzKSB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X21vZGVsX2NvbW1hbmRfaW5saW5lJywge1xuICAgICAgYXJnczogYXJncyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gICAgcmV0dXJuIDxTZXRNb2RlbEFuZENsb3NlIGFyZ3M9e2FyZ3N9IG9uRG9uZT17b25Eb25lfSAvPlxuICB9XG5cbiAgcmV0dXJuIDxNb2RlbFBpY2tlcldyYXBwZXIgb25Eb25lPXtvbkRvbmV9IC8+XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1vZGVsTGFiZWwobW9kZWw6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcge1xuICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckRlZmF1bHRNb2RlbFNldHRpbmcoXG4gICAgbW9kZWwgPz8gZ2V0RGVmYXVsdE1haW5Mb29wTW9kZWxTZXR0aW5nKCksXG4gIClcbiAgcmV0dXJuIG1vZGVsID09PSBudWxsID8gYCR7cmVuZGVyZWR9IChkZWZhdWx0KWAgOiByZW5kZXJlZFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EsU0FBQUEsbUJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBNEIsUUFBQTtJQUFBQztFQUFBLElBQUFIO0FBUTFCLFFBQUFJLGdCQUFzQkMsWUFBWUMsS0FBb0I7QUFDdEQsUUFBQUMsMEJBQWdDRixZQUFZRyxNQUE4QjtBQUMxRSxRQUFBQyxhQUFtQkosWUFBWUssTUFBZTtBQUM5QyxRQUFBQyxjQUFvQkMsZUFBZTtBQUFDLE1BQUFDO0FBQUEsTUFBQVosRUFBQSxDQUFBLE1BQUFHLGlCQUFBSCxFQUFBLENBQUEsTUFBQUUsUUFBQTtBQUVwQ1UsU0FBQSxTQUFBQyxnQkFBQTtBQUNFQyxlQUFTLDRCQUE0QjtRQUFBQyxR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QSxTQUt5Q0EsRUFBQ3hDO0FBQWM7QUE0Q3hELFNBQVNjLGlCQUFpQk0sT0FBOEI7QUFDdEQsUUFBTWlELFdBQVdDLDBCQUNmbEQsU0FBU21ELCtCQUErQixDQUMxQztBQUNBLFNBQU9uRCxVQUFVLE9BQU8sR0FBR2lELFFBQVEsZUFBZUE7QUFDcEQ7SUEvQmFHOzs7O0FBalRiO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBbVJPLElBQU1BLE9BQTRCLE9BQU96RSxRQUFRMEUsVUFBVTlCLFNBQVM7QUFDekVBLGFBQU9BLE1BQU1nQixLQUFLLEtBQUs7QUFDdkIsVUFBSWUsaUJBQWlCakIsU0FBU2QsSUFBSSxHQUFHO0FBQ25DaEMsaUJBQVMsbUNBQW1DO1VBQzFDZ0M7UUFDRixDQUFDO0FBQ0QsZUFBTyw4QkFBQyxxQkFBa0IsUUFBZTtNQUMzQztBQUNBLFVBQUlnQyxpQkFBaUJsQixTQUFTZCxJQUFJLEdBQUc7QUFDbkM1QyxlQUNFLHdGQUNBO1VBQUVrQixTQUFTO1FBQVMsQ0FDdEI7QUFDQTtNQUNGO0FBRUEsVUFBSTBCLE1BQU07QUFDUmhDLGlCQUFTLDhCQUE4QjtVQUNyQ2dDO1FBQ0YsQ0FBQztBQUNELGVBQU8sOEJBQUMsb0JBQWlCLE1BQVksUUFBZTtNQUN0RDtBQUVBLGFBQU8sOEJBQUMsc0JBQW1CLFFBQWU7SUFDNUM7OzsiLAogICJuYW1lcyI6IFsiTW9kZWxQaWNrZXJXcmFwcGVyIiwgInQwIiwgIiQiLCAiX2MiLCAib25Eb25lIiwgIm1haW5Mb29wTW9kZWwiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAiLCAibWFpbkxvb3BNb2RlbEZvclNlc3Npb24iLCAiX3RlbXAyIiwgImlzRmFzdE1vZGUiLCAiX3RlbXAzIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgInQxIiwgImhhbmRsZUNhbmNlbCIsICJsb2dFdmVudCIsICJhY3Rpb24iLCAiZGlzcGxheU1vZGVsIiwgInJlbmRlck1vZGVsTGFiZWwiLCAiY2hhbGsiLCAiYm9sZCIsICJkaXNwbGF5IiwgInQyIiwgImhhbmRsZVNlbGVjdCIsICJtb2RlbCIsICJlZmZvcnQiLCAiZnJvbV9tb2RlbCIsICJ0b19tb2RlbCIsICJwcmV2IiwgIm1lc3NhZ2UiLCAidW5kZWZpbmVkIiwgIndhc0Zhc3RNb2RlVG9nZ2xlZE9uIiwgImlzRmFzdE1vZGVFbmFibGVkIiwgImNsZWFyRmFzdE1vZGVDb29sZG93biIsICJpc0Zhc3RNb2RlU3VwcG9ydGVkQnlNb2RlbCIsICJfdGVtcDQiLCAiaXNGYXN0TW9kZUF2YWlsYWJsZSIsICJpc0JpbGxlZEFzRXh0cmFVc2FnZSIsICJpc09wdXMxbU1lcmdlRW5hYmxlZCIsICJ0MyIsICJ0NCIsICJwcmV2XzAiLCAiZmFzdE1vZGUiLCAic18xIiwgInMiLCAic18wIiwgIlNldE1vZGVsQW5kQ2xvc2UiLCAiYXJncyIsICJSZWFjdCIsICJ1c2VFZmZlY3QiLCAiaGFuZGxlTW9kZWxDaGFuZ2UiLCAiaXNNb2RlbEFsbG93ZWQiLCAiaXNPcHVzMW1VbmF2YWlsYWJsZSIsICJpc1Nvbm5ldDFtVW5hdmFpbGFibGUiLCAic2V0TW9kZWwiLCAiaXNLbm93bkFsaWFzIiwgInZhbGlkIiwgImVycm9yIiwgInZhbGlkYXRlTW9kZWwiLCAibW9kZWxWYWx1ZSIsICJNT0RFTF9BTElBU0VTIiwgImluY2x1ZGVzIiwgInRvTG93ZXJDYXNlIiwgInRyaW0iLCAibSIsICJjaGVja09wdXMxbUFjY2VzcyIsICJjaGVja1Nvbm5ldDFtQWNjZXNzIiwgIlNob3dNb2RlbEFuZENsb3NlIiwgIl90ZW1wNyIsICJfdGVtcDgiLCAiZWZmb3J0VmFsdWUiLCAiX3RlbXA5IiwgImVmZm9ydEluZm8iLCAicmVuZGVyZWQiLCAicmVuZGVyRGVmYXVsdE1vZGVsU2V0dGluZyIsICJnZXREZWZhdWx0TWFpbkxvb3BNb2RlbFNldHRpbmciLCAiY2FsbCIsICJfY29udGV4dCIsICJDT01NT05fSU5GT19BUkdTIiwgIkNPTU1PTl9IRUxQX0FSR1MiXQp9Cg==
