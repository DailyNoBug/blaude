#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_opentelemetry_semantic_conventions,
  opentelemetry_semantic_conventions_exports
} from "./chunk-AHENZQLB.mjs";
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
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusSerializer.js
var require_PrometheusSerializer = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusSerializer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrometheusSerializer = void 0;
    var api_1 = (init_opentelemetry_api(), __toCommonJS(opentelemetry_api_exports));
    var sdk_metrics_1 = (init_opentelemetry_sdk_metrics(), __toCommonJS(opentelemetry_sdk_metrics_exports));
    var core_1 = (init_opentelemetry_core(), __toCommonJS(opentelemetry_core_exports));
    var semantic_conventions_1 = (init_opentelemetry_semantic_conventions(), __toCommonJS(opentelemetry_semantic_conventions_exports));
    var ATTR_OTEL_SCOPE_SCHEMA_URL = "otel.scope.schema_url";
    function escapeString(str) {
      return str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    }
    function escapeAttributeValue(str = "") {
      if (typeof str !== "string") {
        str = JSON.stringify(str);
      }
      return escapeString(str).replace(/"/g, '\\"');
    }
    var invalidCharacterRegex = /[^a-z0-9_]/gi;
    var multipleUnderscoreRegex = /_{2,}/g;
    function sanitizePrometheusMetricName(name) {
      return name.replace(invalidCharacterRegex, "_").replace(multipleUnderscoreRegex, "_");
    }
    function enforcePrometheusNamingConvention(name, data) {
      if (!name.endsWith("_total") && data.dataPointType === sdk_metrics_1.DataPointType.SUM && data.isMonotonic) {
        name = name + "_total";
      }
      return name;
    }
    function valueString(value) {
      if (value === Infinity) {
        return "+Inf";
      } else if (value === -Infinity) {
        return "-Inf";
      } else {
        return `${value}`;
      }
    }
    function toPrometheusType(metricData) {
      switch (metricData.dataPointType) {
        case sdk_metrics_1.DataPointType.SUM:
          if (metricData.isMonotonic) {
            return "counter";
          }
          return "gauge";
        case sdk_metrics_1.DataPointType.GAUGE:
          return "gauge";
        case sdk_metrics_1.DataPointType.HISTOGRAM:
          return "histogram";
        default:
          return "untyped";
      }
    }
    function stringify(metricName, attributes, value, timestamp, additionalAttributes) {
      let hasAttribute = false;
      let attributesStr = "";
      for (const [key, val] of Object.entries(attributes)) {
        const sanitizedAttributeName = sanitizePrometheusMetricName(key);
        hasAttribute = true;
        attributesStr += `${attributesStr.length > 0 ? "," : ""}${sanitizedAttributeName}="${escapeAttributeValue(val)}"`;
      }
      if (additionalAttributes) {
        for (const [key, val] of Object.entries(additionalAttributes)) {
          const sanitizedAttributeName = sanitizePrometheusMetricName(key);
          hasAttribute = true;
          attributesStr += `${attributesStr.length > 0 ? "," : ""}${sanitizedAttributeName}="${escapeAttributeValue(val)}"`;
        }
      }
      if (hasAttribute) {
        metricName += `{${attributesStr}}`;
      }
      return `${metricName} ${valueString(value)}${timestamp !== void 0 ? " " + String(timestamp) : ""}
`;
    }
    var NO_REGISTERED_METRICS = "# no registered metrics";
    var PrometheusSerializer = class {
      _prefix;
      _appendTimestamp;
      _additionalAttributes;
      _withResourceConstantLabels;
      _withoutScopeInfo;
      _withoutTargetInfo;
      constructor(prefix, appendTimestamp = false, withResourceConstantLabels, withoutTargetInfo, withoutScopeInfo) {
        if (prefix) {
          this._prefix = prefix + "_";
        }
        this._appendTimestamp = appendTimestamp;
        this._withResourceConstantLabels = withResourceConstantLabels;
        this._withoutScopeInfo = !!withoutScopeInfo;
        this._withoutTargetInfo = !!withoutTargetInfo;
      }
      serialize(resourceMetrics) {
        let str = "";
        this._additionalAttributes = this._filterResourceConstantLabels(resourceMetrics.resource.attributes, this._withResourceConstantLabels);
        for (const scopeMetrics of resourceMetrics.scopeMetrics) {
          str += this._serializeScopeMetrics(scopeMetrics);
        }
        if (str === "") {
          str += NO_REGISTERED_METRICS;
        }
        return this._serializeResource(resourceMetrics.resource) + str;
      }
      _filterResourceConstantLabels(attributes, pattern) {
        if (pattern) {
          const filteredAttributes = {};
          for (const [key, value] of Object.entries(attributes)) {
            if (key.match(pattern)) {
              filteredAttributes[key] = value;
            }
          }
          return filteredAttributes;
        }
        return;
      }
      _serializeScopeMetrics(scopeMetrics) {
        let str = "";
        for (const metric of scopeMetrics.metrics) {
          str += this._serializeMetricData(metric, scopeMetrics.scope) + "\n";
        }
        return str;
      }
      _serializeMetricData(metricData, scope) {
        let name = sanitizePrometheusMetricName(escapeString(metricData.descriptor.name));
        if (this._prefix) {
          name = `${this._prefix}${name}`;
        }
        const dataPointType = metricData.dataPointType;
        name = enforcePrometheusNamingConvention(name, metricData);
        const help = `# HELP ${name} ${escapeString(metricData.descriptor.description || "description missing")}`;
        const unit = metricData.descriptor.unit ? `
# UNIT ${name} ${escapeString(metricData.descriptor.unit)}` : "";
        const type = `# TYPE ${name} ${toPrometheusType(metricData)}`;
        let additionalAttributes;
        if (this._withoutScopeInfo) {
          additionalAttributes = this._additionalAttributes;
        } else {
          const scopeInfo = { [semantic_conventions_1.ATTR_OTEL_SCOPE_NAME]: scope.name };
          if (scope.schemaUrl) {
            scopeInfo[ATTR_OTEL_SCOPE_SCHEMA_URL] = scope.schemaUrl;
          }
          if (scope.version) {
            scopeInfo[semantic_conventions_1.ATTR_OTEL_SCOPE_VERSION] = scope.version;
          }
          additionalAttributes = Object.assign(scopeInfo, this._additionalAttributes);
        }
        let results = "";
        switch (dataPointType) {
          case sdk_metrics_1.DataPointType.SUM:
          case sdk_metrics_1.DataPointType.GAUGE: {
            results = metricData.dataPoints.map((it) => this._serializeSingularDataPoint(name, metricData, it, additionalAttributes)).join("");
            break;
          }
          case sdk_metrics_1.DataPointType.HISTOGRAM: {
            results = metricData.dataPoints.map((it) => this._serializeHistogramDataPoint(name, metricData, it, additionalAttributes)).join("");
            break;
          }
          default: {
            api_1.diag.error(`Unrecognizable DataPointType: ${dataPointType} for metric "${name}"`);
          }
        }
        return `${help}${unit}
${type}
${results}`.trim();
      }
      _serializeSingularDataPoint(name, data, dataPoint, additionalAttributes) {
        let results = "";
        name = enforcePrometheusNamingConvention(name, data);
        const { value, attributes } = dataPoint;
        const timestamp = (0, core_1.hrTimeToMilliseconds)(dataPoint.endTime);
        results += stringify(name, attributes, value, this._appendTimestamp ? timestamp : void 0, additionalAttributes);
        return results;
      }
      _serializeHistogramDataPoint(name, data, dataPoint, additionalAttributes) {
        let results = "";
        name = enforcePrometheusNamingConvention(name, data);
        const attributes = dataPoint.attributes;
        const histogram = dataPoint.value;
        const timestamp = (0, core_1.hrTimeToMilliseconds)(dataPoint.endTime);
        for (const key of ["count", "sum"]) {
          const value = histogram[key];
          if (value != null)
            results += stringify(name + "_" + key, attributes, value, this._appendTimestamp ? timestamp : void 0, additionalAttributes);
        }
        let cumulativeSum = 0;
        const countEntries = histogram.buckets.counts.entries();
        let infiniteBoundaryDefined = false;
        for (const [idx, val] of countEntries) {
          cumulativeSum += val;
          const upperBound = histogram.buckets.boundaries[idx];
          if (upperBound === void 0 && infiniteBoundaryDefined) {
            break;
          }
          if (upperBound === Infinity) {
            infiniteBoundaryDefined = true;
          }
          results += stringify(name + "_bucket", attributes, cumulativeSum, this._appendTimestamp ? timestamp : void 0, Object.assign({}, additionalAttributes, {
            le: upperBound === void 0 || upperBound === Infinity ? "+Inf" : String(upperBound)
          }));
        }
        return results;
      }
      _serializeResource(resource) {
        if (this._withoutTargetInfo === true) {
          return "";
        }
        const name = "target_info";
        const help = `# HELP ${name} Target metadata`;
        const type = `# TYPE ${name} gauge`;
        const results = stringify(name, resource.attributes, 1).trim();
        return `${help}
${type}
${results}
`;
      }
    };
    exports.PrometheusSerializer = PrometheusSerializer;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusExporter.js
var require_PrometheusExporter = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusExporter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrometheusExporter = void 0;
    var api_1 = (init_opentelemetry_api(), __toCommonJS(opentelemetry_api_exports));
    var core_1 = (init_opentelemetry_core(), __toCommonJS(opentelemetry_core_exports));
    var sdk_metrics_1 = (init_opentelemetry_sdk_metrics(), __toCommonJS(opentelemetry_sdk_metrics_exports));
    var http_1 = __require("http");
    var PrometheusSerializer_1 = require_PrometheusSerializer();
    var url_1 = __require("url");
    var PrometheusExporter = class _PrometheusExporter extends sdk_metrics_1.MetricReader {
      static DEFAULT_OPTIONS = {
        host: void 0,
        port: 9464,
        endpoint: "/metrics",
        prefix: "",
        appendTimestamp: false,
        withResourceConstantLabels: void 0,
        withoutScopeInfo: false,
        withoutTargetInfo: false
      };
      _host;
      _port;
      _baseUrl;
      _endpoint;
      _server;
      _prefix;
      _appendTimestamp;
      _serializer;
      _startServerPromise;
      // This will be required when histogram is implemented. Leaving here so it is not forgotten
      // Histogram cannot have a attribute named 'le'
      // private static readonly RESERVED_HISTOGRAM_LABEL = 'le';
      /**
       * Constructor
       * @param config Exporter configuration
       * @param callback Callback to be called after a server was started
       */
      constructor(config = {}, callback = () => {
      }) {
        super({
          aggregationSelector: (_instrumentType) => {
            return {
              type: sdk_metrics_1.AggregationType.DEFAULT
            };
          },
          aggregationTemporalitySelector: (_instrumentType) => sdk_metrics_1.AggregationTemporality.CUMULATIVE,
          metricProducers: config.metricProducers
        });
        this._host = config.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || _PrometheusExporter.DEFAULT_OPTIONS.host;
        this._port = config.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || _PrometheusExporter.DEFAULT_OPTIONS.port;
        this._prefix = config.prefix || _PrometheusExporter.DEFAULT_OPTIONS.prefix;
        this._appendTimestamp = typeof config.appendTimestamp === "boolean" ? config.appendTimestamp : _PrometheusExporter.DEFAULT_OPTIONS.appendTimestamp;
        const _withResourceConstantLabels = config.withResourceConstantLabels || _PrometheusExporter.DEFAULT_OPTIONS.withResourceConstantLabels;
        const _withoutScopeInfo = config.withoutScopeInfo || _PrometheusExporter.DEFAULT_OPTIONS.withoutScopeInfo;
        const _withoutTargetInfo = config.withoutTargetInfo || _PrometheusExporter.DEFAULT_OPTIONS.withoutTargetInfo;
        this._server = (0, http_1.createServer)(this._requestHandler).unref();
        this._serializer = new PrometheusSerializer_1.PrometheusSerializer(this._prefix, this._appendTimestamp, _withResourceConstantLabels, _withoutTargetInfo, _withoutScopeInfo);
        this._baseUrl = `http://${this._host}:${this._port}/`;
        this._endpoint = (config.endpoint || _PrometheusExporter.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1");
        if (config.preventServerStart !== true) {
          this.startServer().then(callback, (err) => {
            api_1.diag.error(err);
            callback(err);
          });
        } else if (callback) {
          queueMicrotask(callback);
        }
      }
      async onForceFlush() {
      }
      /**
       * Shuts down the export server and clears the registry
       */
      onShutdown() {
        return this.stopServer();
      }
      /**
       * Stops the Prometheus export server
       */
      stopServer() {
        if (!this._server) {
          api_1.diag.debug("Prometheus stopServer() was called but server was never started.");
          return Promise.resolve();
        } else {
          return new Promise((resolve) => {
            this._server.close((err) => {
              if (!err) {
                api_1.diag.debug("Prometheus exporter was stopped");
              } else {
                if (err.code !== "ERR_SERVER_NOT_RUNNING") {
                  (0, core_1.globalErrorHandler)(err);
                }
              }
              resolve();
            });
          });
        }
      }
      /**
       * Starts the Prometheus export server
       */
      startServer() {
        this._startServerPromise ??= new Promise((resolve, reject) => {
          this._server.once("error", reject);
          this._server.listen({
            port: this._port,
            host: this._host
          }, () => {
            api_1.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`);
            resolve();
          });
        });
        return this._startServerPromise;
      }
      /**
       * Request handler that responds with the current state of metrics
       * @param _request Incoming HTTP request of server instance
       * @param response HTTP response object used to response to request
       */
      getMetricsRequestHandler(_request, response) {
        this._exportMetrics(response);
      }
      /**
       * Request handler used by http library to respond to incoming requests
       * for the current state of metrics by the Prometheus backend.
       *
       * @param request Incoming HTTP request to export server
       * @param response HTTP response object used to respond to request
       */
      _requestHandler = (request, response) => {
        if (request.url != null && new url_1.URL(request.url, this._baseUrl).pathname === this._endpoint) {
          this._exportMetrics(response);
        } else {
          this._notFound(response);
        }
      };
      /**
       * Responds to incoming message with current state of all metrics.
       */
      _exportMetrics = (response) => {
        response.statusCode = 200;
        response.setHeader("content-type", "text/plain");
        this.collect().then((collectionResult) => {
          const { resourceMetrics, errors } = collectionResult;
          if (errors.length) {
            api_1.diag.error("PrometheusExporter: metrics collection errors", ...errors);
          }
          response.end(this._serializer.serialize(resourceMetrics));
        }, (err) => {
          response.end(`# failed to export metrics: ${err}`);
        });
      };
      /**
       * Responds with 404 status code to all requests that do not match the configured endpoint.
       */
      _notFound = (response) => {
        response.statusCode = 404;
        response.end();
      };
    };
    exports.PrometheusExporter = PrometheusExporter;
  }
});

// node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/@opentelemetry+exporter-prometheus@0.214.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-prometheus/build/src/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrometheusSerializer = exports.PrometheusExporter = void 0;
    var PrometheusExporter_1 = require_PrometheusExporter();
    Object.defineProperty(exports, "PrometheusExporter", { enumerable: true, get: function() {
      return PrometheusExporter_1.PrometheusExporter;
    } });
    var PrometheusSerializer_1 = require_PrometheusSerializer();
    Object.defineProperty(exports, "PrometheusSerializer", { enumerable: true, get: function() {
      return PrometheusSerializer_1.PrometheusSerializer;
    } });
  }
});
export default require_src();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXByb21ldGhldXNAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXByb21ldGhldXMvc3JjL1Byb21ldGhldXNTZXJpYWxpemVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStleHBvcnRlci1wcm9tZXRoZXVzQDAuMjE0LjBfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4xL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9leHBvcnRlci1wcm9tZXRoZXVzL3NyYy9Qcm9tZXRoZXVzRXhwb3J0ZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K2V4cG9ydGVyLXByb21ldGhldXNAMC4yMTQuMF9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjEvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXByb21ldGhldXMvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBBdHRyaWJ1dGVzLCBBdHRyaWJ1dGVWYWx1ZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2FwaSc7XG5pbXBvcnQgeyBkaWFnIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJztcbmltcG9ydCB0eXBlIHtcbiAgUmVzb3VyY2VNZXRyaWNzLFxuICBTY29wZU1ldHJpY3MsXG4gIE1ldHJpY0RhdGEsXG4gIERhdGFQb2ludCxcbiAgSGlzdG9ncmFtLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZGstbWV0cmljcyc7XG5pbXBvcnQgeyBEYXRhUG9pbnRUeXBlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLW1ldHJpY3MnO1xuaW1wb3J0IHR5cGUgeyBJbnN0cnVtZW50YXRpb25TY29wZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2NvcmUnO1xuaW1wb3J0IHsgaHJUaW1lVG9NaWxsaXNlY29uZHMgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9jb3JlJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9yZXNvdXJjZXMnO1xuaW1wb3J0IHtcbiAgQVRUUl9PVEVMX1NDT1BFX05BTUUsXG4gIEFUVFJfT1RFTF9TQ09QRV9WRVJTSU9OLFxufSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZW1hbnRpYy1jb252ZW50aW9ucyc7XG5cbi8vIFRoaXMgaXMgY3VycmVudGx5IGxpc3RlZCBhcyBleHBlcmltZW50YWwuXG5jb25zdCBBVFRSX09URUxfU0NPUEVfU0NIRU1BX1VSTCA9ICdvdGVsLnNjb3BlLnNjaGVtYV91cmwnO1xuXG50eXBlIFByb21ldGhldXNEYXRhVHlwZUxpdGVyYWwgPVxuICB8ICdjb3VudGVyJ1xuICB8ICdnYXVnZSdcbiAgfCAnaGlzdG9ncmFtJ1xuICB8ICdzdW1tYXJ5J1xuICB8ICd1bnR5cGVkJztcblxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59XG5cbi8qKlxuICogU3RyaW5nIEF0dHJpYnV0ZSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCBkaXJlY3RseSB0byBQcm9tZXRoZXVzIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gKiBOb24tc3RyaW5nIHZhbHVlcyBhcmUgcmVwcmVzZW50ZWQgYXMgSlNPTi1lbmNvZGVkIHN0cmluZ3MuXG4gKlxuICogYHVuZGVmaW5lZGAgaXMgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlQXR0cmlidXRlVmFsdWUoc3RyOiBBdHRyaWJ1dGVWYWx1ZSA9ICcnKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHN0ciA9IEpTT04uc3RyaW5naWZ5KHN0cik7XG4gIH1cbiAgcmV0dXJuIGVzY2FwZVN0cmluZyhzdHIpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcbn1cblxuY29uc3QgaW52YWxpZENoYXJhY3RlclJlZ2V4ID0gL1teYS16MC05X10vZ2k7XG5jb25zdCBtdWx0aXBsZVVuZGVyc2NvcmVSZWdleCA9IC9fezIsfS9nO1xuXG4vKipcbiAqIEVuc3VyZXMgbWV0cmljIG5hbWVzIGFyZSB2YWxpZCBQcm9tZXRoZXVzIG1ldHJpYyBuYW1lcyBieSByZW1vdmluZ1xuICogY2hhcmFjdGVycyBhbGxvd2VkIGJ5IE9wZW5UZWxlbWV0cnkgYnV0IGRpc2FsbG93ZWQgYnkgUHJvbWV0aGV1cy5cbiAqXG4gKiBodHRwczovL3Byb21ldGhldXMuaW8vZG9jcy9jb25jZXB0cy9kYXRhX21vZGVsLyNtZXRyaWMtbmFtZXMtYW5kLWF0dHJpYnV0ZXNcbiAqXG4gKiAxLiBOYW1lcyBtdXN0IG1hdGNoIGBbYS16QS1aXzpdW2EtekEtWjAtOV86XSpgXG4gKlxuICogMi4gQ29sb25zIGFyZSByZXNlcnZlZCBmb3IgdXNlciBkZWZpbmVkIHJlY29yZGluZyBydWxlcy5cbiAqIFRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGJ5IGV4cG9ydGVycyBvciBkaXJlY3QgaW5zdHJ1bWVudGF0aW9uLlxuICpcbiAqIE9wZW5UZWxlbWV0cnkgbWV0cmljIG5hbWVzIGFyZSBhbHJlYWR5IHZhbGlkYXRlZCBpbiB0aGUgTWV0ZXIgd2hlbiB0aGV5IGFyZSBjcmVhdGVkLFxuICogYW5kIHRoZXkgbWF0Y2ggdGhlIGZvcm1hdCBgW2EtekEtWl1bYS16QS1aMC05Xy5cXC1dKmAgd2hpY2ggaXMgdmVyeSBjbG9zZSB0byBhIHZhbGlkXG4gKiBwcm9tZXRoZXVzIG1ldHJpYyBuYW1lLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc3RyaXAgY2hhcmFjdGVycyB2YWxpZCBpbiBPcGVuVGVsZW1ldHJ5XG4gKiBidXQgbm90IHZhbGlkIGluIHByb21ldGhldXMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoICdfJy5cbiAqXG4gKiBAcGFyYW0gbmFtZSBuYW1lIHRvIGJlIHNhbml0aXplZFxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZVByb21ldGhldXNNZXRyaWNOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHJlcGxhY2UgYWxsIGludmFsaWQgY2hhcmFjdGVycyB3aXRoICdfJ1xuICByZXR1cm4gbmFtZVxuICAgIC5yZXBsYWNlKGludmFsaWRDaGFyYWN0ZXJSZWdleCwgJ18nKVxuICAgIC5yZXBsYWNlKG11bHRpcGxlVW5kZXJzY29yZVJlZ2V4LCAnXycpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKlxuICogSGVscGVyIG1ldGhvZCB3aGljaCBhc3Npc3RzIGluIGVuZm9yY2luZyB0aGUgbmFtaW5nIGNvbnZlbnRpb25zIGZvciBtZXRyaWNcbiAqIG5hbWVzIGluIFByb21ldGhldXNcbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBtZXRyaWNcbiAqIEBwYXJhbSB0eXBlIHRoZSBraW5kIG9mIG1ldHJpY1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGVuZm9yY2VQcm9tZXRoZXVzTmFtaW5nQ29udmVudGlvbihcbiAgbmFtZTogc3RyaW5nLFxuICBkYXRhOiBNZXRyaWNEYXRhXG4pOiBzdHJpbmcge1xuICAvLyBQcm9tZXRoZXVzIHJlcXVpcmVzIHRoYXQgbWV0cmljcyBvZiB0aGUgQ291bnRlciBraW5kIGhhdmUgXCJfdG90YWxcIiBzdWZmaXhcbiAgaWYgKFxuICAgICFuYW1lLmVuZHNXaXRoKCdfdG90YWwnKSAmJlxuICAgIGRhdGEuZGF0YVBvaW50VHlwZSA9PT0gRGF0YVBvaW50VHlwZS5TVU0gJiZcbiAgICBkYXRhLmlzTW9ub3RvbmljXG4gICkge1xuICAgIG5hbWUgPSBuYW1lICsgJ190b3RhbCc7XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdmFsdWVTdHJpbmcodmFsdWU6IG51bWJlcikge1xuICBpZiAodmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgcmV0dXJuICcrSW5mJztcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gLUluZmluaXR5KSB7XG4gICAgcmV0dXJuICctSW5mJztcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgZmluaXRlIG51bWJlcnMgYW5kIE5hTi5cbiAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b1Byb21ldGhldXNUeXBlKG1ldHJpY0RhdGE6IE1ldHJpY0RhdGEpOiBQcm9tZXRoZXVzRGF0YVR5cGVMaXRlcmFsIHtcbiAgc3dpdGNoIChtZXRyaWNEYXRhLmRhdGFQb2ludFR5cGUpIHtcbiAgICBjYXNlIERhdGFQb2ludFR5cGUuU1VNOlxuICAgICAgaWYgKG1ldHJpY0RhdGEuaXNNb25vdG9uaWMpIHtcbiAgICAgICAgcmV0dXJuICdjb3VudGVyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZ2F1Z2UnO1xuICAgIGNhc2UgRGF0YVBvaW50VHlwZS5HQVVHRTpcbiAgICAgIHJldHVybiAnZ2F1Z2UnO1xuICAgIGNhc2UgRGF0YVBvaW50VHlwZS5ISVNUT0dSQU06XG4gICAgICByZXR1cm4gJ2hpc3RvZ3JhbSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndW50eXBlZCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KFxuICBtZXRyaWNOYW1lOiBzdHJpbmcsXG4gIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMsXG4gIHZhbHVlOiBudW1iZXIsXG4gIHRpbWVzdGFtcD86IG51bWJlcixcbiAgYWRkaXRpb25hbEF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVzXG4pIHtcbiAgbGV0IGhhc0F0dHJpYnV0ZSA9IGZhbHNlO1xuICBsZXQgYXR0cmlidXRlc1N0ciA9ICcnO1xuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgIGNvbnN0IHNhbml0aXplZEF0dHJpYnV0ZU5hbWUgPSBzYW5pdGl6ZVByb21ldGhldXNNZXRyaWNOYW1lKGtleSk7XG4gICAgaGFzQXR0cmlidXRlID0gdHJ1ZTtcbiAgICBhdHRyaWJ1dGVzU3RyICs9IGAke1xuICAgICAgYXR0cmlidXRlc1N0ci5sZW5ndGggPiAwID8gJywnIDogJydcbiAgICB9JHtzYW5pdGl6ZWRBdHRyaWJ1dGVOYW1lfT1cIiR7ZXNjYXBlQXR0cmlidXRlVmFsdWUodmFsKX1cImA7XG4gIH1cbiAgaWYgKGFkZGl0aW9uYWxBdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGFkZGl0aW9uYWxBdHRyaWJ1dGVzKSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkQXR0cmlidXRlTmFtZSA9IHNhbml0aXplUHJvbWV0aGV1c01ldHJpY05hbWUoa2V5KTtcbiAgICAgIGhhc0F0dHJpYnV0ZSA9IHRydWU7XG4gICAgICBhdHRyaWJ1dGVzU3RyICs9IGAke1xuICAgICAgICBhdHRyaWJ1dGVzU3RyLmxlbmd0aCA+IDAgPyAnLCcgOiAnJ1xuICAgICAgfSR7c2FuaXRpemVkQXR0cmlidXRlTmFtZX09XCIke2VzY2FwZUF0dHJpYnV0ZVZhbHVlKHZhbCl9XCJgO1xuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNBdHRyaWJ1dGUpIHtcbiAgICBtZXRyaWNOYW1lICs9IGB7JHthdHRyaWJ1dGVzU3RyfX1gO1xuICB9XG5cbiAgcmV0dXJuIGAke21ldHJpY05hbWV9ICR7dmFsdWVTdHJpbmcodmFsdWUpfSR7XG4gICAgdGltZXN0YW1wICE9PSB1bmRlZmluZWQgPyAnICcgKyBTdHJpbmcodGltZXN0YW1wKSA6ICcnXG4gIH1cXG5gO1xufVxuXG5jb25zdCBOT19SRUdJU1RFUkVEX01FVFJJQ1MgPSAnIyBubyByZWdpc3RlcmVkIG1ldHJpY3MnO1xuXG5leHBvcnQgY2xhc3MgUHJvbWV0aGV1c1NlcmlhbGl6ZXIge1xuICBwcml2YXRlIF9wcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfYXBwZW5kVGltZXN0YW1wOiBib29sZWFuO1xuICBwcml2YXRlIF9hZGRpdGlvbmFsQXR0cmlidXRlczogQXR0cmlidXRlcyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfd2l0aFJlc291cmNlQ29uc3RhbnRMYWJlbHM6IFJlZ0V4cCB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfd2l0aG91dFNjb3BlSW5mbzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfd2l0aG91dFRhcmdldEluZm86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJlZml4Pzogc3RyaW5nLFxuICAgIGFwcGVuZFRpbWVzdGFtcCA9IGZhbHNlLFxuICAgIHdpdGhSZXNvdXJjZUNvbnN0YW50TGFiZWxzPzogUmVnRXhwLFxuICAgIHdpdGhvdXRUYXJnZXRJbmZvPzogYm9vbGVhbixcbiAgICB3aXRob3V0U2NvcGVJbmZvPzogYm9vbGVhblxuICApIHtcbiAgICBpZiAocHJlZml4KSB7XG4gICAgICB0aGlzLl9wcmVmaXggPSBwcmVmaXggKyAnXyc7XG4gICAgfVxuICAgIHRoaXMuX2FwcGVuZFRpbWVzdGFtcCA9IGFwcGVuZFRpbWVzdGFtcDtcbiAgICB0aGlzLl93aXRoUmVzb3VyY2VDb25zdGFudExhYmVscyA9IHdpdGhSZXNvdXJjZUNvbnN0YW50TGFiZWxzO1xuICAgIHRoaXMuX3dpdGhvdXRTY29wZUluZm8gPSAhIXdpdGhvdXRTY29wZUluZm87XG4gICAgdGhpcy5fd2l0aG91dFRhcmdldEluZm8gPSAhIXdpdGhvdXRUYXJnZXRJbmZvO1xuICB9XG5cbiAgc2VyaWFsaXplKHJlc291cmNlTWV0cmljczogUmVzb3VyY2VNZXRyaWNzKTogc3RyaW5nIHtcbiAgICBsZXQgc3RyID0gJyc7XG5cbiAgICB0aGlzLl9hZGRpdGlvbmFsQXR0cmlidXRlcyA9IHRoaXMuX2ZpbHRlclJlc291cmNlQ29uc3RhbnRMYWJlbHMoXG4gICAgICByZXNvdXJjZU1ldHJpY3MucmVzb3VyY2UuYXR0cmlidXRlcyxcbiAgICAgIHRoaXMuX3dpdGhSZXNvdXJjZUNvbnN0YW50TGFiZWxzXG4gICAgKTtcblxuICAgIGZvciAoY29uc3Qgc2NvcGVNZXRyaWNzIG9mIHJlc291cmNlTWV0cmljcy5zY29wZU1ldHJpY3MpIHtcbiAgICAgIHN0ciArPSB0aGlzLl9zZXJpYWxpemVTY29wZU1ldHJpY3Moc2NvcGVNZXRyaWNzKTtcbiAgICB9XG5cbiAgICBpZiAoc3RyID09PSAnJykge1xuICAgICAgc3RyICs9IE5PX1JFR0lTVEVSRURfTUVUUklDUztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VyaWFsaXplUmVzb3VyY2UocmVzb3VyY2VNZXRyaWNzLnJlc291cmNlKSArIHN0cjtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlclJlc291cmNlQ29uc3RhbnRMYWJlbHMoXG4gICAgYXR0cmlidXRlczogQXR0cmlidXRlcyxcbiAgICBwYXR0ZXJuOiBSZWdFeHAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQXR0cmlidXRlczogQXR0cmlidXRlcyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgaWYgKGtleS5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgICAgIGZpbHRlcmVkQXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXJlZEF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcmlhbGl6ZVNjb3BlTWV0cmljcyhzY29wZU1ldHJpY3M6IFNjb3BlTWV0cmljcykge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGNvbnN0IG1ldHJpYyBvZiBzY29wZU1ldHJpY3MubWV0cmljcykge1xuICAgICAgc3RyICs9IHRoaXMuX3NlcmlhbGl6ZU1ldHJpY0RhdGEobWV0cmljLCBzY29wZU1ldHJpY3Muc2NvcGUpICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVNZXRyaWNEYXRhKFxuICAgIG1ldHJpY0RhdGE6IE1ldHJpY0RhdGEsXG4gICAgc2NvcGU6IEluc3RydW1lbnRhdGlvblNjb3BlXG4gICkge1xuICAgIGxldCBuYW1lID0gc2FuaXRpemVQcm9tZXRoZXVzTWV0cmljTmFtZShcbiAgICAgIGVzY2FwZVN0cmluZyhtZXRyaWNEYXRhLmRlc2NyaXB0b3IubmFtZSlcbiAgICApO1xuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIG5hbWUgPSBgJHt0aGlzLl9wcmVmaXh9JHtuYW1lfWA7XG4gICAgfVxuICAgIGNvbnN0IGRhdGFQb2ludFR5cGUgPSBtZXRyaWNEYXRhLmRhdGFQb2ludFR5cGU7XG5cbiAgICBuYW1lID0gZW5mb3JjZVByb21ldGhldXNOYW1pbmdDb252ZW50aW9uKG5hbWUsIG1ldHJpY0RhdGEpO1xuXG4gICAgY29uc3QgaGVscCA9IGAjIEhFTFAgJHtuYW1lfSAke2VzY2FwZVN0cmluZyhcbiAgICAgIG1ldHJpY0RhdGEuZGVzY3JpcHRvci5kZXNjcmlwdGlvbiB8fCAnZGVzY3JpcHRpb24gbWlzc2luZydcbiAgICApfWA7XG4gICAgY29uc3QgdW5pdCA9IG1ldHJpY0RhdGEuZGVzY3JpcHRvci51bml0XG4gICAgICA/IGBcXG4jIFVOSVQgJHtuYW1lfSAke2VzY2FwZVN0cmluZyhtZXRyaWNEYXRhLmRlc2NyaXB0b3IudW5pdCl9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCB0eXBlID0gYCMgVFlQRSAke25hbWV9ICR7dG9Qcm9tZXRoZXVzVHlwZShtZXRyaWNEYXRhKX1gO1xuICAgIGxldCBhZGRpdGlvbmFsQXR0cmlidXRlczogQXR0cmlidXRlcyB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLl93aXRob3V0U2NvcGVJbmZvKSB7XG4gICAgICBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IHRoaXMuX2FkZGl0aW9uYWxBdHRyaWJ1dGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY29wZUluZm86IEF0dHJpYnV0ZXMgPSB7IFtBVFRSX09URUxfU0NPUEVfTkFNRV06IHNjb3BlLm5hbWUgfTtcblxuICAgICAgaWYgKHNjb3BlLnNjaGVtYVVybCkge1xuICAgICAgICBzY29wZUluZm9bQVRUUl9PVEVMX1NDT1BFX1NDSEVNQV9VUkxdID0gc2NvcGUuc2NoZW1hVXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NvcGUudmVyc2lvbikge1xuICAgICAgICBzY29wZUluZm9bQVRUUl9PVEVMX1NDT1BFX1ZFUlNJT05dID0gc2NvcGUudmVyc2lvbjtcbiAgICAgIH1cblxuICAgICAgYWRkaXRpb25hbEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBzY29wZUluZm8sXG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxBdHRyaWJ1dGVzXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gJyc7XG4gICAgc3dpdGNoIChkYXRhUG9pbnRUeXBlKSB7XG4gICAgICBjYXNlIERhdGFQb2ludFR5cGUuU1VNOlxuICAgICAgY2FzZSBEYXRhUG9pbnRUeXBlLkdBVUdFOiB7XG4gICAgICAgIHJlc3VsdHMgPSBtZXRyaWNEYXRhLmRhdGFQb2ludHNcbiAgICAgICAgICAubWFwKGl0ID0+XG4gICAgICAgICAgICB0aGlzLl9zZXJpYWxpemVTaW5ndWxhckRhdGFQb2ludChcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgbWV0cmljRGF0YSxcbiAgICAgICAgICAgICAgaXQsXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxBdHRyaWJ1dGVzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIERhdGFQb2ludFR5cGUuSElTVE9HUkFNOiB7XG4gICAgICAgIHJlc3VsdHMgPSBtZXRyaWNEYXRhLmRhdGFQb2ludHNcbiAgICAgICAgICAubWFwKGl0ID0+XG4gICAgICAgICAgICB0aGlzLl9zZXJpYWxpemVIaXN0b2dyYW1EYXRhUG9pbnQoXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIG1ldHJpY0RhdGEsXG4gICAgICAgICAgICAgIGl0LFxuICAgICAgICAgICAgICBhZGRpdGlvbmFsQXR0cmlidXRlc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBkaWFnLmVycm9yKFxuICAgICAgICAgIGBVbnJlY29nbml6YWJsZSBEYXRhUG9pbnRUeXBlOiAke2RhdGFQb2ludFR5cGV9IGZvciBtZXRyaWMgXCIke25hbWV9XCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2hlbHB9JHt1bml0fVxcbiR7dHlwZX1cXG4ke3Jlc3VsdHN9YC50cmltKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVTaW5ndWxhckRhdGFQb2ludChcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgZGF0YTogTWV0cmljRGF0YSxcbiAgICBkYXRhUG9pbnQ6IERhdGFQb2ludDxudW1iZXI+LFxuICAgIGFkZGl0aW9uYWxBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzIHwgdW5kZWZpbmVkXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdHMgPSAnJztcblxuICAgIG5hbWUgPSBlbmZvcmNlUHJvbWV0aGV1c05hbWluZ0NvbnZlbnRpb24obmFtZSwgZGF0YSk7XG4gICAgY29uc3QgeyB2YWx1ZSwgYXR0cmlidXRlcyB9ID0gZGF0YVBvaW50O1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGhyVGltZVRvTWlsbGlzZWNvbmRzKGRhdGFQb2ludC5lbmRUaW1lKTtcbiAgICByZXN1bHRzICs9IHN0cmluZ2lmeShcbiAgICAgIG5hbWUsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLl9hcHBlbmRUaW1lc3RhbXAgPyB0aW1lc3RhbXAgOiB1bmRlZmluZWQsXG4gICAgICBhZGRpdGlvbmFsQXR0cmlidXRlc1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVIaXN0b2dyYW1EYXRhUG9pbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGRhdGE6IE1ldHJpY0RhdGEsXG4gICAgZGF0YVBvaW50OiBEYXRhUG9pbnQ8SGlzdG9ncmFtPixcbiAgICBhZGRpdGlvbmFsQXR0cmlidXRlczogQXR0cmlidXRlcyB8IHVuZGVmaW5lZFxuICApOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHRzID0gJyc7XG5cbiAgICBuYW1lID0gZW5mb3JjZVByb21ldGhldXNOYW1pbmdDb252ZW50aW9uKG5hbWUsIGRhdGEpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkYXRhUG9pbnQuYXR0cmlidXRlcztcbiAgICBjb25zdCBoaXN0b2dyYW0gPSBkYXRhUG9pbnQudmFsdWU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gaHJUaW1lVG9NaWxsaXNlY29uZHMoZGF0YVBvaW50LmVuZFRpbWUpO1xuICAgIC8qKiBIaXN0b2dyYW1bXCJidWNrZXRcIl0gaXMgbm90IHR5cGVkIHdpdGggYG51bWJlcmAgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBbJ2NvdW50JywgJ3N1bSddIGFzICgnY291bnQnIHwgJ3N1bScpW10pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaGlzdG9ncmFtW2tleV07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgICAgcmVzdWx0cyArPSBzdHJpbmdpZnkoXG4gICAgICAgICAgbmFtZSArICdfJyArIGtleSxcbiAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHRoaXMuX2FwcGVuZFRpbWVzdGFtcCA/IHRpbWVzdGFtcCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBhZGRpdGlvbmFsQXR0cmlidXRlc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGxldCBjdW11bGF0aXZlU3VtID0gMDtcbiAgICBjb25zdCBjb3VudEVudHJpZXMgPSBoaXN0b2dyYW0uYnVja2V0cy5jb3VudHMuZW50cmllcygpO1xuICAgIGxldCBpbmZpbml0ZUJvdW5kYXJ5RGVmaW5lZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgW2lkeCwgdmFsXSBvZiBjb3VudEVudHJpZXMpIHtcbiAgICAgIGN1bXVsYXRpdmVTdW0gKz0gdmFsO1xuICAgICAgY29uc3QgdXBwZXJCb3VuZCA9IGhpc3RvZ3JhbS5idWNrZXRzLmJvdW5kYXJpZXNbaWR4XTtcbiAgICAgIC8qKiBIaXN0b2dyYW1BZ2dyZWdhdG9yIGlzIHByb2R1Y2luZyBkaWZmZXJlbnQgYm91bmRhcnkgb3V0cHV0IC1cbiAgICAgICAqIGluIG9uZSBjYXNlIG5vdCBpbmNsdWRpbmcgaW5maW5pdHkgdmFsdWVzLCBpbiBvdGhlciAtXG4gICAgICAgKiBmdWxsLCBlLmcuIFswLCAxMDBdIGFuZCBbMCwgMTAwLCBJbmZpbml0eV1cbiAgICAgICAqIHdlIHNob3VsZCBjb25zaWRlciB0aGF0IGluIGV4cG9ydCwgaWYgSW5maW5pdHkgaXMgZGVmaW5lZCwgdXNlIGl0XG4gICAgICAgKiBhcyBib3VuZGFyeVxuICAgICAgICovXG4gICAgICBpZiAodXBwZXJCb3VuZCA9PT0gdW5kZWZpbmVkICYmIGluZmluaXRlQm91bmRhcnlEZWZpbmVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHVwcGVyQm91bmQgPT09IEluZmluaXR5KSB7XG4gICAgICAgIGluZmluaXRlQm91bmRhcnlEZWZpbmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMgKz0gc3RyaW5naWZ5KFxuICAgICAgICBuYW1lICsgJ19idWNrZXQnLFxuICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICBjdW11bGF0aXZlU3VtLFxuICAgICAgICB0aGlzLl9hcHBlbmRUaW1lc3RhbXAgPyB0aW1lc3RhbXAgOiB1bmRlZmluZWQsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFkZGl0aW9uYWxBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbGU6XG4gICAgICAgICAgICB1cHBlckJvdW5kID09PSB1bmRlZmluZWQgfHwgdXBwZXJCb3VuZCA9PT0gSW5maW5pdHlcbiAgICAgICAgICAgICAgPyAnK0luZidcbiAgICAgICAgICAgICAgOiBTdHJpbmcodXBwZXJCb3VuZCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXJpYWxpemVSZXNvdXJjZShyZXNvdXJjZTogUmVzb3VyY2UpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl93aXRob3V0VGFyZ2V0SW5mbyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSAndGFyZ2V0X2luZm8nO1xuICAgIGNvbnN0IGhlbHAgPSBgIyBIRUxQICR7bmFtZX0gVGFyZ2V0IG1ldGFkYXRhYDtcbiAgICBjb25zdCB0eXBlID0gYCMgVFlQRSAke25hbWV9IGdhdWdlYDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBzdHJpbmdpZnkobmFtZSwgcmVzb3VyY2UuYXR0cmlidXRlcywgMSkudHJpbSgpO1xuICAgIHJldHVybiBgJHtoZWxwfVxcbiR7dHlwZX1cXG4ke3Jlc3VsdHN9XFxuYDtcbiAgfVxufVxuIiwgIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBkaWFnIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJztcbmltcG9ydCB7IGdsb2JhbEVycm9ySGFuZGxlciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2NvcmUnO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRpb25UZW1wb3JhbGl0eSxcbiAgQWdncmVnYXRpb25UeXBlLFxuICBNZXRyaWNSZWFkZXIsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay1tZXRyaWNzJztcbmltcG9ydCB0eXBlIHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXIsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tICdodHRwJztcbmltcG9ydCB0eXBlIHsgRXhwb3J0ZXJDb25maWcgfSBmcm9tICcuL2V4cG9ydC90eXBlcyc7XG5pbXBvcnQgeyBQcm9tZXRoZXVzU2VyaWFsaXplciB9IGZyb20gJy4vUHJvbWV0aGV1c1NlcmlhbGl6ZXInO1xuLyoqIE5vZGUuanMgdjgueCBjb21wYXQgKi9cbmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9tZXRoZXVzRXhwb3J0ZXIgZXh0ZW5kcyBNZXRyaWNSZWFkZXIge1xuICBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIGhvc3Q6IHVuZGVmaW5lZCxcbiAgICBwb3J0OiA5NDY0LFxuICAgIGVuZHBvaW50OiAnL21ldHJpY3MnLFxuICAgIHByZWZpeDogJycsXG4gICAgYXBwZW5kVGltZXN0YW1wOiBmYWxzZSxcbiAgICB3aXRoUmVzb3VyY2VDb25zdGFudExhYmVsczogdW5kZWZpbmVkLFxuICAgIHdpdGhvdXRTY29wZUluZm86IGZhbHNlLFxuICAgIHdpdGhvdXRUYXJnZXRJbmZvOiBmYWxzZSxcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9ob3N0Pzogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wb3J0OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfZW5kcG9pbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VydmVyOiBTZXJ2ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYXBwZW5kVGltZXN0YW1wOiBib29sZWFuO1xuICBwcml2YXRlIF9zZXJpYWxpemVyOiBQcm9tZXRoZXVzU2VyaWFsaXplcjtcbiAgcHJpdmF0ZSBfc3RhcnRTZXJ2ZXJQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkO1xuXG4gIC8vIFRoaXMgd2lsbCBiZSByZXF1aXJlZCB3aGVuIGhpc3RvZ3JhbSBpcyBpbXBsZW1lbnRlZC4gTGVhdmluZyBoZXJlIHNvIGl0IGlzIG5vdCBmb3Jnb3R0ZW5cbiAgLy8gSGlzdG9ncmFtIGNhbm5vdCBoYXZlIGEgYXR0cmlidXRlIG5hbWVkICdsZSdcbiAgLy8gcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUkVTRVJWRURfSElTVE9HUkFNX0xBQkVMID0gJ2xlJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGNvbmZpZyBFeHBvcnRlciBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgYWZ0ZXIgYSBzZXJ2ZXIgd2FzIHN0YXJ0ZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmZpZzogRXhwb3J0ZXJDb25maWcgPSB7fSxcbiAgICBjYWxsYmFjazogKGVycm9yOiBFcnJvciB8IHZvaWQpID0+IHZvaWQgPSAoKSA9PiB7fVxuICApIHtcbiAgICBzdXBlcih7XG4gICAgICBhZ2dyZWdhdGlvblNlbGVjdG9yOiBfaW5zdHJ1bWVudFR5cGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IEFnZ3JlZ2F0aW9uVHlwZS5ERUZBVUxULFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHlTZWxlY3RvcjogX2luc3RydW1lbnRUeXBlID0+XG4gICAgICAgIEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkuQ1VNVUxBVElWRSxcbiAgICAgIG1ldHJpY1Byb2R1Y2VyczogY29uZmlnLm1ldHJpY1Byb2R1Y2VycyxcbiAgICB9KTtcbiAgICB0aGlzLl9ob3N0ID1cbiAgICAgIGNvbmZpZy5ob3N0IHx8XG4gICAgICBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX1BST01FVEhFVVNfSE9TVCB8fFxuICAgICAgUHJvbWV0aGV1c0V4cG9ydGVyLkRFRkFVTFRfT1BUSU9OUy5ob3N0O1xuICAgIHRoaXMuX3BvcnQgPVxuICAgICAgY29uZmlnLnBvcnQgfHxcbiAgICAgIE51bWJlcihwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX1BST01FVEhFVVNfUE9SVCkgfHxcbiAgICAgIFByb21ldGhldXNFeHBvcnRlci5ERUZBVUxUX09QVElPTlMucG9ydDtcbiAgICB0aGlzLl9wcmVmaXggPSBjb25maWcucHJlZml4IHx8IFByb21ldGhldXNFeHBvcnRlci5ERUZBVUxUX09QVElPTlMucHJlZml4O1xuICAgIHRoaXMuX2FwcGVuZFRpbWVzdGFtcCA9XG4gICAgICB0eXBlb2YgY29uZmlnLmFwcGVuZFRpbWVzdGFtcCA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgID8gY29uZmlnLmFwcGVuZFRpbWVzdGFtcFxuICAgICAgICA6IFByb21ldGhldXNFeHBvcnRlci5ERUZBVUxUX09QVElPTlMuYXBwZW5kVGltZXN0YW1wO1xuICAgIGNvbnN0IF93aXRoUmVzb3VyY2VDb25zdGFudExhYmVscyA9XG4gICAgICBjb25maWcud2l0aFJlc291cmNlQ29uc3RhbnRMYWJlbHMgfHxcbiAgICAgIFByb21ldGhldXNFeHBvcnRlci5ERUZBVUxUX09QVElPTlMud2l0aFJlc291cmNlQ29uc3RhbnRMYWJlbHM7XG4gICAgY29uc3QgX3dpdGhvdXRTY29wZUluZm8gPVxuICAgICAgY29uZmlnLndpdGhvdXRTY29wZUluZm8gfHxcbiAgICAgIFByb21ldGhldXNFeHBvcnRlci5ERUZBVUxUX09QVElPTlMud2l0aG91dFNjb3BlSW5mbztcbiAgICBjb25zdCBfd2l0aG91dFRhcmdldEluZm8gPVxuICAgICAgY29uZmlnLndpdGhvdXRUYXJnZXRJbmZvIHx8XG4gICAgICBQcm9tZXRoZXVzRXhwb3J0ZXIuREVGQVVMVF9PUFRJT05TLndpdGhvdXRUYXJnZXRJbmZvO1xuICAgIC8vIHVucmVmIHRvIHByZXZlbnQgcHJvbWV0aGV1cyBleHBvcnRlciBmcm9tIGhvbGRpbmcgdGhlIHByb2Nlc3Mgb3BlbiBvbiBleGl0XG4gICAgdGhpcy5fc2VydmVyID0gY3JlYXRlU2VydmVyKHRoaXMuX3JlcXVlc3RIYW5kbGVyKS51bnJlZigpO1xuICAgIHRoaXMuX3NlcmlhbGl6ZXIgPSBuZXcgUHJvbWV0aGV1c1NlcmlhbGl6ZXIoXG4gICAgICB0aGlzLl9wcmVmaXgsXG4gICAgICB0aGlzLl9hcHBlbmRUaW1lc3RhbXAsXG4gICAgICBfd2l0aFJlc291cmNlQ29uc3RhbnRMYWJlbHMsXG4gICAgICBfd2l0aG91dFRhcmdldEluZm8sXG4gICAgICBfd2l0aG91dFNjb3BlSW5mb1xuICAgICk7XG5cbiAgICB0aGlzLl9iYXNlVXJsID0gYGh0dHA6Ly8ke3RoaXMuX2hvc3R9OiR7dGhpcy5fcG9ydH0vYDtcbiAgICB0aGlzLl9lbmRwb2ludCA9IChcbiAgICAgIGNvbmZpZy5lbmRwb2ludCB8fCBQcm9tZXRoZXVzRXhwb3J0ZXIuREVGQVVMVF9PUFRJT05TLmVuZHBvaW50XG4gICAgKS5yZXBsYWNlKC9eKFteL10pLywgJy8kMScpO1xuXG4gICAgaWYgKGNvbmZpZy5wcmV2ZW50U2VydmVyU3RhcnQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuc3RhcnRTZXJ2ZXIoKS50aGVuKGNhbGxiYWNrLCBlcnIgPT4ge1xuICAgICAgICBkaWFnLmVycm9yKGVycik7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAvLyBEbyBub3QgaW52b2tlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHRvIGF2b2lkIHphbGdvIHByb2JsZW0uXG4gICAgICBxdWV1ZU1pY3JvdGFzayhjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgb25Gb3JjZUZsdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8qKiBkbyBub3RoaW5nICovXG4gIH1cblxuICAvKipcbiAgICogU2h1dHMgZG93biB0aGUgZXhwb3J0IHNlcnZlciBhbmQgY2xlYXJzIHRoZSByZWdpc3RyeVxuICAgKi9cbiAgb3ZlcnJpZGUgb25TaHV0ZG93bigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9wU2VydmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIFByb21ldGhldXMgZXhwb3J0IHNlcnZlclxuICAgKi9cbiAgc3RvcFNlcnZlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX3NlcnZlcikge1xuICAgICAgZGlhZy5kZWJ1ZyhcbiAgICAgICAgJ1Byb21ldGhldXMgc3RvcFNlcnZlcigpIHdhcyBjYWxsZWQgYnV0IHNlcnZlciB3YXMgbmV2ZXIgc3RhcnRlZC4nXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMuX3NlcnZlci5jbG9zZShlcnIgPT4ge1xuICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICBkaWFnLmRlYnVnKCdQcm9tZXRoZXVzIGV4cG9ydGVyIHdhcyBzdG9wcGVkJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKGVyciBhcyB1bmtub3duIGFzIHsgY29kZTogc3RyaW5nIH0pLmNvZGUgIT09XG4gICAgICAgICAgICAgICdFUlJfU0VSVkVSX05PVF9SVU5OSU5HJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEVycm9ySGFuZGxlcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgUHJvbWV0aGV1cyBleHBvcnQgc2VydmVyXG4gICAqL1xuICBzdGFydFNlcnZlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9zdGFydFNlcnZlclByb21pc2UgPz89IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NlcnZlci5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICB0aGlzLl9zZXJ2ZXIubGlzdGVuKFxuICAgICAgICB7XG4gICAgICAgICAgcG9ydDogdGhpcy5fcG9ydCxcbiAgICAgICAgICBob3N0OiB0aGlzLl9ob3N0LFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgZGlhZy5kZWJ1ZyhcbiAgICAgICAgICAgIGBQcm9tZXRoZXVzIGV4cG9ydGVyIHNlcnZlciBzdGFydGVkOiAke3RoaXMuX2hvc3R9OiR7dGhpcy5fcG9ydH0vJHt0aGlzLl9lbmRwb2ludH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnRTZXJ2ZXJQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgaGFuZGxlciB0aGF0IHJlc3BvbmRzIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgbWV0cmljc1xuICAgKiBAcGFyYW0gX3JlcXVlc3QgSW5jb21pbmcgSFRUUCByZXF1ZXN0IG9mIHNlcnZlciBpbnN0YW5jZVxuICAgKiBAcGFyYW0gcmVzcG9uc2UgSFRUUCByZXNwb25zZSBvYmplY3QgdXNlZCB0byByZXNwb25zZSB0byByZXF1ZXN0XG4gICAqL1xuICBwdWJsaWMgZ2V0TWV0cmljc1JlcXVlc3RIYW5kbGVyKFxuICAgIF9yZXF1ZXN0OiBJbmNvbWluZ01lc3NhZ2UsXG4gICAgcmVzcG9uc2U6IFNlcnZlclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX2V4cG9ydE1ldHJpY3MocmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgaGFuZGxlciB1c2VkIGJ5IGh0dHAgbGlicmFyeSB0byByZXNwb25kIHRvIGluY29taW5nIHJlcXVlc3RzXG4gICAqIGZvciB0aGUgY3VycmVudCBzdGF0ZSBvZiBtZXRyaWNzIGJ5IHRoZSBQcm9tZXRoZXVzIGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0IEluY29taW5nIEhUVFAgcmVxdWVzdCB0byBleHBvcnQgc2VydmVyXG4gICAqIEBwYXJhbSByZXNwb25zZSBIVFRQIHJlc3BvbnNlIG9iamVjdCB1c2VkIHRvIHJlc3BvbmQgdG8gcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVxdWVzdEhhbmRsZXIgPSAoXG4gICAgcmVxdWVzdDogSW5jb21pbmdNZXNzYWdlLFxuICAgIHJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZVxuICApID0+IHtcbiAgICBpZiAoXG4gICAgICByZXF1ZXN0LnVybCAhPSBudWxsICYmXG4gICAgICBuZXcgVVJMKHJlcXVlc3QudXJsLCB0aGlzLl9iYXNlVXJsKS5wYXRobmFtZSA9PT0gdGhpcy5fZW5kcG9pbnRcbiAgICApIHtcbiAgICAgIHRoaXMuX2V4cG9ydE1ldHJpY3MocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ub3RGb3VuZChyZXNwb25zZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNwb25kcyB0byBpbmNvbWluZyBtZXNzYWdlIHdpdGggY3VycmVudCBzdGF0ZSBvZiBhbGwgbWV0cmljcy5cbiAgICovXG4gIHByaXZhdGUgX2V4cG9ydE1ldHJpY3MgPSAocmVzcG9uc2U6IFNlcnZlclJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXNwb25zZS5zZXRIZWFkZXIoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluJyk7XG4gICAgdGhpcy5jb2xsZWN0KCkudGhlbihcbiAgICAgIGNvbGxlY3Rpb25SZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCB7IHJlc291cmNlTWV0cmljcywgZXJyb3JzIH0gPSBjb2xsZWN0aW9uUmVzdWx0O1xuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGRpYWcuZXJyb3IoXG4gICAgICAgICAgICAnUHJvbWV0aGV1c0V4cG9ydGVyOiBtZXRyaWNzIGNvbGxlY3Rpb24gZXJyb3JzJyxcbiAgICAgICAgICAgIC4uLmVycm9yc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2UuZW5kKHRoaXMuX3NlcmlhbGl6ZXIuc2VyaWFsaXplKHJlc291cmNlTWV0cmljcykpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIHJlc3BvbnNlLmVuZChgIyBmYWlsZWQgdG8gZXhwb3J0IG1ldHJpY3M6ICR7ZXJyfWApO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3BvbmRzIHdpdGggNDA0IHN0YXR1cyBjb2RlIHRvIGFsbCByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtYXRjaCB0aGUgY29uZmlndXJlZCBlbmRwb2ludC5cbiAgICovXG4gIHByaXZhdGUgX25vdEZvdW5kID0gKHJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgcmVzcG9uc2UuZW5kKCk7XG4gIH07XG59XG4iLCAiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCB7IFByb21ldGhldXNFeHBvcnRlciB9IGZyb20gJy4vUHJvbWV0aGV1c0V4cG9ydGVyJztcbmV4cG9ydCB7IFByb21ldGhldXNTZXJpYWxpemVyIH0gZnJvbSAnLi9Qcm9tZXRoZXVzU2VyaWFsaXplcic7XG5leHBvcnQgdHlwZSB7IEV4cG9ydGVyQ29uZmlnIH0gZnJvbSAnLi9leHBvcnQvdHlwZXMnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxRQUFBLFFBQUE7QUFRQSxRQUFBLGdCQUFBO0FBRUEsUUFBQSxTQUFBO0FBRUEsUUFBQSx5QkFBQTtBQU1BLFFBQU0sNkJBQTZCO0FBU25DLGFBQVMsYUFBYSxLQUFXO0FBQy9CLGFBQU8sSUFBSSxRQUFRLE9BQU8sTUFBTSxFQUFFLFFBQVEsT0FBTyxLQUFLO0lBQ3hEO0FBUUEsYUFBUyxxQkFBcUIsTUFBc0IsSUFBRTtBQUNwRCxVQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGNBQU0sS0FBSyxVQUFVLEdBQUc7O0FBRTFCLGFBQU8sYUFBYSxHQUFHLEVBQUUsUUFBUSxNQUFNLEtBQUs7SUFDOUM7QUFFQSxRQUFNLHdCQUF3QjtBQUM5QixRQUFNLDBCQUEwQjtBQW9CaEMsYUFBUyw2QkFBNkIsTUFBWTtBQUVoRCxhQUFPLEtBQ0osUUFBUSx1QkFBdUIsR0FBRyxFQUNsQyxRQUFRLHlCQUF5QixHQUFHO0lBQ3pDO0FBV0EsYUFBUyxrQ0FDUCxNQUNBLE1BQWdCO0FBR2hCLFVBQ0UsQ0FBQyxLQUFLLFNBQVMsUUFBUSxLQUN2QixLQUFLLGtCQUFrQixjQUFBLGNBQWMsT0FDckMsS0FBSyxhQUNMO0FBQ0EsZUFBTyxPQUFPOztBQUdoQixhQUFPO0lBQ1Q7QUFFQSxhQUFT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
