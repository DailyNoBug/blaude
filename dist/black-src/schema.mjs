function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeSchemaNode(node) {
  if (!node || typeof node !== "object") {
    return {
      type: "object",
      properties: {},
      additionalProperties: false,
    };
  }

  if (typeof node.type === "string") {
    const normalized = clone(node);
    if (normalized.type === "object") {
      normalized.properties = Object.fromEntries(
        Object.entries(normalized.properties ?? {}).map(([key, value]) => [key, normalizeSchemaNode(value)]),
      );
      if (!("additionalProperties" in normalized)) {
        normalized.additionalProperties = false;
      }
    }
    if (normalized.type === "array" && normalized.items) {
      normalized.items = normalizeSchemaNode(normalized.items);
    }
    return normalized;
  }

  if (node.shape && typeof node.shape === "object") {
    return {
      type: "object",
      properties: Object.fromEntries(
        Object.entries(node.shape).map(([key, value]) => [key, normalizeSchemaNode(value)]),
      ),
      required: Array.isArray(node.required) ? node.required : [],
      additionalProperties: false,
    };
  }

  return {
    type: "object",
    properties: {},
    additionalProperties: false,
  };
}

export function toolToAPISchema(tool) {
  return {
    name: tool.name,
    description: tool.description,
    input_schema: normalizeSchemaNode(tool.input_schema),
  };
}
