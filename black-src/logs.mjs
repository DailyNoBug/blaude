import fs from "fs";
import path from "path";

export function createLogStore({ maxEntries = 300, verbose = true } = {}) {
  const state = {
    maxEntries,
    verbose,
    entries: [],
    persistPath: null,
  };

  return {
    setPersistPath(nextPath) {
      state.persistPath = typeof nextPath === "string" && nextPath.trim() ? nextPath : null;
      if (state.persistPath) {
        fs.mkdirSync(path.dirname(state.persistPath), { recursive: true });
      }
    },
    add(entry) {
      const normalized = {
        time: new Date().toISOString(),
        level: entry.level ?? "info",
        category: entry.category ?? "runtime",
        message: entry.message ?? "",
      };
      state.entries.push(normalized);
      if (state.entries.length > state.maxEntries) {
        state.entries = state.entries.slice(-state.maxEntries);
      }
      if (state.persistPath) {
        fs.appendFileSync(state.persistPath, `${formatLogEntry(normalized)}\n`, "utf8");
      }
      return normalized;
    },
    recent(limit = 30) {
      return state.entries.slice(-limit);
    },
    clear() {
      state.entries = [];
      if (state.persistPath) {
        fs.writeFileSync(state.persistPath, "", "utf8");
      }
    },
    setVerbose(nextValue) {
      state.verbose = !!nextValue;
    },
    isVerbose() {
      return state.verbose;
    },
    snapshot() {
      return {
        verbose: state.verbose,
        size: state.entries.length,
        persistPath: state.persistPath,
      };
    },
  };
}

export function formatLogEntry(entry) {
  const timestamp = typeof entry.time === "string" ? entry.time.slice(11, 19) : "--:--:--";
  const category = String(entry.category ?? "runtime").padEnd(7, " ");
  return `${timestamp} ${category} ${entry.message ?? ""}`.trimEnd();
}
