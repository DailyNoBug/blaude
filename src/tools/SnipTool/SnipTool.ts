import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { SNIP_TOOL_NAME } from './prompt.js'

export const SnipTool = buildUnavailableTool(
  SNIP_TOOL_NAME,
  'Snip tool is unavailable in this leaked-src compatibility build.',
)
