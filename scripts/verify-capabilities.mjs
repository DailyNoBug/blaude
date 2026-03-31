import assert from "assert/strict";
import fs from "fs/promises";
import http from "http";
import os from "os";
import path from "path";

import { buildAgentCatalog } from "../black-src/agents.mjs";
import { autoCompactMessages } from "../black-src/context.mjs";
import { BlackEngine } from "../black-src/engine.mjs";
import { createUserMessage, normalizeMessages } from "../black-src/messages.mjs";
import { createMcpManager } from "../black-src/mcp.mjs";
import { createCanUseTool } from "../black-src/permissions.mjs";
import { toolToAPISchema } from "../black-src/schema.mjs";
import {
  appendJsonlRecord,
  ensureProjectStateDir,
  getProjectStatePaths,
  readJsonlFile,
} from "../black-src/storage.mjs";
import { getAllToolDefinitions, getToolNames, runLocalCommand } from "../black-src/tools.mjs";

const results = [];

async function verify(name, fn) {
  try {
    await fn();
    results.push({ name, ok: true });
  } catch (error) {
    results.push({
      name,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

function createBaseConfig(cwd, extra = {}) {
  return {
    cwd,
    baseCwd: cwd,
    shell: process.env.SHELL || "/bin/zsh",
    env: { ...process.env },
    settingsPath: null,
    settingsExists: false,
    settings: {},
    workspaceInstructions: "",
    settingsInstructions: "",
    claudeMdPath: null,
    model: "mock-model",
    defaultAgent: "general-purpose",
    maxTurns: 24,
    maxTokens: 512,
    extraSystem: "",
    debug: false,
    noColor: true,
    temperature: undefined,
    thinking: undefined,
    agentCatalog: buildAgentCatalog(),
    permissions: {},
    canUseTool: createCanUseTool({}),
    mcpServers: {},
    skillPaths: [],
    streamResponses: true,
    ...extra,
  };
}

function createStreamingProvider() {
  return {
    provider: "direct",
    model: "mock-stream",
    canStream: true,
    async createMessage() {
      return {
        role: "assistant",
        content: [{ type: "text", text: "fallback" }],
        usage: { input_tokens: 1, output_tokens: 1 },
        stop_reason: "end_turn",
      };
    },
    async createStream() {
      return {
        async *[Symbol.asyncIterator]() {
          yield { type: "content_block_delta", delta: { type: "text_delta", text: "Hel" } };
          yield { type: "content_block_delta", delta: { type: "text_delta", text: "lo" } };
        },
        async finalMessage() {
          return {
            role: "assistant",
            content: [{ type: "text", text: "Hello" }],
            usage: { input_tokens: 3, output_tokens: 2 },
            stop_reason: "end_turn",
          };
        },
      };
    },
  };
}

function createLoopProvider(toolName, turns = 11) {
  let count = 0;
  return {
    provider: "direct",
    model: "mock-loop",
    canStream: false,
    async createStream() {
      return null;
    },
    async createMessage() {
      count += 1;
      if (count < turns) {
        return {
          role: "assistant",
          content: [
            {
              type: "tool_use",
              id: `tool-${count}`,
              name: toolName,
              input: {},
            },
          ],
          usage: { input_tokens: count, output_tokens: 1 },
          stop_reason: "tool_use",
        };
      }
      return {
        role: "assistant",
        content: [{ type: "text", text: `completed in ${count} turns` }],
        usage: { input_tokens: count, output_tokens: 1 },
        stop_reason: "end_turn",
      };
    },
  };
}

function createPermissionProvider(toolName) {
  let count = 0;
  return {
    provider: "direct",
    model: "mock-permissions",
    canStream: false,
    async createStream() {
      return null;
    },
    async createMessage() {
      count += 1;
      if (count === 1) {
        return {
          role: "assistant",
          content: [
            {
              type: "tool_use",
              id: "permission-tool",
              name: toolName,
              input: { command: "pwd" },
            },
          ],
          usage: { input_tokens: 1, output_tokens: 1 },
          stop_reason: "tool_use",
        };
      }
      return {
        role: "assistant",
        content: [{ type: "text", text: "permission handled" }],
        usage: { input_tokens: 1, output_tokens: 1 },
        stop_reason: "end_turn",
      };
    },
  };
}

async function withHttpServer(handler, fn) {
  const server = http.createServer(handler);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  try {
    return await fn(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function createMcpServerScript(tmpDir) {
  const scriptPath = path.join(tmpDir, "mcp-test-server.mjs");
  const source = `
let buffer = Buffer.alloc(0);
function send(message) {
  const json = JSON.stringify(message);
  process.stdout.write("Content-Length: " + Buffer.byteLength(json, "utf8") + "\\r\\n\\r\\n" + json);
}
function handleMessage(message) {
  if (message.method === "initialize") {
    send({ jsonrpc: "2.0", id: message.id, result: { protocolVersion: "2024-11-05", capabilities: {}, serverInfo: { name: "test-mcp", version: "1.0.0" } } });
    return;
  }
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools: [{ name: "ping", description: "Echo test", inputSchema: { type: "object", properties: { value: { type: "string" } } } }] } });
    return;
  }
  if (message.method === "tools/call") {
    send({ jsonrpc: "2.0", id: message.id, result: { content: [{ type: "text", text: "pong:" + (message.params.arguments?.value || "") }] } });
  }
}
process.stdin.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  while (buffer.length > 0) {
    const headerEnd = buffer.indexOf("\\r\\n\\r\\n");
    if (headerEnd === -1) return;
    const header = buffer.slice(0, headerEnd).toString("utf8");
    const match = /Content-Length:\\s*(\\d+)/i.exec(header);
    if (!match) {
      buffer = Buffer.alloc(0);
      return;
    }
    const size = Number.parseInt(match[1], 10);
    const start = headerEnd + 4;
    const end = start + size;
    if (buffer.length < end) return;
    const payload = buffer.slice(start, end).toString("utf8");
    buffer = buffer.slice(end);
    handleMessage(JSON.parse(payload));
  }
});
`;
  await fs.writeFile(scriptPath, source, "utf8");
  return scriptPath;
}

async function main() {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "blaude-verify-"));
  const statePaths = getProjectStatePaths(tmpDir);
  let runtime = null;

  try {
    await ensureProjectStateDir(statePaths);
    await fs.writeFile(path.join(tmpDir, "sample.txt"), "alpha\nbeta\ngamma\nbeta\n", "utf8");
    await fs.mkdir(path.join(tmpDir, "nested"), { recursive: true });
    await fs.writeFile(path.join(tmpDir, "nested", "skill.md"), "# Skill\n\nTest skill body\n", "utf8");

    runtime = {
      cwd: tmpDir,
      env: { ...process.env },
      shell: process.env.SHELL || "/bin/zsh",
      statePaths,
      skillPaths: [path.join(tmpDir, "nested")],
      mcpManager: createMcpManager({ servers: {}, cwd: tmpDir, env: { ...process.env } }),
      compactConversation: () => "conversation compacted",
      runSubAgent: async ({ task, agent }) => `subagent:${agent || "general-purpose"}:${task}`,
    };
    const tools = getAllToolDefinitions(runtime);
    const toolMap = new Map(tools.map((tool) => [tool.name, tool]));

    await verify("26 个内置工具已加载", async () => {
      assert.equal(getToolNames().length, 26);
      assert.equal(tools.length, 26);
      for (const required of ["web_fetch", "web_search", "mcp_call_tool", "team_run", "worktree_create", "task_update"]) {
        assert.ok(toolMap.has(required), `missing tool ${required}`);
      }
    });

    await verify("toolToAPISchema 输出正确 properties", async () => {
      const schema = toolToAPISchema(toolMap.get("bash"));
      assert.equal(schema.name, "bash");
      assert.ok(schema.input_schema.properties.command);
      assert.ok(schema.input_schema.required.includes("command"));
    });

    await verify("消息系统 createUserMessage/normalizeMessages 可用", async () => {
      const message = createUserMessage("hello");
      assert.equal(message.role, "user");
      assert.equal(message.content[0].type, "text");
      const normalized = normalizeMessages([message, { role: "assistant", content: "world" }]);
      assert.equal(normalized.length, 2);
      assert.equal(normalized[1].content[0].text, "world");
    });

  await verify("上下文管理支持 microcompact/snip", async () => {
    const manyMessages = Array.from({ length: 40 }, (_, index) => ({
      role: index % 2 === 0 ? "user" : "assistant",
      content: [{ type: "text", text: `message ${index} `.repeat(400) }],
    }));
    const compacted = autoCompactMessages({ messages: manyMessages, compactionNotes: [] });
    assert.ok(compacted.strategy === "microcompact" || compacted.strategy === "snip");
    assert.ok(compacted.compactionNotes.length >= 1);
    assert.equal(compacted.messages[0]?.role, "user");
    assert.ok(compacted.messages[0]?.content?.some((block) => block?.type === "text"));
  });

    await verify("Bash 工具端到端", async () => {
      const output = await toolMap.get("bash").run({ command: "printf 'hello'" });
      assert.match(output, /stdout:\nhello/);
    });

  await verify("Read 工具支持 offset/limit", async () => {
    const output = await toolMap.get("read_file").run({
      path: "sample.txt",
      offset: 1,
      limit: 2,
      });
      assert.match(output, /2 \| beta/);
    assert.match(output, /3 \| gamma/);
  });

  await verify("Read 工具读取目录时返回目录摘要而非报错", async () => {
    const output = await toolMap.get("read_file").run({
      path: "nested",
    });
    assert.match(output, /Path is a directory, not a file/);
    assert.match(output, /skill\.md/);
  });

    await verify("Glob 工具返回文件列表", async () => {
      const output = await toolMap.get("glob").run({ pattern: "*.txt", path: "." });
      assert.match(output, /sample\.txt/);
    });

    await verify("Grep 工具支持 regex 搜索", async () => {
      const output = await toolMap.get("grep").run({ pattern: "beta", path: "." });
      assert.match(output, /sample\.txt:2:beta/);
    });

    await verify("WebFetch 工具可抓取文本", async () => {
      await withHttpServer((req, res) => {
        res.writeHead(200, { "content-type": "text/plain", connection: "close" });
        res.end("hello from fetch");
      }, async (baseUrl) => {
        const output = await toolMap.get("web_fetch").run({ url: `${baseUrl}/fetch` });
        assert.match(output, /hello from fetch/);
      });
    });

    await verify("WebSearch 工具可解析搜索结果", async () => {
      await withHttpServer((req, res) => {
        res.writeHead(200, { "content-type": "text/html", connection: "close" });
        res.end('<a class="result__a" href="https://example.com/a">Example A</a><a class="result__a" href="https://example.com/b">Example B</a>');
      }, async (baseUrl) => {
        const output = await toolMap.get("web_search").run({
          query: "example",
          search_url: `${baseUrl}/search`,
        });
        assert.match(output, /Example A/);
        assert.match(output, /https:\/\/example\.com\/a/);
      });
    });

    await verify("Task 工具集可创建/更新/列出", async () => {
      await toolMap.get("task_create").run({ text: "test task" });
      await toolMap.get("task_update").run({ id: 1, status: "done" });
      const output = await toolMap.get("task_list").run({});
      assert.match(output, /\[x\] 1 test task/);
    });

    await verify("Plan 工具可持久化计划", async () => {
      await toolMap.get("plan").run({
        action: "create",
        title: "plan title",
        items: [{ step: "step one", status: "in_progress" }],
      });
      const output = await toolMap.get("plan").run({});
      assert.match(output, /plan title/);
      assert.match(output, /step one/);
    });

    await verify("Team 工具可创建/运行/删除", async () => {
      await toolMap.get("team_create").run({
        name: "review-squad",
        agent: "reviewer",
        description: "review helper",
      });
      const runOutput = await toolMap.get("team_run").run({
        name: "review-squad",
        task: "review this diff",
      });
      assert.match(runOutput, /subagent:reviewer:review this diff/);
      const deleteOutput = await toolMap.get("team_delete").run({ name: "review-squad" });
      assert.match(deleteOutput, /No teams\./);
    });

    await verify("Worktree 工具可 list/create/remove", async () => {
      const gitDir = path.join(tmpDir, "gitrepo");
      await fs.mkdir(gitDir, { recursive: true });
      await runLocalCommand("git init", {
        cwd: gitDir,
        env: process.env,
        shell: process.env.SHELL || "/bin/zsh",
      });
      await runLocalCommand("git config user.email test@example.com", {
        cwd: gitDir,
        env: process.env,
        shell: process.env.SHELL || "/bin/zsh",
      });
      await runLocalCommand("git config user.name Blaude Test", {
        cwd: gitDir,
        env: process.env,
        shell: process.env.SHELL || "/bin/zsh",
      });
      await fs.writeFile(path.join(gitDir, "README.md"), "hello\n", "utf8");
      await runLocalCommand("git add README.md && git commit -m init", {
        cwd: gitDir,
        env: process.env,
        shell: process.env.SHELL || "/bin/zsh",
        timeoutMs: 120_000,
      });
      const worktreeRuntime = { ...runtime, cwd: gitDir };
      const worktreeTools = new Map(getAllToolDefinitions(worktreeRuntime).map((tool) => [tool.name, tool]));
      const createOutput = await worktreeTools.get("worktree_create").run({
        path: "wt-review",
        branch: "wt-review",
      });
      assert.match(createOutput, /exit_code: 0/);
      const listOutput = await worktreeTools.get("worktree_list").run({});
      assert.match(listOutput, /wt-review/);
      const removeOutput = await worktreeTools.get("worktree_remove").run({
        path: "wt-review",
        force: true,
      });
      assert.match(removeOutput, /exit_code: 0/);
    });

    await verify("MCP 支持可连接/列出工具/调用", async () => {
      const serverScript = await createMcpServerScript(tmpDir);
      const manager = createMcpManager({
        servers: {
          test: {
            command: "node",
            args: [serverScript],
          },
        },
        cwd: tmpDir,
        env: { ...process.env },
      });
      try {
        const mcpRuntime = { ...runtime, mcpManager: manager };
        const mcpTools = new Map(getAllToolDefinitions(mcpRuntime).map((tool) => [tool.name, tool]));
        const servers = await mcpTools.get("mcp_list_servers").run({});
        assert.match(servers, /test: node/);
        const listOutput = await mcpTools.get("mcp_list_tools").run({ server: "test" });
        assert.match(listOutput, /ping/);
        const callOutput = await mcpTools.get("mcp_call_tool").run({
          server: "test",
          tool: "ping",
          arguments: { value: "ok" },
        });
        assert.match(callOutput, /pong:ok/);
      } finally {
        await manager.close();
      }
    });

    await verify("Session/History JSONL 可持久化并读取", async () => {
      await appendJsonlRecord(statePaths.sessionJsonlFile, {
        type: "user",
        text: "hello jsonl",
      });
      const entries = await readJsonlFile(statePaths.sessionJsonlFile, 10);
      assert.ok(entries.some((entry) => entry.text === "hello jsonl"));
      const output = await toolMap.get("session_history").run({ limit: 10 });
      assert.match(output, /hello jsonl/);
    });

    await verify("权限系统支持 canUseTool 回调", async () => {
      const config = createBaseConfig(tmpDir, {
        permissions: {
          mode: "allowlist",
          allow: ["read_file"],
        },
        canUseTool: createCanUseTool({
          mode: "allowlist",
          allow: ["read_file"],
        }),
      });
      const engine = new BlackEngine(config, createPermissionProvider("bash"), {});
      try {
        const events = [];
        for await (const event of engine.query("test permissions")) {
          events.push(event);
        }
        assert.ok(events.some((event) => event.type === "permission_denied" && event.name === "bash"));
      } finally {
        await engine.close();
      }
    });

  await verify("query() 是 AsyncGenerator 并支持 streaming", async () => {
      const config = createBaseConfig(tmpDir, {
        canUseTool: createCanUseTool({}),
  });

  await verify("分析型请求会切换到 explorer 并限制轮次", async () => {
    const config = createBaseConfig(tmpDir, {
      canUseTool: createCanUseTool({}),
    });
    const engine = new BlackEngine(config, createLoopProvider("list_dir", 20), {});
    try {
      const events = [];
      for await (const event of engine.query("分析这个仓库的代码实现")) {
        events.push(event);
      }
      const request = events.find((event) => event.type === "model_request");
      assert.equal(request?.agent, "explorer");
      assert.ok(engine.getUsageSummary().requests <= 12);
    } finally {
      await engine.close();
    }
  });
      const engine = new BlackEngine(config, createStreamingProvider(), {});
      try {
        const iterator = engine.query("hello");
        assert.equal(typeof iterator[Symbol.asyncIterator], "function");
        const events = [];
        for await (const event of iterator) {
          events.push(event);
        }
        assert.ok(events.some((event) => event.type === "assistant_delta"));
        assert.ok(events.some((event) => event.type === "assistant" && event.text === "Hello"));
      } finally {
        await engine.close();
      }
    });

    await verify("完整 Agent Loop 支持多 turn 工具调用", async () => {
      const config = createBaseConfig(tmpDir, {
        maxTurns: 12,
        canUseTool: createCanUseTool({}),
      });
      const engine = new BlackEngine(config, createLoopProvider("task_list", 11), {});
      try {
        const result = await engine.ask("loop please");
        assert.match(result, /completed in 11 turns/);
        assert.equal(engine.getUsageSummary().requests, 11);
      } finally {
        await engine.close();
      }
    });
  } finally {
    await runtime?.mcpManager?.close?.();
  }

  const failed = results.filter((result) => !result.ok);
  const width = Math.max(...results.map((result) => result.name.length));
  for (const result of results) {
    const status = result.ok ? "PASS" : "FAIL";
    const suffix = result.ok ? "" : ` :: ${result.error}`;
    console.log(`${status.padEnd(4)} ${result.name.padEnd(width)}${suffix}`);
  }

  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exitCode = 1;
});
