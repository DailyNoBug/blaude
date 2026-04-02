#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  removePathFromRepo,
  validateRepoAtPath
} from "./chunk-SGHJSBBZ.mjs";
import {
  Select,
  Spinner,
  init_CustomSelect,
  init_Spinner
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
  react_default,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getDisplayPath,
  init_file
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

// src/components/TeleportRepoMismatchDialog.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_file();
init_CustomSelect();
init_Dialog();
init_Spinner();
function TeleportRepoMismatchDialog(t0) {
  const $ = c(18);
  const {
    targetRepo,
    initialPaths,
    onSelectPath,
    onCancel
  } = t0;
  const [availablePaths, setAvailablePaths] = useState(initialPaths);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validating, setValidating] = useState(false);
  let t1;
  if ($[0] !== availablePaths || $[1] !== onCancel || $[2] !== onSelectPath || $[3] !== targetRepo) {
    t1 = async (value) => {
      if (value === "cancel") {
        onCancel();
        return;
      }
      setValidating(true);
      setErrorMessage(null);
      const isValid = await validateRepoAtPath(value, targetRepo);
      if (isValid) {
        onSelectPath(value);
        return;
      }
      removePathFromRepo(targetRepo, value);
      const updatedPaths = availablePaths.filter((p) => p !== value);
      setAvailablePaths(updatedPaths);
      setValidating(false);
      setErrorMessage(`${getDisplayPath(value)} no longer contains the correct repository. Select another path.`);
    };
    $[0] = availablePaths;
    $[1] = onCancel;
    $[2] = onSelectPath;
    $[3] = targetRepo;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const handleChange = t1;
  let t2;
  if ($[5] !== availablePaths) {
    let t32;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = {
        label: "Cancel",
        value: "cancel"
      };
      $[7] = t32;
    } else {
      t32 = $[7];
    }
    t2 = [...availablePaths.map(_temp), t32];
    $[5] = availablePaths;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const options = t2;
  let t3;
  if ($[8] !== availablePaths.length || $[9] !== errorMessage || $[10] !== handleChange || $[11] !== options || $[12] !== targetRepo || $[13] !== validating) {
    t3 = availablePaths.length > 0 ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, errorMessage && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, errorMessage), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Open Blaude in ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, targetRepo), ":")), validating ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Validating repository\u2026")) : /* @__PURE__ */ react_default.createElement(Select, { options, onChange: (value_0) => void handleChange(value_0) })) : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, errorMessage && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, errorMessage), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Run blaude --teleport from a checkout of ", targetRepo));
    $[8] = availablePaths.length;
    $[9] = errorMessage;
    $[10] = handleChange;
    $[11] = options;
    $[12] = targetRepo;
    $[13] = validating;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  let t4;
  if ($[15] !== onCancel || $[16] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Teleport to Repo", onCancel, color: "background" }, t3);
    $[15] = onCancel;
    $[16] = t3;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  return t4;
}
function _temp(path) {
  return {
    label: /* @__PURE__ */ react_default.createElement(ThemedText, null, "Use ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, getDisplayPath(path))),
    value: path
  };
}
export {
  TeleportRepoMismatchDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVGVsZXBvcnRSZXBvTWlzbWF0Y2hEaWFsb2cudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBnZXREaXNwbGF5UGF0aCB9IGZyb20gJy4uL3V0aWxzL2ZpbGUuanMnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoRnJvbVJlcG8sXG4gIHZhbGlkYXRlUmVwb0F0UGF0aCxcbn0gZnJvbSAnLi4vdXRpbHMvZ2l0aHViUmVwb1BhdGhNYXBwaW5nLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lci5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFyZ2V0UmVwbzogc3RyaW5nXG4gIGluaXRpYWxQYXRoczogc3RyaW5nW11cbiAgb25TZWxlY3RQYXRoOiAocGF0aDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZWxlcG9ydFJlcG9NaXNtYXRjaERpYWxvZyh7XG4gIHRhcmdldFJlcG8sXG4gIGluaXRpYWxQYXRocyxcbiAgb25TZWxlY3RQYXRoLFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW2F2YWlsYWJsZVBhdGhzLCBzZXRBdmFpbGFibGVQYXRoc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oaW5pdGlhbFBhdGhzKVxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3ZhbGlkYXRpbmcsIHNldFZhbGlkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgb25DYW5jZWwoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0VmFsaWRhdGluZyh0cnVlKVxuICAgICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpXG5cbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2YWxpZGF0ZVJlcG9BdFBhdGgodmFsdWUsIHRhcmdldFJlcG8pXG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIG9uU2VsZWN0UGF0aCh2YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFBhdGggaXMgaW52YWxpZCAtIHJlbW92ZSBpdCBmcm9tIGNvbmZpZyBhbmQgdXBkYXRlIHN0YXRlXG4gICAgICByZW1vdmVQYXRoRnJvbVJlcG8odGFyZ2V0UmVwbywgdmFsdWUpXG4gICAgICBjb25zdCB1cGRhdGVkUGF0aHMgPSBhdmFpbGFibGVQYXRocy5maWx0ZXIocCA9PiBwICE9PSB2YWx1ZSlcbiAgICAgIHNldEF2YWlsYWJsZVBhdGhzKHVwZGF0ZWRQYXRocylcbiAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpXG5cbiAgICAgIHNldEVycm9yTWVzc2FnZShcbiAgICAgICAgYCR7Z2V0RGlzcGxheVBhdGgodmFsdWUpfSBubyBsb25nZXIgY29udGFpbnMgdGhlIGNvcnJlY3QgcmVwb3NpdG9yeS4gU2VsZWN0IGFub3RoZXIgcGF0aC5gLFxuICAgICAgKVxuICAgIH0sXG4gICAgW3RhcmdldFJlcG8sIGF2YWlsYWJsZVBhdGhzLCBvblNlbGVjdFBhdGgsIG9uQ2FuY2VsXSxcbiAgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgLi4uYXZhaWxhYmxlUGF0aHMubWFwKHBhdGggPT4gKHtcbiAgICAgIGxhYmVsOiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIFVzZSA8VGV4dCBib2xkPntnZXREaXNwbGF5UGF0aChwYXRoKX08L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICksXG4gICAgICB2YWx1ZTogcGF0aCxcbiAgICB9KSksXG4gICAgeyBsYWJlbDogJ0NhbmNlbCcsIHZhbHVlOiAnY2FuY2VsJyB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIHRpdGxlPVwiVGVsZXBvcnQgdG8gUmVwb1wiIG9uQ2FuY2VsPXtvbkNhbmNlbH0gY29sb3I9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICB7YXZhaWxhYmxlUGF0aHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8VGV4dCBjb2xvcj1cImVycm9yXCI+e2Vycm9yTWVzc2FnZX08L1RleHQ+fVxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIE9wZW4gQ2xhdWRlIENvZGUgaW4gPFRleHQgYm9sZD57dGFyZ2V0UmVwb308L1RleHQ+OlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAge3ZhbGlkYXRpbmcgPyAoXG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICA8VGV4dD4gVmFsaWRhdGluZyByZXBvc2l0b3J54oCmPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHZvaWQgaGFuZGxlQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPFRleHQgY29sb3I9XCJlcnJvclwiPntlcnJvck1lc3NhZ2V9PC9UZXh0Pn1cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFJ1biBjbGF1ZGUgLS10ZWxlcG9ydCBmcm9tIGEgY2hlY2tvdXQgb2Yge3RhcmdldFJlcG99XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBU08sU0FBQUEsMkJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBb0MsUUFBQTtJQUFBQztJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFOO0FBTXpDLFFBQUEsQ0FBQU8sZ0JBQUFDLGlCQUFBLElBQTRDQyxTQUFtQkwsWUFBWTtBQUMzRSxRQUFBLENBQUFNLGNBQUFDLGVBQUEsSUFBd0NGLFNBQXdCLElBQUk7QUFDcEUsUUFBQSxDQUFBRyxZQUFBQyxhQUFBLElBQW9DSixTQUFTLEtBQUs7QUFBQyxNQUFBSztBQUFBLE1BQUFiLEVBQUEsQ0FBQSxNQUFBTSxrQkFBQU4sRUFBQSxDQUFBLE1BQUFLLFlBQUFMLEVBQUEsQ0FBQSxNQUFBSSxnQkFBQUosRUFBQSxDQUFBLE1BQUFFLFlBQUE7QUFHakRXLFNB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QSxnQkFDeERtQixFQTZCSDtBQUFTeEIsTUFBQSxFQUFBLElBQUFLO0FBQUFMLE1BQUEsRUFBQSxJQUFBd0I7QUFBQXhCLE1BQUEsRUFBQSxJQUFBaUM7RUFBQSxPQUFBO0FBQUFBLFNBQUFqQyxFQUFBLEVBQUE7RUFBQTtBQUFBLFNBOUJUaUM7QUE4QlM7QUFuRk4sU0FBQUosTUFBQUssTUFBQTtBQUFBLFNBeUM0QjtJQUFBUCxPQUUzQiw0Q0FBQyxrQkFBSyxRQUNBLDRDQUFDLGNBQUssTUFBQSxRQUFNTixlQUFlYSxJQUFJLENBQUUsQ0FDdkM7SUFBT3BCLE9BRUZvQjtFQUNUO0FBQUM7IiwKICAibmFtZXMiOiBbIlRlbGVwb3J0UmVwb01pc21hdGNoRGlhbG9nIiwgInQwIiwgIiQiLCAiX2MiLCAidGFyZ2V0UmVwbyIsICJpbml0aWFsUGF0aHMiLCAib25TZWxlY3RQYXRoIiwgIm9uQ2FuY2VsIiwgImF2YWlsYWJsZVBhdGhzIiwgInNldEF2YWlsYWJsZVBhdGhzIiwgInVzZVN0YXRlIiwgImVycm9yTWVzc2FnZSIsICJzZXRFcnJvck1lc3NhZ2UiLCAidmFsaWRhdGluZyIsICJzZXRWYWxpZGF0aW5nIiwgInQxIiwgInZhbHVlIiwgImlzVmFsaWQiLCAidmFsaWRhdGVSZXBvQXRQYXRoIiwgInJlbW92ZVBhdGhGcm9tUmVwbyIsICJ1cGRhdGVkUGF0aHMiLCAiZmlsdGVyIiwgInAiLCAiZ2V0RGlzcGxheVBhdGgiLCAiaGFuZGxlQ2hhbmdlIiwgInQyIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAibGFiZWwiLCAibWFwIiwgIl90ZW1wIiwgIm9wdGlvbnMiLCAibGVuZ3RoIiwgInZhbHVlXzAiLCAidDQiLCAicGF0aCJdCn0K
