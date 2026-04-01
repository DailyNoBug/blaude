import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import type { AppState } from '../../state/AppState.js'
import { spawnShellTask } from '../../tasks/LocalShellTask/LocalShellTask.js'
import { exec } from '../../utils/Shell.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { shouldUseSandbox } from '../BashTool/shouldUseSandbox.js'

const MONITOR_TOOL_NAME = 'Monitor'

const inputSchema = lazySchema(() =>
  z.strictObject({
    command: z
      .string()
      .describe('Shell command to run continuously in the background.'),
    description: z
      .string()
      .optional()
      .describe('Short description shown in the task list.'),
    timeout: z
      .number()
      .optional()
      .describe('Optional timeout in milliseconds.'),
    dangerouslyDisableSandbox: z
      .boolean()
      .optional()
      .describe('Disable the sandbox for this command when policy allows it.'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    status: z.literal('monitor_started'),
    taskId: z.string(),
    description: z.string(),
    outputFile: z.string(),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>

type Output = z.infer<OutputSchema>

export const MonitorTool = buildTool({
  name: MONITOR_TOOL_NAME,
  maxResultSizeChars: 100_000,
  searchHint: 'start a background monitor command',
  async description() {
    return 'Run a long-lived shell command in the background and track it as a monitor task.'
  },
  async prompt() {
    return 'Use this tool for long-running watches, log tails, or polling loops that should keep running in the background while the agent continues other work.'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  toAutoClassifierInput(input) {
    return input.command
  },
  async call(input, toolUseContext) {
    const shellCommand = await exec(
      input.command,
      toolUseContext.abortController.signal,
      'bash',
      {
        timeout: input.timeout,
        shouldUseSandbox: shouldUseSandbox(input),
        shouldAutoBackground: false,
      },
    )

    const setAppState =
      toolUseContext.setAppStateForTasks ?? toolUseContext.setAppState
    const getAppState =
      toolUseContext.getAppState ??
      (() => {
        throw new Error('getAppState is not available for Monitor tool')
      })

    const handle = await spawnShellTask(
      {
        command: input.command,
        description: input.description || input.command,
        shellCommand,
        toolUseId: toolUseContext.toolUseId,
        agentId: toolUseContext.agentId,
        kind: 'monitor',
      },
      {
        abortController: toolUseContext.abortController,
        getAppState: getAppState as () => AppState,
        setAppState,
      },
    )

    return {
      data: {
        status: 'monitor_started',
        taskId: handle.taskId,
        description: input.description || input.command,
        outputFile: shellCommand.taskOutput.path,
      },
    }
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: [
        `status: ${output.status}`,
        `task_id: ${output.taskId}`,
        `description: ${output.description}`,
        `output_file: ${output.outputFile}`,
      ].join('\n'),
    }
  },
} satisfies ToolDef<InputSchema, Output>)
