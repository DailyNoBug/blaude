// Minimal constants shim for leaked builds where the WorkflowTool directory is
// absent but callers still statically import its name constant.
export const WORKFLOW_TOOL_NAME = 'Workflow'
