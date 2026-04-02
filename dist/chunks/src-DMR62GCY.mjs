#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_src as require_src2
} from "./chunk-UZ64EX55.mjs";
import {
  index_node_http_exports,
  init_index_node_http,
  require_src
} from "./chunk-6HPMQ2CQ.mjs";
import "./chunk-WGKW7MCW.mjs";
import "./chunk-GG7RJVEZ.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/node/OTLPMetricExporter.js
var require_OTLPMetricExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/node/OTLPMetricExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var exporter_metrics_otlp_http_1 = require_src2();
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPMetricExporter = class extends exporter_metrics_otlp_http_1.OTLPMetricExporterBase {
      constructor(config) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config ?? {}, "METRICS", "v1/metrics", {
          "Content-Type": "application/x-protobuf"
        }), otlp_transformer_1.ProtobufMetricsSerializer), config);
      }
    };
    exports.OTLPMetricExporter = OTLPMetricExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var OTLPMetricExporter_1 = require_OTLPMetricExporter();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return OTLPMetricExporter_1.OTLPMetricExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return node_1.OTLPMetricExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-proto@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return platform_1.OTLPMetricExporter;
    } });
  }
});
export default require_src3();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1wcm90b0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLXByb3RvL3NyYy9wbGF0Zm9ybS9ub2RlL09UTFBNZXRyaWNFeHBvcnRlci50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbWV0cmljcy1vdGxwLXByb3RvQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtcHJvdG8vc3JjL3BsYXRmb3JtL25vZGUvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1wcm90b0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLXByb3RvL3NyYy9wbGF0Zm9ybS9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbWV0cmljcy1vdGxwLXByb3RvQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtcHJvdG8vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHAnO1xuaW1wb3J0IHsgT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwJztcbmltcG9ydCB0eXBlIHsgT1RMUEV4cG9ydGVyTm9kZUNvbmZpZ0Jhc2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2UnO1xuaW1wb3J0IHsgUHJvdG9idWZNZXRyaWNzU2VyaWFsaXplciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgY29udmVydExlZ2FjeUh0dHBPcHRpb25zLFxuICBjcmVhdGVPdGxwSHR0cEV4cG9ydERlbGVnYXRlLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2Uvbm9kZS1odHRwJztcblxuZXhwb3J0IGNsYXNzIE9UTFBNZXRyaWNFeHBvcnRlciBleHRlbmRzIE9UTFBNZXRyaWNFeHBvcnRlckJhc2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWc/OiBPVExQRXhwb3J0ZXJOb2RlQ29uZmlnQmFzZSAmIE9UTFBNZXRyaWNFeHBvcnRlck9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIGNyZWF0ZU90bHBIdHRwRXhwb3J0RGVsZWdhdGUoXG4gICAgICAgIGNvbnZlcnRMZWdhY3lIdHRwT3B0aW9ucyhjb25maWcgPz8ge30sICdNRVRSSUNTJywgJ3YxL21ldHJpY3MnLCB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXByb3RvYnVmJyxcbiAgICAgICAgfSksXG4gICAgICAgIFByb3RvYnVmTWV0cmljc1NlcmlhbGl6ZXJcbiAgICAgICksXG4gICAgICBjb25maWdcbiAgICApO1xuICB9XG59XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBNZXRyaWNFeHBvcnRlciB9IGZyb20gJy4vT1RMUE1ldHJpY0V4cG9ydGVyJztcbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUE1ldHJpY0V4cG9ydGVyIH0gZnJvbSAnLi9ub2RlJztcbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUE1ldHJpY0V4cG9ydGVyIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxRQUFBLCtCQUFBO0FBRUEsUUFBQSxxQkFBQTtBQUNBLFFBQUEsY0FBQTtBQUtBLFFBQWEscUJBQWIsY0FBd0MsNkJBQUEsdUJBQXNCO01BQzVELFlBQVksUUFBK0Q7QUFDekUsZUFDRSxHQUFBLFlBQUEsK0JBQ0UsR0FBQSxZQUFBLDBCQUF5QixVQUFVLENBQUEsR0FBSSxXQUFXLGNBQWM7VUFDOUQsZ0JBQWdCO1NBQ2pCLEdBQ0QsbUJBQUEseUJBQXlCLEdBRTNCLE1BQU07TUFFVjs7QUFYRixZQUFBLHFCQUFBOzs7Ozs7Ozs7O0FDVEEsUUFBQSx1QkFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHNCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEscUJBQUE7SUFBa0IsRUFBQSxDQUFBOzs7Ozs7Ozs7O0FDQTNCLFFBQUEsU0FBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHNCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsT0FBQTtJQUFrQixFQUFBLENBQUE7Ozs7Ozs7OztBQ0EzQixRQUFBLGFBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxzQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLFdBQUE7SUFBa0IsRUFBQSxDQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
