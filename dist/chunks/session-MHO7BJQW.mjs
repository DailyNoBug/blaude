#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_qrcode,
  toString
} from "./chunk-SST3HAV6.mjs";
import {
  init_AppState,
  useAppState
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  Pane,
  init_Pane,
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
  ThemedBox_default,
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
import "./chunk-NKGQGSP5.mjs";
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
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/session/session.tsx
function SessionInfo(t0) {
  const $ = c(19);
  const {
    onDone
  } = t0;
  const remoteSessionUrl = useAppState(_temp);
  const [qrCode, setQrCode] = useState("");
  let t1;
  let t2;
  if ($[0] !== remoteSessionUrl) {
    t1 = () => {
      if (!remoteSessionUrl) {
        return;
      }
      const url = remoteSessionUrl;
      const generateQRCode = async function generateQRCode2() {
        const qr = await toString(url, {
          type: "utf8",
          errorCorrectionLevel: "L"
        });
        setQrCode(qr);
      };
      generateQRCode().catch(_temp2);
    };
    t2 = [remoteSessionUrl];
    $[0] = remoteSessionUrl;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      context: "Confirmation"
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  useKeybinding("confirm:no", onDone, t3);
  if (!remoteSessionUrl) {
    let t42;
    if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ createElement(Pane, null, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Not in remote mode. Start with `blaude --remote` to use this command."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(press esc to close)"));
      $[4] = t42;
    } else {
      t42 = $[4];
    }
    return t42;
  }
  let T0;
  let t4;
  let t5;
  if ($[5] !== qrCode) {
    const lines = qrCode.split("\n").filter(_temp3);
    const isLoading = lines.length === 0;
    T0 = Pane;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t4 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Remote session"));
      $[9] = t4;
    } else {
      t4 = $[9];
    }
    t5 = isLoading ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Generating QR code\u2026") : lines.map(_temp4);
    $[5] = qrCode;
    $[6] = T0;
    $[7] = t4;
    $[8] = t5;
  } else {
    T0 = $[6];
    t4 = $[7];
    t5 = $[8];
  }
  let t6;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Open in browser: ");
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== remoteSessionUrl) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, t6, /* @__PURE__ */ createElement(ThemedText, { color: "ide" }, remoteSessionUrl));
    $[11] = remoteSessionUrl;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(press esc to close)"));
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t9;
  if ($[14] !== T0 || $[15] !== t4 || $[16] !== t5 || $[17] !== t7) {
    t9 = /* @__PURE__ */ createElement(T0, null, t4, t5, t7, t8);
    $[14] = T0;
    $[15] = t4;
    $[16] = t5;
    $[17] = t7;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  return t9;
}
function _temp4(line_0, i) {
  return /* @__PURE__ */ createElement(ThemedText, { key: i }, line_0);
}
function _temp3(line) {
  return line.length > 0;
}
function _temp2(e) {
  logForDebugging("QR code generation failed", e);
}
function _temp(s) {
  return s.remoteSessionUrl;
}
var call;
var init_session = __esm({
  "src/commands/session/session.tsx"() {
    init_react_compiler_runtime();
    init_qrcode();
    init_react();
    init_react();
    init_Pane();
    init_ink();
    init_useKeybinding();
    init_AppState();
    init_debug();
    call = async (onDone) => {
      return /* @__PURE__ */ createElement(SessionInfo, { onDone });
    };
  }
});
init_session();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3Nlc3Npb24vc2Vzc2lvbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHRvU3RyaW5nIGFzIHFyVG9TdHJpbmcgfSBmcm9tICdxcmNvZGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vUGFuZS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Eb25lOiAoKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIFNlc3Npb25JbmZvKHsgb25Eb25lIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgcmVtb3RlU2Vzc2lvblVybCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5yZW1vdGVTZXNzaW9uVXJsKVxuICBjb25zdCBbcXJDb2RlLCBzZXRRckNvZGVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuICAvLyBHZW5lcmF0ZSBRUiBjb2RlIHdoZW4gVVJMIGlzIGF2YWlsYWJsZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVtb3RlU2Vzc2lvblVybCkgcmV0dXJuXG5cbiAgICBjb25zdCB1cmwgPSByZW1vdGVTZXNzaW9uVXJsXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVRUkNvZGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCBxciA9IGF3YWl0IHFyVG9TdHJpbmcodXJsLCB7XG4gICAgICAgIHR5cGU6ICd1dGY4JyxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6ICdMJyxcbiAgICAgIH0pXG4gICAgICBzZXRRckNvZGUocXIpXG4gICAgfVxuICAgIC8vIEludGVudGlvbmFsbHkgc2lsZW50IGZhaWwgLSBVUkwgaXMgc3RpbGwgc2hvd24gc28gUVIgaXMgbm9uLWNyaXRpY2FsXG4gICAgZ2VuZXJhdGVRUkNvZGUoKS5jYXRjaChlID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnUVIgY29kZSBnZW5lcmF0aW9uIGZhaWxlZCcsIGUpXG4gICAgfSlcbiAgfSwgW3JlbW90ZVNlc3Npb25VcmxdKVxuXG4gIC8vIEhhbmRsZSBFU0MgdG8gZGlzbWlzc1xuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgb25Eb25lLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgLy8gTm90IGluIHJlbW90ZSBtb2RlXG4gIGlmICghcmVtb3RlU2Vzc2lvblVybCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgTm90IGluIHJlbW90ZSBtb2RlLiBTdGFydCB3aXRoIGBjbGF1ZGUgLS1yZW1vdGVgIHRvIHVzZSB0aGlzIGNvbW1hbmQuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+KHByZXNzIGVzYyB0byBjbG9zZSk8L1RleHQ+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgbGluZXMgPSBxckNvZGUuc3BsaXQoJ1xcbicpLmZpbHRlcihsaW5lID0+IGxpbmUubGVuZ3RoID4gMClcbiAgY29uc3QgaXNMb2FkaW5nID0gbGluZXMubGVuZ3RoID09PSAwXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZT5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZD5SZW1vdGUgc2Vzc2lvbjwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogUVIgQ29kZSAtIHNpbGVudGx5IGZhaWxzIGlmIGdlbmVyYXRpb24gZXJyb3JzLCBVUkwgaXMgc3RpbGwgc2hvd24gKi99XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5HZW5lcmF0aW5nIFFSIGNvZGXigKY8L1RleHQ+XG4gICAgICApIDogKFxuICAgICAgICBsaW5lcy5tYXAoKGxpbmUsIGkpID0+IDxUZXh0IGtleT17aX0+e2xpbmV9PC9UZXh0PilcbiAgICAgICl9XG5cbiAgICAgIHsvKiBVUkwgKi99XG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPk9wZW4gaW4gYnJvd3NlcjogPC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImlkZVwiPntyZW1vdGVTZXNzaW9uVXJsfTwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPihwcmVzcyBlc2MgdG8gY2xvc2UpPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9QYW5lPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbEpTWENvbW1hbmRDYWxsID0gYXN5bmMgb25Eb25lID0+IHtcbiAgcmV0dXJuIDxTZXNzaW9uSW5mbyBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SVYsU0FBVTtBQUFDO0FBckNqRSxTQUFBZixPQUFBMEIsR0FBQTtBQWtCTUMsa0JBQWdCLDZCQUE2QkQsQ0FBQztBQUFDO0FBbEJyRCxTQUFBdkMsTUFBQXlDLEdBQUE7QUFBQSxTQUM0Q0EsRUFBQzNDO0FBQWlCO0lBaUVqRDRDOzs7O0FBaEZiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF3RU8sSUFBTUEsT0FBNEIsT0FBTTdDLFdBQVU7QUFDdkQsYUFBTyw4QkFBQyxlQUFZLFFBQWU7SUFDckM7OzsiLAogICJuYW1lcyI6IFsiU2Vzc2lvbkluZm8iLCAidDAiLCAiJCIsICJfYyIsICJvbkRvbmUiLCAicmVtb3RlU2Vzc2lvblVybCIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcCIsICJxckNvZGUiLCAic2V0UXJDb2RlIiwgInVzZVN0YXRlIiwgInQxIiwgInQyIiwgInVybCIsICJnZW5lcmF0ZVFSQ29kZSIsICJxciIsICJxclRvU3RyaW5nIiwgInR5cGUiLCAiZXJyb3JDb3JyZWN0aW9uTGV2ZWwiLCAiY2F0Y2giLCAiX3RlbXAyIiwgInVzZUVmZmVjdCIsICJ0MyIsICJTeW1ib2wiLCAiZm9yIiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZyIsICJ0NCIsICJUMCIsICJ0NSIsICJsaW5lcyIsICJzcGxpdCIsICJmaWx0ZXIiLCAiX3RlbXAzIiwgImlzTG9hZGluZyIsICJsZW5ndGgiLCAiUGFuZSIsICJtYXAiLCAiX3RlbXA0IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgImxpbmVfMCIsICJpIiwgImxpbmUiLCAiZSIsICJsb2dGb3JEZWJ1Z2dpbmciLCAicyIsICJjYWxsIl0KfQo=
