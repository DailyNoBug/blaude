function normalizeToolList(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
}

export function createCanUseTool(permissionConfig = {}) {
  const mode = typeof permissionConfig.mode === "string" ? permissionConfig.mode : "allow";
  const allow = new Set(normalizeToolList(permissionConfig.allow));
  const deny = new Set(normalizeToolList(permissionConfig.deny));

  return async function canUseTool({ toolName }) {
    if (deny.has(toolName)) {
      return {
        allowed: false,
        reason: `Tool ${toolName} is denied by permissions.deny.`,
      };
    }

    if (mode === "deny-all") {
      return allow.has(toolName)
        ? { allowed: true }
        : {
            allowed: false,
            reason: `Tool ${toolName} is blocked because permissions.mode=deny-all.`,
          };
    }

    if (mode === "allowlist") {
      return allow.has(toolName)
        ? { allowed: true }
        : {
            allowed: false,
            reason: `Tool ${toolName} is not present in permissions.allow.`,
          };
    }

    return { allowed: true };
  };
}
