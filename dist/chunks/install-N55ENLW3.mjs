#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StatusIcon,
  init_StatusIcon
} from "./chunk-KE4CZNPY.mjs";
import {
  checkInstall,
  cleanupNpmInstallations,
  cleanupShellAliases,
  init_nativeInstaller,
  installLatest
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
  init_react_compiler_runtime,
  render
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getInitialSettings,
  init_settings2 as init_settings,
  updateSettingsForSource
} from "./chunk-JQ55XPLZ.mjs";
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
import {
  env,
  init_env
} from "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
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
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/commands/install.tsx
init_react_compiler_runtime();
init_react();
init_analytics();
init_StatusIcon();
init_ink();
init_debug();
init_env();
init_errors();
init_nativeInstaller();
init_settings();
import { homedir } from "node:os";
import { join } from "node:path";
function getInstallationPath() {
  const isWindows = env.platform === "win32";
  const homeDir = homedir();
  if (isWindows) {
    const windowsPath = join(homeDir, ".local", "bin", "claude.exe");
    return windowsPath.replace(/\//g, "\\");
  }
  return "~/.local/bin/claude";
}
function SetupNotes(t0) {
  const $ = c(5);
  const {
    messages
  } = t0;
  if (messages.length === 0) {
    return null;
  }
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, /* @__PURE__ */ react_default.createElement(StatusIcon, { status: "warning", withSpace: true }), "Setup notes:"));
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== messages) {
    t2 = messages.map(_temp);
    $[1] = messages;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 0, marginBottom: 1 }, t1, t2);
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp(message, index) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: index, marginLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2022 ", message));
}
function Install({
  onDone,
  force,
  target
}) {
  const [state, setState] = useState({
    type: "checking"
  });
  useEffect(() => {
    async function run() {
      try {
        logForDebugging(`Install: Starting installation process (force=${force}, target=${target})`);
        const channelOrVersion = target || getInitialSettings()?.autoUpdatesChannel || "latest";
        setState({
          type: "installing",
          version: channelOrVersion
        });
        logForDebugging(`Install: Calling installLatest(channelOrVersion=${channelOrVersion}, forceReinstall=${force})`);
        const result = await installLatest(channelOrVersion, force);
        logForDebugging(`Install: installLatest returned version=${result.latestVersion}, wasUpdated=${result.wasUpdated}, lockFailed=${result.lockFailed}`);
        if (result.lockFailed) {
          throw new Error("Could not install - another process is currently installing Blaude. Please try again in a moment.");
        }
        if (!result.latestVersion) {
          logForDebugging("Install: Failed to retrieve version information during install", {
            level: "error"
          });
        }
        if (!result.wasUpdated) {
          logForDebugging("Install: Already up to date");
        }
        setState({
          type: "setting-up"
        });
        const setupMessages = await checkInstall(true);
        logForDebugging(`Install: Setup launcher completed with ${setupMessages.length} messages`);
        if (setupMessages.length > 0) {
          setupMessages.forEach((msg) => logForDebugging(`Install: Setup message: ${msg.message}`));
        }
        logForDebugging("Install: Cleaning up npm installations after successful install");
        const {
          removed,
          errors,
          warnings
        } = await cleanupNpmInstallations();
        if (removed > 0) {
          logForDebugging(`Cleaned up ${removed} npm installation(s)`);
        }
        if (errors.length > 0) {
          logForDebugging(`Cleanup errors: ${errors.join(", ")}`);
        }
        const aliasMessages = await cleanupShellAliases();
        if (aliasMessages.length > 0) {
          logForDebugging(`Shell alias cleanup: ${aliasMessages.map((m) => m.message).join("; ")}`);
        }
        logEvent("tengu_claude_install_command", {
          has_version: result.latestVersion ? 1 : 0,
          forced: force ? 1 : 0
        });
        if (target === "latest" || target === "stable") {
          updateSettingsForSource("userSettings", {
            autoUpdatesChannel: target
          });
          logForDebugging(`Install: Saved autoUpdatesChannel=${target} to user settings`);
        }
        const allWarnings = [...warnings, ...aliasMessages.map((m_0) => m_0.message)];
        if (setupMessages.length > 0) {
          setState({
            type: "set-up",
            messages: setupMessages.map((m_1) => m_1.message)
          });
          setTimeout(setState, 2e3, {
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: [...setupMessages.map((m_2) => m_2.message), ...allWarnings]
          });
        } else {
          logForDebugging("Install: Shell PATH already configured");
          setState({
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: allWarnings.length > 0 ? allWarnings : void 0
          });
        }
      } catch (error) {
        logForDebugging(`Install command failed: ${error}`, {
          level: "error"
        });
        setState({
          type: "error",
          message: errorMessage(error)
        });
      }
    }
    void run();
  }, [force, target]);
  useEffect(() => {
    if (state.type === "success") {
      setTimeout(onDone, 2e3, "Blaude installation completed successfully", {
        display: "system"
      });
    } else if (state.type === "error") {
      setTimeout(onDone, 3e3, "Blaude installation failed", {
        display: "system"
      });
    }
  }, [state, onDone]);
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, state.type === "checking" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Checking installation status..."), state.type === "cleaning-npm" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Cleaning up old npm installations..."), state.type === "installing" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Installing Blaude native build ", state.version, "..."), state.type === "setting-up" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Setting up launcher and shell integration..."), state.type === "set-up" && /* @__PURE__ */ react_default.createElement(SetupNotes, { messages: state.messages }), state.type === "success" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(StatusIcon, { status: "success", withSpace: true }), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success", bold: true }, "Blaude successfully installed!")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, flexDirection: "column", gap: 1 }, state.version !== "current" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Version: "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, state.version)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Location: "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "text" }, getInstallationPath()))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Next: Run "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude", bold: true }, "blaude --help"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " to get started"))), state.setupMessages && /* @__PURE__ */ react_default.createElement(SetupNotes, { messages: state.setupMessages })), state.type === "error" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(StatusIcon, { status: "error", withSpace: true }), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Installation failed")), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, state.message), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Try running with --force to override checks"))));
}
var install = {
  type: "local-jsx",
  name: "install",
  description: "Install Blaude native build",
  argumentHint: "[options]",
  async call(onDone, _context, args) {
    const force = args.includes("--force");
    const nonFlagArgs = args.filter((arg) => !arg.startsWith("--"));
    const target = nonFlagArgs[0];
    const {
      unmount
    } = await render(/* @__PURE__ */ react_default.createElement(Install, { onDone: (result, options) => {
      unmount();
      onDone(result, options);
    }, force, target }));
  }
};
export {
  install
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnbm9kZTpvcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJ3NyYy9jb21tYW5kcy5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IFN0YXR1c0ljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vU3RhdHVzSWNvbi5qcydcbmltcG9ydCB7IEJveCwgcmVuZGVyLCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi91dGlscy9lbnYuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQge1xuICBjaGVja0luc3RhbGwsXG4gIGNsZWFudXBOcG1JbnN0YWxsYXRpb25zLFxuICBjbGVhbnVwU2hlbGxBbGlhc2VzLFxuICBpbnN0YWxsTGF0ZXN0LFxufSBmcm9tICcuLi91dGlscy9uYXRpdmVJbnN0YWxsZXIvaW5kZXguanMnXG5pbXBvcnQge1xuICBnZXRJbml0aWFsU2V0dGluZ3MsXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlLFxufSBmcm9tICcuLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcblxuaW50ZXJmYWNlIEluc3RhbGxQcm9wcyB7XG4gIG9uRG9uZTogKHJlc3VsdDogc3RyaW5nLCBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSkgPT4gdm9pZFxuICBmb3JjZT86IGJvb2xlYW5cbiAgdGFyZ2V0Pzogc3RyaW5nIC8vICdsYXRlc3QnLCAnc3RhYmxlJywgb3IgdmVyc2lvbiBsaWtlICcxLjAuMzQnXG59XG5cbnR5cGUgSW5zdGFsbFN0YXRlID1cbiAgfCB7IHR5cGU6ICdjaGVja2luZycgfVxuICB8IHsgdHlwZTogJ2NsZWFuaW5nLW5wbScgfVxuICB8IHsgdHlwZTogJ2luc3RhbGxpbmcnOyB2ZXJzaW9uOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogJ3NldHRpbmctdXAnIH1cbiAgfCB7IHR5cGU6ICdzZXQtdXAnOyBtZXNzYWdlczogc3RyaW5nW10gfVxuICB8IHsgdHlwZTogJ3N1Y2Nlc3MnOyB2ZXJzaW9uOiBzdHJpbmc7IHNldHVwTWVzc2FnZXM/OiBzdHJpbmdbXSB9XG4gIHwgeyB0eXBlOiAnZXJyb3InOyBtZXNzYWdlOiBzdHJpbmc7IHdhcm5pbmdzPzogc3RyaW5nW10gfVxuXG5mdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25QYXRoKCk6IHN0cmluZyB7XG4gIGNvbnN0IGlzV2luZG93cyA9IGVudi5wbGF0Zm9ybSA9PT0gJ3dpbjMyJ1xuICBjb25zdCBob21lRGlyID0gaG9tZWRpcigpXG5cbiAgaWYgKGlzV2luZG93cykge1xuICAgIC8vIENvbnZlcnQgdG8gV2luZG93cy1zdHlsZSBwYXRoXG4gICAgY29uc3Qgd2luZG93c1BhdGggPSBqb2luKGhvbWVEaXIsICcubG9jYWwnLCAnYmluJywgJ2NsYXVkZS5leGUnKVxuICAgIC8vIFJlcGxhY2UgZm9yd2FyZCBzbGFzaGVzIHdpdGggYmFja3NsYXNoZXMgZm9yIFdpbmRvd3MgZGlzcGxheVxuICAgIHJldHVybiB3aW5kb3dzUGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICB9XG5cbiAgcmV0dXJuICd+Ly5sb2NhbC9iaW4vY2xhdWRlJ1xufVxuXG5mdW5jdGlvbiBTZXR1cE5vdGVzKHsgbWVzc2FnZXMgfTogeyBtZXNzYWdlczogc3RyaW5nW10gfSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmIChtZXNzYWdlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezB9IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICA8U3RhdHVzSWNvbiBzdGF0dXM9XCJ3YXJuaW5nXCIgd2l0aFNwYWNlIC8+XG4gICAgICAgICAgU2V0dXAgbm90ZXM6XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fSBtYXJnaW5MZWZ0PXsyfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7igKIge21lc3NhZ2V9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIEluc3RhbGwoeyBvbkRvbmUsIGZvcmNlLCB0YXJnZXQgfTogSW5zdGFsbFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxJbnN0YWxsU3RhdGU+KHsgdHlwZTogJ2NoZWNraW5nJyB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBJbnN0YWxsOiBTdGFydGluZyBpbnN0YWxsYXRpb24gcHJvY2VzcyAoZm9yY2U9JHtmb3JjZX0sIHRhcmdldD0ke3RhcmdldH0pYCxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIEluc3RhbGwgbmF0aXZlIGJ1aWxkIGZpcnN0XG4gICAgICAgIGNvbnN0IGNoYW5uZWxPclZlcnNpb24gPVxuICAgICAgICAgIHRhcmdldCB8fCBnZXRJbml0aWFsU2V0dGluZ3MoKT8uYXV0b1VwZGF0ZXNDaGFubmVsIHx8ICdsYXRlc3QnXG4gICAgICAgIHNldFN0YXRlKHsgdHlwZTogJ2luc3RhbGxpbmcnLCB2ZXJzaW9uOiBjaGFubmVsT3JWZXJzaW9uIH0pXG5cbiAgICAgICAgLy8gUGFzcyBmb3JjZSBmbGFnIHRvIHRyaWdnZXIgcmVpbnN0YWxsIGV2ZW4gaWYgdXAgdG8gZGF0ZVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYEluc3RhbGw6IENhbGxpbmcgaW5zdGFsbExhdGVzdChjaGFubmVsT3JWZXJzaW9uPSR7Y2hhbm5lbE9yVmVyc2lvbn0sIGZvcmNlUmVpbnN0YWxsPSR7Zm9yY2V9KWAsXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaW5zdGFsbExhdGVzdChjaGFubmVsT3JWZXJzaW9uLCBmb3JjZSlcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBJbnN0YWxsOiBpbnN0YWxsTGF0ZXN0IHJldHVybmVkIHZlcnNpb249JHtyZXN1bHQubGF0ZXN0VmVyc2lvbn0sIHdhc1VwZGF0ZWQ9JHtyZXN1bHQud2FzVXBkYXRlZH0sIGxvY2tGYWlsZWQ9JHtyZXN1bHQubG9ja0ZhaWxlZH1gLFxuICAgICAgICApXG5cbiAgICAgICAgLy8gQ2hlY2sgc3BlY2lmaWNhbGx5IGZvciBsb2NrIGZhaWx1cmVcbiAgICAgICAgaWYgKHJlc3VsdC5sb2NrRmFpbGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NvdWxkIG5vdCBpbnN0YWxsIC0gYW5vdGhlciBwcm9jZXNzIGlzIGN1cnJlbnRseSBpbnN0YWxsaW5nIENsYXVkZS4gUGxlYXNlIHRyeSBhZ2FpbiBpbiBhIG1vbWVudC4nLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGNvdWxkbid0IGdldCB0aGUgdmVyc2lvbiwgdGhlcmUgbWlnaHQgYmUgYW4gaXNzdWVcbiAgICAgICAgaWYgKCFyZXN1bHQubGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICdJbnN0YWxsOiBGYWlsZWQgdG8gcmV0cmlldmUgdmVyc2lvbiBpbmZvcm1hdGlvbiBkdXJpbmcgaW5zdGFsbCcsXG4gICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQud2FzVXBkYXRlZCkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnSW5zdGFsbDogQWxyZWFkeSB1cCB0byBkYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB1cCBsYXVuY2hlciBhbmQgc2hlbGwgaW50ZWdyYXRpb25cbiAgICAgICAgc2V0U3RhdGUoeyB0eXBlOiAnc2V0dGluZy11cCcgfSlcbiAgICAgICAgY29uc3Qgc2V0dXBNZXNzYWdlcyA9IGF3YWl0IGNoZWNrSW5zdGFsbCh0cnVlKVxuXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgSW5zdGFsbDogU2V0dXAgbGF1bmNoZXIgY29tcGxldGVkIHdpdGggJHtzZXR1cE1lc3NhZ2VzLmxlbmd0aH0gbWVzc2FnZXNgLFxuICAgICAgICApXG4gICAgICAgIGlmIChzZXR1cE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXR1cE1lc3NhZ2VzLmZvckVhY2gobXNnID0+XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEluc3RhbGw6IFNldHVwIG1lc3NhZ2U6ICR7bXNnLm1lc3NhZ2V9YCksXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm93IHRoYXQgbmF0aXZlIGluc3RhbGxhdGlvbiBzdWNjZWVkZWQsIGNsZWFuIHVwIG9sZCBucG0gaW5zdGFsbGF0aW9uc1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgJ0luc3RhbGw6IENsZWFuaW5nIHVwIG5wbSBpbnN0YWxsYXRpb25zIGFmdGVyIHN1Y2Nlc3NmdWwgaW5zdGFsbCcsXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgeyByZW1vdmVkLCBlcnJvcnMsIHdhcm5pbmdzIH0gPSBhd2FpdCBjbGVhbnVwTnBtSW5zdGFsbGF0aW9ucygpXG5cbiAgICAgICAgaWYgKHJlbW92ZWQgPiAwKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBDbGVhbmVkIHVwICR7cmVtb3ZlZH0gbnBtIGluc3RhbGxhdGlvbihzKWApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYENsZWFudXAgZXJyb3JzOiAke2Vycm9ycy5qb2luKCcsICcpfWApXG4gICAgICAgICAgLy8gQ29udGludWUgZGVzcGl0ZSBjbGVhbnVwIGVycm9ycyAtIG5hdGl2ZSBpbnN0YWxsIGFscmVhZHkgc3VjY2VlZGVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbGVhbiB1cCBvbGQgc2hlbGwgYWxpYXNlc1xuICAgICAgICBjb25zdCBhbGlhc01lc3NhZ2VzID0gYXdhaXQgY2xlYW51cFNoZWxsQWxpYXNlcygpXG4gICAgICAgIGlmIChhbGlhc01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgU2hlbGwgYWxpYXMgY2xlYW51cDogJHthbGlhc01lc3NhZ2VzLm1hcChtID0+IG0ubWVzc2FnZSkuam9pbignOyAnKX1gLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZyBzdWNjZXNzIGV2ZW50XG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVfaW5zdGFsbF9jb21tYW5kJywge1xuICAgICAgICAgIGhhc192ZXJzaW9uOiByZXN1bHQubGF0ZXN0VmVyc2lvbiA/IDEgOiAwLFxuICAgICAgICAgIGZvcmNlZDogZm9yY2UgPyAxIDogMCxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBJZiB1c2VyIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGEgY2hhbm5lbCwgc2F2ZSBpdCB0byBzZXR0aW5nc1xuICAgICAgICBpZiAodGFyZ2V0ID09PSAnbGF0ZXN0JyB8fCB0YXJnZXQgPT09ICdzdGFibGUnKSB7XG4gICAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogdGFyZ2V0LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYEluc3RhbGw6IFNhdmVkIGF1dG9VcGRhdGVzQ2hhbm5lbD0ke3RhcmdldH0gdG8gdXNlciBzZXR0aW5nc2AsXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tYmluZSBhbGwgd2FybmluZy9pbmZvIG1lc3NhZ2VzIChjb252ZXJ0IFNldHVwTWVzc2FnZSB0byBzdHJpbmcpXG4gICAgICAgIGNvbnN0IGFsbFdhcm5pbmdzID0gWy4uLndhcm5pbmdzLCAuLi5hbGlhc01lc3NhZ2VzLm1hcChtID0+IG0ubWVzc2FnZSldXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgd2VyZSBhbnkgc2V0dXAgZXJyb3JzIG9yIG5vdGVzXG4gICAgICAgIGlmIChzZXR1cE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICB0eXBlOiAnc2V0LXVwJyxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBzZXR1cE1lc3NhZ2VzLm1hcChtID0+IG0ubWVzc2FnZSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBTdGlsbCBtYXJrIGFzIHN1Y2Nlc3MgYnV0IHNob3cgYm90aCBzZXR1cCBtZXNzYWdlcyBhbmQgY2xlYW51cCB3YXJuaW5nc1xuICAgICAgICAgIHNldFRpbWVvdXQoc2V0U3RhdGUsIDIwMDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyBhcyBjb25zdCxcbiAgICAgICAgICAgIHZlcnNpb246IHJlc3VsdC5sYXRlc3RWZXJzaW9uIHx8ICdjdXJyZW50JyxcbiAgICAgICAgICAgIHNldHVwTWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgLi4uc2V0dXBNZXNzYWdlcy5tYXAobSA9PiBtLm1lc3NhZ2UpLFxuICAgICAgICAgICAgICAuLi5hbGxXYXJuaW5ncyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBzZXR1cCBtZXNzYWdlcywgZ28gc3RyYWlnaHQgdG8gc3VjY2VzcyAoYnV0IHN0aWxsIHNob3cgY2xlYW51cCB3YXJuaW5ncyBpZiBhbnkpXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdJbnN0YWxsOiBTaGVsbCBQQVRIIGFscmVhZHkgY29uZmlndXJlZCcpXG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdmVyc2lvbjogcmVzdWx0LmxhdGVzdFZlcnNpb24gfHwgJ2N1cnJlbnQnLFxuICAgICAgICAgICAgc2V0dXBNZXNzYWdlczogYWxsV2FybmluZ3MubGVuZ3RoID4gMCA/IGFsbFdhcm5pbmdzIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgSW5zdGFsbCBjb21tYW5kIGZhaWxlZDogJHtlcnJvcn1gLCB7XG4gICAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZShlcnJvciksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdm9pZCBydW4oKVxuICB9LCBbZm9yY2UsIHRhcmdldF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAvLyBHaXZlIHN1Y2Nlc3MgbWVzc2FnZSB0aW1lIHRvIHJlbmRlciBiZWZvcmUgZXhpdGluZ1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgb25Eb25lLFxuICAgICAgICAyMDAwLFxuICAgICAgICAnQ2xhdWRlIENvZGUgaW5zdGFsbGF0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChzdGF0ZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBHaXZlIGVycm9yIG1lc3NhZ2UgdGltZSB0byByZW5kZXIgYmVmb3JlIGV4aXRpbmdcbiAgICAgIHNldFRpbWVvdXQob25Eb25lLCAzMDAwLCAnQ2xhdWRlIENvZGUgaW5zdGFsbGF0aW9uIGZhaWxlZCcsIHtcbiAgICAgICAgZGlzcGxheTogJ3N5c3RlbScgYXMgY29uc3QsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3N0YXRlLCBvbkRvbmVdKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgIHtzdGF0ZS50eXBlID09PSAnY2hlY2tpbmcnICYmIChcbiAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj5DaGVja2luZyBpbnN0YWxsYXRpb24gc3RhdHVzLi4uPC9UZXh0PlxuICAgICAgKX1cblxuICAgICAge3N0YXRlLnR5cGUgPT09ICdjbGVhbmluZy1ucG0nICYmIChcbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+Q2xlYW5pbmcgdXAgb2xkIG5wbSBpbnN0YWxsYXRpb25zLi4uPC9UZXh0PlxuICAgICAgKX1cblxuICAgICAge3N0YXRlLnR5cGUgPT09ICdpbnN0YWxsaW5nJyAmJiAoXG4gICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+XG4gICAgICAgICAgSW5zdGFsbGluZyBDbGF1ZGUgQ29kZSBuYXRpdmUgYnVpbGQge3N0YXRlLnZlcnNpb259Li4uXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHtzdGF0ZS50eXBlID09PSAnc2V0dGluZy11cCcgJiYgKFxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPlNldHRpbmcgdXAgbGF1bmNoZXIgYW5kIHNoZWxsIGludGVncmF0aW9uLi4uPC9UZXh0PlxuICAgICAgKX1cblxuICAgICAge3N0YXRlLnR5cGUgPT09ICdzZXQtdXAnICYmIDxTZXR1cE5vdGVzIG1lc3NhZ2VzPXtzdGF0ZS5tZXNzYWdlc30gLz59XG5cbiAgICAgIHtzdGF0ZS50eXBlID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8U3RhdHVzSWNvbiBzdGF0dXM9XCJzdWNjZXNzXCIgd2l0aFNwYWNlIC8+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIiBib2xkPlxuICAgICAgICAgICAgICBDbGF1ZGUgQ29kZSBzdWNjZXNzZnVsbHkgaW5zdGFsbGVkIVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgICAgICB7c3RhdGUudmVyc2lvbiAhPT0gJ2N1cnJlbnQnICYmIChcbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5WZXJzaW9uOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj57c3RhdGUudmVyc2lvbn08L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkxvY2F0aW9uOiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwidGV4dFwiPntnZXRJbnN0YWxsYXRpb25QYXRoKCl9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+TmV4dDogUnVuIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIiBib2xkPlxuICAgICAgICAgICAgICAgIGNsYXVkZSAtLWhlbHBcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gdG8gZ2V0IHN0YXJ0ZWQ8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7c3RhdGUuc2V0dXBNZXNzYWdlcyAmJiA8U2V0dXBOb3RlcyBtZXNzYWdlcz17c3RhdGUuc2V0dXBNZXNzYWdlc30gLz59XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAge3N0YXRlLnR5cGUgPT09ICdlcnJvcicgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8U3RhdHVzSWNvbiBzdGF0dXM9XCJlcnJvclwiIHdpdGhTcGFjZSAvPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkluc3RhbGxhdGlvbiBmYWlsZWQ8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntzdGF0ZS5tZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5UcnkgcnVubmluZyB3aXRoIC0tZm9yY2UgdG8gb3ZlcnJpZGUgY2hlY2tzPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuLy8gVGhpcyBpcyBvbmx5IHVzZWQgZnJvbSBjbGkudHN4LCBub3QgYXMgYSBzbGFzaCBjb21tYW5kXG5leHBvcnQgY29uc3QgaW5zdGFsbCA9IHtcbiAgdHlwZTogJ2xvY2FsLWpzeCcgYXMgY29uc3QsXG4gIG5hbWU6ICdpbnN0YWxsJyxcbiAgZGVzY3JpcHRpb246ICdJbnN0YWxsIENsYXVkZSBDb2RlIG5hdGl2ZSBidWlsZCcsXG4gIGFyZ3VtZW50SGludDogJ1tvcHRpb25zXScsXG4gIGFzeW5jIGNhbGwoXG4gICAgb25Eb25lOiAoXG4gICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICAgICkgPT4gdm9pZCxcbiAgICBfY29udGV4dDogdW5rbm93bixcbiAgICBhcmdzOiBzdHJpbmdbXSxcbiAgKSB7XG4gICAgLy8gUGFyc2UgYXJndW1lbnRzXG4gICAgY29uc3QgZm9yY2UgPSBhcmdzLmluY2x1ZGVzKCctLWZvcmNlJylcbiAgICBjb25zdCBub25GbGFnQXJncyA9IGFyZ3MuZmlsdGVyKGFyZyA9PiAhYXJnLnN0YXJ0c1dpdGgoJy0tJykpXG4gICAgY29uc3QgdGFyZ2V0ID0gbm9uRmxhZ0FyZ3NbMF0gLy8gJ2xhdGVzdCcsICdzdGFibGUnLCBvciB2ZXJzaW9uIGxpa2UgJzEuMC4zNCdcblxuICAgIGNvbnN0IHsgdW5tb3VudCB9ID0gYXdhaXQgcmVuZGVyKFxuICAgICAgPEluc3RhbGxcbiAgICAgICAgb25Eb25lPXsocmVzdWx0LCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgdW5tb3VudCgpXG4gICAgICAgICAgb25Eb25lKHJlc3VsdCwgb3B0aW9ucylcbiAgICAgICAgfX1cbiAgICAgICAgZm9yY2U9e2ZvcmNlfVxuICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgIC8+LFxuICAgIClcbiAgfSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBaEJBLFNBQVNBLGVBQWU7QUFDeEIsU0FBU0MsWUFBWTtBQW1DckIsU0FBU0Msc0JBQThCO0FBQ3JDLFFBQU1DLFlBQVlDLElBQUlDLGFBQWE7QUFDbkMsUUFBTUMsVUFBVU4sUUFBUTtBQUV4QixNQUFJRyxXQUFXO0FBRWIsVUFBTUksY0FBY04sS0FBS0ssU0FBUyxVQUFVLE9BQU8sWUFBWTtBQUUvRCxXQUFPQyxZQUFZQyxRQUFRLE9BQU8sSUFBSTtFQUN4QztBQUVBLFNBQU87QUFDVDtBQUVBLFNBQUFDLFdBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFBb0IsUUFBQTtJQUFBQztFQUFBLElBQUFIO0FBQ2xCLE1BQUlHLFNBQVFDLFdBQVksR0FBQztBQUFBLFdBQVM7RUFBSTtBQUFBLE1BQUFDO0FBQUEsTUFBQUosRUFBQSxDQUFBLE1BQUFLLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFJbENGLFNBQUEsNENBQUMseUJBQ0MsNENBQUMsY0FBVyxPQUFBLGFBQ1YsNENBQUMsY0FBa0IsUUFBQSxXQUFVLFdBQUEsTUFBUyxHQUFH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SSxXQUFXLEtBQ2QsNENBQUMsY0FBSyxVQUFRLFFBQUMsWUFBVSxHQUN6Qiw0Q0FBQyxjQUFLLE9BQU0sVUFBUyxNQUFJLFFBQUEsZUFFekIsR0FDQSw0Q0FBQyxjQUFLLFVBQVEsUUFBQyxpQkFBZSxDQUNoQyxDQUNGLEdBQ0MwQixNQUFNa0IsaUJBQWlCLDRDQUFDLGNBQVcsVUFBVWxCLE1BQU1rQixlQUFjLENBQ3BFLEdBR0RsQixNQUFNRyxTQUFTLFdBQ2QsNENBQUMscUJBQUksZUFBYyxVQUFTLEtBQUssS0FDL0IsNENBQUMseUJBQ0MsNENBQUMsY0FBVyxRQUFPLFNBQVEsV0FBUyxNQUFBLEdBQ3BDLDRDQUFDLGNBQUssT0FBTSxXQUFRLHFCQUFtQixDQUN6QyxHQUNBLDRDQUFDLGNBQUssT0FBTSxXQUFTSCxNQUFNTixPQUFRLEdBQ25DLDRDQUFDLHFCQUFJLFdBQVcsS0FDZCw0Q0FBQyxjQUFLLFVBQVEsUUFBQyw2Q0FBMkMsQ0FDNUQsQ0FDRixDQUVKO0FBRUo7QUFHTyxJQUFNNkMsVUFBVTtFQUNyQnBDLE1BQU07RUFDTnFDLE1BQU07RUFDTkMsYUFBYTtFQUNiQyxjQUFjO0VBQ2QsTUFBTUMsS0FDSjlDLFFBSUErQyxVQUNBQyxNQUNBO0FBRUEsVUFBTS9DLFFBQVErQyxLQUFLQyxTQUFTLFNBQVM7QUFDckMsVUFBTUMsY0FBY0YsS0FBS0csT0FBT0MsU0FBTyxDQUFDQSxJQUFJQyxXQUFXLElBQUksQ0FBQztBQUM1RCxVQUFNbkQsU0FBU2dELFlBQVksQ0FBQztBQUU1QixVQUFNO01BQUVJO0lBQVEsSUFBSSxNQUFNQyxPQUN4Qiw0Q0FBQyxXQUNDLFFBQVEsQ0FBQ3pDLFFBQVEwQyxZQUFZO0FBQzNCRixjQUFRO0FBQ1J0RCxhQUFPYyxRQUFRMEMsT0FBTztJQUN4QixHQUNBLE9BQ0EsUUFBZSxDQUVuQjtFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbImhvbWVkaXIiLCAiam9pbiIsICJnZXRJbnN0YWxsYXRpb25QYXRoIiwgImlzV2luZG93cyIsICJlbnYiLCAicGxhdGZvcm0iLCAiaG9tZURpciIsICJ3aW5kb3dzUGF0aCIsICJyZXBsYWNlIiwgIlNldHVwTm90ZXMiLCAidDAiLCAiJCIsICJfYyIsICJtZXNzYWdlcyIsICJsZW5ndGgiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJ0MiIsICJtYXAiLCAiX3RlbXAiLCAidDMiLCAibWVzc2FnZSIsICJpbmRleCIsICJJbnN0YWxsIiwgIm9uRG9uZSIsICJmb3JjZSIsICJ0YXJnZXQiLCAic3RhdGUiLCAic2V0U3RhdGUiLCAidXNlU3RhdGUiLCAidHlwZSIsICJ1c2VFZmZlY3QiLCAicnVuIiwgImxvZ0ZvckRlYnVnZ2luZyIsICJjaGFubmVsT3JWZXJzaW9uIiwgImdldEluaXRpYWxTZXR0aW5ncyIsICJhdXRvVXBkYXRlc0NoYW5uZWwiLCAidmVyc2lvbiIsICJyZXN1bHQiLCAiaW5zdGFsbExhdGVzdCIsICJsYXRlc3RWZXJzaW9uIiwgIndhc1VwZGF0ZWQiLCAibG9ja0ZhaWxlZCIsICJFcnJvciIsICJsZXZlbCIsICJzZXR1cE1lc3NhZ2VzIiwgImNoZWNrSW5zdGFsbCIsICJmb3JFYWNoIiwgIm1zZyIsICJyZW1vdmVkIiwgImVycm9ycyIsICJ3YXJuaW5ncyIsICJjbGVhbnVwTnBtSW5zdGFsbGF0aW9ucyIsICJhbGlhc01lc3NhZ2VzIiwgImNsZWFudXBTaGVsbEFsaWFzZXMiLCAibSIsICJsb2dFdmVudCIsICJoYXNfdmVyc2lvbiIsICJmb3JjZWQiLCAidXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UiLCAiYWxsV2FybmluZ3MiLCAic2V0VGltZW91dCIsICJ1bmRlZmluZWQiLCAiZXJyb3IiLCAiZXJyb3JNZXNzYWdlIiwgImRpc3BsYXkiLCAiaW5zdGFsbCIsICJuYW1lIiwgImRlc2NyaXB0aW9uIiwgImFyZ3VtZW50SGludCIsICJjYWxsIiwgIl9jb250ZXh0IiwgImFyZ3MiLCAiaW5jbHVkZXMiLCAibm9uRmxhZ0FyZ3MiLCAiZmlsdGVyIiwgImFyZyIsICJzdGFydHNXaXRoIiwgInVubW91bnQiLCAicmVuZGVyIiwgIm9wdGlvbnMiXQp9Cg==
