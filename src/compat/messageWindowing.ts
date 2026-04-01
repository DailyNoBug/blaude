import type { Message } from "../types/message.js";
import { tokenCountWithEstimation } from "../utils/tokens.js";

function isRealUserMessage(message: Message | undefined): boolean {
  return Boolean(
    message &&
      message.type === "user" &&
      message.isMeta !== true &&
      message.isVisibleInTranscriptOnly !== true,
  );
}

export function findUserAnchoredStartIndex(
  messages: Message[],
  preferredStart: number,
): number {
  const floor = Math.max(0, Math.min(preferredStart, messages.length - 1));
  for (let i = floor; i < messages.length; i += 1) {
    if (isRealUserMessage(messages[i])) {
      return i;
    }
  }
  return floor;
}

export function trimMessagesToTargetTokens(
  messages: Message[],
  targetTokens: number,
  options?: {
    minKeepMessages?: number;
  },
): {
  messages: Message[];
  removed: number;
  beforeTokens: number;
  afterTokens: number;
} {
  const beforeTokens = tokenCountWithEstimation(messages);
  const minKeepMessages = Math.max(1, options?.minKeepMessages ?? 12);

  if (beforeTokens <= targetTokens || messages.length <= minKeepMessages) {
    return {
      messages,
      removed: 0,
      beforeTokens,
      afterTokens: beforeTokens,
    };
  }

  const maxStart = Math.max(0, messages.length - minKeepMessages);
  let chosenStart = -1;
  let chosenTokens = beforeTokens;

  for (let start = 0; start <= maxStart; start += 1) {
    const anchored = findUserAnchoredStartIndex(messages, start);
    if (messages.length - anchored < minKeepMessages) {
      continue;
    }
    const sliced = messages.slice(anchored);
    const tokenCount = tokenCountWithEstimation(sliced);
    if (tokenCount <= targetTokens) {
      chosenStart = anchored;
      chosenTokens = tokenCount;
      break;
    }
  }

  if (chosenStart === -1) {
    chosenStart = findUserAnchoredStartIndex(messages, maxStart);
    chosenTokens = tokenCountWithEstimation(messages.slice(chosenStart));
  }

  return {
    messages: messages.slice(chosenStart),
    removed: chosenStart,
    beforeTokens,
    afterTokens: chosenTokens,
  };
}
