import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../Tool.js'
import { lazySchema } from '../utils/lazySchema.js'

const baseInputSchema = lazySchema(() => z.object({}).passthrough())
const baseOutputSchema = lazySchema(() =>
  z.object({
    unavailable: z.literal(true),
  }),
)

export function buildUnavailableTool(
  name: string,
  description: string,
  message = `${name} is unavailable in this leaked-src compatibility build.`,
) {
  return buildTool({
    name,
    isEnabled() {
      return false
    },
    isConcurrencySafe() {
      return true
    },
    isReadOnly() {
      return true
    },
    get inputSchema() {
      return baseInputSchema()
    },
    get outputSchema() {
      return baseOutputSchema()
    },
    async description() {
      return description
    },
    async prompt() {
      return message
    },
    async call() {
      return {
        data: {
          unavailable: true as const,
        },
      }
    },
    renderToolUseMessage() {
      return message
    },
    renderToolResultMessage() {
      return message
    },
    renderToolUseRejectedMessage() {
      return message
    },
    renderToolUseErrorMessage() {
      return message
    },
    renderToolUseProgressMessage() {
      return null
    },
    mapToolResultToToolResultBlockParam(_output, toolUseID) {
      return {
        tool_use_id: toolUseID,
        type: 'tool_result' as const,
        content: message,
      }
    },
  } satisfies ToolDef<typeof baseInputSchema, { unavailable: true }>)
}
