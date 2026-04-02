#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  createCliExecutor,
  init_executor
} from "./chunk-75K7OLET.mjs";
import {
  init_swiftLoader,
  requireComputerUseSwift
} from "./chunk-NE3WJ556.mjs";
import {
  getChicagoEnabled,
  getChicagoSubGates,
  init_gates
} from "./chunk-3W743YKD.mjs";
import {
  JSONRPCMessageSchema,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import {
  COMPUTER_USE_MCP_SERVER_NAME,
  init_common
} from "./chunk-H3V45RZC.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/computerUse/hostAdapter.ts
import { format } from "util";
function getComputerUseHostAdapter() {
  if (cached) return cached;
  cached = {
    serverName: COMPUTER_USE_MCP_SERVER_NAME,
    logger: new DebugLogger(),
    executor: createCliExecutor({
      getMouseAnimationEnabled: () => getChicagoSubGates().mouseAnimation,
      getHideBeforeActionEnabled: () => getChicagoSubGates().hideBeforeAction
    }),
    ensureOsPermissions: async () => {
      const cu = requireComputerUseSwift();
      const accessibility = cu.tcc.checkAccessibility();
      const screenRecording = cu.tcc.checkScreenRecording();
      return accessibility && screenRecording ? { granted: true } : { granted: false, accessibility, screenRecording };
    },
    isDisabled: () => !getChicagoEnabled(),
    getSubGates: getChicagoSubGates,
    // cleanup.ts always unhides at turn end — no user preference to disable it.
    getAutoUnhideEnabled: () => true,
    // Pixel-validation JPEG decode+crop. MUST be synchronous (the package
    // does `patch1.equals(patch2)` directly on the return value). Cowork uses
    // Electron's `nativeImage` (sync); our `image-processor-napi` is
    // sharp-compatible and async-only. Returning null → validation skipped,
    // click proceeds — the designed fallback per `PixelCompareResult.skipped`.
    // The sub-gate defaults to false anyway.
    cropRawPatch: () => null
  };
  return cached;
}
var DebugLogger, cached;
var init_hostAdapter = __esm({
  "src/utils/computerUse/hostAdapter.ts"() {
    init_debug();
    init_common();
    init_executor();
    init_gates();
    init_swiftLoader();
    DebugLogger = class {
      silly(message, ...args) {
        logForDebugging(format(message, ...args), { level: "debug" });
      }
      debug(message, ...args) {
        logForDebugging(format(message, ...args), { level: "debug" });
      }
      info(message, ...args) {
        logForDebugging(format(message, ...args), { level: "info" });
      }
      warn(message, ...args) {
        logForDebugging(format(message, ...args), { level: "warn" });
      }
      error(message, ...args) {
        logForDebugging(format(message, ...args), { level: "error" });
      }
    };
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + "\n";
}
var ReadBuffer;
var init_stdio = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js"() {
    init_types();
    ReadBuffer = class {
      append(chunk) {
        this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
      }
      readMessage() {
        if (!this._buffer) {
          return null;
        }
        const index = this._buffer.indexOf("\n");
        if (index === -1) {
          return null;
        }
        const line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(index + 1);
        return deserializeMessage(line);
      }
      clear() {
        this._buffer = void 0;
      }
    };
  }
});

export {
  ReadBuffer,
  serializeMessage,
  init_stdio,
  getComputerUseHostAdapter,
  init_hostAdapter
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NvbXB1dGVyVXNlL2hvc3RBZGFwdGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9kZWxjb250ZXh0cHJvdG9jb2wrc2RrQDEuMjkuMF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc3JjL3NoYXJlZC9zdGRpby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUge1xuICBDb21wdXRlclVzZUhvc3RBZGFwdGVyLFxuICBMb2dnZXIsXG59IGZyb20gJ0BhbnQvY29tcHV0ZXItdXNlLW1jcC90eXBlcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IENPTVBVVEVSX1VTRV9NQ1BfU0VSVkVSX05BTUUgfSBmcm9tICcuL2NvbW1vbi5qcydcbmltcG9ydCB7IGNyZWF0ZUNsaUV4ZWN1dG9yIH0gZnJvbSAnLi9leGVjdXRvci5qcydcbmltcG9ydCB7IGdldENoaWNhZ29FbmFibGVkLCBnZXRDaGljYWdvU3ViR2F0ZXMgfSBmcm9tICcuL2dhdGVzLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZUNvbXB1dGVyVXNlU3dpZnQgfSBmcm9tICcuL3N3aWZ0TG9hZGVyLmpzJ1xuXG5jbGFzcyBEZWJ1Z0xvZ2dlciBpbXBsZW1lbnRzIExvZ2dlciB7XG4gIHNpbGx5KG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2RlYnVnJyB9KVxuICB9XG4gIGRlYnVnKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2RlYnVnJyB9KVxuICB9XG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnaW5mbycgfSlcbiAgfVxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ3dhcm4nIH0pXG4gIH1cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnZXJyb3InIH0pXG4gIH1cbn1cblxubGV0IGNhY2hlZDogQ29tcHV0ZXJVc2VIb3N0QWRhcHRlciB8IHVuZGVmaW5lZFxuXG4vKipcbiAqIFByb2Nlc3MtbGlmZXRpbWUgc2luZ2xldG9uLiBCdWlsdCBvbmNlIG9uIGZpcnN0IENVIHRvb2wgY2FsbDsgbmF0aXZlIG1vZHVsZXNcbiAqIChib3RoIGBAYW50L2NvbXB1dGVyLXVzZS1pbnB1dGAgYW5kIGBAYW50L2NvbXB1dGVyLXVzZS1zd2lmdGApIGFyZSBsb2FkZWRcbiAqIGhlcmUgdmlhIHRoZSBleGVjdXRvciBmYWN0b3J5LCB3aGljaCB0aHJvd3Mgb24gbG9hZCBmYWlsdXJlIFx1MjAxNCB0aGVyZSBpcyBub1xuICogZGVncmFkZWQgbW9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXB1dGVyVXNlSG9zdEFkYXB0ZXIoKTogQ29tcHV0ZXJVc2VIb3N0QWRhcHRlciB7XG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRcbiAgY2FjaGVkID0ge1xuICAgIHNlcnZlck5hbWU6IENPTVBVVEVSX1VTRV9NQ1BfU0VSVkVSX05BTUUsXG4gICAgbG9nZ2VyOiBuZXcgRGVidWdMb2dnZXIoKSxcbiAgICBleGVjdXRvcjogY3JlYXRlQ2xpRXhlY3V0b3Ioe1xuICAgICAgZ2V0TW91c2VBbmltYXRpb25FbmFibGVkOiAoKSA9PiBnZXRDaGljYWdvU3ViR2F0ZXMoKS5tb3VzZUFuaW1hdGlvbixcbiAgICAgIGdldEhpZGVCZWZvcmVBY3Rpb25FbmFibGVkOiAoKSA9PiBnZXRDaGljYWdvU3ViR2F0ZXMoKS5oaWRlQmVmb3JlQWN0aW9uLFxuICAgIH0pLFxuICAgIGVuc3VyZU9zUGVybWlzc2lvbnM6IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ID0gcmVxdWlyZUNvbXB1dGVyVXNlU3dpZnQoKVxuICAgICAgY29uc3QgYWNjZXNzaWJpbGl0eSA9IGN1LnRjYy5jaGVja0FjY2Vzc2liaWxpdHkoKVxuICAgICAgY29uc3Qgc2NyZWVuUmVjb3JkaW5nID0gY3UudGNjLmNoZWNrU2NyZWVuUmVjb3JkaW5nKClcbiAgICAgIHJldHVybiBhY2Nlc3NpYmlsaXR5ICYmIHNjcmVlblJlY29yZGluZ1xuICAgICAgICA/IHsgZ3JhbnRlZDogdHJ1ZSB9XG4gICAgICAgIDogeyBncmFudGVkOiBmYWxzZSwgYWNjZXNzaWJpbGl0eSwgc2NyZWVuUmVjb3JkaW5nIH1cbiAgICB9LFxuICAgIGlzRGlzYWJsZWQ6ICgpID0+ICFnZXRDaGljYWdvRW5hYmxlZCgpLFxuICAgIGdldFN1YkdhdGVzOiBnZXRDaGljYWdvU3ViR2F0ZXMsXG4gICAgLy8gY2xlYW51cC50cyBhbHdheXMgdW5oaWRlcyBhdCB0dXJuIGVuZCBcdTIwMTQgbm8gdXNlciBwcmVmZXJlbmNlIHRvIGRpc2FibGUgaXQuXG4gICAgZ2V0QXV0b1VuaGlkZUVuYWJsZWQ6ICgpID0+IHRydWUsXG5cbiAgICAvLyBQaXhlbC12YWxpZGF0aW9uIEpQRUcgZGVjb2RlK2Nyb3AuIE1VU1QgYmUgc3luY2hyb25vdXMgKHRoZSBwYWNrYWdlXG4gICAgLy8gZG9lcyBgcGF0Y2gxLmVxdWFscyhwYXRjaDIpYCBkaXJlY3RseSBvbiB0aGUgcmV0dXJuIHZhbHVlKS4gQ293b3JrIHVzZXNcbiAgICAvLyBFbGVjdHJvbidzIGBuYXRpdmVJbWFnZWAgKHN5bmMpOyBvdXIgYGltYWdlLXByb2Nlc3Nvci1uYXBpYCBpc1xuICAgIC8vIHNoYXJwLWNvbXBhdGlibGUgYW5kIGFzeW5jLW9ubHkuIFJldHVybmluZyBudWxsIFx1MjE5MiB2YWxpZGF0aW9uIHNraXBwZWQsXG4gICAgLy8gY2xpY2sgcHJvY2VlZHMgXHUyMDE0IHRoZSBkZXNpZ25lZCBmYWxsYmFjayBwZXIgYFBpeGVsQ29tcGFyZVJlc3VsdC5za2lwcGVkYC5cbiAgICAvLyBUaGUgc3ViLWdhdGUgZGVmYXVsdHMgdG8gZmFsc2UgYW55d2F5LlxuICAgIGNyb3BSYXdQYXRjaDogKCkgPT4gbnVsbCxcbiAgfVxuICByZXR1cm4gY2FjaGVkXG59XG4iLCBudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxTQUFTLGNBQWM7QUFpQ2hCLFNBQVMsNEJBQW9EO0FBQ2xFLE1BQUksT0FBUSxRQUFPO0FBQ25CLFdBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFFBQVEsSUFBSSxZQUFZO0FBQUEsSUFDeEIsVUFBVSxrQkFBa0I7QUFBQSxNQUMxQiwwQkFBMEIsTUFBTSxtQkFBbUIsRUFBRTtBQUFBLE1BQ3JELDRCQUE0QixNQUFNLG1CQUFtQixFQUFFO0FBQUEsSUFDekQsQ0FBQztBQUFBLElBQ0QscUJBQXFCLFlBQVk7QUFDL0IsWUFBTSxLQUFLLHdCQUF3QjtBQUNuQyxZQUFNLGdCQUFnQixHQUFHLElBQUksbUJBQW1CO0FBQ2hELFlBQU0sa0JBQWtCLEdBQUcsSUFBSSxxQkFBcUI7QUFDcEQsYUFBTyxpQkFBaUIsa0JBQ3BCLEVBQUUsU0FBUyxLQUFLLElBQ2hCLEVBQUUsU0FBUyxPQUFPLGVBQWUsZ0JBQWdCO0FBQUEsSUFDdkQ7QUFBQSxJQUNBLFlBQVksTUFBTSxDQUFDLGtCQUFrQjtBQUFBLElBQ3JDLGFBQWE7QUFBQTtBQUFBLElBRWIsc0JBQXNCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVE1QixjQUFjLE1BQU07QUFBQSxFQUN0QjtBQUNBLFNBQU87QUFDVDtBQXBFQSxJQVdNLGFBa0JGO0FBN0JKO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxjQUFOLE1BQW9DO0FBQUEsTUFDbEMsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsS0FBSyxZQUFvQixNQUF1QjtBQUM5Qyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFBQSxNQUM3RDtBQUFBLE1BQ0EsS0FBSyxZQUFvQixNQUF1QjtBQUM5Qyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFBQSxNQUM3RDtBQUFBLE1BQ0EsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNLTSxTQUFVLG1CQUFtQixNQUFZO0FBQzNDLFNBQU8scUJBQXFCLE1BQU0sS0FBSyxNQUFNLElBQUksQ0FBQztBQUN0RDtBQUVNLFNBQVUsaUJBQWlCLFNBQXVCO0FBQ3BELFNBQU8sS0FBSyxVQUFVLE9BQU8sSUFBSTtBQUNyQztBQXRDQSxJQUthO0FBTGI7OztBQUtNLElBQU8sYUFBUCxNQUFpQjtNQUduQixPQUFPLE9BQWE7QUFDaEIsYUFBSyxVQUFVLEtBQUssVUFBVSxPQUFPLE9BQU8sQ0FBQyxLQUFLLFNBQVMsS0FBSyxDQUFDLElBQUk7TUFDekU7TUFFQSxjQUFXO0FBQ1AsWUFBSSxDQUFDLEtBQUssU0FBUztBQUNmLGlCQUFPO1FBQ1g7QUFFQSxjQUFNLFFBQVEsS0FBSyxRQUFRLFFBQVEsSUFBSTtBQUN2QyxZQUFJLFVBQVUsSUFBSTtBQUNkLGlCQUFPO1FBQ1g7QUFFQSxjQUFNLE9BQU8sS0FBSyxRQUFRLFNBQVMsUUFBUSxHQUFHLEtBQUssRUFBRSxRQUFRLE9BQU8sRUFBRTtBQUN0RSxhQUFLLFVBQVUsS0FBSyxRQUFRLFNBQVMsUUFBUSxDQUFDO0FBQzlDLGVBQU8sbUJBQW1CLElBQUk7TUFDbEM7TUFFQSxRQUFLO0FBQ0QsYUFBSyxVQUFVO01BQ25COzs7OyIsCiAgIm5hbWVzIjogW10KfQo=
