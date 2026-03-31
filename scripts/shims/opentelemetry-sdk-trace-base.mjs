import { createRequire } from "module";

const require = createRequire(import.meta.url);
const traceBase = require("@opentelemetry/sdk-trace-base");

export const BasicTracerProvider = traceBase.BasicTracerProvider;
export const BatchSpanProcessor = traceBase.BatchSpanProcessor;
export const ConsoleSpanExporter = traceBase.ConsoleSpanExporter;
export default traceBase;
