import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { jsonStringify } from '../../utils/slowOperations.js'
import { sleep } from '../../utils/sleep.js'
import {
  DESCRIPTION,
  SLEEP_TOOL_NAME,
  SLEEP_TOOL_PROMPT,
} from './prompt.js'

const MAX_SLEEP_MS = 5 * 60 * 1000

const inputSchema = lazySchema(() =>
  z.strictObject({
    duration_ms: z
      .number()
      .int()
      .min(1)
      .max(MAX_SLEEP_MS)
      .describe('How long to sleep, in milliseconds.'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    slept_ms: z.number().int().describe('How long the tool actually slept.'),
    interrupted: z
      .boolean()
      .describe('Whether the sleep ended early because the turn was aborted.'),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>
type Output = z.infer<OutputSchema>

export const SleepTool = buildTool({
  name: SLEEP_TOOL_NAME,
  maxResultSizeChars: 2_000,
  isConcurrencySafe() {
    return true
  },
  isReadOnly() {
    return true
  },
  userFacingName() {
    return 'Sleep'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  toAutoClassifierInput(input) {
    return `${input.duration_ms}ms`
  },
  async description() {
    return DESCRIPTION
  },
  async prompt() {
    return SLEEP_TOOL_PROMPT
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: jsonStringify(output),
    }
  },
  renderToolUseMessage(input) {
    return `Sleeping for ${input.duration_ms}ms`
  },
  renderToolResultMessage(output) {
    return output.interrupted
      ? `Sleep interrupted after ${output.slept_ms}ms`
      : `Slept for ${output.slept_ms}ms`
  },
  renderToolUseRejectedMessage() {
    return 'Sleep request was rejected'
  },
  renderToolUseErrorMessage(error) {
    return `Sleep failed: ${error.message}`
  },
  renderToolUseProgressMessage() {
    return null
  },
  async call({ duration_ms }, { abortController }) {
    const start = Date.now()
    await sleep(duration_ms, abortController.signal)
    return {
      data: {
        slept_ms: Date.now() - start,
        interrupted: abortController.signal.aborted,
      },
    }
  },
} satisfies ToolDef<InputSchema, Output>)
