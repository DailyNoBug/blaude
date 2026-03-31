const enabled = new Set(
  String(process.env.BLAUDE_SRC_FEATURES || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean),
);

export function feature(name) {
  return enabled.has(String(name));
}
