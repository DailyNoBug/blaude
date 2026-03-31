import os from 'os'
import path from 'path'
import React from 'react'
import { UnavailablePanel } from '../../compat/UnavailablePanel.js'

type Props = {
  defaultDir: string
  onInstalled(dir: string): void
  onCancel(): void
  onError(message: string): void
}

export async function computeDefaultInstallDir(): Promise<string> {
  return path.join(os.homedir(), '.blaude-assistant')
}

export function NewInstallWizard(_props: Props): React.ReactNode {
  return (
    <UnavailablePanel
      title="Assistant install unavailable"
      message="Assistant installation is not implemented in this leaked-src compatibility build."
    />
  )
}
