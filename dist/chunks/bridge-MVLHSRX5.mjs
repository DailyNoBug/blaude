#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_RemoteCallout,
  shouldShowRemoteCallout
} from "./chunk-AIWEM4OS.mjs";
import {
  checkEnvLessBridgeMinVersion,
  init_envLessBridgeConfig
} from "./chunk-4CUQRZU6.mjs";
import {
  init_qrcode,
  toString
} from "./chunk-SST3HAV6.mjs";
import {
  getBridgeAccessToken,
  init_bridgeConfig
} from "./chunk-HWCIXFFE.mjs";
import {
  ListItem,
  init_AppState,
  init_ListItem,
  init_overlayContext,
  useAppState,
  useRegisterOverlay,
  useSetAppState
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import {
  BRIDGE_LOGIN_INSTRUCTION,
  REMOTE_CONTROL_DISCONNECTED_MSG,
  init_types
} from "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  useKeybindings
} from "./chunk-HO5F7BV3.mjs";
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
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
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
  checkBridgeMinVersion,
  getBridgeDisabledReason,
  init_bridgeEnabled,
  isEnvLessBridgeEnabled
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
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/bridge/bridge.tsx
function BridgeToggle(t0) {
  const $ = c(10);
  const {
    onDone,
    name
  } = t0;
  const setAppState = useSetAppState();
  const replBridgeConnected = useAppState(_temp);
  const replBridgeEnabled = useAppState(_temp2);
  const replBridgeOutboundOnly = useAppState(_temp3);
  const [showDisconnectDialog, setShowDisconnectDialog] = useState(false);
  let t1;
  if ($[0] !== name || $[1] !== onDone || $[2] !== replBridgeConnected || $[3] !== replBridgeEnabled || $[4] !== replBridgeOutboundOnly || $[5] !== setAppState) {
    t1 = () => {
      if ((replBridgeConnected || replBridgeEnabled) && !replBridgeOutboundOnly) {
        setShowDisconnectDialog(true);
        return;
      }
      let cancelled = false;
      (async () => {
        const error = await checkBridgePrerequisites();
        if (cancelled) {
          return;
        }
        if (error) {
          logEvent("tengu_bridge_command", {
            action: "preflight_failed"
          });
          onDone(error, {
            display: "system"
          });
          return;
        }
        if (shouldShowRemoteCallout()) {
          setAppState((prev) => {
            if (prev.showRemoteCallout) {
              return prev;
            }
            return {
              ...prev,
              showRemoteCallout: true,
              replBridgeInitialName: name
            };
          });
          onDone("", {
            display: "system"
          });
          return;
        }
        logEvent("tengu_bridge_command", {
          action: "connect"
        });
        setAppState((prev_0) => {
          if (prev_0.replBridgeEnabled && !prev_0.replBridgeOutboundOnly) {
            return prev_0;
          }
          return {
            ...prev_0,
            replBridgeEnabled: true,
            replBridgeExplicit: true,
            replBridgeOutboundOnly: false,
            replBridgeInitialName: name
          };
        });
        onDone("Remote Control connecting\u2026", {
          display: "system"
        });
      })();
      return () => {
        cancelled = true;
      };
    };
    $[0] = name;
    $[1] = onDone;
    $[2] = replBridgeConnected;
    $[3] = replBridgeEnabled;
    $[4] = replBridgeOutboundOnly;
    $[5] = setAppState;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  let t2;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  useEffect(t1, t2);
  if (showDisconnectDialog) {
    let t3;
    if ($[8] !== onDone) {
      t3 = /* @__PURE__ */ createElement(BridgeDisconnectDialog, { onDone });
      $[8] = onDone;
      $[9] = t3;
    } else {
      t3 = $[9];
    }
    return t3;
  }
  return null;
}
function _temp3(s_1) {
  return s_1.replBridgeOutboundOnly;
}
function _temp2(s_0) {
  return s_0.replBridgeEnabled;
}
function _temp(s) {
  return s.replBridgeConnected;
}
function BridgeDisconnectDialog(t0) {
  const $ = c(61);
  const {
    onDone
  } = t0;
  useRegisterOverlay("bridge-disconnect-dialog");
  const setAppState = useSetAppState();
  const sessionUrl = useAppState(_temp4);
  const connectUrl = useAppState(_temp5);
  const sessionActive = useAppState(_temp6);
  const [focusIndex, setFocusIndex] = useState(2);
  const [showQR, setShowQR] = useState(false);
  const [qrText, setQrText] = useState("");
  const displayUrl = sessionActive ? sessionUrl : connectUrl;
  let t1;
  let t2;
  if ($[0] !== displayUrl || $[1] !== showQR) {
    t1 = () => {
      if (!showQR || !displayUrl) {
        setQrText("");
        return;
      }
      toString(displayUrl, {
        type: "utf8",
        errorCorrectionLevel: "L",
        small: true
      }).then(setQrText).catch(() => setQrText(""));
    };
    t2 = [showQR, displayUrl];
    $[0] = displayUrl;
    $[1] = showQR;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  let t3;
  if ($[4] !== onDone || $[5] !== setAppState) {
    t3 = function handleDisconnect2() {
      setAppState(_temp7);
      logEvent("tengu_bridge_command", {
        action: "disconnect"
      });
      onDone(REMOTE_CONTROL_DISCONNECTED_MSG, {
        display: "system"
      });
    };
    $[4] = onDone;
    $[5] = setAppState;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const handleDisconnect = t3;
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = function handleShowQR2() {
      setShowQR(_temp8);
    };
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const handleShowQR = t4;
  let t5;
  if ($[8] !== onDone) {
    t5 = function handleContinue2() {
      onDone(void 0, {
        display: "skip"
      });
    };
    $[8] = onDone;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  const handleContinue = t5;
  let t6;
  let t7;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = () => setFocusIndex(_temp9);
    t7 = () => setFocusIndex(_temp0);
    $[10] = t6;
    $[11] = t7;
  } else {
    t6 = $[10];
    t7 = $[11];
  }
  let t8;
  if ($[12] !== focusIndex || $[13] !== handleContinue || $[14] !== handleDisconnect) {
    t8 = {
      "select:next": t6,
      "select:previous": t7,
      "select:accept": () => {
        if (focusIndex === 0) {
          handleDisconnect();
        } else {
          if (focusIndex === 1) {
            handleShowQR();
          } else {
            handleContinue();
          }
        }
      }
    };
    $[12] = focusIndex;
    $[13] = handleContinue;
    $[14] = handleDisconnect;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      context: "Select"
    };
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  useKeybindings(t8, t9);
  let T0;
  let T1;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t16;
  if ($[17] !== displayUrl || $[18] !== handleContinue || $[19] !== qrText || $[20] !== showQR) {
    const qrLines = qrText ? qrText.split("\n").filter(_temp1) : [];
    T1 = Dialog;
    t14 = "Remote Control";
    t15 = handleContinue;
    t16 = true;
    T0 = ThemedBox_default;
    t10 = "column";
    t11 = 1;
    const t172 = displayUrl ? ` at ${displayUrl}` : "";
    if ($[30] !== t172) {
      t12 = /* @__PURE__ */ createElement(ThemedText, null, "This session is available via Remote Control", t172, ".");
      $[30] = t172;
      $[31] = t12;
    } else {
      t12 = $[31];
    }
    t13 = showQR && qrLines.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, qrLines.map(_temp10));
    $[17] = displayUrl;
    $[18] = handleContinue;
    $[19] = qrText;
    $[20] = showQR;
    $[21] = T0;
    $[22] = T1;
    $[23] = t10;
    $[24] = t11;
    $[25] = t12;
    $[26] = t13;
    $[27] = t14;
    $[28] = t15;
    $[29] = t16;
  } else {
    T0 = $[21];
    T1 = $[22];
    t10 = $[23];
    t11 = $[24];
    t12 = $[25];
    t13 = $[26];
    t14 = $[27];
    t15 = $[28];
    t16 = $[29];
  }
  const t17 = focusIndex === 0;
  let t18;
  if ($[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ createElement(ThemedText, null, "Disconnect this session");
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  let t19;
  if ($[33] !== t17) {
    t19 = /* @__PURE__ */ createElement(ListItem, { isFocused: t17 }, t18);
    $[33] = t17;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  const t20 = focusIndex === 1;
  const t21 = showQR ? "Hide QR code" : "Show QR code";
  let t22;
  if ($[35] !== t21) {
    t22 = /* @__PURE__ */ createElement(ThemedText, null, t21);
    $[35] = t21;
    $[36] = t22;
  } else {
    t22 = $[36];
  }
  let t23;
  if ($[37] !== t20 || $[38] !== t22) {
    t23 = /* @__PURE__ */ createElement(ListItem, { isFocused: t20 }, t22);
    $[37] = t20;
    $[38] = t22;
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  const t24 = focusIndex === 2;
  let t25;
  if ($[40] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ createElement(ThemedText, null, "Continue");
    $[40] = t25;
  } else {
    t25 = $[40];
  }
  let t26;
  if ($[41] !== t24) {
    t26 = /* @__PURE__ */ createElement(ListItem, { isFocused: t24 }, t25);
    $[41] = t24;
    $[42] = t26;
  } else {
    t26 = $[42];
  }
  let t27;
  if ($[43] !== t19 || $[44] !== t23 || $[45] !== t26) {
    t27 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t19, t23, t26);
    $[43] = t19;
    $[44] = t23;
    $[45] = t26;
    $[46] = t27;
  } else {
    t27 = $[46];
  }
  let t28;
  if ($[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Enter to select \xB7 Esc to continue");
    $[47] = t28;
  } else {
    t28 = $[47];
  }
  let t29;
  if ($[48] !== T0 || $[49] !== t10 || $[50] !== t11 || $[51] !== t12 || $[52] !== t13 || $[53] !== t27) {
    t29 = /* @__PURE__ */ createElement(T0, { flexDirection: t10, gap: t11 }, t12, t13, t27, t28);
    $[48] = T0;
    $[49] = t10;
    $[50] = t11;
    $[51] = t12;
    $[52] = t13;
    $[53] = t27;
    $[54] = t29;
  } else {
    t29 = $[54];
  }
  let t30;
  if ($[55] !== T1 || $[56] !== t14 || $[57] !== t15 || $[58] !== t16 || $[59] !== t29) {
    t30 = /* @__PURE__ */ createElement(T1, { title: t14, onCancel: t15, hideInputGuide: t16 }, t29);
    $[55] = T1;
    $[56] = t14;
    $[57] = t15;
    $[58] = t16;
    $[59] = t29;
    $[60] = t30;
  } else {
    t30 = $[60];
  }
  return t30;
}
function _temp10(line, i_1) {
  return /* @__PURE__ */ createElement(ThemedText, { key: i_1 }, line);
}
function _temp1(l) {
  return l.length > 0;
}
function _temp0(i_0) {
  return (i_0 - 1 + 3) % 3;
}
function _temp9(i) {
  return (i + 1) % 3;
}
function _temp8(prev_0) {
  return !prev_0;
}
function _temp7(prev) {
  if (!prev.replBridgeEnabled) {
    return prev;
  }
  return {
    ...prev,
    replBridgeEnabled: false,
    replBridgeExplicit: false,
    replBridgeOutboundOnly: false
  };
}
function _temp6(s_1) {
  return s_1.replBridgeSessionActive;
}
function _temp5(s_0) {
  return s_0.replBridgeConnectUrl;
}
function _temp4(s) {
  return s.replBridgeSessionUrl;
}
async function checkBridgePrerequisites() {
  const {
    waitForPolicyLimitsToLoad,
    isPolicyAllowed
  } = await import("./policyLimits-FYQUFVGW.mjs");
  await waitForPolicyLimitsToLoad();
  if (!isPolicyAllowed("allow_remote_control")) {
    return "Remote Control is disabled by your organization's policy.";
  }
  const disabledReason = await getBridgeDisabledReason();
  if (disabledReason) {
    return disabledReason;
  }
  let useV2 = isEnvLessBridgeEnabled();
  if (feature("KAIROS") && useV2) {
    const {
      isAssistantMode
    } = await import("./assistant-3HZI6RKL.mjs");
    if (isAssistantMode()) {
      useV2 = false;
    }
  }
  const versionError = useV2 ? await checkEnvLessBridgeMinVersion() : checkBridgeMinVersion();
  if (versionError) {
    return versionError;
  }
  if (!getBridgeAccessToken()) {
    return BRIDGE_LOGIN_INSTRUCTION;
  }
  logForDebugging("[bridge] Prerequisites passed, enabling bridge");
  return null;
}
async function call(onDone, _context, args) {
  const name = args.trim() || void 0;
  return /* @__PURE__ */ createElement(BridgeToggle, { onDone, name });
}
var init_bridge = __esm({
  "src/commands/bridge/bridge.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_qrcode();
    init_react();
    init_react();
    init_bridgeConfig();
    init_bridgeEnabled();
    init_envLessBridgeConfig();
    init_types();
    init_Dialog();
    init_ListItem();
    init_RemoteCallout();
    init_overlayContext();
    init_ink();
    init_useKeybinding();
    init_analytics();
    init_AppState();
    init_debug();
  }
});
init_bridge();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2JyaWRnZS9icmlkZ2UudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHRvU3RyaW5nIGFzIHFyVG9TdHJpbmcgfSBmcm9tICdxcmNvZGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEJyaWRnZUFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vLi4vYnJpZGdlL2JyaWRnZUNvbmZpZy5qcydcbmltcG9ydCB7XG4gIGNoZWNrQnJpZGdlTWluVmVyc2lvbixcbiAgZ2V0QnJpZGdlRGlzYWJsZWRSZWFzb24sXG4gIGlzRW52TGVzc0JyaWRnZUVuYWJsZWQsXG59IGZyb20gJy4uLy4uL2JyaWRnZS9icmlkZ2VFbmFibGVkLmpzJ1xuaW1wb3J0IHsgY2hlY2tFbnZMZXNzQnJpZGdlTWluVmVyc2lvbiB9IGZyb20gJy4uLy4uL2JyaWRnZS9lbnZMZXNzQnJpZGdlQ29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgQlJJREdFX0xPR0lOX0lOU1RSVUNUSU9OLFxuICBSRU1PVEVfQ09OVFJPTF9ESVNDT05ORUNURURfTVNHLFxufSBmcm9tICcuLi8uLi9icmlkZ2UvdHlwZXMuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vTGlzdEl0ZW0uanMnXG5pbXBvcnQgeyBzaG91bGRTaG93UmVtb3RlQ2FsbG91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVtb3RlQ2FsbG91dC5qcydcbmltcG9ydCB7IHVzZVJlZ2lzdGVyT3ZlcmxheSB9IGZyb20gJy4uLy4uL2NvbnRleHQvb3ZlcmxheUNvbnRleHQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFVzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG59IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmVcbiAgbmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIC9yZW1vdGUtY29udHJvbCBjb21tYW5kIOKAlCBtYW5hZ2VzIHRoZSBiaWRpcmVjdGlvbmFsIGJyaWRnZSBjb25uZWN0aW9uLlxuICpcbiAqIFdoZW4gZW5hYmxlZCwgc2V0cyByZXBsQnJpZGdlRW5hYmxlZCBpbiBBcHBTdGF0ZSwgd2hpY2ggdHJpZ2dlcnNcbiAqIHVzZVJlcGxCcmlkZ2UgaW4gUkVQTC50c3ggdG8gaW5pdGlhbGl6ZSB0aGUgYnJpZGdlIGNvbm5lY3Rpb24uXG4gKiBUaGUgYnJpZGdlIHJlZ2lzdGVycyBhbiBlbnZpcm9ubWVudCwgY3JlYXRlcyBhIHNlc3Npb24gd2l0aCB0aGUgY3VycmVudFxuICogY29udmVyc2F0aW9uLCBwb2xscyBmb3Igd29yaywgYW5kIGNvbm5lY3RzIGFuIGluZ3Jlc3MgV2ViU29ja2V0IGZvclxuICogYmlkaXJlY3Rpb25hbCBtZXNzYWdpbmcgYmV0d2VlbiB0aGUgQ0xJIGFuZCBjbGF1ZGUuYWkuXG4gKlxuICogUnVubmluZyAvcmVtb3RlLWNvbnRyb2wgd2hlbiBhbHJlYWR5IGNvbm5lY3RlZCBzaG93cyBhIGRpYWxvZyB3aXRoIHRoZSBzZXNzaW9uXG4gKiBVUkwgYW5kIG9wdGlvbnMgdG8gZGlzY29ubmVjdCBvciBjb250aW51ZS5cbiAqL1xuZnVuY3Rpb24gQnJpZGdlVG9nZ2xlKHsgb25Eb25lLCBuYW1lIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IHJlcGxCcmlkZ2VDb25uZWN0ZWQgPSB1c2VBcHBTdGF0ZShzID0+IHMucmVwbEJyaWRnZUNvbm5lY3RlZClcbiAgY29uc3QgcmVwbEJyaWRnZUVuYWJsZWQgPSB1c2VBcHBTdGF0ZShzID0+IHMucmVwbEJyaWRnZUVuYWJsZWQpXG4gIGNvbnN0IHJlcGxCcmlkZ2VPdXRib3VuZE9ubHkgPSB1c2VBcHBTdGF0ZShzID0+IHMucmVwbEJyaWRnZU91dGJvdW5kT25seSlcbiAgY29uc3QgW3Nob3dEaXNjb25uZWN0RGlhbG9nLCBzZXRTaG93RGlzY29ubmVjdERpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBiaW9tZS1pZ25vcmUgbGludC9jb3JyZWN0bmVzcy91c2VFeGhhdXN0aXZlRGVwZW5kZW5jaWVzOiBicmlkZ2Ugc3RhcnRzIG9uY2UsIHNob3VsZCBub3QgcmVzdGFydCBvbiBzdGF0ZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSWYgYWxyZWFkeSBjb25uZWN0ZWQgb3IgZW5hYmxlZCBpbiBmdWxsIGJpZGlyZWN0aW9uYWwgbW9kZSwgc2hvd1xuICAgIC8vIGRpc2Nvbm5lY3QgY29uZmlybWF0aW9uLiBPdXRib3VuZC1vbmx5IChDQ1IgbWlycm9yKSBkb2Vzbid0IGNvdW50IOKAlFxuICAgIC8vIC9yZW1vdGUtY29udHJvbCB1cGdyYWRlcyBpdCB0byBmdWxsIFJDIGluc3RlYWQuXG4gICAgaWYgKChyZXBsQnJpZGdlQ29ubmVjdGVkIHx8IHJlcGxCcmlkZ2VFbmFibGVkKSAmJiAhcmVwbEJyaWRnZU91dGJvdW5kT25seSkge1xuICAgICAgc2V0U2hvd0Rpc2Nvbm5lY3REaWFsb2codHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIFByZS1mbGlnaHQgY2hlY2tzIGJlZm9yZSBlbmFibGluZyAoYXdhaXRzIEdyb3d0aEJvb2sgaW5pdCBpZiBkaXNrXG4gICAgICAvLyBjYWNoZSBpcyBzdGFsZSDigJQgc28gTWF4IHVzZXJzIGRvbid0IGdldCBhIGZhbHNlIFwibm90IGVuYWJsZWRcIiBlcnJvcilcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgY2hlY2tCcmlkZ2VQcmVyZXF1aXNpdGVzKClcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfY29tbWFuZCcsIHtcbiAgICAgICAgICBhY3Rpb246XG4gICAgICAgICAgICAncHJlZmxpZ2h0X2ZhaWxlZCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgICAgb25Eb25lKGVycm9yLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBTaG93IGZpcnN0LXRpbWUgcmVtb3RlIGRpYWxvZyBpZiBub3QgeWV0IHNlZW4uXG4gICAgICAvLyBTdG9yZSB0aGUgbmFtZSBub3cgc28gaXQncyBpbiBBcHBTdGF0ZSB3aGVuIHRoZSBjYWxsb3V0IGhhbmRsZXIgbGF0ZXJcbiAgICAgIC8vIGVuYWJsZXMgdGhlIGJyaWRnZSAodGhlIGhhbmRsZXIgb25seSBzZXRzIHJlcGxCcmlkZ2VFbmFibGVkLCBub3QgdGhlIG5hbWUpLlxuICAgICAgaWYgKHNob3VsZFNob3dSZW1vdGVDYWxsb3V0KCkpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgaWYgKHByZXYuc2hvd1JlbW90ZUNhbGxvdXQpIHJldHVybiBwcmV2XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBzaG93UmVtb3RlQ2FsbG91dDogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxCcmlkZ2VJbml0aWFsTmFtZTogbmFtZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIG9uRG9uZSgnJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gRW5hYmxlIHRoZSBicmlkZ2Ug4oCUIHVzZVJlcGxCcmlkZ2UgaW4gUkVQTC50c3ggaGFuZGxlcyB0aGUgcmVzdDpcbiAgICAgIC8vIHJlZ2lzdGVycyBlbnZpcm9ubWVudCwgY3JlYXRlcyBzZXNzaW9uIHdpdGggY29udmVyc2F0aW9uLCBjb25uZWN0cyBXZWJTb2NrZXRcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfY29tbWFuZCcsIHtcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgICdjb25uZWN0JyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgICAgICBpZiAocHJldi5yZXBsQnJpZGdlRW5hYmxlZCAmJiAhcHJldi5yZXBsQnJpZGdlT3V0Ym91bmRPbmx5KSByZXR1cm4gcHJldlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgcmVwbEJyaWRnZUVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcmVwbEJyaWRnZUV4cGxpY2l0OiB0cnVlLFxuICAgICAgICAgIHJlcGxCcmlkZ2VPdXRib3VuZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIHJlcGxCcmlkZ2VJbml0aWFsTmFtZTogbmFtZSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIG9uRG9uZSgnUmVtb3RlIENvbnRyb2wgY29ubmVjdGluZ1xcdTIwMjYnLCB7XG4gICAgICAgIGRpc3BsYXk6ICdzeXN0ZW0nLFxuICAgICAgfSlcbiAgICB9KSgpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgfSwgW10pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIHJ1biBvbmNlIG9uIG1vdW50XG5cbiAgaWYgKHNob3dEaXNjb25uZWN0RGlhbG9nKSB7XG4gICAgcmV0dXJuIDxCcmlkZ2VEaXNjb25uZWN0RGlhbG9nIG9uRG9uZT17b25Eb25lfSAvPlxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBEaWFsb2cgc2hvd24gd2hlbiAvcmVtb3RlLWNvbnRyb2wgaXMgdXNlZCB3aGlsZSB0aGUgYnJpZGdlIGlzIGFscmVhZHkgY29ubmVjdGVkLlxuICogU2hvd3MgdGhlIHNlc3Npb24gVVJMIGFuZCBsZXRzIHRoZSB1c2VyIGRpc2Nvbm5lY3Qgb3IgY29udGludWUuXG4gKi9cbmZ1bmN0aW9uIEJyaWRnZURpc2Nvbm5lY3REaWFsb2coeyBvbkRvbmUgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICB1c2VSZWdpc3Rlck92ZXJsYXkoJ2JyaWRnZS1kaXNjb25uZWN0LWRpYWxvZycpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBzZXNzaW9uVXJsID0gdXNlQXBwU3RhdGUocyA9PiBzLnJlcGxCcmlkZ2VTZXNzaW9uVXJsKVxuICBjb25zdCBjb25uZWN0VXJsID0gdXNlQXBwU3RhdGUocyA9PiBzLnJlcGxCcmlkZ2VDb25uZWN0VXJsKVxuICBjb25zdCBzZXNzaW9uQWN0aXZlID0gdXNlQXBwU3RhdGUocyA9PiBzLnJlcGxCcmlkZ2VTZXNzaW9uQWN0aXZlKVxuICBjb25zdCBbZm9jdXNJbmRleCwgc2V0Rm9jdXNJbmRleF0gPSB1c2VTdGF0ZSgyKVxuICBjb25zdCBbc2hvd1FSLCBzZXRTaG93UVJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxclRleHQsIHNldFFyVGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBkaXNwbGF5VXJsID0gc2Vzc2lvbkFjdGl2ZSA/IHNlc3Npb25VcmwgOiBjb25uZWN0VXJsXG5cbiAgLy8gR2VuZXJhdGUgUVIgY29kZSB3aGVuIFVSTCBjaGFuZ2VzIG9yIFFSIGlzIHRvZ2dsZWQgb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNob3dRUiB8fCAhZGlzcGxheVVybCkge1xuICAgICAgc2V0UXJUZXh0KCcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHFyVG9TdHJpbmcoZGlzcGxheVVybCwge1xuICAgICAgdHlwZTogJ3V0ZjgnLFxuICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6ICdMJyxcbiAgICAgIHNtYWxsOiB0cnVlLFxuICAgIH0pXG4gICAgICAudGhlbihzZXRRclRleHQpXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0UXJUZXh0KCcnKSlcbiAgfSwgW3Nob3dRUiwgZGlzcGxheVVybF0pXG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGlmICghcHJldi5yZXBsQnJpZGdlRW5hYmxlZCkgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHJlcGxCcmlkZ2VFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgcmVwbEJyaWRnZUV4cGxpY2l0OiBmYWxzZSxcbiAgICAgICAgcmVwbEJyaWRnZU91dGJvdW5kT25seTogZmFsc2UsXG4gICAgICB9XG4gICAgfSlcbiAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX2NvbW1hbmQnLCB7XG4gICAgICBhY3Rpb246XG4gICAgICAgICdkaXNjb25uZWN0JyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gICAgb25Eb25lKFJFTU9URV9DT05UUk9MX0RJU0NPTk5FQ1RFRF9NU0csIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNob3dRUigpOiB2b2lkIHtcbiAgICBzZXRTaG93UVIocHJldiA9PiAhcHJldilcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbnRpbnVlKCk6IHZvaWQge1xuICAgIG9uRG9uZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pXG4gIH1cblxuICBjb25zdCBJVEVNX0NPVU5UID0gM1xuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6bmV4dCc6ICgpID0+IHNldEZvY3VzSW5kZXgoaSA9PiAoaSArIDEpICUgSVRFTV9DT1VOVCksXG4gICAgICAnc2VsZWN0OnByZXZpb3VzJzogKCkgPT5cbiAgICAgICAgc2V0Rm9jdXNJbmRleChpID0+IChpIC0gMSArIElURU1fQ09VTlQpICUgSVRFTV9DT1VOVCksXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6ICgpID0+IHtcbiAgICAgICAgaWYgKGZvY3VzSW5kZXggPT09IDApIHtcbiAgICAgICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICAgICAgfSBlbHNlIGlmIChmb2N1c0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgaGFuZGxlU2hvd1FSKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVDb250aW51ZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdTZWxlY3QnIH0sXG4gIClcblxuICBjb25zdCBxckxpbmVzID0gcXJUZXh0ID8gcXJUZXh0LnNwbGl0KCdcXG4nKS5maWx0ZXIobCA9PiBsLmxlbmd0aCA+IDApIDogW11cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgdGl0bGU9XCJSZW1vdGUgQ29udHJvbFwiIG9uQ2FuY2VsPXtoYW5kbGVDb250aW51ZX0gaGlkZUlucHV0R3VpZGU+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBUaGlzIHNlc3Npb24gaXMgYXZhaWxhYmxlIHZpYSBSZW1vdGUgQ29udHJvbFxuICAgICAgICAgIHtkaXNwbGF5VXJsID8gYCBhdCAke2Rpc3BsYXlVcmx9YCA6ICcnfS5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7c2hvd1FSICYmIHFyTGluZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICB7cXJMaW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPFRleHQga2V5PXtpfT57bGluZX08L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPExpc3RJdGVtIGlzRm9jdXNlZD17Zm9jdXNJbmRleCA9PT0gMH0+XG4gICAgICAgICAgICA8VGV4dD5EaXNjb25uZWN0IHRoaXMgc2Vzc2lvbjwvVGV4dD5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbSBpc0ZvY3VzZWQ9e2ZvY3VzSW5kZXggPT09IDF9PlxuICAgICAgICAgICAgPFRleHQ+e3Nob3dRUiA/ICdIaWRlIFFSIGNvZGUnIDogJ1Nob3cgUVIgY29kZSd9PC9UZXh0PlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtIGlzRm9jdXNlZD17Zm9jdXNJbmRleCA9PT0gMn0+XG4gICAgICAgICAgICA8VGV4dD5Db250aW51ZTwvVGV4dD5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+RW50ZXIgdG8gc2VsZWN0IMK3IEVzYyB0byBjb250aW51ZTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgYnJpZGdlIHByZXJlcXVpc2l0ZXMuIFJldHVybnMgYW4gZXJyb3IgbWVzc2FnZSBpZiBhIHByZWNvbmRpdGlvblxuICogZmFpbHMsIG9yIG51bGwgaWYgYWxsIGNoZWNrcyBwYXNzLiBBd2FpdHMgR3Jvd3RoQm9vayBpbml0IGlmIHRoZSBkaXNrXG4gKiBjYWNoZSBpcyBzdGFsZSwgc28gYSB1c2VyIHdobyBqdXN0IGJlY2FtZSBlbnRpdGxlZCAoZS5nLiB1cGdyYWRlZCB0byBNYXgsXG4gKiBvciB0aGUgZmxhZyBqdXN0IGxhdW5jaGVkKSBnZXRzIGFuIGFjY3VyYXRlIHJlc3VsdCBvbiB0aGUgZmlyc3QgdHJ5LlxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja0JyaWRnZVByZXJlcXVpc2l0ZXMoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIC8vIENoZWNrIG9yZ2FuaXphdGlvbiBwb2xpY3kg4oCUIHJlbW90ZSBjb250cm9sIG1heSBiZSBkaXNhYmxlZFxuICBjb25zdCB7IHdhaXRGb3JQb2xpY3lMaW1pdHNUb0xvYWQsIGlzUG9saWN5QWxsb3dlZCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi8uLi9zZXJ2aWNlcy9wb2xpY3lMaW1pdHMvaW5kZXguanMnXG4gIClcbiAgYXdhaXQgd2FpdEZvclBvbGljeUxpbWl0c1RvTG9hZCgpXG4gIGlmICghaXNQb2xpY3lBbGxvd2VkKCdhbGxvd19yZW1vdGVfY29udHJvbCcpKSB7XG4gICAgcmV0dXJuIFwiUmVtb3RlIENvbnRyb2wgaXMgZGlzYWJsZWQgYnkgeW91ciBvcmdhbml6YXRpb24ncyBwb2xpY3kuXCJcbiAgfVxuXG4gIGNvbnN0IGRpc2FibGVkUmVhc29uID0gYXdhaXQgZ2V0QnJpZGdlRGlzYWJsZWRSZWFzb24oKVxuICBpZiAoZGlzYWJsZWRSZWFzb24pIHtcbiAgICByZXR1cm4gZGlzYWJsZWRSZWFzb25cbiAgfVxuXG4gIC8vIE1pcnJvciB0aGUgdjEvdjIgYnJhbmNoaW5nIGxvZ2ljIGluIGluaXRSZXBsQnJpZGdlOiBlbnYtbGVzcyAodjIpIGlzIHVzZWRcbiAgLy8gb25seSB3aGVuIHRoZSBmbGFnIGlzIG9uIEFORCB0aGUgc2Vzc2lvbiBpcyBub3QgcGVycGV0dWFsLiAgSW4gYXNzaXN0YW50XG4gIC8vIG1vZGUgKEtBSVJPUykgdXNlUmVwbEJyaWRnZSBzZXRzIHBlcnBldHVhbD10cnVlLCB3aGljaCBmb3JjZXNcbiAgLy8gaW5pdFJlcGxCcmlkZ2Ugb250byB0aGUgdjEgcGF0aCDigJQgc28gdGhlIHByZXJlcXVpc2l0ZSBjaGVjayBtdXN0IG1hdGNoLlxuICBsZXQgdXNlVjIgPSBpc0Vudkxlc3NCcmlkZ2VFbmFibGVkKClcbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIHVzZVYyKSB7XG4gICAgY29uc3QgeyBpc0Fzc2lzdGFudE1vZGUgfSA9IGF3YWl0IGltcG9ydCgnLi4vLi4vYXNzaXN0YW50L2luZGV4LmpzJylcbiAgICBpZiAoaXNBc3Npc3RhbnRNb2RlKCkpIHtcbiAgICAgIHVzZVYyID0gZmFsc2VcbiAgICB9XG4gIH1cbiAgY29uc3QgdmVyc2lvbkVycm9yID0gdXNlVjJcbiAgICA/IGF3YWl0IGNoZWNrRW52TGVzc0JyaWRnZU1pblZlcnNpb24oKVxuICAgIDogY2hlY2tCcmlkZ2VNaW5WZXJzaW9uKClcbiAgaWYgKHZlcnNpb25FcnJvcikge1xuICAgIHJldHVybiB2ZXJzaW9uRXJyb3JcbiAgfVxuXG4gIGlmICghZ2V0QnJpZGdlQWNjZXNzVG9rZW4oKSkge1xuICAgIHJldHVybiBCUklER0VfTE9HSU5fSU5TVFJVQ1RJT05cbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZV0gUHJlcmVxdWlzaXRlcyBwYXNzZWQsIGVuYWJsaW5nIGJyaWRnZScpXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbiAgX2NvbnRleHQ6IFRvb2xVc2VDb250ZXh0ICYgTG9jYWxKU1hDb21tYW5kQ29udGV4dCxcbiAgYXJnczogc3RyaW5nLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgY29uc3QgbmFtZSA9IGFyZ3MudHJpbSgpIHx8IHVuZGVmaW5lZFxuICByZXR1cm4gPEJyaWRnZVRvZ2dsZSBvbkRvbmU9e29uRG9uZX0gbmFtZT17bmFtZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREEsU0FBQUEsYUFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUFzQixRQUFBO0lBQUFDO0lBQUFDO0VBQUEsSUFBQUo7QUFDcEIsUUFBQUssY0FBb0JDLGVBQWU7QUFDbkMsUUFBQUMsc0JBQTRCQyxZQUFZQyxLQUEwQjtBQUNsRSxRQUFBQyxvQkFBMEJGLFlBQVlHLE1BQXdCO0FBQzlELFFBQUFDLHlCQUErQkosWUFBWUssTUFBNkI7QUFDeEUsUUFBQSxDQUFBQyxzQkFBQUMsdUJBQUEsSUFBd0RDLFNBQVMsS0FBSztBQUFDLE1BQUFDO0FBQUEsTUFBQWhCLEVBQUEsQ0FBQSxNQUFBRyxRQUFBSCxFQUFBLENBQUEsTUFBQUUsVUFBQUYsRUFBQSxDQUFBLE1BQUFNLHVCQUFBTixFQUFBLENBQUEsTUFBQVMscUJBQUFULEVBQUEsQ0FBQSxNQUFBVywwQkFBQVgsRUFBQSxDQUFBLE1BQUFJLGFBQUE7QUFHN0RZLFNBQUFBLE1BQUE7QUFJUixXQUFLVix1QkFBQUcsc0JBQUQsQ0FBK0NFLHdCQUFzQjtBQUN2RUcsZ0NBQXdCLElBQUk7QUFBQztNQUFBO0FBSS9CLFVBQUFHLFlBQWdCO0FBQ1gsT0FBQyxZQUFBO0FBR0osY0FBQUMsUUFBYyxNQUFNQyx5QkFBeUI7QUFDN0MsWUFBSUYsV0FBUztBQUFBO1FBQUE7QUFDYixZQUFJQyxPQUFLO0FBQ1BFLG1CQUFTLHdCQUF3QjtZQUFBQyxRQUU3QjtVQUNKLENBQUM7QUFDRG5CLGlCQUFPZ0IsT0FBTztZQUFBSSxTQUFXO1VBQVMsQ0FBQztBQUFDO1FBQUE7QUFPdEMsWUFBSUMsd0JBQXdCLEdBQUM7QUFDM0JuQixzQkFBWW9CLFVBQUE7QUFDVixnQkFBSUEsS0FBSUMsbUJBQWtCO0FBQUEscUJBQVNEO1lBQUk7QUFBQSxtQkFDaEM7Y0FBQSxHQUNGQTtjQUFJQyxtQkFDWTtjQUFJQyx1QkFDQXZCO1lBQ3pCO1VBQUMsQ0FDRjtBQUNERCxpQkFBTyxJQUFJO1lBQUFvQixTQUFXO1VBQVMsQ0FBQztBQUFDO1FBQUE7QUFNbkNGLGlCQUFTLHdCQUF3QjtVQUFBQyxRQUU3QjtRQUNKLENBQUM7QUFDRGpCLG9CQUFZdUIsWUFBQTtBQUNWLGNBQUlILE9BQUlmLHFCQUFKLENBQTJCZSxPQUFJYix3QkFBdUI7QUFBQSxtQkFBU2E7VUFBSTtBQUFBLGlCQUNoRTtZQUFBLEdBQ0ZBO1lBQUlmLG1CQUNZO1lBQUltQixvQkFDSDtZQUFJakIsd0JBQ0E7WUFBS2UsdUJBQ052QjtVQUN6QjtRQUFDLENBQ0Y7QUFDREQsZUFBTyxtQ0FBbUM7VUFBQW9CLFNBQy9CO1FBQ1gsQ0FBQztNQUFDLEdBQ0Q7QUFBQyxhQUVHLE1BQUE7QUFDTEwsb0JBQVlBO01BQUg7SUFDVjtBQUNGakIsTUFBQSxDQUFBLElBQUFHO0FBQUFILE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQU07QUFBQU4sTUFBQSxDQUFBLElBQUFTO0FBQUFULE1BQUEsQ0FBQSxJQUFBVztBQUFBWCxNQUFBLENBQUEsSUFBQUk7QUFBQUosTUFBQSxDQUFBLElBQUFnQjtFQUFBLE9BQUE7QUFBQUEsU0FBQWhCLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQTZCO0FBQUEsTUFBQTdCLEVBQUEsQ0FBQSxNQUFBOEIsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUFFRixTQUFBLENBQUE7QUFBRTdCLE1BQUEsQ0FBQSxJQUFBNkI7RUFBQSxPQUFBO0FBQUFBLFNBQUE3QixFQUFBLENBQUE7RUFBQTtBQWhFTGdDLFlBQVVoQixJQWdFUGEsRUFBRTtBQUVMLE1BQUloQixzQkFBb0I7QUFBQSxRQUFBb0I7QUFBQSxRQUFBakMsRUFBQSxDQUFBLE1BQUFFLFFBQUE7QUFDZitCLFdBQUEsOEJBQUMsMEJBQStCL0IsUUFBTTtBQUFJRixRQUFBLENBQUEsSUFBQUU7QUFBQUYsUUFBQSxDQUFBLElBQUFpQztJQUFBLE9BQUE7QUFBQUEsV0FBQWpDLEVBQUEsQ0FBQTtJQUFBO0FBQUEsV0FBMUNpQztFQUEwQztBQUNsRCxTQUVNO0FBQUk7QUE5RWIsU0FBQXJCLE9BQUFzQixLQUFBO0FBQUEsU0FJa0RDLElBQUN4QjtBQUF1QjtBQUoxRSxTQUFBRCxPQUFBMEIsS0FBQTtBQUFBLFNBRzZDRCxJQUFDMUI7QUFBa0I7QUFIaEUsU0FBQUQsTUFBQTJCLEdBQUE7QUFBQSxTQUUrQ0EsRUFBQzdCO0FBQW9CO0FBbUZwRSxTQUFBK0IsdUJBQUF0QyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQWdDLFFBQUE7SUFBQUM7RUFBQSxJQUFBSDtBQUM5QnVDLHFCQUFtQiwwQkFBMEI7QUFDN0MsUUFBQWxDLGNBQW9CQyxlQUFlO0FBQ25DLFFBQUFrQyxhQUFtQmhDLFlBQVlpQyxNQUEyQjtBQUMxRCxRQUFBQyxhQUFtQmxDLFlBQVltQyxNQUEyQjtBQUMxRCxRQUFBQyxnQkFBc0JwQyxZQUFZcUMsTUFBOEI7QUFDaEUsUUFBQSxDQUFBQyxZQUFBQyxhQUFBLElBQW9DL0IsU0FBUyxDQUFDO0FBQzlDLFFBQUEsQ0FBQWdDLFFBQUFDLFNBQUEsSUFBNEJqQyxTQUFTLEtBQUs7QUFDMUMsUUFBQSxDQUFBa0MsUUFBQUMsU0FBQSxJQUE0Qm5DLFNBQVMsRUFBRTtBQUV2QyxRQUFBb0MsYUFBbUJSLGdCQUFBSixhQUFBRTtBQUF1QyxNQUFBekI7QUFBQSxNQUFBYTtBQUFBLE1BQUE3QixFQUFBLENBQUEsTUFBQW1ELGNBQUFuRCxFQUFBLENBQUEsTUFBQStDLFFBQUE7QUFHaEQvQixTQUFBQSxNQUFBO0FBQ1IsVUFBSSxDQUFDK0IsVUFBRCxDQUFZSSxZQUFVO0FBQ3hCRCxrQkFBVSxFQUFFO0FBQUM7TUFBQTtBQUdmRSxlQUFXRCxZQUFZO1FBQUFFLE1BQ2Y7UUFBTUMsc0JBQ1U7UUFBR0MsT0FDbEI7TUFDVCxDQUFDLEVBQUNDLEtBQ01OLFNBQVMsRUFBQ08sTUFDVCxNQUFNUCxVQUFVLEVBQUUsQ0FBQztJQUFDO0FBQzVCckIsU0FBQSxDQUFDa0IsUUFBUUksVUFBVTtBQUFDbkQsTUFBQSxDQUFBLElBQUFtRDtBQUFBbkQsTUFBQSxDQUFBLElBQUErQztBQUFBL0MsTUFBQSxDQUFBLElBQUFnQjtBQUFBaEIsTUFBQSxDQUFBLElBQUE2QjtFQUFBLE9BQUE7QUFBQWIsU0FBQWhCLEVBQUEsQ0FBQTtBQUFBNkIsU0FBQTdCLEVBQUEsQ0FBQTtFQUFBO0FBWnZCZ0MsWUFBVWhCLElBWVBhLEVBQW9CO0FBQUMsTUFBQUk7QUFBQSxNQUFBakMsRUFBQSxDQUFBLE1BQUFFLFVBQUFGLEVBQUEsQ0FBQSxNQUFBSSxhQUFBO0FBRXhCNkIsU0FBQSxTQUFBeUIsb0JBQUE7QUFDRXRELGtCQUFZdUQsTUFRWDtBQUNEdkMsZUFBUyx3QkFBd0I7UUFBQUMsUUFFN0I7TUFDSixDQUFDO0FBQ0RuQixhQUFPMEQsaUNBQWlDO1FBQUF0QyxTQUFXO01BQVMsQ0FBQztJQUFDO0FBQy9EdEIsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBSTtBQUFBSixNQUFBLENBQUEsSUFBQWlDO0VBQUEsT0FBQTtBQUFBQSxTQUFBakMsRUFBQSxDQUFBO0VBQUE7QUFmRCxRQUFBMEQsbUJBQUF6QjtBQWVDLE1BQUE0QjtBQUFBLE1BQUE3RCxFQUFBLENBQUEsTUFBQThCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFRDhCLFNBQUEsU0FBQUMsZ0JBQUE7QUFDRWQsZ0JBQVVlLE1BQWE7SUFBQztBQUN6Qi9ELE1BQUEsQ0FBQSxJQUFBNkQ7RUFBQSxPQUFBO0FBQUFBLFNBQUE3RCxFQUFBLENBQUE7RUFBQTtBQUZELFFBQUE4RCxlQUFBRDtBQUVDLE1BQUFHO0FBQUEsTUFBQWhFLEVBQUEsQ0FBQSxNQUFBRSxRQUFBO0FBRUQ4RCxTQUFBLFNBQUFDLGtCQUFBO0FBQ0UvRCxhQUFPZ0UsUUFBVztRQUFBNUMsU0FBVztNQUFPLENBQUM7SUFBQztBQUN2Q3RCLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQWdFO0VBQUEsT0FBQTtBQUFBQSxTQUFBaEUsRUFBQSxDQUFBO0VBQUE7QUFGRCxRQUFBaUUsaUJBQUFEO0FBRUMsTUFBQUc7QUFBQSxNQUFBQztBQUFBLE1BQUFwRSxFQUFBLEVBQUEsTUFBQThCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFNa0JvQyxTQUFBQSxNQUFNckIsY0FBY3VCLE1BQXlCO0FBQ3pDRCxTQUFBQSxNQUNqQnRCLGNBQWN3QixNQUFzQztBQUFDdEUsTUFBQSxFQUFBLElBQUFtRTtBQUFBbkUsTUFBQSxFQUFBLElBQUFvRTtFQUFBLE9BQUE7QUFBQUQsU0FBQW5FLEVBQUEsRUFBQTtBQUFBb0UsU0FBQXBFLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQXVFO0FBQUEsTUFBQXZFLEVBQUEsRUFBQSxNQUFBNkMsY0FBQTdDLEVBQUEsRUFBQSxNQUFBaUUsa0JBQUFqRSxFQUFBLEVBQUEsTUFBQTBELGtCQUFBO0FBSHpEYSxTQUFBO01BQUEsZUFDaUJKO01BQThDLG1CQUMxQ0M7TUFDb0MsaUJBQ3RDSSxNQUFBO0FBQ2YsWUFBSTNCLGVBQWUsR0FBQztBQUNsQmEsMkJBQWlCO1FBQUMsT0FBQTtBQUNiLGNBQUliLGVBQWUsR0FBQztBQUN6QmlCLHlCQUFhO1VBQUMsT0FBQTtBQUVkRywyQkFBZTtVQUFDO1FBQ2pCO01BQUE7SUFFTDtBQUFDakUsTUFBQSxFQUFBLElBQUE2QztBQUFBN0MsTUFBQSxFQUFBLElBQUFpRTtBQUFBakUsTUFBQSxFQUFBLElBQUEwRDtBQUFBMUQsTUFBQSxFQUFBLElBQUF1RTtFQUFBLE9BQUE7QUFBQUEsU0FBQXZFLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQXlFO0FBQUEsTUFBQXpFLEVBQUEsRUFBQSxNQUFBOEIsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUNEMEMsU0FBQTtNQUFBQyxTQUFXO0lBQVM7QUFBQzFFLE1BQUEsRUFBQSxJQUFBeUU7RUFBQSxPQUFBO0FBQUFBLFNBQUF6RSxFQUFBLEVBQUE7RUFBQTtBQWZ2QjJFLGlCQUNFSixJQWNBRSxFQUNGO0FBQUMsTUFBQUc7QUFBQSxNQUFBQztBQUFBLE1BQUFDO0FBQUEsTUFBQUM7QUFBQSxNQUFBQztBQUFBLE1BQUFDO0FBQUEsTUFBQUM7QUFBQSxNQUFBQztBQUFBLE1BQUFDO0FBQUEsTUFBQXBGLEVBQUEsRUFBQSxNQUFBbUQsY0FBQW5ELEVBQUEsRUFBQSxNQUFBaUUsa0JBQUFqRSxFQUFBLEVBQUEsTUFBQWlELFVBQUFqRCxFQUFBLEVBQUEsTUFBQStDLFFBQUE7QUFFRCxVQUFBc0MsVUFBZ0JwQyxTQUFTQSxPQUFNcUMsTUFBTyxJQUFJLEVBQUNDLE9BQVFDLE1BQXNCLElBQXpELENBQUE7QUFHYlgsU0FBQVk7QUFBYVAsVUFBQTtBQUEyQmpCLFVBQUFBO0FBQWdCbUIsVUFBQTtBQUN0RFIsU0FBQWM7QUFBa0JaLFVBQUE7QUFBY0MsVUFBQTtBQUc1QixVQUFBWSxPQUFBeEMsYUFBQSxPQUFvQkEsVUFBVSxLQUE5QjtBQUFxQyxRQUFBbkQsRUFBQSxFQUFBLE1BQUEyRixNQUFBO0FBRnhDWCxZQUFBLDhCQUFDLGtCQUFLLGdEQUVIVyxNQUFzQyxHQUN6QztBQUFPM0YsUUFBQSxFQUFBLElBQUEyRjtBQUFBM0YsUUFBQSxFQUFBLElBQUFnRjtJQUFBLE9BQUE7QUFBQUEsWUFBQWhGLEVBQUEsRUFBQTtJQUFBO0FBQ05pRixVQUFBbEMsVUFBVXNDLFFBQU9PLFNBQVUsS0FDMUIsOEJBQUMscUJBQWtCLGVBQUEsWUFDaEJQLFFBQU9RLElBQUtDLE9BRVosQ0FDSDtBQUNEOUYsTUFBQSxFQUFBLElBQUFtRDtBQUFBbkQsTUFBQSxFQUFBLElBQUFpRTtBQUFBakUsTUFBQSxFQUFBLElBQUFpRDtBQUFBakQsTUFBQSxFQUFBLElBQUErQztBQUFBL0MsTUFBQSxFQUFBLElBQUE0RTtBQUFBNUUsTUFBQSxFQUFBLElBQUE2RTtBQUFBN0UsTUFBQSxFQUFBLElBQUE4RTtBQUFBOUUsTUFBQSxFQUFBLElBQUErRTtBQUFBL0UsTUFBQSxFQUFBLElBQUFnRjtBQUFBaEYsTUFBQSxFQUFBLElBQUFpRjtBQUFBakYsTUFBQSxFQUFBLElBQUFrRjtBQUFBbEYsTUFBQSxFQUFBLElBQUFtRjtBQUFBbkYsTUFBQSxFQUFBLElBQUFvRjtFQUFBLE9BQUE7QUFBQVIsU0FBQTVFLEVBQUEsRUFBQTtBQUFBNkUsU0FBQTdFLEVBQUEsRUFBQTtBQUFBOEUsVUFBQTlFLEVBQUEsRUFBQTtBQUFBK0UsVUFBQS9FLEVBQUEsRUFBQTtBQUFBZ0YsVUFBQWhGLEVBQUEsRUFBQTtBQUFBaUYsVUFBQWpGLEVBQUEsRUFBQTtBQUFBa0YsVUFBQWxGLEVBQUEsRUFBQTtBQUFBbUYsVUFBQW5GLEVBQUEsRUFBQTtBQUFBb0YsVUFBQXBGLEVBQUEsRUFBQTtFQUFBO0FBRXNCLFFBQUEyRixNQUFBOUMsZUFBZTtBQUFDLE1BQUFrRDtBQUFBLE1BQUEvRixFQUFBLEVBQUEsTUFBQThCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDbkNnRSxVQUFBLDhCQUFDLGtCQUFLLHlCQUF1QjtBQUFPL0YsTUFBQSxFQUFBLElBQUErRjtFQUFBLE9BQUE7QUFBQUEsVUFBQS9GLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQWdHO0FBQUEsTUFBQWhHLEVBQUEsRUFBQSxNQUFBMkYsS0FBQTtBQUR0Q0ssVUFBQSw4QkFBQyxZQUFvQixXQUFBTCxPQUNuQkksR0FDRjtBQUFXL0YsTUFBQSxFQUFBLElBQUEyRjtBQUFBM0YsTUFBQSxFQUFBLElBQUFnRztFQUFBLE9BQUE7QUFBQUEsVUFBQWhHLEVBQUEsRUFBQTtFQUFBO0FBQ1UsUUFBQWlHLE1BQUFwRCxlQUFlO0FBQzNCLFFBQUFxRCxNQUFBbkQsU0FBQSxpQkFBQTtBQUF3QyxNQUFBb0Q7QUFBQSxNQUFBbkcsRUFBQSxFQUFBLE1BQUFrRyxLQUFBO0FBQS9DQyxVQUFBLDhCQUFDLGtCQUFNRCxHQUF5QztBQUFPbEcsTUFBQSxFQUFBLElBQUFrRztBQUFBbEcsTUFBQSxFQUFBLElBQUFtRztFQUFBLE9BQUE7QUFBQUEsVUFBQW5HLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQW9HO0FBQUEsTUFBQXBHLEVBQUEsRUFBQSxNQUFBaUcsT0FBQWpHLEVBQUEsRUFBQSxNQUFBbUcsS0FBQTtBQUR6REMsVUFBQSw4QkFBQyxZQUFvQixXQUFBSCxPQUNuQkUsR0FDRjtBQUFXbkcsTUFBQSxFQUFBLElBQUFpRztBQUFBakcsTUFBQSxFQUFBLElBQUFtRztBQUFBbkcsTUFBQSxFQUFBLElBQUFvRztFQUFBLE9BQUE7QUFBQUEsVUFBQXBHLEVBQUEsRUFBQTtFQUFBO0FBQ1UsUUFBQXFHLE1BQUF4RCxlQUFlO0FBQUMsTUFBQXlEO0FBQUEsTUFBQXRHLEVBQUEsRUFBQSxNQUFBOEIsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUNuQ3VFLFVBQUEsOEJBQUMsa0JBQUssVUFBUTtBQUFPdEcsTUFBQSxFQUFBLElBQUFzRztFQUFBLE9BQUE7QUFBQUEsVUFBQXRHLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQXVHO0FBQUEsTUFBQXZHLEVBQUEsRUFBQSxNQUFBcUcsS0FBQTtBQUR2QkUsVUFBQSw4QkFBQyxZQUFvQixXQUFBRixPQUNuQkMsR0FDRjtBQUFXdEcsTUFBQSxFQUFBLElBQUFxRztBQUFBckcsTUFBQSxFQUFBLElBQUF1RztFQUFBLE9BQUE7QUFBQUEsVUFBQXZHLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQXdHO0FBQUEsTUFBQXhHLEVBQUEsRUFBQSxNQUFBZ0csT0FBQWhHLEVBQUEsRUFBQSxNQUFBb0csT0FBQXBHLEVBQUEsRUFBQSxNQUFBdUcsS0FBQTtBQVRiQyxVQUFBLDhCQUFDLHFCQUFrQixlQUFBLFlBQ2pCUixLQUdBSSxLQUdBRyxHQUdGO0FBQU12RyxNQUFBLEVBQUEsSUFBQWdHO0FBQUFoRyxNQUFBLEVBQUEsSUFBQW9HO0FBQUFwRyxNQUFBLEVBQUEsSUFBQXVHO0FBQUF2RyxNQUFBLEVBQUEsSUFBQXdHO0VBQUEsT0FBQTtBQUFBQSxVQUFBeEcsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBeUc7QUFBQSxNQUFBekcsRUFBQSxFQUFBLE1BQUE4Qix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBQ04wRSxVQUFBLDhCQUFDLGNBQUssVUFBQSxRQUFTLHNDQUFpQztBQUFPekcsTUFBQSxFQUFBLElBQUF5RztFQUFBLE9BQUE7QUFBQUEsVUFBQXpHLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTBHO0FBQUEsTUFBQTFHLEVBQUEsRUFBQSxNQUFBNEUsTUFBQTVFLEVBQUEsRUFBQSxNQUFBOEUsT0FBQTlFLEVBQUEsRUFBQSxNQUFBK0UsT0FBQS9FLEVBQUEsRUFBQSxNQUFBZ0YsT0FBQWhGLEVBQUEsRUFBQSxNQUFBaUYsT0FBQWpGLEVBQUEsRUFBQSxNQUFBd0csS0FBQTtBQXZCekRFLFVBQUEsOEJBQUMsTUFBa0IsZUFBQTVCLEtBQWMsS0FBQUMsT0FDL0JDLEtBSUNDLEtBT0R1QixLQVdBQyxHQUNGO0FBQU16RyxNQUFBLEVBQUEsSUFBQTRFO0FBQUE1RSxNQUFBLEVBQUEsSUFBQThFO0FBQUE5RSxNQUFBLEVBQUEsSUFBQStFO0FBQUEvRSxNQUFBLEVBQUEsSUFBQWdGO0FBQUFoRixNQUFBLEVBQUEsSUFBQWlGO0FBQUFqRixNQUFBLEVBQUEsSUFBQXdHO0FBQUF4RyxNQUFBLEVBQUEsSUFBQTBHO0VBQUEsT0FBQTtBQUFBQSxVQUFBMUcsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBMkc7QUFBQSxNQUFBM0csRUFBQSxFQUFBLE1BQUE2RSxNQUFBN0UsRUFBQSxFQUFBLE1BQUFrRixPQUFBbEYsRUFBQSxFQUFBLE1BQUFtRixPQUFBbkYsRUFBQSxFQUFBLE1BQUFvRixPQUFBcEYsRUFBQSxFQUFBLE1BQUEwRyxLQUFBO0FBekJSQyxVQUFBLDhCQUFDLE1BQWEsT0FBQXpCLEtBQTJCakIsVUFBQUEsS0FBZ0IsZ0JBQUFtQixPQUN2RHNCLEdBeUJGO0FBQVMxRyxNQUFBLEVBQUEsSUFBQTZFO0FBQUE3RSxNQUFBLEVBQUEsSUFBQWtGO0FBQUFsRixNQUFBLEVBQUEsSUFBQW1GO0FBQUFuRixNQUFBLEVBQUEsSUFBQW9GO0FBQUFwRixNQUFBLEVBQUEsSUFBQTBHO0FBQUExRyxNQUFBLEVBQUEsSUFBQTJHO0VBQUEsT0FBQTtBQUFBQSxVQUFBM0csRUFBQSxFQUFBO0VBQUE7QUFBQSxTQTFCVDJHO0FBMEJTO0FBckdiLFNBQUFiLFFBQUFjLE1BQUFDLEtBQUE7QUFBQSxTQW9GYyw4QkFBQyxjQUFVQyxLQUFBQSxPQUFJRixJQUFLO0FBQU87QUFwRnpDLFNBQUFwQixPQUFBdUIsR0FBQTtBQUFBLFNBd0UwREEsRUFBQ25CLFNBQVU7QUFBQztBQXhFdEUsU0FBQXRCLE9BQUEwQyxLQUFBO0FBQUEsVUEwRDRCRixNQUFJLElBTlgsS0FBQTtBQU11QztBQTFENUQsU0FBQXpDLE9BQUF5QyxHQUFBO0FBQUEsVUF3RCtDQSxJQUFJLEtBSjlCO0FBSTZDO0FBeERsRSxTQUFBL0MsT0FBQXBDLFFBQUE7QUFBQSxTQTZDc0IsQ0FBQ0g7QUFBSTtBQTdDM0IsU0FBQW1DLE9BQUFuQyxNQUFBO0FBNkJNLE1BQUksQ0FBQ0EsS0FBSWYsbUJBQWtCO0FBQUEsV0FBU2U7RUFBSTtBQUFBLFNBQ2pDO0lBQUEsR0FDRkE7SUFBSWYsbUJBQ1k7SUFBS21CLG9CQUNKO0lBQUtqQix3QkFDRDtFQUMxQjtBQUFDO0FBbkNQLFNBQUFpQyxPQUFBVixLQUFBO0FBQUEsU0FLeUNDLElBQUM4RTtBQUF3QjtBQUxsRSxTQUFBdkUsT0FBQU4sS0FBQTtBQUFBLFNBSXNDRCxJQUFDK0U7QUFBcUI7QUFKNUQsU0FBQTFFLE9BQUFMLEdBQUE7QUFBQSxTQUdzQ0EsRUFBQ2dGO0FBQXFCO0FBNEc1RCxlQUFlaEcsMkJBQW1EO0FBRWhFLFFBQU07SUFBRWlHO0lBQTJCQztFQUFnQixJQUFJLE1BQU0sT0FDM0QsNkJBQ0Y7QUFDQSxRQUFNRCwwQkFBMEI7QUFDaEMsTUFBSSxDQUFDQyxnQkFBZ0Isc0JBQXNCLEdBQUc7QUFDNUMsV0FBTztFQUNUO0FBRUEsUUFBTUMsaUJBQWlCLE1BQU1DLHdCQUF3QjtBQUNyRCxNQUFJRCxnQkFBZ0I7QUFDbEIsV0FBT0E7RUFDVDtBQU1BLE1BQUlFLFFBQVFDLHVCQUF1QjtBQUNuQyxNQUFJQyxRQUFRLFFBQVEsS0FBS0YsT0FBTztBQUM5QixVQUFNO01BQUVHO0lBQWdCLElBQUksTUFBTSxPQUFPLDBCQUEwQjtBQUNuRSxRQUFJQSxnQkFBZ0IsR0FBRztBQUNyQkgsY0FBUTtJQUNWO0VBQ0Y7QUFDQSxRQUFNSSxlQUFlSixRQUNqQixNQUFNSyw2QkFBNkIsSUFDbkNDLHNCQUFzQjtBQUMxQixNQUFJRixjQUFjO0FBQ2hCLFdBQU9BO0VBQ1Q7QUFFQSxNQUFJLENBQUNHLHFCQUFxQixHQUFHO0FBQzNCLFdBQU9DO0VBQ1Q7QUFFQUMsa0JBQWdCLGdEQUFnRDtBQUNoRSxTQUFPO0FBQ1Q7QUFFQSxlQUFzQkMsS0FDcEJoSSxRQUNBaUksVUFDQUMsTUFDMEI7QUFDMUIsUUFBTWpJLE9BQU9pSSxLQUFLQyxLQUFLLEtBQUtuRTtBQUM1QixTQUFPLDhCQUFDLGdCQUFhLFFBQWdCLE1BQVc7QUFDbEQ7Ozs7QUF0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTs7OyIsCiAgIm5hbWVzIjogWyJCcmlkZ2VUb2dnbGUiLCAidDAiLCAiJCIsICJfYyIsICJvbkRvbmUiLCAibmFtZSIsICJzZXRBcHBTdGF0ZSIsICJ1c2VTZXRBcHBTdGF0ZSIsICJyZXBsQnJpZGdlQ29ubmVjdGVkIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgInJlcGxCcmlkZ2VFbmFibGVkIiwgIl90ZW1wMiIsICJyZXBsQnJpZGdlT3V0Ym91bmRPbmx5IiwgIl90ZW1wMyIsICJzaG93RGlzY29ubmVjdERpYWxvZyIsICJzZXRTaG93RGlzY29ubmVjdERpYWxvZyIsICJ1c2VTdGF0ZSIsICJ0MSIsICJjYW5jZWxsZWQiLCAiZXJyb3IiLCAiY2hlY2tCcmlkZ2VQcmVyZXF1aXNpdGVzIiwgImxvZ0V2ZW50IiwgImFjdGlvbiIsICJkaXNwbGF5IiwgInNob3VsZFNob3dSZW1vdGVDYWxsb3V0IiwgInByZXYiLCAic2hvd1JlbW90ZUNhbGxvdXQiLCAicmVwbEJyaWRnZUluaXRpYWxOYW1lIiwgInByZXZfMCIsICJyZXBsQnJpZGdlRXhwbGljaXQiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJ1c2VFZmZlY3QiLCAidDMiLCAic18xIiwgInMiLCAic18wIiwgIkJyaWRnZURpc2Nvbm5lY3REaWFsb2ciLCAidXNlUmVnaXN0ZXJPdmVybGF5IiwgInNlc3Npb25VcmwiLCAiX3RlbXA0IiwgImNvbm5lY3RVcmwiLCAiX3RlbXA1IiwgInNlc3Npb25BY3RpdmUiLCAiX3RlbXA2IiwgImZvY3VzSW5kZXgiLCAic2V0Rm9jdXNJbmRleCIsICJzaG93UVIiLCAic2V0U2hvd1FSIiwgInFyVGV4dCIsICJzZXRRclRleHQiLCAiZGlzcGxheVVybCIsICJxclRvU3RyaW5nIiwgInR5cGUiLCAiZXJyb3JDb3JyZWN0aW9uTGV2ZWwiLCAic21hbGwiLCAidGhlbiIsICJjYXRjaCIsICJoYW5kbGVEaXNjb25uZWN0IiwgIl90ZW1wNyIsICJSRU1PVEVfQ09OVFJPTF9ESVNDT05ORUNURURfTVNHIiwgInQ0IiwgImhhbmRsZVNob3dRUiIsICJfdGVtcDgiLCAidDUiLCAiaGFuZGxlQ29udGludWUiLCAidW5kZWZpbmVkIiwgInQ2IiwgInQ3IiwgIl90ZW1wOSIsICJfdGVtcDAiLCAidDgiLCAic2VsZWN0OmFjY2VwdCIsICJ0OSIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmdzIiwgIlQwIiwgIlQxIiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJ0MTQiLCAidDE1IiwgInQxNiIsICJxckxpbmVzIiwgInNwbGl0IiwgImZpbHRlciIsICJfdGVtcDEiLCAiRGlhbG9nIiwgIkJveCIsICJ0MTciLCAibGVuZ3RoIiwgIm1hcCIsICJfdGVtcDEwIiwgInQxOCIsICJ0MTkiLCAidDIwIiwgInQyMSIsICJ0MjIiLCAidDIzIiwgInQyNCIsICJ0MjUiLCAidDI2IiwgInQyNyIsICJ0MjgiLCAidDI5IiwgInQzMCIsICJsaW5lIiwgImlfMSIsICJpIiwgImwiLCAiaV8wIiwgInJlcGxCcmlkZ2VTZXNzaW9uQWN0aXZlIiwgInJlcGxCcmlkZ2VDb25uZWN0VXJsIiwgInJlcGxCcmlkZ2VTZXNzaW9uVXJsIiwgIndhaXRGb3JQb2xpY3lMaW1pdHNUb0xvYWQiLCAiaXNQb2xpY3lBbGxvd2VkIiwgImRpc2FibGVkUmVhc29uIiwgImdldEJyaWRnZURpc2FibGVkUmVhc29uIiwgInVzZVYyIiwgImlzRW52TGVzc0JyaWRnZUVuYWJsZWQiLCAiZmVhdHVyZSIsICJpc0Fzc2lzdGFudE1vZGUiLCAidmVyc2lvbkVycm9yIiwgImNoZWNrRW52TGVzc0JyaWRnZU1pblZlcnNpb24iLCAiY2hlY2tCcmlkZ2VNaW5WZXJzaW9uIiwgImdldEJyaWRnZUFjY2Vzc1Rva2VuIiwgIkJSSURHRV9MT0dJTl9JTlNUUlVDVElPTiIsICJsb2dGb3JEZWJ1Z2dpbmciLCAiY2FsbCIsICJfY29udGV4dCIsICJhcmdzIiwgInRyaW0iXQp9Cg==
