#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  checkAndDisableAutoModeIfNeeded,
  checkAndDisableBypassPermissionsIfNeeded,
  init_bypassPermissionsKillswitch,
  resetAutoModeGateCheck,
  resetBypassPermissionsCheck
} from "./chunk-JDJZ66PK.mjs";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-QHAFY3TI.mjs";
import {
  ConsoleOAuthFlow,
  init_ConsoleOAuthFlow,
  init_messages2 as init_messages,
  init_policyLimits,
  init_remoteManagedSettings,
  refreshPolicyLimits,
  refreshRemoteManagedSettings,
  stripSignatureBlocks
} from "./chunk-FMU4URRE.mjs";
import {
  ConfigurableShortcutHint,
  Dialog,
  init_ConfigurableShortcutHint,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
import {
  clearTrustedDeviceToken,
  enrollTrustedDevice,
  init_trustedDevice
} from "./chunk-R326WRGL.mjs";
import {
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import {
  init_growthbook,
  init_user,
  refreshGrowthBookAfterAuthChange,
  resetUserCache
} from "./chunk-NKGQGSP5.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  resetCostState
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/login/login.tsx
async function call(onDone, context) {
  return /* @__PURE__ */ createElement(Login, { onDone: async (success) => {
    context.onChangeAPIKey();
    context.setMessages(stripSignatureBlocks);
    if (success) {
      resetCostState();
      void refreshRemoteManagedSettings();
      void refreshPolicyLimits();
      resetUserCache();
      refreshGrowthBookAfterAuthChange();
      clearTrustedDeviceToken();
      void enrollTrustedDevice();
      resetBypassPermissionsCheck();
      const appState = context.getAppState();
      void checkAndDisableBypassPermissionsIfNeeded(appState.toolPermissionContext, context.setAppState);
      if (feature("TRANSCRIPT_CLASSIFIER")) {
        resetAutoModeGateCheck();
        void checkAndDisableAutoModeIfNeeded(appState.toolPermissionContext, context.setAppState, appState.fastMode);
      }
      context.setAppState((prev) => ({
        ...prev,
        authVersion: prev.authVersion + 1
      }));
    }
    onDone(success ? "Login successful" : "Login interrupted");
  } });
}
function Login(props) {
  const $ = c(12);
  const mainLoopModel = useMainLoopModel();
  let t0;
  if ($[0] !== mainLoopModel || $[1] !== props) {
    t0 = () => props.onDone(false, mainLoopModel);
    $[0] = mainLoopModel;
    $[1] = props;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  let t1;
  if ($[3] !== mainLoopModel || $[4] !== props) {
    t1 = () => props.onDone(true, mainLoopModel);
    $[3] = mainLoopModel;
    $[4] = props;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== props.startingMessage || $[7] !== t1) {
    t2 = /* @__PURE__ */ createElement(ConsoleOAuthFlow, { onDone: t1, startingMessage: props.startingMessage });
    $[6] = props.startingMessage;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  let t3;
  if ($[9] !== t0 || $[10] !== t2) {
    t3 = /* @__PURE__ */ createElement(Dialog, { title: "Login", onCancel: t0, color: "permission", inputGuide: _temp }, t2);
    $[9] = t0;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function _temp(exitState) {
  return exitState.pending ? /* @__PURE__ */ createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" });
}
var init_login = __esm({
  "src/commands/login/login.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_react();
    init_state();
    init_trustedDevice();
    init_ConfigurableShortcutHint();
    init_ConsoleOAuthFlow();
    init_Dialog();
    init_useMainLoopModel();
    init_ink();
    init_growthbook();
    init_policyLimits();
    init_remoteManagedSettings();
    init_messages();
    init_bypassPermissionsKillswitch();
    init_user();
  }
});

export {
  call,
  Login,
  init_login
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2xvZ2luL2xvZ2luLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlc2V0Q29zdFN0YXRlIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYXJUcnVzdGVkRGV2aWNlVG9rZW4sXG4gIGVucm9sbFRydXN0ZWREZXZpY2UsXG59IGZyb20gJy4uLy4uL2JyaWRnZS90cnVzdGVkRGV2aWNlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IENvbnNvbGVPQXV0aEZsb3cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnNvbGVPQXV0aEZsb3cuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgdXNlTWFpbkxvb3BNb2RlbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1haW5Mb29wTW9kZWwuanMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgcmVmcmVzaEdyb3d0aEJvb2tBZnRlckF1dGhDaGFuZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IHJlZnJlc2hQb2xpY3lMaW1pdHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb2xpY3lMaW1pdHMvaW5kZXguanMnXG5pbXBvcnQgeyByZWZyZXNoUmVtb3RlTWFuYWdlZFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVtb3RlTWFuYWdlZFNldHRpbmdzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgc3RyaXBTaWduYXR1cmVCbG9ja3MgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7XG4gIGNoZWNrQW5kRGlzYWJsZUF1dG9Nb2RlSWZOZWVkZWQsXG4gIGNoZWNrQW5kRGlzYWJsZUJ5cGFzc1Blcm1pc3Npb25zSWZOZWVkZWQsXG4gIHJlc2V0QXV0b01vZGVHYXRlQ2hlY2ssXG4gIHJlc2V0QnlwYXNzUGVybWlzc2lvbnNDaGVjayxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvYnlwYXNzUGVybWlzc2lvbnNLaWxsc3dpdGNoLmpzJ1xuaW1wb3J0IHsgcmVzZXRVc2VyQ2FjaGUgfSBmcm9tICcuLi8uLi91dGlscy91c2VyLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2dpblxuICAgICAgb25Eb25lPXthc3luYyBzdWNjZXNzID0+IHtcbiAgICAgICAgY29udGV4dC5vbkNoYW5nZUFQSUtleSgpXG4gICAgICAgIC8vIFNpZ25hdHVyZS1iZWFyaW5nIGJsb2NrcyAodGhpbmtpbmcsIGNvbm5lY3Rvcl90ZXh0KSBhcmUgYm91bmQgdG8gdGhlIEFQSSBrZXkg4oCUXG4gICAgICAgIC8vIHN0cmlwIHRoZW0gc28gdGhlIG5ldyBrZXkgZG9lc24ndCByZWplY3Qgc3RhbGUgc2lnbmF0dXJlcy5cbiAgICAgICAgY29udGV4dC5zZXRNZXNzYWdlcyhzdHJpcFNpZ25hdHVyZUJsb2NrcylcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyBQb3N0LWxvZ2luIHJlZnJlc2ggbG9naWMuIEtlZXAgaW4gc3luYyB3aXRoIG9uYm9hcmRpbmcgaW4gc3JjL2ludGVyYWN0aXZlSGVscGVycy50c3hcbiAgICAgICAgICAvLyBSZXNldCBjb3N0IHN0YXRlIHdoZW4gc3dpdGNoaW5nIGFjY291bnRzXG4gICAgICAgICAgcmVzZXRDb3N0U3RhdGUoKVxuICAgICAgICAgIC8vIFJlZnJlc2ggcmVtb3RlbHkgbWFuYWdlZCBzZXR0aW5ncyBhZnRlciBsb2dpbiAobm9uLWJsb2NraW5nKVxuICAgICAgICAgIHZvaWQgcmVmcmVzaFJlbW90ZU1hbmFnZWRTZXR0aW5ncygpXG4gICAgICAgICAgLy8gUmVmcmVzaCBwb2xpY3kgbGltaXRzIGFmdGVyIGxvZ2luIChub24tYmxvY2tpbmcpXG4gICAgICAgICAgdm9pZCByZWZyZXNoUG9saWN5TGltaXRzKClcbiAgICAgICAgICAvLyBDbGVhciB1c2VyIGRhdGEgY2FjaGUgQkVGT1JFIEdyb3d0aEJvb2sgcmVmcmVzaCBzbyBpdCBwaWNrcyB1cCBmcmVzaCBjcmVkZW50aWFsc1xuICAgICAgICAgIHJlc2V0VXNlckNhY2hlKClcbiAgICAgICAgICAvLyBSZWZyZXNoIEdyb3d0aEJvb2sgYWZ0ZXIgbG9naW4gdG8gZ2V0IHVwZGF0ZWQgZmVhdHVyZSBmbGFncyAoZS5nLiwgZm9yIGNsYXVkZS5haSBNQ1BzKVxuICAgICAgICAgIHJlZnJlc2hHcm93dGhCb29rQWZ0ZXJBdXRoQ2hhbmdlKClcbiAgICAgICAgICAvLyBDbGVhciBhbnkgc3RhbGUgdHJ1c3RlZCBkZXZpY2UgdG9rZW4gZnJvbSBhIHByZXZpb3VzIGFjY291bnQgYmVmb3JlXG4gICAgICAgICAgLy8gcmUtZW5yb2xsaW5nIOKAlCBwcmV2ZW50cyBzZW5kaW5nIHRoZSBvbGQgdG9rZW4gb24gYnJpZGdlIGNhbGxzIHdoaWxlXG4gICAgICAgICAgLy8gdGhlIGFzeW5jIGVucm9sbFRydXN0ZWREZXZpY2UoKSBpcyBpbi1mbGlnaHQuXG4gICAgICAgICAgY2xlYXJUcnVzdGVkRGV2aWNlVG9rZW4oKVxuICAgICAgICAgIC8vIEVucm9sbCBhcyBhIHRydXN0ZWQgZGV2aWNlIGZvciBSZW1vdGUgQ29udHJvbCAoMTAtbWluIGZyZXNoLXNlc3Npb24gd2luZG93KVxuICAgICAgICAgIHZvaWQgZW5yb2xsVHJ1c3RlZERldmljZSgpXG4gICAgICAgICAgLy8gUmVzZXQga2lsbHN3aXRjaCBnYXRlIGNoZWNrcyBhbmQgcmUtcnVuIHdpdGggbmV3IG9yZ1xuICAgICAgICAgIHJlc2V0QnlwYXNzUGVybWlzc2lvbnNDaGVjaygpXG4gICAgICAgICAgY29uc3QgYXBwU3RhdGUgPSBjb250ZXh0LmdldEFwcFN0YXRlKClcbiAgICAgICAgICB2b2lkIGNoZWNrQW5kRGlzYWJsZUJ5cGFzc1Blcm1pc3Npb25zSWZOZWVkZWQoXG4gICAgICAgICAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICBjb250ZXh0LnNldEFwcFN0YXRlLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZmVhdHVyZSgnVFJBTlNDUklQVF9DTEFTU0lGSUVSJykpIHtcbiAgICAgICAgICAgIHJlc2V0QXV0b01vZGVHYXRlQ2hlY2soKVxuICAgICAgICAgICAgdm9pZCBjaGVja0FuZERpc2FibGVBdXRvTW9kZUlmTmVlZGVkKFxuICAgICAgICAgICAgICBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICAgIGNvbnRleHQuc2V0QXBwU3RhdGUsXG4gICAgICAgICAgICAgIGFwcFN0YXRlLmZhc3RNb2RlLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBJbmNyZW1lbnQgYXV0aFZlcnNpb24gdG8gdHJpZ2dlciByZS1mZXRjaGluZyBvZiBhdXRoLWRlcGVuZGVudCBkYXRhIGluIGhvb2tzIChlLmcuLCBNQ1Agc2VydmVycylcbiAgICAgICAgICBjb250ZXh0LnNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBhdXRoVmVyc2lvbjogcHJldi5hdXRoVmVyc2lvbiArIDEsXG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgb25Eb25lKHN1Y2Nlc3MgPyAnTG9naW4gc3VjY2Vzc2Z1bCcgOiAnTG9naW4gaW50ZXJydXB0ZWQnKVxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpbihwcm9wczoge1xuICBvbkRvbmU6IChzdWNjZXNzOiBib29sZWFuLCBtYWluTG9vcE1vZGVsOiBzdHJpbmcpID0+IHZvaWRcbiAgc3RhcnRpbmdNZXNzYWdlPzogc3RyaW5nXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgbWFpbkxvb3BNb2RlbCA9IHVzZU1haW5Mb29wTW9kZWwoKVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJMb2dpblwiXG4gICAgICBvbkNhbmNlbD17KCkgPT4gcHJvcHMub25Eb25lKGZhbHNlLCBtYWluTG9vcE1vZGVsKX1cbiAgICAgIGNvbG9yPVwicGVybWlzc2lvblwiXG4gICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgPFRleHQ+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxDb25zb2xlT0F1dGhGbG93XG4gICAgICAgIG9uRG9uZT17KCkgPT4gcHJvcHMub25Eb25lKHRydWUsIG1haW5Mb29wTW9kZWwpfVxuICAgICAgICBzdGFydGluZ01lc3NhZ2U9e3Byb3BzLnN0YXJ0aW5nTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsZUFBc0JBLEtBQ3BCQyxRQUNBQyxTQUMwQjtBQUMxQixTQUNFLDhCQUFDLFNBQ0MsUUFBUSxPQUFNQyxZQUFXO0FBQ3ZCRCxZQUFRRSxlQUFlO0FBR3ZCRixZQUFRRyxZQUFZQyxvQkFBb0I7QUFDeEMsUUFBSUgsU0FBUztBQUdYSSxxQkFBZTtBQUVmLFdBQUtDLDZCQUE2QjtBQUVsQyxXQUFLQyxvQkFBb0I7QUFFekJDLHFCQUFlO0FBRWZDLHVDQUFpQztBQUlqQ0MsOEJBQXdCO0FBRXhCLFdBQUtDLG9CQUFvQjtBQUV6QkMsa0NBQTRCO0FBQzVCLFlBQU1DLFdBQVdiLFFBQVFjLFlBQVk7QUFDckMsV0FBS0MseUNBQ0hGLFNBQVNHLHVCQUNUaEIsUUFBUWlCLFdBQ1Y7QUFDQSxVQUFJQyxRQUFRLHVCQUF1QixHQUFHO0FBQ3BDQywrQkFBdUI7QUFDdkIsYUFBS0MsZ0NBQ0hQLFNBQVNHLHVCQUNUaEIsUUFBUWlCLGFBQ1JKLFNBQVNRLFFBQ1g7TUFDRjtBQUVBckIsY0FBUWlCLFlBQVlLLFdBQVM7UUFDM0IsR0FBR0E7UUFDSEMsYUFBYUQsS0FBS0MsY0FBYztNQUNsQyxFQUFFO0lBQ0o7QUFDQXhCLFdBQU9FLFVBQVUscUJBQXFCLG1CQUFtQjtFQUMzRCxHQUFFO0FBR1I7QUFFTyxTQUFBdUIsTUFBQUMsT0FBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUlMLFFBQUFDLGdCQUFzQkMsaUJBQWlCO0FBQUMsTUFBQUM7QUFBQSxNQUFBSixFQUFBLENBQUEsTUFBQUUsaUJBQUFGLEVBQUEsQ0FBQSxNQUFBRCxPQUFBO0FBSzFCSyxTQUFBQSxNQUFNTCxNQUFLMUIsT0FBUSxPQUFPNkIsYUFBYTtBQUFDRixNQUFBLENBQUEsSUFBQUU7QUFBQUYsTUFBQSxDQUFBLElBQUFEO0FBQUFDLE1BQUEsQ0FBQSxJQUFBSTtFQUFBLE9BQUE7QUFBQUEsU0FBQUosRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBSztBQUFBLE1BQUFMLEVBQUEsQ0FBQSxNQUFBRSxpQkFBQUYsRUFBQSxDQUFBLE1BQUFELE9BQUE7QUFnQnhDTSxTQUFBQSxNQUFNTixNQUFLMUIsT0FBUSxNQUFNNkIsYUFBYTtBQUFDRixNQUFBLENBQUEsSUFBQUU7QUFBQUYsTUFBQSxDQUFBLElBQUFEO0FBQUFDLE1BQUEsQ0FBQSxJQUFBSztFQUFBLE9BQUE7QUFBQUEsU0FBQUwsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBTTtBQUFBLE1BQUFOLEVBQUEsQ0FBQSxNQUFBRCxNQUFBUSxtQkFBQVAsRUFBQSxDQUFBLE1BQUFLLElBQUE7QUFEakRDLFNBQUEsOEJBQUMsb0JBQ1MsUUFBQUQsSUFDUyxpQkFBQU4sTUFBS1EsaUJBQWdCO0FBQ3RDUCxNQUFBLENBQUEsSUFBQUQsTUFBQVE7QUFBQVAsTUFBQSxDQUFBLElBQUFLO0FBQUFMLE1BQUEsQ0FBQSxJQUFBTTtFQUFBLE9BQUE7QUFBQUEsU0FBQU4sRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUTtBQUFBLE1BQUFSLEVBQUEsQ0FBQSxNQUFBSSxNQUFBSixFQUFBLEVBQUEsTUFBQU0sSUFBQTtBQXBCSkUsU0FBQSw4QkFBQyxVQUNPLE9BQUEsU0FDSSxVQUFBSixJQUNKLE9BQUEsY0FDTSxZQUFBSyxTQWFaSCxFQUlGO0FBQVNOLE1BQUEsQ0FBQSxJQUFBSTtBQUFBSixNQUFBLEVBQUEsSUFBQU07QUFBQU4sTUFBQSxFQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLEVBQUE7RUFBQTtBQUFBLFNBckJUUTtBQXFCUztBQTVCTixTQUFBQyxNQUFBQyxXQUFBO0FBQUEsU0FZQ0EsVUFBU0MsVUFDUCw4QkFBQyxrQkFBSyxVQUFPRCxVQUFTRSxTQUFTLGdCQUFjLElBRTdDLDhCQUFDLDRCQUNRLFFBQUEsY0FDQyxTQUFBLGdCQUNDLFVBQUEsT0FDRyxhQUFBLFVBQVE7QUFFdkI7Ozs7QUF2R1Q7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BOzs7IiwKICAibmFtZXMiOiBbImNhbGwiLCAib25Eb25lIiwgImNvbnRleHQiLCAic3VjY2VzcyIsICJvbkNoYW5nZUFQSUtleSIsICJzZXRNZXNzYWdlcyIsICJzdHJpcFNpZ25hdHVyZUJsb2NrcyIsICJyZXNldENvc3RTdGF0ZSIsICJyZWZyZXNoUmVtb3RlTWFuYWdlZFNldHRpbmdzIiwgInJlZnJlc2hQb2xpY3lMaW1pdHMiLCAicmVzZXRVc2VyQ2FjaGUiLCAicmVmcmVzaEdyb3d0aEJvb2tBZnRlckF1dGhDaGFuZ2UiLCAiY2xlYXJUcnVzdGVkRGV2aWNlVG9rZW4iLCAiZW5yb2xsVHJ1c3RlZERldmljZSIsICJyZXNldEJ5cGFzc1Blcm1pc3Npb25zQ2hlY2siLCAiYXBwU3RhdGUiLCAiZ2V0QXBwU3RhdGUiLCAiY2hlY2tBbmREaXNhYmxlQnlwYXNzUGVybWlzc2lvbnNJZk5lZWRlZCIsICJ0b29sUGVybWlzc2lvbkNvbnRleHQiLCAic2V0QXBwU3RhdGUiLCAiZmVhdHVyZSIsICJyZXNldEF1dG9Nb2RlR2F0ZUNoZWNrIiwgImNoZWNrQW5kRGlzYWJsZUF1dG9Nb2RlSWZOZWVkZWQiLCAiZmFzdE1vZGUiLCAicHJldiIsICJhdXRoVmVyc2lvbiIsICJMb2dpbiIsICJwcm9wcyIsICIkIiwgIl9jIiwgIm1haW5Mb29wTW9kZWwiLCAidXNlTWFpbkxvb3BNb2RlbCIsICJ0MCIsICJ0MSIsICJ0MiIsICJzdGFydGluZ01lc3NhZ2UiLCAidDMiLCAiX3RlbXAiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSJdCn0K
