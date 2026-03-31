export class SandboxViolationStore {
  constructor() {
    this.events = [];
  }

  add(event) {
    this.events.push(event);
  }

  list() {
    return [...this.events];
  }
}

export class SandboxManager {
  constructor(config = {}) {
    this.config = config;
    this.violationStore = new SandboxViolationStore();
  }

  async run(fn) {
    return fn();
  }

  async dispose() {}

  getViolationStore() {
    return this.violationStore;
  }
}

export const SandboxRuntimeConfigSchema = {
  parse(value) {
    return value ?? {};
  },
};
