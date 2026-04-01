import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { plural } from '../../utils/stringUtils.js'
import { resolveAttachments, validateAttachmentPaths } from '../BriefTool/attachments.js'
import { SEND_USER_FILE_TOOL_NAME } from './prompt.js'

const inputSchema = lazySchema(() =>
  z.strictObject({
    files: z
      .array(z.string())
      .min(1)
      .describe('One or more file paths to deliver to the user.'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    files: z.array(
      z.object({
        path: z.string(),
        size: z.number(),
        isImage: z.boolean(),
        file_uuid: z.string().optional(),
      }),
    ),
    sentAt: z.string().describe('ISO timestamp for when the files were sent.'),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>
type Output = z.infer<OutputSchema>

export const SendUserFileTool = buildTool({
  name: SEND_USER_FILE_TOOL_NAME,
  maxResultSizeChars: 20_000,
  isConcurrencySafe() {
    return true
  },
  isReadOnly() {
    return true
  },
  userFacingName() {
    return ''
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  toAutoClassifierInput(input) {
    return input.files.join('\n')
  },
  async validateInput({ files }) {
    return validateAttachmentPaths(files)
  },
  async description() {
    return 'Deliver one or more files to the user without replacing your normal response text.'
  },
  async prompt() {
    return 'Send files to the user when they need artifacts, screenshots, logs, or outputs directly attached to the conversation.'
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: `Delivered ${output.files.length} ${plural(output.files.length, 'file')} to the user.`,
    }
  },
  renderToolUseMessage(input) {
    return `Sending ${input.files.length} ${plural(input.files.length, 'file')} to the user`
  },
  renderToolResultMessage(output) {
    return `Delivered ${output.files.length} ${plural(output.files.length, 'file')} to the user`
  },
  renderToolUseRejectedMessage() {
    return 'SendUserFile request was rejected'
  },
  renderToolUseErrorMessage(error) {
    return `SendUserFile failed: ${error.message}`
  },
  renderToolUseProgressMessage() {
    return null
  },
  async call({ files }, context) {
    const appState = context.getAppState()
    const resolved = await resolveAttachments(files, {
      replBridgeEnabled: appState.replBridgeEnabled,
      signal: context.abortController.signal,
    })
    return {
      data: {
        files: resolved,
        sentAt: new Date().toISOString(),
      },
    }
  },
} satisfies ToolDef<InputSchema, Output>)
