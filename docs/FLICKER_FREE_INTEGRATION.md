# Flicker-Free Rendering Integration Guide

This guide explains how to integrate flicker-free rendering into your TUI application.

## Quick Start

### 1. Enable Flicker-Free Rendering

Set the environment variable before starting your app:

```bash
export CLAUDE_CODE_NO_FLICKER=1
npm start
```

Or inline:

```bash
CLAUDE_CODE_NO_FLICKER=1 npm start
```

### 2. Verify It's Working

Your app should now render without flicker during:
- Scrolling
- Content updates
- Terminal resize

Check with:

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  console.log('Flicker-free rendering is active!')
}
```

## Advanced Integration

### Custom ScrollBox Component

For custom scrolling components, use the flicker-free API:

```typescript
import { getFlickerFreeRenderer } from './ink/flickerFreeRenderer.js'
import type { Screen } from './ink/screen.js'

function MyScrollBox({ children, scrollTop }: {
  children: React.ReactNode
  scrollTop: number
}) {
  const renderer = getFlickerFreeRenderer()

  useEffect(() => {
    if (renderer) {
      // Update virtual scrollback
      const screen = getCurrentScreen() // Your screen getter
      renderer.preRender(screen, scrollTop)
    }
  }, [scrollTop, renderer])

  return (
    <Box overflowY="scroll" scrollTop={scrollTop}>
      {children}
    </Box>
  )
}
```

### Performance Monitoring

Track rendering performance:

```typescript
import { createFlickerDetector } from './ink/flickerFree.js'

function PerformanceMonitor() {
  const detector = useMemo(() => createFlickerDetector(), [])

  useEffect(() => {
    const checkFlicker = (prev: Frame, next: Frame) => {
      const reason = detector.detect(prev, next)
      if (reason) {
        console.warn(`Flicker detected: ${reason}`)
      }
    }

    // Integrate with your render pipeline
    subscribeToRenderEvents(checkFlicker)
  }, [detector])

  return null
}
```

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `CLAUDE_CODE_NO_FLICKER` | `0` | Enable all anti-flicker features when set to `1` |
| `CLAUDE_CODE_VIRTUAL_SCROLLBACK` | `1` | Enable virtual scrollback (set `0` to disable) |
| `CLAUDE_CODE_HARDWARE_SCROLL` | `1` | Enable DECSTBM hardware scrolling (set `0` to disable) |
| `CLAUDE_CODE_BATCH_WRITES` | `1` | Batch terminal writes (set `0` to disable) |

### Programmatic Configuration

```typescript
import { getFlickerFreeConfig, getFlickerFreeRenderer } from './ink/flickerFreeRenderer.js'

// Get current config
const config = getFlickerFreeConfig()
console.log('Virtual scrollback:', config.useVirtualScrollback)
console.log('Hardware scroll:', config.useHardwareScroll)

// Reset renderer (e.g., after terminal resize)
const renderer = getFlickerFreeRenderer()
if (renderer) {
  renderer.destroy()
}
```

## Troubleshooting

### Flickering Still Occurs

1. **Check if enabled**:
   ```bash
   echo $CLAUDE_CODE_NO_FLICKER
   ```

2. **Verify terminal support**:
   - Most modern terminals support DECSTBM
   - VS Code integrated terminal: ✓ Supported
   - iTerm2: ✓ Supported
   - tmux: ✓ Supported
   - Older terminals: May not support hardware scrolling

3. **Content changes**:
   - Large content updates may still cause flicker
   - Consider virtualization for large lists

### High Memory Usage

Virtual scrollback uses more memory. Reduce `maxContentHeight`:

```typescript
// In flickerFreeRenderer.ts, modify DEFAULT_CONFIG:
const DEFAULT_CONFIG: FlickerFreeConfig = {
  useVirtualScrollback: true,
  maxContentHeight: 5000, // Reduced from 10000
  useHardwareScroll: true,
  batchWrites: true,
}
```

### Performance Degradation

1. **Disable batch writes** if causing issues:
   ```bash
   export CLAUDE_CODE_BATCH_WRITES=0
   ```

2. **Disable virtual scrollback** for small content:
   ```bash
   export CLAUDE_CODE_VIRTUAL_SCROLLBACK=0
   ```

3. **Profile your app**:
   ```typescript
   const t0 = performance.now()
   // Your render code
   const t1 = performance.now()
   console.log(`Render time: ${(t1 - t0).toFixed(2)}ms`)
   ```

## Best Practices

### DO

- Enable flicker-free for scrollable content
- Use for apps with frequent updates
- Monitor performance metrics
- Test on target terminals

### DON'T

- Use for static content (unnecessary overhead)
- Disable without profiling first
- Set `maxContentHeight` too high
- Ignore memory constraints

## Examples

See `examples/flickerFreeExample.tsx` for a complete working example.

Run it:

```bash
npm run build
CLAUDE_CODE_NO_FLICKER=1 node dist/examples/flickerFreeExample.js
```

## API Reference

### `isFlickerFreeEnabled(): boolean`

Check if flicker-free rendering is enabled.

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  // Use flicker-free features
}
```

### `getFlickerFreeRenderer(): FlickerFreeRenderer`

Get the singleton renderer instance.

```typescript
import { getFlickerFreeRenderer } from './ink/flickerFreeRenderer.js'

const renderer = getFlickerFreeRenderer()
renderer.initialize(width, height, stylePool, charPool, hyperlinkPool)
```

### `detectFlickerCause(prev: Frame, next: Frame): FlickerReason | null`

Detect why a flicker occurred.

```typescript
import { detectFlickerCause } from './ink/flickerFree.js'

const reason = detectFlickerCause(prevFrame, nextFrame)
if (reason === 'resize') {
  console.log('Flicker due to terminal resize')
}
```

### `createFlickerDetector()`

Create a flicker event tracker.

```typescript
import { createFlickerDetector } from './ink/flickerFree.js'

const detector = createFlickerDetector()
detector.detect(prevFrame, nextFrame)
const events = detector.getEvents()
detector.clear()
```

## Contributing

When adding new features:

1. Test with and without `CLAUDE_CODE_NO_FLICKER`
2. Benchmark performance impact
3. Update documentation
4. Add tests for new code paths

## License

MIT - See LICENSE file for details.
