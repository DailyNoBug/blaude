#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_useVoice,
  normalizeLanguageForSTT
} from "./chunk-AXS662PC.mjs";
import "./chunk-EA54UMLK.mjs";
import "./chunk-Y6HBFSUU.mjs";
import {
  getShortcutDisplay,
  init_changeDetector,
  init_shortcutFormat,
  settingsChangeDetector
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
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
import {
  init_voiceModeEnabled,
  isVoiceModeEnabled
} from "./chunk-KNCFJEES.mjs";
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
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getGlobalConfig,
  getInitialSettings,
  init_auth,
  init_config2 as init_config,
  init_settings2 as init_settings,
  isAnthropicAuthEnabled,
  saveGlobalConfig,
  updateSettingsForSource
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

// src/commands/voice/voice.ts
var LANG_HINT_MAX_SHOWS, call;
var init_voice = __esm({
  "src/commands/voice/voice.ts"() {
    init_useVoice();
    init_shortcutFormat();
    init_analytics();
    init_auth();
    init_config();
    init_changeDetector();
    init_settings();
    init_voiceModeEnabled();
    LANG_HINT_MAX_SHOWS = 2;
    call = async () => {
      if (!isVoiceModeEnabled()) {
        if (!isAnthropicAuthEnabled()) {
          return {
            type: "text",
            value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
          };
        }
        return {
          type: "text",
          value: "Voice mode is not available."
        };
      }
      const currentSettings = getInitialSettings();
      const isCurrentlyEnabled = currentSettings.voiceEnabled === true;
      if (isCurrentlyEnabled) {
        const result2 = updateSettingsForSource("userSettings", {
          voiceEnabled: false
        });
        if (result2.error) {
          return {
            type: "text",
            value: "Failed to update settings. Check your settings file for syntax errors."
          };
        }
        settingsChangeDetector.notifyChange("userSettings");
        logEvent("tengu_voice_toggled", { enabled: false });
        return {
          type: "text",
          value: "Voice mode disabled."
        };
      }
      const { isVoiceStreamAvailable } = await import("./voiceStreamSTT-ICRBXGQN.mjs");
      const { checkRecordingAvailability } = await import("./voice-MFPHSHOB.mjs");
      const recording = await checkRecordingAvailability();
      if (!recording.available) {
        return {
          type: "text",
          value: recording.reason ?? "Voice mode is not available in this environment."
        };
      }
      if (!isVoiceStreamAvailable()) {
        return {
          type: "text",
          value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
        };
      }
      const { checkVoiceDependencies, requestMicrophonePermission } = await import("./voice-MFPHSHOB.mjs");
      const deps = await checkVoiceDependencies();
      if (!deps.available) {
        const hint = deps.installCommand ? `
Install audio recording tools? Run: ${deps.installCommand}` : "\nInstall SoX manually for audio recording.";
        return {
          type: "text",
          value: `No audio recording tool found.${hint}`
        };
      }
      if (!await requestMicrophonePermission()) {
        let guidance;
        if (process.platform === "win32") {
          guidance = "Settings \u2192 Privacy \u2192 Microphone";
        } else if (process.platform === "linux") {
          guidance = "your system's audio settings";
        } else {
          guidance = "System Settings \u2192 Privacy & Security \u2192 Microphone";
        }
        return {
          type: "text",
          value: `Microphone access is denied. To enable it, go to ${guidance}, then run /voice again.`
        };
      }
      const result = updateSettingsForSource("userSettings", { voiceEnabled: true });
      if (result.error) {
        return {
          type: "text",
          value: "Failed to update settings. Check your settings file for syntax errors."
        };
      }
      settingsChangeDetector.notifyChange("userSettings");
      logEvent("tengu_voice_toggled", { enabled: true });
      const key = getShortcutDisplay("voice:pushToTalk", "Chat", "Space");
      const stt = normalizeLanguageForSTT(currentSettings.language);
      const cfg = getGlobalConfig();
      const langChanged = cfg.voiceLangHintLastLanguage !== stt.code;
      const priorCount = langChanged ? 0 : cfg.voiceLangHintShownCount ?? 0;
      const showHint = !stt.fellBackFrom && priorCount < LANG_HINT_MAX_SHOWS;
      let langNote = "";
      if (stt.fellBackFrom) {
        langNote = ` Note: "${stt.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
      } else if (showHint) {
        langNote = ` Dictation language: ${stt.code} (/config to change).`;
      }
      if (langChanged || showHint) {
        saveGlobalConfig((prev) => ({
          ...prev,
          voiceLangHintShownCount: priorCount + (showHint ? 1 : 0),
          voiceLangHintLastLanguage: stt.code
        }));
      }
      return {
        type: "text",
        value: `Voice mode enabled. Hold ${key} to record.${langNote}`
      };
    };
  }
});
init_voice();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3ZvaWNlL3ZvaWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBub3JtYWxpemVMYW5ndWFnZUZvclNUVCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVZvaWNlLmpzJ1xuaW1wb3J0IHsgZ2V0U2hvcnRjdXREaXNwbGF5IH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3Mvc2hvcnRjdXRGb3JtYXQuanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBpc0FudGhyb3BpY0F1dGhFbmFibGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IHNldHRpbmdzQ2hhbmdlRGV0ZWN0b3IgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9jaGFuZ2VEZXRlY3Rvci5qcydcbmltcG9ydCB7XG4gIGdldEluaXRpYWxTZXR0aW5ncyxcbiAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgaXNWb2ljZU1vZGVFbmFibGVkIH0gZnJvbSAnLi4vLi4vdm9pY2Uvdm9pY2VNb2RlRW5hYmxlZC5qcydcblxuY29uc3QgTEFOR19ISU5UX01BWF9TSE9XUyA9IDJcblxuZXhwb3J0IGNvbnN0IGNhbGw6IExvY2FsQ29tbWFuZENhbGwgPSBhc3luYyAoKSA9PiB7XG4gIC8vIENoZWNrIGF1dGggYW5kIGtpbGwtc3dpdGNoIGJlZm9yZSBhbGxvd2luZyB2b2ljZSBtb2RlXG4gIGlmICghaXNWb2ljZU1vZGVFbmFibGVkKCkpIHtcbiAgICAvLyBEaWZmZXJlbnRpYXRlOiBPQXV0aC1sZXNzIHVzZXJzIGdldCBhbiBhdXRoIGhpbnQsIGV2ZXJ5b25lIGVsc2VcbiAgICAvLyBnZXRzIG5vdGhpbmcgKGNvbW1hbmQgc2hvdWxkbid0IGJlIHJlYWNoYWJsZSB3aGVuIHRoZSBraWxsLXN3aXRjaCBpcyBvbikuXG4gICAgaWYgKCFpc0FudGhyb3BpY0F1dGhFbmFibGVkKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyBhcyBjb25zdCxcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgYSBDbGF1ZGUuYWkgYWNjb3VudC4gUGxlYXNlIHJ1biAvbG9naW4gdG8gc2lnbiBpbi4nLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgdmFsdWU6ICdWb2ljZSBtb2RlIGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgICB9XG4gIH1cblxuICBjb25zdCBjdXJyZW50U2V0dGluZ3MgPSBnZXRJbml0aWFsU2V0dGluZ3MoKVxuICBjb25zdCBpc0N1cnJlbnRseUVuYWJsZWQgPSBjdXJyZW50U2V0dGluZ3Mudm9pY2VFbmFibGVkID09PSB0cnVlXG5cbiAgLy8gVG9nZ2xlIE9GRiBcdTIwMTQgbm8gY2hlY2tzIG5lZWRlZFxuICBpZiAoaXNDdXJyZW50bHlFbmFibGVkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgIHZvaWNlRW5hYmxlZDogZmFsc2UsXG4gICAgfSlcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGV4dCcgYXMgY29uc3QsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgICdGYWlsZWQgdG8gdXBkYXRlIHNldHRpbmdzLiBDaGVjayB5b3VyIHNldHRpbmdzIGZpbGUgZm9yIHN5bnRheCBlcnJvcnMuJyxcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0dGluZ3NDaGFuZ2VEZXRlY3Rvci5ub3RpZnlDaGFuZ2UoJ3VzZXJTZXR0aW5ncycpXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3ZvaWNlX3RvZ2dsZWQnLCB7IGVuYWJsZWQ6IGZhbHNlIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyBhcyBjb25zdCxcbiAgICAgIHZhbHVlOiAnVm9pY2UgbW9kZSBkaXNhYmxlZC4nLFxuICAgIH1cbiAgfVxuXG4gIC8vIFRvZ2dsZSBPTiBcdTIwMTQgcnVuIHByZS1mbGlnaHQgY2hlY2tzIGZpcnN0XG4gIGNvbnN0IHsgaXNWb2ljZVN0cmVhbUF2YWlsYWJsZSB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi8uLi9zZXJ2aWNlcy92b2ljZVN0cmVhbVNUVC5qcydcbiAgKVxuICBjb25zdCB7IGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5IH0gPSBhd2FpdCBpbXBvcnQoJy4uLy4uL3NlcnZpY2VzL3ZvaWNlLmpzJylcblxuICAvLyBDaGVjayByZWNvcmRpbmcgYXZhaWxhYmlsaXR5IChtaWNyb3Bob25lIGFjY2VzcylcbiAgY29uc3QgcmVjb3JkaW5nID0gYXdhaXQgY2hlY2tSZWNvcmRpbmdBdmFpbGFiaWxpdHkoKVxuICBpZiAoIXJlY29yZGluZy5hdmFpbGFibGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgdmFsdWU6XG4gICAgICAgIHJlY29yZGluZy5yZWFzb24gPz8gJ1ZvaWNlIG1vZGUgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50LicsXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIEFQSSBrZXlcbiAgaWYgKCFpc1ZvaWNlU3RyZWFtQXZhaWxhYmxlKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgdmFsdWU6XG4gICAgICAgICdWb2ljZSBtb2RlIHJlcXVpcmVzIGEgQ2xhdWRlLmFpIGFjY291bnQuIFBsZWFzZSBydW4gL2xvZ2luIHRvIHNpZ24gaW4uJyxcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBmb3IgcmVjb3JkaW5nIHRvb2xzXG4gIGNvbnN0IHsgY2hlY2tWb2ljZURlcGVuZGVuY2llcywgcmVxdWVzdE1pY3JvcGhvbmVQZXJtaXNzaW9uIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgJy4uLy4uL3NlcnZpY2VzL3ZvaWNlLmpzJ1xuICApXG4gIGNvbnN0IGRlcHMgPSBhd2FpdCBjaGVja1ZvaWNlRGVwZW5kZW5jaWVzKClcbiAgaWYgKCFkZXBzLmF2YWlsYWJsZSkge1xuICAgIGNvbnN0IGhpbnQgPSBkZXBzLmluc3RhbGxDb21tYW5kXG4gICAgICA/IGBcXG5JbnN0YWxsIGF1ZGlvIHJlY29yZGluZyB0b29scz8gUnVuOiAke2RlcHMuaW5zdGFsbENvbW1hbmR9YFxuICAgICAgOiAnXFxuSW5zdGFsbCBTb1ggbWFudWFsbHkgZm9yIGF1ZGlvIHJlY29yZGluZy4nXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyBhcyBjb25zdCxcbiAgICAgIHZhbHVlOiBgTm8gYXVkaW8gcmVjb3JkaW5nIHRvb2wgZm91bmQuJHtoaW50fWAsXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvYmUgbWljIGFjY2VzcyBzbyB0aGUgT1MgcGVybWlzc2lvbiBkaWFsb2cgZmlyZXMgbm93IHJhdGhlciB0aGFuXG4gIC8vIG9uIHRoZSB1c2VyJ3MgZmlyc3QgaG9sZC10by10YWxrIGFjdGl2YXRpb24uXG4gIGlmICghKGF3YWl0IHJlcXVlc3RNaWNyb3Bob25lUGVybWlzc2lvbigpKSkge1xuICAgIGxldCBndWlkYW5jZTogc3RyaW5nXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAgIGd1aWRhbmNlID0gJ1NldHRpbmdzIFxcdTIxOTIgUHJpdmFjeSBcXHUyMTkyIE1pY3JvcGhvbmUnXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnKSB7XG4gICAgICBndWlkYW5jZSA9IFwieW91ciBzeXN0ZW0ncyBhdWRpbyBzZXR0aW5nc1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIGd1aWRhbmNlID0gJ1N5c3RlbSBTZXR0aW5ncyBcXHUyMTkyIFByaXZhY3kgJiBTZWN1cml0eSBcXHUyMTkyIE1pY3JvcGhvbmUnXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcgYXMgY29uc3QsXG4gICAgICB2YWx1ZTogYE1pY3JvcGhvbmUgYWNjZXNzIGlzIGRlbmllZC4gVG8gZW5hYmxlIGl0LCBnbyB0byAke2d1aWRhbmNlfSwgdGhlbiBydW4gL3ZvaWNlIGFnYWluLmAsXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsIGNoZWNrcyBwYXNzZWQgXHUyMDE0IGVuYWJsZSB2b2ljZVxuICBjb25zdCByZXN1bHQgPSB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywgeyB2b2ljZUVuYWJsZWQ6IHRydWUgfSlcbiAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcgYXMgY29uc3QsXG4gICAgICB2YWx1ZTpcbiAgICAgICAgJ0ZhaWxlZCB0byB1cGRhdGUgc2V0dGluZ3MuIENoZWNrIHlvdXIgc2V0dGluZ3MgZmlsZSBmb3Igc3ludGF4IGVycm9ycy4nLFxuICAgIH1cbiAgfVxuICBzZXR0aW5nc0NoYW5nZURldGVjdG9yLm5vdGlmeUNoYW5nZSgndXNlclNldHRpbmdzJylcbiAgbG9nRXZlbnQoJ3Rlbmd1X3ZvaWNlX3RvZ2dsZWQnLCB7IGVuYWJsZWQ6IHRydWUgfSlcbiAgY29uc3Qga2V5ID0gZ2V0U2hvcnRjdXREaXNwbGF5KCd2b2ljZTpwdXNoVG9UYWxrJywgJ0NoYXQnLCAnU3BhY2UnKVxuICBjb25zdCBzdHQgPSBub3JtYWxpemVMYW5ndWFnZUZvclNUVChjdXJyZW50U2V0dGluZ3MubGFuZ3VhZ2UpXG4gIGNvbnN0IGNmZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIC8vIFJlc2V0IHRoZSBoaW50IGNvdW50ZXIgd2hlbmV2ZXIgdGhlIHJlc29sdmVkIFNUVCBsYW5ndWFnZSBjaGFuZ2VzXG4gIC8vIChpbmNsdWRpbmcgZmlyc3QtZXZlciBlbmFibGUsIHdoZXJlIGxhc3RMYW5ndWFnZSBpcyB1bmRlZmluZWQpLlxuICBjb25zdCBsYW5nQ2hhbmdlZCA9IGNmZy52b2ljZUxhbmdIaW50TGFzdExhbmd1YWdlICE9PSBzdHQuY29kZVxuICBjb25zdCBwcmlvckNvdW50ID0gbGFuZ0NoYW5nZWQgPyAwIDogKGNmZy52b2ljZUxhbmdIaW50U2hvd25Db3VudCA/PyAwKVxuICBjb25zdCBzaG93SGludCA9ICFzdHQuZmVsbEJhY2tGcm9tICYmIHByaW9yQ291bnQgPCBMQU5HX0hJTlRfTUFYX1NIT1dTXG4gIGxldCBsYW5nTm90ZSA9ICcnXG4gIGlmIChzdHQuZmVsbEJhY2tGcm9tKSB7XG4gICAgbGFuZ05vdGUgPSBgIE5vdGU6IFwiJHtzdHQuZmVsbEJhY2tGcm9tfVwiIGlzIG5vdCBhIHN1cHBvcnRlZCBkaWN0YXRpb24gbGFuZ3VhZ2U7IHVzaW5nIEVuZ2xpc2guIENoYW5nZSBpdCB2aWEgL2NvbmZpZy5gXG4gIH0gZWxzZSBpZiAoc2hvd0hpbnQpIHtcbiAgICBsYW5nTm90ZSA9IGAgRGljdGF0aW9uIGxhbmd1YWdlOiAke3N0dC5jb2RlfSAoL2NvbmZpZyB0byBjaGFuZ2UpLmBcbiAgfVxuICBpZiAobGFuZ0NoYW5nZWQgfHwgc2hvd0hpbnQpIHtcbiAgICBzYXZlR2xvYmFsQ29uZmlnKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB2b2ljZUxhbmdIaW50U2hvd25Db3VudDogcHJpb3JDb3VudCArIChzaG93SGludCA/IDEgOiAwKSxcbiAgICAgIHZvaWNlTGFuZ0hpbnRMYXN0TGFuZ3VhZ2U6IHN0dC5jb2RlLFxuICAgIH0pKVxuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgIHZhbHVlOiBgVm9pY2UgbW9kZSBlbmFibGVkLiBIb2xkICR7a2V5fSB0byByZWNvcmQuJHtsYW5nTm90ZX1gLFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFhTSxxQkFFTztBQWZiO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUEsSUFBTSxzQkFBc0I7QUFFckIsSUFBTSxPQUF5QixZQUFZO0FBRWhELFVBQUksQ0FBQyxtQkFBbUIsR0FBRztBQUd6QixZQUFJLENBQUMsdUJBQXVCLEdBQUc7QUFDN0IsaUJBQU87QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQ0U7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUVBLFlBQU0sa0JBQWtCLG1CQUFtQjtBQUMzQyxZQUFNLHFCQUFxQixnQkFBZ0IsaUJBQWlCO0FBRzVELFVBQUksb0JBQW9CO0FBQ3RCLGNBQU1BLFVBQVMsd0JBQXdCLGdCQUFnQjtBQUFBLFVBQ3JELGNBQWM7QUFBQSxRQUNoQixDQUFDO0FBQ0QsWUFBSUEsUUFBTyxPQUFPO0FBQ2hCLGlCQUFPO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUNFO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFDQSwrQkFBdUIsYUFBYSxjQUFjO0FBQ2xELGlCQUFTLHVCQUF1QixFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ2xELGVBQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUdBLFlB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
