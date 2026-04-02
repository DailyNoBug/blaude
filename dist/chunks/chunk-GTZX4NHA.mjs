#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  asSystemPrompt,
  extractTextContent,
  init_claude,
  init_messages2 as init_messages,
  init_systemPromptType,
  queryHaiku
} from "./chunk-5INIV6TQ.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
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
} from "./chunk-M5NTYAY2.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getIsNonInteractiveSession,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/sessionTitle.ts
function extractConversationText(messages) {
  const parts = [];
  for (const msg of messages) {
    if (msg.type !== "user" && msg.type !== "assistant") continue;
    if ("isMeta" in msg && msg.isMeta) continue;
    if ("origin" in msg && msg.origin && msg.origin.kind !== "human") continue;
    const content = msg.message.content;
    if (typeof content === "string") {
      parts.push(content);
    } else if (Array.isArray(content)) {
      for (const block of content) {
        if ("type" in block && block.type === "text" && "text" in block) {
          parts.push(block.text);
        }
      }
    }
  }
  const text = parts.join("\n");
  return text.length > MAX_CONVERSATION_TEXT ? text.slice(-MAX_CONVERSATION_TEXT) : text;
}
async function generateSessionTitle(description, signal) {
  const trimmed = description.trim();
  if (!trimmed) return null;
  try {
    const result = await queryHaiku({
      systemPrompt: asSystemPrompt([SESSION_TITLE_PROMPT]),
      userPrompt: trimmed,
      outputFormat: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            title: { type: "string" }
          },
          required: ["title"],
          additionalProperties: false
        }
      },
      signal,
      options: {
        querySource: "generate_session_title",
        agents: [],
        // Reflect the actual session mode — this module is called from
        // both the SDK print path (non-interactive) and the CCR remote
        // session path via useRemoteSession (interactive).
        isNonInteractiveSession: getIsNonInteractiveSession(),
        hasAppendSystemPrompt: false,
        mcpTools: []
      }
    });
    const text = extractTextContent(result.message.content);
    const parsed = titleSchema().safeParse(safeParseJSON(text));
    const title = parsed.success ? parsed.data.title.trim() || null : null;
    logEvent("tengu_session_title_generated", { success: title !== null });
    return title;
  } catch (error) {
    logForDebugging(`generateSessionTitle failed: ${error}`, {
      level: "error"
    });
    logEvent("tengu_session_title_generated", { success: false });
    return null;
  }
}
var MAX_CONVERSATION_TEXT, SESSION_TITLE_PROMPT, titleSchema;
var init_sessionTitle = __esm({
  "src/utils/sessionTitle.ts"() {
    init_v4();
    init_state();
    init_analytics();
    init_claude();
    init_debug();
    init_json();
    init_lazySchema();
    init_messages();
    init_systemPromptType();
    MAX_CONVERSATION_TEXT = 1e3;
    SESSION_TITLE_PROMPT = `Generate a concise, sentence-case title (3-7 words) that captures the main topic or goal of this coding session. The title should be clear enough that the user recognizes the session in a list. Use sentence case: capitalize only the first word and proper nouns.

Return JSON with a single "title" field.

Good examples:
{"title": "Fix login button on mobile"}
{"title": "Add OAuth authentication"}
{"title": "Debug failing CI tests"}
{"title": "Refactor API client error handling"}

Bad (too vague): {"title": "Code changes"}
Bad (too long): {"title": "Investigate and fix the issue where the login button does not respond on mobile devices"}
Bad (wrong case): {"title": "Fix Login Button On Mobile"}`;
    titleSchema = lazySchema(() => external_exports.object({ title: external_exports.string() }));
  }
});

export {
  extractConversationText,
  generateSessionTitle,
  init_sessionTitle
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3Nlc3Npb25UaXRsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBTZXNzaW9uIHRpdGxlIGdlbmVyYXRpb24gdmlhIEhhaWt1LlxuICpcbiAqIFN0YW5kYWxvbmUgbW9kdWxlIHdpdGggbWluaW1hbCBkZXBlbmRlbmNpZXMgc28gaXQgY2FuIGJlIGltcG9ydGVkIGZyb21cbiAqIHByaW50LnRzIChTREsgY29udHJvbCByZXF1ZXN0IGhhbmRsZXIpIHdpdGhvdXQgcHVsbGluZyBpbiB0aGUgUmVhY3QvY2hhbGsvXG4gKiBnaXQgZGVwZW5kZW5jeSBjaGFpbiB0aGF0IHRlbGVwb3J0LnRzeCBjYXJyaWVzLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIEFJLWdlbmVyYXRlZCBzZXNzaW9uIHRpdGxlcyBhY3Jvc3NcbiAqIGFsbCBzdXJmYWNlcy4gUHJldmlvdXNseSB0aGVyZSB3ZXJlIHNlcGFyYXRlIEhhaWt1IHRpdGxlIGdlbmVyYXRvcnM6XG4gKiAtIHRlbGVwb3J0LnRzeCBnZW5lcmF0ZVRpdGxlQW5kQnJhbmNoICg2LXdvcmQgdGl0bGUgKyBicmFuY2ggZm9yIENDUilcbiAqIC0gcmVuYW1lL2dlbmVyYXRlU2Vzc2lvbk5hbWUudHMgKGtlYmFiLWNhc2UgbmFtZSBmb3IgL3JlbmFtZSlcbiAqIEVhY2ggcmVtYWlucyBmb3IgYmFja3dhcmRzIGNvbXBhdDsgbmV3IGNhbGxlcnMgc2hvdWxkIHVzZSB0aGlzIG1vZHVsZS5cbiAqL1xuXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kL3Y0J1xuaW1wb3J0IHsgZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24gfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHF1ZXJ5SGFpa3UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGkvY2xhdWRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5pbXBvcnQgeyBzYWZlUGFyc2VKU09OIH0gZnJvbSAnLi9qc29uLmpzJ1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4vbGF6eVNjaGVtYS5qcydcbmltcG9ydCB7IGV4dHJhY3RUZXh0Q29udGVudCB9IGZyb20gJy4vbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBhc1N5c3RlbVByb21wdCB9IGZyb20gJy4vc3lzdGVtUHJvbXB0VHlwZS5qcydcblxuY29uc3QgTUFYX0NPTlZFUlNBVElPTl9URVhUID0gMTAwMFxuXG4vKipcbiAqIEZsYXR0ZW4gYSBtZXNzYWdlIGFycmF5IGludG8gYSBzaW5nbGUgdGV4dCBzdHJpbmcgZm9yIEhhaWt1IHRpdGxlIGlucHV0LlxuICogU2tpcHMgbWV0YS9ub24taHVtYW4gbWVzc2FnZXMuIFRhaWwtc2xpY2VzIHRvIHRoZSBsYXN0IDEwMDAgY2hhcnMgc29cbiAqIHJlY2VudCBjb250ZXh0IHdpbnMgd2hlbiB0aGUgY29udmVyc2F0aW9uIGlzIGxvbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0Q29udmVyc2F0aW9uVGV4dChtZXNzYWdlczogTWVzc2FnZVtdKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBtc2cgb2YgbWVzc2FnZXMpIHtcbiAgICBpZiAobXNnLnR5cGUgIT09ICd1c2VyJyAmJiBtc2cudHlwZSAhPT0gJ2Fzc2lzdGFudCcpIGNvbnRpbnVlXG4gICAgaWYgKCdpc01ldGEnIGluIG1zZyAmJiBtc2cuaXNNZXRhKSBjb250aW51ZVxuICAgIGlmICgnb3JpZ2luJyBpbiBtc2cgJiYgbXNnLm9yaWdpbiAmJiBtc2cub3JpZ2luLmtpbmQgIT09ICdodW1hbicpIGNvbnRpbnVlXG4gICAgY29uc3QgY29udGVudCA9IG1zZy5tZXNzYWdlLmNvbnRlbnRcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJ0cy5wdXNoKGNvbnRlbnQpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKCd0eXBlJyBpbiBibG9jayAmJiBibG9jay50eXBlID09PSAndGV4dCcgJiYgJ3RleHQnIGluIGJsb2NrKSB7XG4gICAgICAgICAgcGFydHMucHVzaChibG9jay50ZXh0IGFzIHN0cmluZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB0ZXh0ID0gcGFydHMuam9pbignXFxuJylcbiAgcmV0dXJuIHRleHQubGVuZ3RoID4gTUFYX0NPTlZFUlNBVElPTl9URVhUXG4gICAgPyB0ZXh0LnNsaWNlKC1NQVhfQ09OVkVSU0FUSU9OX1RFWFQpXG4gICAgOiB0ZXh0XG59XG5cbmNvbnN0IFNFU1NJT05fVElUTEVfUFJPTVBUID0gYEdlbmVyYXRlIGEgY29uY2lzZSwgc2VudGVuY2UtY2FzZSB0aXRsZSAoMy03IHdvcmRzKSB0aGF0IGNhcHR1cmVzIHRoZSBtYWluIHRvcGljIG9yIGdvYWwgb2YgdGhpcyBjb2Rpbmcgc2Vzc2lvbi4gVGhlIHRpdGxlIHNob3VsZCBiZSBjbGVhciBlbm91Z2ggdGhhdCB0aGUgdXNlciByZWNvZ25pemVzIHRoZSBzZXNzaW9uIGluIGEgbGlzdC4gVXNlIHNlbnRlbmNlIGNhc2U6IGNhcGl0YWxpemUgb25seSB0aGUgZmlyc3Qgd29yZCBhbmQgcHJvcGVyIG5vdW5zLlxuXG5SZXR1cm4gSlNPTiB3aXRoIGEgc2luZ2xlIFwidGl0bGVcIiBmaWVsZC5cblxuR29vZCBleGFtcGxlczpcbntcInRpdGxlXCI6IFwiRml4IGxvZ2luIGJ1dHRvbiBvbiBtb2JpbGVcIn1cbntcInRpdGxlXCI6IFwiQWRkIE9BdXRoIGF1dGhlbnRpY2F0aW9uXCJ9XG57XCJ0aXRsZVwiOiBcIkRlYnVnIGZhaWxpbmcgQ0kgdGVzdHNcIn1cbntcInRpdGxlXCI6IFwiUmVmYWN0b3IgQVBJIGNsaWVudCBlcnJvciBoYW5kbGluZ1wifVxuXG5CYWQgKHRvbyB2YWd1ZSk6IHtcInRpdGxlXCI6IFwiQ29kZSBjaGFuZ2VzXCJ9XG5CYWQgKHRvbyBsb25nKToge1widGl0bGVcIjogXCJJbnZlc3RpZ2F0ZSBhbmQgZml4IHRoZSBpc3N1ZSB3aGVyZSB0aGUgbG9naW4gYnV0dG9uIGRvZXMgbm90IHJlc3BvbmQgb24gbW9iaWxlIGRldmljZXNcIn1cbkJhZCAod3JvbmcgY2FzZSk6IHtcInRpdGxlXCI6IFwiRml4IExvZ2luIEJ1dHRvbiBPbiBNb2JpbGVcIn1gXG5cbmNvbnN0IHRpdGxlU2NoZW1hID0gbGF6eVNjaGVtYSgoKSA9PiB6Lm9iamVjdCh7IHRpdGxlOiB6LnN0cmluZygpIH0pKVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2VudGVuY2UtY2FzZSBzZXNzaW9uIHRpdGxlIGZyb20gYSBkZXNjcmlwdGlvbiBvciBmaXJzdCBtZXNzYWdlLlxuICogUmV0dXJucyBudWxsIG9uIGVycm9yIG9yIGlmIEhhaWt1IHJldHVybnMgYW4gdW5wYXJzZWFibGUgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIGRlc2NyaXB0aW9uIC0gVGhlIHVzZXIncyBmaXJzdCBtZXNzYWdlIG9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIHNlc3Npb25cbiAqIEBwYXJhbSBzaWduYWwgLSBBYm9ydCBzaWduYWwgZm9yIGNhbmNlbGxhdGlvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTZXNzaW9uVGl0bGUoXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHNpZ25hbDogQWJvcnRTaWduYWwsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgdHJpbW1lZCA9IGRlc2NyaXB0aW9uLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpIHJldHVybiBudWxsXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeUhhaWt1KHtcbiAgICAgIHN5c3RlbVByb21wdDogYXNTeXN0ZW1Qcm9tcHQoW1NFU1NJT05fVElUTEVfUFJPTVBUXSksXG4gICAgICB1c2VyUHJvbXB0OiB0cmltbWVkLFxuICAgICAgb3V0cHV0Rm9ybWF0OiB7XG4gICAgICAgIHR5cGU6ICdqc29uX3NjaGVtYScsXG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogWyd0aXRsZSddLFxuICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzaWduYWwsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHF1ZXJ5U291cmNlOiAnZ2VuZXJhdGVfc2Vzc2lvbl90aXRsZScsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIC8vIFJlZmxlY3QgdGhlIGFjdHVhbCBzZXNzaW9uIG1vZGUgXHUyMDE0IHRoaXMgbW9kdWxlIGlzIGNhbGxlZCBmcm9tXG4gICAgICAgIC8vIGJvdGggdGhlIFNESyBwcmludCBwYXRoIChub24taW50ZXJhY3RpdmUpIGFuZCB0aGUgQ0NSIHJlbW90ZVxuICAgICAgICAvLyBzZXNzaW9uIHBhdGggdmlhIHVzZVJlbW90ZVNlc3Npb24gKGludGVyYWN0aXZlKS5cbiAgICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uKCksXG4gICAgICAgIGhhc0FwcGVuZFN5c3RlbVByb21wdDogZmFsc2UsXG4gICAgICAgIG1jcFRvb2xzOiBbXSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGV4dENvbnRlbnQocmVzdWx0Lm1lc3NhZ2UuY29udGVudClcblxuICAgIGNvbnN0IHBhcnNlZCA9IHRpdGxlU2NoZW1hKCkuc2FmZVBhcnNlKHNhZmVQYXJzZUpTT04odGV4dCkpXG4gICAgY29uc3QgdGl0bGUgPSBwYXJzZWQuc3VjY2VzcyA/IHBhcnNlZC5kYXRhLnRpdGxlLnRyaW0oKSB8fCBudWxsIDogbnVsbFxuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3Nlc3Npb25fdGl0bGVfZ2VuZXJhdGVkJywgeyBzdWNjZXNzOiB0aXRsZSAhPT0gbnVsbCB9KVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGBnZW5lcmF0ZVNlc3Npb25UaXRsZSBmYWlsZWQ6ICR7ZXJyb3J9YCwge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgfSlcbiAgICBsb2dFdmVudCgndGVuZ3Vfc2Vzc2lvbl90aXRsZV9nZW5lcmF0ZWQnLCB7IHN1Y2Nlc3M6IGZhbHNlIH0pXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NPLFNBQVMsd0JBQXdCLFVBQTZCO0FBQ25FLFFBQU0sUUFBa0IsQ0FBQztBQUN6QixhQUFXLE9BQU8sVUFBVTtBQUMxQixRQUFJLElBQUksU0FBUyxVQUFVLElBQUksU0FBUyxZQUFhO0FBQ3JELFFBQUksWUFBWSxPQUFPLElBQUksT0FBUTtBQUNuQyxRQUFJLFlBQVksT0FBTyxJQUFJLFVBQVUsSUFBSSxPQUFPLFNBQVMsUUFBUztBQUNsRSxVQUFNLFVBQVUsSUFBSSxRQUFRO0FBQzVCLFFBQUksT0FBTyxZQUFZLFVBQVU7QUFDL0IsWUFBTSxLQUFLLE9BQU87QUFBQSxJQUNwQixXQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUc7QUFDakMsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLFlBQUksVUFBVSxTQUFTLE1BQU0sU0FBUyxVQUFVLFVBQVUsT0FBTztBQUMvRCxnQkFBTSxLQUFLLE1BQU0sSUFBYztBQUFBLFFBQ2pDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsUUFBTSxPQUFPLE1BQU0sS0FBSyxJQUFJO0FBQzVCLFNBQU8sS0FBSyxTQUFTLHdCQUNqQixLQUFLLE1BQU0sQ0FBQyxxQkFBcUIsSUFDakM7QUFDTjtBQXlCQSxlQUFzQixxQkFDcEIsYUFDQSxRQUN3QjtBQUN4QixRQUFNLFVBQVUsWUFBWSxLQUFLO0FBQ2pDLE1BQUksQ0FBQyxRQUFTLFFBQU87QUFFckIsTUFBSTtBQUNGLFVBQU0sU0FBUyxNQUFNLFdBQVc7QUFBQSxNQUM5QixjQUFjLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25ELFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxZQUNWLE9BQU8sRUFBRSxNQUFNLFNBQVM7QUFBQSxVQUMxQjtBQUFBLFVBQ0EsVUFBVSxDQUFDLE9BQU87QUFBQSxVQUNsQixzQkFBc0I7QUFBQSxRQUN4QjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixRQUFRLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUlULHlCQUF5QiwyQkFBMkI7QUFBQSxRQUNwRCx1QkFBdUI7QUFBQSxRQUN2QixVQUFVLENBQUM7QUFBQSxNQUNiO0FBQUEsSUFDRixDQUFDO0FBRUQsVUFBTSxPQUFPLG1CQUFtQixPQUFPLFFBQVEsT0FBTztBQUV0RCxVQUFNLFNBQVMsWUFBWSxFQUFFLFVBQVUsY0FBYyxJQUFJLENBQUM7QUFDMUQsVUFBTSxRQUFRLE9BQU8sVUFBVSxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTztBQUVsRSxhQUFTLGlDQUFpQyxFQUFFLFNBQVMsVUFBVSxLQUFLLENBQUM7QUFFckUsV0FBTztBQUFBLEVBQ1QsU0FBUyxPQUFPO0FBQ2Qsb0JBQWdCLGdDQUFnQyxLQUFLLElBQUk7QUFBQSxNQUN2RCxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsYUFBUyxpQ0FBaUMsRUFBRSxTQUFTLE1BQU0sQ0FBQztBQUM1RCxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBaElBLElBeUJNLHVCQThCQSxzQkFjQTtBQXJFTjtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSx3QkFBd0I7QUE4QjlCLElBQU0sdUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYzdCLElBQU0sY0FBYyxXQUFXLE1BQU0saUJBQUUsT0FBTyxFQUFFLE9BQU8saUJBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
