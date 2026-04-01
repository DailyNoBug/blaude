#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  extractConversationText,
  init_sessionTitle
} from "./chunk-TUS5EHIO.mjs";
import {
  asSystemPrompt,
  extractTextContent,
  init_claude,
  init_messages2 as init_messages,
  init_systemPromptType,
  queryHaiku
} from "./chunk-OTDPNGFK.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/rename/generateSessionName.ts
async function generateSessionName(messages, signal) {
  const conversationText = extractConversationText(messages);
  if (!conversationText) {
    return null;
  }
  try {
    const result = await queryHaiku({
      systemPrompt: asSystemPrompt([
        'Generate a short kebab-case name (2-4 words) that captures the main topic of this conversation. Use lowercase words separated by hyphens. Examples: "fix-login-bug", "add-auth-feature", "refactor-api-client", "debug-test-failures". Return JSON with a "name" field.'
      ]),
      userPrompt: conversationText,
      outputFormat: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            name: { type: "string" }
          },
          required: ["name"],
          additionalProperties: false
        }
      },
      signal,
      options: {
        querySource: "rename_generate_name",
        agents: [],
        isNonInteractiveSession: false,
        hasAppendSystemPrompt: false,
        mcpTools: []
      }
    });
    const content = extractTextContent(result.message.content);
    const response = safeParseJSON(content);
    if (response && typeof response === "object" && "name" in response && typeof response.name === "string") {
      return response.name;
    }
    return null;
  } catch (error) {
    logForDebugging(`generateSessionName failed: ${errorMessage(error)}`, {
      level: "error"
    });
    return null;
  }
}
var init_generateSessionName = __esm({
  "src/commands/rename/generateSessionName.ts"() {
    init_claude();
    init_debug();
    init_errors();
    init_json();
    init_messages();
    init_sessionTitle();
    init_systemPromptType();
  }
});

export {
  generateSessionName,
  init_generateSessionName
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbmFtZS9nZW5lcmF0ZVNlc3Npb25OYW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBxdWVyeUhhaWt1IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2NsYXVkZS5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IHNhZmVQYXJzZUpTT04gfSBmcm9tICcuLi8uLi91dGlscy9qc29uLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdFRleHRDb250ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBleHRyYWN0Q29udmVyc2F0aW9uVGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25UaXRsZS5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc3lzdGVtUHJvbXB0VHlwZS5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2Vzc2lvbk5hbWUoXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gIHNpZ25hbDogQWJvcnRTaWduYWwsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgY29udmVyc2F0aW9uVGV4dCA9IGV4dHJhY3RDb252ZXJzYXRpb25UZXh0KG1lc3NhZ2VzKVxuICBpZiAoIWNvbnZlcnNhdGlvblRleHQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeUhhaWt1KHtcbiAgICAgIHN5c3RlbVByb21wdDogYXNTeXN0ZW1Qcm9tcHQoW1xuICAgICAgICAnR2VuZXJhdGUgYSBzaG9ydCBrZWJhYi1jYXNlIG5hbWUgKDItNCB3b3JkcykgdGhhdCBjYXB0dXJlcyB0aGUgbWFpbiB0b3BpYyBvZiB0aGlzIGNvbnZlcnNhdGlvbi4gVXNlIGxvd2VyY2FzZSB3b3JkcyBzZXBhcmF0ZWQgYnkgaHlwaGVucy4gRXhhbXBsZXM6IFwiZml4LWxvZ2luLWJ1Z1wiLCBcImFkZC1hdXRoLWZlYXR1cmVcIiwgXCJyZWZhY3Rvci1hcGktY2xpZW50XCIsIFwiZGVidWctdGVzdC1mYWlsdXJlc1wiLiBSZXR1cm4gSlNPTiB3aXRoIGEgXCJuYW1lXCIgZmllbGQuJyxcbiAgICAgIF0pLFxuICAgICAgdXNlclByb21wdDogY29udmVyc2F0aW9uVGV4dCxcbiAgICAgIG91dHB1dEZvcm1hdDoge1xuICAgICAgICB0eXBlOiAnanNvbl9zY2hlbWEnLFxuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogWyduYW1lJ10sXG4gICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNpZ25hbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcXVlcnlTb3VyY2U6ICdyZW5hbWVfZ2VuZXJhdGVfbmFtZScsXG4gICAgICAgIGFnZW50czogW10sXG4gICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiBmYWxzZSxcbiAgICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OiBmYWxzZSxcbiAgICAgICAgbWNwVG9vbHM6IFtdLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudCA9IGV4dHJhY3RUZXh0Q29udGVudChyZXN1bHQubWVzc2FnZS5jb250ZW50KVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBzYWZlUGFyc2VKU09OKGNvbnRlbnQpXG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UgJiZcbiAgICAgIHR5cGVvZiByZXNwb25zZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICduYW1lJyBpbiByZXNwb25zZSAmJlxuICAgICAgdHlwZW9mIChyZXNwb25zZSBhcyB7IG5hbWU6IHVua25vd24gfSkubmFtZSA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIHJldHVybiAocmVzcG9uc2UgYXMgeyBuYW1lOiBzdHJpbmcgfSkubmFtZVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIEhhaWt1IHRpbWVvdXQvcmF0ZS1saW1pdC9uZXR3b3JrIGFyZSBleHBlY3RlZCBvcGVyYXRpb25hbCBmYWlsdXJlcyBcdTIwMTRcbiAgICAvLyBsb2dGb3JEZWJ1Z2dpbmcsIG5vdCBsb2dFcnJvci4gQ2FsbGVkIGF1dG9tYXRpY2FsbHkgb24gZXZlcnkgM3JkIGJyaWRnZVxuICAgIC8vIG1lc3NhZ2UgKGluaXRSZXBsQnJpZGdlLnRzKSwgc28gZXJyb3JzIGhlcmUgd291bGQgZmxvb2QgdGhlIGVycm9yIGZpbGUuXG4gICAgbG9nRm9yRGVidWdnaW5nKGBnZW5lcmF0ZVNlc3Npb25OYW1lIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsIHtcbiAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgIH0pXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsZUFBc0Isb0JBQ3BCLFVBQ0EsUUFDd0I7QUFDeEIsUUFBTSxtQkFBbUIsd0JBQXdCLFFBQVE7QUFDekQsTUFBSSxDQUFDLGtCQUFrQjtBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUk7QUFDRixVQUFNLFNBQVMsTUFBTSxXQUFXO0FBQUEsTUFDOUIsY0FBYyxlQUFlO0FBQUEsUUFDM0I7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxZQUNWLE1BQU0sRUFBRSxNQUFNLFNBQVM7QUFBQSxVQUN6QjtBQUFBLFVBQ0EsVUFBVSxDQUFDLE1BQU07QUFBQSxVQUNqQixzQkFBc0I7QUFBQSxRQUN4QjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixRQUFRLENBQUM7QUFBQSxRQUNULHlCQUF5QjtBQUFBLFFBQ3pCLHVCQUF1QjtBQUFBLFFBQ3ZCLFVBQVUsQ0FBQztBQUFBLE1BQ2I7QUFBQSxJQUNGLENBQUM7QUFFRCxVQUFNLFVBQVUsbUJBQW1CLE9BQU8sUUFBUSxPQUFPO0FBRXpELFVBQU0sV0FBVyxjQUFjLE9BQU87QUFDdEMsUUFDRSxZQUNBLE9BQU8sYUFBYSxZQUNwQixVQUFVLFlBQ1YsT0FBUSxTQUErQixTQUFTLFVBQ2hEO0FBQ0EsYUFBUSxTQUE4QjtBQUFBLElBQ3hDO0FBQ0EsV0FBTztBQUFBLEVBQ1QsU0FBUyxPQUFPO0FBSWQsb0JBQWdCLCtCQUErQixhQUFhLEtBQUssQ0FBQyxJQUFJO0FBQUEsTUFDcEUsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFsRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
