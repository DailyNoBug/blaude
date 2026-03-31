#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  color,
  init_color,
  init_ink,
  init_supports_hyperlinks,
  supportsHyperlinks
} from "./chunk-IVRGECFY.mjs";
import {
  getCurrentProjectConfig,
  getGlobalConfig,
  init_config2 as init_config,
  init_file,
  init_source,
  isDirEmpty,
  saveCurrentProjectConfig,
  saveGlobalConfig,
  source_default
} from "./chunk-Z6CSO4BY.mjs";
import {
  addItemToJSONCArray,
  init_json,
  safeParseJSONC
} from "./chunk-LNPDZCDV.mjs";
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  env,
  init_env
} from "./chunk-JOMSGAK7.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isFsInaccessible,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/projectOnboardingState.ts
import { join } from "path";
function getSteps() {
  const hasClaudeMd = getFsImplementation().existsSync(
    join(getCwd(), "CLAUDE.md")
  );
  const isWorkspaceDirEmpty = isDirEmpty(getCwd());
  return [
    {
      key: "workspace",
      text: "Ask Claude to create a new app or clone a repository",
      isComplete: false,
      isCompletable: true,
      isEnabled: isWorkspaceDirEmpty
    },
    {
      key: "claudemd",
      text: "Run /init to create a CLAUDE.md file with instructions for Claude",
      isComplete: hasClaudeMd,
      isCompletable: true,
      isEnabled: !isWorkspaceDirEmpty
    }
  ];
}
function isProjectOnboardingComplete() {
  return getSteps().filter(({ isCompletable, isEnabled }) => isCompletable && isEnabled).every(({ isComplete }) => isComplete);
}
function maybeMarkProjectOnboardingComplete() {
  if (getCurrentProjectConfig().hasCompletedProjectOnboarding) {
    return;
  }
  if (isProjectOnboardingComplete()) {
    saveCurrentProjectConfig((current) => ({
      ...current,
      hasCompletedProjectOnboarding: true
    }));
  }
}
function incrementProjectOnboardingSeenCount() {
  saveCurrentProjectConfig((current) => ({
    ...current,
    projectOnboardingSeenCount: current.projectOnboardingSeenCount + 1
  }));
}
var shouldShowProjectOnboarding;
var init_projectOnboardingState = __esm({
  "src/projectOnboardingState.ts"() {
    init_memoize();
    init_config();
    init_cwd();
    init_file();
    init_fsOperations();
    shouldShowProjectOnboarding = memoize_default(() => {
      const projectConfig = getCurrentProjectConfig();
      if (projectConfig.hasCompletedProjectOnboarding || projectConfig.projectOnboardingSeenCount >= 4 || process.env.IS_DEMO) {
        return false;
      }
      return !isProjectOnboardingComplete();
    });
  }
});

// src/utils/appleTerminalBackup.ts
import { stat } from "fs/promises";
import { homedir } from "os";
import { join as join2 } from "path";
function markTerminalSetupInProgress(backupPath) {
  saveGlobalConfig((current) => ({
    ...current,
    appleTerminalSetupInProgress: true,
    appleTerminalBackupPath: backupPath
  }));
}
function markTerminalSetupComplete() {
  saveGlobalConfig((current) => ({
    ...current,
    appleTerminalSetupInProgress: false
  }));
}
function getTerminalRecoveryInfo() {
  const config = getGlobalConfig();
  return {
    inProgress: config.appleTerminalSetupInProgress ?? false,
    backupPath: config.appleTerminalBackupPath || null
  };
}
function getTerminalPlistPath() {
  return join2(homedir(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function backupTerminalPreferences() {
  const terminalPlistPath = getTerminalPlistPath();
  const backupPath = `${terminalPlistPath}.bak`;
  try {
    const { code } = await execFileNoThrow("defaults", [
      "export",
      "com.apple.Terminal",
      terminalPlistPath
    ]);
    if (code !== 0) {
      return null;
    }
    try {
      await stat(terminalPlistPath);
    } catch {
      return null;
    }
    await execFileNoThrow("defaults", [
      "export",
      "com.apple.Terminal",
      backupPath
    ]);
    markTerminalSetupInProgress(backupPath);
    return backupPath;
  } catch (error) {
    logError(error);
    return null;
  }
}
async function checkAndRestoreTerminalBackup() {
  const { inProgress, backupPath } = getTerminalRecoveryInfo();
  if (!inProgress) {
    return { status: "no_backup" };
  }
  if (!backupPath) {
    markTerminalSetupComplete();
    return { status: "no_backup" };
  }
  try {
    await stat(backupPath);
  } catch {
    markTerminalSetupComplete();
    return { status: "no_backup" };
  }
  try {
    const { code } = await execFileNoThrow("defaults", [
      "import",
      "com.apple.Terminal",
      backupPath
    ]);
    if (code !== 0) {
      return { status: "failed", backupPath };
    }
    await execFileNoThrow("killall", ["cfprefsd"]);
    markTerminalSetupComplete();
    return { status: "restored" };
  } catch (restoreError) {
    logError(
      new Error(
        `Failed to restore Terminal.app settings with: ${restoreError}`
      )
    );
    markTerminalSetupComplete();
    return { status: "failed", backupPath };
  }
}
var init_appleTerminalBackup = __esm({
  "src/utils/appleTerminalBackup.ts"() {
    init_config();
    init_execFileNoThrow();
    init_log();
  }
});

// src/utils/completionCache.ts
import { homedir as homedir2 } from "os";
import { dirname, join as join3 } from "path";
function detectShell() {
  const shell = process.env.SHELL || "";
  const home = homedir2();
  const claudeDir = join3(home, ".claude");
  if (shell.endsWith("/zsh") || shell.endsWith("/zsh.exe")) {
    const cacheFile = join3(claudeDir, "completion.zsh");
    return {
      name: "zsh",
      rcFile: join3(home, ".zshrc"),
      cacheFile,
      completionLine: `[[ -f "${cacheFile}" ]] && source "${cacheFile}"`,
      shellFlag: "zsh"
    };
  }
  if (shell.endsWith("/bash") || shell.endsWith("/bash.exe")) {
    const cacheFile = join3(claudeDir, "completion.bash");
    return {
      name: "bash",
      rcFile: join3(home, ".bashrc"),
      cacheFile,
      completionLine: `[ -f "${cacheFile}" ] && source "${cacheFile}"`,
      shellFlag: "bash"
    };
  }
  if (shell.endsWith("/fish") || shell.endsWith("/fish.exe")) {
    const xdg = process.env.XDG_CONFIG_HOME || join3(home, ".config");
    const cacheFile = join3(claudeDir, "completion.fish");
    return {
      name: "fish",
      rcFile: join3(xdg, "fish", "config.fish"),
      cacheFile,
      completionLine: `[ -f "${cacheFile}" ] && source "${cacheFile}"`,
      shellFlag: "fish"
    };
  }
  return null;
}
async function regenerateCompletionCache() {
  const shell = detectShell();
  if (!shell) {
    return;
  }
  logForDebugging(`update: Regenerating ${shell.name} completion cache`);
  const claudeBin = process.argv[1] || "claude";
  const result = await execFileNoThrow(claudeBin, [
    "completion",
    shell.shellFlag,
    "--output",
    shell.cacheFile
  ]);
  if (result.code !== 0) {
    logForDebugging(
      `update: Failed to regenerate ${shell.name} completion cache`
    );
    return;
  }
  logForDebugging(
    `update: Regenerated ${shell.name} completion cache at ${shell.cacheFile}`
  );
}
var init_completionCache = __esm({
  "src/utils/completionCache.ts"() {
    init_color();
    init_supports_hyperlinks();
    init_debug();
    init_errors();
    init_execFileNoThrow();
    init_log();
  }
});

// src/commands/terminalSetup/terminalSetup.tsx
import { randomBytes } from "crypto";
import { copyFile, mkdir, readFile, writeFile } from "fs/promises";
import { homedir as homedir3, platform } from "os";
import { dirname as dirname2, join as join4 } from "path";
import { pathToFileURL } from "url";
function isVSCodeRemoteSSH() {
  const askpassMain = process.env.VSCODE_GIT_ASKPASS_MAIN ?? "";
  const path = process.env.PATH ?? "";
  return askpassMain.includes(".vscode-server") || askpassMain.includes(".cursor-server") || askpassMain.includes(".windsurf-server") || path.includes(".vscode-server") || path.includes(".cursor-server") || path.includes(".windsurf-server");
}
function getNativeCSIuTerminalDisplayName() {
  if (!env.terminal || !(env.terminal in NATIVE_CSIU_TERMINALS)) {
    return null;
  }
  return NATIVE_CSIU_TERMINALS[env.terminal] ?? null;
}
function formatPathLink(filePath) {
  if (!supportsHyperlinks()) {
    return filePath;
  }
  const fileUrl = pathToFileURL(filePath).href;
  return `\x1B]8;;${fileUrl}\x07${filePath}\x1B]8;;\x07`;
}
function shouldOfferTerminalSetup() {
  return platform() === "darwin" && env.terminal === "Apple_Terminal" || env.terminal === "vscode" || env.terminal === "cursor" || env.terminal === "windsurf" || env.terminal === "alacritty" || env.terminal === "zed";
}
async function setupTerminal(theme) {
  let result = "";
  switch (env.terminal) {
    case "Apple_Terminal":
      result = await enableOptionAsMetaForTerminal(theme);
      break;
    case "vscode":
      result = await installBindingsForVSCodeTerminal("VSCode", theme);
      break;
    case "cursor":
      result = await installBindingsForVSCodeTerminal("Cursor", theme);
      break;
    case "windsurf":
      result = await installBindingsForVSCodeTerminal("Windsurf", theme);
      break;
    case "alacritty":
      result = await installBindingsForAlacritty(theme);
      break;
    case "zed":
      result = await installBindingsForZed(theme);
      break;
    case null:
      break;
  }
  saveGlobalConfig((current) => {
    if (["vscode", "cursor", "windsurf", "alacritty", "zed"].includes(env.terminal ?? "")) {
      if (current.shiftEnterKeyBindingInstalled === true) return current;
      return {
        ...current,
        shiftEnterKeyBindingInstalled: true
      };
    } else if (env.terminal === "Apple_Terminal") {
      if (current.optionAsMetaKeyInstalled === true) return current;
      return {
        ...current,
        optionAsMetaKeyInstalled: true
      };
    }
    return current;
  });
  maybeMarkProjectOnboardingComplete();
  if (false) {
    result += await setupShellCompletion(theme);
  }
  return result;
}
function isShiftEnterKeyBindingInstalled() {
  return getGlobalConfig().shiftEnterKeyBindingInstalled === true;
}
function hasUsedBackslashReturn() {
  return getGlobalConfig().hasUsedBackslashReturn === true;
}
function markBackslashReturnUsed() {
  const config = getGlobalConfig();
  if (!config.hasUsedBackslashReturn) {
    saveGlobalConfig((current) => ({
      ...current,
      hasUsedBackslashReturn: true
    }));
  }
}
async function call(onDone, context, _args) {
  if (env.terminal && env.terminal in NATIVE_CSIU_TERMINALS) {
    const message = `Shift+Enter is natively supported in ${NATIVE_CSIU_TERMINALS[env.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.`;
    onDone(message);
    return null;
  }
  if (!shouldOfferTerminalSetup()) {
    const terminalName = env.terminal || "your current terminal";
    const currentPlatform = getPlatform();
    let platformTerminals = "";
    if (currentPlatform === "macos") {
      platformTerminals = "   \u2022 macOS: Apple Terminal\n";
    } else if (currentPlatform === "windows") {
      platformTerminals = "   \u2022 Windows: Windows Terminal\n";
    }
    const message = `Terminal setup cannot be run from ${terminalName}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${source_default.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${platformTerminals}   \u2022 IDE: VSCode, Cursor, Windsurf, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${source_default.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, and Warp support Shift+Enter natively.")}`;
    onDone(message);
    return null;
  }
  const result = await setupTerminal(context.options.theme);
  onDone(result);
  return null;
}
async function installBindingsForVSCodeTerminal(editor = "VSCode", theme) {
  if (isVSCodeRemoteSSH()) {
    return `${color("warning", theme)(`Cannot install keybindings from a remote ${editor} session.`)}${EOL}${EOL}${editor} keybindings must be installed on your local machine, not the remote server.${EOL}${EOL}To install the Shift+Enter keybinding:${EOL}1. Open ${editor} on your local machine (not connected to remote)${EOL}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${EOL}3. Add this keybinding (the file must be a JSON array):${EOL}${EOL}${source_default.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${EOL}`;
  }
  const editorDir = editor === "VSCode" ? "Code" : editor;
  const userDirPath = join4(homedir3(), platform() === "win32" ? join4("AppData", "Roaming", editorDir, "User") : platform() === "darwin" ? join4("Library", "Application Support", editorDir, "User") : join4(".config", editorDir, "User"));
  const keybindingsPath = join4(userDirPath, "keybindings.json");
  try {
    await mkdir(userDirPath, {
      recursive: true
    });
    let content = "[]";
    let keybindings = [];
    let fileExists = false;
    try {
      content = await readFile(keybindingsPath, {
        encoding: "utf-8"
      });
      fileExists = true;
      keybindings = safeParseJSONC(content) ?? [];
    } catch (e) {
      if (!isFsInaccessible(e)) throw e;
    }
    if (fileExists) {
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${keybindingsPath}.${randomSha}.bak`;
      try {
        await copyFile(keybindingsPath, backupPath);
      } catch {
        return `${color("warning", theme)(`Error backing up existing ${editor} terminal keybindings. Bailing out.`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    }
    const existingBinding = keybindings.find((binding) => binding.key === "shift+enter" && binding.command === "workbench.action.terminal.sendSequence" && binding.when === "terminalFocus");
    if (existingBinding) {
      return `${color("warning", theme)(`Found existing ${editor} terminal Shift+Enter key binding. Remove it to continue.`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}`;
    }
    const newKeybinding = {
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      args: {
        text: "\x1B\r"
      },
      when: "terminalFocus"
    };
    const updatedContent = addItemToJSONCArray(content, newKeybinding);
    await writeFile(keybindingsPath, updatedContent, {
      encoding: "utf-8"
    });
    return `${color("success", theme)(`Installed ${editor} terminal Shift+Enter key binding`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error(`Failed to install ${editor} terminal Shift+Enter key binding`);
  }
}
async function enableOptionAsMetaForProfile(profileName) {
  const {
    code: addCode
  } = await execFileNoThrow("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${profileName}':useOptionAsMetaKey bool true`, getTerminalPlistPath()]);
  if (addCode !== 0) {
    const {
      code: setCode
    } = await execFileNoThrow("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${profileName}':useOptionAsMetaKey true`, getTerminalPlistPath()]);
    if (setCode !== 0) {
      logError(new Error(`Failed to enable Option as Meta key for Terminal.app profile: ${profileName}`));
      return false;
    }
  }
  return true;
}
async function disableAudioBellForProfile(profileName) {
  const {
    code: addCode
  } = await execFileNoThrow("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${profileName}':Bell bool false`, getTerminalPlistPath()]);
  if (addCode !== 0) {
    const {
      code: setCode
    } = await execFileNoThrow("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${profileName}':Bell false`, getTerminalPlistPath()]);
    if (setCode !== 0) {
      logError(new Error(`Failed to disable audio bell for Terminal.app profile: ${profileName}`));
      return false;
    }
  }
  return true;
}
async function enableOptionAsMetaForTerminal(theme) {
  try {
    const backupPath = await backupTerminalPreferences();
    if (!backupPath) {
      throw new Error("Failed to create backup of Terminal.app preferences, bailing out");
    }
    const {
      stdout: defaultProfile,
      code: readCode
    } = await execFileNoThrow("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (readCode !== 0 || !defaultProfile.trim()) {
      throw new Error("Failed to read default Terminal.app profile");
    }
    const {
      stdout: startupProfile,
      code: startupCode
    } = await execFileNoThrow("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (startupCode !== 0 || !startupProfile.trim()) {
      throw new Error("Failed to read startup Terminal.app profile");
    }
    let wasAnyProfileUpdated = false;
    const defaultProfileName = defaultProfile.trim();
    const optionAsMetaEnabled = await enableOptionAsMetaForProfile(defaultProfileName);
    const audioBellDisabled = await disableAudioBellForProfile(defaultProfileName);
    if (optionAsMetaEnabled || audioBellDisabled) {
      wasAnyProfileUpdated = true;
    }
    const startupProfileName = startupProfile.trim();
    if (startupProfileName !== defaultProfileName) {
      const startupOptionAsMetaEnabled = await enableOptionAsMetaForProfile(startupProfileName);
      const startupAudioBellDisabled = await disableAudioBellForProfile(startupProfileName);
      if (startupOptionAsMetaEnabled || startupAudioBellDisabled) {
        wasAnyProfileUpdated = true;
      }
    }
    if (!wasAnyProfileUpdated) {
      throw new Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await execFileNoThrow("killall", ["cfprefsd"]);
    markTerminalSetupComplete();
    return `${color("success", theme)(`Configured Terminal.app settings:`)}${EOL}${color("success", theme)('- Enabled "Use Option as Meta key"')}${EOL}${color("success", theme)("- Switched to visual bell")}${EOL}${source_default.dim("Option+Enter will now enter a newline.")}${EOL}${source_default.dim("You must restart Terminal.app for changes to take effect.", theme)}${EOL}`;
  } catch (error) {
    logError(error);
    const restoreResult = await checkAndRestoreTerminalBackup();
    const errorMessage = "Failed to enable Option as Meta key for Terminal.app.";
    if (restoreResult.status === "restored") {
      throw new Error(`${errorMessage} Your settings have been restored from backup.`);
    } else if (restoreResult.status === "failed") {
      throw new Error(`${errorMessage} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${restoreResult.backupPath}`);
    } else {
      throw new Error(`${errorMessage} No backup was available to restore from.`);
    }
  }
}
async function installBindingsForAlacritty(theme) {
  const ALACRITTY_KEYBINDING = `[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"`;
  const configPaths = [];
  const xdgConfigHome = process.env.XDG_CONFIG_HOME;
  if (xdgConfigHome) {
    configPaths.push(join4(xdgConfigHome, "alacritty", "alacritty.toml"));
  } else {
    configPaths.push(join4(homedir3(), ".config", "alacritty", "alacritty.toml"));
  }
  if (platform() === "win32") {
    const appData = process.env.APPDATA;
    if (appData) {
      configPaths.push(join4(appData, "alacritty", "alacritty.toml"));
    }
  }
  let configPath = null;
  let configContent = "";
  let configExists = false;
  for (const path of configPaths) {
    try {
      configContent = await readFile(path, {
        encoding: "utf-8"
      });
      configPath = path;
      configExists = true;
      break;
    } catch (e) {
      if (!isFsInaccessible(e)) throw e;
    }
  }
  if (!configPath) {
    configPath = configPaths[0] ?? null;
  }
  if (!configPath) {
    throw new Error("No valid config path found for Alacritty");
  }
  try {
    if (configExists) {
      if (configContent.includes('mods = "Shift"') && configContent.includes('key = "Return"')) {
        return `${color("warning", theme)("Found existing Alacritty Shift+Enter key binding. Remove it to continue.")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}`;
      }
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${configPath}.${randomSha}.bak`;
      try {
        await copyFile(configPath, backupPath);
      } catch {
        return `${color("warning", theme)("Error backing up existing Alacritty config. Bailing out.")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    } else {
      await mkdir(dirname2(configPath), {
        recursive: true
      });
    }
    let updatedContent = configContent;
    if (configContent && !configContent.endsWith("\n")) {
      updatedContent += "\n";
    }
    updatedContent += "\n" + ALACRITTY_KEYBINDING + "\n";
    await writeFile(configPath, updatedContent, {
      encoding: "utf-8"
    });
    return `${color("success", theme)("Installed Alacritty Shift+Enter key binding")}${EOL}${color("success", theme)("You may need to restart Alacritty for changes to take effect")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error("Failed to install Alacritty Shift+Enter key binding");
  }
}
async function installBindingsForZed(theme) {
  const zedDir = join4(homedir3(), ".config", "zed");
  const keymapPath = join4(zedDir, "keymap.json");
  try {
    await mkdir(zedDir, {
      recursive: true
    });
    let keymapContent = "[]";
    let fileExists = false;
    try {
      keymapContent = await readFile(keymapPath, {
        encoding: "utf-8"
      });
      fileExists = true;
    } catch (e) {
      if (!isFsInaccessible(e)) throw e;
    }
    if (fileExists) {
      if (keymapContent.includes("shift-enter")) {
        return `${color("warning", theme)("Found existing Zed Shift+Enter key binding. Remove it to continue.")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}`;
      }
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${keymapPath}.${randomSha}.bak`;
      try {
        await copyFile(keymapPath, backupPath);
      } catch {
        return `${color("warning", theme)("Error backing up existing Zed keymap. Bailing out.")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    }
    let keymap;
    try {
      keymap = jsonParse(keymapContent);
      if (!Array.isArray(keymap)) {
        keymap = [];
      }
    } catch {
      keymap = [];
    }
    keymap.push({
      context: "Terminal",
      bindings: {
        "shift-enter": ["terminal::SendText", "\x1B\r"]
      }
    });
    await writeFile(keymapPath, jsonStringify(keymap, null, 2) + "\n", {
      encoding: "utf-8"
    });
    return `${color("success", theme)("Installed Zed Shift+Enter key binding")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error("Failed to install Zed Shift+Enter key binding");
  }
}
var EOL, NATIVE_CSIU_TERMINALS;
var init_terminalSetup = __esm({
  "src/commands/terminalSetup/terminalSetup.tsx"() {
    init_source();
    init_supports_hyperlinks();
    init_ink();
    init_projectOnboardingState();
    init_appleTerminalBackup();
    init_completionCache();
    init_config();
    init_env();
    init_errors();
    init_execFileNoThrow();
    init_json();
    init_log();
    init_platform();
    init_slowOperations();
    EOL = "\n";
    NATIVE_CSIU_TERMINALS = {
      ghostty: "Ghostty",
      kitty: "Kitty",
      "iTerm.app": "iTerm2",
      WezTerm: "WezTerm",
      WarpTerminal: "Warp"
    };
  }
});

export {
  getSteps,
  maybeMarkProjectOnboardingComplete,
  shouldShowProjectOnboarding,
  incrementProjectOnboardingSeenCount,
  init_projectOnboardingState,
  checkAndRestoreTerminalBackup,
  init_appleTerminalBackup,
  regenerateCompletionCache,
  init_completionCache,
  getNativeCSIuTerminalDisplayName,
  shouldOfferTerminalSetup,
  setupTerminal,
  isShiftEnterKeyBindingInstalled,
  hasUsedBackslashReturn,
  markBackslashReturnUsed,
  call,
  init_terminalSetup
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3Byb2plY3RPbmJvYXJkaW5nU3RhdGUudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2FwcGxlVGVybWluYWxCYWNrdXAudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2NvbXBsZXRpb25DYWNoZS50cyIsICIuLi8uLi9zcmMvY29tbWFuZHMvdGVybWluYWxTZXR1cC90ZXJtaW5hbFNldHVwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRQcm9qZWN0Q29uZmlnLFxuICBzYXZlQ3VycmVudFByb2plY3RDb25maWcsXG59IGZyb20gJy4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBpc0RpckVtcHR5IH0gZnJvbSAnLi91dGlscy9maWxlLmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vdXRpbHMvZnNPcGVyYXRpb25zLmpzJ1xuXG5leHBvcnQgdHlwZSBTdGVwID0ge1xuICBrZXk6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcbiAgaXNDb21wbGV0ZTogYm9vbGVhblxuICBpc0NvbXBsZXRhYmxlOiBib29sZWFuXG4gIGlzRW5hYmxlZDogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RlcHMoKTogU3RlcFtdIHtcbiAgY29uc3QgaGFzQ2xhdWRlTWQgPSBnZXRGc0ltcGxlbWVudGF0aW9uKCkuZXhpc3RzU3luYyhcbiAgICBqb2luKGdldEN3ZCgpLCAnQ0xBVURFLm1kJyksXG4gIClcbiAgY29uc3QgaXNXb3Jrc3BhY2VEaXJFbXB0eSA9IGlzRGlyRW1wdHkoZ2V0Q3dkKCkpXG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBrZXk6ICd3b3Jrc3BhY2UnLFxuICAgICAgdGV4dDogJ0FzayBDbGF1ZGUgdG8gY3JlYXRlIGEgbmV3IGFwcCBvciBjbG9uZSBhIHJlcG9zaXRvcnknLFxuICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICBpc0NvbXBsZXRhYmxlOiB0cnVlLFxuICAgICAgaXNFbmFibGVkOiBpc1dvcmtzcGFjZURpckVtcHR5LFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnY2xhdWRlbWQnLFxuICAgICAgdGV4dDogJ1J1biAvaW5pdCB0byBjcmVhdGUgYSBDTEFVREUubWQgZmlsZSB3aXRoIGluc3RydWN0aW9ucyBmb3IgQ2xhdWRlJyxcbiAgICAgIGlzQ29tcGxldGU6IGhhc0NsYXVkZU1kLFxuICAgICAgaXNDb21wbGV0YWJsZTogdHJ1ZSxcbiAgICAgIGlzRW5hYmxlZDogIWlzV29ya3NwYWNlRGlyRW1wdHksXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0U3RlcHMoKVxuICAgIC5maWx0ZXIoKHsgaXNDb21wbGV0YWJsZSwgaXNFbmFibGVkIH0pID0+IGlzQ29tcGxldGFibGUgJiYgaXNFbmFibGVkKVxuICAgIC5ldmVyeSgoeyBpc0NvbXBsZXRlIH0pID0+IGlzQ29tcGxldGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXliZU1hcmtQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKCk6IHZvaWQge1xuICAvLyBTaG9ydC1jaXJjdWl0IG9uIGNhY2hlZCBjb25maWcgXHUyMDE0IGlzUHJvamVjdE9uYm9hcmRpbmdDb21wbGV0ZSgpIGhpdHNcbiAgLy8gdGhlIGZpbGVzeXN0ZW0sIGFuZCBSRVBMLnRzeCBjYWxscyB0aGlzIG9uIGV2ZXJ5IHByb21wdCBzdWJtaXQuXG4gIGlmIChnZXRDdXJyZW50UHJvamVjdENvbmZpZygpLmhhc0NvbXBsZXRlZFByb2plY3RPbmJvYXJkaW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGlzUHJvamVjdE9uYm9hcmRpbmdDb21wbGV0ZSgpKSB7XG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBoYXNDb21wbGV0ZWRQcm9qZWN0T25ib2FyZGluZzogdHJ1ZSxcbiAgICB9KSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdWxkU2hvd1Byb2plY3RPbmJvYXJkaW5nID0gbWVtb2l6ZSgoKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHByb2plY3RDb25maWcgPSBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpXG4gIC8vIFNob3J0LWNpcmN1aXQgb24gY2FjaGVkIGNvbmZpZyBiZWZvcmUgaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKClcbiAgLy8gaGl0cyB0aGUgZmlsZXN5c3RlbSBcdTIwMTQgdGhpcyBydW5zIGR1cmluZyBmaXJzdCByZW5kZXIuXG4gIGlmIChcbiAgICBwcm9qZWN0Q29uZmlnLmhhc0NvbXBsZXRlZFByb2plY3RPbmJvYXJkaW5nIHx8XG4gICAgcHJvamVjdENvbmZpZy5wcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCA+PSA0IHx8XG4gICAgcHJvY2Vzcy5lbnYuSVNfREVNT1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAhaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRQcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCgpOiB2b2lkIHtcbiAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIHByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50OiBjdXJyZW50LnByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50ICsgMSxcbiAgfSkpXG59XG4iLCAiaW1wb3J0IHsgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4vZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmV4cG9ydCBmdW5jdGlvbiBtYXJrVGVybWluYWxTZXR1cEluUHJvZ3Jlc3MoYmFja3VwUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgIC4uLmN1cnJlbnQsXG4gICAgYXBwbGVUZXJtaW5hbFNldHVwSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICBhcHBsZVRlcm1pbmFsQmFja3VwUGF0aDogYmFja3VwUGF0aCxcbiAgfSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlKCk6IHZvaWQge1xuICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIGFwcGxlVGVybWluYWxTZXR1cEluUHJvZ3Jlc3M6IGZhbHNlLFxuICB9KSlcbn1cblxuZnVuY3Rpb24gZ2V0VGVybWluYWxSZWNvdmVyeUluZm8oKToge1xuICBpblByb2dyZXNzOiBib29sZWFuXG4gIGJhY2t1cFBhdGg6IHN0cmluZyB8IG51bGxcbn0ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICByZXR1cm4ge1xuICAgIGluUHJvZ3Jlc3M6IGNvbmZpZy5hcHBsZVRlcm1pbmFsU2V0dXBJblByb2dyZXNzID8/IGZhbHNlLFxuICAgIGJhY2t1cFBhdGg6IGNvbmZpZy5hcHBsZVRlcm1pbmFsQmFja3VwUGF0aCB8fCBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJtaW5hbFBsaXN0UGF0aCgpOiBzdHJpbmcge1xuICByZXR1cm4gam9pbihob21lZGlyKCksICdMaWJyYXJ5JywgJ1ByZWZlcmVuY2VzJywgJ2NvbS5hcHBsZS5UZXJtaW5hbC5wbGlzdCcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYWNrdXBUZXJtaW5hbFByZWZlcmVuY2VzKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBjb25zdCB0ZXJtaW5hbFBsaXN0UGF0aCA9IGdldFRlcm1pbmFsUGxpc3RQYXRoKClcbiAgY29uc3QgYmFja3VwUGF0aCA9IGAke3Rlcm1pbmFsUGxpc3RQYXRofS5iYWtgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZGVmYXVsdHMnLCBbXG4gICAgICAnZXhwb3J0JyxcbiAgICAgICdjb20uYXBwbGUuVGVybWluYWwnLFxuICAgICAgdGVybWluYWxQbGlzdFBhdGgsXG4gICAgXSlcblxuICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdGF0KHRlcm1pbmFsUGxpc3RQYXRoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2RlZmF1bHRzJywgW1xuICAgICAgJ2V4cG9ydCcsXG4gICAgICAnY29tLmFwcGxlLlRlcm1pbmFsJyxcbiAgICAgIGJhY2t1cFBhdGgsXG4gICAgXSlcblxuICAgIG1hcmtUZXJtaW5hbFNldHVwSW5Qcm9ncmVzcyhiYWNrdXBQYXRoKVxuXG4gICAgcmV0dXJuIGJhY2t1cFBhdGhcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgUmVzdG9yZVJlc3VsdCA9XG4gIHwge1xuICAgICAgc3RhdHVzOiAncmVzdG9yZWQnIHwgJ25vX2JhY2t1cCdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgICAgYmFja3VwUGF0aDogc3RyaW5nXG4gICAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbmRSZXN0b3JlVGVybWluYWxCYWNrdXAoKTogUHJvbWlzZTxSZXN0b3JlUmVzdWx0PiB7XG4gIGNvbnN0IHsgaW5Qcm9ncmVzcywgYmFja3VwUGF0aCB9ID0gZ2V0VGVybWluYWxSZWNvdmVyeUluZm8oKVxuICBpZiAoIWluUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub19iYWNrdXAnIH1cbiAgfVxuXG4gIGlmICghYmFja3VwUGF0aCkge1xuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzdGF0KGJhY2t1cFBhdGgpXG4gIH0gY2F0Y2gge1xuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZGVmYXVsdHMnLCBbXG4gICAgICAnaW1wb3J0JyxcbiAgICAgICdjb20uYXBwbGUuVGVybWluYWwnLFxuICAgICAgYmFja3VwUGF0aCxcbiAgICBdKVxuXG4gICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogJ2ZhaWxlZCcsIGJhY2t1cFBhdGggfVxuICAgIH1cblxuICAgIGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygna2lsbGFsbCcsIFsnY2ZwcmVmc2QnXSlcblxuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ3Jlc3RvcmVkJyB9XG4gIH0gY2F0Y2ggKHJlc3RvcmVFcnJvcikge1xuICAgIGxvZ0Vycm9yKFxuICAgICAgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHJlc3RvcmUgVGVybWluYWwuYXBwIHNldHRpbmdzIHdpdGg6ICR7cmVzdG9yZUVycm9yfWAsXG4gICAgICApLFxuICAgIClcbiAgICBtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlKClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdmYWlsZWQnLCBiYWNrdXBQYXRoIH1cbiAgfVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IG1rZGlyLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHBhdGhUb0ZpbGVVUkwgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9jb2xvci5qcydcbmltcG9ydCB7IHN1cHBvcnRzSHlwZXJsaW5rcyB9IGZyb20gJy4uL2luay9zdXBwb3J0cy1oeXBlcmxpbmtzLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRU5PRU5UIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lTmFtZSB9IGZyb20gJy4vdGhlbWUuanMnXG5cbmNvbnN0IEVPTCA9ICdcXG4nXG5cbnR5cGUgU2hlbGxJbmZvID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgcmNGaWxlOiBzdHJpbmdcbiAgY2FjaGVGaWxlOiBzdHJpbmdcbiAgY29tcGxldGlvbkxpbmU6IHN0cmluZ1xuICBzaGVsbEZsYWc6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZXRlY3RTaGVsbCgpOiBTaGVsbEluZm8gfCBudWxsIHtcbiAgY29uc3Qgc2hlbGwgPSBwcm9jZXNzLmVudi5TSEVMTCB8fCAnJ1xuICBjb25zdCBob21lID0gaG9tZWRpcigpXG4gIGNvbnN0IGNsYXVkZURpciA9IGpvaW4oaG9tZSwgJy5jbGF1ZGUnKVxuXG4gIGlmIChzaGVsbC5lbmRzV2l0aCgnL3pzaCcpIHx8IHNoZWxsLmVuZHNXaXRoKCcvenNoLmV4ZScpKSB7XG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLnpzaCcpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd6c2gnLFxuICAgICAgcmNGaWxlOiBqb2luKGhvbWUsICcuenNocmMnKSxcbiAgICAgIGNhY2hlRmlsZSxcbiAgICAgIGNvbXBsZXRpb25MaW5lOiBgW1sgLWYgXCIke2NhY2hlRmlsZX1cIiBdXSAmJiBzb3VyY2UgXCIke2NhY2hlRmlsZX1cImAsXG4gICAgICBzaGVsbEZsYWc6ICd6c2gnLFxuICAgIH1cbiAgfVxuICBpZiAoc2hlbGwuZW5kc1dpdGgoJy9iYXNoJykgfHwgc2hlbGwuZW5kc1dpdGgoJy9iYXNoLmV4ZScpKSB7XG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLmJhc2gnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnYmFzaCcsXG4gICAgICByY0ZpbGU6IGpvaW4oaG9tZSwgJy5iYXNocmMnKSxcbiAgICAgIGNhY2hlRmlsZSxcbiAgICAgIGNvbXBsZXRpb25MaW5lOiBgWyAtZiBcIiR7Y2FjaGVGaWxlfVwiIF0gJiYgc291cmNlIFwiJHtjYWNoZUZpbGV9XCJgLFxuICAgICAgc2hlbGxGbGFnOiAnYmFzaCcsXG4gICAgfVxuICB9XG4gIGlmIChzaGVsbC5lbmRzV2l0aCgnL2Zpc2gnKSB8fCBzaGVsbC5lbmRzV2l0aCgnL2Zpc2guZXhlJykpIHtcbiAgICBjb25zdCB4ZGcgPSBwcm9jZXNzLmVudi5YREdfQ09ORklHX0hPTUUgfHwgam9pbihob21lLCAnLmNvbmZpZycpXG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLmZpc2gnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnZmlzaCcsXG4gICAgICByY0ZpbGU6IGpvaW4oeGRnLCAnZmlzaCcsICdjb25maWcuZmlzaCcpLFxuICAgICAgY2FjaGVGaWxlLFxuICAgICAgY29tcGxldGlvbkxpbmU6IGBbIC1mIFwiJHtjYWNoZUZpbGV9XCIgXSAmJiBzb3VyY2UgXCIke2NhY2hlRmlsZX1cImAsXG4gICAgICBzaGVsbEZsYWc6ICdmaXNoJyxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGF0aExpbmsoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghc3VwcG9ydHNIeXBlcmxpbmtzKCkpIHtcbiAgICByZXR1cm4gZmlsZVBhdGhcbiAgfVxuICBjb25zdCBmaWxlVXJsID0gcGF0aFRvRmlsZVVSTChmaWxlUGF0aCkuaHJlZlxuICByZXR1cm4gYFxceDFiXTg7OyR7ZmlsZVVybH1cXHgwNyR7ZmlsZVBhdGh9XFx4MWJdODs7XFx4MDdgXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW5kIGNhY2hlIHRoZSBjb21wbGV0aW9uIHNjcmlwdCwgdGhlbiBhZGQgYSBzb3VyY2UgbGluZSB0byB0aGVcbiAqIHNoZWxsJ3MgcmMgZmlsZS4gUmV0dXJucyBhIHVzZXItZmFjaW5nIHN0YXR1cyBtZXNzYWdlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBTaGVsbENvbXBsZXRpb24odGhlbWU6IFRoZW1lTmFtZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHNoZWxsID0gZGV0ZWN0U2hlbGwoKVxuICBpZiAoIXNoZWxsKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBFbnN1cmUgdGhlIGNhY2hlIGRpcmVjdG9yeSBleGlzdHNcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihkaXJuYW1lKHNoZWxsLmNhY2hlRmlsZSksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBsb2dFcnJvcihlKVxuICAgIHJldHVybiBgJHtFT0x9JHtjb2xvcignd2FybmluZycsIHRoZW1lKShgQ291bGQgbm90IHdyaXRlICR7c2hlbGwubmFtZX0gY29tcGxldGlvbiBjYWNoZWApfSR7RU9MfSR7Y2hhbGsuZGltKGBSdW4gbWFudWFsbHk6IGNsYXVkZSBjb21wbGV0aW9uICR7c2hlbGwuc2hlbGxGbGFnfSA+ICR7c2hlbGwuY2FjaGVGaWxlfWApfSR7RU9MfWBcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBjb21wbGV0aW9uIHNjcmlwdCBieSB3cml0aW5nIGRpcmVjdGx5IHRvIHRoZSBjYWNoZSBmaWxlLlxuICAvLyBVc2luZyAtLW91dHB1dCBhdm9pZHMgcGlwaW5nIHRocm91Z2ggc3Rkb3V0IHdoZXJlIHByb2Nlc3MuZXhpdCgpIGNhblxuICAvLyB0cnVuY2F0ZSBvdXRwdXQgYmVmb3JlIHRoZSBwaXBlIGJ1ZmZlciBkcmFpbnMuXG4gIGNvbnN0IGNsYXVkZUJpbiA9IHByb2Nlc3MuYXJndlsxXSB8fCAnY2xhdWRlJ1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coY2xhdWRlQmluLCBbXG4gICAgJ2NvbXBsZXRpb24nLFxuICAgIHNoZWxsLnNoZWxsRmxhZyxcbiAgICAnLS1vdXRwdXQnLFxuICAgIHNoZWxsLmNhY2hlRmlsZSxcbiAgXSlcbiAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCd3YXJuaW5nJywgdGhlbWUpKGBDb3VsZCBub3QgZ2VuZXJhdGUgJHtzaGVsbC5uYW1lfSBzaGVsbCBjb21wbGV0aW9uc2ApfSR7RU9MfSR7Y2hhbGsuZGltKGBSdW4gbWFudWFsbHk6IGNsYXVkZSBjb21wbGV0aW9uICR7c2hlbGwuc2hlbGxGbGFnfSA+ICR7c2hlbGwuY2FjaGVGaWxlfWApfSR7RU9MfWBcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHJjIGZpbGUgYWxyZWFkeSBzb3VyY2VzIGNvbXBsZXRpb25zXG4gIGxldCBleGlzdGluZyA9ICcnXG4gIHRyeSB7XG4gICAgZXhpc3RpbmcgPSBhd2FpdCByZWFkRmlsZShzaGVsbC5yY0ZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICBpZiAoXG4gICAgICBleGlzdGluZy5pbmNsdWRlcygnY2xhdWRlIGNvbXBsZXRpb24nKSB8fFxuICAgICAgZXhpc3RpbmcuaW5jbHVkZXMoc2hlbGwuY2FjaGVGaWxlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCdzdWNjZXNzJywgdGhlbWUpKGBTaGVsbCBjb21wbGV0aW9ucyB1cGRhdGVkIGZvciAke3NoZWxsLm5hbWV9YCl9JHtFT0x9JHtjaGFsay5kaW0oYFNlZSAke2Zvcm1hdFBhdGhMaW5rKHNoZWxsLnJjRmlsZSl9YCl9JHtFT0x9YFxuICAgIH1cbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGlmICghaXNFTk9FTlQoZSkpIHtcbiAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICByZXR1cm4gYCR7RU9MfSR7Y29sb3IoJ3dhcm5pbmcnLCB0aGVtZSkoYENvdWxkIG5vdCBpbnN0YWxsICR7c2hlbGwubmFtZX0gc2hlbGwgY29tcGxldGlvbnNgKX0ke0VPTH0ke2NoYWxrLmRpbShgQWRkIHRoaXMgdG8gJHtmb3JtYXRQYXRoTGluayhzaGVsbC5yY0ZpbGUpfTpgKX0ke0VPTH0ke2NoYWxrLmRpbShzaGVsbC5jb21wbGV0aW9uTGluZSl9JHtFT0x9YFxuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGVuZCBzb3VyY2UgbGluZSB0byByYyBmaWxlXG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnRGlyID0gZGlybmFtZShzaGVsbC5yY0ZpbGUpXG4gICAgYXdhaXQgbWtkaXIoY29uZmlnRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gZXhpc3RpbmcgJiYgIWV4aXN0aW5nLmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJydcbiAgICBjb25zdCBjb250ZW50ID0gYCR7ZXhpc3Rpbmd9JHtzZXBhcmF0b3J9XFxuIyBDbGF1ZGUgQ29kZSBzaGVsbCBjb21wbGV0aW9uc1xcbiR7c2hlbGwuY29tcGxldGlvbkxpbmV9XFxuYFxuICAgIGF3YWl0IHdyaXRlRmlsZShzaGVsbC5yY0ZpbGUsIGNvbnRlbnQsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcblxuICAgIHJldHVybiBgJHtFT0x9JHtjb2xvcignc3VjY2VzcycsIHRoZW1lKShgSW5zdGFsbGVkICR7c2hlbGwubmFtZX0gc2hlbGwgY29tcGxldGlvbnNgKX0ke0VPTH0ke2NoYWxrLmRpbShgQWRkZWQgdG8gJHtmb3JtYXRQYXRoTGluayhzaGVsbC5yY0ZpbGUpfWApfSR7RU9MfSR7Y2hhbGsuZGltKGBSdW46IHNvdXJjZSAke3NoZWxsLnJjRmlsZX1gKX0ke0VPTH1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCd3YXJuaW5nJywgdGhlbWUpKGBDb3VsZCBub3QgaW5zdGFsbCAke3NoZWxsLm5hbWV9IHNoZWxsIGNvbXBsZXRpb25zYCl9JHtFT0x9JHtjaGFsay5kaW0oYEFkZCB0aGlzIHRvICR7Zm9ybWF0UGF0aExpbmsoc2hlbGwucmNGaWxlKX06YCl9JHtFT0x9JHtjaGFsay5kaW0oc2hlbGwuY29tcGxldGlvbkxpbmUpfSR7RU9MfWBcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2VuZXJhdGUgY2FjaGVkIHNoZWxsIGNvbXBsZXRpb24gc2NyaXB0cyBpbiB+Ly5jbGF1ZGUvLlxuICogQ2FsbGVkIGFmdGVyIGBjbGF1ZGUgdXBkYXRlYCBzbyBjb21wbGV0aW9ucyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgbmV3IGJpbmFyeS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2VuZXJhdGVDb21wbGV0aW9uQ2FjaGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHNoZWxsID0gZGV0ZWN0U2hlbGwoKVxuICBpZiAoIXNoZWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoYHVwZGF0ZTogUmVnZW5lcmF0aW5nICR7c2hlbGwubmFtZX0gY29tcGxldGlvbiBjYWNoZWApXG5cbiAgY29uc3QgY2xhdWRlQmluID0gcHJvY2Vzcy5hcmd2WzFdIHx8ICdjbGF1ZGUnXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhjbGF1ZGVCaW4sIFtcbiAgICAnY29tcGxldGlvbicsXG4gICAgc2hlbGwuc2hlbGxGbGFnLFxuICAgICctLW91dHB1dCcsXG4gICAgc2hlbGwuY2FjaGVGaWxlLFxuICBdKVxuXG4gIGlmIChyZXN1bHQuY29kZSAhPT0gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGB1cGRhdGU6IEZhaWxlZCB0byByZWdlbmVyYXRlICR7c2hlbGwubmFtZX0gY29tcGxldGlvbiBjYWNoZWAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGB1cGRhdGU6IFJlZ2VuZXJhdGVkICR7c2hlbGwubmFtZX0gY29tcGxldGlvbiBjYWNoZSBhdCAke3NoZWxsLmNhY2hlRmlsZX1gLFxuICApXG59XG4iLCAiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBjb3B5RmlsZSwgbWtkaXIsIHJlYWRGaWxlLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGhvbWVkaXIsIHBsYXRmb3JtIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB0eXBlIHsgVGhlbWVOYW1lIH0gZnJvbSAnc3JjL3V0aWxzL3RoZW1lLmpzJ1xuaW1wb3J0IHsgcGF0aFRvRmlsZVVSTCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IHN1cHBvcnRzSHlwZXJsaW5rcyB9IGZyb20gJy4uLy4uL2luay9zdXBwb3J0cy1oeXBlcmxpbmtzLmpzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBtYXliZU1hcmtQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vcHJvamVjdE9uYm9hcmRpbmdTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFVzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG59IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQge1xuICBiYWNrdXBUZXJtaW5hbFByZWZlcmVuY2VzLFxuICBjaGVja0FuZFJlc3RvcmVUZXJtaW5hbEJhY2t1cCxcbiAgZ2V0VGVybWluYWxQbGlzdFBhdGgsXG4gIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwcGxlVGVybWluYWxCYWNrdXAuanMnXG5pbXBvcnQgeyBzZXR1cFNoZWxsQ29tcGxldGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBsZXRpb25DYWNoZS5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudi5qcydcbmltcG9ydCB7IGlzRnNJbmFjY2Vzc2libGUgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi8uLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBhZGRJdGVtVG9KU09OQ0FycmF5LCBzYWZlUGFyc2VKU09OQyB9IGZyb20gJy4uLy4uL3V0aWxzL2pzb24uanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGxhdGZvcm0uanMnXG5pbXBvcnQgeyBqc29uUGFyc2UsIGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcblxuY29uc3QgRU9MID0gJ1xcbidcblxuLy8gVGVybWluYWxzIHRoYXQgbmF0aXZlbHkgc3VwcG9ydCBDU0kgdSAvIEtpdHR5IGtleWJvYXJkIHByb3RvY29sXG5jb25zdCBOQVRJVkVfQ1NJVV9URVJNSU5BTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGdob3N0dHk6ICdHaG9zdHR5JyxcbiAga2l0dHk6ICdLaXR0eScsXG4gICdpVGVybS5hcHAnOiAnaVRlcm0yJyxcbiAgV2V6VGVybTogJ1dlelRlcm0nLFxuICBXYXJwVGVybWluYWw6ICdXYXJwJyxcbn1cblxuLyoqXG4gKiBEZXRlY3QgaWYgd2UncmUgcnVubmluZyBpbiBhIFZTQ29kZSBSZW1vdGUgU1NIIHNlc3Npb24uXG4gKiBJbiB0aGlzIGNhc2UsIGtleWJpbmRpbmdzIG5lZWQgdG8gYmUgaW5zdGFsbGVkIG9uIHRoZSBMT0NBTCBtYWNoaW5lLFxuICogbm90IHRoZSByZW1vdGUgc2VydmVyIHdoZXJlIENsYXVkZSBpcyBydW5uaW5nLlxuICovXG5mdW5jdGlvbiBpc1ZTQ29kZVJlbW90ZVNTSCgpOiBib29sZWFuIHtcbiAgY29uc3QgYXNrcGFzc01haW4gPSBwcm9jZXNzLmVudi5WU0NPREVfR0lUX0FTS1BBU1NfTUFJTiA/PyAnJ1xuICBjb25zdCBwYXRoID0gcHJvY2Vzcy5lbnYuUEFUSCA/PyAnJ1xuXG4gIC8vIENoZWNrIGJvdGggZW52IHZhcnMgLSBWU0NPREVfR0lUX0FTS1BBU1NfTUFJTiBpcyBtb3JlIHJlbGlhYmxlIHdoZW4gZ2l0IGV4dGVuc2lvblxuICAvLyBpcyBhY3RpdmUsIGFuZCBQQVRIIGlzIGEgZmFsbGJhY2suIE9taXQgcGF0aCBzZXBhcmF0b3IgZm9yIFdpbmRvd3MgY29tcGF0aWJpbGl0eS5cbiAgcmV0dXJuIChcbiAgICBhc2twYXNzTWFpbi5pbmNsdWRlcygnLnZzY29kZS1zZXJ2ZXInKSB8fFxuICAgIGFza3Bhc3NNYWluLmluY2x1ZGVzKCcuY3Vyc29yLXNlcnZlcicpIHx8XG4gICAgYXNrcGFzc01haW4uaW5jbHVkZXMoJy53aW5kc3VyZi1zZXJ2ZXInKSB8fFxuICAgIHBhdGguaW5jbHVkZXMoJy52c2NvZGUtc2VydmVyJykgfHxcbiAgICBwYXRoLmluY2x1ZGVzKCcuY3Vyc29yLXNlcnZlcicpIHx8XG4gICAgcGF0aC5pbmNsdWRlcygnLndpbmRzdXJmLXNlcnZlcicpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUNTSXVUZXJtaW5hbERpc3BsYXlOYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWVudi50ZXJtaW5hbCB8fCAhKGVudi50ZXJtaW5hbCBpbiBOQVRJVkVfQ1NJVV9URVJNSU5BTFMpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gTkFUSVZFX0NTSVVfVEVSTUlOQUxTW2Vudi50ZXJtaW5hbF0gPz8gbnVsbFxufVxuXG4vKipcbiAqIEZvcm1hdCBhIGZpbGUgcGF0aCBhcyBhIGNsaWNrYWJsZSBoeXBlcmxpbmsuXG4gKlxuICogUGF0aHMgY29udGFpbmluZyBzcGFjZXMgKGUuZy4sIFwiQXBwbGljYXRpb24gU3VwcG9ydFwiKSBhcmUgbm90IGNsaWNrYWJsZVxuICogaW4gbW9zdCB0ZXJtaW5hbHMgLSB0aGV5IGdldCBzcGxpdCBhdCB0aGUgc3BhY2UuIE9TQyA4IGh5cGVybGlua3Mgc29sdmVcbiAqIHRoaXMgYnkgZW1iZWRkaW5nIGEgZmlsZTovLyBVUkwgdGhhdCB0aGUgdGVybWluYWwgY2FuIG9wZW4gb24gY2xpY2ssXG4gKiB3aGlsZSBkaXNwbGF5aW5nIHRoZSBjbGVhbiBwYXRoIHRvIHRoZSB1c2VyLlxuICpcbiAqIFVubGlrZSBjcmVhdGVIeXBlcmxpbmsoKSwgdGhpcyBkb2Vzbid0IGFwcGx5IGFueSBjb2xvciBzdHlsaW5nIHNvIHRoZVxuICogcGF0aCBpbmhlcml0cyB0aGUgcGFyZW50J3Mgc3R5bGluZyAoZS5nLiwgY2hhbGsuZGltKS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0UGF0aExpbmsoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghc3VwcG9ydHNIeXBlcmxpbmtzKCkpIHtcbiAgICByZXR1cm4gZmlsZVBhdGhcbiAgfVxuICBjb25zdCBmaWxlVXJsID0gcGF0aFRvRmlsZVVSTChmaWxlUGF0aCkuaHJlZlxuICAvLyBPU0MgOCBoeXBlcmxpbms6IFxcZV04OztVUkxcXGEgVEVYVCBcXGVdODs7XFxhXG4gIHJldHVybiBgXFx4MWJdODs7JHtmaWxlVXJsfVxceDA3JHtmaWxlUGF0aH1cXHgxYl04OztcXHgwN2Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZE9mZmVyVGVybWluYWxTZXR1cCgpOiBib29sZWFuIHtcbiAgLy8gaVRlcm0yLCBXZXpUZXJtLCBHaG9zdHR5LCBLaXR0eSwgYW5kIFdhcnAgbmF0aXZlbHkgc3VwcG9ydCBDU0kgdSAvIEtpdHR5XG4gIC8vIGtleWJvYXJkIHByb3RvY29sLCB3aGljaCBDbGF1ZGUgQ29kZSBhbHJlYWR5IHBhcnNlcy4gTm8gc2V0dXAgbmVlZGVkIGZvclxuICAvLyB0aGVzZSB0ZXJtaW5hbHMuXG4gIHJldHVybiAoXG4gICAgKHBsYXRmb3JtKCkgPT09ICdkYXJ3aW4nICYmIGVudi50ZXJtaW5hbCA9PT0gJ0FwcGxlX1Rlcm1pbmFsJykgfHxcbiAgICBlbnYudGVybWluYWwgPT09ICd2c2NvZGUnIHx8XG4gICAgZW52LnRlcm1pbmFsID09PSAnY3Vyc29yJyB8fFxuICAgIGVudi50ZXJtaW5hbCA9PT0gJ3dpbmRzdXJmJyB8fFxuICAgIGVudi50ZXJtaW5hbCA9PT0gJ2FsYWNyaXR0eScgfHxcbiAgICBlbnYudGVybWluYWwgPT09ICd6ZWQnXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwVGVybWluYWwodGhlbWU6IFRoZW1lTmFtZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGxldCByZXN1bHQgPSAnJ1xuXG4gIHN3aXRjaCAoZW52LnRlcm1pbmFsKSB7XG4gICAgY2FzZSAnQXBwbGVfVGVybWluYWwnOlxuICAgICAgcmVzdWx0ID0gYXdhaXQgZW5hYmxlT3B0aW9uQXNNZXRhRm9yVGVybWluYWwodGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3ZzY29kZSc6XG4gICAgICByZXN1bHQgPSBhd2FpdCBpbnN0YWxsQmluZGluZ3NGb3JWU0NvZGVUZXJtaW5hbCgnVlNDb2RlJywgdGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2N1cnNvcic6XG4gICAgICByZXN1bHQgPSBhd2FpdCBpbnN0YWxsQmluZGluZ3NGb3JWU0NvZGVUZXJtaW5hbCgnQ3Vyc29yJywgdGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3dpbmRzdXJmJzpcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGluc3RhbGxCaW5kaW5nc0ZvclZTQ29kZVRlcm1pbmFsKCdXaW5kc3VyZicsIHRoZW1lKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbGFjcml0dHknOlxuICAgICAgcmVzdWx0ID0gYXdhaXQgaW5zdGFsbEJpbmRpbmdzRm9yQWxhY3JpdHR5KHRoZW1lKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd6ZWQnOlxuICAgICAgcmVzdWx0ID0gYXdhaXQgaW5zdGFsbEJpbmRpbmdzRm9yWmVkKHRoZW1lKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIG51bGw6XG4gICAgICBicmVha1xuICB9XG5cbiAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+IHtcbiAgICBpZiAoXG4gICAgICBbJ3ZzY29kZScsICdjdXJzb3InLCAnd2luZHN1cmYnLCAnYWxhY3JpdHR5JywgJ3plZCddLmluY2x1ZGVzKFxuICAgICAgICBlbnYudGVybWluYWwgPz8gJycsXG4gICAgICApXG4gICAgKSB7XG4gICAgICBpZiAoY3VycmVudC5zaGlmdEVudGVyS2V5QmluZGluZ0luc3RhbGxlZCA9PT0gdHJ1ZSkgcmV0dXJuIGN1cnJlbnRcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIHNoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkOiB0cnVlIH1cbiAgICB9IGVsc2UgaWYgKGVudi50ZXJtaW5hbCA9PT0gJ0FwcGxlX1Rlcm1pbmFsJykge1xuICAgICAgaWYgKGN1cnJlbnQub3B0aW9uQXNNZXRhS2V5SW5zdGFsbGVkID09PSB0cnVlKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgb3B0aW9uQXNNZXRhS2V5SW5zdGFsbGVkOiB0cnVlIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfSlcblxuICBtYXliZU1hcmtQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKClcblxuICAvLyBJbnN0YWxsIHNoZWxsIGNvbXBsZXRpb25zIChhbnQtb25seSwgc2luY2UgdGhlIGNvbXBsZXRpb24gY29tbWFuZCBpcyBhbnQtb25seSlcbiAgaWYgKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcpIHtcbiAgICByZXN1bHQgKz0gYXdhaXQgc2V0dXBTaGVsbENvbXBsZXRpb24odGhlbWUpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0R2xvYmFsQ29uZmlnKCkuc2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWQgPT09IHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1VzZWRCYWNrc2xhc2hSZXR1cm4oKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRHbG9iYWxDb25maWcoKS5oYXNVc2VkQmFja3NsYXNoUmV0dXJuID09PSB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQmFja3NsYXNoUmV0dXJuVXNlZCgpOiB2b2lkIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgaWYgKCFjb25maWcuaGFzVXNlZEJhY2tzbGFzaFJldHVybikge1xuICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIGhhc1VzZWRCYWNrc2xhc2hSZXR1cm46IHRydWUsXG4gICAgfSkpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBUb29sVXNlQ29udGV4dCAmIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIF9hcmdzOiBzdHJpbmcsXG4pOiBQcm9taXNlPG51bGw+IHtcbiAgaWYgKGVudi50ZXJtaW5hbCAmJiBlbnYudGVybWluYWwgaW4gTkFUSVZFX0NTSVVfVEVSTUlOQUxTKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBTaGlmdCtFbnRlciBpcyBuYXRpdmVseSBzdXBwb3J0ZWQgaW4gJHtOQVRJVkVfQ1NJVV9URVJNSU5BTFNbZW52LnRlcm1pbmFsXX0uXG5cbk5vIGNvbmZpZ3VyYXRpb24gbmVlZGVkLiBKdXN0IHVzZSBTaGlmdCtFbnRlciB0byBhZGQgbmV3bGluZXMuYFxuICAgIG9uRG9uZShtZXNzYWdlKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDaGVjayBpZiB0ZXJtaW5hbCBpcyBzdXBwb3J0ZWRcbiAgaWYgKCFzaG91bGRPZmZlclRlcm1pbmFsU2V0dXAoKSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTmFtZSA9IGVudi50ZXJtaW5hbCB8fCAneW91ciBjdXJyZW50IHRlcm1pbmFsJ1xuICAgIGNvbnN0IGN1cnJlbnRQbGF0Zm9ybSA9IGdldFBsYXRmb3JtKClcblxuICAgIC8vIEJ1aWxkIHBsYXRmb3JtLXNwZWNpZmljIHRlcm1pbmFsIHN1Z2dlc3Rpb25zXG4gICAgbGV0IHBsYXRmb3JtVGVybWluYWxzID0gJydcbiAgICBpZiAoY3VycmVudFBsYXRmb3JtID09PSAnbWFjb3MnKSB7XG4gICAgICBwbGF0Zm9ybVRlcm1pbmFscyA9ICcgICDigKIgbWFjT1M6IEFwcGxlIFRlcm1pbmFsXFxuJ1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXRmb3JtID09PSAnd2luZG93cycpIHtcbiAgICAgIHBsYXRmb3JtVGVybWluYWxzID0gJyAgIOKAoiBXaW5kb3dzOiBXaW5kb3dzIFRlcm1pbmFsXFxuJ1xuICAgIH1cbiAgICAvLyBGb3IgTGludXggYW5kIG90aGVyIHBsYXRmb3Jtcywgd2UgZG9uJ3Qgc2hvdyBuYXRpdmUgdGVybWluYWwgb3B0aW9uc1xuICAgIC8vIHNpbmNlIHRoZXkncmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWRcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGVybWluYWwgc2V0dXAgY2Fubm90IGJlIHJ1biBmcm9tICR7dGVybWluYWxOYW1lfS5cblxuVGhpcyBjb21tYW5kIGNvbmZpZ3VyZXMgYSBjb252ZW5pZW50IFNoaWZ0K0VudGVyIHNob3J0Y3V0IGZvciBtdWx0aS1saW5lIHByb21wdHMuXG4ke2NoYWxrLmRpbSgnTm90ZTogWW91IGNhbiBhbHJlYWR5IHVzZSBiYWNrc2xhc2ggKFxcXFxcXFxcKSArIHJldHVybiB0byBhZGQgbmV3bGluZXMuJyl9XG5cblRvIHNldCB1cCB0aGUgc2hvcnRjdXQgKG9wdGlvbmFsKTpcbjEuIEV4aXQgdG11eC9zY3JlZW4gdGVtcG9yYXJpbHlcbjIuIFJ1biAvdGVybWluYWwtc2V0dXAgZGlyZWN0bHkgaW4gb25lIG9mIHRoZXNlIHRlcm1pbmFsczpcbiR7cGxhdGZvcm1UZXJtaW5hbHN9ICAg4oCiIElERTogVlNDb2RlLCBDdXJzb3IsIFdpbmRzdXJmLCBaZWRcbiAgIOKAoiBPdGhlcjogQWxhY3JpdHR5XG4zLiBSZXR1cm4gdG8gdG11eC9zY3JlZW4gLSBzZXR0aW5ncyB3aWxsIHBlcnNpc3RcblxuJHtjaGFsay5kaW0oJ05vdGU6IGlUZXJtMiwgV2V6VGVybSwgR2hvc3R0eSwgS2l0dHksIGFuZCBXYXJwIHN1cHBvcnQgU2hpZnQrRW50ZXIgbmF0aXZlbHkuJyl9YFxuICAgIG9uRG9uZShtZXNzYWdlKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXR1cFRlcm1pbmFsKGNvbnRleHQub3B0aW9ucy50aGVtZSlcbiAgb25Eb25lKHJlc3VsdClcbiAgcmV0dXJuIG51bGxcbn1cblxudHlwZSBWU0NvZGVLZXliaW5kaW5nID0ge1xuICBrZXk6IHN0cmluZ1xuICBjb21tYW5kOiBzdHJpbmdcbiAgYXJnczogeyB0ZXh0OiBzdHJpbmcgfVxuICB3aGVuOiBzdHJpbmdcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zdGFsbEJpbmRpbmdzRm9yVlNDb2RlVGVybWluYWwoXG4gIGVkaXRvcjogJ1ZTQ29kZScgfCAnQ3Vyc29yJyB8ICdXaW5kc3VyZicgPSAnVlNDb2RlJyxcbiAgdGhlbWU6IFRoZW1lTmFtZSxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIENoZWNrIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBWU0NvZGUgUmVtb3RlIFNTSCBzZXNzaW9uXG4gIC8vIEluIHRoaXMgY2FzZSwga2V5YmluZGluZ3MgbmVlZCB0byBiZSBpbnN0YWxsZWQgb24gdGhlIExPQ0FMIG1hY2hpbmVcbiAgaWYgKGlzVlNDb2RlUmVtb3RlU1NIKCkpIHtcbiAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAnd2FybmluZycsXG4gICAgICB0aGVtZSxcbiAgICApKFxuICAgICAgYENhbm5vdCBpbnN0YWxsIGtleWJpbmRpbmdzIGZyb20gYSByZW1vdGUgJHtlZGl0b3J9IHNlc3Npb24uYCxcbiAgICApfSR7RU9MfSR7RU9MfSR7ZWRpdG9yfSBrZXliaW5kaW5ncyBtdXN0IGJlIGluc3RhbGxlZCBvbiB5b3VyIGxvY2FsIG1hY2hpbmUsIG5vdCB0aGUgcmVtb3RlIHNlcnZlci4ke0VPTH0ke0VPTH1UbyBpbnN0YWxsIHRoZSBTaGlmdCtFbnRlciBrZXliaW5kaW5nOiR7RU9MfTEuIE9wZW4gJHtlZGl0b3J9IG9uIHlvdXIgbG9jYWwgbWFjaGluZSAobm90IGNvbm5lY3RlZCB0byByZW1vdGUpJHtFT0x9Mi4gT3BlbiB0aGUgQ29tbWFuZCBQYWxldHRlIChDbWQvQ3RybCtTaGlmdCtQKSDihpIgXCJQcmVmZXJlbmNlczogT3BlbiBLZXlib2FyZCBTaG9ydGN1dHMgKEpTT04pXCIke0VPTH0zLiBBZGQgdGhpcyBrZXliaW5kaW5nICh0aGUgZmlsZSBtdXN0IGJlIGEgSlNPTiBhcnJheSk6JHtFT0x9JHtFT0x9JHtjaGFsay5kaW0oYFtcbiAge1xuICAgIFwia2V5XCI6IFwic2hpZnQrZW50ZXJcIixcbiAgICBcImNvbW1hbmRcIjogXCJ3b3JrYmVuY2guYWN0aW9uLnRlcm1pbmFsLnNlbmRTZXF1ZW5jZVwiLFxuICAgIFwiYXJnc1wiOiB7IFwidGV4dFwiOiBcIlxcXFx1MDAxYlxcXFxyXCIgfSxcbiAgICBcIndoZW5cIjogXCJ0ZXJtaW5hbEZvY3VzXCJcbiAgfVxuXWApfSR7RU9MfWBcbiAgfVxuXG4gIGNvbnN0IGVkaXRvckRpciA9IGVkaXRvciA9PT0gJ1ZTQ29kZScgPyAnQ29kZScgOiBlZGl0b3JcbiAgY29uc3QgdXNlckRpclBhdGggPSBqb2luKFxuICAgIGhvbWVkaXIoKSxcbiAgICBwbGF0Zm9ybSgpID09PSAnd2luMzInXG4gICAgICA/IGpvaW4oJ0FwcERhdGEnLCAnUm9hbWluZycsIGVkaXRvckRpciwgJ1VzZXInKVxuICAgICAgOiBwbGF0Zm9ybSgpID09PSAnZGFyd2luJ1xuICAgICAgICA/IGpvaW4oJ0xpYnJhcnknLCAnQXBwbGljYXRpb24gU3VwcG9ydCcsIGVkaXRvckRpciwgJ1VzZXInKVxuICAgICAgICA6IGpvaW4oJy5jb25maWcnLCBlZGl0b3JEaXIsICdVc2VyJyksXG4gIClcbiAgY29uc3Qga2V5YmluZGluZ3NQYXRoID0gam9pbih1c2VyRGlyUGF0aCwgJ2tleWJpbmRpbmdzLmpzb24nKVxuXG4gIHRyeSB7XG4gICAgLy8gRW5zdXJlIHVzZXIgZGlyZWN0b3J5IGV4aXN0cyAoaWRlbXBvdGVudCB3aXRoIHJlY3Vyc2l2ZSlcbiAgICBhd2FpdCBta2Rpcih1c2VyRGlyUGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSlcblxuICAgIC8vIFJlYWQgZXhpc3Rpbmcga2V5YmluZGluZ3MgZmlsZSwgb3IgZGVmYXVsdCB0byBlbXB0eSBhcnJheSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgbGV0IGNvbnRlbnQgPSAnW10nXG4gICAgbGV0IGtleWJpbmRpbmdzOiBWU0NvZGVLZXliaW5kaW5nW10gPSBbXVxuICAgIGxldCBmaWxlRXhpc3RzID0gZmFsc2VcbiAgICB0cnkge1xuICAgICAgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGtleWJpbmRpbmdzUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICAgICAgZmlsZUV4aXN0cyA9IHRydWVcbiAgICAgIGtleWJpbmRpbmdzID0gKHNhZmVQYXJzZUpTT05DKGNvbnRlbnQpIGFzIFZTQ29kZUtleWJpbmRpbmdbXSkgPz8gW11cbiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICBpZiAoIWlzRnNJbmFjY2Vzc2libGUoZSkpIHRocm93IGVcbiAgICB9XG5cbiAgICAvLyBCYWNrdXAgdGhlIGV4aXN0aW5nIGZpbGUgYmVmb3JlIG1vZGlmeWluZyBpdFxuICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICBjb25zdCByYW5kb21TaGEgPSByYW5kb21CeXRlcyg0KS50b1N0cmluZygnaGV4JylcbiAgICAgIGNvbnN0IGJhY2t1cFBhdGggPSBgJHtrZXliaW5kaW5nc1BhdGh9LiR7cmFuZG9tU2hhfS5iYWtgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb3B5RmlsZShrZXliaW5kaW5nc1BhdGgsIGJhY2t1cFBhdGgpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgICB0aGVtZSxcbiAgICAgICAgKShcbiAgICAgICAgICBgRXJyb3IgYmFja2luZyB1cCBleGlzdGluZyAke2VkaXRvcn0gdGVybWluYWwga2V5YmluZGluZ3MuIEJhaWxpbmcgb3V0LmAsXG4gICAgICAgICl9JHtFT0x9JHtjaGFsay5kaW0oYFNlZSAke2Zvcm1hdFBhdGhMaW5rKGtleWJpbmRpbmdzUGF0aCl9YCl9JHtFT0x9JHtjaGFsay5kaW0oYEJhY2t1cCBwYXRoOiAke2Zvcm1hdFBhdGhMaW5rKGJhY2t1cFBhdGgpfWApfSR7RU9MfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBrZXliaW5kaW5nIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmdCaW5kaW5nID0ga2V5YmluZGluZ3MuZmluZChcbiAgICAgIGJpbmRpbmcgPT5cbiAgICAgICAgYmluZGluZy5rZXkgPT09ICdzaGlmdCtlbnRlcicgJiZcbiAgICAgICAgYmluZGluZy5jb21tYW5kID09PSAnd29ya2JlbmNoLmFjdGlvbi50ZXJtaW5hbC5zZW5kU2VxdWVuY2UnICYmXG4gICAgICAgIGJpbmRpbmcud2hlbiA9PT0gJ3Rlcm1pbmFsRm9jdXMnLFxuICAgIClcbiAgICBpZiAoZXhpc3RpbmdCaW5kaW5nKSB7XG4gICAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgdGhlbWUsXG4gICAgICApKFxuICAgICAgICBgRm91bmQgZXhpc3RpbmcgJHtlZGl0b3J9IHRlcm1pbmFsIFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nLiBSZW1vdmUgaXQgdG8gY29udGludWUuYCxcbiAgICAgICl9JHtFT0x9JHtjaGFsay5kaW0oYFNlZSAke2Zvcm1hdFBhdGhMaW5rKGtleWJpbmRpbmdzUGF0aCl9YCl9JHtFT0x9YFxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IGtleWJpbmRpbmdcbiAgICBjb25zdCBuZXdLZXliaW5kaW5nOiBWU0NvZGVLZXliaW5kaW5nID0ge1xuICAgICAga2V5OiAnc2hpZnQrZW50ZXInLFxuICAgICAgY29tbWFuZDogJ3dvcmtiZW5jaC5hY3Rpb24udGVybWluYWwuc2VuZFNlcXVlbmNlJyxcbiAgICAgIGFyZ3M6IHsgdGV4dDogJ1xcdTAwMWJcXHInIH0sXG4gICAgICB3aGVuOiAndGVybWluYWxGb2N1cycsXG4gICAgfVxuXG4gICAgLy8gTW9kaWZ5IHRoZSBjb250ZW50IGJ5IGFkZGluZyB0aGUgbmV3IGtleWJpbmRpbmcgd2hpbGUgcHJlc2VydmluZyBjb21tZW50cyBhbmQgZm9ybWF0dGluZ1xuICAgIGNvbnN0IHVwZGF0ZWRDb250ZW50ID0gYWRkSXRlbVRvSlNPTkNBcnJheShjb250ZW50LCBuZXdLZXliaW5kaW5nKVxuXG4gICAgLy8gV3JpdGUgdGhlIHVwZGF0ZWQgY29udGVudCBiYWNrIHRvIHRoZSBmaWxlXG4gICAgYXdhaXQgd3JpdGVGaWxlKGtleWJpbmRpbmdzUGF0aCwgdXBkYXRlZENvbnRlbnQsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcblxuICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgIHRoZW1lLFxuICAgICkoXG4gICAgICBgSW5zdGFsbGVkICR7ZWRpdG9yfSB0ZXJtaW5hbCBTaGlmdCtFbnRlciBrZXkgYmluZGluZ2AsXG4gICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoa2V5YmluZGluZ3NQYXRoKX1gKX0ke0VPTH1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEZhaWxlZCB0byBpbnN0YWxsICR7ZWRpdG9yfSB0ZXJtaW5hbCBTaGlmdCtFbnRlciBrZXkgYmluZGluZ2AsXG4gICAgKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuYWJsZU9wdGlvbkFzTWV0YUZvclByb2ZpbGUoXG4gIHByb2ZpbGVOYW1lOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgLy8gRmlyc3QgdHJ5IHRvIGFkZCB0aGUgcHJvcGVydHkgKGluIGNhc2UgaXQgZG9lc24ndCBleGlzdClcbiAgLy8gUXVvdGUgdGhlIHByb2ZpbGUgbmFtZSB0byBoYW5kbGUgbmFtZXMgd2l0aCBzcGFjZXMgKGUuZy4sIFwiTWFuIFBhZ2VcIiwgXCJSZWQgU2FuZHNcIilcbiAgY29uc3QgeyBjb2RlOiBhZGRDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJy91c3IvbGliZXhlYy9QbGlzdEJ1ZGR5JywgW1xuICAgICctYycsXG4gICAgYEFkZCA6J1dpbmRvdyBTZXR0aW5ncyc6JyR7cHJvZmlsZU5hbWV9Jzp1c2VPcHRpb25Bc01ldGFLZXkgYm9vbCB0cnVlYCxcbiAgICBnZXRUZXJtaW5hbFBsaXN0UGF0aCgpLFxuICBdKVxuXG4gIC8vIElmIGFkZGluZyBmYWlscyAobGlrZWx5IGJlY2F1c2UgaXQgYWxyZWFkeSBleGlzdHMpLCB0cnkgc2V0dGluZyBpdCBpbnN0ZWFkXG4gIGlmIChhZGRDb2RlICE9PSAwKSB7XG4gICAgY29uc3QgeyBjb2RlOiBzZXRDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJy91c3IvbGliZXhlYy9QbGlzdEJ1ZGR5JywgW1xuICAgICAgJy1jJyxcbiAgICAgIGBTZXQgOidXaW5kb3cgU2V0dGluZ3MnOicke3Byb2ZpbGVOYW1lfSc6dXNlT3B0aW9uQXNNZXRhS2V5IHRydWVgLFxuICAgICAgZ2V0VGVybWluYWxQbGlzdFBhdGgoKSxcbiAgICBdKVxuXG4gICAgaWYgKHNldENvZGUgIT09IDApIHtcbiAgICAgIGxvZ0Vycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBlbmFibGUgT3B0aW9uIGFzIE1ldGEga2V5IGZvciBUZXJtaW5hbC5hcHAgcHJvZmlsZTogJHtwcm9maWxlTmFtZX1gLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzYWJsZUF1ZGlvQmVsbEZvclByb2ZpbGUoXG4gIHByb2ZpbGVOYW1lOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgLy8gRmlyc3QgdHJ5IHRvIGFkZCB0aGUgcHJvcGVydHkgKGluIGNhc2UgaXQgZG9lc24ndCBleGlzdClcbiAgLy8gUXVvdGUgdGhlIHByb2ZpbGUgbmFtZSB0byBoYW5kbGUgbmFtZXMgd2l0aCBzcGFjZXMgKGUuZy4sIFwiTWFuIFBhZ2VcIiwgXCJSZWQgU2FuZHNcIilcbiAgY29uc3QgeyBjb2RlOiBhZGRDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJy91c3IvbGliZXhlYy9QbGlzdEJ1ZGR5JywgW1xuICAgICctYycsXG4gICAgYEFkZCA6J1dpbmRvdyBTZXR0aW5ncyc6JyR7cHJvZmlsZU5hbWV9JzpCZWxsIGJvb2wgZmFsc2VgLFxuICAgIGdldFRlcm1pbmFsUGxpc3RQYXRoKCksXG4gIF0pXG5cbiAgLy8gSWYgYWRkaW5nIGZhaWxzIChsaWtlbHkgYmVjYXVzZSBpdCBhbHJlYWR5IGV4aXN0cyksIHRyeSBzZXR0aW5nIGl0IGluc3RlYWRcbiAgaWYgKGFkZENvZGUgIT09IDApIHtcbiAgICBjb25zdCB7IGNvZGU6IHNldENvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnL3Vzci9saWJleGVjL1BsaXN0QnVkZHknLCBbXG4gICAgICAnLWMnLFxuICAgICAgYFNldCA6J1dpbmRvdyBTZXR0aW5ncyc6JyR7cHJvZmlsZU5hbWV9JzpCZWxsIGZhbHNlYCxcbiAgICAgIGdldFRlcm1pbmFsUGxpc3RQYXRoKCksXG4gICAgXSlcblxuICAgIGlmIChzZXRDb2RlICE9PSAwKSB7XG4gICAgICBsb2dFcnJvcihcbiAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gZGlzYWJsZSBhdWRpbyBiZWxsIGZvciBUZXJtaW5hbC5hcHAgcHJvZmlsZTogJHtwcm9maWxlTmFtZX1gLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gRW5hYmxlIE9wdGlvbiBhcyBNZXRhIGtleSBmb3IgVGVybWluYWwuYXBwXG5hc3luYyBmdW5jdGlvbiBlbmFibGVPcHRpb25Bc01ldGFGb3JUZXJtaW5hbChcbiAgdGhlbWU6IFRoZW1lTmFtZSxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgLy8gQ3JlYXRlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBsaXN0IGZpbGVcbiAgICBjb25zdCBiYWNrdXBQYXRoID0gYXdhaXQgYmFja3VwVGVybWluYWxQcmVmZXJlbmNlcygpXG4gICAgaWYgKCFiYWNrdXBQYXRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdGYWlsZWQgdG8gY3JlYXRlIGJhY2t1cCBvZiBUZXJtaW5hbC5hcHAgcHJlZmVyZW5jZXMsIGJhaWxpbmcgb3V0JyxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBSZWFkIHRoZSBjdXJyZW50IGRlZmF1bHQgcHJvZmlsZSBmcm9tIHRoZSBwbGlzdFxuICAgIGNvbnN0IHsgc3Rkb3V0OiBkZWZhdWx0UHJvZmlsZSwgY29kZTogcmVhZENvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICAgICdkZWZhdWx0cycsXG4gICAgICBbJ3JlYWQnLCAnY29tLmFwcGxlLlRlcm1pbmFsJywgJ0RlZmF1bHQgV2luZG93IFNldHRpbmdzJ10sXG4gICAgKVxuXG4gICAgaWYgKHJlYWRDb2RlICE9PSAwIHx8ICFkZWZhdWx0UHJvZmlsZS50cmltKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgZGVmYXVsdCBUZXJtaW5hbC5hcHAgcHJvZmlsZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGRvdXQ6IHN0YXJ0dXBQcm9maWxlLCBjb2RlOiBzdGFydHVwQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgJ2RlZmF1bHRzJyxcbiAgICAgIFsncmVhZCcsICdjb20uYXBwbGUuVGVybWluYWwnLCAnU3RhcnR1cCBXaW5kb3cgU2V0dGluZ3MnXSxcbiAgICApXG4gICAgaWYgKHN0YXJ0dXBDb2RlICE9PSAwIHx8ICFzdGFydHVwUHJvZmlsZS50cmltKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgc3RhcnR1cCBUZXJtaW5hbC5hcHAgcHJvZmlsZScpXG4gICAgfVxuXG4gICAgbGV0IHdhc0FueVByb2ZpbGVVcGRhdGVkID0gZmFsc2VcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9maWxlTmFtZSA9IGRlZmF1bHRQcm9maWxlLnRyaW0oKVxuICAgIGNvbnN0IG9wdGlvbkFzTWV0YUVuYWJsZWQgPVxuICAgICAgYXdhaXQgZW5hYmxlT3B0aW9uQXNNZXRhRm9yUHJvZmlsZShkZWZhdWx0UHJvZmlsZU5hbWUpXG4gICAgY29uc3QgYXVkaW9CZWxsRGlzYWJsZWQgPVxuICAgICAgYXdhaXQgZGlzYWJsZUF1ZGlvQmVsbEZvclByb2ZpbGUoZGVmYXVsdFByb2ZpbGVOYW1lKVxuXG4gICAgaWYgKG9wdGlvbkFzTWV0YUVuYWJsZWQgfHwgYXVkaW9CZWxsRGlzYWJsZWQpIHtcbiAgICAgIHdhc0FueVByb2ZpbGVVcGRhdGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0dXBQcm9maWxlTmFtZSA9IHN0YXJ0dXBQcm9maWxlLnRyaW0oKVxuXG4gICAgLy8gT25seSBwcm9jZWVkIGlmIHRoZSBzdGFydHVwIHByb2ZpbGUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGRlZmF1bHQgcHJvZmlsZVxuICAgIGlmIChzdGFydHVwUHJvZmlsZU5hbWUgIT09IGRlZmF1bHRQcm9maWxlTmFtZSkge1xuICAgICAgY29uc3Qgc3RhcnR1cE9wdGlvbkFzTWV0YUVuYWJsZWQgPVxuICAgICAgICBhd2FpdCBlbmFibGVPcHRpb25Bc01ldGFGb3JQcm9maWxlKHN0YXJ0dXBQcm9maWxlTmFtZSlcbiAgICAgIGNvbnN0IHN0YXJ0dXBBdWRpb0JlbGxEaXNhYmxlZCA9XG4gICAgICAgIGF3YWl0IGRpc2FibGVBdWRpb0JlbGxGb3JQcm9maWxlKHN0YXJ0dXBQcm9maWxlTmFtZSlcblxuICAgICAgaWYgKHN0YXJ0dXBPcHRpb25Bc01ldGFFbmFibGVkIHx8IHN0YXJ0dXBBdWRpb0JlbGxEaXNhYmxlZCkge1xuICAgICAgICB3YXNBbnlQcm9maWxlVXBkYXRlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXdhc0FueVByb2ZpbGVVcGRhdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdGYWlsZWQgdG8gZW5hYmxlIE9wdGlvbiBhcyBNZXRhIGtleSBvciBkaXNhYmxlIGF1ZGlvIGJlbGwgZm9yIGFueSBUZXJtaW5hbC5hcHAgcHJvZmlsZScsXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gRmx1c2ggdGhlIHByZWZlcmVuY2VzIGNhY2hlXG4gICAgYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdraWxsYWxsJywgWydjZnByZWZzZCddKVxuXG4gICAgbWFya1Rlcm1pbmFsU2V0dXBDb21wbGV0ZSgpXG5cbiAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAnc3VjY2VzcycsXG4gICAgICB0aGVtZSxcbiAgICApKFxuICAgICAgYENvbmZpZ3VyZWQgVGVybWluYWwuYXBwIHNldHRpbmdzOmAsXG4gICAgKX0ke0VPTH0ke2NvbG9yKCdzdWNjZXNzJywgdGhlbWUpKCctIEVuYWJsZWQgXCJVc2UgT3B0aW9uIGFzIE1ldGEga2V5XCInKX0ke0VPTH0ke2NvbG9yKCdzdWNjZXNzJywgdGhlbWUpKCctIFN3aXRjaGVkIHRvIHZpc3VhbCBiZWxsJyl9JHtFT0x9JHtjaGFsay5kaW0oJ09wdGlvbitFbnRlciB3aWxsIG5vdyBlbnRlciBhIG5ld2xpbmUuJyl9JHtFT0x9JHtjaGFsay5kaW0oJ1lvdSBtdXN0IHJlc3RhcnQgVGVybWluYWwuYXBwIGZvciBjaGFuZ2VzIHRvIHRha2UgZWZmZWN0LicsIHRoZW1lKX0ke0VPTH1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG5cbiAgICAvLyBBdHRlbXB0IHRvIHJlc3RvcmUgZnJvbSBiYWNrdXBcbiAgICBjb25zdCByZXN0b3JlUmVzdWx0ID0gYXdhaXQgY2hlY2tBbmRSZXN0b3JlVGVybWluYWxCYWNrdXAoKVxuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0ZhaWxlZCB0byBlbmFibGUgT3B0aW9uIGFzIE1ldGEga2V5IGZvciBUZXJtaW5hbC5hcHAuJ1xuICAgIGlmIChyZXN0b3JlUmVzdWx0LnN0YXR1cyA9PT0gJ3Jlc3RvcmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHtlcnJvck1lc3NhZ2V9IFlvdXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHJlc3RvcmVkIGZyb20gYmFja3VwLmAsXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChyZXN0b3JlUmVzdWx0LnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7ZXJyb3JNZXNzYWdlfSBSZXN0b3JpbmcgZnJvbSBiYWNrdXAgZmFpbGVkLCB0cnkgbWFudWFsbHkgd2l0aDogZGVmYXVsdHMgaW1wb3J0IGNvbS5hcHBsZS5UZXJtaW5hbCAke3Jlc3RvcmVSZXN1bHQuYmFja3VwUGF0aH1gLFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke2Vycm9yTWVzc2FnZX0gTm8gYmFja3VwIHdhcyBhdmFpbGFibGUgdG8gcmVzdG9yZSBmcm9tLmAsXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluc3RhbGxCaW5kaW5nc0ZvckFsYWNyaXR0eSh0aGVtZTogVGhlbWVOYW1lKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgQUxBQ1JJVFRZX0tFWUJJTkRJTkcgPSBgW1trZXlib2FyZC5iaW5kaW5nc11dXG5rZXkgPSBcIlJldHVyblwiXG5tb2RzID0gXCJTaGlmdFwiXG5jaGFycyA9IFwiXFxcXHUwMDFCXFxcXHJcImBcblxuICAvLyBHZXQgQWxhY3JpdHR5IGNvbmZpZyBmaWxlIHBhdGhzIGluIG9yZGVyIG9mIHByZWZlcmVuY2VcbiAgY29uc3QgY29uZmlnUGF0aHM6IHN0cmluZ1tdID0gW11cblxuICAvLyBYREcgY29uZmlnIHBhdGggKExpbnV4IGFuZCBtYWNPUylcbiAgY29uc3QgeGRnQ29uZmlnSG9tZSA9IHByb2Nlc3MuZW52LlhER19DT05GSUdfSE9NRVxuICBpZiAoeGRnQ29uZmlnSG9tZSkge1xuICAgIGNvbmZpZ1BhdGhzLnB1c2goam9pbih4ZGdDb25maWdIb21lLCAnYWxhY3JpdHR5JywgJ2FsYWNyaXR0eS50b21sJykpXG4gIH0gZWxzZSB7XG4gICAgY29uZmlnUGF0aHMucHVzaChqb2luKGhvbWVkaXIoKSwgJy5jb25maWcnLCAnYWxhY3JpdHR5JywgJ2FsYWNyaXR0eS50b21sJykpXG4gIH1cblxuICAvLyBXaW5kb3dzLXNwZWNpZmljIHBhdGhcbiAgaWYgKHBsYXRmb3JtKCkgPT09ICd3aW4zMicpIHtcbiAgICBjb25zdCBhcHBEYXRhID0gcHJvY2Vzcy5lbnYuQVBQREFUQVxuICAgIGlmIChhcHBEYXRhKSB7XG4gICAgICBjb25maWdQYXRocy5wdXNoKGpvaW4oYXBwRGF0YSwgJ2FsYWNyaXR0eScsICdhbGFjcml0dHkudG9tbCcpKVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgZXhpc3RpbmcgY29uZmlnIGZpbGUgYnkgYXR0ZW1wdGluZyB0byByZWFkIGl0LCBvciB1c2UgZmlyc3QgcHJlZmVycmVkIHBhdGhcbiAgbGV0IGNvbmZpZ1BhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBjb25maWdDb250ZW50ID0gJydcbiAgbGV0IGNvbmZpZ0V4aXN0cyA9IGZhbHNlXG5cbiAgZm9yIChjb25zdCBwYXRoIG9mIGNvbmZpZ1BhdGhzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZ0NvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShwYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgICBjb25maWdQYXRoID0gcGF0aFxuICAgICAgY29uZmlnRXhpc3RzID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICBpZiAoIWlzRnNJbmFjY2Vzc2libGUoZSkpIHRocm93IGVcbiAgICAgIC8vIEZpbGUgbWlzc2luZyBvciBpbmFjY2Vzc2libGUg4oCUIHRyeSBuZXh0IGNvbmZpZyBwYXRoXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm8gY29uZmlnIGV4aXN0cywgdXNlIHRoZSBmaXJzdCBwYXRoIChYREcvZGVmYXVsdCBsb2NhdGlvbilcbiAgaWYgKCFjb25maWdQYXRoKSB7XG4gICAgY29uZmlnUGF0aCA9IGNvbmZpZ1BhdGhzWzBdID8/IG51bGxcbiAgfVxuXG4gIGlmICghY29uZmlnUGF0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWQgY29uZmlnIHBhdGggZm91bmQgZm9yIEFsYWNyaXR0eScpXG4gIH1cblxuICB0cnkge1xuICAgIGlmIChjb25maWdFeGlzdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIGtleWJpbmRpbmcgYWxyZWFkeSBleGlzdHMgKGxvb2sgZm9yIFNoaWZ0K1JldHVybiBiaW5kaW5nKVxuICAgICAgaWYgKFxuICAgICAgICBjb25maWdDb250ZW50LmluY2x1ZGVzKCdtb2RzID0gXCJTaGlmdFwiJykgJiZcbiAgICAgICAgY29uZmlnQ29udGVudC5pbmNsdWRlcygna2V5ID0gXCJSZXR1cm5cIicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgICB0aGVtZSxcbiAgICAgICAgKShcbiAgICAgICAgICAnRm91bmQgZXhpc3RpbmcgQWxhY3JpdHR5IFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nLiBSZW1vdmUgaXQgdG8gY29udGludWUuJyxcbiAgICAgICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoY29uZmlnUGF0aCl9YCl9JHtFT0x9YFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYmFja3VwXG4gICAgICBjb25zdCByYW5kb21TaGEgPSByYW5kb21CeXRlcyg0KS50b1N0cmluZygnaGV4JylcbiAgICAgIGNvbnN0IGJhY2t1cFBhdGggPSBgJHtjb25maWdQYXRofS4ke3JhbmRvbVNoYX0uYmFrYFxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY29weUZpbGUoY29uZmlnUGF0aCwgYmFja3VwUGF0aClcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgIHRoZW1lLFxuICAgICAgICApKFxuICAgICAgICAgICdFcnJvciBiYWNraW5nIHVwIGV4aXN0aW5nIEFsYWNyaXR0eSBjb25maWcuIEJhaWxpbmcgb3V0LicsXG4gICAgICAgICl9JHtFT0x9JHtjaGFsay5kaW0oYFNlZSAke2Zvcm1hdFBhdGhMaW5rKGNvbmZpZ1BhdGgpfWApfSR7RU9MfSR7Y2hhbGsuZGltKGBCYWNrdXAgcGF0aDogJHtmb3JtYXRQYXRoTGluayhiYWNrdXBQYXRoKX1gKX0ke0VPTH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVuc3VyZSBjb25maWcgZGlyZWN0b3J5IGV4aXN0cyAoaWRlbXBvdGVudCB3aXRoIHJlY3Vyc2l2ZSlcbiAgICAgIGF3YWl0IG1rZGlyKGRpcm5hbWUoY29uZmlnUGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBrZXliaW5kaW5nIHRvIHRoZSBjb25maWdcbiAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBjb25maWdDb250ZW50XG4gICAgaWYgKGNvbmZpZ0NvbnRlbnQgJiYgIWNvbmZpZ0NvbnRlbnQuZW5kc1dpdGgoJ1xcbicpKSB7XG4gICAgICB1cGRhdGVkQ29udGVudCArPSAnXFxuJ1xuICAgIH1cbiAgICB1cGRhdGVkQ29udGVudCArPSAnXFxuJyArIEFMQUNSSVRUWV9LRVlCSU5ESU5HICsgJ1xcbidcblxuICAgIC8vIFdyaXRlIHRoZSB1cGRhdGVkIGNvbmZpZ1xuICAgIGF3YWl0IHdyaXRlRmlsZShjb25maWdQYXRoLCB1cGRhdGVkQ29udGVudCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuXG4gICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgdGhlbWUsXG4gICAgKSgnSW5zdGFsbGVkIEFsYWNyaXR0eSBTaGlmdCtFbnRlciBrZXkgYmluZGluZycpfSR7RU9MfSR7Y29sb3IoXG4gICAgICAnc3VjY2VzcycsXG4gICAgICB0aGVtZSxcbiAgICApKFxuICAgICAgJ1lvdSBtYXkgbmVlZCB0byByZXN0YXJ0IEFsYWNyaXR0eSBmb3IgY2hhbmdlcyB0byB0YWtlIGVmZmVjdCcsXG4gICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoY29uZmlnUGF0aCl9YCl9JHtFT0x9YFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluc3RhbGwgQWxhY3JpdHR5IFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nJylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbnN0YWxsQmluZGluZ3NGb3JaZWQodGhlbWU6IFRoZW1lTmFtZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIFplZCB1c2VzIEpTT04ga2V5YmluZGluZ3Mgc2ltaWxhciB0byBWU0NvZGVcbiAgY29uc3QgemVkRGlyID0gam9pbihob21lZGlyKCksICcuY29uZmlnJywgJ3plZCcpXG4gIGNvbnN0IGtleW1hcFBhdGggPSBqb2luKHplZERpciwgJ2tleW1hcC5qc29uJylcblxuICB0cnkge1xuICAgIC8vIEVuc3VyZSB6ZWQgZGlyZWN0b3J5IGV4aXN0cyAoaWRlbXBvdGVudCB3aXRoIHJlY3Vyc2l2ZSlcbiAgICBhd2FpdCBta2Rpcih6ZWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAvLyBSZWFkIGV4aXN0aW5nIGtleW1hcCBmaWxlLCBvciBkZWZhdWx0IHRvIGVtcHR5IGFycmF5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBsZXQga2V5bWFwQ29udGVudCA9ICdbXSdcbiAgICBsZXQgZmlsZUV4aXN0cyA9IGZhbHNlXG4gICAgdHJ5IHtcbiAgICAgIGtleW1hcENvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShrZXltYXBQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZVxuICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgIGlmICghaXNGc0luYWNjZXNzaWJsZShlKSkgdGhyb3cgZVxuICAgIH1cblxuICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICAvLyBDaGVjayBpZiBrZXliaW5kaW5nIGFscmVhZHkgZXhpc3RzXG4gICAgICBpZiAoa2V5bWFwQ29udGVudC5pbmNsdWRlcygnc2hpZnQtZW50ZXInKSkge1xuICAgICAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgIHRoZW1lLFxuICAgICAgICApKFxuICAgICAgICAgICdGb3VuZCBleGlzdGluZyBaZWQgU2hpZnQrRW50ZXIga2V5IGJpbmRpbmcuIFJlbW92ZSBpdCB0byBjb250aW51ZS4nLFxuICAgICAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhrZXltYXBQYXRoKX1gKX0ke0VPTH1gXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBiYWNrdXBcbiAgICAgIGNvbnN0IHJhbmRvbVNoYSA9IHJhbmRvbUJ5dGVzKDQpLnRvU3RyaW5nKCdoZXgnKVxuICAgICAgY29uc3QgYmFja3VwUGF0aCA9IGAke2tleW1hcFBhdGh9LiR7cmFuZG9tU2hhfS5iYWtgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb3B5RmlsZShrZXltYXBQYXRoLCBiYWNrdXBQYXRoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICAgICAnd2FybmluZycsXG4gICAgICAgICAgdGhlbWUsXG4gICAgICAgICkoXG4gICAgICAgICAgJ0Vycm9yIGJhY2tpbmcgdXAgZXhpc3RpbmcgWmVkIGtleW1hcC4gQmFpbGluZyBvdXQuJyxcbiAgICAgICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoa2V5bWFwUGF0aCl9YCl9JHtFT0x9JHtjaGFsay5kaW0oYEJhY2t1cCBwYXRoOiAke2Zvcm1hdFBhdGhMaW5rKGJhY2t1cFBhdGgpfWApfSR7RU9MfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXJzZSBhbmQgbW9kaWZ5IHRoZSBrZXltYXBcbiAgICBsZXQga2V5bWFwOiBBcnJheTx7XG4gICAgICBjb250ZXh0Pzogc3RyaW5nXG4gICAgICBiaW5kaW5nczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+XG4gICAgfT5cbiAgICB0cnkge1xuICAgICAga2V5bWFwID0ganNvblBhcnNlKGtleW1hcENvbnRlbnQpXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5bWFwKSkge1xuICAgICAgICBrZXltYXAgPSBbXVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAga2V5bWFwID0gW11cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG5ldyBrZXliaW5kaW5nIGZvciB0ZXJtaW5hbCBjb250ZXh0XG4gICAga2V5bWFwLnB1c2goe1xuICAgICAgY29udGV4dDogJ1Rlcm1pbmFsJyxcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICdzaGlmdC1lbnRlcic6IFsndGVybWluYWw6OlNlbmRUZXh0JywgJ1xcdTAwMWJcXHInXSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIC8vIFdyaXRlIHRoZSB1cGRhdGVkIGtleW1hcFxuICAgIGF3YWl0IHdyaXRlRmlsZShrZXltYXBQYXRoLCBqc29uU3RyaW5naWZ5KGtleW1hcCwgbnVsbCwgMikgKyAnXFxuJywge1xuICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgfSlcblxuICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgIHRoZW1lLFxuICAgICkoXG4gICAgICAnSW5zdGFsbGVkIFplZCBTaGlmdCtFbnRlciBrZXkgYmluZGluZycsXG4gICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoa2V5bWFwUGF0aCl9YCl9JHtFT0x9YFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluc3RhbGwgWmVkIFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nJylcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUyxZQUFZO0FBaUJkLFNBQVMsV0FBbUI7QUFDakMsUUFBTSxjQUFjLG9CQUFvQixFQUFFO0FBQUEsSUFDeEMsS0FBSyxPQUFPLEdBQUcsV0FBVztBQUFBLEVBQzVCO0FBQ0EsUUFBTSxzQkFBc0IsV0FBVyxPQUFPLENBQUM7QUFFL0MsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1B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ICJyYW5kb21CeXRlcyIsICJjb3B5RmlsZSIsICJta2RpciIsICJyZWFkRmlsZSIsICJ3cml0ZUZpbGUiLCAiaG9tZWRpciIsICJwbGF0Zm9ybSIsICJkaXJuYW1lIiwgImpvaW4iLCAicGF0aFRvRmlsZVVSTCIsICJpc1ZTQ29kZVJlbW90ZVNTSCIsICJhc2twYXNzTWFpbiIsICJwcm9jZXNzIiwgImVudiIsICJWU0NPREVfR0lUX0FTS1BBU1NfTUFJTiIsICJwYXRoIiwgIlBBVEgiLCAiaW5jbHVkZXMiLCAiZ2V0TmF0aXZlQ1NJdVRlcm1pbmFsRGlzcGxheU5hbWUiLCAidGVybWluYWwiLCAiTkFUSVZFX0NTSVVfVEVSTUlOQUxTIiwgImZvcm1hdFBhdGhMaW5rIiwgImZpbGVQYXRoIiwgInN1cHBvcnRzSHlwZXJsaW5rcyIsICJmaWxlVXJsIiwgImhyZWYiLCAic2hvdWxkT2ZmZXJUZXJtaW5hbFNldHVwIiwgInNldHVwVGVybWluYWwiLCAidGhlbWUiLCAicmVzdWx0IiwgImVuYWJsZU9wdGlvbkFzTWV0YUZvclRlcm1pbmFsIiwgImluc3RhbGxCaW5kaW5nc0ZvclZTQ29kZVRlcm1pbmFsIiwgImluc3RhbGxCaW5kaW5nc0ZvckFsYWNyaXR0eSIsICJpbnN0YWxsQmluZGluZ3NGb3JaZWQiLCAic2F2ZUdsb2JhbENvbmZpZyIsICJjdXJyZW50IiwgInNoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkIiwgIm9wdGlvbkFzTWV0YUtleUluc3RhbGxlZCIsICJtYXliZU1hcmtQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlIiwgInNldHVwU2hlbGxDb21wbGV0aW9uIiwgImlzU2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWQiLCAiZ2V0R2xvYmFsQ29uZmlnIiwgImhhc1VzZWRCYWNrc2xhc2hSZXR1cm4iLCAibWFya0JhY2tzbGFzaFJldHVyblVzZWQiLCAiY29uZmlnIiwgImNhbGwiLCAib25Eb25lIiwgImNvbnRleHQiLCAiX2FyZ3MiLCAibWVzc2FnZSIsICJ0ZXJtaW5hbE5hbWUiLCAiY3VycmVudFBsYXRmb3JtIiwgImdldFBsYXRmb3JtIiwgInBsYXRmb3JtVGVybWluYWxzIiwgImNoYWxrIiwgImRpbSIsICJvcHRpb25zIiwgImVkaXRvciIsICJjb2xvciIsICJFT0wiLCAiZWRpdG9yRGlyIiwgInVzZXJEaXJQYXRoIiwgImtleWJpbmRpbmdzUGF0aCIsICJyZWN1cnNpdmUiLCAiY29udGVudCIsICJrZXliaW5kaW5ncyIsICJmaWxlRXhpc3RzIiwgImVuY29kaW5nIiwgInNhZmVQYXJzZUpTT05DIiwgImUiLCAiaXNGc0luYWNjZXNzaWJsZSIsICJyYW5kb21TaGEiLCAidG9TdHJpbmciLCAiYmFja3VwUGF0aCIsICJleGlzdGluZ0JpbmRpbmciLCAiZmluZCIsICJiaW5kaW5nIiwgImtleSIsICJjb21tYW5kIiwgIndoZW4iLCAibmV3S2V5YmluZGluZyIsICJhcmdzIiwgInRleHQiLCAidXBkYXRlZENvbnRlbnQiLCAiYWRkSXRlbVRvSlNPTkNBcnJheSIsICJlcnJvciIsICJsb2dFcnJvciIsICJFcnJvciIsICJlbmFibGVPcHRpb25Bc01ldGFGb3JQcm9maWxlIiwgInByb2ZpbGVOYW1lIiwgImNvZGUiLCAiYWRkQ29kZSIsICJleGVjRmlsZU5vVGhyb3ciLCAiZ2V0VGVybWluYWxQbGlzdFBhdGgiLCAic2V0Q29kZSIsICJkaXNhYmxlQXVkaW9CZWxsRm9yUHJvZmlsZSIsICJiYWNrdXBUZXJtaW5hbFByZWZlcmVuY2VzIiwgInN0ZG91dCIsICJkZWZhdWx0UHJvZmlsZSIsICJyZWFkQ29kZSIsICJ0cmltIiwgInN0YXJ0dXBQcm9maWxlIiwgInN0YXJ0dXBDb2RlIiwgIndhc0FueVByb2ZpbGVVcGRhdGVkIiwgImRlZmF1bHRQcm9maWxlTmFtZSIsICJvcHRpb25Bc01ldGFFbmFibGVkIiwgImF1ZGlvQmVsbERpc2FibGVkIiwgInN0YXJ0dXBQcm9maWxlTmFtZSIsICJzdGFydHVwT3B0aW9uQXNNZXRhRW5hYmxlZCIsICJzdGFydHVwQXVkaW9CZWxsRGlzYWJsZWQiLCAibWFya1Rlcm1pbmFsU2V0dXBDb21wbGV0ZSIsICJyZXN0b3JlUmVzdWx0IiwgImNoZWNrQW5kUmVzdG9yZVRlcm1pbmFsQmFja3VwIiwgImVycm9yTWVzc2FnZSIsICJzdGF0dXMiLCAiQUxBQ1JJVFRZX0tFWUJJTkRJTkciLCAiY29uZmlnUGF0aHMiLCAieGRnQ29uZmlnSG9tZSIsICJYREdfQ09ORklHX0hPTUUiLCAicHVzaCIsICJhcHBEYXRhIiwgIkFQUERBVEEiLCAiY29uZmlnUGF0aCIsICJjb25maWdDb250ZW50IiwgImNvbmZpZ0V4aXN0cyIsICJlbmRzV2l0aCIsICJ6ZWREaXIiLCAia2V5bWFwUGF0aCIsICJrZXltYXBDb250ZW50IiwgImtleW1hcCIsICJqc29uUGFyc2UiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJiaW5kaW5ncyIsICJqc29uU3RyaW5naWZ5IiwgImdob3N0dHkiLCAia2l0dHkiLCAiV2V6VGVybSIsICJXYXJwVGVybWluYWwiXQp9Cg==
