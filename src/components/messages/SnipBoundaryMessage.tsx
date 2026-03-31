import React from 'react'
import { Box, Text } from '../../ink.js'

type Props = {
  message: unknown
}

export function SnipBoundaryMessage(_props: Props): React.ReactNode {
  return (
    <Box>
      <Text dimColor>Older context was snipped from the active model window.</Text>
    </Box>
  )
}
