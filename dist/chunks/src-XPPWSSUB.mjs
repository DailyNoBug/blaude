#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_src as require_src2
} from "./chunk-OZO6DT2I.mjs";
import {
  esm_exports,
  init_esm,
  require_src
} from "./chunk-ZNEEN5QH.mjs";
import "./chunk-EZURCALM.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-HQK4A2IB.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/OTLPTraceExporter.js
var require_OTLPTraceExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/OTLPTraceExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var otlp_grpc_exporter_base_1 = require_src2();
    var otlp_transformer_1 = require_src();
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var OTLPTraceExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config, "TRACES"), otlp_transformer_1.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
      }
    };
    exports.OTLPTraceExporter = OTLPTraceExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPTraceExporter = void 0;
    var OTLPTraceExporter_1 = require_OTLPTraceExporter();
    Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
      return OTLPTraceExporter_1.OTLPTraceExporter;
    } });
  }
});
export default require_src3();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXRyYWNlLW90bHAtZ3JwY0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1ncnBjL3NyYy9PVExQVHJhY2VFeHBvcnRlci50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItdHJhY2Utb3RscC1ncnBjQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci10cmFjZS1vdGxwLWdycGMvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBSZWFkYWJsZVNwYW4sIFNwYW5FeHBvcnRlciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay10cmFjZS1iYXNlJztcbmltcG9ydCB0eXBlIHsgT1RMUEdSUENFeHBvcnRlckNvbmZpZ05vZGUgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQge1xuICBjb252ZXJ0TGVnYWN5T3RscEdycGNPcHRpb25zLFxuICBjcmVhdGVPdGxwR3JwY0V4cG9ydERlbGVnYXRlLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBQcm90b2J1ZlRyYWNlU2VyaWFsaXplciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgT1RMUEV4cG9ydGVyQmFzZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtZXhwb3J0ZXItYmFzZSc7XG5cbi8qKlxuICogT1RMUCBUcmFjZSBFeHBvcnRlciBmb3IgTm9kZVxuICovXG5leHBvcnQgY2xhc3MgT1RMUFRyYWNlRXhwb3J0ZXJcbiAgZXh0ZW5kcyBPVExQRXhwb3J0ZXJCYXNlPFJlYWRhYmxlU3BhbltdPlxuICBpbXBsZW1lbnRzIFNwYW5FeHBvcnRlclxue1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9UTFBHUlBDRXhwb3J0ZXJDb25maWdOb2RlID0ge30pIHtcbiAgICBzdXBlcihcbiAgICAgIGNyZWF0ZU90bHBHcnBjRXhwb3J0RGVsZWdhdGUoXG4gICAgICAgIGNvbnZlcnRMZWdhY3lPdGxwR3JwY09wdGlvbnMoY29uZmlnLCAnVFJBQ0VTJyksXG4gICAgICAgIFByb3RvYnVmVHJhY2VTZXJpYWxpemVyLFxuICAgICAgICAnVHJhY2VFeHBvcnRTZXJ2aWNlJyxcbiAgICAgICAgJy9vcGVudGVsZW1ldHJ5LnByb3RvLmNvbGxlY3Rvci50cmFjZS52MS5UcmFjZVNlcnZpY2UvRXhwb3J0J1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUFRyYWNlRXhwb3J0ZXIgfSBmcm9tICcuL09UTFBUcmFjZUV4cG9ydGVyJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxRQUFBLDRCQUFBO0FBSUEsUUFBQSxxQkFBQTtBQUNBLFFBQUEsdUJBQUE7QUFLQSxRQUFhLG9CQUFiLGNBQ1UscUJBQUEsaUJBQWdDO01BR3hDLFlBQVksU0FBcUMsQ0FBQSxHQUFFO0FBQ2pELGVBQ0UsR0FBQSwwQkFBQSwrQkFDRSxHQUFBLDBCQUFBLDhCQUE2QixRQUFRLFFBQVEsR0FDN0MsbUJBQUEseUJBQ0Esc0JBQ0EsNkRBQTZELENBQzlEO01BRUw7O0FBYkYsWUFBQSxvQkFBQTs7Ozs7Ozs7O0FDWkEsUUFBQSxzQkFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHFCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsb0JBQUE7SUFBaUIsRUFBQSxDQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
