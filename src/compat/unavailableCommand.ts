import type { Command, LocalCommandCall } from '../types/command.js'

export function createUnavailableCommand(
  name: string,
  description: string,
  message = `${name} is unavailable in this leaked-src compatibility build.`,
): Command {
  const call: LocalCommandCall = async () => ({
    type: 'text',
    value: message,
  })

  return {
    type: 'local',
    name,
    description,
    isEnabled: () => false,
    supportsNonInteractive: true,
    load: () => Promise.resolve({ call }),
  } satisfies Command
}
