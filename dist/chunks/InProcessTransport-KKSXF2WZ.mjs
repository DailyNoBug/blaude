#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/mcp/InProcessTransport.ts
function createLinkedTransportPair() {
  const a = new InProcessTransport();
  const b = new InProcessTransport();
  a._setPeer(b);
  b._setPeer(a);
  return [a, b];
}
var InProcessTransport;
var init_InProcessTransport = __esm({
  "src/services/mcp/InProcessTransport.ts"() {
    InProcessTransport = class {
      peer;
      closed = false;
      onclose;
      onerror;
      onmessage;
      /** @internal */
      _setPeer(peer) {
        this.peer = peer;
      }
      async start() {
      }
      async send(message) {
        if (this.closed) {
          throw new Error("Transport is closed");
        }
        queueMicrotask(() => {
          this.peer?.onmessage?.(message);
        });
      }
      async close() {
        if (this.closed) {
          return;
        }
        this.closed = true;
        this.onclose?.();
        if (this.peer && !this.peer.closed) {
          this.peer.closed = true;
          this.peer.onclose?.();
        }
      }
    };
  }
});
init_InProcessTransport();
export {
  createLinkedTransportPair
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL21jcC9JblByb2Nlc3NUcmFuc3BvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgVHJhbnNwb3J0IH0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zaGFyZWQvdHJhbnNwb3J0LmpzJ1xuaW1wb3J0IHR5cGUgeyBKU09OUlBDTWVzc2FnZSB9IGZyb20gJ0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvdHlwZXMuanMnXG5cbi8qKlxuICogSW4tcHJvY2VzcyBsaW5rZWQgdHJhbnNwb3J0IHBhaXIgZm9yIHJ1bm5pbmcgYW4gTUNQIHNlcnZlciBhbmQgY2xpZW50XG4gKiBpbiB0aGUgc2FtZSBwcm9jZXNzIHdpdGhvdXQgc3Bhd25pbmcgYSBzdWJwcm9jZXNzLlxuICpcbiAqIGBzZW5kKClgIG9uIG9uZSBzaWRlIGRlbGl2ZXJzIHRvIGBvbm1lc3NhZ2VgIG9uIHRoZSBvdGhlci5cbiAqIGBjbG9zZSgpYCBvbiBlaXRoZXIgc2lkZSBjYWxscyBgb25jbG9zZWAgb24gYm90aC5cbiAqL1xuY2xhc3MgSW5Qcm9jZXNzVHJhbnNwb3J0IGltcGxlbWVudHMgVHJhbnNwb3J0IHtcbiAgcHJpdmF0ZSBwZWVyOiBJblByb2Nlc3NUcmFuc3BvcnQgfCB1bmRlZmluZWRcbiAgcHJpdmF0ZSBjbG9zZWQgPSBmYWxzZVxuXG4gIG9uY2xvc2U/OiAoKSA9PiB2b2lkXG4gIG9uZXJyb3I/OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkXG4gIG9ubWVzc2FnZT86IChtZXNzYWdlOiBKU09OUlBDTWVzc2FnZSkgPT4gdm9pZFxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NldFBlZXIocGVlcjogSW5Qcm9jZXNzVHJhbnNwb3J0KTogdm9pZCB7XG4gICAgdGhpcy5wZWVyID0gcGVlclxuICB9XG5cbiAgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7fVxuXG4gIGFzeW5jIHNlbmQobWVzc2FnZTogSlNPTlJQQ01lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNwb3J0IGlzIGNsb3NlZCcpXG4gICAgfVxuICAgIC8vIERlbGl2ZXIgdG8gdGhlIG90aGVyIHNpZGUgYXN5bmNocm9ub3VzbHkgdG8gYXZvaWQgc3RhY2sgZGVwdGggaXNzdWVzXG4gICAgLy8gd2l0aCBzeW5jaHJvbm91cyByZXF1ZXN0L3Jlc3BvbnNlIGN5Y2xlc1xuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIHRoaXMucGVlcj8ub25tZXNzYWdlPy4obWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlXG4gICAgdGhpcy5vbmNsb3NlPy4oKVxuICAgIC8vIENsb3NlIHRoZSBwZWVyIGlmIGl0IGhhc24ndCBhbHJlYWR5IGNsb3NlZFxuICAgIGlmICh0aGlzLnBlZXIgJiYgIXRoaXMucGVlci5jbG9zZWQpIHtcbiAgICAgIHRoaXMucGVlci5jbG9zZWQgPSB0cnVlXG4gICAgICB0aGlzLnBlZXIub25jbG9zZT8uKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFpciBvZiBsaW5rZWQgdHJhbnNwb3J0cyBmb3IgaW4tcHJvY2VzcyBNQ1AgY29tbXVuaWNhdGlvbi5cbiAqIE1lc3NhZ2VzIHNlbnQgb24gb25lIHRyYW5zcG9ydCBhcmUgZGVsaXZlcmVkIHRvIHRoZSBvdGhlcidzIGBvbm1lc3NhZ2VgLlxuICpcbiAqIEByZXR1cm5zIFtjbGllbnRUcmFuc3BvcnQsIHNlcnZlclRyYW5zcG9ydF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmtlZFRyYW5zcG9ydFBhaXIoKTogW1RyYW5zcG9ydCwgVHJhbnNwb3J0XSB7XG4gIGNvbnN0IGEgPSBuZXcgSW5Qcm9jZXNzVHJhbnNwb3J0KClcbiAgY29uc3QgYiA9IG5ldyBJblByb2Nlc3NUcmFuc3BvcnQoKVxuICBhLl9zZXRQZWVyKGIpXG4gIGIuX3NldFBlZXIoYSlcbiAgcmV0dXJuIFthLCBiXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUF3RE8sU0FBUyw0QkFBb0Q7QUFDbEUsUUFBTSxJQUFJLElBQUksbUJBQW1CO0FBQ2pDLFFBQU0sSUFBSSxJQUFJLG1CQUFtQjtBQUNqQyxJQUFFLFNBQVMsQ0FBQztBQUNaLElBQUUsU0FBUyxDQUFDO0FBQ1osU0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNkO0FBOURBLElBVU07QUFWTjtBQUFBO0FBVUEsSUFBTSxxQkFBTixNQUE4QztBQUFBLE1BQ3BDO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFFakI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFHQSxTQUFTLE1BQWdDO0FBQ3ZDLGFBQUssT0FBTztBQUFBLE1BQ2Q7QUFBQSxNQUVBLE1BQU0sUUFBdUI7QUFBQSxNQUFDO0FBQUEsTUFFOUIsTUFBTSxLQUFLLFNBQXdDO0FBQ2pELFlBQUksS0FBSyxRQUFRO0FBQ2YsZ0JBQU0sSUFBSSxNQUFNLHFCQUFxQjtBQUFBLFFBQ3ZDO0FBR0EsdUJBQWUsTUFBTTtBQUNuQixlQUFLLE1BQU0sWUFBWSxPQUFPO0FBQUEsUUFDaEMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUVBLE1BQU0sUUFBdUI7QUFDM0IsWUFBSSxLQUFLLFFBQVE7QUFDZjtBQUFBLFFBQ0Y7QUFDQSxhQUFLLFNBQVM7QUFDZCxhQUFLLFVBQVU7QUFFZixZQUFJLEtBQUssUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRO0FBQ2xDLGVBQUssS0FBSyxTQUFTO0FBQ25CLGVBQUssS0FBSyxVQUFVO0FBQUEsUUFDdEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
