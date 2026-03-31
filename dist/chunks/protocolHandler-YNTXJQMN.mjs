#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  readLastFetchTime
} from "./chunk-F5HOUA4C.mjs";
import {
  filterExistingPaths,
  getKnownPathsForRepo
} from "./chunk-4DNJSG2V.mjs";
import {
  MACOS_BUNDLE_ID,
  init_parseDeepLink,
  init_registerProtocol,
  parseDeepLink
} from "./chunk-DO3KZGYG.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  getGlobalConfig,
  init_config2 as init_config
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
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import {
  init_which,
  which
} from "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
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

// src/utils/deepLink/protocolHandler.ts
init_debug();
import { homedir } from "os";
init_slowOperations();
init_parseDeepLink();
init_registerProtocol();

// src/utils/deepLink/terminalLauncher.ts
init_config();
init_debug();
init_execFileNoThrow();
init_which();
import { spawn } from "child_process";
import { basename } from "path";
var MACOS_TERMINALS = [
  { name: "iTerm2", bundleId: "com.googlecode.iterm2", app: "iTerm" },
  { name: "Ghostty", bundleId: "com.mitchellh.ghostty", app: "Ghostty" },
  { name: "Kitty", bundleId: "net.kovidgoyal.kitty", app: "kitty" },
  { name: "Alacritty", bundleId: "org.alacritty", app: "Alacritty" },
  { name: "WezTerm", bundleId: "com.github.wez.wezterm", app: "WezTerm" },
  {
    name: "Terminal.app",
    bundleId: "com.apple.Terminal",
    app: "Terminal"
  }
];
var LINUX_TERMINALS = [
  "ghostty",
  "kitty",
  "alacritty",
  "wezterm",
  "gnome-terminal",
  "konsole",
  "xfce4-terminal",
  "mate-terminal",
  "tilix",
  "xterm"
];
async function detectMacosTerminal() {
  const stored = getGlobalConfig().deepLinkTerminal;
  if (stored) {
    const match = MACOS_TERMINALS.find((t) => t.app === stored);
    if (match) {
      return { name: match.name, command: match.app };
    }
  }
  const termProgram = process.env.TERM_PROGRAM;
  if (termProgram) {
    const normalized = termProgram.replace(/\.app$/i, "").toLowerCase();
    const match = MACOS_TERMINALS.find(
      (t) => t.app.toLowerCase() === normalized || t.name.toLowerCase() === normalized
    );
    if (match) {
      return { name: match.name, command: match.app };
    }
  }
  for (const terminal of MACOS_TERMINALS) {
    const { code, stdout } = await execFileNoThrow(
      "mdfind",
      [`kMDItemCFBundleIdentifier == "${terminal.bundleId}"`],
      { timeout: 5e3, useCwd: false }
    );
    if (code === 0 && stdout.trim().length > 0) {
      return { name: terminal.name, command: terminal.app };
    }
  }
  for (const terminal of MACOS_TERMINALS) {
    const { code: lsCode } = await execFileNoThrow(
      "ls",
      [`/Applications/${terminal.app}.app`],
      { timeout: 1e3, useCwd: false }
    );
    if (lsCode === 0) {
      return { name: terminal.name, command: terminal.app };
    }
  }
  return { name: "Terminal.app", command: "Terminal" };
}
async function detectLinuxTerminal() {
  const termEnv = process.env.TERMINAL;
  if (termEnv) {
    const resolved = await which(termEnv);
    if (resolved) {
      return { name: basename(termEnv), command: resolved };
    }
  }
  const xte = await which("x-terminal-emulator");
  if (xte) {
    return { name: "x-terminal-emulator", command: xte };
  }
  for (const terminal of LINUX_TERMINALS) {
    const resolved = await which(terminal);
    if (resolved) {
      return { name: terminal, command: resolved };
    }
  }
  return null;
}
async function detectWindowsTerminal() {
  const wt = await which("wt.exe");
  if (wt) {
    return { name: "Windows Terminal", command: wt };
  }
  const pwsh = await which("pwsh.exe");
  if (pwsh) {
    return { name: "PowerShell", command: pwsh };
  }
  const powershell = await which("powershell.exe");
  if (powershell) {
    return { name: "PowerShell", command: powershell };
  }
  return { name: "Command Prompt", command: "cmd.exe" };
}
async function detectTerminal() {
  switch (process.platform) {
    case "darwin":
      return detectMacosTerminal();
    case "linux":
      return detectLinuxTerminal();
    case "win32":
      return detectWindowsTerminal();
    default:
      return null;
  }
}
async function launchInTerminal(claudePath, action) {
  const terminal = await detectTerminal();
  if (!terminal) {
    logForDebugging("No terminal emulator detected", { level: "error" });
    return false;
  }
  logForDebugging(
    `Launching in terminal: ${terminal.name} (${terminal.command})`
  );
  const claudeArgs = ["--deep-link-origin"];
  if (action.repo) {
    claudeArgs.push("--deep-link-repo", action.repo);
    if (action.lastFetchMs !== void 0) {
      claudeArgs.push("--deep-link-last-fetch", String(action.lastFetchMs));
    }
  }
  if (action.query) {
    claudeArgs.push("--prefill", action.query);
  }
  switch (process.platform) {
    case "darwin":
      return launchMacosTerminal(terminal, claudePath, claudeArgs, action.cwd);
    case "linux":
      return launchLinuxTerminal(terminal, claudePath, claudeArgs, action.cwd);
    case "win32":
      return launchWindowsTerminal(terminal, claudePath, claudeArgs, action.cwd);
    default:
      return false;
  }
}
async function launchMacosTerminal(terminal, claudePath, claudeArgs, cwd) {
  switch (terminal.command) {
    // --- SHELL-STRING PATHS (AppleScript has no argv interface) ---
    // User input is shell-quoted via shellQuote(). These two are the only
    // macOS paths where shellQuote() correctness is load-bearing.
    case "iTerm": {
      const shCmd = buildShellCommand(claudePath, claudeArgs, cwd);
      const script = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${appleScriptQuote(shCmd)}
  end tell
end tell`;
      const { code } = await execFileNoThrow("osascript", ["-e", script], {
        useCwd: false
      });
      if (code === 0) return true;
      break;
    }
    case "Terminal": {
      const shCmd = buildShellCommand(claudePath, claudeArgs, cwd);
      const script = `tell application "Terminal"
  do script ${appleScriptQuote(shCmd)}
  activate
end tell`;
      const { code } = await execFileNoThrow("osascript", ["-e", script], {
        useCwd: false
      });
      return code === 0;
    }
    // --- PURE ARGV PATHS (no shell, no shellQuote) ---
    // open -na <App> --args <argv> → app receives argv verbatim →
    // terminal's native --working-directory + -e exec the command directly.
    case "Ghostty": {
      const args = [
        "-na",
        terminal.command,
        "--args",
        "--window-save-state=never"
      ];
      if (cwd) args.push(`--working-directory=${cwd}`);
      args.push("-e", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0) return true;
      break;
    }
    case "Alacritty": {
      const args = ["-na", terminal.command, "--args"];
      if (cwd) args.push("--working-directory", cwd);
      args.push("-e", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0) return true;
      break;
    }
    case "kitty": {
      const args = ["-na", terminal.command, "--args"];
      if (cwd) args.push("--directory", cwd);
      args.push(claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0) return true;
      break;
    }
    case "WezTerm": {
      const args = ["-na", terminal.command, "--args", "start"];
      if (cwd) args.push("--cwd", cwd);
      args.push("--", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0) return true;
      break;
    }
  }
  logForDebugging(
    `Failed to launch ${terminal.name}, falling back to Terminal.app`
  );
  return launchMacosTerminal(
    { name: "Terminal.app", command: "Terminal" },
    claudePath,
    claudeArgs,
    cwd
  );
}
async function launchLinuxTerminal(terminal, claudePath, claudeArgs, cwd) {
  let args;
  let spawnCwd;
  switch (terminal.name) {
    case "gnome-terminal":
      args = cwd ? [`--working-directory=${cwd}`, "--"] : ["--"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "konsole":
      args = cwd ? ["--workdir", cwd, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "kitty":
      args = cwd ? ["--directory", cwd] : [];
      args.push(claudePath, ...claudeArgs);
      break;
    case "wezterm":
      args = cwd ? ["start", "--cwd", cwd, "--"] : ["start", "--"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "alacritty":
      args = cwd ? ["--working-directory", cwd, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "ghostty":
      args = cwd ? [`--working-directory=${cwd}`, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      args = cwd ? [`--working-directory=${cwd}`, "-x"] : ["-x"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "tilix":
      args = cwd ? [`--working-directory=${cwd}`, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    default:
      args = ["-e", claudePath, ...claudeArgs];
      spawnCwd = cwd;
      break;
  }
  return spawnDetached(terminal.command, args, { cwd: spawnCwd });
}
async function launchWindowsTerminal(terminal, claudePath, claudeArgs, cwd) {
  const args = [];
  switch (terminal.name) {
    // --- PURE ARGV PATH ---
    case "Windows Terminal":
      if (cwd) args.push("-d", cwd);
      args.push("--", claudePath, ...claudeArgs);
      break;
    // --- SHELL-STRING PATHS ---
    // PowerShell -Command and cmd /k take a command string. No argv exec
    // mode that also keeps the session interactive after claude exits.
    // User input is escaped per-shell; correctness of that escaping is
    // load-bearing here.
    case "PowerShell": {
      const cdCmd = cwd ? `Set-Location ${psQuote(cwd)}; ` : "";
      args.push(
        "-NoExit",
        "-Command",
        `${cdCmd}& ${psQuote(claudePath)} ${claudeArgs.map(psQuote).join(" ")}`
      );
      break;
    }
    default: {
      const cdCmd = cwd ? `cd /d ${cmdQuote(cwd)} && ` : "";
      args.push(
        "/k",
        `${cdCmd}${cmdQuote(claudePath)} ${claudeArgs.map((a) => cmdQuote(a)).join(" ")}`
      );
      break;
    }
  }
  return spawnDetached(terminal.command, args, {
    windowsVerbatimArguments: terminal.name === "Command Prompt"
  });
}
function spawnDetached(command, args, opts = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      detached: true,
      stdio: "ignore",
      cwd: opts.cwd,
      windowsVerbatimArguments: opts.windowsVerbatimArguments
    });
    child.once("error", (err) => {
      logForDebugging(`Failed to spawn ${command}: ${err.message}`, {
        level: "error"
      });
      void resolve(false);
    });
    child.once("spawn", () => {
      child.unref();
      void resolve(true);
    });
  });
}
function buildShellCommand(claudePath, claudeArgs, cwd) {
  const cdPrefix = cwd ? `cd ${shellQuote(cwd)} && ` : "";
  return `${cdPrefix}${[claudePath, ...claudeArgs].map(shellQuote).join(" ")}`;
}
function shellQuote(s) {
  return `'${s.replace(/'/g, "'\\''")}'`;
}
function appleScriptQuote(s) {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function psQuote(s) {
  return `'${s.replace(/'/g, "''")}'`;
}
function cmdQuote(arg) {
  const stripped = arg.replace(/"/g, "").replace(/%/g, "%%");
  const escaped = stripped.replace(/(\\+)$/, "$1$1");
  return `"${escaped}"`;
}

// src/utils/deepLink/protocolHandler.ts
async function handleDeepLinkUri(uri) {
  logForDebugging(`Handling deep link URI: ${uri}`);
  let action;
  try {
    action = parseDeepLink(uri);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Deep link error: ${message}`);
    return 1;
  }
  logForDebugging(`Parsed deep link action: ${jsonStringify(action)}`);
  const { cwd, resolvedRepo } = await resolveCwd(action);
  const lastFetch = resolvedRepo ? await readLastFetchTime(cwd) : void 0;
  const launched = await launchInTerminal(process.execPath, {
    query: action.query,
    cwd,
    repo: resolvedRepo,
    lastFetchMs: lastFetch?.getTime()
  });
  if (!launched) {
    console.error(
      "Failed to open a terminal. Make sure a supported terminal emulator is installed."
    );
    return 1;
  }
  return 0;
}
async function handleUrlSchemeLaunch() {
  if (process.env.__CFBundleIdentifier !== MACOS_BUNDLE_ID) {
    return null;
  }
  try {
    const { waitForUrlEvent } = await import("url-handler-napi");
    const url = waitForUrlEvent(5e3);
    if (!url) {
      return null;
    }
    return await handleDeepLinkUri(url);
  } catch {
    return null;
  }
}
async function resolveCwd(action) {
  if (action.cwd) {
    return { cwd: action.cwd };
  }
  if (action.repo) {
    const known = getKnownPathsForRepo(action.repo);
    const existing = await filterExistingPaths(known);
    if (existing[0]) {
      logForDebugging(`Resolved repo ${action.repo} \u2192 ${existing[0]}`);
      return { cwd: existing[0], resolvedRepo: action.repo };
    }
    logForDebugging(
      `No local clone found for repo ${action.repo}, falling back to home`
    );
  }
  return { cwd: homedir() };
}
export {
  handleDeepLinkUri,
  handleUrlSchemeLaunch
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2RlZXBMaW5rL3Byb3RvY29sSGFuZGxlci50cyIsICIuLi8uLi9zcmMvdXRpbHMvZGVlcExpbmsvdGVybWluYWxMYXVuY2hlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBQcm90b2NvbCBIYW5kbGVyXG4gKlxuICogRW50cnkgcG9pbnQgZm9yIGBjbGF1ZGUgLS1oYW5kbGUtdXJpIDx1cmw+YC4gV2hlbiB0aGUgT1MgaW52b2tlcyBjbGF1ZGVcbiAqIHdpdGggYSBgY2xhdWRlLWNsaTovL2AgVVJMLCB0aGlzIG1vZHVsZTpcbiAqICAgMS4gUGFyc2VzIHRoZSBVUkkgaW50byBhIHN0cnVjdHVyZWQgYWN0aW9uXG4gKiAgIDIuIERldGVjdHMgdGhlIHVzZXIncyB0ZXJtaW5hbCBlbXVsYXRvclxuICogICAzLiBPcGVucyBhIG5ldyB0ZXJtaW5hbCB3aW5kb3cgcnVubmluZyBjbGF1ZGUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgYXJnc1xuICpcbiAqIFRoaXMgcnVucyBpbiBhIGhlYWRsZXNzIGNvbnRleHQgKG5vIFRUWSkgYmVjYXVzZSB0aGUgT1MgbGF1bmNoZXMgdGhlIGJpbmFyeVxuICogZGlyZWN0bHkgXHUyMDE0IHRoZXJlIGlzIG5vIHRlcm1pbmFsIGF0dGFjaGVkLlxuICovXG5cbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHtcbiAgZmlsdGVyRXhpc3RpbmdQYXRocyxcbiAgZ2V0S25vd25QYXRoc0ZvclJlcG8sXG59IGZyb20gJy4uL2dpdGh1YlJlcG9QYXRoTWFwcGluZy5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IHJlYWRMYXN0RmV0Y2hUaW1lIH0gZnJvbSAnLi9iYW5uZXIuanMnXG5pbXBvcnQgeyBwYXJzZURlZXBMaW5rIH0gZnJvbSAnLi9wYXJzZURlZXBMaW5rLmpzJ1xuaW1wb3J0IHsgTUFDT1NfQlVORExFX0lEIH0gZnJvbSAnLi9yZWdpc3RlclByb3RvY29sLmpzJ1xuaW1wb3J0IHsgbGF1bmNoSW5UZXJtaW5hbCB9IGZyb20gJy4vdGVybWluYWxMYXVuY2hlci5qcydcblxuLyoqXG4gKiBIYW5kbGUgYW4gaW5jb21pbmcgZGVlcCBsaW5rIFVSSS5cbiAqXG4gKiBDYWxsZWQgZnJvbSB0aGUgQ0xJIGVudHJ5IHBvaW50IHdoZW4gYC0taGFuZGxlLXVyaWAgaXMgcGFzc2VkLlxuICogVGhpcyBmdW5jdGlvbiBwYXJzZXMgdGhlIFVSSSwgcmVzb2x2ZXMgdGhlIGNsYXVkZSBiaW5hcnksIGFuZFxuICogbGF1bmNoZXMgaXQgaW4gdGhlIHVzZXIncyB0ZXJtaW5hbC5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gVGhlIHJhdyBVUkkgc3RyaW5nIChlLmcuLCBcImNsYXVkZS1jbGk6Ly9wcm9tcHQ/cT1oZWxsbyt3b3JsZFwiKVxuICogQHJldHVybnMgZXhpdCBjb2RlICgwID0gc3VjY2VzcylcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlZXBMaW5rVXJpKHVyaTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgbG9nRm9yRGVidWdnaW5nKGBIYW5kbGluZyBkZWVwIGxpbmsgVVJJOiAke3VyaX1gKVxuXG4gIGxldCBhY3Rpb25cbiAgdHJ5IHtcbiAgICBhY3Rpb24gPSBwYXJzZURlZXBMaW5rKHVyaSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoYERlZXAgbGluayBlcnJvcjogJHttZXNzYWdlfWApXG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgUGFyc2VkIGRlZXAgbGluayBhY3Rpb246ICR7anNvblN0cmluZ2lmeShhY3Rpb24pfWApXG5cbiAgLy8gQWx3YXlzIHRoZSBydW5uaW5nIGV4ZWN1dGFibGUgXHUyMDE0IG5vIFBBVEggbG9va3VwLiBUaGUgT1MgbGF1bmNoZWQgdXMgdmlhXG4gIC8vIGFuIGFic29sdXRlIHBhdGggKGJ1bmRsZSBzeW1saW5rIC8gLmRlc2t0b3AgRXhlYz0gLyByZWdpc3RyeSBjb21tYW5kKVxuICAvLyBiYWtlZCBhdCByZWdpc3RyYXRpb24gdGltZSwgYW5kIHdlIHdhbnQgdGhlIHRlcm1pbmFsLWxhdW5jaGVkIENsYXVkZSB0b1xuICAvLyBiZSB0aGUgc2FtZSBiaW5hcnkuIHByb2Nlc3MuZXhlY1BhdGggaXMgdGhhdCBiaW5hcnkuXG4gIGNvbnN0IHsgY3dkLCByZXNvbHZlZFJlcG8gfSA9IGF3YWl0IHJlc29sdmVDd2QoYWN0aW9uKVxuICAvLyBSZXNvbHZlIEZFVENIX0hFQUQgYWdlIGhlcmUsIGluIHRoZSB0cmFtcG9saW5lIHByb2Nlc3MsIHNvIG1haW4udHN4XG4gIC8vIHN0YXlzIGF3YWl0LWZyZWUgXHUyMDE0IHRoZSBsYXVuY2hlZCBpbnN0YW5jZSByZWNlaXZlcyBpdCBhcyBhIHByZWNvbXB1dGVkXG4gIC8vIGZsYWcgaW5zdGVhZCBvZiBzdGF0dGluZyB0aGUgZmlsZXN5c3RlbSBvbiBpdHMgb3duIHN0YXJ0dXAgcGF0aC5cbiAgY29uc3QgbGFzdEZldGNoID0gcmVzb2x2ZWRSZXBvID8gYXdhaXQgcmVhZExhc3RGZXRjaFRpbWUoY3dkKSA6IHVuZGVmaW5lZFxuICBjb25zdCBsYXVuY2hlZCA9IGF3YWl0IGxhdW5jaEluVGVybWluYWwocHJvY2Vzcy5leGVjUGF0aCwge1xuICAgIHF1ZXJ5OiBhY3Rpb24ucXVlcnksXG4gICAgY3dkLFxuICAgIHJlcG86IHJlc29sdmVkUmVwbyxcbiAgICBsYXN0RmV0Y2hNczogbGFzdEZldGNoPy5nZXRUaW1lKCksXG4gIH0pXG4gIGlmICghbGF1bmNoZWQpIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgZXJyb3Igb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdGYWlsZWQgdG8gb3BlbiBhIHRlcm1pbmFsLiBNYWtlIHN1cmUgYSBzdXBwb3J0ZWQgdGVybWluYWwgZW11bGF0b3IgaXMgaW5zdGFsbGVkLicsXG4gICAgKVxuICAgIHJldHVybiAxXG4gIH1cblxuICByZXR1cm4gMFxufVxuXG4vKipcbiAqIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGF1ZGUgd2FzIGxhdW5jaGVkIGFzIHRoZSBhcHAgYnVuZGxlJ3MgZXhlY3V0YWJsZVxuICogYnkgbWFjT1MgKHZpYSBVUkwgc2NoZW1lKS4gVXNlcyB0aGUgTkFQSSBtb2R1bGUgdG8gcmVjZWl2ZSB0aGUgVVJMIGZyb21cbiAqIHRoZSBBcHBsZSBFdmVudCwgdGhlbiBoYW5kbGVzIGl0IG5vcm1hbGx5LlxuICpcbiAqIEByZXR1cm5zIGV4aXQgY29kZSAoMCA9IHN1Y2Nlc3MsIDEgPSBlcnJvciwgbnVsbCA9IG5vdCBhIFVSTCBsYXVuY2gpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcmxTY2hlbWVMYXVuY2goKTogUHJvbWlzZTxudW1iZXIgfCBudWxsPiB7XG4gIC8vIExhdW5jaFNlcnZpY2VzIG92ZXJ3cml0ZXMgX19DRkJ1bmRsZUlkZW50aWZpZXIgd2l0aCB0aGUgbGF1bmNoaW5nIGJ1bmRsZSdzXG4gIC8vIElELiBUaGlzIGlzIGEgcHJlY2lzZSBwb3NpdGl2ZSBzaWduYWwgXHUyMDE0IGl0J3Mgc2V0IHRvIG91ciBleGFjdCBidW5kbGUgSURcbiAgLy8gaWYgYW5kIG9ubHkgaWYgbWFjT1MgbGF1bmNoZWQgdXMgdmlhIHRoZSBVUkwgaGFuZGxlciAuYXBwIGJ1bmRsZS5cbiAgLy8gKGBvcGVuYCBmcm9tIGEgdGVybWluYWwgcGFzc2VzIHRoZSBjYWxsZXIncyBlbnYgdGhyb3VnaCwgc28gbmVnYXRpdmVcbiAgLy8gaGV1cmlzdGljcyBsaWtlICFURVJNIGRvbid0IHdvcmsgXHUyMDE0IHRoZSB0ZXJtaW5hbCdzIFRFUk0gbGVha3MgaW4uKVxuICBpZiAocHJvY2Vzcy5lbnYuX19DRkJ1bmRsZUlkZW50aWZpZXIgIT09IE1BQ09TX0JVTkRMRV9JRCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgd2FpdEZvclVybEV2ZW50IH0gPSBhd2FpdCBpbXBvcnQoJ3VybC1oYW5kbGVyLW5hcGknKVxuICAgIGNvbnN0IHVybCA9IHdhaXRGb3JVcmxFdmVudCg1MDAwKVxuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgaGFuZGxlRGVlcExpbmtVcmkodXJsKVxuICB9IGNhdGNoIHtcbiAgICAvLyBOQVBJIG1vZHVsZSBub3QgYXZhaWxhYmxlLCBvciBoYW5kbGVEZWVwTGlua1VyaSByZWplY3RlZCBcdTIwMTQgbm90IGEgVVJMIGxhdW5jaFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZXNvbHZlIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBmb3IgdGhlIGxhdW5jaGVkIENsYXVkZSBpbnN0YW5jZS5cbiAqIFByZWNlZGVuY2U6IGV4cGxpY2l0IGN3ZCA+IHJlcG8gbG9va3VwIChNUlUgY2xvbmUpID4gaG9tZS5cbiAqIEEgcmVwbyB0aGF0IGlzbid0IGNsb25lZCBsb2NhbGx5IGlzIG5vdCBhbiBlcnJvciBcdTIwMTQgZmFsbCB0aHJvdWdoIHRvIGhvbWVcbiAqIHNvIGEgd2ViIGxpbmsgcmVmZXJlbmNpbmcgYSByZXBvIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBzdGlsbCBvcGVucyBDbGF1ZGUuXG4gKlxuICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgY3dkLCBhbmQgdGhlIHJlcG8gc2x1ZyBpZiAoYW5kIG9ubHkgaWYpIHRoZSBNUlVcbiAqIGxvb2t1cCBoaXQgXHUyMDE0IHNvIHRoZSBsYXVuY2hlZCBpbnN0YW5jZSBjYW4gc2hvdyB3aGljaCBjbG9uZSB3YXMgc2VsZWN0ZWRcbiAqIGFuZCBpdHMgZ2l0IGZyZXNobmVzcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUN3ZChhY3Rpb246IHtcbiAgY3dkPzogc3RyaW5nXG4gIHJlcG8/OiBzdHJpbmdcbn0pOiBQcm9taXNlPHsgY3dkOiBzdHJpbmc7IHJlc29sdmVkUmVwbz86IHN0cmluZyB9PiB7XG4gIGlmIChhY3Rpb24uY3dkKSB7XG4gICAgcmV0dXJuIHsgY3dkOiBhY3Rpb24uY3dkIH1cbiAgfVxuICBpZiAoYWN0aW9uLnJlcG8pIHtcbiAgICBjb25zdCBrbm93biA9IGdldEtub3duUGF0aHNGb3JSZXBvKGFjdGlvbi5yZXBvKVxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZmlsdGVyRXhpc3RpbmdQYXRocyhrbm93bilcbiAgICBpZiAoZXhpc3RpbmdbMF0pIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgUmVzb2x2ZWQgcmVwbyAke2FjdGlvbi5yZXBvfSBcdTIxOTIgJHtleGlzdGluZ1swXX1gKVxuICAgICAgcmV0dXJuIHsgY3dkOiBleGlzdGluZ1swXSwgcmVzb2x2ZWRSZXBvOiBhY3Rpb24ucmVwbyB9XG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBObyBsb2NhbCBjbG9uZSBmb3VuZCBmb3IgcmVwbyAke2FjdGlvbi5yZXBvfSwgZmFsbGluZyBiYWNrIHRvIGhvbWVgLFxuICAgIClcbiAgfVxuICByZXR1cm4geyBjd2Q6IGhvbWVkaXIoKSB9XG59XG4iLCAiLyoqXG4gKiBUZXJtaW5hbCBMYXVuY2hlclxuICpcbiAqIERldGVjdHMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdGVybWluYWwgZW11bGF0b3IgYW5kIGxhdW5jaGVzIENsYXVkZSBDb2RlXG4gKiBpbnNpZGUgaXQuIFVzZWQgYnkgdGhlIGRlZXAgbGluayBwcm90b2NvbCBoYW5kbGVyIHdoZW4gaW52b2tlZCBieSB0aGUgT1NcbiAqIChpLmUuLCBub3QgYWxyZWFkeSBydW5uaW5nIGluc2lkZSBhIHRlcm1pbmFsKS5cbiAqXG4gKiBQbGF0Zm9ybSBzdXBwb3J0OlxuICogICBtYWNPUyAgXHUyMDE0IFRlcm1pbmFsLmFwcCwgaVRlcm0yLCBHaG9zdHR5LCBLaXR0eSwgQWxhY3JpdHR5LCBXZXpUZXJtXG4gKiAgIExpbnV4ICBcdTIwMTQgJFRFUk1JTkFMLCB4LXRlcm1pbmFsLWVtdWxhdG9yLCBnbm9tZS10ZXJtaW5hbCwga29uc29sZSwgZXRjLlxuICogICBXaW5kb3dzIFx1MjAxNCBXaW5kb3dzIFRlcm1pbmFsICh3dC5leGUpLCBQb3dlclNoZWxsLCBjbWQuZXhlXG4gKi9cblxuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyB3aGljaCB9IGZyb20gJy4uL3doaWNoLmpzJ1xuXG5leHBvcnQgdHlwZSBUZXJtaW5hbEluZm8gPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBjb21tYW5kOiBzdHJpbmdcbn1cblxuLy8gbWFjT1MgdGVybWluYWxzIGluIHByZWZlcmVuY2Ugb3JkZXIuXG4vLyBFYWNoIGVudHJ5OiBbZGlzcGxheSBuYW1lLCBhcHAgYnVuZGxlIG5hbWUgb3IgQ0xJIGNvbW1hbmQsIGRldGVjdGlvbiBtZXRob2RdXG5jb25zdCBNQUNPU19URVJNSU5BTFM6IEFycmF5PHtcbiAgbmFtZTogc3RyaW5nXG4gIGJ1bmRsZUlkOiBzdHJpbmdcbiAgYXBwOiBzdHJpbmdcbn0+ID0gW1xuICB7IG5hbWU6ICdpVGVybTInLCBidW5kbGVJZDogJ2NvbS5nb29nbGVjb2RlLml0ZXJtMicsIGFwcDogJ2lUZXJtJyB9LFxuICB7IG5hbWU6ICdHaG9zdHR5JywgYnVuZGxlSWQ6ICdjb20ubWl0Y2hlbGxoLmdob3N0dHknLCBhcHA6ICdHaG9zdHR5JyB9LFxuICB7IG5hbWU6ICdLaXR0eScsIGJ1bmRsZUlkOiAnbmV0LmtvdmlkZ295YWwua2l0dHknLCBhcHA6ICdraXR0eScgfSxcbiAgeyBuYW1lOiAnQWxhY3JpdHR5JywgYnVuZGxlSWQ6ICdvcmcuYWxhY3JpdHR5JywgYXBwOiAnQWxhY3JpdHR5JyB9LFxuICB7IG5hbWU6ICdXZXpUZXJtJywgYnVuZGxlSWQ6ICdjb20uZ2l0aHViLndlei53ZXp0ZXJtJywgYXBwOiAnV2V6VGVybScgfSxcbiAge1xuICAgIG5hbWU6ICdUZXJtaW5hbC5hcHAnLFxuICAgIGJ1bmRsZUlkOiAnY29tLmFwcGxlLlRlcm1pbmFsJyxcbiAgICBhcHA6ICdUZXJtaW5hbCcsXG4gIH0sXG5dXG5cbi8vIExpbnV4IHRlcm1pbmFscyBpbiBwcmVmZXJlbmNlIG9yZGVyIChjb21tYW5kIG5hbWUpXG5jb25zdCBMSU5VWF9URVJNSU5BTFMgPSBbXG4gICdnaG9zdHR5JyxcbiAgJ2tpdHR5JyxcbiAgJ2FsYWNyaXR0eScsXG4gICd3ZXp0ZXJtJyxcbiAgJ2dub21lLXRlcm1pbmFsJyxcbiAgJ2tvbnNvbGUnLFxuICAneGZjZTQtdGVybWluYWwnLFxuICAnbWF0ZS10ZXJtaW5hbCcsXG4gICd0aWxpeCcsXG4gICd4dGVybScsXG5dXG5cbi8qKlxuICogRGV0ZWN0IHRoZSB1c2VyJ3MgcHJlZmVycmVkIHRlcm1pbmFsIG9uIG1hY09TLlxuICogQ2hlY2tzIHJ1bm5pbmcgcHJvY2Vzc2VzIGZpcnN0IChtb3N0IGxpa2VseSB0byBiZSB3aGF0IHRoZSB1c2VyIHByZWZlcnMpLFxuICogdGhlbiBmYWxscyBiYWNrIHRvIGNoZWNraW5nIGluc3RhbGxlZCAuYXBwIGJ1bmRsZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRldGVjdE1hY29zVGVybWluYWwoKTogUHJvbWlzZTxUZXJtaW5hbEluZm8+IHtcbiAgLy8gU3RvcmVkIHByZWZlcmVuY2UgZnJvbSBhIHByZXZpb3VzIGludGVyYWN0aXZlIHNlc3Npb24uIFRoaXMgaXMgdGhlIG9ubHlcbiAgLy8gc2lnbmFsIHRoYXQgc3Vydml2ZXMgaW50byB0aGUgaGVhZGxlc3MgTGF1bmNoU2VydmljZXMgY29udGV4dCBcdTIwMTQgdGhlIGVudlxuICAvLyB2YXIgY2hlY2sgYmVsb3cgbmV2ZXIgaGl0cyB3aGVuIHdlJ3JlIGxhdW5jaGVkIGZyb20gYSBicm93c2VyIGxpbmsuXG4gIGNvbnN0IHN0b3JlZCA9IGdldEdsb2JhbENvbmZpZygpLmRlZXBMaW5rVGVybWluYWxcbiAgaWYgKHN0b3JlZCkge1xuICAgIGNvbnN0IG1hdGNoID0gTUFDT1NfVEVSTUlOQUxTLmZpbmQodCA9PiB0LmFwcCA9PT0gc3RvcmVkKVxuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHsgbmFtZTogbWF0Y2gubmFtZSwgY29tbWFuZDogbWF0Y2guYXBwIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayB0aGUgVEVSTV9QUk9HUkFNIGVudiB2YXIgXHUyMDE0IGlmIHNldCwgdGhlIHVzZXIgaGFzIGEgY2xlYXIgcHJlZmVyZW5jZS5cbiAgLy8gVEVSTV9QUk9HUkFNIG1heSBpbmNsdWRlIGEgLmFwcCBzdWZmaXggKGUuZy4sIFwiaVRlcm0uYXBwXCIpLCBzbyBzdHJpcCBpdC5cbiAgY29uc3QgdGVybVByb2dyYW0gPSBwcm9jZXNzLmVudi5URVJNX1BST0dSQU1cbiAgaWYgKHRlcm1Qcm9ncmFtKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRlcm1Qcm9ncmFtLnJlcGxhY2UoL1xcLmFwcCQvaSwgJycpLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBtYXRjaCA9IE1BQ09TX1RFUk1JTkFMUy5maW5kKFxuICAgICAgdCA9PlxuICAgICAgICB0LmFwcC50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkIHx8XG4gICAgICAgIHQubmFtZS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkLFxuICAgIClcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiB7IG5hbWU6IG1hdGNoLm5hbWUsIGNvbW1hbmQ6IG1hdGNoLmFwcCB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgd2hpY2ggdGVybWluYWxzIGFyZSBpbnN0YWxsZWQgYnkgbG9va2luZyBmb3IgLmFwcCBidW5kbGVzLlxuICAvLyBUcnkgbWRmaW5kIGZpcnN0IChTcG90bGlnaHQpLCBidXQgZmFsbCBiYWNrIHRvIGNoZWNraW5nIC9BcHBsaWNhdGlvbnNcbiAgLy8gZGlyZWN0bHkgc2luY2UgbWRmaW5kIGNhbiByZXR1cm4gZW1wdHkgcmVzdWx0cyBpZiBTcG90bGlnaHQgaXMgZGlzYWJsZWRcbiAgLy8gb3IgaGFzbid0IGluZGV4ZWQgdGhlIGFwcCB5ZXQuXG4gIGZvciAoY29uc3QgdGVybWluYWwgb2YgTUFDT1NfVEVSTUlOQUxTKSB7XG4gICAgY29uc3QgeyBjb2RlLCBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICAgICdtZGZpbmQnLFxuICAgICAgW2BrTURJdGVtQ0ZCdW5kbGVJZGVudGlmaWVyID09IFwiJHt0ZXJtaW5hbC5idW5kbGVJZH1cImBdLFxuICAgICAgeyB0aW1lb3V0OiA1MDAwLCB1c2VDd2Q6IGZhbHNlIH0sXG4gICAgKVxuICAgIGlmIChjb2RlID09PSAwICYmIHN0ZG91dC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHsgbmFtZTogdGVybWluYWwubmFtZSwgY29tbWFuZDogdGVybWluYWwuYXBwIH1cbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjazogY2hlY2sgL0FwcGxpY2F0aW9ucyBkaXJlY3RseSAobWRmaW5kIG1heSBub3Qgd29yayBpZlxuICAvLyBTcG90bGlnaHQgaW5kZXhpbmcgaXMgZGlzYWJsZWQgb3IgaW5jb21wbGV0ZSlcbiAgZm9yIChjb25zdCB0ZXJtaW5hbCBvZiBNQUNPU19URVJNSU5BTFMpIHtcbiAgICBjb25zdCB7IGNvZGU6IGxzQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgJ2xzJyxcbiAgICAgIFtgL0FwcGxpY2F0aW9ucy8ke3Rlcm1pbmFsLmFwcH0uYXBwYF0sXG4gICAgICB7IHRpbWVvdXQ6IDEwMDAsIHVzZUN3ZDogZmFsc2UgfSxcbiAgICApXG4gICAgaWYgKGxzQ29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgbmFtZTogdGVybWluYWwubmFtZSwgY29tbWFuZDogdGVybWluYWwuYXBwIH1cbiAgICB9XG4gIH1cblxuICAvLyBUZXJtaW5hbC5hcHAgaXMgYWx3YXlzIGF2YWlsYWJsZSBvbiBtYWNPU1xuICByZXR1cm4geyBuYW1lOiAnVGVybWluYWwuYXBwJywgY29tbWFuZDogJ1Rlcm1pbmFsJyB9XG59XG5cbi8qKlxuICogRGV0ZWN0IHRoZSB1c2VyJ3MgcHJlZmVycmVkIHRlcm1pbmFsIG9uIExpbnV4LlxuICogQ2hlY2tzICRURVJNSU5BTCwgdGhlbiB4LXRlcm1pbmFsLWVtdWxhdG9yLCB0aGVuIHdhbGtzIGEgcHJpb3JpdHkgbGlzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGV0ZWN0TGludXhUZXJtaW5hbCgpOiBQcm9taXNlPFRlcm1pbmFsSW5mbyB8IG51bGw+IHtcbiAgLy8gQ2hlY2sgJFRFUk1JTkFMIGVudiB2YXJcbiAgY29uc3QgdGVybUVudiA9IHByb2Nlc3MuZW52LlRFUk1JTkFMXG4gIGlmICh0ZXJtRW52KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBhd2FpdCB3aGljaCh0ZXJtRW52KVxuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIHsgbmFtZTogYmFzZW5hbWUodGVybUVudiksIGNvbW1hbmQ6IHJlc29sdmVkIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayB4LXRlcm1pbmFsLWVtdWxhdG9yIChEZWJpYW4vVWJ1bnR1IGFsdGVybmF0aXZlKVxuICBjb25zdCB4dGUgPSBhd2FpdCB3aGljaCgneC10ZXJtaW5hbC1lbXVsYXRvcicpXG4gIGlmICh4dGUpIHtcbiAgICByZXR1cm4geyBuYW1lOiAneC10ZXJtaW5hbC1lbXVsYXRvcicsIGNvbW1hbmQ6IHh0ZSB9XG4gIH1cblxuICAvLyBXYWxrIHRoZSBwcmlvcml0eSBsaXN0XG4gIGZvciAoY29uc3QgdGVybWluYWwgb2YgTElOVVhfVEVSTUlOQUxTKSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBhd2FpdCB3aGljaCh0ZXJtaW5hbClcbiAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiB7IG5hbWU6IHRlcm1pbmFsLCBjb21tYW5kOiByZXNvbHZlZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBEZXRlY3QgdGhlIHVzZXIncyBwcmVmZXJyZWQgdGVybWluYWwgb24gV2luZG93cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGV0ZWN0V2luZG93c1Rlcm1pbmFsKCk6IFByb21pc2U8VGVybWluYWxJbmZvPiB7XG4gIC8vIENoZWNrIGZvciBXaW5kb3dzIFRlcm1pbmFsIGZpcnN0XG4gIGNvbnN0IHd0ID0gYXdhaXQgd2hpY2goJ3d0LmV4ZScpXG4gIGlmICh3dCkge1xuICAgIHJldHVybiB7IG5hbWU6ICdXaW5kb3dzIFRlcm1pbmFsJywgY29tbWFuZDogd3QgfVxuICB9XG5cbiAgLy8gUG93ZXJTaGVsbCA3KyAoc2VwYXJhdGUgaW5zdGFsbClcbiAgY29uc3QgcHdzaCA9IGF3YWl0IHdoaWNoKCdwd3NoLmV4ZScpXG4gIGlmIChwd3NoKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogJ1Bvd2VyU2hlbGwnLCBjb21tYW5kOiBwd3NoIH1cbiAgfVxuXG4gIC8vIFdpbmRvd3MgUG93ZXJTaGVsbCA1LjEgKGJ1aWx0IGludG8gV2luZG93cylcbiAgY29uc3QgcG93ZXJzaGVsbCA9IGF3YWl0IHdoaWNoKCdwb3dlcnNoZWxsLmV4ZScpXG4gIGlmIChwb3dlcnNoZWxsKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogJ1Bvd2VyU2hlbGwnLCBjb21tYW5kOiBwb3dlcnNoZWxsIH1cbiAgfVxuXG4gIC8vIGNtZC5leGUgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4geyBuYW1lOiAnQ29tbWFuZCBQcm9tcHQnLCBjb21tYW5kOiAnY21kLmV4ZScgfVxufVxuXG4vKipcbiAqIERldGVjdCB0aGUgdXNlcidzIHByZWZlcnJlZCB0ZXJtaW5hbCBlbXVsYXRvci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRldGVjdFRlcm1pbmFsKCk6IFByb21pc2U8VGVybWluYWxJbmZvIHwgbnVsbD4ge1xuICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcbiAgICBjYXNlICdkYXJ3aW4nOlxuICAgICAgcmV0dXJuIGRldGVjdE1hY29zVGVybWluYWwoKVxuICAgIGNhc2UgJ2xpbnV4JzpcbiAgICAgIHJldHVybiBkZXRlY3RMaW51eFRlcm1pbmFsKClcbiAgICBjYXNlICd3aW4zMic6XG4gICAgICByZXR1cm4gZGV0ZWN0V2luZG93c1Rlcm1pbmFsKClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIExhdW5jaCBDbGF1ZGUgQ29kZSBpbiB0aGUgZGV0ZWN0ZWQgdGVybWluYWwgZW11bGF0b3IuXG4gKlxuICogUHVyZSBhcmd2IHBhdGhzIChubyBzaGVsbCwgdXNlciBpbnB1dCBuZXZlciB0b3VjaGVzIGFuIGludGVycHJldGVyKTpcbiAqICAgbWFjT1MgXHUyMDE0IEdob3N0dHksIEFsYWNyaXR0eSwgS2l0dHksIFdlelRlcm0gKHZpYSBvcGVuIC1uYSAtLWFyZ3MpXG4gKiAgIExpbnV4IFx1MjAxNCBhbGwgdGVuIGluIExJTlVYX1RFUk1JTkFMU1xuICogICBXaW5kb3dzIFx1MjAxNCBXaW5kb3dzIFRlcm1pbmFsXG4gKlxuICogU2hlbGwtc3RyaW5nIHBhdGhzICh1c2VyIGlucHV0IGlzIHNoZWxsLXF1b3RlZCBhbmQgcmVsaWVkIHVwb24pOlxuICogICBtYWNPUyBcdTIwMTQgaVRlcm0yLCBUZXJtaW5hbC5hcHAgKEFwcGxlU2NyaXB0IGB3cml0ZSB0ZXh0YCAvIGBkbyBzY3JpcHRgXG4gKiAgICAgICAgICAgYXJlIGluaGVyZW50bHkgc2hlbGwtaW50ZXJwcmV0ZWQ7IG5vIGFyZ3YgaW50ZXJmYWNlIGV4aXN0cylcbiAqICAgV2luZG93cyBcdTIwMTQgUG93ZXJTaGVsbCAtQ29tbWFuZCwgY21kLmV4ZSAvayAobm8gYXJndiBleGVjIG1vZGUpXG4gKlxuICogRm9yIHB1cmUtYXJndiBwYXRoczogY2xhdWRlUGF0aCwgLS1wcmVmaWxsLCBxdWVyeSwgY3dkIHRyYXZlbCBhcyBkaXN0aW5jdFxuICogYXJndiBlbGVtZW50cyBlbmQtdG8tZW5kLiBObyBzaCAtYy4gTm8gc2hlbGxRdW90ZSgpLiBUaGUgdGVybWluYWwgZG9lc1xuICogY2hkaXIoY3dkKSBhbmQgZXhlY3ZwKGNsYXVkZSwgYXJndikuIFNwYWNlcy9xdW90ZXMvbWV0YWNoYXJhY3RlcnMgaW5cbiAqIHF1ZXJ5IG9yIGN3ZCBhcmUgcHJlc2VydmVkIGJ5IGFyZ3YgYm91bmRhcmllcyB3aXRoIHplcm8gaW50ZXJwcmV0YXRpb24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsYXVuY2hJblRlcm1pbmFsKFxuICBjbGF1ZGVQYXRoOiBzdHJpbmcsXG4gIGFjdGlvbjoge1xuICAgIHF1ZXJ5Pzogc3RyaW5nXG4gICAgY3dkPzogc3RyaW5nXG4gICAgcmVwbz86IHN0cmluZ1xuICAgIGxhc3RGZXRjaE1zPzogbnVtYmVyXG4gIH0sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgdGVybWluYWwgPSBhd2FpdCBkZXRlY3RUZXJtaW5hbCgpXG4gIGlmICghdGVybWluYWwpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ05vIHRlcm1pbmFsIGVtdWxhdG9yIGRldGVjdGVkJywgeyBsZXZlbDogJ2Vycm9yJyB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBMYXVuY2hpbmcgaW4gdGVybWluYWw6ICR7dGVybWluYWwubmFtZX0gKCR7dGVybWluYWwuY29tbWFuZH0pYCxcbiAgKVxuICBjb25zdCBjbGF1ZGVBcmdzID0gWyctLWRlZXAtbGluay1vcmlnaW4nXVxuICBpZiAoYWN0aW9uLnJlcG8pIHtcbiAgICBjbGF1ZGVBcmdzLnB1c2goJy0tZGVlcC1saW5rLXJlcG8nLCBhY3Rpb24ucmVwbylcbiAgICBpZiAoYWN0aW9uLmxhc3RGZXRjaE1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsYXVkZUFyZ3MucHVzaCgnLS1kZWVwLWxpbmstbGFzdC1mZXRjaCcsIFN0cmluZyhhY3Rpb24ubGFzdEZldGNoTXMpKVxuICAgIH1cbiAgfVxuICBpZiAoYWN0aW9uLnF1ZXJ5KSB7XG4gICAgY2xhdWRlQXJncy5wdXNoKCctLXByZWZpbGwnLCBhY3Rpb24ucXVlcnkpXG4gIH1cblxuICBzd2l0Y2ggKHByb2Nlc3MucGxhdGZvcm0pIHtcbiAgICBjYXNlICdkYXJ3aW4nOlxuICAgICAgcmV0dXJuIGxhdW5jaE1hY29zVGVybWluYWwodGVybWluYWwsIGNsYXVkZVBhdGgsIGNsYXVkZUFyZ3MsIGFjdGlvbi5jd2QpXG4gICAgY2FzZSAnbGludXgnOlxuICAgICAgcmV0dXJuIGxhdW5jaExpbnV4VGVybWluYWwodGVybWluYWwsIGNsYXVkZVBhdGgsIGNsYXVkZUFyZ3MsIGFjdGlvbi5jd2QpXG4gICAgY2FzZSAnd2luMzInOlxuICAgICAgcmV0dXJuIGxhdW5jaFdpbmRvd3NUZXJtaW5hbCh0ZXJtaW5hbCwgY2xhdWRlUGF0aCwgY2xhdWRlQXJncywgYWN0aW9uLmN3ZClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoTWFjb3NUZXJtaW5hbChcbiAgdGVybWluYWw6IFRlcm1pbmFsSW5mbyxcbiAgY2xhdWRlUGF0aDogc3RyaW5nLFxuICBjbGF1ZGVBcmdzOiBzdHJpbmdbXSxcbiAgY3dkPzogc3RyaW5nLFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHN3aXRjaCAodGVybWluYWwuY29tbWFuZCkge1xuICAgIC8vIC0tLSBTSEVMTC1TVFJJTkcgUEFUSFMgKEFwcGxlU2NyaXB0IGhhcyBubyBhcmd2IGludGVyZmFjZSkgLS0tXG4gICAgLy8gVXNlciBpbnB1dCBpcyBzaGVsbC1xdW90ZWQgdmlhIHNoZWxsUXVvdGUoKS4gVGhlc2UgdHdvIGFyZSB0aGUgb25seVxuICAgIC8vIG1hY09TIHBhdGhzIHdoZXJlIHNoZWxsUXVvdGUoKSBjb3JyZWN0bmVzcyBpcyBsb2FkLWJlYXJpbmcuXG5cbiAgICBjYXNlICdpVGVybSc6IHtcbiAgICAgIGNvbnN0IHNoQ21kID0gYnVpbGRTaGVsbENvbW1hbmQoY2xhdWRlUGF0aCwgY2xhdWRlQXJncywgY3dkKVxuICAgICAgLy8gSWYgaVRlcm0gaXNuJ3QgcnVubmluZywgYHRlbGwgYXBwbGljYXRpb25gIGxhdW5jaGVzIGl0IGFuZCBpVGVybSdzXG4gICAgICAvLyBkZWZhdWx0IHN0YXJ0dXAgYmVoYXZpb3Igb3BlbnMgYSB3aW5kb3cgXHUyMDE0IHNvIGBjcmVhdGUgd2luZG93YCB3b3VsZFxuICAgICAgLy8gbWFrZSBhIHNlY29uZCBvbmUuIENoZWNrIGBydW5uaW5nYCBmaXJzdDogaWYgYWxyZWFkeSBydW5uaW5nIChldmVuXG4gICAgICAvLyB3aXRoIHplcm8gd2luZG93cyksIGNyZWF0ZSBhIHdpbmRvdzsgaWYgbm90LCBgYWN0aXZhdGVgIGxldHMgaVRlcm0nc1xuICAgICAgLy8gc3RhcnR1cCBjcmVhdGUgdGhlIGZpcnN0IHdpbmRvdy5cbiAgICAgIGNvbnN0IHNjcmlwdCA9IGB0ZWxsIGFwcGxpY2F0aW9uIFwiaVRlcm1cIlxuICBpZiBydW5uaW5nIHRoZW5cbiAgICBjcmVhdGUgd2luZG93IHdpdGggZGVmYXVsdCBwcm9maWxlXG4gIGVsc2VcbiAgICBhY3RpdmF0ZVxuICBlbmQgaWZcbiAgdGVsbCBjdXJyZW50IHNlc3Npb24gb2YgY3VycmVudCB3aW5kb3dcbiAgICB3cml0ZSB0ZXh0ICR7YXBwbGVTY3JpcHRRdW90ZShzaENtZCl9XG4gIGVuZCB0ZWxsXG5lbmQgdGVsbGBcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdvc2FzY3JpcHQnLCBbJy1lJywgc2NyaXB0XSwge1xuICAgICAgICB1c2VDd2Q6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIGlmIChjb2RlID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdUZXJtaW5hbCc6IHtcbiAgICAgIGNvbnN0IHNoQ21kID0gYnVpbGRTaGVsbENvbW1hbmQoY2xhdWRlUGF0aCwgY2xhdWRlQXJncywgY3dkKVxuICAgICAgY29uc3Qgc2NyaXB0ID0gYHRlbGwgYXBwbGljYXRpb24gXCJUZXJtaW5hbFwiXG4gIGRvIHNjcmlwdCAke2FwcGxlU2NyaXB0UXVvdGUoc2hDbWQpfVxuICBhY3RpdmF0ZVxuZW5kIHRlbGxgXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnb3Nhc2NyaXB0JywgWyctZScsIHNjcmlwdF0sIHtcbiAgICAgICAgdXNlQ3dkOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gY29kZSA9PT0gMFxuICAgIH1cblxuICAgIC8vIC0tLSBQVVJFIEFSR1YgUEFUSFMgKG5vIHNoZWxsLCBubyBzaGVsbFF1b3RlKSAtLS1cbiAgICAvLyBvcGVuIC1uYSA8QXBwPiAtLWFyZ3MgPGFyZ3Y+IFx1MjE5MiBhcHAgcmVjZWl2ZXMgYXJndiB2ZXJiYXRpbSBcdTIxOTJcbiAgICAvLyB0ZXJtaW5hbCdzIG5hdGl2ZSAtLXdvcmtpbmctZGlyZWN0b3J5ICsgLWUgZXhlYyB0aGUgY29tbWFuZCBkaXJlY3RseS5cblxuICAgIGNhc2UgJ0dob3N0dHknOiB7XG4gICAgICBjb25zdCBhcmdzID0gW1xuICAgICAgICAnLW5hJyxcbiAgICAgICAgdGVybWluYWwuY29tbWFuZCxcbiAgICAgICAgJy0tYXJncycsXG4gICAgICAgICctLXdpbmRvdy1zYXZlLXN0YXRlPW5ldmVyJyxcbiAgICAgIF1cbiAgICAgIGlmIChjd2QpIGFyZ3MucHVzaChgLS13b3JraW5nLWRpcmVjdG9yeT0ke2N3ZH1gKVxuICAgICAgYXJncy5wdXNoKCctZScsIGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3MpXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnb3BlbicsIGFyZ3MsIHsgdXNlQ3dkOiBmYWxzZSB9KVxuICAgICAgaWYgKGNvZGUgPT09IDApIHJldHVybiB0cnVlXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ0FsYWNyaXR0eSc6IHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbJy1uYScsIHRlcm1pbmFsLmNvbW1hbmQsICctLWFyZ3MnXVxuICAgICAgaWYgKGN3ZCkgYXJncy5wdXNoKCctLXdvcmtpbmctZGlyZWN0b3J5JywgY3dkKVxuICAgICAgYXJncy5wdXNoKCctZScsIGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3MpXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnb3BlbicsIGFyZ3MsIHsgdXNlQ3dkOiBmYWxzZSB9KVxuICAgICAgaWYgKGNvZGUgPT09IDApIHJldHVybiB0cnVlXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ2tpdHR5Jzoge1xuICAgICAgY29uc3QgYXJncyA9IFsnLW5hJywgdGVybWluYWwuY29tbWFuZCwgJy0tYXJncyddXG4gICAgICBpZiAoY3dkKSBhcmdzLnB1c2goJy0tZGlyZWN0b3J5JywgY3dkKVxuICAgICAgYXJncy5wdXNoKGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3MpXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnb3BlbicsIGFyZ3MsIHsgdXNlQ3dkOiBmYWxzZSB9KVxuICAgICAgaWYgKGNvZGUgPT09IDApIHJldHVybiB0cnVlXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ1dlelRlcm0nOiB7XG4gICAgICBjb25zdCBhcmdzID0gWyctbmEnLCB0ZXJtaW5hbC5jb21tYW5kLCAnLS1hcmdzJywgJ3N0YXJ0J11cbiAgICAgIGlmIChjd2QpIGFyZ3MucHVzaCgnLS1jd2QnLCBjd2QpXG4gICAgICBhcmdzLnB1c2goJy0tJywgY2xhdWRlUGF0aCwgLi4uY2xhdWRlQXJncylcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdvcGVuJywgYXJncywgeyB1c2VDd2Q6IGZhbHNlIH0pXG4gICAgICBpZiAoY29kZSA9PT0gMCkgcmV0dXJuIHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBGYWlsZWQgdG8gbGF1bmNoICR7dGVybWluYWwubmFtZX0sIGZhbGxpbmcgYmFjayB0byBUZXJtaW5hbC5hcHBgLFxuICApXG4gIHJldHVybiBsYXVuY2hNYWNvc1Rlcm1pbmFsKFxuICAgIHsgbmFtZTogJ1Rlcm1pbmFsLmFwcCcsIGNvbW1hbmQ6ICdUZXJtaW5hbCcgfSxcbiAgICBjbGF1ZGVQYXRoLFxuICAgIGNsYXVkZUFyZ3MsXG4gICAgY3dkLFxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaExpbnV4VGVybWluYWwoXG4gIHRlcm1pbmFsOiBUZXJtaW5hbEluZm8sXG4gIGNsYXVkZVBhdGg6IHN0cmluZyxcbiAgY2xhdWRlQXJnczogc3RyaW5nW10sXG4gIGN3ZD86IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBBbGwgTGludXggcGF0aHMgYXJlIHB1cmUgYXJndi4gRWFjaCB0ZXJtaW5hbCdzIC0td29ya2luZy1kaXJlY3RvcnlcbiAgLy8gKG9yIGVxdWl2YWxlbnQpIHNldHMgY3dkIG5hdGl2ZWx5OyB0aGUgY29tbWFuZCBpcyBleGVjJ2QgZGlyZWN0bHkuXG4gIC8vIEZvciB0aGUgZmV3IHRlcm1pbmFscyB3aXRob3V0IGEgY3dkIGZsYWcgKHh0ZXJtLCBhbmQgdGhlIG9wYXF1ZVxuICAvLyB4LXRlcm1pbmFsLWVtdWxhdG9yIC8gJFRFUk1JTkFMKSwgc3Bhd24oe2N3ZH0pIHNldHMgdGhlIHRlcm1pbmFsXG4gIC8vIHByb2Nlc3MncyBjd2QgXHUyMDE0IG1vc3QgaW5oZXJpdCBpdCBmb3IgdGhlIGNoaWxkLlxuXG4gIGxldCBhcmdzOiBzdHJpbmdbXVxuICBsZXQgc3Bhd25Dd2Q6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIHN3aXRjaCAodGVybWluYWwubmFtZSkge1xuICAgIGNhc2UgJ2dub21lLXRlcm1pbmFsJzpcbiAgICAgIGFyZ3MgPSBjd2QgPyBbYC0td29ya2luZy1kaXJlY3Rvcnk9JHtjd2R9YCwgJy0tJ10gOiBbJy0tJ11cbiAgICAgIGFyZ3MucHVzaChjbGF1ZGVQYXRoLCAuLi5jbGF1ZGVBcmdzKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdrb25zb2xlJzpcbiAgICAgIGFyZ3MgPSBjd2QgPyBbJy0td29ya2RpcicsIGN3ZCwgJy1lJ10gOiBbJy1lJ11cbiAgICAgIGFyZ3MucHVzaChjbGF1ZGVQYXRoLCAuLi5jbGF1ZGVBcmdzKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdraXR0eSc6XG4gICAgICBhcmdzID0gY3dkID8gWyctLWRpcmVjdG9yeScsIGN3ZF0gOiBbXVxuICAgICAgYXJncy5wdXNoKGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3MpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3dlenRlcm0nOlxuICAgICAgYXJncyA9IGN3ZCA/IFsnc3RhcnQnLCAnLS1jd2QnLCBjd2QsICctLSddIDogWydzdGFydCcsICctLSddXG4gICAgICBhcmdzLnB1c2goY2xhdWRlUGF0aCwgLi4uY2xhdWRlQXJncylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWxhY3JpdHR5JzpcbiAgICAgIGFyZ3MgPSBjd2QgPyBbJy0td29ya2luZy1kaXJlY3RvcnknLCBjd2QsICctZSddIDogWyctZSddXG4gICAgICBhcmdzLnB1c2goY2xhdWRlUGF0aCwgLi4uY2xhdWRlQXJncylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ2hvc3R0eSc6XG4gICAgICBhcmdzID0gY3dkID8gW2AtLXdvcmtpbmctZGlyZWN0b3J5PSR7Y3dkfWAsICctZSddIDogWyctZSddXG4gICAgICBhcmdzLnB1c2goY2xhdWRlUGF0aCwgLi4uY2xhdWRlQXJncylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAneGZjZTQtdGVybWluYWwnOlxuICAgIGNhc2UgJ21hdGUtdGVybWluYWwnOlxuICAgICAgYXJncyA9IGN3ZCA/IFtgLS13b3JraW5nLWRpcmVjdG9yeT0ke2N3ZH1gLCAnLXgnXSA6IFsnLXgnXVxuICAgICAgYXJncy5wdXNoKGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3MpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RpbGl4JzpcbiAgICAgIGFyZ3MgPSBjd2QgPyBbYC0td29ya2luZy1kaXJlY3Rvcnk9JHtjd2R9YCwgJy1lJ10gOiBbJy1lJ11cbiAgICAgIGFyZ3MucHVzaChjbGF1ZGVQYXRoLCAuLi5jbGF1ZGVBcmdzKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgLy8geHRlcm0sIHgtdGVybWluYWwtZW11bGF0b3IsICRURVJNSU5BTCBcdTIwMTQgbm8gcmVsaWFibGUgY3dkIGZsYWcuXG4gICAgICAvLyBzcGF3bih7Y3dkfSkgc2V0cyB0aGUgdGVybWluYWwncyBvd24gY3dkOyBtb3N0IGluaGVyaXQuXG4gICAgICBhcmdzID0gWyctZScsIGNsYXVkZVBhdGgsIC4uLmNsYXVkZUFyZ3NdXG4gICAgICBzcGF3bkN3ZCA9IGN3ZFxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBzcGF3bkRldGFjaGVkKHRlcm1pbmFsLmNvbW1hbmQsIGFyZ3MsIHsgY3dkOiBzcGF3bkN3ZCB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hXaW5kb3dzVGVybWluYWwoXG4gIHRlcm1pbmFsOiBUZXJtaW5hbEluZm8sXG4gIGNsYXVkZVBhdGg6IHN0cmluZyxcbiAgY2xhdWRlQXJnczogc3RyaW5nW10sXG4gIGN3ZD86IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBhcmdzOiBzdHJpbmdbXSA9IFtdXG5cbiAgc3dpdGNoICh0ZXJtaW5hbC5uYW1lKSB7XG4gICAgLy8gLS0tIFBVUkUgQVJHViBQQVRIIC0tLVxuICAgIGNhc2UgJ1dpbmRvd3MgVGVybWluYWwnOlxuICAgICAgaWYgKGN3ZCkgYXJncy5wdXNoKCctZCcsIGN3ZClcbiAgICAgIGFyZ3MucHVzaCgnLS0nLCBjbGF1ZGVQYXRoLCAuLi5jbGF1ZGVBcmdzKVxuICAgICAgYnJlYWtcblxuICAgIC8vIC0tLSBTSEVMTC1TVFJJTkcgUEFUSFMgLS0tXG4gICAgLy8gUG93ZXJTaGVsbCAtQ29tbWFuZCBhbmQgY21kIC9rIHRha2UgYSBjb21tYW5kIHN0cmluZy4gTm8gYXJndiBleGVjXG4gICAgLy8gbW9kZSB0aGF0IGFsc28ga2VlcHMgdGhlIHNlc3Npb24gaW50ZXJhY3RpdmUgYWZ0ZXIgY2xhdWRlIGV4aXRzLlxuICAgIC8vIFVzZXIgaW5wdXQgaXMgZXNjYXBlZCBwZXItc2hlbGw7IGNvcnJlY3RuZXNzIG9mIHRoYXQgZXNjYXBpbmcgaXNcbiAgICAvLyBsb2FkLWJlYXJpbmcgaGVyZS5cblxuICAgIGNhc2UgJ1Bvd2VyU2hlbGwnOiB7XG4gICAgICAvLyBTaW5nbGUtcXVvdGVkIFBvd2VyU2hlbGwgc3RyaW5ncyBoYXZlIE5PIGVzY2FwZSBzZXF1ZW5jZXMgKG9ubHlcbiAgICAgIC8vICcnIGZvciBhIGxpdGVyYWwgcXVvdGUpLiBEb3VibGUtcXVvdGVkIHN0cmluZ3MgaW50ZXJwcmV0IGJhY2t0aWNrXG4gICAgICAvLyBlc2NhcGVzIFx1MjAxNCBhIHF1ZXJ5IGNvbnRhaW5pbmcgYFwiIGNvdWxkIGJyZWFrIG91dC5cbiAgICAgIGNvbnN0IGNkQ21kID0gY3dkID8gYFNldC1Mb2NhdGlvbiAke3BzUXVvdGUoY3dkKX07IGAgOiAnJ1xuICAgICAgYXJncy5wdXNoKFxuICAgICAgICAnLU5vRXhpdCcsXG4gICAgICAgICctQ29tbWFuZCcsXG4gICAgICAgIGAke2NkQ21kfSYgJHtwc1F1b3RlKGNsYXVkZVBhdGgpfSAke2NsYXVkZUFyZ3MubWFwKHBzUXVvdGUpLmpvaW4oJyAnKX1gLFxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjZENtZCA9IGN3ZCA/IGBjZCAvZCAke2NtZFF1b3RlKGN3ZCl9ICYmIGAgOiAnJ1xuICAgICAgYXJncy5wdXNoKFxuICAgICAgICAnL2snLFxuICAgICAgICBgJHtjZENtZH0ke2NtZFF1b3RlKGNsYXVkZVBhdGgpfSAke2NsYXVkZUFyZ3MubWFwKGEgPT4gY21kUXVvdGUoYSkpLmpvaW4oJyAnKX1gLFxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyBjbWQuZXhlIGRvZXMgTk9UIHVzZSBNU1ZDUlQtc3R5bGUgYXJndW1lbnQgcGFyc2luZy4gbGlidXYncyBkZWZhdWx0XG4gIC8vIHF1b3RpbmcgZm9yIHNwYXduKCkgb24gV2luZG93cyBhc3N1bWVzIE1TVkNSVCBydWxlcyBhbmQgd291bGQgZG91YmxlLVxuICAvLyBlc2NhcGUgb3VyIGFscmVhZHktY21kUXVvdGUnZCBzdHJpbmcuIEJ5cGFzcyBpdCBmb3IgY21kLmV4ZSBvbmx5LlxuICByZXR1cm4gc3Bhd25EZXRhY2hlZCh0ZXJtaW5hbC5jb21tYW5kLCBhcmdzLCB7XG4gICAgd2luZG93c1ZlcmJhdGltQXJndW1lbnRzOiB0ZXJtaW5hbC5uYW1lID09PSAnQ29tbWFuZCBQcm9tcHQnLFxuICB9KVxufVxuXG4vKipcbiAqIFNwYXduIGEgdGVybWluYWwgZGV0YWNoZWQgc28gdGhlIGhhbmRsZXIgcHJvY2VzcyBjYW4gZXhpdCB3aXRob3V0XG4gKiB3YWl0aW5nIGZvciB0aGUgdGVybWluYWwgdG8gY2xvc2UuIFJlc29sdmVzIGZhbHNlIG9uIHNwYXduIGZhaWx1cmVcbiAqIChFTk9FTlQsIEVBQ0NFUykgcmF0aGVyIHRoYW4gY3Jhc2hpbmcuXG4gKi9cbmZ1bmN0aW9uIHNwYXduRGV0YWNoZWQoXG4gIGNvbW1hbmQ6IHN0cmluZyxcbiAgYXJnczogc3RyaW5nW10sXG4gIG9wdHM6IHsgY3dkPzogc3RyaW5nOyB3aW5kb3dzVmVyYmF0aW1Bcmd1bWVudHM/OiBib29sZWFuIH0gPSB7fSxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBzcGF3bihjb21tYW5kLCBhcmdzLCB7XG4gICAgICBkZXRhY2hlZDogdHJ1ZSxcbiAgICAgIHN0ZGlvOiAnaWdub3JlJyxcbiAgICAgIGN3ZDogb3B0cy5jd2QsXG4gICAgICB3aW5kb3dzVmVyYmF0aW1Bcmd1bWVudHM6IG9wdHMud2luZG93c1ZlcmJhdGltQXJndW1lbnRzLFxuICAgIH0pXG4gICAgY2hpbGQub25jZSgnZXJyb3InLCBlcnIgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGBGYWlsZWQgdG8gc3Bhd24gJHtjb21tYW5kfTogJHtlcnIubWVzc2FnZX1gLCB7XG4gICAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHZvaWQgcmVzb2x2ZShmYWxzZSlcbiAgICB9KVxuICAgIGNoaWxkLm9uY2UoJ3NwYXduJywgKCkgPT4ge1xuICAgICAgY2hpbGQudW5yZWYoKVxuICAgICAgdm9pZCByZXNvbHZlKHRydWUpXG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBCdWlsZCBhIHNpbmdsZS1xdW90ZWQgUE9TSVggc2hlbGwgY29tbWFuZCBzdHJpbmcuIE9OTFkgdXNlZCBieSB0aGVcbiAqIEFwcGxlU2NyaXB0IHBhdGhzIChpVGVybSwgVGVybWluYWwuYXBwKSB3aGljaCBoYXZlIG5vIGFyZ3YgaW50ZXJmYWNlLlxuICovXG5mdW5jdGlvbiBidWlsZFNoZWxsQ29tbWFuZChcbiAgY2xhdWRlUGF0aDogc3RyaW5nLFxuICBjbGF1ZGVBcmdzOiBzdHJpbmdbXSxcbiAgY3dkPzogc3RyaW5nLFxuKTogc3RyaW5nIHtcbiAgY29uc3QgY2RQcmVmaXggPSBjd2QgPyBgY2QgJHtzaGVsbFF1b3RlKGN3ZCl9ICYmIGAgOiAnJ1xuICByZXR1cm4gYCR7Y2RQcmVmaXh9JHtbY2xhdWRlUGF0aCwgLi4uY2xhdWRlQXJnc10ubWFwKHNoZWxsUXVvdGUpLmpvaW4oJyAnKX1gXG59XG5cbi8qKlxuICogUE9TSVggc2luZ2xlLXF1b3RlIGVzY2FwaW5nLiBTaW5nbGUtcXVvdGVkIHN0cmluZ3MgaGF2ZSB6ZXJvXG4gKiBpbnRlcnByZXRhdGlvbiBleGNlcHQgZm9yIHRoZSBjbG9zaW5nIHNpbmdsZSBxdW90ZSBpdHNlbGYuXG4gKiBPbmx5IHVzZWQgYnkgYnVpbGRTaGVsbENvbW1hbmQoKSBmb3IgdGhlIEFwcGxlU2NyaXB0IHBhdGhzLlxuICovXG5mdW5jdGlvbiBzaGVsbFF1b3RlKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJyR7cy5yZXBsYWNlKC8nL2csIFwiJ1xcXFwnJ1wiKX0nYFxufVxuXG4vKipcbiAqIEFwcGxlU2NyaXB0IHN0cmluZyBsaXRlcmFsIGVzY2FwaW5nIChiYWNrc2xhc2ggdGhlbiBkb3VibGUtcXVvdGUpLlxuICovXG5mdW5jdGlvbiBhcHBsZVNjcmlwdFF1b3RlKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgXCIke3MucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyl9XCJgXG59XG5cbi8qKlxuICogUG93ZXJTaGVsbCBzaW5nbGUtcXVvdGVkIHN0cmluZy4gVGhlIE9OTFkgc3BlY2lhbCBzZXF1ZW5jZSBpcyAnJyBmb3IgYVxuICogbGl0ZXJhbCBzaW5nbGUgcXVvdGUgXHUyMDE0IG5vIGJhY2t0aWNrIGVzY2FwZXMsIG5vIHZhcmlhYmxlIGV4cGFuc2lvbiwgbm9cbiAqIHN1YmV4cHJlc3Npb25zLiBUaGlzIGlzIHRoZSBzYWZlIFBvd2VyU2hlbGwgcXVvdGluZzsgZG91YmxlLXF1b3RlZFxuICogc3RyaW5ncyBpbnRlcnByZXQgYG4gYHQgYFwiIGV0Yy4gYW5kIGNhbiBiZSBlc2NhcGVkIG91dCBvZi5cbiAqL1xuZnVuY3Rpb24gcHNRdW90ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCcke3MucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgXG59XG5cbi8qKlxuICogY21kLmV4ZSBhcmd1bWVudCBxdW90aW5nLiBjbWQuZXhlIGRvZXMgTk9UIHVzZSBDb21tYW5kTGluZVRvQXJndlctc3R5bGVcbiAqIGJhY2tzbGFzaCBlc2NhcGluZyBcdTIwMTQgaXQgdG9nZ2xlcyBpdHMgcXVvdGluZyBzdGF0ZSBvbiBldmVyeSByYXcgXCJcbiAqIGNoYXJhY3Rlciwgc28gYW4gZW1iZWRkZWQgXCIgYnJlYWtzIG91dCBvZiB0aGUgcXVvdGVkIHJlZ2lvbiBhbmQgZXhwb3Nlc1xuICogbWV0YWNoYXJhY3RlcnMgKCYgfCA8ID4gXikgdG8gY21kLmV4ZSBpbnRlcnByZXRhdGlvbiA9IGNvbW1hbmQgaW5qZWN0aW9uLlxuICpcbiAqIFN0cmF0ZWd5OiBzdHJpcCBcIiBmcm9tIHRoZSBpbnB1dCAoaXQgY2Fubm90IGJlIHNhZmVseSByZXByZXNlbnRlZCBpbiBhXG4gKiBjbWQuZXhlIGRvdWJsZS1xdW90ZWQgc3RyaW5nKS4gRXNjYXBlICUgYXMgJSUgdG8gcHJldmVudCBlbnZpcm9ubWVudFxuICogdmFyaWFibGUgZXhwYW5zaW9uICglUEFUSCUgZXRjLikgd2hpY2ggY21kLmV4ZSBwZXJmb3JtcyBldmVuIGluc2lkZVxuICogZG91YmxlIHF1b3Rlcy4gVHJhaWxpbmcgYmFja3NsYXNoZXMgYXJlIHN0aWxsIGRvdWJsZWQgYmVjYXVzZSB0aGVcbiAqICpjaGlsZCBwcm9jZXNzKiAoY2xhdWRlLmV4ZSkgdXNlcyBDb21tYW5kTGluZVRvQXJndlcsIHdoZXJlIGEgdHJhaWxpbmdcbiAqIFxcIGJlZm9yZSBvdXIgY2xvc2luZyBcIiB3b3VsZCBlYXQgdGhlIGNsb3NlLXF1b3RlLlxuICovXG5mdW5jdGlvbiBjbWRRdW90ZShhcmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0cmlwcGVkID0gYXJnLnJlcGxhY2UoL1wiL2csICcnKS5yZXBsYWNlKC8lL2csICclJScpXG4gIGNvbnN0IGVzY2FwZWQgPSBzdHJpcHBlZC5yZXBsYWNlKC8oXFxcXCspJC8sICckMSQxJylcbiAgcmV0dXJuIGBcIiR7ZXNjYXBlZH1cImBcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQURBLFNBQVMsZUFBZTtBQU14QjtBQUVBO0FBQ0E7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBTEEsU0FBUyxhQUFhO0FBQ3RCLFNBQVMsZ0JBQWdCO0FBYXpCLElBQU0sa0JBSUQ7QUFBQSxFQUNILEVBQUUsTUFBTSxVQUFVLFVBQVUseUJBQXlCLEtBQUssUUFBUTtBQUFBLEVBQ2xFLEVBQUUsTUFBTSxXQUFXLFVBQVUseUJBQXlCLEtBQUssVUFBVTtBQUFBLEVBQ3JFLEVBQUUsTUFBTSxTQUFTLFVBQVUsd0JBQXdCLEtBQUssUUFBUTtBQUFBLEVBQ2hFLEVBQUUsTUFBTSxhQUFhLFVBQVUsaUJBQWlCLEtBQUssWUFBWTtBQUFBLEVBQ2pFLEVBQUUsTUFBTSxXQUFXLFVBQVUsMEJBQTBCLEtBQUssVUFBVTtBQUFBLEVBQ3RFO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsRUFDUDtBQUNGO0FBR0EsSUFBTSxrQkFBa0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFD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
