#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  useManagePlugins
} from "./chunk-HE47MKUS.mjs";
import "./chunk-MKMWAXNL.mjs";
import {
  WelcomeV2
} from "./chunk-MU7Z6BZX.mjs";
import {
  onChangeAppState
} from "./chunk-LVAUD4JA.mjs";
import "./chunk-7ZIL7QM5.mjs";
import {
  MCPConnectionManager,
  init_MCPConnectionManager
} from "./chunk-KHIJBXIT.mjs";
import "./chunk-BGIVZ46A.mjs";
import "./chunk-KHM4QVLJ.mjs";
import "./chunk-NVJGKF76.mjs";
import "./chunk-5VAWKU3E.mjs";
import "./chunk-QUU2KZ75.mjs";
import {
  AppStateProvider,
  KeybindingSetup,
  init_AppState,
  init_KeybindingProviderSetup
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
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
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_auth,
  isAnthropicAuthEnabled
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
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/util.tsx
init_react_compiler_runtime();
init_react();
import { cwd } from "process";
init_ink();
init_KeybindingProviderSetup();
init_analytics();
init_MCPConnectionManager();
init_AppState();
init_auth();
async function setupTokenHandler(root) {
  logEvent("tengu_setup_token_command", {});
  const showAuthWarning = !isAnthropicAuthEnabled();
  const {
    ConsoleOAuthFlow
  } = await import("./ConsoleOAuthFlow-QGCMT3SU.mjs");
  await new Promise((resolve) => {
    root.render(/* @__PURE__ */ react_default.createElement(AppStateProvider, { onChangeAppState }, /* @__PURE__ */ react_default.createElement(KeybindingSetup, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(WelcomeV2, null), showAuthWarning && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Warning: You already have authentication configured via environment variable or API key helper."), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "The setup-token command will create a new OAuth token which you can use instead.")), /* @__PURE__ */ react_default.createElement(ConsoleOAuthFlow, { onDone: () => {
      void resolve();
    }, mode: "setup-token", startingMessage: "This will guide you through long-lived (1-year) auth token setup for your Blaude account. A subscription plan is required." })))));
  });
  root.unmount();
  process.exit(0);
}
var DoctorLazy = react_default.lazy(() => import("./Doctor-2RF4AXFK.mjs").then((m) => ({
  default: m.Doctor
})));
function DoctorWithPlugins(t0) {
  const $ = c(2);
  const {
    onDone
  } = t0;
  useManagePlugins();
  let t1;
  if ($[0] !== onDone) {
    t1 = /* @__PURE__ */ react_default.createElement(react_default.Suspense, { fallback: null }, /* @__PURE__ */ react_default.createElement(DoctorLazy, { onDone }));
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
async function doctorHandler(root) {
  logEvent("tengu_doctor_command", {});
  await new Promise((resolve) => {
    root.render(/* @__PURE__ */ react_default.createElement(AppStateProvider, null, /* @__PURE__ */ react_default.createElement(KeybindingSetup, null, /* @__PURE__ */ react_default.createElement(MCPConnectionManager, { dynamicMcpConfig: void 0, isStrictMcpConfig: false }, /* @__PURE__ */ react_default.createElement(DoctorWithPlugins, { onDone: () => {
      void resolve();
    } })))));
  });
  root.unmount();
  process.exit(0);
}
async function installHandler(target, options) {
  const {
    setup
  } = await import("./setup-XM3O5NWN.mjs");
  await setup(cwd(), "default", false, false, void 0, false);
  const {
    install
  } = await import("./install-2G5FPJ5D.mjs");
  await new Promise((resolve) => {
    const args = [];
    if (target) args.push(target);
    if (options.force) args.push("--force");
    void install.call((result) => {
      void resolve();
      process.exit(result.includes("failed") ? 1 : 0);
    }, {}, args);
  });
}
export {
  doctorHandler,
  installHandler,
  setupTokenHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy91dGlsLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBNaXNjZWxsYW5lb3VzIHN1YmNvbW1hbmQgaGFuZGxlcnMg4oCUIGV4dHJhY3RlZCBmcm9tIG1haW4udHN4IGZvciBsYXp5IGxvYWRpbmcuXG4gKiBzZXR1cC10b2tlbiwgZG9jdG9yLCBpbnN0YWxsXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXQgLS0gQ0xJIHN1YmNvbW1hbmQgaGFuZGxlcnMgaW50ZW50aW9uYWxseSBleGl0ICovXG5cbmltcG9ydCB7IGN3ZCB9IGZyb20gJ3Byb2Nlc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBXZWxjb21lVjIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvZ29WMi9XZWxjb21lVjIuanMnXG5pbXBvcnQgeyB1c2VNYW5hZ2VQbHVnaW5zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWFuYWdlUGx1Z2lucy5qcydcbmltcG9ydCB0eXBlIHsgUm9vdCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IEtleWJpbmRpbmdTZXR1cCB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL0tleWJpbmRpbmdQcm92aWRlclNldHVwLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBNQ1BDb25uZWN0aW9uTWFuYWdlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC9NQ1BDb25uZWN0aW9uTWFuYWdlci5qcydcbmltcG9ydCB7IEFwcFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IG9uQ2hhbmdlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9vbkNoYW5nZUFwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgaXNBbnRocm9waWNBdXRoRW5hYmxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cFRva2VuSGFuZGxlcihyb290OiBSb290KTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV9zZXR1cF90b2tlbl9jb21tYW5kJywge30pXG5cbiAgY29uc3Qgc2hvd0F1dGhXYXJuaW5nID0gIWlzQW50aHJvcGljQXV0aEVuYWJsZWQoKVxuICBjb25zdCB7IENvbnNvbGVPQXV0aEZsb3cgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vLi4vY29tcG9uZW50cy9Db25zb2xlT0F1dGhGbG93LmpzJ1xuICApXG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgIHJvb3QucmVuZGVyKFxuICAgICAgPEFwcFN0YXRlUHJvdmlkZXIgb25DaGFuZ2VBcHBTdGF0ZT17b25DaGFuZ2VBcHBTdGF0ZX0+XG4gICAgICAgIDxLZXliaW5kaW5nU2V0dXA+XG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICAgIDxXZWxjb21lVjIgLz5cbiAgICAgICAgICAgIHtzaG93QXV0aFdhcm5pbmcgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgIFdhcm5pbmc6IFlvdSBhbHJlYWR5IGhhdmUgYXV0aGVudGljYXRpb24gY29uZmlndXJlZCB2aWFcbiAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50IHZhcmlhYmxlIG9yIEFQSSBrZXkgaGVscGVyLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgIFRoZSBzZXR1cC10b2tlbiBjb21tYW5kIHdpbGwgY3JlYXRlIGEgbmV3IE9BdXRoIHRva2VuIHdoaWNoXG4gICAgICAgICAgICAgICAgICB5b3UgY2FuIHVzZSBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbnNvbGVPQXV0aEZsb3dcbiAgICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdm9pZCByZXNvbHZlKClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbW9kZT1cInNldHVwLXRva2VuXCJcbiAgICAgICAgICAgICAgc3RhcnRpbmdNZXNzYWdlPVwiVGhpcyB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIGxvbmctbGl2ZWQgKDEteWVhcikgYXV0aCB0b2tlbiBzZXR1cCBmb3IgeW91ciBDbGF1ZGUgYWNjb3VudC4gQ2xhdWRlIHN1YnNjcmlwdGlvbiByZXF1aXJlZC5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9LZXliaW5kaW5nU2V0dXA+XG4gICAgICA8L0FwcFN0YXRlUHJvdmlkZXI+LFxuICAgIClcbiAgfSlcbiAgcm9vdC51bm1vdW50KClcbiAgcHJvY2Vzcy5leGl0KDApXG59XG5cbi8vIERvY3RvcldpdGhQbHVnaW5zIHdyYXBwZXIgKyBkb2N0b3IgaGFuZGxlclxuY29uc3QgRG9jdG9yTGF6eSA9IFJlYWN0LmxhenkoKCkgPT5cbiAgaW1wb3J0KCcuLi8uLi9zY3JlZW5zL0RvY3Rvci5qcycpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLkRvY3RvciB9KSksXG4pXG5cbmZ1bmN0aW9uIERvY3RvcldpdGhQbHVnaW5zKHtcbiAgb25Eb25lLFxufToge1xuICBvbkRvbmU6ICgpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICB1c2VNYW5hZ2VQbHVnaW5zKClcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgPERvY3Rvckxhenkgb25Eb25lPXtvbkRvbmV9IC8+XG4gICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9jdG9ySGFuZGxlcihyb290OiBSb290KTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV9kb2N0b3JfY29tbWFuZCcsIHt9KVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgIHJvb3QucmVuZGVyKFxuICAgICAgPEFwcFN0YXRlUHJvdmlkZXI+XG4gICAgICAgIDxLZXliaW5kaW5nU2V0dXA+XG4gICAgICAgICAgPE1DUENvbm5lY3Rpb25NYW5hZ2VyXG4gICAgICAgICAgICBkeW5hbWljTWNwQ29uZmlnPXt1bmRlZmluZWR9XG4gICAgICAgICAgICBpc1N0cmljdE1jcENvbmZpZz17ZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERvY3RvcldpdGhQbHVnaW5zXG4gICAgICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHZvaWQgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTUNQQ29ubmVjdGlvbk1hbmFnZXI+XG4gICAgICAgIDwvS2V5YmluZGluZ1NldHVwPlxuICAgICAgPC9BcHBTdGF0ZVByb3ZpZGVyPixcbiAgICApXG4gIH0pXG4gIHJvb3QudW5tb3VudCgpXG4gIHByb2Nlc3MuZXhpdCgwKVxufVxuXG4vLyBpbnN0YWxsIGhhbmRsZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YWxsSGFuZGxlcihcbiAgdGFyZ2V0OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHsgZm9yY2U/OiBib29sZWFuIH0sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBzZXR1cCB9ID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9zZXR1cC5qcycpXG4gIGF3YWl0IHNldHVwKGN3ZCgpLCAnZGVmYXVsdCcsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkLCBmYWxzZSlcbiAgY29uc3QgeyBpbnN0YWxsIH0gPSBhd2FpdCBpbXBvcnQoJy4uLy4uL2NvbW1hbmRzL2luc3RhbGwuanMnKVxuICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICBjb25zdCBhcmdzOiBzdHJpbmdbXSA9IFtdXG4gICAgaWYgKHRhcmdldCkgYXJncy5wdXNoKHRhcmdldClcbiAgICBpZiAob3B0aW9ucy5mb3JjZSkgYXJncy5wdXNoKCctLWZvcmNlJylcblxuICAgIHZvaWQgaW5zdGFsbC5jYWxsKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgdm9pZCByZXNvbHZlKClcbiAgICAgICAgcHJvY2Vzcy5leGl0KHJlc3VsdC5pbmNsdWRlcygnZmFpbGVkJykgPyAxIDogMClcbiAgICAgIH0sXG4gICAgICB7fSxcbiAgICAgIGFyZ3MsXG4gICAgKVxuICB9KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQURBLFNBQVNBLFdBQVc7QUFLcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsZUFBc0JDLGtCQUFrQkMsTUFBMkI7QUFDakVDLFdBQVMsNkJBQTZCLENBQUMsQ0FBQztBQUV4QyxRQUFNQyxrQkFBa0IsQ0FBQ0MsdUJBQXVCO0FBQ2hELFFBQU07SUFBRUM7RUFBaUIsSUFBSSxNQUFNLE9BQ2pDLGlDQUNGO0FBQ0EsUUFBTSxJQUFJQyxRQUFjQyxhQUFXO0FBQ2pDTixTQUFLTyxPQUNILDRDQUFDLG9CQUFpQixvQkFDaEIsNENBQUMsdUJBQ0MsNENBQUMscUJBQUksZUFBYyxVQUFTLEtBQUssS0FDL0IsNENBQUMsZUFBUyxHQUNUTCxtQkFDQyw0Q0FBQyxxQkFBSSxlQUFjLFlBQ2pCLDRDQUFDLGNBQUssT0FBTSxhQUFTLGlHQUdyQixHQUNBLDRDQUFDLGNBQUssT0FBTSxhQUFTLGtGQUdyQixDQUNGLEdBRUYsNENBQUMsb0JBQ0MsUUFBUSxNQUFNO0FBQ1osV0FBS0ksUUFBUTtJQUNmLEdBQ0EsTUFBSyxlQUNMLGlCQUFnQiw4SEFBeUgsQ0FFN0ksQ0FDRixDQUNGLENBQ0Y7RUFDRixDQUFDO0FBQ0ROLE9BQUtRLFFBQVE7QUFDYkMsVUFBUUMsS0FBSyxDQUFDO0FBQ2hCO0FBR0EsSUFBTUMsYUFBYUMsY0FBTUMsS0FBSyxNQUM1QixPQUFPLHVCQUF5QixFQUFFQyxLQUFLQyxRQUFNO0VBQUVDLFNBQVNELEVBQUVFO0FBQU8sRUFBRSxDQUNyRTtBQUVBLFNBQUFDLGtCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQTJCLFFBQUE7SUFBQUM7RUFBQSxJQUFBSDtBQUt6QkksbUJBQWlCO0FBQUMsTUFBQUM7QUFBQSxNQUFBSixFQUFBLENBQUEsTUFBQUUsUUFBQTtBQUVoQkUsU0FBQSw0Q0FBQSxjQUFBLFVBQUEsRUFBMEIsVUFBQSxRQUN4Qiw0Q0FBQyxjQUFtQkYsUUFBTSxDQUM1QjtBQUFpQkYsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBSTtFQUFBLE9BQUE7QUFBQUEsU0FBQUosRUFBQSxDQUFBO0VBQUE7QUFBQSxTQUZqQkk7QUFFaUI7QUFJckIsZUFBc0JDLGNBQWN6QixNQUEyQjtBQUM3REMsV0FBUyx3QkFBd0IsQ0FBQyxDQUFDO0FBRW5DLFFBQU0sSUFBSUksUUFBY0MsYUFBVztBQUNqQ04sU0FBS08sT0FDSCw0Q0FBQyx3QkFDQyw0Q0FBQyx1QkFDQyw0Q0FBQyx3QkFDQyxrQkFBa0JtQixRQUNsQixtQkFBbUIsU0FFbkIsNENBQUMscUJBQ0MsUUFBUSxNQUFNO0FBQ1osV0FBS3BCLFFBQVE7SUFDZixHQUFFLENBRU4sQ0FDRixDQUNGLENBQ0Y7RUFDRixDQUFDO0FBQ0ROLE9BQUtRLFFBQVE7QUFDYkMsVUFBUUMsS0FBSyxDQUFDO0FBQ2hCO0FBR0EsZUFBc0JpQixlQUNwQkMsUUFDQUMsU0FDZTtBQUNmLFFBQU07SUFBRUM7RUFBTSxJQUFJLE1BQU0sT0FBTyxzQkFBZ0I7QUFDL0MsUUFBTUEsTUFBTUMsSUFBSSxHQUFHLFdBQVcsT0FBTyxPQUFPTCxRQUFXLEtBQUs7QUFDNUQsUUFBTTtJQUFFTTtFQUFRLElBQUksTUFBTSxPQUFPLHdCQUEyQjtBQUM1RCxRQUFNLElBQUkzQixRQUFjQyxhQUFXO0FBQ2pDLFVBQU0yQixPQUFpQixDQUFBO0FBQ3ZCLFFBQUlMLE9BQVFLLE1BQUtDLEtBQUtOLE1BQU07QUFDNUIsUUFBSUMsUUFBUU0sTUFBT0YsTUFBS0MsS0FBSyxTQUFTO0FBRXRDLFNBQUtGLFFBQVFJLEtBQ1hDLFlBQVU7QUFDUixXQUFLL0IsUUFBUTtBQUNiRyxjQUFRQyxLQUFLMkIsT0FBT0MsU0FBUyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQ2hELEdBQ0EsQ0FBQyxHQUNETCxJQUNGO0VBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJjd2QiLCAic2V0dXBUb2tlbkhhbmRsZXIiLCAicm9vdCIsICJsb2dFdmVudCIsICJzaG93QXV0aFdhcm5pbmciLCAiaXNBbnRocm9waWNBdXRoRW5hYmxlZCIsICJDb25zb2xlT0F1dGhGbG93IiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZW5kZXIiLCAidW5tb3VudCIsICJwcm9jZXNzIiwgImV4aXQiLCAiRG9jdG9yTGF6eSIsICJSZWFjdCIsICJsYXp5IiwgInRoZW4iLCAibSIsICJkZWZhdWx0IiwgIkRvY3RvciIsICJEb2N0b3JXaXRoUGx1Z2lucyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJ1c2VNYW5hZ2VQbHVnaW5zIiwgInQxIiwgImRvY3RvckhhbmRsZXIiLCAidW5kZWZpbmVkIiwgImluc3RhbGxIYW5kbGVyIiwgInRhcmdldCIsICJvcHRpb25zIiwgInNldHVwIiwgImN3ZCIsICJpbnN0YWxsIiwgImFyZ3MiLCAicHVzaCIsICJmb3JjZSIsICJjYWxsIiwgInJlc3VsdCIsICJpbmNsdWRlcyJdCn0K
