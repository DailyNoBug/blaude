#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  getAllHooks,
  getHookDisplayText,
  getTools,
  hookSourceDescriptionDisplayString,
  hookSourceHeaderDisplayString,
  hookSourceInlineDisplayString,
  init_AppState,
  init_hooksSettings,
  init_select,
  init_tools2 as init_tools,
  init_useSettingsChange,
  sortMatchersByPriority,
  useAppState,
  useAppStateStore,
  useSettingsChange
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getSettingsForSource,
  getSettings_DEPRECATED,
  init_settings2 as init_settings,
  init_stringUtils,
  plural
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
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
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getRegisteredHooks,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/hooks/hooksConfigManager.ts
function groupHooksByEventAndMatcher(appState, toolNames) {
  const grouped = {
    PreToolUse: {},
    PostToolUse: {},
    PostToolUseFailure: {},
    PermissionDenied: {},
    Notification: {},
    UserPromptSubmit: {},
    SessionStart: {},
    SessionEnd: {},
    Stop: {},
    StopFailure: {},
    SubagentStart: {},
    SubagentStop: {},
    PreCompact: {},
    PostCompact: {},
    PermissionRequest: {},
    Setup: {},
    TeammateIdle: {},
    TaskCreated: {},
    TaskCompleted: {},
    Elicitation: {},
    ElicitationResult: {},
    ConfigChange: {},
    WorktreeCreate: {},
    WorktreeRemove: {},
    InstructionsLoaded: {},
    CwdChanged: {},
    FileChanged: {}
  };
  const metadata = getHookEventMetadata(toolNames);
  getAllHooks(appState).forEach((hook) => {
    const eventGroup = grouped[hook.event];
    if (eventGroup) {
      const matcherKey = metadata[hook.event].matcherMetadata !== void 0 ? hook.matcher || "" : "";
      if (!eventGroup[matcherKey]) {
        eventGroup[matcherKey] = [];
      }
      eventGroup[matcherKey].push(hook);
    }
  });
  const registeredHooks = getRegisteredHooks();
  if (registeredHooks) {
    for (const [event, matchers] of Object.entries(registeredHooks)) {
      const hookEvent = event;
      const eventGroup = grouped[hookEvent];
      if (!eventGroup) continue;
      for (const matcher of matchers) {
        const matcherKey = matcher.matcher || "";
        if ("pluginRoot" in matcher) {
          eventGroup[matcherKey] ??= [];
          for (const hook of matcher.hooks) {
            eventGroup[matcherKey].push({
              event: hookEvent,
              config: hook,
              matcher: matcher.matcher,
              source: "pluginHook",
              pluginName: matcher.pluginId
            });
          }
        } else if (process.env.USER_TYPE === "ant") {
          eventGroup[matcherKey] ??= [];
          for (const _hook of matcher.hooks) {
            eventGroup[matcherKey].push({
              event: hookEvent,
              config: {
                type: "command",
                command: "[ANT-ONLY] Built-in Hook"
              },
              matcher: matcher.matcher,
              source: "builtinHook"
            });
          }
        }
      }
    }
  }
  return grouped;
}
function getSortedMatchersForEvent(hooksByEventAndMatcher, event) {
  const matchers = Object.keys(hooksByEventAndMatcher[event] || {});
  return sortMatchersByPriority(matchers, hooksByEventAndMatcher, event);
}
function getHooksForMatcher(hooksByEventAndMatcher, event, matcher) {
  const matcherKey = matcher ?? "";
  return hooksByEventAndMatcher[event]?.[matcherKey] ?? [];
}
function getMatcherMetadata(event, toolNames) {
  return getHookEventMetadata(toolNames)[event].matcherMetadata;
}
var getHookEventMetadata;
var init_hooksConfigManager = __esm({
  "src/utils/hooks/hooksConfigManager.ts"() {
    init_memoize();
    init_state();
    init_hooksSettings();
    getHookEventMetadata = memoize_default(
      function(toolNames) {
        return {
          PreToolUse: {
            summary: "Before tool execution",
            description: "Input to command is JSON of tool call arguments.\nExit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to model and block tool call\nOther exit codes - show stderr to user only but continue with tool call",
            matcherMetadata: {
              fieldToMatch: "tool_name",
              values: toolNames
            }
          },
          PostToolUse: {
            summary: "After tool execution",
            description: 'Input to command is JSON with fields "inputs" (tool call arguments) and "response" (tool call response).\nExit code 0 - stdout shown in transcript mode (ctrl+o)\nExit code 2 - show stderr to model immediately\nOther exit codes - show stderr to user only',
            matcherMetadata: {
              fieldToMatch: "tool_name",
              values: toolNames
            }
          },
          PostToolUseFailure: {
            summary: "After tool execution fails",
            description: "Input to command is JSON with tool_name, tool_input, tool_use_id, error, error_type, is_interrupt, and is_timeout.\nExit code 0 - stdout shown in transcript mode (ctrl+o)\nExit code 2 - show stderr to model immediately\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "tool_name",
              values: toolNames
            }
          },
          PermissionDenied: {
            summary: "After auto mode classifier denies a tool call",
            description: 'Input to command is JSON with tool_name, tool_input, tool_use_id, and reason.\nReturn {"hookSpecificOutput":{"hookEventName":"PermissionDenied","retry":true}} to tell the model it may retry.\nExit code 0 - stdout shown in transcript mode (ctrl+o)\nOther exit codes - show stderr to user only',
            matcherMetadata: {
              fieldToMatch: "tool_name",
              values: toolNames
            }
          },
          Notification: {
            summary: "When notifications are sent",
            description: "Input to command is JSON with notification message and type.\nExit code 0 - stdout/stderr not shown\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "notification_type",
              values: [
                "permission_prompt",
                "idle_prompt",
                "auth_success",
                "elicitation_dialog",
                "elicitation_complete",
                "elicitation_response"
              ]
            }
          },
          UserPromptSubmit: {
            summary: "When the user submits a prompt",
            description: "Input to command is JSON with original user prompt text.\nExit code 0 - stdout shown to Claude\nExit code 2 - block processing, erase original prompt, and show stderr to user only\nOther exit codes - show stderr to user only"
          },
          SessionStart: {
            summary: "When a new session is started",
            description: "Input to command is JSON with session start source.\nExit code 0 - stdout shown to Claude\nBlocking errors are ignored\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "source",
              values: ["startup", "resume", "clear", "compact"]
            }
          },
          Stop: {
            summary: "Right before Claude concludes its response",
            description: "Exit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to model and continue conversation\nOther exit codes - show stderr to user only"
          },
          StopFailure: {
            summary: "When the turn ends due to an API error",
            description: "Fires instead of Stop when an API error (rate limit, auth failure, etc.) ended the turn. Fire-and-forget \u2014 hook output and exit codes are ignored.",
            matcherMetadata: {
              fieldToMatch: "error",
              values: [
                "rate_limit",
                "authentication_failed",
                "billing_error",
                "invalid_request",
                "server_error",
                "max_output_tokens",
                "unknown"
              ]
            }
          },
          SubagentStart: {
            summary: "When a subagent (Agent tool call) is started",
            description: "Input to command is JSON with agent_id and agent_type.\nExit code 0 - stdout shown to subagent\nBlocking errors are ignored\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "agent_type",
              values: []
              // Will be populated with available agent types
            }
          },
          SubagentStop: {
            summary: "Right before a subagent (Agent tool call) concludes its response",
            description: "Input to command is JSON with agent_id, agent_type, and agent_transcript_path.\nExit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to subagent and continue having it run\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "agent_type",
              values: []
              // Will be populated with available agent types
            }
          },
          PreCompact: {
            summary: "Before conversation compaction",
            description: "Input to command is JSON with compaction details.\nExit code 0 - stdout appended as custom compact instructions\nExit code 2 - block compaction\nOther exit codes - show stderr to user only but continue with compaction",
            matcherMetadata: {
              fieldToMatch: "trigger",
              values: ["manual", "auto"]
            }
          },
          PostCompact: {
            summary: "After conversation compaction",
            description: "Input to command is JSON with compaction details and the summary.\nExit code 0 - stdout shown to user\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "trigger",
              values: ["manual", "auto"]
            }
          },
          SessionEnd: {
            summary: "When a session is ending",
            description: "Input to command is JSON with session end reason.\nExit code 0 - command completes successfully\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "reason",
              values: ["clear", "logout", "prompt_input_exit", "other"]
            }
          },
          PermissionRequest: {
            summary: "When a permission dialog is displayed",
            description: "Input to command is JSON with tool_name, tool_input, and tool_use_id.\nOutput JSON with hookSpecificOutput containing decision to allow or deny.\nExit code 0 - use hook decision if provided\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "tool_name",
              values: toolNames
            }
          },
          Setup: {
            summary: "Repo setup hooks for init and maintenance",
            description: "Input to command is JSON with trigger (init or maintenance).\nExit code 0 - stdout shown to Claude\nBlocking errors are ignored\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "trigger",
              values: ["init", "maintenance"]
            }
          },
          TeammateIdle: {
            summary: "When a teammate is about to go idle",
            description: "Input to command is JSON with teammate_name and team_name.\nExit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to teammate and prevent idle (teammate continues working)\nOther exit codes - show stderr to user only"
          },
          TaskCreated: {
            summary: "When a task is being created",
            description: "Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.\nExit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to model and prevent task creation\nOther exit codes - show stderr to user only"
          },
          TaskCompleted: {
            summary: "When a task is being marked as completed",
            description: "Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.\nExit code 0 - stdout/stderr not shown\nExit code 2 - show stderr to model and prevent task completion\nOther exit codes - show stderr to user only"
          },
          Elicitation: {
            summary: "When an MCP server requests user input (elicitation)",
            description: "Input to command is JSON with mcp_server_name, message, and requested_schema.\nOutput JSON with hookSpecificOutput containing action (accept/decline/cancel) and optional content.\nExit code 0 - use hook response if provided\nExit code 2 - deny the elicitation\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "mcp_server_name",
              values: []
            }
          },
          ElicitationResult: {
            summary: "After a user responds to an MCP elicitation",
            description: "Input to command is JSON with mcp_server_name, action, content, mode, and elicitation_id.\nOutput JSON with hookSpecificOutput containing optional action and content to override the response.\nExit code 0 - use hook response if provided\nExit code 2 - block the response (action becomes decline)\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "mcp_server_name",
              values: []
            }
          },
          ConfigChange: {
            summary: "When configuration files change during a session",
            description: "Input to command is JSON with source (user_settings, project_settings, local_settings, policy_settings, skills) and file_path.\nExit code 0 - allow the change\nExit code 2 - block the change from being applied to the session\nOther exit codes - show stderr to user only",
            matcherMetadata: {
              fieldToMatch: "source",
              values: [
                "user_settings",
                "project_settings",
                "local_settings",
                "policy_settings",
                "skills"
              ]
            }
          },
          InstructionsLoaded: {
            summary: "When an instruction file (CLAUDE.md or rule) is loaded",
            description: "Input to command is JSON with file_path, memory_type (User, Project, Local, Managed), load_reason (session_start, nested_traversal, path_glob_match, include, compact), globs (optional \u2014 the paths: frontmatter patterns that matched), trigger_file_path (optional \u2014 the file Claude touched that caused the load), and parent_file_path (optional \u2014 the file that @-included this one).\nExit code 0 - command completes successfully\nOther exit codes - show stderr to user only\nThis hook is observability-only and does not support blocking.",
            matcherMetadata: {
              fieldToMatch: "load_reason",
              values: [
                "session_start",
                "nested_traversal",
                "path_glob_match",
                "include",
                "compact"
              ]
            }
          },
          WorktreeCreate: {
            summary: "Create an isolated worktree for VCS-agnostic isolation",
            description: "Input to command is JSON with name (suggested worktree slug).\nStdout should contain the absolute path to the created worktree directory.\nExit code 0 - worktree created successfully\nOther exit codes - worktree creation failed"
          },
          WorktreeRemove: {
            summary: "Remove a previously created worktree",
            description: "Input to command is JSON with worktree_path (absolute path to worktree).\nExit code 0 - worktree removed successfully\nOther exit codes - show stderr to user only"
          },
          CwdChanged: {
            summary: "After the working directory changes",
            description: "Input to command is JSON with old_cwd and new_cwd.\nCLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.\nHook output can include hookSpecificOutput.watchPaths (array of absolute paths) to register with the FileChanged watcher.\nExit code 0 - command completes successfully\nOther exit codes - show stderr to user only"
          },
          FileChanged: {
            summary: "When a watched file changes",
            description: 'Input to command is JSON with file_path and event (change, add, unlink).\nCLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.\nThe matcher field specifies filenames to watch in the current directory (e.g. ".envrc|.env").\nHook output can include hookSpecificOutput.watchPaths (array of absolute paths) to dynamically update the watch list.\nExit code 0 - command completes successfully\nOther exit codes - show stderr to user only'
          }
        };
      },
      (toolNames) => toolNames.slice().sort().join(",")
    );
  }
});

// src/components/hooks/SelectEventMode.tsx
function SelectEventMode(t0) {
  const $ = c(23);
  const {
    hookEventMetadata,
    hooksByEvent,
    totalHooksCount,
    restrictedByPolicy,
    onSelectEvent,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== totalHooksCount) {
    t1 = plural(totalHooksCount, "hook");
    $[0] = totalHooksCount;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const subtitle = `${totalHooksCount} ${t1} configured`;
  let t2;
  if ($[2] !== restrictedByPolicy) {
    t2 = restrictedByPolicy && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, figures_default.info, " Hooks Restricted by Policy"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Only hooks from managed settings can run. User-defined hooks from ~/.claude/settings.json, .claude/settings.json, and .claude/settings.local.json are blocked."));
    $[2] = restrictedByPolicy;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, figures_default.info, " This menu is read-only. To add or modify hooks, edit settings.json directly or ask Claude.", " ", /* @__PURE__ */ createElement(Link, { url: "https://code.claude.com/docs/en/hooks" }, "Learn more")));
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== onSelectEvent) {
    t4 = (value) => {
      onSelectEvent(value);
    };
    $[5] = onSelectEvent;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== hookEventMetadata) {
    t5 = Object.entries(hookEventMetadata);
    $[7] = hookEventMetadata;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== hooksByEvent || $[10] !== t5) {
    t6 = t5.map((t72) => {
      const [name, metadata] = t72;
      const count = hooksByEvent[name] || 0;
      return {
        label: count > 0 ? /* @__PURE__ */ createElement(ThemedText, null, name, " ", /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, "(", count, ")")) : name,
        value: name,
        description: metadata.summary
      };
    });
    $[9] = hooksByEvent;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== onCancel || $[13] !== t4 || $[14] !== t6) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(Select, { onChange: t4, onCancel, options: t6 }));
    $[12] = onCancel;
    $[13] = t4;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t2 || $[17] !== t7) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t2, t3, t7);
    $[16] = t2;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  let t9;
  if ($[19] !== onCancel || $[20] !== subtitle || $[21] !== t8) {
    t9 = /* @__PURE__ */ createElement(Dialog, { title: "Hooks", subtitle, onCancel }, t8);
    $[19] = onCancel;
    $[20] = subtitle;
    $[21] = t8;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  return t9;
}
var init_SelectEventMode = __esm({
  "src/components/hooks/SelectEventMode.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_stringUtils();
    init_select();
    init_Dialog();
  }
});

// src/components/hooks/SelectHookMode.tsx
function SelectHookMode(t0) {
  const $ = c(19);
  const {
    selectedEvent,
    selectedMatcher,
    hooksForSelectedMatcher,
    hookEventMetadata,
    onSelect,
    onCancel
  } = t0;
  const title = hookEventMetadata.matcherMetadata !== void 0 ? `${selectedEvent} - Matcher: ${selectedMatcher || "(all)"}` : selectedEvent;
  if (hooksForSelectedMatcher.length === 0) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No hooks configured for this event."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "To add hooks, edit settings.json directly or ask Claude."));
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    let t22;
    if ($[1] !== hookEventMetadata.description || $[2] !== onCancel || $[3] !== title) {
      t22 = /* @__PURE__ */ createElement(Dialog, { title, subtitle: hookEventMetadata.description, onCancel, inputGuide: _temp }, t12);
      $[1] = hookEventMetadata.description;
      $[2] = onCancel;
      $[3] = title;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    return t22;
  }
  const t1 = hookEventMetadata.description;
  let t2;
  if ($[5] !== hooksForSelectedMatcher) {
    t2 = hooksForSelectedMatcher.map(_temp2);
    $[5] = hooksForSelectedMatcher;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== hooksForSelectedMatcher || $[8] !== onSelect) {
    t3 = (value) => {
      const index_0 = parseInt(value, 10);
      const hook_0 = hooksForSelectedMatcher[index_0];
      if (hook_0) {
        onSelect(hook_0);
      }
    };
    $[7] = hooksForSelectedMatcher;
    $[8] = onSelect;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  let t4;
  if ($[10] !== onCancel || $[11] !== t2 || $[12] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(Select, { options: t2, onChange: t3, onCancel }));
    $[10] = onCancel;
    $[11] = t2;
    $[12] = t3;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  let t5;
  if ($[14] !== hookEventMetadata.description || $[15] !== onCancel || $[16] !== t4 || $[17] !== title) {
    t5 = /* @__PURE__ */ createElement(Dialog, { title, subtitle: t1, onCancel }, t4);
    $[14] = hookEventMetadata.description;
    $[15] = onCancel;
    $[16] = t4;
    $[17] = title;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  return t5;
}
function _temp2(hook, index) {
  return {
    label: `[${hook.config.type}] ${getHookDisplayText(hook.config)}`,
    value: index.toString(),
    description: hook.source === "pluginHook" && hook.pluginName ? `${hookSourceHeaderDisplayString(hook.source)} (${hook.pluginName})` : hookSourceHeaderDisplayString(hook.source)
  };
}
function _temp() {
  return /* @__PURE__ */ createElement(ThemedText, null, "Esc to go back");
}
var init_SelectHookMode = __esm({
  "src/components/hooks/SelectHookMode.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_hooksSettings();
    init_select();
    init_Dialog();
  }
});

// src/components/hooks/SelectMatcherMode.tsx
function SelectMatcherMode(t0) {
  const $ = c(25);
  const {
    selectedEvent,
    matchersForSelectedEvent,
    hooksByEventAndMatcher,
    eventDescription,
    onSelect,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== hooksByEventAndMatcher || $[1] !== matchersForSelectedEvent || $[2] !== selectedEvent) {
    let t22;
    if ($[4] !== hooksByEventAndMatcher || $[5] !== selectedEvent) {
      t22 = (matcher) => {
        const hooks = hooksByEventAndMatcher[selectedEvent]?.[matcher] || [];
        const sources = Array.from(new Set(hooks.map(_temp4)));
        return {
          matcher,
          sources,
          hookCount: hooks.length
        };
      };
      $[4] = hooksByEventAndMatcher;
      $[5] = selectedEvent;
      $[6] = t22;
    } else {
      t22 = $[6];
    }
    t1 = matchersForSelectedEvent.map(t22);
    $[0] = hooksByEventAndMatcher;
    $[1] = matchersForSelectedEvent;
    $[2] = selectedEvent;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const matchersWithSources = t1;
  if (matchersForSelectedEvent.length === 0) {
    const t22 = `${selectedEvent} - Matchers`;
    let t32;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No hooks configured for this event."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "To add hooks, edit settings.json directly or ask Claude."));
      $[7] = t32;
    } else {
      t32 = $[7];
    }
    let t42;
    if ($[8] !== eventDescription || $[9] !== onCancel || $[10] !== t22) {
      t42 = /* @__PURE__ */ createElement(Dialog, { title: t22, subtitle: eventDescription, onCancel, inputGuide: _temp22 }, t32);
      $[8] = eventDescription;
      $[9] = onCancel;
      $[10] = t22;
      $[11] = t42;
    } else {
      t42 = $[11];
    }
    return t42;
  }
  const t2 = `${selectedEvent} - Matchers`;
  let t3;
  if ($[12] !== matchersWithSources) {
    t3 = matchersWithSources.map(_temp3);
    $[12] = matchersWithSources;
    $[13] = t3;
  } else {
    t3 = $[13];
  }
  let t4;
  if ($[14] !== onSelect) {
    t4 = (value) => {
      onSelect(value);
    };
    $[14] = onSelect;
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  let t5;
  if ($[16] !== onCancel || $[17] !== t3 || $[18] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(Select, { options: t3, onChange: t4, onCancel }));
    $[16] = onCancel;
    $[17] = t3;
    $[18] = t4;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  let t6;
  if ($[20] !== eventDescription || $[21] !== onCancel || $[22] !== t2 || $[23] !== t5) {
    t6 = /* @__PURE__ */ createElement(Dialog, { title: t2, subtitle: eventDescription, onCancel }, t5);
    $[20] = eventDescription;
    $[21] = onCancel;
    $[22] = t2;
    $[23] = t5;
    $[24] = t6;
  } else {
    t6 = $[24];
  }
  return t6;
}
function _temp3(item) {
  const sourceText = item.sources.map(hookSourceInlineDisplayString).join(", ");
  const matcherLabel = item.matcher || "(all)";
  return {
    label: `[${sourceText}] ${matcherLabel}`,
    value: item.matcher,
    description: `${item.hookCount} ${plural(item.hookCount, "hook")}`
  };
}
function _temp22() {
  return /* @__PURE__ */ createElement(ThemedText, null, "Esc to go back");
}
function _temp4(h) {
  return h.source;
}
var init_SelectMatcherMode = __esm({
  "src/components/hooks/SelectMatcherMode.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_hooksSettings();
    init_stringUtils();
    init_select();
    init_Dialog();
  }
});

// src/components/hooks/ViewHookMode.tsx
function ViewHookMode(t0) {
  const $ = c(40);
  const {
    selectedHook,
    eventSupportsMatcher,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== selectedHook.event) {
    t1 = /* @__PURE__ */ createElement(ThemedText, null, "Event: ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedHook.event));
    $[0] = selectedHook.event;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== eventSupportsMatcher || $[3] !== selectedHook.matcher) {
    t2 = eventSupportsMatcher && /* @__PURE__ */ createElement(ThemedText, null, "Matcher: ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedHook.matcher || "(all)"));
    $[2] = eventSupportsMatcher;
    $[3] = selectedHook.matcher;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== selectedHook.config.type) {
    t3 = /* @__PURE__ */ createElement(ThemedText, null, "Type: ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedHook.config.type));
    $[5] = selectedHook.config.type;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== selectedHook.source) {
    t4 = hookSourceDescriptionDisplayString(selectedHook.source);
    $[7] = selectedHook.source;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedText, null, "Source:", " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t4));
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== selectedHook.pluginName) {
    t6 = selectedHook.pluginName && /* @__PURE__ */ createElement(ThemedText, null, "Plugin: ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, selectedHook.pluginName));
    $[11] = selectedHook.pluginName;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t1 || $[14] !== t2 || $[15] !== t3 || $[16] !== t5 || $[17] !== t6) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t1, t2, t3, t5, t6);
    $[13] = t1;
    $[14] = t2;
    $[15] = t3;
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  let t8;
  if ($[19] !== selectedHook.config) {
    t8 = getContentFieldLabel(selectedHook.config);
    $[19] = selectedHook.config;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t8, ":");
    $[21] = t8;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  let t10;
  if ($[23] !== selectedHook.config) {
    t10 = getContentFieldValue(selectedHook.config);
    $[23] = selectedHook.config;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  let t11;
  if ($[25] !== t10) {
    t11 = /* @__PURE__ */ createElement(ThemedBox_default, { borderStyle: "round", borderDimColor: true, paddingLeft: 1, paddingRight: 1 }, /* @__PURE__ */ createElement(ThemedText, null, t10));
    $[25] = t10;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  let t12;
  if ($[27] !== t11 || $[28] !== t9) {
    t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t9, t11);
    $[27] = t11;
    $[28] = t9;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  let t13;
  if ($[30] !== selectedHook.config) {
    t13 = "statusMessage" in selectedHook.config && selectedHook.config.statusMessage && /* @__PURE__ */ createElement(ThemedText, null, "Status message:", " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, selectedHook.config.statusMessage));
    $[30] = selectedHook.config;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "To modify or remove this hook, edit settings.json directly or ask Claude to help.");
    $[32] = t14;
  } else {
    t14 = $[32];
  }
  let t15;
  if ($[33] !== t12 || $[34] !== t13 || $[35] !== t7) {
    t15 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t7, t12, t13, t14);
    $[33] = t12;
    $[34] = t13;
    $[35] = t7;
    $[36] = t15;
  } else {
    t15 = $[36];
  }
  let t16;
  if ($[37] !== onCancel || $[38] !== t15) {
    t16 = /* @__PURE__ */ createElement(Dialog, { title: "Hook details", onCancel, inputGuide: _temp5 }, t15);
    $[37] = onCancel;
    $[38] = t15;
    $[39] = t16;
  } else {
    t16 = $[39];
  }
  return t16;
}
function _temp5() {
  return /* @__PURE__ */ createElement(ThemedText, null, "Esc to go back");
}
function getContentFieldLabel(config) {
  switch (config.type) {
    case "command":
      return "Command";
    case "prompt":
      return "Prompt";
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
  }
}
function getContentFieldValue(config) {
  switch (config.type) {
    case "command":
      return config.command;
    case "prompt":
      return config.prompt;
    case "agent":
      return config.prompt;
    case "http":
      return config.url;
  }
}
var init_ViewHookMode = __esm({
  "src/components/hooks/ViewHookMode.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_hooksSettings();
    init_Dialog();
  }
});

// src/components/hooks/HooksConfigMenu.tsx
function HooksConfigMenu(t0) {
  const $ = c(100);
  const {
    toolNames,
    onExit
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      mode: "select-event"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [modeState, setModeState] = useState(t1);
  const [disabledByPolicy, setDisabledByPolicy] = useState(_temp7);
  const [restrictedByPolicy, setRestrictedByPolicy] = useState(_temp23);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = (source) => {
      if (source === "policySettings") {
        const settings_0 = getSettings_DEPRECATED();
        const hooksDisabled_0 = settings_0?.disableAllHooks === true;
        setDisabledByPolicy(hooksDisabled_0 && getSettingsForSource("policySettings")?.disableAllHooks === true);
        setRestrictedByPolicy(getSettingsForSource("policySettings")?.allowManagedHooksOnly === true);
      }
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  useSettingsChange(t2);
  const mode = modeState.mode;
  const selectedEvent = "event" in modeState ? modeState.event : "PreToolUse";
  const selectedMatcher = "matcher" in modeState ? modeState.matcher : null;
  const mcp = useAppState(_temp32);
  const appStateStore = useAppStateStore();
  let t3;
  if ($[2] !== mcp.tools || $[3] !== toolNames) {
    t3 = [...toolNames, ...mcp.tools.map(_temp42)];
    $[2] = mcp.tools;
    $[3] = toolNames;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const combinedToolNames = t3;
  let t4;
  if ($[5] !== appStateStore || $[6] !== combinedToolNames) {
    t4 = groupHooksByEventAndMatcher(appStateStore.getState(), combinedToolNames);
    $[5] = appStateStore;
    $[6] = combinedToolNames;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const hooksByEventAndMatcher = t4;
  let t5;
  if ($[8] !== hooksByEventAndMatcher || $[9] !== selectedEvent) {
    t5 = getSortedMatchersForEvent(hooksByEventAndMatcher, selectedEvent);
    $[8] = hooksByEventAndMatcher;
    $[9] = selectedEvent;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const sortedMatchersForSelectedEvent = t5;
  let t6;
  if ($[11] !== hooksByEventAndMatcher || $[12] !== selectedEvent || $[13] !== selectedMatcher) {
    t6 = getHooksForMatcher(hooksByEventAndMatcher, selectedEvent, selectedMatcher);
    $[11] = hooksByEventAndMatcher;
    $[12] = selectedEvent;
    $[13] = selectedMatcher;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  const hooksForSelectedMatcher = t6;
  let t7;
  if ($[15] !== onExit) {
    t7 = () => {
      onExit("Hooks dialog dismissed", {
        display: "system"
      });
    };
    $[15] = onExit;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  const handleExit = t7;
  const t8 = mode === "select-event";
  let t9;
  if ($[17] !== t8) {
    t9 = {
      context: "Confirmation",
      isActive: t8
    };
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  useKeybinding("confirm:no", handleExit, t9);
  let t10;
  if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => {
      setModeState({
        mode: "select-event"
      });
    };
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  const t11 = mode === "select-matcher";
  let t12;
  if ($[20] !== t11) {
    t12 = {
      context: "Confirmation",
      isActive: t11
    };
    $[20] = t11;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  useKeybinding("confirm:no", t10, t12);
  let t13;
  if ($[22] !== combinedToolNames || $[23] !== modeState) {
    t13 = () => {
      if ("event" in modeState) {
        if (getMatcherMetadata(modeState.event, combinedToolNames) !== void 0) {
          setModeState({
            mode: "select-matcher",
            event: modeState.event
          });
        } else {
          setModeState({
            mode: "select-event"
          });
        }
      }
    };
    $[22] = combinedToolNames;
    $[23] = modeState;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  const t14 = mode === "select-hook";
  let t15;
  if ($[25] !== t14) {
    t15 = {
      context: "Confirmation",
      isActive: t14
    };
    $[25] = t14;
    $[26] = t15;
  } else {
    t15 = $[26];
  }
  useKeybinding("confirm:no", t13, t15);
  let t16;
  if ($[27] !== modeState) {
    t16 = () => {
      if (modeState.mode === "view-hook") {
        const {
          event,
          hook
        } = modeState;
        setModeState({
          mode: "select-hook",
          event,
          matcher: hook.matcher || ""
        });
      }
    };
    $[27] = modeState;
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  const t17 = mode === "view-hook";
  let t18;
  if ($[29] !== t17) {
    t18 = {
      context: "Confirmation",
      isActive: t17
    };
    $[29] = t17;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  useKeybinding("confirm:no", t16, t18);
  let t19;
  if ($[31] !== combinedToolNames) {
    t19 = getHookEventMetadata(combinedToolNames);
    $[31] = combinedToolNames;
    $[32] = t19;
  } else {
    t19 = $[32];
  }
  const hookEventMetadata = t19;
  const settings_1 = getSettings_DEPRECATED();
  const hooksDisabled_1 = settings_1?.disableAllHooks === true;
  let t20;
  if ($[33] !== hooksByEventAndMatcher) {
    const byEvent = {};
    let total = 0;
    for (const [event_0, matchers] of Object.entries(hooksByEventAndMatcher)) {
      const eventCount = Object.values(matchers).reduce(_temp52, 0);
      byEvent[event_0] = eventCount;
      total = total + eventCount;
    }
    t20 = {
      hooksByEvent: byEvent,
      totalHooksCount: total
    };
    $[33] = hooksByEventAndMatcher;
    $[34] = t20;
  } else {
    t20 = $[34];
  }
  const {
    hooksByEvent,
    totalHooksCount
  } = t20;
  if (hooksDisabled_1) {
    let t21;
    if ($[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t21 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "disabled");
      $[35] = t21;
    } else {
      t21 = $[35];
    }
    const t22 = disabledByPolicy && " by a managed settings file";
    let t23;
    if ($[36] !== totalHooksCount) {
      t23 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, totalHooksCount);
      $[36] = totalHooksCount;
      $[37] = t23;
    } else {
      t23 = $[37];
    }
    let t24;
    if ($[38] !== totalHooksCount) {
      t24 = plural(totalHooksCount, "hook");
      $[38] = totalHooksCount;
      $[39] = t24;
    } else {
      t24 = $[39];
    }
    let t25;
    if ($[40] !== totalHooksCount) {
      t25 = plural(totalHooksCount, "is", "are");
      $[40] = totalHooksCount;
      $[41] = t25;
    } else {
      t25 = $[41];
    }
    let t26;
    if ($[42] !== t22 || $[43] !== t23 || $[44] !== t24 || $[45] !== t25) {
      t26 = /* @__PURE__ */ createElement(ThemedText, null, "All hooks are currently ", t21, t22, ". You have", " ", t23, " configured", " ", t24, " that", " ", t25, " not running.");
      $[42] = t22;
      $[43] = t23;
      $[44] = t24;
      $[45] = t25;
      $[46] = t26;
    } else {
      t26 = $[46];
    }
    let t27;
    let t28;
    let t29;
    let t30;
    if ($[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t27 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "When hooks are disabled:"));
      t28 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 No hook commands will execute");
      t29 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 StatusLine will not be displayed");
      t30 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Tool operations will proceed without hook validation");
      $[47] = t27;
      $[48] = t28;
      $[49] = t29;
      $[50] = t30;
    } else {
      t27 = $[47];
      t28 = $[48];
      t29 = $[49];
      t30 = $[50];
    }
    let t31;
    if ($[51] !== t26) {
      t31 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t26, t27, t28, t29, t30);
      $[51] = t26;
      $[52] = t31;
    } else {
      t31 = $[52];
    }
    let t32;
    if ($[53] !== disabledByPolicy) {
      t32 = !disabledByPolicy && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, 'To re-enable hooks, remove "disableAllHooks" from settings.json or ask Claude.');
      $[53] = disabledByPolicy;
      $[54] = t32;
    } else {
      t32 = $[54];
    }
    let t33;
    if ($[55] !== t31 || $[56] !== t32) {
      t33 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t31, t32);
      $[55] = t31;
      $[56] = t32;
      $[57] = t33;
    } else {
      t33 = $[57];
    }
    let t34;
    if ($[58] !== handleExit || $[59] !== t33) {
      t34 = /* @__PURE__ */ createElement(Dialog, { title: "Hook Configuration - Disabled", onCancel: handleExit, inputGuide: _temp6 }, t33);
      $[58] = handleExit;
      $[59] = t33;
      $[60] = t34;
    } else {
      t34 = $[60];
    }
    return t34;
  }
  switch (modeState.mode) {
    case "select-event": {
      let t21;
      if ($[61] !== combinedToolNames) {
        t21 = (event_2) => {
          if (getMatcherMetadata(event_2, combinedToolNames) !== void 0) {
            setModeState({
              mode: "select-matcher",
              event: event_2
            });
          } else {
            setModeState({
              mode: "select-hook",
              event: event_2,
              matcher: ""
            });
          }
        };
        $[61] = combinedToolNames;
        $[62] = t21;
      } else {
        t21 = $[62];
      }
      let t22;
      if ($[63] !== handleExit || $[64] !== hookEventMetadata || $[65] !== hooksByEvent || $[66] !== restrictedByPolicy || $[67] !== t21 || $[68] !== totalHooksCount) {
        t22 = /* @__PURE__ */ createElement(SelectEventMode, { hookEventMetadata, hooksByEvent, totalHooksCount, restrictedByPolicy, onSelectEvent: t21, onCancel: handleExit });
        $[63] = handleExit;
        $[64] = hookEventMetadata;
        $[65] = hooksByEvent;
        $[66] = restrictedByPolicy;
        $[67] = t21;
        $[68] = totalHooksCount;
        $[69] = t22;
      } else {
        t22 = $[69];
      }
      return t22;
    }
    case "select-matcher": {
      const t21 = hookEventMetadata[modeState.event];
      let t22;
      if ($[70] !== modeState.event) {
        t22 = (matcher) => {
          setModeState({
            mode: "select-hook",
            event: modeState.event,
            matcher
          });
        };
        $[70] = modeState.event;
        $[71] = t22;
      } else {
        t22 = $[71];
      }
      let t23;
      if ($[72] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t23 = () => {
          setModeState({
            mode: "select-event"
          });
        };
        $[72] = t23;
      } else {
        t23 = $[72];
      }
      let t24;
      if ($[73] !== hooksByEventAndMatcher || $[74] !== modeState.event || $[75] !== sortedMatchersForSelectedEvent || $[76] !== t21.description || $[77] !== t22) {
        t24 = /* @__PURE__ */ createElement(SelectMatcherMode, { selectedEvent: modeState.event, matchersForSelectedEvent: sortedMatchersForSelectedEvent, hooksByEventAndMatcher, eventDescription: t21.description, onSelect: t22, onCancel: t23 });
        $[73] = hooksByEventAndMatcher;
        $[74] = modeState.event;
        $[75] = sortedMatchersForSelectedEvent;
        $[76] = t21.description;
        $[77] = t22;
        $[78] = t24;
      } else {
        t24 = $[78];
      }
      return t24;
    }
    case "select-hook": {
      const t21 = hookEventMetadata[modeState.event];
      let t22;
      if ($[79] !== modeState.event) {
        t22 = (hook_1) => {
          setModeState({
            mode: "view-hook",
            event: modeState.event,
            hook: hook_1
          });
        };
        $[79] = modeState.event;
        $[80] = t22;
      } else {
        t22 = $[80];
      }
      let t23;
      if ($[81] !== combinedToolNames || $[82] !== modeState.event) {
        t23 = () => {
          if (getMatcherMetadata(modeState.event, combinedToolNames) !== void 0) {
            setModeState({
              mode: "select-matcher",
              event: modeState.event
            });
          } else {
            setModeState({
              mode: "select-event"
            });
          }
        };
        $[81] = combinedToolNames;
        $[82] = modeState.event;
        $[83] = t23;
      } else {
        t23 = $[83];
      }
      let t24;
      if ($[84] !== hooksForSelectedMatcher || $[85] !== modeState.event || $[86] !== modeState.matcher || $[87] !== t21 || $[88] !== t22 || $[89] !== t23) {
        t24 = /* @__PURE__ */ createElement(SelectHookMode, { selectedEvent: modeState.event, selectedMatcher: modeState.matcher, hooksForSelectedMatcher, hookEventMetadata: t21, onSelect: t22, onCancel: t23 });
        $[84] = hooksForSelectedMatcher;
        $[85] = modeState.event;
        $[86] = modeState.matcher;
        $[87] = t21;
        $[88] = t22;
        $[89] = t23;
        $[90] = t24;
      } else {
        t24 = $[90];
      }
      return t24;
    }
    case "view-hook": {
      const t21 = modeState.hook;
      let t22;
      if ($[91] !== combinedToolNames || $[92] !== modeState.event) {
        t22 = getMatcherMetadata(modeState.event, combinedToolNames);
        $[91] = combinedToolNames;
        $[92] = modeState.event;
        $[93] = t22;
      } else {
        t22 = $[93];
      }
      const t23 = t22 !== void 0;
      let t24;
      if ($[94] !== modeState) {
        t24 = () => {
          const {
            event: event_1,
            hook: hook_0
          } = modeState;
          setModeState({
            mode: "select-hook",
            event: event_1,
            matcher: hook_0.matcher || ""
          });
        };
        $[94] = modeState;
        $[95] = t24;
      } else {
        t24 = $[95];
      }
      let t25;
      if ($[96] !== modeState.hook || $[97] !== t23 || $[98] !== t24) {
        t25 = /* @__PURE__ */ createElement(ViewHookMode, { selectedHook: t21, eventSupportsMatcher: t23, onCancel: t24 });
        $[96] = modeState.hook;
        $[97] = t23;
        $[98] = t24;
        $[99] = t25;
      } else {
        t25 = $[99];
      }
      return t25;
    }
  }
}
function _temp6() {
  return /* @__PURE__ */ createElement(ThemedText, null, "Esc to close");
}
function _temp52(sum, hooks) {
  return sum + hooks.length;
}
function _temp42(tool) {
  return tool.name;
}
function _temp32(s) {
  return s.mcp;
}
function _temp23() {
  return getSettingsForSource("policySettings")?.allowManagedHooksOnly === true;
}
function _temp7() {
  const settings = getSettings_DEPRECATED();
  const hooksDisabled = settings?.disableAllHooks === true;
  return hooksDisabled && getSettingsForSource("policySettings")?.disableAllHooks === true;
}
var init_HooksConfigMenu = __esm({
  "src/components/hooks/HooksConfigMenu.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_AppState();
    init_useSettingsChange();
    init_ink();
    init_useKeybinding();
    init_hooksConfigManager();
    init_settings();
    init_stringUtils();
    init_Dialog();
    init_SelectEventMode();
    init_SelectHookMode();
    init_SelectMatcherMode();
    init_ViewHookMode();
  }
});

// src/commands/hooks/hooks.tsx
var call;
var init_hooks = __esm({
  "src/commands/hooks/hooks.tsx"() {
    init_react();
    init_HooksConfigMenu();
    init_analytics();
    init_tools();
    call = async (onDone, context) => {
      logEvent("tengu_hooks_command", {});
      const appState = context.getAppState();
      const permissionContext = appState.toolPermissionContext;
      const toolNames = getTools(permissionContext).map((tool) => tool.name);
      return /* @__PURE__ */ createElement(HooksConfigMenu, { toolNames, onExit: onDone });
    };
  }
});
init_hooks();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2hvb2tzL2hvb2tzQ29uZmlnTWFuYWdlci50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9ob29rcy9TZWxlY3RFdmVudE1vZGUudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2hvb2tzL1NlbGVjdEhvb2tNb2RlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9ob29rcy9TZWxlY3RNYXRjaGVyTW9kZS50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvaG9va3MvVmlld0hvb2tNb2RlLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9ob29rcy9Ib29rc0NvbmZpZ01lbnUudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9ob29rcy9ob29rcy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC1lcy9tZW1vaXplLmpzJ1xuaW1wb3J0IHR5cGUgeyBIb29rRXZlbnQgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRIb29rcyB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7XG4gIGdldEFsbEhvb2tzLFxuICB0eXBlIEluZGl2aWR1YWxIb29rQ29uZmlnLFxuICBzb3J0TWF0Y2hlcnNCeVByaW9yaXR5LFxufSBmcm9tICcuL2hvb2tzU2V0dGluZ3MuanMnXG5cbmV4cG9ydCB0eXBlIE1hdGNoZXJNZXRhZGF0YSA9IHtcbiAgZmllbGRUb01hdGNoOiBzdHJpbmdcbiAgdmFsdWVzOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgdHlwZSBIb29rRXZlbnRNZXRhZGF0YSA9IHtcbiAgc3VtbWFyeTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgbWF0Y2hlck1ldGFkYXRhPzogTWF0Y2hlck1ldGFkYXRhXG59XG5cbi8vIEhvb2sgZXZlbnQgbWV0YWRhdGEgY29uZmlndXJhdGlvbi5cbi8vIFJlc29sdmVyIHVzZXMgc29ydGVkLWpvaW5lZCBzdHJpbmcga2V5IHNvIHRoYXQgY2FsbGVycyBwYXNzaW5nIGEgZnJlc2hcbi8vIHRvb2xOYW1lcyBhcnJheSBlYWNoIHJlbmRlciAoZS5nLiBIb29rc0NvbmZpZ01lbnUpIGhpdCB0aGUgY2FjaGUgaW5zdGVhZFxuLy8gb2YgbGVha2luZyBhIG5ldyBlbnRyeSBwZXIgY2FsbC5cbmV4cG9ydCBjb25zdCBnZXRIb29rRXZlbnRNZXRhZGF0YSA9IG1lbW9pemUoXG4gIGZ1bmN0aW9uICh0b29sTmFtZXM6IHN0cmluZ1tdKTogUmVjb3JkPEhvb2tFdmVudCwgSG9va0V2ZW50TWV0YWRhdGE+IHtcbiAgICByZXR1cm4ge1xuICAgICAgUHJlVG9vbFVzZToge1xuICAgICAgICBzdW1tYXJ5OiAnQmVmb3JlIHRvb2wgZXhlY3V0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiBvZiB0b29sIGNhbGwgYXJndW1lbnRzLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0L3N0ZGVyciBub3Qgc2hvd25cXG5FeGl0IGNvZGUgMiAtIHNob3cgc3RkZXJyIHRvIG1vZGVsIGFuZCBibG9jayB0b29sIGNhbGxcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5IGJ1dCBjb250aW51ZSB3aXRoIHRvb2wgY2FsbCcsXG4gICAgICAgIG1hdGNoZXJNZXRhZGF0YToge1xuICAgICAgICAgIGZpZWxkVG9NYXRjaDogJ3Rvb2xfbmFtZScsXG4gICAgICAgICAgdmFsdWVzOiB0b29sTmFtZXMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgUG9zdFRvb2xVc2U6IHtcbiAgICAgICAgc3VtbWFyeTogJ0FmdGVyIHRvb2wgZXhlY3V0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIGZpZWxkcyBcImlucHV0c1wiICh0b29sIGNhbGwgYXJndW1lbnRzKSBhbmQgXCJyZXNwb25zZVwiICh0b29sIGNhbGwgcmVzcG9uc2UpLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IHNob3duIGluIHRyYW5zY3JpcHQgbW9kZSAoY3RybCtvKVxcbkV4aXQgY29kZSAyIC0gc2hvdyBzdGRlcnIgdG8gbW9kZWwgaW1tZWRpYXRlbHlcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAndG9vbF9uYW1lJyxcbiAgICAgICAgICB2YWx1ZXM6IHRvb2xOYW1lcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBQb3N0VG9vbFVzZUZhaWx1cmU6IHtcbiAgICAgICAgc3VtbWFyeTogJ0FmdGVyIHRvb2wgZXhlY3V0aW9uIGZhaWxzJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIHRvb2xfbmFtZSwgdG9vbF9pbnB1dCwgdG9vbF91c2VfaWQsIGVycm9yLCBlcnJvcl90eXBlLCBpc19pbnRlcnJ1cHQsIGFuZCBpc190aW1lb3V0LlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IHNob3duIGluIHRyYW5zY3JpcHQgbW9kZSAoY3RybCtvKVxcbkV4aXQgY29kZSAyIC0gc2hvdyBzdGRlcnIgdG8gbW9kZWwgaW1tZWRpYXRlbHlcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAndG9vbF9uYW1lJyxcbiAgICAgICAgICB2YWx1ZXM6IHRvb2xOYW1lcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBQZXJtaXNzaW9uRGVuaWVkOiB7XG4gICAgICAgIHN1bW1hcnk6ICdBZnRlciBhdXRvIG1vZGUgY2xhc3NpZmllciBkZW5pZXMgYSB0b29sIGNhbGwnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggdG9vbF9uYW1lLCB0b29sX2lucHV0LCB0b29sX3VzZV9pZCwgYW5kIHJlYXNvbi5cXG5SZXR1cm4ge1wiaG9va1NwZWNpZmljT3V0cHV0XCI6e1wiaG9va0V2ZW50TmFtZVwiOlwiUGVybWlzc2lvbkRlbmllZFwiLFwicmV0cnlcIjp0cnVlfX0gdG8gdGVsbCB0aGUgbW9kZWwgaXQgbWF5IHJldHJ5LlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IHNob3duIGluIHRyYW5zY3JpcHQgbW9kZSAoY3RybCtvKVxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgICBtYXRjaGVyTWV0YWRhdGE6IHtcbiAgICAgICAgICBmaWVsZFRvTWF0Y2g6ICd0b29sX25hbWUnLFxuICAgICAgICAgIHZhbHVlczogdG9vbE5hbWVzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIE5vdGlmaWNhdGlvbjoge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBub3RpZmljYXRpb25zIGFyZSBzZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIG5vdGlmaWNhdGlvbiBtZXNzYWdlIGFuZCB0eXBlLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0L3N0ZGVyciBub3Qgc2hvd25cXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnbm90aWZpY2F0aW9uX3R5cGUnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgJ3Blcm1pc3Npb25fcHJvbXB0JyxcbiAgICAgICAgICAgICdpZGxlX3Byb21wdCcsXG4gICAgICAgICAgICAnYXV0aF9zdWNjZXNzJyxcbiAgICAgICAgICAgICdlbGljaXRhdGlvbl9kaWFsb2cnLFxuICAgICAgICAgICAgJ2VsaWNpdGF0aW9uX2NvbXBsZXRlJyxcbiAgICAgICAgICAgICdlbGljaXRhdGlvbl9yZXNwb25zZScsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBVc2VyUHJvbXB0U3VibWl0OiB7XG4gICAgICAgIHN1bW1hcnk6ICdXaGVuIHRoZSB1c2VyIHN1Ym1pdHMgYSBwcm9tcHQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggb3JpZ2luYWwgdXNlciBwcm9tcHQgdGV4dC5cXG5FeGl0IGNvZGUgMCAtIHN0ZG91dCBzaG93biB0byBDbGF1ZGVcXG5FeGl0IGNvZGUgMiAtIGJsb2NrIHByb2Nlc3NpbmcsIGVyYXNlIG9yaWdpbmFsIHByb21wdCwgYW5kIHNob3cgc3RkZXJyIHRvIHVzZXIgb25seVxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIFNlc3Npb25TdGFydDoge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBhIG5ldyBzZXNzaW9uIGlzIHN0YXJ0ZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggc2Vzc2lvbiBzdGFydCBzb3VyY2UuXFxuRXhpdCBjb2RlIDAgLSBzdGRvdXQgc2hvd24gdG8gQ2xhdWRlXFxuQmxvY2tpbmcgZXJyb3JzIGFyZSBpZ25vcmVkXFxuT3RoZXIgZXhpdCBjb2RlcyAtIHNob3cgc3RkZXJyIHRvIHVzZXIgb25seScsXG4gICAgICAgIG1hdGNoZXJNZXRhZGF0YToge1xuICAgICAgICAgIGZpZWxkVG9NYXRjaDogJ3NvdXJjZScsXG4gICAgICAgICAgdmFsdWVzOiBbJ3N0YXJ0dXAnLCAncmVzdW1lJywgJ2NsZWFyJywgJ2NvbXBhY3QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBTdG9wOiB7XG4gICAgICAgIHN1bW1hcnk6ICdSaWdodCBiZWZvcmUgQ2xhdWRlIGNvbmNsdWRlcyBpdHMgcmVzcG9uc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnRXhpdCBjb2RlIDAgLSBzdGRvdXQvc3RkZXJyIG5vdCBzaG93blxcbkV4aXQgY29kZSAyIC0gc2hvdyBzdGRlcnIgdG8gbW9kZWwgYW5kIGNvbnRpbnVlIGNvbnZlcnNhdGlvblxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIFN0b3BGYWlsdXJlOiB7XG4gICAgICAgIHN1bW1hcnk6ICdXaGVuIHRoZSB0dXJuIGVuZHMgZHVlIHRvIGFuIEFQSSBlcnJvcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdGaXJlcyBpbnN0ZWFkIG9mIFN0b3Agd2hlbiBhbiBBUEkgZXJyb3IgKHJhdGUgbGltaXQsIGF1dGggZmFpbHVyZSwgZXRjLikgZW5kZWQgdGhlIHR1cm4uIEZpcmUtYW5kLWZvcmdldCBcdTIwMTQgaG9vayBvdXRwdXQgYW5kIGV4aXQgY29kZXMgYXJlIGlnbm9yZWQuJyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnZXJyb3InLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgJ3JhdGVfbGltaXQnLFxuICAgICAgICAgICAgJ2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCcsXG4gICAgICAgICAgICAnYmlsbGluZ19lcnJvcicsXG4gICAgICAgICAgICAnaW52YWxpZF9yZXF1ZXN0JyxcbiAgICAgICAgICAgICdzZXJ2ZXJfZXJyb3InLFxuICAgICAgICAgICAgJ21heF9vdXRwdXRfdG9rZW5zJyxcbiAgICAgICAgICAgICd1bmtub3duJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFN1YmFnZW50U3RhcnQ6IHtcbiAgICAgICAgc3VtbWFyeTogJ1doZW4gYSBzdWJhZ2VudCAoQWdlbnQgdG9vbCBjYWxsKSBpcyBzdGFydGVkJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIGFnZW50X2lkIGFuZCBhZ2VudF90eXBlLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IHNob3duIHRvIHN1YmFnZW50XFxuQmxvY2tpbmcgZXJyb3JzIGFyZSBpZ25vcmVkXFxuT3RoZXIgZXhpdCBjb2RlcyAtIHNob3cgc3RkZXJyIHRvIHVzZXIgb25seScsXG4gICAgICAgIG1hdGNoZXJNZXRhZGF0YToge1xuICAgICAgICAgIGZpZWxkVG9NYXRjaDogJ2FnZW50X3R5cGUnLFxuICAgICAgICAgIHZhbHVlczogW10sIC8vIFdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYXZhaWxhYmxlIGFnZW50IHR5cGVzXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgU3ViYWdlbnRTdG9wOiB7XG4gICAgICAgIHN1bW1hcnk6XG4gICAgICAgICAgJ1JpZ2h0IGJlZm9yZSBhIHN1YmFnZW50IChBZ2VudCB0b29sIGNhbGwpIGNvbmNsdWRlcyBpdHMgcmVzcG9uc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggYWdlbnRfaWQsIGFnZW50X3R5cGUsIGFuZCBhZ2VudF90cmFuc2NyaXB0X3BhdGguXFxuRXhpdCBjb2RlIDAgLSBzdGRvdXQvc3RkZXJyIG5vdCBzaG93blxcbkV4aXQgY29kZSAyIC0gc2hvdyBzdGRlcnIgdG8gc3ViYWdlbnQgYW5kIGNvbnRpbnVlIGhhdmluZyBpdCBydW5cXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnYWdlbnRfdHlwZScsXG4gICAgICAgICAgdmFsdWVzOiBbXSwgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhdmFpbGFibGUgYWdlbnQgdHlwZXNcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBQcmVDb21wYWN0OiB7XG4gICAgICAgIHN1bW1hcnk6ICdCZWZvcmUgY29udmVyc2F0aW9uIGNvbXBhY3Rpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggY29tcGFjdGlvbiBkZXRhaWxzLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IGFwcGVuZGVkIGFzIGN1c3RvbSBjb21wYWN0IGluc3RydWN0aW9uc1xcbkV4aXQgY29kZSAyIC0gYmxvY2sgY29tcGFjdGlvblxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHkgYnV0IGNvbnRpbnVlIHdpdGggY29tcGFjdGlvbicsXG4gICAgICAgIG1hdGNoZXJNZXRhZGF0YToge1xuICAgICAgICAgIGZpZWxkVG9NYXRjaDogJ3RyaWdnZXInLFxuICAgICAgICAgIHZhbHVlczogWydtYW51YWwnLCAnYXV0byddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFBvc3RDb21wYWN0OiB7XG4gICAgICAgIHN1bW1hcnk6ICdBZnRlciBjb252ZXJzYXRpb24gY29tcGFjdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdJbnB1dCB0byBjb21tYW5kIGlzIEpTT04gd2l0aCBjb21wYWN0aW9uIGRldGFpbHMgYW5kIHRoZSBzdW1tYXJ5LlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0IHNob3duIHRvIHVzZXJcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAndHJpZ2dlcicsXG4gICAgICAgICAgdmFsdWVzOiBbJ21hbnVhbCcsICdhdXRvJ10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgU2Vzc2lvbkVuZDoge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBhIHNlc3Npb24gaXMgZW5kaW5nJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIHNlc3Npb24gZW5kIHJlYXNvbi5cXG5FeGl0IGNvZGUgMCAtIGNvbW1hbmQgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgICBtYXRjaGVyTWV0YWRhdGE6IHtcbiAgICAgICAgICBmaWVsZFRvTWF0Y2g6ICdyZWFzb24nLFxuICAgICAgICAgIHZhbHVlczogWydjbGVhcicsICdsb2dvdXQnLCAncHJvbXB0X2lucHV0X2V4aXQnLCAnb3RoZXInXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBQZXJtaXNzaW9uUmVxdWVzdDoge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBhIHBlcm1pc3Npb24gZGlhbG9nIGlzIGRpc3BsYXllZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdJbnB1dCB0byBjb21tYW5kIGlzIEpTT04gd2l0aCB0b29sX25hbWUsIHRvb2xfaW5wdXQsIGFuZCB0b29sX3VzZV9pZC5cXG5PdXRwdXQgSlNPTiB3aXRoIGhvb2tTcGVjaWZpY091dHB1dCBjb250YWluaW5nIGRlY2lzaW9uIHRvIGFsbG93IG9yIGRlbnkuXFxuRXhpdCBjb2RlIDAgLSB1c2UgaG9vayBkZWNpc2lvbiBpZiBwcm92aWRlZFxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgICBtYXRjaGVyTWV0YWRhdGE6IHtcbiAgICAgICAgICBmaWVsZFRvTWF0Y2g6ICd0b29sX25hbWUnLFxuICAgICAgICAgIHZhbHVlczogdG9vbE5hbWVzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFNldHVwOiB7XG4gICAgICAgIHN1bW1hcnk6ICdSZXBvIHNldHVwIGhvb2tzIGZvciBpbml0IGFuZCBtYWludGVuYW5jZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdJbnB1dCB0byBjb21tYW5kIGlzIEpTT04gd2l0aCB0cmlnZ2VyIChpbml0IG9yIG1haW50ZW5hbmNlKS5cXG5FeGl0IGNvZGUgMCAtIHN0ZG91dCBzaG93biB0byBDbGF1ZGVcXG5CbG9ja2luZyBlcnJvcnMgYXJlIGlnbm9yZWRcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAndHJpZ2dlcicsXG4gICAgICAgICAgdmFsdWVzOiBbJ2luaXQnLCAnbWFpbnRlbmFuY2UnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBUZWFtbWF0ZUlkbGU6IHtcbiAgICAgICAgc3VtbWFyeTogJ1doZW4gYSB0ZWFtbWF0ZSBpcyBhYm91dCB0byBnbyBpZGxlJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIHRlYW1tYXRlX25hbWUgYW5kIHRlYW1fbmFtZS5cXG5FeGl0IGNvZGUgMCAtIHN0ZG91dC9zdGRlcnIgbm90IHNob3duXFxuRXhpdCBjb2RlIDIgLSBzaG93IHN0ZGVyciB0byB0ZWFtbWF0ZSBhbmQgcHJldmVudCBpZGxlICh0ZWFtbWF0ZSBjb250aW51ZXMgd29ya2luZylcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgIH0sXG4gICAgICBUYXNrQ3JlYXRlZDoge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBhIHRhc2sgaXMgYmVpbmcgY3JlYXRlZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdJbnB1dCB0byBjb21tYW5kIGlzIEpTT04gd2l0aCB0YXNrX2lkLCB0YXNrX3N1YmplY3QsIHRhc2tfZGVzY3JpcHRpb24sIHRlYW1tYXRlX25hbWUsIGFuZCB0ZWFtX25hbWUuXFxuRXhpdCBjb2RlIDAgLSBzdGRvdXQvc3RkZXJyIG5vdCBzaG93blxcbkV4aXQgY29kZSAyIC0gc2hvdyBzdGRlcnIgdG8gbW9kZWwgYW5kIHByZXZlbnQgdGFzayBjcmVhdGlvblxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIFRhc2tDb21wbGV0ZWQ6IHtcbiAgICAgICAgc3VtbWFyeTogJ1doZW4gYSB0YXNrIGlzIGJlaW5nIG1hcmtlZCBhcyBjb21wbGV0ZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggdGFza19pZCwgdGFza19zdWJqZWN0LCB0YXNrX2Rlc2NyaXB0aW9uLCB0ZWFtbWF0ZV9uYW1lLCBhbmQgdGVhbV9uYW1lLlxcbkV4aXQgY29kZSAwIC0gc3Rkb3V0L3N0ZGVyciBub3Qgc2hvd25cXG5FeGl0IGNvZGUgMiAtIHNob3cgc3RkZXJyIHRvIG1vZGVsIGFuZCBwcmV2ZW50IHRhc2sgY29tcGxldGlvblxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIEVsaWNpdGF0aW9uOiB7XG4gICAgICAgIHN1bW1hcnk6ICdXaGVuIGFuIE1DUCBzZXJ2ZXIgcmVxdWVzdHMgdXNlciBpbnB1dCAoZWxpY2l0YXRpb24pJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIG1jcF9zZXJ2ZXJfbmFtZSwgbWVzc2FnZSwgYW5kIHJlcXVlc3RlZF9zY2hlbWEuXFxuT3V0cHV0IEpTT04gd2l0aCBob29rU3BlY2lmaWNPdXRwdXQgY29udGFpbmluZyBhY3Rpb24gKGFjY2VwdC9kZWNsaW5lL2NhbmNlbCkgYW5kIG9wdGlvbmFsIGNvbnRlbnQuXFxuRXhpdCBjb2RlIDAgLSB1c2UgaG9vayByZXNwb25zZSBpZiBwcm92aWRlZFxcbkV4aXQgY29kZSAyIC0gZGVueSB0aGUgZWxpY2l0YXRpb25cXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnbWNwX3NlcnZlcl9uYW1lJyxcbiAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIEVsaWNpdGF0aW9uUmVzdWx0OiB7XG4gICAgICAgIHN1bW1hcnk6ICdBZnRlciBhIHVzZXIgcmVzcG9uZHMgdG8gYW4gTUNQIGVsaWNpdGF0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIG1jcF9zZXJ2ZXJfbmFtZSwgYWN0aW9uLCBjb250ZW50LCBtb2RlLCBhbmQgZWxpY2l0YXRpb25faWQuXFxuT3V0cHV0IEpTT04gd2l0aCBob29rU3BlY2lmaWNPdXRwdXQgY29udGFpbmluZyBvcHRpb25hbCBhY3Rpb24gYW5kIGNvbnRlbnQgdG8gb3ZlcnJpZGUgdGhlIHJlc3BvbnNlLlxcbkV4aXQgY29kZSAwIC0gdXNlIGhvb2sgcmVzcG9uc2UgaWYgcHJvdmlkZWRcXG5FeGl0IGNvZGUgMiAtIGJsb2NrIHRoZSByZXNwb25zZSAoYWN0aW9uIGJlY29tZXMgZGVjbGluZSlcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnbWNwX3NlcnZlcl9uYW1lJyxcbiAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIENvbmZpZ0NoYW5nZToge1xuICAgICAgICBzdW1tYXJ5OiAnV2hlbiBjb25maWd1cmF0aW9uIGZpbGVzIGNoYW5nZSBkdXJpbmcgYSBzZXNzaW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIHNvdXJjZSAodXNlcl9zZXR0aW5ncywgcHJvamVjdF9zZXR0aW5ncywgbG9jYWxfc2V0dGluZ3MsIHBvbGljeV9zZXR0aW5ncywgc2tpbGxzKSBhbmQgZmlsZV9wYXRoLlxcbkV4aXQgY29kZSAwIC0gYWxsb3cgdGhlIGNoYW5nZVxcbkV4aXQgY29kZSAyIC0gYmxvY2sgdGhlIGNoYW5nZSBmcm9tIGJlaW5nIGFwcGxpZWQgdG8gdGhlIHNlc3Npb25cXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgICAgbWF0Y2hlck1ldGFkYXRhOiB7XG4gICAgICAgICAgZmllbGRUb01hdGNoOiAnc291cmNlJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICd1c2VyX3NldHRpbmdzJyxcbiAgICAgICAgICAgICdwcm9qZWN0X3NldHRpbmdzJyxcbiAgICAgICAgICAgICdsb2NhbF9zZXR0aW5ncycsXG4gICAgICAgICAgICAncG9saWN5X3NldHRpbmdzJyxcbiAgICAgICAgICAgICdza2lsbHMnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgSW5zdHJ1Y3Rpb25zTG9hZGVkOiB7XG4gICAgICAgIHN1bW1hcnk6ICdXaGVuIGFuIGluc3RydWN0aW9uIGZpbGUgKENMQVVERS5tZCBvciBydWxlKSBpcyBsb2FkZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggZmlsZV9wYXRoLCBtZW1vcnlfdHlwZSAoVXNlciwgUHJvamVjdCwgTG9jYWwsIE1hbmFnZWQpLCBsb2FkX3JlYXNvbiAoc2Vzc2lvbl9zdGFydCwgbmVzdGVkX3RyYXZlcnNhbCwgcGF0aF9nbG9iX21hdGNoLCBpbmNsdWRlLCBjb21wYWN0KSwgZ2xvYnMgKG9wdGlvbmFsIFx1MjAxNCB0aGUgcGF0aHM6IGZyb250bWF0dGVyIHBhdHRlcm5zIHRoYXQgbWF0Y2hlZCksIHRyaWdnZXJfZmlsZV9wYXRoIChvcHRpb25hbCBcdTIwMTQgdGhlIGZpbGUgQ2xhdWRlIHRvdWNoZWQgdGhhdCBjYXVzZWQgdGhlIGxvYWQpLCBhbmQgcGFyZW50X2ZpbGVfcGF0aCAob3B0aW9uYWwgXHUyMDE0IHRoZSBmaWxlIHRoYXQgQC1pbmNsdWRlZCB0aGlzIG9uZSkuXFxuRXhpdCBjb2RlIDAgLSBjb21tYW5kIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5XFxuVGhpcyBob29rIGlzIG9ic2VydmFiaWxpdHktb25seSBhbmQgZG9lcyBub3Qgc3VwcG9ydCBibG9ja2luZy4nLFxuICAgICAgICBtYXRjaGVyTWV0YWRhdGE6IHtcbiAgICAgICAgICBmaWVsZFRvTWF0Y2g6ICdsb2FkX3JlYXNvbicsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAnc2Vzc2lvbl9zdGFydCcsXG4gICAgICAgICAgICAnbmVzdGVkX3RyYXZlcnNhbCcsXG4gICAgICAgICAgICAncGF0aF9nbG9iX21hdGNoJyxcbiAgICAgICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgICAgICdjb21wYWN0JyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFdvcmt0cmVlQ3JlYXRlOiB7XG4gICAgICAgIHN1bW1hcnk6ICdDcmVhdGUgYW4gaXNvbGF0ZWQgd29ya3RyZWUgZm9yIFZDUy1hZ25vc3RpYyBpc29sYXRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggbmFtZSAoc3VnZ2VzdGVkIHdvcmt0cmVlIHNsdWcpLlxcblN0ZG91dCBzaG91bGQgY29udGFpbiB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgY3JlYXRlZCB3b3JrdHJlZSBkaXJlY3RvcnkuXFxuRXhpdCBjb2RlIDAgLSB3b3JrdHJlZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseVxcbk90aGVyIGV4aXQgY29kZXMgLSB3b3JrdHJlZSBjcmVhdGlvbiBmYWlsZWQnLFxuICAgICAgfSxcbiAgICAgIFdvcmt0cmVlUmVtb3ZlOiB7XG4gICAgICAgIHN1bW1hcnk6ICdSZW1vdmUgYSBwcmV2aW91c2x5IGNyZWF0ZWQgd29ya3RyZWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggd29ya3RyZWVfcGF0aCAoYWJzb2x1dGUgcGF0aCB0byB3b3JrdHJlZSkuXFxuRXhpdCBjb2RlIDAgLSB3b3JrdHJlZSByZW1vdmVkIHN1Y2Nlc3NmdWxseVxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIEN3ZENoYW5nZWQ6IHtcbiAgICAgICAgc3VtbWFyeTogJ0FmdGVyIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBjaGFuZ2VzJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0lucHV0IHRvIGNvbW1hbmQgaXMgSlNPTiB3aXRoIG9sZF9jd2QgYW5kIG5ld19jd2QuXFxuQ0xBVURFX0VOVl9GSUxFIGlzIHNldCBcdTIwMTQgd3JpdGUgYmFzaCBleHBvcnRzIHRoZXJlIHRvIGFwcGx5IGVudiB0byBzdWJzZXF1ZW50IEJhc2hUb29sIGNvbW1hbmRzLlxcbkhvb2sgb3V0cHV0IGNhbiBpbmNsdWRlIGhvb2tTcGVjaWZpY091dHB1dC53YXRjaFBhdGhzIChhcnJheSBvZiBhYnNvbHV0ZSBwYXRocykgdG8gcmVnaXN0ZXIgd2l0aCB0aGUgRmlsZUNoYW5nZWQgd2F0Y2hlci5cXG5FeGl0IGNvZGUgMCAtIGNvbW1hbmQgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxcbk90aGVyIGV4aXQgY29kZXMgLSBzaG93IHN0ZGVyciB0byB1c2VyIG9ubHknLFxuICAgICAgfSxcbiAgICAgIEZpbGVDaGFuZ2VkOiB7XG4gICAgICAgIHN1bW1hcnk6ICdXaGVuIGEgd2F0Y2hlZCBmaWxlIGNoYW5nZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnSW5wdXQgdG8gY29tbWFuZCBpcyBKU09OIHdpdGggZmlsZV9wYXRoIGFuZCBldmVudCAoY2hhbmdlLCBhZGQsIHVubGluaykuXFxuQ0xBVURFX0VOVl9GSUxFIGlzIHNldCBcdTIwMTQgd3JpdGUgYmFzaCBleHBvcnRzIHRoZXJlIHRvIGFwcGx5IGVudiB0byBzdWJzZXF1ZW50IEJhc2hUb29sIGNvbW1hbmRzLlxcblRoZSBtYXRjaGVyIGZpZWxkIHNwZWNpZmllcyBmaWxlbmFtZXMgdG8gd2F0Y2ggaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5IChlLmcuIFwiLmVudnJjfC5lbnZcIikuXFxuSG9vayBvdXRwdXQgY2FuIGluY2x1ZGUgaG9va1NwZWNpZmljT3V0cHV0LndhdGNoUGF0aHMgKGFycmF5IG9mIGFic29sdXRlIHBhdGhzKSB0byBkeW5hbWljYWxseSB1cGRhdGUgdGhlIHdhdGNoIGxpc3QuXFxuRXhpdCBjb2RlIDAgLSBjb21tYW5kIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcXG5PdGhlciBleGl0IGNvZGVzIC0gc2hvdyBzdGRlcnIgdG8gdXNlciBvbmx5JyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICB0b29sTmFtZXMgPT4gdG9vbE5hbWVzLnNsaWNlKCkuc29ydCgpLmpvaW4oJywnKSxcbilcblxuLy8gR3JvdXAgaG9va3MgYnkgZXZlbnQgYW5kIG1hdGNoZXJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEhvb2tzQnlFdmVudEFuZE1hdGNoZXIoXG4gIGFwcFN0YXRlOiBBcHBTdGF0ZSxcbiAgdG9vbE5hbWVzOiBzdHJpbmdbXSxcbik6IFJlY29yZDxIb29rRXZlbnQsIFJlY29yZDxzdHJpbmcsIEluZGl2aWR1YWxIb29rQ29uZmlnW10+PiB7XG4gIGNvbnN0IGdyb3VwZWQ6IFJlY29yZDxIb29rRXZlbnQsIFJlY29yZDxzdHJpbmcsIEluZGl2aWR1YWxIb29rQ29uZmlnW10+PiA9IHtcbiAgICBQcmVUb29sVXNlOiB7fSxcbiAgICBQb3N0VG9vbFVzZToge30sXG4gICAgUG9zdFRvb2xVc2VGYWlsdXJlOiB7fSxcbiAgICBQZXJtaXNzaW9uRGVuaWVkOiB7fSxcbiAgICBOb3RpZmljYXRpb246IHt9LFxuICAgIFVzZXJQcm9tcHRTdWJtaXQ6IHt9LFxuICAgIFNlc3Npb25TdGFydDoge30sXG4gICAgU2Vzc2lvbkVuZDoge30sXG4gICAgU3RvcDoge30sXG4gICAgU3RvcEZhaWx1cmU6IHt9LFxuICAgIFN1YmFnZW50U3RhcnQ6IHt9LFxuICAgIFN1YmFnZW50U3RvcDoge30sXG4gICAgUHJlQ29tcGFjdDoge30sXG4gICAgUG9zdENvbXBhY3Q6IHt9LFxuICAgIFBlcm1pc3Npb25SZXF1ZXN0OiB7fSxcbiAgICBTZXR1cDoge30sXG4gICAgVGVhbW1hdGVJZGxlOiB7fSxcbiAgICBUYXNrQ3JlYXRlZDoge30sXG4gICAgVGFza0NvbXBsZXRlZDoge30sXG4gICAgRWxpY2l0YXRpb246IHt9LFxuICAgIEVsaWNpdGF0aW9uUmVzdWx0OiB7fSxcbiAgICBDb25maWdDaGFuZ2U6IHt9LFxuICAgIFdvcmt0cmVlQ3JlYXRlOiB7fSxcbiAgICBXb3JrdHJlZVJlbW92ZToge30sXG4gICAgSW5zdHJ1Y3Rpb25zTG9hZGVkOiB7fSxcbiAgICBDd2RDaGFuZ2VkOiB7fSxcbiAgICBGaWxlQ2hhbmdlZDoge30sXG4gIH1cblxuICBjb25zdCBtZXRhZGF0YSA9IGdldEhvb2tFdmVudE1ldGFkYXRhKHRvb2xOYW1lcylcblxuICAvLyBJbmNsdWRlIGhvb2tzIGZyb20gc2V0dGluZ3MgZmlsZXNcbiAgZ2V0QWxsSG9va3MoYXBwU3RhdGUpLmZvckVhY2goaG9vayA9PiB7XG4gICAgY29uc3QgZXZlbnRHcm91cCA9IGdyb3VwZWRbaG9vay5ldmVudF1cbiAgICBpZiAoZXZlbnRHcm91cCkge1xuICAgICAgLy8gRm9yIGV2ZW50cyB3aXRob3V0IG1hdGNoZXJzLCB1c2UgZW1wdHkgc3RyaW5nIGFzIGtleVxuICAgICAgY29uc3QgbWF0Y2hlcktleSA9XG4gICAgICAgIG1ldGFkYXRhW2hvb2suZXZlbnRdLm1hdGNoZXJNZXRhZGF0YSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBob29rLm1hdGNoZXIgfHwgJydcbiAgICAgICAgICA6ICcnXG4gICAgICBpZiAoIWV2ZW50R3JvdXBbbWF0Y2hlcktleV0pIHtcbiAgICAgICAgZXZlbnRHcm91cFttYXRjaGVyS2V5XSA9IFtdXG4gICAgICB9XG4gICAgICBldmVudEdyb3VwW21hdGNoZXJLZXldLnB1c2goaG9vaylcbiAgICB9XG4gIH0pXG5cbiAgLy8gSW5jbHVkZSByZWdpc3RlcmVkIGhvb2tzIChlLmcuLCBwbHVnaW4gaG9va3MpXG4gIGNvbnN0IHJlZ2lzdGVyZWRIb29rcyA9IGdldFJlZ2lzdGVyZWRIb29rcygpXG4gIGlmIChyZWdpc3RlcmVkSG9va3MpIHtcbiAgICBmb3IgKGNvbnN0IFtldmVudCwgbWF0Y2hlcnNdIG9mIE9iamVjdC5lbnRyaWVzKHJlZ2lzdGVyZWRIb29rcykpIHtcbiAgICAgIGNvbnN0IGhvb2tFdmVudCA9IGV2ZW50IGFzIEhvb2tFdmVudFxuICAgICAgY29uc3QgZXZlbnRHcm91cCA9IGdyb3VwZWRbaG9va0V2ZW50XVxuICAgICAgaWYgKCFldmVudEdyb3VwKSBjb250aW51ZVxuXG4gICAgICBmb3IgKGNvbnN0IG1hdGNoZXIgb2YgbWF0Y2hlcnMpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcktleSA9IG1hdGNoZXIubWF0Y2hlciB8fCAnJ1xuXG4gICAgICAgIC8vIE9ubHkgUGx1Z2luSG9va01hdGNoZXIgaGFzIHBsdWdpblJvb3Q7IEhvb2tDYWxsYmFja01hdGNoZXIgKGludGVybmFsXG4gICAgICAgIC8vIGNhbGxiYWNrcyBsaWtlIGF0dHJpYnV0aW9uSG9va3MsIHNlc3Npb25GaWxlQWNjZXNzSG9va3MpIGRvZXMgbm90LlxuICAgICAgICBpZiAoJ3BsdWdpblJvb3QnIGluIG1hdGNoZXIpIHtcbiAgICAgICAgICBldmVudEdyb3VwW21hdGNoZXJLZXldID8/PSBbXVxuICAgICAgICAgIGZvciAoY29uc3QgaG9vayBvZiBtYXRjaGVyLmhvb2tzKSB7XG4gICAgICAgICAgICBldmVudEdyb3VwW21hdGNoZXJLZXldLnB1c2goe1xuICAgICAgICAgICAgICBldmVudDogaG9va0V2ZW50LFxuICAgICAgICAgICAgICBjb25maWc6IGhvb2ssXG4gICAgICAgICAgICAgIG1hdGNoZXI6IG1hdGNoZXIubWF0Y2hlcixcbiAgICAgICAgICAgICAgc291cmNlOiAncGx1Z2luSG9vaycsXG4gICAgICAgICAgICAgIHBsdWdpbk5hbWU6IG1hdGNoZXIucGx1Z2luSWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnKSB7XG4gICAgICAgICAgZXZlbnRHcm91cFttYXRjaGVyS2V5XSA/Pz0gW11cbiAgICAgICAgICBmb3IgKGNvbnN0IF9ob29rIG9mIG1hdGNoZXIuaG9va3MpIHtcbiAgICAgICAgICAgIGV2ZW50R3JvdXBbbWF0Y2hlcktleV0ucHVzaCh7XG4gICAgICAgICAgICAgIGV2ZW50OiBob29rRXZlbnQsXG4gICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb21tYW5kJyxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnW0FOVC1PTkxZXSBCdWlsdC1pbiBIb29rJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWF0Y2hlcjogbWF0Y2hlci5tYXRjaGVyLFxuICAgICAgICAgICAgICBzb3VyY2U6ICdidWlsdGluSG9vaycsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBncm91cGVkXG59XG5cbi8vIEdldCBzb3J0ZWQgbWF0Y2hlcnMgZm9yIGEgc3BlY2lmaWMgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRNYXRjaGVyc0ZvckV2ZW50KFxuICBob29rc0J5RXZlbnRBbmRNYXRjaGVyOiBSZWNvcmQ8XG4gICAgSG9va0V2ZW50LFxuICAgIFJlY29yZDxzdHJpbmcsIEluZGl2aWR1YWxIb29rQ29uZmlnW10+XG4gID4sXG4gIGV2ZW50OiBIb29rRXZlbnQsXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IG1hdGNoZXJzID0gT2JqZWN0LmtleXMoaG9va3NCeUV2ZW50QW5kTWF0Y2hlcltldmVudF0gfHwge30pXG4gIHJldHVybiBzb3J0TWF0Y2hlcnNCeVByaW9yaXR5KG1hdGNoZXJzLCBob29rc0J5RXZlbnRBbmRNYXRjaGVyLCBldmVudClcbn1cblxuLy8gR2V0IGhvb2tzIGZvciBhIHNwZWNpZmljIGV2ZW50IGFuZCBtYXRjaGVyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9va3NGb3JNYXRjaGVyKFxuICBob29rc0J5RXZlbnRBbmRNYXRjaGVyOiBSZWNvcmQ8XG4gICAgSG9va0V2ZW50LFxuICAgIFJlY29yZDxzdHJpbmcsIEluZGl2aWR1YWxIb29rQ29uZmlnW10+XG4gID4sXG4gIGV2ZW50OiBIb29rRXZlbnQsXG4gIG1hdGNoZXI6IHN0cmluZyB8IG51bGwsXG4pOiBJbmRpdmlkdWFsSG9va0NvbmZpZ1tdIHtcbiAgLy8gRm9yIGV2ZW50cyB3aXRob3V0IG1hdGNoZXJzLCBob29rcyBhcmUgc3RvcmVkIHdpdGggZW1wdHkgc3RyaW5nIGFzIGtleVxuICAvLyBiZWNhdXNlIHRoZSByZWNvcmQga2V5cyBtdXN0IGJlIHN0cmluZ3MuXG4gIGNvbnN0IG1hdGNoZXJLZXkgPSBtYXRjaGVyID8/ICcnXG4gIHJldHVybiBob29rc0J5RXZlbnRBbmRNYXRjaGVyW2V2ZW50XT8uW21hdGNoZXJLZXldID8/IFtdXG59XG5cbi8vIEdldCBtZXRhZGF0YSBmb3IgYSBzcGVjaWZpYyBldmVudCdzIG1hdGNoZXJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGVyTWV0YWRhdGEoXG4gIGV2ZW50OiBIb29rRXZlbnQsXG4gIHRvb2xOYW1lczogc3RyaW5nW10sXG4pOiBNYXRjaGVyTWV0YWRhdGEgfCB1bmRlZmluZWQge1xuICByZXR1cm4gZ2V0SG9va0V2ZW50TWV0YWRhdGEodG9vbE5hbWVzKVtldmVudF0ubWF0Y2hlck1ldGFkYXRhXG59XG4iLCAiLyoqXG4gKiBTZWxlY3RFdmVudE1vZGUgaXMgdGhlIGVudHJ5cG9pbnQgb2YgdGhlIEhvb2tzIGNvbmZpZyBtZW51LCB3aGVyZSB0aGUgdXNlclxuICogc2VlcyB0aGUgbGlzdCBvZiBhdmFpbGFibGUgaG9vayBldmVudHMuXG4gKlxuICogVGhlIC9ob29rcyBtZW51IGlzIHJlYWQtb25seTogc2VsZWN0aW5nIGFuIGV2ZW50IGxldHMgeW91IGJyb3dzZSBpdHNcbiAqIGNvbmZpZ3VyZWQgaG9va3MgYnV0IG5vdCBtb2RpZnkgdGhlbS4gVG8gYWRkIG9yIGNoYW5nZSBob29rcywgdXNlcnMgc2hvdWxkXG4gKiBlZGl0IHNldHRpbmdzLmpzb24gZGlyZWN0bHkgb3IgYXNrIENsYXVkZS5cbiAqL1xuXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEhvb2tFdmVudCB9IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBIb29rRXZlbnRNZXRhZGF0YSB9IGZyb20gJ3NyYy91dGlscy9ob29rcy9ob29rc0NvbmZpZ01hbmFnZXIuanMnXG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgaG9va0V2ZW50TWV0YWRhdGE6IFJlY29yZDxIb29rRXZlbnQsIEhvb2tFdmVudE1ldGFkYXRhPlxuICBob29rc0J5RXZlbnQ6IFBhcnRpYWw8UmVjb3JkPEhvb2tFdmVudCwgbnVtYmVyPj5cbiAgdG90YWxIb29rc0NvdW50OiBudW1iZXJcbiAgcmVzdHJpY3RlZEJ5UG9saWN5OiBib29sZWFuXG4gIG9uU2VsZWN0RXZlbnQ6IChldmVudDogSG9va0V2ZW50KSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RFdmVudE1vZGUoe1xuICBob29rRXZlbnRNZXRhZGF0YSxcbiAgaG9va3NCeUV2ZW50LFxuICB0b3RhbEhvb2tzQ291bnQsXG4gIHJlc3RyaWN0ZWRCeVBvbGljeSxcbiAgb25TZWxlY3RFdmVudCxcbiAgb25DYW5jZWwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHN1YnRpdGxlID0gYCR7dG90YWxIb29rc0NvdW50fSAke3BsdXJhbCh0b3RhbEhvb2tzQ291bnQsICdob29rJyl9IGNvbmZpZ3VyZWRgXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIHRpdGxlPVwiSG9va3NcIiBzdWJ0aXRsZT17c3VidGl0bGV9IG9uQ2FuY2VsPXtvbkNhbmNlbH0+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICB7cmVzdHJpY3RlZEJ5UG9saWN5ICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VnZ2VzdGlvblwiPlxuICAgICAgICAgICAgICB7ZmlndXJlcy5pbmZvfSBIb29rcyBSZXN0cmljdGVkIGJ5IFBvbGljeVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIE9ubHkgaG9va3MgZnJvbSBtYW5hZ2VkIHNldHRpbmdzIGNhbiBydW4uIFVzZXItZGVmaW5lZCBob29rcyBmcm9tXG4gICAgICAgICAgICAgIH4vLmNsYXVkZS9zZXR0aW5ncy5qc29uLCAuY2xhdWRlL3NldHRpbmdzLmpzb24sIGFuZFxuICAgICAgICAgICAgICAuY2xhdWRlL3NldHRpbmdzLmxvY2FsLmpzb24gYXJlIGJsb2NrZWQuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7ZmlndXJlcy5pbmZvfSBUaGlzIG1lbnUgaXMgcmVhZC1vbmx5LiBUbyBhZGQgb3IgbW9kaWZ5IGhvb2tzLCBlZGl0XG4gICAgICAgICAgICBzZXR0aW5ncy5qc29uIGRpcmVjdGx5IG9yIGFzayBDbGF1ZGUueycgJ31cbiAgICAgICAgICAgIDxMaW5rIHVybD1cImh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vaG9va3NcIj5MZWFybiBtb3JlPC9MaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgb25TZWxlY3RFdmVudCh2YWx1ZSBhcyBIb29rRXZlbnQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgICAgICAgb3B0aW9ucz17T2JqZWN0LmVudHJpZXMoaG9va0V2ZW50TWV0YWRhdGEpLm1hcChcbiAgICAgICAgICAgICAgKFtuYW1lLCBtZXRhZGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGhvb2tzQnlFdmVudFtuYW1lIGFzIEhvb2tFdmVudF0gfHwgMFxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9IDxUZXh0IGNvbG9yPVwic3VnZ2VzdGlvblwiPih7Y291bnR9KTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YWRhdGEuc3VtbWFyeSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICIvKipcbiAqIFNlbGVjdEhvb2tNb2RlIHNob3dzIGFsbCBob29rcyBjb25maWd1cmVkIGZvciBhIGdpdmVuIGV2ZW50K21hdGNoZXIgcGFpci5cbiAqXG4gKiBUaGUgL2hvb2tzIG1lbnUgaXMgcmVhZC1vbmx5OiB0aGlzIHZpZXcgbm8gbG9uZ2VyIG9mZmVycyBcImFkZCBuZXcgaG9va1wiXG4gKiBhbmQgc2VsZWN0aW5nIGEgaG9vayBzaG93cyBpdHMgcmVhZC1vbmx5IGRldGFpbHMgaW5zdGVhZCBvZiBhIGRlbGV0ZVxuICogY29uZmlybWF0aW9uLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgSG9va0V2ZW50IH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IEhvb2tFdmVudE1ldGFkYXRhIH0gZnJvbSAnc3JjL3V0aWxzL2hvb2tzL2hvb2tzQ29uZmlnTWFuYWdlci5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIGdldEhvb2tEaXNwbGF5VGV4dCxcbiAgaG9va1NvdXJjZUhlYWRlckRpc3BsYXlTdHJpbmcsXG4gIHR5cGUgSW5kaXZpZHVhbEhvb2tDb25maWcsXG59IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzL2hvb2tzU2V0dGluZ3MuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlbGVjdGVkRXZlbnQ6IEhvb2tFdmVudFxuICBzZWxlY3RlZE1hdGNoZXI6IHN0cmluZyB8IG51bGxcbiAgaG9va3NGb3JTZWxlY3RlZE1hdGNoZXI6IEluZGl2aWR1YWxIb29rQ29uZmlnW11cbiAgaG9va0V2ZW50TWV0YWRhdGE6IEhvb2tFdmVudE1ldGFkYXRhXG4gIG9uU2VsZWN0OiAoaG9vazogSW5kaXZpZHVhbEhvb2tDb25maWcpID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdEhvb2tNb2RlKHtcbiAgc2VsZWN0ZWRFdmVudCxcbiAgc2VsZWN0ZWRNYXRjaGVyLFxuICBob29rc0ZvclNlbGVjdGVkTWF0Y2hlcixcbiAgaG9va0V2ZW50TWV0YWRhdGEsXG4gIG9uU2VsZWN0LFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgdGl0bGUgPVxuICAgIGhvb2tFdmVudE1ldGFkYXRhLm1hdGNoZXJNZXRhZGF0YSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGAke3NlbGVjdGVkRXZlbnR9IC0gTWF0Y2hlcjogJHtzZWxlY3RlZE1hdGNoZXIgfHwgJyhhbGwpJ31gXG4gICAgICA6IHNlbGVjdGVkRXZlbnRcblxuICBpZiAoaG9va3NGb3JTZWxlY3RlZE1hdGNoZXIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17aG9va0V2ZW50TWV0YWRhdGEuZGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgaW5wdXRHdWlkZT17KCkgPT4gPFRleHQ+RXNjIHRvIGdvIGJhY2s8L1RleHQ+fVxuICAgICAgPlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPk5vIGhvb2tzIGNvbmZpZ3VyZWQgZm9yIHRoaXMgZXZlbnQuPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgVG8gYWRkIGhvb2tzLCBlZGl0IHNldHRpbmdzLmpzb24gZGlyZWN0bHkgb3IgYXNrIENsYXVkZS5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdWJ0aXRsZT17aG9va0V2ZW50TWV0YWRhdGEuZGVzY3JpcHRpb259XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXtob29rc0ZvclNlbGVjdGVkTWF0Y2hlci5tYXAoKGhvb2ssIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IGBbJHtob29rLmNvbmZpZy50eXBlfV0gJHtnZXRIb29rRGlzcGxheVRleHQoaG9vay5jb25maWcpfWAsXG4gICAgICAgICAgICB2YWx1ZTogaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBob29rLnNvdXJjZSA9PT0gJ3BsdWdpbkhvb2snICYmIGhvb2sucGx1Z2luTmFtZVxuICAgICAgICAgICAgICAgID8gYCR7aG9va1NvdXJjZUhlYWRlckRpc3BsYXlTdHJpbmcoaG9vay5zb3VyY2UpfSAoJHtob29rLnBsdWdpbk5hbWV9KWBcbiAgICAgICAgICAgICAgICA6IGhvb2tTb3VyY2VIZWFkZXJEaXNwbGF5U3RyaW5nKGhvb2suc291cmNlKSxcbiAgICAgICAgICB9KSl9XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICAgICAgICAgICAgY29uc3QgaG9vayA9IGhvb2tzRm9yU2VsZWN0ZWRNYXRjaGVyW2luZGV4XVxuICAgICAgICAgICAgaWYgKGhvb2spIHtcbiAgICAgICAgICAgICAgb25TZWxlY3QoaG9vaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiLyoqXG4gKiBTZWxlY3RNYXRjaGVyTW9kZSBzaG93cyB0aGUgY29uZmlndXJlZCBtYXRjaGVycyBmb3IgYSBzZWxlY3RlZCBob29rIGV2ZW50LlxuICpcbiAqIFRoZSAvaG9va3MgbWVudSBpcyByZWFkLW9ubHk6IHRoaXMgdmlldyBubyBsb25nZXIgb2ZmZXJzIFwiYWRkIG5ldyBtYXRjaGVyXCJcbiAqIGFuZCBzaW1wbHkgbGV0cyB0aGUgdXNlciBkcmlsbCBpbnRvIGVhY2ggbWF0Y2hlciB0byBzZWUgaXRzIGhvb2tzLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgSG9va0V2ZW50IH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICB0eXBlIEhvb2tTb3VyY2UsXG4gIGhvb2tTb3VyY2VJbmxpbmVEaXNwbGF5U3RyaW5nLFxuICB0eXBlIEluZGl2aWR1YWxIb29rQ29uZmlnLFxufSBmcm9tICcuLi8uLi91dGlscy9ob29rcy9ob29rc1NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5cbnR5cGUgTWF0Y2hlcldpdGhTb3VyY2UgPSB7XG4gIG1hdGNoZXI6IHN0cmluZ1xuICBzb3VyY2VzOiBIb29rU291cmNlW11cbiAgaG9va0NvdW50OiBudW1iZXJcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgc2VsZWN0ZWRFdmVudDogSG9va0V2ZW50XG4gIG1hdGNoZXJzRm9yU2VsZWN0ZWRFdmVudDogc3RyaW5nW11cbiAgaG9va3NCeUV2ZW50QW5kTWF0Y2hlcjogUmVjb3JkPFxuICAgIEhvb2tFdmVudCxcbiAgICBSZWNvcmQ8c3RyaW5nLCBJbmRpdmlkdWFsSG9va0NvbmZpZ1tdPlxuICA+XG4gIGV2ZW50RGVzY3JpcHRpb246IHN0cmluZ1xuICBvblNlbGVjdDogKG1hdGNoZXI6IHN0cmluZykgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0TWF0Y2hlck1vZGUoe1xuICBzZWxlY3RlZEV2ZW50LFxuICBtYXRjaGVyc0ZvclNlbGVjdGVkRXZlbnQsXG4gIGhvb2tzQnlFdmVudEFuZE1hdGNoZXIsXG4gIGV2ZW50RGVzY3JpcHRpb24sXG4gIG9uU2VsZWN0LFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gR3JvdXAgbWF0Y2hlcnMgd2l0aCB0aGVpciBzb3VyY2VzIChhbHJlYWR5IHNvcnRlZCBieSBwcmlvcml0eSBpbiBwYXJlbnQpXG4gIGNvbnN0IG1hdGNoZXJzV2l0aFNvdXJjZXM6IE1hdGNoZXJXaXRoU291cmNlW10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gbWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50Lm1hcChtYXRjaGVyID0+IHtcbiAgICAgIGNvbnN0IGhvb2tzID0gaG9va3NCeUV2ZW50QW5kTWF0Y2hlcltzZWxlY3RlZEV2ZW50XT8uW21hdGNoZXJdIHx8IFtdXG4gICAgICBjb25zdCBzb3VyY2VzID0gQXJyYXkuZnJvbShuZXcgU2V0KGhvb2tzLm1hcChoID0+IGguc291cmNlKSkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVyLFxuICAgICAgICBzb3VyY2VzLFxuICAgICAgICBob29rQ291bnQ6IGhvb2tzLmxlbmd0aCxcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbbWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50LCBob29rc0J5RXZlbnRBbmRNYXRjaGVyLCBzZWxlY3RlZEV2ZW50XSlcblxuICBpZiAobWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPXtgJHtzZWxlY3RlZEV2ZW50fSAtIE1hdGNoZXJzYH1cbiAgICAgICAgc3VidGl0bGU9e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgaW5wdXRHdWlkZT17KCkgPT4gPFRleHQ+RXNjIHRvIGdvIGJhY2s8L1RleHQ+fVxuICAgICAgPlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPk5vIGhvb2tzIGNvbmZpZ3VyZWQgZm9yIHRoaXMgZXZlbnQuPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgVG8gYWRkIGhvb2tzLCBlZGl0IHNldHRpbmdzLmpzb24gZGlyZWN0bHkgb3IgYXNrIENsYXVkZS5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17YCR7c2VsZWN0ZWRFdmVudH0gLSBNYXRjaGVyc2B9XG4gICAgICBzdWJ0aXRsZT17ZXZlbnREZXNjcmlwdGlvbn1cbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e21hdGNoZXJzV2l0aFNvdXJjZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVGV4dCA9IGl0ZW0uc291cmNlc1xuICAgICAgICAgICAgICAubWFwKGhvb2tTb3VyY2VJbmxpbmVEaXNwbGF5U3RyaW5nKVxuICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlckxhYmVsID0gaXRlbS5tYXRjaGVyIHx8ICcoYWxsKSdcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBgWyR7c291cmNlVGV4dH1dICR7bWF0Y2hlckxhYmVsfWAsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLm1hdGNoZXIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtpdGVtLmhvb2tDb3VudH0gJHtwbHVyYWwoaXRlbS5ob29rQ291bnQsICdob29rJyl9YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgb25TZWxlY3QodmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgIi8qKlxuICogVmlld0hvb2tNb2RlIHNob3dzIHJlYWQtb25seSBkZXRhaWxzIGZvciBhIHNpbmdsZSBjb25maWd1cmVkIGhvb2suXG4gKlxuICogVGhlIC9ob29rcyBtZW51IGlzIHJlYWQtb25seTsgdGhpcyB2aWV3IHJlcGxhY2VzIHRoZSBmb3JtZXIgZGVsZXRlLWhvb2tcbiAqIGNvbmZpcm1hdGlvbiBzY3JlZW4gYW5kIGRpcmVjdHMgdXNlcnMgdG8gc2V0dGluZ3MuanNvbiBvciBDbGF1ZGUgZm9yIGVkaXRzLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIGhvb2tTb3VyY2VEZXNjcmlwdGlvbkRpc3BsYXlTdHJpbmcsXG4gIHR5cGUgSW5kaXZpZHVhbEhvb2tDb25maWcsXG59IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzL2hvb2tzU2V0dGluZ3MuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VsZWN0ZWRIb29rOiBJbmRpdmlkdWFsSG9va0NvbmZpZ1xuICBldmVudFN1cHBvcnRzTWF0Y2hlcjogYm9vbGVhblxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld0hvb2tNb2RlKHtcbiAgc2VsZWN0ZWRIb29rLFxuICBldmVudFN1cHBvcnRzTWF0Y2hlcixcbiAgb25DYW5jZWwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJIb29rIGRldGFpbHNcIlxuICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgaW5wdXRHdWlkZT17KCkgPT4gPFRleHQ+RXNjIHRvIGdvIGJhY2s8L1RleHQ+fVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgRXZlbnQ6IDxUZXh0IGJvbGQ+e3NlbGVjdGVkSG9vay5ldmVudH08L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtldmVudFN1cHBvcnRzTWF0Y2hlciAmJiAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgTWF0Y2hlcjogPFRleHQgYm9sZD57c2VsZWN0ZWRIb29rLm1hdGNoZXIgfHwgJyhhbGwpJ308L1RleHQ+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIFR5cGU6IDxUZXh0IGJvbGQ+e3NlbGVjdGVkSG9vay5jb25maWcudHlwZX08L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgU291cmNlOnsnICd9XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAge2hvb2tTb3VyY2VEZXNjcmlwdGlvbkRpc3BsYXlTdHJpbmcoc2VsZWN0ZWRIb29rLnNvdXJjZSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtzZWxlY3RlZEhvb2sucGx1Z2luTmFtZSAmJiAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgUGx1Z2luOiA8VGV4dCBkaW1Db2xvcj57c2VsZWN0ZWRIb29rLnBsdWdpbk5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57Z2V0Q29udGVudEZpZWxkTGFiZWwoc2VsZWN0ZWRIb29rLmNvbmZpZyl9OjwvVGV4dD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBib3JkZXJTdHlsZT1cInJvdW5kXCJcbiAgICAgICAgICAgIGJvcmRlckRpbUNvbG9yXG4gICAgICAgICAgICBwYWRkaW5nTGVmdD17MX1cbiAgICAgICAgICAgIHBhZGRpbmdSaWdodD17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dD57Z2V0Q29udGVudEZpZWxkVmFsdWUoc2VsZWN0ZWRIb29rLmNvbmZpZyl9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgeydzdGF0dXNNZXNzYWdlJyBpbiBzZWxlY3RlZEhvb2suY29uZmlnICYmXG4gICAgICAgICAgc2VsZWN0ZWRIb29rLmNvbmZpZy5zdGF0dXNNZXNzYWdlICYmIChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBTdGF0dXMgbWVzc2FnZTp7JyAnfVxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c2VsZWN0ZWRIb29rLmNvbmZpZy5zdGF0dXNNZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBUbyBtb2RpZnkgb3IgcmVtb3ZlIHRoaXMgaG9vaywgZWRpdCBzZXR0aW5ncy5qc29uIGRpcmVjdGx5IG9yIGFza1xuICAgICAgICAgIENsYXVkZSB0byBoZWxwLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG4vKipcbiAqIEdldCBhIGh1bWFuLXJlYWRhYmxlIGxhYmVsIGZvciB0aGUgcHJpbWFyeSBjb250ZW50IGZpZWxkIG9mIGEgaG9va1xuICogYmFzZWQgb24gaXRzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGdldENvbnRlbnRGaWVsZExhYmVsKGNvbmZpZzogSW5kaXZpZHVhbEhvb2tDb25maWdbJ2NvbmZpZyddKTogc3RyaW5nIHtcbiAgc3dpdGNoIChjb25maWcudHlwZSkge1xuICAgIGNhc2UgJ2NvbW1hbmQnOlxuICAgICAgcmV0dXJuICdDb21tYW5kJ1xuICAgIGNhc2UgJ3Byb21wdCc6XG4gICAgICByZXR1cm4gJ1Byb21wdCdcbiAgICBjYXNlICdhZ2VudCc6XG4gICAgICByZXR1cm4gJ1Byb21wdCdcbiAgICBjYXNlICdodHRwJzpcbiAgICAgIHJldHVybiAnVVJMJ1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBhY3R1YWwgY29udGVudCB2YWx1ZSBmb3IgYSBob29rJ3MgcHJpbWFyeSBmaWVsZCwgYnlwYXNzaW5nXG4gKiBzdGF0dXNNZXNzYWdlIHNvIHRoZSBkZXRhaWwgdmlldyBhbHdheXMgc2hvd3MgdGhlIHJlYWwgY29tbWFuZC9wcm9tcHQvVVJMLlxuICovXG5mdW5jdGlvbiBnZXRDb250ZW50RmllbGRWYWx1ZShjb25maWc6IEluZGl2aWR1YWxIb29rQ29uZmlnWydjb25maWcnXSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoY29uZmlnLnR5cGUpIHtcbiAgICBjYXNlICdjb21tYW5kJzpcbiAgICAgIHJldHVybiBjb25maWcuY29tbWFuZFxuICAgIGNhc2UgJ3Byb21wdCc6XG4gICAgICByZXR1cm4gY29uZmlnLnByb21wdFxuICAgIGNhc2UgJ2FnZW50JzpcbiAgICAgIHJldHVybiBjb25maWcucHJvbXB0XG4gICAgY2FzZSAnaHR0cCc6XG4gICAgICByZXR1cm4gY29uZmlnLnVybFxuICB9XG59XG4iLCAiLyoqXG4gKiBIb29rc0NvbmZpZ01lbnUgaXMgYSByZWFkLW9ubHkgYnJvd3NlciBmb3IgY29uZmlndXJlZCBob29rcy5cbiAqXG4gKiBVc2VycyBjYW4gZHJpbGwgaW50byBlYWNoIGhvb2sgZXZlbnQsIHNlZSBjb25maWd1cmVkIG1hdGNoZXJzIGFuZCBob29rc1xuICogKG9mIGFueSB0eXBlOiBjb21tYW5kLCBwcm9tcHQsIGFnZW50LCBodHRwKSwgYW5kIHZpZXcgaW5kaXZpZHVhbCBob29rXG4gKiBkZXRhaWxzLiBUbyBhZGQgb3IgbW9kaWZ5IGhvb2tzLCB1c2VycyBzaG91bGQgZWRpdCBzZXR0aW5ncy5qc29uIGRpcmVjdGx5XG4gKiBvciBhc2sgQ2xhdWRlIOKAlCB0aGUgbWVudSBkaXJlY3RzIHRoZW0gdGhlcmUuXG4gKlxuICogVGhlIG1lbnUgaXMgcmVhZC1vbmx5IGJlY2F1c2UgdGhlIG9sZCBlZGl0aW5nIFVJIG9ubHkgc3VwcG9ydGVkXG4gKiBjb21tYW5kLXR5cGUgaG9va3MgYW5kIGR1cGxpY2F0aW5nIHRoZSBzZXR0aW5ncy5qc29uIGVkaXRpbmcgc3VyZmFjZVxuICogaW4tbWVudSBmb3IgYWxsIGZvdXIgdHlwZXMgd291bGQgYmUgYSBtYWludGVuYW5jZSBidXJkZW4uXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEhvb2tFdmVudCB9IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZUFwcFN0YXRlU3RvcmUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyB1c2VTZXR0aW5nc0NoYW5nZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVNldHRpbmdzQ2hhbmdlLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQge1xuICBnZXRIb29rRXZlbnRNZXRhZGF0YSxcbiAgZ2V0SG9va3NGb3JNYXRjaGVyLFxuICBnZXRNYXRjaGVyTWV0YWRhdGEsXG4gIGdldFNvcnRlZE1hdGNoZXJzRm9yRXZlbnQsXG4gIGdyb3VwSG9va3NCeUV2ZW50QW5kTWF0Y2hlcixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaG9va3MvaG9va3NDb25maWdNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUgeyBJbmRpdmlkdWFsSG9va0NvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzL2hvb2tzU2V0dGluZ3MuanMnXG5pbXBvcnQge1xuICBnZXRTZXR0aW5nc19ERVBSRUNBVEVELFxuICBnZXRTZXR0aW5nc0ZvclNvdXJjZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgU2VsZWN0RXZlbnRNb2RlIH0gZnJvbSAnLi9TZWxlY3RFdmVudE1vZGUuanMnXG5pbXBvcnQgeyBTZWxlY3RIb29rTW9kZSB9IGZyb20gJy4vU2VsZWN0SG9va01vZGUuanMnXG5pbXBvcnQgeyBTZWxlY3RNYXRjaGVyTW9kZSB9IGZyb20gJy4vU2VsZWN0TWF0Y2hlck1vZGUuanMnXG5pbXBvcnQgeyBWaWV3SG9va01vZGUgfSBmcm9tICcuL1ZpZXdIb29rTW9kZS5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9vbE5hbWVzOiBzdHJpbmdbXVxuICBvbkV4aXQ6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufVxuXG50eXBlIE1vZGVTdGF0ZSA9XG4gIHwgeyBtb2RlOiAnc2VsZWN0LWV2ZW50JyB9XG4gIHwgeyBtb2RlOiAnc2VsZWN0LW1hdGNoZXInOyBldmVudDogSG9va0V2ZW50IH1cbiAgfCB7IG1vZGU6ICdzZWxlY3QtaG9vayc7IGV2ZW50OiBIb29rRXZlbnQ7IG1hdGNoZXI6IHN0cmluZyB9XG4gIHwgeyBtb2RlOiAndmlldy1ob29rJzsgZXZlbnQ6IEhvb2tFdmVudDsgaG9vazogSW5kaXZpZHVhbEhvb2tDb25maWcgfVxuXG5leHBvcnQgZnVuY3Rpb24gSG9va3NDb25maWdNZW51KHsgdG9vbE5hbWVzLCBvbkV4aXQgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbbW9kZVN0YXRlLCBzZXRNb2RlU3RhdGVdID0gdXNlU3RhdGU8TW9kZVN0YXRlPih7XG4gICAgbW9kZTogJ3NlbGVjdC1ldmVudCcsXG4gIH0pXG4gIC8vIENhY2hlIHdoZXRoZXIgaG9va3MgYXJlIGRpc2FibGVkIGJ5IHBvbGljeSBzZXR0aW5ncy5cbiAgLy8gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoKSBpcyBleHBlbnNpdmUgKGZpbGUgcmVhZCArIEpTT04gcGFyc2UgKyB2YWxpZGF0aW9uKSxcbiAgLy8gc28gd2UgY29tcHV0ZSBpdCBvbmNlIG9uIG1vdW50IGFuZCBvbmx5IHJlLWNvbXB1dGUgd2hlbiBwb2xpY3kgc2V0dGluZ3MgY2hhbmdlLlxuICAvLyBTaG9ydC1jaXJjdWl0IGV2YWx1YXRpb24gZW5zdXJlcyB3ZSBza2lwIHRoZSBleHBlbnNpdmUgY2hlY2sgd2hlbiBob29rcyBhcmVuJ3QgZGlzYWJsZWQuXG4gIGNvbnN0IFtkaXNhYmxlZEJ5UG9saWN5LCBzZXREaXNhYmxlZEJ5UG9saWN5XSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICAgIGNvbnN0IGhvb2tzRGlzYWJsZWQgPSBzZXR0aW5ncz8uZGlzYWJsZUFsbEhvb2tzID09PSB0cnVlXG4gICAgcmV0dXJuIChcbiAgICAgIGhvb2tzRGlzYWJsZWQgJiZcbiAgICAgIGdldFNldHRpbmdzRm9yU291cmNlKCdwb2xpY3lTZXR0aW5ncycpPy5kaXNhYmxlQWxsSG9va3MgPT09IHRydWVcbiAgICApXG4gIH0pXG5cbiAgLy8gQ2hlY2sgaWYgaG9va3MgYXJlIHJlc3RyaWN0ZWQgdG8gbWFuYWdlZC1vbmx5IGJ5IHBvbGljeVxuICBjb25zdCBbcmVzdHJpY3RlZEJ5UG9saWN5LCBzZXRSZXN0cmljdGVkQnlQb2xpY3ldID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncG9saWN5U2V0dGluZ3MnKT8uYWxsb3dNYW5hZ2VkSG9va3NPbmx5ID09PSB0cnVlXG4gICAgKVxuICB9KVxuXG4gIC8vIFVwZGF0ZSBjYWNoZWQgdmFsdWVzIHdoZW4gcG9saWN5IHNldHRpbmdzIGNoYW5nZVxuICB1c2VTZXR0aW5nc0NoYW5nZShzb3VyY2UgPT4ge1xuICAgIGlmIChzb3VyY2UgPT09ICdwb2xpY3lTZXR0aW5ncycpIHtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gICAgICBjb25zdCBob29rc0Rpc2FibGVkID0gc2V0dGluZ3M/LmRpc2FibGVBbGxIb29rcyA9PT0gdHJ1ZVxuICAgICAgc2V0RGlzYWJsZWRCeVBvbGljeShcbiAgICAgICAgaG9va3NEaXNhYmxlZCAmJlxuICAgICAgICAgIGdldFNldHRpbmdzRm9yU291cmNlKCdwb2xpY3lTZXR0aW5ncycpPy5kaXNhYmxlQWxsSG9va3MgPT09IHRydWUsXG4gICAgICApXG4gICAgICBzZXRSZXN0cmljdGVkQnlQb2xpY3koXG4gICAgICAgIGdldFNldHRpbmdzRm9yU291cmNlKCdwb2xpY3lTZXR0aW5ncycpPy5hbGxvd01hbmFnZWRIb29rc09ubHkgPT09IHRydWUsXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIC8vIEV4dHJhY3QgY29tbW9ubHkgdXNlZCB2YWx1ZXMgZnJvbSBtb2RlU3RhdGUgZm9yIGNvbnZlbmllbmNlXG4gIGNvbnN0IG1vZGUgPSBtb2RlU3RhdGUubW9kZVxuICBjb25zdCBzZWxlY3RlZEV2ZW50ID0gJ2V2ZW50JyBpbiBtb2RlU3RhdGUgPyBtb2RlU3RhdGUuZXZlbnQgOiAnUHJlVG9vbFVzZSdcbiAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVyID0gJ21hdGNoZXInIGluIG1vZGVTdGF0ZSA/IG1vZGVTdGF0ZS5tYXRjaGVyIDogbnVsbFxuXG4gIGNvbnN0IG1jcCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3ApXG4gIGNvbnN0IGFwcFN0YXRlU3RvcmUgPSB1c2VBcHBTdGF0ZVN0b3JlKClcbiAgY29uc3QgY29tYmluZWRUb29sTmFtZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IFsuLi50b29sTmFtZXMsIC4uLm1jcC50b29scy5tYXAodG9vbCA9PiB0b29sLm5hbWUpXSxcbiAgICBbdG9vbE5hbWVzLCBtY3AudG9vbHNdLFxuICApXG5cbiAgY29uc3QgaG9va3NCeUV2ZW50QW5kTWF0Y2hlciA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGdyb3VwSG9va3NCeUV2ZW50QW5kTWF0Y2hlcihhcHBTdGF0ZVN0b3JlLmdldFN0YXRlKCksIGNvbWJpbmVkVG9vbE5hbWVzKSxcbiAgICBbY29tYmluZWRUb29sTmFtZXMsIGFwcFN0YXRlU3RvcmVdLFxuICApXG5cbiAgY29uc3Qgc29ydGVkTWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRTb3J0ZWRNYXRjaGVyc0ZvckV2ZW50KGhvb2tzQnlFdmVudEFuZE1hdGNoZXIsIHNlbGVjdGVkRXZlbnQpLFxuICAgIFtob29rc0J5RXZlbnRBbmRNYXRjaGVyLCBzZWxlY3RlZEV2ZW50XSxcbiAgKVxuXG4gIGNvbnN0IGhvb2tzRm9yU2VsZWN0ZWRNYXRjaGVyID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0SG9va3NGb3JNYXRjaGVyKFxuICAgICAgICBob29rc0J5RXZlbnRBbmRNYXRjaGVyLFxuICAgICAgICBzZWxlY3RlZEV2ZW50LFxuICAgICAgICBzZWxlY3RlZE1hdGNoZXIsXG4gICAgICApLFxuICAgIFtob29rc0J5RXZlbnRBbmRNYXRjaGVyLCBzZWxlY3RlZEV2ZW50LCBzZWxlY3RlZE1hdGNoZXJdLFxuICApXG5cbiAgLy8gSGFuZGxlciBmb3IgZXhpdGluZyB0aGUgZGlhbG9nXG4gIGNvbnN0IGhhbmRsZUV4aXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25FeGl0KCdIb29rcyBkaWFsb2cgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICB9LCBbb25FeGl0XSlcblxuICAvLyBFc2NhcGUgaGFuZGxpbmcgZm9yIHNlbGVjdC1ldmVudCBtb2RlIC0gZXhpdCB0aGUgbWVudVxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlRXhpdCwge1xuICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgIGlzQWN0aXZlOiBtb2RlID09PSAnc2VsZWN0LWV2ZW50JyxcbiAgfSlcblxuICAvLyBFc2NhcGUgaGFuZGxpbmcgZm9yIHNlbGVjdC1tYXRjaGVyIG1vZGUgLSBnbyB0byBzZWxlY3QtZXZlbnRcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0TW9kZVN0YXRlKHsgbW9kZTogJ3NlbGVjdC1ldmVudCcgfSlcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgICAgaXNBY3RpdmU6IG1vZGUgPT09ICdzZWxlY3QtbWF0Y2hlcicsXG4gICAgfSxcbiAgKVxuXG4gIC8vIEVzY2FwZSBoYW5kbGluZyBmb3Igc2VsZWN0LWhvb2sgbW9kZSAtIGdvIHRvIHNlbGVjdC1tYXRjaGVyIG9yIHNlbGVjdC1ldmVudFxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoJ2V2ZW50JyBpbiBtb2RlU3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdldE1hdGNoZXJNZXRhZGF0YShtb2RlU3RhdGUuZXZlbnQsIGNvbWJpbmVkVG9vbE5hbWVzKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgIHNldE1vZGVTdGF0ZSh7IG1vZGU6ICdzZWxlY3QtbWF0Y2hlcicsIGV2ZW50OiBtb2RlU3RhdGUuZXZlbnQgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRNb2RlU3RhdGUoeyBtb2RlOiAnc2VsZWN0LWV2ZW50JyB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOiBtb2RlID09PSAnc2VsZWN0LWhvb2snLFxuICAgIH0sXG4gIClcblxuICAvLyBFc2NhcGUgaGFuZGxpbmcgZm9yIHZpZXctaG9vayBtb2RlIC0gZ28gdG8gc2VsZWN0LWhvb2tcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKG1vZGVTdGF0ZS5tb2RlID09PSAndmlldy1ob29rJykge1xuICAgICAgICBjb25zdCB7IGV2ZW50LCBob29rIH0gPSBtb2RlU3RhdGVcbiAgICAgICAgc2V0TW9kZVN0YXRlKHtcbiAgICAgICAgICBtb2RlOiAnc2VsZWN0LWhvb2snLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG1hdGNoZXI6IGhvb2subWF0Y2hlciB8fCAnJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgICAgaXNBY3RpdmU6IG1vZGUgPT09ICd2aWV3LWhvb2snLFxuICAgIH0sXG4gIClcblxuICBjb25zdCBob29rRXZlbnRNZXRhZGF0YSA9IGdldEhvb2tFdmVudE1ldGFkYXRhKGNvbWJpbmVkVG9vbE5hbWVzKVxuXG4gIC8vIENoZWNrIGlmIGhvb2tzIGFyZSBkaXNhYmxlZFxuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICBjb25zdCBob29rc0Rpc2FibGVkID0gc2V0dGluZ3M/LmRpc2FibGVBbGxIb29rcyA9PT0gdHJ1ZVxuXG4gIC8vIENvdW50IGhvb2tzIHBlciBldmVudCBmb3IgdGhlIGV2ZW50LXNlbGVjdGlvbiB2aWV3LCBhbmQgdGhlIHRvdGFsLlxuICBjb25zdCB7IGhvb2tzQnlFdmVudCwgdG90YWxIb29rc0NvdW50IH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBieUV2ZW50OiBQYXJ0aWFsPFJlY29yZDxIb29rRXZlbnQsIG51bWJlcj4+ID0ge31cbiAgICBsZXQgdG90YWwgPSAwXG4gICAgZm9yIChjb25zdCBbZXZlbnQsIG1hdGNoZXJzXSBvZiBPYmplY3QuZW50cmllcyhob29rc0J5RXZlbnRBbmRNYXRjaGVyKSkge1xuICAgICAgY29uc3QgZXZlbnRDb3VudCA9IE9iamVjdC52YWx1ZXMobWF0Y2hlcnMpLnJlZHVjZShcbiAgICAgICAgKHN1bSwgaG9va3MpID0+IHN1bSArIGhvb2tzLmxlbmd0aCxcbiAgICAgICAgMCxcbiAgICAgIClcbiAgICAgIGJ5RXZlbnRbZXZlbnQgYXMgSG9va0V2ZW50XSA9IGV2ZW50Q291bnRcbiAgICAgIHRvdGFsICs9IGV2ZW50Q291bnRcbiAgICB9XG4gICAgcmV0dXJuIHsgaG9va3NCeUV2ZW50OiBieUV2ZW50LCB0b3RhbEhvb2tzQ291bnQ6IHRvdGFsIH1cbiAgfSwgW2hvb2tzQnlFdmVudEFuZE1hdGNoZXJdKVxuXG4gIC8vIElmIGhvb2tzIGFyZSBkaXNhYmxlZCwgc2hvdyBhbiBpbmZvcm1hdGlvbmFsIHNjcmVlbi5cbiAgLy8gVGhlIG1lbnUgaXMgcmVhZC1vbmx5LCBzbyB3ZSBkb24ndCBvZmZlciBhIHJlLWVuYWJsZSBidXR0b24g4oCUXG4gIC8vIHVzZXJzIGNhbiBlZGl0IHNldHRpbmdzLmpzb24gb3IgYXNrIENsYXVkZSBpbnN0ZWFkLlxuICBpZiAoaG9va3NEaXNhYmxlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPVwiSG9vayBDb25maWd1cmF0aW9uIC0gRGlzYWJsZWRcIlxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlRXhpdH1cbiAgICAgICAgaW5wdXRHdWlkZT17KCkgPT4gPFRleHQ+RXNjIHRvIGNsb3NlPC9UZXh0Pn1cbiAgICAgID5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBBbGwgaG9va3MgYXJlIGN1cnJlbnRseSA8VGV4dCBib2xkPmRpc2FibGVkPC9UZXh0PlxuICAgICAgICAgICAgICB7ZGlzYWJsZWRCeVBvbGljeSAmJiAnIGJ5IGEgbWFuYWdlZCBzZXR0aW5ncyBmaWxlJ30uIFlvdSBoYXZleycgJ31cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD57dG90YWxIb29rc0NvdW50fTwvVGV4dD4gY29uZmlndXJlZHsnICd9XG4gICAgICAgICAgICAgIHtwbHVyYWwodG90YWxIb29rc0NvdW50LCAnaG9vaycpfSB0aGF0eycgJ31cbiAgICAgICAgICAgICAge3BsdXJhbCh0b3RhbEhvb2tzQ291bnQsICdpcycsICdhcmUnKX0gbm90IHJ1bm5pbmcuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPldoZW4gaG9va3MgYXJlIGRpc2FibGVkOjwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+wrcgTm8gaG9vayBjb21tYW5kcyB3aWxsIGV4ZWN1dGU8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7CtyBTdGF0dXNMaW5lIHdpbGwgbm90IGJlIGRpc3BsYXllZDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICDCtyBUb29sIG9wZXJhdGlvbnMgd2lsbCBwcm9jZWVkIHdpdGhvdXQgaG9vayB2YWxpZGF0aW9uXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgeyFkaXNhYmxlZEJ5UG9saWN5ICYmIChcbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBUbyByZS1lbmFibGUgaG9va3MsIHJlbW92ZSAmcXVvdDtkaXNhYmxlQWxsSG9va3MmcXVvdDsgZnJvbVxuICAgICAgICAgICAgICBzZXR0aW5ncy5qc29uIG9yIGFzayBDbGF1ZGUuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICBzd2l0Y2ggKG1vZGVTdGF0ZS5tb2RlKSB7XG4gICAgY2FzZSAnc2VsZWN0LWV2ZW50JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RFdmVudE1vZGVcbiAgICAgICAgICBob29rRXZlbnRNZXRhZGF0YT17aG9va0V2ZW50TWV0YWRhdGF9XG4gICAgICAgICAgaG9va3NCeUV2ZW50PXtob29rc0J5RXZlbnR9XG4gICAgICAgICAgdG90YWxIb29rc0NvdW50PXt0b3RhbEhvb2tzQ291bnR9XG4gICAgICAgICAgcmVzdHJpY3RlZEJ5UG9saWN5PXtyZXN0cmljdGVkQnlQb2xpY3l9XG4gICAgICAgICAgb25TZWxlY3RFdmVudD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGdldE1hdGNoZXJNZXRhZGF0YShldmVudCwgY29tYmluZWRUb29sTmFtZXMpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2V0TW9kZVN0YXRlKHsgbW9kZTogJ3NlbGVjdC1tYXRjaGVyJywgZXZlbnQgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldE1vZGVTdGF0ZSh7IG1vZGU6ICdzZWxlY3QtaG9vaycsIGV2ZW50LCBtYXRjaGVyOiAnJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUV4aXR9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAnc2VsZWN0LW1hdGNoZXInOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdE1hdGNoZXJNb2RlXG4gICAgICAgICAgc2VsZWN0ZWRFdmVudD17bW9kZVN0YXRlLmV2ZW50fVxuICAgICAgICAgIG1hdGNoZXJzRm9yU2VsZWN0ZWRFdmVudD17c29ydGVkTWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50fVxuICAgICAgICAgIGhvb2tzQnlFdmVudEFuZE1hdGNoZXI9e2hvb2tzQnlFdmVudEFuZE1hdGNoZXJ9XG4gICAgICAgICAgZXZlbnREZXNjcmlwdGlvbj17aG9va0V2ZW50TWV0YWRhdGFbbW9kZVN0YXRlLmV2ZW50XS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvblNlbGVjdD17bWF0Y2hlciA9PiB7XG4gICAgICAgICAgICBzZXRNb2RlU3RhdGUoe1xuICAgICAgICAgICAgICBtb2RlOiAnc2VsZWN0LWhvb2snLFxuICAgICAgICAgICAgICBldmVudDogbW9kZVN0YXRlLmV2ZW50LFxuICAgICAgICAgICAgICBtYXRjaGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRNb2RlU3RhdGUoeyBtb2RlOiAnc2VsZWN0LWV2ZW50JyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAnc2VsZWN0LWhvb2snOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdEhvb2tNb2RlXG4gICAgICAgICAgc2VsZWN0ZWRFdmVudD17bW9kZVN0YXRlLmV2ZW50fVxuICAgICAgICAgIHNlbGVjdGVkTWF0Y2hlcj17bW9kZVN0YXRlLm1hdGNoZXJ9XG4gICAgICAgICAgaG9va3NGb3JTZWxlY3RlZE1hdGNoZXI9e2hvb2tzRm9yU2VsZWN0ZWRNYXRjaGVyfVxuICAgICAgICAgIGhvb2tFdmVudE1ldGFkYXRhPXtob29rRXZlbnRNZXRhZGF0YVttb2RlU3RhdGUuZXZlbnRdfVxuICAgICAgICAgIG9uU2VsZWN0PXtob29rID0+IHtcbiAgICAgICAgICAgIHNldE1vZGVTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6ICd2aWV3LWhvb2snLFxuICAgICAgICAgICAgICBldmVudDogbW9kZVN0YXRlLmV2ZW50LFxuICAgICAgICAgICAgICBob29rLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyBHbyBiYWNrIHRvIG1hdGNoZXIgc2VsZWN0aW9uIG9yIGV2ZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBnZXRNYXRjaGVyTWV0YWRhdGEobW9kZVN0YXRlLmV2ZW50LCBjb21iaW5lZFRvb2xOYW1lcykgIT09XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldE1vZGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kZTogJ3NlbGVjdC1tYXRjaGVyJyxcbiAgICAgICAgICAgICAgICBldmVudDogbW9kZVN0YXRlLmV2ZW50LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0TW9kZVN0YXRlKHsgbW9kZTogJ3NlbGVjdC1ldmVudCcgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIGNhc2UgJ3ZpZXctaG9vayc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld0hvb2tNb2RlXG4gICAgICAgICAgc2VsZWN0ZWRIb29rPXttb2RlU3RhdGUuaG9va31cbiAgICAgICAgICBldmVudFN1cHBvcnRzTWF0Y2hlcj17XG4gICAgICAgICAgICBnZXRNYXRjaGVyTWV0YWRhdGEobW9kZVN0YXRlLmV2ZW50LCBjb21iaW5lZFRvb2xOYW1lcykgIT09IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBldmVudCwgaG9vayB9ID0gbW9kZVN0YXRlXG4gICAgICAgICAgICBzZXRNb2RlU3RhdGUoe1xuICAgICAgICAgICAgICBtb2RlOiAnc2VsZWN0LWhvb2snLFxuICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgbWF0Y2hlcjogaG9vay5tYXRjaGVyIHx8ICcnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIb29rc0NvbmZpZ01lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvb2tzL0hvb2tzQ29uZmlnTWVudS5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0VG9vbHMgfSBmcm9tICcuLi8uLi90b29scy5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbEpTWENvbW1hbmRDYWxsID0gYXN5bmMgKG9uRG9uZSwgY29udGV4dCkgPT4ge1xuICBsb2dFdmVudCgndGVuZ3VfaG9va3NfY29tbWFuZCcsIHt9KVxuICBjb25zdCBhcHBTdGF0ZSA9IGNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuICBjb25zdCBwZXJtaXNzaW9uQ29udGV4dCA9IGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dFxuICBjb25zdCB0b29sTmFtZXMgPSBnZXRUb29scyhwZXJtaXNzaW9uQ29udGV4dCkubWFwKHRvb2wgPT4gdG9vbC5uYW1lKVxuICByZXR1cm4gPEhvb2tzQ29uZmlnTWVudSB0b29sTmFtZXM9e3Rvb2xOYW1lc30gb25FeGl0PXtvbkRvbmV9IC8+XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2UU8sU0FBUyw0QkFDZCxVQUNBLFdBQzJEO0FBQzNELFFBQU0sVUFBcUU7QUFBQSxJQUN6RSxZQUFZLENBQUM7QUFBQSxJQUNiLGFBQWEsQ0FBQztBQUFBLElBQ2Qsb0JBQW9CLENBQUM7QUFBQSxJQUNyQixrQkFBa0IsQ0FBQztBQUFBLElBQ25CLGNBQWMsQ0FBQztBQUFBLElBQ2Ysa0JBQWtCLENBQUM7QUFBQSxJQUNuQixjQUFjLENBQUM7QUFBQSxJQUNmLFlBQVksQ0FBQztBQUFBLElBQ2IsTUFBTSxDQUFDO0FBQUEsSUFDUCxhQUFhLENBQUM7QUFB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QUF1QixDQUFDLENBQUM7QUFDbEMsWUFBTUMsV0FBV0YsUUFBUUcsWUFBWTtBQUNyQyxZQUFNQyxvQkFBb0JGLFNBQVNHO0FBQ25DLFlBQU1DLFlBQVlDLFNBQVNILGlCQUFpQixFQUFFSSxJQUFJQyxVQUFRQSxLQUFLQyxJQUFJO0FBQ25FLGFBQU8sOEJBQUMsbUJBQWdCLFdBQXNCLFFBQVFYLFFBQU87SUFDL0Q7OzsiLAogICJuYW1lcyI6IFsiU2VsZWN0RXZlbnRNb2RlIiwgInQwIiwgIiQiLCAiX2MiLCAiaG9va0V2ZW50TWV0YWRhdGEiLCAiaG9va3NCeUV2ZW50IiwgInRvdGFsSG9va3NDb3VudCIsICJyZXN0cmljdGVkQnlQb2xpY3kiLCAib25TZWxlY3RFdmVudCIsICJvbkNhbmNlbCIsICJ0MSIsICJwbHVyYWwiLCAic3VidGl0bGUiLCAidDIiLCAiZmlndXJlcyIsICJpbmZvIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAidDQiLCAidmFsdWUiLCAidDUiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidDYiLCAibWFwIiwgInQ3IiwgIm5hbWUiLCAibWV0YWRhdGEiLCAiY291bnQiLCAibGFiZWwiLCAiZGVzY3JpcHRpb24iLCAic3VtbWFyeSIsICJ0OCIsICJ0OSIsICJTZWxlY3RIb29rTW9kZSIsICJ0MCIsICIkIiwgIl9jIiwgInNlbGVjdGVkRXZlbnQiLCAic2VsZWN0ZWRNYXRjaGVyIiwgImhvb2tzRm9yU2VsZWN0ZWRNYXRjaGVyIiwgImhvb2tFdmVudE1ldGFkYXRhIiwgIm9uU2VsZWN0IiwgIm9uQ2FuY2VsIiwgInRpdGxlIiwgIm1hdGNoZXJNZXRhZGF0YSIsICJ1bmRlZmluZWQiLCAibGVuZ3RoIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAidDIiLCAiZGVzY3JpcHRpb24iLCAiX3RlbXAiLCAibWFwIiwgIl90ZW1wMiIsICJ0MyIsICJ2YWx1ZSIsICJpbmRleF8wIiwgInBhcnNlSW50IiwgImhvb2tfMCIsICJpbmRleCIsICJob29rIiwgInQ0IiwgInQ1IiwgImxhYmVsIiwgImNvbmZpZyIsICJ0eXBlIiwgImdldEhvb2tEaXNwbGF5VGV4dCIsICJ0b1N0cmluZyIsICJzb3VyY2UiLCAicGx1Z2luTmFtZSIsICJob29rU291cmNlSGVhZGVyRGlzcGxheVN0cmluZyIsICJTZWxlY3RNYXRjaGVyTW9kZSIsICJ0MCIsICIkIiwgIl9jIiwgInNlbGVjdGVkRXZlbnQiLCAibWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50IiwgImhvb2tzQnlFdmVudEFuZE1hdGNoZXIiLCAiZXZlbnREZXNjcmlwdGlvbiIsICJvblNlbGVjdCIsICJvbkNhbmNlbCIsICJ0MSIsICJ0MiIsICJtYXRjaGVyIiwgImhvb2tzIiwgInNvdXJjZXMiLCAiQXJyYXkiLCAiZnJvbSIsICJTZXQiLCAibWFwIiwgIl90ZW1wIiwgImhvb2tDb3VudCIsICJsZW5ndGgiLCAibWF0Y2hlcnNXaXRoU291cmNlcyIsICJ0MyIsICJTeW1ib2wiLCAiZm9yIiwgInQ0IiwgIl90ZW1wMiIsICJfdGVtcDMiLCAidmFsdWUiLCAidDUiLCAidDYiLCAiaXRlbSIsICJzb3VyY2VUZXh0IiwgImhvb2tTb3VyY2VJbmxpbmVEaXNwbGF5U3RyaW5nIiwgImpvaW4iLCAibWF0Y2hlckxhYmVsIiwgImxhYmVsIiwgImRlc2NyaXB0aW9uIiwgInBsdXJhbCIsICJoIiwgInNvdXJjZSIsICJWaWV3SG9va01vZGUiLCAidDAiLCAiJCIsICJfYyIsICJzZWxlY3RlZEhvb2siLCAiZXZlbnRTdXBwb3J0c01hdGNoZXIiLCAib25DYW5jZWwiLCAidDEiLCAiZXZlbnQiLCAidDIiLCAibWF0Y2hlciIsICJ0MyIsICJjb25maWciLCAidHlwZSIsICJ0NCIsICJzb3VyY2UiLCAiaG9va1NvdXJjZURlc2NyaXB0aW9uRGlzcGxheVN0cmluZyIsICJ0NSIsICJ0NiIsICJwbHVnaW5OYW1lIiwgInQ3IiwgInQ4IiwgImdldENvbnRlbnRGaWVsZExhYmVsIiwgInQ5IiwgInQxMCIsICJnZXRDb250ZW50RmllbGRWYWx1ZSIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJzdGF0dXNNZXNzYWdlIiwgInQxNCIsICJTeW1ib2wiLCAiZm9yIiwgInQxNSIsICJ0MTYiLCAiX3RlbXAiLCAiY29tbWFuZCIsICJwcm9tcHQiLCAidXJsIiwgIkhvb2tzQ29uZmlnTWVudSIsICJ0MCIsICIkIiwgIl9jIiwgInRvb2xOYW1lcyIsICJvbkV4aXQiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJtb2RlIiwgIm1vZGVTdGF0ZSIsICJzZXRNb2RlU3RhdGUiLCAidXNlU3RhdGUiLCAiZGlzYWJsZWRCeVBvbGljeSIsICJzZXREaXNhYmxlZEJ5UG9saWN5IiwgIl90ZW1wIiwgInJlc3RyaWN0ZWRCeVBvbGljeSIsICJzZXRSZXN0cmljdGVkQnlQb2xpY3kiLCAiX3RlbXAyIiwgInQyIiwgInNvdXJjZSIsICJzZXR0aW5nc18wIiwgImdldFNldHRpbmdzX0RFUFJFQ0FURUQiLCAiaG9va3NEaXNhYmxlZF8wIiwgInNldHRpbmdzIiwgImRpc2FibGVBbGxIb29rcyIsICJnZXRTZXR0aW5nc0ZvclNvdXJjZSIsICJhbGxvd01hbmFnZWRIb29rc09ubHkiLCAidXNlU2V0dGluZ3NDaGFuZ2UiLCAic2VsZWN0ZWRFdmVudCIsICJldmVudCIsICJzZWxlY3RlZE1hdGNoZXIiLCAibWF0Y2hlciIsICJtY3AiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAzIiwgImFwcFN0YXRlU3RvcmUiLCAidXNlQXBwU3RhdGVTdG9yZSIsICJ0MyIsICJ0b29scyIsICJtYXAiLCAiX3RlbXA0IiwgImNvbWJpbmVkVG9vbE5hbWVzIiwgInQ0IiwgImdyb3VwSG9va3NCeUV2ZW50QW5kTWF0Y2hlciIsICJnZXRTdGF0ZSIsICJob29rc0J5RXZlbnRBbmRNYXRjaGVyIiwgInQ1IiwgImdldFNvcnRlZE1hdGNoZXJzRm9yRXZlbnQiLCAic29ydGVkTWF0Y2hlcnNGb3JTZWxlY3RlZEV2ZW50IiwgInQ2IiwgImdldEhvb2tzRm9yTWF0Y2hlciIsICJob29rc0ZvclNlbGVjdGVkTWF0Y2hlciIsICJ0NyIsICJkaXNwbGF5IiwgImhhbmRsZUV4aXQiLCAidDgiLCAidDkiLCAiY29udGV4dCIsICJpc0FjdGl2ZSIsICJ1c2VLZXliaW5kaW5nIiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJnZXRNYXRjaGVyTWV0YWRhdGEiLCAidW5kZWZpbmVkIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgImhvb2siLCAidDE3IiwgInQxOCIsICJ0MTkiLCAiZ2V0SG9va0V2ZW50TWV0YWRhdGEiLCAiaG9va0V2ZW50TWV0YWRhdGEiLCAic2V0dGluZ3NfMSIsICJob29rc0Rpc2FibGVkXzEiLCAidDIwIiwgImJ5RXZlbnQiLCAidG90YWwiLCAiZXZlbnRfMCIsICJtYXRjaGVycyIsICJPYmplY3QiLCAiZW50cmllcyIsICJldmVudENvdW50IiwgInZhbHVlcyIsICJyZWR1Y2UiLCAiX3RlbXA1IiwgImhvb2tzQnlFdmVudCIsICJ0b3RhbEhvb2tzQ291bnQiLCAiaG9va3NEaXNhYmxlZCIsICJ0MjEiLCAidDIyIiwgInQyMyIsICJ0MjQiLCAicGx1cmFsIiwgInQyNSIsICJ0MjYiLCAidDI3IiwgInQyOCIsICJ0MjkiLCAidDMwIiwgInQzMSIsICJ0MzIiLCAidDMzIiwgInQzNCIsICJfdGVtcDYiLCAiZXZlbnRfMiIsICJkZXNjcmlwdGlvbiIsICJob29rXzEiLCAiZXZlbnRfMSIsICJob29rXzAiLCAic3VtIiwgImhvb2tzIiwgImxlbmd0aCIsICJ0b29sIiwgIm5hbWUiLCAicyIsICJjYWxsIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgImxvZ0V2ZW50IiwgImFwcFN0YXRlIiwgImdldEFwcFN0YXRlIiwgInBlcm1pc3Npb25Db250ZXh0IiwgInRvb2xQZXJtaXNzaW9uQ29udGV4dCIsICJ0b29sTmFtZXMiLCAiZ2V0VG9vbHMiLCAibWFwIiwgInRvb2wiLCAibmFtZSJdCn0K
