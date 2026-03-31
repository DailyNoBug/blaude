#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/opentelemetry-core.mjs
var opentelemetry_core_exports = {};
__export(opentelemetry_core_exports, {
  AnchoredClock: () => AnchoredClock,
  BindOnceFuture: () => BindOnceFuture,
  CompositePropagator: () => CompositePropagator,
  ExportResultCode: () => ExportResultCode,
  RPCType: () => RPCType,
  SDK_INFO: () => SDK_INFO,
  TRACE_PARENT_HEADER: () => TRACE_PARENT_HEADER,
  TRACE_STATE_HEADER: () => TRACE_STATE_HEADER,
  TimeoutError: () => TimeoutError,
  TraceState: () => TraceState,
  W3CBaggagePropagator: () => W3CBaggagePropagator,
  W3CTraceContextPropagator: () => W3CTraceContextPropagator,
  addHrTimes: () => addHrTimes,
  callWithTimeout: () => callWithTimeout,
  default: () => opentelemetry_core_default,
  deleteRPCMetadata: () => deleteRPCMetadata,
  diagLogLevelFromString: () => diagLogLevelFromString,
  getBooleanFromEnv: () => getBooleanFromEnv,
  getNumberFromEnv: () => getNumberFromEnv,
  getRPCMetadata: () => getRPCMetadata,
  getStringFromEnv: () => getStringFromEnv,
  getStringListFromEnv: () => getStringListFromEnv,
  getTimeOrigin: () => getTimeOrigin,
  globalErrorHandler: () => globalErrorHandler,
  hrTime: () => hrTime,
  hrTimeDuration: () => hrTimeDuration,
  hrTimeToMicroseconds: () => hrTimeToMicroseconds,
  hrTimeToMilliseconds: () => hrTimeToMilliseconds,
  hrTimeToNanoseconds: () => hrTimeToNanoseconds,
  hrTimeToTimeStamp: () => hrTimeToTimeStamp,
  internal: () => internal,
  isAttributeValue: () => isAttributeValue,
  isTimeInput: () => isTimeInput,
  isTimeInputHrTime: () => isTimeInputHrTime,
  isTracingSuppressed: () => isTracingSuppressed,
  isUrlIgnored: () => isUrlIgnored,
  loggingErrorHandler: () => loggingErrorHandler,
  merge: () => merge,
  millisToHrTime: () => millisToHrTime,
  otperformance: () => otperformance,
  parseKeyPairsIntoRecord: () => parseKeyPairsIntoRecord,
  parseTraceParent: () => parseTraceParent,
  sanitizeAttributes: () => sanitizeAttributes,
  setGlobalErrorHandler: () => setGlobalErrorHandler,
  setRPCMetadata: () => setRPCMetadata,
  suppressTracing: () => suppressTracing,
  timeInputToHrTime: () => timeInputToHrTime,
  unrefTimer: () => unrefTimer,
  unsuppressTracing: () => unsuppressTracing,
  urlMatches: () => urlMatches
});
import { createRequire } from "module";
var require2, core, AnchoredClock, BindOnceFuture, CompositePropagator, ExportResultCode, RPCType, SDK_INFO, TRACE_PARENT_HEADER, TRACE_STATE_HEADER, TimeoutError, TraceState, W3CBaggagePropagator, W3CTraceContextPropagator, addHrTimes, callWithTimeout, deleteRPCMetadata, diagLogLevelFromString, getBooleanFromEnv, getNumberFromEnv, getRPCMetadata, getStringFromEnv, getStringListFromEnv, getTimeOrigin, globalErrorHandler, hrTime, hrTimeDuration, hrTimeToMicroseconds, hrTimeToMilliseconds, hrTimeToNanoseconds, hrTimeToTimeStamp, internal, isAttributeValue, isTimeInput, isTimeInputHrTime, isTracingSuppressed, isUrlIgnored, loggingErrorHandler, merge, millisToHrTime, otperformance, parseKeyPairsIntoRecord, parseTraceParent, sanitizeAttributes, setGlobalErrorHandler, setRPCMetadata, suppressTracing, timeInputToHrTime, unrefTimer, unsuppressTracing, urlMatches, opentelemetry_core_default;
var init_opentelemetry_core = __esm({
  "scripts/shims/opentelemetry-core.mjs"() {
    require2 = createRequire(import.meta.url);
    core = require2("@opentelemetry/core/build/src/index.js");
    AnchoredClock = core.AnchoredClock;
    BindOnceFuture = core.BindOnceFuture;
    CompositePropagator = core.CompositePropagator;
    ExportResultCode = core.ExportResultCode;
    RPCType = core.RPCType;
    SDK_INFO = core.SDK_INFO;
    TRACE_PARENT_HEADER = core.TRACE_PARENT_HEADER;
    TRACE_STATE_HEADER = core.TRACE_STATE_HEADER;
    TimeoutError = core.TimeoutError;
    TraceState = core.TraceState;
    W3CBaggagePropagator = core.W3CBaggagePropagator;
    W3CTraceContextPropagator = core.W3CTraceContextPropagator;
    addHrTimes = core.addHrTimes;
    callWithTimeout = core.callWithTimeout;
    deleteRPCMetadata = core.deleteRPCMetadata;
    diagLogLevelFromString = core.diagLogLevelFromString;
    getBooleanFromEnv = core.getBooleanFromEnv;
    getNumberFromEnv = core.getNumberFromEnv;
    getRPCMetadata = core.getRPCMetadata;
    getStringFromEnv = core.getStringFromEnv;
    getStringListFromEnv = core.getStringListFromEnv;
    getTimeOrigin = core.getTimeOrigin;
    globalErrorHandler = core.globalErrorHandler;
    hrTime = core.hrTime;
    hrTimeDuration = core.hrTimeDuration;
    hrTimeToMicroseconds = core.hrTimeToMicroseconds;
    hrTimeToMilliseconds = core.hrTimeToMilliseconds;
    hrTimeToNanoseconds = core.hrTimeToNanoseconds;
    hrTimeToTimeStamp = core.hrTimeToTimeStamp;
    internal = core.internal;
    isAttributeValue = core.isAttributeValue;
    isTimeInput = core.isTimeInput;
    isTimeInputHrTime = core.isTimeInputHrTime;
    isTracingSuppressed = core.isTracingSuppressed;
    isUrlIgnored = core.isUrlIgnored;
    loggingErrorHandler = core.loggingErrorHandler;
    merge = core.merge;
    millisToHrTime = core.millisToHrTime;
    otperformance = core.otperformance;
    parseKeyPairsIntoRecord = core.parseKeyPairsIntoRecord;
    parseTraceParent = core.parseTraceParent;
    sanitizeAttributes = core.sanitizeAttributes;
    setGlobalErrorHandler = core.setGlobalErrorHandler;
    setRPCMetadata = core.setRPCMetadata;
    suppressTracing = core.suppressTracing;
    timeInputToHrTime = core.timeInputToHrTime;
    unrefTimer = core.unrefTimer;
    unsuppressTracing = core.unsuppressTracing;
    urlMatches = core.urlMatches;
    opentelemetry_core_default = core;
  }
});

export {
  ExportResultCode,
  getNumberFromEnv,
  getStringFromEnv,
  parseKeyPairsIntoRecord,
  opentelemetry_core_exports,
  init_opentelemetry_core
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9vcGVudGVsZW1ldHJ5LWNvcmUubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSBcIm1vZHVsZVwiO1xuXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgY29yZSA9IHJlcXVpcmUoXCJAb3BlbnRlbGVtZXRyeS9jb3JlL2J1aWxkL3NyYy9pbmRleC5qc1wiKTtcblxuZXhwb3J0IGNvbnN0IEFuY2hvcmVkQ2xvY2sgPSBjb3JlLkFuY2hvcmVkQ2xvY2s7XG5leHBvcnQgY29uc3QgQmluZE9uY2VGdXR1cmUgPSBjb3JlLkJpbmRPbmNlRnV0dXJlO1xuZXhwb3J0IGNvbnN0IENvbXBvc2l0ZVByb3BhZ2F0b3IgPSBjb3JlLkNvbXBvc2l0ZVByb3BhZ2F0b3I7XG5leHBvcnQgY29uc3QgRXhwb3J0UmVzdWx0Q29kZSA9IGNvcmUuRXhwb3J0UmVzdWx0Q29kZTtcbmV4cG9ydCBjb25zdCBSUENUeXBlID0gY29yZS5SUENUeXBlO1xuZXhwb3J0IGNvbnN0IFNES19JTkZPID0gY29yZS5TREtfSU5GTztcbmV4cG9ydCBjb25zdCBUUkFDRV9QQVJFTlRfSEVBREVSID0gY29yZS5UUkFDRV9QQVJFTlRfSEVBREVSO1xuZXhwb3J0IGNvbnN0IFRSQUNFX1NUQVRFX0hFQURFUiA9IGNvcmUuVFJBQ0VfU1RBVEVfSEVBREVSO1xuZXhwb3J0IGNvbnN0IFRpbWVvdXRFcnJvciA9IGNvcmUuVGltZW91dEVycm9yO1xuZXhwb3J0IGNvbnN0IFRyYWNlU3RhdGUgPSBjb3JlLlRyYWNlU3RhdGU7XG5leHBvcnQgY29uc3QgVzNDQmFnZ2FnZVByb3BhZ2F0b3IgPSBjb3JlLlczQ0JhZ2dhZ2VQcm9wYWdhdG9yO1xuZXhwb3J0IGNvbnN0IFczQ1RyYWNlQ29udGV4dFByb3BhZ2F0b3IgPSBjb3JlLlczQ1RyYWNlQ29udGV4dFByb3BhZ2F0b3I7XG5leHBvcnQgY29uc3QgYWRkSHJUaW1lcyA9IGNvcmUuYWRkSHJUaW1lcztcbmV4cG9ydCBjb25zdCBjYWxsV2l0aFRpbWVvdXQgPSBjb3JlLmNhbGxXaXRoVGltZW91dDtcbmV4cG9ydCBjb25zdCBkZWxldGVSUENNZXRhZGF0YSA9IGNvcmUuZGVsZXRlUlBDTWV0YWRhdGE7XG5leHBvcnQgY29uc3QgZGlhZ0xvZ0xldmVsRnJvbVN0cmluZyA9IGNvcmUuZGlhZ0xvZ0xldmVsRnJvbVN0cmluZztcbmV4cG9ydCBjb25zdCBnZXRCb29sZWFuRnJvbUVudiA9IGNvcmUuZ2V0Qm9vbGVhbkZyb21FbnY7XG5leHBvcnQgY29uc3QgZ2V0TnVtYmVyRnJvbUVudiA9IGNvcmUuZ2V0TnVtYmVyRnJvbUVudjtcbmV4cG9ydCBjb25zdCBnZXRSUENNZXRhZGF0YSA9IGNvcmUuZ2V0UlBDTWV0YWRhdGE7XG5leHBvcnQgY29uc3QgZ2V0U3RyaW5nRnJvbUVudiA9IGNvcmUuZ2V0U3RyaW5nRnJvbUVudjtcbmV4cG9ydCBjb25zdCBnZXRTdHJpbmdMaXN0RnJvbUVudiA9IGNvcmUuZ2V0U3RyaW5nTGlzdEZyb21FbnY7XG5leHBvcnQgY29uc3QgZ2V0VGltZU9yaWdpbiA9IGNvcmUuZ2V0VGltZU9yaWdpbjtcbmV4cG9ydCBjb25zdCBnbG9iYWxFcnJvckhhbmRsZXIgPSBjb3JlLmdsb2JhbEVycm9ySGFuZGxlcjtcbmV4cG9ydCBjb25zdCBoclRpbWUgPSBjb3JlLmhyVGltZTtcbmV4cG9ydCBjb25zdCBoclRpbWVEdXJhdGlvbiA9IGNvcmUuaHJUaW1lRHVyYXRpb247XG5leHBvcnQgY29uc3QgaHJUaW1lVG9NaWNyb3NlY29uZHMgPSBjb3JlLmhyVGltZVRvTWljcm9zZWNvbmRzO1xuZXhwb3J0IGNvbnN0IGhyVGltZVRvTWlsbGlzZWNvbmRzID0gY29yZS5oclRpbWVUb01pbGxpc2Vjb25kcztcbmV4cG9ydCBjb25zdCBoclRpbWVUb05hbm9zZWNvbmRzID0gY29yZS5oclRpbWVUb05hbm9zZWNvbmRzO1xuZXhwb3J0IGNvbnN0IGhyVGltZVRvVGltZVN0YW1wID0gY29yZS5oclRpbWVUb1RpbWVTdGFtcDtcbmV4cG9ydCBjb25zdCBpbnRlcm5hbCA9IGNvcmUuaW50ZXJuYWw7XG5leHBvcnQgY29uc3QgaXNBdHRyaWJ1dGVWYWx1ZSA9IGNvcmUuaXNBdHRyaWJ1dGVWYWx1ZTtcbmV4cG9ydCBjb25zdCBpc1RpbWVJbnB1dCA9IGNvcmUuaXNUaW1lSW5wdXQ7XG5leHBvcnQgY29uc3QgaXNUaW1lSW5wdXRIclRpbWUgPSBjb3JlLmlzVGltZUlucHV0SHJUaW1lO1xuZXhwb3J0IGNvbnN0IGlzVHJhY2luZ1N1cHByZXNzZWQgPSBjb3JlLmlzVHJhY2luZ1N1cHByZXNzZWQ7XG5leHBvcnQgY29uc3QgaXNVcmxJZ25vcmVkID0gY29yZS5pc1VybElnbm9yZWQ7XG5leHBvcnQgY29uc3QgbG9nZ2luZ0Vycm9ySGFuZGxlciA9IGNvcmUubG9nZ2luZ0Vycm9ySGFuZGxlcjtcbmV4cG9ydCBjb25zdCBtZXJnZSA9IGNvcmUubWVyZ2U7XG5leHBvcnQgY29uc3QgbWlsbGlzVG9IclRpbWUgPSBjb3JlLm1pbGxpc1RvSHJUaW1lO1xuZXhwb3J0IGNvbnN0IG90cGVyZm9ybWFuY2UgPSBjb3JlLm90cGVyZm9ybWFuY2U7XG5leHBvcnQgY29uc3QgcGFyc2VLZXlQYWlyc0ludG9SZWNvcmQgPSBjb3JlLnBhcnNlS2V5UGFpcnNJbnRvUmVjb3JkO1xuZXhwb3J0IGNvbnN0IHBhcnNlVHJhY2VQYXJlbnQgPSBjb3JlLnBhcnNlVHJhY2VQYXJlbnQ7XG5leHBvcnQgY29uc3Qgc2FuaXRpemVBdHRyaWJ1dGVzID0gY29yZS5zYW5pdGl6ZUF0dHJpYnV0ZXM7XG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsRXJyb3JIYW5kbGVyID0gY29yZS5zZXRHbG9iYWxFcnJvckhhbmRsZXI7XG5leHBvcnQgY29uc3Qgc2V0UlBDTWV0YWRhdGEgPSBjb3JlLnNldFJQQ01ldGFkYXRhO1xuZXhwb3J0IGNvbnN0IHN1cHByZXNzVHJhY2luZyA9IGNvcmUuc3VwcHJlc3NUcmFjaW5nO1xuZXhwb3J0IGNvbnN0IHRpbWVJbnB1dFRvSHJUaW1lID0gY29yZS50aW1lSW5wdXRUb0hyVGltZTtcbmV4cG9ydCBjb25zdCB1bnJlZlRpbWVyID0gY29yZS51bnJlZlRpbWVyO1xuZXhwb3J0IGNvbnN0IHVuc3VwcHJlc3NUcmFjaW5nID0gY29yZS51bnN1cHByZXNzVHJhY2luZztcbmV4cG9ydCBjb25zdCB1cmxNYXRjaGVzID0gY29yZS51cmxNYXRjaGVzO1xuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLHFCQUFxQjtBQUE5QixJQUVNQSxVQUNBLE1BRU8sZUFDQSxnQkFDQSxxQkFDQSxrQkFDQSxTQUNBLFVBQ0EscUJBQ0Esb0JBQ0EsY0FDQSxZQUNBLHNCQUNBLDJCQUNBLFlBQ0EsaUJBQ0EsbUJBQ0Esd0JBQ0EsbUJBQ0Esa0JBQ0EsZ0JBQ0Esa0JBQ0Esc0JBQ0EsZUFDQSxvQkFDQSxRQUNBLGdCQUNBLHNCQUNBLHNCQUNBLHFCQUNBLG1CQUNBLFVBQ0Esa0JBQ0EsYUFDQSxtQkFDQSxxQkFDQSxjQUNBLHFCQUNBLE9BQ0EsZ0JBQ0EsZUFDQSx5QkFDQSxrQkFDQSxvQkFDQSx1QkFDQSxnQkFDQSxpQkFDQSxtQkFDQSxZQUNBLG1CQUNBLFlBQ047QUF0RFA7QUFBQTtBQUVBLElBQU1BLFdBQVUsY0FBYyxZQUFZLEdBQUc7QUFDN0MsSUFBTSxPQUFPQSxTQUFRLHdDQUF3QztBQUV0RCxJQUFNLGdCQUFnQixLQUFLO0FBQzNCLElBQU0saUJBQWlCLEtBQUs7QUFDNUIsSUFBTSxzQkFBc0IsS0FBSztBQUNqQyxJQUFNLG1CQUFtQixLQUFLO0FBQzlCLElBQU0sVUFBVSxLQUFLO0FBQ3JCLElBQU0sV0FBVyxLQUFLO0FBQ3RCLElBQU0sc0JBQXNCLEtBQUs7QUFDakMsSUFBTSxxQkFBcUIsS0FBSztBQUNoQyxJQUFNLGVBQWUsS0FBSztBQUMxQixJQUFNLGFBQWEsS0FBSztBQUN4QixJQUFNLHVCQUF1QixLQUFLO0FBQ2xDLElBQU0sNEJBQTRCLEtBQUs7QUFDdkMsSUFBTSxhQUFhLEtBQUs7QUFDeEIsSUFBTSxrQkFBa0IsS0FBSztBQUM3QixJQUFNLG9CQUFvQixLQUFLO0FBQy9CLElBQU0seUJBQXlCLEtBQUs7QUFDcEMsSUFBTSxvQkFBb0IsS0FBSztBQUMvQixJQUFNLG1CQUFtQixLQUFLO0FBQzlCLElBQU0saUJBQWlCLEtBQUs7QUFDNUIsSUFBTSxtQkFBbUIsS0FBSztBQUM5QixJQUFNLHVCQUF1QixLQUFLO0FBQ2xDLElBQU0sZ0JBQWdCLEtBQUs7QUFDM0IsSUFBTSxxQkFBcUIsS0FBSztBQUNoQyxJQUFNLFNBQVMsS0FBSztBQUNwQixJQUFNLGlCQUFpQixLQUFLO0FBQzVCLElBQU0sdUJBQXVCLEtBQUs7QUFDbEMsSUFBTSx1QkFBdUIsS0FBSztBQUNsQyxJQUFNLHNCQUFzQixLQUFLO0FBQ2pDLElBQU0sb0JBQW9CLEtBQUs7QUFDL0IsSUFBTSxXQUFXLEtBQUs7QUFDdEIsSUFBTSxtQkFBbUIsS0FBSztBQUM5QixJQUFNLGNBQWMsS0FBSztBQUN6QixJQUFNLG9CQUFvQixLQUFLO0FBQy9CLElBQU0sc0JBQXNCLEtBQUs7QUFDakMsSUFBTSxlQUFlLEtBQUs7QUFDMUIsSUFBTSxzQkFBc0IsS0FBSztBQUNqQyxJQUFNLFFBQVEsS0FBSztBQUNuQixJQUFNLGlCQUFpQixLQUFLO0FBQzVCLElBQU0sZ0JBQWdCLEtBQUs7QUFDM0IsSUFBTSwwQkFBMEIsS0FBSztBQUNyQyxJQUFNLG1CQUFtQixLQUFLO0FBQzlCLElBQU0scUJBQXFCLEtBQUs7QUFDaEMsSUFBTSx3QkFBd0IsS0FBSztBQUNuQyxJQUFNLGlCQUFpQixLQUFLO0FBQzVCLElBQU0sa0JBQWtCLEtBQUs7QUFDN0IsSUFBTSxvQkFBb0IsS0FBSztBQUMvQixJQUFNLGFBQWEsS0FBSztBQUN4QixJQUFNLG9CQUFvQixLQUFLO0FBQy9CLElBQU0sYUFBYSxLQUFLO0FBQy9CLElBQU8sNkJBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIl0KfQo=
