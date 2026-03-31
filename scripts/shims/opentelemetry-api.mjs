import { createRequire } from "module";

const require = createRequire(import.meta.url);
const api = require("@opentelemetry/api");

export const DiagConsoleLogger = api.DiagConsoleLogger;
export const DiagLogLevel = api.DiagLogLevel;
export const INVALID_SPANID = api.INVALID_SPANID;
export const INVALID_SPAN_CONTEXT = api.INVALID_SPAN_CONTEXT;
export const INVALID_TRACEID = api.INVALID_TRACEID;
export const ProxyTracer = api.ProxyTracer;
export const ProxyTracerProvider = api.ProxyTracerProvider;
export const ROOT_CONTEXT = api.ROOT_CONTEXT;
export const SamplingDecision = api.SamplingDecision;
export const SpanKind = api.SpanKind;
export const SpanStatusCode = api.SpanStatusCode;
export const TraceFlags = api.TraceFlags;
export const ValueType = api.ValueType;
export const baggageEntryMetadataFromString =
  api.baggageEntryMetadataFromString;
export const context = api.context;
export const createContextKey = api.createContextKey;
export const createNoopMeter = api.createNoopMeter;
export const createTraceState = api.createTraceState;
export const defaultTextMapGetter = api.defaultTextMapGetter;
export const defaultTextMapSetter = api.defaultTextMapSetter;
export const diag = api.diag;
export const isSpanContextValid = api.isSpanContextValid;
export const isValidSpanId = api.isValidSpanId;
export const isValidTraceId = api.isValidTraceId;
export const metrics = api.metrics;
export const propagation = api.propagation;
export const trace = api.trace;
export default api;
