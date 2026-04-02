#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  gracefulShutdownSync,
  init_CustomSelect,
  init_gracefulShutdown
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-2ONWBUQT.mjs";
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

// src/components/DevChannelsDialog.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_gracefulShutdown();
init_CustomSelect();
init_Dialog();
function DevChannelsDialog(t0) {
  const $ = c(14);
  const {
    channels,
    onAccept
  } = t0;
  let t1;
  if ($[0] !== onAccept) {
    t1 = function onChange2(value) {
      bb2: switch (value) {
        case "accept": {
          onAccept();
          break bb2;
        }
        case "exit": {
          gracefulShutdownSync(1);
        }
      }
    };
    $[0] = onAccept;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onChange = t1;
  const handleEscape = _temp;
  let t2;
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "--dangerously-load-development-channels is for local channel development only. Do not use this option to run channels you have downloaded off the internet.");
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Please use --channels to run a list of approved channels.");
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  let t4;
  if ($[4] !== channels) {
    t4 = channels.map(_temp2).join(", ");
    $[4] = channels;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t2, t3, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Channels:", " ", t4));
    $[6] = t4;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = [{
      label: "I am using this for local development",
      value: "accept"
    }, {
      label: "Exit",
      value: "exit"
    }];
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== onChange) {
    t7 = /* @__PURE__ */ react_default.createElement(Select, { options: t6, onChange: (value_0) => onChange(value_0) });
    $[9] = onChange;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t5 || $[12] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "WARNING: Loading development channels", color: "error", onCancel: handleEscape }, t5, t7);
    $[11] = t5;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  return t8;
}
function _temp2(c2) {
  return c2.kind === "plugin" ? `plugin:${c2.name}@${c2.marketplace}` : `server:${c2.name}`;
}
function _temp() {
  gracefulShutdownSync(0);
}
export {
  DevChannelsDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRGV2Q2hhbm5lbHNEaWFsb2cudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ2hhbm5lbEVudHJ5IH0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ3JhY2VmdWxTaHV0ZG93blN5bmMgfSBmcm9tICcuLi91dGlscy9ncmFjZWZ1bFNodXRkb3duLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGFubmVsczogQ2hhbm5lbEVudHJ5W11cbiAgb25BY2NlcHQoKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGV2Q2hhbm5lbHNEaWFsb2coe1xuICBjaGFubmVscyxcbiAgb25BY2NlcHQsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlOiAnYWNjZXB0JyB8ICdleGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2FjY2VwdCc6XG4gICAgICAgIG9uQWNjZXB0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2V4aXQnOlxuICAgICAgICBncmFjZWZ1bFNodXRkb3duU3luYygxKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUVzY2FwZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBncmFjZWZ1bFNodXRkb3duU3luYygwKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiV0FSTklORzogTG9hZGluZyBkZXZlbG9wbWVudCBjaGFubmVsc1wiXG4gICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVFc2NhcGV9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgLS1kYW5nZXJvdXNseS1sb2FkLWRldmVsb3BtZW50LWNoYW5uZWxzIGlzIGZvciBsb2NhbCBjaGFubmVsXG4gICAgICAgICAgZGV2ZWxvcG1lbnQgb25seS4gRG8gbm90IHVzZSB0aGlzIG9wdGlvbiB0byBydW4gY2hhbm5lbHMgeW91IGhhdmVcbiAgICAgICAgICBkb3dubG9hZGVkIG9mZiB0aGUgaW50ZXJuZXQuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+UGxlYXNlIHVzZSAtLWNoYW5uZWxzIHRvIHJ1biBhIGxpc3Qgb2YgYXBwcm92ZWQgY2hhbm5lbHMuPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBDaGFubmVsczp7JyAnfVxuICAgICAgICAgIHtjaGFubmVsc1xuICAgICAgICAgICAgLm1hcChjID0+XG4gICAgICAgICAgICAgIGMua2luZCA9PT0gJ3BsdWdpbidcbiAgICAgICAgICAgICAgICA/IGBwbHVnaW46JHtjLm5hbWV9QCR7Yy5tYXJrZXRwbGFjZX1gXG4gICAgICAgICAgICAgICAgOiBgc2VydmVyOiR7Yy5uYW1lfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignLCAnKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgbGFiZWw6ICdJIGFtIHVzaW5nIHRoaXMgZm9yIGxvY2FsIGRldmVsb3BtZW50JywgdmFsdWU6ICdhY2NlcHQnIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ0V4aXQnLCB2YWx1ZTogJ2V4aXQnIH0sXG4gICAgICAgIF19XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBvbkNoYW5nZSh2YWx1ZSBhcyAnYWNjZXB0JyB8ICdleGl0Jyl9XG4gICAgICAvPlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT08sU0FBQUEsa0JBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBMkIsUUFBQTtJQUFBQztJQUFBQztFQUFBLElBQUFKO0FBRzFCLE1BQUFLO0FBQUEsTUFBQUosRUFBQSxDQUFBLE1BQUFHLFVBQUE7QUFDTkMsU0FBQSxTQUFBQyxVQUFBQyxPQUFBO0FBQUFDLFVBQ0UsU0FBUUQsT0FBSztRQUFBLEtBQ04sVUFBUTtBQUNYSCxtQkFBUztBQUNULGdCQUFBSTtRQUFLO1FBQUEsS0FDRixRQUFNO0FBQ1RDLCtCQUFxQixDQUFDO1FBQUM7TUFFM0I7SUFBQztBQUNGUixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFJO0VBQUEsT0FBQTtBQUFBQSxTQUFBSixFQUFBLENBQUE7RUFBQTtBQVRELFFBQUFLLFdBQUFEO0FBV0EsUUFBQUssZUFBcUJDO0FBRWYsTUFBQUM7QUFBQSxNQUFBQztBQUFBLE1BQUFaLEVBQUEsQ0FBQSxNQUFBYSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBU0FILFNBQUEsNENBQUMsa0JBQUssNkpBSU47QUFDQUMsU0FBQSw0Q0FBQyxrQkFBSywyREFBeUQ7QUFBT1osTUFBQSxDQUFBLElBQUFXO0FBQUFYLE1BQUEsQ0FBQSxJQUFBWTtFQUFBLE9BQUE7QUFBQUQsU0FBQVgsRUFBQSxDQUFBO0FBQUFZLFNBQUFaLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQWU7QUFBQSxNQUFBZixFQUFBLENBQUEsTUFBQUUsVUFBQTtBQUduRWEsU0FBQWIsU0FBUWMsSUFDRkMsTUFJTCxFQUFDQyxLQUNLLElBQUk7QUFBQ2xCLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQWU7RUFBQSxPQUFBO0FBQUFBLFNBQUFmLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQW1CO0FBQUEsTUFBQW5CLEVBQUEsQ0FBQSxNQUFBZSxJQUFBO0FBZmpCSSxTQUFBLDRDQUFDLHFCQUFrQixlQUFBLFVBQWMsS0FBQSxLQUMvQlIsSUFLQUMsSUFDQSw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxhQUNILEtBQ1RHLEVBT0gsQ0FDRjtBQUFNZixNQUFBLENBQUEsSUFBQWU7QUFBQWYsTUFBQSxDQUFBLElBQUFtQjtFQUFBLE9BQUE7QUFBQUEsU0FBQW5CLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQW9CO0FBQUEsTUFBQXBCLEVBQUEsQ0FBQSxNQUFBYSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR0tNLFNBQUEsQ0FDUDtNQUFBQyxPQUFTO01BQXVDZixPQUFTO0lBQVMsR0FDbEU7TUFBQWUsT0FBUztNQUFNZixPQUFTO0lBQU8sQ0FBQztBQUNqQ04sTUFBQSxDQUFBLElBQUFvQjtFQUFBLE9BQUE7QUFBQUEsU0FBQXBCLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQXNCO0FBQUEsTUFBQXRCLEVBQUEsQ0FBQSxNQUFBSyxVQUFBO0FBSkhpQixTQUFBLDRDQUFDLFVBQ1UsU0FBQUYsSUFJQyxVQUFBRyxhQUFTbEIsU0FBU0MsT0FBMEIsR0FBQztBQUN2RE4sTUFBQSxDQUFBLElBQUFLO0FBQUFMLE1BQUEsRUFBQSxJQUFBc0I7RUFBQSxPQUFBO0FBQUFBLFNBQUF0QixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUF3QjtBQUFBLE1BQUF4QixFQUFBLEVBQUEsTUFBQW1CLE1BQUFuQixFQUFBLEVBQUEsTUFBQXNCLElBQUE7QUE5QkpFLFNBQUEsNENBQUMsVUFDTyxPQUFBLHlDQUNBLE9BQUEsU0FDSWYsVUFBQUEsZ0JBRVZVLElBbUJBRyxFQU9GO0FBQVN0QixNQUFBLEVBQUEsSUFBQW1CO0FBQUFuQixNQUFBLEVBQUEsSUFBQXNCO0FBQUF0QixNQUFBLEVBQUEsSUFBQXdCO0VBQUEsT0FBQTtBQUFBQSxTQUFBeEIsRUFBQSxFQUFBO0VBQUE7QUFBQSxTQS9CVHdCO0FBK0JTO0FBbkROLFNBQUFQLE9BQUFRLElBQUE7QUFBQSxTQW9DT0EsR0FBQ0MsU0FBVSxXQUFYLFVBQ2NELEdBQUNFLElBQUssSUFBSUYsR0FBQ0csV0FBWSxLQURyQyxVQUVjSCxHQUFDRSxJQUFLO0FBQUU7QUF0QzdCLFNBQUFqQixRQUFBO0FBZ0JIRix1QkFBcUIsQ0FBQztBQUFDOyIsCiAgIm5hbWVzIjogWyJEZXZDaGFubmVsc0RpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgImNoYW5uZWxzIiwgIm9uQWNjZXB0IiwgInQxIiwgIm9uQ2hhbmdlIiwgInZhbHVlIiwgImJiMiIsICJncmFjZWZ1bFNodXRkb3duU3luYyIsICJoYW5kbGVFc2NhcGUiLCAiX3RlbXAiLCAidDIiLCAidDMiLCAiU3ltYm9sIiwgImZvciIsICJ0NCIsICJtYXAiLCAiX3RlbXAyIiwgImpvaW4iLCAidDUiLCAidDYiLCAibGFiZWwiLCAidDciLCAidmFsdWVfMCIsICJ0OCIsICJjIiwgImtpbmQiLCAibmFtZSIsICJtYXJrZXRwbGFjZSJdCn0K
