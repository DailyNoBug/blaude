#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_package,
  package_default
} from "./chunk-OGEI6JO6.mjs";
import {
  AwsRestJsonProtocol,
  AwsSdkSigV4Signer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  init_httpAuthSchemes,
  init_protocols,
  require_dist_cjs as require_dist_cjs9,
  require_dist_cjs10 as require_dist_cjs18,
  require_dist_cjs11 as require_dist_cjs19,
  require_dist_cjs12 as require_dist_cjs20,
  require_dist_cjs13 as require_dist_cjs21,
  require_dist_cjs14 as require_dist_cjs22,
  require_dist_cjs15 as require_dist_cjs23,
  require_dist_cjs16 as require_dist_cjs24,
  require_dist_cjs2 as require_dist_cjs10,
  require_dist_cjs3 as require_dist_cjs11,
  require_dist_cjs4 as require_dist_cjs12,
  require_dist_cjs5 as require_dist_cjs13,
  require_dist_cjs6 as require_dist_cjs14,
  require_dist_cjs7 as require_dist_cjs15,
  require_dist_cjs8 as require_dist_cjs16,
  require_dist_cjs9 as require_dist_cjs17,
  resolveAwsSdkSigV4Config
} from "./chunk-HVPHPOYV.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-EZHETOM7.mjs";
import "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs as require_dist_cjs8
} from "./chunk-RR3PN36J.mjs";
import {
  emitWarningIfUnsupportedVersion,
  init_client
} from "./chunk-MTY4OASM.mjs";
import "./chunk-NE3ECB5D.mjs";
import {
  DefaultIdentityProviderConfig,
  NoAuthSigner,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import {
  TypeRegistry,
  getSchemaSerdePlugin,
  init_schema,
  require_dist_cjs as require_dist_cjs6,
  require_dist_cjs5 as require_dist_cjs7
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs3 as require_dist_cjs2
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-FONUB5ET.mjs";
import "./chunk-P2R73CAR.mjs";
import {
  require_dist_cjs3 as require_dist_cjs5
} from "./chunk-HJNATCD3.mjs";
import {
  __esm,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "signin",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var import_util_middleware, defaultSigninHttpAuthSchemeParametersProvider, defaultSigninHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes();
    import_util_middleware = __toESM(require_dist_cjs7());
    defaultSigninHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSigninHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateOAuth2Token": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, import_util_middleware.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "signin"
      });
    };
    commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/ruleset.js"() {
    u = "required";
    v = "fn";
    w = "argv";
    x = "ref";
    a = true;
    b = "isSet";
    c = "booleanEquals";
    d = "error";
    e = "endpoint";
    f = "tree";
    g = "PartitionResult";
    h = "stringEquals";
    i = { [u]: true, default: false, type: "boolean" };
    j = { [u]: false, type: "string" };
    k = { [x]: "Endpoint" };
    l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    n = {};
    o = { [v]: "getAttr", [w]: [{ [x]: g }, "name"] };
    p = { [v]: c, [w]: [{ [x]: "UseFIPS" }, false] };
    q = { [v]: c, [w]: [{ [x]: "UseDualStack" }, false] };
    r = { [v]: "getAttr", [w]: [{ [x]: g }, "supportsFIPS"] };
    s = { [v]: c, [w]: [true, { [v]: "getAttr", [w]: [{ [x]: g }, "supportsDualStack"] }] };
    t = [{ [x]: "Region" }];
    _data = {
      version: "1.0",
      parameters: { UseDualStack: i, UseFIPS: i, Endpoint: j, Region: j },
      rules: [
        {
          conditions: [{ [v]: b, [w]: [k] }],
          rules: [
            { conditions: [l], error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d },
            {
              rules: [
                {
                  conditions: [m],
                  error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                  type: d
                },
                { endpoint: { url: k, properties: n, headers: n }, type: e }
              ],
              type: f
            }
          ],
          type: f
        },
        {
          rules: [
            {
              conditions: [{ [v]: b, [w]: t }],
              rules: [
                {
                  conditions: [{ [v]: "aws.partition", [w]: t, assign: g }],
                  rules: [
                    {
                      conditions: [{ [v]: h, [w]: [o, "aws"] }, p, q],
                      endpoint: { url: "https://{Region}.signin.aws.amazon.com", properties: n, headers: n },
                      type: e
                    },
                    {
                      conditions: [{ [v]: h, [w]: [o, "aws-cn"] }, p, q],
                      endpoint: { url: "https://{Region}.signin.amazonaws.cn", properties: n, headers: n },
                      type: e
                    },
                    {
                      conditions: [{ [v]: h, [w]: [o, "aws-us-gov"] }, p, q],
                      endpoint: { url: "https://{Region}.signin.amazonaws-us-gov.com", properties: n, headers: n },
                      type: e
                    },
                    {
                      conditions: [l, m],
                      rules: [
                        {
                          conditions: [{ [v]: c, [w]: [a, r] }, s],
                          rules: [
                            {
                              endpoint: {
                                url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                properties: n,
                                headers: n
                              },
                              type: e
                            }
                          ],
                          type: f
                        },
                        {
                          error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                          type: d
                        }
                      ],
                      type: f
                    },
                    {
                      conditions: [l, q],
                      rules: [
                        {
                          conditions: [{ [v]: c, [w]: [r, a] }],
                          rules: [
                            {
                              endpoint: {
                                url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                                properties: n,
                                headers: n
                              },
                              type: e
                            }
                          ],
                          type: f
                        },
                        { error: "FIPS is enabled but this partition does not support FIPS", type: d }
                      ],
                      type: f
                    },
                    {
                      conditions: [p, m],
                      rules: [
                        {
                          conditions: [s],
                          rules: [
                            {
                              endpoint: {
                                url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                properties: n,
                                headers: n
                              },
                              type: e
                            }
                          ],
                          type: f
                        },
                        { error: "DualStack is enabled but this partition does not support DualStack", type: d }
                      ],
                      type: f
                    },
                    {
                      endpoint: { url: "https://signin.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n },
                      type: e
                    }
                  ],
                  type: f
                }
              ],
              type: f
            },
            { error: "Invalid Configuration: Missing Region", type: d }
          ],
          type: f
        }
      ]
    };
    ruleSet = _data;
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs13());
    import_util_endpoints2 = __toESM(require_dist_cjs12());
    init_ruleset();
    cache = new import_util_endpoints2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver = (endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, import_util_endpoints2.resolveEndpoint)(ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    };
    import_util_endpoints2.customEndpointFunctions.aws = import_util_endpoints.awsEndpointFunctions;
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js
var import_smithy_client, SigninServiceException;
var init_SigninServiceException = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js"() {
    import_smithy_client = __toESM(require_dist_cjs8());
    SigninServiceException = class _SigninServiceException extends import_smithy_client.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SigninServiceException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js
var AccessDeniedException, InternalServerException, TooManyRequestsError, ValidationException;
var init_errors = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js"() {
    init_SigninServiceException();
    AccessDeniedException = class _AccessDeniedException extends SigninServiceException {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
      }
    };
    InternalServerException = class _InternalServerException extends SigninServiceException {
      name = "InternalServerException";
      $fault = "server";
      error;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
      }
    };
    TooManyRequestsError = class _TooManyRequestsError extends SigninServiceException {
      name = "TooManyRequestsError";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "TooManyRequestsError",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsError.prototype);
        this.error = opts.error;
      }
    };
    ValidationException = class _ValidationException extends SigninServiceException {
      name = "ValidationException";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ValidationException.prototype);
        this.error = opts.error;
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js
var _ADE, _AT, _COAT, _COATR, _COATRB, _COATRBr, _COATRr, _ISE, _RT, _TMRE, _VE, _aKI, _aT, _c, _cI, _cV, _co, _e, _eI, _gT, _h, _hE, _iT, _jN, _m, _rT, _rU, _s, _sAK, _sT, _se, _tI, _tO, _tT, n0, _s_registry, SigninServiceException$, n0_registry, AccessDeniedException$, InternalServerException$, TooManyRequestsError$, ValidationException$, errorTypeRegistries, RefreshToken, AccessToken$, CreateOAuth2TokenRequest$, CreateOAuth2TokenRequestBody$, CreateOAuth2TokenResponse$, CreateOAuth2TokenResponseBody$, CreateOAuth2Token$;
var init_schemas_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js"() {
    init_schema();
    init_errors();
    init_SigninServiceException();
    _ADE = "AccessDeniedException";
    _AT = "AccessToken";
    _COAT = "CreateOAuth2Token";
    _COATR = "CreateOAuth2TokenRequest";
    _COATRB = "CreateOAuth2TokenRequestBody";
    _COATRBr = "CreateOAuth2TokenResponseBody";
    _COATRr = "CreateOAuth2TokenResponse";
    _ISE = "InternalServerException";
    _RT = "RefreshToken";
    _TMRE = "TooManyRequestsError";
    _VE = "ValidationException";
    _aKI = "accessKeyId";
    _aT = "accessToken";
    _c = "client";
    _cI = "clientId";
    _cV = "codeVerifier";
    _co = "code";
    _e = "error";
    _eI = "expiresIn";
    _gT = "grantType";
    _h = "http";
    _hE = "httpError";
    _iT = "idToken";
    _jN = "jsonName";
    _m = "message";
    _rT = "refreshToken";
    _rU = "redirectUri";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
    _sAK = "secretAccessKey";
    _sT = "sessionToken";
    _se = "server";
    _tI = "tokenInput";
    _tO = "tokenOutput";
    _tT = "tokenType";
    n0 = "com.amazonaws.signin";
    _s_registry = TypeRegistry.for(_s);
    SigninServiceException$ = [-3, _s, "SigninServiceException", 0, [], []];
    _s_registry.registerError(SigninServiceException$, SigninServiceException);
    n0_registry = TypeRegistry.for(n0);
    AccessDeniedException$ = [-3, n0, _ADE, { [_e]: _c }, [_e, _m], [0, 0], 2];
    n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
    InternalServerException$ = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_e, _m], [0, 0], 2];
    n0_registry.registerError(InternalServerException$, InternalServerException);
    TooManyRequestsError$ = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_e, _m], [0, 0], 2];
    n0_registry.registerError(TooManyRequestsError$, TooManyRequestsError);
    ValidationException$ = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_e, _m], [0, 0], 2];
    n0_registry.registerError(ValidationException$, ValidationException);
    errorTypeRegistries = [_s_registry, n0_registry];
    RefreshToken = [0, n0, _RT, 8, 0];
    AccessToken$ = [
      3,
      n0,
      _AT,
      8,
      [_aKI, _sAK, _sT],
      [
        [0, { [_jN]: _aKI }],
        [0, { [_jN]: _sAK }],
        [0, { [_jN]: _sT }]
      ],
      3
    ];
    CreateOAuth2TokenRequest$ = [
      3,
      n0,
      _COATR,
      0,
      [_tI],
      [[() => CreateOAuth2TokenRequestBody$, 16]],
      1
    ];
    CreateOAuth2TokenRequestBody$ = [
      3,
      n0,
      _COATRB,
      0,
      [_cI, _gT, _co, _rU, _cV, _rT],
      [
        [0, { [_jN]: _cI }],
        [0, { [_jN]: _gT }],
        0,
        [0, { [_jN]: _rU }],
        [0, { [_jN]: _cV }],
        [() => RefreshToken, { [_jN]: _rT }]
      ],
      2
    ];
    CreateOAuth2TokenResponse$ = [
      3,
      n0,
      _COATRr,
      0,
      [_tO],
      [[() => CreateOAuth2TokenResponseBody$, 16]],
      1
    ];
    CreateOAuth2TokenResponseBody$ = [
      3,
      n0,
      _COATRBr,
      0,
      [_aT, _tT, _eI, _rT, _iT],
      [
        [() => AccessToken$, { [_jN]: _aT }],
        [0, { [_jN]: _tT }],
        [1, { [_jN]: _eI }],
        [() => RefreshToken, { [_jN]: _rT }],
        [0, { [_jN]: _iT }]
      ],
      4
    ];
    CreateOAuth2Token$ = [
      9,
      n0,
      _COAT,
      { [_h]: ["POST", "/v1/token", 200] },
      () => CreateOAuth2TokenRequest$,
      () => CreateOAuth2TokenResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js
var import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js"() {
    init_httpAuthSchemes();
    init_protocols();
    init_dist_es();
    import_smithy_client2 = __toESM(require_dist_cjs8());
    import_url_parser = __toESM(require_dist_cjs4());
    import_util_base64 = __toESM(require_dist_cjs6());
    import_util_utf8 = __toESM(require_dist_cjs5());
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    init_schemas_0();
    getRuntimeConfig = (config) => {
      return {
        apiVersion: "2023-01-01",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSigninHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new import_smithy_client2.NoOpLogger(),
        protocol: config?.protocol ?? AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.signin",
          errorTypeRegistries,
          version: "2023-01-01",
          serviceTarget: "Signin"
        },
        serviceId: config?.serviceId ?? "Signin",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js"() {
    init_package();
    init_client();
    init_httpAuthSchemes();
    import_util_user_agent_node = __toESM(require_dist_cjs20());
    import_config_resolver = __toESM(require_dist_cjs16());
    import_hash_node = __toESM(require_dist_cjs21());
    import_middleware_retry = __toESM(require_dist_cjs19());
    import_node_config_provider = __toESM(require_dist_cjs3());
    import_node_http_handler = __toESM(require_dist_cjs2());
    import_smithy_client3 = __toESM(require_dist_cjs8());
    import_util_body_length_node = __toESM(require_dist_cjs22());
    import_util_defaults_mode_node = __toESM(require_dist_cjs23());
    import_util_retry = __toESM(require_dist_cjs14());
    init_runtimeConfig_shared();
    getRuntimeConfig2 = (config) => {
      (0, import_smithy_client3.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, import_util_defaults_mode_node.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(import_smithy_client3.loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, import_node_config_provider.loadConfig)(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, import_util_user_agent_node.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: config?.maxAttempts ?? (0, import_node_config_provider.loadConfig)(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: import_node_http_handler.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, import_node_config_provider.loadConfig)({
          ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, import_node_config_provider.loadConfig)(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js"() {
    import_region_config_resolver = __toESM(require_dist_cjs24());
    import_protocol_http = __toESM(require_dist_cjs());
    import_smithy_client4 = __toESM(require_dist_cjs8());
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client4.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client4.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, SigninClient;
var init_SigninClient = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js"() {
    import_middleware_host_header = __toESM(require_dist_cjs9());
    import_middleware_logger = __toESM(require_dist_cjs10());
    import_middleware_recursion_detection = __toESM(require_dist_cjs11());
    import_middleware_user_agent = __toESM(require_dist_cjs15());
    import_config_resolver2 = __toESM(require_dist_cjs16());
    init_dist_es();
    init_schema();
    import_middleware_content_length = __toESM(require_dist_cjs17());
    import_middleware_endpoint = __toESM(require_dist_cjs18());
    import_middleware_retry2 = __toESM(require_dist_cjs19());
    import_smithy_client5 = __toESM(require_dist_cjs8());
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SigninClient = class extends import_smithy_client5.Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry2.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver2.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry2.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSigninHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js
var import_middleware_endpoint2, import_smithy_client6, CreateOAuth2TokenCommand;
var init_CreateOAuth2TokenCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs18());
    import_smithy_client6 = __toESM(require_dist_cjs8());
    init_EndpointParameters();
    init_schemas_0();
    CreateOAuth2TokenCommand = class extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(CreateOAuth2Token$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js
var import_smithy_client7, commands, Signin;
var init_Signin = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js"() {
    import_smithy_client7 = __toESM(require_dist_cjs8());
    init_CreateOAuth2TokenCommand();
    init_SigninClient();
    commands = {
      CreateOAuth2TokenCommand
    };
    Signin = class extends SigninClient {
    };
    (0, import_smithy_client7.createAggregatedClient)(commands, Signin);
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js
var init_commands = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js"() {
    init_CreateOAuth2TokenCommand();
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js
var OAuth2ErrorCode;
var init_enums = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js"() {
    OAuth2ErrorCode = {
      AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
      INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
      INVALID_REQUEST: "INVALID_REQUEST",
      SERVER_ERROR: "server_error",
      TOKEN_EXPIRED: "TOKEN_EXPIRED",
      USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js
var init_models_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js
var init_signin = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js"() {
    init_SigninClient();
    init_Signin();
    init_commands();
    init_schemas_0();
    init_enums();
    init_errors();
    init_models_0();
    init_SigninServiceException();
  }
});
init_signin();
var export_$Command = import_smithy_client6.Command;
var export___Client = import_smithy_client5.Client;
export {
  export_$Command as $Command,
  AccessDeniedException,
  AccessDeniedException$,
  AccessToken$,
  CreateOAuth2Token$,
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenRequest$,
  CreateOAuth2TokenRequestBody$,
  CreateOAuth2TokenResponse$,
  CreateOAuth2TokenResponseBody$,
  InternalServerException,
  InternalServerException$,
  OAuth2ErrorCode,
  Signin,
  SigninClient,
  SigninServiceException,
  SigninServiceException$,
  TooManyRequestsError,
  TooManyRequestsError$,
  ValidationException,
  ValidationException$,
  export___Client as __Client,
  errorTypeRegistries
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9lbmRwb2ludC9ydWxlc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9tb2RlbHMvU2lnbmluU2VydmljZUV4Y2VwdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vbW9kZWxzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vc2NoZW1hcy9zY2hlbWFzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL3J1bnRpbWVDb25maWcuc2hhcmVkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9ydW50aW1lQ29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vcnVudGltZUV4dGVuc2lvbnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL1NpZ25pbkNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vY29tbWFuZHMvQ3JlYXRlT0F1dGgyVG9rZW5Db21tYW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9TaWduaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL2NvbW1hbmRzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3NpZ25pbi9tb2RlbHMvZW51bXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL21vZGVscy9tb2RlbHNfMC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlc29sdmVBd3NTZGtTaWdWNENvbmZpZyB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2h0dHBBdXRoU2NoZW1lc1wiO1xuaW1wb3J0IHsgZ2V0U21pdGh5Q29udGV4dCwgbm9ybWFsaXplUHJvdmlkZXIgfSBmcm9tIFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2lnbmluSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIgPSBhc3luYyAoY29uZmlnLCBjb250ZXh0LCBpbnB1dCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wZXJhdGlvbjogZ2V0U21pdGh5Q29udGV4dChjb250ZXh0KS5vcGVyYXRpb24sXG4gICAgICAgIHJlZ2lvbjogKGF3YWl0IG5vcm1hbGl6ZVByb3ZpZGVyKGNvbmZpZy5yZWdpb24pKCkpIHx8XG4gICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIGByZWdpb25gIHRvIGJlIGNvbmZpZ3VyZWQgZm9yIGBhd3MuYXV0aCNzaWd2NGBcIik7XG4gICAgICAgICAgICB9KSgpLFxuICAgIH07XG59O1xuZnVuY3Rpb24gY3JlYXRlQXdzQXV0aFNpZ3Y0SHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICBzaWduaW5nUHJvcGVydGllczoge1xuICAgICAgICAgICAgbmFtZTogXCJzaWduaW5cIixcbiAgICAgICAgICAgIHJlZ2lvbjogYXV0aFBhcmFtZXRlcnMucmVnaW9uLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wZXJ0aWVzRXh0cmFjdG9yOiAoY29uZmlnLCBjb250ZXh0KSA9PiAoe1xuICAgICAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTbWl0aHlBcGlOb0F1dGhIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtZUlkOiBcInNtaXRoeS5hcGkjbm9BdXRoXCIsXG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2lnbmluSHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IChhdXRoUGFyYW1ldGVycykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICBzd2l0Y2ggKGF1dGhQYXJhbWV0ZXJzLm9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIFwiQ3JlYXRlT0F1dGgyVG9rZW5cIjoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZVNtaXRoeUFwaU5vQXV0aEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlQXdzQXV0aFNpZ3Y0SHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZUh0dHBBdXRoU2NoZW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ18wID0gcmVzb2x2ZUF3c1Nka1NpZ1Y0Q29uZmlnKGNvbmZpZyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnXzAsIHtcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IG5vcm1hbGl6ZVByb3ZpZGVyKGNvbmZpZy5hdXRoU2NoZW1lUHJlZmVyZW5jZSA/PyBbXSksXG4gICAgfSk7XG59O1xuIiwgImV4cG9ydCBjb25zdCByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBvcHRpb25zLnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICB1c2VGaXBzRW5kcG9pbnQ6IG9wdGlvbnMudXNlRmlwc0VuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICBkZWZhdWx0U2lnbmluZ05hbWU6IFwic2lnbmluXCIsXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICBVc2VGSVBTOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUZpcHNFbmRwb2ludFwiIH0sXG4gICAgRW5kcG9pbnQ6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwiZW5kcG9pbnRcIiB9LFxuICAgIFJlZ2lvbjogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJyZWdpb25cIiB9LFxuICAgIFVzZUR1YWxTdGFjazogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VEdWFsc3RhY2tFbmRwb2ludFwiIH0sXG59O1xuIiwgImNvbnN0IHUgPSBcInJlcXVpcmVkXCIsIHYgPSBcImZuXCIsIHcgPSBcImFyZ3ZcIiwgeCA9IFwicmVmXCI7XG5jb25zdCBhID0gdHJ1ZSwgYiA9IFwiaXNTZXRcIiwgYyA9IFwiYm9vbGVhbkVxdWFsc1wiLCBkID0gXCJlcnJvclwiLCBlID0gXCJlbmRwb2ludFwiLCBmID0gXCJ0cmVlXCIsIGcgPSBcIlBhcnRpdGlvblJlc3VsdFwiLCBoID0gXCJzdHJpbmdFcXVhbHNcIiwgaSA9IHsgW3VdOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSwgdHlwZTogXCJib29sZWFuXCIgfSwgaiA9IHsgW3VdOiBmYWxzZSwgdHlwZTogXCJzdHJpbmdcIiB9LCBrID0geyBbeF06IFwiRW5kcG9pbnRcIiB9LCBsID0geyBbdl06IGMsIFt3XTogW3sgW3hdOiBcIlVzZUZJUFNcIiB9LCB0cnVlXSB9LCBtID0geyBbdl06IGMsIFt3XTogW3sgW3hdOiBcIlVzZUR1YWxTdGFja1wiIH0sIHRydWVdIH0sIG4gPSB7fSwgbyA9IHsgW3ZdOiBcImdldEF0dHJcIiwgW3ddOiBbeyBbeF06IGcgfSwgXCJuYW1lXCJdIH0sIHAgPSB7IFt2XTogYywgW3ddOiBbeyBbeF06IFwiVXNlRklQU1wiIH0sIGZhbHNlXSB9LCBxID0geyBbdl06IGMsIFt3XTogW3sgW3hdOiBcIlVzZUR1YWxTdGFja1wiIH0sIGZhbHNlXSB9LCByID0geyBbdl06IFwiZ2V0QXR0clwiLCBbd106IFt7IFt4XTogZyB9LCBcInN1cHBvcnRzRklQU1wiXSB9LCBzID0geyBbdl06IGMsIFt3XTogW3RydWUsIHsgW3ZdOiBcImdldEF0dHJcIiwgW3ddOiBbeyBbeF06IGcgfSwgXCJzdXBwb3J0c0R1YWxTdGFja1wiXSB9XSB9LCB0ID0gW3sgW3hdOiBcIlJlZ2lvblwiIH1dO1xuY29uc3QgX2RhdGEgPSB7XG4gICAgdmVyc2lvbjogXCIxLjBcIixcbiAgICBwYXJhbWV0ZXJzOiB7IFVzZUR1YWxTdGFjazogaSwgVXNlRklQUzogaSwgRW5kcG9pbnQ6IGosIFJlZ2lvbjogaiB9LFxuICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogYiwgW3ddOiBba10gfV0sXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW2xdLCBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IEZJUFMgYW5kIGN1c3RvbSBlbmRwb2ludCBhcmUgbm90IHN1cHBvcnRlZFwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFttXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IER1YWxzdGFjayBhbmQgY3VzdG9tIGVuZHBvaW50IGFyZSBub3Qgc3VwcG9ydGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVuZHBvaW50OiB7IHVybDogaywgcHJvcGVydGllczogbiwgaGVhZGVyczogbiB9LCB0eXBlOiBlIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBiLCBbd106IHQgfV0sXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBcImF3cy5wYXJ0aXRpb25cIiwgW3ddOiB0LCBhc3NpZ246IGcgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBoLCBbd106IFtvLCBcImF3c1wiXSB9LCBwLCBxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL3tSZWdpb259LnNpZ25pbi5hd3MuYW1hem9uLmNvbVwiLCBwcm9wZXJ0aWVzOiBuLCBoZWFkZXJzOiBuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGgsIFt3XTogW28sIFwiYXdzLWNuXCJdIH0sIHAsIHFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8ve1JlZ2lvbn0uc2lnbmluLmFtYXpvbmF3cy5jblwiLCBwcm9wZXJ0aWVzOiBuLCBoZWFkZXJzOiBuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGgsIFt3XTogW28sIFwiYXdzLXVzLWdvdlwiXSB9LCBwLCBxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL3tSZWdpb259LnNpZ25pbi5hbWF6b25hd3MtdXMtZ292LmNvbVwiLCBwcm9wZXJ0aWVzOiBuLCBoZWFkZXJzOiBuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbbCwgbV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBjLCBbd106IFthLCByXSB9LCBzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaWduaW4tZmlwcy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2R1YWxTdGFja0Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJGSVBTIGFuZCBEdWFsU3RhY2sgYXJlIGVuYWJsZWQsIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IG9uZSBvciBib3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbbCwgcV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBjLCBbd106IFtyLCBhXSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaWduaW4tZmlwcy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcjogXCJGSVBTIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRklQU1wiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3AsIG1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFtzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaWduaW4ue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRHVhbFN0YWNrIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRHVhbFN0YWNrXCIsIHR5cGU6IGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogeyB1cmw6IFwiaHR0cHM6Ly9zaWduaW4ue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkbnNTdWZmaXh9XCIsIHByb3BlcnRpZXM6IG4sIGhlYWRlcnM6IG4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBNaXNzaW5nIFJlZ2lvblwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCBydWxlU2V0ID0gX2RhdGE7XG4iLCAiaW1wb3J0IHsgYXdzRW5kcG9pbnRGdW5jdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1lbmRwb2ludHNcIjtcbmltcG9ydCB7IGN1c3RvbUVuZHBvaW50RnVuY3Rpb25zLCBFbmRwb2ludENhY2hlLCByZXNvbHZlRW5kcG9pbnQgfSBmcm9tIFwiQHNtaXRoeS91dGlsLWVuZHBvaW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldCB9IGZyb20gXCIuL3J1bGVzZXRcIjtcbmNvbnN0IGNhY2hlID0gbmV3IEVuZHBvaW50Q2FjaGUoe1xuICAgIHNpemU6IDUwLFxuICAgIHBhcmFtczogW1wiRW5kcG9pbnRcIiwgXCJSZWdpb25cIiwgXCJVc2VEdWFsU3RhY2tcIiwgXCJVc2VGSVBTXCJdLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgPSAoZW5kcG9pbnRQYXJhbXMsIGNvbnRleHQgPSB7fSkgPT4ge1xuICAgIHJldHVybiBjYWNoZS5nZXQoZW5kcG9pbnRQYXJhbXMsICgpID0+IHJlc29sdmVFbmRwb2ludChydWxlU2V0LCB7XG4gICAgICAgIGVuZHBvaW50UGFyYW1zOiBlbmRwb2ludFBhcmFtcyxcbiAgICAgICAgbG9nZ2VyOiBjb250ZXh0LmxvZ2dlcixcbiAgICB9KSk7XG59O1xuY3VzdG9tRW5kcG9pbnRGdW5jdGlvbnMuYXdzID0gYXdzRW5kcG9pbnRGdW5jdGlvbnM7XG4iLCAiaW1wb3J0IHsgU2VydmljZUV4Y2VwdGlvbiBhcyBfX1NlcnZpY2VFeGNlcHRpb24sIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuZXhwb3J0IHsgX19TZXJ2aWNlRXhjZXB0aW9uIH07XG5leHBvcnQgY2xhc3MgU2lnbmluU2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIF9fU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNpZ25pblNlcnZpY2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgU2lnbmluU2VydmljZUV4Y2VwdGlvbiBhcyBfX0Jhc2VFeGNlcHRpb24gfSBmcm9tIFwiLi9TaWduaW5TZXJ2aWNlRXhjZXB0aW9uXCI7XG5leHBvcnQgY2xhc3MgQWNjZXNzRGVuaWVkRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJBY2Nlc3NEZW5pZWRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGVycm9yO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJBY2Nlc3NEZW5pZWRFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQWNjZXNzRGVuaWVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBvcHRzLmVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcInNlcnZlclwiO1xuICAgIGVycm9yO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJJbnRlcm5hbFNlcnZlckV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcInNlcnZlclwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9vTWFueVJlcXVlc3RzRXJyb3IgZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlRvb01hbnlSZXF1ZXN0c0Vycm9yXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiVG9vTWFueVJlcXVlc3RzRXJyb3JcIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVG9vTWFueVJlcXVlc3RzRXJyb3IucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG9wdHMuZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlZhbGlkYXRpb25FeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGVycm9yO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJWYWxpZGF0aW9uRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFZhbGlkYXRpb25FeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG9wdHMuZXJyb3I7XG4gICAgfVxufVxuIiwgImNvbnN0IF9BREUgPSBcIkFjY2Vzc0RlbmllZEV4Y2VwdGlvblwiO1xuY29uc3QgX0FUID0gXCJBY2Nlc3NUb2tlblwiO1xuY29uc3QgX0NPQVQgPSBcIkNyZWF0ZU9BdXRoMlRva2VuXCI7XG5jb25zdCBfQ09BVFIgPSBcIkNyZWF0ZU9BdXRoMlRva2VuUmVxdWVzdFwiO1xuY29uc3QgX0NPQVRSQiA9IFwiQ3JlYXRlT0F1dGgyVG9rZW5SZXF1ZXN0Qm9keVwiO1xuY29uc3QgX0NPQVRSQnIgPSBcIkNyZWF0ZU9BdXRoMlRva2VuUmVzcG9uc2VCb2R5XCI7XG5jb25zdCBfQ09BVFJyID0gXCJDcmVhdGVPQXV0aDJUb2tlblJlc3BvbnNlXCI7XG5jb25zdCBfSVNFID0gXCJJbnRlcm5hbFNlcnZlckV4Y2VwdGlvblwiO1xuY29uc3QgX1JUID0gXCJSZWZyZXNoVG9rZW5cIjtcbmNvbnN0IF9UTVJFID0gXCJUb29NYW55UmVxdWVzdHNFcnJvclwiO1xuY29uc3QgX1ZFID0gXCJWYWxpZGF0aW9uRXhjZXB0aW9uXCI7XG5jb25zdCBfYUtJID0gXCJhY2Nlc3NLZXlJZFwiO1xuY29uc3QgX2FUID0gXCJhY2Nlc3NUb2tlblwiO1xuY29uc3QgX2MgPSBcImNsaWVudFwiO1xuY29uc3QgX2NJID0gXCJjbGllbnRJZFwiO1xuY29uc3QgX2NWID0gXCJjb2RlVmVyaWZpZXJcIjtcbmNvbnN0IF9jbyA9IFwiY29kZVwiO1xuY29uc3QgX2UgPSBcImVycm9yXCI7XG5jb25zdCBfZUkgPSBcImV4cGlyZXNJblwiO1xuY29uc3QgX2dUID0gXCJncmFudFR5cGVcIjtcbmNvbnN0IF9oID0gXCJodHRwXCI7XG5jb25zdCBfaEUgPSBcImh0dHBFcnJvclwiO1xuY29uc3QgX2lUID0gXCJpZFRva2VuXCI7XG5jb25zdCBfak4gPSBcImpzb25OYW1lXCI7XG5jb25zdCBfbSA9IFwibWVzc2FnZVwiO1xuY29uc3QgX3JUID0gXCJyZWZyZXNoVG9rZW5cIjtcbmNvbnN0IF9yVSA9IFwicmVkaXJlY3RVcmlcIjtcbmNvbnN0IF9zID0gXCJzbWl0aHkudHMuc2RrLnN5bnRoZXRpYy5jb20uYW1hem9uYXdzLnNpZ25pblwiO1xuY29uc3QgX3NBSyA9IFwic2VjcmV0QWNjZXNzS2V5XCI7XG5jb25zdCBfc1QgPSBcInNlc3Npb25Ub2tlblwiO1xuY29uc3QgX3NlID0gXCJzZXJ2ZXJcIjtcbmNvbnN0IF90SSA9IFwidG9rZW5JbnB1dFwiO1xuY29uc3QgX3RPID0gXCJ0b2tlbk91dHB1dFwiO1xuY29uc3QgX3RUID0gXCJ0b2tlblR5cGVcIjtcbmNvbnN0IG4wID0gXCJjb20uYW1hem9uYXdzLnNpZ25pblwiO1xuaW1wb3J0IHsgVHlwZVJlZ2lzdHJ5IH0gZnJvbSBcIkBzbWl0aHkvY29yZS9zY2hlbWFcIjtcbmltcG9ydCB7IEFjY2Vzc0RlbmllZEV4Y2VwdGlvbiwgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24sIFRvb01hbnlSZXF1ZXN0c0Vycm9yLCBWYWxpZGF0aW9uRXhjZXB0aW9uLCB9IGZyb20gXCIuLi9tb2RlbHMvZXJyb3JzXCI7XG5pbXBvcnQgeyBTaWduaW5TZXJ2aWNlRXhjZXB0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9TaWduaW5TZXJ2aWNlRXhjZXB0aW9uXCI7XG5jb25zdCBfc19yZWdpc3RyeSA9IFR5cGVSZWdpc3RyeS5mb3IoX3MpO1xuZXhwb3J0IHZhciBTaWduaW5TZXJ2aWNlRXhjZXB0aW9uJCA9IFstMywgX3MsIFwiU2lnbmluU2VydmljZUV4Y2VwdGlvblwiLCAwLCBbXSwgW11dO1xuX3NfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihTaWduaW5TZXJ2aWNlRXhjZXB0aW9uJCwgU2lnbmluU2VydmljZUV4Y2VwdGlvbik7XG5jb25zdCBuMF9yZWdpc3RyeSA9IFR5cGVSZWdpc3RyeS5mb3IobjApO1xuZXhwb3J0IHZhciBBY2Nlc3NEZW5pZWRFeGNlcHRpb24kID0gWy0zLCBuMCwgX0FERSwgeyBbX2VdOiBfYyB9LCBbX2UsIF9tXSwgWzAsIDBdLCAyXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoQWNjZXNzRGVuaWVkRXhjZXB0aW9uJCwgQWNjZXNzRGVuaWVkRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24kID0gWy0zLCBuMCwgX0lTRSwgeyBbX2VdOiBfc2UsIFtfaEVdOiA1MDAgfSwgW19lLCBfbV0sIFswLCAwXSwgMl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEludGVybmFsU2VydmVyRXhjZXB0aW9uJCwgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBUb29NYW55UmVxdWVzdHNFcnJvciQgPSBbLTMsIG4wLCBfVE1SRSwgeyBbX2VdOiBfYywgW19oRV06IDQyOSB9LCBbX2UsIF9tXSwgWzAsIDBdLCAyXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoVG9vTWFueVJlcXVlc3RzRXJyb3IkLCBUb29NYW55UmVxdWVzdHNFcnJvcik7XG5leHBvcnQgdmFyIFZhbGlkYXRpb25FeGNlcHRpb24kID0gWy0zLCBuMCwgX1ZFLCB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sIFtfZSwgX21dLCBbMCwgMF0sIDJdO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihWYWxpZGF0aW9uRXhjZXB0aW9uJCwgVmFsaWRhdGlvbkV4Y2VwdGlvbik7XG5leHBvcnQgY29uc3QgZXJyb3JUeXBlUmVnaXN0cmllcyA9IFtfc19yZWdpc3RyeSwgbjBfcmVnaXN0cnldO1xudmFyIFJlZnJlc2hUb2tlbiA9IFswLCBuMCwgX1JULCA4LCAwXTtcbmV4cG9ydCB2YXIgQWNjZXNzVG9rZW4kID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0FULFxuICAgIDgsXG4gICAgW19hS0ksIF9zQUssIF9zVF0sXG4gICAgW1xuICAgICAgICBbMCwgeyBbX2pOXTogX2FLSSB9XSxcbiAgICAgICAgWzAsIHsgW19qTl06IF9zQUsgfV0sXG4gICAgICAgIFswLCB7IFtfak5dOiBfc1QgfV0sXG4gICAgXSxcbiAgICAzLFxuXTtcbmV4cG9ydCB2YXIgQ3JlYXRlT0F1dGgyVG9rZW5SZXF1ZXN0JCA9IFtcbiAgICAzLFxuICAgIG4wLFxuICAgIF9DT0FUUixcbiAgICAwLFxuICAgIFtfdEldLFxuICAgIFtbKCkgPT4gQ3JlYXRlT0F1dGgyVG9rZW5SZXF1ZXN0Qm9keSQsIDE2XV0sXG4gICAgMSxcbl07XG5leHBvcnQgdmFyIENyZWF0ZU9BdXRoMlRva2VuUmVxdWVzdEJvZHkkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0NPQVRSQixcbiAgICAwLFxuICAgIFtfY0ksIF9nVCwgX2NvLCBfclUsIF9jViwgX3JUXSxcbiAgICBbXG4gICAgICAgIFswLCB7IFtfak5dOiBfY0kgfV0sXG4gICAgICAgIFswLCB7IFtfak5dOiBfZ1QgfV0sXG4gICAgICAgIDAsXG4gICAgICAgIFswLCB7IFtfak5dOiBfclUgfV0sXG4gICAgICAgIFswLCB7IFtfak5dOiBfY1YgfV0sXG4gICAgICAgIFsoKSA9PiBSZWZyZXNoVG9rZW4sIHsgW19qTl06IF9yVCB9XSxcbiAgICBdLFxuICAgIDIsXG5dO1xuZXhwb3J0IHZhciBDcmVhdGVPQXV0aDJUb2tlblJlc3BvbnNlJCA9IFtcbiAgICAzLFxuICAgIG4wLFxuICAgIF9DT0FUUnIsXG4gICAgMCxcbiAgICBbX3RPXSxcbiAgICBbWygpID0+IENyZWF0ZU9BdXRoMlRva2VuUmVzcG9uc2VCb2R5JCwgMTZdXSxcbiAgICAxLFxuXTtcbmV4cG9ydCB2YXIgQ3JlYXRlT0F1dGgyVG9rZW5SZXNwb25zZUJvZHkkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0NPQVRSQnIsXG4gICAgMCxcbiAgICBbX2FULCBfdFQsIF9lSSwgX3JULCBfaVRdLFxuICAgIFtcbiAgICAgICAgWygpID0+IEFjY2Vzc1Rva2VuJCwgeyBbX2pOXTogX2FUIH1dLFxuICAgICAgICBbMCwgeyBbX2pOXTogX3RUIH1dLFxuICAgICAgICBbMSwgeyBbX2pOXTogX2VJIH1dLFxuICAgICAgICBbKCkgPT4gUmVmcmVzaFRva2VuLCB7IFtfak5dOiBfclQgfV0sXG4gICAgICAgIFswLCB7IFtfak5dOiBfaVQgfV0sXG4gICAgXSxcbiAgICA0LFxuXTtcbmV4cG9ydCB2YXIgQ3JlYXRlT0F1dGgyVG9rZW4kID0gW1xuICAgIDksXG4gICAgbjAsXG4gICAgX0NPQVQsXG4gICAgeyBbX2hdOiBbXCJQT1NUXCIsIFwiL3YxL3Rva2VuXCIsIDIwMF0gfSxcbiAgICAoKSA9PiBDcmVhdGVPQXV0aDJUb2tlblJlcXVlc3QkLFxuICAgICgpID0+IENyZWF0ZU9BdXRoMlRva2VuUmVzcG9uc2UkLFxuXTtcbiIsICJpbXBvcnQgeyBBd3NTZGtTaWdWNFNpZ25lciB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2h0dHBBdXRoU2NoZW1lc1wiO1xuaW1wb3J0IHsgQXdzUmVzdEpzb25Qcm90b2NvbCB9IGZyb20gXCJAYXdzLXNkay9jb3JlL3Byb3RvY29sc1wiO1xuaW1wb3J0IHsgTm9BdXRoU2lnbmVyIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgTm9PcExvZ2dlciB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IHBhcnNlVXJsIH0gZnJvbSBcIkBzbWl0aHkvdXJsLXBhcnNlclwiO1xuaW1wb3J0IHsgZnJvbUJhc2U2NCwgdG9CYXNlNjQgfSBmcm9tIFwiQHNtaXRoeS91dGlsLWJhc2U2NFwiO1xuaW1wb3J0IHsgZnJvbVV0ZjgsIHRvVXRmOCB9IGZyb20gXCJAc21pdGh5L3V0aWwtdXRmOFwiO1xuaW1wb3J0IHsgZGVmYXVsdFNpZ25pbkh0dHBBdXRoU2NoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCB7IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyIH0gZnJvbSBcIi4vZW5kcG9pbnQvZW5kcG9pbnRSZXNvbHZlclwiO1xuaW1wb3J0IHsgZXJyb3JUeXBlUmVnaXN0cmllcyB9IGZyb20gXCIuL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcGlWZXJzaW9uOiBcIjIwMjMtMDEtMDFcIixcbiAgICAgICAgYmFzZTY0RGVjb2RlcjogY29uZmlnPy5iYXNlNjREZWNvZGVyID8/IGZyb21CYXNlNjQsXG4gICAgICAgIGJhc2U2NEVuY29kZXI6IGNvbmZpZz8uYmFzZTY0RW5jb2RlciA/PyB0b0Jhc2U2NCxcbiAgICAgICAgZGlzYWJsZUhvc3RQcmVmaXg6IGNvbmZpZz8uZGlzYWJsZUhvc3RQcmVmaXggPz8gZmFsc2UsXG4gICAgICAgIGVuZHBvaW50UHJvdmlkZXI6IGNvbmZpZz8uZW5kcG9pbnRQcm92aWRlciA/PyBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlcixcbiAgICAgICAgZXh0ZW5zaW9uczogY29uZmlnPy5leHRlbnNpb25zID8/IFtdLFxuICAgICAgICBodHRwQXV0aFNjaGVtZVByb3ZpZGVyOiBjb25maWc/Lmh0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPz8gZGVmYXVsdFNpZ25pbkh0dHBBdXRoU2NoZW1lUHJvdmlkZXIsXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lczogY29uZmlnPy5odHRwQXV0aFNjaGVtZXMgPz8gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjaGVtZUlkOiBcImF3cy5hdXRoI3NpZ3Y0XCIsXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogKGlwYykgPT4gaXBjLmdldElkZW50aXR5UHJvdmlkZXIoXCJhd3MuYXV0aCNzaWd2NFwiKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBBd3NTZGtTaWdWNFNpZ25lcigpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJzbWl0aHkuYXBpI25vQXV0aFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwic21pdGh5LmFwaSNub0F1dGhcIikgfHwgKGFzeW5jICgpID0+ICh7fSkpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogbmV3IE5vQXV0aFNpZ25lcigpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbG9nZ2VyOiBjb25maWc/LmxvZ2dlciA/PyBuZXcgTm9PcExvZ2dlcigpLFxuICAgICAgICBwcm90b2NvbDogY29uZmlnPy5wcm90b2NvbCA/PyBBd3NSZXN0SnNvblByb3RvY29sLFxuICAgICAgICBwcm90b2NvbFNldHRpbmdzOiBjb25maWc/LnByb3RvY29sU2V0dGluZ3MgPz8ge1xuICAgICAgICAgICAgZGVmYXVsdE5hbWVzcGFjZTogXCJjb20uYW1hem9uYXdzLnNpZ25pblwiLFxuICAgICAgICAgICAgZXJyb3JUeXBlUmVnaXN0cmllcyxcbiAgICAgICAgICAgIHZlcnNpb246IFwiMjAyMy0wMS0wMVwiLFxuICAgICAgICAgICAgc2VydmljZVRhcmdldDogXCJTaWduaW5cIixcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZUlkOiBjb25maWc/LnNlcnZpY2VJZCA/PyBcIlNpZ25pblwiLFxuICAgICAgICB1cmxQYXJzZXI6IGNvbmZpZz8udXJsUGFyc2VyID8/IHBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyBmcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdG9VdGY4LFxuICAgIH07XG59O1xuIiwgImltcG9ydCBwYWNrYWdlSW5mbyBmcm9tIFwiLi4vLi4vLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uIGFzIGF3c0NoZWNrVmVyc2lvbiB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiO1xuaW1wb3J0IHsgTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIjtcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlciwgTk9ERV9BUFBfSURfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIjtcbmltcG9ydCB7IE5PREVfUkVHSU9OX0NPTkZJR19GSUxFX09QVElPTlMsIE5PREVfUkVHSU9OX0NPTkZJR19PUFRJT05TLCBOT0RFX1VTRV9EVUFMU1RBQ0tfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIE5PREVfVVNFX0ZJUFNfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIH0gZnJvbSBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI7XG5pbXBvcnQgeyBIYXNoIH0gZnJvbSBcIkBzbWl0aHkvaGFzaC1ub2RlXCI7XG5pbXBvcnQgeyBOT0RFX01BWF9BVFRFTVBUX0NPTkZJR19PUFRJT05TLCBOT0RFX1JFVFJZX01PREVfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCI7XG5pbXBvcnQgeyBsb2FkQ29uZmlnIGFzIGxvYWROb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXJcIjtcbmltcG9ydCB7IE5vZGVIdHRwSGFuZGxlciBhcyBSZXF1ZXN0SGFuZGxlciwgc3RyZWFtQ29sbGVjdG9yIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIjtcbmltcG9ydCB7IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24sIGxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb2R5TGVuZ3RoIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1ub2RlXCI7XG5pbXBvcnQgeyByZXNvbHZlRGVmYXVsdHNNb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLW5vZGVcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVUUllfTU9ERSB9IGZyb20gXCJAc21pdGh5L3V0aWwtcmV0cnlcIjtcbmltcG9ydCB7IGdldFJ1bnRpbWVDb25maWcgYXMgZ2V0U2hhcmVkUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWcuc2hhcmVkXCI7XG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uKHByb2Nlc3MudmVyc2lvbik7XG4gICAgY29uc3QgZGVmYXVsdHNNb2RlID0gcmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWdQcm92aWRlciA9ICgpID0+IGRlZmF1bHRzTW9kZSgpLnRoZW4obG9hZENvbmZpZ3NGb3JEZWZhdWx0TW9kZSk7XG4gICAgY29uc3QgY2xpZW50U2hhcmVkVmFsdWVzID0gZ2V0U2hhcmVkUnVudGltZUNvbmZpZyhjb25maWcpO1xuICAgIGF3c0NoZWNrVmVyc2lvbihwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgICAgcHJvZmlsZTogY29uZmlnPy5wcm9maWxlLFxuICAgICAgICBsb2dnZXI6IGNsaWVudFNoYXJlZFZhbHVlcy5sb2dnZXIsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jbGllbnRTaGFyZWRWYWx1ZXMsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgcnVudGltZTogXCJub2RlXCIsXG4gICAgICAgIGRlZmF1bHRzTW9kZSxcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IGNvbmZpZz8uYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyOiBjb25maWc/LmJvZHlMZW5ndGhDaGVja2VyID8/IGNhbGN1bGF0ZUJvZHlMZW5ndGgsXG4gICAgICAgIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogY29uZmlnPy5kZWZhdWx0VXNlckFnZW50UHJvdmlkZXIgPz9cbiAgICAgICAgICAgIGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlcih7IHNlcnZpY2VJZDogY2xpZW50U2hhcmVkVmFsdWVzLnNlcnZpY2VJZCwgY2xpZW50VmVyc2lvbjogcGFja2FnZUluZm8udmVyc2lvbiB9KSxcbiAgICAgICAgbWF4QXR0ZW1wdHM6IGNvbmZpZz8ubWF4QXR0ZW1wdHMgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoTk9ERV9SRUdJT05fQ09ORklHX09QVElPTlMsIHsgLi4uTk9ERV9SRUdJT05fQ09ORklHX0ZJTEVfT1BUSU9OUywgLi4ubG9hZGVyQ29uZmlnIH0pLFxuICAgICAgICByZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIuY3JlYXRlKGNvbmZpZz8ucmVxdWVzdEhhbmRsZXIgPz8gZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKSxcbiAgICAgICAgcmV0cnlNb2RlOiBjb25maWc/LnJldHJ5TW9kZSA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCBERUZBVUxUX1JFVFJZX01PREUsXG4gICAgICAgICAgICB9LCBjb25maWcpLFxuICAgICAgICBzaGEyNTY6IGNvbmZpZz8uc2hhMjU2ID8/IEhhc2guYmluZChudWxsLCBcInNoYTI1NlwiKSxcbiAgICAgICAgc3RyZWFtQ29sbGVjdG9yOiBjb25maWc/LnN0cmVhbUNvbGxlY3RvciA/PyBzdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGxvYWROb2RlQ29uZmlnKE5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX0FQUF9JRF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICB9O1xufTtcbiIsICJleHBvcnQgY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWcuaHR0cEF1dGhTY2hlbWVzKCksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMoKSxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgeyBnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgfSBmcm9tIFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgY29uc3QgcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zID0gKHJ1bnRpbWVDb25maWcsIGV4dGVuc2lvbnMpID0+IHtcbiAgICBjb25zdCBleHRlbnNpb25Db25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZykpO1xuICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY29uZmlndXJlKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihydW50aW1lQ29uZmlnLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEhlYWRlclBsdWdpbiwgcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcsIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIjtcbmltcG9ydCB7IGdldExvZ2dlclBsdWdpbiB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLWxvZ2dlclwiO1xuaW1wb3J0IHsgZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50UGx1Z2luLCByZXNvbHZlVXNlckFnZW50Q29uZmlnLCB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjtcbmltcG9ydCB7IHJlc29sdmVSZWdpb25Db25maWcgfSBmcm9tIFwiQHNtaXRoeS9jb25maWctcmVzb2x2ZXJcIjtcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnLCBnZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbiwgZ2V0SHR0cFNpZ25pbmdQbHVnaW4sIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U2NoZW1hU2VyZGVQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudExlbmd0aFBsdWdpbiB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIjtcbmltcG9ydCB7IHJlc29sdmVFbmRwb2ludENvbmZpZywgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBnZXRSZXRyeVBsdWdpbiwgcmVzb2x2ZVJldHJ5Q29uZmlnLCB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIjtcbmltcG9ydCB7IENsaWVudCBhcyBfX0NsaWVudCwgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0U2lnbmluSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIsIHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZywgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCB7IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMsIH0gZnJvbSBcIi4vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBnZXRSdW50aW1lQ29uZmlnIGFzIF9fZ2V0UnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWdcIjtcbmltcG9ydCB7IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3J1bnRpbWVFeHRlbnNpb25zXCI7XG5leHBvcnQgeyBfX0NsaWVudCB9O1xuZXhwb3J0IGNsYXNzIFNpZ25pbkNsaWVudCBleHRlbmRzIF9fQ2xpZW50IHtcbiAgICBjb25maWc7XG4gICAgY29uc3RydWN0b3IoLi4uW2NvbmZpZ3VyYXRpb25dKSB7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMCA9IF9fZ2V0UnVudGltZUNvbmZpZyhjb25maWd1cmF0aW9uIHx8IHt9KTtcbiAgICAgICAgc3VwZXIoX2NvbmZpZ18wKTtcbiAgICAgICAgdGhpcy5pbml0Q29uZmlnID0gX2NvbmZpZ18wO1xuICAgICAgICBjb25zdCBfY29uZmlnXzEgPSByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzKF9jb25maWdfMCk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMiA9IHJlc29sdmVVc2VyQWdlbnRDb25maWcoX2NvbmZpZ18xKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18zID0gcmVzb2x2ZVJldHJ5Q29uZmlnKF9jb25maWdfMik7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNCA9IHJlc29sdmVSZWdpb25Db25maWcoX2NvbmZpZ18zKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ181ID0gcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcoX2NvbmZpZ180KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ182ID0gcmVzb2x2ZUVuZHBvaW50Q29uZmlnKF9jb25maWdfNSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNyA9IHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZyhfY29uZmlnXzYpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzggPSByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMoX2NvbmZpZ183LCBjb25maWd1cmF0aW9uPy5leHRlbnNpb25zIHx8IFtdKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfY29uZmlnXzg7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRTY2hlbWFTZXJkZVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0VXNlckFnZW50UGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZXRyeVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0Q29udGVudExlbmd0aFBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0SG9zdEhlYWRlclBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0TG9nZ2VyUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZWN1cnNpb25EZXRlY3Rpb25QbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0UGx1Z2luKHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgICBodHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcjogZGVmYXVsdFNpZ25pbkh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLFxuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyOiBhc3luYyAoY29uZmlnKSA9PiBuZXcgRGVmYXVsdElkZW50aXR5UHJvdmlkZXJDb25maWcoe1xuICAgICAgICAgICAgICAgIFwiYXdzLmF1dGgjc2lndjRcIjogY29uZmlnLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBTaWduaW5nUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0RW5kcG9pbnRQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY29tbW9uUGFyYW1zIH0gZnJvbSBcIi4uL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQ3JlYXRlT0F1dGgyVG9rZW4kIH0gZnJvbSBcIi4uL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgeyAkQ29tbWFuZCB9O1xuZXhwb3J0IGNsYXNzIENyZWF0ZU9BdXRoMlRva2VuQ29tbWFuZCBleHRlbmRzICRDb21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKGNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJTaWduaW5cIiwgXCJDcmVhdGVPQXV0aDJUb2tlblwiLCB7fSlcbiAgICAubihcIlNpZ25pbkNsaWVudFwiLCBcIkNyZWF0ZU9BdXRoMlRva2VuQ29tbWFuZFwiKVxuICAgIC5zYyhDcmVhdGVPQXV0aDJUb2tlbiQpXG4gICAgLmJ1aWxkKCkge1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVPQXV0aDJUb2tlbkNvbW1hbmQsIH0gZnJvbSBcIi4vY29tbWFuZHMvQ3JlYXRlT0F1dGgyVG9rZW5Db21tYW5kXCI7XG5pbXBvcnQgeyBTaWduaW5DbGllbnQgfSBmcm9tIFwiLi9TaWduaW5DbGllbnRcIjtcbmNvbnN0IGNvbW1hbmRzID0ge1xuICAgIENyZWF0ZU9BdXRoMlRva2VuQ29tbWFuZCxcbn07XG5leHBvcnQgY2xhc3MgU2lnbmluIGV4dGVuZHMgU2lnbmluQ2xpZW50IHtcbn1cbmNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQoY29tbWFuZHMsIFNpZ25pbik7XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vQ3JlYXRlT0F1dGgyVG9rZW5Db21tYW5kXCI7XG4iLCAiZXhwb3J0IGNvbnN0IE9BdXRoMkVycm9yQ29kZSA9IHtcbiAgICBBVVRIQ09ERV9FWFBJUkVEOiBcIkFVVEhDT0RFX0VYUElSRURcIixcbiAgICBJTlNVRkZJQ0lFTlRfUEVSTUlTU0lPTlM6IFwiSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCIsXG4gICAgSU5WQUxJRF9SRVFVRVNUOiBcIklOVkFMSURfUkVRVUVTVFwiLFxuICAgIFNFUlZFUl9FUlJPUjogXCJzZXJ2ZXJfZXJyb3JcIixcbiAgICBUT0tFTl9FWFBJUkVEOiBcIlRPS0VOX0VYUElSRURcIixcbiAgICBVU0VSX0NSRURFTlRJQUxTX0NIQU5HRUQ6IFwiVVNFUl9DUkVERU5USUFMU19DSEFOR0VEXCIsXG59O1xuIiwgImV4cG9ydCB7fTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9TaWduaW5DbGllbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NpZ25pblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvZW51bXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVscy9lcnJvcnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVscy9tb2RlbHNfMFwiO1xuZXhwb3J0IHsgU2lnbmluU2VydmljZUV4Y2VwdGlvbiB9IGZyb20gXCIuL21vZGVscy9TaWduaW5TZXJ2aWNlRXhjZXB0aW9uXCI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsU0FBUyxpQ0FBaUMsZ0JBQWdCO0FBQ3RELFNBQU87QUFBQSxJQUNILFVBQVU7QUFBQSxJQUNWLG1CQUFtQjtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sUUFBUSxlQUFlO0FBQUEsSUFDM0I7QUFBQSxJQUNBLHFCQUFxQixDQUFDLFFBQVEsYUFBYTtBQUFBLE1BQ3ZDLG1CQUFtQjtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0o7QUFDQSxTQUFTLG9DQUFvQyxnQkFBZ0I7QUFD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OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3V0aWxfZW5kcG9pbnRzIiwgIl9fU2VydmljZUV4Y2VwdGlvbiIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJnZXRSdW50aW1lQ29uZmlnIiwgImxvYWROb2RlQ29uZmlnIiwgIlJlcXVlc3RIYW5kbGVyIiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImltcG9ydF9jb25maWdfcmVzb2x2ZXIiLCAiaW1wb3J0X21pZGRsZXdhcmVfcmV0cnkiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiX19DbGllbnQiLCAiZ2V0UnVudGltZUNvbmZpZyIsICJpbXBvcnRfbWlkZGxld2FyZV9lbmRwb2ludCIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICIkQ29tbWFuZCIsICJvIiwgImltcG9ydF9zbWl0aHlfY2xpZW50Il0KfQo=
