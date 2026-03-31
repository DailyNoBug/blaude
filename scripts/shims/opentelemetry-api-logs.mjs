import { createRequire } from "module";

const require = createRequire(import.meta.url);
const apiLogs = require("@opentelemetry/api-logs");

export const logs = apiLogs.logs;
export const NOOP_LOGGER = apiLogs.NOOP_LOGGER;
export const NoopLogger = apiLogs.NoopLogger;
export const SeverityNumber = apiLogs.SeverityNumber;
export default apiLogs;
