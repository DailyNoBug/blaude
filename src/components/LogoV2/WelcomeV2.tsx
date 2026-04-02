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

const HAJIMI_ART: readonly ArtLine[] = [
  [{ text: '                  .-^^^^^^^^-._', color: 'claude' }],
  [{ text: '               .-"   .----.    "-.', color: 'claude' }],
  [{ text: "             .'    .'      `.      `.", color: 'claude' }],
  [{ text: "            /    .'  .--.    `.      \\\\", color: 'claude' }],
  [
    { text: '           /    /   / ', color: 'claude' },
    { text: 'OO', color: 'permission' },
    { text: ' \\     \\      \\\\', color: 'claude' },
  ],
  [{ text: '          ;    ;    \\____/      ;     ;', color: 'claude' }],
  [{ text: "          |    |       /\\       |     |", color: 'claude' }],
  [{ text: "          |    |     .'  `.     |     |", color: 'clawd_body' }],
  [{ text: "          ;    ;   .' ____ `.   ;     ;", color: 'clawd_body' }],
  [{ text: "           \\    \\ /  / __ \\  \\ /     /", color: 'clawd_body' }],
  [{ text: "            `.   |  | /  \\ |  |   .'", color: 'clawd_body' }],
  [{ text: "              `-.\\  \\____/  /.-' ", color: 'clawd_body' }],
  [{ text: "                  `-..__..-'", color: 'claude' }],
  [{ text: '                hajimi stare mode', color: 'permission' }],
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
      {HAJIMI_ART.map(renderArtLine)}
      <Text>{' '}</Text>
    </Box>
  )
}
