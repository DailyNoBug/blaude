import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { TERMINAL_CAPTURE_TOOL_NAME } from './prompt.js'

export const TerminalCaptureTool = buildUnavailableTool(
  TERMINAL_CAPTURE_TOOL_NAME,
  'Terminal capture is unavailable in this leaked-src compatibility build.',
)
