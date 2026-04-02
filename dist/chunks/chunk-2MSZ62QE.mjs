#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  color,
  init_color,
  init_ink,
  init_supports_hyperlinks,
  supportsHyperlinks
} from "./chunk-KMJXN3MK.mjs";
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
} from "./chunk-NKGQGSP5.mjs";
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
      text: "Ask Blaude to create a new app or clone a repository",
      isComplete: false,
      isCompletable: true,
      isEnabled: isWorkspaceDirEmpty
    },
    {
      key: "claudemd",
      text: "Run /init to create a CLAUDE.md file with instructions for Blaude",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3Byb2plY3RPbmJvYXJkaW5nU3RhdGUudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2FwcGxlVGVybWluYWxCYWNrdXAudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2NvbXBsZXRpb25DYWNoZS50cyIsICIuLi8uLi9zcmMvY29tbWFuZHMvdGVybWluYWxTZXR1cC90ZXJtaW5hbFNldHVwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRQcm9qZWN0Q29uZmlnLFxuICBzYXZlQ3VycmVudFByb2plY3RDb25maWcsXG59IGZyb20gJy4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBpc0RpckVtcHR5IH0gZnJvbSAnLi91dGlscy9maWxlLmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vdXRpbHMvZnNPcGVyYXRpb25zLmpzJ1xuXG5leHBvcnQgdHlwZSBTdGVwID0ge1xuICBrZXk6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcbiAgaXNDb21wbGV0ZTogYm9vbGVhblxuICBpc0NvbXBsZXRhYmxlOiBib29sZWFuXG4gIGlzRW5hYmxlZDogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RlcHMoKTogU3RlcFtdIHtcbiAgY29uc3QgaGFzQ2xhdWRlTWQgPSBnZXRGc0ltcGxlbWVudGF0aW9uKCkuZXhpc3RzU3luYyhcbiAgICBqb2luKGdldEN3ZCgpLCAnQ0xBVURFLm1kJyksXG4gIClcbiAgY29uc3QgaXNXb3Jrc3BhY2VEaXJFbXB0eSA9IGlzRGlyRW1wdHkoZ2V0Q3dkKCkpXG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBrZXk6ICd3b3Jrc3BhY2UnLFxuICAgICAgdGV4dDogJ0FzayBCbGF1ZGUgdG8gY3JlYXRlIGEgbmV3IGFwcCBvciBjbG9uZSBhIHJlcG9zaXRvcnknLFxuICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICBpc0NvbXBsZXRhYmxlOiB0cnVlLFxuICAgICAgaXNFbmFibGVkOiBpc1dvcmtzcGFjZURpckVtcHR5LFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnY2xhdWRlbWQnLFxuICAgICAgdGV4dDogJ1J1biAvaW5pdCB0byBjcmVhdGUgYSBDTEFVREUubWQgZmlsZSB3aXRoIGluc3RydWN0aW9ucyBmb3IgQmxhdWRlJyxcbiAgICAgIGlzQ29tcGxldGU6IGhhc0NsYXVkZU1kLFxuICAgICAgaXNDb21wbGV0YWJsZTogdHJ1ZSxcbiAgICAgIGlzRW5hYmxlZDogIWlzV29ya3NwYWNlRGlyRW1wdHksXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0U3RlcHMoKVxuICAgIC5maWx0ZXIoKHsgaXNDb21wbGV0YWJsZSwgaXNFbmFibGVkIH0pID0+IGlzQ29tcGxldGFibGUgJiYgaXNFbmFibGVkKVxuICAgIC5ldmVyeSgoeyBpc0NvbXBsZXRlIH0pID0+IGlzQ29tcGxldGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXliZU1hcmtQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKCk6IHZvaWQge1xuICAvLyBTaG9ydC1jaXJjdWl0IG9uIGNhY2hlZCBjb25maWcgXHUyMDE0IGlzUHJvamVjdE9uYm9hcmRpbmdDb21wbGV0ZSgpIGhpdHNcbiAgLy8gdGhlIGZpbGVzeXN0ZW0sIGFuZCBSRVBMLnRzeCBjYWxscyB0aGlzIG9uIGV2ZXJ5IHByb21wdCBzdWJtaXQuXG4gIGlmIChnZXRDdXJyZW50UHJvamVjdENvbmZpZygpLmhhc0NvbXBsZXRlZFByb2plY3RPbmJvYXJkaW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGlzUHJvamVjdE9uYm9hcmRpbmdDb21wbGV0ZSgpKSB7XG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICBoYXNDb21wbGV0ZWRQcm9qZWN0T25ib2FyZGluZzogdHJ1ZSxcbiAgICB9KSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdWxkU2hvd1Byb2plY3RPbmJvYXJkaW5nID0gbWVtb2l6ZSgoKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHByb2plY3RDb25maWcgPSBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpXG4gIC8vIFNob3J0LWNpcmN1aXQgb24gY2FjaGVkIGNvbmZpZyBiZWZvcmUgaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKClcbiAgLy8gaGl0cyB0aGUgZmlsZXN5c3RlbSBcdTIwMTQgdGhpcyBydW5zIGR1cmluZyBmaXJzdCByZW5kZXIuXG4gIGlmIChcbiAgICBwcm9qZWN0Q29uZmlnLmhhc0NvbXBsZXRlZFByb2plY3RPbmJvYXJkaW5nIHx8XG4gICAgcHJvamVjdENvbmZpZy5wcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCA+PSA0IHx8XG4gICAgcHJvY2Vzcy5lbnYuSVNfREVNT1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAhaXNQcm9qZWN0T25ib2FyZGluZ0NvbXBsZXRlKClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRQcm9qZWN0T25ib2FyZGluZ1NlZW5Db3VudCgpOiB2b2lkIHtcbiAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIHByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50OiBjdXJyZW50LnByb2plY3RPbmJvYXJkaW5nU2VlbkNvdW50ICsgMSxcbiAgfSkpXG59XG4iLCAiaW1wb3J0IHsgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4vZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmV4cG9ydCBmdW5jdGlvbiBtYXJrVGVybWluYWxTZXR1cEluUHJvZ3Jlc3MoYmFja3VwUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgIC4uLmN1cnJlbnQsXG4gICAgYXBwbGVUZXJtaW5hbFNldHVwSW5Qcm9ncmVzczogdHJ1ZSxcbiAgICBhcHBsZVRlcm1pbmFsQmFja3VwUGF0aDogYmFja3VwUGF0aCxcbiAgfSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlKCk6IHZvaWQge1xuICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIGFwcGxlVGVybWluYWxTZXR1cEluUHJvZ3Jlc3M6IGZhbHNlLFxuICB9KSlcbn1cblxuZnVuY3Rpb24gZ2V0VGVybWluYWxSZWNvdmVyeUluZm8oKToge1xuICBpblByb2dyZXNzOiBib29sZWFuXG4gIGJhY2t1cFBhdGg6IHN0cmluZyB8IG51bGxcbn0ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICByZXR1cm4ge1xuICAgIGluUHJvZ3Jlc3M6IGNvbmZpZy5hcHBsZVRlcm1pbmFsU2V0dXBJblByb2dyZXNzID8/IGZhbHNlLFxuICAgIGJhY2t1cFBhdGg6IGNvbmZpZy5hcHBsZVRlcm1pbmFsQmFja3VwUGF0aCB8fCBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJtaW5hbFBsaXN0UGF0aCgpOiBzdHJpbmcge1xuICByZXR1cm4gam9pbihob21lZGlyKCksICdMaWJyYXJ5JywgJ1ByZWZlcmVuY2VzJywgJ2NvbS5hcHBsZS5UZXJtaW5hbC5wbGlzdCcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYWNrdXBUZXJtaW5hbFByZWZlcmVuY2VzKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBjb25zdCB0ZXJtaW5hbFBsaXN0UGF0aCA9IGdldFRlcm1pbmFsUGxpc3RQYXRoKClcbiAgY29uc3QgYmFja3VwUGF0aCA9IGAke3Rlcm1pbmFsUGxpc3RQYXRofS5iYWtgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZGVmYXVsdHMnLCBbXG4gICAgICAnZXhwb3J0JyxcbiAgICAgICdjb20uYXBwbGUuVGVybWluYWwnLFxuICAgICAgdGVybWluYWxQbGlzdFBhdGgsXG4gICAgXSlcblxuICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdGF0KHRlcm1pbmFsUGxpc3RQYXRoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2RlZmF1bHRzJywgW1xuICAgICAgJ2V4cG9ydCcsXG4gICAgICAnY29tLmFwcGxlLlRlcm1pbmFsJyxcbiAgICAgIGJhY2t1cFBhdGgsXG4gICAgXSlcblxuICAgIG1hcmtUZXJtaW5hbFNldHVwSW5Qcm9ncmVzcyhiYWNrdXBQYXRoKVxuXG4gICAgcmV0dXJuIGJhY2t1cFBhdGhcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgUmVzdG9yZVJlc3VsdCA9XG4gIHwge1xuICAgICAgc3RhdHVzOiAncmVzdG9yZWQnIHwgJ25vX2JhY2t1cCdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgICAgYmFja3VwUGF0aDogc3RyaW5nXG4gICAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbmRSZXN0b3JlVGVybWluYWxCYWNrdXAoKTogUHJvbWlzZTxSZXN0b3JlUmVzdWx0PiB7XG4gIGNvbnN0IHsgaW5Qcm9ncmVzcywgYmFja3VwUGF0aCB9ID0gZ2V0VGVybWluYWxSZWNvdmVyeUluZm8oKVxuICBpZiAoIWluUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub19iYWNrdXAnIH1cbiAgfVxuXG4gIGlmICghYmFja3VwUGF0aCkge1xuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzdGF0KGJhY2t1cFBhdGgpXG4gIH0gY2F0Y2gge1xuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ25vX2JhY2t1cCcgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZGVmYXVsdHMnLCBbXG4gICAgICAnaW1wb3J0JyxcbiAgICAgICdjb20uYXBwbGUuVGVybWluYWwnLFxuICAgICAgYmFja3VwUGF0aCxcbiAgICBdKVxuXG4gICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogJ2ZhaWxlZCcsIGJhY2t1cFBhdGggfVxuICAgIH1cblxuICAgIGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygna2lsbGFsbCcsIFsnY2ZwcmVmc2QnXSlcblxuICAgIG1hcmtUZXJtaW5hbFNldHVwQ29tcGxldGUoKVxuICAgIHJldHVybiB7IHN0YXR1czogJ3Jlc3RvcmVkJyB9XG4gIH0gY2F0Y2ggKHJlc3RvcmVFcnJvcikge1xuICAgIGxvZ0Vycm9yKFxuICAgICAgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHJlc3RvcmUgVGVybWluYWwuYXBwIHNldHRpbmdzIHdpdGg6ICR7cmVzdG9yZUVycm9yfWAsXG4gICAgICApLFxuICAgIClcbiAgICBtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlKClcbiAgICByZXR1cm4geyBzdGF0dXM6ICdmYWlsZWQnLCBiYWNrdXBQYXRoIH1cbiAgfVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IG1rZGlyLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHBhdGhUb0ZpbGVVUkwgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9jb2xvci5qcydcbmltcG9ydCB7IHN1cHBvcnRzSHlwZXJsaW5rcyB9IGZyb20gJy4uL2luay9zdXBwb3J0cy1oeXBlcmxpbmtzLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRU5PRU5UIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lTmFtZSB9IGZyb20gJy4vdGhlbWUuanMnXG5cbmNvbnN0IEVPTCA9ICdcXG4nXG5cbnR5cGUgU2hlbGxJbmZvID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgcmNGaWxlOiBzdHJpbmdcbiAgY2FjaGVGaWxlOiBzdHJpbmdcbiAgY29tcGxldGlvbkxpbmU6IHN0cmluZ1xuICBzaGVsbEZsYWc6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZXRlY3RTaGVsbCgpOiBTaGVsbEluZm8gfCBudWxsIHtcbiAgY29uc3Qgc2hlbGwgPSBwcm9jZXNzLmVudi5TSEVMTCB8fCAnJ1xuICBjb25zdCBob21lID0gaG9tZWRpcigpXG4gIGNvbnN0IGNsYXVkZURpciA9IGpvaW4oaG9tZSwgJy5jbGF1ZGUnKVxuXG4gIGlmIChzaGVsbC5lbmRzV2l0aCgnL3pzaCcpIHx8IHNoZWxsLmVuZHNXaXRoKCcvenNoLmV4ZScpKSB7XG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLnpzaCcpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd6c2gnLFxuICAgICAgcmNGaWxlOiBqb2luKGhvbWUsICcuenNocmMnKSxcbiAgICAgIGNhY2hlRmlsZSxcbiAgICAgIGNvbXBsZXRpb25MaW5lOiBgW1sgLWYgXCIke2NhY2hlRmlsZX1cIiBdXSAmJiBzb3VyY2UgXCIke2NhY2hlRmlsZX1cImAsXG4gICAgICBzaGVsbEZsYWc6ICd6c2gnLFxuICAgIH1cbiAgfVxuICBpZiAoc2hlbGwuZW5kc1dpdGgoJy9iYXNoJykgfHwgc2hlbGwuZW5kc1dpdGgoJy9iYXNoLmV4ZScpKSB7XG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLmJhc2gnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnYmFzaCcsXG4gICAgICByY0ZpbGU6IGpvaW4oaG9tZSwgJy5iYXNocmMnKSxcbiAgICAgIGNhY2hlRmlsZSxcbiAgICAgIGNvbXBsZXRpb25MaW5lOiBgWyAtZiBcIiR7Y2FjaGVGaWxlfVwiIF0gJiYgc291cmNlIFwiJHtjYWNoZUZpbGV9XCJgLFxuICAgICAgc2hlbGxGbGFnOiAnYmFzaCcsXG4gICAgfVxuICB9XG4gIGlmIChzaGVsbC5lbmRzV2l0aCgnL2Zpc2gnKSB8fCBzaGVsbC5lbmRzV2l0aCgnL2Zpc2guZXhlJykpIHtcbiAgICBjb25zdCB4ZGcgPSBwcm9jZXNzLmVudi5YREdfQ09ORklHX0hPTUUgfHwgam9pbihob21lLCAnLmNvbmZpZycpXG4gICAgY29uc3QgY2FjaGVGaWxlID0gam9pbihjbGF1ZGVEaXIsICdjb21wbGV0aW9uLmZpc2gnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnZmlzaCcsXG4gICAgICByY0ZpbGU6IGpvaW4oeGRnLCAnZmlzaCcsICdjb25maWcuZmlzaCcpLFxuICAgICAgY2FjaGVGaWxlLFxuICAgICAgY29tcGxldGlvbkxpbmU6IGBbIC1mIFwiJHtjYWNoZUZpbGV9XCIgXSAmJiBzb3VyY2UgXCIke2NhY2hlRmlsZX1cImAsXG4gICAgICBzaGVsbEZsYWc6ICdmaXNoJyxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGF0aExpbmsoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghc3VwcG9ydHNIeXBlcmxpbmtzKCkpIHtcbiAgICByZXR1cm4gZmlsZVBhdGhcbiAgfVxuICBjb25zdCBmaWxlVXJsID0gcGF0aFRvRmlsZVVSTChmaWxlUGF0aCkuaHJlZlxuICByZXR1cm4gYFxceDFiXTg7OyR7ZmlsZVVybH1cXHgwNyR7ZmlsZVBhdGh9XFx4MWJdODs7XFx4MDdgXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW5kIGNhY2hlIHRoZSBjb21wbGV0aW9uIHNjcmlwdCwgdGhlbiBhZGQgYSBzb3VyY2UgbGluZSB0byB0aGVcbiAqIHNoZWxsJ3MgcmMgZmlsZS4gUmV0dXJucyBhIHVzZXItZmFjaW5nIHN0YXR1cyBtZXNzYWdlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBTaGVsbENvbXBsZXRpb24odGhlbWU6IFRoZW1lTmFtZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHNoZWxsID0gZGV0ZWN0U2hlbGwoKVxuICBpZiAoIXNoZWxsKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBFbnN1cmUgdGhlIGNhY2hlIGRpcmVjdG9yeSBleGlzdHNcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihkaXJuYW1lKHNoZWxsLmNhY2hlRmlsZSksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBsb2dFcnJvcihlKVxuICAgIHJldHVybiBgJHtFT0x9JHtjb2xvcignd2FybmluZycsIHRoZW1lKShgQ291bGQgbm90IHdyaXRlICR7c2hlbGwubmFtZX0gY29tcGxldGlvbiBjYWNoZWApfSR7RU9MfSR7Y2hhbGsuZGltKGBSdW4gbWFudWFsbHk6IGJsYXVkZSBjb21wbGV0aW9uICR7c2hlbGwuc2hlbGxGbGFnfSA+ICR7c2hlbGwuY2FjaGVGaWxlfWApfSR7RU9MfWBcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBjb21wbGV0aW9uIHNjcmlwdCBieSB3cml0aW5nIGRpcmVjdGx5IHRvIHRoZSBjYWNoZSBmaWxlLlxuICAvLyBVc2luZyAtLW91dHB1dCBhdm9pZHMgcGlwaW5nIHRocm91Z2ggc3Rkb3V0IHdoZXJlIHByb2Nlc3MuZXhpdCgpIGNhblxuICAvLyB0cnVuY2F0ZSBvdXRwdXQgYmVmb3JlIHRoZSBwaXBlIGJ1ZmZlciBkcmFpbnMuXG4gIGNvbnN0IGNsYXVkZUJpbiA9IHByb2Nlc3MuYXJndlsxXSB8fCAnYmxhdWRlJ1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coY2xhdWRlQmluLCBbXG4gICAgJ2NvbXBsZXRpb24nLFxuICAgIHNoZWxsLnNoZWxsRmxhZyxcbiAgICAnLS1vdXRwdXQnLFxuICAgIHNoZWxsLmNhY2hlRmlsZSxcbiAgXSlcbiAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCd3YXJuaW5nJywgdGhlbWUpKGBDb3VsZCBub3QgZ2VuZXJhdGUgJHtzaGVsbC5uYW1lfSBzaGVsbCBjb21wbGV0aW9uc2ApfSR7RU9MfSR7Y2hhbGsuZGltKGBSdW4gbWFudWFsbHk6IGJsYXVkZSBjb21wbGV0aW9uICR7c2hlbGwuc2hlbGxGbGFnfSA+ICR7c2hlbGwuY2FjaGVGaWxlfWApfSR7RU9MfWBcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHJjIGZpbGUgYWxyZWFkeSBzb3VyY2VzIGNvbXBsZXRpb25zXG4gIGxldCBleGlzdGluZyA9ICcnXG4gIHRyeSB7XG4gICAgZXhpc3RpbmcgPSBhd2FpdCByZWFkRmlsZShzaGVsbC5yY0ZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICBpZiAoXG4gICAgICBleGlzdGluZy5pbmNsdWRlcygnYmxhdWRlIGNvbXBsZXRpb24nKSB8fFxuICAgICAgZXhpc3RpbmcuaW5jbHVkZXMoJ2NsYXVkZSBjb21wbGV0aW9uJykgfHxcbiAgICAgIGV4aXN0aW5nLmluY2x1ZGVzKHNoZWxsLmNhY2hlRmlsZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtFT0x9JHtjb2xvcignc3VjY2VzcycsIHRoZW1lKShgU2hlbGwgY29tcGxldGlvbnMgdXBkYXRlZCBmb3IgJHtzaGVsbC5uYW1lfWApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhzaGVsbC5yY0ZpbGUpfWApfSR7RU9MfWBcbiAgICB9XG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBpZiAoIWlzRU5PRU5UKGUpKSB7XG4gICAgICBsb2dFcnJvcihlKVxuICAgICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCd3YXJuaW5nJywgdGhlbWUpKGBDb3VsZCBub3QgaW5zdGFsbCAke3NoZWxsLm5hbWV9IHNoZWxsIGNvbXBsZXRpb25zYCl9JHtFT0x9JHtjaGFsay5kaW0oYEFkZCB0aGlzIHRvICR7Zm9ybWF0UGF0aExpbmsoc2hlbGwucmNGaWxlKX06YCl9JHtFT0x9JHtjaGFsay5kaW0oc2hlbGwuY29tcGxldGlvbkxpbmUpfSR7RU9MfWBcbiAgICB9XG4gIH1cblxuICAvLyBBcHBlbmQgc291cmNlIGxpbmUgdG8gcmMgZmlsZVxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZ0RpciA9IGRpcm5hbWUoc2hlbGwucmNGaWxlKVxuICAgIGF3YWl0IG1rZGlyKGNvbmZpZ0RpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcblxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGV4aXN0aW5nICYmICFleGlzdGluZy5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnXG4gICAgY29uc3QgY29udGVudCA9IGAke2V4aXN0aW5nfSR7c2VwYXJhdG9yfVxcbiMgQmxhdWRlIHNoZWxsIGNvbXBsZXRpb25zXFxuJHtzaGVsbC5jb21wbGV0aW9uTGluZX1cXG5gXG4gICAgYXdhaXQgd3JpdGVGaWxlKHNoZWxsLnJjRmlsZSwgY29udGVudCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuXG4gICAgcmV0dXJuIGAke0VPTH0ke2NvbG9yKCdzdWNjZXNzJywgdGhlbWUpKGBJbnN0YWxsZWQgJHtzaGVsbC5uYW1lfSBzaGVsbCBjb21wbGV0aW9uc2ApfSR7RU9MfSR7Y2hhbGsuZGltKGBBZGRlZCB0byAke2Zvcm1hdFBhdGhMaW5rKHNoZWxsLnJjRmlsZSl9YCl9JHtFT0x9JHtjaGFsay5kaW0oYFJ1bjogc291cmNlICR7c2hlbGwucmNGaWxlfWApfSR7RU9MfWBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gYCR7RU9MfSR7Y29sb3IoJ3dhcm5pbmcnLCB0aGVtZSkoYENvdWxkIG5vdCBpbnN0YWxsICR7c2hlbGwubmFtZX0gc2hlbGwgY29tcGxldGlvbnNgKX0ke0VPTH0ke2NoYWxrLmRpbShgQWRkIHRoaXMgdG8gJHtmb3JtYXRQYXRoTGluayhzaGVsbC5yY0ZpbGUpfTpgKX0ke0VPTH0ke2NoYWxrLmRpbShzaGVsbC5jb21wbGV0aW9uTGluZSl9JHtFT0x9YFxuICB9XG59XG5cbi8qKlxuICogUmVnZW5lcmF0ZSBjYWNoZWQgc2hlbGwgY29tcGxldGlvbiBzY3JpcHRzIGluIH4vLmNsYXVkZS8uXG4gKiBDYWxsZWQgYWZ0ZXIgYGNsYXVkZSB1cGRhdGVgIHNvIGNvbXBsZXRpb25zIHN0YXkgaW4gc3luYyB3aXRoIHRoZSBuZXcgYmluYXJ5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnZW5lcmF0ZUNvbXBsZXRpb25DYWNoZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgc2hlbGwgPSBkZXRlY3RTaGVsbCgpXG4gIGlmICghc2hlbGwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgdXBkYXRlOiBSZWdlbmVyYXRpbmcgJHtzaGVsbC5uYW1lfSBjb21wbGV0aW9uIGNhY2hlYClcblxuICBjb25zdCBjbGF1ZGVCaW4gPSBwcm9jZXNzLmFyZ3ZbMV0gfHwgJ2NsYXVkZSdcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KGNsYXVkZUJpbiwgW1xuICAgICdjb21wbGV0aW9uJyxcbiAgICBzaGVsbC5zaGVsbEZsYWcsXG4gICAgJy0tb3V0cHV0JyxcbiAgICBzaGVsbC5jYWNoZUZpbGUsXG4gIF0pXG5cbiAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYHVwZGF0ZTogRmFpbGVkIHRvIHJlZ2VuZXJhdGUgJHtzaGVsbC5uYW1lfSBjb21wbGV0aW9uIGNhY2hlYCxcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYHVwZGF0ZTogUmVnZW5lcmF0ZWQgJHtzaGVsbC5uYW1lfSBjb21wbGV0aW9uIGNhY2hlIGF0ICR7c2hlbGwuY2FjaGVGaWxlfWAsXG4gIClcbn1cbiIsICJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyByYW5kb21CeXRlcyB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IGNvcHlGaWxlLCBta2RpciwgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgaG9tZWRpciwgcGxhdGZvcm0gfSBmcm9tICdvcydcbmltcG9ydCB7IGRpcm5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHR5cGUgeyBUaGVtZU5hbWUgfSBmcm9tICdzcmMvdXRpbHMvdGhlbWUuanMnXG5pbXBvcnQgeyBwYXRoVG9GaWxlVVJMIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgc3VwcG9ydHNIeXBlcmxpbmtzIH0gZnJvbSAnLi4vLi4vaW5rL3N1cHBvcnRzLWh5cGVybGlua3MuanMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IG1heWJlTWFya1Byb2plY3RPbmJvYXJkaW5nQ29tcGxldGUgfSBmcm9tICcuLi8uLi9wcm9qZWN0T25ib2FyZGluZ1N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7XG4gIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7XG4gIGJhY2t1cFRlcm1pbmFsUHJlZmVyZW5jZXMsXG4gIGNoZWNrQW5kUmVzdG9yZVRlcm1pbmFsQmFja3VwLFxuICBnZXRUZXJtaW5hbFBsaXN0UGF0aCxcbiAgbWFya1Rlcm1pbmFsU2V0dXBDb21wbGV0ZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwbGVUZXJtaW5hbEJhY2t1cC5qcydcbmltcG9ydCB7IHNldHVwU2hlbGxDb21wbGV0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcGxldGlvbkNhY2hlLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52LmpzJ1xuaW1wb3J0IHsgaXNGc0luYWNjZXNzaWJsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4uLy4uL3V0aWxzL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGFkZEl0ZW1Ub0pTT05DQXJyYXksIHNhZmVQYXJzZUpTT05DIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbi5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm0gfSBmcm9tICcuLi8uLi91dGlscy9wbGF0Zm9ybS5qcydcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uLy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuXG5jb25zdCBFT0wgPSAnXFxuJ1xuXG4vLyBUZXJtaW5hbHMgdGhhdCBuYXRpdmVseSBzdXBwb3J0IENTSSB1IC8gS2l0dHkga2V5Ym9hcmQgcHJvdG9jb2xcbmNvbnN0IE5BVElWRV9DU0lVX1RFUk1JTkFMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgZ2hvc3R0eTogJ0dob3N0dHknLFxuICBraXR0eTogJ0tpdHR5JyxcbiAgJ2lUZXJtLmFwcCc6ICdpVGVybTInLFxuICBXZXpUZXJtOiAnV2V6VGVybScsXG4gIFdhcnBUZXJtaW5hbDogJ1dhcnAnLFxufVxuXG4vKipcbiAqIERldGVjdCBpZiB3ZSdyZSBydW5uaW5nIGluIGEgVlNDb2RlIFJlbW90ZSBTU0ggc2Vzc2lvbi5cbiAqIEluIHRoaXMgY2FzZSwga2V5YmluZGluZ3MgbmVlZCB0byBiZSBpbnN0YWxsZWQgb24gdGhlIExPQ0FMIG1hY2hpbmUsXG4gKiBub3QgdGhlIHJlbW90ZSBzZXJ2ZXIgd2hlcmUgQ2xhdWRlIGlzIHJ1bm5pbmcuXG4gKi9cbmZ1bmN0aW9uIGlzVlNDb2RlUmVtb3RlU1NIKCk6IGJvb2xlYW4ge1xuICBjb25zdCBhc2twYXNzTWFpbiA9IHByb2Nlc3MuZW52LlZTQ09ERV9HSVRfQVNLUEFTU19NQUlOID8/ICcnXG4gIGNvbnN0IHBhdGggPSBwcm9jZXNzLmVudi5QQVRIID8/ICcnXG5cbiAgLy8gQ2hlY2sgYm90aCBlbnYgdmFycyAtIFZTQ09ERV9HSVRfQVNLUEFTU19NQUlOIGlzIG1vcmUgcmVsaWFibGUgd2hlbiBnaXQgZXh0ZW5zaW9uXG4gIC8vIGlzIGFjdGl2ZSwgYW5kIFBBVEggaXMgYSBmYWxsYmFjay4gT21pdCBwYXRoIHNlcGFyYXRvciBmb3IgV2luZG93cyBjb21wYXRpYmlsaXR5LlxuICByZXR1cm4gKFxuICAgIGFza3Bhc3NNYWluLmluY2x1ZGVzKCcudnNjb2RlLXNlcnZlcicpIHx8XG4gICAgYXNrcGFzc01haW4uaW5jbHVkZXMoJy5jdXJzb3Itc2VydmVyJykgfHxcbiAgICBhc2twYXNzTWFpbi5pbmNsdWRlcygnLndpbmRzdXJmLXNlcnZlcicpIHx8XG4gICAgcGF0aC5pbmNsdWRlcygnLnZzY29kZS1zZXJ2ZXInKSB8fFxuICAgIHBhdGguaW5jbHVkZXMoJy5jdXJzb3Itc2VydmVyJykgfHxcbiAgICBwYXRoLmluY2x1ZGVzKCcud2luZHN1cmYtc2VydmVyJylcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlQ1NJdVRlcm1pbmFsRGlzcGxheU5hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghZW52LnRlcm1pbmFsIHx8ICEoZW52LnRlcm1pbmFsIGluIE5BVElWRV9DU0lVX1RFUk1JTkFMUykpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBOQVRJVkVfQ1NJVV9URVJNSU5BTFNbZW52LnRlcm1pbmFsXSA/PyBudWxsXG59XG5cbi8qKlxuICogRm9ybWF0IGEgZmlsZSBwYXRoIGFzIGEgY2xpY2thYmxlIGh5cGVybGluay5cbiAqXG4gKiBQYXRocyBjb250YWluaW5nIHNwYWNlcyAoZS5nLiwgXCJBcHBsaWNhdGlvbiBTdXBwb3J0XCIpIGFyZSBub3QgY2xpY2thYmxlXG4gKiBpbiBtb3N0IHRlcm1pbmFscyAtIHRoZXkgZ2V0IHNwbGl0IGF0IHRoZSBzcGFjZS4gT1NDIDggaHlwZXJsaW5rcyBzb2x2ZVxuICogdGhpcyBieSBlbWJlZGRpbmcgYSBmaWxlOi8vIFVSTCB0aGF0IHRoZSB0ZXJtaW5hbCBjYW4gb3BlbiBvbiBjbGljayxcbiAqIHdoaWxlIGRpc3BsYXlpbmcgdGhlIGNsZWFuIHBhdGggdG8gdGhlIHVzZXIuXG4gKlxuICogVW5saWtlIGNyZWF0ZUh5cGVybGluaygpLCB0aGlzIGRvZXNuJ3QgYXBwbHkgYW55IGNvbG9yIHN0eWxpbmcgc28gdGhlXG4gKiBwYXRoIGluaGVyaXRzIHRoZSBwYXJlbnQncyBzdHlsaW5nIChlLmcuLCBjaGFsay5kaW0pLlxuICovXG5mdW5jdGlvbiBmb3JtYXRQYXRoTGluayhmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdXBwb3J0c0h5cGVybGlua3MoKSkge1xuICAgIHJldHVybiBmaWxlUGF0aFxuICB9XG4gIGNvbnN0IGZpbGVVcmwgPSBwYXRoVG9GaWxlVVJMKGZpbGVQYXRoKS5ocmVmXG4gIC8vIE9TQyA4IGh5cGVybGluazogXFxlXTg7O1VSTFxcYSBURVhUIFxcZV04OztcXGFcbiAgcmV0dXJuIGBcXHgxYl04Ozske2ZpbGVVcmx9XFx4MDcke2ZpbGVQYXRofVxceDFiXTg7O1xceDA3YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkT2ZmZXJUZXJtaW5hbFNldHVwKCk6IGJvb2xlYW4ge1xuICAvLyBpVGVybTIsIFdlelRlcm0sIEdob3N0dHksIEtpdHR5LCBhbmQgV2FycCBuYXRpdmVseSBzdXBwb3J0IENTSSB1IC8gS2l0dHlcbiAgLy8ga2V5Ym9hcmQgcHJvdG9jb2wsIHdoaWNoIENsYXVkZSBDb2RlIGFscmVhZHkgcGFyc2VzLiBObyBzZXR1cCBuZWVkZWQgZm9yXG4gIC8vIHRoZXNlIHRlcm1pbmFscy5cbiAgcmV0dXJuIChcbiAgICAocGxhdGZvcm0oKSA9PT0gJ2RhcndpbicgJiYgZW52LnRlcm1pbmFsID09PSAnQXBwbGVfVGVybWluYWwnKSB8fFxuICAgIGVudi50ZXJtaW5hbCA9PT0gJ3ZzY29kZScgfHxcbiAgICBlbnYudGVybWluYWwgPT09ICdjdXJzb3InIHx8XG4gICAgZW52LnRlcm1pbmFsID09PSAnd2luZHN1cmYnIHx8XG4gICAgZW52LnRlcm1pbmFsID09PSAnYWxhY3JpdHR5JyB8fFxuICAgIGVudi50ZXJtaW5hbCA9PT0gJ3plZCdcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBUZXJtaW5hbCh0aGVtZTogVGhlbWVOYW1lKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgc3dpdGNoIChlbnYudGVybWluYWwpIHtcbiAgICBjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG4gICAgICByZXN1bHQgPSBhd2FpdCBlbmFibGVPcHRpb25Bc01ldGFGb3JUZXJtaW5hbCh0aGVtZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndnNjb2RlJzpcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGluc3RhbGxCaW5kaW5nc0ZvclZTQ29kZVRlcm1pbmFsKCdWU0NvZGUnLCB0aGVtZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnY3Vyc29yJzpcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGluc3RhbGxCaW5kaW5nc0ZvclZTQ29kZVRlcm1pbmFsKCdDdXJzb3InLCB0aGVtZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnd2luZHN1cmYnOlxuICAgICAgcmVzdWx0ID0gYXdhaXQgaW5zdGFsbEJpbmRpbmdzRm9yVlNDb2RlVGVybWluYWwoJ1dpbmRzdXJmJywgdGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FsYWNyaXR0eSc6XG4gICAgICByZXN1bHQgPSBhd2FpdCBpbnN0YWxsQmluZGluZ3NGb3JBbGFjcml0dHkodGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3plZCc6XG4gICAgICByZXN1bHQgPSBhd2FpdCBpbnN0YWxsQmluZGluZ3NGb3JaZWQodGhlbWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgbnVsbDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgIGlmIChcbiAgICAgIFsndnNjb2RlJywgJ2N1cnNvcicsICd3aW5kc3VyZicsICdhbGFjcml0dHknLCAnemVkJ10uaW5jbHVkZXMoXG4gICAgICAgIGVudi50ZXJtaW5hbCA/PyAnJyxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGlmIChjdXJyZW50LnNoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkID09PSB0cnVlKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgc2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWQ6IHRydWUgfVxuICAgIH0gZWxzZSBpZiAoZW52LnRlcm1pbmFsID09PSAnQXBwbGVfVGVybWluYWwnKSB7XG4gICAgICBpZiAoY3VycmVudC5vcHRpb25Bc01ldGFLZXlJbnN0YWxsZWQgPT09IHRydWUpIHJldHVybiBjdXJyZW50XG4gICAgICByZXR1cm4geyAuLi5jdXJyZW50LCBvcHRpb25Bc01ldGFLZXlJbnN0YWxsZWQ6IHRydWUgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFxuICB9KVxuXG4gIG1heWJlTWFya1Byb2plY3RPbmJvYXJkaW5nQ29tcGxldGUoKVxuXG4gIC8vIEluc3RhbGwgc2hlbGwgY29tcGxldGlvbnMgKGFudC1vbmx5LCBzaW5jZSB0aGUgY29tcGxldGlvbiBjb21tYW5kIGlzIGFudC1vbmx5KVxuICBpZiAoXCJleHRlcm5hbFwiID09PSAnYW50Jykge1xuICAgIHJlc3VsdCArPSBhd2FpdCBzZXR1cFNoZWxsQ29tcGxldGlvbih0aGVtZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRHbG9iYWxDb25maWcoKS5zaGlmdEVudGVyS2V5QmluZGluZ0luc3RhbGxlZCA9PT0gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzVXNlZEJhY2tzbGFzaFJldHVybigpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldEdsb2JhbENvbmZpZygpLmhhc1VzZWRCYWNrc2xhc2hSZXR1cm4gPT09IHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtCYWNrc2xhc2hSZXR1cm5Vc2VkKCk6IHZvaWQge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICBpZiAoIWNvbmZpZy5oYXNVc2VkQmFja3NsYXNoUmV0dXJuKSB7XG4gICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgaGFzVXNlZEJhY2tzbGFzaFJldHVybjogdHJ1ZSxcbiAgICB9KSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0ICYgTG9jYWxKU1hDb21tYW5kQ29udGV4dCxcbiAgX2FyZ3M6IHN0cmluZyxcbik6IFByb21pc2U8bnVsbD4ge1xuICBpZiAoZW52LnRlcm1pbmFsICYmIGVudi50ZXJtaW5hbCBpbiBOQVRJVkVfQ1NJVV9URVJNSU5BTFMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFNoaWZ0K0VudGVyIGlzIG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiAke05BVElWRV9DU0lVX1RFUk1JTkFMU1tlbnYudGVybWluYWxdfS5cblxuTm8gY29uZmlndXJhdGlvbiBuZWVkZWQuIEp1c3QgdXNlIFNoaWZ0K0VudGVyIHRvIGFkZCBuZXdsaW5lcy5gXG4gICAgb25Eb25lKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRlcm1pbmFsIGlzIHN1cHBvcnRlZFxuICBpZiAoIXNob3VsZE9mZmVyVGVybWluYWxTZXR1cCgpKSB7XG4gICAgY29uc3QgdGVybWluYWxOYW1lID0gZW52LnRlcm1pbmFsIHx8ICd5b3VyIGN1cnJlbnQgdGVybWluYWwnXG4gICAgY29uc3QgY3VycmVudFBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuXG4gICAgLy8gQnVpbGQgcGxhdGZvcm0tc3BlY2lmaWMgdGVybWluYWwgc3VnZ2VzdGlvbnNcbiAgICBsZXQgcGxhdGZvcm1UZXJtaW5hbHMgPSAnJ1xuICAgIGlmIChjdXJyZW50UGxhdGZvcm0gPT09ICdtYWNvcycpIHtcbiAgICAgIHBsYXRmb3JtVGVybWluYWxzID0gJyAgIOKAoiBtYWNPUzogQXBwbGUgVGVybWluYWxcXG4nXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxhdGZvcm0gPT09ICd3aW5kb3dzJykge1xuICAgICAgcGxhdGZvcm1UZXJtaW5hbHMgPSAnICAg4oCiIFdpbmRvd3M6IFdpbmRvd3MgVGVybWluYWxcXG4nXG4gICAgfVxuICAgIC8vIEZvciBMaW51eCBhbmQgb3RoZXIgcGxhdGZvcm1zLCB3ZSBkb24ndCBzaG93IG5hdGl2ZSB0ZXJtaW5hbCBvcHRpb25zXG4gICAgLy8gc2luY2UgdGhleSdyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZFxuXG4gICAgY29uc3QgbWVzc2FnZSA9IGBUZXJtaW5hbCBzZXR1cCBjYW5ub3QgYmUgcnVuIGZyb20gJHt0ZXJtaW5hbE5hbWV9LlxuXG5UaGlzIGNvbW1hbmQgY29uZmlndXJlcyBhIGNvbnZlbmllbnQgU2hpZnQrRW50ZXIgc2hvcnRjdXQgZm9yIG11bHRpLWxpbmUgcHJvbXB0cy5cbiR7Y2hhbGsuZGltKCdOb3RlOiBZb3UgY2FuIGFscmVhZHkgdXNlIGJhY2tzbGFzaCAoXFxcXFxcXFwpICsgcmV0dXJuIHRvIGFkZCBuZXdsaW5lcy4nKX1cblxuVG8gc2V0IHVwIHRoZSBzaG9ydGN1dCAob3B0aW9uYWwpOlxuMS4gRXhpdCB0bXV4L3NjcmVlbiB0ZW1wb3JhcmlseVxuMi4gUnVuIC90ZXJtaW5hbC1zZXR1cCBkaXJlY3RseSBpbiBvbmUgb2YgdGhlc2UgdGVybWluYWxzOlxuJHtwbGF0Zm9ybVRlcm1pbmFsc30gICDigKIgSURFOiBWU0NvZGUsIEN1cnNvciwgV2luZHN1cmYsIFplZFxuICAg4oCiIE90aGVyOiBBbGFjcml0dHlcbjMuIFJldHVybiB0byB0bXV4L3NjcmVlbiAtIHNldHRpbmdzIHdpbGwgcGVyc2lzdFxuXG4ke2NoYWxrLmRpbSgnTm90ZTogaVRlcm0yLCBXZXpUZXJtLCBHaG9zdHR5LCBLaXR0eSwgYW5kIFdhcnAgc3VwcG9ydCBTaGlmdCtFbnRlciBuYXRpdmVseS4nKX1gXG4gICAgb25Eb25lKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNldHVwVGVybWluYWwoY29udGV4dC5vcHRpb25zLnRoZW1lKVxuICBvbkRvbmUocmVzdWx0KVxuICByZXR1cm4gbnVsbFxufVxuXG50eXBlIFZTQ29kZUtleWJpbmRpbmcgPSB7XG4gIGtleTogc3RyaW5nXG4gIGNvbW1hbmQ6IHN0cmluZ1xuICBhcmdzOiB7IHRleHQ6IHN0cmluZyB9XG4gIHdoZW46IHN0cmluZ1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbnN0YWxsQmluZGluZ3NGb3JWU0NvZGVUZXJtaW5hbChcbiAgZWRpdG9yOiAnVlNDb2RlJyB8ICdDdXJzb3InIHwgJ1dpbmRzdXJmJyA9ICdWU0NvZGUnLFxuICB0aGVtZTogVGhlbWVOYW1lLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgLy8gQ2hlY2sgaWYgd2UncmUgcnVubmluZyBpbiBhIFZTQ29kZSBSZW1vdGUgU1NIIHNlc3Npb25cbiAgLy8gSW4gdGhpcyBjYXNlLCBrZXliaW5kaW5ncyBuZWVkIHRvIGJlIGluc3RhbGxlZCBvbiB0aGUgTE9DQUwgbWFjaGluZVxuICBpZiAoaXNWU0NvZGVSZW1vdGVTU0goKSkge1xuICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICd3YXJuaW5nJyxcbiAgICAgIHRoZW1lLFxuICAgICkoXG4gICAgICBgQ2Fubm90IGluc3RhbGwga2V5YmluZGluZ3MgZnJvbSBhIHJlbW90ZSAke2VkaXRvcn0gc2Vzc2lvbi5gLFxuICAgICl9JHtFT0x9JHtFT0x9JHtlZGl0b3J9IGtleWJpbmRpbmdzIG11c3QgYmUgaW5zdGFsbGVkIG9uIHlvdXIgbG9jYWwgbWFjaGluZSwgbm90IHRoZSByZW1vdGUgc2VydmVyLiR7RU9MfSR7RU9MfVRvIGluc3RhbGwgdGhlIFNoaWZ0K0VudGVyIGtleWJpbmRpbmc6JHtFT0x9MS4gT3BlbiAke2VkaXRvcn0gb24geW91ciBsb2NhbCBtYWNoaW5lIChub3QgY29ubmVjdGVkIHRvIHJlbW90ZSkke0VPTH0yLiBPcGVuIHRoZSBDb21tYW5kIFBhbGV0dGUgKENtZC9DdHJsK1NoaWZ0K1ApIOKGkiBcIlByZWZlcmVuY2VzOiBPcGVuIEtleWJvYXJkIFNob3J0Y3V0cyAoSlNPTilcIiR7RU9MfTMuIEFkZCB0aGlzIGtleWJpbmRpbmcgKHRoZSBmaWxlIG11c3QgYmUgYSBKU09OIGFycmF5KToke0VPTH0ke0VPTH0ke2NoYWxrLmRpbShgW1xuICB7XG4gICAgXCJrZXlcIjogXCJzaGlmdCtlbnRlclwiLFxuICAgIFwiY29tbWFuZFwiOiBcIndvcmtiZW5jaC5hY3Rpb24udGVybWluYWwuc2VuZFNlcXVlbmNlXCIsXG4gICAgXCJhcmdzXCI6IHsgXCJ0ZXh0XCI6IFwiXFxcXHUwMDFiXFxcXHJcIiB9LFxuICAgIFwid2hlblwiOiBcInRlcm1pbmFsRm9jdXNcIlxuICB9XG5dYCl9JHtFT0x9YFxuICB9XG5cbiAgY29uc3QgZWRpdG9yRGlyID0gZWRpdG9yID09PSAnVlNDb2RlJyA/ICdDb2RlJyA6IGVkaXRvclxuICBjb25zdCB1c2VyRGlyUGF0aCA9IGpvaW4oXG4gICAgaG9tZWRpcigpLFxuICAgIHBsYXRmb3JtKCkgPT09ICd3aW4zMidcbiAgICAgID8gam9pbignQXBwRGF0YScsICdSb2FtaW5nJywgZWRpdG9yRGlyLCAnVXNlcicpXG4gICAgICA6IHBsYXRmb3JtKCkgPT09ICdkYXJ3aW4nXG4gICAgICAgID8gam9pbignTGlicmFyeScsICdBcHBsaWNhdGlvbiBTdXBwb3J0JywgZWRpdG9yRGlyLCAnVXNlcicpXG4gICAgICAgIDogam9pbignLmNvbmZpZycsIGVkaXRvckRpciwgJ1VzZXInKSxcbiAgKVxuICBjb25zdCBrZXliaW5kaW5nc1BhdGggPSBqb2luKHVzZXJEaXJQYXRoLCAna2V5YmluZGluZ3MuanNvbicpXG5cbiAgdHJ5IHtcbiAgICAvLyBFbnN1cmUgdXNlciBkaXJlY3RvcnkgZXhpc3RzIChpZGVtcG90ZW50IHdpdGggcmVjdXJzaXZlKVxuICAgIGF3YWl0IG1rZGlyKHVzZXJEaXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgLy8gUmVhZCBleGlzdGluZyBrZXliaW5kaW5ncyBmaWxlLCBvciBkZWZhdWx0IHRvIGVtcHR5IGFycmF5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBsZXQgY29udGVudCA9ICdbXSdcbiAgICBsZXQga2V5YmluZGluZ3M6IFZTQ29kZUtleWJpbmRpbmdbXSA9IFtdXG4gICAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZVxuICAgIHRyeSB7XG4gICAgICBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoa2V5YmluZGluZ3NQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZVxuICAgICAga2V5YmluZGluZ3MgPSAoc2FmZVBhcnNlSlNPTkMoY29udGVudCkgYXMgVlNDb2RlS2V5YmluZGluZ1tdKSA/PyBbXVxuICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgIGlmICghaXNGc0luYWNjZXNzaWJsZShlKSkgdGhyb3cgZVxuICAgIH1cblxuICAgIC8vIEJhY2t1cCB0aGUgZXhpc3RpbmcgZmlsZSBiZWZvcmUgbW9kaWZ5aW5nIGl0XG4gICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHJhbmRvbVNoYSA9IHJhbmRvbUJ5dGVzKDQpLnRvU3RyaW5nKCdoZXgnKVxuICAgICAgY29uc3QgYmFja3VwUGF0aCA9IGAke2tleWJpbmRpbmdzUGF0aH0uJHtyYW5kb21TaGF9LmJha2BcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvcHlGaWxlKGtleWJpbmRpbmdzUGF0aCwgYmFja3VwUGF0aClcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgIHRoZW1lLFxuICAgICAgICApKFxuICAgICAgICAgIGBFcnJvciBiYWNraW5nIHVwIGV4aXN0aW5nICR7ZWRpdG9yfSB0ZXJtaW5hbCBrZXliaW5kaW5ncy4gQmFpbGluZyBvdXQuYCxcbiAgICAgICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoa2V5YmluZGluZ3NQYXRoKX1gKX0ke0VPTH0ke2NoYWxrLmRpbShgQmFja3VwIHBhdGg6ICR7Zm9ybWF0UGF0aExpbmsoYmFja3VwUGF0aCl9YCl9JHtFT0x9YFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGtleWJpbmRpbmcgYWxyZWFkeSBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ0JpbmRpbmcgPSBrZXliaW5kaW5ncy5maW5kKFxuICAgICAgYmluZGluZyA9PlxuICAgICAgICBiaW5kaW5nLmtleSA9PT0gJ3NoaWZ0K2VudGVyJyAmJlxuICAgICAgICBiaW5kaW5nLmNvbW1hbmQgPT09ICd3b3JrYmVuY2guYWN0aW9uLnRlcm1pbmFsLnNlbmRTZXF1ZW5jZScgJiZcbiAgICAgICAgYmluZGluZy53aGVuID09PSAndGVybWluYWxGb2N1cycsXG4gICAgKVxuICAgIGlmIChleGlzdGluZ0JpbmRpbmcpIHtcbiAgICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICB0aGVtZSxcbiAgICAgICkoXG4gICAgICAgIGBGb3VuZCBleGlzdGluZyAke2VkaXRvcn0gdGVybWluYWwgU2hpZnQrRW50ZXIga2V5IGJpbmRpbmcuIFJlbW92ZSBpdCB0byBjb250aW51ZS5gLFxuICAgICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoa2V5YmluZGluZ3NQYXRoKX1gKX0ke0VPTH1gXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcga2V5YmluZGluZ1xuICAgIGNvbnN0IG5ld0tleWJpbmRpbmc6IFZTQ29kZUtleWJpbmRpbmcgPSB7XG4gICAgICBrZXk6ICdzaGlmdCtlbnRlcicsXG4gICAgICBjb21tYW5kOiAnd29ya2JlbmNoLmFjdGlvbi50ZXJtaW5hbC5zZW5kU2VxdWVuY2UnLFxuICAgICAgYXJnczogeyB0ZXh0OiAnXFx1MDAxYlxccicgfSxcbiAgICAgIHdoZW46ICd0ZXJtaW5hbEZvY3VzJyxcbiAgICB9XG5cbiAgICAvLyBNb2RpZnkgdGhlIGNvbnRlbnQgYnkgYWRkaW5nIHRoZSBuZXcga2V5YmluZGluZyB3aGlsZSBwcmVzZXJ2aW5nIGNvbW1lbnRzIGFuZCBmb3JtYXR0aW5nXG4gICAgY29uc3QgdXBkYXRlZENvbnRlbnQgPSBhZGRJdGVtVG9KU09OQ0FycmF5KGNvbnRlbnQsIG5ld0tleWJpbmRpbmcpXG5cbiAgICAvLyBXcml0ZSB0aGUgdXBkYXRlZCBjb250ZW50IGJhY2sgdG8gdGhlIGZpbGVcbiAgICBhd2FpdCB3cml0ZUZpbGUoa2V5YmluZGluZ3NQYXRoLCB1cGRhdGVkQ29udGVudCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuXG4gICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgdGhlbWUsXG4gICAgKShcbiAgICAgIGBJbnN0YWxsZWQgJHtlZGl0b3J9IHRlcm1pbmFsIFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nYCxcbiAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhrZXliaW5kaW5nc1BhdGgpfWApfSR7RU9MfWBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgRmFpbGVkIHRvIGluc3RhbGwgJHtlZGl0b3J9IHRlcm1pbmFsIFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nYCxcbiAgICApXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5hYmxlT3B0aW9uQXNNZXRhRm9yUHJvZmlsZShcbiAgcHJvZmlsZU5hbWU6IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBGaXJzdCB0cnkgdG8gYWRkIHRoZSBwcm9wZXJ0eSAoaW4gY2FzZSBpdCBkb2Vzbid0IGV4aXN0KVxuICAvLyBRdW90ZSB0aGUgcHJvZmlsZSBuYW1lIHRvIGhhbmRsZSBuYW1lcyB3aXRoIHNwYWNlcyAoZS5nLiwgXCJNYW4gUGFnZVwiLCBcIlJlZCBTYW5kc1wiKVxuICBjb25zdCB7IGNvZGU6IGFkZENvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnL3Vzci9saWJleGVjL1BsaXN0QnVkZHknLCBbXG4gICAgJy1jJyxcbiAgICBgQWRkIDonV2luZG93IFNldHRpbmdzJzonJHtwcm9maWxlTmFtZX0nOnVzZU9wdGlvbkFzTWV0YUtleSBib29sIHRydWVgLFxuICAgIGdldFRlcm1pbmFsUGxpc3RQYXRoKCksXG4gIF0pXG5cbiAgLy8gSWYgYWRkaW5nIGZhaWxzIChsaWtlbHkgYmVjYXVzZSBpdCBhbHJlYWR5IGV4aXN0cyksIHRyeSBzZXR0aW5nIGl0IGluc3RlYWRcbiAgaWYgKGFkZENvZGUgIT09IDApIHtcbiAgICBjb25zdCB7IGNvZGU6IHNldENvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnL3Vzci9saWJleGVjL1BsaXN0QnVkZHknLCBbXG4gICAgICAnLWMnLFxuICAgICAgYFNldCA6J1dpbmRvdyBTZXR0aW5ncyc6JyR7cHJvZmlsZU5hbWV9Jzp1c2VPcHRpb25Bc01ldGFLZXkgdHJ1ZWAsXG4gICAgICBnZXRUZXJtaW5hbFBsaXN0UGF0aCgpLFxuICAgIF0pXG5cbiAgICBpZiAoc2V0Q29kZSAhPT0gMCkge1xuICAgICAgbG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIGVuYWJsZSBPcHRpb24gYXMgTWV0YSBrZXkgZm9yIFRlcm1pbmFsLmFwcCBwcm9maWxlOiAke3Byb2ZpbGVOYW1lfWAsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNhYmxlQXVkaW9CZWxsRm9yUHJvZmlsZShcbiAgcHJvZmlsZU5hbWU6IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAvLyBGaXJzdCB0cnkgdG8gYWRkIHRoZSBwcm9wZXJ0eSAoaW4gY2FzZSBpdCBkb2Vzbid0IGV4aXN0KVxuICAvLyBRdW90ZSB0aGUgcHJvZmlsZSBuYW1lIHRvIGhhbmRsZSBuYW1lcyB3aXRoIHNwYWNlcyAoZS5nLiwgXCJNYW4gUGFnZVwiLCBcIlJlZCBTYW5kc1wiKVxuICBjb25zdCB7IGNvZGU6IGFkZENvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnL3Vzci9saWJleGVjL1BsaXN0QnVkZHknLCBbXG4gICAgJy1jJyxcbiAgICBgQWRkIDonV2luZG93IFNldHRpbmdzJzonJHtwcm9maWxlTmFtZX0nOkJlbGwgYm9vbCBmYWxzZWAsXG4gICAgZ2V0VGVybWluYWxQbGlzdFBhdGgoKSxcbiAgXSlcblxuICAvLyBJZiBhZGRpbmcgZmFpbHMgKGxpa2VseSBiZWNhdXNlIGl0IGFscmVhZHkgZXhpc3RzKSwgdHJ5IHNldHRpbmcgaXQgaW5zdGVhZFxuICBpZiAoYWRkQ29kZSAhPT0gMCkge1xuICAgIGNvbnN0IHsgY29kZTogc2V0Q29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCcvdXNyL2xpYmV4ZWMvUGxpc3RCdWRkeScsIFtcbiAgICAgICctYycsXG4gICAgICBgU2V0IDonV2luZG93IFNldHRpbmdzJzonJHtwcm9maWxlTmFtZX0nOkJlbGwgZmFsc2VgLFxuICAgICAgZ2V0VGVybWluYWxQbGlzdFBhdGgoKSxcbiAgICBdKVxuXG4gICAgaWYgKHNldENvZGUgIT09IDApIHtcbiAgICAgIGxvZ0Vycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBkaXNhYmxlIGF1ZGlvIGJlbGwgZm9yIFRlcm1pbmFsLmFwcCBwcm9maWxlOiAke3Byb2ZpbGVOYW1lfWAsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vLyBFbmFibGUgT3B0aW9uIGFzIE1ldGEga2V5IGZvciBUZXJtaW5hbC5hcHBcbmFzeW5jIGZ1bmN0aW9uIGVuYWJsZU9wdGlvbkFzTWV0YUZvclRlcm1pbmFsKFxuICB0aGVtZTogVGhlbWVOYW1lLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICAvLyBDcmVhdGUgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcGxpc3QgZmlsZVxuICAgIGNvbnN0IGJhY2t1cFBhdGggPSBhd2FpdCBiYWNrdXBUZXJtaW5hbFByZWZlcmVuY2VzKClcbiAgICBpZiAoIWJhY2t1cFBhdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ZhaWxlZCB0byBjcmVhdGUgYmFja3VwIG9mIFRlcm1pbmFsLmFwcCBwcmVmZXJlbmNlcywgYmFpbGluZyBvdXQnLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFJlYWQgdGhlIGN1cnJlbnQgZGVmYXVsdCBwcm9maWxlIGZyb20gdGhlIHBsaXN0XG4gICAgY29uc3QgeyBzdGRvdXQ6IGRlZmF1bHRQcm9maWxlLCBjb2RlOiByZWFkQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgJ2RlZmF1bHRzJyxcbiAgICAgIFsncmVhZCcsICdjb20uYXBwbGUuVGVybWluYWwnLCAnRGVmYXVsdCBXaW5kb3cgU2V0dGluZ3MnXSxcbiAgICApXG5cbiAgICBpZiAocmVhZENvZGUgIT09IDAgfHwgIWRlZmF1bHRQcm9maWxlLnRyaW0oKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCBkZWZhdWx0IFRlcm1pbmFsLmFwcCBwcm9maWxlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0ZG91dDogc3RhcnR1cFByb2ZpbGUsIGNvZGU6IHN0YXJ0dXBDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICAnZGVmYXVsdHMnLFxuICAgICAgWydyZWFkJywgJ2NvbS5hcHBsZS5UZXJtaW5hbCcsICdTdGFydHVwIFdpbmRvdyBTZXR0aW5ncyddLFxuICAgIClcbiAgICBpZiAoc3RhcnR1cENvZGUgIT09IDAgfHwgIXN0YXJ0dXBQcm9maWxlLnRyaW0oKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVhZCBzdGFydHVwIFRlcm1pbmFsLmFwcCBwcm9maWxlJylcbiAgICB9XG5cbiAgICBsZXQgd2FzQW55UHJvZmlsZVVwZGF0ZWQgPSBmYWxzZVxuXG4gICAgY29uc3QgZGVmYXVsdFByb2ZpbGVOYW1lID0gZGVmYXVsdFByb2ZpbGUudHJpbSgpXG4gICAgY29uc3Qgb3B0aW9uQXNNZXRhRW5hYmxlZCA9XG4gICAgICBhd2FpdCBlbmFibGVPcHRpb25Bc01ldGFGb3JQcm9maWxlKGRlZmF1bHRQcm9maWxlTmFtZSlcbiAgICBjb25zdCBhdWRpb0JlbGxEaXNhYmxlZCA9XG4gICAgICBhd2FpdCBkaXNhYmxlQXVkaW9CZWxsRm9yUHJvZmlsZShkZWZhdWx0UHJvZmlsZU5hbWUpXG5cbiAgICBpZiAob3B0aW9uQXNNZXRhRW5hYmxlZCB8fCBhdWRpb0JlbGxEaXNhYmxlZCkge1xuICAgICAgd2FzQW55UHJvZmlsZVVwZGF0ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnR1cFByb2ZpbGVOYW1lID0gc3RhcnR1cFByb2ZpbGUudHJpbSgpXG5cbiAgICAvLyBPbmx5IHByb2NlZWQgaWYgdGhlIHN0YXJ0dXAgcHJvZmlsZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdCBwcm9maWxlXG4gICAgaWYgKHN0YXJ0dXBQcm9maWxlTmFtZSAhPT0gZGVmYXVsdFByb2ZpbGVOYW1lKSB7XG4gICAgICBjb25zdCBzdGFydHVwT3B0aW9uQXNNZXRhRW5hYmxlZCA9XG4gICAgICAgIGF3YWl0IGVuYWJsZU9wdGlvbkFzTWV0YUZvclByb2ZpbGUoc3RhcnR1cFByb2ZpbGVOYW1lKVxuICAgICAgY29uc3Qgc3RhcnR1cEF1ZGlvQmVsbERpc2FibGVkID1cbiAgICAgICAgYXdhaXQgZGlzYWJsZUF1ZGlvQmVsbEZvclByb2ZpbGUoc3RhcnR1cFByb2ZpbGVOYW1lKVxuXG4gICAgICBpZiAoc3RhcnR1cE9wdGlvbkFzTWV0YUVuYWJsZWQgfHwgc3RhcnR1cEF1ZGlvQmVsbERpc2FibGVkKSB7XG4gICAgICAgIHdhc0FueVByb2ZpbGVVcGRhdGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghd2FzQW55UHJvZmlsZVVwZGF0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ZhaWxlZCB0byBlbmFibGUgT3B0aW9uIGFzIE1ldGEga2V5IG9yIGRpc2FibGUgYXVkaW8gYmVsbCBmb3IgYW55IFRlcm1pbmFsLmFwcCBwcm9maWxlJyxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBGbHVzaCB0aGUgcHJlZmVyZW5jZXMgY2FjaGVcbiAgICBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2tpbGxhbGwnLCBbJ2NmcHJlZnNkJ10pXG5cbiAgICBtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlKClcblxuICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgIHRoZW1lLFxuICAgICkoXG4gICAgICBgQ29uZmlndXJlZCBUZXJtaW5hbC5hcHAgc2V0dGluZ3M6YCxcbiAgICApfSR7RU9MfSR7Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoJy0gRW5hYmxlZCBcIlVzZSBPcHRpb24gYXMgTWV0YSBrZXlcIicpfSR7RU9MfSR7Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoJy0gU3dpdGNoZWQgdG8gdmlzdWFsIGJlbGwnKX0ke0VPTH0ke2NoYWxrLmRpbSgnT3B0aW9uK0VudGVyIHdpbGwgbm93IGVudGVyIGEgbmV3bGluZS4nKX0ke0VPTH0ke2NoYWxrLmRpbSgnWW91IG11c3QgcmVzdGFydCBUZXJtaW5hbC5hcHAgZm9yIGNoYW5nZXMgdG8gdGFrZSBlZmZlY3QuJywgdGhlbWUpfSR7RU9MfWBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcblxuICAgIC8vIEF0dGVtcHQgdG8gcmVzdG9yZSBmcm9tIGJhY2t1cFxuICAgIGNvbnN0IHJlc3RvcmVSZXN1bHQgPSBhd2FpdCBjaGVja0FuZFJlc3RvcmVUZXJtaW5hbEJhY2t1cCgpXG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnRmFpbGVkIHRvIGVuYWJsZSBPcHRpb24gYXMgTWV0YSBrZXkgZm9yIFRlcm1pbmFsLmFwcC4nXG4gICAgaWYgKHJlc3RvcmVSZXN1bHQuc3RhdHVzID09PSAncmVzdG9yZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke2Vycm9yTWVzc2FnZX0gWW91ciBzZXR0aW5ncyBoYXZlIGJlZW4gcmVzdG9yZWQgZnJvbSBiYWNrdXAuYCxcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHJlc3RvcmVSZXN1bHQuc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHtlcnJvck1lc3NhZ2V9IFJlc3RvcmluZyBmcm9tIGJhY2t1cCBmYWlsZWQsIHRyeSBtYW51YWxseSB3aXRoOiBkZWZhdWx0cyBpbXBvcnQgY29tLmFwcGxlLlRlcm1pbmFsICR7cmVzdG9yZVJlc3VsdC5iYWNrdXBQYXRofWAsXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7ZXJyb3JNZXNzYWdlfSBObyBiYWNrdXAgd2FzIGF2YWlsYWJsZSB0byByZXN0b3JlIGZyb20uYCxcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zdGFsbEJpbmRpbmdzRm9yQWxhY3JpdHR5KHRoZW1lOiBUaGVtZU5hbWUpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBBTEFDUklUVFlfS0VZQklORElORyA9IGBbW2tleWJvYXJkLmJpbmRpbmdzXV1cbmtleSA9IFwiUmV0dXJuXCJcbm1vZHMgPSBcIlNoaWZ0XCJcbmNoYXJzID0gXCJcXFxcdTAwMUJcXFxcclwiYFxuXG4gIC8vIEdldCBBbGFjcml0dHkgY29uZmlnIGZpbGUgcGF0aHMgaW4gb3JkZXIgb2YgcHJlZmVyZW5jZVxuICBjb25zdCBjb25maWdQYXRoczogc3RyaW5nW10gPSBbXVxuXG4gIC8vIFhERyBjb25maWcgcGF0aCAoTGludXggYW5kIG1hY09TKVxuICBjb25zdCB4ZGdDb25maWdIb21lID0gcHJvY2Vzcy5lbnYuWERHX0NPTkZJR19IT01FXG4gIGlmICh4ZGdDb25maWdIb21lKSB7XG4gICAgY29uZmlnUGF0aHMucHVzaChqb2luKHhkZ0NvbmZpZ0hvbWUsICdhbGFjcml0dHknLCAnYWxhY3JpdHR5LnRvbWwnKSlcbiAgfSBlbHNlIHtcbiAgICBjb25maWdQYXRocy5wdXNoKGpvaW4oaG9tZWRpcigpLCAnLmNvbmZpZycsICdhbGFjcml0dHknLCAnYWxhY3JpdHR5LnRvbWwnKSlcbiAgfVxuXG4gIC8vIFdpbmRvd3Mtc3BlY2lmaWMgcGF0aFxuICBpZiAocGxhdGZvcm0oKSA9PT0gJ3dpbjMyJykge1xuICAgIGNvbnN0IGFwcERhdGEgPSBwcm9jZXNzLmVudi5BUFBEQVRBXG4gICAgaWYgKGFwcERhdGEpIHtcbiAgICAgIGNvbmZpZ1BhdGhzLnB1c2goam9pbihhcHBEYXRhLCAnYWxhY3JpdHR5JywgJ2FsYWNyaXR0eS50b21sJykpXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCBleGlzdGluZyBjb25maWcgZmlsZSBieSBhdHRlbXB0aW5nIHRvIHJlYWQgaXQsIG9yIHVzZSBmaXJzdCBwcmVmZXJyZWQgcGF0aFxuICBsZXQgY29uZmlnUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGNvbmZpZ0NvbnRlbnQgPSAnJ1xuICBsZXQgY29uZmlnRXhpc3RzID0gZmFsc2VcblxuICBmb3IgKGNvbnN0IHBhdGggb2YgY29uZmlnUGF0aHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uZmlnQ29udGVudCA9IGF3YWl0IHJlYWRGaWxlKHBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICAgIGNvbmZpZ1BhdGggPSBwYXRoXG4gICAgICBjb25maWdFeGlzdHMgPSB0cnVlXG4gICAgICBicmVha1xuICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgIGlmICghaXNGc0luYWNjZXNzaWJsZShlKSkgdGhyb3cgZVxuICAgICAgLy8gRmlsZSBtaXNzaW5nIG9yIGluYWNjZXNzaWJsZSDigJQgdHJ5IG5leHQgY29uZmlnIHBhdGhcbiAgICB9XG4gIH1cblxuICAvLyBJZiBubyBjb25maWcgZXhpc3RzLCB1c2UgdGhlIGZpcnN0IHBhdGggKFhERy9kZWZhdWx0IGxvY2F0aW9uKVxuICBpZiAoIWNvbmZpZ1BhdGgpIHtcbiAgICBjb25maWdQYXRoID0gY29uZmlnUGF0aHNbMF0gPz8gbnVsbFxuICB9XG5cbiAgaWYgKCFjb25maWdQYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyB2YWxpZCBjb25maWcgcGF0aCBmb3VuZCBmb3IgQWxhY3JpdHR5JylcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGNvbmZpZ0V4aXN0cykge1xuICAgICAgLy8gQ2hlY2sgaWYga2V5YmluZGluZyBhbHJlYWR5IGV4aXN0cyAobG9vayBmb3IgU2hpZnQrUmV0dXJuIGJpbmRpbmcpXG4gICAgICBpZiAoXG4gICAgICAgIGNvbmZpZ0NvbnRlbnQuaW5jbHVkZXMoJ21vZHMgPSBcIlNoaWZ0XCInKSAmJlxuICAgICAgICBjb25maWdDb250ZW50LmluY2x1ZGVzKCdrZXkgPSBcIlJldHVyblwiJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgIHRoZW1lLFxuICAgICAgICApKFxuICAgICAgICAgICdGb3VuZCBleGlzdGluZyBBbGFjcml0dHkgU2hpZnQrRW50ZXIga2V5IGJpbmRpbmcuIFJlbW92ZSBpdCB0byBjb250aW51ZS4nLFxuICAgICAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhjb25maWdQYXRoKX1gKX0ke0VPTH1gXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBiYWNrdXBcbiAgICAgIGNvbnN0IHJhbmRvbVNoYSA9IHJhbmRvbUJ5dGVzKDQpLnRvU3RyaW5nKCdoZXgnKVxuICAgICAgY29uc3QgYmFja3VwUGF0aCA9IGAke2NvbmZpZ1BhdGh9LiR7cmFuZG9tU2hhfS5iYWtgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb3B5RmlsZShjb25maWdQYXRoLCBiYWNrdXBQYXRoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICAgICAnd2FybmluZycsXG4gICAgICAgICAgdGhlbWUsXG4gICAgICAgICkoXG4gICAgICAgICAgJ0Vycm9yIGJhY2tpbmcgdXAgZXhpc3RpbmcgQWxhY3JpdHR5IGNvbmZpZy4gQmFpbGluZyBvdXQuJyxcbiAgICAgICAgKX0ke0VPTH0ke2NoYWxrLmRpbShgU2VlICR7Zm9ybWF0UGF0aExpbmsoY29uZmlnUGF0aCl9YCl9JHtFT0x9JHtjaGFsay5kaW0oYEJhY2t1cCBwYXRoOiAke2Zvcm1hdFBhdGhMaW5rKGJhY2t1cFBhdGgpfWApfSR7RU9MfWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRW5zdXJlIGNvbmZpZyBkaXJlY3RvcnkgZXhpc3RzIChpZGVtcG90ZW50IHdpdGggcmVjdXJzaXZlKVxuICAgICAgYXdhaXQgbWtkaXIoZGlybmFtZShjb25maWdQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGtleWJpbmRpbmcgdG8gdGhlIGNvbmZpZ1xuICAgIGxldCB1cGRhdGVkQ29udGVudCA9IGNvbmZpZ0NvbnRlbnRcbiAgICBpZiAoY29uZmlnQ29udGVudCAmJiAhY29uZmlnQ29udGVudC5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgIHVwZGF0ZWRDb250ZW50ICs9ICdcXG4nXG4gICAgfVxuICAgIHVwZGF0ZWRDb250ZW50ICs9ICdcXG4nICsgQUxBQ1JJVFRZX0tFWUJJTkRJTkcgKyAnXFxuJ1xuXG4gICAgLy8gV3JpdGUgdGhlIHVwZGF0ZWQgY29uZmlnXG4gICAgYXdhaXQgd3JpdGVGaWxlKGNvbmZpZ1BhdGgsIHVwZGF0ZWRDb250ZW50LCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG5cbiAgICByZXR1cm4gYCR7Y29sb3IoXG4gICAgICAnc3VjY2VzcycsXG4gICAgICB0aGVtZSxcbiAgICApKCdJbnN0YWxsZWQgQWxhY3JpdHR5IFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nJyl9JHtFT0x9JHtjb2xvcihcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgIHRoZW1lLFxuICAgICkoXG4gICAgICAnWW91IG1heSBuZWVkIHRvIHJlc3RhcnQgQWxhY3JpdHR5IGZvciBjaGFuZ2VzIHRvIHRha2UgZWZmZWN0JyxcbiAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhjb25maWdQYXRoKX1gKX0ke0VPTH1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gaW5zdGFsbCBBbGFjcml0dHkgU2hpZnQrRW50ZXIga2V5IGJpbmRpbmcnKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluc3RhbGxCaW5kaW5nc0ZvclplZCh0aGVtZTogVGhlbWVOYW1lKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgLy8gWmVkIHVzZXMgSlNPTiBrZXliaW5kaW5ncyBzaW1pbGFyIHRvIFZTQ29kZVxuICBjb25zdCB6ZWREaXIgPSBqb2luKGhvbWVkaXIoKSwgJy5jb25maWcnLCAnemVkJylcbiAgY29uc3Qga2V5bWFwUGF0aCA9IGpvaW4oemVkRGlyLCAna2V5bWFwLmpzb24nKVxuXG4gIHRyeSB7XG4gICAgLy8gRW5zdXJlIHplZCBkaXJlY3RvcnkgZXhpc3RzIChpZGVtcG90ZW50IHdpdGggcmVjdXJzaXZlKVxuICAgIGF3YWl0IG1rZGlyKHplZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcblxuICAgIC8vIFJlYWQgZXhpc3Rpbmcga2V5bWFwIGZpbGUsIG9yIGRlZmF1bHQgdG8gZW1wdHkgYXJyYXkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGxldCBrZXltYXBDb250ZW50ID0gJ1tdJ1xuICAgIGxldCBmaWxlRXhpc3RzID0gZmFsc2VcbiAgICB0cnkge1xuICAgICAga2V5bWFwQ29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGtleW1hcFBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlXG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgaWYgKCFpc0ZzSW5hY2Nlc3NpYmxlKGUpKSB0aHJvdyBlXG4gICAgfVxuXG4gICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIGtleWJpbmRpbmcgYWxyZWFkeSBleGlzdHNcbiAgICAgIGlmIChrZXltYXBDb250ZW50LmluY2x1ZGVzKCdzaGlmdC1lbnRlcicpKSB7XG4gICAgICAgIHJldHVybiBgJHtjb2xvcihcbiAgICAgICAgICAnd2FybmluZycsXG4gICAgICAgICAgdGhlbWUsXG4gICAgICAgICkoXG4gICAgICAgICAgJ0ZvdW5kIGV4aXN0aW5nIFplZCBTaGlmdCtFbnRlciBrZXkgYmluZGluZy4gUmVtb3ZlIGl0IHRvIGNvbnRpbnVlLicsXG4gICAgICAgICl9JHtFT0x9JHtjaGFsay5kaW0oYFNlZSAke2Zvcm1hdFBhdGhMaW5rKGtleW1hcFBhdGgpfWApfSR7RU9MfWBcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGJhY2t1cFxuICAgICAgY29uc3QgcmFuZG9tU2hhID0gcmFuZG9tQnl0ZXMoNCkudG9TdHJpbmcoJ2hleCcpXG4gICAgICBjb25zdCBiYWNrdXBQYXRoID0gYCR7a2V5bWFwUGF0aH0uJHtyYW5kb21TaGF9LmJha2BcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvcHlGaWxlKGtleW1hcFBhdGgsIGJhY2t1cFBhdGgpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgICB0aGVtZSxcbiAgICAgICAgKShcbiAgICAgICAgICAnRXJyb3IgYmFja2luZyB1cCBleGlzdGluZyBaZWQga2V5bWFwLiBCYWlsaW5nIG91dC4nLFxuICAgICAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhrZXltYXBQYXRoKX1gKX0ke0VPTH0ke2NoYWxrLmRpbShgQmFja3VwIHBhdGg6ICR7Zm9ybWF0UGF0aExpbmsoYmFja3VwUGF0aCl9YCl9JHtFT0x9YFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBhcnNlIGFuZCBtb2RpZnkgdGhlIGtleW1hcFxuICAgIGxldCBrZXltYXA6IEFycmF5PHtcbiAgICAgIGNvbnRleHQ/OiBzdHJpbmdcbiAgICAgIGJpbmRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT5cbiAgICB9PlxuICAgIHRyeSB7XG4gICAgICBrZXltYXAgPSBqc29uUGFyc2Uoa2V5bWFwQ29udGVudClcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXltYXApKSB7XG4gICAgICAgIGtleW1hcCA9IFtdXG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBrZXltYXAgPSBbXVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbmV3IGtleWJpbmRpbmcgZm9yIHRlcm1pbmFsIGNvbnRleHRcbiAgICBrZXltYXAucHVzaCh7XG4gICAgICBjb250ZXh0OiAnVGVybWluYWwnLFxuICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgJ3NoaWZ0LWVudGVyJzogWyd0ZXJtaW5hbDo6U2VuZFRleHQnLCAnXFx1MDAxYlxcciddLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgLy8gV3JpdGUgdGhlIHVwZGF0ZWQga2V5bWFwXG4gICAgYXdhaXQgd3JpdGVGaWxlKGtleW1hcFBhdGgsIGpzb25TdHJpbmdpZnkoa2V5bWFwLCBudWxsLCAyKSArICdcXG4nLCB7XG4gICAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGAke2NvbG9yKFxuICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgdGhlbWUsXG4gICAgKShcbiAgICAgICdJbnN0YWxsZWQgWmVkIFNoaWZ0K0VudGVyIGtleSBiaW5kaW5nJyxcbiAgICApfSR7RU9MfSR7Y2hhbGsuZGltKGBTZWUgJHtmb3JtYXRQYXRoTGluayhrZXltYXBQYXRoKX1gKX0ke0VPTH1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gaW5zdGFsbCBaZWQgU2hpZnQrRW50ZXIga2V5IGJpbmRpbmcnKVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLFlBQVk7QUFpQmQsU0FBUyxXQUFtQjtBQUNqQyxRQUFNLGNBQWMsb0JBQW9CLEVBQUU7QUFBQSxJQUN4QyxLQUFLLE9BQU8sR0FBRyxXQUFXO0FBQUEsRUFDNUI7QUFDQSxRQUFNLHNCQUFzQixXQUFXLE9BQU8sQ0FBQztBQUUvQyxTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLElBQ2I7QUFB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Ozs7IiwKICAibmFtZXMiOiBbImpvaW4iLCAiaG9tZWRpciIsICJqb2luIiwgInJhbmRvbUJ5dGVzIiwgImNvcHlGaWxlIiwgIm1rZGlyIiwgInJlYWRGaWxlIiwgIndyaXRlRmlsZSIsICJob21lZGlyIiwgInBsYXRmb3JtIiwgImRpcm5hbWUiLCAiam9pbiIsICJwYXRoVG9GaWxlVVJMIiwgImlzVlNDb2RlUmVtb3RlU1NIIiwgImFza3Bhc3NNYWluIiwgInByb2Nlc3MiLCAiZW52IiwgIlZTQ09ERV9HSVRfQVNLUEFTU19NQUlOIiwgInBhdGgiLCAiUEFUSCIsICJpbmNsdWRlcyIsICJnZXROYXRpdmVDU0l1VGVybWluYWxEaXNwbGF5TmFtZSIsICJ0ZXJtaW5hbCIsICJOQVRJVkVfQ1NJVV9URVJNSU5BTFMiLCAiZm9ybWF0UGF0aExpbmsiLCAiZmlsZVBhdGgiLCAic3VwcG9ydHNIeXBlcmxpbmtzIiwgImZpbGVVcmwiLCAiaHJlZiIsICJzaG91bGRPZmZlclRlcm1pbmFsU2V0dXAiLCAic2V0dXBUZXJtaW5hbCIsICJ0aGVtZSIsICJyZXN1bHQiLCAiZW5hYmxlT3B0aW9uQXNNZXRhRm9yVGVybWluYWwiLCAiaW5zdGFsbEJpbmRpbmdzRm9yVlNDb2RlVGVybWluYWwiLCAiaW5zdGFsbEJpbmRpbmdzRm9yQWxhY3JpdHR5IiwgImluc3RhbGxCaW5kaW5nc0ZvclplZCIsICJzYXZlR2xvYmFsQ29uZmlnIiwgImN1cnJlbnQiLCAic2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWQiLCAib3B0aW9uQXNNZXRhS2V5SW5zdGFsbGVkIiwgIm1heWJlTWFya1Byb2plY3RPbmJvYXJkaW5nQ29tcGxldGUiLCAic2V0dXBTaGVsbENvbXBsZXRpb24iLCAiaXNTaGlmdEVudGVyS2V5QmluZGluZ0luc3RhbGxlZCIsICJnZXRHbG9iYWxDb25maWciLCAiaGFzVXNlZEJhY2tzbGFzaFJldHVybiIsICJtYXJrQmFja3NsYXNoUmV0dXJuVXNlZCIsICJjb25maWciLCAiY2FsbCIsICJvbkRvbmUiLCAiY29udGV4dCIsICJfYXJncyIsICJtZXNzYWdlIiwgInRlcm1pbmFsTmFtZSIsICJjdXJyZW50UGxhdGZvcm0iLCAiZ2V0UGxhdGZvcm0iLCAicGxhdGZvcm1UZXJtaW5hbHMiLCAiY2hhbGsiLCAiZGltIiwgIm9wdGlvbnMiLCAiZWRpdG9yIiwgImNvbG9yIiwgIkVPTCIsICJlZGl0b3JEaXIiLCAidXNlckRpclBhdGgiLCAia2V5YmluZGluZ3NQYXRoIiwgInJlY3Vyc2l2ZSIsICJjb250ZW50IiwgImtleWJpbmRpbmdzIiwgImZpbGVFeGlzdHMiLCAiZW5jb2RpbmciLCAic2FmZVBhcnNlSlNPTkMiLCAiZSIsICJpc0ZzSW5hY2Nlc3NpYmxlIiwgInJhbmRvbVNoYSIsICJ0b1N0cmluZyIsICJiYWNrdXBQYXRoIiwgImV4aXN0aW5nQmluZGluZyIsICJmaW5kIiwgImJpbmRpbmciLCAia2V5IiwgImNvbW1hbmQiLCAid2hlbiIsICJuZXdLZXliaW5kaW5nIiwgImFyZ3MiLCAidGV4dCIsICJ1cGRhdGVkQ29udGVudCIsICJhZGRJdGVtVG9KU09OQ0FycmF5IiwgImVycm9yIiwgImxvZ0Vycm9yIiwgIkVycm9yIiwgImVuYWJsZU9wdGlvbkFzTWV0YUZvclByb2ZpbGUiLCAicHJvZmlsZU5hbWUiLCAiY29kZSIsICJhZGRDb2RlIiwgImV4ZWNGaWxlTm9UaHJvdyIsICJnZXRUZXJtaW5hbFBsaXN0UGF0aCIsICJzZXRDb2RlIiwgImRpc2FibGVBdWRpb0JlbGxGb3JQcm9maWxlIiwgImJhY2t1cFRlcm1pbmFsUHJlZmVyZW5jZXMiLCAic3Rkb3V0IiwgImRlZmF1bHRQcm9maWxlIiwgInJlYWRDb2RlIiwgInRyaW0iLCAic3RhcnR1cFByb2ZpbGUiLCAic3RhcnR1cENvZGUiLCAid2FzQW55UHJvZmlsZVVwZGF0ZWQiLCAiZGVmYXVsdFByb2ZpbGVOYW1lIiwgIm9wdGlvbkFzTWV0YUVuYWJsZWQiLCAiYXVkaW9CZWxsRGlzYWJsZWQiLCAic3RhcnR1cFByb2ZpbGVOYW1lIiwgInN0YXJ0dXBPcHRpb25Bc01ldGFFbmFibGVkIiwgInN0YXJ0dXBBdWRpb0JlbGxEaXNhYmxlZCIsICJtYXJrVGVybWluYWxTZXR1cENvbXBsZXRlIiwgInJlc3RvcmVSZXN1bHQiLCAiY2hlY2tBbmRSZXN0b3JlVGVybWluYWxCYWNrdXAiLCAiZXJyb3JNZXNzYWdlIiwgInN0YXR1cyIsICJBTEFDUklUVFlfS0VZQklORElORyIsICJjb25maWdQYXRocyIsICJ4ZGdDb25maWdIb21lIiwgIlhER19DT05GSUdfSE9NRSIsICJwdXNoIiwgImFwcERhdGEiLCAiQVBQREFUQSIsICJjb25maWdQYXRoIiwgImNvbmZpZ0NvbnRlbnQiLCAiY29uZmlnRXhpc3RzIiwgImVuZHNXaXRoIiwgInplZERpciIsICJrZXltYXBQYXRoIiwgImtleW1hcENvbnRlbnQiLCAia2V5bWFwIiwgImpzb25QYXJzZSIsICJBcnJheSIsICJpc0FycmF5IiwgImJpbmRpbmdzIiwgImpzb25TdHJpbmdpZnkiLCAiZ2hvc3R0eSIsICJraXR0eSIsICJXZXpUZXJtIiwgIldhcnBUZXJtaW5hbCJdCn0K
