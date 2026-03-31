export type CachedMCConfig = {
  enabled: boolean
  supportedModels: string[]
  systemPromptSuggestSummaries: boolean
  keepRecent: number
  gapThresholdMinutes: number
  triggerThreshold: number
}

export function getCachedMCConfig(): CachedMCConfig {
  return {
    enabled: false,
    supportedModels: [],
    systemPromptSuggestSummaries: false,
    keepRecent: 2,
    gapThresholdMinutes: 30,
    triggerThreshold: 10,
  }
}
