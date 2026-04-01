#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  GroveDialog,
  PrivacySettingsDialog,
  init_Grove
} from "./chunk-7JZ4EQ4Z.mjs";
import {
  getGroveNoticeConfig,
  getGroveSettings,
  init_grove,
  isQualifiedForGrove
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
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
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react
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
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/privacy-settings/privacy-settings.tsx
async function call(onDone) {
  const qualified = await isQualifiedForGrove();
  if (!qualified) {
    onDone(FALLBACK_MESSAGE);
    return null;
  }
  const [settingsResult, configResult] = await Promise.all([getGroveSettings(), getGroveNoticeConfig()]);
  if (!settingsResult.success) {
    onDone(FALLBACK_MESSAGE);
    return null;
  }
  const settings = settingsResult.data;
  const config = configResult.success ? configResult.data : null;
  async function onDoneWithDecision(decision) {
    if (decision === "escape" || decision === "defer") {
      onDone("Privacy settings dialog dismissed", {
        display: "system"
      });
      return;
    }
    await onDoneWithSettingsCheck();
  }
  async function onDoneWithSettingsCheck() {
    const updatedSettingsResult = await getGroveSettings();
    if (!updatedSettingsResult.success) {
      onDone("Unable to retrieve updated privacy settings", {
        display: "system"
      });
      return;
    }
    const updatedSettings = updatedSettingsResult.data;
    const groveStatus = updatedSettings.grove_enabled ? "true" : "false";
    onDone(`"Help improve Claude" set to ${groveStatus}.`);
    if (settings.grove_enabled !== null && settings.grove_enabled !== updatedSettings.grove_enabled) {
      logEvent("tengu_grove_policy_toggled", {
        state: updatedSettings.grove_enabled,
        location: "settings"
      });
    }
  }
  if (settings.grove_enabled !== null) {
    return /* @__PURE__ */ createElement(PrivacySettingsDialog, { settings, domainExcluded: config?.domain_excluded, onDone: onDoneWithSettingsCheck });
  }
  return /* @__PURE__ */ createElement(GroveDialog, { showIfAlreadyViewed: true, onDone: onDoneWithDecision, location: "settings" });
}
var FALLBACK_MESSAGE;
var init_privacy_settings = __esm({
  "src/commands/privacy-settings/privacy-settings.tsx"() {
    init_react();
    init_Grove();
    init_analytics();
    init_grove();
    FALLBACK_MESSAGE = "Review and manage your privacy settings at https://claude.ai/settings/data-privacy-controls";
  }
});
init_privacy_settings();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3ByaXZhY3ktc2V0dGluZ3MvcHJpdmFjeS1zZXR0aW5ncy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBHcm92ZURlY2lzaW9uLFxuICBHcm92ZURpYWxvZyxcbiAgUHJpdmFjeVNldHRpbmdzRGlhbG9nLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dyb3ZlL0dyb3ZlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0R3JvdmVOb3RpY2VDb25maWcsXG4gIGdldEdyb3ZlU2V0dGluZ3MsXG4gIGlzUXVhbGlmaWVkRm9yR3JvdmUsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9ncm92ZS5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcblxuY29uc3QgRkFMTEJBQ0tfTUVTU0FHRSA9XG4gICdSZXZpZXcgYW5kIG1hbmFnZSB5b3VyIHByaXZhY3kgc2V0dGluZ3MgYXQgaHR0cHM6Ly9jbGF1ZGUuYWkvc2V0dGluZ3MvZGF0YS1wcml2YWN5LWNvbnRyb2xzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZSB8IG51bGw+IHtcbiAgY29uc3QgcXVhbGlmaWVkID0gYXdhaXQgaXNRdWFsaWZpZWRGb3JHcm92ZSgpXG4gIGlmICghcXVhbGlmaWVkKSB7XG4gICAgb25Eb25lKEZBTExCQUNLX01FU1NBR0UpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IFtzZXR0aW5nc1Jlc3VsdCwgY29uZmlnUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRHcm92ZVNldHRpbmdzKCksXG4gICAgZ2V0R3JvdmVOb3RpY2VDb25maWcoKSxcbiAgXSlcbiAgLy8gSGlkZSBkaWFsb2cgb24gQVBJIGZhaWx1cmUgKGFmdGVyIHJldHJ5KVxuICBpZiAoIXNldHRpbmdzUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICBvbkRvbmUoRkFMTEJBQ0tfTUVTU0FHRSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NSZXN1bHQuZGF0YVxuICBjb25zdCBjb25maWcgPSBjb25maWdSZXN1bHQuc3VjY2VzcyA/IGNvbmZpZ1Jlc3VsdC5kYXRhIDogbnVsbFxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uRG9uZVdpdGhEZWNpc2lvbihkZWNpc2lvbjogR3JvdmVEZWNpc2lvbikge1xuICAgIGlmIChkZWNpc2lvbiA9PT0gJ2VzY2FwZScgfHwgZGVjaXNpb24gPT09ICdkZWZlcicpIHtcbiAgICAgIG9uRG9uZSgnUHJpdmFjeSBzZXR0aW5ncyBkaWFsb2cgZGlzbWlzc2VkJywge1xuICAgICAgICBkaXNwbGF5OiAnc3lzdGVtJyxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXdhaXQgb25Eb25lV2l0aFNldHRpbmdzQ2hlY2soKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Eb25lV2l0aFNldHRpbmdzQ2hlY2soKSB7XG4gICAgY29uc3QgdXBkYXRlZFNldHRpbmdzUmVzdWx0ID0gYXdhaXQgZ2V0R3JvdmVTZXR0aW5ncygpXG4gICAgaWYgKCF1cGRhdGVkU2V0dGluZ3NSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgb25Eb25lKCdVbmFibGUgdG8gcmV0cmlldmUgdXBkYXRlZCBwcml2YWN5IHNldHRpbmdzJywge1xuICAgICAgICBkaXNwbGF5OiAnc3lzdGVtJyxcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdXBkYXRlZFNldHRpbmdzID0gdXBkYXRlZFNldHRpbmdzUmVzdWx0LmRhdGFcbiAgICBjb25zdCBncm92ZVN0YXR1cyA9IHVwZGF0ZWRTZXR0aW5ncy5ncm92ZV9lbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgIG9uRG9uZShgXCJIZWxwIGltcHJvdmUgQ2xhdWRlXCIgc2V0IHRvICR7Z3JvdmVTdGF0dXN9LmApXG4gICAgaWYgKFxuICAgICAgc2V0dGluZ3MuZ3JvdmVfZW5hYmxlZCAhPT0gbnVsbCAmJlxuICAgICAgc2V0dGluZ3MuZ3JvdmVfZW5hYmxlZCAhPT0gdXBkYXRlZFNldHRpbmdzLmdyb3ZlX2VuYWJsZWRcbiAgICApIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9ncm92ZV9wb2xpY3lfdG9nZ2xlZCcsIHtcbiAgICAgICAgc3RhdGU6XG4gICAgICAgICAgdXBkYXRlZFNldHRpbmdzLmdyb3ZlX2VuYWJsZWQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgbG9jYXRpb246XG4gICAgICAgICAgJ3NldHRpbmdzJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBTaG93IHByaXZhY3kgc2V0dGluZ3MgZGlyZWN0bHkgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYWNjZXB0ZWQgdGhlXG4gIC8vIHRlcm1zLlxuICBpZiAoc2V0dGluZ3MuZ3JvdmVfZW5hYmxlZCAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJpdmFjeVNldHRpbmdzRGlhbG9nXG4gICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgZG9tYWluRXhjbHVkZWQ9e2NvbmZpZz8uZG9tYWluX2V4Y2x1ZGVkfVxuICAgICAgICBvbkRvbmU9e29uRG9uZVdpdGhTZXR0aW5nc0NoZWNrfVxuICAgICAgPjwvUHJpdmFjeVNldHRpbmdzRGlhbG9nPlxuICAgIClcbiAgfVxuXG4gIC8vIFNob3cgdGhlIEdyb3ZlRGlhbG9nIGZvciB1c2VycyB3aG8gaGF2ZW4ndCBhY2NlcHRlZCB0ZXJtcyB5ZXRcbiAgcmV0dXJuIChcbiAgICA8R3JvdmVEaWFsb2dcbiAgICAgIHNob3dJZkFscmVhZHlWaWV3ZWQ9e3RydWV9XG4gICAgICBvbkRvbmU9e29uRG9uZVdpdGhEZWNpc2lvbn1cbiAgICAgIGxvY2F0aW9uPXsnc2V0dGluZ3MnfVxuICAgIC8+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxlQUFzQkEsS0FDcEJDLFFBQ2lDO0FBQ2pDLFFBQU1DLFlBQVksTUFBTUMsb0JBQW9CO0FBQzVDLE1BQUksQ0FBQ0QsV0FBVztBQUNkRCxXQUFPRyxnQkFBZ0I7QUFDdkIsV0FBTztFQUNUO0FBRUEsUUFBTSxDQUFDQyxnQkFBZ0JDLFlBQVksSUFBSSxNQUFNQyxRQUFRQyxJQUFJLENBQ3ZEQyxpQkFBaUIsR0FDakJDLHFCQUFxQixDQUFDLENBQ3ZCO0FBRUQsTUFBSSxDQUFDTCxlQUFlTSxTQUFTO0FBQzNCVixXQUFPRyxnQkFBZ0I7QUFDdkIsV0FBTztFQUNUO0FBQ0EsUUFBTVEsV0FBV1AsZUFBZVE7QUFDaEMsUUFBTUMsU0FBU1IsYUFBYUssVUFBVUwsYUFBYU8sT0FBTztBQUUxRCxpQkFBZUUsbUJBQW1CQyxVQUF5QjtBQUN6RCxRQUFJQSxhQUFhLFlBQVlBLGFBQWEsU0FBUztBQUNqRGYsYUFBTyxxQ0FBcUM7UUFDMUNnQixTQUFTO01BQ1gsQ0FBQztBQUNEO0lBQ0Y7QUFDQSxVQUFNQyx3QkFBd0I7RUFDaEM7QUFFQSxpQkFBZUEsMEJBQTBCO0FBQ3ZDLFVBQU1DLHdCQUF3QixNQUFNVixpQkFBaUI7QUFDckQsUUFBSSxDQUFDVSxzQkFBc0JSLFNBQVM7QUFDbENWLGFBQU8sK0NBQStDO1FBQ3BEZ0IsU0FBUztNQUNYLENBQUM7QUFDRDtJQUNGO0FBQ0EsVUFBTUcsa0JBQWtCRCxzQkFBc0JOO0FBQzlDLFVBQU1RLGNBQWNELGdCQUFnQkUsZ0JBQWdCLFNBQVM7QUFDN0RyQixXQUFPLGdDQUFnQ29CLFdBQVcsR0FBRztBQUNyRCxRQUNFVCxTQUFTVSxrQkFBa0IsUUFDM0JWLFNBQVNVLGtCQUFrQkYsZ0JBQWdCRSxlQUMzQztBQUNBQyxlQUFTLDhCQUE4QjtRQUNyQ0MsT0FDRUosZ0JBQWdCRTtRQUNsQkcsVUFDRTtNQUNKLENBQUM7SUFDSDtFQUNGO0FBSUEsTUFBSWIsU0FBU1Usa0JBQWtCLE1BQU07QUFDbkMsV0FDRSw4QkFBQyx5QkFDQyxVQUNBLGdCQUFnQlIsUUFBUVksaUJBQ3hCLFFBQVFSLHlCQUNUO0VBRUw7QUFHQSxTQUNFLDhCQUFDLGVBQ0MscUJBQXFCLE1BQ3JCLFFBQVFILG9CQUNSLFVBQVUsWUFBVztBQUczQjtBQS9GQSxJQWlCTVg7QUFqQk47OztBQUNBO0FBS0E7QUFJQTtBQU9BLElBQU1BLG1CQUNKOzs7IiwKICAibmFtZXMiOiBbImNhbGwiLCAib25Eb25lIiwgInF1YWxpZmllZCIsICJpc1F1YWxpZmllZEZvckdyb3ZlIiwgIkZBTExCQUNLX01FU1NBR0UiLCAic2V0dGluZ3NSZXN1bHQiLCAiY29uZmlnUmVzdWx0IiwgIlByb21pc2UiLCAiYWxsIiwgImdldEdyb3ZlU2V0dGluZ3MiLCAiZ2V0R3JvdmVOb3RpY2VDb25maWciLCAic3VjY2VzcyIsICJzZXR0aW5ncyIsICJkYXRhIiwgImNvbmZpZyIsICJvbkRvbmVXaXRoRGVjaXNpb24iLCAiZGVjaXNpb24iLCAiZGlzcGxheSIsICJvbkRvbmVXaXRoU2V0dGluZ3NDaGVjayIsICJ1cGRhdGVkU2V0dGluZ3NSZXN1bHQiLCAidXBkYXRlZFNldHRpbmdzIiwgImdyb3ZlU3RhdHVzIiwgImdyb3ZlX2VuYWJsZWQiLCAibG9nRXZlbnQiLCAic3RhdGUiLCAibG9jYXRpb24iLCAiZG9tYWluX2V4Y2x1ZGVkIl0KfQo=
