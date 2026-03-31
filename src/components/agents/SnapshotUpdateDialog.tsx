import React from 'react'
import { UnavailablePanel } from '../../compat/UnavailablePanel.js'

type Props = {
  agentType: string
  scope: unknown
  snapshotTimestamp: string
  onComplete(choice: 'merge' | 'keep' | 'replace'): void
  onCancel(): void
}

export function buildMergePrompt(agentType: string, _scope: unknown): string {
  return `Update the ${agentType} agent memory snapshot.`
}

export function SnapshotUpdateDialog(_props: Props): React.ReactNode {
  return (
    <UnavailablePanel
      title="Snapshot update unavailable"
      message="Agent memory snapshot updates are not implemented in this leaked-src compatibility build."
    />
  )
}
