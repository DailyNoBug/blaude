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
import {
  init_opentelemetry_core,
  init_opentelemetry_sdk_metrics,
  opentelemetry_core_exports,
  opentelemetry_sdk_metrics_exports
} from "./chunk-WGKW7MCW.mjs";
import {
  init_opentelemetry_api,
  opentelemetry_api_exports
} from "./chunk-GG7RJVEZ.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterOptions.js
var require_OTLPMetricExporterOptions = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AggregationTemporalityPreference = void 0;
    var AggregationTemporalityPreference;
    (function(AggregationTemporalityPreference2) {
      AggregationTemporalityPreference2[AggregationTemporalityPreference2["DELTA"] = 0] = "DELTA";
      AggregationTemporalityPreference2[AggregationTemporalityPreference2["CUMULATIVE"] = 1] = "CUMULATIVE";
      AggregationTemporalityPreference2[AggregationTemporalityPreference2["LOWMEMORY"] = 2] = "LOWMEMORY";
    })(AggregationTemporalityPreference = exports.AggregationTemporalityPreference || (exports.AggregationTemporalityPreference = {}));
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterBase.js
var require_OTLPMetricExporterBase = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporterBase = exports.LowMemoryTemporalitySelector = exports.DeltaTemporalitySelector = exports.CumulativeTemporalitySelector = void 0;
    var core_1 = (init_opentelemetry_core(), __toCommonJS(opentelemetry_core_exports));
    var sdk_metrics_1 = (init_opentelemetry_sdk_metrics(), __toCommonJS(opentelemetry_sdk_metrics_exports));
    var OTLPMetricExporterOptions_1 = require_OTLPMetricExporterOptions();
    var otlp_exporter_base_1 = (init_esm(), __toCommonJS(esm_exports));
    var api_1 = (init_opentelemetry_api(), __toCommonJS(opentelemetry_api_exports));
    var CumulativeTemporalitySelector = () => sdk_metrics_1.AggregationTemporality.CUMULATIVE;
    exports.CumulativeTemporalitySelector = CumulativeTemporalitySelector;
    var DeltaTemporalitySelector = (instrumentType) => {
      switch (instrumentType) {
        case sdk_metrics_1.InstrumentType.COUNTER:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_COUNTER:
        case sdk_metrics_1.InstrumentType.GAUGE:
        case sdk_metrics_1.InstrumentType.HISTOGRAM:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_GAUGE:
          return sdk_metrics_1.AggregationTemporality.DELTA;
        case sdk_metrics_1.InstrumentType.UP_DOWN_COUNTER:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
          return sdk_metrics_1.AggregationTemporality.CUMULATIVE;
      }
    };
    exports.DeltaTemporalitySelector = DeltaTemporalitySelector;
    var LowMemoryTemporalitySelector = (instrumentType) => {
      switch (instrumentType) {
        case sdk_metrics_1.InstrumentType.COUNTER:
        case sdk_metrics_1.InstrumentType.HISTOGRAM:
          return sdk_metrics_1.AggregationTemporality.DELTA;
        case sdk_metrics_1.InstrumentType.GAUGE:
        case sdk_metrics_1.InstrumentType.UP_DOWN_COUNTER:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_COUNTER:
        case sdk_metrics_1.InstrumentType.OBSERVABLE_GAUGE:
          return sdk_metrics_1.AggregationTemporality.CUMULATIVE;
      }
    };
    exports.LowMemoryTemporalitySelector = LowMemoryTemporalitySelector;
    function chooseTemporalitySelectorFromEnvironment() {
      const configuredTemporality = ((0, core_1.getStringFromEnv)("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
      if (configuredTemporality === "cumulative") {
        return exports.CumulativeTemporalitySelector;
      }
      if (configuredTemporality === "delta") {
        return exports.DeltaTemporalitySelector;
      }
      if (configuredTemporality === "lowmemory") {
        return exports.LowMemoryTemporalitySelector;
      }
      api_1.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${configuredTemporality}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`);
      return exports.CumulativeTemporalitySelector;
    }
    function chooseTemporalitySelector(temporalityPreference) {
      if (temporalityPreference != null) {
        if (temporalityPreference === OTLPMetricExporterOptions_1.AggregationTemporalityPreference.DELTA) {
          return exports.DeltaTemporalitySelector;
        } else if (temporalityPreference === OTLPMetricExporterOptions_1.AggregationTemporalityPreference.LOWMEMORY) {
          return exports.LowMemoryTemporalitySelector;
        }
        return exports.CumulativeTemporalitySelector;
      }
      return chooseTemporalitySelectorFromEnvironment();
    }
    var DEFAULT_AGGREGATION = Object.freeze({
      type: sdk_metrics_1.AggregationType.DEFAULT
    });
    function chooseAggregationSelector(config) {
      return config?.aggregationPreference ?? (() => DEFAULT_AGGREGATION);
    }
    var OTLPMetricExporterBase = class extends otlp_exporter_base_1.OTLPExporterBase {
      _aggregationTemporalitySelector;
      _aggregationSelector;
      constructor(delegate, config) {
        super(delegate);
        this._aggregationSelector = chooseAggregationSelector(config);
        this._aggregationTemporalitySelector = chooseTemporalitySelector(config?.temporalityPreference);
      }
      selectAggregation(instrumentType) {
        return this._aggregationSelector(instrumentType);
      }
      selectAggregationTemporality(instrumentType) {
        return this._aggregationTemporalitySelector(instrumentType);
      }
    };
    exports.OTLPMetricExporterBase = OTLPMetricExporterBase;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/OTLPMetricExporter.js
var require_OTLPMetricExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/OTLPMetricExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var OTLPMetricExporterBase_1 = require_OTLPMetricExporterBase();
    var otlp_transformer_1 = require_src();
    var node_http_1 = (init_index_node_http(), __toCommonJS(index_node_http_exports));
    var OTLPMetricExporter = class extends OTLPMetricExporterBase_1.OTLPMetricExporterBase {
      constructor(config) {
        super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config ?? {}, "METRICS", "v1/metrics", {
          "Content-Type": "application/json"
        }), otlp_transformer_1.JsonMetricsSerializer), config);
      }
    };
    exports.OTLPMetricExporter = OTLPMetricExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var OTLPMetricExporter_1 = require_OTLPMetricExporter();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return OTLPMetricExporter_1.OTLPMetricExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporter = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return node_1.OTLPMetricExporter;
    } });
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OTLPMetricExporterBase = exports.LowMemoryTemporalitySelector = exports.DeltaTemporalitySelector = exports.CumulativeTemporalitySelector = exports.AggregationTemporalityPreference = exports.OTLPMetricExporter = void 0;
    var platform_1 = require_platform();
    Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
      return platform_1.OTLPMetricExporter;
    } });
    var OTLPMetricExporterOptions_1 = require_OTLPMetricExporterOptions();
    Object.defineProperty(exports, "AggregationTemporalityPreference", { enumerable: true, get: function() {
      return OTLPMetricExporterOptions_1.AggregationTemporalityPreference;
    } });
    var OTLPMetricExporterBase_1 = require_OTLPMetricExporterBase();
    Object.defineProperty(exports, "CumulativeTemporalitySelector", { enumerable: true, get: function() {
      return OTLPMetricExporterBase_1.CumulativeTemporalitySelector;
    } });
    Object.defineProperty(exports, "DeltaTemporalitySelector", { enumerable: true, get: function() {
      return OTLPMetricExporterBase_1.DeltaTemporalitySelector;
    } });
    Object.defineProperty(exports, "LowMemoryTemporalitySelector", { enumerable: true, get: function() {
      return OTLPMetricExporterBase_1.LowMemoryTemporalitySelector;
    } });
    Object.defineProperty(exports, "OTLPMetricExporterBase", { enumerable: true, get: function() {
      return OTLPMetricExporterBase_1.OTLPMetricExporterBase;
    } });
  }
});

export {
  require_src2 as require_src
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtaHR0cC9zcmMvT1RMUE1ldHJpY0V4cG9ydGVyT3B0aW9ucy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHBAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwL3NyYy9PVExQTWV0cmljRXhwb3J0ZXJCYXNlLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci1tZXRyaWNzLW90bHAtaHR0cEAwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHAvc3JjL3BsYXRmb3JtL25vZGUvT1RMUE1ldHJpY0V4cG9ydGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci1tZXRyaWNzLW90bHAtaHR0cEAwLjIxNC4wX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMS9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHAvc3JjL3BsYXRmb3JtL25vZGUvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtaHR0cC9zcmMvcGxhdGZvcm0vaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLW1ldHJpY3Mtb3RscC1odHRwQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtaHR0cC9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IE9UTFBFeHBvcnRlckNvbmZpZ0Jhc2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2UnO1xuaW1wb3J0IHR5cGUge1xuICBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5LFxuICBBZ2dyZWdhdGlvblNlbGVjdG9yLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZGstbWV0cmljcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT1RMUE1ldHJpY0V4cG9ydGVyT3B0aW9ucyBleHRlbmRzIE9UTFBFeHBvcnRlckNvbmZpZ0Jhc2Uge1xuICB0ZW1wb3JhbGl0eVByZWZlcmVuY2U/OlxuICAgIHwgQWdncmVnYXRpb25UZW1wb3JhbGl0eVByZWZlcmVuY2VcbiAgICB8IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHk7XG4gIGFnZ3JlZ2F0aW9uUHJlZmVyZW5jZT86IEFnZ3JlZ2F0aW9uU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBlbnVtIEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlQcmVmZXJlbmNlIHtcbiAgREVMVEEsXG4gIENVTVVMQVRJVkUsXG4gIExPV01FTU9SWSxcbn1cbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgZ2V0U3RyaW5nRnJvbUVudiB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2NvcmUnO1xuaW1wb3J0IHR5cGUge1xuICBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5U2VsZWN0b3IsXG4gIFB1c2hNZXRyaWNFeHBvcnRlcixcbiAgUmVzb3VyY2VNZXRyaWNzLFxuICBBZ2dyZWdhdGlvblNlbGVjdG9yLFxuICBBZ2dyZWdhdGlvbk9wdGlvbixcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLW1ldHJpY3MnO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRpb25UZW1wb3JhbGl0eSxcbiAgSW5zdHJ1bWVudFR5cGUsXG4gIEFnZ3JlZ2F0aW9uVHlwZSxcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLW1ldHJpY3MnO1xuaW1wb3J0IHR5cGUgeyBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi9PVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlQcmVmZXJlbmNlIH0gZnJvbSAnLi9PVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zJztcbmltcG9ydCB0eXBlIHsgSU90bHBFeHBvcnREZWxlZ2F0ZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtZXhwb3J0ZXItYmFzZSc7XG5pbXBvcnQgeyBPVExQRXhwb3J0ZXJCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IGRpYWcgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGknO1xuXG5leHBvcnQgY29uc3QgQ3VtdWxhdGl2ZVRlbXBvcmFsaXR5U2VsZWN0b3I6IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlTZWxlY3RvciA9XG4gICgpID0+IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkuQ1VNVUxBVElWRTtcblxuZXhwb3J0IGNvbnN0IERlbHRhVGVtcG9yYWxpdHlTZWxlY3RvcjogQWdncmVnYXRpb25UZW1wb3JhbGl0eVNlbGVjdG9yID0gKFxuICBpbnN0cnVtZW50VHlwZTogSW5zdHJ1bWVudFR5cGVcbikgPT4ge1xuICBzd2l0Y2ggKGluc3RydW1lbnRUeXBlKSB7XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5DT1VOVEVSOlxuICAgIGNhc2UgSW5zdHJ1bWVudFR5cGUuT0JTRVJWQUJMRV9DT1VOVEVSOlxuICAgIGNhc2UgSW5zdHJ1bWVudFR5cGUuR0FVR0U6XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5ISVNUT0dSQU06XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5PQlNFUlZBQkxFX0dBVUdFOlxuICAgICAgcmV0dXJuIEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkuREVMVEE7XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5VUF9ET1dOX0NPVU5URVI6XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5PQlNFUlZBQkxFX1VQX0RPV05fQ09VTlRFUjpcbiAgICAgIHJldHVybiBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5LkNVTVVMQVRJVkU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBMb3dNZW1vcnlUZW1wb3JhbGl0eVNlbGVjdG9yOiBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5U2VsZWN0b3IgPSAoXG4gIGluc3RydW1lbnRUeXBlOiBJbnN0cnVtZW50VHlwZVxuKSA9PiB7XG4gIHN3aXRjaCAoaW5zdHJ1bWVudFR5cGUpIHtcbiAgICBjYXNlIEluc3RydW1lbnRUeXBlLkNPVU5URVI6XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5ISVNUT0dSQU06XG4gICAgICByZXR1cm4gQWdncmVnYXRpb25UZW1wb3JhbGl0eS5ERUxUQTtcbiAgICBjYXNlIEluc3RydW1lbnRUeXBlLkdBVUdFOlxuICAgIGNhc2UgSW5zdHJ1bWVudFR5cGUuVVBfRE9XTl9DT1VOVEVSOlxuICAgIGNhc2UgSW5zdHJ1bWVudFR5cGUuT0JTRVJWQUJMRV9VUF9ET1dOX0NPVU5URVI6XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5PQlNFUlZBQkxFX0NPVU5URVI6XG4gICAgY2FzZSBJbnN0cnVtZW50VHlwZS5PQlNFUlZBQkxFX0dBVUdFOlxuICAgICAgcmV0dXJuIEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkuQ1VNVUxBVElWRTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2hvb3NlVGVtcG9yYWxpdHlTZWxlY3RvckZyb21FbnZpcm9ubWVudCgpIHtcbiAgY29uc3QgY29uZmlndXJlZFRlbXBvcmFsaXR5ID0gKFxuICAgIGdldFN0cmluZ0Zyb21FbnYoJ09URUxfRVhQT1JURVJfT1RMUF9NRVRSSUNTX1RFTVBPUkFMSVRZX1BSRUZFUkVOQ0UnKSA/P1xuICAgICdjdW11bGF0aXZlJ1xuICApLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKGNvbmZpZ3VyZWRUZW1wb3JhbGl0eSA9PT0gJ2N1bXVsYXRpdmUnKSB7XG4gICAgcmV0dXJuIEN1bXVsYXRpdmVUZW1wb3JhbGl0eVNlbGVjdG9yO1xuICB9XG4gIGlmIChjb25maWd1cmVkVGVtcG9yYWxpdHkgPT09ICdkZWx0YScpIHtcbiAgICByZXR1cm4gRGVsdGFUZW1wb3JhbGl0eVNlbGVjdG9yO1xuICB9XG4gIGlmIChjb25maWd1cmVkVGVtcG9yYWxpdHkgPT09ICdsb3dtZW1vcnknKSB7XG4gICAgcmV0dXJuIExvd01lbW9yeVRlbXBvcmFsaXR5U2VsZWN0b3I7XG4gIH1cblxuICBkaWFnLndhcm4oXG4gICAgYE9URUxfRVhQT1JURVJfT1RMUF9NRVRSSUNTX1RFTVBPUkFMSVRZX1BSRUZFUkVOQ0UgaXMgc2V0IHRvICcke2NvbmZpZ3VyZWRUZW1wb3JhbGl0eX0nLCBidXQgb25seSAnY3VtdWxhdGl2ZScgYW5kICdkZWx0YScgYXJlIGFsbG93ZWQuIFVzaW5nIGRlZmF1bHQgKCdjdW11bGF0aXZlJykgaW5zdGVhZC5gXG4gICk7XG4gIHJldHVybiBDdW11bGF0aXZlVGVtcG9yYWxpdHlTZWxlY3Rvcjtcbn1cblxuZnVuY3Rpb24gY2hvb3NlVGVtcG9yYWxpdHlTZWxlY3RvcihcbiAgdGVtcG9yYWxpdHlQcmVmZXJlbmNlPzpcbiAgICB8IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlQcmVmZXJlbmNlXG4gICAgfCBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5XG4pOiBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5U2VsZWN0b3Ige1xuICAvLyBEaXJlY3RseSBwYXNzZWQgcHJlZmVyZW5jZSBoYXMgcHJpb3JpdHkuXG4gIGlmICh0ZW1wb3JhbGl0eVByZWZlcmVuY2UgIT0gbnVsbCkge1xuICAgIGlmICh0ZW1wb3JhbGl0eVByZWZlcmVuY2UgPT09IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlQcmVmZXJlbmNlLkRFTFRBKSB7XG4gICAgICByZXR1cm4gRGVsdGFUZW1wb3JhbGl0eVNlbGVjdG9yO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0ZW1wb3JhbGl0eVByZWZlcmVuY2UgPT09IEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlQcmVmZXJlbmNlLkxPV01FTU9SWVxuICAgICkge1xuICAgICAgcmV0dXJuIExvd01lbW9yeVRlbXBvcmFsaXR5U2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBDdW11bGF0aXZlVGVtcG9yYWxpdHlTZWxlY3RvcjtcbiAgfVxuXG4gIHJldHVybiBjaG9vc2VUZW1wb3JhbGl0eVNlbGVjdG9yRnJvbUVudmlyb25tZW50KCk7XG59XG5cbmNvbnN0IERFRkFVTFRfQUdHUkVHQVRJT04gPSBPYmplY3QuZnJlZXplKHtcbiAgdHlwZTogQWdncmVnYXRpb25UeXBlLkRFRkFVTFQsXG59KTtcblxuZnVuY3Rpb24gY2hvb3NlQWdncmVnYXRpb25TZWxlY3RvcihcbiAgY29uZmlnOiBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4pOiBBZ2dyZWdhdGlvblNlbGVjdG9yIHtcbiAgcmV0dXJuIGNvbmZpZz8uYWdncmVnYXRpb25QcmVmZXJlbmNlID8/ICgoKSA9PiBERUZBVUxUX0FHR1JFR0FUSU9OKTtcbn1cblxuZXhwb3J0IGNsYXNzIE9UTFBNZXRyaWNFeHBvcnRlckJhc2VcbiAgZXh0ZW5kcyBPVExQRXhwb3J0ZXJCYXNlPFJlc291cmNlTWV0cmljcz5cbiAgaW1wbGVtZW50cyBQdXNoTWV0cmljRXhwb3J0ZXJcbntcbiAgcHJpdmF0ZSByZWFkb25seSBfYWdncmVnYXRpb25UZW1wb3JhbGl0eVNlbGVjdG9yOiBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5U2VsZWN0b3I7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FnZ3JlZ2F0aW9uU2VsZWN0b3I6IEFnZ3JlZ2F0aW9uU2VsZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZGVsZWdhdGU6IElPdGxwRXhwb3J0RGVsZWdhdGU8UmVzb3VyY2VNZXRyaWNzPixcbiAgICBjb25maWc/OiBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICB0aGlzLl9hZ2dyZWdhdGlvblNlbGVjdG9yID0gY2hvb3NlQWdncmVnYXRpb25TZWxlY3Rvcihjb25maWcpO1xuICAgIHRoaXMuX2FnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlTZWxlY3RvciA9IGNob29zZVRlbXBvcmFsaXR5U2VsZWN0b3IoXG4gICAgICBjb25maWc/LnRlbXBvcmFsaXR5UHJlZmVyZW5jZVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RBZ2dyZWdhdGlvbihpbnN0cnVtZW50VHlwZTogSW5zdHJ1bWVudFR5cGUpOiBBZ2dyZWdhdGlvbk9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZ3JlZ2F0aW9uU2VsZWN0b3IoaW5zdHJ1bWVudFR5cGUpO1xuICB9XG5cbiAgc2VsZWN0QWdncmVnYXRpb25UZW1wb3JhbGl0eShcbiAgICBpbnN0cnVtZW50VHlwZTogSW5zdHJ1bWVudFR5cGVcbiAgKTogQWdncmVnYXRpb25UZW1wb3JhbGl0eSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlTZWxlY3RvcihpbnN0cnVtZW50VHlwZSk7XG4gIH1cbn1cbiIsICIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vT1RMUE1ldHJpY0V4cG9ydGVyT3B0aW9ucyc7XG5pbXBvcnQgeyBPVExQTWV0cmljRXhwb3J0ZXJCYXNlIH0gZnJvbSAnLi4vLi4vT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSc7XG5pbXBvcnQgdHlwZSB7IE9UTFBFeHBvcnRlck5vZGVDb25maWdCYXNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvb3RscC1leHBvcnRlci1iYXNlJztcbmltcG9ydCB7IEpzb25NZXRyaWNzU2VyaWFsaXplciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L290bHAtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgY29udmVydExlZ2FjeUh0dHBPcHRpb25zLFxuICBjcmVhdGVPdGxwSHR0cEV4cG9ydERlbGVnYXRlLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9vdGxwLWV4cG9ydGVyLWJhc2Uvbm9kZS1odHRwJztcblxuLyoqXG4gKiBPVExQIE1ldHJpYyBFeHBvcnRlciBmb3IgTm9kZS5qc1xuICovXG5leHBvcnQgY2xhc3MgT1RMUE1ldHJpY0V4cG9ydGVyIGV4dGVuZHMgT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IE9UTFBFeHBvcnRlck5vZGVDb25maWdCYXNlICYgT1RMUE1ldHJpY0V4cG9ydGVyT3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgY3JlYXRlT3RscEh0dHBFeHBvcnREZWxlZ2F0ZShcbiAgICAgICAgY29udmVydExlZ2FjeUh0dHBPcHRpb25zKGNvbmZpZyA/PyB7fSwgJ01FVFJJQ1MnLCAndjEvbWV0cmljcycsIHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9KSxcbiAgICAgICAgSnNvbk1ldHJpY3NTZXJpYWxpemVyXG4gICAgICApLFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxufVxuIiwgIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgeyBPVExQTWV0cmljRXhwb3J0ZXIgfSBmcm9tICcuL09UTFBNZXRyaWNFeHBvcnRlcic7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBNZXRyaWNFeHBvcnRlciB9IGZyb20gJy4vbm9kZSc7XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IE9UTFBNZXRyaWNFeHBvcnRlciB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IHsgQWdncmVnYXRpb25UZW1wb3JhbGl0eVByZWZlcmVuY2UgfSBmcm9tICcuL09UTFBNZXRyaWNFeHBvcnRlck9wdGlvbnMnO1xuZXhwb3J0IHR5cGUgeyBPVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi9PVExQTWV0cmljRXhwb3J0ZXJPcHRpb25zJztcbmV4cG9ydCB7XG4gIEN1bXVsYXRpdmVUZW1wb3JhbGl0eVNlbGVjdG9yLFxuICBEZWx0YVRlbXBvcmFsaXR5U2VsZWN0b3IsXG4gIExvd01lbW9yeVRlbXBvcmFsaXR5U2VsZWN0b3IsXG4gIE9UTFBNZXRyaWNFeHBvcnRlckJhc2UsXG59IGZyb20gJy4vT1RMUE1ldHJpY0V4cG9ydGVyQmFzZSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFFBQVk7QUFBWixLQUFBLFNBQVlBLG1DQUFnQztBQUMxQyxNQUFBQSxrQ0FBQUEsa0NBQUEsT0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLE1BQUFBLGtDQUFBQSxrQ0FBQSxZQUFBLElBQUEsQ0FBQSxJQUFBO0FBQ0EsTUFBQUEsa0NBQUFBLGtDQUFBLFdBQUEsSUFBQSxDQUFBLElBQUE7SUFDRixHQUpZLG1DQUFBLFFBQUEscUNBQUEsUUFBQSxtQ0FBZ0MsQ0FBQSxFQUFBOzs7Ozs7Ozs7O0FDYjVDLFFBQUEsU0FBQTtBQVFBLFFBQUEsZ0JBQUE7QUFNQSxRQUFBLDhCQUFBO0FBRUEsUUFBQSx1QkFBQTtBQUNBLFFBQUEsUUFBQTtBQUVPLFFBQU0sZ0NBQ1gsTUFBTSxjQUFBLHVCQUF1QjtBQURsQixZQUFBLGdDQUE2QjtBQUduQyxRQUFNLDJCQUEyRCxDQUN0RSxtQkFDRTtBQUNGLGNBQVEsZ0JBQWdCO1FBQ3RCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO0FBQ2xCLGlCQUFPLGNBQUEsdUJBQXVCO1FBQ2hDLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO0FBQ2xCLGlCQUFPLGNBQUEsdUJBQXVCOztJQUVwQztBQWRhLFlBQUEsMkJBQXdCO0FBZ0I5QixRQUFNLCtCQUErRCxDQUMxRSxtQkFDRTtBQUNGLGNBQVEsZ0JBQWdCO1FBQ3RCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO0FBQ2xCLGlCQUFPLGNBQUEsdUJBQXVCO1FBQ2hDLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO1FBQ3BCLEtBQUssY0FBQSxlQUFlO0FBQ2xCLGlCQUFPLGNBQUEsdUJBQXVCOztJQUVwQztBQWRhLFlBQUEsK0JBQTRCO0FBZ0J6QyxhQUFTLDJDQUF3QztBQUMvQyxZQUFNLDBCQUNKLEdBQUEsT0FBQSxrQkFBaUIsbURBQW1ELEtBQ3BFLGNBQ0EsWUFBVztBQUViLFVBQUksMEJBQTBCLGNBQWM7QUFDMUMsZUFBTyxRQUFBOztBQUVULFVBQUksMEJBQTBCLFNBQVM7QUFDckMsZUFBTyxRQUFBOztBQUVULFVBQUksMEJBQTBCLGFBQWE7QUFDekMsZUFBTyxRQUFBOztBQUdULFlBQUEsS0FBSyxLQUNILGdFQUFnRSxxQkFBcUIseUZBQXlGO0FBRWhMLGFBQU8sUUFBQTtJQUNUO0FBRUEsYUFBUywwQkFDUCx1QkFFMEI7QUFHMUIsVUFBSSx5QkFBeUIsTUFBTTtBQUNqQyxZQUFJLDBCQUEwQiw0QkFBQSxpQ0FBaUMsT0FBTztBQUNwRSxpQkFBTyxRQUFBO21CQUVQLDBCQUEwQiw0QkFBQSxpQ0FBaUMsV0FDM0Q7QUFDQSxpQkFBTyxRQUFBOztBQUVULGVBQU8sUUFBQTs7QUFHVCxhQUFPLHlDQUF3QztJQUNqRDtBQUVBLFFBQU0sc0JBQXNCLE9BQU8sT0FBTztNQUN4QyxNQUFNLGNBQUEsZ0JBQWdCO0tBQ3ZCO0FBRUQsYUFBUywwQkFDUCxRQUE2QztBQUU3QyxhQUFPLFFBQVEsMEJBQTBCLE1BQU07SUFDakQ7QUFFQSxRQUFhLHlCQUFiLGNBQ1UscUJBQUEsaUJBQWlDO01BR3hCO01BQ0E7TUFFakIsWUFDRSxVQUNBLFFBQWtDO0FBRWxDLGNBQU0sUUFBUTtBQUNkLGFBQUssdUJBQXVCLDBCQUEwQixNQUFNO0FBQzVELGFBQUssa0NBQWtDLDBCQUNyQyxRQUFRLHFCQUFxQjtNQUVqQztNQUVBLGtCQUFrQixnQkFBOEI7QUFDOUMsZUFBTyxLQUFLLHFCQUFxQixjQUFjO01BQ2pEO01BRUEsNkJBQ0UsZ0JBQThCO0FBRTlCLGVBQU8sS0FBSyxnQ0FBZ0MsY0FBYztNQUM1RDs7QUExQkYsWUFBQSx5QkFBQTs7Ozs7Ozs7OztBQ3pHQSxRQUFBLDJCQUFBO0FBRUEsUUFBQSxxQkFBQTtBQUNBLFFBQUEsY0FBQTtBQVFBLFFBQWEscUJBQWIsY0FBd0MseUJBQUEsdUJBQXNCO01BQzVELFlBQVksUUFBK0Q7QUFDekUsZUFDRSxHQUFBLFlBQUEsK0JBQ0UsR0FBQSxZQUFBLDBCQUF5QixVQUFVLENBQUEsR0FBSSxXQUFXLGNBQWM7VUFDOUQsZ0JBQWdCO1NBQ2pCLEdBQ0QsbUJBQUEscUJBQXFCLEdBRXZCLE1BQU07TUFFVjs7QUFYRixZQUFBLHFCQUFBOzs7Ozs7Ozs7O0FDWkEsUUFBQSx1QkFBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHNCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEscUJBQUE7SUFBa0IsRUFBQSxDQUFBOzs7Ozs7Ozs7O0FDQTNCLFFBQUEsU0FBQTtBQUFTLFdBQUEsZUFBQSxTQUFBLHNCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsT0FBQTtJQUFrQixFQUFBLENBQUE7Ozs7Ozs7OztBQ0EzQixRQUFBLGFBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxzQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLFdBQUE7SUFBa0IsRUFBQSxDQUFBO0FBQzNCLFFBQUEsOEJBQUE7QUFBUyxXQUFBLGVBQUEsU0FBQSxvQ0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxhQUFBLDRCQUFBO0lBQWdDLEVBQUEsQ0FBQTtBQUV6QyxRQUFBLDJCQUFBO0FBQ0UsV0FBQSxlQUFBLFNBQUEsaUNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSx5QkFBQTtJQUE2QixFQUFBLENBQUE7QUFDN0IsV0FBQSxlQUFBLFNBQUEsNEJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSx5QkFBQTtJQUF3QixFQUFBLENBQUE7QUFDeEIsV0FBQSxlQUFBLFNBQUEsZ0NBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSx5QkFBQTtJQUE0QixFQUFBLENBQUE7QUFDNUIsV0FBQSxlQUFBLFNBQUEsMEJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsYUFBQSx5QkFBQTtJQUFzQixFQUFBLENBQUE7OzsiLAogICJuYW1lcyI6IFsiQWdncmVnYXRpb25UZW1wb3JhbGl0eVByZWZlcmVuY2UiXQp9Cg==
