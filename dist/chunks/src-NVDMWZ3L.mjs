#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  esm_exports,
  index_node_http_exports,
  init_esm,
  init_index_node_http,
  require_src
} from "./chunk-ZNEEN5QH.mjs";
import "./chunk-EZURCALM.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-HQK4A2IB.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/node/OTLPTraceExporter.js
var require_OTLPTraceExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/node/OTLPTraceExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPTraceExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config, "TRACES", "v1/traces", {
          "Content-Type": "application/json"
        }), otlp_transformer_1.JsonTraceSerializer));
      }
    };
    exports.OTLPTraceExporter = OTLPTraceExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var OTLPTraceExporter_1 = require_OTLPTraceExporter();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return OTLPTraceExporter_1.OTLPTraceExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return node_1.OTLPTraceExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return platform_1.OTLPTraceExporter;
    } });
  }
});
export default require_src2();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXRyYWNlLW90bHAtaHR0cEAwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1odHRwL3NyYy9wbGF0Zm9ybS9ub2RlL09UTFBUcmFjZUV4cG9ydGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci10cmFjZS1vdGxwLWh0dHBAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtaHR0cC9zcmMvcGxhdGZvcm0vbm9kZS9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItdHJhY2Utb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci10cmFjZS1vdGxwLWh0dHAvc3JjL3BsYXRmb3JtL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci10cmFjZS1vdGxwLWh0dHBAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtaHR0cC9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFJlYWRhYmxlU3BhbiwgU3BhbkV4cG9ydGVyIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLXRyYWNlLWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBPVExQRXhwb3J0ZXJCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IEpzb25UcmFjZVNlcmlhbGl6ZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIGNvbnZlcnRMZWdhY3lIdHRwT3B0aW9ucyxcbiAgY3JlYXRlT3RscEh0dHBFeHBvcnREZWxlZ2F0ZSxcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlL25vZGUtaHR0cCc7XG5cbi8qKlxuICogQ29sbGVjdG9yIFRyYWNlIEV4cG9ydGVyIGZvciBOb2RlXG4gKi9cbmV4cG9ydCBjbGFzcyBPVExQVHJhY2VFeHBvcnRlclxuICBleHRlbmRzIE9UTFBFeHBvcnRlckJhc2U8UmVhZGFibGVTcGFuW10+XG4gIGltcGxlbWVudHMgU3BhbkV4cG9ydGVyXG57XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogT1RMUEV4cG9ydGVyTm9kZUNvbmZpZ0Jhc2UgPSB7fSkge1xuICAgIHN1cGVyKFxuICAgICAgY3JlYXRlT3RscEh0dHBFeHBvcnREZWxlZ2F0ZShcbiAgICAgICAgY29udmVydExlZ2FjeUh0dHBPcHRpb25zKGNvbmZpZywgJ1RSQUNFUycsICd2MS90cmFjZXMnLCB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSksXG4gICAgICAgIEpzb25UcmFjZVNlcmlhbGl6ZXJcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBUcmFjZUV4cG9ydGVyIH0gZnJvbSAnLi9PVExQVHJhY2VFeHBvcnRlcic7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBUcmFjZUV4cG9ydGVyIH0gZnJvbSAnLi9ub2RlJztcbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUFRyYWNlRXhwb3J0ZXIgfSBmcm9tICcuL3BsYXRmb3JtJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFFBQUEsdUJBQUE7QUFDQSxRQUFBLHFCQUFBO0FBQ0EsUUFBQSxjQUFBO0FBUUEsUUFBYSxvQkFBYixjQUNVLHFCQUFBLGlCQUFnQztNQUd4QyxZQUFZLFNBQXFDLENBQUEsR0FBRTtBQUNqRCxlQUNFLEdBQUEsWUFBQSwrQkFDRSxHQUFBLFlBQUEsMEJBQXlCLFFBQVEsVUFBVSxhQUFhO1VBQ3RELGdCQUFnQjtTQUNqQixHQUNELG1CQUFBLG1CQUFtQixDQUNwQjtNQUVMOztBQWJGLFlBQUEsb0JBQUE7Ozs7Ozs7Ozs7QUNaQSxRQUFBLHNCQUFBO0FBQVMsV0FBQSxlQUFBLFNBQUEscUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSxvQkFBQTtJQUFpQixFQUFBLENBQUE7Ozs7Ozs7Ozs7QUNBMUIsUUFBQSxTQUFBO0FBQVMsV0FBQSxlQUFBLFNBQUEscUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSxPQUFBO0lBQWlCLEVBQUEsQ0FBQTs7Ozs7Ozs7O0FDQTFCLFFBQUEsYUFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHFCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsV0FBQTtJQUFpQixFQUFBLENBQUE7OzsiLAogICJuYW1lcyI6IFtdCn0K
