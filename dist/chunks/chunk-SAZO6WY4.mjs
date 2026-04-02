#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  enablePluginOp,
  init_pluginOperations
} from "./chunk-T4DYF3JD.mjs";
import {
  init_pluginStartupCheck,
  installSelectedPlugins
} from "./chunk-JQUXJYOZ.mjs";
import {
  OFFICIAL_MARKETPLACE_NAME,
  Select,
  Spinner,
  addMarketplaceSource,
  clearAllCaches,
  clearMarketplacesCache,
  init_Spinner,
  init_cacheUtils,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_officialMarketplace,
  init_pluginLoader,
  init_select,
  isPluginInstalled,
  loadAllPlugins,
  loadKnownMarketplacesConfig,
  refreshMarketplace
} from "./chunk-FMU4URRE.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_instances,
  init_react_compiler_runtime,
  instances_default
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  init_file,
  pathExists
} from "./chunk-NKGQGSP5.mjs";
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  execa,
  init_execa
} from "./chunk-ZAYB3WZV.mjs";
import {
  init_debug,
  init_errors,
  isENOENT,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/thinkback/thinkback.tsx
import { readFile } from "fs/promises";
import { join } from "path";
function getMarketplaceName() {
  return false ? INTERNAL_MARKETPLACE_NAME : OFFICIAL_MARKETPLACE_NAME;
}
function getMarketplaceRepo() {
  return false ? INTERNAL_MARKETPLACE_REPO : OFFICIAL_MARKETPLACE_REPO;
}
function getPluginId() {
  return `thinkback@${getMarketplaceName()}`;
}
async function getThinkbackSkillDir() {
  const {
    enabled
  } = await loadAllPlugins();
  const thinkbackPlugin = enabled.find((p) => p.name === "thinkback" || p.source && p.source.includes(getPluginId()));
  if (!thinkbackPlugin) {
    return null;
  }
  const skillDir = join(thinkbackPlugin.path, "skills", SKILL_NAME);
  if (await pathExists(skillDir)) {
    return skillDir;
  }
  return null;
}
async function playAnimation(skillDir) {
  const dataPath = join(skillDir, "year_in_review.js");
  const playerPath = join(skillDir, "player.js");
  try {
    await readFile(dataPath);
  } catch (e) {
    if (isENOENT(e)) {
      return {
        success: false,
        message: "No animation found. Run /think-back first to generate one."
      };
    }
    logError(e);
    return {
      success: false,
      message: `Could not access animation data: ${toError(e).message}`
    };
  }
  try {
    await readFile(playerPath);
  } catch (e) {
    if (isENOENT(e)) {
      return {
        success: false,
        message: "Player script not found. The player.js file is missing from the thinkback skill."
      };
    }
    logError(e);
    return {
      success: false,
      message: `Could not access player script: ${toError(e).message}`
    };
  }
  const inkInstance = instances_default.get(process.stdout);
  if (!inkInstance) {
    return {
      success: false,
      message: "Failed to access terminal instance"
    };
  }
  inkInstance.enterAlternateScreen();
  try {
    await execa("node", [playerPath], {
      stdio: "inherit",
      cwd: skillDir,
      reject: false
    });
  } catch {
  } finally {
    inkInstance.exitAlternateScreen();
  }
  const htmlPath = join(skillDir, "year_in_review.html");
  if (await pathExists(htmlPath)) {
    const platform = getPlatform();
    const openCmd = platform === "macos" ? "open" : platform === "windows" ? "start" : "xdg-open";
    void execFileNoThrow(openCmd, [htmlPath]);
  }
  return {
    success: true,
    message: "Year in review animation complete!"
  };
}
function ThinkbackInstaller({
  onReady,
  onError
}) {
  const [state, setState] = useState({
    phase: "checking"
  });
  const [progressMessage, setProgressMessage] = useState("");
  useEffect(() => {
    async function checkAndInstall() {
      try {
        const knownMarketplaces = await loadKnownMarketplacesConfig();
        const marketplaceName = getMarketplaceName();
        const marketplaceRepo = getMarketplaceRepo();
        const pluginId = getPluginId();
        const marketplaceInstalled = marketplaceName in knownMarketplaces;
        const pluginAlreadyInstalled = isPluginInstalled(pluginId);
        if (!marketplaceInstalled) {
          setState({
            phase: "installing-marketplace"
          });
          logForDebugging(`Installing marketplace ${marketplaceRepo}`);
          await addMarketplaceSource({
            source: "github",
            repo: marketplaceRepo
          }, (message) => {
            setProgressMessage(message);
          });
          clearAllCaches();
          logForDebugging(`Marketplace ${marketplaceName} installed`);
        } else if (!pluginAlreadyInstalled) {
          setState({
            phase: "installing-marketplace"
          });
          setProgressMessage("Updating marketplace\u2026");
          logForDebugging(`Refreshing marketplace ${marketplaceName}`);
          await refreshMarketplace(marketplaceName, (message_0) => {
            setProgressMessage(message_0);
          });
          clearMarketplacesCache();
          clearAllCaches();
          logForDebugging(`Marketplace ${marketplaceName} refreshed`);
        }
        if (!pluginAlreadyInstalled) {
          setState({
            phase: "installing-plugin"
          });
          logForDebugging(`Installing plugin ${pluginId}`);
          const result = await installSelectedPlugins([pluginId]);
          if (result.failed.length > 0) {
            const errorMsg = result.failed.map((f) => `${f.name}: ${f.error}`).join(", ");
            throw new Error(`Failed to install plugin: ${errorMsg}`);
          }
          clearAllCaches();
          logForDebugging(`Plugin ${pluginId} installed`);
        } else {
          const {
            disabled
          } = await loadAllPlugins();
          const isDisabled = disabled.some((p) => p.name === "thinkback" || p.source?.includes(pluginId));
          if (isDisabled) {
            setState({
              phase: "enabling-plugin"
            });
            logForDebugging(`Enabling plugin ${pluginId}`);
            const enableResult = await enablePluginOp(pluginId);
            if (!enableResult.success) {
              throw new Error(`Failed to enable plugin: ${enableResult.message}`);
            }
            clearAllCaches();
            logForDebugging(`Plugin ${pluginId} enabled`);
          }
        }
        setState({
          phase: "ready"
        });
        onReady();
      } catch (error) {
        const err = toError(error);
        logError(err);
        setState({
          phase: "error",
          message: err.message
        });
        onError(err.message);
      }
    }
    void checkAndInstall();
  }, [onReady, onError]);
  if (state.phase === "error") {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", state.message));
  }
  if (state.phase === "ready") {
    return null;
  }
  const statusMessage = state.phase === "checking" ? "Checking thinkback installation\u2026" : state.phase === "installing-marketplace" ? "Installing marketplace\u2026" : state.phase === "enabling-plugin" ? "Enabling thinkback plugin\u2026" : "Installing thinkback plugin\u2026";
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(Spinner, null), /* @__PURE__ */ createElement(ThemedText, null, progressMessage || statusMessage)));
}
function ThinkbackMenu(t0) {
  const $ = c(19);
  const {
    onDone,
    onAction,
    skillDir,
    hasGenerated
  } = t0;
  const [hasSelected, setHasSelected] = useState(false);
  let t1;
  if ($[0] !== hasGenerated) {
    t1 = hasGenerated ? [{
      label: "Play animation",
      value: "play",
      description: "Watch your year in review"
    }, {
      label: "Edit content",
      value: "edit",
      description: "Modify the animation"
    }, {
      label: "Fix errors",
      value: "fix",
      description: "Fix validation or rendering issues"
    }, {
      label: "Regenerate",
      value: "regenerate",
      description: "Create a new animation from scratch"
    }] : [{
      label: "Let's go!",
      value: "regenerate",
      description: "Generate your personalized animation"
    }];
    $[0] = hasGenerated;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const options = t1;
  let t2;
  if ($[2] !== onAction || $[3] !== onDone || $[4] !== skillDir) {
    t2 = function handleSelect2(value) {
      setHasSelected(true);
      if (value === "play") {
        playAnimation(skillDir).then(() => {
          onDone(void 0, {
            display: "skip"
          });
        });
      } else {
        onAction(value);
      }
    };
    $[2] = onAction;
    $[3] = onDone;
    $[4] = skillDir;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const handleSelect = t2;
  let t3;
  if ($[6] !== onDone) {
    t3 = function handleCancel2() {
      onDone(void 0, {
        display: "skip"
      });
    };
    $[6] = onDone;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const handleCancel = t3;
  if (hasSelected) {
    return null;
  }
  let t4;
  if ($[8] !== hasGenerated) {
    t4 = !hasGenerated && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Relive your year of coding with Blaude."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "We'll create a personalized ASCII animation celebrating your journey."));
    $[8] = hasGenerated;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== handleSelect || $[11] !== options) {
    t5 = /* @__PURE__ */ createElement(Select, { options, onChange: handleSelect, visibleOptionCount: 5 });
    $[10] = handleSelect;
    $[11] = options;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] !== t4 || $[14] !== t5) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t4, t5);
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== handleCancel || $[17] !== t6) {
    t7 = /* @__PURE__ */ createElement(Dialog, { title: "Think Back on 2025 with Blaude", subtitle: "Generate your 2025 Blaude Think Back (takes a few minutes to run)", onCancel: handleCancel, color: "claude" }, t6);
    $[16] = handleCancel;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
}
function ThinkbackFlow(t0) {
  const $ = c(27);
  const {
    onDone
  } = t0;
  const [installComplete, setInstallComplete] = useState(false);
  const [installError, setInstallError] = useState(null);
  const [skillDir, setSkillDir] = useState(null);
  const [hasGenerated, setHasGenerated] = useState(null);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = function handleReady2() {
      setInstallComplete(true);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const handleReady = t1;
  let t2;
  if ($[1] !== onDone) {
    t2 = (message) => {
      setInstallError(message);
      onDone(`Error with thinkback: ${message}. Try running /plugin to manually install the think-back plugin.`, {
        display: "system"
      });
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleError = t2;
  let t3;
  let t4;
  if ($[3] !== handleError || $[4] !== installComplete || $[5] !== installError || $[6] !== skillDir) {
    t3 = () => {
      if (installComplete && !skillDir && !installError) {
        getThinkbackSkillDir().then((dir) => {
          if (dir) {
            logForDebugging(`Thinkback skill directory: ${dir}`);
            setSkillDir(dir);
          } else {
            handleError("Could not find thinkback skill directory");
          }
        });
      }
    };
    t4 = [installComplete, skillDir, installError, handleError];
    $[3] = handleError;
    $[4] = installComplete;
    $[5] = installError;
    $[6] = skillDir;
    $[7] = t3;
    $[8] = t4;
  } else {
    t3 = $[7];
    t4 = $[8];
  }
  useEffect(t3, t4);
  let t5;
  let t6;
  if ($[9] !== skillDir) {
    t5 = () => {
      if (!skillDir) {
        return;
      }
      const dataPath = join(skillDir, "year_in_review.js");
      pathExists(dataPath).then((exists) => {
        logForDebugging(`Checking for ${dataPath}: ${exists ? "found" : "not found"}`);
        setHasGenerated(exists);
      });
    };
    t6 = [skillDir];
    $[9] = skillDir;
    $[10] = t5;
    $[11] = t6;
  } else {
    t5 = $[10];
    t6 = $[11];
  }
  useEffect(t5, t6);
  let t7;
  if ($[12] !== onDone) {
    t7 = function handleAction2(action) {
      const prompts = {
        edit: EDIT_PROMPT,
        fix: FIX_PROMPT,
        regenerate: REGENERATE_PROMPT
      };
      onDone(prompts[action], {
        display: "user",
        shouldQuery: true
      });
    };
    $[12] = onDone;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  const handleAction = t7;
  if (installError) {
    let t82;
    if ($[14] !== installError) {
      t82 = /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", installError);
      $[14] = installError;
      $[15] = t82;
    } else {
      t82 = $[15];
    }
    let t9;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t9 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Try running /plugin to manually install the think-back plugin.");
      $[16] = t9;
    } else {
      t9 = $[16];
    }
    let t10;
    if ($[17] !== t82) {
      t10 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t82, t9);
      $[17] = t82;
      $[18] = t10;
    } else {
      t10 = $[18];
    }
    return t10;
  }
  if (!installComplete) {
    let t82;
    if ($[19] !== handleError) {
      t82 = /* @__PURE__ */ createElement(ThinkbackInstaller, { onReady: handleReady, onError: handleError });
      $[19] = handleError;
      $[20] = t82;
    } else {
      t82 = $[20];
    }
    return t82;
  }
  if (!skillDir || hasGenerated === null) {
    let t82;
    if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(Spinner, null), /* @__PURE__ */ createElement(ThemedText, null, "Loading thinkback skill\u2026"));
      $[21] = t82;
    } else {
      t82 = $[21];
    }
    return t82;
  }
  let t8;
  if ($[22] !== handleAction || $[23] !== hasGenerated || $[24] !== onDone || $[25] !== skillDir) {
    t8 = /* @__PURE__ */ createElement(ThinkbackMenu, { onDone, onAction: handleAction, skillDir, hasGenerated });
    $[22] = handleAction;
    $[23] = hasGenerated;
    $[24] = onDone;
    $[25] = skillDir;
    $[26] = t8;
  } else {
    t8 = $[26];
  }
  return t8;
}
async function call(onDone) {
  return /* @__PURE__ */ createElement(ThinkbackFlow, { onDone });
}
var OFFICIAL_MARKETPLACE_REPO, SKILL_NAME, EDIT_PROMPT, FIX_PROMPT, REGENERATE_PROMPT;
var init_thinkback = __esm({
  "src/commands/thinkback/thinkback.tsx"() {
    init_react_compiler_runtime();
    init_execa();
    init_react();
    init_react();
    init_select();
    init_Dialog();
    init_Spinner();
    init_instances();
    init_ink();
    init_pluginOperations();
    init_debug();
    init_errors();
    init_execFileNoThrow();
    init_file();
    init_log();
    init_platform();
    init_cacheUtils();
    init_installedPluginsManager();
    init_marketplaceManager();
    init_officialMarketplace();
    init_pluginLoader();
    init_pluginStartupCheck();
    OFFICIAL_MARKETPLACE_REPO = "anthropics/claude-plugins-official";
    SKILL_NAME = "thinkback";
    EDIT_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=edit to modify my existing Blaude year in review animation. Ask me what I want to change. When the animation is ready, tell the user to run /think-back again to play it.';
    FIX_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=fix to fix validation or rendering errors in my existing Blaude year in review animation. Run the validator, identify errors, and fix them. When the animation is ready, tell the user to run /think-back again to play it.';
    REGENERATE_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=regenerate to create a completely new Blaude year in review animation from scratch. Delete the existing animation and start fresh. When the animation is ready, tell the user to run /think-back again to play it.';
  }
});

export {
  playAnimation,
  call,
  init_thinkback
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3RoaW5rYmFjay90aGlua2JhY2sudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBleGVjYSB9IGZyb20gJ2V4ZWNhJ1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXIuanMnXG5pbXBvcnQgaW5zdGFuY2VzIGZyb20gJy4uLy4uL2luay9pbnN0YW5jZXMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBlbmFibGVQbHVnaW5PcCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BsdWdpbnMvcGx1Z2luT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgaXNFTk9FTlQsIHRvRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi8uLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBwYXRoRXhpc3RzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsZS5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm0gfSBmcm9tICcuLi8uLi91dGlscy9wbGF0Zm9ybS5qcydcbmltcG9ydCB7IGNsZWFyQWxsQ2FjaGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9jYWNoZVV0aWxzLmpzJ1xuaW1wb3J0IHsgaXNQbHVnaW5JbnN0YWxsZWQgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2luc3RhbGxlZFBsdWdpbnNNYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgYWRkTWFya2V0cGxhY2VTb3VyY2UsXG4gIGNsZWFyTWFya2V0cGxhY2VzQ2FjaGUsXG4gIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyxcbiAgcmVmcmVzaE1hcmtldHBsYWNlLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL21hcmtldHBsYWNlTWFuYWdlci5qcydcbmltcG9ydCB7IE9GRklDSUFMX01BUktFVFBMQUNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL29mZmljaWFsTWFya2V0cGxhY2UuanMnXG5pbXBvcnQgeyBsb2FkQWxsUGx1Z2lucyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHsgaW5zdGFsbFNlbGVjdGVkUGx1Z2lucyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luU3RhcnR1cENoZWNrLmpzJ1xuXG4vLyBNYXJrZXRwbGFjZSBhbmQgcGx1Z2luIGlkZW50aWZpZXJzIC0gdmFyaWVzIGJ5IHVzZXIgdHlwZVxuY29uc3QgSU5URVJOQUxfTUFSS0VUUExBQ0VfTkFNRSA9ICdjbGF1ZGUtY29kZS1tYXJrZXRwbGFjZSdcbmNvbnN0IElOVEVSTkFMX01BUktFVFBMQUNFX1JFUE8gPSAnYW50aHJvcGljcy9jbGF1ZGUtY29kZS1tYXJrZXRwbGFjZSdcbmNvbnN0IE9GRklDSUFMX01BUktFVFBMQUNFX1JFUE8gPSAnYW50aHJvcGljcy9jbGF1ZGUtcGx1Z2lucy1vZmZpY2lhbCdcblxuZnVuY3Rpb24gZ2V0TWFya2V0cGxhY2VOYW1lKCk6IHN0cmluZyB7XG4gIHJldHVybiBcImV4dGVybmFsXCIgPT09ICdhbnQnXG4gICAgPyBJTlRFUk5BTF9NQVJLRVRQTEFDRV9OQU1FXG4gICAgOiBPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FXG59XG5cbmZ1bmN0aW9uIGdldE1hcmtldHBsYWNlUmVwbygpOiBzdHJpbmcge1xuICByZXR1cm4gXCJleHRlcm5hbFwiID09PSAnYW50J1xuICAgID8gSU5URVJOQUxfTUFSS0VUUExBQ0VfUkVQT1xuICAgIDogT0ZGSUNJQUxfTUFSS0VUUExBQ0VfUkVQT1xufVxuXG5mdW5jdGlvbiBnZXRQbHVnaW5JZCgpOiBzdHJpbmcge1xuICByZXR1cm4gYHRoaW5rYmFja0Ake2dldE1hcmtldHBsYWNlTmFtZSgpfWBcbn1cblxuY29uc3QgU0tJTExfTkFNRSA9ICd0aGlua2JhY2snXG5cbi8qKlxuICogR2V0IHRoZSB0aGlua2JhY2sgc2tpbGwgZGlyZWN0b3J5IGZyb20gdGhlIGluc3RhbGxlZCBwbHVnaW4ncyBjYWNoZSBwYXRoXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRoaW5rYmFja1NraWxsRGlyKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBjb25zdCB7IGVuYWJsZWQgfSA9IGF3YWl0IGxvYWRBbGxQbHVnaW5zKClcbiAgY29uc3QgdGhpbmtiYWNrUGx1Z2luID0gZW5hYmxlZC5maW5kKFxuICAgIHAgPT5cbiAgICAgIHAubmFtZSA9PT0gJ3RoaW5rYmFjaycgfHwgKHAuc291cmNlICYmIHAuc291cmNlLmluY2x1ZGVzKGdldFBsdWdpbklkKCkpKSxcbiAgKVxuXG4gIGlmICghdGhpbmtiYWNrUGx1Z2luKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHNraWxsRGlyID0gam9pbih0aGlua2JhY2tQbHVnaW4ucGF0aCwgJ3NraWxscycsIFNLSUxMX05BTUUpXG4gIGlmIChhd2FpdCBwYXRoRXhpc3RzKHNraWxsRGlyKSkge1xuICAgIHJldHVybiBza2lsbERpclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsYXlBbmltYXRpb24oc2tpbGxEaXI6IHN0cmluZyk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuXG4gIG1lc3NhZ2U6IHN0cmluZ1xufT4ge1xuICBjb25zdCBkYXRhUGF0aCA9IGpvaW4oc2tpbGxEaXIsICd5ZWFyX2luX3Jldmlldy5qcycpXG4gIGNvbnN0IHBsYXllclBhdGggPSBqb2luKHNraWxsRGlyLCAncGxheWVyLmpzJylcblxuICAvLyBCb3RoIGZpbGVzIGFyZSBwcmVyZXF1aXNpdGVzIGZvciB0aGUgbm9kZSBzdWJwcm9jZXNzLiBSZWFkIHRoZW0gaGVyZVxuICAvLyAobm90IGF0IGNhbGwgc2l0ZXMpIHNvIGFsbCBjYWxsZXJzIGdldCBjb25zaXN0ZW50IGVycm9yIG1lc3NhZ2luZy4gVGhlXG4gIC8vIHN1YnByb2Nlc3MgcnVucyB3aXRoIHJlamVjdDogZmFsc2UsIHNvIGEgbWlzc2luZyBmaWxlIHdvdWxkIG90aGVyd2lzZVxuICAvLyBzaWxlbnRseSByZXR1cm4gc3VjY2Vzcy4gVXNpbmcgcmVhZEZpbGUgKG5vdCBhY2Nlc3MpIHBlciBDTEFVREUubWQuXG4gIC8vXG4gIC8vIE5vbi1FTk9FTlQgZXJyb3JzIChFQUNDRVMgZXRjKSBhcmUgbG9nZ2VkIGFuZCByZXR1cm5lZCBhcyBmYWlsdXJlcyByYXRoZXJcbiAgLy8gdGhhbiB0aHJvd24g4oCUIHRoZSBvbGQgcGF0aEV4aXN0cy1iYXNlZCBjb2RlIG5ldmVyIHRocmV3LCBhbmQgb25lIGNhbGxlclxuICAvLyAoaGFuZGxlU2VsZWN0KSB1c2VzIGB2b2lkIHBsYXlBbmltYXRpb24oKS50aGVuKC4uLilgIHdpdGhvdXQgYSAuY2F0Y2goKS5cbiAgdHJ5IHtcbiAgICBhd2FpdCByZWFkRmlsZShkYXRhUGF0aClcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGlmIChpc0VOT0VOVChlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBhbmltYXRpb24gZm91bmQuIFJ1biAvdGhpbmstYmFjayBmaXJzdCB0byBnZW5lcmF0ZSBvbmUuJyxcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nRXJyb3IoZSlcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBgQ291bGQgbm90IGFjY2VzcyBhbmltYXRpb24gZGF0YTogJHt0b0Vycm9yKGUpLm1lc3NhZ2V9YCxcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHJlYWRGaWxlKHBsYXllclBhdGgpXG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBpZiAoaXNFTk9FTlQoZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdQbGF5ZXIgc2NyaXB0IG5vdCBmb3VuZC4gVGhlIHBsYXllci5qcyBmaWxlIGlzIG1pc3NpbmcgZnJvbSB0aGUgdGhpbmtiYWNrIHNraWxsLicsXG4gICAgICB9XG4gICAgfVxuICAgIGxvZ0Vycm9yKGUpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYENvdWxkIG5vdCBhY2Nlc3MgcGxheWVyIHNjcmlwdDogJHt0b0Vycm9yKGUpLm1lc3NhZ2V9YCxcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgaW5rIGluc3RhbmNlIGZvciB0ZXJtaW5hbCB0YWtlb3ZlclxuICBjb25zdCBpbmtJbnN0YW5jZSA9IGluc3RhbmNlcy5nZXQocHJvY2Vzcy5zdGRvdXQpXG4gIGlmICghaW5rSW5zdGFuY2UpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBhY2Nlc3MgdGVybWluYWwgaW5zdGFuY2UnIH1cbiAgfVxuXG4gIGlua0luc3RhbmNlLmVudGVyQWx0ZXJuYXRlU2NyZWVuKClcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjYSgnbm9kZScsIFtwbGF5ZXJQYXRoXSwge1xuICAgICAgc3RkaW86ICdpbmhlcml0JyxcbiAgICAgIGN3ZDogc2tpbGxEaXIsXG4gICAgICByZWplY3Q6IGZhbHNlLFxuICAgIH0pXG4gIH0gY2F0Y2gge1xuICAgIC8vIEFuaW1hdGlvbiBtYXkgaGF2ZSBiZWVuIGludGVycnVwdGVkIChlLmcuLCBDdHJsK0MpXG4gIH0gZmluYWxseSB7XG4gICAgaW5rSW5zdGFuY2UuZXhpdEFsdGVybmF0ZVNjcmVlbigpXG4gIH1cblxuICAvLyBPcGVuIHRoZSBIVE1MIGZpbGUgaW4gYnJvd3NlciBmb3IgdmlkZW8gZG93bmxvYWRcbiAgY29uc3QgaHRtbFBhdGggPSBqb2luKHNraWxsRGlyLCAneWVhcl9pbl9yZXZpZXcuaHRtbCcpXG4gIGlmIChhd2FpdCBwYXRoRXhpc3RzKGh0bWxQYXRoKSkge1xuICAgIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuICAgIGNvbnN0IG9wZW5DbWQgPVxuICAgICAgcGxhdGZvcm0gPT09ICdtYWNvcydcbiAgICAgICAgPyAnb3BlbidcbiAgICAgICAgOiBwbGF0Zm9ybSA9PT0gJ3dpbmRvd3MnXG4gICAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgICAgOiAneGRnLW9wZW4nXG4gICAgdm9pZCBleGVjRmlsZU5vVGhyb3cob3BlbkNtZCwgW2h0bWxQYXRoXSlcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdZZWFyIGluIHJldmlldyBhbmltYXRpb24gY29tcGxldGUhJyB9XG59XG5cbnR5cGUgSW5zdGFsbFN0YXRlID1cbiAgfCB7IHBoYXNlOiAnY2hlY2tpbmcnIH1cbiAgfCB7IHBoYXNlOiAnaW5zdGFsbGluZy1tYXJrZXRwbGFjZScgfVxuICB8IHsgcGhhc2U6ICdpbnN0YWxsaW5nLXBsdWdpbicgfVxuICB8IHsgcGhhc2U6ICdlbmFibGluZy1wbHVnaW4nIH1cbiAgfCB7IHBoYXNlOiAncmVhZHknIH1cbiAgfCB7IHBoYXNlOiAnZXJyb3InOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBUaGlua2JhY2tJbnN0YWxsZXIoe1xuICBvblJlYWR5LFxuICBvbkVycm9yLFxufToge1xuICBvblJlYWR5OiAoKSA9PiB2b2lkXG4gIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPEluc3RhbGxTdGF0ZT4oeyBwaGFzZTogJ2NoZWNraW5nJyB9KVxuICBjb25zdCBbcHJvZ3Jlc3NNZXNzYWdlLCBzZXRQcm9ncmVzc01lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBjaGVja0FuZEluc3RhbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiBtYXJrZXRwbGFjZSBpcyBpbnN0YWxsZWRcbiAgICAgICAgY29uc3Qga25vd25NYXJrZXRwbGFjZXMgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuICAgICAgICBjb25zdCBtYXJrZXRwbGFjZU5hbWUgPSBnZXRNYXJrZXRwbGFjZU5hbWUoKVxuICAgICAgICBjb25zdCBtYXJrZXRwbGFjZVJlcG8gPSBnZXRNYXJrZXRwbGFjZVJlcG8oKVxuICAgICAgICBjb25zdCBwbHVnaW5JZCA9IGdldFBsdWdpbklkKClcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2VJbnN0YWxsZWQgPSBtYXJrZXRwbGFjZU5hbWUgaW4ga25vd25NYXJrZXRwbGFjZXNcblxuICAgICAgICAvLyBDaGVjayBpZiBwbHVnaW4gaXMgYWxyZWFkeSBpbnN0YWxsZWQgZmlyc3RcbiAgICAgICAgY29uc3QgcGx1Z2luQWxyZWFkeUluc3RhbGxlZCA9IGlzUGx1Z2luSW5zdGFsbGVkKHBsdWdpbklkKVxuXG4gICAgICAgIGlmICghbWFya2V0cGxhY2VJbnN0YWxsZWQpIHtcbiAgICAgICAgICAvLyBJbnN0YWxsIHRoZSBtYXJrZXRwbGFjZVxuICAgICAgICAgIHNldFN0YXRlKHsgcGhhc2U6ICdpbnN0YWxsaW5nLW1hcmtldHBsYWNlJyB9KVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgSW5zdGFsbGluZyBtYXJrZXRwbGFjZSAke21hcmtldHBsYWNlUmVwb31gKVxuXG4gICAgICAgICAgYXdhaXQgYWRkTWFya2V0cGxhY2VTb3VyY2UoXG4gICAgICAgICAgICB7IHNvdXJjZTogJ2dpdGh1YicsIHJlcG86IG1hcmtldHBsYWNlUmVwbyB9LFxuICAgICAgICAgICAgbWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgIHNldFByb2dyZXNzTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApXG4gICAgICAgICAgY2xlYXJBbGxDYWNoZXMoKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgTWFya2V0cGxhY2UgJHttYXJrZXRwbGFjZU5hbWV9IGluc3RhbGxlZGApXG4gICAgICAgIH0gZWxzZSBpZiAoIXBsdWdpbkFscmVhZHlJbnN0YWxsZWQpIHtcbiAgICAgICAgICAvLyBNYXJrZXRwbGFjZSBpbnN0YWxsZWQgYnV0IHBsdWdpbiBub3QgaW5zdGFsbGVkIC0gcmVmcmVzaCB0byBnZXQgbGF0ZXN0IHBsdWdpbnNcbiAgICAgICAgICAvLyBPbmx5IHJlZnJlc2ggd2hlbiBuZWVkZWQgdG8gYXZvaWQgcG90ZW50aWFsbHkgZGVzdHJ1Y3RpdmUgZ2l0IG9wZXJhdGlvbnNcbiAgICAgICAgICBzZXRTdGF0ZSh7IHBoYXNlOiAnaW5zdGFsbGluZy1tYXJrZXRwbGFjZScgfSlcbiAgICAgICAgICBzZXRQcm9ncmVzc01lc3NhZ2UoJ1VwZGF0aW5nIG1hcmtldHBsYWNl4oCmJylcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFJlZnJlc2hpbmcgbWFya2V0cGxhY2UgJHttYXJrZXRwbGFjZU5hbWV9YClcblxuICAgICAgICAgIGF3YWl0IHJlZnJlc2hNYXJrZXRwbGFjZShtYXJrZXRwbGFjZU5hbWUsIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjbGVhck1hcmtldHBsYWNlc0NhY2hlKClcbiAgICAgICAgICBjbGVhckFsbENhY2hlcygpXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBNYXJrZXRwbGFjZSAke21hcmtldHBsYWNlTmFtZX0gcmVmcmVzaGVkYClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGx1Z2luQWxyZWFkeUluc3RhbGxlZCkge1xuICAgICAgICAgIC8vIEluc3RhbGwgdGhlIHBsdWdpblxuICAgICAgICAgIHNldFN0YXRlKHsgcGhhc2U6ICdpbnN0YWxsaW5nLXBsdWdpbicgfSlcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEluc3RhbGxpbmcgcGx1Z2luICR7cGx1Z2luSWR9YClcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbGxTZWxlY3RlZFBsdWdpbnMoW3BsdWdpbklkXSlcblxuICAgICAgICAgIGlmIChyZXN1bHQuZmFpbGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gcmVzdWx0LmZhaWxlZFxuICAgICAgICAgICAgICAubWFwKGYgPT4gYCR7Zi5uYW1lfTogJHtmLmVycm9yfWApXG4gICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbnN0YWxsIHBsdWdpbjogJHtlcnJvck1zZ31gKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFyQWxsQ2FjaGVzKClcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFBsdWdpbiAke3BsdWdpbklkfSBpbnN0YWxsZWRgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFBsdWdpbiBpcyBpbnN0YWxsZWQsIGNoZWNrIGlmIGl0J3MgZW5hYmxlZFxuICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGF3YWl0IGxvYWRBbGxQbHVnaW5zKClcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQuc29tZShcbiAgICAgICAgICAgIHAgPT4gcC5uYW1lID09PSAndGhpbmtiYWNrJyB8fCBwLnNvdXJjZT8uaW5jbHVkZXMocGx1Z2luSWQpLFxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBFbmFibGUgdGhlIHBsdWdpblxuICAgICAgICAgICAgc2V0U3RhdGUoeyBwaGFzZTogJ2VuYWJsaW5nLXBsdWdpbicgfSlcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgRW5hYmxpbmcgcGx1Z2luICR7cGx1Z2luSWR9YClcblxuICAgICAgICAgICAgY29uc3QgZW5hYmxlUmVzdWx0ID0gYXdhaXQgZW5hYmxlUGx1Z2luT3AocGx1Z2luSWQpXG4gICAgICAgICAgICBpZiAoIWVuYWJsZVJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGVuYWJsZSBwbHVnaW46ICR7ZW5hYmxlUmVzdWx0Lm1lc3NhZ2V9YCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhckFsbENhY2hlcygpXG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFBsdWdpbiAke3BsdWdpbklkfSBlbmFibGVkYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdGF0ZSh7IHBoYXNlOiAncmVhZHknIH0pXG4gICAgICAgIG9uUmVhZHkoKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyID0gdG9FcnJvcihlcnJvcilcbiAgICAgICAgbG9nRXJyb3IoZXJyKVxuICAgICAgICBzZXRTdGF0ZSh7IHBoYXNlOiAnZXJyb3InLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICAgICAgICBvbkVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgY2hlY2tBbmRJbnN0YWxsKClcbiAgfSwgW29uUmVhZHksIG9uRXJyb3JdKVxuXG4gIGlmIChzdGF0ZS5waGFzZSA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkVycm9yOiB7c3RhdGUubWVzc2FnZX08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAoc3RhdGUucGhhc2UgPT09ICdyZWFkeScpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9XG4gICAgc3RhdGUucGhhc2UgPT09ICdjaGVja2luZydcbiAgICAgID8gJ0NoZWNraW5nIHRoaW5rYmFjayBpbnN0YWxsYXRpb27igKYnXG4gICAgICA6IHN0YXRlLnBoYXNlID09PSAnaW5zdGFsbGluZy1tYXJrZXRwbGFjZSdcbiAgICAgICAgPyAnSW5zdGFsbGluZyBtYXJrZXRwbGFjZeKApidcbiAgICAgICAgOiBzdGF0ZS5waGFzZSA9PT0gJ2VuYWJsaW5nLXBsdWdpbidcbiAgICAgICAgICA/ICdFbmFibGluZyB0aGlua2JhY2sgcGx1Z2lu4oCmJ1xuICAgICAgICAgIDogJ0luc3RhbGxpbmcgdGhpbmtiYWNrIHBsdWdpbuKApidcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEJveD5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgPFRleHQ+e3Byb2dyZXNzTWVzc2FnZSB8fCBzdGF0dXNNZXNzYWdlfTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbnR5cGUgTWVudUFjdGlvbiA9ICdwbGF5JyB8ICdlZGl0JyB8ICdmaXgnIHwgJ3JlZ2VuZXJhdGUnXG50eXBlIEdlbmVyYXRpdmVBY3Rpb24gPSBFeGNsdWRlPE1lbnVBY3Rpb24sICdwbGF5Jz5cblxuZnVuY3Rpb24gVGhpbmtiYWNrTWVudSh7XG4gIG9uRG9uZSxcbiAgb25BY3Rpb24sXG4gIHNraWxsRGlyLFxuICBoYXNHZW5lcmF0ZWQsXG59OiB7XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXk7IHNob3VsZFF1ZXJ5PzogYm9vbGVhbiB9LFxuICApID0+IHZvaWRcbiAgb25BY3Rpb246IChhY3Rpb246IEdlbmVyYXRpdmVBY3Rpb24pID0+IHZvaWRcbiAgc2tpbGxEaXI6IHN0cmluZ1xuICBoYXNHZW5lcmF0ZWQ6IGJvb2xlYW5cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbaGFzU2VsZWN0ZWQsIHNldEhhc1NlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBoYXNHZW5lcmF0ZWRcbiAgICA/IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUGxheSBhbmltYXRpb24nLFxuICAgICAgICAgIHZhbHVlOiAncGxheScgYXMgY29uc3QsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXYXRjaCB5b3VyIHllYXIgaW4gcmV2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRWRpdCBjb250ZW50JyxcbiAgICAgICAgICB2YWx1ZTogJ2VkaXQnIGFzIGNvbnN0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTW9kaWZ5IHRoZSBhbmltYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdGaXggZXJyb3JzJyxcbiAgICAgICAgICB2YWx1ZTogJ2ZpeCcgYXMgY29uc3QsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdGaXggdmFsaWRhdGlvbiBvciByZW5kZXJpbmcgaXNzdWVzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVnZW5lcmF0ZScsXG4gICAgICAgICAgdmFsdWU6ICdyZWdlbmVyYXRlJyBhcyBjb25zdCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NyZWF0ZSBhIG5ldyBhbmltYXRpb24gZnJvbSBzY3JhdGNoJyxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICA6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxldCdzIGdvIVwiLFxuICAgICAgICAgIHZhbHVlOiAncmVnZW5lcmF0ZScgYXMgY29uc3QsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdHZW5lcmF0ZSB5b3VyIHBlcnNvbmFsaXplZCBhbmltYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgXVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdCh2YWx1ZTogTWVudUFjdGlvbik6IHZvaWQge1xuICAgIHNldEhhc1NlbGVjdGVkKHRydWUpXG4gICAgaWYgKHZhbHVlID09PSAncGxheScpIHtcbiAgICAgIC8vIFBsYXkgcnVucyB0aGUgdGVybWluYWwtdGFrZW92ZXIgYW5pbWF0aW9uLCB0aGVuIHNpZ25hbCBkb25lIHdpdGggc2tpcFxuICAgICAgdm9pZCBwbGF5QW5pbWF0aW9uKHNraWxsRGlyKS50aGVuKCgpID0+IHtcbiAgICAgICAgb25Eb25lKHVuZGVmaW5lZCwgeyBkaXNwbGF5OiAnc2tpcCcgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWN0aW9uKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbCgpOiB2b2lkIHtcbiAgICBvbkRvbmUodW5kZWZpbmVkLCB7IGRpc3BsYXk6ICdza2lwJyB9KVxuICB9XG5cbiAgaWYgKGhhc1NlbGVjdGVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJUaGluayBCYWNrIG9uIDIwMjUgd2l0aCBDbGF1ZGUgQ29kZVwiXG4gICAgICBzdWJ0aXRsZT1cIkdlbmVyYXRlIHlvdXIgMjAyNSBDbGF1ZGUgQ29kZSBUaGluayBCYWNrICh0YWtlcyBhIGZldyBtaW51dGVzIHRvIHJ1bilcIlxuICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgIGNvbG9yPVwiY2xhdWRlXCJcbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICB7LyogRGVzY3JpcHRpb24gZm9yIGZpcnN0LXRpbWUgdXNlcnMgKi99XG4gICAgICAgIHshaGFzR2VuZXJhdGVkICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0PlJlbGl2ZSB5b3VyIHllYXIgb2YgY29kaW5nIHdpdGggQ2xhdWRlLjwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJXZSdsbCBjcmVhdGUgYSBwZXJzb25hbGl6ZWQgQVNDSUkgYW5pbWF0aW9uIGNlbGVicmF0aW5nIHlvdXIgam91cm5leS5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIE1lbnUgKi99XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXs1fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuY29uc3QgRURJVF9QUk9NUFQgPVxuICAnVXNlIHRoZSBTa2lsbCB0b29sIHRvIGludm9rZSB0aGUgXCJ0aGlua2JhY2tcIiBza2lsbCB3aXRoIG1vZGU9ZWRpdCB0byBtb2RpZnkgbXkgZXhpc3RpbmcgQ2xhdWRlIENvZGUgeWVhciBpbiByZXZpZXcgYW5pbWF0aW9uLiBBc2sgbWUgd2hhdCBJIHdhbnQgdG8gY2hhbmdlLiBXaGVuIHRoZSBhbmltYXRpb24gaXMgcmVhZHksIHRlbGwgdGhlIHVzZXIgdG8gcnVuIC90aGluay1iYWNrIGFnYWluIHRvIHBsYXkgaXQuJ1xuXG5jb25zdCBGSVhfUFJPTVBUID1cbiAgJ1VzZSB0aGUgU2tpbGwgdG9vbCB0byBpbnZva2UgdGhlIFwidGhpbmtiYWNrXCIgc2tpbGwgd2l0aCBtb2RlPWZpeCB0byBmaXggdmFsaWRhdGlvbiBvciByZW5kZXJpbmcgZXJyb3JzIGluIG15IGV4aXN0aW5nIENsYXVkZSBDb2RlIHllYXIgaW4gcmV2aWV3IGFuaW1hdGlvbi4gUnVuIHRoZSB2YWxpZGF0b3IsIGlkZW50aWZ5IGVycm9ycywgYW5kIGZpeCB0aGVtLiBXaGVuIHRoZSBhbmltYXRpb24gaXMgcmVhZHksIHRlbGwgdGhlIHVzZXIgdG8gcnVuIC90aGluay1iYWNrIGFnYWluIHRvIHBsYXkgaXQuJ1xuXG5jb25zdCBSRUdFTkVSQVRFX1BST01QVCA9XG4gICdVc2UgdGhlIFNraWxsIHRvb2wgdG8gaW52b2tlIHRoZSBcInRoaW5rYmFja1wiIHNraWxsIHdpdGggbW9kZT1yZWdlbmVyYXRlIHRvIGNyZWF0ZSBhIGNvbXBsZXRlbHkgbmV3IENsYXVkZSBDb2RlIHllYXIgaW4gcmV2aWV3IGFuaW1hdGlvbiBmcm9tIHNjcmF0Y2guIERlbGV0ZSB0aGUgZXhpc3RpbmcgYW5pbWF0aW9uIGFuZCBzdGFydCBmcmVzaC4gV2hlbiB0aGUgYW5pbWF0aW9uIGlzIHJlYWR5LCB0ZWxsIHRoZSB1c2VyIHRvIHJ1biAvdGhpbmstYmFjayBhZ2FpbiB0byBwbGF5IGl0LidcblxuZnVuY3Rpb24gVGhpbmtiYWNrRmxvdyh7XG4gIG9uRG9uZSxcbn06IHtcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheTsgc2hvdWxkUXVlcnk/OiBib29sZWFuIH0sXG4gICkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtpbnN0YWxsQ29tcGxldGUsIHNldEluc3RhbGxDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2luc3RhbGxFcnJvciwgc2V0SW5zdGFsbEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtza2lsbERpciwgc2V0U2tpbGxEaXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hhc0dlbmVyYXRlZCwgc2V0SGFzR2VuZXJhdGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlYWR5KCk6IHZvaWQge1xuICAgIHNldEluc3RhbGxDb21wbGV0ZSh0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXJyb3IgPSB1c2VDYWxsYmFjayhcbiAgICAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICBzZXRJbnN0YWxsRXJyb3IobWVzc2FnZSlcbiAgICAgIC8vIENhbGwgb25Eb25lIHdpdGggdGhlIGVycm9yIG1lc3NhZ2Ugc28gdGhlIG1vZGVsIGNhbiBjb250aW51ZVxuICAgICAgb25Eb25lKFxuICAgICAgICBgRXJyb3Igd2l0aCB0aGlua2JhY2s6ICR7bWVzc2FnZX0uIFRyeSBydW5uaW5nIC9wbHVnaW4gdG8gbWFudWFsbHkgaW5zdGFsbCB0aGUgdGhpbmstYmFjayBwbHVnaW4uYCxcbiAgICAgICAgeyBkaXNwbGF5OiAnc3lzdGVtJyB9LFxuICAgICAgKVxuICAgIH0sXG4gICAgW29uRG9uZV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnN0YWxsQ29tcGxldGUgJiYgIXNraWxsRGlyICYmICFpbnN0YWxsRXJyb3IpIHtcbiAgICAgIC8vIEdldCB0aGUgc2tpbGwgZGlyZWN0b3J5IGFmdGVyIGluc3RhbGxhdGlvblxuICAgICAgdm9pZCBnZXRUaGlua2JhY2tTa2lsbERpcigpLnRoZW4oZGlyID0+IHtcbiAgICAgICAgaWYgKGRpcikge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgVGhpbmtiYWNrIHNraWxsIGRpcmVjdG9yeTogJHtkaXJ9YClcbiAgICAgICAgICBzZXRTa2lsbERpcihkaXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoaW5rYmFjayBza2lsbCBkaXJlY3RvcnknKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2luc3RhbGxDb21wbGV0ZSwgc2tpbGxEaXIsIGluc3RhbGxFcnJvciwgaGFuZGxlRXJyb3JdKVxuXG4gIC8vIENoZWNrIGZvciBnZW5lcmF0ZWQgZmlsZSBvbmNlIHdlIGhhdmUgc2tpbGxEaXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNraWxsRGlyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhUGF0aCA9IGpvaW4oc2tpbGxEaXIsICd5ZWFyX2luX3Jldmlldy5qcycpXG4gICAgdm9pZCBwYXRoRXhpc3RzKGRhdGFQYXRoKS50aGVuKGV4aXN0cyA9PiB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBDaGVja2luZyBmb3IgJHtkYXRhUGF0aH06ICR7ZXhpc3RzID8gJ2ZvdW5kJyA6ICdub3QgZm91bmQnfWAsXG4gICAgICApXG4gICAgICBzZXRIYXNHZW5lcmF0ZWQoZXhpc3RzKVxuICAgIH0pXG4gIH0sIFtza2lsbERpcl0pXG5cbiAgZnVuY3Rpb24gaGFuZGxlQWN0aW9uKGFjdGlvbjogR2VuZXJhdGl2ZUFjdGlvbik6IHZvaWQge1xuICAgIC8vIFNlbmQgcHJvbXB0IHRvIG1vZGVsIGJhc2VkIG9uIGFjdGlvblxuICAgIGNvbnN0IHByb21wdHM6IFJlY29yZDxHZW5lcmF0aXZlQWN0aW9uLCBzdHJpbmc+ID0ge1xuICAgICAgZWRpdDogRURJVF9QUk9NUFQsXG4gICAgICBmaXg6IEZJWF9QUk9NUFQsXG4gICAgICByZWdlbmVyYXRlOiBSRUdFTkVSQVRFX1BST01QVCxcbiAgICB9XG4gICAgb25Eb25lKHByb21wdHNbYWN0aW9uXSwgeyBkaXNwbGF5OiAndXNlcicsIHNob3VsZFF1ZXJ5OiB0cnVlIH0pXG4gIH1cblxuICBpZiAoaW5zdGFsbEVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+RXJyb3I6IHtpbnN0YWxsRXJyb3J9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBUcnkgcnVubmluZyAvcGx1Z2luIHRvIG1hbnVhbGx5IGluc3RhbGwgdGhlIHRoaW5rLWJhY2sgcGx1Z2luLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAoIWluc3RhbGxDb21wbGV0ZSkge1xuICAgIHJldHVybiA8VGhpbmtiYWNrSW5zdGFsbGVyIG9uUmVhZHk9e2hhbmRsZVJlYWR5fSBvbkVycm9yPXtoYW5kbGVFcnJvcn0gLz5cbiAgfVxuXG4gIGlmICghc2tpbGxEaXIgfHwgaGFzR2VuZXJhdGVkID09PSBudWxsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDxUZXh0PkxvYWRpbmcgdGhpbmtiYWNrIHNraWxs4oCmPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhpbmtiYWNrTWVudVxuICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICBvbkFjdGlvbj17aGFuZGxlQWN0aW9ufVxuICAgICAgc2tpbGxEaXI9e3NraWxsRGlyfVxuICAgICAgaGFzR2VuZXJhdGVkPXtoYXNHZW5lcmF0ZWR9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheTsgc2hvdWxkUXVlcnk/OiBib29sZWFuIH0sXG4gICkgPT4gdm9pZCxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIHJldHVybiA8VGhpbmtiYWNrRmxvdyBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLGdCQUFnQjtBQUN6QixTQUFTQyxZQUFZO0FBaUNyQixTQUFTQyxxQkFBNkI7QUFDcEMsU0FBTyxRQUNIQyw0QkFDQUM7QUFDTjtBQUVBLFNBQVNDLHFCQUE2QjtBQUNwQyxTQUFPLFFBQ0hDLDRCQUNBQztBQUNOO0FBRUEsU0FBU0MsY0FBc0I7QUFDN0IsU0FBTyxhQUFhTixtQkFBbUIsQ0FBQztBQUMxQztBQU9BLGVBQWVPLHVCQUErQztBQUM1RCxRQUFNO0lBQUVDO0VBQVEsSUFBSSxNQUFNQyxlQUFlO0FBQ3pDLFFBQU1DLGtCQUFrQkYsUUFBUUcsS0FDOUJDLE9BQ0VBLEVBQUVDLFNBQVMsZUFBZ0JELEVBQUVFLFVBQVVGLEVBQUVFLE9BQU9DLFNBQVNULFlBQVksQ0FBQyxDQUMxRTtBQUVBLE1BQUksQ0FBQ0ksaUJBQWlCO0FBQ3BCLFdBQU87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QTlDLEVBQUEsRUFBQTtFQUFBO0FBQUEsU0FMRjhDO0FBS0U7QUFJTixlQUFzQkcsS0FDcEIvQyxRQUkwQjtBQUMxQixTQUFPLDhCQUFDLGlCQUFjLFFBQWU7QUFDdkM7SUF2ZU1yRiwyQkFrQkFhLFlBK1ZBOEcsYUFHQUUsWUFHQUU7Ozs7QUF4Wk47QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBS0EsSUFBTS9ILDRCQUE0QjtBQWtCbEMsSUFBTWEsYUFBYTtBQStWbkIsSUFBTThHLGNBQ0o7QUFFRixJQUFNRSxhQUNKO0FBRUYsSUFBTUUsb0JBQ0o7OzsiLAogICJuYW1lcyI6IFsicmVhZEZpbGUiLCAiam9pbiIsICJnZXRNYXJrZXRwbGFjZU5hbWUiLCAiSU5URVJOQUxfTUFSS0VUUExBQ0VfTkFNRSIsICJPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FIiwgImdldE1hcmtldHBsYWNlUmVwbyIsICJJTlRFUk5BTF9NQVJLRVRQTEFDRV9SRVBPIiwgIk9GRklDSUFMX01BUktFVFBMQUNFX1JFUE8iLCAiZ2V0UGx1Z2luSWQiLCAiZ2V0VGhpbmtiYWNrU2tpbGxEaXIiLCAiZW5hYmxlZCIsICJsb2FkQWxsUGx1Z2lucyIsICJ0aGlua2JhY2tQbHVnaW4iLCAiZmluZCIsICJwIiwgIm5hbWUiLCAic291cmNlIiwgImluY2x1ZGVzIiwgInNraWxsRGlyIiwgInBhdGgiLCAiU0tJTExfTkFNRSIsICJwYXRoRXhpc3RzIiwgInBsYXlBbmltYXRpb24iLCAiZGF0YVBhdGgiLCAicGxheWVyUGF0aCIsICJlIiwgImlzRU5PRU5UIiwgInN1Y2Nlc3MiLCAibWVzc2FnZSIsICJsb2dFcnJvciIsICJ0b0Vycm9yIiwgImlua0luc3RhbmNlIiwgImluc3RhbmNlcyIsICJnZXQiLCAicHJvY2VzcyIsICJzdGRvdXQiLCAiZW50ZXJBbHRlcm5hdGVTY3JlZW4iLCAiZXhlY2EiLCAic3RkaW8iLCAiY3dkIiwgInJlamVjdCIsICJleGl0QWx0ZXJuYXRlU2NyZWVuIiwgImh0bWxQYXRoIiwgInBsYXRmb3JtIiwgImdldFBsYXRmb3JtIiwgIm9wZW5DbWQiLCAiZXhlY0ZpbGVOb1Rocm93IiwgIlRoaW5rYmFja0luc3RhbGxlciIsICJvblJlYWR5IiwgIm9uRXJyb3IiLCAic3RhdGUiLCAic2V0U3RhdGUiLCAidXNlU3RhdGUiLCAicGhhc2UiLCAicHJvZ3Jlc3NNZXNzYWdlIiwgInNldFByb2dyZXNzTWVzc2FnZSIsICJ1c2VFZmZlY3QiLCAiY2hlY2tBbmRJbnN0YWxsIiwgImtub3duTWFya2V0cGxhY2VzIiwgImxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyIsICJtYXJrZXRwbGFjZU5hbWUiLCAibWFya2V0cGxhY2VSZXBvIiwgInBsdWdpbklkIiwgIm1hcmtldHBsYWNlSW5zdGFsbGVkIiwgInBsdWdpbkFscmVhZHlJbnN0YWxsZWQiLCAiaXNQbHVnaW5JbnN0YWxsZWQiLCAibG9nRm9yRGVidWdnaW5nIiwgImFkZE1hcmtldHBsYWNlU291cmNlIiwgInJlcG8iLCAiY2xlYXJBbGxDYWNoZXMiLCAicmVmcmVzaE1hcmtldHBsYWNlIiwgImNsZWFyTWFya2V0cGxhY2VzQ2FjaGUiLCAicmVzdWx0IiwgImluc3RhbGxTZWxlY3RlZFBsdWdpbnMiLCAiZmFpbGVkIiwgImxlbmd0aCIsICJlcnJvck1zZyIsICJtYXAiLCAiZiIsICJlcnJvciIsICJFcnJvciIsICJkaXNhYmxlZCIsICJpc0Rpc2FibGVkIiwgInNvbWUiLCAiZW5hYmxlUmVzdWx0IiwgImVuYWJsZVBsdWdpbk9wIiwgImVyciIsICJzdGF0dXNNZXNzYWdlIiwgIlRoaW5rYmFja01lbnUiLCAidDAiLCAiJCIsICJfYyIsICJvbkRvbmUiLCAib25BY3Rpb24iLCAiaGFzR2VuZXJhdGVkIiwgImhhc1NlbGVjdGVkIiwgInNldEhhc1NlbGVjdGVkIiwgInQxIiwgImxhYmVsIiwgInZhbHVlIiwgImRlc2NyaXB0aW9uIiwgIm9wdGlvbnMiLCAidDIiLCAiaGFuZGxlU2VsZWN0IiwgInRoZW4iLCAidW5kZWZpbmVkIiwgImRpc3BsYXkiLCAidDMiLCAiaGFuZGxlQ2FuY2VsIiwgInQ0IiwgInQ1IiwgInQ2IiwgInQ3IiwgIlRoaW5rYmFja0Zsb3ciLCAiaW5zdGFsbENvbXBsZXRlIiwgInNldEluc3RhbGxDb21wbGV0ZSIsICJpbnN0YWxsRXJyb3IiLCAic2V0SW5zdGFsbEVycm9yIiwgInNldFNraWxsRGlyIiwgInNldEhhc0dlbmVyYXRlZCIsICJTeW1ib2wiLCAiZm9yIiwgImhhbmRsZVJlYWR5IiwgImhhbmRsZUVycm9yIiwgImRpciIsICJleGlzdHMiLCAiaGFuZGxlQWN0aW9uIiwgImFjdGlvbiIsICJwcm9tcHRzIiwgImVkaXQiLCAiRURJVF9QUk9NUFQiLCAiZml4IiwgIkZJWF9QUk9NUFQiLCAicmVnZW5lcmF0ZSIsICJSRUdFTkVSQVRFX1BST01QVCIsICJzaG91bGRRdWVyeSIsICJ0OCIsICJ0OSIsICJ0MTAiLCAiY2FsbCJdCn0K
