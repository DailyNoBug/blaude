import Anthropic from "@anthropic-ai/sdk";
import { AnthropicBedrock } from "@anthropic-ai/bedrock-sdk";
import { AnthropicFoundry } from "@anthropic-ai/foundry-sdk";
import { AnthropicVertex } from "@anthropic-ai/vertex-sdk";

import { resolveModelName } from "./models.mjs";

function isTruthy(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value !== "string") return false;
  return ["1", "true", "yes", "on"].includes(value.trim().toLowerCase());
}

export function detectProvider(env = {}) {
  if (isTruthy(env.CLAUDE_CODE_USE_BEDROCK)) {
    return "bedrock";
  }
  if (isTruthy(env.CLAUDE_CODE_USE_VERTEX)) {
    return "vertex";
  }
  if (isTruthy(env.CLAUDE_CODE_USE_FOUNDRY)) {
    return "foundry";
  }
  if (typeof env.ANTHROPIC_BASE_URL === "string" && env.ANTHROPIC_BASE_URL.trim()) {
    return "custom-base-url";
  }
  return "direct";
}

function buildBedrockOptions(env) {
  const options = {
    awsRegion: env.AWS_REGION || env.AWS_DEFAULT_REGION || "us-east-1",
  };
  if (env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY) {
    options.awsAccessKey = env.AWS_ACCESS_KEY_ID;
    options.awsSecretKey = env.AWS_SECRET_ACCESS_KEY;
    if (env.AWS_SESSION_TOKEN) {
      options.awsSessionToken = env.AWS_SESSION_TOKEN;
    }
  }
  return options;
}

function buildVertexOptions(env) {
  return {
    region: env.CLOUD_ML_REGION || env.ANTHROPIC_VERTEX_REGION || "us-central1",
    projectId: env.ANTHROPIC_VERTEX_PROJECT_ID || env.GOOGLE_CLOUD_PROJECT || null,
    accessToken: env.ANTHROPIC_VERTEX_ACCESS_TOKEN || null,
  };
}

function buildFoundryOptions(env) {
  return {
    resource: env.ANTHROPIC_FOUNDRY_RESOURCE,
    apiKey: env.ANTHROPIC_FOUNDRY_API_KEY,
    baseURL: env.ANTHROPIC_FOUNDRY_BASE_URL,
  };
}

function buildDirectOptions(env) {
  return {
    apiKey: env.ANTHROPIC_API_KEY,
    authToken: env.ANTHROPIC_AUTH_TOKEN,
    baseURL: env.ANTHROPIC_BASE_URL,
  };
}

export function createProviderContext({ env, requestedModel }) {
  const provider = detectProvider(env);
  let client;

  switch (provider) {
    case "vertex":
      client = new AnthropicVertex(buildVertexOptions(env));
      break;
    case "bedrock":
      client = new AnthropicBedrock(buildBedrockOptions(env));
      break;
    case "foundry":
      client = new AnthropicFoundry(buildFoundryOptions(env));
      break;
    case "custom-base-url":
    case "direct":
    default:
      client = new Anthropic(buildDirectOptions(env));
      break;
  }

  return {
    provider,
    client,
    model: resolveModelName(requestedModel, env, provider),
    canStream: typeof client?.messages?.stream === "function",
    async createMessage(body) {
      return client.messages.create(body);
    },
    async createStream(body) {
      if (typeof client?.messages?.stream === "function") {
        return client.messages.stream(body);
      }
      return null;
    },
  };
}

export function providerSummary(provider) {
  switch (provider) {
    case "vertex":
      return "Vertex";
    case "bedrock":
      return "Bedrock";
    case "foundry":
      return "Foundry";
    case "custom-base-url":
      return "Custom Base URL";
    default:
      return "Anthropic API";
  }
}
