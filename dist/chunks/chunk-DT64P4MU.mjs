#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  formatGrantAmount,
  getCachedOverageCreditGrant,
  init_overageCreditGrant,
  refreshOverageCreditGrantCache
} from "./chunk-YKWW6Z5G.mjs";
import {
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  getGlobalConfig,
  init_config,
  saveGlobalConfig
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_format,
  truncate
} from "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/LogoV2/OverageCreditUpsell.tsx
function isEligibleForOverageCreditGrant() {
  const info = getCachedOverageCreditGrant();
  if (!info || !info.available || info.granted) return false;
  return formatGrantAmount(info) !== null;
}
function shouldShowOverageCreditUpsell() {
  if (!isEligibleForOverageCreditGrant()) return false;
  const config = getGlobalConfig();
  if (config.hasVisitedExtraUsage) return false;
  if ((config.overageCreditUpsellSeenCount ?? 0) >= MAX_IMPRESSIONS) return false;
  return true;
}
function maybeRefreshOverageCreditCache() {
  if (getCachedOverageCreditGrant() !== null) return;
  void refreshOverageCreditGrantCache();
}
function useShowOverageCreditUpsell() {
  const [show] = useState(_temp);
  return show;
}
function _temp() {
  maybeRefreshOverageCreditCache();
  return shouldShowOverageCreditUpsell();
}
function incrementOverageCreditUpsellSeenCount() {
  let newCount = 0;
  saveGlobalConfig((prev) => {
    newCount = (prev.overageCreditUpsellSeenCount ?? 0) + 1;
    return {
      ...prev,
      overageCreditUpsellSeenCount: newCount
    };
  });
  logEvent("tengu_overage_credit_upsell_shown", {
    seen_count: newCount
  });
}
function getUsageText(amount) {
  return `${amount} in extra usage for third-party apps \xB7 /extra-usage`;
}
function getFeedTitle(amount) {
  return `${amount} in extra usage`;
}
function OverageCreditUpsell(t0) {
  const $ = c(8);
  const {
    maxWidth,
    twoLine
  } = t0;
  let t1;
  let t2;
  if ($[0] !== maxWidth || $[1] !== twoLine) {
    t2 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb0: {
      const info = getCachedOverageCreditGrant();
      if (!info) {
        t2 = null;
        break bb0;
      }
      const amount = formatGrantAmount(info);
      if (!amount) {
        t2 = null;
        break bb0;
      }
      if (twoLine) {
        const title = getFeedTitle(amount);
        let t3;
        if ($[4] !== maxWidth) {
          t3 = maxWidth ? truncate(FEED_SUBTITLE, maxWidth) : FEED_SUBTITLE;
          $[4] = maxWidth;
          $[5] = t3;
        } else {
          t3 = $[5];
        }
        let t4;
        if ($[6] !== t3) {
          t4 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t3);
          $[6] = t3;
          $[7] = t4;
        } else {
          t4 = $[7];
        }
        t2 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, maxWidth ? truncate(title, maxWidth) : title), t4);
        break bb0;
      }
      const text = getUsageText(amount);
      const display = maxWidth ? truncate(text, maxWidth) : text;
      const highlightLen = Math.min(getFeedTitle(amount).length, display.length);
      t1 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, display.slice(0, highlightLen)), display.slice(highlightLen));
    }
    $[0] = maxWidth;
    $[1] = twoLine;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  if (t2 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t2;
  }
  return t1;
}
function createOverageCreditFeed() {
  const info = getCachedOverageCreditGrant();
  const amount = info ? formatGrantAmount(info) : null;
  const title = amount ? getFeedTitle(amount) : "extra usage credit";
  return {
    title,
    lines: [],
    customContent: {
      content: /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, FEED_SUBTITLE),
      width: Math.max(title.length, FEED_SUBTITLE.length)
    }
  };
}
var MAX_IMPRESSIONS, FEED_SUBTITLE;
var init_OverageCreditUpsell = __esm({
  "src/components/LogoV2/OverageCreditUpsell.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_ink();
    init_analytics();
    init_overageCreditGrant();
    init_config();
    init_format();
    MAX_IMPRESSIONS = 3;
    FEED_SUBTITLE = "On us. Works on third-party apps \xB7 /extra-usage";
  }
});

export {
  isEligibleForOverageCreditGrant,
  shouldShowOverageCreditUpsell,
  useShowOverageCreditUpsell,
  incrementOverageCreditUpsellSeenCount,
  OverageCreditUpsell,
  createOverageCreditFeed,
  init_OverageCreditUpsell
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL092ZXJhZ2VDcmVkaXRVcHNlbGwudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQge1xuICBmb3JtYXRHcmFudEFtb3VudCxcbiAgZ2V0Q2FjaGVkT3ZlcmFnZUNyZWRpdEdyYW50LFxuICByZWZyZXNoT3ZlcmFnZUNyZWRpdEdyYW50Q2FjaGUsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9vdmVyYWdlQ3JlZGl0R3JhbnQuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB0eXBlIHsgRmVlZENvbmZpZyB9IGZyb20gJy4vRmVlZC5qcydcblxuY29uc3QgTUFYX0lNUFJFU1NJT05TID0gM1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgb3ZlcmFnZSBjcmVkaXQgdXBzZWxsIG9uIGFueSBzdXJmYWNlLlxuICpcbiAqIEVsaWdpYmlsaXR5IGNvbWVzIGVudGlyZWx5IGZyb20gdGhlIGJhY2tlbmQgR0VUIC9vdmVyYWdlX2NyZWRpdF9ncmFudFxuICogcmVzcG9uc2Ug4oCUIHRoZSBDTEkgZG9lc24ndCByZXBsaWNhdGUgdGllci90aHJlc2hvbGQvcm9sZSBjaGVja3MuIFRoZVxuICogYmFja2VuZCByZXR1cm5zIGF2YWlsYWJsZTogZmFsc2UgZm9yIFRlYW0gbWVtYmVycyB3aG8gYXJlbid0IGFkbWlucyxcbiAqIHNvIHRoZXkgZG9uJ3Qgc2VlIGFuIHVwc2VsbCB0aGV5IGNhbid0IGFjdCBvbi5cbiAqXG4gKiBpc0VsaWdpYmxlRm9yT3ZlcmFnZUNyZWRpdEdyYW50IOKAlCBqdXN0IHRoZSBiYWNrZW5kIGVsaWdpYmlsaXR5LiBVc2UgZm9yXG4gKiAgIHBlcnNpc3RlbnQgcmVmZXJlbmNlIHN1cmZhY2VzICgvdXNhZ2UpIHdoZXJlIHRoZSBpbmZvIHNob3VsZCBzaG93XG4gKiAgIHdoZW5ldmVyIGVsaWdpYmxlLCBubyBpbXByZXNzaW9uIGNhcC5cbiAqIHNob3VsZFNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsIOKAlCBhZGRzIHRoZSAzLWltcHJlc3Npb24gY2FwIGFuZFxuICogICBoYXNWaXNpdGVkRXh0cmFVc2FnZSBkaXNtaXNzLiBVc2UgZm9yIHByb21vdGlvbmFsIHN1cmZhY2VzXG4gKiAgICh3ZWxjb21lIGZlZWQsIHRpcHMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGlnaWJsZUZvck92ZXJhZ2VDcmVkaXRHcmFudCgpOiBib29sZWFuIHtcbiAgY29uc3QgaW5mbyA9IGdldENhY2hlZE92ZXJhZ2VDcmVkaXRHcmFudCgpXG4gIGlmICghaW5mbyB8fCAhaW5mby5hdmFpbGFibGUgfHwgaW5mby5ncmFudGVkKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIGZvcm1hdEdyYW50QW1vdW50KGluZm8pICE9PSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCgpOiBib29sZWFuIHtcbiAgaWYgKCFpc0VsaWdpYmxlRm9yT3ZlcmFnZUNyZWRpdEdyYW50KCkpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGlmIChjb25maWcuaGFzVmlzaXRlZEV4dHJhVXNhZ2UpIHJldHVybiBmYWxzZVxuICBpZiAoKGNvbmZpZy5vdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50ID8/IDApID49IE1BWF9JTVBSRVNTSU9OUylcbiAgICByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEtpY2sgb2ZmIGEgYmFja2dyb3VuZCBmZXRjaCBpZiB0aGUgY2FjaGUgaXMgZW1wdHkuIFNhZmUgdG8gY2FsbFxuICogdW5jb25kaXRpb25hbGx5IG9uIG1vdW50IOKAlCBpdCBuby1vcHMgaWYgY2FjaGUgaXMgZnJlc2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXliZVJlZnJlc2hPdmVyYWdlQ3JlZGl0Q2FjaGUoKTogdm9pZCB7XG4gIGlmIChnZXRDYWNoZWRPdmVyYWdlQ3JlZGl0R3JhbnQoKSAhPT0gbnVsbCkgcmV0dXJuXG4gIHZvaWQgcmVmcmVzaE92ZXJhZ2VDcmVkaXRHcmFudENhY2hlKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsKCk6IGJvb2xlYW4ge1xuICBjb25zdCBbc2hvd10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbWF5YmVSZWZyZXNoT3ZlcmFnZUNyZWRpdENhY2hlKClcbiAgICByZXR1cm4gc2hvdWxkU2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwoKVxuICB9KVxuICByZXR1cm4gc2hvd1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCgpOiB2b2lkIHtcbiAgbGV0IG5ld0NvdW50ID0gMFxuICBzYXZlR2xvYmFsQ29uZmlnKHByZXYgPT4ge1xuICAgIG5ld0NvdW50ID0gKHByZXYub3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCA/PyAwKSArIDFcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJldixcbiAgICAgIG92ZXJhZ2VDcmVkaXRVcHNlbGxTZWVuQ291bnQ6IG5ld0NvdW50LFxuICAgIH1cbiAgfSlcbiAgbG9nRXZlbnQoJ3Rlbmd1X292ZXJhZ2VfY3JlZGl0X3Vwc2VsbF9zaG93bicsIHsgc2Vlbl9jb3VudDogbmV3Q291bnQgfSlcbn1cblxuLy8gQ29weSBmcm9tIFwiT0MgJiBCdWxrIE92ZXJhZ2VzIGNvcHlcIiBkb2MgKCM2IOKAlCBDTEkgL3VzYWdlKVxuZnVuY3Rpb24gZ2V0VXNhZ2VUZXh0KGFtb3VudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2Ftb3VudH0gaW4gZXh0cmEgdXNhZ2UgZm9yIHRoaXJkLXBhcnR5IGFwcHMgwrcgL2V4dHJhLXVzYWdlYFxufVxuXG4vLyBDb3B5IGZyb20gXCJPQyAmIEJ1bGsgT3ZlcmFnZXMgY29weVwiIGRvYyAoIzQg4oCUIENMSSBXZWxjb21lIHNjcmVlbikuXG4vLyBDaGFyIGJ1ZGdldHM6IHRpdGxlIOKJpDE5LCBzdWJ0aXRsZSDiiaQ0OC5cbmNvbnN0IEZFRURfU1VCVElUTEUgPSAnT24gdXMuIFdvcmtzIG9uIHRoaXJkLXBhcnR5IGFwcHMgwrcgL2V4dHJhLXVzYWdlJ1xuXG5mdW5jdGlvbiBnZXRGZWVkVGl0bGUoYW1vdW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7YW1vdW50fSBpbiBleHRyYSB1c2FnZWBcbn1cblxudHlwZSBQcm9wcyA9IHsgbWF4V2lkdGg/OiBudW1iZXI7IHR3b0xpbmU/OiBib29sZWFuIH1cblxuZXhwb3J0IGZ1bmN0aW9uIE92ZXJhZ2VDcmVkaXRVcHNlbGwoe1xuICBtYXhXaWR0aCxcbiAgdHdvTGluZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaW5mbyA9IGdldENhY2hlZE92ZXJhZ2VDcmVkaXRHcmFudCgpXG4gIGlmICghaW5mbykgcmV0dXJuIG51bGxcbiAgY29uc3QgYW1vdW50ID0gZm9ybWF0R3JhbnRBbW91bnQoaW5mbylcbiAgaWYgKCFhbW91bnQpIHJldHVybiBudWxsXG5cbiAgaWYgKHR3b0xpbmUpIHtcbiAgICBjb25zdCB0aXRsZSA9IGdldEZlZWRUaXRsZShhbW91bnQpXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+XG4gICAgICAgICAge21heFdpZHRoID8gdHJ1bmNhdGUodGl0bGUsIG1heFdpZHRoKSA6IHRpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHttYXhXaWR0aCA/IHRydW5jYXRlKEZFRURfU1VCVElUTEUsIG1heFdpZHRoKSA6IEZFRURfU1VCVElUTEV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHRleHQgPSBnZXRVc2FnZVRleHQoYW1vdW50KVxuICBjb25zdCBkaXNwbGF5ID0gbWF4V2lkdGggPyB0cnVuY2F0ZSh0ZXh0LCBtYXhXaWR0aCkgOiB0ZXh0XG4gIGNvbnN0IGhpZ2hsaWdodExlbiA9IE1hdGgubWluKGdldEZlZWRUaXRsZShhbW91bnQpLmxlbmd0aCwgZGlzcGxheS5sZW5ndGgpXG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+e2Rpc3BsYXkuc2xpY2UoMCwgaGlnaGxpZ2h0TGVuKX08L1RleHQ+XG4gICAgICB7ZGlzcGxheS5zbGljZShoaWdobGlnaHRMZW4pfVxuICAgIDwvVGV4dD5cbiAgKVxufVxuXG4vKipcbiAqIEZlZWQgY29uZmlnIGZvciB0aGUgaG9tZXNjcmVlbiByb3RhdGluZyBmZWVkLiBNaXJyb3JzXG4gKiBjcmVhdGVHdWVzdFBhc3Nlc0ZlZWQgaW4gZmVlZENvbmZpZ3MudHN4LlxuICpcbiAqIENvcHkgZnJvbSBcIk9DICYgQnVsayBPdmVyYWdlcyBjb3B5XCIgZG9jICgjNCDigJQgQ0xJIFdlbGNvbWUgc2NyZWVuKS5cbiAqIENoYXIgYnVkZ2V0czogdGl0bGUg4omkMTksIHN1YnRpdGxlIOKJpDQ4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3ZlcmFnZUNyZWRpdEZlZWQoKTogRmVlZENvbmZpZyB7XG4gIGNvbnN0IGluZm8gPSBnZXRDYWNoZWRPdmVyYWdlQ3JlZGl0R3JhbnQoKVxuICBjb25zdCBhbW91bnQgPSBpbmZvID8gZm9ybWF0R3JhbnRBbW91bnQoaW5mbykgOiBudWxsXG4gIGNvbnN0IHRpdGxlID0gYW1vdW50ID8gZ2V0RmVlZFRpdGxlKGFtb3VudCkgOiAnZXh0cmEgdXNhZ2UgY3JlZGl0J1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGxpbmVzOiBbXSxcbiAgICBjdXN0b21Db250ZW50OiB7XG4gICAgICBjb250ZW50OiA8VGV4dCBkaW1Db2xvcj57RkVFRF9TVUJUSVRMRX08L1RleHQ+LFxuICAgICAgd2lkdGg6IE1hdGgubWF4KHRpdGxlLmxlbmd0aCwgRkVFRF9TVUJUSVRMRS5sZW5ndGgpLFxuICAgIH0sXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCTyxTQUFTQSxrQ0FBMkM7QUFDekQsUUFBTUMsT0FBT0MsNEJBQTRCO0FBQ3pDLE1BQUksQ0FBQ0QsUUFBUSxDQUFDQSxLQUFLRSxhQUFhRixLQUFLRyxRQUFTLFFBQU87QUFDckQsU0FBT0Msa0JBQWtCSixJQUFJLE1BQU07QUFDckM7QUFFTyxTQUFTSyxnQ0FBeUM7QUFDdkQsTUFBSSxDQUFDTixnQ0FBZ0MsRUFBRyxRQUFPO0FBRS9DLFFBQU1PLFNBQVNDLGdCQUFnQjtBQUMvQixNQUFJRCxPQUFPRSxxQkFBc0IsUUFBTztBQUN4QyxPQUFLRixPQUFPRyxnQ0FBZ0MsTUFBTUMsZ0JBQ2hELFFBQU87QUFFVCxTQUFPO0FBQ1Q7QUFNTyxTQUFTQyxpQ0FBdUM7QUFDckQsTUFBSVYsNEJBQTRCLE1BQU0sS0FBTTtBQUM1QyxPQUFLVywrQkFBK0I7QUFDdEM7QUFFTyxTQUFBQyw2QkFBQTtBQUNMLFFBQUEsQ0FBQUMsSUFBQSxJQUFlQyxTQUFTQyxLQUd2QjtBQUFDLFNBQ0tGO0FBQUk7QUFMTixTQUFBRSxRQUFBO0FBRUhMLGlDQUErQjtBQUFDLFNBQ3pCTiw4QkFBOEI7QUFBQztBQUtuQyxTQUFTWSx3Q0FBOEM7QUFD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QUN2Q2EsT0FBT1IsS0FBS1MsSUFBSWpCLE1BQU1VLFFBQVFQLGNBQWNPLE1BQU07SUFDcEQ7RUFDRjtBQUNGO0lBcElNckMsaUJBc0VBOEI7Ozs7QUFuRk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQSxJQUFNOUIsa0JBQWtCO0FBc0V4QixJQUFNOEIsZ0JBQWdCOzs7IiwKICAibmFtZXMiOiBbImlzRWxpZ2libGVGb3JPdmVyYWdlQ3JlZGl0R3JhbnQiLCAiaW5mbyIsICJnZXRDYWNoZWRPdmVyYWdlQ3JlZGl0R3JhbnQiLCAiYXZhaWxhYmxlIiwgImdyYW50ZWQiLCAiZm9ybWF0R3JhbnRBbW91bnQiLCAic2hvdWxkU2hvd092ZXJhZ2VDcmVkaXRVcHNlbGwiLCAiY29uZmlnIiwgImdldEdsb2JhbENvbmZpZyIsICJoYXNWaXNpdGVkRXh0cmFVc2FnZSIsICJvdmVyYWdlQ3JlZGl0VXBzZWxsU2VlbkNvdW50IiwgIk1BWF9JTVBSRVNTSU9OUyIsICJtYXliZVJlZnJlc2hPdmVyYWdlQ3JlZGl0Q2FjaGUiLCAicmVmcmVzaE92ZXJhZ2VDcmVkaXRHcmFudENhY2hlIiwgInVzZVNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsIiwgInNob3ciLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAiaW5jcmVtZW50T3ZlcmFnZUNyZWRpdFVwc2VsbFNlZW5Db3VudCIsICJuZXdDb3VudCIsICJzYXZlR2xvYmFsQ29uZmlnIiwgInByZXYiLCAibG9nRXZlbnQiLCAic2Vlbl9jb3VudCIsICJnZXRVc2FnZVRleHQiLCAiYW1vdW50IiwgImdldEZlZWRUaXRsZSIsICJPdmVyYWdlQ3JlZGl0VXBzZWxsIiwgInQwIiwgIiQiLCAiX2MiLCAibWF4V2lkdGgiLCAidHdvTGluZSIsICJ0MSIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgImJiMCIsICJ0aXRsZSIsICJ0MyIsICJ0cnVuY2F0ZSIsICJGRUVEX1NVQlRJVExFIiwgInQ0IiwgInRleHQiLCAiZGlzcGxheSIsICJoaWdobGlnaHRMZW4iLCAiTWF0aCIsICJtaW4iLCAibGVuZ3RoIiwgInNsaWNlIiwgImNyZWF0ZU92ZXJhZ2VDcmVkaXRGZWVkIiwgImxpbmVzIiwgImN1c3RvbUNvbnRlbnQiLCAiY29udGVudCIsICJ3aWR0aCIsICJtYXgiXQp9Cg==
