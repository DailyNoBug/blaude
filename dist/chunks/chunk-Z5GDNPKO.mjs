#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  clearMemoryFileCaches,
  getRetryDelay,
  init_claudemd,
  init_withRetry
} from "./chunk-OPLSBIOC.mjs";
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getAPIProvider,
  getClaudeAIOAuthTokens,
  getClaudeCodeUserAgent,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getMemoryPath,
  getSettingsFilePathForSource,
  init_auth,
  init_config2 as init_config,
  init_growthbook,
  init_internalWrites,
  init_pickBy,
  init_providers,
  init_settings2 as init_settings,
  init_userAgent,
  isFirstPartyAnthropicBaseUrl,
  markInternalWrite,
  pickBy_default
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  CLAUDE_AI_INFERENCE_SCOPE,
  OAUTH_BETA_HEADER,
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  getRepoRemoteHash,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import {
  classifyAxiosError,
  init_errors
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getIsInteractive,
  init_settingsCache,
  init_state,
  resetSettingsCache
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/settingsSync/types.ts
var UserSyncContentSchema, UserSyncDataSchema, SYNC_KEYS;
var init_types = __esm({
  "src/services/settingsSync/types.ts"() {
    init_v4();
    init_lazySchema();
    UserSyncContentSchema = lazySchema(
      () => external_exports.object({
        entries: external_exports.record(external_exports.string(), external_exports.string())
      })
    );
    UserSyncDataSchema = lazySchema(
      () => external_exports.object({
        userId: external_exports.string(),
        version: external_exports.number(),
        lastModified: external_exports.string(),
        // ISO 8601 timestamp
        checksum: external_exports.string(),
        // MD5 hash
        content: UserSyncContentSchema()
      })
    );
    SYNC_KEYS = {
      USER_SETTINGS: "~/.claude/settings.json",
      USER_MEMORY: "~/.claude/CLAUDE.md",
      projectSettings: (projectId) => `projects/${projectId}/.claude/settings.local.json`,
      projectMemory: (projectId) => `projects/${projectId}/CLAUDE.local.md`
    };
  }
});

// src/services/settingsSync/index.ts
import { mkdir, readFile, stat, writeFile } from "fs/promises";
import { dirname } from "path";
async function uploadUserSettingsInBackground() {
  try {
    if (!feature("UPLOAD_USER_SETTINGS") || !getFeatureValue_CACHED_MAY_BE_STALE(
      "tengu_enable_settings_sync_push",
      false
    ) || !getIsInteractive() || !isUsingOAuth()) {
      logForDiagnosticsNoPII("info", "settings_sync_upload_skipped");
      logEvent("tengu_settings_sync_upload_skipped_ineligible", {});
      return;
    }
    logForDiagnosticsNoPII("info", "settings_sync_upload_starting");
    const result = await fetchUserSettings();
    if (!result.success) {
      logForDiagnosticsNoPII("warn", "settings_sync_upload_fetch_failed");
      logEvent("tengu_settings_sync_upload_fetch_failed", {});
      return;
    }
    const projectId = await getRepoRemoteHash();
    const localEntries = await buildEntriesFromLocalFiles(projectId);
    const remoteEntries = result.isEmpty ? {} : result.data.content.entries;
    const changedEntries = pickBy_default(
      localEntries,
      (value, key) => remoteEntries[key] !== value
    );
    const entryCount = Object.keys(changedEntries).length;
    if (entryCount === 0) {
      logForDiagnosticsNoPII("info", "settings_sync_upload_no_changes");
      logEvent("tengu_settings_sync_upload_skipped", {});
      return;
    }
    const uploadResult = await uploadUserSettings(changedEntries);
    if (uploadResult.success) {
      logForDiagnosticsNoPII("info", "settings_sync_upload_success");
      logEvent("tengu_settings_sync_upload_success", { entryCount });
    } else {
      logForDiagnosticsNoPII("warn", "settings_sync_upload_failed");
      logEvent("tengu_settings_sync_upload_failed", { entryCount });
    }
  } catch {
    logForDiagnosticsNoPII("error", "settings_sync_unexpected_error");
  }
}
function _resetDownloadPromiseForTesting() {
  downloadPromise = null;
}
function downloadUserSettings() {
  if (downloadPromise) {
    return downloadPromise;
  }
  downloadPromise = doDownloadUserSettings();
  return downloadPromise;
}
function redownloadUserSettings() {
  downloadPromise = doDownloadUserSettings(0);
  return downloadPromise;
}
async function doDownloadUserSettings(maxRetries = DEFAULT_MAX_RETRIES) {
  if (feature("DOWNLOAD_USER_SETTINGS")) {
    try {
      if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_strap_foyer", false) || !isUsingOAuth()) {
        logForDiagnosticsNoPII("info", "settings_sync_download_skipped");
        logEvent("tengu_settings_sync_download_skipped", {});
        return false;
      }
      logForDiagnosticsNoPII("info", "settings_sync_download_starting");
      const result = await fetchUserSettings(maxRetries);
      if (!result.success) {
        logForDiagnosticsNoPII("warn", "settings_sync_download_fetch_failed");
        logEvent("tengu_settings_sync_download_fetch_failed", {});
        return false;
      }
      if (result.isEmpty) {
        logForDiagnosticsNoPII("info", "settings_sync_download_empty");
        logEvent("tengu_settings_sync_download_empty", {});
        return false;
      }
      const entries = result.data.content.entries;
      const projectId = await getRepoRemoteHash();
      const entryCount = Object.keys(entries).length;
      logForDiagnosticsNoPII("info", "settings_sync_download_applying", {
        entryCount
      });
      await applyRemoteEntriesToLocal(entries, projectId);
      logEvent("tengu_settings_sync_download_success", { entryCount });
      return true;
    } catch {
      logForDiagnosticsNoPII("error", "settings_sync_download_error");
      logEvent("tengu_settings_sync_download_error", {});
      return false;
    }
  }
  return false;
}
function isUsingOAuth() {
  if (getAPIProvider() !== "firstParty" || !isFirstPartyAnthropicBaseUrl()) {
    return false;
  }
  const tokens = getClaudeAIOAuthTokens();
  return Boolean(
    tokens?.accessToken && tokens.scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE)
  );
}
function getSettingsSyncEndpoint() {
  return `${getOauthConfig().BASE_API_URL}/api/claude_code/user_settings`;
}
function getSettingsSyncAuthHeaders() {
  const oauthTokens = getClaudeAIOAuthTokens();
  if (oauthTokens?.accessToken) {
    return {
      headers: {
        Authorization: `Bearer ${oauthTokens.accessToken}`,
        "anthropic-beta": OAUTH_BETA_HEADER
      }
    };
  }
  return {
    headers: {},
    error: "No OAuth token available"
  };
}
async function fetchUserSettingsOnce() {
  try {
    await checkAndRefreshOAuthTokenIfNeeded();
    const authHeaders = getSettingsSyncAuthHeaders();
    if (authHeaders.error) {
      return {
        success: false,
        error: authHeaders.error,
        skipRetry: true
      };
    }
    const headers = {
      ...authHeaders.headers,
      "User-Agent": getClaudeCodeUserAgent()
    };
    const endpoint = getSettingsSyncEndpoint();
    const response = await axios_default.get(endpoint, {
      headers,
      timeout: SETTINGS_SYNC_TIMEOUT_MS,
      validateStatus: (status) => status === 200 || status === 404
    });
    if (response.status === 404) {
      logForDiagnosticsNoPII("info", "settings_sync_fetch_empty");
      return {
        success: true,
        isEmpty: true
      };
    }
    const parsed = UserSyncDataSchema().safeParse(response.data);
    if (!parsed.success) {
      logForDiagnosticsNoPII("warn", "settings_sync_fetch_invalid_format");
      return {
        success: false,
        error: "Invalid settings sync response format"
      };
    }
    logForDiagnosticsNoPII("info", "settings_sync_fetch_success");
    return {
      success: true,
      data: parsed.data,
      isEmpty: false
    };
  } catch (error) {
    const { kind, message } = classifyAxiosError(error);
    switch (kind) {
      case "auth":
        return {
          success: false,
          error: "Not authorized for settings sync",
          skipRetry: true
        };
      case "timeout":
        return { success: false, error: "Settings sync request timeout" };
      case "network":
        return { success: false, error: "Cannot connect to server" };
      default:
        return { success: false, error: message };
    }
  }
}
async function fetchUserSettings(maxRetries = DEFAULT_MAX_RETRIES) {
  let lastResult = null;
  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    lastResult = await fetchUserSettingsOnce();
    if (lastResult.success) {
      return lastResult;
    }
    if (lastResult.skipRetry) {
      return lastResult;
    }
    if (attempt > maxRetries) {
      return lastResult;
    }
    const delayMs = getRetryDelay(attempt);
    logForDiagnosticsNoPII("info", "settings_sync_retry", {
      attempt,
      maxRetries,
      delayMs
    });
    await sleep(delayMs);
  }
  return lastResult;
}
async function uploadUserSettings(entries) {
  try {
    await checkAndRefreshOAuthTokenIfNeeded();
    const authHeaders = getSettingsSyncAuthHeaders();
    if (authHeaders.error) {
      return {
        success: false,
        error: authHeaders.error
      };
    }
    const headers = {
      ...authHeaders.headers,
      "User-Agent": getClaudeCodeUserAgent(),
      "Content-Type": "application/json"
    };
    const endpoint = getSettingsSyncEndpoint();
    const response = await axios_default.put(
      endpoint,
      { entries },
      {
        headers,
        timeout: SETTINGS_SYNC_TIMEOUT_MS
      }
    );
    logForDiagnosticsNoPII("info", "settings_sync_uploaded", {
      entryCount: Object.keys(entries).length
    });
    return {
      success: true,
      checksum: response.data?.checksum,
      lastModified: response.data?.lastModified
    };
  } catch (error) {
    logForDiagnosticsNoPII("warn", "settings_sync_upload_error");
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}
async function tryReadFileForSync(filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.size > MAX_FILE_SIZE_BYTES) {
      logForDiagnosticsNoPII("info", "settings_sync_file_too_large");
      return null;
    }
    const content = await readFile(filePath, "utf8");
    if (!content || /^\s*$/.test(content)) {
      return null;
    }
    return content;
  } catch {
    return null;
  }
}
async function buildEntriesFromLocalFiles(projectId) {
  const entries = {};
  const userSettingsPath = getSettingsFilePathForSource("userSettings");
  if (userSettingsPath) {
    const content = await tryReadFileForSync(userSettingsPath);
    if (content) {
      entries[SYNC_KEYS.USER_SETTINGS] = content;
    }
  }
  const userMemoryPath = getMemoryPath("User");
  const userMemoryContent = await tryReadFileForSync(userMemoryPath);
  if (userMemoryContent) {
    entries[SYNC_KEYS.USER_MEMORY] = userMemoryContent;
  }
  if (projectId) {
    const localSettingsPath = getSettingsFilePathForSource("localSettings");
    if (localSettingsPath) {
      const content = await tryReadFileForSync(localSettingsPath);
      if (content) {
        entries[SYNC_KEYS.projectSettings(projectId)] = content;
      }
    }
    const localMemoryPath = getMemoryPath("Local");
    const localMemoryContent = await tryReadFileForSync(localMemoryPath);
    if (localMemoryContent) {
      entries[SYNC_KEYS.projectMemory(projectId)] = localMemoryContent;
    }
  }
  return entries;
}
async function writeFileForSync(filePath, content) {
  try {
    const parentDir = dirname(filePath);
    if (parentDir) {
      await mkdir(parentDir, { recursive: true });
    }
    await writeFile(filePath, content, "utf8");
    logForDiagnosticsNoPII("info", "settings_sync_file_written");
    return true;
  } catch {
    logForDiagnosticsNoPII("warn", "settings_sync_file_write_failed");
    return false;
  }
}
async function applyRemoteEntriesToLocal(entries, projectId) {
  let appliedCount = 0;
  let settingsWritten = false;
  let memoryWritten = false;
  const exceedsSizeLimit = (content, _path) => {
    const sizeBytes = Buffer.byteLength(content, "utf8");
    if (sizeBytes > MAX_FILE_SIZE_BYTES) {
      logForDiagnosticsNoPII("info", "settings_sync_file_too_large", {
        sizeBytes,
        maxBytes: MAX_FILE_SIZE_BYTES
      });
      return true;
    }
    return false;
  };
  const userSettingsContent = entries[SYNC_KEYS.USER_SETTINGS];
  if (userSettingsContent) {
    const userSettingsPath = getSettingsFilePathForSource("userSettings");
    if (userSettingsPath && !exceedsSizeLimit(userSettingsContent, userSettingsPath)) {
      markInternalWrite(userSettingsPath);
      if (await writeFileForSync(userSettingsPath, userSettingsContent)) {
        appliedCount++;
        settingsWritten = true;
      }
    }
  }
  const userMemoryContent = entries[SYNC_KEYS.USER_MEMORY];
  if (userMemoryContent) {
    const userMemoryPath = getMemoryPath("User");
    if (!exceedsSizeLimit(userMemoryContent, userMemoryPath)) {
      if (await writeFileForSync(userMemoryPath, userMemoryContent)) {
        appliedCount++;
        memoryWritten = true;
      }
    }
  }
  if (projectId) {
    const projectSettingsKey = SYNC_KEYS.projectSettings(projectId);
    const projectSettingsContent = entries[projectSettingsKey];
    if (projectSettingsContent) {
      const localSettingsPath = getSettingsFilePathForSource("localSettings");
      if (localSettingsPath && !exceedsSizeLimit(projectSettingsContent, localSettingsPath)) {
        markInternalWrite(localSettingsPath);
        if (await writeFileForSync(localSettingsPath, projectSettingsContent)) {
          appliedCount++;
          settingsWritten = true;
        }
      }
    }
    const projectMemoryKey = SYNC_KEYS.projectMemory(projectId);
    const projectMemoryContent = entries[projectMemoryKey];
    if (projectMemoryContent) {
      const localMemoryPath = getMemoryPath("Local");
      if (!exceedsSizeLimit(projectMemoryContent, localMemoryPath)) {
        if (await writeFileForSync(localMemoryPath, projectMemoryContent)) {
          appliedCount++;
          memoryWritten = true;
        }
      }
    }
  }
  if (settingsWritten) {
    resetSettingsCache();
  }
  if (memoryWritten) {
    clearMemoryFileCaches();
  }
  logForDiagnosticsNoPII("info", "settings_sync_applied", {
    appliedCount
  });
}
var SETTINGS_SYNC_TIMEOUT_MS, DEFAULT_MAX_RETRIES, MAX_FILE_SIZE_BYTES, downloadPromise;
var init_settingsSync = __esm({
  "src/services/settingsSync/index.ts"() {
    init_bun_bundle();
    init_axios();
    init_pickBy();
    init_state();
    init_oauth();
    init_auth();
    init_claudemd();
    init_config();
    init_diagLogs();
    init_errors();
    init_git();
    init_providers();
    init_internalWrites();
    init_settings();
    init_settingsCache();
    init_sleep();
    init_userAgent();
    init_growthbook();
    init_analytics();
    init_withRetry();
    init_types();
    SETTINGS_SYNC_TIMEOUT_MS = 1e4;
    DEFAULT_MAX_RETRIES = 3;
    MAX_FILE_SIZE_BYTES = 500 * 1024;
    downloadPromise = null;
  }
});

export {
  uploadUserSettingsInBackground,
  _resetDownloadPromiseForTesting,
  downloadUserSettings,
  redownloadUserSettings,
  init_settingsSync
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3NldHRpbmdzU3luYy90eXBlcy50cyIsICIuLi8uLi9zcmMvc2VydmljZXMvc2V0dGluZ3NTeW5jL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFNldHRpbmdzIFN5bmMgVHlwZXNcbiAqXG4gKiBab2Qgc2NoZW1hcyBhbmQgdHlwZXMgZm9yIHRoZSB1c2VyIHNldHRpbmdzIHN5bmMgQVBJLlxuICogQmFzZWQgb24gdGhlIGJhY2tlbmQgQVBJIGNvbnRyYWN0IGZyb20gYW50aHJvcGljL2FudGhyb3BpYyMyMTg4MTcuXG4gKi9cblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGxhenlTY2hlbWEgfSBmcm9tICcuLi8uLi91dGlscy9sYXp5U2NoZW1hLmpzJ1xuXG4vKipcbiAqIENvbnRlbnQgcG9ydGlvbiBvZiB1c2VyIHN5bmMgZGF0YSAtIGZsYXQga2V5LXZhbHVlIHN0b3JhZ2UuXG4gKiBLZXlzIGFyZSBvcGFxdWUgc3RyaW5ncyAodHlwaWNhbGx5IGZpbGUgcGF0aHMpLlxuICogVmFsdWVzIGFyZSBVVEYtOCBzdHJpbmcgY29udGVudCAoSlNPTiwgTWFya2Rvd24sIGV0YykuXG4gKi9cbmV4cG9ydCBjb25zdCBVc2VyU3luY0NvbnRlbnRTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHtcbiAgICBlbnRyaWVzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LnN0cmluZygpKSxcbiAgfSksXG4pXG5cbi8qKlxuICogRnVsbCByZXNwb25zZSBmcm9tIEdFVCAvYXBpL2NsYXVkZV9jb2RlL3VzZXJfc2V0dGluZ3NcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJTeW5jRGF0YVNjaGVtYSA9IGxhenlTY2hlbWEoKCkgPT5cbiAgei5vYmplY3Qoe1xuICAgIHVzZXJJZDogei5zdHJpbmcoKSxcbiAgICB2ZXJzaW9uOiB6Lm51bWJlcigpLFxuICAgIGxhc3RNb2RpZmllZDogei5zdHJpbmcoKSwgLy8gSVNPIDg2MDEgdGltZXN0YW1wXG4gICAgY2hlY2tzdW06IHouc3RyaW5nKCksIC8vIE1ENSBoYXNoXG4gICAgY29udGVudDogVXNlclN5bmNDb250ZW50U2NoZW1hKCksXG4gIH0pLFxuKVxuXG5leHBvcnQgdHlwZSBVc2VyU3luY0RhdGEgPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIFVzZXJTeW5jRGF0YVNjaGVtYT4+XG5cbi8qKlxuICogUmVzdWx0IGZyb20gZmV0Y2hpbmcgdXNlciBzZXR0aW5nc1xuICovXG5leHBvcnQgdHlwZSBTZXR0aW5nc1N5bmNGZXRjaFJlc3VsdCA9IHtcbiAgc3VjY2VzczogYm9vbGVhblxuICBkYXRhPzogVXNlclN5bmNEYXRhXG4gIGlzRW1wdHk/OiBib29sZWFuIC8vIHRydWUgaWYgNDA0IChubyBkYXRhIGV4aXN0cylcbiAgZXJyb3I/OiBzdHJpbmdcbiAgc2tpcFJldHJ5PzogYm9vbGVhblxufVxuXG4vKipcbiAqIFJlc3VsdCBmcm9tIHVwbG9hZGluZyB1c2VyIHNldHRpbmdzXG4gKi9cbmV4cG9ydCB0eXBlIFNldHRpbmdzU3luY1VwbG9hZFJlc3VsdCA9IHtcbiAgc3VjY2VzczogYm9vbGVhblxuICBjaGVja3N1bT86IHN0cmluZ1xuICBsYXN0TW9kaWZpZWQ/OiBzdHJpbmdcbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBLZXlzIHVzZWQgZm9yIHN5bmMgZW50cmllc1xuICovXG5leHBvcnQgY29uc3QgU1lOQ19LRVlTID0ge1xuICBVU0VSX1NFVFRJTkdTOiAnfi8uY2xhdWRlL3NldHRpbmdzLmpzb24nLFxuICBVU0VSX01FTU9SWTogJ34vLmNsYXVkZS9DTEFVREUubWQnLFxuICBwcm9qZWN0U2V0dGluZ3M6IChwcm9qZWN0SWQ6IHN0cmluZykgPT5cbiAgICBgcHJvamVjdHMvJHtwcm9qZWN0SWR9Ly5jbGF1ZGUvc2V0dGluZ3MubG9jYWwuanNvbmAsXG4gIHByb2plY3RNZW1vcnk6IChwcm9qZWN0SWQ6IHN0cmluZykgPT4gYHByb2plY3RzLyR7cHJvamVjdElkfS9DTEFVREUubG9jYWwubWRgLFxufSBhcyBjb25zdFxuIiwgIi8qKlxuICogU2V0dGluZ3MgU3luYyBTZXJ2aWNlXG4gKlxuICogU3luY3MgdXNlciBzZXR0aW5ncyBhbmQgbWVtb3J5IGZpbGVzIGFjcm9zcyBDbGF1ZGUgQ29kZSBlbnZpcm9ubWVudHMuXG4gKlxuICogLSBJbnRlcmFjdGl2ZSBDTEk6IFVwbG9hZHMgbG9jYWwgc2V0dGluZ3MgdG8gcmVtb3RlIChpbmNyZW1lbnRhbCwgb25seSBjaGFuZ2VkIGVudHJpZXMpXG4gKiAtIENDUjogRG93bmxvYWRzIHJlbW90ZSBzZXR0aW5ncyB0byBsb2NhbCBiZWZvcmUgcGx1Z2luIGluc3RhbGxhdGlvblxuICpcbiAqIEJhY2tlbmQgQVBJOiBhbnRocm9waWMvYW50aHJvcGljIzIxODgxN1xuICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgbWtkaXIsIHJlYWRGaWxlLCBzdGF0LCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCBwaWNrQnkgZnJvbSAnbG9kYXNoLWVzL3BpY2tCeS5qcydcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0SXNJbnRlcmFjdGl2ZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7XG4gIENMQVVERV9BSV9JTkZFUkVOQ0VfU0NPUEUsXG4gIGdldE9hdXRoQ29uZmlnLFxuICBPQVVUSF9CRVRBX0hFQURFUixcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL29hdXRoLmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkLFxuICBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zLFxufSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgY2xlYXJNZW1vcnlGaWxlQ2FjaGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBnZXRNZW1vcnlQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgY2xhc3NpZnlBeGlvc0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0UmVwb1JlbW90ZUhhc2ggfSBmcm9tICcuLi8uLi91dGlscy9naXQuanMnXG5pbXBvcnQge1xuICBnZXRBUElQcm92aWRlcixcbiAgaXNGaXJzdFBhcnR5QW50aHJvcGljQmFzZVVybCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvcHJvdmlkZXJzLmpzJ1xuaW1wb3J0IHsgbWFya0ludGVybmFsV3JpdGUgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9pbnRlcm5hbFdyaXRlcy5qcydcbmltcG9ydCB7IGdldFNldHRpbmdzRmlsZVBhdGhGb3JTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHJlc2V0U2V0dGluZ3NDYWNoZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzQ2FjaGUuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uLy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQ29kZVVzZXJBZ2VudCB9IGZyb20gJy4uLy4uL3V0aWxzL3VzZXJBZ2VudC5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGdldFJldHJ5RGVsYXkgfSBmcm9tICcuLi9hcGkvd2l0aFJldHJ5LmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBTZXR0aW5nc1N5bmNGZXRjaFJlc3VsdCxcbiAgdHlwZSBTZXR0aW5nc1N5bmNVcGxvYWRSZXN1bHQsXG4gIFNZTkNfS0VZUyxcbiAgVXNlclN5bmNEYXRhU2NoZW1hLFxufSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5jb25zdCBTRVRUSU5HU19TWU5DX1RJTUVPVVRfTVMgPSAxMDAwMCAvLyAxMCBzZWNvbmRzXG5jb25zdCBERUZBVUxUX01BWF9SRVRSSUVTID0gM1xuY29uc3QgTUFYX0ZJTEVfU0laRV9CWVRFUyA9IDUwMCAqIDEwMjQgLy8gNTAwIEtCIHBlciBmaWxlIChtYXRjaGVzIGJhY2tlbmQgbGltaXQpXG5cbi8qKlxuICogVXBsb2FkIGxvY2FsIHNldHRpbmdzIHRvIHJlbW90ZSAoaW50ZXJhY3RpdmUgQ0xJIG9ubHkpLlxuICogQ2FsbGVkIGZyb20gbWFpbi50c3ggcHJlQWN0aW9uLlxuICogUnVucyBpbiBiYWNrZ3JvdW5kIC0gY2FsbGVyIHNob3VsZCBub3QgYXdhaXQgdW5sZXNzIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFVzZXJTZXR0aW5nc0luQmFja2dyb3VuZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICAhZmVhdHVyZSgnVVBMT0FEX1VTRVJfU0VUVElOR1MnKSB8fFxuICAgICAgIWdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKFxuICAgICAgICAndGVuZ3VfZW5hYmxlX3NldHRpbmdzX3N5bmNfcHVzaCcsXG4gICAgICAgIGZhbHNlLFxuICAgICAgKSB8fFxuICAgICAgIWdldElzSW50ZXJhY3RpdmUoKSB8fFxuICAgICAgIWlzVXNpbmdPQXV0aCgpXG4gICAgKSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfdXBsb2FkX3NraXBwZWQnKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHRpbmdzX3N5bmNfdXBsb2FkX3NraXBwZWRfaW5lbGlnaWJsZScsIHt9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX3VwbG9hZF9zdGFydGluZycpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hVc2VyU2V0dGluZ3MoKVxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnc2V0dGluZ3Nfc3luY191cGxvYWRfZmV0Y2hfZmFpbGVkJylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR0aW5nc19zeW5jX3VwbG9hZF9mZXRjaF9mYWlsZWQnLCB7fSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RJZCA9IGF3YWl0IGdldFJlcG9SZW1vdGVIYXNoKClcbiAgICBjb25zdCBsb2NhbEVudHJpZXMgPSBhd2FpdCBidWlsZEVudHJpZXNGcm9tTG9jYWxGaWxlcyhwcm9qZWN0SWQpXG4gICAgY29uc3QgcmVtb3RlRW50cmllcyA9IHJlc3VsdC5pc0VtcHR5ID8ge30gOiByZXN1bHQuZGF0YSEuY29udGVudC5lbnRyaWVzXG4gICAgY29uc3QgY2hhbmdlZEVudHJpZXMgPSBwaWNrQnkoXG4gICAgICBsb2NhbEVudHJpZXMsXG4gICAgICAodmFsdWUsIGtleSkgPT4gcmVtb3RlRW50cmllc1trZXldICE9PSB2YWx1ZSxcbiAgICApXG5cbiAgICBjb25zdCBlbnRyeUNvdW50ID0gT2JqZWN0LmtleXMoY2hhbmdlZEVudHJpZXMpLmxlbmd0aFxuICAgIGlmIChlbnRyeUNvdW50ID09PSAwKSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfdXBsb2FkX25vX2NoYW5nZXMnKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHRpbmdzX3N5bmNfdXBsb2FkX3NraXBwZWQnLCB7fSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHVwbG9hZFJlc3VsdCA9IGF3YWl0IHVwbG9hZFVzZXJTZXR0aW5ncyhjaGFuZ2VkRW50cmllcylcbiAgICBpZiAodXBsb2FkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dGluZ3Nfc3luY191cGxvYWRfc3VjY2VzcycpXG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dGluZ3Nfc3luY191cGxvYWRfc3VjY2VzcycsIHsgZW50cnlDb3VudCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ3NldHRpbmdzX3N5bmNfdXBsb2FkX2ZhaWxlZCcpXG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dGluZ3Nfc3luY191cGxvYWRfZmFpbGVkJywgeyBlbnRyeUNvdW50IH0pXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBGYWlsLW9wZW46IGxvZyB1bmV4cGVjdGVkIGVycm9ycyBidXQgZG9uJ3QgYmxvY2sgc3RhcnR1cFxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ3NldHRpbmdzX3N5bmNfdW5leHBlY3RlZF9lcnJvcicpXG4gIH1cbn1cblxuLy8gQ2FjaGVkIHNvIHRoZSBmaXJlLWFuZC1mb3JnZXQgYXQgcnVuSGVhZGxlc3MgZW50cnkgYW5kIHRoZSBhd2FpdCBpblxuLy8gaW5zdGFsbFBsdWdpbnNBbmRBcHBseU1jcEluQmFja2dyb3VuZCBzaGFyZSBvbmUgZmV0Y2guXG5sZXQgZG93bmxvYWRQcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+IHwgbnVsbCA9IG51bGxcblxuLyoqIFRlc3Qtb25seTogY2xlYXIgdGhlIGNhY2hlZCBkb3dubG9hZCBwcm9taXNlIGJldHdlZW4gdGVzdHMuICovXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2V0RG93bmxvYWRQcm9taXNlRm9yVGVzdGluZygpOiB2b2lkIHtcbiAgZG93bmxvYWRQcm9taXNlID0gbnVsbFxufVxuXG4vKipcbiAqIERvd25sb2FkIHNldHRpbmdzIGZyb20gcmVtb3RlIGZvciBDQ1IgbW9kZS5cbiAqIEZpcmVkIGZpcmUtYW5kLWZvcmdldCBhdCB0aGUgdG9wIG9mIHByaW50LnRzIHJ1bkhlYWRsZXNzKCk7IGF3YWl0ZWQgaW5cbiAqIGluc3RhbGxQbHVnaW5zQW5kQXBwbHlNY3BJbkJhY2tncm91bmQgYmVmb3JlIHBsdWdpbiBpbnN0YWxsLiBGaXJzdCBjYWxsXG4gKiBzdGFydHMgdGhlIGZldGNoOyBzdWJzZXF1ZW50IGNhbGxzIGpvaW4gaXQuXG4gKiBSZXR1cm5zIHRydWUgaWYgc2V0dGluZ3Mgd2VyZSBhcHBsaWVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZFVzZXJTZXR0aW5ncygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgaWYgKGRvd25sb2FkUHJvbWlzZSkge1xuICAgIHJldHVybiBkb3dubG9hZFByb21pc2VcbiAgfVxuICBkb3dubG9hZFByb21pc2UgPSBkb0Rvd25sb2FkVXNlclNldHRpbmdzKClcbiAgcmV0dXJuIGRvd25sb2FkUHJvbWlzZVxufVxuXG4vKipcbiAqIEZvcmNlIGEgZnJlc2ggZG93bmxvYWQsIGJ5cGFzc2luZyB0aGUgY2FjaGVkIHN0YXJ0dXAgcHJvbWlzZS5cbiAqIENhbGxlZCBieSAvcmVsb2FkLXBsdWdpbnMgaW4gQ0NSIHNvIG1pZC1zZXNzaW9uIHNldHRpbmdzIGNoYW5nZXNcbiAqIChlbmFibGVkUGx1Z2lucywgZXh0cmFLbm93bk1hcmtldHBsYWNlcykgcHVzaGVkIGZyb20gdGhlIHVzZXIncyBsb2NhbFxuICogQ0xJIGFyZSBwaWNrZWQgdXAgYmVmb3JlIHRoZSBwbHVnaW4tY2FjaGUgc3dlZXAuXG4gKlxuICogTm8gcmV0cmllczogdXNlci1pbml0aWF0ZWQgY29tbWFuZCwgb25lIGF0dGVtcHQgKyBmYWlsLW9wZW4uIFRoZSB1c2VyXG4gKiBjYW4gcmUtcnVuIC9yZWxvYWQtcGx1Z2lucyB0byByZXRyeS4gU3RhcnR1cCBwYXRoIGtlZXBzIERFRkFVTFRfTUFYX1JFVFJJRVMuXG4gKlxuICogQ2FsbGVyIGlzIHJlc3BvbnNpYmxlIGZvciBmaXJpbmcgc2V0dGluZ3NDaGFuZ2VEZXRlY3Rvci5ub3RpZnlDaGFuZ2VcbiAqIHdoZW4gdGhpcyByZXR1cm5zIHRydWUgXHUyMDE0IGFwcGx5UmVtb3RlRW50cmllc1RvTG9jYWwgdXNlcyBtYXJrSW50ZXJuYWxXcml0ZVxuICogdG8gc3VwcHJlc3MgZGV0ZWN0aW9uIChjb3JyZWN0IGZvciBzdGFydHVwLCBidXQgbWlkLXNlc3Npb24gbmVlZHNcbiAqIGFwcGx5U2V0dGluZ3NDaGFuZ2UgdG8gcnVuKS4gS2VwdCBvdXQgb2YgdGhpcyBtb2R1bGUgdG8gYXZvaWQgdGhlXG4gKiBzZXR0aW5nc1N5bmMgXHUyMTkyIGNoYW5nZURldGVjdG9yIGN5Y2xlIGVkZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWRvd25sb2FkVXNlclNldHRpbmdzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBkb3dubG9hZFByb21pc2UgPSBkb0Rvd25sb2FkVXNlclNldHRpbmdzKDApXG4gIHJldHVybiBkb3dubG9hZFByb21pc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gZG9Eb3dubG9hZFVzZXJTZXR0aW5ncyhcbiAgbWF4UmV0cmllcyA9IERFRkFVTFRfTUFYX1JFVFJJRVMsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgaWYgKGZlYXR1cmUoJ0RPV05MT0FEX1VTRVJfU0VUVElOR1MnKSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoXG4gICAgICAgICFnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgndGVuZ3Vfc3RyYXBfZm95ZXInLCBmYWxzZSkgfHxcbiAgICAgICAgIWlzVXNpbmdPQXV0aCgpXG4gICAgICApIHtcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX2Rvd25sb2FkX3NraXBwZWQnKVxuICAgICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dGluZ3Nfc3luY19kb3dubG9hZF9za2lwcGVkJywge30pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfZG93bmxvYWRfc3RhcnRpbmcnKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hVc2VyU2V0dGluZ3MobWF4UmV0cmllcylcbiAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdzZXR0aW5nc19zeW5jX2Rvd25sb2FkX2ZldGNoX2ZhaWxlZCcpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR0aW5nc19zeW5jX2Rvd25sb2FkX2ZldGNoX2ZhaWxlZCcsIHt9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5pc0VtcHR5KSB7XG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dGluZ3Nfc3luY19kb3dubG9hZF9lbXB0eScpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR0aW5nc19zeW5jX2Rvd25sb2FkX2VtcHR5Jywge30pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbnRyaWVzID0gcmVzdWx0LmRhdGEhLmNvbnRlbnQuZW50cmllc1xuICAgICAgY29uc3QgcHJvamVjdElkID0gYXdhaXQgZ2V0UmVwb1JlbW90ZUhhc2goKVxuICAgICAgY29uc3QgZW50cnlDb3VudCA9IE9iamVjdC5rZXlzKGVudHJpZXMpLmxlbmd0aFxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX2Rvd25sb2FkX2FwcGx5aW5nJywge1xuICAgICAgICBlbnRyeUNvdW50LFxuICAgICAgfSlcbiAgICAgIGF3YWl0IGFwcGx5UmVtb3RlRW50cmllc1RvTG9jYWwoZW50cmllcywgcHJvamVjdElkKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHRpbmdzX3N5bmNfZG93bmxvYWRfc3VjY2VzcycsIHsgZW50cnlDb3VudCB9KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZhaWwtb3BlbjogbG9nIGVycm9yIGJ1dCBkb24ndCBibG9jayBDQ1Igc3RhcnR1cFxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnc2V0dGluZ3Nfc3luY19kb3dubG9hZF9lcnJvcicpXG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dGluZ3Nfc3luY19kb3dubG9hZF9lcnJvcicsIHt9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCB3aXRoIGZpcnN0LXBhcnR5IE9BdXRoLlxuICogUmVxdWlyZWQgZm9yIHNldHRpbmdzIHN5bmMgaW4gYm90aCBDTEkgKHVwbG9hZCkgYW5kIENDUiAoZG93bmxvYWQpIG1vZGVzLlxuICpcbiAqIE9ubHkgY2hlY2tzIHVzZXI6aW5mZXJlbmNlIChub3QgdXNlcjpwcm9maWxlKSBcdTIwMTQgQ0NSJ3MgZmlsZS1kZXNjcmlwdG9yIHRva2VuXG4gKiBoYXJkY29kZXMgc2NvcGVzIHRvIFsndXNlcjppbmZlcmVuY2UnXSBvbmx5LCBzbyByZXF1aXJpbmcgcHJvZmlsZSB3b3VsZCBtYWtlXG4gKiBkb3dubG9hZCBhIG5vLW9wIHRoZXJlLiBVcGxvYWQgaXMgaW5kZXBlbmRlbnRseSBndWFyZGVkIGJ5IGdldElzSW50ZXJhY3RpdmUoKS5cbiAqL1xuZnVuY3Rpb24gaXNVc2luZ09BdXRoKCk6IGJvb2xlYW4ge1xuICBpZiAoZ2V0QVBJUHJvdmlkZXIoKSAhPT0gJ2ZpcnN0UGFydHknIHx8ICFpc0ZpcnN0UGFydHlBbnRocm9waWNCYXNlVXJsKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHRva2VucyA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKVxuICByZXR1cm4gQm9vbGVhbihcbiAgICB0b2tlbnM/LmFjY2Vzc1Rva2VuICYmIHRva2Vucy5zY29wZXM/LmluY2x1ZGVzKENMQVVERV9BSV9JTkZFUkVOQ0VfU0NPUEUpLFxuICApXG59XG5cbmZ1bmN0aW9uIGdldFNldHRpbmdzU3luY0VuZHBvaW50KCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vYXBpL2NsYXVkZV9jb2RlL3VzZXJfc2V0dGluZ3NgXG59XG5cbmZ1bmN0aW9uIGdldFNldHRpbmdzU3luY0F1dGhIZWFkZXJzKCk6IHtcbiAgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBlcnJvcj86IHN0cmluZ1xufSB7XG4gIGNvbnN0IG9hdXRoVG9rZW5zID0gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpXG4gIGlmIChvYXV0aFRva2Vucz8uYWNjZXNzVG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7b2F1dGhUb2tlbnMuYWNjZXNzVG9rZW59YCxcbiAgICAgICAgJ2FudGhyb3BpYy1iZXRhJzogT0FVVEhfQkVUQV9IRUFERVIsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyczoge30sXG4gICAgZXJyb3I6ICdObyBPQXV0aCB0b2tlbiBhdmFpbGFibGUnLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlclNldHRpbmdzT25jZSgpOiBQcm9taXNlPFNldHRpbmdzU3luY0ZldGNoUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkKClcblxuICAgIGNvbnN0IGF1dGhIZWFkZXJzID0gZ2V0U2V0dGluZ3NTeW5jQXV0aEhlYWRlcnMoKVxuICAgIGlmIChhdXRoSGVhZGVycy5lcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhdXRoSGVhZGVycy5lcnJvcixcbiAgICAgICAgc2tpcFJldHJ5OiB0cnVlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAuLi5hdXRoSGVhZGVycy5oZWFkZXJzLFxuICAgICAgJ1VzZXItQWdlbnQnOiBnZXRDbGF1ZGVDb2RlVXNlckFnZW50KCksXG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnQgPSBnZXRTZXR0aW5nc1N5bmNFbmRwb2ludCgpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoZW5kcG9pbnQsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICB0aW1lb3V0OiBTRVRUSU5HU19TWU5DX1RJTUVPVVRfTVMsXG4gICAgICB2YWxpZGF0ZVN0YXR1czogc3RhdHVzID0+IHN0YXR1cyA9PT0gMjAwIHx8IHN0YXR1cyA9PT0gNDA0LFxuICAgIH0pXG5cbiAgICAvLyA0MDQgbWVhbnMgbm8gc2V0dGluZ3MgZXhpc3QgeWV0XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfZmV0Y2hfZW1wdHknKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgaXNFbXB0eTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSBVc2VyU3luY0RhdGFTY2hlbWEoKS5zYWZlUGFyc2UocmVzcG9uc2UuZGF0YSlcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ3NldHRpbmdzX3N5bmNfZmV0Y2hfaW52YWxpZF9mb3JtYXQnKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiAnSW52YWxpZCBzZXR0aW5ncyBzeW5jIHJlc3BvbnNlIGZvcm1hdCcsXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX2ZldGNoX3N1Y2Nlc3MnKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogcGFyc2VkLmRhdGEsXG4gICAgICBpc0VtcHR5OiBmYWxzZSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgeyBraW5kLCBtZXNzYWdlIH0gPSBjbGFzc2lmeUF4aW9zRXJyb3IoZXJyb3IpXG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlICdhdXRoJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogJ05vdCBhdXRob3JpemVkIGZvciBzZXR0aW5ncyBzeW5jJyxcbiAgICAgICAgICBza2lwUmV0cnk6IHRydWUsXG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3RpbWVvdXQnOlxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXR0aW5ncyBzeW5jIHJlcXVlc3QgdGltZW91dCcgfVxuICAgICAgY2FzZSAnbmV0d29yayc6XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBjb25uZWN0IHRvIHNlcnZlcicgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH1cbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyU2V0dGluZ3MoXG4gIG1heFJldHJpZXMgPSBERUZBVUxUX01BWF9SRVRSSUVTLFxuKTogUHJvbWlzZTxTZXR0aW5nc1N5bmNGZXRjaFJlc3VsdD4ge1xuICBsZXQgbGFzdFJlc3VsdDogU2V0dGluZ3NTeW5jRmV0Y2hSZXN1bHQgfCBudWxsID0gbnVsbFxuXG4gIGZvciAobGV0IGF0dGVtcHQgPSAxOyBhdHRlbXB0IDw9IG1heFJldHJpZXMgKyAxOyBhdHRlbXB0KyspIHtcbiAgICBsYXN0UmVzdWx0ID0gYXdhaXQgZmV0Y2hVc2VyU2V0dGluZ3NPbmNlKClcblxuICAgIGlmIChsYXN0UmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgaWYgKGxhc3RSZXN1bHQuc2tpcFJldHJ5KSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGlmIChhdHRlbXB0ID4gbWF4UmV0cmllcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheU1zID0gZ2V0UmV0cnlEZWxheShhdHRlbXB0KVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dGluZ3Nfc3luY19yZXRyeScsIHtcbiAgICAgIGF0dGVtcHQsXG4gICAgICBtYXhSZXRyaWVzLFxuICAgICAgZGVsYXlNcyxcbiAgICB9KVxuICAgIGF3YWl0IHNsZWVwKGRlbGF5TXMpXG4gIH1cblxuICByZXR1cm4gbGFzdFJlc3VsdCFcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkVXNlclNldHRpbmdzKFxuICBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogUHJvbWlzZTxTZXR0aW5nc1N5bmNVcGxvYWRSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQoKVxuXG4gICAgY29uc3QgYXV0aEhlYWRlcnMgPSBnZXRTZXR0aW5nc1N5bmNBdXRoSGVhZGVycygpXG4gICAgaWYgKGF1dGhIZWFkZXJzLmVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGF1dGhIZWFkZXJzLmVycm9yLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAuLi5hdXRoSGVhZGVycy5oZWFkZXJzLFxuICAgICAgJ1VzZXItQWdlbnQnOiBnZXRDbGF1ZGVDb2RlVXNlckFnZW50KCksXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH1cblxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2V0dGluZ3NTeW5jRW5kcG9pbnQoKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KFxuICAgICAgZW5kcG9pbnQsXG4gICAgICB7IGVudHJpZXMgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgdGltZW91dDogU0VUVElOR1NfU1lOQ19USU1FT1VUX01TLFxuICAgICAgfSxcbiAgICApXG5cbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfdXBsb2FkZWQnLCB7XG4gICAgICBlbnRyeUNvdW50OiBPYmplY3Qua2V5cyhlbnRyaWVzKS5sZW5ndGgsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNoZWNrc3VtOiByZXNwb25zZS5kYXRhPy5jaGVja3N1bSxcbiAgICAgIGxhc3RNb2RpZmllZDogcmVzcG9uc2UuZGF0YT8ubGFzdE1vZGlmaWVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ3NldHRpbmdzX3N5bmNfdXBsb2FkX2Vycm9yJylcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcicsXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgYSBmaWxlIGZvciBzeW5jLCB3aXRoIHNpemUgbGltaXQgYW5kIGVycm9yIGhhbmRsaW5nLlxuICogUmV0dXJucyBudWxsIGlmIGZpbGUgZG9lc24ndCBleGlzdCwgaXMgZW1wdHksIG9yIGV4Y2VlZHMgc2l6ZSBsaW1pdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gdHJ5UmVhZEZpbGVGb3JTeW5jKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0cyA9IGF3YWl0IHN0YXQoZmlsZVBhdGgpXG4gICAgaWYgKHN0YXRzLnNpemUgPiBNQVhfRklMRV9TSVpFX0JZVEVTKSB7XG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ3NldHRpbmdzX3N5bmNfZmlsZV90b29fbGFyZ2UnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4JylcbiAgICAvLyBDaGVjayBmb3IgZW1wdHkvd2hpdGVzcGFjZS1vbmx5IHdpdGhvdXQgYWxsb2NhdGluZyBhIHRyaW1tZWQgY29weVxuICAgIGlmICghY29udGVudCB8fCAvXlxccyokLy50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYnVpbGRFbnRyaWVzRnJvbUxvY2FsRmlsZXMoXG4gIHByb2plY3RJZDogc3RyaW5nIHwgbnVsbCxcbik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4ge1xuICBjb25zdCBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cblxuICAvLyBHbG9iYWwgdXNlciBzZXR0aW5nc1xuICBjb25zdCB1c2VyU2V0dGluZ3NQYXRoID0gZ2V0U2V0dGluZ3NGaWxlUGF0aEZvclNvdXJjZSgndXNlclNldHRpbmdzJylcbiAgaWYgKHVzZXJTZXR0aW5nc1BhdGgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdHJ5UmVhZEZpbGVGb3JTeW5jKHVzZXJTZXR0aW5nc1BhdGgpXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGVudHJpZXNbU1lOQ19LRVlTLlVTRVJfU0VUVElOR1NdID0gY29udGVudFxuICAgIH1cbiAgfVxuXG4gIC8vIEdsb2JhbCB1c2VyIG1lbW9yeVxuICBjb25zdCB1c2VyTWVtb3J5UGF0aCA9IGdldE1lbW9yeVBhdGgoJ1VzZXInKVxuICBjb25zdCB1c2VyTWVtb3J5Q29udGVudCA9IGF3YWl0IHRyeVJlYWRGaWxlRm9yU3luYyh1c2VyTWVtb3J5UGF0aClcbiAgaWYgKHVzZXJNZW1vcnlDb250ZW50KSB7XG4gICAgZW50cmllc1tTWU5DX0tFWVMuVVNFUl9NRU1PUlldID0gdXNlck1lbW9yeUNvbnRlbnRcbiAgfVxuXG4gIC8vIFByb2plY3Qtc3BlY2lmaWMgZmlsZXMgKG9ubHkgaWYgd2UgaGF2ZSBhIHByb2plY3QgSUQgZnJvbSBnaXQgcmVtb3RlKVxuICBpZiAocHJvamVjdElkKSB7XG4gICAgLy8gUHJvamVjdCBsb2NhbCBzZXR0aW5nc1xuICAgIGNvbnN0IGxvY2FsU2V0dGluZ3NQYXRoID0gZ2V0U2V0dGluZ3NGaWxlUGF0aEZvclNvdXJjZSgnbG9jYWxTZXR0aW5ncycpXG4gICAgaWYgKGxvY2FsU2V0dGluZ3NQYXRoKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdHJ5UmVhZEZpbGVGb3JTeW5jKGxvY2FsU2V0dGluZ3NQYXRoKVxuICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgZW50cmllc1tTWU5DX0tFWVMucHJvamVjdFNldHRpbmdzKHByb2plY3RJZCldID0gY29udGVudFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2plY3QgbG9jYWwgbWVtb3J5XG4gICAgY29uc3QgbG9jYWxNZW1vcnlQYXRoID0gZ2V0TWVtb3J5UGF0aCgnTG9jYWwnKVxuICAgIGNvbnN0IGxvY2FsTWVtb3J5Q29udGVudCA9IGF3YWl0IHRyeVJlYWRGaWxlRm9yU3luYyhsb2NhbE1lbW9yeVBhdGgpXG4gICAgaWYgKGxvY2FsTWVtb3J5Q29udGVudCkge1xuICAgICAgZW50cmllc1tTWU5DX0tFWVMucHJvamVjdE1lbW9yeShwcm9qZWN0SWQpXSA9IGxvY2FsTWVtb3J5Q29udGVudFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlRmlsZUZvclN5bmMoXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcmVudERpciA9IGRpcm5hbWUoZmlsZVBhdGgpXG4gICAgaWYgKHBhcmVudERpcikge1xuICAgICAgYXdhaXQgbWtkaXIocGFyZW50RGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCwgJ3V0ZjgnKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnc2V0dGluZ3Nfc3luY19maWxlX3dyaXR0ZW4nKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnc2V0dGluZ3Nfc3luY19maWxlX3dyaXRlX2ZhaWxlZCcpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSByZW1vdGUgZW50cmllcyB0byBsb2NhbCBmaWxlcyAoQ0NSIHB1bGwgcGF0dGVybikuXG4gKiBPbmx5IHdyaXRlcyBmaWxlcyB0aGF0IG1hdGNoIGV4cGVjdGVkIGtleXMuXG4gKlxuICogQWZ0ZXIgd3JpdGluZywgaW52YWxpZGF0ZXMgcmVsZXZhbnQgY2FjaGVzOlxuICogLSByZXNldFNldHRpbmdzQ2FjaGUoKSBmb3Igc2V0dGluZ3MgZmlsZXNcbiAqIC0gY2xlYXJNZW1vcnlGaWxlQ2FjaGVzKCkgZm9yIG1lbW9yeSBmaWxlcyAoQ0xBVURFLm1kKVxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBseVJlbW90ZUVudHJpZXNUb0xvY2FsKFxuICBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICBwcm9qZWN0SWQ6IHN0cmluZyB8IG51bGwsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgbGV0IGFwcGxpZWRDb3VudCA9IDBcbiAgbGV0IHNldHRpbmdzV3JpdHRlbiA9IGZhbHNlXG4gIGxldCBtZW1vcnlXcml0dGVuID0gZmFsc2VcblxuICAvLyBIZWxwZXIgdG8gY2hlY2sgc2l6ZSBsaW1pdCAoZGVmZW5zZS1pbi1kZXB0aCwgbWF0Y2hlcyBiYWNrZW5kIGxpbWl0KVxuICBjb25zdCBleGNlZWRzU2l6ZUxpbWl0ID0gKGNvbnRlbnQ6IHN0cmluZywgX3BhdGg6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHNpemVCeXRlcyA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGNvbnRlbnQsICd1dGY4JylcbiAgICBpZiAoc2l6ZUJ5dGVzID4gTUFYX0ZJTEVfU0laRV9CWVRFUykge1xuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX2ZpbGVfdG9vX2xhcmdlJywge1xuICAgICAgICBzaXplQnl0ZXMsXG4gICAgICAgIG1heEJ5dGVzOiBNQVhfRklMRV9TSVpFX0JZVEVTLFxuICAgICAgfSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gQXBwbHkgZ2xvYmFsIHVzZXIgc2V0dGluZ3NcbiAgY29uc3QgdXNlclNldHRpbmdzQ29udGVudCA9IGVudHJpZXNbU1lOQ19LRVlTLlVTRVJfU0VUVElOR1NdXG4gIGlmICh1c2VyU2V0dGluZ3NDb250ZW50KSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzUGF0aCA9IGdldFNldHRpbmdzRmlsZVBhdGhGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycpXG4gICAgaWYgKFxuICAgICAgdXNlclNldHRpbmdzUGF0aCAmJlxuICAgICAgIWV4Y2VlZHNTaXplTGltaXQodXNlclNldHRpbmdzQ29udGVudCwgdXNlclNldHRpbmdzUGF0aClcbiAgICApIHtcbiAgICAgIC8vIE1hcmsgYXMgaW50ZXJuYWwgd3JpdGUgdG8gcHJldmVudCBzcHVyaW91cyBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgICBtYXJrSW50ZXJuYWxXcml0ZSh1c2VyU2V0dGluZ3NQYXRoKVxuICAgICAgaWYgKGF3YWl0IHdyaXRlRmlsZUZvclN5bmModXNlclNldHRpbmdzUGF0aCwgdXNlclNldHRpbmdzQ29udGVudCkpIHtcbiAgICAgICAgYXBwbGllZENvdW50KytcbiAgICAgICAgc2V0dGluZ3NXcml0dGVuID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGx5IGdsb2JhbCB1c2VyIG1lbW9yeVxuICBjb25zdCB1c2VyTWVtb3J5Q29udGVudCA9IGVudHJpZXNbU1lOQ19LRVlTLlVTRVJfTUVNT1JZXVxuICBpZiAodXNlck1lbW9yeUNvbnRlbnQpIHtcbiAgICBjb25zdCB1c2VyTWVtb3J5UGF0aCA9IGdldE1lbW9yeVBhdGgoJ1VzZXInKVxuICAgIGlmICghZXhjZWVkc1NpemVMaW1pdCh1c2VyTWVtb3J5Q29udGVudCwgdXNlck1lbW9yeVBhdGgpKSB7XG4gICAgICBpZiAoYXdhaXQgd3JpdGVGaWxlRm9yU3luYyh1c2VyTWVtb3J5UGF0aCwgdXNlck1lbW9yeUNvbnRlbnQpKSB7XG4gICAgICAgIGFwcGxpZWRDb3VudCsrXG4gICAgICAgIG1lbW9yeVdyaXR0ZW4gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgcHJvamVjdC1zcGVjaWZpYyBmaWxlcyAob25seSBpZiBwcm9qZWN0IElEIG1hdGNoZXMpXG4gIGlmIChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0U2V0dGluZ3NLZXkgPSBTWU5DX0tFWVMucHJvamVjdFNldHRpbmdzKHByb2plY3RJZClcbiAgICBjb25zdCBwcm9qZWN0U2V0dGluZ3NDb250ZW50ID0gZW50cmllc1twcm9qZWN0U2V0dGluZ3NLZXldXG4gICAgaWYgKHByb2plY3RTZXR0aW5nc0NvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGxvY2FsU2V0dGluZ3NQYXRoID0gZ2V0U2V0dGluZ3NGaWxlUGF0aEZvclNvdXJjZSgnbG9jYWxTZXR0aW5ncycpXG4gICAgICBpZiAoXG4gICAgICAgIGxvY2FsU2V0dGluZ3NQYXRoICYmXG4gICAgICAgICFleGNlZWRzU2l6ZUxpbWl0KHByb2plY3RTZXR0aW5nc0NvbnRlbnQsIGxvY2FsU2V0dGluZ3NQYXRoKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE1hcmsgYXMgaW50ZXJuYWwgd3JpdGUgdG8gcHJldmVudCBzcHVyaW91cyBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgICAgIG1hcmtJbnRlcm5hbFdyaXRlKGxvY2FsU2V0dGluZ3NQYXRoKVxuICAgICAgICBpZiAoYXdhaXQgd3JpdGVGaWxlRm9yU3luYyhsb2NhbFNldHRpbmdzUGF0aCwgcHJvamVjdFNldHRpbmdzQ29udGVudCkpIHtcbiAgICAgICAgICBhcHBsaWVkQ291bnQrK1xuICAgICAgICAgIHNldHRpbmdzV3JpdHRlbiA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RNZW1vcnlLZXkgPSBTWU5DX0tFWVMucHJvamVjdE1lbW9yeShwcm9qZWN0SWQpXG4gICAgY29uc3QgcHJvamVjdE1lbW9yeUNvbnRlbnQgPSBlbnRyaWVzW3Byb2plY3RNZW1vcnlLZXldXG4gICAgaWYgKHByb2plY3RNZW1vcnlDb250ZW50KSB7XG4gICAgICBjb25zdCBsb2NhbE1lbW9yeVBhdGggPSBnZXRNZW1vcnlQYXRoKCdMb2NhbCcpXG4gICAgICBpZiAoIWV4Y2VlZHNTaXplTGltaXQocHJvamVjdE1lbW9yeUNvbnRlbnQsIGxvY2FsTWVtb3J5UGF0aCkpIHtcbiAgICAgICAgaWYgKGF3YWl0IHdyaXRlRmlsZUZvclN5bmMobG9jYWxNZW1vcnlQYXRoLCBwcm9qZWN0TWVtb3J5Q29udGVudCkpIHtcbiAgICAgICAgICBhcHBsaWVkQ291bnQrK1xuICAgICAgICAgIG1lbW9yeVdyaXR0ZW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJbnZhbGlkYXRlIGNhY2hlcyBzbyBzdWJzZXF1ZW50IHJlYWRzIHBpY2sgdXAgbmV3IGNvbnRlbnRcbiAgaWYgKHNldHRpbmdzV3JpdHRlbikge1xuICAgIHJlc2V0U2V0dGluZ3NDYWNoZSgpXG4gIH1cbiAgaWYgKG1lbW9yeVdyaXR0ZW4pIHtcbiAgICBjbGVhck1lbW9yeUZpbGVDYWNoZXMoKVxuICB9XG5cbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdzZXR0aW5nc19zeW5jX2FwcGxpZWQnLCB7XG4gICAgYXBwbGllZENvdW50LFxuICB9KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBZWEsdUJBU0Esb0JBb0NBO0FBNURiO0FBQUE7QUFPQTtBQUNBO0FBT08sSUFBTSx3QkFBd0I7QUFBQSxNQUFXLE1BQzlDLGlCQUFFLE9BQU87QUFBQSxRQUNQLFNBQVMsaUJBQUUsT0FBTyxpQkFBRSxPQUFPLEdBQUcsaUJBQUUsT0FBTyxDQUFDO0FBQUEsTUFDMUMsQ0FBQztBQUFBLElBQ0g7QUFLTyxJQUFNLHFCQUFxQjtBQUFBLE1BQVcsTUFD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
