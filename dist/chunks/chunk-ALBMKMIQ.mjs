#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getClaudeAIOAuthTokens,
  getOrganizationUUID,
  init_auth,
  init_client
} from "./chunk-JQ55XPLZ.mjs";
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
} from "./chunk-FOFMX5GB.mjs";
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
      "Blaude web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status."
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3RlbGVwb3J0L2FwaS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGF4aW9zLCB7IHR5cGUgQXhpb3NSZXF1ZXN0Q29uZmlnLCB0eXBlIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBnZXRPYXV0aENvbmZpZyB9IGZyb20gJ3NyYy9jb25zdGFudHMvb2F1dGguanMnXG5pbXBvcnQgeyBnZXRPcmdhbml6YXRpb25VVUlEIH0gZnJvbSAnc3JjL3NlcnZpY2VzL29hdXRoL2NsaWVudC5qcydcbmltcG9ydCB6IGZyb20gJ3pvZC92NCdcbmltcG9ydCB7IGdldENsYXVkZUFJT0F1dGhUb2tlbnMgfSBmcm9tICcuLi9hdXRoLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBwYXJzZUdpdEh1YlJlcG9zaXRvcnkgfSBmcm9tICcuLi9kZXRlY3RSZXBvc2l0b3J5LmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCB0b0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4uL2xhenlTY2hlbWEuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vc2xlZXAuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5cbi8vIFJldHJ5IGNvbmZpZ3VyYXRpb24gZm9yIHRlbGVwb3J0IEFQSSByZXF1ZXN0c1xuY29uc3QgVEVMRVBPUlRfUkVUUllfREVMQVlTID0gWzIwMDAsIDQwMDAsIDgwMDAsIDE2MDAwXSAvLyA0IHJldHJpZXMgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG5jb25zdCBNQVhfVEVMRVBPUlRfUkVUUklFUyA9IFRFTEVQT1JUX1JFVFJZX0RFTEFZUy5sZW5ndGhcblxuZXhwb3J0IGNvbnN0IENDUl9CWU9DX0JFVEEgPSAnY2NyLWJ5b2MtMjAyNS0wNy0yOSdcblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gYXhpb3MgZXJyb3IgaXMgYSB0cmFuc2llbnQgbmV0d29yayBlcnJvciB0aGF0IHNob3VsZCBiZSByZXRyaWVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zaWVudE5ldHdvcmtFcnJvcihlcnJvcjogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAoIWF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFJldHJ5IG9uIG5ldHdvcmsgZXJyb3JzIChubyByZXNwb25zZSByZWNlaXZlZClcbiAgaWYgKCFlcnJvci5yZXNwb25zZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBSZXRyeSBvbiBzZXJ2ZXIgZXJyb3JzICg1eHgpXG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPj0gNTAwKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIERvbid0IHJldHJ5IG9uIGNsaWVudCBlcnJvcnMgKDR4eCkgLSB0aGV5J3JlIG5vdCB0cmFuc2llbnRcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogTWFrZXMgYW4gYXhpb3MgR0VUIHJlcXVlc3Qgd2l0aCBhdXRvbWF0aWMgcmV0cnkgZm9yIHRyYW5zaWVudCBuZXR3b3JrIGVycm9yc1xuICogVXNlcyBleHBvbmVudGlhbCBiYWNrb2ZmOiAycywgNHMsIDhzLCAxNnMgKDQgcmV0cmllcyA9IDUgdG90YWwgYXR0ZW1wdHMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBheGlvc0dldFdpdGhSZXRyeTxUPihcbiAgdXJsOiBzdHJpbmcsXG4gIGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZyxcbik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxUPj4ge1xuICBsZXQgbGFzdEVycm9yOiB1bmtub3duXG5cbiAgZm9yIChsZXQgYXR0ZW1wdCA9IDA7IGF0dGVtcHQgPD0gTUFYX1RFTEVQT1JUX1JFVFJJRVM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0PFQ+KHVybCwgY29uZmlnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsYXN0RXJyb3IgPSBlcnJvclxuXG4gICAgICAvLyBEb24ndCByZXRyeSBpZiB0aGlzIGlzbid0IGEgdHJhbnNpZW50IGVycm9yXG4gICAgICBpZiAoIWlzVHJhbnNpZW50TmV0d29ya0Vycm9yKGVycm9yKSkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCByZXRyeSBpZiB3ZSd2ZSBleGhhdXN0ZWQgYWxsIHJldHJpZXNcbiAgICAgIGlmIChhdHRlbXB0ID49IE1BWF9URUxFUE9SVF9SRVRSSUVTKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgVGVsZXBvcnQgcmVxdWVzdCBmYWlsZWQgYWZ0ZXIgJHthdHRlbXB0ICsgMX0gYXR0ZW1wdHM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICApXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlbGF5ID0gVEVMRVBPUlRfUkVUUllfREVMQVlTW2F0dGVtcHRdID8/IDIwMDBcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFRlbGVwb3J0IHJlcXVlc3QgZmFpbGVkIChhdHRlbXB0ICR7YXR0ZW1wdCArIDF9LyR7TUFYX1RFTEVQT1JUX1JFVFJJRVMgKyAxfSksIHJldHJ5aW5nIGluICR7ZGVsYXl9bXM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgKVxuICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbGFzdEVycm9yXG59XG5cbi8vIFR5cGVzIG1hdGNoaW5nIHRoZSBhY3R1YWwgU2Vzc2lvbnMgQVBJIHJlc3BvbnNlIGZyb20gYXBpL3NjaGVtYXMvc2Vzc2lvbnMvc2Vzc2lvbnMucHlcbmV4cG9ydCB0eXBlIFNlc3Npb25TdGF0dXMgPSAncmVxdWlyZXNfYWN0aW9uJyB8ICdydW5uaW5nJyB8ICdpZGxlJyB8ICdhcmNoaXZlZCdcblxuZXhwb3J0IHR5cGUgR2l0U291cmNlID0ge1xuICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknXG4gIHVybDogc3RyaW5nXG4gIHJldmlzaW9uPzogc3RyaW5nIHwgbnVsbFxuICBhbGxvd191bnJlc3RyaWN0ZWRfZ2l0X3B1c2g/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIEtub3dsZWRnZUJhc2VTb3VyY2UgPSB7XG4gIHR5cGU6ICdrbm93bGVkZ2VfYmFzZSdcbiAga25vd2xlZGdlX2Jhc2VfaWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBTZXNzaW9uQ29udGV4dFNvdXJjZSA9IEdpdFNvdXJjZSB8IEtub3dsZWRnZUJhc2VTb3VyY2VcblxuLy8gT3V0Y29tZSB0eXBlcyBmcm9tIGFwaS9zY2hlbWFzL3NhbmRib3gucHlcbmV4cG9ydCB0eXBlIE91dGNvbWVHaXRJbmZvID0ge1xuICB0eXBlOiAnZ2l0aHViJ1xuICByZXBvOiBzdHJpbmdcbiAgYnJhbmNoZXM6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCB0eXBlIEdpdFJlcG9zaXRvcnlPdXRjb21lID0ge1xuICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknXG4gIGdpdF9pbmZvOiBPdXRjb21lR2l0SW5mb1xufVxuXG5leHBvcnQgdHlwZSBPdXRjb21lID0gR2l0UmVwb3NpdG9yeU91dGNvbWVcblxuZXhwb3J0IHR5cGUgU2Vzc2lvbkNvbnRleHQgPSB7XG4gIHNvdXJjZXM6IFNlc3Npb25Db250ZXh0U291cmNlW11cbiAgY3dkOiBzdHJpbmdcbiAgb3V0Y29tZXM6IE91dGNvbWVbXSB8IG51bGxcbiAgY3VzdG9tX3N5c3RlbV9wcm9tcHQ6IHN0cmluZyB8IG51bGxcbiAgYXBwZW5kX3N5c3RlbV9wcm9tcHQ6IHN0cmluZyB8IG51bGxcbiAgbW9kZWw6IHN0cmluZyB8IG51bGxcbiAgLy8gU2VlZCBmaWxlc3lzdGVtIHdpdGggYSBnaXQgYnVuZGxlIG9uIEZpbGVzIEFQSVxuICBzZWVkX2J1bmRsZV9maWxlX2lkPzogc3RyaW5nXG4gIGdpdGh1Yl9wcj86IHsgb3duZXI6IHN0cmluZzsgcmVwbzogc3RyaW5nOyBudW1iZXI6IG51bWJlciB9XG4gIHJldXNlX291dGNvbWVfYnJhbmNoZXM/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFNlc3Npb25SZXNvdXJjZSA9IHtcbiAgdHlwZTogJ3Nlc3Npb24nXG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZyB8IG51bGxcbiAgc2Vzc2lvbl9zdGF0dXM6IFNlc3Npb25TdGF0dXNcbiAgZW52aXJvbm1lbnRfaWQ6IHN0cmluZ1xuICBjcmVhdGVkX2F0OiBzdHJpbmdcbiAgdXBkYXRlZF9hdDogc3RyaW5nXG4gIHNlc3Npb25fY29udGV4dDogU2Vzc2lvbkNvbnRleHRcbn1cblxuZXhwb3J0IHR5cGUgTGlzdFNlc3Npb25zUmVzcG9uc2UgPSB7XG4gIGRhdGE6IFNlc3Npb25SZXNvdXJjZVtdXG4gIGhhc19tb3JlOiBib29sZWFuXG4gIGZpcnN0X2lkOiBzdHJpbmcgfCBudWxsXG4gIGxhc3RfaWQ6IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IENvZGVTZXNzaW9uU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PlxuICB6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCksXG4gICAgdGl0bGU6IHouc3RyaW5nKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gICAgc3RhdHVzOiB6LmVudW0oW1xuICAgICAgJ2lkbGUnLFxuICAgICAgJ3dvcmtpbmcnLFxuICAgICAgJ3dhaXRpbmcnLFxuICAgICAgJ2NvbXBsZXRlZCcsXG4gICAgICAnYXJjaGl2ZWQnLFxuICAgICAgJ2NhbmNlbGxlZCcsXG4gICAgICAncmVqZWN0ZWQnLFxuICAgIF0pLFxuICAgIHJlcG86IHpcbiAgICAgIC5vYmplY3Qoe1xuICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBvd25lcjogei5vYmplY3Qoe1xuICAgICAgICAgIGxvZ2luOiB6LnN0cmluZygpLFxuICAgICAgICB9KSxcbiAgICAgICAgZGVmYXVsdF9icmFuY2g6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIH0pXG4gICAgICAubnVsbGFibGUoKSxcbiAgICB0dXJuczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgICBjcmVhdGVkX2F0OiB6LnN0cmluZygpLFxuICAgIHVwZGF0ZWRfYXQ6IHouc3RyaW5nKCksXG4gIH0pLFxuKVxuXG4vLyBFeHBvcnQgdGhlIGluZmVycmVkIHR5cGUgZnJvbSB0aGUgWm9kIHNjaGVtYVxuZXhwb3J0IHR5cGUgQ29kZVNlc3Npb24gPSB6LmluZmVyPFJldHVyblR5cGU8dHlwZW9mIENvZGVTZXNzaW9uU2NoZW1hPj5cblxuLyoqXG4gKiBWYWxpZGF0ZXMgYW5kIHByZXBhcmVzIGZvciBBUEkgcmVxdWVzdHNcbiAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIGFjY2VzcyB0b2tlbiBhbmQgb3JnYW5pemF0aW9uIFVVSURcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXBhcmVBcGlSZXF1ZXN0KCk6IFByb21pc2U8e1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nXG4gIG9yZ1VVSUQ6IHN0cmluZ1xufT4ge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKT8uYWNjZXNzVG9rZW5cbiAgaWYgKGFjY2Vzc1Rva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQmxhdWRlIHdlYiBzZXNzaW9ucyByZXF1aXJlIGF1dGhlbnRpY2F0aW9uIHdpdGggYSBDbGF1ZGUuYWkgYWNjb3VudC4gQVBJIGtleSBhdXRoZW50aWNhdGlvbiBpcyBub3Qgc3VmZmljaWVudC4gUGxlYXNlIHJ1biAvbG9naW4gdG8gYXV0aGVudGljYXRlLCBvciBjaGVjayB5b3VyIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyB3aXRoIC9zdGF0dXMuJyxcbiAgICApXG4gIH1cblxuICBjb25zdCBvcmdVVUlEID0gYXdhaXQgZ2V0T3JnYW5pemF0aW9uVVVJRCgpXG4gIGlmICghb3JnVVVJRCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGdldCBvcmdhbml6YXRpb24gVVVJRCcpXG4gIH1cblxuICByZXR1cm4geyBhY2Nlc3NUb2tlbiwgb3JnVVVJRCB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBjb2RlIHNlc3Npb25zIGZyb20gdGhlIG5ldyBTZXNzaW9ucyBBUEkgKC92MS9zZXNzaW9ucylcbiAqIEByZXR1cm5zIEFycmF5IG9mIGNvZGUgc2Vzc2lvbnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29kZVNlc3Npb25zRnJvbVNlc3Npb25zQVBJKCk6IFByb21pc2U8XG4gIENvZGVTZXNzaW9uW11cbj4ge1xuICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpXG5cbiAgY29uc3QgdXJsID0gYCR7Z2V0T2F1dGhDb25maWcoKS5CQVNFX0FQSV9VUkx9L3YxL3Nlc3Npb25zYFxuXG4gIHRyeSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIC4uLmdldE9BdXRoSGVhZGVycyhhY2Nlc3NUb2tlbiksXG4gICAgICAnYW50aHJvcGljLWJldGEnOiAnY2NyLWJ5b2MtMjAyNS0wNy0yOScsXG4gICAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0dldFdpdGhSZXRyeTxMaXN0U2Vzc2lvbnNSZXNwb25zZT4odXJsLCB7XG4gICAgICBoZWFkZXJzLFxuICAgIH0pXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGNvZGUgc2Vzc2lvbnM6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBTZXNzaW9uUmVzb3VyY2VbXSB0byBDb2RlU2Vzc2lvbltdIGZvcm1hdFxuICAgIGNvbnN0IHNlc3Npb25zOiBDb2RlU2Vzc2lvbltdID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcChzZXNzaW9uID0+IHtcbiAgICAgIC8vIEV4dHJhY3QgcmVwb3NpdG9yeSBpbmZvIGZyb20gZ2l0IHNvdXJjZXNcbiAgICAgIGNvbnN0IGdpdFNvdXJjZSA9IHNlc3Npb24uc2Vzc2lvbl9jb250ZXh0LnNvdXJjZXMuZmluZChcbiAgICAgICAgKHNvdXJjZSk6IHNvdXJjZSBpcyBHaXRTb3VyY2UgPT4gc291cmNlLnR5cGUgPT09ICdnaXRfcmVwb3NpdG9yeScsXG4gICAgICApXG5cbiAgICAgIGxldCByZXBvOiBDb2RlU2Vzc2lvblsncmVwbyddID0gbnVsbFxuICAgICAgaWYgKGdpdFNvdXJjZT8udXJsKSB7XG4gICAgICAgIC8vIFBhcnNlIEdpdEh1YiBVUkwgdXNpbmcgdGhlIGV4aXN0aW5nIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgcmVwb1BhdGggPSBwYXJzZUdpdEh1YlJlcG9zaXRvcnkoZ2l0U291cmNlLnVybClcbiAgICAgICAgaWYgKHJlcG9QYXRoKSB7XG4gICAgICAgICAgY29uc3QgW293bmVyLCBuYW1lXSA9IHJlcG9QYXRoLnNwbGl0KCcvJylcbiAgICAgICAgICBpZiAob3duZXIgJiYgbmFtZSkge1xuICAgICAgICAgICAgcmVwbyA9IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgb3duZXI6IHtcbiAgICAgICAgICAgICAgICBsb2dpbjogb3duZXIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRfYnJhbmNoOiBnaXRTb3VyY2UucmV2aXNpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogc2Vzc2lvbi5pZCxcbiAgICAgICAgdGl0bGU6IHNlc3Npb24udGl0bGUgfHwgJ1VudGl0bGVkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBTZXNzaW9uUmVzb3VyY2UgZG9lc24ndCBoYXZlIGRlc2NyaXB0aW9uIGZpZWxkXG4gICAgICAgIHN0YXR1czogc2Vzc2lvbi5zZXNzaW9uX3N0YXR1cyBhcyBDb2RlU2Vzc2lvblsnc3RhdHVzJ10sIC8vIE1hcCBzZXNzaW9uX3N0YXR1cyB0byBzdGF0dXNcbiAgICAgICAgcmVwbyxcbiAgICAgICAgdHVybnM6IFtdLCAvLyBTZXNzaW9uUmVzb3VyY2UgZG9lc24ndCBoYXZlIHR1cm5zIGZpZWxkXG4gICAgICAgIGNyZWF0ZWRfYXQ6IHNlc3Npb24uY3JlYXRlZF9hdCxcbiAgICAgICAgdXBkYXRlZF9hdDogc2Vzc2lvbi51cGRhdGVkX2F0LFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2Vzc2lvbnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnIgPSB0b0Vycm9yKGVycm9yKVxuICAgIGxvZ0Vycm9yKGVycilcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBPQXV0aCBoZWFkZXJzIGZvciBBUEkgcmVxdWVzdHNcbiAqIEBwYXJhbSBhY2Nlc3NUb2tlbiBUaGUgT0F1dGggYWNjZXNzIHRva2VuXG4gKiBAcmV0dXJucyBIZWFkZXJzIG9iamVjdCB3aXRoIEF1dGhvcml6YXRpb24sIENvbnRlbnQtVHlwZSwgYW5kIGFudGhyb3BpYy12ZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW46IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogJzIwMjMtMDYtMDEnLFxuICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhIHNpbmdsZSBzZXNzaW9uIGJ5IElEIGZyb20gdGhlIFNlc3Npb25zIEFQSVxuICogQHBhcmFtIHNlc3Npb25JZCBUaGUgc2Vzc2lvbiBJRCB0byBmZXRjaFxuICogQHJldHVybnMgVGhlIHNlc3Npb24gcmVzb3VyY2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU2Vzc2lvbihcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPFNlc3Npb25SZXNvdXJjZT4ge1xuICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpXG5cbiAgY29uc3QgdXJsID0gYCR7Z2V0T2F1dGhDb25maWcoKS5CQVNFX0FQSV9VUkx9L3YxL3Nlc3Npb25zLyR7c2Vzc2lvbklkfWBcbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxTZXNzaW9uUmVzb3VyY2U+KHVybCwge1xuICAgIGhlYWRlcnMsXG4gICAgdGltZW91dDogMTUwMDAsXG4gICAgdmFsaWRhdGVTdGF0dXM6IHN0YXR1cyA9PiBzdGF0dXMgPCA1MDAsXG4gIH0pXG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgLy8gRXh0cmFjdCBlcnJvciBtZXNzYWdlIGZyb20gcmVzcG9uc2UgaWYgYXZhaWxhYmxlXG4gICAgY29uc3QgZXJyb3JEYXRhID0gcmVzcG9uc2UuZGF0YSBhcyB7IGVycm9yPzogeyBtZXNzYWdlPzogc3RyaW5nIH0gfVxuICAgIGNvbnN0IGFwaU1lc3NhZ2UgPSBlcnJvckRhdGE/LmVycm9yPy5tZXNzYWdlXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2Vzc2lvbiBub3QgZm91bmQ6ICR7c2Vzc2lvbklkfWApXG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHJ1biAvbG9naW4gdG8gc2lnbiBpbiBhZ2Fpbi4nKVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGFwaU1lc3NhZ2UgfHxcbiAgICAgICAgYEZhaWxlZCB0byBmZXRjaCBzZXNzaW9uOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWAsXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZmlyc3QgYnJhbmNoIG5hbWUgZnJvbSBhIHNlc3Npb24ncyBnaXQgcmVwb3NpdG9yeSBvdXRjb21lc1xuICogQHBhcmFtIHNlc3Npb24gVGhlIHNlc3Npb24gcmVzb3VyY2UgdG8gZXh0cmFjdCBmcm9tXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgYnJhbmNoIG5hbWUsIG9yIHVuZGVmaW5lZCBpZiBub25lIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcmFuY2hGcm9tU2Vzc2lvbihcbiAgc2Vzc2lvbjogU2Vzc2lvblJlc291cmNlLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZ2l0T3V0Y29tZSA9IHNlc3Npb24uc2Vzc2lvbl9jb250ZXh0Lm91dGNvbWVzPy5maW5kKFxuICAgIChvdXRjb21lKTogb3V0Y29tZSBpcyBHaXRSZXBvc2l0b3J5T3V0Y29tZSA9PlxuICAgICAgb3V0Y29tZS50eXBlID09PSAnZ2l0X3JlcG9zaXRvcnknLFxuICApXG4gIHJldHVybiBnaXRPdXRjb21lPy5naXRfaW5mbz8uYnJhbmNoZXNbMF1cbn1cblxuLyoqXG4gKiBDb250ZW50IGZvciBhIHJlbW90ZSBzZXNzaW9uIG1lc3NhZ2UuXG4gKiBBY2NlcHRzIGEgcGxhaW4gc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNvbnRlbnQgYmxvY2tzICh0ZXh0LCBpbWFnZSwgZXRjLilcbiAqIGZvbGxvd2luZyB0aGUgQW50aHJvcGljIEFQSSBtZXNzYWdlcyBzcGVjLlxuICovXG5leHBvcnQgdHlwZSBSZW1vdGVNZXNzYWdlQ29udGVudCA9XG4gIHwgc3RyaW5nXG4gIHwgQXJyYXk8eyB0eXBlOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT5cblxuLyoqXG4gKiBTZW5kcyBhIHVzZXIgbWVzc2FnZSBldmVudCB0byBhbiBleGlzdGluZyByZW1vdGUgc2Vzc2lvbiB2aWEgdGhlIFNlc3Npb25zIEFQSVxuICogQHBhcmFtIHNlc3Npb25JZCBUaGUgc2Vzc2lvbiBJRCB0byBzZW5kIHRoZSBldmVudCB0b1xuICogQHBhcmFtIG1lc3NhZ2VDb250ZW50IFRoZSB1c2VyIG1lc3NhZ2UgY29udGVudCAoc3RyaW5nIG9yIGNvbnRlbnQgYmxvY2tzKVxuICogQHBhcmFtIG9wdHMudXVpZCBPcHRpb25hbCBVVUlEIGZvciB0aGUgZXZlbnQgXHUyMDE0IGNhbGxlcnMgdGhhdCBhZGRlZCBhIGxvY2FsXG4gKiAgIFVzZXJNZXNzYWdlIGZpcnN0IHNob3VsZCBwYXNzIGl0cyBVVUlEIHNvIGVjaG8gZmlsdGVyaW5nIGNhbiBkZWR1cFxuICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPiBUcnVlIGlmIHN1Y2Nlc3NmdWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEV2ZW50VG9SZW1vdGVTZXNzaW9uKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbiAgbWVzc2FnZUNvbnRlbnQ6IFJlbW90ZU1lc3NhZ2VDb250ZW50LFxuICBvcHRzPzogeyB1dWlkPzogc3RyaW5nIH0sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpXG5cbiAgICBjb25zdCB1cmwgPSBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L2V2ZW50c2BcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAgICd4LW9yZ2FuaXphdGlvbi11dWlkJzogb3JnVVVJRCxcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyRXZlbnQgPSB7XG4gICAgICB1dWlkOiBvcHRzPy51dWlkID8/IHJhbmRvbVVVSUQoKSxcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgIHR5cGU6ICd1c2VyJyxcbiAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICBjb250ZW50OiBtZXNzYWdlQ29udGVudCxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgICBldmVudHM6IFt1c2VyRXZlbnRdLFxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbc2VuZEV2ZW50VG9SZW1vdGVTZXNzaW9uXSBTZW5kaW5nIGV2ZW50IHRvIHNlc3Npb24gJHtzZXNzaW9uSWR9YCxcbiAgICApXG4gICAgLy8gVGhlIGVuZHBvaW50IG1heSBibG9jayB1bnRpbCB0aGUgQ0NSIHdvcmtlciBpcyByZWFkeS4gT2JzZXJ2ZWQgfjIuNnNcbiAgICAvLyBpbiBub3JtYWwgY2FzZXM7IGFsbG93IGEgZ2VuZXJvdXMgbWFyZ2luIGZvciBjb2xkLXN0YXJ0IGNvbnRhaW5lcnMuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcmVxdWVzdEJvZHksIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICB2YWxpZGF0ZVN0YXR1czogc3RhdHVzID0+IHN0YXR1cyA8IDUwMCxcbiAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgIH0pXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtzZW5kRXZlbnRUb1JlbW90ZVNlc3Npb25dIFN1Y2Nlc3NmdWxseSBzZW50IGV2ZW50IHRvIHNlc3Npb24gJHtzZXNzaW9uSWR9YCxcbiAgICAgIClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtzZW5kRXZlbnRUb1JlbW90ZVNlc3Npb25dIEZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c306ICR7anNvblN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gLFxuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtzZW5kRXZlbnRUb1JlbW90ZVNlc3Npb25dIEVycm9yOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHRpdGxlIG9mIGFuIGV4aXN0aW5nIHJlbW90ZSBzZXNzaW9uIHZpYSB0aGUgU2Vzc2lvbnMgQVBJXG4gKiBAcGFyYW0gc2Vzc2lvbklkIFRoZSBzZXNzaW9uIElEIHRvIHVwZGF0ZVxuICogQHBhcmFtIHRpdGxlIFRoZSBuZXcgdGl0bGUgZm9yIHRoZSBzZXNzaW9uXG4gKiBAcmV0dXJucyBQcm9taXNlPGJvb2xlYW4+IFRydWUgaWYgc3VjY2Vzc2Z1bCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uVGl0bGUoXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgb3JnVVVJRCB9ID0gYXdhaXQgcHJlcGFyZUFwaVJlcXVlc3QoKVxuXG4gICAgY29uc3QgdXJsID0gYCR7Z2V0T2F1dGhDb25maWcoKS5CQVNFX0FQSV9VUkx9L3YxL3Nlc3Npb25zLyR7c2Vzc2lvbklkfWBcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAgICd4LW9yZ2FuaXphdGlvbi11dWlkJzogb3JnVVVJRCxcbiAgICB9XG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW3VwZGF0ZVNlc3Npb25UaXRsZV0gVXBkYXRpbmcgdGl0bGUgZm9yIHNlc3Npb24gJHtzZXNzaW9uSWR9OiBcIiR7dGl0bGV9XCJgLFxuICAgIClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKFxuICAgICAgdXJsLFxuICAgICAgeyB0aXRsZSB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgICB2YWxpZGF0ZVN0YXR1czogc3RhdHVzID0+IHN0YXR1cyA8IDUwMCxcbiAgICAgIH0sXG4gICAgKVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbdXBkYXRlU2Vzc2lvblRpdGxlXSBTdWNjZXNzZnVsbHkgdXBkYXRlZCB0aXRsZSBmb3Igc2Vzc2lvbiAke3Nlc3Npb25JZH1gLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW3VwZGF0ZVNlc3Npb25UaXRsZV0gRmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtqc29uU3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpfWAsXG4gICAgKVxuICAgIHJldHVybiBmYWxzZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW3VwZGF0ZVNlc3Npb25UaXRsZV0gRXJyb3I6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLGtCQUFrQjtBQXNCcEIsU0FBUyx3QkFBd0IsT0FBeUI7QUFDL0QsTUFBSSxDQUFDLGNBQU0sYUFBYSxLQUFLLEdBQUc7QUFDOUIsV0FBTztBQUFBLEVBQ1Q7QUFHQSxNQUFJLENBQUMsTUFBTSxVQUFVO0FBQ25CLFdBQU87QUFBQSxFQUNUO0FBR0EsTUFBSSxNQUFNLFNBQVMsVUFBVSxLQUFLO0FBQ2hDLFdBQU87QUFBQSxFQUNUO0FBR0EsU0FBTztBQUNUO0FBTUEsZUFBc0Isa0JBQ3BCLEtBQ0EsUUFDMkI7QUFDM0IsTUFBSTtBQUVKLFdBQVMsVUFBVSxHQUFHLFdBQVcsc0JBQXNCLFdBQVc7QUFDaEUsUUFBSTtBQUNGLGFBQU8sTUFBTSxjQUFNLElBQU8sS0FBSyxNQUFNO0FBQUEsSUFDdkMsU0FBUyxPQUFPO0FBQ2Qsa0JBQVk7QUFHWixVQUFJLENBQUMsd0JBQXdCLEtBQUssR0FBRztBQUNuQyxjQUFNO0FBQUEsTUFDUjtBQUdBLFVBQUksV0FBVyxzQkFBc0I7QUFDbkM7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
