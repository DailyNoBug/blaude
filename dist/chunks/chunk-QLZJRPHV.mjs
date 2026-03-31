#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/udsMessaging.ts
var udsMessaging_exports = {};
__export(udsMessaging_exports, {
  getDefaultUdsSocketPath: () => getDefaultUdsSocketPath,
  getUdsMessagingSocketPath: () => getUdsMessagingSocketPath,
  notifyEnqueue: () => notifyEnqueue,
  setOnEnqueue: () => setOnEnqueue,
  startUdsMessaging: () => startUdsMessaging
});
import os from "os";
import path from "path";
function getDefaultUdsSocketPath() {
  return path.join(os.tmpdir(), `blaude-${process.pid}.sock`);
}
async function startUdsMessaging(socketPath, _options) {
  currentSocketPath = socketPath;
}
function getUdsMessagingSocketPath() {
  return currentSocketPath;
}
function setOnEnqueue(callback) {
  onEnqueue = callback;
}
function notifyEnqueue() {
  onEnqueue?.();
}
var currentSocketPath, onEnqueue;
var init_udsMessaging = __esm({
  "src/utils/udsMessaging.ts"() {
    currentSocketPath = null;
    onEnqueue = null;
  }
});

export {
  getDefaultUdsSocketPath,
  startUdsMessaging,
  getUdsMessagingSocketPath,
  setOnEnqueue,
  notifyEnqueue,
  udsMessaging_exports,
  init_udsMessaging
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3Vkc01lc3NhZ2luZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IG9zIGZyb20gJ29zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxubGV0IGN1cnJlbnRTb2NrZXRQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxubGV0IG9uRW5xdWV1ZTogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRVZHNTb2NrZXRQYXRoKCk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmpvaW4ob3MudG1wZGlyKCksIGBibGF1ZGUtJHtwcm9jZXNzLnBpZH0uc29ja2ApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFVkc01lc3NhZ2luZyhcbiAgc29ja2V0UGF0aDogc3RyaW5nLFxuICBfb3B0aW9ucz86IHsgaXNFeHBsaWNpdD86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjdXJyZW50U29ja2V0UGF0aCA9IHNvY2tldFBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVkc01lc3NhZ2luZ1NvY2tldFBhdGgoKTogc3RyaW5nIHwgbnVsbCB7XG4gIHJldHVybiBjdXJyZW50U29ja2V0UGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T25FbnF1ZXVlKGNhbGxiYWNrOiAoKCkgPT4gdm9pZCkgfCBudWxsKTogdm9pZCB7XG4gIG9uRW5xdWV1ZSA9IGNhbGxiYWNrXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlFbnF1ZXVlKCk6IHZvaWQge1xuICBvbkVucXVldWU/LigpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBS1YsU0FBUywwQkFBa0M7QUFDaEQsU0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsVUFBVSxRQUFRLEdBQUcsT0FBTztBQUM1RDtBQUVBLGVBQXNCLGtCQUNwQixZQUNBLFVBQ2U7QUFDZixzQkFBb0I7QUFDdEI7QUFFTyxTQUFTLDRCQUEyQztBQUN6RCxTQUFPO0FBQ1Q7QUFFTyxTQUFTLGFBQWEsVUFBcUM7QUFDaEUsY0FBWTtBQUNkO0FBRU8sU0FBUyxnQkFBc0I7QUFDcEMsY0FBWTtBQUNkO0FBM0JBLElBR0ksbUJBQ0E7QUFKSjtBQUFBO0FBR0EsSUFBSSxvQkFBbUM7QUFDdkMsSUFBSSxZQUFpQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
