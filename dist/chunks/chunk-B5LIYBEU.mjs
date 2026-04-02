#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  init_normalization,
  normalizeNameForMCP
} from "./chunk-XFYUWZYI.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  init_which,
  which
} from "./chunk-LNQOFDTT.mjs";
import {
  init_debug,
  init_errors,
  isFsInaccessible,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/claudeInChrome/common.ts
import { readdirSync } from "fs";
import { stat } from "fs/promises";
import { homedir, platform, tmpdir, userInfo } from "os";
import { join } from "path";
function getAllBrowserDataPaths() {
  const platform2 = getPlatform();
  const home = homedir();
  const paths = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    let dataPath;
    switch (platform2) {
      case "macos":
        dataPath = config.macos.dataPath;
        break;
      case "linux":
      case "wsl":
        dataPath = config.linux.dataPath;
        break;
      case "windows": {
        if (config.windows.dataPath.length > 0) {
          const appDataBase = config.windows.useRoaming ? join(home, "AppData", "Roaming") : join(home, "AppData", "Local");
          paths.push({
            browser: browserId,
            path: join(appDataBase, ...config.windows.dataPath)
          });
        }
        continue;
      }
    }
    if (dataPath && dataPath.length > 0) {
      paths.push({
        browser: browserId,
        path: join(home, ...dataPath)
      });
    }
  }
  return paths;
}
function getAllNativeMessagingHostsDirs() {
  const platform2 = getPlatform();
  const home = homedir();
  const paths = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    switch (platform2) {
      case "macos":
        if (config.macos.nativeMessagingPath.length > 0) {
          paths.push({
            browser: browserId,
            path: join(home, ...config.macos.nativeMessagingPath)
          });
        }
        break;
      case "linux":
      case "wsl":
        if (config.linux.nativeMessagingPath.length > 0) {
          paths.push({
            browser: browserId,
            path: join(home, ...config.linux.nativeMessagingPath)
          });
        }
        break;
      case "windows":
        break;
    }
  }
  return paths;
}
function getAllWindowsRegistryKeys() {
  const keys = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    if (config.windows.registryKey) {
      keys.push({
        browser: browserId,
        key: config.windows.registryKey
      });
    }
  }
  return keys;
}
async function detectAvailableBrowser() {
  const platform2 = getPlatform();
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    switch (platform2) {
      case "macos": {
        const appPath = `/Applications/${config.macos.appName}.app`;
        try {
          const stats = await stat(appPath);
          if (stats.isDirectory()) {
            logForDebugging(
              `[Claude in Chrome] Detected browser: ${config.name}`
            );
            return browserId;
          }
        } catch (e) {
          if (!isFsInaccessible(e)) throw e;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (const binary of config.linux.binaries) {
          if (await which(binary).catch(() => null)) {
            logForDebugging(
              `[Claude in Chrome] Detected browser: ${config.name}`
            );
            return browserId;
          }
        }
        break;
      }
      case "windows": {
        const home = homedir();
        if (config.windows.dataPath.length > 0) {
          const appDataBase = config.windows.useRoaming ? join(home, "AppData", "Roaming") : join(home, "AppData", "Local");
          const dataPath = join(appDataBase, ...config.windows.dataPath);
          try {
            const stats = await stat(dataPath);
            if (stats.isDirectory()) {
              logForDebugging(
                `[Claude in Chrome] Detected browser: ${config.name}`
              );
              return browserId;
            }
          } catch (e) {
            if (!isFsInaccessible(e)) throw e;
          }
        }
        break;
      }
    }
  }
  return null;
}
function isClaudeInChromeMCPServer(name) {
  return normalizeNameForMCP(name) === CLAUDE_IN_CHROME_MCP_SERVER_NAME;
}
function trackClaudeInChromeTabId(tabId) {
  if (trackedTabIds.size >= MAX_TRACKED_TABS && !trackedTabIds.has(tabId)) {
    trackedTabIds.clear();
  }
  trackedTabIds.add(tabId);
}
async function openInChrome(url) {
  const currentPlatform = getPlatform();
  const browser = await detectAvailableBrowser();
  if (!browser) {
    logForDebugging("[Claude in Chrome] No compatible browser found");
    return false;
  }
  const config = CHROMIUM_BROWSERS[browser];
  switch (currentPlatform) {
    case "macos": {
      const { code } = await execFileNoThrow("open", [
        "-a",
        config.macos.appName,
        url
      ]);
      return code === 0;
    }
    case "windows": {
      const { code } = await execFileNoThrow("rundll32", ["url,OpenURL", url]);
      return code === 0;
    }
    case "wsl":
    case "linux": {
      for (const binary of config.linux.binaries) {
        const { code } = await execFileNoThrow(binary, [url]);
        if (code === 0) {
          return true;
        }
      }
      return false;
    }
    default:
      return false;
  }
}
function getSocketDir() {
  return `/tmp/claude-mcp-browser-bridge-${getUsername()}`;
}
function getSecureSocketPath() {
  if (platform() === "win32") {
    return `\\\\.\\pipe\\${getSocketName()}`;
  }
  return join(getSocketDir(), `${process.pid}.sock`);
}
function getAllSocketPaths() {
  if (platform() === "win32") {
    return [`\\\\.\\pipe\\${getSocketName()}`];
  }
  const paths = [];
  const socketDir = getSocketDir();
  try {
    const files = readdirSync(socketDir);
    for (const file of files) {
      if (file.endsWith(".sock")) {
        paths.push(join(socketDir, file));
      }
    }
  } catch {
  }
  const legacyName = `claude-mcp-browser-bridge-${getUsername()}`;
  const legacyTmpdir = join(tmpdir(), legacyName);
  const legacyTmp = `/tmp/${legacyName}`;
  if (!paths.includes(legacyTmpdir)) {
    paths.push(legacyTmpdir);
  }
  if (legacyTmpdir !== legacyTmp && !paths.includes(legacyTmp)) {
    paths.push(legacyTmp);
  }
  return paths;
}
function getSocketName() {
  return `claude-mcp-browser-bridge-${getUsername()}`;
}
function getUsername() {
  try {
    return userInfo().username || "default";
  } catch {
    return process.env.USER || process.env.USERNAME || "default";
  }
}
var CLAUDE_IN_CHROME_MCP_SERVER_NAME, CHROMIUM_BROWSERS, BROWSER_DETECTION_ORDER, MAX_TRACKED_TABS, trackedTabIds;
var init_common = __esm({
  "src/utils/claudeInChrome/common.ts"() {
    init_normalization();
    init_debug();
    init_errors();
    init_execFileNoThrow();
    init_platform();
    init_which();
    CLAUDE_IN_CHROME_MCP_SERVER_NAME = "claude-in-chrome";
    CHROMIUM_BROWSERS = {
      chrome: {
        name: "Google Chrome",
        macos: {
          appName: "Google Chrome",
          dataPath: ["Library", "Application Support", "Google", "Chrome"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Google",
            "Chrome",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["google-chrome", "google-chrome-stable"],
          dataPath: [".config", "google-chrome"],
          nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"]
        },
        windows: {
          dataPath: ["Google", "Chrome", "User Data"],
          registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts"
        }
      },
      brave: {
        name: "Brave",
        macos: {
          appName: "Brave Browser",
          dataPath: [
            "Library",
            "Application Support",
            "BraveSoftware",
            "Brave-Browser"
          ],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "BraveSoftware",
            "Brave-Browser",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["brave-browser", "brave"],
          dataPath: [".config", "BraveSoftware", "Brave-Browser"],
          nativeMessagingPath: [
            ".config",
            "BraveSoftware",
            "Brave-Browser",
            "NativeMessagingHosts"
          ]
        },
        windows: {
          dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
          registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts"
        }
      },
      arc: {
        name: "Arc",
        macos: {
          appName: "Arc",
          dataPath: ["Library", "Application Support", "Arc", "User Data"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Arc",
            "User Data",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          // Arc is not available on Linux
          binaries: [],
          dataPath: [],
          nativeMessagingPath: []
        },
        windows: {
          // Arc Windows is Chromium-based
          dataPath: ["Arc", "User Data"],
          registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
        }
      },
      chromium: {
        name: "Chromium",
        macos: {
          appName: "Chromium",
          dataPath: ["Library", "Application Support", "Chromium"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Chromium",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["chromium", "chromium-browser"],
          dataPath: [".config", "chromium"],
          nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"]
        },
        windows: {
          dataPath: ["Chromium", "User Data"],
          registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
        }
      },
      edge: {
        name: "Microsoft Edge",
        macos: {
          appName: "Microsoft Edge",
          dataPath: ["Library", "Application Support", "Microsoft Edge"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Microsoft Edge",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["microsoft-edge", "microsoft-edge-stable"],
          dataPath: [".config", "microsoft-edge"],
          nativeMessagingPath: [
            ".config",
            "microsoft-edge",
            "NativeMessagingHosts"
          ]
        },
        windows: {
          dataPath: ["Microsoft", "Edge", "User Data"],
          registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts"
        }
      },
      vivaldi: {
        name: "Vivaldi",
        macos: {
          appName: "Vivaldi",
          dataPath: ["Library", "Application Support", "Vivaldi"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "Vivaldi",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["vivaldi", "vivaldi-stable"],
          dataPath: [".config", "vivaldi"],
          nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"]
        },
        windows: {
          dataPath: ["Vivaldi", "User Data"],
          registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts"
        }
      },
      opera: {
        name: "Opera",
        macos: {
          appName: "Opera",
          dataPath: ["Library", "Application Support", "com.operasoftware.Opera"],
          nativeMessagingPath: [
            "Library",
            "Application Support",
            "com.operasoftware.Opera",
            "NativeMessagingHosts"
          ]
        },
        linux: {
          binaries: ["opera"],
          dataPath: [".config", "opera"],
          nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"]
        },
        windows: {
          dataPath: ["Opera Software", "Opera Stable"],
          registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
          useRoaming: true
          // Opera uses Roaming AppData, not Local
        }
      }
    };
    BROWSER_DETECTION_ORDER = [
      "chrome",
      "brave",
      "arc",
      "edge",
      "chromium",
      "vivaldi",
      "opera"
    ];
    MAX_TRACKED_TABS = 200;
    trackedTabIds = /* @__PURE__ */ new Set();
  }
});

export {
  CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  getAllBrowserDataPaths,
  getAllNativeMessagingHostsDirs,
  getAllWindowsRegistryKeys,
  isClaudeInChromeMCPServer,
  trackClaudeInChromeTabId,
  openInChrome,
  getSocketDir,
  getSecureSocketPath,
  getAllSocketPaths,
  init_common
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL2NvbW1vbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgcmVhZGRpclN5bmMgfSBmcm9tICdmcydcbmltcG9ydCB7IHN0YXQgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGhvbWVkaXIsIHBsYXRmb3JtLCB0bXBkaXIsIHVzZXJJbmZvIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZU5hbWVGb3JNQ1AgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3Avbm9ybWFsaXphdGlvbi5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHsgaXNGc0luYWNjZXNzaWJsZSB9IGZyb20gJy4uL2Vycm9ycy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4uL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0uanMnXG5pbXBvcnQgeyB3aGljaCB9IGZyb20gJy4uL3doaWNoLmpzJ1xuXG5leHBvcnQgY29uc3QgQ0xBVURFX0lOX0NIUk9NRV9NQ1BfU0VSVkVSX05BTUUgPSAnY2xhdWRlLWluLWNocm9tZSdcblxuLy8gUmUtZXhwb3J0IENocm9taXVtQnJvd3NlciB0eXBlIGZvciBzZXR1cC50c1xuZXhwb3J0IHR5cGUgeyBDaHJvbWl1bUJyb3dzZXIgfSBmcm9tICcuL3NldHVwUG9ydGFibGUuanMnXG5cbi8vIEltcG9ydCBmb3IgbG9jYWwgdXNlXG5pbXBvcnQgdHlwZSB7IENocm9taXVtQnJvd3NlciB9IGZyb20gJy4vc2V0dXBQb3J0YWJsZS5qcydcblxudHlwZSBCcm93c2VyQ29uZmlnID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbWFjb3M6IHtcbiAgICBhcHBOYW1lOiBzdHJpbmdcbiAgICBkYXRhUGF0aDogc3RyaW5nW11cbiAgICBuYXRpdmVNZXNzYWdpbmdQYXRoOiBzdHJpbmdbXVxuICB9XG4gIGxpbnV4OiB7XG4gICAgYmluYXJpZXM6IHN0cmluZ1tdXG4gICAgZGF0YVBhdGg6IHN0cmluZ1tdXG4gICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogc3RyaW5nW11cbiAgfVxuICB3aW5kb3dzOiB7XG4gICAgZGF0YVBhdGg6IHN0cmluZ1tdXG4gICAgcmVnaXN0cnlLZXk6IHN0cmluZ1xuICAgIHVzZVJvYW1pbmc/OiBib29sZWFuIC8vIE9wZXJhIHVzZXMgUm9hbWluZyBpbnN0ZWFkIG9mIExvY2FsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENIUk9NSVVNX0JST1dTRVJTOiBSZWNvcmQ8Q2hyb21pdW1Ccm93c2VyLCBCcm93c2VyQ29uZmlnPiA9IHtcbiAgY2hyb21lOiB7XG4gICAgbmFtZTogJ0dvb2dsZSBDaHJvbWUnLFxuICAgIG1hY29zOiB7XG4gICAgICBhcHBOYW1lOiAnR29vZ2xlIENocm9tZScsXG4gICAgICBkYXRhUGF0aDogWydMaWJyYXJ5JywgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLCAnR29vZ2xlJywgJ0Nocm9tZSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogW1xuICAgICAgICAnTGlicmFyeScsXG4gICAgICAgICdBcHBsaWNhdGlvbiBTdXBwb3J0JyxcbiAgICAgICAgJ0dvb2dsZScsXG4gICAgICAgICdDaHJvbWUnLFxuICAgICAgICAnTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpbnV4OiB7XG4gICAgICBiaW5hcmllczogWydnb29nbGUtY2hyb21lJywgJ2dvb2dsZS1jaHJvbWUtc3RhYmxlJ10sXG4gICAgICBkYXRhUGF0aDogWycuY29uZmlnJywgJ2dvb2dsZS1jaHJvbWUnXSxcbiAgICAgIG5hdGl2ZU1lc3NhZ2luZ1BhdGg6IFsnLmNvbmZpZycsICdnb29nbGUtY2hyb21lJywgJ05hdGl2ZU1lc3NhZ2luZ0hvc3RzJ10sXG4gICAgfSxcbiAgICB3aW5kb3dzOiB7XG4gICAgICBkYXRhUGF0aDogWydHb29nbGUnLCAnQ2hyb21lJywgJ1VzZXIgRGF0YSddLFxuICAgICAgcmVnaXN0cnlLZXk6ICdIS0NVXFxcXFNvZnR3YXJlXFxcXEdvb2dsZVxcXFxDaHJvbWVcXFxcTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgIH0sXG4gIH0sXG4gIGJyYXZlOiB7XG4gICAgbmFtZTogJ0JyYXZlJyxcbiAgICBtYWNvczoge1xuICAgICAgYXBwTmFtZTogJ0JyYXZlIEJyb3dzZXInLFxuICAgICAgZGF0YVBhdGg6IFtcbiAgICAgICAgJ0xpYnJhcnknLFxuICAgICAgICAnQXBwbGljYXRpb24gU3VwcG9ydCcsXG4gICAgICAgICdCcmF2ZVNvZnR3YXJlJyxcbiAgICAgICAgJ0JyYXZlLUJyb3dzZXInLFxuICAgICAgXSxcbiAgICAgIG5hdGl2ZU1lc3NhZ2luZ1BhdGg6IFtcbiAgICAgICAgJ0xpYnJhcnknLFxuICAgICAgICAnQXBwbGljYXRpb24gU3VwcG9ydCcsXG4gICAgICAgICdCcmF2ZVNvZnR3YXJlJyxcbiAgICAgICAgJ0JyYXZlLUJyb3dzZXInLFxuICAgICAgICAnTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpbnV4OiB7XG4gICAgICBiaW5hcmllczogWydicmF2ZS1icm93c2VyJywgJ2JyYXZlJ10sXG4gICAgICBkYXRhUGF0aDogWycuY29uZmlnJywgJ0JyYXZlU29mdHdhcmUnLCAnQnJhdmUtQnJvd3NlciddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogW1xuICAgICAgICAnLmNvbmZpZycsXG4gICAgICAgICdCcmF2ZVNvZnR3YXJlJyxcbiAgICAgICAgJ0JyYXZlLUJyb3dzZXInLFxuICAgICAgICAnTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHdpbmRvd3M6IHtcbiAgICAgIGRhdGFQYXRoOiBbJ0JyYXZlU29mdHdhcmUnLCAnQnJhdmUtQnJvd3NlcicsICdVc2VyIERhdGEnXSxcbiAgICAgIHJlZ2lzdHJ5S2V5OlxuICAgICAgICAnSEtDVVxcXFxTb2Z0d2FyZVxcXFxCcmF2ZVNvZnR3YXJlXFxcXEJyYXZlLUJyb3dzZXJcXFxcTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgIH0sXG4gIH0sXG4gIGFyYzoge1xuICAgIG5hbWU6ICdBcmMnLFxuICAgIG1hY29zOiB7XG4gICAgICBhcHBOYW1lOiAnQXJjJyxcbiAgICAgIGRhdGFQYXRoOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdBcmMnLCAnVXNlciBEYXRhJ10sXG4gICAgICBuYXRpdmVNZXNzYWdpbmdQYXRoOiBbXG4gICAgICAgICdMaWJyYXJ5JyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLFxuICAgICAgICAnQXJjJyxcbiAgICAgICAgJ1VzZXIgRGF0YScsXG4gICAgICAgICdOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGludXg6IHtcbiAgICAgIC8vIEFyYyBpcyBub3QgYXZhaWxhYmxlIG9uIExpbnV4XG4gICAgICBiaW5hcmllczogW10sXG4gICAgICBkYXRhUGF0aDogW10sXG4gICAgICBuYXRpdmVNZXNzYWdpbmdQYXRoOiBbXSxcbiAgICB9LFxuICAgIHdpbmRvd3M6IHtcbiAgICAgIC8vIEFyYyBXaW5kb3dzIGlzIENocm9taXVtLWJhc2VkXG4gICAgICBkYXRhUGF0aDogWydBcmMnLCAnVXNlciBEYXRhJ10sXG4gICAgICByZWdpc3RyeUtleTogJ0hLQ1VcXFxcU29mdHdhcmVcXFxcQXJjQnJvd3NlclxcXFxBcmNcXFxcTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgIH0sXG4gIH0sXG4gIGNocm9taXVtOiB7XG4gICAgbmFtZTogJ0Nocm9taXVtJyxcbiAgICBtYWNvczoge1xuICAgICAgYXBwTmFtZTogJ0Nocm9taXVtJyxcbiAgICAgIGRhdGFQYXRoOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdDaHJvbWl1bSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogW1xuICAgICAgICAnTGlicmFyeScsXG4gICAgICAgICdBcHBsaWNhdGlvbiBTdXBwb3J0JyxcbiAgICAgICAgJ0Nocm9taXVtJyxcbiAgICAgICAgJ05hdGl2ZU1lc3NhZ2luZ0hvc3RzJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaW51eDoge1xuICAgICAgYmluYXJpZXM6IFsnY2hyb21pdW0nLCAnY2hyb21pdW0tYnJvd3NlciddLFxuICAgICAgZGF0YVBhdGg6IFsnLmNvbmZpZycsICdjaHJvbWl1bSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogWycuY29uZmlnJywgJ2Nocm9taXVtJywgJ05hdGl2ZU1lc3NhZ2luZ0hvc3RzJ10sXG4gICAgfSxcbiAgICB3aW5kb3dzOiB7XG4gICAgICBkYXRhUGF0aDogWydDaHJvbWl1bScsICdVc2VyIERhdGEnXSxcbiAgICAgIHJlZ2lzdHJ5S2V5OiAnSEtDVVxcXFxTb2Z0d2FyZVxcXFxDaHJvbWl1bVxcXFxOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgfSxcbiAgfSxcbiAgZWRnZToge1xuICAgIG5hbWU6ICdNaWNyb3NvZnQgRWRnZScsXG4gICAgbWFjb3M6IHtcbiAgICAgIGFwcE5hbWU6ICdNaWNyb3NvZnQgRWRnZScsXG4gICAgICBkYXRhUGF0aDogWydMaWJyYXJ5JywgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLCAnTWljcm9zb2Z0IEVkZ2UnXSxcbiAgICAgIG5hdGl2ZU1lc3NhZ2luZ1BhdGg6IFtcbiAgICAgICAgJ0xpYnJhcnknLFxuICAgICAgICAnQXBwbGljYXRpb24gU3VwcG9ydCcsXG4gICAgICAgICdNaWNyb3NvZnQgRWRnZScsXG4gICAgICAgICdOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGludXg6IHtcbiAgICAgIGJpbmFyaWVzOiBbJ21pY3Jvc29mdC1lZGdlJywgJ21pY3Jvc29mdC1lZGdlLXN0YWJsZSddLFxuICAgICAgZGF0YVBhdGg6IFsnLmNvbmZpZycsICdtaWNyb3NvZnQtZWRnZSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogW1xuICAgICAgICAnLmNvbmZpZycsXG4gICAgICAgICdtaWNyb3NvZnQtZWRnZScsXG4gICAgICAgICdOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAgd2luZG93czoge1xuICAgICAgZGF0YVBhdGg6IFsnTWljcm9zb2Z0JywgJ0VkZ2UnLCAnVXNlciBEYXRhJ10sXG4gICAgICByZWdpc3RyeUtleTogJ0hLQ1VcXFxcU29mdHdhcmVcXFxcTWljcm9zb2Z0XFxcXEVkZ2VcXFxcTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgIH0sXG4gIH0sXG4gIHZpdmFsZGk6IHtcbiAgICBuYW1lOiAnVml2YWxkaScsXG4gICAgbWFjb3M6IHtcbiAgICAgIGFwcE5hbWU6ICdWaXZhbGRpJyxcbiAgICAgIGRhdGFQYXRoOiBbJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsICdWaXZhbGRpJ10sXG4gICAgICBuYXRpdmVNZXNzYWdpbmdQYXRoOiBbXG4gICAgICAgICdMaWJyYXJ5JyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLFxuICAgICAgICAnVml2YWxkaScsXG4gICAgICAgICdOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGludXg6IHtcbiAgICAgIGJpbmFyaWVzOiBbJ3ZpdmFsZGknLCAndml2YWxkaS1zdGFibGUnXSxcbiAgICAgIGRhdGFQYXRoOiBbJy5jb25maWcnLCAndml2YWxkaSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogWycuY29uZmlnJywgJ3ZpdmFsZGknLCAnTmF0aXZlTWVzc2FnaW5nSG9zdHMnXSxcbiAgICB9LFxuICAgIHdpbmRvd3M6IHtcbiAgICAgIGRhdGFQYXRoOiBbJ1ZpdmFsZGknLCAnVXNlciBEYXRhJ10sXG4gICAgICByZWdpc3RyeUtleTogJ0hLQ1VcXFxcU29mdHdhcmVcXFxcVml2YWxkaVxcXFxOYXRpdmVNZXNzYWdpbmdIb3N0cycsXG4gICAgfSxcbiAgfSxcbiAgb3BlcmE6IHtcbiAgICBuYW1lOiAnT3BlcmEnLFxuICAgIG1hY29zOiB7XG4gICAgICBhcHBOYW1lOiAnT3BlcmEnLFxuICAgICAgZGF0YVBhdGg6IFsnTGlicmFyeScsICdBcHBsaWNhdGlvbiBTdXBwb3J0JywgJ2NvbS5vcGVyYXNvZnR3YXJlLk9wZXJhJ10sXG4gICAgICBuYXRpdmVNZXNzYWdpbmdQYXRoOiBbXG4gICAgICAgICdMaWJyYXJ5JyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLFxuICAgICAgICAnY29tLm9wZXJhc29mdHdhcmUuT3BlcmEnLFxuICAgICAgICAnTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpbnV4OiB7XG4gICAgICBiaW5hcmllczogWydvcGVyYSddLFxuICAgICAgZGF0YVBhdGg6IFsnLmNvbmZpZycsICdvcGVyYSddLFxuICAgICAgbmF0aXZlTWVzc2FnaW5nUGF0aDogWycuY29uZmlnJywgJ29wZXJhJywgJ05hdGl2ZU1lc3NhZ2luZ0hvc3RzJ10sXG4gICAgfSxcbiAgICB3aW5kb3dzOiB7XG4gICAgICBkYXRhUGF0aDogWydPcGVyYSBTb2Z0d2FyZScsICdPcGVyYSBTdGFibGUnXSxcbiAgICAgIHJlZ2lzdHJ5S2V5OlxuICAgICAgICAnSEtDVVxcXFxTb2Z0d2FyZVxcXFxPcGVyYSBTb2Z0d2FyZVxcXFxPcGVyYSBTdGFibGVcXFxcTmF0aXZlTWVzc2FnaW5nSG9zdHMnLFxuICAgICAgdXNlUm9hbWluZzogdHJ1ZSwgLy8gT3BlcmEgdXNlcyBSb2FtaW5nIEFwcERhdGEsIG5vdCBMb2NhbFxuICAgIH0sXG4gIH0sXG59XG5cbi8vIFByaW9yaXR5IG9yZGVyIGZvciBicm93c2VyIGRldGVjdGlvbiAobW9zdCBjb21tb24gZmlyc3QpXG5leHBvcnQgY29uc3QgQlJPV1NFUl9ERVRFQ1RJT05fT1JERVI6IENocm9taXVtQnJvd3NlcltdID0gW1xuICAnY2hyb21lJyxcbiAgJ2JyYXZlJyxcbiAgJ2FyYycsXG4gICdlZGdlJyxcbiAgJ2Nocm9taXVtJyxcbiAgJ3ZpdmFsZGknLFxuICAnb3BlcmEnLFxuXVxuXG4vKipcbiAqIEdldCBhbGwgYnJvd3NlciBkYXRhIHBhdGhzIHRvIGNoZWNrIGZvciBleHRlbnNpb24gaW5zdGFsbGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxCcm93c2VyRGF0YVBhdGhzKCk6IHtcbiAgYnJvd3NlcjogQ2hyb21pdW1Ccm93c2VyXG4gIHBhdGg6IHN0cmluZ1xufVtdIHtcbiAgY29uc3QgcGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpXG4gIGNvbnN0IGhvbWUgPSBob21lZGlyKClcbiAgY29uc3QgcGF0aHM6IHsgYnJvd3NlcjogQ2hyb21pdW1Ccm93c2VyOyBwYXRoOiBzdHJpbmcgfVtdID0gW11cblxuICBmb3IgKGNvbnN0IGJyb3dzZXJJZCBvZiBCUk9XU0VSX0RFVEVDVElPTl9PUkRFUikge1xuICAgIGNvbnN0IGNvbmZpZyA9IENIUk9NSVVNX0JST1dTRVJTW2Jyb3dzZXJJZF1cbiAgICBsZXQgZGF0YVBhdGg6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG5cbiAgICBzd2l0Y2ggKHBsYXRmb3JtKSB7XG4gICAgICBjYXNlICdtYWNvcyc6XG4gICAgICAgIGRhdGFQYXRoID0gY29uZmlnLm1hY29zLmRhdGFQYXRoXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdsaW51eCc6XG4gICAgICBjYXNlICd3c2wnOlxuICAgICAgICBkYXRhUGF0aCA9IGNvbmZpZy5saW51eC5kYXRhUGF0aFxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd2luZG93cyc6IHtcbiAgICAgICAgaWYgKGNvbmZpZy53aW5kb3dzLmRhdGFQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBhcHBEYXRhQmFzZSA9IGNvbmZpZy53aW5kb3dzLnVzZVJvYW1pbmdcbiAgICAgICAgICAgID8gam9pbihob21lLCAnQXBwRGF0YScsICdSb2FtaW5nJylcbiAgICAgICAgICAgIDogam9pbihob21lLCAnQXBwRGF0YScsICdMb2NhbCcpXG4gICAgICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgICAgICBicm93c2VyOiBicm93c2VySWQsXG4gICAgICAgICAgICBwYXRoOiBqb2luKGFwcERhdGFCYXNlLCAuLi5jb25maWcud2luZG93cy5kYXRhUGF0aCksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhUGF0aCAmJiBkYXRhUGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICBwYXRocy5wdXNoKHtcbiAgICAgICAgYnJvd3NlcjogYnJvd3NlcklkLFxuICAgICAgICBwYXRoOiBqb2luKGhvbWUsIC4uLmRhdGFQYXRoKSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhzXG59XG5cbi8qKlxuICogR2V0IG5hdGl2ZSBtZXNzYWdpbmcgaG9zdCBkaXJlY3RvcmllcyBmb3IgYWxsIHN1cHBvcnRlZCBicm93c2Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTmF0aXZlTWVzc2FnaW5nSG9zdHNEaXJzKCk6IHtcbiAgYnJvd3NlcjogQ2hyb21pdW1Ccm93c2VyXG4gIHBhdGg6IHN0cmluZ1xufVtdIHtcbiAgY29uc3QgcGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpXG4gIGNvbnN0IGhvbWUgPSBob21lZGlyKClcbiAgY29uc3QgcGF0aHM6IHsgYnJvd3NlcjogQ2hyb21pdW1Ccm93c2VyOyBwYXRoOiBzdHJpbmcgfVtdID0gW11cblxuICBmb3IgKGNvbnN0IGJyb3dzZXJJZCBvZiBCUk9XU0VSX0RFVEVDVElPTl9PUkRFUikge1xuICAgIGNvbnN0IGNvbmZpZyA9IENIUk9NSVVNX0JST1dTRVJTW2Jyb3dzZXJJZF1cblxuICAgIHN3aXRjaCAocGxhdGZvcm0pIHtcbiAgICAgIGNhc2UgJ21hY29zJzpcbiAgICAgICAgaWYgKGNvbmZpZy5tYWNvcy5uYXRpdmVNZXNzYWdpbmdQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwYXRocy5wdXNoKHtcbiAgICAgICAgICAgIGJyb3dzZXI6IGJyb3dzZXJJZCxcbiAgICAgICAgICAgIHBhdGg6IGpvaW4oaG9tZSwgLi4uY29uZmlnLm1hY29zLm5hdGl2ZU1lc3NhZ2luZ1BhdGgpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2xpbnV4JzpcbiAgICAgIGNhc2UgJ3dzbCc6XG4gICAgICAgIGlmIChjb25maWcubGludXgubmF0aXZlTWVzc2FnaW5nUGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgICAgICBicm93c2VyOiBicm93c2VySWQsXG4gICAgICAgICAgICBwYXRoOiBqb2luKGhvbWUsIC4uLmNvbmZpZy5saW51eC5uYXRpdmVNZXNzYWdpbmdQYXRoKSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3aW5kb3dzJzpcbiAgICAgICAgLy8gV2luZG93cyB1c2VzIHJlZ2lzdHJ5LCBub3QgZmlsZSBwYXRocyBmb3IgbmF0aXZlIG1lc3NhZ2luZ1xuICAgICAgICAvLyBXZSdsbCB1c2UgYSBjb21tb24gbG9jYXRpb24gZm9yIHRoZSBtYW5pZmVzdCBmaWxlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhzXG59XG5cbi8qKlxuICogR2V0IFdpbmRvd3MgcmVnaXN0cnkga2V5cyBmb3IgYWxsIHN1cHBvcnRlZCBicm93c2Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsV2luZG93c1JlZ2lzdHJ5S2V5cygpOiB7XG4gIGJyb3dzZXI6IENocm9taXVtQnJvd3NlclxuICBrZXk6IHN0cmluZ1xufVtdIHtcbiAgY29uc3Qga2V5czogeyBicm93c2VyOiBDaHJvbWl1bUJyb3dzZXI7IGtleTogc3RyaW5nIH1bXSA9IFtdXG5cbiAgZm9yIChjb25zdCBicm93c2VySWQgb2YgQlJPV1NFUl9ERVRFQ1RJT05fT1JERVIpIHtcbiAgICBjb25zdCBjb25maWcgPSBDSFJPTUlVTV9CUk9XU0VSU1ticm93c2VySWRdXG4gICAgaWYgKGNvbmZpZy53aW5kb3dzLnJlZ2lzdHJ5S2V5KSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBicm93c2VyOiBicm93c2VySWQsXG4gICAgICAgIGtleTogY29uZmlnLndpbmRvd3MucmVnaXN0cnlLZXksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBrZXlzXG59XG5cbi8qKlxuICogRGV0ZWN0IHdoaWNoIGJyb3dzZXIgdG8gdXNlIGZvciBvcGVuaW5nIFVSTHNcbiAqIFJldHVybnMgdGhlIGZpcnN0IGF2YWlsYWJsZSBicm93c2VyLCBvciBudWxsIGlmIG5vbmUgZm91bmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRldGVjdEF2YWlsYWJsZUJyb3dzZXIoKTogUHJvbWlzZTxDaHJvbWl1bUJyb3dzZXIgfCBudWxsPiB7XG4gIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuXG4gIGZvciAoY29uc3QgYnJvd3NlcklkIG9mIEJST1dTRVJfREVURUNUSU9OX09SREVSKSB7XG4gICAgY29uc3QgY29uZmlnID0gQ0hST01JVU1fQlJPV1NFUlNbYnJvd3NlcklkXVxuXG4gICAgc3dpdGNoIChwbGF0Zm9ybSkge1xuICAgICAgY2FzZSAnbWFjb3MnOiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSAuYXBwIGJ1bmRsZSAoYSBkaXJlY3RvcnkpIGV4aXN0c1xuICAgICAgICBjb25zdCBhcHBQYXRoID0gYC9BcHBsaWNhdGlvbnMvJHtjb25maWcubWFjb3MuYXBwTmFtZX0uYXBwYFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgc3RhdChhcHBQYXRoKVxuICAgICAgICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gRGV0ZWN0ZWQgYnJvd3NlcjogJHtjb25maWcubmFtZX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGJyb3dzZXJJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmICghaXNGc0luYWNjZXNzaWJsZShlKSkgdGhyb3cgZVxuICAgICAgICAgIC8vIEFwcCBub3QgZm91bmQsIGNvbnRpbnVlIGNoZWNraW5nXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3dzbCc6XG4gICAgICBjYXNlICdsaW51eCc6IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGJpbmFyeSBleGlzdHNcbiAgICAgICAgZm9yIChjb25zdCBiaW5hcnkgb2YgY29uZmlnLmxpbnV4LmJpbmFyaWVzKSB7XG4gICAgICAgICAgaWYgKGF3YWl0IHdoaWNoKGJpbmFyeSkuY2F0Y2goKCkgPT4gbnVsbCkpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtDbGF1ZGUgaW4gQ2hyb21lXSBEZXRlY3RlZCBicm93c2VyOiAke2NvbmZpZy5uYW1lfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gYnJvd3NlcklkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICd3aW5kb3dzJzoge1xuICAgICAgICAvLyBDaGVjayBpZiBkYXRhIHBhdGggZXhpc3RzIChpbmRpY2F0ZXMgYnJvd3NlciBpcyBpbnN0YWxsZWQpXG4gICAgICAgIGNvbnN0IGhvbWUgPSBob21lZGlyKClcbiAgICAgICAgaWYgKGNvbmZpZy53aW5kb3dzLmRhdGFQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBhcHBEYXRhQmFzZSA9IGNvbmZpZy53aW5kb3dzLnVzZVJvYW1pbmdcbiAgICAgICAgICAgID8gam9pbihob21lLCAnQXBwRGF0YScsICdSb2FtaW5nJylcbiAgICAgICAgICAgIDogam9pbihob21lLCAnQXBwRGF0YScsICdMb2NhbCcpXG4gICAgICAgICAgY29uc3QgZGF0YVBhdGggPSBqb2luKGFwcERhdGFCYXNlLCAuLi5jb25maWcud2luZG93cy5kYXRhUGF0aClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0KGRhdGFQYXRoKVxuICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbQ2xhdWRlIGluIENocm9tZV0gRGV0ZWN0ZWQgYnJvd3NlcjogJHtjb25maWcubmFtZX1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBicm93c2VySWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIWlzRnNJbmFjY2Vzc2libGUoZSkpIHRocm93IGVcbiAgICAgICAgICAgIC8vIEJyb3dzZXIgbm90IGZvdW5kLCBjb250aW51ZSBjaGVja2luZ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXVkZUluQ2hyb21lTUNQU2VydmVyKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbm9ybWFsaXplTmFtZUZvck1DUChuYW1lKSA9PT0gQ0xBVURFX0lOX0NIUk9NRV9NQ1BfU0VSVkVSX05BTUVcbn1cblxuY29uc3QgTUFYX1RSQUNLRURfVEFCUyA9IDIwMFxuY29uc3QgdHJhY2tlZFRhYklkcyA9IG5ldyBTZXQ8bnVtYmVyPigpXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0NsYXVkZUluQ2hyb21lVGFiSWQodGFiSWQ6IG51bWJlcik6IHZvaWQge1xuICBpZiAodHJhY2tlZFRhYklkcy5zaXplID49IE1BWF9UUkFDS0VEX1RBQlMgJiYgIXRyYWNrZWRUYWJJZHMuaGFzKHRhYklkKSkge1xuICAgIHRyYWNrZWRUYWJJZHMuY2xlYXIoKVxuICB9XG4gIHRyYWNrZWRUYWJJZHMuYWRkKHRhYklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFja2VkQ2xhdWRlSW5DaHJvbWVUYWJJZCh0YWJJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiB0cmFja2VkVGFiSWRzLmhhcyh0YWJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5JbkNocm9tZSh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBjdXJyZW50UGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpXG5cbiAgLy8gRGV0ZWN0IHRoZSBiZXN0IGF2YWlsYWJsZSBicm93c2VyXG4gIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBkZXRlY3RBdmFpbGFibGVCcm93c2VyKClcblxuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tDbGF1ZGUgaW4gQ2hyb21lXSBObyBjb21wYXRpYmxlIGJyb3dzZXIgZm91bmQnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gQ0hST01JVU1fQlJPV1NFUlNbYnJvd3Nlcl1cblxuICBzd2l0Y2ggKGN1cnJlbnRQbGF0Zm9ybSkge1xuICAgIGNhc2UgJ21hY29zJzoge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ29wZW4nLCBbXG4gICAgICAgICctYScsXG4gICAgICAgIGNvbmZpZy5tYWNvcy5hcHBOYW1lLFxuICAgICAgICB1cmwsXG4gICAgICBdKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgICB9XG4gICAgY2FzZSAnd2luZG93cyc6IHtcbiAgICAgIC8vIFVzZSBydW5kbGwzMiB0byBhdm9pZCBjbWQuZXhlIG1ldGFjaGFyYWN0ZXIgaXNzdWVzIHdpdGggVVJMcyBjb250YWluaW5nICYgfCA+IDxcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdydW5kbGwzMicsIFsndXJsLE9wZW5VUkwnLCB1cmxdKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgICB9XG4gICAgY2FzZSAnd3NsJzpcbiAgICBjYXNlICdsaW51eCc6IHtcbiAgICAgIGZvciAoY29uc3QgYmluYXJ5IG9mIGNvbmZpZy5saW51eC5iaW5hcmllcykge1xuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhiaW5hcnksIFt1cmxdKVxuICAgICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNvY2tldCBkaXJlY3RvcnkgcGF0aCAoVW5peCBvbmx5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ja2V0RGlyKCk6IHN0cmluZyB7XG4gIHJldHVybiBgL3RtcC9jbGF1ZGUtbWNwLWJyb3dzZXItYnJpZGdlLSR7Z2V0VXNlcm5hbWUoKX1gXG59XG5cbi8qKlxuICogR2V0IHRoZSBzb2NrZXQgcGF0aCAoVW5peCkgb3IgcGlwZSBuYW1lIChXaW5kb3dzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VjdXJlU29ja2V0UGF0aCgpOiBzdHJpbmcge1xuICBpZiAocGxhdGZvcm0oKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiBgXFxcXFxcXFwuXFxcXHBpcGVcXFxcJHtnZXRTb2NrZXROYW1lKCl9YFxuICB9XG4gIHJldHVybiBqb2luKGdldFNvY2tldERpcigpLCBgJHtwcm9jZXNzLnBpZH0uc29ja2ApXG59XG5cbi8qKlxuICogR2V0IGFsbCBzb2NrZXQgcGF0aHMgaW5jbHVkaW5nIFBJRC1iYXNlZCBzb2NrZXRzIGluIHRoZSBkaXJlY3RvcnlcbiAqIGFuZCBsZWdhY3kgZmFsbGJhY2sgcGF0aHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFNvY2tldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgLy8gV2luZG93cyB1c2VzIG5hbWVkIHBpcGVzLCBub3QgVW5peCBzb2NrZXRzXG4gIGlmIChwbGF0Zm9ybSgpID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIFtgXFxcXFxcXFwuXFxcXHBpcGVcXFxcJHtnZXRTb2NrZXROYW1lKCl9YF1cbiAgfVxuXG4gIGNvbnN0IHBhdGhzOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IHNvY2tldERpciA9IGdldFNvY2tldERpcigpXG5cbiAgLy8gU2NhbiBmb3IgKi5zb2NrIGZpbGVzIGluIHRoZSBzb2NrZXQgZGlyZWN0b3J5XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1zeW5jLWZzIC0tIENsYXVkZUZvckNocm9tZUNvbnRleHQuZ2V0U29ja2V0UGF0aHMgKGV4dGVybmFsIEBhbnQvY2xhdWRlLWZvci1jaHJvbWUtbWNwKSByZXF1aXJlcyBhIHN5bmMgKCkgPT4gc3RyaW5nW10gY2FsbGJhY2tcbiAgICBjb25zdCBmaWxlcyA9IHJlYWRkaXJTeW5jKHNvY2tldERpcilcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGlmIChmaWxlLmVuZHNXaXRoKCcuc29jaycpKSB7XG4gICAgICAgIHBhdGhzLnB1c2goam9pbihzb2NrZXREaXIsIGZpbGUpKVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gRGlyZWN0b3J5IG1heSBub3QgZXhpc3QgeWV0XG4gIH1cblxuICAvLyBMZWdhY3kgZmFsbGJhY2sgcGF0aHNcbiAgY29uc3QgbGVnYWN5TmFtZSA9IGBjbGF1ZGUtbWNwLWJyb3dzZXItYnJpZGdlLSR7Z2V0VXNlcm5hbWUoKX1gXG4gIGNvbnN0IGxlZ2FjeVRtcGRpciA9IGpvaW4odG1wZGlyKCksIGxlZ2FjeU5hbWUpXG4gIGNvbnN0IGxlZ2FjeVRtcCA9IGAvdG1wLyR7bGVnYWN5TmFtZX1gXG5cbiAgaWYgKCFwYXRocy5pbmNsdWRlcyhsZWdhY3lUbXBkaXIpKSB7XG4gICAgcGF0aHMucHVzaChsZWdhY3lUbXBkaXIpXG4gIH1cbiAgaWYgKGxlZ2FjeVRtcGRpciAhPT0gbGVnYWN5VG1wICYmICFwYXRocy5pbmNsdWRlcyhsZWdhY3lUbXApKSB7XG4gICAgcGF0aHMucHVzaChsZWdhY3lUbXApXG4gIH1cblxuICByZXR1cm4gcGF0aHNcbn1cblxuZnVuY3Rpb24gZ2V0U29ja2V0TmFtZSgpOiBzdHJpbmcge1xuICAvLyBOT1RFOiBUaGlzIG11c3QgbWF0Y2ggdGhlIG9uZSB1c2VkIGluIHRoZSBDbGF1ZGUgaW4gQ2hyb21lIE1DUFxuICByZXR1cm4gYGNsYXVkZS1tY3AtYnJvd3Nlci1icmlkZ2UtJHtnZXRVc2VybmFtZSgpfWBcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcm5hbWUoKTogc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdXNlckluZm8oKS51c2VybmFtZSB8fCAnZGVmYXVsdCdcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlVTRVIgfHwgcHJvY2Vzcy5lbnYuVVNFUk5BTUUgfHwgJ2RlZmF1bHQnXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsWUFBWTtBQUNyQixTQUFTLFNBQVMsVUFBVSxR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QUN0QyxxQkFBcUI7QUFBQSxZQUNuQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLFVBQVUsQ0FBQyxhQUFhLFFBQVEsV0FBVztBQUFBLFVBQzNDLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFVBQ1QsVUFBVSxDQUFDLFdBQVcsdUJBQXVCLFNBQVM7QUFBQSxVQUN0RCxxQkFBcUI7QUFBQSxZQUNuQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTCxVQUFVLENBQUMsV0FBVyxnQkFBZ0I7QUFBQSxVQUN0QyxVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsVUFDL0IscUJBQXFCLENBQUMsV0FBVyxXQUFXLHNCQUFzQjtBQUFBLFFBQ3BFO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxVQUFVLENBQUMsV0FBVyxXQUFXO0FBQUEsVUFDakMsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxVQUFVLENBQUMsV0FBVyx1QkFBdUIseUJBQXlCO0FBQUEsVUFDdEUscUJBQXFCO0FBQUEsWUFDbkI7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0wsVUFBVSxDQUFDLE9BQU87QUFBQSxVQUNsQixVQUFVLENBQUMsV0FBVyxPQUFPO0FBQUEsVUFDN0IscUJBQXFCLENBQUMsV0FBVyxTQUFTLHNCQUFzQjtBQUFBLFFBQ2xFO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxVQUFVLENBQUMsa0JBQWtCLGNBQWM7QUFBQSxVQUMzQyxhQUNFO0FBQUEsVUFDRixZQUFZO0FBQUE7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHTyxJQUFNLDBCQUE2QztBQUFBLE1BQ3hEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQTRMQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGdCQUFnQixvQkFBSSxJQUFZO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicGxhdGZvcm0iXQp9Cg==
