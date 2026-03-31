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
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import {
  init_completionCache,
  regenerateCompletionCache
} from "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getGlobalConfig,
  getInitialSettings,
  gte,
  init_config2 as init_config,
  init_semver,
  init_settings2 as init_settings,
  init_source,
  saveGlobalConfig,
  source_default
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
      writeToStdout("Claude is managed by Homebrew.\n");
      const latest = await getLatestVersion(channel);
      if (latest && !gte(MACRO.VERSION, latest)) {
        writeToStdout(`Update available: ${MACRO.VERSION} \u2192 ${latest}
`);
        writeToStdout("\n");
        writeToStdout("To update, run:\n");
        writeToStdout(source_default.bold("  brew upgrade claude-code") + "\n");
      } else {
        writeToStdout("Claude is up to date!\n");
      }
    } else if (packageManager === "winget") {
      writeToStdout("Claude is managed by winget.\n");
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
        writeToStdout("Claude is up to date!\n");
      }
    } else if (packageManager === "apk") {
      writeToStdout("Claude is managed by apk.\n");
      const latest = await getLatestVersion(channel);
      if (latest && !gte(MACRO.VERSION, latest)) {
        writeToStdout(`Update available: ${MACRO.VERSION} \u2192 ${latest}
`);
        writeToStdout("\n");
        writeToStdout("To update, run:\n");
        writeToStdout(source_default.bold("  apk upgrade claude-code") + "\n");
      } else {
        writeToStdout("Claude is up to date!\n");
      }
    } else {
      writeToStdout("Claude is managed by a package manager.\n");
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
            `Another Claude process${pidInfo} is currently running. Please try again in a moment.`
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
          source_default.green(`Claude Code is up to date (${MACRO.VERSION})`) + "\n"
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
      process.stderr.write('Try running "claude doctor" for diagnostics\n');
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
      source_default.green(`Claude Code is up to date (${MACRO.VERSION})`) + "\n"
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
          "Or consider using native installation with: claude install\n"
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
          "Or consider using native installation with: claude install\n"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS91cGRhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIGdldExhdGVzdFZlcnNpb24sXG4gIHR5cGUgSW5zdGFsbFN0YXR1cyxcbiAgaW5zdGFsbEdsb2JhbFBhY2thZ2UsXG59IGZyb20gJ3NyYy91dGlscy9hdXRvVXBkYXRlci5qcydcbmltcG9ydCB7IHJlZ2VuZXJhdGVDb21wbGV0aW9uQ2FjaGUgfSBmcm9tICdzcmMvdXRpbHMvY29tcGxldGlvbkNhY2hlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0R2xvYmFsQ29uZmlnLFxuICB0eXBlIEluc3RhbGxNZXRob2QsXG4gIHNhdmVHbG9iYWxDb25maWcsXG59IGZyb20gJ3NyYy91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICdzcmMvdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBnZXREb2N0b3JEaWFnbm9zdGljIH0gZnJvbSAnc3JjL3V0aWxzL2RvY3RvckRpYWdub3N0aWMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnc3JjL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQge1xuICBpbnN0YWxsT3JVcGRhdGVDbGF1ZGVQYWNrYWdlLFxuICBsb2NhbEluc3RhbGxhdGlvbkV4aXN0cyxcbn0gZnJvbSAnc3JjL3V0aWxzL2xvY2FsSW5zdGFsbGVyLmpzJ1xuaW1wb3J0IHtcbiAgaW5zdGFsbExhdGVzdCBhcyBpbnN0YWxsTGF0ZXN0TmF0aXZlLFxuICByZW1vdmVJbnN0YWxsZWRTeW1saW5rLFxufSBmcm9tICdzcmMvdXRpbHMvbmF0aXZlSW5zdGFsbGVyL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0UGFja2FnZU1hbmFnZXIgfSBmcm9tICdzcmMvdXRpbHMvbmF0aXZlSW5zdGFsbGVyL3BhY2thZ2VNYW5hZ2Vycy5qcydcbmltcG9ydCB7IHdyaXRlVG9TdGRvdXQgfSBmcm9tICdzcmMvdXRpbHMvcHJvY2Vzcy5qcydcbmltcG9ydCB7IGd0ZSB9IGZyb20gJ3NyYy91dGlscy9zZW12ZXIuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV91cGRhdGVfY2hlY2snLCB7fSlcbiAgd3JpdGVUb1N0ZG91dChgQ3VycmVudCB2ZXJzaW9uOiAke01BQ1JPLlZFUlNJT059XFxuYClcblxuICBjb25zdCBjaGFubmVsID0gZ2V0SW5pdGlhbFNldHRpbmdzKCk/LmF1dG9VcGRhdGVzQ2hhbm5lbCA/PyAnbGF0ZXN0J1xuICB3cml0ZVRvU3Rkb3V0KGBDaGVja2luZyBmb3IgdXBkYXRlcyB0byAke2NoYW5uZWx9IHZlcnNpb24uLi5cXG5gKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBTdGFydGluZyB1cGRhdGUgY2hlY2snKVxuXG4gIC8vIFJ1biBkaWFnbm9zdGljIHRvIGRldGVjdCBwb3RlbnRpYWwgaXNzdWVzXG4gIGxvZ0ZvckRlYnVnZ2luZygndXBkYXRlOiBSdW5uaW5nIGRpYWdub3N0aWMnKVxuICBjb25zdCBkaWFnbm9zdGljID0gYXdhaXQgZ2V0RG9jdG9yRGlhZ25vc3RpYygpXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBJbnN0YWxsYXRpb24gdHlwZTogJHtkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGV9YClcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGB1cGRhdGU6IENvbmZpZyBpbnN0YWxsIG1ldGhvZDogJHtkaWFnbm9zdGljLmNvbmZpZ0luc3RhbGxNZXRob2R9YCxcbiAgKVxuXG4gIC8vIENoZWNrIGZvciBtdWx0aXBsZSBpbnN0YWxsYXRpb25zXG4gIGlmIChkaWFnbm9zdGljLm11bHRpcGxlSW5zdGFsbGF0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLnllbGxvdygnV2FybmluZzogTXVsdGlwbGUgaW5zdGFsbGF0aW9ucyBmb3VuZCcpICsgJ1xcbicpXG4gICAgZm9yIChjb25zdCBpbnN0YWxsIG9mIGRpYWdub3N0aWMubXVsdGlwbGVJbnN0YWxsYXRpb25zKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgICAgZGlhZ25vc3RpYy5pbnN0YWxsYXRpb25UeXBlID09PSBpbnN0YWxsLnR5cGVcbiAgICAgICAgICA/ICcgKGN1cnJlbnRseSBydW5uaW5nKSdcbiAgICAgICAgICA6ICcnXG4gICAgICB3cml0ZVRvU3Rkb3V0KGAtICR7aW5zdGFsbC50eXBlfSBhdCAke2luc3RhbGwucGF0aH0ke2N1cnJlbnR9XFxuYClcbiAgICB9XG4gIH1cblxuICAvLyBEaXNwbGF5IHdhcm5pbmdzIGlmIGFueSBleGlzdFxuICBpZiAoZGlhZ25vc3RpYy53YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICBmb3IgKGNvbnN0IHdhcm5pbmcgb2YgZGlhZ25vc3RpYy53YXJuaW5ncykge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGB1cGRhdGU6IFdhcm5pbmcgZGV0ZWN0ZWQ6ICR7d2FybmluZy5pc3N1ZX1gKVxuXG4gICAgICAvLyBEb24ndCBza2lwIFBBVEggd2FybmluZ3MgLSB0aGV5J3JlIGFsd2F5cyByZWxldmFudFxuICAgICAgLy8gVGhlIHVzZXIgbmVlZHMgdG8ga25vdyB0aGF0ICd3aGljaCBjbGF1ZGUnIHBvaW50cyBlbHNld2hlcmVcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBTaG93aW5nIHdhcm5pbmc6ICR7d2FybmluZy5pc3N1ZX1gKVxuXG4gICAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLnllbGxvdyhgV2FybmluZzogJHt3YXJuaW5nLmlzc3VlfVxcbmApKVxuXG4gICAgICB3cml0ZVRvU3Rkb3V0KGNoYWxrLmJvbGQoYEZpeDogJHt3YXJuaW5nLmZpeH1cXG5gKSlcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgY29uZmlnIGlmIGluc3RhbGxNZXRob2QgaXMgbm90IHNldCAoYnV0IHNraXAgZm9yIHBhY2thZ2UgbWFuYWdlcnMpXG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIGlmIChcbiAgICAhY29uZmlnLmluc3RhbGxNZXRob2QgJiZcbiAgICBkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGUgIT09ICdwYWNrYWdlLW1hbmFnZXInXG4gICkge1xuICAgIHdyaXRlVG9TdGRvdXQoJ1xcbicpXG4gICAgd3JpdGVUb1N0ZG91dCgnVXBkYXRpbmcgY29uZmlndXJhdGlvbiB0byB0cmFjayBpbnN0YWxsYXRpb24gbWV0aG9kLi4uXFxuJylcbiAgICBsZXQgZGV0ZWN0ZWRNZXRob2Q6ICdsb2NhbCcgfCAnbmF0aXZlJyB8ICdnbG9iYWwnIHwgJ3Vua25vd24nID0gJ3Vua25vd24nXG5cbiAgICAvLyBNYXAgZGlhZ25vc3RpYyBpbnN0YWxsYXRpb24gdHlwZSB0byBjb25maWcgaW5zdGFsbCBtZXRob2RcbiAgICBzd2l0Y2ggKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSkge1xuICAgICAgY2FzZSAnbnBtLWxvY2FsJzpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAnbG9jYWwnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICduYXRpdmUnOlxuICAgICAgICBkZXRlY3RlZE1ldGhvZCA9ICduYXRpdmUnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICducG0tZ2xvYmFsJzpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAnZ2xvYmFsJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGV0ZWN0ZWRNZXRob2QgPSAndW5rbm93bidcbiAgICB9XG5cbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBpbnN0YWxsTWV0aG9kOiBkZXRlY3RlZE1ldGhvZCxcbiAgICB9KSlcbiAgICB3cml0ZVRvU3Rkb3V0KGBJbnN0YWxsYXRpb24gbWV0aG9kIHNldCB0bzogJHtkZXRlY3RlZE1ldGhvZH1cXG5gKVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgcnVubmluZyBmcm9tIGRldmVsb3BtZW50IGJ1aWxkXG4gIGlmIChkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB3cml0ZVRvU3Rkb3V0KCdcXG4nKVxuICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICBjaGFsay55ZWxsb3coJ1dhcm5pbmc6IENhbm5vdCB1cGRhdGUgZGV2ZWxvcG1lbnQgYnVpbGQnKSArICdcXG4nLFxuICAgIClcbiAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDEpXG4gIH1cblxuICAvLyBDaGVjayBpZiBydW5uaW5nIGZyb20gYSBwYWNrYWdlIG1hbmFnZXJcbiAgaWYgKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSA9PT0gJ3BhY2thZ2UtbWFuYWdlcicpIHtcbiAgICBjb25zdCBwYWNrYWdlTWFuYWdlciA9IGF3YWl0IGdldFBhY2thZ2VNYW5hZ2VyKClcbiAgICB3cml0ZVRvU3Rkb3V0KCdcXG4nKVxuXG4gICAgaWYgKHBhY2thZ2VNYW5hZ2VyID09PSAnaG9tZWJyZXcnKSB7XG4gICAgICB3cml0ZVRvU3Rkb3V0KCdDbGF1ZGUgaXMgbWFuYWdlZCBieSBIb21lYnJldy5cXG4nKVxuICAgICAgY29uc3QgbGF0ZXN0ID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihjaGFubmVsKVxuICAgICAgaWYgKGxhdGVzdCAmJiAhZ3RlKE1BQ1JPLlZFUlNJT04sIGxhdGVzdCkpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChgVXBkYXRlIGF2YWlsYWJsZTogJHtNQUNSTy5WRVJTSU9OfSBcdTIxOTIgJHtsYXRlc3R9XFxuYClcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnVG8gdXBkYXRlLCBydW46XFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dChjaGFsay5ib2xkKCcgIGJyZXcgdXBncmFkZSBjbGF1ZGUtY29kZScpICsgJ1xcbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KCdDbGF1ZGUgaXMgdXAgdG8gZGF0ZSFcXG4nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFja2FnZU1hbmFnZXIgPT09ICd3aW5nZXQnKSB7XG4gICAgICB3cml0ZVRvU3Rkb3V0KCdDbGF1ZGUgaXMgbWFuYWdlZCBieSB3aW5nZXQuXFxuJylcbiAgICAgIGNvbnN0IGxhdGVzdCA9IGF3YWl0IGdldExhdGVzdFZlcnNpb24oY2hhbm5lbClcbiAgICAgIGlmIChsYXRlc3QgJiYgIWd0ZShNQUNSTy5WRVJTSU9OLCBsYXRlc3QpKSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoYFVwZGF0ZSBhdmFpbGFibGU6ICR7TUFDUk8uVkVSU0lPTn0gXHUyMTkyICR7bGF0ZXN0fVxcbmApXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ1xcbicpXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ1RvIHVwZGF0ZSwgcnVuOlxcbicpXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgICAgY2hhbGsuYm9sZCgnICB3aW5nZXQgdXBncmFkZSBBbnRocm9waWMuQ2xhdWRlQ29kZScpICsgJ1xcbicsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ0NsYXVkZSBpcyB1cCB0byBkYXRlIVxcbicpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWNrYWdlTWFuYWdlciA9PT0gJ2FwaycpIHtcbiAgICAgIHdyaXRlVG9TdGRvdXQoJ0NsYXVkZSBpcyBtYW5hZ2VkIGJ5IGFway5cXG4nKVxuICAgICAgY29uc3QgbGF0ZXN0ID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihjaGFubmVsKVxuICAgICAgaWYgKGxhdGVzdCAmJiAhZ3RlKE1BQ1JPLlZFUlNJT04sIGxhdGVzdCkpIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChgVXBkYXRlIGF2YWlsYWJsZTogJHtNQUNSTy5WRVJTSU9OfSBcdTIxOTIgJHtsYXRlc3R9XFxuYClcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dCgnVG8gdXBkYXRlLCBydW46XFxuJylcbiAgICAgICAgd3JpdGVUb1N0ZG91dChjaGFsay5ib2xkKCcgIGFwayB1cGdyYWRlIGNsYXVkZS1jb2RlJykgKyAnXFxuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoJ0NsYXVkZSBpcyB1cCB0byBkYXRlIVxcbicpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHBhY21hbiwgZGViLCBhbmQgcnBtIGRvbid0IGdldCBzcGVjaWZpYyBjb21tYW5kcyBiZWNhdXNlIHRoZXkgZWFjaCBoYXZlXG4gICAgICAvLyBtdWx0aXBsZSBmcm9udGVuZHMgKHBhY21hbjogeWF5L3BhcnUvbWFrZXBrZywgZGViOiBhcHQvYXB0LWdldC9hcHRpdHVkZS9uYWxhLFxuICAgICAgLy8gcnBtOiBkbmYveXVtL3p5cHBlcilcbiAgICAgIHdyaXRlVG9TdGRvdXQoJ0NsYXVkZSBpcyBtYW5hZ2VkIGJ5IGEgcGFja2FnZSBtYW5hZ2VyLlxcbicpXG4gICAgICB3cml0ZVRvU3Rkb3V0KCdQbGVhc2UgdXNlIHlvdXIgcGFja2FnZSBtYW5hZ2VyIHRvIHVwZGF0ZS5cXG4nKVxuICAgIH1cblxuICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBjb25maWcvcmVhbGl0eSBtaXNtYXRjaCAoc2tpcCBmb3IgcGFja2FnZS1tYW5hZ2VyIGluc3RhbGxzKVxuICBpZiAoXG4gICAgY29uZmlnLmluc3RhbGxNZXRob2QgJiZcbiAgICBkaWFnbm9zdGljLmNvbmZpZ0luc3RhbGxNZXRob2QgIT09ICdub3Qgc2V0JyAmJlxuICAgIGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSAhPT0gJ3BhY2thZ2UtbWFuYWdlcidcbiAgKSB7XG4gICAgY29uc3QgcnVubmluZ1R5cGUgPSBkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGVcbiAgICBjb25zdCBjb25maWdFeHBlY3RzID0gZGlhZ25vc3RpYy5jb25maWdJbnN0YWxsTWV0aG9kXG5cbiAgICAvLyBNYXAgaW5zdGFsbGF0aW9uIHR5cGVzIGZvciBjb21wYXJpc29uXG4gICAgY29uc3QgdHlwZU1hcHBpbmc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnbnBtLWxvY2FsJzogJ2xvY2FsJyxcbiAgICAgICducG0tZ2xvYmFsJzogJ2dsb2JhbCcsXG4gICAgICBuYXRpdmU6ICduYXRpdmUnLFxuICAgICAgZGV2ZWxvcG1lbnQ6ICdkZXZlbG9wbWVudCcsXG4gICAgICB1bmtub3duOiAndW5rbm93bicsXG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZFJ1bm5pbmdUeXBlID0gdHlwZU1hcHBpbmdbcnVubmluZ1R5cGVdIHx8IHJ1bm5pbmdUeXBlXG5cbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVkUnVubmluZ1R5cGUgIT09IGNvbmZpZ0V4cGVjdHMgJiZcbiAgICAgIGNvbmZpZ0V4cGVjdHMgIT09ICd1bmtub3duJ1xuICAgICkge1xuICAgICAgd3JpdGVUb1N0ZG91dCgnXFxuJylcbiAgICAgIHdyaXRlVG9TdGRvdXQoY2hhbGsueWVsbG93KCdXYXJuaW5nOiBDb25maWd1cmF0aW9uIG1pc21hdGNoJykgKyAnXFxuJylcbiAgICAgIHdyaXRlVG9TdGRvdXQoYENvbmZpZyBleHBlY3RzOiAke2NvbmZpZ0V4cGVjdHN9IGluc3RhbGxhdGlvblxcbmApXG4gICAgICB3cml0ZVRvU3Rkb3V0KGBDdXJyZW50bHkgcnVubmluZzogJHtydW5uaW5nVHlwZX1cXG5gKVxuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgY2hhbGsueWVsbG93KFxuICAgICAgICAgIGBVcGRhdGluZyB0aGUgJHtydW5uaW5nVHlwZX0gaW5zdGFsbGF0aW9uIHlvdSBhcmUgY3VycmVudGx5IHVzaW5nYCxcbiAgICAgICAgKSArICdcXG4nLFxuICAgICAgKVxuXG4gICAgICAvLyBVcGRhdGUgY29uZmlnIHRvIG1hdGNoIHJlYWxpdHlcbiAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBpbnN0YWxsTWV0aG9kOiBub3JtYWxpemVkUnVubmluZ1R5cGUgYXMgSW5zdGFsbE1ldGhvZCxcbiAgICAgIH0pKVxuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgYENvbmZpZyB1cGRhdGVkIHRvIHJlZmxlY3QgY3VycmVudCBpbnN0YWxsYXRpb24gbWV0aG9kOiAke25vcm1hbGl6ZWRSdW5uaW5nVHlwZX1cXG5gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBuYXRpdmUgaW5zdGFsbGF0aW9uIHVwZGF0ZXMgZmlyc3RcbiAgaWYgKGRpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZSA9PT0gJ25hdGl2ZScpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAndXBkYXRlOiBEZXRlY3RlZCBuYXRpdmUgaW5zdGFsbGF0aW9uLCB1c2luZyBuYXRpdmUgdXBkYXRlcicsXG4gICAgKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnN0YWxsTGF0ZXN0TmF0aXZlKGNoYW5uZWwsIHRydWUpXG5cbiAgICAgIC8vIEhhbmRsZSBsb2NrIGNvbnRlbnRpb24gZ3JhY2VmdWxseVxuICAgICAgaWYgKHJlc3VsdC5sb2NrRmFpbGVkKSB7XG4gICAgICAgIGNvbnN0IHBpZEluZm8gPSByZXN1bHQubG9ja0hvbGRlclBpZFxuICAgICAgICAgID8gYCAoUElEICR7cmVzdWx0LmxvY2tIb2xkZXJQaWR9KWBcbiAgICAgICAgICA6ICcnXG4gICAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgICAgY2hhbGsueWVsbG93KFxuICAgICAgICAgICAgYEFub3RoZXIgQ2xhdWRlIHByb2Nlc3Mke3BpZEluZm99IGlzIGN1cnJlbnRseSBydW5uaW5nLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbW9tZW50LmAsXG4gICAgICAgICAgKSArICdcXG4nLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXN1bHQubGF0ZXN0VmVyc2lvbikge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnRmFpbGVkIHRvIGNoZWNrIGZvciB1cGRhdGVzXFxuJylcbiAgICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmxhdGVzdFZlcnNpb24gPT09IE1BQ1JPLlZFUlNJT04pIHtcbiAgICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgICBjaGFsay5ncmVlbihgQ2xhdWRlIENvZGUgaXMgdXAgdG8gZGF0ZSAoJHtNQUNSTy5WRVJTSU9OfSlgKSArICdcXG4nLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KFxuICAgICAgICAgIGNoYWxrLmdyZWVuKFxuICAgICAgICAgICAgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIGZyb20gJHtNQUNSTy5WRVJTSU9OfSB0byB2ZXJzaW9uICR7cmVzdWx0LmxhdGVzdFZlcnNpb259YCxcbiAgICAgICAgICApICsgJ1xcbicsXG4gICAgICAgIClcbiAgICAgICAgYXdhaXQgcmVnZW5lcmF0ZUNvbXBsZXRpb25DYWNoZSgpXG4gICAgICB9XG4gICAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdFcnJvcjogRmFpbGVkIHRvIGluc3RhbGwgbmF0aXZlIHVwZGF0ZVxcbicpXG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShTdHJpbmcoZXJyb3IpICsgJ1xcbicpXG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnVHJ5IHJ1bm5pbmcgXCJjbGF1ZGUgZG9jdG9yXCIgZm9yIGRpYWdub3N0aWNzXFxuJylcbiAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMSlcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjayB0byBleGlzdGluZyBKUy9ucG0tYmFzZWQgdXBkYXRlIGxvZ2ljXG4gIC8vIFJlbW92ZSBuYXRpdmUgaW5zdGFsbGVyIHN5bWxpbmsgc2luY2Ugd2UncmUgbm90IHVzaW5nIG5hdGl2ZSBpbnN0YWxsYXRpb25cbiAgLy8gQnV0IG9ubHkgaWYgdXNlciBoYXNuJ3QgbWlncmF0ZWQgdG8gbmF0aXZlIGluc3RhbGxhdGlvblxuICBpZiAoY29uZmlnLmluc3RhbGxNZXRob2QgIT09ICduYXRpdmUnKSB7XG4gICAgYXdhaXQgcmVtb3ZlSW5zdGFsbGVkU3ltbGluaygpXG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoJ3VwZGF0ZTogQ2hlY2tpbmcgbnBtIHJlZ2lzdHJ5IGZvciBsYXRlc3QgdmVyc2lvbicpXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBQYWNrYWdlIFVSTDogJHtNQUNSTy5QQUNLQUdFX1VSTH1gKVxuICBjb25zdCBucG1UYWcgPSBjaGFubmVsID09PSAnc3RhYmxlJyA/ICdzdGFibGUnIDogJ2xhdGVzdCdcbiAgY29uc3QgbnBtQ29tbWFuZCA9IGBucG0gdmlldyAke01BQ1JPLlBBQ0tBR0VfVVJMfUAke25wbVRhZ30gdmVyc2lvbmBcbiAgbG9nRm9yRGVidWdnaW5nKGB1cGRhdGU6IFJ1bm5pbmc6ICR7bnBtQ29tbWFuZH1gKVxuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihjaGFubmVsKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYHVwZGF0ZTogTGF0ZXN0IHZlcnNpb24gZnJvbSBucG06ICR7bGF0ZXN0VmVyc2lvbiB8fCAnRkFJTEVEJ31gLFxuICApXG5cbiAgaWYgKCFsYXRlc3RWZXJzaW9uKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCd1cGRhdGU6IEZhaWxlZCB0byBnZXQgbGF0ZXN0IHZlcnNpb24gZnJvbSBucG0gcmVnaXN0cnknKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNoYWxrLnJlZCgnRmFpbGVkIHRvIGNoZWNrIGZvciB1cGRhdGVzJykgKyAnXFxuJylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnVW5hYmxlIHRvIGZldGNoIGxhdGVzdCB2ZXJzaW9uIGZyb20gbnBtIHJlZ2lzdHJ5XFxuJylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnXFxuJylcbiAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnUG9zc2libGUgY2F1c2VzOlxcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJyAgXHUyMDIyIE5ldHdvcmsgY29ubmVjdGl2aXR5IGlzc3Vlc1xcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJyAgXHUyMDIyIG5wbSByZWdpc3RyeSBpcyB1bnJlYWNoYWJsZVxcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJyAgXHUyMDIyIENvcnBvcmF0ZSBwcm94eS9maXJld2FsbCBibG9ja2luZyBucG1cXG4nKVxuICAgIGlmIChNQUNSTy5QQUNLQUdFX1VSTCAmJiAhTUFDUk8uUEFDS0FHRV9VUkwuc3RhcnRzV2l0aCgnQGFudGhyb3BpYycpKSB7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgJyAgXHUyMDIyIEludGVybmFsL2RldmVsb3BtZW50IGJ1aWxkIG5vdCBwdWJsaXNoZWQgdG8gbnBtXFxuJyxcbiAgICAgIClcbiAgICB9XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1xcbicpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ1RyeTpcXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBDaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cXG4nKVxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBSdW4gd2l0aCAtLWRlYnVnIGZsYWcgZm9yIG1vcmUgZGV0YWlsc1xcbicpXG4gICAgY29uc3QgcGFja2FnZU5hbWUgPVxuICAgICAgTUFDUk8uUEFDS0FHRV9VUkwgfHxcbiAgICAgIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgICAgID8gJ0BhbnRocm9waWMtYWkvY2xhdWRlLWNsaSdcbiAgICAgICAgOiAnQGFudGhyb3BpYy1haS9jbGF1ZGUtY29kZScpXG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICBgICBcdTIwMjIgTWFudWFsbHkgY2hlY2s6IG5wbSB2aWV3ICR7cGFja2FnZU5hbWV9IHZlcnNpb25cXG5gLFxuICAgIClcblxuICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCcgIFx1MjAyMiBDaGVjayBpZiB5b3UgbmVlZCB0byBsb2dpbjogbnBtIHdob2FtaVxcbicpXG4gICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdmVyc2lvbnMgbWF0Y2ggZXhhY3RseSwgaW5jbHVkaW5nIGFueSBidWlsZCBtZXRhZGF0YSAobGlrZSBTSEEpXG4gIGlmIChsYXRlc3RWZXJzaW9uID09PSBNQUNSTy5WRVJTSU9OKSB7XG4gICAgd3JpdGVUb1N0ZG91dChcbiAgICAgIGNoYWxrLmdyZWVuKGBDbGF1ZGUgQ29kZSBpcyB1cCB0byBkYXRlICgke01BQ1JPLlZFUlNJT059KWApICsgJ1xcbicsXG4gICAgKVxuICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbiAgfVxuXG4gIHdyaXRlVG9TdGRvdXQoXG4gICAgYE5ldyB2ZXJzaW9uIGF2YWlsYWJsZTogJHtsYXRlc3RWZXJzaW9ufSAoY3VycmVudDogJHtNQUNSTy5WRVJTSU9OfSlcXG5gLFxuICApXG4gIHdyaXRlVG9TdGRvdXQoJ0luc3RhbGxpbmcgdXBkYXRlLi4uXFxuJylcblxuICAvLyBEZXRlcm1pbmUgdXBkYXRlIG1ldGhvZCBiYXNlZCBvbiB3aGF0J3MgYWN0dWFsbHkgcnVubmluZ1xuICBsZXQgdXNlTG9jYWxVcGRhdGUgPSBmYWxzZVxuICBsZXQgdXBkYXRlTWV0aG9kTmFtZSA9ICcnXG5cbiAgc3dpdGNoIChkaWFnbm9zdGljLmluc3RhbGxhdGlvblR5cGUpIHtcbiAgICBjYXNlICducG0tbG9jYWwnOlxuICAgICAgdXNlTG9jYWxVcGRhdGUgPSB0cnVlXG4gICAgICB1cGRhdGVNZXRob2ROYW1lID0gJ2xvY2FsJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICducG0tZ2xvYmFsJzpcbiAgICAgIHVzZUxvY2FsVXBkYXRlID0gZmFsc2VcbiAgICAgIHVwZGF0ZU1ldGhvZE5hbWUgPSAnZ2xvYmFsJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICd1bmtub3duJzoge1xuICAgICAgLy8gRmFsbGJhY2sgdG8gZGV0ZWN0aW9uIGlmIHdlIGNhbid0IGRldGVybWluZSBpbnN0YWxsYXRpb24gdHlwZVxuICAgICAgY29uc3QgaXNMb2NhbCA9IGF3YWl0IGxvY2FsSW5zdGFsbGF0aW9uRXhpc3RzKClcbiAgICAgIHVzZUxvY2FsVXBkYXRlID0gaXNMb2NhbFxuICAgICAgdXBkYXRlTWV0aG9kTmFtZSA9IGlzTG9jYWwgPyAnbG9jYWwnIDogJ2dsb2JhbCdcbiAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgIGNoYWxrLnllbGxvdygnV2FybmluZzogQ291bGQgbm90IGRldGVybWluZSBpbnN0YWxsYXRpb24gdHlwZScpICsgJ1xcbicsXG4gICAgICApXG4gICAgICB3cml0ZVRvU3Rkb3V0KFxuICAgICAgICBgQXR0ZW1wdGluZyAke3VwZGF0ZU1ldGhvZE5hbWV9IHVwZGF0ZSBiYXNlZCBvbiBmaWxlIGRldGVjdGlvbi4uLlxcbmAsXG4gICAgICApXG4gICAgICBicmVha1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgIGBFcnJvcjogQ2Fubm90IHVwZGF0ZSAke2RpYWdub3N0aWMuaW5zdGFsbGF0aW9uVHlwZX0gaW5zdGFsbGF0aW9uXFxuYCxcbiAgICAgIClcbiAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMSlcbiAgfVxuXG4gIHdyaXRlVG9TdGRvdXQoYFVzaW5nICR7dXBkYXRlTWV0aG9kTmFtZX0gaW5zdGFsbGF0aW9uIHVwZGF0ZSBtZXRob2QuLi5cXG5gKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBVcGRhdGUgbWV0aG9kIGRldGVybWluZWQ6ICR7dXBkYXRlTWV0aG9kTmFtZX1gKVxuICBsb2dGb3JEZWJ1Z2dpbmcoYHVwZGF0ZTogdXNlTG9jYWxVcGRhdGU6ICR7dXNlTG9jYWxVcGRhdGV9YClcblxuICBsZXQgc3RhdHVzOiBJbnN0YWxsU3RhdHVzXG5cbiAgaWYgKHVzZUxvY2FsVXBkYXRlKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ3VwZGF0ZTogQ2FsbGluZyBpbnN0YWxsT3JVcGRhdGVDbGF1ZGVQYWNrYWdlKCkgZm9yIGxvY2FsIHVwZGF0ZScsXG4gICAgKVxuICAgIHN0YXR1cyA9IGF3YWl0IGluc3RhbGxPclVwZGF0ZUNsYXVkZVBhY2thZ2UoY2hhbm5lbClcbiAgfSBlbHNlIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ3VwZGF0ZTogQ2FsbGluZyBpbnN0YWxsR2xvYmFsUGFja2FnZSgpIGZvciBnbG9iYWwgdXBkYXRlJylcbiAgICBzdGF0dXMgPSBhd2FpdCBpbnN0YWxsR2xvYmFsUGFja2FnZSgpXG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoYHVwZGF0ZTogSW5zdGFsbGF0aW9uIHN0YXR1czogJHtzdGF0dXN9YClcblxuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgd3JpdGVUb1N0ZG91dChcbiAgICAgICAgY2hhbGsuZ3JlZW4oXG4gICAgICAgICAgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIGZyb20gJHtNQUNSTy5WRVJTSU9OfSB0byB2ZXJzaW9uICR7bGF0ZXN0VmVyc2lvbn1gLFxuICAgICAgICApICsgJ1xcbicsXG4gICAgICApXG4gICAgICBhd2FpdCByZWdlbmVyYXRlQ29tcGxldGlvbkNhY2hlKClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbm9fcGVybWlzc2lvbnMnOlxuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgICdFcnJvcjogSW5zdWZmaWNpZW50IHBlcm1pc3Npb25zIHRvIGluc3RhbGwgdXBkYXRlXFxuJyxcbiAgICAgIClcbiAgICAgIGlmICh1c2VMb2NhbFVwZGF0ZSkge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnVHJ5IG1hbnVhbGx5IHVwZGF0aW5nIHdpdGg6XFxuJylcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgICAgYCAgY2Qgfi8uY2xhdWRlL2xvY2FsICYmIG5wbSB1cGRhdGUgJHtNQUNSTy5QQUNLQUdFX1VSTH1cXG5gLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnVHJ5IHJ1bm5pbmcgd2l0aCBzdWRvIG9yIGZpeCBucG0gcGVybWlzc2lvbnNcXG4nKVxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgICAnT3IgY29uc2lkZXIgdXNpbmcgbmF0aXZlIGluc3RhbGxhdGlvbiB3aXRoOiBjbGF1ZGUgaW5zdGFsbFxcbicsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaW5zdGFsbF9mYWlsZWQnOlxuICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoJ0Vycm9yOiBGYWlsZWQgdG8gaW5zdGFsbCB1cGRhdGVcXG4nKVxuICAgICAgaWYgKHVzZUxvY2FsVXBkYXRlKSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdUcnkgbWFudWFsbHkgdXBkYXRpbmcgd2l0aDpcXG4nKVxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgICBgICBjZCB+Ly5jbGF1ZGUvbG9jYWwgJiYgbnBtIHVwZGF0ZSAke01BQ1JPLlBBQ0tBR0VfVVJMfVxcbmAsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFxuICAgICAgICAgICdPciBjb25zaWRlciB1c2luZyBuYXRpdmUgaW5zdGFsbGF0aW9uIHdpdGg6IGNsYXVkZSBpbnN0YWxsXFxuJyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigxKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdpbl9wcm9ncmVzcyc6XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShcbiAgICAgICAgJ0Vycm9yOiBBbm90aGVyIGluc3RhbmNlIGlzIGN1cnJlbnRseSBwZXJmb3JtaW5nIGFuIHVwZGF0ZVxcbicsXG4gICAgICApXG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZSgnUGxlYXNlIHdhaXQgYW5kIHRyeSBhZ2FpbiBsYXRlclxcbicpXG4gICAgICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDEpXG4gICAgICBicmVha1xuICB9XG4gIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtB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
