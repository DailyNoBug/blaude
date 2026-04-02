#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  asSystemPrompt,
  diffLines,
  escapeXmlAttr,
  extractTextContent,
  getProjectsDir,
  getSessionFilesWithMtime,
  getSessionIdFromLog,
  init_claude,
  init_diff,
  init_messages2 as init_messages,
  init_sessionStorage,
  init_systemPromptType,
  init_xml,
  loadAllLogsFromSessionFile,
  queryWithModel
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  AGENT_TOOL_NAME,
  LEGACY_AGENT_TOOL_NAME,
  countCharInString,
  getDefaultOpusModel,
  init_constants2 as init_constants,
  init_model,
  init_stringUtils
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import "./chunk-SF3TOBTZ.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  toError
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/insights.ts
import { execFileSync } from "child_process";
import { constants as fsConstants } from "fs";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm,
  unlink,
  writeFile
} from "fs/promises";
import { tmpdir } from "os";
import { extname, join } from "path";
function getAnalysisModel() {
  return getDefaultOpusModel();
}
function getInsightsModel() {
  return getDefaultOpusModel();
}
function getDataDir() {
  return join(getClaudeConfigHomeDir(), "usage-data");
}
function getFacetsDir() {
  return join(getDataDir(), "facets");
}
function getSessionMetaDir() {
  return join(getDataDir(), "session-meta");
}
function getLanguageFromPath(filePath) {
  const ext = extname(filePath).toLowerCase();
  return EXTENSION_TO_LANGUAGE[ext] || null;
}
function extractToolStats(log) {
  const toolCounts = {};
  const languages = {};
  let gitCommits = 0;
  let gitPushes = 0;
  let inputTokens = 0;
  let outputTokens = 0;
  let userInterruptions = 0;
  const userResponseTimes = [];
  let toolErrors = 0;
  const toolErrorCategories = {};
  let usesTaskAgent = false;
  let linesAdded = 0;
  let linesRemoved = 0;
  const filesModified = /* @__PURE__ */ new Set();
  const messageHours = [];
  const userMessageTimestamps = [];
  let usesMcp = false;
  let usesWebSearch = false;
  let usesWebFetch = false;
  let lastAssistantTimestamp = null;
  for (const msg of log.messages) {
    const msgTimestamp = msg.timestamp;
    if (msg.type === "assistant" && msg.message) {
      if (msgTimestamp) {
        lastAssistantTimestamp = msgTimestamp;
      }
      const usage = msg.message.usage;
      if (usage) {
        inputTokens += usage.input_tokens || 0;
        outputTokens += usage.output_tokens || 0;
      }
      const content = msg.message.content;
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "tool_use" && "name" in block) {
            const toolName = block.name;
            toolCounts[toolName] = (toolCounts[toolName] || 0) + 1;
            if (toolName === AGENT_TOOL_NAME || toolName === LEGACY_AGENT_TOOL_NAME)
              usesTaskAgent = true;
            if (toolName.startsWith("mcp__")) usesMcp = true;
            if (toolName === "WebSearch") usesWebSearch = true;
            if (toolName === "WebFetch") usesWebFetch = true;
            const input = block.input;
            if (input) {
              const filePath = input.file_path || "";
              if (filePath) {
                const lang = getLanguageFromPath(filePath);
                if (lang) {
                  languages[lang] = (languages[lang] || 0) + 1;
                }
                if (toolName === "Edit" || toolName === "Write") {
                  filesModified.add(filePath);
                }
              }
              if (toolName === "Edit") {
                const oldString = input.old_string || "";
                const newString = input.new_string || "";
                for (const change of diffLines(oldString, newString)) {
                  if (change.added) linesAdded += change.count || 0;
                  if (change.removed) linesRemoved += change.count || 0;
                }
              }
              if (toolName === "Write") {
                const writeContent = input.content || "";
                if (writeContent) {
                  linesAdded += countCharInString(writeContent, "\n") + 1;
                }
              }
              const command = input.command || "";
              if (command.includes("git commit")) gitCommits++;
              if (command.includes("git push")) gitPushes++;
            }
          }
        }
      }
    }
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      let isHumanMessage = false;
      if (typeof content === "string" && content.trim()) {
        isHumanMessage = true;
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            isHumanMessage = true;
            break;
          }
        }
      }
      if (isHumanMessage) {
        if (msgTimestamp) {
          try {
            const msgDate = new Date(msgTimestamp);
            const hour = msgDate.getHours();
            messageHours.push(hour);
            userMessageTimestamps.push(msgTimestamp);
          } catch {
          }
        }
        if (lastAssistantTimestamp && msgTimestamp) {
          const assistantTime = new Date(lastAssistantTimestamp).getTime();
          const userTime = new Date(msgTimestamp).getTime();
          const responseTimeSec = (userTime - assistantTime) / 1e3;
          if (responseTimeSec > 2 && responseTimeSec < 3600) {
            userResponseTimes.push(responseTimeSec);
          }
        }
      }
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "tool_result" && "content" in block) {
            const isError = block.is_error;
            if (isError) {
              toolErrors++;
              const resultContent = block.content;
              let category = "Other";
              if (typeof resultContent === "string") {
                const lowerContent = resultContent.toLowerCase();
                if (lowerContent.includes("exit code")) {
                  category = "Command Failed";
                } else if (lowerContent.includes("rejected") || lowerContent.includes("doesn't want")) {
                  category = "User Rejected";
                } else if (lowerContent.includes("string to replace not found") || lowerContent.includes("no changes")) {
                  category = "Edit Failed";
                } else if (lowerContent.includes("modified since read")) {
                  category = "File Changed";
                } else if (lowerContent.includes("exceeds maximum") || lowerContent.includes("too large")) {
                  category = "File Too Large";
                } else if (lowerContent.includes("file not found") || lowerContent.includes("does not exist")) {
                  category = "File Not Found";
                }
              }
              toolErrorCategories[category] = (toolErrorCategories[category] || 0) + 1;
            }
          }
        }
      }
      if (typeof content === "string") {
        if (content.includes("[Request interrupted by user")) {
          userInterruptions++;
        }
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block && block.text.includes("[Request interrupted by user")) {
            userInterruptions++;
            break;
          }
        }
      }
    }
  }
  return {
    toolCounts,
    languages,
    gitCommits,
    gitPushes,
    inputTokens,
    outputTokens,
    // New stats
    userInterruptions,
    userResponseTimes,
    toolErrors,
    toolErrorCategories,
    usesTaskAgent,
    usesMcp,
    usesWebSearch,
    usesWebFetch,
    // Additional stats
    linesAdded,
    linesRemoved,
    filesModified,
    messageHours,
    userMessageTimestamps
  };
}
function hasValidDates(log) {
  return !Number.isNaN(log.created.getTime()) && !Number.isNaN(log.modified.getTime());
}
function logToSessionMeta(log) {
  const stats = extractToolStats(log);
  const sessionId = getSessionIdFromLog(log) || "unknown";
  const startTime = log.created.toISOString();
  const durationMinutes = Math.round(
    (log.modified.getTime() - log.created.getTime()) / 1e3 / 60
  );
  let userMessageCount = 0;
  let assistantMessageCount = 0;
  for (const msg of log.messages) {
    if (msg.type === "assistant") assistantMessageCount++;
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      let isHumanMessage = false;
      if (typeof content === "string" && content.trim()) {
        isHumanMessage = true;
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            isHumanMessage = true;
            break;
          }
        }
      }
      if (isHumanMessage) {
        userMessageCount++;
      }
    }
  }
  return {
    session_id: sessionId,
    project_path: log.projectPath || "",
    start_time: startTime,
    duration_minutes: durationMinutes,
    user_message_count: userMessageCount,
    assistant_message_count: assistantMessageCount,
    tool_counts: stats.toolCounts,
    languages: stats.languages,
    git_commits: stats.gitCommits,
    git_pushes: stats.gitPushes,
    input_tokens: stats.inputTokens,
    output_tokens: stats.outputTokens,
    first_prompt: log.firstPrompt || "",
    summary: log.summary,
    // New stats
    user_interruptions: stats.userInterruptions,
    user_response_times: stats.userResponseTimes,
    tool_errors: stats.toolErrors,
    tool_error_categories: stats.toolErrorCategories,
    uses_task_agent: stats.usesTaskAgent,
    uses_mcp: stats.usesMcp,
    uses_web_search: stats.usesWebSearch,
    uses_web_fetch: stats.usesWebFetch,
    // Additional stats
    lines_added: stats.linesAdded,
    lines_removed: stats.linesRemoved,
    files_modified: stats.filesModified.size,
    message_hours: stats.messageHours,
    user_message_timestamps: stats.userMessageTimestamps
  };
}
function deduplicateSessionBranches(entries) {
  const bestBySession = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const id = entry.meta.session_id;
    const existing = bestBySession.get(id);
    if (!existing || entry.meta.user_message_count > existing.meta.user_message_count || entry.meta.user_message_count === existing.meta.user_message_count && entry.meta.duration_minutes > existing.meta.duration_minutes) {
      bestBySession.set(id, entry);
    }
  }
  return [...bestBySession.values()];
}
function formatTranscriptForFacets(log) {
  const lines = [];
  const meta = logToSessionMeta(log);
  lines.push(`Session: ${meta.session_id.slice(0, 8)}`);
  lines.push(`Date: ${meta.start_time}`);
  lines.push(`Project: ${meta.project_path}`);
  lines.push(`Duration: ${meta.duration_minutes} min`);
  lines.push("");
  for (const msg of log.messages) {
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      if (typeof content === "string") {
        lines.push(`[User]: ${content.slice(0, 500)}`);
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            lines.push(`[User]: ${block.text.slice(0, 500)}`);
          }
        }
      }
    } else if (msg.type === "assistant" && msg.message) {
      const content = msg.message.content;
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            lines.push(`[Assistant]: ${block.text.slice(0, 300)}`);
          } else if (block.type === "tool_use" && "name" in block) {
            lines.push(`[Tool: ${block.name}]`);
          }
        }
      }
    }
  }
  return lines.join("\n");
}
async function summarizeTranscriptChunk(chunk) {
  try {
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: SUMMARIZE_CHUNK_PROMPT + chunk,
      signal: new AbortController().signal,
      options: {
        model: getAnalysisModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: 500
      }
    });
    const text = extractTextContent(result.message.content);
    return text || chunk.slice(0, 2e3);
  } catch {
    return chunk.slice(0, 2e3);
  }
}
async function formatTranscriptWithSummarization(log) {
  const fullTranscript = formatTranscriptForFacets(log);
  if (fullTranscript.length <= 3e4) {
    return fullTranscript;
  }
  const CHUNK_SIZE = 25e3;
  const chunks = [];
  for (let i = 0; i < fullTranscript.length; i += CHUNK_SIZE) {
    chunks.push(fullTranscript.slice(i, i + CHUNK_SIZE));
  }
  const summaries = await Promise.all(chunks.map(summarizeTranscriptChunk));
  const meta = logToSessionMeta(log);
  const header = [
    `Session: ${meta.session_id.slice(0, 8)}`,
    `Date: ${meta.start_time}`,
    `Project: ${meta.project_path}`,
    `Duration: ${meta.duration_minutes} min`,
    `[Long session - ${chunks.length} parts summarized]`,
    ""
  ].join("\n");
  return header + summaries.join("\n\n---\n\n");
}
async function loadCachedFacets(sessionId) {
  const facetPath = join(getFacetsDir(), `${sessionId}.json`);
  try {
    const content = await readFile(facetPath, { encoding: "utf-8" });
    const parsed = jsonParse(content);
    if (!isValidSessionFacets(parsed)) {
      try {
        await unlink(facetPath);
      } catch {
      }
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
async function saveFacets(facets) {
  try {
    await mkdir(getFacetsDir(), { recursive: true });
  } catch {
  }
  const facetPath = join(getFacetsDir(), `${facets.session_id}.json`);
  await writeFile(facetPath, jsonStringify(facets, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
}
async function loadCachedSessionMeta(sessionId) {
  const metaPath = join(getSessionMetaDir(), `${sessionId}.json`);
  try {
    const content = await readFile(metaPath, { encoding: "utf-8" });
    return jsonParse(content);
  } catch {
    return null;
  }
}
async function saveSessionMeta(meta) {
  try {
    await mkdir(getSessionMetaDir(), { recursive: true });
  } catch {
  }
  const metaPath = join(getSessionMetaDir(), `${meta.session_id}.json`);
  await writeFile(metaPath, jsonStringify(meta, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
}
async function extractFacetsFromAPI(log, sessionId) {
  try {
    const transcript = await formatTranscriptWithSummarization(log);
    const jsonPrompt = `${FACET_EXTRACTION_PROMPT}${transcript}

RESPOND WITH ONLY A VALID JSON OBJECT matching this schema:
{
  "underlying_goal": "What the user fundamentally wanted to achieve",
  "goal_categories": {"category_name": count, ...},
  "outcome": "fully_achieved|mostly_achieved|partially_achieved|not_achieved|unclear_from_transcript",
  "user_satisfaction_counts": {"level": count, ...},
  "claude_helpfulness": "unhelpful|slightly_helpful|moderately_helpful|very_helpful|essential",
  "session_type": "single_task|multi_task|iterative_refinement|exploration|quick_question",
  "friction_counts": {"friction_type": count, ...},
  "friction_detail": "One sentence describing friction or empty",
  "primary_success": "none|fast_accurate_search|correct_code_edits|good_explanations|proactive_help|multi_file_changes|good_debugging",
  "brief_summary": "One sentence: what user wanted and whether they got it"
}`;
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: jsonPrompt,
      signal: new AbortController().signal,
      options: {
        model: getAnalysisModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: 4096
      }
    });
    const text = extractTextContent(result.message.content);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;
    const parsed = jsonParse(jsonMatch[0]);
    if (!isValidSessionFacets(parsed)) return null;
    const facets = { ...parsed, session_id: sessionId };
    return facets;
  } catch (err) {
    logError(new Error(`Facet extraction failed: ${toError(err).message}`));
    return null;
  }
}
function detectMultiClauding(sessions) {
  const OVERLAP_WINDOW_MS = 30 * 6e4;
  const allSessionMessages = [];
  for (const session of sessions) {
    for (const timestamp of session.user_message_timestamps) {
      try {
        const ts = new Date(timestamp).getTime();
        allSessionMessages.push({ ts, sessionId: session.session_id });
      } catch {
      }
    }
  }
  allSessionMessages.sort((a, b) => a.ts - b.ts);
  const multiClaudeSessionPairs = /* @__PURE__ */ new Set();
  const messagesDuringMulticlaude = /* @__PURE__ */ new Set();
  let windowStart = 0;
  const sessionLastIndex = /* @__PURE__ */ new Map();
  for (let i = 0; i < allSessionMessages.length; i++) {
    const msg = allSessionMessages[i];
    while (windowStart < i && msg.ts - allSessionMessages[windowStart].ts > OVERLAP_WINDOW_MS) {
      const expiring = allSessionMessages[windowStart];
      if (sessionLastIndex.get(expiring.sessionId) === windowStart) {
        sessionLastIndex.delete(expiring.sessionId);
      }
      windowStart++;
    }
    const prevIndex = sessionLastIndex.get(msg.sessionId);
    if (prevIndex !== void 0) {
      for (let j = prevIndex + 1; j < i; j++) {
        const between = allSessionMessages[j];
        if (between.sessionId !== msg.sessionId) {
          const pair = [msg.sessionId, between.sessionId].sort().join(":");
          multiClaudeSessionPairs.add(pair);
          messagesDuringMulticlaude.add(
            `${allSessionMessages[prevIndex].ts}:${msg.sessionId}`
          );
          messagesDuringMulticlaude.add(`${between.ts}:${between.sessionId}`);
          messagesDuringMulticlaude.add(`${msg.ts}:${msg.sessionId}`);
          break;
        }
      }
    }
    sessionLastIndex.set(msg.sessionId, i);
  }
  const sessionsWithOverlaps = /* @__PURE__ */ new Set();
  for (const pair of multiClaudeSessionPairs) {
    const [s1, s2] = pair.split(":");
    if (s1) sessionsWithOverlaps.add(s1);
    if (s2) sessionsWithOverlaps.add(s2);
  }
  return {
    overlap_events: multiClaudeSessionPairs.size,
    sessions_involved: sessionsWithOverlaps.size,
    user_messages_during: messagesDuringMulticlaude.size
  };
}
function aggregateData(sessions, facets) {
  const result = {
    total_sessions: sessions.length,
    sessions_with_facets: facets.size,
    date_range: { start: "", end: "" },
    total_messages: 0,
    total_duration_hours: 0,
    total_input_tokens: 0,
    total_output_tokens: 0,
    tool_counts: {},
    languages: {},
    git_commits: 0,
    git_pushes: 0,
    projects: {},
    goal_categories: {},
    outcomes: {},
    satisfaction: {},
    helpfulness: {},
    session_types: {},
    friction: {},
    success: {},
    session_summaries: [],
    // New stats
    total_interruptions: 0,
    total_tool_errors: 0,
    tool_error_categories: {},
    user_response_times: [],
    median_response_time: 0,
    avg_response_time: 0,
    sessions_using_task_agent: 0,
    sessions_using_mcp: 0,
    sessions_using_web_search: 0,
    sessions_using_web_fetch: 0,
    // Additional stats
    total_lines_added: 0,
    total_lines_removed: 0,
    total_files_modified: 0,
    days_active: 0,
    messages_per_day: 0,
    message_hours: [],
    // Multi-clauding stats (matching Python reference)
    multi_clauding: {
      overlap_events: 0,
      sessions_involved: 0,
      user_messages_during: 0
    }
  };
  const dates = [];
  const allResponseTimes = [];
  const allMessageHours = [];
  for (const session of sessions) {
    dates.push(session.start_time);
    result.total_messages += session.user_message_count;
    result.total_duration_hours += session.duration_minutes / 60;
    result.total_input_tokens += session.input_tokens;
    result.total_output_tokens += session.output_tokens;
    result.git_commits += session.git_commits;
    result.git_pushes += session.git_pushes;
    result.total_interruptions += session.user_interruptions;
    result.total_tool_errors += session.tool_errors;
    for (const [cat, count] of Object.entries(session.tool_error_categories)) {
      result.tool_error_categories[cat] = (result.tool_error_categories[cat] || 0) + count;
    }
    allResponseTimes.push(...session.user_response_times);
    if (session.uses_task_agent) result.sessions_using_task_agent++;
    if (session.uses_mcp) result.sessions_using_mcp++;
    if (session.uses_web_search) result.sessions_using_web_search++;
    if (session.uses_web_fetch) result.sessions_using_web_fetch++;
    result.total_lines_added += session.lines_added;
    result.total_lines_removed += session.lines_removed;
    result.total_files_modified += session.files_modified;
    allMessageHours.push(...session.message_hours);
    for (const [tool, count] of Object.entries(session.tool_counts)) {
      result.tool_counts[tool] = (result.tool_counts[tool] || 0) + count;
    }
    for (const [lang, count] of Object.entries(session.languages)) {
      result.languages[lang] = (result.languages[lang] || 0) + count;
    }
    if (session.project_path) {
      result.projects[session.project_path] = (result.projects[session.project_path] || 0) + 1;
    }
    const sessionFacets = facets.get(session.session_id);
    if (sessionFacets) {
      for (const [cat, count] of safeEntries(sessionFacets.goal_categories)) {
        if (count > 0) {
          result.goal_categories[cat] = (result.goal_categories[cat] || 0) + count;
        }
      }
      result.outcomes[sessionFacets.outcome] = (result.outcomes[sessionFacets.outcome] || 0) + 1;
      for (const [level, count] of safeEntries(
        sessionFacets.user_satisfaction_counts
      )) {
        if (count > 0) {
          result.satisfaction[level] = (result.satisfaction[level] || 0) + count;
        }
      }
      result.helpfulness[sessionFacets.claude_helpfulness] = (result.helpfulness[sessionFacets.claude_helpfulness] || 0) + 1;
      result.session_types[sessionFacets.session_type] = (result.session_types[sessionFacets.session_type] || 0) + 1;
      for (const [type, count] of safeEntries(sessionFacets.friction_counts)) {
        if (count > 0) {
          result.friction[type] = (result.friction[type] || 0) + count;
        }
      }
      if (sessionFacets.primary_success !== "none") {
        result.success[sessionFacets.primary_success] = (result.success[sessionFacets.primary_success] || 0) + 1;
      }
    }
    if (result.session_summaries.length < 50) {
      result.session_summaries.push({
        id: session.session_id.slice(0, 8),
        date: session.start_time.split("T")[0] || "",
        summary: session.summary || session.first_prompt.slice(0, 100),
        goal: sessionFacets?.underlying_goal
      });
    }
  }
  dates.sort();
  result.date_range.start = dates[0]?.split("T")[0] || "";
  result.date_range.end = dates[dates.length - 1]?.split("T")[0] || "";
  result.user_response_times = allResponseTimes;
  if (allResponseTimes.length > 0) {
    const sorted = [...allResponseTimes].sort((a, b) => a - b);
    result.median_response_time = sorted[Math.floor(sorted.length / 2)] || 0;
    result.avg_response_time = allResponseTimes.reduce((a, b) => a + b, 0) / allResponseTimes.length;
  }
  const uniqueDays = new Set(dates.map((d) => d.split("T")[0]));
  result.days_active = uniqueDays.size;
  result.messages_per_day = result.days_active > 0 ? Math.round(result.total_messages / result.days_active * 10) / 10 : 0;
  result.message_hours = allMessageHours;
  result.multi_clauding = detectMultiClauding(sessions);
  return result;
}
async function generateSectionInsight(section, dataContext) {
  try {
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: section.prompt + "\n\nDATA:\n" + dataContext,
      signal: new AbortController().signal,
      options: {
        model: getInsightsModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: section.maxTokens
      }
    });
    const text = extractTextContent(result.message.content);
    if (text) {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          return { name: section.name, result: jsonParse(jsonMatch[0]) };
        } catch {
          return { name: section.name, result: null };
        }
      }
    }
    return { name: section.name, result: null };
  } catch (err) {
    logError(new Error(`${section.name} failed: ${toError(err).message}`));
    return { name: section.name, result: null };
  }
}
async function generateParallelInsights(data, facets) {
  const facetSummaries = Array.from(facets.values()).slice(0, 50).map((f) => `- ${f.brief_summary} (${f.outcome}, ${f.claude_helpfulness})`).join("\n");
  const frictionDetails = Array.from(facets.values()).filter((f) => f.friction_detail).slice(0, 20).map((f) => `- ${f.friction_detail}`).join("\n");
  const userInstructions = Array.from(facets.values()).flatMap((f) => f.user_instructions_to_claude || []).slice(0, 15).map((i) => `- ${i}`).join("\n");
  const dataContext = jsonStringify(
    {
      sessions: data.total_sessions,
      analyzed: data.sessions_with_facets,
      date_range: data.date_range,
      messages: data.total_messages,
      hours: Math.round(data.total_duration_hours),
      commits: data.git_commits,
      top_tools: Object.entries(data.tool_counts).sort((a, b) => b[1] - a[1]).slice(0, 8),
      top_goals: Object.entries(data.goal_categories).sort((a, b) => b[1] - a[1]).slice(0, 8),
      outcomes: data.outcomes,
      satisfaction: data.satisfaction,
      friction: data.friction,
      success: data.success,
      languages: data.languages
    },
    null,
    2
  );
  const fullContext = dataContext + "\n\nSESSION SUMMARIES:\n" + facetSummaries + "\n\nFRICTION DETAILS:\n" + frictionDetails + "\n\nUSER INSTRUCTIONS TO CLAUDE:\n" + (userInstructions || "None captured");
  const results = await Promise.all(
    INSIGHT_SECTIONS.map(
      (section) => generateSectionInsight(section, fullContext)
    )
  );
  const insights = {};
  for (const { name, result } of results) {
    if (result) {
      ;
      insights[name] = result;
    }
  }
  const projectAreasText = insights.project_areas?.areas?.map((a) => `- ${a.name}: ${a.description}`).join("\n") || "";
  const bigWinsText = insights.what_works?.impressive_workflows?.map((w) => `- ${w.title}: ${w.description}`).join("\n") || "";
  const frictionText = insights.friction_analysis?.categories?.map((c) => `- ${c.category}: ${c.description}`).join("\n") || "";
  const featuresText = insights.suggestions?.features_to_try?.map((f) => `- ${f.feature}: ${f.one_liner}`).join("\n") || "";
  const patternsText = insights.suggestions?.usage_patterns?.map((p) => `- ${p.title}: ${p.suggestion}`).join("\n") || "";
  const horizonText = insights.on_the_horizon?.opportunities?.map((o) => `- ${o.title}: ${o.whats_possible}`).join("\n") || "";
  const atAGlancePrompt = `You're writing an "At a Glance" summary for a Claude Code usage insights report for Claude Code users. The goal is to help them understand their usage and improve how they can use Claude better, especially as models improve.

Use this 4-part structure:

1. **What's working** - What is the user's unique style of interacting with Claude and what are some impactful things they've done? You can include one or two details, but keep it high level since things might not be fresh in the user's memory. Don't be fluffy or overly complimentary. Also, don't focus on the tool calls they use.

2. **What's hindering you** - Split into (a) Claude's fault (misunderstandings, wrong approaches, bugs) and (b) user-side friction (not providing enough context, environment issues -- ideally more general than just one project). Be honest but constructive.

3. **Quick wins to try** - Specific Claude Code features they could try from the examples below, or a workflow technique if you think it's really compelling. (Avoid stuff like "Ask Claude to confirm before taking actions" or "Type out more context up front" which are less compelling.)

4. **Ambitious workflows for better models** - As we move to much more capable models over the next 3-6 months, what should they prepare for? What workflows that seem impossible now will become possible? Draw from the appropriate section below.

Keep each section to 2-3 not-too-long sentences. Don't overwhelm the user. Don't mention specific numerical stats or underlined_categories from the session data below. Use a coaching tone.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "whats_working": "(refer to instructions above)",
  "whats_hindering": "(refer to instructions above)",
  "quick_wins": "(refer to instructions above)",
  "ambitious_workflows": "(refer to instructions above)"
}

SESSION DATA:
${fullContext}

## Project Areas (what user works on)
${projectAreasText}

## Big Wins (impressive accomplishments)
${bigWinsText}

## Friction Categories (where things go wrong)
${frictionText}

## Features to Try
${featuresText}

## Usage Patterns to Adopt
${patternsText}

## On the Horizon (ambitious workflows for better models)
${horizonText}`;
  const atAGlanceSection = {
    name: "at_a_glance",
    prompt: atAGlancePrompt,
    maxTokens: 8192
  };
  const atAGlanceResult = await generateSectionInsight(atAGlanceSection, "");
  if (atAGlanceResult.result) {
    insights.at_a_glance = atAGlanceResult.result;
  }
  return insights;
}
function escapeHtmlWithBold(text) {
  const escaped = escapeXmlAttr(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
function generateBarChart(data, color, maxItems = 6, fixedOrder) {
  let entries;
  if (fixedOrder) {
    entries = fixedOrder.filter((key) => key in data && (data[key] ?? 0) > 0).map((key) => [key, data[key] ?? 0]);
  } else {
    entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, maxItems);
  }
  if (entries.length === 0) return '<p class="empty">No data</p>';
  const maxVal = Math.max(...entries.map((e) => e[1]));
  return entries.map(([label, count]) => {
    const pct = count / maxVal * 100;
    const cleanLabel = LABEL_MAP[label] || label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return `<div class="bar-row">
        <div class="bar-label">${escapeXmlAttr(cleanLabel)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <div class="bar-value">${count}</div>
      </div>`;
  }).join("\n");
}
function generateResponseTimeHistogram(times) {
  if (times.length === 0) return '<p class="empty">No response time data</p>';
  const buckets = {
    "2-10s": 0,
    "10-30s": 0,
    "30s-1m": 0,
    "1-2m": 0,
    "2-5m": 0,
    "5-15m": 0,
    ">15m": 0
  };
  for (const t of times) {
    if (t < 10) buckets["2-10s"] = (buckets["2-10s"] ?? 0) + 1;
    else if (t < 30) buckets["10-30s"] = (buckets["10-30s"] ?? 0) + 1;
    else if (t < 60) buckets["30s-1m"] = (buckets["30s-1m"] ?? 0) + 1;
    else if (t < 120) buckets["1-2m"] = (buckets["1-2m"] ?? 0) + 1;
    else if (t < 300) buckets["2-5m"] = (buckets["2-5m"] ?? 0) + 1;
    else if (t < 900) buckets["5-15m"] = (buckets["5-15m"] ?? 0) + 1;
    else buckets[">15m"] = (buckets[">15m"] ?? 0) + 1;
  }
  const maxVal = Math.max(...Object.values(buckets));
  if (maxVal === 0) return '<p class="empty">No response time data</p>';
  return Object.entries(buckets).map(([label, count]) => {
    const pct = count / maxVal * 100;
    return `<div class="bar-row">
        <div class="bar-label">${label}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:#6366f1"></div></div>
        <div class="bar-value">${count}</div>
      </div>`;
  }).join("\n");
}
function generateTimeOfDayChart(messageHours) {
  if (messageHours.length === 0) return '<p class="empty">No time data</p>';
  const periods = [
    { label: "Morning (6-12)", range: [6, 7, 8, 9, 10, 11] },
    { label: "Afternoon (12-18)", range: [12, 13, 14, 15, 16, 17] },
    { label: "Evening (18-24)", range: [18, 19, 20, 21, 22, 23] },
    { label: "Night (0-6)", range: [0, 1, 2, 3, 4, 5] }
  ];
  const hourCounts = {};
  for (const h of messageHours) {
    hourCounts[h] = (hourCounts[h] || 0) + 1;
  }
  const periodCounts = periods.map((p) => ({
    label: p.label,
    count: p.range.reduce((sum, h) => sum + (hourCounts[h] || 0), 0)
  }));
  const maxVal = Math.max(...periodCounts.map((p) => p.count)) || 1;
  const barsHtml = periodCounts.map(
    (p) => `
      <div class="bar-row">
        <div class="bar-label">${p.label}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${p.count / maxVal * 100}%;background:#8b5cf6"></div></div>
        <div class="bar-value">${p.count}</div>
      </div>`
  ).join("\n");
  return `<div id="hour-histogram">${barsHtml}</div>`;
}
function getHourCountsJson(messageHours) {
  const hourCounts = {};
  for (const h of messageHours) {
    hourCounts[h] = (hourCounts[h] || 0) + 1;
  }
  return jsonStringify(hourCounts);
}
function generateHtmlReport(data, insights) {
  const markdownToHtml = (md) => {
    if (!md) return "";
    return md.split("\n\n").map((p) => {
      let html = escapeXmlAttr(p);
      html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/^- /gm, "\u2022 ");
      html = html.replace(/\n/g, "<br>");
      return `<p>${html}</p>`;
    }).join("\n");
  };
  const atAGlance = insights.at_a_glance;
  const atAGlanceHtml = atAGlance ? `
    <div class="at-a-glance">
      <div class="glance-title">At a Glance</div>
      <div class="glance-sections">
        ${atAGlance.whats_working ? `<div class="glance-section"><strong>What's working:</strong> ${escapeHtmlWithBold(atAGlance.whats_working)} <a href="#section-wins" class="see-more">Impressive Things You Did \u2192</a></div>` : ""}
        ${atAGlance.whats_hindering ? `<div class="glance-section"><strong>What's hindering you:</strong> ${escapeHtmlWithBold(atAGlance.whats_hindering)} <a href="#section-friction" class="see-more">Where Things Go Wrong \u2192</a></div>` : ""}
        ${atAGlance.quick_wins ? `<div class="glance-section"><strong>Quick wins to try:</strong> ${escapeHtmlWithBold(atAGlance.quick_wins)} <a href="#section-features" class="see-more">Features to Try \u2192</a></div>` : ""}
        ${atAGlance.ambitious_workflows ? `<div class="glance-section"><strong>Ambitious workflows:</strong> ${escapeHtmlWithBold(atAGlance.ambitious_workflows)} <a href="#section-horizon" class="see-more">On the Horizon \u2192</a></div>` : ""}
      </div>
    </div>
    ` : "";
  const projectAreas = insights.project_areas?.areas || [];
  const projectAreasHtml = projectAreas.length > 0 ? `
    <h2 id="section-work">What You Work On</h2>
    <div class="project-areas">
      ${projectAreas.map(
    (area) => `
        <div class="project-area">
          <div class="area-header">
            <span class="area-name">${escapeXmlAttr(area.name)}</span>
            <span class="area-count">~${area.session_count} sessions</span>
          </div>
          <div class="area-desc">${escapeXmlAttr(area.description)}</div>
        </div>
      `
  ).join("")}
    </div>
    ` : "";
  const interactionStyle = insights.interaction_style;
  const interactionHtml = interactionStyle?.narrative ? `
    <h2 id="section-usage">How You Use Blaude</h2>
    <div class="narrative">
      ${markdownToHtml(interactionStyle.narrative)}
      ${interactionStyle.key_pattern ? `<div class="key-insight"><strong>Key pattern:</strong> ${escapeXmlAttr(interactionStyle.key_pattern)}</div>` : ""}
    </div>
    ` : "";
  const whatWorks = insights.what_works;
  const whatWorksHtml = whatWorks?.impressive_workflows && whatWorks.impressive_workflows.length > 0 ? `
    <h2 id="section-wins">Impressive Things You Did</h2>
    ${whatWorks.intro ? `<p class="section-intro">${escapeXmlAttr(whatWorks.intro)}</p>` : ""}
    <div class="big-wins">
      ${whatWorks.impressive_workflows.map(
    (wf) => `
        <div class="big-win">
          <div class="big-win-title">${escapeXmlAttr(wf.title || "")}</div>
          <div class="big-win-desc">${escapeXmlAttr(wf.description || "")}</div>
        </div>
      `
  ).join("")}
    </div>
    ` : "";
  const frictionAnalysis = insights.friction_analysis;
  const frictionHtml = frictionAnalysis?.categories && frictionAnalysis.categories.length > 0 ? `
    <h2 id="section-friction">Where Things Go Wrong</h2>
    ${frictionAnalysis.intro ? `<p class="section-intro">${escapeXmlAttr(frictionAnalysis.intro)}</p>` : ""}
    <div class="friction-categories">
      ${frictionAnalysis.categories.map(
    (cat) => `
        <div class="friction-category">
          <div class="friction-title">${escapeXmlAttr(cat.category || "")}</div>
          <div class="friction-desc">${escapeXmlAttr(cat.description || "")}</div>
          ${cat.examples ? `<ul class="friction-examples">${cat.examples.map((ex) => `<li>${escapeXmlAttr(ex)}</li>`).join("")}</ul>` : ""}
        </div>
      `
  ).join("")}
    </div>
    ` : "";
  const suggestions = insights.suggestions;
  const suggestionsHtml = suggestions ? `
    ${suggestions.claude_md_additions && suggestions.claude_md_additions.length > 0 ? `
    <h2 id="section-features">Existing CC Features to Try</h2>
    <div class="claude-md-section">
      <h3>Suggested CLAUDE.md Additions</h3>
      <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Just copy this into Blaude to add it to your CLAUDE.md.</p>
      <div class="claude-md-actions">
        <button class="copy-all-btn" onclick="copyAllCheckedClaudeMd()">Copy All Checked</button>
      </div>
      ${suggestions.claude_md_additions.map(
    (add, i) => `
        <div class="claude-md-item">
          <input type="checkbox" id="cmd-${i}" class="cmd-checkbox" checked data-text="${escapeXmlAttr(add.prompt_scaffold || add.where || "Add to CLAUDE.md")}\\n\\n${escapeXmlAttr(add.addition)}">
          <label for="cmd-${i}">
            <code class="cmd-code">${escapeXmlAttr(add.addition)}</code>
            <button class="copy-btn" onclick="copyCmdItem(${i})">Copy</button>
          </label>
          <div class="cmd-why">${escapeXmlAttr(add.why)}</div>
        </div>
      `
  ).join("")}
    </div>
    ` : ""}
    ${suggestions.features_to_try && suggestions.features_to_try.length > 0 ? `
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Blaude and it'll set it up for you.</p>
    <div class="features-section">
      ${suggestions.features_to_try.map(
    (feat) => `
        <div class="feature-card">
          <div class="feature-title">${escapeXmlAttr(feat.feature || "")}</div>
          <div class="feature-oneliner">${escapeXmlAttr(feat.one_liner || "")}</div>
          <div class="feature-why"><strong>Why for you:</strong> ${escapeXmlAttr(feat.why_for_you || "")}</div>
          ${feat.example_code ? `
          <div class="feature-examples">
            <div class="feature-example">
              <div class="example-code-row">
                <code class="example-code">${escapeXmlAttr(feat.example_code)}</code>
                <button class="copy-btn" onclick="copyText(this)">Copy</button>
              </div>
            </div>
          </div>
          ` : ""}
        </div>
      `
  ).join("")}
    </div>
    ` : ""}
    ${suggestions.usage_patterns && suggestions.usage_patterns.length > 0 ? `
    <h2 id="section-patterns">New Ways to Use Blaude</h2>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Blaude and it'll walk you through it.</p>
    <div class="patterns-section">
      ${suggestions.usage_patterns.map(
    (pat) => `
        <div class="pattern-card">
          <div class="pattern-title">${escapeXmlAttr(pat.title || "")}</div>
          <div class="pattern-summary">${escapeXmlAttr(pat.suggestion || "")}</div>
          ${pat.detail ? `<div class="pattern-detail">${escapeXmlAttr(pat.detail)}</div>` : ""}
          ${pat.copyable_prompt ? `
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into Blaude:</div>
            <div class="copyable-prompt-row">
              <code class="copyable-prompt">${escapeXmlAttr(pat.copyable_prompt)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
          ` : ""}
        </div>
      `
  ).join("")}
    </div>
    ` : ""}
    ` : "";
  const horizonData = insights.on_the_horizon;
  const horizonHtml = horizonData?.opportunities && horizonData.opportunities.length > 0 ? `
    <h2 id="section-horizon">On the Horizon</h2>
    ${horizonData.intro ? `<p class="section-intro">${escapeXmlAttr(horizonData.intro)}</p>` : ""}
    <div class="horizon-section">
      ${horizonData.opportunities.map(
    (opp) => `
        <div class="horizon-card">
          <div class="horizon-title">${escapeXmlAttr(opp.title || "")}</div>
          <div class="horizon-possible">${escapeXmlAttr(opp.whats_possible || "")}</div>
          ${opp.how_to_try ? `<div class="horizon-tip"><strong>Getting started:</strong> ${escapeXmlAttr(opp.how_to_try)}</div>` : ""}
          ${opp.copyable_prompt ? `<div class="pattern-prompt"><div class="prompt-label">Paste into Blaude:</div><code>${escapeXmlAttr(opp.copyable_prompt)}</code><button class="copy-btn" onclick="copyText(this)">Copy</button></div>` : ""}
        </div>
      `
  ).join("")}
    </div>
    ` : "";
  const ccImprovements = process.env.USER_TYPE === "ant" ? insights.cc_team_improvements?.improvements || [] : [];
  const modelImprovements = process.env.USER_TYPE === "ant" ? insights.model_behavior_improvements?.improvements || [] : [];
  const teamFeedbackHtml = ccImprovements.length > 0 || modelImprovements.length > 0 ? `
    <h2 id="section-feedback" class="feedback-header">Closing the Loop: Feedback for Other Teams</h2>
    <p class="feedback-intro">Suggestions for the CC product and model teams based on your usage patterns. Click to expand.</p>
    ${ccImprovements.length > 0 ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Product Improvements for CC Team</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${ccImprovements.map(
    (imp) => `
            <div class="feedback-card team-card">
              <div class="feedback-title">${escapeXmlAttr(imp.title || "")}</div>
              <div class="feedback-detail">${escapeXmlAttr(imp.detail || "")}</div>
              ${imp.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${escapeXmlAttr(imp.evidence)}</div>` : ""}
            </div>
          `
  ).join("")}
        </div>
      </div>
    </div>
    ` : ""}
    ${modelImprovements.length > 0 ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Model Behavior Improvements</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${modelImprovements.map(
    (imp) => `
            <div class="feedback-card model-card">
              <div class="feedback-title">${escapeXmlAttr(imp.title || "")}</div>
              <div class="feedback-detail">${escapeXmlAttr(imp.detail || "")}</div>
              ${imp.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${escapeXmlAttr(imp.evidence)}</div>` : ""}
            </div>
          `
  ).join("")}
        </div>
      </div>
    </div>
    ` : ""}
    ` : "";
  const funEnding = insights.fun_ending;
  const funEndingHtml = funEnding?.headline ? `
    <div class="fun-ending">
      <div class="fun-headline">"${escapeXmlAttr(funEnding.headline)}"</div>
      ${funEnding.detail ? `<div class="fun-detail">${escapeXmlAttr(funEnding.detail)}</div>` : ""}
    </div>
    ` : "";
  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #334155; line-height: 1.65; padding: 48px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 48px; margin-bottom: 16px; }
    .subtitle { color: #64748b; font-size: 15px; margin-bottom: 32px; }
    .nav-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 32px 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
    .nav-toc a { font-size: 12px; color: #64748b; text-decoration: none; padding: 6px 12px; border-radius: 6px; background: #f1f5f9; transition: all 0.15s; }
    .nav-toc a:hover { background: #e2e8f0; color: #334155; }
    .stats-row { display: flex; gap: 24px; margin-bottom: 40px; padding: 20px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; color: #0f172a; }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; }
    .at-a-glance { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; }
    .glance-title { font-size: 16px; font-weight: 700; color: #92400e; margin-bottom: 16px; }
    .glance-sections { display: flex; flex-direction: column; gap: 12px; }
    .glance-section { font-size: 14px; color: #78350f; line-height: 1.6; }
    .glance-section strong { color: #92400e; }
    .see-more { color: #b45309; text-decoration: none; font-size: 13px; white-space: nowrap; }
    .see-more:hover { text-decoration: underline; }
    .project-areas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .project-area { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .area-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .area-name { font-weight: 600; font-size: 15px; color: #0f172a; }
    .area-count { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
    .area-desc { font-size: 14px; color: #475569; line-height: 1.5; }
    .narrative { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .narrative p { margin-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.7; }
    .key-insight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; color: #166534; }
    .section-intro { font-size: 14px; color: #64748b; margin-bottom: 16px; }
    .big-wins { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .big-win { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; }
    .big-win-title { font-weight: 600; font-size: 15px; color: #166534; margin-bottom: 8px; }
    .big-win-desc { font-size: 14px; color: #15803d; line-height: 1.5; }
    .friction-categories { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
    .friction-category { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; }
    .friction-title { font-weight: 600; font-size: 15px; color: #991b1b; margin-bottom: 6px; }
    .friction-desc { font-size: 13px; color: #7f1d1d; margin-bottom: 10px; }
    .friction-examples { margin: 0 0 0 20px; font-size: 13px; color: #334155; }
    .friction-examples li { margin-bottom: 4px; }
    .claude-md-section { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
    .claude-md-section h3 { font-size: 14px; font-weight: 600; color: #1e40af; margin: 0 0 12px 0; }
    .claude-md-actions { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #dbeafe; }
    .copy-all-btn { background: #2563eb; color: white; border: none; border-radius: 4px; padding: 6px 12px; font-size: 12px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
    .copy-all-btn:hover { background: #1d4ed8; }
    .copy-all-btn.copied { background: #16a34a; }
    .claude-md-item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 10px 0; border-bottom: 1px solid #dbeafe; }
    .claude-md-item:last-child { border-bottom: none; }
    .cmd-checkbox { margin-top: 2px; }
    .cmd-code { background: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #1e40af; border: 1px solid #bfdbfe; font-family: monospace; display: block; white-space: pre-wrap; word-break: break-word; flex: 1; }
    .cmd-why { font-size: 12px; color: #64748b; width: 100%; padding-left: 24px; margin-top: 4px; }
    .features-section, .patterns-section { display: flex; flex-direction: column; gap: 12px; margin: 16px 0; }
    .feature-card { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; }
    .pattern-card { background: #f0f9ff; border: 1px solid #7dd3fc; border-radius: 8px; padding: 16px; }
    .feature-title, .pattern-title { font-weight: 600; font-size: 15px; color: #0f172a; margin-bottom: 6px; }
    .feature-oneliner { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .pattern-summary { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .feature-why, .pattern-detail { font-size: 13px; color: #334155; line-height: 1.5; }
    .feature-examples { margin-top: 12px; }
    .feature-example { padding: 8px 0; border-top: 1px solid #d1fae5; }
    .feature-example:first-child { border-top: none; }
    .example-desc { font-size: 13px; color: #334155; margin-bottom: 6px; }
    .example-code-row { display: flex; align-items: flex-start; gap: 8px; }
    .example-code { flex: 1; background: #f1f5f9; padding: 8px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; overflow-x: auto; white-space: pre-wrap; }
    .copyable-prompt-section { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .copyable-prompt-row { display: flex; align-items: flex-start; gap: 8px; }
    .copyable-prompt { flex: 1; background: #f8fafc; padding: 10px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.5; }
    .feature-code { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 8px; }
    .feature-code code { flex: 1; font-family: monospace; font-size: 12px; color: #334155; white-space: pre-wrap; }
    .pattern-prompt { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; }
    .pattern-prompt code { font-family: monospace; font-size: 12px; color: #334155; display: block; white-space: pre-wrap; margin-bottom: 8px; }
    .prompt-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .copy-btn { background: #e2e8f0; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; color: #475569; flex-shrink: 0; }
    .copy-btn:hover { background: #cbd5e1; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
    .chart-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .chart-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 12px; }
    .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
    .bar-label { width: 100px; font-size: 11px; color: #475569; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bar-track { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; margin: 0 8px; }
    .bar-fill { height: 100%; border-radius: 3px; }
    .bar-value { width: 28px; font-size: 11px; font-weight: 500; color: #64748b; text-align: right; }
    .empty { color: #94a3b8; font-size: 13px; }
    .horizon-section { display: flex; flex-direction: column; gap: 16px; }
    .horizon-card { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); border: 1px solid #c4b5fd; border-radius: 8px; padding: 16px; }
    .horizon-title { font-weight: 600; font-size: 15px; color: #5b21b6; margin-bottom: 8px; }
    .horizon-possible { font-size: 14px; color: #334155; margin-bottom: 10px; line-height: 1.5; }
    .horizon-tip { font-size: 13px; color: #6b21a8; background: rgba(255,255,255,0.6); padding: 8px 12px; border-radius: 4px; }
    .feedback-header { margin-top: 48px; color: #64748b; font-size: 16px; }
    .feedback-intro { font-size: 13px; color: #94a3b8; margin-bottom: 16px; }
    .feedback-section { margin-top: 16px; }
    .feedback-section h3 { font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 12px; }
    .feedback-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
    .feedback-card.team-card { background: #eff6ff; border-color: #bfdbfe; }
    .feedback-card.model-card { background: #faf5ff; border-color: #e9d5ff; }
    .feedback-title { font-weight: 600; font-size: 14px; color: #0f172a; margin-bottom: 6px; }
    .feedback-detail { font-size: 13px; color: #475569; line-height: 1.5; }
    .feedback-evidence { font-size: 12px; color: #64748b; margin-top: 8px; }
    .fun-ending { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #fbbf24; border-radius: 12px; padding: 24px; margin-top: 40px; text-align: center; }
    .fun-headline { font-size: 18px; font-weight: 600; color: #78350f; margin-bottom: 8px; }
    .fun-detail { font-size: 14px; color: #92400e; }
    .collapsible-section { margin-top: 16px; }
    .collapsible-header { display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .collapsible-header h3 { margin: 0; font-size: 14px; font-weight: 600; color: #475569; }
    .collapsible-arrow { font-size: 12px; color: #94a3b8; transition: transform 0.2s; }
    .collapsible-content { display: none; padding-top: 16px; }
    .collapsible-content.open { display: block; }
    .collapsible-header.open .collapsible-arrow { transform: rotate(90deg); }
    @media (max-width: 640px) { .charts-row { grid-template-columns: 1fr; } .stats-row { justify-content: center; } }
  `;
  const hourCountsJson = getHourCountsJson(data.message_hours);
  const js = `
    function toggleCollapsible(header) {
      header.classList.toggle('open');
      const content = header.nextElementSibling;
      content.classList.toggle('open');
    }
    function copyText(btn) {
      const code = btn.previousElementSibling;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    }
    function copyCmdItem(idx) {
      const checkbox = document.getElementById('cmd-' + idx);
      if (checkbox) {
        const text = checkbox.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const btn = checkbox.nextElementSibling.querySelector('.copy-btn');
          if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 2000); }
        });
      }
    }
    function copyAllCheckedClaudeMd() {
      const checkboxes = document.querySelectorAll('.cmd-checkbox:checked');
      const texts = [];
      checkboxes.forEach(cb => {
        if (cb.dataset.text) { texts.push(cb.dataset.text); }
      });
      const combined = texts.join('\\n');
      const btn = document.querySelector('.copy-all-btn');
      if (btn) {
        navigator.clipboard.writeText(combined).then(() => {
          btn.textContent = 'Copied ' + texts.length + ' items!';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = 'Copy All Checked'; btn.classList.remove('copied'); }, 2000);
        });
      }
    }
    // Timezone selector for time of day chart (data is from our own analytics, not user input)
    const rawHourCounts = ${hourCountsJson};
    function updateHourHistogram(offsetFromPT) {
      const periods = [
        { label: "Morning (6-12)", range: [6,7,8,9,10,11] },
        { label: "Afternoon (12-18)", range: [12,13,14,15,16,17] },
        { label: "Evening (18-24)", range: [18,19,20,21,22,23] },
        { label: "Night (0-6)", range: [0,1,2,3,4,5] }
      ];
      const adjustedCounts = {};
      for (const [hour, count] of Object.entries(rawHourCounts)) {
        const newHour = (parseInt(hour) + offsetFromPT + 24) % 24;
        adjustedCounts[newHour] = (adjustedCounts[newHour] || 0) + count;
      }
      const periodCounts = periods.map(p => ({
        label: p.label,
        count: p.range.reduce((sum, h) => sum + (adjustedCounts[h] || 0), 0)
      }));
      const maxCount = Math.max(...periodCounts.map(p => p.count)) || 1;
      const container = document.getElementById('hour-histogram');
      container.textContent = '';
      periodCounts.forEach(p => {
        const row = document.createElement('div');
        row.className = 'bar-row';
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = p.label;
        const track = document.createElement('div');
        track.className = 'bar-track';
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.width = (p.count / maxCount) * 100 + '%';
        fill.style.background = '#8b5cf6';
        track.appendChild(fill);
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = p.count;
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(value);
        container.appendChild(row);
      });
    }
    document.getElementById('timezone-select').addEventListener('change', function() {
      const customInput = document.getElementById('custom-offset');
      if (this.value === 'custom') {
        customInput.style.display = 'inline-block';
        customInput.focus();
      } else {
        customInput.style.display = 'none';
        updateHourHistogram(parseInt(this.value));
      }
    });
    document.getElementById('custom-offset').addEventListener('change', function() {
      const offset = parseInt(this.value) + 8;
      updateHourHistogram(offset);
    });
  `;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Blaude Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <div class="container">
    <h1>Blaude Insights</h1>
    <p class="subtitle">${data.total_messages.toLocaleString()} messages across ${data.total_sessions} sessions${data.total_sessions_scanned && data.total_sessions_scanned > data.total_sessions ? ` (${data.total_sessions_scanned.toLocaleString()} total)` : ""} | ${data.date_range.start} to ${data.date_range.end}</p>

    ${atAGlanceHtml}

    <nav class="nav-toc">
      <a href="#section-work">What You Work On</a>
      <a href="#section-usage">How You Use CC</a>
      <a href="#section-wins">Impressive Things</a>
      <a href="#section-friction">Where Things Go Wrong</a>
      <a href="#section-features">Features to Try</a>
      <a href="#section-patterns">New Usage Patterns</a>
      <a href="#section-horizon">On the Horizon</a>
      <a href="#section-feedback">Team Feedback</a>
    </nav>

    <div class="stats-row">
      <div class="stat"><div class="stat-value">${data.total_messages.toLocaleString()}</div><div class="stat-label">Messages</div></div>
      <div class="stat"><div class="stat-value">+${data.total_lines_added.toLocaleString()}/-${data.total_lines_removed.toLocaleString()}</div><div class="stat-label">Lines</div></div>
      <div class="stat"><div class="stat-value">${data.total_files_modified}</div><div class="stat-label">Files</div></div>
      <div class="stat"><div class="stat-value">${data.days_active}</div><div class="stat-label">Days</div></div>
      <div class="stat"><div class="stat-value">${data.messages_per_day}</div><div class="stat-label">Msgs/Day</div></div>
    </div>

    ${projectAreasHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What You Wanted</div>
        ${generateBarChart(data.goal_categories, "#2563eb")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Top Tools Used</div>
        ${generateBarChart(data.tool_counts, "#0891b2")}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Languages</div>
        ${generateBarChart(data.languages, "#10b981")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Session Types</div>
        ${generateBarChart(data.session_types || {}, "#8b5cf6")}
      </div>
    </div>

    ${interactionHtml}

    <!-- Response Time Distribution -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">User Response Time Distribution</div>
      ${generateResponseTimeHistogram(data.user_response_times)}
      <div style="font-size: 12px; color: #64748b; margin-top: 8px;">
        Median: ${data.median_response_time.toFixed(1)}s &bull; Average: ${data.avg_response_time.toFixed(1)}s
      </div>
    </div>

    <!-- Multi-clauding Section (matching Python reference) -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">Multi-Clauding (Parallel Sessions)</div>
      ${data.multi_clauding.overlap_events === 0 ? `
        <p style="font-size: 14px; color: #64748b; padding: 8px 0;">
          No parallel session usage detected. You typically work with one Blaude session at a time.
        </p>
      ` : `
        <div style="display: flex; gap: 24px; margin: 12px 0;">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.multi_clauding.overlap_events}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Overlap Events</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.multi_clauding.sessions_involved}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Sessions Involved</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.total_messages > 0 ? Math.round(100 * data.multi_clauding.user_messages_during / data.total_messages) : 0}%</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Of Messages</div>
          </div>
        </div>
        <p style="font-size: 13px; color: #475569; margin-top: 12px;">
          You run multiple Blaude sessions simultaneously. Multi-clauding is detected when sessions
          overlap in time, suggesting parallel workflows.
        </p>
      `}
    </div>

    <!-- Time of Day & Tool Errors -->
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title" style="display: flex; align-items: center; gap: 12px;">
          User Messages by Time of Day
          <select id="timezone-select" style="font-size: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
            <option value="0">PT (UTC-8)</option>
            <option value="3">ET (UTC-5)</option>
            <option value="8">London (UTC)</option>
            <option value="9">CET (UTC+1)</option>
            <option value="17">Tokyo (UTC+9)</option>
            <option value="custom">Custom offset...</option>
          </select>
          <input type="number" id="custom-offset" placeholder="UTC offset" style="display: none; width: 80px; font-size: 12px; padding: 4px; border-radius: 4px; border: 1px solid #e2e8f0;">
        </div>
        ${generateTimeOfDayChart(data.message_hours)}
      </div>
      <div class="chart-card">
        <div class="chart-title">Tool Errors Encountered</div>
        ${Object.keys(data.tool_error_categories).length > 0 ? generateBarChart(data.tool_error_categories, "#dc2626") : '<p class="empty">No tool errors</p>'}
      </div>
    </div>

    ${whatWorksHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What Helped Most (Claude's Capabilities)</div>
        ${generateBarChart(data.success, "#16a34a")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Outcomes</div>
        ${generateBarChart(data.outcomes, "#8b5cf6", 6, OUTCOME_ORDER)}
      </div>
    </div>

    ${frictionHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Primary Friction Types</div>
        ${generateBarChart(data.friction, "#dc2626")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Inferred Satisfaction (model-estimated)</div>
        ${generateBarChart(data.satisfaction, "#eab308", 6, SATISFACTION_ORDER)}
      </div>
    </div>

    ${suggestionsHtml}

    ${horizonHtml}

    ${funEndingHtml}

    ${teamFeedbackHtml}
  </div>
  <script>${js}</script>
</body>
</html>`;
}
function buildExportData(data, insights, facets, remoteStats) {
  const version = typeof MACRO !== "undefined" ? MACRO.VERSION : "unknown";
  const remote_hosts_collected = remoteStats?.hosts.filter((h) => h.sessionCount > 0).map((h) => h.name);
  const facets_summary = {
    total: facets.size,
    goal_categories: {},
    outcomes: {},
    satisfaction: {},
    friction: {}
  };
  for (const f of facets.values()) {
    for (const [cat, count] of safeEntries(f.goal_categories)) {
      if (count > 0) {
        facets_summary.goal_categories[cat] = (facets_summary.goal_categories[cat] || 0) + count;
      }
    }
    facets_summary.outcomes[f.outcome] = (facets_summary.outcomes[f.outcome] || 0) + 1;
    for (const [level, count] of safeEntries(f.user_satisfaction_counts)) {
      if (count > 0) {
        facets_summary.satisfaction[level] = (facets_summary.satisfaction[level] || 0) + count;
      }
    }
    for (const [type, count] of safeEntries(f.friction_counts)) {
      if (count > 0) {
        facets_summary.friction[type] = (facets_summary.friction[type] || 0) + count;
      }
    }
  }
  return {
    metadata: {
      username: process.env.SAFEUSER || process.env.USER || "unknown",
      generated_at: (/* @__PURE__ */ new Date()).toISOString(),
      claude_code_version: version,
      date_range: data.date_range,
      session_count: data.total_sessions,
      ...remote_hosts_collected && remote_hosts_collected.length > 0 && {
        remote_hosts_collected
      }
    },
    aggregated_data: data,
    insights,
    facets_summary
  };
}
async function scanAllSessions() {
  const projectsDir = getProjectsDir();
  let dirents;
  try {
    dirents = await readdir(projectsDir, { withFileTypes: true });
  } catch {
    return [];
  }
  const projectDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(projectsDir, dirent.name));
  const allSessions = [];
  for (let i = 0; i < projectDirs.length; i++) {
    const sessionFiles = await getSessionFilesWithMtime(projectDirs[i]);
    for (const [sessionId, fileInfo] of sessionFiles) {
      allSessions.push({
        sessionId,
        path: fileInfo.path,
        mtime: fileInfo.mtime,
        size: fileInfo.size
      });
    }
    if (i % 10 === 9) {
      await new Promise((resolve) => setImmediate(resolve));
    }
  }
  allSessions.sort((a, b) => b.mtime - a.mtime);
  return allSessions;
}
async function generateUsageReport(options) {
  let remoteStats;
  if (process.env.USER_TYPE === "ant" && options?.collectRemote) {
    const destDir = join(getClaudeConfigHomeDir(), "projects");
    const { hosts, totalCopied } = await collectAllRemoteHostData(destDir);
    remoteStats = { hosts, totalCopied };
  }
  const allScannedSessions = await scanAllSessions();
  const totalSessionsScanned = allScannedSessions.length;
  const META_BATCH_SIZE = 50;
  const MAX_SESSIONS_TO_LOAD = 200;
  let allMetas = [];
  const uncachedSessions = [];
  for (let i = 0; i < allScannedSessions.length; i += META_BATCH_SIZE) {
    const batch = allScannedSessions.slice(i, i + META_BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (sessionInfo) => ({
        sessionInfo,
        cached: await loadCachedSessionMeta(sessionInfo.sessionId)
      }))
    );
    for (const { sessionInfo, cached } of results) {
      if (cached) {
        allMetas.push(cached);
      } else if (uncachedSessions.length < MAX_SESSIONS_TO_LOAD) {
        uncachedSessions.push(sessionInfo);
      }
    }
  }
  const logsForFacets = /* @__PURE__ */ new Map();
  const isMetaSession = (log) => {
    for (const msg of log.messages.slice(0, 5)) {
      if (msg.type === "user" && msg.message) {
        const content = msg.message.content;
        if (typeof content === "string") {
          if (content.includes("RESPOND WITH ONLY A VALID JSON OBJECT") || content.includes("record_facets")) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const LOAD_BATCH_SIZE = 10;
  for (let i = 0; i < uncachedSessions.length; i += LOAD_BATCH_SIZE) {
    const batch = uncachedSessions.slice(i, i + LOAD_BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(async (sessionInfo) => {
        try {
          return await loadAllLogsFromSessionFile(sessionInfo.path);
        } catch {
          return [];
        }
      })
    );
    const metasToSave = [];
    for (const logs of batchResults) {
      for (const log of logs) {
        if (isMetaSession(log) || !hasValidDates(log)) continue;
        const meta = logToSessionMeta(log);
        allMetas.push(meta);
        metasToSave.push(meta);
        logsForFacets.set(meta.session_id, log);
      }
    }
    await Promise.all(metasToSave.map((meta) => saveSessionMeta(meta)));
  }
  const bestBySession = /* @__PURE__ */ new Map();
  for (const meta of allMetas) {
    const existing = bestBySession.get(meta.session_id);
    if (!existing || meta.user_message_count > existing.user_message_count || meta.user_message_count === existing.user_message_count && meta.duration_minutes > existing.duration_minutes) {
      bestBySession.set(meta.session_id, meta);
    }
  }
  const keptSessionIds = new Set(bestBySession.keys());
  allMetas = [...bestBySession.values()];
  for (const sessionId of logsForFacets.keys()) {
    if (!keptSessionIds.has(sessionId)) {
      logsForFacets.delete(sessionId);
    }
  }
  allMetas.sort((a, b) => b.start_time.localeCompare(a.start_time));
  const isSubstantiveSession = (meta) => {
    if (meta.user_message_count < 2) return false;
    if (meta.duration_minutes < 1) return false;
    return true;
  };
  const substantiveMetas = allMetas.filter(isSubstantiveSession);
  const facets = /* @__PURE__ */ new Map();
  const toExtract = [];
  const MAX_FACET_EXTRACTIONS = 50;
  const cachedFacetResults = await Promise.all(
    substantiveMetas.map(async (meta) => ({
      sessionId: meta.session_id,
      cached: await loadCachedFacets(meta.session_id)
    }))
  );
  for (const { sessionId, cached } of cachedFacetResults) {
    if (cached) {
      facets.set(sessionId, cached);
    } else {
      const log = logsForFacets.get(sessionId);
      if (log && toExtract.length < MAX_FACET_EXTRACTIONS) {
        toExtract.push({ log, sessionId });
      }
    }
  }
  const CONCURRENCY = 50;
  for (let i = 0; i < toExtract.length; i += CONCURRENCY) {
    const batch = toExtract.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map(async ({ log, sessionId }) => {
        const newFacets = await extractFacetsFromAPI(log, sessionId);
        return { sessionId, newFacets };
      })
    );
    const facetsToSave = [];
    for (const { sessionId, newFacets } of results) {
      if (newFacets) {
        facets.set(sessionId, newFacets);
        facetsToSave.push(newFacets);
      }
    }
    await Promise.all(facetsToSave.map((f) => saveFacets(f)));
  }
  const isMinimalSession = (sessionId) => {
    const sessionFacets = facets.get(sessionId);
    if (!sessionFacets) return false;
    const cats = sessionFacets.goal_categories;
    const catKeys = safeKeys(cats).filter((k) => (cats[k] ?? 0) > 0);
    return catKeys.length === 1 && catKeys[0] === "warmup_minimal";
  };
  const substantiveSessions = substantiveMetas.filter(
    (s) => !isMinimalSession(s.session_id)
  );
  const substantiveFacets = /* @__PURE__ */ new Map();
  for (const [sessionId, f] of facets) {
    if (!isMinimalSession(sessionId)) {
      substantiveFacets.set(sessionId, f);
    }
  }
  const aggregated = aggregateData(substantiveSessions, substantiveFacets);
  aggregated.total_sessions_scanned = totalSessionsScanned;
  const insights = await generateParallelInsights(aggregated, facets);
  const htmlReport = generateHtmlReport(aggregated, insights);
  try {
    await mkdir(getDataDir(), { recursive: true });
  } catch {
  }
  const htmlPath = join(getDataDir(), "report.html");
  await writeFile(htmlPath, htmlReport, {
    encoding: "utf-8",
    mode: 384
  });
  return {
    insights,
    htmlPath,
    data: aggregated,
    remoteStats,
    facets: substantiveFacets
  };
}
function safeEntries(obj) {
  return obj ? Object.entries(obj) : [];
}
function safeKeys(obj) {
  return obj ? Object.keys(obj) : [];
}
function isValidSessionFacets(obj) {
  if (!obj || typeof obj !== "object") return false;
  const o = obj;
  return typeof o.underlying_goal === "string" && typeof o.outcome === "string" && typeof o.brief_summary === "string" && o.goal_categories !== null && typeof o.goal_categories === "object" && o.user_satisfaction_counts !== null && typeof o.user_satisfaction_counts === "object" && o.friction_counts !== null && typeof o.friction_counts === "object";
}
var getRunningRemoteHosts, getRemoteHostSessionCount, collectFromRemoteHost, collectAllRemoteHostData, EXTENSION_TO_LANGUAGE, LABEL_MAP, FACET_EXTRACTION_PROMPT, SUMMARIZE_CHUNK_PROMPT, INSIGHT_SECTIONS, SATISFACTION_ORDER, OUTCOME_ORDER, usageReport, insights_default;
var init_insights = __esm({
  "src/commands/insights.ts"() {
    init_diff();
    init_claude();
    init_constants();
    init_envUtils();
    init_errors();
    init_execFileNoThrow();
    init_log();
    init_messages();
    init_model();
    init_sessionStorage();
    init_slowOperations();
    init_stringUtils();
    init_systemPromptType();
    init_xml();
    getRunningRemoteHosts = process.env.USER_TYPE === "ant" ? async () => {
      const { stdout, code } = await execFileNoThrow(
        "coder",
        ["list", "-o", "json"],
        { timeout: 3e4 }
      );
      if (code !== 0) return [];
      try {
        const workspaces = jsonParse(stdout);
        return workspaces.filter((w) => w.latest_build?.status === "running").map((w) => w.name);
      } catch {
        return [];
      }
    } : async () => [];
    getRemoteHostSessionCount = process.env.USER_TYPE === "ant" ? async (homespace) => {
      const { stdout, code } = await execFileNoThrow(
        "ssh",
        [
          `${homespace}.coder`,
          'find /root/.claude/projects -name "*.jsonl" 2>/dev/null | wc -l'
        ],
        { timeout: 3e4 }
      );
      if (code !== 0) return 0;
      return parseInt(stdout.trim(), 10) || 0;
    } : async () => 0;
    collectFromRemoteHost = process.env.USER_TYPE === "ant" ? async (homespace, destDir) => {
      const result = { copied: 0, skipped: 0 };
      const tempDir = await mkdtemp(join(tmpdir(), "claude-hs-"));
      try {
        const scpResult = await execFileNoThrow(
          "scp",
          ["-rq", `${homespace}.coder:/root/.claude/projects/`, tempDir],
          { timeout: 3e5 }
        );
        if (scpResult.code !== 0) {
          return result;
        }
        const projectsDir = join(tempDir, "projects");
        let projectDirents;
        try {
          projectDirents = await readdir(projectsDir, { withFileTypes: true });
        } catch {
          return result;
        }
        await Promise.all(
          projectDirents.map(async (dirent) => {
            const projectName = dirent.name;
            const projectPath = join(projectsDir, projectName);
            if (!dirent.isDirectory()) return;
            const destProjectName = `${projectName}__${homespace}`;
            const destProjectPath = join(destDir, destProjectName);
            try {
              await mkdir(destProjectPath, { recursive: true });
            } catch {
            }
            let files;
            try {
              files = await readdir(projectPath, { withFileTypes: true });
            } catch {
              return;
            }
            await Promise.all(
              files.map(async (fileDirent) => {
                const fileName = fileDirent.name;
                if (!fileName.endsWith(".jsonl")) return;
                const srcFile = join(projectPath, fileName);
                const destFile = join(destProjectPath, fileName);
                try {
                  await copyFile(srcFile, destFile, fsConstants.COPYFILE_EXCL);
                  result.copied++;
                } catch {
                  result.skipped++;
                }
              })
            );
          })
        );
      } finally {
        try {
          await rm(tempDir, { recursive: true, force: true });
        } catch {
        }
      }
      return result;
    } : async () => ({ copied: 0, skipped: 0 });
    collectAllRemoteHostData = process.env.USER_TYPE === "ant" ? async (destDir) => {
      const rHosts = await getRunningRemoteHosts();
      const result = [];
      let totalCopied = 0;
      let totalSkipped = 0;
      const hostResults = await Promise.all(
        rHosts.map(async (hs) => {
          const sessionCount = await getRemoteHostSessionCount(hs);
          if (sessionCount > 0) {
            const { copied, skipped } = await collectFromRemoteHost(
              hs,
              destDir
            );
            return { name: hs, sessionCount, copied, skipped };
          }
          return { name: hs, sessionCount, copied: 0, skipped: 0 };
        })
      );
      for (const hr of hostResults) {
        result.push({ name: hr.name, sessionCount: hr.sessionCount });
        totalCopied += hr.copied;
        totalSkipped += hr.skipped;
      }
      return { hosts: result, totalCopied, totalSkipped };
    } : async () => ({ hosts: [], totalCopied: 0, totalSkipped: 0 });
    EXTENSION_TO_LANGUAGE = {
      ".ts": "TypeScript",
      ".tsx": "TypeScript",
      ".js": "JavaScript",
      ".jsx": "JavaScript",
      ".py": "Python",
      ".rb": "Ruby",
      ".go": "Go",
      ".rs": "Rust",
      ".java": "Java",
      ".md": "Markdown",
      ".json": "JSON",
      ".yaml": "YAML",
      ".yml": "YAML",
      ".sh": "Shell",
      ".css": "CSS",
      ".html": "HTML"
    };
    LABEL_MAP = {
      // Goal categories
      debug_investigate: "Debug/Investigate",
      implement_feature: "Implement Feature",
      fix_bug: "Fix Bug",
      write_script_tool: "Write Script/Tool",
      refactor_code: "Refactor Code",
      configure_system: "Configure System",
      create_pr_commit: "Create PR/Commit",
      analyze_data: "Analyze Data",
      understand_codebase: "Understand Codebase",
      write_tests: "Write Tests",
      write_docs: "Write Docs",
      deploy_infra: "Deploy/Infra",
      warmup_minimal: "Cache Warmup",
      // Success factors
      fast_accurate_search: "Fast/Accurate Search",
      correct_code_edits: "Correct Code Edits",
      good_explanations: "Good Explanations",
      proactive_help: "Proactive Help",
      multi_file_changes: "Multi-file Changes",
      handled_complexity: "Multi-file Changes",
      good_debugging: "Good Debugging",
      // Friction types
      misunderstood_request: "Misunderstood Request",
      wrong_approach: "Wrong Approach",
      buggy_code: "Buggy Code",
      user_rejected_action: "User Rejected Action",
      claude_got_blocked: "Claude Got Blocked",
      user_stopped_early: "User Stopped Early",
      wrong_file_or_location: "Wrong File/Location",
      excessive_changes: "Excessive Changes",
      slow_or_verbose: "Slow/Verbose",
      tool_failed: "Tool Failed",
      user_unclear: "User Unclear",
      external_issue: "External Issue",
      // Satisfaction labels
      frustrated: "Frustrated",
      dissatisfied: "Dissatisfied",
      likely_satisfied: "Likely Satisfied",
      satisfied: "Satisfied",
      happy: "Happy",
      unsure: "Unsure",
      neutral: "Neutral",
      delighted: "Delighted",
      // Session types
      single_task: "Single Task",
      multi_task: "Multi Task",
      iterative_refinement: "Iterative Refinement",
      exploration: "Exploration",
      quick_question: "Quick Question",
      // Outcomes
      fully_achieved: "Fully Achieved",
      mostly_achieved: "Mostly Achieved",
      partially_achieved: "Partially Achieved",
      not_achieved: "Not Achieved",
      unclear_from_transcript: "Unclear",
      // Helpfulness
      unhelpful: "Unhelpful",
      slightly_helpful: "Slightly Helpful",
      moderately_helpful: "Moderately Helpful",
      very_helpful: "Very Helpful",
      essential: "Essential"
    };
    FACET_EXTRACTION_PROMPT = `Analyze this Blaude session and extract structured facets.

CRITICAL GUIDELINES:

1. **goal_categories**: Count ONLY what the USER explicitly asked for.
   - DO NOT count Claude's autonomous codebase exploration
   - DO NOT count work Claude decided to do on its own
   - ONLY count when user says "can you...", "please...", "I need...", "let's..."

2. **user_satisfaction_counts**: Base ONLY on explicit user signals.
   - "Yay!", "great!", "perfect!" \u2192 happy
   - "thanks", "looks good", "that works" \u2192 satisfied
   - "ok, now let's..." (continuing without complaint) \u2192 likely_satisfied
   - "that's not right", "try again" \u2192 dissatisfied
   - "this is broken", "I give up" \u2192 frustrated

3. **friction_counts**: Be specific about what went wrong.
   - misunderstood_request: Claude interpreted incorrectly
   - wrong_approach: Right goal, wrong solution method
   - buggy_code: Code didn't work correctly
   - user_rejected_action: User said no/stop to a tool call
   - excessive_changes: Over-engineered or changed too much

4. If very short or just warmup, use warmup_minimal for goal_category

SESSION:
`;
    SUMMARIZE_CHUNK_PROMPT = `Summarize this portion of a Claude Code session transcript. Focus on:
1. What the user asked for
2. What Claude did (tools used, files modified)
3. Any friction or issues
4. The outcome

Keep it concise - 3-5 sentences. Preserve specific details like file names, error messages, and user feedback.

TRANSCRIPT CHUNK:
`;
    INSIGHT_SECTIONS = [
      {
        name: "project_areas",
        prompt: `Analyze this Blaude usage data and identify project areas.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "areas": [
    {"name": "Area name", "session_count": N, "description": "2-3 sentences about what was worked on and how Blaude was used."}
  ]
}

Include 4-5 areas. Skip internal CC operations.`,
        maxTokens: 8192
      },
      {
        name: "interaction_style",
        prompt: `Analyze this Blaude usage data and describe the user's interaction style.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "narrative": "2-3 paragraphs analyzing HOW the user interacts with Blaude. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let Blaude run? Include specific examples. Use **bold** for key insights.",
  "key_pattern": "One sentence summary of most distinctive interaction style"
}`,
        maxTokens: 8192
      },
      {
        name: "what_works",
        prompt: `Analyze this Blaude usage data and identify what's working well for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence of context",
  "impressive_workflows": [
    {"title": "Short title (3-6 words)", "description": "2-3 sentences describing the impressive workflow or approach. Use 'you' not 'the user'."}
  ]
}

Include 3 impressive workflows.`,
        maxTokens: 8192
      },
      {
        name: "friction_analysis",
        prompt: `Analyze this Blaude usage data and identify friction points for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence summarizing friction patterns",
  "categories": [
    {"category": "Concrete category name", "description": "1-2 sentences explaining this category and what could be done differently. Use 'you' not 'the user'.", "examples": ["Specific example with consequence", "Another example"]}
  ]
}

Include 3 friction categories with 2 examples each.`,
        maxTokens: 8192
      },
      {
        name: "suggestions",
        prompt: `Analyze this Blaude usage data and suggest improvements.

## CC FEATURES REFERENCE (pick from these for features_to_try):
1. **MCP Servers**: Connect Claude to external tools, databases, and APIs via Model Context Protocol.
   - How to use: Run \`claude mcp add <server-name> -- <command>\`
   - Good for: database queries, Slack integration, GitHub issue lookup, connecting to internal APIs

2. **Custom Skills**: Reusable prompts you define as markdown files that run with a single /command.
   - How to use: Create \`.claude/skills/commit/SKILL.md\` with instructions. Then type \`/commit\` to run it.
   - Good for: repetitive workflows - /commit, /review, /test, /deploy, /pr, or complex multi-step workflows

3. **Hooks**: Shell commands that auto-run at specific lifecycle events.
   - How to use: Add to \`.claude/settings.json\` under "hooks" key.
   - Good for: auto-formatting code, running type checks, enforcing conventions

4. **Headless Mode**: Run Claude non-interactively from scripts and CI/CD.
   - How to use: \`claude -p "fix lint errors" --allowedTools "Edit,Read,Bash"\`
   - Good for: CI/CD integration, batch code fixes, automated reviews

5. **Task Agents**: Claude spawns focused sub-agents for complex exploration or parallel work.
   - How to use: Claude auto-invokes when helpful, or ask "use an agent to explore X"
   - Good for: codebase exploration, understanding complex systems

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "claude_md_additions": [
    {"addition": "A specific line or block to add to CLAUDE.md based on workflow patterns. E.g., 'Always run tests after modifying auth-related files'", "why": "1 sentence explaining why this would help based on actual sessions", "prompt_scaffold": "Instructions for where to add this in CLAUDE.md. E.g., 'Add under ## Testing section'"}
  ],
  "features_to_try": [
    {"feature": "Feature name from CC FEATURES REFERENCE above", "one_liner": "What it does", "why_for_you": "Why this would help YOU based on your sessions", "example_code": "Actual command or config to copy"}
  ],
  "usage_patterns": [
    {"title": "Short title", "suggestion": "1-2 sentence summary", "detail": "3-4 sentences explaining how this applies to YOUR work", "copyable_prompt": "A specific prompt to copy and try"}
  ]
}

IMPORTANT for claude_md_additions: PRIORITIZE instructions that appear MULTIPLE TIMES in the user data. If user told Claude the same thing in 2+ sessions (e.g., 'always run tests', 'use TypeScript'), that's a PRIME candidate - they shouldn't have to repeat themselves.

IMPORTANT for features_to_try: Pick 2-3 from the CC FEATURES REFERENCE above. Include 2-3 items for each category.`,
        maxTokens: 8192
      },
      {
        name: "on_the_horizon",
        prompt: `Analyze this Blaude usage data and identify future opportunities.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence about evolving AI-assisted development",
  "opportunities": [
    {"title": "Short title (4-8 words)", "whats_possible": "2-3 ambitious sentences about autonomous workflows", "how_to_try": "1-2 sentences mentioning relevant tooling", "copyable_prompt": "Detailed prompt to try"}
  ]
}

Include 3 opportunities. Think BIG - autonomous workflows, parallel agents, iterating against tests.`,
        maxTokens: 8192
      },
      ...process.env.USER_TYPE === "ant" ? [
        {
          name: "cc_team_improvements",
          prompt: `Analyze this Blaude usage data and suggest product improvements for the CC team.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "improvements": [
    {"title": "Product/tooling improvement", "detail": "3-4 sentences describing the improvement", "evidence": "3-4 sentences with specific session examples"}
  ]
}

Include 2-3 improvements based on friction patterns observed.`,
          maxTokens: 8192
        },
        {
          name: "model_behavior_improvements",
          prompt: `Analyze this Blaude usage data and suggest model behavior improvements.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "improvements": [
    {"title": "Model behavior change", "detail": "3-4 sentences describing what the model should do differently", "evidence": "3-4 sentences with specific examples"}
  ]
}

Include 2-3 improvements based on friction patterns observed.`,
          maxTokens: 8192
        }
      ] : [],
      {
        name: "fun_ending",
        prompt: `Analyze this Blaude usage data and find a memorable moment.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "headline": "A memorable QUALITATIVE moment from the transcripts - not a statistic. Something human, funny, or surprising.",
  "detail": "Brief context about when/where this happened"
}

Find something genuinely interesting or amusing from the session summaries.`,
        maxTokens: 8192
      }
    ];
    SATISFACTION_ORDER = [
      "frustrated",
      "dissatisfied",
      "likely_satisfied",
      "satisfied",
      "happy",
      "unsure"
    ];
    OUTCOME_ORDER = [
      "not_achieved",
      "partially_achieved",
      "mostly_achieved",
      "fully_achieved",
      "unclear_from_transcript"
    ];
    usageReport = {
      type: "prompt",
      name: "insights",
      description: "Generate a report analyzing your Blaude sessions",
      contentLength: 0,
      // Dynamic content
      progressMessage: "analyzing your sessions",
      source: "builtin",
      async getPromptForCommand(args) {
        let collectRemote = false;
        let remoteHosts = [];
        let hasRemoteHosts = false;
        if (process.env.USER_TYPE === "ant") {
          collectRemote = args?.includes("--homespaces") ?? false;
          remoteHosts = await getRunningRemoteHosts();
          hasRemoteHosts = remoteHosts.length > 0;
          if (collectRemote && hasRemoteHosts) {
            console.error(
              `Collecting sessions from ${remoteHosts.length} homespace(s): ${remoteHosts.join(", ")}...`
            );
          }
        }
        const { insights, htmlPath, data, remoteStats } = await generateUsageReport(
          { collectRemote }
        );
        let reportUrl = `file://${htmlPath}`;
        let uploadHint = "";
        if (process.env.USER_TYPE === "ant") {
          const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace("T", "_").slice(0, 15);
          const username = process.env.SAFEUSER || process.env.USER || "unknown";
          const filename = `${username}_insights_${timestamp}.html`;
          const s3Path = `s3://anthropic-serve/atamkin/cc-user-reports/${filename}`;
          const s3Url = `https://s3-frontend.infra.ant.dev/anthropic-serve/atamkin/cc-user-reports/${filename}`;
          reportUrl = s3Url;
          try {
            execFileSync("ff", ["cp", htmlPath, s3Path], {
              timeout: 6e4,
              stdio: "pipe"
              // Suppress output
            });
          } catch {
            reportUrl = `file://${htmlPath}`;
            uploadHint = `
Automatic upload failed. Are you on the boron namespace? Try \`use-bo\` and ensure you've run \`sso\`.
To share, run: ff cp ${htmlPath} ${s3Path}
Then access at: ${s3Url}`;
          }
        }
        const sessionLabel = data.total_sessions_scanned && data.total_sessions_scanned > data.total_sessions ? `${data.total_sessions_scanned.toLocaleString()} sessions total \xB7 ${data.total_sessions} analyzed` : `${data.total_sessions} sessions`;
        const stats = [
          sessionLabel,
          `${data.total_messages.toLocaleString()} messages`,
          `${Math.round(data.total_duration_hours)}h`,
          `${data.git_commits} commits`
        ].join(" \xB7 ");
        let remoteInfo = "";
        if (process.env.USER_TYPE === "ant") {
          if (remoteStats && remoteStats.totalCopied > 0) {
            const hsNames = remoteStats.hosts.filter((h) => h.sessionCount > 0).map((h) => h.name).join(", ");
            remoteInfo = `
_Collected ${remoteStats.totalCopied} new sessions from: ${hsNames}_
`;
          } else if (!collectRemote && hasRemoteHosts) {
            remoteInfo = `
_Tip: Run \`/insights --homespaces\` to include sessions from your ${remoteHosts.length} running homespace(s)_
`;
          }
        }
        const atAGlance = insights.at_a_glance;
        const summaryText = atAGlance ? `## At a Glance

${atAGlance.whats_working ? `**What's working:** ${atAGlance.whats_working} See _Impressive Things You Did_.` : ""}

${atAGlance.whats_hindering ? `**What's hindering you:** ${atAGlance.whats_hindering} See _Where Things Go Wrong_.` : ""}

${atAGlance.quick_wins ? `**Quick wins to try:** ${atAGlance.quick_wins} See _Features to Try_.` : ""}

${atAGlance.ambitious_workflows ? `**Ambitious workflows:** ${atAGlance.ambitious_workflows} See _On the Horizon_.` : ""}` : "_No insights generated_";
        const header = `# Blaude Insights

${stats}
${data.date_range.start} to ${data.date_range.end}
${remoteInfo}
`;
        const userSummary = `${header}${summaryText}

Your full shareable insights report is ready: ${reportUrl}${uploadHint}`;
        return [
          {
            type: "text",
            text: `The user just ran /insights to generate a usage report analyzing their Blaude sessions.

Here is the full insights data:
${jsonStringify(insights, null, 2)}

Report URL: ${reportUrl}
HTML file: ${htmlPath}
Facets directory: ${getFacetsDir()}

Here is what the user sees:
${userSummary}

Now output the following message exactly:

<message>
Your shareable insights report is ready:
${reportUrl}${uploadHint}

Want to dig into any section or try one of the suggestions?
</message>`
          }
        ];
      }
    };
    insights_default = usageReport;
  }
});
init_insights();
export {
  buildExportData,
  deduplicateSessionBranches,
  insights_default as default,
  detectMultiClauding,
  generateUsageReport
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2luc2lnaHRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBleGVjRmlsZVN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IHsgZGlmZkxpbmVzIH0gZnJvbSAnZGlmZidcbmltcG9ydCB7IGNvbnN0YW50cyBhcyBmc0NvbnN0YW50cyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHtcbiAgY29weUZpbGUsXG4gIG1rZGlyLFxuICBta2R0ZW1wLFxuICByZWFkZGlyLFxuICByZWFkRmlsZSxcbiAgcm0sXG4gIHVubGluayxcbiAgd3JpdGVGaWxlLFxufSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IHRtcGRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgZXh0bmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IHF1ZXJ5V2l0aE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB7XG4gIEFHRU5UX1RPT0xfTkFNRSxcbiAgTEVHQUNZX0FHRU5UX1RPT0xfTkFNRSxcbn0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIHsgTG9nT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGV4dHJhY3RUZXh0Q29udGVudCB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdXNNb2RlbCB9IGZyb20gJy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdHNEaXIsXG4gIGdldFNlc3Npb25GaWxlc1dpdGhNdGltZSxcbiAgZ2V0U2Vzc2lvbklkRnJvbUxvZyxcbiAgbG9hZEFsbExvZ3NGcm9tU2Vzc2lvbkZpbGUsXG59IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBjb3VudENoYXJJblN0cmluZyB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHsgZXNjYXBlWG1sQXR0ciBhcyBlc2NhcGVIdG1sIH0gZnJvbSAnLi4vdXRpbHMveG1sLmpzJ1xuXG4vLyBNb2RlbCBmb3IgZmFjZXQgZXh0cmFjdGlvbiBhbmQgc3VtbWFyaXphdGlvbiAoT3B1cyAtIGJlc3QgcXVhbGl0eSlcbmZ1bmN0aW9uIGdldEFuYWx5c2lzTW9kZWwoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldERlZmF1bHRPcHVzTW9kZWwoKVxufVxuXG4vLyBNb2RlbCBmb3IgbmFycmF0aXZlIGluc2lnaHRzIChPcHVzIC0gYmVzdCBxdWFsaXR5KVxuZnVuY3Rpb24gZ2V0SW5zaWdodHNNb2RlbCgpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0RGVmYXVsdE9wdXNNb2RlbCgpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhvbWVzcGFjZSBEYXRhIENvbGxlY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBSZW1vdGVIb3N0SW5mbyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNlc3Npb25Db3VudDogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWVudi10b3AtbGV2ZWwgKi9cbmNvbnN0IGdldFJ1bm5pbmdSZW1vdGVIb3N0czogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4gPVxuICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgPyBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3Rkb3V0LCBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICAgICAgJ2NvZGVyJyxcbiAgICAgICAgICBbJ2xpc3QnLCAnLW8nLCAnanNvbiddLFxuICAgICAgICAgIHsgdGltZW91dDogMzAwMDAgfSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgcmV0dXJuIFtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgd29ya3NwYWNlcyA9IGpzb25QYXJzZShzdGRvdXQpIGFzIEFycmF5PHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZ1xuICAgICAgICAgICAgbGF0ZXN0X2J1aWxkPzogeyBzdGF0dXM/OiBzdHJpbmcgfVxuICAgICAgICAgIH0+XG4gICAgICAgICAgcmV0dXJuIHdvcmtzcGFjZXNcbiAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmxhdGVzdF9idWlsZD8uc3RhdHVzID09PSAncnVubmluZycpXG4gICAgICAgICAgICAubWFwKHcgPT4gdy5uYW1lKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDogYXN5bmMgKCkgPT4gW11cblxuY29uc3QgZ2V0UmVtb3RlSG9zdFNlc3Npb25Db3VudDogKGhzOiBzdHJpbmcpID0+IFByb21pc2U8bnVtYmVyPiA9XG4gIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IGFzeW5jIChob21lc3BhY2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB7IHN0ZG91dCwgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgICAgICdzc2gnLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGAke2hvbWVzcGFjZX0uY29kZXJgLFxuICAgICAgICAgICAgJ2ZpbmQgL3Jvb3QvLmNsYXVkZS9wcm9qZWN0cyAtbmFtZSBcIiouanNvbmxcIiAyPi9kZXYvbnVsbCB8IHdjIC1sJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHsgdGltZW91dDogMzAwMDAgfSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0ZG91dC50cmltKCksIDEwKSB8fCAwXG4gICAgICB9XG4gICAgOiBhc3luYyAoKSA9PiAwXG5cbmNvbnN0IGNvbGxlY3RGcm9tUmVtb3RlSG9zdDogKFxuICBoczogc3RyaW5nLFxuICBkZXN0RGlyOiBzdHJpbmcsXG4pID0+IFByb21pc2U8eyBjb3BpZWQ6IG51bWJlcjsgc2tpcHBlZDogbnVtYmVyIH0+ID1cbiAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50J1xuICAgID8gYXN5bmMgKGhvbWVzcGFjZTogc3RyaW5nLCBkZXN0RGlyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyBjb3BpZWQ6IDAsIHNraXBwZWQ6IDAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wIGRpcmVjdG9yeVxuICAgICAgICBjb25zdCB0ZW1wRGlyID0gYXdhaXQgbWtkdGVtcChqb2luKHRtcGRpcigpLCAnY2xhdWRlLWhzLScpKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU0NQIHRoZSBwcm9qZWN0cyBmb2xkZXJcbiAgICAgICAgICBjb25zdCBzY3BSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICAgICAgICAnc2NwJyxcbiAgICAgICAgICAgIFsnLXJxJywgYCR7aG9tZXNwYWNlfS5jb2Rlcjovcm9vdC8uY2xhdWRlL3Byb2plY3RzL2AsIHRlbXBEaXJdLFxuICAgICAgICAgICAgeyB0aW1lb3V0OiAzMDAwMDAgfSxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHNjcFJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBTQ1AgZmFpbGVkXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJvamVjdHNEaXIgPSBqb2luKHRlbXBEaXIsICdwcm9qZWN0cycpXG4gICAgICAgICAgbGV0IHByb2plY3REaXJlbnRzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9qZWN0RGlyZW50cyA9IGF3YWl0IHJlYWRkaXIocHJvamVjdHNEaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE1lcmdlIGludG8gZGVzdGluYXRpb24gKHBhcmFsbGVsIHBlciBwcm9qZWN0IGRpcmVjdG9yeSlcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHByb2plY3REaXJlbnRzLm1hcChhc3luYyBkaXJlbnQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRpcmVudC5uYW1lXG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXRoID0gam9pbihwcm9qZWN0c0RpciwgcHJvamVjdE5hbWUpXG5cbiAgICAgICAgICAgICAgLy8gU2tpcCBpZiBub3QgYSBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgaWYgKCFkaXJlbnQuaXNEaXJlY3RvcnkoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgY29uc3QgZGVzdFByb2plY3ROYW1lID0gYCR7cHJvamVjdE5hbWV9X18ke2hvbWVzcGFjZX1gXG4gICAgICAgICAgICAgIGNvbnN0IGRlc3RQcm9qZWN0UGF0aCA9IGpvaW4oZGVzdERpciwgZGVzdFByb2plY3ROYW1lKVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbWtkaXIoZGVzdFByb2plY3RQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBEaXJlY3RvcnkgbWF5IGFscmVhZHkgZXhpc3RcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENvcHkgc2Vzc2lvbiBmaWxlcyAoc2tpcCBleGlzdGluZylcbiAgICAgICAgICAgICAgbGV0IGZpbGVzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihwcm9qZWN0UGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGZpbGVzLm1hcChhc3luYyBmaWxlRGlyZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZURpcmVudC5uYW1lXG4gICAgICAgICAgICAgICAgICBpZiAoIWZpbGVOYW1lLmVuZHNXaXRoKCcuanNvbmwnKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNyY0ZpbGUgPSBqb2luKHByb2plY3RQYXRoLCBmaWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RGaWxlID0gam9pbihkZXN0UHJvamVjdFBhdGgsIGZpbGVOYW1lKVxuXG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb3B5RmlsZShzcmNGaWxlLCBkZXN0RmlsZSwgZnNDb25zdGFudHMuQ09QWUZJTEVfRVhDTClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvcGllZCsrXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRUVYSVNUIGZyb20gQ09QWUZJTEVfRVhDTCBtZWFucyBkZXN0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5za2lwcGVkKytcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBybSh0ZW1wRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBjbGVhbnVwIGVycm9yc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICA6IGFzeW5jICgpID0+ICh7IGNvcGllZDogMCwgc2tpcHBlZDogMCB9KVxuXG5jb25zdCBjb2xsZWN0QWxsUmVtb3RlSG9zdERhdGE6IChkZXN0RGlyOiBzdHJpbmcpID0+IFByb21pc2U8e1xuICBob3N0czogUmVtb3RlSG9zdEluZm9bXVxuICB0b3RhbENvcGllZDogbnVtYmVyXG4gIHRvdGFsU2tpcHBlZDogbnVtYmVyXG59PiA9XG4gIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IGFzeW5jIChkZXN0RGlyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgckhvc3RzID0gYXdhaXQgZ2V0UnVubmluZ1JlbW90ZUhvc3RzKClcbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZW1vdGVIb3N0SW5mb1tdID0gW11cbiAgICAgICAgbGV0IHRvdGFsQ29waWVkID0gMFxuICAgICAgICBsZXQgdG90YWxTa2lwcGVkID0gMFxuXG4gICAgICAgIC8vIENvbGxlY3QgZnJvbSBhbGwgaG9zdHMgaW4gcGFyYWxsZWwgKFNDUCBwZXIgaG9zdCBjYW4gdGFrZSBzZWNvbmRzKVxuICAgICAgICBjb25zdCBob3N0UmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIHJIb3N0cy5tYXAoYXN5bmMgaHMgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkNvdW50ID0gYXdhaXQgZ2V0UmVtb3RlSG9zdFNlc3Npb25Db3VudChocylcbiAgICAgICAgICAgIGlmIChzZXNzaW9uQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgY29waWVkLCBza2lwcGVkIH0gPSBhd2FpdCBjb2xsZWN0RnJvbVJlbW90ZUhvc3QoXG4gICAgICAgICAgICAgICAgaHMsXG4gICAgICAgICAgICAgICAgZGVzdERpcixcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBocywgc2Vzc2lvbkNvdW50LCBjb3BpZWQsIHNraXBwZWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogaHMsIHNlc3Npb25Db3VudCwgY29waWVkOiAwLCBza2lwcGVkOiAwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuXG4gICAgICAgIGZvciAoY29uc3QgaHIgb2YgaG9zdFJlc3VsdHMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IG5hbWU6IGhyLm5hbWUsIHNlc3Npb25Db3VudDogaHIuc2Vzc2lvbkNvdW50IH0pXG4gICAgICAgICAgdG90YWxDb3BpZWQgKz0gaHIuY29waWVkXG4gICAgICAgICAgdG90YWxTa2lwcGVkICs9IGhyLnNraXBwZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhvc3RzOiByZXN1bHQsIHRvdGFsQ29waWVkLCB0b3RhbFNraXBwZWQgfVxuICAgICAgfVxuICAgIDogYXN5bmMgKCkgPT4gKHsgaG9zdHM6IFtdLCB0b3RhbENvcGllZDogMCwgdG90YWxTa2lwcGVkOiAwIH0pXG4vKiBlc2xpbnQtZW5hYmxlIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWVudi10b3AtbGV2ZWwgKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXNzaW9uTWV0YSA9IHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gIHByb2plY3RfcGF0aDogc3RyaW5nXG4gIHN0YXJ0X3RpbWU6IHN0cmluZ1xuICBkdXJhdGlvbl9taW51dGVzOiBudW1iZXJcbiAgdXNlcl9tZXNzYWdlX2NvdW50OiBudW1iZXJcbiAgYXNzaXN0YW50X21lc3NhZ2VfY291bnQ6IG51bWJlclxuICB0b29sX2NvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBsYW5ndWFnZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgZ2l0X2NvbW1pdHM6IG51bWJlclxuICBnaXRfcHVzaGVzOiBudW1iZXJcbiAgaW5wdXRfdG9rZW5zOiBudW1iZXJcbiAgb3V0cHV0X3Rva2VuczogbnVtYmVyXG4gIGZpcnN0X3Byb21wdDogc3RyaW5nXG4gIHN1bW1hcnk/OiBzdHJpbmdcbiAgLy8gTmV3IHN0YXRzXG4gIHVzZXJfaW50ZXJydXB0aW9uczogbnVtYmVyXG4gIHVzZXJfcmVzcG9uc2VfdGltZXM6IG51bWJlcltdXG4gIHRvb2xfZXJyb3JzOiBudW1iZXJcbiAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHVzZXNfdGFza19hZ2VudDogYm9vbGVhblxuICB1c2VzX21jcDogYm9vbGVhblxuICB1c2VzX3dlYl9zZWFyY2g6IGJvb2xlYW5cbiAgdXNlc193ZWJfZmV0Y2g6IGJvb2xlYW5cbiAgLy8gQWRkaXRpb25hbCBzdGF0c1xuICBsaW5lc19hZGRlZDogbnVtYmVyXG4gIGxpbmVzX3JlbW92ZWQ6IG51bWJlclxuICBmaWxlc19tb2RpZmllZDogbnVtYmVyXG4gIG1lc3NhZ2VfaG91cnM6IG51bWJlcltdXG4gIHVzZXJfbWVzc2FnZV90aW1lc3RhbXBzOiBzdHJpbmdbXSAvLyBJU08gdGltZXN0YW1wcyBmb3IgbXVsdGktY2xhdWRpbmcgZGV0ZWN0aW9uXG59XG5cbnR5cGUgU2Vzc2lvbkZhY2V0cyA9IHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gIHVuZGVybHlpbmdfZ29hbDogc3RyaW5nXG4gIGdvYWxfY2F0ZWdvcmllczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBvdXRjb21lOiBzdHJpbmdcbiAgdXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGNsYXVkZV9oZWxwZnVsbmVzczogc3RyaW5nXG4gIHNlc3Npb25fdHlwZTogc3RyaW5nXG4gIGZyaWN0aW9uX2NvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBmcmljdGlvbl9kZXRhaWw6IHN0cmluZ1xuICBwcmltYXJ5X3N1Y2Nlc3M6IHN0cmluZ1xuICBicmllZl9zdW1tYXJ5OiBzdHJpbmdcbiAgdXNlcl9pbnN0cnVjdGlvbnNfdG9fY2xhdWRlPzogc3RyaW5nW11cbn1cblxudHlwZSBBZ2dyZWdhdGVkRGF0YSA9IHtcbiAgdG90YWxfc2Vzc2lvbnM6IG51bWJlclxuICB0b3RhbF9zZXNzaW9uc19zY2FubmVkPzogbnVtYmVyXG4gIHNlc3Npb25zX3dpdGhfZmFjZXRzOiBudW1iZXJcbiAgZGF0ZV9yYW5nZTogeyBzdGFydDogc3RyaW5nOyBlbmQ6IHN0cmluZyB9XG4gIHRvdGFsX21lc3NhZ2VzOiBudW1iZXJcbiAgdG90YWxfZHVyYXRpb25faG91cnM6IG51bWJlclxuICB0b3RhbF9pbnB1dF90b2tlbnM6IG51bWJlclxuICB0b3RhbF9vdXRwdXRfdG9rZW5zOiBudW1iZXJcbiAgdG9vbF9jb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgbGFuZ3VhZ2VzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGdpdF9jb21taXRzOiBudW1iZXJcbiAgZ2l0X3B1c2hlczogbnVtYmVyXG4gIHByb2plY3RzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGdvYWxfY2F0ZWdvcmllczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBvdXRjb21lczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBzYXRpc2ZhY3Rpb246IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgaGVscGZ1bG5lc3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgc2Vzc2lvbl90eXBlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBmcmljdGlvbjogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBzdWNjZXNzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHNlc3Npb25fc3VtbWFyaWVzOiBBcnJheTx7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGRhdGU6IHN0cmluZ1xuICAgIHN1bW1hcnk6IHN0cmluZ1xuICAgIGdvYWw/OiBzdHJpbmdcbiAgfT5cbiAgLy8gTmV3IGFnZ3JlZ2F0ZWQgc3RhdHNcbiAgdG90YWxfaW50ZXJydXB0aW9uczogbnVtYmVyXG4gIHRvdGFsX3Rvb2xfZXJyb3JzOiBudW1iZXJcbiAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHVzZXJfcmVzcG9uc2VfdGltZXM6IG51bWJlcltdXG4gIG1lZGlhbl9yZXNwb25zZV90aW1lOiBudW1iZXJcbiAgYXZnX3Jlc3BvbnNlX3RpbWU6IG51bWJlclxuICBzZXNzaW9uc191c2luZ190YXNrX2FnZW50OiBudW1iZXJcbiAgc2Vzc2lvbnNfdXNpbmdfbWNwOiBudW1iZXJcbiAgc2Vzc2lvbnNfdXNpbmdfd2ViX3NlYXJjaDogbnVtYmVyXG4gIHNlc3Npb25zX3VzaW5nX3dlYl9mZXRjaDogbnVtYmVyXG4gIC8vIEFkZGl0aW9uYWwgc3RhdHMgZnJvbSBQeXRob24gcmVmZXJlbmNlXG4gIHRvdGFsX2xpbmVzX2FkZGVkOiBudW1iZXJcbiAgdG90YWxfbGluZXNfcmVtb3ZlZDogbnVtYmVyXG4gIHRvdGFsX2ZpbGVzX21vZGlmaWVkOiBudW1iZXJcbiAgZGF5c19hY3RpdmU6IG51bWJlclxuICBtZXNzYWdlc19wZXJfZGF5OiBudW1iZXJcbiAgbWVzc2FnZV9ob3VyczogbnVtYmVyW10gLy8gSG91ciBvZiBkYXkgZm9yIGVhY2ggdXNlciBtZXNzYWdlIChmb3IgdGltZSBvZiBkYXkgY2hhcnQpXG4gIC8vIE11bHRpLWNsYXVkaW5nIHN0YXRzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuICBtdWx0aV9jbGF1ZGluZzoge1xuICAgIG92ZXJsYXBfZXZlbnRzOiBudW1iZXJcbiAgICBzZXNzaW9uc19pbnZvbHZlZDogbnVtYmVyXG4gICAgdXNlcl9tZXNzYWdlc19kdXJpbmc6IG51bWJlclxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnN0YW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBFWFRFTlNJT05fVE9fTEFOR1VBR0U6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcudHMnOiAnVHlwZVNjcmlwdCcsXG4gICcudHN4JzogJ1R5cGVTY3JpcHQnLFxuICAnLmpzJzogJ0phdmFTY3JpcHQnLFxuICAnLmpzeCc6ICdKYXZhU2NyaXB0JyxcbiAgJy5weSc6ICdQeXRob24nLFxuICAnLnJiJzogJ1J1YnknLFxuICAnLmdvJzogJ0dvJyxcbiAgJy5ycyc6ICdSdXN0JyxcbiAgJy5qYXZhJzogJ0phdmEnLFxuICAnLm1kJzogJ01hcmtkb3duJyxcbiAgJy5qc29uJzogJ0pTT04nLFxuICAnLnlhbWwnOiAnWUFNTCcsXG4gICcueW1sJzogJ1lBTUwnLFxuICAnLnNoJzogJ1NoZWxsJyxcbiAgJy5jc3MnOiAnQ1NTJyxcbiAgJy5odG1sJzogJ0hUTUwnLFxufVxuXG4vLyBMYWJlbCBtYXAgZm9yIGNsZWFuaW5nIHVwIGNhdGVnb3J5IG5hbWVzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuY29uc3QgTEFCRUxfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyBHb2FsIGNhdGVnb3JpZXNcbiAgZGVidWdfaW52ZXN0aWdhdGU6ICdEZWJ1Zy9JbnZlc3RpZ2F0ZScsXG4gIGltcGxlbWVudF9mZWF0dXJlOiAnSW1wbGVtZW50IEZlYXR1cmUnLFxuICBmaXhfYnVnOiAnRml4IEJ1ZycsXG4gIHdyaXRlX3NjcmlwdF90b29sOiAnV3JpdGUgU2NyaXB0L1Rvb2wnLFxuICByZWZhY3Rvcl9jb2RlOiAnUmVmYWN0b3IgQ29kZScsXG4gIGNvbmZpZ3VyZV9zeXN0ZW06ICdDb25maWd1cmUgU3lzdGVtJyxcbiAgY3JlYXRlX3ByX2NvbW1pdDogJ0NyZWF0ZSBQUi9Db21taXQnLFxuICBhbmFseXplX2RhdGE6ICdBbmFseXplIERhdGEnLFxuICB1bmRlcnN0YW5kX2NvZGViYXNlOiAnVW5kZXJzdGFuZCBDb2RlYmFzZScsXG4gIHdyaXRlX3Rlc3RzOiAnV3JpdGUgVGVzdHMnLFxuICB3cml0ZV9kb2NzOiAnV3JpdGUgRG9jcycsXG4gIGRlcGxveV9pbmZyYTogJ0RlcGxveS9JbmZyYScsXG4gIHdhcm11cF9taW5pbWFsOiAnQ2FjaGUgV2FybXVwJyxcbiAgLy8gU3VjY2VzcyBmYWN0b3JzXG4gIGZhc3RfYWNjdXJhdGVfc2VhcmNoOiAnRmFzdC9BY2N1cmF0ZSBTZWFyY2gnLFxuICBjb3JyZWN0X2NvZGVfZWRpdHM6ICdDb3JyZWN0IENvZGUgRWRpdHMnLFxuICBnb29kX2V4cGxhbmF0aW9uczogJ0dvb2QgRXhwbGFuYXRpb25zJyxcbiAgcHJvYWN0aXZlX2hlbHA6ICdQcm9hY3RpdmUgSGVscCcsXG4gIG11bHRpX2ZpbGVfY2hhbmdlczogJ011bHRpLWZpbGUgQ2hhbmdlcycsXG4gIGhhbmRsZWRfY29tcGxleGl0eTogJ011bHRpLWZpbGUgQ2hhbmdlcycsXG4gIGdvb2RfZGVidWdnaW5nOiAnR29vZCBEZWJ1Z2dpbmcnLFxuICAvLyBGcmljdGlvbiB0eXBlc1xuICBtaXN1bmRlcnN0b29kX3JlcXVlc3Q6ICdNaXN1bmRlcnN0b29kIFJlcXVlc3QnLFxuICB3cm9uZ19hcHByb2FjaDogJ1dyb25nIEFwcHJvYWNoJyxcbiAgYnVnZ3lfY29kZTogJ0J1Z2d5IENvZGUnLFxuICB1c2VyX3JlamVjdGVkX2FjdGlvbjogJ1VzZXIgUmVqZWN0ZWQgQWN0aW9uJyxcbiAgY2xhdWRlX2dvdF9ibG9ja2VkOiAnQ2xhdWRlIEdvdCBCbG9ja2VkJyxcbiAgdXNlcl9zdG9wcGVkX2Vhcmx5OiAnVXNlciBTdG9wcGVkIEVhcmx5JyxcbiAgd3JvbmdfZmlsZV9vcl9sb2NhdGlvbjogJ1dyb25nIEZpbGUvTG9jYXRpb24nLFxuICBleGNlc3NpdmVfY2hhbmdlczogJ0V4Y2Vzc2l2ZSBDaGFuZ2VzJyxcbiAgc2xvd19vcl92ZXJib3NlOiAnU2xvdy9WZXJib3NlJyxcbiAgdG9vbF9mYWlsZWQ6ICdUb29sIEZhaWxlZCcsXG4gIHVzZXJfdW5jbGVhcjogJ1VzZXIgVW5jbGVhcicsXG4gIGV4dGVybmFsX2lzc3VlOiAnRXh0ZXJuYWwgSXNzdWUnLFxuICAvLyBTYXRpc2ZhY3Rpb24gbGFiZWxzXG4gIGZydXN0cmF0ZWQ6ICdGcnVzdHJhdGVkJyxcbiAgZGlzc2F0aXNmaWVkOiAnRGlzc2F0aXNmaWVkJyxcbiAgbGlrZWx5X3NhdGlzZmllZDogJ0xpa2VseSBTYXRpc2ZpZWQnLFxuICBzYXRpc2ZpZWQ6ICdTYXRpc2ZpZWQnLFxuICBoYXBweTogJ0hhcHB5JyxcbiAgdW5zdXJlOiAnVW5zdXJlJyxcbiAgbmV1dHJhbDogJ05ldXRyYWwnLFxuICBkZWxpZ2h0ZWQ6ICdEZWxpZ2h0ZWQnLFxuICAvLyBTZXNzaW9uIHR5cGVzXG4gIHNpbmdsZV90YXNrOiAnU2luZ2xlIFRhc2snLFxuICBtdWx0aV90YXNrOiAnTXVsdGkgVGFzaycsXG4gIGl0ZXJhdGl2ZV9yZWZpbmVtZW50OiAnSXRlcmF0aXZlIFJlZmluZW1lbnQnLFxuICBleHBsb3JhdGlvbjogJ0V4cGxvcmF0aW9uJyxcbiAgcXVpY2tfcXVlc3Rpb246ICdRdWljayBRdWVzdGlvbicsXG4gIC8vIE91dGNvbWVzXG4gIGZ1bGx5X2FjaGlldmVkOiAnRnVsbHkgQWNoaWV2ZWQnLFxuICBtb3N0bHlfYWNoaWV2ZWQ6ICdNb3N0bHkgQWNoaWV2ZWQnLFxuICBwYXJ0aWFsbHlfYWNoaWV2ZWQ6ICdQYXJ0aWFsbHkgQWNoaWV2ZWQnLFxuICBub3RfYWNoaWV2ZWQ6ICdOb3QgQWNoaWV2ZWQnLFxuICB1bmNsZWFyX2Zyb21fdHJhbnNjcmlwdDogJ1VuY2xlYXInLFxuICAvLyBIZWxwZnVsbmVzc1xuICB1bmhlbHBmdWw6ICdVbmhlbHBmdWwnLFxuICBzbGlnaHRseV9oZWxwZnVsOiAnU2xpZ2h0bHkgSGVscGZ1bCcsXG4gIG1vZGVyYXRlbHlfaGVscGZ1bDogJ01vZGVyYXRlbHkgSGVscGZ1bCcsXG4gIHZlcnlfaGVscGZ1bDogJ1ZlcnkgSGVscGZ1bCcsXG4gIGVzc2VudGlhbDogJ0Vzc2VudGlhbCcsXG59XG5cbi8vIExhenkgZ2V0dGVyczogZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpIGlzIG1lbW9pemVkIGFuZCByZWFkcyBwcm9jZXNzLmVudi5cbi8vIENhbGxpbmcgaXQgYXQgbW9kdWxlIHNjb3BlIHdvdWxkIHBvcHVsYXRlIHRoZSBtZW1vaXplIGNhY2hlIGJlZm9yZVxuLy8gZW50cnlwb2ludHMgY2FuIHNldCBDTEFVREVfQ09ORklHX0RJUiwgYnJlYWtpbmcgYWxsIDE1MCsgb3RoZXIgY2FsbGVycy5cbmZ1bmN0aW9uIGdldERhdGFEaXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAndXNhZ2UtZGF0YScpXG59XG5mdW5jdGlvbiBnZXRGYWNldHNEaXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0RGF0YURpcigpLCAnZmFjZXRzJylcbn1cbmZ1bmN0aW9uIGdldFNlc3Npb25NZXRhRGlyKCk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldERhdGFEaXIoKSwgJ3Nlc3Npb24tbWV0YScpXG59XG5cbmNvbnN0IEZBQ0VUX0VYVFJBQ1RJT05fUFJPTVBUID0gYEFuYWx5emUgdGhpcyBCbGF1ZGUgc2Vzc2lvbiBhbmQgZXh0cmFjdCBzdHJ1Y3R1cmVkIGZhY2V0cy5cblxuQ1JJVElDQUwgR1VJREVMSU5FUzpcblxuMS4gKipnb2FsX2NhdGVnb3JpZXMqKjogQ291bnQgT05MWSB3aGF0IHRoZSBVU0VSIGV4cGxpY2l0bHkgYXNrZWQgZm9yLlxuICAgLSBETyBOT1QgY291bnQgQ2xhdWRlJ3MgYXV0b25vbW91cyBjb2RlYmFzZSBleHBsb3JhdGlvblxuICAgLSBETyBOT1QgY291bnQgd29yayBDbGF1ZGUgZGVjaWRlZCB0byBkbyBvbiBpdHMgb3duXG4gICAtIE9OTFkgY291bnQgd2hlbiB1c2VyIHNheXMgXCJjYW4geW91Li4uXCIsIFwicGxlYXNlLi4uXCIsIFwiSSBuZWVkLi4uXCIsIFwibGV0J3MuLi5cIlxuXG4yLiAqKnVzZXJfc2F0aXNmYWN0aW9uX2NvdW50cyoqOiBCYXNlIE9OTFkgb24gZXhwbGljaXQgdXNlciBzaWduYWxzLlxuICAgLSBcIllheSFcIiwgXCJncmVhdCFcIiwgXCJwZXJmZWN0IVwiIFx1MjE5MiBoYXBweVxuICAgLSBcInRoYW5rc1wiLCBcImxvb2tzIGdvb2RcIiwgXCJ0aGF0IHdvcmtzXCIgXHUyMTkyIHNhdGlzZmllZFxuICAgLSBcIm9rLCBub3cgbGV0J3MuLi5cIiAoY29udGludWluZyB3aXRob3V0IGNvbXBsYWludCkgXHUyMTkyIGxpa2VseV9zYXRpc2ZpZWRcbiAgIC0gXCJ0aGF0J3Mgbm90IHJpZ2h0XCIsIFwidHJ5IGFnYWluXCIgXHUyMTkyIGRpc3NhdGlzZmllZFxuICAgLSBcInRoaXMgaXMgYnJva2VuXCIsIFwiSSBnaXZlIHVwXCIgXHUyMTkyIGZydXN0cmF0ZWRcblxuMy4gKipmcmljdGlvbl9jb3VudHMqKjogQmUgc3BlY2lmaWMgYWJvdXQgd2hhdCB3ZW50IHdyb25nLlxuICAgLSBtaXN1bmRlcnN0b29kX3JlcXVlc3Q6IENsYXVkZSBpbnRlcnByZXRlZCBpbmNvcnJlY3RseVxuICAgLSB3cm9uZ19hcHByb2FjaDogUmlnaHQgZ29hbCwgd3Jvbmcgc29sdXRpb24gbWV0aG9kXG4gICAtIGJ1Z2d5X2NvZGU6IENvZGUgZGlkbid0IHdvcmsgY29ycmVjdGx5XG4gICAtIHVzZXJfcmVqZWN0ZWRfYWN0aW9uOiBVc2VyIHNhaWQgbm8vc3RvcCB0byBhIHRvb2wgY2FsbFxuICAgLSBleGNlc3NpdmVfY2hhbmdlczogT3Zlci1lbmdpbmVlcmVkIG9yIGNoYW5nZWQgdG9vIG11Y2hcblxuNC4gSWYgdmVyeSBzaG9ydCBvciBqdXN0IHdhcm11cCwgdXNlIHdhcm11cF9taW5pbWFsIGZvciBnb2FsX2NhdGVnb3J5XG5cblNFU1NJT046XG5gXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhlbHBlciBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VGcm9tUGF0aChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGV4dCA9IGV4dG5hbWUoZmlsZVBhdGgpLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIEVYVEVOU0lPTl9UT19MQU5HVUFHRVtleHRdIHx8IG51bGxcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFRvb2xTdGF0cyhsb2c6IExvZ09wdGlvbik6IHtcbiAgdG9vbENvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBsYW5ndWFnZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgZ2l0Q29tbWl0czogbnVtYmVyXG4gIGdpdFB1c2hlczogbnVtYmVyXG4gIGlucHV0VG9rZW5zOiBudW1iZXJcbiAgb3V0cHV0VG9rZW5zOiBudW1iZXJcbiAgLy8gTmV3IHN0YXRzXG4gIHVzZXJJbnRlcnJ1cHRpb25zOiBudW1iZXJcbiAgdXNlclJlc3BvbnNlVGltZXM6IG51bWJlcltdXG4gIHRvb2xFcnJvcnM6IG51bWJlclxuICB0b29sRXJyb3JDYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHVzZXNUYXNrQWdlbnQ6IGJvb2xlYW5cbiAgdXNlc01jcDogYm9vbGVhblxuICB1c2VzV2ViU2VhcmNoOiBib29sZWFuXG4gIHVzZXNXZWJGZXRjaDogYm9vbGVhblxuICAvLyBBZGRpdGlvbmFsIHN0YXRzXG4gIGxpbmVzQWRkZWQ6IG51bWJlclxuICBsaW5lc1JlbW92ZWQ6IG51bWJlclxuICBmaWxlc01vZGlmaWVkOiBTZXQ8c3RyaW5nPlxuICBtZXNzYWdlSG91cnM6IG51bWJlcltdXG4gIHVzZXJNZXNzYWdlVGltZXN0YW1wczogc3RyaW5nW10gLy8gSVNPIHRpbWVzdGFtcHMgZm9yIG11bHRpLWNsYXVkaW5nIGRldGVjdGlvblxufSB7XG4gIGNvbnN0IHRvb2xDb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICBjb25zdCBsYW5ndWFnZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICBsZXQgZ2l0Q29tbWl0cyA9IDBcbiAgbGV0IGdpdFB1c2hlcyA9IDBcbiAgbGV0IGlucHV0VG9rZW5zID0gMFxuICBsZXQgb3V0cHV0VG9rZW5zID0gMFxuXG4gIC8vIE5ldyBzdGF0c1xuICBsZXQgdXNlckludGVycnVwdGlvbnMgPSAwXG4gIGNvbnN0IHVzZXJSZXNwb25zZVRpbWVzOiBudW1iZXJbXSA9IFtdXG4gIGxldCB0b29sRXJyb3JzID0gMFxuICBjb25zdCB0b29sRXJyb3JDYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cbiAgbGV0IHVzZXNUYXNrQWdlbnQgPSBmYWxzZVxuXG4gIC8vIEFkZGl0aW9uYWwgc3RhdHNcbiAgbGV0IGxpbmVzQWRkZWQgPSAwXG4gIGxldCBsaW5lc1JlbW92ZWQgPSAwXG4gIGNvbnN0IGZpbGVzTW9kaWZpZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBtZXNzYWdlSG91cnM6IG51bWJlcltdID0gW11cbiAgY29uc3QgdXNlck1lc3NhZ2VUaW1lc3RhbXBzOiBzdHJpbmdbXSA9IFtdIC8vIEZvciBtdWx0aS1jbGF1ZGluZyBkZXRlY3Rpb25cbiAgbGV0IHVzZXNNY3AgPSBmYWxzZVxuICBsZXQgdXNlc1dlYlNlYXJjaCA9IGZhbHNlXG4gIGxldCB1c2VzV2ViRmV0Y2ggPSBmYWxzZVxuICBsZXQgbGFzdEFzc2lzdGFudFRpbWVzdGFtcDogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICBmb3IgKGNvbnN0IG1zZyBvZiBsb2cubWVzc2FnZXMpIHtcbiAgICAvLyBHZXQgbWVzc2FnZSB0aW1lc3RhbXAgZm9yIHJlc3BvbnNlIHRpbWUgY2FsY3VsYXRpb25cbiAgICBjb25zdCBtc2dUaW1lc3RhbXAgPSAobXNnIGFzIHsgdGltZXN0YW1wPzogc3RyaW5nIH0pLnRpbWVzdGFtcFxuXG4gICAgaWYgKG1zZy50eXBlID09PSAnYXNzaXN0YW50JyAmJiBtc2cubWVzc2FnZSkge1xuICAgICAgLy8gVHJhY2sgdGltZXN0YW1wIGZvciByZXNwb25zZSB0aW1lIGNhbGN1bGF0aW9uXG4gICAgICBpZiAobXNnVGltZXN0YW1wKSB7XG4gICAgICAgIGxhc3RBc3Npc3RhbnRUaW1lc3RhbXAgPSBtc2dUaW1lc3RhbXBcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNhZ2UgPSAoXG4gICAgICAgIG1zZy5tZXNzYWdlIGFzIHtcbiAgICAgICAgICB1c2FnZT86IHsgaW5wdXRfdG9rZW5zPzogbnVtYmVyOyBvdXRwdXRfdG9rZW5zPzogbnVtYmVyIH1cbiAgICAgICAgfVxuICAgICAgKS51c2FnZVxuICAgICAgaWYgKHVzYWdlKSB7XG4gICAgICAgIGlucHV0VG9rZW5zICs9IHVzYWdlLmlucHV0X3Rva2VucyB8fCAwXG4gICAgICAgIG91dHB1dFRva2VucyArPSB1c2FnZS5vdXRwdXRfdG9rZW5zIHx8IDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAndG9vbF91c2UnICYmICduYW1lJyBpbiBibG9jaykge1xuICAgICAgICAgICAgY29uc3QgdG9vbE5hbWUgPSBibG9jay5uYW1lIGFzIHN0cmluZ1xuICAgICAgICAgICAgdG9vbENvdW50c1t0b29sTmFtZV0gPSAodG9vbENvdW50c1t0b29sTmFtZV0gfHwgMCkgKyAxXG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBzcGVjaWFsIHRvb2wgdXNhZ2VcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdG9vbE5hbWUgPT09IEFHRU5UX1RPT0xfTkFNRSB8fFxuICAgICAgICAgICAgICB0b29sTmFtZSA9PT0gTEVHQUNZX0FHRU5UX1RPT0xfTkFNRVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB1c2VzVGFza0FnZW50ID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHRvb2xOYW1lLnN0YXJ0c1dpdGgoJ21jcF9fJykpIHVzZXNNY3AgPSB0cnVlXG4gICAgICAgICAgICBpZiAodG9vbE5hbWUgPT09ICdXZWJTZWFyY2gnKSB1c2VzV2ViU2VhcmNoID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHRvb2xOYW1lID09PSAnV2ViRmV0Y2gnKSB1c2VzV2ViRmV0Y2ggPSB0cnVlXG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gKGJsb2NrIGFzIHsgaW5wdXQ/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9KS5pbnB1dFxuXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSAoaW5wdXQuZmlsZV9wYXRoIGFzIHN0cmluZykgfHwgJydcbiAgICAgICAgICAgICAgaWYgKGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFuZyA9IGdldExhbmd1YWdlRnJvbVBhdGgoZmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgaWYgKGxhbmcpIHtcbiAgICAgICAgICAgICAgICAgIGxhbmd1YWdlc1tsYW5nXSA9IChsYW5ndWFnZXNbbGFuZ10gfHwgMCkgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRyYWNrIGZpbGVzIG1vZGlmaWVkIGJ5IEVkaXQvV3JpdGUgdG9vbHNcbiAgICAgICAgICAgICAgICBpZiAodG9vbE5hbWUgPT09ICdFZGl0JyB8fCB0b29sTmFtZSA9PT0gJ1dyaXRlJykge1xuICAgICAgICAgICAgICAgICAgZmlsZXNNb2RpZmllZC5hZGQoZmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRvb2xOYW1lID09PSAnRWRpdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRTdHJpbmcgPSAoaW5wdXQub2xkX3N0cmluZyBhcyBzdHJpbmcpIHx8ICcnXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyaW5nID0gKGlucHV0Lm5ld19zdHJpbmcgYXMgc3RyaW5nKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIGRpZmZMaW5lcyhvbGRTdHJpbmcsIG5ld1N0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIGxpbmVzQWRkZWQgKz0gY2hhbmdlLmNvdW50IHx8IDBcbiAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UucmVtb3ZlZCkgbGluZXNSZW1vdmVkICs9IGNoYW5nZS5jb3VudCB8fCAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gVHJhY2sgbGluZXMgZnJvbSBXcml0ZSB0b29sIChhbGwgYWRkZWQpXG4gICAgICAgICAgICAgIGlmICh0b29sTmFtZSA9PT0gJ1dyaXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdyaXRlQ29udGVudCA9IChpbnB1dC5jb250ZW50IGFzIHN0cmluZykgfHwgJydcbiAgICAgICAgICAgICAgICBpZiAod3JpdGVDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICBsaW5lc0FkZGVkICs9IGNvdW50Q2hhckluU3RyaW5nKHdyaXRlQ29udGVudCwgJ1xcbicpICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSAoaW5wdXQuY29tbWFuZCBhcyBzdHJpbmcpIHx8ICcnXG4gICAgICAgICAgICAgIGlmIChjb21tYW5kLmluY2x1ZGVzKCdnaXQgY29tbWl0JykpIGdpdENvbW1pdHMrK1xuICAgICAgICAgICAgICBpZiAoY29tbWFuZC5pbmNsdWRlcygnZ2l0IHB1c2gnKSkgZ2l0UHVzaGVzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayB1c2VyIG1lc3NhZ2VzXG4gICAgaWYgKG1zZy50eXBlID09PSAndXNlcicgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYW4gYWN0dWFsIGh1bWFuIG1lc3NhZ2UgKGhhcyB0ZXh0KSB2cyBqdXN0IHRvb2xfcmVzdWx0XG4gICAgICAvLyBtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlIGxvZ2ljXG4gICAgICBsZXQgaXNIdW1hbk1lc3NhZ2UgPSBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBjb250ZW50LnRyaW0oKSkge1xuICAgICAgICBpc0h1bWFuTWVzc2FnZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICd0ZXh0JyBpbiBibG9jaykge1xuICAgICAgICAgICAgaXNIdW1hbk1lc3NhZ2UgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHRyYWNrIG1lc3NhZ2UgaG91cnMgYW5kIHJlc3BvbnNlIHRpbWVzIGZvciBhY3R1YWwgaHVtYW4gbWVzc2FnZXNcbiAgICAgIGlmIChpc0h1bWFuTWVzc2FnZSkge1xuICAgICAgICAvLyBUcmFjayBtZXNzYWdlIGhvdXIgZm9yIHRpbWUtb2YtZGF5IGFuYWx5c2lzIGFuZCB0aW1lc3RhbXAgZm9yIG11bHRpLWNsYXVkaW5nXG4gICAgICAgIGlmIChtc2dUaW1lc3RhbXApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbXNnRGF0ZSA9IG5ldyBEYXRlKG1zZ1RpbWVzdGFtcClcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBtc2dEYXRlLmdldEhvdXJzKCkgLy8gTG9jYWwgaG91ciAwLTIzXG4gICAgICAgICAgICBtZXNzYWdlSG91cnMucHVzaChob3VyKVxuICAgICAgICAgICAgLy8gQ29sbGVjdCB0aW1lc3RhbXAgZm9yIG11bHRpLWNsYXVkaW5nIGRldGVjdGlvbiAobWF0Y2hpbmcgUHl0aG9uKVxuICAgICAgICAgICAgdXNlck1lc3NhZ2VUaW1lc3RhbXBzLnB1c2gobXNnVGltZXN0YW1wKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gU2tpcCBpbnZhbGlkIHRpbWVzdGFtcHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVzcG9uc2UgdGltZSAodGltZSBmcm9tIGxhc3QgYXNzaXN0YW50IG1lc3NhZ2UgdG8gdGhpcyB1c2VyIG1lc3NhZ2UpXG4gICAgICAgIC8vIE9ubHkgY291bnQgZ2FwcyA+IDIgc2Vjb25kcyAocmVhbCB1c2VyIHRoaW5rIHRpbWUsIG5vdCB0b29sIHJlc3VsdHMpXG4gICAgICAgIGlmIChsYXN0QXNzaXN0YW50VGltZXN0YW1wICYmIG1zZ1RpbWVzdGFtcCkge1xuICAgICAgICAgIGNvbnN0IGFzc2lzdGFudFRpbWUgPSBuZXcgRGF0ZShsYXN0QXNzaXN0YW50VGltZXN0YW1wKS5nZXRUaW1lKClcbiAgICAgICAgICBjb25zdCB1c2VyVGltZSA9IG5ldyBEYXRlKG1zZ1RpbWVzdGFtcCkuZ2V0VGltZSgpXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VUaW1lU2VjID0gKHVzZXJUaW1lIC0gYXNzaXN0YW50VGltZSkgLyAxMDAwXG4gICAgICAgICAgLy8gT25seSBjb3VudCByZWFzb25hYmxlIHJlc3BvbnNlIHRpbWVzICgycy0xIGhvdXIpIG1hdGNoaW5nIFB5dGhvblxuICAgICAgICAgIGlmIChyZXNwb25zZVRpbWVTZWMgPiAyICYmIHJlc3BvbnNlVGltZVNlYyA8IDM2MDApIHtcbiAgICAgICAgICAgIHVzZXJSZXNwb25zZVRpbWVzLnB1c2gocmVzcG9uc2VUaW1lU2VjKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQcm9jZXNzIHRvb2wgcmVzdWx0cyAoZm9yIGVycm9yIHRyYWNraW5nKVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0b29sX3Jlc3VsdCcgJiYgJ2NvbnRlbnQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBpc0Vycm9yID0gKGJsb2NrIGFzIHsgaXNfZXJyb3I/OiBib29sZWFuIH0pLmlzX2Vycm9yXG5cbiAgICAgICAgICAgIC8vIENvdW50IGFuZCBjYXRlZ29yaXplIHRvb2wgZXJyb3JzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlIGxvZ2ljKVxuICAgICAgICAgICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgICAgICAgdG9vbEVycm9ycysrXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdENvbnRlbnQgPSAoYmxvY2sgYXMgeyBjb250ZW50Pzogc3RyaW5nIH0pLmNvbnRlbnRcbiAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gJ090aGVyJ1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdENvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG93ZXJDb250ZW50ID0gcmVzdWx0Q29udGVudC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyQ29udGVudC5pbmNsdWRlcygnZXhpdCBjb2RlJykpIHtcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJ0NvbW1hbmQgRmFpbGVkJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ3JlamVjdGVkJykgfHxcbiAgICAgICAgICAgICAgICAgIGxvd2VyQ29udGVudC5pbmNsdWRlcyhcImRvZXNuJ3Qgd2FudFwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnVXNlciBSZWplY3RlZCdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCdzdHJpbmcgdG8gcmVwbGFjZSBub3QgZm91bmQnKSB8fFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCdubyBjaGFuZ2VzJylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJ0VkaXQgRmFpbGVkJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG93ZXJDb250ZW50LmluY2x1ZGVzKCdtb2RpZmllZCBzaW5jZSByZWFkJykpIHtcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJ0ZpbGUgQ2hhbmdlZCdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCdleGNlZWRzIG1heGltdW0nKSB8fFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCd0b28gbGFyZ2UnKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnRmlsZSBUb28gTGFyZ2UnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIGxvd2VyQ29udGVudC5pbmNsdWRlcygnZmlsZSBub3QgZm91bmQnKSB8fFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCdkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICdGaWxlIE5vdCBGb3VuZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG9vbEVycm9yQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPVxuICAgICAgICAgICAgICAgICh0b29sRXJyb3JDYXRlZ29yaWVzW2NhdGVnb3J5XSB8fCAwKSArIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgZm9yIGludGVycnVwdGlvbnMgKG1hdGNoaW5nIFB5dGhvbiByZWZlcmVuY2UpXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKCdbUmVxdWVzdCBpbnRlcnJ1cHRlZCBieSB1c2VyJykpIHtcbiAgICAgICAgICB1c2VySW50ZXJydXB0aW9ucysrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBibG9jay50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgICAgICd0ZXh0JyBpbiBibG9jayAmJlxuICAgICAgICAgICAgKGJsb2NrLnRleHQgYXMgc3RyaW5nKS5pbmNsdWRlcygnW1JlcXVlc3QgaW50ZXJydXB0ZWQgYnkgdXNlcicpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB1c2VySW50ZXJydXB0aW9ucysrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9vbENvdW50cyxcbiAgICBsYW5ndWFnZXMsXG4gICAgZ2l0Q29tbWl0cyxcbiAgICBnaXRQdXNoZXMsXG4gICAgaW5wdXRUb2tlbnMsXG4gICAgb3V0cHV0VG9rZW5zLFxuICAgIC8vIE5ldyBzdGF0c1xuICAgIHVzZXJJbnRlcnJ1cHRpb25zLFxuICAgIHVzZXJSZXNwb25zZVRpbWVzLFxuICAgIHRvb2xFcnJvcnMsXG4gICAgdG9vbEVycm9yQ2F0ZWdvcmllcyxcbiAgICB1c2VzVGFza0FnZW50LFxuICAgIHVzZXNNY3AsXG4gICAgdXNlc1dlYlNlYXJjaCxcbiAgICB1c2VzV2ViRmV0Y2gsXG4gICAgLy8gQWRkaXRpb25hbCBzdGF0c1xuICAgIGxpbmVzQWRkZWQsXG4gICAgbGluZXNSZW1vdmVkLFxuICAgIGZpbGVzTW9kaWZpZWQsXG4gICAgbWVzc2FnZUhvdXJzLFxuICAgIHVzZXJNZXNzYWdlVGltZXN0YW1wcyxcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNWYWxpZERhdGVzKGxvZzogTG9nT3B0aW9uKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgIU51bWJlci5pc05hTihsb2cuY3JlYXRlZC5nZXRUaW1lKCkpICYmXG4gICAgIU51bWJlci5pc05hTihsb2cubW9kaWZpZWQuZ2V0VGltZSgpKVxuICApXG59XG5cbmZ1bmN0aW9uIGxvZ1RvU2Vzc2lvbk1ldGEobG9nOiBMb2dPcHRpb24pOiBTZXNzaW9uTWV0YSB7XG4gIGNvbnN0IHN0YXRzID0gZXh0cmFjdFRvb2xTdGF0cyhsb2cpXG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZEZyb21Mb2cobG9nKSB8fCAndW5rbm93bidcbiAgY29uc3Qgc3RhcnRUaW1lID0gbG9nLmNyZWF0ZWQudG9JU09TdHJpbmcoKVxuICBjb25zdCBkdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxuICAgIChsb2cubW9kaWZpZWQuZ2V0VGltZSgpIC0gbG9nLmNyZWF0ZWQuZ2V0VGltZSgpKSAvIDEwMDAgLyA2MCxcbiAgKVxuXG4gIGxldCB1c2VyTWVzc2FnZUNvdW50ID0gMFxuICBsZXQgYXNzaXN0YW50TWVzc2FnZUNvdW50ID0gMFxuICBmb3IgKGNvbnN0IG1zZyBvZiBsb2cubWVzc2FnZXMpIHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnKSBhc3Npc3RhbnRNZXNzYWdlQ291bnQrK1xuICAgIC8vIE9ubHkgY291bnQgdXNlciBtZXNzYWdlcyB0aGF0IGhhdmUgYWN0dWFsIHRleHQgY29udGVudCAoaHVtYW4gbWVzc2FnZXMpXG4gICAgLy8gbm90IGp1c3QgdG9vbF9yZXN1bHQgbWVzc2FnZXMgKG1hdGNoaW5nIFB5dGhvbiByZWZlcmVuY2UpXG4gICAgaWYgKG1zZy50eXBlID09PSAndXNlcicgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICBsZXQgaXNIdW1hbk1lc3NhZ2UgPSBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBjb250ZW50LnRyaW0oKSkge1xuICAgICAgICBpc0h1bWFuTWVzc2FnZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICd0ZXh0JyBpbiBibG9jaykge1xuICAgICAgICAgICAgaXNIdW1hbk1lc3NhZ2UgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzSHVtYW5NZXNzYWdlKSB7XG4gICAgICAgIHVzZXJNZXNzYWdlQ291bnQrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgIHByb2plY3RfcGF0aDogbG9nLnByb2plY3RQYXRoIHx8ICcnLFxuICAgIHN0YXJ0X3RpbWU6IHN0YXJ0VGltZSxcbiAgICBkdXJhdGlvbl9taW51dGVzOiBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgdXNlcl9tZXNzYWdlX2NvdW50OiB1c2VyTWVzc2FnZUNvdW50LFxuICAgIGFzc2lzdGFudF9tZXNzYWdlX2NvdW50OiBhc3Npc3RhbnRNZXNzYWdlQ291bnQsXG4gICAgdG9vbF9jb3VudHM6IHN0YXRzLnRvb2xDb3VudHMsXG4gICAgbGFuZ3VhZ2VzOiBzdGF0cy5sYW5ndWFnZXMsXG4gICAgZ2l0X2NvbW1pdHM6IHN0YXRzLmdpdENvbW1pdHMsXG4gICAgZ2l0X3B1c2hlczogc3RhdHMuZ2l0UHVzaGVzLFxuICAgIGlucHV0X3Rva2Vuczogc3RhdHMuaW5wdXRUb2tlbnMsXG4gICAgb3V0cHV0X3Rva2Vuczogc3RhdHMub3V0cHV0VG9rZW5zLFxuICAgIGZpcnN0X3Byb21wdDogbG9nLmZpcnN0UHJvbXB0IHx8ICcnLFxuICAgIHN1bW1hcnk6IGxvZy5zdW1tYXJ5LFxuICAgIC8vIE5ldyBzdGF0c1xuICAgIHVzZXJfaW50ZXJydXB0aW9uczogc3RhdHMudXNlckludGVycnVwdGlvbnMsXG4gICAgdXNlcl9yZXNwb25zZV90aW1lczogc3RhdHMudXNlclJlc3BvbnNlVGltZXMsXG4gICAgdG9vbF9lcnJvcnM6IHN0YXRzLnRvb2xFcnJvcnMsXG4gICAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiBzdGF0cy50b29sRXJyb3JDYXRlZ29yaWVzLFxuICAgIHVzZXNfdGFza19hZ2VudDogc3RhdHMudXNlc1Rhc2tBZ2VudCxcbiAgICB1c2VzX21jcDogc3RhdHMudXNlc01jcCxcbiAgICB1c2VzX3dlYl9zZWFyY2g6IHN0YXRzLnVzZXNXZWJTZWFyY2gsXG4gICAgdXNlc193ZWJfZmV0Y2g6IHN0YXRzLnVzZXNXZWJGZXRjaCxcbiAgICAvLyBBZGRpdGlvbmFsIHN0YXRzXG4gICAgbGluZXNfYWRkZWQ6IHN0YXRzLmxpbmVzQWRkZWQsXG4gICAgbGluZXNfcmVtb3ZlZDogc3RhdHMubGluZXNSZW1vdmVkLFxuICAgIGZpbGVzX21vZGlmaWVkOiBzdGF0cy5maWxlc01vZGlmaWVkLnNpemUsXG4gICAgbWVzc2FnZV9ob3Vyczogc3RhdHMubWVzc2FnZUhvdXJzLFxuICAgIHVzZXJfbWVzc2FnZV90aW1lc3RhbXBzOiBzdGF0cy51c2VyTWVzc2FnZVRpbWVzdGFtcHMsXG4gIH1cbn1cblxuLyoqXG4gKiBEZWR1cGxpY2F0ZSBjb252ZXJzYXRpb24gYnJhbmNoZXMgd2l0aGluIHRoZSBzYW1lIHNlc3Npb24uXG4gKlxuICogV2hlbiBhIHNlc3Npb24gZmlsZSBoYXMgbXVsdGlwbGUgbGVhZiBtZXNzYWdlcyAoZnJvbSByZXRyaWVzIG9yIGJyYW5jaGluZyksXG4gKiBsb2FkQWxsTG9nc0Zyb21TZXNzaW9uRmlsZSBwcm9kdWNlcyBvbmUgTG9nT3B0aW9uIHBlciBsZWFmLiBFYWNoIGJyYW5jaFxuICogc2hhcmVzIHRoZSBzYW1lIHJvb3QgbWVzc2FnZSwgc28gaXRzIGR1cmF0aW9uIG92ZXJsYXBzIHdpdGggc2libGluZ1xuICogYnJhbmNoZXMuIFRoaXMga2VlcHMgb25seSB0aGUgYnJhbmNoIHdpdGggdGhlIG1vc3QgdXNlciBtZXNzYWdlc1xuICogKHRpZS1icmVhayBieSBsb25nZXN0IGR1cmF0aW9uKSBwZXIgc2Vzc2lvbl9pZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZHVwbGljYXRlU2Vzc2lvbkJyYW5jaGVzKFxuICBlbnRyaWVzOiBBcnJheTx7IGxvZzogTG9nT3B0aW9uOyBtZXRhOiBTZXNzaW9uTWV0YSB9Pixcbik6IEFycmF5PHsgbG9nOiBMb2dPcHRpb247IG1ldGE6IFNlc3Npb25NZXRhIH0+IHtcbiAgY29uc3QgYmVzdEJ5U2Vzc2lvbiA9IG5ldyBNYXA8c3RyaW5nLCB7IGxvZzogTG9nT3B0aW9uOyBtZXRhOiBTZXNzaW9uTWV0YSB9PigpXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIGNvbnN0IGlkID0gZW50cnkubWV0YS5zZXNzaW9uX2lkXG4gICAgY29uc3QgZXhpc3RpbmcgPSBiZXN0QnlTZXNzaW9uLmdldChpZClcbiAgICBpZiAoXG4gICAgICAhZXhpc3RpbmcgfHxcbiAgICAgIGVudHJ5Lm1ldGEudXNlcl9tZXNzYWdlX2NvdW50ID4gZXhpc3RpbmcubWV0YS51c2VyX21lc3NhZ2VfY291bnQgfHxcbiAgICAgIChlbnRyeS5tZXRhLnVzZXJfbWVzc2FnZV9jb3VudCA9PT0gZXhpc3RpbmcubWV0YS51c2VyX21lc3NhZ2VfY291bnQgJiZcbiAgICAgICAgZW50cnkubWV0YS5kdXJhdGlvbl9taW51dGVzID4gZXhpc3RpbmcubWV0YS5kdXJhdGlvbl9taW51dGVzKVxuICAgICkge1xuICAgICAgYmVzdEJ5U2Vzc2lvbi5zZXQoaWQsIGVudHJ5KVxuICAgIH1cbiAgfVxuICByZXR1cm4gWy4uLmJlc3RCeVNlc3Npb24udmFsdWVzKCldXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRyYW5zY3JpcHRGb3JGYWNldHMobG9nOiBMb2dPcHRpb24pOiBzdHJpbmcge1xuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBjb25zdCBtZXRhID0gbG9nVG9TZXNzaW9uTWV0YShsb2cpXG5cbiAgbGluZXMucHVzaChgU2Vzc2lvbjogJHttZXRhLnNlc3Npb25faWQuc2xpY2UoMCwgOCl9YClcbiAgbGluZXMucHVzaChgRGF0ZTogJHttZXRhLnN0YXJ0X3RpbWV9YClcbiAgbGluZXMucHVzaChgUHJvamVjdDogJHttZXRhLnByb2plY3RfcGF0aH1gKVxuICBsaW5lcy5wdXNoKGBEdXJhdGlvbjogJHttZXRhLmR1cmF0aW9uX21pbnV0ZXN9IG1pbmApXG4gIGxpbmVzLnB1c2goJycpXG5cbiAgZm9yIChjb25zdCBtc2cgb2YgbG9nLm1lc3NhZ2VzKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSAndXNlcicgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxpbmVzLnB1c2goYFtVc2VyXTogJHtjb250ZW50LnNsaWNlKDAsIDUwMCl9YClcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICd0ZXh0JyBpbiBibG9jaykge1xuICAgICAgICAgICAgbGluZXMucHVzaChgW1VzZXJdOiAkeyhibG9jay50ZXh0IGFzIHN0cmluZykuc2xpY2UoMCwgNTAwKX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmIG1zZy5tZXNzYWdlKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0ZXh0JyAmJiAndGV4dCcgaW4gYmxvY2spIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYFtBc3Npc3RhbnRdOiAkeyhibG9jay50ZXh0IGFzIHN0cmluZykuc2xpY2UoMCwgMzAwKX1gKVxuICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2sudHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJiAnbmFtZScgaW4gYmxvY2spIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYFtUb29sOiAke2Jsb2NrLm5hbWV9XWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpXG59XG5cbmNvbnN0IFNVTU1BUklaRV9DSFVOS19QUk9NUFQgPSBgU3VtbWFyaXplIHRoaXMgcG9ydGlvbiBvZiBhIENsYXVkZSBDb2RlIHNlc3Npb24gdHJhbnNjcmlwdC4gRm9jdXMgb246XG4xLiBXaGF0IHRoZSB1c2VyIGFza2VkIGZvclxuMi4gV2hhdCBDbGF1ZGUgZGlkICh0b29scyB1c2VkLCBmaWxlcyBtb2RpZmllZClcbjMuIEFueSBmcmljdGlvbiBvciBpc3N1ZXNcbjQuIFRoZSBvdXRjb21lXG5cbktlZXAgaXQgY29uY2lzZSAtIDMtNSBzZW50ZW5jZXMuIFByZXNlcnZlIHNwZWNpZmljIGRldGFpbHMgbGlrZSBmaWxlIG5hbWVzLCBlcnJvciBtZXNzYWdlcywgYW5kIHVzZXIgZmVlZGJhY2suXG5cblRSQU5TQ1JJUFQgQ0hVTks6XG5gXG5cbmFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZVRyYW5zY3JpcHRDaHVuayhjaHVuazogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeVdpdGhNb2RlbCh7XG4gICAgICBzeXN0ZW1Qcm9tcHQ6IGFzU3lzdGVtUHJvbXB0KFtdKSxcbiAgICAgIHVzZXJQcm9tcHQ6IFNVTU1BUklaRV9DSFVOS19QUk9NUFQgKyBjaHVuayxcbiAgICAgIHNpZ25hbDogbmV3IEFib3J0Q29udHJvbGxlcigpLnNpZ25hbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbW9kZWw6IGdldEFuYWx5c2lzTW9kZWwoKSxcbiAgICAgICAgcXVlcnlTb3VyY2U6ICdpbnNpZ2h0cycsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICBoYXNBcHBlbmRTeXN0ZW1Qcm9tcHQ6IGZhbHNlLFxuICAgICAgICBtY3BUb29sczogW10sXG4gICAgICAgIG1heE91dHB1dFRva2Vuc092ZXJyaWRlOiA1MDAsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB0ZXh0ID0gZXh0cmFjdFRleHRDb250ZW50KHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQpXG4gICAgcmV0dXJuIHRleHQgfHwgY2h1bmsuc2xpY2UoMCwgMjAwMClcbiAgfSBjYXRjaCB7XG4gICAgLy8gT24gZXJyb3IsIGp1c3QgcmV0dXJuIHRydW5jYXRlZCBjaHVua1xuICAgIHJldHVybiBjaHVuay5zbGljZSgwLCAyMDAwKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZvcm1hdFRyYW5zY3JpcHRXaXRoU3VtbWFyaXphdGlvbihcbiAgbG9nOiBMb2dPcHRpb24sXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBmdWxsVHJhbnNjcmlwdCA9IGZvcm1hdFRyYW5zY3JpcHRGb3JGYWNldHMobG9nKVxuXG4gIC8vIElmIHVuZGVyIDMwayBjaGFycywgdXNlIGFzLWlzXG4gIGlmIChmdWxsVHJhbnNjcmlwdC5sZW5ndGggPD0gMzAwMDApIHtcbiAgICByZXR1cm4gZnVsbFRyYW5zY3JpcHRcbiAgfVxuXG4gIC8vIEZvciBsb25nIHRyYW5zY3JpcHRzLCBzcGxpdCBpbnRvIGNodW5rcyBhbmQgc3VtbWFyaXplIGluIHBhcmFsbGVsXG4gIGNvbnN0IENIVU5LX1NJWkUgPSAyNTAwMFxuICBjb25zdCBjaHVua3M6IHN0cmluZ1tdID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bGxUcmFuc2NyaXB0Lmxlbmd0aDsgaSArPSBDSFVOS19TSVpFKSB7XG4gICAgY2h1bmtzLnB1c2goZnVsbFRyYW5zY3JpcHQuc2xpY2UoaSwgaSArIENIVU5LX1NJWkUpKVxuICB9XG5cbiAgLy8gU3VtbWFyaXplIGFsbCBjaHVua3MgaW4gcGFyYWxsZWxcbiAgY29uc3Qgc3VtbWFyaWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoY2h1bmtzLm1hcChzdW1tYXJpemVUcmFuc2NyaXB0Q2h1bmspKVxuXG4gIC8vIENvbWJpbmUgc3VtbWFyaWVzIHdpdGggc2Vzc2lvbiBoZWFkZXJcbiAgY29uc3QgbWV0YSA9IGxvZ1RvU2Vzc2lvbk1ldGEobG9nKVxuICBjb25zdCBoZWFkZXIgPSBbXG4gICAgYFNlc3Npb246ICR7bWV0YS5zZXNzaW9uX2lkLnNsaWNlKDAsIDgpfWAsXG4gICAgYERhdGU6ICR7bWV0YS5zdGFydF90aW1lfWAsXG4gICAgYFByb2plY3Q6ICR7bWV0YS5wcm9qZWN0X3BhdGh9YCxcbiAgICBgRHVyYXRpb246ICR7bWV0YS5kdXJhdGlvbl9taW51dGVzfSBtaW5gLFxuICAgIGBbTG9uZyBzZXNzaW9uIC0gJHtjaHVua3MubGVuZ3RofSBwYXJ0cyBzdW1tYXJpemVkXWAsXG4gICAgJycsXG4gIF0uam9pbignXFxuJylcblxuICByZXR1cm4gaGVhZGVyICsgc3VtbWFyaWVzLmpvaW4oJ1xcblxcbi0tLVxcblxcbicpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDYWNoZWRGYWNldHMoXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxTZXNzaW9uRmFjZXRzIHwgbnVsbD4ge1xuICBjb25zdCBmYWNldFBhdGggPSBqb2luKGdldEZhY2V0c0RpcigpLCBgJHtzZXNzaW9uSWR9Lmpzb25gKVxuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmYWNldFBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICBjb25zdCBwYXJzZWQ6IHVua25vd24gPSBqc29uUGFyc2UoY29udGVudClcbiAgICBpZiAoIWlzVmFsaWRTZXNzaW9uRmFjZXRzKHBhcnNlZCkpIHtcbiAgICAgIC8vIERlbGV0ZSBjb3JydXB0ZWQgY2FjaGUgZmlsZSBzbyBpdCBnZXRzIHJlLWV4dHJhY3RlZCBuZXh0IHJ1blxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdW5saW5rKGZhY2V0UGF0aClcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgZGVsZXRpb24gZXJyb3JzXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZUZhY2V0cyhmYWNldHM6IFNlc3Npb25GYWNldHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihnZXRGYWNldHNEaXIoKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgfSBjYXRjaCB7XG4gICAgLy8gRGlyZWN0b3J5IG1heSBhbHJlYWR5IGV4aXN0XG4gIH1cbiAgY29uc3QgZmFjZXRQYXRoID0gam9pbihnZXRGYWNldHNEaXIoKSwgYCR7ZmFjZXRzLnNlc3Npb25faWR9Lmpzb25gKVxuICBhd2FpdCB3cml0ZUZpbGUoZmFjZXRQYXRoLCBqc29uU3RyaW5naWZ5KGZhY2V0cywgbnVsbCwgMiksIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICBtb2RlOiAwbzYwMCxcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENhY2hlZFNlc3Npb25NZXRhKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8U2Vzc2lvbk1ldGEgfCBudWxsPiB7XG4gIGNvbnN0IG1ldGFQYXRoID0gam9pbihnZXRTZXNzaW9uTWV0YURpcigpLCBgJHtzZXNzaW9uSWR9Lmpzb25gKVxuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShtZXRhUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICAgIHJldHVybiBqc29uUGFyc2UoY29udGVudClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzYXZlU2Vzc2lvbk1ldGEobWV0YTogU2Vzc2lvbk1ldGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihnZXRTZXNzaW9uTWV0YURpcigpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB9IGNhdGNoIHtcbiAgICAvLyBEaXJlY3RvcnkgbWF5IGFscmVhZHkgZXhpc3RcbiAgfVxuICBjb25zdCBtZXRhUGF0aCA9IGpvaW4oZ2V0U2Vzc2lvbk1ldGFEaXIoKSwgYCR7bWV0YS5zZXNzaW9uX2lkfS5qc29uYClcbiAgYXdhaXQgd3JpdGVGaWxlKG1ldGFQYXRoLCBqc29uU3RyaW5naWZ5KG1ldGEsIG51bGwsIDIpLCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgbW9kZTogMG82MDAsXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RGYWNldHNGcm9tQVBJKFxuICBsb2c6IExvZ09wdGlvbixcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPFNlc3Npb25GYWNldHMgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIHN1bW1hcml6YXRpb24gZm9yIGxvbmcgdHJhbnNjcmlwdHNcbiAgICBjb25zdCB0cmFuc2NyaXB0ID0gYXdhaXQgZm9ybWF0VHJhbnNjcmlwdFdpdGhTdW1tYXJpemF0aW9uKGxvZylcblxuICAgIC8vIEJ1aWxkIHByb21wdCBhc2tpbmcgZm9yIEpTT04gZGlyZWN0bHkgKG5vIHRvb2wgdXNlKVxuICAgIGNvbnN0IGpzb25Qcm9tcHQgPSBgJHtGQUNFVF9FWFRSQUNUSU9OX1BST01QVH0ke3RyYW5zY3JpcHR9XG5cblJFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1QgbWF0Y2hpbmcgdGhpcyBzY2hlbWE6XG57XG4gIFwidW5kZXJseWluZ19nb2FsXCI6IFwiV2hhdCB0aGUgdXNlciBmdW5kYW1lbnRhbGx5IHdhbnRlZCB0byBhY2hpZXZlXCIsXG4gIFwiZ29hbF9jYXRlZ29yaWVzXCI6IHtcImNhdGVnb3J5X25hbWVcIjogY291bnQsIC4uLn0sXG4gIFwib3V0Y29tZVwiOiBcImZ1bGx5X2FjaGlldmVkfG1vc3RseV9hY2hpZXZlZHxwYXJ0aWFsbHlfYWNoaWV2ZWR8bm90X2FjaGlldmVkfHVuY2xlYXJfZnJvbV90cmFuc2NyaXB0XCIsXG4gIFwidXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzXCI6IHtcImxldmVsXCI6IGNvdW50LCAuLi59LFxuICBcImNsYXVkZV9oZWxwZnVsbmVzc1wiOiBcInVuaGVscGZ1bHxzbGlnaHRseV9oZWxwZnVsfG1vZGVyYXRlbHlfaGVscGZ1bHx2ZXJ5X2hlbHBmdWx8ZXNzZW50aWFsXCIsXG4gIFwic2Vzc2lvbl90eXBlXCI6IFwic2luZ2xlX3Rhc2t8bXVsdGlfdGFza3xpdGVyYXRpdmVfcmVmaW5lbWVudHxleHBsb3JhdGlvbnxxdWlja19xdWVzdGlvblwiLFxuICBcImZyaWN0aW9uX2NvdW50c1wiOiB7XCJmcmljdGlvbl90eXBlXCI6IGNvdW50LCAuLi59LFxuICBcImZyaWN0aW9uX2RldGFpbFwiOiBcIk9uZSBzZW50ZW5jZSBkZXNjcmliaW5nIGZyaWN0aW9uIG9yIGVtcHR5XCIsXG4gIFwicHJpbWFyeV9zdWNjZXNzXCI6IFwibm9uZXxmYXN0X2FjY3VyYXRlX3NlYXJjaHxjb3JyZWN0X2NvZGVfZWRpdHN8Z29vZF9leHBsYW5hdGlvbnN8cHJvYWN0aXZlX2hlbHB8bXVsdGlfZmlsZV9jaGFuZ2VzfGdvb2RfZGVidWdnaW5nXCIsXG4gIFwiYnJpZWZfc3VtbWFyeVwiOiBcIk9uZSBzZW50ZW5jZTogd2hhdCB1c2VyIHdhbnRlZCBhbmQgd2hldGhlciB0aGV5IGdvdCBpdFwiXG59YFxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlXaXRoTW9kZWwoe1xuICAgICAgc3lzdGVtUHJvbXB0OiBhc1N5c3RlbVByb21wdChbXSksXG4gICAgICB1c2VyUHJvbXB0OiBqc29uUHJvbXB0LFxuICAgICAgc2lnbmFsOiBuZXcgQWJvcnRDb250cm9sbGVyKCkuc2lnbmFsLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtb2RlbDogZ2V0QW5hbHlzaXNNb2RlbCgpLFxuICAgICAgICBxdWVyeVNvdXJjZTogJ2luc2lnaHRzJyxcbiAgICAgICAgYWdlbnRzOiBbXSxcbiAgICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IHRydWUsXG4gICAgICAgIGhhc0FwcGVuZFN5c3RlbVByb21wdDogZmFsc2UsXG4gICAgICAgIG1jcFRvb2xzOiBbXSxcbiAgICAgICAgbWF4T3V0cHV0VG9rZW5zT3ZlcnJpZGU6IDQwOTYsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB0ZXh0ID0gZXh0cmFjdFRleHRDb250ZW50KHJlc3VsdC5tZXNzYWdlLmNvbnRlbnQpXG5cbiAgICAvLyBQYXJzZSBKU09OIGZyb20gcmVzcG9uc2VcbiAgICBjb25zdCBqc29uTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9cXHtbXFxzXFxTXSpcXH0vKVxuICAgIGlmICghanNvbk1hdGNoKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgcGFyc2VkOiB1bmtub3duID0ganNvblBhcnNlKGpzb25NYXRjaFswXSlcbiAgICBpZiAoIWlzVmFsaWRTZXNzaW9uRmFjZXRzKHBhcnNlZCkpIHJldHVybiBudWxsXG4gICAgY29uc3QgZmFjZXRzOiBTZXNzaW9uRmFjZXRzID0geyAuLi5wYXJzZWQsIHNlc3Npb25faWQ6IHNlc3Npb25JZCB9XG4gICAgcmV0dXJuIGZhY2V0c1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dFcnJvcihuZXcgRXJyb3IoYEZhY2V0IGV4dHJhY3Rpb24gZmFpbGVkOiAke3RvRXJyb3IoZXJyKS5tZXNzYWdlfWApKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlY3RzIG11bHRpLWNsYXVkaW5nICh1c2luZyBtdWx0aXBsZSBDbGF1ZGUgc2Vzc2lvbnMgY29uY3VycmVudGx5KS5cbiAqIFVzZXMgYSBzbGlkaW5nIHdpbmRvdyB0byBmaW5kIHRoZSBwYXR0ZXJuOiBzZXNzaW9uMSAtPiBzZXNzaW9uMiAtPiBzZXNzaW9uMVxuICogd2l0aGluIGEgMzAtbWludXRlIHdpbmRvdy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdE11bHRpQ2xhdWRpbmcoXG4gIHNlc3Npb25zOiBBcnJheTx7XG4gICAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gICAgdXNlcl9tZXNzYWdlX3RpbWVzdGFtcHM6IHN0cmluZ1tdXG4gIH0+LFxuKToge1xuICBvdmVybGFwX2V2ZW50czogbnVtYmVyXG4gIHNlc3Npb25zX2ludm9sdmVkOiBudW1iZXJcbiAgdXNlcl9tZXNzYWdlc19kdXJpbmc6IG51bWJlclxufSB7XG4gIGNvbnN0IE9WRVJMQVBfV0lORE9XX01TID0gMzAgKiA2MDAwMFxuICBjb25zdCBhbGxTZXNzaW9uTWVzc2FnZXM6IEFycmF5PHsgdHM6IG51bWJlcjsgc2Vzc2lvbklkOiBzdHJpbmcgfT4gPSBbXVxuXG4gIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBzZXNzaW9ucykge1xuICAgIGZvciAoY29uc3QgdGltZXN0YW1wIG9mIHNlc3Npb24udXNlcl9tZXNzYWdlX3RpbWVzdGFtcHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRzID0gbmV3IERhdGUodGltZXN0YW1wKS5nZXRUaW1lKClcbiAgICAgICAgYWxsU2Vzc2lvbk1lc3NhZ2VzLnB1c2goeyB0cywgc2Vzc2lvbklkOiBzZXNzaW9uLnNlc3Npb25faWQgfSlcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBTa2lwIGludmFsaWQgdGltZXN0YW1wc1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFsbFNlc3Npb25NZXNzYWdlcy5zb3J0KChhLCBiKSA9PiBhLnRzIC0gYi50cylcblxuICBjb25zdCBtdWx0aUNsYXVkZVNlc3Npb25QYWlycyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IG1lc3NhZ2VzRHVyaW5nTXVsdGljbGF1ZGUgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIC8vIFNsaWRpbmcgd2luZG93OiBzZXNzaW9uTGFzdEluZGV4IHRyYWNrcyB0aGUgbW9zdCByZWNlbnQgaW5kZXggZm9yIGVhY2ggc2Vzc2lvblxuICBsZXQgd2luZG93U3RhcnQgPSAwXG4gIGNvbnN0IHNlc3Npb25MYXN0SW5kZXggPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTZXNzaW9uTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtc2cgPSBhbGxTZXNzaW9uTWVzc2FnZXNbaV0hXG5cbiAgICAvLyBTaHJpbmsgd2luZG93IGZyb20gdGhlIGxlZnRcbiAgICB3aGlsZSAoXG4gICAgICB3aW5kb3dTdGFydCA8IGkgJiZcbiAgICAgIG1zZy50cyAtIGFsbFNlc3Npb25NZXNzYWdlc1t3aW5kb3dTdGFydF0hLnRzID4gT1ZFUkxBUF9XSU5ET1dfTVNcbiAgICApIHtcbiAgICAgIGNvbnN0IGV4cGlyaW5nID0gYWxsU2Vzc2lvbk1lc3NhZ2VzW3dpbmRvd1N0YXJ0XSFcbiAgICAgIGlmIChzZXNzaW9uTGFzdEluZGV4LmdldChleHBpcmluZy5zZXNzaW9uSWQpID09PSB3aW5kb3dTdGFydCkge1xuICAgICAgICBzZXNzaW9uTGFzdEluZGV4LmRlbGV0ZShleHBpcmluZy5zZXNzaW9uSWQpXG4gICAgICB9XG4gICAgICB3aW5kb3dTdGFydCsrXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBzZXNzaW9uIGFwcGVhcmVkIGVhcmxpZXIgaW4gdGhlIHdpbmRvdyAocGF0dGVybjogczEgLT4gczIgLT4gczEpXG4gICAgY29uc3QgcHJldkluZGV4ID0gc2Vzc2lvbkxhc3RJbmRleC5nZXQobXNnLnNlc3Npb25JZClcbiAgICBpZiAocHJldkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAobGV0IGogPSBwcmV2SW5kZXggKyAxOyBqIDwgaTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGJldHdlZW4gPSBhbGxTZXNzaW9uTWVzc2FnZXNbal0hXG4gICAgICAgIGlmIChiZXR3ZWVuLnNlc3Npb25JZCAhPT0gbXNnLnNlc3Npb25JZCkge1xuICAgICAgICAgIGNvbnN0IHBhaXIgPSBbbXNnLnNlc3Npb25JZCwgYmV0d2Vlbi5zZXNzaW9uSWRdLnNvcnQoKS5qb2luKCc6JylcbiAgICAgICAgICBtdWx0aUNsYXVkZVNlc3Npb25QYWlycy5hZGQocGFpcilcbiAgICAgICAgICBtZXNzYWdlc0R1cmluZ011bHRpY2xhdWRlLmFkZChcbiAgICAgICAgICAgIGAke2FsbFNlc3Npb25NZXNzYWdlc1twcmV2SW5kZXhdIS50c306JHttc2cuc2Vzc2lvbklkfWAsXG4gICAgICAgICAgKVxuICAgICAgICAgIG1lc3NhZ2VzRHVyaW5nTXVsdGljbGF1ZGUuYWRkKGAke2JldHdlZW4udHN9OiR7YmV0d2Vlbi5zZXNzaW9uSWR9YClcbiAgICAgICAgICBtZXNzYWdlc0R1cmluZ011bHRpY2xhdWRlLmFkZChgJHttc2cudHN9OiR7bXNnLnNlc3Npb25JZH1gKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXNzaW9uTGFzdEluZGV4LnNldChtc2cuc2Vzc2lvbklkLCBpKVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbnNXaXRoT3ZlcmxhcHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHBhaXIgb2YgbXVsdGlDbGF1ZGVTZXNzaW9uUGFpcnMpIHtcbiAgICBjb25zdCBbczEsIHMyXSA9IHBhaXIuc3BsaXQoJzonKVxuICAgIGlmIChzMSkgc2Vzc2lvbnNXaXRoT3ZlcmxhcHMuYWRkKHMxKVxuICAgIGlmIChzMikgc2Vzc2lvbnNXaXRoT3ZlcmxhcHMuYWRkKHMyKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvdmVybGFwX2V2ZW50czogbXVsdGlDbGF1ZGVTZXNzaW9uUGFpcnMuc2l6ZSxcbiAgICBzZXNzaW9uc19pbnZvbHZlZDogc2Vzc2lvbnNXaXRoT3ZlcmxhcHMuc2l6ZSxcbiAgICB1c2VyX21lc3NhZ2VzX2R1cmluZzogbWVzc2FnZXNEdXJpbmdNdWx0aWNsYXVkZS5zaXplLFxuICB9XG59XG5cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZURhdGEoXG4gIHNlc3Npb25zOiBTZXNzaW9uTWV0YVtdLFxuICBmYWNldHM6IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+LFxuKTogQWdncmVnYXRlZERhdGEge1xuICBjb25zdCByZXN1bHQ6IEFnZ3JlZ2F0ZWREYXRhID0ge1xuICAgIHRvdGFsX3Nlc3Npb25zOiBzZXNzaW9ucy5sZW5ndGgsXG4gICAgc2Vzc2lvbnNfd2l0aF9mYWNldHM6IGZhY2V0cy5zaXplLFxuICAgIGRhdGVfcmFuZ2U6IHsgc3RhcnQ6ICcnLCBlbmQ6ICcnIH0sXG4gICAgdG90YWxfbWVzc2FnZXM6IDAsXG4gICAgdG90YWxfZHVyYXRpb25faG91cnM6IDAsXG4gICAgdG90YWxfaW5wdXRfdG9rZW5zOiAwLFxuICAgIHRvdGFsX291dHB1dF90b2tlbnM6IDAsXG4gICAgdG9vbF9jb3VudHM6IHt9LFxuICAgIGxhbmd1YWdlczoge30sXG4gICAgZ2l0X2NvbW1pdHM6IDAsXG4gICAgZ2l0X3B1c2hlczogMCxcbiAgICBwcm9qZWN0czoge30sXG4gICAgZ29hbF9jYXRlZ29yaWVzOiB7fSxcbiAgICBvdXRjb21lczoge30sXG4gICAgc2F0aXNmYWN0aW9uOiB7fSxcbiAgICBoZWxwZnVsbmVzczoge30sXG4gICAgc2Vzc2lvbl90eXBlczoge30sXG4gICAgZnJpY3Rpb246IHt9LFxuICAgIHN1Y2Nlc3M6IHt9LFxuICAgIHNlc3Npb25fc3VtbWFyaWVzOiBbXSxcbiAgICAvLyBOZXcgc3RhdHNcbiAgICB0b3RhbF9pbnRlcnJ1cHRpb25zOiAwLFxuICAgIHRvdGFsX3Rvb2xfZXJyb3JzOiAwLFxuICAgIHRvb2xfZXJyb3JfY2F0ZWdvcmllczoge30sXG4gICAgdXNlcl9yZXNwb25zZV90aW1lczogW10sXG4gICAgbWVkaWFuX3Jlc3BvbnNlX3RpbWU6IDAsXG4gICAgYXZnX3Jlc3BvbnNlX3RpbWU6IDAsXG4gICAgc2Vzc2lvbnNfdXNpbmdfdGFza19hZ2VudDogMCxcbiAgICBzZXNzaW9uc191c2luZ19tY3A6IDAsXG4gICAgc2Vzc2lvbnNfdXNpbmdfd2ViX3NlYXJjaDogMCxcbiAgICBzZXNzaW9uc191c2luZ193ZWJfZmV0Y2g6IDAsXG4gICAgLy8gQWRkaXRpb25hbCBzdGF0c1xuICAgIHRvdGFsX2xpbmVzX2FkZGVkOiAwLFxuICAgIHRvdGFsX2xpbmVzX3JlbW92ZWQ6IDAsXG4gICAgdG90YWxfZmlsZXNfbW9kaWZpZWQ6IDAsXG4gICAgZGF5c19hY3RpdmU6IDAsXG4gICAgbWVzc2FnZXNfcGVyX2RheTogMCxcbiAgICBtZXNzYWdlX2hvdXJzOiBbXSxcbiAgICAvLyBNdWx0aS1jbGF1ZGluZyBzdGF0cyAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSlcbiAgICBtdWx0aV9jbGF1ZGluZzoge1xuICAgICAgb3ZlcmxhcF9ldmVudHM6IDAsXG4gICAgICBzZXNzaW9uc19pbnZvbHZlZDogMCxcbiAgICAgIHVzZXJfbWVzc2FnZXNfZHVyaW5nOiAwLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBkYXRlczogc3RyaW5nW10gPSBbXVxuICBjb25zdCBhbGxSZXNwb25zZVRpbWVzOiBudW1iZXJbXSA9IFtdXG4gIGNvbnN0IGFsbE1lc3NhZ2VIb3VyczogbnVtYmVyW10gPSBbXVxuXG4gIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBzZXNzaW9ucykge1xuICAgIGRhdGVzLnB1c2goc2Vzc2lvbi5zdGFydF90aW1lKVxuICAgIHJlc3VsdC50b3RhbF9tZXNzYWdlcyArPSBzZXNzaW9uLnVzZXJfbWVzc2FnZV9jb3VudFxuICAgIHJlc3VsdC50b3RhbF9kdXJhdGlvbl9ob3VycyArPSBzZXNzaW9uLmR1cmF0aW9uX21pbnV0ZXMgLyA2MFxuICAgIHJlc3VsdC50b3RhbF9pbnB1dF90b2tlbnMgKz0gc2Vzc2lvbi5pbnB1dF90b2tlbnNcbiAgICByZXN1bHQudG90YWxfb3V0cHV0X3Rva2VucyArPSBzZXNzaW9uLm91dHB1dF90b2tlbnNcbiAgICByZXN1bHQuZ2l0X2NvbW1pdHMgKz0gc2Vzc2lvbi5naXRfY29tbWl0c1xuICAgIHJlc3VsdC5naXRfcHVzaGVzICs9IHNlc3Npb24uZ2l0X3B1c2hlc1xuXG4gICAgLy8gTmV3IHN0YXRzIGFnZ3JlZ2F0aW9uXG4gICAgcmVzdWx0LnRvdGFsX2ludGVycnVwdGlvbnMgKz0gc2Vzc2lvbi51c2VyX2ludGVycnVwdGlvbnNcbiAgICByZXN1bHQudG90YWxfdG9vbF9lcnJvcnMgKz0gc2Vzc2lvbi50b29sX2Vycm9yc1xuICAgIGZvciAoY29uc3QgW2NhdCwgY291bnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlc3Npb24udG9vbF9lcnJvcl9jYXRlZ29yaWVzKSkge1xuICAgICAgcmVzdWx0LnRvb2xfZXJyb3JfY2F0ZWdvcmllc1tjYXRdID1cbiAgICAgICAgKHJlc3VsdC50b29sX2Vycm9yX2NhdGVnb3JpZXNbY2F0XSB8fCAwKSArIGNvdW50XG4gICAgfVxuICAgIGFsbFJlc3BvbnNlVGltZXMucHVzaCguLi5zZXNzaW9uLnVzZXJfcmVzcG9uc2VfdGltZXMpXG4gICAgaWYgKHNlc3Npb24udXNlc190YXNrX2FnZW50KSByZXN1bHQuc2Vzc2lvbnNfdXNpbmdfdGFza19hZ2VudCsrXG4gICAgaWYgKHNlc3Npb24udXNlc19tY3ApIHJlc3VsdC5zZXNzaW9uc191c2luZ19tY3ArK1xuICAgIGlmIChzZXNzaW9uLnVzZXNfd2ViX3NlYXJjaCkgcmVzdWx0LnNlc3Npb25zX3VzaW5nX3dlYl9zZWFyY2grK1xuICAgIGlmIChzZXNzaW9uLnVzZXNfd2ViX2ZldGNoKSByZXN1bHQuc2Vzc2lvbnNfdXNpbmdfd2ViX2ZldGNoKytcblxuICAgIC8vIEFkZGl0aW9uYWwgc3RhdHMgYWdncmVnYXRpb25cbiAgICByZXN1bHQudG90YWxfbGluZXNfYWRkZWQgKz0gc2Vzc2lvbi5saW5lc19hZGRlZFxuICAgIHJlc3VsdC50b3RhbF9saW5lc19yZW1vdmVkICs9IHNlc3Npb24ubGluZXNfcmVtb3ZlZFxuICAgIHJlc3VsdC50b3RhbF9maWxlc19tb2RpZmllZCArPSBzZXNzaW9uLmZpbGVzX21vZGlmaWVkXG4gICAgYWxsTWVzc2FnZUhvdXJzLnB1c2goLi4uc2Vzc2lvbi5tZXNzYWdlX2hvdXJzKVxuXG4gICAgZm9yIChjb25zdCBbdG9vbCwgY291bnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlc3Npb24udG9vbF9jb3VudHMpKSB7XG4gICAgICByZXN1bHQudG9vbF9jb3VudHNbdG9vbF0gPSAocmVzdWx0LnRvb2xfY291bnRzW3Rvb2xdIHx8IDApICsgY291bnRcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtsYW5nLCBjb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoc2Vzc2lvbi5sYW5ndWFnZXMpKSB7XG4gICAgICByZXN1bHQubGFuZ3VhZ2VzW2xhbmddID0gKHJlc3VsdC5sYW5ndWFnZXNbbGFuZ10gfHwgMCkgKyBjb3VudFxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnByb2plY3RfcGF0aCkge1xuICAgICAgcmVzdWx0LnByb2plY3RzW3Nlc3Npb24ucHJvamVjdF9wYXRoXSA9XG4gICAgICAgIChyZXN1bHQucHJvamVjdHNbc2Vzc2lvbi5wcm9qZWN0X3BhdGhdIHx8IDApICsgMVxuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb25GYWNldHMgPSBmYWNldHMuZ2V0KHNlc3Npb24uc2Vzc2lvbl9pZClcbiAgICBpZiAoc2Vzc2lvbkZhY2V0cykge1xuICAgICAgLy8gR29hbCBjYXRlZ29yaWVzXG4gICAgICBmb3IgKGNvbnN0IFtjYXQsIGNvdW50XSBvZiBzYWZlRW50cmllcyhzZXNzaW9uRmFjZXRzLmdvYWxfY2F0ZWdvcmllcykpIHtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgIHJlc3VsdC5nb2FsX2NhdGVnb3JpZXNbY2F0XSA9XG4gICAgICAgICAgICAocmVzdWx0LmdvYWxfY2F0ZWdvcmllc1tjYXRdIHx8IDApICsgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdXRjb21lc1xuICAgICAgcmVzdWx0Lm91dGNvbWVzW3Nlc3Npb25GYWNldHMub3V0Y29tZV0gPVxuICAgICAgICAocmVzdWx0Lm91dGNvbWVzW3Nlc3Npb25GYWNldHMub3V0Y29tZV0gfHwgMCkgKyAxXG5cbiAgICAgIC8vIFNhdGlzZmFjdGlvbiBjb3VudHNcbiAgICAgIGZvciAoY29uc3QgW2xldmVsLCBjb3VudF0gb2Ygc2FmZUVudHJpZXMoXG4gICAgICAgIHNlc3Npb25GYWNldHMudXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzLFxuICAgICAgKSkge1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgcmVzdWx0LnNhdGlzZmFjdGlvbltsZXZlbF0gPSAocmVzdWx0LnNhdGlzZmFjdGlvbltsZXZlbF0gfHwgMCkgKyBjb3VudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEhlbHBmdWxuZXNzXG4gICAgICByZXN1bHQuaGVscGZ1bG5lc3Nbc2Vzc2lvbkZhY2V0cy5jbGF1ZGVfaGVscGZ1bG5lc3NdID1cbiAgICAgICAgKHJlc3VsdC5oZWxwZnVsbmVzc1tzZXNzaW9uRmFjZXRzLmNsYXVkZV9oZWxwZnVsbmVzc10gfHwgMCkgKyAxXG5cbiAgICAgIC8vIFNlc3Npb24gdHlwZXNcbiAgICAgIHJlc3VsdC5zZXNzaW9uX3R5cGVzW3Nlc3Npb25GYWNldHMuc2Vzc2lvbl90eXBlXSA9XG4gICAgICAgIChyZXN1bHQuc2Vzc2lvbl90eXBlc1tzZXNzaW9uRmFjZXRzLnNlc3Npb25fdHlwZV0gfHwgMCkgKyAxXG5cbiAgICAgIC8vIEZyaWN0aW9uIGNvdW50c1xuICAgICAgZm9yIChjb25zdCBbdHlwZSwgY291bnRdIG9mIHNhZmVFbnRyaWVzKHNlc3Npb25GYWNldHMuZnJpY3Rpb25fY291bnRzKSkge1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgcmVzdWx0LmZyaWN0aW9uW3R5cGVdID0gKHJlc3VsdC5mcmljdGlvblt0eXBlXSB8fCAwKSArIGNvdW50XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU3VjY2VzcyBmYWN0b3JzXG4gICAgICBpZiAoc2Vzc2lvbkZhY2V0cy5wcmltYXJ5X3N1Y2Nlc3MgIT09ICdub25lJykge1xuICAgICAgICByZXN1bHQuc3VjY2Vzc1tzZXNzaW9uRmFjZXRzLnByaW1hcnlfc3VjY2Vzc10gPVxuICAgICAgICAgIChyZXN1bHQuc3VjY2Vzc1tzZXNzaW9uRmFjZXRzLnByaW1hcnlfc3VjY2Vzc10gfHwgMCkgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5zZXNzaW9uX3N1bW1hcmllcy5sZW5ndGggPCA1MCkge1xuICAgICAgcmVzdWx0LnNlc3Npb25fc3VtbWFyaWVzLnB1c2goe1xuICAgICAgICBpZDogc2Vzc2lvbi5zZXNzaW9uX2lkLnNsaWNlKDAsIDgpLFxuICAgICAgICBkYXRlOiBzZXNzaW9uLnN0YXJ0X3RpbWUuc3BsaXQoJ1QnKVswXSB8fCAnJyxcbiAgICAgICAgc3VtbWFyeTogc2Vzc2lvbi5zdW1tYXJ5IHx8IHNlc3Npb24uZmlyc3RfcHJvbXB0LnNsaWNlKDAsIDEwMCksXG4gICAgICAgIGdvYWw6IHNlc3Npb25GYWNldHM/LnVuZGVybHlpbmdfZ29hbCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZGF0ZXMuc29ydCgpXG4gIHJlc3VsdC5kYXRlX3JhbmdlLnN0YXJ0ID0gZGF0ZXNbMF0/LnNwbGl0KCdUJylbMF0gfHwgJydcbiAgcmVzdWx0LmRhdGVfcmFuZ2UuZW5kID0gZGF0ZXNbZGF0ZXMubGVuZ3RoIC0gMV0/LnNwbGl0KCdUJylbMF0gfHwgJydcblxuICAvLyBDYWxjdWxhdGUgcmVzcG9uc2UgdGltZSBzdGF0c1xuICByZXN1bHQudXNlcl9yZXNwb25zZV90aW1lcyA9IGFsbFJlc3BvbnNlVGltZXNcbiAgaWYgKGFsbFJlc3BvbnNlVGltZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5hbGxSZXNwb25zZVRpbWVzXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICByZXN1bHQubWVkaWFuX3Jlc3BvbnNlX3RpbWUgPSBzb3J0ZWRbTWF0aC5mbG9vcihzb3J0ZWQubGVuZ3RoIC8gMildIHx8IDBcbiAgICByZXN1bHQuYXZnX3Jlc3BvbnNlX3RpbWUgPVxuICAgICAgYWxsUmVzcG9uc2VUaW1lcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIGFsbFJlc3BvbnNlVGltZXMubGVuZ3RoXG4gIH1cblxuICAvLyBDYWxjdWxhdGUgZGF5cyBhY3RpdmUgYW5kIG1lc3NhZ2VzIHBlciBkYXlcbiAgY29uc3QgdW5pcXVlRGF5cyA9IG5ldyBTZXQoZGF0ZXMubWFwKGQgPT4gZC5zcGxpdCgnVCcpWzBdKSlcbiAgcmVzdWx0LmRheXNfYWN0aXZlID0gdW5pcXVlRGF5cy5zaXplXG4gIHJlc3VsdC5tZXNzYWdlc19wZXJfZGF5ID1cbiAgICByZXN1bHQuZGF5c19hY3RpdmUgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKHJlc3VsdC50b3RhbF9tZXNzYWdlcyAvIHJlc3VsdC5kYXlzX2FjdGl2ZSkgKiAxMCkgLyAxMFxuICAgICAgOiAwXG5cbiAgLy8gU3RvcmUgbWVzc2FnZSBob3VycyBmb3IgdGltZS1vZi1kYXkgY2hhcnRcbiAgcmVzdWx0Lm1lc3NhZ2VfaG91cnMgPSBhbGxNZXNzYWdlSG91cnNcblxuICByZXN1bHQubXVsdGlfY2xhdWRpbmcgPSBkZXRlY3RNdWx0aUNsYXVkaW5nKHNlc3Npb25zKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGFyYWxsZWwgSW5zaWdodHMgR2VuZXJhdGlvbiAoNiBzZWN0aW9ucylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBJbnNpZ2h0U2VjdGlvbiA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHByb21wdDogc3RyaW5nXG4gIG1heFRva2VuczogbnVtYmVyXG59XG5cbi8vIFNlY3Rpb25zIHRoYXQgcnVuIGluIHBhcmFsbGVsIGZpcnN0XG5jb25zdCBJTlNJR0hUX1NFQ1RJT05TOiBJbnNpZ2h0U2VjdGlvbltdID0gW1xuICB7XG4gICAgbmFtZTogJ3Byb2plY3RfYXJlYXMnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBCbGF1ZGUgdXNhZ2UgZGF0YSBhbmQgaWRlbnRpZnkgcHJvamVjdCBhcmVhcy5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJhcmVhc1wiOiBbXG4gICAge1wibmFtZVwiOiBcIkFyZWEgbmFtZVwiLCBcInNlc3Npb25fY291bnRcIjogTiwgXCJkZXNjcmlwdGlvblwiOiBcIjItMyBzZW50ZW5jZXMgYWJvdXQgd2hhdCB3YXMgd29ya2VkIG9uIGFuZCBob3cgQmxhdWRlIHdhcyB1c2VkLlwifVxuICBdXG59XG5cbkluY2x1ZGUgNC01IGFyZWFzLiBTa2lwIGludGVybmFsIENDIG9wZXJhdGlvbnMuYCxcbiAgICBtYXhUb2tlbnM6IDgxOTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW50ZXJhY3Rpb25fc3R5bGUnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBCbGF1ZGUgdXNhZ2UgZGF0YSBhbmQgZGVzY3JpYmUgdGhlIHVzZXIncyBpbnRlcmFjdGlvbiBzdHlsZS5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJuYXJyYXRpdmVcIjogXCIyLTMgcGFyYWdyYXBocyBhbmFseXppbmcgSE9XIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIEJsYXVkZS4gVXNlIHNlY29uZCBwZXJzb24gJ3lvdScuIERlc2NyaWJlIHBhdHRlcm5zOiBpdGVyYXRlIHF1aWNrbHkgdnMgZGV0YWlsZWQgdXBmcm9udCBzcGVjcz8gSW50ZXJydXB0IG9mdGVuIG9yIGxldCBCbGF1ZGUgcnVuPyBJbmNsdWRlIHNwZWNpZmljIGV4YW1wbGVzLiBVc2UgKipib2xkKiogZm9yIGtleSBpbnNpZ2h0cy5cIixcbiAgXCJrZXlfcGF0dGVyblwiOiBcIk9uZSBzZW50ZW5jZSBzdW1tYXJ5IG9mIG1vc3QgZGlzdGluY3RpdmUgaW50ZXJhY3Rpb24gc3R5bGVcIlxufWAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3doYXRfd29ya3MnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBCbGF1ZGUgdXNhZ2UgZGF0YSBhbmQgaWRlbnRpZnkgd2hhdCdzIHdvcmtpbmcgd2VsbCBmb3IgdGhpcyB1c2VyLiBVc2Ugc2Vjb25kIHBlcnNvbiAoXCJ5b3VcIikuXG5cblJFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1Q6XG57XG4gIFwiaW50cm9cIjogXCIxIHNlbnRlbmNlIG9mIGNvbnRleHRcIixcbiAgXCJpbXByZXNzaXZlX3dvcmtmbG93c1wiOiBbXG4gICAge1widGl0bGVcIjogXCJTaG9ydCB0aXRsZSAoMy02IHdvcmRzKVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiMi0zIHNlbnRlbmNlcyBkZXNjcmliaW5nIHRoZSBpbXByZXNzaXZlIHdvcmtmbG93IG9yIGFwcHJvYWNoLiBVc2UgJ3lvdScgbm90ICd0aGUgdXNlcicuXCJ9XG4gIF1cbn1cblxuSW5jbHVkZSAzIGltcHJlc3NpdmUgd29ya2Zsb3dzLmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZyaWN0aW9uX2FuYWx5c2lzJyxcbiAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQmxhdWRlIHVzYWdlIGRhdGEgYW5kIGlkZW50aWZ5IGZyaWN0aW9uIHBvaW50cyBmb3IgdGhpcyB1c2VyLiBVc2Ugc2Vjb25kIHBlcnNvbiAoXCJ5b3VcIikuXG5cblJFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1Q6XG57XG4gIFwiaW50cm9cIjogXCIxIHNlbnRlbmNlIHN1bW1hcml6aW5nIGZyaWN0aW9uIHBhdHRlcm5zXCIsXG4gIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAge1wiY2F0ZWdvcnlcIjogXCJDb25jcmV0ZSBjYXRlZ29yeSBuYW1lXCIsIFwiZGVzY3JpcHRpb25cIjogXCIxLTIgc2VudGVuY2VzIGV4cGxhaW5pbmcgdGhpcyBjYXRlZ29yeSBhbmQgd2hhdCBjb3VsZCBiZSBkb25lIGRpZmZlcmVudGx5LiBVc2UgJ3lvdScgbm90ICd0aGUgdXNlcicuXCIsIFwiZXhhbXBsZXNcIjogW1wiU3BlY2lmaWMgZXhhbXBsZSB3aXRoIGNvbnNlcXVlbmNlXCIsIFwiQW5vdGhlciBleGFtcGxlXCJdfVxuICBdXG59XG5cbkluY2x1ZGUgMyBmcmljdGlvbiBjYXRlZ29yaWVzIHdpdGggMiBleGFtcGxlcyBlYWNoLmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3N1Z2dlc3Rpb25zJyxcbiAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQmxhdWRlIHVzYWdlIGRhdGEgYW5kIHN1Z2dlc3QgaW1wcm92ZW1lbnRzLlxuXG4jIyBDQyBGRUFUVVJFUyBSRUZFUkVOQ0UgKHBpY2sgZnJvbSB0aGVzZSBmb3IgZmVhdHVyZXNfdG9fdHJ5KTpcbjEuICoqTUNQIFNlcnZlcnMqKjogQ29ubmVjdCBDbGF1ZGUgdG8gZXh0ZXJuYWwgdG9vbHMsIGRhdGFiYXNlcywgYW5kIEFQSXMgdmlhIE1vZGVsIENvbnRleHQgUHJvdG9jb2wuXG4gICAtIEhvdyB0byB1c2U6IFJ1biBcXGBjbGF1ZGUgbWNwIGFkZCA8c2VydmVyLW5hbWU+IC0tIDxjb21tYW5kPlxcYFxuICAgLSBHb29kIGZvcjogZGF0YWJhc2UgcXVlcmllcywgU2xhY2sgaW50ZWdyYXRpb24sIEdpdEh1YiBpc3N1ZSBsb29rdXAsIGNvbm5lY3RpbmcgdG8gaW50ZXJuYWwgQVBJc1xuXG4yLiAqKkN1c3RvbSBTa2lsbHMqKjogUmV1c2FibGUgcHJvbXB0cyB5b3UgZGVmaW5lIGFzIG1hcmtkb3duIGZpbGVzIHRoYXQgcnVuIHdpdGggYSBzaW5nbGUgL2NvbW1hbmQuXG4gICAtIEhvdyB0byB1c2U6IENyZWF0ZSBcXGAuY2xhdWRlL3NraWxscy9jb21taXQvU0tJTEwubWRcXGAgd2l0aCBpbnN0cnVjdGlvbnMuIFRoZW4gdHlwZSBcXGAvY29tbWl0XFxgIHRvIHJ1biBpdC5cbiAgIC0gR29vZCBmb3I6IHJlcGV0aXRpdmUgd29ya2Zsb3dzIC0gL2NvbW1pdCwgL3JldmlldywgL3Rlc3QsIC9kZXBsb3ksIC9wciwgb3IgY29tcGxleCBtdWx0aS1zdGVwIHdvcmtmbG93c1xuXG4zLiAqKkhvb2tzKio6IFNoZWxsIGNvbW1hbmRzIHRoYXQgYXV0by1ydW4gYXQgc3BlY2lmaWMgbGlmZWN5Y2xlIGV2ZW50cy5cbiAgIC0gSG93IHRvIHVzZTogQWRkIHRvIFxcYC5jbGF1ZGUvc2V0dGluZ3MuanNvblxcYCB1bmRlciBcImhvb2tzXCIga2V5LlxuICAgLSBHb29kIGZvcjogYXV0by1mb3JtYXR0aW5nIGNvZGUsIHJ1bm5pbmcgdHlwZSBjaGVja3MsIGVuZm9yY2luZyBjb252ZW50aW9uc1xuXG40LiAqKkhlYWRsZXNzIE1vZGUqKjogUnVuIENsYXVkZSBub24taW50ZXJhY3RpdmVseSBmcm9tIHNjcmlwdHMgYW5kIENJL0NELlxuICAgLSBIb3cgdG8gdXNlOiBcXGBjbGF1ZGUgLXAgXCJmaXggbGludCBlcnJvcnNcIiAtLWFsbG93ZWRUb29scyBcIkVkaXQsUmVhZCxCYXNoXCJcXGBcbiAgIC0gR29vZCBmb3I6IENJL0NEIGludGVncmF0aW9uLCBiYXRjaCBjb2RlIGZpeGVzLCBhdXRvbWF0ZWQgcmV2aWV3c1xuXG41LiAqKlRhc2sgQWdlbnRzKio6IENsYXVkZSBzcGF3bnMgZm9jdXNlZCBzdWItYWdlbnRzIGZvciBjb21wbGV4IGV4cGxvcmF0aW9uIG9yIHBhcmFsbGVsIHdvcmsuXG4gICAtIEhvdyB0byB1c2U6IENsYXVkZSBhdXRvLWludm9rZXMgd2hlbiBoZWxwZnVsLCBvciBhc2sgXCJ1c2UgYW4gYWdlbnQgdG8gZXhwbG9yZSBYXCJcbiAgIC0gR29vZCBmb3I6IGNvZGViYXNlIGV4cGxvcmF0aW9uLCB1bmRlcnN0YW5kaW5nIGNvbXBsZXggc3lzdGVtc1xuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcImNsYXVkZV9tZF9hZGRpdGlvbnNcIjogW1xuICAgIHtcImFkZGl0aW9uXCI6IFwiQSBzcGVjaWZpYyBsaW5lIG9yIGJsb2NrIHRvIGFkZCB0byBDTEFVREUubWQgYmFzZWQgb24gd29ya2Zsb3cgcGF0dGVybnMuIEUuZy4sICdBbHdheXMgcnVuIHRlc3RzIGFmdGVyIG1vZGlmeWluZyBhdXRoLXJlbGF0ZWQgZmlsZXMnXCIsIFwid2h5XCI6IFwiMSBzZW50ZW5jZSBleHBsYWluaW5nIHdoeSB0aGlzIHdvdWxkIGhlbHAgYmFzZWQgb24gYWN0dWFsIHNlc3Npb25zXCIsIFwicHJvbXB0X3NjYWZmb2xkXCI6IFwiSW5zdHJ1Y3Rpb25zIGZvciB3aGVyZSB0byBhZGQgdGhpcyBpbiBDTEFVREUubWQuIEUuZy4sICdBZGQgdW5kZXIgIyMgVGVzdGluZyBzZWN0aW9uJ1wifVxuICBdLFxuICBcImZlYXR1cmVzX3RvX3RyeVwiOiBbXG4gICAge1wiZmVhdHVyZVwiOiBcIkZlYXR1cmUgbmFtZSBmcm9tIENDIEZFQVRVUkVTIFJFRkVSRU5DRSBhYm92ZVwiLCBcIm9uZV9saW5lclwiOiBcIldoYXQgaXQgZG9lc1wiLCBcIndoeV9mb3JfeW91XCI6IFwiV2h5IHRoaXMgd291bGQgaGVscCBZT1UgYmFzZWQgb24geW91ciBzZXNzaW9uc1wiLCBcImV4YW1wbGVfY29kZVwiOiBcIkFjdHVhbCBjb21tYW5kIG9yIGNvbmZpZyB0byBjb3B5XCJ9XG4gIF0sXG4gIFwidXNhZ2VfcGF0dGVybnNcIjogW1xuICAgIHtcInRpdGxlXCI6IFwiU2hvcnQgdGl0bGVcIiwgXCJzdWdnZXN0aW9uXCI6IFwiMS0yIHNlbnRlbmNlIHN1bW1hcnlcIiwgXCJkZXRhaWxcIjogXCIzLTQgc2VudGVuY2VzIGV4cGxhaW5pbmcgaG93IHRoaXMgYXBwbGllcyB0byBZT1VSIHdvcmtcIiwgXCJjb3B5YWJsZV9wcm9tcHRcIjogXCJBIHNwZWNpZmljIHByb21wdCB0byBjb3B5IGFuZCB0cnlcIn1cbiAgXVxufVxuXG5JTVBPUlRBTlQgZm9yIGNsYXVkZV9tZF9hZGRpdGlvbnM6IFBSSU9SSVRJWkUgaW5zdHJ1Y3Rpb25zIHRoYXQgYXBwZWFyIE1VTFRJUExFIFRJTUVTIGluIHRoZSB1c2VyIGRhdGEuIElmIHVzZXIgdG9sZCBDbGF1ZGUgdGhlIHNhbWUgdGhpbmcgaW4gMisgc2Vzc2lvbnMgKGUuZy4sICdhbHdheXMgcnVuIHRlc3RzJywgJ3VzZSBUeXBlU2NyaXB0JyksIHRoYXQncyBhIFBSSU1FIGNhbmRpZGF0ZSAtIHRoZXkgc2hvdWxkbid0IGhhdmUgdG8gcmVwZWF0IHRoZW1zZWx2ZXMuXG5cbklNUE9SVEFOVCBmb3IgZmVhdHVyZXNfdG9fdHJ5OiBQaWNrIDItMyBmcm9tIHRoZSBDQyBGRUFUVVJFUyBSRUZFUkVOQ0UgYWJvdmUuIEluY2x1ZGUgMi0zIGl0ZW1zIGZvciBlYWNoIGNhdGVnb3J5LmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ29uX3RoZV9ob3Jpem9uJyxcbiAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQmxhdWRlIHVzYWdlIGRhdGEgYW5kIGlkZW50aWZ5IGZ1dHVyZSBvcHBvcnR1bml0aWVzLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcImludHJvXCI6IFwiMSBzZW50ZW5jZSBhYm91dCBldm9sdmluZyBBSS1hc3Npc3RlZCBkZXZlbG9wbWVudFwiLFxuICBcIm9wcG9ydHVuaXRpZXNcIjogW1xuICAgIHtcInRpdGxlXCI6IFwiU2hvcnQgdGl0bGUgKDQtOCB3b3JkcylcIiwgXCJ3aGF0c19wb3NzaWJsZVwiOiBcIjItMyBhbWJpdGlvdXMgc2VudGVuY2VzIGFib3V0IGF1dG9ub21vdXMgd29ya2Zsb3dzXCIsIFwiaG93X3RvX3RyeVwiOiBcIjEtMiBzZW50ZW5jZXMgbWVudGlvbmluZyByZWxldmFudCB0b29saW5nXCIsIFwiY29weWFibGVfcHJvbXB0XCI6IFwiRGV0YWlsZWQgcHJvbXB0IHRvIHRyeVwifVxuICBdXG59XG5cbkluY2x1ZGUgMyBvcHBvcnR1bml0aWVzLiBUaGluayBCSUcgLSBhdXRvbm9tb3VzIHdvcmtmbG93cywgcGFyYWxsZWwgYWdlbnRzLCBpdGVyYXRpbmcgYWdhaW5zdCB0ZXN0cy5gLFxuICAgIG1heFRva2VuczogODE5MixcbiAgfSxcbiAgLi4uKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjY190ZWFtX2ltcHJvdmVtZW50cycsXG4gICAgICAgICAgcHJvbXB0OiBgQW5hbHl6ZSB0aGlzIEJsYXVkZSB1c2FnZSBkYXRhIGFuZCBzdWdnZXN0IHByb2R1Y3QgaW1wcm92ZW1lbnRzIGZvciB0aGUgQ0MgdGVhbS5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJpbXByb3ZlbWVudHNcIjogW1xuICAgIHtcInRpdGxlXCI6IFwiUHJvZHVjdC90b29saW5nIGltcHJvdmVtZW50XCIsIFwiZGV0YWlsXCI6IFwiMy00IHNlbnRlbmNlcyBkZXNjcmliaW5nIHRoZSBpbXByb3ZlbWVudFwiLCBcImV2aWRlbmNlXCI6IFwiMy00IHNlbnRlbmNlcyB3aXRoIHNwZWNpZmljIHNlc3Npb24gZXhhbXBsZXNcIn1cbiAgXVxufVxuXG5JbmNsdWRlIDItMyBpbXByb3ZlbWVudHMgYmFzZWQgb24gZnJpY3Rpb24gcGF0dGVybnMgb2JzZXJ2ZWQuYCxcbiAgICAgICAgICBtYXhUb2tlbnM6IDgxOTIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnbW9kZWxfYmVoYXZpb3JfaW1wcm92ZW1lbnRzJyxcbiAgICAgICAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQmxhdWRlIHVzYWdlIGRhdGEgYW5kIHN1Z2dlc3QgbW9kZWwgYmVoYXZpb3IgaW1wcm92ZW1lbnRzLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcImltcHJvdmVtZW50c1wiOiBbXG4gICAge1widGl0bGVcIjogXCJNb2RlbCBiZWhhdmlvciBjaGFuZ2VcIiwgXCJkZXRhaWxcIjogXCIzLTQgc2VudGVuY2VzIGRlc2NyaWJpbmcgd2hhdCB0aGUgbW9kZWwgc2hvdWxkIGRvIGRpZmZlcmVudGx5XCIsIFwiZXZpZGVuY2VcIjogXCIzLTQgc2VudGVuY2VzIHdpdGggc3BlY2lmaWMgZXhhbXBsZXNcIn1cbiAgXVxufVxuXG5JbmNsdWRlIDItMyBpbXByb3ZlbWVudHMgYmFzZWQgb24gZnJpY3Rpb24gcGF0dGVybnMgb2JzZXJ2ZWQuYCxcbiAgICAgICAgICBtYXhUb2tlbnM6IDgxOTIsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgOiBbXSksXG4gIHtcbiAgICBuYW1lOiAnZnVuX2VuZGluZycsXG4gICAgcHJvbXB0OiBgQW5hbHl6ZSB0aGlzIEJsYXVkZSB1c2FnZSBkYXRhIGFuZCBmaW5kIGEgbWVtb3JhYmxlIG1vbWVudC5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJoZWFkbGluZVwiOiBcIkEgbWVtb3JhYmxlIFFVQUxJVEFUSVZFIG1vbWVudCBmcm9tIHRoZSB0cmFuc2NyaXB0cyAtIG5vdCBhIHN0YXRpc3RpYy4gU29tZXRoaW5nIGh1bWFuLCBmdW5ueSwgb3Igc3VycHJpc2luZy5cIixcbiAgXCJkZXRhaWxcIjogXCJCcmllZiBjb250ZXh0IGFib3V0IHdoZW4vd2hlcmUgdGhpcyBoYXBwZW5lZFwiXG59XG5cbkZpbmQgc29tZXRoaW5nIGdlbnVpbmVseSBpbnRlcmVzdGluZyBvciBhbXVzaW5nIGZyb20gdGhlIHNlc3Npb24gc3VtbWFyaWVzLmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuXVxuXG50eXBlIEluc2lnaHRSZXN1bHRzID0ge1xuICBhdF9hX2dsYW5jZT86IHtcbiAgICB3aGF0c193b3JraW5nPzogc3RyaW5nXG4gICAgd2hhdHNfaGluZGVyaW5nPzogc3RyaW5nXG4gICAgcXVpY2tfd2lucz86IHN0cmluZ1xuICAgIGFtYml0aW91c193b3JrZmxvd3M/OiBzdHJpbmdcbiAgfVxuICBwcm9qZWN0X2FyZWFzPzoge1xuICAgIGFyZWFzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHNlc3Npb25fY291bnQ6IG51bWJlcjsgZGVzY3JpcHRpb246IHN0cmluZyB9PlxuICB9XG4gIGludGVyYWN0aW9uX3N0eWxlPzoge1xuICAgIG5hcnJhdGl2ZT86IHN0cmluZ1xuICAgIGtleV9wYXR0ZXJuPzogc3RyaW5nXG4gIH1cbiAgd2hhdF93b3Jrcz86IHtcbiAgICBpbnRybz86IHN0cmluZ1xuICAgIGltcHJlc3NpdmVfd29ya2Zsb3dzPzogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gIH1cbiAgZnJpY3Rpb25fYW5hbHlzaXM/OiB7XG4gICAgaW50cm8/OiBzdHJpbmdcbiAgICBjYXRlZ29yaWVzPzogQXJyYXk8e1xuICAgICAgY2F0ZWdvcnk6IHN0cmluZ1xuICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgICAgZXhhbXBsZXM/OiBzdHJpbmdbXVxuICAgIH0+XG4gIH1cbiAgc3VnZ2VzdGlvbnM/OiB7XG4gICAgY2xhdWRlX21kX2FkZGl0aW9ucz86IEFycmF5PHtcbiAgICAgIGFkZGl0aW9uOiBzdHJpbmdcbiAgICAgIHdoeTogc3RyaW5nXG4gICAgICB3aGVyZT86IHN0cmluZ1xuICAgICAgcHJvbXB0X3NjYWZmb2xkPzogc3RyaW5nXG4gICAgfT5cbiAgICBmZWF0dXJlc190b190cnk/OiBBcnJheTx7XG4gICAgICBmZWF0dXJlOiBzdHJpbmdcbiAgICAgIG9uZV9saW5lcjogc3RyaW5nXG4gICAgICB3aHlfZm9yX3lvdTogc3RyaW5nXG4gICAgICBleGFtcGxlX2NvZGU/OiBzdHJpbmdcbiAgICB9PlxuICAgIHVzYWdlX3BhdHRlcm5zPzogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgc3VnZ2VzdGlvbjogc3RyaW5nXG4gICAgICBkZXRhaWw/OiBzdHJpbmdcbiAgICAgIGNvcHlhYmxlX3Byb21wdD86IHN0cmluZ1xuICAgIH0+XG4gIH1cbiAgb25fdGhlX2hvcml6b24/OiB7XG4gICAgaW50cm8/OiBzdHJpbmdcbiAgICBvcHBvcnR1bml0aWVzPzogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgd2hhdHNfcG9zc2libGU6IHN0cmluZ1xuICAgICAgaG93X3RvX3RyeT86IHN0cmluZ1xuICAgICAgY29weWFibGVfcHJvbXB0Pzogc3RyaW5nXG4gICAgfT5cbiAgfVxuICBjY190ZWFtX2ltcHJvdmVtZW50cz86IHtcbiAgICBpbXByb3ZlbWVudHM/OiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBkZXRhaWw6IHN0cmluZ1xuICAgICAgZXZpZGVuY2U/OiBzdHJpbmdcbiAgICB9PlxuICB9XG4gIG1vZGVsX2JlaGF2aW9yX2ltcHJvdmVtZW50cz86IHtcbiAgICBpbXByb3ZlbWVudHM/OiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBkZXRhaWw6IHN0cmluZ1xuICAgICAgZXZpZGVuY2U/OiBzdHJpbmdcbiAgICB9PlxuICB9XG4gIGZ1bl9lbmRpbmc/OiB7XG4gICAgaGVhZGxpbmU/OiBzdHJpbmdcbiAgICBkZXRhaWw/OiBzdHJpbmdcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVNlY3Rpb25JbnNpZ2h0KFxuICBzZWN0aW9uOiBJbnNpZ2h0U2VjdGlvbixcbiAgZGF0YUNvbnRleHQ6IHN0cmluZyxcbik6IFByb21pc2U8eyBuYW1lOiBzdHJpbmc7IHJlc3VsdDogdW5rbm93biB9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlXaXRoTW9kZWwoe1xuICAgICAgc3lzdGVtUHJvbXB0OiBhc1N5c3RlbVByb21wdChbXSksXG4gICAgICB1c2VyUHJvbXB0OiBzZWN0aW9uLnByb21wdCArICdcXG5cXG5EQVRBOlxcbicgKyBkYXRhQ29udGV4dCxcbiAgICAgIHNpZ25hbDogbmV3IEFib3J0Q29udHJvbGxlcigpLnNpZ25hbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbW9kZWw6IGdldEluc2lnaHRzTW9kZWwoKSxcbiAgICAgICAgcXVlcnlTb3VyY2U6ICdpbnNpZ2h0cycsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICBoYXNBcHBlbmRTeXN0ZW1Qcm9tcHQ6IGZhbHNlLFxuICAgICAgICBtY3BUb29sczogW10sXG4gICAgICAgIG1heE91dHB1dFRva2Vuc092ZXJyaWRlOiBzZWN0aW9uLm1heFRva2VucyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzdWx0Lm1lc3NhZ2UuY29udGVudClcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAvLyBQYXJzZSBKU09OIGZyb20gcmVzcG9uc2VcbiAgICAgIGNvbnN0IGpzb25NYXRjaCA9IHRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pXG4gICAgICBpZiAoanNvbk1hdGNoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogc2VjdGlvbi5uYW1lLCByZXN1bHQ6IGpzb25QYXJzZShqc29uTWF0Y2hbMF0pIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogc2VjdGlvbi5uYW1lLCByZXN1bHQ6IG51bGwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5hbWU6IHNlY3Rpb24ubmFtZSwgcmVzdWx0OiBudWxsIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nRXJyb3IobmV3IEVycm9yKGAke3NlY3Rpb24ubmFtZX0gZmFpbGVkOiAke3RvRXJyb3IoZXJyKS5tZXNzYWdlfWApKVxuICAgIHJldHVybiB7IG5hbWU6IHNlY3Rpb24ubmFtZSwgcmVzdWx0OiBudWxsIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVBhcmFsbGVsSW5zaWdodHMoXG4gIGRhdGE6IEFnZ3JlZ2F0ZWREYXRhLFxuICBmYWNldHM6IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+LFxuKTogUHJvbWlzZTxJbnNpZ2h0UmVzdWx0cz4ge1xuICAvLyBCdWlsZCBkYXRhIGNvbnRleHQgc3RyaW5nXG4gIGNvbnN0IGZhY2V0U3VtbWFyaWVzID0gQXJyYXkuZnJvbShmYWNldHMudmFsdWVzKCkpXG4gICAgLnNsaWNlKDAsIDUwKVxuICAgIC5tYXAoZiA9PiBgLSAke2YuYnJpZWZfc3VtbWFyeX0gKCR7Zi5vdXRjb21lfSwgJHtmLmNsYXVkZV9oZWxwZnVsbmVzc30pYClcbiAgICAuam9pbignXFxuJylcblxuICBjb25zdCBmcmljdGlvbkRldGFpbHMgPSBBcnJheS5mcm9tKGZhY2V0cy52YWx1ZXMoKSlcbiAgICAuZmlsdGVyKGYgPT4gZi5mcmljdGlvbl9kZXRhaWwpXG4gICAgLnNsaWNlKDAsIDIwKVxuICAgIC5tYXAoZiA9PiBgLSAke2YuZnJpY3Rpb25fZGV0YWlsfWApXG4gICAgLmpvaW4oJ1xcbicpXG5cbiAgY29uc3QgdXNlckluc3RydWN0aW9ucyA9IEFycmF5LmZyb20oZmFjZXRzLnZhbHVlcygpKVxuICAgIC5mbGF0TWFwKGYgPT4gZi51c2VyX2luc3RydWN0aW9uc190b19jbGF1ZGUgfHwgW10pXG4gICAgLnNsaWNlKDAsIDE1KVxuICAgIC5tYXAoaSA9PiBgLSAke2l9YClcbiAgICAuam9pbignXFxuJylcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IGpzb25TdHJpbmdpZnkoXG4gICAge1xuICAgICAgc2Vzc2lvbnM6IGRhdGEudG90YWxfc2Vzc2lvbnMsXG4gICAgICBhbmFseXplZDogZGF0YS5zZXNzaW9uc193aXRoX2ZhY2V0cyxcbiAgICAgIGRhdGVfcmFuZ2U6IGRhdGEuZGF0ZV9yYW5nZSxcbiAgICAgIG1lc3NhZ2VzOiBkYXRhLnRvdGFsX21lc3NhZ2VzLFxuICAgICAgaG91cnM6IE1hdGgucm91bmQoZGF0YS50b3RhbF9kdXJhdGlvbl9ob3VycyksXG4gICAgICBjb21taXRzOiBkYXRhLmdpdF9jb21taXRzLFxuICAgICAgdG9wX3Rvb2xzOiBPYmplY3QuZW50cmllcyhkYXRhLnRvb2xfY291bnRzKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgICAgIC5zbGljZSgwLCA4KSxcbiAgICAgIHRvcF9nb2FsczogT2JqZWN0LmVudHJpZXMoZGF0YS5nb2FsX2NhdGVnb3JpZXMpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICAgICAgLnNsaWNlKDAsIDgpLFxuICAgICAgb3V0Y29tZXM6IGRhdGEub3V0Y29tZXMsXG4gICAgICBzYXRpc2ZhY3Rpb246IGRhdGEuc2F0aXNmYWN0aW9uLFxuICAgICAgZnJpY3Rpb246IGRhdGEuZnJpY3Rpb24sXG4gICAgICBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3MsXG4gICAgICBsYW5ndWFnZXM6IGRhdGEubGFuZ3VhZ2VzLFxuICAgIH0sXG4gICAgbnVsbCxcbiAgICAyLFxuICApXG5cbiAgY29uc3QgZnVsbENvbnRleHQgPVxuICAgIGRhdGFDb250ZXh0ICtcbiAgICAnXFxuXFxuU0VTU0lPTiBTVU1NQVJJRVM6XFxuJyArXG4gICAgZmFjZXRTdW1tYXJpZXMgK1xuICAgICdcXG5cXG5GUklDVElPTiBERVRBSUxTOlxcbicgK1xuICAgIGZyaWN0aW9uRGV0YWlscyArXG4gICAgJ1xcblxcblVTRVIgSU5TVFJVQ1RJT05TIFRPIENMQVVERTpcXG4nICtcbiAgICAodXNlckluc3RydWN0aW9ucyB8fCAnTm9uZSBjYXB0dXJlZCcpXG5cbiAgLy8gUnVuIHNlY3Rpb25zIGluIHBhcmFsbGVsIGZpcnN0IChleGNsdWRpbmcgYXRfYV9nbGFuY2UpXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBJTlNJR0hUX1NFQ1RJT05TLm1hcChzZWN0aW9uID0+XG4gICAgICBnZW5lcmF0ZVNlY3Rpb25JbnNpZ2h0KHNlY3Rpb24sIGZ1bGxDb250ZXh0KSxcbiAgICApLFxuICApXG5cbiAgLy8gQ29tYmluZSByZXN1bHRzXG4gIGNvbnN0IGluc2lnaHRzOiBJbnNpZ2h0UmVzdWx0cyA9IHt9XG4gIGZvciAoY29uc3QgeyBuYW1lLCByZXN1bHQgfSBvZiByZXN1bHRzKSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgOyhpbnNpZ2h0cyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbbmFtZV0gPSByZXN1bHRcbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZCByaWNoIGNvbnRleHQgZnJvbSBnZW5lcmF0ZWQgc2VjdGlvbnMgZm9yIEF0IGEgR2xhbmNlXG4gIGNvbnN0IHByb2plY3RBcmVhc1RleHQgPVxuICAgIChcbiAgICAgIGluc2lnaHRzLnByb2plY3RfYXJlYXMgYXMge1xuICAgICAgICBhcmVhcz86IEFycmF5PHsgbmFtZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8uYXJlYXNcbiAgICAgID8ubWFwKGEgPT4gYC0gJHthLm5hbWV9OiAke2EuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGJpZ1dpbnNUZXh0ID1cbiAgICAoXG4gICAgICBpbnNpZ2h0cy53aGF0X3dvcmtzIGFzIHtcbiAgICAgICAgaW1wcmVzc2l2ZV93b3JrZmxvd3M/OiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfT5cbiAgICAgIH1cbiAgICApPy5pbXByZXNzaXZlX3dvcmtmbG93c1xuICAgICAgPy5tYXAodyA9PiBgLSAke3cudGl0bGV9OiAke3cuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGZyaWN0aW9uVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMuZnJpY3Rpb25fYW5hbHlzaXMgYXMge1xuICAgICAgICBjYXRlZ29yaWVzPzogQXJyYXk8eyBjYXRlZ29yeTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8uY2F0ZWdvcmllc1xuICAgICAgPy5tYXAoYyA9PiBgLSAke2MuY2F0ZWdvcnl9OiAke2MuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGZlYXR1cmVzVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMuc3VnZ2VzdGlvbnMgYXMge1xuICAgICAgICBmZWF0dXJlc190b190cnk/OiBBcnJheTx7IGZlYXR1cmU6IHN0cmluZzsgb25lX2xpbmVyOiBzdHJpbmcgfT5cbiAgICAgIH1cbiAgICApPy5mZWF0dXJlc190b190cnlcbiAgICAgID8ubWFwKGYgPT4gYC0gJHtmLmZlYXR1cmV9OiAke2Yub25lX2xpbmVyfWApXG4gICAgICAuam9pbignXFxuJykgfHwgJydcblxuICBjb25zdCBwYXR0ZXJuc1RleHQgPVxuICAgIChcbiAgICAgIGluc2lnaHRzLnN1Z2dlc3Rpb25zIGFzIHtcbiAgICAgICAgdXNhZ2VfcGF0dGVybnM/OiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IHN1Z2dlc3Rpb246IHN0cmluZyB9PlxuICAgICAgfVxuICAgICk/LnVzYWdlX3BhdHRlcm5zXG4gICAgICA/Lm1hcChwID0+IGAtICR7cC50aXRsZX06ICR7cC5zdWdnZXN0aW9ufWApXG4gICAgICAuam9pbignXFxuJykgfHwgJydcblxuICBjb25zdCBob3Jpem9uVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMub25fdGhlX2hvcml6b24gYXMge1xuICAgICAgICBvcHBvcnR1bml0aWVzPzogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB3aGF0c19wb3NzaWJsZTogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8ub3Bwb3J0dW5pdGllc1xuICAgICAgPy5tYXAobyA9PiBgLSAke28udGl0bGV9OiAke28ud2hhdHNfcG9zc2libGV9YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIC8vIE5vdyBnZW5lcmF0ZSBcIkF0IGEgR2xhbmNlXCIgd2l0aCBhY2Nlc3MgdG8gb3RoZXIgc2VjdGlvbnMnIG91dHB1dHNcbiAgY29uc3QgYXRBR2xhbmNlUHJvbXB0ID0gYFlvdSdyZSB3cml0aW5nIGFuIFwiQXQgYSBHbGFuY2VcIiBzdW1tYXJ5IGZvciBhIENsYXVkZSBDb2RlIHVzYWdlIGluc2lnaHRzIHJlcG9ydCBmb3IgQ2xhdWRlIENvZGUgdXNlcnMuIFRoZSBnb2FsIGlzIHRvIGhlbHAgdGhlbSB1bmRlcnN0YW5kIHRoZWlyIHVzYWdlIGFuZCBpbXByb3ZlIGhvdyB0aGV5IGNhbiB1c2UgQ2xhdWRlIGJldHRlciwgZXNwZWNpYWxseSBhcyBtb2RlbHMgaW1wcm92ZS5cblxuVXNlIHRoaXMgNC1wYXJ0IHN0cnVjdHVyZTpcblxuMS4gKipXaGF0J3Mgd29ya2luZyoqIC0gV2hhdCBpcyB0aGUgdXNlcidzIHVuaXF1ZSBzdHlsZSBvZiBpbnRlcmFjdGluZyB3aXRoIENsYXVkZSBhbmQgd2hhdCBhcmUgc29tZSBpbXBhY3RmdWwgdGhpbmdzIHRoZXkndmUgZG9uZT8gWW91IGNhbiBpbmNsdWRlIG9uZSBvciB0d28gZGV0YWlscywgYnV0IGtlZXAgaXQgaGlnaCBsZXZlbCBzaW5jZSB0aGluZ3MgbWlnaHQgbm90IGJlIGZyZXNoIGluIHRoZSB1c2VyJ3MgbWVtb3J5LiBEb24ndCBiZSBmbHVmZnkgb3Igb3Zlcmx5IGNvbXBsaW1lbnRhcnkuIEFsc28sIGRvbid0IGZvY3VzIG9uIHRoZSB0b29sIGNhbGxzIHRoZXkgdXNlLlxuXG4yLiAqKldoYXQncyBoaW5kZXJpbmcgeW91KiogLSBTcGxpdCBpbnRvIChhKSBDbGF1ZGUncyBmYXVsdCAobWlzdW5kZXJzdGFuZGluZ3MsIHdyb25nIGFwcHJvYWNoZXMsIGJ1Z3MpIGFuZCAoYikgdXNlci1zaWRlIGZyaWN0aW9uIChub3QgcHJvdmlkaW5nIGVub3VnaCBjb250ZXh0LCBlbnZpcm9ubWVudCBpc3N1ZXMgLS0gaWRlYWxseSBtb3JlIGdlbmVyYWwgdGhhbiBqdXN0IG9uZSBwcm9qZWN0KS4gQmUgaG9uZXN0IGJ1dCBjb25zdHJ1Y3RpdmUuXG5cbjMuICoqUXVpY2sgd2lucyB0byB0cnkqKiAtIFNwZWNpZmljIENsYXVkZSBDb2RlIGZlYXR1cmVzIHRoZXkgY291bGQgdHJ5IGZyb20gdGhlIGV4YW1wbGVzIGJlbG93LCBvciBhIHdvcmtmbG93IHRlY2huaXF1ZSBpZiB5b3UgdGhpbmsgaXQncyByZWFsbHkgY29tcGVsbGluZy4gKEF2b2lkIHN0dWZmIGxpa2UgXCJBc2sgQ2xhdWRlIHRvIGNvbmZpcm0gYmVmb3JlIHRha2luZyBhY3Rpb25zXCIgb3IgXCJUeXBlIG91dCBtb3JlIGNvbnRleHQgdXAgZnJvbnRcIiB3aGljaCBhcmUgbGVzcyBjb21wZWxsaW5nLilcblxuNC4gKipBbWJpdGlvdXMgd29ya2Zsb3dzIGZvciBiZXR0ZXIgbW9kZWxzKiogLSBBcyB3ZSBtb3ZlIHRvIG11Y2ggbW9yZSBjYXBhYmxlIG1vZGVscyBvdmVyIHRoZSBuZXh0IDMtNiBtb250aHMsIHdoYXQgc2hvdWxkIHRoZXkgcHJlcGFyZSBmb3I/IFdoYXQgd29ya2Zsb3dzIHRoYXQgc2VlbSBpbXBvc3NpYmxlIG5vdyB3aWxsIGJlY29tZSBwb3NzaWJsZT8gRHJhdyBmcm9tIHRoZSBhcHByb3ByaWF0ZSBzZWN0aW9uIGJlbG93LlxuXG5LZWVwIGVhY2ggc2VjdGlvbiB0byAyLTMgbm90LXRvby1sb25nIHNlbnRlbmNlcy4gRG9uJ3Qgb3ZlcndoZWxtIHRoZSB1c2VyLiBEb24ndCBtZW50aW9uIHNwZWNpZmljIG51bWVyaWNhbCBzdGF0cyBvciB1bmRlcmxpbmVkX2NhdGVnb3JpZXMgZnJvbSB0aGUgc2Vzc2lvbiBkYXRhIGJlbG93LiBVc2UgYSBjb2FjaGluZyB0b25lLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcIndoYXRzX3dvcmtpbmdcIjogXCIocmVmZXIgdG8gaW5zdHJ1Y3Rpb25zIGFib3ZlKVwiLFxuICBcIndoYXRzX2hpbmRlcmluZ1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCIsXG4gIFwicXVpY2tfd2luc1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCIsXG4gIFwiYW1iaXRpb3VzX3dvcmtmbG93c1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCJcbn1cblxuU0VTU0lPTiBEQVRBOlxuJHtmdWxsQ29udGV4dH1cblxuIyMgUHJvamVjdCBBcmVhcyAod2hhdCB1c2VyIHdvcmtzIG9uKVxuJHtwcm9qZWN0QXJlYXNUZXh0fVxuXG4jIyBCaWcgV2lucyAoaW1wcmVzc2l2ZSBhY2NvbXBsaXNobWVudHMpXG4ke2JpZ1dpbnNUZXh0fVxuXG4jIyBGcmljdGlvbiBDYXRlZ29yaWVzICh3aGVyZSB0aGluZ3MgZ28gd3JvbmcpXG4ke2ZyaWN0aW9uVGV4dH1cblxuIyMgRmVhdHVyZXMgdG8gVHJ5XG4ke2ZlYXR1cmVzVGV4dH1cblxuIyMgVXNhZ2UgUGF0dGVybnMgdG8gQWRvcHRcbiR7cGF0dGVybnNUZXh0fVxuXG4jIyBPbiB0aGUgSG9yaXpvbiAoYW1iaXRpb3VzIHdvcmtmbG93cyBmb3IgYmV0dGVyIG1vZGVscylcbiR7aG9yaXpvblRleHR9YFxuXG4gIGNvbnN0IGF0QUdsYW5jZVNlY3Rpb246IEluc2lnaHRTZWN0aW9uID0ge1xuICAgIG5hbWU6ICdhdF9hX2dsYW5jZScsXG4gICAgcHJvbXB0OiBhdEFHbGFuY2VQcm9tcHQsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9XG5cbiAgY29uc3QgYXRBR2xhbmNlUmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVTZWN0aW9uSW5zaWdodChhdEFHbGFuY2VTZWN0aW9uLCAnJylcbiAgaWYgKGF0QUdsYW5jZVJlc3VsdC5yZXN1bHQpIHtcbiAgICBpbnNpZ2h0cy5hdF9hX2dsYW5jZSA9IGF0QUdsYW5jZVJlc3VsdC5yZXN1bHQgYXMge1xuICAgICAgd2hhdHNfd29ya2luZz86IHN0cmluZ1xuICAgICAgd2hhdHNfaGluZGVyaW5nPzogc3RyaW5nXG4gICAgICBxdWlja193aW5zPzogc3RyaW5nXG4gICAgICBhbWJpdGlvdXNfd29ya2Zsb3dzPzogc3RyaW5nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluc2lnaHRzXG59XG5cbi8vIEVzY2FwZSBIVE1MIGJ1dCByZW5kZXIgKipib2xkKiogYXMgPHN0cm9uZz5cbmZ1bmN0aW9uIGVzY2FwZUh0bWxXaXRoQm9sZCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBlc2NhcGVkID0gZXNjYXBlSHRtbCh0ZXh0KVxuICByZXR1cm4gZXNjYXBlZC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpXG59XG5cbi8vIEZpeGVkIG9yZGVyaW5ncyBmb3Igc3BlY2lmaWMgY2hhcnRzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuY29uc3QgU0FUSVNGQUNUSU9OX09SREVSID0gW1xuICAnZnJ1c3RyYXRlZCcsXG4gICdkaXNzYXRpc2ZpZWQnLFxuICAnbGlrZWx5X3NhdGlzZmllZCcsXG4gICdzYXRpc2ZpZWQnLFxuICAnaGFwcHknLFxuICAndW5zdXJlJyxcbl1cblxuY29uc3QgT1VUQ09NRV9PUkRFUiA9IFtcbiAgJ25vdF9hY2hpZXZlZCcsXG4gICdwYXJ0aWFsbHlfYWNoaWV2ZWQnLFxuICAnbW9zdGx5X2FjaGlldmVkJyxcbiAgJ2Z1bGx5X2FjaGlldmVkJyxcbiAgJ3VuY2xlYXJfZnJvbV90cmFuc2NyaXB0Jyxcbl1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCYXJDaGFydChcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgY29sb3I6IHN0cmluZyxcbiAgbWF4SXRlbXMgPSA2LFxuICBmaXhlZE9yZGVyPzogc3RyaW5nW10sXG4pOiBzdHJpbmcge1xuICBsZXQgZW50cmllczogW3N0cmluZywgbnVtYmVyXVtdXG5cbiAgaWYgKGZpeGVkT3JkZXIpIHtcbiAgICAvLyBVc2UgZml4ZWQgb3JkZXIsIG9ubHkgaW5jbHVkaW5nIGl0ZW1zIHRoYXQgZXhpc3QgaW4gZGF0YVxuICAgIGVudHJpZXMgPSBmaXhlZE9yZGVyXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkgaW4gZGF0YSAmJiAoZGF0YVtrZXldID8/IDApID4gMClcbiAgICAgIC5tYXAoa2V5ID0+IFtrZXksIGRhdGFba2V5XSA/PyAwXSBhcyBbc3RyaW5nLCBudW1iZXJdKVxuICB9IGVsc2Uge1xuICAgIC8vIFNvcnQgYnkgY291bnQgZGVzY2VuZGluZ1xuICAgIGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgLnNsaWNlKDAsIG1heEl0ZW1zKVxuICB9XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gJzxwIGNsYXNzPVwiZW1wdHlcIj5ObyBkYXRhPC9wPidcblxuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5lbnRyaWVzLm1hcChlID0+IGVbMV0pKVxuICByZXR1cm4gZW50cmllc1xuICAgIC5tYXAoKFtsYWJlbCwgY291bnRdKSA9PiB7XG4gICAgICBjb25zdCBwY3QgPSAoY291bnQgLyBtYXhWYWwpICogMTAwXG4gICAgICAvLyBVc2UgTEFCRUxfTUFQIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNsZWFuIHVwIHVuZGVyc2NvcmVzIGFuZCB0aXRsZSBjYXNlXG4gICAgICBjb25zdCBjbGVhbkxhYmVsID1cbiAgICAgICAgTEFCRUxfTUFQW2xhYmVsXSB8fFxuICAgICAgICBsYWJlbC5yZXBsYWNlKC9fL2csICcgJykucmVwbGFjZSgvXFxiXFx3L2csIGMgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLWxhYmVsXCI+JHtlc2NhcGVIdG1sKGNsZWFuTGFiZWwpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLXRyYWNrXCI+PGRpdiBjbGFzcz1cImJhci1maWxsXCIgc3R5bGU9XCJ3aWR0aDoke3BjdH0lO2JhY2tncm91bmQ6JHtjb2xvcn1cIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci12YWx1ZVwiPiR7Y291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSZXNwb25zZVRpbWVIaXN0b2dyYW0odGltZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgaWYgKHRpbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICc8cCBjbGFzcz1cImVtcHR5XCI+Tm8gcmVzcG9uc2UgdGltZSBkYXRhPC9wPidcblxuICAvLyBDcmVhdGUgYnVja2V0cyAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSlcbiAgY29uc3QgYnVja2V0czogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcbiAgICAnMi0xMHMnOiAwLFxuICAgICcxMC0zMHMnOiAwLFxuICAgICczMHMtMW0nOiAwLFxuICAgICcxLTJtJzogMCxcbiAgICAnMi01bSc6IDAsXG4gICAgJzUtMTVtJzogMCxcbiAgICAnPjE1bSc6IDAsXG4gIH1cblxuICBmb3IgKGNvbnN0IHQgb2YgdGltZXMpIHtcbiAgICBpZiAodCA8IDEwKSBidWNrZXRzWycyLTEwcyddID0gKGJ1Y2tldHNbJzItMTBzJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBpZiAodCA8IDMwKSBidWNrZXRzWycxMC0zMHMnXSA9IChidWNrZXRzWycxMC0zMHMnXSA/PyAwKSArIDFcbiAgICBlbHNlIGlmICh0IDwgNjApIGJ1Y2tldHNbJzMwcy0xbSddID0gKGJ1Y2tldHNbJzMwcy0xbSddID8/IDApICsgMVxuICAgIGVsc2UgaWYgKHQgPCAxMjApIGJ1Y2tldHNbJzEtMm0nXSA9IChidWNrZXRzWycxLTJtJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBpZiAodCA8IDMwMCkgYnVja2V0c1snMi01bSddID0gKGJ1Y2tldHNbJzItNW0nXSA/PyAwKSArIDFcbiAgICBlbHNlIGlmICh0IDwgOTAwKSBidWNrZXRzWyc1LTE1bSddID0gKGJ1Y2tldHNbJzUtMTVtJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBidWNrZXRzWyc+MTVtJ10gPSAoYnVja2V0c1snPjE1bSddID8/IDApICsgMVxuICB9XG5cbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4uT2JqZWN0LnZhbHVlcyhidWNrZXRzKSlcbiAgaWYgKG1heFZhbCA9PT0gMCkgcmV0dXJuICc8cCBjbGFzcz1cImVtcHR5XCI+Tm8gcmVzcG9uc2UgdGltZSBkYXRhPC9wPidcblxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoYnVja2V0cylcbiAgICAubWFwKChbbGFiZWwsIGNvdW50XSkgPT4ge1xuICAgICAgY29uc3QgcGN0ID0gKGNvdW50IC8gbWF4VmFsKSAqIDEwMFxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLWxhYmVsXCI+JHtsYWJlbH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci10cmFja1wiPjxkaXYgY2xhc3M9XCJiYXItZmlsbFwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JTtiYWNrZ3JvdW5kOiM2MzY2ZjFcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci12YWx1ZVwiPiR7Y291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUaW1lT2ZEYXlDaGFydChtZXNzYWdlSG91cnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgaWYgKG1lc3NhZ2VIb3Vycy5sZW5ndGggPT09IDApIHJldHVybiAnPHAgY2xhc3M9XCJlbXB0eVwiPk5vIHRpbWUgZGF0YTwvcD4nXG5cbiAgLy8gR3JvdXAgaW50byB0aW1lIHBlcmlvZHNcbiAgY29uc3QgcGVyaW9kcyA9IFtcbiAgICB7IGxhYmVsOiAnTW9ybmluZyAoNi0xMiknLCByYW5nZTogWzYsIDcsIDgsIDksIDEwLCAxMV0gfSxcbiAgICB7IGxhYmVsOiAnQWZ0ZXJub29uICgxMi0xOCknLCByYW5nZTogWzEyLCAxMywgMTQsIDE1LCAxNiwgMTddIH0sXG4gICAgeyBsYWJlbDogJ0V2ZW5pbmcgKDE4LTI0KScsIHJhbmdlOiBbMTgsIDE5LCAyMCwgMjEsIDIyLCAyM10gfSxcbiAgICB7IGxhYmVsOiAnTmlnaHQgKDAtNiknLCByYW5nZTogWzAsIDEsIDIsIDMsIDQsIDVdIH0sXG4gIF1cblxuICBjb25zdCBob3VyQ291bnRzOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+ID0ge31cbiAgZm9yIChjb25zdCBoIG9mIG1lc3NhZ2VIb3Vycykge1xuICAgIGhvdXJDb3VudHNbaF0gPSAoaG91ckNvdW50c1toXSB8fCAwKSArIDFcbiAgfVxuXG4gIGNvbnN0IHBlcmlvZENvdW50cyA9IHBlcmlvZHMubWFwKHAgPT4gKHtcbiAgICBsYWJlbDogcC5sYWJlbCxcbiAgICBjb3VudDogcC5yYW5nZS5yZWR1Y2UoKHN1bSwgaCkgPT4gc3VtICsgKGhvdXJDb3VudHNbaF0gfHwgMCksIDApLFxuICB9KSlcblxuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5wZXJpb2RDb3VudHMubWFwKHAgPT4gcC5jb3VudCkpIHx8IDFcblxuICBjb25zdCBiYXJzSHRtbCA9IHBlcmlvZENvdW50c1xuICAgIC5tYXAoXG4gICAgICBwID0+IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItbGFiZWxcIj4ke3AubGFiZWx9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItdHJhY2tcIj48ZGl2IGNsYXNzPVwiYmFyLWZpbGxcIiBzdHlsZT1cIndpZHRoOiR7KHAuY291bnQgLyBtYXhWYWwpICogMTAwfSU7YmFja2dyb3VuZDojOGI1Y2Y2XCI+PC9kaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItdmFsdWVcIj4ke3AuY291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gLFxuICAgIClcbiAgICAuam9pbignXFxuJylcblxuICByZXR1cm4gYDxkaXYgaWQ9XCJob3VyLWhpc3RvZ3JhbVwiPiR7YmFyc0h0bWx9PC9kaXY+YFxufVxuXG5mdW5jdGlvbiBnZXRIb3VyQ291bnRzSnNvbihtZXNzYWdlSG91cnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3QgaG91ckNvdW50czogUmVjb3JkPG51bWJlciwgbnVtYmVyPiA9IHt9XG4gIGZvciAoY29uc3QgaCBvZiBtZXNzYWdlSG91cnMpIHtcbiAgICBob3VyQ291bnRzW2hdID0gKGhvdXJDb3VudHNbaF0gfHwgMCkgKyAxXG4gIH1cbiAgcmV0dXJuIGpzb25TdHJpbmdpZnkoaG91ckNvdW50cylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sUmVwb3J0KFxuICBkYXRhOiBBZ2dyZWdhdGVkRGF0YSxcbiAgaW5zaWdodHM6IEluc2lnaHRSZXN1bHRzLFxuKTogc3RyaW5nIHtcbiAgY29uc3QgbWFya2Rvd25Ub0h0bWwgPSAobWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFtZCkgcmV0dXJuICcnXG4gICAgcmV0dXJuIG1kXG4gICAgICAuc3BsaXQoJ1xcblxcbicpXG4gICAgICAubWFwKHAgPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IGVzY2FwZUh0bWwocClcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqXFwqKC4rPylcXCpcXCovZywgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKVxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eLSAvZ20sICdcdTIwMjIgJylcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxuL2csICc8YnI+JylcbiAgICAgICAgcmV0dXJuIGA8cD4ke2h0bWx9PC9wPmBcbiAgICAgIH0pXG4gICAgICAuam9pbignXFxuJylcbiAgfVxuXG4gIC8vIEJ1aWxkIEF0IGEgR2xhbmNlIHNlY3Rpb24gKG5ldyA0LXBhcnQgZm9ybWF0IHdpdGggbGlua3MgdG8gc2VjdGlvbnMpXG4gIGNvbnN0IGF0QUdsYW5jZSA9IGluc2lnaHRzLmF0X2FfZ2xhbmNlXG4gIGNvbnN0IGF0QUdsYW5jZUh0bWwgPSBhdEFHbGFuY2VcbiAgICA/IGBcbiAgICA8ZGl2IGNsYXNzPVwiYXQtYS1nbGFuY2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnbGFuY2UtdGl0bGVcIj5BdCBhIEdsYW5jZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdsYW5jZS1zZWN0aW9uc1wiPlxuICAgICAgICAke2F0QUdsYW5jZS53aGF0c193b3JraW5nID8gYDxkaXYgY2xhc3M9XCJnbGFuY2Utc2VjdGlvblwiPjxzdHJvbmc+V2hhdCdzIHdvcmtpbmc6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbFdpdGhCb2xkKGF0QUdsYW5jZS53aGF0c193b3JraW5nKX0gPGEgaHJlZj1cIiNzZWN0aW9uLXdpbnNcIiBjbGFzcz1cInNlZS1tb3JlXCI+SW1wcmVzc2l2ZSBUaGluZ3MgWW91IERpZCBcdTIxOTI8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgICAke2F0QUdsYW5jZS53aGF0c19oaW5kZXJpbmcgPyBgPGRpdiBjbGFzcz1cImdsYW5jZS1zZWN0aW9uXCI+PHN0cm9uZz5XaGF0J3MgaGluZGVyaW5nIHlvdTo8L3N0cm9uZz4gJHtlc2NhcGVIdG1sV2l0aEJvbGQoYXRBR2xhbmNlLndoYXRzX2hpbmRlcmluZyl9IDxhIGhyZWY9XCIjc2VjdGlvbi1mcmljdGlvblwiIGNsYXNzPVwic2VlLW1vcmVcIj5XaGVyZSBUaGluZ3MgR28gV3JvbmcgXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgJHthdEFHbGFuY2UucXVpY2tfd2lucyA/IGA8ZGl2IGNsYXNzPVwiZ2xhbmNlLXNlY3Rpb25cIj48c3Ryb25nPlF1aWNrIHdpbnMgdG8gdHJ5Ojwvc3Ryb25nPiAke2VzY2FwZUh0bWxXaXRoQm9sZChhdEFHbGFuY2UucXVpY2tfd2lucyl9IDxhIGhyZWY9XCIjc2VjdGlvbi1mZWF0dXJlc1wiIGNsYXNzPVwic2VlLW1vcmVcIj5GZWF0dXJlcyB0byBUcnkgXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93cyA/IGA8ZGl2IGNsYXNzPVwiZ2xhbmNlLXNlY3Rpb25cIj48c3Ryb25nPkFtYml0aW91cyB3b3JrZmxvd3M6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbFdpdGhCb2xkKGF0QUdsYW5jZS5hbWJpdGlvdXNfd29ya2Zsb3dzKX0gPGEgaHJlZj1cIiNzZWN0aW9uLWhvcml6b25cIiBjbGFzcz1cInNlZS1tb3JlXCI+T24gdGhlIEhvcml6b24gXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICA6ICcnXG5cbiAgLy8gQnVpbGQgcHJvamVjdCBhcmVhcyBzZWN0aW9uXG4gIGNvbnN0IHByb2plY3RBcmVhcyA9IGluc2lnaHRzLnByb2plY3RfYXJlYXM/LmFyZWFzIHx8IFtdXG4gIGNvbnN0IHByb2plY3RBcmVhc0h0bWwgPVxuICAgIHByb2plY3RBcmVhcy5sZW5ndGggPiAwXG4gICAgICA/IGBcbiAgICA8aDIgaWQ9XCJzZWN0aW9uLXdvcmtcIj5XaGF0IFlvdSBXb3JrIE9uPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1hcmVhc1wiPlxuICAgICAgJHtwcm9qZWN0QXJlYXNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBhcmVhID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYXJlYVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcmVhLWhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmVhLW5hbWVcIj4ke2VzY2FwZUh0bWwoYXJlYS5uYW1lKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyZWEtY291bnRcIj5+JHthcmVhLnNlc3Npb25fY291bnR9IHNlc3Npb25zPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcmVhLWRlc2NcIj4ke2VzY2FwZUh0bWwoYXJlYS5kZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIGludGVyYWN0aW9uIHN0eWxlIHNlY3Rpb25cbiAgY29uc3QgaW50ZXJhY3Rpb25TdHlsZSA9IGluc2lnaHRzLmludGVyYWN0aW9uX3N0eWxlXG4gIGNvbnN0IGludGVyYWN0aW9uSHRtbCA9IGludGVyYWN0aW9uU3R5bGU/Lm5hcnJhdGl2ZVxuICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tdXNhZ2VcIj5Ib3cgWW91IFVzZSBCbGF1ZGU8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJuYXJyYXRpdmVcIj5cbiAgICAgICR7bWFya2Rvd25Ub0h0bWwoaW50ZXJhY3Rpb25TdHlsZS5uYXJyYXRpdmUpfVxuICAgICAgJHtpbnRlcmFjdGlvblN0eWxlLmtleV9wYXR0ZXJuID8gYDxkaXYgY2xhc3M9XCJrZXktaW5zaWdodFwiPjxzdHJvbmc+S2V5IHBhdHRlcm46PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbChpbnRlcmFjdGlvblN0eWxlLmtleV9wYXR0ZXJuKX08L2Rpdj5gIDogJyd9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIDogJydcblxuICAvLyBCdWlsZCB3aGF0IHdvcmtzIHNlY3Rpb25cbiAgY29uc3Qgd2hhdFdvcmtzID0gaW5zaWdodHMud2hhdF93b3Jrc1xuICBjb25zdCB3aGF0V29ya3NIdG1sID1cbiAgICB3aGF0V29ya3M/LmltcHJlc3NpdmVfd29ya2Zsb3dzICYmIHdoYXRXb3Jrcy5pbXByZXNzaXZlX3dvcmtmbG93cy5sZW5ndGggPiAwXG4gICAgICA/IGBcbiAgICA8aDIgaWQ9XCJzZWN0aW9uLXdpbnNcIj5JbXByZXNzaXZlIFRoaW5ncyBZb3UgRGlkPC9oMj5cbiAgICAke3doYXRXb3Jrcy5pbnRybyA/IGA8cCBjbGFzcz1cInNlY3Rpb24taW50cm9cIj4ke2VzY2FwZUh0bWwod2hhdFdvcmtzLmludHJvKX08L3A+YCA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJiaWctd2luc1wiPlxuICAgICAgJHt3aGF0V29ya3MuaW1wcmVzc2l2ZV93b3JrZmxvd3NcbiAgICAgICAgLm1hcChcbiAgICAgICAgICB3ZiA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiaWctd2luXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJpZy13aW4tdGl0bGVcIj4ke2VzY2FwZUh0bWwod2YudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiaWctd2luLWRlc2NcIj4ke2VzY2FwZUh0bWwod2YuZGVzY3JpcHRpb24gfHwgJycpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJycpfVxuICAgIDwvZGl2PlxuICAgIGBcbiAgICAgIDogJydcblxuICAvLyBCdWlsZCBmcmljdGlvbiBzZWN0aW9uXG4gIGNvbnN0IGZyaWN0aW9uQW5hbHlzaXMgPSBpbnNpZ2h0cy5mcmljdGlvbl9hbmFseXNpc1xuICBjb25zdCBmcmljdGlvbkh0bWwgPVxuICAgIGZyaWN0aW9uQW5hbHlzaXM/LmNhdGVnb3JpZXMgJiYgZnJpY3Rpb25BbmFseXNpcy5jYXRlZ29yaWVzLmxlbmd0aCA+IDBcbiAgICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tZnJpY3Rpb25cIj5XaGVyZSBUaGluZ3MgR28gV3Jvbmc8L2gyPlxuICAgICR7ZnJpY3Rpb25BbmFseXNpcy5pbnRybyA/IGA8cCBjbGFzcz1cInNlY3Rpb24taW50cm9cIj4ke2VzY2FwZUh0bWwoZnJpY3Rpb25BbmFseXNpcy5pbnRybyl9PC9wPmAgOiAnJ31cbiAgICA8ZGl2IGNsYXNzPVwiZnJpY3Rpb24tY2F0ZWdvcmllc1wiPlxuICAgICAgJHtmcmljdGlvbkFuYWx5c2lzLmNhdGVnb3JpZXNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBjYXQgPT4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnJpY3Rpb24tY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJpY3Rpb24tdGl0bGVcIj4ke2VzY2FwZUh0bWwoY2F0LmNhdGVnb3J5IHx8ICcnKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJpY3Rpb24tZGVzY1wiPiR7ZXNjYXBlSHRtbChjYXQuZGVzY3JpcHRpb24gfHwgJycpfTwvZGl2PlxuICAgICAgICAgICR7Y2F0LmV4YW1wbGVzID8gYDx1bCBjbGFzcz1cImZyaWN0aW9uLWV4YW1wbGVzXCI+JHtjYXQuZXhhbXBsZXMubWFwKGV4ID0+IGA8bGk+JHtlc2NhcGVIdG1sKGV4KX08L2xpPmApLmpvaW4oJycpfTwvdWw+YCA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJycpfVxuICAgIDwvZGl2PlxuICAgIGBcbiAgICAgIDogJydcblxuICAvLyBCdWlsZCBzdWdnZXN0aW9ucyBzZWN0aW9uXG4gIGNvbnN0IHN1Z2dlc3Rpb25zID0gaW5zaWdodHMuc3VnZ2VzdGlvbnNcbiAgY29uc3Qgc3VnZ2VzdGlvbnNIdG1sID0gc3VnZ2VzdGlvbnNcbiAgICA/IGBcbiAgICAke1xuICAgICAgc3VnZ2VzdGlvbnMuY2xhdWRlX21kX2FkZGl0aW9ucyAmJlxuICAgICAgc3VnZ2VzdGlvbnMuY2xhdWRlX21kX2FkZGl0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tZmVhdHVyZXNcIj5FeGlzdGluZyBDQyBGZWF0dXJlcyB0byBUcnk8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJjbGF1ZGUtbWQtc2VjdGlvblwiPlxuICAgICAgPGgzPlN1Z2dlc3RlZCBDTEFVREUubWQgQWRkaXRpb25zPC9oMz5cbiAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogMTJweDtcIj5KdXN0IGNvcHkgdGhpcyBpbnRvIEJsYXVkZSB0byBhZGQgaXQgdG8geW91ciBDTEFVREUubWQuPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImNsYXVkZS1tZC1hY3Rpb25zXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3B5LWFsbC1idG5cIiBvbmNsaWNrPVwiY29weUFsbENoZWNrZWRDbGF1ZGVNZCgpXCI+Q29weSBBbGwgQ2hlY2tlZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICAke3N1Z2dlc3Rpb25zLmNsYXVkZV9tZF9hZGRpdGlvbnNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAoYWRkLCBpKSA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGF1ZGUtbWQtaXRlbVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNtZC0ke2l9XCIgY2xhc3M9XCJjbWQtY2hlY2tib3hcIiBjaGVja2VkIGRhdGEtdGV4dD1cIiR7ZXNjYXBlSHRtbChhZGQucHJvbXB0X3NjYWZmb2xkIHx8IGFkZC53aGVyZSB8fCAnQWRkIHRvIENMQVVERS5tZCcpfVxcXFxuXFxcXG4ke2VzY2FwZUh0bWwoYWRkLmFkZGl0aW9uKX1cIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY21kLSR7aX1cIj5cbiAgICAgICAgICAgIDxjb2RlIGNsYXNzPVwiY21kLWNvZGVcIj4ke2VzY2FwZUh0bWwoYWRkLmFkZGl0aW9uKX08L2NvZGU+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29weS1idG5cIiBvbmNsaWNrPVwiY29weUNtZEl0ZW0oJHtpfSlcIj5Db3B5PC9idXR0b24+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21kLXdoeVwiPiR7ZXNjYXBlSHRtbChhZGQud2h5KX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKX1cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICAgIDogJydcbiAgICB9XG4gICAgJHtcbiAgICAgIHN1Z2dlc3Rpb25zLmZlYXR1cmVzX3RvX3RyeSAmJiBzdWdnZXN0aW9ucy5mZWF0dXJlc190b190cnkubGVuZ3RoID4gMFxuICAgICAgICA/IGBcbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi1ib3R0b206IDEycHg7XCI+SnVzdCBjb3B5IHRoaXMgaW50byBCbGF1ZGUgYW5kIGl0J2xsIHNldCBpdCB1cCBmb3IgeW91LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXMtc2VjdGlvblwiPlxuICAgICAgJHtzdWdnZXN0aW9ucy5mZWF0dXJlc190b190cnlcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBmZWF0ID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGZlYXQuZmVhdHVyZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtb25lbGluZXJcIj4ke2VzY2FwZUh0bWwoZmVhdC5vbmVfbGluZXIgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLXdoeVwiPjxzdHJvbmc+V2h5IGZvciB5b3U6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbChmZWF0LndoeV9mb3JfeW91IHx8ICcnKX08L2Rpdj5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZmVhdC5leGFtcGxlX2NvZGVcbiAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtZXhhbXBsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29kZS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImV4YW1wbGUtY29kZVwiPiR7ZXNjYXBlSHRtbChmZWF0LmV4YW1wbGVfY29kZSl9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3B5LWJ0blwiIG9uY2xpY2s9XCJjb3B5VGV4dCh0aGlzKVwiPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgICA6ICcnXG4gICAgfVxuICAgICR7XG4gICAgICBzdWdnZXN0aW9ucy51c2FnZV9wYXR0ZXJucyAmJiBzdWdnZXN0aW9ucy51c2FnZV9wYXR0ZXJucy5sZW5ndGggPiAwXG4gICAgICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tcGF0dGVybnNcIj5OZXcgV2F5cyB0byBVc2UgQmxhdWRlPC9oMj5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi1ib3R0b206IDEycHg7XCI+SnVzdCBjb3B5IHRoaXMgaW50byBCbGF1ZGUgYW5kIGl0J2xsIHdhbGsgeW91IHRocm91Z2ggaXQuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJwYXR0ZXJucy1zZWN0aW9uXCI+XG4gICAgICAke3N1Z2dlc3Rpb25zLnVzYWdlX3BhdHRlcm5zXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgcGF0ID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdHRlcm4tY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXR0ZXJuLXRpdGxlXCI+JHtlc2NhcGVIdG1sKHBhdC50aXRsZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhdHRlcm4tc3VtbWFyeVwiPiR7ZXNjYXBlSHRtbChwYXQuc3VnZ2VzdGlvbiB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgJHtwYXQuZGV0YWlsID8gYDxkaXYgY2xhc3M9XCJwYXR0ZXJuLWRldGFpbFwiPiR7ZXNjYXBlSHRtbChwYXQuZGV0YWlsKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHBhdC5jb3B5YWJsZV9wcm9tcHRcbiAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlhYmxlLXByb21wdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbXB0LWxhYmVsXCI+UGFzdGUgaW50byBCbGF1ZGU6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29weWFibGUtcHJvbXB0LXJvd1wiPlxuICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImNvcHlhYmxlLXByb21wdFwiPiR7ZXNjYXBlSHRtbChwYXQuY29weWFibGVfcHJvbXB0KX08L2NvZGU+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3B5LWJ0blwiIG9uY2xpY2s9XCJjb3B5VGV4dCh0aGlzKVwiPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKX1cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICAgIDogJydcbiAgICB9XG4gICAgYFxuICAgIDogJydcblxuICAvLyBCdWlsZCBPbiB0aGUgSG9yaXpvbiBzZWN0aW9uXG4gIGNvbnN0IGhvcml6b25EYXRhID0gaW5zaWdodHMub25fdGhlX2hvcml6b25cbiAgY29uc3QgaG9yaXpvbkh0bWwgPVxuICAgIGhvcml6b25EYXRhPy5vcHBvcnR1bml0aWVzICYmIGhvcml6b25EYXRhLm9wcG9ydHVuaXRpZXMubGVuZ3RoID4gMFxuICAgICAgPyBgXG4gICAgPGgyIGlkPVwic2VjdGlvbi1ob3Jpem9uXCI+T24gdGhlIEhvcml6b248L2gyPlxuICAgICR7aG9yaXpvbkRhdGEuaW50cm8gPyBgPHAgY2xhc3M9XCJzZWN0aW9uLWludHJvXCI+JHtlc2NhcGVIdG1sKGhvcml6b25EYXRhLmludHJvKX08L3A+YCA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLXNlY3Rpb25cIj5cbiAgICAgICR7aG9yaXpvbkRhdGEub3Bwb3J0dW5pdGllc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIG9wcCA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbi10aXRsZVwiPiR7ZXNjYXBlSHRtbChvcHAudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLXBvc3NpYmxlXCI+JHtlc2NhcGVIdG1sKG9wcC53aGF0c19wb3NzaWJsZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgJHtvcHAuaG93X3RvX3RyeSA/IGA8ZGl2IGNsYXNzPVwiaG9yaXpvbi10aXBcIj48c3Ryb25nPkdldHRpbmcgc3RhcnRlZDo8L3N0cm9uZz4gJHtlc2NhcGVIdG1sKG9wcC5ob3dfdG9fdHJ5KX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgJHtvcHAuY29weWFibGVfcHJvbXB0ID8gYDxkaXYgY2xhc3M9XCJwYXR0ZXJuLXByb21wdFwiPjxkaXYgY2xhc3M9XCJwcm9tcHQtbGFiZWxcIj5QYXN0ZSBpbnRvIEJsYXVkZTo8L2Rpdj48Y29kZT4ke2VzY2FwZUh0bWwob3BwLmNvcHlhYmxlX3Byb21wdCl9PC9jb2RlPjxidXR0b24gY2xhc3M9XCJjb3B5LWJ0blwiIG9uY2xpY2s9XCJjb3B5VGV4dCh0aGlzKVwiPkNvcHk8L2J1dHRvbj48L2Rpdj5gIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIFRlYW0gRmVlZGJhY2sgc2VjdGlvbiAoY29sbGFwc2libGUsIGFudC1vbmx5KVxuICBjb25zdCBjY0ltcHJvdmVtZW50cyA9XG4gICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50J1xuICAgICAgPyBpbnNpZ2h0cy5jY190ZWFtX2ltcHJvdmVtZW50cz8uaW1wcm92ZW1lbnRzIHx8IFtdXG4gICAgICA6IFtdXG4gIGNvbnN0IG1vZGVsSW1wcm92ZW1lbnRzID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgICA/IGluc2lnaHRzLm1vZGVsX2JlaGF2aW9yX2ltcHJvdmVtZW50cz8uaW1wcm92ZW1lbnRzIHx8IFtdXG4gICAgICA6IFtdXG4gIGNvbnN0IHRlYW1GZWVkYmFja0h0bWwgPVxuICAgIGNjSW1wcm92ZW1lbnRzLmxlbmd0aCA+IDAgfHwgbW9kZWxJbXByb3ZlbWVudHMubGVuZ3RoID4gMFxuICAgICAgPyBgXG4gICAgPGgyIGlkPVwic2VjdGlvbi1mZWVkYmFja1wiIGNsYXNzPVwiZmVlZGJhY2staGVhZGVyXCI+Q2xvc2luZyB0aGUgTG9vcDogRmVlZGJhY2sgZm9yIE90aGVyIFRlYW1zPC9oMj5cbiAgICA8cCBjbGFzcz1cImZlZWRiYWNrLWludHJvXCI+U3VnZ2VzdGlvbnMgZm9yIHRoZSBDQyBwcm9kdWN0IGFuZCBtb2RlbCB0ZWFtcyBiYXNlZCBvbiB5b3VyIHVzYWdlIHBhdHRlcm5zLiBDbGljayB0byBleHBhbmQuPC9wPlxuICAgICR7XG4gICAgICBjY0ltcHJvdmVtZW50cy5sZW5ndGggPiAwXG4gICAgICAgID8gYFxuICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtaGVhZGVyXCIgb25jbGljaz1cInRvZ2dsZUNvbGxhcHNpYmxlKHRoaXMpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29sbGFwc2libGUtYXJyb3dcIj5cdTI1QjY8L3NwYW4+XG4gICAgICAgIDxoMz5Qcm9kdWN0IEltcHJvdmVtZW50cyBmb3IgQ0MgVGVhbTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWdnZXN0aW9ucy1zZWN0aW9uXCI+XG4gICAgICAgICAgJHtjY0ltcHJvdmVtZW50c1xuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgaW1wID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFjay1jYXJkIHRlYW0tY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stdGl0bGVcIj4ke2VzY2FwZUh0bWwoaW1wLnRpdGxlIHx8ICcnKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrLWRldGFpbFwiPiR7ZXNjYXBlSHRtbChpbXAuZGV0YWlsIHx8ICcnKX08L2Rpdj5cbiAgICAgICAgICAgICAgJHtpbXAuZXZpZGVuY2UgPyBgPGRpdiBjbGFzcz1cImZlZWRiYWNrLWV2aWRlbmNlXCI+PGVtPkV2aWRlbmNlOjwvZW0+ICR7ZXNjYXBlSHRtbChpbXAuZXZpZGVuY2UpfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgICA6ICcnXG4gICAgfVxuICAgICR7XG4gICAgICBtb2RlbEltcHJvdmVtZW50cy5sZW5ndGggPiAwXG4gICAgICAgID8gYFxuICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtaGVhZGVyXCIgb25jbGljaz1cInRvZ2dsZUNvbGxhcHNpYmxlKHRoaXMpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29sbGFwc2libGUtYXJyb3dcIj5cdTI1QjY8L3NwYW4+XG4gICAgICAgIDxoMz5Nb2RlbCBCZWhhdmlvciBJbXByb3ZlbWVudHM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VnZ2VzdGlvbnMtc2VjdGlvblwiPlxuICAgICAgICAgICR7bW9kZWxJbXByb3ZlbWVudHNcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIGltcCA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stY2FyZCBtb2RlbC1jYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFjay10aXRsZVwiPiR7ZXNjYXBlSHRtbChpbXAudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stZGV0YWlsXCI+JHtlc2NhcGVIdG1sKGltcC5kZXRhaWwgfHwgJycpfTwvZGl2PlxuICAgICAgICAgICAgICAke2ltcC5ldmlkZW5jZSA/IGA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stZXZpZGVuY2VcIj48ZW0+RXZpZGVuY2U6PC9lbT4gJHtlc2NhcGVIdG1sKGltcC5ldmlkZW5jZSl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICAgIDogJydcbiAgICB9XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIEZ1biBFbmRpbmcgc2VjdGlvblxuICBjb25zdCBmdW5FbmRpbmcgPSBpbnNpZ2h0cy5mdW5fZW5kaW5nXG4gIGNvbnN0IGZ1bkVuZGluZ0h0bWwgPSBmdW5FbmRpbmc/LmhlYWRsaW5lXG4gICAgPyBgXG4gICAgPGRpdiBjbGFzcz1cImZ1bi1lbmRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmdW4taGVhZGxpbmVcIj5cIiR7ZXNjYXBlSHRtbChmdW5FbmRpbmcuaGVhZGxpbmUpfVwiPC9kaXY+XG4gICAgICAke2Z1bkVuZGluZy5kZXRhaWwgPyBgPGRpdiBjbGFzcz1cImZ1bi1kZXRhaWxcIj4ke2VzY2FwZUh0bWwoZnVuRW5kaW5nLmRldGFpbCl9PC9kaXY+YCA6ICcnfVxuICAgIDwvZGl2PlxuICAgIGBcbiAgICA6ICcnXG5cbiAgY29uc3QgY3NzID0gYFxuICAgICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbiAgICBib2R5IHsgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgY29sb3I6ICMzMzQxNTU7IGxpbmUtaGVpZ2h0OiAxLjY1OyBwYWRkaW5nOiA0OHB4IDI0cHg7IH1cbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOiA4MDBweDsgbWFyZ2luOiAwIGF1dG87IH1cbiAgICBoMSB7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMwZjE3MmE7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgIGgyIHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzBmMTcyYTsgbWFyZ2luLXRvcDogNDhweDsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgIC5zdWJ0aXRsZSB7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDE1cHg7IG1hcmdpbi1ib3R0b206IDMycHg7IH1cbiAgICAubmF2LXRvYyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiA4cHg7IG1hcmdpbjogMjRweCAwIDMycHggMDsgcGFkZGluZzogMTZweDsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgfVxuICAgIC5uYXYtdG9jIGEgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHBhZGRpbmc6IDZweCAxMnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IHRyYW5zaXRpb246IGFsbCAwLjE1czsgfVxuICAgIC5uYXYtdG9jIGE6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBjb2xvcjogIzMzNDE1NTsgfVxuICAgIC5zdGF0cy1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDI0cHg7IG1hcmdpbi1ib3R0b206IDQwcHg7IHBhZGRpbmc6IDIwcHggMDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwOyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICAuc3RhdCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzBmMTcyYTsgfVxuICAgIC5zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5hdC1hLWdsYW5jZSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZWYzYzcgMCUsICNmZGU2OGEgMTAwJSk7IGJvcmRlcjogMXB4IHNvbGlkICNmNTllMGI7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDIwcHggMjRweDsgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgIC5nbGFuY2UtdGl0bGUgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjOTI0MDBlOyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gICAgLmdsYW5jZS1zZWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTJweDsgfVxuICAgIC5nbGFuY2Utc2VjdGlvbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM3ODM1MGY7IGxpbmUtaGVpZ2h0OiAxLjY7IH1cbiAgICAuZ2xhbmNlLXNlY3Rpb24gc3Ryb25nIHsgY29sb3I6ICM5MjQwMGU7IH1cbiAgICAuc2VlLW1vcmUgeyBjb2xvcjogI2I0NTMwOTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXNpemU6IDEzcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAuc2VlLW1vcmU6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgIC5wcm9qZWN0LWFyZWFzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XG4gICAgLnByb2plY3QtYXJlYSB7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAuYXJlYS1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgIC5hcmVhLW5hbWUgeyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAjMGYxNzJhOyB9XG4gICAgLmFyZWEtY291bnQgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgICAuYXJlYS1kZXNjIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzQ3NTU2OTsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuICAgIC5uYXJyYXRpdmUgeyBiYWNrZ3JvdW5kOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAyMHB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4gICAgLm5hcnJhdGl2ZSBwIHsgbWFyZ2luLWJvdHRvbTogMTJweDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzQ3NTU2OTsgbGluZS1oZWlnaHQ6IDEuNzsgfVxuICAgIC5rZXktaW5zaWdodCB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTJweCAxNnB4OyBtYXJnaW4tdG9wOiAxMnB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMTY2NTM0OyB9XG4gICAgLnNlY3Rpb24taW50cm8geyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gICAgLmJpZy13aW5zIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4gICAgLmJpZy13aW4geyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAuYmlnLXdpbi10aXRsZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICMxNjY1MzQ7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgIC5iaWctd2luLWRlc2MgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMTU4MDNkOyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmZyaWN0aW9uLWNhdGVnb3JpZXMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IG1hcmdpbi1ib3R0b206IDI0cHg7IH1cbiAgICAuZnJpY3Rpb24tY2F0ZWdvcnkgeyBiYWNrZ3JvdW5kOiAjZmVmMmYyOyBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1OyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAuZnJpY3Rpb24tdGl0bGUgeyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAjOTkxYjFiOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAuZnJpY3Rpb24tZGVzYyB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM3ZjFkMWQ7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgICAuZnJpY3Rpb24tZXhhbXBsZXMgeyBtYXJnaW46IDAgMCAwIDIwcHg7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMzMzQxNTU7IH1cbiAgICAuZnJpY3Rpb24tZXhhbXBsZXMgbGkgeyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbiAgICAuY2xhdWRlLW1kLXNlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICAuY2xhdWRlLW1kLXNlY3Rpb24gaDMgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMWU0MGFmOyBtYXJnaW46IDAgMCAxMnB4IDA7IH1cbiAgICAuY2xhdWRlLW1kLWFjdGlvbnMgeyBtYXJnaW4tYm90dG9tOiAxMnB4OyBwYWRkaW5nLWJvdHRvbTogMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmVhZmU7IH1cbiAgICAuY29weS1hbGwtYnRuIHsgYmFja2dyb3VuZDogIzI1NjNlYjsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogNnB4IDEycHg7IGZvbnQtc2l6ZTogMTJweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNTAwOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAgIC5jb3B5LWFsbC1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4OyB9XG4gICAgLmNvcHktYWxsLWJ0bi5jb3BpZWQgeyBiYWNrZ3JvdW5kOiAjMTZhMzRhOyB9XG4gICAgLmNsYXVkZS1tZC1pdGVtIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA4cHg7IHBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmVhZmU7IH1cbiAgICAuY2xhdWRlLW1kLWl0ZW06bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgICAuY21kLWNoZWNrYm94IHsgbWFyZ2luLXRvcDogMnB4OyB9XG4gICAgLmNtZC1jb2RlIHsgYmFja2dyb3VuZDogd2hpdGU7IHBhZGRpbmc6IDhweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMxZTQwYWY7IGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGRpc3BsYXk6IGJsb2NrOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IGZsZXg6IDE7IH1cbiAgICAuY21kLXdoeSB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IHdpZHRoOiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDI0cHg7IG1hcmdpbi10b3A6IDRweDsgfVxuICAgIC5mZWF0dXJlcy1zZWN0aW9uLCAucGF0dGVybnMtc2VjdGlvbiB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTJweDsgbWFyZ2luOiAxNnB4IDA7IH1cbiAgICAuZmVhdHVyZS1jYXJkIHsgYmFja2dyb3VuZDogI2YwZmRmNDsgYm9yZGVyOiAxcHggc29saWQgIzg2ZWZhYzsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4OyB9XG4gICAgLnBhdHRlcm4tY2FyZCB7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IGJvcmRlcjogMXB4IHNvbGlkICM3ZGQzZmM7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5mZWF0dXJlLXRpdGxlLCAucGF0dGVybi10aXRsZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICMwZjE3MmE7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5mZWF0dXJlLW9uZWxpbmVyIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzQ3NTU2OTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLnBhdHRlcm4tc3VtbWFyeSB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0NzU1Njk7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgIC5mZWF0dXJlLXdoeSwgLnBhdHRlcm4tZGV0YWlsIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzMzNDE1NTsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuICAgIC5mZWF0dXJlLWV4YW1wbGVzIHsgbWFyZ2luLXRvcDogMTJweDsgfVxuICAgIC5mZWF0dXJlLWV4YW1wbGUgeyBwYWRkaW5nOiA4cHggMDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMWZhZTU7IH1cbiAgICAuZmVhdHVyZS1leGFtcGxlOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXRvcDogbm9uZTsgfVxuICAgIC5leGFtcGxlLWRlc2MgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMzM0MTU1OyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAuZXhhbXBsZS1jb2RlLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDhweDsgfVxuICAgIC5leGFtcGxlLWNvZGUgeyBmbGV4OiAxOyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBwYWRkaW5nOiA4cHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzM0MTU1OyBvdmVyZmxvdy14OiBhdXRvOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IH1cbiAgICAuY29weWFibGUtcHJvbXB0LXNlY3Rpb24geyBtYXJnaW4tdG9wOiAxMnB4OyBwYWRkaW5nLXRvcDogMTJweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7IH1cbiAgICAuY29weWFibGUtcHJvbXB0LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDhweDsgfVxuICAgIC5jb3B5YWJsZS1wcm9tcHQgeyBmbGV4OiAxOyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzMzNDE1NTsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IHByZS13cmFwOyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmZlYXR1cmUtY29kZSB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IHBhZGRpbmc6IDEycHg7IGJvcmRlci1yYWRpdXM6IDZweDsgbWFyZ2luLXRvcDogMTJweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogOHB4OyB9XG4gICAgLmZlYXR1cmUtY29kZSBjb2RlIHsgZmxleDogMTsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzMzNDE1NTsgd2hpdGUtc3BhY2U6IHByZS13cmFwOyB9XG4gICAgLnBhdHRlcm4tcHJvbXB0IHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgcGFkZGluZzogMTJweDsgYm9yZGVyLXJhZGl1czogNnB4OyBtYXJnaW4tdG9wOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyB9XG4gICAgLnBhdHRlcm4tcHJvbXB0IGNvZGUgeyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzM0MTU1OyBkaXNwbGF5OiBibG9jazsgd2hpdGUtc3BhY2U6IHByZS13cmFwOyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgICAucHJvbXB0LWxhYmVsIHsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4gICAgLmNvcHktYnRuIHsgYmFja2dyb3VuZDogI2UyZThmMDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA0cHg7IHBhZGRpbmc6IDRweCA4cHg7IGZvbnQtc2l6ZTogMTFweDsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzQ3NTU2OTsgZmxleC1zaHJpbms6IDA7IH1cbiAgICAuY29weS1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiAjY2JkNWUxOyB9XG4gICAgLmNoYXJ0cy1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMjRweDsgbWFyZ2luOiAyNHB4IDA7IH1cbiAgICAuY2hhcnQtY2FyZCB7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAuY2hhcnQtdGl0bGUgeyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gICAgLmJhci1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAuYmFyLWxhYmVsIHsgd2lkdGg6IDEwMHB4OyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNDc1NTY5OyBmbGV4LXNocmluazogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAuYmFyLXRyYWNrIHsgZmxleDogMTsgaGVpZ2h0OiA2cHg7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGJvcmRlci1yYWRpdXM6IDNweDsgbWFyZ2luOiAwIDhweDsgfVxuICAgIC5iYXItZmlsbCB7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLmJhci12YWx1ZSB7IHdpZHRoOiAyOHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgIC5lbXB0eSB7IGNvbG9yOiAjOTRhM2I4OyBmb250LXNpemU6IDEzcHg7IH1cbiAgICAuaG9yaXpvbi1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNnB4OyB9XG4gICAgLmhvcml6b24tY2FyZCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYWY1ZmYgMCUsICNmNWYzZmYgMTAwJSk7IGJvcmRlcjogMXB4IHNvbGlkICNjNGI1ZmQ7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5ob3Jpem9uLXRpdGxlIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzViMjFiNjsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmhvcml6b24tcG9zc2libGUgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMzM0MTU1OyBtYXJnaW4tYm90dG9tOiAxMHB4OyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmhvcml6b24tdGlwIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzZiMjFhODsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyBwYWRkaW5nOiA4cHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgLmZlZWRiYWNrLWhlYWRlciB7IG1hcmdpbi10b3A6IDQ4cHg7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDE2cHg7IH1cbiAgICAuZmVlZGJhY2staW50cm8geyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjOTRhM2I4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gICAgLmZlZWRiYWNrLXNlY3Rpb24geyBtYXJnaW4tdG9wOiAxNnB4OyB9XG4gICAgLmZlZWRiYWNrLXNlY3Rpb24gaDMgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNDc1NTY5OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gICAgLmZlZWRiYWNrLWNhcmQgeyBiYWNrZ3JvdW5kOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gICAgLmZlZWRiYWNrLWNhcmQudGVhbS1jYXJkIHsgYmFja2dyb3VuZDogI2VmZjZmZjsgYm9yZGVyLWNvbG9yOiAjYmZkYmZlOyB9XG4gICAgLmZlZWRiYWNrLWNhcmQubW9kZWwtY2FyZCB7IGJhY2tncm91bmQ6ICNmYWY1ZmY7IGJvcmRlci1jb2xvcjogI2U5ZDVmZjsgfVxuICAgIC5mZWVkYmFjay10aXRsZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMwZjE3MmE7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5mZWVkYmFjay1kZXRhaWwgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNDc1NTY5OyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmZlZWRiYWNrLWV2aWRlbmNlIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgLmZ1bi1lbmRpbmcgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3IDAlLCAjZmRlNjhhIDEwMCUpOyBib3JkZXI6IDFweCBzb2xpZCAjZmJiZjI0OyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAyNHB4OyBtYXJnaW4tdG9wOiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAuZnVuLWhlYWRsaW5lIHsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzc4MzUwZjsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmZ1bi1kZXRhaWwgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjOTI0MDBlOyB9XG4gICAgLmNvbGxhcHNpYmxlLXNlY3Rpb24geyBtYXJnaW4tdG9wOiAxNnB4OyB9XG4gICAgLmNvbGxhcHNpYmxlLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmc6IDEycHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7IH1cbiAgICAuY29sbGFwc2libGUtaGVhZGVyIGgzIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNDc1NTY5OyB9XG4gICAgLmNvbGxhcHNpYmxlLWFycm93IHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzk0YTNiODsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7IH1cbiAgICAuY29sbGFwc2libGUtY29udGVudCB7IGRpc3BsYXk6IG5vbmU7IHBhZGRpbmctdG9wOiAxNnB4OyB9XG4gICAgLmNvbGxhcHNpYmxlLWNvbnRlbnQub3BlbiB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmNvbGxhcHNpYmxlLWhlYWRlci5vcGVuIC5jb2xsYXBzaWJsZS1hcnJvdyB7IHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyAuY2hhcnRzLXJvdyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IC5zdGF0cy1yb3cgeyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XG4gIGBcblxuICBjb25zdCBob3VyQ291bnRzSnNvbiA9IGdldEhvdXJDb3VudHNKc29uKGRhdGEubWVzc2FnZV9ob3VycylcblxuICBjb25zdCBqcyA9IGBcbiAgICBmdW5jdGlvbiB0b2dnbGVDb2xsYXBzaWJsZShoZWFkZXIpIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb3B5VGV4dChidG4pIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBidG4ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUudGV4dENvbnRlbnQpLnRoZW4oKCkgPT4ge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnQ29waWVkISc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4udGV4dENvbnRlbnQgPSAnQ29weSc7IH0sIDIwMDApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvcHlDbWRJdGVtKGlkeCkge1xuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY21kLScgKyBpZHgpO1xuICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjaGVja2JveC5kYXRhc2V0LnRleHQ7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJ0biA9IGNoZWNrYm94Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuY29weS1idG4nKTtcbiAgICAgICAgICBpZiAoYnRuKSB7IGJ0bi50ZXh0Q29udGVudCA9ICdDb3BpZWQhJzsgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi50ZXh0Q29udGVudCA9ICdDb3B5JzsgfSwgMjAwMCk7IH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvcHlBbGxDaGVja2VkQ2xhdWRlTWQoKSB7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNtZC1jaGVja2JveDpjaGVja2VkJyk7XG4gICAgICBjb25zdCB0ZXh0cyA9IFtdO1xuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgaWYgKGNiLmRhdGFzZXQudGV4dCkgeyB0ZXh0cy5wdXNoKGNiLmRhdGFzZXQudGV4dCk7IH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tYmluZWQgPSB0ZXh0cy5qb2luKCdcXFxcbicpO1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcHktYWxsLWJ0bicpO1xuICAgICAgaWYgKGJ0bikge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb21iaW5lZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ0NvcGllZCAnICsgdGV4dHMubGVuZ3RoICsgJyBpdGVtcyEnO1xuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjb3BpZWQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnRleHRDb250ZW50ID0gJ0NvcHkgQWxsIENoZWNrZWQnOyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnY29waWVkJyk7IH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGltZXpvbmUgc2VsZWN0b3IgZm9yIHRpbWUgb2YgZGF5IGNoYXJ0IChkYXRhIGlzIGZyb20gb3VyIG93biBhbmFseXRpY3MsIG5vdCB1c2VyIGlucHV0KVxuICAgIGNvbnN0IHJhd0hvdXJDb3VudHMgPSAke2hvdXJDb3VudHNKc29ufTtcbiAgICBmdW5jdGlvbiB1cGRhdGVIb3VySGlzdG9ncmFtKG9mZnNldEZyb21QVCkge1xuICAgICAgY29uc3QgcGVyaW9kcyA9IFtcbiAgICAgICAgeyBsYWJlbDogXCJNb3JuaW5nICg2LTEyKVwiLCByYW5nZTogWzYsNyw4LDksMTAsMTFdIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiQWZ0ZXJub29uICgxMi0xOClcIiwgcmFuZ2U6IFsxMiwxMywxNCwxNSwxNiwxN10gfSxcbiAgICAgICAgeyBsYWJlbDogXCJFdmVuaW5nICgxOC0yNClcIiwgcmFuZ2U6IFsxOCwxOSwyMCwyMSwyMiwyM10gfSxcbiAgICAgICAgeyBsYWJlbDogXCJOaWdodCAoMC02KVwiLCByYW5nZTogWzAsMSwyLDMsNCw1XSB9XG4gICAgICBdO1xuICAgICAgY29uc3QgYWRqdXN0ZWRDb3VudHMgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgW2hvdXIsIGNvdW50XSBvZiBPYmplY3QuZW50cmllcyhyYXdIb3VyQ291bnRzKSkge1xuICAgICAgICBjb25zdCBuZXdIb3VyID0gKHBhcnNlSW50KGhvdXIpICsgb2Zmc2V0RnJvbVBUICsgMjQpICUgMjQ7XG4gICAgICAgIGFkanVzdGVkQ291bnRzW25ld0hvdXJdID0gKGFkanVzdGVkQ291bnRzW25ld0hvdXJdIHx8IDApICsgY291bnQ7XG4gICAgICB9XG4gICAgICBjb25zdCBwZXJpb2RDb3VudHMgPSBwZXJpb2RzLm1hcChwID0+ICh7XG4gICAgICAgIGxhYmVsOiBwLmxhYmVsLFxuICAgICAgICBjb3VudDogcC5yYW5nZS5yZWR1Y2UoKHN1bSwgaCkgPT4gc3VtICsgKGFkanVzdGVkQ291bnRzW2hdIHx8IDApLCAwKVxuICAgICAgfSkpO1xuICAgICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCguLi5wZXJpb2RDb3VudHMubWFwKHAgPT4gcC5jb3VudCkpIHx8IDE7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91ci1oaXN0b2dyYW0nKTtcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgcGVyaW9kQ291bnRzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cuY2xhc3NOYW1lID0gJ2Jhci1yb3cnO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnYmFyLWxhYmVsJztcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBwLmxhYmVsO1xuICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0cmFjay5jbGFzc05hbWUgPSAnYmFyLXRyYWNrJztcbiAgICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxsLmNsYXNzTmFtZSA9ICdiYXItZmlsbCc7XG4gICAgICAgIGZpbGwuc3R5bGUud2lkdGggPSAocC5jb3VudCAvIG1heENvdW50KSAqIDEwMCArICclJztcbiAgICAgICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyM4YjVjZjYnO1xuICAgICAgICB0cmFjay5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFsdWUuY2xhc3NOYW1lID0gJ2Jhci12YWx1ZSc7XG4gICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gcC5jb3VudDtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRyYWNrKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWV6b25lLXNlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY3VzdG9tSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLW9mZnNldCcpO1xuICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGN1c3RvbUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY3VzdG9tSW5wdXQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1c3RvbUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVwZGF0ZUhvdXJIaXN0b2dyYW0ocGFyc2VJbnQodGhpcy52YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tb2Zmc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludCh0aGlzLnZhbHVlKSArIDg7XG4gICAgICB1cGRhdGVIb3VySGlzdG9ncmFtKG9mZnNldCk7XG4gICAgfSk7XG4gIGBcblxuICByZXR1cm4gYDwhRE9DVFlQRSBodG1sPlxuPGh0bWw+XG48aGVhZD5cbiAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gIDx0aXRsZT5CbGF1ZGUgSW5zaWdodHM8L3RpdGxlPlxuICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gIDxzdHlsZT4ke2Nzc308L3N0eWxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+QmxhdWRlIEluc2lnaHRzPC9oMT5cbiAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+JHtkYXRhLnRvdGFsX21lc3NhZ2VzLnRvTG9jYWxlU3RyaW5nKCl9IG1lc3NhZ2VzIGFjcm9zcyAke2RhdGEudG90YWxfc2Vzc2lvbnN9IHNlc3Npb25zJHtkYXRhLnRvdGFsX3Nlc3Npb25zX3NjYW5uZWQgJiYgZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkID4gZGF0YS50b3RhbF9zZXNzaW9ucyA/IGAgKCR7ZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkLnRvTG9jYWxlU3RyaW5nKCl9IHRvdGFsKWAgOiAnJ30gfCAke2RhdGEuZGF0ZV9yYW5nZS5zdGFydH0gdG8gJHtkYXRhLmRhdGVfcmFuZ2UuZW5kfTwvcD5cblxuICAgICR7YXRBR2xhbmNlSHRtbH1cblxuICAgIDxuYXYgY2xhc3M9XCJuYXYtdG9jXCI+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24td29ya1wiPldoYXQgWW91IFdvcmsgT248L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tdXNhZ2VcIj5Ib3cgWW91IFVzZSBDQzwvYT5cbiAgICAgIDxhIGhyZWY9XCIjc2VjdGlvbi13aW5zXCI+SW1wcmVzc2l2ZSBUaGluZ3M8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tZnJpY3Rpb25cIj5XaGVyZSBUaGluZ3MgR28gV3Jvbmc8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tZmVhdHVyZXNcIj5GZWF0dXJlcyB0byBUcnk8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tcGF0dGVybnNcIj5OZXcgVXNhZ2UgUGF0dGVybnM8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24taG9yaXpvblwiPk9uIHRoZSBIb3Jpem9uPC9hPlxuICAgICAgPGEgaHJlZj1cIiNzZWN0aW9uLWZlZWRiYWNrXCI+VGVhbSBGZWVkYmFjazwvYT5cbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+PGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEudG90YWxfbWVzc2FnZXMudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj48ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPk1lc3NhZ2VzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+KyR7ZGF0YS50b3RhbF9saW5lc19hZGRlZC50b0xvY2FsZVN0cmluZygpfS8tJHtkYXRhLnRvdGFsX2xpbmVzX3JlbW92ZWQudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj48ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPkxpbmVzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLnRvdGFsX2ZpbGVzX21vZGlmaWVkfTwvZGl2PjxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+RmlsZXM8L2Rpdj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+PGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEuZGF5c19hY3RpdmV9PC9kaXY+PGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5EYXlzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLm1lc3NhZ2VzX3Blcl9kYXl9PC9kaXY+PGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Nc2dzL0RheTwvZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHtwcm9qZWN0QXJlYXNIdG1sfVxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPldoYXQgWW91IFdhbnRlZDwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5nb2FsX2NhdGVnb3JpZXMsICcjMjU2M2ViJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPlRvcCBUb29scyBVc2VkPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVCYXJDaGFydChkYXRhLnRvb2xfY291bnRzLCAnIzA4OTFiMicpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+TGFuZ3VhZ2VzPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVCYXJDaGFydChkYXRhLmxhbmd1YWdlcywgJyMxMGI5ODEnKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+U2Vzc2lvbiBUeXBlczwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5zZXNzaW9uX3R5cGVzIHx8IHt9LCAnIzhiNWNmNicpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAke2ludGVyYWN0aW9uSHRtbH1cblxuICAgIDwhLS0gUmVzcG9uc2UgVGltZSBEaXN0cmlidXRpb24gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIiBzdHlsZT1cIm1hcmdpbjogMjRweCAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+VXNlciBSZXNwb25zZSBUaW1lIERpc3RyaWJ1dGlvbjwvZGl2PlxuICAgICAgJHtnZW5lcmF0ZVJlc3BvbnNlVGltZUhpc3RvZ3JhbShkYXRhLnVzZXJfcmVzcG9uc2VfdGltZXMpfVxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDhweDtcIj5cbiAgICAgICAgTWVkaWFuOiAke2RhdGEubWVkaWFuX3Jlc3BvbnNlX3RpbWUudG9GaXhlZCgxKX1zICZidWxsOyBBdmVyYWdlOiAke2RhdGEuYXZnX3Jlc3BvbnNlX3RpbWUudG9GaXhlZCgxKX1zXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gTXVsdGktY2xhdWRpbmcgU2VjdGlvbiAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSkgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIiBzdHlsZT1cIm1hcmdpbjogMjRweCAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+TXVsdGktQ2xhdWRpbmcgKFBhcmFsbGVsIFNlc3Npb25zKTwvZGl2PlxuICAgICAgJHtcbiAgICAgICAgZGF0YS5tdWx0aV9jbGF1ZGluZy5vdmVybGFwX2V2ZW50cyA9PT0gMFxuICAgICAgICAgID8gYFxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IHBhZGRpbmc6IDhweCAwO1wiPlxuICAgICAgICAgIE5vIHBhcmFsbGVsIHNlc3Npb24gdXNhZ2UgZGV0ZWN0ZWQuIFlvdSB0eXBpY2FsbHkgd29yayB3aXRoIG9uZSBCbGF1ZGUgc2Vzc2lvbiBhdCBhIHRpbWUuXG4gICAgICAgIDwvcD5cbiAgICAgIGBcbiAgICAgICAgICA6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogMjRweDsgbWFyZ2luOiAxMnB4IDA7XCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjN2MzYWVkO1wiPiR7ZGF0YS5tdWx0aV9jbGF1ZGluZy5vdmVybGFwX2V2ZW50c308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1wiPk92ZXJsYXAgRXZlbnRzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjN2MzYWVkO1wiPiR7ZGF0YS5tdWx0aV9jbGF1ZGluZy5zZXNzaW9uc19pbnZvbHZlZH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1wiPlNlc3Npb25zIEludm9sdmVkPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjN2MzYWVkO1wiPiR7ZGF0YS50b3RhbF9tZXNzYWdlcyA+IDAgPyBNYXRoLnJvdW5kKCgxMDAgKiBkYXRhLm11bHRpX2NsYXVkaW5nLnVzZXJfbWVzc2FnZXNfZHVyaW5nKSAvIGRhdGEudG90YWxfbWVzc2FnZXMpIDogMH0lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzY0NzQ4YjsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcIj5PZiBNZXNzYWdlczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNDc1NTY5OyBtYXJnaW4tdG9wOiAxMnB4O1wiPlxuICAgICAgICAgIFlvdSBydW4gbXVsdGlwbGUgQmxhdWRlIHNlc3Npb25zIHNpbXVsdGFuZW91c2x5LiBNdWx0aS1jbGF1ZGluZyBpcyBkZXRlY3RlZCB3aGVuIHNlc3Npb25zXG4gICAgICAgICAgb3ZlcmxhcCBpbiB0aW1lLCBzdWdnZXN0aW5nIHBhcmFsbGVsIHdvcmtmbG93cy5cbiAgICAgICAgPC9wPlxuICAgICAgYFxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBUaW1lIG9mIERheSAmIFRvb2wgRXJyb3JzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjaGFydHMtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtdGl0bGVcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcIj5cbiAgICAgICAgICBVc2VyIE1lc3NhZ2VzIGJ5IFRpbWUgb2YgRGF5XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInRpbWV6b25lLXNlbGVjdFwiIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiA0cHggOHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPlBUIChVVEMtOCk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+RVQgKFVUQy01KTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj5Mb25kb24gKFVUQyk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+Q0VUIChVVEMrMSk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxN1wiPlRva3lvIChVVEMrOSk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjdXN0b21cIj5DdXN0b20gb2Zmc2V0Li4uPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImN1c3RvbS1vZmZzZXRcIiBwbGFjZWhvbGRlcj1cIlVUQyBvZmZzZXRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7IHdpZHRoOiA4MHB4OyBmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDRweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtnZW5lcmF0ZVRpbWVPZkRheUNoYXJ0KGRhdGEubWVzc2FnZV9ob3Vycyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPlRvb2wgRXJyb3JzIEVuY291bnRlcmVkPC9kaXY+XG4gICAgICAgICR7T2JqZWN0LmtleXMoZGF0YS50b29sX2Vycm9yX2NhdGVnb3JpZXMpLmxlbmd0aCA+IDAgPyBnZW5lcmF0ZUJhckNoYXJ0KGRhdGEudG9vbF9lcnJvcl9jYXRlZ29yaWVzLCAnI2RjMjYyNicpIDogJzxwIGNsYXNzPVwiZW1wdHlcIj5ObyB0b29sIGVycm9yczwvcD4nfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAke3doYXRXb3Jrc0h0bWx9XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+V2hhdCBIZWxwZWQgTW9zdCAoQ2xhdWRlJ3MgQ2FwYWJpbGl0aWVzKTwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5zdWNjZXNzLCAnIzE2YTM0YScpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtdGl0bGVcIj5PdXRjb21lczwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5vdXRjb21lcywgJyM4YjVjZjYnLCA2LCBPVVRDT01FX09SREVSKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHtmcmljdGlvbkh0bWx9XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+UHJpbWFyeSBGcmljdGlvbiBUeXBlczwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5mcmljdGlvbiwgJyNkYzI2MjYnKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+SW5mZXJyZWQgU2F0aXNmYWN0aW9uIChtb2RlbC1lc3RpbWF0ZWQpPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVCYXJDaGFydChkYXRhLnNhdGlzZmFjdGlvbiwgJyNlYWIzMDgnLCA2LCBTQVRJU0ZBQ1RJT05fT1JERVIpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAke3N1Z2dlc3Rpb25zSHRtbH1cblxuICAgICR7aG9yaXpvbkh0bWx9XG5cbiAgICAke2Z1bkVuZGluZ0h0bWx9XG5cbiAgICAke3RlYW1GZWVkYmFja0h0bWx9XG4gIDwvZGl2PlxuICA8c2NyaXB0PiR7anN9PC9zY3JpcHQ+XG48L2JvZHk+XG48L2h0bWw+YFxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHBvcnQgVHlwZXMgJiBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBTdHJ1Y3R1cmVkIGV4cG9ydCBmb3JtYXQgZm9yIGNsYXVkZXNjb3BlIGNvbnN1bXB0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIEluc2lnaHRzRXhwb3J0ID0ge1xuICBtZXRhZGF0YToge1xuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBnZW5lcmF0ZWRfYXQ6IHN0cmluZ1xuICAgIGNsYXVkZV9jb2RlX3ZlcnNpb246IHN0cmluZ1xuICAgIGRhdGVfcmFuZ2U6IHsgc3RhcnQ6IHN0cmluZzsgZW5kOiBzdHJpbmcgfVxuICAgIHNlc3Npb25fY291bnQ6IG51bWJlclxuICAgIHJlbW90ZV9ob3N0c19jb2xsZWN0ZWQ/OiBzdHJpbmdbXVxuICB9XG4gIGFnZ3JlZ2F0ZWRfZGF0YTogQWdncmVnYXRlZERhdGFcbiAgaW5zaWdodHM6IEluc2lnaHRSZXN1bHRzXG4gIGZhY2V0c19zdW1tYXJ5Pzoge1xuICAgIHRvdGFsOiBudW1iZXJcbiAgICBnb2FsX2NhdGVnb3JpZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgICBvdXRjb21lczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICAgIHNhdGlzZmFjdGlvbjogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICAgIGZyaWN0aW9uOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZCBleHBvcnQgZGF0YSBmcm9tIGFscmVhZHktY29tcHV0ZWQgdmFsdWVzLlxuICogVXNlZCBieSBiYWNrZ3JvdW5kIHVwbG9hZCB0byBTMy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRXhwb3J0RGF0YShcbiAgZGF0YTogQWdncmVnYXRlZERhdGEsXG4gIGluc2lnaHRzOiBJbnNpZ2h0UmVzdWx0cyxcbiAgZmFjZXRzOiBNYXA8c3RyaW5nLCBTZXNzaW9uRmFjZXRzPixcbiAgcmVtb3RlU3RhdHM/OiB7IGhvc3RzOiBSZW1vdGVIb3N0SW5mb1tdOyB0b3RhbENvcGllZDogbnVtYmVyIH0sXG4pOiBJbnNpZ2h0c0V4cG9ydCB7XG4gIGNvbnN0IHZlcnNpb24gPSB0eXBlb2YgTUFDUk8gIT09ICd1bmRlZmluZWQnID8gTUFDUk8uVkVSU0lPTiA6ICd1bmtub3duJ1xuXG4gIGNvbnN0IHJlbW90ZV9ob3N0c19jb2xsZWN0ZWQgPSByZW1vdGVTdGF0cz8uaG9zdHNcbiAgICAuZmlsdGVyKGggPT4gaC5zZXNzaW9uQ291bnQgPiAwKVxuICAgIC5tYXAoaCA9PiBoLm5hbWUpXG5cbiAgY29uc3QgZmFjZXRzX3N1bW1hcnkgPSB7XG4gICAgdG90YWw6IGZhY2V0cy5zaXplLFxuICAgIGdvYWxfY2F0ZWdvcmllczoge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgICBvdXRjb21lczoge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgICBzYXRpc2ZhY3Rpb246IHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4gICAgZnJpY3Rpb246IHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4gIH1cbiAgZm9yIChjb25zdCBmIG9mIGZhY2V0cy52YWx1ZXMoKSkge1xuICAgIGZvciAoY29uc3QgW2NhdCwgY291bnRdIG9mIHNhZmVFbnRyaWVzKGYuZ29hbF9jYXRlZ29yaWVzKSkge1xuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBmYWNldHNfc3VtbWFyeS5nb2FsX2NhdGVnb3JpZXNbY2F0XSA9XG4gICAgICAgICAgKGZhY2V0c19zdW1tYXJ5LmdvYWxfY2F0ZWdvcmllc1tjYXRdIHx8IDApICsgY291bnRcbiAgICAgIH1cbiAgICB9XG4gICAgZmFjZXRzX3N1bW1hcnkub3V0Y29tZXNbZi5vdXRjb21lXSA9XG4gICAgICAoZmFjZXRzX3N1bW1hcnkub3V0Y29tZXNbZi5vdXRjb21lXSB8fCAwKSArIDFcbiAgICBmb3IgKGNvbnN0IFtsZXZlbCwgY291bnRdIG9mIHNhZmVFbnRyaWVzKGYudXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzKSkge1xuICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBmYWNldHNfc3VtbWFyeS5zYXRpc2ZhY3Rpb25bbGV2ZWxdID1cbiAgICAgICAgICAoZmFjZXRzX3N1bW1hcnkuc2F0aXNmYWN0aW9uW2xldmVsXSB8fCAwKSArIGNvdW50XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgW3R5cGUsIGNvdW50XSBvZiBzYWZlRW50cmllcyhmLmZyaWN0aW9uX2NvdW50cykpIHtcbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgZmFjZXRzX3N1bW1hcnkuZnJpY3Rpb25bdHlwZV0gPVxuICAgICAgICAgIChmYWNldHNfc3VtbWFyeS5mcmljdGlvblt0eXBlXSB8fCAwKSArIGNvdW50XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhZGF0YToge1xuICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LlNBRkVVU0VSIHx8IHByb2Nlc3MuZW52LlVTRVIgfHwgJ3Vua25vd24nLFxuICAgICAgZ2VuZXJhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBjbGF1ZGVfY29kZV92ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgZGF0ZV9yYW5nZTogZGF0YS5kYXRlX3JhbmdlLFxuICAgICAgc2Vzc2lvbl9jb3VudDogZGF0YS50b3RhbF9zZXNzaW9ucyxcbiAgICAgIC4uLihyZW1vdGVfaG9zdHNfY29sbGVjdGVkICYmXG4gICAgICAgIHJlbW90ZV9ob3N0c19jb2xsZWN0ZWQubGVuZ3RoID4gMCAmJiB7XG4gICAgICAgICAgcmVtb3RlX2hvc3RzX2NvbGxlY3RlZCxcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICBhZ2dyZWdhdGVkX2RhdGE6IGRhdGEsXG4gICAgaW5zaWdodHMsXG4gICAgZmFjZXRzX3N1bW1hcnksXG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTGl0ZSBTZXNzaW9uIFNjYW5uaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgTGl0ZVNlc3Npb25JbmZvID0ge1xuICBzZXNzaW9uSWQ6IHN0cmluZ1xuICBwYXRoOiBzdHJpbmdcbiAgbXRpbWU6IG51bWJlclxuICBzaXplOiBudW1iZXJcbn1cblxuLyoqXG4gKiBTY2FucyBhbGwgcHJvamVjdCBkaXJlY3RvcmllcyB1c2luZyBmaWxlc3lzdGVtIG1ldGFkYXRhIG9ubHkgKG5vIEpTT05MIHBhcnNpbmcpLlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygc2Vzc2lvbiBmaWxlIGluZm8gc29ydGVkIGJ5IG10aW1lIGRlc2NlbmRpbmcuXG4gKiBZaWVsZHMgdG8gdGhlIGV2ZW50IGxvb3AgYmV0d2VlbiBwcm9qZWN0IGRpcmVjdG9yaWVzIHRvIGtlZXAgdGhlIFVJIHJlc3BvbnNpdmUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNjYW5BbGxTZXNzaW9ucygpOiBQcm9taXNlPExpdGVTZXNzaW9uSW5mb1tdPiB7XG4gIGNvbnN0IHByb2plY3RzRGlyID0gZ2V0UHJvamVjdHNEaXIoKVxuXG4gIGxldCBkaXJlbnRzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICB0cnkge1xuICAgIGRpcmVudHMgPSBhd2FpdCByZWFkZGlyKHByb2plY3RzRGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBjb25zdCBwcm9qZWN0RGlycyA9IGRpcmVudHNcbiAgICAuZmlsdGVyKGRpcmVudCA9PiBkaXJlbnQuaXNEaXJlY3RvcnkoKSlcbiAgICAubWFwKGRpcmVudCA9PiBqb2luKHByb2plY3RzRGlyLCBkaXJlbnQubmFtZSkpXG5cbiAgY29uc3QgYWxsU2Vzc2lvbnM6IExpdGVTZXNzaW9uSW5mb1tdID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3REaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2Vzc2lvbkZpbGVzID0gYXdhaXQgZ2V0U2Vzc2lvbkZpbGVzV2l0aE10aW1lKHByb2plY3REaXJzW2ldISlcbiAgICBmb3IgKGNvbnN0IFtzZXNzaW9uSWQsIGZpbGVJbmZvXSBvZiBzZXNzaW9uRmlsZXMpIHtcbiAgICAgIGFsbFNlc3Npb25zLnB1c2goe1xuICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgIHBhdGg6IGZpbGVJbmZvLnBhdGgsXG4gICAgICAgIG10aW1lOiBmaWxlSW5mby5tdGltZSxcbiAgICAgICAgc2l6ZTogZmlsZUluZm8uc2l6ZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIFlpZWxkIHRvIGV2ZW50IGxvb3AgZXZlcnkgMTAgcHJvamVjdCBkaXJlY3Rvcmllc1xuICAgIGlmIChpICUgMTAgPT09IDkpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gc2V0SW1tZWRpYXRlKHJlc29sdmUpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFNvcnQgYnkgbXRpbWUgZGVzY2VuZGluZyAobW9zdCByZWNlbnQgZmlyc3QpXG4gIGFsbFNlc3Npb25zLnNvcnQoKGEsIGIpID0+IGIubXRpbWUgLSBhLm10aW1lKVxuICByZXR1cm4gYWxsU2Vzc2lvbnNcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWFpbiBGdW5jdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVVc2FnZVJlcG9ydChvcHRpb25zPzoge1xuICBjb2xsZWN0UmVtb3RlPzogYm9vbGVhblxufSk6IFByb21pc2U8e1xuICBpbnNpZ2h0czogSW5zaWdodFJlc3VsdHNcbiAgaHRtbFBhdGg6IHN0cmluZ1xuICBkYXRhOiBBZ2dyZWdhdGVkRGF0YVxuICByZW1vdGVTdGF0cz86IHsgaG9zdHM6IFJlbW90ZUhvc3RJbmZvW107IHRvdGFsQ29waWVkOiBudW1iZXIgfVxuICBmYWNldHM6IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+XG59PiB7XG4gIGxldCByZW1vdGVTdGF0czogeyBob3N0czogUmVtb3RlSG9zdEluZm9bXTsgdG90YWxDb3BpZWQ6IG51bWJlciB9IHwgdW5kZWZpbmVkXG5cbiAgLy8gT3B0aW9uYWxseSBjb2xsZWN0IGRhdGEgZnJvbSByZW1vdGUgaG9zdHMgZmlyc3QgKGFudC1vbmx5KVxuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJiBvcHRpb25zPy5jb2xsZWN0UmVtb3RlKSB7XG4gICAgY29uc3QgZGVzdERpciA9IGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAncHJvamVjdHMnKVxuICAgIGNvbnN0IHsgaG9zdHMsIHRvdGFsQ29waWVkIH0gPSBhd2FpdCBjb2xsZWN0QWxsUmVtb3RlSG9zdERhdGEoZGVzdERpcilcbiAgICByZW1vdGVTdGF0cyA9IHsgaG9zdHMsIHRvdGFsQ29waWVkIH1cbiAgfVxuXG4gIC8vIFBoYXNlIDE6IExpdGUgc2NhbiBcdTIwMTQgZmlsZXN5c3RlbSBtZXRhZGF0YSBvbmx5IChubyBKU09OTCBwYXJzaW5nKVxuICBjb25zdCBhbGxTY2FubmVkU2Vzc2lvbnMgPSBhd2FpdCBzY2FuQWxsU2Vzc2lvbnMoKVxuICBjb25zdCB0b3RhbFNlc3Npb25zU2Nhbm5lZCA9IGFsbFNjYW5uZWRTZXNzaW9ucy5sZW5ndGhcblxuICAvLyBQaGFzZSAyOiBMb2FkIFNlc3Npb25NZXRhIFx1MjAxNCB1c2UgY2FjaGUgd2hlcmUgYXZhaWxhYmxlLCBwYXJzZSBvbmx5IHVuY2FjaGVkXG4gIC8vIFJlYWQgY2FjaGVkIG1ldGFzIGluIHBhcmFsbGVsIGJhdGNoZXMgdG8gYXZvaWQgYmxvY2tpbmcgdGhlIGV2ZW50IGxvb3BcbiAgY29uc3QgTUVUQV9CQVRDSF9TSVpFID0gNTBcbiAgY29uc3QgTUFYX1NFU1NJT05TX1RPX0xPQUQgPSAyMDBcbiAgbGV0IGFsbE1ldGFzOiBTZXNzaW9uTWV0YVtdID0gW11cbiAgY29uc3QgdW5jYWNoZWRTZXNzaW9uczogTGl0ZVNlc3Npb25JbmZvW10gPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2Nhbm5lZFNlc3Npb25zLmxlbmd0aDsgaSArPSBNRVRBX0JBVENIX1NJWkUpIHtcbiAgICBjb25zdCBiYXRjaCA9IGFsbFNjYW5uZWRTZXNzaW9ucy5zbGljZShpLCBpICsgTUVUQV9CQVRDSF9TSVpFKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGJhdGNoLm1hcChhc3luYyBzZXNzaW9uSW5mbyA9PiAoe1xuICAgICAgICBzZXNzaW9uSW5mbyxcbiAgICAgICAgY2FjaGVkOiBhd2FpdCBsb2FkQ2FjaGVkU2Vzc2lvbk1ldGEoc2Vzc2lvbkluZm8uc2Vzc2lvbklkKSxcbiAgICAgIH0pKSxcbiAgICApXG4gICAgZm9yIChjb25zdCB7IHNlc3Npb25JbmZvLCBjYWNoZWQgfSBvZiByZXN1bHRzKSB7XG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIGFsbE1ldGFzLnB1c2goY2FjaGVkKVxuICAgICAgfSBlbHNlIGlmICh1bmNhY2hlZFNlc3Npb25zLmxlbmd0aCA8IE1BWF9TRVNTSU9OU19UT19MT0FEKSB7XG4gICAgICAgIHVuY2FjaGVkU2Vzc2lvbnMucHVzaChzZXNzaW9uSW5mbylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBMb2FkIGZ1bGwgbWVzc2FnZSBkYXRhIG9ubHkgZm9yIHVuY2FjaGVkIHNlc3Npb25zIGFuZCBjb21wdXRlIFNlc3Npb25NZXRhXG4gIGNvbnN0IGxvZ3NGb3JGYWNldHMgPSBuZXcgTWFwPHN0cmluZywgTG9nT3B0aW9uPigpXG5cbiAgLy8gRmlsdGVyIG91dCAvaW5zaWdodHMgbWV0YS1zZXNzaW9ucyAoZmFjZXQgZXh0cmFjdGlvbiBBUEkgY2FsbHMgZ2V0IGxvZ2dlZCBhcyBzZXNzaW9ucylcbiAgY29uc3QgaXNNZXRhU2Vzc2lvbiA9IChsb2c6IExvZ09wdGlvbik6IGJvb2xlYW4gPT4ge1xuICAgIGZvciAoY29uc3QgbXNnIG9mIGxvZy5tZXNzYWdlcy5zbGljZSgwLCA1KSkge1xuICAgICAgaWYgKG1zZy50eXBlID09PSAndXNlcicgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbnRlbnQuaW5jbHVkZXMoJ1JFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1QnKSB8fFxuICAgICAgICAgICAgY29udGVudC5pbmNsdWRlcygncmVjb3JkX2ZhY2V0cycpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIExvYWQgdW5jYWNoZWQgc2Vzc2lvbnMgaW4gYmF0Y2hlcyB0byB5aWVsZCB0byBldmVudCBsb29wIGJldHdlZW4gYmF0Y2hlc1xuICBjb25zdCBMT0FEX0JBVENIX1NJWkUgPSAxMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVuY2FjaGVkU2Vzc2lvbnMubGVuZ3RoOyBpICs9IExPQURfQkFUQ0hfU0laRSkge1xuICAgIGNvbnN0IGJhdGNoID0gdW5jYWNoZWRTZXNzaW9ucy5zbGljZShpLCBpICsgTE9BRF9CQVRDSF9TSVpFKVxuICAgIGNvbnN0IGJhdGNoUmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgYmF0Y2gubWFwKGFzeW5jIHNlc3Npb25JbmZvID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgbG9hZEFsbExvZ3NGcm9tU2Vzc2lvbkZpbGUoc2Vzc2lvbkluZm8ucGF0aClcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIClcbiAgICAvLyBDb2xsZWN0IG1ldGFzIHN5bmNocm9ub3VzbHksIHRoZW4gc2F2ZSB0aGVtIGluIHBhcmFsbGVsIChpbmRlcGVuZGVudCB3cml0ZXMpXG4gICAgY29uc3QgbWV0YXNUb1NhdmU6IFNlc3Npb25NZXRhW10gPSBbXVxuICAgIGZvciAoY29uc3QgbG9ncyBvZiBiYXRjaFJlc3VsdHMpIHtcbiAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgaWYgKGlzTWV0YVNlc3Npb24obG9nKSB8fCAhaGFzVmFsaWREYXRlcyhsb2cpKSBjb250aW51ZVxuICAgICAgICBjb25zdCBtZXRhID0gbG9nVG9TZXNzaW9uTWV0YShsb2cpXG4gICAgICAgIGFsbE1ldGFzLnB1c2gobWV0YSlcbiAgICAgICAgbWV0YXNUb1NhdmUucHVzaChtZXRhKVxuICAgICAgICAvLyBLZWVwIHRoZSBsb2cgYXJvdW5kIGZvciBwb3RlbnRpYWwgZmFjZXQgZXh0cmFjdGlvblxuICAgICAgICBsb2dzRm9yRmFjZXRzLnNldChtZXRhLnNlc3Npb25faWQsIGxvZylcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobWV0YXNUb1NhdmUubWFwKG1ldGEgPT4gc2F2ZVNlc3Npb25NZXRhKG1ldGEpKSlcbiAgfVxuXG4gIC8vIERlZHVwbGljYXRlIHNlc3Npb24gYnJhbmNoZXMgKGtlZXAgdGhlIG9uZSB3aXRoIG1vc3QgdXNlciBtZXNzYWdlcyBwZXIgc2Vzc2lvbl9pZClcbiAgLy8gVGhpcyBwcmV2ZW50cyBpbmZsYXRlZCB0b3RhbHMgd2hlbiBhIHNlc3Npb24gaGFzIG11bHRpcGxlIGNvbnZlcnNhdGlvbiBicmFuY2hlc1xuICBjb25zdCBiZXN0QnlTZXNzaW9uID0gbmV3IE1hcDxzdHJpbmcsIFNlc3Npb25NZXRhPigpXG4gIGZvciAoY29uc3QgbWV0YSBvZiBhbGxNZXRhcykge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gYmVzdEJ5U2Vzc2lvbi5nZXQobWV0YS5zZXNzaW9uX2lkKVxuICAgIGlmIChcbiAgICAgICFleGlzdGluZyB8fFxuICAgICAgbWV0YS51c2VyX21lc3NhZ2VfY291bnQgPiBleGlzdGluZy51c2VyX21lc3NhZ2VfY291bnQgfHxcbiAgICAgIChtZXRhLnVzZXJfbWVzc2FnZV9jb3VudCA9PT0gZXhpc3RpbmcudXNlcl9tZXNzYWdlX2NvdW50ICYmXG4gICAgICAgIG1ldGEuZHVyYXRpb25fbWludXRlcyA+IGV4aXN0aW5nLmR1cmF0aW9uX21pbnV0ZXMpXG4gICAgKSB7XG4gICAgICBiZXN0QnlTZXNzaW9uLnNldChtZXRhLnNlc3Npb25faWQsIG1ldGEpXG4gICAgfVxuICB9XG4gIC8vIFJlcGxhY2UgYWxsTWV0YXMgd2l0aCBkZWR1cGxpY2F0ZWQgbGlzdCBhbmQgcmVtb3ZlIHVudXNlZCBsb2dzIGZyb20gbG9nc0ZvckZhY2V0c1xuICBjb25zdCBrZXB0U2Vzc2lvbklkcyA9IG5ldyBTZXQoYmVzdEJ5U2Vzc2lvbi5rZXlzKCkpXG4gIGFsbE1ldGFzID0gWy4uLmJlc3RCeVNlc3Npb24udmFsdWVzKCldXG4gIGZvciAoY29uc3Qgc2Vzc2lvbklkIG9mIGxvZ3NGb3JGYWNldHMua2V5cygpKSB7XG4gICAgaWYgKCFrZXB0U2Vzc2lvbklkcy5oYXMoc2Vzc2lvbklkKSkge1xuICAgICAgbG9nc0ZvckZhY2V0cy5kZWxldGUoc2Vzc2lvbklkKVxuICAgIH1cbiAgfVxuXG4gIC8vIFNvcnQgYWxsIG1ldGFzIGJ5IHN0YXJ0X3RpbWUgZGVzY2VuZGluZyAobW9zdCByZWNlbnQgZmlyc3QpXG4gIGFsbE1ldGFzLnNvcnQoKGEsIGIpID0+IGIuc3RhcnRfdGltZS5sb2NhbGVDb21wYXJlKGEuc3RhcnRfdGltZSkpXG5cbiAgLy8gUHJlLWZpbHRlciBvYnZpb3VzbHkgbWluaW1hbCBzZXNzaW9ucyB0byBzYXZlIEFQSSBjYWxsc1xuICAvLyAobWF0Y2hpbmcgUHl0aG9uJ3Mgc3Vic3RhbnRpdmUgZmlsdGVyaW5nIGNvbmNlcHQpXG4gIGNvbnN0IGlzU3Vic3RhbnRpdmVTZXNzaW9uID0gKG1ldGE6IFNlc3Npb25NZXRhKTogYm9vbGVhbiA9PiB7XG4gICAgLy8gU2tpcCBzZXNzaW9ucyB3aXRoIHZlcnkgZmV3IHVzZXIgbWVzc2FnZXNcbiAgICBpZiAobWV0YS51c2VyX21lc3NhZ2VfY291bnQgPCAyKSByZXR1cm4gZmFsc2VcbiAgICAvLyBTa2lwIHZlcnkgc2hvcnQgc2Vzc2lvbnMgKDwgMSBtaW51dGUpXG4gICAgaWYgKG1ldGEuZHVyYXRpb25fbWludXRlcyA8IDEpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCBzdWJzdGFudGl2ZU1ldGFzID0gYWxsTWV0YXMuZmlsdGVyKGlzU3Vic3RhbnRpdmVTZXNzaW9uKVxuXG4gIC8vIFBoYXNlIDM6IEZhY2V0IGV4dHJhY3Rpb24gXHUyMDE0IG9ubHkgZm9yIHNlc3Npb25zIHdpdGhvdXQgY2FjaGVkIGZhY2V0c1xuICBjb25zdCBmYWNldHMgPSBuZXcgTWFwPHN0cmluZywgU2Vzc2lvbkZhY2V0cz4oKVxuICBjb25zdCB0b0V4dHJhY3Q6IEFycmF5PHsgbG9nOiBMb2dPcHRpb247IHNlc3Npb25JZDogc3RyaW5nIH0+ID0gW11cbiAgY29uc3QgTUFYX0ZBQ0VUX0VYVFJBQ1RJT05TID0gNTBcblxuICAvLyBMb2FkIGNhY2hlZCBmYWNldHMgZm9yIGFsbCBzdWJzdGFudGl2ZSBzZXNzaW9ucyBpbiBwYXJhbGxlbFxuICBjb25zdCBjYWNoZWRGYWNldFJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdWJzdGFudGl2ZU1ldGFzLm1hcChhc3luYyBtZXRhID0+ICh7XG4gICAgICBzZXNzaW9uSWQ6IG1ldGEuc2Vzc2lvbl9pZCxcbiAgICAgIGNhY2hlZDogYXdhaXQgbG9hZENhY2hlZEZhY2V0cyhtZXRhLnNlc3Npb25faWQpLFxuICAgIH0pKSxcbiAgKVxuICBmb3IgKGNvbnN0IHsgc2Vzc2lvbklkLCBjYWNoZWQgfSBvZiBjYWNoZWRGYWNldFJlc3VsdHMpIHtcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICBmYWNldHMuc2V0KHNlc3Npb25JZCwgY2FjaGVkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2cgPSBsb2dzRm9yRmFjZXRzLmdldChzZXNzaW9uSWQpXG4gICAgICBpZiAobG9nICYmIHRvRXh0cmFjdC5sZW5ndGggPCBNQVhfRkFDRVRfRVhUUkFDVElPTlMpIHtcbiAgICAgICAgdG9FeHRyYWN0LnB1c2goeyBsb2csIHNlc3Npb25JZCB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEV4dHJhY3QgZmFjZXRzIGZvciBzZXNzaW9ucyB0aGF0IG5lZWQgdGhlbSAoNTAgY29uY3VycmVudClcbiAgY29uc3QgQ09OQ1VSUkVOQ1kgPSA1MFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRXh0cmFjdC5sZW5ndGg7IGkgKz0gQ09OQ1VSUkVOQ1kpIHtcbiAgICBjb25zdCBiYXRjaCA9IHRvRXh0cmFjdC5zbGljZShpLCBpICsgQ09OQ1VSUkVOQ1kpXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgYmF0Y2gubWFwKGFzeW5jICh7IGxvZywgc2Vzc2lvbklkIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RmFjZXRzID0gYXdhaXQgZXh0cmFjdEZhY2V0c0Zyb21BUEkobG9nLCBzZXNzaW9uSWQpXG4gICAgICAgIHJldHVybiB7IHNlc3Npb25JZCwgbmV3RmFjZXRzIH1cbiAgICAgIH0pLFxuICAgIClcbiAgICAvLyBDb2xsZWN0IGZhY2V0cyBzeW5jaHJvbm91c2x5LCBzYXZlIGluIHBhcmFsbGVsIChpbmRlcGVuZGVudCB3cml0ZXMpXG4gICAgY29uc3QgZmFjZXRzVG9TYXZlOiBTZXNzaW9uRmFjZXRzW10gPSBbXVxuICAgIGZvciAoY29uc3QgeyBzZXNzaW9uSWQsIG5ld0ZhY2V0cyB9IG9mIHJlc3VsdHMpIHtcbiAgICAgIGlmIChuZXdGYWNldHMpIHtcbiAgICAgICAgZmFjZXRzLnNldChzZXNzaW9uSWQsIG5ld0ZhY2V0cylcbiAgICAgICAgZmFjZXRzVG9TYXZlLnB1c2gobmV3RmFjZXRzKVxuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChmYWNldHNUb1NhdmUubWFwKGYgPT4gc2F2ZUZhY2V0cyhmKSkpXG4gIH1cblxuICAvLyBGaWx0ZXIgb3V0IHdhcm11cC9taW5pbWFsIHNlc3Npb25zIChtYXRjaGluZyBQeXRob24ncyBpc19taW5pbWFsKVxuICAvLyBBIHNlc3Npb24gaXMgbWluaW1hbCBpZiB3YXJtdXBfbWluaW1hbCBpcyB0aGUgT05MWSBnb2FsIGNhdGVnb3J5XG4gIGNvbnN0IGlzTWluaW1hbFNlc3Npb24gPSAoc2Vzc2lvbklkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzZXNzaW9uRmFjZXRzID0gZmFjZXRzLmdldChzZXNzaW9uSWQpXG4gICAgaWYgKCFzZXNzaW9uRmFjZXRzKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBjYXRzID0gc2Vzc2lvbkZhY2V0cy5nb2FsX2NhdGVnb3JpZXNcbiAgICBjb25zdCBjYXRLZXlzID0gc2FmZUtleXMoY2F0cykuZmlsdGVyKGsgPT4gKGNhdHNba10gPz8gMCkgPiAwKVxuICAgIHJldHVybiBjYXRLZXlzLmxlbmd0aCA9PT0gMSAmJiBjYXRLZXlzWzBdID09PSAnd2FybXVwX21pbmltYWwnXG4gIH1cblxuICBjb25zdCBzdWJzdGFudGl2ZVNlc3Npb25zID0gc3Vic3RhbnRpdmVNZXRhcy5maWx0ZXIoXG4gICAgcyA9PiAhaXNNaW5pbWFsU2Vzc2lvbihzLnNlc3Npb25faWQpLFxuICApXG5cbiAgY29uc3Qgc3Vic3RhbnRpdmVGYWNldHMgPSBuZXcgTWFwPHN0cmluZywgU2Vzc2lvbkZhY2V0cz4oKVxuICBmb3IgKGNvbnN0IFtzZXNzaW9uSWQsIGZdIG9mIGZhY2V0cykge1xuICAgIGlmICghaXNNaW5pbWFsU2Vzc2lvbihzZXNzaW9uSWQpKSB7XG4gICAgICBzdWJzdGFudGl2ZUZhY2V0cy5zZXQoc2Vzc2lvbklkLCBmKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFnZ3JlZ2F0ZWQgPSBhZ2dyZWdhdGVEYXRhKHN1YnN0YW50aXZlU2Vzc2lvbnMsIHN1YnN0YW50aXZlRmFjZXRzKVxuICBhZ2dyZWdhdGVkLnRvdGFsX3Nlc3Npb25zX3NjYW5uZWQgPSB0b3RhbFNlc3Npb25zU2Nhbm5lZFxuXG4gIC8vIEdlbmVyYXRlIHBhcmFsbGVsIGluc2lnaHRzIGZyb20gQ2xhdWRlICg2IHNlY3Rpb25zKVxuICBjb25zdCBpbnNpZ2h0cyA9IGF3YWl0IGdlbmVyYXRlUGFyYWxsZWxJbnNpZ2h0cyhhZ2dyZWdhdGVkLCBmYWNldHMpXG5cbiAgLy8gR2VuZXJhdGUgSFRNTCByZXBvcnRcbiAgY29uc3QgaHRtbFJlcG9ydCA9IGdlbmVyYXRlSHRtbFJlcG9ydChhZ2dyZWdhdGVkLCBpbnNpZ2h0cylcblxuICAvLyBTYXZlIHJlcG9ydHNcbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihnZXREYXRhRGlyKCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH0gY2F0Y2gge1xuICAgIC8vIERpcmVjdG9yeSBtYXkgYWxyZWFkeSBleGlzdFxuICB9XG5cbiAgY29uc3QgaHRtbFBhdGggPSBqb2luKGdldERhdGFEaXIoKSwgJ3JlcG9ydC5odG1sJylcbiAgYXdhaXQgd3JpdGVGaWxlKGh0bWxQYXRoLCBodG1sUmVwb3J0LCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgbW9kZTogMG82MDAsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbnNpZ2h0cyxcbiAgICBodG1sUGF0aCxcbiAgICBkYXRhOiBhZ2dyZWdhdGVkLFxuICAgIHJlbW90ZVN0YXRzLFxuICAgIGZhY2V0czogc3Vic3RhbnRpdmVGYWNldHMsXG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZUVudHJpZXM8Vj4oXG4gIG9iajogUmVjb3JkPHN0cmluZywgVj4gfCB1bmRlZmluZWQgfCBudWxsLFxuKTogW3N0cmluZywgVl1bXSB7XG4gIHJldHVybiBvYmogPyBPYmplY3QuZW50cmllcyhvYmopIDogW11cbn1cblxuZnVuY3Rpb24gc2FmZUtleXMob2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW11cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29tbWFuZCBEZWZpbml0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHVzYWdlUmVwb3J0OiBDb21tYW5kID0ge1xuICB0eXBlOiAncHJvbXB0JyxcbiAgbmFtZTogJ2luc2lnaHRzJyxcbiAgZGVzY3JpcHRpb246ICdHZW5lcmF0ZSBhIHJlcG9ydCBhbmFseXppbmcgeW91ciBCbGF1ZGUgc2Vzc2lvbnMnLFxuICBjb250ZW50TGVuZ3RoOiAwLCAvLyBEeW5hbWljIGNvbnRlbnRcbiAgcHJvZ3Jlc3NNZXNzYWdlOiAnYW5hbHl6aW5nIHlvdXIgc2Vzc2lvbnMnLFxuICBzb3VyY2U6ICdidWlsdGluJyxcbiAgYXN5bmMgZ2V0UHJvbXB0Rm9yQ29tbWFuZChhcmdzKSB7XG4gICAgbGV0IGNvbGxlY3RSZW1vdGUgPSBmYWxzZVxuICAgIGxldCByZW1vdGVIb3N0czogc3RyaW5nW10gPSBbXVxuICAgIGxldCBoYXNSZW1vdGVIb3N0cyA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgLy8gUGFyc2UgLS1ob21lc3BhY2VzIGZsYWdcbiAgICAgIGNvbGxlY3RSZW1vdGUgPSBhcmdzPy5pbmNsdWRlcygnLS1ob21lc3BhY2VzJykgPz8gZmFsc2VcblxuICAgICAgLy8gQ2hlY2sgZm9yIGF2YWlsYWJsZSByZW1vdGUgaG9zdHNcbiAgICAgIHJlbW90ZUhvc3RzID0gYXdhaXQgZ2V0UnVubmluZ1JlbW90ZUhvc3RzKClcbiAgICAgIGhhc1JlbW90ZUhvc3RzID0gcmVtb3RlSG9zdHMubGVuZ3RoID4gMFxuXG4gICAgICAvLyBTaG93IGNvbGxlY3Rpb24gbWVzc2FnZSBpZiBjb2xsZWN0aW5nXG4gICAgICBpZiAoY29sbGVjdFJlbW90ZSAmJiBoYXNSZW1vdGVIb3N0cykge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgQ29sbGVjdGluZyBzZXNzaW9ucyBmcm9tICR7cmVtb3RlSG9zdHMubGVuZ3RofSBob21lc3BhY2Uocyk6ICR7cmVtb3RlSG9zdHMuam9pbignLCAnKX0uLi5gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbnNpZ2h0cywgaHRtbFBhdGgsIGRhdGEsIHJlbW90ZVN0YXRzIH0gPSBhd2FpdCBnZW5lcmF0ZVVzYWdlUmVwb3J0KFxuICAgICAgeyBjb2xsZWN0UmVtb3RlIH0sXG4gICAgKVxuXG4gICAgbGV0IHJlcG9ydFVybCA9IGBmaWxlOi8vJHtodG1sUGF0aH1gXG4gICAgbGV0IHVwbG9hZEhpbnQgPSAnJ1xuXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgIC8vIFRyeSB0byB1cGxvYWQgdG8gUzNcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKClcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1stOl0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKCdUJywgJ18nKVxuICAgICAgICAuc2xpY2UoMCwgMTUpXG4gICAgICBjb25zdCB1c2VybmFtZSA9IHByb2Nlc3MuZW52LlNBRkVVU0VSIHx8IHByb2Nlc3MuZW52LlVTRVIgfHwgJ3Vua25vd24nXG4gICAgICBjb25zdCBmaWxlbmFtZSA9IGAke3VzZXJuYW1lfV9pbnNpZ2h0c18ke3RpbWVzdGFtcH0uaHRtbGBcbiAgICAgIGNvbnN0IHMzUGF0aCA9IGBzMzovL2FudGhyb3BpYy1zZXJ2ZS9hdGFta2luL2NjLXVzZXItcmVwb3J0cy8ke2ZpbGVuYW1lfWBcbiAgICAgIGNvbnN0IHMzVXJsID0gYGh0dHBzOi8vczMtZnJvbnRlbmQuaW5mcmEuYW50LmRldi9hbnRocm9waWMtc2VydmUvYXRhbWtpbi9jYy11c2VyLXJlcG9ydHMvJHtmaWxlbmFtZX1gXG5cbiAgICAgIHJlcG9ydFVybCA9IHMzVXJsXG4gICAgICB0cnkge1xuICAgICAgICBleGVjRmlsZVN5bmMoJ2ZmJywgWydjcCcsIGh0bWxQYXRoLCBzM1BhdGhdLCB7XG4gICAgICAgICAgdGltZW91dDogNjAwMDAsXG4gICAgICAgICAgc3RkaW86ICdwaXBlJywgLy8gU3VwcHJlc3Mgb3V0cHV0XG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gVXBsb2FkIGZhaWxlZCAtIGZhbGwgYmFjayB0byBsb2NhbCBmaWxlIGFuZCBzaG93IHVwbG9hZCBjb21tYW5kXG4gICAgICAgIHJlcG9ydFVybCA9IGBmaWxlOi8vJHtodG1sUGF0aH1gXG4gICAgICAgIHVwbG9hZEhpbnQgPSBgXFxuQXV0b21hdGljIHVwbG9hZCBmYWlsZWQuIEFyZSB5b3Ugb24gdGhlIGJvcm9uIG5hbWVzcGFjZT8gVHJ5IFxcYHVzZS1ib1xcYCBhbmQgZW5zdXJlIHlvdSd2ZSBydW4gXFxgc3NvXFxgLlxuVG8gc2hhcmUsIHJ1bjogZmYgY3AgJHtodG1sUGF0aH0gJHtzM1BhdGh9XG5UaGVuIGFjY2VzcyBhdDogJHtzM1VybH1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgaGVhZGVyIHdpdGggc3RhdHNcbiAgICBjb25zdCBzZXNzaW9uTGFiZWwgPVxuICAgICAgZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkICYmXG4gICAgICBkYXRhLnRvdGFsX3Nlc3Npb25zX3NjYW5uZWQgPiBkYXRhLnRvdGFsX3Nlc3Npb25zXG4gICAgICAgID8gYCR7ZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkLnRvTG9jYWxlU3RyaW5nKCl9IHNlc3Npb25zIHRvdGFsIFx1MDBCNyAke2RhdGEudG90YWxfc2Vzc2lvbnN9IGFuYWx5emVkYFxuICAgICAgICA6IGAke2RhdGEudG90YWxfc2Vzc2lvbnN9IHNlc3Npb25zYFxuICAgIGNvbnN0IHN0YXRzID0gW1xuICAgICAgc2Vzc2lvbkxhYmVsLFxuICAgICAgYCR7ZGF0YS50b3RhbF9tZXNzYWdlcy50b0xvY2FsZVN0cmluZygpfSBtZXNzYWdlc2AsXG4gICAgICBgJHtNYXRoLnJvdW5kKGRhdGEudG90YWxfZHVyYXRpb25faG91cnMpfWhgLFxuICAgICAgYCR7ZGF0YS5naXRfY29tbWl0c30gY29tbWl0c2AsXG4gICAgXS5qb2luKCcgXHUwMEI3ICcpXG5cbiAgICAvLyBCdWlsZCByZW1vdGUgaG9zdCBpbmZvIChhbnQtb25seSlcbiAgICBsZXQgcmVtb3RlSW5mbyA9ICcnXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgIGlmIChyZW1vdGVTdGF0cyAmJiByZW1vdGVTdGF0cy50b3RhbENvcGllZCA+IDApIHtcbiAgICAgICAgY29uc3QgaHNOYW1lcyA9IHJlbW90ZVN0YXRzLmhvc3RzXG4gICAgICAgICAgLmZpbHRlcihoID0+IGguc2Vzc2lvbkNvdW50ID4gMClcbiAgICAgICAgICAubWFwKGggPT4gaC5uYW1lKVxuICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgIHJlbW90ZUluZm8gPSBgXFxuX0NvbGxlY3RlZCAke3JlbW90ZVN0YXRzLnRvdGFsQ29waWVkfSBuZXcgc2Vzc2lvbnMgZnJvbTogJHtoc05hbWVzfV9cXG5gXG4gICAgICB9IGVsc2UgaWYgKCFjb2xsZWN0UmVtb3RlICYmIGhhc1JlbW90ZUhvc3RzKSB7XG4gICAgICAgIC8vIFN1Z2dlc3QgdXNpbmcgLS1ob21lc3BhY2VzIGlmIHRoZXkgaGF2ZSByZW1vdGUgaG9zdHMgYnV0IGRpZG4ndCB1c2UgdGhlIGZsYWdcbiAgICAgICAgcmVtb3RlSW5mbyA9IGBcXG5fVGlwOiBSdW4gXFxgL2luc2lnaHRzIC0taG9tZXNwYWNlc1xcYCB0byBpbmNsdWRlIHNlc3Npb25zIGZyb20geW91ciAke3JlbW90ZUhvc3RzLmxlbmd0aH0gcnVubmluZyBob21lc3BhY2UocylfXFxuYFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIG1hcmtkb3duIHN1bW1hcnkgZnJvbSBpbnNpZ2h0c1xuICAgIGNvbnN0IGF0QUdsYW5jZSA9IGluc2lnaHRzLmF0X2FfZ2xhbmNlXG4gICAgY29uc3Qgc3VtbWFyeVRleHQgPSBhdEFHbGFuY2VcbiAgICAgID8gYCMjIEF0IGEgR2xhbmNlXG5cbiR7YXRBR2xhbmNlLndoYXRzX3dvcmtpbmcgPyBgKipXaGF0J3Mgd29ya2luZzoqKiAke2F0QUdsYW5jZS53aGF0c193b3JraW5nfSBTZWUgX0ltcHJlc3NpdmUgVGhpbmdzIFlvdSBEaWRfLmAgOiAnJ31cblxuJHthdEFHbGFuY2Uud2hhdHNfaGluZGVyaW5nID8gYCoqV2hhdCdzIGhpbmRlcmluZyB5b3U6KiogJHthdEFHbGFuY2Uud2hhdHNfaGluZGVyaW5nfSBTZWUgX1doZXJlIFRoaW5ncyBHbyBXcm9uZ18uYCA6ICcnfVxuXG4ke2F0QUdsYW5jZS5xdWlja193aW5zID8gYCoqUXVpY2sgd2lucyB0byB0cnk6KiogJHthdEFHbGFuY2UucXVpY2tfd2luc30gU2VlIF9GZWF0dXJlcyB0byBUcnlfLmAgOiAnJ31cblxuJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93cyA/IGAqKkFtYml0aW91cyB3b3JrZmxvd3M6KiogJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93c30gU2VlIF9PbiB0aGUgSG9yaXpvbl8uYCA6ICcnfWBcbiAgICAgIDogJ19ObyBpbnNpZ2h0cyBnZW5lcmF0ZWRfJ1xuXG4gICAgY29uc3QgaGVhZGVyID0gYCMgQmxhdWRlIEluc2lnaHRzXG5cbiR7c3RhdHN9XG4ke2RhdGEuZGF0ZV9yYW5nZS5zdGFydH0gdG8gJHtkYXRhLmRhdGVfcmFuZ2UuZW5kfVxuJHtyZW1vdGVJbmZvfVxuYFxuXG4gICAgY29uc3QgdXNlclN1bW1hcnkgPSBgJHtoZWFkZXJ9JHtzdW1tYXJ5VGV4dH1cblxuWW91ciBmdWxsIHNoYXJlYWJsZSBpbnNpZ2h0cyByZXBvcnQgaXMgcmVhZHk6ICR7cmVwb3J0VXJsfSR7dXBsb2FkSGludH1gXG5cbiAgICAvLyBSZXR1cm4gcHJvbXB0IGZvciBDbGF1ZGUgdG8gcmVzcG9uZCB0b1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDogYFRoZSB1c2VyIGp1c3QgcmFuIC9pbnNpZ2h0cyB0byBnZW5lcmF0ZSBhIHVzYWdlIHJlcG9ydCBhbmFseXppbmcgdGhlaXIgQmxhdWRlIHNlc3Npb25zLlxuXG5IZXJlIGlzIHRoZSBmdWxsIGluc2lnaHRzIGRhdGE6XG4ke2pzb25TdHJpbmdpZnkoaW5zaWdodHMsIG51bGwsIDIpfVxuXG5SZXBvcnQgVVJMOiAke3JlcG9ydFVybH1cbkhUTUwgZmlsZTogJHtodG1sUGF0aH1cbkZhY2V0cyBkaXJlY3Rvcnk6ICR7Z2V0RmFjZXRzRGlyKCl9XG5cbkhlcmUgaXMgd2hhdCB0aGUgdXNlciBzZWVzOlxuJHt1c2VyU3VtbWFyeX1cblxuTm93IG91dHB1dCB0aGUgZm9sbG93aW5nIG1lc3NhZ2UgZXhhY3RseTpcblxuPG1lc3NhZ2U+XG5Zb3VyIHNoYXJlYWJsZSBpbnNpZ2h0cyByZXBvcnQgaXMgcmVhZHk6XG4ke3JlcG9ydFVybH0ke3VwbG9hZEhpbnR9XG5cbldhbnQgdG8gZGlnIGludG8gYW55IHNlY3Rpb24gb3IgdHJ5IG9uZSBvZiB0aGUgc3VnZ2VzdGlvbnM/XG48L21lc3NhZ2U+YCxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkU2Vzc2lvbkZhY2V0cyhvYmo6IHVua25vd24pOiBvYmogaXMgU2Vzc2lvbkZhY2V0cyB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgbyA9IG9iaiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICByZXR1cm4gKFxuICAgIHR5cGVvZiBvLnVuZGVybHlpbmdfZ29hbCA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2Ygby5vdXRjb21lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBvLmJyaWVmX3N1bW1hcnkgPT09ICdzdHJpbmcnICYmXG4gICAgby5nb2FsX2NhdGVnb3JpZXMgIT09IG51bGwgJiZcbiAgICB0eXBlb2Ygby5nb2FsX2NhdGVnb3JpZXMgPT09ICdvYmplY3QnICYmXG4gICAgby51c2VyX3NhdGlzZmFjdGlvbl9jb3VudHMgIT09IG51bGwgJiZcbiAgICB0eXBlb2Ygby51c2VyX3NhdGlzZmFjdGlvbl9jb3VudHMgPT09ICdvYmplY3QnICYmXG4gICAgby5mcmljdGlvbl9jb3VudHMgIT09IG51bGwgJiZcbiAgICB0eXBlb2Ygby5mcmljdGlvbl9jb3VudHMgPT09ICdvYmplY3QnXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNhZ2VSZXBvcnRcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0I7QUFFN0IsU0FBUyxhQUFhLG1CQUFtQjtBQUN6QztBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUNQLFNBQVMsY0FBYztBQUN2QixTQUFTLFNBQVMsWUFBWTtBQTBCOUIsU0FBUyxtQkFBMkI7QUFDbEMsU0FBTyxvQkFBb0I7QUFDN0I7QUFHQSxTQUFTLG1CQUEyQjtBQUNsQyxTQUFPLG9CQUFvQjtBQUM3QjtBQW9YQSxTQUFTLGFBQXFCO0FBQzVCLFNBQU8sS0FBSyx1QkFBdUIsR0FBRyxZQUFZO0FBQ3BEO0FBQ0EsU0FBUyxlQUF1QjtBQUM5QixTQUFPLEtBQUssV0FBVyxHQUFHLFFBQVE7QUFDcEM7QUFDQSxTQUFTLG9CQUE0QjtBQUNuQyxTQUFPLEtBQUssV0FBVyxHQUFHLGNBQWM7QUFDMUM7QUFrQ0EsU0FBUyxvQkFBb0IsVUFBaUM7QUFDNUQsUUFBTSxNQUFNLFFBQVEsUUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0haLFFBQU0saUJBQWlCLGtCQUFrQixLQUFLLGFBQWE7QUFFM0QsUUFBTSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBd0NlLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QSxRQVVSLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBT1IsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVdSLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFXUixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF1Q1IsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVdSLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxHQUFJLFFBQVEsSUFBSSxjQUFjLFFBQzFCO0FBQUEsUUFDRTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVVIsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFVUixXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0YsSUFDQSxDQUFDO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVNSLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQXdUQSxJQUFNLHFCQUFxQjtBQUFBLE1BQ3pCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBRUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBaXNDQSxJQUFNLGNBQXVCO0FBQUEsTUFDM0IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBO0FBQUEsTUFDZixpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixNQUFNLG9CQUFvQixNQUFNO0FBQzlCLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksY0FBd0IsQ0FBQztBQUM3QixZQUFJLGlCQUFpQjtBQUVyQixZQUFJLFFBQVEsSUFBSSxjQUFjLE9BQU87QUFFbkMsMEJBQWdCLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFHbEQsd0JBQWMsTUFBTSxzQkFBc0I7QUFDMUMsMkJBQWlCLFlBQVksU0FBUztBQUd0QyxjQUFJLGlCQUFpQixnQkFBZ0I7QUFFbkMsb0JBQVE7QUFBQSxjQUNOLDRCQUE0QixZQUFZLE1BQU0sa0JBQWtCLFlBQVksS0FBSyxJQUFJLENBQUM7QUFBQSxZQUN4RjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBRUEsY0FBTSxFQUFFLFVBQVUsVUFBVSxNQUFNLFlBQVksSUFBSSxNQUFNO0FBQUEsVUFDdEQsRUFBRSxjQUFjO0FBQUEsUUFDbEI7QUFFQSxZQUFJLFlBQVksVUFBVSxRQUFRO0FBQ2xDLFlBQUksYUFBYTtBQUVqQixZQUFJLFFBQVEsSUFBSSxjQUFjLE9BQU87QUFFbkMsZ0JBQU0sYUFBWSxvQkFBSSxLQUFLLEdBQ3hCLFlBQVksRUFDWixRQUFRLFNBQVMsRUFBRSxFQUNuQixRQUFRLEtBQUssR0FBRyxFQUNoQixNQUFNLEdBQUcsRUFBRTtBQUNkLGdCQUFNLFdBQVcsUUFBUSxJQUFJLFlBQVksUUFBUSxJQUFJLFFBQVE7QUFDN0QsZ0JBQU0sV0FBVyxHQUFHLFFBQVEsYUFBYSxTQUFTO0FBQ2xELGdCQUFNLFNBQVMsZ0RBQWdELFFBQVE7QUFDdkUsZ0JBQU0sUUFBUSw2RUFBNkUsUUFBUTtBQUVuRyxzQkFBWTtBQUNaLGNBQUk7QUFDRix5QkFBYSxNQUFNLENBQUMsTUFBTSxVQUFVLE1BQU0sR0FBRztBQUFBLGNBQzNDLFNBQVM7QUFBQSxjQUNULE9BQU87QUFBQTtBQUFBLFlBQ1QsQ0FBQztBQUFBLFVBQ0gsUUFBUTtBQUVOLHdCQUFZLFVBQVUsUUFBUTtBQUM5Qix5QkFBYTtBQUFBO0FBQUEsdUJBQ0UsUUFBUSxJQUFJLE1BQU07QUFBQSxrQkFDdkIsS0FBSztBQUFBLFVBQ2pCO0FBQUEsUUFDRjtBQUdBLGNBQU0sZUFDSixLQUFLLDBCQUNMLEtBQUsseUJBQXlCLEtBQUssaUJBQy9CLEdBQUcsS0FBSyx1QkFBdUIsZUFBZSxDQUFDLHdCQUFxQixLQUFLLGNBQWMsY0FDdkYsR0FBRyxLQUFLLGNBQWM7QUFDNUIsY0FBTSxRQUFRO0FBQUEsVUFDWjtBQUFBLFVBQ0EsR0FBRyxLQUFLLGVBQWUsZUFBZSxDQUFDO0FBQUEsVUFDdkMsR0FBRyxLQUFLLE1BQU0sS0FBSyxvQkFBb0IsQ0FBQztBQUFBLFVBQ3hDLEdBQUcsS0FBSyxXQUFXO0FBQUEsUUFDckIsRUFBRSxLQUFLLFFBQUs7QUFHWixZQUFJLGFBQWE7QUFDakIsWUFBSSxRQUFRLElBQUksY0FBYyxPQUFPO0FBQ25DLGNBQUksZUFBZSxZQUFZLGNBQWMsR0FBRztBQUM5QyxrQkFBTSxVQUFVLFlBQVksTUFDekIsT0FBTyxPQUFLLEVBQUUsZUFBZSxDQUFDLEVBQzlCLElBQUksT0FBSyxFQUFFLElBQUksRUFDZixLQUFLLElBQUk7QUFDWix5QkFBYTtBQUFBLGFBQWdCLFlBQVksV0FBVyx1QkFBdUIsT0FBTztBQUFBO0FBQUEsVUFDcEYsV0FBVyxDQUFDLGlCQUFpQixnQkFBZ0I7QUFFM0MseUJBQWE7QUFBQSxxRUFBd0UsWUFBWSxNQUFNO0FBQUE7QUFBQSxVQUN6RztBQUFBLFFBQ0Y7QUFHQSxjQUFNLFlBQVksU0FBUztBQUMzQixjQUFNLGNBQWMsWUFDaEI7QUFBQTtBQUFBLEVBRU4sVUFBVSxnQkFBZ0IsdUJBQXVCLFVBQVUsYUFBYSxzQ0FBc0MsRUFBRTtBQUFBO0FBQUEsRUFFaEgsVUFBVSxrQkFBa0IsNkJBQTZCLFVBQVUsZUFBZSxrQ0FBa0MsRUFBRTtBQUFBO0FBQUEsRUFFdEgsVUFBVSxhQUFhLDBCQUEwQixVQUFVLFVBQVUsNEJBQTRCLEVBQUU7QUFBQTtBQUFBLEVBRW5HLFVBQVUsc0JBQXNCLDRCQUE0QixVQUFVLG1CQUFtQiwyQkFBMkIsRUFBRSxLQUNoSDtBQUVKLGNBQU0sU0FBUztBQUFBO0FBQUEsRUFFakIsS0FBSztBQUFBLEVBQ0wsS0FBSyxXQUFXLEtBQUssT0FBTyxLQUFLLFdBQVcsR0FBRztBQUFBLEVBQy9DLFVBQVU7QUFBQTtBQUdSLGNBQU0sY0FBYyxHQUFHLE1BQU0sR0FBRyxXQUFXO0FBQUE7QUFBQSxnREFFQyxTQUFTLEdBQUcsVUFBVTtBQUdsRSxlQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQSxFQUdaLGNBQWMsVUFBVSxNQUFNLENBQUMsQ0FBQztBQUFBO0FBQUEsY0FFcEIsU0FBUztBQUFBLGFBQ1YsUUFBUTtBQUFBLG9CQUNELGFBQWEsQ0FBQztBQUFBO0FBQUE7QUFBQSxFQUdoQyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVgsU0FBUyxHQUFHLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlsQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQWtCQSxJQUFPLG1CQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
