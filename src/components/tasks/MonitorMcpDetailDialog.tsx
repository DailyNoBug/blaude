import React from 'react'
import { UnavailablePanel } from '../../compat/UnavailablePanel.js'

export function MonitorMcpDetailDialog(): React.ReactNode {
  return (
    <UnavailablePanel
      title="Monitor details unavailable"
      message="Monitor MCP task details are not implemented in this leaked-src compatibility build."
    />
  )
}
