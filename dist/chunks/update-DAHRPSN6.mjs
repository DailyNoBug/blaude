#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getDoctorDiagnostic,
  getLatestVersion,
  getPackageManager,
  gracefulShutdown,
  init_autoUpdater,
  init_doctorDiagnostic,
  init_gracefulShutdown,
  init_localInstaller,
  init_nativeInstaller,
  init_packageManagers,
  installGlobalPackage,
  installLatest,
  installOrUpdateClaudePackage,
  localInstallationExists,
  removeInstalledSymlink
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
import {
  init_completionCache,
  regenerateCompletionCache
} from "./chunk-SRAO5KUL.mjs";
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
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getGlobalConfig,
  getInitialSettings,
  gte,
  init_config,
  init_semver,
  init_settings2 as init_settings,
  init_source,
  saveGlobalConfig,
  source_default
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
import "./chunk-TR6BOGPZ.mjs";
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
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import {
  init_process,
  writeToStdout
} from "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/cli/update.ts
init_source();
init_analytics();
init_autoUpdater();
init_completionCache();
init_config();
init_debug();
init_doctorDiagnostic();
init_gracefulShutdown();
init_localInstaller();
init_nativeInstaller();
init_packageManagers();
init_process();
init_semver();
init_settings();
async function update() {
  logEvent("tengu_update_check", {});
  writeToStdout(`Current version: ${MACRO.VERSION}
`);
  const channel = getInitialSettings()?.autoUpdatesChannel ?? "latest";
  writeToStdout(`Checking for updates to ${channel} version...
`);
  logForDebugging("update: Starting update check");
  logForDebugging("update: Running diagnostic");
  const diagnostic = await getDoctorDiagnostic();
  logForDebugging(`update: Installation type: ${diagnostic.installationType}`);
  logForDebugging(
    `update: Config install method: ${diagnostic.configInstallMethod}`
  );
  if (diagnostic.multipleInstallations.length > 1) {
    writeToStdout("\n");
    writeToStdout(source_default.yellow("Warning: Multiple installations found") + "\n");
    for (const install of diagnostic.multipleInstallations) {
      const current = diagnostic.installationType === install.type ? " (currently running)" : "";
      writeToStdout(`- ${install.type} at ${install.path}${current}
`);
    }
  }
  if (diagnostic.warnings.length > 0) {
    writeToStdout("\n");
    for (const warning of diagnostic.warnings) {
      logForDebugging(`update: Warning detected: ${warning.issue}`);
      logForDebugging(`update: Showing warning: ${warning.issue}`);
      writeToStdout(source_default.yellow(`Warning: ${warning.issue}
`));
      writeToStdout(source_default.bold(`Fix: ${warning.fix}
`));
    }
  }
  const config = getGlobalConfig();
  if (!config.installMethod && diagnostic.installationType !== "package-manager") {
    writeToStdout("\n");
    writeToStdout("Updating configuration to track installation method...\n");
    let detectedMethod = "unknown";
    switch (diagnostic.installationType) {
      case "npm-local":
        detectedMethod = "local";
        break;
      case "native":
        detectedMethod = "native";
        break;
      case "npm-global":
        detectedMethod = "global";
        break;
      default:
        detectedMethod = "unknown";
    }
    saveGlobalConfig((current) => ({
      ...current,
      installMethod: detectedMethod
    }));
    writeToStdout(`Installation method set to: ${detectedMethod}
`);
  }
  if (diagnostic.installationType === "development") {
    writeToStdout("\n");
    writeToStdout(
      source_default.yellow("Warning: Cannot update development build") + "\n"
    );
    await gracefulShutdown(1);
  }
  if (diagnostic.installationType === "package-manager") {
    const packageManager = await getPackageManager();
    writeToStdout("\n");
    if (packageManager === "homebrew") {
      writeToStdout("Blaude is managed by Homebrew.\n");
      const latest = await getLatestVersion(channel);
      if (latest && !gte(MACRO.VERSION, latest)) {
        writeToStdout(`Update available: ${MACRO.VERSION} \u2192 ${latest}
`);
        writeToStdout("\n");
        writeToStdout("To update, run:\n");
        writeToStdout(source_default.bold("  brew upgrade claude-code") + "\n");
      } else {
        writeToStdout("Blaude is up to date!\n");
      }
    } else if (packageManager === "winget") {
      writeToStdout("Blaude is managed by winget.\n");
      const latest = await getLatestVersion(channel);
      if (latest && !gte(MACRO.VERSION, latest)) {
        writeToStdout(`Update available: ${MACRO.VERSION} \u2192 ${latest}
`);
        writeToStdout("\n");
        writeToStdout("To update, run:\n");
        writeToStdout(
          source_default.bold("  winget upgrade Anthropic.ClaudeCode") + "\n"
        );
      } else {
        writeToStdout("Blaude is up to date!\n");
      }
    } else if (packageManager === "apk") {
      writeToStdout("Blaude is managed by apk.\n");
      const latest = await getLatestVersion(channel);
      if (latest && !gte(MACRO.VERSION, latest)) {
        writeToStdout(`Update available: ${MACRO.VERSION} \u2192 ${latest}
`);
        writeToStdout("\n");
        writeToStdout("To update, run:\n");
        writeToStdout(source_default.bold("  apk upgrade claude-code") + "\n");
      } else {
        writeToStdout("Blaude is up to date!\n");
      }
    } else {
      writeToStdout("Blaude is managed by a package manager.\n");
      writeToStdout("Please use your package manager to update.\n");
    }
    await gracefulShutdown(0);
  }
  if (config.installMethod && diagnostic.configInstallMethod !== "not set" && diagnostic.installationType !== "package-manager") {
    const runningType = diagnostic.installationType;
    const configExpects = diagnostic.configInstallMethod;
    const typeMapping = {
      "npm-local": "local",
      "npm-global": "global",
      native: "native",
      development: "development",
      unknown: "unknown"
    };
    const normalizedRunningType = typeMapping[runningType] || runningType;
    if (normalizedRunningType !== configExpects && configExpects !== "unknown") {
      writeToStdout("\n");
      writeToStdout(source_default.yellow("Warning: Configuration mismatch") + "\n");
      writeToStdout(`Config expects: ${configExpects} installation
`);
      writeToStdout(`Currently running: ${runningType}
`);
      writeToStdout(
        source_default.yellow(
          `Updating the ${runningType} installation you are currently using`
        ) + "\n"
      );
      saveGlobalConfig((current) => ({
        ...current,
        installMethod: normalizedRunningType
      }));
      writeToStdout(
        `Config updated to reflect current installation method: ${normalizedRunningType}
`
      );
    }
  }
  if (diagnostic.installationType === "native") {
    logForDebugging(
      "update: Detected native installation, using native updater"
    );
    try {
      const result = await installLatest(channel, true);
      if (result.lockFailed) {
        const pidInfo = result.lockHolderPid ? ` (PID ${result.lockHolderPid})` : "";
        writeToStdout(
          source_default.yellow(
            `Another Blaude process${pidInfo} is currently running. Please try again in a moment.`
          ) + "\n"
        );
        await gracefulShutdown(0);
      }
      if (!result.latestVersion) {
        process.stderr.write("Failed to check for updates\n");
        await gracefulShutdown(1);
      }
      if (result.latestVersion === MACRO.VERSION) {
        writeToStdout(
          source_default.green(`Blaude is up to date (${MACRO.VERSION})`) + "\n"
        );
      } else {
        writeToStdout(
          source_default.green(
            `Successfully updated from ${MACRO.VERSION} to version ${result.latestVersion}`
          ) + "\n"
        );
        await regenerateCompletionCache();
      }
      await gracefulShutdown(0);
    } catch (error) {
      process.stderr.write("Error: Failed to install native update\n");
      process.stderr.write(String(error) + "\n");
      process.stderr.write('Try running "blaude doctor" for diagnostics\n');
      await gracefulShutdown(1);
    }
  }
  if (config.installMethod !== "native") {
    await removeInstalledSymlink();
  }
  logForDebugging("update: Checking npm registry for latest version");
  logForDebugging(`update: Package URL: ${MACRO.PACKAGE_URL}`);
  const npmTag = channel === "stable" ? "stable" : "latest";
  const npmCommand = `npm view ${MACRO.PACKAGE_URL}@${npmTag} version`;
  logForDebugging(`update: Running: ${npmCommand}`);
  const latestVersion = await getLatestVersion(channel);
  logForDebugging(
    `update: Latest version from npm: ${latestVersion || "FAILED"}`
  );
  if (!latestVersion) {
    logForDebugging("update: Failed to get latest version from npm registry");
    process.stderr.write(source_default.red("Failed to check for updates") + "\n");
    process.stderr.write("Unable to fetch latest version from npm registry\n");
    process.stderr.write("\n");
    process.stderr.write("Possible causes:\n");
    process.stderr.write("  \u2022 Network connectivity issues\n");
    process.stderr.write("  \u2022 npm registry is unreachable\n");
    process.stderr.write("  \u2022 Corporate proxy/firewall blocking npm\n");
    if (MACRO.PACKAGE_URL && !MACRO.PACKAGE_URL.startsWith("@anthropic")) {
      process.stderr.write(
        "  \u2022 Internal/development build not published to npm\n"
      );
    }
    process.stderr.write("\n");
    process.stderr.write("Try:\n");
    process.stderr.write("  \u2022 Check your internet connection\n");
    process.stderr.write("  \u2022 Run with --debug flag for more details\n");
    const packageName = MACRO.PACKAGE_URL || (process.env.USER_TYPE === "ant" ? "@anthropic-ai/claude-cli" : "@anthropic-ai/claude-code");
    process.stderr.write(
      `  \u2022 Manually check: npm view ${packageName} version
`
    );
    process.stderr.write("  \u2022 Check if you need to login: npm whoami\n");
    await gracefulShutdown(1);
  }
  if (latestVersion === MACRO.VERSION) {
    writeToStdout(
      source_default.green(`Blaude is up to date (${MACRO.VERSION})`) + "\n"
    );
    await gracefulShutdown(0);
  }
  writeToStdout(
    `New version available: ${latestVersion} (current: ${MACRO.VERSION})
`
  );
  writeToStdout("Installing update...\n");
  let useLocalUpdate = false;
  let updateMethodName = "";
  switch (diagnostic.installationType) {
    case "npm-local":
      useLocalUpdate = true;
      updateMethodName = "local";
      break;
    case "npm-global":
      useLocalUpdate = false;
      updateMethodName = "global";
      break;
    case "unknown": {
      const isLocal = await localInstallationExists();
      useLocalUpdate = isLocal;
      updateMethodName = isLocal ? "local" : "global";
      writeToStdout(
        source_default.yellow("Warning: Could not determine installation type") + "\n"
      );
      writeToStdout(
        `Attempting ${updateMethodName} update based on file detection...
`
      );
      break;
    }
    default:
      process.stderr.write(
        `Error: Cannot update ${diagnostic.installationType} installation
`
      );
      await gracefulShutdown(1);
  }
  writeToStdout(`Using ${updateMethodName} installation update method...
`);
  logForDebugging(`update: Update method determined: ${updateMethodName}`);
  logForDebugging(`update: useLocalUpdate: ${useLocalUpdate}`);
  let status;
  if (useLocalUpdate) {
    logForDebugging(
      "update: Calling installOrUpdateClaudePackage() for local update"
    );
    status = await installOrUpdateClaudePackage(channel);
  } else {
    logForDebugging("update: Calling installGlobalPackage() for global update");
    status = await installGlobalPackage();
  }
  logForDebugging(`update: Installation status: ${status}`);
  switch (status) {
    case "success":
      writeToStdout(
        source_default.green(
          `Successfully updated from ${MACRO.VERSION} to version ${latestVersion}`
        ) + "\n"
      );
      await regenerateCompletionCache();
      break;
    case "no_permissions":
      process.stderr.write(
        "Error: Insufficient permissions to install update\n"
      );
      if (useLocalUpdate) {
        process.stderr.write("Try manually updating with:\n");
        process.stderr.write(
          `  cd ~/.claude/local && npm update ${MACRO.PACKAGE_URL}
`
        );
      } else {
        process.stderr.write("Try running with sudo or fix npm permissions\n");
        process.stderr.write(
          "Or consider using native installation with: blaude install\n"
        );
      }
      await gracefulShutdown(1);
      break;
    case "install_failed":
      process.stderr.write("Error: Failed to install update\n");
      if (useLocalUpdate) {
        process.stderr.write("Try manually updating with:\n");
        process.stderr.write(
          `  cd ~/.claude/local && npm update ${MACRO.PACKAGE_URL}
`
        );
      } else {
        process.stderr.write(
          "Or consider using native installation with: blaude install\n"
        );
      }
      await gracefulShutdown(1);
      break;
    case "in_progress":
      process.stderr.write(
        "Error: Another instance is currently performing an update\n"
      );
      process.stderr.write("Please wait and try again later\n");
      await gracefulShutdown(1);
      break;
  }
  await gracefulShutdown(0);
}
export {
  update
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS91cGRhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIGdldExhdGVzdFZlcnNpb24sXG4gIHR5cGUgSW5zdGFsbFN0YXR1cyxcbiAgaW5zdGFsbEdsb2JhbFBhY2thZ2UsXG59IGZyb20gJ3NyYy91dGlscy9hdXRvVXBkYXRlci5qcydcbmltcG9ydCB7IHJlZ2VuZXJhdGVDb21wbGV0aW9uQ2FjaGUgfSBmcm9tICdzcmMvdXRpbHMvY29tcGxldGlvbkNhY2hlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0R2xvYmFsQ29uZmlnLFxuICB0eXBlIEluc3RhbGxNZXRob2QsXG4gIHNhdmVHbG9iYWxDb25maWcsXG59IGZyb20gJ3NyYy91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICdzcmMvdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBnZXREb2N0b3JEaWFnbm9zdGljIH0gZnJvbSAnc3JjL3V0aWxzL2RvY3RvckRpYWdub3N0aWMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnc3JjL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQge1xuICBpbnN0YWxsT3JVcGRhdGVDbGF1ZGVQYWNrYWdlLFxuICBsb2NhbEluc3RhbGxhdGlvbkV4aXN0cyxcbn0gZnJvbSAnc3JjL3V0aWxzL2xvY2FsSW5zdGFsbGVyLmpzJ1xuaW1wb3J0IHtcbiAgaW5zdGFsbExhdGVzdCBhcyBpbnN0YWxsTGF0ZXN0TmF0aXZlLFxuICByZW1vdmVJbnN0YWxsZWRTeW1saW5rLFxufSBmcm9tICdzcmMvdXRpbHMvbmF0aXZlSW5zdGFsbGVyL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0UGFja2FnZU1hbmFnZXIgfSBmcm9tICdzcmMvdXRpbHMvbmF0aXZlSW5zdGFsbGVyL3BhY2thZ2VNYW5hZ2Vycy5qcydcbmltcG9ydCB7IHdyaXRlVG9TdGRvdXQgfSBmcm9tICdzcmMvdXRpbHMvcHJvY2Vzcy5qcydcbmltcG9ydCB7IGd0ZSB9IGZyb20gJ3NyYy91dGlscy9zZW12ZXIuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV91cGRhdGVfY2hlY2snLCB7fSlcbiAgd3JpdGVUb1N0ZG91dChgQ3VycmVudCB2ZXJzaW9uOiAke01BQ1JPLlZFUlNJT059XFxuYClcblxuICBjb25zdCBjaGFubmVsID0gZ2V0SW5pdGlhbFNldHRpbmdzKCk/LmF1dG9VcGRhdGVzQ2hhbm5lbCA/PyAnbGF0ZXN0J1xuICB3cml0ZVRvU3Rkb3V0KGBDaGVja2luZyBmb3IgdXBkYXRlcyB0byAke2NoYW5uZWx9IHZlcnNpb24uLi5cXG5gKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBTdGFydGluZyB1cGRhdGUgY2hlY2snKVxuXG4gIC8vIFJ1biBkaWFnbm9zdGljIHRvIGRldGVjdCBwb3RlbnRpYWwgaXNzdWVzXG4gIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBSdW5uaW5nIGRpYWdub3N0aWMnKVxuICBjb25zdCBkaWFnbm9zdGljID0gYXdhaXQgZ2V0RG9jdG9yRGlhZ25vc3RpYygpXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBJbnN0YWxsYXRpb24gdHlwZTogJHtkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGV9YClcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGB1cGRhdGU6IENvbmZpZyBpbnN0YWxsIG1ldGhvZDogJHtkaWFnbm9zdGljLmNvbmZpZ0luc3RhbGxNZXRob2R9YCxcbiAgKVxuXG4gIC8vIENoZWNrIGZvciBtdWx0aXBsZSBpbnN0YWxsYXRpb25zXG4gIGlmIChkaWFnbm9zdGljLm11bHRpcGxlSW5zdGFsbGF0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLnllbGxvdygnV2FybmluZzogTXVsdGlwbGUgaW5zdGFsbGF0aW9ucyBmb3VuZCcpICsgJ1xcbicpXG4gICAgZm9yIChjb25zdCBpbnN0YWxsIG9mIGRpYWdub3N0aWMubXVsdGlwbGVJbnN0YWxsYXRpb25zKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgICAgZGlhZ25vc3RpYy5pbnN0YWxsYXRpb25UeXBlID09PSBpbnN0YWxsLnR5cGVcbiAgICAgICAgICA/ICcgKGN1cnJlbnRseSBydW5uaW5nKSdcbiAgICAgICAgICA6ICcnXG4gICAgICB3cml0ZVRvU3Rkb3V0KGAtICR7aW5zdGFsbC50eXBlfSBhdCAke2luc3RhbGwucGF0aH0ke2N1cnJlbnR9XFxuYClcbiAgICB9XG4gIH1cblxuICAvLyBEaXNwbGF5IHdhcm5pbmdzIGlmIGFueSBleGlzdFxuICBpZiAoZGlhZ25vc3RpYy53YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICBmb3IgKGNvbnN0IHdhcm5pbmcgb2YgZGlhZ25vc3RpYy53YXJuaW5ncykge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGB1cGRhdGU6IFdhcm5pbmcgZGV0ZWN0ZWQ6ICR7d2FybmluZy5pc3N1ZX1gKVxuXG4gICAgICAvLyBEb24ndCBza2lwIFBBVEggd2FybmluZ3MgLSB0aGV5J3JlIGFsd2F5cyByZWxldmFudFxuICAgICAgLy8gVGhlIHVzZXIgbmVlZHMgdG8ga25vdyB0aGF0ICd3aGljaCBjbGF1ZGUnIHBvaW50cyBlbHNld2hlcmVcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBTaG93aW5nIHdhcm5pbmc6ICR7d2FybmluZy5pc3N1ZX1gKVxuXG4gICAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLnllbGxvdyhgV2FybmluZzogJHt3YXJuaW5nLmlzc3VlfVxcbmApKVxuXG4gICAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLmJvbGQoYEZpeDogJHt3YXJuaW5nLmZpeH1cXG5gKSlcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgY29uZmlnIGlmIGluc3RhbGxNZXRob2QgaXMgbm90IHNldCAoYnV0IHNraXAgZm9yIHBhY2thZ2UgbWFuYWdlcnMpXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGlmIChcbiAgICAhY29uZmlnLmluc3RhbGxNZXRob2QgJiZcbiAgICBkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGUgIT09ICdwYWNrYWdlLW1hbmFnZXInXG4gICkge1xuICAgIHdyaXRlVG9TdGRvdXQoJ1xcbicpXG4gICAgd3JpdGVUb1N0ZG91dCgnVXBkYXRpbmcgY29uZmlndXJhdGlvbiB0byB0cmFjayBpbnN0YWxsYXRpb24gbWV0aG9kLi4uXFxuJylcbiAgICBsZXQgZGV0ZWN0ZWRNZXRob2Q6ICdsb2NhbCcgfCAnbmF0aXZlJyB8ICdnbG9iYWwnIHwgJ3Vua25vd24nID0gJ3Vua25vd24nXG5cbiAgICAvLyBNYXAgZGlhZ25vc3RpYyBpbnN0YWxsYXRpb24gdHlwZSB0byBjb25maWcgaW5zdGFsbCBtZXRob2RcbiAgICBzd2l0Y2ggKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSkge1xuICAgICAgY2FzZSAnbnBtLWxvY2FsJzpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAnbG9jYWwnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICduYXRpdmUnOlxuICAgICAgICBkZXRlY3RlZE1ldGhvZCA9ICduYXRpdmUnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICducG0tZ2xvYmFsJzpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAnZ2xvYmFsJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAndW5rbm93bidcbiAgICB9XG5cbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBpbnN0YWxsTWV0aG9kOiBkZXRlY3RlZE1ldGhvZCxcbiAgICB9KSlcbiAgICB3cml0ZVRvU3Rkb3V0KGBJbnN0YWxsYXRpb24gbWV0aG9kIHNldCB0bzogJHtkZXRlY3RlZE1ldGhvZH1cXG5gKVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgcnVubmluZyBmcm9tIGRldmVsb3BtZW50IGJ1aWxkXG4gIGlmIChkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB3cml0ZVRvU3Rkb3V0KCdcXG4nKVxuICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICBjaGFsay55ZWxsb3coJ1dhcm5pbmc6IENhbm5vdCB1cGRhdGUgZGV2ZWxvcG1lbnQgYnVpbGQnKSArICdcXG4nLFxuICAgIClcbiAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDEpXG4gIH1cblxuICAvLyBDaGVjayBpZiBydW5uaW5nIGZyb20gYSBwYWNrYWdlIG1hbmFnZXJcbiAgaWYgKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSA9PT0gJ3BhY2thZ2UtbWFuYWdlcicpIHtcbiAgICBjb25zdCBwYWNrYWdlTWFuYWdlciA9IGF3YWl0IGdldFBhY2thZ2VNYW5hZ2VyKClcbiAgICB3cml0ZVRvU3Rkb3V0KCdcXG4nKVxuXG4gICAgaWYgKHBhY2thZ2VNYW5hZ2VyID09PSAnaG9tZWJyZXcnKSB7XG4gICAgICB3cml0ZVRvU3Rkb3V0KCdCbGF1ZGUgaXMgbWFuYWdlZCBieSBIb21lYnJldy5cXG4nKVxuICAgICAgY29uc3QgbGF0ZXN0ID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihjaGFubmVsKVxuICAgICAgaWYgKGxhdGVzdCAmJiAhZ3RlKE1BQ1JPLlZFUlNJT04sIGxhdGVzdCkpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChgVXBkYXRlIGF2YWlsYWJsZTogJHtNQUNSTy5WRVJTSU9OfSBcdTIxOTIgJHtsYXRlc3R9XFxuYClcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnVG8gdXBkYXRlLCBydW46XFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dChjaGFsay5ib2xkKCcgIGJyZXcgdXBncmFkZSBjbGF1ZGUtY29kZScpICsgJ1xcbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KCdCbGF1ZGUgaXMgdXAgdG8gZGF0ZSFcXG4nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFja2FnZU1hbmFnZXIgPT09ICd3aW5nZXQnKSB7XG4gICAgICB3cml0ZVRvU3Rkb3V0KCdCbGF1ZGUgaXMgbWFuYWdlZCBieSB3aW5nZXQuXFxuJylcbiAgICAgIGNvbnN0IGxhdGVzdCA9IGF3YWl0IGdldExhdGVzdFZlcnNpb24oY2hhbm5lbClcbiAgICAgIGlmIChsYXRlc3QgJiYgIWd0ZShNQUNSTy5WRVJTSU9OLCBsYXRlc3QpKSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoYFVwZGF0ZSBhdmFpbGFibGU6ICR7TUFDUk8uVkVSU0lPTn0gXHUyMTkyICR7bGF0ZXN0fVxcbmApXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ1xcbicpXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ1RvIHVwZGF0ZSwgcnVuOlxcbicpXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgICAgY2hhbGsuYm9sZCgnICB3aW5nZXQgdXBncmFkZSBBbnRocm9waWMuQ2xhdWRlQ29kZScpICsgJ1xcbicsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ0JsYXVkZSBpcyB1cCB0byBkYXRlIVxcbicpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWNrYWdlTWFuYWdlciA9PT0gJ2FwaycpIHtcbiAgICAgIHdyaXRlVG9TdGRvdXQoJ0JsYXVkZSBpcyBtYW5hZ2VkIGJ5IGFway5cXG4nKVxuICAgICAgY29uc3QgbGF0ZXN0ID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihjaGFubmVsKVxuICAgICAgaWYgKGxhdGVzdCAmJiAhZ3RlKE1BQ1JPLlZFUlNJT04sIGxhdGVzdCkpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChgVXBkYXRlIGF2YWlsYWJsZTogJHtNQUNSTy5WRVJTSU9OfSBcdTIxOTIgJHtsYXRlc3R9XFxuYClcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnVG8gdXBkYXRlLCBydW46XFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dChjaGFsay5ib2xkKCcgIGFwayB1cGdyYWRlIGNsYXVkZS1jb2RlJykgKyAnXFxuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ0JsYXVkZSBpcyB1cCB0byBkYXRlIVxcbicpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHBhY21hbiwgZGViLCBhbmQgcnBtIGRvbid0IGdldCBzcGVjaWZpYyBjb21tYW5kcyBiZWNhdXNlIHRoZXkgZWFjaCBoYXZlXG4gICAgICAvLyBtdWx0aXBsZSBmcm9udGVuZHMgKHBhY21hbjogeWF5L3BhcnUvbWFrZXBrZywgZGViOiBhcHQvYXB0LWdldC9hcHRpdHVkZS9uYWxhLFxuICAgICAgLy8gcnBtOiBkbmYveXVtL3p5cHBlcilcbiAgICAgIHdyaXRlVG9TdGRvdXQoJ0JsYXVkZSBpcyBtYW5hZ2VkIGJ5IGEgcGFja2FnZSBtYW5hZ2VyLlxcbicpXG4gICAgICB3cml0ZVRvU3Rkb3V0KCdQbGVhc2UgdXNlIHlvdXIgcGFja2FnZSBtYW5hZ2VyIHRvIHVwZGF0ZS5cXG4nKVxuICAgIH1cblxuICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBjb25maWcvcmVhbGl0eSBtaXNtYXRjaCAoc2tpcCBmb3IgcGFja2FnZS1tYW5hZ2VyIGluc3RhbGxzKVxuICBpZiAoXG4gICAgY29uZmlnLmluc3RhbGxNZXRob2QgJiZcbiAgICBkaWFnbm9zdGljLmNvbmZpZ0luc3RhbGxNZXRob2QgIT09ICdub3Qgc2V0JyAmJlxuICAgIGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSAhPT0gJ3BhY2thZ2UtbWFuYWdlcidcbiAgKSB7XG4gICAgY29uc3QgcnVubmluZ1R5cGUgPSBkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGVcbiAgICBjb25zdCBjb25maWdFeHBlY3RzID0gZGlhZ25vc3RpYy5jb25maWdJbnN0YWxsTWV0aG9kXG5cbiAgICAvLyBNYXAgaW5zdGFsbGF0aW9uIHR5cGVzIGZvciBjb21wYXJpc29uXG4gICAgY29uc3QgdHlwZU1hcHBpbmc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnbnBtLWxvY2FsJzogJ2xvY2FsJyxcbiAgICAgICducG0tZ2xvYmFsJzogJ2dsb2JhbCcsXG4gICAgICBuYXRpdmU6ICduYXRpdmUnLFxuICAgICAgZGV2ZWxvcG1lbnQ6ICdkZXZlbG9wbWVudCcsXG4gICAgICB1bmtub3duOiAndW5rbm93bicsXG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZFJ1bm5pbmdUeXBlID0gdHlwZU1hcHBpbmdbcnVubmluZ1R5cGVdIHx8IHJ1bm5pbmdUeXBlXG5cbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVkUnVubmluZ1R5cGUgIT09IGNvbmZpZ0V4cGVjdHMgJiZcbiAgICAgIGNvbmZpZ0V4cGVjdHMgIT09ICd1bmtub3duJ1xuICAgICkge1xuICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgIHdyaXRlVG9TdGRvdXQoY2hhbGsueWVsbG93KCdXYXJuaW5nOiBDb25maWd1cmF0aW9uIG1pc21hdGNoJykgKyAnXFxuJylcbiAgICAgIHdyaXRlVG9TdGRvdXQoYENvbmZpZyBleHBlY3RzOiAke2NvbmZpZ0V4cGVjdHN9IGluc3RhbGxhdGlvblxcbmApXG4gICAgICB3cml0ZVRvU3Rkb3V0KGBDdXJyZW50bHkgcnVubmluZzogJHtydW5uaW5nVHlwZX1cXG5gKVxuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgY2hhbGsueWVsbG93KFxuICAgICAgICAgIGBVcGRhdGluZyB0aGUgJHtydW5uaW5nVHlwZX0gaW5zdGFsbGF0aW9uIHlvdSBhcmUgY3VycmVudGx5IHVzaW5nYCxcbiAgICAgICAgKSArICdcXG4nLFxuICAgICAgKVxuXG4gICAgICAvLyBVcGRhdGUgY29uZmlnIHRvIG1hdGNoIHJlYWxpdHlcbiAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBpbnN0YWxsTWV0aG9kOiBub3JtYWxpemVkUnVubmluZ1R5cGUgYXMgSW5zdGFsbE1ldGhvZCxcbiAgICAgIH0pKVxuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgYENvbmZpZyB1cGRhdGVkIHRvIHJlZmxlY3QgY3VycmVudCBpbnN0YWxsYXRpb24gbWV0aG9kOiAke25vcm1hbGl6ZWRSdW5uaW5nVHlwZX1cXG5gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBuYXRpdmUgaW5zdGFsbGF0aW9uIHVwZGF0ZXMgZmlyc3RcbiAgaWYgKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSA9PT0gJ25hdGl2ZScpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAndXBkYXRlOiBEZXRlY3RlZCBuYXRpdmUgaW5zdGFsbGF0aW9uLCB1c2luZyBuYXRpdmUgdXBkYXRlcicsXG4gICAgKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnN0YWxsTGF0ZXN0TmF0aXZlKGNoYW5uZWwsIHRydWUpXG5cbiAgICAgIC8vIEhhbmRsZSBsb2NrIGNvbnRlbnRpb24gZ3JhY2VmdWxseVxuICAgICAgaWYgKHJlc3VsdC5sb2NrRmFpbGVkKSB7XG4gICAgICAgIGNvbnN0IHBpZEluZm8gPSByZXN1bHQubG9ja0hvbGRlclBpZFxuICAgICAgICAgID8gYCAoUElEICR7cmVzdWx0LmxvY2tIb2xkZXJQaWR9KWBcbiAgICAgICAgICA6ICcnXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgICAgY2hhbGsueWVsbG93KFxuICAgICAgICAgICAgYEFub3RoZXIgQmxhdWRlIHByb2Nlc3Mke3BpZEluZm99IGlzIGN1cnJlbnRseSBydW5uaW5nLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbW9tZW50LmAsXG4gICAgICAgICAgKSArICdcXG4nLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXN1bHQubGF0ZXN0VmVyc2lvbikge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnRmFpbGVkIHRvIGNoZWNrIGZvciB1cGRhdGVzXFxuJylcbiAgICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmxhdGVzdFZlcnNpb24gPT09IE1BQ1JPLlZFUlNJT04pIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgICBjaGFsay5ncmVlbihgQmxhdWRlIGlzIHVwIHRvIGRhdGUgKCR7TUFDUk8uVkVSU0lPTn0pYCkgKyAnXFxuJyxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgICBjaGFsay5ncmVlbihcbiAgICAgICAgICAgIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBmcm9tICR7TUFDUk8uVkVSU0lPTn0gdG8gdmVyc2lvbiAke3Jlc3VsdC5sYXRlc3RWZXJzaW9ufWAsXG4gICAgICAgICAgKSArICdcXG4nLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHJlZ2VuZXJhdGVDb21wbGV0aW9uQ2FjaGUoKVxuICAgICAgfVxuICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigwKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnRXJyb3I6IEZhaWxlZCB0byBpbnN0YWxsIG5hdGl2ZSB1cGRhdGVcXG4nKVxuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoU3RyaW5nKGVycm9yKSArICdcXG4nKVxuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1RyeSBydW5uaW5nIFwiYmxhdWRlIGRvY3RvclwiIGZvciBkaWFnbm9zdGljc1xcbicpXG4gICAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDEpXG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gZXhpc3RpbmcgSlMvbnBtLWJhc2VkIHVwZGF0ZSBsb2dpY1xuICAvLyBSZW1vdmUgbmF0aXZlIGluc3RhbGxlciBzeW1saW5rIHNpbmNlIHdlJ3JlIG5vdCB1c2luZyBuYXRpdmUgaW5zdGFsbGF0aW9uXG4gIC8vIEJ1dCBvbmx5IGlmIHVzZXIgaGFzbid0IG1pZ3JhdGVkIHRvIG5hdGl2ZSBpbnN0YWxsYXRpb25cbiAgaWYgKGNvbmZpZy5pbnN0YWxsTWV0aG9kICE9PSAnbmF0aXZlJykge1xuICAgIGF3YWl0IHJlbW92ZUluc3RhbGxlZFN5bWxpbmsoKVxuICB9XG5cbiAgbG9nRm9yRGVidWdnaW5nKCd1cGRhdGU6IENoZWNraW5nIG5wbSByZWdpc3RyeSBmb3IgbGF0ZXN0IHZlcnNpb24nKVxuICBsb2dGb3JEZWJ1Z2dpbmcoYHVwZGF0ZTogUGFja2FnZSBVUkw6ICR7TUFDUk8uUEFDS0FHRV9VUkx9YClcbiAgY29uc3QgbnBtVGFnID0gY2hhbm5lbCA9PT0gJ3N0YWJsZScgPyAnc3RhYmxlJyA6ICdsYXRlc3QnXG4gIGNvbnN0IG5wbUNvbW1hbmQgPSBgbnBtIHZpZXcgJHtNQUNSTy5QQUNLQUdFX1VSTH1AJHtucG1UYWd9IHZlcnNpb25gXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBSdW5uaW5nOiAke25wbUNvbW1hbmR9YClcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IGF3YWl0IGdldExhdGVzdFZlcnNpb24oY2hhbm5lbClcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGB1cGRhdGU6IExhdGVzdCB2ZXJzaW9uIGZyb20gbnBtOiAke2xhdGVzdFZlcnNpb24gfHwgJ0ZBSUxFRCd9YCxcbiAgKVxuXG4gIGlmICghbGF0ZXN0VmVyc2lvbikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBGYWlsZWQgdG8gZ2V0IGxhdGVzdCB2ZXJzaW9uIGZyb20gbnBtIHJlZ2lzdHJ5JylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShjaGFsay5yZWQoJ0ZhaWxlZCB0byBjaGVjayBmb3IgdXBkYXRlcycpICsgJ1xcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1VuYWJsZSB0byBmZXRjaCBsYXRlc3QgdmVyc2lvbiBmcm9tIG5wbSByZWdpc3RyeVxcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1xcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1Bvc3NpYmxlIGNhdXNlczpcXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBOZXR3b3JrIGNvbm5lY3Rpdml0eSBpc3N1ZXNcXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBucG0gcmVnaXN0cnkgaXMgdW5yZWFjaGFibGVcXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBDb3Jwb3JhdGUgcHJveHkvZmlyZXdhbGwgYmxvY2tpbmcgbnBtXFxuJylcbiAgICBpZiAoTUFDUk8uUEFDS0FHRV9VUkwgJiYgIU1BQ1JPLlBBQ0tBR0VfVVJMLnN0YXJ0c1dpdGgoJ0BhbnRocm9waWMnKSkge1xuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgICcgIFx1MjAyMiBJbnRlcm5hbC9kZXZlbG9wbWVudCBidWlsZCBub3QgcHVibGlzaGVkIHRvIG5wbVxcbicsXG4gICAgICApXG4gICAgfVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdcXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdUcnk6XFxuJylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnICBcdTIwMjIgQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uXFxuJylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnICBcdTIwMjIgUnVuIHdpdGggLS1kZWJ1ZyBmbGFnIGZvciBtb3JlIGRldGFpbHNcXG4nKVxuICAgIGNvbnN0IHBhY2thZ2VOYW1lID1cbiAgICAgIE1BQ1JPLlBBQ0tBR0VfVVJMIHx8XG4gICAgICAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50J1xuICAgICAgICA/ICdAYW50aHJvcGljLWFpL2NsYXVkZS1jbGknXG4gICAgICAgIDogJ0BhbnRocm9waWMtYWkvY2xhdWRlLWNvZGUnKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgYCAgXHUyMDIyIE1hbnVhbGx5IGNoZWNrOiBucG0gdmlldyAke3BhY2thZ2VOYW1lfSB2ZXJzaW9uXFxuYCxcbiAgICApXG5cbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnICBcdTIwMjIgQ2hlY2sgaWYgeW91IG5lZWQgdG8gbG9naW46IG5wbSB3aG9hbWlcXG4nKVxuICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMSlcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHZlcnNpb25zIG1hdGNoIGV4YWN0bHksIGluY2x1ZGluZyBhbnkgYnVpbGQgbWV0YWRhdGEgKGxpa2UgU0hBKVxuICBpZiAobGF0ZXN0VmVyc2lvbiA9PT0gTUFDUk8uVkVSU0lPTikge1xuICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICBjaGFsay5ncmVlbihgQmxhdWRlIGlzIHVwIHRvIGRhdGUgKCR7TUFDUk8uVkVSU0lPTn0pYCkgKyAnXFxuJyxcbiAgICApXG4gICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigwKVxuICB9XG5cbiAgd3JpdGVUb1N0ZG91dChcbiAgICBgTmV3IHZlcnNpb24gYXZhaWxhYmxlOiAke2xhdGVzdFZlcnNpb259IChjdXJyZW50OiAke01BQ1JPLlZFUlNJT059KVxcbmAsXG4gIClcbiAgd3JpdGVUb1N0ZG91dCgnSW5zdGFsbGluZyB1cGRhdGUuLi5cXG4nKVxuXG4gIC8vIERldGVybWluZSB1cGRhdGUgbWV0aG9kIGJhc2VkIG9uIHdoYXQncyBhY3R1YWxseSBydW5uaW5nXG4gIGxldCB1c2VMb2NhbFVwZGF0ZSA9IGZhbHNlXG4gIGxldCB1cGRhdGVNZXRob2ROYW1lID0gJydcblxuICBzd2l0Y2ggKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSkge1xuICAgIGNhc2UgJ25wbS1sb2NhbCc6XG4gICAgICB1c2VMb2NhbFVwZGF0ZSA9IHRydWVcbiAgICAgIHVwZGF0ZU1ldGhvZE5hbWUgPSAnbG9jYWwnXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25wbS1nbG9iYWwnOlxuICAgICAgdXNlTG9jYWxVcGRhdGUgPSBmYWxzZVxuICAgICAgdXBkYXRlTWV0aG9kTmFtZSA9ICdnbG9iYWwnXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3Vua25vd24nOiB7XG4gICAgICAvLyBGYWxsYmFjayB0byBkZXRlY3Rpb24gaWYgd2UgY2FuJ3QgZGV0ZXJtaW5lIGluc3RhbGxhdGlvbiB0eXBlXG4gICAgICBjb25zdCBpc0xvY2FsID0gYXdhaXQgbG9jYWxJbnN0YWxsYXRpb25FeGlzdHMoKVxuICAgICAgdXNlTG9jYWxVcGRhdGUgPSBpc0xvY2FsXG4gICAgICB1cGRhdGVNZXRob2ROYW1lID0gaXNMb2NhbCA/ICdsb2NhbCcgOiAnZ2xvYmFsJ1xuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgY2hhbGsueWVsbG93KCdXYXJuaW5nOiBDb3VsZCBub3QgZGV0ZXJtaW5lIGluc3RhbGxhdGlvbiB0eXBlJykgKyAnXFxuJyxcbiAgICAgIClcbiAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgIGBBdHRlbXB0aW5nICR7dXBkYXRlTWV0aG9kTmFtZX0gdXBkYXRlIGJhc2VkIG9uIGZpbGUgZGV0ZWN0aW9uLi4uXFxuYCxcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgYEVycm9yOiBDYW5ub3QgdXBkYXRlICR7ZGlhZ25vc3RpYy5pbnN0YWxsYXRpb25UeXBlfSBpbnN0YWxsYXRpb25cXG5gLFxuICAgICAgKVxuICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICB9XG5cbiAgd3JpdGVUb1N0ZG91dChgVXNpbmcgJHt1cGRhdGVNZXRob2ROYW1lfSBpbnN0YWxsYXRpb24gdXBkYXRlIG1ldGhvZC4uLlxcbmApXG5cbiAgbG9nRm9yRGVidWdnaW5nKGB1cGRhdGU6IFVwZGF0ZSBtZXRob2QgZGV0ZXJtaW5lZDogJHt1cGRhdGVNZXRob2ROYW1lfWApXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiB1c2VMb2NhbFVwZGF0ZTogJHt1c2VMb2NhbFVwZGF0ZX1gKVxuXG4gIGxldCBzdGF0dXM6IEluc3RhbGxTdGF0dXNcblxuICBpZiAodXNlTG9jYWxVcGRhdGUpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAndXBkYXRlOiBDYWxsaW5nIGluc3RhbGxPclVwZGF0ZUNsYXVkZVBhY2thZ2UoKSBmb3IgbG9jYWwgdXBkYXRlJyxcbiAgICApXG4gICAgc3RhdHVzID0gYXdhaXQgaW5zdGFsbE9yVXBkYXRlQ2xhdWRlUGFja2FnZShjaGFubmVsKVxuICB9IGVsc2Uge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBDYWxsaW5nIGluc3RhbGxHbG9iYWxQYWNrYWdlKCkgZm9yIGdsb2JhbCB1cGRhdGUnKVxuICAgIHN0YXR1cyA9IGF3YWl0IGluc3RhbGxHbG9iYWxQYWNrYWdlKClcbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBJbnN0YWxsYXRpb24gc3RhdHVzOiAke3N0YXR1c31gKVxuXG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICB3cml0ZVRvU3Rkb3V0KFxuICAgICAgICBjaGFsay5ncmVlbihcbiAgICAgICAgICBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgZnJvbSAke01BQ1JPLlZFUlNJT059IHRvIHZlcnNpb24gJHtsYXRlc3RWZXJzaW9ufWAsXG4gICAgICAgICkgKyAnXFxuJyxcbiAgICAgIClcbiAgICAgIGF3YWl0IHJlZ2VuZXJhdGVDb21wbGV0aW9uQ2FjaGUoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdub19wZXJtaXNzaW9ucyc6XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgJ0Vycm9yOiBJbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMgdG8gaW5zdGFsbCB1cGRhdGVcXG4nLFxuICAgICAgKVxuICAgICAgaWYgKHVzZUxvY2FsVXBkYXRlKSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdUcnkgbWFudWFsbHkgdXBkYXRpbmcgd2l0aDpcXG4nKVxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgICBgICBjZCB+Ly5jbGF1ZGUvbG9jYWwgJiYgbnBtIHVwZGF0ZSAke01BQ1JPLlBBQ0tBR0VfVVJMfVxcbmAsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdUcnkgcnVubmluZyB3aXRoIHN1ZG8gb3IgZml4IG5wbSBwZXJtaXNzaW9uc1xcbicpXG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICAgICdPciBjb25zaWRlciB1c2luZyBuYXRpdmUgaW5zdGFsbGF0aW9uIHdpdGg6IGJsYXVkZSBpbnN0YWxsXFxuJyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdpbnN0YWxsX2ZhaWxlZCc6XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnRXJyb3I6IEZhaWxlZCB0byBpbnN0YWxsIHVwZGF0ZVxcbicpXG4gICAgICBpZiAodXNlTG9jYWxVcGRhdGUpIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1RyeSBtYW51YWxseSB1cGRhdGluZyB3aXRoOlxcbicpXG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICAgIGAgIGNkIH4vLmNsYXVkZS9sb2NhbCAmJiBucG0gdXBkYXRlICR7TUFDUk8uUEFDS0FHRV9VUkx9XFxuYCxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgICAgJ09yIGNvbnNpZGVyIHVzaW5nIG5hdGl2ZSBpbnN0YWxsYXRpb24gd2l0aDogYmxhdWRlIGluc3RhbGxcXG4nLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDEpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2luX3Byb2dyZXNzJzpcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICAnRXJyb3I6IEFub3RoZXIgaW5zdGFuY2UgaXMgY3VycmVudGx5IHBlcmZvcm1pbmcgYW4gdXBkYXRlXFxuJyxcbiAgICAgIClcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdQbGVhc2Ugd2FpdCBhbmQgdHJ5IGFnYWluIGxhdGVyXFxuJylcbiAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMSlcbiAgICAgIGJyZWFrXG4gIH1cbiAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigwKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZUFBc0IsU0FBUztBQUM3QixXQUFTLHNCQUFzQixDQUFDLENBQUM7QUFDakMsZ0JBQWMsb0JBQW9CLE1BQU0sT0FBTztBQUFBLENBQUk7QUFFbkQsUUFBTSxVQUFVLG1CQUFtQixHQUFHLHNCQUFzQjtBQUM1RCxnQkFBYywyQkFBMkIsT0FBTztBQUFBLENBQWU7QUFFL0Qsa0JBQWdCLCtCQUErQjtBQUcvQyxrQkFBZ0IsNEJBQTRCO0FBQzVDLFFBQU0sYUFBYSxNQUFNLG9CQUFvQjtBQUM3QyxrQkFBZ0IsOEJBQThCLFdBQVcsZ0JBQWdCLEVBQUU7QUFDM0U7QUFBQSxJQUNFLGtDQUFrQyxXQUFXLG1CQUFtQjtBQUFBLEVBQ2xFO0FBR0EsTUFBSSxXQUFXLHNCQUFzQixTQUFTLEdBQUc7QUFDL0Msa0JBQWMsSUFBSTtBQUNsQixrQkFBYyxlQUFNLE9BQU8sdUNBQXVDLElBQUksSUFBSTtBQUMxRSxlQUFXLFdBQVcsV0FBVyx1QkFBdUI7QUFDdEQsWUFBTSxVQUNKLFdBQVcscUJBQXFCLFFBQVEsT0FDcEMseUJBQ0E7QUFDTixvQkFBYyxLQUFLLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxHQUFHLE9BQU87QUFBQSxDQUFJO0FBQUEsSUFDbEU7QUFBQSxFQUNGO0FBR0EsTUFBSSxXQUFXLFNBQVMsU0FBUyxHQUFHO0FBQ2xDLGtCQUFjLElBQUk7QUFDbEIsZUFBVyxXQUFXLFdBQVcsVUFBVTtBQUN6QyxzQkFBZ0IsNkJBQTZCLFFBQVEsS0FBSyxFQUFFO0FBSTVELHNCQUFnQiw0QkFBNEIsUUFBUSxLQUFLLEVBQUU7QUFFM0Qsb0JBQWMsZUFBTSxPQUFPLFlBQVksUUFBUSxLQUFLO0FBQUEsQ0FBSSxDQUFDO0FBRXpELG9CQUFjLGVBQU0sS0FBSyxRQUFRLFFBQVEsR0FBRztBQUFBLENBQUksQ0FBQztBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUdBLFFBQU0sU0FBUyxnQkFBZ0I7QUFDL0IsTUFDRSxDQUFDLE9BQU8saUJBQ1IsV0FBVyxxQkFBcUIsbUJBQ2hDO0FBQ0Esa0JBQWMsSUFBSTtBQUNsQixrQkFBYywwREFBMEQ7QUFDeEUsUUFBSSxpQkFBNEQ7QUFHaEUsWUFBUSxXQUFXLGtCQUFrQjtBQUFBLE1BQ25DLEtBQUs7QUFDSCx5QkFBaUI7QUFDakI7QUFBQSxNQUNGLEtBQUs7QUFDSCx5QkFBaUI7QUFDakI7QUFBQSxNQUNGLEtBQUs7QUFDSCx5QkFBaUI7QUFDakI7QUFBQSxNQUNGO0FBQ0UseUJBQWlCO0FBQUEsSUFDckI7QUFFQSxxQkFBaUIsY0FBWTtBQUFBLE1BQzNCLEdBQUc7QUFBQSxNQUNILGVBQWU7QUFBQSxJQUNqQixFQUFFO0FBQ0Ysa0JBQWMsK0JBQStCLGNBQWM7QUFBQSxDQUFJO0FBQUEsRUFDakU7QUFHQSxNQUFJLFdBQVcscUJBQXFCLGVBQWU7QUFDakQsa0JBQWMsSUFBSTtBQUNsQjtBQUFBLE1BQ0UsZUFBTSxPQUFPLDBDQUEwQyxJQUFJO0FBQUEsSUFDN0Q7QUFDQSxVQUFNLGlCQUFpQixDQUFDO0FBQUEsRUFDMUI7QUFHQSxNQUFJLFdBQVcscUJBQXFCLG1CQUFtQjtBQUNyRCxVQUFNLGlCQUFpQixNQUFNLGtCQUFrQjtBQUMvQyxrQkFBYyxJQUFJO0FBRWxCLFFBQUksbUJBQW1CLFlBQVk7QUFDakMsb0JBQWMsa0NBQWtDO0FBQ2hELFlBQU0sU0FBUyxNQUFNLGlCQUFpQixPQUFPO0FBQzdDLFVBQUksVUFBVSxDQUFDLElBQUksTUFBTSxTQUFTLE1BQU0sR0FBRztBQUN6QyxzQkFBYyxxQkFBcUIsTUFBTSxPQUFPLFdBQU0sTUFBTTtBQUFBLENBQUk7QUFDaEUsc0JBQWMsSUFBSTtBQUNsQixzQkFBYyxtQkFBbUI7QUFDakMsc0JBQWMsZUFBTSxLQUFLLDRCQUE0QixJQUFJLElBQUk7QUFBQSxNQUMvRCxPQUFPO0FBQ0wsc0JBQWMseUJBQXlCO0FBQUEsTUFDekM7QUFBQSxJQUNGLFdBQVcsbUJBQW1CLFVBQVU7QUFDdEMsb0JBQWMsZ0NBQWdDO0FBQzlDLFlBQU0sU0FBUyxNQUFNLGlCQUFpQixPQUFPO0FBQzdDLFVBQUksVUFBVSxDQUFDLElBQUksTUFBTSxTQUFTLE1BQU0sR0FBRztBQUN6QyxzQkFBYyxxQkFBcUIsTUFBTSxPQUFPLFdBQU0sTUFBTTtBQUFBLENBQUk7QUFDaEUsc0JBQWMsSUFBSTtBQUNsQixzQkFBYyxtQkFBbUI7QUFDakM7QUFBQSxVQUNFLGVBQU0sS0FBSyx1Q0FBdUMsSUFBSTtBQUFBLFFBQ3hEO0FBQUEsTUFDRixPQUFPO0FBQ0wsc0JBQWMseUJBQXlCO0FBQUEsTUFDekM7QUFBQSxJQUNGLFdBQVcsbUJBQW1CLE9BQU87QUFDbkMsb0JBQWMsNkJBQTZCO0FBQzNDLFlBQU0sU0FBUyxNQUFNLGlCQUFpQixPQUFPO0FBQzdDLFVBQUksVUFBVSxDQUFDLElBQUksTUFBTSxTQUFTLE1BQU0sR0FBRztBQUN6QyxzQkFBYyxxQkFBcUIsTUFBTSxPQUFPLFdBQU0sTUFBTTtBQUFBLENBQUk7QUFDaEUsc0JBQWMsSUFBSTtBQUNsQixzQkFBYyxtQkFBbUI7QUFDakMsc0JBQWMsZUFBTSxLQUFLLDJCQUEyQixJQUFJLElBQUk7QUFBQSxNQUM5RCxPQUFPO0FBQ0wsc0JBQWMseUJBQXlCO0FBQUEsTUFDekM7QUFBQSxJQUNGLE9BQU87QUFJTCxvQkFBYywyQ0FBMkM7QUFDekQsb0JBQWMsOENBQThDO0FBQUEsSUFDOUQ7QUFFQSxVQUFNLGlCQUFpQixDQUFDO0FBQUEsRUFDMUI7QUFHQSxNQUNFLE9BQU8saUJBQ1AsV0FBVyx3QkFBd0IsYUFDbkMsV0FBVyxxQkFBcUIsbUJBQ2hDO0FBQ0EsVUFBTSxjQUFjLFdBQVc7QUFDL0IsVUFBTSxnQkFBZ0IsV0FBVztBQUdqQyxVQUFNLGNBQXNDO0FBQUEsTUFDMUMsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLElBQ1g7QUFFQSxVQUFNLHdCQUF3QixZQUFZLFdBQVcsS0FBSztBQUUxRCxRQUNFLDBCQUEwQixpQkFDMUIsa0JBQWtCLFdBQ2xCO0FBQ0Esb0JBQWMsSUFBSTtBQUNsQixvQkFBYyxlQUFNLE9BQU8saUNBQWlDLElBQUksSUFBSTtBQUNwRSxvQkFBYyxtQkFBbUIsYUFBYTtBQUFBLENBQWlCO0FBQy9ELG9CQUFjLHNCQUFzQixXQUFXO0FBQUEsQ0FBSTtBQUNuRDtBQUFBLFFBQ0UsZUFBTTtBQUFBLFVBQ0osZ0JBQWdCLFdBQVc7QUFBQSxRQUM3QixJQUFJO0FBQUEsTUFDTjtBQUdBLHVCQUFpQixjQUFZO0FBQUEsUUFDM0IsR0FBRztBQUFBLFFBQ0gsZUFBZTtBQUFBLE1BQ2pCLEVBQUU7QUFDRjtBQUFBLFFBQ0UsMERBQTBELHFCQUFxQjtBQUFBO0FBQUEsTUFDakY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUdBLE1BQUksV0FBVyxxQkFBcUIsVUFBVTtBQUM1QztBQUFBLE1BQ0U7QUFBQSxJQUNGO0FBQ0EsUUFBSTtBQUNGLFlBQU0sU0FBUyxNQUFNLGNBQW9CLFNBQVMsSUFBSTtBQUd0RCxVQUFJLE9BQU8sWUFBWTtBQUNyQixjQUFNLFVBQVUsT0FBTyxnQkFDbkIsU0FBUyxPQUFPLGFBQWEsTUFDN0I7QUFDSjtBQUFBLFVBQ0UsZUFBTTtBQUFBLFlBQ0oseUJBQXlCLE9BQU87QUFBQSxVQUNsQyxJQUFJO0FBQUEsUUFDTjtBQUNBLGNBQU0saUJBQWlCLENBQUM7QUFBQSxNQUMxQjtBQUVBLFVBQUksQ0FBQyxPQUFPLGVBQWU7QUFDekIsZ0JBQVEsT0FBTyxNQUFNLCtCQUErQjtBQUNwRCxjQUFNLGlCQUFpQixDQUFDO0FBQUEsTUFDMUI7QUFFQSxVQUFJLE9BQU8sa0JBQWtCLE1BQU0sU0FBUztBQUMxQztBQUFBLFVBQ0UsZUFBTSxNQUFNLHlCQUF5QixNQUFNLE9BQU8sR0FBRyxJQUFJO0FBQUEsUUFDM0Q7QUFBQSxNQUNGLE9BQU87QUFDTDtBQUFBLFVBQ0UsZUFBTTtBQUFBLFlBQ0osNkJBQTZCLE1BQU0sT0FBTyxlQUFlLE9BQU8sYUFBYTtBQUFBLFVBQy9FLElBQUk7QUFBQSxRQUNOO0FBQ0EsY0FBTSwwQkFBMEI7QUFBQSxNQUNsQztBQUNBLFlBQU0saUJBQWlCLENBQUM7QUFBQSxJQUMxQixTQUFTLE9BQU87QUFDZCxjQUFRLE9BQU8sTUFBTSwwQ0FBMEM7QUFDL0QsY0FBUSxPQUFPLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSTtBQUN6QyxjQUFRLE9BQU8sTUFBTSwrQ0FBK0M7QUFDcEUsWUFBTSxpQkFBaUIsQ0FBQztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUtBLE1BQUksT0FBTyxrQkFBa0IsVUFBVTtBQUNyQyxVQUFNLHVCQUF1QjtBQUFBLEVBQy9CO0FBRUEsa0JBQWdCLGtEQUFrRDtBQUNsRSxrQkFBZ0Isd0JBQXdCLE1BQU0sV0FBVyxFQUFFO0FBQzNELFFBQU0sU0FBUyxZQUFZLFdBQVcsV0FBVztBQUNqRCxRQUFNLGFBQWEsWUFBWSxNQUFNLFdBQVcsSUFBSSxNQUFNO0FBQzFELGtCQUFnQixvQkFBb0IsVUFBVSxFQUFFO0FBQ2hELFFBQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE9BQU87QUFDcEQ7QUFBQSxJQUNFLG9DQUFvQyxpQkFBaUIsUUFBUTtBQUFBLEVBQy9EO0FBRUEsTUFBSSxDQUFDLGVBQWU7QUFDbEIsb0JBQWdCLHdEQUF3RDtBQUN4RSxZQUFRLE9BQU8sTUFBTSxlQUFNLElBQUksNkJBQTZCLElBQUksSUFBSTtBQUNwRSxZQUFRLE9BQU8sTUFBTSxvREFBb0Q7QUFDekUsWUFBUSxPQUFPLE1BQU0sSUFBSTtBQUN6QixZQUFRLE9BQU8sTUFBTSxvQkFBb0I7QUFDekMsWUFBUSxPQUFPLE1BQU0sd0NBQW1DO0FBQ3hELFlBQVEsT0FBTyxNQUFNLHdDQUFtQztBQUN4RCxZQUFRLE9BQU8sTUFBTSxrREFBNkM7QUFDbEUsUUFBSSxNQUFNLGVBQWUsQ0FBQyxNQUFNLFlBQVksV0FBVyxZQUFZLEdBQUc7QUFDcEUsY0FBUSxPQUFPO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsWUFBUSxPQUFPLE1BQU0sSUFBSTtBQUN6QixZQUFRLE9BQU8sTUFBTSxRQUFRO0FBQzdCLFlBQVEsT0FBTyxNQUFNLDJDQUFzQztBQUMzRCxZQUFRLE9BQU8sTUFBTSxtREFBOEM7QUFDbkUsVUFBTSxjQUNKLE1BQU0sZ0JBQ0wsUUFBUSxJQUFJLGNBQWMsUUFDdkIsNkJBQ0E7QUFDTixZQUFRLE9BQU87QUFBQSxNQUNiLHFDQUFnQyxXQUFXO0FBQUE7QUFBQSxJQUM3QztBQUVBLFlBQVEsT0FBTyxNQUFNLG1EQUE4QztBQUNuRSxVQUFNLGlCQUFpQixDQUFDO0FBQUEsRUFDMUI7QUFHQSxNQUFJLGtCQUFrQixNQUFNLFNBQVM7QUFDbkM7QUFBQSxNQUNFLGVBQU0sTUFBTSx5QkFBeUIsTUFBTSxPQUFPLEdBQUcsSUFBSTtBQUFBLElBQzNEO0FBQ0EsVUFBTSxpQkFBaUIsQ0FBQztBQUFBLEVBQzFCO0FBRUE7QUFBQSxJQUNFLDBCQUEwQixhQUFhLGNBQWMsTUFBTSxPQUFPO0FBQUE7QUFBQSxFQUNwRTtBQUNBLGdCQUFjLHdCQUF3QjtBQUd0QyxNQUFJLGlCQUFpQjtBQUNyQixNQUFJLG1CQUFtQjtBQUV2QixVQUFRLFdBQVcsa0JBQWtCO0FBQUEsSUFDbkMsS0FBSztBQUNILHVCQUFpQjtBQUNqQix5QkFBbUI7QUFDbkI7QUFBQSxJQUNGLEtBQUs7QUFDSCx1QkFBaUI7QUFDakIseUJBQW1CO0FBQ25CO0FBQUEsSUFDRixLQUFLLFdBQVc7QUFFZCxZQUFNLFVBQVUsTUFBTSx3QkFBd0I7QUFDOUMsdUJBQWlCO0FBQ2pCLHlCQUFtQixVQUFVLFVBQVU7QUFDdkM7QUFBQSxRQUNFLGVBQU0sT0FBTyxnREFBZ0QsSUFBSTtBQUFBLE1BQ25FO0FBQ0E7QUFBQSxRQUNFLGNBQWMsZ0JBQWdCO0FBQUE7QUFBQSxNQUNoQztBQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFDRSxjQUFRLE9BQU87QUFBQSxRQUNiLHdCQUF3QixXQUFXLGdCQUFnQjtBQUFBO0FBQUEsTUFDckQ7QUFDQSxZQUFNLGlCQUFpQixDQUFDO0FBQUEsRUFDNUI7QUFFQSxnQkFBYyxTQUFTLGdCQUFnQjtBQUFBLENBQWtDO0FBRXpFLGtCQUFnQixxQ0FBcUMsZ0JBQWdCLEVBQUU7QUFDdkUsa0JBQWdCLDJCQUEyQixjQUFjLEVBQUU7QUFFM0QsTUFBSTtBQUVKLE1BQUksZ0JBQWdCO0FBQ2xCO0FBQUEsTUFDRTtBQUFBLElBQ0Y7QUFDQSxhQUFTLE1BQU0sNkJBQTZCLE9BQU87QUFBQSxFQUNyRCxPQUFPO0FBQ0wsb0JBQWdCLDBEQUEwRDtBQUMxRSxhQUFTLE1BQU0scUJBQXFCO0FBQUEsRUFDdEM7QUFFQSxrQkFBZ0IsZ0NBQWdDLE1BQU0sRUFBRTtBQUV4RCxVQUFRLFFBQVE7QUFBQSxJQUNkLEtBQUs7QUFDSDtBQUFBLFFBQ0UsZUFBTTtBQUFBLFVBQ0osNkJBQTZCLE1BQU0sT0FBTyxlQUFlLGFBQWE7QUFBQSxRQUN4RSxJQUFJO0FBQUEsTUFDTjtBQUNBLFlBQU0sMEJBQTBCO0FBQ2hDO0FBQUEsSUFDRixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLGdCQUFnQjtBQUNsQixnQkFBUSxPQUFPLE1BQU0sK0JBQStCO0FBQ3BELGdCQUFRLE9BQU87QUFBQSxVQUNiLHNDQUFzQyxNQUFNLFdBQVc7QUFBQTtBQUFBLFFBQ3pEO0FBQUEsTUFDRixPQUFPO0FBQ0wsZ0JBQVEsT0FBTyxNQUFNLGdEQUFnRDtBQUNyRSxnQkFBUSxPQUFPO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsWUFBTSxpQkFBaUIsQ0FBQztBQUN4QjtBQUFBLElBQ0YsS0FBSztBQUNILGNBQVEsT0FBTyxNQUFNLG1DQUFtQztBQUN4RCxVQUFJLGdCQUFnQjtBQUNsQixnQkFBUSxPQUFPLE1BQU0sK0JBQStCO0FBQ3BELGdCQUFRLE9BQU87QUFBQSxVQUNiLHNDQUFzQyxNQUFNLFdBQVc7QUFBQTtBQUFBLFFBQ3pEO0FBQUEsTUFDRixPQUFPO0FBQ0wsZ0JBQVEsT0FBTztBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLFlBQU0saUJBQWlCLENBQUM7QUFDeEI7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUNBLGNBQVEsT0FBTyxNQUFNLG1DQUFtQztBQUN4RCxZQUFNLGlCQUFpQixDQUFDO0FBQ3hCO0FBQUEsRUFDSjtBQUNBLFFBQU0saUJBQWlCLENBQUM7QUFDMUI7IiwKICAibmFtZXMiOiBbXQp9Cg==
