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

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/node/OTLPLogExporter.js
var require_OTLPLogExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/node/OTLPLogExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPLogExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config, "LOGS", "v1/logs", {
          "Content-Type": "application/x-protobuf"
        }), otlp_transformer_1.ProtobufLogsSerializer));
      }
    };
    exports.OTLPLogExporter = OTLPLogExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var OTLPLogExporter_1 = require_OTLPLogExporter();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return OTLPLogExporter_1.OTLPLogExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return node_1.OTLPLogExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return platform_1.OTLPLogExporter;
    } });
  }
});
export default require_src2();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLWxvZ3Mtb3RscC1wcm90b0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbG9ncy1vdGxwLXByb3RvL3NyYy9wbGF0Zm9ybS9ub2RlL09UTFBMb2dFeHBvcnRlci50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbG9ncy1vdGxwLXByb3RvQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1sb2dzLW90bHAtcHJvdG8vc3JjL3BsYXRmb3JtL25vZGUvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLWxvZ3Mtb3RscC1wcm90b0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbG9ncy1vdGxwLXByb3RvL3NyYy9wbGF0Zm9ybS9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbG9ncy1vdGxwLXByb3RvQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1sb2dzLW90bHAtcHJvdG8vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBPVExQRXhwb3J0ZXJCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IFByb3RvYnVmTG9nc1NlcmlhbGl6ZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIGNvbnZlcnRMZWdhY3lIdHRwT3B0aW9ucyxcbiAgY3JlYXRlT3RscEh0dHBFeHBvcnREZWxlZ2F0ZSxcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlL25vZGUtaHR0cCc7XG5pbXBvcnQgdHlwZSB7XG4gIFJlYWRhYmxlTG9nUmVjb3JkLFxuICBMb2dSZWNvcmRFeHBvcnRlcixcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLWxvZ3MnO1xuXG4vKipcbiAqIE9UTFAgTG9nIFByb3RvYnVmIEV4cG9ydGVyIGZvciBOb2RlLmpzXG4gKi9cbmV4cG9ydCBjbGFzcyBPVExQTG9nRXhwb3J0ZXJcbiAgZXh0ZW5kcyBPVExQRXhwb3J0ZXJCYXNlPFJlYWRhYmxlTG9nUmVjb3JkW10+XG4gIGltcGxlbWVudHMgTG9nUmVjb3JkRXhwb3J0ZXJcbntcbiAgY29uc3RydWN0b3IoY29uZmlnOiBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSA9IHt9KSB7XG4gICAgc3VwZXIoXG4gICAgICBjcmVhdGVPdGxwSHR0cEV4cG9ydERlbGVnYXRlKFxuICAgICAgICBjb252ZXJ0TGVnYWN5SHR0cE9wdGlvbnMoY29uZmlnLCAnTE9HUycsICd2MS9sb2dzJywge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC1wcm90b2J1ZicsXG4gICAgICAgIH0pLFxuICAgICAgICBQcm90b2J1ZkxvZ3NTZXJpYWxpemVyXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwgIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgeyBPVExQTG9nRXhwb3J0ZXIgfSBmcm9tICcuL09UTFBMb2dFeHBvcnRlcic7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5leHBvcnQgeyBPVExQTG9nRXhwb3J0ZXIgfSBmcm9tICcuL25vZGUnO1xuIiwgIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuZXhwb3J0IHsgT1RMUExvZ0V4cG9ydGVyIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFFBQUEsdUJBQUE7QUFDQSxRQUFBLHFCQUFBO0FBQ0EsUUFBQSxjQUFBO0FBWUEsUUFBYSxrQkFBYixjQUNVLHFCQUFBLGlCQUFxQztNQUc3QyxZQUFZLFNBQXFDLENBQUEsR0FBRTtBQUNqRCxlQUNFLEdBQUEsWUFBQSwrQkFDRSxHQUFBLFlBQUEsMEJBQXlCLFFBQVEsUUFBUSxXQUFXO1VBQ2xELGdCQUFnQjtTQUNqQixHQUNELG1CQUFBLHNCQUFzQixDQUN2QjtNQUVMOztBQWJGLFlBQUEsa0JBQUE7Ozs7Ozs7Ozs7QUNmQSxRQUFBLG9CQUFBO0FBQVMsV0FBQSxlQUFBLFNBQUEsbUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSxrQkFBQTtJQUFlLEVBQUEsQ0FBQTs7Ozs7Ozs7OztBQ0R4QixRQUFBLFNBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLE9BQUE7SUFBZSxFQUFBLENBQUE7Ozs7Ozs7OztBQ0F4QixRQUFBLGFBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLFdBQUE7SUFBZSxFQUFBLENBQUE7OzsiLAogICJuYW1lcyI6IFtdCn0K
