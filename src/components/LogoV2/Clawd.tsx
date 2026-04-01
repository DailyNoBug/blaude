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

type DogPose = {
  top: string
  face: string
}

const DOG_POSES: Record<ClawdPose, DogPose> = {
  default: {
    top: ' /v---v\\ ',
    face: 'V  o o  V',
  },
  'look-left': {
    top: ' /v---v\\ ',
    face: 'V o o   V',
  },
  'look-right': {
    top: ' /v---v\\ ',
    face: 'V   o o V',
  },
  'arms-up': {
    top: ' /^-^-^\\ ',
    face: 'V  o o  V',
  },
}

export function Clawd({ pose = 'default' }: Props = {}): React.ReactNode {
  const dogPose = DOG_POSES[pose]

  return (
    <Box flexDirection="column">
      <Text color="clawd_body">{dogPose.top}</Text>
      <Text color="clawd_body">{dogPose.face}</Text>
      <Text>
        <Text color="clawd_body"> /|</Text>
        <Text color="permission">[ ]</Text>
        <Text color="clawd_body">|\\ </Text>
      </Text>
    </Box>
  )
}
