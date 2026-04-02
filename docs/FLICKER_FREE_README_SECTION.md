# Flicker-Free Rendering

This repository now includes **flicker-free TUI rendering** - a comprehensive anti-flicker system inspired by Claude Code v2.1.89's `CLAUDE_CODE_NO_FLICKER=1` feature.

## Quick Start

Enable flicker-free rendering with an environment variable:

```bash
export CLAUDE_CODE_NO_FLICKER=1
npm start
```

## What It Does

Flicker-free rendering eliminates visual artifacts during:

- **Scrolling** - Smooth scroll without screen clearing
- **Content updates** - Incremental updates instead of full redraws
- **Terminal resize** - Atomic screen updates without flicker
- **Dynamic content** - Clean animations and transitions

## How It Works

The system uses several techniques:

1. **Double Buffering** - Front/back screen buffers with atomic swap
2. **Virtual Scrollback** - Content larger than viewport in memory
3. **Hardware Scrolling** - DECSTBM terminal sequences for fast scrolls
4. **Incremental Diffing** - Only update changed cells

## Performance

Typical bandwidth reduction:

| Operation | Traditional | Flicker-Free | Reduction |
|-----------|-------------|--------------|-----------|
| Scroll 1 line | 25.6 KB | ~640 B | **97.5%** |
| Append content | 25.6 KB | ~2 KB | **92%** |
| Static frame | 25.6 KB | ~0 B | **100%** |

## Documentation

- [Technical Overview](./FLICKER_FREE_RENDERING.md) - Architecture and implementation
- [Integration Guide](./FLICKER_FREE_INTEGRATION.md) - How to integrate into your app
- [Example](../examples/flickerFreeExample.tsx) - Demo application

## Configuration

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `CLAUDE_CODE_NO_FLICKER` | `0` | Enable all anti-flicker features |
| `CLAUDE_CODE_VIRTUAL_SCROLLBACK` | `1` | Virtual scrollback buffer |
| `CLAUDE_CODE_HARDWARE_SCROLL` | `1` | DECSTBM hardware scrolling |
| `CLAUDE_CODE_BATCH_WRITES` | `1` | Batch terminal writes |

## Example

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  console.log('✓ Flicker-free rendering active!')
}
```

## Try the Demo

```bash
npm run build
CLAUDE_CODE_NO_FLICKER=1 node dist/examples/flickerFreeExample.js
```

Use arrow keys to scroll and observe the difference!

## Compatibility

Works with most modern terminals:
- ✓ Terminal.app
- ✓ iTerm2
- ✓ VS Code
- ✓ tmux
- ✓ Ghostty
- ✓ WezTerm

## See Also

- [Claude Code v2.1.89 Release](https://www.reddit.com/r/ClaudeAI/comments/1s9cr47/)
- [Ink Rendering Architecture](https://github.com/vadimdemedes/ink)
