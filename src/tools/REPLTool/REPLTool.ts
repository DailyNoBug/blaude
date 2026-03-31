import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { REPL_TOOL_NAME } from './constants.js'

export const REPLTool = buildUnavailableTool(
  REPL_TOOL_NAME,
  'REPL tool is unavailable in this leaked-src compatibility build.',
)
