export const DEFAULT_MODELS = {
  direct: "claude-sonnet-4-5-20250929",
  "custom-base-url": "claude-sonnet-4-5-20250929",
  vertex: "claude-3-5-sonnet-v2@20241022",
  bedrock: "anthropic.claude-3-5-sonnet-20241022-v2:0",
  foundry: "claude-3-5-sonnet-20241022",
};

export function resolveDefaultModel(provider) {
  return DEFAULT_MODELS[provider] ?? DEFAULT_MODELS.direct;
}

const MODEL_ALIAS_ENV_KEYS = {
  haiku: ["ANTHROPIC_DEFAULT_HAIKU_MODEL", "ANTHROPIC_MODEL"],
  sonnet: ["ANTHROPIC_DEFAULT_SONNET_MODEL", "ANTHROPIC_MODEL"],
  opus: ["ANTHROPIC_DEFAULT_OPUS_MODEL", "ANTHROPIC_MODEL"],
};

export function resolveModelName(requestedModel, env = {}, provider = "direct") {
  if (typeof requestedModel === "string" && requestedModel.trim()) {
    const normalized = requestedModel.trim();
    const alias = normalized.toLowerCase();

    if (MODEL_ALIAS_ENV_KEYS[alias]) {
      for (const envKey of MODEL_ALIAS_ENV_KEYS[alias]) {
        if (typeof env[envKey] === "string" && env[envKey].trim()) {
          return env[envKey].trim();
        }
      }
      return resolveDefaultModel(provider);
    }

    if (alias === "default" || alias === "auto") {
      if (typeof env.ANTHROPIC_MODEL === "string" && env.ANTHROPIC_MODEL.trim()) {
        return env.ANTHROPIC_MODEL.trim();
      }
      return resolveDefaultModel(provider);
    }

    return normalized;
  }

  if (typeof env.ANTHROPIC_MODEL === "string" && env.ANTHROPIC_MODEL.trim()) {
    return env.ANTHROPIC_MODEL.trim();
  }

  return resolveDefaultModel(provider);
}
