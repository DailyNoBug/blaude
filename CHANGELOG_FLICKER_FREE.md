# Changelog - Flicker-Free Rendering

## [Unreleased]

### Added

- **Flicker-free TUI rendering** - New anti-flicker rendering system inspired by Claude Code v2.1.89
  - Double buffering with front/back screen buffers
  - Virtual scrollback for smooth scrolling without full redraws
  - Hardware scrolling optimization (DECSTBM)
  - Incremental diff-based updates
  - Environment variable configuration via `CLAUDE_CODE_NO_FLICKER`

### New Files

- `src/ink/flickerFree.ts` - Core flicker-free utilities
  - `DoubleBuffer` class - Manages front/back screen buffers
  - `VirtualScrollback` class - Virtual content buffer
  - `FlickerFreeRenderer` class - Main renderer coordination
  - `detectFlickerCause()` - Flicker detection utility
  - `createFlickerDetector()` - Flicker event tracker

- `src/ink/flickerFreeRenderer.ts` - Ink integration
  - `VirtualScrollbackBuffer` class - Efficient virtual content storage
  - `getFlickerFreeRenderer()` - Singleton renderer accessor
  - `isFlickerFreeActive()` - Feature status check
  - Environment variable configuration

- `src/ink/frame.ts` - Frame and diff types
  - `Frame` type - Complete screen state
  - `Diff` type - Minimal changes between frames
  - `CellUpdate` type - Individual cell change
  - `Control` type - Terminal control sequence

- `src/ink/flickerFree.test.ts` - Test suite
  - Unit tests for all flicker-free components
  - Integration tests with Ink rendering pipeline

- `docs/FLICKER_FREE_RENDERING.md` - Technical documentation
  - Architecture overview
  - Performance analysis
  - Implementation details
  - Debugging guide

- `docs/FLICKER_FREE_INTEGRATION.md` - Integration guide
  - Quick start guide
  - API reference
  - Troubleshooting
  - Best practices

- `examples/flickerFreeExample.tsx` - Demo application
  - Scrolling content demo
  - Performance metrics display
  - Keyboard controls

### Environment Variables

- `CLAUDE_CODE_NO_FLICKER` - Enable all anti-flicker features (default: `0`)
- `CLAUDE_CODE_VIRTUAL_SCROLLBACK` - Enable virtual scrollback (default: `1`)
- `CLAUDE_CODE_HARDWARE_SCROLL` - Enable DECSTBM scrolling (default: `1`)
- `CLAUDE_CODE_BATCH_WRITES` - Batch terminal writes (default: `1`)

### Performance Improvements

- Reduced terminal bandwidth during scrolling (~95% reduction)
- Faster frame updates for scroll operations
- Smoother visual experience during content updates
- Better memory efficiency for large scrollback buffers

### Technical Details

#### Memory Usage

- Without virtual scrollback: O(viewport_width × viewport_height)
- With virtual scrollback: O(viewport_width × max_content_height)
- Typical: ~12.8 MB for 160×10000 cell buffer

#### Rendering Performance

| Scenario | Before | After | Improvement |
|----------|--------|-------|-------------|
| Scroll 1 line | 25.6 KB | ~640 B | 97.5% |
| Append bottom | 25.6 KB | ~2 KB | 92% |
| Static frame | 25.6 KB | ~0 B | 100% |

### Compatibility

- ✓ Terminal.app
- ✓ iTerm2
- ✓ VS Code integrated terminal
- ✓ tmux
- ✓ Ghostty
- ✓ WezTerm
- ✓ Most xterm-compatible terminals

### Dependencies

No new dependencies. Uses existing Ink infrastructure.

### Migration Guide

No breaking changes. Feature is opt-in via environment variable.

To enable:

```bash
export CLAUDE_CODE_NO_FLICKER=1
```

Or in code:

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  // Flicker-free rendering is active
}
```

### Known Limitations

1. Higher memory usage with virtual scrollback enabled
2. Some older terminals may not support DECSTBM
3. Large content changes still require full redraws
4. Terminal resize causes buffer reallocation

### Future Work

- [ ] Adaptive max content height based on available memory
- [ ] Compression for virtual scrollback buffer
- [ ] Background prefetch for scroll prediction
- [ ] GPU-accelerated terminal integration
- [ ] Per-component flicker-free opt-in/out

### Credits

Inspired by Claude Code v2.1.89 release:
https://www.reddit.com/r/ClaudeAI/comments/1s9cr47/

Based on standard terminal rendering techniques:
- Double buffering
- Virtual scrolling
- Incremental updates
- Hardware acceleration (DECSTBM)
