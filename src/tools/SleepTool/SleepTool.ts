import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { SLEEP_TOOL_NAME } from './prompt.js'

export const SleepTool = buildUnavailableTool(
  SLEEP_TOOL_NAME,
  'Sleep tool is unavailable in this leaked-src compatibility build.',
)
