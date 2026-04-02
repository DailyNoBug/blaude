#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemePicker,
  init_ThemePicker
} from "./chunk-6ZLEFECT.mjs";
import "./chunk-5INIV6TQ.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  Pane,
  init_Pane
} from "./chunk-36ZVP56J.mjs";
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
import "./chunk-X6KULBXG.mjs";
import "./chunk-7RY6L7JT.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-XTFZIHQR.mjs";
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
  init_ink,
  init_react_compiler_runtime,
  useTheme
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-JQ55XPLZ.mjs";
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
import "./chunk-M5NTYAY2.mjs";
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
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/theme/theme.tsx
function ThemePickerCommand(t0) {
  const $ = c(8);
  const {
    onDone
  } = t0;
  const [, setTheme] = useTheme();
  let t1;
  if ($[0] !== onDone || $[1] !== setTheme) {
    t1 = (setting) => {
      setTheme(setting);
      onDone(`Theme set to ${setting}`);
    };
    $[0] = onDone;
    $[1] = setTheme;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== onDone) {
    t2 = () => {
      onDone("Theme picker dismissed", {
        display: "system"
      });
    };
    $[3] = onDone;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t1 || $[6] !== t2) {
    t3 = /* @__PURE__ */ createElement(Pane, { color: "permission" }, /* @__PURE__ */ createElement(ThemePicker, { onThemeSelect: t1, onCancel: t2, skipExitHandling: true }));
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
}
var call;
var init_theme = __esm({
  "src/commands/theme/theme.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_Pane();
    init_ThemePicker();
    init_ink();
    call = async (onDone, _context) => {
      return /* @__PURE__ */ createElement(ThemePickerCommand, { onDone });
    };
  }
});
init_theme();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3RoZW1lL3RoZW1lLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL1BhbmUuanMnXG5pbXBvcnQgeyBUaGVtZVBpY2tlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGhlbWVQaWNrZXIuanMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIFRoZW1lUGlja2VyQ29tbWFuZCh7IG9uRG9uZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFssIHNldFRoZW1lXSA9IHVzZVRoZW1lKClcblxuICByZXR1cm4gKFxuICAgIDxQYW5lIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgPFRoZW1lUGlja2VyXG4gICAgICAgIG9uVGhlbWVTZWxlY3Q9e3NldHRpbmcgPT4ge1xuICAgICAgICAgIHNldFRoZW1lKHNldHRpbmcpXG4gICAgICAgICAgb25Eb25lKGBUaGVtZSBzZXQgdG8gJHtzZXR0aW5nfWApXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgb25Eb25lKCdUaGVtZSBwaWNrZXIgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgICAgICB9fVxuICAgICAgICBza2lwRXhpdEhhbmRsaW5nPXt0cnVlfVxuICAgICAgLz5cbiAgICA8L1BhbmU+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGw6IExvY2FsSlNYQ29tbWFuZENhbGwgPSBhc3luYyAob25Eb25lLCBfY29udGV4dCkgPT4ge1xuICByZXR1cm4gPFRoZW1lUGlja2VyQ29tbWFuZCBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBQUEsbUJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFBNEIsUUFBQTtJQUFBQztFQUFBLElBQUFIO0FBQzFCLFFBQUEsQ0FBQSxFQUFBSSxRQUFBLElBQXFCQyxTQUFTO0FBQUMsTUFBQUM7QUFBQSxNQUFBTCxFQUFBLENBQUEsTUFBQUUsVUFBQUYsRUFBQSxDQUFBLE1BQUFHLFVBQUE7QUFLVkUsU0FBQUMsYUFBQTtBQUNiSCxlQUFTRyxPQUFPO0FBQ2hCSixhQUFPLGdCQUFnQkksT0FBTyxFQUFFO0lBQUM7QUFDbENOLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFLO0VBQUEsT0FBQTtBQUFBQSxTQUFBTCxFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFPO0FBQUEsTUFBQVAsRUFBQSxDQUFBLE1BQUFFLFFBQUE7QUFDU0ssU0FBQUEsTUFBQTtBQUNSTCxhQUFPLDBCQUEwQjtRQUFBTSxTQUFXO01BQVMsQ0FBQztJQUFDO0FBQ3hEUixNQUFBLENBQUEsSUFBQUU7QUFBQUYsTUFBQSxDQUFBLElBQUFPO0VBQUEsT0FBQTtBQUFBQSxTQUFBUCxFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFTO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFLLE1BQUFMLEVBQUEsQ0FBQSxNQUFBTyxJQUFBO0FBUkxFLFNBQUEsOEJBQUMsUUFBVyxPQUFBLGdCQUNWLDhCQUFDLGVBQ2dCLGVBQUFKLElBSUwsVUFBQUUsSUFHUSxrQkFBQSxNQUFJLENBRTFCO0FBQU9QLE1BQUEsQ0FBQSxJQUFBSztBQUFBTCxNQUFBLENBQUEsSUFBQU87QUFBQVAsTUFBQSxDQUFBLElBQUFTO0VBQUEsT0FBQTtBQUFBQSxTQUFBVCxFQUFBLENBQUE7RUFBQTtBQUFBLFNBWFBTO0FBV087SUFJRUM7Ozs7QUFqQ2I7QUFFQTtBQUNBO0FBQ0E7QUE2Qk8sSUFBTUEsT0FBNEIsT0FBT1IsUUFBUVMsYUFBYTtBQUNuRSxhQUFPLDhCQUFDLHNCQUFtQixRQUFlO0lBQzVDOzs7IiwKICAibmFtZXMiOiBbIlRoZW1lUGlja2VyQ29tbWFuZCIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJzZXRUaGVtZSIsICJ1c2VUaGVtZSIsICJ0MSIsICJzZXR0aW5nIiwgInQyIiwgImRpc3BsYXkiLCAidDMiLCAiY2FsbCIsICJfY29udGV4dCJdCn0K
