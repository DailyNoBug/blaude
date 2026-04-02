#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  extractErrorDetail,
  init_debugUtils,
  init_sessionIdCompat,
  toCompatSessionId
} from "./chunk-WKBYDC63.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/bridge/createSession.ts
async function createBridgeSession({
  environmentId,
  title,
  events,
  gitRepoUrl,
  branch,
  signal,
  baseUrl: baseUrlOverride,
  getAccessToken,
  permissionMode
}) {
  const { getClaudeAIOAuthTokens } = await import("./auth-YBLUFOGD.mjs");
  const { getOrganizationUUID } = await import("./client-7MGONUNH.mjs");
  const { getOauthConfig } = await import("./oauth-Y6DQDGXF.mjs");
  const { getOAuthHeaders } = await import("./api-KKLQOTE6.mjs");
  const { parseGitHubRepository } = await import("./detectRepository-GH7EB5ZC.mjs");
  const { getDefaultBranch } = await import("./git-VHZYAFZ7.mjs");
  const { getMainLoopModel } = await import("./model-XX6VETIU.mjs");
  const { default: axios } = await import("./axios-4ULVYFUT.mjs");
  const accessToken = getAccessToken?.() ?? getClaudeAIOAuthTokens()?.accessToken;
  if (!accessToken) {
    logForDebugging("[bridge] No access token for session creation");
    return null;
  }
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    logForDebugging("[bridge] No org UUID for session creation");
    return null;
  }
  let gitSource = null;
  let gitOutcome = null;
  if (gitRepoUrl) {
    const { parseGitRemote } = await import("./detectRepository-GH7EB5ZC.mjs");
    const parsed = parseGitRemote(gitRepoUrl);
    if (parsed) {
      const { host, owner, name } = parsed;
      const revision = branch || await getDefaultBranch() || void 0;
      gitSource = {
        type: "git_repository",
        url: `https://${host}/${owner}/${name}`,
        revision
      };
      gitOutcome = {
        type: "git_repository",
        git_info: {
          type: "github",
          repo: `${owner}/${name}`,
          branches: [`claude/${branch || "task"}`]
        }
      };
    } else {
      const ownerRepo = parseGitHubRepository(gitRepoUrl);
      if (ownerRepo) {
        const [owner, name] = ownerRepo.split("/");
        if (owner && name) {
          const revision = branch || await getDefaultBranch() || void 0;
          gitSource = {
            type: "git_repository",
            url: `https://github.com/${owner}/${name}`,
            revision
          };
          gitOutcome = {
            type: "git_repository",
            git_info: {
              type: "github",
              repo: `${owner}/${name}`,
              branches: [`claude/${branch || "task"}`]
            }
          };
        }
      }
    }
  }
  const requestBody = {
    ...title !== void 0 && { title },
    events,
    session_context: {
      sources: gitSource ? [gitSource] : [],
      outcomes: gitOutcome ? [gitOutcome] : [],
      model: getMainLoopModel()
    },
    environment_id: environmentId,
    source: "remote-control",
    ...permissionMode && { permission_mode: permissionMode }
  };
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": "ccr-byoc-2025-07-29",
    "x-organization-uuid": orgUUID
  };
  const url = `${baseUrlOverride ?? getOauthConfig().BASE_API_URL}/v1/sessions`;
  let response;
  try {
    response = await axios.post(url, requestBody, {
      headers,
      signal,
      validateStatus: (s) => s < 500
    });
  } catch (err) {
    logForDebugging(
      `[bridge] Session creation request failed: ${errorMessage(err)}`
    );
    return null;
  }
  const isSuccess = response.status === 200 || response.status === 201;
  if (!isSuccess) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(
      `[bridge] Session creation failed with status ${response.status}${detail ? `: ${detail}` : ""}`
    );
    return null;
  }
  const sessionData = response.data;
  if (!sessionData || typeof sessionData !== "object" || !("id" in sessionData) || typeof sessionData.id !== "string") {
    logForDebugging("[bridge] No session ID in response");
    return null;
  }
  return sessionData.id;
}
async function getBridgeSession(sessionId, opts) {
  const { getClaudeAIOAuthTokens } = await import("./auth-YBLUFOGD.mjs");
  const { getOrganizationUUID } = await import("./client-7MGONUNH.mjs");
  const { getOauthConfig } = await import("./oauth-Y6DQDGXF.mjs");
  const { getOAuthHeaders } = await import("./api-KKLQOTE6.mjs");
  const { default: axios } = await import("./axios-4ULVYFUT.mjs");
  const accessToken = opts?.getAccessToken?.() ?? getClaudeAIOAuthTokens()?.accessToken;
  if (!accessToken) {
    logForDebugging("[bridge] No access token for session fetch");
    return null;
  }
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    logForDebugging("[bridge] No org UUID for session fetch");
    return null;
  }
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": "ccr-byoc-2025-07-29",
    "x-organization-uuid": orgUUID
  };
  const url = `${opts?.baseUrl ?? getOauthConfig().BASE_API_URL}/v1/sessions/${sessionId}`;
  logForDebugging(`[bridge] Fetching session ${sessionId}`);
  let response;
  try {
    response = await axios.get(
      url,
      { headers, timeout: 1e4, validateStatus: (s) => s < 500 }
    );
  } catch (err) {
    logForDebugging(
      `[bridge] Session fetch request failed: ${errorMessage(err)}`
    );
    return null;
  }
  if (response.status !== 200) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(
      `[bridge] Session fetch failed with status ${response.status}${detail ? `: ${detail}` : ""}`
    );
    return null;
  }
  return response.data;
}
async function archiveBridgeSession(sessionId, opts) {
  const { getClaudeAIOAuthTokens } = await import("./auth-YBLUFOGD.mjs");
  const { getOrganizationUUID } = await import("./client-7MGONUNH.mjs");
  const { getOauthConfig } = await import("./oauth-Y6DQDGXF.mjs");
  const { getOAuthHeaders } = await import("./api-KKLQOTE6.mjs");
  const { default: axios } = await import("./axios-4ULVYFUT.mjs");
  const accessToken = opts?.getAccessToken?.() ?? getClaudeAIOAuthTokens()?.accessToken;
  if (!accessToken) {
    logForDebugging("[bridge] No access token for session archive");
    return;
  }
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    logForDebugging("[bridge] No org UUID for session archive");
    return;
  }
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": "ccr-byoc-2025-07-29",
    "x-organization-uuid": orgUUID
  };
  const url = `${opts?.baseUrl ?? getOauthConfig().BASE_API_URL}/v1/sessions/${sessionId}/archive`;
  logForDebugging(`[bridge] Archiving session ${sessionId}`);
  const response = await axios.post(
    url,
    {},
    {
      headers,
      timeout: opts?.timeoutMs ?? 1e4,
      validateStatus: (s) => s < 500
    }
  );
  if (response.status === 200) {
    logForDebugging(`[bridge] Session ${sessionId} archived successfully`);
  } else {
    const detail = extractErrorDetail(response.data);
    logForDebugging(
      `[bridge] Session archive failed with status ${response.status}${detail ? `: ${detail}` : ""}`
    );
  }
}
async function updateBridgeSessionTitle(sessionId, title, opts) {
  const { getClaudeAIOAuthTokens } = await import("./auth-YBLUFOGD.mjs");
  const { getOrganizationUUID } = await import("./client-7MGONUNH.mjs");
  const { getOauthConfig } = await import("./oauth-Y6DQDGXF.mjs");
  const { getOAuthHeaders } = await import("./api-KKLQOTE6.mjs");
  const { default: axios } = await import("./axios-4ULVYFUT.mjs");
  const accessToken = opts?.getAccessToken?.() ?? getClaudeAIOAuthTokens()?.accessToken;
  if (!accessToken) {
    logForDebugging("[bridge] No access token for session title update");
    return;
  }
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    logForDebugging("[bridge] No org UUID for session title update");
    return;
  }
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": "ccr-byoc-2025-07-29",
    "x-organization-uuid": orgUUID
  };
  const compatId = toCompatSessionId(sessionId);
  const url = `${opts?.baseUrl ?? getOauthConfig().BASE_API_URL}/v1/sessions/${compatId}`;
  logForDebugging(`[bridge] Updating session title: ${compatId} \u2192 ${title}`);
  try {
    const response = await axios.patch(
      url,
      { title },
      { headers, timeout: 1e4, validateStatus: (s) => s < 500 }
    );
    if (response.status === 200) {
      logForDebugging(`[bridge] Session title updated successfully`);
    } else {
      const detail = extractErrorDetail(response.data);
      logForDebugging(
        `[bridge] Session title update failed with status ${response.status}${detail ? `: ${detail}` : ""}`
      );
    }
  } catch (err) {
    logForDebugging(
      `[bridge] Session title update request failed: ${errorMessage(err)}`
    );
  }
}
var init_createSession = __esm({
  "src/bridge/createSession.ts"() {
    init_debug();
    init_errors();
    init_debugUtils();
    init_sessionIdCompat();
  }
});

export {
  createBridgeSession,
  getBridgeSession,
  archiveBridgeSession,
  updateBridgeSessionTitle,
  init_createSession
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2JyaWRnZS9jcmVhdGVTZXNzaW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IFNES01lc3NhZ2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleHRyYWN0RXJyb3JEZXRhaWwgfSBmcm9tICcuL2RlYnVnVXRpbHMuanMnXG5pbXBvcnQgeyB0b0NvbXBhdFNlc3Npb25JZCB9IGZyb20gJy4vc2Vzc2lvbklkQ29tcGF0LmpzJ1xuXG50eXBlIEdpdFNvdXJjZSA9IHtcbiAgdHlwZTogJ2dpdF9yZXBvc2l0b3J5J1xuICB1cmw6IHN0cmluZ1xuICByZXZpc2lvbj86IHN0cmluZ1xufVxuXG50eXBlIEdpdE91dGNvbWUgPSB7XG4gIHR5cGU6ICdnaXRfcmVwb3NpdG9yeSdcbiAgZ2l0X2luZm86IHsgdHlwZTogJ2dpdGh1Yic7IHJlcG86IHN0cmluZzsgYnJhbmNoZXM6IHN0cmluZ1tdIH1cbn1cblxuLy8gRXZlbnRzIG11c3QgYmUgd3JhcHBlZCBpbiB7IHR5cGU6ICdldmVudCcsIGRhdGE6IDxzZGtfbWVzc2FnZT4gfSBmb3IgdGhlXG4vLyBQT1NUIC92MS9zZXNzaW9ucyBlbmRwb2ludCAoZGlzY3JpbWluYXRlZCB1bmlvbiBmb3JtYXQpLlxudHlwZSBTZXNzaW9uRXZlbnQgPSB7XG4gIHR5cGU6ICdldmVudCdcbiAgZGF0YTogU0RLTWVzc2FnZVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNlc3Npb24gb24gYSBicmlkZ2UgZW52aXJvbm1lbnQgdmlhIFBPU1QgL3YxL3Nlc3Npb25zLlxuICpcbiAqIFVzZWQgYnkgYm90aCBgY2xhdWRlIHJlbW90ZS1jb250cm9sYCAoZW1wdHkgc2Vzc2lvbiBzbyB0aGUgdXNlciBoYXMgc29tZXdoZXJlIHRvXG4gKiB0eXBlIGltbWVkaWF0ZWx5KSBhbmQgYC9yZW1vdGUtY29udHJvbGAgKHNlc3Npb24gcHJlLXBvcHVsYXRlZCB3aXRoIGNvbnZlcnNhdGlvblxuICogaGlzdG9yeSkuXG4gKlxuICogUmV0dXJucyB0aGUgc2Vzc2lvbiBJRCBvbiBzdWNjZXNzLCBvciBudWxsIGlmIGNyZWF0aW9uIGZhaWxzIChub24tZmF0YWwpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJpZGdlU2Vzc2lvbih7XG4gIGVudmlyb25tZW50SWQsXG4gIHRpdGxlLFxuICBldmVudHMsXG4gIGdpdFJlcG9VcmwsXG4gIGJyYW5jaCxcbiAgc2lnbmFsLFxuICBiYXNlVXJsOiBiYXNlVXJsT3ZlcnJpZGUsXG4gIGdldEFjY2Vzc1Rva2VuLFxuICBwZXJtaXNzaW9uTW9kZSxcbn06IHtcbiAgZW52aXJvbm1lbnRJZDogc3RyaW5nXG4gIHRpdGxlPzogc3RyaW5nXG4gIGV2ZW50czogU2Vzc2lvbkV2ZW50W11cbiAgZ2l0UmVwb1VybDogc3RyaW5nIHwgbnVsbFxuICBicmFuY2g6IHN0cmluZ1xuICBzaWduYWw6IEFib3J0U2lnbmFsXG4gIGJhc2VVcmw/OiBzdHJpbmdcbiAgZ2V0QWNjZXNzVG9rZW4/OiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgcGVybWlzc2lvbk1vZGU/OiBzdHJpbmdcbn0pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgeyBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2F1dGguanMnKVxuICBjb25zdCB7IGdldE9yZ2FuaXphdGlvblVVSUQgfSA9IGF3YWl0IGltcG9ydCgnLi4vc2VydmljZXMvb2F1dGgvY2xpZW50LmpzJylcbiAgY29uc3QgeyBnZXRPYXV0aENvbmZpZyB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb25zdGFudHMvb2F1dGguanMnKVxuICBjb25zdCB7IGdldE9BdXRoSGVhZGVycyB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy90ZWxlcG9ydC9hcGkuanMnKVxuICBjb25zdCB7IHBhcnNlR2l0SHViUmVwb3NpdG9yeSB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9kZXRlY3RSZXBvc2l0b3J5LmpzJylcbiAgY29uc3QgeyBnZXREZWZhdWx0QnJhbmNoIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2dpdC5qcycpXG4gIGNvbnN0IHsgZ2V0TWFpbkxvb3BNb2RlbCB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9tb2RlbC9tb2RlbC5qcycpXG4gIGNvbnN0IHsgZGVmYXVsdDogYXhpb3MgfSA9IGF3YWl0IGltcG9ydCgnYXhpb3MnKVxuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID1cbiAgICBnZXRBY2Nlc3NUb2tlbj8uKCkgPz8gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpPy5hY2Nlc3NUb2tlblxuICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlXSBObyBhY2Nlc3MgdG9rZW4gZm9yIHNlc3Npb24gY3JlYXRpb24nKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBvcmdVVUlEID0gYXdhaXQgZ2V0T3JnYW5pemF0aW9uVVVJRCgpXG4gIGlmICghb3JnVVVJRCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZV0gTm8gb3JnIFVVSUQgZm9yIHNlc3Npb24gY3JlYXRpb24nKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBCdWlsZCBnaXQgc291cmNlIGFuZCBvdXRjb21lIGNvbnRleHRcbiAgbGV0IGdpdFNvdXJjZTogR2l0U291cmNlIHwgbnVsbCA9IG51bGxcbiAgbGV0IGdpdE91dGNvbWU6IEdpdE91dGNvbWUgfCBudWxsID0gbnVsbFxuXG4gIGlmIChnaXRSZXBvVXJsKSB7XG4gICAgY29uc3QgeyBwYXJzZUdpdFJlbW90ZSB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9kZXRlY3RSZXBvc2l0b3J5LmpzJylcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUdpdFJlbW90ZShnaXRSZXBvVXJsKVxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHsgaG9zdCwgb3duZXIsIG5hbWUgfSA9IHBhcnNlZFxuICAgICAgY29uc3QgcmV2aXNpb24gPSBicmFuY2ggfHwgKGF3YWl0IGdldERlZmF1bHRCcmFuY2goKSkgfHwgdW5kZWZpbmVkXG4gICAgICBnaXRTb3VyY2UgPSB7XG4gICAgICAgIHR5cGU6ICdnaXRfcmVwb3NpdG9yeScsXG4gICAgICAgIHVybDogYGh0dHBzOi8vJHtob3N0fS8ke293bmVyfS8ke25hbWV9YCxcbiAgICAgICAgcmV2aXNpb24sXG4gICAgICB9XG4gICAgICBnaXRPdXRjb21lID0ge1xuICAgICAgICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknLFxuICAgICAgICBnaXRfaW5mbzoge1xuICAgICAgICAgIHR5cGU6ICdnaXRodWInLFxuICAgICAgICAgIHJlcG86IGAke293bmVyfS8ke25hbWV9YCxcbiAgICAgICAgICBicmFuY2hlczogW2BjbGF1ZGUvJHticmFuY2ggfHwgJ3Rhc2snfWBdLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjazogdHJ5IHBhcnNlR2l0SHViUmVwb3NpdG9yeSBmb3Igb3duZXIvcmVwbyBmb3JtYXRcbiAgICAgIGNvbnN0IG93bmVyUmVwbyA9IHBhcnNlR2l0SHViUmVwb3NpdG9yeShnaXRSZXBvVXJsKVxuICAgICAgaWYgKG93bmVyUmVwbykge1xuICAgICAgICBjb25zdCBbb3duZXIsIG5hbWVdID0gb3duZXJSZXBvLnNwbGl0KCcvJylcbiAgICAgICAgaWYgKG93bmVyICYmIG5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZXZpc2lvbiA9IGJyYW5jaCB8fCAoYXdhaXQgZ2V0RGVmYXVsdEJyYW5jaCgpKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICBnaXRTb3VyY2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknLFxuICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9naXRodWIuY29tLyR7b3duZXJ9LyR7bmFtZX1gLFxuICAgICAgICAgICAgcmV2aXNpb24sXG4gICAgICAgICAgfVxuICAgICAgICAgIGdpdE91dGNvbWUgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZ2l0X3JlcG9zaXRvcnknLFxuICAgICAgICAgICAgZ2l0X2luZm86IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2dpdGh1YicsXG4gICAgICAgICAgICAgIHJlcG86IGAke293bmVyfS8ke25hbWV9YCxcbiAgICAgICAgICAgICAgYnJhbmNoZXM6IFtgY2xhdWRlLyR7YnJhbmNoIHx8ICd0YXNrJ31gXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgLi4uKHRpdGxlICE9PSB1bmRlZmluZWQgJiYgeyB0aXRsZSB9KSxcbiAgICBldmVudHMsXG4gICAgc2Vzc2lvbl9jb250ZXh0OiB7XG4gICAgICBzb3VyY2VzOiBnaXRTb3VyY2UgPyBbZ2l0U291cmNlXSA6IFtdLFxuICAgICAgb3V0Y29tZXM6IGdpdE91dGNvbWUgPyBbZ2l0T3V0Y29tZV0gOiBbXSxcbiAgICAgIG1vZGVsOiBnZXRNYWluTG9vcE1vZGVsKCksXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudF9pZDogZW52aXJvbm1lbnRJZCxcbiAgICBzb3VyY2U6ICdyZW1vdGUtY29udHJvbCcsXG4gICAgLi4uKHBlcm1pc3Npb25Nb2RlICYmIHsgcGVybWlzc2lvbl9tb2RlOiBwZXJtaXNzaW9uTW9kZSB9KSxcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAnYW50aHJvcGljLWJldGEnOiAnY2NyLWJ5b2MtMjAyNS0wNy0yOScsXG4gICAgJ3gtb3JnYW5pemF0aW9uLXV1aWQnOiBvcmdVVUlELFxuICB9XG5cbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybE92ZXJyaWRlID8/IGdldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMfS92MS9zZXNzaW9uc2BcbiAgbGV0IHJlc3BvbnNlXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcmVxdWVzdEJvZHksIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICBzaWduYWwsXG4gICAgICB2YWxpZGF0ZVN0YXR1czogcyA9PiBzIDwgNTAwLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIGNyZWF0aW9uIHJlcXVlc3QgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgaXNTdWNjZXNzID0gcmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDFcblxuICBpZiAoIWlzU3VjY2Vzcykge1xuICAgIGNvbnN0IGRldGFpbCA9IGV4dHJhY3RFcnJvckRldGFpbChyZXNwb25zZS5kYXRhKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIGNyZWF0aW9uIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30ke2RldGFpbCA/IGA6ICR7ZGV0YWlsfWAgOiAnJ31gLFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbkRhdGE6IHVua25vd24gPSByZXNwb25zZS5kYXRhXG4gIGlmIChcbiAgICAhc2Vzc2lvbkRhdGEgfHxcbiAgICB0eXBlb2Ygc2Vzc2lvbkRhdGEgIT09ICdvYmplY3QnIHx8XG4gICAgISgnaWQnIGluIHNlc3Npb25EYXRhKSB8fFxuICAgIHR5cGVvZiBzZXNzaW9uRGF0YS5pZCAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlXSBObyBzZXNzaW9uIElEIGluIHJlc3BvbnNlJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlc3Npb25EYXRhLmlkXG59XG5cbi8qKlxuICogRmV0Y2ggYSBicmlkZ2Ugc2Vzc2lvbiB2aWEgR0VUIC92MS9zZXNzaW9ucy97aWR9LlxuICpcbiAqIFJldHVybnMgdGhlIHNlc3Npb24ncyBlbnZpcm9ubWVudF9pZCAoZm9yIGAtLXNlc3Npb24taWRgIHJlc3VtZSkgYW5kIHRpdGxlLlxuICogVXNlcyB0aGUgc2FtZSBvcmctc2NvcGVkIGhlYWRlcnMgYXMgY3JlYXRlL2FyY2hpdmUgXHUyMDE0IHRoZSBlbnZpcm9ubWVudHMtbGV2ZWxcbiAqIGNsaWVudCBpbiBicmlkZ2VBcGkudHMgdXNlcyBhIGRpZmZlcmVudCBiZXRhIGhlYWRlciBhbmQgbm8gb3JnIFVVSUQsIHdoaWNoXG4gKiBtYWtlcyB0aGUgU2Vzc2lvbnMgQVBJIHJldHVybiA0MDQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCcmlkZ2VTZXNzaW9uKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbiAgb3B0cz86IHsgYmFzZVVybD86IHN0cmluZzsgZ2V0QWNjZXNzVG9rZW4/OiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgfSxcbik6IFByb21pc2U8eyBlbnZpcm9ubWVudF9pZD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmcgfSB8IG51bGw+IHtcbiAgY29uc3QgeyBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2F1dGguanMnKVxuICBjb25zdCB7IGdldE9yZ2FuaXphdGlvblVVSUQgfSA9IGF3YWl0IGltcG9ydCgnLi4vc2VydmljZXMvb2F1dGgvY2xpZW50LmpzJylcbiAgY29uc3QgeyBnZXRPYXV0aENvbmZpZyB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb25zdGFudHMvb2F1dGguanMnKVxuICBjb25zdCB7IGdldE9BdXRoSGVhZGVycyB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy90ZWxlcG9ydC9hcGkuanMnKVxuICBjb25zdCB7IGRlZmF1bHQ6IGF4aW9zIH0gPSBhd2FpdCBpbXBvcnQoJ2F4aW9zJylcblxuICBjb25zdCBhY2Nlc3NUb2tlbiA9XG4gICAgb3B0cz8uZ2V0QWNjZXNzVG9rZW4/LigpID8/IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKT8uYWNjZXNzVG9rZW5cbiAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZV0gTm8gYWNjZXNzIHRva2VuIGZvciBzZXNzaW9uIGZldGNoJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgb3JnVVVJRCA9IGF3YWl0IGdldE9yZ2FuaXphdGlvblVVSUQoKVxuICBpZiAoIW9yZ1VVSUQpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2VdIE5vIG9yZyBVVUlEIGZvciBzZXNzaW9uIGZldGNoJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gIH1cblxuICBjb25zdCB1cmwgPSBgJHtvcHRzPy5iYXNlVXJsID8/IGdldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMfS92MS9zZXNzaW9ucy8ke3Nlc3Npb25JZH1gXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZV0gRmV0Y2hpbmcgc2Vzc2lvbiAke3Nlc3Npb25JZH1gKVxuXG4gIGxldCByZXNwb25zZVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PHsgZW52aXJvbm1lbnRfaWQ/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nIH0+KFxuICAgICAgdXJsLFxuICAgICAgeyBoZWFkZXJzLCB0aW1lb3V0OiAxMF8wMDAsIHZhbGlkYXRlU3RhdHVzOiBzID0+IHMgPCA1MDAgfSxcbiAgICApXG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIGZldGNoIHJlcXVlc3QgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICBjb25zdCBkZXRhaWwgPSBleHRyYWN0RXJyb3JEZXRhaWwocmVzcG9uc2UuZGF0YSlcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZV0gU2Vzc2lvbiBmZXRjaCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9JHtkZXRhaWwgPyBgOiAke2RldGFpbH1gIDogJyd9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbi8qKlxuICogQXJjaGl2ZSBhIGJyaWRnZSBzZXNzaW9uIHZpYSBQT1NUIC92MS9zZXNzaW9ucy97aWR9L2FyY2hpdmUuXG4gKlxuICogVGhlIENDUiBzZXJ2ZXIgbmV2ZXIgYXV0by1hcmNoaXZlcyBzZXNzaW9ucyBcdTIwMTQgYXJjaGl2YWwgaXMgYWx3YXlzIGFuXG4gKiBleHBsaWNpdCBjbGllbnQgYWN0aW9uLiBCb3RoIGBjbGF1ZGUgcmVtb3RlLWNvbnRyb2xgIChzdGFuZGFsb25lIGJyaWRnZSkgYW5kIHRoZVxuICogYWx3YXlzLW9uIGAvcmVtb3RlLWNvbnRyb2xgIFJFUEwgYnJpZGdlIGNhbGwgdGhpcyBkdXJpbmcgc2h1dGRvd24gdG8gYXJjaGl2ZSBhbnlcbiAqIHNlc3Npb25zIHRoYXQgYXJlIHN0aWxsIGFsaXZlLlxuICpcbiAqIFRoZSBhcmNoaXZlIGVuZHBvaW50IGFjY2VwdHMgc2Vzc2lvbnMgaW4gYW55IHN0YXR1cyAocnVubmluZywgaWRsZSxcbiAqIHJlcXVpcmVzX2FjdGlvbiwgcGVuZGluZykgYW5kIHJldHVybnMgNDA5IGlmIGFscmVhZHkgYXJjaGl2ZWQsIG1ha2luZ1xuICogaXQgc2FmZSB0byBjYWxsIGV2ZW4gaWYgdGhlIHNlcnZlci1zaWRlIHJ1bm5lciBhbHJlYWR5IGFyY2hpdmVkIHRoZVxuICogc2Vzc2lvbi5cbiAqXG4gKiBDYWxsZXJzIG11c3QgaGFuZGxlIGVycm9ycyBcdTIwMTQgdGhpcyBmdW5jdGlvbiBoYXMgbm8gdHJ5L2NhdGNoOyA1eHgsXG4gKiB0aW1lb3V0cywgYW5kIG5ldHdvcmsgZXJyb3JzIHRocm93LiBBcmNoaXZhbCBpcyBiZXN0LWVmZm9ydCBkdXJpbmdcbiAqIGNsZWFudXA7IGNhbGwgc2l0ZXMgd3JhcCB3aXRoIC5jYXRjaCgpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXJjaGl2ZUJyaWRnZVNlc3Npb24oXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICBvcHRzPzoge1xuICAgIGJhc2VVcmw/OiBzdHJpbmdcbiAgICBnZXRBY2Nlc3NUb2tlbj86ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIHRpbWVvdXRNcz86IG51bWJlclxuICB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucyB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9hdXRoLmpzJylcbiAgY29uc3QgeyBnZXRPcmdhbml6YXRpb25VVUlEIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3NlcnZpY2VzL29hdXRoL2NsaWVudC5qcycpXG4gIGNvbnN0IHsgZ2V0T2F1dGhDb25maWcgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29uc3RhbnRzL29hdXRoLmpzJylcbiAgY29uc3QgeyBnZXRPQXV0aEhlYWRlcnMgfSA9IGF3YWl0IGltcG9ydCgnLi4vdXRpbHMvdGVsZXBvcnQvYXBpLmpzJylcbiAgY29uc3QgeyBkZWZhdWx0OiBheGlvcyB9ID0gYXdhaXQgaW1wb3J0KCdheGlvcycpXG5cbiAgY29uc3QgYWNjZXNzVG9rZW4gPVxuICAgIG9wdHM/LmdldEFjY2Vzc1Rva2VuPy4oKSA/PyBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zKCk/LmFjY2Vzc1Rva2VuXG4gIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2VdIE5vIGFjY2VzcyB0b2tlbiBmb3Igc2Vzc2lvbiBhcmNoaXZlJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IG9yZ1VVSUQgPSBhd2FpdCBnZXRPcmdhbml6YXRpb25VVUlEKClcbiAgaWYgKCFvcmdVVUlEKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlXSBObyBvcmcgVVVJRCBmb3Igc2Vzc2lvbiBhcmNoaXZlJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAnYW50aHJvcGljLWJldGEnOiAnY2NyLWJ5b2MtMjAyNS0wNy0yOScsXG4gICAgJ3gtb3JnYW5pemF0aW9uLXV1aWQnOiBvcmdVVUlELFxuICB9XG5cbiAgY29uc3QgdXJsID0gYCR7b3B0cz8uYmFzZVVybCA/PyBnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L2FyY2hpdmVgXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZV0gQXJjaGl2aW5nIHNlc3Npb24gJHtzZXNzaW9uSWR9YClcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgdXJsLFxuICAgIHt9LFxuICAgIHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICB0aW1lb3V0OiBvcHRzPy50aW1lb3V0TXMgPz8gMTBfMDAwLFxuICAgICAgdmFsaWRhdGVTdGF0dXM6IHMgPT4gcyA8IDUwMCxcbiAgICB9LFxuICApXG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlXSBTZXNzaW9uICR7c2Vzc2lvbklkfSBhcmNoaXZlZCBzdWNjZXNzZnVsbHlgKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRldGFpbCA9IGV4dHJhY3RFcnJvckRldGFpbChyZXNwb25zZS5kYXRhKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIGFyY2hpdmUgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSR7ZGV0YWlsID8gYDogJHtkZXRhaWx9YCA6ICcnfWAsXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSB0aXRsZSBvZiBhIGJyaWRnZSBzZXNzaW9uIHZpYSBQQVRDSCAvdjEvc2Vzc2lvbnMve2lkfS5cbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciByZW5hbWVzIGEgc2Vzc2lvbiB2aWEgL3JlbmFtZSB3aGlsZSBhIGJyaWRnZVxuICogY29ubmVjdGlvbiBpcyBhY3RpdmUsIHNvIHRoZSB0aXRsZSBzdGF5cyBpbiBzeW5jIG9uIGNsYXVkZS5haS9jb2RlLlxuICpcbiAqIEVycm9ycyBhcmUgc3dhbGxvd2VkIFx1MjAxNCB0aXRsZSBzeW5jIGlzIGJlc3QtZWZmb3J0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnJpZGdlU2Vzc2lvblRpdGxlKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgb3B0cz86IHsgYmFzZVVybD86IHN0cmluZzsgZ2V0QWNjZXNzVG9rZW4/OiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGdldENsYXVkZUFJT0F1dGhUb2tlbnMgfSA9IGF3YWl0IGltcG9ydCgnLi4vdXRpbHMvYXV0aC5qcycpXG4gIGNvbnN0IHsgZ2V0T3JnYW5pemF0aW9uVVVJRCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9zZXJ2aWNlcy9vYXV0aC9jbGllbnQuanMnKVxuICBjb25zdCB7IGdldE9hdXRoQ29uZmlnIH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbnN0YW50cy9vYXV0aC5qcycpXG4gIGNvbnN0IHsgZ2V0T0F1dGhIZWFkZXJzIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL3RlbGVwb3J0L2FwaS5qcycpXG4gIGNvbnN0IHsgZGVmYXVsdDogYXhpb3MgfSA9IGF3YWl0IGltcG9ydCgnYXhpb3MnKVxuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID1cbiAgICBvcHRzPy5nZXRBY2Nlc3NUb2tlbj8uKCkgPz8gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpPy5hY2Nlc3NUb2tlblxuICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlXSBObyBhY2Nlc3MgdG9rZW4gZm9yIHNlc3Npb24gdGl0bGUgdXBkYXRlJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IG9yZ1VVSUQgPSBhd2FpdCBnZXRPcmdhbml6YXRpb25VVUlEKClcbiAgaWYgKCFvcmdVVUlEKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlXSBObyBvcmcgVVVJRCBmb3Igc2Vzc2lvbiB0aXRsZSB1cGRhdGUnKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICdhbnRocm9waWMtYmV0YSc6ICdjY3ItYnlvYy0yMDI1LTA3LTI5JyxcbiAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gIH1cblxuICAvLyBDb21wYXQgZ2F0ZXdheSBvbmx5IGFjY2VwdHMgc2Vzc2lvbl8qIChjb21wYXQvY29udmVydC5nbzoyNykuIHYyIGNhbGxlcnNcbiAgLy8gcGFzcyByYXcgY3NlXyo7IHJldGFnIGhlcmUgc28gYWxsIGNhbGxlcnMgY2FuIHBhc3Mgd2hhdGV2ZXIgdGhleSBob2xkLlxuICAvLyBJZGVtcG90ZW50IGZvciB2MSdzIHNlc3Npb25fKiBhbmQgYnJpZGdlTWFpbidzIHByZS1jb252ZXJ0ZWQgY29tcGF0U2Vzc2lvbklkLlxuICBjb25zdCBjb21wYXRJZCA9IHRvQ29tcGF0U2Vzc2lvbklkKHNlc3Npb25JZClcbiAgY29uc3QgdXJsID0gYCR7b3B0cz8uYmFzZVVybCA/PyBnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvc2Vzc2lvbnMvJHtjb21wYXRJZH1gXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZV0gVXBkYXRpbmcgc2Vzc2lvbiB0aXRsZTogJHtjb21wYXRJZH0gXHUyMTkyICR7dGl0bGV9YClcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXG4gICAgICB1cmwsXG4gICAgICB7IHRpdGxlIH0sXG4gICAgICB7IGhlYWRlcnMsIHRpbWVvdXQ6IDEwXzAwMCwgdmFsaWRhdGVTdGF0dXM6IHMgPT4gcyA8IDUwMCB9LFxuICAgIClcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlXSBTZXNzaW9uIHRpdGxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGV0YWlsID0gZXh0cmFjdEVycm9yRGV0YWlsKHJlc3BvbnNlLmRhdGEpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIHRpdGxlIHVwZGF0ZSBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9JHtkZXRhaWwgPyBgOiAke2RldGFpbH1gIDogJyd9YCxcbiAgICAgIClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlXSBTZXNzaW9uIHRpdGxlIHVwZGF0ZSByZXF1ZXN0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
