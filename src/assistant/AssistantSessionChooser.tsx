import React from 'react'
import { UnavailablePanel } from '../compat/UnavailablePanel.js'

type Props = {
  sessions: unknown[]
  onSelect(id: string): void
  onCancel(): void
}

export function AssistantSessionChooser(_props: Props): React.ReactNode {
  return (
    <UnavailablePanel
      title="Assistant sessions unavailable"
      message="Assistant session discovery is not implemented in this leaked-src compatibility build."
    />
  )
}
