#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AggregationTemporality,
  ConsoleMetricExporter,
  MeterProvider,
  PeriodicExportingMetricReader,
  init_opentelemetry_sdk_metrics
} from "./chunk-EZURCALM.mjs";
import {
  endInteractionSpan,
  init_betaSessionTracing,
  init_perfettoTracing,
  init_sessionTracing,
  initializePerfettoTracing,
  isBetaTracingEnabled,
  isEnhancedTelemetryEnabled
} from "./chunk-L4LQXE4X.mjs";
import {
  DiagLogLevel,
  diag,
  init_opentelemetry_api,
  trace
} from "./chunk-GG7RJVEZ.mjs";
import {
  BatchLogRecordProcessor,
  ConsoleLogRecordExporter,
  LoggerProvider,
  checkHasTrustDialogAccepted,
  envDetector,
  getAuthHeaders,
  getClaudeCodeUserAgent,
  getGlobalConfig,
  getOtelHeadersFromHelper,
  getSettings_DEPRECATED,
  getSubscriptionType,
  hasProfileScope,
  hostDetector,
  init_auth,
  init_config2 as init_config,
  init_http,
  init_opentelemetry_resources,
  init_opentelemetry_sdk_logs,
  init_settings2 as init_settings,
  init_userAgent,
  is1PApiCustomer,
  isClaudeAISubscriber,
  osDetector,
  resourceFromAttributes,
  saveGlobalConfig,
  withOAuth401Retry
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import {
  getCACertificates,
  getMTLSConfig,
  getProxyUrl,
  init_caCerts,
  init_mtls,
  init_proxy,
  shouldBypassProxy
} from "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import {
  getPlatform,
  getWslVersion,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
  SEMRESATTRS_HOST_ARCH,
  init_opentelemetry_semantic_conventions
} from "./chunk-AHENZQLB.mjs";
import {
  ExportResultCode,
  init_opentelemetry_core
} from "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import {
  HttpsProxyAgent,
  init_https_proxy_agent
} from "./chunk-3AEW3KDQ.mjs";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-7SC6PTLR.mjs";
import {
  init_memoize,
  memoizeWithTTLAsync
} from "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  getHasFormattedOutput,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  toError
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getIsNonInteractiveSession,
  getLoggerProvider,
  getMeterProvider,
  getTracerProvider,
  init_state,
  setEventLogger,
  setLoggerProvider,
  setMeterProvider,
  setTracerProvider
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/opentelemetry-api-logs.mjs
import { createRequire } from "module";
var require2, apiLogs, logs, NOOP_LOGGER, NoopLogger, SeverityNumber;
var init_opentelemetry_api_logs = __esm({
  "scripts/shims/opentelemetry-api-logs.mjs"() {
    require2 = createRequire(import.meta.url);
    apiLogs = require2("@opentelemetry/api-logs");
    logs = apiLogs.logs;
    NOOP_LOGGER = apiLogs.NOOP_LOGGER;
    NoopLogger = apiLogs.NoopLogger;
    SeverityNumber = apiLogs.SeverityNumber;
  }
});

// scripts/shims/opentelemetry-sdk-trace-base.mjs
import { createRequire as createRequire2 } from "module";
var require3, traceBase, BasicTracerProvider, BatchSpanProcessor, ConsoleSpanExporter;
var init_opentelemetry_sdk_trace_base = __esm({
  "scripts/shims/opentelemetry-sdk-trace-base.mjs"() {
    require3 = createRequire2(import.meta.url);
    traceBase = require3("@opentelemetry/sdk-trace-base");
    BasicTracerProvider = traceBase.BasicTracerProvider;
    BatchSpanProcessor = traceBase.BatchSpanProcessor;
    ConsoleSpanExporter = traceBase.ConsoleSpanExporter;
  }
});

// src/services/api/metricsOptOut.ts
async function _fetchMetricsEnabled() {
  const authResult = getAuthHeaders();
  if (authResult.error) {
    throw new Error(`Auth error: ${authResult.error}`);
  }
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": getClaudeCodeUserAgent(),
    ...authResult.headers
  };
  const endpoint = `https://api.anthropic.com/api/claude_code/organizations/metrics_enabled`;
  const response = await axios_default.get(endpoint, {
    headers,
    timeout: 5e3
  });
  return response.data;
}
async function _checkMetricsEnabledAPI() {
  if (isEssentialTrafficOnly()) {
    return { enabled: false, hasError: false };
  }
  try {
    const data = await withOAuth401Retry(_fetchMetricsEnabled, {
      also403Revoked: true
    });
    logForDebugging(
      `Metrics opt-out API response: enabled=${data.metrics_logging_enabled}`
    );
    return {
      enabled: data.metrics_logging_enabled,
      hasError: false
    };
  } catch (error) {
    logForDebugging(
      `Failed to check metrics opt-out status: ${errorMessage(error)}`
    );
    logError(error);
    return { enabled: false, hasError: true };
  }
}
async function refreshMetricsStatus() {
  const result = await memoizedCheckMetrics();
  if (result.hasError) {
    return result;
  }
  const cached = getGlobalConfig().metricsStatusCache;
  const unchanged = cached !== void 0 && cached.enabled === result.enabled;
  if (unchanged && Date.now() - cached.timestamp < DISK_CACHE_TTL_MS) {
    return result;
  }
  saveGlobalConfig((current) => ({
    ...current,
    metricsStatusCache: {
      enabled: result.enabled,
      timestamp: Date.now()
    }
  }));
  return result;
}
async function checkMetricsEnabled() {
  if (isClaudeAISubscriber() && !hasProfileScope()) {
    return { enabled: false, hasError: false };
  }
  const cached = getGlobalConfig().metricsStatusCache;
  if (cached) {
    if (Date.now() - cached.timestamp > DISK_CACHE_TTL_MS) {
      void refreshMetricsStatus().catch(logError);
    }
    return {
      enabled: cached.enabled,
      hasError: false
    };
  }
  return refreshMetricsStatus();
}
var CACHE_TTL_MS, DISK_CACHE_TTL_MS, memoizedCheckMetrics;
var init_metricsOptOut = __esm({
  "src/services/api/metricsOptOut.ts"() {
    init_axios();
    init_auth();
    init_config();
    init_debug();
    init_errors();
    init_http();
    init_log();
    init_memoize();
    init_privacyLevel();
    init_userAgent();
    CACHE_TTL_MS = 60 * 60 * 1e3;
    DISK_CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
    memoizedCheckMetrics = memoizeWithTTLAsync(
      _checkMetricsEnabledAPI,
      CACHE_TTL_MS
    );
  }
});

// src/utils/telemetry/bigqueryExporter.ts
var BigQueryMetricsExporter;
var init_bigqueryExporter = __esm({
  "src/utils/telemetry/bigqueryExporter.ts"() {
    init_opentelemetry_core();
    init_opentelemetry_sdk_metrics();
    init_axios();
    init_metricsOptOut();
    init_state();
    init_auth();
    init_config();
    init_debug();
    init_errors();
    init_http();
    init_log();
    init_slowOperations();
    init_userAgent();
    BigQueryMetricsExporter = class {
      endpoint;
      timeout;
      pendingExports = [];
      isShutdown = false;
      constructor(options = {}) {
        const defaultEndpoint = "https://api.anthropic.com/api/claude_code/metrics";
        if (process.env.USER_TYPE === "ant" && process.env.ANT_CLAUDE_CODE_METRICS_ENDPOINT) {
          this.endpoint = process.env.ANT_CLAUDE_CODE_METRICS_ENDPOINT + "/api/claude_code/metrics";
        } else {
          this.endpoint = defaultEndpoint;
        }
        this.timeout = options.timeout || 5e3;
      }
      async export(metrics, resultCallback) {
        if (this.isShutdown) {
          resultCallback({
            code: ExportResultCode.FAILED,
            error: new Error("Exporter has been shutdown")
          });
          return;
        }
        const exportPromise = this.doExport(metrics, resultCallback);
        this.pendingExports.push(exportPromise);
        void exportPromise.finally(() => {
          const index = this.pendingExports.indexOf(exportPromise);
          if (index > -1) {
            void this.pendingExports.splice(index, 1);
          }
        });
      }
      async doExport(metrics, resultCallback) {
        try {
          const hasTrust = checkHasTrustDialogAccepted() || getIsNonInteractiveSession();
          if (!hasTrust) {
            logForDebugging(
              "BigQuery metrics export: trust not established, skipping"
            );
            resultCallback({ code: ExportResultCode.SUCCESS });
            return;
          }
          const metricsStatus = await checkMetricsEnabled();
          if (!metricsStatus.enabled) {
            logForDebugging("Metrics export disabled by organization setting");
            resultCallback({ code: ExportResultCode.SUCCESS });
            return;
          }
          const payload = this.transformMetricsForInternal(metrics);
          const authResult = getAuthHeaders();
          if (authResult.error) {
            logForDebugging(`Metrics export failed: ${authResult.error}`);
            resultCallback({
              code: ExportResultCode.FAILED,
              error: new Error(authResult.error)
            });
            return;
          }
          const headers = {
            "Content-Type": "application/json",
            "User-Agent": getClaudeCodeUserAgent(),
            ...authResult.headers
          };
          const response = await axios_default.post(this.endpoint, payload, {
            timeout: this.timeout,
            headers
          });
          logForDebugging("BigQuery metrics exported successfully");
          logForDebugging(
            `BigQuery API Response: ${jsonStringify(response.data, null, 2)}`
          );
          resultCallback({ code: ExportResultCode.SUCCESS });
        } catch (error) {
          logForDebugging(`BigQuery metrics export failed: ${errorMessage(error)}`);
          logError(error);
          resultCallback({
            code: ExportResultCode.FAILED,
            error: toError(error)
          });
        }
      }
      transformMetricsForInternal(metrics) {
        const attrs = metrics.resource.attributes;
        const resourceAttributes = {
          "service.name": attrs["service.name"] || "claude-code",
          "service.version": attrs["service.version"] || "unknown",
          "os.type": attrs["os.type"] || "unknown",
          "os.version": attrs["os.version"] || "unknown",
          "host.arch": attrs["host.arch"] || "unknown",
          "aggregation.temporality": this.selectAggregationTemporality() === AggregationTemporality.DELTA ? "delta" : "cumulative"
        };
        if (attrs["wsl.version"]) {
          resourceAttributes["wsl.version"] = attrs["wsl.version"];
        }
        if (isClaudeAISubscriber()) {
          resourceAttributes["user.customer_type"] = "claude_ai";
          const subscriptionType = getSubscriptionType();
          if (subscriptionType) {
            resourceAttributes["user.subscription_type"] = subscriptionType;
          }
        } else {
          resourceAttributes["user.customer_type"] = "api";
        }
        const transformed = {
          resource_attributes: resourceAttributes,
          metrics: metrics.scopeMetrics.flatMap(
            (scopeMetric) => scopeMetric.metrics.map((metric) => ({
              name: metric.descriptor.name,
              description: metric.descriptor.description,
              unit: metric.descriptor.unit,
              data_points: this.extractDataPoints(metric)
            }))
          )
        };
        return transformed;
      }
      extractDataPoints(metric) {
        const dataPoints = metric.dataPoints || [];
        return dataPoints.filter(
          (point) => typeof point.value === "number"
        ).map((point) => ({
          attributes: this.convertAttributes(point.attributes),
          value: point.value,
          timestamp: this.hrTimeToISOString(
            point.endTime || point.startTime || [Date.now() / 1e3, 0]
          )
        }));
      }
      async shutdown() {
        this.isShutdown = true;
        await this.forceFlush();
        logForDebugging("BigQuery metrics exporter shutdown complete");
      }
      async forceFlush() {
        await Promise.all(this.pendingExports);
        logForDebugging("BigQuery metrics exporter flush complete");
      }
      convertAttributes(attributes) {
        const result = {};
        if (attributes) {
          for (const [key, value] of Object.entries(attributes)) {
            if (value !== void 0 && value !== null) {
              result[key] = String(value);
            }
          }
        }
        return result;
      }
      hrTimeToISOString(hrTime) {
        const [seconds, nanoseconds] = hrTime;
        const date = new Date(seconds * 1e3 + nanoseconds / 1e6);
        return date.toISOString();
      }
      selectAggregationTemporality() {
        return AggregationTemporality.DELTA;
      }
    };
  }
});

// src/utils/telemetry/logger.ts
var ClaudeCodeDiagLogger;
var init_logger = __esm({
  "src/utils/telemetry/logger.ts"() {
    init_debug();
    init_log();
    ClaudeCodeDiagLogger = class {
      error(message, ..._) {
        logError(new Error(message));
        logForDebugging(`[3P telemetry] OTEL diag error: ${message}`, {
          level: "error"
        });
      }
      warn(message, ..._) {
        logError(new Error(message));
        logForDebugging(`[3P telemetry] OTEL diag warn: ${message}`, {
          level: "warn"
        });
      }
      info(_message, ..._args) {
        return;
      }
      debug(_message, ..._args) {
        return;
      }
      verbose(_message, ..._args) {
        return;
      }
    };
  }
});

// src/utils/telemetry/instrumentation.ts
function telemetryTimeout(ms, message) {
  return new Promise((_, reject) => {
    setTimeout(
      (rej, msg) => rej(new TelemetryTimeoutError(msg)),
      ms,
      reject,
      message
    ).unref();
  });
}
function bootstrapTelemetry() {
  if (process.env.USER_TYPE === "ant") {
    if (process.env.ANT_OTEL_METRICS_EXPORTER) {
      process.env.OTEL_METRICS_EXPORTER = process.env.ANT_OTEL_METRICS_EXPORTER;
    }
    if (process.env.ANT_OTEL_LOGS_EXPORTER) {
      process.env.OTEL_LOGS_EXPORTER = process.env.ANT_OTEL_LOGS_EXPORTER;
    }
    if (process.env.ANT_OTEL_TRACES_EXPORTER) {
      process.env.OTEL_TRACES_EXPORTER = process.env.ANT_OTEL_TRACES_EXPORTER;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_PROTOCOL) {
      process.env.OTEL_EXPORTER_OTLP_PROTOCOL = process.env.ANT_OTEL_EXPORTER_OTLP_PROTOCOL;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_ENDPOINT) {
      process.env.OTEL_EXPORTER_OTLP_ENDPOINT = process.env.ANT_OTEL_EXPORTER_OTLP_ENDPOINT;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_HEADERS) {
      process.env.OTEL_EXPORTER_OTLP_HEADERS = process.env.ANT_OTEL_EXPORTER_OTLP_HEADERS;
    }
  }
  if (!process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE) {
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
  }
}
function parseExporterTypes(value) {
  return (value || "").trim().split(",").filter(Boolean).map((t) => t.trim()).filter((t) => t !== "none");
}
async function getOtlpReaders() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_METRICS_EXPORTER);
  const exportInterval = parseInt(
    process.env.OTEL_METRIC_EXPORT_INTERVAL || DEFAULT_METRICS_EXPORT_INTERVAL_MS.toString()
  );
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      const consoleExporter = new ConsoleMetricExporter();
      const originalExport = consoleExporter.export.bind(consoleExporter);
      consoleExporter.export = (metrics, callback) => {
        if (metrics.resource && metrics.resource.attributes) {
          logForDebugging("\n=== Resource Attributes ===");
          logForDebugging(jsonStringify(metrics.resource.attributes));
          logForDebugging("===========================\n");
        }
        return originalExport(metrics, callback);
      };
      exporters.push(consoleExporter);
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPMetricExporter } = await import("./src-AFQVDEUJ.mjs");
          exporters.push(new OTLPMetricExporter());
          break;
        }
        case "http/json": {
          const { OTLPMetricExporter } = await import("./src-YP4LIBK5.mjs");
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPMetricExporter } = await import("./src-AL2FWKJ2.mjs");
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        default:
          throw new Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`
          );
      }
    } else if (exporterType === "prometheus") {
      const { PrometheusExporter } = await import("./src-MXIWRC7G.mjs");
      exporters.push(new PrometheusExporter());
    } else {
      throw new Error(
        `Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${exporterType}`
      );
    }
  }
  return exporters.map((exporter) => {
    if ("export" in exporter) {
      return new PeriodicExportingMetricReader({
        exporter,
        exportIntervalMillis: exportInterval
      });
    }
    return exporter;
  });
}
async function getOtlpLogExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_LOGS_EXPORTER);
  const protocol = process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  logForDebugging(
    `[3P telemetry] getOtlpLogExporters: types=${jsonStringify(exporterTypes)}, protocol=${protocol}, endpoint=${endpoint}`
  );
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleLogRecordExporter());
    } else if (exporterType === "otlp") {
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPLogExporter } = await import("./src-6ZWRZOKK.mjs");
          exporters.push(new OTLPLogExporter());
          break;
        }
        case "http/json": {
          const { OTLPLogExporter } = await import("./src-ED3IY47M.mjs");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPLogExporter } = await import("./src-GUOLLSXP.mjs");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        default:
          throw new Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`
          );
      }
    } else {
      throw new Error(
        `Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${exporterType}`
      );
    }
  }
  return exporters;
}
async function getOtlpTraceExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_TRACES_EXPORTER);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleSpanExporter());
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPTraceExporter } = await import("./src-XPPWSSUB.mjs");
          exporters.push(new OTLPTraceExporter());
          break;
        }
        case "http/json": {
          const { OTLPTraceExporter } = await import("./src-NVDMWZ3L.mjs");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPTraceExporter } = await import("./src-Z37TPQJP.mjs");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        default:
          throw new Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`
          );
      }
    } else {
      throw new Error(
        `Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${exporterType}`
      );
    }
  }
  return exporters;
}
function isTelemetryEnabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function getBigQueryExportingReader() {
  const bigqueryExporter = new BigQueryMetricsExporter();
  return new PeriodicExportingMetricReader({
    exporter: bigqueryExporter,
    exportIntervalMillis: 5 * 60 * 1e3
    // 5mins for BigQuery metrics exporter to reduce load
  });
}
function isBigQueryMetricsEnabled() {
  const subscriptionType = getSubscriptionType();
  const isC4EOrTeamUser = isClaudeAISubscriber() && (subscriptionType === "enterprise" || subscriptionType === "team");
  return is1PApiCustomer() || isC4EOrTeamUser;
}
async function initializeBetaTracing(resource) {
  const endpoint = process.env.BETA_TRACING_ENDPOINT;
  if (!endpoint) {
    return;
  }
  const [{ OTLPTraceExporter }, { OTLPLogExporter }] = await Promise.all([
    import("./src-NVDMWZ3L.mjs"),
    import("./src-ED3IY47M.mjs")
  ]);
  const httpConfig = {
    url: `${endpoint}/v1/traces`
  };
  const logHttpConfig = {
    url: `${endpoint}/v1/logs`
  };
  const traceExporter = new OTLPTraceExporter(httpConfig);
  const spanProcessor = new BatchSpanProcessor(traceExporter, {
    scheduledDelayMillis: DEFAULT_TRACES_EXPORT_INTERVAL_MS
  });
  const tracerProvider = new BasicTracerProvider({
    resource,
    spanProcessors: [spanProcessor]
  });
  trace.setGlobalTracerProvider(tracerProvider);
  setTracerProvider(tracerProvider);
  const logExporter = new OTLPLogExporter(logHttpConfig);
  const loggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(logExporter, {
        scheduledDelayMillis: DEFAULT_LOGS_EXPORT_INTERVAL_MS
      })
    ]
  });
  logs.setGlobalLoggerProvider(loggerProvider);
  setLoggerProvider(loggerProvider);
  const eventLogger = logs.getLogger(
    "com.anthropic.claude_code.events",
    MACRO.VERSION
  );
  setEventLogger(eventLogger);
  process.on("beforeExit", async () => {
    await loggerProvider?.forceFlush();
    await tracerProvider?.forceFlush();
  });
  process.on("exit", () => {
    void loggerProvider?.forceFlush();
    void tracerProvider?.forceFlush();
  });
}
async function initializeTelemetry() {
  profileCheckpoint("telemetry_init_start");
  bootstrapTelemetry();
  if (getHasFormattedOutput()) {
    for (const key of [
      "OTEL_METRICS_EXPORTER",
      "OTEL_LOGS_EXPORTER",
      "OTEL_TRACES_EXPORTER"
    ]) {
      const v = process.env[key];
      if (v?.includes("console")) {
        process.env[key] = v.split(",").map((s) => s.trim()).filter((s) => s !== "console").join(",");
      }
    }
  }
  diag.setLogger(new ClaudeCodeDiagLogger(), DiagLogLevel.ERROR);
  initializePerfettoTracing();
  const readers = [];
  const telemetryEnabled = isTelemetryEnabled();
  logForDebugging(
    `[3P telemetry] isTelemetryEnabled=${telemetryEnabled} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`
  );
  if (telemetryEnabled) {
    readers.push(...await getOtlpReaders());
  }
  if (isBigQueryMetricsEnabled()) {
    readers.push(getBigQueryExportingReader());
  }
  const platform = getPlatform();
  const baseAttributes = {
    [ATTR_SERVICE_NAME]: "claude-code",
    [ATTR_SERVICE_VERSION]: MACRO.VERSION
  };
  if (platform === "wsl") {
    const wslVersion = getWslVersion();
    if (wslVersion) {
      baseAttributes["wsl.version"] = wslVersion;
    }
  }
  const baseResource = resourceFromAttributes(baseAttributes);
  const osResource = resourceFromAttributes(
    osDetector.detect().attributes || {}
  );
  const hostDetected = hostDetector.detect();
  const hostArchAttributes = hostDetected.attributes?.[SEMRESATTRS_HOST_ARCH] ? {
    [SEMRESATTRS_HOST_ARCH]: hostDetected.attributes[SEMRESATTRS_HOST_ARCH]
  } : {};
  const hostArchResource = resourceFromAttributes(hostArchAttributes);
  const envResource = resourceFromAttributes(
    envDetector.detect().attributes || {}
  );
  const resource = baseResource.merge(osResource).merge(hostArchResource).merge(envResource);
  if (isBetaTracingEnabled()) {
    void initializeBetaTracing(resource).catch(
      (e) => logForDebugging(`Beta tracing init failed: ${e}`, { level: "error" })
    );
    const meterProvider2 = new MeterProvider({
      resource,
      views: [],
      readers
    });
    setMeterProvider(meterProvider2);
    const shutdownTelemetry2 = async () => {
      const timeoutMs = parseInt(
        process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000"
      );
      try {
        endInteractionSpan();
        const loggerProvider = getLoggerProvider();
        const tracerProvider = getTracerProvider();
        const chains = [meterProvider2.shutdown()];
        if (loggerProvider) {
          chains.push(
            loggerProvider.forceFlush().then(() => loggerProvider.shutdown())
          );
        }
        if (tracerProvider) {
          chains.push(
            tracerProvider.forceFlush().then(() => tracerProvider.shutdown())
          );
        }
        await Promise.race([
          Promise.all(chains),
          telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
        ]);
      } catch {
      }
    };
    registerCleanup(shutdownTelemetry2);
    return meterProvider2.getMeter("com.anthropic.claude_code", MACRO.VERSION);
  }
  const meterProvider = new MeterProvider({
    resource,
    views: [],
    readers
  });
  setMeterProvider(meterProvider);
  if (telemetryEnabled) {
    const logExporters = await getOtlpLogExporters();
    logForDebugging(
      `[3P telemetry] Created ${logExporters.length} log exporter(s)`
    );
    if (logExporters.length > 0) {
      const loggerProvider = new LoggerProvider({
        resource,
        // Add batch processors for each exporter
        processors: logExporters.map(
          (exporter) => new BatchLogRecordProcessor(exporter, {
            scheduledDelayMillis: parseInt(
              process.env.OTEL_LOGS_EXPORT_INTERVAL || DEFAULT_LOGS_EXPORT_INTERVAL_MS.toString()
            )
          })
        )
      });
      logs.setGlobalLoggerProvider(loggerProvider);
      setLoggerProvider(loggerProvider);
      const eventLogger = logs.getLogger(
        "com.anthropic.claude_code.events",
        MACRO.VERSION
      );
      setEventLogger(eventLogger);
      logForDebugging("[3P telemetry] Event logger set successfully");
      process.on("beforeExit", async () => {
        await loggerProvider?.forceFlush();
        const tracerProvider = getTracerProvider();
        await tracerProvider?.forceFlush();
      });
      process.on("exit", () => {
        void loggerProvider?.forceFlush();
        void getTracerProvider()?.forceFlush();
      });
    }
  }
  if (telemetryEnabled && isEnhancedTelemetryEnabled()) {
    const traceExporters = await getOtlpTraceExporters();
    if (traceExporters.length > 0) {
      const spanProcessors = traceExporters.map(
        (exporter) => new BatchSpanProcessor(exporter, {
          scheduledDelayMillis: parseInt(
            process.env.OTEL_TRACES_EXPORT_INTERVAL || DEFAULT_TRACES_EXPORT_INTERVAL_MS.toString()
          )
        })
      );
      const tracerProvider = new BasicTracerProvider({
        resource,
        spanProcessors
      });
      trace.setGlobalTracerProvider(tracerProvider);
      setTracerProvider(tracerProvider);
    }
  }
  const shutdownTelemetry = async () => {
    const timeoutMs = parseInt(
      process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000"
    );
    try {
      endInteractionSpan();
      const shutdownPromises = [meterProvider.shutdown()];
      const loggerProvider = getLoggerProvider();
      if (loggerProvider) {
        shutdownPromises.push(loggerProvider.shutdown());
      }
      const tracerProvider = getTracerProvider();
      if (tracerProvider) {
        shutdownPromises.push(tracerProvider.shutdown());
      }
      await Promise.race([
        Promise.all(shutdownPromises),
        telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
      ]);
    } catch (error) {
      if (error instanceof Error && error.message.includes("timeout")) {
        logForDebugging(
          `
OpenTelemetry telemetry flush timed out after ${timeoutMs}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${timeoutMs}ms
`,
          { level: "error" }
        );
      }
      throw error;
    }
  };
  registerCleanup(shutdownTelemetry);
  return meterProvider.getMeter("com.anthropic.claude_code", MACRO.VERSION);
}
async function flushTelemetry() {
  const meterProvider = getMeterProvider();
  if (!meterProvider) {
    return;
  }
  const timeoutMs = parseInt(
    process.env.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS || "5000"
  );
  try {
    const flushPromises = [meterProvider.forceFlush()];
    const loggerProvider = getLoggerProvider();
    if (loggerProvider) {
      flushPromises.push(loggerProvider.forceFlush());
    }
    const tracerProvider = getTracerProvider();
    if (tracerProvider) {
      flushPromises.push(tracerProvider.forceFlush());
    }
    await Promise.race([
      Promise.all(flushPromises),
      telemetryTimeout(timeoutMs, "OpenTelemetry flush timeout")
    ]);
    logForDebugging("Telemetry flushed successfully");
  } catch (error) {
    if (error instanceof TelemetryTimeoutError) {
      logForDebugging(
        `Telemetry flush timed out after ${timeoutMs}ms. Some metrics may not be exported.`,
        { level: "warn" }
      );
    } else {
      logForDebugging(`Telemetry flush failed: ${errorMessage(error)}`, {
        level: "error"
      });
    }
  }
}
function parseOtelHeadersEnvVar() {
  const headers = {};
  const envHeaders = process.env.OTEL_EXPORTER_OTLP_HEADERS;
  if (envHeaders) {
    for (const pair of envHeaders.split(",")) {
      const [key, ...valueParts] = pair.split("=");
      if (key && valueParts.length > 0) {
        headers[key.trim()] = valueParts.join("=").trim();
      }
    }
  }
  return headers;
}
function getOTLPExporterConfig() {
  const proxyUrl = getProxyUrl();
  const mtlsConfig = getMTLSConfig();
  const settings = getSettings_DEPRECATED();
  const config = {};
  const staticHeaders = parseOtelHeadersEnvVar();
  if (settings?.otelHeadersHelper) {
    config.headers = async () => {
      const dynamicHeaders = getOtelHeadersFromHelper();
      return { ...staticHeaders, ...dynamicHeaders };
    };
  } else if (Object.keys(staticHeaders).length > 0) {
    config.headers = async () => staticHeaders;
  }
  const otelEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  if (!proxyUrl || otelEndpoint && shouldBypassProxy(otelEndpoint)) {
    const caCerts2 = getCACertificates();
    if (mtlsConfig || caCerts2) {
      config.httpAgentOptions = {
        ...mtlsConfig,
        ...caCerts2 && { ca: caCerts2 }
      };
    }
    return config;
  }
  const caCerts = getCACertificates();
  const agentFactory = (_protocol) => {
    const proxyAgent = mtlsConfig || caCerts ? new HttpsProxyAgent(proxyUrl, {
      ...mtlsConfig && {
        cert: mtlsConfig.cert,
        key: mtlsConfig.key,
        passphrase: mtlsConfig.passphrase
      },
      ...caCerts && { ca: caCerts }
    }) : new HttpsProxyAgent(proxyUrl);
    return proxyAgent;
  };
  config.httpAgentOptions = agentFactory;
  return config;
}
var DEFAULT_METRICS_EXPORT_INTERVAL_MS, DEFAULT_LOGS_EXPORT_INTERVAL_MS, DEFAULT_TRACES_EXPORT_INTERVAL_MS, TelemetryTimeoutError;
var init_instrumentation = __esm({
  "src/utils/telemetry/instrumentation.ts"() {
    init_opentelemetry_api();
    init_opentelemetry_api_logs();
    init_opentelemetry_resources();
    init_opentelemetry_sdk_logs();
    init_opentelemetry_sdk_metrics();
    init_opentelemetry_sdk_trace_base();
    init_opentelemetry_semantic_conventions();
    init_https_proxy_agent();
    init_state();
    init_auth();
    init_platform();
    init_caCerts();
    init_cleanupRegistry();
    init_debug();
    init_envUtils();
    init_errors();
    init_mtls();
    init_proxy();
    init_settings();
    init_slowOperations();
    init_startupProfiler();
    init_betaSessionTracing();
    init_bigqueryExporter();
    init_logger();
    init_perfettoTracing();
    init_sessionTracing();
    DEFAULT_METRICS_EXPORT_INTERVAL_MS = 6e4;
    DEFAULT_LOGS_EXPORT_INTERVAL_MS = 5e3;
    DEFAULT_TRACES_EXPORT_INTERVAL_MS = 5e3;
    TelemetryTimeoutError = class extends Error {
    };
  }
});
init_instrumentation();
export {
  bootstrapTelemetry,
  flushTelemetry,
  initializeTelemetry,
  isTelemetryEnabled,
  parseExporterTypes
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9vcGVudGVsZW1ldHJ5LWFwaS1sb2dzLm1qcyIsICIuLi8uLi9zY3JpcHRzL3NoaW1zL29wZW50ZWxlbWV0cnktc2RrLXRyYWNlLWJhc2UubWpzIiwgIi4uLy4uL3NyYy9zZXJ2aWNlcy9hcGkvbWV0cmljc09wdE91dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvdGVsZW1ldHJ5L2JpZ3F1ZXJ5RXhwb3J0ZXIudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RlbGVtZXRyeS9sb2dnZXIudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tIFwibW9kdWxlXCI7XG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBhcGlMb2dzID0gcmVxdWlyZShcIkBvcGVudGVsZW1ldHJ5L2FwaS1sb2dzXCIpO1xuXG5leHBvcnQgY29uc3QgbG9ncyA9IGFwaUxvZ3MubG9ncztcbmV4cG9ydCBjb25zdCBOT09QX0xPR0dFUiA9IGFwaUxvZ3MuTk9PUF9MT0dHRVI7XG5leHBvcnQgY29uc3QgTm9vcExvZ2dlciA9IGFwaUxvZ3MuTm9vcExvZ2dlcjtcbmV4cG9ydCBjb25zdCBTZXZlcml0eU51bWJlciA9IGFwaUxvZ3MuU2V2ZXJpdHlOdW1iZXI7XG5leHBvcnQgZGVmYXVsdCBhcGlMb2dzO1xuIiwgImltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tIFwibW9kdWxlXCI7XG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCB0cmFjZUJhc2UgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvc2RrLXRyYWNlLWJhc2VcIik7XG5cbmV4cG9ydCBjb25zdCBCYXNpY1RyYWNlclByb3ZpZGVyID0gdHJhY2VCYXNlLkJhc2ljVHJhY2VyUHJvdmlkZXI7XG5leHBvcnQgY29uc3QgQmF0Y2hTcGFuUHJvY2Vzc29yID0gdHJhY2VCYXNlLkJhdGNoU3BhblByb2Nlc3NvcjtcbmV4cG9ydCBjb25zdCBDb25zb2xlU3BhbkV4cG9ydGVyID0gdHJhY2VCYXNlLkNvbnNvbGVTcGFuRXhwb3J0ZXI7XG5leHBvcnQgZGVmYXVsdCB0cmFjZUJhc2U7XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgaGFzUHJvZmlsZVNjb3BlLCBpc0NsYXVkZUFJU3Vic2NyaWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGdldEF1dGhIZWFkZXJzLCB3aXRoT0F1dGg0MDFSZXRyeSB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IG1lbW9pemVXaXRoVFRMQXN5bmMgfSBmcm9tICcuLi8uLi91dGlscy9tZW1vaXplLmpzJ1xuaW1wb3J0IHsgaXNFc3NlbnRpYWxUcmFmZmljT25seSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhY3lMZXZlbC5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvZGVVc2VyQWdlbnQgfSBmcm9tICcuLi8uLi91dGlscy91c2VyQWdlbnQuanMnXG5cbnR5cGUgTWV0cmljc0VuYWJsZWRSZXNwb25zZSA9IHtcbiAgbWV0cmljc19sb2dnaW5nX2VuYWJsZWQ6IGJvb2xlYW5cbn1cblxudHlwZSBNZXRyaWNzU3RhdHVzID0ge1xuICBlbmFibGVkOiBib29sZWFuXG4gIGhhc0Vycm9yOiBib29sZWFuXG59XG5cbi8vIEluLW1lbW9yeSBUVEwgXHUyMDE0IGRlZHVwZXMgY2FsbHMgd2l0aGluIGEgc2luZ2xlIHByb2Nlc3NcbmNvbnN0IENBQ0hFX1RUTF9NUyA9IDYwICogNjAgKiAxMDAwXG5cbi8vIERpc2sgVFRMIFx1MjAxNCBvcmcgc2V0dGluZ3MgcmFyZWx5IGNoYW5nZS4gV2hlbiBkaXNrIGNhY2hlIGlzIGZyZXNoZXIgdGhhbiB0aGlzLFxuLy8gd2Ugc2tpcCB0aGUgbmV0d29yayBlbnRpcmVseSAobm8gYmFja2dyb3VuZCByZWZyZXNoKS4gVGhpcyBpcyB3aGF0IGNvbGxhcHNlc1xuLy8gTiBgY2xhdWRlIC1wYCBpbnZvY2F0aW9ucyBpbnRvIH4xIEFQSSBjYWxsL2RheS5cbmNvbnN0IERJU0tfQ0FDSEVfVFRMX01TID0gMjQgKiA2MCAqIDYwICogMTAwMFxuXG4vKipcbiAqIEludGVybmFsIGZ1bmN0aW9uIHRvIGNhbGwgdGhlIEFQSSBhbmQgY2hlY2sgaWYgbWV0cmljcyBhcmUgZW5hYmxlZFxuICogVGhpcyBpcyB3cmFwcGVkIGJ5IG1lbW9pemVXaXRoVFRMQXN5bmMgdG8gYWRkIGNhY2hpbmcgYmVoYXZpb3JcbiAqL1xuYXN5bmMgZnVuY3Rpb24gX2ZldGNoTWV0cmljc0VuYWJsZWQoKTogUHJvbWlzZTxNZXRyaWNzRW5hYmxlZFJlc3BvbnNlPiB7XG4gIGNvbnN0IGF1dGhSZXN1bHQgPSBnZXRBdXRoSGVhZGVycygpXG4gIGlmIChhdXRoUmVzdWx0LmVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBdXRoIGVycm9yOiAke2F1dGhSZXN1bHQuZXJyb3J9YClcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnVXNlci1BZ2VudCc6IGdldENsYXVkZUNvZGVVc2VyQWdlbnQoKSxcbiAgICAuLi5hdXRoUmVzdWx0LmhlYWRlcnMsXG4gIH1cblxuICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2FwaS5hbnRocm9waWMuY29tL2FwaS9jbGF1ZGVfY29kZS9vcmdhbml6YXRpb25zL21ldHJpY3NfZW5hYmxlZGBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8TWV0cmljc0VuYWJsZWRSZXNwb25zZT4oZW5kcG9pbnQsIHtcbiAgICBoZWFkZXJzLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH0pXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbmFzeW5jIGZ1bmN0aW9uIF9jaGVja01ldHJpY3NFbmFibGVkQVBJKCk6IFByb21pc2U8TWV0cmljc1N0YXR1cz4ge1xuICAvLyBJbmNpZGVudCBraWxsIHN3aXRjaDogc2tpcCB0aGUgbmV0d29yayBjYWxsIHdoZW4gbm9uZXNzZW50aWFsIHRyYWZmaWMgaXMgZGlzYWJsZWQuXG4gIC8vIFJldHVybmluZyBlbmFibGVkOmZhbHNlIHNoZWRzIGxvYWQgYXQgdGhlIGNvbnN1bWVyIChiaWdxdWVyeUV4cG9ydGVyIHNraXBzXG4gIC8vIGV4cG9ydCkuIE1hdGNoZXMgdGhlIG5vbi1zdWJzY3JpYmVyIGVhcmx5LXJldHVybiBzaGFwZSBiZWxvdy5cbiAgaWYgKGlzRXNzZW50aWFsVHJhZmZpY09ubHkoKSkge1xuICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlLCBoYXNFcnJvcjogZmFsc2UgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2l0aE9BdXRoNDAxUmV0cnkoX2ZldGNoTWV0cmljc0VuYWJsZWQsIHtcbiAgICAgIGFsc280MDNSZXZva2VkOiB0cnVlLFxuICAgIH0pXG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgTWV0cmljcyBvcHQtb3V0IEFQSSByZXNwb25zZTogZW5hYmxlZD0ke2RhdGEubWV0cmljc19sb2dnaW5nX2VuYWJsZWR9YCxcbiAgICApXG5cbiAgICByZXR1cm4ge1xuICAgICAgZW5hYmxlZDogZGF0YS5tZXRyaWNzX2xvZ2dpbmdfZW5hYmxlZCxcbiAgICAgIGhhc0Vycm9yOiBmYWxzZSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYEZhaWxlZCB0byBjaGVjayBtZXRyaWNzIG9wdC1vdXQgc3RhdHVzOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICApXG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UsIGhhc0Vycm9yOiB0cnVlIH1cbiAgfVxufVxuXG4vLyBDcmVhdGUgbWVtb2l6ZWQgdmVyc2lvbiB3aXRoIGN1c3RvbSBlcnJvciBoYW5kbGluZ1xuY29uc3QgbWVtb2l6ZWRDaGVja01ldHJpY3MgPSBtZW1vaXplV2l0aFRUTEFzeW5jKFxuICBfY2hlY2tNZXRyaWNzRW5hYmxlZEFQSSxcbiAgQ0FDSEVfVFRMX01TLFxuKVxuXG4vKipcbiAqIEZldGNoIChpbi1tZW1vcnkgbWVtb2l6ZWQpIGFuZCBwZXJzaXN0IHRvIGRpc2sgb24gY2hhbmdlLlxuICogRXJyb3JzIGFyZSBub3QgcGVyc2lzdGVkIFx1MjAxNCBhIHRyYW5zaWVudCBmYWlsdXJlIHNob3VsZCBub3Qgb3ZlcndyaXRlIGFcbiAqIGtub3duLWdvb2QgZGlzayB2YWx1ZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaE1ldHJpY3NTdGF0dXMoKTogUHJvbWlzZTxNZXRyaWNzU3RhdHVzPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lbW9pemVkQ2hlY2tNZXRyaWNzKClcbiAgaWYgKHJlc3VsdC5oYXNFcnJvcikge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IGNhY2hlZCA9IGdldEdsb2JhbENvbmZpZygpLm1ldHJpY3NTdGF0dXNDYWNoZVxuICBjb25zdCB1bmNoYW5nZWQgPSBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiBjYWNoZWQuZW5hYmxlZCA9PT0gcmVzdWx0LmVuYWJsZWRcbiAgLy8gU2tpcCB3cml0ZSB3aGVuIHVuY2hhbmdlZCBBTkQgdGltZXN0YW1wIHN0aWxsIGZyZXNoIFx1MjAxNCBhdm9pZHMgY29uZmlnIGNodXJuXG4gIC8vIHdoZW4gY29uY3VycmVudCBjYWxsZXJzIHJhY2UgcGFzdCBhIHN0YWxlIGRpc2sgZW50cnkgYW5kIGFsbCB0cnkgdG8gd3JpdGUuXG4gIGlmICh1bmNoYW5nZWQgJiYgRGF0ZS5ub3coKSAtIGNhY2hlZC50aW1lc3RhbXAgPCBESVNLX0NBQ0hFX1RUTF9NUykge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgIC4uLmN1cnJlbnQsXG4gICAgbWV0cmljc1N0YXR1c0NhY2hlOiB7XG4gICAgICBlbmFibGVkOiByZXN1bHQuZW5hYmxlZCxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICB9LFxuICB9KSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1ldHJpY3MgYXJlIGVuYWJsZWQgZm9yIHRoZSBjdXJyZW50IG9yZ2FuaXphdGlvbi5cbiAqXG4gKiBUd28tdGllciBjYWNoZTpcbiAqIC0gRGlzayAoMjRoIFRUTCk6IHN1cnZpdmVzIHByb2Nlc3MgcmVzdGFydHMuIEZyZXNoIGRpc2sgY2FjaGUgXHUyMTkyIHplcm8gbmV0d29yay5cbiAqIC0gSW4tbWVtb3J5ICgxaCBUVEwpOiBkZWR1cGVzIHRoZSBiYWNrZ3JvdW5kIHJlZnJlc2ggd2l0aGluIGEgcHJvY2Vzcy5cbiAqXG4gKiBUaGUgY2FsbGVyIChiaWdxdWVyeUV4cG9ydGVyKSB0b2xlcmF0ZXMgc3RhbGUgcmVhZHMgXHUyMDE0IGEgbWlzc2VkIGV4cG9ydCBvclxuICogYW4gZXh0cmEgb25lIGR1cmluZyB0aGUgMjRoIHdpbmRvdyBpcyBhY2NlcHRhYmxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tNZXRyaWNzRW5hYmxlZCgpOiBQcm9taXNlPE1ldHJpY3NTdGF0dXM+IHtcbiAgLy8gU2VydmljZSBrZXkgT0F1dGggc2Vzc2lvbnMgbGFjayB1c2VyOnByb2ZpbGUgc2NvcGUgXHUyMTkyIHdvdWxkIDQwMy5cbiAgLy8gQVBJIGtleSB1c2VycyAobm9uLXN1YnNjcmliZXJzKSBmYWxsIHRocm91Z2ggYW5kIHVzZSB4LWFwaS1rZXkgYXV0aC5cbiAgLy8gVGhpcyBjaGVjayBydW5zIGJlZm9yZSB0aGUgZGlzayByZWFkIHNvIHdlIG5ldmVyIHBlcnNpc3QgYXV0aC1zdGF0ZS1kZXJpdmVkXG4gIC8vIGFuc3dlcnMgXHUyMDE0IG9ubHkgcmVhbCBBUEkgcmVzcG9uc2VzIGdvIHRvIGRpc2suIE90aGVyd2lzZSBhIHNlcnZpY2Uta2V5XG4gIC8vIHNlc3Npb24gd291bGQgcG9pc29uIHRoZSBjYWNoZSBmb3IgYSBsYXRlciBmdWxsLU9BdXRoIHNlc3Npb24uXG4gIGlmIChpc0NsYXVkZUFJU3Vic2NyaWJlcigpICYmICFoYXNQcm9maWxlU2NvcGUoKSkge1xuICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlLCBoYXNFcnJvcjogZmFsc2UgfVxuICB9XG5cbiAgY29uc3QgY2FjaGVkID0gZ2V0R2xvYmFsQ29uZmlnKCkubWV0cmljc1N0YXR1c0NhY2hlXG4gIGlmIChjYWNoZWQpIHtcbiAgICBpZiAoRGF0ZS5ub3coKSAtIGNhY2hlZC50aW1lc3RhbXAgPiBESVNLX0NBQ0hFX1RUTF9NUykge1xuICAgICAgLy8gc2F2ZUdsb2JhbENvbmZpZydzIGZhbGxiYWNrIHBhdGggKGNvbmZpZy50czo3MzEpIGNhbiB0aHJvdyBpZiBib3RoXG4gICAgICAvLyBsb2NrZWQgYW5kIGZhbGxiYWNrIHdyaXRlcyBmYWlsIFx1MjAxNCBjYXRjaCBoZXJlIHNvIGZpcmUtYW5kLWZvcmdldFxuICAgICAgLy8gZG9lc24ndCBiZWNvbWUgYW4gdW5oYW5kbGVkIHJlamVjdGlvbi5cbiAgICAgIHZvaWQgcmVmcmVzaE1ldHJpY3NTdGF0dXMoKS5jYXRjaChsb2dFcnJvcilcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuYWJsZWQ6IGNhY2hlZC5lbmFibGVkLFxuICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIC8vIEZpcnN0LWV2ZXIgcnVuIG9uIHRoaXMgbWFjaGluZTogYmxvY2sgb24gdGhlIG5ldHdvcmsgdG8gcG9wdWxhdGUgZGlzay5cbiAgcmV0dXJuIHJlZnJlc2hNZXRyaWNzU3RhdHVzKClcbn1cblxuLy8gRXhwb3J0IGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbmV4cG9ydCBjb25zdCBfY2xlYXJNZXRyaWNzRW5hYmxlZENhY2hlRm9yVGVzdGluZyA9ICgpOiB2b2lkID0+IHtcbiAgbWVtb2l6ZWRDaGVja01ldHJpY3MuY2FjaGUuY2xlYXIoKVxufVxuIiwgImltcG9ydCB0eXBlIHsgQXR0cmlidXRlcywgSHJUaW1lIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHsgdHlwZSBFeHBvcnRSZXN1bHQsIEV4cG9ydFJlc3VsdENvZGUgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9jb3JlJ1xuaW1wb3J0IHtcbiAgQWdncmVnYXRpb25UZW1wb3JhbGl0eSxcbiAgdHlwZSBNZXRyaWNEYXRhLFxuICB0eXBlIERhdGFQb2ludCBhcyBPVGVsRGF0YVBvaW50LFxuICB0eXBlIFB1c2hNZXRyaWNFeHBvcnRlcixcbiAgdHlwZSBSZXNvdXJjZU1ldHJpY3MsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay1tZXRyaWNzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgY2hlY2tNZXRyaWNzRW5hYmxlZCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGkvbWV0cmljc09wdE91dC5qcydcbmltcG9ydCB7IGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U3Vic2NyaXB0aW9uVHlwZSwgaXNDbGF1ZGVBSVN1YnNjcmliZXIgfSBmcm9tICcuLi9hdXRoLmpzJ1xuaW1wb3J0IHsgY2hlY2tIYXNUcnVzdERpYWxvZ0FjY2VwdGVkIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIHRvRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBnZXRBdXRoSGVhZGVycyB9IGZyb20gJy4uL2h0dHAuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvZGVVc2VyQWdlbnQgfSBmcm9tICcuLi91c2VyQWdlbnQuanMnXG5cbnR5cGUgRGF0YVBvaW50ID0ge1xuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIHZhbHVlOiBudW1iZXJcbiAgdGltZXN0YW1wOiBzdHJpbmdcbn1cblxudHlwZSBNZXRyaWMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB1bml0Pzogc3RyaW5nXG4gIGRhdGFfcG9pbnRzOiBEYXRhUG9pbnRbXVxufVxuXG50eXBlIEludGVybmFsTWV0cmljc1BheWxvYWQgPSB7XG4gIHJlc291cmNlX2F0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgbWV0cmljczogTWV0cmljW11cbn1cblxuZXhwb3J0IGNsYXNzIEJpZ1F1ZXJ5TWV0cmljc0V4cG9ydGVyIGltcGxlbWVudHMgUHVzaE1ldHJpY0V4cG9ydGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRwb2ludDogc3RyaW5nXG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyXG4gIHByaXZhdGUgcGVuZGluZ0V4cG9ydHM6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gIHByaXZhdGUgaXNTaHV0ZG93biA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogeyB0aW1lb3V0PzogbnVtYmVyIH0gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRFbmRwb2ludCA9ICdodHRwczovL2FwaS5hbnRocm9waWMuY29tL2FwaS9jbGF1ZGVfY29kZS9tZXRyaWNzJ1xuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuQU5UX0NMQVVERV9DT0RFX01FVFJJQ1NfRU5EUE9JTlRcbiAgICApIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPVxuICAgICAgICBwcm9jZXNzLmVudi5BTlRfQ0xBVURFX0NPREVfTUVUUklDU19FTkRQT0lOVCArXG4gICAgICAgICcvYXBpL2NsYXVkZV9jb2RlL21ldHJpY3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBkZWZhdWx0RW5kcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgNTAwMFxuICB9XG5cbiAgYXN5bmMgZXhwb3J0KFxuICAgIG1ldHJpY3M6IFJlc291cmNlTWV0cmljcyxcbiAgICByZXN1bHRDYWxsYmFjazogKHJlc3VsdDogRXhwb3J0UmVzdWx0KSA9PiB2b2lkLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5pc1NodXRkb3duKSB7XG4gICAgICByZXN1bHRDYWxsYmFjayh7XG4gICAgICAgIGNvZGU6IEV4cG9ydFJlc3VsdENvZGUuRkFJTEVELFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdFeHBvcnRlciBoYXMgYmVlbiBzaHV0ZG93bicpLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFByb21pc2UgPSB0aGlzLmRvRXhwb3J0KG1ldHJpY3MsIHJlc3VsdENhbGxiYWNrKVxuICAgIHRoaXMucGVuZGluZ0V4cG9ydHMucHVzaChleHBvcnRQcm9taXNlKVxuXG4gICAgLy8gQ2xlYW4gdXAgY29tcGxldGVkIGV4cG9ydHNcbiAgICB2b2lkIGV4cG9ydFByb21pc2UuZmluYWxseSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucGVuZGluZ0V4cG9ydHMuaW5kZXhPZihleHBvcnRQcm9taXNlKVxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdm9pZCB0aGlzLnBlbmRpbmdFeHBvcnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkb0V4cG9ydChcbiAgICBtZXRyaWNzOiBSZXNvdXJjZU1ldHJpY3MsXG4gICAgcmVzdWx0Q2FsbGJhY2s6IChyZXN1bHQ6IEV4cG9ydFJlc3VsdCkgPT4gdm9pZCxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFNraXAgaWYgdHJ1c3Qgbm90IGVzdGFibGlzaGVkIGluIGludGVyYWN0aXZlIG1vZGVcbiAgICAgIC8vIFRoaXMgcHJldmVudHMgdHJpZ2dlcmluZyBhcGlLZXlIZWxwZXIgYmVmb3JlIHRydXN0IGRpYWxvZ1xuICAgICAgY29uc3QgaGFzVHJ1c3QgPVxuICAgICAgICBjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQoKSB8fCBnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbigpXG4gICAgICBpZiAoIWhhc1RydXN0KSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnQmlnUXVlcnkgbWV0cmljcyBleHBvcnQ6IHRydXN0IG5vdCBlc3RhYmxpc2hlZCwgc2tpcHBpbmcnLFxuICAgICAgICApXG4gICAgICAgIHJlc3VsdENhbGxiYWNrKHsgY29kZTogRXhwb3J0UmVzdWx0Q29kZS5TVUNDRVNTIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBvcmdhbml6YXRpb24tbGV2ZWwgbWV0cmljcyBvcHQtb3V0XG4gICAgICBjb25zdCBtZXRyaWNzU3RhdHVzID0gYXdhaXQgY2hlY2tNZXRyaWNzRW5hYmxlZCgpXG4gICAgICBpZiAoIW1ldHJpY3NTdGF0dXMuZW5hYmxlZCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ01ldHJpY3MgZXhwb3J0IGRpc2FibGVkIGJ5IG9yZ2FuaXphdGlvbiBzZXR0aW5nJylcbiAgICAgICAgcmVzdWx0Q2FsbGJhY2soeyBjb2RlOiBFeHBvcnRSZXN1bHRDb2RlLlNVQ0NFU1MgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnRyYW5zZm9ybU1ldHJpY3NGb3JJbnRlcm5hbChtZXRyaWNzKVxuXG4gICAgICBjb25zdCBhdXRoUmVzdWx0ID0gZ2V0QXV0aEhlYWRlcnMoKVxuICAgICAgaWYgKGF1dGhSZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBNZXRyaWNzIGV4cG9ydCBmYWlsZWQ6ICR7YXV0aFJlc3VsdC5lcnJvcn1gKVxuICAgICAgICByZXN1bHRDYWxsYmFjayh7XG4gICAgICAgICAgY29kZTogRXhwb3J0UmVzdWx0Q29kZS5GQUlMRUQsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihhdXRoUmVzdWx0LmVycm9yKSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdVc2VyLUFnZW50JzogZ2V0Q2xhdWRlQ29kZVVzZXJBZ2VudCgpLFxuICAgICAgICAuLi5hdXRoUmVzdWx0LmhlYWRlcnMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmVuZHBvaW50LCBwYXlsb2FkLCB7XG4gICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pXG5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnQmlnUXVlcnkgbWV0cmljcyBleHBvcnRlZCBzdWNjZXNzZnVsbHknKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgQmlnUXVlcnkgQVBJIFJlc3BvbnNlOiAke2pzb25TdHJpbmdpZnkocmVzcG9uc2UuZGF0YSwgbnVsbCwgMil9YCxcbiAgICAgIClcbiAgICAgIHJlc3VsdENhbGxiYWNrKHsgY29kZTogRXhwb3J0UmVzdWx0Q29kZS5TVUNDRVNTIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgQmlnUXVlcnkgbWV0cmljcyBleHBvcnQgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YClcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgcmVzdWx0Q2FsbGJhY2soe1xuICAgICAgICBjb2RlOiBFeHBvcnRSZXN1bHRDb2RlLkZBSUxFRCxcbiAgICAgICAgZXJyb3I6IHRvRXJyb3IoZXJyb3IpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybU1ldHJpY3NGb3JJbnRlcm5hbChcbiAgICBtZXRyaWNzOiBSZXNvdXJjZU1ldHJpY3MsXG4gICk6IEludGVybmFsTWV0cmljc1BheWxvYWQge1xuICAgIGNvbnN0IGF0dHJzID0gbWV0cmljcy5yZXNvdXJjZS5hdHRyaWJ1dGVzXG5cbiAgICBjb25zdCByZXNvdXJjZUF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnc2VydmljZS5uYW1lJzogKGF0dHJzWydzZXJ2aWNlLm5hbWUnXSBhcyBzdHJpbmcpIHx8ICdjbGF1ZGUtY29kZScsXG4gICAgICAnc2VydmljZS52ZXJzaW9uJzogKGF0dHJzWydzZXJ2aWNlLnZlcnNpb24nXSBhcyBzdHJpbmcpIHx8ICd1bmtub3duJyxcbiAgICAgICdvcy50eXBlJzogKGF0dHJzWydvcy50eXBlJ10gYXMgc3RyaW5nKSB8fCAndW5rbm93bicsXG4gICAgICAnb3MudmVyc2lvbic6IChhdHRyc1snb3MudmVyc2lvbiddIGFzIHN0cmluZykgfHwgJ3Vua25vd24nLFxuICAgICAgJ2hvc3QuYXJjaCc6IChhdHRyc1snaG9zdC5hcmNoJ10gYXMgc3RyaW5nKSB8fCAndW5rbm93bicsXG4gICAgICAnYWdncmVnYXRpb24udGVtcG9yYWxpdHknOlxuICAgICAgICB0aGlzLnNlbGVjdEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkoKSA9PT0gQWdncmVnYXRpb25UZW1wb3JhbGl0eS5ERUxUQVxuICAgICAgICAgID8gJ2RlbHRhJ1xuICAgICAgICAgIDogJ2N1bXVsYXRpdmUnLFxuICAgIH1cblxuICAgIC8vIE9ubHkgYWRkIHdzbC52ZXJzaW9uIGlmIGl0IGV4aXN0cyAob21pdCBpbnN0ZWFkIG9mIGRlZmF1bHQpXG4gICAgaWYgKGF0dHJzWyd3c2wudmVyc2lvbiddKSB7XG4gICAgICByZXNvdXJjZUF0dHJpYnV0ZXNbJ3dzbC52ZXJzaW9uJ10gPSBhdHRyc1snd3NsLnZlcnNpb24nXSBhcyBzdHJpbmdcbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tZXIgdHlwZSBhbmQgc3Vic2NyaXB0aW9uIHR5cGVcbiAgICBpZiAoaXNDbGF1ZGVBSVN1YnNjcmliZXIoKSkge1xuICAgICAgcmVzb3VyY2VBdHRyaWJ1dGVzWyd1c2VyLmN1c3RvbWVyX3R5cGUnXSA9ICdjbGF1ZGVfYWknXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25UeXBlID0gZ2V0U3Vic2NyaXB0aW9uVHlwZSgpXG4gICAgICBpZiAoc3Vic2NyaXB0aW9uVHlwZSkge1xuICAgICAgICByZXNvdXJjZUF0dHJpYnV0ZXNbJ3VzZXIuc3Vic2NyaXB0aW9uX3R5cGUnXSA9IHN1YnNjcmlwdGlvblR5cGVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb3VyY2VBdHRyaWJ1dGVzWyd1c2VyLmN1c3RvbWVyX3R5cGUnXSA9ICdhcGknXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtZWQgPSB7XG4gICAgICByZXNvdXJjZV9hdHRyaWJ1dGVzOiByZXNvdXJjZUF0dHJpYnV0ZXMsXG4gICAgICBtZXRyaWNzOiBtZXRyaWNzLnNjb3BlTWV0cmljcy5mbGF0TWFwKHNjb3BlTWV0cmljID0+XG4gICAgICAgIHNjb3BlTWV0cmljLm1ldHJpY3MubWFwKG1ldHJpYyA9PiAoe1xuICAgICAgICAgIG5hbWU6IG1ldHJpYy5kZXNjcmlwdG9yLm5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IG1ldHJpYy5kZXNjcmlwdG9yLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHVuaXQ6IG1ldHJpYy5kZXNjcmlwdG9yLnVuaXQsXG4gICAgICAgICAgZGF0YV9wb2ludHM6IHRoaXMuZXh0cmFjdERhdGFQb2ludHMobWV0cmljKSxcbiAgICAgICAgfSkpLFxuICAgICAgKSxcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGFQb2ludHMobWV0cmljOiBNZXRyaWNEYXRhKTogRGF0YVBvaW50W10ge1xuICAgIGNvbnN0IGRhdGFQb2ludHMgPSBtZXRyaWMuZGF0YVBvaW50cyB8fCBbXVxuXG4gICAgcmV0dXJuIGRhdGFQb2ludHNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2ludCk6IHBvaW50IGlzIE9UZWxEYXRhUG9pbnQ8bnVtYmVyPiA9PlxuICAgICAgICAgIHR5cGVvZiBwb2ludC52YWx1ZSA9PT0gJ251bWJlcicsXG4gICAgICApXG4gICAgICAubWFwKHBvaW50ID0+ICh7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuY29udmVydEF0dHJpYnV0ZXMocG9pbnQuYXR0cmlidXRlcyksXG4gICAgICAgIHZhbHVlOiBwb2ludC52YWx1ZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aGlzLmhyVGltZVRvSVNPU3RyaW5nKFxuICAgICAgICAgIHBvaW50LmVuZFRpbWUgfHwgcG9pbnQuc3RhcnRUaW1lIHx8IFtEYXRlLm5vdygpIC8gMTAwMCwgMF0sXG4gICAgICAgICksXG4gICAgICB9KSlcbiAgfVxuXG4gIGFzeW5jIHNodXRkb3duKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNTaHV0ZG93biA9IHRydWVcbiAgICBhd2FpdCB0aGlzLmZvcmNlRmx1c2goKVxuICAgIGxvZ0ZvckRlYnVnZ2luZygnQmlnUXVlcnkgbWV0cmljcyBleHBvcnRlciBzaHV0ZG93biBjb21wbGV0ZScpXG4gIH1cblxuICBhc3luYyBmb3JjZUZsdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMucGVuZGluZ0V4cG9ydHMpXG4gICAgbG9nRm9yRGVidWdnaW5nKCdCaWdRdWVyeSBtZXRyaWNzIGV4cG9ydGVyIGZsdXNoIGNvbXBsZXRlJylcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEF0dHJpYnV0ZXMoXG4gICAgYXR0cmlidXRlczogQXR0cmlidXRlcyB8IHVuZGVmaW5lZCxcbiAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBwcml2YXRlIGhyVGltZVRvSVNPU3RyaW5nKGhyVGltZTogSHJUaW1lKTogc3RyaW5nIHtcbiAgICBjb25zdCBbc2Vjb25kcywgbmFub3NlY29uZHNdID0gaHJUaW1lXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNlY29uZHMgKiAxMDAwICsgbmFub3NlY29uZHMgLyAxMDAwMDAwKVxuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKClcbiAgfVxuXG4gIHNlbGVjdEFnZ3JlZ2F0aW9uVGVtcG9yYWxpdHkoKTogQWdncmVnYXRpb25UZW1wb3JhbGl0eSB7XG4gICAgLy8gRE8gTk9UIENIQU5HRSBUSElTIFRPIENVTVVMQVRJVkVcbiAgICAvLyBJdCB3b3VsZCBtZXNzIHVwIHRoZSBhZ2dyZWdhdGlvbiBvZiBtZXRyaWNzXG4gICAgLy8gZm9yIENDIFByb2R1Y3Rpdml0eSBtZXRyaWNzIGRhc2hib2FyZFxuICAgIHJldHVybiBBZ2dyZWdhdGlvblRlbXBvcmFsaXR5LkRFTFRBXG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IERpYWdMb2dnZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGknXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vbG9nLmpzJ1xuZXhwb3J0IGNsYXNzIENsYXVkZUNvZGVEaWFnTG9nZ2VyIGltcGxlbWVudHMgRGlhZ0xvZ2dlciB7XG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgLi4uXzogdW5rbm93bltdKSB7XG4gICAgbG9nRXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgWzNQIHRlbGVtZXRyeV0gT1RFTCBkaWFnIGVycm9yOiAke21lc3NhZ2V9YCwge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgfSlcbiAgfVxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZywgLi4uXzogdW5rbm93bltdKSB7XG4gICAgbG9nRXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgWzNQIHRlbGVtZXRyeV0gT1RFTCBkaWFnIHdhcm46ICR7bWVzc2FnZX1gLCB7XG4gICAgICBsZXZlbDogJ3dhcm4nLFxuICAgIH0pXG4gIH1cbiAgaW5mbyhfbWVzc2FnZTogc3RyaW5nLCAuLi5fYXJnczogdW5rbm93bltdKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVidWcoX21lc3NhZ2U6IHN0cmluZywgLi4uX2FyZ3M6IHVua25vd25bXSkge1xuICAgIHJldHVyblxuICB9XG4gIHZlcmJvc2UoX21lc3NhZ2U6IHN0cmluZywgLi4uX2FyZ3M6IHVua25vd25bXSkge1xuICAgIHJldHVyblxuICB9XG59XG4iLCAiaW1wb3J0IHsgRGlhZ0xvZ0xldmVsLCBkaWFnLCB0cmFjZSB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2FwaSdcbmltcG9ydCB7IGxvZ3MgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGktbG9ncydcbi8vIE9UTFAvUHJvbWV0aGV1cyBleHBvcnRlcnMgYXJlIGR5bmFtaWNhbGx5IGltcG9ydGVkIGluc2lkZSB0aGUgcHJvdG9jb2xcbi8vIHN3aXRjaCBzdGF0ZW1lbnRzIGJlbG93LiBBIHByb2Nlc3MgdXNlcyBhdCBtb3N0IG9uZSBwcm90b2NvbCB2YXJpYW50IHBlclxuLy8gc2lnbmFsLCBidXQgc3RhdGljIGltcG9ydHMgd291bGQgbG9hZCBhbGwgNiAofjEuMk1CKSBvbiBldmVyeSBzdGFydHVwLlxuaW1wb3J0IHtcbiAgZW52RGV0ZWN0b3IsXG4gIGhvc3REZXRlY3RvcixcbiAgb3NEZXRlY3RvcixcbiAgcmVzb3VyY2VGcm9tQXR0cmlidXRlcyxcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvcmVzb3VyY2VzJ1xuaW1wb3J0IHtcbiAgQmF0Y2hMb2dSZWNvcmRQcm9jZXNzb3IsXG4gIENvbnNvbGVMb2dSZWNvcmRFeHBvcnRlcixcbiAgTG9nZ2VyUHJvdmlkZXIsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay1sb2dzJ1xuaW1wb3J0IHtcbiAgQ29uc29sZU1ldHJpY0V4cG9ydGVyLFxuICBNZXRlclByb3ZpZGVyLFxuICBQZXJpb2RpY0V4cG9ydGluZ01ldHJpY1JlYWRlcixcbn0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLW1ldHJpY3MnXG5pbXBvcnQge1xuICBCYXNpY1RyYWNlclByb3ZpZGVyLFxuICBCYXRjaFNwYW5Qcm9jZXNzb3IsXG4gIENvbnNvbGVTcGFuRXhwb3J0ZXIsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay10cmFjZS1iYXNlJ1xuaW1wb3J0IHtcbiAgQVRUUl9TRVJWSUNFX05BTUUsXG4gIEFUVFJfU0VSVklDRV9WRVJTSU9OLFxuICBTRU1SRVNBVFRSU19IT1NUX0FSQ0gsXG59IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zJ1xuaW1wb3J0IHsgSHR0cHNQcm94eUFnZW50IH0gZnJvbSAnaHR0cHMtcHJveHktYWdlbnQnXG5pbXBvcnQge1xuICBnZXRMb2dnZXJQcm92aWRlcixcbiAgZ2V0TWV0ZXJQcm92aWRlcixcbiAgZ2V0VHJhY2VyUHJvdmlkZXIsXG4gIHNldEV2ZW50TG9nZ2VyLFxuICBzZXRMb2dnZXJQcm92aWRlcixcbiAgc2V0TWV0ZXJQcm92aWRlcixcbiAgc2V0VHJhY2VyUHJvdmlkZXIsXG59IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQge1xuICBnZXRPdGVsSGVhZGVyc0Zyb21IZWxwZXIsXG4gIGdldFN1YnNjcmlwdGlvblR5cGUsXG4gIGlzMVBBcGlDdXN0b21lcixcbiAgaXNDbGF1ZGVBSVN1YnNjcmliZXIsXG59IGZyb20gJ3NyYy91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm0sIGdldFdzbFZlcnNpb24gfSBmcm9tICdzcmMvdXRpbHMvcGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGdldENBQ2VydGlmaWNhdGVzIH0gZnJvbSAnLi4vY2FDZXJ0cy5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGdldEhhc0Zvcm1hdHRlZE91dHB1dCwgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4uL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0TVRMU0NvbmZpZyB9IGZyb20gJy4uL210bHMuanMnXG5pbXBvcnQgeyBnZXRQcm94eVVybCwgc2hvdWxkQnlwYXNzUHJveHkgfSBmcm9tICcuLi9wcm94eS5qcydcbmltcG9ydCB7IGdldFNldHRpbmdzX0RFUFJFQ0FURUQgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IHByb2ZpbGVDaGVja3BvaW50IH0gZnJvbSAnLi4vc3RhcnR1cFByb2ZpbGVyLmpzJ1xuaW1wb3J0IHsgaXNCZXRhVHJhY2luZ0VuYWJsZWQgfSBmcm9tICcuL2JldGFTZXNzaW9uVHJhY2luZy5qcydcbmltcG9ydCB7IEJpZ1F1ZXJ5TWV0cmljc0V4cG9ydGVyIH0gZnJvbSAnLi9iaWdxdWVyeUV4cG9ydGVyLmpzJ1xuaW1wb3J0IHsgQ2xhdWRlQ29kZURpYWdMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci5qcydcbmltcG9ydCB7IGluaXRpYWxpemVQZXJmZXR0b1RyYWNpbmcgfSBmcm9tICcuL3BlcmZldHRvVHJhY2luZy5qcydcbmltcG9ydCB7XG4gIGVuZEludGVyYWN0aW9uU3BhbixcbiAgaXNFbmhhbmNlZFRlbGVtZXRyeUVuYWJsZWQsXG59IGZyb20gJy4vc2Vzc2lvblRyYWNpbmcuanMnXG5cbmNvbnN0IERFRkFVTFRfTUVUUklDU19FWFBPUlRfSU5URVJWQUxfTVMgPSA2MDAwMFxuY29uc3QgREVGQVVMVF9MT0dTX0VYUE9SVF9JTlRFUlZBTF9NUyA9IDUwMDBcbmNvbnN0IERFRkFVTFRfVFJBQ0VTX0VYUE9SVF9JTlRFUlZBTF9NUyA9IDUwMDBcblxuY2xhc3MgVGVsZW1ldHJ5VGltZW91dEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuZnVuY3Rpb24gdGVsZW1ldHJ5VGltZW91dChtczogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPG5ldmVyPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dChcbiAgICAgIChyZWo6IChlOiBFcnJvcikgPT4gdm9pZCwgbXNnOiBzdHJpbmcpID0+XG4gICAgICAgIHJlaihuZXcgVGVsZW1ldHJ5VGltZW91dEVycm9yKG1zZykpLFxuICAgICAgbXMsXG4gICAgICByZWplY3QsXG4gICAgICBtZXNzYWdlLFxuICAgICkudW5yZWYoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwVGVsZW1ldHJ5KCkge1xuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgIC8vIFJlYWQgZnJvbSBBTlRfIHByZWZpeGVkIHZhcmlhYmxlcyB0aGF0IGFyZSBkZWZpbmVkIGF0IGJ1aWxkIHRpbWVcbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfTUVUUklDU19FWFBPUlRFUikge1xuICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9NRVRSSUNTX0VYUE9SVEVSID0gcHJvY2Vzcy5lbnYuQU5UX09URUxfTUVUUklDU19FWFBPUlRFUlxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfTE9HU19FWFBPUlRFUikge1xuICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9MT0dTX0VYUE9SVEVSID0gcHJvY2Vzcy5lbnYuQU5UX09URUxfTE9HU19FWFBPUlRFUlxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfVFJBQ0VTX0VYUE9SVEVSKSB7XG4gICAgICBwcm9jZXNzLmVudi5PVEVMX1RSQUNFU19FWFBPUlRFUiA9IHByb2Nlc3MuZW52LkFOVF9PVEVMX1RSQUNFU19FWFBPUlRFUlxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfRVhQT1JURVJfT1RMUF9QUk9UT0NPTCkge1xuICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9FWFBPUlRFUl9PVExQX1BST1RPQ09MID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuQU5UX09URUxfRVhQT1JURVJfT1RMUF9QUk9UT0NPTFxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfRVhQT1JURVJfT1RMUF9FTkRQT0lOVCkge1xuICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9FWFBPUlRFUl9PVExQX0VORFBPSU5UID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuQU5UX09URUxfRVhQT1JURVJfT1RMUF9FTkRQT0lOVFxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuQU5UX09URUxfRVhQT1JURVJfT1RMUF9IRUFERVJTKSB7XG4gICAgICBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfSEVBREVSUyA9XG4gICAgICAgIHByb2Nlc3MuZW52LkFOVF9PVEVMX0VYUE9SVEVSX09UTFBfSEVBREVSU1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBkZWZhdWx0IHRlbXBvYWxpdHkgdG8gJ2RlbHRhJyBiZWNhdXNlIGl0J3MgdGhlIG1vcmUgc2FuZSBkZWZhdWx0XG4gIGlmICghcHJvY2Vzcy5lbnYuT1RFTF9FWFBPUlRFUl9PVExQX01FVFJJQ1NfVEVNUE9SQUxJVFlfUFJFRkVSRU5DRSkge1xuICAgIHByb2Nlc3MuZW52Lk9URUxfRVhQT1JURVJfT1RMUF9NRVRSSUNTX1RFTVBPUkFMSVRZX1BSRUZFUkVOQ0UgPSAnZGVsdGEnXG4gIH1cbn1cblxuLy8gUGVyIE9URUwgc3BlYywgXCJub25lXCIgbWVhbnMgXCJubyBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQgZXhwb3J0ZXIgZm9yIHRoaXMgc2lnbmFsXCIuXG4vLyBodHRwczovL29wZW50ZWxlbWV0cnkuaW8vZG9jcy9zcGVjcy9vdGVsL2NvbmZpZ3VyYXRpb24vc2RrLWVudmlyb25tZW50LXZhcmlhYmxlcy8jZXhwb3J0ZXItc2VsZWN0aW9uXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHBvcnRlclR5cGVzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmdbXSB7XG4gIHJldHVybiAodmFsdWUgfHwgJycpXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnLCcpXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAodCA9PiB0LnRyaW0oKSlcbiAgICAuZmlsdGVyKHQgPT4gdCAhPT0gJ25vbmUnKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRPdGxwUmVhZGVycygpIHtcbiAgY29uc3QgZXhwb3J0ZXJUeXBlcyA9IHBhcnNlRXhwb3J0ZXJUeXBlcyhwcm9jZXNzLmVudi5PVEVMX01FVFJJQ1NfRVhQT1JURVIpXG4gIGNvbnN0IGV4cG9ydEludGVydmFsID0gcGFyc2VJbnQoXG4gICAgcHJvY2Vzcy5lbnYuT1RFTF9NRVRSSUNfRVhQT1JUX0lOVEVSVkFMIHx8XG4gICAgICBERUZBVUxUX01FVFJJQ1NfRVhQT1JUX0lOVEVSVkFMX01TLnRvU3RyaW5nKCksXG4gIClcblxuICBjb25zdCBleHBvcnRlcnMgPSBbXVxuICBmb3IgKGNvbnN0IGV4cG9ydGVyVHlwZSBvZiBleHBvcnRlclR5cGVzKSB7XG4gICAgaWYgKGV4cG9ydGVyVHlwZSA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICAvLyBDdXN0b20gY29uc29sZSBleHBvcnRlciB0aGF0IHNob3dzIHJlc291cmNlIGF0dHJpYnV0ZXNcbiAgICAgIGNvbnN0IGNvbnNvbGVFeHBvcnRlciA9IG5ldyBDb25zb2xlTWV0cmljRXhwb3J0ZXIoKVxuICAgICAgY29uc3Qgb3JpZ2luYWxFeHBvcnQgPSBjb25zb2xlRXhwb3J0ZXIuZXhwb3J0LmJpbmQoY29uc29sZUV4cG9ydGVyKVxuXG4gICAgICBjb25zb2xlRXhwb3J0ZXIuZXhwb3J0ID0gKG1ldHJpY3MsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vIExvZyByZXNvdXJjZSBhdHRyaWJ1dGVzIG9uY2UgYXQgdGhlIHN0YXJ0XG4gICAgICAgIGlmIChtZXRyaWNzLnJlc291cmNlICYmIG1ldHJpY3MucmVzb3VyY2UuYXR0cmlidXRlcykge1xuICAgICAgICAgIC8vIFRoZSBjb25zb2xlIGV4cG9ydGVyIGlzIGZvciBkZWJ1Z2dpbmcsIHNvIGNvbnNvbGUgb3V0cHV0IGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnXFxuPT09IFJlc291cmNlIEF0dHJpYnV0ZXMgPT09JylcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoanNvblN0cmluZ2lmeShtZXRyaWNzLnJlc291cmNlLmF0dHJpYnV0ZXMpKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEV4cG9ydChtZXRyaWNzLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgZXhwb3J0ZXJzLnB1c2goY29uc29sZUV4cG9ydGVyKVxuICAgIH0gZWxzZSBpZiAoZXhwb3J0ZXJUeXBlID09PSAnb3RscCcpIHtcbiAgICAgIGNvbnN0IHByb3RvY29sID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9FWFBPUlRFUl9PVExQX01FVFJJQ1NfUFJPVE9DT0w/LnRyaW0oKSB8fFxuICAgICAgICBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfUFJPVE9DT0w/LnRyaW0oKVxuXG4gICAgICBjb25zdCBodHRwQ29uZmlnID0gZ2V0T1RMUEV4cG9ydGVyQ29uZmlnKClcblxuICAgICAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgICAgICBjYXNlICdncnBjJzoge1xuICAgICAgICAgIC8vIExhenktaW1wb3J0IHRvIGtlZXAgQGdycGMvZ3JwYy1qcyAofjcwMEtCKSBvdXQgb2YgdGhlIHRlbGVtZXRyeSBjaHVua1xuICAgICAgICAgIC8vIHdoZW4gdGhlIHByb3RvY29sIGlzIGh0dHAvcHJvdG9idWYgKGFudCBkZWZhdWx0KSBvciBodHRwL2pzb24uXG4gICAgICAgICAgY29uc3QgeyBPVExQTWV0cmljRXhwb3J0ZXIgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICdAb3BlbnRlbGVtZXRyeS9leHBvcnRlci1tZXRyaWNzLW90bHAtZ3JwYydcbiAgICAgICAgICApXG4gICAgICAgICAgZXhwb3J0ZXJzLnB1c2gobmV3IE9UTFBNZXRyaWNFeHBvcnRlcigpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHR0cC9qc29uJzoge1xuICAgICAgICAgIGNvbnN0IHsgT1RMUE1ldHJpY0V4cG9ydGVyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLWh0dHAnXG4gICAgICAgICAgKVxuICAgICAgICAgIGV4cG9ydGVycy5wdXNoKG5ldyBPVExQTWV0cmljRXhwb3J0ZXIoaHR0cENvbmZpZykpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdodHRwL3Byb3RvYnVmJzoge1xuICAgICAgICAgIGNvbnN0IHsgT1RMUE1ldHJpY0V4cG9ydGVyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbWV0cmljcy1vdGxwLXByb3RvJ1xuICAgICAgICAgIClcbiAgICAgICAgICBleHBvcnRlcnMucHVzaChuZXcgT1RMUE1ldHJpY0V4cG9ydGVyKGh0dHBDb25maWcpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVW5rbm93biBwcm90b2NvbCBzZXQgaW4gT1RFTF9FWFBPUlRFUl9PVExQX01FVFJJQ1NfUFJPVE9DT0wgb3IgT1RFTF9FWFBPUlRFUl9PVExQX1BST1RPQ09MIGVudiB2YXI6ICR7cHJvdG9jb2x9YCxcbiAgICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHBvcnRlclR5cGUgPT09ICdwcm9tZXRoZXVzJykge1xuICAgICAgY29uc3QgeyBQcm9tZXRoZXVzRXhwb3J0ZXIgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXByb21ldGhldXMnXG4gICAgICApXG4gICAgICBleHBvcnRlcnMucHVzaChuZXcgUHJvbWV0aGV1c0V4cG9ydGVyKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVua25vd24gZXhwb3J0ZXIgdHlwZSBzZXQgaW4gT1RFTF9FWFBPUlRFUl9PVExQX01FVFJJQ1NfUFJPVE9DT0wgb3IgT1RFTF9FWFBPUlRFUl9PVExQX1BST1RPQ09MIGVudiB2YXI6ICR7ZXhwb3J0ZXJUeXBlfWAsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydGVycy5tYXAoZXhwb3J0ZXIgPT4ge1xuICAgIGlmICgnZXhwb3J0JyBpbiBleHBvcnRlcikge1xuICAgICAgcmV0dXJuIG5ldyBQZXJpb2RpY0V4cG9ydGluZ01ldHJpY1JlYWRlcih7XG4gICAgICAgIGV4cG9ydGVyLFxuICAgICAgICBleHBvcnRJbnRlcnZhbE1pbGxpczogZXhwb3J0SW50ZXJ2YWwsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZXhwb3J0ZXJcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0T3RscExvZ0V4cG9ydGVycygpIHtcbiAgY29uc3QgZXhwb3J0ZXJUeXBlcyA9IHBhcnNlRXhwb3J0ZXJUeXBlcyhwcm9jZXNzLmVudi5PVEVMX0xPR1NfRVhQT1JURVIpXG5cbiAgY29uc3QgcHJvdG9jb2wgPVxuICAgIHByb2Nlc3MuZW52Lk9URUxfRVhQT1JURVJfT1RMUF9MT0dTX1BST1RPQ09MPy50cmltKCkgfHxcbiAgICBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfUFJPVE9DT0w/LnRyaW0oKVxuICBjb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52Lk9URUxfRVhQT1JURVJfT1RMUF9FTkRQT0lOVFxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgWzNQIHRlbGVtZXRyeV0gZ2V0T3RscExvZ0V4cG9ydGVyczogdHlwZXM9JHtqc29uU3RyaW5naWZ5KGV4cG9ydGVyVHlwZXMpfSwgcHJvdG9jb2w9JHtwcm90b2NvbH0sIGVuZHBvaW50PSR7ZW5kcG9pbnR9YCxcbiAgKVxuXG4gIGNvbnN0IGV4cG9ydGVycyA9IFtdXG4gIGZvciAoY29uc3QgZXhwb3J0ZXJUeXBlIG9mIGV4cG9ydGVyVHlwZXMpIHtcbiAgICBpZiAoZXhwb3J0ZXJUeXBlID09PSAnY29uc29sZScpIHtcbiAgICAgIGV4cG9ydGVycy5wdXNoKG5ldyBDb25zb2xlTG9nUmVjb3JkRXhwb3J0ZXIoKSlcbiAgICB9IGVsc2UgaWYgKGV4cG9ydGVyVHlwZSA9PT0gJ290bHAnKSB7XG4gICAgICBjb25zdCBodHRwQ29uZmlnID0gZ2V0T1RMUEV4cG9ydGVyQ29uZmlnKClcblxuICAgICAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgICAgICBjYXNlICdncnBjJzoge1xuICAgICAgICAgIGNvbnN0IHsgT1RMUExvZ0V4cG9ydGVyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbG9ncy1vdGxwLWdycGMnXG4gICAgICAgICAgKVxuICAgICAgICAgIGV4cG9ydGVycy5wdXNoKG5ldyBPVExQTG9nRXhwb3J0ZXIoKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2h0dHAvanNvbic6IHtcbiAgICAgICAgICBjb25zdCB7IE9UTFBMb2dFeHBvcnRlciB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLWxvZ3Mtb3RscC1odHRwJ1xuICAgICAgICAgIClcbiAgICAgICAgICBleHBvcnRlcnMucHVzaChuZXcgT1RMUExvZ0V4cG9ydGVyKGh0dHBDb25maWcpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHR0cC9wcm90b2J1Zic6IHtcbiAgICAgICAgICBjb25zdCB7IE9UTFBMb2dFeHBvcnRlciB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLWxvZ3Mtb3RscC1wcm90bydcbiAgICAgICAgICApXG4gICAgICAgICAgZXhwb3J0ZXJzLnB1c2gobmV3IE9UTFBMb2dFeHBvcnRlcihodHRwQ29uZmlnKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFVua25vd24gcHJvdG9jb2wgc2V0IGluIE9URUxfRVhQT1JURVJfT1RMUF9MT0dTX1BST1RPQ09MIG9yIE9URUxfRVhQT1JURVJfT1RMUF9QUk9UT0NPTCBlbnYgdmFyOiAke3Byb3RvY29sfWAsXG4gICAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmtub3duIGV4cG9ydGVyIHR5cGUgc2V0IGluIE9URUxfTE9HU19FWFBPUlRFUiBlbnYgdmFyOiAke2V4cG9ydGVyVHlwZX1gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHBvcnRlcnNcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0T3RscFRyYWNlRXhwb3J0ZXJzKCkge1xuICBjb25zdCBleHBvcnRlclR5cGVzID0gcGFyc2VFeHBvcnRlclR5cGVzKHByb2Nlc3MuZW52Lk9URUxfVFJBQ0VTX0VYUE9SVEVSKVxuXG4gIGNvbnN0IGV4cG9ydGVycyA9IFtdXG4gIGZvciAoY29uc3QgZXhwb3J0ZXJUeXBlIG9mIGV4cG9ydGVyVHlwZXMpIHtcbiAgICBpZiAoZXhwb3J0ZXJUeXBlID09PSAnY29uc29sZScpIHtcbiAgICAgIGV4cG9ydGVycy5wdXNoKG5ldyBDb25zb2xlU3BhbkV4cG9ydGVyKCkpXG4gICAgfSBlbHNlIGlmIChleHBvcnRlclR5cGUgPT09ICdvdGxwJykge1xuICAgICAgY29uc3QgcHJvdG9jb2wgPVxuICAgICAgICBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfVFJBQ0VTX1BST1RPQ09MPy50cmltKCkgfHxcbiAgICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9FWFBPUlRFUl9PVExQX1BST1RPQ09MPy50cmltKClcblxuICAgICAgY29uc3QgaHR0cENvbmZpZyA9IGdldE9UTFBFeHBvcnRlckNvbmZpZygpXG5cbiAgICAgIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICAgICAgY2FzZSAnZ3JwYyc6IHtcbiAgICAgICAgICBjb25zdCB7IE9UTFBUcmFjZUV4cG9ydGVyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1ncnBjJ1xuICAgICAgICAgIClcbiAgICAgICAgICBleHBvcnRlcnMucHVzaChuZXcgT1RMUFRyYWNlRXhwb3J0ZXIoKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2h0dHAvanNvbic6IHtcbiAgICAgICAgICBjb25zdCB7IE9UTFBUcmFjZUV4cG9ydGVyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgICAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1odHRwJ1xuICAgICAgICAgIClcbiAgICAgICAgICBleHBvcnRlcnMucHVzaChuZXcgT1RMUFRyYWNlRXhwb3J0ZXIoaHR0cENvbmZpZykpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdodHRwL3Byb3RvYnVmJzoge1xuICAgICAgICAgIGNvbnN0IHsgT1RMUFRyYWNlRXhwb3J0ZXIgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICdAb3BlbnRlbGVtZXRyeS9leHBvcnRlci10cmFjZS1vdGxwLXByb3RvJ1xuICAgICAgICAgIClcbiAgICAgICAgICBleHBvcnRlcnMucHVzaChuZXcgT1RMUFRyYWNlRXhwb3J0ZXIoaHR0cENvbmZpZykpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBVbmtub3duIHByb3RvY29sIHNldCBpbiBPVEVMX0VYUE9SVEVSX09UTFBfVFJBQ0VTX1BST1RPQ09MIG9yIE9URUxfRVhQT1JURVJfT1RMUF9QUk9UT0NPTCBlbnYgdmFyOiAke3Byb3RvY29sfWAsXG4gICAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmtub3duIGV4cG9ydGVyIHR5cGUgc2V0IGluIE9URUxfVFJBQ0VTX0VYUE9SVEVSIGVudiB2YXI6ICR7ZXhwb3J0ZXJUeXBlfWAsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydGVyc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZWxlbWV0cnlFbmFibGVkKCkge1xuICByZXR1cm4gaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5BQkxFX1RFTEVNRVRSWSlcbn1cblxuZnVuY3Rpb24gZ2V0QmlnUXVlcnlFeHBvcnRpbmdSZWFkZXIoKSB7XG4gIGNvbnN0IGJpZ3F1ZXJ5RXhwb3J0ZXIgPSBuZXcgQmlnUXVlcnlNZXRyaWNzRXhwb3J0ZXIoKVxuICByZXR1cm4gbmV3IFBlcmlvZGljRXhwb3J0aW5nTWV0cmljUmVhZGVyKHtcbiAgICBleHBvcnRlcjogYmlncXVlcnlFeHBvcnRlcixcbiAgICBleHBvcnRJbnRlcnZhbE1pbGxpczogNSAqIDYwICogMTAwMCwgLy8gNW1pbnMgZm9yIEJpZ1F1ZXJ5IG1ldHJpY3MgZXhwb3J0ZXIgdG8gcmVkdWNlIGxvYWRcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNCaWdRdWVyeU1ldHJpY3NFbmFibGVkKCkge1xuICAvLyBCaWdRdWVyeSBtZXRyaWNzIGFyZSBlbmFibGVkIGZvcjpcbiAgLy8gMS4gQVBJIGN1c3RvbWVycyAoZXhjbHVkaW5nIENsYXVkZS5haSBzdWJzY3JpYmVycyBhbmQgQmVkcm9jay9WZXJ0ZXgpXG4gIC8vIDIuIENsYXVkZSBmb3IgRW50ZXJwcmlzZSAoQzRFKSB1c2Vyc1xuICAvLyAzLiBDbGF1ZGUgZm9yIFRlYW1zIHVzZXJzXG4gIGNvbnN0IHN1YnNjcmlwdGlvblR5cGUgPSBnZXRTdWJzY3JpcHRpb25UeXBlKClcbiAgY29uc3QgaXNDNEVPclRlYW1Vc2VyID1cbiAgICBpc0NsYXVkZUFJU3Vic2NyaWJlcigpICYmXG4gICAgKHN1YnNjcmlwdGlvblR5cGUgPT09ICdlbnRlcnByaXNlJyB8fCBzdWJzY3JpcHRpb25UeXBlID09PSAndGVhbScpXG5cbiAgcmV0dXJuIGlzMVBBcGlDdXN0b21lcigpIHx8IGlzQzRFT3JUZWFtVXNlclxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgYmV0YSB0cmFjaW5nIC0gYSBzZXBhcmF0ZSBjb2RlIHBhdGggZm9yIGRldGFpbGVkIGRlYnVnZ2luZy5cbiAqIFVzZXMgQkVUQV9UUkFDSU5HX0VORFBPSU5UIGluc3RlYWQgb2YgT1RFTF9FWFBPUlRFUl9PVExQX0VORFBPSU5ULlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplQmV0YVRyYWNpbmcoXG4gIHJlc291cmNlOiBSZXR1cm5UeXBlPHR5cGVvZiByZXNvdXJjZUZyb21BdHRyaWJ1dGVzPixcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52LkJFVEFfVFJBQ0lOR19FTkRQT0lOVFxuICBpZiAoIWVuZHBvaW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBbeyBPVExQVHJhY2VFeHBvcnRlciB9LCB7IE9UTFBMb2dFeHBvcnRlciB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBpbXBvcnQoJ0BvcGVudGVsZW1ldHJ5L2V4cG9ydGVyLXRyYWNlLW90bHAtaHR0cCcpLFxuICAgIGltcG9ydCgnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItbG9ncy1vdGxwLWh0dHAnKSxcbiAgXSlcblxuICBjb25zdCBodHRwQ29uZmlnID0ge1xuICAgIHVybDogYCR7ZW5kcG9pbnR9L3YxL3RyYWNlc2AsXG4gIH1cblxuICBjb25zdCBsb2dIdHRwQ29uZmlnID0ge1xuICAgIHVybDogYCR7ZW5kcG9pbnR9L3YxL2xvZ3NgLFxuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSB0cmFjZSBleHBvcnRlclxuICBjb25zdCB0cmFjZUV4cG9ydGVyID0gbmV3IE9UTFBUcmFjZUV4cG9ydGVyKGh0dHBDb25maWcpXG4gIGNvbnN0IHNwYW5Qcm9jZXNzb3IgPSBuZXcgQmF0Y2hTcGFuUHJvY2Vzc29yKHRyYWNlRXhwb3J0ZXIsIHtcbiAgICBzY2hlZHVsZWREZWxheU1pbGxpczogREVGQVVMVF9UUkFDRVNfRVhQT1JUX0lOVEVSVkFMX01TLFxuICB9KVxuXG4gIGNvbnN0IHRyYWNlclByb3ZpZGVyID0gbmV3IEJhc2ljVHJhY2VyUHJvdmlkZXIoe1xuICAgIHJlc291cmNlLFxuICAgIHNwYW5Qcm9jZXNzb3JzOiBbc3BhblByb2Nlc3Nvcl0sXG4gIH0pXG5cbiAgdHJhY2Uuc2V0R2xvYmFsVHJhY2VyUHJvdmlkZXIodHJhY2VyUHJvdmlkZXIpXG4gIHNldFRyYWNlclByb3ZpZGVyKHRyYWNlclByb3ZpZGVyKVxuXG4gIC8vIEluaXRpYWxpemUgbG9nIGV4cG9ydGVyXG4gIGNvbnN0IGxvZ0V4cG9ydGVyID0gbmV3IE9UTFBMb2dFeHBvcnRlcihsb2dIdHRwQ29uZmlnKVxuICBjb25zdCBsb2dnZXJQcm92aWRlciA9IG5ldyBMb2dnZXJQcm92aWRlcih7XG4gICAgcmVzb3VyY2UsXG4gICAgcHJvY2Vzc29yczogW1xuICAgICAgbmV3IEJhdGNoTG9nUmVjb3JkUHJvY2Vzc29yKGxvZ0V4cG9ydGVyLCB7XG4gICAgICAgIHNjaGVkdWxlZERlbGF5TWlsbGlzOiBERUZBVUxUX0xPR1NfRVhQT1JUX0lOVEVSVkFMX01TLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSlcblxuICBsb2dzLnNldEdsb2JhbExvZ2dlclByb3ZpZGVyKGxvZ2dlclByb3ZpZGVyKVxuICBzZXRMb2dnZXJQcm92aWRlcihsb2dnZXJQcm92aWRlcilcblxuICAvLyBJbml0aWFsaXplIGV2ZW50IGxvZ2dlclxuICBjb25zdCBldmVudExvZ2dlciA9IGxvZ3MuZ2V0TG9nZ2VyKFxuICAgICdjb20uYW50aHJvcGljLmNsYXVkZV9jb2RlLmV2ZW50cycsXG4gICAgTUFDUk8uVkVSU0lPTixcbiAgKVxuICBzZXRFdmVudExvZ2dlcihldmVudExvZ2dlcilcblxuICAvLyBTZXR1cCBmbHVzaCBoYW5kbGVycyAtIGZsdXNoIGJvdGggbG9ncyBBTkQgdHJhY2VzXG4gIHByb2Nlc3Mub24oJ2JlZm9yZUV4aXQnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgbG9nZ2VyUHJvdmlkZXI/LmZvcmNlRmx1c2goKVxuICAgIGF3YWl0IHRyYWNlclByb3ZpZGVyPy5mb3JjZUZsdXNoKClcbiAgfSlcblxuICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgIHZvaWQgbG9nZ2VyUHJvdmlkZXI/LmZvcmNlRmx1c2goKVxuICAgIHZvaWQgdHJhY2VyUHJvdmlkZXI/LmZvcmNlRmx1c2goKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVRlbGVtZXRyeSgpIHtcbiAgcHJvZmlsZUNoZWNrcG9pbnQoJ3RlbGVtZXRyeV9pbml0X3N0YXJ0JylcbiAgYm9vdHN0cmFwVGVsZW1ldHJ5KClcblxuICAvLyBDb25zb2xlIGV4cG9ydGVycyBjYWxsIGNvbnNvbGUuZGlyIG9uIGEgdGltZXIgKDVzIGxvZ3MvdHJhY2VzLCA2MHNcbiAgLy8gbWV0cmljcyksIHdyaXRpbmcgcHJldHR5LXByaW50ZWQgb2JqZWN0cyB0byBzdGRvdXQuIEluIHN0cmVhbS1qc29uXG4gIC8vIG1vZGUgc3Rkb3V0IGlzIHRoZSBTREsgbWVzc2FnZSBjaGFubmVsOyB0aGUgZmlyc3QgbGluZSAoYHtgKSBicmVha3NcbiAgLy8gdGhlIFNESydzIGxpbmUgcmVhZGVyLiBTdHJpcHBlZCBoZXJlIChub3QgbWFpbi50c3gpIGJlY2F1c2UgaW5pdC50c1xuICAvLyByZS1ydW5zIGFwcGx5Q29uZmlnRW52aXJvbm1lbnRWYXJpYWJsZXMoKSBpbnNpZGUgaW5pdGlhbGl6ZVRlbGVtZXRyeS1cbiAgLy8gQWZ0ZXJUcnVzdCBmb3IgcmVtb3RlLW1hbmFnZWQtc2V0dGluZ3MgdXNlcnMsIGFuZCBib290c3RyYXBUZWxlbWV0cnlcbiAgLy8gYWJvdmUgY29waWVzIEFOVF9PVEVMXyogZm9yIGFudCB1c2VycyBcdTIwMTQgYm90aCB3b3VsZCB1bmRvIGFuIGVhcmxpZXIgc3RyaXAuXG4gIGlmIChnZXRIYXNGb3JtYXR0ZWRPdXRwdXQoKSkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIFtcbiAgICAgICdPVEVMX01FVFJJQ1NfRVhQT1JURVInLFxuICAgICAgJ09URUxfTE9HU19FWFBPUlRFUicsXG4gICAgICAnT1RFTF9UUkFDRVNfRVhQT1JURVInLFxuICAgIF0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IHYgPSBwcm9jZXNzLmVudltrZXldXG4gICAgICBpZiAodj8uaW5jbHVkZXMoJ2NvbnNvbGUnKSkge1xuICAgICAgICBwcm9jZXNzLmVudltrZXldID0gdlxuICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIocyA9PiBzICE9PSAnY29uc29sZScpXG4gICAgICAgICAgLmpvaW4oJywnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpYWcuc2V0TG9nZ2VyKG5ldyBDbGF1ZGVDb2RlRGlhZ0xvZ2dlcigpLCBEaWFnTG9nTGV2ZWwuRVJST1IpXG5cbiAgLy8gSW5pdGlhbGl6ZSBQZXJmZXR0byB0cmFjaW5nIChpbmRlcGVuZGVudCBvZiBPVEVMKVxuICAvLyBFbmFibGUgdmlhIENMQVVERV9DT0RFX1BFUkZFVFRPX1RSQUNFPTEgb3IgQ0xBVURFX0NPREVfUEVSRkVUVE9fVFJBQ0U9PHBhdGg+XG4gIGluaXRpYWxpemVQZXJmZXR0b1RyYWNpbmcoKVxuXG4gIGNvbnN0IHJlYWRlcnMgPSBbXVxuXG4gIC8vIEFkZCBjdXN0b21lciBleHBvcnRlcnMgKGlmIGVuYWJsZWQpXG4gIGNvbnN0IHRlbGVtZXRyeUVuYWJsZWQgPSBpc1RlbGVtZXRyeUVuYWJsZWQoKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFszUCB0ZWxlbWV0cnldIGlzVGVsZW1ldHJ5RW5hYmxlZD0ke3RlbGVtZXRyeUVuYWJsZWR9IChDTEFVREVfQ09ERV9FTkFCTEVfVEVMRU1FVFJZPSR7cHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5BQkxFX1RFTEVNRVRSWX0pYCxcbiAgKVxuICBpZiAodGVsZW1ldHJ5RW5hYmxlZCkge1xuICAgIHJlYWRlcnMucHVzaCguLi4oYXdhaXQgZ2V0T3RscFJlYWRlcnMoKSkpXG4gIH1cblxuICAvLyBBZGQgQmlnUXVlcnkgZXhwb3J0ZXIgKGZvciBBUEkgY3VzdG9tZXJzLCBDNEUgdXNlcnMsIGFuZCBpbnRlcm5hbCB1c2VycylcbiAgaWYgKGlzQmlnUXVlcnlNZXRyaWNzRW5hYmxlZCgpKSB7XG4gICAgcmVhZGVycy5wdXNoKGdldEJpZ1F1ZXJ5RXhwb3J0aW5nUmVhZGVyKCkpXG4gIH1cblxuICAvLyBDcmVhdGUgYmFzZSByZXNvdXJjZSB3aXRoIHNlcnZpY2UgYXR0cmlidXRlc1xuICBjb25zdCBwbGF0Zm9ybSA9IGdldFBsYXRmb3JtKClcbiAgY29uc3QgYmFzZUF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgW0FUVFJfU0VSVklDRV9OQU1FXTogJ2NsYXVkZS1jb2RlJyxcbiAgICBbQVRUUl9TRVJWSUNFX1ZFUlNJT05dOiBNQUNSTy5WRVJTSU9OLFxuICB9XG5cbiAgLy8gQWRkIFdTTC1zcGVjaWZpYyBhdHRyaWJ1dGVzIGlmIHJ1bm5pbmcgb24gV1NMXG4gIGlmIChwbGF0Zm9ybSA9PT0gJ3dzbCcpIHtcbiAgICBjb25zdCB3c2xWZXJzaW9uID0gZ2V0V3NsVmVyc2lvbigpXG4gICAgaWYgKHdzbFZlcnNpb24pIHtcbiAgICAgIGJhc2VBdHRyaWJ1dGVzWyd3c2wudmVyc2lvbiddID0gd3NsVmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJhc2VSZXNvdXJjZSA9IHJlc291cmNlRnJvbUF0dHJpYnV0ZXMoYmFzZUF0dHJpYnV0ZXMpXG5cbiAgLy8gVXNlIE9wZW5UZWxlbWV0cnkgZGV0ZWN0b3JzXG4gIGNvbnN0IG9zUmVzb3VyY2UgPSByZXNvdXJjZUZyb21BdHRyaWJ1dGVzKFxuICAgIG9zRGV0ZWN0b3IuZGV0ZWN0KCkuYXR0cmlidXRlcyB8fCB7fSxcbiAgKVxuXG4gIC8vIEV4dHJhY3Qgb25seSBob3N0LmFyY2ggZnJvbSBob3N0RGV0ZWN0b3JcbiAgY29uc3QgaG9zdERldGVjdGVkID0gaG9zdERldGVjdG9yLmRldGVjdCgpXG4gIGNvbnN0IGhvc3RBcmNoQXR0cmlidXRlcyA9IGhvc3REZXRlY3RlZC5hdHRyaWJ1dGVzPy5bU0VNUkVTQVRUUlNfSE9TVF9BUkNIXVxuICAgID8ge1xuICAgICAgICBbU0VNUkVTQVRUUlNfSE9TVF9BUkNIXTogaG9zdERldGVjdGVkLmF0dHJpYnV0ZXNbU0VNUkVTQVRUUlNfSE9TVF9BUkNIXSxcbiAgICAgIH1cbiAgICA6IHt9XG4gIGNvbnN0IGhvc3RBcmNoUmVzb3VyY2UgPSByZXNvdXJjZUZyb21BdHRyaWJ1dGVzKGhvc3RBcmNoQXR0cmlidXRlcylcblxuICBjb25zdCBlbnZSZXNvdXJjZSA9IHJlc291cmNlRnJvbUF0dHJpYnV0ZXMoXG4gICAgZW52RGV0ZWN0b3IuZGV0ZWN0KCkuYXR0cmlidXRlcyB8fCB7fSxcbiAgKVxuXG4gIC8vIE1lcmdlIHJlc291cmNlcyAtIGxhdGVyIHJlc291cmNlcyB0YWtlIHByZWNlZGVuY2VcbiAgY29uc3QgcmVzb3VyY2UgPSBiYXNlUmVzb3VyY2VcbiAgICAubWVyZ2Uob3NSZXNvdXJjZSlcbiAgICAubWVyZ2UoaG9zdEFyY2hSZXNvdXJjZSlcbiAgICAubWVyZ2UoZW52UmVzb3VyY2UpXG5cbiAgLy8gQ2hlY2sgaWYgYmV0YSB0cmFjaW5nIGlzIGVuYWJsZWQgLSB0aGlzIGlzIGEgc2VwYXJhdGUgY29kZSBwYXRoXG4gIC8vIEF2YWlsYWJsZSB0byBhbGwgdXNlcnMgd2hvIHNldCBFTkFCTEVfQkVUQV9UUkFDSU5HX0RFVEFJTEVEPTEgYW5kIEJFVEFfVFJBQ0lOR19FTkRQT0lOVFxuICBpZiAoaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHZvaWQgaW5pdGlhbGl6ZUJldGFUcmFjaW5nKHJlc291cmNlKS5jYXRjaChlID0+XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEJldGEgdHJhY2luZyBpbml0IGZhaWxlZDogJHtlfWAsIHsgbGV2ZWw6ICdlcnJvcicgfSksXG4gICAgKVxuICAgIC8vIFN0aWxsIHNldCB1cCBtZXRlciBwcm92aWRlciBmb3IgbWV0cmljcyAoYnV0IHNraXAgcmVndWxhciBsb2dzL3RyYWNlcyBzZXR1cClcbiAgICBjb25zdCBtZXRlclByb3ZpZGVyID0gbmV3IE1ldGVyUHJvdmlkZXIoe1xuICAgICAgcmVzb3VyY2UsXG4gICAgICB2aWV3czogW10sXG4gICAgICByZWFkZXJzLFxuICAgIH0pXG4gICAgc2V0TWV0ZXJQcm92aWRlcihtZXRlclByb3ZpZGVyKVxuXG4gICAgLy8gUmVnaXN0ZXIgc2h1dGRvd24gZm9yIGJldGEgdHJhY2luZ1xuICAgIGNvbnN0IHNodXRkb3duVGVsZW1ldHJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGltZW91dE1zID0gcGFyc2VJbnQoXG4gICAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX09URUxfU0hVVERPV05fVElNRU9VVF9NUyB8fCAnMjAwMCcsXG4gICAgICApXG4gICAgICB0cnkge1xuICAgICAgICBlbmRJbnRlcmFjdGlvblNwYW4oKVxuXG4gICAgICAgIC8vIEZvcmNlIGZsdXNoICsgc2h1dGRvd24gdG9nZXRoZXIgaW5zaWRlIHRoZSB0aW1lb3V0LiBQcmV2aW91c2x5IGZvcmNlRmx1c2hcbiAgICAgICAgLy8gd2FzIGF3YWl0ZWQgdW5ib3VuZGVkIEJFRk9SRSB0aGUgcmFjZSwgYmxvY2tpbmcgZXhpdCBvbiBzbG93IE9UTFAgZW5kcG9pbnRzLlxuICAgICAgICAvLyBFYWNoIHByb3ZpZGVyJ3MgZmx1c2hcdTIxOTJzaHV0ZG93biBpcyBjaGFpbmVkIGluZGVwZW5kZW50bHkgc28gYSBzbG93IGxvZ2dlclxuICAgICAgICAvLyBmbHVzaCBkb2Vzbid0IGRlbGF5IG1ldGVyUHJvdmlkZXIvdHJhY2VyUHJvdmlkZXIgc2h1dGRvd24gKG5vIHdhdGVyZmFsbCkuXG4gICAgICAgIGNvbnN0IGxvZ2dlclByb3ZpZGVyID0gZ2V0TG9nZ2VyUHJvdmlkZXIoKVxuICAgICAgICBjb25zdCB0cmFjZXJQcm92aWRlciA9IGdldFRyYWNlclByb3ZpZGVyKClcblxuICAgICAgICBjb25zdCBjaGFpbnM6IFByb21pc2U8dm9pZD5bXSA9IFttZXRlclByb3ZpZGVyLnNodXRkb3duKCldXG4gICAgICAgIGlmIChsb2dnZXJQcm92aWRlcikge1xuICAgICAgICAgIGNoYWlucy5wdXNoKFxuICAgICAgICAgICAgbG9nZ2VyUHJvdmlkZXIuZm9yY2VGbHVzaCgpLnRoZW4oKCkgPT4gbG9nZ2VyUHJvdmlkZXIuc2h1dGRvd24oKSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFjZXJQcm92aWRlcikge1xuICAgICAgICAgIGNoYWlucy5wdXNoKFxuICAgICAgICAgICAgdHJhY2VyUHJvdmlkZXIuZm9yY2VGbHVzaCgpLnRoZW4oKCkgPT4gdHJhY2VyUHJvdmlkZXIuc2h1dGRvd24oKSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICBQcm9taXNlLmFsbChjaGFpbnMpLFxuICAgICAgICAgIHRlbGVtZXRyeVRpbWVvdXQodGltZW91dE1zLCAnT3BlblRlbGVtZXRyeSBzaHV0ZG93biB0aW1lb3V0JyksXG4gICAgICAgIF0pXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gSWdub3JlIHNodXRkb3duIGVycm9yc1xuICAgICAgfVxuICAgIH1cbiAgICByZWdpc3RlckNsZWFudXAoc2h1dGRvd25UZWxlbWV0cnkpXG5cbiAgICByZXR1cm4gbWV0ZXJQcm92aWRlci5nZXRNZXRlcignY29tLmFudGhyb3BpYy5jbGF1ZGVfY29kZScsIE1BQ1JPLlZFUlNJT04pXG4gIH1cblxuICBjb25zdCBtZXRlclByb3ZpZGVyID0gbmV3IE1ldGVyUHJvdmlkZXIoe1xuICAgIHJlc291cmNlLFxuICAgIHZpZXdzOiBbXSxcbiAgICByZWFkZXJzLFxuICB9KVxuXG4gIC8vIFN0b3JlIHJlZmVyZW5jZSBpbiBzdGF0ZSBmb3IgZmx1c2hpbmdcbiAgc2V0TWV0ZXJQcm92aWRlcihtZXRlclByb3ZpZGVyKVxuXG4gIC8vIEluaXRpYWxpemUgbG9ncyBpZiB0ZWxlbWV0cnkgaXMgZW5hYmxlZFxuICBpZiAodGVsZW1ldHJ5RW5hYmxlZCkge1xuICAgIGNvbnN0IGxvZ0V4cG9ydGVycyA9IGF3YWl0IGdldE90bHBMb2dFeHBvcnRlcnMoKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbM1AgdGVsZW1ldHJ5XSBDcmVhdGVkICR7bG9nRXhwb3J0ZXJzLmxlbmd0aH0gbG9nIGV4cG9ydGVyKHMpYCxcbiAgICApXG5cbiAgICBpZiAobG9nRXhwb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxvZ2dlclByb3ZpZGVyID0gbmV3IExvZ2dlclByb3ZpZGVyKHtcbiAgICAgICAgcmVzb3VyY2UsXG4gICAgICAgIC8vIEFkZCBiYXRjaCBwcm9jZXNzb3JzIGZvciBlYWNoIGV4cG9ydGVyXG4gICAgICAgIHByb2Nlc3NvcnM6IGxvZ0V4cG9ydGVycy5tYXAoXG4gICAgICAgICAgZXhwb3J0ZXIgPT5cbiAgICAgICAgICAgIG5ldyBCYXRjaExvZ1JlY29yZFByb2Nlc3NvcihleHBvcnRlciwge1xuICAgICAgICAgICAgICBzY2hlZHVsZWREZWxheU1pbGxpczogcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuT1RFTF9MT0dTX0VYUE9SVF9JTlRFUlZBTCB8fFxuICAgICAgICAgICAgICAgICAgREVGQVVMVF9MT0dTX0VYUE9SVF9JTlRFUlZBTF9NUy50b1N0cmluZygpLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICB9KVxuXG4gICAgICAvLyBSZWdpc3RlciB0aGUgbG9nZ2VyIHByb3ZpZGVyIGdsb2JhbGx5XG4gICAgICBsb2dzLnNldEdsb2JhbExvZ2dlclByb3ZpZGVyKGxvZ2dlclByb3ZpZGVyKVxuICAgICAgc2V0TG9nZ2VyUHJvdmlkZXIobG9nZ2VyUHJvdmlkZXIpXG5cbiAgICAgIC8vIEluaXRpYWxpemUgZXZlbnQgbG9nZ2VyXG4gICAgICBjb25zdCBldmVudExvZ2dlciA9IGxvZ3MuZ2V0TG9nZ2VyKFxuICAgICAgICAnY29tLmFudGhyb3BpYy5jbGF1ZGVfY29kZS5ldmVudHMnLFxuICAgICAgICBNQUNSTy5WRVJTSU9OLFxuICAgICAgKVxuICAgICAgc2V0RXZlbnRMb2dnZXIoZXZlbnRMb2dnZXIpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1szUCB0ZWxlbWV0cnldIEV2ZW50IGxvZ2dlciBzZXQgc3VjY2Vzc2Z1bGx5JylcblxuICAgICAgLy8gJ2JlZm9yZUV4aXQnIGlzIGVtaXR0ZWQgd2hlbiBOb2RlLmpzIGVtcHRpZXMgaXRzIGV2ZW50IGxvb3AgYW5kIGhhcyBubyBhZGRpdGlvbmFsIHdvcmsgdG8gc2NoZWR1bGUuXG4gICAgICAvLyBVbmxpa2UgJ2V4aXQnLCBpdCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBvcGVyYXRpb25zLCBzbyBpdCB3b3JrcyB3ZWxsIGZvciBsZXR0aW5nXG4gICAgICAvLyBuZXR3b3JrIHJlcXVlc3RzIGNvbXBsZXRlIGJlZm9yZSB0aGUgcHJvY2VzcyBleGl0cyBuYXR1cmFsbHkuXG4gICAgICBwcm9jZXNzLm9uKCdiZWZvcmVFeGl0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBsb2dnZXJQcm92aWRlcj8uZm9yY2VGbHVzaCgpXG4gICAgICAgIC8vIEFsc28gZmx1c2ggdHJhY2VzIC0gdGhleSB1c2UgQmF0Y2hTcGFuUHJvY2Vzc29yIHdoaWNoIG5lZWRzIGV4cGxpY2l0IGZsdXNoXG4gICAgICAgIGNvbnN0IHRyYWNlclByb3ZpZGVyID0gZ2V0VHJhY2VyUHJvdmlkZXIoKVxuICAgICAgICBhd2FpdCB0cmFjZXJQcm92aWRlcj8uZm9yY2VGbHVzaCgpXG4gICAgICB9KVxuXG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICAvLyBGaW5hbCBhdHRlbXB0IHRvIGZsdXNoIGxvZ3MgYW5kIHRyYWNlc1xuICAgICAgICB2b2lkIGxvZ2dlclByb3ZpZGVyPy5mb3JjZUZsdXNoKClcbiAgICAgICAgdm9pZCBnZXRUcmFjZXJQcm92aWRlcigpPy5mb3JjZUZsdXNoKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSB0cmFjaW5nIGlmIGVuaGFuY2VkIHRlbGVtZXRyeSBpcyBlbmFibGVkIChCRVRBKVxuICBpZiAodGVsZW1ldHJ5RW5hYmxlZCAmJiBpc0VuaGFuY2VkVGVsZW1ldHJ5RW5hYmxlZCgpKSB7XG4gICAgY29uc3QgdHJhY2VFeHBvcnRlcnMgPSBhd2FpdCBnZXRPdGxwVHJhY2VFeHBvcnRlcnMoKVxuICAgIGlmICh0cmFjZUV4cG9ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBDcmVhdGUgc3BhbiBwcm9jZXNzb3JzIGZvciBlYWNoIGV4cG9ydGVyXG4gICAgICBjb25zdCBzcGFuUHJvY2Vzc29ycyA9IHRyYWNlRXhwb3J0ZXJzLm1hcChcbiAgICAgICAgZXhwb3J0ZXIgPT5cbiAgICAgICAgICBuZXcgQmF0Y2hTcGFuUHJvY2Vzc29yKGV4cG9ydGVyLCB7XG4gICAgICAgICAgICBzY2hlZHVsZWREZWxheU1pbGxpczogcGFyc2VJbnQoXG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk9URUxfVFJBQ0VTX0VYUE9SVF9JTlRFUlZBTCB8fFxuICAgICAgICAgICAgICAgIERFRkFVTFRfVFJBQ0VTX0VYUE9SVF9JTlRFUlZBTF9NUy50b1N0cmluZygpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KSxcbiAgICAgIClcblxuICAgICAgY29uc3QgdHJhY2VyUHJvdmlkZXIgPSBuZXcgQmFzaWNUcmFjZXJQcm92aWRlcih7XG4gICAgICAgIHJlc291cmNlLFxuICAgICAgICBzcGFuUHJvY2Vzc29ycyxcbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSB0cmFjZXIgcHJvdmlkZXIgZ2xvYmFsbHlcbiAgICAgIHRyYWNlLnNldEdsb2JhbFRyYWNlclByb3ZpZGVyKHRyYWNlclByb3ZpZGVyKVxuICAgICAgc2V0VHJhY2VyUHJvdmlkZXIodHJhY2VyUHJvdmlkZXIpXG4gICAgfVxuICB9XG5cbiAgLy8gU2h1dGRvd24gbWV0cmljcyBhbmQgbG9ncyBvbiBleGl0IChmbHVzaGVzIGFuZCBjbG9zZXMgZXhwb3J0ZXJzKVxuICBjb25zdCBzaHV0ZG93blRlbGVtZXRyeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0TXMgPSBwYXJzZUludChcbiAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX09URUxfU0hVVERPV05fVElNRU9VVF9NUyB8fCAnMjAwMCcsXG4gICAgKVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEVuZCBhbnkgYWN0aXZlIGludGVyYWN0aW9uIHNwYW4gYmVmb3JlIHNodXRkb3duXG4gICAgICBlbmRJbnRlcmFjdGlvblNwYW4oKVxuXG4gICAgICBjb25zdCBzaHV0ZG93blByb21pc2VzID0gW21ldGVyUHJvdmlkZXIuc2h1dGRvd24oKV1cbiAgICAgIGNvbnN0IGxvZ2dlclByb3ZpZGVyID0gZ2V0TG9nZ2VyUHJvdmlkZXIoKVxuICAgICAgaWYgKGxvZ2dlclByb3ZpZGVyKSB7XG4gICAgICAgIHNodXRkb3duUHJvbWlzZXMucHVzaChsb2dnZXJQcm92aWRlci5zaHV0ZG93bigpKVxuICAgICAgfVxuICAgICAgY29uc3QgdHJhY2VyUHJvdmlkZXIgPSBnZXRUcmFjZXJQcm92aWRlcigpXG4gICAgICBpZiAodHJhY2VyUHJvdmlkZXIpIHtcbiAgICAgICAgc2h1dGRvd25Qcm9taXNlcy5wdXNoKHRyYWNlclByb3ZpZGVyLnNodXRkb3duKCkpXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgIFByb21pc2UuYWxsKHNodXRkb3duUHJvbWlzZXMpLFxuICAgICAgICB0ZWxlbWV0cnlUaW1lb3V0KHRpbWVvdXRNcywgJ09wZW5UZWxlbWV0cnkgc2h1dGRvd24gdGltZW91dCcpLFxuICAgICAgXSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgXG5PcGVuVGVsZW1ldHJ5IHRlbGVtZXRyeSBmbHVzaCB0aW1lZCBvdXQgYWZ0ZXIgJHt0aW1lb3V0TXN9bXNcblxuVG8gcmVzb2x2ZSB0aGlzIGlzc3VlLCB5b3UgY2FuOlxuMS4gSW5jcmVhc2UgdGhlIHRpbWVvdXQgYnkgc2V0dGluZyBDTEFVREVfQ09ERV9PVEVMX1NIVVRET1dOX1RJTUVPVVRfTVMgZW52IHZhciAoZS5nLiwgNTAwMCBmb3IgNSBzZWNvbmRzKVxuMi4gQ2hlY2sgaWYgeW91ciBPcGVuVGVsZW1ldHJ5IGJhY2tlbmQgaXMgZXhwZXJpZW5jaW5nIHNjYWxhYmlsaXR5IGlzc3Vlc1xuMy4gRGlzYWJsZSBPcGVuVGVsZW1ldHJ5IGJ5IHVuc2V0dGluZyBDTEFVREVfQ09ERV9FTkFCTEVfVEVMRU1FVFJZIGVudiB2YXJcblxuQ3VycmVudCB0aW1lb3V0OiAke3RpbWVvdXRNc31tc1xuYCxcbiAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgLy8gQWx3YXlzIHJlZ2lzdGVyIHNodXRkb3duIChpbnRlcm5hbCBtZXRyaWNzIGFyZSBhbHdheXMgZW5hYmxlZClcbiAgcmVnaXN0ZXJDbGVhbnVwKHNodXRkb3duVGVsZW1ldHJ5KVxuXG4gIHJldHVybiBtZXRlclByb3ZpZGVyLmdldE1ldGVyKCdjb20uYW50aHJvcGljLmNsYXVkZV9jb2RlJywgTUFDUk8uVkVSU0lPTilcbn1cblxuLyoqXG4gKiBGbHVzaCBhbGwgcGVuZGluZyB0ZWxlbWV0cnkgZGF0YSBpbW1lZGlhdGVseS5cbiAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgbG9nb3V0IG9yIG9yZyBzd2l0Y2hpbmcgdG8gcHJldmVudCBkYXRhIGxlYWthZ2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbHVzaFRlbGVtZXRyeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbWV0ZXJQcm92aWRlciA9IGdldE1ldGVyUHJvdmlkZXIoKVxuICBpZiAoIW1ldGVyUHJvdmlkZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHRpbWVvdXRNcyA9IHBhcnNlSW50KFxuICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX09URUxfRkxVU0hfVElNRU9VVF9NUyB8fCAnNTAwMCcsXG4gIClcblxuICB0cnkge1xuICAgIGNvbnN0IGZsdXNoUHJvbWlzZXMgPSBbbWV0ZXJQcm92aWRlci5mb3JjZUZsdXNoKCldXG4gICAgY29uc3QgbG9nZ2VyUHJvdmlkZXIgPSBnZXRMb2dnZXJQcm92aWRlcigpXG4gICAgaWYgKGxvZ2dlclByb3ZpZGVyKSB7XG4gICAgICBmbHVzaFByb21pc2VzLnB1c2gobG9nZ2VyUHJvdmlkZXIuZm9yY2VGbHVzaCgpKVxuICAgIH1cbiAgICBjb25zdCB0cmFjZXJQcm92aWRlciA9IGdldFRyYWNlclByb3ZpZGVyKClcbiAgICBpZiAodHJhY2VyUHJvdmlkZXIpIHtcbiAgICAgIGZsdXNoUHJvbWlzZXMucHVzaCh0cmFjZXJQcm92aWRlci5mb3JjZUZsdXNoKCkpXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgIFByb21pc2UuYWxsKGZsdXNoUHJvbWlzZXMpLFxuICAgICAgdGVsZW1ldHJ5VGltZW91dCh0aW1lb3V0TXMsICdPcGVuVGVsZW1ldHJ5IGZsdXNoIHRpbWVvdXQnKSxcbiAgICBdKVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKCdUZWxlbWV0cnkgZmx1c2hlZCBzdWNjZXNzZnVsbHknKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFRlbGVtZXRyeVRpbWVvdXRFcnJvcikge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgVGVsZW1ldHJ5IGZsdXNoIHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXRNc31tcy4gU29tZSBtZXRyaWNzIG1heSBub3QgYmUgZXhwb3J0ZWQuYCxcbiAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgVGVsZW1ldHJ5IGZsdXNoIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsIHtcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyBEb24ndCB0aHJvdyAtIGFsbG93IGxvZ291dCB0byBjb250aW51ZSBldmVuIGlmIGZsdXNoIGZhaWxzXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VPdGVsSGVhZGVyc0VudlZhcigpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gIGNvbnN0IGVudkhlYWRlcnMgPSBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfSEVBREVSU1xuICBpZiAoZW52SGVhZGVycykge1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBlbnZIZWFkZXJzLnNwbGl0KCcsJykpIHtcbiAgICAgIGNvbnN0IFtrZXksIC4uLnZhbHVlUGFydHNdID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBpZiAoa2V5ICYmIHZhbHVlUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBoZWFkZXJzW2tleS50cmltKCldID0gdmFsdWVQYXJ0cy5qb2luKCc9JykudHJpbSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBoZWFkZXJzXG59XG5cbi8qKlxuICogR2V0IGNvbmZpZ3VyYXRpb24gZm9yIE9UTFAgZXhwb3J0ZXJzIGluY2x1ZGluZzpcbiAqIC0gSFRUUCBhZ2VudCBvcHRpb25zIChwcm94eSwgbVRMUylcbiAqIC0gRHluYW1pYyBoZWFkZXJzIHZpYSBvdGVsSGVhZGVyc0hlbHBlciBvciBzdGF0aWMgaGVhZGVycyBmcm9tIGVudiB2YXJcbiAqL1xuZnVuY3Rpb24gZ2V0T1RMUEV4cG9ydGVyQ29uZmlnKCkge1xuICBjb25zdCBwcm94eVVybCA9IGdldFByb3h5VXJsKClcbiAgY29uc3QgbXRsc0NvbmZpZyA9IGdldE1UTFNDb25maWcoKVxuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuXG4gIC8vIEJ1aWxkIGJhc2UgY29uZmlnXG4gIGNvbnN0IGNvbmZpZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gIC8vIFBhcnNlIHN0YXRpYyBoZWFkZXJzIGZyb20gZW52IHZhciBvbmNlIChkb2Vzbid0IGNoYW5nZSBhdCBydW50aW1lKVxuICBjb25zdCBzdGF0aWNIZWFkZXJzID0gcGFyc2VPdGVsSGVhZGVyc0VudlZhcigpXG5cbiAgLy8gSWYgb3RlbEhlYWRlcnNIZWxwZXIgaXMgY29uZmlndXJlZCwgdXNlIGFzeW5jIGhlYWRlcnMgZnVuY3Rpb24gZm9yIGR5bmFtaWMgcmVmcmVzaFxuICAvLyBPdGhlcndpc2UganVzdCByZXR1cm4gc3RhdGljIGhlYWRlcnMgaWYgYW55IGV4aXN0XG4gIGlmIChzZXR0aW5ncz8ub3RlbEhlYWRlcnNIZWxwZXIpIHtcbiAgICBjb25maWcuaGVhZGVycyA9IGFzeW5jICgpOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0+IHtcbiAgICAgIGNvbnN0IGR5bmFtaWNIZWFkZXJzID0gZ2V0T3RlbEhlYWRlcnNGcm9tSGVscGVyKClcbiAgICAgIHJldHVybiB7IC4uLnN0YXRpY0hlYWRlcnMsIC4uLmR5bmFtaWNIZWFkZXJzIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoc3RhdGljSGVhZGVycykubGVuZ3RoID4gMCkge1xuICAgIGNvbmZpZy5oZWFkZXJzID0gYXN5bmMgKCk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPT4gc3RhdGljSGVhZGVyc1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIGJ5cGFzcyBwcm94eSBmb3IgT1RFTCBlbmRwb2ludFxuICBjb25zdCBvdGVsRW5kcG9pbnQgPSBwcm9jZXNzLmVudi5PVEVMX0VYUE9SVEVSX09UTFBfRU5EUE9JTlRcbiAgaWYgKCFwcm94eVVybCB8fCAob3RlbEVuZHBvaW50ICYmIHNob3VsZEJ5cGFzc1Byb3h5KG90ZWxFbmRwb2ludCkpKSB7XG4gICAgLy8gTm8gcHJveHkgY29uZmlndXJlZCBvciBPVEVMIGVuZHBvaW50IHNob3VsZCBieXBhc3MgcHJveHlcbiAgICBjb25zdCBjYUNlcnRzID0gZ2V0Q0FDZXJ0aWZpY2F0ZXMoKVxuICAgIGlmIChtdGxzQ29uZmlnIHx8IGNhQ2VydHMpIHtcbiAgICAgIGNvbmZpZy5odHRwQWdlbnRPcHRpb25zID0ge1xuICAgICAgICAuLi5tdGxzQ29uZmlnLFxuICAgICAgICAuLi4oY2FDZXJ0cyAmJiB7IGNhOiBjYUNlcnRzIH0pLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gSHR0cEFnZW50RmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgb3VyIHByb3h5IGFnZW50XG4gIGNvbnN0IGNhQ2VydHMgPSBnZXRDQUNlcnRpZmljYXRlcygpXG4gIGNvbnN0IGFnZW50RmFjdG9yeSA9IChfcHJvdG9jb2w6IHN0cmluZykgPT4ge1xuICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSBwcm94eSBhZ2VudCB3aXRoIG1UTFMgYW5kIENBIGNlcnQgY29uZmlnXG4gICAgY29uc3QgcHJveHlBZ2VudCA9XG4gICAgICBtdGxzQ29uZmlnIHx8IGNhQ2VydHNcbiAgICAgICAgPyBuZXcgSHR0cHNQcm94eUFnZW50KHByb3h5VXJsLCB7XG4gICAgICAgICAgICAuLi4obXRsc0NvbmZpZyAmJiB7XG4gICAgICAgICAgICAgIGNlcnQ6IG10bHNDb25maWcuY2VydCxcbiAgICAgICAgICAgICAga2V5OiBtdGxzQ29uZmlnLmtleSxcbiAgICAgICAgICAgICAgcGFzc3BocmFzZTogbXRsc0NvbmZpZy5wYXNzcGhyYXNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi4oY2FDZXJ0cyAmJiB7IGNhOiBjYUNlcnRzIH0pLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogbmV3IEh0dHBzUHJveHlBZ2VudChwcm94eVVybClcblxuICAgIHJldHVybiBwcm94eUFnZW50XG4gIH1cblxuICBjb25maWcuaHR0cEFnZW50T3B0aW9ucyA9IGFnZW50RmFjdG9yeVxuICByZXR1cm4gY29uZmlnXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBYSxjQUFjO0FBQ2pDLFFBQU0sV0FBVyx1QkFBdUI7QUFHeEMsUUFBTSxTQUFrQyxDQUFDO0FBR3pDLFFBQU0sZ0JBQWdCLHVCQUF1QjtBQUk3QyxNQUFJLFVBQVUsbUJBQW1CO0FBQy9CLFdBQU8sVUFBVSxZQUE2QztBQUM1RCxZQUFNLGlCQUFpQix5QkFBeUI7QUFDaEQsYUFBTyxFQUFFLEdBQUcsZUFBZSxHQUFHLGVBQWU7QUFBQSxJQUMvQztBQUFBLEVBQ0YsV0FBVyxPQUFPLEtBQUssYUFBYSxFQUFFLFNBQVMsR0FBRztBQUNoRCxXQUFPLFVBQVUsWUFBNkM7QUFBQSxFQUNoRTtBQUdBLFFBQU0sZUFBZSxRQUFRLElBQUk7QUFDakMsTUFBSSxDQUFDLFlBQWEsZ0JBQWdCLGtCQUFrQixZQUFZLEdBQUk7QUFFbEUsVUFBTUUsV0FBVSxrQkFBa0I7QUFDbEMsUUFBSSxjQUFjQSxVQUFTO0FBQ3pCLGFBQU8sbUJBQW1CO0FBQUEsUUFDeEIsR0FBRztBQUFBLFFBQ0gsR0FBSUEsWUFBVyxFQUFFLElBQUlBLFNBQVE7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUdBLFFBQU0sVUFBVSxrQkFBa0I7QUFDbEMsUUFBTSxlQUFlLENBQUMsY0FBc0I7QUFFMUMsVUFBTSxhQUNKLGNBQWMsVUFDVixJQUFJLGdCQUFnQixVQUFVO0FBQUEsTUFDNUIsR0FBSSxjQUFjO0FBQUEsUUFDaEIsTUFBTSxXQUFXO0FBQUEsUUFDakIsS0FBSyxXQUFXO0FBQUEsUUFDaEIsWUFBWSxXQUFXO0FBQUEsTUFDekI7QUFBQSxNQUNBLEdBQUksV0FBVyxFQUFFLElBQUksUUFBUTtBQUFBLElBQy9CLENBQUMsSUFDRCxJQUFJLGdCQUFnQixRQUFRO0FBRWxDLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTyxtQkFBbUI7QUFDMUIsU0FBTztBQUNUO0FBeHpCQSxJQW9FTSxvQ0FDQSxpQ0FDQSxtQ0FFQTtBQXhFTjtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTUE7QUFLQTtBQUtBO0FBS0E7QUFLQTtBQUNBO0FBU0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU0scUNBQXFDO0FBQzNDLElBQU0sa0NBQWtDO0FBQ3hDLElBQU0sb0NBQW9DO0FBRTFDLElBQU0sd0JBQU4sY0FBb0MsTUFBTTtBQUFBLElBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIiwgImNyZWF0ZVJlcXVpcmUiLCAicmVxdWlyZSIsICJtZXRlclByb3ZpZGVyIiwgInNodXRkb3duVGVsZW1ldHJ5IiwgImNhQ2VydHMiXQp9Cg==
