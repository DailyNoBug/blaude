import { spawnSync } from 'child_process'
import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { jsonStringify } from '../../utils/slowOperations.js'
import { getTerminalPanelSocket } from '../../utils/terminalPanel.js'
import { TERMINAL_CAPTURE_TOOL_NAME } from './prompt.js'

const TMUX_SESSION = 'panel'

const inputSchema = lazySchema(() =>
  z.strictObject({
    lines: z
      .number()
      .int()
      .min(1)
      .max(2_000)
      .default(200)
      .describe('How many trailing terminal lines to capture.'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    available: z.boolean(),
    source: z.enum(['tmux', 'none']),
    lines: z.number().int(),
    content: z.string(),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>
type Output = z.infer<OutputSchema>

function hasPanelSession(): boolean {
  const socket = getTerminalPanelSocket()
  const result = spawnSync(
    'tmux',
    ['-L', socket, 'has-session', '-t', TMUX_SESSION],
    { encoding: 'utf8' },
  )
  return result.status === 0
}

export const TerminalCaptureTool = buildTool({
  name: TERMINAL_CAPTURE_TOOL_NAME,
  maxResultSizeChars: 100_000,
  isConcurrencySafe() {
    return true
  },
  isReadOnly() {
    return true
  },
  userFacingName() {
    return 'Terminal Capture'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  toAutoClassifierInput(input) {
    return `last ${input.lines} terminal lines`
  },
  async description() {
    return 'Capture recent output from the built-in terminal panel.'
  },
  async prompt() {
    return 'Capture recent output from the built-in terminal panel when you need to inspect what a shell session printed.'
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: jsonStringify(output),
    }
  },
  renderToolUseMessage(input) {
    return `Capturing ${input.lines} lines from the terminal panel`
  },
  renderToolResultMessage(output) {
    return output.available
      ? `Captured ${output.lines} lines from terminal panel`
      : 'Terminal panel is not currently available'
  },
  renderToolUseRejectedMessage() {
    return 'Terminal capture request was rejected'
  },
  renderToolUseErrorMessage(error) {
    return `Terminal capture failed: ${error.message}`
  },
  renderToolUseProgressMessage() {
    return null
  },
  async call({ lines }) {
    let tmuxVersion = spawnSync('tmux', ['-V'], { encoding: 'utf8' })
    if (tmuxVersion.status !== 0 || !hasPanelSession()) {
      return {
        data: {
          available: false,
          source: 'none' as const,
          lines: 0,
          content: '',
        },
      }
    }

    const socket = getTerminalPanelSocket()
    const result = spawnSync(
      'tmux',
      ['-L', socket, 'capture-pane', '-p', '-t', TMUX_SESSION, '-S', `-${lines}`],
      { encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 },
    )
    if (result.status !== 0) {
      throw new Error(result.stderr.trim() || 'tmux capture-pane failed')
    }

    const content = result.stdout.replace(/\s+$/, '')
    return {
      data: {
        available: true,
        source: 'tmux' as const,
        lines: content === '' ? 0 : content.split(/\r?\n/).length,
        content,
      },
    }
  },
} satisfies ToolDef<InputSchema, Output>)
