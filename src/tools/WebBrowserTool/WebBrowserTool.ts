import { buildUnavailableTool } from '../../compat/unavailableTool.js'

export const WebBrowserTool = buildUnavailableTool(
  'WebBrowser',
  'Embedded web browser is unavailable in this leaked-src compatibility build.',
)
