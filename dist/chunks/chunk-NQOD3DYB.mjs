#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_protocols,
  requestBuilder,
  require_dist_cjs5 as require_dist_cjs3
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-HVZS5VUZ.mjs";
import {
  require_dist_cjs
} from "./chunk-P2R73CAR.mjs";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/getSmithyContext.js
var import_types, getSmithyContext;
var init_getSmithyContext = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    import_types = __toESM(require_dist_cjs());
    getSmithyContext = (context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {});
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
var import_util_middleware, httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    import_util_middleware = __toESM(require_dist_cjs3());
    init_resolveAuthOptions();
    httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "serializerMiddleware"
    };
    getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeMiddlewareOptions);
      }
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var import_protocol_http, import_util_middleware2, defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs2());
    import_util_middleware2 = __toESM(require_dist_cjs3());
    defaultErrorHandler = (signingProperties) => (error) => {
      throw error;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {
    };
    httpSigningMiddleware = (config) => (next, context) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware2.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    };
    get = (fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js
var init_requestBuilder = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js"() {
    init_protocols();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/setFeature.js"() {
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      authSchemes = /* @__PURE__ */ new Map();
      constructor(config) {
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var import_protocol_http2, import_types2, HttpApiKeyAuthSigner;
var init_httpApiKeyAuth = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    import_protocol_http2 = __toESM(require_dist_cjs2());
    import_types2 = __toESM(require_dist_cjs());
    HttpApiKeyAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = import_protocol_http2.HttpRequest.clone(httpRequest);
        if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
        } else {
          throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`");
        }
        return clonedRequest;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var import_protocol_http3, HttpBearerAuthSigner;
var init_httpBearerAuth = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    import_protocol_http3 = __toESM(require_dist_cjs2());
    HttpBearerAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = import_protocol_http3.HttpRequest.clone(httpRequest);
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
      return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    };
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider,
  requestBuilder: () => requestBuilder,
  setFeature: () => setFeature
});
var init_dist_es = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider();
    init_createPaginator();
    init_requestBuilder();
    init_setFeature();
    init_util_identity_and_auth();
  }
});

export {
  getSmithyContext,
  httpAuthSchemeMiddleware,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  httpAuthSchemeMiddlewareOptions,
  getHttpAuthSchemePlugin,
  httpSigningMiddleware,
  httpSigningMiddlewareOptions,
  getHttpSigningPlugin,
  normalizeProvider,
  createPaginator,
  setFeature,
  DefaultIdentityProviderConfig,
  HttpApiKeyAuthSigner,
  HttpBearerAuthSigner,
  NoAuthSigner,
  createIsIdentityExpiredFunction,
  EXPIRATION_MS,
  isIdentityExpired,
  doesIdentityRequireRefresh,
  memoizeIdentityProvider,
  dist_es_exports,
  init_dist_es
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9nZXRTbWl0aHlDb250ZXh0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvbWlkZGxld2FyZS1odHRwLWF1dGgtc2NoZW1lL3Jlc29sdmVBdXRoT3B0aW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL21pZGRsZXdhcmUtaHR0cC1hdXRoLXNjaGVtZS9odHRwQXV0aFNjaGVtZU1pZGRsZXdhcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtYXV0aC1zY2hlbWUvZ2V0SHR0cEF1dGhTY2hlbWVFbmRwb2ludFJ1bGVTZXRQbHVnaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtYXV0aC1zY2hlbWUvZ2V0SHR0cEF1dGhTY2hlbWVQbHVnaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtYXV0aC1zY2hlbWUvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtc2lnbmluZy9odHRwU2lnbmluZ01pZGRsZXdhcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtc2lnbmluZy9nZXRIdHRwU2lnbmluZ01pZGRsZXdhcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9taWRkbGV3YXJlLWh0dHAtc2lnbmluZy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL25vcm1hbGl6ZVByb3ZpZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvcGFnaW5hdGlvbi9jcmVhdGVQYWdpbmF0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9yZXF1ZXN0LWJ1aWxkZXIvcmVxdWVzdEJ1aWxkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zZXRGZWF0dXJlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvdXRpbC1pZGVudGl0eS1hbmQtYXV0aC9EZWZhdWx0SWRlbnRpdHlQcm92aWRlckNvbmZpZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3V0aWwtaWRlbnRpdHktYW5kLWF1dGgvaHR0cEF1dGhTY2hlbWVzL2h0dHBBcGlLZXlBdXRoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvdXRpbC1pZGVudGl0eS1hbmQtYXV0aC9odHRwQXV0aFNjaGVtZXMvaHR0cEJlYXJlckF1dGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy91dGlsLWlkZW50aXR5LWFuZC1hdXRoL2h0dHBBdXRoU2NoZW1lcy9ub0F1dGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy91dGlsLWlkZW50aXR5LWFuZC1hdXRoL2h0dHBBdXRoU2NoZW1lcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3V0aWwtaWRlbnRpdHktYW5kLWF1dGgvbWVtb2l6ZUlkZW50aXR5UHJvdmlkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy91dGlsLWlkZW50aXR5LWFuZC1hdXRoL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFNNSVRIWV9DT05URVhUX0tFWSB9IGZyb20gXCJAc21pdGh5L3R5cGVzXCI7XG5leHBvcnQgY29uc3QgZ2V0U21pdGh5Q29udGV4dCA9IChjb250ZXh0KSA9PiBjb250ZXh0W1NNSVRIWV9DT05URVhUX0tFWV0gfHwgKGNvbnRleHRbU01JVEhZX0NPTlRFWFRfS0VZXSA9IHt9KTtcbiIsICJleHBvcnQgY29uc3QgcmVzb2x2ZUF1dGhPcHRpb25zID0gKGNhbmRpZGF0ZUF1dGhPcHRpb25zLCBhdXRoU2NoZW1lUHJlZmVyZW5jZSkgPT4ge1xuICAgIGlmICghYXV0aFNjaGVtZVByZWZlcmVuY2UgfHwgYXV0aFNjaGVtZVByZWZlcmVuY2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVBdXRoT3B0aW9ucztcbiAgICB9XG4gICAgY29uc3QgcHJlZmVycmVkQXV0aE9wdGlvbnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByZWZlcnJlZFNjaGVtZU5hbWUgb2YgYXV0aFNjaGVtZVByZWZlcmVuY2UpIHtcbiAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGVBdXRoT3B0aW9uIG9mIGNhbmRpZGF0ZUF1dGhPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBjYW5kaWRhdGVBdXRoU2NoZW1lTmFtZSA9IGNhbmRpZGF0ZUF1dGhPcHRpb24uc2NoZW1lSWQuc3BsaXQoXCIjXCIpWzFdO1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZUF1dGhTY2hlbWVOYW1lID09PSBwcmVmZXJyZWRTY2hlbWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQXV0aE9wdGlvbnMucHVzaChjYW5kaWRhdGVBdXRoT3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZUF1dGhPcHRpb24gb2YgY2FuZGlkYXRlQXV0aE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFwcmVmZXJyZWRBdXRoT3B0aW9ucy5maW5kKCh7IHNjaGVtZUlkIH0pID0+IHNjaGVtZUlkID09PSBjYW5kaWRhdGVBdXRoT3B0aW9uLnNjaGVtZUlkKSkge1xuICAgICAgICAgICAgcHJlZmVycmVkQXV0aE9wdGlvbnMucHVzaChjYW5kaWRhdGVBdXRoT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJlZmVycmVkQXV0aE9wdGlvbnM7XG59O1xuIiwgImltcG9ydCB7IGdldFNtaXRoeUNvbnRleHQgfSBmcm9tIFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IHJlc29sdmVBdXRoT3B0aW9ucyB9IGZyb20gXCIuL3Jlc29sdmVBdXRoT3B0aW9uc1wiO1xuZnVuY3Rpb24gY29udmVydEh0dHBBdXRoU2NoZW1lc1RvTWFwKGh0dHBBdXRoU2NoZW1lcykge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHNjaGVtZSBvZiBodHRwQXV0aFNjaGVtZXMpIHtcbiAgICAgICAgbWFwLnNldChzY2hlbWUuc2NoZW1lSWQsIHNjaGVtZSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5leHBvcnQgY29uc3QgaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlID0gKGNvbmZpZywgbXdPcHRpb25zKSA9PiAobmV4dCwgY29udGV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gY29uZmlnLmh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoYXdhaXQgbXdPcHRpb25zLmh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyKGNvbmZpZywgY29udGV4dCwgYXJncy5pbnB1dCkpO1xuICAgIGNvbnN0IGF1dGhTY2hlbWVQcmVmZXJlbmNlID0gY29uZmlnLmF1dGhTY2hlbWVQcmVmZXJlbmNlID8gYXdhaXQgY29uZmlnLmF1dGhTY2hlbWVQcmVmZXJlbmNlKCkgOiBbXTtcbiAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSByZXNvbHZlQXV0aE9wdGlvbnMob3B0aW9ucywgYXV0aFNjaGVtZVByZWZlcmVuY2UpO1xuICAgIGNvbnN0IGF1dGhTY2hlbWVzID0gY29udmVydEh0dHBBdXRoU2NoZW1lc1RvTWFwKGNvbmZpZy5odHRwQXV0aFNjaGVtZXMpO1xuICAgIGNvbnN0IHNtaXRoeUNvbnRleHQgPSBnZXRTbWl0aHlDb250ZXh0KGNvbnRleHQpO1xuICAgIGNvbnN0IGZhaWx1cmVSZWFzb25zID0gW107XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgcmVzb2x2ZWRPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtZSA9IGF1dGhTY2hlbWVzLmdldChvcHRpb24uc2NoZW1lSWQpO1xuICAgICAgICBpZiAoIXNjaGVtZSkge1xuICAgICAgICAgICAgZmFpbHVyZVJlYXNvbnMucHVzaChgSHR0cEF1dGhTY2hlbWUgXFxgJHtvcHRpb24uc2NoZW1lSWR9XFxgIHdhcyBub3QgZW5hYmxlZCBmb3IgdGhpcyBzZXJ2aWNlLmApO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWRlbnRpdHlQcm92aWRlciA9IHNjaGVtZS5pZGVudGl0eVByb3ZpZGVyKGF3YWl0IG13T3B0aW9ucy5pZGVudGl0eVByb3ZpZGVyQ29uZmlnUHJvdmlkZXIoY29uZmlnKSk7XG4gICAgICAgIGlmICghaWRlbnRpdHlQcm92aWRlcikge1xuICAgICAgICAgICAgZmFpbHVyZVJlYXNvbnMucHVzaChgSHR0cEF1dGhTY2hlbWUgXFxgJHtvcHRpb24uc2NoZW1lSWR9XFxgIGRpZCBub3QgaGF2ZSBhbiBJZGVudGl0eVByb3ZpZGVyIGNvbmZpZ3VyZWQuYCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkZW50aXR5UHJvcGVydGllcyA9IHt9LCBzaWduaW5nUHJvcGVydGllcyA9IHt9IH0gPSBvcHRpb24ucHJvcGVydGllc0V4dHJhY3Rvcj8uKGNvbmZpZywgY29udGV4dCkgfHwge307XG4gICAgICAgIG9wdGlvbi5pZGVudGl0eVByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKG9wdGlvbi5pZGVudGl0eVByb3BlcnRpZXMgfHwge30sIGlkZW50aXR5UHJvcGVydGllcyk7XG4gICAgICAgIG9wdGlvbi5zaWduaW5nUHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24ob3B0aW9uLnNpZ25pbmdQcm9wZXJ0aWVzIHx8IHt9LCBzaWduaW5nUHJvcGVydGllcyk7XG4gICAgICAgIHNtaXRoeUNvbnRleHQuc2VsZWN0ZWRIdHRwQXV0aFNjaGVtZSA9IHtcbiAgICAgICAgICAgIGh0dHBBdXRoT3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgICBpZGVudGl0eTogYXdhaXQgaWRlbnRpdHlQcm92aWRlcihvcHRpb24uaWRlbnRpdHlQcm9wZXJ0aWVzKSxcbiAgICAgICAgICAgIHNpZ25lcjogc2NoZW1lLnNpZ25lcixcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghc21pdGh5Q29udGV4dC5zZWxlY3RlZEh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihmYWlsdXJlUmVhc29ucy5qb2luKFwiXFxuXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG59O1xuIiwgImltcG9ydCB7IGh0dHBBdXRoU2NoZW1lTWlkZGxld2FyZSB9IGZyb20gXCIuL2h0dHBBdXRoU2NoZW1lTWlkZGxld2FyZVwiO1xuZXhwb3J0IGNvbnN0IGh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0TWlkZGxld2FyZU9wdGlvbnMgPSB7XG4gICAgc3RlcDogXCJzZXJpYWxpemVcIixcbiAgICB0YWdzOiBbXCJIVFRQX0FVVEhfU0NIRU1FXCJdLFxuICAgIG5hbWU6IFwiaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlXCIsXG4gICAgb3ZlcnJpZGU6IHRydWUsXG4gICAgcmVsYXRpb246IFwiYmVmb3JlXCIsXG4gICAgdG9NaWRkbGV3YXJlOiBcImVuZHBvaW50VjJNaWRkbGV3YXJlXCIsXG59O1xuZXhwb3J0IGNvbnN0IGdldEh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0UGx1Z2luID0gKGNvbmZpZywgeyBodHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlciwgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyLCB9KSA9PiAoe1xuICAgIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgICAgIGNsaWVudFN0YWNrLmFkZFJlbGF0aXZlVG8oaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlKGNvbmZpZywge1xuICAgICAgICAgICAgaHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIsXG4gICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyQ29uZmlnUHJvdmlkZXIsXG4gICAgICAgIH0pLCBodHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgICB9LFxufSk7XG4iLCAiaW1wb3J0IHsgaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlIH0gZnJvbSBcIi4vaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlXCI7XG5leHBvcnQgY29uc3QgaHR0cEF1dGhTY2hlbWVNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBzdGVwOiBcInNlcmlhbGl6ZVwiLFxuICAgIHRhZ3M6IFtcIkhUVFBfQVVUSF9TQ0hFTUVcIl0sXG4gICAgbmFtZTogXCJodHRwQXV0aFNjaGVtZU1pZGRsZXdhcmVcIixcbiAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICByZWxhdGlvbjogXCJiZWZvcmVcIixcbiAgICB0b01pZGRsZXdhcmU6IFwic2VyaWFsaXplck1pZGRsZXdhcmVcIixcbn07XG5leHBvcnQgY29uc3QgZ2V0SHR0cEF1dGhTY2hlbWVQbHVnaW4gPSAoY29uZmlnLCB7IGh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLCBpZGVudGl0eVByb3ZpZGVyQ29uZmlnUHJvdmlkZXIsIH0pID0+ICh7XG4gICAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICAgICAgY2xpZW50U3RhY2suYWRkUmVsYXRpdmVUbyhodHRwQXV0aFNjaGVtZU1pZGRsZXdhcmUoY29uZmlnLCB7XG4gICAgICAgICAgICBodHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcixcbiAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXJDb25maWdQcm92aWRlcixcbiAgICAgICAgfSksIGh0dHBBdXRoU2NoZW1lTWlkZGxld2FyZU9wdGlvbnMpO1xuICAgIH0sXG59KTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9odHRwQXV0aFNjaGVtZU1pZGRsZXdhcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dldEh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0UGx1Z2luXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9nZXRIdHRwQXV0aFNjaGVtZVBsdWdpblwiO1xuIiwgImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgZ2V0U21pdGh5Q29udGV4dCB9IGZyb20gXCJAc21pdGh5L3V0aWwtbWlkZGxld2FyZVwiO1xuY29uc3QgZGVmYXVsdEVycm9ySGFuZGxlciA9IChzaWduaW5nUHJvcGVydGllcykgPT4gKGVycm9yKSA9PiB7XG4gICAgdGhyb3cgZXJyb3I7XG59O1xuY29uc3QgZGVmYXVsdFN1Y2Nlc3NIYW5kbGVyID0gKGh0dHBSZXNwb25zZSwgc2lnbmluZ1Byb3BlcnRpZXMpID0+IHsgfTtcbmV4cG9ydCBjb25zdCBodHRwU2lnbmluZ01pZGRsZXdhcmUgPSAoY29uZmlnKSA9PiAobmV4dCwgY29udGV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UoYXJncy5yZXF1ZXN0KSkge1xuICAgICAgICByZXR1cm4gbmV4dChhcmdzKTtcbiAgICB9XG4gICAgY29uc3Qgc21pdGh5Q29udGV4dCA9IGdldFNtaXRoeUNvbnRleHQoY29udGV4dCk7XG4gICAgY29uc3Qgc2NoZW1lID0gc21pdGh5Q29udGV4dC5zZWxlY3RlZEh0dHBBdXRoU2NoZW1lO1xuICAgIGlmICghc2NoZW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gSHR0cEF1dGhTY2hlbWUgd2FzIHNlbGVjdGVkOiB1bmFibGUgdG8gc2lnbiByZXF1ZXN0YCk7XG4gICAgfVxuICAgIGNvbnN0IHsgaHR0cEF1dGhPcHRpb246IHsgc2lnbmluZ1Byb3BlcnRpZXMgPSB7fSB9LCBpZGVudGl0eSwgc2lnbmVyLCB9ID0gc2NoZW1lO1xuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IG5leHQoe1xuICAgICAgICAuLi5hcmdzLFxuICAgICAgICByZXF1ZXN0OiBhd2FpdCBzaWduZXIuc2lnbihhcmdzLnJlcXVlc3QsIGlkZW50aXR5LCBzaWduaW5nUHJvcGVydGllcyksXG4gICAgfSkuY2F0Y2goKHNpZ25lci5lcnJvckhhbmRsZXIgfHwgZGVmYXVsdEVycm9ySGFuZGxlcikoc2lnbmluZ1Byb3BlcnRpZXMpKTtcbiAgICAoc2lnbmVyLnN1Y2Nlc3NIYW5kbGVyIHx8IGRlZmF1bHRTdWNjZXNzSGFuZGxlcikob3V0cHV0LnJlc3BvbnNlLCBzaWduaW5nUHJvcGVydGllcyk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn07XG4iLCAiaW1wb3J0IHsgaHR0cFNpZ25pbmdNaWRkbGV3YXJlIH0gZnJvbSBcIi4vaHR0cFNpZ25pbmdNaWRkbGV3YXJlXCI7XG5leHBvcnQgY29uc3QgaHR0cFNpZ25pbmdNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBzdGVwOiBcImZpbmFsaXplUmVxdWVzdFwiLFxuICAgIHRhZ3M6IFtcIkhUVFBfU0lHTklOR1wiXSxcbiAgICBuYW1lOiBcImh0dHBTaWduaW5nTWlkZGxld2FyZVwiLFxuICAgIGFsaWFzZXM6IFtcImFwaUtleU1pZGRsZXdhcmVcIiwgXCJ0b2tlbk1pZGRsZXdhcmVcIiwgXCJhd3NBdXRoTWlkZGxld2FyZVwiXSxcbiAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICByZWxhdGlvbjogXCJhZnRlclwiLFxuICAgIHRvTWlkZGxld2FyZTogXCJyZXRyeU1pZGRsZXdhcmVcIixcbn07XG5leHBvcnQgY29uc3QgZ2V0SHR0cFNpZ25pbmdQbHVnaW4gPSAoY29uZmlnKSA9PiAoe1xuICAgIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgICAgIGNsaWVudFN0YWNrLmFkZFJlbGF0aXZlVG8oaHR0cFNpZ25pbmdNaWRkbGV3YXJlKGNvbmZpZyksIGh0dHBTaWduaW5nTWlkZGxld2FyZU9wdGlvbnMpO1xuICAgIH0sXG59KTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9odHRwU2lnbmluZ01pZGRsZXdhcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dldEh0dHBTaWduaW5nTWlkZGxld2FyZVwiO1xuIiwgImV4cG9ydCBjb25zdCBub3JtYWxpemVQcm92aWRlciA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIGNvbnN0IHByb21pc2lmaWVkID0gUHJvbWlzZS5yZXNvbHZlKGlucHV0KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG59O1xuIiwgImNvbnN0IG1ha2VQYWdlZENsaWVudFJlcXVlc3QgPSBhc3luYyAoQ29tbWFuZEN0b3IsIGNsaWVudCwgaW5wdXQsIHdpdGhDb21tYW5kID0gKF8pID0+IF8sIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgY29tbWFuZCA9IG5ldyBDb21tYW5kQ3RvcihpbnB1dCk7XG4gICAgY29tbWFuZCA9IHdpdGhDb21tYW5kKGNvbW1hbmQpID8/IGNvbW1hbmQ7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zZW5kKGNvbW1hbmQsIC4uLmFyZ3MpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0b3IoQ2xpZW50Q3RvciwgQ29tbWFuZEN0b3IsIGlucHV0VG9rZW5OYW1lLCBvdXRwdXRUb2tlbk5hbWUsIHBhZ2VTaXplVG9rZW5OYW1lKSB7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKiBwYWdpbmF0ZU9wZXJhdGlvbihjb25maWcsIGlucHV0LCAuLi5hZGRpdGlvbmFsQXJndW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IF9pbnB1dCA9IGlucHV0O1xuICAgICAgICBsZXQgdG9rZW4gPSBjb25maWcuc3RhcnRpbmdUb2tlbiA/PyBfaW5wdXRbaW5wdXRUb2tlbk5hbWVdO1xuICAgICAgICBsZXQgaGFzTmV4dCA9IHRydWU7XG4gICAgICAgIGxldCBwYWdlO1xuICAgICAgICB3aGlsZSAoaGFzTmV4dCkge1xuICAgICAgICAgICAgX2lucHV0W2lucHV0VG9rZW5OYW1lXSA9IHRva2VuO1xuICAgICAgICAgICAgaWYgKHBhZ2VTaXplVG9rZW5OYW1lKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0W3BhZ2VTaXplVG9rZW5OYW1lXSA9IF9pbnB1dFtwYWdlU2l6ZVRva2VuTmFtZV0gPz8gY29uZmlnLnBhZ2VTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jbGllbnQgaW5zdGFuY2VvZiBDbGllbnRDdG9yKSB7XG4gICAgICAgICAgICAgICAgcGFnZSA9IGF3YWl0IG1ha2VQYWdlZENsaWVudFJlcXVlc3QoQ29tbWFuZEN0b3IsIGNvbmZpZy5jbGllbnQsIGlucHV0LCBjb25maWcud2l0aENvbW1hbmQsIC4uLmFkZGl0aW9uYWxBcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNsaWVudCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgJHtDbGllbnRDdG9yLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCBwYWdlO1xuICAgICAgICAgICAgY29uc3QgcHJldlRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IGdldChwYWdlLCBvdXRwdXRUb2tlbk5hbWUpO1xuICAgICAgICAgICAgaGFzTmV4dCA9ICEhKHRva2VuICYmICghY29uZmlnLnN0b3BPblNhbWVUb2tlbiB8fCB0b2tlbiAhPT0gcHJldlRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xufVxuY29uc3QgZ2V0ID0gKGZyb21PYmplY3QsIHBhdGgpID0+IHtcbiAgICBsZXQgY3Vyc29yID0gZnJvbU9iamVjdDtcbiAgICBjb25zdCBwYXRoQ29tcG9uZW50cyA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIGZvciAoY29uc3Qgc3RlcCBvZiBwYXRoQ29tcG9uZW50cykge1xuICAgICAgICBpZiAoIWN1cnNvciB8fCB0eXBlb2YgY3Vyc29yICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGN1cnNvciA9IGN1cnNvcltzdGVwXTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnNvcjtcbn07XG4iLCAiZXhwb3J0IHsgcmVxdWVzdEJ1aWxkZXIgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3Byb3RvY29sc1wiO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlKGNvbnRleHQsIGZlYXR1cmUsIHZhbHVlKSB7XG4gICAgaWYgKCFjb250ZXh0Ll9fc21pdGh5X2NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dC5fX3NtaXRoeV9jb250ZXh0ID0ge1xuICAgICAgICAgICAgZmVhdHVyZXM6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICghY29udGV4dC5fX3NtaXRoeV9jb250ZXh0LmZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnRleHQuX19zbWl0aHlfY29udGV4dC5mZWF0dXJlcyA9IHt9O1xuICAgIH1cbiAgICBjb250ZXh0Ll9fc21pdGh5X2NvbnRleHQuZmVhdHVyZXNbZmVhdHVyZV0gPSB2YWx1ZTtcbn1cbiIsICJleHBvcnQgY2xhc3MgRGVmYXVsdElkZW50aXR5UHJvdmlkZXJDb25maWcge1xuICAgIGF1dGhTY2hlbWVzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNjaGVtZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldElkZW50aXR5UHJvdmlkZXIoc2NoZW1lSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNjaGVtZXMuZ2V0KHNjaGVtZUlkKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQHNtaXRoeS9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBIdHRwQXBpS2V5QXV0aExvY2F0aW9uIH0gZnJvbSBcIkBzbWl0aHkvdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBIdHRwQXBpS2V5QXV0aFNpZ25lciB7XG4gICAgYXN5bmMgc2lnbihodHRwUmVxdWVzdCwgaWRlbnRpdHksIHNpZ25pbmdQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICghc2lnbmluZ1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVlc3QgY291bGQgbm90IGJlIHNpZ25lZCB3aXRoIGBhcGlLZXlgIHNpbmNlIHRoZSBgbmFtZWAgYW5kIGBpbmAgc2lnbmVyIHByb3BlcnRpZXMgYXJlIG1pc3NpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaWduaW5nUHJvcGVydGllcy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXF1ZXN0IGNvdWxkIG5vdCBiZSBzaWduZWQgd2l0aCBgYXBpS2V5YCBzaW5jZSB0aGUgYG5hbWVgIHNpZ25lciBwcm9wZXJ0eSBpcyBtaXNzaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2lnbmluZ1Byb3BlcnRpZXMuaW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVlc3QgY291bGQgbm90IGJlIHNpZ25lZCB3aXRoIGBhcGlLZXlgIHNpbmNlIHRoZSBgaW5gIHNpZ25lciBwcm9wZXJ0eSBpcyBtaXNzaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaWRlbnRpdHkuYXBpS2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXF1ZXN0IGNvdWxkIG5vdCBiZSBzaWduZWQgd2l0aCBgYXBpS2V5YCBzaW5jZSB0aGUgYGFwaUtleWAgaXMgbm90IGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IEh0dHBSZXF1ZXN0LmNsb25lKGh0dHBSZXF1ZXN0KTtcbiAgICAgICAgaWYgKHNpZ25pbmdQcm9wZXJ0aWVzLmluID09PSBIdHRwQXBpS2V5QXV0aExvY2F0aW9uLlFVRVJZKSB7XG4gICAgICAgICAgICBjbG9uZWRSZXF1ZXN0LnF1ZXJ5W3NpZ25pbmdQcm9wZXJ0aWVzLm5hbWVdID0gaWRlbnRpdHkuYXBpS2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpZ25pbmdQcm9wZXJ0aWVzLmluID09PSBIdHRwQXBpS2V5QXV0aExvY2F0aW9uLkhFQURFUikge1xuICAgICAgICAgICAgY2xvbmVkUmVxdWVzdC5oZWFkZXJzW3NpZ25pbmdQcm9wZXJ0aWVzLm5hbWVdID0gc2lnbmluZ1Byb3BlcnRpZXMuc2NoZW1lXG4gICAgICAgICAgICAgICAgPyBgJHtzaWduaW5nUHJvcGVydGllcy5zY2hlbWV9ICR7aWRlbnRpdHkuYXBpS2V5fWBcbiAgICAgICAgICAgICAgICA6IGlkZW50aXR5LmFwaUtleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVlc3QgY2FuIG9ubHkgYmUgc2lnbmVkIHdpdGggYGFwaUtleWAgbG9jYXRpb25zIGBxdWVyeWAgb3IgYGhlYWRlcmAsIFwiICtcbiAgICAgICAgICAgICAgICBcImJ1dCBmb3VuZDogYFwiICtcbiAgICAgICAgICAgICAgICBzaWduaW5nUHJvcGVydGllcy5pbiArXG4gICAgICAgICAgICAgICAgXCJgXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWRSZXF1ZXN0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmV4cG9ydCBjbGFzcyBIdHRwQmVhcmVyQXV0aFNpZ25lciB7XG4gICAgYXN5bmMgc2lnbihodHRwUmVxdWVzdCwgaWRlbnRpdHksIHNpZ25pbmdQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNsb25lZFJlcXVlc3QgPSBIdHRwUmVxdWVzdC5jbG9uZShodHRwUmVxdWVzdCk7XG4gICAgICAgIGlmICghaWRlbnRpdHkudG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVlc3QgY291bGQgbm90IGJlIHNpZ25lZCB3aXRoIGB0b2tlbmAgc2luY2UgdGhlIGB0b2tlbmAgaXMgbm90IGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2xvbmVkUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHtpZGVudGl0eS50b2tlbn1gO1xuICAgICAgICByZXR1cm4gY2xvbmVkUmVxdWVzdDtcbiAgICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIE5vQXV0aFNpZ25lciB7XG4gICAgYXN5bmMgc2lnbihodHRwUmVxdWVzdCwgaWRlbnRpdHksIHNpZ25pbmdQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiBodHRwUmVxdWVzdDtcbiAgICB9XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vaHR0cEFwaUtleUF1dGhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBCZWFyZXJBdXRoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ub0F1dGhcIjtcbiIsICJleHBvcnQgY29uc3QgY3JlYXRlSXNJZGVudGl0eUV4cGlyZWRGdW5jdGlvbiA9IChleHBpcmF0aW9uTXMpID0+IGZ1bmN0aW9uIGlzSWRlbnRpdHlFeHBpcmVkKGlkZW50aXR5KSB7XG4gICAgcmV0dXJuIGRvZXNJZGVudGl0eVJlcXVpcmVSZWZyZXNoKGlkZW50aXR5KSAmJiBpZGVudGl0eS5leHBpcmF0aW9uLmdldFRpbWUoKSAtIERhdGUubm93KCkgPCBleHBpcmF0aW9uTXM7XG59O1xuZXhwb3J0IGNvbnN0IEVYUElSQVRJT05fTVMgPSAzMDBfMDAwO1xuZXhwb3J0IGNvbnN0IGlzSWRlbnRpdHlFeHBpcmVkID0gY3JlYXRlSXNJZGVudGl0eUV4cGlyZWRGdW5jdGlvbihFWFBJUkFUSU9OX01TKTtcbmV4cG9ydCBjb25zdCBkb2VzSWRlbnRpdHlSZXF1aXJlUmVmcmVzaCA9IChpZGVudGl0eSkgPT4gaWRlbnRpdHkuZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IG1lbW9pemVJZGVudGl0eVByb3ZpZGVyID0gKHByb3ZpZGVyLCBpc0V4cGlyZWQsIHJlcXVpcmVzUmVmcmVzaCkgPT4ge1xuICAgIGlmIChwcm92aWRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm92aWRlciA9IHR5cGVvZiBwcm92aWRlciAhPT0gXCJmdW5jdGlvblwiID8gYXN5bmMgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHByb3ZpZGVyKSA6IHByb3ZpZGVyO1xuICAgIGxldCByZXNvbHZlZDtcbiAgICBsZXQgcGVuZGluZztcbiAgICBsZXQgaGFzUmVzdWx0O1xuICAgIGxldCBpc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgY29uc3QgY29hbGVzY2VQcm92aWRlciA9IGFzeW5jIChvcHRpb25zKSA9PiB7XG4gICAgICAgIGlmICghcGVuZGluZykge1xuICAgICAgICAgICAgcGVuZGluZyA9IG5vcm1hbGl6ZWRQcm92aWRlcihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSBhd2FpdCBwZW5kaW5nO1xuICAgICAgICAgICAgaGFzUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzQ29uc3RhbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH07XG4gICAgaWYgKGlzRXhwaXJlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhc3luYyAob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKCFoYXNSZXN1bHQgfHwgb3B0aW9ucz8uZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBhd2FpdCBjb2FsZXNjZVByb3ZpZGVyKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXN5bmMgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZXN1bHQgfHwgb3B0aW9ucz8uZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IGF3YWl0IGNvYWxlc2NlUHJvdmlkZXIob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlcXVpcmVzUmVmcmVzaChyZXNvbHZlZCkpIHtcbiAgICAgICAgICAgIGlzQ29uc3RhbnQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0V4cGlyZWQocmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICBhd2FpdCBjb2FsZXNjZVByb3ZpZGVyKG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9O1xufTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9EZWZhdWx0SWRlbnRpdHlQcm92aWRlckNvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cEF1dGhTY2hlbWVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tZW1vaXplSWRlbnRpdHlQcm92aWRlclwiO1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL2dldFNtaXRoeUNvbnRleHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21pZGRsZXdhcmUtaHR0cC1hdXRoLXNjaGVtZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWlkZGxld2FyZS1odHRwLXNpZ25pbmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL25vcm1hbGl6ZVByb3ZpZGVyXCI7XG5leHBvcnQgeyBjcmVhdGVQYWdpbmF0b3IgfSBmcm9tIFwiLi9wYWdpbmF0aW9uL2NyZWF0ZVBhZ2luYXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmVxdWVzdC1idWlsZGVyL3JlcXVlc3RCdWlsZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXRGZWF0dXJlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlsLWlkZW50aXR5LWFuZC1hdXRoXCI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFDYTtBQURiO0FBQUE7QUFBQSxtQkFBbUM7QUFDNUIsSUFBTSxtQkFBbUIsQ0FBQyxZQUFZLFFBQVEsK0JBQWtCLE1BQU0sUUFBUSwrQkFBa0IsSUFBSSxDQUFDO0FBQUE7QUFBQTs7O0FDRDVHLElBQWE7QUFBYjtBQUFBO0FBQU8sSUFBTSxxQkFBcUIsQ0FBQyxzQkFBc0IseUJBQXlC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QyxxQkFBVyxNQUFNLGlCQUFpQixPQUFPO0FBQUEsUUFDN0M7QUFDQSxZQUFJLFlBQVk7QUFDWixpQkFBTztBQUFBLFFBQ1g7QUFDQSxZQUFJLENBQUMsZ0JBQWdCLFFBQVEsR0FBRztBQUM1Qix1QkFBYTtBQUNiLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksVUFBVSxRQUFRLEdBQUc7QUFDckIsZ0JBQU0saUJBQWlCLE9BQU87QUFDOUIsaUJBQU87QUFBQSxRQUNYO0FBQ0EsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3V0aWxfbWlkZGxld2FyZSIsICJpbXBvcnRfcHJvdG9jb2xfaHR0cCIsICJpbXBvcnRfdHlwZXMiLCAiaW1wb3J0X3Byb3RvY29sX2h0dHAiLCAiaXNJZGVudGl0eUV4cGlyZWQiXQp9Cg==
