import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { VERIFY_PLAN_EXECUTION_TOOL_NAME } from './constants.js'

export const VerifyPlanExecutionTool = buildUnavailableTool(
  VERIFY_PLAN_EXECUTION_TOOL_NAME,
  'Plan verification is unavailable in this leaked-src compatibility build.',
)
