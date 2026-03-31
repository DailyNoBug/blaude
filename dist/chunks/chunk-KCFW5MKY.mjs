#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  djb2Hash,
  init_hash
} from "./chunk-5GKIDOKP.mjs";
import {
  getFsImplementation,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  setLastAPIRequest,
  setLastAPIRequestMessages
} from "./chunk-NGSB34MB.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/constants/xml.ts
var COMMAND_NAME_TAG, COMMAND_MESSAGE_TAG, COMMAND_ARGS_TAG, BASH_INPUT_TAG, BASH_STDOUT_TAG, BASH_STDERR_TAG, LOCAL_COMMAND_STDOUT_TAG, LOCAL_COMMAND_STDERR_TAG, LOCAL_COMMAND_CAVEAT_TAG, TERMINAL_OUTPUT_TAGS, TICK_TAG, TASK_NOTIFICATION_TAG, TASK_ID_TAG, TOOL_USE_ID_TAG, TASK_TYPE_TAG, OUTPUT_FILE_TAG, STATUS_TAG, SUMMARY_TAG, WORKTREE_TAG, WORKTREE_PATH_TAG, WORKTREE_BRANCH_TAG, REMOTE_REVIEW_TAG, REMOTE_REVIEW_PROGRESS_TAG, TEAMMATE_MESSAGE_TAG, CHANNEL_TAG, FORK_BOILERPLATE_TAG, FORK_DIRECTIVE_PREFIX, COMMON_HELP_ARGS, COMMON_INFO_ARGS;
var init_xml = __esm({
  "src/constants/xml.ts"() {
    COMMAND_NAME_TAG = "command-name";
    COMMAND_MESSAGE_TAG = "command-message";
    COMMAND_ARGS_TAG = "command-args";
    BASH_INPUT_TAG = "bash-input";
    BASH_STDOUT_TAG = "bash-stdout";
    BASH_STDERR_TAG = "bash-stderr";
    LOCAL_COMMAND_STDOUT_TAG = "local-command-stdout";
    LOCAL_COMMAND_STDERR_TAG = "local-command-stderr";
    LOCAL_COMMAND_CAVEAT_TAG = "local-command-caveat";
    TERMINAL_OUTPUT_TAGS = [
      BASH_INPUT_TAG,
      BASH_STDOUT_TAG,
      BASH_STDERR_TAG,
      LOCAL_COMMAND_STDOUT_TAG,
      LOCAL_COMMAND_STDERR_TAG,
      LOCAL_COMMAND_CAVEAT_TAG
    ];
    TICK_TAG = "tick";
    TASK_NOTIFICATION_TAG = "task-notification";
    TASK_ID_TAG = "task-id";
    TOOL_USE_ID_TAG = "tool-use-id";
    TASK_TYPE_TAG = "task-type";
    OUTPUT_FILE_TAG = "output-file";
    STATUS_TAG = "status";
    SUMMARY_TAG = "summary";
    WORKTREE_TAG = "worktree";
    WORKTREE_PATH_TAG = "worktreePath";
    WORKTREE_BRANCH_TAG = "worktreeBranch";
    REMOTE_REVIEW_TAG = "remote-review";
    REMOTE_REVIEW_PROGRESS_TAG = "remote-review-progress";
    TEAMMATE_MESSAGE_TAG = "teammate-message";
    CHANNEL_TAG = "channel";
    FORK_BOILERPLATE_TAG = "fork-boilerplate";
    FORK_DIRECTIVE_PREFIX = "Your directive: ";
    COMMON_HELP_ARGS = ["help", "-h", "--help"];
    COMMON_INFO_ARGS = [
      "list",
      "show",
      "display",
      "current",
      "view",
      "get",
      "check",
      "describe",
      "print",
      "version",
      "about",
      "status",
      "?"
    ];
  }
});

// src/types/logs.ts
function sortLogs(logs) {
  return logs.sort((a, b) => {
    const modifiedDiff = b.modified.getTime() - a.modified.getTime();
    if (modifiedDiff !== 0) {
      return modifiedDiff;
    }
    return b.created.getTime() - a.created.getTime();
  });
}
var init_logs = __esm({
  "src/types/logs.ts"() {
  }
});

// src/utils/displayTags.ts
function stripDisplayTags(text) {
  const result = text.replace(XML_TAG_BLOCK_PATTERN, "").trim();
  return result || text;
}
function stripDisplayTagsAllowEmpty(text) {
  return text.replace(XML_TAG_BLOCK_PATTERN, "").trim();
}
function stripIdeContextTags(text) {
  return text.replace(IDE_CONTEXT_TAGS_PATTERN, "").trim();
}
var XML_TAG_BLOCK_PATTERN, IDE_CONTEXT_TAGS_PATTERN;
var init_displayTags = __esm({
  "src/utils/displayTags.ts"() {
    XML_TAG_BLOCK_PATTERN = /<([a-z][\w-]*)(?:\s[^>]*)?>[\s\S]*?<\/\1>\n?/g;
    IDE_CONTEXT_TAGS_PATTERN = /<(ide_opened_file|ide_selection)(?:\s[^>]*)?>[\s\S]*?<\/\1>\n?/g;
  }
});

// src/utils/privacyLevel.ts
function getPrivacyLevel() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) {
    return "essential-traffic";
  }
  if (process.env.DISABLE_TELEMETRY) {
    return "no-telemetry";
  }
  return "default";
}
function isEssentialTrafficOnly() {
  return getPrivacyLevel() === "essential-traffic";
}
function isTelemetryDisabled() {
  return getPrivacyLevel() !== "default";
}
function getEssentialTrafficOnlyReason() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) {
    return "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC";
  }
  return null;
}
var init_privacyLevel = __esm({
  "src/utils/privacyLevel.ts"() {
  }
});

// node_modules/.pnpm/is-safe-filename@0.1.1/node_modules/is-safe-filename/index.js
function isSafeFilename(filename) {
  if (typeof filename !== "string") {
    return false;
  }
  const trimmed = filename.trim();
  return trimmed !== "" && trimmed !== "." && trimmed !== ".." && !filename.includes("/") && !filename.includes("\\") && !filename.includes("\0");
}
function assertSafeFilename(filename) {
  if (typeof filename !== "string") {
    throw new TypeError("Expected a string");
  }
  if (!isSafeFilename(filename)) {
    throw new Error(`Unsafe filename: ${JSON.stringify(filename)}`);
  }
}
var unsafeFilenameFixtures;
var init_is_safe_filename = __esm({
  "node_modules/.pnpm/is-safe-filename@0.1.1/node_modules/is-safe-filename/index.js"() {
    unsafeFilenameFixtures = Object.freeze([
      "",
      "   ",
      ".",
      "..",
      " .",
      ". ",
      " ..",
      ".. ",
      "../",
      "../foo",
      "foo/../bar",
      "foo/bar",
      "foo\\bar",
      "foo\0bar"
    ]);
  }
});

// node_modules/.pnpm/env-paths@4.0.0/node_modules/env-paths/index.js
import path from "node:path";
import os from "node:os";
import process2 from "node:process";
function envPaths(name, { suffix = "nodejs" } = {}) {
  assertSafeFilename(name);
  if (suffix) {
    name += `-${suffix}`;
  }
  assertSafeFilename(name);
  if (process2.platform === "darwin") {
    return macos(name);
  }
  if (process2.platform === "win32") {
    return windows(name);
  }
  return linux(name);
}
var homedir, tmpdir, env, macos, windows, linux;
var init_env_paths = __esm({
  "node_modules/.pnpm/env-paths@4.0.0/node_modules/env-paths/index.js"() {
    init_is_safe_filename();
    homedir = os.homedir();
    tmpdir = os.tmpdir();
    ({ env } = process2);
    macos = (name) => {
      const library = path.join(homedir, "Library");
      return {
        data: path.join(library, "Application Support", name),
        config: path.join(library, "Preferences", name),
        cache: path.join(library, "Caches", name),
        log: path.join(library, "Logs", name),
        temp: path.join(tmpdir, name)
      };
    };
    windows = (name) => {
      const appData = env.APPDATA || path.join(homedir, "AppData", "Roaming");
      const localAppData = env.LOCALAPPDATA || path.join(homedir, "AppData", "Local");
      return {
        // Data/config/cache/log are invented by me as Windows isn't opinionated about this
        data: path.join(localAppData, name, "Data"),
        config: path.join(appData, name, "Config"),
        cache: path.join(localAppData, name, "Cache"),
        log: path.join(localAppData, name, "Log"),
        temp: path.join(tmpdir, name)
      };
    };
    linux = (name) => {
      const username = path.basename(homedir);
      return {
        data: path.join(env.XDG_DATA_HOME || path.join(homedir, ".local", "share"), name),
        config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, ".config"), name),
        cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, ".cache"), name),
        // https://wiki.debian.org/XDGBaseDirectorySpecification#state
        log: path.join(env.XDG_STATE_HOME || path.join(homedir, ".local", "state"), name),
        temp: path.join(tmpdir, username, name)
      };
    };
  }
});

// src/utils/cachePaths.ts
import { join } from "path";
function sanitizePath(name) {
  const sanitized = name.replace(/[^a-zA-Z0-9]/g, "-");
  if (sanitized.length <= MAX_SANITIZED_LENGTH) {
    return sanitized;
  }
  return `${sanitized.slice(0, MAX_SANITIZED_LENGTH)}-${Math.abs(djb2Hash(name)).toString(36)}`;
}
function getProjectDir(cwd) {
  return sanitizePath(cwd);
}
var paths, MAX_SANITIZED_LENGTH, CACHE_PATHS;
var init_cachePaths = __esm({
  "src/utils/cachePaths.ts"() {
    init_env_paths();
    init_fsOperations();
    init_hash();
    paths = envPaths("claude-cli");
    MAX_SANITIZED_LENGTH = 200;
    CACHE_PATHS = {
      baseLogs: () => join(paths.cache, getProjectDir(getFsImplementation().cwd())),
      errors: () => join(paths.cache, getProjectDir(getFsImplementation().cwd()), "errors"),
      messages: () => join(paths.cache, getProjectDir(getFsImplementation().cwd()), "messages"),
      mcpLogs: (serverName) => join(
        paths.cache,
        getProjectDir(getFsImplementation().cwd()),
        // Sanitize server name for Windows compatibility (colons are reserved for drive letters)
        `mcp-logs-${sanitizePath(serverName)}`
      )
    };
  }
});

// src/utils/log.ts
function getLogDisplayTitle(log, defaultTitle) {
  const isAutonomousPrompt = log.firstPrompt?.startsWith(`<${TICK_TAG}>`);
  const strippedFirstPrompt = log.firstPrompt ? stripDisplayTagsAllowEmpty(log.firstPrompt) : "";
  const useFirstPrompt = strippedFirstPrompt && !isAutonomousPrompt;
  const title = log.agentName || log.customTitle || log.summary || (useFirstPrompt ? strippedFirstPrompt : void 0) || defaultTitle || // For autonomous sessions without other context, show a meaningful label
  (isAutonomousPrompt ? "Autonomous session" : void 0) || // Fall back to truncated session ID for lite logs with no metadata
  (log.sessionId ? log.sessionId.slice(0, 8) : "") || "";
  return stripDisplayTags(title).trim();
}
function dateToFilename(date) {
  return date.toISOString().replace(/[:.]/g, "-");
}
function addToInMemoryErrorLog(errorInfo) {
  if (inMemoryErrorLog.length >= MAX_IN_MEMORY_ERRORS) {
    inMemoryErrorLog.shift();
  }
  inMemoryErrorLog.push(errorInfo);
}
function attachErrorLogSink(newSink) {
  if (errorLogSink !== null) {
    return;
  }
  errorLogSink = newSink;
  if (errorQueue.length > 0) {
    const queuedEvents = [...errorQueue];
    errorQueue.length = 0;
    for (const event of queuedEvents) {
      switch (event.type) {
        case "error":
          errorLogSink.logError(event.error);
          break;
        case "mcpError":
          errorLogSink.logMCPError(event.serverName, event.error);
          break;
        case "mcpDebug":
          errorLogSink.logMCPDebug(event.serverName, event.message);
          break;
      }
    }
  }
}
function logError(error) {
  const err = toError(error);
  if (feature("HARD_FAIL") && isHardFailMode()) {
    console.error("[HARD FAIL] logError called with:", err.stack || err.message);
    process.exit(1);
  }
  try {
    if (
      // Cloud providers (Bedrock/Vertex/Foundry) always disable features
      isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY) || process.env.DISABLE_ERROR_REPORTING || isEssentialTrafficOnly()
    ) {
      return;
    }
    const errorStr = err.stack || err.message;
    const errorInfo = {
      error: errorStr,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    addToInMemoryErrorLog(errorInfo);
    if (errorLogSink === null) {
      errorQueue.push({ type: "error", error: err });
      return;
    }
    errorLogSink.logError(err);
  } catch {
  }
}
function getInMemoryErrors() {
  return [...inMemoryErrorLog];
}
function logMCPError(serverName, error) {
  try {
    if (errorLogSink === null) {
      errorQueue.push({ type: "mcpError", serverName, error });
      return;
    }
    errorLogSink.logMCPError(serverName, error);
  } catch {
  }
}
function logMCPDebug(serverName, message) {
  try {
    if (errorLogSink === null) {
      errorQueue.push({ type: "mcpDebug", serverName, message });
      return;
    }
    errorLogSink.logMCPDebug(serverName, message);
  } catch {
  }
}
function captureAPIRequest(params, querySource) {
  if (!querySource || !querySource.startsWith("repl_main_thread")) {
    return;
  }
  const { messages, ...paramsWithoutMessages } = params;
  setLastAPIRequest(paramsWithoutMessages);
  setLastAPIRequestMessages(process.env.USER_TYPE === "ant" ? messages : null);
}
var MAX_IN_MEMORY_ERRORS, inMemoryErrorLog, errorQueue, errorLogSink, isHardFailMode;
var init_log = __esm({
  "src/utils/log.ts"() {
    init_bun_bundle();
    init_memoize();
    init_state();
    init_xml();
    init_logs();
    init_cachePaths();
    init_displayTags();
    init_envUtils();
    init_errors();
    init_privacyLevel();
    init_slowOperations();
    MAX_IN_MEMORY_ERRORS = 100;
    inMemoryErrorLog = [];
    errorQueue = [];
    errorLogSink = null;
    isHardFailMode = memoize_default(() => {
      return process.argv.includes("--hard-fail");
    });
  }
});

export {
  COMMAND_NAME_TAG,
  COMMAND_MESSAGE_TAG,
  COMMAND_ARGS_TAG,
  BASH_INPUT_TAG,
  BASH_STDOUT_TAG,
  BASH_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_CAVEAT_TAG,
  TERMINAL_OUTPUT_TAGS,
  TICK_TAG,
  TASK_NOTIFICATION_TAG,
  TASK_ID_TAG,
  TOOL_USE_ID_TAG,
  TASK_TYPE_TAG,
  OUTPUT_FILE_TAG,
  STATUS_TAG,
  SUMMARY_TAG,
  WORKTREE_TAG,
  WORKTREE_PATH_TAG,
  WORKTREE_BRANCH_TAG,
  REMOTE_REVIEW_TAG,
  REMOTE_REVIEW_PROGRESS_TAG,
  TEAMMATE_MESSAGE_TAG,
  CHANNEL_TAG,
  FORK_BOILERPLATE_TAG,
  FORK_DIRECTIVE_PREFIX,
  COMMON_HELP_ARGS,
  COMMON_INFO_ARGS,
  init_xml,
  sortLogs,
  init_logs,
  CACHE_PATHS,
  init_cachePaths,
  stripDisplayTags,
  stripDisplayTagsAllowEmpty,
  stripIdeContextTags,
  init_displayTags,
  isEssentialTrafficOnly,
  isTelemetryDisabled,
  getEssentialTrafficOnlyReason,
  init_privacyLevel,
  getLogDisplayTitle,
  dateToFilename,
  attachErrorLogSink,
  logError,
  getInMemoryErrors,
  logMCPError,
  logMCPDebug,
  captureAPIRequest,
  init_log
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbnN0YW50cy94bWwudHMiLCAiLi4vLi4vc3JjL3R5cGVzL2xvZ3MudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2Rpc3BsYXlUYWdzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9wcml2YWN5TGV2ZWwudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLXNhZmUtZmlsZW5hbWVAMC4xLjEvbm9kZV9tb2R1bGVzL2lzLXNhZmUtZmlsZW5hbWUvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Vudi1wYXRoc0A0LjAuMC9ub2RlX21vZHVsZXMvZW52LXBhdGhzL2luZGV4LmpzIiwgIi4uLy4uL3NyYy91dGlscy9jYWNoZVBhdGhzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9sb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIFhNTCB0YWcgbmFtZXMgdXNlZCB0byBtYXJrIHNraWxsL2NvbW1hbmQgbWV0YWRhdGEgaW4gbWVzc2FnZXNcbmV4cG9ydCBjb25zdCBDT01NQU5EX05BTUVfVEFHID0gJ2NvbW1hbmQtbmFtZSdcbmV4cG9ydCBjb25zdCBDT01NQU5EX01FU1NBR0VfVEFHID0gJ2NvbW1hbmQtbWVzc2FnZSdcbmV4cG9ydCBjb25zdCBDT01NQU5EX0FSR1NfVEFHID0gJ2NvbW1hbmQtYXJncydcblxuLy8gWE1MIHRhZyBuYW1lcyBmb3IgdGVybWluYWwvYmFzaCBjb21tYW5kIGlucHV0IGFuZCBvdXRwdXQgaW4gdXNlciBtZXNzYWdlc1xuLy8gVGhlc2Ugd3JhcCBjb250ZW50IHRoYXQgcmVwcmVzZW50cyB0ZXJtaW5hbCBhY3Rpdml0eSwgbm90IGFjdHVhbCB1c2VyIHByb21wdHNcbmV4cG9ydCBjb25zdCBCQVNIX0lOUFVUX1RBRyA9ICdiYXNoLWlucHV0J1xuZXhwb3J0IGNvbnN0IEJBU0hfU1RET1VUX1RBRyA9ICdiYXNoLXN0ZG91dCdcbmV4cG9ydCBjb25zdCBCQVNIX1NUREVSUl9UQUcgPSAnYmFzaC1zdGRlcnInXG5leHBvcnQgY29uc3QgTE9DQUxfQ09NTUFORF9TVERPVVRfVEFHID0gJ2xvY2FsLWNvbW1hbmQtc3Rkb3V0J1xuZXhwb3J0IGNvbnN0IExPQ0FMX0NPTU1BTkRfU1RERVJSX1RBRyA9ICdsb2NhbC1jb21tYW5kLXN0ZGVycidcbmV4cG9ydCBjb25zdCBMT0NBTF9DT01NQU5EX0NBVkVBVF9UQUcgPSAnbG9jYWwtY29tbWFuZC1jYXZlYXQnXG5cbi8vIEFsbCB0ZXJtaW5hbC1yZWxhdGVkIHRhZ3MgdGhhdCBpbmRpY2F0ZSBhIG1lc3NhZ2UgaXMgdGVybWluYWwgb3V0cHV0LCBub3QgYSB1c2VyIHByb21wdFxuZXhwb3J0IGNvbnN0IFRFUk1JTkFMX09VVFBVVF9UQUdTID0gW1xuICBCQVNIX0lOUFVUX1RBRyxcbiAgQkFTSF9TVERPVVRfVEFHLFxuICBCQVNIX1NUREVSUl9UQUcsXG4gIExPQ0FMX0NPTU1BTkRfU1RET1VUX1RBRyxcbiAgTE9DQUxfQ09NTUFORF9TVERFUlJfVEFHLFxuICBMT0NBTF9DT01NQU5EX0NBVkVBVF9UQUcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBUSUNLX1RBRyA9ICd0aWNrJ1xuXG4vLyBYTUwgdGFnIG5hbWVzIGZvciB0YXNrIG5vdGlmaWNhdGlvbnMgKGJhY2tncm91bmQgdGFzayBjb21wbGV0aW9ucylcbmV4cG9ydCBjb25zdCBUQVNLX05PVElGSUNBVElPTl9UQUcgPSAndGFzay1ub3RpZmljYXRpb24nXG5leHBvcnQgY29uc3QgVEFTS19JRF9UQUcgPSAndGFzay1pZCdcbmV4cG9ydCBjb25zdCBUT09MX1VTRV9JRF9UQUcgPSAndG9vbC11c2UtaWQnXG5leHBvcnQgY29uc3QgVEFTS19UWVBFX1RBRyA9ICd0YXNrLXR5cGUnXG5leHBvcnQgY29uc3QgT1VUUFVUX0ZJTEVfVEFHID0gJ291dHB1dC1maWxlJ1xuZXhwb3J0IGNvbnN0IFNUQVRVU19UQUcgPSAnc3RhdHVzJ1xuZXhwb3J0IGNvbnN0IFNVTU1BUllfVEFHID0gJ3N1bW1hcnknXG5leHBvcnQgY29uc3QgUkVBU09OX1RBRyA9ICdyZWFzb24nXG5leHBvcnQgY29uc3QgV09SS1RSRUVfVEFHID0gJ3dvcmt0cmVlJ1xuZXhwb3J0IGNvbnN0IFdPUktUUkVFX1BBVEhfVEFHID0gJ3dvcmt0cmVlUGF0aCdcbmV4cG9ydCBjb25zdCBXT1JLVFJFRV9CUkFOQ0hfVEFHID0gJ3dvcmt0cmVlQnJhbmNoJ1xuXG4vLyBYTUwgdGFnIG5hbWVzIGZvciB1bHRyYXBsYW4gbW9kZSAocmVtb3RlIHBhcmFsbGVsIHBsYW5uaW5nIHNlc3Npb25zKVxuZXhwb3J0IGNvbnN0IFVMVFJBUExBTl9UQUcgPSAndWx0cmFwbGFuJ1xuXG4vLyBYTUwgdGFnIG5hbWUgZm9yIHJlbW90ZSAvcmV2aWV3IHJlc3VsdHMgKHRlbGVwb3J0ZWQgcmV2aWV3IHNlc3Npb24gb3V0cHV0KS5cbi8vIFJlbW90ZSBzZXNzaW9uIHdyYXBzIGl0cyBmaW5hbCByZXZpZXcgaW4gdGhpcyB0YWc7IGxvY2FsIHBvbGxlciBleHRyYWN0cyBpdC5cbmV4cG9ydCBjb25zdCBSRU1PVEVfUkVWSUVXX1RBRyA9ICdyZW1vdGUtcmV2aWV3J1xuXG4vLyBydW5faHVudC5zaCdzIGhlYXJ0YmVhdCBlY2hvZXMgdGhlIG9yY2hlc3RyYXRvcidzIHByb2dyZXNzLmpzb24gaW5zaWRlIHRoaXNcbi8vIHRhZyBldmVyeSB+MTBzLiBMb2NhbCBwb2xsZXIgcGFyc2VzIHRoZSBsYXRlc3QgZm9yIHRoZSB0YXNrLXN0YXR1cyBsaW5lLlxuZXhwb3J0IGNvbnN0IFJFTU9URV9SRVZJRVdfUFJPR1JFU1NfVEFHID0gJ3JlbW90ZS1yZXZpZXctcHJvZ3Jlc3MnXG5cbi8vIFhNTCB0YWcgbmFtZSBmb3IgdGVhbW1hdGUgbWVzc2FnZXMgKHN3YXJtIGludGVyLWFnZW50IGNvbW11bmljYXRpb24pXG5leHBvcnQgY29uc3QgVEVBTU1BVEVfTUVTU0FHRV9UQUcgPSAndGVhbW1hdGUtbWVzc2FnZSdcblxuLy8gWE1MIHRhZyBuYW1lIGZvciBleHRlcm5hbCBjaGFubmVsIG1lc3NhZ2VzXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9NRVNTQUdFX1RBRyA9ICdjaGFubmVsLW1lc3NhZ2UnXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9UQUcgPSAnY2hhbm5lbCdcblxuLy8gWE1MIHRhZyBuYW1lIGZvciBjcm9zcy1zZXNzaW9uIFVEUyBtZXNzYWdlcyAoYW5vdGhlciBDbGF1ZGUgc2Vzc2lvbidzIGluYm94KVxuZXhwb3J0IGNvbnN0IENST1NTX1NFU1NJT05fTUVTU0FHRV9UQUcgPSAnY3Jvc3Mtc2Vzc2lvbi1tZXNzYWdlJ1xuXG4vLyBYTUwgdGFnIHdyYXBwaW5nIHRoZSBydWxlcy9mb3JtYXQgYm9pbGVycGxhdGUgaW4gYSBmb3JrIGNoaWxkJ3MgZmlyc3QgbWVzc2FnZS5cbi8vIExldHMgdGhlIHRyYW5zY3JpcHQgcmVuZGVyZXIgY29sbGFwc2UgdGhlIGJvaWxlcnBsYXRlIGFuZCBzaG93IG9ubHkgdGhlIGRpcmVjdGl2ZS5cbmV4cG9ydCBjb25zdCBGT1JLX0JPSUxFUlBMQVRFX1RBRyA9ICdmb3JrLWJvaWxlcnBsYXRlJ1xuLy8gUHJlZml4IGJlZm9yZSB0aGUgZGlyZWN0aXZlIHRleHQsIHN0cmlwcGVkIGJ5IHRoZSByZW5kZXJlci4gS2VlcCBpbiBzeW5jXG4vLyBhY3Jvc3MgYnVpbGRDaGlsZE1lc3NhZ2UgKGdlbmVyYXRlcykgYW5kIFVzZXJGb3JrQm9pbGVycGxhdGVNZXNzYWdlIChwYXJzZXMpLlxuZXhwb3J0IGNvbnN0IEZPUktfRElSRUNUSVZFX1BSRUZJWCA9ICdZb3VyIGRpcmVjdGl2ZTogJ1xuXG4vLyBDb21tb24gYXJndW1lbnQgcGF0dGVybnMgZm9yIHNsYXNoIGNvbW1hbmRzIHRoYXQgcmVxdWVzdCBoZWxwXG5leHBvcnQgY29uc3QgQ09NTU9OX0hFTFBfQVJHUyA9IFsnaGVscCcsICctaCcsICctLWhlbHAnXVxuXG4vLyBDb21tb24gYXJndW1lbnQgcGF0dGVybnMgZm9yIHNsYXNoIGNvbW1hbmRzIHRoYXQgcmVxdWVzdCBjdXJyZW50IHN0YXRlL2luZm9cbmV4cG9ydCBjb25zdCBDT01NT05fSU5GT19BUkdTID0gW1xuICAnbGlzdCcsXG4gICdzaG93JyxcbiAgJ2Rpc3BsYXknLFxuICAnY3VycmVudCcsXG4gICd2aWV3JyxcbiAgJ2dldCcsXG4gICdjaGVjaycsXG4gICdkZXNjcmliZScsXG4gICdwcmludCcsXG4gICd2ZXJzaW9uJyxcbiAgJ2Fib3V0JyxcbiAgJ3N0YXR1cycsXG4gICc/Jyxcbl1cbiIsICJpbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7IEZpbGVIaXN0b3J5U25hcHNob3QgfSBmcm9tICdzcmMvdXRpbHMvZmlsZUhpc3RvcnkuanMnXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRSZXBsYWNlbWVudFJlY29yZCB9IGZyb20gJ3NyYy91dGlscy90b29sUmVzdWx0U3RvcmFnZS5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRJZCB9IGZyb20gJy4vaWRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLmpzJ1xuaW1wb3J0IHR5cGUgeyBRdWV1ZU9wZXJhdGlvbk1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VRdWV1ZVR5cGVzLmpzJ1xuXG5leHBvcnQgdHlwZSBTZXJpYWxpemVkTWVzc2FnZSA9IE1lc3NhZ2UgJiB7XG4gIGN3ZDogc3RyaW5nXG4gIHVzZXJUeXBlOiBzdHJpbmdcbiAgZW50cnlwb2ludD86IHN0cmluZyAvLyBDTEFVREVfQ09ERV9FTlRSWVBPSU5UIFx1MjAxNCBkaXN0aW5ndWlzaGVzIGNsaS9zZGstdHMvc2RrLXB5L2V0Yy5cbiAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgdGltZXN0YW1wOiBzdHJpbmdcbiAgdmVyc2lvbjogc3RyaW5nXG4gIGdpdEJyYW5jaD86IHN0cmluZ1xuICBzbHVnPzogc3RyaW5nIC8vIFNlc3Npb24gc2x1ZyBmb3IgZmlsZXMgbGlrZSBwbGFucyAodXNlZCBmb3IgcmVzdW1lKVxufVxuXG5leHBvcnQgdHlwZSBMb2dPcHRpb24gPSB7XG4gIGRhdGU6IHN0cmluZ1xuICBtZXNzYWdlczogU2VyaWFsaXplZE1lc3NhZ2VbXVxuICBmdWxsUGF0aD86IHN0cmluZ1xuICB2YWx1ZTogbnVtYmVyXG4gIGNyZWF0ZWQ6IERhdGVcbiAgbW9kaWZpZWQ6IERhdGVcbiAgZmlyc3RQcm9tcHQ6IHN0cmluZ1xuICBtZXNzYWdlQ291bnQ6IG51bWJlclxuICBmaWxlU2l6ZT86IG51bWJlciAvLyBGaWxlIHNpemUgaW4gYnl0ZXMgKGZvciBkaXNwbGF5KVxuICBpc1NpZGVjaGFpbjogYm9vbGVhblxuICBpc0xpdGU/OiBib29sZWFuIC8vIFRydWUgZm9yIGxpdGUgbG9ncyAobWVzc2FnZXMgbm90IGxvYWRlZClcbiAgc2Vzc2lvbklkPzogc3RyaW5nIC8vIFNlc3Npb24gSUQgZm9yIGxpdGUgbG9nc1xuICB0ZWFtTmFtZT86IHN0cmluZyAvLyBUZWFtIG5hbWUgaWYgdGhpcyBpcyBhIHNwYXduZWQgYWdlbnQgc2Vzc2lvblxuICBhZ2VudE5hbWU/OiBzdHJpbmcgLy8gQWdlbnQncyBjdXN0b20gbmFtZSAoZnJvbSAvcmVuYW1lIG9yIHN3YXJtKVxuICBhZ2VudENvbG9yPzogc3RyaW5nIC8vIEFnZW50J3MgY29sb3IgKGZyb20gL3JlbmFtZSBvciBzd2FybSlcbiAgYWdlbnRTZXR0aW5nPzogc3RyaW5nIC8vIEFnZW50IGRlZmluaXRpb24gdXNlZCAoZnJvbSAtLWFnZW50IGZsYWcgb3Igc2V0dGluZ3MuYWdlbnQpXG4gIGlzVGVhbW1hdGU/OiBib29sZWFuIC8vIFdoZXRoZXIgdGhpcyBzZXNzaW9uIHdhcyBjcmVhdGVkIGJ5IGEgc3dhcm0gdGVhbW1hdGVcbiAgbGVhZlV1aWQ/OiBVVUlEIC8vIElmIGdpdmVuLCB0aGlzIHV1aWQgbXVzdCBhcHBlYXIgaW4gdGhlIERCXG4gIHN1bW1hcnk/OiBzdHJpbmcgLy8gT3B0aW9uYWwgY29udmVyc2F0aW9uIHN1bW1hcnlcbiAgY3VzdG9tVGl0bGU/OiBzdHJpbmcgLy8gT3B0aW9uYWwgdXNlci1zZXQgY3VzdG9tIHRpdGxlXG4gIHRhZz86IHN0cmluZyAvLyBPcHRpb25hbCB0YWcgZm9yIHRoZSBzZXNzaW9uIChzZWFyY2hhYmxlIGluIC9yZXN1bWUpXG4gIGZpbGVIaXN0b3J5U25hcHNob3RzPzogRmlsZUhpc3RvcnlTbmFwc2hvdFtdIC8vIE9wdGlvbmFsIGZpbGUgaGlzdG9yeSBzbmFwc2hvdHNcbiAgYXR0cmlidXRpb25TbmFwc2hvdHM/OiBBdHRyaWJ1dGlvblNuYXBzaG90TWVzc2FnZVtdIC8vIE9wdGlvbmFsIGF0dHJpYnV0aW9uIHNuYXBzaG90c1xuICBjb250ZXh0Q29sbGFwc2VDb21taXRzPzogQ29udGV4dENvbGxhcHNlQ29tbWl0RW50cnlbXSAvLyBPcmRlcmVkIFx1MjAxNCBjb21taXQgQiBtYXkgcmVmZXJlbmNlIGNvbW1pdCBBJ3Mgc3VtbWFyeVxuICBjb250ZXh0Q29sbGFwc2VTbmFwc2hvdD86IENvbnRleHRDb2xsYXBzZVNuYXBzaG90RW50cnkgLy8gTGFzdC13aW5zIFx1MjAxNCBzdGFnZWQgcXVldWUgKyBzcGF3biBzdGF0ZVxuICBnaXRCcmFuY2g/OiBzdHJpbmcgLy8gR2l0IGJyYW5jaCBhdCB0aGUgZW5kIG9mIHRoZSBzZXNzaW9uXG4gIHByb2plY3RQYXRoPzogc3RyaW5nIC8vIE9yaWdpbmFsIHByb2plY3QgZGlyZWN0b3J5IHBhdGhcbiAgcHJOdW1iZXI/OiBudW1iZXIgLy8gR2l0SHViIFBSIG51bWJlciBsaW5rZWQgdG8gdGhpcyBzZXNzaW9uXG4gIHByVXJsPzogc3RyaW5nIC8vIEZ1bGwgVVJMIHRvIHRoZSBsaW5rZWQgUFJcbiAgcHJSZXBvc2l0b3J5Pzogc3RyaW5nIC8vIFJlcG9zaXRvcnkgaW4gXCJvd25lci9yZXBvXCIgZm9ybWF0XG4gIG1vZGU/OiAnY29vcmRpbmF0b3InIHwgJ25vcm1hbCcgLy8gU2Vzc2lvbiBtb2RlIGZvciBjb29yZGluYXRvci9ub3JtYWwgZGV0ZWN0aW9uXG4gIHdvcmt0cmVlU2Vzc2lvbj86IFBlcnNpc3RlZFdvcmt0cmVlU2Vzc2lvbiB8IG51bGwgLy8gV29ya3RyZWUgc3RhdGUgYXQgc2Vzc2lvbiBlbmQgKG51bGwgPSBleGl0ZWQsIHVuZGVmaW5lZCA9IG5ldmVyIGVudGVyZWQpXG4gIGNvbnRlbnRSZXBsYWNlbWVudHM/OiBDb250ZW50UmVwbGFjZW1lbnRSZWNvcmRbXSAvLyBSZXBsYWNlbWVudCBkZWNpc2lvbnMgZm9yIHJlc3VtZSByZWNvbnN0cnVjdGlvblxufVxuXG5leHBvcnQgdHlwZSBTdW1tYXJ5TWVzc2FnZSA9IHtcbiAgdHlwZTogJ3N1bW1hcnknXG4gIGxlYWZVdWlkOiBVVUlEXG4gIHN1bW1hcnk6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDdXN0b21UaXRsZU1lc3NhZ2UgPSB7XG4gIHR5cGU6ICdjdXN0b20tdGl0bGUnXG4gIHNlc3Npb25JZDogVVVJRFxuICBjdXN0b21UaXRsZTogc3RyaW5nXG59XG5cbi8qKlxuICogQUktZ2VuZXJhdGVkIHNlc3Npb24gdGl0bGUuIERpc3RpbmN0IGZyb20gQ3VzdG9tVGl0bGVNZXNzYWdlIHNvIHRoYXQ6XG4gKiAtIFVzZXIgcmVuYW1lcyAoY3VzdG9tLXRpdGxlKSBhbHdheXMgd2luIG92ZXIgQUkgdGl0bGVzIGluIHJlYWQgcHJlZmVyZW5jZVxuICogLSByZUFwcGVuZFNlc3Npb25NZXRhZGF0YSBuZXZlciByZS1hcHBlbmRzIEFJIHRpdGxlcyAodGhleSdyZSBlcGhlbWVyYWwvXG4gKiAgIHJlZ2VuZXJhdGFibGU7IHJlLWFwcGVuZGluZyB3b3VsZCBjbG9iYmVyIHVzZXIgcmVuYW1lcyBvbiByZXN1bWUpXG4gKiAtIFZTIENvZGUncyBvbmx5SWZOb0N1c3RvbVRpdGxlIENBUyBjaGVjayBvbmx5IG1hdGNoZXMgdXNlciB0aXRsZXMsXG4gKiAgIGFsbG93aW5nIEFJIHRvIG92ZXJ3cml0ZSBpdHMgb3duIHByZXZpb3VzIEFJIHRpdGxlIGJ1dCBub3QgdXNlciB0aXRsZXNcbiAqL1xuZXhwb3J0IHR5cGUgQWlUaXRsZU1lc3NhZ2UgPSB7XG4gIHR5cGU6ICdhaS10aXRsZSdcbiAgc2Vzc2lvbklkOiBVVUlEXG4gIGFpVGl0bGU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBMYXN0UHJvbXB0TWVzc2FnZSA9IHtcbiAgdHlwZTogJ2xhc3QtcHJvbXB0J1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgbGFzdFByb21wdDogc3RyaW5nXG59XG5cbi8qKlxuICogUGVyaW9kaWMgZm9yay1nZW5lcmF0ZWQgc3VtbWFyeSBvZiB3aGF0IHRoZSBhZ2VudCBpcyBjdXJyZW50bHkgZG9pbmcuXG4gKiBXcml0dGVuIGV2ZXJ5IG1pbig1IHN0ZXBzLCAybWluKSBieSBmb3JraW5nIHRoZSBtYWluIHRocmVhZCBtaWQtdHVybiBzb1xuICogYGNsYXVkZSBwc2AgY2FuIHNob3cgc29tZXRoaW5nIG1vcmUgdXNlZnVsIHRoYW4gdGhlIGxhc3QgdXNlciBwcm9tcHRcbiAqICh3aGljaCBpcyBvZnRlbiBcIm9rIGdvXCIgb3IgXCJmaXggaXRcIikuXG4gKi9cbmV4cG9ydCB0eXBlIFRhc2tTdW1tYXJ5TWVzc2FnZSA9IHtcbiAgdHlwZTogJ3Rhc2stc3VtbWFyeSdcbiAgc2Vzc2lvbklkOiBVVUlEXG4gIHN1bW1hcnk6IHN0cmluZ1xuICB0aW1lc3RhbXA6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBUYWdNZXNzYWdlID0ge1xuICB0eXBlOiAndGFnJ1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgdGFnOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQWdlbnROYW1lTWVzc2FnZSA9IHtcbiAgdHlwZTogJ2FnZW50LW5hbWUnXG4gIHNlc3Npb25JZDogVVVJRFxuICBhZ2VudE5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBZ2VudENvbG9yTWVzc2FnZSA9IHtcbiAgdHlwZTogJ2FnZW50LWNvbG9yJ1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgYWdlbnRDb2xvcjogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEFnZW50U2V0dGluZ01lc3NhZ2UgPSB7XG4gIHR5cGU6ICdhZ2VudC1zZXR0aW5nJ1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgYWdlbnRTZXR0aW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQUiBsaW5rIG1lc3NhZ2Ugc3RvcmVkIGluIHNlc3Npb24gdHJhbnNjcmlwdC5cbiAqIExpbmtzIGEgc2Vzc2lvbiB0byBhIEdpdEh1YiBwdWxsIHJlcXVlc3QgZm9yIHRyYWNraW5nIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5leHBvcnQgdHlwZSBQUkxpbmtNZXNzYWdlID0ge1xuICB0eXBlOiAncHItbGluaydcbiAgc2Vzc2lvbklkOiBVVUlEXG4gIHByTnVtYmVyOiBudW1iZXJcbiAgcHJVcmw6IHN0cmluZ1xuICBwclJlcG9zaXRvcnk6IHN0cmluZyAvLyBlLmcuLCBcIm93bmVyL3JlcG9cIlxuICB0aW1lc3RhbXA6IHN0cmluZyAvLyBJU08gdGltZXN0YW1wIHdoZW4gbGlua2VkXG59XG5cbmV4cG9ydCB0eXBlIE1vZGVFbnRyeSA9IHtcbiAgdHlwZTogJ21vZGUnXG4gIHNlc3Npb25JZDogVVVJRFxuICBtb2RlOiAnY29vcmRpbmF0b3InIHwgJ25vcm1hbCdcbn1cblxuLyoqXG4gKiBXb3JrdHJlZSBzZXNzaW9uIHN0YXRlIHBlcnNpc3RlZCB0byB0aGUgdHJhbnNjcmlwdCBmb3IgcmVzdW1lLlxuICogU3Vic2V0IG9mIFdvcmt0cmVlU2Vzc2lvbiBmcm9tIHV0aWxzL3dvcmt0cmVlLnRzIFx1MjAxNCBleGNsdWRlcyBlcGhlbWVyYWxcbiAqIGZpZWxkcyAoY3JlYXRpb25EdXJhdGlvbk1zLCB1c2VkU3BhcnNlUGF0aHMpIHRoYXQgYXJlIG9ubHkgdXNlZCBmb3JcbiAqIGZpcnN0LXJ1biBhbmFseXRpY3MuXG4gKi9cbmV4cG9ydCB0eXBlIFBlcnNpc3RlZFdvcmt0cmVlU2Vzc2lvbiA9IHtcbiAgb3JpZ2luYWxDd2Q6IHN0cmluZ1xuICB3b3JrdHJlZVBhdGg6IHN0cmluZ1xuICB3b3JrdHJlZU5hbWU6IHN0cmluZ1xuICB3b3JrdHJlZUJyYW5jaD86IHN0cmluZ1xuICBvcmlnaW5hbEJyYW5jaD86IHN0cmluZ1xuICBvcmlnaW5hbEhlYWRDb21taXQ/OiBzdHJpbmdcbiAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgdG11eFNlc3Npb25OYW1lPzogc3RyaW5nXG4gIGhvb2tCYXNlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBSZWNvcmRzIHdoZXRoZXIgdGhlIHNlc3Npb24gaXMgY3VycmVudGx5IGluc2lkZSBhIHdvcmt0cmVlIGNyZWF0ZWQgYnlcbiAqIEVudGVyV29ya3RyZWUgb3IgLS13b3JrdHJlZS4gTGFzdC13aW5zOiBhbiBlbnRlciB3cml0ZXMgdGhlIHNlc3Npb24sXG4gKiBhbiBleGl0IHdyaXRlcyBudWxsLiBPbiAtLXJlc3VtZSwgcmVzdG9yZWQgb25seSBpZiB0aGUgd29ya3RyZWVQYXRoXG4gKiBzdGlsbCBleGlzdHMgb24gZGlzayAodGhlIC9leGl0IGRpYWxvZyBtYXkgaGF2ZSByZW1vdmVkIGl0KS5cbiAqL1xuZXhwb3J0IHR5cGUgV29ya3RyZWVTdGF0ZUVudHJ5ID0ge1xuICB0eXBlOiAnd29ya3RyZWUtc3RhdGUnXG4gIHNlc3Npb25JZDogVVVJRFxuICB3b3JrdHJlZVNlc3Npb246IFBlcnNpc3RlZFdvcmt0cmVlU2Vzc2lvbiB8IG51bGxcbn1cblxuLyoqXG4gKiBSZWNvcmRzIGNvbnRlbnQgYmxvY2tzIHdob3NlIGluLWNvbnRleHQgcmVwcmVzZW50YXRpb24gd2FzIHJlcGxhY2VkIHdpdGggYVxuICogc21hbGxlciBzdHViICh0aGUgZnVsbCBjb250ZW50IHdhcyBwZXJzaXN0ZWQgZWxzZXdoZXJlKS4gUmVwbGF5ZWQgb24gcmVzdW1lXG4gKiBmb3IgcHJvbXB0IGNhY2hlIHN0YWJpbGl0eS4gV3JpdHRlbiBvbmNlIHBlciBlbmZvcmNlbWVudCBwYXNzIHRoYXQgcmVwbGFjZXNcbiAqIGF0IGxlYXN0IG9uZSBibG9jay4gV2hlbiBhZ2VudElkIGlzIHNldCwgdGhlIHJlY29yZCBiZWxvbmdzIHRvIGEgc3ViYWdlbnRcbiAqIHNpZGVjaGFpbiAoQWdlbnRUb29sIHJlc3VtZSByZWFkcyB0aGVzZSk7IHdoZW4gYWJzZW50LCBpdCdzIG1haW4tdGhyZWFkXG4gKiAoL3Jlc3VtZSByZWFkcyB0aGVzZSkuXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRSZXBsYWNlbWVudEVudHJ5ID0ge1xuICB0eXBlOiAnY29udGVudC1yZXBsYWNlbWVudCdcbiAgc2Vzc2lvbklkOiBVVUlEXG4gIGFnZW50SWQ/OiBBZ2VudElkXG4gIHJlcGxhY2VtZW50czogQ29udGVudFJlcGxhY2VtZW50UmVjb3JkW11cbn1cblxuZXhwb3J0IHR5cGUgRmlsZUhpc3RvcnlTbmFwc2hvdE1lc3NhZ2UgPSB7XG4gIHR5cGU6ICdmaWxlLWhpc3Rvcnktc25hcHNob3QnXG4gIG1lc3NhZ2VJZDogVVVJRFxuICBzbmFwc2hvdDogRmlsZUhpc3RvcnlTbmFwc2hvdFxuICBpc1NuYXBzaG90VXBkYXRlOiBib29sZWFuXG59XG5cbi8qKlxuICogUGVyLWZpbGUgYXR0cmlidXRpb24gc3RhdGUgdHJhY2tpbmcgQ2xhdWRlJ3MgY2hhcmFjdGVyIGNvbnRyaWJ1dGlvbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVBdHRyaWJ1dGlvblN0YXRlID0ge1xuICBjb250ZW50SGFzaDogc3RyaW5nIC8vIFNIQS0yNTYgaGFzaCBvZiBmaWxlIGNvbnRlbnRcbiAgY2xhdWRlQ29udHJpYnV0aW9uOiBudW1iZXIgLy8gQ2hhcmFjdGVycyB3cml0dGVuIGJ5IENsYXVkZVxuICBtdGltZTogbnVtYmVyIC8vIEZpbGUgbW9kaWZpY2F0aW9uIHRpbWVcbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGlvbiBzbmFwc2hvdCBtZXNzYWdlIHN0b3JlZCBpbiBzZXNzaW9uIHRyYW5zY3JpcHQuXG4gKiBUcmFja3MgY2hhcmFjdGVyLWxldmVsIGNvbnRyaWJ1dGlvbnMgYnkgQ2xhdWRlIGZvciBjb21taXQgYXR0cmlidXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIEF0dHJpYnV0aW9uU25hcHNob3RNZXNzYWdlID0ge1xuICB0eXBlOiAnYXR0cmlidXRpb24tc25hcHNob3QnXG4gIG1lc3NhZ2VJZDogVVVJRFxuICBzdXJmYWNlOiBzdHJpbmcgLy8gQ2xpZW50IHN1cmZhY2UgKGNsaSwgaWRlLCB3ZWIsIGFwaSlcbiAgZmlsZVN0YXRlczogUmVjb3JkPHN0cmluZywgRmlsZUF0dHJpYnV0aW9uU3RhdGU+XG4gIHByb21wdENvdW50PzogbnVtYmVyIC8vIFRvdGFsIHByb21wdHMgaW4gc2Vzc2lvblxuICBwcm9tcHRDb3VudEF0TGFzdENvbW1pdD86IG51bWJlciAvLyBQcm9tcHRzIGF0IGxhc3QgY29tbWl0XG4gIHBlcm1pc3Npb25Qcm9tcHRDb3VudD86IG51bWJlciAvLyBUb3RhbCBwZXJtaXNzaW9uIHByb21wdHMgc2hvd25cbiAgcGVybWlzc2lvblByb21wdENvdW50QXRMYXN0Q29tbWl0PzogbnVtYmVyIC8vIFBlcm1pc3Npb24gcHJvbXB0cyBhdCBsYXN0IGNvbW1pdFxuICBlc2NhcGVDb3VudD86IG51bWJlciAvLyBUb3RhbCBFU0MgcHJlc3NlcyAoY2FuY2VsbGVkIHBlcm1pc3Npb24gcHJvbXB0cylcbiAgZXNjYXBlQ291bnRBdExhc3RDb21taXQ/OiBudW1iZXIgLy8gRVNDIHByZXNzZXMgYXQgbGFzdCBjb21taXRcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNjcmlwdE1lc3NhZ2UgPSBTZXJpYWxpemVkTWVzc2FnZSAmIHtcbiAgcGFyZW50VXVpZDogVVVJRCB8IG51bGxcbiAgbG9naWNhbFBhcmVudFV1aWQ/OiBVVUlEIHwgbnVsbCAvLyBQcmVzZXJ2ZXMgbG9naWNhbCBwYXJlbnQgd2hlbiBwYXJlbnRVdWlkIGlzIG51bGxpZmllZCBmb3Igc2Vzc2lvbiBicmVha3NcbiAgaXNTaWRlY2hhaW46IGJvb2xlYW5cbiAgZ2l0QnJhbmNoPzogc3RyaW5nXG4gIGFnZW50SWQ/OiBzdHJpbmcgLy8gQWdlbnQgSUQgZm9yIHNpZGVjaGFpbiB0cmFuc2NyaXB0cyB0byBlbmFibGUgcmVzdW1pbmcgYWdlbnRzXG4gIHRlYW1OYW1lPzogc3RyaW5nIC8vIFRlYW0gbmFtZSBpZiB0aGlzIGlzIGEgc3Bhd25lZCBhZ2VudCBzZXNzaW9uXG4gIGFnZW50TmFtZT86IHN0cmluZyAvLyBBZ2VudCdzIGN1c3RvbSBuYW1lIChmcm9tIC9yZW5hbWUgb3Igc3dhcm0pXG4gIGFnZW50Q29sb3I/OiBzdHJpbmcgLy8gQWdlbnQncyBjb2xvciAoZnJvbSAvcmVuYW1lIG9yIHN3YXJtKVxuICBwcm9tcHRJZD86IHN0cmluZyAvLyBDb3JyZWxhdGVzIHdpdGggT1RlbCBwcm9tcHQuaWQgZm9yIHVzZXIgcHJvbXB0IG1lc3NhZ2VzXG59XG5cbmV4cG9ydCB0eXBlIFNwZWN1bGF0aW9uQWNjZXB0TWVzc2FnZSA9IHtcbiAgdHlwZTogJ3NwZWN1bGF0aW9uLWFjY2VwdCdcbiAgdGltZXN0YW1wOiBzdHJpbmdcbiAgdGltZVNhdmVkTXM6IG51bWJlclxufVxuXG4vKipcbiAqIFBlcnNpc3RlZCBjb250ZXh0LWNvbGxhcHNlIGNvbW1pdC4gVGhlIGFyY2hpdmVkIG1lc3NhZ2VzIHRoZW1zZWx2ZXMgYXJlXG4gKiBOT1QgcGVyc2lzdGVkIFx1MjAxNCB0aGV5J3JlIGFscmVhZHkgaW4gdGhlIHRyYW5zY3JpcHQgYXMgb3JkaW5hcnkgdXNlci9cbiAqIGFzc2lzdGFudCBtZXNzYWdlcy4gV2Ugb25seSBwZXJzaXN0IGVub3VnaCB0byByZWNvbnN0cnVjdCB0aGUgc3BsaWNlXG4gKiBpbnN0cnVjdGlvbiAoYm91bmRhcnkgdXVpZHMpIGFuZCB0aGUgc3VtbWFyeSBwbGFjZWhvbGRlciAod2hpY2ggaXMgTk9UXG4gKiBpbiB0aGUgdHJhbnNjcmlwdCBiZWNhdXNlIGl0J3MgbmV2ZXIgeWllbGRlZCB0byB0aGUgUkVQTCkuXG4gKlxuICogT24gcmVzdG9yZSwgdGhlIHN0b3JlIHJlY29uc3RydWN0cyBDb21taXR0ZWRDb2xsYXBzZSB3aXRoIGFyY2hpdmVkPVtdO1xuICogcHJvamVjdFZpZXcgbGF6aWx5IGZpbGxzIHRoZSBhcmNoaXZlIHRoZSBmaXJzdCB0aW1lIGl0IGZpbmRzIHRoZSBzcGFuLlxuICpcbiAqIERpc2NyaW1pbmF0b3IgaXMgb2JmdXNjYXRlZCB0byBtYXRjaCB0aGUgZ2F0ZSBuYW1lLiBzZXNzaW9uU3RvcmFnZS50c1xuICogaXNuJ3QgZmVhdHVyZS1nYXRlZCAoaXQncyB0aGUgZ2VuZXJpYyB0cmFuc2NyaXB0IHBsdW1iaW5nIHVzZWQgYnkgZXZlcnlcbiAqIGVudHJ5IHR5cGUpLCBzbyBhIGRlc2NyaXB0aXZlIHN0cmluZyBoZXJlIHdvdWxkIGxlYWsgaW50byBleHRlcm5hbCBidWlsZHNcbiAqIHZpYSB0aGUgYXBwZW5kRW50cnkgZGlzcGF0Y2ggLyBsb2FkVHJhbnNjcmlwdEZpbGUgcGFyc2VyIGV2ZW4gdGhvdWdoXG4gKiBub3RoaW5nIGluIGFuIGV4dGVybmFsIGJ1aWxkIGV2ZXIgd3JpdGVzIG9yIHJlYWRzIHRoaXMgZW50cnkuXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRleHRDb2xsYXBzZUNvbW1pdEVudHJ5ID0ge1xuICB0eXBlOiAnbWFyYmxlLW9yaWdhbWktY29tbWl0J1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgLyoqIDE2LWRpZ2l0IGNvbGxhcHNlIElELiBNYXggYWNyb3NzIGVudHJpZXMgcmVzZWVkcyB0aGUgSUQgY291bnRlci4gKi9cbiAgY29sbGFwc2VJZDogc3RyaW5nXG4gIC8qKiBUaGUgc3VtbWFyeSBwbGFjZWhvbGRlcidzIHV1aWQgXHUyMDE0IHJlZ2lzdGVyU3VtbWFyeSgpIG5lZWRzIGl0LiAqL1xuICBzdW1tYXJ5VXVpZDogc3RyaW5nXG4gIC8qKiBGdWxsIDxjb2xsYXBzZWQgaWQ9XCIuLi5cIj50ZXh0PC9jb2xsYXBzZWQ+IHN0cmluZyBmb3IgdGhlIHBsYWNlaG9sZGVyLiAqL1xuICBzdW1tYXJ5Q29udGVudDogc3RyaW5nXG4gIC8qKiBQbGFpbiBzdW1tYXJ5IHRleHQgZm9yIGN0eF9pbnNwZWN0LiAqL1xuICBzdW1tYXJ5OiBzdHJpbmdcbiAgLyoqIFNwYW4gYm91bmRhcmllcyBcdTIwMTQgcHJvamVjdFZpZXcgZmluZHMgdGhlc2UgaW4gdGhlIHJlc3VtZWQgTWVzc2FnZVtdLiAqL1xuICBmaXJzdEFyY2hpdmVkVXVpZDogc3RyaW5nXG4gIGxhc3RBcmNoaXZlZFV1aWQ6IHN0cmluZ1xufVxuXG4vKipcbiAqIFNuYXBzaG90IG9mIHRoZSBzdGFnZWQgcXVldWUgYW5kIHNwYXduIHRyaWdnZXIgc3RhdGUuIFVubGlrZSBjb21taXRzXG4gKiAoYXBwZW5kLW9ubHksIHJlcGxheS1hbGwpLCBzbmFwc2hvdHMgYXJlIGxhc3Qtd2lucyBcdTIwMTQgb25seSB0aGUgbW9zdFxuICogcmVjZW50IHNuYXBzaG90IGVudHJ5IGlzIGFwcGxpZWQgb24gcmVzdG9yZS4gV3JpdHRlbiBhZnRlciBldmVyeVxuICogY3R4LWFnZW50IHNwYXduIHJlc29sdmVzICh3aGVuIHN0YWdlZCBjb250ZW50cyBtYXkgaGF2ZSBjaGFuZ2VkKS5cbiAqXG4gKiBTdGFnZWQgYm91bmRhcmllcyBhcmUgVVVJRHMgKHNlc3Npb24tc3RhYmxlKSwgbm90IGNvbGxhcHNlIElEcyAod2hpY2hcbiAqIHJlc2V0IHdpdGggdGhlIHV1aWRUb0lkIGJpbWFwKS4gUmVzdG9yaW5nIGEgc3RhZ2VkIHNwYW4gaXNzdWVzIGZyZXNoXG4gKiBjb2xsYXBzZSBJRHMgZm9yIHRob3NlIG1lc3NhZ2VzIG9uIHRoZSBuZXh0IGRlY29yYXRlL2Rpc3BsYXksIGJ1dCB0aGVcbiAqIHNwYW4gaXRzZWxmIHJlc29sdmVzIGNvcnJlY3RseS5cbiAqL1xuZXhwb3J0IHR5cGUgQ29udGV4dENvbGxhcHNlU25hcHNob3RFbnRyeSA9IHtcbiAgdHlwZTogJ21hcmJsZS1vcmlnYW1pLXNuYXBzaG90J1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgc3RhZ2VkOiBBcnJheTx7XG4gICAgc3RhcnRVdWlkOiBzdHJpbmdcbiAgICBlbmRVdWlkOiBzdHJpbmdcbiAgICBzdW1tYXJ5OiBzdHJpbmdcbiAgICByaXNrOiBudW1iZXJcbiAgICBzdGFnZWRBdDogbnVtYmVyXG4gIH0+XG4gIC8qKiBTcGF3biB0cmlnZ2VyIHN0YXRlIFx1MjAxNCBzbyB0aGUgK2ludGVydmFsIGNsb2NrIHBpY2tzIHVwIHdoZXJlIGl0IGxlZnQgb2ZmLiAqL1xuICBhcm1lZDogYm9vbGVhblxuICBsYXN0U3Bhd25Ub2tlbnM6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbnRyeSA9XG4gIHwgVHJhbnNjcmlwdE1lc3NhZ2VcbiAgfCBTdW1tYXJ5TWVzc2FnZVxuICB8IEN1c3RvbVRpdGxlTWVzc2FnZVxuICB8IEFpVGl0bGVNZXNzYWdlXG4gIHwgTGFzdFByb21wdE1lc3NhZ2VcbiAgfCBUYXNrU3VtbWFyeU1lc3NhZ2VcbiAgfCBUYWdNZXNzYWdlXG4gIHwgQWdlbnROYW1lTWVzc2FnZVxuICB8IEFnZW50Q29sb3JNZXNzYWdlXG4gIHwgQWdlbnRTZXR0aW5nTWVzc2FnZVxuICB8IFBSTGlua01lc3NhZ2VcbiAgfCBGaWxlSGlzdG9yeVNuYXBzaG90TWVzc2FnZVxuICB8IEF0dHJpYnV0aW9uU25hcHNob3RNZXNzYWdlXG4gIHwgUXVldWVPcGVyYXRpb25NZXNzYWdlXG4gIHwgU3BlY3VsYXRpb25BY2NlcHRNZXNzYWdlXG4gIHwgTW9kZUVudHJ5XG4gIHwgV29ya3RyZWVTdGF0ZUVudHJ5XG4gIHwgQ29udGVudFJlcGxhY2VtZW50RW50cnlcbiAgfCBDb250ZXh0Q29sbGFwc2VDb21taXRFbnRyeVxuICB8IENvbnRleHRDb2xsYXBzZVNuYXBzaG90RW50cnlcblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRMb2dzKGxvZ3M6IExvZ09wdGlvbltdKTogTG9nT3B0aW9uW10ge1xuICByZXR1cm4gbG9ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgLy8gU29ydCBieSBtb2RpZmllZCBkYXRlIChuZXdlc3QgZmlyc3QpXG4gICAgY29uc3QgbW9kaWZpZWREaWZmID0gYi5tb2RpZmllZC5nZXRUaW1lKCkgLSBhLm1vZGlmaWVkLmdldFRpbWUoKVxuICAgIGlmIChtb2RpZmllZERpZmYgIT09IDApIHtcbiAgICAgIHJldHVybiBtb2RpZmllZERpZmZcbiAgICB9XG5cbiAgICAvLyBJZiBtb2RpZmllZCBkYXRlcyBhcmUgZXF1YWwsIHNvcnQgYnkgY3JlYXRlZCBkYXRlIChuZXdlc3QgZmlyc3QpXG4gICAgcmV0dXJuIGIuY3JlYXRlZC5nZXRUaW1lKCkgLSBhLmNyZWF0ZWQuZ2V0VGltZSgpXG4gIH0pXG59XG4iLCAiLyoqXG4gKiBNYXRjaGVzIGFueSBYTUwtbGlrZSBgPHRhZz5cdTIwMjY8L3RhZz5gIGJsb2NrIChsb3dlcmNhc2UgdGFnIG5hbWVzLCBvcHRpb25hbFxuICogYXR0cmlidXRlcywgbXVsdGktbGluZSBjb250ZW50KS4gVXNlZCB0byBzdHJpcCBzeXN0ZW0taW5qZWN0ZWQgd3JhcHBlciB0YWdzXG4gKiBmcm9tIGRpc3BsYXkgdGl0bGVzIFx1MjAxNCBJREUgY29udGV4dCwgc2xhc2gtY29tbWFuZCBtYXJrZXJzLCBob29rIG91dHB1dCxcbiAqIHRhc2sgbm90aWZpY2F0aW9ucywgY2hhbm5lbCBtZXNzYWdlcywgZXRjLiBBIGdlbmVyaWMgcGF0dGVybiBhdm9pZHNcbiAqIG1haW50YWluaW5nIGFuIGV2ZXItZ3Jvd2luZyBhbGxvd2xpc3QgdGhhdCBmYWxscyBiZWhpbmQgYXMgbmV3IG5vdGlmaWNhdGlvblxuICogdHlwZXMgYXJlIGFkZGVkLlxuICpcbiAqIE9ubHkgbWF0Y2hlcyBsb3dlcmNhc2UgdGFnIG5hbWVzIChgW2Etel1bXFx3LV0qYCkgc28gdXNlciBwcm9zZSBtZW50aW9uaW5nXG4gKiBKU1gvSFRNTCBjb21wb25lbnRzIChcImZpeCB0aGUgPEJ1dHRvbj4gbGF5b3V0XCIsIFwiPCFET0NUWVBFIGh0bWw+XCIpIHBhc3Nlc1xuICogdGhyb3VnaCBcdTIwMTQgdGhvc2Ugc3RhcnQgd2l0aCB1cHBlcmNhc2Ugb3IgYCFgLiBUaGUgbm9uLWdyZWVkeSBib2R5IHdpdGggYVxuICogYmFja3JlZmVyZW5jZWQgY2xvc2luZyB0YWcga2VlcHMgYWRqYWNlbnQgYmxvY2tzIHNlcGFyYXRlOyB1bnBhaXJlZCBhbmdsZVxuICogYnJhY2tldHMgKFwid2hlbiB4IDwgeVwiKSBkb24ndCBtYXRjaC5cbiAqL1xuY29uc3QgWE1MX1RBR19CTE9DS19QQVRURVJOID0gLzwoW2Etel1bXFx3LV0qKSg/Olxcc1tePl0qKT8+W1xcc1xcU10qPzxcXC9cXDE+XFxuPy9nXG5cbi8qKlxuICogU3RyaXAgWE1MLWxpa2UgdGFnIGJsb2NrcyBmcm9tIHRleHQgZm9yIHVzZSBpbiBVSSB0aXRsZXMgKC9yZXdpbmQsIC9yZXN1bWUsXG4gKiBicmlkZ2Ugc2Vzc2lvbiB0aXRsZXMpLiBTeXN0ZW0taW5qZWN0ZWQgY29udGV4dCBcdTIwMTQgSURFIG1ldGFkYXRhLCBob29rIG91dHB1dCxcbiAqIHRhc2sgbm90aWZpY2F0aW9ucyBcdTIwMTQgYXJyaXZlcyB3cmFwcGVkIGluIHRhZ3MgYW5kIHNob3VsZCBuZXZlciBzdXJmYWNlIGFzIGFcbiAqIHRpdGxlLlxuICpcbiAqIElmIHN0cmlwcGluZyB3b3VsZCByZXN1bHQgaW4gZW1wdHkgdGV4dCwgcmV0dXJucyB0aGUgb3JpZ2luYWwgdW5jaGFuZ2VkXG4gKiAoYmV0dGVyIHRvIHNob3cgc29tZXRoaW5nIHRoYW4gbm90aGluZykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcERpc3BsYXlUYWdzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHJlc3VsdCA9IHRleHQucmVwbGFjZShYTUxfVEFHX0JMT0NLX1BBVFRFUk4sICcnKS50cmltKClcbiAgcmV0dXJuIHJlc3VsdCB8fCB0ZXh0XG59XG5cbi8qKlxuICogTGlrZSBzdHJpcERpc3BsYXlUYWdzIGJ1dCByZXR1cm5zIGVtcHR5IHN0cmluZyB3aGVuIGFsbCBjb250ZW50IGlzIHRhZ3MuXG4gKiBVc2VkIGJ5IGdldExvZ0Rpc3BsYXlUaXRsZSB0byBkZXRlY3QgY29tbWFuZC1vbmx5IHByb21wdHMgKGUuZy4gL2NsZWFyKVxuICogc28gdGhleSBjYW4gZmFsbCB0aHJvdWdoIHRvIHRoZSBuZXh0IHRpdGxlIGZhbGxiYWNrLCBhbmQgYnkgZXh0cmFjdFRpdGxlVGV4dFxuICogdG8gc2tpcCBwdXJlLVhNTCBtZXNzYWdlcyBkdXJpbmcgYnJpZGdlIHRpdGxlIGRlcml2YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcERpc3BsYXlUYWdzQWxsb3dFbXB0eSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKFhNTF9UQUdfQkxPQ0tfUEFUVEVSTiwgJycpLnRyaW0oKVxufVxuXG5jb25zdCBJREVfQ09OVEVYVF9UQUdTX1BBVFRFUk4gPVxuICAvPChpZGVfb3BlbmVkX2ZpbGV8aWRlX3NlbGVjdGlvbikoPzpcXHNbXj5dKik/PltcXHNcXFNdKj88XFwvXFwxPlxcbj8vZ1xuXG4vKipcbiAqIFN0cmlwIG9ubHkgSURFLWluamVjdGVkIGNvbnRleHQgdGFncyAoaWRlX29wZW5lZF9maWxlLCBpZGVfc2VsZWN0aW9uKS5cbiAqIFVzZWQgYnkgdGV4dEZvclJlc3VibWl0IHNvIFVQLWFycm93IHJlc3VibWl0IHByZXNlcnZlcyB1c2VyLXR5cGVkIGNvbnRlbnRcbiAqIGluY2x1ZGluZyBsb3dlcmNhc2UgSFRNTCBsaWtlIGA8Y29kZT5mb288L2NvZGU+YCB3aGlsZSBkcm9wcGluZyBJREUgbm9pc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcElkZUNvbnRleHRUYWdzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoSURFX0NPTlRFWFRfVEFHU19QQVRURVJOLCAnJykudHJpbSgpXG59XG4iLCAiLyoqXG4gKiBQcml2YWN5IGxldmVsIGNvbnRyb2xzIGhvdyBtdWNoIG5vbmVzc2VudGlhbCBuZXR3b3JrIHRyYWZmaWMgYW5kIHRlbGVtZXRyeVxuICogQ2xhdWRlIENvZGUgZ2VuZXJhdGVzLlxuICpcbiAqIExldmVscyBhcmUgb3JkZXJlZCBieSByZXN0cmljdGl2ZW5lc3M6XG4gKiAgIGRlZmF1bHQgPCBuby10ZWxlbWV0cnkgPCBlc3NlbnRpYWwtdHJhZmZpY1xuICpcbiAqIC0gZGVmYXVsdDogICAgICAgICAgICBFdmVyeXRoaW5nIGVuYWJsZWQuXG4gKiAtIG5vLXRlbGVtZXRyeTogICAgICAgQW5hbHl0aWNzL3RlbGVtZXRyeSBkaXNhYmxlZCAoRGF0YWRvZywgMVAgZXZlbnRzLCBmZWVkYmFjayBzdXJ2ZXkpLlxuICogLSBlc3NlbnRpYWwtdHJhZmZpYzogIEFMTCBub25lc3NlbnRpYWwgbmV0d29yayB0cmFmZmljIGRpc2FibGVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgKHRlbGVtZXRyeSArIGF1dG8tdXBkYXRlcywgZ3JvdmUsIHJlbGVhc2Ugbm90ZXMsIG1vZGVsIGNhcGFiaWxpdGllcywgZXRjLikuXG4gKlxuICogVGhlIHJlc29sdmVkIGxldmVsIGlzIHRoZSBtb3N0IHJlc3RyaWN0aXZlIHNpZ25hbCBmcm9tOlxuICogICBDTEFVREVfQ09ERV9ESVNBQkxFX05PTkVTU0VOVElBTF9UUkFGRklDICBcdTIxOTIgIGVzc2VudGlhbC10cmFmZmljXG4gKiAgIERJU0FCTEVfVEVMRU1FVFJZICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjE5MiAgbm8tdGVsZW1ldHJ5XG4gKi9cblxudHlwZSBQcml2YWN5TGV2ZWwgPSAnZGVmYXVsdCcgfCAnbm8tdGVsZW1ldHJ5JyB8ICdlc3NlbnRpYWwtdHJhZmZpYydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXZhY3lMZXZlbCgpOiBQcml2YWN5TGV2ZWwge1xuICBpZiAocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRElTQUJMRV9OT05FU1NFTlRJQUxfVFJBRkZJQykge1xuICAgIHJldHVybiAnZXNzZW50aWFsLXRyYWZmaWMnXG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52LkRJU0FCTEVfVEVMRU1FVFJZKSB7XG4gICAgcmV0dXJuICduby10ZWxlbWV0cnknXG4gIH1cbiAgcmV0dXJuICdkZWZhdWx0J1xufVxuXG4vKipcbiAqIFRydWUgd2hlbiBhbGwgbm9uZXNzZW50aWFsIG5ldHdvcmsgdHJhZmZpYyBzaG91bGQgYmUgc3VwcHJlc3NlZC5cbiAqIEVxdWl2YWxlbnQgdG8gdGhlIG9sZCBgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRElTQUJMRV9OT05FU1NFTlRJQUxfVFJBRkZJQ2AgY2hlY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Vzc2VudGlhbFRyYWZmaWNPbmx5KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0UHJpdmFjeUxldmVsKCkgPT09ICdlc3NlbnRpYWwtdHJhZmZpYydcbn1cblxuLyoqXG4gKiBUcnVlIHdoZW4gdGVsZW1ldHJ5L2FuYWx5dGljcyBzaG91bGQgYmUgc3VwcHJlc3NlZC5cbiAqIFRydWUgYXQgYm90aCBgbm8tdGVsZW1ldHJ5YCBhbmQgYGVzc2VudGlhbC10cmFmZmljYCBsZXZlbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbGVtZXRyeURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0UHJpdmFjeUxldmVsKCkgIT09ICdkZWZhdWx0J1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGVudiB2YXIgbmFtZSByZXNwb25zaWJsZSBmb3IgdGhlIGN1cnJlbnQgZXNzZW50aWFsLXRyYWZmaWMgcmVzdHJpY3Rpb24sXG4gKiBvciBudWxsIGlmIHVucmVzdHJpY3RlZC4gVXNlZCBmb3IgdXNlci1mYWNpbmcgXCJ1bnNldCBYIHRvIHJlLWVuYWJsZVwiIG1lc3NhZ2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXNzZW50aWFsVHJhZmZpY09ubHlSZWFzb24oKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9ESVNBQkxFX05PTkVTU0VOVElBTF9UUkFGRklDKSB7XG4gICAgcmV0dXJuICdDTEFVREVfQ09ERV9ESVNBQkxFX05PTkVTU0VOVElBTF9UUkFGRklDJ1xuICB9XG4gIHJldHVybiBudWxsXG59XG4iLCAiZXhwb3J0IGNvbnN0IHVuc2FmZUZpbGVuYW1lRml4dHVyZXMgPSBPYmplY3QuZnJlZXplKFtcblx0JycsXG5cdCcgICAnLFxuXHQnLicsXG5cdCcuLicsXG5cdCcgLicsXG5cdCcuICcsXG5cdCcgLi4nLFxuXHQnLi4gJyxcblx0Jy4uLycsXG5cdCcuLi9mb28nLFxuXHQnZm9vLy4uL2JhcicsXG5cdCdmb28vYmFyJyxcblx0J2Zvb1xcXFxiYXInLFxuXHQnZm9vXFwwYmFyJyxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhZmVGaWxlbmFtZShmaWxlbmFtZSkge1xuXHRpZiAodHlwZW9mIGZpbGVuYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSBmaWxlbmFtZS50cmltKCk7XG5cblx0cmV0dXJuIHRyaW1tZWQgIT09ICcnXG5cdFx0JiYgdHJpbW1lZCAhPT0gJy4nXG5cdFx0JiYgdHJpbW1lZCAhPT0gJy4uJ1xuXHRcdCYmICFmaWxlbmFtZS5pbmNsdWRlcygnLycpXG5cdFx0JiYgIWZpbGVuYW1lLmluY2x1ZGVzKCdcXFxcJylcblx0XHQmJiAhZmlsZW5hbWUuaW5jbHVkZXMoJ1xcMCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U2FmZUZpbGVuYW1lKGZpbGVuYW1lKSB7XG5cdGlmICh0eXBlb2YgZmlsZW5hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdGlmICghaXNTYWZlRmlsZW5hbWUoZmlsZW5hbWUpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBVbnNhZmUgZmlsZW5hbWU6ICR7SlNPTi5zdHJpbmdpZnkoZmlsZW5hbWUpfWApO1xuXHR9XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBvcyBmcm9tICdub2RlOm9zJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge2Fzc2VydFNhZmVGaWxlbmFtZX0gZnJvbSAnaXMtc2FmZS1maWxlbmFtZSc7XG5cbmNvbnN0IGhvbWVkaXIgPSBvcy5ob21lZGlyKCk7XG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxuY29uc3QgbWFjb3MgPSBuYW1lID0+IHtcblx0Y29uc3QgbGlicmFyeSA9IHBhdGguam9pbihob21lZGlyLCAnTGlicmFyeScpO1xuXG5cdHJldHVybiB7XG5cdFx0ZGF0YTogcGF0aC5qb2luKGxpYnJhcnksICdBcHBsaWNhdGlvbiBTdXBwb3J0JywgbmFtZSksXG5cdFx0Y29uZmlnOiBwYXRoLmpvaW4obGlicmFyeSwgJ1ByZWZlcmVuY2VzJywgbmFtZSksXG5cdFx0Y2FjaGU6IHBhdGguam9pbihsaWJyYXJ5LCAnQ2FjaGVzJywgbmFtZSksXG5cdFx0bG9nOiBwYXRoLmpvaW4obGlicmFyeSwgJ0xvZ3MnLCBuYW1lKSxcblx0XHR0ZW1wOiBwYXRoLmpvaW4odG1wZGlyLCBuYW1lKSxcblx0fTtcbn07XG5cbmNvbnN0IHdpbmRvd3MgPSBuYW1lID0+IHtcblx0Y29uc3QgYXBwRGF0YSA9IGVudi5BUFBEQVRBIHx8IHBhdGguam9pbihob21lZGlyLCAnQXBwRGF0YScsICdSb2FtaW5nJyk7XG5cdGNvbnN0IGxvY2FsQXBwRGF0YSA9IGVudi5MT0NBTEFQUERBVEEgfHwgcGF0aC5qb2luKGhvbWVkaXIsICdBcHBEYXRhJywgJ0xvY2FsJyk7XG5cblx0cmV0dXJuIHtcblx0XHQvLyBEYXRhL2NvbmZpZy9jYWNoZS9sb2cgYXJlIGludmVudGVkIGJ5IG1lIGFzIFdpbmRvd3MgaXNuJ3Qgb3BpbmlvbmF0ZWQgYWJvdXQgdGhpc1xuXHRcdGRhdGE6IHBhdGguam9pbihsb2NhbEFwcERhdGEsIG5hbWUsICdEYXRhJyksXG5cdFx0Y29uZmlnOiBwYXRoLmpvaW4oYXBwRGF0YSwgbmFtZSwgJ0NvbmZpZycpLFxuXHRcdGNhY2hlOiBwYXRoLmpvaW4obG9jYWxBcHBEYXRhLCBuYW1lLCAnQ2FjaGUnKSxcblx0XHRsb2c6IHBhdGguam9pbihsb2NhbEFwcERhdGEsIG5hbWUsICdMb2cnKSxcblx0XHR0ZW1wOiBwYXRoLmpvaW4odG1wZGlyLCBuYW1lKSxcblx0fTtcbn07XG5cbi8vIGh0dHBzOi8vc3BlY2lmaWNhdGlvbnMuZnJlZWRlc2t0b3Aub3JnL2Jhc2VkaXItc3BlYy9iYXNlZGlyLXNwZWMtbGF0ZXN0Lmh0bWxcbmNvbnN0IGxpbnV4ID0gbmFtZSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcGF0aC5iYXNlbmFtZShob21lZGlyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGRhdGE6IHBhdGguam9pbihlbnYuWERHX0RBVEFfSE9NRSB8fCBwYXRoLmpvaW4oaG9tZWRpciwgJy5sb2NhbCcsICdzaGFyZScpLCBuYW1lKSxcblx0XHRjb25maWc6IHBhdGguam9pbihlbnYuWERHX0NPTkZJR19IT01FIHx8IHBhdGguam9pbihob21lZGlyLCAnLmNvbmZpZycpLCBuYW1lKSxcblx0XHRjYWNoZTogcGF0aC5qb2luKGVudi5YREdfQ0FDSEVfSE9NRSB8fCBwYXRoLmpvaW4oaG9tZWRpciwgJy5jYWNoZScpLCBuYW1lKSxcblx0XHQvLyBodHRwczovL3dpa2kuZGViaWFuLm9yZy9YREdCYXNlRGlyZWN0b3J5U3BlY2lmaWNhdGlvbiNzdGF0ZVxuXHRcdGxvZzogcGF0aC5qb2luKGVudi5YREdfU1RBVEVfSE9NRSB8fCBwYXRoLmpvaW4oaG9tZWRpciwgJy5sb2NhbCcsICdzdGF0ZScpLCBuYW1lKSxcblx0XHR0ZW1wOiBwYXRoLmpvaW4odG1wZGlyLCB1c2VybmFtZSwgbmFtZSksXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnZQYXRocyhuYW1lLCB7c3VmZml4ID0gJ25vZGVqcyd9ID0ge30pIHtcblx0YXNzZXJ0U2FmZUZpbGVuYW1lKG5hbWUpO1xuXG5cdGlmIChzdWZmaXgpIHtcblx0XHQvLyBBZGQgc3VmZml4IHRvIHByZXZlbnQgcG9zc2libGUgY29uZmxpY3Qgd2l0aCBuYXRpdmUgYXBwc1xuXHRcdG5hbWUgKz0gYC0ke3N1ZmZpeH1gO1xuXHR9XG5cblx0YXNzZXJ0U2FmZUZpbGVuYW1lKG5hbWUpO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuXHRcdHJldHVybiBtYWNvcyhuYW1lKTtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIHdpbmRvd3MobmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gbGludXgobmFtZSk7XG59XG4iLCAiaW1wb3J0IGVudlBhdGhzIGZyb20gJ2Vudi1wYXRocydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZGpiMkhhc2ggfSBmcm9tICcuL2hhc2guanMnXG5cbmNvbnN0IHBhdGhzID0gZW52UGF0aHMoJ2NsYXVkZS1jbGknKVxuXG4vLyBMb2NhbCBzYW5pdGl6ZVBhdGggdXNpbmcgZGpiMkhhc2ggXHUyMDE0IE5PVCB0aGUgc2hhcmVkIHZlcnNpb24gZnJvbVxuLy8gc2Vzc2lvblN0b3JhZ2VQb3J0YWJsZS50cyB3aGljaCB1c2VzIEJ1bi5oYXNoICh3eWhhc2gpIHdoZW4gYXZhaWxhYmxlLlxuLy8gQ2FjaGUgZGlyZWN0b3J5IG5hbWVzIG11c3QgcmVtYWluIHN0YWJsZSBhY3Jvc3MgdXBncmFkZXMgc28gZXhpc3RpbmcgY2FjaGVcbi8vIGRhdGEgKGVycm9yIGxvZ3MsIE1DUCBsb2dzKSBpcyBub3Qgb3JwaGFuZWQuXG5jb25zdCBNQVhfU0FOSVRJWkVEX0xFTkdUSCA9IDIwMFxuZnVuY3Rpb24gc2FuaXRpemVQYXRoKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplZCA9IG5hbWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICctJylcbiAgaWYgKHNhbml0aXplZC5sZW5ndGggPD0gTUFYX1NBTklUSVpFRF9MRU5HVEgpIHtcbiAgICByZXR1cm4gc2FuaXRpemVkXG4gIH1cbiAgcmV0dXJuIGAke3Nhbml0aXplZC5zbGljZSgwLCBNQVhfU0FOSVRJWkVEX0xFTkdUSCl9LSR7TWF0aC5hYnMoZGpiMkhhc2gobmFtZSkpLnRvU3RyaW5nKDM2KX1gXG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3REaXIoY3dkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2FuaXRpemVQYXRoKGN3ZClcbn1cblxuZXhwb3J0IGNvbnN0IENBQ0hFX1BBVEhTID0ge1xuICBiYXNlTG9nczogKCkgPT4gam9pbihwYXRocy5jYWNoZSwgZ2V0UHJvamVjdERpcihnZXRGc0ltcGxlbWVudGF0aW9uKCkuY3dkKCkpKSxcbiAgZXJyb3JzOiAoKSA9PlxuICAgIGpvaW4ocGF0aHMuY2FjaGUsIGdldFByb2plY3REaXIoZ2V0RnNJbXBsZW1lbnRhdGlvbigpLmN3ZCgpKSwgJ2Vycm9ycycpLFxuICBtZXNzYWdlczogKCkgPT5cbiAgICBqb2luKHBhdGhzLmNhY2hlLCBnZXRQcm9qZWN0RGlyKGdldEZzSW1wbGVtZW50YXRpb24oKS5jd2QoKSksICdtZXNzYWdlcycpLFxuICBtY3BMb2dzOiAoc2VydmVyTmFtZTogc3RyaW5nKSA9PlxuICAgIGpvaW4oXG4gICAgICBwYXRocy5jYWNoZSxcbiAgICAgIGdldFByb2plY3REaXIoZ2V0RnNJbXBsZW1lbnRhdGlvbigpLmN3ZCgpKSxcbiAgICAgIC8vIFNhbml0aXplIHNlcnZlciBuYW1lIGZvciBXaW5kb3dzIGNvbXBhdGliaWxpdHkgKGNvbG9ucyBhcmUgcmVzZXJ2ZWQgZm9yIGRyaXZlIGxldHRlcnMpXG4gICAgICBgbWNwLWxvZ3MtJHtzYW5pdGl6ZVBhdGgoc2VydmVyTmFtZSl9YCxcbiAgICApLFxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHR5cGUgeyBCZXRhTWVzc2FnZVN0cmVhbVBhcmFtcyB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9iZXRhL21lc3NhZ2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB7IHJlYWRkaXIsIHJlYWRGaWxlLCBzdGF0IH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gtZXMvbWVtb2l6ZS5qcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHR5cGUgeyBRdWVyeVNvdXJjZSB9IGZyb20gJ3NyYy9jb25zdGFudHMvcXVlcnlTb3VyY2UuanMnXG5pbXBvcnQge1xuICBzZXRMYXN0QVBJUmVxdWVzdCxcbiAgc2V0TGFzdEFQSVJlcXVlc3RNZXNzYWdlcyxcbn0gZnJvbSAnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgVElDS19UQUcgfSBmcm9tICcuLi9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBMb2dPcHRpb24sXG4gIHR5cGUgU2VyaWFsaXplZE1lc3NhZ2UsXG4gIHNvcnRMb2dzLFxufSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHsgQ0FDSEVfUEFUSFMgfSBmcm9tICcuL2NhY2hlUGF0aHMuanMnXG5pbXBvcnQgeyBzdHJpcERpc3BsYXlUYWdzLCBzdHJpcERpc3BsYXlUYWdzQWxsb3dFbXB0eSB9IGZyb20gJy4vZGlzcGxheVRhZ3MuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyB0b0Vycm9yIH0gZnJvbSAnLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBpc0Vzc2VudGlhbFRyYWZmaWNPbmx5IH0gZnJvbSAnLi9wcml2YWN5TGV2ZWwuanMnXG5pbXBvcnQgeyBqc29uUGFyc2UgfSBmcm9tICcuL3Nsb3dPcGVyYXRpb25zLmpzJ1xuXG4vKipcbiAqIEdldHMgdGhlIGRpc3BsYXkgdGl0bGUgZm9yIGEgbG9nL3Nlc3Npb24gd2l0aCBmYWxsYmFjayBsb2dpYy5cbiAqIFNraXBzIGZpcnN0UHJvbXB0IGlmIGl0IHN0YXJ0cyB3aXRoIGEgdGljay9nb2FsIHRhZyAoYXV0b25vbW91cyBtb2RlIGF1dG8tcHJvbXB0KS5cbiAqIFN0cmlwcyBkaXNwbGF5LXVuZnJpZW5kbHkgdGFncyAobGlrZSA8aWRlX29wZW5lZF9maWxlPikgZnJvbSB0aGUgcmVzdWx0LlxuICogRmFsbHMgYmFjayB0byBhIHRydW5jYXRlZCBzZXNzaW9uIElEIHdoZW4gbm8gb3RoZXIgdGl0bGUgaXMgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nRGlzcGxheVRpdGxlKFxuICBsb2c6IExvZ09wdGlvbixcbiAgZGVmYXVsdFRpdGxlPzogc3RyaW5nLFxuKTogc3RyaW5nIHtcbiAgLy8gU2tpcCBmaXJzdFByb21wdCBpZiBpdCdzIGEgdGljay9nb2FsIG1lc3NhZ2UgKGF1dG9ub21vdXMgbW9kZSBhdXRvLXByb21wdClcbiAgY29uc3QgaXNBdXRvbm9tb3VzUHJvbXB0ID0gbG9nLmZpcnN0UHJvbXB0Py5zdGFydHNXaXRoKGA8JHtUSUNLX1RBR30+YClcbiAgLy8gU3RyaXAgZGlzcGxheS11bmZyaWVuZGx5IHRhZ3MgKGNvbW1hbmQtbmFtZSwgaWRlX29wZW5lZF9maWxlLCBldGMuKSBlYXJseVxuICAvLyBzbyB0aGF0IGNvbW1hbmQtb25seSBwcm9tcHRzIChlLmcuIC9jbGVhcikgYmVjb21lIGVtcHR5IGFuZCBmYWxsIHRocm91Z2hcbiAgLy8gdG8gdGhlIG5leHQgZmFsbGJhY2sgaW5zdGVhZCBvZiBzaG93aW5nIHJhdyBYTUwgdGFncy5cbiAgLy8gTm90ZTogc3RyaXBEaXNwbGF5VGFncyByZXR1cm5zIHRoZSBvcmlnaW5hbCB3aGVuIHN0cmlwcGluZyB5aWVsZHMgZW1wdHksXG4gIC8vIHNvIHdlIGNhbGwgc3RyaXBEaXNwbGF5VGFnc0FsbG93RW1wdHkgdG8gZGV0ZWN0IGNvbW1hbmQtb25seSBwcm9tcHRzLlxuICBjb25zdCBzdHJpcHBlZEZpcnN0UHJvbXB0ID0gbG9nLmZpcnN0UHJvbXB0XG4gICAgPyBzdHJpcERpc3BsYXlUYWdzQWxsb3dFbXB0eShsb2cuZmlyc3RQcm9tcHQpXG4gICAgOiAnJ1xuICBjb25zdCB1c2VGaXJzdFByb21wdCA9IHN0cmlwcGVkRmlyc3RQcm9tcHQgJiYgIWlzQXV0b25vbW91c1Byb21wdFxuICBjb25zdCB0aXRsZSA9XG4gICAgbG9nLmFnZW50TmFtZSB8fFxuICAgIGxvZy5jdXN0b21UaXRsZSB8fFxuICAgIGxvZy5zdW1tYXJ5IHx8XG4gICAgKHVzZUZpcnN0UHJvbXB0ID8gc3RyaXBwZWRGaXJzdFByb21wdCA6IHVuZGVmaW5lZCkgfHxcbiAgICBkZWZhdWx0VGl0bGUgfHxcbiAgICAvLyBGb3IgYXV0b25vbW91cyBzZXNzaW9ucyB3aXRob3V0IG90aGVyIGNvbnRleHQsIHNob3cgYSBtZWFuaW5nZnVsIGxhYmVsXG4gICAgKGlzQXV0b25vbW91c1Byb21wdCA/ICdBdXRvbm9tb3VzIHNlc3Npb24nIDogdW5kZWZpbmVkKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byB0cnVuY2F0ZWQgc2Vzc2lvbiBJRCBmb3IgbGl0ZSBsb2dzIHdpdGggbm8gbWV0YWRhdGFcbiAgICAobG9nLnNlc3Npb25JZCA/IGxvZy5zZXNzaW9uSWQuc2xpY2UoMCwgOCkgOiAnJykgfHxcbiAgICAnJ1xuICAvLyBTdHJpcCBkaXNwbGF5LXVuZnJpZW5kbHkgdGFncyAobGlrZSA8aWRlX29wZW5lZF9maWxlPikgZm9yIGNsZWFuZXIgdGl0bGVzXG4gIHJldHVybiBzdHJpcERpc3BsYXlUYWdzKHRpdGxlKS50cmltKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb0ZpbGVuYW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKVxufVxuXG4vLyBJbi1tZW1vcnkgZXJyb3IgbG9nIGZvciByZWNlbnQgZXJyb3JzXG4vLyBNb3ZlZCBmcm9tIGJvb3RzdHJhcC9zdGF0ZS50cyB0byBicmVhayBpbXBvcnQgY3ljbGVcbmNvbnN0IE1BWF9JTl9NRU1PUllfRVJST1JTID0gMTAwXG5sZXQgaW5NZW1vcnlFcnJvckxvZzogQXJyYXk8eyBlcnJvcjogc3RyaW5nOyB0aW1lc3RhbXA6IHN0cmluZyB9PiA9IFtdXG5cbmZ1bmN0aW9uIGFkZFRvSW5NZW1vcnlFcnJvckxvZyhlcnJvckluZm86IHtcbiAgZXJyb3I6IHN0cmluZ1xuICB0aW1lc3RhbXA6IHN0cmluZ1xufSk6IHZvaWQge1xuICBpZiAoaW5NZW1vcnlFcnJvckxvZy5sZW5ndGggPj0gTUFYX0lOX01FTU9SWV9FUlJPUlMpIHtcbiAgICBpbk1lbW9yeUVycm9yTG9nLnNoaWZ0KCkgLy8gUmVtb3ZlIG9sZGVzdCBlcnJvclxuICB9XG4gIGluTWVtb3J5RXJyb3JMb2cucHVzaChlcnJvckluZm8pXG59XG5cbi8qKlxuICogU2luayBpbnRlcmZhY2UgZm9yIHRoZSBlcnJvciBsb2dnaW5nIGJhY2tlbmRcbiAqL1xuZXhwb3J0IHR5cGUgRXJyb3JMb2dTaW5rID0ge1xuICBsb2dFcnJvcjogKGVycm9yOiBFcnJvcikgPT4gdm9pZFxuICBsb2dNQ1BFcnJvcjogKHNlcnZlck5hbWU6IHN0cmluZywgZXJyb3I6IHVua25vd24pID0+IHZvaWRcbiAgbG9nTUNQRGVidWc6IChzZXJ2ZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxuICBnZXRFcnJvcnNQYXRoOiAoKSA9PiBzdHJpbmdcbiAgZ2V0TUNQTG9nc1BhdGg6IChzZXJ2ZXJOYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xufVxuXG4vLyBRdWV1ZWQgZXZlbnRzIGZvciBldmVudHMgbG9nZ2VkIGJlZm9yZSBzaW5rIGlzIGF0dGFjaGVkXG50eXBlIFF1ZXVlZEVycm9yRXZlbnQgPVxuICB8IHsgdHlwZTogJ2Vycm9yJzsgZXJyb3I6IEVycm9yIH1cbiAgfCB7IHR5cGU6ICdtY3BFcnJvcic7IHNlcnZlck5hbWU6IHN0cmluZzsgZXJyb3I6IHVua25vd24gfVxuICB8IHsgdHlwZTogJ21jcERlYnVnJzsgc2VydmVyTmFtZTogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfVxuXG5jb25zdCBlcnJvclF1ZXVlOiBRdWV1ZWRFcnJvckV2ZW50W10gPSBbXVxuXG4vLyBTaW5rIC0gaW5pdGlhbGl6ZWQgZHVyaW5nIGFwcCBzdGFydHVwXG5sZXQgZXJyb3JMb2dTaW5rOiBFcnJvckxvZ1NpbmsgfCBudWxsID0gbnVsbFxuXG4vKipcbiAqIEF0dGFjaCB0aGUgZXJyb3IgbG9nIHNpbmsgdGhhdCB3aWxsIHJlY2VpdmUgYWxsIGVycm9yIGV2ZW50cy5cbiAqIFF1ZXVlZCBldmVudHMgYXJlIGRyYWluZWQgaW1tZWRpYXRlbHkgdG8gZW5zdXJlIG5vIGVycm9ycyBhcmUgbG9zdC5cbiAqXG4gKiBJZGVtcG90ZW50OiBpZiBhIHNpbmsgaXMgYWxyZWFkeSBhdHRhY2hlZCwgdGhpcyBpcyBhIG5vLW9wLiBUaGlzIGFsbG93c1xuICogY2FsbGluZyBmcm9tIGJvdGggdGhlIHByZUFjdGlvbiBob29rIChmb3Igc3ViY29tbWFuZHMpIGFuZCBzZXR1cCgpIChmb3JcbiAqIHRoZSBkZWZhdWx0IGNvbW1hbmQpIHdpdGhvdXQgY29vcmRpbmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoRXJyb3JMb2dTaW5rKG5ld1Npbms6IEVycm9yTG9nU2luayk6IHZvaWQge1xuICBpZiAoZXJyb3JMb2dTaW5rICE9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZXJyb3JMb2dTaW5rID0gbmV3U2lua1xuXG4gIC8vIERyYWluIHRoZSBxdWV1ZSBpbW1lZGlhdGVseSAtIGVycm9ycyBzaG91bGQgbm90IGJlIGRlbGF5ZWRcbiAgaWYgKGVycm9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHF1ZXVlZEV2ZW50cyA9IFsuLi5lcnJvclF1ZXVlXVxuICAgIGVycm9yUXVldWUubGVuZ3RoID0gMFxuXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBxdWV1ZWRFdmVudHMpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgZXJyb3JMb2dTaW5rLmxvZ0Vycm9yKGV2ZW50LmVycm9yKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21jcEVycm9yJzpcbiAgICAgICAgICBlcnJvckxvZ1NpbmsubG9nTUNQRXJyb3IoZXZlbnQuc2VydmVyTmFtZSwgZXZlbnQuZXJyb3IpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnbWNwRGVidWcnOlxuICAgICAgICAgIGVycm9yTG9nU2luay5sb2dNQ1BEZWJ1ZyhldmVudC5zZXJ2ZXJOYW1lLCBldmVudC5tZXNzYWdlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTG9ncyBhbiBlcnJvciB0byBtdWx0aXBsZSBkZXN0aW5hdGlvbnMgZm9yIGRlYnVnZ2luZyBhbmQgbW9uaXRvcmluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGxvZ3MgZXJyb3JzIHRvOlxuICogLSBEZWJ1ZyBsb2dzICh2aXNpYmxlIHZpYSBgY2xhdWRlIC0tZGVidWdgIG9yIGB0YWlsIC1mIH4vLmNsYXVkZS9kZWJ1Zy9sYXRlc3RgKVxuICogLSBJbi1tZW1vcnkgZXJyb3IgbG9nIChhY2Nlc3NpYmxlIHZpYSBgZ2V0SW5NZW1vcnlFcnJvcnMoKWAsIHVzZWZ1bCBmb3IgaW5jbHVkaW5nXG4gKiAgIGluIGJ1ZyByZXBvcnRzIG9yIGRpc3BsYXlpbmcgcmVjZW50IGVycm9ycyB0byB1c2VycylcbiAqIC0gUGVyc2lzdGVudCBlcnJvciBsb2cgZmlsZSAob25seSBmb3IgaW50ZXJuYWwgJ2FudCcgdXNlcnMsIHN0b3JlZCBpbiB+Ly5jbGF1ZGUvZXJyb3JzLylcbiAqXG4gKiBVc2FnZTpcbiAqIGBgYHRzXG4gKiBsb2dFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjb25uZWN0JykpXG4gKiBgYGBcbiAqXG4gKiBUbyB2aWV3IGVycm9yczpcbiAqIC0gRGVidWc6IFJ1biBgY2xhdWRlIC0tZGVidWdgIG9yIGB0YWlsIC1mIH4vLmNsYXVkZS9kZWJ1Zy9sYXRlc3RgXG4gKiAtIEluLW1lbW9yeTogQ2FsbCBgZ2V0SW5NZW1vcnlFcnJvcnMoKWAgdG8gZ2V0IHJlY2VudCBlcnJvcnMgZm9yIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuY29uc3QgaXNIYXJkRmFpbE1vZGUgPSBtZW1vaXplKCgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS1oYXJkLWZhaWwnKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yOiB1bmtub3duKTogdm9pZCB7XG4gIGNvbnN0IGVyciA9IHRvRXJyb3IoZXJyb3IpXG4gIGlmIChmZWF0dXJlKCdIQVJEX0ZBSUwnKSAmJiBpc0hhcmRGYWlsTW9kZSgpKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjcmFzaCBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKCdbSEFSRCBGQUlMXSBsb2dFcnJvciBjYWxsZWQgd2l0aDonLCBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIGVycm9yIHJlcG9ydGluZyBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICBpZiAoXG4gICAgICAvLyBDbG91ZCBwcm92aWRlcnMgKEJlZHJvY2svVmVydGV4L0ZvdW5kcnkpIGFsd2F5cyBkaXNhYmxlIGZlYXR1cmVzXG4gICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfQkVEUk9DSykgfHxcbiAgICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1VTRV9WRVJURVgpIHx8XG4gICAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfRk9VTkRSWSkgfHxcbiAgICAgIHByb2Nlc3MuZW52LkRJU0FCTEVfRVJST1JfUkVQT1JUSU5HIHx8XG4gICAgICBpc0Vzc2VudGlhbFRyYWZmaWNPbmx5KClcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVycm9yU3RyID0gZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlXG5cbiAgICBjb25zdCBlcnJvckluZm8gPSB7XG4gICAgICBlcnJvcjogZXJyb3JTdHIsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgYWRkIHRvIGluLW1lbW9yeSBsb2cgKG5vIGRlcGVuZGVuY2llcyBuZWVkZWQpXG4gICAgYWRkVG9Jbk1lbW9yeUVycm9yTG9nKGVycm9ySW5mbylcblxuICAgIC8vIElmIHNpbmsgbm90IGF0dGFjaGVkLCBxdWV1ZSB0aGUgZXZlbnRcbiAgICBpZiAoZXJyb3JMb2dTaW5rID09PSBudWxsKSB7XG4gICAgICBlcnJvclF1ZXVlLnB1c2goeyB0eXBlOiAnZXJyb3InLCBlcnJvcjogZXJyIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlcnJvckxvZ1NpbmsubG9nRXJyb3IoZXJyKVxuICB9IGNhdGNoIHtcbiAgICAvLyBwYXNzXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluTWVtb3J5RXJyb3JzKCk6IHsgZXJyb3I6IHN0cmluZzsgdGltZXN0YW1wOiBzdHJpbmcgfVtdIHtcbiAgcmV0dXJuIFsuLi5pbk1lbW9yeUVycm9yTG9nXVxufVxuXG4vKipcbiAqIExvYWRzIHRoZSBsaXN0IG9mIGVycm9yIGxvZ3NcbiAqIEByZXR1cm5zIExpc3Qgb2YgZXJyb3IgbG9ncyBzb3J0ZWQgYnkgZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEVycm9yTG9ncygpOiBQcm9taXNlPExvZ09wdGlvbltdPiB7XG4gIHJldHVybiBsb2FkTG9nTGlzdChDQUNIRV9QQVRIUy5lcnJvcnMoKSlcbn1cblxuLyoqXG4gKiBHZXRzIGFuIGVycm9yIGxvZyBieSBpdHMgaW5kZXhcbiAqIEBwYXJhbSBpbmRleCBJbmRleCBpbiB0aGUgc29ydGVkIGxpc3Qgb2YgbG9ncyAoMC1iYXNlZClcbiAqIEByZXR1cm5zIExvZyBkYXRhIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFcnJvckxvZ0J5SW5kZXgoXG4gIGluZGV4OiBudW1iZXIsXG4pOiBQcm9taXNlPExvZ09wdGlvbiB8IG51bGw+IHtcbiAgY29uc3QgbG9ncyA9IGF3YWl0IGxvYWRFcnJvckxvZ3MoKVxuICByZXR1cm4gbG9nc1tpbmRleF0gfHwgbnVsbFxufVxuXG4vKipcbiAqIEludGVybmFsIGZ1bmN0aW9uIHRvIGxvYWQgYW5kIHByb2Nlc3MgbG9ncyBmcm9tIGEgc3BlY2lmaWVkIHBhdGhcbiAqIEBwYXJhbSBwYXRoIERpcmVjdG9yeSBjb250YWluaW5nIGxvZ3NcbiAqIEByZXR1cm5zIEFycmF5IG9mIGxvZ3Mgc29ydGVkIGJ5IGRhdGVcbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMb2dMaXN0KHBhdGg6IHN0cmluZyk6IFByb21pc2U8TG9nT3B0aW9uW10+IHtcbiAgbGV0IGZpbGVzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICB0cnkge1xuICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihwYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgfSBjYXRjaCB7XG4gICAgbG9nRXJyb3IobmV3IEVycm9yKGBObyBsb2dzIGZvdW5kIGF0ICR7cGF0aH1gKSlcbiAgICByZXR1cm4gW11cbiAgfVxuICBjb25zdCBsb2dEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgZmlsZXMubWFwKGFzeW5jIChmaWxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocGF0aCwgZmlsZS5uYW1lKVxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZ1bGxQYXRoLCB7IGVuY29kaW5nOiAndXRmOCcgfSlcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0ganNvblBhcnNlKGNvbnRlbnQpIGFzIFNlcmlhbGl6ZWRNZXNzYWdlW11cbiAgICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IG1lc3NhZ2VzWzBdXG4gICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBmaXJzdFByb21wdCA9XG4gICAgICAgIGZpcnN0TWVzc2FnZT8udHlwZSA9PT0gJ3VzZXInICYmXG4gICAgICAgIHR5cGVvZiBmaXJzdE1lc3NhZ2U/Lm1lc3NhZ2U/LmNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyBmaXJzdE1lc3NhZ2U/Lm1lc3NhZ2U/LmNvbnRlbnRcbiAgICAgICAgICA6ICdObyBwcm9tcHQnXG5cbiAgICAgIC8vIEZvciBuZXcgcmFuZG9tIGZpbGVuYW1lcywgd2UnbGwgZ2V0IHN0YXRzIGZyb20gdGhlIGZpbGUgaXRzZWxmXG4gICAgICBjb25zdCBmaWxlU3RhdHMgPSBhd2FpdCBzdGF0KGZ1bGxQYXRoKVxuXG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc2lkZWNoYWluIGJ5IGxvb2tpbmcgYXQgZmlsZW5hbWVcbiAgICAgIGNvbnN0IGlzU2lkZWNoYWluID0gZnVsbFBhdGguaW5jbHVkZXMoJ3NpZGVjaGFpbicpXG5cbiAgICAgIC8vIEZvciBuZXcgZmlsZXMsIHVzZSB0aGUgZmlsZSBtb2RpZmllZCB0aW1lIGFzIGRhdGVcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlVG9GaWxlbmFtZShmaWxlU3RhdHMubXRpbWUpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGUsXG4gICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgdmFsdWU6IGksIC8vIGhhY2s6IG92ZXJ3cml0dGVuIGFmdGVyIHNvcnRpbmcsIHJpZ2h0IGJlbG93IHRoaXNcbiAgICAgICAgY3JlYXRlZDogcGFyc2VJU09TdHJpbmcoZmlyc3RNZXNzYWdlPy50aW1lc3RhbXAgfHwgZGF0ZSksXG4gICAgICAgIG1vZGlmaWVkOiBsYXN0TWVzc2FnZT8udGltZXN0YW1wXG4gICAgICAgICAgPyBwYXJzZUlTT1N0cmluZyhsYXN0TWVzc2FnZS50aW1lc3RhbXApXG4gICAgICAgICAgOiBwYXJzZUlTT1N0cmluZyhkYXRlKSxcbiAgICAgICAgZmlyc3RQcm9tcHQ6XG4gICAgICAgICAgZmlyc3RQcm9tcHQuc3BsaXQoJ1xcbicpWzBdPy5zbGljZSgwLCA1MCkgK1xuICAgICAgICAgICAgKGZpcnN0UHJvbXB0Lmxlbmd0aCA+IDUwID8gJ1x1MjAyNicgOiAnJykgfHwgJ05vIHByb21wdCcsXG4gICAgICAgIG1lc3NhZ2VDb3VudDogbWVzc2FnZXMubGVuZ3RoLFxuICAgICAgICBpc1NpZGVjaGFpbixcbiAgICAgIH1cbiAgICB9KSxcbiAgKVxuXG4gIHJldHVybiBzb3J0TG9ncyhsb2dEYXRhLmZpbHRlcihfID0+IF8gIT09IG51bGwpKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgLi4uXyxcbiAgICB2YWx1ZTogaSxcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIHBhcnNlSVNPU3RyaW5nKHM6IHN0cmluZyk6IERhdGUge1xuICBjb25zdCBiID0gcy5zcGxpdCgvXFxEKy8pXG4gIHJldHVybiBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIHBhcnNlSW50KGJbMF0hLCAxMCksXG4gICAgICBwYXJzZUludChiWzFdISwgMTApIC0gMSxcbiAgICAgIHBhcnNlSW50KGJbMl0hLCAxMCksXG4gICAgICBwYXJzZUludChiWzNdISwgMTApLFxuICAgICAgcGFyc2VJbnQoYls0XSEsIDEwKSxcbiAgICAgIHBhcnNlSW50KGJbNV0hLCAxMCksXG4gICAgICBwYXJzZUludChiWzZdISwgMTApLFxuICAgICksXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ01DUEVycm9yKHNlcnZlck5hbWU6IHN0cmluZywgZXJyb3I6IHVua25vd24pOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAvLyBJZiBzaW5rIG5vdCBhdHRhY2hlZCwgcXVldWUgdGhlIGV2ZW50XG4gICAgaWYgKGVycm9yTG9nU2luayA9PT0gbnVsbCkge1xuICAgICAgZXJyb3JRdWV1ZS5wdXNoKHsgdHlwZTogJ21jcEVycm9yJywgc2VydmVyTmFtZSwgZXJyb3IgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVycm9yTG9nU2luay5sb2dNQ1BFcnJvcihzZXJ2ZXJOYW1lLCBlcnJvcilcbiAgfSBjYXRjaCB7XG4gICAgLy8gU2lsZW50bHkgZmFpbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dNQ1BEZWJ1ZyhzZXJ2ZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICB0cnkge1xuICAgIC8vIElmIHNpbmsgbm90IGF0dGFjaGVkLCBxdWV1ZSB0aGUgZXZlbnRcbiAgICBpZiAoZXJyb3JMb2dTaW5rID09PSBudWxsKSB7XG4gICAgICBlcnJvclF1ZXVlLnB1c2goeyB0eXBlOiAnbWNwRGVidWcnLCBzZXJ2ZXJOYW1lLCBtZXNzYWdlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlcnJvckxvZ1NpbmsubG9nTUNQRGVidWcoc2VydmVyTmFtZSwgbWVzc2FnZSlcbiAgfSBjYXRjaCB7XG4gICAgLy8gU2lsZW50bHkgZmFpbFxuICB9XG59XG5cbi8qKlxuICogQ2FwdHVyZXMgdGhlIGxhc3QgQVBJIHJlcXVlc3QgZm9yIGluY2x1c2lvbiBpbiBidWcgcmVwb3J0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVBUElSZXF1ZXN0KFxuICBwYXJhbXM6IEJldGFNZXNzYWdlU3RyZWFtUGFyYW1zLFxuICBxdWVyeVNvdXJjZT86IFF1ZXJ5U291cmNlLFxuKTogdm9pZCB7XG4gIC8vIHN0YXJ0c1dpdGgsIG5vdCBleGFjdCBtYXRjaCBcdTIwMTQgdXNlcnMgd2l0aCBub24tZGVmYXVsdCBvdXRwdXQgc3R5bGVzIGdldFxuICAvLyB2YXJpYW50cyBsaWtlICdyZXBsX21haW5fdGhyZWFkOm91dHB1dFN0eWxlOkV4cGxhbmF0b3J5JyAocXVlcnlTb3VyY2UudHMpLlxuICBpZiAoIXF1ZXJ5U291cmNlIHx8ICFxdWVyeVNvdXJjZS5zdGFydHNXaXRoKCdyZXBsX21haW5fdGhyZWFkJykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFN0b3JlIHBhcmFtcyBXSVRIT1VUIG1lc3NhZ2VzIHRvIGF2b2lkIHJldGFpbmluZyB0aGUgZW50aXJlIGNvbnZlcnNhdGlvblxuICAvLyBmb3IgYWxsIHVzZXJzLiBNZXNzYWdlcyBhcmUgYWxyZWFkeSBwZXJzaXN0ZWQgdG8gdGhlIHRyYW5zY3JpcHQgZmlsZSBhbmRcbiAgLy8gYXZhaWxhYmxlIHZpYSBSZWFjdCBzdGF0ZS5cbiAgY29uc3QgeyBtZXNzYWdlcywgLi4ucGFyYW1zV2l0aG91dE1lc3NhZ2VzIH0gPSBwYXJhbXNcbiAgc2V0TGFzdEFQSVJlcXVlc3QocGFyYW1zV2l0aG91dE1lc3NhZ2VzKVxuICAvLyBGb3IgYW50IHVzZXJzIG9ubHk6IGFsc28ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZmluYWwgbWVzc2FnZXMgYXJyYXkgc29cbiAgLy8gL3NoYXJlJ3Mgc2VyaWFsaXplZF9jb252ZXJzYXRpb24uanNvbiBjYXB0dXJlcyB0aGUgZXhhY3QgcG9zdC1jb21wYWN0aW9uLFxuICAvLyBDTEFVREUubWQtaW5qZWN0ZWQgcGF5bG9hZCB0aGUgQVBJIHJlY2VpdmVkLiBPdmVyd3JpdHRlbiBlYWNoIHR1cm47XG4gIC8vIGR1bXBQcm9tcHRzLnRzIGFscmVhZHkgaG9sZHMgNSBmdWxsIHJlcXVlc3QgYm9kaWVzIGZvciBhbnRzLCBzbyB0aGlzIGlzXG4gIC8vIG5vdCBhIG5ldyByZXRlbnRpb24gY2xhc3MuXG4gIHNldExhc3RBUElSZXF1ZXN0TWVzc2FnZXMocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyA/IG1lc3NhZ2VzIDogbnVsbClcbn1cblxuLyoqXG4gKiBSZXNldCBlcnJvciBsb2cgc3RhdGUgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seS5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2V0RXJyb3JMb2dGb3JUZXN0aW5nKCk6IHZvaWQge1xuICBlcnJvckxvZ1NpbmsgPSBudWxsXG4gIGVycm9yUXVldWUubGVuZ3RoID0gMFxuICBpbk1lbW9yeUVycm9yTG9nID0gW11cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQ2Esa0JBQ0EscUJBQ0Esa0JBSUEsZ0JBQ0EsaUJBQ0EsaUJBQ0EsMEJBQ0EsMEJBQ0EsMEJBR0Esc0JBU0EsVUFHQSx1QkFDQSxhQUNBLGlCQUNBLGVBQ0EsaUJBQ0EsWUFDQSxhQUVBLGNBQ0EsbUJBQ0EscUJBT0EsbUJBSUEsNEJBR0Esc0JBSUEsYUFPQSxzQkFHQSx1QkFHQSxrQkFHQTtBQXZFYjtBQUFBO0FBQ08sSUFBTSxtQkFBbUI7QUFDekIsSUFBTSxzQkFBc0I7QUFDNUIsSUFBTSxtQkFBbUI7QUFJekIsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSwyQkFBMkI7QUFDakMsSUFBTSwyQkFBMkI7QUFDakMsSUFBTSwyQkFBMkI7QUFHakMsSUFBTSx1QkFBdUI7QUFBQSxNQUNsQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVPLElBQU0sV0FBVztBQUdqQixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLGNBQWM7QUFDcEIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxhQUFhO0FBQ25CLElB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QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxZQUFXLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQUEsSUFDcEM7QUFHQSwwQkFBc0IsU0FBUztBQUcvQixRQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGlCQUFXLEtBQUssRUFBRSxNQUFNLFNBQVMsT0FBTyxJQUFJLENBQUM7QUFDN0M7QUFBQSxJQUNGO0FBRUEsaUJBQWEsU0FBUyxHQUFHO0FBQUEsRUFDM0IsUUFBUTtBQUFBLEVBRVI7QUFDRjtBQUVPLFNBQVMsb0JBQTREO0FBQzFFLFNBQU8sQ0FBQyxHQUFHLGdCQUFnQjtBQUM3QjtBQWlHTyxTQUFTLFlBQVksWUFBb0IsT0FBc0I7QUFDcEUsTUFBSTtBQUVGLFFBQUksaUJBQWlCLE1BQU07QUFDekIsaUJBQVcsS0FBSyxFQUFFLE1BQU0sWUFBWSxZQUFZLE1BQU0sQ0FBQztBQUN2RDtBQUFBLElBQ0Y7QUFFQSxpQkFBYSxZQUFZLFlBQVksS0FBSztBQUFBLEVBQzVDLFFBQVE7QUFBQSxFQUVSO0FBQ0Y7QUFFTyxTQUFTLFlBQVksWUFBb0IsU0FBdUI7QUFDckUsTUFBSTtBQUVGLFFBQUksaUJBQWlCLE1BQU07QUFDekIsaUJBQVcsS0FBSyxFQUFFLE1BQU0sWUFBWSxZQUFZLFFBQVEsQ0FBQztBQUN6RDtBQUFBLElBQ0Y7QUFFQSxpQkFBYSxZQUFZLFlBQVksT0FBTztBQUFBLEVBQzlDLFFBQVE7QUFBQSxFQUVSO0FBQ0Y7QUFLTyxTQUFTLGtCQUNkLFFBQ0EsYUFDTTtBQUdOLE1BQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxXQUFXLGtCQUFrQixHQUFHO0FBQy9EO0FBQUEsRUFDRjtBQUtBLFFBQU0sRUFBRSxVQUFVLEdBQUcsc0JBQXNCLElBQUk7QUFDL0Msb0JBQWtCLHFCQUFxQjtBQU12Qyw0QkFBMEIsUUFBUSxJQUFJLGNBQWMsUUFBUSxXQUFXLElBQUk7QUFDN0U7QUEvVkEsSUFpRU0sc0JBQ0Ysa0JBNkJFLFlBR0YsY0F1REU7QUF6Sk47QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0Q0EsSUFBTSx1QkFBdUI7QUFDN0IsSUFBSSxtQkFBZ0UsQ0FBQztBQTZCckUsSUFBTSxhQUFpQyxDQUFDO0FBR3hDLElBQUksZUFBb0M7QUF1RHhDLElBQU0saUJBQWlCLGdCQUFRLE1BQWU7QUFDNUMsYUFBTyxRQUFRLEtBQUssU0FBUyxhQUFhO0FBQUEsSUFDNUMsQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInByb2Nlc3MiXQp9Cg==
