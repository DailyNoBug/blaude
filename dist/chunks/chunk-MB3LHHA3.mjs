#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  MAX_TRANSCRIPT_READ_BYTES,
  TextInput,
  asSystemPrompt,
  extractTeammateTranscriptsFromTasks,
  getLastAssistantMessage,
  getTranscriptPath,
  init_TextInput,
  init_claude,
  init_errors,
  init_messages2 as init_messages,
  init_sessionStorage,
  init_systemPromptType,
  loadAllSubagentTranscriptsFromDisk,
  normalizeMessagesForAPI,
  queryHaiku,
  startsWithApiErrorPrefix
} from "./chunk-BQ2W5UUK.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-UPQJMBLU.mjs";
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
} from "./chunk-36ZVP56J.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-EL6ZMCGB.mjs";
import {
  ThemedBox_default,
  ThemedText,
  init_ink,
  use_input_default
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  useCallback,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getAuthHeaders,
  getUserAgent,
  init_auth,
  init_http
} from "./chunk-JQ55XPLZ.mjs";
import {
  env,
  init_env
} from "./chunk-TR6BOGPZ.mjs";
import {
  init_firstPartyEventLogger,
  logEventTo1P
} from "./chunk-KTLUBGNP.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  getGitState,
  getIsGit,
  init_git
} from "./chunk-SF3TOBTZ.mjs";
import {
  getInMemoryErrors,
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getLastAPIRequest,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/Feedback.tsx
import { readFile, stat } from "fs/promises";
function redactSensitiveInfo(text) {
  let redacted = text;
  redacted = redacted.replace(/"(sk-ant[^\s"']{24,})"/g, '"[REDACTED_API_KEY]"');
  redacted = redacted.replace(
    // eslint-disable-next-line custom-rules/no-lookbehind-regex -- .replace(re, string) on /bug path: no-match returns same string (Object.is)
    /(?<![A-Za-z0-9"'])(sk-ant-?[A-Za-z0-9_-]{10,})(?![A-Za-z0-9"'])/g,
    "[REDACTED_API_KEY]"
  );
  redacted = redacted.replace(/AWS key: "(AWS[A-Z0-9]{20,})"/g, 'AWS key: "[REDACTED_AWS_KEY]"');
  redacted = redacted.replace(/(AKIA[A-Z0-9]{16})/g, "[REDACTED_AWS_KEY]");
  redacted = redacted.replace(
    // eslint-disable-next-line custom-rules/no-lookbehind-regex -- same as above
    /(?<![A-Za-z0-9])(AIza[A-Za-z0-9_-]{35})(?![A-Za-z0-9])/g,
    "[REDACTED_GCP_KEY]"
  );
  redacted = redacted.replace(
    // eslint-disable-next-line custom-rules/no-lookbehind-regex -- same as above
    /(?<![A-Za-z0-9])([a-z0-9-]+@[a-z0-9-]+\.iam\.gserviceaccount\.com)(?![A-Za-z0-9])/g,
    "[REDACTED_GCP_SERVICE_ACCOUNT]"
  );
  redacted = redacted.replace(/(["']?x-api-key["']?\s*[:=]\s*["']?)[^"',\s)}\]]+/gi, "$1[REDACTED_API_KEY]");
  redacted = redacted.replace(/(["']?authorization["']?\s*[:=]\s*["']?(bearer\s+)?)[^"',\s)}\]]+/gi, "$1[REDACTED_TOKEN]");
  redacted = redacted.replace(/(AWS[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_AWS_VALUE]");
  redacted = redacted.replace(/(GOOGLE[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_GCP_VALUE]");
  redacted = redacted.replace(/((API[-_]?KEY|TOKEN|SECRET|PASSWORD)\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED]");
  return redacted;
}
function getSanitizedErrorLogs() {
  return getInMemoryErrors().map((errorInfo) => {
    const errorCopy = {
      ...errorInfo
    };
    if (errorCopy && typeof errorCopy.error === "string") {
      errorCopy.error = redactSensitiveInfo(errorCopy.error);
    }
    return errorCopy;
  });
}
async function loadRawTranscriptJsonl() {
  try {
    const transcriptPath = getTranscriptPath();
    const {
      size
    } = await stat(transcriptPath);
    if (size > MAX_TRANSCRIPT_READ_BYTES) {
      logForDebugging(`Skipping raw transcript read: file too large (${size} bytes)`, {
        level: "warn"
      });
      return null;
    }
    return await readFile(transcriptPath, "utf-8");
  } catch {
    return null;
  }
}
function Feedback({
  abortSignal,
  messages,
  initialDescription,
  onDone,
  backgroundTasks = {}
}) {
  const [step, setStep] = useState("userInput");
  const [cursorOffset, setCursorOffset] = useState(0);
  const [description, setDescription] = useState(initialDescription ?? "");
  const [feedbackId, setFeedbackId] = useState(null);
  const [error, setError] = useState(null);
  const [envInfo, setEnvInfo] = useState({
    isGit: false,
    gitState: null
  });
  const [title, setTitle] = useState(null);
  const textInputColumns = useTerminalSize().columns - 4;
  useEffect(() => {
    async function loadEnvInfo() {
      const isGit = await getIsGit();
      let gitState = null;
      if (isGit) {
        gitState = await getGitState();
      }
      setEnvInfo({
        isGit,
        gitState
      });
    }
    void loadEnvInfo();
  }, []);
  const submitReport = useCallback(async () => {
    setStep("submitting");
    setError(null);
    setFeedbackId(null);
    const sanitizedErrors = getSanitizedErrorLogs();
    const lastAssistantMessage = getLastAssistantMessage(messages);
    const lastAssistantMessageId = lastAssistantMessage?.requestId ?? null;
    const [diskTranscripts, rawTranscriptJsonl] = await Promise.all([loadAllSubagentTranscriptsFromDisk(), loadRawTranscriptJsonl()]);
    const teammateTranscripts = extractTeammateTranscriptsFromTasks(backgroundTasks);
    const subagentTranscripts = {
      ...diskTranscripts,
      ...teammateTranscripts
    };
    const reportData = {
      latestAssistantMessageId: lastAssistantMessageId,
      message_count: messages.length,
      datetime: (/* @__PURE__ */ new Date()).toISOString(),
      description,
      platform: env.platform,
      gitRepo: envInfo.isGit,
      terminal: env.terminal,
      version: MACRO.VERSION,
      transcript: normalizeMessagesForAPI(messages),
      errors: sanitizedErrors,
      lastApiRequest: getLastAPIRequest(),
      ...Object.keys(subagentTranscripts).length > 0 && {
        subagentTranscripts
      },
      ...rawTranscriptJsonl && {
        rawTranscriptJsonl
      }
    };
    const [result, t] = await Promise.all([submitFeedback(reportData, abortSignal), generateTitle(description, abortSignal)]);
    setTitle(t);
    if (result.success) {
      if (result.feedbackId) {
        setFeedbackId(result.feedbackId);
        logEvent("tengu_bug_report_submitted", {
          feedback_id: result.feedbackId,
          last_assistant_message_id: lastAssistantMessageId
        });
        logEventTo1P("tengu_bug_report_description", {
          feedback_id: result.feedbackId,
          description: redactSensitiveInfo(description)
        });
      }
      setStep("done");
    } else {
      if (result.isZdrOrg) {
        setError("Feedback collection is not available for organizations with custom data retention policies.");
      } else {
        setError("Could not submit feedback. Please try again later.");
      }
      setStep("userInput");
    }
  }, [description, envInfo.isGit, messages]);
  const handleCancel = useCallback(() => {
    if (step === "done") {
      if (error) {
        onDone("Error submitting feedback / bug report", {
          display: "system"
        });
      } else {
        onDone("Feedback / bug report submitted", {
          display: "system"
        });
      }
      return;
    }
    onDone("Feedback / bug report cancelled", {
      display: "system"
    });
  }, [step, error, onDone]);
  useKeybinding("confirm:no", handleCancel, {
    context: "Settings",
    isActive: step === "userInput"
  });
  use_input_default((input, key) => {
    if (step === "done") {
      if (key.return && title) {
        const issueUrl = createGitHubIssueUrl(feedbackId ?? "", title, description, getSanitizedErrorLogs());
        void openBrowser(issueUrl);
      }
      if (error) {
        onDone("Error submitting feedback / bug report", {
          display: "system"
        });
      } else {
        onDone("Feedback / bug report submitted", {
          display: "system"
        });
      }
      return;
    }
    if (error && step !== "userInput") {
      onDone("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (step === "consent" && (key.return || input === " ")) {
      void submitReport();
    }
  });
  return /* @__PURE__ */ createElement(Dialog, { title: "Submit Feedback / Bug Report", onCancel: handleCancel, isCancelActive: step !== "userInput", inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : step === "userInput" ? /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "continue" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })) : step === "consent" ? /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "submit" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })) : null }, step === "userInput" && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Describe the issue below:"), /* @__PURE__ */ createElement(TextInput, { value: description, onChange: (value) => {
    setDescription(value);
    if (error) {
      setError(null);
    }
  }, columns: textInputColumns, onSubmit: () => setStep("consent"), onExitMessage: () => onDone("Feedback cancelled", {
    display: "system"
  }), cursorOffset, onChangeCursorOffset: setCursorOffset, showCursor: true }), error && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Edit and press Enter to retry, or Esc to cancel"))), step === "consent" && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "This report will include:"), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "- Your feedback / bug description:", " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, description)), /* @__PURE__ */ createElement(ThemedText, null, "- Environment info:", " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, env.platform, ", ", env.terminal, ", v", MACRO.VERSION)), envInfo.gitState && /* @__PURE__ */ createElement(ThemedText, null, "- Git repo metadata:", " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, envInfo.gitState.branchName, envInfo.gitState.commitHash ? `, ${envInfo.gitState.commitHash.slice(0, 7)}` : "", envInfo.gitState.remoteUrl ? ` @ ${envInfo.gitState.remoteUrl}` : "", !envInfo.gitState.isHeadOnRemote && ", not synced", !envInfo.gitState.isClean && ", has local changes")), /* @__PURE__ */ createElement(ThemedText, null, "- Current session transcript")), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { wrap: "wrap", dimColor: true }, "We will use your feedback to debug related issues or to improve", " ", "Blaude's functionality (eg. to reduce the risk of bugs occurring in the future).")), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Press ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Enter"), " to confirm and submit."))), step === "submitting" && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Submitting report\u2026")), step === "done" && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, error ? /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error) : /* @__PURE__ */ createElement(ThemedText, { color: "success" }, "Thank you for your report!"), feedbackId && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Feedback ID: ", feedbackId), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Press "), /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Enter "), /* @__PURE__ */ createElement(ThemedText, null, "to open your browser and draft a GitHub issue, or any other key to close."))));
}
function createGitHubIssueUrl(feedbackId, title, description, errors) {
  const sanitizedTitle = redactSensitiveInfo(title);
  const sanitizedDescription = redactSensitiveInfo(description);
  const bodyPrefix = `**Bug Description**
${sanitizedDescription}

**Environment Info**
- Platform: ${env.platform}
- Terminal: ${env.terminal}
- Version: ${MACRO.VERSION || "unknown"}
- Feedback ID: ${feedbackId}

**Errors**
\`\`\`json
`;
  const errorSuffix = `
\`\`\`
`;
  const errorsJson = jsonStringify(errors);
  const baseUrl = `${GITHUB_ISSUES_REPO_URL}/new?title=${encodeURIComponent(sanitizedTitle)}&labels=user-reported,bug&body=`;
  const truncationNote = `
**Note:** Content was truncated.
`;
  const encodedPrefix = encodeURIComponent(bodyPrefix);
  const encodedSuffix = encodeURIComponent(errorSuffix);
  const encodedNote = encodeURIComponent(truncationNote);
  const encodedErrors = encodeURIComponent(errorsJson);
  const spaceForErrors = GITHUB_URL_LIMIT - baseUrl.length - encodedPrefix.length - encodedSuffix.length - encodedNote.length;
  if (spaceForErrors <= 0) {
    const ellipsis2 = encodeURIComponent("\u2026");
    const buffer2 = 50;
    const maxEncodedLength = GITHUB_URL_LIMIT - baseUrl.length - ellipsis2.length - encodedNote.length - buffer2;
    const fullBody = bodyPrefix + errorsJson + errorSuffix;
    let encodedFullBody = encodeURIComponent(fullBody);
    if (encodedFullBody.length > maxEncodedLength) {
      encodedFullBody = encodedFullBody.slice(0, maxEncodedLength);
      const lastPercent2 = encodedFullBody.lastIndexOf("%");
      if (lastPercent2 >= encodedFullBody.length - 2) {
        encodedFullBody = encodedFullBody.slice(0, lastPercent2);
      }
    }
    return baseUrl + encodedFullBody + ellipsis2 + encodedNote;
  }
  if (encodedErrors.length <= spaceForErrors) {
    return baseUrl + encodedPrefix + encodedErrors + encodedSuffix;
  }
  const ellipsis = encodeURIComponent("\u2026");
  const buffer = 50;
  let truncatedEncodedErrors = encodedErrors.slice(0, spaceForErrors - ellipsis.length - buffer);
  const lastPercent = truncatedEncodedErrors.lastIndexOf("%");
  if (lastPercent >= truncatedEncodedErrors.length - 2) {
    truncatedEncodedErrors = truncatedEncodedErrors.slice(0, lastPercent);
  }
  return baseUrl + encodedPrefix + truncatedEncodedErrors + ellipsis + encodedSuffix + encodedNote;
}
async function generateTitle(description, abortSignal) {
  try {
    const response = await queryHaiku({
      systemPrompt: asSystemPrompt(["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Blaude.", "Blaude is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers too soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"']),
      userPrompt: description,
      signal: abortSignal,
      options: {
        hasAppendSystemPrompt: false,
        toolChoice: void 0,
        isNonInteractiveSession: false,
        agents: [],
        querySource: "feedback",
        mcpTools: []
      }
    });
    const title = response.message.content[0]?.type === "text" ? response.message.content[0].text : "Bug Report";
    if (startsWithApiErrorPrefix(title)) {
      return createFallbackTitle(description);
    }
    return title;
  } catch (error) {
    logError(error);
    return createFallbackTitle(description);
  }
}
function createFallbackTitle(description) {
  const firstLine = description.split("\n")[0] || "";
  if (firstLine.length <= 60 && firstLine.length > 5) {
    return firstLine;
  }
  let truncated = firstLine.slice(0, 60);
  if (firstLine.length > 60) {
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 30) {
      truncated = truncated.slice(0, lastSpace);
    }
    truncated += "...";
  }
  return truncated.length < 10 ? "Bug Report" : truncated;
}
function sanitizeAndLogError(err) {
  if (err instanceof Error) {
    const safeError = new Error(redactSensitiveInfo(err.message));
    if (err.stack) {
      safeError.stack = redactSensitiveInfo(err.stack);
    }
    logError(safeError);
  } else {
    const errorString = redactSensitiveInfo(String(err));
    logError(new Error(errorString));
  }
}
async function submitFeedback(data, signal) {
  if (isEssentialTrafficOnly()) {
    return {
      success: false
    };
  }
  try {
    await checkAndRefreshOAuthTokenIfNeeded();
    const authResult = getAuthHeaders();
    if (authResult.error) {
      return {
        success: false
      };
    }
    const headers = {
      "Content-Type": "application/json",
      "User-Agent": getUserAgent(),
      ...authResult.headers
    };
    const response = await axios_default.post("https://api.anthropic.com/api/claude_cli_feedback", {
      content: jsonStringify(data)
    }, {
      headers,
      timeout: 3e4,
      // 30 second timeout to prevent hanging
      signal
    });
    if (response.status === 200) {
      const result = response.data;
      if (result?.feedback_id) {
        return {
          success: true,
          feedbackId: result.feedback_id
        };
      }
      sanitizeAndLogError(new Error("Failed to submit feedback: request did not return feedback_id"));
      return {
        success: false
      };
    }
    sanitizeAndLogError(new Error("Failed to submit feedback:" + response.status));
    return {
      success: false
    };
  } catch (err) {
    if (axios_default.isCancel(err)) {
      return {
        success: false
      };
    }
    if (axios_default.isAxiosError(err) && err.response?.status === 403) {
      const errorData = err.response.data;
      if (errorData?.error?.type === "permission_error" && errorData?.error?.message?.includes("Custom data retention settings")) {
        sanitizeAndLogError(new Error("Cannot submit feedback because custom data retention settings are enabled"));
        return {
          success: false,
          isZdrOrg: true
        };
      }
    }
    sanitizeAndLogError(err);
    return {
      success: false
    };
  }
}
var GITHUB_URL_LIMIT, GITHUB_ISSUES_REPO_URL;
var init_Feedback = __esm({
  "src/components/Feedback.tsx"() {
    init_axios();
    init_react();
    init_react();
    init_state();
    init_firstPartyEventLogger();
    init_analytics();
    init_messages();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_claude();
    init_errors();
    init_auth();
    init_browser();
    init_debug();
    init_env();
    init_git();
    init_http();
    init_log();
    init_privacyLevel();
    init_sessionStorage();
    init_slowOperations();
    init_systemPromptType();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_TextInput();
    GITHUB_URL_LIMIT = 7250;
    GITHUB_ISSUES_REPO_URL = false ? "https://github.com/anthropics/claude-cli-internal/issues" : "https://github.com/anthropics/claude-code/issues";
  }
});

export {
  redactSensitiveInfo,
  Feedback,
  init_Feedback
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmVlZGJhY2sudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyByZWFkRmlsZSwgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TGFzdEFQSVJlcXVlc3QgfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnRUbzFQIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9maXJzdFBhcnR5RXZlbnRMb2dnZXIuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TGFzdEFzc2lzdGFudE1lc3NhZ2UsXG4gIG5vcm1hbGl6ZU1lc3NhZ2VzRm9yQVBJLFxufSBmcm9tICdzcmMvdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZUlucHV0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBxdWVyeUhhaWt1IH0gZnJvbSAnLi4vc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB7IHN0YXJ0c1dpdGhBcGlFcnJvclByZWZpeCB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaS9lcnJvcnMuanMnXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vdXRpbHMvZW52LmpzJ1xuaW1wb3J0IHsgdHlwZSBHaXRSZXBvU3RhdGUsIGdldEdpdFN0YXRlLCBnZXRJc0dpdCB9IGZyb20gJy4uL3V0aWxzL2dpdC5qcydcbmltcG9ydCB7IGdldEF1dGhIZWFkZXJzLCBnZXRVc2VyQWdlbnQgfSBmcm9tICcuLi91dGlscy9odHRwLmpzJ1xuaW1wb3J0IHsgZ2V0SW5NZW1vcnlFcnJvcnMsIGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgaXNFc3NlbnRpYWxUcmFmZmljT25seSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhY3lMZXZlbC5qcydcbmltcG9ydCB7XG4gIGV4dHJhY3RUZWFtbWF0ZVRyYW5zY3JpcHRzRnJvbVRhc2tzLFxuICBnZXRUcmFuc2NyaXB0UGF0aCxcbiAgbG9hZEFsbFN1YmFnZW50VHJhbnNjcmlwdHNGcm9tRGlzayxcbiAgTUFYX1RSQU5TQ1JJUFRfUkVBRF9CWVRFUyxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBhc1N5c3RlbVByb21wdCB9IGZyb20gJy4uL3V0aWxzL3N5c3RlbVByb21wdFR5cGUuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0LmpzJ1xuXG4vLyBUaGlzIHZhbHVlIHdhcyBkZXRlcm1pbmVkIGV4cGVyaW1lbnRhbGx5IGJ5IHRlc3RpbmcgdGhlIFVSTCBsZW5ndGggbGltaXRcbmNvbnN0IEdJVEhVQl9VUkxfTElNSVQgPSA3MjUwXG5jb25zdCBHSVRIVUJfSVNTVUVTX1JFUE9fVVJMID1cbiAgXCJleHRlcm5hbFwiID09PSAnYW50J1xuICAgID8gJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jbGktaW50ZXJuYWwvaXNzdWVzJ1xuICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlL2lzc3VlcydcblxudHlwZSBQcm9wcyA9IHtcbiAgYWJvcnRTaWduYWw6IEFib3J0U2lnbmFsXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgaW5pdGlhbERlc2NyaXB0aW9uPzogc3RyaW5nXG4gIG9uRG9uZShyZXN1bHQ6IHN0cmluZywgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0pOiB2b2lkXG4gIGJhY2tncm91bmRUYXNrcz86IHtcbiAgICBbdGFza0lkOiBzdHJpbmddOiB7XG4gICAgICB0eXBlOiBzdHJpbmdcbiAgICAgIGlkZW50aXR5PzogeyBhZ2VudElkOiBzdHJpbmcgfVxuICAgICAgbWVzc2FnZXM/OiBNZXNzYWdlW11cbiAgICB9XG4gIH1cbn1cblxudHlwZSBTdGVwID0gJ3VzZXJJbnB1dCcgfCAnY29uc2VudCcgfCAnc3VibWl0dGluZycgfCAnZG9uZSdcblxudHlwZSBGZWVkYmFja0RhdGEgPSB7XG4gIC8vIGxhdGVzdEFzc2lzdGFudE1lc3NhZ2VJZCBpcyB0aGUgbWVzc2FnZSBJRCBmcm9tIHRoZSBsYXRlc3QgbWFpbiBtb2RlbCBjYWxsXG4gIGxhdGVzdEFzc2lzdGFudE1lc3NhZ2VJZDogc3RyaW5nIHwgbnVsbFxuICBtZXNzYWdlX2NvdW50OiBudW1iZXJcbiAgZGF0ZXRpbWU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHBsYXRmb3JtOiBzdHJpbmdcbiAgZ2l0UmVwbzogYm9vbGVhblxuICB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsXG4gIHRyYW5zY3JpcHQ6IE1lc3NhZ2VbXVxuICBzdWJhZ2VudFRyYW5zY3JpcHRzPzogeyBbYWdlbnRJZDogc3RyaW5nXTogTWVzc2FnZVtdIH1cbiAgcmF3VHJhbnNjcmlwdEpzb25sPzogc3RyaW5nXG59XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb24gdG8gcmVkYWN0IHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiBmcm9tIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiByZWRhY3RTZW5zaXRpdmVJbmZvKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCByZWRhY3RlZCA9IHRleHRcblxuICAvLyBBbnRocm9waWMgQVBJIGtleXMgKHNrLWFudC4uLikgd2l0aCBvciB3aXRob3V0IHF1b3Rlc1xuICAvLyBGaXJzdCBoYW5kbGUgdGhlIGNhc2Ugd2l0aCBxdW90ZXNcbiAgcmVkYWN0ZWQgPSByZWRhY3RlZC5yZXBsYWNlKC9cIihzay1hbnRbXlxcc1wiJ117MjQsfSlcIi9nLCAnXCJbUkVEQUNURURfQVBJX0tFWV1cIicpXG4gIC8vIFRoZW4gaGFuZGxlIHRoZSBjYXNlcyB3aXRob3V0IHF1b3RlcyAtIG1vcmUgZ2VuZXJhbCBwYXR0ZXJuXG4gIHJlZGFjdGVkID0gcmVkYWN0ZWQucmVwbGFjZShcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLWxvb2tiZWhpbmQtcmVnZXggLS0gLnJlcGxhY2UocmUsIHN0cmluZykgb24gL2J1ZyBwYXRoOiBuby1tYXRjaCByZXR1cm5zIHNhbWUgc3RyaW5nIChPYmplY3QuaXMpXG4gICAgLyg/PCFbQS1aYS16MC05XCInXSkoc2stYW50LT9bQS1aYS16MC05Xy1dezEwLH0pKD8hW0EtWmEtejAtOVwiJ10pL2csXG4gICAgJ1tSRURBQ1RFRF9BUElfS0VZXScsXG4gIClcblxuICAvLyBBV1Mga2V5cyAtIEFXU1hYWFggZm9ybWF0IC0gYWRkIHRoZSBwYXR0ZXJuIHdlIG5lZWQgZm9yIHRoZSB0ZXN0XG4gIHJlZGFjdGVkID0gcmVkYWN0ZWQucmVwbGFjZShcbiAgICAvQVdTIGtleTogXCIoQVdTW0EtWjAtOV17MjAsfSlcIi9nLFxuICAgICdBV1Mga2V5OiBcIltSRURBQ1RFRF9BV1NfS0VZXVwiJyxcbiAgKVxuXG4gIC8vIEFXUyBBS0lBWFhYIGtleXNcbiAgcmVkYWN0ZWQgPSByZWRhY3RlZC5yZXBsYWNlKC8oQUtJQVtBLVowLTldezE2fSkvZywgJ1tSRURBQ1RFRF9BV1NfS0VZXScpXG5cbiAgLy8gR29vZ2xlIENsb3VkIGtleXNcbiAgcmVkYWN0ZWQgPSByZWRhY3RlZC5yZXBsYWNlKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tbG9va2JlaGluZC1yZWdleCAtLSBzYW1lIGFzIGFib3ZlXG4gICAgLyg/PCFbQS1aYS16MC05XSkoQUl6YVtBLVphLXowLTlfLV17MzV9KSg/IVtBLVphLXowLTldKS9nLFxuICAgICdbUkVEQUNURURfR0NQX0tFWV0nLFxuICApXG5cbiAgLy8gVmVydGV4IEFJIHNlcnZpY2UgYWNjb3VudCBrZXlzXG4gIHJlZGFjdGVkID0gcmVkYWN0ZWQucmVwbGFjZShcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLWxvb2tiZWhpbmQtcmVnZXggLS0gc2FtZSBhcyBhYm92ZVxuICAgIC8oPzwhW0EtWmEtejAtOV0pKFthLXowLTktXStAW2EtejAtOS1dK1xcLmlhbVxcLmdzZXJ2aWNlYWNjb3VudFxcLmNvbSkoPyFbQS1aYS16MC05XSkvZyxcbiAgICAnW1JFREFDVEVEX0dDUF9TRVJWSUNFX0FDQ09VTlRdJyxcbiAgKVxuXG4gIC8vIEdlbmVyaWMgQVBJIGtleXMgaW4gaGVhZGVyc1xuICByZWRhY3RlZCA9IHJlZGFjdGVkLnJlcGxhY2UoXG4gICAgLyhbXCInXT94LWFwaS1rZXlbXCInXT9cXHMqWzo9XVxccypbXCInXT8pW15cIicsXFxzKX1cXF1dKy9naSxcbiAgICAnJDFbUkVEQUNURURfQVBJX0tFWV0nLFxuICApXG5cbiAgLy8gQXV0aG9yaXphdGlvbiBoZWFkZXJzIGFuZCBCZWFyZXIgdG9rZW5zXG4gIHJlZGFjdGVkID0gcmVkYWN0ZWQucmVwbGFjZShcbiAgICAvKFtcIiddP2F1dGhvcml6YXRpb25bXCInXT9cXHMqWzo9XVxccypbXCInXT8oYmVhcmVyXFxzKyk/KVteXCInLFxccyl9XFxdXSsvZ2ksXG4gICAgJyQxW1JFREFDVEVEX1RPS0VOXScsXG4gIClcblxuICAvLyBBV1MgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gIHJlZGFjdGVkID0gcmVkYWN0ZWQucmVwbGFjZShcbiAgICAvKEFXU1tfLV1bQS1aYS16MC05X10rXFxzKls9Ol1cXHMqKVtcIiddP1teXCInLFxccyl9XFxdXStbXCInXT8vZ2ksXG4gICAgJyQxW1JFREFDVEVEX0FXU19WQUxVRV0nLFxuICApXG5cbiAgLy8gR0NQIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICByZWRhY3RlZCA9IHJlZGFjdGVkLnJlcGxhY2UoXG4gICAgLyhHT09HTEVbXy1dW0EtWmEtejAtOV9dK1xccypbPTpdXFxzKilbXCInXT9bXlwiJyxcXHMpfVxcXV0rW1wiJ10/L2dpLFxuICAgICckMVtSRURBQ1RFRF9HQ1BfVkFMVUVdJyxcbiAgKVxuXG4gIC8vIEVudmlyb25tZW50IHZhcmlhYmxlcyB3aXRoIGtleXNcbiAgcmVkYWN0ZWQgPSByZWRhY3RlZC5yZXBsYWNlKFxuICAgIC8oKEFQSVstX10/S0VZfFRPS0VOfFNFQ1JFVHxQQVNTV09SRClcXHMqWz06XVxccyopW1wiJ10/W15cIicsXFxzKX1cXF1dK1tcIiddPy9naSxcbiAgICAnJDFbUkVEQUNURURdJyxcbiAgKVxuXG4gIHJldHVybiByZWRhY3RlZFxufVxuXG4vLyBHZXQgc2FuaXRpemVkIGVycm9yIGxvZ3Mgd2l0aCBzZW5zaXRpdmUgaW5mb3JtYXRpb24gcmVkYWN0ZWRcbmZ1bmN0aW9uIGdldFNhbml0aXplZEVycm9yTG9ncygpOiBBcnJheTx7XG4gIGVycm9yPzogc3RyaW5nXG4gIHRpbWVzdGFtcD86IHN0cmluZ1xufT4ge1xuICAvLyBTYW5pdGl6ZSBlcnJvciBsb2dzIHRvIHJlbW92ZSBhbnkgQVBJIGtleXNcbiAgcmV0dXJuIGdldEluTWVtb3J5RXJyb3JzKCkubWFwKGVycm9ySW5mbyA9PiB7XG4gICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXJyb3IgaW5mbyB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsXG4gICAgY29uc3QgZXJyb3JDb3B5ID0geyAuLi5lcnJvckluZm8gfSBhcyB7IGVycm9yPzogc3RyaW5nOyB0aW1lc3RhbXA/OiBzdHJpbmcgfVxuXG4gICAgLy8gU2FuaXRpemUgZXJyb3IgaWYgcHJlc2VudCBhbmQgaXMgYSBzdHJpbmdcbiAgICBpZiAoZXJyb3JDb3B5ICYmIHR5cGVvZiBlcnJvckNvcHkuZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvckNvcHkuZXJyb3IgPSByZWRhY3RTZW5zaXRpdmVJbmZvKGVycm9yQ29weS5lcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JDb3B5XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRSYXdUcmFuc2NyaXB0SnNvbmwoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNjcmlwdFBhdGggPSBnZXRUcmFuc2NyaXB0UGF0aCgpXG4gICAgY29uc3QgeyBzaXplIH0gPSBhd2FpdCBzdGF0KHRyYW5zY3JpcHRQYXRoKVxuICAgIGlmIChzaXplID4gTUFYX1RSQU5TQ1JJUFRfUkVBRF9CWVRFUykge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgU2tpcHBpbmcgcmF3IHRyYW5zY3JpcHQgcmVhZDogZmlsZSB0b28gbGFyZ2UgKCR7c2l6ZX0gYnl0ZXMpYCxcbiAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVhZEZpbGUodHJhbnNjcmlwdFBhdGgsICd1dGYtOCcpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRiYWNrKHtcbiAgYWJvcnRTaWduYWwsXG4gIG1lc3NhZ2VzLFxuICBpbml0aWFsRGVzY3JpcHRpb24sXG4gIG9uRG9uZSxcbiAgYmFja2dyb3VuZFRhc2tzID0ge30sXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlPFN0ZXA+KCd1c2VySW5wdXQnKVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsRGVzY3JpcHRpb24gPz8gJycpXG4gIGNvbnN0IFtmZWVkYmFja0lkLCBzZXRGZWVkYmFja0lkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2VudkluZm8sIHNldEVudkluZm9dID0gdXNlU3RhdGU8e1xuICAgIGlzR2l0OiBib29sZWFuXG4gICAgZ2l0U3RhdGU6IEdpdFJlcG9TdGF0ZSB8IG51bGxcbiAgfT4oeyBpc0dpdDogZmFsc2UsIGdpdFN0YXRlOiBudWxsIH0pXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgdGV4dElucHV0Q29sdW1ucyA9IHVzZVRlcm1pbmFsU2l6ZSgpLmNvbHVtbnMgLSA0XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRW52SW5mbygpIHtcbiAgICAgIGNvbnN0IGlzR2l0ID0gYXdhaXQgZ2V0SXNHaXQoKVxuICAgICAgbGV0IGdpdFN0YXRlOiBHaXRSZXBvU3RhdGUgfCBudWxsID0gbnVsbFxuICAgICAgaWYgKGlzR2l0KSB7XG4gICAgICAgIGdpdFN0YXRlID0gYXdhaXQgZ2V0R2l0U3RhdGUoKVxuICAgICAgfVxuICAgICAgc2V0RW52SW5mbyh7IGlzR2l0LCBnaXRTdGF0ZSB9KVxuICAgIH1cbiAgICB2b2lkIGxvYWRFbnZJbmZvKClcbiAgfSwgW10pXG5cbiAgY29uc3Qgc3VibWl0UmVwb3J0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldFN0ZXAoJ3N1Ym1pdHRpbmcnKVxuICAgIHNldEVycm9yKG51bGwpXG4gICAgc2V0RmVlZGJhY2tJZChudWxsKVxuXG4gICAgLy8gR2V0IHNhbml0aXplZCBlcnJvcnMgZm9yIHRoZSByZXBvcnRcbiAgICBjb25zdCBzYW5pdGl6ZWRFcnJvcnMgPSBnZXRTYW5pdGl6ZWRFcnJvckxvZ3MoKVxuXG4gICAgLy8gRXh0cmFjdCBsYXN0IGFzc2lzdGFudCBtZXNzYWdlIElEIGZyb20gbWVzc2FnZXMgYXJyYXlcbiAgICBjb25zdCBsYXN0QXNzaXN0YW50TWVzc2FnZSA9IGdldExhc3RBc3Npc3RhbnRNZXNzYWdlKG1lc3NhZ2VzKVxuICAgIGNvbnN0IGxhc3RBc3Npc3RhbnRNZXNzYWdlSWQgPSBsYXN0QXNzaXN0YW50TWVzc2FnZT8ucmVxdWVzdElkID8/IG51bGxcblxuICAgIGNvbnN0IFtkaXNrVHJhbnNjcmlwdHMsIHJhd1RyYW5zY3JpcHRKc29ubF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBsb2FkQWxsU3ViYWdlbnRUcmFuc2NyaXB0c0Zyb21EaXNrKCksXG4gICAgICBsb2FkUmF3VHJhbnNjcmlwdEpzb25sKCksXG4gICAgXSlcbiAgICBjb25zdCB0ZWFtbWF0ZVRyYW5zY3JpcHRzID1cbiAgICAgIGV4dHJhY3RUZWFtbWF0ZVRyYW5zY3JpcHRzRnJvbVRhc2tzKGJhY2tncm91bmRUYXNrcylcbiAgICBjb25zdCBzdWJhZ2VudFRyYW5zY3JpcHRzID0geyAuLi5kaXNrVHJhbnNjcmlwdHMsIC4uLnRlYW1tYXRlVHJhbnNjcmlwdHMgfVxuXG4gICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgIGxhdGVzdEFzc2lzdGFudE1lc3NhZ2VJZDogbGFzdEFzc2lzdGFudE1lc3NhZ2VJZCxcbiAgICAgIG1lc3NhZ2VfY291bnQ6IG1lc3NhZ2VzLmxlbmd0aCxcbiAgICAgIGRhdGV0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHBsYXRmb3JtOiBlbnYucGxhdGZvcm0sXG4gICAgICBnaXRSZXBvOiBlbnZJbmZvLmlzR2l0LFxuICAgICAgdGVybWluYWw6IGVudi50ZXJtaW5hbCxcbiAgICAgIHZlcnNpb246IE1BQ1JPLlZFUlNJT04sXG4gICAgICB0cmFuc2NyaXB0OiBub3JtYWxpemVNZXNzYWdlc0ZvckFQSShtZXNzYWdlcyksXG4gICAgICBlcnJvcnM6IHNhbml0aXplZEVycm9ycyxcbiAgICAgIGxhc3RBcGlSZXF1ZXN0OiBnZXRMYXN0QVBJUmVxdWVzdCgpLFxuICAgICAgLi4uKE9iamVjdC5rZXlzKHN1YmFnZW50VHJhbnNjcmlwdHMpLmxlbmd0aCA+IDAgJiYge1xuICAgICAgICBzdWJhZ2VudFRyYW5zY3JpcHRzLFxuICAgICAgfSksXG4gICAgICAuLi4ocmF3VHJhbnNjcmlwdEpzb25sICYmIHsgcmF3VHJhbnNjcmlwdEpzb25sIH0pLFxuICAgIH1cblxuICAgIGNvbnN0IFtyZXN1bHQsIHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc3VibWl0RmVlZGJhY2socmVwb3J0RGF0YSwgYWJvcnRTaWduYWwpLFxuICAgICAgZ2VuZXJhdGVUaXRsZShkZXNjcmlwdGlvbiwgYWJvcnRTaWduYWwpLFxuICAgIF0pXG5cbiAgICBzZXRUaXRsZSh0KVxuXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBpZiAocmVzdWx0LmZlZWRiYWNrSWQpIHtcbiAgICAgICAgc2V0RmVlZGJhY2tJZChyZXN1bHQuZmVlZGJhY2tJZClcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2J1Z19yZXBvcnRfc3VibWl0dGVkJywge1xuICAgICAgICAgIGZlZWRiYWNrX2lkOlxuICAgICAgICAgICAgcmVzdWx0LmZlZWRiYWNrSWQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICBsYXN0X2Fzc2lzdGFudF9tZXNzYWdlX2lkOlxuICAgICAgICAgICAgbGFzdEFzc2lzdGFudE1lc3NhZ2VJZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgICAvLyAxUC1vbmx5OiBmcmVlZm9ybSB0ZXh0IGFwcHJvdmVkIGZvciBCUS4gSm9pbiBvbiBmZWVkYmFja19pZC5cbiAgICAgICAgbG9nRXZlbnRUbzFQKCd0ZW5ndV9idWdfcmVwb3J0X2Rlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGZlZWRiYWNrX2lkOlxuICAgICAgICAgICAgcmVzdWx0LmZlZWRiYWNrSWQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcmVkYWN0U2Vuc2l0aXZlSW5mbyhcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICkgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNldFN0ZXAoJ2RvbmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0LmlzWmRyT3JnKSB7XG4gICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICdGZWVkYmFjayBjb2xsZWN0aW9uIGlzIG5vdCBhdmFpbGFibGUgZm9yIG9yZ2FuaXphdGlvbnMgd2l0aCBjdXN0b20gZGF0YSByZXRlbnRpb24gcG9saWNpZXMuJyxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NvdWxkIG5vdCBzdWJtaXQgZmVlZGJhY2suIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJylcbiAgICAgIH1cbiAgICAgIC8vIFN0YXkgb24gdXNlcklucHV0IHN0ZXAgc28gdXNlciBjYW4gcmV0cnkgd2l0aCB0aGVpciBjb250ZW50IHByZXNlcnZlZFxuICAgICAgc2V0U3RlcCgndXNlcklucHV0JylcbiAgICB9XG4gIH0sIFtkZXNjcmlwdGlvbiwgZW52SW5mby5pc0dpdCwgbWVzc2FnZXNdKVxuXG4gIC8vIEhhbmRsZSBjYW5jZWwgLSB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IERpYWxvZydzIGF1dG9tYXRpYyBFc2MgaGFuZGxpbmdcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIERvbid0IGNhbmNlbCB3aGVuIGRvbmUgLSBsZXQgb3RoZXIga2V5cyBjbG9zZSB0aGUgZGlhbG9nXG4gICAgaWYgKHN0ZXAgPT09ICdkb25lJykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIG9uRG9uZSgnRXJyb3Igc3VibWl0dGluZyBmZWVkYmFjayAvIGJ1ZyByZXBvcnQnLCB7XG4gICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkRvbmUoJ0ZlZWRiYWNrIC8gYnVnIHJlcG9ydCBzdWJtaXR0ZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb25Eb25lKCdGZWVkYmFjayAvIGJ1ZyByZXBvcnQgY2FuY2VsbGVkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICB9LCBbc3RlcCwgZXJyb3IsIG9uRG9uZV0pXG5cbiAgLy8gRHVyaW5nIHRleHQgaW5wdXQsIHVzZSBTZXR0aW5ncyBjb250ZXh0IHdoZXJlIG9ubHkgRXNjYXBlIChub3QgJ24nKSB0cmlnZ2VycyBjb25maXJtOm5vLlxuICAvLyBUaGlzIGFsbG93cyB0eXBpbmcgJ24nIGluIHRoZSB0ZXh0IGZpZWxkIHdoaWxlIHN0aWxsIHN1cHBvcnRpbmcgRXNjYXBlIHRvIGNhbmNlbC5cbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUNhbmNlbCwge1xuICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgaXNBY3RpdmU6IHN0ZXAgPT09ICd1c2VySW5wdXQnLFxuICB9KVxuXG4gIHVzZUlucHV0KChpbnB1dCwga2V5KSA9PiB7XG4gICAgLy8gQWxsb3cgYW55IGtleSBwcmVzcyB0byBjbG9zZSB0aGUgZGlhbG9nIHdoZW4gZG9uZSBvciB3aGVuIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICBpZiAoc3RlcCA9PT0gJ2RvbmUnKSB7XG4gICAgICBpZiAoa2V5LnJldHVybiAmJiB0aXRsZSkge1xuICAgICAgICAvLyBPcGVuIEdpdEh1YiBpc3N1ZSBVUkwgd2hlbiBFbnRlciBpcyBwcmVzc2VkXG4gICAgICAgIGNvbnN0IGlzc3VlVXJsID0gY3JlYXRlR2l0SHViSXNzdWVVcmwoXG4gICAgICAgICAgZmVlZGJhY2tJZCA/PyAnJyxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBnZXRTYW5pdGl6ZWRFcnJvckxvZ3MoKSxcbiAgICAgICAgKVxuICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKGlzc3VlVXJsKVxuICAgICAgfVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIG9uRG9uZSgnRXJyb3Igc3VibWl0dGluZyBmZWVkYmFjayAvIGJ1ZyByZXBvcnQnLCB7XG4gICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkRvbmUoJ0ZlZWRiYWNrIC8gYnVnIHJlcG9ydCBzdWJtaXR0ZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBXaGVuIGluIHVzZXJJbnB1dCBzdGVwIHdpdGggZXJyb3IsIGFsbG93IHVzZXIgdG8gZWRpdCBhbmQgcmV0cnlcbiAgICAvLyAoZG9uJ3QgY2xvc2Ugb24gYW55IGtleXByZXNzIC0gdGhleSBjYW4gc3RpbGwgcHJlc3MgRXNjIHRvIGNhbmNlbClcbiAgICBpZiAoZXJyb3IgJiYgc3RlcCAhPT0gJ3VzZXJJbnB1dCcpIHtcbiAgICAgIG9uRG9uZSgnRXJyb3Igc3VibWl0dGluZyBmZWVkYmFjayAvIGJ1ZyByZXBvcnQnLCB7XG4gICAgICAgIGRpc3BsYXk6ICdzeXN0ZW0nLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzdGVwID09PSAnY29uc2VudCcgJiYgKGtleS5yZXR1cm4gfHwgaW5wdXQgPT09ICcgJykpIHtcbiAgICAgIHZvaWQgc3VibWl0UmVwb3J0KClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIlN1Ym1pdCBGZWVkYmFjayAvIEJ1ZyBSZXBvcnRcIlxuICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgIGlzQ2FuY2VsQWN0aXZlPXtzdGVwICE9PSAndXNlcklucHV0J31cbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiBzdGVwID09PSAndXNlcklucHV0JyA/IChcbiAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJjb250aW51ZVwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICApIDogc3RlcCA9PT0gJ2NvbnNlbnQnID8gKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICApIDogbnVsbFxuICAgICAgfVxuICAgID5cbiAgICAgIHtzdGVwID09PSAndXNlcklucHV0JyAmJiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgICAgPFRleHQ+RGVzY3JpYmUgdGhlIGlzc3VlIGJlbG93OjwvVGV4dD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbih2YWx1ZSlcbiAgICAgICAgICAgICAgLy8gQ2xlYXIgZXJyb3Igd2hlbiB1c2VyIHN0YXJ0cyBlZGl0aW5nIHRvIGFsbG93IHJldHJ5XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2x1bW5zPXt0ZXh0SW5wdXRDb2x1bW5zfVxuICAgICAgICAgICAgb25TdWJtaXQ9eygpID0+IHNldFN0ZXAoJ2NvbnNlbnQnKX1cbiAgICAgICAgICAgIG9uRXhpdE1lc3NhZ2U9eygpID0+XG4gICAgICAgICAgICAgIG9uRG9uZSgnRmVlZGJhY2sgY2FuY2VsbGVkJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBFZGl0IGFuZCBwcmVzcyBFbnRlciB0byByZXRyeSwgb3IgRXNjIHRvIGNhbmNlbFxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHtzdGVwID09PSAnY29uc2VudCcgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dD5UaGlzIHJlcG9ydCB3aWxsIGluY2x1ZGU6PC9UZXh0PlxuICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIC0gWW91ciBmZWVkYmFjayAvIGJ1ZyBkZXNjcmlwdGlvbjp7JyAnfVxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57ZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIC0gRW52aXJvbm1lbnQgaW5mbzp7JyAnfVxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICB7ZW52LnBsYXRmb3JtfSwge2Vudi50ZXJtaW5hbH0sIHZ7TUFDUk8uVkVSU0lPTn1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge2VudkluZm8uZ2l0U3RhdGUgJiYgKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAtIEdpdCByZXBvIG1ldGFkYXRhOnsnICd9XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICB7ZW52SW5mby5naXRTdGF0ZS5icmFuY2hOYW1lfVxuICAgICAgICAgICAgICAgICAge2VudkluZm8uZ2l0U3RhdGUuY29tbWl0SGFzaFxuICAgICAgICAgICAgICAgICAgICA/IGAsICR7ZW52SW5mby5naXRTdGF0ZS5jb21taXRIYXNoLnNsaWNlKDAsIDcpfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgIHtlbnZJbmZvLmdpdFN0YXRlLnJlbW90ZVVybFxuICAgICAgICAgICAgICAgICAgICA/IGAgQCAke2VudkluZm8uZ2l0U3RhdGUucmVtb3RlVXJsfWBcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgIHshZW52SW5mby5naXRTdGF0ZS5pc0hlYWRPblJlbW90ZSAmJiAnLCBub3Qgc3luY2VkJ31cbiAgICAgICAgICAgICAgICAgIHshZW52SW5mby5naXRTdGF0ZS5pc0NsZWFuICYmICcsIGhhcyBsb2NhbCBjaGFuZ2VzJ31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8VGV4dD4tIEN1cnJlbnQgc2Vzc2lvbiB0cmFuc2NyaXB0PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IHdyYXA9XCJ3cmFwXCIgZGltQ29sb3I+XG4gICAgICAgICAgICAgIFdlIHdpbGwgdXNlIHlvdXIgZmVlZGJhY2sgdG8gZGVidWcgcmVsYXRlZCBpc3N1ZXMgb3IgdG8gaW1wcm92ZXsnICd9XG4gICAgICAgICAgICAgIENsYXVkZSBDb2RlJmFwb3M7cyBmdW5jdGlvbmFsaXR5IChlZy4gdG8gcmVkdWNlIHRoZSByaXNrIG9mIGJ1Z3NcbiAgICAgICAgICAgICAgb2NjdXJyaW5nIGluIHRoZSBmdXR1cmUpLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBQcmVzcyA8VGV4dCBib2xkPkVudGVyPC9UZXh0PiB0byBjb25maXJtIGFuZCBzdWJtaXQuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAge3N0ZXAgPT09ICdzdWJtaXR0aW5nJyAmJiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0+XG4gICAgICAgICAgPFRleHQ+U3VibWl0dGluZyByZXBvcnTigKY8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAge3N0ZXAgPT09ICdkb25lJyAmJiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj5UaGFuayB5b3UgZm9yIHlvdXIgcmVwb3J0ITwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtmZWVkYmFja0lkICYmIDxUZXh0IGRpbUNvbG9yPkZlZWRiYWNrIElEOiB7ZmVlZGJhY2tJZH08L1RleHQ+fVxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0PlByZXNzIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+RW50ZXIgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIHRvIG9wZW4geW91ciBicm93c2VyIGFuZCBkcmFmdCBhIEdpdEh1YiBpc3N1ZSwgb3IgYW55IG90aGVyIGtleSB0b1xuICAgICAgICAgICAgICBjbG9zZS5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaXRIdWJJc3N1ZVVybChcbiAgZmVlZGJhY2tJZDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICBlcnJvcnM6IEFycmF5PHtcbiAgICBlcnJvcj86IHN0cmluZ1xuICAgIHRpbWVzdGFtcD86IHN0cmluZ1xuICB9Pixcbik6IHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplZFRpdGxlID0gcmVkYWN0U2Vuc2l0aXZlSW5mbyh0aXRsZSlcbiAgY29uc3Qgc2FuaXRpemVkRGVzY3JpcHRpb24gPSByZWRhY3RTZW5zaXRpdmVJbmZvKGRlc2NyaXB0aW9uKVxuXG4gIGNvbnN0IGJvZHlQcmVmaXggPVxuICAgIGAqKkJ1ZyBEZXNjcmlwdGlvbioqXFxuJHtzYW5pdGl6ZWREZXNjcmlwdGlvbn1cXG5cXG5gICtcbiAgICBgKipFbnZpcm9ubWVudCBJbmZvKipcXG5gICtcbiAgICBgLSBQbGF0Zm9ybTogJHtlbnYucGxhdGZvcm19XFxuYCArXG4gICAgYC0gVGVybWluYWw6ICR7ZW52LnRlcm1pbmFsfVxcbmAgK1xuICAgIGAtIFZlcnNpb246ICR7TUFDUk8uVkVSU0lPTiB8fCAndW5rbm93bid9XFxuYCArXG4gICAgYC0gRmVlZGJhY2sgSUQ6ICR7ZmVlZGJhY2tJZH1cXG5gICtcbiAgICBgXFxuKipFcnJvcnMqKlxcblxcYFxcYFxcYGpzb25cXG5gXG4gIGNvbnN0IGVycm9yU3VmZml4ID0gYFxcblxcYFxcYFxcYFxcbmBcbiAgY29uc3QgZXJyb3JzSnNvbiA9IGpzb25TdHJpbmdpZnkoZXJyb3JzKVxuXG4gIGNvbnN0IGJhc2VVcmwgPSBgJHtHSVRIVUJfSVNTVUVTX1JFUE9fVVJMfS9uZXc/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoc2FuaXRpemVkVGl0bGUpfSZsYWJlbHM9dXNlci1yZXBvcnRlZCxidWcmYm9keT1gXG4gIGNvbnN0IHRydW5jYXRpb25Ob3RlID0gYFxcbioqTm90ZToqKiBDb250ZW50IHdhcyB0cnVuY2F0ZWQuXFxuYFxuXG4gIGNvbnN0IGVuY29kZWRQcmVmaXggPSBlbmNvZGVVUklDb21wb25lbnQoYm9keVByZWZpeClcbiAgY29uc3QgZW5jb2RlZFN1ZmZpeCA9IGVuY29kZVVSSUNvbXBvbmVudChlcnJvclN1ZmZpeClcbiAgY29uc3QgZW5jb2RlZE5vdGUgPSBlbmNvZGVVUklDb21wb25lbnQodHJ1bmNhdGlvbk5vdGUpXG4gIGNvbnN0IGVuY29kZWRFcnJvcnMgPSBlbmNvZGVVUklDb21wb25lbnQoZXJyb3JzSnNvbilcblxuICAvLyBDYWxjdWxhdGUgc3BhY2UgYXZhaWxhYmxlIGZvciBlcnJvcnNcbiAgY29uc3Qgc3BhY2VGb3JFcnJvcnMgPVxuICAgIEdJVEhVQl9VUkxfTElNSVQgLVxuICAgIGJhc2VVcmwubGVuZ3RoIC1cbiAgICBlbmNvZGVkUHJlZml4Lmxlbmd0aCAtXG4gICAgZW5jb2RlZFN1ZmZpeC5sZW5ndGggLVxuICAgIGVuY29kZWROb3RlLmxlbmd0aFxuXG4gIC8vIElmIGRlc2NyaXB0aW9uIGFsb25lIGV4Y2VlZHMgbGltaXQsIHRydW5jYXRlIGV2ZXJ5dGhpbmdcbiAgaWYgKHNwYWNlRm9yRXJyb3JzIDw9IDApIHtcbiAgICBjb25zdCBlbGxpcHNpcyA9IGVuY29kZVVSSUNvbXBvbmVudCgn4oCmJylcbiAgICBjb25zdCBidWZmZXIgPSA1MCAvLyBFeHRyYSBzYWZldHkgbWFyZ2luXG4gICAgY29uc3QgbWF4RW5jb2RlZExlbmd0aCA9XG4gICAgICBHSVRIVUJfVVJMX0xJTUlUIC1cbiAgICAgIGJhc2VVcmwubGVuZ3RoIC1cbiAgICAgIGVsbGlwc2lzLmxlbmd0aCAtXG4gICAgICBlbmNvZGVkTm90ZS5sZW5ndGggLVxuICAgICAgYnVmZmVyXG4gICAgY29uc3QgZnVsbEJvZHkgPSBib2R5UHJlZml4ICsgZXJyb3JzSnNvbiArIGVycm9yU3VmZml4XG4gICAgbGV0IGVuY29kZWRGdWxsQm9keSA9IGVuY29kZVVSSUNvbXBvbmVudChmdWxsQm9keSlcblxuICAgIGlmIChlbmNvZGVkRnVsbEJvZHkubGVuZ3RoID4gbWF4RW5jb2RlZExlbmd0aCkge1xuICAgICAgZW5jb2RlZEZ1bGxCb2R5ID0gZW5jb2RlZEZ1bGxCb2R5LnNsaWNlKDAsIG1heEVuY29kZWRMZW5ndGgpXG4gICAgICAvLyBEb24ndCBjdXQgaW4gbWlkZGxlIG9mICVYWCBzZXF1ZW5jZVxuICAgICAgY29uc3QgbGFzdFBlcmNlbnQgPSBlbmNvZGVkRnVsbEJvZHkubGFzdEluZGV4T2YoJyUnKVxuICAgICAgaWYgKGxhc3RQZXJjZW50ID49IGVuY29kZWRGdWxsQm9keS5sZW5ndGggLSAyKSB7XG4gICAgICAgIGVuY29kZWRGdWxsQm9keSA9IGVuY29kZWRGdWxsQm9keS5zbGljZSgwLCBsYXN0UGVyY2VudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVVybCArIGVuY29kZWRGdWxsQm9keSArIGVsbGlwc2lzICsgZW5jb2RlZE5vdGVcbiAgfVxuXG4gIC8vIElmIGVycm9ycyBmaXQsIG5vIHRydW5jYXRpb24gbmVlZGVkXG4gIGlmIChlbmNvZGVkRXJyb3JzLmxlbmd0aCA8PSBzcGFjZUZvckVycm9ycykge1xuICAgIHJldHVybiBiYXNlVXJsICsgZW5jb2RlZFByZWZpeCArIGVuY29kZWRFcnJvcnMgKyBlbmNvZGVkU3VmZml4XG4gIH1cblxuICAvLyBUcnVuY2F0ZSBlcnJvcnMgdG8gZml0IChwcmlvcml0aXplIGtlZXBpbmcgZGVzY3JpcHRpb24pXG4gIC8vIFNsaWNlIGVuY29kZWQgZXJyb3JzIGRpcmVjdGx5LCB0aGVuIHRyaW0gdG8gYXZvaWQgY3V0dGluZyAlWFggc2VxdWVuY2VzXG4gIGNvbnN0IGVsbGlwc2lzID0gZW5jb2RlVVJJQ29tcG9uZW50KCfigKYnKVxuICBjb25zdCBidWZmZXIgPSA1MCAvLyBFeHRyYSBzYWZldHkgbWFyZ2luXG4gIGxldCB0cnVuY2F0ZWRFbmNvZGVkRXJyb3JzID0gZW5jb2RlZEVycm9ycy5zbGljZShcbiAgICAwLFxuICAgIHNwYWNlRm9yRXJyb3JzIC0gZWxsaXBzaXMubGVuZ3RoIC0gYnVmZmVyLFxuICApXG4gIC8vIElmIHdlIGN1dCBpbiBtaWRkbGUgb2YgJVhYLCBiYWNrIHVwIHRvIGJlZm9yZSB0aGUgJVxuICBjb25zdCBsYXN0UGVyY2VudCA9IHRydW5jYXRlZEVuY29kZWRFcnJvcnMubGFzdEluZGV4T2YoJyUnKVxuICBpZiAobGFzdFBlcmNlbnQgPj0gdHJ1bmNhdGVkRW5jb2RlZEVycm9ycy5sZW5ndGggLSAyKSB7XG4gICAgdHJ1bmNhdGVkRW5jb2RlZEVycm9ycyA9IHRydW5jYXRlZEVuY29kZWRFcnJvcnMuc2xpY2UoMCwgbGFzdFBlcmNlbnQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIGJhc2VVcmwgK1xuICAgIGVuY29kZWRQcmVmaXggK1xuICAgIHRydW5jYXRlZEVuY29kZWRFcnJvcnMgK1xuICAgIGVsbGlwc2lzICtcbiAgICBlbmNvZGVkU3VmZml4ICtcbiAgICBlbmNvZGVkTm90ZVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGUoXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGFib3J0U2lnbmFsOiBBYm9ydFNpZ25hbCxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUhhaWt1KHtcbiAgICAgIHN5c3RlbVByb21wdDogYXNTeXN0ZW1Qcm9tcHQoW1xuICAgICAgICAnR2VuZXJhdGUgYSBjb25jaXNlLCB0ZWNobmljYWwgaXNzdWUgdGl0bGUgKG1heCA4MCBjaGFycykgZm9yIGEgcHVibGljIEdpdEh1YiBpc3N1ZSBiYXNlZCBvbiB0aGlzIGJ1ZyByZXBvcnQgZm9yIENsYXVkZSBDb2RlLicsXG4gICAgICAgICdDbGF1ZGUgQ29kZSBpcyBhbiBhZ2VudGljIGNvZGluZyBDTEkgYmFzZWQgb24gdGhlIEFudGhyb3BpYyBBUEkuJyxcbiAgICAgICAgJ1RoZSB0aXRsZSBzaG91bGQ6JyxcbiAgICAgICAgJy0gSW5jbHVkZSB0aGUgdHlwZSBvZiBpc3N1ZSBbQnVnXSBvciBbRmVhdHVyZSBSZXF1ZXN0XSBhcyB0aGUgZmlyc3QgdGhpbmcgaW4gdGhlIHRpdGxlJyxcbiAgICAgICAgJy0gQmUgY29uY2lzZSwgc3BlY2lmaWMgYW5kIGRlc2NyaXB0aXZlIG9mIHRoZSBhY3R1YWwgcHJvYmxlbScsXG4gICAgICAgICctIFVzZSB0ZWNobmljYWwgdGVybWlub2xvZ3kgYXBwcm9wcmlhdGUgZm9yIGEgc29mdHdhcmUgaXNzdWUnLFxuICAgICAgICAnLSBGb3IgZXJyb3IgbWVzc2FnZXMsIGV4dHJhY3QgdGhlIGtleSBlcnJvciAoZS5nLiwgXCJNaXNzaW5nIFRvb2wgUmVzdWx0IEJsb2NrXCIgcmF0aGVyIHRoYW4gdGhlIGZ1bGwgbWVzc2FnZSknLFxuICAgICAgICAnLSBCZSBkaXJlY3QgYW5kIGNsZWFyIGZvciBkZXZlbG9wZXJzIHRvIHVuZGVyc3RhbmQgdGhlIHByb2JsZW0nLFxuICAgICAgICAnLSBJZiB5b3UgY2Fubm90IGRldGVybWluZSBhIGNsZWFyIGlzc3VlLCB1c2UgXCJCdWcgUmVwb3J0OiBbYnJpZWYgZGVzY3JpcHRpb25dXCInLFxuICAgICAgICAnLSBBbnkgTExNIEFQSSBlcnJvcnMgYXJlIGZyb20gdGhlIEFudGhyb3BpYyBBUEksIG5vdCBmcm9tIGFueSBvdGhlciBtb2RlbCBwcm92aWRlcicsXG4gICAgICAgICdZb3VyIHJlc3BvbnNlIHdpbGwgYmUgZGlyZWN0bHkgdXNlZCBhcyB0aGUgdGl0bGUgb2YgdGhlIEdpdGh1YiBpc3N1ZSwgYW5kIGFzIHN1Y2ggc2hvdWxkIG5vdCBjb250YWluIGFueSBvdGhlciBjb21tZW50YXJ5IG9yIGV4cGxhaW5hdGlvbicsXG4gICAgICAgICdFeGFtcGxlcyBvZiBnb29kIHRpdGxlcyBpbmNsdWRlOiBcIltCdWddIEF1dG8tQ29tcGFjdCB0cmlnZ2VycyB0byBzb29uXCIsIFwiW0J1Z10gQW50aHJvcGljIEFQSSBFcnJvcjogTWlzc2luZyBUb29sIFJlc3VsdCBCbG9ja1wiLCBcIltCdWddIEVycm9yOiBJbnZhbGlkIE1vZGVsIE5hbWUgZm9yIE9wdXNcIicsXG4gICAgICBdKSxcbiAgICAgIHVzZXJQcm9tcHQ6IGRlc2NyaXB0aW9uLFxuICAgICAgc2lnbmFsOiBhYm9ydFNpZ25hbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OiBmYWxzZSxcbiAgICAgICAgdG9vbENob2ljZTogdW5kZWZpbmVkLFxuICAgICAgICBpc05vbkludGVyYWN0aXZlU2Vzc2lvbjogZmFsc2UsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIHF1ZXJ5U291cmNlOiAnZmVlZGJhY2snLFxuICAgICAgICBtY3BUb29sczogW10sXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICByZXNwb25zZS5tZXNzYWdlLmNvbnRlbnRbMF0/LnR5cGUgPT09ICd0ZXh0J1xuICAgICAgICA/IHJlc3BvbnNlLm1lc3NhZ2UuY29udGVudFswXS50ZXh0XG4gICAgICAgIDogJ0J1ZyBSZXBvcnQnXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgdGl0bGUgY29udGFpbnMgYW4gQVBJIGVycm9yIG1lc3NhZ2VcbiAgICBpZiAoc3RhcnRzV2l0aEFwaUVycm9yUHJlZml4KHRpdGxlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUZhbGxiYWNrVGl0bGUoZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhbnkgZXJyb3IgaW4gdGl0bGUgZ2VuZXJhdGlvbiwgdXNlIGEgZmFsbGJhY2sgdGl0bGVcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgICByZXR1cm4gY3JlYXRlRmFsbGJhY2tUaXRsZShkZXNjcmlwdGlvbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWxsYmFja1RpdGxlKGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBDcmVhdGUgYSBzYWZlIGZhbGxiYWNrIHRpdGxlIGJhc2VkIG9uIHRoZSBidWcgZGVzY3JpcHRpb25cblxuICAvLyBUcnkgdG8gZXh0cmFjdCBhIG1lYW5pbmdmdWwgdGl0bGUgZnJvbSB0aGUgZmlyc3QgbGluZVxuICBjb25zdCBmaXJzdExpbmUgPSBkZXNjcmlwdGlvbi5zcGxpdCgnXFxuJylbMF0gfHwgJydcblxuICAvLyBJZiB0aGUgZmlyc3QgbGluZSBpcyB2ZXJ5IHNob3J0LCB1c2UgaXQgZGlyZWN0bHlcbiAgaWYgKGZpcnN0TGluZS5sZW5ndGggPD0gNjAgJiYgZmlyc3RMaW5lLmxlbmd0aCA+IDUpIHtcbiAgICByZXR1cm4gZmlyc3RMaW5lXG4gIH1cblxuICAvLyBGb3IgbG9uZ2VyIGRlc2NyaXB0aW9ucywgY3JlYXRlIGEgdHJ1bmNhdGVkIHZlcnNpb25cbiAgLy8gVHJ1bmNhdGUgYXQgd29yZCBib3VuZGFyaWVzIHdoZW4gcG9zc2libGVcbiAgbGV0IHRydW5jYXRlZCA9IGZpcnN0TGluZS5zbGljZSgwLCA2MClcbiAgaWYgKGZpcnN0TGluZS5sZW5ndGggPiA2MCkge1xuICAgIC8vIEZpbmQgdGhlIGxhc3Qgc3BhY2UgYmVmb3JlIHRoZSA2MCBjaGFyIGxpbWl0XG4gICAgY29uc3QgbGFzdFNwYWNlID0gdHJ1bmNhdGVkLmxhc3RJbmRleE9mKCcgJylcbiAgICBpZiAobGFzdFNwYWNlID4gMzApIHtcbiAgICAgIC8vIE9ubHkgdHJpbSBhdCB3b3JkIGlmIHdlJ3JlIG5vdCBjdXR0aW5nIHRvbyBtdWNoXG4gICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQuc2xpY2UoMCwgbGFzdFNwYWNlKVxuICAgIH1cbiAgICB0cnVuY2F0ZWQgKz0gJy4uLidcbiAgfVxuXG4gIHJldHVybiB0cnVuY2F0ZWQubGVuZ3RoIDwgMTAgPyAnQnVnIFJlcG9ydCcgOiB0cnVuY2F0ZWRcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHNhbml0aXplIGFuZCBsb2cgZXJyb3JzIHdpdGhvdXQgZXhwb3NpbmcgQVBJIGtleXNcbmZ1bmN0aW9uIHNhbml0aXplQW5kTG9nRXJyb3IoZXJyOiB1bmtub3duKTogdm9pZCB7XG4gIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIC8vIENyZWF0ZSBhIGNvcHkgd2l0aCBwb3RlbnRpYWxseSBzZW5zaXRpdmUgaW5mbyByZWRhY3RlZFxuICAgIGNvbnN0IHNhZmVFcnJvciA9IG5ldyBFcnJvcihyZWRhY3RTZW5zaXRpdmVJbmZvKGVyci5tZXNzYWdlKSlcblxuICAgIC8vIEFsc28gcmVkYWN0IHRoZSBzdGFjayB0cmFjZSBpZiBwcmVzZW50XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgc2FmZUVycm9yLnN0YWNrID0gcmVkYWN0U2Vuc2l0aXZlSW5mbyhlcnIuc3RhY2spXG4gICAgfVxuXG4gICAgbG9nRXJyb3Ioc2FmZUVycm9yKVxuICB9IGVsc2Uge1xuICAgIC8vIEZvciBub24tRXJyb3Igb2JqZWN0cywgY29udmVydCB0byBzdHJpbmcgYW5kIHJlZGFjdCBzZW5zaXRpdmUgaW5mb1xuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gcmVkYWN0U2Vuc2l0aXZlSW5mbyhTdHJpbmcoZXJyKSlcbiAgICBsb2dFcnJvcihuZXcgRXJyb3IoZXJyb3JTdHJpbmcpKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEZlZWRiYWNrKFxuICBkYXRhOiBGZWVkYmFja0RhdGEsXG4gIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGZlZWRiYWNrSWQ/OiBzdHJpbmc7IGlzWmRyT3JnPzogYm9vbGVhbiB9PiB7XG4gIGlmIChpc0Vzc2VudGlhbFRyYWZmaWNPbmx5KCkpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XG4gIH1cblxuICB0cnkge1xuICAgIC8vIEVuc3VyZSBPQXV0aCB0b2tlbiBpcyBmcmVzaCBiZWZvcmUgZ2V0dGluZyBhdXRoIGhlYWRlcnNcbiAgICAvLyBUaGlzIHByZXZlbnRzIDQwMSBlcnJvcnMgZnJvbSBzdGFsZSBjYWNoZWQgdG9rZW5zXG4gICAgYXdhaXQgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkKClcblxuICAgIGNvbnN0IGF1dGhSZXN1bHQgPSBnZXRBdXRoSGVhZGVycygpXG4gICAgaWYgKGF1dGhSZXN1bHQuZXJyb3IpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdVc2VyLUFnZW50JzogZ2V0VXNlckFnZW50KCksXG4gICAgICAuLi5hdXRoUmVzdWx0LmhlYWRlcnMsXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgJ2h0dHBzOi8vYXBpLmFudGhyb3BpYy5jb20vYXBpL2NsYXVkZV9jbGlfZmVlZGJhY2snLFxuICAgICAge1xuICAgICAgICBjb250ZW50OiBqc29uU3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgdGltZW91dDogMzAwMDAsIC8vIDMwIHNlY29uZCB0aW1lb3V0IHRvIHByZXZlbnQgaGFuZ2luZ1xuICAgICAgICBzaWduYWwsXG4gICAgICB9LFxuICAgIClcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YVxuICAgICAgaWYgKHJlc3VsdD8uZmVlZGJhY2tfaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmVlZGJhY2tJZDogcmVzdWx0LmZlZWRiYWNrX2lkIH1cbiAgICAgIH1cbiAgICAgIHNhbml0aXplQW5kTG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAnRmFpbGVkIHRvIHN1Ym1pdCBmZWVkYmFjazogcmVxdWVzdCBkaWQgbm90IHJldHVybiBmZWVkYmFja19pZCcsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XG4gICAgfVxuXG4gICAgc2FuaXRpemVBbmRMb2dFcnJvcihcbiAgICAgIG5ldyBFcnJvcignRmFpbGVkIHRvIHN1Ym1pdCBmZWVkYmFjazonICsgcmVzcG9uc2Uuc3RhdHVzKSxcbiAgICApXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uL2Fib3J0IC0gZG9uJ3QgbG9nIGFzIGVycm9yXG4gICAgaWYgKGF4aW9zLmlzQ2FuY2VsKGVycikpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycikgJiYgZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMykge1xuICAgICAgY29uc3QgZXJyb3JEYXRhID0gZXJyLnJlc3BvbnNlLmRhdGFcbiAgICAgIGlmIChcbiAgICAgICAgZXJyb3JEYXRhPy5lcnJvcj8udHlwZSA9PT0gJ3Blcm1pc3Npb25fZXJyb3InICYmXG4gICAgICAgIGVycm9yRGF0YT8uZXJyb3I/Lm1lc3NhZ2U/LmluY2x1ZGVzKCdDdXN0b20gZGF0YSByZXRlbnRpb24gc2V0dGluZ3MnKVxuICAgICAgKSB7XG4gICAgICAgIHNhbml0aXplQW5kTG9nRXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0Nhbm5vdCBzdWJtaXQgZmVlZGJhY2sgYmVjYXVzZSBjdXN0b20gZGF0YSByZXRlbnRpb24gc2V0dGluZ3MgYXJlIGVuYWJsZWQnLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGlzWmRyT3JnOiB0cnVlIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVXNlIG91ciBzYWZlIGVycm9yIGxvZ2dpbmcgZnVuY3Rpb24gdG8gYXZvaWQgbGVha2luZyBBUEkga2V5c1xuICAgIHNhbml0aXplQW5kTG9nRXJyb3IoZXJyKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxVQUFVQyxZQUFZO0FBZ0Z4QixTQUFTQyxvQkFBb0JDLE1BQXNCO0FBQ3hELE1BQUlDLFdBQVdEO0FBSWZDLGFBQVdBLFNBQVNDLFFBQVEsMkJBQTJCLHNCQUFzQjtBQUU3RUQsYUFBV0EsU0FBU0M7O0lBRWxCO0lBQ0E7RUFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQixrQ0FDQSwrQkFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUFRLHVCQUF1QixvQkFBb0I7QUFHdkVELGFBQVdBLFNBQVNDOztJQUVsQjtJQUNBO0VBQ0Y7QUFHQUQsYUFBV0EsU0FBU0M7O0lBRWxCO0lBQ0E7RUFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQix1REFDQSxzQkFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQix1RUFDQSxvQkFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQiw2REFDQSx3QkFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQixnRUFDQSx3QkFDRjtBQUdBRCxhQUFXQSxTQUFTQyxRQUNsQiw0RUFDQSxjQUNGO0FBRUEsU0FBT0Q7QUFDVDtBQUdBLFNBQVNFLHdCQUdOO0FBRUQsU0FBT0Msa0JBQWtCLEVBQUVDLElBQUlDLGVBQWE7QUFFMUMs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QjtBQUVBNEUsd0JBQ0UsSUFBSUUsTUFBTSwrQkFBK0IxQixTQUFTeUMsTUFBTSxDQUMxRDtBQUNBLFdBQU87TUFBRTdGLFNBQVM7SUFBTTtFQUMxQixTQUFTNkUsS0FBSztBQUVaLFFBQUlhLGNBQU1JLFNBQVNqQixHQUFHLEdBQUc7QUFDdkIsYUFBTztRQUFFN0UsU0FBUztNQUFNO0lBQzFCO0FBRUEsUUFBSTBGLGNBQU1LLGFBQWFsQixHQUFHLEtBQUtBLElBQUl6QixVQUFVeUMsV0FBVyxLQUFLO0FBQzNELFlBQU1HLFlBQVluQixJQUFJekIsU0FBUytCO0FBQy9CLFVBQ0VhLFdBQVc3SyxPQUFPaUosU0FBUyxzQkFDM0I0QixXQUFXN0ssT0FBTytJLFNBQVMrQixTQUFTLGdDQUFnQyxHQUNwRTtBQUNBckIsNEJBQ0UsSUFBSUUsTUFDRiwyRUFDRixDQUNGO0FBQ0EsZUFBTztVQUFFOUUsU0FBUztVQUFPSyxVQUFVO1FBQUs7TUFDMUM7SUFDRjtBQUVBdUUsd0JBQW9CQyxHQUFHO0FBQ3ZCLFdBQU87TUFBRTdFLFNBQVM7SUFBTTtFQUMxQjtBQUNGO0FBdHZCQSxJQTRDTTJDLGtCQUNBUjtBQTdDTjs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTVEsbUJBQW1CO0FBQ3pCLElBQU1SLHlCQUNKLFFBQ0ksNkRBQ0E7OzsiLAogICJuYW1lcyI6IFsicmVhZEZpbGUiLCAic3RhdCIsICJyZWRhY3RTZW5zaXRpdmVJbmZvIiwgInRleHQiLCAicmVkYWN0ZWQiLCAicmVwbGFjZSIsICJnZXRTYW5pdGl6ZWRFcnJvckxvZ3MiLCAiZ2V0SW5NZW1vcnlFcnJvcnMiLCAibWFwIiwgImVycm9ySW5mbyIsICJlcnJvckNvcHkiLCAiZXJyb3IiLCAibG9hZFJhd1RyYW5zY3JpcHRKc29ubCIsICJ0cmFuc2NyaXB0UGF0aCIsICJnZXRUcmFuc2NyaXB0UGF0aCIsICJzaXplIiwgIk1BWF9UUkFOU0NSSVBUX1JFQURfQllURVMiLCAibG9nRm9yRGVidWdnaW5nIiwgImxldmVsIiwgIkZlZWRiYWNrIiwgImFib3J0U2lnbmFsIiwgIm1lc3NhZ2VzIiwgImluaXRpYWxEZXNjcmlwdGlvbiIsICJvbkRvbmUiLCAiYmFja2dyb3VuZFRhc2tzIiwgInN0ZXAiLCAic2V0U3RlcCIsICJ1c2VTdGF0ZSIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgImRlc2NyaXB0aW9uIiwgInNldERlc2NyaXB0aW9uIiwgImZlZWRiYWNrSWQiLCAic2V0RmVlZGJhY2tJZCIsICJzZXRFcnJvciIsICJlbnZJbmZvIiwgInNldEVudkluZm8iLCAiaXNHaXQiLCAiZ2l0U3RhdGUiLCAidGl0bGUiLCAic2V0VGl0bGUiLCAidGV4dElucHV0Q29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAiY29sdW1ucyIsICJ1c2VFZmZlY3QiLCAibG9hZEVudkluZm8iLCAiZ2V0SXNHaXQiLCAiZ2V0R2l0U3RhdGUiLCAic3VibWl0UmVwb3J0IiwgInVzZUNhbGxiYWNrIiwgInNhbml0aXplZEVycm9ycyIsICJsYXN0QXNzaXN0YW50TWVzc2FnZSIsICJnZXRMYXN0QXNzaXN0YW50TWVzc2FnZSIsICJsYXN0QXNzaXN0YW50TWVzc2FnZUlkIiwgInJlcXVlc3RJZCIsICJkaXNrVHJhbnNjcmlwdHMiLCAicmF3VHJhbnNjcmlwdEpzb25sIiwgIlByb21pc2UiLCAiYWxsIiwgImxvYWRBbGxTdWJhZ2VudFRyYW5zY3JpcHRzRnJvbURpc2siLCAidGVhbW1hdGVUcmFuc2NyaXB0cyIsICJleHRyYWN0VGVhbW1hdGVUcmFuc2NyaXB0c0Zyb21UYXNrcyIsICJzdWJhZ2VudFRyYW5zY3JpcHRzIiwgInJlcG9ydERhdGEiLCAibGF0ZXN0QXNzaXN0YW50TWVzc2FnZUlkIiwgIm1lc3NhZ2VfY291bnQiLCAibGVuZ3RoIiwgImRhdGV0aW1lIiwgIkRhdGUiLCAidG9JU09TdHJpbmciLCAicGxhdGZvcm0iLCAiZW52IiwgImdpdFJlcG8iLCAidGVybWluYWwiLCAidmVyc2lvbiIsICJNQUNSTyIsICJWRVJTSU9OIiwgInRyYW5zY3JpcHQiLCAibm9ybWFsaXplTWVzc2FnZXNGb3JBUEkiLCAiZXJyb3JzIiwgImxhc3RBcGlSZXF1ZXN0IiwgImdldExhc3RBUElSZXF1ZXN0IiwgIk9iamVjdCIsICJrZXlzIiwgInJlc3VsdCIsICJ0IiwgInN1Ym1pdEZlZWRiYWNrIiwgImdlbmVyYXRlVGl0bGUiLCAic3VjY2VzcyIsICJsb2dFdmVudCIsICJmZWVkYmFja19pZCIsICJsYXN0X2Fzc2lzdGFudF9tZXNzYWdlX2lkIiwgImxvZ0V2ZW50VG8xUCIsICJpc1pkck9yZyIsICJoYW5kbGVDYW5jZWwiLCAiZGlzcGxheSIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAidXNlSW5wdXQiLCAiaW5wdXQiLCAia2V5IiwgInJldHVybiIsICJpc3N1ZVVybCIsICJjcmVhdGVHaXRIdWJJc3N1ZVVybCIsICJvcGVuQnJvd3NlciIsICJleGl0U3RhdGUiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgInZhbHVlIiwgImJyYW5jaE5hbWUiLCAiY29tbWl0SGFzaCIsICJzbGljZSIsICJyZW1vdGVVcmwiLCAiaXNIZWFkT25SZW1vdGUiLCAiaXNDbGVhbiIsICJzYW5pdGl6ZWRUaXRsZSIsICJzYW5pdGl6ZWREZXNjcmlwdGlvbiIsICJib2R5UHJlZml4IiwgImVycm9yU3VmZml4IiwgImVycm9yc0pzb24iLCAianNvblN0cmluZ2lmeSIsICJiYXNlVXJsIiwgIkdJVEhVQl9JU1NVRVNfUkVQT19VUkwiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInRydW5jYXRpb25Ob3RlIiwgImVuY29kZWRQcmVmaXgiLCAiZW5jb2RlZFN1ZmZpeCIsICJlbmNvZGVkTm90ZSIsICJlbmNvZGVkRXJyb3JzIiwgInNwYWNlRm9yRXJyb3JzIiwgIkdJVEhVQl9VUkxfTElNSVQiLCAiZWxsaXBzaXMiLCAiYnVmZmVyIiwgIm1heEVuY29kZWRMZW5ndGgiLCAiZnVsbEJvZHkiLCAiZW5jb2RlZEZ1bGxCb2R5IiwgImxhc3RQZXJjZW50IiwgImxhc3RJbmRleE9mIiwgInRydW5jYXRlZEVuY29kZWRFcnJvcnMiLCAicmVzcG9uc2UiLCAicXVlcnlIYWlrdSIsICJzeXN0ZW1Qcm9tcHQiLCAiYXNTeXN0ZW1Qcm9tcHQiLCAidXNlclByb21wdCIsICJzaWduYWwiLCAib3B0aW9ucyIsICJoYXNBcHBlbmRTeXN0ZW1Qcm9tcHQiLCAidG9vbENob2ljZSIsICJ1bmRlZmluZWQiLCAiaXNOb25JbnRlcmFjdGl2ZVNlc3Npb24iLCAiYWdlbnRzIiwgInF1ZXJ5U291cmNlIiwgIm1jcFRvb2xzIiwgIm1lc3NhZ2UiLCAiY29udGVudCIsICJ0eXBlIiwgInN0YXJ0c1dpdGhBcGlFcnJvclByZWZpeCIsICJjcmVhdGVGYWxsYmFja1RpdGxlIiwgImxvZ0Vycm9yIiwgImZpcnN0TGluZSIsICJzcGxpdCIsICJ0cnVuY2F0ZWQiLCAibGFzdFNwYWNlIiwgInNhbml0aXplQW5kTG9nRXJyb3IiLCAiZXJyIiwgIkVycm9yIiwgInNhZmVFcnJvciIsICJzdGFjayIsICJlcnJvclN0cmluZyIsICJTdHJpbmciLCAiZGF0YSIsICJpc0Vzc2VudGlhbFRyYWZmaWNPbmx5IiwgImNoZWNrQW5kUmVmcmVzaE9BdXRoVG9rZW5JZk5lZWRlZCIsICJhdXRoUmVzdWx0IiwgImdldEF1dGhIZWFkZXJzIiwgImhlYWRlcnMiLCAiZ2V0VXNlckFnZW50IiwgImF4aW9zIiwgInBvc3QiLCAidGltZW91dCIsICJzdGF0dXMiLCAiaXNDYW5jZWwiLCAiaXNBeGlvc0Vycm9yIiwgImVycm9yRGF0YSIsICJpbmNsdWRlcyJdCn0K
