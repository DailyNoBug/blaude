import type { AgentId } from '../../types/ids.js'
import type { SetAppState, Task, TaskStateBase } from '../../Task.js'

export type MonitorMcpTaskState = TaskStateBase & {
  type: 'monitor_mcp'
  isBackgrounded?: boolean
  agentId?: AgentId
}

export const MonitorMcpTask: Task = {
  name: 'Monitor MCP',
  type: 'monitor_mcp',
  async kill(_taskId: string, _setAppState: SetAppState): Promise<void> {},
}

export async function killMonitorMcp(
  _taskId: string,
  _setAppState: SetAppState,
): Promise<void> {}

export function killMonitorMcpTasksForAgent(
  _agentId: AgentId,
  _setAppState: SetAppState,
): void {}
