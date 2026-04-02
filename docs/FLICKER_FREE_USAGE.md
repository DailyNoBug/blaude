# TUI 防闪烁功能使用指南

## 简介

这个TUI防闪烁渲染系统通过多种技术手段消除了终端UI中的闪烁问题,灵感来源于Claude Code v2.1.89。

## 快速开始

### 1. 启用防闪烁功能

```bash
export CLAUDE_CODE_NO_FLICKER=1
```

### 2. 运行你的应用

```bash
npm start
```

### 3. 验证是否启用

在你的代码中检查:

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  console.log('✓ 防闪烁渲染已启用!')
}
```

## 环境变量配置

### 完整启用

```bash
export CLAUDE_CODE_NO_FLICKER=1
```

### 单独控制各个功能

```bash
# 禁用虚拟滚动
export CLAUDE_CODE_VIRTUAL_SCROLLBACK=0

# 禁用硬件滚动
export CLAUDE_CODE_HARDWARE_SCROLL=0

# 禁用批量写入
export CLAUDE_CODE_BATCH_WRITES=0
```

## 使用示例

### 基础使用

```typescript
import React from 'react'
import { render } from 'ink'
import App from './App'

// 启用防闪烁功能
process.env.CLAUDE_CODE_NO_FLICKER = '1'

render(<App />)
```

### 高级用法 - 自定义滚动组件

```typescript
import { getFlickerFreeRenderer } from './ink/flickerFreeRenderer.js'
import type { Screen } from './ink/screen.js'

function MyScrollComponent({ scrollTop }: { scrollTop: number }) {
  const renderer = getFlickerFreeRenderer()

  useEffect(() => {
    if (renderer) {
      // 更新虚拟滚动
      const screen = getCurrentScreen()
      renderer.preRender(screen, scrollTop)
    }
  }, [scrollTop, renderer])

  return <YourScrollContent />
}
```

### 性能监控

```typescript
import { createFlickerDetector } from './ink/flickerFree.js'

function PerformanceMonitor() {
  const detector = useMemo(() => createFlickerDetector(), [])

  useEffect(() => {
    const checkFlicker = (prev: Frame, next: Frame) => {
      const reason = detector.detect(prev, next)
      if (reason) {
        console.warn(`检测到闪烁: ${reason}`)
      }
    }

    // 订阅渲染事件
    subscribeToRenderEvents(checkFlicker)
  }, [detector])

  return null
}
```

## 运行演示程序

```bash
# 构建项目
npm run build

# 运行演示
CLAUDE_CODE_NO_FLICKER=1 node dist/examples/flickerFreeExample.js
```

演示程序功能:
- 自动滚动演示
- 性能指标显示
- 键盘控制(上下箭头)
- 实时FPS显示

## 故障排除

### 问题: 仍然有闪烁

**解决方案:**

1. 检查环境变量是否设置:
```bash
echo $CLAUDE_CODE_NO_FLICKER
```

2. 验证终端支持:
   - VS Code: ✓ 支持
   - iTerm2: ✓ 支持
   - tmux: ✓ 支持
   - 较旧终端: 可能不支持硬件滚动

### 问题: 内存使用过高

**解决方案:**

减小最大内容高度:

```typescript
// 修改 flickerFreeRenderer.ts 中的 DEFAULT_CONFIG
const DEFAULT_CONFIG = {
  useVirtualScrollback: true,
  maxContentHeight: 5000, // 从10000减少到5000
  useHardwareScroll: true,
  batchWrites: true,
}
```

### 问题: 性能下降

**解决方案:**

1. 禁用批量写入:
```bash
export CLAUDE_CODE_BATCH_WRITES=0
```

2. 对于小内容禁用虚拟滚动:
```bash
export CLAUDE_CODE_VIRTUAL_SCROLLBACK=0
```

## 性能优化建议

### DO - 推荐

- 为可滚动内容启用防闪烁
- 为频繁更新的应用启用
- 监控性能指标
- 在目标终端上测试

### DON'T - 避免

- 为静态内容使用(不必要的开销)
- 在没有性能分析的情况下禁用
- 将maxContentHeight设置得过高
- 忽略内存限制

## API 参考

### isFlickerFreeEnabled()

检查防闪烁功能是否启用。

```typescript
import { isFlickerFreeEnabled } from './ink/flickerFree.js'

if (isFlickerFreeEnabled()) {
  // 使用防闪烁功能
}
```

### getFlickerFreeRenderer()

获取单例渲染器实例。

```typescript
import { getFlickerFreeRenderer } from './ink/flickerFreeRenderer.js'

const renderer = getFlickerFreeRenderer()
renderer.initialize(width, height, stylePool, charPool, hyperlinkPool)
```

### detectFlickerCause(prev, next)

检测闪烁原因。

```typescript
import { detectFlickerCause } from './ink/flickerFree.js'

const reason = detectFlickerCause(prevFrame, nextFrame)
if (reason === 'resize') {
  console.log('由于终端调整大小导致的闪烁')
}
```

### createFlickerDetector()

创建闪烁事件跟踪器。

```typescript
import { createFlickerDetector } from './ink/flickerFree.js'

const detector = createFlickerDetector()
detector.detect(prevFrame, nextFrame)
const events = detector.getEvents()
detector.clear()
```

## 更多文档

- [技术概览](./FLICKER_FREE_RENDERING.md) - 架构和实现
- [集成指南](./FLICKER_FREE_INTEGRATION.md) - 如何集成到应用中
- [总结](./FLICKER_FREE_SUMMARY.md) - 完整功能总结

## 支持

如有问题,请查看故障排除部分或参考完整的集成指南。
