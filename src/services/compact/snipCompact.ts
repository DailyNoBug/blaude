import type { Message } from '../../types/message.js'

export const SNIP_NUDGE_TEXT =
  'Context is getting long. Use the Snip tool if you want to trim older details.'

export function isSnipRuntimeEnabled(): boolean {
  return false
}

export function isSnipMarkerMessage(_message: Message): boolean {
  return false
}

export function shouldNudgeForSnips(_messages: Message[]): boolean {
  return false
}

export function snipCompactIfNeeded(
  messages: Message[],
  _options?: { force?: boolean },
): {
  messages: Message[]
  tokensFreed: number
  boundaryMessage?: Message
  executed: boolean
} {
  return {
    messages,
    tokensFreed: 0,
    executed: false,
  }
}
