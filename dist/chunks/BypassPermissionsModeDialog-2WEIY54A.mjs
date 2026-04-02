#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  gracefulShutdownSync,
  init_CustomSelect,
  init_gracefulShutdown
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-UPQJMBLU.mjs";
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
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_settings2 as init_settings,
  updateSettingsForSource
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
import "./chunk-KCFW5MKY.mjs";
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
import "./chunk-O5PZ3G6I.mjs";

// src/components/BypassPermissionsModeDialog.tsx
init_react_compiler_runtime();
init_react();
init_analytics();
init_ink();
init_gracefulShutdown();
init_settings();
init_CustomSelect();
init_Dialog();
function BypassPermissionsModeDialog(t0) {
  const $ = c(7);
  const {
    onAccept
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  react_default.useEffect(_temp, t1);
  let t2;
  if ($[1] !== onAccept) {
    t2 = function onChange2(value) {
      bb3: switch (value) {
        case "accept": {
          logEvent("tengu_bypass_permissions_mode_dialog_accept", {});
          updateSettingsForSource("userSettings", {
            skipDangerousModePermissionPrompt: true
          });
          onAccept();
          break bb3;
        }
        case "decline": {
          gracefulShutdownSync(1);
        }
      }
    };
    $[1] = onAccept;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const onChange = t2;
  const handleEscape = _temp2;
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "In Bypass Permissions mode, Blaude will not ask for your approval before running potentially dangerous commands.", /* @__PURE__ */ react_default.createElement(Newline, null), "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged."), /* @__PURE__ */ react_default.createElement(ThemedText, null, "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode."), /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/security" }));
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "No, exit",
      value: "decline"
    }, {
      label: "Yes, I accept",
      value: "accept"
    }];
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== onChange) {
    t5 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "WARNING: Blaude running in Bypass Permissions mode", color: "error", onCancel: handleEscape }, t3, /* @__PURE__ */ react_default.createElement(Select, { options: t4, onChange: (value_0) => onChange(value_0) }));
    $[5] = onChange;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  return t5;
}
function _temp2() {
  gracefulShutdownSync(0);
}
function _temp() {
  logEvent("tengu_bypass_permissions_mode_dialog_shown", {});
}
export {
  BypassPermissionsModeDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnlwYXNzUGVybWlzc2lvbnNNb2RlRGlhbG9nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBCb3gsIExpbmssIE5ld2xpbmUsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duU3luYyB9IGZyb20gJy4uL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQgeyB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSB9IGZyb20gJy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBvbkFjY2VwdCgpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCeXBhc3NQZXJtaXNzaW9uc01vZGVEaWFsb2coe1xuICBvbkFjY2VwdCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfYnlwYXNzX3Blcm1pc3Npb25zX21vZGVfZGlhbG9nX3Nob3duJywge30pXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlOiAnYWNjZXB0JyB8ICdkZWNsaW5lJykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2FjY2VwdCc6IHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2J5cGFzc19wZXJtaXNzaW9uc19tb2RlX2RpYWxvZ19hY2NlcHQnLCB7fSlcblxuICAgICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywge1xuICAgICAgICAgIHNraXBEYW5nZXJvdXNNb2RlUGVybWlzc2lvblByb21wdDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgb25BY2NlcHQoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnZGVjbGluZSc6IHtcbiAgICAgICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVFc2NhcGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIldBUk5JTkc6IENsYXVkZSBDb2RlIHJ1bm5pbmcgaW4gQnlwYXNzIFBlcm1pc3Npb25zIG1vZGVcIlxuICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICBvbkNhbmNlbD17aGFuZGxlRXNjYXBlfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEluIEJ5cGFzcyBQZXJtaXNzaW9ucyBtb2RlLCBDbGF1ZGUgQ29kZSB3aWxsIG5vdCBhc2sgZm9yIHlvdXIgYXBwcm92YWxcbiAgICAgICAgICBiZWZvcmUgcnVubmluZyBwb3RlbnRpYWxseSBkYW5nZXJvdXMgY29tbWFuZHMuXG4gICAgICAgICAgPE5ld2xpbmUgLz5cbiAgICAgICAgICBUaGlzIG1vZGUgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBhIHNhbmRib3hlZCBjb250YWluZXIvVk0gdGhhdCBoYXNcbiAgICAgICAgICByZXN0cmljdGVkIGludGVybmV0IGFjY2VzcyBhbmQgY2FuIGVhc2lseSBiZSByZXN0b3JlZCBpZiBkYW1hZ2VkLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEJ5IHByb2NlZWRpbmcsIHlvdSBhY2NlcHQgYWxsIHJlc3BvbnNpYmlsaXR5IGZvciBhY3Rpb25zIHRha2VuIHdoaWxlXG4gICAgICAgICAgcnVubmluZyBpbiBCeXBhc3MgUGVybWlzc2lvbnMgbW9kZS5cbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxMaW5rIHVybD1cImh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vc2VjdXJpdHlcIiAvPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgbGFiZWw6ICdObywgZXhpdCcsIHZhbHVlOiAnZGVjbGluZScgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnWWVzLCBJIGFjY2VwdCcsIHZhbHVlOiAnYWNjZXB0JyB9LFxuICAgICAgICBdfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2UodmFsdWUgYXMgJ2FjY2VwdCcgfCAnZGVjbGluZScpfVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLFNBQUFBLDRCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQXFDLFFBQUE7SUFBQUM7RUFBQSxJQUFBSDtBQUVwQyxNQUFBSTtBQUFBLE1BQUFILEVBQUEsQ0FBQSxNQUFBSSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR0hGLFNBQUEsQ0FBQTtBQUFFSCxNQUFBLENBQUEsSUFBQUc7RUFBQSxPQUFBO0FBQUFBLFNBQUFILEVBQUEsQ0FBQTtFQUFBO0FBRkxNLGdCQUFLQyxVQUFXQyxPQUViTCxFQUFFO0FBQUMsTUFBQU07QUFBQSxNQUFBVCxFQUFBLENBQUEsTUFBQUUsVUFBQTtBQUVOTyxTQUFBLFNBQUFDLFVBQUFDLE9BQUE7QUFBQUMsVUFDRSxTQUFRRCxPQUFLO1FBQUEsS0FDTixVQUFRO0FBQ1hFLG1CQUFTLCtDQUErQyxDQUFDLENBQUM7QUFFMURDLGtDQUF3QixnQkFBZ0I7WUFBQUMsbUNBQ0g7VUFDckMsQ0FBQztBQUNEYixtQkFBUztBQUNULGdCQUFBVTtRQUFLO1FBQUEsS0FFRixXQUFTO0FBQ1pJLCtCQUFxQixDQUFDO1FBQUM7TUFHM0I7SUFBQztBQUNGaEIsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBUztFQUFBLE9BQUE7QUFBQUEsU0FBQVQsRUFBQSxDQUFBO0VBQUE7QUFoQkQsUUFBQVUsV0FBQUQ7QUFrQkEsUUFBQVEsZUFBcUJDO0FBRWYsTUFBQUM7QUFBQSxNQUFBbkIsRUFBQSxDQUFBLE1BQUFJLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFRRmMsU0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsS0FDL0IsNENBQUMsa0JBQUssb0hBQUEsNENBQUEsYUFHSCxHQUFBLHNJQUFVLEdBSFosNENBQUEsa0JBT0EsMEdBQUssR0FBTCw0Q0FBQSxRQUtBLEtBQUksNENBQUssQ0FBQTtBQUNObkIsTUFBQSxDQUFBLElBQUFtQjtFQUFBLE9BQUE7QUFBQUEsU0FBQW5CLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQW9CO0FBQUEsTUFBQXBCLEVBQUEsQ0FBQSxNQUFBSSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR0tlLFNBQUEsQ0FDUDtNQUFBQyxPQUFTO01BQVVWLE9BQVM7SUFBVSxHQUN0QztNQUFBVSxPQUFTO01BQWVWLE9BQVM7SUFBUyxDQUFDO0FBQzVDWCxNQUFBLENBQUEsSUFBQW9CO0VBQUEsT0FBQTtBQUFBQSxTQUFBcEIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBc0I7QUFBQSxNQUFBdEIsRUFBQSxDQUFBLE1BQUFVLFVBQUE7QUF6QkxZLFNBQUEsNENBQUMsVUFDTyxPQUFBLHNEQUFBLE9BQ0EsU0FBQSxVQUNJTCxnQkFBQUEsSUFBWSw0Q0FFdEIsVUFnQkMsU0FDVSxJQUFBLFVBSUMsYUFBQU0sU0FBU2IsT0FBNkIsR0FBQSxDQUFTO0FBRXBEVixNQUFBLENBQUEsSUFBQVU7QUFBQVYsTUFBQSxDQUFBLElBQUFzQjtFQUFBLE9BQUE7QUFBQUEsU0FBQXRCLEVBQUEsQ0FBQTtFQUFBO0FBQUEsU0E1QlRzQjtBQTRCUztBQTFETixTQUFBSixTQUFBO0FBMEJIRix1QkFBcUIsQ0FBQztBQUFDO0FBMUJwQixTQUFBUixRQUFBO0FBSUhLLFdBQVMsOENBQThDLENBQUMsQ0FBQztBQUFDOyIsCiAgIm5hbWVzIjogWyJCeXBhc3NQZXJtaXNzaW9uc01vZGVEaWFsb2ciLCAidDAiLCAiJCIsICJfYyIsICJvbkFjY2VwdCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgIlJlYWN0IiwgInVzZUVmZmVjdCIsICJfdGVtcCIsICJ0MiIsICJvbkNoYW5nZSIsICJ2YWx1ZSIsICJiYjMiLCAibG9nRXZlbnQiLCAidXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UiLCAic2tpcERhbmdlcm91c01vZGVQZXJtaXNzaW9uUHJvbXB0IiwgImdyYWNlZnVsU2h1dGRvd25TeW5jIiwgImhhbmRsZUVzY2FwZSIsICJfdGVtcDIiLCAidDMiLCAidDQiLCAibGFiZWwiLCAidDUiLCAidmFsdWVfMCJdCn0K
