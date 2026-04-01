import { spawnSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import process from 'process'
import type { AppState } from '../../state/AppStateStore.js'
import { getDefaultAppState } from '../../state/AppStateStore.js'
import { getEmptyToolPermissionContext } from '../../Tool.js'
import { QueryEngine } from '../../QueryEngine.js'
import { query } from '../../query.js'
import { getAllBaseTools } from '../../tools.js'
import { BashTool } from '../../tools/BashTool/BashTool.js'
import { FileReadTool } from '../../tools/FileReadTool/FileReadTool.js'
import { GlobTool } from '../../tools/GlobTool/GlobTool.js'
import { GrepTool } from '../../tools/GrepTool/GrepTool.js'
import { toolToAPISchema } from '../../utils/api.js'
import {
  createFileStateCacheWithSizeLimit,
  READ_FILE_STATE_CACHE_SIZE,
} from '../../utils/fileStateCache.js'
import { createUserMessage, normalizeMessages } from '../../utils/messages.js'
import {
  getAllowRules,
  getDenyRules,
} from '../../utils/permissions/permissions.js'

type VerifyStatus = 'PASS' | 'PARTIAL' | 'FAIL'

type VerifyRow = {
  module: string
  status: VerifyStatus
  detail: string
}

type VerifyOptions = {
  json?: boolean
  offline?: boolean
  settings?: string
}

const TABLE_TOOL_TOKENS = [
  'AgentTool',
  'BashTool',
  'FileReadTool',
  'FileWriteTool',
  'FileEditTool',
  'GlobTool',
  'GrepTool',
  'WebFetchTool',
  'WebSearchTool',
  'SkillTool',
  'EnterPlanModeTool',
  'ExitPlanModeV2Tool',
  'EnterWorktreeTool',
  'ExitWorktreeTool',
  'TaskCreateTool',
  'TaskGetTool',
  'TaskUpdateTool',
  'TaskListTool',
  'TaskStopTool',
  'ListMcpResourcesTool',
  'ReadMcpResourceTool',
  'MonitorTool',
  'SnipTool',
  'getTeamCreateTool',
  'getTeamDeleteTool',
  'getSendMessageTool',
] as const

function findRepoRoot(startDir: string): string {
  let current = path.resolve(startDir)
  while (true) {
    const packageJsonPath = path.join(current, 'package.json')
    const srcDir = path.join(current, 'src')
    if (fs.existsSync(packageJsonPath) && fs.existsSync(srcDir)) {
      return current
    }
    const parent = path.dirname(current)
    if (parent === current) {
      return path.resolve(startDir)
    }
    current = parent
  }
}

function readSource(repoRoot: string, ...segments: string[]): string {
  return fs.readFileSync(path.join(repoRoot, ...segments), 'utf8')
}

function formatStatus(status: VerifyStatus): string {
  return status.padEnd(7, ' ')
}

function detectSettingsPath(
  repoRoot: string,
  providedPath?: string,
): string | null {
  const candidates = [
    providedPath,
    process.env.BLAUDE_SETTINGS_PATH,
    process.env.CLAUDE_CODE_SETTINGS_PATH,
    path.join(repoRoot, '.claude', 'settings.json'),
    path.join(os.homedir(), '.claude', 'settings.json'),
    path.join(os.homedir(), '.cursor', 'settings.json'),
  ].filter(Boolean) as string[]

  for (const candidate of candidates) {
    const absolutePath = path.resolve(candidate)
    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
      return absolutePath
    }
  }
  return null
}

function getDistEntry(repoRoot: string): string {
  return path.join(repoRoot, 'dist', 'blaude.mjs')
}

function createVerifyToolContext(repoRoot: string) {
  const previousCwd = process.cwd()
  process.chdir(repoRoot)

  let appState: AppState = getDefaultAppState()
  const readFileState = createFileStateCacheWithSizeLimit(
    READ_FILE_STATE_CACHE_SIZE,
  )

  const context = {
    abortController: new AbortController(),
    toolUseId: 'verify-tool',
    readFileState,
    fileReadingLimits: undefined,
    globLimits: { maxResults: 100 },
    dynamicSkillDirTriggers: new Set<string>(),
    nestedMemoryAttachmentTriggers: new Set<string>(),
    loadedNestedMemoryPaths: new Set<string>(),
    discoveredSkillNames: new Set<string>(),
    messages: [],
    getAppState: () => appState,
    setAppState: (updater: (prev: AppState) => AppState) => {
      appState = updater(appState)
    },
    setInProgressToolUseIDs: () => {},
    setResponseLength: () => {},
    updateFileHistoryState: () => {},
    updateAttributionState: () => {},
  }

  return {
    context,
    restore() {
      process.chdir(previousCwd)
    },
  }
}

function runBuiltCli(
  repoRoot: string,
  args: string[],
  settingsPath: string | null,
): {
  ok: boolean
  stdout: string
  stderr: string
  status: number | null
  detail: string
} {
  const distEntry = getDistEntry(repoRoot)
  if (!fs.existsSync(distEntry)) {
    return {
      ok: false,
      stdout: '',
      stderr: '',
      status: null,
      detail: 'missing dist/blaude.mjs; run pnpm run build first',
    }
  }

  const commandArgs = [distEntry]
  if (settingsPath) {
    commandArgs.push('--settings', settingsPath)
  }
  commandArgs.push(...args)

  const result = spawnSync(process.execPath, commandArgs, {
    cwd: repoRoot,
    encoding: 'utf8',
    timeout: 120000,
    maxBuffer: 8 * 1024 * 1024,
    env: {
      ...process.env,
      BLAUDE_VERIFY_CHILD: '1',
    },
  })

  return {
    ok: result.status === 0,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    status: result.status,
    detail:
      result.error?.message ||
      `exit=${String(result.status)}${result.stderr ? ` stderr=${result.stderr.trim()}` : ''}`,
  }
}

function countFilesAndBytes(dir: string): { files: number; bytes: number } {
  if (!fs.existsSync(dir)) {
    return { files: 0, bytes: 0 }
  }

  let files = 0
  let bytes = 0
  const stack = [dir]

  while (stack.length > 0) {
    const current = stack.pop()
    if (!current) continue
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(entryPath)
        continue
      }
      if (entry.isFile()) {
        files += 1
        bytes += fs.statSync(entryPath).size
      }
    }
  }

  return { files, bytes }
}

function formatMegabytes(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

async function verifyToolsRow(repoRoot: string): Promise<VerifyRow> {
  const toolsSource = readSource(repoRoot, 'src', 'tools.ts')
  const missingTokens = TABLE_TOOL_TOKENS.filter(
    token => !toolsSource.includes(token),
  )
  const enabledTools = getAllBaseTools().filter(tool => {
    try {
      return tool.isEnabled()
    } catch {
      return false
    }
  })
  const toolNames = enabledTools.map(tool => tool.name)

  if (missingTokens.length > 0) {
    return {
      module: '26 个内置工具',
      status: 'FAIL',
      detail: `missing source registrations: ${missingTokens.join(', ')}`,
    }
  }

  const status: VerifyStatus = enabledTools.length >= 26 ? 'PASS' : 'PARTIAL'
  return {
    module: '26 个内置工具',
    status,
    detail: `${enabledTools.length} enabled tools; sample = ${toolNames.slice(0, 12).join(', ')}`,
  }
}

async function verifyQueryEngineRow(): Promise<VerifyRow> {
  const hasCoreMethods =
    typeof QueryEngine === 'function' &&
    typeof QueryEngine.prototype.submitMessage === 'function'

  return {
    module: 'QueryEngine',
    status: hasCoreMethods ? 'PASS' : 'FAIL',
    detail: hasCoreMethods
      ? 'QueryEngine class is loadable and exposes submitMessage()'
      : 'QueryEngine class or submitMessage() is missing',
  }
}

async function verifyQueryFunctionRow(): Promise<VerifyRow> {
  const constructorName = query.constructor?.name || ''
  const isAsyncGenerator = constructorName === 'AsyncGeneratorFunction'
  return {
    module: 'query()',
    status: isAsyncGenerator ? 'PASS' : 'FAIL',
    detail: isAsyncGenerator
      ? 'query() is an AsyncGeneratorFunction from src/query.ts'
      : `unexpected function type: ${constructorName || 'unknown'}`,
  }
}

async function verifyApiClientRow(
  repoRoot: string,
  options: VerifyOptions,
): Promise<VerifyRow> {
  if (options.offline) {
    return {
      module: 'API Client',
      status: 'PARTIAL',
      detail: 'offline mode skipped live provider smoke test',
    }
  }

  const settingsPath = detectSettingsPath(repoRoot, options.settings)
  if (!settingsPath) {
    return {
      module: 'API Client',
      status: 'PARTIAL',
      detail: 'no settings.json or provider env found for live API smoke test',
    }
  }

  const result = runBuiltCli(
    repoRoot,
    ['--print', '只回复 pong'],
    settingsPath,
  )

  if (!result.ok) {
    return {
      module: 'API Client',
      status: 'FAIL',
      detail: `live request failed via ${settingsPath}: ${result.detail}`,
    }
  }

  const normalized = result.stdout.trim().toLowerCase()
  return {
    module: 'API Client',
    status: normalized.includes('pong') ? 'PASS' : 'PARTIAL',
    detail: normalized.includes('pong')
      ? `live print-mode request succeeded via ${settingsPath}`
      : `live request returned unexpected payload via ${settingsPath}: ${result.stdout.trim()}`,
  }
}

async function verifyToolSchemaRow(): Promise<VerifyRow> {
  try {
    const schema = await toolToAPISchema(BashTool, {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      tools: [BashTool],
      agents: [],
    })
    const properties =
      'input_schema' in schema &&
      schema.input_schema &&
      typeof schema.input_schema === 'object' &&
      'properties' in schema.input_schema
        ? schema.input_schema.properties
        : undefined
    const hasCommandProperty =
      properties !== undefined &&
      properties !== null &&
      typeof properties === 'object' &&
      'command' in properties

    return {
      module: 'toolToAPISchema',
      status: hasCommandProperty ? 'PASS' : 'FAIL',
      detail: hasCommandProperty
        ? 'toolToAPISchema() produced JSON Schema properties for Bash'
        : 'toolToAPISchema() did not expose the expected command property',
    }
  } catch (error) {
    return {
      module: 'toolToAPISchema',
      status: 'FAIL',
      detail: error instanceof Error ? error.message : String(error),
    }
  }
}

async function verifyBashToolRow(repoRoot: string): Promise<VerifyRow> {
  const { context, restore } = createVerifyToolContext(repoRoot)
  try {
    const result = await BashTool.call(
      { command: 'printf blaude-verify' } as never,
      context as never,
    )
    const block = BashTool.mapToolResultToToolResultBlockParam(
      result.data,
      'verify-bash',
    )
    const content = typeof block.content === 'string' ? block.content : ''
    return {
      module: 'Bash 工具',
      status: content.includes('blaude-verify') ? 'PASS' : 'FAIL',
      detail: content.includes('blaude-verify')
        ? 'BashTool executed a shell command and returned stdout'
        : `unexpected BashTool output: ${content || '<empty>'}`,
    }
  } catch (error) {
    return {
      module: 'Bash 工具',
      status: 'FAIL',
      detail: error instanceof Error ? error.message : String(error),
    }
  } finally {
    restore()
  }
}

async function verifyReadToolRow(repoRoot: string): Promise<VerifyRow> {
  const { context, restore } = createVerifyToolContext(repoRoot)
  try {
    const result = await FileReadTool.call(
      {
        file_path: path.join(repoRoot, 'package.json'),
        offset: 1,
        limit: 5,
      } as never,
      context as never,
    )
    const block = FileReadTool.mapToolResultToToolResultBlockParam(
      result.data,
      'verify-read',
    )
    const content =
      typeof block.content === 'string'
        ? block.content
        : JSON.stringify(block.content)
    return {
      module: 'Read 工具',
      status: /"name":\s*"blaude"/.test(content) ? 'PASS' : 'FAIL',
      detail: /"name":\s*"blaude"/.test(content)
        ? 'FileReadTool read package.json with offset/limit support'
        : `unexpected FileReadTool output: ${content.slice(0, 200)}`,
    }
  } catch (error) {
    return {
      module: 'Read 工具',
      status: 'FAIL',
      detail: error instanceof Error ? error.message : String(error),
    }
  } finally {
    restore()
  }
}

async function verifyGlobToolRow(repoRoot: string): Promise<VerifyRow> {
  const { context, restore } = createVerifyToolContext(repoRoot)
  try {
    const result = await GlobTool.call(
      {
        pattern: '*.json',
        path: repoRoot,
      } as never,
      context as never,
    )
    const filenames = result.data.filenames || []
    return {
      module: 'Glob 工具',
      status: filenames.some(name => name.endsWith('package.json'))
        ? 'PASS'
        : 'FAIL',
      detail: filenames.some(name => name.endsWith('package.json'))
        ? `GlobTool returned ${filenames.length} matching files`
        : `GlobTool did not find package.json in ${repoRoot}`,
    }
  } catch (error) {
    return {
      module: 'Glob 工具',
      status: 'FAIL',
      detail: error instanceof Error ? error.message : String(error),
    }
  } finally {
    restore()
  }
}

async function verifyGrepToolRow(repoRoot: string): Promise<VerifyRow> {
  const { context, restore } = createVerifyToolContext(repoRoot)
  try {
    const result = await GrepTool.call(
      {
        pattern: '"name":\\s*"blaude"',
        path: path.join(repoRoot, 'package.json'),
        output_mode: 'content',
        head_limit: 5,
      } as never,
      context as never,
    )
    const content = result.data.content || ''
    return {
      module: 'Grep 工具',
      status: /"name":\s*"blaude"/.test(content) ? 'PASS' : 'FAIL',
      detail: /"name":\s*"blaude"/.test(content)
        ? 'GrepTool matched package.json content with ripgrep'
        : `unexpected GrepTool output: ${content.slice(0, 200)}`,
    }
  } catch (error) {
    return {
      module: 'Grep 工具',
      status: 'FAIL',
      detail: error instanceof Error ? error.message : String(error),
    }
  } finally {
    restore()
  }
}

async function verifyAgentLoopRow(
  repoRoot: string,
  options: VerifyOptions,
): Promise<VerifyRow> {
  if (options.offline) {
    return {
      module: '完整 Agent Loop',
      status: 'PARTIAL',
      detail: 'offline mode skipped live multi-turn tool loop smoke test',
    }
  }

  const settingsPath = detectSettingsPath(repoRoot, options.settings)
  if (!settingsPath) {
    return {
      module: '完整 Agent Loop',
      status: 'PARTIAL',
      detail: 'no settings.json available for live agent-loop smoke test',
    }
  }

  const result = runBuiltCli(
    repoRoot,
    [
      '--print',
      '--verbose',
      '--output-format',
      'stream-json',
      '--max-turns',
      '6',
      '读取当前工作目录的 package.json，并只回复 version 字段值。必须使用 Read 工具，不要凭记忆回答。',
    ],
    settingsPath,
  )

  if (!result.ok) {
    return {
      module: '完整 Agent Loop',
      status: 'FAIL',
      detail: `live stream-json run failed via ${settingsPath}: ${result.detail}`,
    }
  }

  const combined = `${result.stdout}\n${result.stderr}`
  const sawToolUse =
    /"tool_name":"Read"/.test(combined) ||
    /"name":"Read"/.test(combined) ||
    /tool_use/i.test(combined)
  const sawVersion = /99\.99\.99-black\.1/.test(combined)

  if (sawToolUse && sawVersion) {
    return {
      module: '完整 Agent Loop',
      status: 'PASS',
      detail: `live stream-json run completed with tool activity via ${settingsPath}`,
    }
  }

  if (sawVersion) {
    return {
      module: '完整 Agent Loop',
      status: 'PARTIAL',
      detail: `live run completed via ${settingsPath}, but tool-use evidence was inconclusive`,
    }
  }

  return {
    module: '完整 Agent Loop',
    status: 'FAIL',
    detail: `live run did not return the expected version value via ${settingsPath}`,
  }
}

async function verifyContextRow(repoRoot: string): Promise<VerifyRow> {
  const collapseSource = readSource(
    repoRoot,
    'src',
    'services',
    'contextCollapse',
    'index.ts',
  )
  const snipCompactSource = readSource(
    repoRoot,
    'src',
    'services',
    'compact',
    'snipCompact.ts',
  )
  const snipProjectionSource = readSource(
    repoRoot,
    'src',
    'services',
    'compact',
    'snipProjection.ts',
  )

  const ok =
    collapseSource.includes('applyCollapsesIfNeeded') &&
    collapseSource.includes('recoverFromOverflow') &&
    snipCompactSource.includes('trimMessagesToTargetTokens') &&
    snipCompactSource.includes('SNIP_BOUNDARY_SUBTYPE') &&
    snipProjectionSource.includes('isSnipBoundaryMessageImpl')

  return {
    module: '上下文管理',
    status: ok ? 'PASS' : 'FAIL',
    detail: ok
      ? 'autocompact / microcompact / snip sources are present in leaked src'
      : 'context collapse or snip implementation is incomplete',
  }
}

async function verifyMessageSystemRow(): Promise<VerifyRow> {
  const message = createUserMessage({ content: 'verify-message' })
  const normalized = normalizeMessages([message])
  const ok =
    message.type === 'user' &&
    Array.isArray(normalized) &&
    normalized.length > 0 &&
    normalized[0]?.type === 'user'

  return {
    module: '消息系统',
    status: ok ? 'PASS' : 'FAIL',
    detail: ok
      ? 'createUserMessage() and normalizeMessages() are functioning'
      : 'message creation or normalization failed',
  }
}

async function verifyMcpRow(repoRoot: string): Promise<VerifyRow> {
  const mcpModule = await import('../../services/mcp/client.js')
  const toolsSource = readSource(repoRoot, 'src', 'tools.ts')
  const ok =
    typeof mcpModule.getMcpToolsCommandsAndResources === 'function' &&
    toolsSource.includes('ListMcpResourcesTool') &&
    toolsSource.includes('ReadMcpResourceTool')

  return {
    module: 'MCP 支持',
    status: ok ? 'PASS' : 'FAIL',
    detail: ok
      ? 'MCP client helpers and MCP resource tools are loadable'
      : 'MCP client helpers or MCP tools are missing',
  }
}

async function verifySessionHistoryRow(repoRoot: string): Promise<VerifyRow> {
  const sessionModule = await import('../../utils/sessionStorage.js')
  const source = readSource(repoRoot, 'src', 'utils', 'sessionStorage.ts')
  const ok =
    typeof sessionModule.loadTranscriptFromFile === 'function' &&
    typeof sessionModule.saveMode === 'function' &&
    source.includes('jsonl')

  return {
    module: 'Session/History',
    status: ok ? 'PASS' : 'FAIL',
    detail: ok
      ? 'sessionStorage exports transcript/history helpers with JSONL persistence code'
      : 'session/history helpers are incomplete',
  }
}

async function verifyPermissionsRow(repoRoot: string): Promise<VerifyRow> {
  const context = getEmptyToolPermissionContext()
  const permissionsSource = readSource(
    repoRoot,
    'src',
    'utils',
    'permissions',
    'permissions.ts',
  )
  const ok =
    Array.isArray(getAllowRules(context)) &&
    Array.isArray(getDenyRules(context)) &&
    permissionsSource.includes('CanUseToolFn')

  return {
    module: '权限系统',
    status: ok ? 'PASS' : 'FAIL',
    detail: ok
      ? 'permission helpers load and canUseTool callback wiring is present'
      : 'permission helpers or canUseTool wiring is incomplete',
  }
}

async function verifyCodeScaleRow(repoRoot: string): Promise<VerifyRow> {
  const srcMetrics = countFilesAndBytes(path.join(repoRoot, 'src'))
  const distMetrics = countFilesAndBytes(path.join(repoRoot, 'dist'))
  const ok =
    srcMetrics.files >= 1800 &&
    srcMetrics.bytes >= 30 * 1024 * 1024 &&
    distMetrics.files > 0

  return {
    module: '代码规模',
    status: ok ? 'PASS' : 'PARTIAL',
    detail: `src=${srcMetrics.files} files / ${formatMegabytes(srcMetrics.bytes)}, dist=${distMetrics.files} files / ${formatMegabytes(distMetrics.bytes)}`,
  }
}

function printTable(rows: VerifyRow[]): void {
  const moduleWidth = Math.max(
    '模块'.length,
    ...rows.map(row => row.module.length),
  )
  process.stdout.write(
    `${'模块'.padEnd(moduleWidth)}  状态      说明\n`,
  )
  process.stdout.write(
    `${'-'.repeat(moduleWidth)}  --------  ----\n`,
  )
  for (const row of rows) {
    process.stdout.write(
      `${row.module.padEnd(moduleWidth)}  ${formatStatus(row.status)}  ${row.detail}\n`,
    )
  }
}

export async function verifyHandler(options: VerifyOptions = {}): Promise<void> {
  const repoRoot = findRepoRoot(process.cwd())
  const rows: VerifyRow[] = []

  rows.push(await verifyToolsRow(repoRoot))
  rows.push(await verifyQueryEngineRow())
  rows.push(await verifyQueryFunctionRow())
  rows.push(await verifyApiClientRow(repoRoot, options))
  rows.push(await verifyToolSchemaRow())
  rows.push(await verifyBashToolRow(repoRoot))
  rows.push(await verifyReadToolRow(repoRoot))
  rows.push(await verifyGlobToolRow(repoRoot))
  rows.push(await verifyGrepToolRow(repoRoot))
  rows.push(await verifyAgentLoopRow(repoRoot, options))
  rows.push(await verifyContextRow(repoRoot))
  rows.push(await verifyMessageSystemRow())
  rows.push(await verifyMcpRow(repoRoot))
  rows.push(await verifySessionHistoryRow(repoRoot))
  rows.push(await verifyPermissionsRow(repoRoot))
  rows.push(await verifyCodeScaleRow(repoRoot))

  const summary = rows.reduce(
    (acc, row) => {
      acc[row.status] += 1
      return acc
    },
    { PASS: 0, PARTIAL: 0, FAIL: 0 } as Record<VerifyStatus, number>,
  )

  if (options.json) {
    process.stdout.write(
      JSON.stringify(
        {
          repoRoot,
          generatedAt: new Date().toISOString(),
          rows,
          summary,
        },
        null,
        2,
      ) + '\n',
    )
  } else {
    printTable(rows)
    process.stdout.write(
      `\nSummary: PASS=${summary.PASS} PARTIAL=${summary.PARTIAL} FAIL=${summary.FAIL}\n`,
    )
    if (summary.PARTIAL > 0 || summary.FAIL > 0) {
      process.stdout.write(
        'Result: current repository state does not yet fully satisfy every row in the target table.\n',
      )
    } else {
      process.stdout.write(
        'Result: current repository state satisfies every row in the target table.\n',
      )
    }
  }

  process.exit(summary.PARTIAL > 0 || summary.FAIL > 0 ? 1 : 0)
}
