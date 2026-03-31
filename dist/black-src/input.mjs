import fs from "fs";
import fsp from "fs/promises";
import os from "os";
import path from "path";

const MAX_MENTION_FILES = 8;
const MAX_FILE_CHARS = 12_000;
const MAX_TOTAL_CHARS = 48_000;
const TRAILING_PUNCTUATION = /[),.;:!?]+$/;

function expandUserPath(inputPath, cwd) {
  if (!inputPath) {
    return cwd;
  }
  if (inputPath === "~") {
    return os.homedir();
  }
  if (inputPath.startsWith("~/")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return path.isAbsolute(inputPath) ? inputPath : path.resolve(cwd, inputPath);
}

function sanitizeMentionValue(value) {
  return value
    .trim()
    .replace(/^['"]+/, "")
    .replace(/['"]+$/, "")
    .replace(TRAILING_PUNCTUATION, "");
}

function isBinaryBuffer(buffer) {
  return buffer.includes(0);
}

function truncateText(text, maxChars) {
  if (text.length <= maxChars) {
    return { text, truncated: false };
  }
  return {
    text: `${text.slice(0, maxChars)}\n\n[truncated ${text.length - maxChars} chars]`,
    truncated: true,
  };
}

export function extractFileMentions(input) {
  const text = String(input ?? "");
  const regex = /(^|\s)@([^\s]+)/g;
  const mentions = [];
  const seen = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    const value = sanitizeMentionValue(match[2] ?? "");
    if (!value || seen.has(value)) {
      continue;
    }
    seen.add(value);
    mentions.push(value);
  }

  return mentions;
}

async function readMentionFile(filePath) {
  const buffer = await fsp.readFile(filePath);
  if (isBinaryBuffer(buffer)) {
    return { error: "binary" };
  }
  const content = buffer.toString("utf8");
  const truncated = truncateText(content, MAX_FILE_CHARS);
  return {
    text: truncated.text,
    truncated: truncated.truncated,
  };
}

export async function expandPromptFileMentions(input, { cwd } = {}) {
  const baseCwd = cwd || process.cwd();
  const mentions = extractFileMentions(input).slice(0, MAX_MENTION_FILES);
  if (mentions.length === 0) {
    return {
      prompt: input,
      attached: [],
      warnings: [],
    };
  }

  const attached = [];
  const warnings = [];
  let totalChars = 0;

  for (const mention of mentions) {
    const resolvedPath = expandUserPath(mention, baseCwd);
    if (!fs.existsSync(resolvedPath)) {
      warnings.push(`Skipped @${mention}: file was not found.`);
      continue;
    }

    const stat = await fsp.stat(resolvedPath);
    if (!stat.isFile()) {
      warnings.push(`Skipped @${mention}: only files can be attached.`);
      continue;
    }

    const content = await readMentionFile(resolvedPath);
    if (content.error === "binary") {
      warnings.push(`Skipped @${mention}: binary files are not supported yet.`);
      continue;
    }

    if (totalChars >= MAX_TOTAL_CHARS) {
      warnings.push(`Skipped @${mention}: mention context budget is full.`);
      continue;
    }

    const remainingChars = MAX_TOTAL_CHARS - totalChars;
    const finalContent = truncateText(content.text, remainingChars);
    totalChars += finalContent.text.length;
    attached.push({
      token: `@${mention}`,
      path: resolvedPath,
      text: finalContent.text,
      truncated: content.truncated || finalContent.truncated,
    });
  }

  if (attached.length === 0) {
    return {
      prompt: input,
      attached,
      warnings,
    };
  }

  const attachmentBlock = attached
    .map((entry) => {
      const header = `${entry.token} -> ${entry.path}${entry.truncated ? " (truncated)" : ""}`;
      return [header, "```text", entry.text, "```"].join("\n");
    })
    .join("\n\n");

  return {
    prompt: [
      String(input).trimEnd(),
      "",
      "Referenced file context:",
      attachmentBlock,
    ].join("\n"),
    attached,
    warnings,
  };
}

function buildMentionDisplayPrefix(rawPrefix) {
  if (!rawPrefix) {
    return "";
  }
  if (rawPrefix.endsWith("/")) {
    return rawPrefix;
  }
  const dirName = path.dirname(rawPrefix);
  if (dirName === "." || dirName === path.sep) {
    return rawPrefix.startsWith(path.sep) ? path.sep : "";
  }
  return `${dirName}${dirName.endsWith(path.sep) ? "" : path.sep}`;
}

export function getFileMentionCompletions(line, cwd, limit = 24) {
  const match = /(^|\s)@([^\s]*)$/.exec(line);
  if (!match) {
    return [];
  }

  const mentionPrefix = match[2] ?? "";
  const trailingPathPrefix = buildMentionDisplayPrefix(mentionPrefix);
  const partialName = mentionPrefix.endsWith(path.sep) ? "" : path.basename(mentionPrefix);
  const basePathInput = mentionPrefix.endsWith(path.sep) ? mentionPrefix : trailingPathPrefix || ".";
  const searchDir = expandUserPath(basePathInput || ".", cwd);

  if (!fs.existsSync(searchDir)) {
    return [];
  }

  let entries;
  try {
    entries = fs.readdirSync(searchDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const visibleEntries = entries
    .filter((entry) => partialName === "" || entry.name.startsWith(partialName))
    .sort((left, right) => {
      if (left.isDirectory() !== right.isDirectory()) {
        return left.isDirectory() ? -1 : 1;
      }
      return left.name.localeCompare(right.name);
    })
    .slice(0, limit);

  if (visibleEntries.length === 0) {
    return [];
  }

  const prefixStart = line.length - mentionPrefix.length - 1;
  const head = line.slice(0, prefixStart);

  return visibleEntries.map((entry) => {
    const candidate = `${trailingPathPrefix}${entry.name}${entry.isDirectory() ? path.sep : ""}`;
    return `${head}@${candidate}`;
  });
}
