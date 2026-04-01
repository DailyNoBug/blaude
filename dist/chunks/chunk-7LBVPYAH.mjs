#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  LoadingState,
  init_LoadingState
} from "./chunk-2Z7MV3UG.mjs";
import {
  flushSessionStorage,
  gracefulShutdown,
  init_gracefulShutdown,
  init_sessionStorage
} from "./chunk-OTDPNGFK.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  gte,
  init_file,
  init_semver as init_semver2,
  pathExists
} from "./chunk-NKGQGSP5.mjs";
import {
  coerce,
  init_semver
} from "./chunk-3PS62SCS.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/desktopDeepLink.ts
import { readdir } from "fs/promises";
import { join } from "path";
function isDevMode() {
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  const pathsToCheck = [process.argv[1] || "", process.execPath || ""];
  const buildDirs = [
    "/build-ant/",
    "/build-ant-native/",
    "/build-external/",
    "/build-external-native/"
  ];
  return pathsToCheck.some((p) => buildDirs.some((dir) => p.includes(dir)));
}
function buildDesktopDeepLink(sessionId) {
  const protocol = isDevMode() ? "claude-dev" : "claude";
  const url = new URL(`${protocol}://resume`);
  url.searchParams.set("session", sessionId);
  url.searchParams.set("cwd", getCwd());
  return url.toString();
}
async function isDesktopInstalled() {
  if (isDevMode()) {
    return true;
  }
  const platform = process.platform;
  if (platform === "darwin") {
    return pathExists("/Applications/Claude.app");
  } else if (platform === "linux") {
    const { code, stdout } = await execFileNoThrow("xdg-mime", [
      "query",
      "default",
      "x-scheme-handler/claude"
    ]);
    return code === 0 && stdout.trim().length > 0;
  } else if (platform === "win32") {
    const { code } = await execFileNoThrow("reg", [
      "query",
      "HKEY_CLASSES_ROOT\\claude",
      "/ve"
    ]);
    return code === 0;
  }
  return false;
}
async function getDesktopVersion() {
  const platform = process.platform;
  if (platform === "darwin") {
    const { code, stdout } = await execFileNoThrow("defaults", [
      "read",
      "/Applications/Claude.app/Contents/Info.plist",
      "CFBundleShortVersionString"
    ]);
    if (code !== 0) {
      return null;
    }
    const version = stdout.trim();
    return version.length > 0 ? version : null;
  } else if (platform === "win32") {
    const localAppData = process.env.LOCALAPPDATA;
    if (!localAppData) {
      return null;
    }
    const installDir = join(localAppData, "AnthropicClaude");
    try {
      const entries = await readdir(installDir);
      const versions = entries.filter((e) => e.startsWith("app-")).map((e) => e.slice(4)).filter((v) => coerce(v) !== null).sort((a, b) => {
        const ca = coerce(a);
        const cb = coerce(b);
        return ca.compare(cb);
      });
      return versions.length > 0 ? versions[versions.length - 1] : null;
    } catch {
      return null;
    }
  }
  return null;
}
async function getDesktopInstallStatus() {
  const installed = await isDesktopInstalled();
  if (!installed) {
    return { status: "not-installed" };
  }
  let version;
  try {
    version = await getDesktopVersion();
  } catch {
    return { status: "ready", version: "unknown" };
  }
  if (!version) {
    return { status: "ready", version: "unknown" };
  }
  const coerced = coerce(version);
  if (!coerced || !gte(coerced.version, MIN_DESKTOP_VERSION)) {
    return { status: "version-too-old", version };
  }
  return { status: "ready", version };
}
async function openDeepLink(deepLinkUrl) {
  const platform = process.platform;
  logForDebugging(`Opening deep link: ${deepLinkUrl}`);
  if (platform === "darwin") {
    if (isDevMode()) {
      const { code: code2 } = await execFileNoThrow("osascript", [
        "-e",
        `tell application "Electron" to open location "${deepLinkUrl}"`
      ]);
      return code2 === 0;
    }
    const { code } = await execFileNoThrow("open", [deepLinkUrl]);
    return code === 0;
  } else if (platform === "linux") {
    const { code } = await execFileNoThrow("xdg-open", [deepLinkUrl]);
    return code === 0;
  } else if (platform === "win32") {
    const { code } = await execFileNoThrow("cmd", [
      "/c",
      "start",
      "",
      deepLinkUrl
    ]);
    return code === 0;
  }
  return false;
}
async function openCurrentSessionInDesktop() {
  const sessionId = getSessionId();
  const installed = await isDesktopInstalled();
  if (!installed) {
    return {
      success: false,
      error: "Blaude Desktop is not installed. Install it from https://claude.ai/download"
    };
  }
  const deepLinkUrl = buildDesktopDeepLink(sessionId);
  const opened = await openDeepLink(deepLinkUrl);
  if (!opened) {
    return {
      success: false,
      error: "Failed to open Blaude Desktop. Please try opening it manually.",
      deepLinkUrl
    };
  }
  return { success: true, deepLinkUrl };
}
var MIN_DESKTOP_VERSION;
var init_desktopDeepLink = __esm({
  "src/utils/desktopDeepLink.ts"() {
    init_semver();
    init_state();
    init_cwd();
    init_debug();
    init_execFileNoThrow();
    init_file();
    init_semver2();
    MIN_DESKTOP_VERSION = "1.1.2396";
  }
});

// src/components/DesktopHandoff.tsx
function getDownloadUrl() {
  switch (process.platform) {
    case "win32":
      return "https://claude.ai/api/desktop/win32/x64/exe/latest/redirect";
    default:
      return "https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect";
  }
}
function DesktopHandoff(t0) {
  const $ = c(20);
  const {
    onDone
  } = t0;
  const [state, setState] = useState("checking");
  const [error, setError] = useState(null);
  const [downloadMessage, setDownloadMessage] = useState("");
  let t1;
  if ($[0] !== error || $[1] !== onDone || $[2] !== state) {
    t1 = (input) => {
      if (state === "error") {
        onDone(error ?? "Unknown error", {
          display: "system"
        });
        return;
      }
      if (state === "prompt-download") {
        if (input === "y" || input === "Y") {
          openBrowser(getDownloadUrl()).catch(_temp);
          onDone(`Starting download. Re-run /desktop once you\u2019ve installed the app.
Learn more at ${DESKTOP_DOCS_URL}`, {
            display: "system"
          });
        } else {
          if (input === "n" || input === "N") {
            onDone(`The desktop app is required for /desktop. Learn more at ${DESKTOP_DOCS_URL}`, {
              display: "system"
            });
          }
        }
      }
    };
    $[0] = error;
    $[1] = onDone;
    $[2] = state;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  use_input_default(t1);
  let t2;
  let t3;
  if ($[4] !== onDone) {
    t2 = () => {
      const performHandoff = async function performHandoff2() {
        setState("checking");
        const installStatus = await getDesktopInstallStatus();
        if (installStatus.status === "not-installed") {
          setDownloadMessage("Blaude Desktop is not installed.");
          setState("prompt-download");
          return;
        }
        if (installStatus.status === "version-too-old") {
          setDownloadMessage(`Blaude Desktop needs to be updated (found v${installStatus.version}, need v1.1.2396+).`);
          setState("prompt-download");
          return;
        }
        setState("flushing");
        await flushSessionStorage();
        setState("opening");
        const result = await openCurrentSessionInDesktop();
        if (!result.success) {
          setError(result.error ?? "Failed to open Blaude Desktop");
          setState("error");
          return;
        }
        setState("success");
        setTimeout(_temp2, 500, onDone);
      };
      performHandoff().catch((err) => {
        setError(errorMessage(err));
        setState("error");
      });
    };
    t3 = [onDone];
    $[4] = onDone;
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  useEffect(t2, t3);
  if (state === "error") {
    let t42;
    if ($[7] !== error) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Error: ", error);
      $[7] = error;
      $[8] = t42;
    } else {
      t42 = $[8];
    }
    let t52;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press any key to continue\u2026");
      $[9] = t52;
    } else {
      t52 = $[9];
    }
    let t62;
    if ($[10] !== t42) {
      t62 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2 }, t42, t52);
      $[10] = t42;
      $[11] = t62;
    } else {
      t62 = $[11];
    }
    return t62;
  }
  if (state === "prompt-download") {
    let t42;
    if ($[12] !== downloadMessage) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, null, downloadMessage);
      $[12] = downloadMessage;
      $[13] = t42;
    } else {
      t42 = $[13];
    }
    let t52;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Download now? (y/n)");
      $[14] = t52;
    } else {
      t52 = $[14];
    }
    let t62;
    if ($[15] !== t42) {
      t62 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2 }, t42, t52);
      $[15] = t42;
      $[16] = t62;
    } else {
      t62 = $[16];
    }
    return t62;
  }
  let t4;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = {
      checking: "Checking for Blaude Desktop\u2026",
      flushing: "Saving session\u2026",
      opening: "Opening Blaude Desktop\u2026",
      success: "Opening in Blaude Desktop\u2026"
    };
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  const messages = t4;
  const t5 = messages[state];
  let t6;
  if ($[18] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(LoadingState, { message: t5 });
    $[18] = t5;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  return t6;
}
async function _temp2(onDone_0) {
  onDone_0("Session transferred to Blaude Desktop", {
    display: "system"
  });
  await gracefulShutdown(0, "other");
}
function _temp() {
}
var DESKTOP_DOCS_URL;
var init_DesktopHandoff = __esm({
  "src/components/DesktopHandoff.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_browser();
    init_desktopDeepLink();
    init_errors();
    init_gracefulShutdown();
    init_sessionStorage();
    init_LoadingState();
    DESKTOP_DOCS_URL = "https://clau.de/desktop";
  }
});

export {
  DesktopHandoff,
  init_DesktopHandoff
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2Rlc2t0b3BEZWVwTGluay50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9EZXNrdG9wSGFuZG9mZi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlYWRkaXIgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgY29lcmNlIGFzIHNlbXZlckNvZXJjZSB9IGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4vY3dkLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4vZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgcGF0aEV4aXN0cyB9IGZyb20gJy4vZmlsZS5qcydcbmltcG9ydCB7IGd0ZSBhcyBzZW12ZXJHdGUgfSBmcm9tICcuL3NlbXZlci5qcydcblxuY29uc3QgTUlOX0RFU0tUT1BfVkVSU0lPTiA9ICcxLjEuMjM5NidcblxuZnVuY3Rpb24gaXNEZXZNb2RlKCk6IGJvb2xlYW4ge1xuICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WIGFzIHN0cmluZykgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gTG9jYWwgYnVpbGRzIGZyb20gYnVpbGQgZGlyZWN0b3JpZXMgYXJlIGRldiBtb2RlIGV2ZW4gd2l0aCBOT0RFX0VOVj1wcm9kdWN0aW9uXG4gIGNvbnN0IHBhdGhzVG9DaGVjayA9IFtwcm9jZXNzLmFyZ3ZbMV0gfHwgJycsIHByb2Nlc3MuZXhlY1BhdGggfHwgJyddXG4gIGNvbnN0IGJ1aWxkRGlycyA9IFtcbiAgICAnL2J1aWxkLWFudC8nLFxuICAgICcvYnVpbGQtYW50LW5hdGl2ZS8nLFxuICAgICcvYnVpbGQtZXh0ZXJuYWwvJyxcbiAgICAnL2J1aWxkLWV4dGVybmFsLW5hdGl2ZS8nLFxuICBdXG5cbiAgcmV0dXJuIHBhdGhzVG9DaGVjay5zb21lKHAgPT4gYnVpbGREaXJzLnNvbWUoZGlyID0+IHAuaW5jbHVkZXMoZGlyKSkpXG59XG5cbi8qKlxuICogQnVpbGRzIGEgZGVlcCBsaW5rIFVSTCBmb3IgQ2xhdWRlIERlc2t0b3AgdG8gcmVzdW1lIGEgQ0xJIHNlc3Npb24uXG4gKiBGb3JtYXQ6IGNsYXVkZTovL3Jlc3VtZT9zZXNzaW9uPXtzZXNzaW9uSWR9JmN3ZD17Y3dkfVxuICogSW4gZGV2IG1vZGU6IGNsYXVkZS1kZXY6Ly9yZXN1bWU/c2Vzc2lvbj17c2Vzc2lvbklkfSZjd2Q9e2N3ZH1cbiAqL1xuZnVuY3Rpb24gYnVpbGREZXNrdG9wRGVlcExpbmsoc2Vzc2lvbklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwcm90b2NvbCA9IGlzRGV2TW9kZSgpID8gJ2NsYXVkZS1kZXYnIDogJ2NsYXVkZSdcbiAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtwcm90b2NvbH06Ly9yZXN1bWVgKVxuICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc2Vzc2lvbicsIHNlc3Npb25JZClcbiAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2N3ZCcsIGdldEN3ZCgpKVxuICByZXR1cm4gdXJsLnRvU3RyaW5nKClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBDbGF1ZGUgRGVza3RvcCBhcHAgaXMgaW5zdGFsbGVkLlxuICogT24gbWFjT1MsIGNoZWNrcyBmb3IgL0FwcGxpY2F0aW9ucy9DbGF1ZGUuYXBwLlxuICogT24gTGludXgsIGNoZWNrcyBpZiB4ZGctb3BlbiBjYW4gaGFuZGxlIGNsYXVkZTovLyBwcm90b2NvbC5cbiAqIE9uIFdpbmRvd3MsIGNoZWNrcyBpZiB0aGUgcHJvdG9jb2wgaGFuZGxlciBleGlzdHMuXG4gKiBJbiBkZXYgbW9kZSwgYWx3YXlzIHJldHVybnMgdHJ1ZSAoYXNzdW1lcyBkZXYgRGVza3RvcCBpcyBydW5uaW5nKS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaXNEZXNrdG9wSW5zdGFsbGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBJbiBkZXYgbW9kZSwgYXNzdW1lIHRoZSBkZXYgRGVza3RvcCBhcHAgaXMgcnVubmluZ1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtXG5cbiAgaWYgKHBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIC8vIENoZWNrIGZvciBDbGF1ZGUuYXBwIGluIC9BcHBsaWNhdGlvbnNcbiAgICByZXR1cm4gcGF0aEV4aXN0cygnL0FwcGxpY2F0aW9ucy9DbGF1ZGUuYXBwJylcbiAgfSBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2xpbnV4Jykge1xuICAgIC8vIENoZWNrIGlmIHhkZy1taW1lIGNhbiBmaW5kIGEgaGFuZGxlciBmb3IgY2xhdWRlOi8vXG4gICAgLy8gTm90ZTogeGRnLW1pbWUgcmV0dXJucyBleGl0IGNvZGUgMCBldmVuIHdpdGggbm8gaGFuZGxlciwgc28gY2hlY2sgc3Rkb3V0IHRvb1xuICAgIGNvbnN0IHsgY29kZSwgc3Rkb3V0IH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ3hkZy1taW1lJywgW1xuICAgICAgJ3F1ZXJ5JyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICd4LXNjaGVtZS1oYW5kbGVyL2NsYXVkZScsXG4gICAgXSlcbiAgICByZXR1cm4gY29kZSA9PT0gMCAmJiBzdGRvdXQudHJpbSgpLmxlbmd0aCA+IDBcbiAgfSBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIC8vIE9uIFdpbmRvd3MsIHRyeSB0byBxdWVyeSB0aGUgcmVnaXN0cnkgZm9yIHRoZSBwcm90b2NvbCBoYW5kbGVyXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ3JlZycsIFtcbiAgICAgICdxdWVyeScsXG4gICAgICAnSEtFWV9DTEFTU0VTX1JPT1RcXFxcY2xhdWRlJyxcbiAgICAgICcvdmUnLFxuICAgIF0pXG4gICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIERldGVjdCB0aGUgaW5zdGFsbGVkIENsYXVkZSBEZXNrdG9wIHZlcnNpb24uXG4gKiBPbiBtYWNPUywgcmVhZHMgQ0ZCdW5kbGVTaG9ydFZlcnNpb25TdHJpbmcgZnJvbSB0aGUgYXBwIHBsaXN0LlxuICogT24gV2luZG93cywgZmluZHMgdGhlIGhpZ2hlc3QgYXBwLVguWS5aIGRpcmVjdG9yeSBpbiB0aGUgU3F1aXJyZWwgaW5zdGFsbC5cbiAqIFJldHVybnMgbnVsbCBpZiB2ZXJzaW9uIGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXREZXNrdG9wVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtXG5cbiAgaWYgKHBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIGNvbnN0IHsgY29kZSwgc3Rkb3V0IH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2RlZmF1bHRzJywgW1xuICAgICAgJ3JlYWQnLFxuICAgICAgJy9BcHBsaWNhdGlvbnMvQ2xhdWRlLmFwcC9Db250ZW50cy9JbmZvLnBsaXN0JyxcbiAgICAgICdDRkJ1bmRsZVNob3J0VmVyc2lvblN0cmluZycsXG4gICAgXSlcbiAgICBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgdmVyc2lvbiA9IHN0ZG91dC50cmltKClcbiAgICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPiAwID8gdmVyc2lvbiA6IG51bGxcbiAgfSBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIGNvbnN0IGxvY2FsQXBwRGF0YSA9IHByb2Nlc3MuZW52LkxPQ0FMQVBQREFUQVxuICAgIGlmICghbG9jYWxBcHBEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBpbnN0YWxsRGlyID0gam9pbihsb2NhbEFwcERhdGEsICdBbnRocm9waWNDbGF1ZGUnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcmVhZGRpcihpbnN0YWxsRGlyKVxuICAgICAgY29uc3QgdmVyc2lvbnMgPSBlbnRyaWVzXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnN0YXJ0c1dpdGgoJ2FwcC0nKSlcbiAgICAgICAgLm1hcChlID0+IGUuc2xpY2UoNCkpXG4gICAgICAgIC5maWx0ZXIodiA9PiBzZW12ZXJDb2VyY2UodikgIT09IG51bGwpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2EgPSBzZW12ZXJDb2VyY2UoYSkhXG4gICAgICAgICAgY29uc3QgY2IgPSBzZW12ZXJDb2VyY2UoYikhXG4gICAgICAgICAgcmV0dXJuIGNhLmNvbXBhcmUoY2IpXG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gdmVyc2lvbnMubGVuZ3RoID4gMCA/IHZlcnNpb25zW3ZlcnNpb25zLmxlbmd0aCAtIDFdISA6IG51bGxcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IHR5cGUgRGVza3RvcEluc3RhbGxTdGF0dXMgPVxuICB8IHsgc3RhdHVzOiAnbm90LWluc3RhbGxlZCcgfVxuICB8IHsgc3RhdHVzOiAndmVyc2lvbi10b28tb2xkJzsgdmVyc2lvbjogc3RyaW5nIH1cbiAgfCB7IHN0YXR1czogJ3JlYWR5JzsgdmVyc2lvbjogc3RyaW5nIH1cblxuLyoqXG4gKiBDaGVjayBEZXNrdG9wIGluc3RhbGwgc3RhdHVzIGluY2x1ZGluZyB2ZXJzaW9uIGNvbXBhdGliaWxpdHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXNrdG9wSW5zdGFsbFN0YXR1cygpOiBQcm9taXNlPERlc2t0b3BJbnN0YWxsU3RhdHVzPiB7XG4gIGNvbnN0IGluc3RhbGxlZCA9IGF3YWl0IGlzRGVza3RvcEluc3RhbGxlZCgpXG4gIGlmICghaW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiAnbm90LWluc3RhbGxlZCcgfVxuICB9XG5cbiAgbGV0IHZlcnNpb246IHN0cmluZyB8IG51bGxcbiAgdHJ5IHtcbiAgICB2ZXJzaW9uID0gYXdhaXQgZ2V0RGVza3RvcFZlcnNpb24oKVxuICB9IGNhdGNoIHtcbiAgICAvLyBCZXN0IGVmZm9ydCBcdTIwMTQgcHJvY2VlZCB3aXRoIGhhbmRvZmYgaWYgdmVyc2lvbiBkZXRlY3Rpb24gZmFpbHNcbiAgICByZXR1cm4geyBzdGF0dXM6ICdyZWFkeScsIHZlcnNpb246ICd1bmtub3duJyB9XG4gIH1cblxuICBpZiAoIXZlcnNpb24pIHtcbiAgICAvLyBDYW4ndCBkZXRlcm1pbmUgdmVyc2lvbiBcdTIwMTQgYXNzdW1lIGl0J3MgcmVhZHkgKGRldiBtb2RlIG9yIHVua25vd24gaW5zdGFsbClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdyZWFkeScsIHZlcnNpb246ICd1bmtub3duJyB9XG4gIH1cblxuICBjb25zdCBjb2VyY2VkID0gc2VtdmVyQ29lcmNlKHZlcnNpb24pXG4gIGlmICghY29lcmNlZCB8fCAhc2VtdmVyR3RlKGNvZXJjZWQudmVyc2lvbiwgTUlOX0RFU0tUT1BfVkVSU0lPTikpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICd2ZXJzaW9uLXRvby1vbGQnLCB2ZXJzaW9uIH1cbiAgfVxuXG4gIHJldHVybiB7IHN0YXR1czogJ3JlYWR5JywgdmVyc2lvbiB9XG59XG5cbi8qKlxuICogT3BlbnMgYSBkZWVwIGxpbmsgVVJMIHVzaW5nIHRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBtZWNoYW5pc20uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbW1hbmQgc3VjY2VlZGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EZWVwTGluayhkZWVwTGlua1VybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybVxuICBsb2dGb3JEZWJ1Z2dpbmcoYE9wZW5pbmcgZGVlcCBsaW5rOiAke2RlZXBMaW5rVXJsfWApXG5cbiAgaWYgKHBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgLy8gSW4gZGV2IG1vZGUsIGBvcGVuYCBsYXVuY2hlcyBhIGJhcmUgRWxlY3Ryb24gYmluYXJ5ICh3aXRob3V0IGFwcCBjb2RlKVxuICAgICAgLy8gYmVjYXVzZSBzZXRBc0RlZmF1bHRQcm90b2NvbENsaWVudCByZWdpc3RlcnMganVzdCB0aGUgRWxlY3Ryb24gZXhlY3V0YWJsZS5cbiAgICAgIC8vIFVzZSBBcHBsZVNjcmlwdCB0byByb3V0ZSB0aGUgVVJMIHRvIHRoZSBhbHJlYWR5LXJ1bm5pbmcgRWxlY3Ryb24gYXBwLlxuICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ29zYXNjcmlwdCcsIFtcbiAgICAgICAgJy1lJyxcbiAgICAgICAgYHRlbGwgYXBwbGljYXRpb24gXCJFbGVjdHJvblwiIHRvIG9wZW4gbG9jYXRpb24gXCIke2RlZXBMaW5rVXJsfVwiYCxcbiAgICAgIF0pXG4gICAgICByZXR1cm4gY29kZSA9PT0gMFxuICAgIH1cbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnb3BlbicsIFtkZWVwTGlua1VybF0pXG4gICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgfSBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2xpbnV4Jykge1xuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCd4ZGctb3BlbicsIFtkZWVwTGlua1VybF0pXG4gICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgfSBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIC8vIE9uIFdpbmRvd3MsIHVzZSBjbWQgL2Mgc3RhcnQgdG8gb3BlbiBVUkxzXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2NtZCcsIFtcbiAgICAgICcvYycsXG4gICAgICAnc3RhcnQnLFxuICAgICAgJycsXG4gICAgICBkZWVwTGlua1VybCxcbiAgICBdKVxuICAgIHJldHVybiBjb2RlID09PSAwXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBCdWlsZCBhbmQgb3BlbiBhIGRlZXAgbGluayB0byByZXN1bWUgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpbiBDbGF1ZGUgRGVza3RvcC5cbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggc3VjY2VzcyBzdGF0dXMgYW5kIGFueSBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkN1cnJlbnRTZXNzaW9uSW5EZXNrdG9wKCk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuXG4gIGVycm9yPzogc3RyaW5nXG4gIGRlZXBMaW5rVXJsPzogc3RyaW5nXG59PiB7XG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG5cbiAgLy8gQ2hlY2sgaWYgRGVza3RvcCBpcyBpbnN0YWxsZWRcbiAgY29uc3QgaW5zdGFsbGVkID0gYXdhaXQgaXNEZXNrdG9wSW5zdGFsbGVkKClcbiAgaWYgKCFpbnN0YWxsZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjpcbiAgICAgICAgJ0JsYXVkZSBEZXNrdG9wIGlzIG5vdCBpbnN0YWxsZWQuIEluc3RhbGwgaXQgZnJvbSBodHRwczovL2NsYXVkZS5haS9kb3dubG9hZCcsXG4gICAgfVxuICB9XG5cbiAgLy8gQnVpbGQgYW5kIG9wZW4gdGhlIGRlZXAgbGlua1xuICBjb25zdCBkZWVwTGlua1VybCA9IGJ1aWxkRGVza3RvcERlZXBMaW5rKHNlc3Npb25JZClcbiAgY29uc3Qgb3BlbmVkID0gYXdhaXQgb3BlbkRlZXBMaW5rKGRlZXBMaW5rVXJsKVxuXG4gIGlmICghb3BlbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gb3BlbiBCbGF1ZGUgRGVza3RvcC4gUGxlYXNlIHRyeSBvcGVuaW5nIGl0IG1hbnVhbGx5LicsXG4gICAgICBkZWVwTGlua1VybCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkZWVwTGlua1VybCB9XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi9jb21tYW5kcy5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSByYXcgaW5wdXQgZm9yIFwiYW55IGtleVwiIGRpc21pc3MgYW5kIHkvbiBwcm9tcHRcbmltcG9ydCB7IEJveCwgVGV4dCwgdXNlSW5wdXQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQge1xuICBnZXREZXNrdG9wSW5zdGFsbFN0YXR1cyxcbiAgb3BlbkN1cnJlbnRTZXNzaW9uSW5EZXNrdG9wLFxufSBmcm9tICcuLi91dGlscy9kZXNrdG9wRGVlcExpbmsuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnLi4vdXRpbHMvZ3JhY2VmdWxTaHV0ZG93bi5qcydcbmltcG9ydCB7IGZsdXNoU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9Mb2FkaW5nU3RhdGUuanMnXG5cbmNvbnN0IERFU0tUT1BfRE9DU19VUkwgPSAnaHR0cHM6Ly9jbGF1LmRlL2Rlc2t0b3AnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb3dubG9hZFVybCgpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcbiAgICBjYXNlICd3aW4zMic6XG4gICAgICByZXR1cm4gJ2h0dHBzOi8vY2xhdWRlLmFpL2FwaS9kZXNrdG9wL3dpbjMyL3g2NC9leGUvbGF0ZXN0L3JlZGlyZWN0J1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ2h0dHBzOi8vY2xhdWRlLmFpL2FwaS9kZXNrdG9wL2Rhcndpbi91bml2ZXJzYWwvZG1nL2xhdGVzdC9yZWRpcmVjdCdcbiAgfVxufVxuXG50eXBlIERlc2t0b3BIYW5kb2ZmU3RhdGUgPVxuICB8ICdjaGVja2luZydcbiAgfCAncHJvbXB0LWRvd25sb2FkJ1xuICB8ICdmbHVzaGluZydcbiAgfCAnb3BlbmluZydcbiAgfCAnc3VjY2VzcydcbiAgfCAnZXJyb3InXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNrdG9wSGFuZG9mZih7IG9uRG9uZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8RGVza3RvcEhhbmRvZmZTdGF0ZT4oJ2NoZWNraW5nJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZG93bmxvYWRNZXNzYWdlLCBzZXREb3dubG9hZE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuICAvLyBIYW5kbGUga2V5Ym9hcmQgaW5wdXQgZm9yIGVycm9yIGFuZCBwcm9tcHQtZG93bmxvYWQgc3RhdGVzXG4gIHVzZUlucHV0KGlucHV0ID0+IHtcbiAgICBpZiAoc3RhdGUgPT09ICdlcnJvcicpIHtcbiAgICAgIG9uRG9uZShlcnJvciA/PyAnVW5rbm93biBlcnJvcicsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09ICdwcm9tcHQtZG93bmxvYWQnKSB7XG4gICAgICBpZiAoaW5wdXQgPT09ICd5JyB8fCBpbnB1dCA9PT0gJ1knKSB7XG4gICAgICAgIG9wZW5Ccm93c2VyKGdldERvd25sb2FkVXJsKCkpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgYFN0YXJ0aW5nIGRvd25sb2FkLiBSZS1ydW4gL2Rlc2t0b3Agb25jZSB5b3VcXHUyMDE5dmUgaW5zdGFsbGVkIHRoZSBhcHAuXFxuTGVhcm4gbW9yZSBhdCAke0RFU0tUT1BfRE9DU19VUkx9YCxcbiAgICAgICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09ICduJyB8fCBpbnB1dCA9PT0gJ04nKSB7XG4gICAgICAgIG9uRG9uZShcbiAgICAgICAgICBgVGhlIGRlc2t0b3AgYXBwIGlzIHJlcXVpcmVkIGZvciAvZGVza3RvcC4gTGVhcm4gbW9yZSBhdCAke0RFU0tUT1BfRE9DU19VUkx9YCxcbiAgICAgICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBwZXJmb3JtSGFuZG9mZigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIENoZWNrIERlc2t0b3AgaW5zdGFsbCBzdGF0dXNcbiAgICAgIHNldFN0YXRlKCdjaGVja2luZycpXG4gICAgICBjb25zdCBpbnN0YWxsU3RhdHVzID0gYXdhaXQgZ2V0RGVza3RvcEluc3RhbGxTdGF0dXMoKVxuXG4gICAgICBpZiAoaW5zdGFsbFN0YXR1cy5zdGF0dXMgPT09ICdub3QtaW5zdGFsbGVkJykge1xuICAgICAgICBzZXREb3dubG9hZE1lc3NhZ2UoJ0NsYXVkZSBEZXNrdG9wIGlzIG5vdCBpbnN0YWxsZWQuJylcbiAgICAgICAgc2V0U3RhdGUoJ3Byb21wdC1kb3dubG9hZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFsbFN0YXR1cy5zdGF0dXMgPT09ICd2ZXJzaW9uLXRvby1vbGQnKSB7XG4gICAgICAgIHNldERvd25sb2FkTWVzc2FnZShcbiAgICAgICAgICBgQ2xhdWRlIERlc2t0b3AgbmVlZHMgdG8gYmUgdXBkYXRlZCAoZm91bmQgdiR7aW5zdGFsbFN0YXR1cy52ZXJzaW9ufSwgbmVlZCB2MS4xLjIzOTYrKS5gLFxuICAgICAgICApXG4gICAgICAgIHNldFN0YXRlKCdwcm9tcHQtZG93bmxvYWQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gRmx1c2ggc2Vzc2lvbiBzdG9yYWdlIHRvIGVuc3VyZSB0cmFuc2NyaXB0IGlzIGZ1bGx5IHdyaXR0ZW5cbiAgICAgIHNldFN0YXRlKCdmbHVzaGluZycpXG4gICAgICBhd2FpdCBmbHVzaFNlc3Npb25TdG9yYWdlKClcblxuICAgICAgLy8gT3BlbiB0aGUgZGVlcCBsaW5rICh1c2VzIGNsYXVkZS1kZXY6Ly8gaW4gZGV2IG1vZGUpXG4gICAgICBzZXRTdGF0ZSgnb3BlbmluZycpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVuQ3VycmVudFNlc3Npb25JbkRlc2t0b3AoKVxuXG4gICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHNldEVycm9yKHJlc3VsdC5lcnJvciA/PyAnRmFpbGVkIHRvIG9wZW4gQ2xhdWRlIERlc2t0b3AnKVxuICAgICAgICBzZXRTdGF0ZSgnZXJyb3InKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU3VjY2VzcyAtIGV4aXQgdGhlIENMSVxuICAgICAgc2V0U3RhdGUoJ3N1Y2Nlc3MnKVxuXG4gICAgICAvLyBHaXZlIHRoZSB1c2VyIGEgbW9tZW50IHRvIHNlZSB0aGUgc3VjY2VzcyBtZXNzYWdlXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICBhc3luYyAob25Eb25lOiBQcm9wc1snb25Eb25lJ10pID0+IHtcbiAgICAgICAgICBvbkRvbmUoJ1Nlc3Npb24gdHJhbnNmZXJyZWQgdG8gQ2xhdWRlIERlc2t0b3AnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICAgICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigwLCAnb3RoZXInKVxuICAgICAgICB9LFxuICAgICAgICA1MDAsXG4gICAgICAgIG9uRG9uZSxcbiAgICAgIClcbiAgICB9XG5cbiAgICBwZXJmb3JtSGFuZG9mZigpLmNhdGNoKGVyciA9PiB7XG4gICAgICBzZXRFcnJvcihlcnJvck1lc3NhZ2UoZXJyKSlcbiAgICAgIHNldFN0YXRlKCdlcnJvcicpXG4gICAgfSlcbiAgfSwgW29uRG9uZV0pXG5cbiAgaWYgKHN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdYPXsyfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkVycm9yOiB7ZXJyb3J9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5QcmVzcyBhbnkga2V5IHRvIGNvbnRpbnVl4oCmPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXRlID09PSAncHJvbXB0LWRvd25sb2FkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nWD17Mn0+XG4gICAgICAgIDxUZXh0Pntkb3dubG9hZE1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICA8VGV4dD5Eb3dubG9hZCBub3c/ICh5L24pPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgbWVzc2FnZXM6IFJlY29yZDxcbiAgICBFeGNsdWRlPERlc2t0b3BIYW5kb2ZmU3RhdGUsICdlcnJvcicgfCAncHJvbXB0LWRvd25sb2FkJz4sXG4gICAgc3RyaW5nXG4gID4gPSB7XG4gICAgY2hlY2tpbmc6ICdDaGVja2luZyBmb3IgQ2xhdWRlIERlc2t0b3DigKYnLFxuICAgIGZsdXNoaW5nOiAnU2F2aW5nIHNlc3Npb27igKYnLFxuICAgIG9wZW5pbmc6ICdPcGVuaW5nIENsYXVkZSBEZXNrdG9w4oCmJyxcbiAgICBzdWNjZXNzOiAnT3BlbmluZyBpbiBDbGF1ZGUgRGVza3RvcOKApicsXG4gIH1cblxuICByZXR1cm4gPExvYWRpbmdTdGF0ZSBtZXNzYWdlPXttZXNzYWdlc1tzdGF0ZV19IC8+XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsWUFBWTtBQVdyQixTQUFTLFlBQXFCO0FBQzVCLE1BQUssUUFBUSxJQUFJLGFBQXdCLGVBQWU7QUFDdEQsV0FBTztBQUFBLEVBQ1Q7QUFHQSxRQUFNLGVBQWUsQ0FBQyxRQUFRLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxZQUFZLEVBQUU7QUFDbkUsUUFBTSxZQUFZO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBRUEsU0FBTyxhQUFhLEtBQUssT0FBSyxVQUFVLEtBQUssU0FBTyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDdEU7QUFPQSxTQUFTLHFCQUFxQixXQUEyQjtBQUN2RCxR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Ozs7O0FBZE47QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG1CQUFtQjs7OyIsCiAgIm5hbWVzIjogWyJjb2RlIiwgImluaXRfc2VtdmVyIiwgImdldERvd25sb2FkVXJsIiwgInByb2Nlc3MiLCAicGxhdGZvcm0iLCAiRGVza3RvcEhhbmRvZmYiLCAidDAiLCAiJCIsICJfYyIsICJvbkRvbmUiLCAic3RhdGUiLCAic2V0U3RhdGUiLCAidXNlU3RhdGUiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAiZG93bmxvYWRNZXNzYWdlIiwgInNldERvd25sb2FkTWVzc2FnZSIsICJ0MSIsICJpbnB1dCIsICJkaXNwbGF5IiwgIm9wZW5Ccm93c2VyIiwgImNhdGNoIiwgIl90ZW1wIiwgIkRFU0tUT1BfRE9DU19VUkwiLCAidXNlSW5wdXQiLCAidDIiLCAidDMiLCAicGVyZm9ybUhhbmRvZmYiLCAiaW5zdGFsbFN0YXR1cyIsICJnZXREZXNrdG9wSW5zdGFsbFN0YXR1cyIsICJzdGF0dXMiLCAidmVyc2lvbiIsICJmbHVzaFNlc3Npb25TdG9yYWdlIiwgInJlc3VsdCIsICJvcGVuQ3VycmVudFNlc3Npb25JbkRlc2t0b3AiLCAic3VjY2VzcyIsICJzZXRUaW1lb3V0IiwgIl90ZW1wMiIsICJlcnIiLCAiZXJyb3JNZXNzYWdlIiwgInVzZUVmZmVjdCIsICJ0NCIsICJ0NSIsICJTeW1ib2wiLCAiZm9yIiwgInQ2IiwgImNoZWNraW5nIiwgImZsdXNoaW5nIiwgIm9wZW5pbmciLCAibWVzc2FnZXMiLCAib25Eb25lXzAiLCAiZ3JhY2VmdWxTaHV0ZG93biJdCn0K
