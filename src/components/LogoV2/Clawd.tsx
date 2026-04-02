import * as React from 'react'
import { Box, Text } from '../../ink.js'

export type ClawdPose =
  | 'default'
  | 'arms-up'
  | 'look-left'
  | 'look-right'

type Props = {
  pose?: ClawdPose
}

type CatPose = {
  top: string
  face: string
  chin: string
}

const CAT_POSES: Record<ClawdPose, CatPose> = {
  default: {
    top: ' /^^^^^\\\\ ',
    face: '(  o o  )',
    chin: ' /  ^  \\\\ ',
  },
  'look-left': {
    top: ' /^^^^^\\\\ ',
    face: '( o o   )',
    chin: ' /  ^  \\\\ ',
  },
  'look-right': {
    top: ' /^^^^^\\\\ ',
    face: '(   o o )',
    chin: ' /  ^  \\\\ ',
  },
  'arms-up': {
    top: ' /^^~^^\\\\ ',
    face: '(  o o  )',
    chin: ' / \\_/ \\\\ ',
  },
}

export function Clawd({ pose = 'default' }: Props = {}): React.ReactNode {
  const catPose = CAT_POSES[pose]

  return (
    <Box flexDirection="column">
      <Text color="clawd_body">{catPose.top}</Text>
      <Text color="clawd_body">{catPose.face}</Text>
      <Text>
        <Text color="clawd_body">{catPose.chin}</Text>
      </Text>
    </Box>
  )
}
