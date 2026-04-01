import React from 'react'
import { Box, Text } from '../../ink.js'

const WELCOME_V2_WIDTH = 58
const WELCOME_MESSAGE = 'Welcome to Blaude'

type ArtSegment = {
  text: string
  color?: string
  dimColor?: boolean
}

type ArtLine = readonly ArtSegment[]

const GUIDE_DOG_ART: readonly ArtLine[] = [
  [{ text: '                  /v---------------v\\', color: 'clawd_body' }],
  [{ text: '                 V    o       o    V', color: 'clawd_body' }],
  [{ text: '                  \\      ^      /', color: 'clawd_body' }],
  [
    { text: '                   |    ', color: 'clawd_body' },
    { text: '[ ]', color: 'permission' },
    { text: '    |', color: 'clawd_body' },
  ],
  [{ text: '                  /|___________|\\', color: 'clawd_body' }],
  [{ text: '                 /_/           \\_\\', color: 'clawd_body' }],
]

function renderArtLine(line: ArtLine, lineIndex: number): React.ReactNode {
  return (
    <Text key={lineIndex}>
      {line.map((segment, segmentIndex) => (
        <Text
          key={`${lineIndex}-${segmentIndex}`}
          color={segment.color}
          dimColor={segment.dimColor}
        >
          {segment.text}
        </Text>
      ))}
    </Text>
  )
}

export function WelcomeV2(): React.ReactNode {
  return (
    <Box width={WELCOME_V2_WIDTH} flexDirection="column">
      <Text>
        <Text color="claude">{WELCOME_MESSAGE} </Text>
        <Text dimColor={true}>v{MACRO.VERSION} </Text>
      </Text>
      <Text>{'…'.repeat(WELCOME_V2_WIDTH)}</Text>
      <Text>{' '}</Text>
      {GUIDE_DOG_ART.map(renderArtLine)}
      <Text>{' '}</Text>
    </Box>
  )
}
