#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  init_CustomSelect
} from "./chunk-PWGYNHQM.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-2ONWBUQT.mjs";
import {
  Link,
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
import {
  init_settings2 as init_settings,
  updateSettingsForSource
} from "./chunk-NKGQGSP5.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";

// src/components/AutoModeOptInDialog.tsx
init_react_compiler_runtime();
init_react();
init_analytics();
init_ink();
init_settings();
init_CustomSelect();
init_Dialog();
var AUTO_MODE_DESCRIPTION = "Auto mode lets Claude handle permission prompts automatically \u2014 Claude checks each tool call for risky actions and prompt injection before executing. Actions Claude identifies as safe are executed, while actions Claude identifies as risky are blocked and Claude may try a different approach. Ideal for long-running tasks. Sessions are slightly more expensive. Claude can make mistakes that allow harmful commands to run, it's recommended to only use in isolated environments. Shift+Tab to change mode.";
function AutoModeOptInDialog(t0) {
  const $ = c(18);
  const {
    onAccept,
    onDecline,
    declineExits
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
  if ($[1] !== onAccept || $[2] !== onDecline) {
    t2 = function onChange2(value) {
      bb3: switch (value) {
        case "accept": {
          logEvent("tengu_auto_mode_opt_in_dialog_accept", {});
          updateSettingsForSource("userSettings", {
            skipAutoPermissionPrompt: true
          });
          onAccept();
          break bb3;
        }
        case "accept-default": {
          logEvent("tengu_auto_mode_opt_in_dialog_accept_default", {});
          updateSettingsForSource("userSettings", {
            skipAutoPermissionPrompt: true,
            permissions: {
              defaultMode: "auto"
            }
          });
          onAccept();
          break bb3;
        }
        case "decline": {
          logEvent("tengu_auto_mode_opt_in_dialog_decline", {});
          onDecline();
        }
      }
    };
    $[1] = onAccept;
    $[2] = onDecline;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const onChange = t2;
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, AUTO_MODE_DESCRIPTION), /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/security" }));
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = true ? [{
      label: "Yes, and make it my default mode",
      value: "accept-default"
    }] : [];
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      label: "Yes, enable auto mode",
      value: "accept"
    };
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  const t6 = declineExits ? "No, exit" : "No, go back";
  let t7;
  if ($[7] !== t6) {
    t7 = [...t4, t5, {
      label: t6,
      value: "decline"
    }];
    $[7] = t6;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  let t8;
  if ($[9] !== onChange) {
    t8 = (value_0) => onChange(value_0);
    $[9] = onChange;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== onDecline || $[12] !== t7 || $[13] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(Select, { options: t7, onChange: t8, onCancel: onDecline });
    $[11] = onDecline;
    $[12] = t7;
    $[13] = t8;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== onDecline || $[16] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Enable auto mode?", color: "warning", onCancel: onDecline }, t3, t9);
    $[15] = onDecline;
    $[16] = t9;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  return t10;
}
function _temp() {
  logEvent("tengu_auto_mode_opt_in_dialog_shown", {});
}

export {
  AUTO_MODE_DESCRIPTION,
  AutoModeOptInDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQXV0b01vZGVPcHRJbkRpYWxvZy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL0N1c3RvbVNlbGVjdC9pbmRleC5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5cbi8vIE5PVEU6IFRoaXMgY29weSBpcyBsZWdhbGx5IHJldmlld2VkIOKAlCBkbyBub3QgbW9kaWZ5IHdpdGhvdXQgTGVnYWwgdGVhbSBhcHByb3ZhbC5cbmV4cG9ydCBjb25zdCBBVVRPX01PREVfREVTQ1JJUFRJT04gPVxuICBcIkF1dG8gbW9kZSBsZXRzIENsYXVkZSBoYW5kbGUgcGVybWlzc2lvbiBwcm9tcHRzIGF1dG9tYXRpY2FsbHkg4oCUIENsYXVkZSBjaGVja3MgZWFjaCB0b29sIGNhbGwgZm9yIHJpc2t5IGFjdGlvbnMgYW5kIHByb21wdCBpbmplY3Rpb24gYmVmb3JlIGV4ZWN1dGluZy4gQWN0aW9ucyBDbGF1ZGUgaWRlbnRpZmllcyBhcyBzYWZlIGFyZSBleGVjdXRlZCwgd2hpbGUgYWN0aW9ucyBDbGF1ZGUgaWRlbnRpZmllcyBhcyByaXNreSBhcmUgYmxvY2tlZCBhbmQgQ2xhdWRlIG1heSB0cnkgYSBkaWZmZXJlbnQgYXBwcm9hY2guIElkZWFsIGZvciBsb25nLXJ1bm5pbmcgdGFza3MuIFNlc3Npb25zIGFyZSBzbGlnaHRseSBtb3JlIGV4cGVuc2l2ZS4gQ2xhdWRlIGNhbiBtYWtlIG1pc3Rha2VzIHRoYXQgYWxsb3cgaGFybWZ1bCBjb21tYW5kcyB0byBydW4sIGl0J3MgcmVjb21tZW5kZWQgdG8gb25seSB1c2UgaW4gaXNvbGF0ZWQgZW52aXJvbm1lbnRzLiBTaGlmdCtUYWIgdG8gY2hhbmdlIG1vZGUuXCJcblxudHlwZSBQcm9wcyA9IHtcbiAgb25BY2NlcHQoKTogdm9pZFxuICBvbkRlY2xpbmUoKTogdm9pZFxuICAvLyBTdGFydHVwIGdhdGU6IGRlY2xpbmUgZXhpdHMgdGhlIHByb2Nlc3MsIHNvIHJlbGFiZWwgYWNjb3JkaW5nbHkuXG4gIGRlY2xpbmVFeGl0cz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dG9Nb2RlT3B0SW5EaWFsb2coe1xuICBvbkFjY2VwdCxcbiAgb25EZWNsaW5lLFxuICBkZWNsaW5lRXhpdHMsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2F1dG9fbW9kZV9vcHRfaW5fZGlhbG9nX3Nob3duJywge30pXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlOiAnYWNjZXB0JyB8ICdhY2NlcHQtZGVmYXVsdCcgfCAnZGVjbGluZScpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdhY2NlcHQnOiB7XG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9hdXRvX21vZGVfb3B0X2luX2RpYWxvZ19hY2NlcHQnLCB7fSlcbiAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICBza2lwQXV0b1Blcm1pc3Npb25Qcm9tcHQ6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIG9uQWNjZXB0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjY2VwdC1kZWZhdWx0Jzoge1xuICAgICAgICBsb2dFdmVudCgndGVuZ3VfYXV0b19tb2RlX29wdF9pbl9kaWFsb2dfYWNjZXB0X2RlZmF1bHQnLCB7fSlcbiAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICBza2lwQXV0b1Blcm1pc3Npb25Qcm9tcHQ6IHRydWUsXG4gICAgICAgICAgcGVybWlzc2lvbnM6IHsgZGVmYXVsdE1vZGU6ICdhdXRvJyB9LFxuICAgICAgICB9KVxuICAgICAgICBvbkFjY2VwdCgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdkZWNsaW5lJzoge1xuICAgICAgICBsb2dFdmVudCgndGVuZ3VfYXV0b19tb2RlX29wdF9pbl9kaWFsb2dfZGVjbGluZScsIHt9KVxuICAgICAgICBvbkRlY2xpbmUoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyB0aXRsZT1cIkVuYWJsZSBhdXRvIG1vZGU/XCIgY29sb3I9XCJ3YXJuaW5nXCIgb25DYW5jZWw9e29uRGVjbGluZX0+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dD57QVVUT19NT0RFX0RFU0NSSVBUSU9OfTwvVGV4dD5cblxuICAgICAgICA8TGluayB1cmw9XCJodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL3NlY3VyaXR5XCIgLz5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAuLi4oXCJleHRlcm5hbFwiICE9PSAnYW50J1xuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdZZXMsIGFuZCBtYWtlIGl0IG15IGRlZmF1bHQgbW9kZScsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FjY2VwdC1kZWZhdWx0JyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICB7IGxhYmVsOiAnWWVzLCBlbmFibGUgYXV0byBtb2RlJywgdmFsdWU6ICdhY2NlcHQnIGFzIGNvbnN0IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IGRlY2xpbmVFeGl0cyA/ICdObywgZXhpdCcgOiAnTm8sIGdvIGJhY2snLFxuICAgICAgICAgICAgdmFsdWU6ICdkZWNsaW5lJyBhcyBjb25zdCxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT5cbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSBhcyAnYWNjZXB0JyB8ICdhY2NlcHQtZGVmYXVsdCcgfCAnZGVjbGluZScpXG4gICAgICAgIH1cbiAgICAgICAgb25DYW5jZWw9e29uRGVjbGluZX1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSx3QkFDWDtBQVNLLFNBQUFDLG9CQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQTZCLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBTDtBQUk1QixNQUFBTTtBQUFBLE1BQUFMLEVBQUEsQ0FBQSxNQUFBTSx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR0hGLFNBQUEsQ0FBQTtBQUFFTCxNQUFBLENBQUEsSUFBQUs7RUFBQSxPQUFBO0FBQUFBLFNBQUFMLEVBQUEsQ0FBQTtFQUFBO0FBRkxRLGdCQUFLQyxVQUFXQyxPQUViTCxFQUFFO0FBQUMsTUFBQU07QUFBQSxNQUFBWCxFQUFBLENBQUEsTUFBQUUsWUFBQUYsRUFBQSxDQUFBLE1BQUFHLFdBQUE7QUFFTlEsU0FBQSxTQUFBQyxVQUFBQyxPQUFBO0FBQUFDLFVBQ0UsU0FBUUQs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LFVBQWEsT0FBQSxxQkFBMEIsT0FBQSxXQUFvQjFCLFVBQUFBLGFBQzFEaUIsSUFNQVEsRUFxQkY7QUFBUzVCLE1BQUEsRUFBQSxJQUFBRztBQUFBSCxNQUFBLEVBQUEsSUFBQTRCO0FBQUE1QixNQUFBLEVBQUEsSUFBQTZCO0VBQUEsT0FBQTtBQUFBQSxVQUFBN0IsRUFBQSxFQUFBO0VBQUE7QUFBQSxTQTVCVDZCO0FBNEJTO0FBakVOLFNBQUFuQixRQUFBO0FBTUhLLFdBQVMsdUNBQXVDLENBQUMsQ0FBQztBQUFDOyIsCiAgIm5hbWVzIjogWyJBVVRPX01PREVfREVTQ1JJUFRJT04iLCAiQXV0b01vZGVPcHRJbkRpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQWNjZXB0IiwgIm9uRGVjbGluZSIsICJkZWNsaW5lRXhpdHMiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJSZWFjdCIsICJ1c2VFZmZlY3QiLCAiX3RlbXAiLCAidDIiLCAib25DaGFuZ2UiLCAidmFsdWUiLCAiYmIzIiwgImxvZ0V2ZW50IiwgInVwZGF0ZVNldHRpbmdzRm9yU291cmNlIiwgInNraXBBdXRvUGVybWlzc2lvblByb21wdCIsICJwZXJtaXNzaW9ucyIsICJkZWZhdWx0TW9kZSIsICJ0MyIsICJ0NCIsICJsYWJlbCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ2YWx1ZV8wIiwgInQ5IiwgInQxMCJdCn0K
