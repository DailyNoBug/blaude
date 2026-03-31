import { createUserMessage, normalizeMessages } from "./messages.mjs";

function serializeMessages(messages) {
  return messages.map((message) => JSON.stringify(message)).join("\n");
}

function summarizeMessages(messages, maxChars = 4_000) {
  const summary = messages
    .map((message) => {
      const blocks = Array.isArray(message.content) ? message.content : [];
      const text = blocks
        .map((block) => {
          if (block?.type === "text") {
            return block.text;
          }
          if (block?.type === "tool_result") {
            return `tool_result:${String(block.content ?? "")}`;
          }
          if (block?.type === "tool_use") {
            return `tool_use:${block.name}`;
          }
          return "";
        })
        .filter(Boolean)
        .join(" ");
      return `${message.role}: ${text.replace(/\s+/g, " ").trim()}`;
    })
    .filter(Boolean)
    .join("\n");

  return summary.slice(0, maxChars);
}

export function snipMessages(messages, maxChars = 120_000, minMessages = 12) {
  let total = 0;
  const kept = [];

  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    const serialized = JSON.stringify(message);
    if (kept.length >= minMessages || total + serialized.length <= maxChars) {
      kept.unshift(message);
      total += serialized.length;
      continue;
    }
    if (kept.length === 0) {
      kept.unshift(message);
      total += serialized.length;
      break;
    }
  }

  return {
    messages: kept,
    omittedCount: Math.max(0, messages.length - kept.length),
  };
}

export function microCompactMessages(messages, keepMessages = 10) {
  if (messages.length <= keepMessages) {
    return {
      messages,
      summary: "",
    };
  }

  const compacted = messages.slice(0, -keepMessages);
  return {
    messages: messages.slice(-keepMessages),
    summary: summarizeMessages(compacted),
  };
}

function mergeAdjacentMessages(messages = []) {
  const merged = [];

  for (const message of normalizeMessages(messages)) {
    const previous = merged.at(-1);
    if (previous && previous.role === message.role) {
      previous.content.push(...message.content);
      continue;
    }
    merged.push({
      role: message.role,
      content: [...message.content],
    });
  }

  return merged.filter((message) => Array.isArray(message.content) && message.content.length > 0);
}

function stabilizeMessages(messages, anchorText = "") {
  const normalized = mergeAdjacentMessages(messages);
  if (normalized.length === 0) {
    return normalized;
  }

  const first = normalized[0];
  const firstHasUserText =
    first.role === "user" && first.content.some((block) => block?.type === "text" && String(block.text ?? "").trim());

  if (firstHasUserText) {
    return normalized;
  }

  const leading = [];
  const remaining = [...normalized];
  while (remaining.length > 0) {
    const current = remaining[0];
    const hasText =
      current.role === "user" &&
      current.content.some((block) => block?.type === "text" && String(block.text ?? "").trim());
    if (hasText) {
      break;
    }
    leading.push(remaining.shift());
  }

  const summaryText = [anchorText, summarizeMessages(leading, 1_500)].filter(Boolean).join("\n\n").trim();
  const synthetic = createUserMessage(
    summaryText
      ? `Preserved conversation context:\n${summaryText}`
      : "Preserved conversation context from earlier tool turns.",
  );

  if (remaining.length > 0 && remaining[0].role === "user") {
    synthetic.content.push(...remaining[0].content);
    remaining.shift();
  }

  return mergeAdjacentMessages([synthetic, ...remaining]);
}

export function autoCompactMessages({
  messages,
  compactionNotes = [],
  softMaxChars = 90_000,
  hardMaxChars = 140_000,
  keepMessages = 10,
}) {
  const serialized = serializeMessages(messages);
  if (serialized.length <= softMaxChars) {
    return {
      messages: stabilizeMessages(messages),
      compactionNotes,
      strategy: null,
    };
  }

  if (serialized.length <= hardMaxChars) {
    const micro = microCompactMessages(messages, keepMessages);
    if (!micro.summary) {
      return {
        messages: stabilizeMessages(messages),
        compactionNotes,
        strategy: null,
      };
    }
    return {
      messages: stabilizeMessages(micro.messages, micro.summary),
      compactionNotes: [...compactionNotes, `microcompact:\n${micro.summary}`].slice(-6),
      strategy: "microcompact",
    };
  }

  const snipped = snipMessages(messages, softMaxChars, keepMessages);
  return {
    messages: stabilizeMessages(snipped.messages, `snip:\nomitted ${snipped.omittedCount} older messages`),
    compactionNotes: [...compactionNotes, `snip:\nomitted ${snipped.omittedCount} older messages`].slice(-6),
    strategy: "snip",
  };
}
