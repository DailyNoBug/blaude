import React from 'react'
import { Box, Text } from '../ink.js'

type Props = {
  title: string
  message?: string
}

export function UnavailablePanel({
  title,
  message = 'Unavailable in this leaked-src compatibility build.',
}: Props): React.ReactNode {
  return (
    <Box flexDirection="column" borderStyle="round" paddingX={1}>
      <Text bold>{title}</Text>
      <Text dimColor>{message}</Text>
    </Box>
  )
}
