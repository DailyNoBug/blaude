import React from 'react'
import { UnavailablePanel } from '../../compat/UnavailablePanel.js'

export function WebBrowserPanel(): React.ReactNode {
  return (
    <UnavailablePanel
      title="Web browser unavailable"
      message="The embedded browser panel is not implemented in this leaked-src compatibility build."
    />
  )
}
