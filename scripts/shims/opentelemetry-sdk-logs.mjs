import { createRequire } from "module";

const require = createRequire(import.meta.url);
const logs = require("@opentelemetry/sdk-logs");

export const BatchLogRecordProcessor = logs.BatchLogRecordProcessor;
export const ConsoleLogRecordExporter = logs.ConsoleLogRecordExporter;
export const InMemoryLogRecordExporter = logs.InMemoryLogRecordExporter;
export const LoggerProvider = logs.LoggerProvider;
export const SimpleLogRecordProcessor = logs.SimpleLogRecordProcessor;
export default logs;
