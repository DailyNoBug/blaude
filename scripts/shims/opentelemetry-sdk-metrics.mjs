import { createRequire } from "module";

const require = createRequire(import.meta.url);
const metrics = require("@opentelemetry/sdk-metrics");

export const AggregationTemporality = metrics.AggregationTemporality;
export const ConsoleMetricExporter = metrics.ConsoleMetricExporter;
export const MeterProvider = metrics.MeterProvider;
export const PeriodicExportingMetricReader =
  metrics.PeriodicExportingMetricReader;
export default metrics;
