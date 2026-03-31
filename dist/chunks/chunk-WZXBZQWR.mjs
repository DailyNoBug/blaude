#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getClaudeAIOAuthTokens,
  getOrganizationUUID,
  init_auth,
  init_client
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
  init_v4,
  v4_default
} from "./chunk-PPND3F3V.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  init_detectRepository,
  parseGitHubRepository
} from "./chunk-N62V5C2K.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/teleport/api.ts
import { randomUUID } from "crypto";
function isTransientNetworkError(error) {
  if (!axios_default.isAxiosError(error)) {
    return false;
  }
  if (!error.response) {
    return true;
  }
  if (error.response.status >= 500) {
    return true;
  }
  return false;
}
async function axiosGetWithRetry(url, config) {
  let lastError;
  for (let attempt = 0; attempt <= MAX_TELEPORT_RETRIES; attempt++) {
    try {
      return await axios_default.get(url, config);
    } catch (error) {
      lastError = error;
      if (!isTransientNetworkError(error)) {
        throw error;
      }
      if (attempt >= MAX_TELEPORT_RETRIES) {
        logForDebugging(
          `Teleport request failed after ${attempt + 1} attempts: ${errorMessage(error)}`
        );
        throw error;
      }
      const delay = TELEPORT_RETRY_DELAYS[attempt] ?? 2e3;
      logForDebugging(
        `Teleport request failed (attempt ${attempt + 1}/${MAX_TELEPORT_RETRIES + 1}), retrying in ${delay}ms: ${errorMessage(error)}`
      );
      await sleep(delay);
    }
  }
  throw lastError;
}
async function prepareApiRequest() {
  const accessToken = getClaudeAIOAuthTokens()?.accessToken;
  if (accessToken === void 0) {
    throw new Error(
      "Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status."
    );
  }
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    throw new Error("Unable to get organization UUID");
  }
  return { accessToken, orgUUID };
}
async function fetchCodeSessionsFromSessionsAPI() {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const url = `${getOauthConfig().BASE_API_URL}/v1/sessions`;
  try {
    const headers = {
      ...getOAuthHeaders(accessToken),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": orgUUID
    };
    const response = await axiosGetWithRetry(url, {
      headers
    });
    if (response.status !== 200) {
      throw new Error(`Failed to fetch code sessions: ${response.statusText}`);
    }
    const sessions = response.data.data.map((session) => {
      const gitSource = session.session_context.sources.find(
        (source) => source.type === "git_repository"
      );
      let repo = null;
      if (gitSource?.url) {
        const repoPath = parseGitHubRepository(gitSource.url);
        if (repoPath) {
          const [owner, name] = repoPath.split("/");
          if (owner && name) {
            repo = {
              name,
              owner: {
                login: owner
              },
              default_branch: gitSource.revision || void 0
            };
          }
        }
      }
      return {
        id: session.id,
        title: session.title || "Untitled",
        description: "",
        // SessionResource doesn't have description field
        status: session.session_status,
        // Map session_status to status
        repo,
        turns: [],
        // SessionResource doesn't have turns field
        created_at: session.created_at,
        updated_at: session.updated_at
      };
    });
    return sessions;
  } catch (error) {
    const err = toError(error);
    logError(err);
    throw error;
  }
}
function getOAuthHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01"
  };
}
async function fetchSession(sessionId) {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const url = `${getOauthConfig().BASE_API_URL}/v1/sessions/${sessionId}`;
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": "ccr-byoc-2025-07-29",
    "x-organization-uuid": orgUUID
  };
  const response = await axios_default.get(url, {
    headers,
    timeout: 15e3,
    validateStatus: (status) => status < 500
  });
  if (response.status !== 200) {
    const errorData = response.data;
    const apiMessage = errorData?.error?.message;
    if (response.status === 404) {
      throw new Error(`Session not found: ${sessionId}`);
    }
    if (response.status === 401) {
      throw new Error("Session expired. Please run /login to sign in again.");
    }
    throw new Error(
      apiMessage || `Failed to fetch session: ${response.status} ${response.statusText}`
    );
  }
  return response.data;
}
function getBranchFromSession(session) {
  const gitOutcome = session.session_context.outcomes?.find(
    (outcome) => outcome.type === "git_repository"
  );
  return gitOutcome?.git_info?.branches[0];
}
async function sendEventToRemoteSession(sessionId, messageContent, opts) {
  try {
    const { accessToken, orgUUID } = await prepareApiRequest();
    const url = `${getOauthConfig().BASE_API_URL}/v1/sessions/${sessionId}/events`;
    const headers = {
      ...getOAuthHeaders(accessToken),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": orgUUID
    };
    const userEvent = {
      uuid: opts?.uuid ?? randomUUID(),
      session_id: sessionId,
      type: "user",
      parent_tool_use_id: null,
      message: {
        role: "user",
        content: messageContent
      }
    };
    const requestBody = {
      events: [userEvent]
    };
    logForDebugging(
      `[sendEventToRemoteSession] Sending event to session ${sessionId}`
    );
    const response = await axios_default.post(url, requestBody, {
      headers,
      validateStatus: (status) => status < 500,
      timeout: 3e4
    });
    if (response.status === 200 || response.status === 201) {
      logForDebugging(
        `[sendEventToRemoteSession] Successfully sent event to session ${sessionId}`
      );
      return true;
    }
    logForDebugging(
      `[sendEventToRemoteSession] Failed with status ${response.status}: ${jsonStringify(response.data)}`
    );
    return false;
  } catch (error) {
    logForDebugging(`[sendEventToRemoteSession] Error: ${errorMessage(error)}`);
    return false;
  }
}
async function updateSessionTitle(sessionId, title) {
  try {
    const { accessToken, orgUUID } = await prepareApiRequest();
    const url = `${getOauthConfig().BASE_API_URL}/v1/sessions/${sessionId}`;
    const headers = {
      ...getOAuthHeaders(accessToken),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": orgUUID
    };
    logForDebugging(
      `[updateSessionTitle] Updating title for session ${sessionId}: "${title}"`
    );
    const response = await axios_default.patch(
      url,
      { title },
      {
        headers,
        validateStatus: (status) => status < 500
      }
    );
    if (response.status === 200) {
      logForDebugging(
        `[updateSessionTitle] Successfully updated title for session ${sessionId}`
      );
      return true;
    }
    logForDebugging(
      `[updateSessionTitle] Failed with status ${response.status}: ${jsonStringify(response.data)}`
    );
    return false;
  } catch (error) {
    logForDebugging(`[updateSessionTitle] Error: ${errorMessage(error)}`);
    return false;
  }
}
var TELEPORT_RETRY_DELAYS, MAX_TELEPORT_RETRIES, CCR_BYOC_BETA, CodeSessionSchema;
var init_api = __esm({
  "src/utils/teleport/api.ts"() {
    init_axios();
    init_oauth();
    init_client();
    init_v4();
    init_auth();
    init_debug();
    init_detectRepository();
    init_errors();
    init_lazySchema();
    init_log();
    init_sleep();
    init_slowOperations();
    TELEPORT_RETRY_DELAYS = [2e3, 4e3, 8e3, 16e3];
    MAX_TELEPORT_RETRIES = TELEPORT_RETRY_DELAYS.length;
    CCR_BYOC_BETA = "ccr-byoc-2025-07-29";
    CodeSessionSchema = lazySchema(
      () => v4_default.object({
        id: v4_default.string(),
        title: v4_default.string(),
        description: v4_default.string(),
        status: v4_default.enum([
          "idle",
          "working",
          "waiting",
          "completed",
          "archived",
          "cancelled",
          "rejected"
        ]),
        repo: v4_default.object({
          name: v4_default.string(),
          owner: v4_default.object({
            login: v4_default.string()
          }),
          default_branch: v4_default.string().optional()
        }).nullable(),
        turns: v4_default.array(v4_default.string()),
        created_at: v4_default.string(),
        updated_at: v4_default.string()
      })
    );
  }
});

export {
  CCR_BYOC_BETA,
  isTransientNetworkError,
  axiosGetWithRetry,
  CodeSessionSchema,
  prepareApiRequest,
  fetchCodeSessionsFromSessionsAPI,
  getOAuthHeaders,
  fetchSession,
  getBranchFromSession,
  sendEventToRemoteSession,
  updateSessionTitle,
  init_api
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3RlbGVwb3J0L2FwaS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGF4aW9zLCB7IHR5cGUgQXhpb3NSZXF1ZXN0Q29uZmlnLCB0eXBlIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBnZXRPYXV0aENvbmZpZyB9IGZyb20gJ3NyYy9jb25zdGFudHMvb2F1dGguanMnXG5pbXBvcnQgeyBnZXRPcmdhbml6YXRpb25VVUlEIH0gZnJvbSAnc3JjL3NlcnZpY2VzL29hdXRoL2NsaWVudC5qcydcbmltcG9ydCB6IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGdldENsYXVkZUFJT0F1dGhUb2tlbnMgfSBmcm9tICcuLi9hdXRoLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBwYXJzZUdpdEh1YlJlcG9zaXRvcnkgfSBmcm9tICcuLi9kZXRlY3RSZXBvc2l0b3J5LmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCB0b0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4uL2xhenlTY2hlbWEuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vc2xlZXAuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5cbi8vIFJldHJ5IGNvbmZpZ3VyYXRpb24gZm9yIHRlbGVwb3J0IEFQSSByZXF1ZXN0c1xuY29uc3QgVEVMRVBPUlRfUkVUUllfREVMQVlTID0gWzIwMDAsIDQwMDAsIDgwMDAsIDE2MDAwXSAvLyA0IHJldHJpZXMgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG5jb25zdCBNQVhfVEVMRVBPUlRfUkVUUklFUyA9IFRFTEVQT1JUX1JFVFJZX0RFTEFZUy5sZW5ndGhcblxuZXhwb3J0IGNvbnN0IENDUl9CWU9DX0JFVEEgPSAnY2NyLWJ5b2MtMjAyNS0wNy0yOSdcblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gYXhpb3MgZXJyb3IgaXMgYSB0cmFuc2llbnQgbmV0d29yayBlcnJvciB0aGF0IHNob3VsZCBiZSByZXRyaWVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zaWVudE5ldHdvcmtFcnJvcihlcnJvcjogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoIWF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFJldHJ5IG9uIG5ldHdvcmsgZXJyb3JzIChubyByZXNwb25zZSByZWNlaXZlZClcbiAgaWYgKCFlcnJvci5yZXNwb25zZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBSZXRyeSBvbiBzZXJ2ZXIgZXJyb3JzICg1eHgpXG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPj0gNTAwKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIERvbid0IHJldHJ5IG9uIGNsaWVudCBlcnJvcnMgKDR4eCkgLSB0aGV5J3JlIG5vdCB0cmFuc2llbnRcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogTWFrZXMgYW4gYXhpb3MgR0VUIHJlcXVlc3Qgd2l0aCBhdXRvbWF0aWMgcmV0cnkgZm9yIHRyYW5zaWVudCBuZXR3b3JrIGVycm9yc1xuICogVXNlcyBleHBvbmVudGlhbCBiYWNrb2ZmOiAycywgNHMsIDhzLCAxNnMgKDQgcmV0cmllcyA9IDUgdG90YWwgYXR0ZW1wdHMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBheGlvc0dldFdpdGhSZXRyeTxUPihcbiAgdXJsOiBzdHJpbmcsXG4gIGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZyxcbik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxUPj4ge1xuICBsZXQgbGFzdEVycm9yOiB1bmtub3duXG5cbiAgZm9yIChsZXQgYXR0ZW1wdCA9IDA7IGF0dGVtcHQgPD0gTUFYX1RFTEVQT1JUX1JFVFJJRVM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0PFQ+KHVybCwgY29uZmlnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsYXN0RXJyb3IgPSBlcnJvclxuXG4gICAgICAvLyBEb24ndCByZXRyeSBpZiB0aGlzIGlzbid0IGEgdHJhbnNpZW50IGVycm9yXG4gICAgICBpZiAoIWlzVHJhbnNpZW50TmV0d29ya0Vycm9yKGVycm9yKSkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCByZXRyeSBpZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIHJldHJpZXNcbiAgICAgIGlmIChhdHRlbXB0ID49IE1BWF9URUxFUE9SVF9SRVRSSUVTKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgVGVsZXBvcnQgcmVxdWVzdCBmYWlsZWQgYWZ0ZXIgJHthdHRlbXB0ICsgMX0gYXR0ZW1wdHM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICApXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlbGF5ID0gVEVMRVBPUlRfUkVUUllfREVMQVlTW2F0dGVtcHRdID8/IDIwMDBcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFRlbGVwb3J0IHJlcXVlc3QgZmFpbGVkIChhdHRlbXB0ICR7YXR0ZW1wdCArIDF9LyR7TUFYX1RFTEVQT1JUX1JFVFJJRVMgKyAxfSksIHJldHJ5aW5nIGluICR7ZGVsYXl9bXM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgKVxuICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbGFzdEVycm9yXG59XG5cbi8vIFR5cGVzIG1hdGNoaW5nIHRoZSBhY3R1YWwgU2Vzc2lvbnMgQVBJIHJlc3BvbnNlIGZyb20gYXBpL3NjaGVtYXMvc2Vzc2lvbnMvc2Vzc2lvbnMucHlcbmV4cG9ydCB0eXBlIFNlc3Npb25TdGF0dXMgPSAncmVxdWlyZXNfYWN0aW9uJyB8ICdydW5uaW5nJyB8ICdpZGxlJyB8ICdhcmNoaXZlZCdcblxuZXhwb3J0IHR5cGUgR2l0U291cmNlID0ge1xuICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknXG4gIHVybDogc3RyaW5nXG4gIHJldmlzaW9uPzogc3RyaW5nIHwgbnVsbFxuICBhbGxvd191bnJlc3RyaWN0ZWRfZ2l0X3B1c2g/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIEtub3dsZWRnZUJhc2VTb3VyY2UgPSB7XG4gIHR5cGU6ICdrbm93bGVkZ2VfYmFzZSdcbiAga25vd2xlZGdlX2Jhc2VfaWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBTZXNzaW9uQ29udGV4dFNvdXJjZSA9IEdpdFNvdXJjZSB8IEtub3dsZWRnZUJhc2VTb3VyY2VcblxuLy8gT3V0Y29tZSB0eXBlcyBmcm9tIGFwaS9zY2hlbWFzL3NhbmRib3gucHlcbmV4cG9ydCB0eXBlIE91dGNvbWVHaXRJbmZvID0ge1xuICB0eXBlOiAnZ2l0aHViJ1xuICByZXBvOiBzdHJpbmdcbiAgYnJhbmNoZXM6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCB0eXBlIEdpdFJlcG9zaXRvcnlPdXRjb21lID0ge1xuICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknXG4gIGdpdF9pbmZvOiBPdXRjb21lR2l0SW5mb1xufVxuXG5leHBvcnQgdHlwZSBPdXRjb21lID0gR2l0UmVwb3NpdG9yeU91dGNvbWVcblxuZXhwb3J0IHR5cGUgU2Vzc2lvbkNvbnRleHQgPSB7XG4gIHNvdXJjZXM6IFNlc3Npb25Db250ZXh0U291cmNlW11cbiAgY3dkOiBzdHJpbmdcbiAgb3V0Y29tZXM6IE91dGNvbWVbXSB8IG51bGxcbiAgY3VzdG9tX3N5c3RlbV9wcm9tcHQ6IHN0cmluZyB8IG51bGxcbiAgYXBwZW5kX3N5c3RlbV9wcm9tcHQ6IHN0cmluZyB8IG51bGxcbiAgbW9kZWw6IHN0cmluZyB8IG51bGxcbiAgLy8gU2VlZCBmaWxlc3lzdGVtIHdpdGggYSBnaXQgYnVuZGxlIG9uIEZpbGVzIEFQSVxuICBzZWVkX2J1bmRsZV9maWxlX2lkPzogc3RyaW5nXG4gIGdpdGh1Yl9wcj86IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nOyBudW1iZXI6IG51bWJlciB9XG4gIHJldXNlX291dGNvbWVfYnJhbmNoZXM/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFNlc3Npb25SZXNvdXJjZSA9IHtcbiAgdHlwZTogJ3Nlc3Npb24nXG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZyB8IG51bGxcbiAgc2Vzc2lvbl9zdGF0dXM6IFNlc3Npb25TdGF0dXNcbiAgZW52aXJvbm1lbnRfaWQ6IHN0cmluZ1xuICBjcmVhdGVkX2F0OiBzdHJpbmdcbiAgdXBkYXRlZF9hdDogc3RyaW5nXG4gIHNlc3Npb25fY29udGV4dDogU2Vzc2lvbkNvbnRleHRcbn1cblxuZXhwb3J0IHR5cGUgTGlzdFNlc3Npb25zUmVzcG9uc2UgPSB7XG4gIGRhdGE6IFNlc3Npb25SZXNvdXJjZVtdXG4gIGhhc19tb3JlOiBib29sZWFuXG4gIGZpcnN0X2lkOiBzdHJpbmcgfCBudWxsXG4gIGxhc3RfaWQ6IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IENvZGVTZXNzaW9uU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gICAgc3RhdHVzOiB6LmVudW0oW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ3dvcmtpbmcnLFxuICAgICAgJ3dhaXRpbmcnLFxuICAgICAgJ2NvbXBsZXRlZCcsXG4gICAgICAnYXJjaGl2ZWQnLFxuICAgICAgJ2NhbmNlbGxlZCcsXG4gICAgICAncmVqZWN0ZWQnLFxuICAgIF0pLFxuICAgIHJlcG86IHpcbiAgICAgIC5vYmplY3Qoe1xuICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBvd25lcjogei5vYmplY3Qoe1xuICAgICAgICAgIGxvZ2luOiB6LnN0cmluZygpLFxuICAgICAgICB9KSxcbiAgICAgICAgZGVmYXVsdF9icmFuY2g6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pXG4gICAgICAubnVsbGFibGUoKSxcbiAgICB0dXJuczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBjcmVhdGVkX2F0OiB6LnN0cmluZygpLFxuICAgIHVwZGF0ZWRfYXQ6IHouc3RyaW5nKCksXG4gIH0pLFxuKVxuXG4vLyBFeHBvcnQgdGhlIGluZmVycmVkIHR5cGUgZnJvbSB0aGUgWm9kIHNjaGVtYVxuZXhwb3J0IHR5cGUgQ29kZVNlc3Npb24gPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIENvZGVTZXNzaW9uU2NoZW1hPj5cblxuLyoqXG4gKiBWYWxpZGF0ZXMgYW5kIHByZXBhcmVzIGZvciBBUEkgcmVxdWVzdHNcbiAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIGFjY2VzcyB0b2tlbiBhbmQgb3JnYW5pemF0aW9uIFVVSURcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXBhcmVBcGlSZXF1ZXN0KCk6IFByb21pc2U8e1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nXG4gIG9yZ1VVSUQ6IHN0cmluZ1xufT4ge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKT8uYWNjZXNzVG9rZW5cbiAgaWYgKGFjY2Vzc1Rva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2xhdWRlIENvZGUgd2ViIHNlc3Npb25zIHJlcXVpcmUgYXV0aGVudGljYXRpb24gd2l0aCBhIENsYXVkZS5haSBhY2NvdW50LiBBUEkga2V5IGF1dGhlbnRpY2F0aW9uIGlzIG5vdCBzdWZmaWNpZW50LiBQbGVhc2UgcnVuIC9sb2dpbiB0byBhdXRoZW50aWNhdGUsIG9yIGNoZWNrIHlvdXIgYXV0aGVudGljYXRpb24gc3RhdHVzIHdpdGggL3N0YXR1cy4nLFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG9yZ1VVSUQgPSBhd2FpdCBnZXRPcmdhbml6YXRpb25VVUlEKClcbiAgaWYgKCFvcmdVVUlEKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZ2V0IG9yZ2FuaXphdGlvbiBVVUlEJylcbiAgfVxuXG4gIHJldHVybiB7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIGNvZGUgc2Vzc2lvbnMgZnJvbSB0aGUgbmV3IFNlc3Npb25zIEFQSSAoL3YxL3Nlc3Npb25zKVxuICogQHJldHVybnMgQXJyYXkgb2YgY29kZSBzZXNzaW9uc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb2RlU2Vzc2lvbnNGcm9tU2Vzc2lvbnNBUEkoKTogUHJvbWlzZTxcbiAgQ29kZVNlc3Npb25bXVxuPiB7XG4gIGNvbnN0IHsgYWNjZXNzVG9rZW4sIG9yZ1VVSUQgfSA9IGF3YWl0IHByZXBhcmVBcGlSZXF1ZXN0KClcblxuICBjb25zdCB1cmwgPSBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnNgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAgICd4LW9yZ2FuaXphdGlvbi11dWlkJzogb3JnVVVJRCxcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2V0V2l0aFJldHJ5PExpc3RTZXNzaW9uc1Jlc3BvbnNlPih1cmwsIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgfSlcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggY29kZSBzZXNzaW9uczogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIFNlc3Npb25SZXNvdXJjZVtdIHRvIENvZGVTZXNzaW9uW10gZm9ybWF0XG4gICAgY29uc3Qgc2Vzc2lvbnM6IENvZGVTZXNzaW9uW10gPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHNlc3Npb24gPT4ge1xuICAgICAgLy8gRXh0cmFjdCByZXBvc2l0b3J5IGluZm8gZnJvbSBnaXQgc291cmNlc1xuICAgICAgY29uc3QgZ2l0U291cmNlID0gc2Vzc2lvbi5zZXNzaW9uX2NvbnRleHQuc291cmNlcy5maW5kKFxuICAgICAgICAoc291cmNlKTogc291cmNlIGlzIEdpdFNvdXJjZSA9PiBzb3VyY2UudHlwZSA9PT0gJ2dpdF9yZXBvc2l0b3J5JyxcbiAgICAgIClcblxuICAgICAgbGV0IHJlcG86IENvZGVTZXNzaW9uWydyZXBvJ10gPSBudWxsXG4gICAgICBpZiAoZ2l0U291cmNlPy51cmwpIHtcbiAgICAgICAgLy8gUGFyc2UgR2l0SHViIFVSTCB1c2luZyB0aGUgZXhpc3RpbmcgdXRpbGl0eSBmdW5jdGlvblxuICAgICAgICBjb25zdCByZXBvUGF0aCA9IHBhcnNlR2l0SHViUmVwb3NpdG9yeShnaXRTb3VyY2UudXJsKVxuICAgICAgICBpZiAocmVwb1BhdGgpIHtcbiAgICAgICAgICBjb25zdCBbb3duZXIsIG5hbWVdID0gcmVwb1BhdGguc3BsaXQoJy8nKVxuICAgICAgICAgIGlmIChvd25lciAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXBvID0ge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBvd25lcjoge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBvd25lcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdF9icmFuY2g6IGdpdFNvdXJjZS5yZXZpc2lvbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBzZXNzaW9uLmlkLFxuICAgICAgICB0aXRsZTogc2Vzc2lvbi50aXRsZSB8fCAnVW50aXRsZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFNlc3Npb25SZXNvdXJjZSBkb2Vzbid0IGhhdmUgZGVzY3JpcHRpb24gZmllbGRcbiAgICAgICAgc3RhdHVzOiBzZXNzaW9uLnNlc3Npb25fc3RhdHVzIGFzIENvZGVTZXNzaW9uWydzdGF0dXMnXSwgLy8gTWFwIHNlc3Npb25fc3RhdHVzIHRvIHN0YXR1c1xuICAgICAgICByZXBvLFxuICAgICAgICB0dXJuczogW10sIC8vIFNlc3Npb25SZXNvdXJjZSBkb2Vzbid0IGhhdmUgdHVybnMgZmllbGRcbiAgICAgICAgY3JlYXRlZF9hdDogc2Vzc2lvbi5jcmVhdGVkX2F0LFxuICAgICAgICB1cGRhdGVkX2F0OiBzZXNzaW9uLnVwZGF0ZWRfYXQsXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBzZXNzaW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVyciA9IHRvRXJyb3IoZXJyb3IpXG4gICAgbG9nRXJyb3IoZXJyKVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIE9BdXRoIGhlYWRlcnMgZm9yIEFQSSByZXF1ZXN0c1xuICogQHBhcmFtIGFjY2Vzc1Rva2VuIFRoZSBPQXV0aCBhY2Nlc3MgdG9rZW5cbiAqIEByZXR1cm5zIEhlYWRlcnMgb2JqZWN0IHdpdGggQXV0aG9yaXphdGlvbiwgQ29udGVudC1UeXBlLCBhbmQgYW50aHJvcGljLXZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9BdXRoSGVhZGVycyhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIHJldHVybiB7XG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYW50aHJvcGljLXZlcnNpb24nOiAnMjAyMy0wNi0wMScsXG4gIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIGEgc2luZ2xlIHNlc3Npb24gYnkgSUQgZnJvbSB0aGUgU2Vzc2lvbnMgQVBJXG4gKiBAcGFyYW0gc2Vzc2lvbklkIFRoZSBzZXNzaW9uIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBUaGUgc2Vzc2lvbiByZXNvdXJjZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZXNzaW9uKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8U2Vzc2lvblJlc291cmNlPiB7XG4gIGNvbnN0IHsgYWNjZXNzVG9rZW4sIG9yZ1VVSUQgfSA9IGF3YWl0IHByZXBhcmVBcGlSZXF1ZXN0KClcblxuICBjb25zdCB1cmwgPSBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnMvJHtzZXNzaW9uSWR9YFxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIC4uLmdldE9BdXRoSGVhZGVycyhhY2Nlc3NUb2tlbiksXG4gICAgJ2FudGhyb3BpYy1iZXRhJzogJ2Njci1ieW9jLTIwMjUtMDctMjknLFxuICAgICd4LW9yZ2FuaXphdGlvbi11dWlkJzogb3JnVVVJRCxcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PFNlc3Npb25SZXNvdXJjZT4odXJsLCB7XG4gICAgaGVhZGVycyxcbiAgICB0aW1lb3V0OiAxNTAwMCxcbiAgICB2YWxpZGF0ZVN0YXR1czogc3RhdHVzID0+IHN0YXR1cyA8IDUwMCxcbiAgfSlcblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAvLyBFeHRyYWN0IGVycm9yIG1lc3NhZ2UgZnJvbSByZXNwb25zZSBpZiBhdmFpbGFibGVcbiAgICBjb25zdCBlcnJvckRhdGEgPSByZXNwb25zZS5kYXRhIGFzIHsgZXJyb3I/OiB7IG1lc3NhZ2U/OiBzdHJpbmcgfSB9XG4gICAgY29uc3QgYXBpTWVzc2FnZSA9IGVycm9yRGF0YT8uZXJyb3I/Lm1lc3NhZ2VcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXNzaW9uIG5vdCBmb3VuZDogJHtzZXNzaW9uSWR9YClcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkLiBQbGVhc2UgcnVuIC9sb2dpbiB0byBzaWduIGluIGFnYWluLicpXG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYXBpTWVzc2FnZSB8fFxuICAgICAgICBgRmFpbGVkIHRvIGZldGNoIHNlc3Npb246ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCxcbiAgICApXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBmaXJzdCBicmFuY2ggbmFtZSBmcm9tIGEgc2Vzc2lvbidzIGdpdCByZXBvc2l0b3J5IG91dGNvbWVzXG4gKiBAcGFyYW0gc2Vzc2lvbiBUaGUgc2Vzc2lvbiByZXNvdXJjZSB0byBleHRyYWN0IGZyb21cbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBicmFuY2ggbmFtZSwgb3IgdW5kZWZpbmVkIGlmIG5vbmUgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJyYW5jaEZyb21TZXNzaW9uKFxuICBzZXNzaW9uOiBTZXNzaW9uUmVzb3VyY2UsXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBnaXRPdXRjb21lID0gc2Vzc2lvbi5zZXNzaW9uX2NvbnRleHQub3V0Y29tZXM/LmZpbmQoXG4gICAgKG91dGNvbWUpOiBvdXRjb21lIGlzIEdpdFJlcG9zaXRvcnlPdXRjb21lID0+XG4gICAgICBvdXRjb21lLnR5cGUgPT09ICdnaXRfcmVwb3NpdG9yeScsXG4gIClcbiAgcmV0dXJuIGdpdE91dGNvbWU/LmdpdF9pbmZvPy5icmFuY2hlc1swXVxufVxuXG4vKipcbiAqIENvbnRlbnQgZm9yIGEgcmVtb3RlIHNlc3Npb24gbWVzc2FnZS5cbiAqIEFjY2VwdHMgYSBwbGFpbiBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY29udGVudCBibG9ja3MgKHRleHQsIGltYWdlLCBldGMuKVxuICogZm9sbG93aW5nIHRoZSBBbnRocm9waWMgQVBJIG1lc3NhZ2VzIHNwZWMuXG4gKi9cbmV4cG9ydCB0eXBlIFJlbW90ZU1lc3NhZ2VDb250ZW50ID1cbiAgfCBzdHJpbmdcbiAgfCBBcnJheTx7IHR5cGU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PlxuXG4vKipcbiAqIFNlbmRzIGEgdXNlciBtZXNzYWdlIGV2ZW50IHRvIGFuIGV4aXN0aW5nIHJlbW90ZSBzZXNzaW9uIHZpYSB0aGUgU2Vzc2lvbnMgQVBJXG4gKiBAcGFyYW0gc2Vzc2lvbklkIFRoZSBzZXNzaW9uIElEIHRvIHNlbmQgdGhlIGV2ZW50IHRvXG4gKiBAcGFyYW0gbWVzc2FnZUNvbnRlbnQgVGhlIHVzZXIgbWVzc2FnZSBjb250ZW50IChzdHJpbmcgb3IgY29udGVudCBibG9ja3MpXG4gKiBAcGFyYW0gb3B0cy51dWlkIE9wdGlvbmFsIFVVSUQgZm9yIHRoZSBldmVudCBcdTIwMTQgY2FsbGVycyB0aGF0IGFkZGVkIGEgbG9jYWxcbiAqICAgVXNlck1lc3NhZ2UgZmlyc3Qgc2hvdWxkIHBhc3MgaXRzIFVVSUQgc28gZWNobyBmaWx0ZXJpbmcgY2FuIGRlZHVwXG4gKiBAcmV0dXJucyBQcm9taXNlPGJvb2xlYW4+IFRydWUgaWYgc3VjY2Vzc2Z1bCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kRXZlbnRUb1JlbW90ZVNlc3Npb24oXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICBtZXNzYWdlQ29udGVudDogUmVtb3RlTWVzc2FnZUNvbnRlbnQsXG4gIG9wdHM/OiB7IHV1aWQ/OiBzdHJpbmcgfSxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4sIG9yZ1VVSUQgfSA9IGF3YWl0IHByZXBhcmVBcGlSZXF1ZXN0KClcblxuICAgIGNvbnN0IHVybCA9IGAke2dldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMfS92MS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vZXZlbnRzYFxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICAgJ2FudGhyb3BpYy1iZXRhJzogJ2Njci1ieW9jLTIwMjUtMDctMjknLFxuICAgICAgJ3gtb3JnYW5pemF0aW9uLXV1aWQnOiBvcmdVVUlELFxuICAgIH1cblxuICAgIGNvbnN0IHVzZXJFdmVudCA9IHtcbiAgICAgIHV1aWQ6IG9wdHM/LnV1aWQgPz8gcmFuZG9tVVVJRCgpLFxuICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBudWxsLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2VDb250ZW50LFxuICAgICAgfSxcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgIGV2ZW50czogW3VzZXJFdmVudF0sXG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtzZW5kRXZlbnRUb1JlbW90ZVNlc3Npb25dIFNlbmRpbmcgZXZlbnQgdG8gc2Vzc2lvbiAke3Nlc3Npb25JZH1gLFxuICAgIClcbiAgICAvLyBUaGUgZW5kcG9pbnQgbWF5IGJsb2NrIHVudGlsIHRoZSBDQ1Igd29ya2VyIGlzIHJlYWR5LiBPYnNlcnZlZCB+Mi42c1xuICAgIC8vIGluIG5vcm1hbCBjYXNlczsgYWxsb3cgYSBnZW5lcm91cyBtYXJnaW4gZm9yIGNvbGQtc3RhcnQgY29udGFpbmVycy5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCByZXF1ZXN0Qm9keSwge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHZhbGlkYXRlU3RhdHVzOiBzdGF0dXMgPT4gc3RhdHVzIDwgNTAwLFxuICAgICAgdGltZW91dDogMzAwMDAsXG4gICAgfSlcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW3NlbmRFdmVudFRvUmVtb3RlU2Vzc2lvbl0gU3VjY2Vzc2Z1bGx5IHNlbnQgZXZlbnQgdG8gc2Vzc2lvbiAke3Nlc3Npb25JZH1gLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW3NlbmRFdmVudFRvUmVtb3RlU2Vzc2lvbl0gRmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtqc29uU3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWAsXG4gICAgKVxuICAgIHJldHVybiBmYWxzZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW3NlbmRFdmVudFRvUmVtb3RlU2Vzc2lvbl0gRXJyb3I6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgdGl0bGUgb2YgYW4gZXhpc3RpbmcgcmVtb3RlIHNlc3Npb24gdmlhIHRoZSBTZXNzaW9ucyBBUElcbiAqIEBwYXJhbSBzZXNzaW9uSWQgVGhlIHNlc3Npb24gSUQgdG8gdXBkYXRlXG4gKiBAcGFyYW0gdGl0bGUgVGhlIG5ldyB0aXRsZSBmb3IgdGhlIHNlc3Npb25cbiAqIEByZXR1cm5zIFByb21pc2U8Ym9vbGVhbj4gVHJ1ZSBpZiBzdWNjZXNzZnVsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb25UaXRsZShcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpXG5cbiAgICBjb25zdCB1cmwgPSBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnMvJHtzZXNzaW9uSWR9YFxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICAgJ2FudGhyb3BpYy1iZXRhJzogJ2Njci1ieW9jLTIwMjUtMDctMjknLFxuICAgICAgJ3gtb3JnYW5pemF0aW9uLXV1aWQnOiBvcmdVVUlELFxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbdXBkYXRlU2Vzc2lvblRpdGxlXSBVcGRhdGluZyB0aXRsZSBmb3Igc2Vzc2lvbiAke3Nlc3Npb25JZH06IFwiJHt0aXRsZX1cImAsXG4gICAgKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXG4gICAgICB1cmwsXG4gICAgICB7IHRpdGxlIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHZhbGlkYXRlU3RhdHVzOiBzdGF0dXMgPT4gc3RhdHVzIDwgNTAwLFxuICAgICAgfSxcbiAgICApXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFt1cGRhdGVTZXNzaW9uVGl0bGVdIFN1Y2Nlc3NmdWxseSB1cGRhdGVkIHRpdGxlIGZvciBzZXNzaW9uICR7c2Vzc2lvbklkfWAsXG4gICAgICApXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbdXBkYXRlU2Vzc2lvblRpdGxlXSBGYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9OiAke2pzb25TdHJpbmdpZnkocmVzcG9uc2UuZGF0YSl9YCxcbiAgICApXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGBbdXBkYXRlU2Vzc2lvblRpdGxlXSBFcnJvcjogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWApXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsa0JBQWtCO0FBc0JwQixTQUFTLHdCQUF3QixPQUF5QjtBQUMvRCxNQUFJLENBQUMsY0FBTSxhQUFhLEtBQUssR0FBRztBQUM5QixXQUFPO0FBQUEsRUFDVDtBQUdBLE1BQUksQ0FBQyxNQUFNLFVBQVU7QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFHQSxNQUFJLE1BQU0sU0FBUyxVQUFVLEtBQUs7QUFDaEMsV0FBTztBQUFBLEVBQ1Q7QUFHQSxTQUFPO0FBQ1Q7QUFNQSxlQUFzQixrQkFDcEIsS0FDQSxRQUMyQjtBQUMzQixNQUFJO0FBRUosV0FBUyxVQUFVLEdBQUcsV0FBVyxzQkFBc0IsV0FBVztBQUNoRSxRQUFJO0FBQ0YsYUFBTyxNQUFNLGNBQU0sSUFBTyxLQUFLLE1BQU07QUFBQSxJQUN2QyxTQUFTLE9BQU87QUFDZCxrQkFBWTtBQUdaLFVBQUksQ0FBQyx3QkFBd0IsS0FBSyxHQUFHO0FBQ25DLGNBQU07QUFBQSxNQUNSO0FBR0EsVUFBSSxXQUFXLHNCQUFzQjtB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
