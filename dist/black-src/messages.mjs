function normalizeTextBlock(text) {
  return {
    type: "text",
    text: typeof text === "string" ? text : String(text ?? ""),
  };
}

export function normalizeMessageContent(content) {
  if (Array.isArray(content)) {
    return content
      .flatMap((block) => {
        if (typeof block === "string") {
          return [normalizeTextBlock(block)];
        }
        if (block && typeof block === "object" && typeof block.type === "string") {
          return [block];
        }
        return [];
      })
      .filter(Boolean);
  }

  if (content && typeof content === "object" && typeof content.type === "string") {
    return [content];
  }

  return [normalizeTextBlock(content)];
}

export function createUserMessage(content) {
  return {
    role: "user",
    content: normalizeMessageContent(content),
  };
}

export function createAssistantMessage(content) {
  return {
    role: "assistant",
    content: normalizeMessageContent(content),
  };
}

export function createToolResultMessage(toolResults) {
  return {
    role: "user",
    content: Array.isArray(toolResults) ? toolResults : [],
  };
}

export function normalizeMessages(messages = []) {
  return messages
    .filter((message) => message && typeof message === "object")
    .map((message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: normalizeMessageContent(message.content),
    }))
    .filter((message) => Array.isArray(message.content) && message.content.length > 0);
}
