#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_registerProtocol,
  registerProtocol_exports
} from "./chunk-2UGVVB4T.mjs";
import {
  autoUpdateMarketplacesAndPluginsInBackground,
  init_pluginAutoupdate
} from "./chunk-QCXXY3WE.mjs";
import {
  initMagicDocs,
  init_magicDocs
} from "./chunk-ZTV5JFBZ.mjs";
import {
  TOOL_RESULTS_SUBDIR,
  asSystemPrompt,
  cleanupOldImageCaches,
  cleanupOldPastes,
  cleanupOldVersions,
  cleanupStaleAgentWorktrees,
  createAbortController,
  createUserMessage,
  extractMemories_exports,
  extractTag,
  extractTextContent,
  getProjectsDir,
  getSettingsWithAllErrors,
  initAutoDream,
  init_abortController,
  init_allErrors,
  init_autoDream,
  init_claude,
  init_extractMemories,
  init_imageStore,
  init_messages2 as init_messages,
  init_nativeInstaller,
  init_pasteStore,
  init_postSamplingHooks,
  init_sessionStorage,
  init_systemPromptType,
  init_toolResultStorage,
  init_worktree,
  queryModelWithoutStreaming,
  registerPostSamplingHook
} from "./chunk-5INIV6TQ.mjs";
import {
  getEmptyToolPermissionContext,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getSettings_DEPRECATED,
  getSmallFastModel,
  init_growthbook,
  init_model,
  init_settings2 as init_settings,
  rawSettingsContainsKey
} from "./chunk-JQ55XPLZ.mjs";
import {
  count,
  init_array,
  init_lockfile,
  lock,
  unlock
} from "./chunk-B7JYVDBT.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  CACHE_PATHS,
  init_cachePaths,
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  jsonParse,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getInvokedSkillsForAgent,
  getIsInteractive,
  getLastInteractionTime,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/backgroundHousekeeping.ts
init_bun_bundle();
init_autoDream();
init_magicDocs();

// src/utils/hooks/skillImprovement.ts
init_bun_bundle();
init_state();
init_growthbook();
init_analytics();
init_claude();
init_Tool();
init_abortController();
init_array();
init_cwd();
init_errors();
init_log();
init_messages();
init_model();
init_slowOperations();
init_systemPromptType();

// src/utils/hooks/apiQueryHookHelper.ts
init_claude();
init_abortController();
init_log();
init_errors();
init_messages();
init_systemPromptType();
import { randomUUID } from "crypto";
function createApiQueryHook(config) {
  return async (context) => {
    try {
      const shouldRun = await config.shouldRun(context);
      if (!shouldRun) {
        return;
      }
      const uuid = randomUUID();
      const messages = config.buildMessages(context);
      context.queryMessageCount = messages.length;
      const systemPrompt = config.systemPrompt ? asSystemPrompt([config.systemPrompt]) : context.systemPrompt;
      const useTools = config.useTools ?? true;
      const tools = useTools ? context.toolUseContext.options.tools : [];
      const model = config.getModel(context);
      const response = await queryModelWithoutStreaming({
        messages,
        systemPrompt,
        thinkingConfig: { type: "disabled" },
        tools,
        signal: createAbortController().signal,
        options: {
          getToolPermissionContext: async () => {
            const appState = context.toolUseContext.getAppState();
            return appState.toolPermissionContext;
          },
          model,
          toolChoice: void 0,
          isNonInteractiveSession: context.toolUseContext.options.isNonInteractiveSession,
          hasAppendSystemPrompt: !!context.toolUseContext.options.appendSystemPrompt,
          temperatureOverride: 0,
          agents: context.toolUseContext.options.agentDefinitions.activeAgents,
          querySource: config.name,
          mcpTools: [],
          agentId: context.toolUseContext.agentId
        }
      });
      const content = extractTextContent(response.message.content).trim();
      try {
        const result = config.parseResponse(content, context);
        config.logResult(
          {
            type: "success",
            queryName: config.name,
            result,
            messageId: response.message.id,
            model,
            uuid
          },
          context
        );
      } catch (error) {
        config.logResult(
          {
            type: "error",
            queryName: config.name,
            error,
            uuid
          },
          context
        );
      }
    } catch (error) {
      logError(toError(error));
    }
  };
}

// src/utils/hooks/skillImprovement.ts
init_postSamplingHooks();
var TURN_BATCH_SIZE = 5;
function formatRecentMessages(messages) {
  return messages.filter((m) => m.type === "user" || m.type === "assistant").map((m) => {
    const role = m.type === "user" ? "User" : "Assistant";
    const content = m.message.content;
    if (typeof content === "string")
      return `${role}: ${content.slice(0, 500)}`;
    const text = content.filter(
      (b) => b.type === "text"
    ).map((b) => b.text).join("\n");
    return `${role}: ${text.slice(0, 500)}`;
  }).join("\n\n");
}
function findProjectSkill() {
  const skills = getInvokedSkillsForAgent(null);
  for (const [, info] of skills) {
    if (info.skillPath.startsWith("projectSettings:")) {
      return info;
    }
  }
  return void 0;
}
function createSkillImprovementHook() {
  let lastAnalyzedCount = 0;
  let lastAnalyzedIndex = 0;
  const config = {
    name: "skill_improvement",
    async shouldRun(context) {
      if (context.querySource !== "repl_main_thread") {
        return false;
      }
      if (!findProjectSkill()) {
        return false;
      }
      const userCount = count(context.messages, (m) => m.type === "user");
      if (userCount - lastAnalyzedCount < TURN_BATCH_SIZE) {
        return false;
      }
      lastAnalyzedCount = userCount;
      return true;
    },
    buildMessages(context) {
      const projectSkill = findProjectSkill();
      const newMessages = context.messages.slice(lastAnalyzedIndex);
      lastAnalyzedIndex = context.messages.length;
      return [
        createUserMessage({
          content: `You are analyzing a conversation where a user is executing a skill (a repeatable process).
Your job: identify if the user's recent messages contain preferences, requests, or corrections that should be permanently added to the skill definition for future runs.

<skill_definition>
${projectSkill.content}
</skill_definition>

<recent_messages>
${formatRecentMessages(newMessages)}
</recent_messages>

Look for:
- Requests to add, change, or remove steps: "can you also ask me X", "please do Y too", "don't do Z"
- Preferences about how steps should work: "ask me about energy levels", "note the time", "use a casual tone"
- Corrections: "no, do X instead", "always use Y", "make sure to..."

Ignore:
- Routine conversation that doesn't generalize (one-time answers, chitchat)
- Things the skill already does

Output a JSON array inside <updates> tags. Each item: {"section": "which step/section to modify or 'new step'", "change": "what to add/modify", "reason": "which user message prompted this"}.
Output <updates>[]</updates> if no updates are needed.`
        })
      ];
    },
    systemPrompt: "You detect user preferences and process improvements during skill execution. Flag anything the user asks for that should be remembered for next time.",
    useTools: false,
    parseResponse(content) {
      const updatesStr = extractTag(content, "updates");
      if (!updatesStr) {
        return [];
      }
      try {
        return jsonParse(updatesStr);
      } catch {
        return [];
      }
    },
    logResult(result, context) {
      if (result.type === "success" && result.result.length > 0) {
        const projectSkill = findProjectSkill();
        const skillName = projectSkill?.skillName ?? "unknown";
        logEvent("tengu_skill_improvement_detected", {
          updateCount: result.result.length,
          uuid: result.uuid,
          // _PROTO_skill_name routes to the privileged skill_name BQ column.
          _PROTO_skill_name: skillName
        });
        context.toolUseContext.setAppState((prev) => ({
          ...prev,
          skillImprovement: {
            suggestion: { skillName, updates: result.result }
          }
        }));
      }
    },
    getModel: getSmallFastModel
  };
  return createApiQueryHook(config);
}
function initSkillImprovement() {
  if (feature("SKILL_IMPROVEMENT") && getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_panda", false)) {
    registerPostSamplingHook(createSkillImprovementHook());
  }
}
async function applySkillImprovement(skillName, updates) {
  if (!skillName) return;
  const { join: join2 } = await import("path");
  const fs2 = await import("fs/promises");
  const filePath = join2(getCwd(), ".claude", "skills", skillName, "SKILL.md");
  let currentContent;
  try {
    currentContent = await fs2.readFile(filePath, "utf-8");
  } catch {
    logError(
      new Error(`Failed to read skill file for improvement: ${filePath}`)
    );
    return;
  }
  const updateList = updates.map((u) => `- ${u.section}: ${u.change}`).join("\n");
  const response = await queryModelWithoutStreaming({
    messages: [
      createUserMessage({
        content: `You are editing a skill definition file. Apply the following improvements to the skill.

<current_skill_file>
${currentContent}
</current_skill_file>

<improvements>
${updateList}
</improvements>

Rules:
- Integrate the improvements naturally into the existing structure
- Preserve frontmatter (--- block) exactly as-is
- Preserve the overall format and style
- Do not remove existing content unless an improvement explicitly replaces it
- Output the complete updated file inside <updated_file> tags`
      })
    ],
    systemPrompt: asSystemPrompt([
      "You edit skill definition files to incorporate user preferences. Output only the updated file content."
    ]),
    thinkingConfig: { type: "disabled" },
    tools: [],
    signal: createAbortController().signal,
    options: {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      model: getSmallFastModel(),
      toolChoice: void 0,
      isNonInteractiveSession: false,
      hasAppendSystemPrompt: false,
      temperatureOverride: 0,
      agents: [],
      querySource: "skill_improvement_apply",
      mcpTools: []
    }
  });
  const responseText = extractTextContent(response.message.content).trim();
  const updatedContent = extractTag(responseText, "updated_file");
  if (!updatedContent) {
    logError(
      new Error("Skill improvement apply: no updated_file tag in response")
    );
    return;
  }
  try {
    await fs2.writeFile(filePath, updatedContent, "utf-8");
  } catch (e) {
    logError(toError(e));
  }
}

// src/utils/backgroundHousekeeping.ts
init_state();

// src/utils/cleanup.ts
init_analytics();
init_cachePaths();
init_debug();
init_envUtils();
init_fsOperations();
init_imageStore();
init_lockfile();
init_log();
init_nativeInstaller();
init_pasteStore();
init_sessionStorage();
init_allErrors();
init_settings();
init_toolResultStorage();
init_worktree();
import * as fs from "fs/promises";
import { homedir } from "os";
import { join } from "path";
var DEFAULT_CLEANUP_PERIOD_DAYS = 30;
function getCutoffDate() {
  const settings = getSettings_DEPRECATED() || {};
  const cleanupPeriodDays = settings.cleanupPeriodDays ?? DEFAULT_CLEANUP_PERIOD_DAYS;
  const cleanupPeriodMs = cleanupPeriodDays * 24 * 60 * 60 * 1e3;
  return new Date(Date.now() - cleanupPeriodMs);
}
function addCleanupResults(a, b) {
  return {
    messages: a.messages + b.messages,
    errors: a.errors + b.errors
  };
}
function convertFileNameToDate(filename) {
  const isoStr = filename.split(".")[0].replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(isoStr);
}
async function cleanupOldFilesInDirectory(dirPath, cutoffDate, isMessagePath) {
  const result = { messages: 0, errors: 0 };
  try {
    const files = await getFsImplementation().readdir(dirPath);
    for (const file of files) {
      try {
        const timestamp = convertFileNameToDate(file.name);
        if (timestamp < cutoffDate) {
          await getFsImplementation().unlink(join(dirPath, file.name));
          if (isMessagePath) {
            result.messages++;
          } else {
            result.errors++;
          }
        }
      } catch (error) {
        logError(error);
      }
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code !== "ENOENT") {
      logError(error);
    }
  }
  return result;
}
async function cleanupOldMessageFiles() {
  const fsImpl = getFsImplementation();
  const cutoffDate = getCutoffDate();
  const errorPath = CACHE_PATHS.errors();
  const baseCachePath = CACHE_PATHS.baseLogs();
  let result = await cleanupOldFilesInDirectory(errorPath, cutoffDate, false);
  try {
    let dirents;
    try {
      dirents = await fsImpl.readdir(baseCachePath);
    } catch {
      return result;
    }
    const mcpLogDirs = dirents.filter(
      (dirent) => dirent.isDirectory() && dirent.name.startsWith("mcp-logs-")
    ).map((dirent) => join(baseCachePath, dirent.name));
    for (const mcpLogDir of mcpLogDirs) {
      result = addCleanupResults(
        result,
        await cleanupOldFilesInDirectory(mcpLogDir, cutoffDate, true)
      );
      await tryRmdir(mcpLogDir, fsImpl);
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code !== "ENOENT") {
      logError(error);
    }
  }
  return result;
}
async function unlinkIfOld(filePath, cutoffDate, fsImpl) {
  const stats = await fsImpl.stat(filePath);
  if (stats.mtime < cutoffDate) {
    await fsImpl.unlink(filePath);
    return true;
  }
  return false;
}
async function tryRmdir(dirPath, fsImpl) {
  try {
    await fsImpl.rmdir(dirPath);
  } catch {
  }
}
async function cleanupOldSessionFiles() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const projectsDir = getProjectsDir();
  const fsImpl = getFsImplementation();
  let projectDirents;
  try {
    projectDirents = await fsImpl.readdir(projectsDir);
  } catch {
    return result;
  }
  for (const projectDirent of projectDirents) {
    if (!projectDirent.isDirectory()) continue;
    const projectDir = join(projectsDir, projectDirent.name);
    let entries;
    try {
      entries = await fsImpl.readdir(projectDir);
    } catch {
      result.errors++;
      continue;
    }
    for (const entry of entries) {
      if (entry.isFile()) {
        if (!entry.name.endsWith(".jsonl") && !entry.name.endsWith(".cast")) {
          continue;
        }
        try {
          if (await unlinkIfOld(join(projectDir, entry.name), cutoffDate, fsImpl)) {
            result.messages++;
          }
        } catch {
          result.errors++;
        }
      } else if (entry.isDirectory()) {
        const sessionDir = join(projectDir, entry.name);
        const toolResultsDir = join(sessionDir, TOOL_RESULTS_SUBDIR);
        let toolDirs;
        try {
          toolDirs = await fsImpl.readdir(toolResultsDir);
        } catch {
          await tryRmdir(sessionDir, fsImpl);
          continue;
        }
        for (const toolEntry of toolDirs) {
          if (toolEntry.isFile()) {
            try {
              if (await unlinkIfOld(
                join(toolResultsDir, toolEntry.name),
                cutoffDate,
                fsImpl
              )) {
                result.messages++;
              }
            } catch {
              result.errors++;
            }
          } else if (toolEntry.isDirectory()) {
            const toolDirPath = join(toolResultsDir, toolEntry.name);
            let toolFiles;
            try {
              toolFiles = await fsImpl.readdir(toolDirPath);
            } catch {
              continue;
            }
            for (const tf of toolFiles) {
              if (!tf.isFile()) continue;
              try {
                if (await unlinkIfOld(
                  join(toolDirPath, tf.name),
                  cutoffDate,
                  fsImpl
                )) {
                  result.messages++;
                }
              } catch {
                result.errors++;
              }
            }
            await tryRmdir(toolDirPath, fsImpl);
          }
        }
        await tryRmdir(toolResultsDir, fsImpl);
        await tryRmdir(sessionDir, fsImpl);
      }
    }
    await tryRmdir(projectDir, fsImpl);
  }
  return result;
}
async function cleanupSingleDirectory(dirPath, extension, removeEmptyDir = true) {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  let dirents;
  try {
    dirents = await fsImpl.readdir(dirPath);
  } catch {
    return result;
  }
  for (const dirent of dirents) {
    if (!dirent.isFile() || !dirent.name.endsWith(extension)) continue;
    try {
      if (await unlinkIfOld(join(dirPath, dirent.name), cutoffDate, fsImpl)) {
        result.messages++;
      }
    } catch {
      result.errors++;
    }
  }
  if (removeEmptyDir) {
    await tryRmdir(dirPath, fsImpl);
  }
  return result;
}
function cleanupOldPlanFiles() {
  const plansDir = join(getClaudeConfigHomeDir(), "plans");
  return cleanupSingleDirectory(plansDir, ".md");
}
async function cleanupOldFileHistoryBackups() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  try {
    const configDir = getClaudeConfigHomeDir();
    const fileHistoryStorageDir = join(configDir, "file-history");
    let dirents;
    try {
      dirents = await fsImpl.readdir(fileHistoryStorageDir);
    } catch {
      return result;
    }
    const fileHistorySessionsDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(fileHistoryStorageDir, dirent.name));
    await Promise.all(
      fileHistorySessionsDirs.map(async (fileHistorySessionDir) => {
        try {
          const stats = await fsImpl.stat(fileHistorySessionDir);
          if (stats.mtime < cutoffDate) {
            await fsImpl.rm(fileHistorySessionDir, {
              recursive: true,
              force: true
            });
            result.messages++;
          }
        } catch {
          result.errors++;
        }
      })
    );
    await tryRmdir(fileHistoryStorageDir, fsImpl);
  } catch (error) {
    logError(error);
  }
  return result;
}
async function cleanupOldSessionEnvDirs() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  try {
    const configDir = getClaudeConfigHomeDir();
    const sessionEnvBaseDir = join(configDir, "session-env");
    let dirents;
    try {
      dirents = await fsImpl.readdir(sessionEnvBaseDir);
    } catch {
      return result;
    }
    const sessionEnvDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(sessionEnvBaseDir, dirent.name));
    for (const sessionEnvDir of sessionEnvDirs) {
      try {
        const stats = await fsImpl.stat(sessionEnvDir);
        if (stats.mtime < cutoffDate) {
          await fsImpl.rm(sessionEnvDir, { recursive: true, force: true });
          result.messages++;
        }
      } catch {
        result.errors++;
      }
    }
    await tryRmdir(sessionEnvBaseDir, fsImpl);
  } catch (error) {
    logError(error);
  }
  return result;
}
async function cleanupOldDebugLogs() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  const debugDir = join(getClaudeConfigHomeDir(), "debug");
  let dirents;
  try {
    dirents = await fsImpl.readdir(debugDir);
  } catch {
    return result;
  }
  for (const dirent of dirents) {
    if (!dirent.isFile() || !dirent.name.endsWith(".txt") || dirent.name === "latest") {
      continue;
    }
    try {
      if (await unlinkIfOld(join(debugDir, dirent.name), cutoffDate, fsImpl)) {
        result.messages++;
      }
    } catch {
      result.errors++;
    }
  }
  return result;
}
var ONE_DAY_MS = 24 * 60 * 60 * 1e3;
async function cleanupNpmCacheForAnthropicPackages() {
  const markerPath = join(getClaudeConfigHomeDir(), ".npm-cache-cleanup");
  try {
    const stat2 = await fs.stat(markerPath);
    if (Date.now() - stat2.mtimeMs < ONE_DAY_MS) {
      logForDebugging("npm cache cleanup: skipping, ran recently");
      return;
    }
  } catch {
  }
  try {
    await lock(markerPath, { retries: 0, realpath: false });
  } catch {
    logForDebugging("npm cache cleanup: skipping, lock held");
    return;
  }
  logForDebugging("npm cache cleanup: starting");
  const npmCachePath = join(homedir(), ".npm", "_cacache");
  const NPM_CACHE_RETENTION_COUNT = 5;
  const startTime = Date.now();
  try {
    const cacache = await import("./lib-EXZ3FS5F.mjs");
    const cutoff = startTime - ONE_DAY_MS;
    const stream = cacache.ls.stream(npmCachePath);
    const anthropicEntries = [];
    for await (const entry of stream) {
      if (entry.key.includes("@anthropic-ai/claude-")) {
        anthropicEntries.push({ key: entry.key, time: entry.time });
      }
    }
    const byPackage = /* @__PURE__ */ new Map();
    for (const entry of anthropicEntries) {
      const atVersionIdx = entry.key.lastIndexOf("@");
      const pkgName = atVersionIdx > 0 ? entry.key.slice(0, atVersionIdx) : entry.key;
      const existing = byPackage.get(pkgName) ?? [];
      existing.push(entry);
      byPackage.set(pkgName, existing);
    }
    const keysToRemove = [];
    for (const [, entries] of byPackage) {
      entries.sort((a, b) => b.time - a.time);
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.time < cutoff || i >= NPM_CACHE_RETENTION_COUNT) {
          keysToRemove.push(entry.key);
        }
      }
    }
    await Promise.all(
      keysToRemove.map((key) => cacache.rm.entry(npmCachePath, key))
    );
    await fs.writeFile(markerPath, (/* @__PURE__ */ new Date()).toISOString());
    const durationMs = Date.now() - startTime;
    if (keysToRemove.length > 0) {
      logForDebugging(
        `npm cache cleanup: Removed ${keysToRemove.length} old @anthropic-ai entries in ${durationMs}ms`
      );
    } else {
      logForDebugging(`npm cache cleanup: completed in ${durationMs}ms`);
    }
    logEvent("tengu_npm_cache_cleanup", {
      success: true,
      durationMs,
      entriesRemoved: keysToRemove.length
    });
  } catch (error) {
    logError(error);
    logEvent("tengu_npm_cache_cleanup", {
      success: false,
      durationMs: Date.now() - startTime
    });
  } finally {
    await unlock(markerPath, { realpath: false }).catch(() => {
    });
  }
}
async function cleanupOldVersionsThrottled() {
  const markerPath = join(getClaudeConfigHomeDir(), ".version-cleanup");
  try {
    const stat2 = await fs.stat(markerPath);
    if (Date.now() - stat2.mtimeMs < ONE_DAY_MS) {
      logForDebugging("version cleanup: skipping, ran recently");
      return;
    }
  } catch {
  }
  try {
    await lock(markerPath, { retries: 0, realpath: false });
  } catch {
    logForDebugging("version cleanup: skipping, lock held");
    return;
  }
  logForDebugging("version cleanup: starting (throttled)");
  try {
    await cleanupOldVersions();
    await fs.writeFile(markerPath, (/* @__PURE__ */ new Date()).toISOString());
  } catch (error) {
    logError(error);
  } finally {
    await unlock(markerPath, { realpath: false }).catch(() => {
    });
  }
}
async function cleanupOldMessageFilesInBackground() {
  const { errors } = getSettingsWithAllErrors();
  if (errors.length > 0 && rawSettingsContainsKey("cleanupPeriodDays")) {
    logForDebugging(
      "Skipping cleanup: settings have validation errors but cleanupPeriodDays was explicitly set. Fix settings errors to enable cleanup."
    );
    return;
  }
  await cleanupOldMessageFiles();
  await cleanupOldSessionFiles();
  await cleanupOldPlanFiles();
  await cleanupOldFileHistoryBackups();
  await cleanupOldSessionEnvDirs();
  await cleanupOldDebugLogs();
  await cleanupOldImageCaches();
  await cleanupOldPastes(getCutoffDate());
  const removedWorktrees = await cleanupStaleAgentWorktrees(getCutoffDate());
  if (removedWorktrees > 0) {
    logEvent("tengu_worktree_cleanup", { removed: removedWorktrees });
  }
  if (process.env.USER_TYPE === "ant") {
    await cleanupNpmCacheForAnthropicPackages();
  }
}

// src/utils/backgroundHousekeeping.ts
init_nativeInstaller();
init_pluginAutoupdate();
var extractMemoriesModule = feature("EXTRACT_MEMORIES") ? (init_extractMemories(), __toCommonJS(extractMemories_exports)) : null;
var registerProtocolModule = feature("LODESTONE") ? (init_registerProtocol(), __toCommonJS(registerProtocol_exports)) : null;
var RECURRING_CLEANUP_INTERVAL_MS = 24 * 60 * 60 * 1e3;
var DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION = 10 * 60 * 1e3;
function startBackgroundHousekeeping() {
  void initMagicDocs();
  void initSkillImprovement();
  if (feature("EXTRACT_MEMORIES")) {
    extractMemoriesModule.initExtractMemories();
  }
  initAutoDream();
  void autoUpdateMarketplacesAndPluginsInBackground();
  if (feature("LODESTONE") && getIsInteractive()) {
    void registerProtocolModule.ensureDeepLinkProtocolRegistered();
  }
  let needsCleanup = true;
  async function runVerySlowOps() {
    if (getIsInteractive() && getLastInteractionTime() > Date.now() - 1e3 * 60) {
      setTimeout(
        runVerySlowOps,
        DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION
      ).unref();
      return;
    }
    if (needsCleanup) {
      needsCleanup = false;
      await cleanupOldMessageFilesInBackground();
    }
    if (getIsInteractive() && getLastInteractionTime() > Date.now() - 1e3 * 60) {
      setTimeout(
        runVerySlowOps,
        DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION
      ).unref();
      return;
    }
    await cleanupOldVersions();
  }
  setTimeout(
    runVerySlowOps,
    DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION
  ).unref();
  if (process.env.USER_TYPE === "ant") {
    const interval = setInterval(() => {
      void cleanupNpmCacheForAnthropicPackages();
      void cleanupOldVersionsThrottled();
    }, RECURRING_CLEANUP_INTERVAL_MS);
    interval.unref();
  }
}

export {
  applySkillImprovement,
  startBackgroundHousekeeping
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2JhY2tncm91bmRIb3VzZWtlZXBpbmcudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2hvb2tzL3NraWxsSW1wcm92ZW1lbnQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2hvb2tzL2FwaVF1ZXJ5SG9va0hlbHBlci50cyIsICIuLi8uLi9zcmMvdXRpbHMvY2xlYW51cC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBpbml0QXV0b0RyZWFtIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0b0RyZWFtL2F1dG9EcmVhbS5qcydcbmltcG9ydCB7IGluaXRNYWdpY0RvY3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9NYWdpY0RvY3MvbWFnaWNEb2NzLmpzJ1xuaW1wb3J0IHsgaW5pdFNraWxsSW1wcm92ZW1lbnQgfSBmcm9tICcuL2hvb2tzL3NraWxsSW1wcm92ZW1lbnQuanMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IGV4dHJhY3RNZW1vcmllc01vZHVsZSA9IGZlYXR1cmUoJ0VYVFJBQ1RfTUVNT1JJRVMnKVxuICA/IChyZXF1aXJlKCcuLi9zZXJ2aWNlcy9leHRyYWN0TWVtb3JpZXMvZXh0cmFjdE1lbW9yaWVzLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvZXh0cmFjdE1lbW9yaWVzL2V4dHJhY3RNZW1vcmllcy5qcycpKVxuICA6IG51bGxcbmNvbnN0IHJlZ2lzdGVyUHJvdG9jb2xNb2R1bGUgPSBmZWF0dXJlKCdMT0RFU1RPTkUnKVxuICA/IChyZXF1aXJlKCcuL2RlZXBMaW5rL3JlZ2lzdGVyUHJvdG9jb2wuanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuL2RlZXBMaW5rL3JlZ2lzdGVyUHJvdG9jb2wuanMnKSlcbiAgOiBudWxsXG5cbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5pbXBvcnQgeyBnZXRJc0ludGVyYWN0aXZlLCBnZXRMYXN0SW50ZXJhY3Rpb25UaW1lIH0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYW51cE5wbUNhY2hlRm9yQW50aHJvcGljUGFja2FnZXMsXG4gIGNsZWFudXBPbGRNZXNzYWdlRmlsZXNJbkJhY2tncm91bmQsXG4gIGNsZWFudXBPbGRWZXJzaW9uc1Rocm90dGxlZCxcbn0gZnJvbSAnLi9jbGVhbnVwLmpzJ1xuaW1wb3J0IHsgY2xlYW51cE9sZFZlcnNpb25zIH0gZnJvbSAnLi9uYXRpdmVJbnN0YWxsZXIvaW5kZXguanMnXG5pbXBvcnQgeyBhdXRvVXBkYXRlTWFya2V0cGxhY2VzQW5kUGx1Z2luc0luQmFja2dyb3VuZCB9IGZyb20gJy4vcGx1Z2lucy9wbHVnaW5BdXRvdXBkYXRlLmpzJ1xuXG4vLyAyNCBob3VycyBpbiBtaWxsaXNlY29uZHNcbmNvbnN0IFJFQ1VSUklOR19DTEVBTlVQX0lOVEVSVkFMX01TID0gMjQgKiA2MCAqIDYwICogMTAwMFxuXG4vLyAxMCBtaW51dGVzIGFmdGVyIHN0YXJ0LlxuY29uc3QgREVMQVlfVkVSWV9TTE9XX09QRVJBVElPTlNfVEhBVF9IQVBQRU5fRVZFUllfU0VTU0lPTiA9IDEwICogNjAgKiAxMDAwXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJhY2tncm91bmRIb3VzZWtlZXBpbmcoKTogdm9pZCB7XG4gIHZvaWQgaW5pdE1hZ2ljRG9jcygpXG4gIHZvaWQgaW5pdFNraWxsSW1wcm92ZW1lbnQoKVxuICBpZiAoZmVhdHVyZSgnRVhUUkFDVF9NRU1PUklFUycpKSB7XG4gICAgZXh0cmFjdE1lbW9yaWVzTW9kdWxlIS5pbml0RXh0cmFjdE1lbW9yaWVzKClcbiAgfVxuICBpbml0QXV0b0RyZWFtKClcbiAgdm9pZCBhdXRvVXBkYXRlTWFya2V0cGxhY2VzQW5kUGx1Z2luc0luQmFja2dyb3VuZCgpXG4gIGlmIChmZWF0dXJlKCdMT0RFU1RPTkUnKSAmJiBnZXRJc0ludGVyYWN0aXZlKCkpIHtcbiAgICB2b2lkIHJlZ2lzdGVyUHJvdG9jb2xNb2R1bGUhLmVuc3VyZURlZXBMaW5rUHJvdG9jb2xSZWdpc3RlcmVkKClcbiAgfVxuXG4gIGxldCBuZWVkc0NsZWFudXAgPSB0cnVlXG4gIGFzeW5jIGZ1bmN0aW9uIHJ1blZlcnlTbG93T3BzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIElmIHRoZSB1c2VyIGRpZCBzb21ldGhpbmcgaW4gdGhlIGxhc3QgbWludXRlLCBkb24ndCBtYWtlIHRoZW0gd2FpdCBmb3IgdGhlc2Ugc2xvdyBvcGVyYXRpb25zIHRvIHJ1bi5cbiAgICBpZiAoXG4gICAgICBnZXRJc0ludGVyYWN0aXZlKCkgJiZcbiAgICAgIGdldExhc3RJbnRlcmFjdGlvblRpbWUoKSA+IERhdGUubm93KCkgLSAxMDAwICogNjBcbiAgICApIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgIHJ1blZlcnlTbG93T3BzLFxuICAgICAgICBERUxBWV9WRVJZX1NMT1dfT1BFUkFUSU9OU19USEFUX0hBUFBFTl9FVkVSWV9TRVNTSU9OLFxuICAgICAgKS51bnJlZigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobmVlZHNDbGVhbnVwKSB7XG4gICAgICBuZWVkc0NsZWFudXAgPSBmYWxzZVxuICAgICAgYXdhaXQgY2xlYW51cE9sZE1lc3NhZ2VGaWxlc0luQmFja2dyb3VuZCgpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVzZXIgZGlkIHNvbWV0aGluZyBpbiB0aGUgbGFzdCBtaW51dGUsIGRvbid0IG1ha2UgdGhlbSB3YWl0IGZvciB0aGVzZSBzbG93IG9wZXJhdGlvbnMgdG8gcnVuLlxuICAgIGlmIChcbiAgICAgIGdldElzSW50ZXJhY3RpdmUoKSAmJlxuICAgICAgZ2V0TGFzdEludGVyYWN0aW9uVGltZSgpID4gRGF0ZS5ub3coKSAtIDEwMDAgKiA2MFxuICAgICkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgcnVuVmVyeVNsb3dPcHMsXG4gICAgICAgIERFTEFZX1ZFUllfU0xPV19PUEVSQVRJT05TX1RIQVRfSEFQUEVOX0VWRVJZX1NFU1NJT04sXG4gICAgICApLnVucmVmKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IGNsZWFudXBPbGRWZXJzaW9ucygpXG4gIH1cblxuICBzZXRUaW1lb3V0KFxuICAgIHJ1blZlcnlTbG93T3BzLFxuICAgIERFTEFZX1ZFUllfU0xPV19PUEVSQVRJT05TX1RIQVRfSEFQUEVOX0VWRVJZX1NFU1NJT04sXG4gICkudW5yZWYoKVxuXG4gIC8vIEZvciBsb25nLXJ1bm5pbmcgc2Vzc2lvbnMsIHNjaGVkdWxlIHJlY3VycmluZyBjbGVhbnVwIGV2ZXJ5IDI0IGhvdXJzLlxuICAvLyBCb3RoIGNsZWFudXAgZnVuY3Rpb25zIHVzZSBtYXJrZXIgZmlsZXMgYW5kIGxvY2tzIHRvIHRocm90dGxlIHRvIG9uY2UgcGVyIGRheVxuICAvLyBhbmQgc2tpcCBpbW1lZGlhdGVseSBpZiBhbm90aGVyIHByb2Nlc3MgaG9sZHMgdGhlIGxvY2suXG4gIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2b2lkIGNsZWFudXBOcG1DYWNoZUZvckFudGhyb3BpY1BhY2thZ2VzKClcbiAgICAgIHZvaWQgY2xlYW51cE9sZFZlcnNpb25zVGhyb3R0bGVkKClcbiAgICB9LCBSRUNVUlJJTkdfQ0xFQU5VUF9JTlRFUlZBTF9NUylcblxuICAgIC8vIERvbid0IGxldCB0aGlzIGludGVydmFsIGtlZXAgdGhlIHByb2Nlc3MgYWxpdmVcbiAgICBpbnRlcnZhbC51bnJlZigpXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IGdldEludm9rZWRTa2lsbHNGb3JBZ2VudCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBxdWVyeU1vZGVsV2l0aG91dFN0cmVhbWluZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9jbGF1ZGUuanMnXG5pbXBvcnQgeyBnZXRFbXB0eVRvb2xQZXJtaXNzaW9uQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWJvcnRDb250cm9sbGVyIH0gZnJvbSAnLi4vYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9hcnJheS5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uL2N3ZC5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7XG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxuICBleHRyYWN0VGFnLFxuICBleHRyYWN0VGV4dENvbnRlbnQsXG59IGZyb20gJy4uL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgZ2V0U21hbGxGYXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IGpzb25QYXJzZSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuLi9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBcGlRdWVyeUhvb2tDb25maWcsXG4gIGNyZWF0ZUFwaVF1ZXJ5SG9vayxcbn0gZnJvbSAnLi9hcGlRdWVyeUhvb2tIZWxwZXIuanMnXG5pbXBvcnQgeyByZWdpc3RlclBvc3RTYW1wbGluZ0hvb2sgfSBmcm9tICcuL3Bvc3RTYW1wbGluZ0hvb2tzLmpzJ1xuXG5jb25zdCBUVVJOX0JBVENIX1NJWkUgPSA1XG5cbmV4cG9ydCB0eXBlIFNraWxsVXBkYXRlID0ge1xuICBzZWN0aW9uOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmdcbiAgcmVhc29uOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZm9ybWF0UmVjZW50TWVzc2FnZXMobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlc1xuICAgIC5maWx0ZXIobSA9PiBtLnR5cGUgPT09ICd1c2VyJyB8fCBtLnR5cGUgPT09ICdhc3Npc3RhbnQnKVxuICAgIC5tYXAobSA9PiB7XG4gICAgICBjb25zdCByb2xlID0gbS50eXBlID09PSAndXNlcicgPyAnVXNlcicgOiAnQXNzaXN0YW50J1xuICAgICAgY29uc3QgY29udGVudCA9IG0ubWVzc2FnZS5jb250ZW50XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gYCR7cm9sZX06ICR7Y29udGVudC5zbGljZSgwLCA1MDApfWBcbiAgICAgIGNvbnN0IHRleHQgPSBjb250ZW50XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGIpOiBiIGlzIEV4dHJhY3Q8dHlwZW9mIGIsIHsgdHlwZTogJ3RleHQnIH0+ID0+IGIudHlwZSA9PT0gJ3RleHQnLFxuICAgICAgICApXG4gICAgICAgIC5tYXAoYiA9PiBiLnRleHQpXG4gICAgICAgIC5qb2luKCdcXG4nKVxuICAgICAgcmV0dXJuIGAke3JvbGV9OiAke3RleHQuc2xpY2UoMCwgNTAwKX1gXG4gICAgfSlcbiAgICAuam9pbignXFxuXFxuJylcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RTa2lsbCgpIHtcbiAgY29uc3Qgc2tpbGxzID0gZ2V0SW52b2tlZFNraWxsc0ZvckFnZW50KG51bGwpXG4gIGZvciAoY29uc3QgWywgaW5mb10gb2Ygc2tpbGxzKSB7XG4gICAgaWYgKGluZm8uc2tpbGxQYXRoLnN0YXJ0c1dpdGgoJ3Byb2plY3RTZXR0aW5nczonKSkge1xuICAgICAgcmV0dXJuIGluZm9cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBjcmVhdGVTa2lsbEltcHJvdmVtZW50SG9vaygpIHtcbiAgbGV0IGxhc3RBbmFseXplZENvdW50ID0gMFxuICBsZXQgbGFzdEFuYWx5emVkSW5kZXggPSAwXG5cbiAgY29uc3QgY29uZmlnOiBBcGlRdWVyeUhvb2tDb25maWc8U2tpbGxVcGRhdGVbXT4gPSB7XG4gICAgbmFtZTogJ3NraWxsX2ltcHJvdmVtZW50JyxcblxuICAgIGFzeW5jIHNob3VsZFJ1bihjb250ZXh0KSB7XG4gICAgICBpZiAoY29udGV4dC5xdWVyeVNvdXJjZSAhPT0gJ3JlcGxfbWFpbl90aHJlYWQnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbmRQcm9qZWN0U2tpbGwoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBydW4gZXZlcnkgVFVSTl9CQVRDSF9TSVpFIHVzZXIgbWVzc2FnZXNcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGNvdW50KGNvbnRleHQubWVzc2FnZXMsIG0gPT4gbS50eXBlID09PSAndXNlcicpXG4gICAgICBpZiAodXNlckNvdW50IC0gbGFzdEFuYWx5emVkQ291bnQgPCBUVVJOX0JBVENIX1NJWkUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxhc3RBbmFseXplZENvdW50ID0gdXNlckNvdW50XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG5cbiAgICBidWlsZE1lc3NhZ2VzKGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHByb2plY3RTa2lsbCA9IGZpbmRQcm9qZWN0U2tpbGwoKSFcbiAgICAgIC8vIE9ubHkgYW5hbHl6ZSBtZXNzYWdlcyBzaW5jZSB0aGUgbGFzdCBjaGVjayBcdTIwMTQgdGhlIHNraWxsIGRlZmluaXRpb25cbiAgICAgIC8vIHByb3ZpZGVzIGVub3VnaCBjb250ZXh0IGZvciB0aGUgY2xhc3NpZmllciB0byB1bmRlcnN0YW5kIGNvcnJlY3Rpb25zXG4gICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IGNvbnRleHQubWVzc2FnZXMuc2xpY2UobGFzdEFuYWx5emVkSW5kZXgpXG4gICAgICBsYXN0QW5hbHl6ZWRJbmRleCA9IGNvbnRleHQubWVzc2FnZXMubGVuZ3RoXG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBgWW91IGFyZSBhbmFseXppbmcgYSBjb252ZXJzYXRpb24gd2hlcmUgYSB1c2VyIGlzIGV4ZWN1dGluZyBhIHNraWxsIChhIHJlcGVhdGFibGUgcHJvY2VzcykuXG5Zb3VyIGpvYjogaWRlbnRpZnkgaWYgdGhlIHVzZXIncyByZWNlbnQgbWVzc2FnZXMgY29udGFpbiBwcmVmZXJlbmNlcywgcmVxdWVzdHMsIG9yIGNvcnJlY3Rpb25zIHRoYXQgc2hvdWxkIGJlIHBlcm1hbmVudGx5IGFkZGVkIHRvIHRoZSBza2lsbCBkZWZpbml0aW9uIGZvciBmdXR1cmUgcnVucy5cblxuPHNraWxsX2RlZmluaXRpb24+XG4ke3Byb2plY3RTa2lsbC5jb250ZW50fVxuPC9za2lsbF9kZWZpbml0aW9uPlxuXG48cmVjZW50X21lc3NhZ2VzPlxuJHtmb3JtYXRSZWNlbnRNZXNzYWdlcyhuZXdNZXNzYWdlcyl9XG48L3JlY2VudF9tZXNzYWdlcz5cblxuTG9vayBmb3I6XG4tIFJlcXVlc3RzIHRvIGFkZCwgY2hhbmdlLCBvciByZW1vdmUgc3RlcHM6IFwiY2FuIHlvdSBhbHNvIGFzayBtZSBYXCIsIFwicGxlYXNlIGRvIFkgdG9vXCIsIFwiZG9uJ3QgZG8gWlwiXG4tIFByZWZlcmVuY2VzIGFib3V0IGhvdyBzdGVwcyBzaG91bGQgd29yazogXCJhc2sgbWUgYWJvdXQgZW5lcmd5IGxldmVsc1wiLCBcIm5vdGUgdGhlIHRpbWVcIiwgXCJ1c2UgYSBjYXN1YWwgdG9uZVwiXG4tIENvcnJlY3Rpb25zOiBcIm5vLCBkbyBYIGluc3RlYWRcIiwgXCJhbHdheXMgdXNlIFlcIiwgXCJtYWtlIHN1cmUgdG8uLi5cIlxuXG5JZ25vcmU6XG4tIFJvdXRpbmUgY29udmVyc2F0aW9uIHRoYXQgZG9lc24ndCBnZW5lcmFsaXplIChvbmUtdGltZSBhbnN3ZXJzLCBjaGl0Y2hhdClcbi0gVGhpbmdzIHRoZSBza2lsbCBhbHJlYWR5IGRvZXNcblxuT3V0cHV0IGEgSlNPTiBhcnJheSBpbnNpZGUgPHVwZGF0ZXM+IHRhZ3MuIEVhY2ggaXRlbToge1wic2VjdGlvblwiOiBcIndoaWNoIHN0ZXAvc2VjdGlvbiB0byBtb2RpZnkgb3IgJ25ldyBzdGVwJ1wiLCBcImNoYW5nZVwiOiBcIndoYXQgdG8gYWRkL21vZGlmeVwiLCBcInJlYXNvblwiOiBcIndoaWNoIHVzZXIgbWVzc2FnZSBwcm9tcHRlZCB0aGlzXCJ9LlxuT3V0cHV0IDx1cGRhdGVzPltdPC91cGRhdGVzPiBpZiBubyB1cGRhdGVzIGFyZSBuZWVkZWQuYCxcbiAgICAgICAgfSksXG4gICAgICBdXG4gICAgfSxcblxuICAgIHN5c3RlbVByb21wdDpcbiAgICAgICdZb3UgZGV0ZWN0IHVzZXIgcHJlZmVyZW5jZXMgYW5kIHByb2Nlc3MgaW1wcm92ZW1lbnRzIGR1cmluZyBza2lsbCBleGVjdXRpb24uIEZsYWcgYW55dGhpbmcgdGhlIHVzZXIgYXNrcyBmb3IgdGhhdCBzaG91bGQgYmUgcmVtZW1iZXJlZCBmb3IgbmV4dCB0aW1lLicsXG5cbiAgICB1c2VUb29sczogZmFsc2UsXG5cbiAgICBwYXJzZVJlc3BvbnNlKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZXNTdHIgPSBleHRyYWN0VGFnKGNvbnRlbnQsICd1cGRhdGVzJylcbiAgICAgIGlmICghdXBkYXRlc1N0cikge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBqc29uUGFyc2UodXBkYXRlc1N0cikgYXMgU2tpbGxVcGRhdGVbXVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2dSZXN1bHQocmVzdWx0LCBjb250ZXh0KSB7XG4gICAgICBpZiAocmVzdWx0LnR5cGUgPT09ICdzdWNjZXNzJyAmJiByZXN1bHQucmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNraWxsID0gZmluZFByb2plY3RTa2lsbCgpXG4gICAgICAgIGNvbnN0IHNraWxsTmFtZSA9IHByb2plY3RTa2lsbD8uc2tpbGxOYW1lID8/ICd1bmtub3duJ1xuXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9za2lsbF9pbXByb3ZlbWVudF9kZXRlY3RlZCcsIHtcbiAgICAgICAgICB1cGRhdGVDb3VudDogcmVzdWx0LnJlc3VsdFxuICAgICAgICAgICAgLmxlbmd0aCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIHV1aWQ6IHJlc3VsdC51dWlkIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgLy8gX1BST1RPX3NraWxsX25hbWUgcm91dGVzIHRvIHRoZSBwcml2aWxlZ2VkIHNraWxsX25hbWUgQlEgY29sdW1uLlxuICAgICAgICAgIF9QUk9UT19za2lsbF9uYW1lOlxuICAgICAgICAgICAgc2tpbGxOYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VELFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRleHQudG9vbFVzZUNvbnRleHQuc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgc2tpbGxJbXByb3ZlbWVudDoge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbjogeyBza2lsbE5hbWUsIHVwZGF0ZXM6IHJlc3VsdC5yZXN1bHQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TW9kZWw6IGdldFNtYWxsRmFzdE1vZGVsLFxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUFwaVF1ZXJ5SG9vayhjb25maWcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2tpbGxJbXByb3ZlbWVudCgpOiB2b2lkIHtcbiAgaWYgKFxuICAgIGZlYXR1cmUoJ1NLSUxMX0lNUFJPVkVNRU5UJykgJiZcbiAgICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgndGVuZ3VfY29wcGVyX3BhbmRhJywgZmFsc2UpXG4gICkge1xuICAgIHJlZ2lzdGVyUG9zdFNhbXBsaW5nSG9vayhjcmVhdGVTa2lsbEltcHJvdmVtZW50SG9vaygpKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgc2tpbGwgaW1wcm92ZW1lbnRzIGJ5IGNhbGxpbmcgYSBzaWRlLWNoYW5uZWwgTExNIHRvIHJld3JpdGUgdGhlIHNraWxsIGZpbGUuXG4gKiBGaXJlLWFuZC1mb3JnZXQgXHUyMDE0IGRvZXMgbm90IGJsb2NrIHRoZSBtYWluIGNvbnZlcnNhdGlvbi5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5U2tpbGxJbXByb3ZlbWVudChcbiAgc2tpbGxOYW1lOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFNraWxsVXBkYXRlW10sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFza2lsbE5hbWUpIHJldHVyblxuXG4gIGNvbnN0IHsgam9pbiB9ID0gYXdhaXQgaW1wb3J0KCdwYXRoJylcbiAgY29uc3QgZnMgPSBhd2FpdCBpbXBvcnQoJ2ZzL3Byb21pc2VzJylcblxuICAvLyBTa2lsbHMgbGl2ZSBhdCAuY2xhdWRlL3NraWxscy88bmFtZT4vU0tJTEwubWQgcmVsYXRpdmUgdG8gQ1dEXG4gIGNvbnN0IGZpbGVQYXRoID0gam9pbihnZXRDd2QoKSwgJy5jbGF1ZGUnLCAnc2tpbGxzJywgc2tpbGxOYW1lLCAnU0tJTEwubWQnKVxuXG4gIGxldCBjdXJyZW50Q29udGVudDogc3RyaW5nXG4gIHRyeSB7XG4gICAgY3VycmVudENvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04JylcbiAgfSBjYXRjaCB7XG4gICAgbG9nRXJyb3IoXG4gICAgICBuZXcgRXJyb3IoYEZhaWxlZCB0byByZWFkIHNraWxsIGZpbGUgZm9yIGltcHJvdmVtZW50OiAke2ZpbGVQYXRofWApLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUxpc3QgPSB1cGRhdGVzLm1hcCh1ID0+IGAtICR7dS5zZWN0aW9ufTogJHt1LmNoYW5nZX1gKS5qb2luKCdcXG4nKVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlNb2RlbFdpdGhvdXRTdHJlYW1pbmcoe1xuICAgIG1lc3NhZ2VzOiBbXG4gICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgIGNvbnRlbnQ6IGBZb3UgYXJlIGVkaXRpbmcgYSBza2lsbCBkZWZpbml0aW9uIGZpbGUuIEFwcGx5IHRoZSBmb2xsb3dpbmcgaW1wcm92ZW1lbnRzIHRvIHRoZSBza2lsbC5cblxuPGN1cnJlbnRfc2tpbGxfZmlsZT5cbiR7Y3VycmVudENvbnRlbnR9XG48L2N1cnJlbnRfc2tpbGxfZmlsZT5cblxuPGltcHJvdmVtZW50cz5cbiR7dXBkYXRlTGlzdH1cbjwvaW1wcm92ZW1lbnRzPlxuXG5SdWxlczpcbi0gSW50ZWdyYXRlIHRoZSBpbXByb3ZlbWVudHMgbmF0dXJhbGx5IGludG8gdGhlIGV4aXN0aW5nIHN0cnVjdHVyZVxuLSBQcmVzZXJ2ZSBmcm9udG1hdHRlciAoLS0tIGJsb2NrKSBleGFjdGx5IGFzLWlzXG4tIFByZXNlcnZlIHRoZSBvdmVyYWxsIGZvcm1hdCBhbmQgc3R5bGVcbi0gRG8gbm90IHJlbW92ZSBleGlzdGluZyBjb250ZW50IHVubGVzcyBhbiBpbXByb3ZlbWVudCBleHBsaWNpdGx5IHJlcGxhY2VzIGl0XG4tIE91dHB1dCB0aGUgY29tcGxldGUgdXBkYXRlZCBmaWxlIGluc2lkZSA8dXBkYXRlZF9maWxlPiB0YWdzYCxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgc3lzdGVtUHJvbXB0OiBhc1N5c3RlbVByb21wdChbXG4gICAgICAnWW91IGVkaXQgc2tpbGwgZGVmaW5pdGlvbiBmaWxlcyB0byBpbmNvcnBvcmF0ZSB1c2VyIHByZWZlcmVuY2VzLiBPdXRwdXQgb25seSB0aGUgdXBkYXRlZCBmaWxlIGNvbnRlbnQuJyxcbiAgICBdKSxcbiAgICB0aGlua2luZ0NvbmZpZzogeyB0eXBlOiAnZGlzYWJsZWQnIGFzIGNvbnN0IH0sXG4gICAgdG9vbHM6IFtdLFxuICAgIHNpZ25hbDogY3JlYXRlQWJvcnRDb250cm9sbGVyKCkuc2lnbmFsLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dDogYXN5bmMgKCkgPT4gZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQoKSxcbiAgICAgIG1vZGVsOiBnZXRTbWFsbEZhc3RNb2RlbCgpLFxuICAgICAgdG9vbENob2ljZTogdW5kZWZpbmVkLFxuICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IGZhbHNlLFxuICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OiBmYWxzZSxcbiAgICAgIHRlbXBlcmF0dXJlT3ZlcnJpZGU6IDAsXG4gICAgICBhZ2VudHM6IFtdLFxuICAgICAgcXVlcnlTb3VyY2U6ICdza2lsbF9pbXByb3ZlbWVudF9hcHBseScsXG4gICAgICBtY3BUb29sczogW10sXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCByZXNwb25zZVRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzcG9uc2UubWVzc2FnZS5jb250ZW50KS50cmltKClcblxuICBjb25zdCB1cGRhdGVkQ29udGVudCA9IGV4dHJhY3RUYWcocmVzcG9uc2VUZXh0LCAndXBkYXRlZF9maWxlJylcbiAgaWYgKCF1cGRhdGVkQ29udGVudCkge1xuICAgIGxvZ0Vycm9yKFxuICAgICAgbmV3IEVycm9yKCdTa2lsbCBpbXByb3ZlbWVudCBhcHBseTogbm8gdXBkYXRlZF9maWxlIHRhZyBpbiByZXNwb25zZScpLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCB1cGRhdGVkQ29udGVudCwgJ3V0Zi04JylcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ0Vycm9yKHRvRXJyb3IoZSkpXG4gIH1cbn1cbiIsICJpbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHR5cGUgeyBRdWVyeVNvdXJjZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9xdWVyeVNvdXJjZS5qcydcbmltcG9ydCB7IHF1ZXJ5TW9kZWxXaXRob3V0U3RyZWFtaW5nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBjcmVhdGVBYm9ydENvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi91dGlscy9hYm9ydENvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBleHRyYWN0VGV4dENvbnRlbnQgfSBmcm9tICcuLi9tZXNzYWdlcy5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vc3lzdGVtUHJvbXB0VHlwZS5qcydcbmltcG9ydCB0eXBlIHsgUkVQTEhvb2tDb250ZXh0IH0gZnJvbSAnLi9wb3N0U2FtcGxpbmdIb29rcy5qcydcblxuZXhwb3J0IHR5cGUgQXBpUXVlcnlIb29rQ29udGV4dCA9IFJFUExIb29rQ29udGV4dCAmIHtcbiAgcXVlcnlNZXNzYWdlQ291bnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgQXBpUXVlcnlIb29rQ29uZmlnPFRSZXN1bHQ+ID0ge1xuICBuYW1lOiBRdWVyeVNvdXJjZVxuICBzaG91bGRSdW46IChjb250ZXh0OiBBcGlRdWVyeUhvb2tDb250ZXh0KSA9PiBQcm9taXNlPGJvb2xlYW4+XG5cbiAgLy8gQnVpbGQgdGhlIGNvbXBsZXRlIG1lc3NhZ2UgbGlzdCB0byBzZW5kIHRvIHRoZSBBUElcbiAgYnVpbGRNZXNzYWdlczogKGNvbnRleHQ6IEFwaVF1ZXJ5SG9va0NvbnRleHQpID0+IE1lc3NhZ2VbXVxuXG4gIC8vIE9wdGlvbmFsOiBvdmVycmlkZSBzeXN0ZW0gcHJvbXB0IChkZWZhdWx0cyB0byBjb250ZXh0LnN5c3RlbVByb21wdClcbiAgc3lzdGVtUHJvbXB0Pzogc3RyaW5nXG5cbiAgLy8gT3B0aW9uYWw6IHdoZXRoZXIgdG8gdXNlIHRvb2xzIGZyb20gY29udGV4dCAoZGVmYXVsdHMgdG8gdHJ1ZSlcbiAgLy8gU2V0IHRvIGZhbHNlIHRvIHBhc3MgZW1wdHkgdG9vbHMgYXJyYXlcbiAgdXNlVG9vbHM/OiBib29sZWFuXG5cbiAgcGFyc2VSZXNwb25zZTogKGNvbnRlbnQ6IHN0cmluZywgY29udGV4dDogQXBpUXVlcnlIb29rQ29udGV4dCkgPT4gVFJlc3VsdFxuICBsb2dSZXN1bHQ6IChcbiAgICByZXN1bHQ6IEFwaVF1ZXJ5UmVzdWx0PFRSZXN1bHQ+LFxuICAgIGNvbnRleHQ6IEFwaVF1ZXJ5SG9va0NvbnRleHQsXG4gICkgPT4gdm9pZFxuICAvLyBNdXN0IGJlIGEgZnVuY3Rpb24gdG8gZW5zdXJlIGxhenkgbG9hZGluZyAoY29uZmlnIGlzIGFjY2Vzc2VkIGJlZm9yZSBhbGxvd2VkKVxuICAvLyBSZWNlaXZlcyBjb250ZXh0IHNvIGNhbGxlcnMgY2FuIGluaGVyaXQgdGhlIG1haW4gbG9vcCBtb2RlbCBpZiBkZXNpcmVkLlxuICBnZXRNb2RlbDogKGNvbnRleHQ6IEFwaVF1ZXJ5SG9va0NvbnRleHQpID0+IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBcGlRdWVyeVJlc3VsdDxUUmVzdWx0PiA9XG4gIHwge1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICBxdWVyeU5hbWU6IHN0cmluZ1xuICAgICAgcmVzdWx0OiBUUmVzdWx0XG4gICAgICBtZXNzYWdlSWQ6IHN0cmluZ1xuICAgICAgbW9kZWw6IHN0cmluZ1xuICAgICAgdXVpZDogc3RyaW5nXG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgIHF1ZXJ5TmFtZTogc3RyaW5nXG4gICAgICBlcnJvcjogRXJyb3JcbiAgICAgIHV1aWQ6IHN0cmluZ1xuICAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwaVF1ZXJ5SG9vazxUUmVzdWx0PihcbiAgY29uZmlnOiBBcGlRdWVyeUhvb2tDb25maWc8VFJlc3VsdD4sXG4pIHtcbiAgcmV0dXJuIGFzeW5jIChjb250ZXh0OiBBcGlRdWVyeUhvb2tDb250ZXh0KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNob3VsZFJ1biA9IGF3YWl0IGNvbmZpZy5zaG91bGRSdW4oY29udGV4dClcbiAgICAgIGlmICghc2hvdWxkUnVuKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpXG5cbiAgICAgIC8vIEJ1aWxkIG1lc3NhZ2VzIHVzaW5nIHRoZSBjb25maWcncyBidWlsZE1lc3NhZ2VzIGZ1bmN0aW9uXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGNvbmZpZy5idWlsZE1lc3NhZ2VzKGNvbnRleHQpXG4gICAgICBjb250ZXh0LnF1ZXJ5TWVzc2FnZUNvdW50ID0gbWVzc2FnZXMubGVuZ3RoXG5cbiAgICAgIC8vIFVzZSBjb25maWcncyBzeXN0ZW0gcHJvbXB0IGlmIHByb3ZpZGVkLCBvdGhlcndpc2UgdXNlIGNvbnRleHQnc1xuICAgICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gY29uZmlnLnN5c3RlbVByb21wdFxuICAgICAgICA/IGFzU3lzdGVtUHJvbXB0KFtjb25maWcuc3lzdGVtUHJvbXB0XSlcbiAgICAgICAgOiBjb250ZXh0LnN5c3RlbVByb21wdFxuXG4gICAgICAvLyBVc2UgY29uZmlnJ3MgdG9vbHMgcHJlZmVyZW5jZSAoZGVmYXVsdHMgdG8gdHJ1ZSA9IHVzZSBjb250ZXh0IHRvb2xzKVxuICAgICAgY29uc3QgdXNlVG9vbHMgPSBjb25maWcudXNlVG9vbHMgPz8gdHJ1ZVxuICAgICAgY29uc3QgdG9vbHMgPSB1c2VUb29scyA/IGNvbnRleHQudG9vbFVzZUNvbnRleHQub3B0aW9ucy50b29scyA6IFtdXG5cbiAgICAgIC8vIEdldCBtb2RlbCAobGF6eSBsb2FkZWQpXG4gICAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5nZXRNb2RlbChjb250ZXh0KVxuXG4gICAgICAvLyBNYWtlIEFQSSBjYWxsXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5TW9kZWxXaXRob3V0U3RyZWFtaW5nKHtcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHN5c3RlbVByb21wdCxcbiAgICAgICAgdGhpbmtpbmdDb25maWc6IHsgdHlwZTogJ2Rpc2FibGVkJyBhcyBjb25zdCB9LFxuICAgICAgICB0b29scyxcbiAgICAgICAgc2lnbmFsOiBjcmVhdGVBYm9ydENvbnRyb2xsZXIoKS5zaWduYWwsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBnZXRUb29sUGVybWlzc2lvbkNvbnRleHQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFwcFN0YXRlID0gY29udGV4dC50b29sVXNlQ29udGV4dC5nZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgICByZXR1cm4gYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICB0b29sQ2hvaWNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246XG4gICAgICAgICAgICBjb250ZXh0LnRvb2xVc2VDb250ZXh0Lm9wdGlvbnMuaXNOb25JbnRlcmFjdGl2ZVNlc3Npb24sXG4gICAgICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OlxuICAgICAgICAgICAgISFjb250ZXh0LnRvb2xVc2VDb250ZXh0Lm9wdGlvbnMuYXBwZW5kU3lzdGVtUHJvbXB0LFxuICAgICAgICAgIHRlbXBlcmF0dXJlT3ZlcnJpZGU6IDAsXG4gICAgICAgICAgYWdlbnRzOiBjb250ZXh0LnRvb2xVc2VDb250ZXh0Lm9wdGlvbnMuYWdlbnREZWZpbml0aW9ucy5hY3RpdmVBZ2VudHMsXG4gICAgICAgICAgcXVlcnlTb3VyY2U6IGNvbmZpZy5uYW1lLFxuICAgICAgICAgIG1jcFRvb2xzOiBbXSxcbiAgICAgICAgICBhZ2VudElkOiBjb250ZXh0LnRvb2xVc2VDb250ZXh0LmFnZW50SWQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICAvLyBQYXJzZSByZXNwb25zZVxuICAgICAgY29uc3QgY29udGVudCA9IGV4dHJhY3RUZXh0Q29udGVudChyZXNwb25zZS5tZXNzYWdlLmNvbnRlbnQpLnRyaW0oKVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb25maWcucGFyc2VSZXNwb25zZShjb250ZW50LCBjb250ZXh0KVxuICAgICAgICBjb25maWcubG9nUmVzdWx0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHF1ZXJ5TmFtZTogY29uZmlnLm5hbWUsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHJlc3BvbnNlLm1lc3NhZ2UuaWQsXG4gICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICApXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25maWcubG9nUmVzdWx0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICBxdWVyeU5hbWU6IGNvbmZpZy5uYW1lLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yIGFzIEVycm9yLFxuICAgICAgICAgICAgdXVpZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IodG9FcnJvcihlcnJvcikpXG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgQ0FDSEVfUEFUSFMgfSBmcm9tICcuL2NhY2hlUGF0aHMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQ29uZmlnSG9tZURpciB9IGZyb20gJy4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyB0eXBlIEZzT3BlcmF0aW9ucywgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgY2xlYW51cE9sZEltYWdlQ2FjaGVzIH0gZnJvbSAnLi9pbWFnZVN0b3JlLmpzJ1xuaW1wb3J0ICogYXMgbG9ja2ZpbGUgZnJvbSAnLi9sb2NrZmlsZS5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5pbXBvcnQgeyBjbGVhbnVwT2xkVmVyc2lvbnMgfSBmcm9tICcuL25hdGl2ZUluc3RhbGxlci9pbmRleC5qcydcbmltcG9ydCB7IGNsZWFudXBPbGRQYXN0ZXMgfSBmcm9tICcuL3Bhc3RlU3RvcmUuanMnXG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RpciB9IGZyb20gJy4vc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBnZXRTZXR0aW5nc1dpdGhBbGxFcnJvcnMgfSBmcm9tICcuL3NldHRpbmdzL2FsbEVycm9ycy5qcydcbmltcG9ydCB7XG4gIGdldFNldHRpbmdzX0RFUFJFQ0FURUQsXG4gIHJhd1NldHRpbmdzQ29udGFpbnNLZXksXG59IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBUT09MX1JFU1VMVFNfU1VCRElSIH0gZnJvbSAnLi90b29sUmVzdWx0U3RvcmFnZS5qcydcbmltcG9ydCB7IGNsZWFudXBTdGFsZUFnZW50V29ya3RyZWVzIH0gZnJvbSAnLi93b3JrdHJlZS5qcydcblxuY29uc3QgREVGQVVMVF9DTEVBTlVQX1BFUklPRF9EQVlTID0gMzBcblxuZnVuY3Rpb24gZ2V0Q3V0b2ZmRGF0ZSgpOiBEYXRlIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5nc19ERVBSRUNBVEVEKCkgfHwge31cbiAgY29uc3QgY2xlYW51cFBlcmlvZERheXMgPVxuICAgIHNldHRpbmdzLmNsZWFudXBQZXJpb2REYXlzID8/IERFRkFVTFRfQ0xFQU5VUF9QRVJJT0RfREFZU1xuICBjb25zdCBjbGVhbnVwUGVyaW9kTXMgPSBjbGVhbnVwUGVyaW9kRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkgLSBjbGVhbnVwUGVyaW9kTXMpXG59XG5cbmV4cG9ydCB0eXBlIENsZWFudXBSZXN1bHQgPSB7XG4gIG1lc3NhZ2VzOiBudW1iZXJcbiAgZXJyb3JzOiBudW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsZWFudXBSZXN1bHRzKFxuICBhOiBDbGVhbnVwUmVzdWx0LFxuICBiOiBDbGVhbnVwUmVzdWx0LFxuKTogQ2xlYW51cFJlc3VsdCB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IGEubWVzc2FnZXMgKyBiLm1lc3NhZ2VzLFxuICAgIGVycm9yczogYS5lcnJvcnMgKyBiLmVycm9ycyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZpbGVOYW1lVG9EYXRlKGZpbGVuYW1lOiBzdHJpbmcpOiBEYXRlIHtcbiAgY29uc3QgaXNvU3RyID0gZmlsZW5hbWVcbiAgICAuc3BsaXQoJy4nKVswXSFcbiAgICAucmVwbGFjZSgvVChcXGR7Mn0pLShcXGR7Mn0pLShcXGR7Mn0pLShcXGR7M30pWi8sICdUJDE6JDI6JDMuJDRaJylcbiAgcmV0dXJuIG5ldyBEYXRlKGlzb1N0cilcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2xlYW51cE9sZEZpbGVzSW5EaXJlY3RvcnkoXG4gIGRpclBhdGg6IHN0cmluZyxcbiAgY3V0b2ZmRGF0ZTogRGF0ZSxcbiAgaXNNZXNzYWdlUGF0aDogYm9vbGVhbixcbik6IFByb21pc2U8Q2xlYW51cFJlc3VsdD4ge1xuICBjb25zdCByZXN1bHQ6IENsZWFudXBSZXN1bHQgPSB7IG1lc3NhZ2VzOiAwLCBlcnJvcnM6IDAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBnZXRGc0ltcGxlbWVudGF0aW9uKCkucmVhZGRpcihkaXJQYXRoKVxuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBDb252ZXJ0IGZpbGVuYW1lIGZvcm1hdCB3aGVyZSBhbGwgJzouJyB3ZXJlIHJlcGxhY2VkIHdpdGggJy0nXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGNvbnZlcnRGaWxlTmFtZVRvRGF0ZShmaWxlLm5hbWUpXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPCBjdXRvZmZEYXRlKSB7XG4gICAgICAgICAgYXdhaXQgZ2V0RnNJbXBsZW1lbnRhdGlvbigpLnVubGluayhqb2luKGRpclBhdGgsIGZpbGUubmFtZSkpXG4gICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBhcHByb3ByaWF0ZSBjb3VudGVyXG4gICAgICAgICAgaWYgKGlzTWVzc2FnZVBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcysrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvcnMrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTG9nIGJ1dCBjb250aW51ZSBwcm9jZXNzaW5nIG90aGVyIGZpbGVzXG4gICAgICAgIGxvZ0Vycm9yKGVycm9yIGFzIEVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAvLyBJZ25vcmUgaWYgZGlyZWN0b3J5IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAnY29kZScgaW4gZXJyb3IgJiYgZXJyb3IuY29kZSAhPT0gJ0VOT0VOVCcpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFudXBPbGRNZXNzYWdlRmlsZXMoKTogUHJvbWlzZTxDbGVhbnVwUmVzdWx0PiB7XG4gIGNvbnN0IGZzSW1wbCA9IGdldEZzSW1wbGVtZW50YXRpb24oKVxuICBjb25zdCBjdXRvZmZEYXRlID0gZ2V0Q3V0b2ZmRGF0ZSgpXG4gIGNvbnN0IGVycm9yUGF0aCA9IENBQ0hFX1BBVEhTLmVycm9ycygpXG4gIGNvbnN0IGJhc2VDYWNoZVBhdGggPSBDQUNIRV9QQVRIUy5iYXNlTG9ncygpXG5cbiAgLy8gQ2xlYW4gdXAgbWVzc2FnZSBhbmQgZXJyb3IgbG9nc1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgY2xlYW51cE9sZEZpbGVzSW5EaXJlY3RvcnkoZXJyb3JQYXRoLCBjdXRvZmZEYXRlLCBmYWxzZSlcblxuICAvLyBDbGVhbiB1cCBNQ1AgbG9nc1xuICB0cnkge1xuICAgIGxldCBkaXJlbnRzXG4gICAgdHJ5IHtcbiAgICAgIGRpcmVudHMgPSBhd2FpdCBmc0ltcGwucmVhZGRpcihiYXNlQ2FjaGVQYXRoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IG1jcExvZ0RpcnMgPSBkaXJlbnRzXG4gICAgICAuZmlsdGVyKFxuICAgICAgICBkaXJlbnQgPT4gZGlyZW50LmlzRGlyZWN0b3J5KCkgJiYgZGlyZW50Lm5hbWUuc3RhcnRzV2l0aCgnbWNwLWxvZ3MtJyksXG4gICAgICApXG4gICAgICAubWFwKGRpcmVudCA9PiBqb2luKGJhc2VDYWNoZVBhdGgsIGRpcmVudC5uYW1lKSlcblxuICAgIGZvciAoY29uc3QgbWNwTG9nRGlyIG9mIG1jcExvZ0RpcnMpIHtcbiAgICAgIC8vIENsZWFuIHVwIGZpbGVzIGluIE1DUCBsb2cgZGlyZWN0b3J5XG4gICAgICByZXN1bHQgPSBhZGRDbGVhbnVwUmVzdWx0cyhcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhd2FpdCBjbGVhbnVwT2xkRmlsZXNJbkRpcmVjdG9yeShtY3BMb2dEaXIsIGN1dG9mZkRhdGUsIHRydWUpLFxuICAgICAgKVxuICAgICAgYXdhaXQgdHJ5Um1kaXIobWNwTG9nRGlyLCBmc0ltcGwpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICdjb2RlJyBpbiBlcnJvciAmJiBlcnJvci5jb2RlICE9PSAnRU5PRU5UJykge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5hc3luYyBmdW5jdGlvbiB1bmxpbmtJZk9sZChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgY3V0b2ZmRGF0ZTogRGF0ZSxcbiAgZnNJbXBsOiBGc09wZXJhdGlvbnMsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmc0ltcGwuc3RhdChmaWxlUGF0aClcbiAgaWYgKHN0YXRzLm10aW1lIDwgY3V0b2ZmRGF0ZSkge1xuICAgIGF3YWl0IGZzSW1wbC51bmxpbmsoZmlsZVBhdGgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gdHJ5Um1kaXIoZGlyUGF0aDogc3RyaW5nLCBmc0ltcGw6IEZzT3BlcmF0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGF3YWl0IGZzSW1wbC5ybWRpcihkaXJQYXRoKVxuICB9IGNhdGNoIHtcbiAgICAvLyBub3QgZW1wdHkgLyBkb2Vzbid0IGV4aXN0XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFudXBPbGRTZXNzaW9uRmlsZXMoKTogUHJvbWlzZTxDbGVhbnVwUmVzdWx0PiB7XG4gIGNvbnN0IGN1dG9mZkRhdGUgPSBnZXRDdXRvZmZEYXRlKClcbiAgY29uc3QgcmVzdWx0OiBDbGVhbnVwUmVzdWx0ID0geyBtZXNzYWdlczogMCwgZXJyb3JzOiAwIH1cbiAgY29uc3QgcHJvamVjdHNEaXIgPSBnZXRQcm9qZWN0c0RpcigpXG4gIGNvbnN0IGZzSW1wbCA9IGdldEZzSW1wbGVtZW50YXRpb24oKVxuXG4gIGxldCBwcm9qZWN0RGlyZW50c1xuICB0cnkge1xuICAgIHByb2plY3REaXJlbnRzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIocHJvamVjdHNEaXIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvamVjdERpcmVudCBvZiBwcm9qZWN0RGlyZW50cykge1xuICAgIGlmICghcHJvamVjdERpcmVudC5pc0RpcmVjdG9yeSgpKSBjb250aW51ZVxuICAgIGNvbnN0IHByb2plY3REaXIgPSBqb2luKHByb2plY3RzRGlyLCBwcm9qZWN0RGlyZW50Lm5hbWUpXG5cbiAgICAvLyBTaW5nbGUgcmVhZGRpciBwZXIgcHJvamVjdCBkaXJlY3RvcnkgXHUyMDE0IHBhcnRpdGlvbiBpbnRvIGZpbGVzIGFuZCBzZXNzaW9uIGRpcnNcbiAgICBsZXQgZW50cmllc1xuICAgIHRyeSB7XG4gICAgICBlbnRyaWVzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIocHJvamVjdERpcilcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJlc3VsdC5lcnJvcnMrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmIChlbnRyeS5pc0ZpbGUoKSkge1xuICAgICAgICBpZiAoIWVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29ubCcpICYmICFlbnRyeS5uYW1lLmVuZHNXaXRoKCcuY2FzdCcpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGF3YWl0IHVubGlua0lmT2xkKGpvaW4ocHJvamVjdERpciwgZW50cnkubmFtZSksIGN1dG9mZkRhdGUsIGZzSW1wbClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcysrXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXN1bHQuZXJyb3JzKytcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIC8vIFNlc3Npb24gZGlyZWN0b3J5IFx1MjAxNCBjbGVhbiB1cCB0b29sLXJlc3VsdHMvPHRvb2xEaXI+LyogYmVuZWF0aCBpdFxuICAgICAgICBjb25zdCBzZXNzaW9uRGlyID0gam9pbihwcm9qZWN0RGlyLCBlbnRyeS5uYW1lKVxuICAgICAgICBjb25zdCB0b29sUmVzdWx0c0RpciA9IGpvaW4oc2Vzc2lvbkRpciwgVE9PTF9SRVNVTFRTX1NVQkRJUilcbiAgICAgICAgbGV0IHRvb2xEaXJzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdG9vbERpcnMgPSBhd2FpdCBmc0ltcGwucmVhZGRpcih0b29sUmVzdWx0c0RpcilcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gTm8gdG9vbC1yZXN1bHRzIGRpciBcdTIwMTQgc3RpbGwgdHJ5IHRvIHJlbW92ZSBhbiBlbXB0eSBzZXNzaW9uIGRpclxuICAgICAgICAgIGF3YWl0IHRyeVJtZGlyKHNlc3Npb25EaXIsIGZzSW1wbClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdG9vbEVudHJ5IG9mIHRvb2xEaXJzKSB7XG4gICAgICAgICAgaWYgKHRvb2xFbnRyeS5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGF3YWl0IHVubGlua0lmT2xkKFxuICAgICAgICAgICAgICAgICAgam9pbih0b29sUmVzdWx0c0RpciwgdG9vbEVudHJ5Lm5hbWUpLFxuICAgICAgICAgICAgICAgICAgY3V0b2ZmRGF0ZSxcbiAgICAgICAgICAgICAgICAgIGZzSW1wbCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcysrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICByZXN1bHQuZXJyb3JzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRvb2xFbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBjb25zdCB0b29sRGlyUGF0aCA9IGpvaW4odG9vbFJlc3VsdHNEaXIsIHRvb2xFbnRyeS5uYW1lKVxuICAgICAgICAgICAgbGV0IHRvb2xGaWxlc1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdG9vbEZpbGVzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIodG9vbERpclBhdGgpXG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdGYgb2YgdG9vbEZpbGVzKSB7XG4gICAgICAgICAgICAgIGlmICghdGYuaXNGaWxlKCkpIGNvbnRpbnVlXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgYXdhaXQgdW5saW5rSWZPbGQoXG4gICAgICAgICAgICAgICAgICAgIGpvaW4odG9vbERpclBhdGgsIHRmLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBjdXRvZmZEYXRlLFxuICAgICAgICAgICAgICAgICAgICBmc0ltcGwsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQubWVzc2FnZXMrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVycm9ycysrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRyeVJtZGlyKHRvb2xEaXJQYXRoLCBmc0ltcGwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRyeVJtZGlyKHRvb2xSZXN1bHRzRGlyLCBmc0ltcGwpXG4gICAgICAgIGF3YWl0IHRyeVJtZGlyKHNlc3Npb25EaXIsIGZzSW1wbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCB0cnlSbWRpcihwcm9qZWN0RGlyLCBmc0ltcGwpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogR2VuZXJpYyBoZWxwZXIgZm9yIGNsZWFuaW5nIHVwIG9sZCBmaWxlcyBpbiBhIHNpbmdsZSBkaXJlY3RvcnlcbiAqIEBwYXJhbSBkaXJQYXRoIFBhdGggdG8gdGhlIGRpcmVjdG9yeSB0byBjbGVhblxuICogQHBhcmFtIGV4dGVuc2lvbiBGaWxlIGV4dGVuc2lvbiB0byBmaWx0ZXIgKGUuZy4sICcubWQnLCAnLmpzb25sJylcbiAqIEBwYXJhbSByZW1vdmVFbXB0eURpciBXaGV0aGVyIHRvIHJlbW92ZSB0aGUgZGlyZWN0b3J5IGlmIGVtcHR5IGFmdGVyIGNsZWFudXBcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYW51cFNpbmdsZURpcmVjdG9yeShcbiAgZGlyUGF0aDogc3RyaW5nLFxuICBleHRlbnNpb246IHN0cmluZyxcbiAgcmVtb3ZlRW1wdHlEaXI6IGJvb2xlYW4gPSB0cnVlLFxuKTogUHJvbWlzZTxDbGVhbnVwUmVzdWx0PiB7XG4gIGNvbnN0IGN1dG9mZkRhdGUgPSBnZXRDdXRvZmZEYXRlKClcbiAgY29uc3QgcmVzdWx0OiBDbGVhbnVwUmVzdWx0ID0geyBtZXNzYWdlczogMCwgZXJyb3JzOiAwIH1cbiAgY29uc3QgZnNJbXBsID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG5cbiAgbGV0IGRpcmVudHNcbiAgdHJ5IHtcbiAgICBkaXJlbnRzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIoZGlyUGF0aClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZm9yIChjb25zdCBkaXJlbnQgb2YgZGlyZW50cykge1xuICAgIGlmICghZGlyZW50LmlzRmlsZSgpIHx8ICFkaXJlbnQubmFtZS5lbmRzV2l0aChleHRlbnNpb24pKSBjb250aW51ZVxuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgdW5saW5rSWZPbGQoam9pbihkaXJQYXRoLCBkaXJlbnQubmFtZSksIGN1dG9mZkRhdGUsIGZzSW1wbCkpIHtcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2VzKytcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJlc3VsdC5lcnJvcnMrK1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZW1vdmVFbXB0eURpcikge1xuICAgIGF3YWl0IHRyeVJtZGlyKGRpclBhdGgsIGZzSW1wbClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXBPbGRQbGFuRmlsZXMoKTogUHJvbWlzZTxDbGVhbnVwUmVzdWx0PiB7XG4gIGNvbnN0IHBsYW5zRGlyID0gam9pbihnZXRDbGF1ZGVDb25maWdIb21lRGlyKCksICdwbGFucycpXG4gIHJldHVybiBjbGVhbnVwU2luZ2xlRGlyZWN0b3J5KHBsYW5zRGlyLCAnLm1kJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFudXBPbGRGaWxlSGlzdG9yeUJhY2t1cHMoKTogUHJvbWlzZTxDbGVhbnVwUmVzdWx0PiB7XG4gIGNvbnN0IGN1dG9mZkRhdGUgPSBnZXRDdXRvZmZEYXRlKClcbiAgY29uc3QgcmVzdWx0OiBDbGVhbnVwUmVzdWx0ID0geyBtZXNzYWdlczogMCwgZXJyb3JzOiAwIH1cbiAgY29uc3QgZnNJbXBsID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWdEaXIgPSBnZXRDbGF1ZGVDb25maWdIb21lRGlyKClcbiAgICBjb25zdCBmaWxlSGlzdG9yeVN0b3JhZ2VEaXIgPSBqb2luKGNvbmZpZ0RpciwgJ2ZpbGUtaGlzdG9yeScpXG5cbiAgICBsZXQgZGlyZW50c1xuICAgIHRyeSB7XG4gICAgICBkaXJlbnRzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIoZmlsZUhpc3RvcnlTdG9yYWdlRGlyKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVIaXN0b3J5U2Vzc2lvbnNEaXJzID0gZGlyZW50c1xuICAgICAgLmZpbHRlcihkaXJlbnQgPT4gZGlyZW50LmlzRGlyZWN0b3J5KCkpXG4gICAgICAubWFwKGRpcmVudCA9PiBqb2luKGZpbGVIaXN0b3J5U3RvcmFnZURpciwgZGlyZW50Lm5hbWUpKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBmaWxlSGlzdG9yeVNlc3Npb25zRGlycy5tYXAoYXN5bmMgZmlsZUhpc3RvcnlTZXNzaW9uRGlyID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzdGF0cyA9IGF3YWl0IGZzSW1wbC5zdGF0KGZpbGVIaXN0b3J5U2Vzc2lvbkRpcilcbiAgICAgICAgICBpZiAoc3RhdHMubXRpbWUgPCBjdXRvZmZEYXRlKSB7XG4gICAgICAgICAgICBhd2FpdCBmc0ltcGwucm0oZmlsZUhpc3RvcnlTZXNzaW9uRGlyLCB7XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzdWx0Lm1lc3NhZ2VzKytcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHJlc3VsdC5lcnJvcnMrK1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApXG5cbiAgICBhd2FpdCB0cnlSbWRpcihmaWxlSGlzdG9yeVN0b3JhZ2VEaXIsIGZzSW1wbClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvciBhcyBFcnJvcilcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFudXBPbGRTZXNzaW9uRW52RGlycygpOiBQcm9taXNlPENsZWFudXBSZXN1bHQ+IHtcbiAgY29uc3QgY3V0b2ZmRGF0ZSA9IGdldEN1dG9mZkRhdGUoKVxuICBjb25zdCByZXN1bHQ6IENsZWFudXBSZXN1bHQgPSB7IG1lc3NhZ2VzOiAwLCBlcnJvcnM6IDAgfVxuICBjb25zdCBmc0ltcGwgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcblxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZ0RpciA9IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKVxuICAgIGNvbnN0IHNlc3Npb25FbnZCYXNlRGlyID0gam9pbihjb25maWdEaXIsICdzZXNzaW9uLWVudicpXG5cbiAgICBsZXQgZGlyZW50c1xuICAgIHRyeSB7XG4gICAgICBkaXJlbnRzID0gYXdhaXQgZnNJbXBsLnJlYWRkaXIoc2Vzc2lvbkVudkJhc2VEaXIpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbkVudkRpcnMgPSBkaXJlbnRzXG4gICAgICAuZmlsdGVyKGRpcmVudCA9PiBkaXJlbnQuaXNEaXJlY3RvcnkoKSlcbiAgICAgIC5tYXAoZGlyZW50ID0+IGpvaW4oc2Vzc2lvbkVudkJhc2VEaXIsIGRpcmVudC5uYW1lKSlcblxuICAgIGZvciAoY29uc3Qgc2Vzc2lvbkVudkRpciBvZiBzZXNzaW9uRW52RGlycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmc0ltcGwuc3RhdChzZXNzaW9uRW52RGlyKVxuICAgICAgICBpZiAoc3RhdHMubXRpbWUgPCBjdXRvZmZEYXRlKSB7XG4gICAgICAgICAgYXdhaXQgZnNJbXBsLnJtKHNlc3Npb25FbnZEaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KVxuICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcysrXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN1bHQuZXJyb3JzKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCB0cnlSbWRpcihzZXNzaW9uRW52QmFzZURpciwgZnNJbXBsKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yIGFzIEVycm9yKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIENsZWFucyB1cCBvbGQgZGVidWcgbG9nIGZpbGVzIGZyb20gfi8uY2xhdWRlL2RlYnVnL1xuICogUHJlc2VydmVzIHRoZSAnbGF0ZXN0JyBzeW1saW5rIHdoaWNoIHBvaW50cyB0byB0aGUgY3VycmVudCBzZXNzaW9uJ3MgbG9nLlxuICogRGVidWcgbG9ncyBjYW4gZ3JvdyB2ZXJ5IGxhcmdlIChlc3BlY2lhbGx5IHdpdGggdGhlIGluZmluaXRlIGxvZ2dpbmcgbG9vcCBidWcpXG4gKiBhbmQgYWNjdW11bGF0ZSBpbmRlZmluaXRlbHkgd2l0aG91dCB0aGlzIGNsZWFudXAuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwT2xkRGVidWdMb2dzKCk6IFByb21pc2U8Q2xlYW51cFJlc3VsdD4ge1xuICBjb25zdCBjdXRvZmZEYXRlID0gZ2V0Q3V0b2ZmRGF0ZSgpXG4gIGNvbnN0IHJlc3VsdDogQ2xlYW51cFJlc3VsdCA9IHsgbWVzc2FnZXM6IDAsIGVycm9yczogMCB9XG4gIGNvbnN0IGZzSW1wbCA9IGdldEZzSW1wbGVtZW50YXRpb24oKVxuICBjb25zdCBkZWJ1Z0RpciA9IGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAnZGVidWcnKVxuXG4gIGxldCBkaXJlbnRzXG4gIHRyeSB7XG4gICAgZGlyZW50cyA9IGF3YWl0IGZzSW1wbC5yZWFkZGlyKGRlYnVnRGlyKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmb3IgKGNvbnN0IGRpcmVudCBvZiBkaXJlbnRzKSB7XG4gICAgLy8gUHJlc2VydmUgdGhlICdsYXRlc3QnIHN5bWxpbmtcbiAgICBpZiAoXG4gICAgICAhZGlyZW50LmlzRmlsZSgpIHx8XG4gICAgICAhZGlyZW50Lm5hbWUuZW5kc1dpdGgoJy50eHQnKSB8fFxuICAgICAgZGlyZW50Lm5hbWUgPT09ICdsYXRlc3QnXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IHVubGlua0lmT2xkKGpvaW4oZGVidWdEaXIsIGRpcmVudC5uYW1lKSwgY3V0b2ZmRGF0ZSwgZnNJbXBsKSkge1xuICAgICAgICByZXN1bHQubWVzc2FnZXMrK1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmVzdWx0LmVycm9ycysrXG4gICAgfVxuICB9XG5cbiAgLy8gSW50ZW50aW9uYWxseSBkbyBOT1QgcmVtb3ZlIGRlYnVnRGlyIGV2ZW4gaWYgZW1wdHkgXHUyMDE0IG5lZWRlZCBmb3IgZnV0dXJlIGxvZ3NcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBPTkVfREFZX01TID0gMjQgKiA2MCAqIDYwICogMTAwMFxuXG4vKipcbiAqIENsZWFuIHVwIG9sZCBucG0gY2FjaGUgZW50cmllcyBmb3IgQW50aHJvcGljIHBhY2thZ2VzLlxuICogVGhpcyBoZWxwcyByZWR1Y2UgZGlzayB1c2FnZSBzaW5jZSB3ZSBwdWJsaXNoIG1hbnkgZGV2IHZlcnNpb25zIHBlciBkYXkuXG4gKiBPbmx5IHJ1bnMgb25jZSBwZXIgZGF5IGZvciBBbnQgdXNlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwTnBtQ2FjaGVGb3JBbnRocm9waWNQYWNrYWdlcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbWFya2VyUGF0aCA9IGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAnLm5wbS1jYWNoZS1jbGVhbnVwJylcblxuICB0cnkge1xuICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5zdGF0KG1hcmtlclBhdGgpXG4gICAgaWYgKERhdGUubm93KCkgLSBzdGF0Lm10aW1lTXMgPCBPTkVfREFZX01TKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ25wbSBjYWNoZSBjbGVhbnVwOiBza2lwcGluZywgcmFuIHJlY2VudGx5JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gRmlsZSBkb2Vzbid0IGV4aXN0LCBwcm9jZWVkIHdpdGggY2xlYW51cFxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBsb2NrZmlsZS5sb2NrKG1hcmtlclBhdGgsIHsgcmV0cmllczogMCwgcmVhbHBhdGg6IGZhbHNlIH0pXG4gIH0gY2F0Y2gge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnbnBtIGNhY2hlIGNsZWFudXA6IHNraXBwaW5nLCBsb2NrIGhlbGQnKVxuICAgIHJldHVyblxuICB9XG5cbiAgbG9nRm9yRGVidWdnaW5nKCducG0gY2FjaGUgY2xlYW51cDogc3RhcnRpbmcnKVxuXG4gIGNvbnN0IG5wbUNhY2hlUGF0aCA9IGpvaW4oaG9tZWRpcigpLCAnLm5wbScsICdfY2FjYWNoZScpXG5cbiAgY29uc3QgTlBNX0NBQ0hFX1JFVEVOVElPTl9DT1VOVCA9IDVcblxuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIHRyeSB7XG4gICAgY29uc3QgY2FjYWNoZSA9IGF3YWl0IGltcG9ydCgnY2FjYWNoZScpXG4gICAgY29uc3QgY3V0b2ZmID0gc3RhcnRUaW1lIC0gT05FX0RBWV9NU1xuXG4gICAgLy8gU3RyZWFtIGluZGV4IGVudHJpZXMgYW5kIGNvbGxlY3QgYWxsIEFudGhyb3BpYyBwYWNrYWdlIGVudHJpZXMuXG4gICAgLy8gUHJldmlvdXMgaW1wbGVtZW50YXRpb24gdXNlZCBjYWNhY2hlLnZlcmlmeSgpIHdoaWNoIGRvZXMgYSBmdWxsXG4gICAgLy8gaW50ZWdyaXR5IGNoZWNrICsgR0Mgb2YgdGhlIEVOVElSRSBjYWNoZSBcdTIwMTQgTyhhbGwgY29udGVudCBibG9icykuXG4gICAgLy8gT24gbGFyZ2UgY2FjaGVzIHRoaXMgdG9vayA2MCsgc2Vjb25kcyBhbmQgYmxvY2tlZCB0aGUgZXZlbnQgbG9vcC5cbiAgICBjb25zdCBzdHJlYW0gPSBjYWNhY2hlLmxzLnN0cmVhbShucG1DYWNoZVBhdGgpXG4gICAgY29uc3QgYW50aHJvcGljRW50cmllczogeyBrZXk6IHN0cmluZzsgdGltZTogbnVtYmVyIH1bXSA9IFtdXG4gICAgZm9yIGF3YWl0IChjb25zdCBlbnRyeSBvZiBzdHJlYW0gYXMgQXN5bmNJdGVyYWJsZTx7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgdGltZTogbnVtYmVyXG4gICAgfT4pIHtcbiAgICAgIGlmIChlbnRyeS5rZXkuaW5jbHVkZXMoJ0BhbnRocm9waWMtYWkvY2xhdWRlLScpKSB7XG4gICAgICAgIGFudGhyb3BpY0VudHJpZXMucHVzaCh7IGtleTogZW50cnkua2V5LCB0aW1lOiBlbnRyeS50aW1lIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR3JvdXAgYnkgcGFja2FnZSBuYW1lIChldmVyeXRoaW5nIGJlZm9yZSB0aGUgbGFzdCBAdmVyc2lvbiBzZXBhcmF0b3IpXG4gICAgY29uc3QgYnlQYWNrYWdlID0gbmV3IE1hcDxzdHJpbmcsIHsga2V5OiBzdHJpbmc7IHRpbWU6IG51bWJlciB9W10+KClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGFudGhyb3BpY0VudHJpZXMpIHtcbiAgICAgIGNvbnN0IGF0VmVyc2lvbklkeCA9IGVudHJ5LmtleS5sYXN0SW5kZXhPZignQCcpXG4gICAgICBjb25zdCBwa2dOYW1lID1cbiAgICAgICAgYXRWZXJzaW9uSWR4ID4gMCA/IGVudHJ5LmtleS5zbGljZSgwLCBhdFZlcnNpb25JZHgpIDogZW50cnkua2V5XG4gICAgICBjb25zdCBleGlzdGluZyA9IGJ5UGFja2FnZS5nZXQocGtnTmFtZSkgPz8gW11cbiAgICAgIGV4aXN0aW5nLnB1c2goZW50cnkpXG4gICAgICBieVBhY2thZ2Uuc2V0KHBrZ05hbWUsIGV4aXN0aW5nKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbnRyaWVzIG9sZGVyIHRoYW4gMSBkYXkgT1IgYmV5b25kIHRoZSB0b3AgTiBtb3N0IHJlY2VudCBwZXIgcGFja2FnZVxuICAgIGNvbnN0IGtleXNUb1JlbW92ZTogc3RyaW5nW10gPSBbXVxuICAgIGZvciAoY29uc3QgWywgZW50cmllc10gb2YgYnlQYWNrYWdlKSB7XG4gICAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGIudGltZSAtIGEudGltZSkgLy8gbmV3ZXN0IGZpcnN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2ldIVxuICAgICAgICBpZiAoZW50cnkudGltZSA8IGN1dG9mZiB8fCBpID49IE5QTV9DQUNIRV9SRVRFTlRJT05fQ09VTlQpIHtcbiAgICAgICAgICBrZXlzVG9SZW1vdmUucHVzaChlbnRyeS5rZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGtleXNUb1JlbW92ZS5tYXAoa2V5ID0+IGNhY2FjaGUucm0uZW50cnkobnBtQ2FjaGVQYXRoLCBrZXkpKSxcbiAgICApXG5cbiAgICBhd2FpdCBmcy53cml0ZUZpbGUobWFya2VyUGF0aCwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKVxuXG4gICAgY29uc3QgZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICBpZiAoa2V5c1RvUmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYG5wbSBjYWNoZSBjbGVhbnVwOiBSZW1vdmVkICR7a2V5c1RvUmVtb3ZlLmxlbmd0aH0gb2xkIEBhbnRocm9waWMtYWkgZW50cmllcyBpbiAke2R1cmF0aW9uTXN9bXNgLFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoYG5wbSBjYWNoZSBjbGVhbnVwOiBjb21wbGV0ZWQgaW4gJHtkdXJhdGlvbk1zfW1zYClcbiAgICB9XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X25wbV9jYWNoZV9jbGVhbnVwJywge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uTXMsXG4gICAgICBlbnRyaWVzUmVtb3ZlZDoga2V5c1RvUmVtb3ZlLmxlbmd0aCxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yIGFzIEVycm9yKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9ucG1fY2FjaGVfY2xlYW51cCcsIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZHVyYXRpb25NczogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICB9KVxuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IGxvY2tmaWxlLnVubG9jayhtYXJrZXJQYXRoLCB7IHJlYWxwYXRoOiBmYWxzZSB9KS5jYXRjaCgoKSA9PiB7fSlcbiAgfVxufVxuXG4vKipcbiAqIFRocm90dGxlZCB3cmFwcGVyIGFyb3VuZCBjbGVhbnVwT2xkVmVyc2lvbnMgZm9yIHJlY3VycmluZyBjbGVhbnVwIGluIGxvbmctcnVubmluZyBzZXNzaW9ucy5cbiAqIFVzZXMgYSBtYXJrZXIgZmlsZSBhbmQgbG9jayB0byBlbnN1cmUgaXQgcnVucyBhdCBtb3N0IG9uY2UgcGVyIDI0IGhvdXJzLFxuICogYW5kIGRvZXMgbm90IGJsb2NrIGlmIGFub3RoZXIgcHJvY2VzcyBpcyBhbHJlYWR5IHJ1bm5pbmcgY2xlYW51cC5cbiAqIFRoZSByZWd1bGFyIGNsZWFudXBPbGRWZXJzaW9ucygpIHNob3VsZCBzdGlsbCBiZSB1c2VkIGZvciBpbnN0YWxsZXIgZmxvd3MuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwT2xkVmVyc2lvbnNUaHJvdHRsZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG1hcmtlclBhdGggPSBqb2luKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSwgJy52ZXJzaW9uLWNsZWFudXAnKVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzLnN0YXQobWFya2VyUGF0aClcbiAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXQubXRpbWVNcyA8IE9ORV9EQVlfTVMpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygndmVyc2lvbiBjbGVhbnVwOiBza2lwcGluZywgcmFuIHJlY2VudGx5JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gRmlsZSBkb2Vzbid0IGV4aXN0LCBwcm9jZWVkIHdpdGggY2xlYW51cFxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBsb2NrZmlsZS5sb2NrKG1hcmtlclBhdGgsIHsgcmV0cmllczogMCwgcmVhbHBhdGg6IGZhbHNlIH0pXG4gIH0gY2F0Y2gge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygndmVyc2lvbiBjbGVhbnVwOiBza2lwcGluZywgbG9jayBoZWxkJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZygndmVyc2lvbiBjbGVhbnVwOiBzdGFydGluZyAodGhyb3R0bGVkKScpXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjbGVhbnVwT2xkVmVyc2lvbnMoKVxuICAgIGF3YWl0IGZzLndyaXRlRmlsZShtYXJrZXJQYXRoLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgbG9ja2ZpbGUudW5sb2NrKG1hcmtlclBhdGgsIHsgcmVhbHBhdGg6IGZhbHNlIH0pLmNhdGNoKCgpID0+IHt9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwT2xkTWVzc2FnZUZpbGVzSW5CYWNrZ3JvdW5kKCk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBJZiBzZXR0aW5ncyBoYXZlIHZhbGlkYXRpb24gZXJyb3JzIGJ1dCB0aGUgdXNlciBleHBsaWNpdGx5IHNldCBjbGVhbnVwUGVyaW9kRGF5cyxcbiAgLy8gc2tpcCBjbGVhbnVwIGVudGlyZWx5IHJhdGhlciB0aGFuIGZhbGxpbmcgYmFjayB0byB0aGUgZGVmYXVsdCAoMzAgZGF5cykuXG4gIC8vIFRoaXMgcHJldmVudHMgYWNjaWRlbnRhbGx5IGRlbGV0aW5nIGZpbGVzIHdoZW4gdGhlIHVzZXIgaW50ZW5kZWQgYSBkaWZmZXJlbnQgcmV0ZW50aW9uIHBlcmlvZC5cbiAgY29uc3QgeyBlcnJvcnMgfSA9IGdldFNldHRpbmdzV2l0aEFsbEVycm9ycygpXG4gIGlmIChlcnJvcnMubGVuZ3RoID4gMCAmJiByYXdTZXR0aW5nc0NvbnRhaW5zS2V5KCdjbGVhbnVwUGVyaW9kRGF5cycpKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1NraXBwaW5nIGNsZWFudXA6IHNldHRpbmdzIGhhdmUgdmFsaWRhdGlvbiBlcnJvcnMgYnV0IGNsZWFudXBQZXJpb2REYXlzIHdhcyBleHBsaWNpdGx5IHNldC4gRml4IHNldHRpbmdzIGVycm9ycyB0byBlbmFibGUgY2xlYW51cC4nLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGF3YWl0IGNsZWFudXBPbGRNZXNzYWdlRmlsZXMoKVxuICBhd2FpdCBjbGVhbnVwT2xkU2Vzc2lvbkZpbGVzKClcbiAgYXdhaXQgY2xlYW51cE9sZFBsYW5GaWxlcygpXG4gIGF3YWl0IGNsZWFudXBPbGRGaWxlSGlzdG9yeUJhY2t1cHMoKVxuICBhd2FpdCBjbGVhbnVwT2xkU2Vzc2lvbkVudkRpcnMoKVxuICBhd2FpdCBjbGVhbnVwT2xkRGVidWdMb2dzKClcbiAgYXdhaXQgY2xlYW51cE9sZEltYWdlQ2FjaGVzKClcbiAgYXdhaXQgY2xlYW51cE9sZFBhc3RlcyhnZXRDdXRvZmZEYXRlKCkpXG4gIGNvbnN0IHJlbW92ZWRXb3JrdHJlZXMgPSBhd2FpdCBjbGVhbnVwU3RhbGVBZ2VudFdvcmt0cmVlcyhnZXRDdXRvZmZEYXRlKCkpXG4gIGlmIChyZW1vdmVkV29ya3RyZWVzID4gMCkge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV93b3JrdHJlZV9jbGVhbnVwJywgeyByZW1vdmVkOiByZW1vdmVkV29ya3RyZWVzIH0pXG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICBhd2FpdCBjbGVhbnVwTnBtQ2FjaGVGb3JBbnRo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QUFtQixNQUFNLDJCQUEyQixjQUFjLENBQUM7QUFDekUsTUFBSSxtQkFBbUIsR0FBRztBQUN4QixhQUFTLDBCQUEwQixFQUFFLFNBQVMsaUJBQWlCLENBQUM7QUFBQSxFQUNsRTtBQUNBLE1BQUksUUFBUSxJQUFJLGNBQWMsT0FBTztBQUNuQyxVQUFNLG9DQUFvQztBQUFBLEVBQzVDO0FBQ0Y7OztBSHBrQkE7QUFDQTtBQWhCQSxJQUFNLHdCQUF3QixRQUFRLGtCQUFrQixJQUNuRCxrRUFDRDtBQUNKLElBQU0seUJBQXlCLFFBQVEsV0FBVyxJQUM3QyxvRUFDRDtBQWNKLElBQU0sZ0NBQWdDLEtBQUssS0FBSyxLQUFLO0FBR3JELElBQU0sdURBQXVELEtBQUssS0FBSztBQUVoRSxTQUFTLDhCQUFvQztBQUNsRCxPQUFLLGNBQWM7QUFDbkIsT0FBSyxxQkFBcUI7QUFDMUIsTUFBSSxRQUFRLGtCQUFrQixHQUFHO0FBQy9CLDBCQUF1QixvQkFBb0I7QUFBQSxFQUM3QztBQUNBLGdCQUFjO0FBQ2QsT0FBSyw2Q0FBNkM7QUFDbEQsTUFBSSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsR0FBRztBQUM5QyxTQUFLLHVCQUF3QixpQ0FBaUM7QUFBQSxFQUNoRTtBQUVBLE1BQUksZUFBZTtBQUNuQixpQkFBZSxpQkFBZ0M7QUFFN0MsUUFDRSxpQkFBaUIsS0FDakIsdUJBQXVCLElBQUksS0FBSyxJQUFJLElBQUksTUFBTyxJQUMvQztBQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGLEVBQUUsTUFBTTtBQUNSO0FBQUEsSUFDRjtBQUVBLFFBQUksY0FBYztBQUNoQixxQkFBZTtBQUNmLFlBQU0sbUNBQW1DO0FBQUEsSUFDM0M7QUFHQSxRQUNFLGlCQUFpQixLQUNqQix1QkFBdUIsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFPLElBQy9DO0FBQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0YsRUFBRSxNQUFNO0FBQ1I7QUFBQSxJQUNGO0FBRUEsVUFBTSxtQkFBbUI7QUFBQSxFQUMzQjtBQUVBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQUUsTUFBTTtBQUtSLE1BQUksUUFBUSxJQUFJLGNBQWMsT0FBTztBQUNuQyxVQUFNLFdBQVcsWUFBWSxNQUFNO0FBQ2pDLFdBQUssb0NBQW9DO0FBQ3pDLFdBQUssNEJBQTRCO0FBQUEsSUFDbkMsR0FBRyw2QkFBNkI7QUFHaEMsYUFBUyxNQUFNO0FBQUEsRUFDakI7QUFDRjsiLAogICJuYW1lcyI6IFsiam9pbiIsICJmcyIsICJzdGF0Il0KfQo=
