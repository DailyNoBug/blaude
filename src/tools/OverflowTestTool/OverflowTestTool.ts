import { buildUnavailableTool } from '../../compat/unavailableTool.js'

export const OVERFLOW_TEST_TOOL_NAME = 'OverflowTest'

export const OverflowTestTool = buildUnavailableTool(
  OVERFLOW_TEST_TOOL_NAME,
  'Overflow test tool is unavailable in this leaked-src compatibility build.',
)
