#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import "./chunk-O5PZ3G6I.mjs";

// src/ssh/createSSHSession.ts
var SSHSessionError = class extends Error {
};
function createStubSession(cwd) {
  return {
    remoteCwd: cwd,
    proc: { exitCode: 0, signalCode: null },
    proxy: { stop() {
    } },
    createManager() {
      return {
        connect() {
        },
        disconnect() {
        },
        async sendMessage() {
          return false;
        },
        sendInterrupt() {
        },
        respondToPermissionRequest() {
        }
      };
    },
    getStderrTail() {
      return "";
    }
  };
}
async function createSSHSession(input) {
  return createStubSession(input.cwd ?? process.cwd());
}
function createLocalSSHSession(input) {
  return createStubSession(input.cwd ?? process.cwd());
}
export {
  SSHSessionError,
  createLocalSSHSession,
  createSSHSession
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NzaC9jcmVhdGVTU0hTZXNzaW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgdHlwZSBTU0hTZXNzaW9uID0ge1xuICByZW1vdGVDd2Q6IHN0cmluZ1xuICBwcm9jOiB7IGV4aXRDb2RlOiBudW1iZXIgfCBudWxsOyBzaWduYWxDb2RlOiBzdHJpbmcgfCBudWxsIH1cbiAgcHJveHk6IHsgc3RvcCgpOiB2b2lkIH1cbiAgY3JlYXRlTWFuYWdlcigpOiB7XG4gICAgY29ubmVjdCgpOiB2b2lkXG4gICAgZGlzY29ubmVjdCgpOiB2b2lkXG4gICAgc2VuZE1lc3NhZ2UoKTogUHJvbWlzZTxib29sZWFuPlxuICAgIHNlbmRJbnRlcnJ1cHQoKTogdm9pZFxuICAgIHJlc3BvbmRUb1Blcm1pc3Npb25SZXF1ZXN0KCk6IHZvaWRcbiAgfVxuICBnZXRTdGRlcnJUYWlsKCk6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgU1NIU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuZnVuY3Rpb24gY3JlYXRlU3R1YlNlc3Npb24oY3dkOiBzdHJpbmcpOiBTU0hTZXNzaW9uIHtcbiAgcmV0dXJuIHtcbiAgICByZW1vdGVDd2Q6IGN3ZCxcbiAgICBwcm9jOiB7IGV4aXRDb2RlOiAwLCBzaWduYWxDb2RlOiBudWxsIH0sXG4gICAgcHJveHk6IHsgc3RvcCgpIHt9IH0sXG4gICAgY3JlYXRlTWFuYWdlcigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbm5lY3QoKSB7fSxcbiAgICAgICAgZGlzY29ubmVjdCgpIHt9LFxuICAgICAgICBhc3luYyBzZW5kTWVzc2FnZSgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2VuZEludGVycnVwdCgpIHt9LFxuICAgICAgICByZXNwb25kVG9QZXJtaXNzaW9uUmVxdWVzdCgpIHt9LFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U3RkZXJyVGFpbCgpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNTSFNlc3Npb24oaW5wdXQ6IHtcbiAgY3dkPzogc3RyaW5nXG59KTogUHJvbWlzZTxTU0hTZXNzaW9uPiB7XG4gIHJldHVybiBjcmVhdGVTdHViU2Vzc2lvbihpbnB1dC5jd2QgPz8gcHJvY2Vzcy5jd2QoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsU1NIU2Vzc2lvbihpbnB1dDogeyBjd2Q/OiBzdHJpbmcgfSk6IFNTSFNlc3Npb24ge1xuICByZXR1cm4gY3JlYXRlU3R1YlNlc3Npb24oaW5wdXQuY3dkID8/IHByb2Nlc3MuY3dkKCkpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFjTyxJQUFNLGtCQUFOLGNBQThCLE1BQU07QUFBQztBQUU1QyxTQUFTLGtCQUFrQixLQUF5QjtBQUNsRCxTQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxNQUFNLEVBQUUsVUFBVSxHQUFHLFlBQVksS0FBSztBQUFBLElBQ3RDLE9BQU8sRUFBRSxPQUFPO0FBQUEsSUFBQyxFQUFFO0FBQUEsSUFDbkIsZ0JBQWdCO0FBQ2QsYUFBTztBQUFBLFFBQ0wsVUFBVTtBQUFBLFFBQUM7QUFBQSxRQUNYLGFBQWE7QUFBQSxRQUFDO0FBQUEsUUFDZCxNQUFNLGNBQWM7QUFDbEIsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUFDO0FBQUEsUUFDakIsNkJBQTZCO0FBQUEsUUFBQztBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxlQUFzQixpQkFBaUIsT0FFZjtBQUN0QixTQUFPLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxJQUFJLENBQUM7QUFDckQ7QUFFTyxTQUFTLHNCQUFzQixPQUFxQztBQUN6RSxTQUFPLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxJQUFJLENBQUM7QUFDckQ7IiwKICAibmFtZXMiOiBbXQp9Cg==
