#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  esm_exports,
  index_node_http_exports,
  init_esm,
  init_index_node_http,
  require_src
} from "./chunk-6HPMQ2CQ.mjs";
import "./chunk-WGKW7MCW.mjs";
import "./chunk-GG7RJVEZ.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/node/OTLPTraceExporter.js
var require_OTLPTraceExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/node/OTLPTraceExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPTraceExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config, "TRACES", "v1/traces", {
          "Content-Type": "application/x-protobuf"
        }), otlp_transformer_1.ProtobufTraceSerializer));
      }
    };
    exports.OTLPTraceExporter = OTLPTraceExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var OTLPTraceExporter_1 = require_OTLPTraceExporter();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return OTLPTraceExporter_1.OTLPTraceExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return node_1.OTLPTraceExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-proto/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return platform_1.OTLPTraceExporter;
    } });
  }
});
export default require_src2();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG9AMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG8vc3JjL3BsYXRmb3JtL25vZGUvT1RMUFRyYWNlRXhwb3J0ZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG9AMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG8vc3JjL3BsYXRmb3JtL25vZGUvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG9AMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtcHJvdG8vc3JjL3BsYXRmb3JtL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci10cmFjZS1vdGxwLXByb3RvQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci10cmFjZS1vdGxwLXByb3RvL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB0eXBlIHsgUmVhZGFibGVTcGFuLCBTcGFuRXhwb3J0ZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZGstdHJhY2UtYmFzZSc7XG5pbXBvcnQgdHlwZSB7IE9UTFBFeHBvcnRlck5vZGVDb25maWdCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IE9UTFBFeHBvcnRlckJhc2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2UnO1xuaW1wb3J0IHsgUHJvdG9idWZUcmFjZVNlcmlhbGl6ZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIGNyZWF0ZU90bHBIdHRwRXhwb3J0RGVsZWdhdGUsXG4gIGNvbnZlcnRMZWdhY3lIdHRwT3B0aW9ucyxcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlL25vZGUtaHR0cCc7XG5cbi8qKlxuICogQ29sbGVjdG9yIFRyYWNlIEV4cG9ydGVyIGZvciBOb2RlIHdpdGggcHJvdG9idWZcbiAqL1xuZXhwb3J0IGNsYXNzIE9UTFBUcmFjZUV4cG9ydGVyXG4gIGV4dGVuZHMgT1RMUEV4cG9ydGVyQmFzZTxSZWFkYWJsZVNwYW5bXT5cbiAgaW1wbGVtZW50cyBTcGFuRXhwb3J0ZXJcbntcbiAgY29uc3RydWN0b3IoY29uZmlnOiBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSA9IHt9KSB7XG4gICAgc3VwZXIoXG4gICAgICBjcmVhdGVPdGxwSHR0cEV4cG9ydERlbGVnYXRlKFxuICAgICAgICBjb252ZXJ0TGVnYWN5SHR0cE9wdGlvbnMoY29uZmlnLCAnVFJBQ0VTJywgJ3YxL3RyYWNlcycsIHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtcHJvdG9idWYnLFxuICAgICAgICB9KSxcbiAgICAgICAgUHJvdG9idWZUcmFjZVNlcmlhbGl6ZXJcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBUcmFjZUV4cG9ydGVyIH0gZnJvbSAnLi9PVExQVHJhY2VFeHBvcnRlcic7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5leHBvcnQgeyBPVExQVHJhY2VFeHBvcnRlciB9IGZyb20gJy4vbm9kZSc7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5leHBvcnQgeyBPVExQVHJhY2VFeHBvcnRlciB9IGZyb20gJy4vcGxhdGZvcm0nO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxRQUFBLHVCQUFBO0FBQ0EsUUFBQSxxQkFBQTtBQUNBLFFBQUEsY0FBQTtBQVFBLFFBQWEsb0JBQWIsY0FDVSxxQkFBQSxpQkFBZ0M7TUFHeEMsWUFBWSxTQUFxQyxDQUFBLEdBQUU7QUFDakQsZUFDRSxHQUFBLFlBQUEsK0JBQ0UsR0FBQSxZQUFBLDBCQUF5QixRQUFRLFVBQVUsYUFBYTtVQUN0RCxnQkFBZ0I7U0FDakIsR0FDRCxtQkFBQSx1QkFBdUIsQ0FDeEI7TUFFTDs7QUFiRixZQUFBLG9CQUFBOzs7Ozs7Ozs7O0FDWkEsUUFBQSxzQkFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHFCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsb0JBQUE7SUFBaUIsRUFBQSxDQUFBOzs7Ozs7Ozs7O0FDRDFCLFFBQUEsU0FBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHFCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsT0FBQTtJQUFpQixFQUFBLENBQUE7Ozs7Ozs7OztBQ0ExQixRQUFBLGFBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxxQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLFdBQUE7SUFBaUIsRUFBQSxDQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
