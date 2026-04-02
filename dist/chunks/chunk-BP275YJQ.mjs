#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  BROWSER_TOOLS,
  init_ant_claude_for_chrome_mcp
} from "./chunk-7DA2PBIX.mjs";
import {
  getChromeSystemPrompt,
  init_prompt
} from "./chunk-UPQJMBLU.mjs";
import {
  CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  getAllBrowserDataPaths,
  getAllNativeMessagingHostsDirs,
  getAllWindowsRegistryKeys,
  init_common,
  openInChrome
} from "./chunk-B5LIYBEU.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  init_config,
  init_growthbook,
  saveGlobalConfig
} from "./chunk-JQ55XPLZ.mjs";
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-TR6BOGPZ.mjs";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  init_debug,
  init_errors,
  init_slowOperations,
  isFsInaccessible,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getIsInteractive,
  getIsNonInteractiveSession,
  getSessionBypassPermissionsMode,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvDefinedFalsy,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/claudeInChrome/setupPortable.ts
import { readdir } from "fs/promises";
import { join } from "path";
function getExtensionIds() {
  return process.env.USER_TYPE === "ant" ? [PROD_EXTENSION_ID, DEV_EXTENSION_ID, ANT_EXTENSION_ID] : [PROD_EXTENSION_ID];
}
async function detectExtensionInstallationPortable(browserPaths, log) {
  if (browserPaths.length === 0) {
    log?.(`[Claude in Chrome] No browser paths to check`);
    return { isInstalled: false, browser: null };
  }
  const extensionIds = getExtensionIds();
  for (const { browser, path: browserBasePath } of browserPaths) {
    let browserProfileEntries = [];
    try {
      browserProfileEntries = await readdir(browserBasePath, {
        withFileTypes: true
      });
    } catch (e) {
      if (isFsInaccessible(e)) continue;
      throw e;
    }
    const profileDirs = browserProfileEntries.filter((entry) => entry.isDirectory()).filter(
      (entry) => entry.name === "Default" || entry.name.startsWith("Profile ")
    ).map((entry) => entry.name);
    if (profileDirs.length > 0) {
      log?.(
        `[Claude in Chrome] Found ${browser} profiles: ${profileDirs.join(", ")}`
      );
    }
    for (const profile of profileDirs) {
      for (const extensionId of extensionIds) {
        const extensionPath = join(
          browserBasePath,
          profile,
          "Extensions",
          extensionId
        );
        try {
          await readdir(extensionPath);
          log?.(
            `[Claude in Chrome] Extension ${extensionId} found in ${browser} ${profile}`
          );
          return { isInstalled: true, browser };
        } catch {
        }
      }
    }
  }
  log?.(`[Claude in Chrome] Extension not found in any browser`);
  return { isInstalled: false, browser: null };
}
async function isChromeExtensionInstalledPortable(browserPaths, log) {
  const result = await detectExtensionInstallationPortable(browserPaths, log);
  return result.isInstalled;
}
var PROD_EXTENSION_ID, DEV_EXTENSION_ID, ANT_EXTENSION_ID;
var init_setupPortable = __esm({
  "src/utils/claudeInChrome/setupPortable.ts"() {
    init_errors();
    PROD_EXTENSION_ID = "fcoeoabgfenejglbffodgkkbkcdhcgfn";
    DEV_EXTENSION_ID = "dihbgbndebgnbjfmelmegjepbnkhlgni";
    ANT_EXTENSION_ID = "dngcpimnedloihjnnfngkgjoidhnaolf";
  }
});

// src/utils/claudeInChrome/setup.ts
import { chmod, mkdir, readFile, writeFile } from "fs/promises";
import { homedir } from "os";
import { join as join2 } from "path";
import { fileURLToPath } from "url";
function shouldEnableClaudeInChrome(chromeFlag) {
  if (getIsNonInteractiveSession() && chromeFlag !== true) {
    return false;
  }
  if (chromeFlag === true) {
    return true;
  }
  if (chromeFlag === false) {
    return false;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_CFC)) {
    return true;
  }
  if (isEnvDefinedFalsy(process.env.CLAUDE_CODE_ENABLE_CFC)) {
    return false;
  }
  const config = getGlobalConfig();
  if (config.claudeInChromeDefaultEnabled !== void 0) {
    return config.claudeInChromeDefaultEnabled;
  }
  return false;
}
function shouldAutoEnableClaudeInChrome() {
  if (shouldAutoEnable !== void 0) {
    return shouldAutoEnable;
  }
  shouldAutoEnable = getIsInteractive() && isChromeExtensionInstalled_CACHED_MAY_BE_STALE() && (process.env.USER_TYPE === "ant" || getFeatureValue_CACHED_MAY_BE_STALE("tengu_chrome_auto_enable", false));
  return shouldAutoEnable;
}
function setupClaudeInChrome() {
  const isNativeBuild = isInBundledMode();
  const allowedTools = BROWSER_TOOLS.map(
    (tool) => `mcp__claude-in-chrome__${tool.name}`
  );
  const env = {};
  if (getSessionBypassPermissionsMode()) {
    env.CLAUDE_CHROME_PERMISSION_MODE = "skip_all_permission_checks";
  }
  const hasEnv = Object.keys(env).length > 0;
  if (isNativeBuild) {
    const execCommand = `"${process.execPath}" --chrome-native-host`;
    void createWrapperScript(execCommand).then(
      (manifestBinaryPath) => installChromeNativeHostManifest(manifestBinaryPath)
    ).catch(
      (e) => logForDebugging(
        `[Claude in Chrome] Failed to install native host: ${e}`,
        { level: "error" }
      )
    );
    return {
      mcpConfig: {
        [CLAUDE_IN_CHROME_MCP_SERVER_NAME]: {
          type: "stdio",
          command: process.execPath,
          args: ["--claude-in-chrome-mcp"],
          scope: "dynamic",
          ...hasEnv && { env }
        }
      },
      allowedTools,
      systemPrompt: getChromeSystemPrompt()
    };
  } else {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = join2(__filename, "..");
    const cliPath = join2(__dirname, "cli.js");
    void createWrapperScript(
      `"${process.execPath}" "${cliPath}" --chrome-native-host`
    ).then(
      (manifestBinaryPath) => installChromeNativeHostManifest(manifestBinaryPath)
    ).catch(
      (e) => logForDebugging(
        `[Claude in Chrome] Failed to install native host: ${e}`,
        { level: "error" }
      )
    );
    const mcpConfig = {
      [CLAUDE_IN_CHROME_MCP_SERVER_NAME]: {
        type: "stdio",
        command: process.execPath,
        args: [`${cliPath}`, "--claude-in-chrome-mcp"],
        scope: "dynamic",
        ...hasEnv && { env }
      }
    };
    return {
      mcpConfig,
      allowedTools,
      systemPrompt: getChromeSystemPrompt()
    };
  }
}
function getNativeMessagingHostsDirs() {
  const platform = getPlatform();
  if (platform === "windows") {
    const home = homedir();
    const appData = process.env.APPDATA || join2(home, "AppData", "Local");
    return [join2(appData, "Claude Code", "ChromeNativeHost")];
  }
  return getAllNativeMessagingHostsDirs().map(({ path }) => path);
}
async function installChromeNativeHostManifest(manifestBinaryPath) {
  const manifestDirs = getNativeMessagingHostsDirs();
  if (manifestDirs.length === 0) {
    throw Error("Claude in Chrome Native Host not supported on this platform");
  }
  const manifest = {
    name: NATIVE_HOST_IDENTIFIER,
    description: "Claude Code Browser Extension Native Host",
    path: manifestBinaryPath,
    type: "stdio",
    allowed_origins: [
      `chrome-extension://fcoeoabgfenejglbffodgkkbkcdhcgfn/`,
      // PROD_EXTENSION_ID
      ...process.env.USER_TYPE === "ant" ? [
        "chrome-extension://dihbgbndebgnbjfmelmegjepbnkhlgni/",
        // DEV_EXTENSION_ID
        "chrome-extension://dngcpimnedloihjnnfngkgjoidhnaolf/"
        // ANT_EXTENSION_ID
      ] : []
    ]
  };
  const manifestContent = jsonStringify(manifest, null, 2);
  let anyManifestUpdated = false;
  for (const manifestDir of manifestDirs) {
    const manifestPath = join2(manifestDir, NATIVE_HOST_MANIFEST_NAME);
    const existingContent = await readFile(manifestPath, "utf-8").catch(
      () => null
    );
    if (existingContent === manifestContent) {
      continue;
    }
    try {
      await mkdir(manifestDir, { recursive: true });
      await writeFile(manifestPath, manifestContent);
      logForDebugging(
        `[Claude in Chrome] Installed native host manifest at: ${manifestPath}`
      );
      anyManifestUpdated = true;
    } catch (error) {
      logForDebugging(
        `[Claude in Chrome] Failed to install manifest at ${manifestPath}: ${error}`
      );
    }
  }
  if (getPlatform() === "windows") {
    const manifestPath = join2(manifestDirs[0], NATIVE_HOST_MANIFEST_NAME);
    registerWindowsNativeHosts(manifestPath);
  }
  if (anyManifestUpdated) {
    void isChromeExtensionInstalled().then((isInstalled) => {
      if (isInstalled) {
        logForDebugging(
          `[Claude in Chrome] First-time install detected, opening reconnect page in browser`
        );
        void openInChrome(CHROME_EXTENSION_RECONNECT_URL);
      } else {
        logForDebugging(
          `[Claude in Chrome] First-time install detected, but extension not installed, skipping reconnect`
        );
      }
    });
  }
}
function registerWindowsNativeHosts(manifestPath) {
  const registryKeys = getAllWindowsRegistryKeys();
  for (const { browser, key } of registryKeys) {
    const fullKey = `${key}\\${NATIVE_HOST_IDENTIFIER}`;
    void execFileNoThrowWithCwd("reg", [
      "add",
      fullKey,
      "/ve",
      // Set the default (unnamed) value
      "/t",
      "REG_SZ",
      "/d",
      manifestPath,
      "/f"
      // Force overwrite without prompt
    ]).then((result) => {
      if (result.code === 0) {
        logForDebugging(
          `[Claude in Chrome] Registered native host for ${browser} in Windows registry: ${fullKey}`
        );
      } else {
        logForDebugging(
          `[Claude in Chrome] Failed to register native host for ${browser} in Windows registry: ${result.stderr}`
        );
      }
    });
  }
}
async function createWrapperScript(command) {
  const platform = getPlatform();
  const chromeDir = join2(getClaudeConfigHomeDir(), "chrome");
  const wrapperPath = platform === "windows" ? join2(chromeDir, "chrome-native-host.bat") : join2(chromeDir, "chrome-native-host");
  const scriptContent = platform === "windows" ? `@echo off
REM Chrome native host wrapper script
REM Generated by Claude Code - do not edit manually
${command}
` : `#!/bin/sh
# Chrome native host wrapper script
# Generated by Claude Code - do not edit manually
exec ${command}
`;
  const existingContent = await readFile(wrapperPath, "utf-8").catch(() => null);
  if (existingContent === scriptContent) {
    return wrapperPath;
  }
  await mkdir(chromeDir, { recursive: true });
  await writeFile(wrapperPath, scriptContent);
  if (platform !== "windows") {
    await chmod(wrapperPath, 493);
  }
  logForDebugging(
    `[Claude in Chrome] Created Chrome native host wrapper script: ${wrapperPath}`
  );
  return wrapperPath;
}
function isChromeExtensionInstalled_CACHED_MAY_BE_STALE() {
  void isChromeExtensionInstalled().then((isInstalled) => {
    if (!isInstalled) {
      return;
    }
    const config = getGlobalConfig();
    if (config.cachedChromeExtensionInstalled !== isInstalled) {
      saveGlobalConfig((prev) => ({
        ...prev,
        cachedChromeExtensionInstalled: isInstalled
      }));
    }
  });
  const cached = getGlobalConfig().cachedChromeExtensionInstalled;
  return cached ?? false;
}
async function isChromeExtensionInstalled() {
  const browserPaths = getAllBrowserDataPaths();
  if (browserPaths.length === 0) {
    logForDebugging(
      `[Claude in Chrome] Unsupported platform for extension detection: ${getPlatform()}`
    );
    return false;
  }
  return isChromeExtensionInstalledPortable(browserPaths, logForDebugging);
}
var CHROME_EXTENSION_RECONNECT_URL, NATIVE_HOST_IDENTIFIER, NATIVE_HOST_MANIFEST_NAME, shouldAutoEnable;
var init_setup = __esm({
  "src/utils/claudeInChrome/setup.ts"() {
    init_ant_claude_for_chrome_mcp();
    init_state();
    init_growthbook();
    init_bundledMode();
    init_config();
    init_debug();
    init_envUtils();
    init_execFileNoThrow();
    init_platform();
    init_slowOperations();
    init_common();
    init_prompt();
    init_setupPortable();
    CHROME_EXTENSION_RECONNECT_URL = "https://clau.de/chrome/reconnect";
    NATIVE_HOST_IDENTIFIER = "com.anthropic.claude_code_browser_extension";
    NATIVE_HOST_MANIFEST_NAME = `${NATIVE_HOST_IDENTIFIER}.json`;
    shouldAutoEnable = void 0;
  }
});

export {
  shouldEnableClaudeInChrome,
  shouldAutoEnableClaudeInChrome,
  setupClaudeInChrome,
  isChromeExtensionInstalled,
  init_setup
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL3NldHVwUG9ydGFibGUudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL3NldHVwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyByZWFkZGlyIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGlzRnNJbmFjY2Vzc2libGUgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5cbmV4cG9ydCBjb25zdCBDSFJPTUVfRVhURU5TSU9OX1VSTCA9ICdodHRwczovL2NsYXVkZS5haS9jaHJvbWUnXG5cbi8vIFByb2R1Y3Rpb24gZXh0ZW5zaW9uIElEXG5jb25zdCBQUk9EX0VYVEVOU0lPTl9JRCA9ICdmY29lb2FiZ2ZlbmVqZ2xiZmZvZGdra2JrY2RoY2dmbidcbi8vIERldiBleHRlbnNpb24gSURzIChmb3IgaW50ZXJuYWwgdXNlKVxuY29uc3QgREVWX0VYVEVOU0lPTl9JRCA9ICdkaWhiZ2JuZGViZ25iamZtZWxtZWdqZXBibmtobGduaSdcbmNvbnN0IEFOVF9FWFRFTlNJT05fSUQgPSAnZG5nY3BpbW5lZGxvaWhqbm5mbmdrZ2pvaWRobmFvbGYnXG5cbmZ1bmN0aW9uIGdldEV4dGVuc2lvbklkcygpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgPyBbUFJPRF9FWFRFTlNJT05fSUQsIERFVl9FWFRFTlNJT05fSUQsIEFOVF9FWFRFTlNJT05fSURdXG4gICAgOiBbUFJPRF9FWFRFTlNJT05fSURdXG59XG5cbi8vIE11c3QgbWF0Y2ggQ2hyb21pdW1Ccm93c2VyIGZyb20gY29tbW9uLnRzXG5leHBvcnQgdHlwZSBDaHJvbWl1bUJyb3dzZXIgPVxuICB8ICdjaHJvbWUnXG4gIHwgJ2JyYXZlJ1xuICB8ICdhcmMnXG4gIHwgJ2Nocm9taXVtJ1xuICB8ICdlZGdlJ1xuICB8ICd2aXZhbGRpJ1xuICB8ICdvcGVyYSdcblxuZXhwb3J0IHR5cGUgQnJvd3NlclBhdGggPSB7XG4gIGJyb3dzZXI6IENocm9taXVtQnJvd3NlclxuICBwYXRoOiBzdHJpbmdcbn1cblxudHlwZSBMb2dnZXIgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXG5cbi8vIEJyb3dzZXIgZGV0ZWN0aW9uIG9yZGVyIC0gbXVzdCBtYXRjaCBCUk9XU0VSX0RFVEVDVElPTl9PUkRFUiBmcm9tIGNvbW1vbi50c1xuY29uc3QgQlJPV1NFUl9ERVRFQ1RJT05fT1JERVI6IENocm9taXVtQnJvd3NlcltdID0gW1xuICAnY2hyb21lJyxcbiAgJ2JyYXZlJyxcbiAgJ2FyYycsXG4gICdlZGdlJyxcbiAgJ2Nocm9taXVtJyxcbiAgJ3ZpdmFsZGknLFxuICAnb3BlcmEnLFxuXVxuXG50eXBlIEJyb3dzZXJEYXRhQ29uZmlnID0ge1xuICBtYWNvczogc3RyaW5nW11cbiAgbGludXg6IHN0cmluZ1tdXG4gIHdpbmRvd3M6IHsgcGF0aDogc3RyaW5nW107IHVzZVJvYW1pbmc/OiBib29sZWFuIH1cbn1cblxuLy8gTXVzdCBtYXRjaCBDSFJPTUlVTV9CUk9XU0VSUyBkYXRhUGF0aCBmcm9tIGNvbW1vbi50c1xuY29uc3QgQ0hST01JVU1fQlJPV1NFUlM6IFJlY29yZDxDaHJvbWl1bUJyb3dzZXIsIEJyb3dzZXJEYXRhQ29uZmlnPiA9IHtcbiAgY2hyb21lOiB7XG4gICAgbWFjb3M6IFsnTGlicmFyeScsICdBcHBsaWNhdGlvbiBTdXBwb3J0JywgJ0dvb2dsZScsICdDaHJvbWUnXSxcbiAgICBsaW51eDogWycuY29uZmlnJywgJ2dvb2dsZS1jaHJvbWUnXSxcbiAgICB3aW5kb3dzOiB7IHBhdGg6IFsnR29vZ2xlJywgJ0Nocm9tZScsICdVc2VyIERhdGEnXSB9LFxuICB9LFxuICBicmF2ZToge1xuICAgIG1hY29zOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdCcmF2ZVNvZnR3YXJlJywgJ0JyYXZlLUJyb3dzZXInXSxcbiAgICBsaW51eDogWycuY29uZmlnJywgJ0JyYXZlU29mdHdhcmUnLCAnQnJhdmUtQnJvd3NlciddLFxuICAgIHdpbmRvd3M6IHsgcGF0aDogWydCcmF2ZVNvZnR3YXJlJywgJ0JyYXZlLUJyb3dzZXInLCAnVXNlciBEYXRhJ10gfSxcbiAgfSxcbiAgYXJjOiB7XG4gICAgbWFjb3M6IFsnTGlicmFyeScsICdBcHBsaWNhdGlvbiBTdXBwb3J0JywgJ0FyYycsICdVc2VyIERhdGEnXSxcbiAgICBsaW51eDogW10sXG4gICAgd2luZG93czogeyBwYXRoOiBbJ0FyYycsICdVc2VyIERhdGEnXSB9LFxuICB9LFxuICBjaHJvbWl1bToge1xuICAgIG1hY29zOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdDaHJvbWl1bSddLFxuICAgIGxpbnV4OiBbJy5jb25maWcnLCAnY2hyb21pdW0nXSxcbiAgICB3aW5kb3dzOiB7IHBhdGg6IFsnQ2hyb21pdW0nLCAnVXNlciBEYXRhJ10gfSxcbiAgfSxcbiAgZWRnZToge1xuICAgIG1hY29zOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdNaWNyb3NvZnQgRWRnZSddLFxuICAgIGxpbnV4OiBbJy5jb25maWcnLCAnbWljcm9zb2Z0LWVkZ2UnXSxcbiAgICB3aW5kb3dzOiB7IHBhdGg6IFsnTWljcm9zb2Z0JywgJ0VkZ2UnLCAnVXNlciBEYXRhJ10gfSxcbiAgfSxcbiAgdml2YWxkaToge1xuICAgIG1hY29zOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdWaXZhbGRpJ10sXG4gICAgbGludXg6IFsnLmNvbmZpZycsICd2aXZhbGRpJ10sXG4gICAgd2luZG93czogeyBwYXRoOiBbJ1ZpdmFsZGknLCAnVXNlciBEYXRhJ10gfSxcbiAgfSxcbiAgb3BlcmE6IHtcbiAgICBtYWNvczogWydMaWJyYXJ5JywgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLCAnY29tLm9wZXJhc29mdHdhcmUuT3BlcmEnXSxcbiAgICBsaW51eDogWycuY29uZmlnJywgJ29wZXJhJ10sXG4gICAgd2luZG93czogeyBwYXRoOiBbJ09wZXJhIFNvZnR3YXJlJywgJ09wZXJhIFN0YWJsZSddLCB1c2VSb2FtaW5nOiB0cnVlIH0sXG4gIH0sXG59XG5cbi8qKlxuICogR2V0IGFsbCBicm93c2VyIGRhdGEgcGF0aHMgdG8gY2hlY2sgZm9yIGV4dGVuc2lvbiBpbnN0YWxsYXRpb24uXG4gKiBQb3J0YWJsZSB2ZXJzaW9uIHRoYXQgdXNlcyBwcm9jZXNzLnBsYXRmb3JtIGRpcmVjdGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQnJvd3NlckRhdGFQYXRoc1BvcnRhYmxlKCk6IEJyb3dzZXJQYXRoW10ge1xuICBjb25zdCBob21lID0gaG9tZWRpcigpXG4gIGNvbnN0IHBhdGhzOiBCcm93c2VyUGF0aFtdID0gW11cblxuICBmb3IgKGNvbnN0IGJyb3dzZXJJZCBvZiBCUk9XU0VSX0RFVEVDVElPTl9PUkRFUikge1xuICAgIGNvbnN0IGNvbmZpZyA9IENIUk9NSVVNX0JST1dTRVJTW2Jyb3dzZXJJZF1cbiAgICBsZXQgZGF0YVBhdGg6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG5cbiAgICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcbiAgICAgIGNhc2UgJ2Rhcndpbic6XG4gICAgICAgIGRhdGFQYXRoID0gY29uZmlnLm1hY29zXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdsaW51eCc6XG4gICAgICAgIGRhdGFQYXRoID0gY29uZmlnLmxpbnV4XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3aW4zMic6IHtcbiAgICAgICAgaWYgKGNvbmZpZy53aW5kb3dzLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGFwcERhdGFCYXNlID0gY29uZmlnLndpbmRvd3MudXNlUm9hbWluZ1xuICAgICAgICAgICAgPyBqb2luKGhvbWUsICdBcHBEYXRhJywgJ1JvYW1pbmcnKVxuICAgICAgICAgICAgOiBqb2luKGhvbWUsICdBcHBEYXRhJywgJ0xvY2FsJylcbiAgICAgICAgICBwYXRocy5wdXNoKHtcbiAgICAgICAgICAgIGJyb3dzZXI6IGJyb3dzZXJJZCxcbiAgICAgICAgICAgIHBhdGg6IGpvaW4oYXBwRGF0YUJhc2UsIC4uLmNvbmZpZy53aW5kb3dzLnBhdGgpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YVBhdGggJiYgZGF0YVBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgIGJyb3dzZXI6IGJyb3dzZXJJZCxcbiAgICAgICAgcGF0aDogam9pbihob21lLCAuLi5kYXRhUGF0aCksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoc1xufVxuXG4vKipcbiAqIERldGVjdHMgaWYgdGhlIENsYXVkZSBpbiBDaHJvbWUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZCBieSBjaGVja2luZyB0aGUgRXh0ZW5zaW9uc1xuICogZGlyZWN0b3J5IGFjcm9zcyBhbGwgc3VwcG9ydGVkIENocm9taXVtLWJhc2VkIGJyb3dzZXJzIGFuZCB0aGVpciBwcm9maWxlcy5cbiAqXG4gKiBUaGlzIGlzIGEgcG9ydGFibGUgdmVyc2lvbiB0aGF0IGNhbiBiZSB1c2VkIGJ5IGJvdGggVFVJIGFuZCBWUyBDb2RlIGV4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0gYnJvd3NlclBhdGhzIC0gQXJyYXkgb2YgYnJvd3NlciBkYXRhIHBhdGhzIHRvIGNoZWNrIChmcm9tIGdldEFsbEJyb3dzZXJEYXRhUGF0aHMpXG4gKiBAcGFyYW0gbG9nIC0gT3B0aW9uYWwgbG9nZ2luZyBjYWxsYmFjayBmb3IgZGVidWcgbWVzc2FnZXNcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIGlzSW5zdGFsbGVkIGJvb2xlYW4gYW5kIHRoZSBicm93c2VyIHdoZXJlIHRoZSBleHRlbnNpb24gd2FzIGZvdW5kXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXRlY3RFeHRlbnNpb25JbnN0YWxsYXRpb25Qb3J0YWJsZShcbiAgYnJvd3NlclBhdGhzOiBCcm93c2VyUGF0aFtdLFxuICBsb2c/OiBMb2dnZXIsXG4pOiBQcm9taXNlPHtcbiAgaXNJbnN0YWxsZWQ6IGJvb2xlYW5cbiAgYnJvd3NlcjogQ2hyb21pdW1Ccm93c2VyIHwgbnVsbFxufT4ge1xuICBpZiAoYnJvd3NlclBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxvZz8uKGBbQ2xhdWRlIGluIENocm9tZV0gTm8gYnJvd3NlciBwYXRocyB0byBjaGVja2ApXG4gICAgcmV0dXJuIHsgaXNJbnN0YWxsZWQ6IGZhbHNlLCBicm93c2VyOiBudWxsIH1cbiAgfVxuXG4gIGNvbnN0IGV4dGVuc2lvbklkcyA9IGdldEV4dGVuc2lvbklkcygpXG5cbiAgLy8gQ2hlY2sgZWFjaCBicm93c2VyIGZvciB0aGUgZXh0ZW5zaW9uXG4gIGZvciAoY29uc3QgeyBicm93c2VyLCBwYXRoOiBicm93c2VyQmFzZVBhdGggfSBvZiBicm93c2VyUGF0aHMpIHtcbiAgICBsZXQgYnJvd3NlclByb2ZpbGVFbnRyaWVzID0gW11cblxuICAgIHRyeSB7XG4gICAgICBicm93c2VyUHJvZmlsZUVudHJpZXMgPSBhd2FpdCByZWFkZGlyKGJyb3dzZXJCYXNlUGF0aCwge1xuICAgICAgICB3aXRoRmlsZVR5cGVzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBCcm93c2VyIG5vdCBpbnN0YWxsZWQgb3IgcGF0aCBkb2Vzbid0IGV4aXN0LCBjb250aW51ZSB0byBuZXh0IGJyb3dzZXJcbiAgICAgIGlmIChpc0ZzSW5hY2Nlc3NpYmxlKGUpKSBjb250aW51ZVxuICAgICAgdGhyb3cgZVxuICAgIH1cblxuICAgIGNvbnN0IHByb2ZpbGVEaXJzID0gYnJvd3NlclByb2ZpbGVFbnRyaWVzXG4gICAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpXG4gICAgICAuZmlsdGVyKFxuICAgICAgICBlbnRyeSA9PiBlbnRyeS5uYW1lID09PSAnRGVmYXVsdCcgfHwgZW50cnkubmFtZS5zdGFydHNXaXRoKCdQcm9maWxlICcpLFxuICAgICAgKVxuICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeS5uYW1lKVxuXG4gICAgaWYgKHByb2ZpbGVEaXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvZz8uKFxuICAgICAgICBgW0NsYXVkZSBpbiBDaHJvbWVdIEZvdW5kICR7YnJvd3Nlcn0gcHJvZmlsZXM6ICR7cHJvZmlsZURpcnMuam9pbignLCAnKX1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIENoZWNrIGVhY2ggcHJvZmlsZSBmb3IgYW55IG9mIHRoZSBleHRlbnNpb24gSURzXG4gICAgZm9yIChjb25zdCBwcm9maWxlIG9mIHByb2ZpbGVEaXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbklkIG9mIGV4dGVuc2lvbklkcykge1xuICAgICAgICBjb25zdCBleHRlbnNpb25QYXRoID0gam9pbihcbiAgICAgICAgICBicm93c2VyQmFzZVBhdGgsXG4gICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICAnRXh0ZW5zaW9ucycsXG4gICAgICAgICAgZXh0ZW5zaW9uSWQsXG4gICAgICAgIClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHJlYWRkaXIoZXh0ZW5zaW9uUGF0aClcbiAgICAgICAgICBsb2c/LihcbiAgICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gRXh0ZW5zaW9uICR7ZXh0ZW5zaW9uSWR9IGZvdW5kIGluICR7YnJvd3Nlcn0gJHtwcm9maWxlfWAsXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiB7IGlzSW5zdGFsbGVkOiB0cnVlLCBicm93c2VyIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gRXh0ZW5zaW9uIG5vdCBmb3VuZCBpbiB0aGlzIHByb2ZpbGUsIGNvbnRpbnVlIGNoZWNraW5nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2c/LihgW0NsYXVkZSBpbiBDaHJvbWVdIEV4dGVuc2lvbiBub3QgZm91bmQgaW4gYW55IGJyb3dzZXJgKVxuICByZXR1cm4geyBpc0luc3RhbGxlZDogZmFsc2UsIGJyb3dzZXI6IG51bGwgfVxufVxuXG4vKipcbiAqIFNpbXBsZSB3cmFwcGVyIHRoYXQgcmV0dXJucyBqdXN0IHRoZSBib29sZWFuIHJlc3VsdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWRQb3J0YWJsZShcbiAgYnJvd3NlclBhdGhzOiBCcm93c2VyUGF0aFtdLFxuICBsb2c/OiBMb2dnZXIsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGV0ZWN0RXh0ZW5zaW9uSW5zdGFsbGF0aW9uUG9ydGFibGUoYnJvd3NlclBhdGhzLCBsb2cpXG4gIHJldHVybiByZXN1bHQuaXNJbnN0YWxsZWRcbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IGdldHMgYnJvd3NlciBwYXRocyBhdXRvbWF0aWNhbGx5LlxuICogVXNlIHRoaXMgd2hlbiB5b3UgZG9uJ3QgbmVlZCB0byBwcm92aWRlIGN1c3RvbSBicm93c2VyIHBhdGhzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQobG9nPzogTG9nZ2VyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IGJyb3dzZXJQYXRocyA9IGdldEFsbEJyb3dzZXJEYXRhUGF0aHNQb3J0YWJsZSgpXG4gIHJldHVybiBpc0Nocm9tZUV4dGVuc2lvbkluc3RhbGxlZFBvcnRhYmxlKGJyb3dzZXJQYXRocywgbG9nKVxufVxuIiwgImltcG9ydCB7IEJST1dTRVJfVE9PTFMgfSBmcm9tICdAYW50L2NsYXVkZS1mb3ItY2hyb21lLW1jcCdcbmltcG9ydCB7IGNobW9kLCBta2RpciwgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgZ2V0SXNJbnRlcmFjdGl2ZSxcbiAgZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24sXG4gIGdldFNlc3Npb25CeXBhc3NQZXJtaXNzaW9uc01vZGUsXG59IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgdHlwZSB7IFNjb3BlZE1jcFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB7IGlzSW5CdW5kbGVkTW9kZSB9IGZyb20gJy4uL2J1bmRsZWRNb2RlLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQge1xuICBnZXRDbGF1ZGVDb25maWdIb21lRGlyLFxuICBpc0VudkRlZmluZWRGYWxzeSxcbiAgaXNFbnZUcnV0aHksXG59IGZyb20gJy4uL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZCB9IGZyb20gJy4uL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0uanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQge1xuICBDTEFVREVfSU5fQ0hST01FX01DUF9TRVJWRVJfTkFNRSxcbiAgZ2V0QWxsQnJvd3NlckRhdGFQYXRocyxcbiAgZ2V0QWxsTmF0aXZlTWVzc2FnaW5nSG9zdHNEaXJzLFxuICBnZXRBbGxXaW5kb3dzUmVnaXN0cnlLZXlzLFxuICBvcGVuSW5DaHJvbWUsXG59IGZyb20gJy4vY29tbW9uLmpzJ1xuaW1wb3J0IHsgZ2V0Q2hyb21lU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi9wcm9tcHQuanMnXG5pbXBvcnQgeyBpc0Nocm9tZUV4dGVuc2lvbkluc3RhbGxlZFBvcnRhYmxlIH0gZnJvbSAnLi9zZXR1cFBvcnRhYmxlLmpzJ1xuXG5jb25zdCBDSFJPTUVfRVhURU5TSU9OX1JFQ09OTkVDVF9VUkwgPSAnaHR0cHM6Ly9jbGF1LmRlL2Nocm9tZS9yZWNvbm5lY3QnXG5cbmNvbnN0IE5BVElWRV9IT1NUX0lERU5USUZJRVIgPSAnY29tLmFudGhyb3BpYy5jbGF1ZGVfY29kZV9icm93c2VyX2V4dGVuc2lvbidcbmNvbnN0IE5BVElWRV9IT1NUX01BTklGRVNUX05BTUUgPSBgJHtOQVRJVkVfSE9TVF9JREVOVElGSUVSfS5qc29uYFxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRW5hYmxlQ2xhdWRlSW5DaHJvbWUoY2hyb21lRmxhZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgLy8gRGlzYWJsZSBieSBkZWZhdWx0IGluIG5vbi1pbnRlcmFjdGl2ZSBzZXNzaW9ucyAoZS5nLiwgU0RLLCBDSSlcbiAgaWYgKGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uKCkgJiYgY2hyb21lRmxhZyAhPT0gdHJ1ZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gQ2hlY2sgQ0xJIGZsYWdzXG4gIGlmIChjaHJvbWVGbGFnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoY2hyb21lRmxhZyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIENoZWNrIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5BQkxFX0NGQykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChpc0VudkRlZmluZWRGYWxzeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FTkFCTEVfQ0ZDKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gQ2hlY2sgZGVmYXVsdCBjb25maWcgc2V0dGluZ3NcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgaWYgKGNvbmZpZy5jbGF1ZGVJbkNocm9tZURlZmF1bHRFbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY29uZmlnLmNsYXVkZUluQ2hyb21lRGVmYXVsdEVuYWJsZWRcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5sZXQgc2hvdWxkQXV0b0VuYWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkQXV0b0VuYWJsZUNsYXVkZUluQ2hyb21lKCk6IGJvb2xlYW4ge1xuICBpZiAoc2hvdWxkQXV0b0VuYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHNob3VsZEF1dG9FbmFibGVcbiAgfVxuXG4gIHNob3VsZEF1dG9FbmFibGUgPVxuICAgIGdldElzSW50ZXJhY3RpdmUoKSAmJlxuICAgIGlzQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbGVkX0NBQ0hFRF9NQVlfQkVfU1RBTEUoKSAmJlxuICAgIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnIHx8XG4gICAgICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgndGVuZ3VfY2hyb21lX2F1dG9fZW5hYmxlJywgZmFsc2UpKVxuXG4gIHJldHVybiBzaG91bGRBdXRvRW5hYmxlXG59XG5cbi8qKlxuICogU2V0dXAgQ2xhdWRlIGluIENocm9tZSBNQ1Agc2VydmVyIGFuZCB0b29sc1xuICpcbiAqIEByZXR1cm5zIE1DUCBjb25maWcgYW5kIGFsbG93ZWQgdG9vbHMsIG9yIHRocm93cyBhbiBlcnJvciBpZiBwbGF0Zm9ybSBpcyB1bnN1cHBvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBDbGF1ZGVJbkNocm9tZSgpOiB7XG4gIG1jcENvbmZpZzogUmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPlxuICBhbGxvd2VkVG9vbHM6IHN0cmluZ1tdXG4gIHN5c3RlbVByb21wdDogc3RyaW5nXG59IHtcbiAgY29uc3QgaXNOYXRpdmVCdWlsZCA9IGlzSW5CdW5kbGVkTW9kZSgpXG4gIGNvbnN0IGFsbG93ZWRUb29scyA9IEJST1dTRVJfVE9PTFMubWFwKFxuICAgIHRvb2wgPT4gYG1jcF9fY2xhdWRlLWluLWNocm9tZV9fJHt0b29sLm5hbWV9YCxcbiAgKVxuXG4gIGNvbnN0IGVudjogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gIGlmIChnZXRTZXNzaW9uQnlwYXNzUGVybWlzc2lvbnNNb2RlKCkpIHtcbiAgICBlbnYuQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREUgPSAnc2tpcF9hbGxfcGVybWlzc2lvbl9jaGVja3MnXG4gIH1cbiAgY29uc3QgaGFzRW52ID0gT2JqZWN0LmtleXMoZW52KS5sZW5ndGggPiAwXG5cbiAgaWYgKGlzTmF0aXZlQnVpbGQpIHtcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVyIHNjcmlwdCB0aGF0IGNhbGxzIHRoZSBzYW1lIGJpbmFyeSB3aXRoIC0tY2hyb21lLW5hdGl2ZS1ob3N0LiBUaGlzXG4gICAgLy8gaXMgbmVlZGVkIGJlY2F1c2UgdGhlIG5hdGl2ZSBob3N0IG1hbmlmZXN0IFwicGF0aFwiIGZpZWxkIGNhbm5vdCBjb250YWluIGFyZ3VtZW50cy5cbiAgICBjb25zdCBleGVjQ29tbWFuZCA9IGBcIiR7cHJvY2Vzcy5leGVjUGF0aH1cIiAtLWNocm9tZS1uYXRpdmUtaG9zdGBcblxuICAgIC8vIFJ1biBhc3luY2hyb25vdXNseSB3aXRob3V0IGJsb2NraW5nOyBiZXN0LWVmZm9ydCBzbyBzd2FsbG93IGVycm9yc1xuICAgIHZvaWQgY3JlYXRlV3JhcHBlclNjcmlwdChleGVjQ29tbWFuZClcbiAgICAgIC50aGVuKG1hbmlmZXN0QmluYXJ5UGF0aCA9PlxuICAgICAgICBpbnN0YWxsQ2hyb21lTmF0aXZlSG9zdE1hbmlmZXN0KG1hbmlmZXN0QmluYXJ5UGF0aCksXG4gICAgICApXG4gICAgICAuY2F0Y2goZSA9PlxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBGYWlsZWQgdG8gaW5zdGFsbCBuYXRpdmUgaG9zdDogJHtlfWAsXG4gICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICApLFxuICAgICAgKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1jcENvbmZpZzoge1xuICAgICAgICBbQ0xBVURFX0lOX0NIUk9NRV9NQ1BfU0VSVkVSX05BTUVdOiB7XG4gICAgICAgICAgdHlwZTogJ3N0ZGlvJyBhcyBjb25zdCxcbiAgICAgICAgICBjb21tYW5kOiBwcm9jZXNzLmV4ZWNQYXRoLFxuICAgICAgICAgIGFyZ3M6IFsnLS1jbGF1ZGUtaW4tY2hyb21lLW1jcCddLFxuICAgICAgICAgIHNjb3BlOiAnZHluYW1pYycgYXMgY29uc3QsXG4gICAgICAgICAgLi4uKGhhc0VudiAmJiB7IGVudiB9KSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbGxvd2VkVG9vbHMsXG4gICAgICBzeXN0ZW1Qcm9tcHQ6IGdldENocm9tZVN5c3RlbVByb21wdCgpLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpXG4gICAgY29uc3QgX19kaXJuYW1lID0gam9pbihfX2ZpbGVuYW1lLCAnLi4nKVxuICAgIGNvbnN0IGNsaVBhdGggPSBqb2luKF9fZGlybmFtZSwgJ2NsaS5qcycpXG5cbiAgICB2b2lkIGNyZWF0ZVdyYXBwZXJTY3JpcHQoXG4gICAgICBgXCIke3Byb2Nlc3MuZXhlY1BhdGh9XCIgXCIke2NsaVBhdGh9XCIgLS1jaHJvbWUtbmF0aXZlLWhvc3RgLFxuICAgIClcbiAgICAgIC50aGVuKG1hbmlmZXN0QmluYXJ5UGF0aCA9PlxuICAgICAgICBpbnN0YWxsQ2hyb21lTmF0aXZlSG9zdE1hbmlmZXN0KG1hbmlmZXN0QmluYXJ5UGF0aCksXG4gICAgICApXG4gICAgICAuY2F0Y2goZSA9PlxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBGYWlsZWQgdG8gaW5zdGFsbCBuYXRpdmUgaG9zdDogJHtlfWAsXG4gICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICApLFxuICAgICAgKVxuXG4gICAgY29uc3QgbWNwQ29uZmlnID0ge1xuICAgICAgW0NMQVVERV9JTl9DSFJPTUVfTUNQX1NFUlZFUl9OQU1FXToge1xuICAgICAgICB0eXBlOiAnc3RkaW8nIGFzIGNvbnN0LFxuICAgICAgICBjb21tYW5kOiBwcm9jZXNzLmV4ZWNQYXRoLFxuICAgICAgICBhcmdzOiBbYCR7Y2xpUGF0aH1gLCAnLS1jbGF1ZGUtaW4tY2hyb21lLW1jcCddLFxuICAgICAgICBzY29wZTogJ2R5bmFtaWMnIGFzIGNvbnN0LFxuICAgICAgICAuLi4oaGFzRW52ICYmIHsgZW52IH0pLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWNwQ29uZmlnLFxuICAgICAgYWxsb3dlZFRvb2xzLFxuICAgICAgc3lzdGVtUHJvbXB0OiBnZXRDaHJvbWVTeXN0ZW1Qcm9tcHQoKSxcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgbmF0aXZlIG1lc3NhZ2luZyBob3N0cyBkaXJlY3RvcmllcyBmb3IgYWxsIHN1cHBvcnRlZCBicm93c2Vyc1xuICogUmV0dXJucyBhbiBhcnJheSBvZiBkaXJlY3RvcmllcyB3aGVyZSB0aGUgbmF0aXZlIGhvc3QgbWFuaWZlc3Qgc2hvdWxkIGJlIGluc3RhbGxlZFxuICovXG5mdW5jdGlvbiBnZXROYXRpdmVNZXNzYWdpbmdIb3N0c0RpcnMoKTogc3RyaW5nW10ge1xuICBjb25zdCBwbGF0Zm9ybSA9IGdldFBsYXRmb3JtKClcblxuICBpZiAocGxhdGZvcm0gPT09ICd3aW5kb3dzJykge1xuICAgIC8vIFdpbmRvd3MgdXNlcyBhIHNpbmdsZSBsb2NhdGlvbiB3aXRoIHJlZ2lzdHJ5IGVudHJpZXMgcG9pbnRpbmcgdG8gaXRcbiAgICBjb25zdCBob21lID0gaG9tZWRpcigpXG4gICAgY29uc3QgYXBwRGF0YSA9IHByb2Nlc3MuZW52LkFQUERBVEEgfHwgam9pbihob21lLCAnQXBwRGF0YScsICdMb2NhbCcpXG4gICAgcmV0dXJuIFtqb2luKGFwcERhdGEsICdDbGF1ZGUgQ29kZScsICdDaHJvbWVOYXRpdmVIb3N0JyldXG4gIH1cblxuICAvLyBtYWNPUyBhbmQgTGludXg6IHJldHVybiBhbGwgYnJvd3NlciBuYXRpdmUgbWVzc2FnaW5nIGRpcmVjdG9yaWVzXG4gIHJldHVybiBnZXRBbGxOYXRpdmVNZXNzYWdpbmdIb3N0c0RpcnMoKS5tYXAoKHsgcGF0aCB9KSA9PiBwYXRoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFsbENocm9tZU5hdGl2ZUhvc3RNYW5pZmVzdChcbiAgbWFuaWZlc3RCaW5hcnlQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbWFuaWZlc3REaXJzID0gZ2V0TmF0aXZlTWVzc2FnaW5nSG9zdHNEaXJzKClcbiAgaWYgKG1hbmlmZXN0RGlycy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcignQ2xhdWRlIGluIENocm9tZSBOYXRpdmUgSG9zdCBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgcGxhdGZvcm0nKVxuICB9XG5cbiAgY29uc3QgbWFuaWZlc3QgPSB7XG4gICAgbmFtZTogTkFUSVZFX0hPU1RfSURFTlRJRklFUixcbiAgICBkZXNjcmlwdGlvbjogJ0NsYXVkZSBDb2RlIEJyb3dzZXIgRXh0ZW5zaW9uIE5hdGl2ZSBIb3N0JyxcbiAgICBwYXRoOiBtYW5pZmVzdEJpbmFyeVBhdGgsXG4gICAgdHlwZTogJ3N0ZGlvJyxcbiAgICBhbGxvd2VkX29yaWdpbnM6IFtcbiAgICAgIGBjaHJvbWUtZXh0ZW5zaW9uOi8vZmNvZW9hYmdmZW5lamdsYmZmb2Rna2tia2NkaGNnZm4vYCwgLy8gUFJPRF9FWFRFTlNJT05fSURcbiAgICAgIC4uLihwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgICAgID8gW1xuICAgICAgICAgICAgJ2Nocm9tZS1leHRlbnNpb246Ly9kaWhiZ2JuZGViZ25iamZtZWxtZWdqZXBibmtobGduaS8nLCAvLyBERVZfRVhURU5TSU9OX0lEXG4gICAgICAgICAgICAnY2hyb21lLWV4dGVuc2lvbjovL2RuZ2NwaW1uZWRsb2loam5uZm5na2dqb2lkaG5hb2xmLycsIC8vIEFOVF9FWFRFTlNJT05fSURcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pLFxuICAgIF0sXG4gIH1cblxuICBjb25zdCBtYW5pZmVzdENvbnRlbnQgPSBqc29uU3RyaW5naWZ5KG1hbmlmZXN0LCBudWxsLCAyKVxuICBsZXQgYW55TWFuaWZlc3RVcGRhdGVkID0gZmFsc2VcblxuICAvLyBJbnN0YWxsIG1hbmlmZXN0IHRvIGFsbCBicm93c2VyIGRpcmVjdG9yaWVzXG4gIGZvciAoY29uc3QgbWFuaWZlc3REaXIgb2YgbWFuaWZlc3REaXJzKSB7XG4gICAgY29uc3QgbWFuaWZlc3RQYXRoID0gam9pbihtYW5pZmVzdERpciwgTkFUSVZFX0hPU1RfTUFOSUZFU1RfTkFNRSlcblxuICAgIC8vIENoZWNrIGlmIGNvbnRlbnQgbWF0Y2hlcyB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3cml0ZXNcbiAgICBjb25zdCBleGlzdGluZ0NvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShtYW5pZmVzdFBhdGgsICd1dGYtOCcpLmNhdGNoKFxuICAgICAgKCkgPT4gbnVsbCxcbiAgICApXG4gICAgaWYgKGV4aXN0aW5nQ29udGVudCA9PT0gbWFuaWZlc3RDb250ZW50KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBta2RpcihtYW5pZmVzdERpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShtYW5pZmVzdFBhdGgsIG1hbmlmZXN0Q29udGVudClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBJbnN0YWxsZWQgbmF0aXZlIGhvc3QgbWFuaWZlc3QgYXQ6ICR7bWFuaWZlc3RQYXRofWAsXG4gICAgICApXG4gICAgICBhbnlNYW5pZmVzdFVwZGF0ZWQgPSB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIExvZyBidXQgZG9uJ3QgZmFpbCAtIHRoZSBicm93c2VyIG1pZ2h0IG5vdCBiZSBpbnN0YWxsZWRcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBGYWlsZWQgdG8gaW5zdGFsbCBtYW5pZmVzdCBhdCAke21hbmlmZXN0UGF0aH06ICR7ZXJyb3J9YCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvLyBXaW5kb3dzIHJlcXVpcmVzIHJlZ2lzdHJ5IGVudHJpZXMgcG9pbnRpbmcgdG8gdGhlIG1hbmlmZXN0IGZvciBlYWNoIGJyb3dzZXJcbiAgaWYgKGdldFBsYXRmb3JtKCkgPT09ICd3aW5kb3dzJykge1xuICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IGpvaW4obWFuaWZlc3REaXJzWzBdISwgTkFUSVZFX0hPU1RfTUFOSUZFU1RfTkFNRSlcbiAgICByZWdpc3RlcldpbmRvd3NOYXRpdmVIb3N0cyhtYW5pZmVzdFBhdGgpXG4gIH1cblxuICAvLyBSZXN0YXJ0IHRoZSBuYXRpdmUgaG9zdCBpZiB3ZSBoYXZlIHJld3JpdHRlbiBhbnkgbWFuaWZlc3RcbiAgaWYgKGFueU1hbmlmZXN0VXBkYXRlZCkge1xuICAgIHZvaWQgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQoKS50aGVuKGlzSW5zdGFsbGVkID0+IHtcbiAgICAgIGlmIChpc0luc3RhbGxlZCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBGaXJzdC10aW1lIGluc3RhbGwgZGV0ZWN0ZWQsIG9wZW5pbmcgcmVjb25uZWN0IHBhZ2UgaW4gYnJvd3NlcmAsXG4gICAgICAgIClcbiAgICAgICAgdm9pZCBvcGVuSW5DaHJvbWUoQ0hST01FX0VYVEVOU0lPTl9SRUNPTk5FQ1RfVVJMKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gRmlyc3QtdGltZSBpbnN0YWxsIGRldGVjdGVkLCBidXQgZXh0ZW5zaW9uIG5vdCBpbnN0YWxsZWQsIHNraXBwaW5nIHJlY29ubmVjdGAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hdGl2ZSBob3N0IGluIFdpbmRvd3MgcmVnaXN0cnkgZm9yIGFsbCBzdXBwb3J0ZWQgYnJvd3NlcnNcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJXaW5kb3dzTmF0aXZlSG9zdHMobWFuaWZlc3RQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgcmVnaXN0cnlLZXlzID0gZ2V0QWxsV2luZG93c1JlZ2lzdHJ5S2V5cygpXG5cbiAgZm9yIChjb25zdCB7IGJyb3dzZXIsIGtleSB9IG9mIHJlZ2lzdHJ5S2V5cykge1xuICAgIGNvbnN0IGZ1bGxLZXkgPSBgJHtrZXl9XFxcXCR7TkFUSVZFX0hPU1RfSURFTlRJRklFUn1gXG4gICAgLy8gVXNlIHJlZy5leGUgdG8gYWRkIHRoZSByZWdpc3RyeSBlbnRyeVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy9leHRlbnNpb25zL2RldmVsb3AvY29uY2VwdHMvbmF0aXZlLW1lc3NhZ2luZ1xuICAgIHZvaWQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZCgncmVnJywgW1xuICAgICAgJ2FkZCcsXG4gICAgICBmdWxsS2V5LFxuICAgICAgJy92ZScsIC8vIFNldCB0aGUgZGVmYXVsdCAodW5uYW1lZCkgdmFsdWVcbiAgICAgICcvdCcsXG4gICAgICAnUkVHX1NaJyxcbiAgICAgICcvZCcsXG4gICAgICBtYW5pZmVzdFBhdGgsXG4gICAgICAnL2YnLCAvLyBGb3JjZSBvdmVyd3JpdGUgd2l0aG91dCBwcm9tcHRcbiAgICBdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDApIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gUmVnaXN0ZXJlZCBuYXRpdmUgaG9zdCBmb3IgJHticm93c2VyfSBpbiBXaW5kb3dzIHJlZ2lzdHJ5OiAke2Z1bGxLZXl9YCxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gRmFpbGVkIHRvIHJlZ2lzdGVyIG5hdGl2ZSBob3N0IGZvciAke2Jyb3dzZXJ9IGluIFdpbmRvd3MgcmVnaXN0cnk6ICR7cmVzdWx0LnN0ZGVycn1gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHdyYXBwZXIgc2NyaXB0IGluIH4vLmNsYXVkZS9jaHJvbWUvIHRoYXQgaW52b2tlcyB0aGUgZ2l2ZW4gY29tbWFuZC4gVGhpcyBpc1xuICogbmVjZXNzYXJ5IGJlY2F1c2UgQ2hyb21lJ3MgbmF0aXZlIGhvc3QgbWFuaWZlc3QgXCJwYXRoXCIgZmllbGQgY2Fubm90IGNvbnRhaW4gYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21tYW5kIC0gVGhlIGZ1bGwgY29tbWFuZCB0byBleGVjdXRlIChlLmcuLCBcIi9wYXRoL3RvL2NsYXVkZSAtLWNocm9tZS1uYXRpdmUtaG9zdFwiKVxuICogQHJldHVybnMgVGhlIHBhdGggdG8gdGhlIHdyYXBwZXIgc2NyaXB0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXJTY3JpcHQoY29tbWFuZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpXG4gIGNvbnN0IGNocm9tZURpciA9IGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAnY2hyb21lJylcbiAgY29uc3Qgd3JhcHBlclBhdGggPVxuICAgIHBsYXRmb3JtID09PSAnd2luZG93cydcbiAgICAgID8gam9pbihjaHJvbWVEaXIsICdjaHJvbWUtbmF0aXZlLWhvc3QuYmF0JylcbiAgICAgIDogam9pbihjaHJvbWVEaXIsICdjaHJvbWUtbmF0aXZlLWhvc3QnKVxuXG4gIGNvbnN0IHNjcmlwdENvbnRlbnQgPVxuICAgIHBsYXRmb3JtID09PSAnd2luZG93cydcbiAgICAgID8gYEBlY2hvIG9mZlxuUkVNIENocm9tZSBuYXRpdmUgaG9zdCB3cmFwcGVyIHNjcmlwdFxuUkVNIEdlbmVyYXRlZCBieSBDbGF1ZGUgQ29kZSAtIGRvIG5vdCBlZGl0IG1hbnVhbGx5XG4ke2NvbW1hbmR9XG5gXG4gICAgICA6IGAjIS9iaW4vc2hcbiMgQ2hyb21lIG5hdGl2ZSBob3N0IHdyYXBwZXIgc2NyaXB0XG4jIEdlbmVyYXRlZCBieSBDbGF1ZGUgQ29kZSAtIGRvIG5vdCBlZGl0IG1hbnVhbGx5XG5leGVjICR7Y29tbWFuZH1cbmBcblxuICAvLyBDaGVjayBpZiBjb250ZW50IG1hdGNoZXMgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd3JpdGVzXG4gIGNvbnN0IGV4aXN0aW5nQ29udGVudCA9IGF3YWl0IHJlYWRGaWxlKHdyYXBwZXJQYXRoLCAndXRmLTgnKS5jYXRjaCgoKSA9PiBudWxsKVxuICBpZiAoZXhpc3RpbmdDb250ZW50ID09PSBzY3JpcHRDb250ZW50KSB7XG4gICAgcmV0dXJuIHdyYXBwZXJQYXRoXG4gIH1cblxuICBhd2FpdCBta2RpcihjaHJvbWVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIGF3YWl0IHdyaXRlRmlsZSh3cmFwcGVyUGF0aCwgc2NyaXB0Q29udGVudClcblxuICBpZiAocGxhdGZvcm0gIT09ICd3aW5kb3dzJykge1xuICAgIGF3YWl0IGNobW9kKHdyYXBwZXJQYXRoLCAwbzc1NSlcbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW0NsYXVkZSBpbiBDaHJvbWVdIENyZWF0ZWQgQ2hyb21lIG5hdGl2ZSBob3N0IHdyYXBwZXIgc2NyaXB0OiAke3dyYXBwZXJQYXRofWAsXG4gIClcbiAgcmV0dXJuIHdyYXBwZXJQYXRoXG59XG5cbi8qKlxuICogR2V0IGNhY2hlZCB2YWx1ZSBvZiB3aGV0aGVyIENocm9tZSBleHRlbnNpb24gaXMgaW5zdGFsbGVkLiBSZXR1cm5zXG4gKiBmcm9tIGRpc2sgY2FjaGUgaW1tZWRpYXRlbHksIHVwZGF0ZXMgY2FjaGUgaW4gYmFja2dyb3VuZC5cbiAqXG4gKiBVc2UgdGhpcyBmb3Igc3luYy9zdGFydHVwLWNyaXRpY2FsIHBhdGhzIHdoZXJlIGJsb2NraW5nIG9uIGZpbGVzeXN0ZW1cbiAqIGFjY2VzcyBpcyBub3QgYWNjZXB0YWJsZS4gVGhlIHZhbHVlIG1heSBiZSBzdGFsZSBpZiB0aGUgY2FjaGUgaGFzbid0XG4gKiBiZWVuIHVwZGF0ZWQgcmVjZW50bHkuXG4gKlxuICogT25seSBwb3NpdGl2ZSBkZXRlY3Rpb25zIGFyZSBwZXJzaXN0ZWQuIEEgbmVnYXRpdmUgcmVzdWx0IGZyb20gdGhlXG4gKiBmaWxlc3lzdGVtIHNjYW4gaXMgbm90IGNhY2hlZCwgYmVjYXVzZSBpdCBtYXkgY29tZSBmcm9tIGEgbWFjaGluZSB0aGF0XG4gKiBzaGFyZXMgfi8uY2xhdWRlLmpzb24gYnV0IGhhcyBubyBsb2NhbCBDaHJvbWUgKGUuZy4gYSByZW1vdGUgZGV2XG4gKiBlbnZpcm9ubWVudCB1c2luZyB0aGUgYnJpZGdlKSwgYW5kIGNhY2hpbmcgaXQgd291bGQgcGVybWFuZW50bHkgcG9pc29uXG4gKiBhdXRvLWVuYWJsZSBmb3IgZXZlcnkgc2Vzc2lvbiBvbiBldmVyeSBtYWNoaW5lIHRoYXQgcmVhZHMgdGhhdCBjb25maWcuXG4gKi9cbmZ1bmN0aW9uIGlzQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbGVkX0NBQ0hFRF9NQVlfQkVfU1RBTEUoKTogYm9vbGVhbiB7XG4gIC8vIFVwZGF0ZSBjYWNoZSBpbiBiYWNrZ3JvdW5kIHdpdGhvdXQgYmxvY2tpbmdcbiAgdm9pZCBpc0Nocm9tZUV4dGVuc2lvbkluc3RhbGxlZCgpLnRoZW4oaXNJbnN0YWxsZWQgPT4ge1xuICAgIC8vIE9ubHkgcGVyc2lzdCBwb3NpdGl2ZSBkZXRlY3Rpb25zIFx1MjAxNCBzZWUgZG9jc3RyaW5nLiBUaGUgY29zdCBvZiBhIHN0YWxlXG4gICAgLy8gYHRydWVgIGlzIG9uZSBzaWxlbnQgTUNQIGNvbm5lY3Rpb24gYXR0ZW1wdCBwZXIgc2Vzc2lvbjsgdGhlIGNvc3Qgb2YgYVxuICAgIC8vIHN0YWxlIGBmYWxzZWAgaXMgYXV0by1lbmFibGUgbmV2ZXIgd29ya2luZyBhZ2FpbiB3aXRob3V0IG1hbnVhbCByZXBhaXIuXG4gICAgaWYgKCFpc0luc3RhbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgaWYgKGNvbmZpZy5jYWNoZWRDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQgIT09IGlzSW5zdGFsbGVkKSB7XG4gICAgICBzYXZlR2xvYmFsQ29uZmlnKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgY2FjaGVkQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbGVkOiBpc0luc3RhbGxlZCxcbiAgICAgIH0pKVxuICAgIH1cbiAgfSlcblxuICAvLyBSZXR1cm4gY2FjaGVkIHZhbHVlIGltbWVkaWF0ZWx5IGZyb20gZGlza1xuICBjb25zdCBjYWNoZWQgPSBnZXRHbG9iYWxDb25maWcoKS5jYWNoZWRDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWRcbiAgcmV0dXJuIGNhY2hlZCA/PyBmYWxzZVxufVxuXG4vKipcbiAqIERldGVjdHMgaWYgdGhlIENsYXVkZSBpbiBDaHJvbWUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZCBieSBjaGVja2luZyB0aGUgRXh0ZW5zaW9uc1xuICogZGlyZWN0b3J5IGFjcm9zcyBhbGwgc3VwcG9ydGVkIENocm9taXVtLWJhc2VkIGJyb3dzZXJzIGFuZCB0aGVpciBwcm9maWxlcy5cbiAqXG4gKiBAcmV0dXJucyBPYmplY3Qgd2l0aCBpc0luc3RhbGxlZCBib29sZWFuIGFuZCB0aGUgYnJvd3NlciB3aGVyZSB0aGUgZXh0ZW5zaW9uIHdhcyBmb3VuZFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IGJyb3dzZXJQYXRocyA9IGdldEFsbEJyb3dzZXJEYXRhUGF0aHMoKVxuICBpZiAoYnJvd3NlclBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gVW5zdXBwb3J0ZWQgcGxhdGZvcm0gZm9yIGV4dGVuc2lvbiBkZXRlY3Rpb246ICR7Z2V0UGxhdGZvcm0oKX1gLFxuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWRQb3J0YWJsZShicm93c2VyUGF0aHMsIGxvZ0ZvckRlYnVnZ2luZylcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsZUFBZTtBQUV4QixTQUFTLFlBQVk7QUFXckIs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
