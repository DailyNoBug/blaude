#!/usr/bin/env node

import process from "process";

import { BlackEngine } from "./engine.mjs";
import { createProviderContext, providerSummary } from "./providers.mjs";
import { resolveRuntimeConfig, parseCliArgs, summarizeRuntimeConfig } from "./settings.mjs";
import { startInteractiveTui } from "./tui.mjs";
import { BLACK_VERSION } from "./version.mjs";
import { getToolNames } from "./tools.mjs";

function printHelp() {
  process.stdout.write(
    [
      "Blaude",
      "",
      "Usage:",
      "  blaude [options]",
      "",
      "Options:",
      "  -h, --help              Show help",
      "  -v, --version           Show version",
      "  -p, --prompt TEXT       Run one prompt and exit",
      "  --settings PATH         Load settings.json (otherwise auto-detect workspace/home Claude/Cursor settings)",
      "  --model NAME            Override model",
      "  --agent NAME            Override default agent",
      "  --cwd PATH              Override working directory",
      "  --system TEXT           Append extra system instructions",
      "  --max-turns N           Override max model turns per user request",
      "  --dry-run               Print resolved config and exit",
      "  --list-agents           List agents and exit",
      "  --list-tools            List tools and exit",
      "  --debug                 Enable debug mode",
      "  --no-color              Disable ANSI colors",
      "",
      "Examples:",
      "  blaude",
      "  blaude --settings ~/.claude/settings.json",
      "  blaude -p \"Analyze this repo and explain the architecture\"",
      "  blaude --agent reviewer -p \"Review the staged diff\"",
    ].join("\n"),
  );
}

async function main() {
  const cliOptions = parseCliArgs(process.argv.slice(2));

  if (cliOptions.help) {
    printHelp();
    return;
  }

  if (cliOptions.version) {
    process.stdout.write(`${BLACK_VERSION}\n`);
    return;
  }

  const config = resolveRuntimeConfig(cliOptions);
  const providerContext = createProviderContext({
    env: config.env,
    requestedModel: config.model,
  });

  if (cliOptions.dryRun) {
    process.stdout.write(
      `${JSON.stringify(summarizeRuntimeConfig(config, providerContext), null, 2)}\n`,
    );
    return;
  }

  if (cliOptions.listAgents) {
    for (const agent of config.agentCatalog.values()) {
      process.stdout.write(`${agent.name}: ${agent.description || "No description"}\n`);
    }
    return;
  }

  if (cliOptions.listTools) {
    process.stdout.write(`${getToolNames().join("\n")}\n`);
    return;
  }

  const engine = new BlackEngine(config, providerContext, {});

  try {
    if (cliOptions.prompt !== null) {
      if (cliOptions.debug) {
        engine.runtimeHooks.onEvent = (event) => {
          if (event.type === "assistant") {
            return;
          }
          process.stderr.write(`${JSON.stringify(event)}\n`);
        };
      }
      const result = await engine.ask(cliOptions.prompt);
      process.stdout.write(`${result}\n`);
      return;
    }

    process.stdout.write(
      `Starting Blaude with ${providerSummary(providerContext.provider)} and model ${providerContext.model}\n`,
    );
    await startInteractiveTui(engine, config, providerContext);
  } finally {
    await engine.close();
  }
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.stack || error.message : String(error)}\n`);
  process.exitCode = 1;
});
