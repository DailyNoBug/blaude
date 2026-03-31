#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  UnavailablePanel,
  init_UnavailablePanel
} from "./chunk-YGTPFJTV.mjs";
import {
  init_mappers,
  toInternalMessages
} from "./chunk-5W6WSU52.mjs";
import {
  ASK_USER_QUESTION_TOOL_NAME,
  DreamTask,
  EMPTY_LOOKUPS,
  EXIT_PLAN_MODE_V2_TOOL_NAME,
  InProcessTeammateTask,
  LocalAgentTask,
  LocalShellTask,
  LocalWorkflowTask_exports,
  Message,
  MonitorMcpTask_exports,
  RemoteAgentTask,
  Select,
  UserPlanMessage,
  extractTag,
  getRainbowColor,
  getRemoteTaskSessionUrl,
  getTaskOutputPath,
  getTools,
  init_AppState,
  init_DreamTask,
  init_InProcessTeammateTask,
  init_LocalAgentTask,
  init_LocalShellTask,
  init_LocalWorkflowTask,
  init_Message,
  init_MonitorMcpTask,
  init_RemoteAgentTask,
  init_Task,
  init_UserPlanMessage,
  init_collapseReadSearch,
  init_constants3 as init_constants2,
  init_coordinatorMode,
  init_diskOutput,
  init_ink as init_ink2,
  init_messages2 as init_messages,
  init_overlayContext,
  init_prompt9 as init_prompt,
  init_select,
  init_teleport,
  init_thinking,
  init_tools2 as init_tools,
  init_types3 as init_types,
  init_ultraplan,
  init_useElapsedTime,
  init_useSettings,
  isBackgroundTask,
  isCoordinatorMode,
  isTerminalTaskStatus,
  normalizeMessages,
  stopUltraplan,
  summarizeRecentActivities,
  teleportResumeCodeSession,
  toInkColor,
  useAppState,
  useElapsedTime,
  useRegisterOverlay,
  useSetAppState,
  useSettings
} from "./chunk-OPLSBIOC.mjs";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_Dialog,
  init_KeyboardShortcutHint,
  init_useShortcutDisplay,
  useShortcutDisplay
} from "./chunk-SR5JKAMQ.mjs";
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybindings,
  useTerminalSize
} from "./chunk-2LTMY2QU.mjs";
import {
  findToolByName,
  getEmptyToolPermissionContext,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import {
  TEAM_LEAD_NAME,
  init_constants as init_constants3
} from "./chunk-27EOXKZU.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  useAnimationFrame,
  useTheme
} from "./chunk-IVRGECFY.mjs";
import {
  Suspense,
  createElement,
  init_react,
  react_default,
  use,
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  AGENT_TOOL_NAME,
  DIAMOND_FILLED,
  DIAMOND_OPEN,
  LEGACY_AGENT_TOOL_NAME,
  init_constants2 as init_constants,
  init_figures as init_figures2,
  init_stringUtils,
  plural
} from "./chunk-Z6CSO4BY.mjs";
import {
  count,
  init_array,
  intersperse
} from "./chunk-GC6TKYZ3.mjs";
import {
  formatDuration,
  formatFileSize,
  formatNumber,
  init_format,
  truncate,
  truncateToWidth
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_errors,
  init_fsOperations,
  tailFile
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/state/teammateViewHelpers.ts
function isLocalAgent(task) {
  return typeof task === "object" && task !== null && "type" in task && task.type === "local_agent";
}
function release(task) {
  return {
    ...task,
    retain: false,
    messages: void 0,
    diskLoaded: false,
    evictAfter: isTerminalTaskStatus(task.status) ? Date.now() + PANEL_GRACE_MS : void 0
  };
}
function enterTeammateView(taskId, setAppState) {
  logEvent("tengu_transcript_view_enter", {});
  setAppState((prev) => {
    const task = prev.tasks[taskId];
    const prevId = prev.viewingAgentTaskId;
    const prevTask = prevId !== void 0 ? prev.tasks[prevId] : void 0;
    const switching = prevId !== void 0 && prevId !== taskId && isLocalAgent(prevTask) && prevTask.retain;
    const needsRetain = isLocalAgent(task) && (!task.retain || task.evictAfter !== void 0);
    const needsView = prev.viewingAgentTaskId !== taskId || prev.viewSelectionMode !== "viewing-agent";
    if (!needsRetain && !needsView && !switching) return prev;
    let tasks = prev.tasks;
    if (switching || needsRetain) {
      tasks = { ...prev.tasks };
      if (switching) tasks[prevId] = release(prevTask);
      if (needsRetain) {
        tasks[taskId] = { ...task, retain: true, evictAfter: void 0 };
      }
    }
    return {
      ...prev,
      viewingAgentTaskId: taskId,
      viewSelectionMode: "viewing-agent",
      tasks
    };
  });
}
function exitTeammateView(setAppState) {
  logEvent("tengu_transcript_view_exit", {});
  setAppState((prev) => {
    const id = prev.viewingAgentTaskId;
    const cleared = {
      ...prev,
      viewingAgentTaskId: void 0,
      viewSelectionMode: "none"
    };
    if (id === void 0) {
      return prev.viewSelectionMode === "none" ? prev : cleared;
    }
    const task = prev.tasks[id];
    if (!isLocalAgent(task) || !task.retain) return cleared;
    return {
      ...cleared,
      tasks: { ...prev.tasks, [id]: release(task) }
    };
  });
}
function stopOrDismissAgent(taskId, setAppState) {
  setAppState((prev) => {
    const task = prev.tasks[taskId];
    if (!isLocalAgent(task)) return prev;
    if (task.status === "running") {
      task.abortController?.abort();
      return prev;
    }
    if (task.evictAfter === 0) return prev;
    const viewingThis = prev.viewingAgentTaskId === taskId;
    return {
      ...prev,
      tasks: {
        ...prev.tasks,
        [taskId]: { ...release(task), evictAfter: 0 }
      },
      ...viewingThis && {
        viewingAgentTaskId: void 0,
        viewSelectionMode: "none"
      }
    };
  });
}
var PANEL_GRACE_MS;
var init_teammateViewHelpers = __esm({
  "src/state/teammateViewHelpers.ts"() {
    init_analytics();
    init_Task();
    PANEL_GRACE_MS = 3e4;
  }
});

// src/components/tasks/renderToolActivity.tsx
function renderToolActivity(activity, tools, theme) {
  const tool = findToolByName(tools, activity.toolName);
  if (!tool) {
    return activity.toolName;
  }
  try {
    const parsed = tool.inputSchema.safeParse(activity.input);
    const parsedInput = parsed.success ? parsed.data : {};
    const userFacingName = tool.userFacingName(parsedInput);
    if (!userFacingName) {
      return activity.toolName;
    }
    const toolArgs = tool.renderToolUseMessage(parsedInput, {
      theme,
      verbose: false
    });
    if (toolArgs) {
      return /* @__PURE__ */ react_default.createElement(ThemedText, null, userFacingName, "(", toolArgs, ")");
    }
    return userFacingName;
  } catch {
    return activity.toolName;
  }
}
var init_renderToolActivity = __esm({
  "src/components/tasks/renderToolActivity.tsx"() {
    init_react();
    init_ink();
    init_Tool();
  }
});

// src/components/tasks/taskStatusUtils.tsx
function getTaskStatusIcon(status, options) {
  const {
    isIdle,
    awaitingApproval,
    hasError,
    shutdownRequested
  } = options ?? {};
  if (hasError) return figures_default.cross;
  if (awaitingApproval) return figures_default.questionMarkPrefix;
  if (shutdownRequested) return figures_default.warning;
  if (status === "running") {
    if (isIdle) return figures_default.ellipsis;
    return figures_default.play;
  }
  if (status === "completed") return figures_default.tick;
  if (status === "failed" || status === "killed") return figures_default.cross;
  return figures_default.bullet;
}
function getTaskStatusColor(status, options) {
  const {
    isIdle,
    awaitingApproval,
    hasError,
    shutdownRequested
  } = options ?? {};
  if (hasError) return "error";
  if (awaitingApproval) return "warning";
  if (shutdownRequested) return "warning";
  if (isIdle) return "background";
  if (status === "completed") return "success";
  if (status === "failed") return "error";
  if (status === "killed") return "warning";
  return "background";
}
function describeTeammateActivity(t) {
  if (t.shutdownRequested) return "stopping";
  if (t.awaitingPlanApproval) return "awaiting approval";
  if (t.isIdle) return "idle";
  return (t.progress?.recentActivities && summarizeRecentActivities(t.progress.recentActivities)) ?? t.progress?.lastActivity?.activityDescription ?? "working";
}
function shouldHideTasksFooter(tasks, showSpinnerTree) {
  if (!showSpinnerTree) return false;
  let hasVisibleTask = false;
  for (const t of Object.values(tasks)) {
    if (!isBackgroundTask(t) || false) {
      continue;
    }
    hasVisibleTask = true;
    if (t.type !== "in_process_teammate") return false;
  }
  return hasVisibleTask;
}
var init_taskStatusUtils = __esm({
  "src/components/tasks/taskStatusUtils.tsx"() {
    init_figures();
    init_LocalAgentTask();
    init_types();
    init_collapseReadSearch();
  }
});

// src/components/tasks/AsyncAgentDetailDialog.tsx
function AsyncAgentDetailDialog(t0) {
  const $ = c(54);
  const {
    agent,
    onDone,
    onKillAgent,
    onBack
  } = t0;
  const [theme] = useTheme();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getTools(getEmptyToolPermissionContext());
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const tools = t1;
  const elapsedTime = useElapsedTime(agent.startTime, agent.status === "running", 1e3, agent.totalPausedMs ?? 0);
  let t2;
  if ($[1] !== onDone) {
    t2 = {
      "confirm:yes": onDone
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      context: "Confirmation"
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  useKeybindings(t2, t3);
  let t4;
  if ($[4] !== agent.status || $[5] !== onBack || $[6] !== onDone || $[7] !== onKillAgent) {
    t4 = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        onDone();
      } else {
        if (e.key === "left" && onBack) {
          e.preventDefault();
          onBack();
        } else {
          if (e.key === "x" && agent.status === "running" && onKillAgent) {
            e.preventDefault();
            onKillAgent();
          }
        }
      }
    };
    $[4] = agent.status;
    $[5] = onBack;
    $[6] = onDone;
    $[7] = onKillAgent;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const handleKeyDown = t4;
  let t5;
  if ($[9] !== agent.prompt) {
    t5 = extractTag(agent.prompt, "plan");
    $[9] = agent.prompt;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const planContent = t5;
  const displayPrompt = agent.prompt.length > 300 ? agent.prompt.substring(0, 297) + "\u2026" : agent.prompt;
  const tokenCount = agent.result?.totalTokens ?? agent.progress?.tokenCount;
  const toolUseCount = agent.result?.totalToolUseCount ?? agent.progress?.toolUseCount;
  const t6 = agent.selectedAgent?.agentType ?? "agent";
  const t7 = agent.description || "Async agent";
  let t8;
  if ($[11] !== t6 || $[12] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t6, " \u203A", " ", t7);
    $[11] = t6;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  const title = t8;
  let t9;
  if ($[14] !== agent.status) {
    t9 = agent.status !== "running" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: getTaskStatusColor(agent.status) }, getTaskStatusIcon(agent.status), " ", agent.status === "completed" ? "Completed" : agent.status === "failed" ? "Failed" : "Stopped", " \xB7 ");
    $[14] = agent.status;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] !== tokenCount) {
    t10 = tokenCount !== void 0 && tokenCount > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " \xB7 ", formatNumber(tokenCount), " tokens");
    $[16] = tokenCount;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== toolUseCount) {
    t11 = toolUseCount !== void 0 && toolUseCount > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", "\xB7 ", toolUseCount, " ", toolUseCount === 1 ? "tool" : "tools");
    $[18] = toolUseCount;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  let t12;
  if ($[20] !== elapsedTime || $[21] !== t10 || $[22] !== t11) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, elapsedTime, t10, t11);
    $[20] = elapsedTime;
    $[21] = t10;
    $[22] = t11;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  let t13;
  if ($[24] !== t12 || $[25] !== t9) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t9, t12);
    $[24] = t12;
    $[25] = t9;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  const subtitle = t13;
  let t14;
  if ($[27] !== agent.status || $[28] !== onBack || $[29] !== onKillAgent) {
    t14 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, onBack && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2190", action: "go back" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc/Enter/Space", action: "close" }), agent.status === "running" && onKillAgent && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "x", action: "stop" }));
    $[27] = agent.status;
    $[28] = onBack;
    $[29] = onKillAgent;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  let t15;
  if ($[31] !== agent.progress || $[32] !== agent.status || $[33] !== theme) {
    t15 = agent.status === "running" && agent.progress?.recentActivities && agent.progress.recentActivities.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Progress"), agent.progress.recentActivities.map((activity, i) => /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: i < agent.progress.recentActivities.length - 1, wrap: "truncate-end" }, i === agent.progress.recentActivities.length - 1 ? "\u203A " : "  ", renderToolActivity(activity, tools, theme))));
    $[31] = agent.progress;
    $[32] = agent.status;
    $[33] = theme;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  let t16;
  if ($[35] !== displayPrompt || $[36] !== planContent) {
    t16 = planContent ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(UserPlanMessage, { addMargin: false, planContent })) : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Prompt"), /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "wrap" }, displayPrompt));
    $[35] = displayPrompt;
    $[36] = planContent;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  let t17;
  if ($[38] !== agent.error || $[39] !== agent.status) {
    t17 = agent.status === "failed" && agent.error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Error"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error", wrap: "wrap" }, agent.error));
    $[38] = agent.error;
    $[39] = agent.status;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  let t18;
  if ($[41] !== t15 || $[42] !== t16 || $[43] !== t17) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t15, t16, t17);
    $[41] = t15;
    $[42] = t16;
    $[43] = t17;
    $[44] = t18;
  } else {
    t18 = $[44];
  }
  let t19;
  if ($[45] !== onDone || $[46] !== subtitle || $[47] !== t14 || $[48] !== t18 || $[49] !== title) {
    t19 = /* @__PURE__ */ react_default.createElement(Dialog, { title, subtitle, onCancel: onDone, color: "background", inputGuide: t14 }, t18);
    $[45] = onDone;
    $[46] = subtitle;
    $[47] = t14;
    $[48] = t18;
    $[49] = title;
    $[50] = t19;
  } else {
    t19 = $[50];
  }
  let t20;
  if ($[51] !== handleKeyDown || $[52] !== t19) {
    t20 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t19);
    $[51] = handleKeyDown;
    $[52] = t19;
    $[53] = t20;
  } else {
    t20 = $[53];
  }
  return t20;
}
var init_AsyncAgentDetailDialog = __esm({
  "src/components/tasks/AsyncAgentDetailDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useElapsedTime();
    init_ink();
    init_useKeybinding();
    init_Tool();
    init_tools();
    init_format();
    init_messages();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_UserPlanMessage();
    init_renderToolActivity();
    init_taskStatusUtils();
  }
});

// src/components/tasks/RemoteSessionProgress.tsx
function formatReviewStageCounts(stage, found, verified, refuted) {
  if (!stage) return `${found} found \xB7 ${verified} verified`;
  if (stage === "synthesizing") {
    const parts = [`${verified} verified`];
    if (refuted > 0) parts.push(`${refuted} refuted`);
    parts.push("deduping");
    return parts.join(" \xB7 ");
  }
  if (stage === "verifying") {
    const parts = [`${found} found`, `${verified} verified`];
    if (refuted > 0) parts.push(`${refuted} refuted`);
    return parts.join(" \xB7 ");
  }
  return found > 0 ? `${found} found` : "finding";
}
function RainbowText(t0) {
  const $ = c(5);
  const {
    text,
    phase: t1
  } = t0;
  const phase = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[0] !== text) {
    t2 = [...text];
    $[0] = text;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== phase || $[3] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t2.map((ch, i) => /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, color: getRainbowColor(i + phase) }, ch)));
    $[2] = phase;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function useSmoothCount(target, time, snap) {
  const displayed = useRef(target);
  const lastTick = useRef(time);
  if (snap || target < displayed.current) {
    displayed.current = target;
  } else if (target > displayed.current && time !== lastTick.current) {
    displayed.current += 1;
    lastTick.current = time;
  }
  return displayed.current;
}
function ReviewRainbowLine(t0) {
  const $ = c(15);
  const {
    session
  } = t0;
  const settings = useSettings();
  const reducedMotion = settings.prefersReducedMotion ?? false;
  const p = session.reviewProgress;
  const running = session.status === "running";
  const [, time] = useAnimationFrame(running && !reducedMotion ? TICK_MS : null);
  const targetFound = p?.bugsFound ?? 0;
  const targetVerified = p?.bugsVerified ?? 0;
  const targetRefuted = p?.bugsRefuted ?? 0;
  const snap = reducedMotion || !running;
  const found = useSmoothCount(targetFound, time, snap);
  const verified = useSmoothCount(targetVerified, time, snap);
  const refuted = useSmoothCount(targetRefuted, time, snap);
  const phase = Math.floor(time / (TICK_MS * 3)) % 7;
  if (session.status === "completed") {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, DIAMOND_FILLED, " "), /* @__PURE__ */ react_default.createElement(RainbowText, { text: "ultrareview", phase: 0 }), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ready \xB7 shift+\u2193 to view"));
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  if (session.status === "failed") {
    let t12;
    if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, DIAMOND_FILLED, " "), /* @__PURE__ */ react_default.createElement(RainbowText, { text: "ultrareview", phase: 0 }), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error", dimColor: true }, " \xB7 ", "error"));
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  let t1;
  if ($[2] !== found || $[3] !== p || $[4] !== refuted || $[5] !== verified) {
    t1 = !p ? "setting up" : formatReviewStageCounts(p.stage, found, verified, refuted);
    $[2] = found;
    $[3] = p;
    $[4] = refuted;
    $[5] = verified;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  const tail = t1;
  let t2;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, DIAMOND_OPEN, " ");
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const t3 = running ? phase : 0;
  let t4;
  if ($[8] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(RainbowText, { text: "ultrareview", phase: t3 });
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== tail) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \xB7 ", tail);
    $[10] = tail;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== t4 || $[13] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t2, t4, t5);
    $[12] = t4;
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  return t6;
}
function RemoteSessionProgress(t0) {
  const $ = c(11);
  const {
    session
  } = t0;
  if (session.isRemoteReview) {
    let t12;
    if ($[0] !== session) {
      t12 = /* @__PURE__ */ react_default.createElement(ReviewRainbowLine, { session });
      $[0] = session;
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  if (session.status === "completed") {
    let t12;
    if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "success", dimColor: true }, "done");
      $[2] = t12;
    } else {
      t12 = $[2];
    }
    return t12;
  }
  if (session.status === "failed") {
    let t12;
    if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error", dimColor: true }, "error");
      $[3] = t12;
    } else {
      t12 = $[3];
    }
    return t12;
  }
  if (!session.todoList.length) {
    let t12;
    if ($[4] !== session.status) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, session.status, "\u2026");
      $[4] = session.status;
      $[5] = t12;
    } else {
      t12 = $[5];
    }
    return t12;
  }
  let t1;
  if ($[6] !== session.todoList) {
    t1 = count(session.todoList, _temp);
    $[6] = session.todoList;
    $[7] = t1;
  } else {
    t1 = $[7];
  }
  const completed = t1;
  const total = session.todoList.length;
  let t2;
  if ($[8] !== completed || $[9] !== total) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, completed, "/", total);
    $[8] = completed;
    $[9] = total;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  return t2;
}
function _temp(_) {
  return _.status === "completed";
}
var TICK_MS;
var init_RemoteSessionProgress = __esm({
  "src/components/tasks/RemoteSessionProgress.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_figures2();
    init_useSettings();
    init_ink();
    init_array();
    init_thinking();
    TICK_MS = 80;
  }
});

// src/components/tasks/ShellProgress.tsx
function TaskStatusText(t0) {
  const $ = c(4);
  const {
    status,
    label,
    suffix
  } = t0;
  const displayLabel = label ?? status;
  const color = status === "completed" ? "success" : status === "failed" ? "error" : status === "killed" ? "warning" : void 0;
  let t1;
  if ($[0] !== color || $[1] !== displayLabel || $[2] !== suffix) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, { color, dimColor: true }, "(", displayLabel, suffix, ")");
    $[0] = color;
    $[1] = displayLabel;
    $[2] = suffix;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function ShellProgress(t0) {
  const $ = c(4);
  const {
    shell
  } = t0;
  switch (shell.status) {
    case "completed": {
      let t1;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ react_default.createElement(TaskStatusText, { status: "completed", label: "done" });
        $[0] = t1;
      } else {
        t1 = $[0];
      }
      return t1;
    }
    case "failed": {
      let t1;
      if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ react_default.createElement(TaskStatusText, { status: "failed", label: "error" });
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      return t1;
    }
    case "killed": {
      let t1;
      if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ react_default.createElement(TaskStatusText, { status: "killed", label: "stopped" });
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    }
    case "running":
    case "pending": {
      let t1;
      if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ react_default.createElement(TaskStatusText, { status: "running" });
        $[3] = t1;
      } else {
        t1 = $[3];
      }
      return t1;
    }
  }
}
var init_ShellProgress = __esm({
  "src/components/tasks/ShellProgress.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

// src/components/tasks/BackgroundTask.tsx
function BackgroundTask(t0) {
  const $ = c(92);
  const {
    task,
    maxActivityWidth
  } = t0;
  const activityLimit = maxActivityWidth ?? 40;
  switch (task.type) {
    case "local_bash": {
      const t1 = task.kind === "monitor" ? task.description : task.command;
      let t2;
      if ($[0] !== activityLimit || $[1] !== t1) {
        t2 = truncate(t1, activityLimit, true);
        $[0] = activityLimit;
        $[1] = t1;
        $[2] = t2;
      } else {
        t2 = $[2];
      }
      let t3;
      if ($[3] !== task) {
        t3 = /* @__PURE__ */ createElement(ShellProgress, { shell: task });
        $[3] = task;
        $[4] = t3;
      } else {
        t3 = $[4];
      }
      let t4;
      if ($[5] !== t2 || $[6] !== t3) {
        t4 = /* @__PURE__ */ createElement(ThemedText, null, t2, " ", t3);
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
      } else {
        t4 = $[7];
      }
      return t4;
    }
    case "remote_agent": {
      if (task.isRemoteReview) {
        let t12;
        if ($[8] !== task) {
          t12 = /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(RemoteSessionProgress, { session: task }));
          $[8] = task;
          $[9] = t12;
        } else {
          t12 = $[9];
        }
        return t12;
      }
      const running = task.status === "running" || task.status === "pending";
      const t1 = running ? DIAMOND_OPEN : DIAMOND_FILLED;
      let t2;
      if ($[10] !== t1) {
        t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t1, " ");
        $[10] = t1;
        $[11] = t2;
      } else {
        t2 = $[11];
      }
      let t3;
      if ($[12] !== activityLimit || $[13] !== task.title) {
        t3 = truncate(task.title, activityLimit, true);
        $[12] = activityLimit;
        $[13] = task.title;
        $[14] = t3;
      } else {
        t3 = $[14];
      }
      let t4;
      if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t4 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ");
        $[15] = t4;
      } else {
        t4 = $[15];
      }
      let t5;
      if ($[16] !== task) {
        t5 = /* @__PURE__ */ createElement(RemoteSessionProgress, { session: task });
        $[16] = task;
        $[17] = t5;
      } else {
        t5 = $[17];
      }
      let t6;
      if ($[18] !== t2 || $[19] !== t3 || $[20] !== t5) {
        t6 = /* @__PURE__ */ createElement(ThemedText, null, t2, t3, t4, t5);
        $[18] = t2;
        $[19] = t3;
        $[20] = t5;
        $[21] = t6;
      } else {
        t6 = $[21];
      }
      return t6;
    }
    case "local_agent": {
      let t1;
      if ($[22] !== activityLimit || $[23] !== task.description) {
        t1 = truncate(task.description, activityLimit, true);
        $[22] = activityLimit;
        $[23] = task.description;
        $[24] = t1;
      } else {
        t1 = $[24];
      }
      const t2 = task.status === "completed" ? "done" : void 0;
      const t3 = task.status === "completed" && !task.notified ? ", unread" : void 0;
      let t4;
      if ($[25] !== t2 || $[26] !== t3 || $[27] !== task.status) {
        t4 = /* @__PURE__ */ createElement(TaskStatusText, { status: task.status, label: t2, suffix: t3 });
        $[25] = t2;
        $[26] = t3;
        $[27] = task.status;
        $[28] = t4;
      } else {
        t4 = $[28];
      }
      let t5;
      if ($[29] !== t1 || $[30] !== t4) {
        t5 = /* @__PURE__ */ createElement(ThemedText, null, t1, " ", t4);
        $[29] = t1;
        $[30] = t4;
        $[31] = t5;
      } else {
        t5 = $[31];
      }
      return t5;
    }
    case "in_process_teammate": {
      let T0;
      let T1;
      let t1;
      let t2;
      let t3;
      let t4;
      if ($[32] !== activityLimit || $[33] !== task) {
        const activity = describeTeammateActivity(task);
        T1 = ThemedText;
        let t52;
        if ($[40] !== task.identity.color) {
          t52 = toInkColor(task.identity.color);
          $[40] = task.identity.color;
          $[41] = t52;
        } else {
          t52 = $[41];
        }
        if ($[42] !== t52 || $[43] !== task.identity.agentName) {
          t4 = /* @__PURE__ */ createElement(ThemedText, { color: t52 }, "@", task.identity.agentName);
          $[42] = t52;
          $[43] = task.identity.agentName;
          $[44] = t4;
        } else {
          t4 = $[44];
        }
        T0 = ThemedText;
        t1 = true;
        t2 = ": ";
        t3 = truncate(activity, activityLimit, true);
        $[32] = activityLimit;
        $[33] = task;
        $[34] = T0;
        $[35] = T1;
        $[36] = t1;
        $[37] = t2;
        $[38] = t3;
        $[39] = t4;
      } else {
        T0 = $[34];
        T1 = $[35];
        t1 = $[36];
        t2 = $[37];
        t3 = $[38];
        t4 = $[39];
      }
      let t5;
      if ($[45] !== T0 || $[46] !== t1 || $[47] !== t2 || $[48] !== t3) {
        t5 = /* @__PURE__ */ createElement(T0, { dimColor: t1 }, t2, t3);
        $[45] = T0;
        $[46] = t1;
        $[47] = t2;
        $[48] = t3;
        $[49] = t5;
      } else {
        t5 = $[49];
      }
      let t6;
      if ($[50] !== T1 || $[51] !== t4 || $[52] !== t5) {
        t6 = /* @__PURE__ */ createElement(T1, null, t4, t5);
        $[50] = T1;
        $[51] = t4;
        $[52] = t5;
        $[53] = t6;
      } else {
        t6 = $[53];
      }
      return t6;
    }
    case "local_workflow": {
      const t1 = task.workflowName ?? task.summary ?? task.description;
      let t2;
      if ($[54] !== activityLimit || $[55] !== t1) {
        t2 = truncate(t1, activityLimit, true);
        $[54] = activityLimit;
        $[55] = t1;
        $[56] = t2;
      } else {
        t2 = $[56];
      }
      let t3;
      if ($[57] !== task.agentCount || $[58] !== task.status) {
        t3 = task.status === "running" ? `${task.agentCount} ${plural(task.agentCount, "agent")}` : task.status === "completed" ? "done" : void 0;
        $[57] = task.agentCount;
        $[58] = task.status;
        $[59] = t3;
      } else {
        t3 = $[59];
      }
      const t4 = task.status === "completed" && !task.notified ? ", unread" : void 0;
      let t5;
      if ($[60] !== t3 || $[61] !== t4 || $[62] !== task.status) {
        t5 = /* @__PURE__ */ createElement(TaskStatusText, { status: task.status, label: t3, suffix: t4 });
        $[60] = t3;
        $[61] = t4;
        $[62] = task.status;
        $[63] = t5;
      } else {
        t5 = $[63];
      }
      let t6;
      if ($[64] !== t2 || $[65] !== t5) {
        t6 = /* @__PURE__ */ createElement(ThemedText, null, t2, " ", t5);
        $[64] = t2;
        $[65] = t5;
        $[66] = t6;
      } else {
        t6 = $[66];
      }
      return t6;
    }
    case "monitor_mcp": {
      let t1;
      if ($[67] !== activityLimit || $[68] !== task.description) {
        t1 = truncate(task.description, activityLimit, true);
        $[67] = activityLimit;
        $[68] = task.description;
        $[69] = t1;
      } else {
        t1 = $[69];
      }
      const t2 = task.status === "completed" ? "done" : void 0;
      const t3 = task.status === "completed" && !task.notified ? ", unread" : void 0;
      let t4;
      if ($[70] !== t2 || $[71] !== t3 || $[72] !== task.status) {
        t4 = /* @__PURE__ */ createElement(TaskStatusText, { status: task.status, label: t2, suffix: t3 });
        $[70] = t2;
        $[71] = t3;
        $[72] = task.status;
        $[73] = t4;
      } else {
        t4 = $[73];
      }
      let t5;
      if ($[74] !== t1 || $[75] !== t4) {
        t5 = /* @__PURE__ */ createElement(ThemedText, null, t1, " ", t4);
        $[74] = t1;
        $[75] = t4;
        $[76] = t5;
      } else {
        t5 = $[76];
      }
      return t5;
    }
    case "dream": {
      const n = task.filesTouched.length;
      let t1;
      if ($[77] !== n || $[78] !== task.phase || $[79] !== task.sessionsReviewing) {
        t1 = task.phase === "updating" && n > 0 ? `${n} ${plural(n, "file")}` : `${task.sessionsReviewing} ${plural(task.sessionsReviewing, "session")}`;
        $[77] = n;
        $[78] = task.phase;
        $[79] = task.sessionsReviewing;
        $[80] = t1;
      } else {
        t1 = $[80];
      }
      const detail = t1;
      let t2;
      if ($[81] !== detail || $[82] !== task.phase) {
        t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 ", task.phase, " \xB7 ", detail);
        $[81] = detail;
        $[82] = task.phase;
        $[83] = t2;
      } else {
        t2 = $[83];
      }
      const t3 = task.status === "completed" ? "done" : void 0;
      const t4 = task.status === "completed" && !task.notified ? ", unread" : void 0;
      let t5;
      if ($[84] !== t3 || $[85] !== t4 || $[86] !== task.status) {
        t5 = /* @__PURE__ */ createElement(TaskStatusText, { status: task.status, label: t3, suffix: t4 });
        $[84] = t3;
        $[85] = t4;
        $[86] = task.status;
        $[87] = t5;
      } else {
        t5 = $[87];
      }
      let t6;
      if ($[88] !== t2 || $[89] !== t5 || $[90] !== task.description) {
        t6 = /* @__PURE__ */ createElement(ThemedText, null, task.description, " ", t2, " ", t5);
        $[88] = t2;
        $[89] = t5;
        $[90] = task.description;
        $[91] = t6;
      } else {
        t6 = $[91];
      }
      return t6;
    }
  }
}
var init_BackgroundTask = __esm({
  "src/components/tasks/BackgroundTask.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_format();
    init_ink2();
    init_stringUtils();
    init_figures2();
    init_RemoteSessionProgress();
    init_ShellProgress();
    init_taskStatusUtils();
  }
});

// src/components/tasks/DreamDetailDialog.tsx
function DreamDetailDialog(t0) {
  const $ = c(70);
  const {
    task,
    onDone,
    onBack,
    onKill
  } = t0;
  const elapsedTime = useElapsedTime(task.startTime, task.status === "running", 1e3, 0);
  let t1;
  if ($[0] !== onDone) {
    t1 = {
      "confirm:yes": onDone
    };
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      context: "Confirmation"
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  useKeybindings(t1, t2);
  let t3;
  if ($[3] !== onBack || $[4] !== onDone || $[5] !== onKill || $[6] !== task.status) {
    t3 = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        onDone();
      } else {
        if (e.key === "left" && onBack) {
          e.preventDefault();
          onBack();
        } else {
          if (e.key === "x" && task.status === "running" && onKill) {
            e.preventDefault();
            onKill();
          }
        }
      }
    };
    $[3] = onBack;
    $[4] = onDone;
    $[5] = onKill;
    $[6] = task.status;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const handleKeyDown = t3;
  let T0;
  let T1;
  let T2;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t16;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[8] !== elapsedTime || $[9] !== handleKeyDown || $[10] !== onBack || $[11] !== onDone || $[12] !== onKill || $[13] !== task.filesTouched.length || $[14] !== task.sessionsReviewing || $[15] !== task.status || $[16] !== task.turns) {
    const visibleTurns = task.turns.filter(_temp3);
    const shown = visibleTurns.slice(-VISIBLE_TURNS);
    const hidden = visibleTurns.length - shown.length;
    T2 = ThemedBox_default;
    t13 = "column";
    t14 = 0;
    t15 = true;
    t16 = handleKeyDown;
    T1 = Dialog;
    t8 = "Memory consolidation";
    const t172 = task.sessionsReviewing;
    let t182;
    if ($[33] !== task.sessionsReviewing) {
      t182 = plural(task.sessionsReviewing, "session");
      $[33] = task.sessionsReviewing;
      $[34] = t182;
    } else {
      t182 = $[34];
    }
    let t192;
    if ($[35] !== task.filesTouched.length) {
      t192 = task.filesTouched.length > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", "\xB7 ", task.filesTouched.length, " ", plural(task.filesTouched.length, "file"), " touched");
      $[35] = task.filesTouched.length;
      $[36] = t192;
    } else {
      t192 = $[36];
    }
    if ($[37] !== elapsedTime || $[38] !== t182 || $[39] !== t192 || $[40] !== task.sessionsReviewing) {
      t9 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, elapsedTime, " \xB7 reviewing ", t172, " ", t182, t192);
      $[37] = elapsedTime;
      $[38] = t182;
      $[39] = t192;
      $[40] = task.sessionsReviewing;
      $[41] = t9;
    } else {
      t9 = $[41];
    }
    t10 = onDone;
    t11 = "background";
    if ($[42] !== onBack || $[43] !== onKill || $[44] !== task.status) {
      t12 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, onBack && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2190", action: "go back" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc/Enter/Space", action: "close" }), task.status === "running" && onKill && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "x", action: "stop" }));
      $[42] = onBack;
      $[43] = onKill;
      $[44] = task.status;
      $[45] = t12;
    } else {
      t12 = $[45];
    }
    T0 = ThemedBox_default;
    t4 = "column";
    t5 = 1;
    let t20;
    if ($[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t20 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status:");
      $[46] = t20;
    } else {
      t20 = $[46];
    }
    if ($[47] !== task.status) {
      t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t20, " ", task.status === "running" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, "running") : task.status === "completed" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, task.status) : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, task.status));
      $[47] = task.status;
      $[48] = t6;
    } else {
      t6 = $[48];
    }
    t7 = shown.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, task.status === "running" ? "Starting\u2026" : "(no text output)") : /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, hidden > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "(", hidden, " earlier ", plural(hidden, "turn"), ")"), shown.map(_temp2));
    $[8] = elapsedTime;
    $[9] = handleKeyDown;
    $[10] = onBack;
    $[11] = onDone;
    $[12] = onKill;
    $[13] = task.filesTouched.length;
    $[14] = task.sessionsReviewing;
    $[15] = task.status;
    $[16] = task.turns;
    $[17] = T0;
    $[18] = T1;
    $[19] = T2;
    $[20] = t10;
    $[21] = t11;
    $[22] = t12;
    $[23] = t13;
    $[24] = t14;
    $[25] = t15;
    $[26] = t16;
    $[27] = t4;
    $[28] = t5;
    $[29] = t6;
    $[30] = t7;
    $[31] = t8;
    $[32] = t9;
  } else {
    T0 = $[17];
    T1 = $[18];
    T2 = $[19];
    t10 = $[20];
    t11 = $[21];
    t12 = $[22];
    t13 = $[23];
    t14 = $[24];
    t15 = $[25];
    t16 = $[26];
    t4 = $[27];
    t5 = $[28];
    t6 = $[29];
    t7 = $[30];
    t8 = $[31];
    t9 = $[32];
  }
  let t17;
  if ($[49] !== T0 || $[50] !== t4 || $[51] !== t5 || $[52] !== t6 || $[53] !== t7) {
    t17 = /* @__PURE__ */ react_default.createElement(T0, { flexDirection: t4, gap: t5 }, t6, t7);
    $[49] = T0;
    $[50] = t4;
    $[51] = t5;
    $[52] = t6;
    $[53] = t7;
    $[54] = t17;
  } else {
    t17 = $[54];
  }
  let t18;
  if ($[55] !== T1 || $[56] !== t10 || $[57] !== t11 || $[58] !== t12 || $[59] !== t17 || $[60] !== t8 || $[61] !== t9) {
    t18 = /* @__PURE__ */ react_default.createElement(T1, { title: t8, subtitle: t9, onCancel: t10, color: t11, inputGuide: t12 }, t17);
    $[55] = T1;
    $[56] = t10;
    $[57] = t11;
    $[58] = t12;
    $[59] = t17;
    $[60] = t8;
    $[61] = t9;
    $[62] = t18;
  } else {
    t18 = $[62];
  }
  let t19;
  if ($[63] !== T2 || $[64] !== t13 || $[65] !== t14 || $[66] !== t15 || $[67] !== t16 || $[68] !== t18) {
    t19 = /* @__PURE__ */ react_default.createElement(T2, { flexDirection: t13, tabIndex: t14, autoFocus: t15, onKeyDown: t16 }, t18);
    $[63] = T2;
    $[64] = t13;
    $[65] = t14;
    $[66] = t15;
    $[67] = t16;
    $[68] = t18;
    $[69] = t19;
  } else {
    t19 = $[69];
  }
  return t19;
}
function _temp2(turn, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: i, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "wrap" }, turn.text), turn.toolUseCount > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "(", turn.toolUseCount, " ", plural(turn.toolUseCount, "tool"), ")"));
}
function _temp3(t) {
  return t.text !== "";
}
var VISIBLE_TURNS;
var init_DreamDetailDialog = __esm({
  "src/components/tasks/DreamDetailDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useElapsedTime();
    init_ink();
    init_useKeybinding();
    init_stringUtils();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    VISIBLE_TURNS = 6;
  }
});

// src/components/tasks/InProcessTeammateDetailDialog.tsx
function InProcessTeammateDetailDialog(t0) {
  const $ = c(63);
  const {
    teammate,
    onDone,
    onKill,
    onBack,
    onForeground
  } = t0;
  const [theme] = useTheme();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getTools(getEmptyToolPermissionContext());
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const tools = t1;
  const elapsedTime = useElapsedTime(teammate.startTime, teammate.status === "running", 1e3, teammate.totalPausedMs ?? 0);
  let t2;
  if ($[1] !== onDone) {
    t2 = {
      "confirm:yes": onDone
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      context: "Confirmation"
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  useKeybindings(t2, t3);
  let t4;
  if ($[4] !== onBack || $[5] !== onDone || $[6] !== onForeground || $[7] !== onKill || $[8] !== teammate.status) {
    t4 = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        onDone();
      } else {
        if (e.key === "left" && onBack) {
          e.preventDefault();
          onBack();
        } else {
          if (e.key === "x" && teammate.status === "running" && onKill) {
            e.preventDefault();
            onKill();
          } else {
            if (e.key === "f" && teammate.status === "running" && onForeground) {
              e.preventDefault();
              onForeground();
            }
          }
        }
      }
    };
    $[4] = onBack;
    $[5] = onDone;
    $[6] = onForeground;
    $[7] = onKill;
    $[8] = teammate.status;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const handleKeyDown = t4;
  let t5;
  if ($[10] !== teammate) {
    t5 = describeTeammateActivity(teammate);
    $[10] = teammate;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  const activity = t5;
  const tokenCount = teammate.result?.totalTokens ?? teammate.progress?.tokenCount;
  const toolUseCount = teammate.result?.totalToolUseCount ?? teammate.progress?.toolUseCount;
  let t6;
  if ($[12] !== teammate.prompt) {
    t6 = truncateToWidth(teammate.prompt, 300);
    $[12] = teammate.prompt;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  const displayPrompt = t6;
  let t7;
  if ($[14] !== teammate.identity.color) {
    t7 = toInkColor(teammate.identity.color);
    $[14] = teammate.identity.color;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t7 || $[17] !== teammate.identity.agentName) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: t7 }, "@", teammate.identity.agentName);
    $[16] = t7;
    $[17] = teammate.identity.agentName;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  let t9;
  if ($[19] !== activity) {
    t9 = activity && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (", activity, ")");
    $[19] = activity;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  let t10;
  if ($[21] !== t8 || $[22] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t8, t9);
    $[21] = t8;
    $[22] = t9;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  const title = t10;
  let t11;
  if ($[24] !== teammate.status) {
    t11 = teammate.status !== "running" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: teammate.status === "completed" ? "success" : teammate.status === "killed" ? "warning" : "error" }, teammate.status === "completed" ? "Completed" : teammate.status === "failed" ? "Failed" : "Stopped", " \xB7 ");
    $[24] = teammate.status;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  let t12;
  if ($[26] !== tokenCount) {
    t12 = tokenCount !== void 0 && tokenCount > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " \xB7 ", formatNumber(tokenCount), " tokens");
    $[26] = tokenCount;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  let t13;
  if ($[28] !== toolUseCount) {
    t13 = toolUseCount !== void 0 && toolUseCount > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", "\xB7 ", toolUseCount, " ", toolUseCount === 1 ? "tool" : "tools");
    $[28] = toolUseCount;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  let t14;
  if ($[30] !== elapsedTime || $[31] !== t12 || $[32] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, elapsedTime, t12, t13);
    $[30] = elapsedTime;
    $[31] = t12;
    $[32] = t13;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  let t15;
  if ($[34] !== t11 || $[35] !== t14) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t11, t14);
    $[34] = t11;
    $[35] = t14;
    $[36] = t15;
  } else {
    t15 = $[36];
  }
  const subtitle = t15;
  let t16;
  if ($[37] !== onBack || $[38] !== onForeground || $[39] !== onKill || $[40] !== teammate.status) {
    t16 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, onBack && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2190", action: "go back" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc/Enter/Space", action: "close" }), teammate.status === "running" && onKill && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "x", action: "stop" }), teammate.status === "running" && onForeground && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "f", action: "foreground" }));
    $[37] = onBack;
    $[38] = onForeground;
    $[39] = onKill;
    $[40] = teammate.status;
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] !== teammate.progress || $[43] !== teammate.status || $[44] !== theme) {
    t17 = teammate.status === "running" && teammate.progress?.recentActivities && teammate.progress.recentActivities.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Progress"), teammate.progress.recentActivities.map((activity_0, i) => /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: i < teammate.progress.recentActivities.length - 1, wrap: "truncate-end" }, i === teammate.progress.recentActivities.length - 1 ? "\u203A " : "  ", renderToolActivity(activity_0, tools, theme))));
    $[42] = teammate.progress;
    $[43] = teammate.status;
    $[44] = theme;
    $[45] = t17;
  } else {
    t17 = $[45];
  }
  let t18;
  if ($[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Prompt");
    $[46] = t18;
  } else {
    t18 = $[46];
  }
  let t19;
  if ($[47] !== displayPrompt) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, t18, /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "wrap" }, displayPrompt));
    $[47] = displayPrompt;
    $[48] = t19;
  } else {
    t19 = $[48];
  }
  let t20;
  if ($[49] !== teammate.error || $[50] !== teammate.status) {
    t20 = teammate.status === "failed" && teammate.error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Error"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error", wrap: "wrap" }, teammate.error));
    $[49] = teammate.error;
    $[50] = teammate.status;
    $[51] = t20;
  } else {
    t20 = $[51];
  }
  let t21;
  if ($[52] !== onDone || $[53] !== subtitle || $[54] !== t16 || $[55] !== t17 || $[56] !== t19 || $[57] !== t20 || $[58] !== title) {
    t21 = /* @__PURE__ */ react_default.createElement(Dialog, { title, subtitle, onCancel: onDone, color: "background", inputGuide: t16 }, t17, t19, t20);
    $[52] = onDone;
    $[53] = subtitle;
    $[54] = t16;
    $[55] = t17;
    $[56] = t19;
    $[57] = t20;
    $[58] = title;
    $[59] = t21;
  } else {
    t21 = $[59];
  }
  let t22;
  if ($[60] !== handleKeyDown || $[61] !== t21) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t21);
    $[60] = handleKeyDown;
    $[61] = t21;
    $[62] = t22;
  } else {
    t22 = $[62];
  }
  return t22;
}
var init_InProcessTeammateDetailDialog = __esm({
  "src/components/tasks/InProcessTeammateDetailDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useElapsedTime();
    init_ink();
    init_useKeybinding();
    init_Tool();
    init_tools();
    init_format();
    init_ink2();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_renderToolActivity();
    init_taskStatusUtils();
  }
});

// src/components/tasks/RemoteSessionDetailDialog.tsx
function formatToolUseSummary(name, input) {
  if (name === EXIT_PLAN_MODE_V2_TOOL_NAME) {
    return "Review the plan in Claude Code on the web";
  }
  if (!input || typeof input !== "object") return name;
  if (name === ASK_USER_QUESTION_TOOL_NAME && "questions" in input) {
    const qs = input.questions;
    if (Array.isArray(qs) && qs[0] && typeof qs[0] === "object") {
      const q = "question" in qs[0] && typeof qs[0].question === "string" && qs[0].question ? qs[0].question : "header" in qs[0] && typeof qs[0].header === "string" ? qs[0].header : null;
      if (q) {
        const oneLine = q.replace(/\s+/g, " ").trim();
        return `Answer in browser: ${truncateToWidth(oneLine, 50)}`;
      }
    }
  }
  for (const v of Object.values(input)) {
    if (typeof v === "string" && v.trim()) {
      const oneLine = v.replace(/\s+/g, " ").trim();
      return `${name} ${truncateToWidth(oneLine, 60)}`;
    }
  }
  return name;
}
function UltraplanSessionDetail(t0) {
  const $ = c(70);
  const {
    session,
    onDone,
    onBack,
    onKill
  } = t0;
  const running = session.status === "running" || session.status === "pending";
  const phase = session.ultraplanPhase;
  const statusText = running ? phase ? PHASE_LABEL[phase] : "running" : session.status;
  const elapsedTime = useElapsedTime(session.startTime, running, 1e3, 0, session.endTime);
  let spawns = 0;
  let calls = 0;
  let lastBlock = null;
  for (const msg of session.log) {
    if (msg.type !== "assistant") {
      continue;
    }
    for (const block of msg.message.content) {
      if (block.type !== "tool_use") {
        continue;
      }
      calls++;
      lastBlock = block;
      if (block.name === AGENT_TOOL_NAME || block.name === LEGACY_AGENT_TOOL_NAME) {
        spawns++;
      }
    }
  }
  const t1 = 1 + spawns;
  let t2;
  if ($[0] !== lastBlock) {
    t2 = lastBlock ? formatToolUseSummary(lastBlock.name, lastBlock.input) : null;
    $[0] = lastBlock;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== calls || $[3] !== t1 || $[4] !== t2) {
    t3 = {
      agentsWorking: t1,
      toolCalls: calls,
      lastToolCall: t2
    };
    $[2] = calls;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const {
    agentsWorking,
    toolCalls,
    lastToolCall
  } = t3;
  let t4;
  if ($[6] !== session.sessionId) {
    t4 = getRemoteTaskSessionUrl(session.sessionId);
    $[6] = session.sessionId;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const sessionUrl = t4;
  let t5;
  if ($[8] !== onBack || $[9] !== onDone) {
    t5 = onBack ?? (() => onDone("Remote session details dismissed", {
      display: "system"
    }));
    $[8] = onBack;
    $[9] = onDone;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const goBackOrClose = t5;
  const [confirmingStop, setConfirmingStop] = useState(false);
  if (confirmingStop) {
    let t62;
    if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t62 = () => setConfirmingStop(false);
      $[11] = t62;
    } else {
      t62 = $[11];
    }
    let t72;
    if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "This will terminate the Claude Code on the web session.");
      $[12] = t72;
    } else {
      t72 = $[12];
    }
    let t82;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = {
        label: "Terminate session",
        value: "stop"
      };
      $[13] = t82;
    } else {
      t82 = $[13];
    }
    let t92;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t92 = [t82, {
        label: "Back",
        value: "back"
      }];
      $[14] = t92;
    } else {
      t92 = $[14];
    }
    let t102;
    if ($[15] !== goBackOrClose || $[16] !== onKill) {
      t102 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Stop ultraplan?", onCancel: t62, color: "background" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t72, /* @__PURE__ */ react_default.createElement(Select, { options: t92, onChange: (v) => {
        if (v === "stop") {
          onKill?.();
          goBackOrClose();
        } else {
          setConfirmingStop(false);
        }
      } })));
      $[15] = goBackOrClose;
      $[16] = onKill;
      $[17] = t102;
    } else {
      t102 = $[17];
    }
    return t102;
  }
  const t6 = phase === "plan_ready" ? DIAMOND_FILLED : DIAMOND_OPEN;
  let t7;
  if ($[18] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, t6, " ");
    $[18] = t6;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  let t8;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "ultraplan");
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== elapsedTime || $[22] !== statusText) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \xB7 ", elapsedTime, " \xB7 ", statusText);
    $[21] = elapsedTime;
    $[22] = statusText;
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  let t10;
  if ($[24] !== t7 || $[25] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t7, t8, t9);
    $[24] = t7;
    $[25] = t9;
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  let t11;
  if ($[27] !== phase) {
    t11 = phase === "plan_ready" && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, figures_default.tick, " ");
    $[27] = phase;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  let t12;
  if ($[29] !== agentsWorking) {
    t12 = plural(agentsWorking, "agent");
    $[29] = agentsWorking;
    $[30] = t12;
  } else {
    t12 = $[30];
  }
  const t13 = phase ? AGENT_VERB[phase] : "working";
  let t14;
  if ($[31] !== toolCalls) {
    t14 = plural(toolCalls, "call");
    $[31] = toolCalls;
    $[32] = t14;
  } else {
    t14 = $[32];
  }
  let t15;
  if ($[33] !== agentsWorking || $[34] !== t11 || $[35] !== t12 || $[36] !== t13 || $[37] !== t14 || $[38] !== toolCalls) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t11, agentsWorking, " ", t12, " ", t13, " \xB7 ", toolCalls, " tool", " ", t14);
    $[33] = agentsWorking;
    $[34] = t11;
    $[35] = t12;
    $[36] = t13;
    $[37] = t14;
    $[38] = toolCalls;
    $[39] = t15;
  } else {
    t15 = $[39];
  }
  let t16;
  if ($[40] !== lastToolCall) {
    t16 = lastToolCall && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, lastToolCall);
    $[40] = lastToolCall;
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] !== sessionUrl) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, sessionUrl);
    $[42] = sessionUrl;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  let t18;
  if ($[44] !== sessionUrl || $[45] !== t17) {
    t18 = /* @__PURE__ */ react_default.createElement(Link, { url: sessionUrl }, t17);
    $[44] = sessionUrl;
    $[45] = t17;
    $[46] = t18;
  } else {
    t18 = $[46];
  }
  let t19;
  if ($[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = {
      label: "Review in Claude Code on the web",
      value: "open"
    };
    $[47] = t19;
  } else {
    t19 = $[47];
  }
  let t20;
  if ($[48] !== onKill || $[49] !== running) {
    t20 = onKill && running ? [{
      label: "Stop ultraplan",
      value: "stop"
    }] : [];
    $[48] = onKill;
    $[49] = running;
    $[50] = t20;
  } else {
    t20 = $[50];
  }
  let t21;
  if ($[51] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t21 = {
      label: "Back",
      value: "back"
    };
    $[51] = t21;
  } else {
    t21 = $[51];
  }
  let t22;
  if ($[52] !== t20) {
    t22 = [t19, ...t20, t21];
    $[52] = t20;
    $[53] = t22;
  } else {
    t22 = $[53];
  }
  let t23;
  if ($[54] !== goBackOrClose || $[55] !== onDone || $[56] !== sessionUrl) {
    t23 = (v_0) => {
      switch (v_0) {
        case "open": {
          openBrowser(sessionUrl);
          onDone();
          return;
        }
        case "stop": {
          setConfirmingStop(true);
          return;
        }
        case "back": {
          goBackOrClose();
          return;
        }
      }
    };
    $[54] = goBackOrClose;
    $[55] = onDone;
    $[56] = sessionUrl;
    $[57] = t23;
  } else {
    t23 = $[57];
  }
  let t24;
  if ($[58] !== t22 || $[59] !== t23) {
    t24 = /* @__PURE__ */ react_default.createElement(Select, { options: t22, onChange: t23 });
    $[58] = t22;
    $[59] = t23;
    $[60] = t24;
  } else {
    t24 = $[60];
  }
  let t25;
  if ($[61] !== t15 || $[62] !== t16 || $[63] !== t18 || $[64] !== t24) {
    t25 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t15, t16, t18, t24);
    $[61] = t15;
    $[62] = t16;
    $[63] = t18;
    $[64] = t24;
    $[65] = t25;
  } else {
    t25 = $[65];
  }
  let t26;
  if ($[66] !== goBackOrClose || $[67] !== t10 || $[68] !== t25) {
    t26 = /* @__PURE__ */ react_default.createElement(Dialog, { title: t10, onCancel: goBackOrClose, color: "background" }, t25);
    $[66] = goBackOrClose;
    $[67] = t10;
    $[68] = t25;
    $[69] = t26;
  } else {
    t26 = $[69];
  }
  return t26;
}
function StagePipeline(t0) {
  const $ = c(15);
  const {
    stage,
    completed,
    hasProgress
  } = t0;
  let t1;
  if ($[0] !== stage) {
    t1 = stage ? STAGES.indexOf(stage) : -1;
    $[0] = stage;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentIdx = t1;
  const inSetup = !completed && !hasProgress;
  let t2;
  if ($[2] !== inSetup) {
    t2 = inSetup ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, "Setup") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Setup");
    $[2] = inSetup;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \u2192 ");
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== completed || $[6] !== currentIdx || $[7] !== inSetup) {
    t4 = STAGES.map((s, i) => {
      const isCurrent = !completed && !inSetup && i === currentIdx;
      return /* @__PURE__ */ react_default.createElement(react_default.Fragment, { key: s }, i > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \u2192 "), isCurrent ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, STAGE_LABELS[s]) : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, STAGE_LABELS[s]));
    });
    $[5] = completed;
    $[6] = currentIdx;
    $[7] = inSetup;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== completed) {
    t5 = completed && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, " \u2713");
    $[9] = completed;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t2 || $[12] !== t4 || $[13] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t2, t3, t4, t5);
    $[11] = t2;
    $[12] = t4;
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  return t6;
}
function reviewCountsLine(session) {
  const p = session.reviewProgress;
  if (!p) return session.status === "completed" ? "done" : "setting up";
  const verified = p.bugsVerified;
  const refuted = p.bugsRefuted ?? 0;
  if (session.status === "completed") {
    const parts = [`${verified} ${plural(verified, "finding")}`];
    if (refuted > 0) parts.push(`${refuted} refuted`);
    return parts.join(" \xB7 ");
  }
  return formatReviewStageCounts(p.stage, p.bugsFound, verified, refuted);
}
function ReviewSessionDetail(t0) {
  const $ = c(56);
  const {
    session,
    onDone,
    onBack,
    onKill
  } = t0;
  const completed = session.status === "completed";
  const running = session.status === "running" || session.status === "pending";
  const [confirmingStop, setConfirmingStop] = useState(false);
  const elapsedTime = useElapsedTime(session.startTime, running, 1e3, 0, session.endTime);
  let t1;
  if ($[0] !== onDone) {
    t1 = () => onDone("Remote session details dismissed", {
      display: "system"
    });
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleClose = t1;
  const goBackOrClose = onBack ?? handleClose;
  let t2;
  if ($[2] !== session.sessionId) {
    t2 = getRemoteTaskSessionUrl(session.sessionId);
    $[2] = session.sessionId;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const sessionUrl = t2;
  const statusLabel = completed ? "ready" : running ? "running" : session.status;
  if (confirmingStop) {
    let t32;
    if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = () => setConfirmingStop(false);
      $[4] = t32;
    } else {
      t32 = $[4];
    }
    let t42;
    if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "This archives the remote session and stops local tracking. The review will not complete and any findings so far are discarded.");
      $[5] = t42;
    } else {
      t42 = $[5];
    }
    let t52;
    if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = {
        label: "Stop ultrareview",
        value: "stop"
      };
      $[6] = t52;
    } else {
      t52 = $[6];
    }
    let t62;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t62 = [t52, {
        label: "Back",
        value: "back"
      }];
      $[7] = t62;
    } else {
      t62 = $[7];
    }
    let t72;
    if ($[8] !== goBackOrClose || $[9] !== onKill) {
      t72 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Stop ultrareview?", onCancel: t32, color: "background" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t42, /* @__PURE__ */ react_default.createElement(Select, { options: t62, onChange: (v) => {
        if (v === "stop") {
          onKill?.();
          goBackOrClose();
        } else {
          setConfirmingStop(false);
        }
      } })));
      $[8] = goBackOrClose;
      $[9] = onKill;
      $[10] = t72;
    } else {
      t72 = $[10];
    }
    return t72;
  }
  let t3;
  if ($[11] !== completed || $[12] !== onKill || $[13] !== running) {
    t3 = completed ? [{
      label: "Open in Claude Code on the web",
      value: "open"
    }, {
      label: "Dismiss",
      value: "dismiss"
    }] : [{
      label: "Open in Claude Code on the web",
      value: "open"
    }, ...onKill && running ? [{
      label: "Stop ultrareview",
      value: "stop"
    }] : [], {
      label: "Back",
      value: "back"
    }];
    $[11] = completed;
    $[12] = onKill;
    $[13] = running;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  const options = t3;
  let t4;
  if ($[15] !== goBackOrClose || $[16] !== handleClose || $[17] !== onDone || $[18] !== sessionUrl) {
    t4 = (action) => {
      bb45: switch (action) {
        case "open": {
          openBrowser(sessionUrl);
          onDone();
          break bb45;
        }
        case "stop": {
          setConfirmingStop(true);
          break bb45;
        }
        case "back": {
          goBackOrClose();
          break bb45;
        }
        case "dismiss": {
          handleClose();
        }
      }
    };
    $[15] = goBackOrClose;
    $[16] = handleClose;
    $[17] = onDone;
    $[18] = sessionUrl;
    $[19] = t4;
  } else {
    t4 = $[19];
  }
  const handleSelect = t4;
  const t5 = completed ? DIAMOND_FILLED : DIAMOND_OPEN;
  let t6;
  if ($[20] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, t5, " ");
    $[20] = t5;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  let t7;
  if ($[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "ultrareview");
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  let t8;
  if ($[23] !== elapsedTime || $[24] !== statusLabel) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \xB7 ", elapsedTime, " \xB7 ", statusLabel);
    $[23] = elapsedTime;
    $[24] = statusLabel;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  let t9;
  if ($[26] !== t6 || $[27] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t6, t7, t8);
    $[26] = t6;
    $[27] = t8;
    $[28] = t9;
  } else {
    t9 = $[28];
  }
  const t10 = session.reviewProgress?.stage;
  const t11 = !!session.reviewProgress;
  let t12;
  if ($[29] !== completed || $[30] !== t10 || $[31] !== t11) {
    t12 = /* @__PURE__ */ react_default.createElement(StagePipeline, { stage: t10, completed, hasProgress: t11 });
    $[29] = completed;
    $[30] = t10;
    $[31] = t11;
    $[32] = t12;
  } else {
    t12 = $[32];
  }
  let t13;
  if ($[33] !== session) {
    t13 = reviewCountsLine(session);
    $[33] = session;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  let t14;
  if ($[35] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t13);
    $[35] = t13;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  let t15;
  if ($[37] !== sessionUrl) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, sessionUrl);
    $[37] = sessionUrl;
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  let t16;
  if ($[39] !== sessionUrl || $[40] !== t15) {
    t16 = /* @__PURE__ */ react_default.createElement(Link, { url: sessionUrl }, t15);
    $[39] = sessionUrl;
    $[40] = t15;
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] !== t14 || $[43] !== t16) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t14, t16);
    $[42] = t14;
    $[43] = t16;
    $[44] = t17;
  } else {
    t17 = $[44];
  }
  let t18;
  if ($[45] !== handleSelect || $[46] !== options) {
    t18 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect });
    $[45] = handleSelect;
    $[46] = options;
    $[47] = t18;
  } else {
    t18 = $[47];
  }
  let t19;
  if ($[48] !== t12 || $[49] !== t17 || $[50] !== t18) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t12, t17, t18);
    $[48] = t12;
    $[49] = t17;
    $[50] = t18;
    $[51] = t19;
  } else {
    t19 = $[51];
  }
  let t20;
  if ($[52] !== goBackOrClose || $[53] !== t19 || $[54] !== t9) {
    t20 = /* @__PURE__ */ react_default.createElement(Dialog, { title: t9, onCancel: goBackOrClose, color: "background", inputGuide: _temp4 }, t19);
    $[52] = goBackOrClose;
    $[53] = t19;
    $[54] = t9;
    $[55] = t20;
  } else {
    t20 = $[55];
  }
  return t20;
}
function _temp4(exitState) {
  return exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc", action: "go back" }));
}
function RemoteSessionDetailDialog({
  session,
  toolUseContext,
  onDone,
  onBack,
  onKill
}) {
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [teleportError, setTeleportError] = useState(null);
  const lastMessages = useMemo(() => {
    if (session.isUltraplan || session.isRemoteReview) return [];
    return normalizeMessages(toInternalMessages(session.log)).filter((_) => _.type !== "progress").slice(-3);
  }, [session]);
  if (session.isUltraplan) {
    return /* @__PURE__ */ react_default.createElement(UltraplanSessionDetail, { session, onDone, onBack, onKill });
  }
  if (session.isRemoteReview) {
    return /* @__PURE__ */ react_default.createElement(ReviewSessionDetail, { session, onDone, onBack, onKill });
  }
  const handleClose = () => onDone("Remote session details dismissed", {
    display: "system"
  });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone("Remote session details dismissed", {
        display: "system"
      });
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "t" && !isTeleporting) {
      e.preventDefault();
      void handleTeleport();
    } else if (e.key === "return") {
      e.preventDefault();
      handleClose();
    }
  };
  async function handleTeleport() {
    setIsTeleporting(true);
    setTeleportError(null);
    try {
      await teleportResumeCodeSession(session.sessionId);
    } catch (err) {
      setTeleportError(errorMessage(err));
    } finally {
      setIsTeleporting(false);
    }
  }
  const displayTitle = truncateToWidth(session.title, 50);
  const displayStatus = session.status === "pending" ? "starting" : session.status;
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, /* @__PURE__ */ react_default.createElement(Dialog, { title: "Remote session details", onCancel: handleClose, color: "background", inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, onBack && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2190", action: "go back" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc/Enter/Space", action: "close" }), !isTeleporting && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "t", action: "teleport" })) }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status"), ":", " ", displayStatus === "running" || displayStatus === "starting" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, displayStatus) : displayStatus === "completed" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, displayStatus) : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, displayStatus)), /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Runtime"), ":", " ", formatDuration((session.endTime ?? Date.now()) - session.startTime)), /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "truncate-end" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Title"), ": ", displayTitle), /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Progress"), ":", " ", /* @__PURE__ */ react_default.createElement(RemoteSessionProgress, { session })), /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Session URL"), ":", " ", /* @__PURE__ */ react_default.createElement(Link, { url: getRemoteTaskSessionUrl(session.sessionId) }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, getRemoteTaskSessionUrl(session.sessionId))))), session.log.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Recent messages"), ":"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", height: 10, overflowY: "hidden" }, lastMessages.map((msg, i) => /* @__PURE__ */ react_default.createElement(Message, { key: i, message: msg, lookups: EMPTY_LOOKUPS, addMargin: i > 0, tools: toolUseContext.options.tools, commands: toolUseContext.options.commands, verbose: toolUseContext.options.verbose, inProgressToolUseIDs: /* @__PURE__ */ new Set(), progressMessagesForMessage: [], shouldAnimate: false, shouldShowDot: false, style: "condensed", isTranscriptMode: false, isStatic: true }))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "Showing last ", lastMessages.length, " of ", session.log.length, " ", "messages"))), teleportError && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Teleport failed: ", teleportError)), isTeleporting && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, "Teleporting to session\u2026")));
}
var PHASE_LABEL, AGENT_VERB, STAGES, STAGE_LABELS;
var init_RemoteSessionDetailDialog = __esm({
  "src/components/tasks/RemoteSessionDetailDialog.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_figures2();
    init_useElapsedTime();
    init_ink();
    init_RemoteAgentTask();
    init_constants();
    init_prompt();
    init_constants2();
    init_browser();
    init_errors();
    init_format();
    init_mappers();
    init_messages();
    init_stringUtils();
    init_teleport();
    init_select();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_Message();
    init_RemoteSessionProgress();
    PHASE_LABEL = {
      needs_input: "input required",
      plan_ready: "ready"
    };
    AGENT_VERB = {
      needs_input: "waiting",
      plan_ready: "done"
    };
    STAGES = ["finding", "verifying", "synthesizing"];
    STAGE_LABELS = {
      finding: "Find",
      verifying: "Verify",
      synthesizing: "Dedupe"
    };
  }
});

// src/components/tasks/ShellDetailDialog.tsx
async function getTaskOutput(shell) {
  const path = getTaskOutputPath(shell.id);
  try {
    const result = await tailFile(path, SHELL_DETAIL_TAIL_BYTES);
    return {
      content: result.content,
      bytesTotal: result.bytesTotal
    };
  } catch {
    return {
      content: "",
      bytesTotal: 0
    };
  }
}
function ShellDetailDialog(t0) {
  const $ = c(57);
  const {
    shell,
    onDone,
    onKillShell,
    onBack
  } = t0;
  const {
    columns
  } = useTerminalSize();
  let t1;
  if ($[0] !== shell) {
    t1 = () => getTaskOutput(shell);
    $[0] = shell;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [outputPromise, setOutputPromise] = useState(t1);
  const deferredOutputPromise = useDeferredValue(outputPromise);
  let t2;
  if ($[2] !== shell) {
    t2 = () => {
      if (shell.status !== "running") {
        return;
      }
      const timer = setInterval(_temp5, 1e3, setOutputPromise, shell);
      return () => clearInterval(timer);
    };
    $[2] = shell;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== shell.id || $[5] !== shell.status) {
    t3 = [shell.id, shell.status];
    $[4] = shell.id;
    $[5] = shell.status;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  useEffect(t2, t3);
  let t4;
  if ($[7] !== onDone) {
    t4 = () => onDone("Shell details dismissed", {
      display: "system"
    });
    $[7] = onDone;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const handleClose = t4;
  let t5;
  if ($[9] !== handleClose) {
    t5 = {
      "confirm:yes": handleClose
    };
    $[9] = handleClose;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      context: "Confirmation"
    };
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  useKeybindings(t5, t6);
  let t7;
  if ($[12] !== onBack || $[13] !== onDone || $[14] !== onKillShell || $[15] !== shell.status) {
    t7 = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        onDone("Shell details dismissed", {
          display: "system"
        });
      } else {
        if (e.key === "left" && onBack) {
          e.preventDefault();
          onBack();
        } else {
          if (e.key === "x" && shell.status === "running" && onKillShell) {
            e.preventDefault();
            onKillShell();
          }
        }
      }
    };
    $[12] = onBack;
    $[13] = onDone;
    $[14] = onKillShell;
    $[15] = shell.status;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  const handleKeyDown = t7;
  const isMonitor = shell.kind === "monitor";
  let t8;
  if ($[17] !== shell.command) {
    t8 = truncateToWidth(shell.command, 280);
    $[17] = shell.command;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  const displayCommand = t8;
  const t9 = isMonitor ? "Monitor details" : "Shell details";
  let t10;
  if ($[19] !== onBack || $[20] !== onKillShell || $[21] !== shell.status) {
    t10 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, onBack && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2190", action: "go back" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Esc/Enter/Space", action: "close" }), shell.status === "running" && onKillShell && /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "x", action: "stop" }));
    $[19] = onBack;
    $[20] = onKillShell;
    $[21] = shell.status;
    $[22] = t10;
  } else {
    t10 = $[22];
  }
  let t11;
  if ($[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status:");
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== shell.result || $[25] !== shell.status) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t11, " ", shell.status === "running" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, shell.status, shell.result?.code !== void 0 && ` (exit code: ${shell.result.code})`) : shell.status === "completed" ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, shell.status, shell.result?.code !== void 0 && ` (exit code: ${shell.result.code})`) : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, shell.status, shell.result?.code !== void 0 && ` (exit code: ${shell.result.code})`));
    $[24] = shell.result;
    $[25] = shell.status;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Runtime:");
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  let t14;
  if ($[28] !== shell.endTime) {
    t14 = shell.endTime ?? Date.now();
    $[28] = shell.endTime;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  const t15 = t14 - shell.startTime;
  let t16;
  if ($[30] !== t15) {
    t16 = formatDuration(t15);
    $[30] = t15;
    $[31] = t16;
  } else {
    t16 = $[31];
  }
  let t17;
  if ($[32] !== t16) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t13, " ", t16);
    $[32] = t16;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  const t18 = isMonitor ? "Script:" : "Command:";
  let t19;
  if ($[34] !== t18) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, t18);
    $[34] = t18;
    $[35] = t19;
  } else {
    t19 = $[35];
  }
  let t20;
  if ($[36] !== displayCommand || $[37] !== t19) {
    t20 = /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "wrap" }, t19, " ", displayCommand);
    $[36] = displayCommand;
    $[37] = t19;
    $[38] = t20;
  } else {
    t20 = $[38];
  }
  let t21;
  if ($[39] !== t12 || $[40] !== t17 || $[41] !== t20) {
    t21 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t12, t17, t20);
    $[39] = t12;
    $[40] = t17;
    $[41] = t20;
    $[42] = t21;
  } else {
    t21 = $[42];
  }
  let t22;
  if ($[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Output:");
    $[43] = t22;
  } else {
    t22 = $[43];
  }
  let t23;
  if ($[44] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Loading output\u2026");
    $[44] = t23;
  } else {
    t23 = $[44];
  }
  let t24;
  if ($[45] !== columns || $[46] !== deferredOutputPromise) {
    t24 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t22, /* @__PURE__ */ react_default.createElement(Suspense, { fallback: t23 }, /* @__PURE__ */ react_default.createElement(ShellOutputContent, { outputPromise: deferredOutputPromise, columns })));
    $[45] = columns;
    $[46] = deferredOutputPromise;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  let t25;
  if ($[48] !== handleClose || $[49] !== t10 || $[50] !== t21 || $[51] !== t24 || $[52] !== t9) {
    t25 = /* @__PURE__ */ react_default.createElement(Dialog, { title: t9, onCancel: handleClose, color: "background", inputGuide: t10 }, t21, t24);
    $[48] = handleClose;
    $[49] = t10;
    $[50] = t21;
    $[51] = t24;
    $[52] = t9;
    $[53] = t25;
  } else {
    t25 = $[53];
  }
  let t26;
  if ($[54] !== handleKeyDown || $[55] !== t25) {
    t26 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t25);
    $[54] = handleKeyDown;
    $[55] = t25;
    $[56] = t26;
  } else {
    t26 = $[56];
  }
  return t26;
}
function _temp5(setOutputPromise_0, shell_0) {
  return setOutputPromise_0(getTaskOutput(shell_0));
}
function ShellOutputContent(t0) {
  const $ = c(19);
  const {
    outputPromise,
    columns
  } = t0;
  const {
    content,
    bytesTotal
  } = use(outputPromise);
  if (!content) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "No output available");
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  let isIncomplete;
  let rendered;
  if ($[1] !== bytesTotal || $[2] !== content) {
    const starts = [];
    let pos = content.length;
    for (let i = 0; i < 10 && pos > 0; i++) {
      const prev = content.lastIndexOf("\n", pos - 1);
      starts.push(prev + 1);
      pos = prev;
    }
    starts.reverse();
    isIncomplete = bytesTotal > content.length;
    rendered = [];
    for (let i_0 = 0; i_0 < starts.length; i_0++) {
      const start = starts[i_0];
      const end = i_0 < starts.length - 1 ? starts[i_0 + 1] - 1 : content.length;
      const line = content.slice(start, end);
      if (line) {
        rendered.push(line);
      }
    }
    $[1] = bytesTotal;
    $[2] = content;
    $[3] = isIncomplete;
    $[4] = rendered;
  } else {
    isIncomplete = $[3];
    rendered = $[4];
  }
  const t1 = columns - 6;
  let t2;
  if ($[5] !== rendered) {
    t2 = rendered.map(_temp22);
    $[5] = rendered;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== t1 || $[8] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { borderStyle: "round", paddingX: 1, flexDirection: "column", height: 12, maxWidth: t1 }, t2);
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  const t4 = `Showing ${rendered.length} lines`;
  let t5;
  if ($[10] !== bytesTotal || $[11] !== isIncomplete) {
    t5 = isIncomplete ? ` of ${formatFileSize(bytesTotal)}` : "";
    $[10] = bytesTotal;
    $[11] = isIncomplete;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] !== t4 || $[14] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, t4, t5);
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== t3 || $[17] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t3, t6);
    $[16] = t3;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
}
function _temp22(line_0, i_1) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_1, wrap: "truncate-end" }, line_0);
}
var SHELL_DETAIL_TAIL_BYTES;
var init_ShellDetailDialog = __esm({
  "src/components/tasks/ShellDetailDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_format();
    init_fsOperations();
    init_diskOutput();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    SHELL_DETAIL_TAIL_BYTES = 8192;
  }
});

// src/components/tasks/WorkflowDetailDialog.tsx
var WorkflowDetailDialog_exports = {};
__export(WorkflowDetailDialog_exports, {
  WorkflowDetailDialog: () => WorkflowDetailDialog
});
function WorkflowDetailDialog() {
  return /* @__PURE__ */ react_default.createElement(
    UnavailablePanel,
    {
      title: "Workflow details unavailable",
      message: "Workflow task details are not implemented in this leaked-src compatibility build."
    }
  );
}
var init_WorkflowDetailDialog = __esm({
  "src/components/tasks/WorkflowDetailDialog.tsx"() {
    init_react();
    init_UnavailablePanel();
  }
});

// src/components/tasks/MonitorMcpDetailDialog.tsx
var MonitorMcpDetailDialog_exports = {};
__export(MonitorMcpDetailDialog_exports, {
  MonitorMcpDetailDialog: () => MonitorMcpDetailDialog
});
function MonitorMcpDetailDialog() {
  return /* @__PURE__ */ react_default.createElement(
    UnavailablePanel,
    {
      title: "Monitor details unavailable",
      message: "Monitor MCP task details are not implemented in this leaked-src compatibility build."
    }
  );
}
var init_MonitorMcpDetailDialog = __esm({
  "src/components/tasks/MonitorMcpDetailDialog.tsx"() {
    init_react();
    init_UnavailablePanel();
  }
});

// src/components/tasks/BackgroundTasksDialog.tsx
function getSelectableBackgroundTasks(tasks, foregroundedTaskId) {
  const backgroundTasks = Object.values(tasks ?? {}).filter(isBackgroundTask);
  return backgroundTasks.filter((task) => !(task.type === "local_agent" && task.id === foregroundedTaskId));
}
function BackgroundTasksDialog({
  onDone,
  toolUseContext,
  initialDetailTaskId
}) {
  const tasks = useAppState((s) => s.tasks);
  const foregroundedTaskId = useAppState((s_0) => s_0.foregroundedTaskId);
  const showSpinnerTree = useAppState((s_1) => s_1.expandedView) === "teammates";
  const setAppState = useSetAppState();
  const killAgentsShortcut = useShortcutDisplay("chat:killAgents", "Chat", "ctrl+x ctrl+k");
  const typedTasks = tasks;
  const skippedListOnMount = useRef(false);
  const [viewState, setViewState] = useState(() => {
    if (initialDetailTaskId) {
      skippedListOnMount.current = true;
      return {
        mode: "detail",
        itemId: initialDetailTaskId
      };
    }
    const allItems = getSelectableBackgroundTasks(typedTasks, foregroundedTaskId);
    if (allItems.length === 1) {
      skippedListOnMount.current = true;
      return {
        mode: "detail",
        itemId: allItems[0].id
      };
    }
    return {
      mode: "list"
    };
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  useRegisterOverlay("background-tasks-dialog");
  const {
    bashTasks,
    remoteSessions,
    agentTasks,
    teammateTasks,
    workflowTasks,
    mcpMonitors,
    dreamTasks: dreamTasks_0,
    allSelectableItems
  } = useMemo(() => {
    const backgroundTasks = Object.values(typedTasks ?? {}).filter(isBackgroundTask);
    const allItems_0 = backgroundTasks.map(toListItem);
    const sorted = allItems_0.sort((a, b) => {
      const aStatus = a.status;
      const bStatus = b.status;
      if (aStatus === "running" && bStatus !== "running") return -1;
      if (aStatus !== "running" && bStatus === "running") return 1;
      const aTime = "task" in a ? a.task.startTime : 0;
      const bTime = "task" in b ? b.task.startTime : 0;
      return bTime - aTime;
    });
    const bash = sorted.filter((item) => item.type === "local_bash");
    const remote = sorted.filter((item_0) => item_0.type === "remote_agent");
    const agent = sorted.filter((item_1) => item_1.type === "local_agent" && item_1.id !== foregroundedTaskId);
    const workflows = sorted.filter((item_2) => item_2.type === "local_workflow");
    const monitorMcp = sorted.filter((item_3) => item_3.type === "monitor_mcp");
    const dreamTasks = sorted.filter((item_4) => item_4.type === "dream");
    const teammates = showSpinnerTree ? [] : sorted.filter((item_5) => item_5.type === "in_process_teammate");
    const leaderItem = teammates.length > 0 ? [{
      id: "__leader__",
      type: "leader",
      label: `@${TEAM_LEAD_NAME}`,
      status: "running"
    }] : [];
    return {
      bashTasks: bash,
      remoteSessions: remote,
      agentTasks: agent,
      workflowTasks: workflows,
      mcpMonitors: monitorMcp,
      dreamTasks,
      teammateTasks: [...leaderItem, ...teammates],
      // Order MUST match JSX render order (teammates \u2192 bash \u2192 monitorMcp \u2192
      // remote \u2192 agent \u2192 workflows \u2192 dream) so \u2193/\u2191 navigation moves the cursor
      // visually downward.
      allSelectableItems: [...leaderItem, ...teammates, ...bash, ...monitorMcp, ...remote, ...agent, ...workflows, ...dreamTasks]
    };
  }, [typedTasks, foregroundedTaskId, showSpinnerTree]);
  const currentSelection = allSelectableItems[selectedIndex] ?? null;
  useKeybindings({
    "confirm:previous": () => setSelectedIndex((prev) => Math.max(0, prev - 1)),
    "confirm:next": () => setSelectedIndex((prev_0) => Math.min(allSelectableItems.length - 1, prev_0 + 1)),
    "confirm:yes": () => {
      const current = allSelectableItems[selectedIndex];
      if (current) {
        if (current.type === "leader") {
          exitTeammateView(setAppState);
          onDone("Viewing leader", {
            display: "system"
          });
        } else {
          setViewState({
            mode: "detail",
            itemId: current.id
          });
        }
      }
    }
  }, {
    context: "Confirmation",
    isActive: viewState.mode === "list"
  });
  const handleKeyDown = (e) => {
    if (viewState.mode !== "list") return;
    if (e.key === "left") {
      e.preventDefault();
      onDone("Background tasks dialog dismissed", {
        display: "system"
      });
      return;
    }
    const currentSelection_0 = allSelectableItems[selectedIndex];
    if (!currentSelection_0) return;
    if (e.key === "x") {
      e.preventDefault();
      if (currentSelection_0.type === "local_bash" && currentSelection_0.status === "running") {
        void killShellTask(currentSelection_0.id);
      } else if (currentSelection_0.type === "local_agent" && currentSelection_0.status === "running") {
        void killAgentTask(currentSelection_0.id);
      } else if (currentSelection_0.type === "in_process_teammate" && currentSelection_0.status === "running") {
        void killTeammateTask(currentSelection_0.id);
      } else if (currentSelection_0.type === "local_workflow" && currentSelection_0.status === "running" && killWorkflowTask) {
        killWorkflowTask(currentSelection_0.id, setAppState);
      } else if (currentSelection_0.type === "monitor_mcp" && currentSelection_0.status === "running" && killMonitorMcp) {
        killMonitorMcp(currentSelection_0.id, setAppState);
      } else if (currentSelection_0.type === "dream" && currentSelection_0.status === "running") {
        void killDreamTask(currentSelection_0.id);
      } else if (currentSelection_0.type === "remote_agent" && currentSelection_0.status === "running") {
        if (currentSelection_0.task.isUltraplan) {
          void stopUltraplan(currentSelection_0.id, currentSelection_0.task.sessionId, setAppState);
        } else {
          void killRemoteAgentTask(currentSelection_0.id);
        }
      }
    }
    if (e.key === "f") {
      if (currentSelection_0.type === "in_process_teammate" && currentSelection_0.status === "running") {
        e.preventDefault();
        enterTeammateView(currentSelection_0.id, setAppState);
        onDone("Viewing teammate", {
          display: "system"
        });
      } else if (currentSelection_0.type === "leader") {
        e.preventDefault();
        exitTeammateView(setAppState);
        onDone("Viewing leader", {
          display: "system"
        });
      }
    }
  };
  async function killShellTask(taskId) {
    await LocalShellTask.kill(taskId, setAppState);
  }
  async function killAgentTask(taskId_0) {
    await LocalAgentTask.kill(taskId_0, setAppState);
  }
  async function killTeammateTask(taskId_1) {
    await InProcessTeammateTask.kill(taskId_1, setAppState);
  }
  async function killDreamTask(taskId_2) {
    await DreamTask.kill(taskId_2, setAppState);
  }
  async function killRemoteAgentTask(taskId_3) {
    await RemoteAgentTask.kill(taskId_3, setAppState);
  }
  const onDoneEvent = useEffectEvent(onDone);
  useEffect(() => {
    if (viewState.mode !== "list") {
      const task = (typedTasks ?? {})[viewState.itemId];
      if (!task || task.type !== "local_workflow" && !isBackgroundTask(task)) {
        if (skippedListOnMount.current) {
          onDoneEvent("Background tasks dialog dismissed", {
            display: "system"
          });
        } else {
          setViewState({
            mode: "list"
          });
        }
      }
    }
    const totalItems = allSelectableItems.length;
    if (selectedIndex >= totalItems && totalItems > 0) {
      setSelectedIndex(totalItems - 1);
    }
  }, [viewState, typedTasks, selectedIndex, allSelectableItems, onDoneEvent]);
  const goBackToList = () => {
    if (skippedListOnMount.current && allSelectableItems.length <= 1) {
      onDone("Background tasks dialog dismissed", {
        display: "system"
      });
    } else {
      skippedListOnMount.current = false;
      setViewState({
        mode: "list"
      });
    }
  };
  if (viewState.mode !== "list" && typedTasks) {
    const task_0 = typedTasks[viewState.itemId];
    if (!task_0) {
      return null;
    }
    switch (task_0.type) {
      case "local_bash":
        return /* @__PURE__ */ react_default.createElement(ShellDetailDialog, { shell: task_0, onDone, onKillShell: () => void killShellTask(task_0.id), onBack: goBackToList, key: `shell-${task_0.id}` });
      case "local_agent":
        return /* @__PURE__ */ react_default.createElement(AsyncAgentDetailDialog, { agent: task_0, onDone, onKillAgent: () => void killAgentTask(task_0.id), onBack: goBackToList, key: `agent-${task_0.id}` });
      case "remote_agent":
        return /* @__PURE__ */ react_default.createElement(RemoteSessionDetailDialog, { session: task_0, onDone, toolUseContext, onBack: goBackToList, onKill: task_0.status !== "running" ? void 0 : task_0.isUltraplan ? () => void stopUltraplan(task_0.id, task_0.sessionId, setAppState) : () => void killRemoteAgentTask(task_0.id), key: `session-${task_0.id}` });
      case "in_process_teammate":
        return /* @__PURE__ */ react_default.createElement(InProcessTeammateDetailDialog, { teammate: task_0, onDone, onKill: task_0.status === "running" ? () => void killTeammateTask(task_0.id) : void 0, onBack: goBackToList, onForeground: task_0.status === "running" ? () => {
          enterTeammateView(task_0.id, setAppState);
          onDone("Viewing teammate", {
            display: "system"
          });
        } : void 0, key: `teammate-${task_0.id}` });
      case "local_workflow":
        if (!WorkflowDetailDialog2) return null;
        return /* @__PURE__ */ react_default.createElement(WorkflowDetailDialog2, { workflow: task_0, onDone, onKill: task_0.status === "running" && killWorkflowTask ? () => killWorkflowTask(task_0.id, setAppState) : void 0, onSkipAgent: task_0.status === "running" && skipWorkflowAgent ? (agentId) => skipWorkflowAgent(task_0.id, agentId, setAppState) : void 0, onRetryAgent: task_0.status === "running" && retryWorkflowAgent ? (agentId_0) => retryWorkflowAgent(task_0.id, agentId_0, setAppState) : void 0, onBack: goBackToList, key: `workflow-${task_0.id}` });
      case "monitor_mcp":
        if (!MonitorMcpDetailDialog2) return null;
        return /* @__PURE__ */ react_default.createElement(MonitorMcpDetailDialog2, { task: task_0, onKill: task_0.status === "running" && killMonitorMcp ? () => killMonitorMcp(task_0.id, setAppState) : void 0, onBack: goBackToList, key: `monitor-mcp-${task_0.id}` });
      case "dream":
        return /* @__PURE__ */ react_default.createElement(DreamDetailDialog, { task: task_0, onDone: () => onDone("Background tasks dialog dismissed", {
          display: "system"
        }), onBack: goBackToList, onKill: task_0.status === "running" ? () => void killDreamTask(task_0.id) : void 0, key: `dream-${task_0.id}` });
    }
  }
  const runningBashCount = count(bashTasks, (_) => _.status === "running");
  const runningAgentCount = count(remoteSessions, (__0) => __0.status === "running" || __0.status === "pending") + count(agentTasks, (__1) => __1.status === "running");
  const runningTeammateCount = count(teammateTasks, (__2) => __2.status === "running");
  const subtitle = intersperse([...runningTeammateCount > 0 ? [/* @__PURE__ */ react_default.createElement(ThemedText, { key: "teammates" }, runningTeammateCount, " ", runningTeammateCount !== 1 ? "agents" : "agent")] : [], ...runningBashCount > 0 ? [/* @__PURE__ */ react_default.createElement(ThemedText, { key: "shells" }, runningBashCount, " ", runningBashCount !== 1 ? "active shells" : "active shell")] : [], ...runningAgentCount > 0 ? [/* @__PURE__ */ react_default.createElement(ThemedText, { key: "agents" }, runningAgentCount, " ", runningAgentCount !== 1 ? "active agents" : "active agent")] : []], (index) => /* @__PURE__ */ react_default.createElement(ThemedText, { key: `separator-${index}` }, " \xB7 "));
  const actions = [/* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "upDown", shortcut: "\u2191/\u2193", action: "select" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "enter", shortcut: "Enter", action: "view" }), ...currentSelection?.type === "in_process_teammate" && currentSelection.status === "running" ? [/* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "foreground", shortcut: "f", action: "foreground" })] : [], ...(currentSelection?.type === "local_bash" || currentSelection?.type === "local_agent" || currentSelection?.type === "in_process_teammate" || currentSelection?.type === "local_workflow" || currentSelection?.type === "monitor_mcp" || currentSelection?.type === "dream" || currentSelection?.type === "remote_agent") && currentSelection.status === "running" ? [/* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "kill", shortcut: "x", action: "stop" })] : [], ...agentTasks.some((t) => t.status === "running") ? [/* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "kill-all", shortcut: killAgentsShortcut, action: "stop all agents" })] : [], /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { key: "esc", shortcut: "\u2190/Esc", action: "close" })];
  const handleCancel = () => onDone("Background tasks dialog dismissed", {
    display: "system"
  });
  function renderInputGuide(exitState) {
    if (exitState.pending) {
      return /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit");
    }
    return /* @__PURE__ */ react_default.createElement(Byline, null, actions);
  }
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, /* @__PURE__ */ react_default.createElement(Dialog, { title: "Background tasks", subtitle: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, subtitle), onCancel: handleCancel, color: "background", inputGuide: renderInputGuide }, allSelectableItems.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "No tasks currently running") : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, teammateTasks.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, (bashTasks.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0) && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Agents"), " (", count(teammateTasks, (i) => i.type !== "leader"), ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(TeammateTaskGroups, { teammateTasks, currentSelectionId: currentSelection?.id }))), bashTasks.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 ? 1 : 0 }, (teammateTasks.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0) && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Shells"), " (", bashTasks.length, ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, bashTasks.map((item_6) => /* @__PURE__ */ react_default.createElement(Item, { key: item_6.id, item: item_6, isSelected: item_6.id === currentSelection?.id })))), mcpMonitors.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 || bashTasks.length > 0 ? 1 : 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Monitors"), " (", mcpMonitors.length, ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, mcpMonitors.map((item_7) => /* @__PURE__ */ react_default.createElement(Item, { key: item_7.id, item: item_7, isSelected: item_7.id === currentSelection?.id })))), remoteSessions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 ? 1 : 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Remote agents"), " (", remoteSessions.length, ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, remoteSessions.map((item_8) => /* @__PURE__ */ react_default.createElement(Item, { key: item_8.id, item: item_8, isSelected: item_8.id === currentSelection?.id })))), agentTasks.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 ? 1 : 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Local agents"), " (", agentTasks.length, ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, agentTasks.map((item_9) => /* @__PURE__ */ react_default.createElement(Item, { key: item_9.id, item: item_9, isSelected: item_9.id === currentSelection?.id })))), workflowTasks.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0 ? 1 : 0 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "  ", "Workflows"), " (", workflowTasks.length, ")"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, workflowTasks.map((item_10) => /* @__PURE__ */ react_default.createElement(Item, { key: item_10.id, item: item_10, isSelected: item_10.id === currentSelection?.id })))), dreamTasks_0.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0 || workflowTasks.length > 0 ? 1 : 0 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, dreamTasks_0.map((item_11) => /* @__PURE__ */ react_default.createElement(Item, { key: item_11.id, item: item_11, isSelected: item_11.id === currentSelection?.id })))))));
}
function toListItem(task) {
  switch (task.type) {
    case "local_bash":
      return {
        id: task.id,
        type: "local_bash",
        label: task.kind === "monitor" ? task.description : task.command,
        status: task.status,
        task
      };
    case "remote_agent":
      return {
        id: task.id,
        type: "remote_agent",
        label: task.title,
        status: task.status,
        task
      };
    case "local_agent":
      return {
        id: task.id,
        type: "local_agent",
        label: task.description,
        status: task.status,
        task
      };
    case "in_process_teammate":
      return {
        id: task.id,
        type: "in_process_teammate",
        label: `@${task.identity.agentName}`,
        status: task.status,
        task
      };
    case "local_workflow":
      return {
        id: task.id,
        type: "local_workflow",
        label: task.summary ?? task.description,
        status: task.status,
        task
      };
    case "monitor_mcp":
      return {
        id: task.id,
        type: "monitor_mcp",
        label: task.description,
        status: task.status,
        task
      };
    case "dream":
      return {
        id: task.id,
        type: "dream",
        label: task.description,
        status: task.status,
        task
      };
  }
}
function Item(t0) {
  const $ = c(14);
  const {
    item,
    isSelected
  } = t0;
  const {
    columns
  } = useTerminalSize();
  const maxActivityWidth = Math.max(30, columns - 26);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = isCoordinatorMode();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const useGreyPointer = t1;
  const t2 = useGreyPointer && isSelected;
  const t3 = isSelected ? figures_default.pointer + " " : "  ";
  let t4;
  if ($[1] !== t2 || $[2] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: t2 }, t3);
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  const t5 = isSelected && !useGreyPointer ? "suggestion" : void 0;
  let t6;
  if ($[4] !== item.task || $[5] !== item.type || $[6] !== maxActivityWidth) {
    t6 = item.type === "leader" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "@", TEAM_LEAD_NAME) : /* @__PURE__ */ react_default.createElement(BackgroundTask, { task: item.task, maxActivityWidth });
    $[4] = item.task;
    $[5] = item.type;
    $[6] = maxActivityWidth;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  let t7;
  if ($[8] !== t5 || $[9] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: t5 }, t6);
    $[8] = t5;
    $[9] = t6;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t4 || $[12] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, t4, t7);
    $[11] = t4;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  return t8;
}
function TeammateTaskGroups(t0) {
  const $ = c(3);
  const {
    teammateTasks,
    currentSelectionId
  } = t0;
  let t1;
  if ($[0] !== currentSelectionId || $[1] !== teammateTasks) {
    const leaderItems = teammateTasks.filter(_temp6);
    const teammateItems = teammateTasks.filter(_temp23);
    const teams = /* @__PURE__ */ new Map();
    for (const item of teammateItems) {
      const teamName = item.task.identity.teamName;
      const group = teams.get(teamName);
      if (group) {
        group.push(item);
      } else {
        teams.set(teamName, [item]);
      }
    }
    const teamEntries = [...teams.entries()];
    t1 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, teamEntries.map((t2) => {
      const [teamName_0, items] = t2;
      const memberCount = items.length + leaderItems.length;
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: teamName_0, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "Team: ", teamName_0, " (", memberCount, ")"), leaderItems.map((item_0) => /* @__PURE__ */ react_default.createElement(Item, { key: `${item_0.id}-${teamName_0}`, item: item_0, isSelected: item_0.id === currentSelectionId })), items.map((item_1) => /* @__PURE__ */ react_default.createElement(Item, { key: item_1.id, item: item_1, isSelected: item_1.id === currentSelectionId })));
    }));
    $[0] = currentSelectionId;
    $[1] = teammateTasks;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
function _temp23(i_0) {
  return i_0.type === "in_process_teammate";
}
function _temp6(i) {
  return i.type === "leader";
}
var WorkflowDetailDialog2, workflowTaskModule, killWorkflowTask, skipWorkflowAgent, retryWorkflowAgent, monitorMcpModule, killMonitorMcp, MonitorMcpDetailDialog2;
var init_BackgroundTasksDialog = __esm({
  "src/components/tasks/BackgroundTasksDialog.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_figures();
    init_react();
    init_coordinatorMode();
    init_useTerminalSize();
    init_AppState();
    init_teammateViewHelpers();
    init_DreamTask();
    init_InProcessTeammateTask();
    init_LocalAgentTask();
    init_LocalShellTask();
    init_RemoteAgentTask();
    init_types();
    init_array();
    init_constants3();
    init_ultraplan();
    init_overlayContext();
    init_ink();
    init_useKeybinding();
    init_useShortcutDisplay();
    init_array();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_AsyncAgentDetailDialog();
    init_BackgroundTask();
    init_DreamDetailDialog();
    init_InProcessTeammateDetailDialog();
    init_RemoteSessionDetailDialog();
    init_ShellDetailDialog();
    WorkflowDetailDialog2 = feature("WORKFLOW_SCRIPTS") ? (init_WorkflowDetailDialog(), __toCommonJS(WorkflowDetailDialog_exports)).WorkflowDetailDialog : null;
    workflowTaskModule = feature("WORKFLOW_SCRIPTS") ? (init_LocalWorkflowTask(), __toCommonJS(LocalWorkflowTask_exports)) : null;
    killWorkflowTask = workflowTaskModule?.killWorkflowTask ?? null;
    skipWorkflowAgent = workflowTaskModule?.skipWorkflowAgent ?? null;
    retryWorkflowAgent = workflowTaskModule?.retryWorkflowAgent ?? null;
    monitorMcpModule = feature("MONITOR_TOOL") ? (init_MonitorMcpTask(), __toCommonJS(MonitorMcpTask_exports)) : null;
    killMonitorMcp = monitorMcpModule?.killMonitorMcp ?? null;
    MonitorMcpDetailDialog2 = feature("MONITOR_TOOL") ? (init_MonitorMcpDetailDialog(), __toCommonJS(MonitorMcpDetailDialog_exports)).MonitorMcpDetailDialog : null;
  }
});

export {
  enterTeammateView,
  exitTeammateView,
  stopOrDismissAgent,
  init_teammateViewHelpers,
  shouldHideTasksFooter,
  init_taskStatusUtils,
  BackgroundTasksDialog,
  init_BackgroundTasksDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3N0YXRlL3RlYW1tYXRlVmlld0hlbHBlcnMudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFza3MvcmVuZGVyVG9vbEFjdGl2aXR5LnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrU3RhdHVzVXRpbHMudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3Rhc2tzL0FzeW5jQWdlbnREZXRhaWxEaWFsb2cudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3Rhc2tzL1JlbW90ZVNlc3Npb25Qcm9ncmVzcy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFza3MvU2hlbGxQcm9ncmVzcy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFza3MvQmFja2dyb3VuZFRhc2sudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3Rhc2tzL0RyZWFtRGV0YWlsRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy90YXNrcy9JblByb2Nlc3NUZWFtbWF0ZURldGFpbERpYWxvZy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFza3MvUmVtb3RlU2Vzc2lvbkRldGFpbERpYWxvZy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFza3MvU2hlbGxEZXRhaWxEaWFsb2cudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3Rhc2tzL1dvcmtmbG93RGV0YWlsRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy90YXNrcy9Nb25pdG9yTWNwRGV0YWlsRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy90YXNrcy9CYWNrZ3JvdW5kVGFza3NEaWFsb2cudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGlzVGVybWluYWxUYXNrU3RhdHVzIH0gZnJvbSAnLi4vVGFzay5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxBZ2VudFRhc2tTdGF0ZSB9IGZyb20gJy4uL3Rhc2tzL0xvY2FsQWdlbnRUYXNrL0xvY2FsQWdlbnRUYXNrLmpzJ1xuXG4vLyBJbmxpbmVkIGZyb20gZnJhbWV3b3JrLnRzIFx1MjAxNCBpbXBvcnRpbmcgY3JlYXRlcyBhIGN5Y2xlIHRocm91Z2hcbi8vIEJhY2tncm91bmRUYXNrc0RpYWxvZy4gS2VlcCBpbiBzeW5jIHdpdGggUEFORUxfR1JBQ0VfTVMgdGhlcmUuXG5jb25zdCBQQU5FTF9HUkFDRV9NUyA9IDMwXzAwMFxuXG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlIH0gZnJvbSAnLi9BcHBTdGF0ZS5qcydcblxuLy8gSW5saW5lIHR5cGUgY2hlY2sgaW5zdGVhZCBvZiBpbXBvcnRpbmcgaXNMb2NhbEFnZW50VGFzayBcdTIwMTQgYnJlYWtzIHRoZVxuLy8gdGVhbW1hdGVWaWV3SGVscGVycyBcdTIxOTIgTG9jYWxBZ2VudFRhc2sgcnVudGltZSBlZGdlIHRoYXQgY3JlYXRlcyBhIGN5Y2xlXG4vLyB0aHJvdWdoIEJhY2tncm91bmRUYXNrc0RpYWxvZy5cbmZ1bmN0aW9uIGlzTG9jYWxBZ2VudCh0YXNrOiB1bmtub3duKTogdGFzayBpcyBMb2NhbEFnZW50VGFza1N0YXRlIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdGFzayA9PT0gJ29iamVjdCcgJiZcbiAgICB0YXNrICE9PSBudWxsICYmXG4gICAgJ3R5cGUnIGluIHRhc2sgJiZcbiAgICB0YXNrLnR5cGUgPT09ICdsb2NhbF9hZ2VudCdcbiAgKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgdGFzayByZWxlYXNlZCBiYWNrIHRvIHN0dWIgZm9ybTogcmV0YWluIGRyb3BwZWQsIG1lc3NhZ2VzXG4gKiBjbGVhcmVkLCBldmljdEFmdGVyIHNldCBpZiB0ZXJtaW5hbC4gU2hhcmVkIGJ5IGV4aXRUZWFtbWF0ZVZpZXcgYW5kXG4gKiB0aGUgc3dpdGNoLWF3YXkgcGF0aCBpbiBlbnRlclRlYW1tYXRlVmlldy5cbiAqL1xuZnVuY3Rpb24gcmVsZWFzZSh0YXNrOiBMb2NhbEFnZW50VGFza1N0YXRlKTogTG9jYWxBZ2VudFRhc2tTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgLi4udGFzayxcbiAgICByZXRhaW46IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiB1bmRlZmluZWQsXG4gICAgZGlza0xvYWRlZDogZmFsc2UsXG4gICAgZXZpY3RBZnRlcjogaXNUZXJtaW5hbFRhc2tTdGF0dXModGFzay5zdGF0dXMpXG4gICAgICA/IERhdGUubm93KCkgKyBQQU5FTF9HUkFDRV9NU1xuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2l0aW9ucyB0aGUgVUkgdG8gdmlldyBhIHRlYW1tYXRlJ3MgdHJhbnNjcmlwdC5cbiAqIFNldHMgdmlld2luZ0FnZW50VGFza0lkIGFuZCwgZm9yIGxvY2FsX2FnZW50LCByZXRhaW46IHRydWUgKGJsb2NrcyBldmljdGlvbixcbiAqIGVuYWJsZXMgc3RyZWFtLWFwcGVuZCwgdHJpZ2dlcnMgZGlzayBib290c3RyYXApIGFuZCBjbGVhcnMgZXZpY3RBZnRlci5cbiAqIElmIHN3aXRjaGluZyBmcm9tIGFub3RoZXIgYWdlbnQsIHJlbGVhc2VzIHRoZSBwcmV2aW91cyBvbmUgYmFjayB0byBzdHViLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJUZWFtbWF0ZVZpZXcoXG4gIHRhc2tJZDogc3RyaW5nLFxuICBzZXRBcHBTdGF0ZTogKHVwZGF0ZXI6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHZvaWQsXG4pOiB2b2lkIHtcbiAgbG9nRXZlbnQoJ3Rlbmd1X3RyYW5zY3JpcHRfdmlld19lbnRlcicsIHt9KVxuICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICBjb25zdCB0YXNrID0gcHJldi50YXNrc1t0YXNrSWRdXG4gICAgY29uc3QgcHJldklkID0gcHJldi52aWV3aW5nQWdlbnRUYXNrSWRcbiAgICBjb25zdCBwcmV2VGFzayA9IHByZXZJZCAhPT0gdW5kZWZpbmVkID8gcHJldi50YXNrc1twcmV2SWRdIDogdW5kZWZpbmVkXG4gICAgY29uc3Qgc3dpdGNoaW5nID1cbiAgICAgIHByZXZJZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBwcmV2SWQgIT09IHRhc2tJZCAmJlxuICAgICAgaXNMb2NhbEFnZW50KHByZXZUYXNrKSAmJlxuICAgICAgcHJldlRhc2sucmV0YWluXG4gICAgY29uc3QgbmVlZHNSZXRhaW4gPVxuICAgICAgaXNMb2NhbEFnZW50KHRhc2spICYmICghdGFzay5yZXRhaW4gfHwgdGFzay5ldmljdEFmdGVyICE9PSB1bmRlZmluZWQpXG4gICAgY29uc3QgbmVlZHNWaWV3ID1cbiAgICAgIHByZXYudmlld2luZ0FnZW50VGFza0lkICE9PSB0YXNrSWQgfHxcbiAgICAgIHByZXYudmlld1NlbGVjdGlvbk1vZGUgIT09ICd2aWV3aW5nLWFnZW50J1xuICAgIGlmICghbmVlZHNSZXRhaW4gJiYgIW5lZWRzVmlldyAmJiAhc3dpdGNoaW5nKSByZXR1cm4gcHJldlxuICAgIGxldCB0YXNrcyA9IHByZXYudGFza3NcbiAgICBpZiAoc3dpdGNoaW5nIHx8IG5lZWRzUmV0YWluKSB7XG4gICAgICB0YXNrcyA9IHsgLi4ucHJldi50YXNrcyB9XG4gICAgICBpZiAoc3dpdGNoaW5nKSB0YXNrc1twcmV2SWRdID0gcmVsZWFzZShwcmV2VGFzaylcbiAgICAgIGlmIChuZWVkc1JldGFpbikge1xuICAgICAgICB0YXNrc1t0YXNrSWRdID0geyAuLi50YXNrLCByZXRhaW46IHRydWUsIGV2aWN0QWZ0ZXI6IHVuZGVmaW5lZCB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmV2LFxuICAgICAgdmlld2luZ0FnZW50VGFza0lkOiB0YXNrSWQsXG4gICAgICB2aWV3U2VsZWN0aW9uTW9kZTogJ3ZpZXdpbmctYWdlbnQnLFxuICAgICAgdGFza3MsXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIEV4aXQgdGVhbW1hdGUgdHJhbnNjcmlwdCB2aWV3IGFuZCByZXR1cm4gdG8gbGVhZGVyJ3Mgdmlldy5cbiAqIERyb3BzIHJldGFpbiBhbmQgY2xlYXJzIG1lc3NhZ2VzIGJhY2sgdG8gc3R1YiBmb3JtOyBpZiB0ZXJtaW5hbCxcbiAqIHNjaGVkdWxlcyBldmljdGlvbiB2aWEgZXZpY3RBZnRlciBzbyB0aGUgcm93IGxpbmdlcnMgYnJpZWZseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXRUZWFtbWF0ZVZpZXcoXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbik6IHZvaWQge1xuICBsb2dFdmVudCgndGVuZ3VfdHJhbnNjcmlwdF92aWV3X2V4aXQnLCB7fSlcbiAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgY29uc3QgaWQgPSBwcmV2LnZpZXdpbmdBZ2VudFRhc2tJZFxuICAgIGNvbnN0IGNsZWFyZWQgPSB7XG4gICAgICAuLi5wcmV2LFxuICAgICAgdmlld2luZ0FnZW50VGFza0lkOiB1bmRlZmluZWQsXG4gICAgICB2aWV3U2VsZWN0aW9uTW9kZTogJ25vbmUnIGFzIGNvbnN0LFxuICAgIH1cbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXYudmlld1NlbGVjdGlvbk1vZGUgPT09ICdub25lJyA/IHByZXYgOiBjbGVhcmVkXG4gICAgfVxuICAgIGNvbnN0IHRhc2sgPSBwcmV2LnRhc2tzW2lkXVxuICAgIGlmICghaXNMb2NhbEFnZW50KHRhc2spIHx8ICF0YXNrLnJldGFpbikgcmV0dXJuIGNsZWFyZWRcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2xlYXJlZCxcbiAgICAgIHRhc2tzOiB7IC4uLnByZXYudGFza3MsIFtpZF06IHJlbGVhc2UodGFzaykgfSxcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogQ29udGV4dC1zZW5zaXRpdmUgeDogcnVubmluZyBcdTIxOTIgYWJvcnQsIHRlcm1pbmFsIFx1MjE5MiBkaXNtaXNzLlxuICogRGlzbWlzcyBzZXRzIGV2aWN0QWZ0ZXI9MCBzbyB0aGUgZmlsdGVyIGhpZGVzIGltbWVkaWF0ZWx5LlxuICogSWYgdmlld2luZyB0aGUgZGlzbWlzc2VkIGFnZW50LCBhbHNvIGV4aXRzIHRvIGxlYWRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BPckRpc21pc3NBZ2VudChcbiAgdGFza0lkOiBzdHJpbmcsXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbik6IHZvaWQge1xuICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICBjb25zdCB0YXNrID0gcHJldi50YXNrc1t0YXNrSWRdXG4gICAgaWYgKCFpc0xvY2FsQWdlbnQodGFzaykpIHJldHVybiBwcmV2XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSAncnVubmluZycpIHtcbiAgICAgIHRhc2suYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgICByZXR1cm4gcHJldlxuICAgIH1cbiAgICBpZiAodGFzay5ldmljdEFmdGVyID09PSAwKSByZXR1cm4gcHJldlxuICAgIGNvbnN0IHZpZXdpbmdUaGlzID0gcHJldi52aWV3aW5nQWdlbnRUYXNrSWQgPT09IHRhc2tJZFxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcmV2LFxuICAgICAgdGFza3M6IHtcbiAgICAgICAgLi4ucHJldi50YXNrcyxcbiAgICAgICAgW3Rhc2tJZF06IHsgLi4ucmVsZWFzZSh0YXNrKSwgZXZpY3RBZnRlcjogMCB9LFxuICAgICAgfSxcbiAgICAgIC4uLih2aWV3aW5nVGhpcyAmJiB7XG4gICAgICAgIHZpZXdpbmdBZ2VudFRhc2tJZDogdW5kZWZpbmVkLFxuICAgICAgICB2aWV3U2VsZWN0aW9uTW9kZTogJ25vbmUnLFxuICAgICAgfSksXG4gICAgfVxuICB9KVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IGZpbmRUb29sQnlOYW1lIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgVG9vbEFjdGl2aXR5IH0gZnJvbSAnLi4vLi4vdGFza3MvTG9jYWxBZ2VudFRhc2svTG9jYWxBZ2VudFRhc2suanMnXG5pbXBvcnQgdHlwZSB7IFRoZW1lTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RoZW1lLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9vbEFjdGl2aXR5KFxuICBhY3Rpdml0eTogVG9vbEFjdGl2aXR5LFxuICB0b29sczogVG9vbHMsXG4gIHRoZW1lOiBUaGVtZU5hbWUsXG4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB0b29sID0gZmluZFRvb2xCeU5hbWUodG9vbHMsIGFjdGl2aXR5LnRvb2xOYW1lKVxuICBpZiAoIXRvb2wpIHtcbiAgICByZXR1cm4gYWN0aXZpdHkudG9vbE5hbWVcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRvb2wuaW5wdXRTY2hlbWEuc2FmZVBhcnNlKGFjdGl2aXR5LmlucHV0KVxuICAgIGNvbnN0IHBhcnNlZElucHV0ID0gcGFyc2VkLnN1Y2Nlc3MgPyBwYXJzZWQuZGF0YSA6IHt9XG4gICAgY29uc3QgdXNlckZhY2luZ05hbWUgPSB0b29sLnVzZXJGYWNpbmdOYW1lKHBhcnNlZElucHV0KVxuICAgIGlmICghdXNlckZhY2luZ05hbWUpIHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS50b29sTmFtZVxuICAgIH1cbiAgICBjb25zdCB0b29sQXJncyA9IHRvb2wucmVuZGVyVG9vbFVzZU1lc3NhZ2UocGFyc2VkSW5wdXQsIHtcbiAgICAgIHRoZW1lLFxuICAgICAgdmVyYm9zZTogZmFsc2UsXG4gICAgfSlcbiAgICBpZiAodG9vbEFyZ3MpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHt1c2VyRmFjaW5nTmFtZX0oe3Rvb2xBcmdzfSlcbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdXNlckZhY2luZ05hbWVcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGFjdGl2aXR5LnRvb2xOYW1lXG4gIH1cbn1cbiIsICIvKipcbiAqIFNoYXJlZCB1dGlsaXRpZXMgZm9yIGRpc3BsYXlpbmcgdGFzayBzdGF0dXMgYWNyb3NzIGRpZmZlcmVudCB0YXNrIHR5cGVzLlxuICovXG5cbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgdHlwZSB7IFRhc2tTdGF0dXMgfSBmcm9tICdzcmMvVGFzay5qcydcbmltcG9ydCB0eXBlIHsgSW5Qcm9jZXNzVGVhbW1hdGVUYXNrU3RhdGUgfSBmcm9tICdzcmMvdGFza3MvSW5Qcm9jZXNzVGVhbW1hdGVUYXNrL3R5cGVzLmpzJ1xuaW1wb3J0IHsgaXNQYW5lbEFnZW50VGFzayB9IGZyb20gJ3NyYy90YXNrcy9Mb2NhbEFnZW50VGFzay9Mb2NhbEFnZW50VGFzay5qcydcbmltcG9ydCB7IGlzQmFja2dyb3VuZFRhc2ssIHR5cGUgVGFza1N0YXRlIH0gZnJvbSAnc3JjL3Rhc2tzL3R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBEZWVwSW1tdXRhYmxlIH0gZnJvbSAnc3JjL3R5cGVzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgc3VtbWFyaXplUmVjZW50QWN0aXZpdGllcyB9IGZyb20gJ3NyYy91dGlscy9jb2xsYXBzZVJlYWRTZWFyY2guanMnXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB0YXNrIHN0YXR1cyByZXByZXNlbnRzIGEgdGVybWluYWwgKGZpbmlzaGVkKSBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGVybWluYWxTdGF0dXMoc3RhdHVzOiBUYXNrU3RhdHVzKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdGF0dXMgPT09ICdjb21wbGV0ZWQnIHx8IHN0YXR1cyA9PT0gJ2ZhaWxlZCcgfHwgc3RhdHVzID09PSAna2lsbGVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIGljb24gZm9yIGEgdGFzayBiYXNlZCBvbiBzdGF0dXMgYW5kIHN0YXRlIGZsYWdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1N0YXR1c0ljb24oXG4gIHN0YXR1czogVGFza1N0YXR1cyxcbiAgb3B0aW9ucz86IHtcbiAgICBpc0lkbGU/OiBib29sZWFuXG4gICAgYXdhaXRpbmdBcHByb3ZhbD86IGJvb2xlYW5cbiAgICBoYXNFcnJvcj86IGJvb2xlYW5cbiAgICBzaHV0ZG93blJlcXVlc3RlZD86IGJvb2xlYW5cbiAgfSxcbik6IHN0cmluZyB7XG4gIGNvbnN0IHsgaXNJZGxlLCBhd2FpdGluZ0FwcHJvdmFsLCBoYXNFcnJvciwgc2h1dGRvd25SZXF1ZXN0ZWQgfSA9XG4gICAgb3B0aW9ucyA/PyB7fVxuXG4gIGlmIChoYXNFcnJvcikgcmV0dXJuIGZpZ3VyZXMuY3Jvc3NcbiAgaWYgKGF3YWl0aW5nQXBwcm92YWwpIHJldHVybiBmaWd1cmVzLnF1ZXN0aW9uTWFya1ByZWZpeFxuICBpZiAoc2h1dGRvd25SZXF1ZXN0ZWQpIHJldHVybiBmaWd1cmVzLndhcm5pbmdcblxuICBpZiAoc3RhdHVzID09PSAncnVubmluZycpIHtcbiAgICBpZiAoaXNJZGxlKSByZXR1cm4gZmlndXJlcy5lbGxpcHNpc1xuICAgIHJldHVybiBmaWd1cmVzLnBsYXlcbiAgfVxuICBpZiAoc3RhdHVzID09PSAnY29tcGxldGVkJykgcmV0dXJuIGZpZ3VyZXMudGlja1xuICBpZiAoc3RhdHVzID09PSAnZmFpbGVkJyB8fCBzdGF0dXMgPT09ICdraWxsZWQnKSByZXR1cm4gZmlndXJlcy5jcm9zc1xuICByZXR1cm4gZmlndXJlcy5idWxsZXRcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBzZW1hbnRpYyBjb2xvciBmb3IgYSB0YXNrIGJhc2VkIG9uIHN0YXR1cyBhbmQgc3RhdGUgZmxhZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrU3RhdHVzQ29sb3IoXG4gIHN0YXR1czogVGFza1N0YXR1cyxcbiAgb3B0aW9ucz86IHtcbiAgICBpc0lkbGU/OiBib29sZWFuXG4gICAgYXdhaXRpbmdBcHByb3ZhbD86IGJvb2xlYW5cbiAgICBoYXNFcnJvcj86IGJvb2xlYW5cbiAgICBzaHV0ZG93blJlcXVlc3RlZD86IGJvb2xlYW5cbiAgfSxcbik6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnYmFja2dyb3VuZCcge1xuICBjb25zdCB7IGlzSWRsZSwgYXdhaXRpbmdBcHByb3ZhbCwgaGFzRXJyb3IsIHNodXRkb3duUmVxdWVzdGVkIH0gPVxuICAgIG9wdGlvbnMgPz8ge31cblxuICBpZiAoaGFzRXJyb3IpIHJldHVybiAnZXJyb3InXG4gIGlmIChhd2FpdGluZ0FwcHJvdmFsKSByZXR1cm4gJ3dhcm5pbmcnXG4gIGlmIChzaHV0ZG93blJlcXVlc3RlZCkgcmV0dXJuICd3YXJuaW5nJ1xuICBpZiAoaXNJZGxlKSByZXR1cm4gJ2JhY2tncm91bmQnXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHJldHVybiAnc3VjY2VzcydcbiAgaWYgKHN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHJldHVybiAnZXJyb3InXG4gIGlmIChzdGF0dXMgPT09ICdraWxsZWQnKSByZXR1cm4gJ3dhcm5pbmcnXG4gIHJldHVybiAnYmFja2dyb3VuZCdcbn1cblxuLyoqXG4gKiBEZXJpdmVzIGEgaHVtYW4tcmVhZGFibGUgYWN0aXZpdHkgc3RyaW5nIGZvciBhbiBpbi1wcm9jZXNzIHRlYW1tYXRlLFxuICogYWNjb3VudGluZyBmb3Igc2h1dGRvd24vYXBwcm92YWwvaWRsZSBzdGF0ZXMgYW5kIGZhbGxpbmcgYmFjayB0aHJvdWdoXG4gKiByZWNlbnQtYWN0aXZpdHkgc3VtbWFyeSDihpIgbGFzdCBhY3Rpdml0eSBkZXNjcmlwdGlvbiDihpIgJ3dvcmtpbmcnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVUZWFtbWF0ZUFjdGl2aXR5KFxuICB0OiBEZWVwSW1tdXRhYmxlPEluUHJvY2Vzc1RlYW1tYXRlVGFza1N0YXRlPixcbik6IHN0cmluZyB7XG4gIGlmICh0LnNodXRkb3duUmVxdWVzdGVkKSByZXR1cm4gJ3N0b3BwaW5nJ1xuICBpZiAodC5hd2FpdGluZ1BsYW5BcHByb3ZhbCkgcmV0dXJuICdhd2FpdGluZyBhcHByb3ZhbCdcbiAgaWYgKHQuaXNJZGxlKSByZXR1cm4gJ2lkbGUnXG4gIHJldHVybiAoXG4gICAgKHQucHJvZ3Jlc3M/LnJlY2VudEFjdGl2aXRpZXMgJiZcbiAgICAgIHN1bW1hcml6ZVJlY2VudEFjdGl2aXRpZXModC5wcm9ncmVzcy5yZWNlbnRBY3Rpdml0aWVzKSkgPz9cbiAgICB0LnByb2dyZXNzPy5sYXN0QWN0aXZpdHk/LmFjdGl2aXR5RGVzY3JpcHRpb24gPz9cbiAgICAnd29ya2luZydcbiAgKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSB3aGVuIEJhY2tncm91bmRUYXNrU3RhdHVzIHdvdWxkIHJlbmRlciBub3RoaW5nIGJlY2F1c2UgdGhlXG4gKiBzcGlubmVyIHRyZWUgaXMgYWN0aXZlIGFuZCBldmVyeSB2aXNpYmxlIGJhY2tncm91bmQgdGFzayBpcyBhbiBpbi1wcm9jZXNzXG4gKiB0ZWFtbWF0ZSAodGVhbW1hdGVzIGFyZSBzaG93biBpbiB0aGUgc3Bpbm5lciB0cmVlIGluc3RlYWQpLlxuICpcbiAqIFVzZXMgdGhlIHNhbWUgdGFzayBmaWx0ZXJpbmcgYXMgQmFja2dyb3VuZFRhc2tTdGF0dXM6IGBpc0JhY2tncm91bmRUYXNrKClgXG4gKiBwbHVzIGV4Y2x1c2lvbiBvZiBwYW5lbC1tYW5hZ2VkIGFnZW50IHRhc2tzIGZvciBhbnRzICh0aG9zZSBhcmUgc2hvd25cbiAqIGJ5IENvb3JkaW5hdG9yVGFza1BhbmVsKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEhpZGVUYXNrc0Zvb3RlcihcbiAgdGFza3M6IHsgW3Rhc2tJZDogc3RyaW5nXTogVGFza1N0YXRlIH0sXG4gIHNob3dTcGlubmVyVHJlZTogYm9vbGVhbixcbik6IGJvb2xlYW4ge1xuICBpZiAoIXNob3dTcGlubmVyVHJlZSkgcmV0dXJuIGZhbHNlXG4gIGxldCBoYXNWaXNpYmxlVGFzayA9IGZhbHNlXG4gIGZvciAoY29uc3QgdCBvZiBPYmplY3QudmFsdWVzKHRhc2tzKSBhcyBUYXNrU3RhdGVbXSkge1xuICAgIGlmIChcbiAgICAgICFpc0JhY2tncm91bmRUYXNrKHQpIHx8XG4gICAgICAoXCJleHRlcm5hbFwiID09PSAnYW50JyAmJiBpc1BhbmVsQWdlbnRUYXNrKHQpKVxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaGFzVmlzaWJsZVRhc2sgPSB0cnVlXG4gICAgaWYgKHQudHlwZSAhPT0gJ2luX3Byb2Nlc3NfdGVhbW1hdGUnKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gaGFzVmlzaWJsZVRhc2tcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBEZWVwSW1tdXRhYmxlIH0gZnJvbSAnc3JjL3R5cGVzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgdXNlRWxhcHNlZFRpbWUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VFbGFwc2VkVGltZS5qcydcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEFnZW50VGFza1N0YXRlIH0gZnJvbSAnLi4vLi4vdGFza3MvTG9jYWxBZ2VudFRhc2svTG9jYWxBZ2VudFRhc2suanMnXG5pbXBvcnQgeyBnZXRUb29scyB9IGZyb20gJy4uLy4uL3Rvb2xzLmpzJ1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFRhZyB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFVzZXJQbGFuTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2VzL1VzZXJQbGFuTWVzc2FnZS5qcydcbmltcG9ydCB7IHJlbmRlclRvb2xBY3Rpdml0eSB9IGZyb20gJy4vcmVuZGVyVG9vbEFjdGl2aXR5LmpzJ1xuaW1wb3J0IHsgZ2V0VGFza1N0YXR1c0NvbG9yLCBnZXRUYXNrU3RhdHVzSWNvbiB9IGZyb20gJy4vdGFza1N0YXR1c1V0aWxzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBhZ2VudDogRGVlcEltbXV0YWJsZTxMb2NhbEFnZW50VGFza1N0YXRlPlxuICBvbkRvbmU6ICgpID0+IHZvaWRcbiAgb25LaWxsQWdlbnQ/OiAoKSA9PiB2b2lkXG4gIG9uQmFjaz86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFzeW5jQWdlbnREZXRhaWxEaWFsb2coe1xuICBhZ2VudCxcbiAgb25Eb25lLFxuICBvbktpbGxBZ2VudCxcbiAgb25CYWNrLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuXG4gIC8vIEdldCB0b29scyBmb3IgcmVuZGVyaW5nIGFjdGl2aXR5IG1lc3NhZ2VzXG4gIGNvbnN0IHRvb2xzID0gdXNlTWVtbygoKSA9PiBnZXRUb29scyhnZXRFbXB0eVRvb2xQZXJtaXNzaW9uQ29udGV4dCgpKSwgW10pXG5cbiAgY29uc3QgZWxhcHNlZFRpbWUgPSB1c2VFbGFwc2VkVGltZShcbiAgICBhZ2VudC5zdGFydFRpbWUsXG4gICAgYWdlbnQuc3RhdHVzID09PSAncnVubmluZycsXG4gICAgMTAwMCxcbiAgICBhZ2VudC50b3RhbFBhdXNlZE1zID8/IDAsXG4gIClcblxuICAvLyBSZXN0b3JlIGNvbmZpcm06eWVzIChFbnRlci95KSBkaXNtaXNzYWwg4oCUIERpYWxvZyBoYW5kbGVzIGNvbmZpcm06bm8gKEVzYylcbiAgLy8gaW50ZXJuYWxseSBidXQgZG9lcyBOT1QgYXV0by13aXJlIGNvbmZpcm06eWVzLlxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTp5ZXMnOiBvbkRvbmUsXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0sXG4gIClcblxuICAvLyBDb21wb25lbnQtc3BlY2lmaWMgc2hvcnRjdXRzIHNob3duIGluIFVJIGhpbnRzICh4PXN0b3ApIGFuZFxuICAvLyBuYXZpZ2F0aW9uIGtleXMgKHNwYWNlPWRpc21pc3MsIGxlZnQ9YmFjaykuIFRoZXNlIGFyZSBjb250ZXh0LWRlcGVuZGVudFxuICAvLyBhY3Rpb25zIHRpZWQgdG8gYWdlbnQgc3RhdGUsIG5vdCBzdGFuZGFyZCBkaWFsb2cga2V5YmluZGluZ3MuXG4gIC8vIE5vdGU6IERpYWxvZyBjb21wb25lbnQgYWxyZWFkeSBoYW5kbGVzIEVTQyB2aWEgY29uZmlybTpubyBrZXliaW5kaW5nO1xuICAvLyBjb25maXJtOnllcyAoRW50ZXIveSkgaXMgaGFuZGxlZCBieSB1c2VLZXliaW5kaW5ncyBhYm92ZS5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnICcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25Eb25lKClcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnbGVmdCcgJiYgb25CYWNrKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uQmFjaygpXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ3gnICYmIGFnZW50LnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmIG9uS2lsbEFnZW50KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uS2lsbEFnZW50KClcbiAgICB9XG4gIH1cblxuICAvLyBFeHRyYWN0IHBsYW4gZnJvbSBwcm9tcHQgLSBpZiBwcmVzZW50LCB3ZSBzaG93IHRoZSBwbGFuIGluc3RlYWQgb2YgdGhlIHByb21wdFxuICBjb25zdCBwbGFuQ29udGVudCA9IGV4dHJhY3RUYWcoYWdlbnQucHJvbXB0LCAncGxhbicpXG5cbiAgY29uc3QgZGlzcGxheVByb21wdCA9XG4gICAgYWdlbnQucHJvbXB0Lmxlbmd0aCA+IDMwMFxuICAgICAgPyBhZ2VudC5wcm9tcHQuc3Vic3RyaW5nKDAsIDI5NykgKyAn4oCmJ1xuICAgICAgOiBhZ2VudC5wcm9tcHRcblxuICAvLyBHZXQgdG9rZW5zIGFuZCB0b29sIHVzZXMgKGZyb20gcmVzdWx0IGlmIGNvbXBsZXRlZCwgb3RoZXJ3aXNlIGZyb20gcHJvZ3Jlc3MpXG4gIGNvbnN0IHRva2VuQ291bnQgPSBhZ2VudC5yZXN1bHQ/LnRvdGFsVG9rZW5zID8/IGFnZW50LnByb2dyZXNzPy50b2tlbkNvdW50XG4gIGNvbnN0IHRvb2xVc2VDb3VudCA9XG4gICAgYWdlbnQucmVzdWx0Py50b3RhbFRvb2xVc2VDb3VudCA/PyBhZ2VudC5wcm9ncmVzcz8udG9vbFVzZUNvdW50XG5cbiAgY29uc3QgdGl0bGUgPSAoXG4gICAgPFRleHQ+XG4gICAgICB7YWdlbnQuc2VsZWN0ZWRBZ2VudD8uYWdlbnRUeXBlID8/ICdhZ2VudCd9IOKAunsnICd9XG4gICAgICB7YWdlbnQuZGVzY3JpcHRpb24gfHwgJ0FzeW5jIGFnZW50J31cbiAgICA8L1RleHQ+XG4gIClcblxuICAvLyBCdWlsZCBzdWJ0aXRsZSB3aXRoIHN0YXR1cyBhbmQgc3RhdHNcbiAgY29uc3Qgc3VidGl0bGUgPSAoXG4gICAgPFRleHQ+XG4gICAgICB7YWdlbnQuc3RhdHVzICE9PSAncnVubmluZycgJiYgKFxuICAgICAgICA8VGV4dCBjb2xvcj17Z2V0VGFza1N0YXR1c0NvbG9yKGFnZW50LnN0YXR1cyl9PlxuICAgICAgICAgIHtnZXRUYXNrU3RhdHVzSWNvbihhZ2VudC5zdGF0dXMpfXsnICd9XG4gICAgICAgICAge2FnZW50LnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCdcbiAgICAgICAgICAgID8gJ0NvbXBsZXRlZCdcbiAgICAgICAgICAgIDogYWdlbnQuc3RhdHVzID09PSAnZmFpbGVkJ1xuICAgICAgICAgICAgICA/ICdGYWlsZWQnXG4gICAgICAgICAgICAgIDogJ1N0b3BwZWQnfVxuICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAge2VsYXBzZWRUaW1lfVxuICAgICAgICB7dG9rZW5Db3VudCAhPT0gdW5kZWZpbmVkICYmIHRva2VuQ291bnQgPiAwICYmIChcbiAgICAgICAgICA8PiDCtyB7Zm9ybWF0TnVtYmVyKHRva2VuQ291bnQpfSB0b2tlbnM8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Rvb2xVc2VDb3VudCAhPT0gdW5kZWZpbmVkICYmIHRvb2xVc2VDb3VudCA+IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgwrcge3Rvb2xVc2VDb3VudH0ge3Rvb2xVc2VDb3VudCA9PT0gMSA/ICd0b29sJyA6ICd0b29scyd9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1RleHQ+XG4gICAgPC9UZXh0PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgYXV0b0ZvY3VzXG4gICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgPlxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgb25DYW5jZWw9e29uRG9uZX1cbiAgICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgICAgaW5wdXRHdWlkZT17ZXhpdFN0YXRlID0+XG4gICAgICAgICAgZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIHtvbkJhY2sgJiYgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaQXCIgYWN0aW9uPVwiZ28gYmFja1wiIC8+fVxuICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFc2MvRW50ZXIvU3BhY2VcIiBhY3Rpb249XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICAgIHthZ2VudC5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBvbktpbGxBZ2VudCAmJiAoXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwieFwiIGFjdGlvbj1cInN0b3BcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHsvKiBSZWNlbnQgYWN0aXZpdGllcyBmb3IgcnVubmluZyBhZ2VudHMgKi99XG4gICAgICAgICAge2FnZW50LnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmXG4gICAgICAgICAgICBhZ2VudC5wcm9ncmVzcz8ucmVjZW50QWN0aXZpdGllcyAmJlxuICAgICAgICAgICAgYWdlbnQucHJvZ3Jlc3MucmVjZW50QWN0aXZpdGllcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgYm9sZCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIFByb2dyZXNzXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIHthZ2VudC5wcm9ncmVzcy5yZWNlbnRBY3Rpdml0aWVzLm1hcCgoYWN0aXZpdHksIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgZGltQ29sb3I9e2kgPCBhZ2VudC5wcm9ncmVzcyEucmVjZW50QWN0aXZpdGllcyEubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgd3JhcD1cInRydW5jYXRlLWVuZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpID09PSBhZ2VudC5wcm9ncmVzcyEucmVjZW50QWN0aXZpdGllcyEubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gJ+KAuiAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnICAnfVxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVG9vbEFjdGl2aXR5KGFjdGl2aXR5LCB0b29scywgdGhlbWUpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogUGxhbiBzZWN0aW9uIChpZiBwcmVzZW50KSAtIHNob3duIGluc3RlYWQgb2YgcHJvbXB0ICovfVxuICAgICAgICAgIHtwbGFuQ29udGVudCA/IChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFVzZXJQbGFuTWVzc2FnZSBhZGRNYXJnaW49e2ZhbHNlfSBwbGFuQ29udGVudD17cGxhbkNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgLyogUHJvbXB0IHNlY3Rpb24gLSBvbmx5IHNob3duIHdoZW4gbm8gcGxhbiAqL1xuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBQcm9tcHRcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB3cmFwPVwid3JhcFwiPntkaXNwbGF5UHJvbXB0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogRXJyb3IgZGV0YWlscyBpZiBmYWlsZWQgKi99XG4gICAgICAgICAge2FnZW50LnN0YXR1cyA9PT0gJ2ZhaWxlZCcgJiYgYWdlbnQuZXJyb3IgJiYgKFxuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgRXJyb3JcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCIgd3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICB7YWdlbnQuZXJyb3J9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFJlbW90ZUFnZW50VGFza1N0YXRlIH0gZnJvbSAnc3JjL3Rhc2tzL1JlbW90ZUFnZW50VGFzay9SZW1vdGVBZ2VudFRhc2suanMnXG5pbXBvcnQgdHlwZSB7IERlZXBJbW11dGFibGUgfSBmcm9tICdzcmMvdHlwZXMvdXRpbHMuanMnXG5pbXBvcnQgeyBESUFNT05EX0ZJTExFRCwgRElBTU9ORF9PUEVOIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVNldHRpbmdzLmpzJ1xuaW1wb3J0IHsgVGV4dCwgdXNlQW5pbWF0aW9uRnJhbWUgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3V0aWxzL2FycmF5LmpzJ1xuaW1wb3J0IHsgZ2V0UmFpbmJvd0NvbG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhpbmtpbmcuanMnXG5cbmNvbnN0IFRJQ0tfTVMgPSA4MFxuXG50eXBlIFJldmlld1N0YWdlID0gTm9uTnVsbGFibGU8XG4gIE5vbk51bGxhYmxlPFJlbW90ZUFnZW50VGFza1N0YXRlWydyZXZpZXdQcm9ncmVzcyddPlsnc3RhZ2UnXVxuPlxuXG4vKipcbiAqIFN0YWdlLWFwcHJvcHJpYXRlIGNvdW50cyBsaW5lIGZvciBhIHJ1bm5pbmcgcmV2aWV3LiBTaGFyZWQgYmV0d2VlbiB0aGVcbiAqIG9uZS1saW5lIHBpbGwgKGJlbG93KSBhbmQgUmVtb3RlU2Vzc2lvbkRldGFpbERpYWxvZydzIHJldmlld0NvdW50c0xpbmUgc29cbiAqIHRoZSB0d28gY2FuJ3QgZHJpZnQg4oCUIHRoZXkgaGF2ZSBoaXN0b3JpY2FsbHkgZGlzYWdyZWVkIG9uIHdoZXRoZXIgdG8gc2hvd1xuICogcmVmdXRlZCBjb3VudHMgYW5kIHdoYXQgdG8gY2FsbCB0aGUgc3ludGhlc2l6aW5nIHN0YWdlLlxuICpcbiAqIENhbm9uaWNhbCBiZWhhdmlvcjogd29yZCBsYWJlbHMgKG5vdCDinJMv4pyXKSwgaGlkZSByZWZ1dGVkIHdoZW4gMCwgXCJkZWR1cGluZ1wiXG4gKiBmb3IgdGhlIHN5bnRoZXNpemluZyBzdGFnZSAobWF0Y2hlcyBTVEFHRV9MQUJFTFMgaW4gdGhlIGRldGFpbCBkaWFsb2cpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmV2aWV3U3RhZ2VDb3VudHMoXG4gIHN0YWdlOiBSZXZpZXdTdGFnZSB8IHVuZGVmaW5lZCxcbiAgZm91bmQ6IG51bWJlcixcbiAgdmVyaWZpZWQ6IG51bWJlcixcbiAgcmVmdXRlZDogbnVtYmVyLFxuKTogc3RyaW5nIHtcbiAgLy8gUHJlLXN0YWdlIG9yY2hlc3RyYXRvciBpbWFnZXMgZG9uJ3Qgd3JpdGUgdGhlIHN0YWdlIGZpZWxkLlxuICBpZiAoIXN0YWdlKSByZXR1cm4gYCR7Zm91bmR9IGZvdW5kIMK3ICR7dmVyaWZpZWR9IHZlcmlmaWVkYFxuICBpZiAoc3RhZ2UgPT09ICdzeW50aGVzaXppbmcnKSB7XG4gICAgY29uc3QgcGFydHMgPSBbYCR7dmVyaWZpZWR9IHZlcmlmaWVkYF1cbiAgICBpZiAocmVmdXRlZCA+IDApIHBhcnRzLnB1c2goYCR7cmVmdXRlZH0gcmVmdXRlZGApXG4gICAgcGFydHMucHVzaCgnZGVkdXBpbmcnKVxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcgwrcgJylcbiAgfVxuICBpZiAoc3RhZ2UgPT09ICd2ZXJpZnlpbmcnKSB7XG4gICAgY29uc3QgcGFydHMgPSBbYCR7Zm91bmR9IGZvdW5kYCwgYCR7dmVyaWZpZWR9IHZlcmlmaWVkYF1cbiAgICBpZiAocmVmdXRlZCA+IDApIHBhcnRzLnB1c2goYCR7cmVmdXRlZH0gcmVmdXRlZGApXG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oJyDCtyAnKVxuICB9XG4gIC8vIHN0YWdlID09PSAnZmluZGluZydcbiAgcmV0dXJuIGZvdW5kID4gMCA/IGAke2ZvdW5kfSBmb3VuZGAgOiAnZmluZGluZydcbn1cblxuLy8gUGVyLWNoYXJhY3RlciByYWluYm93IGdyYWRpZW50LCBzYW1lIHRyZWF0bWVudCBhcyB0aGUgdWx0cmFwbGFuIGtleXdvcmQuXG4vLyBUaGUgcGhhc2Ugb2Zmc2V0IGxldHMgdGhlIGdyYWRpZW50IGN5Y2xlIOKAlCBzbyB0aGUgY29sb3JzIHN3ZWVwIGFsb25nIHRoZVxuLy8gdGV4dCBvbiBlYWNoIGFuaW1hdGlvbiBmcmFtZSBpbnN0ZWFkIG9mIGJlaW5nIHN0YXRpYy5cbmZ1bmN0aW9uIFJhaW5ib3dUZXh0KHtcbiAgdGV4dCxcbiAgcGhhc2UgPSAwLFxufToge1xuICB0ZXh0OiBzdHJpbmdcbiAgcGhhc2U/OiBudW1iZXJcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Wy4uLnRleHRdLm1hcCgoY2gsIGkpID0+IChcbiAgICAgICAgPFRleHQga2V5PXtpfSBjb2xvcj17Z2V0UmFpbmJvd0NvbG9yKGkgKyBwaGFzZSl9PlxuICAgICAgICAgIHtjaH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cblxuLy8gU21vb3RoLXRpY2sgYSBjb3VudCB0b3dhcmQgdGFyZ2V0LCArMSBwZXIgZnJhbWUuIFNhbWUgcGF0dGVybiBhcyB0aGVcbi8vIHRva2VuIGNvdW50ZXIgaW4gU3Bpbm5lckFuaW1hdGlvblJvdyDigJQgdGhlIHJlZiBzdXJ2aXZlcyByZS1yZW5kZXJzIGFuZFxuLy8gdGhlIGFuaW1hdGlvbiBjbG9jayBkcml2ZXMgdGhlIHRpY2suIFRhcmdldCBqdW1wcyAoMuKGkjUpIGRpc3BsYXkgYXNcbi8vIDLihpIz4oaSNOKGkjUgaW5zdGVhZCBvZiBzbmFwcGluZy4gV2hlbiBgc25hcGAgaXMgc2V0IChyZWR1Y2VkIG1vdGlvbiwgb3Jcbi8vIHRoZSBjbG9jayBpcyBmcm96ZW4pLCBieXBhc3MgdGhlIHRpY2sgYW5kIGp1bXAgc3RyYWlnaHQgdG8gdGFyZ2V0IOKAlFxuLy8gb3RoZXJ3aXNlIGEgZnJvemVuIGB0aW1lYCB3b3VsZCBsZWF2ZSB0aGUgcmVmIHN0dWNrIGF0IGl0cyBpbml0IHZhbHVlLlxuZnVuY3Rpb24gdXNlU21vb3RoQ291bnQodGFyZ2V0OiBudW1iZXIsIHRpbWU6IG51bWJlciwgc25hcDogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IGRpc3BsYXllZCA9IHVzZVJlZih0YXJnZXQpXG4gIGNvbnN0IGxhc3RUaWNrID0gdXNlUmVmKHRpbWUpXG4gIGlmIChzbmFwIHx8IHRhcmdldCA8IGRpc3BsYXllZC5jdXJyZW50KSB7XG4gICAgZGlzcGxheWVkLmN1cnJlbnQgPSB0YXJnZXRcbiAgfSBlbHNlIGlmICh0YXJnZXQgPiBkaXNwbGF5ZWQuY3VycmVudCAmJiB0aW1lICE9PSBsYXN0VGljay5jdXJyZW50KSB7XG4gICAgZGlzcGxheWVkLmN1cnJlbnQgKz0gMVxuICAgIGxhc3RUaWNrLmN1cnJlbnQgPSB0aW1lXG4gIH1cbiAgcmV0dXJuIGRpc3BsYXllZC5jdXJyZW50XG59XG5cbmZ1bmN0aW9uIFJldmlld1JhaW5ib3dMaW5lKHtcbiAgc2Vzc2lvbixcbn06IHtcbiAgc2Vzc2lvbjogRGVlcEltbXV0YWJsZTxSZW1vdGVBZ2VudFRhc2tTdGF0ZT5cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzZXR0aW5ncyA9IHVzZVNldHRpbmdzKClcbiAgY29uc3QgcmVkdWNlZE1vdGlvbiA9IHNldHRpbmdzLnByZWZlcnNSZWR1Y2VkTW90aW9uID8/IGZhbHNlXG4gIGNvbnN0IHAgPSBzZXNzaW9uLnJldmlld1Byb2dyZXNzXG4gIGNvbnN0IHJ1bm5pbmcgPSBzZXNzaW9uLnN0YXR1cyA9PT0gJ3J1bm5pbmcnXG4gIC8vIEFuaW1hdGlvbiBjbG9jayBydW5zIG9ubHkgd2hpbGUgcnVubmluZyDigJQgY29tcGxldGVkL2ZhaWxlZCBhcmUgc3RhdGljLlxuICAvLyBEaXNhYmxlZCBlbnRpcmVseSB3aGVuIHRoZSB1c2VyIHByZWZlcnMgcmVkdWNlZCBtb3Rpb24uXG4gIC8vXG4gIC8vIFRoZSByZWYgaXMgaW50ZW50aW9uYWxseSBkaXNjYXJkZWQ6IHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkIGluc2lkZVxuICAvLyA8VGV4dD4gd3JhcHBlcnMgKEJhY2tncm91bmRUYXNrc0RpYWxvZywgUmVtb3RlU2Vzc2lvbkRldGFpbERpYWxvZyksIGFuZFxuICAvLyBJbmsgY2FuJ3QgbmVzdCA8Qm94PiBpbnNpZGUgPFRleHQ+LiBEcm9wcGluZyB0aGUgcmVmIG1lYW5zXG4gIC8vIHVzZVRlcm1pbmFsVmlld3BvcnQncyBpc1Zpc2libGUgc3RheXMgdHJ1ZSwgc28gdGhlIGNsb2NrIHRpY2tzIGV2ZW4gd2hlblxuICAvLyBzY3JvbGxlZCBvZmYtc2NyZWVuIOKAlCBhY2NlcHRhYmxlIGZvciBhIHNpbmdsZSAzMC1jaGFyIGxpbmUuXG4gIGNvbnN0IFssIHRpbWVdID0gdXNlQW5pbWF0aW9uRnJhbWUocnVubmluZyAmJiAhcmVkdWNlZE1vdGlvbiA/IFRJQ0tfTVMgOiBudWxsKVxuXG4gIGNvbnN0IHRhcmdldEZvdW5kID0gcD8uYnVnc0ZvdW5kID8/IDBcbiAgY29uc3QgdGFyZ2V0VmVyaWZpZWQgPSBwPy5idWdzVmVyaWZpZWQgPz8gMFxuICBjb25zdCB0YXJnZXRSZWZ1dGVkID0gcD8uYnVnc1JlZnV0ZWQgPz8gMFxuICAvLyBzbmFwIHdoZW4gdGhlIGNsb2NrIGlzbid0IGFkdmFuY2luZyAocmVkdWNlZCBtb3Rpb24sIG9yIG5vdCBydW5uaW5nKSDigJRcbiAgLy8gdXNlQW5pbWF0aW9uRnJhbWUobnVsbCkgZnJlZXplcyBgdGltZWAgYXQgaXRzIG1vdW50IHZhbHVlLCB3aGljaCB3b3VsZFxuICAvLyBsZWF2ZSB0aGUgdGljay1nYXRlIHBlcm1hbmVudGx5IGZhbHNlLlxuICBjb25zdCBzbmFwID0gcmVkdWNlZE1vdGlvbiB8fCAhcnVubmluZ1xuICBjb25zdCBmb3VuZCA9IHVzZVNtb290aENvdW50KHRhcmdldEZvdW5kLCB0aW1lLCBzbmFwKVxuICBjb25zdCB2ZXJpZmllZCA9IHVzZVNtb290aENvdW50KHRhcmdldFZlcmlmaWVkLCB0aW1lLCBzbmFwKVxuICBjb25zdCByZWZ1dGVkID0gdXNlU21vb3RoQ291bnQodGFyZ2V0UmVmdXRlZCwgdGltZSwgc25hcClcblxuICAvLyBQaGFzZSBhZHZhbmNlcyBldmVyeSAzIHRpY2tzIHNvIHRoZSBncmFkaWVudCBzd2VlcCBpcyB2aXNpYmxlIGJ1dFxuICAvLyBub3QgZnJhbnRpYy4gTW9kdWxvIGtlZXBzIGl0IGluIHRoZSA3LWNvbG9yIGN5Y2xlLlxuICBjb25zdCBwaGFzZSA9IE1hdGguZmxvb3IodGltZSAvIChUSUNLX01TICogMykpICUgN1xuXG4gIC8vIOKXhyBvcGVuIGRpYW1vbmQgd2hpbGUgcnVubmluZyAodGVhbCwgbWF0Y2hlcyBjbG91ZC1zZXNzaW9uIGFjY2VudCksIOKXhlxuICAvLyBmaWxsZWQgd2hlbiB0ZXJtaW5hbC4gUmFpbmJvdyBpcyBzY29wZWQgdG8gdGhlIHdvcmQgYHVsdHJhcmV2aWV3YCBvbmx5IOKAlFxuICAvLyBwZXIgZGVzaWduIGZlZWRiYWNrLCBcInRoZXJlIGlzIGEgbGltaXQgdG8gdGhlIGdsaXR0ZXJpbmcgcmFpbmJvd1wiLlxuICAvLyBDb3VudHMgc3RheSBkaW1Db2xvci5cbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImJhY2tncm91bmRcIj57RElBTU9ORF9GSUxMRUR9IDwvVGV4dD5cbiAgICAgICAgPFJhaW5ib3dUZXh0IHRleHQ9XCJ1bHRyYXJldmlld1wiIHBoYXNlPXswfSAvPlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj4gcmVhZHkgwrcgc2hpZnQr4oaTIHRvIHZpZXc8L1RleHQ+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImJhY2tncm91bmRcIj57RElBTU9ORF9GSUxMRUR9IDwvVGV4dD5cbiAgICAgICAgPFJhaW5ib3dUZXh0IHRleHQ9XCJ1bHRyYXJldmlld1wiIHBoYXNlPXswfSAvPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCIgZGltQ29sb3I+XG4gICAgICAgICAgeycgwrcgJ31cbiAgICAgICAgICBlcnJvclxuICAgICAgICA8L1RleHQ+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICAvLyBUaGUgIXAgYnJhbmNoIChcInNldHRpbmcgdXBcIikgY292ZXJzIHRoZSB3aW5kb3cgYmVmb3JlIHRoZSBvcmNoZXN0cmF0b3JcbiAgLy8gd3JpdGVzIGl0cyBmaXJzdCBwcm9ncmVzcyBzbmFwc2hvdCDigJQgY29udGFpbmVyIGJvb3QgKyByZXBvIGNsb25lIGNhblxuICAvLyB0YWtlIDEtMyBtaW4sIGR1cmluZyB3aGljaCBcIjAgZm91bmRcIiBsb29rZWQgaHVuZy5cbiAgY29uc3QgdGFpbCA9ICFwXG4gICAgPyAnc2V0dGluZyB1cCdcbiAgICA6IGZvcm1hdFJldmlld1N0YWdlQ291bnRzKHAuc3RhZ2UsIGZvdW5kLCB2ZXJpZmllZCwgcmVmdXRlZClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRleHQgY29sb3I9XCJiYWNrZ3JvdW5kXCI+e0RJQU1PTkRfT1BFTn0gPC9UZXh0PlxuICAgICAgPFJhaW5ib3dUZXh0IHRleHQ9XCJ1bHRyYXJldmlld1wiIHBoYXNlPXtydW5uaW5nID8gcGhhc2UgOiAwfSAvPlxuICAgICAgPFRleHQgZGltQ29sb3I+IMK3IHt0YWlsfTwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVtb3RlU2Vzc2lvblByb2dyZXNzKHtcbiAgc2Vzc2lvbixcbn06IHtcbiAgc2Vzc2lvbjogRGVlcEltbXV0YWJsZTxSZW1vdGVBZ2VudFRhc2tTdGF0ZT5cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBMaXRlLXJldmlldzogcmFpbmJvdyBncmFkaWVudCBvdmVyIHRoZSBmdWxsIGxpbmUsIHVsdHJhcGxhbi1zdHlsZS5cbiAgLy8gQmFja2dyb3VuZFRhc2sudHN4IGRlbGVnYXRlcyB0aGUgd2hvbGUgPFRleHQ+IHdyYXBwZXIgaGVyZSBzbyB0aGVcbiAgLy8gZ3JhZGllbnQgc3BhbnMgdGhlIHRpdGxlLCBub3QganVzdCB0aGUgdHJhaWxpbmcgc3RhdHVzLlxuICBpZiAoc2Vzc2lvbi5pc1JlbW90ZVJldmlldykge1xuICAgIHJldHVybiA8UmV2aWV3UmFpbmJvd0xpbmUgc2Vzc2lvbj17c2Vzc2lvbn0gLz5cbiAgfVxuXG4gIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInN1Y2Nlc3NcIiBkaW1Db2xvcj5cbiAgICAgICAgZG9uZVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxuXG4gIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQgYm9sZCBjb2xvcj1cImVycm9yXCIgZGltQ29sb3I+XG4gICAgICAgIGVycm9yXG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG5cbiAgaWYgKCFzZXNzaW9uLnRvZG9MaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiA8VGV4dCBkaW1Db2xvcj57c2Vzc2lvbi5zdGF0dXN94oCmPC9UZXh0PlxuICB9XG5cbiAgY29uc3QgY29tcGxldGVkID0gY291bnQoc2Vzc2lvbi50b2RvTGlzdCwgXyA9PiBfLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpXG4gIGNvbnN0IHRvdGFsID0gc2Vzc2lvbi50b2RvTGlzdC5sZW5ndGhcbiAgcmV0dXJuIChcbiAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgIHtjb21wbGV0ZWR9L3t0b3RhbH1cbiAgICA8L1RleHQ+XG4gIClcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3NyYy9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFRhc2tTdGF0dXMgfSBmcm9tICdzcmMvVGFzay5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxTaGVsbFRhc2tTdGF0ZSB9IGZyb20gJ3NyYy90YXNrcy9Mb2NhbFNoZWxsVGFzay9ndWFyZHMuanMnXG5pbXBvcnQgdHlwZSB7IERlZXBJbW11dGFibGUgfSBmcm9tICdzcmMvdHlwZXMvdXRpbHMuanMnXG5cbnR5cGUgVGFza1N0YXR1c1RleHRQcm9wcyA9IHtcbiAgc3RhdHVzOiBUYXNrU3RhdHVzXG4gIGxhYmVsPzogc3RyaW5nXG4gIHN1ZmZpeD86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFza1N0YXR1c1RleHQoe1xuICBzdGF0dXMsXG4gIGxhYmVsLFxuICBzdWZmaXgsXG59OiBUYXNrU3RhdHVzVGV4dFByb3BzKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gbGFiZWwgPz8gc3RhdHVzXG4gIGNvbnN0IGNvbG9yID1cbiAgICBzdGF0dXMgPT09ICdjb21wbGV0ZWQnXG4gICAgICA/ICdzdWNjZXNzJ1xuICAgICAgOiBzdGF0dXMgPT09ICdmYWlsZWQnXG4gICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICA6IHN0YXR1cyA9PT0gJ2tpbGxlZCdcbiAgICAgICAgICA/ICd3YXJuaW5nJ1xuICAgICAgICAgIDogdW5kZWZpbmVkXG4gIHJldHVybiAoXG4gICAgPFRleHQgY29sb3I9e2NvbG9yfSBkaW1Db2xvcj5cbiAgICAgICh7ZGlzcGxheUxhYmVsfVxuICAgICAge3N1ZmZpeH0pXG4gICAgPC9UZXh0PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaGVsbFByb2dyZXNzKHtcbiAgc2hlbGwsXG59OiB7XG4gIHNoZWxsOiBEZWVwSW1tdXRhYmxlPExvY2FsU2hlbGxUYXNrU3RhdGU+XG59KTogUmVhY3ROb2RlIHtcbiAgc3dpdGNoIChzaGVsbC5zdGF0dXMpIHtcbiAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgcmV0dXJuIDxUYXNrU3RhdHVzVGV4dCBzdGF0dXM9XCJjb21wbGV0ZWRcIiBsYWJlbD1cImRvbmVcIiAvPlxuICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICByZXR1cm4gPFRhc2tTdGF0dXNUZXh0IHN0YXR1cz1cImZhaWxlZFwiIGxhYmVsPVwiZXJyb3JcIiAvPlxuICAgIGNhc2UgJ2tpbGxlZCc6XG4gICAgICByZXR1cm4gPFRhc2tTdGF0dXNUZXh0IHN0YXR1cz1cImtpbGxlZFwiIGxhYmVsPVwic3RvcHBlZFwiIC8+XG4gICAgY2FzZSAncnVubmluZyc6XG4gICAgY2FzZSAncGVuZGluZyc6XG4gICAgICByZXR1cm4gPFRhc2tTdGF0dXNUZXh0IHN0YXR1cz1cInJ1bm5pbmdcIiAvPlxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnc3JjL2luay5qcydcbmltcG9ydCB0eXBlIHsgQmFja2dyb3VuZFRhc2tTdGF0ZSB9IGZyb20gJ3NyYy90YXNrcy90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgRGVlcEltbXV0YWJsZSB9IGZyb20gJ3NyYy90eXBlcy91dGlscy5qcydcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnc3JjL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHRvSW5rQ29sb3IgfSBmcm9tICdzcmMvdXRpbHMvaW5rLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnc3JjL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgRElBTU9ORF9GSUxMRUQsIERJQU1PTkRfT1BFTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHsgUmVtb3RlU2Vzc2lvblByb2dyZXNzIH0gZnJvbSAnLi9SZW1vdGVTZXNzaW9uUHJvZ3Jlc3MuanMnXG5pbXBvcnQgeyBTaGVsbFByb2dyZXNzLCBUYXNrU3RhdHVzVGV4dCB9IGZyb20gJy4vU2hlbGxQcm9ncmVzcy5qcydcbmltcG9ydCB7IGRlc2NyaWJlVGVhbW1hdGVBY3Rpdml0eSB9IGZyb20gJy4vdGFza1N0YXR1c1V0aWxzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICB0YXNrOiBEZWVwSW1tdXRhYmxlPEJhY2tncm91bmRUYXNrU3RhdGU+XG4gIG1heEFjdGl2aXR5V2lkdGg/OiBudW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhY2tncm91bmRUYXNrKHtcbiAgdGFzayxcbiAgbWF4QWN0aXZpdHlXaWR0aCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgYWN0aXZpdHlMaW1pdCA9IG1heEFjdGl2aXR5V2lkdGggPz8gNDBcbiAgc3dpdGNoICh0YXNrLnR5cGUpIHtcbiAgICBjYXNlICdsb2NhbF9iYXNoJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHt0cnVuY2F0ZShcbiAgICAgICAgICAgIHRhc2sua2luZCA9PT0gJ21vbml0b3InID8gdGFzay5kZXNjcmlwdGlvbiA6IHRhc2suY29tbWFuZCxcbiAgICAgICAgICAgIGFjdGl2aXR5TGltaXQsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICA8U2hlbGxQcm9ncmVzcyBzaGVsbD17dGFza30gLz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIGNhc2UgJ3JlbW90ZV9hZ2VudCc6IHtcbiAgICAgIC8vIExpdGUtcmV2aWV3IHJlbmRlcnMgaXRzIG93biByYWluYm93IGxpbmUgKHRpdGxlICsgbGl2ZSBjb3VudHMpLFxuICAgICAgLy8gc28gd2UgZG9uJ3QgcHJlZml4IHRoZSB0aXRsZSDigJQgdGhlIHJhaW5ib3cgYWxyZWFkeSBpbmNsdWRlcyBpdC5cbiAgICAgIGlmICh0YXNrLmlzUmVtb3RlUmV2aWV3KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8UmVtb3RlU2Vzc2lvblByb2dyZXNzIHNlc3Npb249e3Rhc2t9IC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb25zdCBydW5uaW5nID0gdGFzay5zdGF0dXMgPT09ICdydW5uaW5nJyB8fCB0YXNrLnN0YXR1cyA9PT0gJ3BlbmRpbmcnXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57cnVubmluZyA/IERJQU1PTkRfT1BFTiA6IERJQU1PTkRfRklMTEVEfSA8L1RleHQ+XG4gICAgICAgICAge3RydW5jYXRlKHRhc2sudGl0bGUsIGFjdGl2aXR5TGltaXQsIHRydWUpfVxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyA8L1RleHQ+XG4gICAgICAgICAgPFJlbW90ZVNlc3Npb25Qcm9ncmVzcyBzZXNzaW9uPXt0YXNrfSAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICApXG4gICAgfVxuICAgIGNhc2UgJ2xvY2FsX2FnZW50JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHt0cnVuY2F0ZSh0YXNrLmRlc2NyaXB0aW9uLCBhY3Rpdml0eUxpbWl0LCB0cnVlKX17JyAnfVxuICAgICAgICAgIDxUYXNrU3RhdHVzVGV4dFxuICAgICAgICAgICAgc3RhdHVzPXt0YXNrLnN0YXR1c31cbiAgICAgICAgICAgIGxhYmVsPXt0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnZG9uZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgJiYgIXRhc2subm90aWZpZWRcbiAgICAgICAgICAgICAgICA/ICcsIHVucmVhZCdcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICBjYXNlICdpbl9wcm9jZXNzX3RlYW1tYXRlJzoge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSBkZXNjcmliZVRlYW1tYXRlQWN0aXZpdHkodGFzaylcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPXt0b0lua0NvbG9yKHRhc2suaWRlbnRpdHkuY29sb3IpfT5cbiAgICAgICAgICAgIEB7dGFzay5pZGVudGl0eS5hZ2VudE5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPjoge3RydW5jYXRlKGFjdGl2aXR5LCBhY3Rpdml0eUxpbWl0LCB0cnVlKX08L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICB9XG4gICAgY2FzZSAnbG9jYWxfd29ya2Zsb3cnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAge3RydW5jYXRlKFxuICAgICAgICAgICAgdGFzay53b3JrZmxvd05hbWUgPz8gdGFzay5zdW1tYXJ5ID8/IHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhY3Rpdml0eUxpbWl0LFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICApfXsnICd9XG4gICAgICAgICAgPFRhc2tTdGF0dXNUZXh0XG4gICAgICAgICAgICBzdGF0dXM9e3Rhc2suc3RhdHVzfVxuICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ3J1bm5pbmcnXG4gICAgICAgICAgICAgICAgPyBgJHt0YXNrLmFnZW50Q291bnR9ICR7cGx1cmFsKHRhc2suYWdlbnRDb3VudCwgJ2FnZW50Jyl9YFxuICAgICAgICAgICAgICAgIDogdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnXG4gICAgICAgICAgICAgICAgICA/ICdkb25lJ1xuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiAhdGFzay5ub3RpZmllZFxuICAgICAgICAgICAgICAgID8gJywgdW5yZWFkJ1xuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIGNhc2UgJ21vbml0b3JfbWNwJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHt0cnVuY2F0ZSh0YXNrLmRlc2NyaXB0aW9uLCBhY3Rpdml0eUxpbWl0LCB0cnVlKX17JyAnfVxuICAgICAgICAgIDxUYXNrU3RhdHVzVGV4dFxuICAgICAgICAgICAgc3RhdHVzPXt0YXNrLnN0YXR1c31cbiAgICAgICAgICAgIGxhYmVsPXt0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnZG9uZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgJiYgIXRhc2subm90aWZpZWRcbiAgICAgICAgICAgICAgICA/ICcsIHVucmVhZCdcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICBjYXNlICdkcmVhbSc6IHtcbiAgICAgIGNvbnN0IG4gPSB0YXNrLmZpbGVzVG91Y2hlZC5sZW5ndGhcbiAgICAgIGNvbnN0IGRldGFpbCA9XG4gICAgICAgIHRhc2sucGhhc2UgPT09ICd1cGRhdGluZycgJiYgbiA+IDBcbiAgICAgICAgICA/IGAke259ICR7cGx1cmFsKG4sICdmaWxlJyl9YFxuICAgICAgICAgIDogYCR7dGFzay5zZXNzaW9uc1Jldmlld2luZ30gJHtwbHVyYWwodGFzay5zZXNzaW9uc1Jldmlld2luZywgJ3Nlc3Npb24nKX1gXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7dGFzay5kZXNjcmlwdGlvbn17JyAnfVxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgwrcge3Rhc2sucGhhc2V9IMK3IHtkZXRhaWx9XG4gICAgICAgICAgPC9UZXh0PnsnICd9XG4gICAgICAgICAgPFRhc2tTdGF0dXNUZXh0XG4gICAgICAgICAgICBzdGF0dXM9e3Rhc2suc3RhdHVzfVxuICAgICAgICAgICAgbGFiZWw9e3Rhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdkb25lJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiAhdGFzay5ub3RpZmllZFxuICAgICAgICAgICAgICAgID8gJywgdW5yZWFkJ1xuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgRGVlcEltbXV0YWJsZSB9IGZyb20gJ3NyYy90eXBlcy91dGlscy5qcydcbmltcG9ydCB7IHVzZUVsYXBzZWRUaW1lIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRWxhcHNlZFRpbWUuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHR5cGUgeyBEcmVhbVRhc2tTdGF0ZSB9IGZyb20gJy4uLy4uL3Rhc2tzL0RyZWFtVGFzay9EcmVhbVRhc2suanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhc2s6IERlZXBJbW11dGFibGU8RHJlYW1UYXNrU3RhdGU+XG4gIG9uRG9uZTogKCkgPT4gdm9pZFxuICBvbkJhY2s/OiAoKSA9PiB2b2lkXG4gIG9uS2lsbD86ICgpID0+IHZvaWRcbn1cblxuLy8gSG93IG1hbnkgcmVjZW50IHR1cm5zIHRvIHJlbmRlci4gRWFybGllciB0dXJucyBjb2xsYXBzZSB0byBhIGNvdW50LlxuY29uc3QgVklTSUJMRV9UVVJOUyA9IDZcblxuZXhwb3J0IGZ1bmN0aW9uIERyZWFtRGV0YWlsRGlhbG9nKHtcbiAgdGFzayxcbiAgb25Eb25lLFxuICBvbkJhY2ssXG4gIG9uS2lsbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSB1c2VFbGFwc2VkVGltZShcbiAgICB0YXNrLnN0YXJ0VGltZSxcbiAgICB0YXNrLnN0YXR1cyA9PT0gJ3J1bm5pbmcnLFxuICAgIDEwMDAsXG4gICAgMCxcbiAgKVxuXG4gIC8vIERpYWxvZyBoYW5kbGVzIGNvbmZpcm06bm8gKEVzYykg4oaSIG9uQ2FuY2VsLiBXaXJlIGNvbmZpcm06eWVzIChFbnRlci95KSB0b28uXG4gIHVzZUtleWJpbmRpbmdzKHsgJ2NvbmZpcm06eWVzJzogb25Eb25lIH0sIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICcgJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbkRvbmUoKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdsZWZ0JyAmJiBvbkJhY2spIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25CYWNrKClcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAneCcgJiYgdGFzay5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBvbktpbGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25LaWxsKClcbiAgICB9XG4gIH1cblxuICAvLyBUdXJucyB3aXRoIHRleHQgdG8gc2hvdy4gVG9vbC1vbmx5IHR1cm5zICh0ZXh0PScnKSBhcmUgZHJvcHBlZCBlbnRpcmVseSDigJRcbiAgLy8gdGhlIHBlci10dXJuIHRvb2xVc2VDb3VudCBhbHJlYWR5IGNhcHR1cmVzIHRoYXQgd29yay5cbiAgY29uc3QgdmlzaWJsZVR1cm5zID0gdGFzay50dXJucy5maWx0ZXIodCA9PiB0LnRleHQgIT09ICcnKVxuICBjb25zdCBzaG93biA9IHZpc2libGVUdXJucy5zbGljZSgtVklTSUJMRV9UVVJOUylcbiAgY29uc3QgaGlkZGVuID0gdmlzaWJsZVR1cm5zLmxlbmd0aCAtIHNob3duLmxlbmd0aFxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgID5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJNZW1vcnkgY29uc29saWRhdGlvblwiXG4gICAgICAgIHN1YnRpdGxlPXtcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIHtlbGFwc2VkVGltZX0gwrcgcmV2aWV3aW5nIHt0YXNrLnNlc3Npb25zUmV2aWV3aW5nfXsnICd9XG4gICAgICAgICAgICB7cGx1cmFsKHRhc2suc2Vzc2lvbnNSZXZpZXdpbmcsICdzZXNzaW9uJyl9XG4gICAgICAgICAgICB7dGFzay5maWxlc1RvdWNoZWQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICDCtyB7dGFzay5maWxlc1RvdWNoZWQubGVuZ3RofXsnICd9XG4gICAgICAgICAgICAgICAge3BsdXJhbCh0YXNrLmZpbGVzVG91Y2hlZC5sZW5ndGgsICdmaWxlJyl9IHRvdWNoZWRcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgfVxuICAgICAgICBvbkNhbmNlbD17b25Eb25lfVxuICAgICAgICBjb2xvcj1cImJhY2tncm91bmRcIlxuICAgICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgIDxUZXh0PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAge29uQmFjayAmJiA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpBcIiBhY3Rpb249XCJnbyBiYWNrXCIgLz59XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzYy9FbnRlci9TcGFjZVwiIGFjdGlvbj1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAge3Rhc2suc3RhdHVzID09PSAncnVubmluZycgJiYgb25LaWxsICYmIChcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJ4XCIgYWN0aW9uPVwic3RvcFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+U3RhdHVzOjwvVGV4dD57JyAnfVxuICAgICAgICAgICAge3Rhc2suc3RhdHVzID09PSAncnVubmluZycgPyAoXG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPnJ1bm5pbmc8L1RleHQ+XG4gICAgICAgICAgICApIDogdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj57dGFzay5zdGF0dXN9PC9UZXh0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPnt0YXNrLnN0YXR1c308L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgIHtzaG93bi5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAge3Rhc2suc3RhdHVzID09PSAncnVubmluZycgPyAnU3RhcnRpbmfigKYnIDogJyhubyB0ZXh0IG91dHB1dCknfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7aGlkZGVuID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAoe2hpZGRlbn0gZWFybGllciB7cGx1cmFsKGhpZGRlbiwgJ3R1cm4nKX0pXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7c2hvd24ubWFwKCh0dXJuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IHdyYXA9XCJ3cmFwXCI+e3R1cm4udGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICB7dHVybi50b29sVXNlQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgeycgICd9KHt0dXJuLnRvb2xVc2VDb3VudH17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHtwbHVyYWwodHVybi50b29sVXNlQ291bnQsICd0b29sJyl9KVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBEZWVwSW1tdXRhYmxlIH0gZnJvbSAnc3JjL3R5cGVzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgdXNlRWxhcHNlZFRpbWUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VFbGFwc2VkVGltZS5qcydcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBJblByb2Nlc3NUZWFtbWF0ZVRhc2tTdGF0ZSB9IGZyb20gJy4uLy4uL3Rhc2tzL0luUHJvY2Vzc1RlYW1tYXRlVGFzay90eXBlcy5qcydcbmltcG9ydCB7IGdldFRvb2xzIH0gZnJvbSAnLi4vLi4vdG9vbHMuanMnXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIsIHRydW5jYXRlVG9XaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHRvSW5rQ29sb3IgfSBmcm9tICcuLi8uLi91dGlscy9pbmsuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9vbEFjdGl2aXR5IH0gZnJvbSAnLi9yZW5kZXJUb29sQWN0aXZpdHkuanMnXG5pbXBvcnQgeyBkZXNjcmliZVRlYW1tYXRlQWN0aXZpdHkgfSBmcm9tICcuL3Rhc2tTdGF0dXNVdGlscy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdGVhbW1hdGU6IERlZXBJbW11dGFibGU8SW5Qcm9jZXNzVGVhbW1hdGVUYXNrU3RhdGU+XG4gIG9uRG9uZTogKCkgPT4gdm9pZFxuICBvbktpbGw/OiAoKSA9PiB2b2lkXG4gIG9uQmFjaz86ICgpID0+IHZvaWRcbiAgb25Gb3JlZ3JvdW5kPzogKCkgPT4gdm9pZFxufVxuZXhwb3J0IGZ1bmN0aW9uIEluUHJvY2Vzc1RlYW1tYXRlRGV0YWlsRGlhbG9nKHtcbiAgdGVhbW1hdGUsXG4gIG9uRG9uZSxcbiAgb25LaWxsLFxuICBvbkJhY2ssXG4gIG9uRm9yZWdyb3VuZCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcbiAgY29uc3QgdG9vbHMgPSB1c2VNZW1vKCgpID0+IGdldFRvb2xzKGdldEVtcHR5VG9vbFBlcm1pc3Npb25Db250ZXh0KCkpLCBbXSlcblxuICBjb25zdCBlbGFwc2VkVGltZSA9IHVzZUVsYXBzZWRUaW1lKFxuICAgIHRlYW1tYXRlLnN0YXJ0VGltZSxcbiAgICB0ZWFtbWF0ZS5zdGF0dXMgPT09ICdydW5uaW5nJyxcbiAgICAxMDAwLFxuICAgIHRlYW1tYXRlLnRvdGFsUGF1c2VkTXMgPz8gMCxcbiAgKVxuXG4gIC8vIFJlc3RvcmUgY29uZmlybTp5ZXMgKEVudGVyL3kpIGRpc21pc3NhbCDigJQgRGlhbG9nIGhhbmRsZXMgY29uZmlybTpubyAoRXNjKVxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTp5ZXMnOiBvbkRvbmUsXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0sXG4gIClcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICcgJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbkRvbmUoKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdsZWZ0JyAmJiBvbkJhY2spIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25CYWNrKClcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAneCcgJiYgdGVhbW1hdGUuc3RhdHVzID09PSAncnVubmluZycgJiYgb25LaWxsKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uS2lsbCgpXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2YnICYmIHRlYW1tYXRlLnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmIG9uRm9yZWdyb3VuZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbkZvcmVncm91bmQoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdGl2aXR5ID0gZGVzY3JpYmVUZWFtbWF0ZUFjdGl2aXR5KHRlYW1tYXRlKVxuXG4gIGNvbnN0IHRva2VuQ291bnQgPVxuICAgIHRlYW1tYXRlLnJlc3VsdD8udG90YWxUb2tlbnMgPz8gdGVhbW1hdGUucHJvZ3Jlc3M/LnRva2VuQ291bnRcbiAgY29uc3QgdG9vbFVzZUNvdW50ID1cbiAgICB0ZWFtbWF0ZS5yZXN1bHQ/LnRvdGFsVG9vbFVzZUNvdW50ID8/IHRlYW1tYXRlLnByb2dyZXNzPy50b29sVXNlQ291bnRcblxuICBjb25zdCBkaXNwbGF5UHJvbXB0ID0gdHJ1bmNhdGVUb1dpZHRoKHRlYW1tYXRlLnByb21wdCwgMzAwKVxuXG4gIGNvbnN0IHRpdGxlID0gKFxuICAgIDxUZXh0PlxuICAgICAgPFRleHQgY29sb3I9e3RvSW5rQ29sb3IodGVhbW1hdGUuaWRlbnRpdHkuY29sb3IpfT5cbiAgICAgICAgQHt0ZWFtbWF0ZS5pZGVudGl0eS5hZ2VudE5hbWV9XG4gICAgICA8L1RleHQ+XG4gICAgICB7YWN0aXZpdHkgJiYgPFRleHQgZGltQ29sb3I+ICh7YWN0aXZpdHl9KTwvVGV4dD59XG4gICAgPC9UZXh0PlxuICApXG5cbiAgY29uc3Qgc3VidGl0bGUgPSAoXG4gICAgPFRleHQ+XG4gICAgICB7dGVhbW1hdGUuc3RhdHVzICE9PSAncnVubmluZycgJiYgKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgIHRlYW1tYXRlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCdcbiAgICAgICAgICAgICAgPyAnc3VjY2VzcydcbiAgICAgICAgICAgICAgOiB0ZWFtbWF0ZS5zdGF0dXMgPT09ICdraWxsZWQnXG4gICAgICAgICAgICAgICAgPyAnd2FybmluZydcbiAgICAgICAgICAgICAgICA6ICdlcnJvcidcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGVhbW1hdGUuc3RhdHVzID09PSAnY29tcGxldGVkJ1xuICAgICAgICAgICAgPyAnQ29tcGxldGVkJ1xuICAgICAgICAgICAgOiB0ZWFtbWF0ZS5zdGF0dXMgPT09ICdmYWlsZWQnXG4gICAgICAgICAgICAgID8gJ0ZhaWxlZCdcbiAgICAgICAgICAgICAgOiAnU3RvcHBlZCd9XG4gICAgICAgICAgeycgwrcgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICB7ZWxhcHNlZFRpbWV9XG4gICAgICAgIHt0b2tlbkNvdW50ICE9PSB1bmRlZmluZWQgJiYgdG9rZW5Db3VudCA+IDAgJiYgKFxuICAgICAgICAgIDw+IMK3IHtmb3JtYXROdW1iZXIodG9rZW5Db3VudCl9IHRva2VuczwvPlxuICAgICAgICApfVxuICAgICAgICB7dG9vbFVzZUNvdW50ICE9PSB1bmRlZmluZWQgJiYgdG9vbFVzZUNvdW50ID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICDCtyB7dG9vbFVzZUNvdW50fSB7dG9vbFVzZUNvdW50ID09PSAxID8gJ3Rvb2wnIDogJ3Rvb2xzJ31cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L1RleHQ+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBhdXRvRm9jdXNcbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICA+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICBvbkNhbmNlbD17b25Eb25lfVxuICAgICAgICBjb2xvcj1cImJhY2tncm91bmRcIlxuICAgICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgIDxUZXh0PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAge29uQmFjayAmJiA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpBcIiBhY3Rpb249XCJnbyBiYWNrXCIgLz59XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzYy9FbnRlci9TcGFjZVwiIGFjdGlvbj1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAge3RlYW1tYXRlLnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmIG9uS2lsbCAmJiAoXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwieFwiIGFjdGlvbj1cInN0b3BcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dGVhbW1hdGUuc3RhdHVzID09PSAncnVubmluZycgJiYgb25Gb3JlZ3JvdW5kICYmIChcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJmXCIgYWN0aW9uPVwiZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgey8qIFJlY2VudCBhY3Rpdml0aWVzIGZvciBydW5uaW5nIHRlYW1tYXRlcyAqL31cbiAgICAgICAge3RlYW1tYXRlLnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmXG4gICAgICAgICAgdGVhbW1hdGUucHJvZ3Jlc3M/LnJlY2VudEFjdGl2aXRpZXMgJiZcbiAgICAgICAgICB0ZWFtbWF0ZS5wcm9ncmVzcy5yZWNlbnRBY3Rpdml0aWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICB7dGVhbW1hdGUucHJvZ3Jlc3MucmVjZW50QWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGRpbUNvbG9yPXtpIDwgdGVhbW1hdGUucHJvZ3Jlc3MhLnJlY2VudEFjdGl2aXRpZXMhLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgICB3cmFwPVwidHJ1bmNhdGUtZW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aSA9PT0gdGVhbW1hdGUucHJvZ3Jlc3MhLnJlY2VudEFjdGl2aXRpZXMhLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgPyAn4oC6ICdcbiAgICAgICAgICAgICAgICAgICAgOiAnICAnfVxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvb2xBY3Rpdml0eShhY3Rpdml0eSwgdG9vbHMsIHRoZW1lKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICB7LyogUHJvbXB0IHNlY3Rpb24gKi99XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFByb21wdFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCB3cmFwPVwid3JhcFwiPntkaXNwbGF5UHJvbXB0fTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgey8qIEVycm9yIGRldGFpbHMgaWYgZmFpbGVkICovfVxuICAgICAgICB7dGVhbW1hdGUuc3RhdHVzID09PSAnZmFpbGVkJyAmJiB0ZWFtbWF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAgICBFcnJvclxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiIHdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgIHt0ZWFtbWF0ZS5lcnJvcn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBTREtNZXNzYWdlIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IERlZXBJbW11dGFibGUgfSBmcm9tICdzcmMvdHlwZXMvdXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBESUFNT05EX0ZJTExFRCwgRElBTU9ORF9PUEVOIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyB1c2VFbGFwc2VkVGltZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUVsYXBzZWRUaW1lLmpzJ1xuaW1wb3J0IHR5cGUgeyBLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi4vLi4vaW5rL2V2ZW50cy9rZXlib2FyZC1ldmVudC5qcydcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgUmVtb3RlQWdlbnRUYXNrU3RhdGUgfSBmcm9tICcuLi8uLi90YXNrcy9SZW1vdGVBZ2VudFRhc2svUmVtb3RlQWdlbnRUYXNrLmpzJ1xuaW1wb3J0IHsgZ2V0UmVtb3RlVGFza1Nlc3Npb25VcmwgfSBmcm9tICcuLi8uLi90YXNrcy9SZW1vdGVBZ2VudFRhc2svUmVtb3RlQWdlbnRUYXNrLmpzJ1xuaW1wb3J0IHtcbiAgQUdFTlRfVE9PTF9OQU1FLFxuICBMRUdBQ1lfQUdFTlRfVE9PTF9OQU1FLFxufSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgQVNLX1VTRVJfUVVFU1RJT05fVE9PTF9OQU1FIH0gZnJvbSAnLi4vLi4vdG9vbHMvQXNrVXNlclF1ZXN0aW9uVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBFWElUX1BMQU5fTU9ERV9WMl9UT09MX05BTUUgfSBmcm9tICcuLi8uLi90b29scy9FeGl0UGxhbk1vZGVUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uLCB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyB0b0ludGVybmFsTWVzc2FnZXMgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdlcy9tYXBwZXJzLmpzJ1xuaW1wb3J0IHsgRU1QVFlfTE9PS1VQUywgbm9ybWFsaXplTWVzc2FnZXMgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgdGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3RlbGVwb3J0LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vTWVzc2FnZS5qcydcbmltcG9ydCB7XG4gIGZvcm1hdFJldmlld1N0YWdlQ291bnRzLFxuICBSZW1vdGVTZXNzaW9uUHJvZ3Jlc3MsXG59IGZyb20gJy4vUmVtb3RlU2Vzc2lvblByb2dyZXNzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzZXNzaW9uOiBEZWVwSW1tdXRhYmxlPFJlbW90ZUFnZW50VGFza1N0YXRlPlxuICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHRcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbiAgb25CYWNrPzogKCkgPT4gdm9pZFxuICBvbktpbGw/OiAoKSA9PiB2b2lkXG59XG5cbi8vIENvbXBhY3Qgb25lLWxpbmUgc3VtbWFyeTogdG9vbCBuYW1lICsgZmlyc3QgbWVhbmluZ2Z1bCBzdHJpbmcgYXJnLlxuLy8gTGlnaHRlciB0aGFuIHRvb2wucmVuZGVyVG9vbFVzZU1lc3NhZ2UgKG5vIHJlZ2lzdHJ5IGxvb2t1cCAvIHNjaGVtYSBwYXJzZSkuXG4vLyBDb2xsYXBzZXMgd2hpdGVzcGFjZSBzbyBtdWx0aS1saW5lIGlucHV0cyAoZS5nLiBCYXNoIGNvbW1hbmQgdGV4dClcbi8vIHJlbmRlciBvbiBvbmUgbGluZS5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUb29sVXNlU3VtbWFyeShuYW1lOiBzdHJpbmcsIGlucHV0OiB1bmtub3duKTogc3RyaW5nIHtcbiAgLy8gcGxhbl9yZWFkeSBwaGFzZSBpcyBvbmx5IHJlYWNoZWQgdmlhIEV4aXRQbGFuTW9kZSB0b29sXG4gIGlmIChuYW1lID09PSBFWElUX1BMQU5fTU9ERV9WMl9UT09MX05BTUUpIHtcbiAgICByZXR1cm4gJ1JldmlldyB0aGUgcGxhbiBpbiBDbGF1ZGUgQ29kZSBvbiB0aGUgd2ViJ1xuICB9XG4gIGlmICghaW5wdXQgfHwgdHlwZW9mIGlucHV0ICE9PSAnb2JqZWN0JykgcmV0dXJuIG5hbWVcbiAgLy8gQXNrVXNlclF1ZXN0aW9uOiBzaG93IHRoZSBxdWVzdGlvbiB0ZXh0IGFzIGEgQ1RBLCBub3QgdGhlIHRvb2wgbmFtZS5cbiAgLy8gSW5wdXQgc2hhcGUgaXMge3F1ZXN0aW9uczogW3txdWVzdGlvbiwgaGVhZGVyLCBvcHRpb25zfV19LlxuICBpZiAobmFtZSA9PT0gQVNLX1VTRVJfUVVFU1RJT05fVE9PTF9OQU1FICYmICdxdWVzdGlvbnMnIGluIGlucHV0KSB7XG4gICAgY29uc3QgcXMgPSBpbnB1dC5xdWVzdGlvbnNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShxcykgJiYgcXNbMF0gJiYgdHlwZW9mIHFzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gUHJlZmVyIHF1ZXN0aW9uIChmdWxsIHRleHQpIG92ZXIgaGVhZGVyIChtYXgtMTItY2hhciB0YWcpLiBoZWFkZXJcbiAgICAgIC8vIGlzIGEgcmVxdWlyZWQgc2NoZW1hIGZpZWxkIHNvIGNoZWNraW5nIGl0IGZpcnN0IHdvdWxkIG1ha2UgdGhlXG4gICAgICAvLyBxdWVzdGlvbiBmYWxsYmFjayBkZWFkIGNvZGUuXG4gICAgICBjb25zdCBxID1cbiAgICAgICAgJ3F1ZXN0aW9uJyBpbiBxc1swXSAmJlxuICAgICAgICB0eXBlb2YgcXNbMF0ucXVlc3Rpb24gPT09ICdzdHJpbmcnICYmXG4gICAgICAgIHFzWzBdLnF1ZXN0aW9uXG4gICAgICAgICAgPyBxc1swXS5xdWVzdGlvblxuICAgICAgICAgIDogJ2hlYWRlcicgaW4gcXNbMF0gJiYgdHlwZW9mIHFzWzBdLmhlYWRlciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gcXNbMF0uaGVhZGVyXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgIGlmIChxKSB7XG4gICAgICAgIGNvbnN0IG9uZUxpbmUgPSBxLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgICAgICAgcmV0dXJuIGBBbnN3ZXIgaW4gYnJvd3NlcjogJHt0cnVuY2F0ZVRvV2lkdGgob25lTGluZSwgNTApfWBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCB2IG9mIE9iamVjdC52YWx1ZXMoaW5wdXQpKSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB2LnRyaW0oKSkge1xuICAgICAgY29uc3Qgb25lTGluZSA9IHYucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICAgICAgcmV0dXJuIGAke25hbWV9ICR7dHJ1bmNhdGVUb1dpZHRoKG9uZUxpbmUsIDYwKX1gXG4gICAgfVxuICB9XG4gIHJldHVybiBuYW1lXG59XG5cbmNvbnN0IFBIQVNFX0xBQkVMID0ge1xuICBuZWVkc19pbnB1dDogJ2lucHV0IHJlcXVpcmVkJyxcbiAgcGxhbl9yZWFkeTogJ3JlYWR5Jyxcbn0gYXMgY29uc3RcblxuY29uc3QgQUdFTlRfVkVSQiA9IHtcbiAgbmVlZHNfaW5wdXQ6ICd3YWl0aW5nJyxcbiAgcGxhbl9yZWFkeTogJ2RvbmUnLFxufSBhcyBjb25zdFxuXG5mdW5jdGlvbiBVbHRyYXBsYW5TZXNzaW9uRGV0YWlsKHtcbiAgc2Vzc2lvbixcbiAgb25Eb25lLFxuICBvbkJhY2ssXG4gIG9uS2lsbCxcbn06IE9taXQ8UHJvcHMsICd0b29sVXNlQ29udGV4dCc+KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgcnVubmluZyA9IHNlc3Npb24uc3RhdHVzID09PSAncnVubmluZycgfHwgc2Vzc2lvbi5zdGF0dXMgPT09ICdwZW5kaW5nJ1xuICBjb25zdCBwaGFzZSA9IHNlc3Npb24udWx0cmFwbGFuUGhhc2VcbiAgY29uc3Qgc3RhdHVzVGV4dCA9IHJ1bm5pbmdcbiAgICA/IHBoYXNlXG4gICAgICA/IFBIQVNFX0xBQkVMW3BoYXNlXVxuICAgICAgOiAncnVubmluZydcbiAgICA6IHNlc3Npb24uc3RhdHVzXG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gdXNlRWxhcHNlZFRpbWUoXG4gICAgc2Vzc2lvbi5zdGFydFRpbWUsXG4gICAgcnVubmluZyxcbiAgICAxMDAwLFxuICAgIDAsXG4gICAgc2Vzc2lvbi5lbmRUaW1lLFxuICApXG5cbiAgLy8gQ291bnRzIGFyZSBldmVudHVhbGx5IGNvcnJlY3QgKGxhZyDiiaQgcG9sbCBpbnRlcnZhbCkuIGFnZW50c1dvcmtpbmcgc3RhcnRzXG4gIC8vIGF0IDEgKHRoZSBtYWluIHNlc3Npb24gYWdlbnQpIGFuZCBpbmNyZW1lbnRzIHBlciBzdWJhZ2VudCBzcGF3bi4gdG9vbENhbGxzXG4gIC8vIGlzIG1haW4tc2Vzc2lvbiBvbmx5IOKAlCBzdWJhZ2VudCBjYWxscyBtYXkgbm90IHN1cmZhY2UgaW4gdGhpcyBzdHJlYW0uXG4gIGNvbnN0IHsgYWdlbnRzV29ya2luZywgdG9vbENhbGxzLCBsYXN0VG9vbENhbGwgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBzcGF3bnMgPSAwXG4gICAgbGV0IGNhbGxzID0gMFxuICAgIGxldCBsYXN0QmxvY2s6IHsgbmFtZTogc3RyaW5nOyBpbnB1dDogdW5rbm93biB9IHwgbnVsbCA9IG51bGxcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBzZXNzaW9uLmxvZykge1xuICAgICAgaWYgKG1zZy50eXBlICE9PSAnYXNzaXN0YW50JykgY29udGludWVcbiAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgbXNnLm1lc3NhZ2UuY29udGVudCkge1xuICAgICAgICBpZiAoYmxvY2sudHlwZSAhPT0gJ3Rvb2xfdXNlJykgY29udGludWVcbiAgICAgICAgY2FsbHMrK1xuICAgICAgICBsYXN0QmxvY2sgPSBibG9ja1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYmxvY2submFtZSA9PT0gQUdFTlRfVE9PTF9OQU1FIHx8XG4gICAgICAgICAgYmxvY2submFtZSA9PT0gTEVHQUNZX0FHRU5UX1RPT0xfTkFNRVxuICAgICAgICApIHtcbiAgICAgICAgICBzcGF3bnMrK1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBhZ2VudHNXb3JraW5nOiAxICsgc3Bhd25zLFxuICAgICAgdG9vbENhbGxzOiBjYWxscyxcbiAgICAgIGxhc3RUb29sQ2FsbDogbGFzdEJsb2NrXG4gICAgICAgID8gZm9ybWF0VG9vbFVzZVN1bW1hcnkobGFzdEJsb2NrLm5hbWUsIGxhc3RCbG9jay5pbnB1dClcbiAgICAgICAgOiBudWxsLFxuICAgIH1cbiAgfSwgW3Nlc3Npb24ubG9nXSlcblxuICBjb25zdCBzZXNzaW9uVXJsID0gZ2V0UmVtb3RlVGFza1Nlc3Npb25Vcmwoc2Vzc2lvbi5zZXNzaW9uSWQpXG4gIGNvbnN0IGdvQmFja09yQ2xvc2UgPVxuICAgIG9uQmFjayA/P1xuICAgICgoKSA9PiBvbkRvbmUoJ1JlbW90ZSBzZXNzaW9uIGRldGFpbHMgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KSlcbiAgY29uc3QgW2NvbmZpcm1pbmdTdG9wLCBzZXRDb25maXJtaW5nU3RvcF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBpZiAoY29uZmlybWluZ1N0b3ApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT1cIlN0b3AgdWx0cmFwbGFuP1wiXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRDb25maXJtaW5nU3RvcChmYWxzZSl9XG4gICAgICAgIGNvbG9yPVwiYmFja2dyb3VuZFwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBUaGlzIHdpbGwgdGVybWluYXRlIHRoZSBDbGF1ZGUgQ29kZSBvbiB0aGUgd2ViIHNlc3Npb24uXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1Rlcm1pbmF0ZSBzZXNzaW9uJywgdmFsdWU6ICdzdG9wJyBhcyBjb25zdCB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnQmFjaycsIHZhbHVlOiAnYmFjaycgYXMgY29uc3QgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBvbkNoYW5nZT17diA9PiB7XG4gICAgICAgICAgICAgIGlmICh2ID09PSAnc3RvcCcpIHtcbiAgICAgICAgICAgICAgICBvbktpbGw/LigpXG4gICAgICAgICAgICAgICAgZ29CYWNrT3JDbG9zZSgpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybWluZ1N0b3AoZmFsc2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPXtcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICB7cGhhc2UgPT09ICdwbGFuX3JlYWR5JyA/IERJQU1PTkRfRklMTEVEIDogRElBTU9ORF9PUEVOfXsnICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+dWx0cmFwbGFuPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgeycgwrcgJ31cbiAgICAgICAgICAgIHtlbGFwc2VkVGltZX1cbiAgICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgICAgICB7c3RhdHVzVGV4dH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIH1cbiAgICAgIG9uQ2FuY2VsPXtnb0JhY2tPckNsb3NlfVxuICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7cGhhc2UgPT09ICdwbGFuX3JlYWR5JyAmJiAoXG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj57ZmlndXJlcy50aWNrfSA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWdlbnRzV29ya2luZ30ge3BsdXJhbChhZ2VudHNXb3JraW5nLCAnYWdlbnQnKX17JyAnfVxuICAgICAgICAgIHtwaGFzZSA/IEFHRU5UX1ZFUkJbcGhhc2VdIDogJ3dvcmtpbmcnfSDCtyB7dG9vbENhbGxzfSB0b29seycgJ31cbiAgICAgICAgICB7cGx1cmFsKHRvb2xDYWxscywgJ2NhbGwnKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7bGFzdFRvb2xDYWxsICYmIDxUZXh0IGRpbUNvbG9yPntsYXN0VG9vbENhbGx9PC9UZXh0Pn1cbiAgICAgICAgPExpbmsgdXJsPXtzZXNzaW9uVXJsfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c2Vzc2lvblVybH08L1RleHQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdSZXZpZXcgaW4gQ2xhdWRlIENvZGUgb24gdGhlIHdlYicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnb3BlbicgYXMgY29uc3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKG9uS2lsbCAmJiBydW5uaW5nXG4gICAgICAgICAgICAgID8gW3sgbGFiZWw6ICdTdG9wIHVsdHJhcGxhbicsIHZhbHVlOiAnc3RvcCcgYXMgY29uc3QgfV1cbiAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICB7IGxhYmVsOiAnQmFjaycsIHZhbHVlOiAnYmFjaycgYXMgY29uc3QgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodikge1xuICAgICAgICAgICAgICBjYXNlICdvcGVuJzpcbiAgICAgICAgICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKHNlc3Npb25VcmwpXG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGRpYWxvZyBzbyB0aGUgdXNlciBsYW5kcyBiYWNrIGF0IHRoZSBwcm9tcHQgd2l0aFxuICAgICAgICAgICAgICAgIC8vIGFueSBoYWxmLXdyaXR0ZW4gaW5wdXQgaW50YWN0IChpbnB1dFZhbHVlIHBlcnNpc3RzIGFjcm9zc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBzaG93QmFzaGVzRGlhbG9nIHRvZ2dsZSkuXG4gICAgICAgICAgICAgICAgb25Eb25lKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgY2FzZSAnc3RvcCc6XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybWluZ1N0b3AodHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgY2FzZSAnYmFjayc6XG4gICAgICAgICAgICAgICAgZ29CYWNrT3JDbG9zZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmNvbnN0IFNUQUdFUyA9IFsnZmluZGluZycsICd2ZXJpZnlpbmcnLCAnc3ludGhlc2l6aW5nJ10gYXMgY29uc3RcbmNvbnN0IFNUQUdFX0xBQkVMUzogUmVjb3JkPCh0eXBlb2YgU1RBR0VTKVtudW1iZXJdLCBzdHJpbmc+ID0ge1xuICBmaW5kaW5nOiAnRmluZCcsXG4gIHZlcmlmeWluZzogJ1ZlcmlmeScsXG4gIHN5bnRoZXNpemluZzogJ0RlZHVwZScsXG59XG5cbi8vIFNldHVwIOKGkiBGaW5kIOKGkiBWZXJpZnkg4oaSIERlZHVwZSBwaXBlbGluZS4gQ3VycmVudCBzdGFnZSBpbiBjbG91ZCB0ZWFsLFxuLy8gcmVzdCBkaW0uIFdoZW4gY29tcGxldGVkLCBhbGwgc3RhZ2VzIGRpbSB3aXRoIGEgdHJhaWxpbmcgZ3JlZW4g4pyTLiBUaGVcbi8vIFwiU2V0dXBcIiBsYWJlbCBzaG93cyBiZWZvcmUgdGhlIG9yY2hlc3RyYXRvciB3cml0ZXMgaXRzIGZpcnN0IHByb2dyZXNzXG4vLyBzbmFwc2hvdCAoY29udGFpbmVyIGJvb3QgKyByZXBvIGNsb25lKSwgc28gdGhlIDAtZm91bmQgZGlzcGxheSBkb2Vzbid0XG4vLyBsb29rIGxpa2UgYSBodW5nIGZpbmRlci5cbmZ1bmN0aW9uIFN0YWdlUGlwZWxpbmUoe1xuICBzdGFnZSxcbiAgY29tcGxldGVkLFxuICBoYXNQcm9ncmVzcyxcbn06IHtcbiAgc3RhZ2U6ICdmaW5kaW5nJyB8ICd2ZXJpZnlpbmcnIHwgJ3N5bnRoZXNpemluZycgfCB1bmRlZmluZWRcbiAgY29tcGxldGVkOiBib29sZWFuXG4gIGhhc1Byb2dyZXNzOiBib29sZWFuXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgY3VycmVudElkeCA9IHN0YWdlID8gU1RBR0VTLmluZGV4T2Yoc3RhZ2UpIDogLTFcbiAgY29uc3QgaW5TZXR1cCA9ICFjb21wbGV0ZWQgJiYgIWhhc1Byb2dyZXNzXG4gIHJldHVybiAoXG4gICAgPFRleHQ+XG4gICAgICB7aW5TZXR1cCA/IChcbiAgICAgICAgPFRleHQgY29sb3I9XCJiYWNrZ3JvdW5kXCI+U2V0dXA8L1RleHQ+XG4gICAgICApIDogKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5TZXR1cDwvVGV4dD5cbiAgICAgICl9XG4gICAgICA8VGV4dCBkaW1Db2xvcj4g4oaSIDwvVGV4dD5cbiAgICAgIHtTVEFHRVMubWFwKChzLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ3VycmVudCA9ICFjb21wbGV0ZWQgJiYgIWluU2V0dXAgJiYgaSA9PT0gY3VycmVudElkeFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3N9PlxuICAgICAgICAgICAge2kgPiAwICYmIDxUZXh0IGRpbUNvbG9yPiDihpIgPC9UZXh0Pn1cbiAgICAgICAgICAgIHtpc0N1cnJlbnQgPyAoXG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPntTVEFHRV9MQUJFTFNbc119PC9UZXh0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e1NUQUdFX0xBQkVMU1tzXX08L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAge2NvbXBsZXRlZCAmJiA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj4g4pyTPC9UZXh0Pn1cbiAgICA8L1RleHQ+XG4gIClcbn1cblxuLy8gU3RhZ2UtYXBwcm9wcmlhdGUgY291bnRzIGxpbmUuIFJ1bm5pbmctc3RhdGUgZm9ybWF0dGluZyBkZWxlZ2F0ZXMgdG9cbi8vIGZvcm1hdFJldmlld1N0YWdlQ291bnRzIChzaGFyZWQgd2l0aCB0aGUgcGlsbCkgc28gdGhlIHR3byB2aWV3cyBjYW4ndFxuLy8gZHJpZnQ7IGNvbXBsZXRlZCBzdGF0ZSBpcyBkaWFsb2ctc3BlY2lmaWMgKGZpbmRpbmdzIHN1bW1hcnkpLlxuZnVuY3Rpb24gcmV2aWV3Q291bnRzTGluZShcbiAgc2Vzc2lvbjogRGVlcEltbXV0YWJsZTxSZW1vdGVBZ2VudFRhc2tTdGF0ZT4sXG4pOiBzdHJpbmcge1xuICBjb25zdCBwID0gc2Vzc2lvbi5yZXZpZXdQcm9ncmVzc1xuICAvLyBObyBwcm9ncmVzcyBkYXRhIOKAlCB0aGUgb3JjaGVzdHJhdG9yIG5ldmVyIHdyb3RlIGEgc25hcHNob3QuIERvbid0XG4gIC8vIGNsYWltIFwiMCBmaW5kaW5nc1wiIHdoZW4gY29tcGxldGVkOyB3ZSBqdXN0IGRvbid0IGtub3cuXG4gIGlmICghcCkgcmV0dXJuIHNlc3Npb24uc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdkb25lJyA6ICdzZXR0aW5nIHVwJ1xuICBjb25zdCB2ZXJpZmllZCA9IHAuYnVnc1ZlcmlmaWVkXG4gIGNvbnN0IHJlZnV0ZWQgPSBwLmJ1Z3NSZWZ1dGVkID8/IDBcbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgIGNvbnN0IHBhcnRzID0gW2Ake3ZlcmlmaWVkfSAke3BsdXJhbCh2ZXJpZmllZCwgJ2ZpbmRpbmcnKX1gXVxuICAgIGlmIChyZWZ1dGVkID4gMCkgcGFydHMucHVzaChgJHtyZWZ1dGVkfSByZWZ1dGVkYClcbiAgICByZXR1cm4gcGFydHMuam9pbignIMK3ICcpXG4gIH1cbiAgcmV0dXJuIGZvcm1hdFJldmlld1N0YWdlQ291bnRzKHAuc3RhZ2UsIHAuYnVnc0ZvdW5kLCB2ZXJpZmllZCwgcmVmdXRlZClcbn1cblxudHlwZSBNZW51QWN0aW9uID0gJ29wZW4nIHwgJ3N0b3AnIHwgJ2JhY2snIHwgJ2Rpc21pc3MnXG5cbmZ1bmN0aW9uIFJldmlld1Nlc3Npb25EZXRhaWwoe1xuICBzZXNzaW9uLFxuICBvbkRvbmUsXG4gIG9uQmFjayxcbiAgb25LaWxsLFxufTogT21pdDxQcm9wcywgJ3Rvb2xVc2VDb250ZXh0Jz4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBjb21wbGV0ZWQgPSBzZXNzaW9uLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCdcbiAgY29uc3QgcnVubmluZyA9IHNlc3Npb24uc3RhdHVzID09PSAncnVubmluZycgfHwgc2Vzc2lvbi5zdGF0dXMgPT09ICdwZW5kaW5nJ1xuICBjb25zdCBbY29uZmlybWluZ1N0b3AsIHNldENvbmZpcm1pbmdTdG9wXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIHVzZUVsYXBzZWRUaW1lIGRyaXZlcyB0aGUgMUh6IHRpY2sgc28gdGhlIHRpbWVyIGFkdmFuY2VzIHdoaWxlIHRoZVxuICAvLyBkaWFsb2cgaXMgb3BlbiDigJQgdGhlIHByZXZpb3VzIGlubGluZSBlbGFwc2VkLXRpbWUgY2FsY3VsYXRpb24gb25seVxuICAvLyByZS1yZW5kZXJlZCBvbiBzZXNzaW9uIHN0YXRlIGNoYW5nZXMgKHBvbGwgaW50ZXJ2YWwpLCB3aGljaCBsb29rZWRcbiAgLy8gbGlrZSB0aGUgY2xvY2sgd2FzIHN0dWNrLlxuICBjb25zdCBlbGFwc2VkVGltZSA9IHVzZUVsYXBzZWRUaW1lKFxuICAgIHNlc3Npb24uc3RhcnRUaW1lLFxuICAgIHJ1bm5pbmcsXG4gICAgMTAwMCxcbiAgICAwLFxuICAgIHNlc3Npb24uZW5kVGltZSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT5cbiAgICBvbkRvbmUoJ1JlbW90ZSBzZXNzaW9uIGRldGFpbHMgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICBjb25zdCBnb0JhY2tPckNsb3NlID0gb25CYWNrID8/IGhhbmRsZUNsb3NlXG5cbiAgY29uc3Qgc2Vzc2lvblVybCA9IGdldFJlbW90ZVRhc2tTZXNzaW9uVXJsKHNlc3Npb24uc2Vzc2lvbklkKVxuICBjb25zdCBzdGF0dXNMYWJlbCA9IGNvbXBsZXRlZCA/ICdyZWFkeScgOiBydW5uaW5nID8gJ3J1bm5pbmcnIDogc2Vzc2lvbi5zdGF0dXNcblxuICBpZiAoY29uZmlybWluZ1N0b3ApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT1cIlN0b3AgdWx0cmFyZXZpZXc/XCJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldENvbmZpcm1pbmdTdG9wKGZhbHNlKX1cbiAgICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFRoaXMgYXJjaGl2ZXMgdGhlIHJlbW90ZSBzZXNzaW9uIGFuZCBzdG9wcyBsb2NhbCB0cmFja2luZy4gVGhlXG4gICAgICAgICAgICByZXZpZXcgd2lsbCBub3QgY29tcGxldGUgYW5kIGFueSBmaW5kaW5ncyBzbyBmYXIgYXJlIGRpc2NhcmRlZC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnU3RvcCB1bHRyYXJldmlldycsIHZhbHVlOiAnc3RvcCcgYXMgY29uc3QgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0JhY2snLCB2YWx1ZTogJ2JhY2snIGFzIGNvbnN0IH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4ge1xuICAgICAgICAgICAgICBpZiAodiA9PT0gJ3N0b3AnKSB7XG4gICAgICAgICAgICAgICAgb25LaWxsPy4oKVxuICAgICAgICAgICAgICAgIGdvQmFja09yQ2xvc2UoKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1pbmdTdG9wKGZhbHNlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgKVxuICB9XG5cbiAgY29uc3Qgb3B0aW9uczogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogTWVudUFjdGlvbiB9W10gPSBjb21wbGV0ZWRcbiAgICA/IFtcbiAgICAgICAgeyBsYWJlbDogJ09wZW4gaW4gQ2xhdWRlIENvZGUgb24gdGhlIHdlYicsIHZhbHVlOiAnb3BlbicgfSxcbiAgICAgICAgeyBsYWJlbDogJ0Rpc21pc3MnLCB2YWx1ZTogJ2Rpc21pc3MnIH0sXG4gICAgICBdXG4gICAgOiBbXG4gICAgICAgIHsgbGFiZWw6ICdPcGVuIGluIENsYXVkZSBDb2RlIG9uIHRoZSB3ZWInLCB2YWx1ZTogJ29wZW4nIH0sXG4gICAgICAgIC4uLihvbktpbGwgJiYgcnVubmluZ1xuICAgICAgICAgID8gW3sgbGFiZWw6ICdTdG9wIHVsdHJhcmV2aWV3JywgdmFsdWU6ICdzdG9wJyBhcyBjb25zdCB9XVxuICAgICAgICAgIDogW10pLFxuICAgICAgICB7IGxhYmVsOiAnQmFjaycsIHZhbHVlOiAnYmFjaycgfSxcbiAgICAgIF1cblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoYWN0aW9uOiBNZW51QWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKHNlc3Npb25VcmwpXG4gICAgICAgIG9uRG9uZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzdG9wJzpcbiAgICAgICAgc2V0Q29uZmlybWluZ1N0b3AodHJ1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhY2snOlxuICAgICAgICBnb0JhY2tPckNsb3NlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Rpc21pc3MnOlxuICAgICAgICBoYW5kbGVDbG9zZSgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAge2NvbXBsZXRlZCA/IERJQU1PTkRfRklMTEVEIDogRElBTU9ORF9PUEVOfXsnICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+dWx0cmFyZXZpZXc8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7JyDCtyAnfVxuICAgICAgICAgICAge2VsYXBzZWRUaW1lfVxuICAgICAgICAgICAgeycgwrcgJ31cbiAgICAgICAgICAgIHtzdGF0dXNMYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIH1cbiAgICAgIG9uQ2FuY2VsPXtnb0JhY2tPckNsb3NlfVxuICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwic2VsZWN0XCIgLz5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzY1wiIGFjdGlvbj1cImdvIGJhY2tcIiAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPFN0YWdlUGlwZWxpbmVcbiAgICAgICAgICBzdGFnZT17c2Vzc2lvbi5yZXZpZXdQcm9ncmVzcz8uc3RhZ2V9XG4gICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgaGFzUHJvZ3Jlc3M9eyEhc2Vzc2lvbi5yZXZpZXdQcm9ncmVzc31cbiAgICAgICAgLz5cblxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dD57cmV2aWV3Q291bnRzTGluZShzZXNzaW9uKX08L1RleHQ+XG4gICAgICAgICAgPExpbmsgdXJsPXtzZXNzaW9uVXJsfT5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntzZXNzaW9uVXJsfTwvVGV4dD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZW1vdGVTZXNzaW9uRGV0YWlsRGlhbG9nKHtcbiAgc2Vzc2lvbixcbiAgdG9vbFVzZUNvbnRleHQsXG4gIG9uRG9uZSxcbiAgb25CYWNrLFxuICBvbktpbGwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtpc1RlbGVwb3J0aW5nLCBzZXRJc1RlbGVwb3J0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdGVsZXBvcnRFcnJvciwgc2V0VGVsZXBvcnRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIEdldCBsYXN0IGZldyBtZXNzYWdlcyBmcm9tIHJlbW90ZSBzZXNzaW9uIGZvciBkaXNwbGF5LlxuICAvLyBTY2FuIGFsbCBtZXNzYWdlcyAobm90IGp1c3QgdGhlIGxhc3QgMyByYXcgZW50cmllcykgYmVjYXVzZSB0aGUgdGFpbCBvZlxuICAvLyB0aGUgbG9nIGlzIG9mdGVuIHRoaW5raW5nLW9ubHkgYmxvY2tzIHRoYXQgbm9ybWFsaXNlIHRvICdwcm9ncmVzcycgdHlwZS5cbiAgLy8gUGxhY2VkIGJlZm9yZSB0aGUgZWFybHkgcmV0dXJucyBzbyBob29rIGNhbGwgb3JkZXIgaXMgc3RhYmxlIChSdWxlcyBvZiBIb29rcykuXG4gIC8vIFVsdHJhcGxhbi9yZXZpZXcgc2Vzc2lvbnMgbmV2ZXIgcmVhZCB0aGlzIOKAlCBza2lwIHRoZSBub3JtYWxpemUgd29yayBmb3IgdGhlbS5cbiAgY29uc3QgbGFzdE1lc3NhZ2VzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24uaXNVbHRyYXBsYW4gfHwgc2Vzc2lvbi5pc1JlbW90ZVJldmlldykgcmV0dXJuIFtdXG4gICAgcmV0dXJuIG5vcm1hbGl6ZU1lc3NhZ2VzKHRvSW50ZXJuYWxNZXNzYWdlcyhzZXNzaW9uLmxvZyBhcyBTREtNZXNzYWdlW10pKVxuICAgICAgLmZpbHRlcihfID0+IF8udHlwZSAhPT0gJ3Byb2dyZXNzJylcbiAgICAgIC5zbGljZSgtMylcbiAgfSwgW3Nlc3Npb25dKVxuXG4gIGlmIChzZXNzaW9uLmlzVWx0cmFwbGFuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVbHRyYXBsYW5TZXNzaW9uRGV0YWlsXG4gICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgIG9uRG9uZT17b25Eb25lfVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgb25LaWxsPXtvbktpbGx9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIC8vIFJldmlldyBzZXNzaW9ucyBnZXQgdGhlIHN0YWdlLXBpcGVsaW5lIHZpZXc7IGV2ZXJ5dGhpbmcgZWxzZSBrZWVwcyB0aGVcbiAgLy8gZ2VuZXJpYyBsYWJlbC92YWx1ZSArIHJlY2VudC1tZXNzYWdlcyBkaWFsb2cgYmVsb3cuXG4gIGlmIChzZXNzaW9uLmlzUmVtb3RlUmV2aWV3KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZXZpZXdTZXNzaW9uRGV0YWlsXG4gICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgIG9uRG9uZT17b25Eb25lfVxuICAgICAgICBvbkJhY2s9e29uQmFja31cbiAgICAgICAgb25LaWxsPXtvbktpbGx9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT5cbiAgICBvbkRvbmUoJ1JlbW90ZSBzZXNzaW9uIGRldGFpbHMgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuXG4gIC8vIENvbXBvbmVudC1zcGVjaWZpYyBzaG9ydGN1dHMgc2hvd24gaW4gVUkgaGludHMgKHQ9dGVsZXBvcnQsIHNwYWNlPWRpc21pc3MsXG4gIC8vIGxlZnQ9YmFjaykuIFRoZXNlIGFyZSBzdGF0ZS1kZXBlbmRlbnQgYWN0aW9ucywgbm90IHN0YW5kYXJkIGRpYWxvZyBrZXliaW5kaW5ncy5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnICcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25Eb25lKCdSZW1vdGUgc2Vzc2lvbiBkZXRhaWxzIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnbGVmdCcgJiYgb25CYWNrKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uQmFjaygpXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ3QnICYmICFpc1RlbGVwb3J0aW5nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHZvaWQgaGFuZGxlVGVsZXBvcnQoKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdyZXR1cm4nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZUNsb3NlKClcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgdGVsZXBvcnRpbmcgdG8gcmVtb3RlIHNlc3Npb25cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVGVsZXBvcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgc2V0SXNUZWxlcG9ydGluZyh0cnVlKVxuICAgIHNldFRlbGVwb3J0RXJyb3IobnVsbClcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0ZWxlcG9ydFJlc3VtZUNvZGVTZXNzaW9uKHNlc3Npb24uc2Vzc2lvbklkKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0VGVsZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UoZXJyKSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNUZWxlcG9ydGluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvLyBUcnVuY2F0ZSB0aXRsZSBpZiB0b28gbG9uZyAoZm9yIGRpc3BsYXkgcHVycG9zZXMpXG4gIGNvbnN0IGRpc3BsYXlUaXRsZSA9IHRydW5jYXRlVG9XaWR0aChzZXNzaW9uLnRpdGxlLCA1MClcblxuICAvLyBNYXAgVGFza1N0YXR1cyB0byBkaXNwbGF5IHN0YXR1cyAoaGFuZGxlICdwZW5kaW5nJylcbiAgY29uc3QgZGlzcGxheVN0YXR1cyA9XG4gICAgc2Vzc2lvbi5zdGF0dXMgPT09ICdwZW5kaW5nJyA/ICdzdGFydGluZycgOiBzZXNzaW9uLnN0YXR1c1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgID5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJSZW1vdGUgc2Vzc2lvbiBkZXRhaWxzXCJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNsb3NlfVxuICAgICAgICBjb2xvcj1cImJhY2tncm91bmRcIlxuICAgICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgIDxUZXh0PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAge29uQmFjayAmJiA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpBcIiBhY3Rpb249XCJnbyBiYWNrXCIgLz59XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVzYy9FbnRlci9TcGFjZVwiIGFjdGlvbj1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgeyFpc1RlbGVwb3J0aW5nICYmIChcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJ0XCIgYWN0aW9uPVwidGVsZXBvcnRcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5TdGF0dXM8L1RleHQ+OnsnICd9XG4gICAgICAgICAgICB7ZGlzcGxheVN0YXR1cyA9PT0gJ3J1bm5pbmcnIHx8IGRpc3BsYXlTdGF0dXMgPT09ICdzdGFydGluZycgPyAoXG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPntkaXNwbGF5U3RhdHVzfTwvVGV4dD5cbiAgICAgICAgICAgICkgOiBkaXNwbGF5U3RhdHVzID09PSAnY29tcGxldGVkJyA/IChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+e2Rpc3BsYXlTdGF0dXN9PC9UZXh0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntkaXNwbGF5U3RhdHVzfTwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5SdW50aW1lPC9UZXh0Pjp7JyAnfVxuICAgICAgICAgICAge2Zvcm1hdER1cmF0aW9uKFxuICAgICAgICAgICAgICAoc2Vzc2lvbi5lbmRUaW1lID8/IERhdGUubm93KCkpIC0gc2Vzc2lvbi5zdGFydFRpbWUsXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCB3cmFwPVwidHJ1bmNhdGUtZW5kXCI+XG4gICAgICAgICAgICA8VGV4dCBib2xkPlRpdGxlPC9UZXh0Pjoge2Rpc3BsYXlUaXRsZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8VGV4dCBib2xkPlByb2dyZXNzPC9UZXh0Pjp7JyAnfVxuICAgICAgICAgICAgPFJlbW90ZVNlc3Npb25Qcm9ncmVzcyBzZXNzaW9uPXtzZXNzaW9ufSAvPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+U2Vzc2lvbiBVUkw8L1RleHQ+OnsnICd9XG4gICAgICAgICAgICA8TGluayB1cmw9e2dldFJlbW90ZVRhc2tTZXNzaW9uVXJsKHNlc3Npb24uc2Vzc2lvbklkKX0+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntnZXRSZW1vdGVUYXNrU2Vzc2lvblVybChzZXNzaW9uLnNlc3Npb25JZCl9PC9UZXh0PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgey8qIFJlbW90ZSBzZXNzaW9uIG1lc3NhZ2VzIHNlY3Rpb24gKi99XG4gICAgICAgIHtzZXNzaW9uLmxvZy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+UmVjZW50IG1lc3NhZ2VzPC9UZXh0PjpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD17MTB9IG92ZXJmbG93WT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICB7bGFzdE1lc3NhZ2VzLm1hcCgobXNnLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21zZ31cbiAgICAgICAgICAgICAgICAgIGxvb2t1cHM9e0VNUFRZX0xPT0tVUFN9XG4gICAgICAgICAgICAgICAgICBhZGRNYXJnaW49e2kgPiAwfVxuICAgICAgICAgICAgICAgICAgdG9vbHM9e3Rvb2xVc2VDb250ZXh0Lm9wdGlvbnMudG9vbHN9XG4gICAgICAgICAgICAgICAgICBjb21tYW5kcz17dG9vbFVzZUNvbnRleHQub3B0aW9ucy5jb21tYW5kc31cbiAgICAgICAgICAgICAgICAgIHZlcmJvc2U9e3Rvb2xVc2VDb250ZXh0Lm9wdGlvbnMudmVyYm9zZX1cbiAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NUb29sVXNlSURzPXtuZXcgU2V0KCl9XG4gICAgICAgICAgICAgICAgICBwcm9ncmVzc01lc3NhZ2VzRm9yTWVzc2FnZT17W119XG4gICAgICAgICAgICAgICAgICBzaG91bGRBbmltYXRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHNob3VsZFNob3dEb3Q9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjb25kZW5zZWRcIlxuICAgICAgICAgICAgICAgICAgaXNUcmFuc2NyaXB0TW9kZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBpc1N0YXRpYz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgICAgU2hvd2luZyBsYXN0IHtsYXN0TWVzc2FnZXMubGVuZ3RofSBvZiB7c2Vzc2lvbi5sb2cubGVuZ3RofXsnICd9XG4gICAgICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRlbGVwb3J0IGVycm9yIG1lc3NhZ2UgKi99XG4gICAgICAgIHt0ZWxlcG9ydEVycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+VGVsZXBvcnQgZmFpbGVkOiB7dGVsZXBvcnRFcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRlbGVwb3J0aW5nIHN0YXR1cyAqL31cbiAgICAgICAge2lzVGVsZXBvcnRpbmcgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPlRlbGVwb3J0aW5nIHRvIHNlc3Npb27igKY8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwge1xuICBTdXNwZW5zZSxcbiAgdXNlLFxuICB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgRGVlcEltbXV0YWJsZSB9IGZyb20gJ3NyYy90eXBlcy91dGlscy5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsU2hlbGxUYXNrU3RhdGUgfSBmcm9tICcuLi8uLi90YXNrcy9Mb2NhbFNoZWxsVGFzay9ndWFyZHMuanMnXG5pbXBvcnQge1xuICBmb3JtYXREdXJhdGlvbixcbiAgZm9ybWF0RmlsZVNpemUsXG4gIHRydW5jYXRlVG9XaWR0aCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgdGFpbEZpbGUgfSBmcm9tICcuLi8uLi91dGlscy9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBnZXRUYXNrT3V0cHV0UGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3Rhc2svZGlza091dHB1dC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNoZWxsOiBEZWVwSW1tdXRhYmxlPExvY2FsU2hlbGxUYXNrU3RhdGU+XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG4gIG9uS2lsbFNoZWxsPzogKCkgPT4gdm9pZFxuICBvbkJhY2s/OiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IFNIRUxMX0RFVEFJTF9UQUlMX0JZVEVTID0gODE5MlxuXG50eXBlIFRhc2tPdXRwdXRSZXN1bHQgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBieXRlc1RvdGFsOiBudW1iZXJcbn1cblxuLyoqXG4gKiBSZWFkIHRoZSB0YWlsIG9mIHRoZSB0YXNrIG91dHB1dCBmaWxlLiBPbmx5IHJlYWRzIHRoZSBsYXN0IGZldyBLQixcbiAqIG5vdCB0aGUgZW50aXJlIGZpbGUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRhc2tPdXRwdXQoXG4gIHNoZWxsOiBEZWVwSW1tdXRhYmxlPExvY2FsU2hlbGxUYXNrU3RhdGU+LFxuKTogUHJvbWlzZTxUYXNrT3V0cHV0UmVzdWx0PiB7XG4gIGNvbnN0IHBhdGggPSBnZXRUYXNrT3V0cHV0UGF0aChzaGVsbC5pZClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0YWlsRmlsZShwYXRoLCBTSEVMTF9ERVRBSUxfVEFJTF9CWVRFUylcbiAgICByZXR1cm4geyBjb250ZW50OiByZXN1bHQuY29udGVudCwgYnl0ZXNUb3RhbDogcmVzdWx0LmJ5dGVzVG90YWwgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4geyBjb250ZW50OiAnJywgYnl0ZXNUb3RhbDogMCB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNoZWxsRGV0YWlsRGlhbG9nKHtcbiAgc2hlbGwsXG4gIG9uRG9uZSxcbiAgb25LaWxsU2hlbGwsXG4gIG9uQmFjayxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBjb2x1bW5zIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuXG4gIC8vIFByb21pc2UgY3JlYXRlZCBpbiBpbml0aWFsaXplciAobm90IGR1cmluZyByZW5kZXIpLiBGb3IgcnVubmluZyBzaGVsbHMsXG4gIC8vIHRoZSBlZmZlY3QgdGltZXIgcmVwbGFjZXMgaXQgcGVyaW9kaWNhbGx5IHRvIHBpY2sgdXAgbmV3IG91dHB1dC5cbiAgLy8gdXNlRGVmZXJyZWRWYWx1ZSBrZWVwcyBzaG93aW5nIHRoZSBwcmV2aW91cyBvdXRwdXQgd2hpbGUgdGhlIG5ldyBwcm9taXNlXG4gIC8vIHJlc29sdmVzLCBwcmV2ZW50aW5nIHRoZSBTdXNwZW5zZSBmYWxsYmFjayBmcm9tIGZsaWNrZXJpbmcuXG4gIGNvbnN0IFtvdXRwdXRQcm9taXNlLCBzZXRPdXRwdXRQcm9taXNlXSA9IHVzZVN0YXRlPFByb21pc2U8VGFza091dHB1dFJlc3VsdD4+KFxuICAgICgpID0+IGdldFRhc2tPdXRwdXQoc2hlbGwpLFxuICApXG4gIGNvbnN0IGRlZmVycmVkT3V0cHV0UHJvbWlzZSA9IHVzZURlZmVycmVkVmFsdWUob3V0cHV0UHJvbWlzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaGVsbC5zdGF0dXMgIT09ICdydW5uaW5nJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoXG4gICAgICAoc2V0T3V0cHV0UHJvbWlzZSwgc2hlbGwpID0+IHNldE91dHB1dFByb21pc2UoZ2V0VGFza091dHB1dChzaGVsbCkpLFxuICAgICAgMTAwMCxcbiAgICAgIHNldE91dHB1dFByb21pc2UsXG4gICAgICBzaGVsbCxcbiAgICApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpXG4gIH0sIFtzaGVsbC5pZCwgc2hlbGwuc3RhdHVzXSlcblxuICAvLyBIYW5kbGUgc3RhbmRhcmQgY2xvc2UgYWN0aW9uXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT5cbiAgICBvbkRvbmUoJ1NoZWxsIGRldGFpbHMgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuXG4gIC8vIEhhbmRsZSBhZGRpdGlvbmFsIGNsb3NlIGFjdGlvbnMgYmV5b25kIERpYWxvZydzIGJ1aWx0LWluIEVzYyBoYW5kbGVyXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdjb25maXJtOnllcyc6IGhhbmRsZUNsb3NlLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9LFxuICApXG5cbiAgLy8gSGFuZGxlIGRpYWxvZy1zcGVjaWZpYyBrZXlzXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJyAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uRG9uZSgnU2hlbGwgZGV0YWlscyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2xlZnQnICYmIG9uQmFjaykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbkJhY2soKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICd4JyAmJiBzaGVsbC5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBvbktpbGxTaGVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBvbktpbGxTaGVsbCgpXG4gICAgfVxuICB9XG5cbiAgLy8gVHJ1bmNhdGUgY29tbWFuZCBpZiB0b28gbG9uZyAoZm9yIGRpc3BsYXkgcHVycG9zZXMpXG4gIGNvbnN0IGlzTW9uaXRvciA9IHNoZWxsLmtpbmQgPT09ICdtb25pdG9yJ1xuICBjb25zdCBkaXNwbGF5Q29tbWFuZCA9IHRydW5jYXRlVG9XaWR0aChzaGVsbC5jb21tYW5kLCAyODApXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgYXV0b0ZvY3VzXG4gICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgPlxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17aXNNb25pdG9yID8gJ01vbml0b3IgZGV0YWlscycgOiAnU2hlbGwgZGV0YWlscyd9XG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgICAgaW5wdXRHdWlkZT17ZXhpdFN0YXRlID0+XG4gICAgICAgICAgZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIHtvbkJhY2sgJiYgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaQXCIgYWN0aW9uPVwiZ28gYmFja1wiIC8+fVxuICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFc2MvRW50ZXIvU3BhY2VcIiBhY3Rpb249XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICAgIHtzaGVsbC5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBvbktpbGxTaGVsbCAmJiAoXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwieFwiIGFjdGlvbj1cInN0b3BcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5TdGF0dXM6PC9UZXh0PnsnICd9XG4gICAgICAgICAgICB7c2hlbGwuc3RhdHVzID09PSAncnVubmluZycgPyAoXG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIHtzaGVsbC5zdGF0dXN9XG4gICAgICAgICAgICAgICAge3NoZWxsLnJlc3VsdD8uY29kZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICBgIChleGl0IGNvZGU6ICR7c2hlbGwucmVzdWx0LmNvZGV9KWB9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkgOiBzaGVsbC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICB7c2hlbGwuc3RhdHVzfVxuICAgICAgICAgICAgICAgIHtzaGVsbC5yZXN1bHQ/LmNvZGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgYCAoZXhpdCBjb2RlOiAke3NoZWxsLnJlc3VsdC5jb2RlfSlgfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAge3NoZWxsLnN0YXR1c31cbiAgICAgICAgICAgICAgICB7c2hlbGwucmVzdWx0Py5jb2RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgIGAgKGV4aXQgY29kZTogJHtzaGVsbC5yZXN1bHQuY29kZX0pYH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8VGV4dCBib2xkPlJ1bnRpbWU6PC9UZXh0PnsnICd9XG4gICAgICAgICAgICB7Zm9ybWF0RHVyYXRpb24oKHNoZWxsLmVuZFRpbWUgPz8gRGF0ZS5ub3coKSkgLSBzaGVsbC5zdGFydFRpbWUpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCB3cmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgPFRleHQgYm9sZD57aXNNb25pdG9yID8gJ1NjcmlwdDonIDogJ0NvbW1hbmQ6J308L1RleHQ+eycgJ31cbiAgICAgICAgICAgIHtkaXNwbGF5Q29tbWFuZH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGJvbGQ+T3V0cHV0OjwvVGV4dD5cbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxUZXh0IGRpbUNvbG9yPkxvYWRpbmcgb3V0cHV04oCmPC9UZXh0Pn0+XG4gICAgICAgICAgICA8U2hlbGxPdXRwdXRDb250ZW50XG4gICAgICAgICAgICAgIG91dHB1dFByb21pc2U9e2RlZmVycmVkT3V0cHV0UHJvbWlzZX1cbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIFNoZWxsT3V0cHV0Q29udGVudFByb3BzID0ge1xuICBvdXRwdXRQcm9taXNlOiBQcm9taXNlPFRhc2tPdXRwdXRSZXN1bHQ+XG4gIGNvbHVtbnM6IG51bWJlclxufVxuXG5mdW5jdGlvbiBTaGVsbE91dHB1dENvbnRlbnQoe1xuICBvdXRwdXRQcm9taXNlLFxuICBjb2x1bW5zLFxufTogU2hlbGxPdXRwdXRDb250ZW50UHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IGNvbnRlbnQsIGJ5dGVzVG90YWwgfSA9IHVzZShvdXRwdXRQcm9taXNlKVxuXG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybiA8VGV4dCBkaW1Db2xvcj5ObyBvdXRwdXQgYXZhaWxhYmxlPC9UZXh0PlxuICB9XG5cbiAgLy8gRmluZCBsYXN0IDEwIGxpbmUgYm91bmRhcmllcyB2aWEgbGFzdEluZGV4T2ZcbiAgY29uc3Qgc3RhcnRzOiBudW1iZXJbXSA9IFtdXG4gIGxldCBwb3MgPSBjb250ZW50Lmxlbmd0aFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICYmIHBvcyA+IDA7IGkrKykge1xuICAgIGNvbnN0IHByZXYgPSBjb250ZW50Lmxhc3RJbmRleE9mKCdcXG4nLCBwb3MgLSAxKVxuICAgIHN0YXJ0cy5wdXNoKHByZXYgKyAxKVxuICAgIHBvcyA9IHByZXZcbiAgfVxuICBzdGFydHMucmV2ZXJzZSgpXG4gIGNvbnN0IGlzSW5jb21wbGV0ZSA9IGJ5dGVzVG90YWwgPiBjb250ZW50Lmxlbmd0aFxuXG4gIC8vIEJ1aWxkIGxpbmVzLCBza2lwIGVtcHR5IHRyYWlsaW5nL2xlYWRpbmcgc2VnbWVudHNcbiAgY29uc3QgcmVuZGVyZWQ6IHN0cmluZ1tdID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydCA9IHN0YXJ0c1tpXSFcbiAgICBjb25zdCBlbmQgPSBpIDwgc3RhcnRzLmxlbmd0aCAtIDEgPyBzdGFydHNbaSArIDFdISAtIDEgOiBjb250ZW50Lmxlbmd0aFxuICAgIGNvbnN0IGxpbmUgPSBjb250ZW50LnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgaWYgKGxpbmUpIHJlbmRlcmVkLnB1c2gobGluZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgYm9yZGVyU3R5bGU9XCJyb3VuZFwiXG4gICAgICAgIHBhZGRpbmdYPXsxfVxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgbWF4V2lkdGg9e2NvbHVtbnMgLSA2fVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyZWQubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgPFRleHQga2V5PXtpfSB3cmFwPVwidHJ1bmNhdGUtZW5kXCI+XG4gICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgIHtgU2hvd2luZyAke3JlbmRlcmVkLmxlbmd0aH0gbGluZXNgfVxuICAgICAgICB7aXNJbmNvbXBsZXRlID8gYCBvZiAke2Zvcm1hdEZpbGVTaXplKGJ5dGVzVG90YWwpfWAgOiAnJ31cbiAgICAgIDwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVuYXZhaWxhYmxlUGFuZWwgfSBmcm9tICcuLi8uLi9jb21wYXQvVW5hdmFpbGFibGVQYW5lbC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIFdvcmtmbG93RGV0YWlsRGlhbG9nKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPFVuYXZhaWxhYmxlUGFuZWxcbiAgICAgIHRpdGxlPVwiV29ya2Zsb3cgZGV0YWlscyB1bmF2YWlsYWJsZVwiXG4gICAgICBtZXNzYWdlPVwiV29ya2Zsb3cgdGFzayBkZXRhaWxzIGFyZSBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBsZWFrZWQtc3JjIGNvbXBhdGliaWxpdHkgYnVpbGQuXCJcbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVW5hdmFpbGFibGVQYW5lbCB9IGZyb20gJy4uLy4uL2NvbXBhdC9VbmF2YWlsYWJsZVBhbmVsLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gTW9uaXRvck1jcERldGFpbERpYWxvZygpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxVbmF2YWlsYWJsZVBhbmVsXG4gICAgICB0aXRsZT1cIk1vbml0b3IgZGV0YWlscyB1bmF2YWlsYWJsZVwiXG4gICAgICBtZXNzYWdlPVwiTW9uaXRvciBNQ1AgdGFzayBkZXRhaWxzIGFyZSBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBsZWFrZWQtc3JjIGNvbXBhdGliaWxpdHkgYnVpbGQuXCJcbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7XG4gIHR5cGUgUmVhY3ROb2RlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUVmZmVjdEV2ZW50LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzQ29vcmRpbmF0b3JNb2RlIH0gZnJvbSAnc3JjL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yTW9kZS5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQge1xuICBlbnRlclRlYW1tYXRlVmlldyxcbiAgZXhpdFRlYW1tYXRlVmlldyxcbn0gZnJvbSAnc3JjL3N0YXRlL3RlYW1tYXRlVmlld0hlbHBlcnMuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQge1xuICBEcmVhbVRhc2ssXG4gIHR5cGUgRHJlYW1UYXNrU3RhdGUsXG59IGZyb20gJ3NyYy90YXNrcy9EcmVhbVRhc2svRHJlYW1UYXNrLmpzJ1xuaW1wb3J0IHsgSW5Qcm9jZXNzVGVhbW1hdGVUYXNrIH0gZnJvbSAnc3JjL3Rhc2tzL0luUHJvY2Vzc1RlYW1tYXRlVGFzay9JblByb2Nlc3NUZWFtbWF0ZVRhc2suanMnXG5pbXBvcnQgdHlwZSB7IEluUHJvY2Vzc1RlYW1tYXRlVGFza1N0YXRlIH0gZnJvbSAnc3JjL3Rhc2tzL0luUHJvY2Vzc1RlYW1tYXRlVGFzay90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxBZ2VudFRhc2tTdGF0ZSB9IGZyb20gJ3NyYy90YXNrcy9Mb2NhbEFnZW50VGFzay9Mb2NhbEFnZW50VGFzay5qcydcbmltcG9ydCB7IExvY2FsQWdlbnRUYXNrIH0gZnJvbSAnc3JjL3Rhc2tzL0xvY2FsQWdlbnRUYXNrL0xvY2FsQWdlbnRUYXNrLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbFNoZWxsVGFza1N0YXRlIH0gZnJvbSAnc3JjL3Rhc2tzL0xvY2FsU2hlbGxUYXNrL2d1YXJkcy5qcydcbmltcG9ydCB7IExvY2FsU2hlbGxUYXNrIH0gZnJvbSAnc3JjL3Rhc2tzL0xvY2FsU2hlbGxUYXNrL0xvY2FsU2hlbGxUYXNrLmpzJ1xuLy8gVHlwZSBpbXBvcnQgaXMgZXJhc2VkIGF0IGJ1aWxkIHRpbWUg4oCUIHNhZmUgZXZlbiB0aG91Z2ggbW9kdWxlIGlzIGFudC1nYXRlZC5cbmltcG9ydCB0eXBlIHsgTG9jYWxXb3JrZmxvd1Rhc2tTdGF0ZSB9IGZyb20gJ3NyYy90YXNrcy9Mb2NhbFdvcmtmbG93VGFzay9Mb2NhbFdvcmtmbG93VGFzay5qcydcbmltcG9ydCB0eXBlIHsgTW9uaXRvck1jcFRhc2tTdGF0ZSB9IGZyb20gJ3NyYy90YXNrcy9Nb25pdG9yTWNwVGFzay9Nb25pdG9yTWNwVGFzay5qcydcbmltcG9ydCB7XG4gIFJlbW90ZUFnZW50VGFzayxcbiAgdHlwZSBSZW1vdGVBZ2VudFRhc2tTdGF0ZSxcbn0gZnJvbSAnc3JjL3Rhc2tzL1JlbW90ZUFnZW50VGFzay9SZW1vdGVBZ2VudFRhc2suanMnXG5pbXBvcnQge1xuICB0eXBlIEJhY2tncm91bmRUYXNrU3RhdGUsXG4gIGlzQmFja2dyb3VuZFRhc2ssXG4gIHR5cGUgVGFza1N0YXRlLFxufSBmcm9tICdzcmMvdGFza3MvdHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IERlZXBJbW11dGFibGUgfSBmcm9tICdzcmMvdHlwZXMvdXRpbHMuanMnXG5pbXBvcnQgeyBpbnRlcnNwZXJzZSB9IGZyb20gJ3NyYy91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IFRFQU1fTEVBRF9OQU1FIH0gZnJvbSAnc3JjL3V0aWxzL3N3YXJtL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHN0b3BVbHRyYXBsYW4gfSBmcm9tICcuLi8uLi9jb21tYW5kcy91bHRyYXBsYW4uanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck92ZXJsYXkgfSBmcm9tICcuLi8uLi9jb250ZXh0L292ZXJsYXlDb250ZXh0LmpzJ1xuaW1wb3J0IHR5cGUgeyBFeGl0U3RhdGUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlU2hvcnRjdXREaXNwbGF5IH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlU2hvcnRjdXREaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBBc3luY0FnZW50RGV0YWlsRGlhbG9nIH0gZnJvbSAnLi9Bc3luY0FnZW50RGV0YWlsRGlhbG9nLmpzJ1xuaW1wb3J0IHsgQmFja2dyb3VuZFRhc2sgYXMgQmFja2dyb3VuZFRhc2tDb21wb25lbnQgfSBmcm9tICcuL0JhY2tncm91bmRUYXNrLmpzJ1xuaW1wb3J0IHsgRHJlYW1EZXRhaWxEaWFsb2cgfSBmcm9tICcuL0RyZWFtRGV0YWlsRGlhbG9nLmpzJ1xuaW1wb3J0IHsgSW5Qcm9jZXNzVGVhbW1hdGVEZXRhaWxEaWFsb2cgfSBmcm9tICcuL0luUHJvY2Vzc1RlYW1tYXRlRGV0YWlsRGlhbG9nLmpzJ1xuaW1wb3J0IHsgUmVtb3RlU2Vzc2lvbkRldGFpbERpYWxvZyB9IGZyb20gJy4vUmVtb3RlU2Vzc2lvbkRldGFpbERpYWxvZy5qcydcbmltcG9ydCB7IFNoZWxsRGV0YWlsRGlhbG9nIH0gZnJvbSAnLi9TaGVsbERldGFpbERpYWxvZy5qcydcblxudHlwZSBWaWV3U3RhdGUgPSB7IG1vZGU6ICdsaXN0JyB9IHwgeyBtb2RlOiAnZGV0YWlsJzsgaXRlbUlkOiBzdHJpbmcgfVxuXG50eXBlIFByb3BzID0ge1xuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxuICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHRcbiAgaW5pdGlhbERldGFpbFRhc2tJZD86IHN0cmluZ1xufVxuXG50eXBlIExpc3RJdGVtID1cbiAgfCB7XG4gICAgICBpZDogc3RyaW5nXG4gICAgICB0eXBlOiAnbG9jYWxfYmFzaCdcbiAgICAgIGxhYmVsOiBzdHJpbmdcbiAgICAgIHN0YXR1czogc3RyaW5nXG4gICAgICB0YXNrOiBEZWVwSW1tdXRhYmxlPExvY2FsU2hlbGxUYXNrU3RhdGU+XG4gICAgfVxuICB8IHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIHR5cGU6ICdyZW1vdGVfYWdlbnQnXG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBzdGF0dXM6IHN0cmluZ1xuICAgICAgdGFzazogRGVlcEltbXV0YWJsZTxSZW1vdGVBZ2VudFRhc2tTdGF0ZT5cbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdHlwZTogJ2xvY2FsX2FnZW50J1xuICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgc3RhdHVzOiBzdHJpbmdcbiAgICAgIHRhc2s6IERlZXBJbW11dGFibGU8TG9jYWxBZ2VudFRhc2tTdGF0ZT5cbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdHlwZTogJ2luX3Byb2Nlc3NfdGVhbW1hdGUnXG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBzdGF0dXM6IHN0cmluZ1xuICAgICAgdGFzazogRGVlcEltbXV0YWJsZTxJblByb2Nlc3NUZWFtbWF0ZVRhc2tTdGF0ZT5cbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdHlwZTogJ2xvY2FsX3dvcmtmbG93J1xuICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgc3RhdHVzOiBzdHJpbmdcbiAgICAgIHRhc2s6IERlZXBJbW11dGFibGU8TG9jYWxXb3JrZmxvd1Rhc2tTdGF0ZT5cbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdHlwZTogJ21vbml0b3JfbWNwJ1xuICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgc3RhdHVzOiBzdHJpbmdcbiAgICAgIHRhc2s6IERlZXBJbW11dGFibGU8TW9uaXRvck1jcFRhc2tTdGF0ZT5cbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdHlwZTogJ2RyZWFtJ1xuICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgc3RhdHVzOiBzdHJpbmdcbiAgICAgIHRhc2s6IERlZXBJbW11dGFibGU8RHJlYW1UYXNrU3RhdGU+XG4gICAgfVxuICB8IHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIHR5cGU6ICdsZWFkZXInXG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBzdGF0dXM6ICdydW5uaW5nJ1xuICAgIH1cblxuLy8gV09SS0ZMT1dfU0NSSVBUUyBpcyBhbnQtb25seSAoYnVpbGRfZmxhZ3MueWFtbCkuIFN0YXRpYyBpbXBvcnRzIHdvdWxkIGxlYWtcbi8vIH4xLjNLIGxpbmVzIGludG8gZXh0ZXJuYWwgYnVpbGRzLiBHYXRlIHdpdGggZmVhdHVyZSgpICsgcmVxdWlyZSBzbyB0aGVcbi8vIGJ1bmRsZXIgY2FuIGRlYWQtY29kZS1lbGltaW5hdGUgdGhlIGJyYW5jaC5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IFdvcmtmbG93RGV0YWlsRGlhbG9nID0gZmVhdHVyZSgnV09SS0ZMT1dfU0NSSVBUUycpXG4gID8gKFxuICAgICAgcmVxdWlyZSgnLi9Xb3JrZmxvd0RldGFpbERpYWxvZy5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4vV29ya2Zsb3dEZXRhaWxEaWFsb2cuanMnKVxuICAgICkuV29ya2Zsb3dEZXRhaWxEaWFsb2dcbiAgOiBudWxsXG5jb25zdCB3b3JrZmxvd1Rhc2tNb2R1bGUgPSBmZWF0dXJlKCdXT1JLRkxPV19TQ1JJUFRTJylcbiAgPyAocmVxdWlyZSgnc3JjL3Rhc2tzL0xvY2FsV29ya2Zsb3dUYXNrL0xvY2FsV29ya2Zsb3dUYXNrLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnc3JjL3Rhc2tzL0xvY2FsV29ya2Zsb3dUYXNrL0xvY2FsV29ya2Zsb3dUYXNrLmpzJykpXG4gIDogbnVsbFxuY29uc3Qga2lsbFdvcmtmbG93VGFzayA9IHdvcmtmbG93VGFza01vZHVsZT8ua2lsbFdvcmtmbG93VGFzayA/PyBudWxsXG5jb25zdCBza2lwV29ya2Zsb3dBZ2VudCA9IHdvcmtmbG93VGFza01vZHVsZT8uc2tpcFdvcmtmbG93QWdlbnQgPz8gbnVsbFxuY29uc3QgcmV0cnlXb3JrZmxvd0FnZW50ID0gd29ya2Zsb3dUYXNrTW9kdWxlPy5yZXRyeVdvcmtmbG93QWdlbnQgPz8gbnVsbFxuLy8gUmVsYXRpdmUgcGF0aCwgbm90IGBzcmMvLi4uYCBwYXRoLW1hcHBpbmcg4oCUIEJ1bidzIERDRSBjYW4gc3RhdGljYWxseVxuLy8gcmVzb2x2ZSArIGVsaW1pbmF0ZSBgLi9gIHJlcXVpcmVzLCBidXQgcGF0aC1tYXBwZWQgc3RyaW5ncyBzdGF5IG9wYXF1ZVxuLy8gYW5kIHN1cnZpdmUgYXMgZGVhZCBsaXRlcmFscyBpbiB0aGUgYnVuZGxlLiBNYXRjaGVzIHRhc2tzLnRzIHBhdHRlcm4uXG5jb25zdCBtb25pdG9yTWNwTW9kdWxlID0gZmVhdHVyZSgnTU9OSVRPUl9UT09MJylcbiAgPyAocmVxdWlyZSgnLi4vLi4vdGFza3MvTW9uaXRvck1jcFRhc2svTW9uaXRvck1jcFRhc2suanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi8uLi90YXNrcy9Nb25pdG9yTWNwVGFzay9Nb25pdG9yTWNwVGFzay5qcycpKVxuICA6IG51bGxcbmNvbnN0IGtpbGxNb25pdG9yTWNwID0gbW9uaXRvck1jcE1vZHVsZT8ua2lsbE1vbml0b3JNY3AgPz8gbnVsbFxuY29uc3QgTW9uaXRvck1jcERldGFpbERpYWxvZyA9IGZlYXR1cmUoJ01PTklUT1JfVE9PTCcpXG4gID8gKFxuICAgICAgcmVxdWlyZSgnLi9Nb25pdG9yTWNwRGV0YWlsRGlhbG9nLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi9Nb25pdG9yTWNwRGV0YWlsRGlhbG9nLmpzJylcbiAgICApLk1vbml0b3JNY3BEZXRhaWxEaWFsb2dcbiAgOiBudWxsXG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cblxuLy8gSGVscGVyIHRvIGdldCBmaWx0ZXJlZCBiYWNrZ3JvdW5kIHRhc2tzIChleGNsdWRlcyBmb3JlZ3JvdW5kZWQgbG9jYWxfYWdlbnQpXG5mdW5jdGlvbiBnZXRTZWxlY3RhYmxlQmFja2dyb3VuZFRhc2tzKFxuICB0YXNrczogUmVjb3JkPHN0cmluZywgVGFza1N0YXRlPiB8IHVuZGVmaW5lZCxcbiAgZm9yZWdyb3VuZGVkVGFza0lkOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4pOiBUYXNrU3RhdGVbXSB7XG4gIGNvbnN0IGJhY2tncm91bmRUYXNrcyA9IE9iamVjdC52YWx1ZXModGFza3MgPz8ge30pLmZpbHRlcihpc0JhY2tncm91bmRUYXNrKVxuICByZXR1cm4gYmFja2dyb3VuZFRhc2tzLmZpbHRlcihcbiAgICB0YXNrID0+ICEodGFzay50eXBlID09PSAnbG9jYWxfYWdlbnQnICYmIHRhc2suaWQgPT09IGZvcmVncm91bmRlZFRhc2tJZCksXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhY2tncm91bmRUYXNrc0RpYWxvZyh7XG4gIG9uRG9uZSxcbiAgdG9vbFVzZUNvbnRleHQsXG4gIGluaXRpYWxEZXRhaWxUYXNrSWQsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHRhc2tzID0gdXNlQXBwU3RhdGUocyA9PiBzLnRhc2tzKVxuICBjb25zdCBmb3JlZ3JvdW5kZWRUYXNrSWQgPSB1c2VBcHBTdGF0ZShzID0+IHMuZm9yZWdyb3VuZGVkVGFza0lkKVxuICBjb25zdCBzaG93U3Bpbm5lclRyZWUgPSB1c2VBcHBTdGF0ZShzID0+IHMuZXhwYW5kZWRWaWV3KSA9PT0gJ3RlYW1tYXRlcydcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IGtpbGxBZ2VudHNTaG9ydGN1dCA9IHVzZVNob3J0Y3V0RGlzcGxheShcbiAgICAnY2hhdDpraWxsQWdlbnRzJyxcbiAgICAnQ2hhdCcsXG4gICAgJ2N0cmwreCBjdHJsK2snLFxuICApXG4gIGNvbnN0IHR5cGVkVGFza3MgPSB0YXNrcyBhcyBSZWNvcmQ8c3RyaW5nLCBUYXNrU3RhdGU+IHwgdW5kZWZpbmVkXG5cbiAgLy8gVHJhY2sgaWYgd2Ugc2tpcHBlZCBsaXN0IHZpZXcgb24gbW91bnQgKGZvciBiYWNrIGJ1dHRvbiBiZWhhdmlvcilcbiAgY29uc3Qgc2tpcHBlZExpc3RPbk1vdW50ID0gdXNlUmVmKGZhbHNlKVxuXG4gIC8vIENvbXB1dGUgaW5pdGlhbCB2aWV3IHN0YXRlIC0gc2tpcCBsaXN0IGlmIGNhbGxlciBwcm92aWRlZCBhIHNwZWNpZmljIHRhc2ssXG4gIC8vIG9yIGlmIHRoZXJlJ3MgZXhhY3RseSBvbmUgdGFza1xuICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGU8Vmlld1N0YXRlPigoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxEZXRhaWxUYXNrSWQpIHtcbiAgICAgIHNraXBwZWRMaXN0T25Nb3VudC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmV0dXJuIHsgbW9kZTogJ2RldGFpbCcsIGl0ZW1JZDogaW5pdGlhbERldGFpbFRhc2tJZCB9XG4gICAgfVxuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0U2VsZWN0YWJsZUJhY2tncm91bmRUYXNrcyhcbiAgICAgIHR5cGVkVGFza3MsXG4gICAgICBmb3JlZ3JvdW5kZWRUYXNrSWQsXG4gICAgKVxuICAgIGlmIChhbGxJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNraXBwZWRMaXN0T25Nb3VudC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmV0dXJuIHsgbW9kZTogJ2RldGFpbCcsIGl0ZW1JZDogYWxsSXRlbXNbMF0hLmlkIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbW9kZTogJ2xpc3QnIH1cbiAgfSlcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIC8vIFJlZ2lzdGVyIGFzIG1vZGFsIG92ZXJsYXkgc28gcGFyZW50IENoYXQga2V5YmluZGluZ3MgKHVwL2Rvd24gZm9yIGhpc3RvcnkpXG4gIC8vIGFyZSBkZWFjdGl2YXRlZCB3aGlsZSB0aGlzIGRpYWxvZyBpcyBvcGVuXG4gIHVzZVJlZ2lzdGVyT3ZlcmxheSgnYmFja2dyb3VuZC10YXNrcy1kaWFsb2cnKVxuXG4gIC8vIE1lbW9pemUgdGhlIHNvcnRlZCBhbmQgY2F0ZWdvcml6ZWQgaXRlbXMgdG9nZXRoZXIgdG8gZW5zdXJlIHN0YWJsZSByZWZlcmVuY2VzXG4gIGNvbnN0IHtcbiAgICBiYXNoVGFza3MsXG4gICAgcmVtb3RlU2Vzc2lvbnMsXG4gICAgYWdlbnRUYXNrcyxcbiAgICB0ZWFtbWF0ZVRhc2tzLFxuICAgIHdvcmtmbG93VGFza3MsXG4gICAgbWNwTW9uaXRvcnMsXG4gICAgZHJlYW1UYXNrcyxcbiAgICBhbGxTZWxlY3RhYmxlSXRlbXMsXG4gIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAvLyBGaWx0ZXIgdG8gb25seSBzaG93IHJ1bm5pbmcvcGVuZGluZyBiYWNrZ3JvdW5kIHRhc2tzLCBtYXRjaGluZyB0aGUgc3RhdHVzIGJhciBjb3VudFxuICAgIGNvbnN0IGJhY2tncm91bmRUYXNrcyA9IE9iamVjdC52YWx1ZXModHlwZWRUYXNrcyA/PyB7fSkuZmlsdGVyKFxuICAgICAgaXNCYWNrZ3JvdW5kVGFzayxcbiAgICApXG4gICAgY29uc3QgYWxsSXRlbXMgPSBiYWNrZ3JvdW5kVGFza3MubWFwKHRvTGlzdEl0ZW0pXG4gICAgY29uc3Qgc29ydGVkID0gYWxsSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYVN0YXR1cyA9IGEuc3RhdHVzXG4gICAgICBjb25zdCBiU3RhdHVzID0gYi5zdGF0dXNcbiAgICAgIGlmIChhU3RhdHVzID09PSAncnVubmluZycgJiYgYlN0YXR1cyAhPT0gJ3J1bm5pbmcnKSByZXR1cm4gLTFcbiAgICAgIGlmIChhU3RhdHVzICE9PSAncnVubmluZycgJiYgYlN0YXR1cyA9PT0gJ3J1bm5pbmcnKSByZXR1cm4gMVxuICAgICAgY29uc3QgYVRpbWUgPSAndGFzaycgaW4gYSA/IGEudGFzay5zdGFydFRpbWUgOiAwXG4gICAgICBjb25zdCBiVGltZSA9ICd0YXNrJyBpbiBiID8gYi50YXNrLnN0YXJ0VGltZSA6IDBcbiAgICAgIHJldHVybiBiVGltZSAtIGFUaW1lXG4gICAgfSlcbiAgICBjb25zdCBiYXNoID0gc29ydGVkLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2xvY2FsX2Jhc2gnKVxuICAgIGNvbnN0IHJlbW90ZSA9IHNvcnRlZC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdyZW1vdGVfYWdlbnQnKVxuICAgIC8vIEV4Y2x1ZGUgZm9yZWdyb3VuZGVkIHRhc2sgLSBpdCdzIGJlaW5nIHZpZXdlZCBpbiB0aGUgbWFpbiBVSSwgbm90IGEgYmFja2dyb3VuZCB0YXNrXG4gICAgY29uc3QgYWdlbnQgPSBzb3J0ZWQuZmlsdGVyKFxuICAgICAgaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdsb2NhbF9hZ2VudCcgJiYgaXRlbS5pZCAhPT0gZm9yZWdyb3VuZGVkVGFza0lkLFxuICAgIClcbiAgICBjb25zdCB3b3JrZmxvd3MgPSBzb3J0ZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnbG9jYWxfd29ya2Zsb3cnKVxuICAgIGNvbnN0IG1vbml0b3JNY3AgPSBzb3J0ZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnbW9uaXRvcl9tY3AnKVxuICAgIGNvbnN0IGRyZWFtVGFza3MgPSBzb3J0ZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnZHJlYW0nKVxuICAgIC8vIEluIHNwaW5uZXItdHJlZSBtb2RlLCBleGNsdWRlIHRlYW1tYXRlcyBmcm9tIHRoZSBkaWFsb2cgKHRoZXkgYXBwZWFyIGluIHRoZSB0cmVlKVxuICAgIGNvbnN0IHRlYW1tYXRlcyA9IHNob3dTcGlubmVyVHJlZVxuICAgICAgPyBbXVxuICAgICAgOiBzb3J0ZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnaW5fcHJvY2Vzc190ZWFtbWF0ZScpXG4gICAgLy8gQWRkIGxlYWRlciBlbnRyeSB3aGVuIHRoZXJlIGFyZSB0ZWFtbWF0ZXMsIHNvIHVzZXJzIGNhbiBmb3JlZ3JvdW5kIGJhY2sgdG8gbGVhZGVyXG4gICAgY29uc3QgbGVhZGVySXRlbTogTGlzdEl0ZW1bXSA9XG4gICAgICB0ZWFtbWF0ZXMubGVuZ3RoID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdfX2xlYWRlcl9fJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2xlYWRlcicsXG4gICAgICAgICAgICAgIGxhYmVsOiBgQCR7VEVBTV9MRUFEX05BTUV9YCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAncnVubmluZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXVxuICAgIHJldHVybiB7XG4gICAgICBiYXNoVGFza3M6IGJhc2gsXG4gICAgICByZW1vdGVTZXNzaW9uczogcmVtb3RlLFxuICAgICAgYWdlbnRUYXNrczogYWdlbnQsXG4gICAgICB3b3JrZmxvd1Rhc2tzOiB3b3JrZmxvd3MsXG4gICAgICBtY3BNb25pdG9yczogbW9uaXRvck1jcCxcbiAgICAgIGRyZWFtVGFza3MsXG4gICAgICB0ZWFtbWF0ZVRhc2tzOiBbLi4ubGVhZGVySXRlbSwgLi4udGVhbW1hdGVzXSxcbiAgICAgIC8vIE9yZGVyIE1VU1QgbWF0Y2ggSlNYIHJlbmRlciBvcmRlciAodGVhbW1hdGVzIFxcdTIxOTIgYmFzaCBcXHUyMTkyIG1vbml0b3JNY3AgXFx1MjE5MlxuICAgICAgLy8gcmVtb3RlIFxcdTIxOTIgYWdlbnQgXFx1MjE5MiB3b3JrZmxvd3MgXFx1MjE5MiBkcmVhbSkgc28gXFx1MjE5My9cXHUyMTkxIG5hdmlnYXRpb24gbW92ZXMgdGhlIGN1cnNvclxuICAgICAgLy8gdmlzdWFsbHkgZG93bndhcmQuXG4gICAgICBhbGxTZWxlY3RhYmxlSXRlbXM6IFtcbiAgICAgICAgLi4ubGVhZGVySXRlbSxcbiAgICAgICAgLi4udGVhbW1hdGVzLFxuICAgICAgICAuLi5iYXNoLFxuICAgICAgICAuLi5tb25pdG9yTWNwLFxuICAgICAgICAuLi5yZW1vdGUsXG4gICAgICAgIC4uLmFnZW50LFxuICAgICAgICAuLi53b3JrZmxvd3MsXG4gICAgICAgIC4uLmRyZWFtVGFza3MsXG4gICAgICBdLFxuICAgIH1cbiAgfSwgW3R5cGVkVGFza3MsIGZvcmVncm91bmRlZFRhc2tJZCwgc2hvd1NwaW5uZXJUcmVlXSlcblxuICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gYWxsU2VsZWN0YWJsZUl0ZW1zW3NlbGVjdGVkSW5kZXhdID8/IG51bGxcblxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmdzIGZvciBzdGFuZGFyZCBuYXZpZ2F0aW9uIGFuZCBjb25maXJtL2NhbmNlbC5cbiAgLy8gY29uZmlybTpubyBpcyBoYW5kbGVkIGJ5IERpYWxvZydzIG9uQ2FuY2VsIHByb3AuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdjb25maXJtOnByZXZpb3VzJzogKCkgPT4gc2V0U2VsZWN0ZWRJbmRleChwcmV2ID0+IE1hdGgubWF4KDAsIHByZXYgLSAxKSksXG4gICAgICAnY29uZmlybTpuZXh0JzogKCkgPT5cbiAgICAgICAgc2V0U2VsZWN0ZWRJbmRleChwcmV2ID0+XG4gICAgICAgICAgTWF0aC5taW4oYWxsU2VsZWN0YWJsZUl0ZW1zLmxlbmd0aCAtIDEsIHByZXYgKyAxKSxcbiAgICAgICAgKSxcbiAgICAgICdjb25maXJtOnllcyc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGFsbFNlbGVjdGFibGVJdGVtc1tzZWxlY3RlZEluZGV4XVxuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdsZWFkZXInKSB7XG4gICAgICAgICAgICBleGl0VGVhbW1hdGVWaWV3KHNldEFwcFN0YXRlKVxuICAgICAgICAgICAgb25Eb25lKCdWaWV3aW5nIGxlYWRlcicsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Vmlld1N0YXRlKHsgbW9kZTogJ2RldGFpbCcsIGl0ZW1JZDogY3VycmVudC5pZCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicsIGlzQWN0aXZlOiB2aWV3U3RhdGUubW9kZSA9PT0gJ2xpc3QnIH0sXG4gIClcblxuICAvLyBDb21wb25lbnQtc3BlY2lmaWMgc2hvcnRjdXRzICh4PXN0b3AsIGY9Zm9yZWdyb3VuZCwgcmlnaHQ9em9vbSkgc2hvd24gaW4gVUkuXG4gIC8vIFRoZXNlIGFyZSB0YXNrLXR5cGUgYW5kIHN0YXR1cyBkZXBlbmRlbnQsIG5vdCBzdGFuZGFyZCBkaWFsb2cga2V5YmluZGluZ3MuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIC8vIE9ubHkgaGFuZGxlIGlucHV0IHdoZW4gaW4gbGlzdCBtb2RlXG4gICAgaWYgKHZpZXdTdGF0ZS5tb2RlICE9PSAnbGlzdCcpIHJldHVyblxuXG4gICAgaWYgKGUua2V5ID09PSAnbGVmdCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25Eb25lKCdCYWNrZ3JvdW5kIHRhc2tzIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBDb21wdXRlIGN1cnJlbnQgc2VsZWN0aW9uIGF0IHRoZSB0aW1lIG9mIHRoZSBrZXkgcHJlc3NcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gYWxsU2VsZWN0YWJsZUl0ZW1zW3NlbGVjdGVkSW5kZXhdXG4gICAgaWYgKCFjdXJyZW50U2VsZWN0aW9uKSByZXR1cm4gLy8gZXZlcnl0aGluZyBiZWxvdyByZXF1aXJlcyBhIHNlbGVjdGlvblxuXG4gICAgaWYgKGUua2V5ID09PSAneCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdsb2NhbF9iYXNoJyAmJlxuICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnN0YXR1cyA9PT0gJ3J1bm5pbmcnXG4gICAgICApIHtcbiAgICAgICAgdm9pZCBraWxsU2hlbGxUYXNrKGN1cnJlbnRTZWxlY3Rpb24uaWQpXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdsb2NhbF9hZ2VudCcgJiZcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi5zdGF0dXMgPT09ICdydW5uaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIHZvaWQga2lsbEFnZW50VGFzayhjdXJyZW50U2VsZWN0aW9uLmlkKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnaW5fcHJvY2Vzc190ZWFtbWF0ZScgJiZcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi5zdGF0dXMgPT09ICdydW5uaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIHZvaWQga2lsbFRlYW1tYXRlVGFzayhjdXJyZW50U2VsZWN0aW9uLmlkKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnbG9jYWxfd29ya2Zsb3cnICYmXG4gICAgICAgIGN1cnJlbnRTZWxlY3Rpb24uc3RhdHVzID09PSAncnVubmluZycgJiZcbiAgICAgICAga2lsbFdvcmtmbG93VGFza1xuICAgICAgKSB7XG4gICAgICAgIGtpbGxXb3JrZmxvd1Rhc2soY3VycmVudFNlbGVjdGlvbi5pZCwgc2V0QXBwU3RhdGUpXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdtb25pdG9yX21jcCcgJiZcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi5zdGF0dXMgPT09ICdydW5uaW5nJyAmJlxuICAgICAgICBraWxsTW9uaXRvck1jcFxuICAgICAgKSB7XG4gICAgICAgIGtpbGxNb25pdG9yTWNwKGN1cnJlbnRTZWxlY3Rpb24uaWQsIHNldEFwcFN0YXRlKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnZHJlYW0nICYmXG4gICAgICAgIGN1cnJlbnRTZWxlY3Rpb24uc3RhdHVzID09PSAncnVubmluZydcbiAgICAgICkge1xuICAgICAgICB2b2lkIGtpbGxEcmVhbVRhc2soY3VycmVudFNlbGVjdGlvbi5pZClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGN1cnJlbnRTZWxlY3Rpb24udHlwZSA9PT0gJ3JlbW90ZV9hZ2VudCcgJiZcbiAgICAgICAgY3VycmVudFNlbGVjdGlvbi5zdGF0dXMgPT09ICdydW5uaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0aW9uLnRhc2suaXNVbHRyYXBsYW4pIHtcbiAgICAgICAgICB2b2lkIHN0b3BVbHRyYXBsYW4oXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uLmlkLFxuICAgICAgICAgICAgY3VycmVudFNlbGVjdGlvbi50YXNrLnNlc3Npb25JZCxcbiAgICAgICAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2b2lkIGtpbGxSZW1vdGVBZ2VudFRhc2soY3VycmVudFNlbGVjdGlvbi5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ2YnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRTZWxlY3Rpb24udHlwZSA9PT0gJ2luX3Byb2Nlc3NfdGVhbW1hdGUnICYmXG4gICAgICAgIGN1cnJlbnRTZWxlY3Rpb24uc3RhdHVzID09PSAncnVubmluZydcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZW50ZXJUZWFtbWF0ZVZpZXcoY3VycmVudFNlbGVjdGlvbi5pZCwgc2V0QXBwU3RhdGUpXG4gICAgICAgIG9uRG9uZSgnVmlld2luZyB0ZWFtbWF0ZScsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNlbGVjdGlvbi50eXBlID09PSAnbGVhZGVyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXhpdFRlYW1tYXRlVmlldyhzZXRBcHBTdGF0ZSlcbiAgICAgICAgb25Eb25lKCdWaWV3aW5nIGxlYWRlcicsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBraWxsU2hlbGxUYXNrKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgTG9jYWxTaGVsbFRhc2sua2lsbCh0YXNrSWQsIHNldEFwcFN0YXRlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24ga2lsbEFnZW50VGFzayh0YXNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IExvY2FsQWdlbnRUYXNrLmtpbGwodGFza0lkLCBzZXRBcHBTdGF0ZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGtpbGxUZWFtbWF0ZVRhc2sodGFza0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBJblByb2Nlc3NUZWFtbWF0ZVRhc2sua2lsbCh0YXNrSWQsIHNldEFwcFN0YXRlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24ga2lsbERyZWFtVGFzayh0YXNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IERyZWFtVGFzay5raWxsKHRhc2tJZCwgc2V0QXBwU3RhdGUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBraWxsUmVtb3RlQWdlbnRUYXNrKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgUmVtb3RlQWdlbnRUYXNrLmtpbGwodGFza0lkLCBzZXRBcHBTdGF0ZSlcbiAgfVxuXG4gIC8vIFdyYXAgb25Eb25lIGluIHVzZUVmZmVjdEV2ZW50IHRvIGdldCBhIHN0YWJsZSByZWZlcmVuY2UgdGhhdCBhbHdheXMgY2FsbHNcbiAgLy8gdGhlIGN1cnJlbnQgb25Eb25lIGNhbGxiYWNrIHdpdGhvdXQgY2F1c2luZyB0aGUgZWZmZWN0IHRvIHJlLWZpcmUuXG4gIGNvbnN0IG9uRG9uZUV2ZW50ID0gdXNlRWZmZWN0RXZlbnQob25Eb25lKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpZXdTdGF0ZS5tb2RlICE9PSAnbGlzdCcpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSAodHlwZWRUYXNrcyA/PyB7fSlbdmlld1N0YXRlLml0ZW1JZF1cbiAgICAgIC8vIFdvcmtmbG93IHRhc2tzIGdldCBhIGdyYWNlOiB0aGVpciBkZXRhaWwgdmlldyBzdGF5cyBvcGVuIHRocm91Z2hcbiAgICAgIC8vIGNvbXBsZXRpb24gc28gdGhlIHVzZXIgc2VlcyB0aGUgZmluYWwgc3RhdGUgYmVmb3JlIGV2aWN0aW9uLlxuICAgICAgaWYgKFxuICAgICAgICAhdGFzayB8fFxuICAgICAgICAodGFzay50eXBlICE9PSAnbG9jYWxfd29ya2Zsb3cnICYmICFpc0JhY2tncm91bmRUYXNrKHRhc2spKVxuICAgICAgKSB7XG4gICAgICAgIC8vIFRhc2sgd2FzIHJlbW92ZWQgb3IgaXMgbm8gbG9uZ2VyIGEgYmFja2dyb3VuZCB0YXNrIChlLmcuIGtpbGxlZCkuXG4gICAgICAgIC8vIElmIHdlIHNraXBwZWQgdGhlIGxpc3Qgb24gbW91bnQsIGNsb3NlIHRoZSBkaWFsb2cgZW50aXJlbHkuXG4gICAgICAgIGlmIChza2lwcGVkTGlzdE9uTW91bnQuY3VycmVudCkge1xuICAgICAgICAgIG9uRG9uZUV2ZW50KCdCYWNrZ3JvdW5kIHRhc2tzIGRpYWxvZyBkaXNtaXNzZWQnLCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnc3lzdGVtJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFZpZXdTdGF0ZSh7IG1vZGU6ICdsaXN0JyB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGFsbFNlbGVjdGFibGVJdGVtcy5sZW5ndGhcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSB0b3RhbEl0ZW1zICYmIHRvdGFsSXRlbXMgPiAwKSB7XG4gICAgICBzZXRTZWxlY3RlZEluZGV4KHRvdGFsSXRlbXMgLSAxKVxuICAgIH1cbiAgfSwgW3ZpZXdTdGF0ZSwgdHlwZWRUYXNrcywgc2VsZWN0ZWRJbmRleCwgYWxsU2VsZWN0YWJsZUl0ZW1zLCBvbkRvbmVFdmVudF0pXG5cbiAgLy8gSGVscGVyIHRvIGdvIGJhY2sgdG8gbGlzdCB2aWV3IChvciBjbG9zZSBkaWFsb2cgaWYgd2Ugc2tpcHBlZCBsaXN0IG9uXG4gIC8vIG1vdW50IEFORCB0aGVyZSdzIHN0aWxsIG9ubHkg4omkMSBpdGVtKS4gQ2hlY2tpbmcgY3VycmVudCBjb3VudCBwcmV2ZW50c1xuICAvLyB0aGUgc3RhbGUtc3RhdGUgdHJhcDogaWYgeW91IG9wZW5lZCB3aXRoIDEgdGFzayAoYXV0by1za2lwcGVkIHRvIGRldGFpbCksXG4gIC8vIHRoZW4gYSBzZWNvbmQgdGFzayBzdGFydGVkLCAnYmFjaycgc2hvdWxkIHNob3cgdGhlIGxpc3Qg4oCUIG5vdCBjbG9zZS5cbiAgY29uc3QgZ29CYWNrVG9MaXN0ID0gKCkgPT4ge1xuICAgIGlmIChza2lwcGVkTGlzdE9uTW91bnQuY3VycmVudCAmJiBhbGxTZWxlY3RhYmxlSXRlbXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIG9uRG9uZSgnQmFja2dyb3VuZCB0YXNrcyBkaWFsb2cgZGlzbWlzc2VkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBza2lwcGVkTGlzdE9uTW91bnQuY3VycmVudCA9IGZhbHNlXG4gICAgICBzZXRWaWV3U3RhdGUoeyBtb2RlOiAnbGlzdCcgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBhbiBpdGVtIGlzIHNlbGVjdGVkLCBzaG93IHRoZSBhcHByb3ByaWF0ZSB2aWV3XG4gIGlmICh2aWV3U3RhdGUubW9kZSAhPT0gJ2xpc3QnICYmIHR5cGVkVGFza3MpIHtcbiAgICBjb25zdCB0YXNrID0gdHlwZWRUYXNrc1t2aWV3U3RhdGUuaXRlbUlkXVxuICAgIGlmICghdGFzaykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBEZXRhaWwgbW9kZSAtIHNob3cgYXBwcm9wcmlhdGUgZGV0YWlsIGRpYWxvZ1xuICAgIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgICBjYXNlICdsb2NhbF9iYXNoJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2hlbGxEZXRhaWxEaWFsb2dcbiAgICAgICAgICAgIHNoZWxsPXt0YXNrfVxuICAgICAgICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICAgICAgICBvbktpbGxTaGVsbD17KCkgPT4gdm9pZCBraWxsU2hlbGxUYXNrKHRhc2suaWQpfVxuICAgICAgICAgICAgb25CYWNrPXtnb0JhY2tUb0xpc3R9XG4gICAgICAgICAgICBrZXk9e2BzaGVsbC0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlICdsb2NhbF9hZ2VudCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFzeW5jQWdlbnREZXRhaWxEaWFsb2dcbiAgICAgICAgICAgIGFnZW50PXt0YXNrfVxuICAgICAgICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICAgICAgICBvbktpbGxBZ2VudD17KCkgPT4gdm9pZCBraWxsQWdlbnRUYXNrKHRhc2suaWQpfVxuICAgICAgICAgICAgb25CYWNrPXtnb0JhY2tUb0xpc3R9XG4gICAgICAgICAgICBrZXk9e2BhZ2VudC0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlICdyZW1vdGVfYWdlbnQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZW1vdGVTZXNzaW9uRGV0YWlsRGlhbG9nXG4gICAgICAgICAgICBzZXNzaW9uPXt0YXNrfVxuICAgICAgICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICAgICAgICB0b29sVXNlQ29udGV4dD17dG9vbFVzZUNvbnRleHR9XG4gICAgICAgICAgICBvbkJhY2s9e2dvQmFja1RvTGlzdH1cbiAgICAgICAgICAgIG9uS2lsbD17XG4gICAgICAgICAgICAgIHRhc2suc3RhdHVzICE9PSAncnVubmluZydcbiAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIDogdGFzay5pc1VsdHJhcGxhblxuICAgICAgICAgICAgICAgICAgPyAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHZvaWQgc3RvcFVsdHJhcGxhbih0YXNrLmlkLCB0YXNrLnNlc3Npb25JZCwgc2V0QXBwU3RhdGUpXG4gICAgICAgICAgICAgICAgICA6ICgpID0+IHZvaWQga2lsbFJlbW90ZUFnZW50VGFzayh0YXNrLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5PXtgc2Vzc2lvbi0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlICdpbl9wcm9jZXNzX3RlYW1tYXRlJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SW5Qcm9jZXNzVGVhbW1hdGVEZXRhaWxEaWFsb2dcbiAgICAgICAgICAgIHRlYW1tYXRlPXt0YXNrfVxuICAgICAgICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICAgICAgICBvbktpbGw9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ3J1bm5pbmcnXG4gICAgICAgICAgICAgICAgPyAoKSA9PiB2b2lkIGtpbGxUZWFtbWF0ZVRhc2sodGFzay5pZClcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25CYWNrPXtnb0JhY2tUb0xpc3R9XG4gICAgICAgICAgICBvbkZvcmVncm91bmQ9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ3J1bm5pbmcnXG4gICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVudGVyVGVhbW1hdGVWaWV3KHRhc2suaWQsIHNldEFwcFN0YXRlKVxuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoJ1ZpZXdpbmcgdGVhbW1hdGUnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleT17YHRlYW1tYXRlLSR7dGFzay5pZH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIGNhc2UgJ2xvY2FsX3dvcmtmbG93JzpcbiAgICAgICAgaWYgKCFXb3JrZmxvd0RldGFpbERpYWxvZykgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8V29ya2Zsb3dEZXRhaWxEaWFsb2dcbiAgICAgICAgICAgIHdvcmtmbG93PXt0YXNrfVxuICAgICAgICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICAgICAgICBvbktpbGw9e1xuICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ3J1bm5pbmcnICYmIGtpbGxXb3JrZmxvd1Rhc2tcbiAgICAgICAgICAgICAgICA/ICgpID0+IGtpbGxXb3JrZmxvd1Rhc2sodGFzay5pZCwgc2V0QXBwU3RhdGUpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uU2tpcEFnZW50PXtcbiAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBza2lwV29ya2Zsb3dBZ2VudFxuICAgICAgICAgICAgICAgID8gYWdlbnRJZCA9PiBza2lwV29ya2Zsb3dBZ2VudCh0YXNrLmlkLCBhZ2VudElkLCBzZXRBcHBTdGF0ZSlcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25SZXRyeUFnZW50PXtcbiAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiByZXRyeVdvcmtmbG93QWdlbnRcbiAgICAgICAgICAgICAgICA/IGFnZW50SWQgPT4gcmV0cnlXb3JrZmxvd0FnZW50KHRhc2suaWQsIGFnZW50SWQsIHNldEFwcFN0YXRlKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkJhY2s9e2dvQmFja1RvTGlzdH1cbiAgICAgICAgICAgIGtleT17YHdvcmtmbG93LSR7dGFzay5pZH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIGNhc2UgJ21vbml0b3JfbWNwJzpcbiAgICAgICAgaWYgKCFNb25pdG9yTWNwRGV0YWlsRGlhbG9nKSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNb25pdG9yTWNwRGV0YWlsRGlhbG9nXG4gICAgICAgICAgICB0YXNrPXt0YXNrfVxuICAgICAgICAgICAgb25LaWxsPXtcbiAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdydW5uaW5nJyAmJiBraWxsTW9uaXRvck1jcFxuICAgICAgICAgICAgICAgID8gKCkgPT4ga2lsbE1vbml0b3JNY3AodGFzay5pZCwgc2V0QXBwU3RhdGUpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQmFjaz17Z29CYWNrVG9MaXN0fVxuICAgICAgICAgICAga2V5PXtgbW9uaXRvci1tY3AtJHt0YXNrLmlkfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnZHJlYW0nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxEcmVhbURldGFpbERpYWxvZ1xuICAgICAgICAgICAgdGFzaz17dGFza31cbiAgICAgICAgICAgIG9uRG9uZT17KCkgPT5cbiAgICAgICAgICAgICAgb25Eb25lKCdCYWNrZ3JvdW5kIHRhc2tzIGRpYWxvZyBkaXNtaXNzZWQnLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkJhY2s9e2dvQmFja1RvTGlzdH1cbiAgICAgICAgICAgIG9uS2lsbD17XG4gICAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAncnVubmluZydcbiAgICAgICAgICAgICAgICA/ICgpID0+IHZvaWQga2lsbERyZWFtVGFzayh0YXNrLmlkKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXk9e2BkcmVhbS0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcnVubmluZ0Jhc2hDb3VudCA9IGNvdW50KGJhc2hUYXNrcywgXyA9PiBfLnN0YXR1cyA9PT0gJ3J1bm5pbmcnKVxuICBjb25zdCBydW5uaW5nQWdlbnRDb3VudCA9XG4gICAgY291bnQoXG4gICAgICByZW1vdGVTZXNzaW9ucyxcbiAgICAgIF8gPT4gXy5zdGF0dXMgPT09ICdydW5uaW5nJyB8fCBfLnN0YXR1cyA9PT0gJ3BlbmRpbmcnLFxuICAgICkgKyBjb3VudChhZ2VudFRhc2tzLCBfID0+IF8uc3RhdHVzID09PSAncnVubmluZycpXG4gIGNvbnN0IHJ1bm5pbmdUZWFtbWF0ZUNvdW50ID0gY291bnQodGVhbW1hdGVUYXNrcywgXyA9PiBfLnN0YXR1cyA9PT0gJ3J1bm5pbmcnKVxuICBjb25zdCBzdWJ0aXRsZSA9IGludGVyc3BlcnNlKFxuICAgIFtcbiAgICAgIC4uLihydW5uaW5nVGVhbW1hdGVDb3VudCA+IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICA8VGV4dCBrZXk9XCJ0ZWFtbWF0ZXNcIj5cbiAgICAgICAgICAgICAge3J1bm5pbmdUZWFtbWF0ZUNvdW50fXsnICd9XG4gICAgICAgICAgICAgIHtydW5uaW5nVGVhbW1hdGVDb3VudCAhPT0gMSA/ICdhZ2VudHMnIDogJ2FnZW50J31cbiAgICAgICAgICAgIDwvVGV4dD4sXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLihydW5uaW5nQmFzaENvdW50ID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIDxUZXh0IGtleT1cInNoZWxsc1wiPlxuICAgICAgICAgICAgICB7cnVubmluZ0Jhc2hDb3VudH17JyAnfVxuICAgICAgICAgICAgICB7cnVubmluZ0Jhc2hDb3VudCAhPT0gMSA/ICdhY3RpdmUgc2hlbGxzJyA6ICdhY3RpdmUgc2hlbGwnfVxuICAgICAgICAgICAgPC9UZXh0PixcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uKHJ1bm5pbmdBZ2VudENvdW50ID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIDxUZXh0IGtleT1cImFnZW50c1wiPlxuICAgICAgICAgICAgICB7cnVubmluZ0FnZW50Q291bnR9eycgJ31cbiAgICAgICAgICAgICAge3J1bm5pbmdBZ2VudENvdW50ICE9PSAxID8gJ2FjdGl2ZSBhZ2VudHMnIDogJ2FjdGl2ZSBhZ2VudCd9XG4gICAgICAgICAgICA8L1RleHQ+LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSksXG4gICAgXSxcbiAgICBpbmRleCA9PiA8VGV4dCBrZXk9e2BzZXBhcmF0b3ItJHtpbmRleH1gfT4gwrcgPC9UZXh0PixcbiAgKVxuXG4gIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IGtleT1cInVwRG93blwiIHNob3J0Y3V0PVwi4oaRL+KGk1wiIGFjdGlvbj1cInNlbGVjdFwiIC8+LFxuICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBrZXk9XCJlbnRlclwiIHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJ2aWV3XCIgLz4sXG4gICAgLi4uKGN1cnJlbnRTZWxlY3Rpb24/LnR5cGUgPT09ICdpbl9wcm9jZXNzX3RlYW1tYXRlJyAmJlxuICAgIGN1cnJlbnRTZWxlY3Rpb24uc3RhdHVzID09PSAncnVubmluZydcbiAgICAgID8gW1xuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludFxuICAgICAgICAgICAga2V5PVwiZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICBzaG9ydGN1dD1cImZcIlxuICAgICAgICAgICAgYWN0aW9uPVwiZm9yZWdyb3VuZFwiXG4gICAgICAgICAgLz4sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC4uLigoY3VycmVudFNlbGVjdGlvbj8udHlwZSA9PT0gJ2xvY2FsX2Jhc2gnIHx8XG4gICAgICBjdXJyZW50U2VsZWN0aW9uPy50eXBlID09PSAnbG9jYWxfYWdlbnQnIHx8XG4gICAgICBjdXJyZW50U2VsZWN0aW9uPy50eXBlID09PSAnaW5fcHJvY2Vzc190ZWFtbWF0ZScgfHxcbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24/LnR5cGUgPT09ICdsb2NhbF93b3JrZmxvdycgfHxcbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24/LnR5cGUgPT09ICdtb25pdG9yX21jcCcgfHxcbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24/LnR5cGUgPT09ICdkcmVhbScgfHxcbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24/LnR5cGUgPT09ICdyZW1vdGVfYWdlbnQnKSAmJlxuICAgIGN1cnJlbnRTZWxlY3Rpb24uc3RhdHVzID09PSAncnVubmluZydcbiAgICAgID8gWzxLZXlib2FyZFNob3J0Y3V0SGludCBrZXk9XCJraWxsXCIgc2hvcnRjdXQ9XCJ4XCIgYWN0aW9uPVwic3RvcFwiIC8+XVxuICAgICAgOiBbXSksXG4gICAgLi4uKGFnZW50VGFza3Muc29tZSh0ID0+IHQuc3RhdHVzID09PSAncnVubmluZycpXG4gICAgICA/IFtcbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGtleT1cImtpbGwtYWxsXCJcbiAgICAgICAgICAgIHNob3J0Y3V0PXtraWxsQWdlbnRzU2hvcnRjdXR9XG4gICAgICAgICAgICBhY3Rpb249XCJzdG9wIGFsbCBhZ2VudHNcIlxuICAgICAgICAgIC8+LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQga2V5PVwiZXNjXCIgc2hvcnRjdXQ9XCLihpAvRXNjXCIgYWN0aW9uPVwiY2xvc2VcIiAvPixcbiAgXVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+XG4gICAgb25Eb25lKCdCYWNrZ3JvdW5kIHRhc2tzIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVySW5wdXRHdWlkZShleGl0U3RhdGU6IEV4aXRTdGF0ZSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgaWYgKGV4aXRTdGF0ZS5wZW5kaW5nKSB7XG4gICAgICByZXR1cm4gPFRleHQ+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC9UZXh0PlxuICAgIH1cbiAgICByZXR1cm4gPEJ5bGluZT57YWN0aW9uc308L0J5bGluZT5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgID5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJCYWNrZ3JvdW5kIHRhc2tzXCJcbiAgICAgICAgc3VidGl0bGU9ezw+e3N1YnRpdGxlfTwvPn1cbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgICAgaW5wdXRHdWlkZT17cmVuZGVySW5wdXRHdWlkZX1cbiAgICAgID5cbiAgICAgICAge2FsbFNlbGVjdGFibGVJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+Tm8gdGFza3MgY3VycmVudGx5IHJ1bm5pbmc8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICB7dGVhbW1hdGVUYXNrcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgeyhiYXNoVGFza3MubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgICAgcmVtb3RlU2Vzc2lvbnMubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgICAgYWdlbnRUYXNrcy5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYm9sZD57JyAgJ31BZ2VudHM8L1RleHQ+IChcbiAgICAgICAgICAgICAgICAgICAge2NvdW50KHRlYW1tYXRlVGFza3MsIGkgPT4gaS50eXBlICE9PSAnbGVhZGVyJyl9KVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8VGVhbW1hdGVUYXNrR3JvdXBzXG4gICAgICAgICAgICAgICAgICAgIHRlYW1tYXRlVGFza3M9e3RlYW1tYXRlVGFza3N9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rpb25JZD17Y3VycmVudFNlbGVjdGlvbj8uaWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtiYXNoVGFza3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e3RlYW1tYXRlVGFza3MubGVuZ3RoID4gMCA/IDEgOiAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyh0ZWFtbWF0ZVRhc2tzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIHJlbW90ZVNlc3Npb25zLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIGFnZW50VGFza3MubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+eycgICd9U2hlbGxzPC9UZXh0PiAoe2Jhc2hUYXNrcy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICB7YmFzaFRhc2tzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlkID09PSBjdXJyZW50U2VsZWN0aW9uPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHttY3BNb25pdG9ycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17XG4gICAgICAgICAgICAgICAgICB0ZWFtbWF0ZVRhc2tzLmxlbmd0aCA+IDAgfHwgYmFzaFRhc2tzLmxlbmd0aCA+IDAgPyAxIDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgPFRleHQgYm9sZD57JyAgJ31Nb25pdG9yczwvVGV4dD4gKHttY3BNb25pdG9ycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIHttY3BNb25pdG9ycy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXRlbS5pZCA9PT0gY3VycmVudFNlbGVjdGlvbj8uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7cmVtb3RlU2Vzc2lvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1xuICAgICAgICAgICAgICAgICAgdGVhbW1hdGVUYXNrcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICBiYXNoVGFza3MubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgICAgbWNwTW9uaXRvcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBib2xkPnsnICAnfVJlbW90ZSBhZ2VudHM8L1RleHQ+ICh7cmVtb3RlU2Vzc2lvbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIHtyZW1vdGVTZXNzaW9ucy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXRlbS5pZCA9PT0gY3VycmVudFNlbGVjdGlvbj8uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7YWdlbnRUYXNrcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17XG4gICAgICAgICAgICAgICAgICB0ZWFtbWF0ZVRhc2tzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIGJhc2hUYXNrcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICBtY3BNb25pdG9ycy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICByZW1vdGVTZXNzaW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+eycgICd9TG9jYWwgYWdlbnRzPC9UZXh0PiAoe2FnZW50VGFza3MubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICB7YWdlbnRUYXNrcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXRlbS5pZCA9PT0gY3VycmVudFNlbGVjdGlvbj8uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7d29ya2Zsb3dUYXNrcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17XG4gICAgICAgICAgICAgICAgICB0ZWFtbWF0ZVRhc2tzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIGJhc2hUYXNrcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICBtY3BNb25pdG9ycy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICByZW1vdGVTZXNzaW9ucy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgICBhZ2VudFRhc2tzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgPFRleHQgYm9sZD57JyAgJ31Xb3JrZmxvd3M8L1RleHQ+ICh7d29ya2Zsb3dUYXNrcy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIHt3b3JrZmxvd1Rhc2tzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlkID09PSBjdXJyZW50U2VsZWN0aW9uPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtkcmVhbVRhc2tzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtcbiAgICAgICAgICAgICAgICAgIHRlYW1tYXRlVGFza3MubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgICAgYmFzaFRhc2tzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIG1jcE1vbml0b3JzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIHJlbW90ZVNlc3Npb25zLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICAgIGFnZW50VGFza3MubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgICAgd29ya2Zsb3dUYXNrcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIHtkcmVhbVRhc2tzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlkID09PSBjdXJyZW50U2VsZWN0aW9uPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiB0b0xpc3RJdGVtKHRhc2s6IEJhY2tncm91bmRUYXNrU3RhdGUpOiBMaXN0SXRlbSB7XG4gIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgY2FzZSAnbG9jYWxfYmFzaCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGFzay5pZCxcbiAgICAgICAgdHlwZTogJ2xvY2FsX2Jhc2gnLFxuICAgICAgICBsYWJlbDogdGFzay5raW5kID09PSAnbW9uaXRvcicgPyB0YXNrLmRlc2NyaXB0aW9uIDogdGFzay5jb21tYW5kLFxuICAgICAgICBzdGF0dXM6IHRhc2suc3RhdHVzLFxuICAgICAgICB0YXNrLFxuICAgICAgfVxuICAgIGNhc2UgJ3JlbW90ZV9hZ2VudCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGFzay5pZCxcbiAgICAgICAgdHlwZTogJ3JlbW90ZV9hZ2VudCcsXG4gICAgICAgIGxhYmVsOiB0YXNrLnRpdGxlLFxuICAgICAgICBzdGF0dXM6IHRhc2suc3RhdHVzLFxuICAgICAgICB0YXNrLFxuICAgICAgfVxuICAgIGNhc2UgJ2xvY2FsX2FnZW50JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICB0eXBlOiAnbG9jYWxfYWdlbnQnLFxuICAgICAgICBsYWJlbDogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgc3RhdHVzOiB0YXNrLnN0YXR1cyxcbiAgICAgICAgdGFzayxcbiAgICAgIH1cbiAgICBjYXNlICdpbl9wcm9jZXNzX3RlYW1tYXRlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICB0eXBlOiAnaW5fcHJvY2Vzc190ZWFtbWF0ZScsXG4gICAgICAgIGxhYmVsOiBgQCR7dGFzay5pZGVudGl0eS5hZ2VudE5hbWV9YCxcbiAgICAgICAgc3RhdHVzOiB0YXNrLnN0YXR1cyxcbiAgICAgICAgdGFzayxcbiAgICAgIH1cbiAgICBjYXNlICdsb2NhbF93b3JrZmxvdyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGFzay5pZCxcbiAgICAgICAgdHlwZTogJ2xvY2FsX3dvcmtmbG93JyxcbiAgICAgICAgbGFiZWw6IHRhc2suc3VtbWFyeSA/PyB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICBzdGF0dXM6IHRhc2suc3RhdHVzLFxuICAgICAgICB0YXNrLFxuICAgICAgfVxuICAgIGNhc2UgJ21vbml0b3JfbWNwJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgICB0eXBlOiAnbW9uaXRvcl9tY3AnLFxuICAgICAgICBsYWJlbDogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgc3RhdHVzOiB0YXNrLnN0YXR1cyxcbiAgICAgICAgdGFzayxcbiAgICAgIH1cbiAgICBjYXNlICdkcmVhbSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGFzay5pZCxcbiAgICAgICAgdHlwZTogJ2RyZWFtJyxcbiAgICAgICAgbGFiZWw6IHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgIHN0YXR1czogdGFzay5zdGF0dXMsXG4gICAgICAgIHRhc2ssXG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gSXRlbSh7XG4gIGl0ZW0sXG4gIGlzU2VsZWN0ZWQsXG59OiB7XG4gIGl0ZW06IExpc3RJdGVtXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW5cbn0pOiBSZWFjdE5vZGUge1xuICBjb25zdCB7IGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIC8vIERpYWxvZyBib3JkZXIgKDIpICsgcGFkZGluZyAoMikgKyBwb2ludGVyIHByZWZpeCAoMikgKyBuYW1lL3N0YXR1cyBvdmVyaGVhZCAofjIwKVxuICBjb25zdCBtYXhBY3Rpdml0eVdpZHRoID0gTWF0aC5tYXgoMzAsIGNvbHVtbnMgLSAyNilcbiAgLy8gSW4gY29vcmRpbmF0b3IgbW9kZSwgdXNlIGdyZXkgcG9pbnRlciBpbnN0ZWFkIG9mIGJsdWVcbiAgY29uc3QgdXNlR3JleVBvaW50ZXIgPSBpc0Nvb3JkaW5hdG9yTW9kZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPXt1c2VHcmV5UG9pbnRlciAmJiBpc1NlbGVjdGVkfT5cbiAgICAgICAge2lzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgKyAnICcgOiAnICAnfVxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgJiYgIXVzZUdyZXlQb2ludGVyID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2l0ZW0udHlwZSA9PT0gJ2xlYWRlcicgPyAoXG4gICAgICAgICAgPFRleHQ+QHtURUFNX0xFQURfTkFNRX08L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJhY2tncm91bmRUYXNrQ29tcG9uZW50XG4gICAgICAgICAgICB0YXNrPXtpdGVtLnRhc2t9XG4gICAgICAgICAgICBtYXhBY3Rpdml0eVdpZHRoPXttYXhBY3Rpdml0eVdpZHRofVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gVGVhbW1hdGVUYXNrR3JvdXBzKHtcbiAgdGVhbW1hdGVUYXNrcyxcbiAgY3VycmVudFNlbGVjdGlvbklkLFxufToge1xuICB0ZWFtbWF0ZVRhc2tzOiBMaXN0SXRlbVtdXG4gIGN1cnJlbnRTZWxlY3Rpb25JZDogc3RyaW5nIHwgdW5kZWZpbmVkXG59KTogUmVhY3ROb2RlIHtcbiAgLy8gU2VwYXJhdGUgbGVhZGVyIGZyb20gdGVhbW1hdGVzLCBncm91cCB0ZWFtbWF0ZXMgYnkgdGVhbVxuICBjb25zdCBsZWFkZXJJdGVtcyA9IHRlYW1tYXRlVGFza3MuZmlsdGVyKGkgPT4gaS50eXBlID09PSAnbGVhZGVyJylcbiAgY29uc3QgdGVhbW1hdGVJdGVtcyA9IHRlYW1tYXRlVGFza3MuZmlsdGVyKFxuICAgIGkgPT4gaS50eXBlID09PSAnaW5fcHJvY2Vzc190ZWFtbWF0ZScsXG4gIClcbiAgY29uc3QgdGVhbXMgPSBuZXcgTWFwPHN0cmluZywgdHlwZW9mIHRlYW1tYXRlSXRlbXM+KClcbiAgZm9yIChjb25zdCBpdGVtIG9mIHRlYW1tYXRlSXRlbXMpIHtcbiAgICBjb25zdCB0ZWFtTmFtZSA9IGl0ZW0udGFzay5pZGVudGl0eS50ZWFtTmFtZVxuICAgIGNvbnN0IGdyb3VwID0gdGVhbXMuZ2V0KHRlYW1OYW1lKVxuICAgIGlmIChncm91cCkge1xuICAgICAgZ3JvdXAucHVzaChpdGVtKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZWFtcy5zZXQodGVhbU5hbWUsIFtpdGVtXSlcbiAgICB9XG4gIH1cbiAgY29uc3QgdGVhbUVudHJpZXMgPSBbLi4udGVhbXMuZW50cmllcygpXVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGVhbUVudHJpZXMubWFwKChbdGVhbU5hbWUsIGl0ZW1zXSkgPT4ge1xuICAgICAgICBjb25zdCBtZW1iZXJDb3VudCA9IGl0ZW1zLmxlbmd0aCArIGxlYWRlckl0ZW1zLmxlbmd0aFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3gga2V5PXt0ZWFtTmFtZX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIHsnICAnfVRlYW06IHt0ZWFtTmFtZX0gKHttZW1iZXJDb3VudH0pXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7LyogUmVuZGVyIGxlYWRlciBmaXJzdCB3aXRoaW4gZWFjaCB0ZWFtICovfVxuICAgICAgICAgICAge2xlYWRlckl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0uaWR9LSR7dGVhbU5hbWV9YH1cbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaWQgPT09IGN1cnJlbnRTZWxlY3Rpb25JZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlkID09PSBjdXJyZW50U2VsZWN0aW9uSWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC8+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUlBO0FBSUE7QUFNQTtBQUNBLElBQUFzRTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTBFQSxJQUFNMUUsd0JBQXVCMkUsUUFBUSxrQkFBa0IsSUFFakRDLDBFQUNBNUUsdUJBQ0Y7QUFDSixJQUFNd0UscUJBQXFCRyxRQUFRLGtCQUFrQixJQUNoREMsc0VBQ0Q7QUFDSixJQUFNakcsbUJBQW1CNkYsb0JBQW9CN0Ysb0JBQW9CO0FBQ2pFLElBQU1zQixvQkFBb0J1RSxvQkFBb0J2RSxxQkFBcUI7QUFDbkUsSUFBTUUscUJBQXFCcUUsb0JBQW9CckUsc0JBQXNCO0FBSXJFLElBQU1zRSxtQkFBbUJFLFFBQVEsY0FBYyxJQUMxQ0MsZ0VBQ0Q7QUFDSixJQUFNaEcsaUJBQWlCNkYsa0JBQWtCN0Ysa0JBQWtCO0FBQzNELElBQU13QiwwQkFBeUJ1RSxRQUFRLGNBQWMsSUFFL0NDLDhFQUNBeEUseUJBQ0Y7OzsiLAogICJuYW1lcyI6IFsicmVuZGVyVG9vbEFjdGl2aXR5IiwgImFjdGl2aXR5IiwgInRvb2xzIiwgInRoZW1lIiwgInRvb2wiLCAiZmluZFRvb2xCeU5hbWUiLCAidG9vbE5hbWUiLCAicGFyc2VkIiwgImlucHV0U2NoZW1hIiwgInNhZmVQYXJzZSIsICJpbnB1dCIsICJwYXJzZWRJbnB1dCIsICJzdWNjZXNzIiwgImRhdGEiLCAidXNlckZhY2luZ05hbWUiLCAidG9vbEFyZ3MiLCAicmVuZGVyVG9vbFVzZU1lc3NhZ2UiLCAidmVyYm9zZSIsICJnZXRUYXNrU3RhdHVzSWNvbiIsICJzdGF0dXMiLCAib3B0aW9ucyIsICJpc0lkbGUiLCAiYXdhaXRpbmdBcHByb3ZhbCIsICJoYXNFcnJvciIsICJzaHV0ZG93blJlcXVlc3RlZCIsICJmaWd1cmVzIiwgImNyb3NzIiwgInF1ZXN0aW9uTWFya1ByZWZpeCIsICJ3YXJuaW5nIiwgImVsbGlwc2lzIiwgInBsYXkiLCAidGljayIsICJidWxsZXQiLCAiZ2V0VGFza1N0YXR1c0NvbG9yIiwgImRlc2NyaWJlVGVhbW1hdGVBY3Rpdml0eSIsICJ0IiwgImF3YWl0aW5nUGxhbkFwcHJvdmFsIiwgInByb2dyZXNzIiwgInJlY2VudEFjdGl2aXRpZXMiLCAic3VtbWFyaXplUmVjZW50QWN0aXZpdGllcyIsICJsYXN0QWN0aXZpdHkiLCAiYWN0aXZpdHlEZXNjcmlwdGlvbiIsICJzaG91bGRIaWRlVGFza3NGb290ZXIiLCAidGFza3MiLCAic2hvd1NwaW5uZXJUcmVlIiwgImhhc1Zpc2libGVUYXNrIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAiaXNCYWNrZ3JvdW5kVGFzayIsICJ0eXBlIiwgIkFzeW5jQWdlbnREZXRhaWxEaWFsb2ciLCAidDAiLCAiJCIsICJfYyIsICJhZ2VudCIsICJvbkRvbmUiLCAib25LaWxsQWdlbnQiLCAib25CYWNrIiwgInRoZW1lIiwgInVzZVRoZW1lIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiZ2V0VG9vbHMiLCAiZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQiLCAidG9vbHMiLCAiZWxhcHNlZFRpbWUiLCAidXNlRWxhcHNlZFRpbWUiLCAic3RhcnRUaW1lIiwgInN0YXR1cyIsICJ0b3RhbFBhdXNlZE1zIiwgInQyIiwgInQzIiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZ3MiLCAidDQiLCAiZSIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiaGFuZGxlS2V5RG93biIsICJ0NSIsICJwcm9tcHQiLCAiZXh0cmFjdFRhZyIsICJwbGFuQ29udGVudCIsICJkaXNwbGF5UHJvbXB0IiwgImxlbmd0aCIsICJzdWJzdHJpbmciLCAidG9rZW5Db3VudCIsICJyZXN1bHQiLCAidG90YWxUb2tlbnMiLCAicHJvZ3Jlc3MiLCAidG9vbFVzZUNvdW50IiwgInRvdGFsVG9vbFVzZUNvdW50IiwgInQ2IiwgInNlbGVjdGVkQWdlbnQiLCAiYWdlbnRUeXBlIiwgInQ3IiwgImRlc2NyaXB0aW9uIiwgInQ4IiwgInRpdGxlIiwgInQ5IiwgImdldFRhc2tTdGF0dXNDb2xvciIsICJnZXRUYXNrU3RhdHVzSWNvbiIsICJ0MTAiLCAidW5kZWZpbmVkIiwgImZvcm1hdE51bWJlciIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJzdWJ0aXRsZSIsICJ0MTQiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJ0MTUiLCAicmVjZW50QWN0aXZpdGllcyIsICJtYXAiLCAiYWN0aXZpdHkiLCAiaSIsICJyZW5kZXJUb29sQWN0aXZpdHkiLCAidDE2IiwgInQxNyIsICJlcnJvciIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJmb3JtYXRSZXZpZXdTdGFnZUNvdW50cyIsICJzdGFnZSIsICJmb3VuZCIsICJ2ZXJpZmllZCIsICJyZWZ1dGVkIiwgInBhcnRzIiwgInB1c2giLCAiam9pbiIsICJSYWluYm93VGV4dCIsICJ0MCIsICIkIiwgIl9jIiwgInRleHQiLCAicGhhc2UiLCAidDEiLCAidW5kZWZpbmVkIiwgInQyIiwgInQzIiwgIm1hcCIsICJjaCIsICJpIiwgImdldFJhaW5ib3dDb2xvciIsICJ1c2VTbW9vdGhDb3VudCIsICJ0YXJnZXQiLCAidGltZSIsICJzbmFwIiwgImRpc3BsYXllZCIsICJ1c2VSZWYiLCAibGFzdFRpY2siLCAiY3VycmVudCIsICJSZXZpZXdSYWluYm93TGluZSIsICJzZXNzaW9uIiwgInNldHRpbmdzIiwgInVzZVNldHRpbmdzIiwgInJlZHVjZWRNb3Rpb24iLCAicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCAicCIsICJyZXZpZXdQcm9ncmVzcyIsICJydW5uaW5nIiwgInN0YXR1cyIsICJ1c2VBbmltYXRpb25GcmFtZSIsICJUSUNLX01TIiwgInRhcmdldEZvdW5kIiwgImJ1Z3NGb3VuZCIsICJ0YXJnZXRWZXJpZmllZCIsICJidWdzVmVyaWZpZWQiLCAidGFyZ2V0UmVmdXRlZCIsICJidWdzUmVmdXRlZCIsICJNYXRoIiwgImZsb29yIiwgIlN5bWJvbCIsICJmb3IiLCAiRElBTU9ORF9GSUxMRUQiLCAidGFpbCIsICJESUFNT05EX09QRU4iLCAidDQiLCAidDUiLCAidDYiLCAiUmVtb3RlU2Vzc2lvblByb2dyZXNzIiwgImlzUmVtb3RlUmV2aWV3IiwgInRvZG9MaXN0IiwgImxlbmd0aCIsICJjb3VudCIsICJfdGVtcCIsICJjb21wbGV0ZWQiLCAidG90YWwiLCAiXyIsICJpbml0X2ZpZ3VyZXMiLCAiVGFza1N0YXR1c1RleHQiLCAidDAiLCAiJCIsICJfYyIsICJzdGF0dXMiLCAibGFiZWwiLCAic3VmZml4IiwgImRpc3BsYXlMYWJlbCIsICJjb2xvciIsICJ1bmRlZmluZWQiLCAidDEiLCAiU2hlbGxQcm9ncmVzcyIsICJzaGVsbCIsICJTeW1ib2wiLCAiZm9yIiwgIkJhY2tncm91bmRUYXNrIiwgInQwIiwgIiQiLCAiX2MiLCAidGFzayIsICJtYXhBY3Rpdml0eVdpZHRoIiwgImFjdGl2aXR5TGltaXQiLCAidHlwZSIsICJ0MSIsICJraW5kIiwgImRlc2NyaXB0aW9uIiwgImNvbW1hbmQiLCAidDIiLCAidHJ1bmNhdGUiLCAidDMiLCAidDQiLCAiaXNSZW1vdGVSZXZpZXciLCAicnVubmluZyIsICJzdGF0dXMiLCAiRElBTU9ORF9PUEVOIiwgIkRJQU1PTkRfRklMTEVEIiwgInRpdGxlIiwgIlN5bWJvbCIsICJmb3IiLCAidDUiLCAidDYiLCAidW5kZWZpbmVkIiwgIm5vdGlmaWVkIiwgIlQwIiwgIlQxIiwgImFjdGl2aXR5IiwgImRlc2NyaWJlVGVhbW1hdGVBY3Rpdml0eSIsICJUZXh0IiwgImlkZW50aXR5IiwgImNvbG9yIiwgInRvSW5rQ29sb3IiLCAiYWdlbnROYW1lIiwgIndvcmtmbG93TmFtZSIsICJzdW1tYXJ5IiwgImFnZW50Q291bnQiLCAicGx1cmFsIiwgIm4iLCAiZmlsZXNUb3VjaGVkIiwgImxlbmd0aCIsICJwaGFzZSIsICJzZXNzaW9uc1Jldmlld2luZyIsICJkZXRhaWwiLCAiaW5pdF9pbmsiLCAiaW5pdF9maWd1cmVzIiwgIkRyZWFtRGV0YWlsRGlhbG9nIiwgInQwIiwgIiQiLCAiX2MiLCAidGFzayIsICJvbkRvbmUiLCAib25CYWNrIiwgIm9uS2lsbCIsICJlbGFwc2VkVGltZSIsICJ1c2VFbGFwc2VkVGltZSIsICJzdGFydFRpbWUiLCAic3RhdHVzIiwgInQxIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5ncyIsICJ0MyIsICJlIiwgImtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYW5kbGVLZXlEb3duIiwgIlQwIiwgIlQxIiwgIlQyIiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJ0MTQiLCAidDE1IiwgInQxNiIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJmaWxlc1RvdWNoZWQiLCAibGVuZ3RoIiwgInNlc3Npb25zUmV2aWV3aW5nIiwgInR1cm5zIiwgInZpc2libGVUdXJucyIsICJmaWx0ZXIiLCAiX3RlbXAiLCAic2hvd24iLCAic2xpY2UiLCAiVklTSUJMRV9UVVJOUyIsICJoaWRkZW4iLCAiQm94IiwgIkRpYWxvZyIsICJ0MTciLCAidDE4IiwgInBsdXJhbCIsICJ0MTkiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJ0MjAiLCAibWFwIiwgIl90ZW1wMiIsICJ0dXJuIiwgImkiLCAidGV4dCIsICJ0b29sVXNlQ291bnQiLCAidCIsICJJblByb2Nlc3NUZWFtbWF0ZURldGFpbERpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgInRlYW1tYXRlIiwgIm9uRG9uZSIsICJvbktpbGwiLCAib25CYWNrIiwgIm9uRm9yZWdyb3VuZCIsICJ0aGVtZSIsICJ1c2VUaGVtZSIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImdldFRvb2xzIiwgImdldEVtcHR5VG9vbFBlcm1pc3Npb25Db250ZXh0IiwgInRvb2xzIiwgImVsYXBzZWRUaW1lIiwgInVzZUVsYXBzZWRUaW1lIiwgInN0YXJ0VGltZSIsICJzdGF0dXMiLCAidG90YWxQYXVzZWRNcyIsICJ0MiIsICJ0MyIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmdzIiwgInQ0IiwgImUiLCAia2V5IiwgInByZXZlbnREZWZhdWx0IiwgImhhbmRsZUtleURvd24iLCAidDUiLCAiZGVzY3JpYmVUZWFtbWF0ZUFjdGl2aXR5IiwgImFjdGl2aXR5IiwgInRva2VuQ291bnQiLCAicmVzdWx0IiwgInRvdGFsVG9rZW5zIiwgInByb2dyZXNzIiwgInRvb2xVc2VDb3VudCIsICJ0b3RhbFRvb2xVc2VDb3VudCIsICJ0NiIsICJwcm9tcHQiLCAidHJ1bmNhdGVUb1dpZHRoIiwgImRpc3BsYXlQcm9tcHQiLCAidDciLCAiaWRlbnRpdHkiLCAiY29sb3IiLCAidG9JbmtDb2xvciIsICJ0OCIsICJhZ2VudE5hbWUiLCAidDkiLCAidDEwIiwgInRpdGxlIiwgInQxMSIsICJ0MTIiLCAidW5kZWZpbmVkIiwgImZvcm1hdE51bWJlciIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJzdWJ0aXRsZSIsICJ0MTYiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJ0MTciLCAicmVjZW50QWN0aXZpdGllcyIsICJsZW5ndGgiLCAibWFwIiwgImFjdGl2aXR5XzAiLCAiaSIsICJyZW5kZXJUb29sQWN0aXZpdHkiLCAidDE4IiwgInQxOSIsICJ0MjAiLCAiZXJyb3IiLCAidDIxIiwgInQyMiIsICJpbml0X2luayIsICJmb3JtYXRUb29sVXNlU3VtbWFyeSIsICJuYW1lIiwgImlucHV0IiwgIkVYSVRfUExBTl9NT0RFX1YyX1RPT0xfTkFNRSIsICJBU0tfVVNFUl9RVUVTVElPTl9UT09MX05BTUUiLCAicXMiLCAicXVlc3Rpb25zIiwgIkFycmF5IiwgImlzQXJyYXkiLCAicSIsICJxdWVzdGlvbiIsICJoZWFkZXIiLCAib25lTGluZSIsICJyZXBsYWNlIiwgInRyaW0iLCAidHJ1bmNhdGVUb1dpZHRoIiwgInYiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJVbHRyYXBsYW5TZXNzaW9uRGV0YWlsIiwgInQwIiwgIiQiLCAiX2MiLCAic2Vzc2lvbiIsICJvbkRvbmUiLCAib25CYWNrIiwgIm9uS2lsbCIsICJydW5uaW5nIiwgInN0YXR1cyIsICJwaGFzZSIsICJ1bHRyYXBsYW5QaGFzZSIsICJzdGF0dXNUZXh0IiwgIlBIQVNFX0xBQkVMIiwgImVsYXBzZWRUaW1lIiwgInVzZUVsYXBzZWRUaW1lIiwgInN0YXJ0VGltZSIsICJlbmRUaW1lIiwgInNwYXducyIsICJjYWxscyIsICJsYXN0QmxvY2siLCAibXNnIiwgImxvZyIsICJ0eXBlIiwgImJsb2NrIiwgIm1lc3NhZ2UiLCAiY29udGVudCIsICJBR0VOVF9UT09MX05BTUUiLCAiTEVHQUNZX0FHRU5UX1RPT0xfTkFNRSIsICJ0MSIsICJ0MiIsICJ0MyIsICJhZ2VudHNXb3JraW5nIiwgInRvb2xDYWxscyIsICJsYXN0VG9vbENhbGwiLCAidDQiLCAic2Vzc2lvbklkIiwgImdldFJlbW90ZVRhc2tTZXNzaW9uVXJsIiwgInNlc3Npb25VcmwiLCAidDUiLCAiZGlzcGxheSIsICJnb0JhY2tPckNsb3NlIiwgImNvbmZpcm1pbmdTdG9wIiwgInNldENvbmZpcm1pbmdTdG9wIiwgInVzZVN0YXRlIiwgInQ2IiwgIlN5bWJvbCIsICJmb3IiLCAidDciLCAidDgiLCAibGFiZWwiLCAidmFsdWUiLCAidDkiLCAidDEwIiwgIkRJQU1PTkRfRklMTEVEIiwgIkRJQU1PTkRfT1BFTiIsICJ0MTEiLCAiZmlndXJlcyIsICJ0aWNrIiwgInQxMiIsICJwbHVyYWwiLCAidDEzIiwgIkFHRU5UX1ZFUkIiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJ0MTkiLCAidDIwIiwgInQyMSIsICJ0MjIiLCAidDIzIiwgInZfMCIsICJvcGVuQnJvd3NlciIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJTdGFnZVBpcGVsaW5lIiwgInN0YWdlIiwgImNvbXBsZXRlZCIsICJoYXNQcm9ncmVzcyIsICJTVEFHRVMiLCAiaW5kZXhPZiIsICJjdXJyZW50SWR4IiwgImluU2V0dXAiLCAibWFwIiwgInMiLCAiaSIsICJpc0N1cnJlbnQiLCAiU1RBR0VfTEFCRUxTIiwgInJldmlld0NvdW50c0xpbmUiLCAicCIsICJyZXZpZXdQcm9ncmVzcyIsICJ2ZXJpZmllZCIsICJidWdzVmVyaWZpZWQiLCAicmVmdXRlZCIsICJidWdzUmVmdXRlZCIsICJwYXJ0cyIsICJwdXNoIiwgImpvaW4iLCAiZm9ybWF0UmV2aWV3U3RhZ2VDb3VudHMiLCAiYnVnc0ZvdW5kIiwgIlJldmlld1Nlc3Npb25EZXRhaWwiLCAiaGFuZGxlQ2xvc2UiLCAic3RhdHVzTGFiZWwiLCAib3B0aW9ucyIsICJhY3Rpb24iLCAiYmI0NSIsICJoYW5kbGVTZWxlY3QiLCAiX3RlbXAiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJSZW1vdGVTZXNzaW9uRGV0YWlsRGlhbG9nIiwgInRvb2xVc2VDb250ZXh0IiwgImlzVGVsZXBvcnRpbmciLCAic2V0SXNUZWxlcG9ydGluZyIsICJ0ZWxlcG9ydEVycm9yIiwgInNldFRlbGVwb3J0RXJyb3IiLCAibGFzdE1lc3NhZ2VzIiwgInVzZU1lbW8iLCAiaXNVbHRyYXBsYW4iLCAiaXNSZW1vdGVSZXZpZXciLCAibm9ybWFsaXplTWVzc2FnZXMiLCAidG9JbnRlcm5hbE1lc3NhZ2VzIiwgImZpbHRlciIsICJfIiwgInNsaWNlIiwgImhhbmRsZUtleURvd24iLCAiZSIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiaGFuZGxlVGVsZXBvcnQiLCAidGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbiIsICJlcnIiLCAiZXJyb3JNZXNzYWdlIiwgImRpc3BsYXlUaXRsZSIsICJ0aXRsZSIsICJkaXNwbGF5U3RhdHVzIiwgImZvcm1hdER1cmF0aW9uIiwgIkRhdGUiLCAibm93IiwgImxlbmd0aCIsICJFTVBUWV9MT09LVVBTIiwgInRvb2xzIiwgImNvbW1hbmRzIiwgInZlcmJvc2UiLCAiU2V0IiwgImluaXRfZmlndXJlcyIsICJpbml0X2NvbnN0YW50cyIsICJuZWVkc19pbnB1dCIsICJwbGFuX3JlYWR5IiwgImZpbmRpbmciLCAidmVyaWZ5aW5nIiwgInN5bnRoZXNpemluZyIsICJnZXRUYXNrT3V0cHV0IiwgInNoZWxsIiwgInBhdGgiLCAiZ2V0VGFza091dHB1dFBhdGgiLCAiaWQiLCAicmVzdWx0IiwgInRhaWxGaWxlIiwgIlNIRUxMX0RFVEFJTF9UQUlMX0JZVEVTIiwgImNvbnRlbnQiLCAiYnl0ZXNUb3RhbCIsICJTaGVsbERldGFpbERpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJvbktpbGxTaGVsbCIsICJvbkJhY2siLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAidDEiLCAib3V0cHV0UHJvbWlzZSIsICJzZXRPdXRwdXRQcm9taXNlIiwgInVzZVN0YXRlIiwgImRlZmVycmVkT3V0cHV0UHJvbWlzZSIsICJ1c2VEZWZlcnJlZFZhbHVlIiwgInQyIiwgInN0YXR1cyIsICJ0aW1lciIsICJzZXRJbnRlcnZhbCIsICJfdGVtcCIsICJjbGVhckludGVydmFsIiwgInQzIiwgInVzZUVmZmVjdCIsICJ0NCIsICJkaXNwbGF5IiwgImhhbmRsZUNsb3NlIiwgInQ1IiwgInQ2IiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5ncyIsICJ0NyIsICJlIiwgImtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYW5kbGVLZXlEb3duIiwgImlzTW9uaXRvciIsICJraW5kIiwgInQ4IiwgImNvbW1hbmQiLCAidHJ1bmNhdGVUb1dpZHRoIiwgImRpc3BsYXlDb21tYW5kIiwgInQ5IiwgInQxMCIsICJleGl0U3RhdGUiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgInQxMSIsICJ0MTIiLCAiY29kZSIsICJ1bmRlZmluZWQiLCAidDEzIiwgInQxNCIsICJlbmRUaW1lIiwgIkRhdGUiLCAibm93IiwgInQxNSIsICJzdGFydFRpbWUiLCAidDE2IiwgImZvcm1hdER1cmF0aW9uIiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJ0MjEiLCAidDIyIiwgInQyMyIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJzZXRPdXRwdXRQcm9taXNlXzAiLCAic2hlbGxfMCIsICJTaGVsbE91dHB1dENvbnRlbnQiLCAidXNlIiwgImlzSW5jb21wbGV0ZSIsICJyZW5kZXJlZCIsICJzdGFydHMiLCAicG9zIiwgImxlbmd0aCIsICJpIiwgInByZXYiLCAibGFzdEluZGV4T2YiLCAicHVzaCIsICJyZXZlcnNlIiwgImlfMCIsICJzdGFydCIsICJlbmQiLCAibGluZSIsICJzbGljZSIsICJtYXAiLCAiX3RlbXAyIiwgImZvcm1hdEZpbGVTaXplIiwgImxpbmVfMCIsICJpXzEiLCAiZ2V0U2VsZWN0YWJsZUJhY2tncm91bmRUYXNrcyIsICJ0YXNrcyIsICJmb3JlZ3JvdW5kZWRUYXNrSWQiLCAiYmFja2dyb3VuZFRhc2tzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAiZmlsdGVyIiwgImlzQmFja2dyb3VuZFRhc2siLCAidGFzayIsICJ0eXBlIiwgImlkIiwgIkJhY2tncm91bmRUYXNrc0RpYWxvZyIsICJvbkRvbmUiLCAidG9vbFVzZUNvbnRleHQiLCAiaW5pdGlhbERldGFpbFRhc2tJZCIsICJ1c2VBcHBTdGF0ZSIsICJzIiwgInNob3dTcGlubmVyVHJlZSIsICJleHBhbmRlZFZpZXciLCAic2V0QXBwU3RhdGUiLCAidXNlU2V0QXBwU3RhdGUiLCAia2lsbEFnZW50c1Nob3J0Y3V0IiwgInVzZVNob3J0Y3V0RGlzcGxheSIsICJ0eXBlZFRhc2tzIiwgInNraXBwZWRMaXN0T25Nb3VudCIsICJ1c2VSZWYiLCAidmlld1N0YXRlIiwgInNldFZpZXdTdGF0ZSIsICJ1c2VTdGF0ZSIsICJjdXJyZW50IiwgIm1vZGUiLCAiaXRlbUlkIiwgImFsbEl0ZW1zIiwgImxlbmd0aCIsICJzZWxlY3RlZEluZGV4IiwgInNldFNlbGVjdGVkSW5kZXgiLCAidXNlUmVnaXN0ZXJPdmVybGF5IiwgImJhc2hUYXNrcyIsICJyZW1vdGVTZXNzaW9ucyIsICJhZ2VudFRhc2tzIiwgInRlYW1tYXRlVGFza3MiLCAid29ya2Zsb3dUYXNrcyIsICJtY3BNb25pdG9ycyIsICJkcmVhbVRhc2tzIiwgImFsbFNlbGVjdGFibGVJdGVtcyIsICJ1c2VNZW1vIiwgIm1hcCIsICJ0b0xpc3RJdGVtIiwgInNvcnRlZCIsICJzb3J0IiwgImEiLCAiYiIsICJhU3RhdHVzIiwgInN0YXR1cyIsICJiU3RhdHVzIiwgImFUaW1lIiwgInN0YXJ0VGltZSIsICJiVGltZSIsICJiYXNoIiwgIml0ZW0iLCAicmVtb3RlIiwgImFnZW50IiwgIndvcmtmbG93cyIsICJtb25pdG9yTWNwIiwgInRlYW1tYXRlcyIsICJsZWFkZXJJdGVtIiwgImxhYmVsIiwgIlRFQU1fTEVBRF9OQU1FIiwgImN1cnJlbnRTZWxlY3Rpb24iLCAidXNlS2V5YmluZGluZ3MiLCAiY29uZmlybTpwcmV2aW91cyIsICJwcmV2IiwgIk1hdGgiLCAibWF4IiwgImNvbmZpcm06bmV4dCIsICJtaW4iLCAiY29uZmlybTp5ZXMiLCAiZXhpdFRlYW1tYXRlVmlldyIsICJkaXNwbGF5IiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAiaGFuZGxlS2V5RG93biIsICJlIiwgImtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJraWxsU2hlbGxUYXNrIiwgImtpbGxBZ2VudFRhc2siLCAia2lsbFRlYW1tYXRlVGFzayIsICJraWxsV29ya2Zsb3dUYXNrIiwgImtpbGxNb25pdG9yTWNwIiwgImtpbGxEcmVhbVRhc2siLCAiaXNVbHRyYXBsYW4iLCAic3RvcFVsdHJhcGxhbiIsICJzZXNzaW9uSWQiLCAia2lsbFJlbW90ZUFnZW50VGFzayIsICJlbnRlclRlYW1tYXRlVmlldyIsICJ0YXNrSWQiLCAiTG9jYWxTaGVsbFRhc2siLCAia2lsbCIsICJMb2NhbEFnZW50VGFzayIsICJJblByb2Nlc3NUZWFtbWF0ZVRhc2siLCAiRHJlYW1UYXNrIiwgIlJlbW90ZUFnZW50VGFzayIsICJvbkRvbmVFdmVudCIsICJ1c2VFZmZlY3RFdmVudCIsICJ1c2VFZmZlY3QiLCAidG90YWxJdGVtcyIsICJnb0JhY2tUb0xpc3QiLCAidW5kZWZpbmVkIiwgIldvcmtmbG93RGV0YWlsRGlhbG9nIiwgInNraXBXb3JrZmxvd0FnZW50IiwgImFnZW50SWQiLCAicmV0cnlXb3JrZmxvd0FnZW50IiwgIk1vbml0b3JNY3BEZXRhaWxEaWFsb2ciLCAicnVubmluZ0Jhc2hDb3VudCIsICJjb3VudCIsICJfIiwgInJ1bm5pbmdBZ2VudENvdW50IiwgInJ1bm5pbmdUZWFtbWF0ZUNvdW50IiwgInN1YnRpdGxlIiwgImludGVyc3BlcnNlIiwgImluZGV4IiwgImFjdGlvbnMiLCAic29tZSIsICJ0IiwgImhhbmRsZUNhbmNlbCIsICJyZW5kZXJJbnB1dEd1aWRlIiwgImV4aXRTdGF0ZSIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAiaSIsICJraW5kIiwgImRlc2NyaXB0aW9uIiwgImNvbW1hbmQiLCAidGl0bGUiLCAiaWRlbnRpdHkiLCAiYWdlbnROYW1lIiwgInN1bW1hcnkiLCAiSXRlbSIsICJ0MCIsICIkIiwgIl9jIiwgImlzU2VsZWN0ZWQiLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAibWF4QWN0aXZpdHlXaWR0aCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImlzQ29vcmRpbmF0b3JNb2RlIiwgInVzZUdyZXlQb2ludGVyIiwgInQyIiwgInQzIiwgImZpZ3VyZXMiLCAicG9pbnRlciIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJUZWFtbWF0ZVRhc2tHcm91cHMiLCAiY3VycmVudFNlbGVjdGlvbklkIiwgImxlYWRlckl0ZW1zIiwgIl90ZW1wIiwgInRlYW1tYXRlSXRlbXMiLCAiX3RlbXAyIiwgInRlYW1zIiwgIk1hcCIsICJ0ZWFtTmFtZSIsICJncm91cCIsICJnZXQiLCAicHVzaCIsICJzZXQiLCAidGVhbUVudHJpZXMiLCAiZW50cmllcyIsICJ0ZWFtTmFtZV8wIiwgIml0ZW1zIiwgIm1lbWJlckNvdW50IiwgIml0ZW1fMCIsICJpdGVtXzEiLCAiaV8wIiwgIndvcmtmbG93VGFza01vZHVsZSIsICJtb25pdG9yTWNwTW9kdWxlIiwgImluaXRfY29uc3RhbnRzIiwgImZlYXR1cmUiLCAicmVxdWlyZSJdCn0K
