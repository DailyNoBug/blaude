import type { Message } from '../../types/message.js'
import { isSnipBoundaryMessage as isSnipBoundaryMessageImpl } from './snipCompact.js'

export function projectSnippedView<T extends Message>(messages: T[]): T[] {
  return messages
}

export function isSnipBoundaryMessage(message: Message): boolean {
  return isSnipBoundaryMessageImpl(message)
}
