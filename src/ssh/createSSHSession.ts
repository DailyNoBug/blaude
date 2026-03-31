export type SSHSession = {
  remoteCwd: string
  proc: { exitCode: number | null; signalCode: string | null }
  proxy: { stop(): void }
  createManager(): {
    connect(): void
    disconnect(): void
    sendMessage(): Promise<boolean>
    sendInterrupt(): void
    respondToPermissionRequest(): void
  }
  getStderrTail(): string
}

export class SSHSessionError extends Error {}

function createStubSession(cwd: string): SSHSession {
  return {
    remoteCwd: cwd,
    proc: { exitCode: 0, signalCode: null },
    proxy: { stop() {} },
    createManager() {
      return {
        connect() {},
        disconnect() {},
        async sendMessage() {
          return false
        },
        sendInterrupt() {},
        respondToPermissionRequest() {},
      }
    },
    getStderrTail() {
      return ''
    },
  }
}

export async function createSSHSession(input: {
  cwd?: string
}): Promise<SSHSession> {
  return createStubSession(input.cwd ?? process.cwd())
}

export function createLocalSSHSession(input: { cwd?: string }): SSHSession {
  return createStubSession(input.cwd ?? process.cwd())
}
