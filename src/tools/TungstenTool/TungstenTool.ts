import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'

const inputSchema = lazySchema(() => z.object({}).passthrough())
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    unavailable: z.literal(true),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>

export const TUNGSTEN_TOOL_NAME = 'Tungsten'

export const TungstenTool = buildTool({
  name: TUNGSTEN_TOOL_NAME,
  isEnabled() {
    return false
  },
  isConcurrencySafe() {
    return true
  },
  isReadOnly() {
    return true
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  async description() {
    return 'Unavailable in the leaked src compatibility runtime.'
  },
  async prompt() {
    return 'This tool is unavailable in the leaked src compatibility runtime.'
  },
  async call() {
    return {
      data: {
        unavailable: true,
      },
    }
  },
  renderToolUseMessage() {
    return 'Tungsten unavailable'
  },
  renderToolResultMessage() {
    return 'Tungsten unavailable'
  },
  renderToolUseRejectedMessage() {
    return 'Tungsten unavailable'
  },
  renderToolUseErrorMessage() {
    return 'Tungsten unavailable'
  },
  renderToolUseProgressMessage() {
    return null
  },
  mapToolResultToToolResultBlockParam(_output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: 'Tungsten unavailable',
    }
  },
} satisfies ToolDef<InputSchema, { unavailable: true }>)

export function clearSessionsWithTungstenUsage(): void {}

export function resetInitializationState(): void {}
