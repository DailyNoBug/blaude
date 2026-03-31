import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { SEND_USER_FILE_TOOL_NAME } from './prompt.js'

export const SendUserFileTool = buildUnavailableTool(
  SEND_USER_FILE_TOOL_NAME,
  'SendUserFile is unavailable in this leaked-src compatibility build.',
)
