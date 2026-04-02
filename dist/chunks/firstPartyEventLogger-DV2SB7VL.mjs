#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getEventSamplingConfig,
  init_firstPartyEventLogger,
  initialize1PEventLogging,
  is1PEventLoggingEnabled,
  logEventTo1P,
  logGrowthBookExperimentTo1P,
  reinitialize1PEventLoggingIfConfigChanged,
  shouldSampleEvent,
  shutdown1PEventLogging
} from "./chunk-KTLUBGNP.mjs";
import "./chunk-O5PZ3G6I.mjs";
init_firstPartyEventLogger();
export {
  getEventSamplingConfig,
  initialize1PEventLogging,
  is1PEventLoggingEnabled,
  logEventTo1P,
  logGrowthBookExperimentTo1P,
  reinitialize1PEventLoggingIfConfigChanged,
  shouldSampleEvent,
  shutdown1PEventLogging
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K
