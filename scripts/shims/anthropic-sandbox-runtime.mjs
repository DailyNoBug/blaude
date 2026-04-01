import os from "os";

function clone(value) {
  return value === undefined ? value : JSON.parse(JSON.stringify(value));
}

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

  clear() {
    this.events.length = 0;
  }
}

const state = {
  config: {},
  askCallback: undefined,
  violationStore: new SandboxViolationStore(),
  initialized: false,
};

function getFsReadConfigFromState() {
  return clone(state.config.fsReadRestriction) ?? { allowOnly: [], denyWithinAllow: [] };
}

function getFsWriteConfigFromState() {
  return clone(state.config.fsWriteRestriction) ?? { allowOnly: [], denyWithinAllow: [] };
}

function getNetworkConfigFromState() {
  return clone(state.config.networkRestriction) ?? { mode: "allowAll", allowedHosts: [] };
}

function getIgnoreViolationsFromState() {
  return clone(state.config.ignoreViolations);
}

function getUnixSocketsFromState() {
  return clone(state.config.allowUnixSockets);
}

function getAllowLocalBindingFromState() {
  return state.config.allowLocalBinding;
}

function getWeakerNestedSandboxFromState() {
  return state.config.enableWeakerNestedSandbox;
}

function getProxyPortFromState() {
  return state.config.proxyPort;
}

function getSocksProxyPortFromState() {
  return state.config.socksProxyPort;
}

function getLinuxHttpSocketPathFromState() {
  return state.config.linuxHttpSocketPath;
}

function getLinuxSocksSocketPathFromState() {
  return state.config.linuxSocksSocketPath;
}

export class SandboxManager {
  constructor(config = {}) {
    this.config = config;
    this.violationStore = state.violationStore;
  }

  async run(fn) {
    return fn();
  }

  async dispose() {}

  getViolationStore() {
    return this.violationStore;
  }

  static isSupportedPlatform() {
    const platform = os.platform();
    return platform === "darwin" || platform === "linux";
  }

  static checkDependencies() {
    return { errors: [], warnings: [] };
  }

  static async initialize(config = {}, askCallback) {
    state.config = clone(config) ?? {};
    state.askCallback = askCallback;
    state.initialized = true;
  }

  static updateConfig(config = {}) {
    state.config = clone(config) ?? {};
  }

  static async reset() {
    state.config = {};
    state.askCallback = undefined;
    state.initialized = false;
    state.violationStore.clear();
  }

  static async wrapWithSandbox(command) {
    return command;
  }

  static getFsReadConfig() {
    return getFsReadConfigFromState();
  }

  static getFsWriteConfig() {
    return getFsWriteConfigFromState();
  }

  static getNetworkRestrictionConfig() {
    return getNetworkConfigFromState();
  }

  static getIgnoreViolations() {
    return getIgnoreViolationsFromState();
  }

  static getAllowUnixSockets() {
    return getUnixSocketsFromState();
  }

  static getAllowLocalBinding() {
    return getAllowLocalBindingFromState();
  }

  static getEnableWeakerNestedSandbox() {
    return getWeakerNestedSandboxFromState();
  }

  static getProxyPort() {
    return getProxyPortFromState();
  }

  static getSocksProxyPort() {
    return getSocksProxyPortFromState();
  }

  static getLinuxHttpSocketPath() {
    return getLinuxHttpSocketPathFromState();
  }

  static getLinuxSocksSocketPath() {
    return getLinuxSocksSocketPathFromState();
  }

  static async waitForNetworkInitialization() {
    return state.initialized;
  }

  static getSandboxViolationStore() {
    return state.violationStore;
  }

  static annotateStderrWithSandboxFailures(_command, stderr) {
    return stderr;
  }

  static cleanupAfterCommand() {}
}

export const SandboxRuntimeConfigSchema = {
  parse(value) {
    return value ?? {};
  },
};
