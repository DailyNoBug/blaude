import type { QuerySource } from '../../constants/querySource.js'
import type { ToolUseContext } from '../../Tool.js'
import type { AssistantMessage, Message } from '../../types/message.js'

export function isReactiveCompactEnabled(): boolean {
  return false
}

export function isWithheldPromptTooLong(_message: AssistantMessage): boolean {
  return false
}

export function isWithheldMediaSizeError(_message: AssistantMessage): boolean {
  return false
}

export async function tryReactiveCompact(_input: {
  hasAttempted: boolean
  querySource: QuerySource
  aborted: boolean
  messages: Message[]
  cacheSafeParams: {
    systemPrompt: unknown
    userContext: unknown
    systemContext: unknown
    toolUseContext: ToolUseContext
    forkContextMessages: Message[]
  }
}): Promise<null> {
  return null
}
