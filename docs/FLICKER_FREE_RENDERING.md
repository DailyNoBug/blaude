# Flicker-Free TUI Rendering

This document describes the flicker-free rendering implementation for TUI applications, inspired by Claude Code's `CLAUDE_CODE_NO_FLICKER=1` feature.

## Overview

Flicker in terminal UIs occurs when the screen is cleared and redrawn, causing a momentary blank screen. This is especially noticeable during scrolling and content updates. The flicker-free rendering system eliminates this by:

1. **Double Buffering**: Maintains two screen buffers - front (displayed) and back (being rendered)
2. **Virtual Scrollback**: Maintains content larger than the visible viewport in memory
3. **Hardware Scrolling**: Uses terminal DECSTBM sequences for smooth scrolling
4. **Incremental Updates**: Only updates changed cells instead of full redraws

## Architecture

### Core Components

1. **`flickerFree.ts`** - Base utilities and interfaces
   - `DoubleBuffer` - Manages front/back screen buffers
   - `VirtualScrollback` - Maintains virtual content buffer
   - `FlickerFreeRenderer` - Main renderer coordination

2. **`flickerFreeRenderer.ts`** - Integration with Ink
   - `VirtualScrollbackBuffer` - Efficient virtual content storage
   - `FlickerFreeRenderer` - Hooks into Ink's rendering pipeline
   - Configuration management via environment variables

3. **`frame.ts`** - Frame and diff types
   - `Frame` - Complete screen state
   - `Diff` - Minimal changes between frames
   - `CellUpdate` - Individual cell change operations

## Usage

### Environment Variables

Enable flicker-free rendering:

```bash
# Enable all anti-flicker features
export CLAUDE_CODE_NO_FLICKER=1

# Disable specific features
export CLAUDE_CODE_VIRTUAL_SCROLLBACK=0
export CLAUDE_CODE_HARDWARE_SCROLL=0
export CLAUDE_CODE_BATCH_WRITES=0
```

### Integration with Ink

The flicker-free renderer integrates seamlessly with Ink's existing double-buffer system:

```typescript
import { getFlickerFreeRenderer, isFlickerFreeActive } from './flickerFreeRenderer.js'

// In your render function
const renderer = getFlickerFreeRenderer()
if (isFlickerFreeActive()) {
  // Initialize with screen dimensions
  renderer.initialize(width, height)

  // Pre-render: update virtual scrollback
  renderer.preRender(screen, scrollTop)

  // Render your content...

  // Post-render: get visible screen for diffing
  const visibleScreen = renderer.postRender(screen)
}
```

## How It Works

### Double Buffering

Ink already maintains `frontFrame` and `backFrame`:
- `frontFrame` - Currently displayed screen
- `backFrame` - Being rendered frame

After rendering completes, buffers are swapped atomically:
```typescript
this.backFrame = this.frontFrame
this.frontFrame = frame
```

### Virtual Scrollback

When content exceeds viewport height:
1. Content is stored in a virtual buffer (up to `maxContentHeight` rows)
2. Only visible portion is rendered to physical screen
3. Scrolling updates the visible region without full redraw

### Hardware Scrolling (DECSTBM)

For pure scroll operations (no content changes):
1. Set scroll region with DECSTBM
2. Use SU/SD to scroll content
3. Only render new edge rows
4. Eliminates full viewport rewrite

### Incremental Diffing

Instead of clearing and redrawing:
1. Compare front and back buffers
2. Generate minimal diff (only changed cells)
3. Apply diff with optimized terminal writes
4. Use cursor positioning to minimize movement

## Performance Benefits

### Memory Usage

- **Without virtual scrollback**: O(viewport_width × viewport_height)
- **With virtual scrollback**: O(viewport_width × max_content_height)

Typical values:
- Viewport: 160 cols × 40 rows = 6,400 cells
- Max content: 160 cols × 10,000 rows = 1,600,000 cells
- Memory: ~12.8 MB (2 Uint32 per cell)

### Rendering Performance

| Scenario | Without Flicker-Free | With Flicker-Free |
|----------|---------------------|-------------------|
| Static content | O(viewport) | O(viewport) |
| Scroll (1 line) | O(viewport) | O(viewport_width) |
| Append (bottom) | O(viewport) | O(new_cells) |
| Full redraw | O(viewport) | O(viewport) |

### Bandwidth Reduction

Traditional rendering writes entire viewport each frame:
```
160 cols × 40 rows × 4 bytes = 25.6 KB per frame
```

With diffing:
```
Typical frame: ~1-3 KB (only changed cells)
Scroll frame: ~640 bytes (one new row)
```

## Implementation Details

### Screen Buffer Format

Each cell is stored as 2 Uint32 values:
```typescript
cells[idx]     // Char code + hyperlink index
cells[idx | 1] // Style pool index
```

### Diff Generation

The diff algorithm:
1. Compare cells within damage bounds
2. Generate minimal update set
3. Emit control sequences (cursor, clear, scroll)
4. Return patches for terminal output

### Terminal Output Optimization

- **Batch writes**: Group updates by row to reduce cursor moves
- **Relative moves**: Use cursor relative positioning when closer
- **Escape minimization**: Reuse styles and avoid redundant sequences

## Debugging

### Flicker Detection

Track flicker events:

```typescript
import { createFlickerDetector } from './flickerFree.js'

const detector = createFlickerDetector()

// After each frame
const reason = detector.detect(prevFrame, nextFrame)
if (reason) {
  console.log(`Flicker: ${reason}`)
}

// Get all flicker events
const events = detector.getEvents()
```

### Performance Monitoring

Monitor rendering performance:

```typescript
// In your onRender
const t0 = performance.now()
const frame = renderer({...})
const renderTime = performance.now() - t0

const t1 = performance.now()
const diff = log.render(prevFrame, frame)
const diffTime = performance.now() - t1

console.log(`Render: ${renderTime.toFixed(2)}ms, Diff: ${diffTime.toFixed(2)}ms`)
```

## Limitations

1. **Memory overhead**: Virtual scrollback uses more memory
2. **Terminal compatibility**: Not all terminals support DECSTBM
3. **Content changes**: Large content changes still cause full redraws
4. **Resize handling**: Terminal resize requires buffer reallocation

## Future Improvements

- [ ] Adaptive max content height based on available memory
- [ ] Compression for virtual scrollback buffer
- [ ] Background prefetch for scroll direction prediction
- [ ] Integration with GPU-accelerated terminals when available

## References

- Claude Code v2.1.89 release notes: https://www.reddit.com/r/ClaudeAI/comments/1s9cr47/
- DECSTBM specification: ECMA-48 § 8.3.99
- Ink rendering architecture: https://github.com/vadimdemedes/ink
