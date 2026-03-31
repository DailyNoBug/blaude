#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/is-docker@3.0.0/node_modules/is-docker/index.js
import fs from "node:fs";
function hasDockerEnv() {
  try {
    fs.statSync("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}
function hasDockerCGroup() {
  try {
    return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return false;
  }
}
function isDocker() {
  if (isDockerCached === void 0) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }
  return isDockerCached;
}
var isDockerCached;
var init_is_docker = __esm({
  "node_modules/.pnpm/is-docker@3.0.0/node_modules/is-docker/index.js"() {
  }
});

// node_modules/.pnpm/is-inside-container@1.0.0/node_modules/is-inside-container/index.js
import fs2 from "node:fs";
function isInsideContainer() {
  if (cachedResult === void 0) {
    cachedResult = hasContainerEnv() || isDocker();
  }
  return cachedResult;
}
var cachedResult, hasContainerEnv;
var init_is_inside_container = __esm({
  "node_modules/.pnpm/is-inside-container@1.0.0/node_modules/is-inside-container/index.js"() {
    init_is_docker();
    hasContainerEnv = () => {
      try {
        fs2.statSync("/run/.containerenv");
        return true;
      } catch {
        return false;
      }
    };
  }
});

// node_modules/.pnpm/is-wsl@3.1.1/node_modules/is-wsl/index.js
import process from "node:process";
import os from "node:os";
import fs3 from "node:fs";
var isWsl, is_wsl_default;
var init_is_wsl = __esm({
  "node_modules/.pnpm/is-wsl@3.1.1/node_modules/is-wsl/index.js"() {
    init_is_inside_container();
    isWsl = () => {
      if (process.platform !== "linux") {
        return false;
      }
      if (os.release().toLowerCase().includes("microsoft")) {
        if (isInsideContainer()) {
          return false;
        }
        return true;
      }
      try {
        if (fs3.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft")) {
          return !isInsideContainer();
        }
      } catch {
      }
      if (fs3.existsSync("/proc/sys/fs/binfmt_misc/WSLInterop") || fs3.existsSync("/run/WSL")) {
        return !isInsideContainer();
      }
      return false;
    };
    is_wsl_default = process.env.__IS_WSL_TEST__ ? isWsl : isWsl();
  }
});

// node_modules/.pnpm/wsl-utils@0.1.0/node_modules/wsl-utils/index.js
import process2 from "node:process";
import fs4, { constants as fsConstants } from "node:fs/promises";
var wslDrivesMountPoint, powerShellPathFromWsl, powerShellPath;
var init_wsl_utils = __esm({
  "node_modules/.pnpm/wsl-utils@0.1.0/node_modules/wsl-utils/index.js"() {
    init_is_wsl();
    init_is_wsl();
    wslDrivesMountPoint = /* @__PURE__ */ (() => {
      const defaultMountPoint = "/mnt/";
      let mountPoint;
      return async function() {
        if (mountPoint) {
          return mountPoint;
        }
        const configFilePath = "/etc/wsl.conf";
        let isConfigFileExists = false;
        try {
          await fs4.access(configFilePath, fsConstants.F_OK);
          isConfigFileExists = true;
        } catch {
        }
        if (!isConfigFileExists) {
          return defaultMountPoint;
        }
        const configContent = await fs4.readFile(configFilePath, { encoding: "utf8" });
        const configMountPoint = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(configContent);
        if (!configMountPoint) {
          return defaultMountPoint;
        }
        mountPoint = configMountPoint.groups.mountPoint.trim();
        mountPoint = mountPoint.endsWith("/") ? mountPoint : `${mountPoint}/`;
        return mountPoint;
      };
    })();
    powerShellPathFromWsl = async () => {
      const mountPoint = await wslDrivesMountPoint();
      return `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`;
    };
    powerShellPath = async () => {
      if (is_wsl_default) {
        return powerShellPathFromWsl();
      }
      return `${process2.env.SYSTEMROOT || process2.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
    };
  }
});

// node_modules/.pnpm/define-lazy-prop@3.0.0/node_modules/define-lazy-prop/index.js
function defineLazyProperty(object, propertyName, valueGetter) {
  const define = (value) => Object.defineProperty(object, propertyName, { value, enumerable: true, writable: true });
  Object.defineProperty(object, propertyName, {
    configurable: true,
    enumerable: true,
    get() {
      const result = valueGetter();
      define(result);
      return result;
    },
    set(value) {
      define(value);
    }
  });
  return object;
}
var init_define_lazy_prop = __esm({
  "node_modules/.pnpm/define-lazy-prop@3.0.0/node_modules/define-lazy-prop/index.js"() {
  }
});

// node_modules/.pnpm/default-browser-id@5.0.1/node_modules/default-browser-id/index.js
import { promisify } from "node:util";
import process3 from "node:process";
import { execFile } from "node:child_process";
async function defaultBrowserId() {
  if (process3.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const { stdout } = await execFileAsync("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
  const match = /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout);
  const browserId = match?.groups.id ?? "com.apple.Safari";
  if (browserId === "com.apple.safari") {
    return "com.apple.Safari";
  }
  return browserId;
}
var execFileAsync;
var init_default_browser_id = __esm({
  "node_modules/.pnpm/default-browser-id@5.0.1/node_modules/default-browser-id/index.js"() {
    execFileAsync = promisify(execFile);
  }
});

// node_modules/.pnpm/run-applescript@7.1.0/node_modules/run-applescript/index.js
import process4 from "node:process";
import { promisify as promisify2 } from "node:util";
import { execFile as execFile2, execFileSync } from "node:child_process";
async function runAppleScript(script, { humanReadableOutput = true, signal } = {}) {
  if (process4.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const outputArguments = humanReadableOutput ? [] : ["-ss"];
  const execOptions = {};
  if (signal) {
    execOptions.signal = signal;
  }
  const { stdout } = await execFileAsync2("osascript", ["-e", script, outputArguments], execOptions);
  return stdout.trim();
}
var execFileAsync2;
var init_run_applescript = __esm({
  "node_modules/.pnpm/run-applescript@7.1.0/node_modules/run-applescript/index.js"() {
    execFileAsync2 = promisify2(execFile2);
  }
});

// node_modules/.pnpm/bundle-name@4.1.0/node_modules/bundle-name/index.js
async function bundleName(bundleId) {
  return runAppleScript(`tell application "Finder" to set app_path to application file id "${bundleId}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
var init_bundle_name = __esm({
  "node_modules/.pnpm/bundle-name@4.1.0/node_modules/bundle-name/index.js"() {
    init_run_applescript();
  }
});

// node_modules/.pnpm/default-browser@5.5.0/node_modules/default-browser/windows.js
import { promisify as promisify3 } from "node:util";
import { execFile as execFile3 } from "node:child_process";
async function defaultBrowser(_execFileAsync = execFileAsync3) {
  const { stdout } = await _execFileAsync("reg", [
    "QUERY",
    " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
    "/v",
    "ProgId"
  ]);
  const match = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
  if (!match) {
    throw new UnknownBrowserError(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
  }
  const { id } = match.groups;
  const dotIndex = id.lastIndexOf(".");
  const hyphenIndex = id.lastIndexOf("-");
  const baseIdByDot = dotIndex === -1 ? void 0 : id.slice(0, dotIndex);
  const baseIdByHyphen = hyphenIndex === -1 ? void 0 : id.slice(0, hyphenIndex);
  return windowsBrowserProgIds[id] ?? windowsBrowserProgIds[baseIdByDot] ?? windowsBrowserProgIds[baseIdByHyphen] ?? { name: id, id };
}
var execFileAsync3, windowsBrowserProgIds, _windowsBrowserProgIdMap, UnknownBrowserError;
var init_windows = __esm({
  "node_modules/.pnpm/default-browser@5.5.0/node_modules/default-browser/windows.js"() {
    execFileAsync3 = promisify3(execFile3);
    windowsBrowserProgIds = {
      MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" },
      // The missing `L` is correct.
      MSEdgeBHTML: { name: "Edge Beta", id: "com.microsoft.edge.beta" },
      MSEdgeDHTML: { name: "Edge Dev", id: "com.microsoft.edge.dev" },
      AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" },
      ChromeHTML: { name: "Chrome", id: "com.google.chrome" },
      ChromeBHTML: { name: "Chrome Beta", id: "com.google.chrome.beta" },
      ChromeDHTML: { name: "Chrome Dev", id: "com.google.chrome.dev" },
      ChromiumHTM: { name: "Chromium", id: "org.chromium.Chromium" },
      BraveHTML: { name: "Brave", id: "com.brave.Browser" },
      BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" },
      BraveDHTML: { name: "Brave Dev", id: "com.brave.Browser.dev" },
      BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" },
      FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" },
      OperaStable: { name: "Opera", id: "com.operasoftware.Opera" },
      VivaldiHTM: { name: "Vivaldi", id: "com.vivaldi.Vivaldi" },
      "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" }
    };
    _windowsBrowserProgIdMap = new Map(Object.entries(windowsBrowserProgIds));
    UnknownBrowserError = class extends Error {
    };
  }
});

// node_modules/.pnpm/default-browser@5.5.0/node_modules/default-browser/index.js
import { promisify as promisify4 } from "node:util";
import process5 from "node:process";
import { execFile as execFile4 } from "node:child_process";
async function defaultBrowser2() {
  if (process5.platform === "darwin") {
    const id = await defaultBrowserId();
    const name = await bundleName(id);
    return { name, id };
  }
  if (process5.platform === "linux") {
    const { stdout } = await execFileAsync4("xdg-mime", ["query", "default", "x-scheme-handler/http"]);
    const id = stdout.trim();
    const name = titleize(id.replace(/.desktop$/, "").replace("-", " "));
    return { name, id };
  }
  if (process5.platform === "win32") {
    return defaultBrowser();
  }
  throw new Error("Only macOS, Linux, and Windows are supported");
}
var execFileAsync4, titleize;
var init_default_browser = __esm({
  "node_modules/.pnpm/default-browser@5.5.0/node_modules/default-browser/index.js"() {
    init_default_browser_id();
    init_bundle_name();
    init_windows();
    init_windows();
    execFileAsync4 = promisify4(execFile4);
    titleize = (string) => string.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
  }
});

// node_modules/.pnpm/open@10.2.0/node_modules/open/index.js
import process6 from "node:process";
import { Buffer } from "node:buffer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify as promisify5 } from "node:util";
import childProcess from "node:child_process";
import fs5, { constants as fsConstants2 } from "node:fs/promises";
async function getWindowsDefaultBrowserFromWsl() {
  const powershellPath = await powerShellPath();
  const rawCommand = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`;
  const encodedCommand = Buffer.from(rawCommand, "utf16le").toString("base64");
  const { stdout } = await execFile5(
    powershellPath,
    [
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-EncodedCommand",
      encodedCommand
    ],
    { encoding: "utf8" }
  );
  const progId = stdout.trim();
  const browserMap = {
    ChromeHTML: "com.google.chrome",
    BraveHTML: "com.brave.Browser",
    MSEdgeHTM: "com.microsoft.edge",
    FirefoxURL: "org.mozilla.firefox"
  };
  return browserMap[progId] ? { id: browserMap[progId] } : {};
}
function detectArchBinary(binary) {
  if (typeof binary === "string" || Array.isArray(binary)) {
    return binary;
  }
  const { [arch]: archBinary } = binary;
  if (!archBinary) {
    throw new Error(`${arch} is not supported`);
  }
  return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
  if (wsl && is_wsl_default) {
    return detectArchBinary(wsl);
  }
  if (!platformBinary) {
    throw new Error(`${platform} is not supported`);
  }
  return detectArchBinary(platformBinary);
}
var execFile5, __dirname, localXdgOpenPath, platform, arch, pTryEach, baseOpen, open, openApp, apps, open_default;
var init_open = __esm({
  "node_modules/.pnpm/open@10.2.0/node_modules/open/index.js"() {
    init_wsl_utils();
    init_define_lazy_prop();
    init_default_browser();
    init_is_inside_container();
    execFile5 = promisify5(childProcess.execFile);
    __dirname = path.dirname(fileURLToPath(import.meta.url));
    localXdgOpenPath = path.join(__dirname, "xdg-open");
    ({ platform, arch } = process6);
    pTryEach = async (array, mapper) => {
      let latestError;
      for (const item of array) {
        try {
          return await mapper(item);
        } catch (error) {
          latestError = error;
        }
      }
      throw latestError;
    };
    baseOpen = async (options) => {
      options = {
        wait: false,
        background: false,
        newInstance: false,
        allowNonzeroExitCode: false,
        ...options
      };
      if (Array.isArray(options.app)) {
        return pTryEach(options.app, (singleApp) => baseOpen({
          ...options,
          app: singleApp
        }));
      }
      let { name: app, arguments: appArguments = [] } = options.app ?? {};
      appArguments = [...appArguments];
      if (Array.isArray(app)) {
        return pTryEach(app, (appName) => baseOpen({
          ...options,
          app: {
            name: appName,
            arguments: appArguments
          }
        }));
      }
      if (app === "browser" || app === "browserPrivate") {
        const ids = {
          "com.google.chrome": "chrome",
          "google-chrome.desktop": "chrome",
          "com.brave.Browser": "brave",
          "org.mozilla.firefox": "firefox",
          "firefox.desktop": "firefox",
          "com.microsoft.msedge": "edge",
          "com.microsoft.edge": "edge",
          "com.microsoft.edgemac": "edge",
          "microsoft-edge.desktop": "edge"
        };
        const flags = {
          chrome: "--incognito",
          brave: "--incognito",
          firefox: "--private-window",
          edge: "--inPrivate"
        };
        const browser = is_wsl_default ? await getWindowsDefaultBrowserFromWsl() : await defaultBrowser2();
        if (browser.id in ids) {
          const browserName = ids[browser.id];
          if (app === "browserPrivate") {
            appArguments.push(flags[browserName]);
          }
          return baseOpen({
            ...options,
            app: {
              name: apps[browserName],
              arguments: appArguments
            }
          });
        }
        throw new Error(`${browser.name} is not supported as a default browser`);
      }
      let command;
      const cliArguments = [];
      const childProcessOptions = {};
      if (platform === "darwin") {
        command = "open";
        if (options.wait) {
          cliArguments.push("--wait-apps");
        }
        if (options.background) {
          cliArguments.push("--background");
        }
        if (options.newInstance) {
          cliArguments.push("--new");
        }
        if (app) {
          cliArguments.push("-a", app);
        }
      } else if (platform === "win32" || is_wsl_default && !isInsideContainer() && !app) {
        command = await powerShellPath();
        cliArguments.push(
          "-NoProfile",
          "-NonInteractive",
          "-ExecutionPolicy",
          "Bypass",
          "-EncodedCommand"
        );
        if (!is_wsl_default) {
          childProcessOptions.windowsVerbatimArguments = true;
        }
        const encodedArguments = ["Start"];
        if (options.wait) {
          encodedArguments.push("-Wait");
        }
        if (app) {
          encodedArguments.push(`"\`"${app}\`""`);
          if (options.target) {
            appArguments.push(options.target);
          }
        } else if (options.target) {
          encodedArguments.push(`"${options.target}"`);
        }
        if (appArguments.length > 0) {
          appArguments = appArguments.map((argument) => `"\`"${argument}\`""`);
          encodedArguments.push("-ArgumentList", appArguments.join(","));
        }
        options.target = Buffer.from(encodedArguments.join(" "), "utf16le").toString("base64");
      } else {
        if (app) {
          command = app;
        } else {
          const isBundled = !__dirname || __dirname === "/";
          let exeLocalXdgOpen = false;
          try {
            await fs5.access(localXdgOpenPath, fsConstants2.X_OK);
            exeLocalXdgOpen = true;
          } catch {
          }
          const useSystemXdgOpen = process6.versions.electron ?? (platform === "android" || isBundled || !exeLocalXdgOpen);
          command = useSystemXdgOpen ? "xdg-open" : localXdgOpenPath;
        }
        if (appArguments.length > 0) {
          cliArguments.push(...appArguments);
        }
        if (!options.wait) {
          childProcessOptions.stdio = "ignore";
          childProcessOptions.detached = true;
        }
      }
      if (platform === "darwin" && appArguments.length > 0) {
        cliArguments.push("--args", ...appArguments);
      }
      if (options.target) {
        cliArguments.push(options.target);
      }
      const subprocess = childProcess.spawn(command, cliArguments, childProcessOptions);
      if (options.wait) {
        return new Promise((resolve, reject) => {
          subprocess.once("error", reject);
          subprocess.once("close", (exitCode) => {
            if (!options.allowNonzeroExitCode && exitCode > 0) {
              reject(new Error(`Exited with code ${exitCode}`));
              return;
            }
            resolve(subprocess);
          });
        });
      }
      subprocess.unref();
      return subprocess;
    };
    open = (target, options) => {
      if (typeof target !== "string") {
        throw new TypeError("Expected a `target`");
      }
      return baseOpen({
        ...options,
        target
      });
    };
    openApp = (name, options) => {
      if (typeof name !== "string" && !Array.isArray(name)) {
        throw new TypeError("Expected a valid `name`");
      }
      const { arguments: appArguments = [] } = options ?? {};
      if (appArguments !== void 0 && appArguments !== null && !Array.isArray(appArguments)) {
        throw new TypeError("Expected `appArguments` as Array type");
      }
      return baseOpen({
        ...options,
        app: {
          name,
          arguments: appArguments
        }
      });
    };
    apps = {};
    defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
      darwin: "google chrome",
      win32: "chrome",
      linux: ["google-chrome", "google-chrome-stable", "chromium"]
    }, {
      wsl: {
        ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
      }
    }));
    defineLazyProperty(apps, "brave", () => detectPlatformBinary({
      darwin: "brave browser",
      win32: "brave",
      linux: ["brave-browser", "brave"]
    }, {
      wsl: {
        ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
        x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
      }
    }));
    defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
      darwin: "firefox",
      win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
      linux: "firefox"
    }, {
      wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
    }));
    defineLazyProperty(apps, "edge", () => detectPlatformBinary({
      darwin: "microsoft edge",
      win32: "msedge",
      linux: ["microsoft-edge", "microsoft-edge-dev"]
    }, {
      wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
    }));
    defineLazyProperty(apps, "browser", () => "browser");
    defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
    open_default = open;
  }
});
init_open();
export {
  apps,
  open_default as default,
  openApp
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLWRvY2tlckAzLjAuMC9ub2RlX21vZHVsZXMvaXMtZG9ja2VyL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy1pbnNpZGUtY29udGFpbmVyQDEuMC4wL25vZGVfbW9kdWxlcy9pcy1pbnNpZGUtY29udGFpbmVyL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy13c2xAMy4xLjEvbm9kZV9tb2R1bGVzL2lzLXdzbC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3NsLXV0aWxzQDAuMS4wL25vZGVfbW9kdWxlcy93c2wtdXRpbHMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlZmluZS1sYXp5LXByb3BAMy4wLjAvbm9kZV9tb2R1bGVzL2RlZmluZS1sYXp5LXByb3AvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlZmF1bHQtYnJvd3Nlci1pZEA1LjAuMS9ub2RlX21vZHVsZXMvZGVmYXVsdC1icm93c2VyLWlkL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9ydW4tYXBwbGVzY3JpcHRANy4xLjAvbm9kZV9tb2R1bGVzL3J1bi1hcHBsZXNjcmlwdC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYnVuZGxlLW5hbWVANC4xLjAvbm9kZV9tb2R1bGVzL2J1bmRsZS1uYW1lL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWZhdWx0LWJyb3dzZXJANS41LjAvbm9kZV9tb2R1bGVzL2RlZmF1bHQtYnJvd3Nlci93aW5kb3dzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWZhdWx0LWJyb3dzZXJANS41LjAvbm9kZV9tb2R1bGVzL2RlZmF1bHQtYnJvd3Nlci9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vb3BlbkAxMC4yLjAvbm9kZV9tb2R1bGVzL29wZW4vaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcblxubGV0IGlzRG9ja2VyQ2FjaGVkO1xuXG5mdW5jdGlvbiBoYXNEb2NrZXJFbnYoKSB7XG5cdHRyeSB7XG5cdFx0ZnMuc3RhdFN5bmMoJy8uZG9ja2VyZW52Jyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNEb2NrZXJDR3JvdXAoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYygnL3Byb2Mvc2VsZi9jZ3JvdXAnLCAndXRmOCcpLmluY2x1ZGVzKCdkb2NrZXInKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRG9ja2VyKCkge1xuXHQvLyBUT0RPOiBVc2UgYD8/PWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxNi5cblx0aWYgKGlzRG9ja2VyQ2FjaGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRpc0RvY2tlckNhY2hlZCA9IGhhc0RvY2tlckVudigpIHx8IGhhc0RvY2tlckNHcm91cCgpO1xuXHR9XG5cblx0cmV0dXJuIGlzRG9ja2VyQ2FjaGVkO1xufVxuIiwgImltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBpc0RvY2tlciBmcm9tICdpcy1kb2NrZXInO1xuXG5sZXQgY2FjaGVkUmVzdWx0O1xuXG4vLyBQb2RtYW4gZGV0ZWN0aW9uXG5jb25zdCBoYXNDb250YWluZXJFbnYgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0ZnMuc3RhdFN5bmMoJy9ydW4vLmNvbnRhaW5lcmVudicpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSW5zaWRlQ29udGFpbmVyKCkge1xuXHQvLyBUT0RPOiBVc2UgYD8/PWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxNi5cblx0aWYgKGNhY2hlZFJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FjaGVkUmVzdWx0ID0gaGFzQ29udGFpbmVyRW52KCkgfHwgaXNEb2NrZXIoKTtcblx0fVxuXG5cdHJldHVybiBjYWNoZWRSZXN1bHQ7XG59XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBvcyBmcm9tICdub2RlOm9zJztcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBpc0luc2lkZUNvbnRhaW5lciBmcm9tICdpcy1pbnNpZGUtY29udGFpbmVyJztcblxuY29uc3QgaXNXc2wgPSAoKSA9PiB7XG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKG9zLnJlbGVhc2UoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtaWNyb3NvZnQnKSkge1xuXHRcdGlmIChpc0luc2lkZUNvbnRhaW5lcigpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0cnkge1xuXHRcdGlmIChmcy5yZWFkRmlsZVN5bmMoJy9wcm9jL3ZlcnNpb24nLCAndXRmOCcpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ21pY3Jvc29mdCcpKSB7XG5cdFx0XHRyZXR1cm4gIWlzSW5zaWRlQ29udGFpbmVyKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0Ly8gRmFsbGJhY2sgZm9yIGN1c3RvbSBrZXJuZWxzOiBjaGVjayBXU0wtc3BlY2lmaWMgcGF0aHMuXG5cdGlmIChcblx0XHRmcy5leGlzdHNTeW5jKCcvcHJvYy9zeXMvZnMvYmluZm10X21pc2MvV1NMSW50ZXJvcCcpXG5cdFx0fHwgZnMuZXhpc3RzU3luYygnL3J1bi9XU0wnKVxuXHQpIHtcblx0XHRyZXR1cm4gIWlzSW5zaWRlQ29udGFpbmVyKCk7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5fX0lTX1dTTF9URVNUX18gPyBpc1dzbCA6IGlzV3NsKCk7XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBmcywge2NvbnN0YW50cyBhcyBmc0NvbnN0YW50c30gZnJvbSAnbm9kZTpmcy9wcm9taXNlcyc7XG5pbXBvcnQgaXNXc2wgZnJvbSAnaXMtd3NsJztcblxuZXhwb3J0IGNvbnN0IHdzbERyaXZlc01vdW50UG9pbnQgPSAoKCkgPT4ge1xuXHQvLyBEZWZhdWx0IHZhbHVlIGZvciBcInJvb3RcIiBwYXJhbVxuXHQvLyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvd2luZG93cy93c2wvd3NsLWNvbmZpZ1xuXHRjb25zdCBkZWZhdWx0TW91bnRQb2ludCA9ICcvbW50Lyc7XG5cblx0bGV0IG1vdW50UG9pbnQ7XG5cblx0cmV0dXJuIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAobW91bnRQb2ludCkge1xuXHRcdFx0Ly8gUmV0dXJuIG1lbW9pemVkIG1vdW50IHBvaW50IHZhbHVlXG5cdFx0XHRyZXR1cm4gbW91bnRQb2ludDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25maWdGaWxlUGF0aCA9ICcvZXRjL3dzbC5jb25mJztcblxuXHRcdGxldCBpc0NvbmZpZ0ZpbGVFeGlzdHMgPSBmYWxzZTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgZnMuYWNjZXNzKGNvbmZpZ0ZpbGVQYXRoLCBmc0NvbnN0YW50cy5GX09LKTtcblx0XHRcdGlzQ29uZmlnRmlsZUV4aXN0cyA9IHRydWU7XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0aWYgKCFpc0NvbmZpZ0ZpbGVFeGlzdHMpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0TW91bnRQb2ludDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25maWdDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoY29uZmlnRmlsZVBhdGgsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XG5cdFx0Y29uc3QgY29uZmlnTW91bnRQb2ludCA9IC8oPzwhIy4qKXJvb3RcXHMqPVxccyooPzxtb3VudFBvaW50Pi4qKS9nLmV4ZWMoY29uZmlnQ29udGVudCk7XG5cblx0XHRpZiAoIWNvbmZpZ01vdW50UG9pbnQpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0TW91bnRQb2ludDtcblx0XHR9XG5cblx0XHRtb3VudFBvaW50ID0gY29uZmlnTW91bnRQb2ludC5ncm91cHMubW91bnRQb2ludC50cmltKCk7XG5cdFx0bW91bnRQb2ludCA9IG1vdW50UG9pbnQuZW5kc1dpdGgoJy8nKSA/IG1vdW50UG9pbnQgOiBgJHttb3VudFBvaW50fS9gO1xuXG5cdFx0cmV0dXJuIG1vdW50UG9pbnQ7XG5cdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcG93ZXJTaGVsbFBhdGhGcm9tV3NsID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBtb3VudFBvaW50ID0gYXdhaXQgd3NsRHJpdmVzTW91bnRQb2ludCgpO1xuXHRyZXR1cm4gYCR7bW91bnRQb2ludH1jL1dpbmRvd3MvU3lzdGVtMzIvV2luZG93c1Bvd2VyU2hlbGwvdjEuMC9wb3dlcnNoZWxsLmV4ZWA7XG59O1xuXG5leHBvcnQgY29uc3QgcG93ZXJTaGVsbFBhdGggPSBhc3luYyAoKSA9PiB7XG5cdGlmIChpc1dzbCkge1xuXHRcdHJldHVybiBwb3dlclNoZWxsUGF0aEZyb21Xc2woKTtcblx0fVxuXG5cdHJldHVybiBgJHtwcm9jZXNzLmVudi5TWVNURU1ST09UIHx8IHByb2Nlc3MuZW52LndpbmRpciB8fCBTdHJpbmcucmF3YEM6XFxXaW5kb3dzYH1cXFxcU3lzdGVtMzJcXFxcV2luZG93c1Bvd2VyU2hlbGxcXFxcdjEuMFxcXFxwb3dlcnNoZWxsLmV4ZWA7XG59O1xuXG5leHBvcnQge2RlZmF1bHQgYXMgaXNXc2x9IGZyb20gJ2lzLXdzbCc7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lTGF6eVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHlOYW1lLCB2YWx1ZUdldHRlcikge1xuXHRjb25zdCBkZWZpbmUgPSB2YWx1ZSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIHt2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWV9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB2YWx1ZUdldHRlcigpO1xuXHRcdFx0ZGVmaW5lKHJlc3VsdCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRkZWZpbmUodmFsdWUpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn1cbiIsICJpbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge2V4ZWNGaWxlfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuXG5jb25zdCBleGVjRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGV4ZWNGaWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVmYXVsdEJyb3dzZXJJZCgpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtYWNPUyBvbmx5Jyk7XG5cdH1cblxuXHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IGV4ZWNGaWxlQXN5bmMoJ2RlZmF1bHRzJywgWydyZWFkJywgJ2NvbS5hcHBsZS5MYXVuY2hTZXJ2aWNlcy9jb20uYXBwbGUubGF1bmNoc2VydmljZXMuc2VjdXJlJywgJ0xTSGFuZGxlcnMnXSk7XG5cblx0Ly8gYCg/IS0pYCBpcyB0byBwcmV2ZW50IG1hdGNoaW5nIGBMU0hhbmRsZXJSb2xlQWxsID0gXCItXCI7YC5cblx0Y29uc3QgbWF0Y2ggPSAvTFNIYW5kbGVyUm9sZUFsbCA9IFwiKD8hLSkoPzxpZD5bXlwiXSs/KVwiO1xccys/TFNIYW5kbGVyVVJMU2NoZW1lID0gKD86aHR0cHxodHRwcyk7Ly5leGVjKHN0ZG91dCk7XG5cblx0Y29uc3QgYnJvd3NlcklkID0gbWF0Y2g/Lmdyb3Vwcy5pZCA/PyAnY29tLmFwcGxlLlNhZmFyaSc7XG5cblx0Ly8gQ29ycmVjdCB0aGUgY2FzZSBmb3IgU2FmYXJpJ3MgYnVuZGxlIGlkZW50aWZpZXJcblx0aWYgKGJyb3dzZXJJZCA9PT0gJ2NvbS5hcHBsZS5zYWZhcmknKSB7XG5cdFx0cmV0dXJuICdjb20uYXBwbGUuU2FmYXJpJztcblx0fVxuXG5cdHJldHVybiBicm93c2VySWQ7XG59XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtleGVjRmlsZSwgZXhlY0ZpbGVTeW5jfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuXG5jb25zdCBleGVjRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGV4ZWNGaWxlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkFwcGxlU2NyaXB0KHNjcmlwdCwge2h1bWFuUmVhZGFibGVPdXRwdXQgPSB0cnVlLCBzaWduYWx9ID0ge30pIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtYWNPUyBvbmx5Jyk7XG5cdH1cblxuXHRjb25zdCBvdXRwdXRBcmd1bWVudHMgPSBodW1hblJlYWRhYmxlT3V0cHV0ID8gW10gOiBbJy1zcyddO1xuXG5cdGNvbnN0IGV4ZWNPcHRpb25zID0ge307XG5cdGlmIChzaWduYWwpIHtcblx0XHRleGVjT3B0aW9ucy5zaWduYWwgPSBzaWduYWw7XG5cdH1cblxuXHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IGV4ZWNGaWxlQXN5bmMoJ29zYXNjcmlwdCcsIFsnLWUnLCBzY3JpcHQsIG91dHB1dEFyZ3VtZW50c10sIGV4ZWNPcHRpb25zKTtcblx0cmV0dXJuIHN0ZG91dC50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5BcHBsZVNjcmlwdFN5bmMoc2NyaXB0LCB7aHVtYW5SZWFkYWJsZU91dHB1dCA9IHRydWV9ID0ge30pIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtYWNPUyBvbmx5Jyk7XG5cdH1cblxuXHRjb25zdCBvdXRwdXRBcmd1bWVudHMgPSBodW1hblJlYWRhYmxlT3V0cHV0ID8gW10gOiBbJy1zcyddO1xuXG5cdGNvbnN0IHN0ZG91dCA9IGV4ZWNGaWxlU3luYygnb3Nhc2NyaXB0JywgWyctZScsIHNjcmlwdCwgLi4ub3V0cHV0QXJndW1lbnRzXSwge1xuXHRcdGVuY29kaW5nOiAndXRmOCcsXG5cdFx0c3RkaW86IFsnaWdub3JlJywgJ3BpcGUnLCAnaWdub3JlJ10sXG5cdFx0dGltZW91dDogNTAwLFxuXHR9KTtcblxuXHRyZXR1cm4gc3Rkb3V0LnRyaW0oKTtcbn1cbiIsICJpbXBvcnQge3J1bkFwcGxlU2NyaXB0fSBmcm9tICdydW4tYXBwbGVzY3JpcHQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBidW5kbGVOYW1lKGJ1bmRsZUlkKSB7XG5cdHJldHVybiBydW5BcHBsZVNjcmlwdChgdGVsbCBhcHBsaWNhdGlvbiBcIkZpbmRlclwiIHRvIHNldCBhcHBfcGF0aCB0byBhcHBsaWNhdGlvbiBmaWxlIGlkIFwiJHtidW5kbGVJZH1cIiBhcyBzdHJpbmdcXG50ZWxsIGFwcGxpY2F0aW9uIFwiU3lzdGVtIEV2ZW50c1wiIHRvIGdldCB2YWx1ZSBvZiBwcm9wZXJ0eSBsaXN0IGl0ZW0gXCJDRkJ1bmRsZU5hbWVcIiBvZiBwcm9wZXJ0eSBsaXN0IGZpbGUgKGFwcF9wYXRoICYgXCI6Q29udGVudHM6SW5mby5wbGlzdFwiKWApO1xufVxuIiwgImltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtleGVjRmlsZX0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcblxuY29uc3QgZXhlY0ZpbGVBc3luYyA9IHByb21pc2lmeShleGVjRmlsZSk7XG5cbi8vIFRPRE86IEZpeCB0aGUgY2FzaW5nIG9mIGJ1bmRsZSBpZGVudGlmaWVycyBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuXG4vLyBXaW5kb3dzIGRvZXNuJ3QgaGF2ZSBicm93c2VyIElEcyBpbiB0aGUgc2FtZSB3YXkgbWFjT1MvTGludXggZG9lcyBzbyB3ZSBnaXZlIGZha2Vcbi8vIG9uZXMgdGhhdCBsb29rIHJlYWwgYW5kIG1hdGNoIHRoZSBtYWNPUy9MaW51eCB2ZXJzaW9ucyBmb3IgY3Jvc3MtcGxhdGZvcm0gYXBwcy5cbmNvbnN0IHdpbmRvd3NCcm93c2VyUHJvZ0lkcyA9IHtcblx0TVNFZGdlSFRNOiB7bmFtZTogJ0VkZ2UnLCBpZDogJ2NvbS5taWNyb3NvZnQuZWRnZSd9LCAvLyBUaGUgbWlzc2luZyBgTGAgaXMgY29ycmVjdC5cblx0TVNFZGdlQkhUTUw6IHtuYW1lOiAnRWRnZSBCZXRhJywgaWQ6ICdjb20ubWljcm9zb2Z0LmVkZ2UuYmV0YSd9LFxuXHRNU0VkZ2VESFRNTDoge25hbWU6ICdFZGdlIERldicsIGlkOiAnY29tLm1pY3Jvc29mdC5lZGdlLmRldid9LFxuXHRBcHBYcTBmZXZ6bWUycHlzNjJuM2UwZmJxYTdwZWFweWtyOHY6IHtuYW1lOiAnRWRnZScsIGlkOiAnY29tLm1pY3Jvc29mdC5lZGdlLm9sZCd9LFxuXHRDaHJvbWVIVE1MOiB7bmFtZTogJ0Nocm9tZScsIGlkOiAnY29tLmdvb2dsZS5jaHJvbWUnfSxcblx0Q2hyb21lQkhUTUw6IHtuYW1lOiAnQ2hyb21lIEJldGEnLCBpZDogJ2NvbS5nb29nbGUuY2hyb21lLmJldGEnfSxcblx0Q2hyb21lREhUTUw6IHtuYW1lOiAnQ2hyb21lIERldicsIGlkOiAnY29tLmdvb2dsZS5jaHJvbWUuZGV2J30sXG5cdENocm9taXVtSFRNOiB7bmFtZTogJ0Nocm9taXVtJywgaWQ6ICdvcmcuY2hyb21pdW0uQ2hyb21pdW0nfSxcblx0QnJhdmVIVE1MOiB7bmFtZTogJ0JyYXZlJywgaWQ6ICdjb20uYnJhdmUuQnJvd3Nlcid9LFxuXHRCcmF2ZUJIVE1MOiB7bmFtZTogJ0JyYXZlIEJldGEnLCBpZDogJ2NvbS5icmF2ZS5Ccm93c2VyLmJldGEnfSxcblx0QnJhdmVESFRNTDoge25hbWU6ICdCcmF2ZSBEZXYnLCBpZDogJ2NvbS5icmF2ZS5Ccm93c2VyLmRldid9LFxuXHRCcmF2ZVNTSFRNOiB7bmFtZTogJ0JyYXZlIE5pZ2h0bHknLCBpZDogJ2NvbS5icmF2ZS5Ccm93c2VyLm5pZ2h0bHknfSxcblx0RmlyZWZveFVSTDoge25hbWU6ICdGaXJlZm94JywgaWQ6ICdvcmcubW96aWxsYS5maXJlZm94J30sXG5cdE9wZXJhU3RhYmxlOiB7bmFtZTogJ09wZXJhJywgaWQ6ICdjb20ub3BlcmFzb2Z0d2FyZS5PcGVyYSd9LFxuXHRWaXZhbGRpSFRNOiB7bmFtZTogJ1ZpdmFsZGknLCBpZDogJ2NvbS52aXZhbGRpLlZpdmFsZGknfSxcblx0J0lFLkhUVFAnOiB7bmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJywgaWQ6ICdjb20ubWljcm9zb2Z0LmllJ30sXG59O1xuXG5leHBvcnQgY29uc3QgX3dpbmRvd3NCcm93c2VyUHJvZ0lkTWFwID0gbmV3IE1hcChPYmplY3QuZW50cmllcyh3aW5kb3dzQnJvd3NlclByb2dJZHMpKTtcblxuZXhwb3J0IGNsYXNzIFVua25vd25Ccm93c2VyRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0QnJvd3NlcihfZXhlY0ZpbGVBc3luYyA9IGV4ZWNGaWxlQXN5bmMpIHtcblx0Y29uc3Qge3N0ZG91dH0gPSBhd2FpdCBfZXhlY0ZpbGVBc3luYygncmVnJywgW1xuXHRcdCdRVUVSWScsXG5cdFx0JyBIS0VZX0NVUlJFTlRfVVNFUlxcXFxTb2Z0d2FyZVxcXFxNaWNyb3NvZnRcXFxcV2luZG93c1xcXFxTaGVsbFxcXFxBc3NvY2lhdGlvbnNcXFxcVXJsQXNzb2NpYXRpb25zXFxcXGh0dHBcXFxcVXNlckNob2ljZScsXG5cdFx0Jy92Jyxcblx0XHQnUHJvZ0lkJyxcblx0XSk7XG5cblx0Y29uc3QgbWF0Y2ggPSAvUHJvZ0lkXFxzKlJFR19TWlxccyooPzxpZD5cXFMrKS8uZXhlYyhzdGRvdXQpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0dGhyb3cgbmV3IFVua25vd25Ccm93c2VyRXJyb3IoYENhbm5vdCBmaW5kIFdpbmRvd3MgYnJvd3NlciBpbiBzdGRvdXQ6ICR7SlNPTi5zdHJpbmdpZnkoc3Rkb3V0KX1gKTtcblx0fVxuXG5cdGNvbnN0IHtpZH0gPSBtYXRjaC5ncm91cHM7XG5cblx0Ly8gV2luZG93cyBjYW4gYXBwZW5kIGEgaGFzaCBzdWZmaXggdG8gUHJvZ0lkcyB1c2luZyBhIGRvdCBvciBoeXBoZW5cblx0Ly8gKGUuZy4sIGBDaHJvbWVIVE1MLkFCQzEyM2AsIGBGaXJlZm94VVJMLTZGMTkzQ0NDNTY4MTQ3NzlgKS5cblx0Ly8gVHJ5IGV4YWN0IG1hdGNoIGZpcnN0LCB0aGVuIHRyeSB3aXRob3V0IHRoZSBzdWZmaXguXG5cdGNvbnN0IGRvdEluZGV4ID0gaWQubGFzdEluZGV4T2YoJy4nKTtcblx0Y29uc3QgaHlwaGVuSW5kZXggPSBpZC5sYXN0SW5kZXhPZignLScpO1xuXHRjb25zdCBiYXNlSWRCeURvdCA9IGRvdEluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcblx0Y29uc3QgYmFzZUlkQnlIeXBoZW4gPSBoeXBoZW5JbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiBpZC5zbGljZSgwLCBoeXBoZW5JbmRleCk7XG5cblx0cmV0dXJuIHdpbmRvd3NCcm93c2VyUHJvZ0lkc1tpZF0gPz8gd2luZG93c0Jyb3dzZXJQcm9nSWRzW2Jhc2VJZEJ5RG90XSA/PyB3aW5kb3dzQnJvd3NlclByb2dJZHNbYmFzZUlkQnlIeXBoZW5dID8/IHtuYW1lOiBpZCwgaWR9O1xufVxuIiwgImltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7ZXhlY0ZpbGV9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgZGVmYXVsdEJyb3dzZXJJZCBmcm9tICdkZWZhdWx0LWJyb3dzZXItaWQnO1xuaW1wb3J0IGJ1bmRsZU5hbWUgZnJvbSAnYnVuZGxlLW5hbWUnO1xuaW1wb3J0IHdpbmRvd3MgZnJvbSAnLi93aW5kb3dzLmpzJztcblxuZXhwb3J0IHtfd2luZG93c0Jyb3dzZXJQcm9nSWRNYXB9IGZyb20gJy4vd2luZG93cy5qcyc7XG5cbmNvbnN0IGV4ZWNGaWxlQXN5bmMgPSBwcm9taXNpZnkoZXhlY0ZpbGUpO1xuXG4vLyBJbmxpbmVkOiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3RpdGxlaXplL2Jsb2IvbWFpbi9pbmRleC5qc1xuY29uc3QgdGl0bGVpemUgPSBzdHJpbmcgPT4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgvKD86XnxcXHN8LSlcXFMvZywgeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0QnJvd3NlcigpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG5cdFx0Y29uc3QgaWQgPSBhd2FpdCBkZWZhdWx0QnJvd3NlcklkKCk7XG5cdFx0Y29uc3QgbmFtZSA9IGF3YWl0IGJ1bmRsZU5hbWUoaWQpO1xuXHRcdHJldHVybiB7bmFtZSwgaWR9O1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcblx0XHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IGV4ZWNGaWxlQXN5bmMoJ3hkZy1taW1lJywgWydxdWVyeScsICdkZWZhdWx0JywgJ3gtc2NoZW1lLWhhbmRsZXIvaHR0cCddKTtcblx0XHRjb25zdCBpZCA9IHN0ZG91dC50cmltKCk7XG5cdFx0Y29uc3QgbmFtZSA9IHRpdGxlaXplKGlkLnJlcGxhY2UoLy5kZXNrdG9wJC8sICcnKS5yZXBsYWNlKCctJywgJyAnKSk7XG5cdFx0cmV0dXJuIHtuYW1lLCBpZH07XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdHJldHVybiB3aW5kb3dzKCk7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoJ09ubHkgbWFjT1MsIExpbnV4LCBhbmQgV2luZG93cyBhcmUgc3VwcG9ydGVkJyk7XG59XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHtmaWxlVVJMVG9QYXRofSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBmcywge2NvbnN0YW50cyBhcyBmc0NvbnN0YW50c30gZnJvbSAnbm9kZTpmcy9wcm9taXNlcyc7XG5pbXBvcnQge2lzV3NsLCBwb3dlclNoZWxsUGF0aH0gZnJvbSAnd3NsLXV0aWxzJztcbmltcG9ydCBkZWZpbmVMYXp5UHJvcGVydHkgZnJvbSAnZGVmaW5lLWxhenktcHJvcCc7XG5pbXBvcnQgZGVmYXVsdEJyb3dzZXIgZnJvbSAnZGVmYXVsdC1icm93c2VyJztcbmltcG9ydCBpc0luc2lkZUNvbnRhaW5lciBmcm9tICdpcy1pbnNpZGUtY29udGFpbmVyJztcblxuY29uc3QgZXhlY0ZpbGUgPSBwcm9taXNpZnkoY2hpbGRQcm9jZXNzLmV4ZWNGaWxlKTtcblxuLy8gUGF0aCB0byBpbmNsdWRlZCBgeGRnLW9wZW5gLlxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5jb25zdCBsb2NhbFhkZ09wZW5QYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3hkZy1vcGVuJyk7XG5cbmNvbnN0IHtwbGF0Zm9ybSwgYXJjaH0gPSBwcm9jZXNzO1xuXG4vKipcbkdldCB0aGUgZGVmYXVsdCBicm93c2VyIG5hbWUgaW4gV2luZG93cyBmcm9tIFdTTC5cblxuQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gQnJvd3NlciBuYW1lLlxuKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdpbmRvd3NEZWZhdWx0QnJvd3NlckZyb21Xc2woKSB7XG5cdGNvbnN0IHBvd2Vyc2hlbGxQYXRoID0gYXdhaXQgcG93ZXJTaGVsbFBhdGgoKTtcblx0Y29uc3QgcmF3Q29tbWFuZCA9IFN0cmluZy5yYXdgKEdldC1JdGVtUHJvcGVydHkgLVBhdGggXCJIS0NVOlxcU29mdHdhcmVcXE1pY3Jvc29mdFxcV2luZG93c1xcU2hlbGxcXEFzc29jaWF0aW9uc1xcVXJsQXNzb2NpYXRpb25zXFxodHRwXFxVc2VyQ2hvaWNlXCIpLlByb2dJZGA7XG5cdGNvbnN0IGVuY29kZWRDb21tYW5kID0gQnVmZmVyLmZyb20ocmF3Q29tbWFuZCwgJ3V0ZjE2bGUnKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cblx0Y29uc3Qge3N0ZG91dH0gPSBhd2FpdCBleGVjRmlsZShcblx0XHRwb3dlcnNoZWxsUGF0aCxcblx0XHRbXG5cdFx0XHQnLU5vUHJvZmlsZScsXG5cdFx0XHQnLU5vbkludGVyYWN0aXZlJyxcblx0XHRcdCctRXhlY3V0aW9uUG9saWN5Jyxcblx0XHRcdCdCeXBhc3MnLFxuXHRcdFx0Jy1FbmNvZGVkQ29tbWFuZCcsXG5cdFx0XHRlbmNvZGVkQ29tbWFuZCxcblx0XHRdLFxuXHRcdHtlbmNvZGluZzogJ3V0ZjgnfSxcblx0KTtcblxuXHRjb25zdCBwcm9nSWQgPSBzdGRvdXQudHJpbSgpO1xuXG5cdC8vIE1hcCBQcm9nSWQgdG8gYnJvd3NlciBJRHNcblx0Y29uc3QgYnJvd3Nlck1hcCA9IHtcblx0XHRDaHJvbWVIVE1MOiAnY29tLmdvb2dsZS5jaHJvbWUnLFxuXHRcdEJyYXZlSFRNTDogJ2NvbS5icmF2ZS5Ccm93c2VyJyxcblx0XHRNU0VkZ2VIVE06ICdjb20ubWljcm9zb2Z0LmVkZ2UnLFxuXHRcdEZpcmVmb3hVUkw6ICdvcmcubW96aWxsYS5maXJlZm94Jyxcblx0fTtcblxuXHRyZXR1cm4gYnJvd3Nlck1hcFtwcm9nSWRdID8ge2lkOiBicm93c2VyTWFwW3Byb2dJZF19IDoge307XG59XG5cbmNvbnN0IHBUcnlFYWNoID0gYXN5bmMgKGFycmF5LCBtYXBwZXIpID0+IHtcblx0bGV0IGxhdGVzdEVycm9yO1xuXG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcnJheSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgbWFwcGVyKGl0ZW0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0bGF0ZXN0RXJyb3IgPSBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHR0aHJvdyBsYXRlc3RFcnJvcjtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5jb25zdCBiYXNlT3BlbiA9IGFzeW5jIG9wdGlvbnMgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdHdhaXQ6IGZhbHNlLFxuXHRcdGJhY2tncm91bmQ6IGZhbHNlLFxuXHRcdG5ld0luc3RhbmNlOiBmYWxzZSxcblx0XHRhbGxvd05vbnplcm9FeGl0Q29kZTogZmFsc2UsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmFwcCkpIHtcblx0XHRyZXR1cm4gcFRyeUVhY2gob3B0aW9ucy5hcHAsIHNpbmdsZUFwcCA9PiBiYXNlT3Blbih7XG5cdFx0XHQuLi5vcHRpb25zLFxuXHRcdFx0YXBwOiBzaW5nbGVBcHAsXG5cdFx0fSkpO1xuXHR9XG5cblx0bGV0IHtuYW1lOiBhcHAsIGFyZ3VtZW50czogYXBwQXJndW1lbnRzID0gW119ID0gb3B0aW9ucy5hcHAgPz8ge307XG5cdGFwcEFyZ3VtZW50cyA9IFsuLi5hcHBBcmd1bWVudHNdO1xuXG5cdGlmIChBcnJheS5pc0FycmF5KGFwcCkpIHtcblx0XHRyZXR1cm4gcFRyeUVhY2goYXBwLCBhcHBOYW1lID0+IGJhc2VPcGVuKHtcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRhcHA6IHtcblx0XHRcdFx0bmFtZTogYXBwTmFtZSxcblx0XHRcdFx0YXJndW1lbnRzOiBhcHBBcmd1bWVudHMsXG5cdFx0XHR9LFxuXHRcdH0pKTtcblx0fVxuXG5cdGlmIChhcHAgPT09ICdicm93c2VyJyB8fCBhcHAgPT09ICdicm93c2VyUHJpdmF0ZScpIHtcblx0XHQvLyBJRHMgZnJvbSBkZWZhdWx0LWJyb3dzZXIgZm9yIG1hY09TIGFuZCB3aW5kb3dzIGFyZSB0aGUgc2FtZVxuXHRcdGNvbnN0IGlkcyA9IHtcblx0XHRcdCdjb20uZ29vZ2xlLmNocm9tZSc6ICdjaHJvbWUnLFxuXHRcdFx0J2dvb2dsZS1jaHJvbWUuZGVza3RvcCc6ICdjaHJvbWUnLFxuXHRcdFx0J2NvbS5icmF2ZS5Ccm93c2VyJzogJ2JyYXZlJyxcblx0XHRcdCdvcmcubW96aWxsYS5maXJlZm94JzogJ2ZpcmVmb3gnLFxuXHRcdFx0J2ZpcmVmb3guZGVza3RvcCc6ICdmaXJlZm94Jyxcblx0XHRcdCdjb20ubWljcm9zb2Z0Lm1zZWRnZSc6ICdlZGdlJyxcblx0XHRcdCdjb20ubWljcm9zb2Z0LmVkZ2UnOiAnZWRnZScsXG5cdFx0XHQnY29tLm1pY3Jvc29mdC5lZGdlbWFjJzogJ2VkZ2UnLFxuXHRcdFx0J21pY3Jvc29mdC1lZGdlLmRlc2t0b3AnOiAnZWRnZScsXG5cdFx0fTtcblxuXHRcdC8vIEluY29nbml0byBmbGFncyBmb3IgZWFjaCBicm93c2VyIGluIGBhcHBzYC5cblx0XHRjb25zdCBmbGFncyA9IHtcblx0XHRcdGNocm9tZTogJy0taW5jb2duaXRvJyxcblx0XHRcdGJyYXZlOiAnLS1pbmNvZ25pdG8nLFxuXHRcdFx0ZmlyZWZveDogJy0tcHJpdmF0ZS13aW5kb3cnLFxuXHRcdFx0ZWRnZTogJy0taW5Qcml2YXRlJyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgYnJvd3NlciA9IGlzV3NsID8gYXdhaXQgZ2V0V2luZG93c0RlZmF1bHRCcm93c2VyRnJvbVdzbCgpIDogYXdhaXQgZGVmYXVsdEJyb3dzZXIoKTtcblx0XHRpZiAoYnJvd3Nlci5pZCBpbiBpZHMpIHtcblx0XHRcdGNvbnN0IGJyb3dzZXJOYW1lID0gaWRzW2Jyb3dzZXIuaWRdO1xuXG5cdFx0XHRpZiAoYXBwID09PSAnYnJvd3NlclByaXZhdGUnKSB7XG5cdFx0XHRcdGFwcEFyZ3VtZW50cy5wdXNoKGZsYWdzW2Jyb3dzZXJOYW1lXSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBiYXNlT3Blbih7XG5cdFx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRcdGFwcDoge1xuXHRcdFx0XHRcdG5hbWU6IGFwcHNbYnJvd3Nlck5hbWVdLFxuXHRcdFx0XHRcdGFyZ3VtZW50czogYXBwQXJndW1lbnRzLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke2Jyb3dzZXIubmFtZX0gaXMgbm90IHN1cHBvcnRlZCBhcyBhIGRlZmF1bHQgYnJvd3NlcmApO1xuXHR9XG5cblx0bGV0IGNvbW1hbmQ7XG5cdGNvbnN0IGNsaUFyZ3VtZW50cyA9IFtdO1xuXHRjb25zdCBjaGlsZFByb2Nlc3NPcHRpb25zID0ge307XG5cblx0aWYgKHBsYXRmb3JtID09PSAnZGFyd2luJykge1xuXHRcdGNvbW1hbmQgPSAnb3Blbic7XG5cblx0XHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS13YWl0LWFwcHMnKTtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG5cdFx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS1iYWNrZ3JvdW5kJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMubmV3SW5zdGFuY2UpIHtcblx0XHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctLW5ldycpO1xuXHRcdH1cblxuXHRcdGlmIChhcHApIHtcblx0XHRcdGNsaUFyZ3VtZW50cy5wdXNoKCctYScsIGFwcCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHBsYXRmb3JtID09PSAnd2luMzInIHx8IChpc1dzbCAmJiAhaXNJbnNpZGVDb250YWluZXIoKSAmJiAhYXBwKSkge1xuXHRcdGNvbW1hbmQgPSBhd2FpdCBwb3dlclNoZWxsUGF0aCgpO1xuXG5cdFx0Y2xpQXJndW1lbnRzLnB1c2goXG5cdFx0XHQnLU5vUHJvZmlsZScsXG5cdFx0XHQnLU5vbkludGVyYWN0aXZlJyxcblx0XHRcdCctRXhlY3V0aW9uUG9saWN5Jyxcblx0XHRcdCdCeXBhc3MnLFxuXHRcdFx0Jy1FbmNvZGVkQ29tbWFuZCcsXG5cdFx0KTtcblxuXHRcdGlmICghaXNXc2wpIHtcblx0XHRcdGNoaWxkUHJvY2Vzc09wdGlvbnMud2luZG93c1ZlcmJhdGltQXJndW1lbnRzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbmNvZGVkQXJndW1lbnRzID0gWydTdGFydCddO1xuXG5cdFx0aWYgKG9wdGlvbnMud2FpdCkge1xuXHRcdFx0ZW5jb2RlZEFyZ3VtZW50cy5wdXNoKCctV2FpdCcpO1xuXHRcdH1cblxuXHRcdGlmIChhcHApIHtcblx0XHRcdC8vIERvdWJsZSBxdW90ZSB3aXRoIGRvdWJsZSBxdW90ZXMgdG8gZW5zdXJlIHRoZSBpbm5lciBxdW90ZXMgYXJlIHBhc3NlZCB0aHJvdWdoLlxuXHRcdFx0Ly8gSW5uZXIgcXVvdGVzIGFyZSBkZWxpbWl0ZWQgZm9yIFBvd2VyU2hlbGwgaW50ZXJwcmV0YXRpb24gd2l0aCBiYWNrdGlja3MuXG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goYFwiXFxgXCIke2FwcH1cXGBcIlwiYCk7XG5cdFx0XHRpZiAob3B0aW9ucy50YXJnZXQpIHtcblx0XHRcdFx0YXBwQXJndW1lbnRzLnB1c2gob3B0aW9ucy50YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy50YXJnZXQpIHtcblx0XHRcdGVuY29kZWRBcmd1bWVudHMucHVzaChgXCIke29wdGlvbnMudGFyZ2V0fVwiYCk7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhcHBBcmd1bWVudHMgPSBhcHBBcmd1bWVudHMubWFwKGFyZ3VtZW50ID0+IGBcIlxcYFwiJHthcmd1bWVudH1cXGBcIlwiYCk7XG5cdFx0XHRlbmNvZGVkQXJndW1lbnRzLnB1c2goJy1Bcmd1bWVudExpc3QnLCBhcHBBcmd1bWVudHMuam9pbignLCcpKTtcblx0XHR9XG5cblx0XHQvLyBVc2luZyBCYXNlNjQtZW5jb2RlZCBjb21tYW5kLCBhY2NlcHRlZCBieSBQb3dlclNoZWxsLCB0byBhbGxvdyBzcGVjaWFsIGNoYXJhY3RlcnMuXG5cdFx0b3B0aW9ucy50YXJnZXQgPSBCdWZmZXIuZnJvbShlbmNvZGVkQXJndW1lbnRzLmpvaW4oJyAnKSwgJ3V0ZjE2bGUnKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGFwcCkge1xuXHRcdFx0Y29tbWFuZCA9IGFwcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gV2hlbiBidW5kbGVkIGJ5IFdlYnBhY2ssIHRoZXJlJ3Mgbm8gYWN0dWFsIHBhY2thZ2UgZmlsZSBwYXRoIGFuZCBubyBsb2NhbCBgeGRnLW9wZW5gLlxuXHRcdFx0Y29uc3QgaXNCdW5kbGVkID0gIV9fZGlybmFtZSB8fCBfX2Rpcm5hbWUgPT09ICcvJztcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgbG9jYWwgYHhkZy1vcGVuYCBleGlzdHMgYW5kIGlzIGV4ZWN1dGFibGUuXG5cdFx0XHRsZXQgZXhlTG9jYWxYZGdPcGVuID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBmcy5hY2Nlc3MobG9jYWxYZGdPcGVuUGF0aCwgZnNDb25zdGFudHMuWF9PSyk7XG5cdFx0XHRcdGV4ZUxvY2FsWGRnT3BlbiA9IHRydWU7XG5cdFx0XHR9IGNhdGNoIHt9XG5cblx0XHRcdGNvbnN0IHVzZVN5c3RlbVhkZ09wZW4gPSBwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uXG5cdFx0XHRcdD8/IChwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnIHx8IGlzQnVuZGxlZCB8fCAhZXhlTG9jYWxYZGdPcGVuKTtcblx0XHRcdGNvbW1hbmQgPSB1c2VTeXN0ZW1YZGdPcGVuID8gJ3hkZy1vcGVuJyA6IGxvY2FsWGRnT3BlblBhdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGFwcEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjbGlBcmd1bWVudHMucHVzaCguLi5hcHBBcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdGlmICghb3B0aW9ucy53YWl0KSB7XG5cdFx0XHQvLyBgeGRnLW9wZW5gIHdpbGwgYmxvY2sgdGhlIHByb2Nlc3MgdW5sZXNzIHN0ZGlvIGlzIGlnbm9yZWRcblx0XHRcdC8vIGFuZCBpdCdzIGRldGFjaGVkIGZyb20gdGhlIHBhcmVudCBldmVuIGlmIGl0J3MgdW5yZWYnZC5cblx0XHRcdGNoaWxkUHJvY2Vzc09wdGlvbnMuc3RkaW8gPSAnaWdub3JlJztcblx0XHRcdGNoaWxkUHJvY2Vzc09wdGlvbnMuZGV0YWNoZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGlmIChwbGF0Zm9ybSA9PT0gJ2RhcndpbicgJiYgYXBwQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRjbGlBcmd1bWVudHMucHVzaCgnLS1hcmdzJywgLi4uYXBwQXJndW1lbnRzKTtcblx0fVxuXG5cdC8vIFRoaXMgaGFzIHRvIGNvbWUgYWZ0ZXIgYC0tYXJnc2AuXG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdGNsaUFyZ3VtZW50cy5wdXNoKG9wdGlvbnMudGFyZ2V0KTtcblx0fVxuXG5cdGNvbnN0IHN1YnByb2Nlc3MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgY2xpQXJndW1lbnRzLCBjaGlsZFByb2Nlc3NPcHRpb25zKTtcblxuXHRpZiAob3B0aW9ucy53YWl0KSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHN1YnByb2Nlc3Mub25jZSgnZXJyb3InLCByZWplY3QpO1xuXG5cdFx0XHRzdWJwcm9jZXNzLm9uY2UoJ2Nsb3NlJywgZXhpdENvZGUgPT4ge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnMuYWxsb3dOb256ZXJvRXhpdENvZGUgJiYgZXhpdENvZGUgPiAwKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihgRXhpdGVkIHdpdGggY29kZSAke2V4aXRDb2RlfWApKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXNvbHZlKHN1YnByb2Nlc3MpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRzdWJwcm9jZXNzLnVucmVmKCk7XG5cblx0cmV0dXJuIHN1YnByb2Nlc3M7XG59O1xuXG5jb25zdCBvcGVuID0gKHRhcmdldCwgb3B0aW9ucykgPT4ge1xuXHRpZiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGB0YXJnZXRgJyk7XG5cdH1cblxuXHRyZXR1cm4gYmFzZU9wZW4oe1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0dGFyZ2V0LFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcGVuQXBwID0gKG5hbWUsIG9wdGlvbnMpID0+IHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheShuYW1lKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgdmFsaWQgYG5hbWVgJyk7XG5cdH1cblxuXHRjb25zdCB7YXJndW1lbnRzOiBhcHBBcmd1bWVudHMgPSBbXX0gPSBvcHRpb25zID8/IHt9O1xuXHRpZiAoYXBwQXJndW1lbnRzICE9PSB1bmRlZmluZWQgJiYgYXBwQXJndW1lbnRzICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KGFwcEFyZ3VtZW50cykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgYXBwQXJndW1lbnRzYCBhcyBBcnJheSB0eXBlJyk7XG5cdH1cblxuXHRyZXR1cm4gYmFzZU9wZW4oe1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0YXBwOiB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0YXJndW1lbnRzOiBhcHBBcmd1bWVudHMsXG5cdFx0fSxcblx0fSk7XG59O1xuXG5mdW5jdGlvbiBkZXRlY3RBcmNoQmluYXJ5KGJpbmFyeSkge1xuXHRpZiAodHlwZW9mIGJpbmFyeSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShiaW5hcnkpKSB7XG5cdFx0cmV0dXJuIGJpbmFyeTtcblx0fVxuXG5cdGNvbnN0IHtbYXJjaF06IGFyY2hCaW5hcnl9ID0gYmluYXJ5O1xuXG5cdGlmICghYXJjaEJpbmFyeSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJHthcmNofSBpcyBub3Qgc3VwcG9ydGVkYCk7XG5cdH1cblxuXHRyZXR1cm4gYXJjaEJpbmFyeTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0UGxhdGZvcm1CaW5hcnkoe1twbGF0Zm9ybV06IHBsYXRmb3JtQmluYXJ5fSwge3dzbH0pIHtcblx0aWYgKHdzbCAmJiBpc1dzbCkge1xuXHRcdHJldHVybiBkZXRlY3RBcmNoQmluYXJ5KHdzbCk7XG5cdH1cblxuXHRpZiAoIXBsYXRmb3JtQmluYXJ5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke3BsYXRmb3JtfSBpcyBub3Qgc3VwcG9ydGVkYCk7XG5cdH1cblxuXHRyZXR1cm4gZGV0ZWN0QXJjaEJpbmFyeShwbGF0Zm9ybUJpbmFyeSk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBzID0ge307XG5cbmRlZmluZUxhenlQcm9wZXJ0eShhcHBzLCAnY2hyb21lJywgKCkgPT4gZGV0ZWN0UGxhdGZvcm1CaW5hcnkoe1xuXHRkYXJ3aW46ICdnb29nbGUgY2hyb21lJyxcblx0d2luMzI6ICdjaHJvbWUnLFxuXHRsaW51eDogWydnb29nbGUtY2hyb21lJywgJ2dvb2dsZS1jaHJvbWUtc3RhYmxlJywgJ2Nocm9taXVtJ10sXG59LCB7XG5cdHdzbDoge1xuXHRcdGlhMzI6ICcvbW50L2MvUHJvZ3JhbSBGaWxlcyAoeDg2KS9Hb29nbGUvQ2hyb21lL0FwcGxpY2F0aW9uL2Nocm9tZS5leGUnLFxuXHRcdHg2NDogWycvbW50L2MvUHJvZ3JhbSBGaWxlcy9Hb29nbGUvQ2hyb21lL0FwcGxpY2F0aW9uL2Nocm9tZS5leGUnLCAnL21udC9jL1Byb2dyYW0gRmlsZXMgKHg4NikvR29vZ2xlL0Nocm9tZS9BcHBsaWNhdGlvbi9jaHJvbWUuZXhlJ10sXG5cdH0sXG59KSk7XG5cbmRlZmluZUxhenlQcm9wZXJ0eShhcHBzLCAnYnJhdmUnLCAoKSA9PiBkZXRlY3RQbGF0Zm9ybUJpbmFyeSh7XG5cdGRhcndpbjogJ2JyYXZlIGJyb3dzZXInLFxuXHR3aW4zMjogJ2JyYXZlJyxcblx0bGludXg6IFsnYnJhdmUtYnJvd3NlcicsICdicmF2ZSddLFxufSwge1xuXHR3c2w6IHtcblx0XHRpYTMyOiAnL21udC9jL1Byb2dyYW0gRmlsZXMgKHg4NikvQnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2VyL0FwcGxpY2F0aW9uL2JyYXZlLmV4ZScsXG5cdFx0eDY0OiBbJy9tbnQvYy9Qcm9ncmFtIEZpbGVzL0JyYXZlU29mdHdhcmUvQnJhdmUtQnJvd3Nlci9BcHBsaWNhdGlvbi9icmF2ZS5leGUnLCAnL21udC9jL1Byb2dyYW0gRmlsZXMgKHg4NikvQnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2VyL0FwcGxpY2F0aW9uL2JyYXZlLmV4ZSddLFxuXHR9LFxufSkpO1xuXG5kZWZpbmVMYXp5UHJvcGVydHkoYXBwcywgJ2ZpcmVmb3gnLCAoKSA9PiBkZXRlY3RQbGF0Zm9ybUJpbmFyeSh7XG5cdGRhcndpbjogJ2ZpcmVmb3gnLFxuXHR3aW4zMjogU3RyaW5nLnJhd2BDOlxcUHJvZ3JhbSBGaWxlc1xcTW96aWxsYSBGaXJlZm94XFxmaXJlZm94LmV4ZWAsXG5cdGxpbnV4OiAnZmlyZWZveCcsXG59LCB7XG5cdHdzbDogJy9tbnQvYy9Qcm9ncmFtIEZpbGVzL01vemlsbGEgRmlyZWZveC9maXJlZm94LmV4ZScsXG59KSk7XG5cbmRlZmluZUxhenlQcm9wZXJ0eShhcHBzLCAnZWRnZScsICgpID0+IGRldGVjdFBsYXRmb3JtQmluYXJ5KHtcblx0ZGFyd2luOiAnbWljcm9zb2Z0IGVkZ2UnLFxuXHR3aW4zMjogJ21zZWRnZScsXG5cdGxpbnV4OiBbJ21pY3Jvc29mdC1lZGdlJywgJ21pY3Jvc29mdC1lZGdlLWRldiddLFxufSwge1xuXHR3c2w6ICcvbW50L2MvUHJvZ3JhbSBGaWxlcyAoeDg2KS9NaWNyb3NvZnQvRWRnZS9BcHBsaWNhdGlvbi9tc2VkZ2UuZXhlJyxcbn0pKTtcblxuZGVmaW5lTGF6eVByb3BlcnR5KGFwcHMsICdicm93c2VyJywgKCkgPT4gJ2Jyb3dzZXInKTtcblxuZGVmaW5lTGF6eVByb3BlcnR5KGFwcHMsICdicm93c2VyUHJpdmF0ZScsICgpID0+ICdicm93c2VyUHJpdmF0ZScpO1xuXG5leHBvcnQgZGVmYXVsdCBvcGVuO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxPQUFPLFFBQVE7QUFJZixTQUFTLGVBQWU7QUFDdkIsTUFBSTtBQUNILE9BQUcsU0FBUyxhQUFhO0FBQ3pCLFdBQU87QUFBQSxFQUNSLFFBQVE7QUFDUCxXQUFPO0FBQUEsRUFDUjtBQUNEO0FBRUEsU0FBUyxrQkFBa0I7QUFDMUIsTUFB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V0FBVyxNQUFNLHFCQUFxQjtBQUFBLE1BQzlELFFBQVE7QUFBQSxNQUNSLE9BQU8sT0FBTztBQUFBLE1BQ2QsT0FBTztBQUFBLElBQ1IsR0FBRztBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ04sQ0FBQyxDQUFDO0FBRUYsdUJBQW1CLE1BQU0sUUFBUSxNQUFNLHFCQUFxQjtBQUFBLE1BQzNELFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU8sQ0FBQyxrQkFBa0Isb0JBQW9CO0FBQUEsSUFDL0MsR0FBRztBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ04sQ0FBQyxDQUFDO0FBRUYsdUJBQW1CLE1BQU0sV0FBVyxNQUFNLFNBQVM7QUFFbkQsdUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCO0FBRWpFLElBQU8sZUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbImZzIiwgImZzIiwgInByb2Nlc3MiLCAiZnMiLCAicHJvY2VzcyIsICJwcm9jZXNzIiwgInByb21pc2lmeSIsICJleGVjRmlsZSIsICJleGVjRmlsZUFzeW5jIiwgInByb21pc2lmeSIsICJleGVjRmlsZSIsICJleGVjRmlsZUFzeW5jIiwgInByb21pc2lmeSIsICJwcm9jZXNzIiwgImV4ZWNGaWxlIiwgImRlZmF1bHRCcm93c2VyIiwgImV4ZWNGaWxlQXN5bmMiLCAicHJvY2VzcyIsICJwcm9taXNpZnkiLCAiZnMiLCAiZnNDb25zdGFudHMiLCAiZXhlY0ZpbGUiLCAiZGVmYXVsdEJyb3dzZXIiXQp9Cg==
