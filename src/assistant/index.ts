type AssistantTeamContext = {
  mode: 'assistant-compat'
  members: []
}

let assistantForced = false

function hasAssistantFlag(): boolean {
  return process.argv.includes('--assistant')
}

export function isAssistantMode(): boolean {
  return assistantForced || hasAssistantFlag()
}

export function markAssistantForced(): void {
  assistantForced = true
}

export function isAssistantForced(): boolean {
  return assistantForced
}

export async function initializeAssistantTeam(): Promise<AssistantTeamContext> {
  return {
    mode: 'assistant-compat',
    members: [],
  }
}

export function getAssistantSystemPromptAddendum(): string {
  return 'Assistant mode compatibility layer is active.'
}

export function getAssistantActivationPath(): string {
  return assistantForced ? 'forced' : 'cli'
}
