#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  EXIT_PLAN_MODE_V2_TOOL_NAME,
  createAssistantMessage,
  getPlan,
  init_constants3 as init_constants,
  init_messages2 as init_messages,
  init_plans
} from "./chunk-FMU4URRE.mjs";
import {
  init_strip_ansi,
  stripAnsi
} from "./chunk-OGGCTXYU.mjs";
import {
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import {
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/messages/mappers.ts
import { randomUUID } from "crypto";
function toInternalMessages(messages) {
  return messages.flatMap((message) => {
    switch (message.type) {
      case "assistant":
        return [
          {
            type: "assistant",
            message: message.message,
            uuid: message.uuid,
            requestId: void 0,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
      case "user":
        return [
          {
            type: "user",
            message: message.message,
            uuid: message.uuid ?? randomUUID(),
            timestamp: message.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(),
            isMeta: message.isSynthetic
          }
        ];
      case "system":
        if (message.subtype === "compact_boundary") {
          const compactMsg = message;
          return [
            {
              type: "system",
              content: "Conversation compacted",
              level: "info",
              subtype: "compact_boundary",
              compactMetadata: fromSDKCompactMetadata(
                compactMsg.compact_metadata
              ),
              uuid: message.uuid,
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }
          ];
        }
        return [];
      default:
        return [];
    }
  });
}
function toSDKCompactMetadata(meta) {
  const seg = meta.preservedSegment;
  return {
    trigger: meta.trigger,
    pre_tokens: meta.preTokens,
    ...seg && {
      preserved_segment: {
        head_uuid: seg.headUuid,
        anchor_uuid: seg.anchorUuid,
        tail_uuid: seg.tailUuid
      }
    }
  };
}
function fromSDKCompactMetadata(meta) {
  const seg = meta.preserved_segment;
  return {
    trigger: meta.trigger,
    preTokens: meta.pre_tokens,
    ...seg && {
      preservedSegment: {
        headUuid: seg.head_uuid,
        anchorUuid: seg.anchor_uuid,
        tailUuid: seg.tail_uuid
      }
    }
  };
}
function toSDKMessages(messages) {
  return messages.flatMap((message) => {
    switch (message.type) {
      case "assistant":
        return [
          {
            type: "assistant",
            message: normalizeAssistantMessageForSDK(message),
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: message.uuid,
            error: message.error
          }
        ];
      case "user":
        return [
          {
            type: "user",
            message: message.message,
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: message.uuid,
            timestamp: message.timestamp,
            isSynthetic: message.isMeta || message.isVisibleInTranscriptOnly,
            // Structured tool output (not the string content sent to the
            // model — the full Output object). Rides the protobuf catchall
            // so web viewers can read things like BriefTool's file_uuid
            // without it polluting model context.
            ...message.toolUseResult !== void 0 ? { tool_use_result: message.toolUseResult } : {}
          }
        ];
      case "system":
        if (message.subtype === "compact_boundary" && message.compactMetadata) {
          return [
            {
              type: "system",
              subtype: "compact_boundary",
              session_id: getSessionId(),
              uuid: message.uuid,
              compact_metadata: toSDKCompactMetadata(message.compactMetadata)
            }
          ];
        }
        if (message.subtype === "local_command" && (message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || message.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`))) {
          return [
            localCommandOutputToSDKAssistantMessage(
              message.content,
              message.uuid
            )
          ];
        }
        return [];
      default:
        return [];
    }
  });
}
function localCommandOutputToSDKAssistantMessage(rawContent, uuid) {
  const cleanContent = stripAnsi(rawContent).replace(/<local-command-stdout>([\s\S]*?)<\/local-command-stdout>/, "$1").replace(/<local-command-stderr>([\s\S]*?)<\/local-command-stderr>/, "$1").trim();
  const synthetic = createAssistantMessage({ content: cleanContent });
  return {
    type: "assistant",
    message: synthetic.message,
    parent_tool_use_id: null,
    session_id: getSessionId(),
    uuid
  };
}
function toSDKRateLimitInfo(limits) {
  if (!limits) {
    return void 0;
  }
  return {
    status: limits.status,
    ...limits.resetsAt !== void 0 && { resetsAt: limits.resetsAt },
    ...limits.rateLimitType !== void 0 && {
      rateLimitType: limits.rateLimitType
    },
    ...limits.utilization !== void 0 && {
      utilization: limits.utilization
    },
    ...limits.overageStatus !== void 0 && {
      overageStatus: limits.overageStatus
    },
    ...limits.overageResetsAt !== void 0 && {
      overageResetsAt: limits.overageResetsAt
    },
    ...limits.overageDisabledReason !== void 0 && {
      overageDisabledReason: limits.overageDisabledReason
    },
    ...limits.isUsingOverage !== void 0 && {
      isUsingOverage: limits.isUsingOverage
    },
    ...limits.surpassedThreshold !== void 0 && {
      surpassedThreshold: limits.surpassedThreshold
    }
  };
}
function normalizeAssistantMessageForSDK(message) {
  const content = message.message.content;
  if (!Array.isArray(content)) {
    return message.message;
  }
  const normalizedContent = content.map((block) => {
    if (block.type !== "tool_use") {
      return block;
    }
    if (block.name === EXIT_PLAN_MODE_V2_TOOL_NAME) {
      const plan = getPlan();
      if (plan) {
        return {
          ...block,
          input: { ...block.input, plan }
        };
      }
    }
    return block;
  });
  return {
    ...message.message,
    content: normalizedContent
  };
}
var init_mappers = __esm({
  "src/utils/messages/mappers.ts"() {
    init_state();
    init_xml();
    init_constants();
    init_strip_ansi();
    init_messages();
    init_plans();
  }
});

export {
  toInternalMessages,
  toSDKCompactMetadata,
  fromSDKCompactMetadata,
  toSDKMessages,
  localCommandOutputToSDKAssistantMessage,
  toSDKRateLimitInfo,
  init_mappers
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL21lc3NhZ2VzL21hcHBlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgQmV0YUNvbnRlbnRCbG9jayB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL3Jlc291cmNlcy9iZXRhL21lc3NhZ2VzL21lc3NhZ2VzLm1qcydcbmltcG9ydCB7IHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQge1xuICBMT0NBTF9DT01NQU5EX1NUREVSUl9UQUcsXG4gIExPQ0FMX0NPTU1BTkRfU1RET1VUX1RBRyxcbn0gZnJvbSAnc3JjL2NvbnN0YW50cy94bWwuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFNES0Fzc2lzdGFudE1lc3NhZ2UsXG4gIFNES0NvbXBhY3RCb3VuZGFyeU1lc3NhZ2UsXG4gIFNES01lc3NhZ2UsXG4gIFNES1JhdGVMaW1pdEluZm8sXG59IGZyb20gJ3NyYy9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBDbGF1ZGVBSUxpbWl0cyB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9jbGF1ZGVBaUxpbWl0cy5qcydcbmltcG9ydCB7IEVYSVRfUExBTl9NT0RFX1YyX1RPT0xfTkFNRSB9IGZyb20gJ3NyYy90b29scy9FeGl0UGxhbk1vZGVUb29sL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXNzaXN0YW50TWVzc2FnZSxcbiAgQ29tcGFjdE1ldGFkYXRhLFxuICBNZXNzYWdlLFxufSBmcm9tICdzcmMvdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHsgRGVlcEltbXV0YWJsZSB9IGZyb20gJ3NyYy90eXBlcy91dGlscy5qcydcbmltcG9ydCBzdHJpcEFuc2kgZnJvbSAnc3RyaXAtYW5zaSdcbmltcG9ydCB7IGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlcy5qcydcbmltcG9ydCB7IGdldFBsYW4gfSBmcm9tICcuLi9wbGFucy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50ZXJuYWxNZXNzYWdlcyhcbiAgbWVzc2FnZXM6IHJlYWRvbmx5IERlZXBJbW11dGFibGU8U0RLTWVzc2FnZT5bXSxcbik6IE1lc3NhZ2VbXSB7XG4gIHJldHVybiBtZXNzYWdlcy5mbGF0TWFwKG1lc3NhZ2UgPT4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdhc3Npc3RhbnQnOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhc3Npc3RhbnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgcmVxdWVzdElkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB9IGFzIE1lc3NhZ2UsXG4gICAgICAgIF1cbiAgICAgIGNhc2UgJ3VzZXInOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd1c2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCA/PyByYW5kb21VVUlEKCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2UudGltZXN0YW1wID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIGlzTWV0YTogbWVzc2FnZS5pc1N5bnRoZXRpYyxcbiAgICAgICAgICB9IGFzIE1lc3NhZ2UsXG4gICAgICAgIF1cbiAgICAgIGNhc2UgJ3N5c3RlbSc6XG4gICAgICAgIC8vIEhhbmRsZSBjb21wYWN0IGJvdW5kYXJ5IG1lc3NhZ2VzXG4gICAgICAgIGlmIChtZXNzYWdlLnN1YnR5cGUgPT09ICdjb21wYWN0X2JvdW5kYXJ5Jykge1xuICAgICAgICAgIGNvbnN0IGNvbXBhY3RNc2cgPSBtZXNzYWdlXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N5c3RlbScsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdDb252ZXJzYXRpb24gY29tcGFjdGVkJyxcbiAgICAgICAgICAgICAgbGV2ZWw6ICdpbmZvJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2NvbXBhY3RfYm91bmRhcnknLFxuICAgICAgICAgICAgICBjb21wYWN0TWV0YWRhdGE6IGZyb21TREtDb21wYWN0TWV0YWRhdGEoXG4gICAgICAgICAgICAgICAgY29tcGFjdE1zZy5jb21wYWN0X21ldGFkYXRhLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gIH0pXG59XG5cbnR5cGUgU0RLQ29tcGFjdE1ldGFkYXRhID0gU0RLQ29tcGFjdEJvdW5kYXJ5TWVzc2FnZVsnY29tcGFjdF9tZXRhZGF0YSddXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1NES0NvbXBhY3RNZXRhZGF0YShcbiAgbWV0YTogQ29tcGFjdE1ldGFkYXRhLFxuKTogU0RLQ29tcGFjdE1ldGFkYXRhIHtcbiAgY29uc3Qgc2VnID0gbWV0YS5wcmVzZXJ2ZWRTZWdtZW50XG4gIHJldHVybiB7XG4gICAgdHJpZ2dlcjogbWV0YS50cmlnZ2VyLFxuICAgIHByZV90b2tlbnM6IG1ldGEucHJlVG9rZW5zLFxuICAgIC4uLihzZWcgJiYge1xuICAgICAgcHJlc2VydmVkX3NlZ21lbnQ6IHtcbiAgICAgICAgaGVhZF91dWlkOiBzZWcuaGVhZFV1aWQsXG4gICAgICAgIGFuY2hvcl91dWlkOiBzZWcuYW5jaG9yVXVpZCxcbiAgICAgICAgdGFpbF91dWlkOiBzZWcudGFpbFV1aWQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9XG59XG5cbi8qKlxuICogU2hhcmVkIFNES1x1MjE5MmludGVybmFsIGNvbXBhY3RfbWV0YWRhdGEgY29udmVydGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNES0NvbXBhY3RNZXRhZGF0YShcbiAgbWV0YTogU0RLQ29tcGFjdE1ldGFkYXRhLFxuKTogQ29tcGFjdE1ldGFkYXRhIHtcbiAgY29uc3Qgc2VnID0gbWV0YS5wcmVzZXJ2ZWRfc2VnbWVudFxuICByZXR1cm4ge1xuICAgIHRyaWdnZXI6IG1ldGEudHJpZ2dlcixcbiAgICBwcmVUb2tlbnM6IG1ldGEucHJlX3Rva2VucyxcbiAgICAuLi4oc2VnICYmIHtcbiAgICAgIHByZXNlcnZlZFNlZ21lbnQ6IHtcbiAgICAgICAgaGVhZFV1aWQ6IHNlZy5oZWFkX3V1aWQsXG4gICAgICAgIGFuY2hvclV1aWQ6IHNlZy5hbmNob3JfdXVpZCxcbiAgICAgICAgdGFpbFV1aWQ6IHNlZy50YWlsX3V1aWQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1NES01lc3NhZ2VzKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBTREtNZXNzYWdlW10ge1xuICByZXR1cm4gbWVzc2FnZXMuZmxhdE1hcCgobWVzc2FnZSk6IFNES01lc3NhZ2VbXSA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Fzc2lzdGFudCc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2Fzc2lzdGFudCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBub3JtYWxpemVBc3Npc3RhbnRNZXNzYWdlRm9yU0RLKG1lc3NhZ2UpLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICAgICAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG51bGwsXG4gICAgICAgICAgICB1dWlkOiBtZXNzYWdlLnV1aWQsXG4gICAgICAgICAgICBlcnJvcjogbWVzc2FnZS5lcnJvcixcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgIHBhcmVudF90b29sX3VzZV9pZDogbnVsbCxcbiAgICAgICAgICAgIHV1aWQ6IG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbWVzc2FnZS50aW1lc3RhbXAsXG4gICAgICAgICAgICBpc1N5bnRoZXRpYzogbWVzc2FnZS5pc01ldGEgfHwgbWVzc2FnZS5pc1Zpc2libGVJblRyYW5zY3JpcHRPbmx5LFxuICAgICAgICAgICAgLy8gU3RydWN0dXJlZCB0b29sIG91dHB1dCAobm90IHRoZSBzdHJpbmcgY29udGVudCBzZW50IHRvIHRoZVxuICAgICAgICAgICAgLy8gbW9kZWwgXHUyMDE0IHRoZSBmdWxsIE91dHB1dCBvYmplY3QpLiBSaWRlcyB0aGUgcHJvdG9idWYgY2F0Y2hhbGxcbiAgICAgICAgICAgIC8vIHNvIHdlYiB2aWV3ZXJzIGNhbiByZWFkIHRoaW5ncyBsaWtlIEJyaWVmVG9vbCdzIGZpbGVfdXVpZFxuICAgICAgICAgICAgLy8gd2l0aG91dCBpdCBwb2xsdXRpbmcgbW9kZWwgY29udGV4dC5cbiAgICAgICAgICAgIC4uLihtZXNzYWdlLnRvb2xVc2VSZXN1bHQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHsgdG9vbF91c2VfcmVzdWx0OiBtZXNzYWdlLnRvb2xVc2VSZXN1bHQgfVxuICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICBjYXNlICdzeXN0ZW0nOlxuICAgICAgICBpZiAobWVzc2FnZS5zdWJ0eXBlID09PSAnY29tcGFjdF9ib3VuZGFyeScgJiYgbWVzc2FnZS5jb21wYWN0TWV0YWRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2NvbXBhY3RfYm91bmRhcnknIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBzZXNzaW9uX2lkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICAgICAgICAgICAgdXVpZDogbWVzc2FnZS51dWlkLFxuICAgICAgICAgICAgICBjb21wYWN0X21ldGFkYXRhOiB0b1NES0NvbXBhY3RNZXRhZGF0YShtZXNzYWdlLmNvbXBhY3RNZXRhZGF0YSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICAvLyBPbmx5IGNvbnZlcnQgbG9jYWxfY29tbWFuZCBtZXNzYWdlcyB0aGF0IGNvbnRhaW4gYWN0dWFsIGNvbW1hbmRcbiAgICAgICAgLy8gb3V0cHV0IChzdGRvdXQvc3RkZXJyKS4gVGhlIHNhbWUgc3VidHlwZSBpcyBhbHNvIHVzZWQgZm9yIGNvbW1hbmRcbiAgICAgICAgLy8gaW5wdXQgbWV0YWRhdGEgKGUuZy4gPGNvbW1hbmQtbmFtZT4uLi48L2NvbW1hbmQtbmFtZT4pIHdoaWNoIG11c3RcbiAgICAgICAgLy8gbm90IGxlYWsgdG8gdGhlIFJDIHdlYiBVSS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1lc3NhZ2Uuc3VidHlwZSA9PT0gJ2xvY2FsX2NvbW1hbmQnICYmXG4gICAgICAgICAgKG1lc3NhZ2UuY29udGVudC5pbmNsdWRlcyhgPCR7TE9DQUxfQ09NTUFORF9TVERPVVRfVEFHfT5gKSB8fFxuICAgICAgICAgICAgbWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKGA8JHtMT0NBTF9DT01NQU5EX1NUREVSUl9UQUd9PmApKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbG9jYWxDb21tYW5kT3V0cHV0VG9TREtBc3Npc3RhbnRNZXNzYWdlKFxuICAgICAgICAgICAgICBtZXNzYWdlLmNvbnRlbnQsXG4gICAgICAgICAgICAgIG1lc3NhZ2UudXVpZCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGxvY2FsIGNvbW1hbmQgb3V0cHV0IChlLmcuIC92b2ljZSwgL2Nvc3QpIHRvIGEgd2VsbC1mb3JtZWRcbiAqIFNES0Fzc2lzdGFudE1lc3NhZ2Ugc28gZG93bnN0cmVhbSBjb25zdW1lcnMgKG1vYmlsZSBhcHBzLCBzZXNzaW9uLWluZ3Jlc3NcbiAqIHYxYWxwaGFcdTIxOTJ2MWJldGEgY29udmVydGVyKSBjYW4gcGFyc2UgaXQgd2l0aG91dCBzY2hlbWEgY2hhbmdlcy5cbiAqXG4gKiBFbWl0dGVkIGFzIGFzc2lzdGFudCBpbnN0ZWFkIG9mIHRoZSBkZWRpY2F0ZWQgU0RLTG9jYWxDb21tYW5kT3V0cHV0TWVzc2FnZVxuICogYmVjYXVzZSB0aGUgc3lzdGVtL2xvY2FsX2NvbW1hbmRfb3V0cHV0IHN1YnR5cGUgaXMgdW5rbm93biB0bzpcbiAqICAgLSBtb2JpbGUtYXBwcyBBbmRyb2lkIFNka01lc3NhZ2VUeXBlcy5rdCAobm8gbG9jYWxfY29tbWFuZF9vdXRwdXQgaGFuZGxlcilcbiAqICAgLSBhcGktZ28gc2Vzc2lvbi1pbmdyZXNzIGNvbnZlcnRTeXN0ZW1FdmVudCAob25seSBpbml0L2NvbXBhY3RfYm91bmRhcnkpXG4gKiBTZWU6IGh0dHBzOi8vYW50aHJvcGljLnNlbnRyeS5pby9pc3N1ZXMvNzI2NjI5OTI0OC8gKEFuZHJvaWQpXG4gKlxuICogU3RyaXBzIEFOU0kgKGUuZy4gY2hhbGsuZGltKCkgaW4gL2Nvc3QpIHRoZW4gdW53cmFwcyB0aGUgWE1MIHdyYXBwZXIgdGFncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsQ29tbWFuZE91dHB1dFRvU0RLQXNzaXN0YW50TWVzc2FnZShcbiAgcmF3Q29udGVudDogc3RyaW5nLFxuICB1dWlkOiBVVUlELFxuKTogU0RLQXNzaXN0YW50TWVzc2FnZSB7XG4gIGNvbnN0IGNsZWFuQ29udGVudCA9IHN0cmlwQW5zaShyYXdDb250ZW50KVxuICAgIC5yZXBsYWNlKC88bG9jYWwtY29tbWFuZC1zdGRvdXQ+KFtcXHNcXFNdKj8pPFxcL2xvY2FsLWNvbW1hbmQtc3Rkb3V0Pi8sICckMScpXG4gICAgLnJlcGxhY2UoLzxsb2NhbC1jb21tYW5kLXN0ZGVycj4oW1xcc1xcU10qPyk8XFwvbG9jYWwtY29tbWFuZC1zdGRlcnI+LywgJyQxJylcbiAgICAudHJpbSgpXG4gIC8vIGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2UgYnVpbGRzIGEgY29tcGxldGUgQVBJQXNzaXN0YW50TWVzc2FnZSB3aXRoIGlkLCB0eXBlLFxuICAvLyBtb2RlbDogU1lOVEhFVElDX01PREVMLCByb2xlLCBzdG9wX3JlYXNvbiwgdXNhZ2UgXHUyMDE0IGFsbCBmaWVsZHMgcmVxdWlyZWQgYnlcbiAgLy8gZG93bnN0cmVhbSBkZXNlcmlhbGl6ZXJzIGxpa2UgQW5kcm9pZCdzIFNka0Fzc2lzdGFudE1lc3NhZ2UuXG4gIGNvbnN0IHN5bnRoZXRpYyA9IGNyZWF0ZUFzc2lzdGFudE1lc3NhZ2UoeyBjb250ZW50OiBjbGVhbkNvbnRlbnQgfSlcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnYXNzaXN0YW50JyxcbiAgICBtZXNzYWdlOiBzeW50aGV0aWMubWVzc2FnZSxcbiAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG51bGwsXG4gICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgdXVpZCxcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgaW50ZXJuYWwgQ2xhdWRlQUlMaW1pdHMgdG8gdGhlIFNESy1mYWNpbmcgU0RLUmF0ZUxpbWl0SW5mbyB0eXBlLFxuICogc3RyaXBwaW5nIGludGVybmFsLW9ubHkgZmllbGRzIGxpa2UgdW5pZmllZFJhdGVMaW1pdEZhbGxiYWNrQXZhaWxhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TREtSYXRlTGltaXRJbmZvKFxuICBsaW1pdHM6IENsYXVkZUFJTGltaXRzIHwgdW5kZWZpbmVkLFxuKTogU0RLUmF0ZUxpbWl0SW5mbyB8IHVuZGVmaW5lZCB7XG4gIGlmICghbGltaXRzKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBsaW1pdHMuc3RhdHVzLFxuICAgIC4uLihsaW1pdHMucmVzZXRzQXQgIT09IHVuZGVmaW5lZCAmJiB7IHJlc2V0c0F0OiBsaW1pdHMucmVzZXRzQXQgfSksXG4gICAgLi4uKGxpbWl0cy5yYXRlTGltaXRUeXBlICE9PSB1bmRlZmluZWQgJiYge1xuICAgICAgcmF0ZUxpbWl0VHlwZTogbGltaXRzLnJhdGVMaW1pdFR5cGUsXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy51dGlsaXphdGlvbiAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgIHV0aWxpemF0aW9uOiBsaW1pdHMudXRpbGl6YXRpb24sXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy5vdmVyYWdlU3RhdHVzICE9PSB1bmRlZmluZWQgJiYge1xuICAgICAgb3ZlcmFnZVN0YXR1czogbGltaXRzLm92ZXJhZ2VTdGF0dXMsXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy5vdmVyYWdlUmVzZXRzQXQgIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICBvdmVyYWdlUmVzZXRzQXQ6IGxpbWl0cy5vdmVyYWdlUmVzZXRzQXQsXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy5vdmVyYWdlRGlzYWJsZWRSZWFzb24gIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICBvdmVyYWdlRGlzYWJsZWRSZWFzb246IGxpbWl0cy5vdmVyYWdlRGlzYWJsZWRSZWFzb24sXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy5pc1VzaW5nT3ZlcmFnZSAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgIGlzVXNpbmdPdmVyYWdlOiBsaW1pdHMuaXNVc2luZ092ZXJhZ2UsXG4gICAgfSksXG4gICAgLi4uKGxpbWl0cy5zdXJwYXNzZWRUaHJlc2hvbGQgIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICBzdXJwYXNzZWRUaHJlc2hvbGQ6IGxpbWl0cy5zdXJwYXNzZWRUaHJlc2hvbGQsXG4gICAgfSksXG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRvb2wgaW5wdXRzIGluIGFzc2lzdGFudCBtZXNzYWdlIGNvbnRlbnQgZm9yIFNESyBjb25zdW1wdGlvbi5cbiAqIFNwZWNpZmljYWxseSBpbmplY3RzIHBsYW4gY29udGVudCBpbnRvIEV4aXRQbGFuTW9kZVYyIHRvb2wgaW5wdXRzIHNpbmNlXG4gKiB0aGUgVjIgdG9vbCByZWFkcyBwbGFuIGZyb20gZmlsZSBpbnN0ZWFkIG9mIGlucHV0LCBidXQgU0RLIHVzZXJzIGV4cGVjdFxuICogdG9vbF9pbnB1dC5wbGFuIHRvIGV4aXN0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBc3Npc3RhbnRNZXNzYWdlRm9yU0RLKFxuICBtZXNzYWdlOiBBc3Npc3RhbnRNZXNzYWdlLFxuKTogQXNzaXN0YW50TWVzc2FnZVsnbWVzc2FnZSddIHtcbiAgY29uc3QgY29udGVudCA9IG1lc3NhZ2UubWVzc2FnZS5jb250ZW50XG4gIGlmICghQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgIHJldHVybiBtZXNzYWdlLm1lc3NhZ2VcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWRDb250ZW50ID0gY29udGVudC5tYXAoKGJsb2NrKTogQmV0YUNvbnRlbnRCbG9jayA9PiB7XG4gICAgaWYgKGJsb2NrLnR5cGUgIT09ICd0b29sX3VzZScpIHtcbiAgICAgIHJldHVybiBibG9ja1xuICAgIH1cblxuICAgIGlmIChibG9jay5uYW1lID09PSBFWElUX1BMQU5fTU9ERV9WMl9UT09MX05BTUUpIHtcbiAgICAgIGNvbnN0IHBsYW4gPSBnZXRQbGFuKClcbiAgICAgIGlmIChwbGFuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYmxvY2ssXG4gICAgICAgICAgaW5wdXQ6IHsgLi4uKGJsb2NrLmlucHV0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSwgcGxhbiB9LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5tZXNzYWdlLm1lc3NhZ2UsXG4gICAgY29udGVudDogbm9ybWFsaXplZENvbnRlbnQsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUyxrQkFBNkI7QUF3Qi9CLFNBQVMsbUJBQ2QsVUFDVztBQUNYLFNBQU8sU0FBUyxRQUFRLGFBQVc7QUFDakMsWUFBUSxRQUFRLE1BQU07QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFNBQVMsUUFBUTtBQUFBLFlBQ2pCLE1BQU0sUUFBUTtBQUFBLFlBQ2QsV0FBVztBQUFBLFlBQ1gsWUFBVyxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLFVBQ3BDO0FBQUEsUUFDRjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixTQUFTLFFBQVE7QUFBQSxZQUNqQixNQUFNLFFBQVEsUUFBUSxXQUFXO0FBQUEsWUFDakMsV0FBVyxRQUFRLGNBQWEsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxZQUN2RCxRQUFRLFFBQVE7QUFBQSxVQUNsQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLEtBQUs7QUFFSCxZQUFJLFFBQVEsWUFBWSxvQkFBb0I7QUFDMUMsZ0JBQU0sYUFBYTtBQUNuQixpQkFBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxjQUNULE9BQU87QUFBQSxjQUNQLFNBQVM7QUFBQSxjQUNULGlCQUFpQjtBQUFBLGdCQUNmLFdBQVc7QUFBQSxjQUNiO0FBQUEsY0FDQSxNQUFNLFFBQVE7QUFBQSxjQUNkLFlBQVcsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxZQUNwQztBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsZUFBTyxDQUFDO0FBQUEsTUFDVjtBQUNFLGVBQU8sQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUlPLFNBQVMscUJBQ2QsTUFDb0I7QUFDcEIsUUFBTSxNQUFNLEtBQUs7QUFDakIsU0FBTztBQUFBLElBQ0wsU0FBUyxLQUFLO0FBQUEsSUFDZCxZQUFZLEtBQUs7QUFBQSxJQUNqQixHQUFJLE9BQU87QUFBQSxNQUNULG1CQUFtQjtBQUFBLFFBQ2pCLFdBQVcsSUFBSTtBQUFBLFFBQ2YsYUFBYSxJQUFJO0FBQUEsUUFDakIsV0FBVyxJQUFJO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBS08sU0FBUyx1QkFDZCxNQUNpQjtBQUNqQixRQUFNLE1BQU0sS0FBSztBQUNqQixTQUFPO0FBQUEsSUFDTCxTQUFTLEtBQUs7QUFBQSxJQUNkLFdBQVcsS0FBSztBQUFBLElBQ2hCLEdBQUksT0FBTztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsUUFDaEIsVUFBVSxJQUFJO0FBQUEsUUFDZCxZQUFZLElBQUk7QUFBQSxRQUNoQixVQUFVLElBQUk7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxTQUFTLGNBQWMsVUFBbUM7QUFDL0QsU0FBTyxTQUFTLFFBQVEsQ0FBQyxZQUEwQjtBQUNqRCxZQUFRLFFBQVEsTUFBTTtBQUFBLE1BQ3BCLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sU0FBUyxnQ0FBZ0MsT0FBTztBQUFBLFlBQ2hELFlBQVksYUFBYTtBQUFBLFlBQ3pCLG9CQUFvQjtBQUFBLFlBQ3BCLE1BQU0sUUFBUTtBQUFBLFlBQ2QsT0FBTyxRQUFRO0FBQUEsVUFDakI7QUFBQSxRQUNGO0FBQUEsTUFDRixLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFNBQVMsUUFBUTtBQUFBLFlBQ2pCLFlBQVksYUFBYTtBQUFBLFlBQ3pCLG9CQUFvQjtBQUFBLFlBQ3BCLE1BQU0sUUFBUTtBQUFBLFlBQ2QsV0FBVyxRQUFRO0FBQUEsWUFDbkIsYUFBYSxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLdkMsR0FBSSxRQUFRLGtCQUFrQixTQUMxQixFQUFFLGlCQUFpQixRQUFRLGNBQWMsSUFDekMsQ0FBQztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsTUFDRixLQUFLO0FBQ0gsWUFBSSxRQUFRLFlBQVksc0JBQXNCLFFBQVEsaUJBQWlCO0FBQ3JFLGlCQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLGNBQ1QsWUFBWSxhQUFhO0FBQUEsY0FDekIsTUFBTSxRQUFRO0FBQUEsY0FDZCxrQkFBa0IscUJBQXFCLFFBQVEsZUFBZTtBQUFBLFlBQ2hFO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFLQSxZQUNFLFFBQVEsWUFBWSxvQkFDbkIsUUFBUSxRQUFRLFNBQVMsSUFBSSx3QkFBd0IsR0FBRyxLQUN2RCxRQUFRLFFBQVEsU0FBUyxJQUFJLHdCQUF3QixHQUFHLElBQzFEO0FBQ0EsaUJBQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsWUFDVjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsZUFBTyxDQUFDO0FBQUEsTUFDVjtBQUNFLGVBQU8sQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGLENBQUM7QUFDSDtBQWVPLFNBQVMsd0NBQ2QsWUFDQSxNQUNxQjtBQUNyQixRQUFNLGVBQWUsVUFBVSxVQUFVLEVBQ3RDLFFBQVEsNERBQTRELElBQUksRUFDeEUsUUFBUSw0REFBNEQsSUFBSSxFQUN4RSxLQUFLO0FBSVIsUUFBTSxZQUFZLHVCQUF1QixFQUFFLFNBQVMsYUFBYSxDQUFDO0FBQ2xFLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVMsVUFBVTtBQUFBLElBQ25CLG9CQUFvQjtBQUFBLElBQ3BCLFlBQVksYUFBYTtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUNGO0FBTU8sU0FBUyxtQkFDZCxRQUM4QjtBQUM5QixNQUFJLENBQUMsUUFBUTtBQUNYLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUFBLElBQ0wsUUFBUSxPQUFPO0FBQUEsSUFDZixHQUFJLE9BQU8sYUFBYSxVQUFhLEVBQUUsVUFBVSxPQUFPLFNBQVM7QUFBQSxJQUNqRSxHQUFJLE9BQU8sa0JBQWtCLFVBQWE7QUFBQSxNQUN4QyxlQUFlLE9BQU87QUFBQSxJQUN4QjtBQUFBLElBQ0EsR0FBSSxPQUFPLGdCQUFnQixVQUFhO0FBQUEsTUFDdEMsYUFBYSxPQUFPO0FBQUEsSUFDdEI7QUFBQSxJQUNBLEdBQUksT0FBTyxrQkFBa0IsVUFBYTtBQUFBLE1BQ3hDLGVBQWUsT0FBTztBQUFBLElBQ3hCO0FBQUEsSUFDQSxHQUFJLE9BQU8sb0JBQW9CLFVBQWE7QUFBQSxNQUMxQyxpQkFBaUIsT0FBTztBQUFBLElBQzFCO0FBQUEsSUFDQSxHQUFJLE9BQU8sMEJBQTBCLFVBQWE7QUFBQSxNQUNoRCx1QkFBdUIsT0FBTztBQUFBLElBQ2hDO0FBQUEsSUFDQSxHQUFJLE9BQU8sbUJBQW1CLFVBQWE7QUFBQSxNQUN6QyxnQkFBZ0IsT0FBTztBQUFBLElBQ3pCO0FBQUEsSUFDQSxHQUFJLE9BQU8sdUJBQXVCLFVBQWE7QUFBQSxNQUM3QyxvQkFBb0IsT0FBTztBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUNGO0FBUUEsU0FBUyxnQ0FDUCxTQUM2QjtBQUM3QixRQUFNLFVBQVUsUUFBUSxRQUFRO0FBQ2hDLE1BQUksQ0FBQyxNQUFNLFFBQVEsT0FBTyxHQUFHO0FBQzNCLFdBQU8sUUFBUTtBQUFBLEVBQ2pCO0FBRUEsUUFBTSxvQkFBb0IsUUFBUSxJQUFJLENBQUMsVUFBNEI7QUFDakUsUUFBSSxNQUFNLFNBQVMsWUFBWTtBQUM3QixhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQUksTUFBTSxTQUFTLDZCQUE2QjtBQUM5QyxZQUFNLE9BQU8sUUFBUTtBQUNyQixVQUFJLE1BQU07QUFDUixlQUFPO0FBQUEsVUFDTCxHQUFHO0FBQUEsVUFDSCxPQUFPLEVBQUUsR0FBSSxNQUFNLE9BQW1DLEtBQUs7QUFBQSxRQUM3RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsV0FBTztBQUFBLEVBQ1QsQ0FBQztBQUVELFNBQU87QUFBQSxJQUNMLEdBQUcsUUFBUTtBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ1g7QUFDRjtBQWpTQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
