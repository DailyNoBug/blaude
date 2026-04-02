#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  calculateShouldShowGrove,
  getGroveNoticeConfig,
  getGroveSettings,
  init_CustomSelect,
  init_grove,
  markGroveNoticeViewed,
  updateGroveSettings
} from "./chunk-BQ2W5UUK.mjs";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-UPQJMBLU.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/grove/Grove.tsx
function GracePeriodContentBody() {
  const $ = c(9);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "An update to our Consumer Terms and Privacy Policy will take effect on", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "October 8, 2025"), ". You can accept the updated terms today.");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "What's changing?");
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\xB7 ");
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "You can help improve Claude ");
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t2, t3, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (", /* @__PURE__ */ react_default.createElement(Link, { url: "https://claude.ai/settings/data-privacy-controls" }), ").")));
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t1, t4, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\xB7 "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Updates to data retention "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years."))));
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(Link, { url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(Link, { url: "https://anthropic.com/legal/terms" });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t0, t5, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Learn more (", t6, ") or read the updated Consumer Terms (", t7, ") and Privacy Policy (", /* @__PURE__ */ react_default.createElement(Link, { url: "https://anthropic.com/legal/privacy" }), ")"));
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  return t8;
}
function PostGracePeriodContentBody() {
  const $ = c(7);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "We've updated our Consumer Terms and Privacy Policy.");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "What's changing?");
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Help improve Claude"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"), /* @__PURE__ */ react_default.createElement(Link, { url: "https://claude.ai/settings/data-privacy-controls" }));
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t1, t2, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "How this affects data retention"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime.")));
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(Link, { url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(Link, { url: "https://anthropic.com/legal/terms" });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t0, t3, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Learn more (", t4, ") or read the updated Consumer Terms (", t5, ") and Privacy Policy (", /* @__PURE__ */ react_default.createElement(Link, { url: "https://anthropic.com/legal/privacy" }), ")"));
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
}
function GroveDialog(t0) {
  const $ = c(34);
  const {
    showIfAlreadyViewed,
    location,
    onDone
  } = t0;
  const [shouldShowDialog, setShouldShowDialog] = useState(null);
  const [groveConfig, setGroveConfig] = useState(null);
  let t1;
  let t2;
  if ($[0] !== location || $[1] !== onDone || $[2] !== showIfAlreadyViewed) {
    t1 = () => {
      const checkGroveSettings = async function checkGroveSettings2() {
        const [settingsResult, configResult] = await Promise.all([getGroveSettings(), getGroveNoticeConfig()]);
        const config = configResult.success ? configResult.data : null;
        setGroveConfig(config);
        const shouldShow = calculateShouldShowGrove(settingsResult, configResult, showIfAlreadyViewed);
        setShouldShowDialog(shouldShow);
        if (!shouldShow) {
          onDone("skip_rendering");
          return;
        }
        markGroveNoticeViewed();
        logEvent("tengu_grove_policy_viewed", {
          location,
          dismissable: config?.notice_is_grace_period
        });
      };
      checkGroveSettings();
    };
    t2 = [showIfAlreadyViewed, location, onDone];
    $[0] = location;
    $[1] = onDone;
    $[2] = showIfAlreadyViewed;
    $[3] = t1;
    $[4] = t2;
  } else {
    t1 = $[3];
    t2 = $[4];
  }
  useEffect(t1, t2);
  if (shouldShowDialog === null) {
    return null;
  }
  if (!shouldShowDialog) {
    return null;
  }
  let t3;
  if ($[5] !== groveConfig?.notice_is_grace_period || $[6] !== onDone) {
    t3 = async function onChange2(value) {
      bb21: switch (value) {
        case "accept_opt_in": {
          await updateGroveSettings(true);
          logEvent("tengu_grove_policy_submitted", {
            state: true,
            dismissable: groveConfig?.notice_is_grace_period
          });
          break bb21;
        }
        case "accept_opt_out": {
          await updateGroveSettings(false);
          logEvent("tengu_grove_policy_submitted", {
            state: false,
            dismissable: groveConfig?.notice_is_grace_period
          });
          break bb21;
        }
        case "defer": {
          logEvent("tengu_grove_policy_dismissed", {
            state: true
          });
          break bb21;
        }
        case "escape": {
          logEvent("tengu_grove_policy_escaped", {});
        }
      }
      onDone(value);
    };
    $[5] = groveConfig?.notice_is_grace_period;
    $[6] = onDone;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const onChange = t3;
  let t4;
  if ($[8] !== groveConfig?.domain_excluded) {
    t4 = groveConfig?.domain_excluded ? [{
      label: "Accept terms \xB7 Help improve Claude: OFF (for emails with your domain)",
      value: "accept_opt_out"
    }] : [{
      label: "Accept terms \xB7 Help improve Claude: ON",
      value: "accept_opt_in"
    }, {
      label: "Accept terms \xB7 Help improve Claude: OFF",
      value: "accept_opt_out"
    }];
    $[8] = groveConfig?.domain_excluded;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const acceptOptions = t4;
  let t5;
  if ($[10] !== groveConfig?.notice_is_grace_period || $[11] !== onChange) {
    t5 = function handleCancel2() {
      if (groveConfig?.notice_is_grace_period) {
        onChange("defer");
        return;
      }
      onChange("escape");
    };
    $[10] = groveConfig?.notice_is_grace_period;
    $[11] = onChange;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  const handleCancel = t5;
  let t6;
  if ($[13] !== groveConfig?.notice_is_grace_period) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, flexGrow: 1 }, groveConfig?.notice_is_grace_period ? /* @__PURE__ */ react_default.createElement(GracePeriodContentBody, null) : /* @__PURE__ */ react_default.createElement(PostGracePeriodContentBody, null));
    $[13] = groveConfig?.notice_is_grace_period;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  let t7;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexShrink: 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "professionalBlue" }, NEW_TERMS_ASCII));
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t6) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, t6, t7);
    $[16] = t6;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Please select how you'd like to continue"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Your choice takes effect immediately upon confirmation."));
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== groveConfig?.notice_is_grace_period) {
    t10 = groveConfig?.notice_is_grace_period ? [{
      label: "Not now",
      value: "defer"
    }] : [];
    $[19] = groveConfig?.notice_is_grace_period;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== acceptOptions || $[22] !== t10) {
    t11 = [...acceptOptions, ...t10];
    $[21] = acceptOptions;
    $[22] = t10;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== onChange) {
    t12 = (value_0) => onChange(value_0);
    $[24] = onChange;
    $[25] = t12;
  } else {
    t12 = $[25];
  }
  let t13;
  if ($[26] !== handleCancel || $[27] !== t11 || $[28] !== t12) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t9, /* @__PURE__ */ react_default.createElement(Select, { options: t11, onChange: t12, onCancel: handleCancel }));
    $[26] = handleCancel;
    $[27] = t11;
    $[28] = t12;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  let t14;
  if ($[30] !== handleCancel || $[31] !== t13 || $[32] !== t8) {
    t14 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Updates to Consumer Terms and Policies", color: "professionalBlue", onCancel: handleCancel, inputGuide: _temp }, t8, t13);
    $[30] = handleCancel;
    $[31] = t13;
    $[32] = t8;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  return t14;
}
function _temp(exitState) {
  return exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc", action: "cancel" }));
}
function PrivacySettingsDialog(t0) {
  const $ = c(17);
  const {
    settings,
    domainExcluded,
    onDone
  } = t0;
  const [groveEnabled, setGroveEnabled] = useState(settings.grove_enabled);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  react_default.useEffect(_temp2, t1);
  let t2;
  if ($[1] !== domainExcluded || $[2] !== groveEnabled) {
    t2 = async (input, key) => {
      if (!domainExcluded && (key.tab || key.return || input === " ")) {
        const newValue = !groveEnabled;
        setGroveEnabled(newValue);
        await updateGroveSettings(newValue);
      }
    };
    $[1] = domainExcluded;
    $[2] = groveEnabled;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  use_input_default(t2);
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "false");
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let valueComponent = t3;
  if (domainExcluded) {
    let t42;
    if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "false (for emails with your domain)");
      $[5] = t42;
    } else {
      t42 = $[5];
    }
    valueComponent = t42;
  } else {
    if (groveEnabled) {
      let t42;
      if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t42 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "true");
        $[6] = t42;
      } else {
        t42 = $[6];
      }
      valueComponent = t42;
    }
  }
  let t4;
  if ($[7] !== domainExcluded) {
    t4 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : domainExcluded ? /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc", action: "cancel" }) : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter/Tab/Space", action: "toggle" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc", action: "cancel" }));
    $[7] = domainExcluded;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Review and manage your privacy settings at", " ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://claude.ai/settings/data-privacy-controls" }));
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: 44 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Help improve Claude"));
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== valueComponent) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t6, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, valueComponent));
    $[11] = valueComponent;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== onDone || $[14] !== t4 || $[15] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Data Privacy", color: "professionalBlue", onCancel: onDone, inputGuide: t4 }, t5, t7);
    $[13] = onDone;
    $[14] = t4;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
function _temp2() {
  logEvent("tengu_grove_privacy_settings_viewed", {});
}
var NEW_TERMS_ASCII;
var init_Grove = __esm({
  "src/components/grove/Grove.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_analytics();
    init_ink();
    init_grove();
    init_CustomSelect();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    NEW_TERMS_ASCII = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
  }
});

export {
  GroveDialog,
  PrivacySettingsDialog,
  init_Grove
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvZ3JvdmUvR3JvdmUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCwgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICB0eXBlIEFjY291bnRTZXR0aW5ncyxcbiAgY2FsY3VsYXRlU2hvdWxkU2hvd0dyb3ZlLFxuICB0eXBlIEdyb3ZlQ29uZmlnLFxuICBnZXRHcm92ZU5vdGljZUNvbmZpZyxcbiAgZ2V0R3JvdmVTZXR0aW5ncyxcbiAgbWFya0dyb3ZlTm90aWNlVmlld2VkLFxuICB1cGRhdGVHcm92ZVNldHRpbmdzLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JvdmUuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuXG5leHBvcnQgdHlwZSBHcm92ZURlY2lzaW9uID1cbiAgfCAnYWNjZXB0X29wdF9pbidcbiAgfCAnYWNjZXB0X29wdF9vdXQnXG4gIHwgJ2RlZmVyJ1xuICB8ICdlc2NhcGUnXG4gIHwgJ3NraXBfcmVuZGVyaW5nJ1xuXG50eXBlIFByb3BzID0ge1xuICBzaG93SWZBbHJlYWR5Vmlld2VkOiBib29sZWFuXG4gIGxvY2F0aW9uOiAnc2V0dGluZ3MnIHwgJ3BvbGljeV91cGRhdGVfbW9kYWwnIHwgJ29uYm9hcmRpbmcnXG4gIG9uRG9uZShkZWNpc2lvbjogR3JvdmVEZWNpc2lvbik6IHZvaWRcbn1cblxuY29uc3QgTkVXX1RFUk1TX0FTQ0lJID0gYCBfX19fX19fX19fX19fXG4gfCAgICAgICAgICBcXFxcICBcXFxcXG4gfCBORVcgVEVSTVMgXFxcXF9fXFxcXFxuIHwgICAgICAgICAgICAgIHxcbiB8ICAtLS0tLS0tLS0tICB8XG4gfCAgLS0tLS0tLS0tLSAgfFxuIHwgIC0tLS0tLS0tLS0gIHxcbiB8ICAtLS0tLS0tLS0tICB8XG4gfCAgLS0tLS0tLS0tLSAgfFxuIHwgICAgICAgICAgICAgIHxcbiB8X19fX19fX19fX19fX198YFxuXG5mdW5jdGlvbiBHcmFjZVBlcmlvZENvbnRlbnRCb2R5KCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0PlxuICAgICAgICBBbiB1cGRhdGUgdG8gb3VyIENvbnN1bWVyIFRlcm1zIGFuZCBQcml2YWN5IFBvbGljeSB3aWxsIHRha2UgZWZmZWN0IG9ueycgJ31cbiAgICAgICAgPFRleHQgYm9sZD5PY3RvYmVyIDgsIDIwMjU8L1RleHQ+LiBZb3UgY2FuIGFjY2VwdCB0aGUgdXBkYXRlZCB0ZXJtc1xuICAgICAgICB0b2RheS5cbiAgICAgIDwvVGV4dD5cblxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0PldoYXQmYXBvcztzIGNoYW5naW5nPzwvVGV4dD5cblxuICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsxfT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0PsK3IDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+WW91IGNhbiBoZWxwIGltcHJvdmUgQ2xhdWRlIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICDigJQgQWxsb3cgdGhlIHVzZSBvZiB5b3VyIGNoYXRzIGFuZCBjb2Rpbmcgc2Vzc2lvbnMgdG8gdHJhaW4gYW5kXG4gICAgICAgICAgICAgIGltcHJvdmUgQW50aHJvcGljIEFJIG1vZGVscy4gQ2hhbmdlIGFueXRpbWUgaW4geW91ciBQcml2YWN5XG4gICAgICAgICAgICAgIFNldHRpbmdzIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB1cmw9eydodHRwczovL2NsYXVkZS5haS9zZXR0aW5ncy9kYXRhLXByaXZhY3ktY29udHJvbHMnfVxuICAgICAgICAgICAgICA+PC9MaW5rPlxuICAgICAgICAgICAgICApLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQ+wrcgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5VcGRhdGVzIHRvIGRhdGEgcmV0ZW50aW9uIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICDigJQgVG8gaGVscCB1cyBpbXByb3ZlIG91ciBBSSBtb2RlbHMgYW5kIHNhZmV0eSBwcm90ZWN0aW9ucyxcbiAgICAgICAgICAgICAgd2UmYXBvcztyZSBleHRlbmRpbmcgZGF0YSByZXRlbnRpb24gdG8gNSB5ZWFycy5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxUZXh0PlxuICAgICAgICBMZWFybiBtb3JlIChcbiAgICAgICAgPExpbmtcbiAgICAgICAgICB1cmw9eydodHRwczovL3d3dy5hbnRocm9waWMuY29tL25ld3MvdXBkYXRlcy10by1vdXItY29uc3VtZXItdGVybXMnfVxuICAgICAgICA+PC9MaW5rPlxuICAgICAgICApIG9yIHJlYWQgdGhlIHVwZGF0ZWQgQ29uc3VtZXIgVGVybXMgKFxuICAgICAgICA8TGluayB1cmw9eydodHRwczovL2FudGhyb3BpYy5jb20vbGVnYWwvdGVybXMnfT48L0xpbms+KSBhbmQgUHJpdmFjeVxuICAgICAgICBQb2xpY3kgKDxMaW5rIHVybD17J2h0dHBzOi8vYW50aHJvcGljLmNvbS9sZWdhbC9wcml2YWN5J30+PC9MaW5rPilcbiAgICAgIDwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBQb3N0R3JhY2VQZXJpb2RDb250ZW50Qm9keSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGV4dD5XZSZhcG9zO3ZlIHVwZGF0ZWQgb3VyIENvbnN1bWVyIFRlcm1zIGFuZCBQcml2YWN5IFBvbGljeS48L1RleHQ+XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxUZXh0PldoYXQmYXBvcztzIGNoYW5naW5nPzwvVGV4dD5cblxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkPkhlbHAgaW1wcm92ZSBDbGF1ZGU8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBBbGxvdyB0aGUgdXNlIG9mIHlvdXIgY2hhdHMgYW5kIGNvZGluZyBzZXNzaW9ucyB0byB0cmFpbiBhbmQgaW1wcm92ZVxuICAgICAgICAgICAgQW50aHJvcGljIEFJIG1vZGVscy4gWW91IGNhbiBjaGFuZ2UgdGhpcyBhbnl0aW1lIGluIFByaXZhY3kgU2V0dGluZ3NcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPExpbmsgdXJsPXsnaHR0cHM6Ly9jbGF1ZGUuYWkvc2V0dGluZ3MvZGF0YS1wcml2YWN5LWNvbnRyb2xzJ30+PC9MaW5rPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkPkhvdyB0aGlzIGFmZmVjdHMgZGF0YSByZXRlbnRpb248L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBUdXJuaW5nIE9OIHRoZSBpbXByb3ZlIENsYXVkZSBzZXR0aW5nIGV4dGVuZHMgZGF0YSByZXRlbnRpb24gZnJvbSAzMFxuICAgICAgICAgICAgZGF5cyB0byA1IHllYXJzLiBUdXJuaW5nIGl0IE9GRiBrZWVwcyB0aGUgZGVmYXVsdCAzMC1kYXkgZGF0YVxuICAgICAgICAgICAgcmV0ZW50aW9uLiBEZWxldGUgZGF0YSBhbnl0aW1lLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPFRleHQ+XG4gICAgICAgIExlYXJuIG1vcmUgKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVybD17J2h0dHBzOi8vd3d3LmFudGhyb3BpYy5jb20vbmV3cy91cGRhdGVzLXRvLW91ci1jb25zdW1lci10ZXJtcyd9XG4gICAgICAgID48L0xpbms+XG4gICAgICAgICkgb3IgcmVhZCB0aGUgdXBkYXRlZCBDb25zdW1lciBUZXJtcyAoXG4gICAgICAgIDxMaW5rIHVybD17J2h0dHBzOi8vYW50aHJvcGljLmNvbS9sZWdhbC90ZXJtcyd9PjwvTGluaz4pIGFuZCBQcml2YWN5XG4gICAgICAgIFBvbGljeSAoPExpbmsgdXJsPXsnaHR0cHM6Ly9hbnRocm9waWMuY29tL2xlZ2FsL3ByaXZhY3knfT48L0xpbms+KVxuICAgICAgPC9UZXh0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHcm92ZURpYWxvZyh7XG4gIHNob3dJZkFscmVhZHlWaWV3ZWQsXG4gIGxvY2F0aW9uLFxuICBvbkRvbmUsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzaG91bGRTaG93RGlhbG9nLCBzZXRTaG91bGRTaG93RGlhbG9nXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKVxuICBjb25zdCBbZ3JvdmVDb25maWcsIHNldEdyb3ZlQ29uZmlnXSA9IHVzZVN0YXRlPEdyb3ZlQ29uZmlnIHwgbnVsbD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrR3JvdmVTZXR0aW5ncygpIHtcbiAgICAgIGNvbnN0IFtzZXR0aW5nc1Jlc3VsdCwgY29uZmlnUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0R3JvdmVTZXR0aW5ncygpLFxuICAgICAgICBnZXRHcm92ZU5vdGljZUNvbmZpZygpLFxuICAgICAgXSlcblxuICAgICAgLy8gRXh0cmFjdCBjb25maWcgZGF0YSBpZiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgbnVsbFxuICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnUmVzdWx0LnN1Y2Nlc3MgPyBjb25maWdSZXN1bHQuZGF0YSA6IG51bGxcbiAgICAgIHNldEdyb3ZlQ29uZmlnKGNvbmZpZylcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBzaG93IHRoZSBkaWFsb2cgKHJldHVybnMgZmFsc2Ugb24gQVBJIGZhaWx1cmUpXG4gICAgICBjb25zdCBzaG91bGRTaG93ID0gY2FsY3VsYXRlU2hvdWxkU2hvd0dyb3ZlKFxuICAgICAgICBzZXR0aW5nc1Jlc3VsdCxcbiAgICAgICAgY29uZmlnUmVzdWx0LFxuICAgICAgICBzaG93SWZBbHJlYWR5Vmlld2VkLFxuICAgICAgKVxuXG4gICAgICBzZXRTaG91bGRTaG93RGlhbG9nKHNob3VsZFNob3cpXG4gICAgICAvLyBJZiB3ZSBzaG91bGRuJ3Qgc2hvdyB0aGUgZGlhbG9nLCBpbW1lZGlhdGVseSBjYWxsIG9uRG9uZVxuICAgICAgaWYgKCFzaG91bGRTaG93KSB7XG4gICAgICAgIG9uRG9uZSgnc2tpcF9yZW5kZXJpbmcnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIE1hcmsgYXMgdmlld2VkIGV2ZXJ5IHRpbWUgd2Ugc2hvdyB0aGUgZGlhbG9nIChmb3IgcmVtaW5kZXIgZnJlcXVlbmN5IHRyYWNraW5nKVxuICAgICAgdm9pZCBtYXJrR3JvdmVOb3RpY2VWaWV3ZWQoKVxuICAgICAgLy8gTG9nIHRoYXQgdGhlIEdyb3ZlIHBvbGljeSBkaWFsb2cgd2FzIHNob3duXG4gICAgICBsb2dFdmVudCgndGVuZ3VfZ3JvdmVfcG9saWN5X3ZpZXdlZCcsIHtcbiAgICAgICAgbG9jYXRpb246XG4gICAgICAgICAgbG9jYXRpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgZGlzbWlzc2FibGU6XG4gICAgICAgICAgY29uZmlnPy5ub3RpY2VfaXNfZ3JhY2VfcGVyaW9kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHZvaWQgY2hlY2tHcm92ZVNldHRpbmdzKClcbiAgfSwgW3Nob3dJZkFscmVhZHlWaWV3ZWQsIGxvY2F0aW9uLCBvbkRvbmVdKVxuXG4gIC8vIExvYWRpbmcgc3RhdGVcbiAgaWYgKHNob3VsZFNob3dEaWFsb2cgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gVXNlciBoYXMgYWxyZWFkeSBzZXQgcHJlZmVyZW5jZXMsIGRvbid0IHNob3cgZGlhbG9nXG4gIGlmICghc2hvdWxkU2hvd0RpYWxvZykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNoYW5nZShcbiAgICB2YWx1ZTogJ2FjY2VwdF9vcHRfaW4nIHwgJ2FjY2VwdF9vcHRfb3V0JyB8ICdkZWZlcicgfCAnZXNjYXBlJyxcbiAgKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnYWNjZXB0X29wdF9pbic6IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlR3JvdmVTZXR0aW5ncyh0cnVlKVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfZ3JvdmVfcG9saWN5X3N1Ym1pdHRlZCcsIHtcbiAgICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICAgICAgICBkaXNtaXNzYWJsZTpcbiAgICAgICAgICAgIGdyb3ZlQ29uZmlnPy5ub3RpY2VfaXNfZ3JhY2VfcGVyaW9kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdhY2NlcHRfb3B0X291dCc6IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlR3JvdmVTZXR0aW5ncyhmYWxzZSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2dyb3ZlX3BvbGljeV9zdWJtaXR0ZWQnLCB7XG4gICAgICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgICAgIGRpc21pc3NhYmxlOlxuICAgICAgICAgICAgZ3JvdmVDb25maWc/Lm5vdGljZV9pc19ncmFjZV9wZXJpb2QgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2RlZmVyJzpcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2dyb3ZlX3BvbGljeV9kaXNtaXNzZWQnLCB7XG4gICAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlc2NhcGUnOlxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfZ3JvdmVfcG9saWN5X2VzY2FwZWQnLCB7fSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBvbkRvbmUodmFsdWUpXG4gIH1cblxuICBjb25zdCBhY2NlcHRPcHRpb25zID0gZ3JvdmVDb25maWc/LmRvbWFpbl9leGNsdWRlZFxuICAgID8gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAnQWNjZXB0IHRlcm1zIMK3IEhlbHAgaW1wcm92ZSBDbGF1ZGU6IE9GRiAoZm9yIGVtYWlscyB3aXRoIHlvdXIgZG9tYWluKScsXG4gICAgICAgICAgdmFsdWU6ICdhY2NlcHRfb3B0X291dCcsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FjY2VwdCB0ZXJtcyDCtyBIZWxwIGltcHJvdmUgQ2xhdWRlOiBPTicsXG4gICAgICAgICAgdmFsdWU6ICdhY2NlcHRfb3B0X2luJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQWNjZXB0IHRlcm1zIMK3IEhlbHAgaW1wcm92ZSBDbGF1ZGU6IE9GRicsXG4gICAgICAgICAgdmFsdWU6ICdhY2NlcHRfb3B0X291dCcsXG4gICAgICAgIH0sXG4gICAgICBdXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKCk6IHZvaWQge1xuICAgIGlmIChncm92ZUNvbmZpZz8ubm90aWNlX2lzX2dyYWNlX3BlcmlvZCkge1xuICAgICAgdm9pZCBvbkNoYW5nZSgnZGVmZXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZvaWQgb25DaGFuZ2UoJ2VzY2FwZScpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiVXBkYXRlcyB0byBDb25zdW1lciBUZXJtcyBhbmQgUG9saWNpZXNcIlxuICAgICAgY29sb3I9XCJwcm9mZXNzaW9uYWxCbHVlXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgPFRleHQ+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbmZpcm1cIiAvPlxuICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRXNjXCIgYWN0aW9uPVwiY2FuY2VsXCIgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IGZsZXhHcm93PXsxfT5cbiAgICAgICAgICB7Z3JvdmVDb25maWc/Lm5vdGljZV9pc19ncmFjZV9wZXJpb2QgPyAoXG4gICAgICAgICAgICA8R3JhY2VQZXJpb2RDb250ZW50Qm9keSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UG9zdEdyYWNlUGVyaW9kQ29udGVudEJvZHkgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cInByb2Zlc3Npb25hbEJsdWVcIj57TkVXX1RFUk1TX0FTQ0lJfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgYm9sZD5QbGVhc2Ugc2VsZWN0IGhvdyB5b3UmYXBvcztkIGxpa2UgdG8gY29udGludWU8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+WW91ciBjaG9pY2UgdGFrZXMgZWZmZWN0IGltbWVkaWF0ZWx5IHVwb24gY29uZmlybWF0aW9uLjwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIC4uLmFjY2VwdE9wdGlvbnMsXG4gICAgICAgICAgICAvLyBPbmx5IHNob3cgXCJOb3Qgbm93XCIgaWYgaW4gZ3JhY2UgcGVyaW9kXG4gICAgICAgICAgICAuLi4oZ3JvdmVDb25maWc/Lm5vdGljZV9pc19ncmFjZV9wZXJpb2RcbiAgICAgICAgICAgICAgPyBbeyBsYWJlbDogJ05vdCBub3cnLCB2YWx1ZTogJ2RlZmVyJyB9XVxuICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUgYXMgJ2FjY2VwdF9vcHRfaW4nIHwgJ2FjY2VwdF9vcHRfb3V0JyB8ICdkZWZlcicpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG50eXBlIFByaXZhY3lTZXR0aW5nc0RpYWxvZ1Byb3BzID0ge1xuICBzZXR0aW5nczogQWNjb3VudFNldHRpbmdzXG4gIGRvbWFpbkV4Y2x1ZGVkPzogYm9vbGVhblxuICBvbkRvbmUoKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpdmFjeVNldHRpbmdzRGlhbG9nKHtcbiAgc2V0dGluZ3MsXG4gIGRvbWFpbkV4Y2x1ZGVkLFxuICBvbkRvbmUsXG59OiBQcml2YWN5U2V0dGluZ3NEaWFsb2dQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtncm92ZUVuYWJsZWQsIHNldEdyb3ZlRW5hYmxlZF0gPSB1c2VTdGF0ZShzZXR0aW5ncy5ncm92ZV9lbmFibGVkKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2dyb3ZlX3ByaXZhY3lfc2V0dGluZ3Nfdmlld2VkJywge30pXG4gIH0sIFtdKVxuXG4gIHVzZUlucHV0KGFzeW5jIChpbnB1dCwga2V5KSA9PiB7XG4gICAgLy8gVG9nZ2xlIHRoZSBzZXR0aW5nIHdoZW4gZW50ZXIvdGFiL3NwYWNlIGlzIHByZXNzZWRcbiAgICBpZiAoIWRvbWFpbkV4Y2x1ZGVkICYmIChrZXkudGFiIHx8IGtleS5yZXR1cm4gfHwgaW5wdXQgPT09ICcgJykpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gIWdyb3ZlRW5hYmxlZFxuICAgICAgc2V0R3JvdmVFbmFibGVkKG5ld1ZhbHVlKVxuICAgICAgYXdhaXQgdXBkYXRlR3JvdmVTZXR0aW5ncyhuZXdWYWx1ZSlcbiAgICB9XG4gIH0pXG5cbiAgbGV0IHZhbHVlQ29tcG9uZW50ID0gPFRleHQgY29sb3I9XCJlcnJvclwiPmZhbHNlPC9UZXh0PlxuICBpZiAoZG9tYWluRXhjbHVkZWQpIHtcbiAgICB2YWx1ZUNvbXBvbmVudCA9IChcbiAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5mYWxzZSAoZm9yIGVtYWlscyB3aXRoIHlvdXIgZG9tYWluKTwvVGV4dD5cbiAgICApXG4gIH0gZWxzZSBpZiAoZ3JvdmVFbmFibGVkKSB7XG4gICAgdmFsdWVDb21wb25lbnQgPSA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj50cnVlPC9UZXh0PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIkRhdGEgUHJpdmFjeVwiXG4gICAgICBjb2xvcj1cInByb2Zlc3Npb25hbEJsdWVcIlxuICAgICAgb25DYW5jZWw9e29uRG9uZX1cbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiBkb21haW5FeGNsdWRlZCA/IChcbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFc2NcIiBhY3Rpb249XCJjYW5jZWxcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlci9UYWIvU3BhY2VcIiBhY3Rpb249XCJ0b2dnbGVcIiAvPlxuICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRXNjXCIgYWN0aW9uPVwiY2FuY2VsXCIgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxUZXh0PlxuICAgICAgICBSZXZpZXcgYW5kIG1hbmFnZSB5b3VyIHByaXZhY3kgc2V0dGluZ3MgYXR7JyAnfVxuICAgICAgICA8TGluayB1cmw9eydodHRwczovL2NsYXVkZS5haS9zZXR0aW5ncy9kYXRhLXByaXZhY3ktY29udHJvbHMnfT48L0xpbms+XG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxCb3ggd2lkdGg9ezQ0fT5cbiAgICAgICAgICA8VGV4dCBib2xkPkhlbHAgaW1wcm92ZSBDbGF1ZGU8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94Pnt2YWx1ZUNvbXBvbmVudH08L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EsU0FBQUEseUJBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFBQSxNQUFBQztBQUFBLE1BQUFGLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR01GLFNBQUEsNENBQUMsa0JBQUssMEVBQ21FLEtBQ3ZFLDRDQUFDLGNBQUssTUFBQSxRQUFLLGlCQUFlLEdBQU8sMkNBRW5DO0FBQU9GLE1BQUEsQ0FBQSxJQUFBRTtFQUFBLE9BQUE7QUFBQUEsU0FBQUYsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBSztBQUFBLE1BQUFMLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR0xDLFNBQUEsNENBQUMsa0JBQUssa0JBQXFCO0FBQU9MLE1BQUEsQ0FBQSxJQUFBSztFQUFBLE9BQUE7QUFBQUEsU0FBQUwsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBTTtBQUFBLE1BQUFDO0FBQUEsTUFBQVAsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFJOUJFLFNBQUEsNENBQUMsa0JBQUssT0FBRTtBQUNSQyxTQUFBLDRDQUFDLGNBQUssTUFBQSxRQUFLLDhCQUE0QjtBQUFPUCxNQUFBLENBQUEsSUFBQU07QUFBQU4sTUFBQSxDQUFBLElBQUFPO0VBQUEsT0FBQTtBQUFBRCxTQUFBTixFQUFBLENBQUE7QUFBQU8sU0FBQVAsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUTtBQUFBLE1BQUFSLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBSGxESSxTQUFBLDRDQUFDLHFCQUFpQixhQUFBLEtBQ2hCLDRDQUFDLGtCQUNDRixJQUNBQyxJQUNBLDRDQUFDLGtCQUFLLDhJQUlKLDRDQUFDLFFBQ00sS0FBQSxvREFBa0QsR0FDakQsSUFFVixDQUNGLENBQ0Y7QUFBTVAsTUFBQSxDQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFTO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFqQlJLLFNBQUEsNENBQUMscUJBQWtCLGVBQUEsWUFDakJKLElBRUFHLElBZUEsNENBQUMscUJBQWlCLGFBQUEsS0FDaEIsNENBQUMsa0JBQ0MsNENBQUMsa0JBQUssT0FBRSxHQUNSLDRDQUFDLGNBQUssTUFBQSxRQUFLLDRCQUEwQixHQUNyQyw0Q0FBQyxrQkFBSyw0R0FHTixDQUNGLENBQ0YsQ0FDRjtBQUFNUixNQUFBLENBQUEsSUFBQVM7RUFBQSxPQUFBO0FBQUFBLFNBQUFULEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQVU7QUFBQSxNQUFBVixFQUFBLENBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUlKTSxTQUFBLDRDQUFDLFFBQ00sS0FBQSxnRUFBOEQ7QUFDN0RWLE1BQUEsQ0FBQSxJQUFBVTtFQUFBLE9BQUE7QUFBQUEsU0FBQVYsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBVztBQUFBLE1BQUFYLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBRVJPLFNBQUEsNENBQUMsUUFBVSxLQUFBLHFDQUFtQztBQUFTWCxNQUFBLENBQUEsSUFBQVc7RUFBQSxPQUFBO0FBQUFBLFNBQUFYLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQVk7QUFBQSxNQUFBWixFQUFBLENBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQTNDM0RRLFNBQUEsMEVBQ0VWLElBTUFPLElBOEJBLDRDQUFDLGtCQUFLLGdCQUVKQyxJQUVRLDBDQUVSQyxJQUF1RCwwQkFDL0MsNENBQUMsUUFBVSxLQUFBLHVDQUFxQyxHQUFTLEdBQ25FLENBQU87QUFDTlgsTUFBQSxDQUFBLElBQUFZO0VBQUEsT0FBQTtBQUFBQSxTQUFBWixFQUFBLENBQUE7RUFBQTtBQUFBLFNBOUNIWTtBQThDRztBQUlQLFNBQUFDLDZCQUFBO0FBQUEsUUFBQWIsSUFBQUMsRUFBQSxDQUFBO0FBQUEsTUFBQUM7QUFBQSxNQUFBRixFQUFBLENBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUdNRixTQUFBLDRDQUFDLGtCQUFLLHNEQUF5RDtBQUFPRixNQUFBLENBQUEsSUFBQUU7RUFBQSxPQUFBO0FBQUFBLFNBQUFGLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQUs7QUFBQSxNQUFBTCxFQUFBLENBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUdwRUMsU0FBQSw0Q0FBQyxrQkFBSyxrQkFBcUI7QUFBT0wsTUFBQSxDQUFBLElBQUFLO0VBQUEsT0FBQTtBQUFBQSxTQUFBTCxFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFNO0FBQUEsTUFBQU4sRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFbENFLFNBQUEsNENBQUMscUJBQWtCLGVBQUEsWUFDakIsNENBQUMsY0FBSyxNQUFBLFFBQUsscUJBQW1CLEdBQzlCLDRDQUFDLGtCQUFLLDJJQUdOLEdBQ0EsNENBQUMsUUFBVSxLQUFBLG9EQUFrRCxDQUMvRDtBQUFNTixNQUFBLENBQUEsSUFBQU07RUFBQSxPQUFBO0FBQUFBLFNBQUFOLEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQU87QUFBQSxNQUFBUCxFQUFBLENBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQVZSRyxTQUFBLDRDQUFDLHFCQUFrQixlQUFBLFVBQWMsS0FBQSxLQUMvQkYsSUFFQUMsSUFTQSw0Q0FBQyxxQkFBa0IsZUFBQSxZQUNqQiw0Q0FBQyxjQUFLLE1BQUEsUUFBSyxpQ0FBK0IsR0FDMUMsNENBQUMsa0JBQUssb0tBSU4sQ0FDRixDQUNGO0FBQU1OLE1BQUEsQ0FBQSxJQUFBTztFQUFBLE9BQUE7QUFBQUEsU0FBQVAsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUTtBQUFBLE1BQUFSLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBSUpJLFNBQUEsNENBQUMsUUFDTSxLQUFBLGdFQUE4RDtBQUM3RFIsTUFBQSxDQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFTO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFUkssU0FBQSw0Q0FBQyxRQUFVLEtBQUEscUNBQW1DO0FBQVNULE1BQUEsQ0FBQSxJQUFBUztFQUFBLE9BQUE7QUFBQUEsU0FBQVQsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBVTtBQUFBLE1BQUFWLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBL0IzRE0sU0FBQSwwRUFDRVIsSUFFQUssSUFzQkEsNENBQUMsa0JBQUssZ0JBRUpDLElBRVEsMENBRVJDLElBQXVELDBCQUMvQyw0Q0FBQyxRQUFVLEtBQUEsdUNBQXFDLEdBQVMsR0FDbkUsQ0FBTztBQUNOVCxNQUFBLENBQUEsSUFBQVU7RUFBQSxPQUFBO0FBQUFBLFNBQUFWLEVBQUEsQ0FBQTtFQUFBO0FBQUEsU0FsQ0hVO0FBa0NHO0FBSUEsU0FBQUksWUFBQVosSUFBQTtBQUFBLFFBQUFGLElBQUFDLEVBQUEsRUFBQTtBQUFxQixRQUFBO0lBQUFjO0lBQUFDO0lBQUFDO0VBQUEsSUFBQWY7QUFLMUIsUUFBQSxDQUFBZ0Isa0JBQUFDLG1CQUFBLElBQWdEQyxTQUF5QixJQUFJO0FBQzdFLFFBQUEsQ0FBQUMsYUFBQUMsY0FBQSxJQUFzQ0YsU0FBNkIsSUFBSTtBQUFDLE1BQUFmO0FBQUEsTUFBQUM7QUFBQSxNQUFBTixFQUFBLENBQUEsTUFBQWdCLFlBQUFoQixFQUFBLENBQUEsTUFBQWlCLFVBQUFqQixFQUFBLENBQUEsTUFBQWUscUJBQUE7QUFFOURWLFNBQUFBLE1BQUE7QUFDUixZQUFBa0IscUJBQUEsZUFBQUEsc0JBQUE7QUFDRSxjQUFBLENBQUFDLGdCQUFBQyxZQUFBLElBQXVDLE1BQU1DLFFBQU9DLElBQUssQ0FDdkRDLGlCQUFpQixHQUNqQkMscUJBQXFCLENBQUMsQ0FDdkI7QUFHRCxjQUFBQyxTQUFlTCxhQUFZTSxVQUFXTixhQUFZTyxPQUFuQztBQUNmVix1QkFBZVEsTUFBTTtBQUdyQixjQUFBRyxhQUFtQkMseUJBQ2pCVixnQkFDQUMsY0FDQVYsbUJBQ0Y7QUFFQUksNEJBQW9CYyxVQUFVO0FBRTlCLFlBQUksQ0FBQ0EsWUFBVTtBQUNiaEIsaUJBQU8sZ0JBQWdCO0FBQUM7UUFBQTtBQUlyQmtCLDhCQUFzQjtBQUUzQkMsaUJBQVMsNkJBQTZCO1VBQUFwQjtVQUVvQ3FCLGFBRXRFUCxRQUFNUTtRQUNWLENBQUM7TUFBQztBQUdDZix5QkFBbUI7SUFBQztBQUN4QmpCLFNBQUEsQ0FBQ1MscUJBQXFCQyxVQUFVQyxNQUFNO0FBQUNqQixNQUFBLENBQUEsSUFBQWdCO0FBQUFoQixNQUFBLENBQUEsSUFBQWlCO0FBQUFqQixNQUFBLENBQUEsSUFBQWU7QUFBQWYsTUFBQSxDQUFBLElBQUFLO0FBQUFMLE1BQUEsQ0FBQSxJQUFBTTtFQUFBLE9BQUE7QUFBQUQsU0FBQUwsRUFBQSxDQUFBO0FBQUFNLFNBQUFOLEVBQUEsQ0FBQTtFQUFBO0FBcEMxQ3VDLFlBQVVsQyxJQW9DUEMsRUFBdUM7QUFHMUMsTUFBSVkscUJBQXFCLE1BQUk7QUFBQSxXQUNwQjtFQUFJO0FBSWIsTUFBSSxDQUFDQSxrQkFBZ0I7QUFBQSxXQUNaO0VBQUk7QUFDWixNQUFBWDtBQUFBLE1BQUFQLEVBQUEsQ0FBQSxNQUFBcUIsYUFBQWlCLDBCQUFBdEMsRUFBQSxDQUFBLE1BQUFpQixRQUFBO0FBRURWLFNBQUEsZUFBQWlDLFVBQUFDLE9BQUE7QUFBQUMsV0FHRSxTQUFRRCxPQUFLO1FBQUEsS0FDTixpQkFBZTtBQUNsQixnQkFBTUUsb0JBQW9CLElBQUk7QUFDOUJQLG1CQUFTLGdDQUFnQztZQUFBUSxPQUNoQztZQUFJUCxhQUVUaEIsYUFBV2lCO1VBQ2YsQ0FBQztBQUNELGdCQUFBSTtRQUFLO1FBQUEsS0FFRixrQkFBZ0I7QUFDbkIsZ0JBQU1DLG9CQUFvQixLQUFLO0FBQy9CUCxtQkFBUyxnQ0FBZ0M7WUFBQVEsT0FDaEM7WUFBS1AsYUFFVmhCLGFBQVdpQjtVQUNmLENBQUM7QUFDRCxnQkFBQUk7UUFBSztRQUFBLEtBRUYsU0FBTztBQUNWTixtQkFBUyxnQ0FBZ0M7WUFBQVEsT0FDaEM7VUFDVCxDQUFDO0FBQ0QsZ0JBQUFGO1FBQUs7UUFBQSxLQUNGLFVBQVE7QUFDWE4sbUJBQVMsOEJBQThCLENBQUMsQ0FBQztRQUFDO01BRTlDO0FBRUFuQixhQUFPd0IsS0FBSztJQUFDO0FBQ2R6QyxNQUFBLENBQUEsSUFBQXFCLGFBQUFpQjtBQUFBdEMsTUFBQSxDQUFBLElBQUFpQjtBQUFBakIsTUFBQSxDQUFBLElBQUFPO0VBQUEsT0FBQTtBQUFBQSxTQUFBUCxFQUFBLENBQUE7RUFBQTtBQWpDRCxRQUFBd0MsV0FBQWpDO0FBaUNDLE1BQUFDO0FBQUEsTUFBQVIsRUFBQSxDQUFBLE1BQUFxQixhQUFBd0IsaUJBQUE7QUFFcUJyQyxTQUFBYSxhQUFXd0Isa0JBQVgsQ0FFaEI7TUFBQUMsT0FFSTtNQUF1RUwsT0FDbEU7SUFDVCxDQUFDLElBTmUsQ0FTaEI7TUFBQUssT0FDUztNQUF3Q0wsT0FDeEM7SUFDVCxHQUNBO01BQUFLLE9BQ1M7TUFBeUNMLE9BQ3pDO0lBQ1QsQ0FBQztBQUNGekMsTUFBQSxDQUFBLElBQUFxQixhQUFBd0I7QUFBQTdDLE1BQUEsQ0FBQSxJQUFBUTtFQUFBLE9BQUE7QUFBQUEsU0FBQVIsRUFBQSxDQUFBO0VBQUE7QUFqQkwsUUFBQStDLGdCQUFzQnZDO0FBaUJqQixNQUFBQztBQUFBLE1BQUFULEVBQUEsRUFBQSxNQUFBcUIsYUFBQWlCLDBCQUFBdEMsRUFBQSxFQUFBLE1BQUF3QyxVQUFBO0FBRUwvQixTQUFBLFNBQUF1QyxnQkFBQTtBQUNFLFVBQUkzQixhQUFXaUIsd0JBQXdCO0FBQ2hDRSxpQkFBUyxPQUFPO0FBQUM7TUFBQTtBQUduQkEsZUFBUyxRQUFRO0lBQUM7QUFDeEJ4QyxNQUFBLEVBQUEsSUFBQXFCLGFBQUFpQjtBQUFBdEMsTUFBQSxFQUFBLElBQUF3QztBQUFBeEMsTUFBQSxFQUFBLElBQUFTO0VBQUEsT0FBQTtBQUFBQSxTQUFBVCxFQUFBLEVBQUE7RUFBQTtBQU5ELFFBQUFnRCxlQUFBdkM7QUFNQyxNQUFBQztBQUFBLE1BQUFWLEVBQUEsRUFBQSxNQUFBcUIsYUFBQWlCLHdCQUFBO0FBbUJLNUIsU0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsR0FBYSxVQUFBLEtBQzNDVyxhQUFXaUIseUJBQ1YsNENBQUMsNEJBQXNCLElBRXZCLDRDQUFDLGdDQUEwQixDQUUvQjtBQUFNdEMsTUFBQSxFQUFBLElBQUFxQixhQUFBaUI7QUFBQXRDLE1BQUEsRUFBQSxJQUFBVTtFQUFBLE9BQUE7QUFBQUEsU0FBQVYsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBVztBQUFBLE1BQUFYLEVBQUEsRUFBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBQ05PLFNBQUEsNENBQUMscUJBQWdCLFlBQUEsS0FDZiw0Q0FBQyxjQUFXLE9BQUEsc0JBQW9Cc0MsZUFBZ0IsQ0FDbEQ7QUFBTWpELE1BQUEsRUFBQSxJQUFBVztFQUFBLE9BQUE7QUFBQUEsU0FBQVgsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBWTtBQUFBLE1BQUFaLEVBQUEsRUFBQSxNQUFBVSxJQUFBO0FBVlJFLFNBQUEsNENBQUMscUJBQWtCLGVBQUEsU0FDakJGLElBT0FDLEVBR0Y7QUFBTVgsTUFBQSxFQUFBLElBQUFVO0FBQUFWLE1BQUEsRUFBQSxJQUFBWTtFQUFBLE9BQUE7QUFBQUEsU0FBQVosRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBa0Q7QUFBQSxNQUFBbEQsRUFBQSxFQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHSjhDLFNBQUEsNENBQUMscUJBQWtCLGVBQUEsWUFDakIsNENBQUMsY0FBSyxNQUFBLFFBQUssMENBQTZDLEdBQ3hELDRDQUFDLGtCQUFLLHlEQUF1RCxDQUMvRDtBQUFNbEQsTUFBQSxFQUFBLElBQUFrRDtFQUFBLE9BQUE7QUFBQUEsU0FBQWxELEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQW1EO0FBQUEsTUFBQW5ELEVBQUEsRUFBQSxNQUFBcUIsYUFBQWlCLHdCQUFBO0FBTUVhLFVBQUE5QixhQUFXaUIseUJBQVgsQ0FDQztNQUFBUSxPQUFTO01BQVNMLE9BQVM7SUFBUSxDQUFDLElBRHJDLENBQUE7QUFFRXpDLE1BQUEsRUFBQSxJQUFBcUIsYUFBQWlCO0FBQUF0QyxNQUFBLEVBQUEsSUFBQW1EO0VBQUEsT0FBQTtBQUFBQSxVQUFBbkQsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBb0Q7QUFBQSxNQUFBcEQsRUFBQSxFQUFBLE1BQUErQyxpQkFBQS9DLEVBQUEsRUFBQSxNQUFBbUQsS0FBQTtBQUxDQyxVQUFBLENBQUEsR0FDSkwsZUFBYSxHQUVaSSxHQUVFO0FBQ1BuRCxNQUFBLEVBQUEsSUFBQStDO0FBQUEvQyxNQUFBLEVBQUEsSUFBQW1EO0FBQUFuRCxNQUFBLEVBQUEsSUFBQW9EO0VBQUEsT0FBQTtBQUFBQSxVQUFBcEQsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBcUQ7QUFBQSxNQUFBckQsRUFBQSxFQUFBLE1BQUF3QyxVQUFBO0FBQ1NhLFVBQUFDLGFBQ1JkLFNBQVNDLE9BQXFEO0FBQUN6QyxNQUFBLEVBQUEsSUFBQXdDO0FBQUF4QyxNQUFBLEVBQUEsSUFBQXFEO0VBQUEsT0FBQTtBQUFBQSxVQUFBckQsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBdUQ7QUFBQSxNQUFBdkQsRUFBQSxFQUFBLE1BQUFnRCxnQkFBQWhELEVBQUEsRUFBQSxNQUFBb0QsT0FBQXBELEVBQUEsRUFBQSxNQUFBcUQsS0FBQTtBQWZyRUUsVUFBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsS0FDL0JMLElBS0EsNENBQUMsVUFDVSxTQUFBRSxLQU9DLFVBQUFDLEtBR0FMLFVBQUFBLGNBQVksQ0FFMUI7QUFBTWhELE1BQUEsRUFBQSxJQUFBZ0Q7QUFBQWhELE1BQUEsRUFBQSxJQUFBb0Q7QUFBQXBELE1BQUEsRUFBQSxJQUFBcUQ7QUFBQXJELE1BQUEsRUFBQSxJQUFBdUQ7RUFBQSxPQUFBO0FBQUFBLFVBQUF2RCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUF3RDtBQUFBLE1BQUF4RCxFQUFBLEVBQUEsTUFBQWdELGdCQUFBaEQsRUFBQSxFQUFBLE1BQUF1RCxPQUFBdkQsRUFBQSxFQUFBLE1BQUFZLElBQUE7QUEvQ1I0QyxVQUFBLDRDQUFDLFVBQ08sT0FBQSwwQ0FDQSxPQUFBLG9CQUNJUixVQUFBQSxjQUNFLFlBQUFTLFNBV1o3QyxJQWFBMkMsR0FvQkY7QUFBU3ZELE1BQUEsRUFBQSxJQUFBZ0Q7QUFBQWhELE1BQUEsRUFBQSxJQUFBdUQ7QUFBQXZELE1BQUEsRUFBQSxJQUFBWTtBQUFBWixNQUFBLEVBQUEsSUFBQXdEO0VBQUEsT0FBQTtBQUFBQSxVQUFBeEQsRUFBQSxFQUFBO0VBQUE7QUFBQSxTQWhEVHdEO0FBZ0RTO0FBdktOLFNBQUFDLE1BQUFDLFdBQUE7QUFBQSxTQTRIQ0EsVUFBU0MsVUFDUCw0Q0FBQyxrQkFBSyxVQUFPRCxVQUFTRSxTQUFTLGdCQUFjLElBRTdDLDRDQUFDLGNBQ0MsNENBQUMsd0JBQThCLFVBQUEsU0FBZSxRQUFBLFdBQVMsR0FDdkQsNENBQUMsd0JBQThCLFVBQUEsT0FBYSxRQUFBLFVBQVEsQ0FDdEQ7QUFDRDtBQThDRixTQUFBQyxzQkFBQTNELElBQUE7QUFBQSxRQUFBRixJQUFBQyxFQUFBLEVBQUE7QUFBK0IsUUFBQTtJQUFBNkQ7SUFBQUM7SUFBQTlDO0VBQUEsSUFBQWY7QUFLcEMsUUFBQSxDQUFBOEQsY0FBQUMsZUFBQSxJQUF3QzdDLFNBQVMwQyxTQUFRSSxhQUFjO0FBQUMsTUFBQTdEO0FBQUEsTUFBQUwsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFJckVDLFNBQUEsQ0FBQTtBQUFFTCxNQUFBLENBQUEsSUFBQUs7RUFBQSxPQUFBO0FBQUFBLFNBQUFMLEVBQUEsQ0FBQTtFQUFBO0FBRkxtRSxnQkFBSzVCLFVBQVc2QixRQUViL0QsRUFBRTtBQUFDLE1BQUFDO0FBQUEsTUFBQU4sRUFBQSxDQUFBLE1BQUErRCxrQkFBQS9ELEVBQUEsQ0FBQSxNQUFBZ0UsY0FBQTtBQUVHMUQsU0FBQSxPQUFBK0QsT0FBQUMsUUFBQTtBQUVQLFVBQUksQ0FBQ1AsbUJBQW1CTyxJQUFHQyxPQUFRRCxJQUFHRSxVQUFXSCxVQUFVLE1BQUk7QUFDN0QsY0FBQUksV0FBaUIsQ0FBQ1Q7QUFDbEJDLHdCQUFnQlEsUUFBUTtBQUN4QixjQUFNOUIsb0JBQW9COEIsUUFBUTtNQUFDO0lBQ3BDO0FBQ0Z6RSxNQUFBLENBQUEsSUFBQStEO0FBQUEvRCxNQUFBLENBQUEsSUFBQWdFO0FBQUFoRSxNQUFBLENBQUEsSUFBQU07RUFBQSxPQUFBO0FBQUFBLFNBQUFOLEVBQUEsQ0FBQTtFQUFBO0FBUEQwRSxvQkFBU3BFLEVBT1I7QUFBQyxNQUFBQztBQUFBLE1BQUFQLEVBQUEsQ0FBQSxNQUFBRyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBRW1CRyxTQUFBLDRDQUFDLGNBQVcsT0FBQSxXQUFRLE9BQUs7QUFBT1AsTUFBQSxDQUFBLElBQUFPO0VBQUEsT0FBQTtBQUFBQSxTQUFBUCxFQUFBLENBQUE7RUFBQTtBQUFyRCxNQUFBMkUsaUJBQXFCcEU7QUFDckIsTUFBSXdELGdCQUFjO0FBQUEsUUFBQXZEO0FBQUEsUUFBQVIsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFFZEksTUFBQUEsTUFBQSw0Q0FBQyxjQUFXLE9BQUEsV0FBUSxxQ0FBbUM7QUFBT1IsUUFBQSxDQUFBLElBQUFRO0lBQUEsT0FBQTtBQUFBQSxNQUFBQSxNQUFBUixFQUFBLENBQUE7SUFBQTtBQURoRTJFLHFCQUNFQTtFQURZLE9BQUE7QUFHVCxRQUFJWCxjQUFZO0FBQUEsVUFBQXhEO0FBQUEsVUFBQVIsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDSkksUUFBQUEsTUFBQSw0Q0FBQyxjQUFXLE9BQUEsYUFBVSxNQUFJO0FBQU9SLFVBQUEsQ0FBQSxJQUFBUTtNQUFBLE9BQUE7QUFBQUEsUUFBQUEsTUFBQVIsRUFBQSxDQUFBO01BQUE7QUFBbEQyRSx1QkFBaUJBO0lBQUg7RUFDZjtBQUFBLE1BQUFuRTtBQUFBLE1BQUFSLEVBQUEsQ0FBQSxNQUFBK0QsZ0JBQUE7QUFPZXZELFNBQUFrRCxlQUNWQSxVQUFTQyxVQUNQLDRDQUFDLGtCQUFLLFVBQU9ELFVBQVNFLFNBQVMsZ0JBQWMsSUFDM0NHLGlCQUNGLDRDQUFDLHdCQUE4QixVQUFBLE9BQWEsUUFBQSxVQUFRLElBRXBELDRDQUFDLGNBQ0MsNENBQUMsd0JBQThCLFVBQUEsbUJBQXlCLFFBQUEsVUFBUSxHQUNoRSw0Q0FBQyx3QkFBOEIsVUFBQSxPQUFhLFFBQUEsVUFBUSxDQUN0RDtBQUNEL0QsTUFBQSxDQUFBLElBQUErRDtBQUFBL0QsTUFBQSxDQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLENBQUE7RUFBQTtBQUFBLE1BQUFTO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFHLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHSEssU0FBQSw0Q0FBQyxrQkFBSyw4Q0FDdUMsS0FDM0MsNENBQUMsUUFBVSxLQUFBLG9EQUFrRCxDQUMvRDtBQUFPVCxNQUFBLENBQUEsSUFBQVM7RUFBQSxPQUFBO0FBQUFBLFNBQUFULEVBQUEsQ0FBQTtFQUFBO0FBQUEsTUFBQVU7QUFBQSxNQUFBVixFQUFBLEVBQUEsTUFBQUcsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUdMTSxTQUFBLDRDQUFDLHFCQUFXLE9BQUEsTUFDViw0Q0FBQyxjQUFLLE1BQUEsUUFBSyxxQkFBbUIsQ0FDaEM7QUFBTVYsTUFBQSxFQUFBLElBQUFVO0VBQUEsT0FBQTtBQUFBQSxTQUFBVixFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUFXO0FBQUEsTUFBQVgsRUFBQSxFQUFBLE1BQUEyRSxnQkFBQTtBQUhSaEUsU0FBQSw0Q0FBQyx5QkFDQ0QsSUFHQSw0Q0FBQyx5QkFBS2lFLGNBQWUsQ0FDdkI7QUFBTTNFLE1BQUEsRUFBQSxJQUFBMkU7QUFBQTNFLE1BQUEsRUFBQSxJQUFBVztFQUFBLE9BQUE7QUFBQUEsU0FBQVgsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBWTtBQUFBLE1BQUFaLEVBQUEsRUFBQSxNQUFBaUIsVUFBQWpCLEVBQUEsRUFBQSxNQUFBUSxNQUFBUixFQUFBLEVBQUEsTUFBQVcsSUFBQTtBQTNCUkMsU0FBQSw0Q0FBQyxVQUNPLE9BQUEsZ0JBQ0EsT0FBQSxvQkFDSUssVUFBQUEsUUFDRSxZQUFBVCxNQWFaQyxJQUtBRSxFQU1GO0FBQVNYLE1BQUEsRUFBQSxJQUFBaUI7QUFBQWpCLE1BQUEsRUFBQSxJQUFBUTtBQUFBUixNQUFBLEVBQUEsSUFBQVc7QUFBQVgsTUFBQSxFQUFBLElBQUFZO0VBQUEsT0FBQTtBQUFBQSxTQUFBWixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBNUJUWTtBQTRCUztBQTFETixTQUFBd0QsU0FBQTtBQVFIaEMsV0FBUyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQUM7SUFqU2pEYTs7OztBQWpDTjtBQUNBO0FBSUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBZUEsSUFBTUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7OyIsCiAgIm5hbWVzIjogWyJHcmFjZVBlcmlvZENvbnRlbnRCb2R5IiwgIiQiLCAiX2MiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJ0MSIsICJ0MiIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJQb3N0R3JhY2VQZXJpb2RDb250ZW50Qm9keSIsICJHcm92ZURpYWxvZyIsICJzaG93SWZBbHJlYWR5Vmlld2VkIiwgImxvY2F0aW9uIiwgIm9uRG9uZSIsICJzaG91bGRTaG93RGlhbG9nIiwgInNldFNob3VsZFNob3dEaWFsb2ciLCAidXNlU3RhdGUiLCAiZ3JvdmVDb25maWciLCAic2V0R3JvdmVDb25maWciLCAiY2hlY2tHcm92ZVNldHRpbmdzIiwgInNldHRpbmdzUmVzdWx0IiwgImNvbmZpZ1Jlc3VsdCIsICJQcm9taXNlIiwgImFsbCIsICJnZXRHcm92ZVNldHRpbmdzIiwgImdldEdyb3ZlTm90aWNlQ29uZmlnIiwgImNvbmZpZyIsICJzdWNjZXNzIiwgImRhdGEiLCAic2hvdWxkU2hvdyIsICJjYWxjdWxhdGVTaG91bGRTaG93R3JvdmUiLCAibWFya0dyb3ZlTm90aWNlVmlld2VkIiwgImxvZ0V2ZW50IiwgImRpc21pc3NhYmxlIiwgIm5vdGljZV9pc19ncmFjZV9wZXJpb2QiLCAidXNlRWZmZWN0IiwgIm9uQ2hhbmdlIiwgInZhbHVlIiwgImJiMjEiLCAidXBkYXRlR3JvdmVTZXR0aW5ncyIsICJzdGF0ZSIsICJkb21haW5fZXhjbHVkZWQiLCAibGFiZWwiLCAiYWNjZXB0T3B0aW9ucyIsICJoYW5kbGVDYW5jZWwiLCAiTkVXX1RFUk1TX0FTQ0lJIiwgInQ5IiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInZhbHVlXzAiLCAidDEzIiwgInQxNCIsICJfdGVtcCIsICJleGl0U3RhdGUiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgIlByaXZhY3lTZXR0aW5nc0RpYWxvZyIsICJzZXR0aW5ncyIsICJkb21haW5FeGNsdWRlZCIsICJncm92ZUVuYWJsZWQiLCAic2V0R3JvdmVFbmFibGVkIiwgImdyb3ZlX2VuYWJsZWQiLCAiUmVhY3QiLCAiX3RlbXAyIiwgImlucHV0IiwgImtleSIsICJ0YWIiLCAicmV0dXJuIiwgIm5ld1ZhbHVlIiwgInVzZUlucHV0IiwgInZhbHVlQ29tcG9uZW50Il0KfQo=
