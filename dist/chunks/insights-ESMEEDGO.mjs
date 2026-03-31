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
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
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
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
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
    <h2 id="section-usage">How You Use Claude Code</h2>
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
      <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code to add it to your CLAUDE.md.</p>
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
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code and it'll set it up for you.</p>
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
    <h2 id="section-patterns">New Ways to Use Claude Code</h2>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into Claude Code and it'll walk you through it.</p>
    <div class="patterns-section">
      ${suggestions.usage_patterns.map(
    (pat) => `
        <div class="pattern-card">
          <div class="pattern-title">${escapeXmlAttr(pat.title || "")}</div>
          <div class="pattern-summary">${escapeXmlAttr(pat.suggestion || "")}</div>
          ${pat.detail ? `<div class="pattern-detail">${escapeXmlAttr(pat.detail)}</div>` : ""}
          ${pat.copyable_prompt ? `
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into Claude Code:</div>
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
          ${opp.copyable_prompt ? `<div class="pattern-prompt"><div class="prompt-label">Paste into Claude Code:</div><code>${escapeXmlAttr(opp.copyable_prompt)}</code><button class="copy-btn" onclick="copyText(this)">Copy</button></div>` : ""}
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
  <title>Claude Code Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <div class="container">
    <h1>Claude Code Insights</h1>
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
          No parallel session usage detected. You typically work with one Claude Code session at a time.
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
          You run multiple Claude Code sessions simultaneously. Multi-clauding is detected when sessions
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
    FACET_EXTRACTION_PROMPT = `Analyze this Claude Code session and extract structured facets.

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
        prompt: `Analyze this Claude Code usage data and identify project areas.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "areas": [
    {"name": "Area name", "session_count": N, "description": "2-3 sentences about what was worked on and how Claude Code was used."}
  ]
}

Include 4-5 areas. Skip internal CC operations.`,
        maxTokens: 8192
      },
      {
        name: "interaction_style",
        prompt: `Analyze this Claude Code usage data and describe the user's interaction style.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "narrative": "2-3 paragraphs analyzing HOW the user interacts with Claude Code. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let Claude run? Include specific examples. Use **bold** for key insights.",
  "key_pattern": "One sentence summary of most distinctive interaction style"
}`,
        maxTokens: 8192
      },
      {
        name: "what_works",
        prompt: `Analyze this Claude Code usage data and identify what's working well for this user. Use second person ("you").

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
        prompt: `Analyze this Claude Code usage data and identify friction points for this user. Use second person ("you").

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
        prompt: `Analyze this Claude Code usage data and suggest improvements.

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
        prompt: `Analyze this Claude Code usage data and identify future opportunities.

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
          prompt: `Analyze this Claude Code usage data and suggest product improvements for the CC team.

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
          prompt: `Analyze this Claude Code usage data and suggest model behavior improvements.

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
        prompt: `Analyze this Claude Code usage data and find a memorable moment.

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
      description: "Generate a report analyzing your Claude Code sessions",
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
        const header = `# Claude Code Insights

${stats}
${data.date_range.start} to ${data.date_range.end}
${remoteInfo}
`;
        const userSummary = `${header}${summaryText}

Your full shareable insights report is ready: ${reportUrl}${uploadHint}`;
        return [
          {
            type: "text",
            text: `The user just ran /insights to generate a usage report analyzing their Claude Code sessions.

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2luc2lnaHRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBleGVjRmlsZVN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IHsgZGlmZkxpbmVzIH0gZnJvbSAnZGlmZidcbmltcG9ydCB7IGNvbnN0YW50cyBhcyBmc0NvbnN0YW50cyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHtcbiAgY29weUZpbGUsXG4gIG1rZGlyLFxuICBta2R0ZW1wLFxuICByZWFkZGlyLFxuICByZWFkRmlsZSxcbiAgcm0sXG4gIHVubGluayxcbiAgd3JpdGVGaWxlLFxufSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IHRtcGRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgZXh0bmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IHF1ZXJ5V2l0aE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB7XG4gIEFHRU5UX1RPT0xfTkFNRSxcbiAgTEVHQUNZX0FHRU5UX1RPT0xfTkFNRSxcbn0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIHsgTG9nT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGV4dHJhY3RUZXh0Q29udGVudCB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdXNNb2RlbCB9IGZyb20gJy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdHNEaXIsXG4gIGdldFNlc3Npb25GaWxlc1dpdGhNdGltZSxcbiAgZ2V0U2Vzc2lvbklkRnJvbUxvZyxcbiAgbG9hZEFsbExvZ3NGcm9tU2Vzc2lvbkZpbGUsXG59IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBjb3VudENoYXJJblN0cmluZyB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuaW1wb3J0IHsgZXNjYXBlWG1sQXR0ciBhcyBlc2NhcGVIdG1sIH0gZnJvbSAnLi4vdXRpbHMveG1sLmpzJ1xuXG4vLyBNb2RlbCBmb3IgZmFjZXQgZXh0cmFjdGlvbiBhbmQgc3VtbWFyaXphdGlvbiAoT3B1cyAtIGJlc3QgcXVhbGl0eSlcbmZ1bmN0aW9uIGdldEFuYWx5c2lzTW9kZWwoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldERlZmF1bHRPcHVzTW9kZWwoKVxufVxuXG4vLyBNb2RlbCBmb3IgbmFycmF0aXZlIGluc2lnaHRzIChPcHVzIC0gYmVzdCBxdWFsaXR5KVxuZnVuY3Rpb24gZ2V0SW5zaWdodHNNb2RlbCgpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0RGVmYXVsdE9wdXNNb2RlbCgpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhvbWVzcGFjZSBEYXRhIENvbGxlY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBSZW1vdGVIb3N0SW5mbyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNlc3Npb25Db3VudDogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWVudi10b3AtbGV2ZWwgKi9cbmNvbnN0IGdldFJ1bm5pbmdSZW1vdGVIb3N0czogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4gPVxuICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgPyBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3Rkb3V0LCBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICAgICAgJ2NvZGVyJyxcbiAgICAgICAgICBbJ2xpc3QnLCAnLW8nLCAnanNvbiddLFxuICAgICAgICAgIHsgdGltZW91dDogMzAwMDAgfSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgcmV0dXJuIFtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgd29ya3NwYWNlcyA9IGpzb25QYXJzZShzdGRvdXQpIGFzIEFycmF5PHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZ1xuICAgICAgICAgICAgbGF0ZXN0X2J1aWxkPzogeyBzdGF0dXM/OiBzdHJpbmcgfVxuICAgICAgICAgIH0+XG4gICAgICAgICAgcmV0dXJuIHdvcmtzcGFjZXNcbiAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmxhdGVzdF9idWlsZD8uc3RhdHVzID09PSAncnVubmluZycpXG4gICAgICAgICAgICAubWFwKHcgPT4gdy5uYW1lKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDogYXN5bmMgKCkgPT4gW11cblxuY29uc3QgZ2V0UmVtb3RlSG9zdFNlc3Npb25Db3VudDogKGhzOiBzdHJpbmcpID0+IFByb21pc2U8bnVtYmVyPiA9XG4gIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IGFzeW5jIChob21lc3BhY2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB7IHN0ZG91dCwgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgICAgICdzc2gnLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGAke2hvbWVzcGFjZX0uY29kZXJgLFxuICAgICAgICAgICAgJ2ZpbmQgL3Jvb3QvLmNsYXVkZS9wcm9qZWN0cyAtbmFtZSBcIiouanNvbmxcIiAyPi9kZXYvbnVsbCB8IHdjIC1sJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHsgdGltZW91dDogMzAwMDAgfSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29kZSAhPT0gMCkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0ZG91dC50cmltKCksIDEwKSB8fCAwXG4gICAgICB9XG4gICAgOiBhc3luYyAoKSA9PiAwXG5cbmNvbnN0IGNvbGxlY3RGcm9tUmVtb3RlSG9zdDogKFxuICBoczogc3RyaW5nLFxuICBkZXN0RGlyOiBzdHJpbmcsXG4pID0+IFByb21pc2U8eyBjb3BpZWQ6IG51bWJlcjsgc2tpcHBlZDogbnVtYmVyIH0+ID1cbiAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50J1xuICAgID8gYXN5bmMgKGhvbWVzcGFjZTogc3RyaW5nLCBkZXN0RGlyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyBjb3BpZWQ6IDAsIHNraXBwZWQ6IDAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wIGRpcmVjdG9yeVxuICAgICAgICBjb25zdCB0ZW1wRGlyID0gYXdhaXQgbWtkdGVtcChqb2luKHRtcGRpcigpLCAnY2xhdWRlLWhzLScpKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU0NQIHRoZSBwcm9qZWN0cyBmb2xkZXJcbiAgICAgICAgICBjb25zdCBzY3BSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICAgICAgICAnc2NwJyxcbiAgICAgICAgICAgIFsnLXJxJywgYCR7aG9tZXNwYWNlfS5jb2Rlcjovcm9vdC8uY2xhdWRlL3Byb2plY3RzL2AsIHRlbXBEaXJdLFxuICAgICAgICAgICAgeyB0aW1lb3V0OiAzMDAwMDAgfSxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHNjcFJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBTQ1AgZmFpbGVkXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJvamVjdHNEaXIgPSBqb2luKHRlbXBEaXIsICdwcm9qZWN0cycpXG4gICAgICAgICAgbGV0IHByb2plY3REaXJlbnRzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9qZWN0RGlyZW50cyA9IGF3YWl0IHJlYWRkaXIocHJvamVjdHNEaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE1lcmdlIGludG8gZGVzdGluYXRpb24gKHBhcmFsbGVsIHBlciBwcm9qZWN0IGRpcmVjdG9yeSlcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHByb2plY3REaXJlbnRzLm1hcChhc3luYyBkaXJlbnQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRpcmVudC5uYW1lXG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXRoID0gam9pbihwcm9qZWN0c0RpciwgcHJvamVjdE5hbWUpXG5cbiAgICAgICAgICAgICAgLy8gU2tpcCBpZiBub3QgYSBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgaWYgKCFkaXJlbnQuaXNEaXJlY3RvcnkoKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgY29uc3QgZGVzdFByb2plY3ROYW1lID0gYCR7cHJvamVjdE5hbWV9X18ke2hvbWVzcGFjZX1gXG4gICAgICAgICAgICAgIGNvbnN0IGRlc3RQcm9qZWN0UGF0aCA9IGpvaW4oZGVzdERpciwgZGVzdFByb2plY3ROYW1lKVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbWtkaXIoZGVzdFByb2plY3RQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBEaXJlY3RvcnkgbWF5IGFscmVhZHkgZXhpc3RcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENvcHkgc2Vzc2lvbiBmaWxlcyAoc2tpcCBleGlzdGluZylcbiAgICAgICAgICAgICAgbGV0IGZpbGVzOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHJlYWRkaXI+PlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZpbGVzID0gYXdhaXQgcmVhZGRpcihwcm9qZWN0UGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGZpbGVzLm1hcChhc3luYyBmaWxlRGlyZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZURpcmVudC5uYW1lXG4gICAgICAgICAgICAgICAgICBpZiAoIWZpbGVOYW1lLmVuZHNXaXRoKCcuanNvbmwnKSkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNyY0ZpbGUgPSBqb2luKHByb2plY3RQYXRoLCBmaWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RGaWxlID0gam9pbihkZXN0UHJvamVjdFBhdGgsIGZpbGVOYW1lKVxuXG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb3B5RmlsZShzcmNGaWxlLCBkZXN0RmlsZSwgZnNDb25zdGFudHMuQ09QWUZJTEVfRVhDTClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvcGllZCsrXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRUVYSVNUIGZyb20gQ09QWUZJTEVfRVhDTCBtZWFucyBkZXN0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5za2lwcGVkKytcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBybSh0ZW1wRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBjbGVhbnVwIGVycm9yc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICA6IGFzeW5jICgpID0+ICh7IGNvcGllZDogMCwgc2tpcHBlZDogMCB9KVxuXG5jb25zdCBjb2xsZWN0QWxsUmVtb3RlSG9zdERhdGE6IChkZXN0RGlyOiBzdHJpbmcpID0+IFByb21pc2U8e1xuICBob3N0czogUmVtb3RlSG9zdEluZm9bXVxuICB0b3RhbENvcGllZDogbnVtYmVyXG4gIHRvdGFsU2tpcHBlZDogbnVtYmVyXG59PiA9XG4gIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IGFzeW5jIChkZXN0RGlyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgckhvc3RzID0gYXdhaXQgZ2V0UnVubmluZ1JlbW90ZUhvc3RzKClcbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZW1vdGVIb3N0SW5mb1tdID0gW11cbiAgICAgICAgbGV0IHRvdGFsQ29waWVkID0gMFxuICAgICAgICBsZXQgdG90YWxTa2lwcGVkID0gMFxuXG4gICAgICAgIC8vIENvbGxlY3QgZnJvbSBhbGwgaG9zdHMgaW4gcGFyYWxsZWwgKFNDUCBwZXIgaG9zdCBjYW4gdGFrZSBzZWNvbmRzKVxuICAgICAgICBjb25zdCBob3N0UmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIHJIb3N0cy5tYXAoYXN5bmMgaHMgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkNvdW50ID0gYXdhaXQgZ2V0UmVtb3RlSG9zdFNlc3Npb25Db3VudChocylcbiAgICAgICAgICAgIGlmIChzZXNzaW9uQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgY29waWVkLCBza2lwcGVkIH0gPSBhd2FpdCBjb2xsZWN0RnJvbVJlbW90ZUhvc3QoXG4gICAgICAgICAgICAgICAgaHMsXG4gICAgICAgICAgICAgICAgZGVzdERpcixcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBocywgc2Vzc2lvbkNvdW50LCBjb3BpZWQsIHNraXBwZWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogaHMsIHNlc3Npb25Db3VudCwgY29waWVkOiAwLCBza2lwcGVkOiAwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuXG4gICAgICAgIGZvciAoY29uc3QgaHIgb2YgaG9zdFJlc3VsdHMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IG5hbWU6IGhyLm5hbWUsIHNlc3Npb25Db3VudDogaHIuc2Vzc2lvbkNvdW50IH0pXG4gICAgICAgICAgdG90YWxDb3BpZWQgKz0gaHIuY29waWVkXG4gICAgICAgICAgdG90YWxTa2lwcGVkICs9IGhyLnNraXBwZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhvc3RzOiByZXN1bHQsIHRvdGFsQ29waWVkLCB0b3RhbFNraXBwZWQgfVxuICAgICAgfVxuICAgIDogYXN5bmMgKCkgPT4gKHsgaG9zdHM6IFtdLCB0b3RhbENvcGllZDogMCwgdG90YWxTa2lwcGVkOiAwIH0pXG4vKiBlc2xpbnQtZW5hYmxlIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWVudi10b3AtbGV2ZWwgKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXNzaW9uTWV0YSA9IHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gIHByb2plY3RfcGF0aDogc3RyaW5nXG4gIHN0YXJ0X3RpbWU6IHN0cmluZ1xuICBkdXJhdGlvbl9taW51dGVzOiBudW1iZXJcbiAgdXNlcl9tZXNzYWdlX2NvdW50OiBudW1iZXJcbiAgYXNzaXN0YW50X21lc3NhZ2VfY291bnQ6IG51bWJlclxuICB0b29sX2NvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBsYW5ndWFnZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgZ2l0X2NvbW1pdHM6IG51bWJlclxuICBnaXRfcHVzaGVzOiBudW1iZXJcbiAgaW5wdXRfdG9rZW5zOiBudW1iZXJcbiAgb3V0cHV0X3Rva2VuczogbnVtYmVyXG4gIGZpcnN0X3Byb21wdDogc3RyaW5nXG4gIHN1bW1hcnk/OiBzdHJpbmdcbiAgLy8gTmV3IHN0YXRzXG4gIHVzZXJfaW50ZXJydXB0aW9uczogbnVtYmVyXG4gIHVzZXJfcmVzcG9uc2VfdGltZXM6IG51bWJlcltdXG4gIHRvb2xfZXJyb3JzOiBudW1iZXJcbiAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHVzZXNfdGFza19hZ2VudDogYm9vbGVhblxuICB1c2VzX21jcDogYm9vbGVhblxuICB1c2VzX3dlYl9zZWFyY2g6IGJvb2xlYW5cbiAgdXNlc193ZWJfZmV0Y2g6IGJvb2xlYW5cbiAgLy8gQWRkaXRpb25hbCBzdGF0c1xuICBsaW5lc19hZGRlZDogbnVtYmVyXG4gIGxpbmVzX3JlbW92ZWQ6IG51bWJlclxuICBmaWxlc19tb2RpZmllZDogbnVtYmVyXG4gIG1lc3NhZ2VfaG91cnM6IG51bWJlcltdXG4gIHVzZXJfbWVzc2FnZV90aW1lc3RhbXBzOiBzdHJpbmdbXSAvLyBJU08gdGltZXN0YW1wcyBmb3IgbXVsdGktY2xhdWRpbmcgZGV0ZWN0aW9uXG59XG5cbnR5cGUgU2Vzc2lvbkZhY2V0cyA9IHtcbiAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gIHVuZGVybHlpbmdfZ29hbDogc3RyaW5nXG4gIGdvYWxfY2F0ZWdvcmllczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBvdXRjb21lOiBzdHJpbmdcbiAgdXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGNsYXVkZV9oZWxwZnVsbmVzczogc3RyaW5nXG4gIHNlc3Npb25fdHlwZTogc3RyaW5nXG4gIGZyaWN0aW9uX2NvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBmcmljdGlvbl9kZXRhaWw6IHN0cmluZ1xuICBwcmltYXJ5X3N1Y2Nlc3M6IHN0cmluZ1xuICBicmllZl9zdW1tYXJ5OiBzdHJpbmdcbiAgdXNlcl9pbnN0cnVjdGlvbnNfdG9fY2xhdWRlPzogc3RyaW5nW11cbn1cblxudHlwZSBBZ2dyZWdhdGVkRGF0YSA9IHtcbiAgdG90YWxfc2Vzc2lvbnM6IG51bWJlclxuICB0b3RhbF9zZXNzaW9uc19zY2FubmVkPzogbnVtYmVyXG4gIHNlc3Npb25zX3dpdGhfZmFjZXRzOiBudW1iZXJcbiAgZGF0ZV9yYW5nZTogeyBzdGFydDogc3RyaW5nOyBlbmQ6IHN0cmluZyB9XG4gIHRvdGFsX21lc3NhZ2VzOiBudW1iZXJcbiAgdG90YWxfZHVyYXRpb25faG91cnM6IG51bWJlclxuICB0b3RhbF9pbnB1dF90b2tlbnM6IG51bWJlclxuICB0b3RhbF9vdXRwdXRfdG9rZW5zOiBudW1iZXJcbiAgdG9vbF9jb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgbGFuZ3VhZ2VzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGdpdF9jb21taXRzOiBudW1iZXJcbiAgZ2l0X3B1c2hlczogbnVtYmVyXG4gIHByb2plY3RzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGdvYWxfY2F0ZWdvcmllczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBvdXRjb21lczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBzYXRpc2ZhY3Rpb246IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgaGVscGZ1bG5lc3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgc2Vzc2lvbl90eXBlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBmcmljdGlvbjogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBzdWNjZXNzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHNlc3Npb25fc3VtbWFyaWVzOiBBcnJheTx7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGRhdGU6IHN0cmluZ1xuICAgIHN1bW1hcnk6IHN0cmluZ1xuICAgIGdvYWw/OiBzdHJpbmdcbiAgfT5cbiAgLy8gTmV3IGFnZ3JlZ2F0ZWQgc3RhdHNcbiAgdG90YWxfaW50ZXJydXB0aW9uczogbnVtYmVyXG4gIHRvdGFsX3Rvb2xfZXJyb3JzOiBudW1iZXJcbiAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIHVzZXJfcmVzcG9uc2VfdGltZXM6IG51bWJlcltdXG4gIG1lZGlhbl9yZXNwb25zZV90aW1lOiBudW1iZXJcbiAgYXZnX3Jlc3BvbnNlX3RpbWU6IG51bWJlclxuICBzZXNzaW9uc191c2luZ190YXNrX2FnZW50OiBudW1iZXJcbiAgc2Vzc2lvbnNfdXNpbmdfbWNwOiBudW1iZXJcbiAgc2Vzc2lvbnNfdXNpbmdfd2ViX3NlYXJjaDogbnVtYmVyXG4gIHNlc3Npb25zX3VzaW5nX3dlYl9mZXRjaDogbnVtYmVyXG4gIC8vIEFkZGl0aW9uYWwgc3RhdHMgZnJvbSBQeXRob24gcmVmZXJlbmNlXG4gIHRvdGFsX2xpbmVzX2FkZGVkOiBudW1iZXJcbiAgdG90YWxfbGluZXNfcmVtb3ZlZDogbnVtYmVyXG4gIHRvdGFsX2ZpbGVzX21vZGlmaWVkOiBudW1iZXJcbiAgZGF5c19hY3RpdmU6IG51bWJlclxuICBtZXNzYWdlc19wZXJfZGF5OiBudW1iZXJcbiAgbWVzc2FnZV9ob3VyczogbnVtYmVyW10gLy8gSG91ciBvZiBkYXkgZm9yIGVhY2ggdXNlciBtZXNzYWdlIChmb3IgdGltZSBvZiBkYXkgY2hhcnQpXG4gIC8vIE11bHRpLWNsYXVkaW5nIHN0YXRzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuICBtdWx0aV9jbGF1ZGluZzoge1xuICAgIG92ZXJsYXBfZXZlbnRzOiBudW1iZXJcbiAgICBzZXNzaW9uc19pbnZvbHZlZDogbnVtYmVyXG4gICAgdXNlcl9tZXNzYWdlc19kdXJpbmc6IG51bWJlclxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnN0YW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBFWFRFTlNJT05fVE9fTEFOR1VBR0U6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcudHMnOiAnVHlwZVNjcmlwdCcsXG4gICcudHN4JzogJ1R5cGVTY3JpcHQnLFxuICAnLmpzJzogJ0phdmFTY3JpcHQnLFxuICAnLmpzeCc6ICdKYXZhU2NyaXB0JyxcbiAgJy5weSc6ICdQeXRob24nLFxuICAnLnJiJzogJ1J1YnknLFxuICAnLmdvJzogJ0dvJyxcbiAgJy5ycyc6ICdSdXN0JyxcbiAgJy5qYXZhJzogJ0phdmEnLFxuICAnLm1kJzogJ01hcmtkb3duJyxcbiAgJy5qc29uJzogJ0pTT04nLFxuICAnLnlhbWwnOiAnWUFNTCcsXG4gICcueW1sJzogJ1lBTUwnLFxuICAnLnNoJzogJ1NoZWxsJyxcbiAgJy5jc3MnOiAnQ1NTJyxcbiAgJy5odG1sJzogJ0hUTUwnLFxufVxuXG4vLyBMYWJlbCBtYXAgZm9yIGNsZWFuaW5nIHVwIGNhdGVnb3J5IG5hbWVzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuY29uc3QgTEFCRUxfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyBHb2FsIGNhdGVnb3JpZXNcbiAgZGVidWdfaW52ZXN0aWdhdGU6ICdEZWJ1Zy9JbnZlc3RpZ2F0ZScsXG4gIGltcGxlbWVudF9mZWF0dXJlOiAnSW1wbGVtZW50IEZlYXR1cmUnLFxuICBmaXhfYnVnOiAnRml4IEJ1ZycsXG4gIHdyaXRlX3NjcmlwdF90b29sOiAnV3JpdGUgU2NyaXB0L1Rvb2wnLFxuICByZWZhY3Rvcl9jb2RlOiAnUmVmYWN0b3IgQ29kZScsXG4gIGNvbmZpZ3VyZV9zeXN0ZW06ICdDb25maWd1cmUgU3lzdGVtJyxcbiAgY3JlYXRlX3ByX2NvbW1pdDogJ0NyZWF0ZSBQUi9Db21taXQnLFxuICBhbmFseXplX2RhdGE6ICdBbmFseXplIERhdGEnLFxuICB1bmRlcnN0YW5kX2NvZGViYXNlOiAnVW5kZXJzdGFuZCBDb2RlYmFzZScsXG4gIHdyaXRlX3Rlc3RzOiAnV3JpdGUgVGVzdHMnLFxuICB3cml0ZV9kb2NzOiAnV3JpdGUgRG9jcycsXG4gIGRlcGxveV9pbmZyYTogJ0RlcGxveS9JbmZyYScsXG4gIHdhcm11cF9taW5pbWFsOiAnQ2FjaGUgV2FybXVwJyxcbiAgLy8gU3VjY2VzcyBmYWN0b3JzXG4gIGZhc3RfYWNjdXJhdGVfc2VhcmNoOiAnRmFzdC9BY2N1cmF0ZSBTZWFyY2gnLFxuICBjb3JyZWN0X2NvZGVfZWRpdHM6ICdDb3JyZWN0IENvZGUgRWRpdHMnLFxuICBnb29kX2V4cGxhbmF0aW9uczogJ0dvb2QgRXhwbGFuYXRpb25zJyxcbiAgcHJvYWN0aXZlX2hlbHA6ICdQcm9hY3RpdmUgSGVscCcsXG4gIG11bHRpX2ZpbGVfY2hhbmdlczogJ011bHRpLWZpbGUgQ2hhbmdlcycsXG4gIGhhbmRsZWRfY29tcGxleGl0eTogJ011bHRpLWZpbGUgQ2hhbmdlcycsXG4gIGdvb2RfZGVidWdnaW5nOiAnR29vZCBEZWJ1Z2dpbmcnLFxuICAvLyBGcmljdGlvbiB0eXBlc1xuICBtaXN1bmRlcnN0b29kX3JlcXVlc3Q6ICdNaXN1bmRlcnN0b29kIFJlcXVlc3QnLFxuICB3cm9uZ19hcHByb2FjaDogJ1dyb25nIEFwcHJvYWNoJyxcbiAgYnVnZ3lfY29kZTogJ0J1Z2d5IENvZGUnLFxuICB1c2VyX3JlamVjdGVkX2FjdGlvbjogJ1VzZXIgUmVqZWN0ZWQgQWN0aW9uJyxcbiAgY2xhdWRlX2dvdF9ibG9ja2VkOiAnQ2xhdWRlIEdvdCBCbG9ja2VkJyxcbiAgdXNlcl9zdG9wcGVkX2Vhcmx5OiAnVXNlciBTdG9wcGVkIEVhcmx5JyxcbiAgd3JvbmdfZmlsZV9vcl9sb2NhdGlvbjogJ1dyb25nIEZpbGUvTG9jYXRpb24nLFxuICBleGNlc3NpdmVfY2hhbmdlczogJ0V4Y2Vzc2l2ZSBDaGFuZ2VzJyxcbiAgc2xvd19vcl92ZXJib3NlOiAnU2xvdy9WZXJib3NlJyxcbiAgdG9vbF9mYWlsZWQ6ICdUb29sIEZhaWxlZCcsXG4gIHVzZXJfdW5jbGVhcjogJ1VzZXIgVW5jbGVhcicsXG4gIGV4dGVybmFsX2lzc3VlOiAnRXh0ZXJuYWwgSXNzdWUnLFxuICAvLyBTYXRpc2ZhY3Rpb24gbGFiZWxzXG4gIGZydXN0cmF0ZWQ6ICdGcnVzdHJhdGVkJyxcbiAgZGlzc2F0aXNmaWVkOiAnRGlzc2F0aXNmaWVkJyxcbiAgbGlrZWx5X3NhdGlzZmllZDogJ0xpa2VseSBTYXRpc2ZpZWQnLFxuICBzYXRpc2ZpZWQ6ICdTYXRpc2ZpZWQnLFxuICBoYXBweTogJ0hhcHB5JyxcbiAgdW5zdXJlOiAnVW5zdXJlJyxcbiAgbmV1dHJhbDogJ05ldXRyYWwnLFxuICBkZWxpZ2h0ZWQ6ICdEZWxpZ2h0ZWQnLFxuICAvLyBTZXNzaW9uIHR5cGVzXG4gIHNpbmdsZV90YXNrOiAnU2luZ2xlIFRhc2snLFxuICBtdWx0aV90YXNrOiAnTXVsdGkgVGFzaycsXG4gIGl0ZXJhdGl2ZV9yZWZpbmVtZW50OiAnSXRlcmF0aXZlIFJlZmluZW1lbnQnLFxuICBleHBsb3JhdGlvbjogJ0V4cGxvcmF0aW9uJyxcbiAgcXVpY2tfcXVlc3Rpb246ICdRdWljayBRdWVzdGlvbicsXG4gIC8vIE91dGNvbWVzXG4gIGZ1bGx5X2FjaGlldmVkOiAnRnVsbHkgQWNoaWV2ZWQnLFxuICBtb3N0bHlfYWNoaWV2ZWQ6ICdNb3N0bHkgQWNoaWV2ZWQnLFxuICBwYXJ0aWFsbHlfYWNoaWV2ZWQ6ICdQYXJ0aWFsbHkgQWNoaWV2ZWQnLFxuICBub3RfYWNoaWV2ZWQ6ICdOb3QgQWNoaWV2ZWQnLFxuICB1bmNsZWFyX2Zyb21fdHJhbnNjcmlwdDogJ1VuY2xlYXInLFxuICAvLyBIZWxwZnVsbmVzc1xuICB1bmhlbHBmdWw6ICdVbmhlbHBmdWwnLFxuICBzbGlnaHRseV9oZWxwZnVsOiAnU2xpZ2h0bHkgSGVscGZ1bCcsXG4gIG1vZGVyYXRlbHlfaGVscGZ1bDogJ01vZGVyYXRlbHkgSGVscGZ1bCcsXG4gIHZlcnlfaGVscGZ1bDogJ1ZlcnkgSGVscGZ1bCcsXG4gIGVzc2VudGlhbDogJ0Vzc2VudGlhbCcsXG59XG5cbi8vIExhenkgZ2V0dGVyczogZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpIGlzIG1lbW9pemVkIGFuZCByZWFkcyBwcm9jZXNzLmVudi5cbi8vIENhbGxpbmcgaXQgYXQgbW9kdWxlIHNjb3BlIHdvdWxkIHBvcHVsYXRlIHRoZSBtZW1vaXplIGNhY2hlIGJlZm9yZVxuLy8gZW50cnlwb2ludHMgY2FuIHNldCBDTEFVREVfQ09ORklHX0RJUiwgYnJlYWtpbmcgYWxsIDE1MCsgb3RoZXIgY2FsbGVycy5cbmZ1bmN0aW9uIGdldERhdGFEaXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAndXNhZ2UtZGF0YScpXG59XG5mdW5jdGlvbiBnZXRGYWNldHNEaXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0RGF0YURpcigpLCAnZmFjZXRzJylcbn1cbmZ1bmN0aW9uIGdldFNlc3Npb25NZXRhRGlyKCk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldERhdGFEaXIoKSwgJ3Nlc3Npb24tbWV0YScpXG59XG5cbmNvbnN0IEZBQ0VUX0VYVFJBQ1RJT05fUFJPTVBUID0gYEFuYWx5emUgdGhpcyBDbGF1ZGUgQ29kZSBzZXNzaW9uIGFuZCBleHRyYWN0IHN0cnVjdHVyZWQgZmFjZXRzLlxuXG5DUklUSUNBTCBHVUlERUxJTkVTOlxuXG4xLiAqKmdvYWxfY2F0ZWdvcmllcyoqOiBDb3VudCBPTkxZIHdoYXQgdGhlIFVTRVIgZXhwbGljaXRseSBhc2tlZCBmb3IuXG4gICAtIERPIE5PVCBjb3VudCBDbGF1ZGUncyBhdXRvbm9tb3VzIGNvZGViYXNlIGV4cGxvcmF0aW9uXG4gICAtIERPIE5PVCBjb3VudCB3b3JrIENsYXVkZSBkZWNpZGVkIHRvIGRvIG9uIGl0cyBvd25cbiAgIC0gT05MWSBjb3VudCB3aGVuIHVzZXIgc2F5cyBcImNhbiB5b3UuLi5cIiwgXCJwbGVhc2UuLi5cIiwgXCJJIG5lZWQuLi5cIiwgXCJsZXQncy4uLlwiXG5cbjIuICoqdXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzKio6IEJhc2UgT05MWSBvbiBleHBsaWNpdCB1c2VyIHNpZ25hbHMuXG4gICAtIFwiWWF5IVwiLCBcImdyZWF0IVwiLCBcInBlcmZlY3QhXCIgXHUyMTkyIGhhcHB5XG4gICAtIFwidGhhbmtzXCIsIFwibG9va3MgZ29vZFwiLCBcInRoYXQgd29ya3NcIiBcdTIxOTIgc2F0aXNmaWVkXG4gICAtIFwib2ssIG5vdyBsZXQncy4uLlwiIChjb250aW51aW5nIHdpdGhvdXQgY29tcGxhaW50KSBcdTIxOTIgbGlrZWx5X3NhdGlzZmllZFxuICAgLSBcInRoYXQncyBub3QgcmlnaHRcIiwgXCJ0cnkgYWdhaW5cIiBcdTIxOTIgZGlzc2F0aXNmaWVkXG4gICAtIFwidGhpcyBpcyBicm9rZW5cIiwgXCJJIGdpdmUgdXBcIiBcdTIxOTIgZnJ1c3RyYXRlZFxuXG4zLiAqKmZyaWN0aW9uX2NvdW50cyoqOiBCZSBzcGVjaWZpYyBhYm91dCB3aGF0IHdlbnQgd3JvbmcuXG4gICAtIG1pc3VuZGVyc3Rvb2RfcmVxdWVzdDogQ2xhdWRlIGludGVycHJldGVkIGluY29ycmVjdGx5XG4gICAtIHdyb25nX2FwcHJvYWNoOiBSaWdodCBnb2FsLCB3cm9uZyBzb2x1dGlvbiBtZXRob2RcbiAgIC0gYnVnZ3lfY29kZTogQ29kZSBkaWRuJ3Qgd29yayBjb3JyZWN0bHlcbiAgIC0gdXNlcl9yZWplY3RlZF9hY3Rpb246IFVzZXIgc2FpZCBuby9zdG9wIHRvIGEgdG9vbCBjYWxsXG4gICAtIGV4Y2Vzc2l2ZV9jaGFuZ2VzOiBPdmVyLWVuZ2luZWVyZWQgb3IgY2hhbmdlZCB0b28gbXVjaFxuXG40LiBJZiB2ZXJ5IHNob3J0IG9yIGp1c3Qgd2FybXVwLCB1c2Ugd2FybXVwX21pbmltYWwgZm9yIGdvYWxfY2F0ZWdvcnlcblxuU0VTU0lPTjpcbmBcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGVscGVyIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUZyb21QYXRoKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZXh0ID0gZXh0bmFtZShmaWxlUGF0aCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gRVhURU5TSU9OX1RPX0xBTkdVQUdFW2V4dF0gfHwgbnVsbFxufVxuXG5mdW5jdGlvbiBleHRyYWN0VG9vbFN0YXRzKGxvZzogTG9nT3B0aW9uKToge1xuICB0b29sQ291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGxhbmd1YWdlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICBnaXRDb21taXRzOiBudW1iZXJcbiAgZ2l0UHVzaGVzOiBudW1iZXJcbiAgaW5wdXRUb2tlbnM6IG51bWJlclxuICBvdXRwdXRUb2tlbnM6IG51bWJlclxuICAvLyBOZXcgc3RhdHNcbiAgdXNlckludGVycnVwdGlvbnM6IG51bWJlclxuICB1c2VyUmVzcG9uc2VUaW1lczogbnVtYmVyW11cbiAgdG9vbEVycm9yczogbnVtYmVyXG4gIHRvb2xFcnJvckNhdGVnb3JpZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgdXNlc1Rhc2tBZ2VudDogYm9vbGVhblxuICB1c2VzTWNwOiBib29sZWFuXG4gIHVzZXNXZWJTZWFyY2g6IGJvb2xlYW5cbiAgdXNlc1dlYkZldGNoOiBib29sZWFuXG4gIC8vIEFkZGl0aW9uYWwgc3RhdHNcbiAgbGluZXNBZGRlZDogbnVtYmVyXG4gIGxpbmVzUmVtb3ZlZDogbnVtYmVyXG4gIGZpbGVzTW9kaWZpZWQ6IFNldDxzdHJpbmc+XG4gIG1lc3NhZ2VIb3VyczogbnVtYmVyW11cbiAgdXNlck1lc3NhZ2VUaW1lc3RhbXBzOiBzdHJpbmdbXSAvLyBJU08gdGltZXN0YW1wcyBmb3IgbXVsdGktY2xhdWRpbmcgZGV0ZWN0aW9uXG59IHtcbiAgY29uc3QgdG9vbENvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9XG4gIGNvbnN0IGxhbmd1YWdlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9XG4gIGxldCBnaXRDb21taXRzID0gMFxuICBsZXQgZ2l0UHVzaGVzID0gMFxuICBsZXQgaW5wdXRUb2tlbnMgPSAwXG4gIGxldCBvdXRwdXRUb2tlbnMgPSAwXG5cbiAgLy8gTmV3IHN0YXRzXG4gIGxldCB1c2VySW50ZXJydXB0aW9ucyA9IDBcbiAgY29uc3QgdXNlclJlc3BvbnNlVGltZXM6IG51bWJlcltdID0gW11cbiAgbGV0IHRvb2xFcnJvcnMgPSAwXG4gIGNvbnN0IHRvb2xFcnJvckNhdGVnb3JpZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICBsZXQgdXNlc1Rhc2tBZ2VudCA9IGZhbHNlXG5cbiAgLy8gQWRkaXRpb25hbCBzdGF0c1xuICBsZXQgbGluZXNBZGRlZCA9IDBcbiAgbGV0IGxpbmVzUmVtb3ZlZCA9IDBcbiAgY29uc3QgZmlsZXNNb2RpZmllZCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IG1lc3NhZ2VIb3VyczogbnVtYmVyW10gPSBbXVxuICBjb25zdCB1c2VyTWVzc2FnZVRpbWVzdGFtcHM6IHN0cmluZ1tdID0gW10gLy8gRm9yIG11bHRpLWNsYXVkaW5nIGRldGVjdGlvblxuICBsZXQgdXNlc01jcCA9IGZhbHNlXG4gIGxldCB1c2VzV2ViU2VhcmNoID0gZmFsc2VcbiAgbGV0IHVzZXNXZWJGZXRjaCA9IGZhbHNlXG4gIGxldCBsYXN0QXNzaXN0YW50VGltZXN0YW1wOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gIGZvciAoY29uc3QgbXNnIG9mIGxvZy5tZXNzYWdlcykge1xuICAgIC8vIEdldCBtZXNzYWdlIHRpbWVzdGFtcCBmb3IgcmVzcG9uc2UgdGltZSBjYWxjdWxhdGlvblxuICAgIGNvbnN0IG1zZ1RpbWVzdGFtcCA9IChtc2cgYXMgeyB0aW1lc3RhbXA/OiBzdHJpbmcgfSkudGltZXN0YW1wXG5cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhc3Npc3RhbnQnICYmIG1zZy5tZXNzYWdlKSB7XG4gICAgICAvLyBUcmFjayB0aW1lc3RhbXAgZm9yIHJlc3BvbnNlIHRpbWUgY2FsY3VsYXRpb25cbiAgICAgIGlmIChtc2dUaW1lc3RhbXApIHtcbiAgICAgICAgbGFzdEFzc2lzdGFudFRpbWVzdGFtcCA9IG1zZ1RpbWVzdGFtcFxuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2FnZSA9IChcbiAgICAgICAgbXNnLm1lc3NhZ2UgYXMge1xuICAgICAgICAgIHVzYWdlPzogeyBpbnB1dF90b2tlbnM/OiBudW1iZXI7IG91dHB1dF90b2tlbnM/OiBudW1iZXIgfVxuICAgICAgICB9XG4gICAgICApLnVzYWdlXG4gICAgICBpZiAodXNhZ2UpIHtcbiAgICAgICAgaW5wdXRUb2tlbnMgKz0gdXNhZ2UuaW5wdXRfdG9rZW5zIHx8IDBcbiAgICAgICAgb3V0cHV0VG9rZW5zICs9IHVzYWdlLm91dHB1dF90b2tlbnMgfHwgMFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gbXNnLm1lc3NhZ2UuY29udGVudFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0b29sX3VzZScgJiYgJ25hbWUnIGluIGJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCB0b29sTmFtZSA9IGJsb2NrLm5hbWUgYXMgc3RyaW5nXG4gICAgICAgICAgICB0b29sQ291bnRzW3Rvb2xOYW1lXSA9ICh0b29sQ291bnRzW3Rvb2xOYW1lXSB8fCAwKSArIDFcblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHNwZWNpYWwgdG9vbCB1c2FnZVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0b29sTmFtZSA9PT0gQUdFTlRfVE9PTF9OQU1FIHx8XG4gICAgICAgICAgICAgIHRvb2xOYW1lID09PSBMRUdBQ1lfQUdFTlRfVE9PTF9OQU1FXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHVzZXNUYXNrQWdlbnQgPSB0cnVlXG4gICAgICAgICAgICBpZiAodG9vbE5hbWUuc3RhcnRzV2l0aCgnbWNwX18nKSkgdXNlc01jcCA9IHRydWVcbiAgICAgICAgICAgIGlmICh0b29sTmFtZSA9PT0gJ1dlYlNlYXJjaCcpIHVzZXNXZWJTZWFyY2ggPSB0cnVlXG4gICAgICAgICAgICBpZiAodG9vbE5hbWUgPT09ICdXZWJGZXRjaCcpIHVzZXNXZWJGZXRjaCA9IHRydWVcblxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAoYmxvY2sgYXMgeyBpbnB1dD86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0pLmlucHV0XG5cbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IChpbnB1dC5maWxlX3BhdGggYXMgc3RyaW5nKSB8fCAnJ1xuICAgICAgICAgICAgICBpZiAoZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5nID0gZ2V0TGFuZ3VhZ2VGcm9tUGF0aChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICBpZiAobGFuZykge1xuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzW2xhbmddID0gKGxhbmd1YWdlc1tsYW5nXSB8fCAwKSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVHJhY2sgZmlsZXMgbW9kaWZpZWQgYnkgRWRpdC9Xcml0ZSB0b29sc1xuICAgICAgICAgICAgICAgIGlmICh0b29sTmFtZSA9PT0gJ0VkaXQnIHx8IHRvb2xOYW1lID09PSAnV3JpdGUnKSB7XG4gICAgICAgICAgICAgICAgICBmaWxlc01vZGlmaWVkLmFkZChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodG9vbE5hbWUgPT09ICdFZGl0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFN0cmluZyA9IChpbnB1dC5vbGRfc3RyaW5nIGFzIHN0cmluZykgfHwgJydcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHJpbmcgPSAoaW5wdXQubmV3X3N0cmluZyBhcyBzdHJpbmcpIHx8ICcnXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgZGlmZkxpbmVzKG9sZFN0cmluZywgbmV3U3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5hZGRlZCkgbGluZXNBZGRlZCArPSBjaGFuZ2UuY291bnQgfHwgMFxuICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5yZW1vdmVkKSBsaW5lc1JlbW92ZWQgKz0gY2hhbmdlLmNvdW50IHx8IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBUcmFjayBsaW5lcyBmcm9tIFdyaXRlIHRvb2wgKGFsbCBhZGRlZClcbiAgICAgICAgICAgICAgaWYgKHRvb2xOYW1lID09PSAnV3JpdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd3JpdGVDb250ZW50ID0gKGlucHV0LmNvbnRlbnQgYXMgc3RyaW5nKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGlmICh3cml0ZUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGxpbmVzQWRkZWQgKz0gY291bnRDaGFySW5TdHJpbmcod3JpdGVDb250ZW50LCAnXFxuJykgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IChpbnB1dC5jb21tYW5kIGFzIHN0cmluZykgfHwgJydcbiAgICAgICAgICAgICAgaWYgKGNvbW1hbmQuaW5jbHVkZXMoJ2dpdCBjb21taXQnKSkgZ2l0Q29tbWl0cysrXG4gICAgICAgICAgICAgIGlmIChjb21tYW5kLmluY2x1ZGVzKCdnaXQgcHVzaCcpKSBnaXRQdXNoZXMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHVzZXIgbWVzc2FnZXNcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBtc2cubWVzc2FnZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhbiBhY3R1YWwgaHVtYW4gbWVzc2FnZSAoaGFzIHRleHQpIHZzIGp1c3QgdG9vbF9yZXN1bHRcbiAgICAgIC8vIG1hdGNoaW5nIFB5dGhvbiByZWZlcmVuY2UgbG9naWNcbiAgICAgIGxldCBpc0h1bWFuTWVzc2FnZSA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIGNvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIGlzSHVtYW5NZXNzYWdlID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAndGV4dCcgJiYgJ3RleHQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgICBpc0h1bWFuTWVzc2FnZSA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgdHJhY2sgbWVzc2FnZSBob3VycyBhbmQgcmVzcG9uc2UgdGltZXMgZm9yIGFjdHVhbCBodW1hbiBtZXNzYWdlc1xuICAgICAgaWYgKGlzSHVtYW5NZXNzYWdlKSB7XG4gICAgICAgIC8vIFRyYWNrIG1lc3NhZ2UgaG91ciBmb3IgdGltZS1vZi1kYXkgYW5hbHlzaXMgYW5kIHRpbWVzdGFtcCBmb3IgbXVsdGktY2xhdWRpbmdcbiAgICAgICAgaWYgKG1zZ1RpbWVzdGFtcCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtc2dEYXRlID0gbmV3IERhdGUobXNnVGltZXN0YW1wKVxuICAgICAgICAgICAgY29uc3QgaG91ciA9IG1zZ0RhdGUuZ2V0SG91cnMoKSAvLyBMb2NhbCBob3VyIDAtMjNcbiAgICAgICAgICAgIG1lc3NhZ2VIb3Vycy5wdXNoKGhvdXIpXG4gICAgICAgICAgICAvLyBDb2xsZWN0IHRpbWVzdGFtcCBmb3IgbXVsdGktY2xhdWRpbmcgZGV0ZWN0aW9uIChtYXRjaGluZyBQeXRob24pXG4gICAgICAgICAgICB1c2VyTWVzc2FnZVRpbWVzdGFtcHMucHVzaChtc2dUaW1lc3RhbXApXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBTa2lwIGludmFsaWQgdGltZXN0YW1wc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZXNwb25zZSB0aW1lICh0aW1lIGZyb20gbGFzdCBhc3Npc3RhbnQgbWVzc2FnZSB0byB0aGlzIHVzZXIgbWVzc2FnZSlcbiAgICAgICAgLy8gT25seSBjb3VudCBnYXBzID4gMiBzZWNvbmRzIChyZWFsIHVzZXIgdGhpbmsgdGltZSwgbm90IHRvb2wgcmVzdWx0cylcbiAgICAgICAgaWYgKGxhc3RBc3Npc3RhbnRUaW1lc3RhbXAgJiYgbXNnVGltZXN0YW1wKSB7XG4gICAgICAgICAgY29uc3QgYXNzaXN0YW50VGltZSA9IG5ldyBEYXRlKGxhc3RBc3Npc3RhbnRUaW1lc3RhbXApLmdldFRpbWUoKVxuICAgICAgICAgIGNvbnN0IHVzZXJUaW1lID0gbmV3IERhdGUobXNnVGltZXN0YW1wKS5nZXRUaW1lKClcbiAgICAgICAgICBjb25zdCByZXNwb25zZVRpbWVTZWMgPSAodXNlclRpbWUgLSBhc3Npc3RhbnRUaW1lKSAvIDEwMDBcbiAgICAgICAgICAvLyBPbmx5IGNvdW50IHJlYXNvbmFibGUgcmVzcG9uc2UgdGltZXMgKDJzLTEgaG91cikgbWF0Y2hpbmcgUHl0aG9uXG4gICAgICAgICAgaWYgKHJlc3BvbnNlVGltZVNlYyA+IDIgJiYgcmVzcG9uc2VUaW1lU2VjIDwgMzYwMCkge1xuICAgICAgICAgICAgdXNlclJlc3BvbnNlVGltZXMucHVzaChyZXNwb25zZVRpbWVTZWMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2Nlc3MgdG9vbCByZXN1bHRzIChmb3IgZXJyb3IgdHJhY2tpbmcpXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3Rvb2xfcmVzdWx0JyAmJiAnY29udGVudCcgaW4gYmxvY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXJyb3IgPSAoYmxvY2sgYXMgeyBpc19lcnJvcj86IGJvb2xlYW4gfSkuaXNfZXJyb3JcblxuICAgICAgICAgICAgLy8gQ291bnQgYW5kIGNhdGVnb3JpemUgdG9vbCBlcnJvcnMgKG1hdGNoaW5nIFB5dGhvbiByZWZlcmVuY2UgbG9naWMpXG4gICAgICAgICAgICBpZiAoaXNFcnJvcikge1xuICAgICAgICAgICAgICB0b29sRXJyb3JzKytcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0Q29udGVudCA9IChibG9jayBhcyB7IGNvbnRlbnQ/OiBzdHJpbmcgfSkuY29udGVudFxuICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSAnT3RoZXInXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dlckNvbnRlbnQgPSByZXN1bHRDb250ZW50LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJDb250ZW50LmluY2x1ZGVzKCdleGl0IGNvZGUnKSkge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnQ29tbWFuZCBGYWlsZWQnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIGxvd2VyQ29udGVudC5pbmNsdWRlcygncmVqZWN0ZWQnKSB8fFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKFwiZG9lc24ndCB3YW50XCIpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICdVc2VyIFJlamVjdGVkJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ3N0cmluZyB0byByZXBsYWNlIG5vdCBmb3VuZCcpIHx8XG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ25vIGNoYW5nZXMnKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnRWRpdCBGYWlsZWQnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ21vZGlmaWVkIHNpbmNlIHJlYWQnKSkge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAnRmlsZSBDaGFuZ2VkJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ2V4Y2VlZHMgbWF4aW11bScpIHx8XG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ3RvbyBsYXJnZScpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICdGaWxlIFRvbyBMYXJnZSdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgbG93ZXJDb250ZW50LmluY2x1ZGVzKCdmaWxlIG5vdCBmb3VuZCcpIHx8XG4gICAgICAgICAgICAgICAgICBsb3dlckNvbnRlbnQuaW5jbHVkZXMoJ2RvZXMgbm90IGV4aXN0JylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJ0ZpbGUgTm90IEZvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b29sRXJyb3JDYXRlZ29yaWVzW2NhdGVnb3J5XSA9XG4gICAgICAgICAgICAgICAgKHRvb2xFcnJvckNhdGVnb3JpZXNbY2F0ZWdvcnldIHx8IDApICsgMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBmb3IgaW50ZXJydXB0aW9ucyAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSlcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQuaW5jbHVkZXMoJ1tSZXF1ZXN0IGludGVycnVwdGVkIGJ5IHVzZXInKSkge1xuICAgICAgICAgIHVzZXJJbnRlcnJ1cHRpb25zKytcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGJsb2NrLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICAgICAgJ3RleHQnIGluIGJsb2NrICYmXG4gICAgICAgICAgICAoYmxvY2sudGV4dCBhcyBzdHJpbmcpLmluY2x1ZGVzKCdbUmVxdWVzdCBpbnRlcnJ1cHRlZCBieSB1c2VyJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHVzZXJJbnRlcnJ1cHRpb25zKytcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b29sQ291bnRzLFxuICAgIGxhbmd1YWdlcyxcbiAgICBnaXRDb21taXRzLFxuICAgIGdpdFB1c2hlcyxcbiAgICBpbnB1dFRva2VucyxcbiAgICBvdXRwdXRUb2tlbnMsXG4gICAgLy8gTmV3IHN0YXRzXG4gICAgdXNlckludGVycnVwdGlvbnMsXG4gICAgdXNlclJlc3BvbnNlVGltZXMsXG4gICAgdG9vbEVycm9ycyxcbiAgICB0b29sRXJyb3JDYXRlZ29yaWVzLFxuICAgIHVzZXNUYXNrQWdlbnQsXG4gICAgdXNlc01jcCxcbiAgICB1c2VzV2ViU2VhcmNoLFxuICAgIHVzZXNXZWJGZXRjaCxcbiAgICAvLyBBZGRpdGlvbmFsIHN0YXRzXG4gICAgbGluZXNBZGRlZCxcbiAgICBsaW5lc1JlbW92ZWQsXG4gICAgZmlsZXNNb2RpZmllZCxcbiAgICBtZXNzYWdlSG91cnMsXG4gICAgdXNlck1lc3NhZ2VUaW1lc3RhbXBzLFxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkRGF0ZXMobG9nOiBMb2dPcHRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAhTnVtYmVyLmlzTmFOKGxvZy5jcmVhdGVkLmdldFRpbWUoKSkgJiZcbiAgICAhTnVtYmVyLmlzTmFOKGxvZy5tb2RpZmllZC5nZXRUaW1lKCkpXG4gIClcbn1cblxuZnVuY3Rpb24gbG9nVG9TZXNzaW9uTWV0YShsb2c6IExvZ09wdGlvbik6IFNlc3Npb25NZXRhIHtcbiAgY29uc3Qgc3RhdHMgPSBleHRyYWN0VG9vbFN0YXRzKGxvZylcbiAgY29uc3Qgc2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkRnJvbUxvZyhsb2cpIHx8ICd1bmtub3duJ1xuICBjb25zdCBzdGFydFRpbWUgPSBsb2cuY3JlYXRlZC50b0lTT1N0cmluZygpXG4gIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoXG4gICAgKGxvZy5tb2RpZmllZC5nZXRUaW1lKCkgLSBsb2cuY3JlYXRlZC5nZXRUaW1lKCkpIC8gMTAwMCAvIDYwLFxuICApXG5cbiAgbGV0IHVzZXJNZXNzYWdlQ291bnQgPSAwXG4gIGxldCBhc3Npc3RhbnRNZXNzYWdlQ291bnQgPSAwXG4gIGZvciAoY29uc3QgbXNnIG9mIGxvZy5tZXNzYWdlcykge1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIGFzc2lzdGFudE1lc3NhZ2VDb3VudCsrXG4gICAgLy8gT25seSBjb3VudCB1c2VyIG1lc3NhZ2VzIHRoYXQgaGF2ZSBhY3R1YWwgdGV4dCBjb250ZW50IChodW1hbiBtZXNzYWdlcylcbiAgICAvLyBub3QganVzdCB0b29sX3Jlc3VsdCBtZXNzYWdlcyAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSlcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBtc2cubWVzc2FnZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGxldCBpc0h1bWFuTWVzc2FnZSA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIGNvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIGlzSHVtYW5NZXNzYWdlID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAndGV4dCcgJiYgJ3RleHQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgICBpc0h1bWFuTWVzc2FnZSA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNIdW1hbk1lc3NhZ2UpIHtcbiAgICAgICAgdXNlck1lc3NhZ2VDb3VudCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXG4gICAgcHJvamVjdF9wYXRoOiBsb2cucHJvamVjdFBhdGggfHwgJycsXG4gICAgc3RhcnRfdGltZTogc3RhcnRUaW1lLFxuICAgIGR1cmF0aW9uX21pbnV0ZXM6IGR1cmF0aW9uTWludXRlcyxcbiAgICB1c2VyX21lc3NhZ2VfY291bnQ6IHVzZXJNZXNzYWdlQ291bnQsXG4gICAgYXNzaXN0YW50X21lc3NhZ2VfY291bnQ6IGFzc2lzdGFudE1lc3NhZ2VDb3VudCxcbiAgICB0b29sX2NvdW50czogc3RhdHMudG9vbENvdW50cyxcbiAgICBsYW5ndWFnZXM6IHN0YXRzLmxhbmd1YWdlcyxcbiAgICBnaXRfY29tbWl0czogc3RhdHMuZ2l0Q29tbWl0cyxcbiAgICBnaXRfcHVzaGVzOiBzdGF0cy5naXRQdXNoZXMsXG4gICAgaW5wdXRfdG9rZW5zOiBzdGF0cy5pbnB1dFRva2VucyxcbiAgICBvdXRwdXRfdG9rZW5zOiBzdGF0cy5vdXRwdXRUb2tlbnMsXG4gICAgZmlyc3RfcHJvbXB0OiBsb2cuZmlyc3RQcm9tcHQgfHwgJycsXG4gICAgc3VtbWFyeTogbG9nLnN1bW1hcnksXG4gICAgLy8gTmV3IHN0YXRzXG4gICAgdXNlcl9pbnRlcnJ1cHRpb25zOiBzdGF0cy51c2VySW50ZXJydXB0aW9ucyxcbiAgICB1c2VyX3Jlc3BvbnNlX3RpbWVzOiBzdGF0cy51c2VyUmVzcG9uc2VUaW1lcyxcbiAgICB0b29sX2Vycm9yczogc3RhdHMudG9vbEVycm9ycyxcbiAgICB0b29sX2Vycm9yX2NhdGVnb3JpZXM6IHN0YXRzLnRvb2xFcnJvckNhdGVnb3JpZXMsXG4gICAgdXNlc190YXNrX2FnZW50OiBzdGF0cy51c2VzVGFza0FnZW50LFxuICAgIHVzZXNfbWNwOiBzdGF0cy51c2VzTWNwLFxuICAgIHVzZXNfd2ViX3NlYXJjaDogc3RhdHMudXNlc1dlYlNlYXJjaCxcbiAgICB1c2VzX3dlYl9mZXRjaDogc3RhdHMudXNlc1dlYkZldGNoLFxuICAgIC8vIEFkZGl0aW9uYWwgc3RhdHNcbiAgICBsaW5lc19hZGRlZDogc3RhdHMubGluZXNBZGRlZCxcbiAgICBsaW5lc19yZW1vdmVkOiBzdGF0cy5saW5lc1JlbW92ZWQsXG4gICAgZmlsZXNfbW9kaWZpZWQ6IHN0YXRzLmZpbGVzTW9kaWZpZWQuc2l6ZSxcbiAgICBtZXNzYWdlX2hvdXJzOiBzdGF0cy5tZXNzYWdlSG91cnMsXG4gICAgdXNlcl9tZXNzYWdlX3RpbWVzdGFtcHM6IHN0YXRzLnVzZXJNZXNzYWdlVGltZXN0YW1wcyxcbiAgfVxufVxuXG4vKipcbiAqIERlZHVwbGljYXRlIGNvbnZlcnNhdGlvbiBicmFuY2hlcyB3aXRoaW4gdGhlIHNhbWUgc2Vzc2lvbi5cbiAqXG4gKiBXaGVuIGEgc2Vzc2lvbiBmaWxlIGhhcyBtdWx0aXBsZSBsZWFmIG1lc3NhZ2VzIChmcm9tIHJldHJpZXMgb3IgYnJhbmNoaW5nKSxcbiAqIGxvYWRBbGxMb2dzRnJvbVNlc3Npb25GaWxlIHByb2R1Y2VzIG9uZSBMb2dPcHRpb24gcGVyIGxlYWYuIEVhY2ggYnJhbmNoXG4gKiBzaGFyZXMgdGhlIHNhbWUgcm9vdCBtZXNzYWdlLCBzbyBpdHMgZHVyYXRpb24gb3ZlcmxhcHMgd2l0aCBzaWJsaW5nXG4gKiBicmFuY2hlcy4gVGhpcyBrZWVwcyBvbmx5IHRoZSBicmFuY2ggd2l0aCB0aGUgbW9zdCB1c2VyIG1lc3NhZ2VzXG4gKiAodGllLWJyZWFrIGJ5IGxvbmdlc3QgZHVyYXRpb24pIHBlciBzZXNzaW9uX2lkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVkdXBsaWNhdGVTZXNzaW9uQnJhbmNoZXMoXG4gIGVudHJpZXM6IEFycmF5PHsgbG9nOiBMb2dPcHRpb247IG1ldGE6IFNlc3Npb25NZXRhIH0+LFxuKTogQXJyYXk8eyBsb2c6IExvZ09wdGlvbjsgbWV0YTogU2Vzc2lvbk1ldGEgfT4ge1xuICBjb25zdCBiZXN0QnlTZXNzaW9uID0gbmV3IE1hcDxzdHJpbmcsIHsgbG9nOiBMb2dPcHRpb247IG1ldGE6IFNlc3Npb25NZXRhIH0+KClcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgaWQgPSBlbnRyeS5tZXRhLnNlc3Npb25faWRcbiAgICBjb25zdCBleGlzdGluZyA9IGJlc3RCeVNlc3Npb24uZ2V0KGlkKVxuICAgIGlmIChcbiAgICAgICFleGlzdGluZyB8fFxuICAgICAgZW50cnkubWV0YS51c2VyX21lc3NhZ2VfY291bnQgPiBleGlzdGluZy5tZXRhLnVzZXJfbWVzc2FnZV9jb3VudCB8fFxuICAgICAgKGVudHJ5Lm1ldGEudXNlcl9tZXNzYWdlX2NvdW50ID09PSBleGlzdGluZy5tZXRhLnVzZXJfbWVzc2FnZV9jb3VudCAmJlxuICAgICAgICBlbnRyeS5tZXRhLmR1cmF0aW9uX21pbnV0ZXMgPiBleGlzdGluZy5tZXRhLmR1cmF0aW9uX21pbnV0ZXMpXG4gICAgKSB7XG4gICAgICBiZXN0QnlTZXNzaW9uLnNldChpZCwgZW50cnkpXG4gICAgfVxuICB9XG4gIHJldHVybiBbLi4uYmVzdEJ5U2Vzc2lvbi52YWx1ZXMoKV1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VHJhbnNjcmlwdEZvckZhY2V0cyhsb2c6IExvZ09wdGlvbik6IHN0cmluZyB7XG4gIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IG1ldGEgPSBsb2dUb1Nlc3Npb25NZXRhKGxvZylcblxuICBsaW5lcy5wdXNoKGBTZXNzaW9uOiAke21ldGEuc2Vzc2lvbl9pZC5zbGljZSgwLCA4KX1gKVxuICBsaW5lcy5wdXNoKGBEYXRlOiAke21ldGEuc3RhcnRfdGltZX1gKVxuICBsaW5lcy5wdXNoKGBQcm9qZWN0OiAke21ldGEucHJvamVjdF9wYXRofWApXG4gIGxpbmVzLnB1c2goYER1cmF0aW9uOiAke21ldGEuZHVyYXRpb25fbWludXRlc30gbWluYClcbiAgbGluZXMucHVzaCgnJylcblxuICBmb3IgKGNvbnN0IG1zZyBvZiBsb2cubWVzc2FnZXMpIHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1c2VyJyAmJiBtc2cubWVzc2FnZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGluZXMucHVzaChgW1VzZXJdOiAke2NvbnRlbnQuc2xpY2UoMCwgNTAwKX1gKVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAndGV4dCcgJiYgJ3RleHQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGBbVXNlcl06ICR7KGJsb2NrLnRleHQgYXMgc3RyaW5nKS5zbGljZSgwLCA1MDApfWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICd0ZXh0JyBpbiBibG9jaykge1xuICAgICAgICAgICAgbGluZXMucHVzaChgW0Fzc2lzdGFudF06ICR7KGJsb2NrLnRleHQgYXMgc3RyaW5nKS5zbGljZSgwLCAzMDApfWApXG4gICAgICAgICAgfSBlbHNlIGlmIChibG9jay50eXBlID09PSAndG9vbF91c2UnICYmICduYW1lJyBpbiBibG9jaykge1xuICAgICAgICAgICAgbGluZXMucHVzaChgW1Rvb2w6ICR7YmxvY2submFtZX1dYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGluZXMuam9pbignXFxuJylcbn1cblxuY29uc3QgU1VNTUFSSVpFX0NIVU5LX1BST01QVCA9IGBTdW1tYXJpemUgdGhpcyBwb3J0aW9uIG9mIGEgQ2xhdWRlIENvZGUgc2Vzc2lvbiB0cmFuc2NyaXB0LiBGb2N1cyBvbjpcbjEuIFdoYXQgdGhlIHVzZXIgYXNrZWQgZm9yXG4yLiBXaGF0IENsYXVkZSBkaWQgKHRvb2xzIHVzZWQsIGZpbGVzIG1vZGlmaWVkKVxuMy4gQW55IGZyaWN0aW9uIG9yIGlzc3Vlc1xuNC4gVGhlIG91dGNvbWVcblxuS2VlcCBpdCBjb25jaXNlIC0gMy01IHNlbnRlbmNlcy4gUHJlc2VydmUgc3BlY2lmaWMgZGV0YWlscyBsaWtlIGZpbGUgbmFtZXMsIGVycm9yIG1lc3NhZ2VzLCBhbmQgdXNlciBmZWVkYmFjay5cblxuVFJBTlNDUklQVCBDSFVOSzpcbmBcblxuYXN5bmMgZnVuY3Rpb24gc3VtbWFyaXplVHJhbnNjcmlwdENodW5rKGNodW5rOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5V2l0aE1vZGVsKHtcbiAgICAgIHN5c3RlbVByb21wdDogYXNTeXN0ZW1Qcm9tcHQoW10pLFxuICAgICAgdXNlclByb21wdDogU1VNTUFSSVpFX0NIVU5LX1BST01QVCArIGNodW5rLFxuICAgICAgc2lnbmFsOiBuZXcgQWJvcnRDb250cm9sbGVyKCkuc2lnbmFsLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtb2RlbDogZ2V0QW5hbHlzaXNNb2RlbCgpLFxuICAgICAgICBxdWVyeVNvdXJjZTogJ2luc2lnaHRzJyxcbiAgICAgICAgYWdlbnRzOiBbXSxcbiAgICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IHRydWUsXG4gICAgICAgIGhhc0FwcGVuZFN5c3RlbVByb21wdDogZmFsc2UsXG4gICAgICAgIG1jcFRvb2xzOiBbXSxcbiAgICAgICAgbWF4T3V0cHV0VG9rZW5zT3ZlcnJpZGU6IDUwMCxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzdWx0Lm1lc3NhZ2UuY29udGVudClcbiAgICByZXR1cm4gdGV4dCB8fCBjaHVuay5zbGljZSgwLCAyMDAwKVxuICB9IGNhdGNoIHtcbiAgICAvLyBPbiBlcnJvciwganVzdCByZXR1cm4gdHJ1bmNhdGVkIGNodW5rXG4gICAgcmV0dXJuIGNodW5rLnNsaWNlKDAsIDIwMDApXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZm9ybWF0VHJhbnNjcmlwdFdpdGhTdW1tYXJpemF0aW9uKFxuICBsb2c6IExvZ09wdGlvbixcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGZ1bGxUcmFuc2NyaXB0ID0gZm9ybWF0VHJhbnNjcmlwdEZvckZhY2V0cyhsb2cpXG5cbiAgLy8gSWYgdW5kZXIgMzBrIGNoYXJzLCB1c2UgYXMtaXNcbiAgaWYgKGZ1bGxUcmFuc2NyaXB0Lmxlbmd0aCA8PSAzMDAwMCkge1xuICAgIHJldHVybiBmdWxsVHJhbnNjcmlwdFxuICB9XG5cbiAgLy8gRm9yIGxvbmcgdHJhbnNjcmlwdHMsIHNwbGl0IGludG8gY2h1bmtzIGFuZCBzdW1tYXJpemUgaW4gcGFyYWxsZWxcbiAgY29uc3QgQ0hVTktfU0laRSA9IDI1MDAwXG4gIGNvbnN0IGNodW5rczogc3RyaW5nW10gPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnVsbFRyYW5zY3JpcHQubGVuZ3RoOyBpICs9IENIVU5LX1NJWkUpIHtcbiAgICBjaHVua3MucHVzaChmdWxsVHJhbnNjcmlwdC5zbGljZShpLCBpICsgQ0hVTktfU0laRSkpXG4gIH1cblxuICAvLyBTdW1tYXJpemUgYWxsIGNodW5rcyBpbiBwYXJhbGxlbFxuICBjb25zdCBzdW1tYXJpZXMgPSBhd2FpdCBQcm9taXNlLmFsbChjaHVua3MubWFwKHN1bW1hcml6ZVRyYW5zY3JpcHRDaHVuaykpXG5cbiAgLy8gQ29tYmluZSBzdW1tYXJpZXMgd2l0aCBzZXNzaW9uIGhlYWRlclxuICBjb25zdCBtZXRhID0gbG9nVG9TZXNzaW9uTWV0YShsb2cpXG4gIGNvbnN0IGhlYWRlciA9IFtcbiAgICBgU2Vzc2lvbjogJHttZXRhLnNlc3Npb25faWQuc2xpY2UoMCwgOCl9YCxcbiAgICBgRGF0ZTogJHttZXRhLnN0YXJ0X3RpbWV9YCxcbiAgICBgUHJvamVjdDogJHttZXRhLnByb2plY3RfcGF0aH1gLFxuICAgIGBEdXJhdGlvbjogJHttZXRhLmR1cmF0aW9uX21pbnV0ZXN9IG1pbmAsXG4gICAgYFtMb25nIHNlc3Npb24gLSAke2NodW5rcy5sZW5ndGh9IHBhcnRzIHN1bW1hcml6ZWRdYCxcbiAgICAnJyxcbiAgXS5qb2luKCdcXG4nKVxuXG4gIHJldHVybiBoZWFkZXIgKyBzdW1tYXJpZXMuam9pbignXFxuXFxuLS0tXFxuXFxuJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENhY2hlZEZhY2V0cyhcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4pOiBQcm9taXNlPFNlc3Npb25GYWNldHMgfCBudWxsPiB7XG4gIGNvbnN0IGZhY2V0UGF0aCA9IGpvaW4oZ2V0RmFjZXRzRGlyKCksIGAke3Nlc3Npb25JZH0uanNvbmApXG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZhY2V0UGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICAgIGNvbnN0IHBhcnNlZDogdW5rbm93biA9IGpzb25QYXJzZShjb250ZW50KVxuICAgIGlmICghaXNWYWxpZFNlc3Npb25GYWNldHMocGFyc2VkKSkge1xuICAgICAgLy8gRGVsZXRlIGNvcnJ1cHRlZCBjYWNoZSBmaWxlIHNvIGl0IGdldHMgcmUtZXh0cmFjdGVkIG5leHQgcnVuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB1bmxpbmsoZmFjZXRQYXRoKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIElnbm9yZSBkZWxldGlvbiBlcnJvcnNcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzYXZlRmFjZXRzKGZhY2V0czogU2Vzc2lvbkZhY2V0cyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1rZGlyKGdldEZhY2V0c0RpcigpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB9IGNhdGNoIHtcbiAgICAvLyBEaXJlY3RvcnkgbWF5IGFscmVhZHkgZXhpc3RcbiAgfVxuICBjb25zdCBmYWNldFBhdGggPSBqb2luKGdldEZhY2V0c0RpcigpLCBgJHtmYWNldHMuc2Vzc2lvbl9pZH0uanNvbmApXG4gIGF3YWl0IHdyaXRlRmlsZShmYWNldFBhdGgsIGpzb25TdHJpbmdpZnkoZmFjZXRzLCBudWxsLCAyKSwge1xuICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgIG1vZGU6IDBvNjAwLFxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ2FjaGVkU2Vzc2lvbk1ldGEoXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxTZXNzaW9uTWV0YSB8IG51bGw+IHtcbiAgY29uc3QgbWV0YVBhdGggPSBqb2luKGdldFNlc3Npb25NZXRhRGlyKCksIGAke3Nlc3Npb25JZH0uanNvbmApXG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKG1ldGFQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgcmV0dXJuIGpzb25QYXJzZShjb250ZW50KVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTZXNzaW9uTWV0YShtZXRhOiBTZXNzaW9uTWV0YSk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1rZGlyKGdldFNlc3Npb25NZXRhRGlyKCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH0gY2F0Y2gge1xuICAgIC8vIERpcmVjdG9yeSBtYXkgYWxyZWFkeSBleGlzdFxuICB9XG4gIGNvbnN0IG1ldGFQYXRoID0gam9pbihnZXRTZXNzaW9uTWV0YURpcigpLCBgJHttZXRhLnNlc3Npb25faWR9Lmpzb25gKVxuICBhd2FpdCB3cml0ZUZpbGUobWV0YVBhdGgsIGpzb25TdHJpbmdpZnkobWV0YSwgbnVsbCwgMiksIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICBtb2RlOiAwbzYwMCxcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEZhY2V0c0Zyb21BUEkoXG4gIGxvZzogTG9nT3B0aW9uLFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbik6IFByb21pc2U8U2Vzc2lvbkZhY2V0cyB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICAvLyBVc2Ugc3VtbWFyaXphdGlvbiBmb3IgbG9uZyB0cmFuc2NyaXB0c1xuICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBhd2FpdCBmb3JtYXRUcmFuc2NyaXB0V2l0aFN1bW1hcml6YXRpb24obG9nKVxuXG4gICAgLy8gQnVpbGQgcHJvbXB0IGFza2luZyBmb3IgSlNPTiBkaXJlY3RseSAobm8gdG9vbCB1c2UpXG4gICAgY29uc3QganNvblByb21wdCA9IGAke0ZBQ0VUX0VYVFJBQ1RJT05fUFJPTVBUfSR7dHJhbnNjcmlwdH1cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVCBtYXRjaGluZyB0aGlzIHNjaGVtYTpcbntcbiAgXCJ1bmRlcmx5aW5nX2dvYWxcIjogXCJXaGF0IHRoZSB1c2VyIGZ1bmRhbWVudGFsbHkgd2FudGVkIHRvIGFjaGlldmVcIixcbiAgXCJnb2FsX2NhdGVnb3JpZXNcIjoge1wiY2F0ZWdvcnlfbmFtZVwiOiBjb3VudCwgLi4ufSxcbiAgXCJvdXRjb21lXCI6IFwiZnVsbHlfYWNoaWV2ZWR8bW9zdGx5X2FjaGlldmVkfHBhcnRpYWxseV9hY2hpZXZlZHxub3RfYWNoaWV2ZWR8dW5jbGVhcl9mcm9tX3RyYW5zY3JpcHRcIixcbiAgXCJ1c2VyX3NhdGlzZmFjdGlvbl9jb3VudHNcIjoge1wibGV2ZWxcIjogY291bnQsIC4uLn0sXG4gIFwiY2xhdWRlX2hlbHBmdWxuZXNzXCI6IFwidW5oZWxwZnVsfHNsaWdodGx5X2hlbHBmdWx8bW9kZXJhdGVseV9oZWxwZnVsfHZlcnlfaGVscGZ1bHxlc3NlbnRpYWxcIixcbiAgXCJzZXNzaW9uX3R5cGVcIjogXCJzaW5nbGVfdGFza3xtdWx0aV90YXNrfGl0ZXJhdGl2ZV9yZWZpbmVtZW50fGV4cGxvcmF0aW9ufHF1aWNrX3F1ZXN0aW9uXCIsXG4gIFwiZnJpY3Rpb25fY291bnRzXCI6IHtcImZyaWN0aW9uX3R5cGVcIjogY291bnQsIC4uLn0sXG4gIFwiZnJpY3Rpb25fZGV0YWlsXCI6IFwiT25lIHNlbnRlbmNlIGRlc2NyaWJpbmcgZnJpY3Rpb24gb3IgZW1wdHlcIixcbiAgXCJwcmltYXJ5X3N1Y2Nlc3NcIjogXCJub25lfGZhc3RfYWNjdXJhdGVfc2VhcmNofGNvcnJlY3RfY29kZV9lZGl0c3xnb29kX2V4cGxhbmF0aW9uc3xwcm9hY3RpdmVfaGVscHxtdWx0aV9maWxlX2NoYW5nZXN8Z29vZF9kZWJ1Z2dpbmdcIixcbiAgXCJicmllZl9zdW1tYXJ5XCI6IFwiT25lIHNlbnRlbmNlOiB3aGF0IHVzZXIgd2FudGVkIGFuZCB3aGV0aGVyIHRoZXkgZ290IGl0XCJcbn1gXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeVdpdGhNb2RlbCh7XG4gICAgICBzeXN0ZW1Qcm9tcHQ6IGFzU3lzdGVtUHJvbXB0KFtdKSxcbiAgICAgIHVzZXJQcm9tcHQ6IGpzb25Qcm9tcHQsXG4gICAgICBzaWduYWw6IG5ldyBBYm9ydENvbnRyb2xsZXIoKS5zaWduYWwsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG1vZGVsOiBnZXRBbmFseXNpc01vZGVsKCksXG4gICAgICAgIHF1ZXJ5U291cmNlOiAnaW5zaWdodHMnLFxuICAgICAgICBhZ2VudHM6IFtdLFxuICAgICAgICBpc05vbkludGVyYWN0aXZlU2Vzc2lvbjogdHJ1ZSxcbiAgICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OiBmYWxzZSxcbiAgICAgICAgbWNwVG9vbHM6IFtdLFxuICAgICAgICBtYXhPdXRwdXRUb2tlbnNPdmVycmlkZTogNDA5NixcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzdWx0Lm1lc3NhZ2UuY29udGVudClcblxuICAgIC8vIFBhcnNlIEpTT04gZnJvbSByZXNwb25zZVxuICAgIGNvbnN0IGpzb25NYXRjaCA9IHRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pXG4gICAgaWYgKCFqc29uTWF0Y2gpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCBwYXJzZWQ6IHVua25vd24gPSBqc29uUGFyc2UoanNvbk1hdGNoWzBdKVxuICAgIGlmICghaXNWYWxpZFNlc3Npb25GYWNldHMocGFyc2VkKSkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBmYWNldHM6IFNlc3Npb25GYWNldHMgPSB7IC4uLnBhcnNlZCwgc2Vzc2lvbl9pZDogc2Vzc2lvbklkIH1cbiAgICByZXR1cm4gZmFjZXRzXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgRmFjZXQgZXh0cmFjdGlvbiBmYWlsZWQ6ICR7dG9FcnJvcihlcnIpLm1lc3NhZ2V9YCkpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIERldGVjdHMgbXVsdGktY2xhdWRpbmcgKHVzaW5nIG11bHRpcGxlIENsYXVkZSBzZXNzaW9ucyBjb25jdXJyZW50bHkpLlxuICogVXNlcyBhIHNsaWRpbmcgd2luZG93IHRvIGZpbmQgdGhlIHBhdHRlcm46IHNlc3Npb24xIC0+IHNlc3Npb24yIC0+IHNlc3Npb24xXG4gKiB3aXRoaW4gYSAzMC1taW51dGUgd2luZG93LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0TXVsdGlDbGF1ZGluZyhcbiAgc2Vzc2lvbnM6IEFycmF5PHtcbiAgICBzZXNzaW9uX2lkOiBzdHJpbmdcbiAgICB1c2VyX21lc3NhZ2VfdGltZXN0YW1wczogc3RyaW5nW11cbiAgfT4sXG4pOiB7XG4gIG92ZXJsYXBfZXZlbnRzOiBudW1iZXJcbiAgc2Vzc2lvbnNfaW52b2x2ZWQ6IG51bWJlclxuICB1c2VyX21lc3NhZ2VzX2R1cmluZzogbnVtYmVyXG59IHtcbiAgY29uc3QgT1ZFUkxBUF9XSU5ET1dfTVMgPSAzMCAqIDYwMDAwXG4gIGNvbnN0IGFsbFNlc3Npb25NZXNzYWdlczogQXJyYXk8eyB0czogbnVtYmVyOyBzZXNzaW9uSWQ6IHN0cmluZyB9PiA9IFtdXG5cbiAgZm9yIChjb25zdCBzZXNzaW9uIG9mIHNlc3Npb25zKSB7XG4gICAgZm9yIChjb25zdCB0aW1lc3RhbXAgb2Ygc2Vzc2lvbi51c2VyX21lc3NhZ2VfdGltZXN0YW1wcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHMgPSBuZXcgRGF0ZSh0aW1lc3RhbXApLmdldFRpbWUoKVxuICAgICAgICBhbGxTZXNzaW9uTWVzc2FnZXMucHVzaCh7IHRzLCBzZXNzaW9uSWQ6IHNlc3Npb24uc2Vzc2lvbl9pZCB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIFNraXAgaW52YWxpZCB0aW1lc3RhbXBzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsU2Vzc2lvbk1lc3NhZ2VzLnNvcnQoKGEsIGIpID0+IGEudHMgLSBiLnRzKVxuXG4gIGNvbnN0IG11bHRpQ2xhdWRlU2Vzc2lvblBhaXJzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3QgbWVzc2FnZXNEdXJpbmdNdWx0aWNsYXVkZSA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgLy8gU2xpZGluZyB3aW5kb3c6IHNlc3Npb25MYXN0SW5kZXggdHJhY2tzIHRoZSBtb3N0IHJlY2VudCBpbmRleCBmb3IgZWFjaCBzZXNzaW9uXG4gIGxldCB3aW5kb3dTdGFydCA9IDBcbiAgY29uc3Qgc2Vzc2lvbkxhc3RJbmRleCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNlc3Npb25NZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1zZyA9IGFsbFNlc3Npb25NZXNzYWdlc1tpXSFcblxuICAgIC8vIFNocmluayB3aW5kb3cgZnJvbSB0aGUgbGVmdFxuICAgIHdoaWxlIChcbiAgICAgIHdpbmRvd1N0YXJ0IDwgaSAmJlxuICAgICAgbXNnLnRzIC0gYWxsU2Vzc2lvbk1lc3NhZ2VzW3dpbmRvd1N0YXJ0XSEudHMgPiBPVkVSTEFQX1dJTkRPV19NU1xuICAgICkge1xuICAgICAgY29uc3QgZXhwaXJpbmcgPSBhbGxTZXNzaW9uTWVzc2FnZXNbd2luZG93U3RhcnRdIVxuICAgICAgaWYgKHNlc3Npb25MYXN0SW5kZXguZ2V0KGV4cGlyaW5nLnNlc3Npb25JZCkgPT09IHdpbmRvd1N0YXJ0KSB7XG4gICAgICAgIHNlc3Npb25MYXN0SW5kZXguZGVsZXRlKGV4cGlyaW5nLnNlc3Npb25JZClcbiAgICAgIH1cbiAgICAgIHdpbmRvd1N0YXJ0KytcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGlzIHNlc3Npb24gYXBwZWFyZWQgZWFybGllciBpbiB0aGUgd2luZG93IChwYXR0ZXJuOiBzMSAtPiBzMiAtPiBzMSlcbiAgICBjb25zdCBwcmV2SW5kZXggPSBzZXNzaW9uTGFzdEluZGV4LmdldChtc2cuc2Vzc2lvbklkKVxuICAgIGlmIChwcmV2SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChsZXQgaiA9IHByZXZJbmRleCArIDE7IGogPCBpOyBqKyspIHtcbiAgICAgICAgY29uc3QgYmV0d2VlbiA9IGFsbFNlc3Npb25NZXNzYWdlc1tqXSFcbiAgICAgICAgaWYgKGJldHdlZW4uc2Vzc2lvbklkICE9PSBtc2cuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgY29uc3QgcGFpciA9IFttc2cuc2Vzc2lvbklkLCBiZXR3ZWVuLnNlc3Npb25JZF0uc29ydCgpLmpvaW4oJzonKVxuICAgICAgICAgIG11bHRpQ2xhdWRlU2Vzc2lvblBhaXJzLmFkZChwYWlyKVxuICAgICAgICAgIG1lc3NhZ2VzRHVyaW5nTXVsdGljbGF1ZGUuYWRkKFxuICAgICAgICAgICAgYCR7YWxsU2Vzc2lvbk1lc3NhZ2VzW3ByZXZJbmRleF0hLnRzfToke21zZy5zZXNzaW9uSWR9YCxcbiAgICAgICAgICApXG4gICAgICAgICAgbWVzc2FnZXNEdXJpbmdNdWx0aWNsYXVkZS5hZGQoYCR7YmV0d2Vlbi50c306JHtiZXR3ZWVuLnNlc3Npb25JZH1gKVxuICAgICAgICAgIG1lc3NhZ2VzRHVyaW5nTXVsdGljbGF1ZGUuYWRkKGAke21zZy50c306JHttc2cuc2Vzc2lvbklkfWApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlc3Npb25MYXN0SW5kZXguc2V0KG1zZy5zZXNzaW9uSWQsIGkpXG4gIH1cblxuICBjb25zdCBzZXNzaW9uc1dpdGhPdmVybGFwcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgcGFpciBvZiBtdWx0aUNsYXVkZVNlc3Npb25QYWlycykge1xuICAgIGNvbnN0IFtzMSwgczJdID0gcGFpci5zcGxpdCgnOicpXG4gICAgaWYgKHMxKSBzZXNzaW9uc1dpdGhPdmVybGFwcy5hZGQoczEpXG4gICAgaWYgKHMyKSBzZXNzaW9uc1dpdGhPdmVybGFwcy5hZGQoczIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG92ZXJsYXBfZXZlbnRzOiBtdWx0aUNsYXVkZVNlc3Npb25QYWlycy5zaXplLFxuICAgIHNlc3Npb25zX2ludm9sdmVkOiBzZXNzaW9uc1dpdGhPdmVybGFwcy5zaXplLFxuICAgIHVzZXJfbWVzc2FnZXNfZHVyaW5nOiBtZXNzYWdlc0R1cmluZ011bHRpY2xhdWRlLnNpemUsXG4gIH1cbn1cblxuZnVuY3Rpb24gYWdncmVnYXRlRGF0YShcbiAgc2Vzc2lvbnM6IFNlc3Npb25NZXRhW10sXG4gIGZhY2V0czogTWFwPHN0cmluZywgU2Vzc2lvbkZhY2V0cz4sXG4pOiBBZ2dyZWdhdGVkRGF0YSB7XG4gIGNvbnN0IHJlc3VsdDogQWdncmVnYXRlZERhdGEgPSB7XG4gICAgdG90YWxfc2Vzc2lvbnM6IHNlc3Npb25zLmxlbmd0aCxcbiAgICBzZXNzaW9uc193aXRoX2ZhY2V0czogZmFjZXRzLnNpemUsXG4gICAgZGF0ZV9yYW5nZTogeyBzdGFydDogJycsIGVuZDogJycgfSxcbiAgICB0b3RhbF9tZXNzYWdlczogMCxcbiAgICB0b3RhbF9kdXJhdGlvbl9ob3VyczogMCxcbiAgICB0b3RhbF9pbnB1dF90b2tlbnM6IDAsXG4gICAgdG90YWxfb3V0cHV0X3Rva2VuczogMCxcbiAgICB0b29sX2NvdW50czoge30sXG4gICAgbGFuZ3VhZ2VzOiB7fSxcbiAgICBnaXRfY29tbWl0czogMCxcbiAgICBnaXRfcHVzaGVzOiAwLFxuICAgIHByb2plY3RzOiB7fSxcbiAgICBnb2FsX2NhdGVnb3JpZXM6IHt9LFxuICAgIG91dGNvbWVzOiB7fSxcbiAgICBzYXRpc2ZhY3Rpb246IHt9LFxuICAgIGhlbHBmdWxuZXNzOiB7fSxcbiAgICBzZXNzaW9uX3R5cGVzOiB7fSxcbiAgICBmcmljdGlvbjoge30sXG4gICAgc3VjY2Vzczoge30sXG4gICAgc2Vzc2lvbl9zdW1tYXJpZXM6IFtdLFxuICAgIC8vIE5ldyBzdGF0c1xuICAgIHRvdGFsX2ludGVycnVwdGlvbnM6IDAsXG4gICAgdG90YWxfdG9vbF9lcnJvcnM6IDAsXG4gICAgdG9vbF9lcnJvcl9jYXRlZ29yaWVzOiB7fSxcbiAgICB1c2VyX3Jlc3BvbnNlX3RpbWVzOiBbXSxcbiAgICBtZWRpYW5fcmVzcG9uc2VfdGltZTogMCxcbiAgICBhdmdfcmVzcG9uc2VfdGltZTogMCxcbiAgICBzZXNzaW9uc191c2luZ190YXNrX2FnZW50OiAwLFxuICAgIHNlc3Npb25zX3VzaW5nX21jcDogMCxcbiAgICBzZXNzaW9uc191c2luZ193ZWJfc2VhcmNoOiAwLFxuICAgIHNlc3Npb25zX3VzaW5nX3dlYl9mZXRjaDogMCxcbiAgICAvLyBBZGRpdGlvbmFsIHN0YXRzXG4gICAgdG90YWxfbGluZXNfYWRkZWQ6IDAsXG4gICAgdG90YWxfbGluZXNfcmVtb3ZlZDogMCxcbiAgICB0b3RhbF9maWxlc19tb2RpZmllZDogMCxcbiAgICBkYXlzX2FjdGl2ZTogMCxcbiAgICBtZXNzYWdlc19wZXJfZGF5OiAwLFxuICAgIG1lc3NhZ2VfaG91cnM6IFtdLFxuICAgIC8vIE11bHRpLWNsYXVkaW5nIHN0YXRzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuICAgIG11bHRpX2NsYXVkaW5nOiB7XG4gICAgICBvdmVybGFwX2V2ZW50czogMCxcbiAgICAgIHNlc3Npb25zX2ludm9sdmVkOiAwLFxuICAgICAgdXNlcl9tZXNzYWdlc19kdXJpbmc6IDAsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGRhdGVzOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IGFsbFJlc3BvbnNlVGltZXM6IG51bWJlcltdID0gW11cbiAgY29uc3QgYWxsTWVzc2FnZUhvdXJzOiBudW1iZXJbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBzZXNzaW9uIG9mIHNlc3Npb25zKSB7XG4gICAgZGF0ZXMucHVzaChzZXNzaW9uLnN0YXJ0X3RpbWUpXG4gICAgcmVzdWx0LnRvdGFsX21lc3NhZ2VzICs9IHNlc3Npb24udXNlcl9tZXNzYWdlX2NvdW50XG4gICAgcmVzdWx0LnRvdGFsX2R1cmF0aW9uX2hvdXJzICs9IHNlc3Npb24uZHVyYXRpb25fbWludXRlcyAvIDYwXG4gICAgcmVzdWx0LnRvdGFsX2lucHV0X3Rva2VucyArPSBzZXNzaW9uLmlucHV0X3Rva2Vuc1xuICAgIHJlc3VsdC50b3RhbF9vdXRwdXRfdG9rZW5zICs9IHNlc3Npb24ub3V0cHV0X3Rva2Vuc1xuICAgIHJlc3VsdC5naXRfY29tbWl0cyArPSBzZXNzaW9uLmdpdF9jb21taXRzXG4gICAgcmVzdWx0LmdpdF9wdXNoZXMgKz0gc2Vzc2lvbi5naXRfcHVzaGVzXG5cbiAgICAvLyBOZXcgc3RhdHMgYWdncmVnYXRpb25cbiAgICByZXN1bHQudG90YWxfaW50ZXJydXB0aW9ucyArPSBzZXNzaW9uLnVzZXJfaW50ZXJydXB0aW9uc1xuICAgIHJlc3VsdC50b3RhbF90b29sX2Vycm9ycyArPSBzZXNzaW9uLnRvb2xfZXJyb3JzXG4gICAgZm9yIChjb25zdCBbY2F0LCBjb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoc2Vzc2lvbi50b29sX2Vycm9yX2NhdGVnb3JpZXMpKSB7XG4gICAgICByZXN1bHQudG9vbF9lcnJvcl9jYXRlZ29yaWVzW2NhdF0gPVxuICAgICAgICAocmVzdWx0LnRvb2xfZXJyb3JfY2F0ZWdvcmllc1tjYXRdIHx8IDApICsgY291bnRcbiAgICB9XG4gICAgYWxsUmVzcG9uc2VUaW1lcy5wdXNoKC4uLnNlc3Npb24udXNlcl9yZXNwb25zZV90aW1lcylcbiAgICBpZiAoc2Vzc2lvbi51c2VzX3Rhc2tfYWdlbnQpIHJlc3VsdC5zZXNzaW9uc191c2luZ190YXNrX2FnZW50KytcbiAgICBpZiAoc2Vzc2lvbi51c2VzX21jcCkgcmVzdWx0LnNlc3Npb25zX3VzaW5nX21jcCsrXG4gICAgaWYgKHNlc3Npb24udXNlc193ZWJfc2VhcmNoKSByZXN1bHQuc2Vzc2lvbnNfdXNpbmdfd2ViX3NlYXJjaCsrXG4gICAgaWYgKHNlc3Npb24udXNlc193ZWJfZmV0Y2gpIHJlc3VsdC5zZXNzaW9uc191c2luZ193ZWJfZmV0Y2grK1xuXG4gICAgLy8gQWRkaXRpb25hbCBzdGF0cyBhZ2dyZWdhdGlvblxuICAgIHJlc3VsdC50b3RhbF9saW5lc19hZGRlZCArPSBzZXNzaW9uLmxpbmVzX2FkZGVkXG4gICAgcmVzdWx0LnRvdGFsX2xpbmVzX3JlbW92ZWQgKz0gc2Vzc2lvbi5saW5lc19yZW1vdmVkXG4gICAgcmVzdWx0LnRvdGFsX2ZpbGVzX21vZGlmaWVkICs9IHNlc3Npb24uZmlsZXNfbW9kaWZpZWRcbiAgICBhbGxNZXNzYWdlSG91cnMucHVzaCguLi5zZXNzaW9uLm1lc3NhZ2VfaG91cnMpXG5cbiAgICBmb3IgKGNvbnN0IFt0b29sLCBjb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoc2Vzc2lvbi50b29sX2NvdW50cykpIHtcbiAgICAgIHJlc3VsdC50b29sX2NvdW50c1t0b29sXSA9IChyZXN1bHQudG9vbF9jb3VudHNbdG9vbF0gfHwgMCkgKyBjb3VudFxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2xhbmcsIGNvdW50XSBvZiBPYmplY3QuZW50cmllcyhzZXNzaW9uLmxhbmd1YWdlcykpIHtcbiAgICAgIHJlc3VsdC5sYW5ndWFnZXNbbGFuZ10gPSAocmVzdWx0Lmxhbmd1YWdlc1tsYW5nXSB8fCAwKSArIGNvdW50XG4gICAgfVxuXG4gICAgaWYgKHNlc3Npb24ucHJvamVjdF9wYXRoKSB7XG4gICAgICByZXN1bHQucHJvamVjdHNbc2Vzc2lvbi5wcm9qZWN0X3BhdGhdID1cbiAgICAgICAgKHJlc3VsdC5wcm9qZWN0c1tzZXNzaW9uLnByb2plY3RfcGF0aF0gfHwgMCkgKyAxXG4gICAgfVxuXG4gICAgY29uc3Qgc2Vzc2lvbkZhY2V0cyA9IGZhY2V0cy5nZXQoc2Vzc2lvbi5zZXNzaW9uX2lkKVxuICAgIGlmIChzZXNzaW9uRmFjZXRzKSB7XG4gICAgICAvLyBHb2FsIGNhdGVnb3JpZXNcbiAgICAgIGZvciAoY29uc3QgW2NhdCwgY291bnRdIG9mIHNhZmVFbnRyaWVzKHNlc3Npb25GYWNldHMuZ29hbF9jYXRlZ29yaWVzKSkge1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgcmVzdWx0LmdvYWxfY2F0ZWdvcmllc1tjYXRdID1cbiAgICAgICAgICAgIChyZXN1bHQuZ29hbF9jYXRlZ29yaWVzW2NhdF0gfHwgMCkgKyBjb3VudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dGNvbWVzXG4gICAgICByZXN1bHQub3V0Y29tZXNbc2Vzc2lvbkZhY2V0cy5vdXRjb21lXSA9XG4gICAgICAgIChyZXN1bHQub3V0Y29tZXNbc2Vzc2lvbkZhY2V0cy5vdXRjb21lXSB8fCAwKSArIDFcblxuICAgICAgLy8gU2F0aXNmYWN0aW9uIGNvdW50c1xuICAgICAgZm9yIChjb25zdCBbbGV2ZWwsIGNvdW50XSBvZiBzYWZlRW50cmllcyhcbiAgICAgICAgc2Vzc2lvbkZhY2V0cy51c2VyX3NhdGlzZmFjdGlvbl9jb3VudHMsXG4gICAgICApKSB7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICByZXN1bHQuc2F0aXNmYWN0aW9uW2xldmVsXSA9IChyZXN1bHQuc2F0aXNmYWN0aW9uW2xldmVsXSB8fCAwKSArIGNvdW50XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSGVscGZ1bG5lc3NcbiAgICAgIHJlc3VsdC5oZWxwZnVsbmVzc1tzZXNzaW9uRmFjZXRzLmNsYXVkZV9oZWxwZnVsbmVzc10gPVxuICAgICAgICAocmVzdWx0LmhlbHBmdWxuZXNzW3Nlc3Npb25GYWNldHMuY2xhdWRlX2hlbHBmdWxuZXNzXSB8fCAwKSArIDFcblxuICAgICAgLy8gU2Vzc2lvbiB0eXBlc1xuICAgICAgcmVzdWx0LnNlc3Npb25fdHlwZXNbc2Vzc2lvbkZhY2V0cy5zZXNzaW9uX3R5cGVdID1cbiAgICAgICAgKHJlc3VsdC5zZXNzaW9uX3R5cGVzW3Nlc3Npb25GYWNldHMuc2Vzc2lvbl90eXBlXSB8fCAwKSArIDFcblxuICAgICAgLy8gRnJpY3Rpb24gY291bnRzXG4gICAgICBmb3IgKGNvbnN0IFt0eXBlLCBjb3VudF0gb2Ygc2FmZUVudHJpZXMoc2Vzc2lvbkZhY2V0cy5mcmljdGlvbl9jb3VudHMpKSB7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICByZXN1bHQuZnJpY3Rpb25bdHlwZV0gPSAocmVzdWx0LmZyaWN0aW9uW3R5cGVdIHx8IDApICsgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTdWNjZXNzIGZhY3RvcnNcbiAgICAgIGlmIChzZXNzaW9uRmFjZXRzLnByaW1hcnlfc3VjY2VzcyAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHJlc3VsdC5zdWNjZXNzW3Nlc3Npb25GYWNldHMucHJpbWFyeV9zdWNjZXNzXSA9XG4gICAgICAgICAgKHJlc3VsdC5zdWNjZXNzW3Nlc3Npb25GYWNldHMucHJpbWFyeV9zdWNjZXNzXSB8fCAwKSArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LnNlc3Npb25fc3VtbWFyaWVzLmxlbmd0aCA8IDUwKSB7XG4gICAgICByZXN1bHQuc2Vzc2lvbl9zdW1tYXJpZXMucHVzaCh7XG4gICAgICAgIGlkOiBzZXNzaW9uLnNlc3Npb25faWQuc2xpY2UoMCwgOCksXG4gICAgICAgIGRhdGU6IHNlc3Npb24uc3RhcnRfdGltZS5zcGxpdCgnVCcpWzBdIHx8ICcnLFxuICAgICAgICBzdW1tYXJ5OiBzZXNzaW9uLnN1bW1hcnkgfHwgc2Vzc2lvbi5maXJzdF9wcm9tcHQuc2xpY2UoMCwgMTAwKSxcbiAgICAgICAgZ29hbDogc2Vzc2lvbkZhY2V0cz8udW5kZXJseWluZ19nb2FsLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkYXRlcy5zb3J0KClcbiAgcmVzdWx0LmRhdGVfcmFuZ2Uuc3RhcnQgPSBkYXRlc1swXT8uc3BsaXQoJ1QnKVswXSB8fCAnJ1xuICByZXN1bHQuZGF0ZV9yYW5nZS5lbmQgPSBkYXRlc1tkYXRlcy5sZW5ndGggLSAxXT8uc3BsaXQoJ1QnKVswXSB8fCAnJ1xuXG4gIC8vIENhbGN1bGF0ZSByZXNwb25zZSB0aW1lIHN0YXRzXG4gIHJlc3VsdC51c2VyX3Jlc3BvbnNlX3RpbWVzID0gYWxsUmVzcG9uc2VUaW1lc1xuICBpZiAoYWxsUmVzcG9uc2VUaW1lcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc29ydGVkID0gWy4uLmFsbFJlc3BvbnNlVGltZXNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgIHJlc3VsdC5tZWRpYW5fcmVzcG9uc2VfdGltZSA9IHNvcnRlZFtNYXRoLmZsb29yKHNvcnRlZC5sZW5ndGggLyAyKV0gfHwgMFxuICAgIHJlc3VsdC5hdmdfcmVzcG9uc2VfdGltZSA9XG4gICAgICBhbGxSZXNwb25zZVRpbWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gYWxsUmVzcG9uc2VUaW1lcy5sZW5ndGhcbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBkYXlzIGFjdGl2ZSBhbmQgbWVzc2FnZXMgcGVyIGRheVxuICBjb25zdCB1bmlxdWVEYXlzID0gbmV3IFNldChkYXRlcy5tYXAoZCA9PiBkLnNwbGl0KCdUJylbMF0pKVxuICByZXN1bHQuZGF5c19hY3RpdmUgPSB1bmlxdWVEYXlzLnNpemVcbiAgcmVzdWx0Lm1lc3NhZ2VzX3Blcl9kYXkgPVxuICAgIHJlc3VsdC5kYXlzX2FjdGl2ZSA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgocmVzdWx0LnRvdGFsX21lc3NhZ2VzIC8gcmVzdWx0LmRheXNfYWN0aXZlKSAqIDEwKSAvIDEwXG4gICAgICA6IDBcblxuICAvLyBTdG9yZSBtZXNzYWdlIGhvdXJzIGZvciB0aW1lLW9mLWRheSBjaGFydFxuICByZXN1bHQubWVzc2FnZV9ob3VycyA9IGFsbE1lc3NhZ2VIb3Vyc1xuXG4gIHJlc3VsdC5tdWx0aV9jbGF1ZGluZyA9IGRldGVjdE11bHRpQ2xhdWRpbmcoc2Vzc2lvbnMpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQYXJhbGxlbCBJbnNpZ2h0cyBHZW5lcmF0aW9uICg2IHNlY3Rpb25zKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIEluc2lnaHRTZWN0aW9uID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgcHJvbXB0OiBzdHJpbmdcbiAgbWF4VG9rZW5zOiBudW1iZXJcbn1cblxuLy8gU2VjdGlvbnMgdGhhdCBydW4gaW4gcGFyYWxsZWwgZmlyc3RcbmNvbnN0IElOU0lHSFRfU0VDVElPTlM6IEluc2lnaHRTZWN0aW9uW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncHJvamVjdF9hcmVhcycsXG4gICAgcHJvbXB0OiBgQW5hbHl6ZSB0aGlzIENsYXVkZSBDb2RlIHVzYWdlIGRhdGEgYW5kIGlkZW50aWZ5IHByb2plY3QgYXJlYXMuXG5cblJFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1Q6XG57XG4gIFwiYXJlYXNcIjogW1xuICAgIHtcIm5hbWVcIjogXCJBcmVhIG5hbWVcIiwgXCJzZXNzaW9uX2NvdW50XCI6IE4sIFwiZGVzY3JpcHRpb25cIjogXCIyLTMgc2VudGVuY2VzIGFib3V0IHdoYXQgd2FzIHdvcmtlZCBvbiBhbmQgaG93IENsYXVkZSBDb2RlIHdhcyB1c2VkLlwifVxuICBdXG59XG5cbkluY2x1ZGUgNC01IGFyZWFzLiBTa2lwIGludGVybmFsIENDIG9wZXJhdGlvbnMuYCxcbiAgICBtYXhUb2tlbnM6IDgxOTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW50ZXJhY3Rpb25fc3R5bGUnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBDbGF1ZGUgQ29kZSB1c2FnZSBkYXRhIGFuZCBkZXNjcmliZSB0aGUgdXNlcidzIGludGVyYWN0aW9uIHN0eWxlLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcIm5hcnJhdGl2ZVwiOiBcIjItMyBwYXJhZ3JhcGhzIGFuYWx5emluZyBIT1cgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggQ2xhdWRlIENvZGUuIFVzZSBzZWNvbmQgcGVyc29uICd5b3UnLiBEZXNjcmliZSBwYXR0ZXJuczogaXRlcmF0ZSBxdWlja2x5IHZzIGRldGFpbGVkIHVwZnJvbnQgc3BlY3M/IEludGVycnVwdCBvZnRlbiBvciBsZXQgQ2xhdWRlIHJ1bj8gSW5jbHVkZSBzcGVjaWZpYyBleGFtcGxlcy4gVXNlICoqYm9sZCoqIGZvciBrZXkgaW5zaWdodHMuXCIsXG4gIFwia2V5X3BhdHRlcm5cIjogXCJPbmUgc2VudGVuY2Ugc3VtbWFyeSBvZiBtb3N0IGRpc3RpbmN0aXZlIGludGVyYWN0aW9uIHN0eWxlXCJcbn1gLFxuICAgIG1heFRva2VuczogODE5MixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd3aGF0X3dvcmtzJyxcbiAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQ2xhdWRlIENvZGUgdXNhZ2UgZGF0YSBhbmQgaWRlbnRpZnkgd2hhdCdzIHdvcmtpbmcgd2VsbCBmb3IgdGhpcyB1c2VyLiBVc2Ugc2Vjb25kIHBlcnNvbiAoXCJ5b3VcIikuXG5cblJFU1BPTkQgV0lUSCBPTkxZIEEgVkFMSUQgSlNPTiBPQkpFQ1Q6XG57XG4gIFwiaW50cm9cIjogXCIxIHNlbnRlbmNlIG9mIGNvbnRleHRcIixcbiAgXCJpbXByZXNzaXZlX3dvcmtmbG93c1wiOiBbXG4gICAge1widGl0bGVcIjogXCJTaG9ydCB0aXRsZSAoMy02IHdvcmRzKVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiMi0zIHNlbnRlbmNlcyBkZXNjcmliaW5nIHRoZSBpbXByZXNzaXZlIHdvcmtmbG93IG9yIGFwcHJvYWNoLiBVc2UgJ3lvdScgbm90ICd0aGUgdXNlcicuXCJ9XG4gIF1cbn1cblxuSW5jbHVkZSAzIGltcHJlc3NpdmUgd29ya2Zsb3dzLmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZyaWN0aW9uX2FuYWx5c2lzJyxcbiAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgQ2xhdWRlIENvZGUgdXNhZ2UgZGF0YSBhbmQgaWRlbnRpZnkgZnJpY3Rpb24gcG9pbnRzIGZvciB0aGlzIHVzZXIuIFVzZSBzZWNvbmQgcGVyc29uIChcInlvdVwiKS5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJpbnRyb1wiOiBcIjEgc2VudGVuY2Ugc3VtbWFyaXppbmcgZnJpY3Rpb24gcGF0dGVybnNcIixcbiAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICB7XCJjYXRlZ29yeVwiOiBcIkNvbmNyZXRlIGNhdGVnb3J5IG5hbWVcIiwgXCJkZXNjcmlwdGlvblwiOiBcIjEtMiBzZW50ZW5jZXMgZXhwbGFpbmluZyB0aGlzIGNhdGVnb3J5IGFuZCB3aGF0IGNvdWxkIGJlIGRvbmUgZGlmZmVyZW50bHkuIFVzZSAneW91JyBub3QgJ3RoZSB1c2VyJy5cIiwgXCJleGFtcGxlc1wiOiBbXCJTcGVjaWZpYyBleGFtcGxlIHdpdGggY29uc2VxdWVuY2VcIiwgXCJBbm90aGVyIGV4YW1wbGVcIl19XG4gIF1cbn1cblxuSW5jbHVkZSAzIGZyaWN0aW9uIGNhdGVnb3JpZXMgd2l0aCAyIGV4YW1wbGVzIGVhY2guYCxcbiAgICBtYXhUb2tlbnM6IDgxOTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc3VnZ2VzdGlvbnMnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBDbGF1ZGUgQ29kZSB1c2FnZSBkYXRhIGFuZCBzdWdnZXN0IGltcHJvdmVtZW50cy5cblxuIyMgQ0MgRkVBVFVSRVMgUkVGRVJFTkNFIChwaWNrIGZyb20gdGhlc2UgZm9yIGZlYXR1cmVzX3RvX3RyeSk6XG4xLiAqKk1DUCBTZXJ2ZXJzKio6IENvbm5lY3QgQ2xhdWRlIHRvIGV4dGVybmFsIHRvb2xzLCBkYXRhYmFzZXMsIGFuZCBBUElzIHZpYSBNb2RlbCBDb250ZXh0IFByb3RvY29sLlxuICAgLSBIb3cgdG8gdXNlOiBSdW4gXFxgY2xhdWRlIG1jcCBhZGQgPHNlcnZlci1uYW1lPiAtLSA8Y29tbWFuZD5cXGBcbiAgIC0gR29vZCBmb3I6IGRhdGFiYXNlIHF1ZXJpZXMsIFNsYWNrIGludGVncmF0aW9uLCBHaXRIdWIgaXNzdWUgbG9va3VwLCBjb25uZWN0aW5nIHRvIGludGVybmFsIEFQSXNcblxuMi4gKipDdXN0b20gU2tpbGxzKio6IFJldXNhYmxlIHByb21wdHMgeW91IGRlZmluZSBhcyBtYXJrZG93biBmaWxlcyB0aGF0IHJ1biB3aXRoIGEgc2luZ2xlIC9jb21tYW5kLlxuICAgLSBIb3cgdG8gdXNlOiBDcmVhdGUgXFxgLmNsYXVkZS9za2lsbHMvY29tbWl0L1NLSUxMLm1kXFxgIHdpdGggaW5zdHJ1Y3Rpb25zLiBUaGVuIHR5cGUgXFxgL2NvbW1pdFxcYCB0byBydW4gaXQuXG4gICAtIEdvb2QgZm9yOiByZXBldGl0aXZlIHdvcmtmbG93cyAtIC9jb21taXQsIC9yZXZpZXcsIC90ZXN0LCAvZGVwbG95LCAvcHIsIG9yIGNvbXBsZXggbXVsdGktc3RlcCB3b3JrZmxvd3NcblxuMy4gKipIb29rcyoqOiBTaGVsbCBjb21tYW5kcyB0aGF0IGF1dG8tcnVuIGF0IHNwZWNpZmljIGxpZmVjeWNsZSBldmVudHMuXG4gICAtIEhvdyB0byB1c2U6IEFkZCB0byBcXGAuY2xhdWRlL3NldHRpbmdzLmpzb25cXGAgdW5kZXIgXCJob29rc1wiIGtleS5cbiAgIC0gR29vZCBmb3I6IGF1dG8tZm9ybWF0dGluZyBjb2RlLCBydW5uaW5nIHR5cGUgY2hlY2tzLCBlbmZvcmNpbmcgY29udmVudGlvbnNcblxuNC4gKipIZWFkbGVzcyBNb2RlKio6IFJ1biBDbGF1ZGUgbm9uLWludGVyYWN0aXZlbHkgZnJvbSBzY3JpcHRzIGFuZCBDSS9DRC5cbiAgIC0gSG93IHRvIHVzZTogXFxgY2xhdWRlIC1wIFwiZml4IGxpbnQgZXJyb3JzXCIgLS1hbGxvd2VkVG9vbHMgXCJFZGl0LFJlYWQsQmFzaFwiXFxgXG4gICAtIEdvb2QgZm9yOiBDSS9DRCBpbnRlZ3JhdGlvbiwgYmF0Y2ggY29kZSBmaXhlcywgYXV0b21hdGVkIHJldmlld3NcblxuNS4gKipUYXNrIEFnZW50cyoqOiBDbGF1ZGUgc3Bhd25zIGZvY3VzZWQgc3ViLWFnZW50cyBmb3IgY29tcGxleCBleHBsb3JhdGlvbiBvciBwYXJhbGxlbCB3b3JrLlxuICAgLSBIb3cgdG8gdXNlOiBDbGF1ZGUgYXV0by1pbnZva2VzIHdoZW4gaGVscGZ1bCwgb3IgYXNrIFwidXNlIGFuIGFnZW50IHRvIGV4cGxvcmUgWFwiXG4gICAtIEdvb2QgZm9yOiBjb2RlYmFzZSBleHBsb3JhdGlvbiwgdW5kZXJzdGFuZGluZyBjb21wbGV4IHN5c3RlbXNcblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJjbGF1ZGVfbWRfYWRkaXRpb25zXCI6IFtcbiAgICB7XCJhZGRpdGlvblwiOiBcIkEgc3BlY2lmaWMgbGluZSBvciBibG9jayB0byBhZGQgdG8gQ0xBVURFLm1kIGJhc2VkIG9uIHdvcmtmbG93IHBhdHRlcm5zLiBFLmcuLCAnQWx3YXlzIHJ1biB0ZXN0cyBhZnRlciBtb2RpZnlpbmcgYXV0aC1yZWxhdGVkIGZpbGVzJ1wiLCBcIndoeVwiOiBcIjEgc2VudGVuY2UgZXhwbGFpbmluZyB3aHkgdGhpcyB3b3VsZCBoZWxwIGJhc2VkIG9uIGFjdHVhbCBzZXNzaW9uc1wiLCBcInByb21wdF9zY2FmZm9sZFwiOiBcIkluc3RydWN0aW9ucyBmb3Igd2hlcmUgdG8gYWRkIHRoaXMgaW4gQ0xBVURFLm1kLiBFLmcuLCAnQWRkIHVuZGVyICMjIFRlc3Rpbmcgc2VjdGlvbidcIn1cbiAgXSxcbiAgXCJmZWF0dXJlc190b190cnlcIjogW1xuICAgIHtcImZlYXR1cmVcIjogXCJGZWF0dXJlIG5hbWUgZnJvbSBDQyBGRUFUVVJFUyBSRUZFUkVOQ0UgYWJvdmVcIiwgXCJvbmVfbGluZXJcIjogXCJXaGF0IGl0IGRvZXNcIiwgXCJ3aHlfZm9yX3lvdVwiOiBcIldoeSB0aGlzIHdvdWxkIGhlbHAgWU9VIGJhc2VkIG9uIHlvdXIgc2Vzc2lvbnNcIiwgXCJleGFtcGxlX2NvZGVcIjogXCJBY3R1YWwgY29tbWFuZCBvciBjb25maWcgdG8gY29weVwifVxuICBdLFxuICBcInVzYWdlX3BhdHRlcm5zXCI6IFtcbiAgICB7XCJ0aXRsZVwiOiBcIlNob3J0IHRpdGxlXCIsIFwic3VnZ2VzdGlvblwiOiBcIjEtMiBzZW50ZW5jZSBzdW1tYXJ5XCIsIFwiZGV0YWlsXCI6IFwiMy00IHNlbnRlbmNlcyBleHBsYWluaW5nIGhvdyB0aGlzIGFwcGxpZXMgdG8gWU9VUiB3b3JrXCIsIFwiY29weWFibGVfcHJvbXB0XCI6IFwiQSBzcGVjaWZpYyBwcm9tcHQgdG8gY29weSBhbmQgdHJ5XCJ9XG4gIF1cbn1cblxuSU1QT1JUQU5UIGZvciBjbGF1ZGVfbWRfYWRkaXRpb25zOiBQUklPUklUSVpFIGluc3RydWN0aW9ucyB0aGF0IGFwcGVhciBNVUxUSVBMRSBUSU1FUyBpbiB0aGUgdXNlciBkYXRhLiBJZiB1c2VyIHRvbGQgQ2xhdWRlIHRoZSBzYW1lIHRoaW5nIGluIDIrIHNlc3Npb25zIChlLmcuLCAnYWx3YXlzIHJ1biB0ZXN0cycsICd1c2UgVHlwZVNjcmlwdCcpLCB0aGF0J3MgYSBQUklNRSBjYW5kaWRhdGUgLSB0aGV5IHNob3VsZG4ndCBoYXZlIHRvIHJlcGVhdCB0aGVtc2VsdmVzLlxuXG5JTVBPUlRBTlQgZm9yIGZlYXR1cmVzX3RvX3RyeTogUGljayAyLTMgZnJvbSB0aGUgQ0MgRkVBVFVSRVMgUkVGRVJFTkNFIGFib3ZlLiBJbmNsdWRlIDItMyBpdGVtcyBmb3IgZWFjaCBjYXRlZ29yeS5gLFxuICAgIG1heFRva2VuczogODE5MixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvbl90aGVfaG9yaXpvbicsXG4gICAgcHJvbXB0OiBgQW5hbHl6ZSB0aGlzIENsYXVkZSBDb2RlIHVzYWdlIGRhdGEgYW5kIGlkZW50aWZ5IGZ1dHVyZSBvcHBvcnR1bml0aWVzLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcImludHJvXCI6IFwiMSBzZW50ZW5jZSBhYm91dCBldm9sdmluZyBBSS1hc3Npc3RlZCBkZXZlbG9wbWVudFwiLFxuICBcIm9wcG9ydHVuaXRpZXNcIjogW1xuICAgIHtcInRpdGxlXCI6IFwiU2hvcnQgdGl0bGUgKDQtOCB3b3JkcylcIiwgXCJ3aGF0c19wb3NzaWJsZVwiOiBcIjItMyBhbWJpdGlvdXMgc2VudGVuY2VzIGFib3V0IGF1dG9ub21vdXMgd29ya2Zsb3dzXCIsIFwiaG93X3RvX3RyeVwiOiBcIjEtMiBzZW50ZW5jZXMgbWVudGlvbmluZyByZWxldmFudCB0b29saW5nXCIsIFwiY29weWFibGVfcHJvbXB0XCI6IFwiRGV0YWlsZWQgcHJvbXB0IHRvIHRyeVwifVxuICBdXG59XG5cbkluY2x1ZGUgMyBvcHBvcnR1bml0aWVzLiBUaGluayBCSUcgLSBhdXRvbm9tb3VzIHdvcmtmbG93cywgcGFyYWxsZWwgYWdlbnRzLCBpdGVyYXRpbmcgYWdhaW5zdCB0ZXN0cy5gLFxuICAgIG1heFRva2VuczogODE5MixcbiAgfSxcbiAgLi4uKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICA/IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjY190ZWFtX2ltcHJvdmVtZW50cycsXG4gICAgICAgICAgcHJvbXB0OiBgQW5hbHl6ZSB0aGlzIENsYXVkZSBDb2RlIHVzYWdlIGRhdGEgYW5kIHN1Z2dlc3QgcHJvZHVjdCBpbXByb3ZlbWVudHMgZm9yIHRoZSBDQyB0ZWFtLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcImltcHJvdmVtZW50c1wiOiBbXG4gICAge1widGl0bGVcIjogXCJQcm9kdWN0L3Rvb2xpbmcgaW1wcm92ZW1lbnRcIiwgXCJkZXRhaWxcIjogXCIzLTQgc2VudGVuY2VzIGRlc2NyaWJpbmcgdGhlIGltcHJvdmVtZW50XCIsIFwiZXZpZGVuY2VcIjogXCIzLTQgc2VudGVuY2VzIHdpdGggc3BlY2lmaWMgc2Vzc2lvbiBleGFtcGxlc1wifVxuICBdXG59XG5cbkluY2x1ZGUgMi0zIGltcHJvdmVtZW50cyBiYXNlZCBvbiBmcmljdGlvbiBwYXR0ZXJucyBvYnNlcnZlZC5gLFxuICAgICAgICAgIG1heFRva2VuczogODE5MixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdtb2RlbF9iZWhhdmlvcl9pbXByb3ZlbWVudHMnLFxuICAgICAgICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBDbGF1ZGUgQ29kZSB1c2FnZSBkYXRhIGFuZCBzdWdnZXN0IG1vZGVsIGJlaGF2aW9yIGltcHJvdmVtZW50cy5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJpbXByb3ZlbWVudHNcIjogW1xuICAgIHtcInRpdGxlXCI6IFwiTW9kZWwgYmVoYXZpb3IgY2hhbmdlXCIsIFwiZGV0YWlsXCI6IFwiMy00IHNlbnRlbmNlcyBkZXNjcmliaW5nIHdoYXQgdGhlIG1vZGVsIHNob3VsZCBkbyBkaWZmZXJlbnRseVwiLCBcImV2aWRlbmNlXCI6IFwiMy00IHNlbnRlbmNlcyB3aXRoIHNwZWNpZmljIGV4YW1wbGVzXCJ9XG4gIF1cbn1cblxuSW5jbHVkZSAyLTMgaW1wcm92ZW1lbnRzIGJhc2VkIG9uIGZyaWN0aW9uIHBhdHRlcm5zIG9ic2VydmVkLmAsXG4gICAgICAgICAgbWF4VG9rZW5zOiA4MTkyLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIDogW10pLFxuICB7XG4gICAgbmFtZTogJ2Z1bl9lbmRpbmcnLFxuICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBDbGF1ZGUgQ29kZSB1c2FnZSBkYXRhIGFuZCBmaW5kIGEgbWVtb3JhYmxlIG1vbWVudC5cblxuUkVTUE9ORCBXSVRIIE9OTFkgQSBWQUxJRCBKU09OIE9CSkVDVDpcbntcbiAgXCJoZWFkbGluZVwiOiBcIkEgbWVtb3JhYmxlIFFVQUxJVEFUSVZFIG1vbWVudCBmcm9tIHRoZSB0cmFuc2NyaXB0cyAtIG5vdCBhIHN0YXRpc3RpYy4gU29tZXRoaW5nIGh1bWFuLCBmdW5ueSwgb3Igc3VycHJpc2luZy5cIixcbiAgXCJkZXRhaWxcIjogXCJCcmllZiBjb250ZXh0IGFib3V0IHdoZW4vd2hlcmUgdGhpcyBoYXBwZW5lZFwiXG59XG5cbkZpbmQgc29tZXRoaW5nIGdlbnVpbmVseSBpbnRlcmVzdGluZyBvciBhbXVzaW5nIGZyb20gdGhlIHNlc3Npb24gc3VtbWFyaWVzLmAsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9LFxuXVxuXG50eXBlIEluc2lnaHRSZXN1bHRzID0ge1xuICBhdF9hX2dsYW5jZT86IHtcbiAgICB3aGF0c193b3JraW5nPzogc3RyaW5nXG4gICAgd2hhdHNfaGluZGVyaW5nPzogc3RyaW5nXG4gICAgcXVpY2tfd2lucz86IHN0cmluZ1xuICAgIGFtYml0aW91c193b3JrZmxvd3M/OiBzdHJpbmdcbiAgfVxuICBwcm9qZWN0X2FyZWFzPzoge1xuICAgIGFyZWFzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHNlc3Npb25fY291bnQ6IG51bWJlcjsgZGVzY3JpcHRpb246IHN0cmluZyB9PlxuICB9XG4gIGludGVyYWN0aW9uX3N0eWxlPzoge1xuICAgIG5hcnJhdGl2ZT86IHN0cmluZ1xuICAgIGtleV9wYXR0ZXJuPzogc3RyaW5nXG4gIH1cbiAgd2hhdF93b3Jrcz86IHtcbiAgICBpbnRybz86IHN0cmluZ1xuICAgIGltcHJlc3NpdmVfd29ya2Zsb3dzPzogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gIH1cbiAgZnJpY3Rpb25fYW5hbHlzaXM/OiB7XG4gICAgaW50cm8/OiBzdHJpbmdcbiAgICBjYXRlZ29yaWVzPzogQXJyYXk8e1xuICAgICAgY2F0ZWdvcnk6IHN0cmluZ1xuICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgICAgZXhhbXBsZXM/OiBzdHJpbmdbXVxuICAgIH0+XG4gIH1cbiAgc3VnZ2VzdGlvbnM/OiB7XG4gICAgY2xhdWRlX21kX2FkZGl0aW9ucz86IEFycmF5PHtcbiAgICAgIGFkZGl0aW9uOiBzdHJpbmdcbiAgICAgIHdoeTogc3RyaW5nXG4gICAgICB3aGVyZT86IHN0cmluZ1xuICAgICAgcHJvbXB0X3NjYWZmb2xkPzogc3RyaW5nXG4gICAgfT5cbiAgICBmZWF0dXJlc190b190cnk/OiBBcnJheTx7XG4gICAgICBmZWF0dXJlOiBzdHJpbmdcbiAgICAgIG9uZV9saW5lcjogc3RyaW5nXG4gICAgICB3aHlfZm9yX3lvdTogc3RyaW5nXG4gICAgICBleGFtcGxlX2NvZGU/OiBzdHJpbmdcbiAgICB9PlxuICAgIHVzYWdlX3BhdHRlcm5zPzogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgc3VnZ2VzdGlvbjogc3RyaW5nXG4gICAgICBkZXRhaWw/OiBzdHJpbmdcbiAgICAgIGNvcHlhYmxlX3Byb21wdD86IHN0cmluZ1xuICAgIH0+XG4gIH1cbiAgb25fdGhlX2hvcml6b24/OiB7XG4gICAgaW50cm8/OiBzdHJpbmdcbiAgICBvcHBvcnR1bml0aWVzPzogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgd2hhdHNfcG9zc2libGU6IHN0cmluZ1xuICAgICAgaG93X3RvX3RyeT86IHN0cmluZ1xuICAgICAgY29weWFibGVfcHJvbXB0Pzogc3RyaW5nXG4gICAgfT5cbiAgfVxuICBjY190ZWFtX2ltcHJvdmVtZW50cz86IHtcbiAgICBpbXByb3ZlbWVudHM/OiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBkZXRhaWw6IHN0cmluZ1xuICAgICAgZXZpZGVuY2U/OiBzdHJpbmdcbiAgICB9PlxuICB9XG4gIG1vZGVsX2JlaGF2aW9yX2ltcHJvdmVtZW50cz86IHtcbiAgICBpbXByb3ZlbWVudHM/OiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBkZXRhaWw6IHN0cmluZ1xuICAgICAgZXZpZGVuY2U/OiBzdHJpbmdcbiAgICB9PlxuICB9XG4gIGZ1bl9lbmRpbmc/OiB7XG4gICAgaGVhZGxpbmU/OiBzdHJpbmdcbiAgICBkZXRhaWw/OiBzdHJpbmdcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVNlY3Rpb25JbnNpZ2h0KFxuICBzZWN0aW9uOiBJbnNpZ2h0U2VjdGlvbixcbiAgZGF0YUNvbnRleHQ6IHN0cmluZyxcbik6IFByb21pc2U8eyBuYW1lOiBzdHJpbmc7IHJlc3VsdDogdW5rbm93biB9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnlXaXRoTW9kZWwoe1xuICAgICAgc3lzdGVtUHJvbXB0OiBhc1N5c3RlbVByb21wdChbXSksXG4gICAgICB1c2VyUHJvbXB0OiBzZWN0aW9uLnByb21wdCArICdcXG5cXG5EQVRBOlxcbicgKyBkYXRhQ29udGV4dCxcbiAgICAgIHNpZ25hbDogbmV3IEFib3J0Q29udHJvbGxlcigpLnNpZ25hbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbW9kZWw6IGdldEluc2lnaHRzTW9kZWwoKSxcbiAgICAgICAgcXVlcnlTb3VyY2U6ICdpbnNpZ2h0cycsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiB0cnVlLFxuICAgICAgICBoYXNBcHBlbmRTeXN0ZW1Qcm9tcHQ6IGZhbHNlLFxuICAgICAgICBtY3BUb29sczogW10sXG4gICAgICAgIG1heE91dHB1dFRva2Vuc092ZXJyaWRlOiBzZWN0aW9uLm1heFRva2VucyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzdWx0Lm1lc3NhZ2UuY29udGVudClcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAvLyBQYXJzZSBKU09OIGZyb20gcmVzcG9uc2VcbiAgICAgIGNvbnN0IGpzb25NYXRjaCA9IHRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pXG4gICAgICBpZiAoanNvbk1hdGNoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogc2VjdGlvbi5uYW1lLCByZXN1bHQ6IGpzb25QYXJzZShqc29uTWF0Y2hbMF0pIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogc2VjdGlvbi5uYW1lLCByZXN1bHQ6IG51bGwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5hbWU6IHNlY3Rpb24ubmFtZSwgcmVzdWx0OiBudWxsIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nRXJyb3IobmV3IEVycm9yKGAke3NlY3Rpb24ubmFtZX0gZmFpbGVkOiAke3RvRXJyb3IoZXJyKS5tZXNzYWdlfWApKVxuICAgIHJldHVybiB7IG5hbWU6IHNlY3Rpb24ubmFtZSwgcmVzdWx0OiBudWxsIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVBhcmFsbGVsSW5zaWdodHMoXG4gIGRhdGE6IEFnZ3JlZ2F0ZWREYXRhLFxuICBmYWNldHM6IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+LFxuKTogUHJvbWlzZTxJbnNpZ2h0UmVzdWx0cz4ge1xuICAvLyBCdWlsZCBkYXRhIGNvbnRleHQgc3RyaW5nXG4gIGNvbnN0IGZhY2V0U3VtbWFyaWVzID0gQXJyYXkuZnJvbShmYWNldHMudmFsdWVzKCkpXG4gICAgLnNsaWNlKDAsIDUwKVxuICAgIC5tYXAoZiA9PiBgLSAke2YuYnJpZWZfc3VtbWFyeX0gKCR7Zi5vdXRjb21lfSwgJHtmLmNsYXVkZV9oZWxwZnVsbmVzc30pYClcbiAgICAuam9pbignXFxuJylcblxuICBjb25zdCBmcmljdGlvbkRldGFpbHMgPSBBcnJheS5mcm9tKGZhY2V0cy52YWx1ZXMoKSlcbiAgICAuZmlsdGVyKGYgPT4gZi5mcmljdGlvbl9kZXRhaWwpXG4gICAgLnNsaWNlKDAsIDIwKVxuICAgIC5tYXAoZiA9PiBgLSAke2YuZnJpY3Rpb25fZGV0YWlsfWApXG4gICAgLmpvaW4oJ1xcbicpXG5cbiAgY29uc3QgdXNlckluc3RydWN0aW9ucyA9IEFycmF5LmZyb20oZmFjZXRzLnZhbHVlcygpKVxuICAgIC5mbGF0TWFwKGYgPT4gZi51c2VyX2luc3RydWN0aW9uc190b19jbGF1ZGUgfHwgW10pXG4gICAgLnNsaWNlKDAsIDE1KVxuICAgIC5tYXAoaSA9PiBgLSAke2l9YClcbiAgICAuam9pbignXFxuJylcblxuICBjb25zdCBkYXRhQ29udGV4dCA9IGpzb25TdHJpbmdpZnkoXG4gICAge1xuICAgICAgc2Vzc2lvbnM6IGRhdGEudG90YWxfc2Vzc2lvbnMsXG4gICAgICBhbmFseXplZDogZGF0YS5zZXNzaW9uc193aXRoX2ZhY2V0cyxcbiAgICAgIGRhdGVfcmFuZ2U6IGRhdGEuZGF0ZV9yYW5nZSxcbiAgICAgIG1lc3NhZ2VzOiBkYXRhLnRvdGFsX21lc3NhZ2VzLFxuICAgICAgaG91cnM6IE1hdGgucm91bmQoZGF0YS50b3RhbF9kdXJhdGlvbl9ob3VycyksXG4gICAgICBjb21taXRzOiBkYXRhLmdpdF9jb21taXRzLFxuICAgICAgdG9wX3Rvb2xzOiBPYmplY3QuZW50cmllcyhkYXRhLnRvb2xfY291bnRzKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgICAgIC5zbGljZSgwLCA4KSxcbiAgICAgIHRvcF9nb2FsczogT2JqZWN0LmVudHJpZXMoZGF0YS5nb2FsX2NhdGVnb3JpZXMpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICAgICAgLnNsaWNlKDAsIDgpLFxuICAgICAgb3V0Y29tZXM6IGRhdGEub3V0Y29tZXMsXG4gICAgICBzYXRpc2ZhY3Rpb246IGRhdGEuc2F0aXNmYWN0aW9uLFxuICAgICAgZnJpY3Rpb246IGRhdGEuZnJpY3Rpb24sXG4gICAgICBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3MsXG4gICAgICBsYW5ndWFnZXM6IGRhdGEubGFuZ3VhZ2VzLFxuICAgIH0sXG4gICAgbnVsbCxcbiAgICAyLFxuICApXG5cbiAgY29uc3QgZnVsbENvbnRleHQgPVxuICAgIGRhdGFDb250ZXh0ICtcbiAgICAnXFxuXFxuU0VTU0lPTiBTVU1NQVJJRVM6XFxuJyArXG4gICAgZmFjZXRTdW1tYXJpZXMgK1xuICAgICdcXG5cXG5GUklDVElPTiBERVRBSUxTOlxcbicgK1xuICAgIGZyaWN0aW9uRGV0YWlscyArXG4gICAgJ1xcblxcblVTRVIgSU5TVFJVQ1RJT05TIFRPIENMQVVERTpcXG4nICtcbiAgICAodXNlckluc3RydWN0aW9ucyB8fCAnTm9uZSBjYXB0dXJlZCcpXG5cbiAgLy8gUnVuIHNlY3Rpb25zIGluIHBhcmFsbGVsIGZpcnN0IChleGNsdWRpbmcgYXRfYV9nbGFuY2UpXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBJTlNJR0hUX1NFQ1RJT05TLm1hcChzZWN0aW9uID0+XG4gICAgICBnZW5lcmF0ZVNlY3Rpb25JbnNpZ2h0KHNlY3Rpb24sIGZ1bGxDb250ZXh0KSxcbiAgICApLFxuICApXG5cbiAgLy8gQ29tYmluZSByZXN1bHRzXG4gIGNvbnN0IGluc2lnaHRzOiBJbnNpZ2h0UmVzdWx0cyA9IHt9XG4gIGZvciAoY29uc3QgeyBuYW1lLCByZXN1bHQgfSBvZiByZXN1bHRzKSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgOyhpbnNpZ2h0cyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbbmFtZV0gPSByZXN1bHRcbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZCByaWNoIGNvbnRleHQgZnJvbSBnZW5lcmF0ZWQgc2VjdGlvbnMgZm9yIEF0IGEgR2xhbmNlXG4gIGNvbnN0IHByb2plY3RBcmVhc1RleHQgPVxuICAgIChcbiAgICAgIGluc2lnaHRzLnByb2plY3RfYXJlYXMgYXMge1xuICAgICAgICBhcmVhcz86IEFycmF5PHsgbmFtZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8uYXJlYXNcbiAgICAgID8ubWFwKGEgPT4gYC0gJHthLm5hbWV9OiAke2EuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGJpZ1dpbnNUZXh0ID1cbiAgICAoXG4gICAgICBpbnNpZ2h0cy53aGF0X3dvcmtzIGFzIHtcbiAgICAgICAgaW1wcmVzc2l2ZV93b3JrZmxvd3M/OiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfT5cbiAgICAgIH1cbiAgICApPy5pbXByZXNzaXZlX3dvcmtmbG93c1xuICAgICAgPy5tYXAodyA9PiBgLSAke3cudGl0bGV9OiAke3cuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGZyaWN0aW9uVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMuZnJpY3Rpb25fYW5hbHlzaXMgYXMge1xuICAgICAgICBjYXRlZ29yaWVzPzogQXJyYXk8eyBjYXRlZ29yeTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8uY2F0ZWdvcmllc1xuICAgICAgPy5tYXAoYyA9PiBgLSAke2MuY2F0ZWdvcnl9OiAke2MuZGVzY3JpcHRpb259YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIGNvbnN0IGZlYXR1cmVzVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMuc3VnZ2VzdGlvbnMgYXMge1xuICAgICAgICBmZWF0dXJlc190b190cnk/OiBBcnJheTx7IGZlYXR1cmU6IHN0cmluZzsgb25lX2xpbmVyOiBzdHJpbmcgfT5cbiAgICAgIH1cbiAgICApPy5mZWF0dXJlc190b190cnlcbiAgICAgID8ubWFwKGYgPT4gYC0gJHtmLmZlYXR1cmV9OiAke2Yub25lX2xpbmVyfWApXG4gICAgICAuam9pbignXFxuJykgfHwgJydcblxuICBjb25zdCBwYXR0ZXJuc1RleHQgPVxuICAgIChcbiAgICAgIGluc2lnaHRzLnN1Z2dlc3Rpb25zIGFzIHtcbiAgICAgICAgdXNhZ2VfcGF0dGVybnM/OiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IHN1Z2dlc3Rpb246IHN0cmluZyB9PlxuICAgICAgfVxuICAgICk/LnVzYWdlX3BhdHRlcm5zXG4gICAgICA/Lm1hcChwID0+IGAtICR7cC50aXRsZX06ICR7cC5zdWdnZXN0aW9ufWApXG4gICAgICAuam9pbignXFxuJykgfHwgJydcblxuICBjb25zdCBob3Jpem9uVGV4dCA9XG4gICAgKFxuICAgICAgaW5zaWdodHMub25fdGhlX2hvcml6b24gYXMge1xuICAgICAgICBvcHBvcnR1bml0aWVzPzogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB3aGF0c19wb3NzaWJsZTogc3RyaW5nIH0+XG4gICAgICB9XG4gICAgKT8ub3Bwb3J0dW5pdGllc1xuICAgICAgPy5tYXAobyA9PiBgLSAke28udGl0bGV9OiAke28ud2hhdHNfcG9zc2libGV9YClcbiAgICAgIC5qb2luKCdcXG4nKSB8fCAnJ1xuXG4gIC8vIE5vdyBnZW5lcmF0ZSBcIkF0IGEgR2xhbmNlXCIgd2l0aCBhY2Nlc3MgdG8gb3RoZXIgc2VjdGlvbnMnIG91dHB1dHNcbiAgY29uc3QgYXRBR2xhbmNlUHJvbXB0ID0gYFlvdSdyZSB3cml0aW5nIGFuIFwiQXQgYSBHbGFuY2VcIiBzdW1tYXJ5IGZvciBhIENsYXVkZSBDb2RlIHVzYWdlIGluc2lnaHRzIHJlcG9ydCBmb3IgQ2xhdWRlIENvZGUgdXNlcnMuIFRoZSBnb2FsIGlzIHRvIGhlbHAgdGhlbSB1bmRlcnN0YW5kIHRoZWlyIHVzYWdlIGFuZCBpbXByb3ZlIGhvdyB0aGV5IGNhbiB1c2UgQ2xhdWRlIGJldHRlciwgZXNwZWNpYWxseSBhcyBtb2RlbHMgaW1wcm92ZS5cblxuVXNlIHRoaXMgNC1wYXJ0IHN0cnVjdHVyZTpcblxuMS4gKipXaGF0J3Mgd29ya2luZyoqIC0gV2hhdCBpcyB0aGUgdXNlcidzIHVuaXF1ZSBzdHlsZSBvZiBpbnRlcmFjdGluZyB3aXRoIENsYXVkZSBhbmQgd2hhdCBhcmUgc29tZSBpbXBhY3RmdWwgdGhpbmdzIHRoZXkndmUgZG9uZT8gWW91IGNhbiBpbmNsdWRlIG9uZSBvciB0d28gZGV0YWlscywgYnV0IGtlZXAgaXQgaGlnaCBsZXZlbCBzaW5jZSB0aGluZ3MgbWlnaHQgbm90IGJlIGZyZXNoIGluIHRoZSB1c2VyJ3MgbWVtb3J5LiBEb24ndCBiZSBmbHVmZnkgb3Igb3Zlcmx5IGNvbXBsaW1lbnRhcnkuIEFsc28sIGRvbid0IGZvY3VzIG9uIHRoZSB0b29sIGNhbGxzIHRoZXkgdXNlLlxuXG4yLiAqKldoYXQncyBoaW5kZXJpbmcgeW91KiogLSBTcGxpdCBpbnRvIChhKSBDbGF1ZGUncyBmYXVsdCAobWlzdW5kZXJzdGFuZGluZ3MsIHdyb25nIGFwcHJvYWNoZXMsIGJ1Z3MpIGFuZCAoYikgdXNlci1zaWRlIGZyaWN0aW9uIChub3QgcHJvdmlkaW5nIGVub3VnaCBjb250ZXh0LCBlbnZpcm9ubWVudCBpc3N1ZXMgLS0gaWRlYWxseSBtb3JlIGdlbmVyYWwgdGhhbiBqdXN0IG9uZSBwcm9qZWN0KS4gQmUgaG9uZXN0IGJ1dCBjb25zdHJ1Y3RpdmUuXG5cbjMuICoqUXVpY2sgd2lucyB0byB0cnkqKiAtIFNwZWNpZmljIENsYXVkZSBDb2RlIGZlYXR1cmVzIHRoZXkgY291bGQgdHJ5IGZyb20gdGhlIGV4YW1wbGVzIGJlbG93LCBvciBhIHdvcmtmbG93IHRlY2huaXF1ZSBpZiB5b3UgdGhpbmsgaXQncyByZWFsbHkgY29tcGVsbGluZy4gKEF2b2lkIHN0dWZmIGxpa2UgXCJBc2sgQ2xhdWRlIHRvIGNvbmZpcm0gYmVmb3JlIHRha2luZyBhY3Rpb25zXCIgb3IgXCJUeXBlIG91dCBtb3JlIGNvbnRleHQgdXAgZnJvbnRcIiB3aGljaCBhcmUgbGVzcyBjb21wZWxsaW5nLilcblxuNC4gKipBbWJpdGlvdXMgd29ya2Zsb3dzIGZvciBiZXR0ZXIgbW9kZWxzKiogLSBBcyB3ZSBtb3ZlIHRvIG11Y2ggbW9yZSBjYXBhYmxlIG1vZGVscyBvdmVyIHRoZSBuZXh0IDMtNiBtb250aHMsIHdoYXQgc2hvdWxkIHRoZXkgcHJlcGFyZSBmb3I/IFdoYXQgd29ya2Zsb3dzIHRoYXQgc2VlbSBpbXBvc3NpYmxlIG5vdyB3aWxsIGJlY29tZSBwb3NzaWJsZT8gRHJhdyBmcm9tIHRoZSBhcHByb3ByaWF0ZSBzZWN0aW9uIGJlbG93LlxuXG5LZWVwIGVhY2ggc2VjdGlvbiB0byAyLTMgbm90LXRvby1sb25nIHNlbnRlbmNlcy4gRG9uJ3Qgb3ZlcndoZWxtIHRoZSB1c2VyLiBEb24ndCBtZW50aW9uIHNwZWNpZmljIG51bWVyaWNhbCBzdGF0cyBvciB1bmRlcmxpbmVkX2NhdGVnb3JpZXMgZnJvbSB0aGUgc2Vzc2lvbiBkYXRhIGJlbG93LiBVc2UgYSBjb2FjaGluZyB0b25lLlxuXG5SRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUOlxue1xuICBcIndoYXRzX3dvcmtpbmdcIjogXCIocmVmZXIgdG8gaW5zdHJ1Y3Rpb25zIGFib3ZlKVwiLFxuICBcIndoYXRzX2hpbmRlcmluZ1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCIsXG4gIFwicXVpY2tfd2luc1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCIsXG4gIFwiYW1iaXRpb3VzX3dvcmtmbG93c1wiOiBcIihyZWZlciB0byBpbnN0cnVjdGlvbnMgYWJvdmUpXCJcbn1cblxuU0VTU0lPTiBEQVRBOlxuJHtmdWxsQ29udGV4dH1cblxuIyMgUHJvamVjdCBBcmVhcyAod2hhdCB1c2VyIHdvcmtzIG9uKVxuJHtwcm9qZWN0QXJlYXNUZXh0fVxuXG4jIyBCaWcgV2lucyAoaW1wcmVzc2l2ZSBhY2NvbXBsaXNobWVudHMpXG4ke2JpZ1dpbnNUZXh0fVxuXG4jIyBGcmljdGlvbiBDYXRlZ29yaWVzICh3aGVyZSB0aGluZ3MgZ28gd3JvbmcpXG4ke2ZyaWN0aW9uVGV4dH1cblxuIyMgRmVhdHVyZXMgdG8gVHJ5XG4ke2ZlYXR1cmVzVGV4dH1cblxuIyMgVXNhZ2UgUGF0dGVybnMgdG8gQWRvcHRcbiR7cGF0dGVybnNUZXh0fVxuXG4jIyBPbiB0aGUgSG9yaXpvbiAoYW1iaXRpb3VzIHdvcmtmbG93cyBmb3IgYmV0dGVyIG1vZGVscylcbiR7aG9yaXpvblRleHR9YFxuXG4gIGNvbnN0IGF0QUdsYW5jZVNlY3Rpb246IEluc2lnaHRTZWN0aW9uID0ge1xuICAgIG5hbWU6ICdhdF9hX2dsYW5jZScsXG4gICAgcHJvbXB0OiBhdEFHbGFuY2VQcm9tcHQsXG4gICAgbWF4VG9rZW5zOiA4MTkyLFxuICB9XG5cbiAgY29uc3QgYXRBR2xhbmNlUmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVTZWN0aW9uSW5zaWdodChhdEFHbGFuY2VTZWN0aW9uLCAnJylcbiAgaWYgKGF0QUdsYW5jZVJlc3VsdC5yZXN1bHQpIHtcbiAgICBpbnNpZ2h0cy5hdF9hX2dsYW5jZSA9IGF0QUdsYW5jZVJlc3VsdC5yZXN1bHQgYXMge1xuICAgICAgd2hhdHNfd29ya2luZz86IHN0cmluZ1xuICAgICAgd2hhdHNfaGluZGVyaW5nPzogc3RyaW5nXG4gICAgICBxdWlja193aW5zPzogc3RyaW5nXG4gICAgICBhbWJpdGlvdXNfd29ya2Zsb3dzPzogc3RyaW5nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluc2lnaHRzXG59XG5cbi8vIEVzY2FwZSBIVE1MIGJ1dCByZW5kZXIgKipib2xkKiogYXMgPHN0cm9uZz5cbmZ1bmN0aW9uIGVzY2FwZUh0bWxXaXRoQm9sZCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBlc2NhcGVkID0gZXNjYXBlSHRtbCh0ZXh0KVxuICByZXR1cm4gZXNjYXBlZC5yZXBsYWNlKC9cXCpcXCooLis/KVxcKlxcKi9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpXG59XG5cbi8vIEZpeGVkIG9yZGVyaW5ncyBmb3Igc3BlY2lmaWMgY2hhcnRzIChtYXRjaGluZyBQeXRob24gcmVmZXJlbmNlKVxuY29uc3QgU0FUSVNGQUNUSU9OX09SREVSID0gW1xuICAnZnJ1c3RyYXRlZCcsXG4gICdkaXNzYXRpc2ZpZWQnLFxuICAnbGlrZWx5X3NhdGlzZmllZCcsXG4gICdzYXRpc2ZpZWQnLFxuICAnaGFwcHknLFxuICAndW5zdXJlJyxcbl1cblxuY29uc3QgT1VUQ09NRV9PUkRFUiA9IFtcbiAgJ25vdF9hY2hpZXZlZCcsXG4gICdwYXJ0aWFsbHlfYWNoaWV2ZWQnLFxuICAnbW9zdGx5X2FjaGlldmVkJyxcbiAgJ2Z1bGx5X2FjaGlldmVkJyxcbiAgJ3VuY2xlYXJfZnJvbV90cmFuc2NyaXB0Jyxcbl1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCYXJDaGFydChcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgY29sb3I6IHN0cmluZyxcbiAgbWF4SXRlbXMgPSA2LFxuICBmaXhlZE9yZGVyPzogc3RyaW5nW10sXG4pOiBzdHJpbmcge1xuICBsZXQgZW50cmllczogW3N0cmluZywgbnVtYmVyXVtdXG5cbiAgaWYgKGZpeGVkT3JkZXIpIHtcbiAgICAvLyBVc2UgZml4ZWQgb3JkZXIsIG9ubHkgaW5jbHVkaW5nIGl0ZW1zIHRoYXQgZXhpc3QgaW4gZGF0YVxuICAgIGVudHJpZXMgPSBmaXhlZE9yZGVyXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkgaW4gZGF0YSAmJiAoZGF0YVtrZXldID8/IDApID4gMClcbiAgICAgIC5tYXAoa2V5ID0+IFtrZXksIGRhdGFba2V5XSA/PyAwXSBhcyBbc3RyaW5nLCBudW1iZXJdKVxuICB9IGVsc2Uge1xuICAgIC8vIFNvcnQgYnkgY291bnQgZGVzY2VuZGluZ1xuICAgIGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgLnNsaWNlKDAsIG1heEl0ZW1zKVxuICB9XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gJzxwIGNsYXNzPVwiZW1wdHlcIj5ObyBkYXRhPC9wPidcblxuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5lbnRyaWVzLm1hcChlID0+IGVbMV0pKVxuICByZXR1cm4gZW50cmllc1xuICAgIC5tYXAoKFtsYWJlbCwgY291bnRdKSA9PiB7XG4gICAgICBjb25zdCBwY3QgPSAoY291bnQgLyBtYXhWYWwpICogMTAwXG4gICAgICAvLyBVc2UgTEFCRUxfTUFQIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNsZWFuIHVwIHVuZGVyc2NvcmVzIGFuZCB0aXRsZSBjYXNlXG4gICAgICBjb25zdCBjbGVhbkxhYmVsID1cbiAgICAgICAgTEFCRUxfTUFQW2xhYmVsXSB8fFxuICAgICAgICBsYWJlbC5yZXBsYWNlKC9fL2csICcgJykucmVwbGFjZSgvXFxiXFx3L2csIGMgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLWxhYmVsXCI+JHtlc2NhcGVIdG1sKGNsZWFuTGFiZWwpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLXRyYWNrXCI+PGRpdiBjbGFzcz1cImJhci1maWxsXCIgc3R5bGU9XCJ3aWR0aDoke3BjdH0lO2JhY2tncm91bmQ6JHtjb2xvcn1cIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci12YWx1ZVwiPiR7Y291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSZXNwb25zZVRpbWVIaXN0b2dyYW0odGltZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgaWYgKHRpbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICc8cCBjbGFzcz1cImVtcHR5XCI+Tm8gcmVzcG9uc2UgdGltZSBkYXRhPC9wPidcblxuICAvLyBDcmVhdGUgYnVja2V0cyAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSlcbiAgY29uc3QgYnVja2V0czogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcbiAgICAnMi0xMHMnOiAwLFxuICAgICcxMC0zMHMnOiAwLFxuICAgICczMHMtMW0nOiAwLFxuICAgICcxLTJtJzogMCxcbiAgICAnMi01bSc6IDAsXG4gICAgJzUtMTVtJzogMCxcbiAgICAnPjE1bSc6IDAsXG4gIH1cblxuICBmb3IgKGNvbnN0IHQgb2YgdGltZXMpIHtcbiAgICBpZiAodCA8IDEwKSBidWNrZXRzWycyLTEwcyddID0gKGJ1Y2tldHNbJzItMTBzJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBpZiAodCA8IDMwKSBidWNrZXRzWycxMC0zMHMnXSA9IChidWNrZXRzWycxMC0zMHMnXSA/PyAwKSArIDFcbiAgICBlbHNlIGlmICh0IDwgNjApIGJ1Y2tldHNbJzMwcy0xbSddID0gKGJ1Y2tldHNbJzMwcy0xbSddID8/IDApICsgMVxuICAgIGVsc2UgaWYgKHQgPCAxMjApIGJ1Y2tldHNbJzEtMm0nXSA9IChidWNrZXRzWycxLTJtJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBpZiAodCA8IDMwMCkgYnVja2V0c1snMi01bSddID0gKGJ1Y2tldHNbJzItNW0nXSA/PyAwKSArIDFcbiAgICBlbHNlIGlmICh0IDwgOTAwKSBidWNrZXRzWyc1LTE1bSddID0gKGJ1Y2tldHNbJzUtMTVtJ10gPz8gMCkgKyAxXG4gICAgZWxzZSBidWNrZXRzWyc+MTVtJ10gPSAoYnVja2V0c1snPjE1bSddID8/IDApICsgMVxuICB9XG5cbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4uT2JqZWN0LnZhbHVlcyhidWNrZXRzKSlcbiAgaWYgKG1heFZhbCA9PT0gMCkgcmV0dXJuICc8cCBjbGFzcz1cImVtcHR5XCI+Tm8gcmVzcG9uc2UgdGltZSBkYXRhPC9wPidcblxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoYnVja2V0cylcbiAgICAubWFwKChbbGFiZWwsIGNvdW50XSkgPT4ge1xuICAgICAgY29uc3QgcGN0ID0gKGNvdW50IC8gbWF4VmFsKSAqIDEwMFxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiYmFyLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLWxhYmVsXCI+JHtsYWJlbH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci10cmFja1wiPjxkaXYgY2xhc3M9XCJiYXItZmlsbFwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JTtiYWNrZ3JvdW5kOiM2MzY2ZjFcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhci12YWx1ZVwiPiR7Y291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUaW1lT2ZEYXlDaGFydChtZXNzYWdlSG91cnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgaWYgKG1lc3NhZ2VIb3Vycy5sZW5ndGggPT09IDApIHJldHVybiAnPHAgY2xhc3M9XCJlbXB0eVwiPk5vIHRpbWUgZGF0YTwvcD4nXG5cbiAgLy8gR3JvdXAgaW50byB0aW1lIHBlcmlvZHNcbiAgY29uc3QgcGVyaW9kcyA9IFtcbiAgICB7IGxhYmVsOiAnTW9ybmluZyAoNi0xMiknLCByYW5nZTogWzYsIDcsIDgsIDksIDEwLCAxMV0gfSxcbiAgICB7IGxhYmVsOiAnQWZ0ZXJub29uICgxMi0xOCknLCByYW5nZTogWzEyLCAxMywgMTQsIDE1LCAxNiwgMTddIH0sXG4gICAgeyBsYWJlbDogJ0V2ZW5pbmcgKDE4LTI0KScsIHJhbmdlOiBbMTgsIDE5LCAyMCwgMjEsIDIyLCAyM10gfSxcbiAgICB7IGxhYmVsOiAnTmlnaHQgKDAtNiknLCByYW5nZTogWzAsIDEsIDIsIDMsIDQsIDVdIH0sXG4gIF1cblxuICBjb25zdCBob3VyQ291bnRzOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+ID0ge31cbiAgZm9yIChjb25zdCBoIG9mIG1lc3NhZ2VIb3Vycykge1xuICAgIGhvdXJDb3VudHNbaF0gPSAoaG91ckNvdW50c1toXSB8fCAwKSArIDFcbiAgfVxuXG4gIGNvbnN0IHBlcmlvZENvdW50cyA9IHBlcmlvZHMubWFwKHAgPT4gKHtcbiAgICBsYWJlbDogcC5sYWJlbCxcbiAgICBjb3VudDogcC5yYW5nZS5yZWR1Y2UoKHN1bSwgaCkgPT4gc3VtICsgKGhvdXJDb3VudHNbaF0gfHwgMCksIDApLFxuICB9KSlcblxuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5wZXJpb2RDb3VudHMubWFwKHAgPT4gcC5jb3VudCkpIHx8IDFcblxuICBjb25zdCBiYXJzSHRtbCA9IHBlcmlvZENvdW50c1xuICAgIC5tYXAoXG4gICAgICBwID0+IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJiYXItcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItbGFiZWxcIj4ke3AubGFiZWx9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItdHJhY2tcIj48ZGl2IGNsYXNzPVwiYmFyLWZpbGxcIiBzdHlsZT1cIndpZHRoOiR7KHAuY291bnQgLyBtYXhWYWwpICogMTAwfSU7YmFja2dyb3VuZDojOGI1Y2Y2XCI+PC9kaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXItdmFsdWVcIj4ke3AuY291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5gLFxuICAgIClcbiAgICAuam9pbignXFxuJylcblxuICByZXR1cm4gYDxkaXYgaWQ9XCJob3VyLWhpc3RvZ3JhbVwiPiR7YmFyc0h0bWx9PC9kaXY+YFxufVxuXG5mdW5jdGlvbiBnZXRIb3VyQ291bnRzSnNvbihtZXNzYWdlSG91cnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgY29uc3QgaG91ckNvdW50czogUmVjb3JkPG51bWJlciwgbnVtYmVyPiA9IHt9XG4gIGZvciAoY29uc3QgaCBvZiBtZXNzYWdlSG91cnMpIHtcbiAgICBob3VyQ291bnRzW2hdID0gKGhvdXJDb3VudHNbaF0gfHwgMCkgKyAxXG4gIH1cbiAgcmV0dXJuIGpzb25TdHJpbmdpZnkoaG91ckNvdW50cylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sUmVwb3J0KFxuICBkYXRhOiBBZ2dyZWdhdGVkRGF0YSxcbiAgaW5zaWdodHM6IEluc2lnaHRSZXN1bHRzLFxuKTogc3RyaW5nIHtcbiAgY29uc3QgbWFya2Rvd25Ub0h0bWwgPSAobWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFtZCkgcmV0dXJuICcnXG4gICAgcmV0dXJuIG1kXG4gICAgICAuc3BsaXQoJ1xcblxcbicpXG4gICAgICAubWFwKHAgPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IGVzY2FwZUh0bWwocClcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwqXFwqKC4rPylcXCpcXCovZywgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKVxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9eLSAvZ20sICdcdTIwMjIgJylcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxuL2csICc8YnI+JylcbiAgICAgICAgcmV0dXJuIGA8cD4ke2h0bWx9PC9wPmBcbiAgICAgIH0pXG4gICAgICAuam9pbignXFxuJylcbiAgfVxuXG4gIC8vIEJ1aWxkIEF0IGEgR2xhbmNlIHNlY3Rpb24gKG5ldyA0LXBhcnQgZm9ybWF0IHdpdGggbGlua3MgdG8gc2VjdGlvbnMpXG4gIGNvbnN0IGF0QUdsYW5jZSA9IGluc2lnaHRzLmF0X2FfZ2xhbmNlXG4gIGNvbnN0IGF0QUdsYW5jZUh0bWwgPSBhdEFHbGFuY2VcbiAgICA/IGBcbiAgICA8ZGl2IGNsYXNzPVwiYXQtYS1nbGFuY2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnbGFuY2UtdGl0bGVcIj5BdCBhIEdsYW5jZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdsYW5jZS1zZWN0aW9uc1wiPlxuICAgICAgICAke2F0QUdsYW5jZS53aGF0c193b3JraW5nID8gYDxkaXYgY2xhc3M9XCJnbGFuY2Utc2VjdGlvblwiPjxzdHJvbmc+V2hhdCdzIHdvcmtpbmc6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbFdpdGhCb2xkKGF0QUdsYW5jZS53aGF0c193b3JraW5nKX0gPGEgaHJlZj1cIiNzZWN0aW9uLXdpbnNcIiBjbGFzcz1cInNlZS1tb3JlXCI+SW1wcmVzc2l2ZSBUaGluZ3MgWW91IERpZCBcdTIxOTI8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgICAke2F0QUdsYW5jZS53aGF0c19oaW5kZXJpbmcgPyBgPGRpdiBjbGFzcz1cImdsYW5jZS1zZWN0aW9uXCI+PHN0cm9uZz5XaGF0J3MgaGluZGVyaW5nIHlvdTo8L3N0cm9uZz4gJHtlc2NhcGVIdG1sV2l0aEJvbGQoYXRBR2xhbmNlLndoYXRzX2hpbmRlcmluZyl9IDxhIGhyZWY9XCIjc2VjdGlvbi1mcmljdGlvblwiIGNsYXNzPVwic2VlLW1vcmVcIj5XaGVyZSBUaGluZ3MgR28gV3JvbmcgXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgJHthdEFHbGFuY2UucXVpY2tfd2lucyA/IGA8ZGl2IGNsYXNzPVwiZ2xhbmNlLXNlY3Rpb25cIj48c3Ryb25nPlF1aWNrIHdpbnMgdG8gdHJ5Ojwvc3Ryb25nPiAke2VzY2FwZUh0bWxXaXRoQm9sZChhdEFHbGFuY2UucXVpY2tfd2lucyl9IDxhIGhyZWY9XCIjc2VjdGlvbi1mZWF0dXJlc1wiIGNsYXNzPVwic2VlLW1vcmVcIj5GZWF0dXJlcyB0byBUcnkgXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93cyA/IGA8ZGl2IGNsYXNzPVwiZ2xhbmNlLXNlY3Rpb25cIj48c3Ryb25nPkFtYml0aW91cyB3b3JrZmxvd3M6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbFdpdGhCb2xkKGF0QUdsYW5jZS5hbWJpdGlvdXNfd29ya2Zsb3dzKX0gPGEgaHJlZj1cIiNzZWN0aW9uLWhvcml6b25cIiBjbGFzcz1cInNlZS1tb3JlXCI+T24gdGhlIEhvcml6b24gXHUyMTkyPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICA6ICcnXG5cbiAgLy8gQnVpbGQgcHJvamVjdCBhcmVhcyBzZWN0aW9uXG4gIGNvbnN0IHByb2plY3RBcmVhcyA9IGluc2lnaHRzLnByb2plY3RfYXJlYXM/LmFyZWFzIHx8IFtdXG4gIGNvbnN0IHByb2plY3RBcmVhc0h0bWwgPVxuICAgIHByb2plY3RBcmVhcy5sZW5ndGggPiAwXG4gICAgICA/IGBcbiAgICA8aDIgaWQ9XCJzZWN0aW9uLXdvcmtcIj5XaGF0IFlvdSBXb3JrIE9uPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1hcmVhc1wiPlxuICAgICAgJHtwcm9qZWN0QXJlYXNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBhcmVhID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYXJlYVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcmVhLWhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmVhLW5hbWVcIj4ke2VzY2FwZUh0bWwoYXJlYS5uYW1lKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyZWEtY291bnRcIj5+JHthcmVhLnNlc3Npb25fY291bnR9IHNlc3Npb25zPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcmVhLWRlc2NcIj4ke2VzY2FwZUh0bWwoYXJlYS5kZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIGludGVyYWN0aW9uIHN0eWxlIHNlY3Rpb25cbiAgY29uc3QgaW50ZXJhY3Rpb25TdHlsZSA9IGluc2lnaHRzLmludGVyYWN0aW9uX3N0eWxlXG4gIGNvbnN0IGludGVyYWN0aW9uSHRtbCA9IGludGVyYWN0aW9uU3R5bGU/Lm5hcnJhdGl2ZVxuICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tdXNhZ2VcIj5Ib3cgWW91IFVzZSBDbGF1ZGUgQ29kZTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm5hcnJhdGl2ZVwiPlxuICAgICAgJHttYXJrZG93blRvSHRtbChpbnRlcmFjdGlvblN0eWxlLm5hcnJhdGl2ZSl9XG4gICAgICAke2ludGVyYWN0aW9uU3R5bGUua2V5X3BhdHRlcm4gPyBgPGRpdiBjbGFzcz1cImtleS1pbnNpZ2h0XCI+PHN0cm9uZz5LZXkgcGF0dGVybjo8L3N0cm9uZz4gJHtlc2NhcGVIdG1sKGludGVyYWN0aW9uU3R5bGUua2V5X3BhdHRlcm4pfTwvZGl2PmAgOiAnJ31cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIHdoYXQgd29ya3Mgc2VjdGlvblxuICBjb25zdCB3aGF0V29ya3MgPSBpbnNpZ2h0cy53aGF0X3dvcmtzXG4gIGNvbnN0IHdoYXRXb3Jrc0h0bWwgPVxuICAgIHdoYXRXb3Jrcz8uaW1wcmVzc2l2ZV93b3JrZmxvd3MgJiYgd2hhdFdvcmtzLmltcHJlc3NpdmVfd29ya2Zsb3dzLmxlbmd0aCA+IDBcbiAgICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24td2luc1wiPkltcHJlc3NpdmUgVGhpbmdzIFlvdSBEaWQ8L2gyPlxuICAgICR7d2hhdFdvcmtzLmludHJvID8gYDxwIGNsYXNzPVwic2VjdGlvbi1pbnRyb1wiPiR7ZXNjYXBlSHRtbCh3aGF0V29ya3MuaW50cm8pfTwvcD5gIDogJyd9XG4gICAgPGRpdiBjbGFzcz1cImJpZy13aW5zXCI+XG4gICAgICAke3doYXRXb3Jrcy5pbXByZXNzaXZlX3dvcmtmbG93c1xuICAgICAgICAubWFwKFxuICAgICAgICAgIHdmID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJpZy13aW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLXdpbi10aXRsZVwiPiR7ZXNjYXBlSHRtbCh3Zi50aXRsZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJpZy13aW4tZGVzY1wiPiR7ZXNjYXBlSHRtbCh3Zi5kZXNjcmlwdGlvbiB8fCAnJyl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIGZyaWN0aW9uIHNlY3Rpb25cbiAgY29uc3QgZnJpY3Rpb25BbmFseXNpcyA9IGluc2lnaHRzLmZyaWN0aW9uX2FuYWx5c2lzXG4gIGNvbnN0IGZyaWN0aW9uSHRtbCA9XG4gICAgZnJpY3Rpb25BbmFseXNpcz8uY2F0ZWdvcmllcyAmJiBmcmljdGlvbkFuYWx5c2lzLmNhdGVnb3JpZXMubGVuZ3RoID4gMFxuICAgICAgPyBgXG4gICAgPGgyIGlkPVwic2VjdGlvbi1mcmljdGlvblwiPldoZXJlIFRoaW5ncyBHbyBXcm9uZzwvaDI+XG4gICAgJHtmcmljdGlvbkFuYWx5c2lzLmludHJvID8gYDxwIGNsYXNzPVwic2VjdGlvbi1pbnRyb1wiPiR7ZXNjYXBlSHRtbChmcmljdGlvbkFuYWx5c2lzLmludHJvKX08L3A+YCA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJmcmljdGlvbi1jYXRlZ29yaWVzXCI+XG4gICAgICAke2ZyaWN0aW9uQW5hbHlzaXMuY2F0ZWdvcmllc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIGNhdCA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcmljdGlvbi1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcmljdGlvbi10aXRsZVwiPiR7ZXNjYXBlSHRtbChjYXQuY2F0ZWdvcnkgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcmljdGlvbi1kZXNjXCI+JHtlc2NhcGVIdG1sKGNhdC5kZXNjcmlwdGlvbiB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgJHtjYXQuZXhhbXBsZXMgPyBgPHVsIGNsYXNzPVwiZnJpY3Rpb24tZXhhbXBsZXNcIj4ke2NhdC5leGFtcGxlcy5tYXAoZXggPT4gYDxsaT4ke2VzY2FwZUh0bWwoZXgpfTwvbGk+YCkuam9pbignJyl9PC91bD5gIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgOiAnJ1xuXG4gIC8vIEJ1aWxkIHN1Z2dlc3Rpb25zIHNlY3Rpb25cbiAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBpbnNpZ2h0cy5zdWdnZXN0aW9uc1xuICBjb25zdCBzdWdnZXN0aW9uc0h0bWwgPSBzdWdnZXN0aW9uc1xuICAgID8gYFxuICAgICR7XG4gICAgICBzdWdnZXN0aW9ucy5jbGF1ZGVfbWRfYWRkaXRpb25zICYmXG4gICAgICBzdWdnZXN0aW9ucy5jbGF1ZGVfbWRfYWRkaXRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgXG4gICAgPGgyIGlkPVwic2VjdGlvbi1mZWF0dXJlc1wiPkV4aXN0aW5nIENDIEZlYXR1cmVzIHRvIFRyeTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImNsYXVkZS1tZC1zZWN0aW9uXCI+XG4gICAgICA8aDM+U3VnZ2VzdGVkIENMQVVERS5tZCBBZGRpdGlvbnM8L2gzPlxuICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tYm90dG9tOiAxMnB4O1wiPkp1c3QgY29weSB0aGlzIGludG8gQ2xhdWRlIENvZGUgdG8gYWRkIGl0IHRvIHlvdXIgQ0xBVURFLm1kLjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbGF1ZGUtbWQtYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29weS1hbGwtYnRuXCIgb25jbGljaz1cImNvcHlBbGxDaGVja2VkQ2xhdWRlTWQoKVwiPkNvcHkgQWxsIENoZWNrZWQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtzdWdnZXN0aW9ucy5jbGF1ZGVfbWRfYWRkaXRpb25zXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKGFkZCwgaSkgPT4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xhdWRlLW1kLWl0ZW1cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjbWQtJHtpfVwiIGNsYXNzPVwiY21kLWNoZWNrYm94XCIgY2hlY2tlZCBkYXRhLXRleHQ9XCIke2VzY2FwZUh0bWwoYWRkLnByb21wdF9zY2FmZm9sZCB8fCBhZGQud2hlcmUgfHwgJ0FkZCB0byBDTEFVREUubWQnKX1cXFxcblxcXFxuJHtlc2NhcGVIdG1sKGFkZC5hZGRpdGlvbil9XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImNtZC0ke2l9XCI+XG4gICAgICAgICAgICA8Y29kZSBjbGFzcz1cImNtZC1jb2RlXCI+JHtlc2NhcGVIdG1sKGFkZC5hZGRpdGlvbil9PC9jb2RlPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvcHktYnRuXCIgb25jbGljaz1cImNvcHlDbWRJdGVtKCR7aX0pXCI+Q29weTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtZC13aHlcIj4ke2VzY2FwZUh0bWwoYWRkLndoeSl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgICA6ICcnXG4gICAgfVxuICAgICR7XG4gICAgICBzdWdnZXN0aW9ucy5mZWF0dXJlc190b190cnkgJiYgc3VnZ2VzdGlvbnMuZmVhdHVyZXNfdG9fdHJ5Lmxlbmd0aCA+IDBcbiAgICAgICAgPyBgXG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tYm90dG9tOiAxMnB4O1wiPkp1c3QgY29weSB0aGlzIGludG8gQ2xhdWRlIENvZGUgYW5kIGl0J2xsIHNldCBpdCB1cCBmb3IgeW91LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXMtc2VjdGlvblwiPlxuICAgICAgJHtzdWdnZXN0aW9ucy5mZWF0dXJlc190b190cnlcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBmZWF0ID0+IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGZlYXQuZmVhdHVyZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtb25lbGluZXJcIj4ke2VzY2FwZUh0bWwoZmVhdC5vbmVfbGluZXIgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLXdoeVwiPjxzdHJvbmc+V2h5IGZvciB5b3U6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbChmZWF0LndoeV9mb3JfeW91IHx8ICcnKX08L2Rpdj5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZmVhdC5leGFtcGxlX2NvZGVcbiAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtZXhhbXBsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29kZS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImV4YW1wbGUtY29kZVwiPiR7ZXNjYXBlSHRtbChmZWF0LmV4YW1wbGVfY29kZSl9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3B5LWJ0blwiIG9uY2xpY2s9XCJjb3B5VGV4dCh0aGlzKVwiPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyl9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgICAgICA6ICcnXG4gICAgfVxuICAgICR7XG4gICAgICBzdWdnZXN0aW9ucy51c2FnZV9wYXR0ZXJucyAmJiBzdWdnZXN0aW9ucy51c2FnZV9wYXR0ZXJucy5sZW5ndGggPiAwXG4gICAgICAgID8gYFxuICAgIDxoMiBpZD1cInNlY3Rpb24tcGF0dGVybnNcIj5OZXcgV2F5cyB0byBVc2UgQ2xhdWRlIENvZGU8L2gyPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogMTJweDtcIj5KdXN0IGNvcHkgdGhpcyBpbnRvIENsYXVkZSBDb2RlIGFuZCBpdCdsbCB3YWxrIHlvdSB0aHJvdWdoIGl0LjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwicGF0dGVybnMtc2VjdGlvblwiPlxuICAgICAgJHtzdWdnZXN0aW9ucy51c2FnZV9wYXR0ZXJuc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIHBhdCA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXR0ZXJuLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGF0dGVybi10aXRsZVwiPiR7ZXNjYXBlSHRtbChwYXQudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXR0ZXJuLXN1bW1hcnlcIj4ke2VzY2FwZUh0bWwocGF0LnN1Z2dlc3Rpb24gfHwgJycpfTwvZGl2PlxuICAgICAgICAgICR7cGF0LmRldGFpbCA/IGA8ZGl2IGNsYXNzPVwicGF0dGVybi1kZXRhaWxcIj4ke2VzY2FwZUh0bWwocGF0LmRldGFpbCl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBwYXQuY29weWFibGVfcHJvbXB0XG4gICAgICAgICAgICAgID8gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5YWJsZS1wcm9tcHQtc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb21wdC1sYWJlbFwiPlBhc3RlIGludG8gQ2xhdWRlIENvZGU6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29weWFibGUtcHJvbXB0LXJvd1wiPlxuICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImNvcHlhYmxlLXByb21wdFwiPiR7ZXNjYXBlSHRtbChwYXQuY29weWFibGVfcHJvbXB0KX08L2NvZGU+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3B5LWJ0blwiIG9uY2xpY2s9XCJjb3B5VGV4dCh0aGlzKVwiPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKX1cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICAgIDogJydcbiAgICB9XG4gICAgYFxuICAgIDogJydcblxuICAvLyBCdWlsZCBPbiB0aGUgSG9yaXpvbiBzZWN0aW9uXG4gIGNvbnN0IGhvcml6b25EYXRhID0gaW5zaWdodHMub25fdGhlX2hvcml6b25cbiAgY29uc3QgaG9yaXpvbkh0bWwgPVxuICAgIGhvcml6b25EYXRhPy5vcHBvcnR1bml0aWVzICYmIGhvcml6b25EYXRhLm9wcG9ydHVuaXRpZXMubGVuZ3RoID4gMFxuICAgICAgPyBgXG4gICAgPGgyIGlkPVwic2VjdGlvbi1ob3Jpem9uXCI+T24gdGhlIEhvcml6b248L2gyPlxuICAgICR7aG9yaXpvbkRhdGEuaW50cm8gPyBgPHAgY2xhc3M9XCJzZWN0aW9uLWludHJvXCI+JHtlc2NhcGVIdG1sKGhvcml6b25EYXRhLmludHJvKX08L3A+YCA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLXNlY3Rpb25cIj5cbiAgICAgICR7aG9yaXpvbkRhdGEub3Bwb3J0dW5pdGllc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIG9wcCA9PiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbi10aXRsZVwiPiR7ZXNjYXBlSHRtbChvcHAudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9uLXBvc3NpYmxlXCI+JHtlc2NhcGVIdG1sKG9wcC53aGF0c19wb3NzaWJsZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgJHtvcHAuaG93X3RvX3RyeSA/IGA8ZGl2IGNsYXNzPVwiaG9yaXpvbi10aXBcIj48c3Ryb25nPkdldHRpbmcgc3RhcnRlZDo8L3N0cm9uZz4gJHtlc2NhcGVIdG1sKG9wcC5ob3dfdG9fdHJ5KX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgJHtvcHAuY29weWFibGVfcHJvbXB0ID8gYDxkaXYgY2xhc3M9XCJwYXR0ZXJuLXByb21wdFwiPjxkaXYgY2xhc3M9XCJwcm9tcHQtbGFiZWxcIj5QYXN0ZSBpbnRvIENsYXVkZSBDb2RlOjwvZGl2Pjxjb2RlPiR7ZXNjYXBlSHRtbChvcHAuY29weWFibGVfcHJvbXB0KX08L2NvZGU+PGJ1dHRvbiBjbGFzcz1cImNvcHktYnRuXCIgb25jbGljaz1cImNvcHlUZXh0KHRoaXMpXCI+Q29weTwvYnV0dG9uPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKX1cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICA6ICcnXG5cbiAgLy8gQnVpbGQgVGVhbSBGZWVkYmFjayBzZWN0aW9uIChjb2xsYXBzaWJsZSwgYW50LW9ubHkpXG4gIGNvbnN0IGNjSW1wcm92ZW1lbnRzID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgICA/IGluc2lnaHRzLmNjX3RlYW1faW1wcm92ZW1lbnRzPy5pbXByb3ZlbWVudHMgfHwgW11cbiAgICAgIDogW11cbiAgY29uc3QgbW9kZWxJbXByb3ZlbWVudHMgPVxuICAgIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICAgID8gaW5zaWdodHMubW9kZWxfYmVoYXZpb3JfaW1wcm92ZW1lbnRzPy5pbXByb3ZlbWVudHMgfHwgW11cbiAgICAgIDogW11cbiAgY29uc3QgdGVhbUZlZWRiYWNrSHRtbCA9XG4gICAgY2NJbXByb3ZlbWVudHMubGVuZ3RoID4gMCB8fCBtb2RlbEltcHJvdmVtZW50cy5sZW5ndGggPiAwXG4gICAgICA/IGBcbiAgICA8aDIgaWQ9XCJzZWN0aW9uLWZlZWRiYWNrXCIgY2xhc3M9XCJmZWVkYmFjay1oZWFkZXJcIj5DbG9zaW5nIHRoZSBMb29wOiBGZWVkYmFjayBmb3IgT3RoZXIgVGVhbXM8L2gyPlxuICAgIDxwIGNsYXNzPVwiZmVlZGJhY2staW50cm9cIj5TdWdnZXN0aW9ucyBmb3IgdGhlIENDIHByb2R1Y3QgYW5kIG1vZGVsIHRlYW1zIGJhc2VkIG9uIHlvdXIgdXNhZ2UgcGF0dGVybnMuIENsaWNrIHRvIGV4cGFuZC48L3A+XG4gICAgJHtcbiAgICAgIGNjSW1wcm92ZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgXG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbmNsaWNrPVwidG9nZ2xlQ29sbGFwc2libGUodGhpcylcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2xsYXBzaWJsZS1hcnJvd1wiPlx1MjVCNjwvc3Bhbj5cbiAgICAgICAgPGgzPlByb2R1Y3QgSW1wcm92ZW1lbnRzIGZvciBDQyBUZWFtPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1Z2dlc3Rpb25zLXNlY3Rpb25cIj5cbiAgICAgICAgICAke2NjSW1wcm92ZW1lbnRzXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICBpbXAgPT4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrLWNhcmQgdGVhbS1jYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFjay10aXRsZVwiPiR7ZXNjYXBlSHRtbChpbXAudGl0bGUgfHwgJycpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stZGV0YWlsXCI+JHtlc2NhcGVIdG1sKGltcC5kZXRhaWwgfHwgJycpfTwvZGl2PlxuICAgICAgICAgICAgICAke2ltcC5ldmlkZW5jZSA/IGA8ZGl2IGNsYXNzPVwiZmVlZGJhY2stZXZpZGVuY2VcIj48ZW0+RXZpZGVuY2U6PC9lbT4gJHtlc2NhcGVIdG1sKGltcC5ldmlkZW5jZSl9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgICAgIDogJydcbiAgICB9XG4gICAgJHtcbiAgICAgIG1vZGVsSW1wcm92ZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgXG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbmNsaWNrPVwidG9nZ2xlQ29sbGFwc2libGUodGhpcylcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2xsYXBzaWJsZS1hcnJvd1wiPlx1MjVCNjwvc3Bhbj5cbiAgICAgICAgPGgzPk1vZGVsIEJlaGF2aW9yIEltcHJvdmVtZW50czwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWdnZXN0aW9ucy1zZWN0aW9uXCI+XG4gICAgICAgICAgJHttb2RlbEltcHJvdmVtZW50c1xuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgaW1wID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFjay1jYXJkIG1vZGVsLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrLXRpdGxlXCI+JHtlc2NhcGVIdG1sKGltcC50aXRsZSB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFjay1kZXRhaWxcIj4ke2VzY2FwZUh0bWwoaW1wLmRldGFpbCB8fCAnJyl9PC9kaXY+XG4gICAgICAgICAgICAgICR7aW1wLmV2aWRlbmNlID8gYDxkaXYgY2xhc3M9XCJmZWVkYmFjay1ldmlkZW5jZVwiPjxlbT5FdmlkZW5jZTo8L2VtPiAke2VzY2FwZUh0bWwoaW1wLmV2aWRlbmNlKX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICAgICAgOiAnJ1xuICAgIH1cbiAgICBgXG4gICAgICA6ICcnXG5cbiAgLy8gQnVpbGQgRnVuIEVuZGluZyBzZWN0aW9uXG4gIGNvbnN0IGZ1bkVuZGluZyA9IGluc2lnaHRzLmZ1bl9lbmRpbmdcbiAgY29uc3QgZnVuRW5kaW5nSHRtbCA9IGZ1bkVuZGluZz8uaGVhZGxpbmVcbiAgICA/IGBcbiAgICA8ZGl2IGNsYXNzPVwiZnVuLWVuZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZ1bi1oZWFkbGluZVwiPlwiJHtlc2NhcGVIdG1sKGZ1bkVuZGluZy5oZWFkbGluZSl9XCI8L2Rpdj5cbiAgICAgICR7ZnVuRW5kaW5nLmRldGFpbCA/IGA8ZGl2IGNsYXNzPVwiZnVuLWRldGFpbFwiPiR7ZXNjYXBlSHRtbChmdW5FbmRpbmcuZGV0YWlsKX08L2Rpdj5gIDogJyd9XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIDogJydcblxuICBjb25zdCBjc3MgPSBgXG4gICAgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuICAgIGJvZHkgeyBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmOyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBjb2xvcjogIzMzNDE1NTsgbGluZS1oZWlnaHQ6IDEuNjU7IHBhZGRpbmc6IDQ4cHggMjRweDsgfVxuICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6IDgwMHB4OyBtYXJnaW46IDAgYXV0bzsgfVxuICAgIGgxIHsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzBmMTcyYTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgaDIgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMGYxNzJhOyBtYXJnaW4tdG9wOiA0OHB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gICAgLnN1YnRpdGxlIHsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTVweDsgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgIC5uYXYtdG9jIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDhweDsgbWFyZ2luOiAyNHB4IDAgMzJweCAwOyBwYWRkaW5nOiAxNnB4OyBiYWNrZ3JvdW5kOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyB9XG4gICAgLm5hdi10b2MgYSB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgcGFkZGluZzogNnB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYmFja2dyb3VuZDogI2YxZjVmOTsgdHJhbnNpdGlvbjogYWxsIDAuMTVzOyB9XG4gICAgLm5hdi10b2MgYTpob3ZlciB7IGJhY2tncm91bmQ6ICNlMmU4ZjA7IGNvbG9yOiAjMzM0MTU1OyB9XG4gICAgLnN0YXRzLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMjRweDsgbWFyZ2luLWJvdHRvbTogNDBweDsgcGFkZGluZzogMjBweCAwOyBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7IGZsZXgtd3JhcDogd3JhcDsgfVxuICAgIC5zdGF0IHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLnN0YXQtdmFsdWUgeyBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMGYxNzJhOyB9XG4gICAgLnN0YXQtbGFiZWwgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLmF0LWEtZ2xhbmNlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZjNjNyAwJSwgI2ZkZTY4YSAxMDAlKTsgYm9yZGVyOiAxcHggc29saWQgI2Y1OWUwYjsgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMjBweCAyNHB4OyBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XG4gICAgLmdsYW5jZS10aXRsZSB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM5MjQwMGU7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAuZ2xhbmNlLXNlY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyB9XG4gICAgLmdsYW5jZS1zZWN0aW9uIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzc4MzUwZjsgbGluZS1oZWlnaHQ6IDEuNjsgfVxuICAgIC5nbGFuY2Utc2VjdGlvbiBzdHJvbmcgeyBjb2xvcjogIzkyNDAwZTsgfVxuICAgIC5zZWUtbW9yZSB7IGNvbG9yOiAjYjQ1MzA5OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc2l6ZTogMTNweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5zZWUtbW9yZTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gICAgLnByb2plY3QtYXJlYXMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDMycHg7IH1cbiAgICAucHJvamVjdC1hcmVhIHsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5hcmVhLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmFyZWEtbmFtZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICMwZjE3MmE7IH1cbiAgICAuYXJlYS1jb3VudCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICAgIC5hcmVhLWRlc2MgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNDc1NTY5OyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLm5hcnJhdGl2ZSB7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbi1ib3R0b206IDI0cHg7IH1cbiAgICAubmFycmF0aXZlIHAgeyBtYXJnaW4tYm90dG9tOiAxMnB4OyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNDc1NTY5OyBsaW5lLWhlaWdodDogMS43OyB9XG4gICAgLmtleS1pbnNpZ2h0IHsgYmFja2dyb3VuZDogI2YwZmRmNDsgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxMnB4IDE2cHg7IG1hcmdpbi10b3A6IDEycHg7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMxNjY1MzQ7IH1cbiAgICAuc2VjdGlvbi1pbnRybyB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAuYmlnLXdpbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDI0cHg7IH1cbiAgICAuYmlnLXdpbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5iaWctd2luLXRpdGxlIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzE2NjUzNDsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmJpZy13aW4tZGVzYyB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMxNTgwM2Q7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICAuZnJpY3Rpb24tY2F0ZWdvcmllcyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTZweDsgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuICAgIC5mcmljdGlvbi1jYXRlZ29yeSB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGJvcmRlcjogMXB4IHNvbGlkICNmY2E1YTU7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5mcmljdGlvbi10aXRsZSB7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICM5OTFiMWI7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5mcmljdGlvbi1kZXNjIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzdmMWQxZDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAgIC5mcmljdGlvbi1leGFtcGxlcyB7IG1hcmdpbjogMCAwIDAgMjBweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogIzMzNDE1NTsgfVxuICAgIC5mcmljdGlvbi1leGFtcGxlcyBsaSB7IG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAgIC5jbGF1ZGUtbWQtc2VjdGlvbiB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIC5jbGF1ZGUtbWQtc2VjdGlvbiBoMyB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxZTQwYWY7IG1hcmdpbjogMCAwIDEycHggMDsgfVxuICAgIC5jbGF1ZGUtbWQtYWN0aW9ucyB7IG1hcmdpbi1ib3R0b206IDEycHg7IHBhZGRpbmctYm90dG9tOiAxMnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZWFmZTsgfVxuICAgIC5jb3B5LWFsbC1idG4geyBiYWNrZ3JvdW5kOiAjMjU2M2ViOyBjb2xvcjogd2hpdGU7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNHB4OyBwYWRkaW5nOiA2cHggMTJweDsgZm9udC1zaXplOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA1MDA7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gICAgLmNvcHktYWxsLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6ICMxZDRlZDg7IH1cbiAgICAuY29weS1hbGwtYnRuLmNvcGllZCB7IGJhY2tncm91bmQ6ICMxNmEzNGE7IH1cbiAgICAuY2xhdWRlLW1kLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDhweDsgcGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZWFmZTsgfVxuICAgIC5jbGF1ZGUtbWQtaXRlbTpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAgIC5jbWQtY2hlY2tib3ggeyBtYXJnaW4tdG9wOiAycHg7IH1cbiAgICAuY21kLWNvZGUgeyBiYWNrZ3JvdW5kOiB3aGl0ZTsgcGFkZGluZzogOHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzFlNDBhZjsgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZGlzcGxheTogYmxvY2s7IHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgd29yZC1icmVhazogYnJlYWstd29yZDsgZmxleDogMTsgfVxuICAgIC5jbWQtd2h5IHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY0NzQ4Yjsgd2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMjRweDsgbWFyZ2luLXRvcDogNHB4OyB9XG4gICAgLmZlYXR1cmVzLXNlY3Rpb24sIC5wYXR0ZXJucy1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyBtYXJnaW46IDE2cHggMDsgfVxuICAgIC5mZWF0dXJlLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAucGF0dGVybi1jYXJkIHsgYmFja2dyb3VuZDogI2YwZjlmZjsgYm9yZGVyOiAxcHggc29saWQgIzdkZDNmYzsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4OyB9XG4gICAgLmZlYXR1cmUtdGl0bGUsIC5wYXR0ZXJuLXRpdGxlIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzBmMTcyYTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4gICAgLmZlYXR1cmUtb25lbGluZXIgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNDc1NTY5OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgICAucGF0dGVybi1zdW1tYXJ5IHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzQ3NTU2OTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gICAgLmZlYXR1cmUtd2h5LCAucGF0dGVybi1kZXRhaWwgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMzM0MTU1OyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmZlYXR1cmUtZXhhbXBsZXMgeyBtYXJnaW4tdG9wOiAxMnB4OyB9XG4gICAgLmZlYXR1cmUtZXhhbXBsZSB7IHBhZGRpbmc6IDhweCAwOyBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZmFlNTsgfVxuICAgIC5mZWF0dXJlLWV4YW1wbGU6Zmlyc3QtY2hpbGQgeyBib3JkZXItdG9wOiBub25lOyB9XG4gICAgLmV4YW1wbGUtZGVzYyB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMzMzQxNTU7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5leGFtcGxlLWNvZGUtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogOHB4OyB9XG4gICAgLmV4YW1wbGUtY29kZSB7IGZsZXg6IDE7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IHBhZGRpbmc6IDhweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMzMzQxNTU7IG92ZXJmbG93LXg6IGF1dG87IHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgfVxuICAgIC5jb3B5YWJsZS1wcm9tcHQtc2VjdGlvbiB7IG1hcmdpbi10b3A6IDEycHg7IHBhZGRpbmctdG9wOiAxMnB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDsgfVxuICAgIC5jb3B5YWJsZS1wcm9tcHQtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogOHB4OyB9XG4gICAgLmNvcHlhYmxlLXByb21wdCB7IGZsZXg6IDE7IGJhY2tncm91bmQ6ICNmOGZhZmM7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzM0MTU1OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICAuZmVhdHVyZS1jb2RlIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgcGFkZGluZzogMTJweDsgYm9yZGVyLXJhZGl1czogNnB4OyBtYXJnaW4tdG9wOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA4cHg7IH1cbiAgICAuZmVhdHVyZS1jb2RlIGNvZGUgeyBmbGV4OiAxOyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzM0MTU1OyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IH1cbiAgICAucGF0dGVybi1wcm9tcHQgeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBwYWRkaW5nOiAxMnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IG1hcmdpbi10b3A6IDEycHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IH1cbiAgICAucGF0dGVybi1wcm9tcHQgY29kZSB7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMzMzQxNTU7IGRpc3BsYXk6IGJsb2NrOyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgIC5wcm9tcHQtbGFiZWwgeyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAuY29weS1idG4geyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogNHB4IDhweDsgZm9udC1zaXplOiAxMXB4OyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjNDc1NTY5OyBmbGV4LXNocmluazogMDsgfVxuICAgIC5jb3B5LWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6ICNjYmQ1ZTE7IH1cbiAgICAuY2hhcnRzLXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAyNHB4OyBtYXJnaW46IDI0cHggMDsgfVxuICAgIC5jaGFydC1jYXJkIHsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTZweDsgfVxuICAgIC5jaGFydC10aXRsZSB7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICAuYmFyLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5iYXItbGFiZWwgeyB3aWR0aDogMTAwcHg7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM0NzU1Njk7IGZsZXgtc2hyaW5rOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5iYXItdHJhY2sgeyBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogI2YxZjVmOTsgYm9yZGVyLXJhZGl1czogM3B4OyBtYXJnaW46IDAgOHB4OyB9XG4gICAgLmJhci1maWxsIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgICAuYmFyLXZhbHVlIHsgd2lkdGg6IDI4cHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDUwMDsgY29sb3I6ICM2NDc0OGI7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgLmVtcHR5IHsgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTNweDsgfVxuICAgIC5ob3Jpem9uLXNlY3Rpb24geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IH1cbiAgICAuaG9yaXpvbi1jYXJkIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZhZjVmZiAwJSwgI2Y1ZjNmZiAxMDAlKTsgYm9yZGVyOiAxcHggc29saWQgI2M0YjVmZDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAxNnB4OyB9XG4gICAgLmhvcml6b24tdGl0bGUgeyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAjNWIyMWI2OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgICAuaG9yaXpvbi1wb3NzaWJsZSB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMzMzQxNTU7IG1hcmdpbi1ib3R0b206IDEwcHg7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICAuaG9yaXpvbi10aXAgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNmIyMWE4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IHBhZGRpbmc6IDhweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgICAuZmVlZGJhY2staGVhZGVyIHsgbWFyZ2luLXRvcDogNDhweDsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTZweDsgfVxuICAgIC5mZWVkYmFjay1pbnRybyB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM5NGEzYjg7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAuZmVlZGJhY2stc2VjdGlvbiB7IG1hcmdpbi10b3A6IDE2cHg7IH1cbiAgICAuZmVlZGJhY2stc2VjdGlvbiBoMyB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0NzU1Njk7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICAuZmVlZGJhY2stY2FyZCB7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDE2cHg7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICAuZmVlZGJhY2stY2FyZC50ZWFtLWNhcmQgeyBiYWNrZ3JvdW5kOiAjZWZmNmZmOyBib3JkZXItY29sb3I6ICNiZmRiZmU7IH1cbiAgICAuZmVlZGJhY2stY2FyZC5tb2RlbC1jYXJkIHsgYmFja2dyb3VuZDogI2ZhZjVmZjsgYm9yZGVyLWNvbG9yOiAjZTlkNWZmOyB9XG4gICAgLmZlZWRiYWNrLXRpdGxlIHsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzBmMTcyYTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4gICAgLmZlZWRiYWNrLWRldGFpbCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM0NzU1Njk7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICAuZmVlZGJhY2stZXZpZGVuY2UgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAuZnVuLWVuZGluZyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZWYzYzcgMCUsICNmZGU2OGEgMTAwJSk7IGJvcmRlcjogMXB4IHNvbGlkICNmYmJmMjQ7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDI0cHg7IG1hcmdpbi10b3A6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5mdW4taGVhZGxpbmUgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNzgzNTBmOyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgICAuZnVuLWRldGFpbCB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM5MjQwMGU7IH1cbiAgICAuY29sbGFwc2libGUtc2VjdGlvbiB7IG1hcmdpbi10b3A6IDE2cHg7IH1cbiAgICAuY29sbGFwc2libGUtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGN1cnNvcjogcG9pbnRlcjsgcGFkZGluZzogMTJweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgfVxuICAgIC5jb2xsYXBzaWJsZS1oZWFkZXIgaDMgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0NzU1Njk7IH1cbiAgICAuY29sbGFwc2libGUtYXJyb3cgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOTRhM2I4OyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yczsgfVxuICAgIC5jb2xsYXBzaWJsZS1jb250ZW50IHsgZGlzcGxheTogbm9uZTsgcGFkZGluZy10b3A6IDE2cHg7IH1cbiAgICAuY29sbGFwc2libGUtY29udGVudC5vcGVuIHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAuY29sbGFwc2libGUtaGVhZGVyLm9wZW4gLmNvbGxhcHNpYmxlLWFycm93IHsgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7IC5jaGFydHMtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gLnN0YXRzLXJvdyB7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cbiAgYFxuXG4gIGNvbnN0IGhvdXJDb3VudHNKc29uID0gZ2V0SG91ckNvdW50c0pzb24oZGF0YS5tZXNzYWdlX2hvdXJzKVxuXG4gIGNvbnN0IGpzID0gYFxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNpYmxlKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvcHlUZXh0KGJ0bikge1xuICAgICAgY29uc3QgY29kZSA9IGJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZS50ZXh0Q29udGVudCkudGhlbigoKSA9PiB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdDb3BpZWQhJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi50ZXh0Q29udGVudCA9ICdDb3B5JzsgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29weUNtZEl0ZW0oaWR4KSB7XG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbWQtJyArIGlkeCk7XG4gICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNoZWNrYm94LmRhdGFzZXQudGV4dDtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYnRuID0gY2hlY2tib3gubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5jb3B5LWJ0bicpO1xuICAgICAgICAgIGlmIChidG4pIHsgYnRuLnRleHRDb250ZW50ID0gJ0NvcGllZCEnOyBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnRleHRDb250ZW50ID0gJ0NvcHknOyB9LCAyMDAwKTsgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY29weUFsbENoZWNrZWRDbGF1ZGVNZCgpIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY21kLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgIGNvbnN0IHRleHRzID0gW107XG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBpZiAoY2IuZGF0YXNldC50ZXh0KSB7IHRleHRzLnB1c2goY2IuZGF0YXNldC50ZXh0KTsgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21iaW5lZCA9IHRleHRzLmpvaW4oJ1xcXFxuJyk7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29weS1hbGwtYnRuJyk7XG4gICAgICBpZiAoYnRuKSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbWJpbmVkKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnQ29waWVkICcgKyB0ZXh0cy5sZW5ndGggKyAnIGl0ZW1zISc7XG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2NvcGllZCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4udGV4dENvbnRlbnQgPSAnQ29weSBBbGwgQ2hlY2tlZCc7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjb3BpZWQnKTsgfSwgMjAwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaW1lem9uZSBzZWxlY3RvciBmb3IgdGltZSBvZiBkYXkgY2hhcnQgKGRhdGEgaXMgZnJvbSBvdXIgb3duIGFuYWx5dGljcywgbm90IHVzZXIgaW5wdXQpXG4gICAgY29uc3QgcmF3SG91ckNvdW50cyA9ICR7aG91ckNvdW50c0pzb259O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUhvdXJIaXN0b2dyYW0ob2Zmc2V0RnJvbVBUKSB7XG4gICAgICBjb25zdCBwZXJpb2RzID0gW1xuICAgICAgICB7IGxhYmVsOiBcIk1vcm5pbmcgKDYtMTIpXCIsIHJhbmdlOiBbNiw3LDgsOSwxMCwxMV0gfSxcbiAgICAgICAgeyBsYWJlbDogXCJBZnRlcm5vb24gKDEyLTE4KVwiLCByYW5nZTogWzEyLDEzLDE0LDE1LDE2LDE3XSB9LFxuICAgICAgICB7IGxhYmVsOiBcIkV2ZW5pbmcgKDE4LTI0KVwiLCByYW5nZTogWzE4LDE5LDIwLDIxLDIyLDIzXSB9LFxuICAgICAgICB7IGxhYmVsOiBcIk5pZ2h0ICgwLTYpXCIsIHJhbmdlOiBbMCwxLDIsMyw0LDVdIH1cbiAgICAgIF07XG4gICAgICBjb25zdCBhZGp1c3RlZENvdW50cyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBbaG91ciwgY291bnRdIG9mIE9iamVjdC5lbnRyaWVzKHJhd0hvdXJDb3VudHMpKSB7XG4gICAgICAgIGNvbnN0IG5ld0hvdXIgPSAocGFyc2VJbnQoaG91cikgKyBvZmZzZXRGcm9tUFQgKyAyNCkgJSAyNDtcbiAgICAgICAgYWRqdXN0ZWRDb3VudHNbbmV3SG91cl0gPSAoYWRqdXN0ZWRDb3VudHNbbmV3SG91cl0gfHwgMCkgKyBjb3VudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBlcmlvZENvdW50cyA9IHBlcmlvZHMubWFwKHAgPT4gKHtcbiAgICAgICAgbGFiZWw6IHAubGFiZWwsXG4gICAgICAgIGNvdW50OiBwLnJhbmdlLnJlZHVjZSgoc3VtLCBoKSA9PiBzdW0gKyAoYWRqdXN0ZWRDb3VudHNbaF0gfHwgMCksIDApXG4gICAgICB9KSk7XG4gICAgICBjb25zdCBtYXhDb3VudCA9IE1hdGgubWF4KC4uLnBlcmlvZENvdW50cy5tYXAocCA9PiBwLmNvdW50KSkgfHwgMTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyLWhpc3RvZ3JhbScpO1xuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBwZXJpb2RDb3VudHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSAnYmFyLXJvdyc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdiYXItbGFiZWwnO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHAubGFiZWw7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRyYWNrLmNsYXNzTmFtZSA9ICdiYXItdHJhY2snO1xuICAgICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGwuY2xhc3NOYW1lID0gJ2Jhci1maWxsJztcbiAgICAgICAgZmlsbC5zdHlsZS53aWR0aCA9IChwLmNvdW50IC8gbWF4Q291bnQpICogMTAwICsgJyUnO1xuICAgICAgICBmaWxsLnN0eWxlLmJhY2tncm91bmQgPSAnIzhiNWNmNic7XG4gICAgICAgIHRyYWNrLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YWx1ZS5jbGFzc05hbWUgPSAnYmFyLXZhbHVlJztcbiAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSBwLmNvdW50O1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodHJhY2spO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXpvbmUtc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjdXN0b21JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tb2Zmc2V0Jyk7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgY3VzdG9tSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjdXN0b21JbnB1dC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VzdG9tSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdXBkYXRlSG91ckhpc3RvZ3JhbShwYXJzZUludCh0aGlzLnZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1vZmZzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHRoaXMudmFsdWUpICsgODtcbiAgICAgIHVwZGF0ZUhvdXJIaXN0b2dyYW0ob2Zmc2V0KTtcbiAgICB9KTtcbiAgYFxuXG4gIHJldHVybiBgPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbjxoZWFkPlxuICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgPHRpdGxlPkNsYXVkZSBDb2RlIEluc2lnaHRzPC90aXRsZT5cbiAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuICA8c3R5bGU+JHtjc3N9PC9zdHlsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkNsYXVkZSBDb2RlIEluc2lnaHRzPC9oMT5cbiAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+JHtkYXRhLnRvdGFsX21lc3NhZ2VzLnRvTG9jYWxlU3RyaW5nKCl9IG1lc3NhZ2VzIGFjcm9zcyAke2RhdGEudG90YWxfc2Vzc2lvbnN9IHNlc3Npb25zJHtkYXRhLnRvdGFsX3Nlc3Npb25zX3NjYW5uZWQgJiYgZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkID4gZGF0YS50b3RhbF9zZXNzaW9ucyA/IGAgKCR7ZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkLnRvTG9jYWxlU3RyaW5nKCl9IHRvdGFsKWAgOiAnJ30gfCAke2RhdGEuZGF0ZV9yYW5nZS5zdGFydH0gdG8gJHtkYXRhLmRhdGVfcmFuZ2UuZW5kfTwvcD5cblxuICAgICR7YXRBR2xhbmNlSHRtbH1cblxuICAgIDxuYXYgY2xhc3M9XCJuYXYtdG9jXCI+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24td29ya1wiPldoYXQgWW91IFdvcmsgT248L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tdXNhZ2VcIj5Ib3cgWW91IFVzZSBDQzwvYT5cbiAgICAgIDxhIGhyZWY9XCIjc2VjdGlvbi13aW5zXCI+SW1wcmVzc2l2ZSBUaGluZ3M8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tZnJpY3Rpb25cIj5XaGVyZSBUaGluZ3MgR28gV3Jvbmc8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tZmVhdHVyZXNcIj5GZWF0dXJlcyB0byBUcnk8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24tcGF0dGVybnNcIj5OZXcgVXNhZ2UgUGF0dGVybnM8L2E+XG4gICAgICA8YSBocmVmPVwiI3NlY3Rpb24taG9yaXpvblwiPk9uIHRoZSBIb3Jpem9uPC9hPlxuICAgICAgPGEgaHJlZj1cIiNzZWN0aW9uLWZlZWRiYWNrXCI+VGVhbSBGZWVkYmFjazwvYT5cbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+PGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEudG90YWxfbWVzc2FnZXMudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj48ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPk1lc3NhZ2VzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+KyR7ZGF0YS50b3RhbF9saW5lc19hZGRlZC50b0xvY2FsZVN0cmluZygpfS8tJHtkYXRhLnRvdGFsX2xpbmVzX3JlbW92ZWQudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj48ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPkxpbmVzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLnRvdGFsX2ZpbGVzX21vZGlmaWVkfTwvZGl2PjxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+RmlsZXM8L2Rpdj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+PGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEuZGF5c19hY3RpdmV9PC9kaXY+PGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5EYXlzPC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPjxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLm1lc3NhZ2VzX3Blcl9kYXl9PC9kaXY+PGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Nc2dzL0RheTwvZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHtwcm9qZWN0QXJlYXNIdG1sfVxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPldoYXQgWW91IFdhbnRlZDwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5nb2FsX2NhdGVnb3JpZXMsICcjMjU2M2ViJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPlRvcCBUb29scyBVc2VkPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVCYXJDaGFydChkYXRhLnRvb2xfY291bnRzLCAnIzA4OTFiMicpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+TGFuZ3VhZ2VzPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVCYXJDaGFydChkYXRhLmxhbmd1YWdlcywgJyMxMGI5ODEnKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+U2Vzc2lvbiBUeXBlczwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5zZXNzaW9uX3R5cGVzIHx8IHt9LCAnIzhiNWNmNicpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAke2ludGVyYWN0aW9uSHRtbH1cblxuICAgIDwhLS0gUmVzcG9uc2UgVGltZSBEaXN0cmlidXRpb24gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIiBzdHlsZT1cIm1hcmdpbjogMjRweCAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+VXNlciBSZXNwb25zZSBUaW1lIERpc3RyaWJ1dGlvbjwvZGl2PlxuICAgICAgJHtnZW5lcmF0ZVJlc3BvbnNlVGltZUhpc3RvZ3JhbShkYXRhLnVzZXJfcmVzcG9uc2VfdGltZXMpfVxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbi10b3A6IDhweDtcIj5cbiAgICAgICAgTWVkaWFuOiAke2RhdGEubWVkaWFuX3Jlc3BvbnNlX3RpbWUudG9GaXhlZCgxKX1zICZidWxsOyBBdmVyYWdlOiAke2RhdGEuYXZnX3Jlc3BvbnNlX3RpbWUudG9GaXhlZCgxKX1zXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gTXVsdGktY2xhdWRpbmcgU2VjdGlvbiAobWF0Y2hpbmcgUHl0aG9uIHJlZmVyZW5jZSkgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIiBzdHlsZT1cIm1hcmdpbjogMjRweCAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+TXVsdGktQ2xhdWRpbmcgKFBhcmFsbGVsIFNlc3Npb25zKTwvZGl2PlxuICAgICAgJHtcbiAgICAgICAgZGF0YS5tdWx0aV9jbGF1ZGluZy5vdmVybGFwX2V2ZW50cyA9PT0gMFxuICAgICAgICAgID8gYFxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IHBhZGRpbmc6IDhweCAwO1wiPlxuICAgICAgICAgIE5vIHBhcmFsbGVsIHNlc3Npb24gdXNhZ2UgZGV0ZWN0ZWQuIFlvdSB0eXBpY2FsbHkgd29yayB3aXRoIG9uZSBDbGF1ZGUgQ29kZSBzZXNzaW9uIGF0IGEgdGltZS5cbiAgICAgICAgPC9wPlxuICAgICAgYFxuICAgICAgICAgIDogYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiAyNHB4OyBtYXJnaW46IDEycHggMDtcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM3YzNhZWQ7XCI+JHtkYXRhLm11bHRpX2NsYXVkaW5nLm92ZXJsYXBfZXZlbnRzfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XCI+T3ZlcmxhcCBFdmVudHM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM3YzNhZWQ7XCI+JHtkYXRhLm11bHRpX2NsYXVkaW5nLnNlc3Npb25zX2ludm9sdmVkfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XCI+U2Vzc2lvbnMgSW52b2x2ZWQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM3YzNhZWQ7XCI+JHtkYXRhLnRvdGFsX21lc3NhZ2VzID4gMCA/IE1hdGgucm91bmQoKDEwMCAqIGRhdGEubXVsdGlfY2xhdWRpbmcudXNlcl9tZXNzYWdlc19kdXJpbmcpIC8gZGF0YS50b3RhbF9tZXNzYWdlcykgOiAwfSU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDExcHg7IGNvbG9yOiAjNjQ3NDhiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1wiPk9mIE1lc3NhZ2VzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICM0NzU1Njk7IG1hcmdpbi10b3A6IDEycHg7XCI+XG4gICAgICAgICAgWW91IHJ1biBtdWx0aXBsZSBDbGF1ZGUgQ29kZSBzZXNzaW9ucyBzaW11bHRhbmVvdXNseS4gTXVsdGktY2xhdWRpbmcgaXMgZGV0ZWN0ZWQgd2hlbiBzZXNzaW9uc1xuICAgICAgICAgIG92ZXJsYXAgaW4gdGltZSwgc3VnZ2VzdGluZyBwYXJhbGxlbCB3b3JrZmxvd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIGBcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gVGltZSBvZiBEYXkgJiBUb29sIEVycm9ycyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7XCI+XG4gICAgICAgICAgVXNlciBNZXNzYWdlcyBieSBUaW1lIG9mIERheVxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0aW1lem9uZS1zZWxlY3RcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogNHB4IDhweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1wiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5QVCAoVVRDLTgpPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkVUIChVVEMtNSk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+TG9uZG9uIChVVEMpPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPkNFVCAoVVRDKzEpPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTdcIj5Ub2t5byAoVVRDKzkpPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tXCI+Q3VzdG9tIG9mZnNldC4uLjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJjdXN0b20tb2Zmc2V0XCIgcGxhY2Vob2xkZXI9XCJVVEMgb2Zmc2V0XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lOyB3aWR0aDogODBweDsgZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiA0cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7Z2VuZXJhdGVUaW1lT2ZEYXlDaGFydChkYXRhLm1lc3NhZ2VfaG91cnMpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtdGl0bGVcIj5Ub29sIEVycm9ycyBFbmNvdW50ZXJlZDwvZGl2PlxuICAgICAgICAke09iamVjdC5rZXlzKGRhdGEudG9vbF9lcnJvcl9jYXRlZ29yaWVzKS5sZW5ndGggPiAwID8gZ2VuZXJhdGVCYXJDaGFydChkYXRhLnRvb2xfZXJyb3JfY2F0ZWdvcmllcywgJyNkYzI2MjYnKSA6ICc8cCBjbGFzcz1cImVtcHR5XCI+Tm8gdG9vbCBlcnJvcnM8L3A+J31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHt3aGF0V29ya3NIdG1sfVxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPldoYXQgSGVscGVkIE1vc3QgKENsYXVkZSdzIENhcGFiaWxpdGllcyk8L2Rpdj5cbiAgICAgICAgJHtnZW5lcmF0ZUJhckNoYXJ0KGRhdGEuc3VjY2VzcywgJyMxNmEzNGEnKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+T3V0Y29tZXM8L2Rpdj5cbiAgICAgICAgJHtnZW5lcmF0ZUJhckNoYXJ0KGRhdGEub3V0Y29tZXMsICcjOGI1Y2Y2JywgNiwgT1VUQ09NRV9PUkRFUil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICR7ZnJpY3Rpb25IdG1sfVxuXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0cy1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPlByaW1hcnkgRnJpY3Rpb24gVHlwZXM8L2Rpdj5cbiAgICAgICAgJHtnZW5lcmF0ZUJhckNoYXJ0KGRhdGEuZnJpY3Rpb24sICcjZGMyNjI2Jyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC10aXRsZVwiPkluZmVycmVkIFNhdGlzZmFjdGlvbiAobW9kZWwtZXN0aW1hdGVkKTwvZGl2PlxuICAgICAgICAke2dlbmVyYXRlQmFyQ2hhcnQoZGF0YS5zYXRpc2ZhY3Rpb24sICcjZWFiMzA4JywgNiwgU0FUSVNGQUNUSU9OX09SREVSKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHtzdWdnZXN0aW9uc0h0bWx9XG5cbiAgICAke2hvcml6b25IdG1sfVxuXG4gICAgJHtmdW5FbmRpbmdIdG1sfVxuXG4gICAgJHt0ZWFtRmVlZGJhY2tIdG1sfVxuICA8L2Rpdj5cbiAgPHNjcmlwdD4ke2pzfTwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPmBcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRXhwb3J0IFR5cGVzICYgRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogU3RydWN0dXJlZCBleHBvcnQgZm9ybWF0IGZvciBjbGF1ZGVzY29wZSBjb25zdW1wdGlvblxuICovXG5leHBvcnQgdHlwZSBJbnNpZ2h0c0V4cG9ydCA9IHtcbiAgbWV0YWRhdGE6IHtcbiAgICB1c2VybmFtZTogc3RyaW5nXG4gICAgZ2VuZXJhdGVkX2F0OiBzdHJpbmdcbiAgICBjbGF1ZGVfY29kZV92ZXJzaW9uOiBzdHJpbmdcbiAgICBkYXRlX3JhbmdlOiB7IHN0YXJ0OiBzdHJpbmc7IGVuZDogc3RyaW5nIH1cbiAgICBzZXNzaW9uX2NvdW50OiBudW1iZXJcbiAgICByZW1vdGVfaG9zdHNfY29sbGVjdGVkPzogc3RyaW5nW11cbiAgfVxuICBhZ2dyZWdhdGVkX2RhdGE6IEFnZ3JlZ2F0ZWREYXRhXG4gIGluc2lnaHRzOiBJbnNpZ2h0UmVzdWx0c1xuICBmYWNldHNfc3VtbWFyeT86IHtcbiAgICB0b3RhbDogbnVtYmVyXG4gICAgZ29hbF9jYXRlZ29yaWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gICAgb3V0Y29tZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgICBzYXRpc2ZhY3Rpb246IFJlY29yZDxzdHJpbmcsIG51bWJlcj5cbiAgICBmcmljdGlvbjogUmVjb3JkPHN0cmluZywgbnVtYmVyPlxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgZXhwb3J0IGRhdGEgZnJvbSBhbHJlYWR5LWNvbXB1dGVkIHZhbHVlcy5cbiAqIFVzZWQgYnkgYmFja2dyb3VuZCB1cGxvYWQgdG8gUzMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV4cG9ydERhdGEoXG4gIGRhdGE6IEFnZ3JlZ2F0ZWREYXRhLFxuICBpbnNpZ2h0czogSW5zaWdodFJlc3VsdHMsXG4gIGZhY2V0czogTWFwPHN0cmluZywgU2Vzc2lvbkZhY2V0cz4sXG4gIHJlbW90ZVN0YXRzPzogeyBob3N0czogUmVtb3RlSG9zdEluZm9bXTsgdG90YWxDb3BpZWQ6IG51bWJlciB9LFxuKTogSW5zaWdodHNFeHBvcnQge1xuICBjb25zdCB2ZXJzaW9uID0gdHlwZW9mIE1BQ1JPICE9PSAndW5kZWZpbmVkJyA/IE1BQ1JPLlZFUlNJT04gOiAndW5rbm93bidcblxuICBjb25zdCByZW1vdGVfaG9zdHNfY29sbGVjdGVkID0gcmVtb3RlU3RhdHM/Lmhvc3RzXG4gICAgLmZpbHRlcihoID0+IGguc2Vzc2lvbkNvdW50ID4gMClcbiAgICAubWFwKGggPT4gaC5uYW1lKVxuXG4gIGNvbnN0IGZhY2V0c19zdW1tYXJ5ID0ge1xuICAgIHRvdGFsOiBmYWNldHMuc2l6ZSxcbiAgICBnb2FsX2NhdGVnb3JpZXM6IHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4gICAgb3V0Y29tZXM6IHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4gICAgc2F0aXNmYWN0aW9uOiB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LFxuICAgIGZyaWN0aW9uOiB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LFxuICB9XG4gIGZvciAoY29uc3QgZiBvZiBmYWNldHMudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IFtjYXQsIGNvdW50XSBvZiBzYWZlRW50cmllcyhmLmdvYWxfY2F0ZWdvcmllcykpIHtcbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgZmFjZXRzX3N1bW1hcnkuZ29hbF9jYXRlZ29yaWVzW2NhdF0gPVxuICAgICAgICAgIChmYWNldHNfc3VtbWFyeS5nb2FsX2NhdGVnb3JpZXNbY2F0XSB8fCAwKSArIGNvdW50XG4gICAgICB9XG4gICAgfVxuICAgIGZhY2V0c19zdW1tYXJ5Lm91dGNvbWVzW2Yub3V0Y29tZV0gPVxuICAgICAgKGZhY2V0c19zdW1tYXJ5Lm91dGNvbWVzW2Yub3V0Y29tZV0gfHwgMCkgKyAxXG4gICAgZm9yIChjb25zdCBbbGV2ZWwsIGNvdW50XSBvZiBzYWZlRW50cmllcyhmLnVzZXJfc2F0aXNmYWN0aW9uX2NvdW50cykpIHtcbiAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgZmFjZXRzX3N1bW1hcnkuc2F0aXNmYWN0aW9uW2xldmVsXSA9XG4gICAgICAgICAgKGZhY2V0c19zdW1tYXJ5LnNhdGlzZmFjdGlvbltsZXZlbF0gfHwgMCkgKyBjb3VudFxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFt0eXBlLCBjb3VudF0gb2Ygc2FmZUVudHJpZXMoZi5mcmljdGlvbl9jb3VudHMpKSB7XG4gICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIGZhY2V0c19zdW1tYXJ5LmZyaWN0aW9uW3R5cGVdID1cbiAgICAgICAgICAoZmFjZXRzX3N1bW1hcnkuZnJpY3Rpb25bdHlwZV0gfHwgMCkgKyBjb3VudFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5TQUZFVVNFUiB8fCBwcm9jZXNzLmVudi5VU0VSIHx8ICd1bmtub3duJyxcbiAgICAgIGdlbmVyYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgY2xhdWRlX2NvZGVfdmVyc2lvbjogdmVyc2lvbixcbiAgICAgIGRhdGVfcmFuZ2U6IGRhdGEuZGF0ZV9yYW5nZSxcbiAgICAgIHNlc3Npb25fY291bnQ6IGRhdGEudG90YWxfc2Vzc2lvbnMsXG4gICAgICAuLi4ocmVtb3RlX2hvc3RzX2NvbGxlY3RlZCAmJlxuICAgICAgICByZW1vdGVfaG9zdHNfY29sbGVjdGVkLmxlbmd0aCA+IDAgJiYge1xuICAgICAgICAgIHJlbW90ZV9ob3N0c19jb2xsZWN0ZWQsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgYWdncmVnYXRlZF9kYXRhOiBkYXRhLFxuICAgIGluc2lnaHRzLFxuICAgIGZhY2V0c19zdW1tYXJ5LFxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExpdGUgU2Vzc2lvbiBTY2FubmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIExpdGVTZXNzaW9uSW5mbyA9IHtcbiAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgcGF0aDogc3RyaW5nXG4gIG10aW1lOiBudW1iZXJcbiAgc2l6ZTogbnVtYmVyXG59XG5cbi8qKlxuICogU2NhbnMgYWxsIHByb2plY3QgZGlyZWN0b3JpZXMgdXNpbmcgZmlsZXN5c3RlbSBtZXRhZGF0YSBvbmx5IChubyBKU09OTCBwYXJzaW5nKS5cbiAqIFJldHVybnMgYSBsaXN0IG9mIHNlc3Npb24gZmlsZSBpbmZvIHNvcnRlZCBieSBtdGltZSBkZXNjZW5kaW5nLlxuICogWWllbGRzIHRvIHRoZSBldmVudCBsb29wIGJldHdlZW4gcHJvamVjdCBkaXJlY3RvcmllcyB0byBrZWVwIHRoZSBVSSByZXNwb25zaXZlLlxuICovXG5hc3luYyBmdW5jdGlvbiBzY2FuQWxsU2Vzc2lvbnMoKTogUHJvbWlzZTxMaXRlU2Vzc2lvbkluZm9bXT4ge1xuICBjb25zdCBwcm9qZWN0c0RpciA9IGdldFByb2plY3RzRGlyKClcblxuICBsZXQgZGlyZW50czogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiByZWFkZGlyPj5cbiAgdHJ5IHtcbiAgICBkaXJlbnRzID0gYXdhaXQgcmVhZGRpcihwcm9qZWN0c0RpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgY29uc3QgcHJvamVjdERpcnMgPSBkaXJlbnRzXG4gICAgLmZpbHRlcihkaXJlbnQgPT4gZGlyZW50LmlzRGlyZWN0b3J5KCkpXG4gICAgLm1hcChkaXJlbnQgPT4gam9pbihwcm9qZWN0c0RpciwgZGlyZW50Lm5hbWUpKVxuXG4gIGNvbnN0IGFsbFNlc3Npb25zOiBMaXRlU2Vzc2lvbkluZm9bXSA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0RGlycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlc3Npb25GaWxlcyA9IGF3YWl0IGdldFNlc3Npb25GaWxlc1dpdGhNdGltZShwcm9qZWN0RGlyc1tpXSEpXG4gICAgZm9yIChjb25zdCBbc2Vzc2lvbklkLCBmaWxlSW5mb10gb2Ygc2Vzc2lvbkZpbGVzKSB7XG4gICAgICBhbGxTZXNzaW9ucy5wdXNoKHtcbiAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICBwYXRoOiBmaWxlSW5mby5wYXRoLFxuICAgICAgICBtdGltZTogZmlsZUluZm8ubXRpbWUsXG4gICAgICAgIHNpemU6IGZpbGVJbmZvLnNpemUsXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyBZaWVsZCB0byBldmVudCBsb29wIGV2ZXJ5IDEwIHByb2plY3QgZGlyZWN0b3JpZXNcbiAgICBpZiAoaSAlIDEwID09PSA5KSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHNldEltbWVkaWF0ZShyZXNvbHZlKSlcbiAgICB9XG4gIH1cblxuICAvLyBTb3J0IGJ5IG10aW1lIGRlc2NlbmRpbmcgKG1vc3QgcmVjZW50IGZpcnN0KVxuICBhbGxTZXNzaW9ucy5zb3J0KChhLCBiKSA9PiBiLm10aW1lIC0gYS5tdGltZSlcbiAgcmV0dXJuIGFsbFNlc3Npb25zXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1haW4gRnVuY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVXNhZ2VSZXBvcnQob3B0aW9ucz86IHtcbiAgY29sbGVjdFJlbW90ZT86IGJvb2xlYW5cbn0pOiBQcm9taXNlPHtcbiAgaW5zaWdodHM6IEluc2lnaHRSZXN1bHRzXG4gIGh0bWxQYXRoOiBzdHJpbmdcbiAgZGF0YTogQWdncmVnYXRlZERhdGFcbiAgcmVtb3RlU3RhdHM/OiB7IGhvc3RzOiBSZW1vdGVIb3N0SW5mb1tdOyB0b3RhbENvcGllZDogbnVtYmVyIH1cbiAgZmFjZXRzOiBNYXA8c3RyaW5nLCBTZXNzaW9uRmFjZXRzPlxufT4ge1xuICBsZXQgcmVtb3RlU3RhdHM6IHsgaG9zdHM6IFJlbW90ZUhvc3RJbmZvW107IHRvdGFsQ29waWVkOiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuXG4gIC8vIE9wdGlvbmFsbHkgY29sbGVjdCBkYXRhIGZyb20gcmVtb3RlIGhvc3RzIGZpcnN0IChhbnQtb25seSlcbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYgb3B0aW9ucz8uY29sbGVjdFJlbW90ZSkge1xuICAgIGNvbnN0IGRlc3REaXIgPSBqb2luKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSwgJ3Byb2plY3RzJylcbiAgICBjb25zdCB7IGhvc3RzLCB0b3RhbENvcGllZCB9ID0gYXdhaXQgY29sbGVjdEFsbFJlbW90ZUhvc3REYXRhKGRlc3REaXIpXG4gICAgcmVtb3RlU3RhdHMgPSB7IGhvc3RzLCB0b3RhbENvcGllZCB9XG4gIH1cblxuICAvLyBQaGFzZSAxOiBMaXRlIHNjYW4gXHUyMDE0IGZpbGVzeXN0ZW0gbWV0YWRhdGEgb25seSAobm8gSlNPTkwgcGFyc2luZylcbiAgY29uc3QgYWxsU2Nhbm5lZFNlc3Npb25zID0gYXdhaXQgc2NhbkFsbFNlc3Npb25zKClcbiAgY29uc3QgdG90YWxTZXNzaW9uc1NjYW5uZWQgPSBhbGxTY2FubmVkU2Vzc2lvbnMubGVuZ3RoXG5cbiAgLy8gUGhhc2UgMjogTG9hZCBTZXNzaW9uTWV0YSBcdTIwMTQgdXNlIGNhY2hlIHdoZXJlIGF2YWlsYWJsZSwgcGFyc2Ugb25seSB1bmNhY2hlZFxuICAvLyBSZWFkIGNhY2hlZCBtZXRhcyBpbiBwYXJhbGxlbCBiYXRjaGVzIHRvIGF2b2lkIGJsb2NraW5nIHRoZSBldmVudCBsb29wXG4gIGNvbnN0IE1FVEFfQkFUQ0hfU0laRSA9IDUwXG4gIGNvbnN0IE1BWF9TRVNTSU9OU19UT19MT0FEID0gMjAwXG4gIGxldCBhbGxNZXRhczogU2Vzc2lvbk1ldGFbXSA9IFtdXG4gIGNvbnN0IHVuY2FjaGVkU2Vzc2lvbnM6IExpdGVTZXNzaW9uSW5mb1tdID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNjYW5uZWRTZXNzaW9ucy5sZW5ndGg7IGkgKz0gTUVUQV9CQVRDSF9TSVpFKSB7XG4gICAgY29uc3QgYmF0Y2ggPSBhbGxTY2FubmVkU2Vzc2lvbnMuc2xpY2UoaSwgaSArIE1FVEFfQkFUQ0hfU0laRSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBiYXRjaC5tYXAoYXN5bmMgc2Vzc2lvbkluZm8gPT4gKHtcbiAgICAgICAgc2Vzc2lvbkluZm8sXG4gICAgICAgIGNhY2hlZDogYXdhaXQgbG9hZENhY2hlZFNlc3Npb25NZXRhKHNlc3Npb25JbmZvLnNlc3Npb25JZCksXG4gICAgICB9KSksXG4gICAgKVxuICAgIGZvciAoY29uc3QgeyBzZXNzaW9uSW5mbywgY2FjaGVkIH0gb2YgcmVzdWx0cykge1xuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICBhbGxNZXRhcy5wdXNoKGNhY2hlZClcbiAgICAgIH0gZWxzZSBpZiAodW5jYWNoZWRTZXNzaW9ucy5sZW5ndGggPCBNQVhfU0VTU0lPTlNfVE9fTE9BRCkge1xuICAgICAgICB1bmNhY2hlZFNlc3Npb25zLnB1c2goc2Vzc2lvbkluZm8pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTG9hZCBmdWxsIG1lc3NhZ2UgZGF0YSBvbmx5IGZvciB1bmNhY2hlZCBzZXNzaW9ucyBhbmQgY29tcHV0ZSBTZXNzaW9uTWV0YVxuICBjb25zdCBsb2dzRm9yRmFjZXRzID0gbmV3IE1hcDxzdHJpbmcsIExvZ09wdGlvbj4oKVxuXG4gIC8vIEZpbHRlciBvdXQgL2luc2lnaHRzIG1ldGEtc2Vzc2lvbnMgKGZhY2V0IGV4dHJhY3Rpb24gQVBJIGNhbGxzIGdldCBsb2dnZWQgYXMgc2Vzc2lvbnMpXG4gIGNvbnN0IGlzTWV0YVNlc3Npb24gPSAobG9nOiBMb2dPcHRpb24pOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBsb2cubWVzc2FnZXMuc2xpY2UoMCwgNSkpIHtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3VzZXInICYmIG1zZy5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtc2cubWVzc2FnZS5jb250ZW50XG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb250ZW50LmluY2x1ZGVzKCdSRVNQT05EIFdJVEggT05MWSBBIFZBTElEIEpTT04gT0JKRUNUJykgfHxcbiAgICAgICAgICAgIGNvbnRlbnQuaW5jbHVkZXMoJ3JlY29yZF9mYWNldHMnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBMb2FkIHVuY2FjaGVkIHNlc3Npb25zIGluIGJhdGNoZXMgdG8geWllbGQgdG8gZXZlbnQgbG9vcCBiZXR3ZWVuIGJhdGNoZXNcbiAgY29uc3QgTE9BRF9CQVRDSF9TSVpFID0gMTBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmNhY2hlZFNlc3Npb25zLmxlbmd0aDsgaSArPSBMT0FEX0JBVENIX1NJWkUpIHtcbiAgICBjb25zdCBiYXRjaCA9IHVuY2FjaGVkU2Vzc2lvbnMuc2xpY2UoaSwgaSArIExPQURfQkFUQ0hfU0laRSlcbiAgICBjb25zdCBiYXRjaFJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGJhdGNoLm1hcChhc3luYyBzZXNzaW9uSW5mbyA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRBbGxMb2dzRnJvbVNlc3Npb25GaWxlKHNlc3Npb25JbmZvLnBhdGgpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApXG4gICAgLy8gQ29sbGVjdCBtZXRhcyBzeW5jaHJvbm91c2x5LCB0aGVuIHNhdmUgdGhlbSBpbiBwYXJhbGxlbCAoaW5kZXBlbmRlbnQgd3JpdGVzKVxuICAgIGNvbnN0IG1ldGFzVG9TYXZlOiBTZXNzaW9uTWV0YVtdID0gW11cbiAgICBmb3IgKGNvbnN0IGxvZ3Mgb2YgYmF0Y2hSZXN1bHRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGlmIChpc01ldGFTZXNzaW9uKGxvZykgfHwgIWhhc1ZhbGlkRGF0ZXMobG9nKSkgY29udGludWVcbiAgICAgICAgY29uc3QgbWV0YSA9IGxvZ1RvU2Vzc2lvbk1ldGEobG9nKVxuICAgICAgICBhbGxNZXRhcy5wdXNoKG1ldGEpXG4gICAgICAgIG1ldGFzVG9TYXZlLnB1c2gobWV0YSlcbiAgICAgICAgLy8gS2VlcCB0aGUgbG9nIGFyb3VuZCBmb3IgcG90ZW50aWFsIGZhY2V0IGV4dHJhY3Rpb25cbiAgICAgICAgbG9nc0ZvckZhY2V0cy5zZXQobWV0YS5zZXNzaW9uX2lkLCBsb2cpXG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKG1ldGFzVG9TYXZlLm1hcChtZXRhID0+IHNhdmVTZXNzaW9uTWV0YShtZXRhKSkpXG4gIH1cblxuICAvLyBEZWR1cGxpY2F0ZSBzZXNzaW9uIGJyYW5jaGVzIChrZWVwIHRoZSBvbmUgd2l0aCBtb3N0IHVzZXIgbWVzc2FnZXMgcGVyIHNlc3Npb25faWQpXG4gIC8vIFRoaXMgcHJldmVudHMgaW5mbGF0ZWQgdG90YWxzIHdoZW4gYSBzZXNzaW9uIGhhcyBtdWx0aXBsZSBjb252ZXJzYXRpb24gYnJhbmNoZXNcbiAgY29uc3QgYmVzdEJ5U2Vzc2lvbiA9IG5ldyBNYXA8c3RyaW5nLCBTZXNzaW9uTWV0YT4oKVxuICBmb3IgKGNvbnN0IG1ldGEgb2YgYWxsTWV0YXMpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGJlc3RCeVNlc3Npb24uZ2V0KG1ldGEuc2Vzc2lvbl9pZClcbiAgICBpZiAoXG4gICAgICAhZXhpc3RpbmcgfHxcbiAgICAgIG1ldGEudXNlcl9tZXNzYWdlX2NvdW50ID4gZXhpc3RpbmcudXNlcl9tZXNzYWdlX2NvdW50IHx8XG4gICAgICAobWV0YS51c2VyX21lc3NhZ2VfY291bnQgPT09IGV4aXN0aW5nLnVzZXJfbWVzc2FnZV9jb3VudCAmJlxuICAgICAgICBtZXRhLmR1cmF0aW9uX21pbnV0ZXMgPiBleGlzdGluZy5kdXJhdGlvbl9taW51dGVzKVxuICAgICkge1xuICAgICAgYmVzdEJ5U2Vzc2lvbi5zZXQobWV0YS5zZXNzaW9uX2lkLCBtZXRhKVxuICAgIH1cbiAgfVxuICAvLyBSZXBsYWNlIGFsbE1ldGFzIHdpdGggZGVkdXBsaWNhdGVkIGxpc3QgYW5kIHJlbW92ZSB1bnVzZWQgbG9ncyBmcm9tIGxvZ3NGb3JGYWNldHNcbiAgY29uc3Qga2VwdFNlc3Npb25JZHMgPSBuZXcgU2V0KGJlc3RCeVNlc3Npb24ua2V5cygpKVxuICBhbGxNZXRhcyA9IFsuLi5iZXN0QnlTZXNzaW9uLnZhbHVlcygpXVxuICBmb3IgKGNvbnN0IHNlc3Npb25JZCBvZiBsb2dzRm9yRmFjZXRzLmtleXMoKSkge1xuICAgIGlmICgha2VwdFNlc3Npb25JZHMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgIGxvZ3NGb3JGYWNldHMuZGVsZXRlKHNlc3Npb25JZClcbiAgICB9XG4gIH1cblxuICAvLyBTb3J0IGFsbCBtZXRhcyBieSBzdGFydF90aW1lIGRlc2NlbmRpbmcgKG1vc3QgcmVjZW50IGZpcnN0KVxuICBhbGxNZXRhcy5zb3J0KChhLCBiKSA9PiBiLnN0YXJ0X3RpbWUubG9jYWxlQ29tcGFyZShhLnN0YXJ0X3RpbWUpKVxuXG4gIC8vIFByZS1maWx0ZXIgb2J2aW91c2x5IG1pbmltYWwgc2Vzc2lvbnMgdG8gc2F2ZSBBUEkgY2FsbHNcbiAgLy8gKG1hdGNoaW5nIFB5dGhvbidzIHN1YnN0YW50aXZlIGZpbHRlcmluZyBjb25jZXB0KVxuICBjb25zdCBpc1N1YnN0YW50aXZlU2Vzc2lvbiA9IChtZXRhOiBTZXNzaW9uTWV0YSk6IGJvb2xlYW4gPT4ge1xuICAgIC8vIFNraXAgc2Vzc2lvbnMgd2l0aCB2ZXJ5IGZldyB1c2VyIG1lc3NhZ2VzXG4gICAgaWYgKG1ldGEudXNlcl9tZXNzYWdlX2NvdW50IDwgMikgcmV0dXJuIGZhbHNlXG4gICAgLy8gU2tpcCB2ZXJ5IHNob3J0IHNlc3Npb25zICg8IDEgbWludXRlKVxuICAgIGlmIChtZXRhLmR1cmF0aW9uX21pbnV0ZXMgPCAxKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3Qgc3Vic3RhbnRpdmVNZXRhcyA9IGFsbE1ldGFzLmZpbHRlcihpc1N1YnN0YW50aXZlU2Vzc2lvbilcblxuICAvLyBQaGFzZSAzOiBGYWNldCBleHRyYWN0aW9uIFx1MjAxNCBvbmx5IGZvciBzZXNzaW9ucyB3aXRob3V0IGNhY2hlZCBmYWNldHNcbiAgY29uc3QgZmFjZXRzID0gbmV3IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+KClcbiAgY29uc3QgdG9FeHRyYWN0OiBBcnJheTx7IGxvZzogTG9nT3B0aW9uOyBzZXNzaW9uSWQ6IHN0cmluZyB9PiA9IFtdXG4gIGNvbnN0IE1BWF9GQUNFVF9FWFRSQUNUSU9OUyA9IDUwXG5cbiAgLy8gTG9hZCBjYWNoZWQgZmFjZXRzIGZvciBhbGwgc3Vic3RhbnRpdmUgc2Vzc2lvbnMgaW4gcGFyYWxsZWxcbiAgY29uc3QgY2FjaGVkRmFjZXRSZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc3Vic3RhbnRpdmVNZXRhcy5tYXAoYXN5bmMgbWV0YSA9PiAoe1xuICAgICAgc2Vzc2lvbklkOiBtZXRhLnNlc3Npb25faWQsXG4gICAgICBjYWNoZWQ6IGF3YWl0IGxvYWRDYWNoZWRGYWNldHMobWV0YS5zZXNzaW9uX2lkKSxcbiAgICB9KSksXG4gIClcbiAgZm9yIChjb25zdCB7IHNlc3Npb25JZCwgY2FjaGVkIH0gb2YgY2FjaGVkRmFjZXRSZXN1bHRzKSB7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgZmFjZXRzLnNldChzZXNzaW9uSWQsIGNhY2hlZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9nID0gbG9nc0ZvckZhY2V0cy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKGxvZyAmJiB0b0V4dHJhY3QubGVuZ3RoIDwgTUFYX0ZBQ0VUX0VYVFJBQ1RJT05TKSB7XG4gICAgICAgIHRvRXh0cmFjdC5wdXNoKHsgbG9nLCBzZXNzaW9uSWQgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBFeHRyYWN0IGZhY2V0cyBmb3Igc2Vzc2lvbnMgdGhhdCBuZWVkIHRoZW0gKDUwIGNvbmN1cnJlbnQpXG4gIGNvbnN0IENPTkNVUlJFTkNZID0gNTBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0V4dHJhY3QubGVuZ3RoOyBpICs9IENPTkNVUlJFTkNZKSB7XG4gICAgY29uc3QgYmF0Y2ggPSB0b0V4dHJhY3Quc2xpY2UoaSwgaSArIENPTkNVUlJFTkNZKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGJhdGNoLm1hcChhc3luYyAoeyBsb2csIHNlc3Npb25JZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ZhY2V0cyA9IGF3YWl0IGV4dHJhY3RGYWNldHNGcm9tQVBJKGxvZywgc2Vzc2lvbklkKVxuICAgICAgICByZXR1cm4geyBzZXNzaW9uSWQsIG5ld0ZhY2V0cyB9XG4gICAgICB9KSxcbiAgICApXG4gICAgLy8gQ29sbGVjdCBmYWNldHMgc3luY2hyb25vdXNseSwgc2F2ZSBpbiBwYXJhbGxlbCAoaW5kZXBlbmRlbnQgd3JpdGVzKVxuICAgIGNvbnN0IGZhY2V0c1RvU2F2ZTogU2Vzc2lvbkZhY2V0c1tdID0gW11cbiAgICBmb3IgKGNvbnN0IHsgc2Vzc2lvbklkLCBuZXdGYWNldHMgfSBvZiByZXN1bHRzKSB7XG4gICAgICBpZiAobmV3RmFjZXRzKSB7XG4gICAgICAgIGZhY2V0cy5zZXQoc2Vzc2lvbklkLCBuZXdGYWNldHMpXG4gICAgICAgIGZhY2V0c1RvU2F2ZS5wdXNoKG5ld0ZhY2V0cylcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoZmFjZXRzVG9TYXZlLm1hcChmID0+IHNhdmVGYWNldHMoZikpKVxuICB9XG5cbiAgLy8gRmlsdGVyIG91dCB3YXJtdXAvbWluaW1hbCBzZXNzaW9ucyAobWF0Y2hpbmcgUHl0aG9uJ3MgaXNfbWluaW1hbClcbiAgLy8gQSBzZXNzaW9uIGlzIG1pbmltYWwgaWYgd2FybXVwX21pbmltYWwgaXMgdGhlIE9OTFkgZ29hbCBjYXRlZ29yeVxuICBjb25zdCBpc01pbmltYWxTZXNzaW9uID0gKHNlc3Npb25JZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbkZhY2V0cyA9IGZhY2V0cy5nZXQoc2Vzc2lvbklkKVxuICAgIGlmICghc2Vzc2lvbkZhY2V0cykgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgY2F0cyA9IHNlc3Npb25GYWNldHMuZ29hbF9jYXRlZ29yaWVzXG4gICAgY29uc3QgY2F0S2V5cyA9IHNhZmVLZXlzKGNhdHMpLmZpbHRlcihrID0+IChjYXRzW2tdID8/IDApID4gMClcbiAgICByZXR1cm4gY2F0S2V5cy5sZW5ndGggPT09IDEgJiYgY2F0S2V5c1swXSA9PT0gJ3dhcm11cF9taW5pbWFsJ1xuICB9XG5cbiAgY29uc3Qgc3Vic3RhbnRpdmVTZXNzaW9ucyA9IHN1YnN0YW50aXZlTWV0YXMuZmlsdGVyKFxuICAgIHMgPT4gIWlzTWluaW1hbFNlc3Npb24ocy5zZXNzaW9uX2lkKSxcbiAgKVxuXG4gIGNvbnN0IHN1YnN0YW50aXZlRmFjZXRzID0gbmV3IE1hcDxzdHJpbmcsIFNlc3Npb25GYWNldHM+KClcbiAgZm9yIChjb25zdCBbc2Vzc2lvbklkLCBmXSBvZiBmYWNldHMpIHtcbiAgICBpZiAoIWlzTWluaW1hbFNlc3Npb24oc2Vzc2lvbklkKSkge1xuICAgICAgc3Vic3RhbnRpdmVGYWNldHMuc2V0KHNlc3Npb25JZCwgZilcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZ2dyZWdhdGVkID0gYWdncmVnYXRlRGF0YShzdWJzdGFudGl2ZVNlc3Npb25zLCBzdWJzdGFudGl2ZUZhY2V0cylcbiAgYWdncmVnYXRlZC50b3RhbF9zZXNzaW9uc19zY2FubmVkID0gdG90YWxTZXNzaW9uc1NjYW5uZWRcblxuICAvLyBHZW5lcmF0ZSBwYXJhbGxlbCBpbnNpZ2h0cyBmcm9tIENsYXVkZSAoNiBzZWN0aW9ucylcbiAgY29uc3QgaW5zaWdodHMgPSBhd2FpdCBnZW5lcmF0ZVBhcmFsbGVsSW5zaWdodHMoYWdncmVnYXRlZCwgZmFjZXRzKVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgcmVwb3J0XG4gIGNvbnN0IGh0bWxSZXBvcnQgPSBnZW5lcmF0ZUh0bWxSZXBvcnQoYWdncmVnYXRlZCwgaW5zaWdodHMpXG5cbiAgLy8gU2F2ZSByZXBvcnRzXG4gIHRyeSB7XG4gICAgYXdhaXQgbWtkaXIoZ2V0RGF0YURpcigpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB9IGNhdGNoIHtcbiAgICAvLyBEaXJlY3RvcnkgbWF5IGFscmVhZHkgZXhpc3RcbiAgfVxuXG4gIGNvbnN0IGh0bWxQYXRoID0gam9pbihnZXREYXRhRGlyKCksICdyZXBvcnQuaHRtbCcpXG4gIGF3YWl0IHdyaXRlRmlsZShodG1sUGF0aCwgaHRtbFJlcG9ydCwge1xuICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgIG1vZGU6IDBvNjAwLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaW5zaWdodHMsXG4gICAgaHRtbFBhdGgsXG4gICAgZGF0YTogYWdncmVnYXRlZCxcbiAgICByZW1vdGVTdGF0cyxcbiAgICBmYWNldHM6IHN1YnN0YW50aXZlRmFjZXRzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVFbnRyaWVzPFY+KFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIFY+IHwgdW5kZWZpbmVkIHwgbnVsbCxcbik6IFtzdHJpbmcsIFZdW10ge1xuICByZXR1cm4gb2JqID8gT2JqZWN0LmVudHJpZXMob2JqKSA6IFtdXG59XG5cbmZ1bmN0aW9uIHNhZmVLZXlzKG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQgfCBudWxsKTogc3RyaW5nW10ge1xuICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKSA6IFtdXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbW1hbmQgRGVmaW5pdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCB1c2FnZVJlcG9ydDogQ29tbWFuZCA9IHtcbiAgdHlwZTogJ3Byb21wdCcsXG4gIG5hbWU6ICdpbnNpZ2h0cycsXG4gIGRlc2NyaXB0aW9uOiAnR2VuZXJhdGUgYSByZXBvcnQgYW5hbHl6aW5nIHlvdXIgQ2xhdWRlIENvZGUgc2Vzc2lvbnMnLFxuICBjb250ZW50TGVuZ3RoOiAwLCAvLyBEeW5hbWljIGNvbnRlbnRcbiAgcHJvZ3Jlc3NNZXNzYWdlOiAnYW5hbHl6aW5nIHlvdXIgc2Vzc2lvbnMnLFxuICBzb3VyY2U6ICdidWlsdGluJyxcbiAgYXN5bmMgZ2V0UHJvbXB0Rm9yQ29tbWFuZChhcmdzKSB7XG4gICAgbGV0IGNvbGxlY3RSZW1vdGUgPSBmYWxzZVxuICAgIGxldCByZW1vdGVIb3N0czogc3RyaW5nW10gPSBbXVxuICAgIGxldCBoYXNSZW1vdGVIb3N0cyA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgLy8gUGFyc2UgLS1ob21lc3BhY2VzIGZsYWdcbiAgICAgIGNvbGxlY3RSZW1vdGUgPSBhcmdzPy5pbmNsdWRlcygnLS1ob21lc3BhY2VzJykgPz8gZmFsc2VcblxuICAgICAgLy8gQ2hlY2sgZm9yIGF2YWlsYWJsZSByZW1vdGUgaG9zdHNcbiAgICAgIHJlbW90ZUhvc3RzID0gYXdhaXQgZ2V0UnVubmluZ1JlbW90ZUhvc3RzKClcbiAgICAgIGhhc1JlbW90ZUhvc3RzID0gcmVtb3RlSG9zdHMubGVuZ3RoID4gMFxuXG4gICAgICAvLyBTaG93IGNvbGxlY3Rpb24gbWVzc2FnZSBpZiBjb2xsZWN0aW5nXG4gICAgICBpZiAoY29sbGVjdFJlbW90ZSAmJiBoYXNSZW1vdGVIb3N0cykge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgQ29sbGVjdGluZyBzZXNzaW9ucyBmcm9tICR7cmVtb3RlSG9zdHMubGVuZ3RofSBob21lc3BhY2Uocyk6ICR7cmVtb3RlSG9zdHMuam9pbignLCAnKX0uLi5gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbnNpZ2h0cywgaHRtbFBhdGgsIGRhdGEsIHJlbW90ZVN0YXRzIH0gPSBhd2FpdCBnZW5lcmF0ZVVzYWdlUmVwb3J0KFxuICAgICAgeyBjb2xsZWN0UmVtb3RlIH0sXG4gICAgKVxuXG4gICAgbGV0IHJlcG9ydFVybCA9IGBmaWxlOi8vJHtodG1sUGF0aH1gXG4gICAgbGV0IHVwbG9hZEhpbnQgPSAnJ1xuXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgIC8vIFRyeSB0byB1cGxvYWQgdG8gUzNcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKClcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1stOl0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKCdUJywgJ18nKVxuICAgICAgICAuc2xpY2UoMCwgMTUpXG4gICAgICBjb25zdCB1c2VybmFtZSA9IHByb2Nlc3MuZW52LlNBRkVVU0VSIHx8IHByb2Nlc3MuZW52LlVTRVIgfHwgJ3Vua25vd24nXG4gICAgICBjb25zdCBmaWxlbmFtZSA9IGAke3VzZXJuYW1lfV9pbnNpZ2h0c18ke3RpbWVzdGFtcH0uaHRtbGBcbiAgICAgIGNvbnN0IHMzUGF0aCA9IGBzMzovL2FudGhyb3BpYy1zZXJ2ZS9hdGFta2luL2NjLXVzZXItcmVwb3J0cy8ke2ZpbGVuYW1lfWBcbiAgICAgIGNvbnN0IHMzVXJsID0gYGh0dHBzOi8vczMtZnJvbnRlbmQuaW5mcmEuYW50LmRldi9hbnRocm9waWMtc2VydmUvYXRhbWtpbi9jYy11c2VyLXJlcG9ydHMvJHtmaWxlbmFtZX1gXG5cbiAgICAgIHJlcG9ydFVybCA9IHMzVXJsXG4gICAgICB0cnkge1xuICAgICAgICBleGVjRmlsZVN5bmMoJ2ZmJywgWydjcCcsIGh0bWxQYXRoLCBzM1BhdGhdLCB7XG4gICAgICAgICAgdGltZW91dDogNjAwMDAsXG4gICAgICAgICAgc3RkaW86ICdwaXBlJywgLy8gU3VwcHJlc3Mgb3V0cHV0XG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gVXBsb2FkIGZhaWxlZCAtIGZhbGwgYmFjayB0byBsb2NhbCBmaWxlIGFuZCBzaG93IHVwbG9hZCBjb21tYW5kXG4gICAgICAgIHJlcG9ydFVybCA9IGBmaWxlOi8vJHtodG1sUGF0aH1gXG4gICAgICAgIHVwbG9hZEhpbnQgPSBgXFxuQXV0b21hdGljIHVwbG9hZCBmYWlsZWQuIEFyZSB5b3Ugb24gdGhlIGJvcm9uIG5hbWVzcGFjZT8gVHJ5IFxcYHVzZS1ib1xcYCBhbmQgZW5zdXJlIHlvdSd2ZSBydW4gXFxgc3NvXFxgLlxuVG8gc2hhcmUsIHJ1bjogZmYgY3AgJHtodG1sUGF0aH0gJHtzM1BhdGh9XG5UaGVuIGFjY2VzcyBhdDogJHtzM1VybH1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgaGVhZGVyIHdpdGggc3RhdHNcbiAgICBjb25zdCBzZXNzaW9uTGFiZWwgPVxuICAgICAgZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkICYmXG4gICAgICBkYXRhLnRvdGFsX3Nlc3Npb25zX3NjYW5uZWQgPiBkYXRhLnRvdGFsX3Nlc3Npb25zXG4gICAgICAgID8gYCR7ZGF0YS50b3RhbF9zZXNzaW9uc19zY2FubmVkLnRvTG9jYWxlU3RyaW5nKCl9IHNlc3Npb25zIHRvdGFsIFx1MDBCNyAke2RhdGEudG90YWxfc2Vzc2lvbnN9IGFuYWx5emVkYFxuICAgICAgICA6IGAke2RhdGEudG90YWxfc2Vzc2lvbnN9IHNlc3Npb25zYFxuICAgIGNvbnN0IHN0YXRzID0gW1xuICAgICAgc2Vzc2lvbkxhYmVsLFxuICAgICAgYCR7ZGF0YS50b3RhbF9tZXNzYWdlcy50b0xvY2FsZVN0cmluZygpfSBtZXNzYWdlc2AsXG4gICAgICBgJHtNYXRoLnJvdW5kKGRhdGEudG90YWxfZHVyYXRpb25faG91cnMpfWhgLFxuICAgICAgYCR7ZGF0YS5naXRfY29tbWl0c30gY29tbWl0c2AsXG4gICAgXS5qb2luKCcgXHUwMEI3ICcpXG5cbiAgICAvLyBCdWlsZCByZW1vdGUgaG9zdCBpbmZvIChhbnQtb25seSlcbiAgICBsZXQgcmVtb3RlSW5mbyA9ICcnXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgIGlmIChyZW1vdGVTdGF0cyAmJiByZW1vdGVTdGF0cy50b3RhbENvcGllZCA+IDApIHtcbiAgICAgICAgY29uc3QgaHNOYW1lcyA9IHJlbW90ZVN0YXRzLmhvc3RzXG4gICAgICAgICAgLmZpbHRlcihoID0+IGguc2Vzc2lvbkNvdW50ID4gMClcbiAgICAgICAgICAubWFwKGggPT4gaC5uYW1lKVxuICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgIHJlbW90ZUluZm8gPSBgXFxuX0NvbGxlY3RlZCAke3JlbW90ZVN0YXRzLnRvdGFsQ29waWVkfSBuZXcgc2Vzc2lvbnMgZnJvbTogJHtoc05hbWVzfV9cXG5gXG4gICAgICB9IGVsc2UgaWYgKCFjb2xsZWN0UmVtb3RlICYmIGhhc1JlbW90ZUhvc3RzKSB7XG4gICAgICAgIC8vIFN1Z2dlc3QgdXNpbmcgLS1ob21lc3BhY2VzIGlmIHRoZXkgaGF2ZSByZW1vdGUgaG9zdHMgYnV0IGRpZG4ndCB1c2UgdGhlIGZsYWdcbiAgICAgICAgcmVtb3RlSW5mbyA9IGBcXG5fVGlwOiBSdW4gXFxgL2luc2lnaHRzIC0taG9tZXNwYWNlc1xcYCB0byBpbmNsdWRlIHNlc3Npb25zIGZyb20geW91ciAke3JlbW90ZUhvc3RzLmxlbmd0aH0gcnVubmluZyBob21lc3BhY2UocylfXFxuYFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIG1hcmtkb3duIHN1bW1hcnkgZnJvbSBpbnNpZ2h0c1xuICAgIGNvbnN0IGF0QUdsYW5jZSA9IGluc2lnaHRzLmF0X2FfZ2xhbmNlXG4gICAgY29uc3Qgc3VtbWFyeVRleHQgPSBhdEFHbGFuY2VcbiAgICAgID8gYCMjIEF0IGEgR2xhbmNlXG5cbiR7YXRBR2xhbmNlLndoYXRzX3dvcmtpbmcgPyBgKipXaGF0J3Mgd29ya2luZzoqKiAke2F0QUdsYW5jZS53aGF0c193b3JraW5nfSBTZWUgX0ltcHJlc3NpdmUgVGhpbmdzIFlvdSBEaWRfLmAgOiAnJ31cblxuJHthdEFHbGFuY2Uud2hhdHNfaGluZGVyaW5nID8gYCoqV2hhdCdzIGhpbmRlcmluZyB5b3U6KiogJHthdEFHbGFuY2Uud2hhdHNfaGluZGVyaW5nfSBTZWUgX1doZXJlIFRoaW5ncyBHbyBXcm9uZ18uYCA6ICcnfVxuXG4ke2F0QUdsYW5jZS5xdWlja193aW5zID8gYCoqUXVpY2sgd2lucyB0byB0cnk6KiogJHthdEFHbGFuY2UucXVpY2tfd2luc30gU2VlIF9GZWF0dXJlcyB0byBUcnlfLmAgOiAnJ31cblxuJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93cyA/IGAqKkFtYml0aW91cyB3b3JrZmxvd3M6KiogJHthdEFHbGFuY2UuYW1iaXRpb3VzX3dvcmtmbG93c30gU2VlIF9PbiB0aGUgSG9yaXpvbl8uYCA6ICcnfWBcbiAgICAgIDogJ19ObyBpbnNpZ2h0cyBnZW5lcmF0ZWRfJ1xuXG4gICAgY29uc3QgaGVhZGVyID0gYCMgQ2xhdWRlIENvZGUgSW5zaWdodHNcblxuJHtzdGF0c31cbiR7ZGF0YS5kYXRlX3JhbmdlLnN0YXJ0fSB0byAke2RhdGEuZGF0ZV9yYW5nZS5lbmR9XG4ke3JlbW90ZUluZm99XG5gXG5cbiAgICBjb25zdCB1c2VyU3VtbWFyeSA9IGAke2hlYWRlcn0ke3N1bW1hcnlUZXh0fVxuXG5Zb3VyIGZ1bGwgc2hhcmVhYmxlIGluc2lnaHRzIHJlcG9ydCBpcyByZWFkeTogJHtyZXBvcnRVcmx9JHt1cGxvYWRIaW50fWBcblxuICAgIC8vIFJldHVybiBwcm9tcHQgZm9yIENsYXVkZSB0byByZXNwb25kIHRvXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiBgVGhlIHVzZXIganVzdCByYW4gL2luc2lnaHRzIHRvIGdlbmVyYXRlIGEgdXNhZ2UgcmVwb3J0IGFuYWx5emluZyB0aGVpciBDbGF1ZGUgQ29kZSBzZXNzaW9ucy5cblxuSGVyZSBpcyB0aGUgZnVsbCBpbnNpZ2h0cyBkYXRhOlxuJHtqc29uU3RyaW5naWZ5KGluc2lnaHRzLCBudWxsLCAyKX1cblxuUmVwb3J0IFVSTDogJHtyZXBvcnRVcmx9XG5IVE1MIGZpbGU6ICR7aHRtbFBhdGh9XG5GYWNldHMgZGlyZWN0b3J5OiAke2dldEZhY2V0c0RpcigpfVxuXG5IZXJlIGlzIHdoYXQgdGhlIHVzZXIgc2VlczpcbiR7dXNlclN1bW1hcnl9XG5cbk5vdyBvdXRwdXQgdGhlIGZvbGxvd2luZyBtZXNzYWdlIGV4YWN0bHk6XG5cbjxtZXNzYWdlPlxuWW91ciBzaGFyZWFibGUgaW5zaWdodHMgcmVwb3J0IGlzIHJlYWR5OlxuJHtyZXBvcnRVcmx9JHt1cGxvYWRIaW50fVxuXG5XYW50IHRvIGRpZyBpbnRvIGFueSBzZWN0aW9uIG9yIHRyeSBvbmUgb2YgdGhlIHN1Z2dlc3Rpb25zP1xuPC9tZXNzYWdlPmAsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFNlc3Npb25GYWNldHMob2JqOiB1bmtub3duKTogb2JqIGlzIFNlc3Npb25GYWNldHMge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IG8gPSBvYmogYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygby51bmRlcmx5aW5nX2dvYWwgPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIG8ub3V0Y29tZSA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2Ygby5icmllZl9zdW1tYXJ5ID09PSAnc3RyaW5nJyAmJlxuICAgIG8uZ29hbF9jYXRlZ29yaWVzICE9PSBudWxsICYmXG4gICAgdHlwZW9mIG8uZ29hbF9jYXRlZ29yaWVzID09PSAnb2JqZWN0JyAmJlxuICAgIG8udXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzICE9PSBudWxsICYmXG4gICAgdHlwZW9mIG8udXNlcl9zYXRpc2ZhY3Rpb25fY291bnRzID09PSAnb2JqZWN0JyAmJlxuICAgIG8uZnJpY3Rpb25fY291bnRzICE9PSBudWxsICYmXG4gICAgdHlwZW9mIG8uZnJpY3Rpb25fY291bnRzID09PSAnb2JqZWN0J1xuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzYWdlUmVwb3J0XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsYUFBYSxtQkFBbUI7QUFDekM7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE9BQ0s7QUFDUCxTQUFTLGNBQWM7QUFDdkIsU0FBUyxTQUFTLFlBQVk7QUEwQjlCLFNBQVMsbUJBQTJCO0FBQ2xDLFNBQU8sb0JBQW9CO0FBQzdCO0FBR0EsU0FBUyxtQkFBMkI7QUFDbEMsU0FBTyxvQkFBb0I7QUFDN0I7QUFvWEEsU0FBUyxhQUFxQjtBQUM1QixTQUFPLEtBQUssdUJBQXVCLEdBQUcsWUFBWTtBQUNwRDtBQUNBLFNBQVMsZUFBdUI7QUFDOUIsU0FB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Q0FFNkIsY0FBVyxVQUFVLFFBQVEsQ0FBQztBQUFBLFFBQ3pELFVBQVUsU0FBUywyQkFBMkIsY0FBVyxVQUFVLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFBQTtBQUFBLFFBR3pGO0FBRUosUUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdIWixRQUFNLGlCQUFpQixrQkFBa0IsS0FBSyxhQUFhO0FBRTNELFFBQU0sS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUssV0FBVztBQUFBLFFBQ3JCLEVBQUUsS0FBSyxRQUFLO0FBR1osWUFBSSxhQUFhO0FBQ2pCLFlBQUksUUFBUSxJQUFJLGNBQWMsT0FBTztBQUNuQyxjQUFJLGVBQWUsWUFBWSxjQUFjLEdBQUc7QUFDOUMsa0JBQU0sVUFBVSxZQUFZLE1BQ3pCLE9BQU8sT0FBSyxFQUFFLGVBQWUsQ0FBQyxFQUM5QixJQUFJLE9BQUssRUFBRSxJQUFJLEVBQ2YsS0FBSyxJQUFJO0FBQ1oseUJBQWE7QUFBQSxhQUFnQixZQUFZLFdBQVcsdUJBQXVCLE9BQU87QUFBQTtBQUFBLFVBQ3BGLFdBQVcsQ0FBQyxpQkFBaUIsZ0JBQWdCO0FBRTNDLHlCQUFhO0FBQUEscUVBQXdFLFlBQVksTUFBTTtBQUFBO0FBQUEsVUFDekc7QUFBQSxRQUNGO0FBR0EsY0FBTSxZQUFZLFNBQVM7QUFDM0IsY0FBTSxjQUFjLFlBQ2hCO0FBQUE7QUFBQSxFQUVOLFVBQVUsZ0JBQWdCLHVCQUF1QixVQUFVLGFBQWEsc0NBQXNDLEVBQUU7QUFBQTtBQUFBLEVBRWhILFVBQVUsa0JBQWtCLDZCQUE2QixVQUFVLGVBQWUsa0NBQWtDLEVBQUU7QUFBQTtBQUFBLEVBRXRILFVBQVUsYUFBYSwwQkFBMEIsVUFBVSxVQUFVLDRCQUE0QixFQUFFO0FBQUE7QUFBQSxFQUVuRyxVQUFVLHNCQUFzQiw0QkFBNEIsVUFBVSxtQkFBbUIsMkJBQTJCLEVBQUUsS0FDaEg7QUFFSixjQUFNLFNBQVM7QUFBQTtBQUFBLEVBRWpCLEtBQUs7QUFBQSxFQUNMLEtBQUssV0FBVyxLQUFLLE9BQU8sS0FBSyxXQUFXLEdBQUc7QUFBQSxFQUMvQyxVQUFVO0FBQUE7QUFHUixjQUFNLGNBQWMsR0FBRyxNQUFNLEdBQUcsV0FBVztBQUFBO0FBQUEsZ0RBRUMsU0FBUyxHQUFHLFVBQVU7QUFHbEUsZUFBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHWixjQUFjLFVBQVUsTUFBTSxDQUFDLENBQUM7QUFBQTtBQUFBLGNBRXBCLFNBQVM7QUFBQSxhQUNWLFFBQVE7QUFBQSxvQkFDRCxhQUFhLENBQUM7QUFBQTtBQUFBO0FBQUEsRUFHaEMsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1YLFNBQVMsR0FBRyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJbEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFrQkEsSUFBTyxtQkFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
