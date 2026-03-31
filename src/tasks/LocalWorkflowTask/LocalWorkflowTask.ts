import type { SetAppState, Task, TaskStateBase } from '../../Task.js'

export type LocalWorkflowTaskState = TaskStateBase & {
  type: 'local_workflow'
  isBackgrounded?: boolean
  agentIds?: string[]
}

export const LocalWorkflowTask: Task = {
  name: 'Workflow',
  type: 'local_workflow',
  async kill(_taskId: string, _setAppState: SetAppState): Promise<void> {},
}

export async function killWorkflowTask(
  _taskId: string,
  _setAppState: SetAppState,
): Promise<void> {}

export async function skipWorkflowAgent(
  _taskId: string,
  _agentId: string,
  _setAppState: SetAppState,
): Promise<void> {}

export async function retryWorkflowAgent(
  _taskId: string,
  _agentId: string,
  _setAppState: SetAppState,
): Promise<void> {}
