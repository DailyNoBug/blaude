#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ValidationErrorsList,
  init_ValidationErrorsList
} from "./chunk-W65N2X4F.mjs";
import {
  Select,
  init_CustomSelect
} from "./chunk-OTDPNGFK.mjs";
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
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default
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
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/components/InvalidSettingsDialog.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_CustomSelect();
init_Dialog();
init_ValidationErrorsList();
function InvalidSettingsDialog(t0) {
  const $ = c(13);
  const {
    settingsErrors,
    onContinue,
    onExit
  } = t0;
  let t1;
  if ($[0] !== onContinue || $[1] !== onExit) {
    t1 = function handleSelect2(value) {
      if (value === "exit") {
        onExit();
      } else {
        onContinue();
      }
    };
    $[0] = onContinue;
    $[1] = onExit;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleSelect = t1;
  let t2;
  if ($[3] !== settingsErrors) {
    t2 = /* @__PURE__ */ react_default.createElement(ValidationErrorsList, { errors: settingsErrors });
    $[3] = settingsErrors;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Files with errors are skipped entirely, not just the invalid settings.");
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "Exit and fix manually",
      value: "exit"
    }, {
      label: "Continue without these settings",
      value: "continue"
    }];
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== handleSelect) {
    t5 = /* @__PURE__ */ react_default.createElement(Select, { options: t4, onChange: handleSelect });
    $[7] = handleSelect;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== onExit || $[10] !== t2 || $[11] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Settings Error", onCancel: onExit, color: "warning" }, t2, t3, t5);
    $[9] = onExit;
    $[10] = t2;
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  return t6;
}
export {
  InvalidSettingsDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSW52YWxpZFNldHRpbmdzRGlhbG9nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3MvdmFsaWRhdGlvbi5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnNMaXN0IH0gZnJvbSAnLi9WYWxpZGF0aW9uRXJyb3JzTGlzdC5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgc2V0dGluZ3NFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdXG4gIG9uQ29udGludWU6ICgpID0+IHZvaWRcbiAgb25FeGl0OiAoKSA9PiB2b2lkXG59XG5cbi8qKlxuICogRGlhbG9nIHNob3duIHdoZW4gc2V0dGluZ3MgZmlsZXMgaGF2ZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAqIFVzZXIgbXVzdCBjaG9vc2UgdG8gY29udGludWUgKHNraXBwaW5nIGludmFsaWQgZmlsZXMpIG9yIGV4aXQgdG8gZml4IHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnZhbGlkU2V0dGluZ3NEaWFsb2coe1xuICBzZXR0aW5nc0Vycm9ycyxcbiAgb25Db250aW51ZSxcbiAgb25FeGl0LFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICBvbkV4aXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNvbnRpbnVlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgdGl0bGU9XCJTZXR0aW5ncyBFcnJvclwiIG9uQ2FuY2VsPXtvbkV4aXR9IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgPFZhbGlkYXRpb25FcnJvcnNMaXN0IGVycm9ycz17c2V0dGluZ3NFcnJvcnN9IC8+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgRmlsZXMgd2l0aCBlcnJvcnMgYXJlIHNraXBwZWQgZW50aXJlbHksIG5vdCBqdXN0IHRoZSBpbnZhbGlkIHNldHRpbmdzLlxuICAgICAgPC9UZXh0PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgeyBsYWJlbDogJ0V4aXQgYW5kIGZpeCBtYW51YWxseScsIHZhbHVlOiAnZXhpdCcgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvbnRpbnVlIHdpdGhvdXQgdGhlc2Ugc2V0dGluZ3MnLFxuICAgICAgICAgICAgdmFsdWU6ICdjb250aW51ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWU8sU0FBQUEsc0JBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBK0IsUUFBQTtJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFMO0FBSTlCLE1BQUFNO0FBQUEsTUFBQUwsRUFBQSxDQUFBLE1BQUFHLGNBQUFILEVBQUEsQ0FBQSxNQUFBSSxRQUFBO0FBQ05DLFNBQUEsU0FBQUMsY0FBQUMsT0FBQTtBQUNFLFVBQUlBLFVBQVUsUUFBTTtBQUNsQkgsZUFBTztNQUFDLE9BQUE7QUFFUkQsbUJBQVc7TUFBQztJQUNiO0FBQ0ZILE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQUk7QUFBQUosTUFBQSxDQUFBLElBQUFLO0VBQUEsT0FBQTtBQUFBQSxTQUFBTCxFQUFBLENBQUE7RUFBQTtBQU5ELFFBQUFNLGVBQUFEO0FBTUMsTUFBQUc7QUFBQSxNQUFBUixFQUFBLENBQUEsTUFBQUUsZ0JBQUE7QUFJR00sU0FBQSw0Q0FBQyx3QkFBNkJOLFFBQUFBLGdCQUFjO0FBQUlGLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQVE7RUFBQSxPQUFBO0FBQUFBLFNBQUFSLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQVM7QUFBQSxNQUFBVCxFQUFBLENBQUEsTUFBQVUsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUNoREYsU0FBQSw0Q0FBQyxjQUFLLFVBQUEsUUFBUyx3RUFFZjtBQUFPVCxNQUFBLENBQUEsSUFBQVM7RUFBQSxPQUFBO0FBQUFBLFNBQUFULEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQVk7QUFBQSxNQUFBWixFQUFBLENBQUEsTUFBQVUsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUVJQyxTQUFBLENBQ1A7TUFBQUMsT0FBUztNQUF1Qk4sT0FBUztJQUFPLEdBQ2hEO01BQUFNLE9BQ1M7TUFBaUNOLE9BQ2pDO0lBQ1QsQ0FBQztBQUNGUCxNQUFBLENBQUEsSUFBQVk7RUFBQSxPQUFBO0FBQUFBLFNBQUFaLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQWM7QUFBQSxNQUFBZCxFQUFBLENBQUEsTUFBQU0sY0FBQTtBQVBIUSxTQUFBLDRDQUFDLFVBQ1UsU0FBQUYsSUFPQ04sVUFBQUEsY0FBWTtBQUN0Qk4sTUFBQSxDQUFBLElBQUFNO0FBQUFOLE1BQUEsQ0FBQSxJQUFBYztFQUFBLE9BQUE7QUFBQUEsU0FBQWQsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBZTtBQUFBLE1BQUFmLEVBQUEsQ0FBQSxNQUFBSSxVQUFBSixFQUFBLEVBQUEsTUFBQVEsTUFBQVIsRUFBQSxFQUFBLE1BQUFjLElBQUE7QUFkSkMsU0FBQSw0Q0FBQyxVQUFhLE9BQUEsa0JBQTJCWCxVQUFBQSxRQUFjLE9BQUEsYUFDckRJLElBQ0FDLElBR0FLLEVBVUY7QUFBU2QsTUFBQSxDQUFBLElBQUFJO0FBQUFKLE1BQUEsRUFBQSxJQUFBUTtBQUFBUixNQUFBLEVBQUEsSUFBQWM7QUFBQWQsTUFBQSxFQUFBLElBQUFlO0VBQUEsT0FBQTtBQUFBQSxTQUFBZixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBZlRlO0FBZVM7IiwKICAibmFtZXMiOiBbIkludmFsaWRTZXR0aW5nc0RpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgInNldHRpbmdzRXJyb3JzIiwgIm9uQ29udGludWUiLCAib25FeGl0IiwgInQxIiwgImhhbmRsZVNlbGVjdCIsICJ2YWx1ZSIsICJ0MiIsICJ0MyIsICJTeW1ib2wiLCAiZm9yIiwgInQ0IiwgImxhYmVsIiwgInQ1IiwgInQ2Il0KfQo=
