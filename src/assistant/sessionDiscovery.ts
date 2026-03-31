export type AssistantSession = {
  id: string
  title?: string
}

export async function discoverAssistantSessions(): Promise<AssistantSession[]> {
  return []
}
