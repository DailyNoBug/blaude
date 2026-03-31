import type { TextBlockParam } from '@anthropic-ai/sdk/resources/index.mjs'
import React from 'react'
import { Box, Text } from '../../ink.js'

type Props = {
  addMargin: boolean
  param: TextBlockParam
}

export function UserForkBoilerplateMessage({
  addMargin,
  param,
}: Props): React.ReactNode {
  return (
    <Box marginTop={addMargin ? 1 : 0} flexDirection="column">
      <Text color="info">Forked agent context</Text>
      <Text dimColor>{param.text}</Text>
    </Box>
  )
}
