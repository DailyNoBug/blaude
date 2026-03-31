#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_protocols,
  init_schema,
  init_serde,
  protocols_exports,
  schema_exports,
  serde_exports
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs
} from "./chunk-P2R73CAR.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+middleware-stack@4.2.12/node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+middleware-stack@4.2.12/node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports) {
    "use strict";
    var getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    var getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    var constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    };
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
    exports.constructStack = constructStack;
  }
});

// node_modules/.pnpm/@smithy+smithy-client@4.12.8/node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@smithy+smithy-client@4.12.8/node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports) {
    "use strict";
    var middlewareStack = require_dist_cjs2();
    var protocols = (init_protocols(), __toCommonJS(protocols_exports));
    var types = require_dist_cjs();
    var schema = (init_schema(), __toCommonJS(schema_exports));
    var serde = (init_serde(), __toCommonJS(serde_exports));
    var Client = class {
      config;
      middlewareStack = middlewareStack.constructStack();
      initConfig;
      handlers;
      constructor(config) {
        this.config = config;
        const { protocol, protocolSettings } = config;
        if (protocolSettings) {
          if (typeof protocol === "function") {
            config.protocol = new protocol(protocolSettings);
          }
        }
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
        let handler;
        if (useHandlerCache) {
          if (!this.handlers) {
            this.handlers = /* @__PURE__ */ new WeakMap();
          }
          const handlers = this.handlers;
          if (handlers.has(command.constructor)) {
            handler = handlers.get(command.constructor);
          } else {
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
            handlers.set(command.constructor, handler);
          }
        } else {
          delete this.handlers;
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
          handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
      }
    };
    var SENSITIVE_STRING$1 = "***SensitiveInformation***";
    function schemaLogFilter(schema$1, data) {
      if (data == null) {
        return data;
      }
      const ns = schema.NormalizedSchema.of(schema$1);
      if (ns.getMergedTraits().sensitive) {
        return SENSITIVE_STRING$1;
      }
      if (ns.isListSchema()) {
        const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
          return SENSITIVE_STRING$1;
        }
      } else if (ns.isMapSchema()) {
        const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
          return SENSITIVE_STRING$1;
        }
      } else if (ns.isStructSchema() && typeof data === "object") {
        const object = data;
        const newObject = {};
        for (const [member, memberNs] of ns.structIterator()) {
          if (object[member] != null) {
            newObject[member] = schemaLogFilter(memberNs, object[member]);
          }
        }
        return newObject;
      }
      return data;
    }
    var Command = class {
      middlewareStack = middlewareStack.constructStack();
      schema;
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
          logger,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [types.SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
      }
    };
    var ClassBuilder = class {
      _init = () => {
      };
      _ep = {};
      _middlewareFn = () => [];
      _commandName = "";
      _clientName = "";
      _additionalContext = {};
      _smithyContext = {};
      _inputFilterSensitiveLog = void 0;
      _outputFilterSensitiveLog = void 0;
      _serializer = null;
      _deserializer = null;
      _operationSchema;
      init(cb) {
        this._init = cb;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      sc(operation) {
        this._operationSchema = operation;
        this._smithyContext.operationSchema = operation;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          input;
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.input = input ?? {};
            closure._init(this);
            this.schema = closure._operationSchema;
          }
          resolveMiddleware(stack, configuration, options) {
            const op = closure._operationSchema;
            const input = op?.[4] ?? op?.input;
            const output = op?.[5] ?? op?.output;
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
          serialize = closure._serializer;
          deserialize = closure._deserializer;
        };
      }
    };
    var SENSITIVE_STRING = "***SensitiveInformation***";
    var createAggregatedClient = (commands, Client2, options) => {
      for (const [command, CommandCtor] of Object.entries(commands)) {
        const methodImpl = async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
      const { paginators = {}, waiters = {} } = options ?? {};
      for (const [paginatorName, paginatorFn] of Object.entries(paginators)) {
        if (Client2.prototype[paginatorName] === void 0) {
          Client2.prototype[paginatorName] = function(commandInput = {}, paginationConfiguration, ...rest) {
            return paginatorFn({
              ...paginationConfiguration,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
      for (const [waiterName, waiterFn] of Object.entries(waiters)) {
        if (Client2.prototype[waiterName] === void 0) {
          Client2.prototype[waiterName] = async function(commandInput = {}, waiterConfiguration, ...rest) {
            let config = waiterConfiguration;
            if (typeof waiterConfiguration === "number") {
              config = {
                maxWaitTime: waiterConfiguration
              };
            }
            return waiterFn({
              ...config,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
    };
    var ServiceException = class _ServiceException extends Error {
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    var decorateServiceException = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
    var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    };
    var withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var loadConfigsForDefaultMode = (mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    };
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = (version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    };
    var knownAlgorithms = Object.values(types.AlgorithmId);
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in types.AlgorithmId) {
        const algorithmId = types.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
        checksumAlgorithms.push({
          algorithmId: () => id,
          checksumConstructor: () => ChecksumCtor
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
          const id = algo.algorithmId();
          const ctor = algo.checksumConstructor();
          if (knownAlgorithms.includes(id)) {
            runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
          } else {
            runtimeConfig.checksumAlgorithms[id] = ctor;
          }
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    };
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        const id = checksumAlgorithm.algorithmId();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
        }
      });
      return runtimeConfig;
    };
    var getRetryConfiguration = (runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        }
      };
    };
    var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    };
    var getDefaultExtensionConfiguration = (runtimeConfig) => {
      return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
    };
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
    var resolveDefaultRuntimeConfig = (config) => {
      return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
    };
    var getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
    var getValueFromTextNode = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    };
    var isSerializableHeaderValue = (value) => {
      return value != null;
    };
    var NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    function map(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    var convertMap = (target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    };
    var take = (source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    };
    var mapWithFilter = (target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    var applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    var nonNullish = (_) => _ != null;
    var pass = (_) => _;
    var serializeFloat = (value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    };
    var serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");
    var _json = (obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    };
    exports.collectBody = protocols.collectBody;
    exports.extendedEncodeURIComponent = protocols.extendedEncodeURIComponent;
    exports.resolvedPath = protocols.resolvedPath;
    exports.Client = Client;
    exports.Command = Command;
    exports.NoOpLogger = NoOpLogger;
    exports.SENSITIVE_STRING = SENSITIVE_STRING;
    exports.ServiceException = ServiceException;
    exports._json = _json;
    exports.convertMap = convertMap;
    exports.createAggregatedClient = createAggregatedClient;
    exports.decorateServiceException = decorateServiceException;
    exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
    exports.getArrayIfSingleItem = getArrayIfSingleItem;
    exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
    exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
    exports.getValueFromTextNode = getValueFromTextNode;
    exports.isSerializableHeaderValue = isSerializableHeaderValue;
    exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;
    exports.map = map;
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
    exports.serializeDateTime = serializeDateTime;
    exports.serializeFloat = serializeFloat;
    exports.take = take;
    exports.throwDefaultError = throwDefaultError;
    exports.withBaseException = withBaseException;
    Object.prototype.hasOwnProperty.call(serde, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: serde["__proto__"]
    });
    Object.keys(serde).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = serde[k];
    });
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbWlkZGxld2FyZS1zdGFja0A0LjIuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbWlkZGxld2FyZS1zdGFjay9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStzbWl0aHktY2xpZW50QDQuMTIuOC9ub2RlX21vZHVsZXMvQHNtaXRoeS9zbWl0aHktY2xpZW50L2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdldEFsbEFsaWFzZXMgPSAobmFtZSwgYWxpYXNlcykgPT4ge1xuICAgIGNvbnN0IF9hbGlhc2VzID0gW107XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgX2FsaWFzZXMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgaWYgKGFsaWFzZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICBfYWxpYXNlcy5wdXNoKGFsaWFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FsaWFzZXM7XG59O1xuY29uc3QgZ2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyA9IChuYW1lLCBhbGlhc2VzKSA9PiB7XG4gICAgcmV0dXJuIGAke25hbWUgfHwgXCJhbm9ueW1vdXNcIn0ke2FsaWFzZXMgJiYgYWxpYXNlcy5sZW5ndGggPiAwID8gYCAoYS5rLmEuICR7YWxpYXNlcy5qb2luKFwiLFwiKX0pYCA6IFwiXCJ9YDtcbn07XG5jb25zdCBjb25zdHJ1Y3RTdGFjayA9ICgpID0+IHtcbiAgICBsZXQgYWJzb2x1dGVFbnRyaWVzID0gW107XG4gICAgbGV0IHJlbGF0aXZlRW50cmllcyA9IFtdO1xuICAgIGxldCBpZGVudGlmeU9uUmVzb2x2ZSA9IGZhbHNlO1xuICAgIGNvbnN0IGVudHJpZXNOYW1lU2V0ID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHNvcnQgPSAoZW50cmllcykgPT4gZW50cmllcy5zb3J0KChhLCBiKSA9PiBzdGVwV2VpZ2h0c1tiLnN0ZXBdIC0gc3RlcFdlaWdodHNbYS5zdGVwXSB8fFxuICAgICAgICBwcmlvcml0eVdlaWdodHNbYi5wcmlvcml0eSB8fCBcIm5vcm1hbFwiXSAtIHByaW9yaXR5V2VpZ2h0c1thLnByaW9yaXR5IHx8IFwibm9ybWFsXCJdKTtcbiAgICBjb25zdCByZW1vdmVCeU5hbWUgPSAodG9SZW1vdmUpID0+IHtcbiAgICAgICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmaWx0ZXJDYiA9IChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcyk7XG4gICAgICAgICAgICBpZiAoYWxpYXNlcy5pbmNsdWRlcyh0b1JlbW92ZSkpIHtcbiAgICAgICAgICAgICAgICBpc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTmFtZVNldC5kZWxldGUoYWxpYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgYWJzb2x1dGVFbnRyaWVzID0gYWJzb2x1dGVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgICAgIHJlbGF0aXZlRW50cmllcyA9IHJlbGF0aXZlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgICByZXR1cm4gaXNSZW1vdmVkO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlQnlSZWZlcmVuY2UgPSAodG9SZW1vdmUpID0+IHtcbiAgICAgICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmaWx0ZXJDYiA9IChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5Lm1pZGRsZXdhcmUgPT09IHRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGdldEFsbEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc05hbWVTZXQuZGVsZXRlKGFsaWFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGFic29sdXRlRW50cmllcyA9IGFic29sdXRlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgICByZWxhdGl2ZUVudHJpZXMgPSByZWxhdGl2ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgICAgcmV0dXJuIGlzUmVtb3ZlZDtcbiAgICB9O1xuICAgIGNvbnN0IGNsb25lVG8gPSAodG9TdGFjaykgPT4ge1xuICAgICAgICBhYnNvbHV0ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRvU3RhY2suYWRkKGVudHJ5Lm1pZGRsZXdhcmUsIHsgLi4uZW50cnkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWxhdGl2ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRvU3RhY2suYWRkUmVsYXRpdmVUbyhlbnRyeS5taWRkbGV3YXJlLCB7IC4uLmVudHJ5IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9TdGFjay5pZGVudGlmeU9uUmVzb2x2ZT8uKHN0YWNrLmlkZW50aWZ5T25SZXNvbHZlKCkpO1xuICAgICAgICByZXR1cm4gdG9TdGFjaztcbiAgICB9O1xuICAgIGNvbnN0IGV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QgPSAoZnJvbSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZE1pZGRsZXdhcmVMaXN0ID0gW107XG4gICAgICAgIGZyb20uYmVmb3JlLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuYmVmb3JlLmxlbmd0aCA9PT0gMCAmJiBlbnRyeS5hZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGFuZGVkTWlkZGxld2FyZUxpc3QucHVzaChmcm9tKTtcbiAgICAgICAgZnJvbS5hZnRlci5yZXZlcnNlKCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5iZWZvcmUubGVuZ3RoID09PSAwICYmIGVudHJ5LmFmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWlkZGxld2FyZUxpc3QucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goLi4uZXhwYW5kUmVsYXRpdmVNaWRkbGV3YXJlTGlzdChlbnRyeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkTWlkZGxld2FyZUxpc3Q7XG4gICAgfTtcbiAgICBjb25zdCBnZXRNaWRkbGV3YXJlTGlzdCA9IChkZWJ1ZyA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFJlbGF0aXZlRW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkRW50cmllc05hbWVNYXAgPSB7fTtcbiAgICAgICAgYWJzb2x1dGVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgICAgICAgYmVmb3JlOiBbXSxcbiAgICAgICAgICAgICAgICBhZnRlcjogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBnZXRBbGxBbGlhc2VzKG5vcm1hbGl6ZWRFbnRyeS5uYW1lLCBub3JtYWxpemVkRW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkRW50cmllc05hbWVNYXBbYWxpYXNdID0gbm9ybWFsaXplZEVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9ybWFsaXplZEFic29sdXRlRW50cmllcy5wdXNoKG5vcm1hbGl6ZWRFbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWxhdGl2ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRFbnRyeSA9IHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IFtdLFxuICAgICAgICAgICAgICAgIGFmdGVyOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGdldEFsbEFsaWFzZXMobm9ybWFsaXplZEVudHJ5Lm5hbWUsIG5vcm1hbGl6ZWRFbnRyeS5hbGlhc2VzKSkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRFbnRyaWVzTmFtZU1hcFthbGlhc10gPSBub3JtYWxpemVkRW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3JtYWxpemVkUmVsYXRpdmVFbnRyaWVzLnB1c2gobm9ybWFsaXplZEVudHJ5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vcm1hbGl6ZWRSZWxhdGl2ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS50b01pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b01pZGRsZXdhcmUgPSBub3JtYWxpemVkRW50cmllc05hbWVNYXBbZW50cnkudG9NaWRkbGV3YXJlXTtcbiAgICAgICAgICAgICAgICBpZiAodG9NaWRkbGV3YXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VudHJ5LnRvTWlkZGxld2FyZX0gaXMgbm90IGZvdW5kIHdoZW4gYWRkaW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Z2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhlbnRyeS5uYW1lLCBlbnRyeS5hbGlhc2VzKX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgbWlkZGxld2FyZSAke2VudHJ5LnJlbGF0aW9ufSAke2VudHJ5LnRvTWlkZGxld2FyZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LnJlbGF0aW9uID09PSBcImFmdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9NaWRkbGV3YXJlLmFmdGVyLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkucmVsYXRpb24gPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9NaWRkbGV3YXJlLmJlZm9yZS5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtYWluQ2hhaW4gPSBzb3J0KG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMpXG4gICAgICAgICAgICAubWFwKGV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QpXG4gICAgICAgICAgICAucmVkdWNlKCh3aG9sZUxpc3QsIGV4cGFuZGVkTWlkZGxld2FyZUxpc3QpID0+IHtcbiAgICAgICAgICAgIHdob2xlTGlzdC5wdXNoKC4uLmV4cGFuZGVkTWlkZGxld2FyZUxpc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHdob2xlTGlzdDtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gbWFpbkNoYWluO1xuICAgIH07XG4gICAgY29uc3Qgc3RhY2sgPSB7XG4gICAgICAgIGFkZDogKG1pZGRsZXdhcmUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBvdmVycmlkZSwgYWxpYXNlczogX2FsaWFzZXMgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICBtaWRkbGV3YXJlLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpO1xuICAgICAgICAgICAgaWYgKGFsaWFzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChhbGlhc2VzLnNvbWUoKGFsaWFzKSA9PiBlbnRyaWVzTmFtZVNldC5oYXMoYWxpYXMpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW92ZXJyaWRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbWlkZGxld2FyZSBuYW1lICcke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpfSdgKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b092ZXJyaWRlSW5kZXggPSBhYnNvbHV0ZUVudHJpZXMuZmluZEluZGV4KChlbnRyeSkgPT4gZW50cnkubmFtZSA9PT0gYWxpYXMgfHwgZW50cnkuYWxpYXNlcz8uc29tZSgoYSkgPT4gYSA9PT0gYWxpYXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b092ZXJyaWRlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b092ZXJyaWRlID0gYWJzb2x1dGVFbnRyaWVzW3RvT3ZlcnJpZGVJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9PdmVycmlkZS5zdGVwICE9PSBlbnRyeS5zdGVwIHx8IGVudHJ5LnByaW9yaXR5ICE9PSB0b092ZXJyaWRlLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7Z2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyh0b092ZXJyaWRlLm5hbWUsIHRvT3ZlcnJpZGUuYWxpYXNlcyl9XCIgbWlkZGxld2FyZSB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0b092ZXJyaWRlLnByaW9yaXR5fSBwcmlvcml0eSBpbiAke3RvT3ZlcnJpZGUuc3RlcH0gc3RlcCBjYW5ub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBiZSBvdmVycmlkZGVuIGJ5IFwiJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKX1cIiBtaWRkbGV3YXJlIHdpdGggYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VudHJ5LnByaW9yaXR5fSBwcmlvcml0eSBpbiAke2VudHJ5LnN0ZXB9IHN0ZXAuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhYnNvbHV0ZUVudHJpZXMuc3BsaWNlKHRvT3ZlcnJpZGVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNOYW1lU2V0LmFkZChhbGlhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWJzb2x1dGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRSZWxhdGl2ZVRvOiAobWlkZGxld2FyZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBvdmVycmlkZSwgYWxpYXNlczogX2FsaWFzZXMgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICBtaWRkbGV3YXJlLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpO1xuICAgICAgICAgICAgaWYgKGFsaWFzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChhbGlhc2VzLnNvbWUoKGFsaWFzKSA9PiBlbnRyaWVzTmFtZVNldC5oYXMoYWxpYXMpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW92ZXJyaWRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbWlkZGxld2FyZSBuYW1lICcke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpfSdgKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b092ZXJyaWRlSW5kZXggPSByZWxhdGl2ZUVudHJpZXMuZmluZEluZGV4KChlbnRyeSkgPT4gZW50cnkubmFtZSA9PT0gYWxpYXMgfHwgZW50cnkuYWxpYXNlcz8uc29tZSgoYSkgPT4gYSA9PT0gYWxpYXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b092ZXJyaWRlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b092ZXJyaWRlID0gcmVsYXRpdmVFbnRyaWVzW3RvT3ZlcnJpZGVJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9PdmVycmlkZS50b01pZGRsZXdhcmUgIT09IGVudHJ5LnRvTWlkZGxld2FyZSB8fCB0b092ZXJyaWRlLnJlbGF0aW9uICE9PSBlbnRyeS5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXModG9PdmVycmlkZS5uYW1lLCB0b092ZXJyaWRlLmFsaWFzZXMpfVwiIG1pZGRsZXdhcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RvT3ZlcnJpZGUucmVsYXRpb259IFwiJHt0b092ZXJyaWRlLnRvTWlkZGxld2FyZX1cIiBtaWRkbGV3YXJlIGNhbm5vdCBiZSBvdmVycmlkZGVuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYnkgXCIke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpfVwiIG1pZGRsZXdhcmUgJHtlbnRyeS5yZWxhdGlvbn0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcIiR7ZW50cnkudG9NaWRkbGV3YXJlfVwiIG1pZGRsZXdhcmUuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZUVudHJpZXMuc3BsaWNlKHRvT3ZlcnJpZGVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNOYW1lU2V0LmFkZChhbGlhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRpdmVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9uZTogKCkgPT4gY2xvbmVUbyhjb25zdHJ1Y3RTdGFjaygpKSxcbiAgICAgICAgdXNlOiAocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBwbHVnaW4uYXBwbHlUb1N0YWNrKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiAodG9SZW1vdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9SZW1vdmUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUJ5TmFtZSh0b1JlbW92ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUJ5UmVmZXJlbmNlKHRvUmVtb3ZlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQnlUYWc6ICh0b1JlbW92ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyQ2IgPSAoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhZ3MsIG5hbWUsIGFsaWFzZXM6IF9hbGlhc2VzIH0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBpZiAodGFncyAmJiB0YWdzLmluY2x1ZGVzKHRvUmVtb3ZlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlhc2VzID0gZ2V0QWxsQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllc05hbWVTZXQuZGVsZXRlKGFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFic29sdXRlRW50cmllcyA9IGFic29sdXRlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgICAgICAgcmVsYXRpdmVFbnRyaWVzID0gcmVsYXRpdmVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgICAgICAgICByZXR1cm4gaXNSZW1vdmVkO1xuICAgICAgICB9LFxuICAgICAgICBjb25jYXQ6IChmcm9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZVRvKGNvbnN0cnVjdFN0YWNrKCkpO1xuICAgICAgICAgICAgY2xvbmVkLnVzZShmcm9tKTtcbiAgICAgICAgICAgIGNsb25lZC5pZGVudGlmeU9uUmVzb2x2ZShpZGVudGlmeU9uUmVzb2x2ZSB8fCBjbG9uZWQuaWRlbnRpZnlPblJlc29sdmUoKSB8fCAoZnJvbS5pZGVudGlmeU9uUmVzb2x2ZT8uKCkgPz8gZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGx5VG9TdGFjazogY2xvbmVUbyxcbiAgICAgICAgaWRlbnRpZnk6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNaWRkbGV3YXJlTGlzdCh0cnVlKS5tYXAoKG13KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IG13LnN0ZXAgPz9cbiAgICAgICAgICAgICAgICAgICAgbXcucmVsYXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbXcudG9NaWRkbGV3YXJlO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG13Lm5hbWUsIG13LmFsaWFzZXMpICsgXCIgLSBcIiArIHN0ZXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaWRlbnRpZnlPblJlc29sdmUodG9nZ2xlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvZ2dsZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICAgICAgaWRlbnRpZnlPblJlc29sdmUgPSB0b2dnbGU7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZnlPblJlc29sdmU7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IChoYW5kbGVyLCBjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1pZGRsZXdhcmUgb2YgZ2V0TWlkZGxld2FyZUxpc3QoKVxuICAgICAgICAgICAgICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeS5taWRkbGV3YXJlKVxuICAgICAgICAgICAgICAgIC5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gbWlkZGxld2FyZShoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZGVudGlmeU9uUmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWNrLmlkZW50aWZ5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gc3RhY2s7XG59O1xuY29uc3Qgc3RlcFdlaWdodHMgPSB7XG4gICAgaW5pdGlhbGl6ZTogNSxcbiAgICBzZXJpYWxpemU6IDQsXG4gICAgYnVpbGQ6IDMsXG4gICAgZmluYWxpemVSZXF1ZXN0OiAyLFxuICAgIGRlc2VyaWFsaXplOiAxLFxufTtcbmNvbnN0IHByaW9yaXR5V2VpZ2h0cyA9IHtcbiAgICBoaWdoOiAzLFxuICAgIG5vcm1hbDogMixcbiAgICBsb3c6IDEsXG59O1xuXG5leHBvcnRzLmNvbnN0cnVjdFN0YWNrID0gY29uc3RydWN0U3RhY2s7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWlkZGxld2FyZVN0YWNrID0gcmVxdWlyZSgnQHNtaXRoeS9taWRkbGV3YXJlLXN0YWNrJyk7XG52YXIgcHJvdG9jb2xzID0gcmVxdWlyZSgnQHNtaXRoeS9jb3JlL3Byb3RvY29scycpO1xudmFyIHR5cGVzID0gcmVxdWlyZSgnQHNtaXRoeS90eXBlcycpO1xudmFyIHNjaGVtYSA9IHJlcXVpcmUoJ0BzbWl0aHkvY29yZS9zY2hlbWEnKTtcbnZhciBzZXJkZSA9IHJlcXVpcmUoJ0BzbWl0aHkvY29yZS9zZXJkZScpO1xuXG5jbGFzcyBDbGllbnQge1xuICAgIGNvbmZpZztcbiAgICBtaWRkbGV3YXJlU3RhY2sgPSBtaWRkbGV3YXJlU3RhY2suY29uc3RydWN0U3RhY2soKTtcbiAgICBpbml0Q29uZmlnO1xuICAgIGhhbmRsZXJzO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uc3QgeyBwcm90b2NvbCwgcHJvdG9jb2xTZXR0aW5ncyB9ID0gY29uZmlnO1xuICAgICAgICBpZiAocHJvdG9jb2xTZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm90b2NvbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnByb3RvY29sID0gbmV3IHByb3RvY29sKHByb3RvY29sU2V0dGluZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmQoY29tbWFuZCwgb3B0aW9uc09yQ2IsIGNiKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uc09yQ2IgIT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnNPckNiIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHR5cGVvZiBvcHRpb25zT3JDYiA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9uc09yQ2IgOiBjYjtcbiAgICAgICAgY29uc3QgdXNlSGFuZGxlckNhY2hlID0gb3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY29uZmlnLmNhY2hlTWlkZGxld2FyZSA9PT0gdHJ1ZTtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICAgIGlmICh1c2VIYW5kbGVyQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzLmhhcyhjb21tYW5kLmNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVycy5nZXQoY29tbWFuZC5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gY29tbWFuZC5yZXNvbHZlTWlkZGxld2FyZSh0aGlzLm1pZGRsZXdhcmVTdGFjaywgdGhpcy5jb25maWcsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNldChjb21tYW5kLmNvbnN0cnVjdG9yLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICAgICAgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUodGhpcy5taWRkbGV3YXJlU3RhY2ssIHRoaXMuY29uZmlnLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tbWFuZClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiBjYWxsYmFjayhudWxsLCByZXN1bHQub3V0cHV0KSwgKGVycikgPT4gY2FsbGJhY2soZXJyKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKGNvbW1hbmQpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lm91dHB1dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jb25maWc/LnJlcXVlc3RIYW5kbGVyPy5kZXN0cm95Py4oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgfVxufVxuXG5jb25zdCBTRU5TSVRJVkVfU1RSSU5HJDEgPSBcIioqKlNlbnNpdGl2ZUluZm9ybWF0aW9uKioqXCI7XG5mdW5jdGlvbiBzY2hlbWFMb2dGaWx0ZXIoc2NoZW1hJDEsIGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCBucyA9IHNjaGVtYS5Ob3JtYWxpemVkU2NoZW1hLm9mKHNjaGVtYSQxKTtcbiAgICBpZiAobnMuZ2V0TWVyZ2VkVHJhaXRzKCkuc2Vuc2l0aXZlKSB7XG4gICAgICAgIHJldHVybiBTRU5TSVRJVkVfU1RSSU5HJDE7XG4gICAgfVxuICAgIGlmIChucy5pc0xpc3RTY2hlbWEoKSkge1xuICAgICAgICBjb25zdCBpc1NlbnNpdGl2ZSA9ICEhbnMuZ2V0VmFsdWVTY2hlbWEoKS5nZXRNZXJnZWRUcmFpdHMoKS5zZW5zaXRpdmU7XG4gICAgICAgIGlmIChpc1NlbnNpdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFNFTlNJVElWRV9TVFJJTkckMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChucy5pc01hcFNjaGVtYSgpKSB7XG4gICAgICAgIGNvbnN0IGlzU2Vuc2l0aXZlID0gISFucy5nZXRLZXlTY2hlbWEoKS5nZXRNZXJnZWRUcmFpdHMoKS5zZW5zaXRpdmUgfHwgISFucy5nZXRWYWx1ZVNjaGVtYSgpLmdldE1lcmdlZFRyYWl0cygpLnNlbnNpdGl2ZTtcbiAgICAgICAgaWYgKGlzU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gU0VOU0lUSVZFX1NUUklORyQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5zLmlzU3RydWN0U2NoZW1hKCkgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gZGF0YTtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW21lbWJlciwgbWVtYmVyTnNdIG9mIG5zLnN0cnVjdEl0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3RbbWVtYmVyXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W21lbWJlcl0gPSBzY2hlbWFMb2dGaWx0ZXIobWVtYmVyTnMsIG9iamVjdFttZW1iZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuY2xhc3MgQ29tbWFuZCB7XG4gICAgbWlkZGxld2FyZVN0YWNrID0gbWlkZGxld2FyZVN0YWNrLmNvbnN0cnVjdFN0YWNrKCk7XG4gICAgc2NoZW1hO1xuICAgIHN0YXRpYyBjbGFzc0J1aWxkZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xhc3NCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJlc29sdmVNaWRkbGV3YXJlV2l0aENvbnRleHQoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMsIHsgbWlkZGxld2FyZUZuLCBjbGllbnROYW1lLCBjb21tYW5kTmFtZSwgaW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2csIG91dHB1dEZpbHRlclNlbnNpdGl2ZUxvZywgc21pdGh5Q29udGV4dCwgYWRkaXRpb25hbENvbnRleHQsIENvbW1hbmRDdG9yLCB9KSB7XG4gICAgICAgIGZvciAoY29uc3QgbXcgb2YgbWlkZGxld2FyZUZuLmJpbmQodGhpcykoQ29tbWFuZEN0b3IsIGNsaWVudFN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKG13KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFjayA9IGNsaWVudFN0YWNrLmNvbmNhdCh0aGlzLm1pZGRsZXdhcmVTdGFjayk7XG4gICAgICAgIGNvbnN0IHsgbG9nZ2VyIH0gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICBjb25zdCBoYW5kbGVyRXhlY3V0aW9uQ29udGV4dCA9IHtcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgIGNsaWVudE5hbWUsXG4gICAgICAgICAgICBjb21tYW5kTmFtZSxcbiAgICAgICAgICAgIGlucHV0RmlsdGVyU2Vuc2l0aXZlTG9nLFxuICAgICAgICAgICAgb3V0cHV0RmlsdGVyU2Vuc2l0aXZlTG9nLFxuICAgICAgICAgICAgW3R5cGVzLlNNSVRIWV9DT05URVhUX0tFWV06IHtcbiAgICAgICAgICAgICAgICBjb21tYW5kSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgLi4uc21pdGh5Q29udGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5hZGRpdGlvbmFsQ29udGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgcmV0dXJuIHN0YWNrLnJlc29sdmUoKHJlcXVlc3QpID0+IHJlcXVlc3RIYW5kbGVyLmhhbmRsZShyZXF1ZXN0LnJlcXVlc3QsIG9wdGlvbnMgfHwge30pLCBoYW5kbGVyRXhlY3V0aW9uQ29udGV4dCk7XG4gICAgfVxufVxuY2xhc3MgQ2xhc3NCdWlsZGVyIHtcbiAgICBfaW5pdCA9ICgpID0+IHsgfTtcbiAgICBfZXAgPSB7fTtcbiAgICBfbWlkZGxld2FyZUZuID0gKCkgPT4gW107XG4gICAgX2NvbW1hbmROYW1lID0gXCJcIjtcbiAgICBfY2xpZW50TmFtZSA9IFwiXCI7XG4gICAgX2FkZGl0aW9uYWxDb250ZXh0ID0ge307XG4gICAgX3NtaXRoeUNvbnRleHQgPSB7fTtcbiAgICBfaW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSB1bmRlZmluZWQ7XG4gICAgX291dHB1dEZpbHRlclNlbnNpdGl2ZUxvZyA9IHVuZGVmaW5lZDtcbiAgICBfc2VyaWFsaXplciA9IG51bGw7XG4gICAgX2Rlc2VyaWFsaXplciA9IG51bGw7XG4gICAgX29wZXJhdGlvblNjaGVtYTtcbiAgICBpbml0KGNiKSB7XG4gICAgICAgIHRoaXMuX2luaXQgPSBjYjtcbiAgICB9XG4gICAgZXAoZW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fZXAgPSBlbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG0obWlkZGxld2FyZVN1cHBsaWVyKSB7XG4gICAgICAgIHRoaXMuX21pZGRsZXdhcmVGbiA9IG1pZGRsZXdhcmVTdXBwbGllcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHMoc2VydmljZSwgb3BlcmF0aW9uLCBzbWl0aHlDb250ZXh0ID0ge30pIHtcbiAgICAgICAgdGhpcy5fc21pdGh5Q29udGV4dCA9IHtcbiAgICAgICAgICAgIHNlcnZpY2UsXG4gICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAuLi5zbWl0aHlDb250ZXh0LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYyhhZGRpdGlvbmFsQ29udGV4dCA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBuKGNsaWVudE5hbWUsIGNvbW1hbmROYW1lKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudE5hbWUgPSBjbGllbnROYW1lO1xuICAgICAgICB0aGlzLl9jb21tYW5kTmFtZSA9IGNvbW1hbmROYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZihpbnB1dEZpbHRlciA9IChfKSA9PiBfLCBvdXRwdXRGaWx0ZXIgPSAoXykgPT4gXykge1xuICAgICAgICB0aGlzLl9pbnB1dEZpbHRlclNlbnNpdGl2ZUxvZyA9IGlucHV0RmlsdGVyO1xuICAgICAgICB0aGlzLl9vdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSBvdXRwdXRGaWx0ZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXIoc2VyaWFsaXplcikge1xuICAgICAgICB0aGlzLl9zZXJpYWxpemVyID0gc2VyaWFsaXplcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlKGRlc2VyaWFsaXplcikge1xuICAgICAgICB0aGlzLl9kZXNlcmlhbGl6ZXIgPSBkZXNlcmlhbGl6ZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzYyhvcGVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uU2NoZW1hID0gb3BlcmF0aW9uO1xuICAgICAgICB0aGlzLl9zbWl0aHlDb250ZXh0Lm9wZXJhdGlvblNjaGVtYSA9IG9wZXJhdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBjbG9zdXJlID0gdGhpcztcbiAgICAgICAgbGV0IENvbW1hbmRSZWY7XG4gICAgICAgIHJldHVybiAoQ29tbWFuZFJlZiA9IGNsYXNzIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgICAgICAgICBpbnB1dDtcbiAgICAgICAgICAgIHN0YXRpYyBnZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvc3VyZS5fZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5baW5wdXRdKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQgPz8ge307XG4gICAgICAgICAgICAgICAgY2xvc3VyZS5faW5pdCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVtYSA9IGNsb3N1cmUuX29wZXJhdGlvblNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVNaWRkbGV3YXJlKHN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBjbG9zdXJlLl9vcGVyYXRpb25TY2hlbWE7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBvcD8uWzRdID8/IG9wPy5pbnB1dDtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBvcD8uWzVdID8/IG9wPy5vdXRwdXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1pZGRsZXdhcmVXaXRoQ29udGV4dChzdGFjaywgY29uZmlndXJhdGlvbiwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBDb21tYW5kQ3RvcjogQ29tbWFuZFJlZixcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxld2FyZUZuOiBjbG9zdXJlLl9taWRkbGV3YXJlRm4sXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE5hbWU6IGNsb3N1cmUuX2NsaWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmROYW1lOiBjbG9zdXJlLl9jb21tYW5kTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2c6IGNsb3N1cmUuX2lucHV0RmlsdGVyU2Vuc2l0aXZlTG9nID8/IChvcCA/IHNjaGVtYUxvZ0ZpbHRlci5iaW5kKG51bGwsIGlucHV0KSA6IChfKSA9PiBfKSxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0RmlsdGVyU2Vuc2l0aXZlTG9nOiBjbG9zdXJlLl9vdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPz8gKG9wID8gc2NoZW1hTG9nRmlsdGVyLmJpbmQobnVsbCwgb3V0cHV0KSA6IChfKSA9PiBfKSxcbiAgICAgICAgICAgICAgICAgICAgc21pdGh5Q29udGV4dDogY2xvc3VyZS5fc21pdGh5Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbENvbnRleHQ6IGNsb3N1cmUuX2FkZGl0aW9uYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VyaWFsaXplID0gY2xvc3VyZS5fc2VyaWFsaXplcjtcbiAgICAgICAgICAgIGRlc2VyaWFsaXplID0gY2xvc3VyZS5fZGVzZXJpYWxpemVyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IFNFTlNJVElWRV9TVFJJTkcgPSBcIioqKlNlbnNpdGl2ZUluZm9ybWF0aW9uKioqXCI7XG5cbmNvbnN0IGNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQgPSAoY29tbWFuZHMsIENsaWVudCwgb3B0aW9ucykgPT4ge1xuICAgIGZvciAoY29uc3QgW2NvbW1hbmQsIENvbW1hbmRDdG9yXSBvZiBPYmplY3QuZW50cmllcyhjb21tYW5kcykpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kSW1wbCA9IGFzeW5jIGZ1bmN0aW9uIChhcmdzLCBvcHRpb25zT3JDYiwgY2IpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgQ29tbWFuZEN0b3IoYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPckNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoY29tbWFuZCwgb3B0aW9uc09yQ2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPckNiICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGh0dHAgb3B0aW9ucyBidXQgZ290ICR7dHlwZW9mIG9wdGlvbnNPckNifWApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZChjb21tYW5kLCBvcHRpb25zT3JDYiB8fCB7fSwgY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZChjb21tYW5kLCBvcHRpb25zT3JDYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSAoY29tbWFuZFswXS50b0xvd2VyQ2FzZSgpICsgY29tbWFuZC5zbGljZSgxKSkucmVwbGFjZSgvQ29tbWFuZCQvLCBcIlwiKTtcbiAgICAgICAgQ2xpZW50LnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG1ldGhvZEltcGw7XG4gICAgfVxuICAgIGNvbnN0IHsgcGFnaW5hdG9ycyA9IHt9LCB3YWl0ZXJzID0ge30gfSA9IG9wdGlvbnMgPz8ge307XG4gICAgZm9yIChjb25zdCBbcGFnaW5hdG9yTmFtZSwgcGFnaW5hdG9yRm5dIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2luYXRvcnMpKSB7XG4gICAgICAgIGlmIChDbGllbnQucHJvdG90eXBlW3BhZ2luYXRvck5hbWVdID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIENsaWVudC5wcm90b3R5cGVbcGFnaW5hdG9yTmFtZV0gPSBmdW5jdGlvbiAoY29tbWFuZElucHV0ID0ge30sIHBhZ2luYXRpb25Db25maWd1cmF0aW9uLCAuLi5yZXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2luYXRvckZuKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFnaW5hdGlvbkNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogdGhpcyxcbiAgICAgICAgICAgICAgICB9LCBjb21tYW5kSW5wdXQsIC4uLnJlc3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFt3YWl0ZXJOYW1lLCB3YWl0ZXJGbl0gb2YgT2JqZWN0LmVudHJpZXMod2FpdGVycykpIHtcbiAgICAgICAgaWYgKENsaWVudC5wcm90b3R5cGVbd2FpdGVyTmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgQ2xpZW50LnByb3RvdHlwZVt3YWl0ZXJOYW1lXSA9IGFzeW5jIGZ1bmN0aW9uIChjb21tYW5kSW5wdXQgPSB7fSwgd2FpdGVyQ29uZmlndXJhdGlvbiwgLi4ucmVzdCkge1xuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB3YWl0ZXJDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2FpdGVyQ29uZmlndXJhdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXYWl0VGltZTogd2FpdGVyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRlckZuKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgfSwgY29tbWFuZElucHV0LCAuLi5yZXN0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jbGFzcyBTZXJ2aWNlRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgICRmYXVsdDtcbiAgICAkcmVzcG9uc2U7XG4gICAgJHJldHJ5YWJsZTtcbiAgICAkbWV0YWRhdGE7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zLm1lc3NhZ2UpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgICAgdGhpcy4kZmF1bHQgPSBvcHRpb25zLiRmYXVsdDtcbiAgICAgICAgdGhpcy4kbWV0YWRhdGEgPSBvcHRpb25zLiRtZXRhZGF0YTtcbiAgICB9XG4gICAgc3RhdGljIGlzSW5zdGFuY2UodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAoU2VydmljZUV4Y2VwdGlvbi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihjYW5kaWRhdGUpIHx8XG4gICAgICAgICAgICAoQm9vbGVhbihjYW5kaWRhdGUuJGZhdWx0KSAmJlxuICAgICAgICAgICAgICAgIEJvb2xlYW4oY2FuZGlkYXRlLiRtZXRhZGF0YSkgJiZcbiAgICAgICAgICAgICAgICAoY2FuZGlkYXRlLiRmYXVsdCA9PT0gXCJjbGllbnRcIiB8fCBjYW5kaWRhdGUuJGZhdWx0ID09PSBcInNlcnZlclwiKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gaW5zdGFuY2U7XG4gICAgICAgIGlmICh0aGlzID09PSBTZXJ2aWNlRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gU2VydmljZUV4Y2VwdGlvbi5pc0luc3RhbmNlKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoU2VydmljZUV4Y2VwdGlvbi5pc0luc3RhbmNlKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5uYW1lICYmIHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGluc3RhbmNlKSB8fCBjYW5kaWRhdGUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBkZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24gPSAoZXhjZXB0aW9uLCBhZGRpdGlvbnMgPSB7fSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGFkZGl0aW9ucylcbiAgICAgICAgLmZpbHRlcigoWywgdl0pID0+IHYgIT09IHVuZGVmaW5lZClcbiAgICAgICAgLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICBpZiAoZXhjZXB0aW9uW2tdID09IHVuZGVmaW5lZCB8fCBleGNlcHRpb25ba10gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbltrXSA9IHY7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLm1lc3NhZ2UgfHwgZXhjZXB0aW9uLk1lc3NhZ2UgfHwgXCJVbmtub3duRXJyb3JcIjtcbiAgICBleGNlcHRpb24ubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgZGVsZXRlIGV4Y2VwdGlvbi5NZXNzYWdlO1xuICAgIHJldHVybiBleGNlcHRpb247XG59O1xuXG5jb25zdCB0aHJvd0RlZmF1bHRFcnJvciA9ICh7IG91dHB1dCwgcGFyc2VkQm9keSwgZXhjZXB0aW9uQ3RvciwgZXJyb3JDb2RlIH0pID0+IHtcbiAgICBjb25zdCAkbWV0YWRhdGEgPSBkZXNlcmlhbGl6ZU1ldGFkYXRhKG91dHB1dCk7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9ICRtZXRhZGF0YS5odHRwU3RhdHVzQ29kZSA/ICRtZXRhZGF0YS5odHRwU3RhdHVzQ29kZSArIFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgZXhjZXB0aW9uQ3Rvcih7XG4gICAgICAgIG5hbWU6IHBhcnNlZEJvZHk/LmNvZGUgfHwgcGFyc2VkQm9keT8uQ29kZSB8fCBlcnJvckNvZGUgfHwgc3RhdHVzQ29kZSB8fCBcIlVua25vd25FcnJvclwiLFxuICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICRtZXRhZGF0YSxcbiAgICB9KTtcbiAgICB0aHJvdyBkZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24ocmVzcG9uc2UsIHBhcnNlZEJvZHkpO1xufTtcbmNvbnN0IHdpdGhCYXNlRXhjZXB0aW9uID0gKEV4Y2VwdGlvbkN0b3IpID0+IHtcbiAgICByZXR1cm4gKHsgb3V0cHV0LCBwYXJzZWRCb2R5LCBlcnJvckNvZGUgfSkgPT4ge1xuICAgICAgICB0aHJvd0RlZmF1bHRFcnJvcih7IG91dHB1dCwgcGFyc2VkQm9keSwgZXhjZXB0aW9uQ3RvcjogRXhjZXB0aW9uQ3RvciwgZXJyb3JDb2RlIH0pO1xuICAgIH07XG59O1xuY29uc3QgZGVzZXJpYWxpemVNZXRhZGF0YSA9IChvdXRwdXQpID0+ICh7XG4gICAgaHR0cFN0YXR1c0NvZGU6IG91dHB1dC5zdGF0dXNDb2RlLFxuICAgIHJlcXVlc3RJZDogb3V0cHV0LmhlYWRlcnNbXCJ4LWFtem4tcmVxdWVzdGlkXCJdID8/IG91dHB1dC5oZWFkZXJzW1wieC1hbXpuLXJlcXVlc3QtaWRcIl0gPz8gb3V0cHV0LmhlYWRlcnNbXCJ4LWFtei1yZXF1ZXN0LWlkXCJdLFxuICAgIGV4dGVuZGVkUmVxdWVzdElkOiBvdXRwdXQuaGVhZGVyc1tcIngtYW16LWlkLTJcIl0sXG4gICAgY2ZJZDogb3V0cHV0LmhlYWRlcnNbXCJ4LWFtei1jZi1pZFwiXSxcbn0pO1xuXG5jb25zdCBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlID0gKG1vZGUpID0+IHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBcInN0YW5kYXJkXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJldHJ5TW9kZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25UaW1lb3V0OiAzMTAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImluLXJlZ2lvblwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXRyeU1vZGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uVGltZW91dDogMTEwMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJjcm9zcy1yZWdpb25cIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmV0cnlNb2RlOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblRpbWVvdXQ6IDMxMDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwibW9iaWxlXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJldHJ5TW9kZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25UaW1lb3V0OiAzMDAwMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgfVxufTtcblxubGV0IHdhcm5pbmdFbWl0dGVkID0gZmFsc2U7XG5jb25zdCBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uID0gKHZlcnNpb24pID0+IHtcbiAgICBpZiAodmVyc2lvbiAmJiAhd2FybmluZ0VtaXR0ZWQgJiYgcGFyc2VJbnQodmVyc2lvbi5zdWJzdHJpbmcoMSwgdmVyc2lvbi5pbmRleE9mKFwiLlwiKSkpIDwgMTYpIHtcbiAgICAgICAgd2FybmluZ0VtaXR0ZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbmNvbnN0IGtub3duQWxnb3JpdGhtcyA9IE9iamVjdC52YWx1ZXModHlwZXMuQWxnb3JpdGhtSWQpO1xuY29uc3QgZ2V0Q2hlY2tzdW1Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBjaGVja3N1bUFsZ29yaXRobXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHR5cGVzLkFsZ29yaXRobUlkKSB7XG4gICAgICAgIGNvbnN0IGFsZ29yaXRobUlkID0gdHlwZXMuQWxnb3JpdGhtSWRbaWRdO1xuICAgICAgICBpZiAocnVudGltZUNvbmZpZ1thbGdvcml0aG1JZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IGFsZ29yaXRobUlkLFxuICAgICAgICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gcnVudGltZUNvbmZpZ1thbGdvcml0aG1JZF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtpZCwgQ2hlY2tzdW1DdG9yXSBvZiBPYmplY3QuZW50cmllcyhydW50aW1lQ29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtcyA/PyB7fSkpIHtcbiAgICAgICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IGlkLFxuICAgICAgICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gQ2hlY2tzdW1DdG9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkQ2hlY2tzdW1BbGdvcml0aG0oYWxnbykge1xuICAgICAgICAgICAgcnVudGltZUNvbmZpZy5jaGVja3N1bUFsZ29yaXRobXMgPSBydW50aW1lQ29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtcyA/PyB7fTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWxnby5hbGdvcml0aG1JZCgpO1xuICAgICAgICAgICAgY29uc3QgY3RvciA9IGFsZ28uY2hlY2tzdW1Db25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgaWYgKGtub3duQWxnb3JpdGhtcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgICAgICBydW50aW1lQ29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtc1tpZC50b1VwcGVyQ2FzZSgpXSA9IGN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW50aW1lQ29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtc1tpZF0gPSBjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goYWxnbyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrc3VtQWxnb3JpdGhtcygpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja3N1bUFsZ29yaXRobXM7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5jb25zdCByZXNvbHZlQ2hlY2tzdW1SdW50aW1lQ29uZmlnID0gKGNsaWVudENvbmZpZykgPT4ge1xuICAgIGNvbnN0IHJ1bnRpbWVDb25maWcgPSB7fTtcbiAgICBjbGllbnRDb25maWcuY2hlY2tzdW1BbGdvcml0aG1zKCkuZm9yRWFjaCgoY2hlY2tzdW1BbGdvcml0aG0pID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjaGVja3N1bUFsZ29yaXRobS5hbGdvcml0aG1JZCgpO1xuICAgICAgICBpZiAoa25vd25BbGdvcml0aG1zLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgcnVudGltZUNvbmZpZ1tpZF0gPSBjaGVja3N1bUFsZ29yaXRobS5jaGVja3N1bUNvbnN0cnVjdG9yKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcnVudGltZUNvbmZpZztcbn07XG5cbmNvbnN0IGdldFJldHJ5Q29uZmlndXJhdGlvbiA9IChydW50aW1lQ29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmV0cnlTdHJhdGVneShyZXRyeVN0cmF0ZWd5KSB7XG4gICAgICAgICAgICBydW50aW1lQ29uZmlnLnJldHJ5U3RyYXRlZ3kgPSByZXRyeVN0cmF0ZWd5O1xuICAgICAgICB9LFxuICAgICAgICByZXRyeVN0cmF0ZWd5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVDb25maWcucmV0cnlTdHJhdGVneTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmNvbnN0IHJlc29sdmVSZXRyeVJ1bnRpbWVDb25maWcgPSAocmV0cnlTdHJhdGVneUNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICBjb25zdCBydW50aW1lQ29uZmlnID0ge307XG4gICAgcnVudGltZUNvbmZpZy5yZXRyeVN0cmF0ZWd5ID0gcmV0cnlTdHJhdGVneUNvbmZpZ3VyYXRpb24ucmV0cnlTdHJhdGVneSgpO1xuICAgIHJldHVybiBydW50aW1lQ29uZmlnO1xufTtcblxuY29uc3QgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSAocnVudGltZUNvbmZpZykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGdldENoZWNrc3VtQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0UmV0cnlDb25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpKTtcbn07XG5jb25zdCBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbiA9IGdldERlZmF1bHRFeHRlbnNpb25Db25maWd1cmF0aW9uO1xuY29uc3QgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlc29sdmVDaGVja3N1bVJ1bnRpbWVDb25maWcoY29uZmlnKSwgcmVzb2x2ZVJldHJ5UnVudGltZUNvbmZpZyhjb25maWcpKTtcbn07XG5cbmNvbnN0IGdldEFycmF5SWZTaW5nbGVJdGVtID0gKG1heUJlQXJyYXkpID0+IEFycmF5LmlzQXJyYXkobWF5QmVBcnJheSkgPyBtYXlCZUFycmF5IDogW21heUJlQXJyYXldO1xuXG5jb25zdCBnZXRWYWx1ZUZyb21UZXh0Tm9kZSA9IChvYmopID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZU5hbWUgPSBcIiN0ZXh0XCI7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmpba2V5XVt0ZXh0Tm9kZU5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV1bdGV4dE5vZGVOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09IFwib2JqZWN0XCIgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gZ2V0VmFsdWVGcm9tVGV4dE5vZGUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59O1xuXG5jb25zdCBpc1NlcmlhbGl6YWJsZUhlYWRlclZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGw7XG59O1xuXG5jbGFzcyBOb09wTG9nZ2VyIHtcbiAgICB0cmFjZSgpIHsgfVxuICAgIGRlYnVnKCkgeyB9XG4gICAgaW5mbygpIHsgfVxuICAgIHdhcm4oKSB7IH1cbiAgICBlcnJvcigpIHsgfVxufVxuXG5mdW5jdGlvbiBtYXAoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGxldCB0YXJnZXQ7XG4gICAgbGV0IGZpbHRlcjtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zO1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYXJnMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldCA9IGFyZzA7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBhcmcxO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYXJnMjtcbiAgICAgICAgICAgIHJldHVybiBtYXBXaXRoRmlsdGVyKHRhcmdldCwgZmlsdGVyLCBpbnN0cnVjdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYXJnMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpbnN0cnVjdGlvbnMpKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnN0cnVjdGlvbnNba2V5XSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gaW5zdHJ1Y3Rpb25zW2tleV07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhcHBseUluc3RydWN0aW9uKHRhcmdldCwgbnVsbCwgaW5zdHJ1Y3Rpb25zLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgY29udmVydE1hcCA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh0YXJnZXQgfHwge30pKSB7XG4gICAgICAgIG91dHB1dFtrXSA9IFssIHZdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcbmNvbnN0IHRha2UgPSAoc291cmNlLCBpbnN0cnVjdGlvbnMpID0+IHtcbiAgICBjb25zdCBvdXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgYXBwbHlJbnN0cnVjdGlvbihvdXQsIHNvdXJjZSwgaW5zdHJ1Y3Rpb25zLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTtcbmNvbnN0IG1hcFdpdGhGaWx0ZXIgPSAodGFyZ2V0LCBmaWx0ZXIsIGluc3RydWN0aW9ucykgPT4ge1xuICAgIHJldHVybiBtYXAodGFyZ2V0LCBPYmplY3QuZW50cmllcyhpbnN0cnVjdGlvbnMpLnJlZHVjZSgoX2luc3RydWN0aW9ucywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgX2luc3RydWN0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBfaW5zdHJ1Y3Rpb25zW2tleV0gPSBbZmlsdGVyLCB2YWx1ZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pbnN0cnVjdGlvbnNba2V5XSA9IFtmaWx0ZXIsIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2luc3RydWN0aW9ucztcbiAgICB9LCB7fSkpO1xufTtcbmNvbnN0IGFwcGx5SW5zdHJ1Y3Rpb24gPSAodGFyZ2V0LCBzb3VyY2UsIGluc3RydWN0aW9ucywgdGFyZ2V0S2V5KSA9PiB7XG4gICAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbdGFyZ2V0S2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbiA9IFssIGluc3RydWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbZmlsdGVyID0gbm9uTnVsbGlzaCwgdmFsdWVGbiA9IHBhc3MsIHNvdXJjZUtleSA9IHRhcmdldEtleV0gPSBpbnN0cnVjdGlvbjtcbiAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSBcImZ1bmN0aW9uXCIgJiYgZmlsdGVyKHNvdXJjZVtzb3VyY2VLZXldKSkgfHwgKHR5cGVvZiBmaWx0ZXIgIT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcikpIHtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRLZXldID0gdmFsdWVGbihzb3VyY2Vbc291cmNlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgW2ZpbHRlciwgdmFsdWVdID0gaW5zdHJ1Y3Rpb25zW3RhcmdldEtleV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxldCBfdmFsdWU7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXJQYXNzZWQgPSBmaWx0ZXIgPT09IHVuZGVmaW5lZCAmJiAoX3ZhbHVlID0gdmFsdWUoKSkgIT0gbnVsbDtcbiAgICAgICAgY29uc3QgY3VzdG9tRmlsdGVyUGFzc2VkID0gKHR5cGVvZiBmaWx0ZXIgPT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcih2b2lkIDApKSB8fCAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiICYmICEhZmlsdGVyKTtcbiAgICAgICAgaWYgKGRlZmF1bHRGaWx0ZXJQYXNzZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRLZXldID0gX3ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1c3RvbUZpbHRlclBhc3NlZCkge1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEtleV0gPSB2YWx1ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBkZWZhdWx0RmlsdGVyUGFzc2VkID0gZmlsdGVyID09PSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbDtcbiAgICAgICAgY29uc3QgY3VzdG9tRmlsdGVyUGFzc2VkID0gKHR5cGVvZiBmaWx0ZXIgPT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcih2YWx1ZSkpIHx8ICh0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIgJiYgISFmaWx0ZXIpO1xuICAgICAgICBpZiAoZGVmYXVsdEZpbHRlclBhc3NlZCB8fCBjdXN0b21GaWx0ZXJQYXNzZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRLZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3Qgbm9uTnVsbGlzaCA9IChfKSA9PiBfICE9IG51bGw7XG5jb25zdCBwYXNzID0gKF8pID0+IF87XG5cbmNvbnN0IHNlcmlhbGl6ZUZsb2F0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJOYU5cIjtcbiAgICB9XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIEluZmluaXR5OlxuICAgICAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgICAgY2FzZSAtSW5maW5pdHk6XG4gICAgICAgICAgICByZXR1cm4gXCItSW5maW5pdHlcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuY29uc3Qgc2VyaWFsaXplRGF0ZVRpbWUgPSAoZGF0ZSkgPT4gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlpcIik7XG5cbmNvbnN0IF9qc29uID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5maWx0ZXIoKF8pID0+IF8gIT0gbnVsbCkubWFwKF9qc29uKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgICAgICAgIGlmIChvYmpba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IF9qc29uKG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0cy5jb2xsZWN0Qm9keSA9IHByb3RvY29scy5jb2xsZWN0Qm9keTtcbmV4cG9ydHMuZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQgPSBwcm90b2NvbHMuZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQ7XG5leHBvcnRzLnJlc29sdmVkUGF0aCA9IHByb3RvY29scy5yZXNvbHZlZFBhdGg7XG5leHBvcnRzLkNsaWVudCA9IENsaWVudDtcbmV4cG9ydHMuQ29tbWFuZCA9IENvbW1hbmQ7XG5leHBvcnRzLk5vT3BMb2dnZXIgPSBOb09wTG9nZ2VyO1xuZXhwb3J0cy5TRU5TSVRJVkVfU1RSSU5HID0gU0VOU0lUSVZFX1NUUklORztcbmV4cG9ydHMuU2VydmljZUV4Y2VwdGlvbiA9IFNlcnZpY2VFeGNlcHRpb247XG5leHBvcnRzLl9qc29uID0gX2pzb247XG5leHBvcnRzLmNvbnZlcnRNYXAgPSBjb252ZXJ0TWFwO1xuZXhwb3J0cy5jcmVhdGVBZ2dyZWdhdGVkQ2xpZW50ID0gY3JlYXRlQWdncmVnYXRlZENsaWVudDtcbmV4cG9ydHMuZGVjb3JhdGVTZXJ2aWNlRXhjZXB0aW9uID0gZGVjb3JhdGVTZXJ2aWNlRXhjZXB0aW9uO1xuZXhwb3J0cy5lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uID0gZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbjtcbmV4cG9ydHMuZ2V0QXJyYXlJZlNpbmdsZUl0ZW0gPSBnZXRBcnJheUlmU2luZ2xlSXRlbTtcbmV4cG9ydHMuZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24gPSBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbjtcbmV4cG9ydHMuZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbjtcbmV4cG9ydHMuZ2V0VmFsdWVGcm9tVGV4dE5vZGUgPSBnZXRWYWx1ZUZyb21UZXh0Tm9kZTtcbmV4cG9ydHMuaXNTZXJpYWxpemFibGVIZWFkZXJWYWx1ZSA9IGlzU2VyaWFsaXphYmxlSGVhZGVyVmFsdWU7XG5leHBvcnRzLmxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUgPSBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLnJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyA9IHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZztcbmV4cG9ydHMuc2VyaWFsaXplRGF0ZVRpbWUgPSBzZXJpYWxpemVEYXRlVGltZTtcbmV4cG9ydHMuc2VyaWFsaXplRmxvYXQgPSBzZXJpYWxpemVGbG9hdDtcbmV4cG9ydHMudGFrZSA9IHRha2U7XG5leHBvcnRzLnRocm93RGVmYXVsdEVycm9yID0gdGhyb3dEZWZhdWx0RXJyb3I7XG5leHBvcnRzLndpdGhCYXNlRXhjZXB0aW9uID0gd2l0aEJhc2VFeGNlcHRpb247XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VyZGUsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBzZXJkZVsnX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoc2VyZGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBzZXJkZVtrXTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFNLGdCQUFnQixDQUFDLE1BQU0sWUFBWTtBQUNyQyxZQUFNLFdBQVcsQ0FBQztBQUNsQixVQUFJLE1BQU07QUFDTixpQkFBUyxLQUFLLElBQUk7QUFBQSxNQUN0QjtBQUNBLFVBQUksU0FBUztBQUNULG1CQUFXLFNBQVMsU0FBUztBQUN6QixtQkFBUyxLQUFLLEtBQUs7QUFBQSxRQUN2QjtBQUFBLE1BQ0o7QUFDQSxhQUFPO0FBQUEs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akIsWUFBUSxVQUFVO0FBQ2xCLFlBQVEsYUFBYTtBQUNyQixZQUFRLG1CQUFtQjtBQUMzQixZQUFRLG1CQUFtQjtBQUMzQixZQUFRLFFBQVE7QUFDaEIsWUFBUSxhQUFhO0FBQ3JCLFlBQVEseUJBQXlCO0FBQ2pDLFlBQVEsMkJBQTJCO0FBQ25DLFlBQVEsa0NBQWtDO0FBQzFDLFlBQVEsdUJBQXVCO0FBQy9CLFlBQVEsZ0NBQWdDO0FBQ3hDLFlBQVEsbUNBQW1DO0FBQzNDLFlBQVEsdUJBQXVCO0FBQy9CLFlBQVEsNEJBQTRCO0FBQ3BDLFlBQVEsNEJBQTRCO0FBQ3BDLFlBQVEsTUFBTTtBQUNkLFlBQVEsOEJBQThCO0FBQ3RDLFlBQVEsb0JBQW9CO0FBQzVCLFlBQVEsaUJBQWlCO0FBQ3pCLFlBQVEsT0FBTztBQUNmLFlBQVEsb0JBQW9CO0FBQzVCLFlBQVEsb0JBQW9CO0FBQzVCLFdBQU8sVUFBVSxlQUFlLEtBQUssT0FBTyxXQUFXLEtBQ25ELENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLFdBQVcsS0FDMUQsT0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLE9BQU8sTUFBTSxXQUFXO0FBQUEsSUFDNUIsQ0FBQztBQUVMLFdBQU8sS0FBSyxLQUFLLEVBQUUsUUFBUSxTQUFVLEdBQUc7QUFDcEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsQ0FBQyxFQUFHLFNBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQ2xHLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2Rpc3RfY2pzIiwgImVudHJ5IiwgInJlcXVpcmVfZGlzdF9janMiLCAiQ2xpZW50IiwgImNvbW1hbmQiLCAiZmlsdGVyIl0KfQo=
