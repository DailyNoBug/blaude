#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs27
} from "./chunk-TR2Q2AOE.mjs";
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
  require_dist_cjs as require_dist_cjs11,
  require_dist_cjs10 as require_dist_cjs20,
  require_dist_cjs11 as require_dist_cjs21,
  require_dist_cjs12 as require_dist_cjs22,
  require_dist_cjs13 as require_dist_cjs23,
  require_dist_cjs14 as require_dist_cjs24,
  require_dist_cjs15 as require_dist_cjs25,
  require_dist_cjs16 as require_dist_cjs26,
  require_dist_cjs2 as require_dist_cjs12,
  require_dist_cjs3 as require_dist_cjs13,
  require_dist_cjs4 as require_dist_cjs14,
  require_dist_cjs5 as require_dist_cjs15,
  require_dist_cjs6 as require_dist_cjs16,
  require_dist_cjs7 as require_dist_cjs17,
  require_dist_cjs8 as require_dist_cjs18,
  require_dist_cjs9 as require_dist_cjs19,
  resolveAwsSdkSigV4Config
} from "./chunk-2IEENXIQ.mjs";
import {
  DefaultIdentityProviderConfig,
  NoAuthSigner,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-EZHETOM7.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs as require_dist_cjs10
} from "./chunk-RR3PN36J.mjs";
import {
  TypeRegistry,
  getSchemaSerdePlugin,
  init_schema,
  require_dist_cjs as require_dist_cjs8,
  require_dist_cjs5 as require_dist_cjs9
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs3 as require_dist_cjs2
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  client_exports,
  emitWarningIfUnsupportedVersion,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs6
} from "./chunk-FONUB5ET.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-NE3ECB5D.mjs";
import {
  require_dist_cjs3 as require_dist_cjs7
} from "./chunk-HJNATCD3.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
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
var import_util_middleware, defaultSSOHttpAuthSchemeParametersProvider, defaultSSOHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes();
    import_util_middleware = __toESM(require_dist_cjs9());
    defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/ruleset.js"() {
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
    h = "getAttr";
    i = { [u]: false, type: "string" };
    j = { [u]: true, default: false, type: "boolean" };
    k = { [x]: "Endpoint" };
    l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    n = {};
    o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    p = { [x]: g };
    q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    r = [l];
    s = [m];
    t = [{ [x]: "Region" }];
    _data = {
      version: "1.0",
      parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i },
      rules: [
        {
          conditions: [{ [v]: b, [w]: [k] }],
          rules: [
            { conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d },
            { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d },
            { endpoint: { url: k, properties: n, headers: n }, type: e }
          ],
          type: f
        },
        {
          conditions: [{ [v]: b, [w]: t }],
          rules: [
            {
              conditions: [{ [v]: "aws.partition", [w]: t, assign: g }],
              rules: [
                {
                  conditions: [l, m],
                  rules: [
                    {
                      conditions: [{ [v]: c, [w]: [a, o] }, q],
                      rules: [
                        {
                          endpoint: {
                            url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: n,
                            headers: n
                          },
                          type: e
                        }
                      ],
                      type: f
                    },
                    { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }
                  ],
                  type: f
                },
                {
                  conditions: r,
                  rules: [
                    {
                      conditions: [{ [v]: c, [w]: [o, a] }],
                      rules: [
                        {
                          conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }],
                          endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n },
                          type: e
                        },
                        {
                          endpoint: {
                            url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
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
                  conditions: s,
                  rules: [
                    {
                      conditions: [q],
                      rules: [
                        {
                          endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
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
                  endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n },
                  type: e
                }
              ],
              type: f
            }
          ],
          type: f
        },
        { error: "Invalid Configuration: Missing Region", type: d }
      ]
    };
    ruleSet = _data;
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs15());
    import_util_endpoints2 = __toESM(require_dist_cjs14());
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/SSOServiceException.js
var import_smithy_client, SSOServiceException;
var init_SSOServiceException = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/SSOServiceException.js"() {
    import_smithy_client = __toESM(require_dist_cjs10());
    SSOServiceException = class _SSOServiceException extends import_smithy_client.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/errors.js
var InvalidRequestException, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException;
var init_errors = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/errors.js"() {
    init_SSOServiceException();
    InvalidRequestException = class _InvalidRequestException extends SSOServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/schemas/schemas_0.js
var _ATT, _GRC, _GRCR, _GRCRe, _IRE, _RC, _RNFE, _SAKT, _STT, _TMRE, _UE, _aI, _aKI, _aT, _ai, _c, _e, _ex, _h, _hE, _hH, _hQ, _m, _rC, _rN, _rn, _s, _sAK, _sT, _xasbt, n0, _s_registry, SSOServiceException$, n0_registry, InvalidRequestException$, ResourceNotFoundException$, TooManyRequestsException$, UnauthorizedException$, errorTypeRegistries, AccessTokenType, SecretAccessKeyType, SessionTokenType, GetRoleCredentialsRequest$, GetRoleCredentialsResponse$, RoleCredentials$, GetRoleCredentials$;
var init_schemas_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/schemas/schemas_0.js"() {
    init_schema();
    init_errors();
    init_SSOServiceException();
    _ATT = "AccessTokenType";
    _GRC = "GetRoleCredentials";
    _GRCR = "GetRoleCredentialsRequest";
    _GRCRe = "GetRoleCredentialsResponse";
    _IRE = "InvalidRequestException";
    _RC = "RoleCredentials";
    _RNFE = "ResourceNotFoundException";
    _SAKT = "SecretAccessKeyType";
    _STT = "SessionTokenType";
    _TMRE = "TooManyRequestsException";
    _UE = "UnauthorizedException";
    _aI = "accountId";
    _aKI = "accessKeyId";
    _aT = "accessToken";
    _ai = "account_id";
    _c = "client";
    _e = "error";
    _ex = "expiration";
    _h = "http";
    _hE = "httpError";
    _hH = "httpHeader";
    _hQ = "httpQuery";
    _m = "message";
    _rC = "roleCredentials";
    _rN = "roleName";
    _rn = "role_name";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.sso";
    _sAK = "secretAccessKey";
    _sT = "sessionToken";
    _xasbt = "x-amz-sso_bearer_token";
    n0 = "com.amazonaws.sso";
    _s_registry = TypeRegistry.for(_s);
    SSOServiceException$ = [-3, _s, "SSOServiceException", 0, [], []];
    _s_registry.registerError(SSOServiceException$, SSOServiceException);
    n0_registry = TypeRegistry.for(n0);
    InvalidRequestException$ = [-3, n0, _IRE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
    n0_registry.registerError(InvalidRequestException$, InvalidRequestException);
    ResourceNotFoundException$ = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
    n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
    TooManyRequestsException$ = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
    n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
    UnauthorizedException$ = [-3, n0, _UE, { [_e]: _c, [_hE]: 401 }, [_m], [0]];
    n0_registry.registerError(UnauthorizedException$, UnauthorizedException);
    errorTypeRegistries = [_s_registry, n0_registry];
    AccessTokenType = [0, n0, _ATT, 8, 0];
    SecretAccessKeyType = [0, n0, _SAKT, 8, 0];
    SessionTokenType = [0, n0, _STT, 8, 0];
    GetRoleCredentialsRequest$ = [
      3,
      n0,
      _GRCR,
      0,
      [_rN, _aI, _aT],
      [
        [0, { [_hQ]: _rn }],
        [0, { [_hQ]: _ai }],
        [() => AccessTokenType, { [_hH]: _xasbt }]
      ],
      3
    ];
    GetRoleCredentialsResponse$ = [
      3,
      n0,
      _GRCRe,
      0,
      [_rC],
      [[() => RoleCredentials$, 0]]
    ];
    RoleCredentials$ = [
      3,
      n0,
      _RC,
      0,
      [_aKI, _sAK, _sT, _ex],
      [0, [() => SecretAccessKeyType, 0], [() => SessionTokenType, 0], 1]
    ];
    GetRoleCredentials$ = [
      9,
      n0,
      _GRC,
      { [_h]: ["GET", "/federation/credentials", 200] },
      () => GetRoleCredentialsRequest$,
      () => GetRoleCredentialsResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.shared.js
var import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.shared.js"() {
    init_httpAuthSchemes();
    init_protocols();
    init_dist_es();
    import_smithy_client2 = __toESM(require_dist_cjs10());
    import_url_parser = __toESM(require_dist_cjs6());
    import_util_base64 = __toESM(require_dist_cjs8());
    import_util_utf8 = __toESM(require_dist_cjs7());
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    init_schemas_0();
    getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
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
          defaultNamespace: "com.amazonaws.sso",
          errorTypeRegistries,
          version: "2019-06-10",
          serviceTarget: "SWBPortalService"
        },
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.js"() {
    init_package();
    init_client();
    init_httpAuthSchemes();
    import_util_user_agent_node = __toESM(require_dist_cjs22());
    import_config_resolver = __toESM(require_dist_cjs18());
    import_hash_node = __toESM(require_dist_cjs23());
    import_middleware_retry = __toESM(require_dist_cjs21());
    import_node_config_provider = __toESM(require_dist_cjs5());
    import_node_http_handler = __toESM(require_dist_cjs2());
    import_smithy_client3 = __toESM(require_dist_cjs10());
    import_util_body_length_node = __toESM(require_dist_cjs24());
    import_util_defaults_mode_node = __toESM(require_dist_cjs25());
    import_util_retry = __toESM(require_dist_cjs16());
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthExtensionConfiguration.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeExtensions.js"() {
    import_region_config_resolver = __toESM(require_dist_cjs26());
    import_protocol_http = __toESM(require_dist_cjs());
    import_smithy_client4 = __toESM(require_dist_cjs10());
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client4.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client4.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSOClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, SSOClient;
var init_SSOClient = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSOClient.js"() {
    import_middleware_host_header = __toESM(require_dist_cjs11());
    import_middleware_logger = __toESM(require_dist_cjs12());
    import_middleware_recursion_detection = __toESM(require_dist_cjs13());
    import_middleware_user_agent = __toESM(require_dist_cjs17());
    import_config_resolver2 = __toESM(require_dist_cjs18());
    init_dist_es();
    init_schema();
    import_middleware_content_length = __toESM(require_dist_cjs19());
    import_middleware_endpoint = __toESM(require_dist_cjs20());
    import_middleware_retry2 = __toESM(require_dist_cjs21());
    import_smithy_client5 = __toESM(require_dist_cjs10());
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOClient = class extends import_smithy_client5.Client {
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
          httpAuthSchemeParametersProvider: defaultSSOHttpAuthSchemeParametersProvider,
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/GetRoleCredentialsCommand.js
var import_middleware_endpoint2, import_smithy_client6, GetRoleCredentialsCommand;
var init_GetRoleCredentialsCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/GetRoleCredentialsCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs20());
    import_smithy_client6 = __toESM(require_dist_cjs10());
    init_EndpointParameters();
    init_schemas_0();
    GetRoleCredentialsCommand = class extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(GetRoleCredentials$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSO.js
var import_smithy_client7, commands, SSO;
var init_SSO = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSO.js"() {
    import_smithy_client7 = __toESM(require_dist_cjs10());
    init_GetRoleCredentialsCommand();
    init_SSOClient();
    commands = {
      GetRoleCredentialsCommand
    };
    SSO = class extends SSOClient {
    };
    (0, import_smithy_client7.createAggregatedClient)(commands, SSO);
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/index.js
var init_commands = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/index.js"() {
    init_GetRoleCredentialsCommand();
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/models_0.js
var init_models_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/models_0.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/index.js
var sso_exports = {};
__export(sso_exports, {
  $Command: () => import_smithy_client6.Command,
  GetRoleCredentials$: () => GetRoleCredentials$,
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  GetRoleCredentialsRequest$: () => GetRoleCredentialsRequest$,
  GetRoleCredentialsResponse$: () => GetRoleCredentialsResponse$,
  InvalidRequestException: () => InvalidRequestException,
  InvalidRequestException$: () => InvalidRequestException$,
  ResourceNotFoundException: () => ResourceNotFoundException,
  ResourceNotFoundException$: () => ResourceNotFoundException$,
  RoleCredentials$: () => RoleCredentials$,
  SSO: () => SSO,
  SSOClient: () => SSOClient,
  SSOServiceException: () => SSOServiceException,
  SSOServiceException$: () => SSOServiceException$,
  TooManyRequestsException: () => TooManyRequestsException,
  TooManyRequestsException$: () => TooManyRequestsException$,
  UnauthorizedException: () => UnauthorizedException,
  UnauthorizedException$: () => UnauthorizedException$,
  __Client: () => import_smithy_client5.Client,
  errorTypeRegistries: () => errorTypeRegistries
});
var init_sso = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/index.js"() {
    init_SSOClient();
    init_SSO();
    init_commands();
    init_schemas_0();
    init_errors();
    init_models_0();
    init_SSOServiceException();
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.972.28/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/loadSso-BKDNrsal.js
var require_loadSso_BKDNrsal = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.972.28/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/loadSso-BKDNrsal.js"(exports) {
    "use strict";
    var sso = (init_sso(), __toCommonJS(sso_exports));
    exports.GetRoleCredentialsCommand = sso.GetRoleCredentialsCommand;
    exports.SSOClient = sso.SSOClient;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.972.28/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.972.28/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js"(exports) {
    var propertyProvider = require_dist_cjs3();
    var sharedIniFileLoader = require_dist_cjs4();
    var client = (init_client(), __toCommonJS(client_exports));
    var tokenProviders = require_dist_cjs27();
    var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
    var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    var resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, callerClientConfig, profile, filepath, configFilepath, ignoreCache, logger }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await tokenProviders.fromSso({
            profile,
            filepath,
            configFilepath,
            ignoreCache
          })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e2) {
          throw new propertyProvider.CredentialsProviderError(e2.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger
          });
        }
      } else {
        try {
          token = await sharedIniFileLoader.getSSOTokenFromFile(ssoStartUrl);
        } catch (e2) {
          throw new propertyProvider.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new propertyProvider.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(function() {
        return require_loadSso_BKDNrsal();
      });
      const sso = ssoClient || new SSOClient2(Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? callerClientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId: clientConfig?.userAgentAppId ?? callerClientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand2({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e2) {
        throw new propertyProvider.CredentialsProviderError(e2, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new propertyProvider.CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const credentials = {
        accessKeyId,
        secretAccessKey,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && { credentialScope },
        ...accountId && { accountId }
      };
      if (ssoSession) {
        client.setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
      } else {
        client.setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
      }
      return credentials;
    };
    var validateSsoProfile = (profile, logger) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new propertyProvider.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger });
      }
      return profile;
    };
    var fromSSO = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await sharedIniFileLoader.parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await sharedIniFileLoader.loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new propertyProvider.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new propertyProvider.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          callerClientConfig: init.callerClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new propertyProvider.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          callerClientConfig: init.callerClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      }
    };
    exports.fromSSO = fromSSO;
    exports.isSsoProfile = isSsoProfile;
    exports.validateSsoProfile = validateSsoProfile;
  }
});

export {
  require_dist_cjs28 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9lbmRwb2ludC9ydWxlc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9tb2RlbHMvU1NPU2VydmljZUV4Y2VwdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vbW9kZWxzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vc2NoZW1hcy9zY2hlbWFzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvL3J1bnRpbWVDb25maWcuc2hhcmVkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9ydW50aW1lQ29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vcnVudGltZUV4dGVuc2lvbnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvL1NTT0NsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vY29tbWFuZHMvR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vU1NPLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9jb21tYW5kcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vbW9kZWxzL21vZGVsc18wLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1zc29AMy45NzIuMjgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItc3NvL2Rpc3QtY2pzL2xvYWRTc28tQktETnJzYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItc3NvQDMuOTcyLjI4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXNzby9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgcmVzb2x2ZUF3c1Nka1NpZ1Y0Q29uZmlnIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBnZXRTbWl0aHlDb250ZXh0LCBub3JtYWxpemVQcm92aWRlciB9IGZyb20gXCJAc21pdGh5L3V0aWwtbWlkZGxld2FyZVwiO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTU09IdHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlciA9IGFzeW5jIChjb25maWcsIGNvbnRleHQsIGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0aW9uOiBnZXRTbWl0aHlDb250ZXh0KGNvbnRleHQpLm9wZXJhdGlvbixcbiAgICAgICAgcmVnaW9uOiAoYXdhaXQgbm9ybWFsaXplUHJvdmlkZXIoY29uZmlnLnJlZ2lvbikoKSkgfHxcbiAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgYHJlZ2lvbmAgdG8gYmUgY29uZmlndXJlZCBmb3IgYGF3cy5hdXRoI3NpZ3Y0YFwiKTtcbiAgICAgICAgICAgIH0pKCksXG4gICAgfTtcbn07XG5mdW5jdGlvbiBjcmVhdGVBd3NBdXRoU2lndjRIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtZUlkOiBcImF3cy5hdXRoI3NpZ3Y0XCIsXG4gICAgICAgIHNpZ25pbmdQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImF3c3Nzb3BvcnRhbFwiLFxuICAgICAgICAgICAgcmVnaW9uOiBhdXRoUGFyYW1ldGVycy5yZWdpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BlcnRpZXNFeHRyYWN0b3I6IChjb25maWcsIGNvbnRleHQpID0+ICh7XG4gICAgICAgICAgICBzaWduaW5nUHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNtaXRoeUFwaU5vQXV0aEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNub0F1dGhcIixcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTU09IdHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gKGF1dGhQYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIHN3aXRjaCAoYXV0aFBhcmFtZXRlcnMub3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJHZXRSb2xlQ3JlZGVudGlhbHNcIjoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZVNtaXRoeUFwaU5vQXV0aEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlQXdzQXV0aFNpZ3Y0SHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZUh0dHBBdXRoU2NoZW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ18wID0gcmVzb2x2ZUF3c1Nka1NpZ1Y0Q29uZmlnKGNvbmZpZyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnXzAsIHtcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IG5vcm1hbGl6ZVByb3ZpZGVyKGNvbmZpZy5hdXRoU2NoZW1lUHJlZmVyZW5jZSA/PyBbXSksXG4gICAgfSk7XG59O1xuIiwgImV4cG9ydCBjb25zdCByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBvcHRpb25zLnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICB1c2VGaXBzRW5kcG9pbnQ6IG9wdGlvbnMudXNlRmlwc0VuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICBkZWZhdWx0U2lnbmluZ05hbWU6IFwiYXdzc3NvcG9ydGFsXCIsXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICBVc2VGSVBTOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUZpcHNFbmRwb2ludFwiIH0sXG4gICAgRW5kcG9pbnQ6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwiZW5kcG9pbnRcIiB9LFxuICAgIFJlZ2lvbjogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJyZWdpb25cIiB9LFxuICAgIFVzZUR1YWxTdGFjazogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VEdWFsc3RhY2tFbmRwb2ludFwiIH0sXG59O1xuIiwgImNvbnN0IHUgPSBcInJlcXVpcmVkXCIsIHYgPSBcImZuXCIsIHcgPSBcImFyZ3ZcIiwgeCA9IFwicmVmXCI7XG5jb25zdCBhID0gdHJ1ZSwgYiA9IFwiaXNTZXRcIiwgYyA9IFwiYm9vbGVhbkVxdWFsc1wiLCBkID0gXCJlcnJvclwiLCBlID0gXCJlbmRwb2ludFwiLCBmID0gXCJ0cmVlXCIsIGcgPSBcIlBhcnRpdGlvblJlc3VsdFwiLCBoID0gXCJnZXRBdHRyXCIsIGkgPSB7IFt1XTogZmFsc2UsIHR5cGU6IFwic3RyaW5nXCIgfSwgaiA9IHsgW3VdOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSwgdHlwZTogXCJib29sZWFuXCIgfSwgayA9IHsgW3hdOiBcIkVuZHBvaW50XCIgfSwgbCA9IHsgW3ZdOiBjLCBbd106IFt7IFt4XTogXCJVc2VGSVBTXCIgfSwgdHJ1ZV0gfSwgbSA9IHsgW3ZdOiBjLCBbd106IFt7IFt4XTogXCJVc2VEdWFsU3RhY2tcIiB9LCB0cnVlXSB9LCBuID0ge30sIG8gPSB7IFt2XTogaCwgW3ddOiBbeyBbeF06IGcgfSwgXCJzdXBwb3J0c0ZJUFNcIl0gfSwgcCA9IHsgW3hdOiBnIH0sIHEgPSB7IFt2XTogYywgW3ddOiBbdHJ1ZSwgeyBbdl06IGgsIFt3XTogW3AsIFwic3VwcG9ydHNEdWFsU3RhY2tcIl0gfV0gfSwgciA9IFtsXSwgcyA9IFttXSwgdCA9IFt7IFt4XTogXCJSZWdpb25cIiB9XTtcbmNvbnN0IF9kYXRhID0ge1xuICAgIHZlcnNpb246IFwiMS4wXCIsXG4gICAgcGFyYW1ldGVyczogeyBSZWdpb246IGksIFVzZUR1YWxTdGFjazogaiwgVXNlRklQUzogaiwgRW5kcG9pbnQ6IGkgfSxcbiAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGIsIFt3XTogW2tdIH1dLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IHIsIGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogRklQUyBhbmQgY3VzdG9tIGVuZHBvaW50IGFyZSBub3Qgc3VwcG9ydGVkXCIsIHR5cGU6IGQgfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IHMsIGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogRHVhbHN0YWNrIGFuZCBjdXN0b20gZW5kcG9pbnQgYXJlIG5vdCBzdXBwb3J0ZWRcIiwgdHlwZTogZCB9LFxuICAgICAgICAgICAgICAgIHsgZW5kcG9pbnQ6IHsgdXJsOiBrLCBwcm9wZXJ0aWVzOiBuLCBoZWFkZXJzOiBuIH0sIHR5cGU6IGUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGIsIFt3XTogdCB9XSxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IFwiYXdzLnBhcnRpdGlvblwiLCBbd106IHQsIGFzc2lnbjogZyB9XSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbbCwgbV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBjLCBbd106IFthLCBvXSB9LCBxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vcG9ydGFsLnNzby1maXBzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZHVhbFN0YWNrRG5zU3VmZml4fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9yOiBcIkZJUFMgYW5kIER1YWxTdGFjayBhcmUgZW5hYmxlZCwgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgb25lIG9yIGJvdGhcIiwgdHlwZTogZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGMsIFt3XTogW28sIGFdIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogXCJzdHJpbmdFcXVhbHNcIiwgW3ddOiBbeyBbdl06IGgsIFt3XTogW3AsIFwibmFtZVwiXSB9LCBcImF3cy11cy1nb3ZcIl0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL3BvcnRhbC5zc28ue1JlZ2lvbn0uYW1hem9uYXdzLmNvbVwiLCBwcm9wZXJ0aWVzOiBuLCBoZWFkZXJzOiBuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wb3J0YWwuc3NvLWZpcHMue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRklQUyBpcyBlbmFibGVkIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IEZJUFNcIiwgdHlwZTogZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbcV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3BvcnRhbC5zc28ue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRHVhbFN0YWNrIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRHVhbFN0YWNrXCIsIHR5cGU6IGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL3BvcnRhbC5zc28ue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkbnNTdWZmaXh9XCIsIHByb3BlcnRpZXM6IG4sIGhlYWRlcnM6IG4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgIH0sXG4gICAgICAgIHsgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBNaXNzaW5nIFJlZ2lvblwiLCB0eXBlOiBkIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgcnVsZVNldCA9IF9kYXRhO1xuIiwgImltcG9ydCB7IGF3c0VuZHBvaW50RnVuY3Rpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBjdXN0b21FbmRwb2ludEZ1bmN0aW9ucywgRW5kcG9pbnRDYWNoZSwgcmVzb2x2ZUVuZHBvaW50IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1lbmRwb2ludHNcIjtcbmltcG9ydCB7IHJ1bGVTZXQgfSBmcm9tIFwiLi9ydWxlc2V0XCI7XG5jb25zdCBjYWNoZSA9IG5ldyBFbmRwb2ludENhY2hlKHtcbiAgICBzaXplOiA1MCxcbiAgICBwYXJhbXM6IFtcIkVuZHBvaW50XCIsIFwiUmVnaW9uXCIsIFwiVXNlRHVhbFN0YWNrXCIsIFwiVXNlRklQU1wiXSxcbn0pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyID0gKGVuZHBvaW50UGFyYW1zLCBjb250ZXh0ID0ge30pID0+IHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGVuZHBvaW50UGFyYW1zLCAoKSA9PiByZXNvbHZlRW5kcG9pbnQocnVsZVNldCwge1xuICAgICAgICBlbmRwb2ludFBhcmFtczogZW5kcG9pbnRQYXJhbXMsXG4gICAgICAgIGxvZ2dlcjogY29udGV4dC5sb2dnZXIsXG4gICAgfSkpO1xufTtcbmN1c3RvbUVuZHBvaW50RnVuY3Rpb25zLmF3cyA9IGF3c0VuZHBvaW50RnVuY3Rpb25zO1xuIiwgImltcG9ydCB7IFNlcnZpY2VFeGNlcHRpb24gYXMgX19TZXJ2aWNlRXhjZXB0aW9uLCB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmV4cG9ydCB7IF9fU2VydmljZUV4Y2VwdGlvbiB9O1xuZXhwb3J0IGNsYXNzIFNTT1NlcnZpY2VFeGNlcHRpb24gZXh0ZW5kcyBfX1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTU09TZXJ2aWNlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFNTT1NlcnZpY2VFeGNlcHRpb24gYXMgX19CYXNlRXhjZXB0aW9uIH0gZnJvbSBcIi4vU1NPU2VydmljZUV4Y2VwdGlvblwiO1xuZXhwb3J0IGNsYXNzIEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkludmFsaWRSZXF1ZXN0RXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlc291cmNlTm90Rm91bmRFeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlJlc291cmNlTm90Rm91bmRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFJlc291cmNlTm90Rm91bmRFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJUb29NYW55UmVxdWVzdHNFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJUb29NYW55UmVxdWVzdHNFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiVW5hdXRob3JpemVkRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiVW5hdXRob3JpemVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFVuYXV0aG9yaXplZEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbiIsICJjb25zdCBfQVRUID0gXCJBY2Nlc3NUb2tlblR5cGVcIjtcbmNvbnN0IF9HUkMgPSBcIkdldFJvbGVDcmVkZW50aWFsc1wiO1xuY29uc3QgX0dSQ1IgPSBcIkdldFJvbGVDcmVkZW50aWFsc1JlcXVlc3RcIjtcbmNvbnN0IF9HUkNSZSA9IFwiR2V0Um9sZUNyZWRlbnRpYWxzUmVzcG9uc2VcIjtcbmNvbnN0IF9JUkUgPSBcIkludmFsaWRSZXF1ZXN0RXhjZXB0aW9uXCI7XG5jb25zdCBfUkMgPSBcIlJvbGVDcmVkZW50aWFsc1wiO1xuY29uc3QgX1JORkUgPSBcIlJlc291cmNlTm90Rm91bmRFeGNlcHRpb25cIjtcbmNvbnN0IF9TQUtUID0gXCJTZWNyZXRBY2Nlc3NLZXlUeXBlXCI7XG5jb25zdCBfU1RUID0gXCJTZXNzaW9uVG9rZW5UeXBlXCI7XG5jb25zdCBfVE1SRSA9IFwiVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uXCI7XG5jb25zdCBfVUUgPSBcIlVuYXV0aG9yaXplZEV4Y2VwdGlvblwiO1xuY29uc3QgX2FJID0gXCJhY2NvdW50SWRcIjtcbmNvbnN0IF9hS0kgPSBcImFjY2Vzc0tleUlkXCI7XG5jb25zdCBfYVQgPSBcImFjY2Vzc1Rva2VuXCI7XG5jb25zdCBfYWkgPSBcImFjY291bnRfaWRcIjtcbmNvbnN0IF9jID0gXCJjbGllbnRcIjtcbmNvbnN0IF9lID0gXCJlcnJvclwiO1xuY29uc3QgX2V4ID0gXCJleHBpcmF0aW9uXCI7XG5jb25zdCBfaCA9IFwiaHR0cFwiO1xuY29uc3QgX2hFID0gXCJodHRwRXJyb3JcIjtcbmNvbnN0IF9oSCA9IFwiaHR0cEhlYWRlclwiO1xuY29uc3QgX2hRID0gXCJodHRwUXVlcnlcIjtcbmNvbnN0IF9tID0gXCJtZXNzYWdlXCI7XG5jb25zdCBfckMgPSBcInJvbGVDcmVkZW50aWFsc1wiO1xuY29uc3QgX3JOID0gXCJyb2xlTmFtZVwiO1xuY29uc3QgX3JuID0gXCJyb2xlX25hbWVcIjtcbmNvbnN0IF9zID0gXCJzbWl0aHkudHMuc2RrLnN5bnRoZXRpYy5jb20uYW1hem9uYXdzLnNzb1wiO1xuY29uc3QgX3NBSyA9IFwic2VjcmV0QWNjZXNzS2V5XCI7XG5jb25zdCBfc1QgPSBcInNlc3Npb25Ub2tlblwiO1xuY29uc3QgX3hhc2J0ID0gXCJ4LWFtei1zc29fYmVhcmVyX3Rva2VuXCI7XG5jb25zdCBuMCA9IFwiY29tLmFtYXpvbmF3cy5zc29cIjtcbmltcG9ydCB7IFR5cGVSZWdpc3RyeSB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2NoZW1hXCI7XG5pbXBvcnQgeyBJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvbiwgUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvbiwgVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uLCBVbmF1dGhvcml6ZWRFeGNlcHRpb24sIH0gZnJvbSBcIi4uL21vZGVscy9lcnJvcnNcIjtcbmltcG9ydCB7IFNTT1NlcnZpY2VFeGNlcHRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL1NTT1NlcnZpY2VFeGNlcHRpb25cIjtcbmNvbnN0IF9zX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihfcyk7XG5leHBvcnQgdmFyIFNTT1NlcnZpY2VFeGNlcHRpb24kID0gWy0zLCBfcywgXCJTU09TZXJ2aWNlRXhjZXB0aW9uXCIsIDAsIFtdLCBbXV07XG5fc19yZWdpc3RyeS5yZWdpc3RlckVycm9yKFNTT1NlcnZpY2VFeGNlcHRpb24kLCBTU09TZXJ2aWNlRXhjZXB0aW9uKTtcbmNvbnN0IG4wX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihuMCk7XG5leHBvcnQgdmFyIEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uJCA9IFstMywgbjAsIF9JUkUsIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSW52YWxpZFJlcXVlc3RFeGNlcHRpb24kLCBJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIFJlc291cmNlTm90Rm91bmRFeGNlcHRpb24kID0gWy0zLCBuMCwgX1JORkUsIHsgW19lXTogX2MsIFtfaEVdOiA0MDQgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvbiQsIFJlc291cmNlTm90Rm91bmRFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBUb29NYW55UmVxdWVzdHNFeGNlcHRpb24kID0gWy0zLCBuMCwgX1RNUkUsIHsgW19lXTogX2MsIFtfaEVdOiA0MjkgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uJCwgVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgVW5hdXRob3JpemVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9VRSwgeyBbX2VdOiBfYywgW19oRV06IDQwMSB9LCBbX21dLCBbMF1dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihVbmF1dGhvcml6ZWRFeGNlcHRpb24kLCBVbmF1dGhvcml6ZWRFeGNlcHRpb24pO1xuZXhwb3J0IGNvbnN0IGVycm9yVHlwZVJlZ2lzdHJpZXMgPSBbX3NfcmVnaXN0cnksIG4wX3JlZ2lzdHJ5XTtcbnZhciBBY2Nlc3NUb2tlblR5cGUgPSBbMCwgbjAsIF9BVFQsIDgsIDBdO1xudmFyIFNlY3JldEFjY2Vzc0tleVR5cGUgPSBbMCwgbjAsIF9TQUtULCA4LCAwXTtcbnZhciBTZXNzaW9uVG9rZW5UeXBlID0gWzAsIG4wLCBfU1RULCA4LCAwXTtcbmV4cG9ydCB2YXIgR2V0Um9sZUNyZWRlbnRpYWxzUmVxdWVzdCQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfR1JDUixcbiAgICAwLFxuICAgIFtfck4sIF9hSSwgX2FUXSxcbiAgICBbXG4gICAgICAgIFswLCB7IFtfaFFdOiBfcm4gfV0sXG4gICAgICAgIFswLCB7IFtfaFFdOiBfYWkgfV0sXG4gICAgICAgIFsoKSA9PiBBY2Nlc3NUb2tlblR5cGUsIHsgW19oSF06IF94YXNidCB9XSxcbiAgICBdLFxuICAgIDMsXG5dO1xuZXhwb3J0IHZhciBHZXRSb2xlQ3JlZGVudGlhbHNSZXNwb25zZSQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfR1JDUmUsXG4gICAgMCxcbiAgICBbX3JDXSxcbiAgICBbWygpID0+IFJvbGVDcmVkZW50aWFscyQsIDBdXSxcbl07XG5leHBvcnQgdmFyIFJvbGVDcmVkZW50aWFscyQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfUkMsXG4gICAgMCxcbiAgICBbX2FLSSwgX3NBSywgX3NULCBfZXhdLFxuICAgIFswLCBbKCkgPT4gU2VjcmV0QWNjZXNzS2V5VHlwZSwgMF0sIFsoKSA9PiBTZXNzaW9uVG9rZW5UeXBlLCAwXSwgMV0sXG5dO1xuZXhwb3J0IHZhciBHZXRSb2xlQ3JlZGVudGlhbHMkID0gW1xuICAgIDksXG4gICAgbjAsXG4gICAgX0dSQyxcbiAgICB7IFtfaF06IFtcIkdFVFwiLCBcIi9mZWRlcmF0aW9uL2NyZWRlbnRpYWxzXCIsIDIwMF0gfSxcbiAgICAoKSA9PiBHZXRSb2xlQ3JlZGVudGlhbHNSZXF1ZXN0JCxcbiAgICAoKSA9PiBHZXRSb2xlQ3JlZGVudGlhbHNSZXNwb25zZSQsXG5dO1xuIiwgImltcG9ydCB7IEF3c1Nka1NpZ1Y0U2lnbmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBBd3NSZXN0SnNvblByb3RvY29sIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvcHJvdG9jb2xzXCI7XG5pbXBvcnQgeyBOb0F1dGhTaWduZXIgfSBmcm9tIFwiQHNtaXRoeS9jb3JlXCI7XG5pbXBvcnQgeyBOb09wTG9nZ2VyIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgcGFyc2VVcmwgfSBmcm9tIFwiQHNtaXRoeS91cmwtcGFyc2VyXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0LCB0b0Jhc2U2NCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYmFzZTY0XCI7XG5pbXBvcnQgeyBmcm9tVXRmOCwgdG9VdGY4IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC11dGY4XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1NPSHR0cEF1dGhTY2hlbWVQcm92aWRlciB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgfSBmcm9tIFwiLi9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyXCI7XG5pbXBvcnQgeyBlcnJvclR5cGVSZWdpc3RyaWVzIH0gZnJvbSBcIi4vc2NoZW1hcy9zY2hlbWFzXzBcIjtcbmV4cG9ydCBjb25zdCBnZXRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAxOS0wNi0xMFwiLFxuICAgICAgICBiYXNlNjREZWNvZGVyOiBjb25maWc/LmJhc2U2NERlY29kZXIgPz8gZnJvbUJhc2U2NCxcbiAgICAgICAgYmFzZTY0RW5jb2RlcjogY29uZmlnPy5iYXNlNjRFbmNvZGVyID8/IHRvQmFzZTY0LFxuICAgICAgICBkaXNhYmxlSG9zdFByZWZpeDogY29uZmlnPy5kaXNhYmxlSG9zdFByZWZpeCA/PyBmYWxzZSxcbiAgICAgICAgZW5kcG9pbnRQcm92aWRlcjogY29uZmlnPy5lbmRwb2ludFByb3ZpZGVyID8/IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyLFxuICAgICAgICBleHRlbnNpb25zOiBjb25maWc/LmV4dGVuc2lvbnMgPz8gW10sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVQcm92aWRlciA/PyBkZWZhdWx0U1NPSHR0cEF1dGhTY2hlbWVQcm92aWRlcixcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWc/Lmh0dHBBdXRoU2NoZW1lcyA/PyBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcImF3cy5hdXRoI3NpZ3Y0XCIpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogbmV3IEF3c1Nka1NpZ1Y0U2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjaGVtZUlkOiBcInNtaXRoeS5hcGkjbm9BdXRoXCIsXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogKGlwYykgPT4gaXBjLmdldElkZW50aXR5UHJvdmlkZXIoXCJzbWl0aHkuYXBpI25vQXV0aFwiKSB8fCAoYXN5bmMgKCkgPT4gKHt9KSksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgTm9BdXRoU2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsb2dnZXI6IGNvbmZpZz8ubG9nZ2VyID8/IG5ldyBOb09wTG9nZ2VyKCksXG4gICAgICAgIHByb3RvY29sOiBjb25maWc/LnByb3RvY29sID8/IEF3c1Jlc3RKc29uUHJvdG9jb2wsXG4gICAgICAgIHByb3RvY29sU2V0dGluZ3M6IGNvbmZpZz8ucHJvdG9jb2xTZXR0aW5ncyA/PyB7XG4gICAgICAgICAgICBkZWZhdWx0TmFtZXNwYWNlOiBcImNvbS5hbWF6b25hd3Muc3NvXCIsXG4gICAgICAgICAgICBlcnJvclR5cGVSZWdpc3RyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbjogXCIyMDE5LTA2LTEwXCIsXG4gICAgICAgICAgICBzZXJ2aWNlVGFyZ2V0OiBcIlNXQlBvcnRhbFNlcnZpY2VcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZUlkOiBjb25maWc/LnNlcnZpY2VJZCA/PyBcIlNTT1wiLFxuICAgICAgICB1cmxQYXJzZXI6IGNvbmZpZz8udXJsUGFyc2VyID8/IHBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyBmcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdG9VdGY4LFxuICAgIH07XG59O1xuIiwgImltcG9ydCBwYWNrYWdlSW5mbyBmcm9tIFwiLi4vLi4vLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uIGFzIGF3c0NoZWNrVmVyc2lvbiB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiO1xuaW1wb3J0IHsgTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIjtcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlciwgTk9ERV9BUFBfSURfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIjtcbmltcG9ydCB7IE5PREVfUkVHSU9OX0NPTkZJR19GSUxFX09QVElPTlMsIE5PREVfUkVHSU9OX0NPTkZJR19PUFRJT05TLCBOT0RFX1VTRV9EVUFMU1RBQ0tfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIE5PREVfVVNFX0ZJUFNfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIH0gZnJvbSBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI7XG5pbXBvcnQgeyBIYXNoIH0gZnJvbSBcIkBzbWl0aHkvaGFzaC1ub2RlXCI7XG5pbXBvcnQgeyBOT0RFX01BWF9BVFRFTVBUX0NPTkZJR19PUFRJT05TLCBOT0RFX1JFVFJZX01PREVfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCI7XG5pbXBvcnQgeyBsb2FkQ29uZmlnIGFzIGxvYWROb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXJcIjtcbmltcG9ydCB7IE5vZGVIdHRwSGFuZGxlciBhcyBSZXF1ZXN0SGFuZGxlciwgc3RyZWFtQ29sbGVjdG9yIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIjtcbmltcG9ydCB7IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24sIGxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb2R5TGVuZ3RoIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1ub2RlXCI7XG5pbXBvcnQgeyByZXNvbHZlRGVmYXVsdHNNb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLW5vZGVcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVUUllfTU9ERSB9IGZyb20gXCJAc21pdGh5L3V0aWwtcmV0cnlcIjtcbmltcG9ydCB7IGdldFJ1bnRpbWVDb25maWcgYXMgZ2V0U2hhcmVkUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWcuc2hhcmVkXCI7XG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uKHByb2Nlc3MudmVyc2lvbik7XG4gICAgY29uc3QgZGVmYXVsdHNNb2RlID0gcmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWdQcm92aWRlciA9ICgpID0+IGRlZmF1bHRzTW9kZSgpLnRoZW4obG9hZENvbmZpZ3NGb3JEZWZhdWx0TW9kZSk7XG4gICAgY29uc3QgY2xpZW50U2hhcmVkVmFsdWVzID0gZ2V0U2hhcmVkUnVudGltZUNvbmZpZyhjb25maWcpO1xuICAgIGF3c0NoZWNrVmVyc2lvbihwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgICAgcHJvZmlsZTogY29uZmlnPy5wcm9maWxlLFxuICAgICAgICBsb2dnZXI6IGNsaWVudFNoYXJlZFZhbHVlcy5sb2dnZXIsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jbGllbnRTaGFyZWRWYWx1ZXMsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgcnVudGltZTogXCJub2RlXCIsXG4gICAgICAgIGRlZmF1bHRzTW9kZSxcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IGNvbmZpZz8uYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyOiBjb25maWc/LmJvZHlMZW5ndGhDaGVja2VyID8/IGNhbGN1bGF0ZUJvZHlMZW5ndGgsXG4gICAgICAgIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogY29uZmlnPy5kZWZhdWx0VXNlckFnZW50UHJvdmlkZXIgPz9cbiAgICAgICAgICAgIGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlcih7IHNlcnZpY2VJZDogY2xpZW50U2hhcmVkVmFsdWVzLnNlcnZpY2VJZCwgY2xpZW50VmVyc2lvbjogcGFja2FnZUluZm8udmVyc2lvbiB9KSxcbiAgICAgICAgbWF4QXR0ZW1wdHM6IGNvbmZpZz8ubWF4QXR0ZW1wdHMgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoTk9ERV9SRUdJT05fQ09ORklHX09QVElPTlMsIHsgLi4uTk9ERV9SRUdJT05fQ09ORklHX0ZJTEVfT1BUSU9OUywgLi4ubG9hZGVyQ29uZmlnIH0pLFxuICAgICAgICByZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIuY3JlYXRlKGNvbmZpZz8ucmVxdWVzdEhhbmRsZXIgPz8gZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKSxcbiAgICAgICAgcmV0cnlNb2RlOiBjb25maWc/LnJldHJ5TW9kZSA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCBERUZBVUxUX1JFVFJZX01PREUsXG4gICAgICAgICAgICB9LCBjb25maWcpLFxuICAgICAgICBzaGEyNTY6IGNvbmZpZz8uc2hhMjU2ID8/IEhhc2guYmluZChudWxsLCBcInNoYTI1NlwiKSxcbiAgICAgICAgc3RyZWFtQ29sbGVjdG9yOiBjb25maWc/LnN0cmVhbUNvbGxlY3RvciA/PyBzdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGxvYWROb2RlQ29uZmlnKE5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX0FQUF9JRF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICB9O1xufTtcbiIsICJleHBvcnQgY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWcuaHR0cEF1dGhTY2hlbWVzKCksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMoKSxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgeyBnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgfSBmcm9tIFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgY29uc3QgcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zID0gKHJ1bnRpbWVDb25maWcsIGV4dGVuc2lvbnMpID0+IHtcbiAgICBjb25zdCBleHRlbnNpb25Db25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZykpO1xuICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY29uZmlndXJlKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihydW50aW1lQ29uZmlnLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEhlYWRlclBsdWdpbiwgcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcsIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIjtcbmltcG9ydCB7IGdldExvZ2dlclBsdWdpbiB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLWxvZ2dlclwiO1xuaW1wb3J0IHsgZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50UGx1Z2luLCByZXNvbHZlVXNlckFnZW50Q29uZmlnLCB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjtcbmltcG9ydCB7IHJlc29sdmVSZWdpb25Db25maWcgfSBmcm9tIFwiQHNtaXRoeS9jb25maWctcmVzb2x2ZXJcIjtcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnLCBnZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbiwgZ2V0SHR0cFNpZ25pbmdQbHVnaW4sIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U2NoZW1hU2VyZGVQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudExlbmd0aFBsdWdpbiB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIjtcbmltcG9ydCB7IHJlc29sdmVFbmRwb2ludENvbmZpZywgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBnZXRSZXRyeVBsdWdpbiwgcmVzb2x2ZVJldHJ5Q29uZmlnLCB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIjtcbmltcG9ydCB7IENsaWVudCBhcyBfX0NsaWVudCwgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1NPSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIsIHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZywgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCB7IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMsIH0gZnJvbSBcIi4vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBnZXRSdW50aW1lQ29uZmlnIGFzIF9fZ2V0UnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWdcIjtcbmltcG9ydCB7IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3J1bnRpbWVFeHRlbnNpb25zXCI7XG5leHBvcnQgeyBfX0NsaWVudCB9O1xuZXhwb3J0IGNsYXNzIFNTT0NsaWVudCBleHRlbmRzIF9fQ2xpZW50IHtcbiAgICBjb25maWc7XG4gICAgY29uc3RydWN0b3IoLi4uW2NvbmZpZ3VyYXRpb25dKSB7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMCA9IF9fZ2V0UnVudGltZUNvbmZpZyhjb25maWd1cmF0aW9uIHx8IHt9KTtcbiAgICAgICAgc3VwZXIoX2NvbmZpZ18wKTtcbiAgICAgICAgdGhpcy5pbml0Q29uZmlnID0gX2NvbmZpZ18wO1xuICAgICAgICBjb25zdCBfY29uZmlnXzEgPSByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzKF9jb25maWdfMCk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMiA9IHJlc29sdmVVc2VyQWdlbnRDb25maWcoX2NvbmZpZ18xKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18zID0gcmVzb2x2ZVJldHJ5Q29uZmlnKF9jb25maWdfMik7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNCA9IHJlc29sdmVSZWdpb25Db25maWcoX2NvbmZpZ18zKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ181ID0gcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcoX2NvbmZpZ180KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ182ID0gcmVzb2x2ZUVuZHBvaW50Q29uZmlnKF9jb25maWdfNSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNyA9IHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZyhfY29uZmlnXzYpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzggPSByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMoX2NvbmZpZ183LCBjb25maWd1cmF0aW9uPy5leHRlbnNpb25zIHx8IFtdKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfY29uZmlnXzg7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRTY2hlbWFTZXJkZVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0VXNlckFnZW50UGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZXRyeVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0Q29udGVudExlbmd0aFBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0SG9zdEhlYWRlclBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0TG9nZ2VyUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZWN1cnNpb25EZXRlY3Rpb25QbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0UGx1Z2luKHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgICBodHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcjogZGVmYXVsdFNTT0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLFxuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyOiBhc3luYyAoY29uZmlnKSA9PiBuZXcgRGVmYXVsdElkZW50aXR5UHJvdmlkZXJDb25maWcoe1xuICAgICAgICAgICAgICAgIFwiYXdzLmF1dGgjc2lndjRcIjogY29uZmlnLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBTaWduaW5nUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0RW5kcG9pbnRQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY29tbW9uUGFyYW1zIH0gZnJvbSBcIi4uL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgR2V0Um9sZUNyZWRlbnRpYWxzJCB9IGZyb20gXCIuLi9zY2hlbWFzL3NjaGVtYXNfMFwiO1xuZXhwb3J0IHsgJENvbW1hbmQgfTtcbmV4cG9ydCBjbGFzcyBHZXRSb2xlQ3JlZGVudGlhbHNDb21tYW5kIGV4dGVuZHMgJENvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFtnZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIlNXQlBvcnRhbFNlcnZpY2VcIiwgXCJHZXRSb2xlQ3JlZGVudGlhbHNcIiwge30pXG4gICAgLm4oXCJTU09DbGllbnRcIiwgXCJHZXRSb2xlQ3JlZGVudGlhbHNDb21tYW5kXCIpXG4gICAgLnNjKEdldFJvbGVDcmVkZW50aWFscyQpXG4gICAgLmJ1aWxkKCkge1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRSb2xlQ3JlZGVudGlhbHNDb21tYW5kLCB9IGZyb20gXCIuL2NvbW1hbmRzL0dldFJvbGVDcmVkZW50aWFsc0NvbW1hbmRcIjtcbmltcG9ydCB7IFNTT0NsaWVudCB9IGZyb20gXCIuL1NTT0NsaWVudFwiO1xuY29uc3QgY29tbWFuZHMgPSB7XG4gICAgR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZCxcbn07XG5leHBvcnQgY2xhc3MgU1NPIGV4dGVuZHMgU1NPQ2xpZW50IHtcbn1cbmNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQoY29tbWFuZHMsIFNTTyk7XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZFwiO1xuIiwgImV4cG9ydCB7fTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9TU09DbGllbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NTT1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvZXJyb3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvbW9kZWxzXzBcIjtcbmV4cG9ydCB7IFNTT1NlcnZpY2VFeGNlcHRpb24gfSBmcm9tIFwiLi9tb2RlbHMvU1NPU2VydmljZUV4Y2VwdGlvblwiO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHNzbyA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL3NzbycpO1xuXG5cblxuZXhwb3J0cy5HZXRSb2xlQ3JlZGVudGlhbHNDb21tYW5kID0gc3NvLkdldFJvbGVDcmVkZW50aWFsc0NvbW1hbmQ7XG5leHBvcnRzLlNTT0NsaWVudCA9IHNzby5TU09DbGllbnQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJvcGVydHlQcm92aWRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvcHJvcGVydHktcHJvdmlkZXInKTtcbnZhciBzaGFyZWRJbmlGaWxlTG9hZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyJyk7XG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGF3cy1zZGsvY29yZS9jbGllbnQnKTtcbnZhciB0b2tlblByb3ZpZGVycyA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL3Rva2VuLXByb3ZpZGVycycpO1xuXG5jb25zdCBpc1Nzb1Byb2ZpbGUgPSAoYXJnKSA9PiBhcmcgJiZcbiAgICAodHlwZW9mIGFyZy5zc29fc3RhcnRfdXJsID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGVvZiBhcmcuc3NvX2FjY291bnRfaWQgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIGFyZy5zc29fc2Vzc2lvbiA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlb2YgYXJnLnNzb19yZWdpb24gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIGFyZy5zc29fcm9sZV9uYW1lID09PSBcInN0cmluZ1wiKTtcblxuY29uc3QgU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTiA9IGZhbHNlO1xuY29uc3QgcmVzb2x2ZVNTT0NyZWRlbnRpYWxzID0gYXN5bmMgKHsgc3NvU3RhcnRVcmwsIHNzb1Nlc3Npb24sIHNzb0FjY291bnRJZCwgc3NvUmVnaW9uLCBzc29Sb2xlTmFtZSwgc3NvQ2xpZW50LCBjbGllbnRDb25maWcsIHBhcmVudENsaWVudENvbmZpZywgY2FsbGVyQ2xpZW50Q29uZmlnLCBwcm9maWxlLCBmaWxlcGF0aCwgY29uZmlnRmlsZXBhdGgsIGlnbm9yZUNhY2hlLCBsb2dnZXIsIH0pID0+IHtcbiAgICBsZXQgdG9rZW47XG4gICAgY29uc3QgcmVmcmVzaE1lc3NhZ2UgPSBgVG8gcmVmcmVzaCB0aGlzIFNTTyBzZXNzaW9uIHJ1biBhd3Mgc3NvIGxvZ2luIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcHJvZmlsZS5gO1xuICAgIGlmIChzc29TZXNzaW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBfdG9rZW4gPSBhd2FpdCB0b2tlblByb3ZpZGVycy5mcm9tU3NvKHtcbiAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIGZpbGVwYXRoLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0ZpbGVwYXRoLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNhY2hlLFxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIHRva2VuID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBfdG9rZW4udG9rZW4sXG4gICAgICAgICAgICAgICAgZXhwaXJlc0F0OiBuZXcgRGF0ZShfdG9rZW4uZXhwaXJhdGlvbikudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlLm1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICB0cnlOZXh0TGluazogU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTixcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRva2VuID0gYXdhaXQgc2hhcmVkSW5pRmlsZUxvYWRlci5nZXRTU09Ub2tlbkZyb21GaWxlKHNzb1N0YXJ0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBUaGUgU1NPIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgcHJvZmlsZSBpcyBpbnZhbGlkLiAke3JlZnJlc2hNZXNzYWdlfWAsIHtcbiAgICAgICAgICAgICAgICB0cnlOZXh0TGluazogU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTixcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3IERhdGUodG9rZW4uZXhwaXJlc0F0KS5nZXRUaW1lKCkgLSBEYXRlLm5vdygpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBUaGUgU1NPIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgcHJvZmlsZSBoYXMgZXhwaXJlZC4gJHtyZWZyZXNoTWVzc2FnZX1gLCB7XG4gICAgICAgICAgICB0cnlOZXh0TGluazogU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTixcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IHRva2VuO1xuICAgIGNvbnN0IHsgU1NPQ2xpZW50LCBHZXRSb2xlQ3JlZGVudGlhbHNDb21tYW5kIH0gPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vbG9hZFNzby1CS0ROcnNhbC5qcycpOyB9KTtcbiAgICBjb25zdCBzc28gPSBzc29DbGllbnQgfHxcbiAgICAgICAgbmV3IFNTT0NsaWVudChPYmplY3QuYXNzaWduKHt9LCBjbGllbnRDb25maWcgPz8ge30sIHtcbiAgICAgICAgICAgIGxvZ2dlcjogY2xpZW50Q29uZmlnPy5sb2dnZXIgPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5sb2dnZXIgPz8gcGFyZW50Q2xpZW50Q29uZmlnPy5sb2dnZXIsXG4gICAgICAgICAgICByZWdpb246IGNsaWVudENvbmZpZz8ucmVnaW9uID8/IHNzb1JlZ2lvbixcbiAgICAgICAgICAgIHVzZXJBZ2VudEFwcElkOiBjbGllbnRDb25maWc/LnVzZXJBZ2VudEFwcElkID8/IGNhbGxlckNsaWVudENvbmZpZz8udXNlckFnZW50QXBwSWQgPz8gcGFyZW50Q2xpZW50Q29uZmlnPy51c2VyQWdlbnRBcHBJZCxcbiAgICAgICAgfSkpO1xuICAgIGxldCBzc29SZXNwO1xuICAgIHRyeSB7XG4gICAgICAgIHNzb1Jlc3AgPSBhd2FpdCBzc28uc2VuZChuZXcgR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZCh7XG4gICAgICAgICAgICBhY2NvdW50SWQ6IHNzb0FjY291bnRJZCxcbiAgICAgICAgICAgIHJvbGVOYW1lOiBzc29Sb2xlTmFtZSxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlLCB7XG4gICAgICAgICAgICB0cnlOZXh0TGluazogU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTixcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgcm9sZUNyZWRlbnRpYWxzOiB7IGFjY2Vzc0tleUlkLCBzZWNyZXRBY2Nlc3NLZXksIHNlc3Npb25Ub2tlbiwgZXhwaXJhdGlvbiwgY3JlZGVudGlhbFNjb3BlLCBhY2NvdW50SWQgfSA9IHt9LCB9ID0gc3NvUmVzcDtcbiAgICBpZiAoIWFjY2Vzc0tleUlkIHx8ICFzZWNyZXRBY2Nlc3NLZXkgfHwgIXNlc3Npb25Ub2tlbiB8fCAhZXhwaXJhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJTU08gcmV0dXJucyBhbiBpbnZhbGlkIHRlbXBvcmFyeSBjcmVkZW50aWFsLlwiLCB7XG4gICAgICAgICAgICB0cnlOZXh0TGluazogU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTixcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge1xuICAgICAgICBhY2Nlc3NLZXlJZCxcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICBzZXNzaW9uVG9rZW4sXG4gICAgICAgIGV4cGlyYXRpb246IG5ldyBEYXRlKGV4cGlyYXRpb24pLFxuICAgICAgICAuLi4oY3JlZGVudGlhbFNjb3BlICYmIHsgY3JlZGVudGlhbFNjb3BlIH0pLFxuICAgICAgICAuLi4oYWNjb3VudElkICYmIHsgYWNjb3VudElkIH0pLFxuICAgIH07XG4gICAgaWYgKHNzb1Nlc3Npb24pIHtcbiAgICAgICAgY2xpZW50LnNldENyZWRlbnRpYWxGZWF0dXJlKGNyZWRlbnRpYWxzLCBcIkNSRURFTlRJQUxTX1NTT1wiLCBcInNcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjbGllbnQuc2V0Q3JlZGVudGlhbEZlYXR1cmUoY3JlZGVudGlhbHMsIFwiQ1JFREVOVElBTFNfU1NPX0xFR0FDWVwiLCBcInVcIik7XG4gICAgfVxuICAgIHJldHVybiBjcmVkZW50aWFscztcbn07XG5cbmNvbnN0IHZhbGlkYXRlU3NvUHJvZmlsZSA9IChwcm9maWxlLCBsb2dnZXIpID0+IHtcbiAgICBjb25zdCB7IHNzb19zdGFydF91cmwsIHNzb19hY2NvdW50X2lkLCBzc29fcmVnaW9uLCBzc29fcm9sZV9uYW1lIH0gPSBwcm9maWxlO1xuICAgIGlmICghc3NvX3N0YXJ0X3VybCB8fCAhc3NvX2FjY291bnRfaWQgfHwgIXNzb19yZWdpb24gfHwgIXNzb19yb2xlX25hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBQcm9maWxlIGlzIGNvbmZpZ3VyZWQgd2l0aCBpbnZhbGlkIFNTTyBjcmVkZW50aWFscy4gUmVxdWlyZWQgcGFyYW1ldGVycyBcInNzb19hY2NvdW50X2lkXCIsIGAgK1xuICAgICAgICAgICAgYFwic3NvX3JlZ2lvblwiLCBcInNzb19yb2xlX25hbWVcIiwgXCJzc29fc3RhcnRfdXJsXCIuIEdvdCAke09iamVjdC5rZXlzKHByb2ZpbGUpLmpvaW4oXCIsIFwiKX1cXG5SZWZlcmVuY2U6IGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jbGkvbGF0ZXN0L3VzZXJndWlkZS9jbGktY29uZmlndXJlLXNzby5odG1sYCwgeyB0cnlOZXh0TGluazogZmFsc2UsIGxvZ2dlciB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2ZpbGU7XG59O1xuXG5jb25zdCBmcm9tU1NPID0gKGluaXQgPSB7fSkgPT4gYXN5bmMgKHsgY2FsbGVyQ2xpZW50Q29uZmlnIH0gPSB7fSkgPT4ge1xuICAgIGluaXQubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItc3NvIC0gZnJvbVNTT1wiKTtcbiAgICBjb25zdCB7IHNzb1N0YXJ0VXJsLCBzc29BY2NvdW50SWQsIHNzb1JlZ2lvbiwgc3NvUm9sZU5hbWUsIHNzb1Nlc3Npb24gfSA9IGluaXQ7XG4gICAgY29uc3QgeyBzc29DbGllbnQgfSA9IGluaXQ7XG4gICAgY29uc3QgcHJvZmlsZU5hbWUgPSBzaGFyZWRJbmlGaWxlTG9hZGVyLmdldFByb2ZpbGVOYW1lKHtcbiAgICAgICAgcHJvZmlsZTogaW5pdC5wcm9maWxlID8/IGNhbGxlckNsaWVudENvbmZpZz8ucHJvZmlsZSxcbiAgICB9KTtcbiAgICBpZiAoIXNzb1N0YXJ0VXJsICYmICFzc29BY2NvdW50SWQgJiYgIXNzb1JlZ2lvbiAmJiAhc3NvUm9sZU5hbWUgJiYgIXNzb1Nlc3Npb24pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZXMgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLnBhcnNlS25vd25GaWxlcyhpbml0KTtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IHByb2ZpbGVzW3Byb2ZpbGVOYW1lXTtcbiAgICAgICAgaWYgKCFwcm9maWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gd2FzIG5vdCBmb3VuZC5gLCB7IGxvZ2dlcjogaW5pdC5sb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1Nzb1Byb2ZpbGUocHJvZmlsZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBpcyBub3QgY29uZmlndXJlZCB3aXRoIFNTTyBjcmVkZW50aWFscy5gLCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyOiBpbml0LmxvZ2dlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9maWxlPy5zc29fc2Vzc2lvbikge1xuICAgICAgICAgICAgY29uc3Qgc3NvU2Vzc2lvbnMgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLmxvYWRTc29TZXNzaW9uRGF0YShpbml0KTtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBzc29TZXNzaW9uc1twcm9maWxlLnNzb19zZXNzaW9uXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZsaWN0TXNnID0gYCBjb25maWd1cmF0aW9ucyBpbiBwcm9maWxlICR7cHJvZmlsZU5hbWV9IGFuZCBzc28tc2Vzc2lvbiAke3Byb2ZpbGUuc3NvX3Nlc3Npb259YDtcbiAgICAgICAgICAgIGlmIChzc29SZWdpb24gJiYgc3NvUmVnaW9uICE9PSBzZXNzaW9uLnNzb19yZWdpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYENvbmZsaWN0aW5nIFNTTyByZWdpb25gICsgY29uZmxpY3RNc2csIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5TmV4dExpbms6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGluaXQubG9nZ2VyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNzb1N0YXJ0VXJsICYmIHNzb1N0YXJ0VXJsICE9PSBzZXNzaW9uLnNzb19zdGFydF91cmwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYENvbmZsaWN0aW5nIFNTTyBzdGFydF91cmxgICsgY29uZmxpY3RNc2csIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5TmV4dExpbms6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGluaXQubG9nZ2VyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZmlsZS5zc29fcmVnaW9uID0gc2Vzc2lvbi5zc29fcmVnaW9uO1xuICAgICAgICAgICAgcHJvZmlsZS5zc29fc3RhcnRfdXJsID0gc2Vzc2lvbi5zc29fc3RhcnRfdXJsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3NvX3N0YXJ0X3VybCwgc3NvX2FjY291bnRfaWQsIHNzb19yZWdpb24sIHNzb19yb2xlX25hbWUsIHNzb19zZXNzaW9uIH0gPSB2YWxpZGF0ZVNzb1Byb2ZpbGUocHJvZmlsZSwgaW5pdC5sb2dnZXIpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVNTT0NyZWRlbnRpYWxzKHtcbiAgICAgICAgICAgIHNzb1N0YXJ0VXJsOiBzc29fc3RhcnRfdXJsLFxuICAgICAgICAgICAgc3NvU2Vzc2lvbjogc3NvX3Nlc3Npb24sXG4gICAgICAgICAgICBzc29BY2NvdW50SWQ6IHNzb19hY2NvdW50X2lkLFxuICAgICAgICAgICAgc3NvUmVnaW9uOiBzc29fcmVnaW9uLFxuICAgICAgICAgICAgc3NvUm9sZU5hbWU6IHNzb19yb2xlX25hbWUsXG4gICAgICAgICAgICBzc29DbGllbnQ6IHNzb0NsaWVudCxcbiAgICAgICAgICAgIGNsaWVudENvbmZpZzogaW5pdC5jbGllbnRDb25maWcsXG4gICAgICAgICAgICBwYXJlbnRDbGllbnRDb25maWc6IGluaXQucGFyZW50Q2xpZW50Q29uZmlnLFxuICAgICAgICAgICAgY2FsbGVyQ2xpZW50Q29uZmlnOiBpbml0LmNhbGxlckNsaWVudENvbmZpZyxcbiAgICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGVOYW1lLFxuICAgICAgICAgICAgZmlsZXBhdGg6IGluaXQuZmlsZXBhdGgsXG4gICAgICAgICAgICBjb25maWdGaWxlcGF0aDogaW5pdC5jb25maWdGaWxlcGF0aCxcbiAgICAgICAgICAgIGlnbm9yZUNhY2hlOiBpbml0Lmlnbm9yZUNhY2hlLFxuICAgICAgICAgICAgbG9nZ2VyOiBpbml0LmxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFzc29TdGFydFVybCB8fCAhc3NvQWNjb3VudElkIHx8ICFzc29SZWdpb24gfHwgIXNzb1JvbGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihcIkluY29tcGxldGUgY29uZmlndXJhdGlvbi4gVGhlIGZyb21TU08oKSBhcmd1bWVudCBoYXNoIG11c3QgaW5jbHVkZSBcIiArXG4gICAgICAgICAgICAnXCJzc29TdGFydFVybFwiLCBcInNzb0FjY291bnRJZFwiLCBcInNzb1JlZ2lvblwiLCBcInNzb1JvbGVOYW1lXCInLCB7IHRyeU5leHRMaW5rOiBmYWxzZSwgbG9nZ2VyOiBpbml0LmxvZ2dlciB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlU1NPQ3JlZGVudGlhbHMoe1xuICAgICAgICAgICAgc3NvU3RhcnRVcmwsXG4gICAgICAgICAgICBzc29TZXNzaW9uLFxuICAgICAgICAgICAgc3NvQWNjb3VudElkLFxuICAgICAgICAgICAgc3NvUmVnaW9uLFxuICAgICAgICAgICAgc3NvUm9sZU5hbWUsXG4gICAgICAgICAgICBzc29DbGllbnQsXG4gICAgICAgICAgICBjbGllbnRDb25maWc6IGluaXQuY2xpZW50Q29uZmlnLFxuICAgICAgICAgICAgcGFyZW50Q2xpZW50Q29uZmlnOiBpbml0LnBhcmVudENsaWVudENvbmZpZyxcbiAgICAgICAgICAgIGNhbGxlckNsaWVudENvbmZpZzogaW5pdC5jYWxsZXJDbGllbnRDb25maWcsXG4gICAgICAgICAgICBwcm9maWxlOiBwcm9maWxlTmFtZSxcbiAgICAgICAgICAgIGZpbGVwYXRoOiBpbml0LmZpbGVwYXRoLFxuICAgICAgICAgICAgY29uZmlnRmlsZXBhdGg6IGluaXQuY29uZmlnRmlsZXBhdGgsXG4gICAgICAgICAgICBpZ25vcmVDYWNoZTogaW5pdC5pZ25vcmVDYWNoZSxcbiAgICAgICAgICAgIGxvZ2dlcjogaW5pdC5sb2dnZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZnJvbVNTTyA9IGZyb21TU087XG5leHBvcnRzLmlzU3NvUHJvZmlsZSA9IGlzU3NvUHJvZmlsZTtcbmV4cG9ydHMudmFsaWRhdGVTc29Qcm9maWxlID0gdmFsaWRhdGVTc29Qcm9maWxlO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLGlDQUFpQyxnQkFBZ0I7QUFDdEQsU0FBTztBQUFBLElBQ0gsVUFBVTtBQUFBLElBQ1YsbUJBQW1CO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixRQUFRLGVBQWU7QUFBQSxJQUMzQjtBQUFBLElBQ0EscUJBQXFCLENBQUMsUUFBUSxhQUFhO0FBQUEsTUFDdkMsbUJBQW1CO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSjtBQUNBLFNBQVMsb0NBQW9DLGdCQUFnQjtBQUN6RCxTQUFPO0FBQUEsSUFDSCxVQUFVO0FBQUEsRUFDZDtBQUNKO0FBOUJBLElBQ0Esd0JBQ2EsNENBNkJBLGtDQWFBO0FBNUNiO0FBQUE7QUFBQTtBQUNBLDZCQUFvRDtBQUM3QyxJQUFNLDZDQUE2QyxPQUFPLFFBQVEsU0FBUyxVQUFVO0FBQ3hGLGFBQU87QUFBQSxRQUNILGVBQVcseUNBQWlCLE9BQU8sRUFBRTtBQUFBLFFBQ3JDLFFBQVMsVUFBTSwwQ0FBa0IsT0FBTyxNQUFNLEVBQUUsTUFDM0MsTUFBTTtBQUNILGdCQUFNLElBQUksTUFBTSx5REFBeUQ7QUFBQSxRQUM3RSxHQUFHO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFxQk8sSUFBTSxtQ0FBbUMsQ0FBQyxtQkFBbUI7QUFDaEUsWUFBTSxVQUFVLENBQUM7QUFD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LEtBQUs7QUFBQSxVQUNmLGdCQUFnQixLQUFLO0FBQUEsVUFDckIsYUFBYSxLQUFLO0FBQUEsVUFDbEIsUUFBUSxLQUFLO0FBQUEsUUFDakIsQ0FBQztBQUFBLE1BQ0wsV0FDUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsYUFBYTtBQUNsRSxjQUFNLElBQUksaUJBQWlCLHlCQUF5QixnSUFDYSxFQUFFLGFBQWEsT0FBTyxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQUEsTUFDaEgsT0FDSztBQUNELGVBQU8sc0JBQXNCO0FBQUEsVUFDekI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0EsY0FBYyxLQUFLO0FBQUEsVUFDbkIsb0JBQW9CLEtBQUs7QUFBQSxVQUN6QixvQkFBb0IsS0FBSztBQUFBLFVBQ3pCLFNBQVM7QUFBQSxVQUNULFVBQVUsS0FBSztBQUFBLFVBQ2YsZ0JBQWdCLEtBQUs7QUFBQSxVQUNyQixhQUFhLEtBQUs7QUFBQSxVQUNsQixRQUFRLEtBQUs7QUFBQSxRQUNqQixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFFQSxZQUFRLFVBQVU7QUFDbEIsWUFBUSxlQUFlO0FBQ3ZCLFlBQVEscUJBQXFCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3V0aWxfZW5kcG9pbnRzIiwgIl9fU2VydmljZUV4Y2VwdGlvbiIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJnZXRSdW50aW1lQ29uZmlnIiwgImxvYWROb2RlQ29uZmlnIiwgIlJlcXVlc3RIYW5kbGVyIiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImltcG9ydF9jb25maWdfcmVzb2x2ZXIiLCAiaW1wb3J0X21pZGRsZXdhcmVfcmV0cnkiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiX19DbGllbnQiLCAiZ2V0UnVudGltZUNvbmZpZyIsICJpbXBvcnRfbWlkZGxld2FyZV9lbmRwb2ludCIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICIkQ29tbWFuZCIsICJvIiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgIiRDb21tYW5kIiwgIl9fQ2xpZW50IiwgInJlcXVpcmVfZGlzdF9janMiLCAiZSIsICJTU09DbGllbnQiLCAiR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZCJdCn0K
