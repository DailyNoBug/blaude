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

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/node/OTLPLogExporter.js
var require_OTLPLogExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/node/OTLPLogExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPLogExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config, "LOGS", "v1/logs", {
          "Content-Type": "application/json"
        }), otlp_transformer_1.JsonLogsSerializer));
      }
    };
    exports.OTLPLogExporter = OTLPLogExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var OTLPLogExporter_1 = require_OTLPLogExporter();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return OTLPLogExporter_1.OTLPLogExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return node_1.OTLPLogExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return platform_1.OTLPLogExporter;
    } });
  }
});
export default require_src2();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLWxvZ3Mtb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1sb2dzLW90bHAtaHR0cC9zcmMvcGxhdGZvcm0vbm9kZS9PVExQTG9nRXhwb3J0ZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLWxvZ3Mtb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1sb2dzLW90bHAtaHR0cC9zcmMvcGxhdGZvcm0vbm9kZS9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbG9ncy1vdGxwLWh0dHBAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLWxvZ3Mtb3RscC1odHRwL3NyYy9wbGF0Zm9ybS9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbG9ncy1vdGxwLWh0dHBAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLWxvZ3Mtb3RscC1odHRwL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB0eXBlIHtcbiAgUmVhZGFibGVMb2dSZWNvcmQsXG4gIExvZ1JlY29yZEV4cG9ydGVyLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZGstbG9ncyc7XG5pbXBvcnQgdHlwZSB7IE9UTFBFeHBvcnRlck5vZGVDb25maWdCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IE9UTFBFeHBvcnRlckJhc2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2UnO1xuaW1wb3J0IHsgSnNvbkxvZ3NTZXJpYWxpemVyIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC10cmFuc2Zvcm1lcic7XG5pbXBvcnQge1xuICBjb252ZXJ0TGVnYWN5SHR0cE9wdGlvbnMsXG4gIGNyZWF0ZU90bHBIdHRwRXhwb3J0RGVsZWdhdGUsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtZXhwb3J0ZXItYmFzZS9ub2RlLWh0dHAnO1xuXG4vKipcbiAqIENvbGxlY3RvciBMb2dzIEV4cG9ydGVyIGZvciBOb2RlXG4gKi9cbmV4cG9ydCBjbGFzcyBPVExQTG9nRXhwb3J0ZXJcbiAgZXh0ZW5kcyBPVExQRXhwb3J0ZXJCYXNlPFJlYWRhYmxlTG9nUmVjb3JkW10+XG4gIGltcGxlbWVudHMgTG9nUmVjb3JkRXhwb3J0ZXJcbntcbiAgY29uc3RydWN0b3IoY29uZmlnOiBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSA9IHt9KSB7XG4gICAgc3VwZXIoXG4gICAgICBjcmVhdGVPdGxwSHR0cEV4cG9ydERlbGVnYXRlKFxuICAgICAgICBjb252ZXJ0TGVnYWN5SHR0cE9wdGlvbnMoY29uZmlnLCAnTE9HUycsICd2MS9sb2dzJywge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pLFxuICAgICAgICBKc29uTG9nc1NlcmlhbGl6ZXJcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBMb2dFeHBvcnRlciB9IGZyb20gJy4vT1RMUExvZ0V4cG9ydGVyJztcbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUExvZ0V4cG9ydGVyIH0gZnJvbSAnLi9ub2RlJztcbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUExvZ0V4cG9ydGVyIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFFBQUEsdUJBQUE7QUFDQSxRQUFBLHFCQUFBO0FBQ0EsUUFBQSxjQUFBO0FBUUEsUUFBYSxrQkFBYixjQUNVLHFCQUFBLGlCQUFxQztNQUc3QyxZQUFZLFNBQXFDLENBQUEsR0FBRTtBQUNqRCxlQUNFLEdBQUEsWUFBQSwrQkFDRSxHQUFBLFlBQUEsMEJBQXlCLFFBQVEsUUFBUSxXQUFXO1VBQ2xELGdCQUFnQjtTQUNqQixHQUNELG1CQUFBLGtCQUFrQixDQUNuQjtNQUVMOztBQWJGLFlBQUEsa0JBQUE7Ozs7Ozs7Ozs7QUNmQSxRQUFBLG9CQUFBO0FBQVMsV0FBQSxlQUFBLFNBQUEsbUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSxrQkFBQTtJQUFlLEVBQUEsQ0FBQTs7Ozs7Ozs7OztBQ0F4QixRQUFBLFNBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLE9BQUE7SUFBZSxFQUFBLENBQUE7Ozs7Ozs7OztBQ0F4QixRQUFBLGFBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLFdBQUE7SUFBZSxFQUFBLENBQUE7OzsiLAogICJuYW1lcyI6IFtdCn0K
