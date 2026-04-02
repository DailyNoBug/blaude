#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_src as require_src2
} from "./chunk-FLHBZ3OL.mjs";
import {
  esm_exports,
  init_esm,
  require_src
} from "./chunk-6HPMQ2CQ.mjs";
import "./chunk-WGKW7MCW.mjs";
import "./chunk-GG7RJVEZ.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/OTLPLogExporter.js
var require_OTLPLogExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/OTLPLogExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var otlp_grpc_exporter_base_1 = require_src2();
    var otlp_transformer_1 = require_src();
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var OTLPLogExporter = class extends otlp_exporter_base_1.OTLPExporterBase {
      constructor(config = {}) {
        super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config, "LOGS"), otlp_transformer_1.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
      }
    };
    exports.OTLPLogExporter = OTLPLogExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-grpc@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPLogExporter = void 0;
    var OTLPLogExporter_1 = require_OTLPLogExporter();
    Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
      return OTLPLogExporter_1.OTLPLogExporter;
    } });
  }
});
export default require_src3();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLWxvZ3Mtb3RscC1ncnBjQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1sb2dzLW90bHAtZ3JwYy9zcmMvT1RMUExvZ0V4cG9ydGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci1sb2dzLW90bHAtZ3JwY0AwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbG9ncy1vdGxwLWdycGMvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUge1xuICBMb2dSZWNvcmRFeHBvcnRlcixcbiAgUmVhZGFibGVMb2dSZWNvcmQsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay1sb2dzJztcbmltcG9ydCB0eXBlIHsgT1RMUEdSUENFeHBvcnRlckNvbmZpZ05vZGUgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQge1xuICBjb252ZXJ0TGVnYWN5T3RscEdycGNPcHRpb25zLFxuICBjcmVhdGVPdGxwR3JwY0V4cG9ydERlbGVnYXRlLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWdycGMtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBQcm90b2J1ZkxvZ3NTZXJpYWxpemVyIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBPVExQRXhwb3J0ZXJCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcblxuLyoqXG4gKiBPVExQIExvZ3MgRXhwb3J0ZXIgZm9yIE5vZGVcbiAqL1xuZXhwb3J0IGNsYXNzIE9UTFBMb2dFeHBvcnRlclxuICBleHRlbmRzIE9UTFBFeHBvcnRlckJhc2U8UmVhZGFibGVMb2dSZWNvcmRbXT5cbiAgaW1wbGVtZW50cyBMb2dSZWNvcmRFeHBvcnRlclxue1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9UTFBHUlBDRXhwb3J0ZXJDb25maWdOb2RlID0ge30pIHtcbiAgICBzdXBlcihcbiAgICAgIGNyZWF0ZU90bHBHcnBjRXhwb3J0RGVsZWdhdGUoXG4gICAgICAgIGNvbnZlcnRMZWdhY3lPdGxwR3JwY09wdGlvbnMoY29uZmlnLCAnTE9HUycpLFxuICAgICAgICBQcm90b2J1ZkxvZ3NTZXJpYWxpemVyLFxuICAgICAgICAnTG9nc0V4cG9ydFNlcnZpY2UnLFxuICAgICAgICAnL29wZW50ZWxlbWV0cnkucHJvdG8uY29sbGVjdG9yLmxvZ3MudjEuTG9nc1NlcnZpY2UvRXhwb3J0J1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IHsgT1RMUExvZ0V4cG9ydGVyIH0gZnJvbSAnLi9PVExQTG9nRXhwb3J0ZXInO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsUUFBQSw0QkFBQTtBQUlBLFFBQUEscUJBQUE7QUFDQSxRQUFBLHVCQUFBO0FBS0EsUUFBYSxrQkFBYixjQUNVLHFCQUFBLGlCQUFxQztNQUc3QyxZQUFZLFNBQXFDLENBQUEsR0FBRTtBQUNqRCxlQUNFLEdBQUEsMEJBQUEsK0JBQ0UsR0FBQSwwQkFBQSw4QkFBNkIsUUFBUSxNQUFNLEdBQzNDLG1CQUFBLHdCQUNBLHFCQUNBLDJEQUEyRCxDQUM1RDtNQUVMOztBQWJGLFlBQUEsa0JBQUE7Ozs7Ozs7OztBQ2ZBLFFBQUEsb0JBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLGtCQUFBO0lBQWUsRUFBQSxDQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
