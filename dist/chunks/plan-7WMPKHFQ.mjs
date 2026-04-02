#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  editFileInEditor,
  getExternalEditor,
  init_editor,
  init_promptEditor
} from "./chunk-EKT22LIB.mjs";
import {
  init_staticRender,
  renderToString
} from "./chunk-ENZ443YE.mjs";
import {
  applyPermissionUpdate,
  getPlan,
  getPlanFilePath,
  init_PermissionUpdate,
  init_ide,
  init_permissionSetup,
  init_plans,
  prepareContextForPlanMode,
  toIDEDisplayName
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
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
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
import {
  handlePlanModeTransition,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/plan/plan.tsx
function PlanDisplay(t0) {
  const $ = c(11);
  const {
    planContent,
    planPath,
    editorName
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Current Plan");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== planPath) {
    t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, planPath);
    $[1] = planPath;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== planContent) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, planContent));
    $[3] = planContent;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== editorName) {
    t4 = editorName && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, '"/plan open"'), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " to edit this plan in "), /* @__PURE__ */ createElement(ThemedText, { bold: true, dimColor: true }, editorName));
    $[5] = editorName;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t2 || $[8] !== t3 || $[9] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t1, t2, t3, t4);
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
async function call(onDone, context, args) {
  const {
    getAppState,
    setAppState
  } = context;
  const appState = getAppState();
  const currentMode = appState.toolPermissionContext.mode;
  if (currentMode !== "plan") {
    handlePlanModeTransition(currentMode, "plan");
    setAppState((prev) => ({
      ...prev,
      toolPermissionContext: applyPermissionUpdate(prepareContextForPlanMode(prev.toolPermissionContext), {
        type: "setMode",
        mode: "plan",
        destination: "session"
      })
    }));
    const description = args.trim();
    if (description && description !== "open") {
      onDone("Enabled plan mode", {
        shouldQuery: true
      });
    } else {
      onDone("Enabled plan mode");
    }
    return null;
  }
  const planContent = getPlan();
  const planPath = getPlanFilePath();
  if (!planContent) {
    onDone("Already in plan mode. No plan written yet.");
    return null;
  }
  const argList = args.trim().split(/\s+/);
  if (argList[0] === "open") {
    const result = await editFileInEditor(planPath);
    if (result.error) {
      onDone(`Failed to open plan in editor: ${result.error}`);
    } else {
      onDone(`Opened plan in editor: ${planPath}`);
    }
    return null;
  }
  const editor = getExternalEditor();
  const editorName = editor ? toIDEDisplayName(editor) : void 0;
  const display = /* @__PURE__ */ createElement(PlanDisplay, { planContent, planPath, editorName });
  const output = await renderToString(display);
  onDone(output);
  return null;
}
var init_plan = __esm({
  "src/commands/plan/plan.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_state();
    init_ink();
    init_editor();
    init_ide();
    init_PermissionUpdate();
    init_permissionSetup();
    init_plans();
    init_promptEditor();
    init_staticRender();
  }
});
init_plan();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3BsYW4vcGxhbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaGFuZGxlUGxhbk1vZGVUcmFuc2l0aW9uIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBnZXRFeHRlcm5hbEVkaXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL2VkaXRvci5qcydcbmltcG9ydCB7IHRvSURFRGlzcGxheU5hbWUgfSBmcm9tICcuLi8uLi91dGlscy9pZGUuanMnXG5pbXBvcnQgeyBhcHBseVBlcm1pc3Npb25VcGRhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uVXBkYXRlLmpzJ1xuaW1wb3J0IHsgcHJlcGFyZUNvbnRleHRGb3JQbGFuTW9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25TZXR1cC5qcydcbmltcG9ydCB7IGdldFBsYW4sIGdldFBsYW5GaWxlUGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3BsYW5zLmpzJ1xuaW1wb3J0IHsgZWRpdEZpbGVJbkVkaXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL3Byb21wdEVkaXRvci5qcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RhdGljUmVuZGVyLmpzJ1xuXG5mdW5jdGlvbiBQbGFuRGlzcGxheSh7XG4gIHBsYW5Db250ZW50LFxuICBwbGFuUGF0aCxcbiAgZWRpdG9yTmFtZSxcbn06IHtcbiAgcGxhbkNvbnRlbnQ6IHN0cmluZ1xuICBwbGFuUGF0aDogc3RyaW5nXG4gIGVkaXRvck5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dCBib2xkPkN1cnJlbnQgUGxhbjwvVGV4dD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPntwbGFuUGF0aH08L1RleHQ+XG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0PntwbGFuQ29udGVudH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIHtlZGl0b3JOYW1lICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiZxdW90Oy9wbGFuIG9wZW4mcXVvdDs8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IHRvIGVkaXQgdGhpcyBwbGFuIGluIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkIGRpbUNvbG9yPlxuICAgICAgICAgICAge2VkaXRvck5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBhcmdzOiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICBjb25zdCB7IGdldEFwcFN0YXRlLCBzZXRBcHBTdGF0ZSB9ID0gY29udGV4dFxuICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcbiAgY29uc3QgY3VycmVudE1vZGUgPSBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQubW9kZVxuXG4gIC8vIElmIG5vdCBpbiBwbGFuIG1vZGUsIGVuYWJsZSBpdFxuICBpZiAoY3VycmVudE1vZGUgIT09ICdwbGFuJykge1xuICAgIGhhbmRsZVBsYW5Nb2RlVHJhbnNpdGlvbihjdXJyZW50TW9kZSwgJ3BsYW4nKVxuICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQ6IGFwcGx5UGVybWlzc2lvblVwZGF0ZShcbiAgICAgICAgcHJlcGFyZUNvbnRleHRGb3JQbGFuTW9kZShwcmV2LnRvb2xQZXJtaXNzaW9uQ29udGV4dCksXG4gICAgICAgIHsgdHlwZTogJ3NldE1vZGUnLCBtb2RlOiAncGxhbicsIGRlc3RpbmF0aW9uOiAnc2Vzc2lvbicgfSxcbiAgICAgICksXG4gICAgfSkpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhcmdzLnRyaW0oKVxuICAgIGlmIChkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbiAhPT0gJ29wZW4nKSB7XG4gICAgICBvbkRvbmUoJ0VuYWJsZWQgcGxhbiBtb2RlJywgeyBzaG91bGRRdWVyeTogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkRvbmUoJ0VuYWJsZWQgcGxhbiBtb2RlJylcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIEFscmVhZHkgaW4gcGxhbiBtb2RlIC0gc2hvdyB0aGUgY3VycmVudCBwbGFuXG4gIGNvbnN0IHBsYW5Db250ZW50ID0gZ2V0UGxhbigpXG4gIGNvbnN0IHBsYW5QYXRoID0gZ2V0UGxhbkZpbGVQYXRoKClcblxuICBpZiAoIXBsYW5Db250ZW50KSB7XG4gICAgb25Eb25lKCdBbHJlYWR5IGluIHBsYW4gbW9kZS4gTm8gcGxhbiB3cml0dGVuIHlldC4nKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBJZiB1c2VyIHR5cGVkIFwiL3BsYW4gb3BlblwiLCBvcGVuIGluIGVkaXRvclxuICBjb25zdCBhcmdMaXN0ID0gYXJncy50cmltKCkuc3BsaXQoL1xccysvKVxuICBpZiAoYXJnTGlzdFswXSA9PT0gJ29wZW4nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZWRpdEZpbGVJbkVkaXRvcihwbGFuUGF0aClcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBvbkRvbmUoYEZhaWxlZCB0byBvcGVuIHBsYW4gaW4gZWRpdG9yOiAke3Jlc3VsdC5lcnJvcn1gKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkRvbmUoYE9wZW5lZCBwbGFuIGluIGVkaXRvcjogJHtwbGFuUGF0aH1gKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZWRpdG9yID0gZ2V0RXh0ZXJuYWxFZGl0b3IoKVxuICBjb25zdCBlZGl0b3JOYW1lID0gZWRpdG9yID8gdG9JREVEaXNwbGF5TmFtZShlZGl0b3IpIDogdW5kZWZpbmVkXG5cbiAgY29uc3QgZGlzcGxheSA9IChcbiAgICA8UGxhbkRpc3BsYXlcbiAgICAgIHBsYW5Db250ZW50PXtwbGFuQ29udGVudH1cbiAgICAgIHBsYW5QYXRoPXtwbGFuUGF0aH1cbiAgICAgIGVkaXRvck5hbWU9e2VkaXRvck5hbWV9XG4gICAgLz5cbiAgKVxuXG4gIC8vIFJlbmRlciB0byBzdHJpbmcgYW5kIHBhc3MgdG8gb25Eb25lIGxpa2UgbG9jYWwgY29tbWFuZHMgZG9cbiAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgcmVuZGVyVG9TdHJpbmcoZGlzcGxheSlcbiAgb25Eb25lKG91dHB1dClcbiAgcmV0dXJuIG51bGxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFBQSxZQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQXFC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QU87QUFDaEJ4QixhQUFPLGtDQUFrQ3NCLE9BQU9FLEtBQUssRUFBRTtJQUN6RCxPQUFPO0FBQ0x4QixhQUFPLDBCQUEwQlYsUUFBUSxFQUFFO0lBQzdDO0FBQ0EsV0FBTztFQUNUO0FBRUEsUUFBTW1DLFNBQVNDLGtCQUFrQjtBQUNqQyxRQUFNbkMsYUFBYWtDLFNBQVNFLGlCQUFpQkYsTUFBTSxJQUFJRztBQUV2RCxRQUFNQyxVQUNKLDhCQUFDLGVBQ0MsYUFDQSxVQUNBLFlBQXVCO0FBSzNCLFFBQU1DLFNBQVMsTUFBTUMsZUFBZUYsT0FBTztBQUMzQzdCLFNBQU84QixNQUFNO0FBQ2IsU0FBTztBQUNUOzs7O0FBMUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7IiwKICAibmFtZXMiOiBbIlBsYW5EaXNwbGF5IiwgInQwIiwgIiQiLCAiX2MiLCAicGxhbkNvbnRlbnQiLCAicGxhblBhdGgiLCAiZWRpdG9yTmFtZSIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgInQyIiwgInQzIiwgInQ0IiwgInQ1IiwgImNhbGwiLCAib25Eb25lIiwgImNvbnRleHQiLCAiYXJncyIsICJnZXRBcHBTdGF0ZSIsICJzZXRBcHBTdGF0ZSIsICJhcHBTdGF0ZSIsICJjdXJyZW50TW9kZSIsICJ0b29sUGVybWlzc2lvbkNvbnRleHQiLCAibW9kZSIsICJoYW5kbGVQbGFuTW9kZVRyYW5zaXRpb24iLCAicHJldiIsICJhcHBseVBlcm1pc3Npb25VcGRhdGUiLCAicHJlcGFyZUNvbnRleHRGb3JQbGFuTW9kZSIsICJ0eXBlIiwgImRlc3RpbmF0aW9uIiwgImRlc2NyaXB0aW9uIiwgInRyaW0iLCAic2hvdWxkUXVlcnkiLCAiZ2V0UGxhbiIsICJnZXRQbGFuRmlsZVBhdGgiLCAiYXJnTGlzdCIsICJzcGxpdCIsICJyZXN1bHQiLCAiZWRpdEZpbGVJbkVkaXRvciIsICJlcnJvciIsICJlZGl0b3IiLCAiZ2V0RXh0ZXJuYWxFZGl0b3IiLCAidG9JREVEaXNwbGF5TmFtZSIsICJ1bmRlZmluZWQiLCAiZGlzcGxheSIsICJvdXRwdXQiLCAicmVuZGVyVG9TdHJpbmciXQp9Cg==
