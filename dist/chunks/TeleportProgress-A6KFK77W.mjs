#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AppStateProvider,
  checkOutTeleportedSessionBranch,
  init_AppState,
  init_teleport,
  processMessagesForTeleportResume,
  teleportResumeCodeSession
} from "./chunk-5INIV6TQ.mjs";
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
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  useAnimationFrame
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  useState
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
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
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

// src/components/TeleportProgress.tsx
init_react_compiler_runtime();
init_figures();
init_react();
init_react();
init_ink();
init_AppState();
init_teleport();
var SPINNER_FRAMES = ["\u25D0", "\u25D3", "\u25D1", "\u25D2"];
var STEPS = [{
  key: "validating",
  label: "Validating session"
}, {
  key: "fetching_logs",
  label: "Fetching session logs"
}, {
  key: "fetching_branch",
  label: "Getting branch info"
}, {
  key: "checking_out",
  label: "Checking out branch"
}];
function TeleportProgress(t0) {
  const $ = c(16);
  const {
    currentStep,
    sessionId
  } = t0;
  const [ref, time] = useAnimationFrame(100);
  const frame = Math.floor(time / 100) % SPINNER_FRAMES.length;
  let t1;
  if ($[0] !== currentStep) {
    t1 = (s) => s.key === currentStep;
    $[0] = currentStep;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentStepIndex = STEPS.findIndex(t1);
  const t2 = SPINNER_FRAMES[frame];
  let t3;
  if ($[2] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "claude" }, t2, " Teleporting session\u2026"));
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== sessionId) {
    t4 = sessionId && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, sessionId));
    $[4] = sessionId;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== currentStepIndex || $[7] !== frame) {
    t5 = STEPS.map((step, index) => {
      const isComplete = index < currentStepIndex;
      const isCurrent = index === currentStepIndex;
      const isPending = index > currentStepIndex;
      let icon;
      let color;
      if (isComplete) {
        icon = figures_default.tick;
        color = "green";
      } else {
        if (isCurrent) {
          icon = SPINNER_FRAMES[frame];
          color = "claude";
        } else {
          icon = figures_default.circle;
          color = void 0;
        }
      }
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: step.key, flexDirection: "row" }, /* @__PURE__ */ createElement(ThemedBox_default, { width: 2 }, /* @__PURE__ */ createElement(ThemedText, { color, dimColor: isPending }, icon)), /* @__PURE__ */ createElement(ThemedText, { dimColor: isPending, bold: isCurrent }, step.label));
    });
    $[6] = currentStepIndex;
    $[7] = frame;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t5) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginLeft: 2 }, t5);
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== ref || $[12] !== t3 || $[13] !== t4 || $[14] !== t6) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { ref, flexDirection: "column", paddingX: 1, paddingY: 1 }, t3, t4, t6);
    $[11] = ref;
    $[12] = t3;
    $[13] = t4;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
async function teleportWithProgress(root, sessionId) {
  let setStep = () => {
  };
  function TeleportProgressWrapper() {
    const [step, _setStep] = useState("validating");
    setStep = _setStep;
    return /* @__PURE__ */ createElement(TeleportProgress, { currentStep: step, sessionId });
  }
  root.render(/* @__PURE__ */ createElement(AppStateProvider, null, /* @__PURE__ */ createElement(TeleportProgressWrapper, null)));
  const result = await teleportResumeCodeSession(sessionId, setStep);
  setStep("checking_out");
  const {
    branchName,
    branchError
  } = await checkOutTeleportedSessionBranch(result.branch);
  return {
    messages: processMessagesForTeleportResume(result.log, branchError),
    branchName
  };
}
export {
  TeleportProgress,
  teleportWithProgress
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVGVsZXBvcnRQcm9ncmVzcy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFJvb3QgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZUFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgQXBwU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tPdXRUZWxlcG9ydGVkU2Vzc2lvbkJyYW5jaCxcbiAgcHJvY2Vzc01lc3NhZ2VzRm9yVGVsZXBvcnRSZXN1bWUsXG4gIHR5cGUgVGVsZXBvcnRQcm9ncmVzc1N0ZXAsXG4gIHR5cGUgVGVsZXBvcnRSZXN1bHQsXG4gIHRlbGVwb3J0UmVzdW1lQ29kZVNlc3Npb24sXG59IGZyb20gJy4uL3V0aWxzL3RlbGVwb3J0LmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjdXJyZW50U3RlcDogVGVsZXBvcnRQcm9ncmVzc1N0ZXBcbiAgc2Vzc2lvbklkPzogc3RyaW5nXG59XG5cbmNvbnN0IFNQSU5ORVJfRlJBTUVTID0gWyfil5AnLCAn4peTJywgJ+KXkScsICfil5InXVxuXG5jb25zdCBTVEVQUzogeyBrZXk6IFRlbGVwb3J0UHJvZ3Jlc3NTdGVwOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgeyBrZXk6ICd2YWxpZGF0aW5nJywgbGFiZWw6ICdWYWxpZGF0aW5nIHNlc3Npb24nIH0sXG4gIHsga2V5OiAnZmV0Y2hpbmdfbG9ncycsIGxhYmVsOiAnRmV0Y2hpbmcgc2Vzc2lvbiBsb2dzJyB9LFxuICB7IGtleTogJ2ZldGNoaW5nX2JyYW5jaCcsIGxhYmVsOiAnR2V0dGluZyBicmFuY2ggaW5mbycgfSxcbiAgeyBrZXk6ICdjaGVja2luZ19vdXQnLCBsYWJlbDogJ0NoZWNraW5nIG91dCBicmFuY2gnIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBUZWxlcG9ydFByb2dyZXNzKHtcbiAgY3VycmVudFN0ZXAsXG4gIHNlc3Npb25JZCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3JlZiwgdGltZV0gPSB1c2VBbmltYXRpb25GcmFtZSgxMDApXG4gIGNvbnN0IGZyYW1lID0gTWF0aC5mbG9vcih0aW1lIC8gMTAwKSAlIFNQSU5ORVJfRlJBTUVTLmxlbmd0aFxuXG4gIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSBTVEVQUy5maW5kSW5kZXgocyA9PiBzLmtleSA9PT0gY3VycmVudFN0ZXApXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJlZj17cmVmfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1g9ezF9IHBhZGRpbmdZPXsxfT5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cImNsYXVkZVwiPlxuICAgICAgICAgIHtTUElOTkVSX0ZSQU1FU1tmcmFtZV19IFRlbGVwb3J0aW5nIHNlc3Npb27igKZcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtzZXNzaW9uSWQgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+e3Nlc3Npb25JZH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgIHtTVEVQUy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNDb21wbGV0ZSA9IGluZGV4IDwgY3VycmVudFN0ZXBJbmRleFxuICAgICAgICAgIGNvbnN0IGlzQ3VycmVudCA9IGluZGV4ID09PSBjdXJyZW50U3RlcEluZGV4XG4gICAgICAgICAgY29uc3QgaXNQZW5kaW5nID0gaW5kZXggPiBjdXJyZW50U3RlcEluZGV4XG5cbiAgICAgICAgICBsZXQgaWNvbjogc3RyaW5nXG4gICAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBpY29uID0gZmlndXJlcy50aWNrXG4gICAgICAgICAgICBjb2xvciA9ICdncmVlbidcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ3VycmVudCkge1xuICAgICAgICAgICAgaWNvbiA9IFNQSU5ORVJfRlJBTUVTW2ZyYW1lXSFcbiAgICAgICAgICAgIGNvbG9yID0gJ2NsYXVkZSdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbiA9IGZpZ3VyZXMuY2lyY2xlXG4gICAgICAgICAgICBjb2xvciA9IHVuZGVmaW5lZFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94IGtleT17c3RlcC5rZXl9IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPEJveCB3aWR0aD17Mn0+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9e2NvbG9yIGFzIG5ldmVyfSBkaW1Db2xvcj17aXNQZW5kaW5nfT5cbiAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXtpc1BlbmRpbmd9IGJvbGQ9e2lzQ3VycmVudH0+XG4gICAgICAgICAgICAgICAge3N0ZXAubGFiZWx9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vKipcbiAqIFRlbGVwb3J0cyB0byBhIHJlbW90ZSBzZXNzaW9uIHdpdGggcHJvZ3Jlc3MgVUkgcmVuZGVyZWQgaW50byB0aGUgZXhpc3Rpbmcgcm9vdC5cbiAqIEZldGNoZXMgdGhlIHNlc3Npb24sIGNoZWNrcyBvdXQgdGhlIGJyYW5jaCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlbGVwb3J0V2l0aFByb2dyZXNzKFxuICByb290OiBSb290LFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8VGVsZXBvcnRSZXN1bHQ+IHtcbiAgLy8gQ2FwdHVyZSB0aGUgc2V0U3RhdGUgZnVuY3Rpb24gZnJvbSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gIGxldCBzZXRTdGVwOiAoc3RlcDogVGVsZXBvcnRQcm9ncmVzc1N0ZXApID0+IHZvaWQgPSAoKSA9PiB7fVxuXG4gIGZ1bmN0aW9uIFRlbGVwb3J0UHJvZ3Jlc3NXcmFwcGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3QgW3N0ZXAsIF9zZXRTdGVwXSA9IHVzZVN0YXRlPFRlbGVwb3J0UHJvZ3Jlc3NTdGVwPigndmFsaWRhdGluZycpXG4gICAgc2V0U3RlcCA9IF9zZXRTdGVwXG4gICAgcmV0dXJuIDxUZWxlcG9ydFByb2dyZXNzIGN1cnJlbnRTdGVwPXtzdGVwfSBzZXNzaW9uSWQ9e3Nlc3Npb25JZH0gLz5cbiAgfVxuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxBcHBTdGF0ZVByb3ZpZGVyPlxuICAgICAgPFRlbGVwb3J0UHJvZ3Jlc3NXcmFwcGVyIC8+XG4gICAgPC9BcHBTdGF0ZVByb3ZpZGVyPixcbiAgKVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRlbGVwb3J0UmVzdW1lQ29kZVNlc3Npb24oc2Vzc2lvbklkLCBzZXRTdGVwKVxuICBzZXRTdGVwKCdjaGVja2luZ19vdXQnKVxuICBjb25zdCB7IGJyYW5jaE5hbWUsIGJyYW5jaEVycm9yIH0gPSBhd2FpdCBjaGVja091dFRlbGVwb3J0ZWRTZXNzaW9uQnJhbmNoKFxuICAgIHJlc3VsdC5icmFuY2gsXG4gIClcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogcHJvY2Vzc01lc3NhZ2VzRm9yVGVsZXBvcnRSZXN1bWUocmVzdWx0LmxvZywgYnJhbmNoRXJyb3IpLFxuICAgIGJyYW5jaE5hbWUsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFhQSxJQUFNQSxpQkFBaUIsQ0FBQyxVQUFLLFVBQUssVUFBSyxRQUFHO0FBRTFDLElBQU1DLFFBQXdELENBQzVEO0VBQUVDLEtBQUs7RUFBY0MsT0FBTztBQUFxQixHQUNqRDtFQUFFRCxLQUFLO0VBQWlCQyxPQUFPO0FBQXdCLEdBQ3ZEO0VBQUVELEtBQUs7RUFBbUJDLE9BQU87QUFBc0IsR0FDdkQ7RUFBRUQsS0FBSztFQUFnQkMsT0FBTztBQUFzQixDQUFDO0FBR2hELFNBQUFDLGlCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQTBCLFFBQUE7SUFBQUM7SUFBQUM7RUFBQSxJQUFBSjtBQUkvQixRQUFBLENBQUFLLEtBQUFDLElBQUEsSUFBb0JDLGtCQUFrQixHQUFHO0FBQ3pDLFFBQUFDLFFBQWNDLEtBQUlDLE1BQU9KLE9BQU8sR0FBRyxJQUFJWCxlQUFjZ0I7QUFBTyxNQUFBQztBQUFBLE1BQUFYLEVBQUEsQ0FBQSxNQUFBRSxhQUFBO0FBRW5CUyxTQUFBQyxPQUFLQSxFQUFDaEIsUUFBU007QUFBV0YsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBVztFQUFBLE9BQUE7QUFBQUEsU0FBQVgsRUFBQSxDQUFBO0VBQUE7QUFBbkUs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Q0FBQ2hCLE1BQU1pQixRQUFRLElBQUlDLFNBQStCLFlBQVk7QUFDcEVILGNBQVVFO0FBQ1YsV0FBTyw4QkFBQyxvQkFBaUIsYUFBYWpCLE1BQU0sV0FBcUI7RUFDbkU7QUFFQWMsT0FBS0ssT0FDSCw4QkFBQyx3QkFDQyw4QkFBQyw2QkFBdUIsQ0FDMUIsQ0FDRjtBQUVBLFFBQU1DLFNBQVMsTUFBTUMsMEJBQTBCdEMsV0FBV2dDLE9BQU87QUFDakVBLFVBQVEsY0FBYztBQUN0QixRQUFNO0lBQUVPO0lBQVlDO0VBQVksSUFBSSxNQUFNQyxnQ0FDeENKLE9BQU9LLE1BQ1Q7QUFDQSxTQUFPO0lBQ0xDLFVBQVVDLGlDQUFpQ1AsT0FBT1EsS0FBS0wsV0FBVztJQUNsRUQ7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJTUElOTkVSX0ZSQU1FUyIsICJTVEVQUyIsICJrZXkiLCAibGFiZWwiLCAiVGVsZXBvcnRQcm9ncmVzcyIsICJ0MCIsICIkIiwgIl9jIiwgImN1cnJlbnRTdGVwIiwgInNlc3Npb25JZCIsICJyZWYiLCAidGltZSIsICJ1c2VBbmltYXRpb25GcmFtZSIsICJmcmFtZSIsICJNYXRoIiwgImZsb29yIiwgImxlbmd0aCIsICJ0MSIsICJzIiwgImN1cnJlbnRTdGVwSW5kZXgiLCAiZmluZEluZGV4IiwgInQyIiwgInQzIiwgInQ0IiwgInQ1IiwgIm1hcCIsICJzdGVwIiwgImluZGV4IiwgImlzQ29tcGxldGUiLCAiaXNDdXJyZW50IiwgImlzUGVuZGluZyIsICJpY29uIiwgImNvbG9yIiwgImZpZ3VyZXMiLCAidGljayIsICJjaXJjbGUiLCAidW5kZWZpbmVkIiwgInQ2IiwgInQ3IiwgInRlbGVwb3J0V2l0aFByb2dyZXNzIiwgInJvb3QiLCAic2V0U3RlcCIsICJUZWxlcG9ydFByb2dyZXNzV3JhcHBlciIsICJfc2V0U3RlcCIsICJ1c2VTdGF0ZSIsICJyZW5kZXIiLCAicmVzdWx0IiwgInRlbGVwb3J0UmVzdW1lQ29kZVNlc3Npb24iLCAiYnJhbmNoTmFtZSIsICJicmFuY2hFcnJvciIsICJjaGVja091dFRlbGVwb3J0ZWRTZXNzaW9uQnJhbmNoIiwgImJyYW5jaCIsICJtZXNzYWdlcyIsICJwcm9jZXNzTWVzc2FnZXNGb3JUZWxlcG9ydFJlc3VtZSIsICJsb2ciXQp9Cg==
