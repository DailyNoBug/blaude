#!/usr/bin/env node
/**
 * Example program demonstrating flicker-free TUI rendering.
 *
 * Run with:
 *   CLAUDE_CODE_NO_FLICKER=1 node examples/flickerFreeExample.tsx
 *
 * This example shows:
 * 1. Scrolling text without flicker
 * 2. Dynamic content updates
 * 3. Performance metrics
 */

import React, { useEffect, useState, useRef } from 'react'
import { render } from 'ink'
import { Box, Text, useApp, useStdoutDimensions } from 'ink'
import type { Screen } from '../src/ink/screen.js'
import type { Frame } from '../src/ink/frame.js'
import { isFlickerFreeEnabled } from '../src/ink/flickerFree.js'

// Generate some sample content
const generateLines = (count: number): string[] => {
  const lines: string[] = []
  for (let i = 0; i < count; i++) {
    lines.push(`Line ${i + 1}: ${'█'.repeat((i % 40) + 10)}`)
  }
  return lines
}

// Performance metrics component
function Metrics({ frameTime, diffTime, fps }: {
  frameTime: number
  diffTime: number
  fps: number
}) {
  const flickerFree = isFlickerFreeEnabled()

  return (
    <Box borderStyle="double" borderColor={flickerFree ? 'green' : 'yellow'} paddingX={1}>
      <Text color={flickerFree ? 'green' : 'yellow'}>
        {flickerFree ? '✓ Flicker-Free' : '✗ Standard'} | FPS: {fps.toFixed(1)} | Render: {frameTime.toFixed(2)}ms | Diff: {diffTime.toFixed(2)}ms
      </Text>
    </Box>
  )
}

// Main scrollable content component
function ScrollableContent({ lineCount, scrollPos }: {
  lineCount: number
  scrollPos: number
}) {
  const [lines] = useState(() => generateLines(lineCount))
  const [height] = useStdoutDimensions()

  // Calculate visible range
  const visibleLines = 20
  const startLine = Math.max(0, Math.min(scrollPos, lineCount - visibleLines))
  const endLine = Math.min(lineCount, startLine + visibleLines)

  return (
    <Box flexDirection="column" width={80}>
      <Box marginBottom={1}>
        <Text bold>Scrollable Content Demo</Text>
      </Box>
      <Text dimColor>
        Showing lines {startLine + 1}-{endLine} of {lineCount}
        (scroll position: {scrollPos})
      </Text>
      <Box marginY={1}>
        <Text>─</Text>
      </Box>
      <Box flexDirection="column" height={visibleLines}>
        {lines.slice(startLine, endLine).map((line, i) => (
          <Box key={startLine + i}>
            <Text
              color={startLine + i === scrollPos ? 'green' : 'white'}
              bold={startLine + i === scrollPos}
            >
              {line}
            </Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text>─</Text>
      </Box>
      <Text dimColor>
        Press ↑/↓ to scroll, Ctrl+C to exit
      </Text>
    </Box>
  )
}

// Main app component
function App() {
  const { exit } = useApp()
  const [lineCount] = useState(1000)
  const [scrollPos, setScrollPos] = useState(0)
  const [metrics, setMetrics] = useState({
    frameTime: 0,
    diffTime: 0,
    fps: 0,
  })
  const frameCount = useRef(0)
  const lastTime = useRef(Date.now())
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll demo
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setScrollPos(prev => {
        const next = prev + 1
        return next >= lineCount ? 0 : next
      })
    }, 100) // 10 FPS for visibility

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [lineCount])

  // Simulate performance tracking
  useEffect(() => {
    const updateMetrics = setInterval(() => {
      const now = Date.now()
      const elapsed = now - lastTime.current
      frameCount.current++

      if (elapsed >= 1000) {
        const fps = (frameCount.current / elapsed) * 1000
        setMetrics({
          frameTime: Math.random() * 5 + 1, // Simulated
          diffTime: Math.random() * 2 + 0.5, // Simulated
          fps,
        })
        frameCount.current = 0
        lastTime.current = now
      }
    }, 100)

    return () => clearInterval(updateMetrics)
  }, [])

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (data: Buffer) => {
      const key = data.toString()
      switch (key) {
        case '\u001B[A': // Up arrow
          setScrollPos(prev => Math.max(0, prev - 1))
          // Pause auto-scroll on manual input
          if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
            autoScrollRef.current = null
          }
          break
        case '\u001B[B': // Down arrow
          setScrollPos(prev => Math.min(lineCount - 1, prev + 1))
          if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
            autoScrollRef.current = null
          }
          break
        case '\u0003': // Ctrl+C
          exit()
          break
      }
    }

    process.stdin?.on('data', handleKeyPress)
    return () => {
      process.stdin?.off('data', handleKeyPress)
    }
  }, [exit, lineCount])

  return (
    <Box flexDirection="column" padding={1}>
      <Metrics {...metrics} />
      <Box marginY={1} />
      <ScrollableContent lineCount={lineCount} scrollPos={scrollPos} />
    </Box>
  )
}

// Main entry point
async function main() {
  const flickerFree = isFlickerFreeEnabled()

  console.clear()
  console.log(`=== Flicker-Free TUI Demo ===`)
  console.log(`Flicker-free rendering: ${flickerFree ? 'ENABLED ✓' : 'DISABLED ✗'}`)
  console.log(`Environment: CLAUDE_CODE_NO_FLICKER=${process.env.CLAUDE_CODE_NO_FLICKER || 'not set'}`)
  console.log(``)
  console.log(`Starting auto-scroll demo...`)
  console.log(`Press arrow keys to manually scroll, Ctrl+C to exit`)
  console.log(``)

  // Wait a moment for user to read instructions
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Render the app
  const { waitUntilExit } = render(<App />)

  await waitUntilExit()
}

main().catch(console.error)
