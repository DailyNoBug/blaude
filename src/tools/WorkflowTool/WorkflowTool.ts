import { buildUnavailableTool } from '../../compat/unavailableTool.js'
import { WORKFLOW_TOOL_NAME } from './constants.js'

export const WorkflowTool = buildUnavailableTool(
  WORKFLOW_TOOL_NAME,
  'Workflow execution is unavailable in this leaked-src compatibility build.',
)
