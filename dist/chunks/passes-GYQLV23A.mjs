#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  fetchReferralRedemptions,
  formatCreditAmount,
  getCachedOrFetchPassesEligibility,
  getCachedRemainingPasses,
  init_referral
} from "./chunk-P2O4HXJJ.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-ADZQUMT7.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  useKeybinding
} from "./chunk-2LTMY2QU.mjs";
import "./chunk-WZXBZQWR.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  init_ink,
  init_osc,
  setClipboard,
  use_input_default
} from "./chunk-IVRGECFY.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useCallback,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  TEARDROP_ASTERISK,
  getGlobalConfig,
  init_config2 as init_config,
  init_figures,
  saveGlobalConfig
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
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
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
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
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/Passes/Passes.tsx
function Passes({
  onDone
}) {
  const [loading, setLoading] = useState(true);
  const [passStatuses, setPassStatuses] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [referralLink, setReferralLink] = useState(null);
  const [referrerReward, setReferrerReward] = useState(void 0);
  const exitState = useExitOnCtrlCDWithKeybindings(() => onDone("Guest passes dialog dismissed", {
    display: "system"
  }));
  const handleCancel = useCallback(() => {
    onDone("Guest passes dialog dismissed", {
      display: "system"
    });
  }, [onDone]);
  useKeybinding("confirm:no", handleCancel, {
    context: "Confirmation"
  });
  use_input_default((_input, key) => {
    if (key.return && referralLink) {
      void setClipboard(referralLink).then((raw) => {
        if (raw) process.stdout.write(raw);
        logEvent("tengu_guest_passes_link_copied", {});
        onDone(`Referral link copied to clipboard!`);
      });
    }
  });
  useEffect(() => {
    async function loadPassesData() {
      try {
        const eligibilityData = await getCachedOrFetchPassesEligibility();
        if (!eligibilityData || !eligibilityData.eligible) {
          setIsAvailable(false);
          setLoading(false);
          return;
        }
        setIsAvailable(true);
        if (eligibilityData.referral_code_details?.referral_link) {
          setReferralLink(eligibilityData.referral_code_details.referral_link);
        }
        setReferrerReward(eligibilityData.referrer_reward);
        const campaign = eligibilityData.referral_code_details?.campaign ?? "claude_code_guest_pass";
        let redemptionsData;
        try {
          redemptionsData = await fetchReferralRedemptions(campaign);
        } catch (err_0) {
          logError(err_0);
          setIsAvailable(false);
          setLoading(false);
          return;
        }
        const redemptions = redemptionsData.redemptions || [];
        const maxRedemptions = redemptionsData.limit || 3;
        const statuses = [];
        for (let i = 0; i < maxRedemptions; i++) {
          const redemption = redemptions[i];
          statuses.push({
            passNumber: i + 1,
            isAvailable: !redemption
          });
        }
        setPassStatuses(statuses);
        setLoading(false);
      } catch (err) {
        logError(err);
        setIsAvailable(false);
        setLoading(false);
      }
    }
    void loadPassesData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ createElement(Pane, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Loading guest pass information\u2026"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Fragment, null, "Esc to cancel"))));
  }
  if (!isAvailable) {
    return /* @__PURE__ */ createElement(Pane, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Guest passes are not currently available."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Fragment, null, "Esc to cancel"))));
  }
  const availableCount = count(passStatuses, (p) => p.isAvailable);
  const sortedPasses = [...passStatuses].sort((a, b) => +b.isAvailable - +a.isAvailable);
  const renderTicket = (pass) => {
    const isRedeemed = !pass.isAvailable;
    if (isRedeemed) {
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: pass.passNumber, flexDirection: "column", marginRight: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, ` ) CC ${TEARDROP_ASTERISK} \u250A\u2571`), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571"));
    }
    return /* @__PURE__ */ createElement(ThemedBox_default, { key: pass.passNumber, flexDirection: "column", marginRight: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), /* @__PURE__ */ createElement(ThemedText, null, " ) CC ", /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, TEARDROP_ASTERISK), " \u250A ( "), /* @__PURE__ */ createElement(ThemedText, null, "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"));
  };
  return /* @__PURE__ */ createElement(Pane, null, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "permission" }, "Guest passes \xB7 ", availableCount, " left"), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", marginLeft: 2 }, sortedPasses.slice(0, 3).map((pass_0) => renderTicket(pass_0))), referralLink && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, null, referralLink)), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, referrerReward ? `Share a free week of Claude Code with friends. If they love it and subscribe, you'll get ${formatCreditAmount(referrerReward)} of extra usage to keep building. ` : "Share a free week of Claude Code with friends. ", /* @__PURE__ */ createElement(Link, { url: referrerReward ? "https://support.claude.com/en/articles/13456702-claude-code-guest-passes" : "https://support.claude.com/en/articles/12875061-claude-code-guest-passes" }, "Terms apply."))), /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(Fragment, null, "Enter to copy link \xB7 Esc to cancel")))));
}
var init_Passes = __esm({
  "src/components/Passes/Passes.tsx"() {
    init_react();
    init_react();
    init_figures();
    init_useExitOnCtrlCDWithKeybindings();
    init_osc();
    init_ink();
    init_useKeybinding();
    init_analytics();
    init_referral();
    init_array();
    init_log();
    init_Pane();
  }
});

// src/commands/passes/passes.tsx
async function call(onDone) {
  const config = getGlobalConfig();
  const isFirstVisit = !config.hasVisitedPasses;
  if (isFirstVisit) {
    const remaining = getCachedRemainingPasses();
    saveGlobalConfig((current) => ({
      ...current,
      hasVisitedPasses: true,
      passesLastSeenRemaining: remaining ?? current.passesLastSeenRemaining
    }));
  }
  logEvent("tengu_guest_passes_visited", {
    is_first_visit: isFirstVisit
  });
  return /* @__PURE__ */ createElement(Passes, { onDone });
}
var init_passes = __esm({
  "src/commands/passes/passes.tsx"() {
    init_react();
    init_Passes();
    init_analytics();
    init_referral();
    init_config();
  }
});
init_passes();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFzc2VzL1Bhc3Nlcy50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3Bhc3Nlcy9wYXNzZXMudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBURUFSRFJPUF9BU1RFUklTSyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgc2V0Q2xpcGJvYXJkIH0gZnJvbSAnLi4vLi4vaW5rL3Rlcm1pby9vc2MuanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3ByZWZlci11c2Uta2V5YmluZGluZ3MgLS0gZW50ZXIgdG8gY29weSBsaW5rXG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQsIHVzZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIGZldGNoUmVmZXJyYWxSZWRlbXB0aW9ucyxcbiAgZm9ybWF0Q3JlZGl0QW1vdW50LFxuICBnZXRDYWNoZWRPckZldGNoUGFzc2VzRWxpZ2liaWxpdHksXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9yZWZlcnJhbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgUmVmZXJyYWxSZWRlbXB0aW9uc1Jlc3BvbnNlLFxuICBSZWZlcnJlclJld2FyZEluZm8sXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL29hdXRoL3R5cGVzLmpzJ1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vUGFuZS5qcydcblxudHlwZSBQYXNzU3RhdHVzID0ge1xuICBwYXNzTnVtYmVyOiBudW1iZXJcbiAgaXNBdmFpbGFibGU6IGJvb2xlYW5cbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhc3Nlcyh7IG9uRG9uZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtwYXNzU3RhdHVzZXMsIHNldFBhc3NTdGF0dXNlc10gPSB1c2VTdGF0ZTxQYXNzU3RhdHVzW10+KFtdKVxuICBjb25zdCBbaXNBdmFpbGFibGUsIHNldElzQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcmVmZXJyYWxMaW5rLCBzZXRSZWZlcnJhbExpbmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3JlZmVycmVyUmV3YXJkLCBzZXRSZWZlcnJlclJld2FyZF0gPSB1c2VTdGF0ZTxcbiAgICBSZWZlcnJlclJld2FyZEluZm8gfCBudWxsIHwgdW5kZWZpbmVkXG4gID4odW5kZWZpbmVkKVxuXG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygoKSA9PlxuICAgIG9uRG9uZSgnR3Vlc3QgcGFzc2VzIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pLFxuICApXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uRG9uZSgnR3Vlc3QgcGFzc2VzIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gIH0sIFtvbkRvbmVdKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBoYW5kbGVDYW5jZWwsIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICB1c2VJbnB1dCgoX2lucHV0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5LnJldHVybiAmJiByZWZlcnJhbExpbmspIHtcbiAgICAgIHZvaWQgc2V0Q2xpcGJvYXJkKHJlZmVycmFsTGluaykudGhlbihyYXcgPT4ge1xuICAgICAgICBpZiAocmF3KSBwcm9jZXNzLnN0ZG91dC53cml0ZShyYXcpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9ndWVzdF9wYXNzZXNfbGlua19jb3BpZWQnLCB7fSlcbiAgICAgICAgb25Eb25lKGBSZWZlcnJhbCBsaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhYClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFBhc3Nlc0RhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBlbGlnaWJpbGl0eSBmaXJzdCAodXNlcyBjYWNoZSBpZiBhdmFpbGFibGUpXG4gICAgICAgIGNvbnN0IGVsaWdpYmlsaXR5RGF0YSA9IGF3YWl0IGdldENhY2hlZE9yRmV0Y2hQYXNzZXNFbGlnaWJpbGl0eSgpXG5cbiAgICAgICAgaWYgKCFlbGlnaWJpbGl0eURhdGEgfHwgIWVsaWdpYmlsaXR5RGF0YS5lbGlnaWJsZSkge1xuICAgICAgICAgIHNldElzQXZhaWxhYmxlKGZhbHNlKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRJc0F2YWlsYWJsZSh0cnVlKVxuXG4gICAgICAgIC8vIFN0b3JlIHRoZSByZWZlcnJhbCBsaW5rIGlmIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZWxpZ2liaWxpdHlEYXRhLnJlZmVycmFsX2NvZGVfZGV0YWlscz8ucmVmZXJyYWxfbGluaykge1xuICAgICAgICAgIHNldFJlZmVycmFsTGluayhlbGlnaWJpbGl0eURhdGEucmVmZXJyYWxfY29kZV9kZXRhaWxzLnJlZmVycmFsX2xpbmspXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSByZWZlcnJlciByZXdhcmQgaW5mbyBmb3IgdjEgY2FtcGFpZ24gbWVzc2FnaW5nXG4gICAgICAgIHNldFJlZmVycmVyUmV3YXJkKGVsaWdpYmlsaXR5RGF0YS5yZWZlcnJlcl9yZXdhcmQpXG5cbiAgICAgICAgLy8gVXNlIHRoZSBjYW1wYWlnbiByZXR1cm5lZCBmcm9tIGVsaWdpYmlsaXR5IGZvciByZWRlbXB0aW9uc1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9XG4gICAgICAgICAgZWxpZ2liaWxpdHlEYXRhLnJlZmVycmFsX2NvZGVfZGV0YWlscz8uY2FtcGFpZ24gPz9cbiAgICAgICAgICAnY2xhdWRlX2NvZGVfZ3Vlc3RfcGFzcydcblxuICAgICAgICAvLyBGZXRjaCByZWRlbXB0aW9ucyBkYXRhXG4gICAgICAgIGxldCByZWRlbXB0aW9uc0RhdGE6IFJlZmVycmFsUmVkZW1wdGlvbnNSZXNwb25zZVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlZGVtcHRpb25zRGF0YSA9IGF3YWl0IGZldGNoUmVmZXJyYWxSZWRlbXB0aW9ucyhjYW1wYWlnbilcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nRXJyb3IoZXJyIGFzIEVycm9yKVxuICAgICAgICAgIHNldElzQXZhaWxhYmxlKGZhbHNlKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWlsZCBwYXNzIHN0YXR1c2VzIGFycmF5XG4gICAgICAgIGNvbnN0IHJlZGVtcHRpb25zID0gcmVkZW1wdGlvbnNEYXRhLnJlZGVtcHRpb25zIHx8IFtdXG4gICAgICAgIGNvbnN0IG1heFJlZGVtcHRpb25zID0gcmVkZW1wdGlvbnNEYXRhLmxpbWl0IHx8IDNcbiAgICAgICAgY29uc3Qgc3RhdHVzZXM6IFBhc3NTdGF0dXNbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhSZWRlbXB0aW9uczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmVkZW1wdGlvbiA9IHJlZGVtcHRpb25zW2ldXG4gICAgICAgICAgc3RhdHVzZXMucHVzaCh7XG4gICAgICAgICAgICBwYXNzTnVtYmVyOiBpICsgMSxcbiAgICAgICAgICAgIGlzQXZhaWxhYmxlOiAhcmVkZW1wdGlvbixcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UGFzc1N0YXR1c2VzKHN0YXR1c2VzKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEZvciBhbnkgZXJyb3IsIGp1c3Qgc2hvdyBwYXNzZXMgYXMgbm90IGF2YWlsYWJsZVxuICAgICAgICBsb2dFcnJvcihlcnIgYXMgRXJyb3IpXG4gICAgICAgIHNldElzQXZhaWxhYmxlKGZhbHNlKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgbG9hZFBhc3Nlc0RhdGEoKVxuICB9LCBbXSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Mb2FkaW5nIGd1ZXN0IHBhc3MgaW5mb3JtYXRpb27igKY8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAge2V4aXRTdGF0ZS5wZW5kaW5nID8gKFxuICAgICAgICAgICAgICA8PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5Fc2MgdG8gY2FuY2VsPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG5cbiAgaWYgKCFpc0F2YWlsYWJsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICA8VGV4dD5HdWVzdCBwYXNzZXMgYXJlIG5vdCBjdXJyZW50bHkgYXZhaWxhYmxlLjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PkVzYyB0byBjYW5jZWw8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICBjb25zdCBhdmFpbGFibGVDb3VudCA9IGNvdW50KHBhc3NTdGF0dXNlcywgcCA9PiBwLmlzQXZhaWxhYmxlKVxuXG4gIC8vIFNvcnQgcGFzc2VzOiBhdmFpbGFibGUgZmlyc3QsIHRoZW4gcmVkZWVtZWRcbiAgY29uc3Qgc29ydGVkUGFzc2VzID0gWy4uLnBhc3NTdGF0dXNlc10uc29ydChcbiAgICAoYSwgYikgPT4gK2IuaXNBdmFpbGFibGUgLSArYS5pc0F2YWlsYWJsZSxcbiAgKVxuXG4gIC8vIEFTQ0lJIGFydCBmb3IgdGlja2V0c1xuICBjb25zdCByZW5kZXJUaWNrZXQgPSAocGFzczogUGFzc1N0YXR1cykgPT4ge1xuICAgIGNvbnN0IGlzUmVkZWVtZWQgPSAhcGFzcy5pc0F2YWlsYWJsZVxuXG4gICAgaWYgKGlzUmVkZWVtZWQpIHtcbiAgICAgIC8vIEdyYXllZCBvdXQgcmVkZWVtZWQgdGlja2V0IHdpdGggc2xhc2hlc1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBrZXk9e3Bhc3MucGFzc051bWJlcn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblJpZ2h0PXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57J+KUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKVsSd9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntgICkgQ0MgJHtURUFSRFJPUF9BU1RFUklTS30g4pSK4pWxYH08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+eyfilJTilIDilIDilIDilIDilIDilIDilIDilbEnfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3gga2V5PXtwYXNzLnBhc3NOdW1iZXJ9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5SaWdodD17MX0+XG4gICAgICAgIDxUZXh0Pnsn4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQJ308L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICkgQ0MgJ31cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPntURUFSRFJPUF9BU1RFUklTS308L1RleHQ+XG4gICAgICAgICAgeycg4pSKICggJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD57J+KUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCd9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZT5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwicGVybWlzc2lvblwiPkd1ZXN0IHBhc3NlcyDCtyB7YXZhaWxhYmxlQ291bnR9IGxlZnQ8L1RleHQ+XG5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgICAge3NvcnRlZFBhc3Nlcy5zbGljZSgwLCAzKS5tYXAocGFzcyA9PiByZW5kZXJUaWNrZXQocGFzcykpfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7cmVmZXJyYWxMaW5rICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgICAgPFRleHQ+e3JlZmVycmFsTGlua308L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7cmVmZXJyZXJSZXdhcmRcbiAgICAgICAgICAgICAgPyBgU2hhcmUgYSBmcmVlIHdlZWsgb2YgQ2xhdWRlIENvZGUgd2l0aCBmcmllbmRzLiBJZiB0aGV5IGxvdmUgaXQgYW5kIHN1YnNjcmliZSwgeW91J2xsIGdldCAke2Zvcm1hdENyZWRpdEFtb3VudChyZWZlcnJlclJld2FyZCl9IG9mIGV4dHJhIHVzYWdlIHRvIGtlZXAgYnVpbGRpbmcuIGBcbiAgICAgICAgICAgICAgOiAnU2hhcmUgYSBmcmVlIHdlZWsgb2YgQ2xhdWRlIENvZGUgd2l0aCBmcmllbmRzLiAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdXJsPXtcbiAgICAgICAgICAgICAgICByZWZlcnJlclJld2FyZFxuICAgICAgICAgICAgICAgICAgPyAnaHR0cHM6Ly9zdXBwb3J0LmNsYXVkZS5jb20vZW4vYXJ0aWNsZXMvMTM0NTY3MDItY2xhdWRlLWNvZGUtZ3Vlc3QtcGFzc2VzJ1xuICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly9zdXBwb3J0LmNsYXVkZS5jb20vZW4vYXJ0aWNsZXMvMTI4NzUwNjEtY2xhdWRlLWNvZGUtZ3Vlc3QtcGFzc2VzJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRlcm1zIGFwcGx5LlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PkVudGVyIHRvIGNvcHkgbGluayDCtyBFc2MgdG8gY2FuY2VsPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L1BhbmU+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhc3NlcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFzc2VzL1Bhc3Nlcy5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0Q2FjaGVkUmVtYWluaW5nUGFzc2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL3JlZmVycmFsLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICAvLyBNYXJrIHRoYXQgdXNlciBoYXMgdmlzaXRlZCAvcGFzc2VzIHNvIHdlIHN0b3Agc2hvd2luZyB0aGUgdXBzZWxsXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGNvbnN0IGlzRmlyc3RWaXNpdCA9ICFjb25maWcuaGFzVmlzaXRlZFBhc3Nlc1xuICBpZiAoaXNGaXJzdFZpc2l0KSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gZ2V0Q2FjaGVkUmVtYWluaW5nUGFzc2VzKClcbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBoYXNWaXNpdGVkUGFzc2VzOiB0cnVlLFxuICAgICAgcGFzc2VzTGFzdFNlZW5SZW1haW5pbmc6IHJlbWFpbmluZyA/PyBjdXJyZW50LnBhc3Nlc0xhc3RTZWVuUmVtYWluaW5nLFxuICAgIH0pKVxuICB9XG4gIGxvZ0V2ZW50KCd0ZW5ndV9ndWVzdF9wYXNzZXNfdmlzaXRlZCcsIHsgaXNfZmlyc3RfdmlzaXQ6IGlzRmlyc3RWaXNpdCB9KVxuICByZXR1cm4gPFBhc3NlcyBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUFNLFlBQVksS0FDbENHLGFBQWFRLE1BQU0sR0FBRyxDQUFDLEVBQUVDLElBQUlKLFlBQVFELGFBQWFDLE1BQUksQ0FBQyxDQUMxRCxHQUVDdEQsZ0JBQ0MsOEJBQUMscUJBQUksWUFBWSxLQUNmLDhCQUFDLGtCQUFNQSxZQUFhLENBQ3RCLEdBR0YsOEJBQUMscUJBQUksZUFBYyxVQUFTLFlBQVksS0FDdEMsOEJBQUMsY0FBSyxVQUFRLFFBQ1hFLGlCQUNHLDRGQUE0RnlELG1CQUFtQnpELGNBQWMsQ0FBQyx1Q0FDOUgsbURBQ0osOEJBQUMsUUFDQyxLQUNFQSxpQkFDSSw2RUFDQSw4RUFDTCxjQUdILENBQ0YsQ0FDRixHQUVBLDhCQUFDLHlCQUNDLDhCQUFDLGNBQUssVUFBUSxNQUFDLFFBQU0sUUFDbEJHLFVBQVV1QyxVQUNULDhDQUFFLFVBQU92QyxVQUFVd0MsU0FBUSxnQkFBYyxJQUV6Qyw4Q0FBRSx1Q0FBa0MsQ0FFeEMsQ0FDRixDQUNGLENBQ0Y7QUFFSjtBQWpQQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7QUNkQSxlQUFzQmUsS0FDcEJDLFFBQzBCO0FBRTFCLFFBQU1DLFNBQVNDLGdCQUFnQjtBQUMvQixRQUFNQyxlQUFlLENBQUNGLE9BQU9HO0FBQzdCLE1BQUlELGNBQWM7QUFDaEIsVUFBTUUsWUFBWUMseUJBQXlCO0FBQzNDQyxxQkFBaUJDLGNBQVk7TUFDM0IsR0FBR0E7TUFDSEosa0JBQWtCO01BQ2xCSyx5QkFBeUJKLGFBQWFHLFFBQVFDO0lBQ2hELEVBQUU7RUFDSjtBQUNBQyxXQUFTLDhCQUE4QjtJQUFFQyxnQkFBZ0JSO0VBQWEsQ0FBQztBQUN2RSxTQUFPLDhCQUFDLFVBQU8sUUFBZTtBQUNoQztBQXZCQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7OzsiLAogICJuYW1lcyI6IFsiUGFzc2VzIiwgIm9uRG9uZSIsICJsb2FkaW5nIiwgInNldExvYWRpbmciLCAidXNlU3RhdGUiLCAicGFzc1N0YXR1c2VzIiwgInNldFBhc3NTdGF0dXNlcyIsICJpc0F2YWlsYWJsZSIsICJzZXRJc0F2YWlsYWJsZSIsICJyZWZlcnJhbExpbmsiLCAic2V0UmVmZXJyYWxMaW5rIiwgInJlZmVycmVyUmV3YXJkIiwgInNldFJlZmVycmVyUmV3YXJkIiwgInVuZGVmaW5lZCIsICJleGl0U3RhdGUiLCAidXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIiwgImRpc3BsYXkiLCAiaGFuZGxlQ2FuY2VsIiwgInVzZUNhbGxiYWNrIiwgInVzZUtleWJpbmRpbmciLCAiY29udGV4dCIsICJ1c2VJbnB1dCIsICJfaW5wdXQiLCAia2V5IiwgInJldHVybiIsICJzZXRDbGlwYm9hcmQiLCAidGhlbiIsICJyYXciLCAicHJvY2VzcyIsICJzdGRvdXQiLCAid3JpdGUiLCAibG9nRXZlbnQiLCAidXNlRWZmZWN0IiwgImxvYWRQYXNzZXNEYXRhIiwgImVsaWdpYmlsaXR5RGF0YSIsICJnZXRDYWNoZWRPckZldGNoUGFzc2VzRWxpZ2liaWxpdHkiLCAiZWxpZ2libGUiLCAicmVmZXJyYWxfY29kZV9kZXRhaWxzIiwgInJlZmVycmFsX2xpbmsiLCAicmVmZXJyZXJfcmV3YXJkIiwgImNhbXBhaWduIiwgInJlZGVtcHRpb25zRGF0YSIsICJmZXRjaFJlZmVycmFsUmVkZW1wdGlvbnMiLCAiZXJyIiwgImxvZ0Vycm9yIiwgInJlZGVtcHRpb25zIiwgIm1heFJlZGVtcHRpb25zIiwgImxpbWl0IiwgInN0YXR1c2VzIiwgImkiLCAicmVkZW1wdGlvbiIsICJwdXNoIiwgInBhc3NOdW1iZXIiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgImF2YWlsYWJsZUNvdW50IiwgImNvdW50IiwgInAiLCAic29ydGVkUGFzc2VzIiwgInNvcnQiLCAiYSIsICJiIiwgInJlbmRlclRpY2tldCIsICJwYXNzIiwgImlzUmVkZWVtZWQiLCAiVEVBUkRST1BfQVNURVJJU0siLCAic2xpY2UiLCAibWFwIiwgImZvcm1hdENyZWRpdEFtb3VudCIsICJjYWxsIiwgIm9uRG9uZSIsICJjb25maWciLCAiZ2V0R2xvYmFsQ29uZmlnIiwgImlzRmlyc3RWaXNpdCIsICJoYXNWaXNpdGVkUGFzc2VzIiwgInJlbWFpbmluZyIsICJnZXRDYWNoZWRSZW1haW5pbmdQYXNzZXMiLCAic2F2ZUdsb2JhbENvbmZpZyIsICJjdXJyZW50IiwgInBhc3Nlc0xhc3RTZWVuUmVtYWluaW5nIiwgImxvZ0V2ZW50IiwgImlzX2ZpcnN0X3Zpc2l0Il0KfQo=
