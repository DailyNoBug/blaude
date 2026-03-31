#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_setup,
  isChromeExtensionInstalled
} from "./chunk-IDNBMXUW.mjs";
import "./chunk-7DA2PBIX.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-SR5JKAMQ.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-I4JSDM2A.mjs";
import {
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_config2 as init_config,
  saveGlobalConfig
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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

// src/components/ClaudeInChromeOnboarding.tsx
init_react_compiler_runtime();
init_react();
init_analytics();
init_ink();
init_setup();
init_config();
init_Dialog();
var CHROME_EXTENSION_URL = "https://claude.ai/chrome";
var CHROME_PERMISSIONS_URL = "https://clau.de/chrome/permissions";
function ClaudeInChromeOnboarding(t0) {
  const $ = c(20);
  const {
    onDone
  } = t0;
  const [isExtensionInstalled, setIsExtensionInstalled] = react_default.useState(false);
  let t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      logEvent("tengu_claude_in_chrome_onboarding_shown", {});
      isChromeExtensionInstalled().then(setIsExtensionInstalled);
      saveGlobalConfig(_temp);
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  react_default.useEffect(t1, t2);
  let t3;
  if ($[2] !== onDone) {
    t3 = (_input, key) => {
      if (key.return) {
        onDone();
      }
    };
    $[2] = onDone;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  use_input_default(t3);
  let t4;
  if ($[4] !== isExtensionInstalled) {
    t4 = !isExtensionInstalled && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(Newline, null), /* @__PURE__ */ react_default.createElement(Newline, null), "Requires the Chrome extension. Get started at", " ", /* @__PURE__ */ react_default.createElement(Link, { url: CHROME_EXTENSION_URL }));
    $[4] = isExtensionInstalled;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. You can navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.", t4);
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== isExtensionInstalled) {
    t6 = isExtensionInstalled && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", "(", /* @__PURE__ */ react_default.createElement(Link, { url: CHROME_PERMISSIONS_URL }), ")");
    $[8] = isExtensionInstalled;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on", t6, ".");
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "chromeYellow" }, "/chrome");
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "For more info, use", " ", t8, " ", "or visit ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/chrome" }));
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== t5 || $[15] !== t7) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t5, t7, t9);
    $[14] = t5;
    $[15] = t7;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] !== onDone || $[18] !== t10) {
    t11 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Claude in Chrome (Beta)", onCancel: onDone, color: "chromeYellow" }, t10);
    $[17] = onDone;
    $[18] = t10;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  return t11;
}
function _temp(current) {
  return {
    ...current,
    hasCompletedClaudeInChromeOnboarding: true
  };
}
export {
  ClaudeInChromeOnboarding
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2xhdWRlSW5DaHJvbWVPbmJvYXJkaW5nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9wcmVmZXItdXNlLWtleWJpbmRpbmdzIC0tIGVudGVyIHRvIGNvbnRpbnVlXG5pbXBvcnQgeyBCb3gsIExpbmssIE5ld2xpbmUsIFRleHQsIHVzZUlucHV0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQgfSBmcm9tICcuLi91dGlscy9jbGF1ZGVJbkNocm9tZS9zZXR1cC5qcydcbmltcG9ydCB7IHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG5jb25zdCBDSFJPTUVfRVhURU5TSU9OX1VSTCA9ICdodHRwczovL2NsYXVkZS5haS9jaHJvbWUnXG5jb25zdCBDSFJPTUVfUEVSTUlTU0lPTlNfVVJMID0gJ2h0dHBzOi8vY2xhdS5kZS9jaHJvbWUvcGVybWlzc2lvbnMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZSgpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDbGF1ZGVJbkNocm9tZU9uYm9hcmRpbmcoeyBvbkRvbmUgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbaXNFeHRlbnNpb25JbnN0YWxsZWQsIHNldElzRXh0ZW5zaW9uSW5zdGFsbGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2NsYXVkZV9pbl9jaHJvbWVfb25ib2FyZGluZ19zaG93bicsIHt9KVxuICAgIHZvaWQgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQoKS50aGVuKHNldElzRXh0ZW5zaW9uSW5zdGFsbGVkKVxuICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICByZXR1cm4geyAuLi5jdXJyZW50LCBoYXNDb21wbGV0ZWRDbGF1ZGVJbkNocm9tZU9uYm9hcmRpbmc6IHRydWUgfVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIC8vIEhhbmRsZSBFbnRlciB0byBjb250aW51ZVxuICB1c2VJbnB1dCgoX2lucHV0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5LnJldHVybikge1xuICAgICAgb25Eb25lKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIkNsYXVkZSBpbiBDaHJvbWUgKEJldGEpXCJcbiAgICAgIG9uQ2FuY2VsPXtvbkRvbmV9XG4gICAgICBjb2xvcj1cImNocm9tZVllbGxvd1wiXG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgQ2xhdWRlIGluIENocm9tZSB3b3JrcyB3aXRoIHRoZSBDaHJvbWUgZXh0ZW5zaW9uIHRvIGxldCB5b3UgY29udHJvbFxuICAgICAgICAgIHlvdXIgYnJvd3NlciBkaXJlY3RseSBmcm9tIENsYXVkZSBDb2RlLiBZb3UgY2FuIG5hdmlnYXRlIHdlYnNpdGVzLFxuICAgICAgICAgIGZpbGwgZm9ybXMsIGNhcHR1cmUgc2NyZWVuc2hvdHMsIHJlY29yZCBHSUZzLCBhbmQgZGVidWcgd2l0aCBjb25zb2xlXG4gICAgICAgICAgbG9ncyBhbmQgbmV0d29yayByZXF1ZXN0cy5cbiAgICAgICAgICB7IWlzRXh0ZW5zaW9uSW5zdGFsbGVkICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxOZXdsaW5lIC8+XG4gICAgICAgICAgICAgIDxOZXdsaW5lIC8+XG4gICAgICAgICAgICAgIFJlcXVpcmVzIHRoZSBDaHJvbWUgZXh0ZW5zaW9uLiBHZXQgc3RhcnRlZCBhdHsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIHVybD17Q0hST01FX0VYVEVOU0lPTl9VUkx9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgU2l0ZS1sZXZlbCBwZXJtaXNzaW9ucyBhcmUgaW5oZXJpdGVkIGZyb20gdGhlIENocm9tZSBleHRlbnNpb24uIE1hbmFnZVxuICAgICAgICAgIHBlcm1pc3Npb25zIGluIHRoZSBDaHJvbWUgZXh0ZW5zaW9uIHNldHRpbmdzIHRvIGNvbnRyb2wgd2hpY2ggc2l0ZXNcbiAgICAgICAgICBDbGF1ZGUgY2FuIGJyb3dzZSwgY2xpY2ssIGFuZCB0eXBlIG9uXG4gICAgICAgICAge2lzRXh0ZW5zaW9uSW5zdGFsbGVkICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICg8TGluayB1cmw9e0NIUk9NRV9QRVJNSVNTSU9OU19VUkx9IC8+KVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICAuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgRm9yIG1vcmUgaW5mbywgdXNleycgJ31cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwiY2hyb21lWWVsbG93XCI+XG4gICAgICAgICAgICAvY2hyb21lXG4gICAgICAgICAgPC9UZXh0PnsnICd9XG4gICAgICAgICAgb3IgdmlzaXQgPExpbmsgdXJsPVwiaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9jaHJvbWVcIiAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxv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QUExQixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUEyQjtBQUFBLE1BQUEzQixFQUFBLEVBQUEsTUFBQVMsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUpUaUIsU0FBQSw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxzQkFDTSxLQUNuQkQsSUFFUSxLQUFJLGFBQ0gsNENBQUMsUUFBUyxLQUFBLDBDQUF3QyxDQUM3RDtBQUFPMUIsTUFBQSxFQUFBLElBQUEyQjtFQUFBLE9BQUE7QUFBQUEsU0FBQTNCLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTRCO0FBQUEsTUFBQTVCLEVBQUEsRUFBQSxNQUFBdUIsTUFBQXZCLEVBQUEsRUFBQSxNQUFBeUIsSUFBQTtBQWxDVEcsVUFBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsS0FDL0JMLElBZUFFLElBWUFFLEVBT0Y7QUFBTTNCLE1BQUEsRUFBQSxJQUFBdUI7QUFBQXZCLE1BQUEsRUFBQSxJQUFBeUI7QUFBQXpCLE1BQUEsRUFBQSxJQUFBNEI7RUFBQSxPQUFBO0FBQUFBLFVBQUE1QixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUE2QjtBQUFBLE1BQUE3QixFQUFBLEVBQUEsTUFBQUUsVUFBQUYsRUFBQSxFQUFBLE1BQUE0QixLQUFBO0FBeENSQyxVQUFBLDRDQUFDLFVBQ08sT0FBQSwyQkFDSTNCLFVBQUFBLFFBQ0osT0FBQSxrQkFFTjBCLEdBb0NGO0FBQVM1QixNQUFBLEVBQUEsSUFBQUU7QUFBQUYsTUFBQSxFQUFBLElBQUE0QjtBQUFBNUIsTUFBQSxFQUFBLElBQUE2QjtFQUFBLE9BQUE7QUFBQUEsVUFBQTdCLEVBQUEsRUFBQTtFQUFBO0FBQUEsU0F6Q1Q2QjtBQXlDUztBQTVETixTQUFBZCxNQUFBZSxTQUFBO0FBQUEsU0FPTTtJQUFBLEdBQUtBO0lBQU9DLHNDQUF3QztFQUFLO0FBQUM7IiwKICAibmFtZXMiOiBbIkNIUk9NRV9FWFRFTlNJT05fVVJMIiwgIkNIUk9NRV9QRVJNSVNTSU9OU19VUkwiLCAiQ2xhdWRlSW5DaHJvbWVPbmJvYXJkaW5nIiwgInQwIiwgIiQiLCAiX2MiLCAib25Eb25lIiwgImlzRXh0ZW5zaW9uSW5zdGFsbGVkIiwgInNldElzRXh0ZW5zaW9uSW5zdGFsbGVkIiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgInQxIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAibG9nRXZlbnQiLCAiaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQiLCAidGhlbiIsICJzYXZlR2xvYmFsQ29uZmlnIiwgIl90ZW1wIiwgInVzZUVmZmVjdCIsICJ0MyIsICJfaW5wdXQiLCAia2V5IiwgInJldHVybiIsICJ1c2VJbnB1dCIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAidDExIiwgImN1cnJlbnQiLCAiaGFzQ29tcGxldGVkQ2xhdWRlSW5DaHJvbWVPbmJvYXJkaW5nIl0KfQo=
