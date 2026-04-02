#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_src as require_src3
} from "./chunk-FLHBZ3OL.mjs";
import {
  require_src as require_src2
} from "./chunk-UZ64EX55.mjs";
import {
  require_src
} from "./chunk-6HPMQ2CQ.mjs";
import "./chunk-WGKW7MCW.mjs";
import "./chunk-GG7RJVEZ.mjs";
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/OTLPMetricExporter.js
var require_OTLPMetricExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/OTLPMetricExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var exporter_metrics_otlp_http_1 = require_src2();
    var otlp_grpc_exporter_base_1 = require_src3();
    var otlp_transformer_1 = require_src();
    var OTLPMetricExporter = class extends exporter_metrics_otlp_http_1.OTLPMetricExporterBase {
      constructor(config) {
        super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config ?? {}, "METRICS"), otlp_transformer_1.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), config);
      }
    };
    exports.OTLPMetricExporter = OTLPMetricExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/index.js
var require_src4 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var OTLPMetricExporter_1 = require_OTLPMetricExporter();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return OTLPMetricExporter_1.OTLPMetricExporter;
    } });
  }
});
export default require_src4();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1ncnBjQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtZ3JwYy9zcmMvT1RMUE1ldHJpY0V4cG9ydGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci1tZXRyaWNzLW90bHAtZ3JwY0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWdycGMvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHAnO1xuaW1wb3J0IHsgT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwJztcbmltcG9ydCB0eXBlIHsgT1RMUEdSUENFeHBvcnRlckNvbmZpZ05vZGUgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQge1xuICBjb252ZXJ0TGVnYWN5T3RscEdycGNPcHRpb25zLFxuICBjcmVhdGVPdGxwR3JwY0V4cG9ydERlbGVnYXRlLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBQcm90b2J1Zk1ldHJpY3NTZXJpYWxpemVyIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC10cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogT1RMUC1nUlBDIG1ldHJpYyBleHBvcnRlclxuICovXG5leHBvcnQgY2xhc3MgT1RMUE1ldHJpY0V4cG9ydGVyIGV4dGVuZHMgT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IE9UTFBHUlBDRXhwb3J0ZXJDb25maWdOb2RlICYgT1RMUE1ldHJpY0V4cG9ydGVyT3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgY3JlYXRlT3RscEdycGNFeHBvcnREZWxlZ2F0ZShcbiAgICAgICAgY29udmVydExlZ2FjeU90bHBHcnBjT3B0aW9ucyhjb25maWcgPz8ge30sICdNRVRSSUNTJyksXG4gICAgICAgIFByb3RvYnVmTWV0cmljc1NlcmlhbGl6ZXIsXG4gICAgICAgICdNZXRyaWNzRXhwb3J0U2VydmljZScsXG4gICAgICAgICcvb3BlbnRlbGVtZXRyeS5wcm90by5jb2xsZWN0b3IubWV0cmljcy52MS5NZXRyaWNzU2VydmljZS9FeHBvcnQnXG4gICAgICApLFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxufVxuIiwgIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgeyBPVExQTWV0cmljRXhwb3J0ZXIgfSBmcm9tICcuL09UTFBNZXRyaWNFeHBvcnRlcic7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxRQUFBLCtCQUFBO0FBRUEsUUFBQSw0QkFBQTtBQUlBLFFBQUEscUJBQUE7QUFLQSxRQUFhLHFCQUFiLGNBQXdDLDZCQUFBLHVCQUFzQjtNQUM1RCxZQUFZLFFBQStEO0FBQ3pFLGVBQ0UsR0FBQSwwQkFBQSwrQkFDRSxHQUFBLDBCQUFBLDhCQUE2QixVQUFVLENBQUEsR0FBSSxTQUFTLEdBQ3BELG1CQUFBLDJCQUNBLHdCQUNBLGlFQUFpRSxHQUVuRSxNQUFNO01BRVY7O0FBWEYsWUFBQSxxQkFBQTs7Ozs7Ozs7O0FDWkEsUUFBQSx1QkFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHNCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEscUJBQUE7SUFBa0IsRUFBQSxDQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
