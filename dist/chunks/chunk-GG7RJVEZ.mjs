#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/opentelemetry-api.mjs
var opentelemetry_api_exports = {};
__export(opentelemetry_api_exports, {
  DiagConsoleLogger: () => DiagConsoleLogger,
  DiagLogLevel: () => DiagLogLevel,
  INVALID_SPANID: () => INVALID_SPANID,
  INVALID_SPAN_CONTEXT: () => INVALID_SPAN_CONTEXT,
  INVALID_TRACEID: () => INVALID_TRACEID,
  ProxyTracer: () => ProxyTracer,
  ProxyTracerProvider: () => ProxyTracerProvider,
  ROOT_CONTEXT: () => ROOT_CONTEXT,
  SamplingDecision: () => SamplingDecision,
  SpanKind: () => SpanKind,
  SpanStatusCode: () => SpanStatusCode,
  TraceFlags: () => TraceFlags,
  ValueType: () => ValueType,
  baggageEntryMetadataFromString: () => baggageEntryMetadataFromString,
  context: () => context,
  createContextKey: () => createContextKey,
  createNoopMeter: () => createNoopMeter,
  createTraceState: () => createTraceState,
  default: () => opentelemetry_api_default,
  defaultTextMapGetter: () => defaultTextMapGetter,
  defaultTextMapSetter: () => defaultTextMapSetter,
  diag: () => diag,
  isSpanContextValid: () => isSpanContextValid,
  isValidSpanId: () => isValidSpanId,
  isValidTraceId: () => isValidTraceId,
  metrics: () => metrics,
  propagation: () => propagation,
  trace: () => trace
});
import { createRequire } from "module";
var require2, api, DiagConsoleLogger, DiagLogLevel, INVALID_SPANID, INVALID_SPAN_CONTEXT, INVALID_TRACEID, ProxyTracer, ProxyTracerProvider, ROOT_CONTEXT, SamplingDecision, SpanKind, SpanStatusCode, TraceFlags, ValueType, baggageEntryMetadataFromString, context, createContextKey, createNoopMeter, createTraceState, defaultTextMapGetter, defaultTextMapSetter, diag, isSpanContextValid, isValidSpanId, isValidTraceId, metrics, propagation, trace, opentelemetry_api_default;
var init_opentelemetry_api = __esm({
  "scripts/shims/opentelemetry-api.mjs"() {
    require2 = createRequire(import.meta.url);
    api = require2("@opentelemetry/api");
    DiagConsoleLogger = api.DiagConsoleLogger;
    DiagLogLevel = api.DiagLogLevel;
    INVALID_SPANID = api.INVALID_SPANID;
    INVALID_SPAN_CONTEXT = api.INVALID_SPAN_CONTEXT;
    INVALID_TRACEID = api.INVALID_TRACEID;
    ProxyTracer = api.ProxyTracer;
    ProxyTracerProvider = api.ProxyTracerProvider;
    ROOT_CONTEXT = api.ROOT_CONTEXT;
    SamplingDecision = api.SamplingDecision;
    SpanKind = api.SpanKind;
    SpanStatusCode = api.SpanStatusCode;
    TraceFlags = api.TraceFlags;
    ValueType = api.ValueType;
    baggageEntryMetadataFromString = api.baggageEntryMetadataFromString;
    context = api.context;
    createContextKey = api.createContextKey;
    createNoopMeter = api.createNoopMeter;
    createTraceState = api.createTraceState;
    defaultTextMapGetter = api.defaultTextMapGetter;
    defaultTextMapSetter = api.defaultTextMapSetter;
    diag = api.diag;
    isSpanContextValid = api.isSpanContextValid;
    isValidSpanId = api.isValidSpanId;
    isValidTraceId = api.isValidTraceId;
    metrics = api.metrics;
    propagation = api.propagation;
    trace = api.trace;
    opentelemetry_api_default = api;
  }
});

export {
  DiagLogLevel,
  context,
  diag,
  trace,
  opentelemetry_api_exports,
  init_opentelemetry_api
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9vcGVudGVsZW1ldHJ5LWFwaS5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tIFwibW9kdWxlXCI7XG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBhcGkgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvYXBpXCIpO1xuXG5leHBvcnQgY29uc3QgRGlhZ0NvbnNvbGVMb2dnZXIgPSBhcGkuRGlhZ0NvbnNvbGVMb2dnZXI7XG5leHBvcnQgY29uc3QgRGlhZ0xvZ0xldmVsID0gYXBpLkRpYWdMb2dMZXZlbDtcbmV4cG9ydCBjb25zdCBJTlZBTElEX1NQQU5JRCA9IGFwaS5JTlZBTElEX1NQQU5JRDtcbmV4cG9ydCBjb25zdCBJTlZBTElEX1NQQU5fQ09OVEVYVCA9IGFwaS5JTlZBTElEX1NQQU5fQ09OVEVYVDtcbmV4cG9ydCBjb25zdCBJTlZBTElEX1RSQUNFSUQgPSBhcGkuSU5WQUxJRF9UUkFDRUlEO1xuZXhwb3J0IGNvbnN0IFByb3h5VHJhY2VyID0gYXBpLlByb3h5VHJhY2VyO1xuZXhwb3J0IGNvbnN0IFByb3h5VHJhY2VyUHJvdmlkZXIgPSBhcGkuUHJveHlUcmFjZXJQcm92aWRlcjtcbmV4cG9ydCBjb25zdCBST09UX0NPTlRFWFQgPSBhcGkuUk9PVF9DT05URVhUO1xuZXhwb3J0IGNvbnN0IFNhbXBsaW5nRGVjaXNpb24gPSBhcGkuU2FtcGxpbmdEZWNpc2lvbjtcbmV4cG9ydCBjb25zdCBTcGFuS2luZCA9IGFwaS5TcGFuS2luZDtcbmV4cG9ydCBjb25zdCBTcGFuU3RhdHVzQ29kZSA9IGFwaS5TcGFuU3RhdHVzQ29kZTtcbmV4cG9ydCBjb25zdCBUcmFjZUZsYWdzID0gYXBpLlRyYWNlRmxhZ3M7XG5leHBvcnQgY29uc3QgVmFsdWVUeXBlID0gYXBpLlZhbHVlVHlwZTtcbmV4cG9ydCBjb25zdCBiYWdnYWdlRW50cnlNZXRhZGF0YUZyb21TdHJpbmcgPVxuICBhcGkuYmFnZ2FnZUVudHJ5TWV0YWRhdGFGcm9tU3RyaW5nO1xuZXhwb3J0IGNvbnN0IGNvbnRleHQgPSBhcGkuY29udGV4dDtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZXh0S2V5ID0gYXBpLmNyZWF0ZUNvbnRleHRLZXk7XG5leHBvcnQgY29uc3QgY3JlYXRlTm9vcE1ldGVyID0gYXBpLmNyZWF0ZU5vb3BNZXRlcjtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjZVN0YXRlID0gYXBpLmNyZWF0ZVRyYWNlU3RhdGU7XG5leHBvcnQgY29uc3QgZGVmYXVsdFRleHRNYXBHZXR0ZXIgPSBhcGkuZGVmYXVsdFRleHRNYXBHZXR0ZXI7XG5leHBvcnQgY29uc3QgZGVmYXVsdFRleHRNYXBTZXR0ZXIgPSBhcGkuZGVmYXVsdFRleHRNYXBTZXR0ZXI7XG5leHBvcnQgY29uc3QgZGlhZyA9IGFwaS5kaWFnO1xuZXhwb3J0IGNvbnN0IGlzU3BhbkNvbnRleHRWYWxpZCA9IGFwaS5pc1NwYW5Db250ZXh0VmFsaWQ7XG5leHBvcnQgY29uc3QgaXNWYWxpZFNwYW5JZCA9IGFwaS5pc1ZhbGlkU3BhbklkO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRUcmFjZUlkID0gYXBpLmlzVmFsaWRUcmFjZUlkO1xuZXhwb3J0IGNvbnN0IG1ldHJpY3MgPSBhcGkubWV0cmljcztcbmV4cG9ydCBjb25zdCBwcm9wYWdhdGlvbiA9IGFwaS5wcm9wYWdhdGlvbjtcbmV4cG9ydCBjb25zdCB0cmFjZSA9IGFwaS50cmFjZTtcbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxxQkFBcUI7QUFBOUIsSUFFTUEsVUFDQSxLQUVPLG1CQUNBLGNBQ0EsZ0JBQ0Esc0JBQ0EsaUJBQ0EsYUFDQSxxQkFDQSxjQUNBLGtCQUNBLFVBQ0EsZ0JBQ0EsWUFDQSxXQUNBLGdDQUVBLFNBQ0Esa0JBQ0EsaUJBQ0Esa0JBQ0Esc0JBQ0Esc0JBQ0EsTUFDQSxvQkFDQSxlQUNBLGdCQUNBLFNBQ0EsYUFDQSxPQUNOO0FBakNQO0FBQUE7QUFFQSxJQUFNQSxXQUFVLGNBQWMsWUFBWSxHQUFHO0FBQzdDLElBQU0sTUFBTUEsU0FBUSxvQkFBb0I7QUFFakMsSUFBTSxvQkFBb0IsSUFBSTtBQUM5QixJQUFNLGVBQWUsSUFBSTtBQUN6QixJQUFNLGlCQUFpQixJQUFJO0FBQzNCLElBQU0sdUJBQXVCLElBQUk7QUFDakMsSUFBTSxrQkFBa0IsSUFBSTtBQUM1QixJQUFNLGNBQWMsSUFBSTtBQUN4QixJQUFNLHNCQUFzQixJQUFJO0FBQ2hDLElBQU0sZUFBZSxJQUFJO0FBQ3pCLElBQU0sbUJBQW1CLElBQUk7QUFDN0IsSUFBTSxXQUFXLElBQUk7QUFDckIsSUFBTSxpQkFBaUIsSUFBSTtBQUMzQixJQUFNLGFBQWEsSUFBSTtBQUN2QixJQUFNLFlBQVksSUFBSTtBQUN0QixJQUFNLGlDQUNYLElBQUk7QUFDQyxJQUFNLFVBQVUsSUFBSTtBQUNwQixJQUFNLG1CQUFtQixJQUFJO0FBQzdCLElBQU0sa0JBQWtCLElBQUk7QUFDNUIsSUFBTSxtQkFBbUIsSUFBSTtBQUM3QixJQUFNLHVCQUF1QixJQUFJO0FBQ2pDLElBQU0sdUJBQXVCLElBQUk7QUFDakMsSUFBTSxPQUFPLElBQUk7QUFDakIsSUFBTSxxQkFBcUIsSUFBSTtBQUMvQixJQUFNLGdCQUFnQixJQUFJO0FBQzFCLElBQU0saUJBQWlCLElBQUk7QUFDM0IsSUFBTSxVQUFVLElBQUk7QUFDcEIsSUFBTSxjQUFjLElBQUk7QUFDeEIsSUFBTSxRQUFRLElBQUk7QUFDekIsSUFBTyw0QkFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiXQp9Cg==
