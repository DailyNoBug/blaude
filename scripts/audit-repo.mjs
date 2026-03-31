import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SRC_ROOT = path.join(ROOT, "src");
const FILE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"];
const LOCAL_SPEC_RE =
  /(?:import\s+(?:[^'"]+?\s+from\s+)?|export\s+[^'"]*?from\s+|require\()\s*["']([^"']+)["']/g;

function walkFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, out);
    } else if (/\.[cm]?[jt]sx?$/.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function readSource(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function getCandidates(basePath) {
  const candidates = new Set([basePath]);
  for (const ext of FILE_EXTENSIONS) {
    candidates.add(basePath + ext);
    candidates.add(path.join(basePath, "index" + ext));
  }

  const parsed = path.parse(basePath);
  if (FILE_EXTENSIONS.includes(parsed.ext)) {
    const withoutExt = path.join(parsed.dir, parsed.name);
    candidates.add(withoutExt);
    for (const ext of FILE_EXTENSIONS) {
      candidates.add(withoutExt + ext);
      candidates.add(path.join(withoutExt, "index" + ext));
    }
  }

  return [...candidates];
}

function resolveLocalImport(fromFile, specifier) {
  if (!specifier.startsWith(".")) {
    return null;
  }

  const basePath = path.resolve(path.dirname(fromFile), specifier);
  for (const candidate of getCandidates(basePath)) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return false;
}

function classifyMissingPath(projectRelativePath) {
  if (
    projectRelativePath.includes("/types/") ||
    /\/types\.[^/]+$/.test(projectRelativePath) ||
    projectRelativePath.endsWith("/types")
  ) {
    return "types";
  }
  if (projectRelativePath.includes("/entrypoints/sdk/")) {
    return "generated-sdk";
  }
  if (projectRelativePath.includes("/services/contextCollapse/")) {
    return "context-collapse";
  }
  if (projectRelativePath.includes("/services/compact/")) {
    return "compact";
  }
  if (projectRelativePath.includes("/proactive/")) {
    return "proactive";
  }
  if (projectRelativePath.includes("/commands/")) {
    return "commands";
  }
  if (projectRelativePath.includes("/tools/")) {
    return "tools";
  }
  if (projectRelativePath.includes("/assistant/")) {
    return "assistant";
  }
  if (projectRelativePath.includes("/ssh/")) {
    return "ssh";
  }
  if (projectRelativePath.includes("/tasks/")) {
    return "tasks";
  }
  return "other";
}

function formatRelative(projectPath) {
  return projectPath.replaceAll(path.sep, "/");
}

function analyze() {
  if (!fs.existsSync(SRC_ROOT)) {
    throw new Error(`Missing src directory at ${SRC_ROOT}`);
  }

  const sourceFiles = walkFiles(SRC_ROOT);
  const externalDeps = new Map();
  const privateExternalDeps = new Map();
  const missingLocals = new Map();
  const missingByCategory = new Map();
  let bunSpecificImportCount = 0;
  let bunGlobalUsageCount = 0;

  for (const filePath of sourceFiles) {
    const source = readSource(filePath);
    bunSpecificImportCount += (source.match(/from ['"]bun:/g) || []).length;
    bunGlobalUsageCount += (source.match(/\bBun\./g) || []).length;

    let match;
    while ((match = LOCAL_SPEC_RE.exec(source))) {
      const specifier = match[1];
      if (specifier.startsWith(".") || specifier.startsWith("src/")) {
        if (specifier.startsWith(".")) {
          const resolved = resolveLocalImport(filePath, specifier);
          if (resolved === false) {
            const projectRelative = formatRelative(
              path.relative(ROOT, path.resolve(path.dirname(filePath), specifier)),
            );
            missingLocals.set(
              projectRelative,
              (missingLocals.get(projectRelative) || 0) + 1,
            );
          }
        }
        continue;
      }

      if (specifier.startsWith("node:")) {
        continue;
      }

      externalDeps.set(specifier, (externalDeps.get(specifier) || 0) + 1);
      if (specifier.startsWith("@ant/") || specifier.startsWith("@anthropic-ai/")) {
        privateExternalDeps.set(
          specifier,
          (privateExternalDeps.get(specifier) || 0) + 1,
        );
      }
    }
  }

  for (const [missingPath, count] of missingLocals.entries()) {
    const category = classifyMissingPath(missingPath);
    missingByCategory.set(category, (missingByCategory.get(category) || 0) + count);
  }

  return {
    sourceFileCount: sourceFiles.length,
    uniqueExternalDeps: [...externalDeps.entries()].sort((a, b) =>
      a[0].localeCompare(b[0]),
    ),
    privateExternalDeps: [...privateExternalDeps.entries()].sort((a, b) =>
      a[0].localeCompare(b[0]),
    ),
    uniqueMissingLocals: [...missingLocals.entries()].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    ),
    missingByCategory: [...missingByCategory.entries()].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    ),
    bunSpecificImportCount,
    bunGlobalUsageCount,
  };
}

function printTop(label, rows, limit = 20) {
  console.log(label);
  if (rows.length === 0) {
    console.log("  (none)");
    return;
  }

  for (const [name, count] of rows.slice(0, limit)) {
    console.log(`  ${String(count).padStart(3, " ")}  ${name}`);
  }
}

function main() {
  const report = analyze();

  console.log("Claude Code recovery audit");
  console.log("==========================");
  console.log(`Source files: ${report.sourceFileCount}`);
  console.log(`Unique external deps: ${report.uniqueExternalDeps.length}`);
  console.log(`Unique missing local modules: ${report.uniqueMissingLocals.length}`);
  console.log(`bun: imports: ${report.bunSpecificImportCount}`);
  console.log(`Bun.* usages: ${report.bunGlobalUsageCount}`);
  console.log("");

  printTop("Missing locals by category", report.missingByCategory, 20);
  console.log("");
  printTop("Top missing local modules", report.uniqueMissingLocals, 40);
  console.log("");
  printTop("Private external deps", report.privateExternalDeps, 40);
  console.log("");
  printTop("Top external deps", report.uniqueExternalDeps, 40);
  console.log("");

  const hardBlockers = [
    report.uniqueMissingLocals.length > 0
      ? "missing local source modules"
      : null,
    report.privateExternalDeps.length > 0
      ? "private Anthropic packages"
      : null,
    report.bunSpecificImportCount > 0 || report.bunGlobalUsageCount > 0
      ? "Bun-specific runtime features"
      : null,
  ].filter(Boolean);

  console.log("Hard blockers");
  if (hardBlockers.length === 0) {
    console.log("  none detected");
  } else {
    for (const blocker of hardBlockers) {
      console.log(`  - ${blocker}`);
    }
  }
}

main();
