import React from 'react'
import { UnavailablePanel } from '../../compat/UnavailablePanel.js'

export function WorkflowDetailDialog(): React.ReactNode {
  return (
    <UnavailablePanel
      title="Workflow details unavailable"
      message="Workflow task details are not implemented in this leaked-src compatibility build."
    />
  )
}
