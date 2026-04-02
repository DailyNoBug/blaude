#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  notifySessionStateChanged
} from "./chunk-ANRV3FPK.mjs";
import {
  normalizeControlMessageKeys
} from "./chunk-WBJL7DYB.mjs";
import {
  AccountInfoSchema,
  AgentDefinitionSchema,
  AgentInfoSchema,
  DEFAULT_CRON_JITTER_CONFIG,
  FastModeStateSchema,
  HookEventSchema,
  HookInputSchema,
  McpServerConfigForProcessTransportSchema,
  McpServerStatusSchema,
  ModelInfoSchema,
  PermissionModeSchema,
  PermissionUpdateSchema,
  SDKMessageSchema,
  SDKPostTurnSummaryMessageSchema,
  SDKStreamlinedTextMessageSchema,
  SDKStreamlinedToolUseSummaryMessageSchema,
  SDKUserMessageSchema,
  SlashCommandSchema,
  Stream,
  addMarketplaceSource,
  applyPermissionUpdates,
  cronToHuman,
  detectImageFormatFromBase64,
  executePermissionRequestHooks,
  findMissedTasks,
  getCronFilePath,
  getDeclaredMarketplaces,
  hasCronTasksSync,
  hasPermissionsToUseTool,
  hookJSONOutputSchema,
  init_PermissionUpdate,
  init_PermissionUpdateSchema,
  init_commandLifecycle,
  init_coreSchemas,
  init_cron,
  init_cronTasks,
  init_hooks,
  init_hooks2,
  init_imageResizer,
  init_marketplaceManager,
  init_permissions,
  init_stream,
  jitteredNextCronRunMs,
  loadKnownMarketplacesConfig,
  markCronTasksFired,
  notifyCommandLifecycle,
  oneShotJitteredNextCronRunMs,
  permissionUpdateSchema,
  persistPermissionUpdates,
  readCronTasks,
  removeCronTasks
} from "./chunk-BQ2W5UUK.mjs";
import {
  init_genericProcessUtils,
  isProcessRunning
} from "./chunk-2UP4OFWW.mjs";
import {
  getFeatureValue_CACHED_WITH_REFRESH,
  init_file,
  init_growthbook,
  init_isEqual,
  init_schemas,
  isEqual_default,
  isLocalMarketplaceSource,
  pathExists
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4,
  v4_default
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  findCanonicalGitRoot,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-SF3TOBTZ.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  AbortError,
  errorMessage,
  getErrnoCode,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  getProjectRoot,
  getScheduledTasksEnabled,
  getSessionCronTasks,
  getSessionId,
  init_state,
  removeSessionCronTasks,
  setScheduledTasksEnabled
} from "./chunk-NGSB34MB.mjs";
import {
  init_process,
  writeToStdout
} from "./chunk-66ZH6W67.mjs";
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/cronJitterConfig.ts
var cronJitterConfig_exports = {};
__export(cronJitterConfig_exports, {
  getCronJitterConfig: () => getCronJitterConfig
});
function getCronJitterConfig() {
  const raw = getFeatureValue_CACHED_WITH_REFRESH(
    "tengu_kairos_cron_config",
    DEFAULT_CRON_JITTER_CONFIG,
    JITTER_CONFIG_REFRESH_MS
  );
  const parsed = cronJitterConfigSchema().safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_CRON_JITTER_CONFIG;
}
var JITTER_CONFIG_REFRESH_MS, HALF_HOUR_MS, THIRTY_DAYS_MS, cronJitterConfigSchema;
var init_cronJitterConfig = __esm({
  "src/utils/cronJitterConfig.ts"() {
    init_v4();
    init_growthbook();
    init_cronTasks();
    init_lazySchema();
    JITTER_CONFIG_REFRESH_MS = 60 * 1e3;
    HALF_HOUR_MS = 30 * 60 * 1e3;
    THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1e3;
    cronJitterConfigSchema = lazySchema(
      () => external_exports.object({
        recurringFrac: external_exports.number().min(0).max(1),
        recurringCapMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotMaxMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotFloorMs: external_exports.number().int().min(0).max(HALF_HOUR_MS),
        oneShotMinuteMod: external_exports.number().int().min(1).max(60),
        recurringMaxAgeMs: external_exports.number().int().min(0).max(THIRTY_DAYS_MS).default(DEFAULT_CRON_JITTER_CONFIG.recurringMaxAgeMs)
      }).refine((c) => c.oneShotFloorMs <= c.oneShotMaxMs)
    );
  }
});

// src/utils/cronTasksLock.ts
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { dirname, join } from "path";
function getLockPath(dir) {
  return join(dir ?? getProjectRoot(), LOCK_FILE_REL);
}
async function readLock(dir) {
  let raw;
  try {
    raw = await readFile(getLockPath(dir), "utf8");
  } catch {
    return void 0;
  }
  const result = schedulerLockSchema().safeParse(safeParseJSON(raw, false));
  return result.success ? result.data : void 0;
}
async function tryCreateExclusive(lock, dir) {
  const path = getLockPath(dir);
  const body = jsonStringify(lock);
  try {
    await writeFile(path, body, { flag: "wx" });
    return true;
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "EEXIST") return false;
    if (code === "ENOENT") {
      await mkdir(dirname(path), { recursive: true });
      try {
        await writeFile(path, body, { flag: "wx" });
        return true;
      } catch (retryErr) {
        if (getErrnoCode(retryErr) === "EEXIST") return false;
        throw retryErr;
      }
    }
    throw e;
  }
}
function registerLockCleanup(opts) {
  unregisterCleanup?.();
  unregisterCleanup = registerCleanup(async () => {
    await releaseSchedulerLock(opts);
  });
}
async function tryAcquireSchedulerLock(opts) {
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const lock = {
    sessionId,
    pid: process.pid,
    acquiredAt: Date.now()
  };
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = void 0;
    registerLockCleanup(opts);
    logForDebugging(
      `[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`
    );
    return true;
  }
  const existing = await readLock(dir);
  if (existing?.sessionId === sessionId) {
    if (existing.pid !== process.pid) {
      await writeFile(getLockPath(dir), jsonStringify(lock));
      registerLockCleanup(opts);
    }
    return true;
  }
  if (existing && isProcessRunning(existing.pid)) {
    if (lastBlockedBy !== existing.sessionId) {
      lastBlockedBy = existing.sessionId;
      logForDebugging(
        `[ScheduledTasks] scheduler lock held by session ${existing.sessionId} (PID ${existing.pid})`
      );
    }
    return false;
  }
  if (existing) {
    logForDebugging(
      `[ScheduledTasks] recovering stale scheduler lock from PID ${existing.pid}`
    );
  }
  await unlink(getLockPath(dir)).catch(() => {
  });
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = void 0;
    registerLockCleanup(opts);
    return true;
  }
  return false;
}
async function releaseSchedulerLock(opts) {
  unregisterCleanup?.();
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const existing = await readLock(dir);
  if (!existing || existing.sessionId !== sessionId) return;
  try {
    await unlink(getLockPath(dir));
    logForDebugging("[ScheduledTasks] released scheduler lock");
  } catch {
  }
}
var LOCK_FILE_REL, schedulerLockSchema, unregisterCleanup, lastBlockedBy;
var init_cronTasksLock = __esm({
  "src/utils/cronTasksLock.ts"() {
    init_v4();
    init_state();
    init_cleanupRegistry();
    init_debug();
    init_errors();
    init_genericProcessUtils();
    init_json();
    init_lazySchema();
    init_slowOperations();
    LOCK_FILE_REL = join(".claude", "scheduled_tasks.lock");
    schedulerLockSchema = lazySchema(
      () => external_exports.object({
        sessionId: external_exports.string(),
        pid: external_exports.number(),
        acquiredAt: external_exports.number()
      })
    );
  }
});

// src/utils/cronScheduler.ts
var cronScheduler_exports = {};
__export(cronScheduler_exports, {
  buildMissedTaskNotification: () => buildMissedTaskNotification,
  createCronScheduler: () => createCronScheduler,
  isRecurringTaskAged: () => isRecurringTaskAged
});
function isRecurringTaskAged(t, nowMs, maxAgeMs) {
  if (maxAgeMs === 0) return false;
  return Boolean(t.recurring && !t.permanent && nowMs - t.createdAt >= maxAgeMs);
}
function createCronScheduler(options) {
  const {
    onFire,
    isLoading,
    assistantMode = false,
    onFireTask,
    onMissed,
    dir,
    lockIdentity,
    getJitterConfig,
    isKilled,
    filter
  } = options;
  const lockOpts = dir || lockIdentity ? { dir, lockIdentity } : void 0;
  let tasks = [];
  const nextFireAt = /* @__PURE__ */ new Map();
  const missedAsked = /* @__PURE__ */ new Set();
  const inFlight = /* @__PURE__ */ new Set();
  let enablePoll = null;
  let checkTimer = null;
  let lockProbeTimer = null;
  let watcher = null;
  let stopped = false;
  let isOwner = false;
  async function load(initial) {
    const next = await readCronTasks(dir);
    if (stopped) return;
    tasks = next;
    if (!initial) return;
    const now = Date.now();
    const missed = findMissedTasks(next, now).filter(
      (t) => !t.recurring && !missedAsked.has(t.id) && (!filter || filter(t))
    );
    if (missed.length > 0) {
      for (const t of missed) {
        missedAsked.add(t.id);
        nextFireAt.set(t.id, Infinity);
      }
      logEvent("tengu_scheduled_task_missed", {
        count: missed.length,
        taskIds: missed.map((t) => t.id).join(
          ","
        )
      });
      if (onMissed) {
        onMissed(missed);
      } else {
        onFire(buildMissedTaskNotification(missed));
      }
      void removeCronTasks(
        missed.map((t) => t.id),
        dir
      ).catch(
        (e) => logForDebugging(`[ScheduledTasks] failed to remove missed tasks: ${e}`)
      );
      logForDebugging(
        `[ScheduledTasks] surfaced ${missed.length} missed one-shot task(s)`
      );
    }
  }
  function check() {
    if (isKilled?.()) return;
    if (isLoading() && !assistantMode) return;
    const now = Date.now();
    const seen = /* @__PURE__ */ new Set();
    const firedFileRecurring = [];
    const jitterCfg = getJitterConfig?.() ?? DEFAULT_CRON_JITTER_CONFIG;
    function process2(t, isSession) {
      if (filter && !filter(t)) return;
      seen.add(t.id);
      if (inFlight.has(t.id)) return;
      let next = nextFireAt.get(t.id);
      if (next === void 0) {
        next = t.recurring ? jitteredNextCronRunMs(
          t.cron,
          t.lastFiredAt ?? t.createdAt,
          t.id,
          jitterCfg
        ) ?? Infinity : oneShotJitteredNextCronRunMs(
          t.cron,
          t.createdAt,
          t.id,
          jitterCfg
        ) ?? Infinity;
        nextFireAt.set(t.id, next);
        logForDebugging(
          `[ScheduledTasks] scheduled ${t.id} for ${next === Infinity ? "never" : new Date(next).toISOString()}`
        );
      }
      if (now < next) return;
      logForDebugging(
        `[ScheduledTasks] firing ${t.id}${t.recurring ? " (recurring)" : ""}`
      );
      logEvent("tengu_scheduled_task_fire", {
        recurring: t.recurring ?? false,
        taskId: t.id
      });
      if (onFireTask) {
        onFireTask(t);
      } else {
        onFire(t.prompt);
      }
      const aged = isRecurringTaskAged(t, now, jitterCfg.recurringMaxAgeMs);
      if (aged) {
        const ageHours = Math.floor((now - t.createdAt) / 1e3 / 60 / 60);
        logForDebugging(
          `[ScheduledTasks] recurring task ${t.id} aged out (${ageHours}h since creation), deleting after final fire`
        );
        logEvent("tengu_scheduled_task_expired", {
          taskId: t.id,
          ageHours
        });
      }
      if (t.recurring && !aged) {
        const newNext = jitteredNextCronRunMs(t.cron, now, t.id, jitterCfg) ?? Infinity;
        nextFireAt.set(t.id, newNext);
        if (!isSession) firedFileRecurring.push(t.id);
      } else if (isSession) {
        removeSessionCronTasks([t.id]);
        nextFireAt.delete(t.id);
      } else {
        inFlight.add(t.id);
        void removeCronTasks([t.id], dir).catch(
          (e) => logForDebugging(
            `[ScheduledTasks] failed to remove task ${t.id}: ${e}`
          )
        ).finally(() => inFlight.delete(t.id));
        nextFireAt.delete(t.id);
      }
    }
    if (isOwner) {
      for (const t of tasks) process2(t, false);
      if (firedFileRecurring.length > 0) {
        for (const id of firedFileRecurring) inFlight.add(id);
        void markCronTasksFired(firedFileRecurring, now, dir).catch(
          (e) => logForDebugging(
            `[ScheduledTasks] failed to persist lastFiredAt: ${e}`
          )
        ).finally(() => {
          for (const id of firedFileRecurring) inFlight.delete(id);
        });
      }
    }
    if (dir === void 0) {
      for (const t of getSessionCronTasks()) process2(t, true);
    }
    if (seen.size === 0) {
      nextFireAt.clear();
      return;
    }
    for (const id of nextFireAt.keys()) {
      if (!seen.has(id)) nextFireAt.delete(id);
    }
  }
  async function enable() {
    if (stopped) return;
    if (enablePoll) {
      clearInterval(enablePoll);
      enablePoll = null;
    }
    const { default: chokidar } = await import("./chokidar-73PKTLPD.mjs");
    if (stopped) return;
    isOwner = await tryAcquireSchedulerLock(lockOpts).catch(() => false);
    if (stopped) {
      if (isOwner) {
        isOwner = false;
        void releaseSchedulerLock(lockOpts);
      }
      return;
    }
    if (!isOwner) {
      lockProbeTimer = setInterval(() => {
        void tryAcquireSchedulerLock(lockOpts).then((owned) => {
          if (stopped) {
            if (owned) void releaseSchedulerLock(lockOpts);
            return;
          }
          if (owned) {
            isOwner = true;
            if (lockProbeTimer) {
              clearInterval(lockProbeTimer);
              lockProbeTimer = null;
            }
          }
        }).catch((e) => logForDebugging(String(e), { level: "error" }));
      }, LOCK_PROBE_INTERVAL_MS);
      lockProbeTimer.unref?.();
    }
    void load(true);
    const path = getCronFilePath(dir);
    watcher = chokidar.watch(path, {
      persistent: false,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: FILE_STABILITY_MS },
      ignorePermissionErrors: true
    });
    watcher.on("add", () => void load(false));
    watcher.on("change", () => void load(false));
    watcher.on("unlink", () => {
      if (!stopped) {
        tasks = [];
        nextFireAt.clear();
      }
    });
    checkTimer = setInterval(check, CHECK_INTERVAL_MS);
    checkTimer.unref?.();
  }
  return {
    start() {
      stopped = false;
      if (dir !== void 0) {
        logForDebugging(
          `[ScheduledTasks] scheduler start() \u2014 dir=${dir}, hasTasks=${hasCronTasksSync(dir)}`
        );
        void enable();
        return;
      }
      logForDebugging(
        `[ScheduledTasks] scheduler start() \u2014 enabled=${getScheduledTasksEnabled()}, hasTasks=${hasCronTasksSync()}`
      );
      if (!getScheduledTasksEnabled() && (assistantMode || hasCronTasksSync())) {
        setScheduledTasksEnabled(true);
      }
      if (getScheduledTasksEnabled()) {
        void enable();
        return;
      }
      enablePoll = setInterval(
        (en) => {
          if (getScheduledTasksEnabled()) void en();
        },
        CHECK_INTERVAL_MS,
        enable
      );
      enablePoll.unref?.();
    },
    stop() {
      stopped = true;
      if (enablePoll) {
        clearInterval(enablePoll);
        enablePoll = null;
      }
      if (checkTimer) {
        clearInterval(checkTimer);
        checkTimer = null;
      }
      if (lockProbeTimer) {
        clearInterval(lockProbeTimer);
        lockProbeTimer = null;
      }
      void watcher?.close();
      watcher = null;
      if (isOwner) {
        isOwner = false;
        void releaseSchedulerLock(lockOpts);
      }
    },
    getNextFireTime() {
      let min = Infinity;
      for (const t of nextFireAt.values()) {
        if (t < min) min = t;
      }
      return min === Infinity ? null : min;
    }
  };
}
function buildMissedTaskNotification(missed) {
  const plural = missed.length > 1;
  const header = `The following one-shot scheduled task${plural ? "s were" : " was"} missed while Claude was not running. ${plural ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${plural ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${plural ? "each one" : "it"} now. Only execute if the user confirms.`;
  const blocks = missed.map((t) => {
    const meta = `[${cronToHuman(t.cron)}, created ${new Date(t.createdAt).toLocaleString()}]`;
    const longestRun = (t.prompt.match(/`+/g) ?? []).reduce(
      (max, run) => Math.max(max, run.length),
      0
    );
    const fence = "`".repeat(Math.max(3, longestRun + 1));
    return `${meta}
${fence}
${t.prompt}
${fence}`;
  });
  return `${header}

${blocks.join("\n\n")}`;
}
var CHECK_INTERVAL_MS, FILE_STABILITY_MS, LOCK_PROBE_INTERVAL_MS;
var init_cronScheduler = __esm({
  "src/utils/cronScheduler.ts"() {
    init_state();
    init_analytics();
    init_cron();
    init_cronTasks();
    init_cronTasksLock();
    init_debug();
    CHECK_INTERVAL_MS = 1e3;
    FILE_STABILITY_MS = 300;
    LOCK_PROBE_INTERVAL_MS = 5e3;
  }
});

// src/bridge/inboundMessages.ts
init_imageResizer();
function extractInboundMessageFields(msg) {
  if (msg.type !== "user") return void 0;
  const content = msg.message?.content;
  if (!content) return void 0;
  if (Array.isArray(content) && content.length === 0) return void 0;
  const uuid = "uuid" in msg && typeof msg.uuid === "string" ? msg.uuid : void 0;
  return {
    content: Array.isArray(content) ? normalizeImageBlocks(content) : content,
    uuid
  };
}
function normalizeImageBlocks(blocks) {
  if (!blocks.some(isMalformedBase64Image)) return blocks;
  return blocks.map((block) => {
    if (!isMalformedBase64Image(block)) return block;
    const src = block.source;
    const mediaType = typeof src.mediaType === "string" && src.mediaType ? src.mediaType : detectImageFormatFromBase64(block.source.data);
    return {
      ...block,
      source: {
        type: "base64",
        media_type: mediaType,
        data: block.source.data
      }
    };
  });
}
function isMalformedBase64Image(block) {
  if (block.type !== "image" || block.source?.type !== "base64") return false;
  return !block.source.media_type;
}

// src/utils/permissions/PermissionPromptToolResultSchema.ts
init_v4();
init_debug();
init_lazySchema();
init_PermissionUpdate();
init_PermissionUpdateSchema();
var inputSchema = lazySchema(
  () => v4_default.object({
    tool_name: v4_default.string().describe("The name of the tool requesting permission"),
    input: v4_default.record(v4_default.string(), v4_default.unknown()).describe("The input for the tool"),
    tool_use_id: v4_default.string().optional().describe("The unique tool use request ID")
  })
);
var decisionClassificationField = lazySchema(
  () => v4_default.enum(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)
);
var PermissionAllowResultSchema = lazySchema(
  () => v4_default.object({
    behavior: v4_default.literal("allow"),
    updatedInput: v4_default.record(v4_default.string(), v4_default.unknown()),
    // SDK hosts may send malformed entries; fall back to undefined rather
    // than rejecting the entire allow decision (anthropics/claude-code#29440)
    updatedPermissions: v4_default.array(permissionUpdateSchema()).optional().catch((ctx) => {
      logForDebugging(
        `Malformed updatedPermissions from SDK host ignored: ${ctx.error.issues[0]?.message ?? "unknown"}`,
        { level: "warn" }
      );
      return void 0;
    }),
    toolUseID: v4_default.string().optional(),
    decisionClassification: decisionClassificationField()
  })
);
var PermissionDenyResultSchema = lazySchema(
  () => v4_default.object({
    behavior: v4_default.literal("deny"),
    message: v4_default.string(),
    interrupt: v4_default.boolean().optional(),
    toolUseID: v4_default.string().optional(),
    decisionClassification: decisionClassificationField()
  })
);
var outputSchema = lazySchema(
  () => v4_default.union([PermissionAllowResultSchema(), PermissionDenyResultSchema()])
);
function permissionPromptToolResultToPermissionDecision(result, tool, input, toolUseContext) {
  const decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: tool.name,
    toolResult: result
  };
  if (result.behavior === "allow") {
    const updatedPermissions = result.updatedPermissions;
    if (updatedPermissions) {
      toolUseContext.setAppState((prev) => ({
        ...prev,
        toolPermissionContext: applyPermissionUpdates(
          prev.toolPermissionContext,
          updatedPermissions
        )
      }));
      persistPermissionUpdates(updatedPermissions);
    }
    const updatedInput = Object.keys(result.updatedInput).length > 0 ? result.updatedInput : input;
    return {
      ...result,
      updatedInput,
      decisionReason
    };
  } else if (result.behavior === "deny" && result.interrupt) {
    logForDebugging(
      `SDK permission prompt deny+interrupt: tool=${tool.name} message=${result.message}`
    );
    toolUseContext.abortController.abort();
  }
  return {
    ...result,
    decisionReason
  };
}

// src/cli/structuredIO.ts
init_bun_bundle();
import { randomUUID } from "crypto";

// src/entrypoints/sdk/controlSchemas.ts
init_v4();
init_lazySchema();
init_coreSchemas();
var JSONRPCMessagePlaceholder = lazySchema(() => external_exports.unknown());
var SDKHookCallbackMatcherSchema = lazySchema(
  () => external_exports.object({
    matcher: external_exports.string().optional(),
    hookCallbackIds: external_exports.array(external_exports.string()),
    timeout: external_exports.number().optional()
  }).describe("Configuration for matching and routing hook callbacks.")
);
var SDKControlInitializeRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("initialize"),
    hooks: external_exports.record(HookEventSchema(), external_exports.array(SDKHookCallbackMatcherSchema())).optional(),
    sdkMcpServers: external_exports.array(external_exports.string()).optional(),
    jsonSchema: external_exports.record(external_exports.string(), external_exports.unknown()).optional(),
    systemPrompt: external_exports.string().optional(),
    appendSystemPrompt: external_exports.string().optional(),
    agents: external_exports.record(external_exports.string(), AgentDefinitionSchema()).optional(),
    promptSuggestions: external_exports.boolean().optional(),
    agentProgressSummaries: external_exports.boolean().optional()
  }).describe(
    "Initializes the SDK session with hooks, MCP servers, and agent configuration."
  )
);
var SDKControlInitializeResponseSchema = lazySchema(
  () => external_exports.object({
    commands: external_exports.array(SlashCommandSchema()),
    agents: external_exports.array(AgentInfoSchema()),
    output_style: external_exports.string(),
    available_output_styles: external_exports.array(external_exports.string()),
    models: external_exports.array(ModelInfoSchema()),
    account: AccountInfoSchema(),
    pid: external_exports.number().optional().describe("@internal CLI process PID for tmux socket isolation"),
    fast_mode_state: FastModeStateSchema().optional()
  }).describe(
    "Response from session initialization with available commands, models, and account info."
  )
);
var SDKControlInterruptRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("interrupt")
  }).describe("Interrupts the currently running conversation turn.")
);
var SDKControlPermissionRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("can_use_tool"),
    tool_name: external_exports.string(),
    input: external_exports.record(external_exports.string(), external_exports.unknown()),
    permission_suggestions: external_exports.array(PermissionUpdateSchema()).optional(),
    blocked_path: external_exports.string().optional(),
    decision_reason: external_exports.string().optional(),
    title: external_exports.string().optional(),
    display_name: external_exports.string().optional(),
    tool_use_id: external_exports.string(),
    agent_id: external_exports.string().optional(),
    description: external_exports.string().optional()
  }).describe("Requests permission to use a tool with the given input.")
);
var SDKControlSetPermissionModeRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_permission_mode"),
    mode: PermissionModeSchema(),
    ultraplan: external_exports.boolean().optional().describe("@internal CCR ultraplan session marker.")
  }).describe("Sets the permission mode for tool execution handling.")
);
var SDKControlSetModelRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_model"),
    model: external_exports.string().optional()
  }).describe("Sets the model to use for subsequent conversation turns.")
);
var SDKControlSetMaxThinkingTokensRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("set_max_thinking_tokens"),
    max_thinking_tokens: external_exports.number().nullable()
  }).describe(
    "Sets the maximum number of thinking tokens for extended thinking."
  )
);
var SDKControlMcpStatusRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_status")
  }).describe("Requests the current status of all MCP server connections.")
);
var SDKControlMcpStatusResponseSchema = lazySchema(
  () => external_exports.object({
    mcpServers: external_exports.array(McpServerStatusSchema())
  }).describe(
    "Response containing the current status of all MCP server connections."
  )
);
var SDKControlGetContextUsageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("get_context_usage")
  }).describe(
    "Requests a breakdown of current context window usage by category."
  )
);
var ContextCategorySchema = lazySchema(
  () => external_exports.object({
    name: external_exports.string(),
    tokens: external_exports.number(),
    color: external_exports.string(),
    isDeferred: external_exports.boolean().optional()
  })
);
var ContextGridSquareSchema = lazySchema(
  () => external_exports.object({
    color: external_exports.string(),
    isFilled: external_exports.boolean(),
    categoryName: external_exports.string(),
    tokens: external_exports.number(),
    percentage: external_exports.number(),
    squareFullness: external_exports.number()
  })
);
var SDKControlGetContextUsageResponseSchema = lazySchema(
  () => external_exports.object({
    categories: external_exports.array(ContextCategorySchema()),
    totalTokens: external_exports.number(),
    maxTokens: external_exports.number(),
    rawMaxTokens: external_exports.number(),
    percentage: external_exports.number(),
    gridRows: external_exports.array(external_exports.array(ContextGridSquareSchema())),
    model: external_exports.string(),
    memoryFiles: external_exports.array(
      external_exports.object({
        path: external_exports.string(),
        type: external_exports.string(),
        tokens: external_exports.number()
      })
    ),
    mcpTools: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        serverName: external_exports.string(),
        tokens: external_exports.number(),
        isLoaded: external_exports.boolean().optional()
      })
    ),
    deferredBuiltinTools: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        tokens: external_exports.number(),
        isLoaded: external_exports.boolean()
      })
    ).optional(),
    systemTools: external_exports.array(external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })).optional(),
    systemPromptSections: external_exports.array(external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })).optional(),
    agents: external_exports.array(
      external_exports.object({
        agentType: external_exports.string(),
        source: external_exports.string(),
        tokens: external_exports.number()
      })
    ),
    slashCommands: external_exports.object({
      totalCommands: external_exports.number(),
      includedCommands: external_exports.number(),
      tokens: external_exports.number()
    }).optional(),
    skills: external_exports.object({
      totalSkills: external_exports.number(),
      includedSkills: external_exports.number(),
      tokens: external_exports.number(),
      skillFrontmatter: external_exports.array(
        external_exports.object({
          name: external_exports.string(),
          source: external_exports.string(),
          tokens: external_exports.number()
        })
      )
    }).optional(),
    autoCompactThreshold: external_exports.number().optional(),
    isAutoCompactEnabled: external_exports.boolean(),
    messageBreakdown: external_exports.object({
      toolCallTokens: external_exports.number(),
      toolResultTokens: external_exports.number(),
      attachmentTokens: external_exports.number(),
      assistantMessageTokens: external_exports.number(),
      userMessageTokens: external_exports.number(),
      toolCallsByType: external_exports.array(
        external_exports.object({
          name: external_exports.string(),
          callTokens: external_exports.number(),
          resultTokens: external_exports.number()
        })
      ),
      attachmentsByType: external_exports.array(
        external_exports.object({ name: external_exports.string(), tokens: external_exports.number() })
      )
    }).optional(),
    apiUsage: external_exports.object({
      input_tokens: external_exports.number(),
      output_tokens: external_exports.number(),
      cache_creation_input_tokens: external_exports.number(),
      cache_read_input_tokens: external_exports.number()
    }).nullable()
  }).describe(
    "Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."
  )
);
var SDKControlRewindFilesRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("rewind_files"),
    user_message_id: external_exports.string(),
    dry_run: external_exports.boolean().optional()
  }).describe("Rewinds file changes made since a specific user message.")
);
var SDKControlRewindFilesResponseSchema = lazySchema(
  () => external_exports.object({
    canRewind: external_exports.boolean(),
    error: external_exports.string().optional(),
    filesChanged: external_exports.array(external_exports.string()).optional(),
    insertions: external_exports.number().optional(),
    deletions: external_exports.number().optional()
  }).describe("Result of a rewindFiles operation.")
);
var SDKControlCancelAsyncMessageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("cancel_async_message"),
    message_uuid: external_exports.string()
  }).describe(
    "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution."
  )
);
var SDKControlCancelAsyncMessageResponseSchema = lazySchema(
  () => external_exports.object({
    cancelled: external_exports.boolean()
  }).describe(
    "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued)."
  )
);
var SDKControlSeedReadStateRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("seed_read_state"),
    path: external_exports.string(),
    mtime: external_exports.number()
  }).describe(
    "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context (e.g. by snip) so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path."
  )
);
var SDKHookCallbackRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("hook_callback"),
    callback_id: external_exports.string(),
    input: HookInputSchema(),
    tool_use_id: external_exports.string().optional()
  }).describe("Delivers a hook callback with its input data.")
);
var SDKControlMcpMessageRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_message"),
    server_name: external_exports.string(),
    message: JSONRPCMessagePlaceholder()
  }).describe("Sends a JSON-RPC message to a specific MCP server.")
);
var SDKControlMcpSetServersRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_set_servers"),
    servers: external_exports.record(external_exports.string(), McpServerConfigForProcessTransportSchema())
  }).describe("Replaces the set of dynamically managed MCP servers.")
);
var SDKControlMcpSetServersResponseSchema = lazySchema(
  () => external_exports.object({
    added: external_exports.array(external_exports.string()),
    removed: external_exports.array(external_exports.string()),
    errors: external_exports.record(external_exports.string(), external_exports.string())
  }).describe(
    "Result of replacing the set of dynamically managed MCP servers."
  )
);
var SDKControlReloadPluginsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("reload_plugins")
  }).describe(
    "Reloads plugins from disk and returns the refreshed session components."
  )
);
var SDKControlReloadPluginsResponseSchema = lazySchema(
  () => external_exports.object({
    commands: external_exports.array(SlashCommandSchema()),
    agents: external_exports.array(AgentInfoSchema()),
    plugins: external_exports.array(
      external_exports.object({
        name: external_exports.string(),
        path: external_exports.string(),
        source: external_exports.string().optional()
      })
    ),
    mcpServers: external_exports.array(McpServerStatusSchema()),
    error_count: external_exports.number()
  }).describe(
    "Refreshed commands, agents, plugins, and MCP server status after reload."
  )
);
var SDKControlMcpReconnectRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_reconnect"),
    serverName: external_exports.string()
  }).describe("Reconnects a disconnected or failed MCP server.")
);
var SDKControlMcpToggleRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("mcp_toggle"),
    serverName: external_exports.string(),
    enabled: external_exports.boolean()
  }).describe("Enables or disables an MCP server.")
);
var SDKControlStopTaskRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("stop_task"),
    task_id: external_exports.string()
  }).describe("Stops a running task.")
);
var SDKControlApplyFlagSettingsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("apply_flag_settings"),
    settings: external_exports.record(external_exports.string(), external_exports.unknown())
  }).describe(
    "Merges the provided settings into the flag settings layer, updating the active configuration."
  )
);
var SDKControlGetSettingsRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("get_settings")
  }).describe(
    "Returns the effective merged settings and the raw per-source settings."
  )
);
var SDKControlGetSettingsResponseSchema = lazySchema(
  () => external_exports.object({
    effective: external_exports.record(external_exports.string(), external_exports.unknown()),
    sources: external_exports.array(
      external_exports.object({
        source: external_exports.enum([
          "userSettings",
          "projectSettings",
          "localSettings",
          "flagSettings",
          "policySettings"
        ]),
        settings: external_exports.record(external_exports.string(), external_exports.unknown())
      })
    ).describe(
      "Ordered low-to-high priority \u2014 later entries override earlier ones."
    ),
    applied: external_exports.object({
      model: external_exports.string(),
      // String levels only — numeric effort is ant-only and the
      // Zod→proto generator can't emit enum∪number unions.
      effort: external_exports.enum(["low", "medium", "high", "max"]).nullable()
    }).optional().describe(
      "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API."
    )
  }).describe(
    "Effective merged settings plus raw per-source settings in merge order."
  )
);
var SDKControlElicitationRequestSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("elicitation"),
    mcp_server_name: external_exports.string(),
    message: external_exports.string(),
    mode: external_exports.enum(["form", "url"]).optional(),
    url: external_exports.string().optional(),
    elicitation_id: external_exports.string().optional(),
    requested_schema: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  }).describe(
    "Requests the SDK consumer to handle an MCP elicitation (user input request)."
  )
);
var SDKControlElicitationResponseSchema = lazySchema(
  () => external_exports.object({
    action: external_exports.enum(["accept", "decline", "cancel"]),
    content: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  }).describe("Response from the SDK consumer for an elicitation request.")
);
var SDKControlRequestInnerSchema = lazySchema(
  () => external_exports.union([
    SDKControlInterruptRequestSchema(),
    SDKControlPermissionRequestSchema(),
    SDKControlInitializeRequestSchema(),
    SDKControlSetPermissionModeRequestSchema(),
    SDKControlSetModelRequestSchema(),
    SDKControlSetMaxThinkingTokensRequestSchema(),
    SDKControlMcpStatusRequestSchema(),
    SDKControlGetContextUsageRequestSchema(),
    SDKHookCallbackRequestSchema(),
    SDKControlMcpMessageRequestSchema(),
    SDKControlRewindFilesRequestSchema(),
    SDKControlCancelAsyncMessageRequestSchema(),
    SDKControlSeedReadStateRequestSchema(),
    SDKControlMcpSetServersRequestSchema(),
    SDKControlReloadPluginsRequestSchema(),
    SDKControlMcpReconnectRequestSchema(),
    SDKControlMcpToggleRequestSchema(),
    SDKControlStopTaskRequestSchema(),
    SDKControlApplyFlagSettingsRequestSchema(),
    SDKControlGetSettingsRequestSchema(),
    SDKControlElicitationRequestSchema()
  ])
);
var SDKControlRequestSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_request"),
    request_id: external_exports.string(),
    request: SDKControlRequestInnerSchema()
  })
);
var ControlResponseSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("success"),
    request_id: external_exports.string(),
    response: external_exports.record(external_exports.string(), external_exports.unknown()).optional()
  })
);
var ControlErrorResponseSchema = lazySchema(
  () => external_exports.object({
    subtype: external_exports.literal("error"),
    request_id: external_exports.string(),
    error: external_exports.string(),
    pending_permission_requests: external_exports.array(external_exports.lazy(() => SDKControlRequestSchema())).optional()
  })
);
var SDKControlResponseSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_response"),
    response: external_exports.union([ControlResponseSchema(), ControlErrorResponseSchema()])
  })
);
var SDKControlCancelRequestSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("control_cancel_request"),
    request_id: external_exports.string()
  }).describe("Cancels a currently open control request.")
);
var SDKKeepAliveMessageSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("keep_alive")
  }).describe("Keep-alive message to maintain WebSocket connection.")
);
var SDKUpdateEnvironmentVariablesMessageSchema = lazySchema(
  () => external_exports.object({
    type: external_exports.literal("update_environment_variables"),
    variables: external_exports.record(external_exports.string(), external_exports.string())
  }).describe("Updates environment variables at runtime.")
);
var StdoutMessageSchema = lazySchema(
  () => external_exports.union([
    SDKMessageSchema(),
    SDKStreamlinedTextMessageSchema(),
    SDKStreamlinedToolUseSummaryMessageSchema(),
    SDKPostTurnSummaryMessageSchema(),
    SDKControlResponseSchema(),
    SDKControlRequestSchema(),
    SDKControlCancelRequestSchema(),
    SDKKeepAliveMessageSchema()
  ])
);
var StdinMessageSchema = lazySchema(
  () => external_exports.union([
    SDKUserMessageSchema(),
    SDKControlRequestSchema(),
    SDKControlResponseSchema(),
    SDKKeepAliveMessageSchema(),
    SDKUpdateEnvironmentVariablesMessageSchema()
  ])
);

// src/cli/structuredIO.ts
init_hooks();
init_debug();
init_diagLogs();
init_errors();
init_permissions();
init_process();
init_slowOperations();
init_v4();
init_commandLifecycle();
init_hooks2();
init_PermissionUpdate();
init_slowOperations();
init_stream();

// src/cli/ndjsonSafeStringify.ts
init_slowOperations();
var JS_LINE_TERMINATORS = /\u2028|\u2029/g;
function escapeJsLineTerminators(json) {
  return json.replace(
    JS_LINE_TERMINATORS,
    (c) => c === "\u2028" ? "\\u2028" : "\\u2029"
  );
}
function ndjsonSafeStringify(value) {
  return escapeJsLineTerminators(jsonStringify(value));
}

// src/cli/structuredIO.ts
var SANDBOX_NETWORK_ACCESS_TOOL_NAME = "SandboxNetworkAccess";
function serializeDecisionReason(reason) {
  if (!reason) {
    return void 0;
  }
  if ((feature("BASH_CLASSIFIER") || feature("TRANSCRIPT_CLASSIFIER")) && reason.type === "classifier") {
    return reason.reason;
  }
  switch (reason.type) {
    case "rule":
    case "mode":
    case "subcommandResults":
    case "permissionPromptTool":
      return void 0;
    case "hook":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return reason.reason;
  }
}
function buildRequiresActionDetails(tool, input, toolUseID, requestId) {
  let description;
  try {
    description = tool.getActivityDescription?.(input) ?? tool.getToolUseSummary?.(input) ?? tool.userFacingName(input);
  } catch {
    description = tool.name;
  }
  return {
    tool_name: tool.name,
    action_description: description,
    tool_use_id: toolUseID,
    request_id: requestId,
    input
  };
}
var MAX_RESOLVED_TOOL_USE_IDS = 1e3;
var StructuredIO = class {
  constructor(input, replayUserMessages) {
    this.input = input;
    this.replayUserMessages = replayUserMessages;
    this.input = input;
    this.structuredInput = this.read();
  }
  structuredInput;
  pendingRequests = /* @__PURE__ */ new Map();
  // CCR external_metadata read back on worker start; null when the
  // transport doesn't restore. Assigned by RemoteIO.
  restoredWorkerState = Promise.resolve(null);
  inputClosed = false;
  unexpectedResponseCallback;
  // Tracks tool_use IDs that have been resolved through the normal permission
  // flow (or aborted by a hook). When a duplicate control_response arrives
  // after the original was already handled, this Set prevents the orphan
  // handler from re-processing it — which would push duplicate assistant
  // messages into mutableMessages and cause a 400 "tool_use ids must be unique"
  // error from the API.
  resolvedToolUseIds = /* @__PURE__ */ new Set();
  prependedLines = [];
  onControlRequestSent;
  onControlRequestResolved;
  // sendRequest() and print.ts both enqueue here; the drain loop is the
  // only writer. Prevents control_request from overtaking queued stream_events.
  outbound = new Stream();
  /**
   * Records a tool_use ID as resolved so that late/duplicate control_response
   * messages for the same tool are ignored by the orphan handler.
   */
  trackResolvedToolUseId(request) {
    if (request.request.subtype === "can_use_tool") {
      this.resolvedToolUseIds.add(request.request.tool_use_id);
      if (this.resolvedToolUseIds.size > MAX_RESOLVED_TOOL_USE_IDS) {
        const first = this.resolvedToolUseIds.values().next().value;
        if (first !== void 0) {
          this.resolvedToolUseIds.delete(first);
        }
      }
    }
  }
  /** Flush pending internal events. No-op for non-remote IO. Overridden by RemoteIO. */
  flushInternalEvents() {
    return Promise.resolve();
  }
  /** Internal-event queue depth. Overridden by RemoteIO; zero otherwise. */
  get internalEventsPending() {
    return 0;
  }
  /**
   * Queue a user turn to be yielded before the next message from this.input.
   * Works before iteration starts and mid-stream — read() re-checks
   * prependedLines between each yielded message.
   */
  prependUserMessage(content) {
    this.prependedLines.push(
      jsonStringify({
        type: "user",
        session_id: "",
        message: { role: "user", content },
        parent_tool_use_id: null
      }) + "\n"
    );
  }
  async *read() {
    let content = "";
    const splitAndProcess = async function* () {
      for (; ; ) {
        if (this.prependedLines.length > 0) {
          content = this.prependedLines.join("") + content;
          this.prependedLines = [];
        }
        const newline = content.indexOf("\n");
        if (newline === -1) break;
        const line = content.slice(0, newline);
        content = content.slice(newline + 1);
        const message = await this.processLine(line);
        if (message) {
          logForDiagnosticsNoPII("info", "cli_stdin_message_parsed", {
            type: message.type
          });
          yield message;
        }
      }
    }.bind(this);
    yield* splitAndProcess();
    for await (const block of this.input) {
      content += block;
      yield* splitAndProcess();
    }
    if (content) {
      const message = await this.processLine(content);
      if (message) {
        yield message;
      }
    }
    this.inputClosed = true;
    for (const request of this.pendingRequests.values()) {
      request.reject(
        new Error("Tool permission stream closed before response received")
      );
    }
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map((entry) => entry.request).filter((pr) => pr.request.subtype === "can_use_tool");
  }
  setUnexpectedResponseCallback(callback) {
    this.unexpectedResponseCallback = callback;
  }
  /**
   * Inject a control_response message to resolve a pending permission request.
   * Used by the bridge to feed permission responses from claude.ai into the
   * SDK permission flow.
   *
   * Also sends a control_cancel_request to the SDK consumer so its canUseTool
   * callback is aborted via the signal — otherwise the callback hangs.
   */
  injectControlResponse(response) {
    const requestId = response.response?.request_id;
    if (!requestId) return;
    const request = this.pendingRequests.get(requestId);
    if (!request) return;
    this.trackResolvedToolUseId(request.request);
    this.pendingRequests.delete(requestId);
    void this.write({
      type: "control_cancel_request",
      request_id: requestId
    });
    if (response.response.subtype === "error") {
      request.reject(new Error(response.response.error));
    } else {
      const result = response.response.response;
      if (request.schema) {
        try {
          request.resolve(request.schema.parse(result));
        } catch (error) {
          request.reject(error);
        }
      } else {
        request.resolve({});
      }
    }
  }
  /**
   * Register a callback invoked whenever a can_use_tool control_request
   * is written to stdout. Used by the bridge to forward permission
   * requests to claude.ai.
   */
  setOnControlRequestSent(callback) {
    this.onControlRequestSent = callback;
  }
  /**
   * Register a callback invoked when a can_use_tool control_response arrives
   * from the SDK consumer (via stdin). Used by the bridge to cancel the
   * stale permission prompt on claude.ai when the SDK consumer wins the race.
   */
  setOnControlRequestResolved(callback) {
    this.onControlRequestResolved = callback;
  }
  async processLine(line) {
    if (!line) {
      return void 0;
    }
    try {
      const message = normalizeControlMessageKeys(jsonParse(line));
      if (message.type === "keep_alive") {
        return void 0;
      }
      if (message.type === "update_environment_variables") {
        const keys = Object.keys(message.variables);
        for (const [key, value] of Object.entries(message.variables)) {
          process.env[key] = value;
        }
        logForDebugging(
          `[structuredIO] applied update_environment_variables: ${keys.join(", ")}`
        );
        return void 0;
      }
      if (message.type === "control_response") {
        const uuid = "uuid" in message && typeof message.uuid === "string" ? message.uuid : void 0;
        if (uuid) {
          notifyCommandLifecycle(uuid, "completed");
        }
        const request = this.pendingRequests.get(message.response.request_id);
        if (!request) {
          const responsePayload = message.response.subtype === "success" ? message.response.response : void 0;
          const toolUseID = responsePayload?.toolUseID;
          if (typeof toolUseID === "string" && this.resolvedToolUseIds.has(toolUseID)) {
            logForDebugging(
              `Ignoring duplicate control_response for already-resolved toolUseID=${toolUseID} request_id=${message.response.request_id}`
            );
            return void 0;
          }
          if (this.unexpectedResponseCallback) {
            await this.unexpectedResponseCallback(message);
          }
          return void 0;
        }
        this.trackResolvedToolUseId(request.request);
        this.pendingRequests.delete(message.response.request_id);
        if (request.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) {
          this.onControlRequestResolved(message.response.request_id);
        }
        if (message.response.subtype === "error") {
          request.reject(new Error(message.response.error));
          return void 0;
        }
        const result = message.response.response;
        if (request.schema) {
          try {
            request.resolve(request.schema.parse(result));
          } catch (error) {
            request.reject(error);
          }
        } else {
          request.resolve({});
        }
        if (this.replayUserMessages) {
          return message;
        }
        return void 0;
      }
      if (message.type !== "user" && message.type !== "control_request" && message.type !== "assistant" && message.type !== "system") {
        logForDebugging(`Ignoring unknown message type: ${message.type}`, {
          level: "warn"
        });
        return void 0;
      }
      if (message.type === "control_request") {
        if (!message.request) {
          exitWithMessage(`Error: Missing request on control_request`);
        }
        return message;
      }
      if (message.type === "assistant" || message.type === "system") {
        return message;
      }
      if (message.message.role !== "user") {
        exitWithMessage(
          `Error: Expected message role 'user', got '${message.message.role}'`
        );
      }
      return message;
    } catch (error) {
      console.error(`Error parsing streaming input line: ${line}: ${error}`);
      process.exit(1);
    }
  }
  async write(message) {
    writeToStdout(ndjsonSafeStringify(message) + "\n");
  }
  async sendRequest(request, schema, signal, requestId = randomUUID()) {
    const message = {
      type: "control_request",
      request_id: requestId,
      request
    };
    if (this.inputClosed) {
      throw new Error("Stream closed");
    }
    if (signal?.aborted) {
      throw new Error("Request aborted");
    }
    this.outbound.enqueue(message);
    if (request.subtype === "can_use_tool" && this.onControlRequestSent) {
      this.onControlRequestSent(message);
    }
    const aborted = () => {
      this.outbound.enqueue({
        type: "control_cancel_request",
        request_id: requestId
      });
      const request2 = this.pendingRequests.get(requestId);
      if (request2) {
        this.trackResolvedToolUseId(request2.request);
        request2.reject(new AbortError());
      }
    };
    if (signal) {
      signal.addEventListener("abort", aborted, {
        once: true
      });
    }
    try {
      return await new Promise((resolve2, reject) => {
        this.pendingRequests.set(requestId, {
          request: {
            type: "control_request",
            request_id: requestId,
            request
          },
          resolve: (result) => {
            resolve2(result);
          },
          reject,
          schema
        });
      });
    } finally {
      if (signal) {
        signal.removeEventListener("abort", aborted);
      }
      this.pendingRequests.delete(requestId);
    }
  }
  createCanUseTool(onPermissionPrompt) {
    return async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => {
      const mainPermissionResult = forceDecision ?? await hasPermissionsToUseTool(
        tool,
        input,
        toolUseContext,
        assistantMessage,
        toolUseID
      );
      if (mainPermissionResult.behavior === "allow" || mainPermissionResult.behavior === "deny") {
        return mainPermissionResult;
      }
      const hookAbortController = new AbortController();
      const parentSignal = toolUseContext.abortController.signal;
      const onParentAbort = () => hookAbortController.abort();
      parentSignal.addEventListener("abort", onParentAbort, { once: true });
      try {
        const hookPromise = executePermissionRequestHooksForSDK(
          tool.name,
          toolUseID,
          input,
          toolUseContext,
          mainPermissionResult.suggestions
        ).then((decision) => ({ source: "hook", decision }));
        const requestId = randomUUID();
        onPermissionPrompt?.(
          buildRequiresActionDetails(tool, input, toolUseID, requestId)
        );
        const sdkPromise = this.sendRequest(
          {
            subtype: "can_use_tool",
            tool_name: tool.name,
            input,
            permission_suggestions: mainPermissionResult.suggestions,
            blocked_path: mainPermissionResult.blockedPath,
            decision_reason: serializeDecisionReason(
              mainPermissionResult.decisionReason
            ),
            tool_use_id: toolUseID,
            agent_id: toolUseContext.agentId
          },
          outputSchema(),
          hookAbortController.signal,
          requestId
        ).then((result) => ({ source: "sdk", result }));
        const winner = await Promise.race([hookPromise, sdkPromise]);
        if (winner.source === "hook") {
          if (winner.decision) {
            sdkPromise.catch(() => {
            });
            hookAbortController.abort();
            return winner.decision;
          }
          const sdkResult = await sdkPromise;
          return permissionPromptToolResultToPermissionDecision(
            sdkResult.result,
            tool,
            input,
            toolUseContext
          );
        }
        return permissionPromptToolResultToPermissionDecision(
          winner.result,
          tool,
          input,
          toolUseContext
        );
      } catch (error) {
        return permissionPromptToolResultToPermissionDecision(
          {
            behavior: "deny",
            message: `Tool permission request failed: ${error}`,
            toolUseID
          },
          tool,
          input,
          toolUseContext
        );
      } finally {
        if (this.getPendingPermissionRequests().length === 0) {
          notifySessionStateChanged("running");
        }
        parentSignal.removeEventListener("abort", onParentAbort);
      }
    };
  }
  createHookCallback(callbackId, timeout) {
    return {
      type: "callback",
      timeout,
      callback: async (input, toolUseID, abort) => {
        try {
          const result = await this.sendRequest(
            {
              subtype: "hook_callback",
              callback_id: callbackId,
              input,
              tool_use_id: toolUseID || void 0
            },
            hookJSONOutputSchema(),
            abort
          );
          return result;
        } catch (error) {
          console.error(`Error in hook callback ${callbackId}:`, error);
          return {};
        }
      }
    };
  }
  /**
   * Sends an elicitation request to the SDK consumer and returns the response.
   */
  async handleElicitation(serverName, message, requestedSchema, signal, mode, url, elicitationId) {
    try {
      const result = await this.sendRequest(
        {
          subtype: "elicitation",
          mcp_server_name: serverName,
          message,
          mode,
          url,
          elicitation_id: elicitationId,
          requested_schema: requestedSchema
        },
        SDKControlElicitationResponseSchema(),
        signal
      );
      return result;
    } catch {
      return { action: "cancel" };
    }
  }
  /**
   * Creates a SandboxAskCallback that forwards sandbox network permission
   * requests to the SDK host as can_use_tool control_requests.
   *
   * This piggybacks on the existing can_use_tool protocol with a synthetic
   * tool name so that SDK hosts (VS Code, CCR, etc.) can prompt the user
   * for network access without requiring a new protocol subtype.
   */
  createSandboxAskCallback() {
    return async (hostPattern) => {
      try {
        const result = await this.sendRequest(
          {
            subtype: "can_use_tool",
            tool_name: SANDBOX_NETWORK_ACCESS_TOOL_NAME,
            input: { host: hostPattern.host },
            tool_use_id: randomUUID(),
            description: `Allow network connection to ${hostPattern.host}?`
          },
          outputSchema()
        );
        return result.behavior === "allow";
      } catch {
        return false;
      }
    };
  }
  /**
   * Sends an MCP message to an SDK server and waits for the response
   */
  async sendMcpMessage(serverName, message) {
    const response = await this.sendRequest(
      {
        subtype: "mcp_message",
        server_name: serverName,
        message
      },
      external_exports.object({
        mcp_response: external_exports.any()
      })
    );
    return response.mcp_response;
  }
};
function exitWithMessage(message) {
  console.error(message);
  process.exit(1);
}
async function executePermissionRequestHooksForSDK(toolName, toolUseID, input, toolUseContext, suggestions) {
  const appState = toolUseContext.getAppState();
  const permissionMode = appState.toolPermissionContext.mode;
  const hookGenerator = executePermissionRequestHooks(
    toolName,
    toolUseID,
    input,
    toolUseContext,
    permissionMode,
    suggestions,
    toolUseContext.abortController.signal
  );
  for await (const hookResult of hookGenerator) {
    if (hookResult.permissionRequestResult && (hookResult.permissionRequestResult.behavior === "allow" || hookResult.permissionRequestResult.behavior === "deny")) {
      const decision = hookResult.permissionRequestResult;
      if (decision.behavior === "allow") {
        const finalInput = decision.updatedInput || input;
        const permissionUpdates = decision.updatedPermissions ?? [];
        if (permissionUpdates.length > 0) {
          persistPermissionUpdates(permissionUpdates);
          const currentAppState = toolUseContext.getAppState();
          const updatedContext = applyPermissionUpdates(
            currentAppState.toolPermissionContext,
            permissionUpdates
          );
          toolUseContext.setAppState((prev) => {
            if (prev.toolPermissionContext === updatedContext) return prev;
            return { ...prev, toolPermissionContext: updatedContext };
          });
        }
        return {
          behavior: "allow",
          updatedInput: finalInput,
          userModified: false,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      } else {
        return {
          behavior: "deny",
          message: decision.message || "Permission denied by PermissionRequest hook",
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      }
    }
  }
  return void 0;
}

// src/utils/plugins/reconciler.ts
init_isEqual();
init_state();
init_debug();
init_errors();
init_file();
init_git();
init_log();
init_marketplaceManager();
init_schemas();
import { isAbsolute, resolve } from "path";
function diffMarketplaces(declared, materialized, opts) {
  const missing = [];
  const sourceChanged = [];
  const upToDate = [];
  for (const [name, intent] of Object.entries(declared)) {
    const state = materialized[name];
    const normalizedIntent = normalizeSource(intent.source, opts?.projectRoot);
    if (!state) {
      missing.push(name);
    } else if (intent.sourceIsFallback) {
      upToDate.push(name);
    } else if (!isEqual_default(normalizedIntent, state.source)) {
      sourceChanged.push({
        name,
        declaredSource: normalizedIntent,
        materializedSource: state.source
      });
    } else {
      upToDate.push(name);
    }
  }
  return { missing, sourceChanged, upToDate };
}
async function reconcileMarketplaces(opts) {
  const declared = getDeclaredMarketplaces();
  if (Object.keys(declared).length === 0) {
    return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  }
  let materialized;
  try {
    materialized = await loadKnownMarketplacesConfig();
  } catch (e) {
    logError(e);
    materialized = {};
  }
  const diff = diffMarketplaces(declared, materialized, {
    projectRoot: getOriginalCwd()
  });
  const work = [
    ...diff.missing.map(
      (name) => ({
        name,
        source: normalizeSource(declared[name].source),
        action: "install"
      })
    ),
    ...diff.sourceChanged.map(
      ({ name, declaredSource }) => ({
        name,
        source: declaredSource,
        action: "update"
      })
    )
  ];
  const skipped = [];
  const toProcess = [];
  for (const item of work) {
    if (opts?.skip?.(item.name, item.source)) {
      skipped.push(item.name);
      continue;
    }
    if (item.action === "update" && isLocalMarketplaceSource(item.source) && !await pathExists(item.source.path)) {
      logForDebugging(
        `[reconcile] '${item.name}' declared path does not exist; keeping materialized entry`
      );
      skipped.push(item.name);
      continue;
    }
    toProcess.push(item);
  }
  if (toProcess.length === 0) {
    return {
      installed: [],
      updated: [],
      failed: [],
      upToDate: diff.upToDate,
      skipped
    };
  }
  logForDebugging(
    `[reconcile] ${toProcess.length} marketplace(s): ${toProcess.map((w) => `${w.name}(${w.action})`).join(", ")}`
  );
  const installed = [];
  const updated = [];
  const failed = [];
  for (let i = 0; i < toProcess.length; i++) {
    const { name, source, action } = toProcess[i];
    opts?.onProgress?.({
      type: "installing",
      name,
      action,
      index: i + 1,
      total: toProcess.length
    });
    try {
      const result = await addMarketplaceSource(source);
      if (action === "install") installed.push(name);
      else updated.push(name);
      opts?.onProgress?.({
        type: "installed",
        name,
        alreadyMaterialized: result.alreadyMaterialized
      });
    } catch (e) {
      const error = errorMessage(e);
      failed.push({ name, error });
      opts?.onProgress?.({ type: "failed", name, error });
      logError(e);
    }
  }
  return { installed, updated, failed, upToDate: diff.upToDate, skipped };
}
function normalizeSource(source, projectRoot) {
  if ((source.source === "directory" || source.source === "file") && !isAbsolute(source.path)) {
    const base = projectRoot ?? getOriginalCwd();
    const canonicalRoot = findCanonicalGitRoot(base);
    return {
      ...source,
      path: resolve(canonicalRoot ?? base, source.path)
    };
  }
  return source;
}

export {
  extractInboundMessageFields,
  outputSchema,
  permissionPromptToolResultToPermissionDecision,
  ndjsonSafeStringify,
  SANDBOX_NETWORK_ACCESS_TOOL_NAME,
  StructuredIO,
  diffMarketplaces,
  reconcileMarketplaces,
  getCronJitterConfig,
  cronJitterConfig_exports,
  init_cronJitterConfig,
  createCronScheduler,
  cronScheduler_exports,
  init_cronScheduler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2Nyb25KaXR0ZXJDb25maWcudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2Nyb25UYXNrc0xvY2sudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2Nyb25TY2hlZHVsZXIudHMiLCAiLi4vLi4vc3JjL2JyaWRnZS9pbmJvdW5kTWVzc2FnZXMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25Qcm9tcHRUb29sUmVzdWx0U2NoZW1hLnRzIiwgIi4uLy4uL3NyYy9jbGkvc3RydWN0dXJlZElPLnRzIiwgIi4uLy4uL3NyYy9lbnRyeXBvaW50cy9zZGsvY29udHJvbFNjaGVtYXMudHMiLCAiLi4vLi4vc3JjL2NsaS9uZGpzb25TYWZlU3RyaW5naWZ5LnRzIiwgIi4uLy4uL3NyYy91dGlscy9wbHVnaW5zL3JlY29uY2lsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIEdyb3d0aEJvb2stYmFja2VkIGNyb24gaml0dGVyIGNvbmZpZ3VyYXRpb24uXG4vL1xuLy8gU2VwYXJhdGVkIGZyb20gY3JvblNjaGVkdWxlci50cyBzbyB0aGUgc2NoZWR1bGVyIGNhbiBiZSBidW5kbGVkIGluIHRoZVxuLy8gQWdlbnQgU0RLIHB1YmxpYyBidWlsZCB3aXRob3V0IHB1bGxpbmcgaW4gYW5hbHl0aWNzL2dyb3d0aGJvb2sudHMgYW5kXG4vLyBpdHMgbGFyZ2UgdHJhbnNpdGl2ZSBkZXBlbmRlbmN5IHNldCAoc2V0dGluZ3MvaG9va3MvY29uZmlnIGN5Y2xlKS5cbi8vXG4vLyBVc2FnZTpcbi8vICAgUkVQTCAodXNlU2NoZWR1bGVkVGFza3MudHMpOiBwYXNzIGBnZXRKaXR0ZXJDb25maWc6IGdldENyb25KaXR0ZXJDb25maWdgXG4vLyAgIERhZW1vbi9TREs6IG9taXQgZ2V0Sml0dGVyQ29uZmlnIFx1MjE5MiBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJRyBhcHBsaWVzLlxuXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kL3Y0J1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9XSVRIX1JFRlJFU0ggfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7XG4gIHR5cGUgQ3JvbkppdHRlckNvbmZpZyxcbiAgREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcsXG59IGZyb20gJy4vY3JvblRhc2tzLmpzJ1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4vbGF6eVNjaGVtYS5qcydcblxuLy8gSG93IG9mdGVuIHRvIHJlLWZldGNoIHRlbmd1X2thaXJvc19jcm9uX2NvbmZpZyBmcm9tIEdyb3d0aEJvb2suIFNob3J0IGJlY2F1c2Vcbi8vIHRoaXMgaXMgYW4gaW5jaWRlbnQgbGV2ZXIgXHUyMDE0IHdoZW4gd2UgcHVzaCBhIGNvbmZpZyBjaGFuZ2UgdG8gc2hlZCA6MDAgbG9hZCxcbi8vIHdlIHdhbnQgdGhlIGZsZWV0IHRvIGNvbnZlcmdlIHdpdGhpbiBhIG1pbnV0ZSwgbm90IG9uIHRoZSBuZXh0IHByb2Nlc3Ncbi8vIHJlc3RhcnQuIFRoZSB1bmRlcmx5aW5nIGNhbGwgaXMgYSBzeW5jaHJvbm91cyBjYWNoZSByZWFkOyB0aGUgcmVmcmVzaCBqdXN0XG4vLyBjbGVhcnMgdGhlIG1lbW9pemVkIGVudHJ5IHNvIHRoZSBuZXh0IHJlYWQgdHJpZ2dlcnMgYSBiYWNrZ3JvdW5kIGZldGNoLlxuY29uc3QgSklUVEVSX0NPTkZJR19SRUZSRVNIX01TID0gNjAgKiAxMDAwXG5cbi8vIFVwcGVyIGJvdW5kcyBoZXJlIGFyZSBkZWZlbnNlLWluLWRlcHRoIGFnYWluc3QgZmF0LWZpbmdlcmVkIEdyb3d0aEJvb2tcbi8vIHB1c2hlcy4gTGlrZSBwb2xsQ29uZmlnLnRzLCBab2QgcmVqZWN0cyB0aGUgd2hvbGUgb2JqZWN0IG9uIGFueSB2aW9sYXRpb25cbi8vIHJhdGhlciB0aGFuIHBhcnRpYWxseSB0cnVzdGluZyBpdCBcdTIwMTQgYSBjb25maWcgd2l0aCBvbmUgYmFkIGZpZWxkIGZhbGxzIGJhY2tcbi8vIHRvIERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHIGVudGlyZWx5LiBvbmVTaG90Rmxvb3JNcyBzaGFyZXMgb25lU2hvdE1heE1zJ3Ncbi8vIGNlaWxpbmcgKGZsb29yID4gbWF4IHdvdWxkIGludmVydCB0aGUgaml0dGVyIHJhbmdlKSBhbmQgaXMgY3Jvc3MtY2hlY2tlZCBpblxuLy8gdGhlIHJlZmluZTsgdGhlIHNoYXJlZCBjZWlsaW5nIGtlZXBzIHRoZSBpbmRpdmlkdWFsIGJvdW5kIGV4cGxpY2l0IGluIHRoZVxuLy8gZXJyb3IgcGF0aC4gcmVjdXJyaW5nTWF4QWdlTXMgdXNlcyAuZGVmYXVsdCgpIHNvIGEgcHJlLWV4aXN0aW5nIEdCIGNvbmZpZ1xuLy8gd2l0aG91dCB0aGUgZmllbGQgZG9lc24ndCBnZXQgd2hvbGVzYWxlLXJlamVjdGVkIFx1MjAxNCB0aGUgb3RoZXIgZmllbGRzIHdlcmVcbi8vIGFkZGVkIHRvZ2V0aGVyIGF0IGNvbmZpZyBpbmNlcHRpb24gYW5kIGRvbid0IG5lZWQgdGhpcy5cbmNvbnN0IEhBTEZfSE9VUl9NUyA9IDMwICogNjAgKiAxMDAwXG5jb25zdCBUSElSVFlfREFZU19NUyA9IDMwICogMjQgKiA2MCAqIDYwICogMTAwMFxuY29uc3QgY3JvbkppdHRlckNvbmZpZ1NjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgcmVjdXJyaW5nRnJhYzogei5udW1iZXIoKS5taW4oMCkubWF4KDEpLFxuICAgICAgcmVjdXJyaW5nQ2FwTXM6IHoubnVtYmVyKCkuaW50KCkubWluKDApLm1heChIQUxGX0hPVVJfTVMpLFxuICAgICAgb25lU2hvdE1heE1zOiB6Lm51bWJlcigpLmludCgpLm1pbigwKS5tYXgoSEFMRl9IT1VSX01TKSxcbiAgICAgIG9uZVNob3RGbG9vck1zOiB6Lm51bWJlcigpLmludCgpLm1pbigwKS5tYXgoSEFMRl9IT1VSX01TKSxcbiAgICAgIG9uZVNob3RNaW51dGVNb2Q6IHoubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCg2MCksXG4gICAgICByZWN1cnJpbmdNYXhBZ2VNczogelxuICAgICAgICAubnVtYmVyKClcbiAgICAgICAgLmludCgpXG4gICAgICAgIC5taW4oMClcbiAgICAgICAgLm1heChUSElSVFlfREFZU19NUylcbiAgICAgICAgLmRlZmF1bHQoREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcucmVjdXJyaW5nTWF4QWdlTXMpLFxuICAgIH0pXG4gICAgLnJlZmluZShjID0+IGMub25lU2hvdEZsb29yTXMgPD0gYy5vbmVTaG90TWF4TXMpLFxuKVxuXG4vKipcbiAqIFJlYWQgYHRlbmd1X2thaXJvc19jcm9uX2NvbmZpZ2AgZnJvbSBHcm93dGhCb29rLCB2YWxpZGF0ZSwgZmFsbCBiYWNrIHRvXG4gKiBkZWZhdWx0cyBvbiBhYnNlbnQvbWFsZm9ybWVkL291dC1vZi1ib3VuZHMgY29uZmlnLiBDYWxsZWQgZnJvbSBjaGVjaygpXG4gKiBldmVyeSB0aWNrIHZpYSB0aGUgYGdldEppdHRlckNvbmZpZ2AgY2FsbGJhY2sgXHUyMDE0IGNoZWFwIChzeW5jaHJvbm91cyBjYWNoZVxuICogaGl0KS4gUmVmcmVzaCB3aW5kb3c6IEpJVFRFUl9DT05GSUdfUkVGUkVTSF9NUy5cbiAqXG4gKiBFeHBvcnRlZCBzbyBvcHMgcnVuYm9va3MgY2FuIHBvaW50IGF0IGEgc2luZ2xlIGZ1bmN0aW9uIHdoZW4gZG9jdW1lbnRpbmdcbiAqIHRoZSBsZXZlciwgYW5kIHNvIHRlc3RzIGNhbiBzcHkgb24gaXQgd2l0aG91dCBtb2NraW5nIEdyb3d0aEJvb2sgaXRzZWxmLlxuICpcbiAqIFBhc3MgdGhpcyBhcyBgZ2V0Sml0dGVyQ29uZmlnYCB3aGVuIGNhbGxpbmcgY3JlYXRlQ3JvblNjaGVkdWxlciBpbiBSRVBMXG4gKiBjb250ZXh0cy4gRGFlbW9uL1NESyBjYWxsZXJzIG9taXQgZ2V0Sml0dGVyQ29uZmlnIGFuZCBnZXQgZGVmYXVsdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDcm9uSml0dGVyQ29uZmlnKCk6IENyb25KaXR0ZXJDb25maWcge1xuICBjb25zdCByYXcgPSBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX1dJVEhfUkVGUkVTSDx1bmtub3duPihcbiAgICAndGVuZ3Vfa2Fpcm9zX2Nyb25fY29uZmlnJyxcbiAgICBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJRyxcbiAgICBKSVRURVJfQ09ORklHX1JFRlJFU0hfTVMsXG4gIClcbiAgY29uc3QgcGFyc2VkID0gY3JvbkppdHRlckNvbmZpZ1NjaGVtYSgpLnNhZmVQYXJzZShyYXcpXG4gIHJldHVybiBwYXJzZWQuc3VjY2VzcyA/IHBhcnNlZC5kYXRhIDogREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUdcbn1cbiIsICIvLyBTY2hlZHVsZXIgbGVhc2UgbG9jayBmb3IgLmNsYXVkZS9zY2hlZHVsZWRfdGFza3MuanNvbi5cbi8vXG4vLyBXaGVuIG11bHRpcGxlIENsYXVkZSBzZXNzaW9ucyBydW4gaW4gdGhlIHNhbWUgcHJvamVjdCBkaXJlY3RvcnksIG9ubHkgb25lXG4vLyBzaG91bGQgZHJpdmUgdGhlIGNyb24gc2NoZWR1bGVyLiBUaGUgZmlyc3Qgc2Vzc2lvbiB0byBhY3F1aXJlIHRoaXMgbG9ja1xuLy8gYmVjb21lcyB0aGUgc2NoZWR1bGVyOyBvdGhlcnMgc3RheSBwYXNzaXZlIGFuZCBwZXJpb2RpY2FsbHkgcHJvYmUgdGhlIGxvY2suXG4vLyBJZiB0aGUgb3duZXIgZGllcyAoUElEIG5vIGxvbmdlciBydW5uaW5nKSwgYSBwYXNzaXZlIHNlc3Npb24gdGFrZXMgb3Zlci5cbi8vXG4vLyBQYXR0ZXJuIG1pcnJvcnMgY29tcHV0ZXJVc2VMb2NrLnRzOiBPX0VYQ0wgYXRvbWljIGNyZWF0ZSwgUElEIGxpdmVuZXNzXG4vLyBwcm9iZSwgc3RhbGUtbG9jayByZWNvdmVyeSwgY2xlYW51cC1vbi1leGl0LlxuXG5pbXBvcnQgeyBta2RpciwgcmVhZEZpbGUsIHVubGluaywgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QvdjQnXG5pbXBvcnQgeyBnZXRQcm9qZWN0Um9vdCwgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnLi9jbGVhbnVwUmVnaXN0cnkuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBpc1Byb2Nlc3NSdW5uaW5nIH0gZnJvbSAnLi9nZW5lcmljUHJvY2Vzc1V0aWxzLmpzJ1xuaW1wb3J0IHsgc2FmZVBhcnNlSlNPTiB9IGZyb20gJy4vanNvbi5qcydcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuL2xhenlTY2hlbWEuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi9zbG93T3BlcmF0aW9ucy5qcydcblxuY29uc3QgTE9DS19GSUxFX1JFTCA9IGpvaW4oJy5jbGF1ZGUnLCAnc2NoZWR1bGVkX3Rhc2tzLmxvY2snKVxuXG5jb25zdCBzY2hlZHVsZXJMb2NrU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgc2Vzc2lvbklkOiB6LnN0cmluZygpLFxuICAgIHBpZDogei5udW1iZXIoKSxcbiAgICBhY3F1aXJlZEF0OiB6Lm51bWJlcigpLFxuICB9KSxcbilcbnR5cGUgU2NoZWR1bGVyTG9jayA9IHouaW5mZXI8UmV0dXJuVHlwZTx0eXBlb2Ygc2NoZWR1bGVyTG9ja1NjaGVtYT4+XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igb3V0LW9mLVJFUEwgY2FsbGVycyAoQWdlbnQgU0RLIGRhZW1vbikgdGhhdCBkb24ndCBoYXZlXG4gKiBib290c3RyYXAgc3RhdGUuIFdoZW4gb21pdHRlZCwgZmFsbHMgYmFjayB0byBnZXRQcm9qZWN0Um9vdCgpICtcbiAqIGdldFNlc3Npb25JZCgpIGFzIGJlZm9yZS4gbG9ja0lkZW50aXR5IHNob3VsZCBiZSBzdGFibGUgZm9yIHRoZSBsaWZldGltZVxuICogb2Ygb25lIGRhZW1vbiBwcm9jZXNzIChlLmcuIGEgcmFuZG9tVVVJRCgpIGNhcHR1cmVkIGF0IHN0YXJ0dXApLlxuICovXG5leHBvcnQgdHlwZSBTY2hlZHVsZXJMb2NrT3B0aW9ucyA9IHtcbiAgZGlyPzogc3RyaW5nXG4gIGxvY2tJZGVudGl0eT86IHN0cmluZ1xufVxuXG5sZXQgdW5yZWdpc3RlckNsZWFudXA6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZFxuLy8gU3VwcHJlc3MgcmVwZWF0IFwiaGVsZCBieSBYXCIgbG9nIGxpbmVzIHdoZW4gcG9sbGluZyBhIGxpdmUgb3duZXIuXG5sZXQgbGFzdEJsb2NrZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbmZ1bmN0aW9uIGdldExvY2tQYXRoKGRpcj86IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGRpciA/PyBnZXRQcm9qZWN0Um9vdCgpLCBMT0NLX0ZJTEVfUkVMKVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkTG9jayhkaXI/OiBzdHJpbmcpOiBQcm9taXNlPFNjaGVkdWxlckxvY2sgfCB1bmRlZmluZWQ+IHtcbiAgbGV0IHJhdzogc3RyaW5nXG4gIHRyeSB7XG4gICAgcmF3ID0gYXdhaXQgcmVhZEZpbGUoZ2V0TG9ja1BhdGgoZGlyKSwgJ3V0ZjgnKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gc2NoZWR1bGVyTG9ja1NjaGVtYSgpLnNhZmVQYXJzZShzYWZlUGFyc2VKU09OKHJhdywgZmFsc2UpKVxuICByZXR1cm4gcmVzdWx0LnN1Y2Nlc3MgPyByZXN1bHQuZGF0YSA6IHVuZGVmaW5lZFxufVxuXG5hc3luYyBmdW5jdGlvbiB0cnlDcmVhdGVFeGNsdXNpdmUoXG4gIGxvY2s6IFNjaGVkdWxlckxvY2ssXG4gIGRpcj86IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBwYXRoID0gZ2V0TG9ja1BhdGgoZGlyKVxuICBjb25zdCBib2R5ID0ganNvblN0cmluZ2lmeShsb2NrKVxuICB0cnkge1xuICAgIGF3YWl0IHdyaXRlRmlsZShwYXRoLCBib2R5LCB7IGZsYWc6ICd3eCcgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgIGlmIChjb2RlID09PSAnRUVYSVNUJykgcmV0dXJuIGZhbHNlXG4gICAgaWYgKGNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAvLyAuY2xhdWRlLyBkb2Vzbid0IGV4aXN0IHlldCBcdTIwMTQgY3JlYXRlIGl0IGFuZCByZXRyeSBvbmNlLiBJbiBzdGVhZHlcbiAgICAgIC8vIHN0YXRlIHRoZSBkaXIgYWxyZWFkeSBleGlzdHMgKHNjaGVkdWxlZF90YXNrcy5qc29uIGxpdmVzIHRoZXJlKSxcbiAgICAgIC8vIHNvIHRoaXMgcGF0aCBpcyBoaXQgYXQgbW9zdCBvbmNlLlxuICAgICAgYXdhaXQgbWtkaXIoZGlybmFtZShwYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHdyaXRlRmlsZShwYXRoLCBib2R5LCB7IGZsYWc6ICd3eCcgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyOiB1bmtub3duKSB7XG4gICAgICAgIGlmIChnZXRFcnJub0NvZGUocmV0cnlFcnIpID09PSAnRUVYSVNUJykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHRocm93IHJldHJ5RXJyXG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IGVcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvY2tDbGVhbnVwKG9wdHM/OiBTY2hlZHVsZXJMb2NrT3B0aW9ucyk6IHZvaWQge1xuICB1bnJlZ2lzdGVyQ2xlYW51cD8uKClcbiAgdW5yZWdpc3RlckNsZWFudXAgPSByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHJlbGVhc2VTY2hlZHVsZXJMb2NrKG9wdHMpXG4gIH0pXG59XG5cbi8qKlxuICogVHJ5IHRvIGFjcXVpcmUgdGhlIHNjaGVkdWxlciBsb2NrIGZvciB0aGUgY3VycmVudCBzZXNzaW9uLlxuICogUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIGlmIGFub3RoZXIgbGl2ZSBzZXNzaW9uIGhvbGRzIGl0LlxuICpcbiAqIFVzZXMgT19FWENMICgnd3gnKSBmb3IgYXRvbWljIHRlc3QtYW5kLXNldC4gSWYgdGhlIGZpbGUgZXhpc3RzOlxuICogICAtIEFscmVhZHkgb3VycyBcdTIxOTIgdHJ1ZSAoaWRlbXBvdGVudCByZS1hY3F1aXJlKVxuICogICAtIEFub3RoZXIgbGl2ZSBQSUQgXHUyMTkyIGZhbHNlXG4gKiAgIC0gU3RhbGUgKFBJRCBkZWFkIC8gY29ycnVwdCkgXHUyMTkyIHVubGluayBhbmQgcmV0cnkgZXhjbHVzaXZlIGNyZWF0ZSBvbmNlXG4gKlxuICogSWYgdHdvIHNlc3Npb25zIHJhY2UgdG8gcmVjb3ZlciBhIHN0YWxlIGxvY2ssIG9ubHkgb25lIGNyZWF0ZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyeUFjcXVpcmVTY2hlZHVsZXJMb2NrKFxuICBvcHRzPzogU2NoZWR1bGVyTG9ja09wdGlvbnMsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgZGlyID0gb3B0cz8uZGlyXG4gIC8vIFwic2Vzc2lvbklkXCIgaW4gdGhlIGxvY2sgZmlsZSBpcyByZWFsbHkganVzdCBhIHN0YWJsZSBvd25lciBrZXkuIFJFUExcbiAgLy8gdXNlcyBnZXRTZXNzaW9uSWQoKTsgZGFlbW9uIGNhbGxlcnMgc3VwcGx5IHRoZWlyIG93biBVVUlELiBQSUQgcmVtYWluc1xuICAvLyB0aGUgbGl2ZW5lc3Mgc2lnbmFsIHJlZ2FyZGxlc3MuXG4gIGNvbnN0IHNlc3Npb25JZCA9IG9wdHM/LmxvY2tJZGVudGl0eSA/PyBnZXRTZXNzaW9uSWQoKVxuICBjb25zdCBsb2NrOiBTY2hlZHVsZXJMb2NrID0ge1xuICAgIHNlc3Npb25JZCxcbiAgICBwaWQ6IHByb2Nlc3MucGlkLFxuICAgIGFjcXVpcmVkQXQ6IERhdGUubm93KCksXG4gIH1cblxuICBpZiAoYXdhaXQgdHJ5Q3JlYXRlRXhjbHVzaXZlKGxvY2ssIGRpcikpIHtcbiAgICBsYXN0QmxvY2tlZEJ5ID0gdW5kZWZpbmVkXG4gICAgcmVnaXN0ZXJMb2NrQ2xlYW51cChvcHRzKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbU2NoZWR1bGVkVGFza3NdIGFjcXVpcmVkIHNjaGVkdWxlciBsb2NrIChQSUQgJHtwcm9jZXNzLnBpZH0pYCxcbiAgICApXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcmVhZExvY2soZGlyKVxuXG4gIC8vIEFscmVhZHkgb3VycyAoaWRlbXBvdGVudCkuIEFmdGVyIC0tcmVzdW1lIHRoZSBzZXNzaW9uIElEIGlzIHJlc3RvcmVkXG4gIC8vIGJ1dCB0aGUgcHJvY2VzcyBoYXMgYSBuZXcgUElEIFx1MjAxNCB1cGRhdGUgdGhlIGxvY2sgZmlsZSBzbyBvdGhlciBzZXNzaW9uc1xuICAvLyBzZWUgYSBsaXZlIFBJRCBhbmQgZG9uJ3Qgc3RlYWwgaXQuXG4gIGlmIChleGlzdGluZz8uc2Vzc2lvbklkID09PSBzZXNzaW9uSWQpIHtcbiAgICBpZiAoZXhpc3RpbmcucGlkICE9PSBwcm9jZXNzLnBpZCkge1xuICAgICAgYXdhaXQgd3JpdGVGaWxlKGdldExvY2tQYXRoKGRpciksIGpzb25TdHJpbmdpZnkobG9jaykpXG4gICAgICByZWdpc3RlckxvY2tDbGVhbnVwKG9wdHMpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBDb3JydXB0IG9yIHVucGFyc2VhYmxlIFx1MjAxNCB0cmVhdCBhcyBzdGFsZS5cbiAgLy8gQW5vdGhlciBsaXZlIHNlc3Npb24gXHUyMDE0IGJsb2NrZWQuXG4gIGlmIChleGlzdGluZyAmJiBpc1Byb2Nlc3NSdW5uaW5nKGV4aXN0aW5nLnBpZCkpIHtcbiAgICBpZiAobGFzdEJsb2NrZWRCeSAhPT0gZXhpc3Rpbmcuc2Vzc2lvbklkKSB7XG4gICAgICBsYXN0QmxvY2tlZEJ5ID0gZXhpc3Rpbmcuc2Vzc2lvbklkXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIHNjaGVkdWxlciBsb2NrIGhlbGQgYnkgc2Vzc2lvbiAke2V4aXN0aW5nLnNlc3Npb25JZH0gKFBJRCAke2V4aXN0aW5nLnBpZH0pYCxcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBTdGFsZSBcdTIwMTQgdW5saW5rIGFuZCByZXRyeSB0aGUgZXhjbHVzaXZlIGNyZWF0ZSBvbmNlLlxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1NjaGVkdWxlZFRhc2tzXSByZWNvdmVyaW5nIHN0YWxlIHNjaGVkdWxlciBsb2NrIGZyb20gUElEICR7ZXhpc3RpbmcucGlkfWAsXG4gICAgKVxuICB9XG4gIGF3YWl0IHVubGluayhnZXRMb2NrUGF0aChkaXIpKS5jYXRjaCgoKSA9PiB7fSlcbiAgaWYgKGF3YWl0IHRyeUNyZWF0ZUV4Y2x1c2l2ZShsb2NrLCBkaXIpKSB7XG4gICAgbGFzdEJsb2NrZWRCeSA9IHVuZGVmaW5lZFxuICAgIHJlZ2lzdGVyTG9ja0NsZWFudXAob3B0cylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIC8vIEFub3RoZXIgc2Vzc2lvbiB3b24gdGhlIHJlY292ZXJ5IHJhY2UuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIFJlbGVhc2UgdGhlIHNjaGVkdWxlciBsb2NrIGlmIHRoZSBjdXJyZW50IHNlc3Npb24gb3ducyBpdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbGVhc2VTY2hlZHVsZXJMb2NrKFxuICBvcHRzPzogU2NoZWR1bGVyTG9ja09wdGlvbnMsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdW5yZWdpc3RlckNsZWFudXA/LigpXG4gIHVucmVnaXN0ZXJDbGVhbnVwID0gdW5kZWZpbmVkXG4gIGxhc3RCbG9ja2VkQnkgPSB1bmRlZmluZWRcblxuICBjb25zdCBkaXIgPSBvcHRzPy5kaXJcbiAgY29uc3Qgc2Vzc2lvbklkID0gb3B0cz8ubG9ja0lkZW50aXR5ID8/IGdldFNlc3Npb25JZCgpXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcmVhZExvY2soZGlyKVxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLnNlc3Npb25JZCAhPT0gc2Vzc2lvbklkKSByZXR1cm5cbiAgdHJ5IHtcbiAgICBhd2FpdCB1bmxpbmsoZ2V0TG9ja1BhdGgoZGlyKSlcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tTY2hlZHVsZWRUYXNrc10gcmVsZWFzZWQgc2NoZWR1bGVyIGxvY2snKVxuICB9IGNhdGNoIHtcbiAgICAvLyBBbHJlYWR5IGdvbmUuXG4gIH1cbn1cbiIsICIvLyBOb24tUmVhY3Qgc2NoZWR1bGVyIGNvcmUgZm9yIC5jbGF1ZGUvc2NoZWR1bGVkX3Rhc2tzLmpzb24uXG4vLyBTaGFyZWQgYnkgUkVQTCAodmlhIHVzZVNjaGVkdWxlZFRhc2tzKSBhbmQgU0RLLy1wIG1vZGUgKHByaW50LnRzKS5cbi8vXG4vLyBMaWZlY3ljbGU6IHBvbGwgZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkgdW50aWwgdHJ1ZSAoZmxhZyBmbGlwcyB3aGVuXG4vLyBDcm9uQ3JlYXRlIHJ1bnMgb3IgYSBza2lsbCBvbjogdHJpZ2dlciBmaXJlcykgXHUyMTkyIGxvYWQgdGFza3MgKyB3YXRjaCB0aGVcbi8vIGZpbGUgKyBzdGFydCBhIDFzIGNoZWNrIHRpbWVyIFx1MjE5MiBvbiBmaXJlLCBjYWxsIG9uRmlyZShwcm9tcHQpLiBzdG9wKClcbi8vIHRlYXJzIGV2ZXJ5dGhpbmcgZG93bi5cblxuaW1wb3J0IHR5cGUgeyBGU1dhdGNoZXIgfSBmcm9tICdjaG9raWRhcidcbmltcG9ydCB7XG4gIGdldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCxcbiAgZ2V0U2Vzc2lvbkNyb25UYXNrcyxcbiAgcmVtb3ZlU2Vzc2lvbkNyb25UYXNrcyxcbiAgc2V0U2NoZWR1bGVkVGFza3NFbmFibGVkLFxufSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBjcm9uVG9IdW1hbiB9IGZyb20gJy4vY3Jvbi5qcydcbmltcG9ydCB7XG4gIHR5cGUgQ3JvbkppdHRlckNvbmZpZyxcbiAgdHlwZSBDcm9uVGFzayxcbiAgREVGQVVMVF9DUk9OX0pJVFRFUl9DT05GSUcsXG4gIGZpbmRNaXNzZWRUYXNrcyxcbiAgZ2V0Q3JvbkZpbGVQYXRoLFxuICBoYXNDcm9uVGFza3NTeW5jLFxuICBqaXR0ZXJlZE5leHRDcm9uUnVuTXMsXG4gIG1hcmtDcm9uVGFza3NGaXJlZCxcbiAgb25lU2hvdEppdHRlcmVkTmV4dENyb25SdW5NcyxcbiAgcmVhZENyb25UYXNrcyxcbiAgcmVtb3ZlQ3JvblRhc2tzLFxufSBmcm9tICcuL2Nyb25UYXNrcy5qcydcbmltcG9ydCB7XG4gIHJlbGVhc2VTY2hlZHVsZXJMb2NrLFxuICB0cnlBY3F1aXJlU2NoZWR1bGVyTG9jayxcbn0gZnJvbSAnLi9jcm9uVGFza3NMb2NrLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcblxuY29uc3QgQ0hFQ0tfSU5URVJWQUxfTVMgPSAxMDAwXG5jb25zdCBGSUxFX1NUQUJJTElUWV9NUyA9IDMwMFxuLy8gSG93IG9mdGVuIGEgbm9uLW93bmluZyBzZXNzaW9uIHJlLXByb2JlcyB0aGUgc2NoZWR1bGVyIGxvY2suIENvYXJzZVxuLy8gYmVjYXVzZSB0YWtlb3ZlciBvbmx5IG1hdHRlcnMgd2hlbiB0aGUgb3duaW5nIHNlc3Npb24gaGFzIGNyYXNoZWQuXG5jb25zdCBMT0NLX1BST0JFX0lOVEVSVkFMX01TID0gNTAwMFxuLyoqXG4gKiBUcnVlIHdoZW4gYSByZWN1cnJpbmcgdGFzayB3YXMgY3JlYXRlZCBtb3JlIHRoYW4gYG1heEFnZU1zYCBhZ28gYW5kIHNob3VsZFxuICogYmUgZGVsZXRlZCBvbiBpdHMgbmV4dCBmaXJlLiBQZXJtYW5lbnQgdGFza3MgbmV2ZXIgYWdlLiBgbWF4QWdlTXMgPT09IDBgXG4gKiBtZWFucyB1bmxpbWl0ZWQgKG5ldmVyIGFnZXMgb3V0KS4gU291cmNlZCBmcm9tXG4gKiB7QGxpbmsgQ3JvbkppdHRlckNvbmZpZy5yZWN1cnJpbmdNYXhBZ2VNc30gYXQgY2FsbCB0aW1lLlxuICogRXh0cmFjdGVkIGZvciB0ZXN0YWJpbGl0eSBcdTIwMTQgdGhlIHNjaGVkdWxlcidzIGNoZWNrKCkgaXMgYnVyaWVkIHVuZGVyXG4gKiBzZXRJbnRlcnZhbC9jaG9raWRhci9sb2NrIG1hY2hpbmVyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdXJyaW5nVGFza0FnZWQoXG4gIHQ6IENyb25UYXNrLFxuICBub3dNczogbnVtYmVyLFxuICBtYXhBZ2VNczogbnVtYmVyLFxuKTogYm9vbGVhbiB7XG4gIGlmIChtYXhBZ2VNcyA9PT0gMCkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBCb29sZWFuKHQucmVjdXJyaW5nICYmICF0LnBlcm1hbmVudCAmJiBub3dNcyAtIHQuY3JlYXRlZEF0ID49IG1heEFnZU1zKVxufVxuXG50eXBlIENyb25TY2hlZHVsZXJPcHRpb25zID0ge1xuICAvKiogQ2FsbGVkIHdoZW4gYSB0YXNrIGZpcmVzIChyZWd1bGFyIG9yIG1pc3NlZC1vbi1zdGFydHVwKS4gKi9cbiAgb25GaXJlOiAocHJvbXB0OiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqIFdoaWxlIHRydWUsIGZpcmluZyBpcyBkZWZlcnJlZCB0byB0aGUgbmV4dCB0aWNrLiAqL1xuICBpc0xvYWRpbmc6ICgpID0+IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgYnlwYXNzZXMgdGhlIGlzTG9hZGluZyBnYXRlIGluIGNoZWNrKCkgYW5kIGF1dG8tZW5hYmxlcyB0aGVcbiAgICogc2NoZWR1bGVyIHdpdGhvdXQgd2FpdGluZyBmb3Igc2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkuIFRoZVxuICAgKiBhdXRvLWVuYWJsZSBpcyB0aGUgbG9hZC1iZWFyaW5nIHBhcnQgXHUyMDE0IGFzc2lzdGFudCBtb2RlIGhhcyB0YXNrcyBpblxuICAgKiBzY2hlZHVsZWRfdGFza3MuanNvbiBhdCBpbnN0YWxsIHRpbWUgYW5kIHNob3VsZG4ndCB3YWl0IG9uIGEgbG9hZGVyXG4gICAqIHNraWxsIHRvIGZsaXAgdGhlIGZsYWcuIFRoZSBpc0xvYWRpbmcgYnlwYXNzIGlzIG1pbm9yIHBvc3QtIzIwNDI1XG4gICAqIChhc3Npc3RhbnQgbW9kZSBub3cgaWRsZXMgYmV0d2VlbiB0dXJucyBsaWtlIGEgbm9ybWFsIFJFUEwpLlxuICAgKi9cbiAgYXNzaXN0YW50TW9kZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZW4gcHJvdmlkZWQsIHJlY2VpdmVzIHRoZSBmdWxsIENyb25UYXNrIG9uIG5vcm1hbCBmaXJlcyAoYW5kIG9uRmlyZSBpc1xuICAgKiBOT1QgY2FsbGVkIGZvciB0aGF0IGZpcmUpLiBMZXRzIGRhZW1vbiBjYWxsZXJzIHNlZSB0aGUgdGFzayBpZC9jcm9uL2V0Y1xuICAgKiBpbnN0ZWFkIG9mIGp1c3QgdGhlIHByb21wdCBzdHJpbmcuXG4gICAqL1xuICBvbkZpcmVUYXNrPzogKHRhc2s6IENyb25UYXNrKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBXaGVuIHByb3ZpZGVkLCByZWNlaXZlcyB0aGUgbWlzc2VkIG9uZS1zaG90IHRhc2tzIG9uIGluaXRpYWwgbG9hZCAoYW5kXG4gICAqIG9uRmlyZSBpcyBOT1QgY2FsbGVkIHdpdGggdGhlIHByZS1mb3JtYXR0ZWQgbm90aWZpY2F0aW9uKS4gRGFlbW9uIGRlY2lkZXNcbiAgICogaG93IHRvIHN1cmZhY2UgdGhlbS5cbiAgICovXG4gIG9uTWlzc2VkPzogKHRhc2tzOiBDcm9uVGFza1tdKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBEaXJlY3RvcnkgY29udGFpbmluZyAuY2xhdWRlL3NjaGVkdWxlZF90YXNrcy5qc29uLiBXaGVuIHByb3ZpZGVkLCB0aGVcbiAgICogc2NoZWR1bGVyIG5ldmVyIHRvdWNoZXMgYm9vdHN0cmFwIHN0YXRlOiBnZXRQcm9qZWN0Um9vdC9nZXRTZXNzaW9uSWQgYXJlXG4gICAqIG5vdCByZWFkLCBhbmQgdGhlIGdldFNjaGVkdWxlZFRhc2tzRW5hYmxlZCgpIHBvbGwgaXMgc2tpcHBlZCAoZW5hYmxlKClcbiAgICogcnVucyBpbW1lZGlhdGVseSBvbiBzdGFydCkuIFJlcXVpcmVkIGZvciBBZ2VudCBTREsgZGFlbW9uIGNhbGxlcnMuXG4gICAqL1xuICBkaXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIE93bmVyIGtleSB3cml0dGVuIGludG8gdGhlIGxvY2sgZmlsZS4gRGVmYXVsdHMgdG8gZ2V0U2Vzc2lvbklkKCkuXG4gICAqIERhZW1vbiBjYWxsZXJzIG11c3QgcGFzcyBhIHN0YWJsZSBwZXItcHJvY2VzcyBVVUlEIHNpbmNlIHRoZXkgaGF2ZSBub1xuICAgKiBzZXNzaW9uLiBQSUQgcmVtYWlucyB0aGUgbGl2ZW5lc3MgcHJvYmUgcmVnYXJkbGVzcy5cbiAgICovXG4gIGxvY2tJZGVudGl0eT86IHN0cmluZ1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3JvbiBqaXR0ZXIgY29uZmlnIHRvIHVzZSBmb3IgdGhpcyB0aWNrLiBDYWxsZWQgb25jZSBwZXJcbiAgICogY2hlY2soKSBjeWNsZS4gUkVQTCBjYWxsZXJzIHBhc3MgYSBHcm93dGhCb29rLWJhY2tlZCBpbXBsZW1lbnRhdGlvblxuICAgKiAoc2VlIGNyb25KaXR0ZXJDb25maWcudHMpIGZvciBsaXZlIHR1bmluZyBcdTIwMTQgb3BzIGNhbiB3aWRlbiB0aGUgaml0dGVyXG4gICAqIHdpbmRvdyBtaWQtc2Vzc2lvbiBkdXJpbmcgYSA6MDAgbG9hZCBzcGlrZSB3aXRob3V0IHJlc3RhcnRpbmcgY2xpZW50cy5cbiAgICogQWdlbnQgU0RLIGRhZW1vbiBjYWxsZXJzIG9taXQgdGhpcyBhbmQgZ2V0IERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHLFxuICAgKiB3aGljaCBpcyBzYWZlIHNpbmNlIGRhZW1vbnMgcmVzdGFydCBvbiBjb25maWcgY2hhbmdlIGFueXdheSwgYW5kIHRoZVxuICAgKiBncm93dGhib29rLnRzIFx1MjE5MiBjb25maWcudHMgXHUyMTkyIGNvbW1hbmRzLnRzIFx1MjE5MiBSRVBMIGNoYWluIHN0YXlzIG91dCBvZlxuICAgKiBzZGsubWpzLlxuICAgKi9cbiAgZ2V0Sml0dGVyQ29uZmlnPzogKCkgPT4gQ3JvbkppdHRlckNvbmZpZ1xuICAvKipcbiAgICogS2lsbHN3aXRjaDogcG9sbGVkIG9uY2UgcGVyIGNoZWNrKCkgdGljay4gV2hlbiB0cnVlLCBjaGVjaygpIGJhaWxzXG4gICAqIGJlZm9yZSBmaXJpbmcgYW55dGhpbmcgXHUyMDE0IGV4aXN0aW5nIGNyb25zIHN0b3AgZGVhZCBtaWQtc2Vzc2lvbi4gQ0xJXG4gICAqIGNhbGxlcnMgaW5qZWN0IGAoKSA9PiAhaXNLYWlyb3NDcm9uRW5hYmxlZCgpYCBzbyBmbGlwcGluZyB0aGVcbiAgICogdGVuZ3Vfa2Fpcm9zX2Nyb24gZ2F0ZSBvZmYgc3RvcHMgYWxyZWFkeS1ydW5uaW5nIHNjaGVkdWxlcnMgKG5vdCBqdXN0XG4gICAqIG5ldyBvbmVzKS4gRGFlbW9uIGNhbGxlcnMgb21pdCB0aGlzLCBzYW1lIHJhdGlvbmFsZSBhcyBnZXRKaXR0ZXJDb25maWcuXG4gICAqL1xuICBpc0tpbGxlZD86ICgpID0+IGJvb2xlYW5cbiAgLyoqXG4gICAqIFBlci10YXNrIGdhdGUgYXBwbGllZCBiZWZvcmUgYW55IHNpZGUgZWZmZWN0LiBUYXNrcyByZXR1cm5pbmcgZmFsc2UgYXJlXG4gICAqIGludmlzaWJsZSB0byB0aGlzIHNjaGVkdWxlcjogbmV2ZXIgZmlyZWQsIG5ldmVyIHN0YW1wZWQgd2l0aFxuICAgKiBgbGFzdEZpcmVkQXRgLCBuZXZlciBkZWxldGVkLCBuZXZlciBzdXJmYWNlZCBhcyBtaXNzZWQsIGFic2VudCBmcm9tXG4gICAqIGBnZXROZXh0RmlyZVRpbWUoKWAuIFRoZSBkYWVtb24gY3JvbiB3b3JrZXIgdXNlcyBgdCA9PiB0LnBlcm1hbmVudGAgc29cbiAgICogbm9uLXBlcm1hbmVudCB0YXNrcyBpbiB0aGUgc2FtZSBzY2hlZHVsZWRfdGFza3MuanNvbiBhcmUgdW50b3VjaGVkLlxuICAgKi9cbiAgZmlsdGVyPzogKHQ6IENyb25UYXNrKSA9PiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIENyb25TY2hlZHVsZXIgPSB7XG4gIHN0YXJ0OiAoKSA9PiB2b2lkXG4gIHN0b3A6ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIEVwb2NoIG1zIG9mIHRoZSBzb29uZXN0IHNjaGVkdWxlZCBmaXJlIGFjcm9zcyBhbGwgbG9hZGVkIHRhc2tzLCBvciBudWxsXG4gICAqIGlmIG5vdGhpbmcgaXMgc2NoZWR1bGVkIChubyB0YXNrcywgb3IgYWxsIHRhc2tzIGFscmVhZHkgaW4tZmxpZ2h0KS5cbiAgICogRGFlbW9uIGNhbGxlcnMgdXNlIHRoaXMgdG8gZGVjaWRlIHdoZXRoZXIgdG8gdGVhciBkb3duIGFuIGlkbGUgYWdlbnRcbiAgICogc3VicHJvY2VzcyBvciBrZWVwIGl0IHdhcm0gZm9yIGFuIGltbWluZW50IGZpcmUuXG4gICAqL1xuICBnZXROZXh0RmlyZVRpbWU6ICgpID0+IG51bWJlciB8IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNyb25TY2hlZHVsZXIoXG4gIG9wdGlvbnM6IENyb25TY2hlZHVsZXJPcHRpb25zLFxuKTogQ3JvblNjaGVkdWxlciB7XG4gIGNvbnN0IHtcbiAgICBvbkZpcmUsXG4gICAgaXNMb2FkaW5nLFxuICAgIGFzc2lzdGFudE1vZGUgPSBmYWxzZSxcbiAgICBvbkZpcmVUYXNrLFxuICAgIG9uTWlzc2VkLFxuICAgIGRpcixcbiAgICBsb2NrSWRlbnRpdHksXG4gICAgZ2V0Sml0dGVyQ29uZmlnLFxuICAgIGlzS2lsbGVkLFxuICAgIGZpbHRlcixcbiAgfSA9IG9wdGlvbnNcbiAgY29uc3QgbG9ja09wdHMgPSBkaXIgfHwgbG9ja0lkZW50aXR5ID8geyBkaXIsIGxvY2tJZGVudGl0eSB9IDogdW5kZWZpbmVkXG5cbiAgLy8gRmlsZS1iYWNrZWQgdGFza3Mgb25seS4gU2Vzc2lvbiB0YXNrcyAoZHVyYWJsZTogZmFsc2UpIGFyZSBOT1QgbG9hZGVkXG4gIC8vIGhlcmUgXHUyMDE0IHRoZXkgY2FuIGJlIGFkZGVkL3JlbW92ZWQgbWlkLXNlc3Npb24gd2l0aCBubyBmaWxlIGV2ZW50LCBzb1xuICAvLyBjaGVjaygpIHJlYWRzIHRoZW0gZnJlc2ggZnJvbSBib290c3RyYXAgc3RhdGUgb24gZXZlcnkgdGljayBpbnN0ZWFkLlxuICBsZXQgdGFza3M6IENyb25UYXNrW10gPSBbXVxuICAvLyBQZXItdGFzayBuZXh0LWZpcmUgdGltZXMgKGVwb2NoIG1zKS5cbiAgY29uc3QgbmV4dEZpcmVBdCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgLy8gSWRzIHdlJ3ZlIGFscmVhZHkgZW5xdWV1ZWQgYSBcIm1pc3NlZCB0YXNrXCIgcHJvbXB0IGZvciBcdTIwMTQgcHJldmVudHNcbiAgLy8gcmUtYXNraW5nIG9uIGV2ZXJ5IGZpbGUgY2hhbmdlIGJlZm9yZSB0aGUgdXNlciBhbnN3ZXJzLlxuICBjb25zdCBtaXNzZWRBc2tlZCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIC8vIFRhc2tzIGN1cnJlbnRseSBlbnF1ZXVlZCBidXQgbm90IHlldCByZW1vdmVkIGZyb20gdGhlIGZpbGUuIFByZXZlbnRzXG4gIC8vIGRvdWJsZS1maXJlIGlmIHRoZSBpbnRlcnZhbCB0aWNrcyBhZ2FpbiBiZWZvcmUgcmVtb3ZlQ3JvblRhc2tzIGxhbmRzLlxuICBjb25zdCBpbkZsaWdodCA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgbGV0IGVuYWJsZVBvbGw6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG4gIGxldCBjaGVja1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICBsZXQgbG9ja1Byb2JlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG4gIGxldCB3YXRjaGVyOiBGU1dhdGNoZXIgfCBudWxsID0gbnVsbFxuICBsZXQgc3RvcHBlZCA9IGZhbHNlXG4gIGxldCBpc093bmVyID0gZmFsc2VcblxuICBhc3luYyBmdW5jdGlvbiBsb2FkKGluaXRpYWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXh0ID0gYXdhaXQgcmVhZENyb25UYXNrcyhkaXIpXG4gICAgaWYgKHN0b3BwZWQpIHJldHVyblxuICAgIHRhc2tzID0gbmV4dFxuXG4gICAgLy8gT25seSBzdXJmYWNlIG1pc3NlZCB0YXNrcyBvbiBpbml0aWFsIGxvYWQuIENob2tpZGFyLXRyaWdnZXJlZFxuICAgIC8vIHJlbG9hZHMgbGVhdmUgb3ZlcmR1ZSB0YXNrcyB0byBjaGVjaygpICh3aGljaCBhbmNob3JzIGZyb20gY3JlYXRlZEF0XG4gICAgLy8gYW5kIGZpcmVzIGltbWVkaWF0ZWx5KS4gVGhpcyBhdm9pZHMgYSBtaXNsZWFkaW5nIFwibWlzc2VkIHdoaWxlIENsYXVkZVxuICAgIC8vIHdhcyBub3QgcnVubmluZ1wiIHByb21wdCBmb3IgdGFza3MgdGhhdCBiZWNhbWUgb3ZlcmR1ZSBtaWQtc2Vzc2lvbi5cbiAgICAvL1xuICAgIC8vIFJlY3VycmluZyB0YXNrcyBhcmUgTk9UIHN1cmZhY2VkIG9yIGRlbGV0ZWQgXHUyMDE0IGNoZWNrKCkgaGFuZGxlcyB0aGVtXG4gICAgLy8gY29ycmVjdGx5IChmaXJlcyBvbiBmaXJzdCB0aWNrLCByZXNjaGVkdWxlcyBmb3J3YXJkKS4gT25seSBvbmUtc2hvdFxuICAgIC8vIG1pc3NlZCB0YXNrcyBuZWVkIHVzZXIgaW5wdXQgKHJ1biBvbmNlIG5vdywgb3IgZGlzY2FyZCBmb3JldmVyKS5cbiAgICBpZiAoIWluaXRpYWwpIHJldHVyblxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IG1pc3NlZCA9IGZpbmRNaXNzZWRUYXNrcyhuZXh0LCBub3cpLmZpbHRlcihcbiAgICAgIHQgPT4gIXQucmVjdXJyaW5nICYmICFtaXNzZWRBc2tlZC5oYXModC5pZCkgJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKHQpKSxcbiAgICApXG4gICAgaWYgKG1pc3NlZC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHQgb2YgbWlzc2VkKSB7XG4gICAgICAgIG1pc3NlZEFza2VkLmFkZCh0LmlkKVxuICAgICAgICAvLyBQcmV2ZW50IGNoZWNrKCkgZnJvbSByZS1maXJpbmcgdGhlIHJhdyBwcm9tcHQgd2hpbGUgdGhlIGFzeW5jXG4gICAgICAgIC8vIHJlbW92ZUNyb25UYXNrcyArIGNob2tpZGFyIHJlbG9hZCBjaGFpbiBpcyBpbiBwcm9ncmVzcy5cbiAgICAgICAgbmV4dEZpcmVBdC5zZXQodC5pZCwgSW5maW5pdHkpXG4gICAgICB9XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2NoZWR1bGVkX3Rhc2tfbWlzc2VkJywge1xuICAgICAgICBjb3VudDogbWlzc2VkLmxlbmd0aCxcbiAgICAgICAgdGFza0lkczogbWlzc2VkXG4gICAgICAgICAgLm1hcCh0ID0+IHQuaWQpXG4gICAgICAgICAgLmpvaW4oXG4gICAgICAgICAgICAnLCcsXG4gICAgICAgICAgKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIGlmIChvbk1pc3NlZCkge1xuICAgICAgICBvbk1pc3NlZChtaXNzZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkZpcmUoYnVpbGRNaXNzZWRUYXNrTm90aWZpY2F0aW9uKG1pc3NlZCkpXG4gICAgICB9XG4gICAgICB2b2lkIHJlbW92ZUNyb25UYXNrcyhcbiAgICAgICAgbWlzc2VkLm1hcCh0ID0+IHQuaWQpLFxuICAgICAgICBkaXIsXG4gICAgICApLmNhdGNoKGUgPT5cbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbU2NoZWR1bGVkVGFza3NdIGZhaWxlZCB0byByZW1vdmUgbWlzc2VkIHRhc2tzOiAke2V9YCksXG4gICAgICApXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIHN1cmZhY2VkICR7bWlzc2VkLmxlbmd0aH0gbWlzc2VkIG9uZS1zaG90IHRhc2socylgLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIGlmIChpc0tpbGxlZD8uKCkpIHJldHVyblxuICAgIGlmIChpc0xvYWRpbmcoKSAmJiAhYXNzaXN0YW50TW9kZSkgcmV0dXJuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgIC8vIEZpbGUtYmFja2VkIHJlY3VycmluZyB0YXNrcyB0aGF0IGZpcmVkIHRoaXMgdGljay4gQmF0Y2hlZCBpbnRvIG9uZVxuICAgIC8vIG1hcmtDcm9uVGFza3NGaXJlZCBjYWxsIGFmdGVyIHRoZSBsb29wIHNvIE4gZmlyZXMgPSBvbmUgd3JpdGUuIFNlc3Npb25cbiAgICAvLyB0YXNrcyBleGNsdWRlZCBcdTIwMTQgdGhleSBkaWUgd2l0aCB0aGUgcHJvY2Vzcywgbm8gcG9pbnQgcGVyc2lzdGluZy5cbiAgICBjb25zdCBmaXJlZEZpbGVSZWN1cnJpbmc6IHN0cmluZ1tdID0gW11cbiAgICAvLyBSZWFkIG9uY2UgcGVyIHRpY2suIFJFUEwgY2FsbGVycyBwYXNzIGdldEppdHRlckNvbmZpZyBiYWNrZWQgYnlcbiAgICAvLyBHcm93dGhCb29rIHNvIGEgY29uZmlnIHB1c2ggdGFrZXMgZWZmZWN0IHdpdGhvdXQgcmVzdGFydC4gRGFlbW9uIGFuZFxuICAgIC8vIFNESyBjYWxsZXJzIG9taXQgaXQgYW5kIGdldCBERUZBVUxUX0NST05fSklUVEVSX0NPTkZJRyAoc2FmZSBcdTIwMTQgaml0dGVyXG4gICAgLy8gaXMgYW4gb3BzIGxldmVyIGZvciBSRVBMIGZsZWV0IGxvYWQtc2hlZGRpbmcsIG5vdCBhIGRhZW1vbiBjb25jZXJuKS5cbiAgICBjb25zdCBqaXR0ZXJDZmcgPSBnZXRKaXR0ZXJDb25maWc/LigpID8/IERFRkFVTFRfQ1JPTl9KSVRURVJfQ09ORklHXG5cbiAgICAvLyBTaGFyZWQgbG9vcCBib2R5LiBgaXNTZXNzaW9uYCByb3V0ZXMgdGhlIG9uZS1zaG90IGNsZWFudXAgcGF0aDpcbiAgICAvLyBzZXNzaW9uIHRhc2tzIGFyZSByZW1vdmVkIHN5bmNocm9ub3VzbHkgZnJvbSBtZW1vcnksIGZpbGUgdGFza3MgZ29cbiAgICAvLyB0aHJvdWdoIHRoZSBhc3luYyByZW1vdmVDcm9uVGFza3MgKyBjaG9raWRhciByZWxvYWQuXG4gICAgZnVuY3Rpb24gcHJvY2Vzcyh0OiBDcm9uVGFzaywgaXNTZXNzaW9uOiBib29sZWFuKSB7XG4gICAgICBpZiAoZmlsdGVyICYmICFmaWx0ZXIodCkpIHJldHVyblxuICAgICAgc2Vlbi5hZGQodC5pZClcbiAgICAgIGlmIChpbkZsaWdodC5oYXModC5pZCkpIHJldHVyblxuXG4gICAgICBsZXQgbmV4dCA9IG5leHRGaXJlQXQuZ2V0KHQuaWQpXG4gICAgICBpZiAobmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEZpcnN0IHNpZ2h0IFx1MjAxNCBhbmNob3IgZnJvbSBsYXN0RmlyZWRBdCAocmVjdXJyaW5nKSBvciBjcmVhdGVkQXQuXG4gICAgICAgIC8vIE5ldmVyLWZpcmVkIHJlY3VycmluZyB0YXNrcyB1c2UgY3JlYXRlZEF0OiBpZiBpc0xvYWRpbmcgZGVsYXllZFxuICAgICAgICAvLyB0aGlzIHRpY2sgcGFzdCB0aGUgZmlyZSB0aW1lLCBhbmNob3JpbmcgZnJvbSBgbm93YCB3b3VsZCBjb21wdXRlXG4gICAgICAgIC8vIG5leHQteWVhciBmb3IgcGlubmVkIGNyb25zIChgMzAgMTQgMjcgMiAqYCkuIEZpcmVkLWJlZm9yZSB0YXNrc1xuICAgICAgICAvLyB1c2UgbGFzdEZpcmVkQXQ6IHRoZSByZXNjaGVkdWxlIGJlbG93IHdyaXRlcyBgbm93YCBiYWNrIHRvIGRpc2ssXG4gICAgICAgIC8vIHNvIG9uIG5leHQgcHJvY2VzcyBzcGF3biBmaXJzdC1zaWdodCBjb21wdXRlcyB0aGUgU0FNRSBuZXdOZXh0IHdlXG4gICAgICAgIC8vIHNldCBpbi1tZW1vcnkgaGVyZS4gV2l0aG91dCB0aGlzLCBhIGRhZW1vbiBjaGlsZCBkZXNwYXduaW5nIG9uXG4gICAgICAgIC8vIGlkbGUgbG9zZXMgbmV4dEZpcmVBdCBhbmQgdGhlIG5leHQgc3Bhd24gcmUtYW5jaG9ycyBmcm9tIDEwLWRheS1cbiAgICAgICAgLy8gb2xkIGNyZWF0ZWRBdCBcdTIxOTIgZmlyZXMgZXZlcnkgdGFzayBldmVyeSBjeWNsZS5cbiAgICAgICAgbmV4dCA9IHQucmVjdXJyaW5nXG4gICAgICAgICAgPyAoaml0dGVyZWROZXh0Q3JvblJ1bk1zKFxuICAgICAgICAgICAgICB0LmNyb24sXG4gICAgICAgICAgICAgIHQubGFzdEZpcmVkQXQgPz8gdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgIHQuaWQsXG4gICAgICAgICAgICAgIGppdHRlckNmZyxcbiAgICAgICAgICAgICkgPz8gSW5maW5pdHkpXG4gICAgICAgICAgOiAob25lU2hvdEppdHRlcmVkTmV4dENyb25SdW5NcyhcbiAgICAgICAgICAgICAgdC5jcm9uLFxuICAgICAgICAgICAgICB0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgdC5pZCxcbiAgICAgICAgICAgICAgaml0dGVyQ2ZnLFxuICAgICAgICAgICAgKSA/PyBJbmZpbml0eSlcbiAgICAgICAgbmV4dEZpcmVBdC5zZXQodC5pZCwgbmV4dClcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIHNjaGVkdWxlZCAke3QuaWR9IGZvciAke25leHQgPT09IEluZmluaXR5ID8gJ25ldmVyJyA6IG5ldyBEYXRlKG5leHQpLnRvSVNPU3RyaW5nKCl9YCxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAobm93IDwgbmV4dCkgcmV0dXJuXG5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtTY2hlZHVsZWRUYXNrc10gZmlyaW5nICR7dC5pZH0ke3QucmVjdXJyaW5nID8gJyAocmVjdXJyaW5nKScgOiAnJ31gLFxuICAgICAgKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NjaGVkdWxlZF90YXNrX2ZpcmUnLCB7XG4gICAgICAgIHJlY3VycmluZzogdC5yZWN1cnJpbmcgPz8gZmFsc2UsXG4gICAgICAgIHRhc2tJZDpcbiAgICAgICAgICB0LmlkIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgICAgaWYgKG9uRmlyZVRhc2spIHtcbiAgICAgICAgb25GaXJlVGFzayh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25GaXJlKHQucHJvbXB0KVxuICAgICAgfVxuXG4gICAgICAvLyBBZ2VkLW91dCByZWN1cnJpbmcgdGFza3MgZmFsbCB0aHJvdWdoIHRvIHRoZSBvbmUtc2hvdCBkZWxldGUgcGF0aHNcbiAgICAgIC8vIGJlbG93IChzZXNzaW9uIHRhc2tzIGdldCBzeW5jaHJvbm91cyByZW1vdmFsOyBmaWxlIHRhc2tzIGdldCB0aGVcbiAgICAgIC8vIGFzeW5jIGluRmxpZ2h0L2Nob2tpZGFyIHBhdGgpLiBGaXJlcyBvbmUgbGFzdCB0aW1lLCB0aGVuIGlzIHJlbW92ZWQuXG4gICAgICBjb25zdCBhZ2VkID0gaXNSZWN1cnJpbmdUYXNrQWdlZCh0LCBub3csIGppdHRlckNmZy5yZWN1cnJpbmdNYXhBZ2VNcylcbiAgICAgIGlmIChhZ2VkKSB7XG4gICAgICAgIGNvbnN0IGFnZUhvdXJzID0gTWF0aC5mbG9vcigobm93IC0gdC5jcmVhdGVkQXQpIC8gMTAwMCAvIDYwIC8gNjApXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW1NjaGVkdWxlZFRhc2tzXSByZWN1cnJpbmcgdGFzayAke3QuaWR9IGFnZWQgb3V0ICgke2FnZUhvdXJzfWggc2luY2UgY3JlYXRpb24pLCBkZWxldGluZyBhZnRlciBmaW5hbCBmaXJlYCxcbiAgICAgICAgKVxuICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2NoZWR1bGVkX3Rhc2tfZXhwaXJlZCcsIHtcbiAgICAgICAgICB0YXNrSWQ6XG4gICAgICAgICAgICB0LmlkIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgYWdlSG91cnMsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0LnJlY3VycmluZyAmJiAhYWdlZCkge1xuICAgICAgICAvLyBSZWN1cnJpbmc6IHJlc2NoZWR1bGUgZnJvbSBub3cgKG5vdCBmcm9tIG5leHQpIHRvIGF2b2lkIHJhcGlkXG4gICAgICAgIC8vIGNhdGNoLXVwIGlmIHRoZSBzZXNzaW9uIHdhcyBibG9ja2VkLiBKaXR0ZXIga2VlcHMgdXMgb2ZmIHRoZVxuICAgICAgICAvLyBleGFjdCA6MDAgd2FsbC1jbG9jayBib3VuZGFyeSBldmVyeSBjeWNsZS5cbiAgICAgICAgY29uc3QgbmV3TmV4dCA9XG4gICAgICAgICAgaml0dGVyZWROZXh0Q3JvblJ1bk1zKHQuY3Jvbiwgbm93LCB0LmlkLCBqaXR0ZXJDZmcpID8/IEluZmluaXR5XG4gICAgICAgIG5leHRGaXJlQXQuc2V0KHQuaWQsIG5ld05leHQpXG4gICAgICAgIC8vIFBlcnNpc3QgbGFzdEZpcmVkQXQ9bm93IHNvIG5leHQgcHJvY2VzcyBzcGF3biByZWNvbnN0cnVjdHMgdGhpc1xuICAgICAgICAvLyBzYW1lIG5ld05leHQgb24gZmlyc3Qtc2lnaHQuIFNlc3Npb24gdGFza3Mgc2tpcCBcdTIwMTQgcHJvY2Vzcy1sb2NhbC5cbiAgICAgICAgaWYgKCFpc1Nlc3Npb24pIGZpcmVkRmlsZVJlY3VycmluZy5wdXNoKHQuaWQpXG4gICAgICB9IGVsc2UgaWYgKGlzU2Vzc2lvbikge1xuICAgICAgICAvLyBPbmUtc2hvdCAob3IgYWdlZC1vdXQgcmVjdXJyaW5nKSBzZXNzaW9uIHRhc2s6IHN5bmNocm9ub3VzIG1lbW9yeVxuICAgICAgICAvLyByZW1vdmFsLiBObyBpbkZsaWdodCB3aW5kb3cgXHUyMDE0IHRoZSBuZXh0IHRpY2sgd2lsbCByZWFkIGEgc2Vzc2lvblxuICAgICAgICAvLyBzdG9yZSB3aXRob3V0IHRoaXMgaWQuXG4gICAgICAgIHJlbW92ZVNlc3Npb25Dcm9uVGFza3MoW3QuaWRdKVxuICAgICAgICBuZXh0RmlyZUF0LmRlbGV0ZSh0LmlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25lLXNob3QgKG9yIGFnZWQtb3V0IHJlY3VycmluZykgZmlsZSB0YXNrOiBkZWxldGUgZnJvbSBkaXNrLlxuICAgICAgICAvLyBpbkZsaWdodCBndWFyZHMgYWdhaW5zdCBkb3VibGUtZmlyZSBkdXJpbmcgdGhlIGFzeW5jXG4gICAgICAgIC8vIHJlbW92ZUNyb25UYXNrcyArIGNob2tpZGFyIHJlbG9hZC5cbiAgICAgICAgaW5GbGlnaHQuYWRkKHQuaWQpXG4gICAgICAgIHZvaWQgcmVtb3ZlQ3JvblRhc2tzKFt0LmlkXSwgZGlyKVxuICAgICAgICAgIC5jYXRjaChlID0+XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIGZhaWxlZCB0byByZW1vdmUgdGFzayAke3QuaWR9OiAke2V9YCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IGluRmxpZ2h0LmRlbGV0ZSh0LmlkKSlcbiAgICAgICAgbmV4dEZpcmVBdC5kZWxldGUodC5pZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWxlLWJhY2tlZCB0YXNrczogb25seSB3aGVuIHdlIG93biB0aGUgc2NoZWR1bGVyIGxvY2suIFRoZSBsb2NrXG4gICAgLy8gZXhpc3RzIHRvIHN0b3AgdHdvIENsYXVkZSBzZXNzaW9ucyBpbiB0aGUgc2FtZSBjd2QgZnJvbSBkb3VibGUtZmlyaW5nXG4gICAgLy8gdGhlIHNhbWUgb24tZGlzayB0YXNrLlxuICAgIGlmIChpc093bmVyKSB7XG4gICAgICBmb3IgKGNvbnN0IHQgb2YgdGFza3MpIHByb2Nlc3ModCwgZmFsc2UpXG4gICAgICAvLyBCYXRjaGVkIGxhc3RGaXJlZEF0IHdyaXRlLiBpbkZsaWdodCBndWFyZHMgYWdhaW5zdCBkb3VibGUtZmlyZVxuICAgICAgLy8gZHVyaW5nIHRoZSBjaG9raWRhci10cmlnZ2VyZWQgcmVsb2FkIChzYW1lIHBhdHRlcm4gYXMgcmVtb3ZlQ3JvblRhc2tzXG4gICAgICAvLyBiZWxvdykgXHUyMDE0IHRoZSByZWxvYWQgcmUtc2VlZHMgYHRhc2tzYCB3aXRoIHRoZSBqdXN0LXdyaXR0ZW5cbiAgICAgIC8vIGxhc3RGaXJlZEF0LCBhbmQgZmlyc3Qtc2lnaHQgb24gdGhhdCB5aWVsZHMgdGhlIHNhbWUgbmV3TmV4dCB3ZVxuICAgICAgLy8gYWxyZWFkeSBzZXQgaW4tbWVtb3J5LCBzbyBpdCdzIGlkZW1wb3RlbnQgZXZlbiB3aXRob3V0IGluRmxpZ2h0LlxuICAgICAgLy8gR3VhcmRpbmcgYW55d2F5IGtlZXBzIHRoZSBzZW1hbnRpY3Mgb2J2aW91cy5cbiAgICAgIGlmIChmaXJlZEZpbGVSZWN1cnJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGZpcmVkRmlsZVJlY3VycmluZykgaW5GbGlnaHQuYWRkKGlkKVxuICAgICAgICB2b2lkIG1hcmtDcm9uVGFza3NGaXJlZChmaXJlZEZpbGVSZWN1cnJpbmcsIG5vdywgZGlyKVxuICAgICAgICAgIC5jYXRjaChlID0+XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIGZhaWxlZCB0byBwZXJzaXN0IGxhc3RGaXJlZEF0OiAke2V9YCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgZmlyZWRGaWxlUmVjdXJyaW5nKSBpbkZsaWdodC5kZWxldGUoaWQpXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU2Vzc2lvbi1vbmx5IHRhc2tzOiBwcm9jZXNzLXByaXZhdGUsIHRoZSBsb2NrIGRvZXMgbm90IGFwcGx5IFx1MjAxNCB0aGVcbiAgICAvLyBvdGhlciBzZXNzaW9uIGNhbm5vdCBzZWUgdGhlbSBhbmQgdGhlcmUgaXMgbm8gZG91YmxlLWZpcmUgcmlzay4gUmVhZFxuICAgIC8vIGZyZXNoIGZyb20gYm9vdHN0cmFwIHN0YXRlIGV2ZXJ5IHRpY2sgKG5vIGNob2tpZGFyLCBubyBsb2FkKCkpLiBUaGlzXG4gICAgLy8gaXMgc2tpcHBlZCBvbiB0aGUgZGFlbW9uIHBhdGggKGBkaXIgIT09IHVuZGVmaW5lZGApIHdoaWNoIG5ldmVyXG4gICAgLy8gdG91Y2hlcyBib290c3RyYXAgc3RhdGUuXG4gICAgaWYgKGRpciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHQgb2YgZ2V0U2Vzc2lvbkNyb25UYXNrcygpKSBwcm9jZXNzKHQsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKHNlZW4uc2l6ZSA9PT0gMCkge1xuICAgICAgLy8gTm8gbGl2ZSB0YXNrcyB0aGlzIHRpY2sgXHUyMDE0IGNsZWFyIHRoZSB3aG9sZSBzY2hlZHVsZSBzb1xuICAgICAgLy8gZ2V0TmV4dEZpcmVUaW1lKCkgcmV0dXJucyBudWxsLiBUaGUgZXZpY3Rpb24gbG9vcCBiZWxvdyBpc1xuICAgICAgLy8gdW5yZWFjaGFibGUgaGVyZSAoc2VlbiBpcyBlbXB0eSksIHNvIHN0YWxlIGVudHJpZXMgd291bGRcbiAgICAgIC8vIG90aGVyd2lzZSBzdXJ2aXZlIGluZGVmaW5pdGVseSBhbmQga2VlcCB0aGUgZGFlbW9uIGFnZW50IHdhcm0uXG4gICAgICBuZXh0RmlyZUF0LmNsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBFdmljdCBzY2hlZHVsZSBlbnRyaWVzIGZvciB0YXNrcyBubyBsb25nZXIgcHJlc2VudC4gV2hlbiAhaXNPd25lcixcbiAgICAvLyBmaWxlLXRhc2sgaWRzIGFyZW4ndCBpbiBgc2VlbmAgYW5kIGdldCBldmljdGVkIFx1MjAxNCBoYXJtbGVzczogdGhleVxuICAgIC8vIHJlLWFuY2hvciBmcm9tIGNyZWF0ZWRBdCBvbiB0aGUgZmlyc3Qgb3duZWQgdGljay5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIG5leHRGaXJlQXQua2V5cygpKSB7XG4gICAgICBpZiAoIXNlZW4uaGFzKGlkKSkgbmV4dEZpcmVBdC5kZWxldGUoaWQpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmIChzdG9wcGVkKSByZXR1cm5cbiAgICBpZiAoZW5hYmxlUG9sbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbmFibGVQb2xsKVxuICAgICAgZW5hYmxlUG9sbCA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlZmF1bHQ6IGNob2tpZGFyIH0gPSBhd2FpdCBpbXBvcnQoJ2Nob2tpZGFyJylcbiAgICBpZiAoc3RvcHBlZCkgcmV0dXJuXG5cbiAgICAvLyBBY3F1aXJlIHRoZSBwZXItcHJvamVjdCBzY2hlZHVsZXIgbG9jay4gT25seSB0aGUgb3duaW5nIHNlc3Npb24gcnVuc1xuICAgIC8vIGNoZWNrKCkuIE90aGVyIHNlc3Npb25zIHByb2JlIHBlcmlvZGljYWxseSB0byB0YWtlIG92ZXIgaWYgdGhlIG93bmVyXG4gICAgLy8gZGllcy4gUHJldmVudHMgZG91YmxlLWZpcmluZyB3aGVuIG11bHRpcGxlIENsYXVkZXMgc2hhcmUgYSBjd2QuXG4gICAgaXNPd25lciA9IGF3YWl0IHRyeUFjcXVpcmVTY2hlZHVsZXJMb2NrKGxvY2tPcHRzKS5jYXRjaCgoKSA9PiBmYWxzZSlcbiAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgaXNPd25lciA9IGZhbHNlXG4gICAgICAgIHZvaWQgcmVsZWFzZVNjaGVkdWxlckxvY2sobG9ja09wdHMpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFpc093bmVyKSB7XG4gICAgICBsb2NrUHJvYmVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdm9pZCB0cnlBY3F1aXJlU2NoZWR1bGVyTG9jayhsb2NrT3B0cylcbiAgICAgICAgICAudGhlbihvd25lZCA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICAgICAgICBpZiAob3duZWQpIHZvaWQgcmVsZWFzZVNjaGVkdWxlckxvY2sobG9ja09wdHMpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG93bmVkKSB7XG4gICAgICAgICAgICAgIGlzT3duZXIgPSB0cnVlXG4gICAgICAgICAgICAgIGlmIChsb2NrUHJvYmVUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9ja1Byb2JlVGltZXIpXG4gICAgICAgICAgICAgICAgbG9ja1Byb2JlVGltZXIgPSBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlID0+IGxvZ0ZvckRlYnVnZ2luZyhTdHJpbmcoZSksIHsgbGV2ZWw6ICdlcnJvcicgfSkpXG4gICAgICB9LCBMT0NLX1BST0JFX0lOVEVSVkFMX01TKVxuICAgICAgbG9ja1Byb2JlVGltZXIudW5yZWY/LigpXG4gICAgfVxuXG4gICAgdm9pZCBsb2FkKHRydWUpXG5cbiAgICBjb25zdCBwYXRoID0gZ2V0Q3JvbkZpbGVQYXRoKGRpcilcbiAgICB3YXRjaGVyID0gY2hva2lkYXIud2F0Y2gocGF0aCwge1xuICAgICAgcGVyc2lzdGVudDogZmFsc2UsXG4gICAgICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICAgICAgYXdhaXRXcml0ZUZpbmlzaDogeyBzdGFiaWxpdHlUaHJlc2hvbGQ6IEZJTEVfU1RBQklMSVRZX01TIH0sXG4gICAgICBpZ25vcmVQZXJtaXNzaW9uRXJyb3JzOiB0cnVlLFxuICAgIH0pXG4gICAgd2F0Y2hlci5vbignYWRkJywgKCkgPT4gdm9pZCBsb2FkKGZhbHNlKSlcbiAgICB3YXRjaGVyLm9uKCdjaGFuZ2UnLCAoKSA9PiB2b2lkIGxvYWQoZmFsc2UpKVxuICAgIHdhdGNoZXIub24oJ3VubGluaycsICgpID0+IHtcbiAgICAgIGlmICghc3RvcHBlZCkge1xuICAgICAgICB0YXNrcyA9IFtdXG4gICAgICAgIG5leHRGaXJlQXQuY2xlYXIoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjaGVja1RpbWVyID0gc2V0SW50ZXJ2YWwoY2hlY2ssIENIRUNLX0lOVEVSVkFMX01TKVxuICAgIC8vIERvbid0IGtlZXAgdGhlIHByb2Nlc3MgYWxpdmUgZm9yIHRoZSBzY2hlZHVsZXIgYWxvbmUgXHUyMDE0IGluIC1wIHRleHQgbW9kZVxuICAgIC8vIHRoZSBwcm9jZXNzIHNob3VsZCBleGl0IGFmdGVyIHRoZSBzaW5nbGUgdHVybiBldmVuIGlmIGEgY3JvbiB3YXMgY3JlYXRlZC5cbiAgICBjaGVja1RpbWVyLnVucmVmPy4oKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHN0b3BwZWQgPSBmYWxzZVxuICAgICAgLy8gRGFlbW9uIHBhdGggKGRpciBleHBsaWNpdGx5IGdpdmVuKTogZG9uJ3QgdG91Y2ggYm9vdHN0cmFwIHN0YXRlIFx1MjAxNFxuICAgICAgLy8gZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkgd291bGQgcmVhZCBhIG5ldmVyLWluaXRpYWxpemVkIGZsYWcuIFRoZVxuICAgICAgLy8gZGFlbW9uIGlzIGFza2luZyB0byBzY2hlZHVsZTsganVzdCBlbmFibGUuXG4gICAgICBpZiAoZGlyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIHNjaGVkdWxlciBzdGFydCgpIFx1MjAxNCBkaXI9JHtkaXJ9LCBoYXNUYXNrcz0ke2hhc0Nyb25UYXNrc1N5bmMoZGlyKX1gLFxuICAgICAgICApXG4gICAgICAgIHZvaWQgZW5hYmxlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbU2NoZWR1bGVkVGFza3NdIHNjaGVkdWxlciBzdGFydCgpIFx1MjAxNCBlbmFibGVkPSR7Z2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCl9LCBoYXNUYXNrcz0ke2hhc0Nyb25UYXNrc1N5bmMoKX1gLFxuICAgICAgKVxuICAgICAgLy8gQXV0by1lbmFibGUgd2hlbiBzY2hlZHVsZWRfdGFza3MuanNvbiBoYXMgZW50cmllcy4gQ3JvbkNyZWF0ZVRvb2xcbiAgICAgIC8vIGFsc28gc2V0cyB0aGlzIHdoZW4gYSB0YXNrIGlzIGNyZWF0ZWQgbWlkLXNlc3Npb24uXG4gICAgICBpZiAoXG4gICAgICAgICFnZXRTY2hlZHVsZWRUYXNrc0VuYWJsZWQoKSAmJlxuICAgICAgICAoYXNzaXN0YW50TW9kZSB8fCBoYXNDcm9uVGFza3NTeW5jKCkpXG4gICAgICApIHtcbiAgICAgICAgc2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKHRydWUpXG4gICAgICB9XG4gICAgICBpZiAoZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCkpIHtcbiAgICAgICAgdm9pZCBlbmFibGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGVuYWJsZVBvbGwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgZW4gPT4ge1xuICAgICAgICAgIGlmIChnZXRTY2hlZHVsZWRUYXNrc0VuYWJsZWQoKSkgdm9pZCBlbigpXG4gICAgICAgIH0sXG4gICAgICAgIENIRUNLX0lOVEVSVkFMX01TLFxuICAgICAgICBlbmFibGUsXG4gICAgICApXG4gICAgICBlbmFibGVQb2xsLnVucmVmPy4oKVxuICAgIH0sXG4gICAgc3RvcCgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlXG4gICAgICBpZiAoZW5hYmxlUG9sbCkge1xuICAgICAgICBjbGVhckludGVydmFsKGVuYWJsZVBvbGwpXG4gICAgICAgIGVuYWJsZVBvbGwgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrVGltZXIpXG4gICAgICAgIGNoZWNrVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAobG9ja1Byb2JlVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2NrUHJvYmVUaW1lcilcbiAgICAgICAgbG9ja1Byb2JlVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICB2b2lkIHdhdGNoZXI/LmNsb3NlKClcbiAgICAgIHdhdGNoZXIgPSBudWxsXG4gICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICBpc093bmVyID0gZmFsc2VcbiAgICAgICAgdm9pZCByZWxlYXNlU2NoZWR1bGVyTG9jayhsb2NrT3B0cylcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE5leHRGaXJlVGltZSgpIHtcbiAgICAgIC8vIG5leHRGaXJlQXQgdXNlcyBJbmZpbml0eSBmb3IgXCJuZXZlclwiIChpbi1mbGlnaHQgb25lLXNob3RzLCBiYWQgY3JvblxuICAgICAgLy8gc3RyaW5ncykuIEZpbHRlciB0aG9zZSBvdXQgc28gY2FsbGVycyBjYW4gZGlzdGluZ3Vpc2ggXCJzb29uXCIgZnJvbVxuICAgICAgLy8gXCJub3RoaW5nIHBlbmRpbmdcIi5cbiAgICAgIGxldCBtaW4gPSBJbmZpbml0eVxuICAgICAgZm9yIChjb25zdCB0IG9mIG5leHRGaXJlQXQudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKHQgPCBtaW4pIG1pbiA9IHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBtaW4gPT09IEluZmluaXR5ID8gbnVsbCA6IG1pblxuICAgIH0sXG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgbWlzc2VkLXRhc2sgbm90aWZpY2F0aW9uIHRleHQuIEd1aWRhbmNlIHByZWNlZGVzIHRoZSB0YXNrIGxpc3RcbiAqIGFuZCB0aGUgbGlzdCBpcyB3cmFwcGVkIGluIGEgY29kZSBmZW5jZSBzbyBhIG11bHRpLWxpbmUgaW1wZXJhdGl2ZSBwcm9tcHRcbiAqIGlzIG5vdCBpbnRlcnByZXRlZCBhcyBpbW1lZGlhdGUgaW5zdHJ1Y3Rpb25zIHRvIGF2b2lkIHNlbGYtaW5mbGljdGVkXG4gKiBwcm9tcHQgaW5qZWN0aW9uLiBUaGUgZnVsbCBwcm9tcHQgYm9keSBpcyBwcmVzZXJ2ZWQgXHUyMDE0IHRoaXMgcGF0aCBET0VTXG4gKiBuZWVkIHRoZSBtb2RlbCB0byBleGVjdXRlIHRoZSBwcm9tcHQgYWZ0ZXIgdXNlclxuICogY29uZmlybWF0aW9uLCBhbmQgdGFza3MgYXJlIGFscmVhZHkgZGVsZXRlZCBmcm9tIEpTT04gYmVmb3JlIHRoZSBtb2RlbFxuICogc2VlcyB0aGlzIG5vdGlmaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWlzc2VkVGFza05vdGlmaWNhdGlvbihtaXNzZWQ6IENyb25UYXNrW10pOiBzdHJpbmcge1xuICBjb25zdCBwbHVyYWwgPSBtaXNzZWQubGVuZ3RoID4gMVxuICBjb25zdCBoZWFkZXIgPVxuICAgIGBUaGUgZm9sbG93aW5nIG9uZS1zaG90IHNjaGVkdWxlZCB0YXNrJHtwbHVyYWwgPyAncyB3ZXJlJyA6ICcgd2FzJ30gbWlzc2VkIHdoaWxlIENsYXVkZSB3YXMgbm90IHJ1bm5pbmcuIGAgK1xuICAgIGAke3BsdXJhbCA/ICdUaGV5IGhhdmUnIDogJ0l0IGhhcyd9IGFscmVhZHkgYmVlbiByZW1vdmVkIGZyb20gLmNsYXVkZS9zY2hlZHVsZWRfdGFza3MuanNvbi5cXG5cXG5gICtcbiAgICBgRG8gTk9UIGV4ZWN1dGUgJHtwbHVyYWwgPyAndGhlc2UgcHJvbXB0cycgOiAndGhpcyBwcm9tcHQnfSB5ZXQuIGAgK1xuICAgIGBGaXJzdCB1c2UgdGhlIEFza1VzZXJRdWVzdGlvbiB0b29sIHRvIGFzayB3aGV0aGVyIHRvIHJ1biAke3BsdXJhbCA/ICdlYWNoIG9uZScgOiAnaXQnfSBub3cuIGAgK1xuICAgIGBPbmx5IGV4ZWN1dGUgaWYgdGhlIHVzZXIgY29uZmlybXMuYFxuXG4gIGNvbnN0IGJsb2NrcyA9IG1pc3NlZC5tYXAodCA9PiB7XG4gICAgY29uc3QgbWV0YSA9IGBbJHtjcm9uVG9IdW1hbih0LmNyb24pfSwgY3JlYXRlZCAke25ldyBEYXRlKHQuY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfV1gXG4gICAgLy8gVXNlIGEgZmVuY2Ugb25lIGxvbmdlciB0aGFuIGFueSBiYWNrdGljayBydW4gaW4gdGhlIHByb21wdCBzbyBhXG4gICAgLy8gcHJvbXB0IGNvbnRhaW5pbmcgYGBgIGNhbm5vdCBjbG9zZSB0aGUgZmVuY2UgZWFybHkgYW5kIHVuLXdyYXAgdGhlXG4gICAgLy8gdHJhaWxpbmcgdGV4dCAoQ29tbW9uTWFyayBmZW5jZS1tYXRjaGluZyBydWxlKS5cbiAgICBjb25zdCBsb25nZXN0UnVuID0gKHQucHJvbXB0Lm1hdGNoKC9gKy9nKSA/PyBbXSkucmVkdWNlKFxuICAgICAgKG1heCwgcnVuKSA9PiBNYXRoLm1heChtYXgsIHJ1bi5sZW5ndGgpLFxuICAgICAgMCxcbiAgICApXG4gICAgY29uc3QgZmVuY2UgPSAnYCcucmVwZWF0KE1hdGgubWF4KDMsIGxvbmdlc3RSdW4gKyAxKSlcbiAgICByZXR1cm4gYCR7bWV0YX1cXG4ke2ZlbmNlfVxcbiR7dC5wcm9tcHR9XFxuJHtmZW5jZX1gXG4gIH0pXG5cbiAgcmV0dXJuIGAke2hlYWRlcn1cXG5cXG4ke2Jsb2Nrcy5qb2luKCdcXG5cXG4nKX1gXG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBCYXNlNjRJbWFnZVNvdXJjZSxcbiAgQ29udGVudEJsb2NrUGFyYW0sXG4gIEltYWdlQmxvY2tQYXJhbSxcbn0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB0eXBlIHsgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB0eXBlIHsgU0RLTWVzc2FnZSB9IGZyb20gJy4uL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgeyBkZXRlY3RJbWFnZUZvcm1hdEZyb21CYXNlNjQgfSBmcm9tICcuLi91dGlscy9pbWFnZVJlc2l6ZXIuanMnXG5cbi8qKlxuICogUHJvY2VzcyBhbiBpbmJvdW5kIHVzZXIgbWVzc2FnZSBmcm9tIHRoZSBicmlkZ2UsIGV4dHJhY3RpbmcgY29udGVudFxuICogYW5kIFVVSUQgZm9yIGVucXVldWVpbmcuIFN1cHBvcnRzIGJvdGggc3RyaW5nIGNvbnRlbnQgYW5kXG4gKiBDb250ZW50QmxvY2tQYXJhbVtdIChlLmcuIG1lc3NhZ2VzIGNvbnRhaW5pbmcgaW1hZ2VzKS5cbiAqXG4gKiBOb3JtYWxpemVzIGltYWdlIGJsb2NrcyBmcm9tIGJyaWRnZSBjbGllbnRzIHRoYXQgbWF5IHVzZSBjYW1lbENhc2VcbiAqIGBtZWRpYVR5cGVgIGluc3RlYWQgb2Ygc25ha2VfY2FzZSBgbWVkaWFfdHlwZWAgKG1vYmlsZS1hcHBzIzU4MjUpLlxuICpcbiAqIFJldHVybnMgdGhlIGV4dHJhY3RlZCBmaWVsZHMsIG9yIHVuZGVmaW5lZCBpZiB0aGUgbWVzc2FnZSBzaG91bGQgYmVcbiAqIHNraXBwZWQgKG5vbi11c2VyIHR5cGUsIG1pc3NpbmcvZW1wdHkgY29udGVudCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SW5ib3VuZE1lc3NhZ2VGaWVsZHMoXG4gIG1zZzogU0RLTWVzc2FnZSxcbik6XG4gIHwgeyBjb250ZW50OiBzdHJpbmcgfCBBcnJheTxDb250ZW50QmxvY2tQYXJhbT47IHV1aWQ6IFVVSUQgfCB1bmRlZmluZWQgfVxuICB8IHVuZGVmaW5lZCB7XG4gIGlmIChtc2cudHlwZSAhPT0gJ3VzZXInKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZT8uY29udGVudFxuICBpZiAoIWNvbnRlbnQpIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkgJiYgY29udGVudC5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcblxuICBjb25zdCB1dWlkID1cbiAgICAndXVpZCcgaW4gbXNnICYmIHR5cGVvZiBtc2cudXVpZCA9PT0gJ3N0cmluZydcbiAgICAgID8gKG1zZy51dWlkIGFzIFVVSUQpXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIHJldHVybiB7XG4gICAgY29udGVudDogQXJyYXkuaXNBcnJheShjb250ZW50KSA/IG5vcm1hbGl6ZUltYWdlQmxvY2tzKGNvbnRlbnQpIDogY29udGVudCxcbiAgICB1dWlkLFxuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGltYWdlIGNvbnRlbnQgYmxvY2tzIGZyb20gYnJpZGdlIGNsaWVudHMuIGlPUy93ZWIgY2xpZW50cyBtYXlcbiAqIHNlbmQgYG1lZGlhVHlwZWAgKGNhbWVsQ2FzZSkgaW5zdGVhZCBvZiBgbWVkaWFfdHlwZWAgKHNuYWtlX2Nhc2UpLCBvclxuICogb21pdCB0aGUgZmllbGQgZW50aXJlbHkuIFdpdGhvdXQgbm9ybWFsaXphdGlvbiwgdGhlIGJhZCBibG9jayBwb2lzb25zXG4gKiB0aGUgc2Vzc2lvbiBcdTIwMTQgZXZlcnkgc3Vic2VxdWVudCBBUEkgY2FsbCBmYWlscyB3aXRoXG4gKiBcIm1lZGlhX3R5cGU6IEZpZWxkIHJlcXVpcmVkXCIuXG4gKlxuICogRmFzdC1wYXRoIHNjYW4gcmV0dXJucyB0aGUgb3JpZ2luYWwgYXJyYXkgcmVmZXJlbmNlIHdoZW4gbm9cbiAqIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkICh6ZXJvIGFsbG9jYXRpb24gb24gdGhlIGhhcHB5IHBhdGgpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSW1hZ2VCbG9ja3MoXG4gIGJsb2NrczogQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+LFxuKTogQXJyYXk8Q29udGVudEJsb2NrUGFyYW0+IHtcbiAgaWYgKCFibG9ja3Muc29tZShpc01hbGZvcm1lZEJhc2U2NEltYWdlKSkgcmV0dXJuIGJsb2Nrc1xuXG4gIHJldHVybiBibG9ja3MubWFwKGJsb2NrID0+IHtcbiAgICBpZiAoIWlzTWFsZm9ybWVkQmFzZTY0SW1hZ2UoYmxvY2spKSByZXR1cm4gYmxvY2tcbiAgICBjb25zdCBzcmMgPSBibG9jay5zb3VyY2UgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIGNvbnN0IG1lZGlhVHlwZSA9XG4gICAgICB0eXBlb2Ygc3JjLm1lZGlhVHlwZSA9PT0gJ3N0cmluZycgJiYgc3JjLm1lZGlhVHlwZVxuICAgICAgICA/IHNyYy5tZWRpYVR5cGVcbiAgICAgICAgOiBkZXRlY3RJbWFnZUZvcm1hdEZyb21CYXNlNjQoYmxvY2suc291cmNlLmRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmJsb2NrLFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHR5cGU6ICdiYXNlNjQnIGFzIGNvbnN0LFxuICAgICAgICBtZWRpYV90eXBlOiBtZWRpYVR5cGUgYXMgQmFzZTY0SW1hZ2VTb3VyY2VbJ21lZGlhX3R5cGUnXSxcbiAgICAgICAgZGF0YTogYmxvY2suc291cmNlLmRhdGEsXG4gICAgICB9LFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNNYWxmb3JtZWRCYXNlNjRJbWFnZShcbiAgYmxvY2s6IENvbnRlbnRCbG9ja1BhcmFtLFxuKTogYmxvY2sgaXMgSW1hZ2VCbG9ja1BhcmFtICYgeyBzb3VyY2U6IEJhc2U2NEltYWdlU291cmNlIH0ge1xuICBpZiAoYmxvY2sudHlwZSAhPT0gJ2ltYWdlJyB8fCBibG9jay5zb3VyY2U/LnR5cGUgIT09ICdiYXNlNjQnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuICEoYmxvY2suc291cmNlIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pLm1lZGlhX3R5cGVcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRvb2wsIFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnc3JjL1Rvb2wuanMnXG5pbXBvcnQgeiBmcm9tICd6b2QvdjQnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuLi9sYXp5U2NoZW1hLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBQZXJtaXNzaW9uRGVjaXNpb24sXG4gIFBlcm1pc3Npb25EZWNpc2lvblJlYXNvbixcbn0gZnJvbSAnLi9QZXJtaXNzaW9uUmVzdWx0LmpzJ1xuaW1wb3J0IHtcbiAgYXBwbHlQZXJtaXNzaW9uVXBkYXRlcyxcbiAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGVzLFxufSBmcm9tICcuL1Blcm1pc3Npb25VcGRhdGUuanMnXG5pbXBvcnQgeyBwZXJtaXNzaW9uVXBkYXRlU2NoZW1hIH0gZnJvbSAnLi9QZXJtaXNzaW9uVXBkYXRlU2NoZW1hLmpzJ1xuXG5leHBvcnQgY29uc3QgaW5wdXRTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0b29sX25hbWU6IHpcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLmRlc2NyaWJlKCdUaGUgbmFtZSBvZiB0aGUgdG9vbCByZXF1ZXN0aW5nIHBlcm1pc3Npb24nKSxcbiAgICBpbnB1dDogei5yZWNvcmQoei5zdHJpbmcoKSwgei51bmtub3duKCkpLmRlc2NyaWJlKCdUaGUgaW5wdXQgZm9yIHRoZSB0b29sJyksXG4gICAgdG9vbF91c2VfaWQ6IHpcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLm9wdGlvbmFsKClcbiAgICAgIC5kZXNjcmliZSgnVGhlIHVuaXF1ZSB0b29sIHVzZSByZXF1ZXN0IElEJyksXG4gIH0pLFxuKVxuXG5leHBvcnQgdHlwZSBJbnB1dCA9IHouaW5mZXI8UmV0dXJuVHlwZTx0eXBlb2YgaW5wdXRTY2hlbWE+PlxuXG4vLyBab2Qgc2NoZW1hIGZvciBwZXJtaXNzaW9uIHJlc3VsdHNcbi8vIFRoaXMgc2NoZW1hIGlzIHVzZWQgdG8gdmFsaWRhdGUgdGhlIE1DUCBwZXJtaXNzaW9uIHByb21wdCB0b29sXG4vLyBzbyB3ZSBtYWludGFpbiBpdCBhcyBhIHN1YnNldCBvZiB0aGUgcmVhbCBQZXJtaXNzaW9uRGVjaXNpb24gdHlwZVxuXG4vLyBNYXRjaGVzIFBlcm1pc3Npb25EZWNpc2lvbkNsYXNzaWZpY2F0aW9uU2NoZW1hIGluIGVudHJ5cG9pbnRzL3Nkay9jb3JlU2NoZW1hcy50cy5cbi8vIE1hbGZvcm1lZCB2YWx1ZXMgZmFsbCB0aHJvdWdoIHRvIHVuZGVmaW5lZCAoc2FtZSBwYXR0ZXJuIGFzIHVwZGF0ZWRQZXJtaXNzaW9uc1xuLy8gYmVsb3cpIHNvIGEgYmFkIHN0cmluZyBmcm9tIHRoZSBTREsgaG9zdCBkb2Vzbid0IHJlamVjdCB0aGUgd2hvbGUgZGVjaXNpb24uXG5jb25zdCBkZWNpc2lvbkNsYXNzaWZpY2F0aW9uRmllbGQgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAuZW51bShbJ3VzZXJfdGVtcG9yYXJ5JywgJ3VzZXJfcGVybWFuZW50JywgJ3VzZXJfcmVqZWN0J10pXG4gICAgLm9wdGlvbmFsKClcbiAgICAuY2F0Y2godW5kZWZpbmVkKSxcbilcblxuY29uc3QgUGVybWlzc2lvbkFsbG93UmVzdWx0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgYmVoYXZpb3I6IHoubGl0ZXJhbCgnYWxsb3cnKSxcbiAgICB1cGRhdGVkSW5wdXQ6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKSxcbiAgICAvLyBTREsgaG9zdHMgbWF5IHNlbmQgbWFsZm9ybWVkIGVudHJpZXM7IGZhbGwgYmFjayB0byB1bmRlZmluZWQgcmF0aGVyXG4gICAgLy8gdGhhbiByZWplY3RpbmcgdGhlIGVudGlyZSBhbGxvdyBkZWNpc2lvbiAoYW50aHJvcGljcy9jbGF1ZGUtY29kZSMyOTQ0MClcbiAgICB1cGRhdGVkUGVybWlzc2lvbnM6IHpcbiAgICAgIC5hcnJheShwZXJtaXNzaW9uVXBkYXRlU2NoZW1hKCkpXG4gICAgICAub3B0aW9uYWwoKVxuICAgICAgLmNhdGNoKGN0eCA9PiB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgTWFsZm9ybWVkIHVwZGF0ZWRQZXJtaXNzaW9ucyBmcm9tIFNESyBob3N0IGlnbm9yZWQ6ICR7Y3R4LmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSA/PyAndW5rbm93bid9YCxcbiAgICAgICAgICB7IGxldmVsOiAnd2FybicgfSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9KSxcbiAgICB0b29sVXNlSUQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBkZWNpc2lvbkNsYXNzaWZpY2F0aW9uOiBkZWNpc2lvbkNsYXNzaWZpY2F0aW9uRmllbGQoKSxcbiAgfSksXG4pXG5cbmNvbnN0IFBlcm1pc3Npb25EZW55UmVzdWx0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgYmVoYXZpb3I6IHoubGl0ZXJhbCgnZGVueScpLFxuICAgIG1lc3NhZ2U6IHouc3RyaW5nKCksXG4gICAgaW50ZXJydXB0OiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHRvb2xVc2VJRDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIGRlY2lzaW9uQ2xhc3NpZmljYXRpb246IGRlY2lzaW9uQ2xhc3NpZmljYXRpb25GaWVsZCgpLFxuICB9KSxcbilcblxuZXhwb3J0IGNvbnN0IG91dHB1dFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei51bmlvbihbUGVybWlzc2lvbkFsbG93UmVzdWx0U2NoZW1hKCksIFBlcm1pc3Npb25EZW55UmVzdWx0U2NoZW1hKCldKSxcbilcblxuZXhwb3J0IHR5cGUgT3V0cHV0ID0gei5pbmZlcjxSZXR1cm5UeXBlPHR5cGVvZiBvdXRwdXRTY2hlbWE+PlxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHJlc3VsdCBvZiBhIHBlcm1pc3Npb24gcHJvbXB0IHRvb2wgdG8gYSBQZXJtaXNzaW9uRGVjaXNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uKFxuICByZXN1bHQ6IE91dHB1dCxcbiAgdG9vbDogVG9vbCxcbiAgaW5wdXQ6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxuICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4pOiBQZXJtaXNzaW9uRGVjaXNpb24ge1xuICBjb25zdCBkZWNpc2lvblJlYXNvbjogUGVybWlzc2lvbkRlY2lzaW9uUmVhc29uID0ge1xuICAgIHR5cGU6ICdwZXJtaXNzaW9uUHJvbXB0VG9vbCcsXG4gICAgcGVybWlzc2lvblByb21wdFRvb2xOYW1lOiB0b29sLm5hbWUsXG4gICAgdG9vbFJlc3VsdDogcmVzdWx0LFxuICB9XG4gIGlmIChyZXN1bHQuYmVoYXZpb3IgPT09ICdhbGxvdycpIHtcbiAgICBjb25zdCB1cGRhdGVkUGVybWlzc2lvbnMgPSByZXN1bHQudXBkYXRlZFBlcm1pc3Npb25zXG4gICAgaWYgKHVwZGF0ZWRQZXJtaXNzaW9ucykge1xuICAgICAgdG9vbFVzZUNvbnRleHQuc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQ6IGFwcGx5UGVybWlzc2lvblVwZGF0ZXMoXG4gICAgICAgICAgcHJldi50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zLFxuICAgICAgICApLFxuICAgICAgfSkpXG4gICAgICBwZXJzaXN0UGVybWlzc2lvblVwZGF0ZXModXBkYXRlZFBlcm1pc3Npb25zKVxuICAgIH1cbiAgICAvLyBNb2JpbGUgY2xpZW50cyByZXNwb25kaW5nIGZyb20gYSBwdXNoIG5vdGlmaWNhdGlvbiBkb24ndCBoYXZlIHRoZVxuICAgIC8vIG9yaWdpbmFsIHRvb2wgaW5wdXQsIHNvIHRoZXkgc2VuZCBge31gIHRvIHNhdGlzZnkgdGhlIHNjaGVtYS4gVHJlYXQgYW5cbiAgICAvLyBlbXB0eSBvYmplY3QgYXMgXCJ1c2Ugb3JpZ2luYWxcIiBzbyB0aGUgdG9vbCBkb2Vzbid0IHJ1biB3aXRoIG5vIGFyZ3MuXG4gICAgY29uc3QgdXBkYXRlZElucHV0ID1cbiAgICAgIE9iamVjdC5rZXlzKHJlc3VsdC51cGRhdGVkSW5wdXQpLmxlbmd0aCA+IDAgPyByZXN1bHQudXBkYXRlZElucHV0IDogaW5wdXRcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgdXBkYXRlZElucHV0LFxuICAgICAgZGVjaXNpb25SZWFzb24sXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlc3VsdC5iZWhhdmlvciA9PT0gJ2RlbnknICYmIHJlc3VsdC5pbnRlcnJ1cHQpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgU0RLIHBlcm1pc3Npb24gcHJvbXB0IGRlbnkraW50ZXJydXB0OiB0b29sPSR7dG9vbC5uYW1lfSBtZXNzYWdlPSR7cmVzdWx0Lm1lc3NhZ2V9YCxcbiAgICApXG4gICAgdG9vbFVzZUNvbnRleHQuYWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnJlc3VsdCxcbiAgICBkZWNpc2lvblJlYXNvbixcbiAgfVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHR5cGUge1xuICBFbGljaXRSZXN1bHQsXG4gIEpTT05SUENNZXNzYWdlLFxufSBmcm9tICdAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2RrL3R5cGVzLmpzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB0eXBlIHsgQXNzaXN0YW50TWVzc2FnZSB9IGZyb20gJ3NyYy8vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHtcbiAgSG9va0lucHV0LFxuICBIb29rSlNPTk91dHB1dCxcbiAgUGVybWlzc2lvblVwZGF0ZSxcbiAgU0RLTWVzc2FnZSxcbiAgU0RLVXNlck1lc3NhZ2UsXG59IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHsgU0RLQ29udHJvbEVsaWNpdGF0aW9uUmVzcG9uc2VTY2hlbWEgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvc2RrL2NvbnRyb2xTY2hlbWFzLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBTREtDb250cm9sUmVxdWVzdCxcbiAgU0RLQ29udHJvbFJlc3BvbnNlLFxuICBTdGRpbk1lc3NhZ2UsXG4gIFN0ZG91dE1lc3NhZ2UsXG59IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICdzcmMvaG9va3MvdXNlQ2FuVXNlVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgVG9vbCwgVG9vbFVzZUNvbnRleHQgfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB7IHR5cGUgSG9va0NhbGxiYWNrLCBob29rSlNPTk91dHB1dFNjaGVtYSB9IGZyb20gJ3NyYy90eXBlcy9ob29rcy5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJ3NyYy91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICdzcmMvdXRpbHMvZGlhZ0xvZ3MuanMnXG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSAnc3JjL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7XG4gIHR5cGUgT3V0cHV0IGFzIFBlcm1pc3Npb25Ub29sT3V0cHV0LFxuICBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uLFxuICBvdXRwdXRTY2hlbWEgYXMgcGVybWlzc2lvblRvb2xPdXRwdXRTY2hlbWEsXG59IGZyb20gJ3NyYy91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFNjaGVtYS5qcydcbmltcG9ydCB0eXBlIHtcbiAgUGVybWlzc2lvbkRlY2lzaW9uLFxuICBQZXJtaXNzaW9uRGVjaXNpb25SZWFzb24sXG59IGZyb20gJ3NyYy91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uUmVzdWx0LmpzJ1xuaW1wb3J0IHsgaGFzUGVybWlzc2lvbnNUb1VzZVRvb2wgfSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMuanMnXG5pbXBvcnQgeyB3cml0ZVRvU3Rkb3V0IH0gZnJvbSAnc3JjL3V0aWxzL3Byb2Nlc3MuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnc3JjL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IG5vdGlmeUNvbW1hbmRMaWZlY3ljbGUgfSBmcm9tICcuLi91dGlscy9jb21tYW5kTGlmZWN5Y2xlLmpzJ1xuaW1wb3J0IHsgbm9ybWFsaXplQ29udHJvbE1lc3NhZ2VLZXlzIH0gZnJvbSAnLi4vdXRpbHMvY29udHJvbE1lc3NhZ2VDb21wYXQuanMnXG5pbXBvcnQgeyBleGVjdXRlUGVybWlzc2lvblJlcXVlc3RIb29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzLmpzJ1xuaW1wb3J0IHtcbiAgYXBwbHlQZXJtaXNzaW9uVXBkYXRlcyxcbiAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGVzLFxufSBmcm9tICcuLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uVXBkYXRlLmpzJ1xuaW1wb3J0IHtcbiAgbm90aWZ5U2Vzc2lvblN0YXRlQ2hhbmdlZCxcbiAgdHlwZSBSZXF1aXJlc0FjdGlvbkRldGFpbHMsXG4gIHR5cGUgU2Vzc2lvbkV4dGVybmFsTWV0YWRhdGEsXG59IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25TdGF0ZS5qcydcbmltcG9ydCB7IGpzb25QYXJzZSB9IGZyb20gJy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnLi4vdXRpbHMvc3RyZWFtLmpzJ1xuaW1wb3J0IHsgbmRqc29uU2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vbmRqc29uU2FmZVN0cmluZ2lmeS5qcydcblxuLyoqXG4gKiBTeW50aGV0aWMgdG9vbCBuYW1lIHVzZWQgd2hlbiBmb3J3YXJkaW5nIHNhbmRib3ggbmV0d29yayBwZXJtaXNzaW9uXG4gKiByZXF1ZXN0cyB2aWEgdGhlIGNhbl91c2VfdG9vbCBjb250cm9sX3JlcXVlc3QgcHJvdG9jb2wuIFNESyBob3N0c1xuICogc2VlIHRoaXMgYXMgYSBub3JtYWwgdG9vbCBwZXJtaXNzaW9uIHByb21wdC5cbiAqL1xuZXhwb3J0IGNvbnN0IFNBTkRCT1hfTkVUV09SS19BQ0NFU1NfVE9PTF9OQU1FID0gJ1NhbmRib3hOZXR3b3JrQWNjZXNzJ1xuXG5mdW5jdGlvbiBzZXJpYWxpemVEZWNpc2lvblJlYXNvbihcbiAgcmVhc29uOiBQZXJtaXNzaW9uRGVjaXNpb25SZWFzb24gfCB1bmRlZmluZWQsXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBpZiAoIXJlYXNvbikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGlmIChcbiAgICAoZmVhdHVyZSgnQkFTSF9DTEFTU0lGSUVSJykgfHwgZmVhdHVyZSgnVFJBTlNDUklQVF9DTEFTU0lGSUVSJykpICYmXG4gICAgcmVhc29uLnR5cGUgPT09ICdjbGFzc2lmaWVyJ1xuICApIHtcbiAgICByZXR1cm4gcmVhc29uLnJlYXNvblxuICB9XG4gIHN3aXRjaCAocmVhc29uLnR5cGUpIHtcbiAgICBjYXNlICdydWxlJzpcbiAgICBjYXNlICdtb2RlJzpcbiAgICBjYXNlICdzdWJjb21tYW5kUmVzdWx0cyc6XG4gICAgY2FzZSAncGVybWlzc2lvblByb21wdFRvb2wnOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIGNhc2UgJ2hvb2snOlxuICAgIGNhc2UgJ2FzeW5jQWdlbnQnOlxuICAgIGNhc2UgJ3NhbmRib3hPdmVycmlkZSc6XG4gICAgY2FzZSAnd29ya2luZ0Rpcic6XG4gICAgY2FzZSAnc2FmZXR5Q2hlY2snOlxuICAgIGNhc2UgJ290aGVyJzpcbiAgICAgIHJldHVybiByZWFzb24ucmVhc29uXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlc0FjdGlvbkRldGFpbHMoXG4gIHRvb2w6IFRvb2wsXG4gIGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgdG9vbFVzZUlEOiBzdHJpbmcsXG4gIHJlcXVlc3RJZDogc3RyaW5nLFxuKTogUmVxdWlyZXNBY3Rpb25EZXRhaWxzIHtcbiAgLy8gUGVyLXRvb2wgc3VtbWFyeSBtZXRob2RzIG1heSB0aHJvdyBvbiBtYWxmb3JtZWQgaW5wdXQ7IHBlcm1pc3Npb25cbiAgLy8gaGFuZGxpbmcgbXVzdCBub3QgYnJlYWsgYmVjYXVzZSBvZiBhIGJhZCBkZXNjcmlwdGlvbi5cbiAgbGV0IGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBkZXNjcmlwdGlvbiA9XG4gICAgICB0b29sLmdldEFjdGl2aXR5RGVzY3JpcHRpb24/LihpbnB1dCkgPz9cbiAgICAgIHRvb2wuZ2V0VG9vbFVzZVN1bW1hcnk/LihpbnB1dCkgPz9cbiAgICAgIHRvb2wudXNlckZhY2luZ05hbWUoaW5wdXQpXG4gIH0gY2F0Y2gge1xuICAgIGRlc2NyaXB0aW9uID0gdG9vbC5uYW1lXG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0b29sX25hbWU6IHRvb2wubmFtZSxcbiAgICBhY3Rpb25fZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRvb2xfdXNlX2lkOiB0b29sVXNlSUQsXG4gICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgIGlucHV0LFxuICB9XG59XG5cbnR5cGUgUGVuZGluZ1JlcXVlc3Q8VD4gPSB7XG4gIHJlc29sdmU6IChyZXN1bHQ6IFQpID0+IHZvaWRcbiAgcmVqZWN0OiAoZXJyb3I6IHVua25vd24pID0+IHZvaWRcbiAgc2NoZW1hPzogei5TY2hlbWFcbiAgcmVxdWVzdDogU0RLQ29udHJvbFJlcXVlc3Rcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIHN0cnVjdHVyZWQgd2F5IHRvIHJlYWQgYW5kIHdyaXRlIFNESyBtZXNzYWdlcyBmcm9tIHN0ZGlvLFxuICogY2FwdHVyaW5nIHRoZSBTREsgcHJvdG9jb2wuXG4gKi9cbi8vIE1heGltdW0gbnVtYmVyIG9mIHJlc29sdmVkIHRvb2xfdXNlIElEcyB0byB0cmFjay4gT25jZSBleGNlZWRlZCwgdGhlIG9sZGVzdFxuLy8gZW50cnkgaXMgZXZpY3RlZC4gVGhpcyBib3VuZHMgbWVtb3J5IGluIHZlcnkgbG9uZyBzZXNzaW9ucyB3aGlsZSBrZWVwaW5nXG4vLyBlbm91Z2ggaGlzdG9yeSB0byBjYXRjaCBkdXBsaWNhdGUgY29udHJvbF9yZXNwb25zZSBkZWxpdmVyaWVzLlxuY29uc3QgTUFYX1JFU09MVkVEX1RPT0xfVVNFX0lEUyA9IDEwMDBcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZWRJTyB7XG4gIHJlYWRvbmx5IHN0cnVjdHVyZWRJbnB1dDogQXN5bmNHZW5lcmF0b3I8U3RkaW5NZXNzYWdlIHwgU0RLTWVzc2FnZT5cbiAgcHJpdmF0ZSByZWFkb25seSBwZW5kaW5nUmVxdWVzdHMgPSBuZXcgTWFwPHN0cmluZywgUGVuZGluZ1JlcXVlc3Q8dW5rbm93bj4+KClcblxuICAvLyBDQ1IgZXh0ZXJuYWxfbWV0YWRhdGEgcmVhZCBiYWNrIG9uIHdvcmtlciBzdGFydDsgbnVsbCB3aGVuIHRoZVxuICAvLyB0cmFuc3BvcnQgZG9lc24ndCByZXN0b3JlLiBBc3NpZ25lZCBieSBSZW1vdGVJTy5cbiAgcmVzdG9yZWRXb3JrZXJTdGF0ZTogUHJvbWlzZTxTZXNzaW9uRXh0ZXJuYWxNZXRhZGF0YSB8IG51bGw+ID1cbiAgICBQcm9taXNlLnJlc29sdmUobnVsbClcblxuICBwcml2YXRlIGlucHV0Q2xvc2VkID0gZmFsc2VcbiAgcHJpdmF0ZSB1bmV4cGVjdGVkUmVzcG9uc2VDYWxsYmFjaz86IChcbiAgICByZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlLFxuICApID0+IFByb21pc2U8dm9pZD5cblxuICAvLyBUcmFja3MgdG9vbF91c2UgSURzIHRoYXQgaGF2ZSBiZWVuIHJlc29sdmVkIHRocm91Z2ggdGhlIG5vcm1hbCBwZXJtaXNzaW9uXG4gIC8vIGZsb3cgKG9yIGFib3J0ZWQgYnkgYSBob29rKS4gV2hlbiBhIGR1cGxpY2F0ZSBjb250cm9sX3Jlc3BvbnNlIGFycml2ZXNcbiAgLy8gYWZ0ZXIgdGhlIG9yaWdpbmFsIHdhcyBhbHJlYWR5IGhhbmRsZWQsIHRoaXMgU2V0IHByZXZlbnRzIHRoZSBvcnBoYW5cbiAgLy8gaGFuZGxlciBmcm9tIHJlLXByb2Nlc3NpbmcgaXQgXHUyMDE0IHdoaWNoIHdvdWxkIHB1c2ggZHVwbGljYXRlIGFzc2lzdGFudFxuICAvLyBtZXNzYWdlcyBpbnRvIG11dGFibGVNZXNzYWdlcyBhbmQgY2F1c2UgYSA0MDAgXCJ0b29sX3VzZSBpZHMgbXVzdCBiZSB1bmlxdWVcIlxuICAvLyBlcnJvciBmcm9tIHRoZSBBUEkuXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzb2x2ZWRUb29sVXNlSWRzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgcHJpdmF0ZSBwcmVwZW5kZWRMaW5lczogc3RyaW5nW10gPSBbXVxuICBwcml2YXRlIG9uQ29udHJvbFJlcXVlc3RTZW50PzogKHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KSA9PiB2b2lkXG4gIHByaXZhdGUgb25Db250cm9sUmVxdWVzdFJlc29sdmVkPzogKHJlcXVlc3RJZDogc3RyaW5nKSA9PiB2b2lkXG5cbiAgLy8gc2VuZFJlcXVlc3QoKSBhbmQgcHJpbnQudHMgYm90aCBlbnF1ZXVlIGhlcmU7IHRoZSBkcmFpbiBsb29wIGlzIHRoZVxuICAvLyBvbmx5IHdyaXRlci4gUHJldmVudHMgY29udHJvbF9yZXF1ZXN0IGZyb20gb3ZlcnRha2luZyBxdWV1ZWQgc3RyZWFtX2V2ZW50cy5cbiAgcmVhZG9ubHkgb3V0Ym91bmQgPSBuZXcgU3RyZWFtPFN0ZG91dE1lc3NhZ2U+KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlucHV0OiBBc3luY0l0ZXJhYmxlPHN0cmluZz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXBsYXlVc2VyTWVzc2FnZXM/OiBib29sZWFuLFxuICApIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXRcbiAgICB0aGlzLnN0cnVjdHVyZWRJbnB1dCA9IHRoaXMucmVhZCgpXG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkcyBhIHRvb2xfdXNlIElEIGFzIHJlc29sdmVkIHNvIHRoYXQgbGF0ZS9kdXBsaWNhdGUgY29udHJvbF9yZXNwb25zZVxuICAgKiBtZXNzYWdlcyBmb3IgdGhlIHNhbWUgdG9vbCBhcmUgaWdub3JlZCBieSB0aGUgb3JwaGFuIGhhbmRsZXIuXG4gICAqL1xuICBwcml2YXRlIHRyYWNrUmVzb2x2ZWRUb29sVXNlSWQocmVxdWVzdDogU0RLQ29udHJvbFJlcXVlc3QpOiB2b2lkIHtcbiAgICBpZiAocmVxdWVzdC5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjYW5fdXNlX3Rvb2wnKSB7XG4gICAgICB0aGlzLnJlc29sdmVkVG9vbFVzZUlkcy5hZGQocmVxdWVzdC5yZXF1ZXN0LnRvb2xfdXNlX2lkKVxuICAgICAgaWYgKHRoaXMucmVzb2x2ZWRUb29sVXNlSWRzLnNpemUgPiBNQVhfUkVTT0xWRURfVE9PTF9VU0VfSURTKSB7XG4gICAgICAgIC8vIEV2aWN0IHRoZSBvbGRlc3QgZW50cnkgKFNldHMgaXRlcmF0ZSBpbiBpbnNlcnRpb24gb3JkZXIpXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5yZXNvbHZlZFRvb2xVc2VJZHMudmFsdWVzKCkubmV4dCgpLnZhbHVlXG4gICAgICAgIGlmIChmaXJzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZFRvb2xVc2VJZHMuZGVsZXRlKGZpcnN0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEZsdXNoIHBlbmRpbmcgaW50ZXJuYWwgZXZlbnRzLiBOby1vcCBmb3Igbm9uLXJlbW90ZSBJTy4gT3ZlcnJpZGRlbiBieSBSZW1vdGVJTy4gKi9cbiAgZmx1c2hJbnRlcm5hbEV2ZW50cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIC8qKiBJbnRlcm5hbC1ldmVudCBxdWV1ZSBkZXB0aC4gT3ZlcnJpZGRlbiBieSBSZW1vdGVJTzsgemVybyBvdGhlcndpc2UuICovXG4gIGdldCBpbnRlcm5hbEV2ZW50c1BlbmRpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXVlIGEgdXNlciB0dXJuIHRvIGJlIHlpZWxkZWQgYmVmb3JlIHRoZSBuZXh0IG1lc3NhZ2UgZnJvbSB0aGlzLmlucHV0LlxuICAgKiBXb3JrcyBiZWZvcmUgaXRlcmF0aW9uIHN0YXJ0cyBhbmQgbWlkLXN0cmVhbSBcdTIwMTQgcmVhZCgpIHJlLWNoZWNrc1xuICAgKiBwcmVwZW5kZWRMaW5lcyBiZXR3ZWVuIGVhY2ggeWllbGRlZCBtZXNzYWdlLlxuICAgKi9cbiAgcHJlcGVuZFVzZXJNZXNzYWdlKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHJlcGVuZGVkTGluZXMucHVzaChcbiAgICAgIGpzb25TdHJpbmdpZnkoe1xuICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgIHNlc3Npb25faWQ6ICcnLFxuICAgICAgICBtZXNzYWdlOiB7IHJvbGU6ICd1c2VyJywgY29udGVudCB9LFxuICAgICAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG51bGwsXG4gICAgICB9IHNhdGlzZmllcyBTREtVc2VyTWVzc2FnZSkgKyAnXFxuJyxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIGFzeW5jICpyZWFkKCkge1xuICAgIGxldCBjb250ZW50ID0gJydcblxuICAgIC8vIENhbGxlZCBvbmNlIGJlZm9yZSBmb3ItYXdhaXQgKGFuIGVtcHR5IHRoaXMuaW5wdXQgb3RoZXJ3aXNlIHNraXBzIHRoZVxuICAgIC8vIGxvb3AgYm9keSBlbnRpcmVseSksIHRoZW4gYWdhaW4gcGVyIGJsb2NrLiBwcmVwZW5kZWRMaW5lcyByZS1jaGVjayBpc1xuICAgIC8vIGluc2lkZSB0aGUgd2hpbGUgc28gYSBwcmVwZW5kIHB1c2hlZCBiZXR3ZWVuIHR3byBtZXNzYWdlcyBpbiB0aGUgU0FNRVxuICAgIC8vIGJsb2NrIHN0aWxsIGxhbmRzIGZpcnN0LlxuICAgIGNvbnN0IHNwbGl0QW5kUHJvY2VzcyA9IGFzeW5jIGZ1bmN0aW9uKiAodGhpczogU3RydWN0dXJlZElPKSB7XG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXBlbmRlZExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5wcmVwZW5kZWRMaW5lcy5qb2luKCcnKSArIGNvbnRlbnRcbiAgICAgICAgICB0aGlzLnByZXBlbmRlZExpbmVzID0gW11cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdsaW5lID0gY29udGVudC5pbmRleE9mKCdcXG4nKVxuICAgICAgICBpZiAobmV3bGluZSA9PT0gLTEpIGJyZWFrXG4gICAgICAgIGNvbnN0IGxpbmUgPSBjb250ZW50LnNsaWNlKDAsIG5ld2xpbmUpXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKG5ld2xpbmUgKyAxKVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5wcm9jZXNzTGluZShsaW5lKVxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3N0ZGluX21lc3NhZ2VfcGFyc2VkJywge1xuICAgICAgICAgICAgdHlwZTogbWVzc2FnZS50eXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgeWllbGQgbWVzc2FnZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG5cbiAgICB5aWVsZCogc3BsaXRBbmRQcm9jZXNzKClcblxuICAgIGZvciBhd2FpdCAoY29uc3QgYmxvY2sgb2YgdGhpcy5pbnB1dCkge1xuICAgICAgY29udGVudCArPSBibG9ja1xuICAgICAgeWllbGQqIHNwbGl0QW5kUHJvY2VzcygpXG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5wcm9jZXNzTGluZShjb250ZW50KVxuICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgeWllbGQgbWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0Q2xvc2VkID0gdHJ1ZVxuICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiB0aGlzLnBlbmRpbmdSZXF1ZXN0cy52YWx1ZXMoKSkge1xuICAgICAgLy8gUmVqZWN0IGFsbCBwZW5kaW5nIHJlcXVlc3RzIGlmIHRoZSBpbnB1dCBzdHJlYW1cbiAgICAgIHJlcXVlc3QucmVqZWN0KFxuICAgICAgICBuZXcgRXJyb3IoJ1Rvb2wgcGVybWlzc2lvbiBzdHJlYW0gY2xvc2VkIGJlZm9yZSByZXNwb25zZSByZWNlaXZlZCcpLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFBlbmRpbmdQZXJtaXNzaW9uUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wZW5kaW5nUmVxdWVzdHMudmFsdWVzKCkpXG4gICAgICAubWFwKGVudHJ5ID0+IGVudHJ5LnJlcXVlc3QpXG4gICAgICAuZmlsdGVyKHByID0+IHByLnJlcXVlc3Quc3VidHlwZSA9PT0gJ2Nhbl91c2VfdG9vbCcpXG4gIH1cblxuICBzZXRVbmV4cGVjdGVkUmVzcG9uc2VDYWxsYmFjayhcbiAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTREtDb250cm9sUmVzcG9uc2UpID0+IFByb21pc2U8dm9pZD4sXG4gICk6IHZvaWQge1xuICAgIHRoaXMudW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2sgPSBjYWxsYmFja1xuICB9XG5cbiAgLyoqXG4gICAqIEluamVjdCBhIGNvbnRyb2xfcmVzcG9uc2UgbWVzc2FnZSB0byByZXNvbHZlIGEgcGVuZGluZyBwZXJtaXNzaW9uIHJlcXVlc3QuXG4gICAqIFVzZWQgYnkgdGhlIGJyaWRnZSB0byBmZWVkIHBlcm1pc3Npb24gcmVzcG9uc2VzIGZyb20gY2xhdWRlLmFpIGludG8gdGhlXG4gICAqIFNESyBwZXJtaXNzaW9uIGZsb3cuXG4gICAqXG4gICAqIEFsc28gc2VuZHMgYSBjb250cm9sX2NhbmNlbF9yZXF1ZXN0IHRvIHRoZSBTREsgY29uc3VtZXIgc28gaXRzIGNhblVzZVRvb2xcbiAgICogY2FsbGJhY2sgaXMgYWJvcnRlZCB2aWEgdGhlIHNpZ25hbCBcdTIwMTQgb3RoZXJ3aXNlIHRoZSBjYWxsYmFjayBoYW5ncy5cbiAgICovXG4gIGluamVjdENvbnRyb2xSZXNwb25zZShyZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gcmVzcG9uc2UucmVzcG9uc2U/LnJlcXVlc3RfaWRcbiAgICBpZiAoIXJlcXVlc3RJZCkgcmV0dXJuXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMucGVuZGluZ1JlcXVlc3RzLmdldChyZXF1ZXN0SWQpXG4gICAgaWYgKCFyZXF1ZXN0KSByZXR1cm5cbiAgICB0aGlzLnRyYWNrUmVzb2x2ZWRUb29sVXNlSWQocmVxdWVzdC5yZXF1ZXN0KVxuICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0SWQpXG4gICAgLy8gQ2FuY2VsIHRoZSBTREsgY29uc3VtZXIncyBjYW5Vc2VUb29sIGNhbGxiYWNrIFx1MjAxNCB0aGUgYnJpZGdlIHdvbi5cbiAgICB2b2lkIHRoaXMud3JpdGUoe1xuICAgICAgdHlwZTogJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnLFxuICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgIH0pXG4gICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlLnN1YnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHJlcXVlc3QucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5yZXNwb25zZS5lcnJvcikpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3BvbnNlLnJlc3BvbnNlXG4gICAgICBpZiAocmVxdWVzdC5zY2hlbWEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXF1ZXN0LnJlc29sdmUocmVxdWVzdC5zY2hlbWEucGFyc2UocmVzdWx0KSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXF1ZXN0LnJlamVjdChlcnJvcilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5yZXNvbHZlKHt9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGludm9rZWQgd2hlbmV2ZXIgYSBjYW5fdXNlX3Rvb2wgY29udHJvbF9yZXF1ZXN0XG4gICAqIGlzIHdyaXR0ZW4gdG8gc3Rkb3V0LiBVc2VkIGJ5IHRoZSBicmlkZ2UgdG8gZm9yd2FyZCBwZXJtaXNzaW9uXG4gICAqIHJlcXVlc3RzIHRvIGNsYXVkZS5haS5cbiAgICovXG4gIHNldE9uQ29udHJvbFJlcXVlc3RTZW50KFxuICAgIGNhbGxiYWNrOiAoKHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0U2VudCA9IGNhbGxiYWNrXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayBpbnZva2VkIHdoZW4gYSBjYW5fdXNlX3Rvb2wgY29udHJvbF9yZXNwb25zZSBhcnJpdmVzXG4gICAqIGZyb20gdGhlIFNESyBjb25zdW1lciAodmlhIHN0ZGluKS4gVXNlZCBieSB0aGUgYnJpZGdlIHRvIGNhbmNlbCB0aGVcbiAgICogc3RhbGUgcGVybWlzc2lvbiBwcm9tcHQgb24gY2xhdWRlLmFpIHdoZW4gdGhlIFNESyBjb25zdW1lciB3aW5zIHRoZSByYWNlLlxuICAgKi9cbiAgc2V0T25Db250cm9sUmVxdWVzdFJlc29sdmVkKFxuICAgIGNhbGxiYWNrOiAoKHJlcXVlc3RJZDogc3RyaW5nKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0UmVzb2x2ZWQgPSBjYWxsYmFja1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcm9jZXNzTGluZShcbiAgICBsaW5lOiBzdHJpbmcsXG4gICk6IFByb21pc2U8U3RkaW5NZXNzYWdlIHwgU0RLTWVzc2FnZSB8IHVuZGVmaW5lZD4ge1xuICAgIC8vIFNraXAgZW1wdHkgbGluZXMgKGUuZy4gZnJvbSBkb3VibGUgbmV3bGluZXMgaW4gcGlwZWQgc3RkaW4pXG4gICAgaWYgKCFsaW5lKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbm9ybWFsaXplQ29udHJvbE1lc3NhZ2VLZXlzKGpzb25QYXJzZShsaW5lKSkgYXNcbiAgICAgICAgfCBTdGRpbk1lc3NhZ2VcbiAgICAgICAgfCBTREtNZXNzYWdlXG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAna2VlcF9hbGl2ZScpIHtcbiAgICAgICAgLy8gU2lsZW50bHkgaWdub3JlIGtlZXAtYWxpdmUgbWVzc2FnZXNcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3VwZGF0ZV9lbnZpcm9ubWVudF92YXJpYWJsZXMnKSB7XG4gICAgICAgIC8vIEFwcGx5IGVudmlyb25tZW50IHZhcmlhYmxlIHVwZGF0ZXMgZGlyZWN0bHkgdG8gcHJvY2Vzcy5lbnYuXG4gICAgICAgIC8vIFVzZWQgYnkgYnJpZGdlIHNlc3Npb24gcnVubmVyIGZvciBhdXRoIHRva2VuIHJlZnJlc2hcbiAgICAgICAgLy8gKENMQVVERV9DT0RFX1NFU1NJT05fQUNDRVNTX1RPS0VOKSB3aGljaCBtdXN0IGJlIHJlYWRhYmxlXG4gICAgICAgIC8vIGJ5IHRoZSBSRVBMIHByb2Nlc3MgaXRzZWxmLCBub3QganVzdCBjaGlsZCBCYXNoIGNvbW1hbmRzLlxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobWVzc2FnZS52YXJpYWJsZXMpXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2UudmFyaWFibGVzKSkge1xuICAgICAgICAgIHByb2Nlc3MuZW52W2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW3N0cnVjdHVyZWRJT10gYXBwbGllZCB1cGRhdGVfZW52aXJvbm1lbnRfdmFyaWFibGVzOiAke2tleXMuam9pbignLCAnKX1gLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjb250cm9sX3Jlc3BvbnNlJykge1xuICAgICAgICAvLyBDbG9zZSBsaWZlY3ljbGUgZm9yIGV2ZXJ5IGNvbnRyb2xfcmVzcG9uc2UsIGluY2x1ZGluZyBkdXBsaWNhdGVzXG4gICAgICAgIC8vIGFuZCBvcnBoYW5zIFx1MjAxNCBvcnBoYW5zIGRvbid0IHlpZWxkIHRvIHByaW50LnRzJ3MgbWFpbiBsb29wLCBzbyB0aGlzXG4gICAgICAgIC8vIGlzIHRoZSBvbmx5IHBhdGggdGhhdCBzZWVzIHRoZW0uIHV1aWQgaXMgc2VydmVyLWluamVjdGVkIGludG8gdGhlXG4gICAgICAgIC8vIHBheWxvYWQuXG4gICAgICAgIGNvbnN0IHV1aWQgPVxuICAgICAgICAgICd1dWlkJyBpbiBtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlLnV1aWQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG1lc3NhZ2UudXVpZFxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgaWYgKHV1aWQpIHtcbiAgICAgICAgICBub3RpZnlDb21tYW5kTGlmZWN5Y2xlKHV1aWQsICdjb21wbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnBlbmRpbmdSZXF1ZXN0cy5nZXQobWVzc2FnZS5yZXNwb25zZS5yZXF1ZXN0X2lkKVxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHRvb2xfdXNlIHdhcyBhbHJlYWR5IHJlc29sdmVkIHRocm91Z2ggdGhlIG5vcm1hbFxuICAgICAgICAgIC8vIHBlcm1pc3Npb24gZmxvdy4gRHVwbGljYXRlIGNvbnRyb2xfcmVzcG9uc2UgZGVsaXZlcmllcyAoZS5nLiBmcm9tXG4gICAgICAgICAgLy8gV2ViU29ja2V0IHJlY29ubmVjdHMpIGFycml2ZSBhZnRlciB0aGUgb3JpZ2luYWwgd2FzIGhhbmRsZWQsIGFuZFxuICAgICAgICAgIC8vIHJlLXByb2Nlc3NpbmcgdGhlbSB3b3VsZCBwdXNoIGR1cGxpY2F0ZSBhc3Npc3RhbnQgbWVzc2FnZXMgaW50b1xuICAgICAgICAgIC8vIHRoZSBjb252ZXJzYXRpb24sIGNhdXNpbmcgQVBJIDQwMCBlcnJvcnMuXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VQYXlsb2FkID1cbiAgICAgICAgICAgIG1lc3NhZ2UucmVzcG9uc2Uuc3VidHlwZSA9PT0gJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgID8gbWVzc2FnZS5yZXNwb25zZS5yZXNwb25zZVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIGNvbnN0IHRvb2xVc2VJRCA9IHJlc3BvbnNlUGF5bG9hZD8udG9vbFVzZUlEXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHRvb2xVc2VJRCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRUb29sVXNlSWRzLmhhcyh0b29sVXNlSUQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBJZ25vcmluZyBkdXBsaWNhdGUgY29udHJvbF9yZXNwb25zZSBmb3IgYWxyZWFkeS1yZXNvbHZlZCB0b29sVXNlSUQ9JHt0b29sVXNlSUR9IHJlcXVlc3RfaWQ9JHttZXNzYWdlLnJlc3BvbnNlLnJlcXVlc3RfaWR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMudW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudW5leHBlY3RlZFJlc3BvbnNlQ2FsbGJhY2sobWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJZ25vcmUgcmVzcG9uc2VzIGZvciByZXF1ZXN0cyB3ZSBkb24ndCBrbm93IGFib3V0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja1Jlc29sdmVkVG9vbFVzZUlkKHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMuZGVsZXRlKG1lc3NhZ2UucmVzcG9uc2UucmVxdWVzdF9pZClcbiAgICAgICAgLy8gTm90aWZ5IHRoZSBicmlkZ2Ugd2hlbiB0aGUgU0RLIGNvbnN1bWVyIHJlc29sdmVzIGEgY2FuX3VzZV90b29sXG4gICAgICAgIC8vIHJlcXVlc3QsIHNvIGl0IGNhbiBjYW5jZWwgdGhlIHN0YWxlIHBlcm1pc3Npb24gcHJvbXB0IG9uIGNsYXVkZS5haS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlcXVlc3QucmVxdWVzdC5yZXF1ZXN0LnN1YnR5cGUgPT09ICdjYW5fdXNlX3Rvb2wnICYmXG4gICAgICAgICAgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0UmVzb2x2ZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5vbkNvbnRyb2xSZXF1ZXN0UmVzb2x2ZWQobWVzc2FnZS5yZXNwb25zZS5yZXF1ZXN0X2lkKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UucmVzcG9uc2Uuc3VidHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIHJlcXVlc3QucmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlLnJlc3BvbnNlLmVycm9yKSlcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWVzc2FnZS5yZXNwb25zZS5yZXNwb25zZVxuICAgICAgICBpZiAocmVxdWVzdC5zY2hlbWEpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNvbHZlKHJlcXVlc3Quc2NoZW1hLnBhcnNlKHJlc3VsdCkpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVqZWN0KGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXF1ZXN0LnJlc29sdmUoe30pXG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvcGFnYXRlIGNvbnRyb2wgcmVzcG9uc2VzIHdoZW4gcmVwbGF5IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRoaXMucmVwbGF5VXNlck1lc3NhZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ3VzZXInICYmXG4gICAgICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2NvbnRyb2xfcmVxdWVzdCcgJiZcbiAgICAgICAgbWVzc2FnZS50eXBlICE9PSAnYXNzaXN0YW50JyAmJlxuICAgICAgICBtZXNzYWdlLnR5cGUgIT09ICdzeXN0ZW0nXG4gICAgICApIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBJZ25vcmluZyB1bmtub3duIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9YCwge1xuICAgICAgICAgIGxldmVsOiAnd2FybicsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjb250cm9sX3JlcXVlc3QnKSB7XG4gICAgICAgIGlmICghbWVzc2FnZS5yZXF1ZXN0KSB7XG4gICAgICAgICAgZXhpdFdpdGhNZXNzYWdlKGBFcnJvcjogTWlzc2luZyByZXF1ZXN0IG9uIGNvbnRyb2xfcmVxdWVzdGApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdhc3Npc3RhbnQnIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2Uucm9sZSAhPT0gJ3VzZXInKSB7XG4gICAgICAgIGV4aXRXaXRoTWVzc2FnZShcbiAgICAgICAgICBgRXJyb3I6IEV4cGVjdGVkIG1lc3NhZ2Ugcm9sZSAndXNlcicsIGdvdCAnJHttZXNzYWdlLm1lc3NhZ2Uucm9sZX0nYCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBzdHJlYW1pbmcgaW5wdXQgbGluZTogJHtsaW5lfTogJHtlcnJvcn1gKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHdyaXRlKG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB3cml0ZVRvU3Rkb3V0KG5kanNvblNhZmVTdHJpbmdpZnkobWVzc2FnZSkgKyAnXFxuJylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZFJlcXVlc3Q8UmVzcG9uc2U+KFxuICAgIHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0WydyZXF1ZXN0J10sXG4gICAgc2NoZW1hOiB6LlNjaGVtYSxcbiAgICBzaWduYWw/OiBBYm9ydFNpZ25hbCxcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyA9IHJhbmRvbVVVSUQoKSxcbiAgKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFNES0NvbnRyb2xSZXF1ZXN0ID0ge1xuICAgICAgdHlwZTogJ2NvbnRyb2xfcmVxdWVzdCcsXG4gICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICByZXF1ZXN0LFxuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dENsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW0gY2xvc2VkJylcbiAgICB9XG4gICAgaWYgKHNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKVxuICAgIH1cbiAgICB0aGlzLm91dGJvdW5kLmVucXVldWUobWVzc2FnZSlcbiAgICBpZiAocmVxdWVzdC5zdWJ0eXBlID09PSAnY2FuX3VzZV90b29sJyAmJiB0aGlzLm9uQ29udHJvbFJlcXVlc3RTZW50KSB7XG4gICAgICB0aGlzLm9uQ29udHJvbFJlcXVlc3RTZW50KG1lc3NhZ2UpXG4gICAgfVxuICAgIGNvbnN0IGFib3J0ZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm91dGJvdW5kLmVucXVldWUoe1xuICAgICAgICB0eXBlOiAnY29udHJvbF9jYW5jZWxfcmVxdWVzdCcsXG4gICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgIH0pXG4gICAgICAvLyBJbW1lZGlhdGVseSByZWplY3QgdGhlIG91dHN0YW5kaW5nIHByb21pc2UsIHdpdGhvdXRcbiAgICAgIC8vIHdhaXRpbmcgZm9yIHRoZSBob3N0IHRvIGFja25vd2xlZGdlIHRoZSBjYW5jZWxsYXRpb24uXG4gICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5wZW5kaW5nUmVxdWVzdHMuZ2V0KHJlcXVlc3RJZClcbiAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgIC8vIFRyYWNrIHRoZSB0b29sX3VzZSBJRCBhcyByZXNvbHZlZCBiZWZvcmUgcmVqZWN0aW5nLCBzbyB0aGF0IGFcbiAgICAgICAgLy8gbGF0ZSByZXNwb25zZSBmcm9tIHRoZSBob3N0IGlzIGlnbm9yZWQgYnkgdGhlIG9ycGhhbiBoYW5kbGVyLlxuICAgICAgICB0aGlzLnRyYWNrUmVzb2x2ZWRUb29sVXNlSWQocmVxdWVzdC5yZXF1ZXN0KVxuICAgICAgICByZXF1ZXN0LnJlamVjdChuZXcgQWJvcnRFcnJvcigpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2lnbmFsKSB7XG4gICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydGVkLCB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLnNldChyZXF1ZXN0SWQsIHtcbiAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICB0eXBlOiAnY29udHJvbF9yZXF1ZXN0JyxcbiAgICAgICAgICAgIHJlcXVlc3RfaWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNvbHZlOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQgYXMgUmVzcG9uc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgc2NoZW1hLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydGVkKVxuICAgICAgfVxuICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDYW5Vc2VUb29sKFxuICAgIG9uUGVybWlzc2lvblByb21wdD86IChkZXRhaWxzOiBSZXF1aXJlc0FjdGlvbkRldGFpbHMpID0+IHZvaWQsXG4gICk6IENhblVzZVRvb2xGbiB7XG4gICAgcmV0dXJuIGFzeW5jIChcbiAgICAgIHRvb2w6IFRvb2wsXG4gICAgICBpbnB1dDogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sXG4gICAgICB0b29sVXNlQ29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4gICAgICBhc3Npc3RhbnRNZXNzYWdlOiBBc3Npc3RhbnRNZXNzYWdlLFxuICAgICAgdG9vbFVzZUlEOiBzdHJpbmcsXG4gICAgICBmb3JjZURlY2lzaW9uPzogUGVybWlzc2lvbkRlY2lzaW9uLFxuICAgICk6IFByb21pc2U8UGVybWlzc2lvbkRlY2lzaW9uPiA9PiB7XG4gICAgICBjb25zdCBtYWluUGVybWlzc2lvblJlc3VsdCA9XG4gICAgICAgIGZvcmNlRGVjaXNpb24gPz9cbiAgICAgICAgKGF3YWl0IGhhc1Blcm1pc3Npb25zVG9Vc2VUb29sKFxuICAgICAgICAgIHRvb2wsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgICAgYXNzaXN0YW50TWVzc2FnZSxcbiAgICAgICAgICB0b29sVXNlSUQsXG4gICAgICAgICkpXG4gICAgICAvLyBJZiB0aGUgdG9vbCBpcyBhbGxvd2VkIG9yIGRlbmllZCwgcmV0dXJuIHRoZSByZXN1bHRcbiAgICAgIGlmIChcbiAgICAgICAgbWFpblBlcm1pc3Npb25SZXN1bHQuYmVoYXZpb3IgPT09ICdhbGxvdycgfHxcbiAgICAgICAgbWFpblBlcm1pc3Npb25SZXN1bHQuYmVoYXZpb3IgPT09ICdkZW55J1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBtYWluUGVybWlzc2lvblJlc3VsdFxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gUGVybWlzc2lvblJlcXVlc3QgaG9va3MgaW4gcGFyYWxsZWwgd2l0aCB0aGUgU0RLIHBlcm1pc3Npb25cbiAgICAgIC8vIHByb21wdC4gIEluIHRoZSB0ZXJtaW5hbCBDTEksIGhvb2tzIHJhY2UgYWdhaW5zdCB0aGUgaW50ZXJhY3RpdmVcbiAgICAgIC8vIHByb21wdCBzbyB0aGF0IGUuZy4gYSBob29rIHdpdGggLS1kZWxheSAyMCBkb2Vzbid0IGJsb2NrIHRoZSBVSS5cbiAgICAgIC8vIFdlIG5lZWQgdGhlIHNhbWUgYmVoYXZpb3IgaGVyZTogdGhlIFNESyBob3N0IChWUyBDb2RlLCBldGMuKSBzaG93c1xuICAgICAgLy8gaXRzIHBlcm1pc3Npb24gZGlhbG9nIGltbWVkaWF0ZWx5IHdoaWxlIGhvb2tzIHJ1biBpbiB0aGUgYmFja2dyb3VuZC5cbiAgICAgIC8vIFdoaWNoZXZlciByZXNvbHZlcyBmaXJzdCB3aW5zOyB0aGUgbG9zZXIgaXMgY2FuY2VsbGVkL2lnbm9yZWQuXG5cbiAgICAgIC8vIEFib3J0Q29udHJvbGxlciB1c2VkIHRvIGNhbmNlbCB0aGUgU0RLIHJlcXVlc3QgaWYgYSBob29rIGRlY2lkZXMgZmlyc3RcbiAgICAgIGNvbnN0IGhvb2tBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgIGNvbnN0IHBhcmVudFNpZ25hbCA9IHRvb2xVc2VDb250ZXh0LmFib3J0Q29udHJvbGxlci5zaWduYWxcbiAgICAgIC8vIEZvcndhcmQgcGFyZW50IGFib3J0IHRvIG91ciBsb2NhbCBjb250cm9sbGVyXG4gICAgICBjb25zdCBvblBhcmVudEFib3J0ID0gKCkgPT4gaG9va0Fib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gICAgICBwYXJlbnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvblBhcmVudEFib3J0LCB7IG9uY2U6IHRydWUgfSlcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gU3RhcnQgdGhlIGhvb2sgZXZhbHVhdGlvbiAocnVucyBpbiBiYWNrZ3JvdW5kKVxuICAgICAgICBjb25zdCBob29rUHJvbWlzZSA9IGV4ZWN1dGVQZXJtaXNzaW9uUmVxdWVzdEhvb2tzRm9yU0RLKFxuICAgICAgICAgIHRvb2wubmFtZSxcbiAgICAgICAgICB0b29sVXNlSUQsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgICAgbWFpblBlcm1pc3Npb25SZXN1bHQuc3VnZ2VzdGlvbnMsXG4gICAgICAgICkudGhlbihkZWNpc2lvbiA9PiAoeyBzb3VyY2U6ICdob29rJyBhcyBjb25zdCwgZGVjaXNpb24gfSkpXG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIFNESyBwZXJtaXNzaW9uIHByb21wdCBpbW1lZGlhdGVseSAoZG9uJ3Qgd2FpdCBmb3IgaG9va3MpXG4gICAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IHJhbmRvbVVVSUQoKVxuICAgICAgICBvblBlcm1pc3Npb25Qcm9tcHQ/LihcbiAgICAgICAgICBidWlsZFJlcXVpcmVzQWN0aW9uRGV0YWlscyh0b29sLCBpbnB1dCwgdG9vbFVzZUlELCByZXF1ZXN0SWQpLFxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHNka1Byb21pc2UgPSB0aGlzLnNlbmRSZXF1ZXN0PFBlcm1pc3Npb25Ub29sT3V0cHV0PihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0eXBlOiAnY2FuX3VzZV90b29sJyxcbiAgICAgICAgICAgIHRvb2xfbmFtZTogdG9vbC5uYW1lLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uX3N1Z2dlc3Rpb25zOiBtYWluUGVybWlzc2lvblJlc3VsdC5zdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGJsb2NrZWRfcGF0aDogbWFpblBlcm1pc3Npb25SZXN1bHQuYmxvY2tlZFBhdGgsXG4gICAgICAgICAgICBkZWNpc2lvbl9yZWFzb246IHNlcmlhbGl6ZURlY2lzaW9uUmVhc29uKFxuICAgICAgICAgICAgICBtYWluUGVybWlzc2lvblJlc3VsdC5kZWNpc2lvblJlYXNvbixcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0b29sX3VzZV9pZDogdG9vbFVzZUlELFxuICAgICAgICAgICAgYWdlbnRfaWQ6IHRvb2xVc2VDb250ZXh0LmFnZW50SWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwZXJtaXNzaW9uVG9vbE91dHB1dFNjaGVtYSgpLFxuICAgICAgICAgIGhvb2tBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgKS50aGVuKHJlc3VsdCA9PiAoeyBzb3VyY2U6ICdzZGsnIGFzIGNvbnN0LCByZXN1bHQgfSkpXG5cbiAgICAgICAgLy8gUmFjZTogaG9vayBjb21wbGV0aW9uIHZzIFNESyBwcm9tcHQgcmVzcG9uc2UuXG4gICAgICAgIC8vIFRoZSBob29rIHByb21pc2UgYWx3YXlzIHJlc29sdmVzIChuZXZlciByZWplY3RzKSwgcmV0dXJuaW5nXG4gICAgICAgIC8vIHVuZGVmaW5lZCBpZiBubyBob29rIG1hZGUgYSBkZWNpc2lvbi5cbiAgICAgICAgY29uc3Qgd2lubmVyID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtob29rUHJvbWlzZSwgc2RrUHJvbWlzZV0pXG5cbiAgICAgICAgaWYgKHdpbm5lci5zb3VyY2UgPT09ICdob29rJykge1xuICAgICAgICAgIGlmICh3aW5uZXIuZGVjaXNpb24pIHtcbiAgICAgICAgICAgIC8vIEhvb2sgZGVjaWRlZCBcdTIwMTQgYWJvcnQgdGhlIHBlbmRpbmcgU0RLIHJlcXVlc3QuXG4gICAgICAgICAgICAvLyBTdXBwcmVzcyB0aGUgZXhwZWN0ZWQgQWJvcnRFcnJvciByZWplY3Rpb24gZnJvbSBzZGtQcm9taXNlLlxuICAgICAgICAgICAgc2RrUHJvbWlzZS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgIGhvb2tBYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lci5kZWNpc2lvblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIb29rIHBhc3NlZCB0aHJvdWdoIChubyBkZWNpc2lvbikgXHUyMDE0IHdhaXQgZm9yIHRoZSBTREsgcHJvbXB0XG4gICAgICAgICAgY29uc3Qgc2RrUmVzdWx0ID0gYXdhaXQgc2RrUHJvbWlzZVxuICAgICAgICAgIHJldHVybiBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uKFxuICAgICAgICAgICAgc2RrUmVzdWx0LnJlc3VsdCxcbiAgICAgICAgICAgIHRvb2wsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNESyBwcm9tcHQgcmVzcG9uZGVkIGZpcnN0IFx1MjAxNCB1c2UgaXRzIHJlc3VsdCAoaG9vayBzdGlsbCBydW5uaW5nXG4gICAgICAgIC8vIGluIGJhY2tncm91bmQgYnV0IGl0cyByZXN1bHQgd2lsbCBiZSBpZ25vcmVkKVxuICAgICAgICByZXR1cm4gcGVybWlzc2lvblByb21wdFRvb2xSZXN1bHRUb1Blcm1pc3Npb25EZWNpc2lvbihcbiAgICAgICAgICB3aW5uZXIucmVzdWx0LFxuICAgICAgICAgIHRvb2wsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgdG9vbFVzZUNvbnRleHQsXG4gICAgICAgIClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBwZXJtaXNzaW9uUHJvbXB0VG9vbFJlc3VsdFRvUGVybWlzc2lvbkRlY2lzaW9uKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnZGVueScsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVG9vbCBwZXJtaXNzaW9uIHJlcXVlc3QgZmFpbGVkOiAke2Vycm9yfWAsXG4gICAgICAgICAgICB0b29sVXNlSUQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b29sLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHRvb2xVc2VDb250ZXh0LFxuICAgICAgICApXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBPbmx5IHRyYW5zaXRpb24gYmFjayB0byAncnVubmluZycgaWYgbm8gb3RoZXIgcGVybWlzc2lvbiBwcm9tcHRzXG4gICAgICAgIC8vIGFyZSBwZW5kaW5nIChjb25jdXJyZW50IHRvb2wgZXhlY3V0aW9uIGNhbiBoYXZlIG11bHRpcGxlIGluLWZsaWdodCkuXG4gICAgICAgIGlmICh0aGlzLmdldFBlbmRpbmdQZXJtaXNzaW9uUmVxdWVzdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBub3RpZnlTZXNzaW9uU3RhdGVDaGFuZ2VkKCdydW5uaW5nJylcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvblBhcmVudEFib3J0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhvb2tDYWxsYmFjayhjYWxsYmFja0lkOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBIb29rQ2FsbGJhY2sge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnY2FsbGJhY2snLFxuICAgICAgdGltZW91dCxcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoXG4gICAgICAgIGlucHV0OiBIb29rSW5wdXQsXG4gICAgICAgIHRvb2xVc2VJRDogc3RyaW5nIHwgbnVsbCxcbiAgICAgICAgYWJvcnQ6IEFib3J0U2lnbmFsIHwgdW5kZWZpbmVkLFxuICAgICAgKTogUHJvbWlzZTxIb29rSlNPTk91dHB1dD4gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VuZFJlcXVlc3Q8SG9va0pTT05PdXRwdXQ+KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaG9va19jYWxsYmFjaycsXG4gICAgICAgICAgICAgIGNhbGxiYWNrX2lkOiBjYWxsYmFja0lkLFxuICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgdG9vbF91c2VfaWQ6IHRvb2xVc2VJRCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9va0pTT05PdXRwdXRTY2hlbWEoKSxcbiAgICAgICAgICAgIGFib3J0LFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGhvb2sgY2FsbGJhY2sgJHtjYWxsYmFja0lkfTpgLCBlcnJvcilcbiAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZWxpY2l0YXRpb24gcmVxdWVzdCB0byB0aGUgU0RLIGNvbnN1bWVyIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cbiAgICovXG4gIGFzeW5jIGhhbmRsZUVsaWNpdGF0aW9uKFxuICAgIHNlcnZlck5hbWU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgcmVxdWVzdGVkU2NoZW1hPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgc2lnbmFsPzogQWJvcnRTaWduYWwsXG4gICAgbW9kZT86ICdmb3JtJyB8ICd1cmwnLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBlbGljaXRhdGlvbklkPzogc3RyaW5nLFxuICApOiBQcm9taXNlPEVsaWNpdFJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PEVsaWNpdFJlc3VsdD4oXG4gICAgICAgIHtcbiAgICAgICAgICBzdWJ0eXBlOiAnZWxpY2l0YXRpb24nLFxuICAgICAgICAgIG1jcF9zZXJ2ZXJfbmFtZTogc2VydmVyTmFtZSxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGVsaWNpdGF0aW9uX2lkOiBlbGljaXRhdGlvbklkLFxuICAgICAgICAgIHJlcXVlc3RlZF9zY2hlbWE6IHJlcXVlc3RlZFNjaGVtYSxcbiAgICAgICAgfSxcbiAgICAgICAgU0RLQ29udHJvbEVsaWNpdGF0aW9uUmVzcG9uc2VTY2hlbWEoKSxcbiAgICAgICAgc2lnbmFsLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHsgYWN0aW9uOiAnY2FuY2VsJyBhcyBjb25zdCB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBTYW5kYm94QXNrQ2FsbGJhY2sgdGhhdCBmb3J3YXJkcyBzYW5kYm94IG5ldHdvcmsgcGVybWlzc2lvblxuICAgKiByZXF1ZXN0cyB0byB0aGUgU0RLIGhvc3QgYXMgY2FuX3VzZV90b29sIGNvbnRyb2xfcmVxdWVzdHMuXG4gICAqXG4gICAqIFRoaXMgcGlnZ3liYWNrcyBvbiB0aGUgZXhpc3RpbmcgY2FuX3VzZV90b29sIHByb3RvY29sIHdpdGggYSBzeW50aGV0aWNcbiAgICogdG9vbCBuYW1lIHNvIHRoYXQgU0RLIGhvc3RzIChWUyBDb2RlLCBDQ1IsIGV0Yy4pIGNhbiBwcm9tcHQgdGhlIHVzZXJcbiAgICogZm9yIG5ldHdvcmsgYWNjZXNzIHdpdGhvdXQgcmVxdWlyaW5nIGEgbmV3IHByb3RvY29sIHN1YnR5cGUuXG4gICAqL1xuICBjcmVhdGVTYW5kYm94QXNrQ2FsbGJhY2soKTogKGhvc3RQYXR0ZXJuOiB7XG4gICAgaG9zdDogc3RyaW5nXG4gICAgcG9ydD86IG51bWJlclxuICB9KSA9PiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gYXN5bmMgKGhvc3RQYXR0ZXJuKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PFBlcm1pc3Npb25Ub29sT3V0cHV0PihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0eXBlOiAnY2FuX3VzZV90b29sJyxcbiAgICAgICAgICAgIHRvb2xfbmFtZTogU0FOREJPWF9ORVRXT1JLX0FDQ0VTU19UT09MX05BTUUsXG4gICAgICAgICAgICBpbnB1dDogeyBob3N0OiBob3N0UGF0dGVybi5ob3N0IH0sXG4gICAgICAgICAgICB0b29sX3VzZV9pZDogcmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBbGxvdyBuZXR3b3JrIGNvbm5lY3Rpb24gdG8gJHtob3N0UGF0dGVybi5ob3N0fT9gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGVybWlzc2lvblRvb2xPdXRwdXRTY2hlbWEoKSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcmVzdWx0LmJlaGF2aW9yID09PSAnYWxsb3cnXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgZmFpbHMgKHN0cmVhbSBjbG9zZWQsIGFib3J0LCBldGMuKSwgZGVueSB0aGUgY29ubmVjdGlvblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gTUNQIG1lc3NhZ2UgdG8gYW4gU0RLIHNlcnZlciBhbmQgd2FpdHMgZm9yIHRoZSByZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgc2VuZE1jcE1lc3NhZ2UoXG4gICAgc2VydmVyTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IEpTT05SUENNZXNzYWdlLFxuICApOiBQcm9taXNlPEpTT05SUENNZXNzYWdlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PHsgbWNwX3Jlc3BvbnNlOiBKU09OUlBDTWVzc2FnZSB9PihcbiAgICAgIHtcbiAgICAgICAgc3VidHlwZTogJ21jcF9tZXNzYWdlJyxcbiAgICAgICAgc2VydmVyX25hbWU6IHNlcnZlck5hbWUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9LFxuICAgICAgei5vYmplY3Qoe1xuICAgICAgICBtY3BfcmVzcG9uc2U6IHouYW55KCkgYXMgei5TY2hlbWE8SlNPTlJQQ01lc3NhZ2U+LFxuICAgICAgfSksXG4gICAgKVxuICAgIHJldHVybiByZXNwb25zZS5tY3BfcmVzcG9uc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBleGl0V2l0aE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xuICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gIGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG5cbi8qKlxuICogRXhlY3V0ZSBQZXJtaXNzaW9uUmVxdWVzdCBob29rcyBhbmQgcmV0dXJuIGEgZGVjaXNpb24gaWYgb25lIGlzIG1hZGUuXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBubyBob29rIG1hZGUgYSBkZWNpc2lvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVBlcm1pc3Npb25SZXF1ZXN0SG9va3NGb3JTREsoXG4gIHRvb2xOYW1lOiBzdHJpbmcsXG4gIHRvb2xVc2VJRDogc3RyaW5nLFxuICBpbnB1dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIHRvb2xVc2VDb250ZXh0OiBUb29sVXNlQ29udGV4dCxcbiAgc3VnZ2VzdGlvbnM6IFBlcm1pc3Npb25VcGRhdGVbXSB8IHVuZGVmaW5lZCxcbik6IFByb21pc2U8UGVybWlzc2lvbkRlY2lzaW9uIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGFwcFN0YXRlID0gdG9vbFVzZUNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuICBjb25zdCBwZXJtaXNzaW9uTW9kZSA9IGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dC5tb2RlXG5cbiAgLy8gSXRlcmF0ZSBkaXJlY3RseSBvdmVyIHRoZSBnZW5lcmF0b3IgaW5zdGVhZCBvZiB1c2luZyBgYWxsYFxuICBjb25zdCBob29rR2VuZXJhdG9yID0gZXhlY3V0ZVBlcm1pc3Npb25SZXF1ZXN0SG9va3MoXG4gICAgdG9vbE5hbWUsXG4gICAgdG9vbFVzZUlELFxuICAgIGlucHV0LFxuICAgIHRvb2xVc2VDb250ZXh0LFxuICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgIHN1Z2dlc3Rpb25zLFxuICAgIHRvb2xVc2VDb250ZXh0LmFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gIClcblxuICBmb3IgYXdhaXQgKGNvbnN0IGhvb2tSZXN1bHQgb2YgaG9va0dlbmVyYXRvcikge1xuICAgIGlmIChcbiAgICAgIGhvb2tSZXN1bHQucGVybWlzc2lvblJlcXVlc3RSZXN1bHQgJiZcbiAgICAgIChob29rUmVzdWx0LnBlcm1pc3Npb25SZXF1ZXN0UmVzdWx0LmJlaGF2aW9yID09PSAnYWxsb3cnIHx8XG4gICAgICAgIGhvb2tSZXN1bHQucGVybWlzc2lvblJlcXVlc3RSZXN1bHQuYmVoYXZpb3IgPT09ICdkZW55JylcbiAgICApIHtcbiAgICAgIGNvbnN0IGRlY2lzaW9uID0gaG9va1Jlc3VsdC5wZXJtaXNzaW9uUmVxdWVzdFJlc3VsdFxuICAgICAgaWYgKGRlY2lzaW9uLmJlaGF2aW9yID09PSAnYWxsb3cnKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsSW5wdXQgPSBkZWNpc2lvbi51cGRhdGVkSW5wdXQgfHwgaW5wdXRcblxuICAgICAgICAvLyBBcHBseSBwZXJtaXNzaW9uIHVwZGF0ZXMgaWYgcHJvdmlkZWQgYnkgaG9vayAoXCJhbHdheXMgYWxsb3dcIilcbiAgICAgICAgY29uc3QgcGVybWlzc2lvblVwZGF0ZXMgPSBkZWNpc2lvbi51cGRhdGVkUGVybWlzc2lvbnMgPz8gW11cbiAgICAgICAgaWYgKHBlcm1pc3Npb25VcGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwZXJzaXN0UGVybWlzc2lvblVwZGF0ZXMocGVybWlzc2lvblVwZGF0ZXMpXG4gICAgICAgICAgY29uc3QgY3VycmVudEFwcFN0YXRlID0gdG9vbFVzZUNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZXh0ID0gYXBwbHlQZXJtaXNzaW9uVXBkYXRlcyhcbiAgICAgICAgICAgIGN1cnJlbnRBcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uVXBkYXRlcyxcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gVXBkYXRlIHBlcm1pc3Npb24gY29udGV4dCB2aWEgc2V0QXBwU3RhdGVcbiAgICAgICAgICB0b29sVXNlQ29udGV4dC5zZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2LnRvb2xQZXJtaXNzaW9uQ29udGV4dCA9PT0gdXBkYXRlZENvbnRleHQpIHJldHVybiBwcmV2XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCB0b29sUGVybWlzc2lvbkNvbnRleHQ6IHVwZGF0ZWRDb250ZXh0IH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiZWhhdmlvcjogJ2FsbG93JyxcbiAgICAgICAgICB1cGRhdGVkSW5wdXQ6IGZpbmFsSW5wdXQsXG4gICAgICAgICAgdXNlck1vZGlmaWVkOiBmYWxzZSxcbiAgICAgICAgICBkZWNpc2lvblJlYXNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ2hvb2snLFxuICAgICAgICAgICAgaG9va05hbWU6ICdQZXJtaXNzaW9uUmVxdWVzdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSG9vayBkZW5pZWQgdGhlIHBlcm1pc3Npb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiZWhhdmlvcjogJ2RlbnknLFxuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICBkZWNpc2lvbi5tZXNzYWdlIHx8ICdQZXJtaXNzaW9uIGRlbmllZCBieSBQZXJtaXNzaW9uUmVxdWVzdCBob29rJyxcbiAgICAgICAgICBkZWNpc2lvblJlYXNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ2hvb2snLFxuICAgICAgICAgICAgaG9va05hbWU6ICdQZXJtaXNzaW9uUmVxdWVzdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cbiIsICIvKipcbiAqIFNESyBDb250cm9sIFNjaGVtYXMgLSBab2Qgc2NoZW1hcyBmb3IgdGhlIGNvbnRyb2wgcHJvdG9jb2wuXG4gKlxuICogVGhlc2Ugc2NoZW1hcyBkZWZpbmUgdGhlIGNvbnRyb2wgcHJvdG9jb2wgYmV0d2VlbiBTREsgaW1wbGVtZW50YXRpb25zIGFuZCB0aGUgQ0xJLlxuICogVXNlZCBieSBTREsgYnVpbGRlcnMgKGUuZy4sIFB5dGhvbiBTREspIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIENMSSBwcm9jZXNzLlxuICpcbiAqIFNESyBjb25zdW1lcnMgc2hvdWxkIHVzZSBjb3JlU2NoZW1hcy50cyBpbnN0ZWFkLlxuICovXG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QvdjQnXG5pbXBvcnQgeyBsYXp5U2NoZW1hIH0gZnJvbSAnLi4vLi4vdXRpbHMvbGF6eVNjaGVtYS5qcydcbmltcG9ydCB7XG4gIEFjY291bnRJbmZvU2NoZW1hLFxuICBBZ2VudERlZmluaXRpb25TY2hlbWEsXG4gIEFnZW50SW5mb1NjaGVtYSxcbiAgRmFzdE1vZGVTdGF0ZVNjaGVtYSxcbiAgSG9va0V2ZW50U2NoZW1hLFxuICBIb29rSW5wdXRTY2hlbWEsXG4gIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnRTY2hlbWEsXG4gIE1jcFNlcnZlclN0YXR1c1NjaGVtYSxcbiAgTW9kZWxJbmZvU2NoZW1hLFxuICBQZXJtaXNzaW9uTW9kZVNjaGVtYSxcbiAgUGVybWlzc2lvblVwZGF0ZVNjaGVtYSxcbiAgU0RLTWVzc2FnZVNjaGVtYSxcbiAgU0RLUG9zdFR1cm5TdW1tYXJ5TWVzc2FnZVNjaGVtYSxcbiAgU0RLU3RyZWFtbGluZWRUZXh0TWVzc2FnZVNjaGVtYSxcbiAgU0RLU3RyZWFtbGluZWRUb29sVXNlU3VtbWFyeU1lc3NhZ2VTY2hlbWEsXG4gIFNES1VzZXJNZXNzYWdlU2NoZW1hLFxuICBTbGFzaENvbW1hbmRTY2hlbWEsXG59IGZyb20gJy4vY29yZVNjaGVtYXMuanMnXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVybmFsIFR5cGUgUGxhY2Vob2xkZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEpTT05SUENNZXNzYWdlIGZyb20gQG1vZGVsY29udGV4dHByb3RvY29sL3NkayAtIHRyZWF0IGFzIHVua25vd25cbmV4cG9ydCBjb25zdCBKU09OUlBDTWVzc2FnZVBsYWNlaG9sZGVyID0gbGF6eVNjaGVtYSgoKSA9PiB6LnVua25vd24oKSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSG9vayBDYWxsYmFjayBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgU0RLSG9va0NhbGxiYWNrTWF0Y2hlclNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgbWF0Y2hlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgaG9va0NhbGxiYWNrSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgICAgdGltZW91dDogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdDb25maWd1cmF0aW9uIGZvciBtYXRjaGluZyBhbmQgcm91dGluZyBob29rIGNhbGxiYWNrcy4nKSxcbilcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udHJvbCBSZXF1ZXN0IFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sSW5pdGlhbGl6ZVJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnaW5pdGlhbGl6ZScpLFxuICAgICAgaG9va3M6IHpcbiAgICAgICAgLnJlY29yZChIb29rRXZlbnRTY2hlbWEoKSwgei5hcnJheShTREtIb29rQ2FsbGJhY2tNYXRjaGVyU2NoZW1hKCkpKVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgIHNka01jcFNlcnZlcnM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICAgIGpzb25TY2hlbWE6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5vcHRpb25hbCgpLFxuICAgICAgc3lzdGVtUHJvbXB0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGFnZW50czogei5yZWNvcmQoei5zdHJpbmcoKSwgQWdlbnREZWZpbml0aW9uU2NoZW1hKCkpLm9wdGlvbmFsKCksXG4gICAgICBwcm9tcHRTdWdnZXN0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgIGFnZW50UHJvZ3Jlc3NTdW1tYXJpZXM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnSW5pdGlhbGl6ZXMgdGhlIFNESyBzZXNzaW9uIHdpdGggaG9va3MsIE1DUCBzZXJ2ZXJzLCBhbmQgYWdlbnQgY29uZmlndXJhdGlvbi4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sSW5pdGlhbGl6ZVJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBjb21tYW5kczogei5hcnJheShTbGFzaENvbW1hbmRTY2hlbWEoKSksXG4gICAgICBhZ2VudHM6IHouYXJyYXkoQWdlbnRJbmZvU2NoZW1hKCkpLFxuICAgICAgb3V0cHV0X3N0eWxlOiB6LnN0cmluZygpLFxuICAgICAgYXZhaWxhYmxlX291dHB1dF9zdHlsZXM6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gICAgICBtb2RlbHM6IHouYXJyYXkoTW9kZWxJbmZvU2NoZW1hKCkpLFxuICAgICAgYWNjb3VudDogQWNjb3VudEluZm9TY2hlbWEoKSxcbiAgICAgIHBpZDogelxuICAgICAgICAubnVtYmVyKClcbiAgICAgICAgLm9wdGlvbmFsKClcbiAgICAgICAgLmRlc2NyaWJlKCdAaW50ZXJuYWwgQ0xJIHByb2Nlc3MgUElEIGZvciB0bXV4IHNvY2tldCBpc29sYXRpb24nKSxcbiAgICAgIGZhc3RfbW9kZV9zdGF0ZTogRmFzdE1vZGVTdGF0ZVNjaGVtYSgpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVzcG9uc2UgZnJvbSBzZXNzaW9uIGluaXRpYWxpemF0aW9uIHdpdGggYXZhaWxhYmxlIGNvbW1hbmRzLCBtb2RlbHMsIGFuZCBhY2NvdW50IGluZm8uJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEludGVycnVwdFJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnaW50ZXJydXB0JyksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ0ludGVycnVwdHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGNvbnZlcnNhdGlvbiB0dXJuLicpLFxuKVxuXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUGVybWlzc2lvblJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnY2FuX3VzZV90b29sJyksXG4gICAgICB0b29sX25hbWU6IHouc3RyaW5nKCksXG4gICAgICBpbnB1dDogei5yZWNvcmQoei5zdHJpbmcoKSwgei51bmtub3duKCkpLFxuICAgICAgcGVybWlzc2lvbl9zdWdnZXN0aW9uczogei5hcnJheShQZXJtaXNzaW9uVXBkYXRlU2NoZW1hKCkpLm9wdGlvbmFsKCksXG4gICAgICBibG9ja2VkX3BhdGg6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGRlY2lzaW9uX3JlYXNvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIGRpc3BsYXlfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgdG9vbF91c2VfaWQ6IHouc3RyaW5nKCksXG4gICAgICBhZ2VudF9pZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmVxdWVzdHMgcGVybWlzc2lvbiB0byB1c2UgYSB0b29sIHdpdGggdGhlIGdpdmVuIGlucHV0LicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFNldFBlcm1pc3Npb25Nb2RlUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdzZXRfcGVybWlzc2lvbl9tb2RlJyksXG4gICAgICBtb2RlOiBQZXJtaXNzaW9uTW9kZVNjaGVtYSgpLFxuICAgICAgdWx0cmFwbGFuOiB6XG4gICAgICAgIC5ib29sZWFuKClcbiAgICAgICAgLm9wdGlvbmFsKClcbiAgICAgICAgLmRlc2NyaWJlKCdAaW50ZXJuYWwgQ0NSIHVsdHJhcGxhbiBzZXNzaW9uIG1hcmtlci4nKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnU2V0cyB0aGUgcGVybWlzc2lvbiBtb2RlIGZvciB0b29sIGV4ZWN1dGlvbiBoYW5kbGluZy4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xTZXRNb2RlbFJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnc2V0X21vZGVsJyksXG4gICAgICBtb2RlbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdTZXRzIHRoZSBtb2RlbCB0byB1c2UgZm9yIHN1YnNlcXVlbnQgY29udmVyc2F0aW9uIHR1cm5zLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFNldE1heFRoaW5raW5nVG9rZW5zUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdzZXRfbWF4X3RoaW5raW5nX3Rva2VucycpLFxuICAgICAgbWF4X3RoaW5raW5nX3Rva2Vuczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1NldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRoaW5raW5nIHRva2VucyBmb3IgZXh0ZW5kZWQgdGhpbmtpbmcuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbE1jcFN0YXR1c1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnbWNwX3N0YXR1cycpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdSZXF1ZXN0cyB0aGUgY3VycmVudCBzdGF0dXMgb2YgYWxsIE1DUCBzZXJ2ZXIgY29ubmVjdGlvbnMuJyksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sTWNwU3RhdHVzUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIG1jcFNlcnZlcnM6IHouYXJyYXkoTWNwU2VydmVyU3RhdHVzU2NoZW1hKCkpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1Jlc3BvbnNlIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGFsbCBNQ1Agc2VydmVyIGNvbm5lY3Rpb25zLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xHZXRDb250ZXh0VXNhZ2VSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2dldF9jb250ZXh0X3VzYWdlJyksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVxdWVzdHMgYSBicmVha2Rvd24gb2YgY3VycmVudCBjb250ZXh0IHdpbmRvdyB1c2FnZSBieSBjYXRlZ29yeS4nLFxuICAgICksXG4pXG5cbmNvbnN0IENvbnRleHRDYXRlZ29yeVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgIGNvbG9yOiB6LnN0cmluZygpLFxuICAgIGlzRGVmZXJyZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIH0pLFxuKVxuXG5jb25zdCBDb250ZXh0R3JpZFNxdWFyZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIGNvbG9yOiB6LnN0cmluZygpLFxuICAgIGlzRmlsbGVkOiB6LmJvb2xlYW4oKSxcbiAgICBjYXRlZ29yeU5hbWU6IHouc3RyaW5nKCksXG4gICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgIHBlcmNlbnRhZ2U6IHoubnVtYmVyKCksXG4gICAgc3F1YXJlRnVsbG5lc3M6IHoubnVtYmVyKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbEdldENvbnRleHRVc2FnZVJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBjYXRlZ29yaWVzOiB6LmFycmF5KENvbnRleHRDYXRlZ29yeVNjaGVtYSgpKSxcbiAgICAgIHRvdGFsVG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgbWF4VG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgcmF3TWF4VG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgcGVyY2VudGFnZTogei5udW1iZXIoKSxcbiAgICAgIGdyaWRSb3dzOiB6LmFycmF5KHouYXJyYXkoQ29udGV4dEdyaWRTcXVhcmVTY2hlbWEoKSkpLFxuICAgICAgbW9kZWw6IHouc3RyaW5nKCksXG4gICAgICBtZW1vcnlGaWxlczogei5hcnJheShcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIHBhdGg6IHouc3RyaW5nKCksXG4gICAgICAgICAgdHlwZTogei5zdHJpbmcoKSxcbiAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIG1jcFRvb2xzOiB6LmFycmF5KFxuICAgICAgICB6Lm9iamVjdCh7XG4gICAgICAgICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgICBzZXJ2ZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICBpc0xvYWRlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgZGVmZXJyZWRCdWlsdGluVG9vbHM6IHpcbiAgICAgICAgLmFycmF5KFxuICAgICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgICBpc0xvYWRlZDogei5ib29sZWFuKCksXG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBzeXN0ZW1Ub29sczogelxuICAgICAgICAuYXJyYXkoei5vYmplY3QoeyBuYW1lOiB6LnN0cmluZygpLCB0b2tlbnM6IHoubnVtYmVyKCkgfSkpXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgc3lzdGVtUHJvbXB0U2VjdGlvbnM6IHpcbiAgICAgICAgLmFycmF5KHoub2JqZWN0KHsgbmFtZTogei5zdHJpbmcoKSwgdG9rZW5zOiB6Lm51bWJlcigpIH0pKVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgIGFnZW50czogei5hcnJheShcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIGFnZW50VHlwZTogei5zdHJpbmcoKSxcbiAgICAgICAgICBzb3VyY2U6IHouc3RyaW5nKCksXG4gICAgICAgICAgdG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzbGFzaENvbW1hbmRzOiB6XG4gICAgICAgIC5vYmplY3Qoe1xuICAgICAgICAgIHRvdGFsQ29tbWFuZHM6IHoubnVtYmVyKCksXG4gICAgICAgICAgaW5jbHVkZWRDb21tYW5kczogei5udW1iZXIoKSxcbiAgICAgICAgICB0b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgc2tpbGxzOiB6XG4gICAgICAgIC5vYmplY3Qoe1xuICAgICAgICAgIHRvdGFsU2tpbGxzOiB6Lm51bWJlcigpLFxuICAgICAgICAgIGluY2x1ZGVkU2tpbGxzOiB6Lm51bWJlcigpLFxuICAgICAgICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICBza2lsbEZyb250bWF0dGVyOiB6LmFycmF5KFxuICAgICAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICAgICAgICBzb3VyY2U6IHouc3RyaW5nKCksXG4gICAgICAgICAgICAgIHRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgYXV0b0NvbXBhY3RUaHJlc2hvbGQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICAgIGlzQXV0b0NvbXBhY3RFbmFibGVkOiB6LmJvb2xlYW4oKSxcbiAgICAgIG1lc3NhZ2VCcmVha2Rvd246IHpcbiAgICAgICAgLm9iamVjdCh7XG4gICAgICAgICAgdG9vbENhbGxUb2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgdG9vbFJlc3VsdFRva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICBhdHRhY2htZW50VG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgIGFzc2lzdGFudE1lc3NhZ2VUb2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgdXNlck1lc3NhZ2VUb2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgdG9vbENhbGxzQnlUeXBlOiB6LmFycmF5KFxuICAgICAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICAgICAgICBjYWxsVG9rZW5zOiB6Lm51bWJlcigpLFxuICAgICAgICAgICAgICByZXN1bHRUb2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dGFjaG1lbnRzQnlUeXBlOiB6LmFycmF5KFxuICAgICAgICAgICAgei5vYmplY3QoeyBuYW1lOiB6LnN0cmluZygpLCB0b2tlbnM6IHoubnVtYmVyKCkgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgfSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBhcGlVc2FnZTogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICBpbnB1dF90b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgb3V0cHV0X3Rva2Vuczogei5udW1iZXIoKSxcbiAgICAgICAgICBjYWNoZV9jcmVhdGlvbl9pbnB1dF90b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgICAgY2FjaGVfcmVhZF9pbnB1dF90b2tlbnM6IHoubnVtYmVyKCksXG4gICAgICAgIH0pXG4gICAgICAgIC5udWxsYWJsZSgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ0JyZWFrZG93biBvZiBjdXJyZW50IGNvbnRleHQgd2luZG93IHVzYWdlIGJ5IGNhdGVnb3J5IChzeXN0ZW0gcHJvbXB0LCB0b29scywgbWVzc2FnZXMsIGV0Yy4pLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xSZXdpbmRGaWxlc1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgncmV3aW5kX2ZpbGVzJyksXG4gICAgICB1c2VyX21lc3NhZ2VfaWQ6IHouc3RyaW5nKCksXG4gICAgICBkcnlfcnVuOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdSZXdpbmRzIGZpbGUgY2hhbmdlcyBtYWRlIHNpbmNlIGEgc3BlY2lmaWMgdXNlciBtZXNzYWdlLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJld2luZEZpbGVzUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIGNhblJld2luZDogei5ib29sZWFuKCksXG4gICAgICBlcnJvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgZmlsZXNDaGFuZ2VkOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gICAgICBpbnNlcnRpb25zOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICBkZWxldGlvbnM6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnUmVzdWx0IG9mIGEgcmV3aW5kRmlsZXMgb3BlcmF0aW9uLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbENhbmNlbEFzeW5jTWVzc2FnZVJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnY2FuY2VsX2FzeW5jX21lc3NhZ2UnKSxcbiAgICAgIG1lc3NhZ2VfdXVpZDogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdEcm9wcyBhIHBlbmRpbmcgYXN5bmMgdXNlciBtZXNzYWdlIGZyb20gdGhlIGNvbW1hbmQgcXVldWUgYnkgdXVpZC4gTm8tb3AgaWYgYWxyZWFkeSBkZXF1ZXVlZCBmb3IgZXhlY3V0aW9uLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xDYW5jZWxBc3luY01lc3NhZ2VSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgY2FuY2VsbGVkOiB6LmJvb2xlYW4oKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdSZXN1bHQgb2YgYSBjYW5jZWxfYXN5bmNfbWVzc2FnZSBvcGVyYXRpb24uIGNhbmNlbGxlZD1mYWxzZSBtZWFucyB0aGUgbWVzc2FnZSB3YXMgbm90IGluIHRoZSBxdWV1ZSAoYWxyZWFkeSBkZXF1ZXVlZCBvciBuZXZlciBlbnF1ZXVlZCkuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFNlZWRSZWFkU3RhdGVSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ3NlZWRfcmVhZF9zdGF0ZScpLFxuICAgICAgcGF0aDogei5zdHJpbmcoKSxcbiAgICAgIG10aW1lOiB6Lm51bWJlcigpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1NlZWRzIHRoZSByZWFkRmlsZVN0YXRlIGNhY2hlIHdpdGggYSBwYXRoK210aW1lIGVudHJ5LiBVc2Ugd2hlbiBhIHByaW9yIFJlYWQgd2FzIHJlbW92ZWQgZnJvbSBjb250ZXh0IChlLmcuIGJ5IHNuaXApIHNvIEVkaXQgdmFsaWRhdGlvbiB3b3VsZCBmYWlsIGRlc3BpdGUgdGhlIGNsaWVudCBoYXZpbmcgb2JzZXJ2ZWQgdGhlIFJlYWQuIFRoZSBtdGltZSBsZXRzIHRoZSBDTEkgZGV0ZWN0IGlmIHRoZSBmaWxlIGNoYW5nZWQgc2luY2UgdGhlIHNlZWRlZCBSZWFkIFx1MjAxNCBzYW1lIHN0YWxlbmVzcyBjaGVjayBhcyB0aGUgbm9ybWFsIHBhdGguJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLSG9va0NhbGxiYWNrUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdob29rX2NhbGxiYWNrJyksXG4gICAgICBjYWxsYmFja19pZDogei5zdHJpbmcoKSxcbiAgICAgIGlucHV0OiBIb29rSW5wdXRTY2hlbWEoKSxcbiAgICAgIHRvb2xfdXNlX2lkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ0RlbGl2ZXJzIGEgaG9vayBjYWxsYmFjayB3aXRoIGl0cyBpbnB1dCBkYXRhLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbE1jcE1lc3NhZ2VSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ21jcF9tZXNzYWdlJyksXG4gICAgICBzZXJ2ZXJfbmFtZTogei5zdHJpbmcoKSxcbiAgICAgIG1lc3NhZ2U6IEpTT05SUENNZXNzYWdlUGxhY2Vob2xkZXIoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZSgnU2VuZHMgYSBKU09OLVJQQyBtZXNzYWdlIHRvIGEgc3BlY2lmaWMgTUNQIHNlcnZlci4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdtY3Bfc2V0X3NlcnZlcnMnKSxcbiAgICAgIHNlcnZlcnM6IHoucmVjb3JkKHouc3RyaW5nKCksIE1jcFNlcnZlckNvbmZpZ0ZvclByb2Nlc3NUcmFuc3BvcnRTY2hlbWEoKSksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ1JlcGxhY2VzIHRoZSBzZXQgb2YgZHluYW1pY2FsbHkgbWFuYWdlZCBNQ1Agc2VydmVycy4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xNY3BTZXRTZXJ2ZXJzUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIGFkZGVkOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICAgICAgcmVtb3ZlZDogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICAgIGVycm9yczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5zdHJpbmcoKSksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVzdWx0IG9mIHJlcGxhY2luZyB0aGUgc2V0IG9mIGR5bmFtaWNhbGx5IG1hbmFnZWQgTUNQIHNlcnZlcnMuJyxcbiAgICApLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ3JlbG9hZF9wbHVnaW5zJyksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVsb2FkcyBwbHVnaW5zIGZyb20gZGlzayBhbmQgcmV0dXJucyB0aGUgcmVmcmVzaGVkIHNlc3Npb24gY29tcG9uZW50cy4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUmVsb2FkUGx1Z2luc1Jlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBjb21tYW5kczogei5hcnJheShTbGFzaENvbW1hbmRTY2hlbWEoKSksXG4gICAgICBhZ2VudHM6IHouYXJyYXkoQWdlbnRJbmZvU2NoZW1hKCkpLFxuICAgICAgcGx1Z2luczogei5hcnJheShcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIG5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgICAgcGF0aDogei5zdHJpbmcoKSxcbiAgICAgICAgICBzb3VyY2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgbWNwU2VydmVyczogei5hcnJheShNY3BTZXJ2ZXJTdGF0dXNTY2hlbWEoKSksXG4gICAgICBlcnJvcl9jb3VudDogei5udW1iZXIoKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdSZWZyZXNoZWQgY29tbWFuZHMsIGFnZW50cywgcGx1Z2lucywgYW5kIE1DUCBzZXJ2ZXIgc3RhdHVzIGFmdGVyIHJlbG9hZC4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sTWNwUmVjb25uZWN0UmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgc3VidHlwZTogei5saXRlcmFsKCdtY3BfcmVjb25uZWN0JyksXG4gICAgICBzZXJ2ZXJOYW1lOiB6LnN0cmluZygpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdSZWNvbm5lY3RzIGEgZGlzY29ubmVjdGVkIG9yIGZhaWxlZCBNQ1Agc2VydmVyLicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLQ29udHJvbE1jcFRvZ2dsZVJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnbWNwX3RvZ2dsZScpLFxuICAgICAgc2VydmVyTmFtZTogei5zdHJpbmcoKSxcbiAgICAgIGVuYWJsZWQ6IHouYm9vbGVhbigpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdFbmFibGVzIG9yIGRpc2FibGVzIGFuIE1DUCBzZXJ2ZXIuJyksXG4pXG5cblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xTdG9wVGFza1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnc3RvcF90YXNrJyksXG4gICAgICB0YXNrX2lkOiB6LnN0cmluZygpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdTdG9wcyBhIHJ1bm5pbmcgdGFzay4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xBcHBseUZsYWdTZXR0aW5nc1JlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnYXBwbHlfZmxhZ19zZXR0aW5ncycpLFxuICAgICAgc2V0dGluZ3M6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKSxcbiAgICB9KVxuICAgIC5kZXNjcmliZShcbiAgICAgICdNZXJnZXMgdGhlIHByb3ZpZGVkIHNldHRpbmdzIGludG8gdGhlIGZsYWcgc2V0dGluZ3MgbGF5ZXIsIHVwZGF0aW5nIHRoZSBhY3RpdmUgY29uZmlndXJhdGlvbi4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sR2V0U2V0dGluZ3NSZXF1ZXN0U2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2dldF9zZXR0aW5ncycpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ1JldHVybnMgdGhlIGVmZmVjdGl2ZSBtZXJnZWQgc2V0dGluZ3MgYW5kIHRoZSByYXcgcGVyLXNvdXJjZSBzZXR0aW5ncy4nLFxuICAgICksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sR2V0U2V0dGluZ3NSZXNwb25zZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgZWZmZWN0aXZlOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnVua25vd24oKSksXG4gICAgICBzb3VyY2VzOiB6XG4gICAgICAgIC5hcnJheShcbiAgICAgICAgICB6Lm9iamVjdCh7XG4gICAgICAgICAgICBzb3VyY2U6IHouZW51bShbXG4gICAgICAgICAgICAgICd1c2VyU2V0dGluZ3MnLFxuICAgICAgICAgICAgICAncHJvamVjdFNldHRpbmdzJyxcbiAgICAgICAgICAgICAgJ2xvY2FsU2V0dGluZ3MnLFxuICAgICAgICAgICAgICAnZmxhZ1NldHRpbmdzJyxcbiAgICAgICAgICAgICAgJ3BvbGljeVNldHRpbmdzJyxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuZGVzY3JpYmUoXG4gICAgICAgICAgJ09yZGVyZWQgbG93LXRvLWhpZ2ggcHJpb3JpdHkgXHUyMDE0IGxhdGVyIGVudHJpZXMgb3ZlcnJpZGUgZWFybGllciBvbmVzLicsXG4gICAgICAgICksXG4gICAgICBhcHBsaWVkOiB6XG4gICAgICAgIC5vYmplY3Qoe1xuICAgICAgICAgIG1vZGVsOiB6LnN0cmluZygpLFxuICAgICAgICAgIC8vIFN0cmluZyBsZXZlbHMgb25seSBcdTIwMTQgbnVtZXJpYyBlZmZvcnQgaXMgYW50LW9ubHkgYW5kIHRoZVxuICAgICAgICAgIC8vIFpvZFx1MjE5MnByb3RvIGdlbmVyYXRvciBjYW4ndCBlbWl0IGVudW1cdTIyMkFudW1iZXIgdW5pb25zLlxuICAgICAgICAgIGVmZm9ydDogei5lbnVtKFsnbG93JywgJ21lZGl1bScsICdoaWdoJywgJ21heCddKS5udWxsYWJsZSgpLFxuICAgICAgICB9KVxuICAgICAgICAub3B0aW9uYWwoKVxuICAgICAgICAuZGVzY3JpYmUoXG4gICAgICAgICAgJ1J1bnRpbWUtcmVzb2x2ZWQgdmFsdWVzIGFmdGVyIGVudiBvdmVycmlkZXMsIHNlc3Npb24gc3RhdGUsIGFuZCBtb2RlbC1zcGVjaWZpYyBkZWZhdWx0cyBhcmUgYXBwbGllZC4gVW5saWtlIGBlZmZlY3RpdmVgIChkaXNrIG1lcmdlKSwgdGhlc2UgcmVmbGVjdCB3aGF0IHdpbGwgYWN0dWFsbHkgYmUgc2VudCB0byB0aGUgQVBJLicsXG4gICAgICAgICksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnRWZmZWN0aXZlIG1lcmdlZCBzZXR0aW5ncyBwbHVzIHJhdyBwZXItc291cmNlIHNldHRpbmdzIGluIG1lcmdlIG9yZGVyLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xFbGljaXRhdGlvblJlcXVlc3RTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHN1YnR5cGU6IHoubGl0ZXJhbCgnZWxpY2l0YXRpb24nKSxcbiAgICAgIG1jcF9zZXJ2ZXJfbmFtZTogei5zdHJpbmcoKSxcbiAgICAgIG1lc3NhZ2U6IHouc3RyaW5nKCksXG4gICAgICBtb2RlOiB6LmVudW0oWydmb3JtJywgJ3VybCddKS5vcHRpb25hbCgpLFxuICAgICAgdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBlbGljaXRhdGlvbl9pZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgcmVxdWVzdGVkX3NjaGVtYTogei5yZWNvcmQoei5zdHJpbmcoKSwgei51bmtub3duKCkpLm9wdGlvbmFsKCksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmVxdWVzdHMgdGhlIFNESyBjb25zdW1lciB0byBoYW5kbGUgYW4gTUNQIGVsaWNpdGF0aW9uICh1c2VyIGlucHV0IHJlcXVlc3QpLicsXG4gICAgKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES0NvbnRyb2xFbGljaXRhdGlvblJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6XG4gICAgLm9iamVjdCh7XG4gICAgICBhY3Rpb246IHouZW51bShbJ2FjY2VwdCcsICdkZWNsaW5lJywgJ2NhbmNlbCddKSxcbiAgICAgIGNvbnRlbnQ6IHoucmVjb3JkKHouc3RyaW5nKCksIHoudW5rbm93bigpKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdSZXNwb25zZSBmcm9tIHRoZSBTREsgY29uc3VtZXIgZm9yIGFuIGVsaWNpdGF0aW9uIHJlcXVlc3QuJyksXG4pXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udHJvbCBSZXF1ZXN0L1Jlc3BvbnNlIFdyYXBwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUmVxdWVzdElubmVyU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6LnVuaW9uKFtcbiAgICBTREtDb250cm9sSW50ZXJydXB0UmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xQZXJtaXNzaW9uUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xJbml0aWFsaXplUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xTZXRQZXJtaXNzaW9uTW9kZVJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sU2V0TW9kZWxSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFNldE1heFRoaW5raW5nVG9rZW5zUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xNY3BTdGF0dXNSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbEdldENvbnRleHRVc2FnZVJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtIb29rQ2FsbGJhY2tSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbE1jcE1lc3NhZ2VSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFJld2luZEZpbGVzUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xDYW5jZWxBc3luY01lc3NhZ2VSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFNlZWRSZWFkU3RhdGVSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbE1jcFNldFNlcnZlcnNSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbFJlbG9hZFBsdWdpbnNSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbE1jcFJlY29ubmVjdFJlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sTWNwVG9nZ2xlUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xTdG9wVGFza1JlcXVlc3RTY2hlbWEoKSxcbiAgICBTREtDb250cm9sQXBwbHlGbGFnU2V0dGluZ3NSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLQ29udHJvbEdldFNldHRpbmdzUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xFbGljaXRhdGlvblJlcXVlc3RTY2hlbWEoKSxcbiAgXSksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHR5cGU6IHoubGl0ZXJhbCgnY29udHJvbF9yZXF1ZXN0JyksXG4gICAgcmVxdWVzdF9pZDogei5zdHJpbmcoKSxcbiAgICByZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdElubmVyU2NoZW1hKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgQ29udHJvbFJlc3BvbnNlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgc3VidHlwZTogei5saXRlcmFsKCdzdWNjZXNzJyksXG4gICAgcmVxdWVzdF9pZDogei5zdHJpbmcoKSxcbiAgICByZXNwb25zZTogei5yZWNvcmQoei5zdHJpbmcoKSwgei51bmtub3duKCkpLm9wdGlvbmFsKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgY29uc3QgQ29udHJvbEVycm9yUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICBzdWJ0eXBlOiB6LmxpdGVyYWwoJ2Vycm9yJyksXG4gICAgcmVxdWVzdF9pZDogei5zdHJpbmcoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKSxcbiAgICBwZW5kaW5nX3Blcm1pc3Npb25fcmVxdWVzdHM6IHpcbiAgICAgIC5hcnJheSh6LmxhenkoKCkgPT4gU0RLQ29udHJvbFJlcXVlc3RTY2hlbWEoKSkpXG4gICAgICAub3B0aW9uYWwoKSxcbiAgfSksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LmxpdGVyYWwoJ2NvbnRyb2xfcmVzcG9uc2UnKSxcbiAgICByZXNwb25zZTogei51bmlvbihbQ29udHJvbFJlc3BvbnNlU2NoZW1hKCksIENvbnRyb2xFcnJvclJlc3BvbnNlU2NoZW1hKCldKSxcbiAgfSksXG4pXG5cbmV4cG9ydCBjb25zdCBTREtDb250cm9sQ2FuY2VsUmVxdWVzdFNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgdHlwZTogei5saXRlcmFsKCdjb250cm9sX2NhbmNlbF9yZXF1ZXN0JyksXG4gICAgICByZXF1ZXN0X2lkOiB6LnN0cmluZygpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdDYW5jZWxzIGEgY3VycmVudGx5IG9wZW4gY29udHJvbCByZXF1ZXN0LicpLFxuKVxuXG5leHBvcnQgY29uc3QgU0RLS2VlcEFsaXZlTWVzc2FnZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgdHlwZTogei5saXRlcmFsKCdrZWVwX2FsaXZlJyksXG4gICAgfSlcbiAgICAuZGVzY3JpYmUoJ0tlZXAtYWxpdmUgbWVzc2FnZSB0byBtYWludGFpbiBXZWJTb2NrZXQgY29ubmVjdGlvbi4nKSxcbilcblxuZXhwb3J0IGNvbnN0IFNES1VwZGF0ZUVudmlyb25tZW50VmFyaWFibGVzTWVzc2FnZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgelxuICAgIC5vYmplY3Qoe1xuICAgICAgdHlwZTogei5saXRlcmFsKCd1cGRhdGVfZW52aXJvbm1lbnRfdmFyaWFibGVzJyksXG4gICAgICB2YXJpYWJsZXM6IHoucmVjb3JkKHouc3RyaW5nKCksIHouc3RyaW5nKCkpLFxuICAgIH0pXG4gICAgLmRlc2NyaWJlKCdVcGRhdGVzIGVudmlyb25tZW50IHZhcmlhYmxlcyBhdCBydW50aW1lLicpLFxuKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBZ2dyZWdhdGUgTWVzc2FnZSBUeXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgU3Rkb3V0TWVzc2FnZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei51bmlvbihbXG4gICAgU0RLTWVzc2FnZVNjaGVtYSgpLFxuICAgIFNES1N0cmVhbWxpbmVkVGV4dE1lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtTdHJlYW1saW5lZFRvb2xVc2VTdW1tYXJ5TWVzc2FnZVNjaGVtYSgpLFxuICAgIFNES1Bvc3RUdXJuU3VtbWFyeU1lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtDb250cm9sUmVzcG9uc2VTY2hlbWEoKSxcbiAgICBTREtDb250cm9sUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xDYW5jZWxSZXF1ZXN0U2NoZW1hKCksXG4gICAgU0RLS2VlcEFsaXZlTWVzc2FnZVNjaGVtYSgpLFxuICBdKSxcbilcblxuZXhwb3J0IGNvbnN0IFN0ZGluTWVzc2FnZVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei51bmlvbihbXG4gICAgU0RLVXNlck1lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtDb250cm9sUmVxdWVzdFNjaGVtYSgpLFxuICAgIFNES0NvbnRyb2xSZXNwb25zZVNjaGVtYSgpLFxuICAgIFNES0tlZXBBbGl2ZU1lc3NhZ2VTY2hlbWEoKSxcbiAgICBTREtVcGRhdGVFbnZpcm9ubWVudFZhcmlhYmxlc01lc3NhZ2VTY2hlbWEoKSxcbiAgXSksXG4pXG4iLCAiaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuXG4vLyBKU09OLnN0cmluZ2lmeSBlbWl0cyBVKzIwMjgvVSsyMDI5IHJhdyAodmFsaWQgcGVyIEVDTUEtNDA0KS4gV2hlbiB0aGVcbi8vIG91dHB1dCBpcyBhIHNpbmdsZSBOREpTT04gbGluZSwgYW55IHJlY2VpdmVyIHRoYXQgdXNlcyBKYXZhU2NyaXB0XG4vLyBsaW5lLXRlcm1pbmF0b3Igc2VtYW50aWNzIChFQ01BLTI2MiBcdTAwQTcxMS4zIFx1MjAxNCBcXG4gXFxyIFUrMjAyOCBVKzIwMjkpIHRvXG4vLyBzcGxpdCB0aGUgc3RyZWFtIHdpbGwgY3V0IHRoZSBKU09OIG1pZC1zdHJpbmcuIFByb2Nlc3NUcmFuc3BvcnQgbm93XG4vLyBzaWxlbnRseSBza2lwcyBub24tSlNPTiBsaW5lcyByYXRoZXIgdGhhbiBjcmFzaGluZyAoZ2gtMjg0MDUpLCBidXRcbi8vIHRoZSB0cnVuY2F0ZWQgZnJhZ21lbnQgaXMgc3RpbGwgbG9zdCBcdTIwMTQgdGhlIG1lc3NhZ2UgaXMgc2lsZW50bHkgZHJvcHBlZC5cbi8vXG4vLyBUaGUgXFx1WFhYWCBmb3JtIGlzIGVxdWl2YWxlbnQgSlNPTiAocGFyc2VzIHRvIHRoZSBzYW1lIHN0cmluZykgYnV0XG4vLyBjYW4gbmV2ZXIgYmUgbWlzdGFrZW4gZm9yIGEgbGluZSB0ZXJtaW5hdG9yIGJ5IEFOWSByZWNlaXZlci4gVGhpcyBpc1xuLy8gd2hhdCBFUzIwMTkncyBcIlN1YnN1bWUgSlNPTlwiIHByb3Bvc2FsIGFuZCBOb2RlJ3MgdXRpbC5pbnNwZWN0IGRvLlxuLy9cbi8vIFNpbmdsZSByZWdleCB3aXRoIGFsdGVybmF0aW9uOiB0aGUgY2FsbGJhY2sncyBvbmUgZGlzcGF0Y2ggcGVyIG1hdGNoXG4vLyBpcyBjaGVhcGVyIHRoYW4gdHdvIGZ1bGwtc3RyaW5nIHNjYW5zLlxuY29uc3QgSlNfTElORV9URVJNSU5BVE9SUyA9IC9cXHUyMDI4fFxcdTIwMjkvZ1xuXG5mdW5jdGlvbiBlc2NhcGVKc0xpbmVUZXJtaW5hdG9ycyhqc29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4ganNvbi5yZXBsYWNlKEpTX0xJTkVfVEVSTUlOQVRPUlMsIGMgPT5cbiAgICBjID09PSAnXFx1MjAyOCcgPyAnXFxcXHUyMDI4JyA6ICdcXFxcdTIwMjknLFxuICApXG59XG5cbi8qKlxuICogSlNPTi5zdHJpbmdpZnkgZm9yIG9uZS1tZXNzYWdlLXBlci1saW5lIHRyYW5zcG9ydHMuIEVzY2FwZXMgVSsyMDI4XG4gKiBMSU5FIFNFUEFSQVRPUiBhbmQgVSsyMDI5IFBBUkFHUkFQSCBTRVBBUkFUT1Igc28gdGhlIHNlcmlhbGl6ZWQgb3V0cHV0XG4gKiBjYW5ub3QgYmUgYnJva2VuIGJ5IGEgbGluZS1zcGxpdHRpbmcgcmVjZWl2ZXIuIE91dHB1dCBpcyBzdGlsbCB2YWxpZFxuICogSlNPTiBhbmQgcGFyc2VzIHRvIHRoZSBzYW1lIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmRqc29uU2FmZVN0cmluZ2lmeSh2YWx1ZTogdW5rbm93bik6IHN0cmluZyB7XG4gIHJldHVybiBlc2NhcGVKc0xpbmVUZXJtaW5hdG9ycyhqc29uU3RyaW5naWZ5KHZhbHVlKSlcbn1cbiIsICIvKipcbiAqIE1hcmtldHBsYWNlIHJlY29uY2lsZXIgXHUyMDE0IG1ha2VzIGtub3duX21hcmtldHBsYWNlcy5qc29uIGNvbnNpc3RlbnQgd2l0aFxuICogZGVjbGFyZWQgaW50ZW50IGluIHNldHRpbmdzLlxuICpcbiAqIFR3byBsYXllcnM6XG4gKiAtIGRpZmZNYXJrZXRwbGFjZXMoKTogY29tcGFyaXNvbiAocmVhZHMgLmdpdCBmb3Igd29ya3RyZWUgY2Fub25pY2FsaXphdGlvbiwgbWVtb2l6ZWQpXG4gKiAtIHJlY29uY2lsZU1hcmtldHBsYWNlcygpOiBidW5kbGVkIGRpZmYgKyBpbnN0YWxsIChJL08sIGlkZW1wb3RlbnQsIGFkZGl0aXZlKVxuICovXG5cbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC1lcy9pc0VxdWFsLmpzJ1xuaW1wb3J0IHsgaXNBYnNvbHV0ZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgcGF0aEV4aXN0cyB9IGZyb20gJy4uL2ZpbGUuanMnXG5pbXBvcnQgeyBmaW5kQ2Fub25pY2FsR2l0Um9vdCB9IGZyb20gJy4uL2dpdC5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vbG9nLmpzJ1xuaW1wb3J0IHtcbiAgYWRkTWFya2V0cGxhY2VTb3VyY2UsXG4gIHR5cGUgRGVjbGFyZWRNYXJrZXRwbGFjZSxcbiAgZ2V0RGVjbGFyZWRNYXJrZXRwbGFjZXMsXG4gIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyxcbn0gZnJvbSAnLi9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQge1xuICBpc0xvY2FsTWFya2V0cGxhY2VTb3VyY2UsXG4gIHR5cGUgS25vd25NYXJrZXRwbGFjZXNGaWxlLFxuICB0eXBlIE1hcmtldHBsYWNlU291cmNlLFxufSBmcm9tICcuL3NjaGVtYXMuanMnXG5cbmV4cG9ydCB0eXBlIE1hcmtldHBsYWNlRGlmZiA9IHtcbiAgLyoqIERlY2xhcmVkIGluIHNldHRpbmdzLCBhYnNlbnQgZnJvbSBrbm93bl9tYXJrZXRwbGFjZXMuanNvbiAqL1xuICBtaXNzaW5nOiBzdHJpbmdbXVxuICAvKiogUHJlc2VudCBpbiBib3RoLCBidXQgc2V0dGluZ3Mgc291cmNlIFx1MjI2MCBKU09OIHNvdXJjZSAoc2V0dGluZ3Mgd2lucykgKi9cbiAgc291cmNlQ2hhbmdlZDogQXJyYXk8e1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRlY2xhcmVkU291cmNlOiBNYXJrZXRwbGFjZVNvdXJjZVxuICAgIG1hdGVyaWFsaXplZFNvdXJjZTogTWFya2V0cGxhY2VTb3VyY2VcbiAgfT5cbiAgLyoqIFByZXNlbnQgaW4gYm90aCwgc291cmNlcyBtYXRjaCAqL1xuICB1cFRvRGF0ZTogc3RyaW5nW11cbn1cblxuLyoqXG4gKiBDb21wYXJlIGRlY2xhcmVkIGludGVudCAoc2V0dGluZ3MpIGFnYWluc3QgbWF0ZXJpYWxpemVkIHN0YXRlIChKU09OKS5cbiAqXG4gKiBSZXNvbHZlcyByZWxhdGl2ZSBkaXJlY3RvcnkvZmlsZSBwYXRocyBpbiBgZGVjbGFyZWRgIGJlZm9yZSBjb21wYXJpbmcsXG4gKiBzbyBwcm9qZWN0IHNldHRpbmdzIHdpdGggYC4vcGF0aGAgbWF0Y2ggSlNPTidzIGFic29sdXRlIHBhdGguIFBhdGhcbiAqIHJlc29sdXRpb24gcmVhZHMgYC5naXRgIHRvIGNhbm9uaWNhbGl6ZSB3b3JrdHJlZSBwYXRocyAobWVtb2l6ZWQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZk1hcmtldHBsYWNlcyhcbiAgZGVjbGFyZWQ6IFJlY29yZDxzdHJpbmcsIERlY2xhcmVkTWFya2V0cGxhY2U+LFxuICBtYXRlcmlhbGl6ZWQ6IEtub3duTWFya2V0cGxhY2VzRmlsZSxcbiAgb3B0cz86IHsgcHJvamVjdFJvb3Q/OiBzdHJpbmcgfSxcbik6IE1hcmtldHBsYWNlRGlmZiB7XG4gIGNvbnN0IG1pc3Npbmc6IHN0cmluZ1tdID0gW11cbiAgY29uc3Qgc291cmNlQ2hhbmdlZDogTWFya2V0cGxhY2VEaWZmWydzb3VyY2VDaGFuZ2VkJ10gPSBbXVxuICBjb25zdCB1cFRvRGF0ZTogc3RyaW5nW10gPSBbXVxuXG4gIGZvciAoY29uc3QgW25hbWUsIGludGVudF0gb2YgT2JqZWN0LmVudHJpZXMoZGVjbGFyZWQpKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBtYXRlcmlhbGl6ZWRbbmFtZV1cbiAgICBjb25zdCBub3JtYWxpemVkSW50ZW50ID0gbm9ybWFsaXplU291cmNlKGludGVudC5zb3VyY2UsIG9wdHM/LnByb2plY3RSb290KVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgbWlzc2luZy5wdXNoKG5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnRlbnQuc291cmNlSXNGYWxsYmFjaykge1xuICAgICAgLy8gRmFsbGJhY2s6IHByZXNlbmNlIHN1ZmZpY2VzLiBEb24ndCBjb21wYXJlIHNvdXJjZXMgXHUyMDE0IHRoZSBkZWNsYXJlZCBzb3VyY2VcbiAgICAgIC8vIGlzIG9ubHkgYSBkZWZhdWx0IGZvciB0aGUgYG1pc3NpbmdgIGJyYW5jaC4gSWYgc2VlZC9wcmlvci1pbnN0YWxsL21pcnJvclxuICAgICAgLy8gbWF0ZXJpYWxpemVkIHRoaXMgbWFya2V0cGxhY2UgdW5kZXIgQU5ZIHNvdXJjZSwgbGVhdmUgaXQgYWxvbmUuIENvbXBhcmluZ1xuICAgICAgLy8gd291bGQgcmVwb3J0IHNvdXJjZUNoYW5nZWQgXHUyMTkyIHJlLWNsb25lIFx1MjE5MiBzdG9tcCB0aGUgbWF0ZXJpYWxpemVkIGNvbnRlbnQuXG4gICAgICB1cFRvRGF0ZS5wdXNoKG5hbWUpXG4gICAgfSBlbHNlIGlmICghaXNFcXVhbChub3JtYWxpemVkSW50ZW50LCBzdGF0ZS5zb3VyY2UpKSB7XG4gICAgICBzb3VyY2VDaGFuZ2VkLnB1c2goe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZWNsYXJlZFNvdXJjZTogbm9ybWFsaXplZEludGVudCxcbiAgICAgICAgbWF0ZXJpYWxpemVkU291cmNlOiBzdGF0ZS5zb3VyY2UsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB1cFRvRGF0ZS5wdXNoKG5hbWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbWlzc2luZywgc291cmNlQ2hhbmdlZCwgdXBUb0RhdGUgfVxufVxuXG5leHBvcnQgdHlwZSBSZWNvbmNpbGVPcHRpb25zID0ge1xuICAvKiogU2tpcCBhIGRlY2xhcmVkIG1hcmtldHBsYWNlLiBVc2VkIGJ5IHppcC1jYWNoZSBtb2RlIGZvciB1bnN1cHBvcnRlZCBzb3VyY2UgdHlwZXMuICovXG4gIHNraXA/OiAobmFtZTogc3RyaW5nLCBzb3VyY2U6IE1hcmtldHBsYWNlU291cmNlKSA9PiBib29sZWFuXG4gIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IFJlY29uY2lsZVByb2dyZXNzRXZlbnQpID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgUmVjb25jaWxlUHJvZ3Jlc3NFdmVudCA9XG4gIHwge1xuICAgICAgdHlwZTogJ2luc3RhbGxpbmcnXG4gICAgICBuYW1lOiBzdHJpbmdcbiAgICAgIGFjdGlvbjogJ2luc3RhbGwnIHwgJ3VwZGF0ZSdcbiAgICAgIGluZGV4OiBudW1iZXJcbiAgICAgIHRvdGFsOiBudW1iZXJcbiAgICB9XG4gIHwgeyB0eXBlOiAnaW5zdGFsbGVkJzsgbmFtZTogc3RyaW5nOyBhbHJlYWR5TWF0ZXJpYWxpemVkOiBib29sZWFuIH1cbiAgfCB7IHR5cGU6ICdmYWlsZWQnOyBuYW1lOiBzdHJpbmc7IGVycm9yOiBzdHJpbmcgfVxuXG5leHBvcnQgdHlwZSBSZWNvbmNpbGVSZXN1bHQgPSB7XG4gIGluc3RhbGxlZDogc3RyaW5nW11cbiAgdXBkYXRlZDogc3RyaW5nW11cbiAgZmFpbGVkOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgZXJyb3I6IHN0cmluZyB9PlxuICB1cFRvRGF0ZTogc3RyaW5nW11cbiAgc2tpcHBlZDogc3RyaW5nW11cbn1cblxuLyoqXG4gKiBNYWtlIGtub3duX21hcmtldHBsYWNlcy5qc29uIGNvbnNpc3RlbnQgd2l0aCBkZWNsYXJlZCBpbnRlbnQuXG4gKiBJZGVtcG90ZW50LiBBZGRpdGl2ZSBvbmx5IChuZXZlciBkZWxldGVzKS4gRG9lcyBub3QgdG91Y2ggQXBwU3RhdGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvbmNpbGVNYXJrZXRwbGFjZXMoXG4gIG9wdHM/OiBSZWNvbmNpbGVPcHRpb25zLFxuKTogUHJvbWlzZTxSZWNvbmNpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZGVjbGFyZWQgPSBnZXREZWNsYXJlZE1hcmtldHBsYWNlcygpXG4gIGlmIChPYmplY3Qua2V5cyhkZWNsYXJlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgaW5zdGFsbGVkOiBbXSwgdXBkYXRlZDogW10sIGZhaWxlZDogW10sIHVwVG9EYXRlOiBbXSwgc2tpcHBlZDogW10gfVxuICB9XG5cbiAgbGV0IG1hdGVyaWFsaXplZDogS25vd25NYXJrZXRwbGFjZXNGaWxlXG4gIHRyeSB7XG4gICAgbWF0ZXJpYWxpemVkID0gYXdhaXQgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnKClcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ0Vycm9yKGUpXG4gICAgbWF0ZXJpYWxpemVkID0ge31cbiAgfVxuXG4gIGNvbnN0IGRpZmYgPSBkaWZmTWFya2V0cGxhY2VzKGRlY2xhcmVkLCBtYXRlcmlhbGl6ZWQsIHtcbiAgICBwcm9qZWN0Um9vdDogZ2V0T3JpZ2luYWxDd2QoKSxcbiAgfSlcblxuICB0eXBlIFdvcmtJdGVtID0ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHNvdXJjZTogTWFya2V0cGxhY2VTb3VyY2VcbiAgICBhY3Rpb246ICdpbnN0YWxsJyB8ICd1cGRhdGUnXG4gIH1cbiAgY29uc3Qgd29yazogV29ya0l0ZW1bXSA9IFtcbiAgICAuLi5kaWZmLm1pc3NpbmcubWFwKFxuICAgICAgKG5hbWUpOiBXb3JrSXRlbSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzb3VyY2U6IG5vcm1hbGl6ZVNvdXJjZShkZWNsYXJlZFtuYW1lXSEuc291cmNlKSxcbiAgICAgICAgYWN0aW9uOiAnaW5zdGFsbCcsXG4gICAgICB9KSxcbiAgICApLFxuICAgIC4uLmRpZmYuc291cmNlQ2hhbmdlZC5tYXAoXG4gICAgICAoeyBuYW1lLCBkZWNsYXJlZFNvdXJjZSB9KTogV29ya0l0ZW0gPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc291cmNlOiBkZWNsYXJlZFNvdXJjZSxcbiAgICAgICAgYWN0aW9uOiAndXBkYXRlJyxcbiAgICAgIH0pLFxuICAgICksXG4gIF1cblxuICBjb25zdCBza2lwcGVkOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IHRvUHJvY2VzczogV29ya0l0ZW1bXSA9IFtdXG4gIGZvciAoY29uc3QgaXRlbSBvZiB3b3JrKSB7XG4gICAgaWYgKG9wdHM/LnNraXA/LihpdGVtLm5hbWUsIGl0ZW0uc291cmNlKSkge1xuICAgICAgc2tpcHBlZC5wdXNoKGl0ZW0ubmFtZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIC8vIEZvciBzb3VyY2VDaGFuZ2VkIGxvY2FsLXBhdGggZW50cmllcywgc2tpcCBpZiB0aGUgZGVjbGFyZWQgcGF0aCBkb2Vzbid0XG4gICAgLy8gZXhpc3QuIEd1YXJkcyBtdWx0aS1jaGVja291dCBzY2VuYXJpb3Mgd2hlcmUgbm9ybWFsaXplU291cmNlIGNhbid0XG4gICAgLy8gY2Fub25pY2FsaXplIGFuZCBwcm9kdWNlcyBhIGRlYWQgcGF0aCBcdTIwMTQgdGhlIG1hdGVyaWFsaXplZCBlbnRyeSBtYXkgc3RpbGxcbiAgICAvLyBiZSB2YWxpZDsgYWRkTWFya2V0cGxhY2VTb3VyY2Ugd291bGQgZmFpbCBhbnl3YXksIHNvIHNraXBwaW5nIGF2b2lkcyBhXG4gICAgLy8gbm9pc3kgXCJmYWlsZWRcIiBldmVudCBhbmQgcHJlc2VydmVzIHRoZSB3b3JraW5nIGVudHJ5LiBNaXNzaW5nIGVudHJpZXNcbiAgICAvLyBhcmUgTk9UIHNraXBwZWQgKG5vdGhpbmcgdG8gcHJlc2VydmU7IHRoZSB1c2VyIHNob3VsZCBzZWUgdGhlIGVycm9yKS5cbiAgICBpZiAoXG4gICAgICBpdGVtLmFjdGlvbiA9PT0gJ3VwZGF0ZScgJiZcbiAgICAgIGlzTG9jYWxNYXJrZXRwbGFjZVNvdXJjZShpdGVtLnNvdXJjZSkgJiZcbiAgICAgICEoYXdhaXQgcGF0aEV4aXN0cyhpdGVtLnNvdXJjZS5wYXRoKSlcbiAgICApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtyZWNvbmNpbGVdICcke2l0ZW0ubmFtZX0nIGRlY2xhcmVkIHBhdGggZG9lcyBub3QgZXhpc3Q7IGtlZXBpbmcgbWF0ZXJpYWxpemVkIGVudHJ5YCxcbiAgICAgIClcbiAgICAgIHNraXBwZWQucHVzaChpdGVtLm5hbWUpXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB0b1Byb2Nlc3MucHVzaChpdGVtKVxuICB9XG5cbiAgaWYgKHRvUHJvY2Vzcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFsbGVkOiBbXSxcbiAgICAgIHVwZGF0ZWQ6IFtdLFxuICAgICAgZmFpbGVkOiBbXSxcbiAgICAgIHVwVG9EYXRlOiBkaWZmLnVwVG9EYXRlLFxuICAgICAgc2tpcHBlZCxcbiAgICB9XG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFtyZWNvbmNpbGVdICR7dG9Qcm9jZXNzLmxlbmd0aH0gbWFya2V0cGxhY2Uocyk6ICR7dG9Qcm9jZXNzLm1hcCh3ID0+IGAke3cubmFtZX0oJHt3LmFjdGlvbn0pYCkuam9pbignLCAnKX1gLFxuICApXG5cbiAgY29uc3QgaW5zdGFsbGVkOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IHVwZGF0ZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgZmFpbGVkOiBSZWNvbmNpbGVSZXN1bHRbJ2ZhaWxlZCddID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvUHJvY2Vzcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgbmFtZSwgc291cmNlLCBhY3Rpb24gfSA9IHRvUHJvY2Vzc1tpXSFcbiAgICBvcHRzPy5vblByb2dyZXNzPy4oe1xuICAgICAgdHlwZTogJ2luc3RhbGxpbmcnLFxuICAgICAgbmFtZSxcbiAgICAgIGFjdGlvbixcbiAgICAgIGluZGV4OiBpICsgMSxcbiAgICAgIHRvdGFsOiB0b1Byb2Nlc3MubGVuZ3RoLFxuICAgIH0pXG5cbiAgICB0cnkge1xuICAgICAgLy8gYWRkTWFya2V0cGxhY2VTb3VyY2UgaXMgc291cmNlLWlkZW1wb3RlbnQgXHUyMDE0IHNhbWUgc291cmNlIHJldHVybnNcbiAgICAgIC8vIGFscmVhZHlNYXRlcmlhbGl6ZWQ6dHJ1ZSB3aXRob3V0IGNsb25pbmcuIEZvciAndXBkYXRlJyAoc291cmNlXG4gICAgICAvLyBjaGFuZ2VkKSwgdGhlIG5ldyBzb3VyY2Ugd29uJ3QgbWF0Y2ggZXhpc3RpbmcgXHUyMTkyIHByb2NlZWRzIHdpdGggY2xvbmVcbiAgICAgIC8vIGFuZCBvdmVyd3JpdGVzIHRoZSBvbGQgSlNPTiBlbnRyeS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFkZE1hcmtldHBsYWNlU291cmNlKHNvdXJjZSlcblxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luc3RhbGwnKSBpbnN0YWxsZWQucHVzaChuYW1lKVxuICAgICAgZWxzZSB1cGRhdGVkLnB1c2gobmFtZSlcbiAgICAgIG9wdHM/Lm9uUHJvZ3Jlc3M/Lih7XG4gICAgICAgIHR5cGU6ICdpbnN0YWxsZWQnLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhbHJlYWR5TWF0ZXJpYWxpemVkOiByZXN1bHQuYWxyZWFkeU1hdGVyaWFsaXplZCxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBlcnJvck1lc3NhZ2UoZSlcbiAgICAgIGZhaWxlZC5wdXNoKHsgbmFtZSwgZXJyb3IgfSlcbiAgICAgIG9wdHM/Lm9uUHJvZ3Jlc3M/Lih7IHR5cGU6ICdmYWlsZWQnLCBuYW1lLCBlcnJvciB9KVxuICAgICAgbG9nRXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpbnN0YWxsZWQsIHVwZGF0ZWQsIGZhaWxlZCwgdXBUb0RhdGU6IGRpZmYudXBUb0RhdGUsIHNraXBwZWQgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgcmVsYXRpdmUgZGlyZWN0b3J5L2ZpbGUgcGF0aHMgZm9yIHN0YWJsZSBjb21wYXJpc29uLlxuICogU2V0dGluZ3MgZGVjbGFyZWQgYXQgcHJvamVjdCBzY29wZSBtYXkgdXNlIHByb2plY3QtcmVsYXRpdmUgcGF0aHM7XG4gKiBKU09OIHN0b3JlcyBhYnNvbHV0ZSBwYXRocy5cbiAqXG4gKiBGb3IgZ2l0IHdvcmt0cmVlcywgcmVzb2x2ZSBhZ2FpbnN0IHRoZSBtYWluIGNoZWNrb3V0IChjYW5vbmljYWwgcm9vdClcbiAqIGluc3RlYWQgb2YgdGhlIHdvcmt0cmVlIGN3ZC4gUHJvamVjdCBzZXR0aW5ncyBhcmUgY2hlY2tlZCBpbnRvIGdpdCxcbiAqIHNvIGAuL2Zvb2AgbWVhbnMgXCJyZWxhdGl2ZSB0byB0aGlzIHJlcG9cIiBcdTIwMTQgYnV0IGtub3duX21hcmtldHBsYWNlcy5qc29uIGlzXG4gKiB1c2VyLWdsb2JhbCB3aXRoIG9uZSBlbnRyeSBwZXIgbWFya2V0cGxhY2UgbmFtZS4gUmVzb2x2aW5nIGFnYWluc3QgdGhlXG4gKiB3b3JrdHJlZSBjd2QgbWVhbnMgZWFjaCB3b3JrdHJlZSBzZXNzaW9uIG92ZXJ3cml0ZXMgdGhlIHNoYXJlZCBlbnRyeSB3aXRoXG4gKiBpdHMgb3duIGFic29sdXRlIHBhdGgsIGFuZCBkZWxldGluZyB0aGUgd29ya3RyZWUgbGVhdmVzIGEgZGVhZFxuICogaW5zdGFsbExvY2F0aW9uLiBUaGUgY2Fub25pY2FsIHJvb3QgaXMgc3RhYmxlIGFjcm9zcyBhbGwgd29ya3RyZWVzLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVTb3VyY2UoXG4gIHNvdXJjZTogTWFya2V0cGxhY2VTb3VyY2UsXG4gIHByb2plY3RSb290Pzogc3RyaW5nLFxuKTogTWFya2V0cGxhY2VTb3VyY2Uge1xuICBpZiAoXG4gICAgKHNvdXJjZS5zb3VyY2UgPT09ICdkaXJlY3RvcnknIHx8IHNvdXJjZS5zb3VyY2UgPT09ICdmaWxlJykgJiZcbiAgICAhaXNBYnNvbHV0ZShzb3VyY2UucGF0aClcbiAgKSB7XG4gICAgY29uc3QgYmFzZSA9IHByb2plY3RSb290ID8/IGdldE9yaWdpbmFsQ3dkKClcbiAgICBjb25zdCBjYW5vbmljYWxSb290ID0gZmluZENhbm9uaWNhbEdpdFJvb3QoYmFzZSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc291cmNlLFxuICAgICAgcGF0aDogcmVzb2x2ZShjYW5vbmljYWxSb290ID8/IGJhc2UsIHNvdXJjZS5wYXRoKSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNvdXJjZVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0VPLFNBQVMsc0JBQXdDO0FBQ3RELFFBQU0sTUFBTTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFNBQVMsdUJBQXVCLEVBQUUsVUFBVSxHQUFHO0FBQ3JELFNBQU8sT0FBTyxVQUFVLE9BQU8sT0FBTztBQUN4QztBQTFFQSxJQXVCTSwwQkFXQSxjQUNBLGdCQUNBO0FBcENOO0FBQUE7QUFVQTtBQUNBO0FBQ0E7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QUFNLGFBQWEsRUFBRSxNQUFNLFVBQVUsTUFBTSxNQUFNLENBQUM7QUFDbEQsZUFBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxTQUFPLEVBQUUsV0FBVyxTQUFTLFFBQVEsVUFBVSxLQUFLLFVBQVUsUUFBUTtBQUN4RTtBQWVBLFNBQVMsZ0JBQ1AsUUFDQSxhQUNtQjtBQUNuQixPQUNHLE9BQU8sV0FBVyxlQUFlLE9BQU8sV0FBVyxXQUNwRCxDQUFDLFdBQVcsT0FBTyxJQUFJLEdBQ3ZCO0FBQ0EsVUFBTSxPQUFPLGVBQWUsZUFBZTtBQUMzQyxVQUFNLGdCQUFnQixxQkFBcUIsSUFBSTtBQUMvQyxXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxNQUFNLFFBQVEsaUJBQWlCLE1BQU0sT0FBTyxJQUFJO0FBQUEsSUFDbEQ7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOyIsCiAgIm5hbWVzIjogWyJwcm9jZXNzIiwgImluaXRfaG9va3MiLCAicmVxdWVzdCIsICJyZXNvbHZlIl0KfQo=
