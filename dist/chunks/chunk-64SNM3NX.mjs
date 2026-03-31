#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// src/assistant/index.ts
var assistant_exports = {};
__export(assistant_exports, {
  getAssistantActivationPath: () => getAssistantActivationPath,
  getAssistantSystemPromptAddendum: () => getAssistantSystemPromptAddendum,
  initializeAssistantTeam: () => initializeAssistantTeam,
  isAssistantForced: () => isAssistantForced,
  isAssistantMode: () => isAssistantMode,
  markAssistantForced: () => markAssistantForced
});
function hasAssistantFlag() {
  return process.argv.includes("--assistant");
}
function isAssistantMode() {
  return assistantForced || hasAssistantFlag();
}
function markAssistantForced() {
  assistantForced = true;
}
function isAssistantForced() {
  return assistantForced;
}
async function initializeAssistantTeam() {
  return {
    mode: "assistant-compat",
    members: []
  };
}
function getAssistantSystemPromptAddendum() {
  return "Assistant mode compatibility layer is active.";
}
function getAssistantActivationPath() {
  return assistantForced ? "forced" : "cli";
}
var assistantForced;
var init_assistant = __esm({
  "src/assistant/index.ts"() {
    assistantForced = false;
  }
});

export {
  isAssistantMode,
  markAssistantForced,
  isAssistantForced,
  initializeAssistantTeam,
  getAssistantSystemPromptAddendum,
  getAssistantActivationPath,
  assistant_exports,
  init_assistant
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2Fzc2lzdGFudC9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidHlwZSBBc3Npc3RhbnRUZWFtQ29udGV4dCA9IHtcbiAgbW9kZTogJ2Fzc2lzdGFudC1jb21wYXQnXG4gIG1lbWJlcnM6IFtdXG59XG5cbmxldCBhc3Npc3RhbnRGb3JjZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBoYXNBc3Npc3RhbnRGbGFnKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWFzc2lzdGFudCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2lzdGFudE1vZGUoKTogYm9vbGVhbiB7XG4gIHJldHVybiBhc3Npc3RhbnRGb3JjZWQgfHwgaGFzQXNzaXN0YW50RmxhZygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzaXN0YW50Rm9yY2VkKCk6IHZvaWQge1xuICBhc3Npc3RhbnRGb3JjZWQgPSB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2lzdGFudEZvcmNlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGFzc2lzdGFudEZvcmNlZFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUFzc2lzdGFudFRlYW0oKTogUHJvbWlzZTxBc3Npc3RhbnRUZWFtQ29udGV4dD4ge1xuICByZXR1cm4ge1xuICAgIG1vZGU6ICdhc3Npc3RhbnQtY29tcGF0JyxcbiAgICBtZW1iZXJzOiBbXSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzaXN0YW50U3lzdGVtUHJvbXB0QWRkZW5kdW0oKTogc3RyaW5nIHtcbiAgcmV0dXJuICdBc3Npc3RhbnQgbW9kZSBjb21wYXRpYmlsaXR5IGxheWVyIGlzIGFjdGl2ZS4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3Npc3RhbnRBY3RpdmF0aW9uUGF0aCgpOiBzdHJpbmcge1xuICByZXR1cm4gYXNzaXN0YW50Rm9yY2VkID8gJ2ZvcmNlZCcgOiAnY2xpJ1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsU0FBUyxtQkFBNEI7QUFDbkMsU0FBTyxRQUFRLEtBQUssU0FBUyxhQUFhO0FBQzVDO0FBRU8sU0FBUyxrQkFBMkI7QUFDekMsU0FBTyxtQkFBbUIsaUJBQWlCO0FBQzdDO0FBRU8sU0FBUyxzQkFBNEI7QUFDMUMsb0JBQWtCO0FBQ3BCO0FBRU8sU0FBUyxvQkFBNkI7QUFDM0MsU0FBTztBQUNUO0FBRUEsZUFBc0IsMEJBQXlEO0FBQzdFLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVMsQ0FBQztBQUFBLEVBQ1o7QUFDRjtBQUVPLFNBQVMsbUNBQTJDO0FBQ3pELFNBQU87QUFDVDtBQUVPLFNBQVMsNkJBQXFDO0FBQ25ELFNBQU8sa0JBQWtCLFdBQVc7QUFDdEM7QUFwQ0EsSUFLSTtBQUxKO0FBQUE7QUFLQSxJQUFJLGtCQUFrQjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
