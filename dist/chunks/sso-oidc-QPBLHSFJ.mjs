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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
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
var import_util_middleware, defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes();
    import_util_middleware = __toESM(require_dist_cjs7());
    defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js"() {
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
                            url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
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
                          endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n },
                          type: e
                        },
                        {
                          endpoint: {
                            url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
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
                            url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
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
                  endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n },
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js
var import_smithy_client, SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js"() {
    import_smithy_client = __toESM(require_dist_cjs8());
    SSOOIDCServiceException = class _SSOOIDCServiceException extends import_smithy_client.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/errors.js
var AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException;
var init_errors = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/errors.js"() {
    init_SSOOIDCServiceException();
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/schemas/schemas_0.js
var _ADE, _APE, _AT, _CS, _CT, _CTR, _CTRr, _CV, _ETE, _ICE, _IGE, _IRE, _ISE, _ISEn, _IT, _RT, _SDE, _UCE, _UGTE, _aT, _c, _cI, _cS, _cV, _co, _dC, _e, _eI, _ed, _gT, _h, _hE, _iT, _r, _rT, _rU, _s, _sc, _se, _tT, n0, _s_registry, SSOOIDCServiceException$, n0_registry, AccessDeniedException$, AuthorizationPendingException$, ExpiredTokenException$, InternalServerException$, InvalidClientException$, InvalidGrantException$, InvalidRequestException$, InvalidScopeException$, SlowDownException$, UnauthorizedClientException$, UnsupportedGrantTypeException$, errorTypeRegistries, AccessToken, ClientSecret, CodeVerifier, IdToken, RefreshToken, CreateTokenRequest$, CreateTokenResponse$, Scopes, CreateToken$;
var init_schemas_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/schemas/schemas_0.js"() {
    init_schema();
    init_errors();
    init_SSOOIDCServiceException();
    _ADE = "AccessDeniedException";
    _APE = "AuthorizationPendingException";
    _AT = "AccessToken";
    _CS = "ClientSecret";
    _CT = "CreateToken";
    _CTR = "CreateTokenRequest";
    _CTRr = "CreateTokenResponse";
    _CV = "CodeVerifier";
    _ETE = "ExpiredTokenException";
    _ICE = "InvalidClientException";
    _IGE = "InvalidGrantException";
    _IRE = "InvalidRequestException";
    _ISE = "InternalServerException";
    _ISEn = "InvalidScopeException";
    _IT = "IdToken";
    _RT = "RefreshToken";
    _SDE = "SlowDownException";
    _UCE = "UnauthorizedClientException";
    _UGTE = "UnsupportedGrantTypeException";
    _aT = "accessToken";
    _c = "client";
    _cI = "clientId";
    _cS = "clientSecret";
    _cV = "codeVerifier";
    _co = "code";
    _dC = "deviceCode";
    _e = "error";
    _eI = "expiresIn";
    _ed = "error_description";
    _gT = "grantType";
    _h = "http";
    _hE = "httpError";
    _iT = "idToken";
    _r = "reason";
    _rT = "refreshToken";
    _rU = "redirectUri";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
    _sc = "scope";
    _se = "server";
    _tT = "tokenType";
    n0 = "com.amazonaws.ssooidc";
    _s_registry = TypeRegistry.for(_s);
    SSOOIDCServiceException$ = [-3, _s, "SSOOIDCServiceException", 0, [], []];
    _s_registry.registerError(SSOOIDCServiceException$, SSOOIDCServiceException);
    n0_registry = TypeRegistry.for(n0);
    AccessDeniedException$ = [
      -3,
      n0,
      _ADE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _r, _ed],
      [0, 0, 0]
    ];
    n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
    AuthorizationPendingException$ = [
      -3,
      n0,
      _APE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(AuthorizationPendingException$, AuthorizationPendingException);
    ExpiredTokenException$ = [-3, n0, _ETE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(ExpiredTokenException$, ExpiredTokenException);
    InternalServerException$ = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InternalServerException$, InternalServerException);
    InvalidClientException$ = [-3, n0, _ICE, { [_e]: _c, [_hE]: 401 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidClientException$, InvalidClientException);
    InvalidGrantException$ = [-3, n0, _IGE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidGrantException$, InvalidGrantException);
    InvalidRequestException$ = [
      -3,
      n0,
      _IRE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _r, _ed],
      [0, 0, 0]
    ];
    n0_registry.registerError(InvalidRequestException$, InvalidRequestException);
    InvalidScopeException$ = [-3, n0, _ISEn, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidScopeException$, InvalidScopeException);
    SlowDownException$ = [-3, n0, _SDE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(SlowDownException$, SlowDownException);
    UnauthorizedClientException$ = [
      -3,
      n0,
      _UCE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(UnauthorizedClientException$, UnauthorizedClientException);
    UnsupportedGrantTypeException$ = [
      -3,
      n0,
      _UGTE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(UnsupportedGrantTypeException$, UnsupportedGrantTypeException);
    errorTypeRegistries = [_s_registry, n0_registry];
    AccessToken = [0, n0, _AT, 8, 0];
    ClientSecret = [0, n0, _CS, 8, 0];
    CodeVerifier = [0, n0, _CV, 8, 0];
    IdToken = [0, n0, _IT, 8, 0];
    RefreshToken = [0, n0, _RT, 8, 0];
    CreateTokenRequest$ = [
      3,
      n0,
      _CTR,
      0,
      [_cI, _cS, _gT, _dC, _co, _rT, _sc, _rU, _cV],
      [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]],
      3
    ];
    CreateTokenResponse$ = [
      3,
      n0,
      _CTRr,
      0,
      [_aT, _tT, _eI, _rT, _iT],
      [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]]
    ];
    Scopes = 64 | 0;
    CreateToken$ = [
      9,
      n0,
      _CT,
      { [_h]: ["POST", "/token", 200] },
      () => CreateTokenRequest$,
      () => CreateTokenResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js
var import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js"() {
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
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
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
          defaultNamespace: "com.amazonaws.ssooidc",
          errorTypeRegistries,
          version: "2019-06-10",
          serviceTarget: "AWSSSOOIDCService"
        },
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js"() {
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
    SSOOIDCClient = class extends import_smithy_client5.Client {
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
          httpAuthSchemeParametersProvider: defaultSSOOIDCHttpAuthSchemeParametersProvider,
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js
var import_middleware_endpoint2, import_smithy_client6, CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs18());
    import_smithy_client6 = __toESM(require_dist_cjs8());
    init_EndpointParameters();
    init_schemas_0();
    CreateTokenCommand = class extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(CreateToken$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js
var import_smithy_client7, commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js"() {
    import_smithy_client7 = __toESM(require_dist_cjs8());
    init_CreateTokenCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
    };
    (0, import_smithy_client7.createAggregatedClient)(commands, SSOOIDC);
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js
var init_commands = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js"() {
    init_CreateTokenCommand();
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/enums.js
var AccessDeniedExceptionReason, InvalidRequestExceptionReason;
var init_enums = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/enums.js"() {
    AccessDeniedExceptionReason = {
      KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
    };
    InvalidRequestExceptionReason = {
      KMS_DISABLED_KEY: "KMS_DisabledException",
      KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
      KMS_INVALID_STATE: "KMS_InvalidStateException",
      KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js
var init_models_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js
var init_sso_oidc = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_schemas_0();
    init_enums();
    init_errors();
    init_models_0();
    init_SSOOIDCServiceException();
  }
});
init_sso_oidc();
var export_$Command = import_smithy_client6.Command;
var export___Client = import_smithy_client5.Client;
export {
  export_$Command as $Command,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AuthorizationPendingException,
  AuthorizationPendingException$,
  CreateToken$,
  CreateTokenCommand,
  CreateTokenRequest$,
  CreateTokenResponse$,
  ExpiredTokenException,
  ExpiredTokenException$,
  InternalServerException,
  InternalServerException$,
  InvalidClientException,
  InvalidClientException$,
  InvalidGrantException,
  InvalidGrantException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidRequestExceptionReason,
  InvalidScopeException,
  InvalidScopeException$,
  SSOOIDC,
  SSOOIDCClient,
  SSOOIDCServiceException,
  SSOOIDCServiceException$,
  SlowDownException,
  SlowDownException$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UnsupportedGrantTypeException,
  UnsupportedGrantTypeException$,
  export___Client as __Client,
  errorTypeRegistries
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9lbmRwb2ludC9ydWxlc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2VuZHBvaW50L2VuZHBvaW50UmVzb2x2ZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvbW9kZWxzL1NTT09JRENTZXJ2aWNlRXhjZXB0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL21vZGVscy9lcnJvcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvc2NoZW1hcy9zY2hlbWFzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvcnVudGltZUNvbmZpZy5zaGFyZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvcnVudGltZUNvbmZpZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9ydW50aW1lRXh0ZW5zaW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9TU09PSURDQ2xpZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2NvbW1hbmRzL0NyZWF0ZVRva2VuQ29tbWFuZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9TU09PSURDLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2NvbW1hbmRzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL21vZGVscy9lbnVtcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9tb2RlbHMvbW9kZWxzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlc29sdmVBd3NTZGtTaWdWNENvbmZpZyB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2h0dHBBdXRoU2NoZW1lc1wiO1xuaW1wb3J0IHsgZ2V0U21pdGh5Q29udGV4dCwgbm9ybWFsaXplUHJvdmlkZXIgfSBmcm9tIFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U1NPT0lEQ0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gYXN5bmMgKGNvbmZpZywgY29udGV4dCwgaW5wdXQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVyYXRpb246IGdldFNtaXRoeUNvbnRleHQoY29udGV4dCkub3BlcmF0aW9uLFxuICAgICAgICByZWdpb246IChhd2FpdCBub3JtYWxpemVQcm92aWRlcihjb25maWcucmVnaW9uKSgpKSB8fFxuICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBgcmVnaW9uYCB0byBiZSBjb25maWd1cmVkIGZvciBgYXdzLmF1dGgjc2lndjRgXCIpO1xuICAgICAgICAgICAgfSkoKSxcbiAgICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwic3NvLW9hdXRoXCIsXG4gICAgICAgICAgICByZWdpb246IGF1dGhQYXJhbWV0ZXJzLnJlZ2lvbixcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcGVydGllc0V4dHJhY3RvcjogKGNvbmZpZywgY29udGV4dCkgPT4gKHtcbiAgICAgICAgICAgIHNpZ25pbmdQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU21pdGh5QXBpTm9BdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZDogXCJzbWl0aHkuYXBpI25vQXV0aFwiLFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFNTT09JRENIdHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gKGF1dGhQYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIHN3aXRjaCAoYXV0aFBhcmFtZXRlcnMub3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJDcmVhdGVUb2tlblwiOiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlU21pdGh5QXBpTm9BdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChjcmVhdGVBd3NBdXRoU2lndjRIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcbmV4cG9ydCBjb25zdCByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgY29uZmlnXzAgPSByZXNvbHZlQXdzU2RrU2lnVjRDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWdfMCwge1xuICAgICAgICBhdXRoU2NoZW1lUHJlZmVyZW5jZTogbm9ybWFsaXplUHJvdmlkZXIoY29uZmlnLmF1dGhTY2hlbWVQcmVmZXJlbmNlID8/IFtdKSxcbiAgICB9KTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgdXNlRHVhbHN0YWNrRW5kcG9pbnQ6IG9wdGlvbnMudXNlRHVhbHN0YWNrRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIHVzZUZpcHNFbmRwb2ludDogb3B0aW9ucy51c2VGaXBzRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIGRlZmF1bHRTaWduaW5nTmFtZTogXCJzc28tb2F1dGhcIixcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgIFVzZUZJUFM6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwidXNlRmlwc0VuZHBvaW50XCIgfSxcbiAgICBFbmRwb2ludDogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJlbmRwb2ludFwiIH0sXG4gICAgUmVnaW9uOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInJlZ2lvblwiIH0sXG4gICAgVXNlRHVhbFN0YWNrOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUR1YWxzdGFja0VuZHBvaW50XCIgfSxcbn07XG4iLCAiY29uc3QgdSA9IFwicmVxdWlyZWRcIiwgdiA9IFwiZm5cIiwgdyA9IFwiYXJndlwiLCB4ID0gXCJyZWZcIjtcbmNvbnN0IGEgPSB0cnVlLCBiID0gXCJpc1NldFwiLCBjID0gXCJib29sZWFuRXF1YWxzXCIsIGQgPSBcImVycm9yXCIsIGUgPSBcImVuZHBvaW50XCIsIGYgPSBcInRyZWVcIiwgZyA9IFwiUGFydGl0aW9uUmVzdWx0XCIsIGggPSBcImdldEF0dHJcIiwgaSA9IHsgW3VdOiBmYWxzZSwgdHlwZTogXCJzdHJpbmdcIiB9LCBqID0geyBbdV06IHRydWUsIGRlZmF1bHQ6IGZhbHNlLCB0eXBlOiBcImJvb2xlYW5cIiB9LCBrID0geyBbeF06IFwiRW5kcG9pbnRcIiB9LCBsID0geyBbdl06IGMsIFt3XTogW3sgW3hdOiBcIlVzZUZJUFNcIiB9LCB0cnVlXSB9LCBtID0geyBbdl06IGMsIFt3XTogW3sgW3hdOiBcIlVzZUR1YWxTdGFja1wiIH0sIHRydWVdIH0sIG4gPSB7fSwgbyA9IHsgW3ZdOiBoLCBbd106IFt7IFt4XTogZyB9LCBcInN1cHBvcnRzRklQU1wiXSB9LCBwID0geyBbeF06IGcgfSwgcSA9IHsgW3ZdOiBjLCBbd106IFt0cnVlLCB7IFt2XTogaCwgW3ddOiBbcCwgXCJzdXBwb3J0c0R1YWxTdGFja1wiXSB9XSB9LCByID0gW2xdLCBzID0gW21dLCB0ID0gW3sgW3hdOiBcIlJlZ2lvblwiIH1dO1xuY29uc3QgX2RhdGEgPSB7XG4gICAgdmVyc2lvbjogXCIxLjBcIixcbiAgICBwYXJhbWV0ZXJzOiB7IFJlZ2lvbjogaSwgVXNlRHVhbFN0YWNrOiBqLCBVc2VGSVBTOiBqLCBFbmRwb2ludDogaSB9LFxuICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogYiwgW3ddOiBba10gfV0sXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogciwgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBGSVBTIGFuZCBjdXN0b20gZW5kcG9pbnQgYXJlIG5vdCBzdXBwb3J0ZWRcIiwgdHlwZTogZCB9LFxuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogcywgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBEdWFsc3RhY2sgYW5kIGN1c3RvbSBlbmRwb2ludCBhcmUgbm90IHN1cHBvcnRlZFwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgeyBlbmRwb2ludDogeyB1cmw6IGssIHByb3BlcnRpZXM6IG4sIGhlYWRlcnM6IG4gfSwgdHlwZTogZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogYiwgW3ddOiB0IH1dLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogXCJhd3MucGFydGl0aW9uXCIsIFt3XTogdCwgYXNzaWduOiBnIH1dLFxuICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFtsLCBtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbdl06IGMsIFt3XTogW2EsIG9dIH0sIHFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9vaWRjLWZpcHMue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRklQUyBhbmQgRHVhbFN0YWNrIGFyZSBlbmFibGVkLCBidXQgdGhpcyBwYXJ0aXRpb24gZG9lcyBub3Qgc3VwcG9ydCBvbmUgb3IgYm90aFwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt2XTogYywgW3ddOiBbbywgYV0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3ZdOiBcInN0cmluZ0VxdWFsc1wiLCBbd106IFt7IFt2XTogaCwgW3ddOiBbcCwgXCJuYW1lXCJdIH0sIFwiYXdzLXVzLWdvdlwiXSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8vb2lkYy57UmVnaW9ufS5hbWF6b25hd3MuY29tXCIsIHByb3BlcnRpZXM6IG4sIGhlYWRlcnM6IG4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL29pZGMtZmlwcy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcjogXCJGSVBTIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRklQU1wiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFtxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vb2lkYy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2R1YWxTdGFja0Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcjogXCJEdWFsU3RhY2sgaXMgZW5hYmxlZCBidXQgdGhpcyBwYXJ0aXRpb24gZG9lcyBub3Qgc3VwcG9ydCBEdWFsU3RhY2tcIiwgdHlwZTogZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8vb2lkYy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2Ruc1N1ZmZpeH1cIiwgcHJvcGVydGllczogbiwgaGVhZGVyczogbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgfSxcbiAgICAgICAgeyBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IE1pc3NpbmcgUmVnaW9uXCIsIHR5cGU6IGQgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCBydWxlU2V0ID0gX2RhdGE7XG4iLCAiaW1wb3J0IHsgYXdzRW5kcG9pbnRGdW5jdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1lbmRwb2ludHNcIjtcbmltcG9ydCB7IGN1c3RvbUVuZHBvaW50RnVuY3Rpb25zLCBFbmRwb2ludENhY2hlLCByZXNvbHZlRW5kcG9pbnQgfSBmcm9tIFwiQHNtaXRoeS91dGlsLWVuZHBvaW50c1wiO1xuaW1wb3J0IHsgcnVsZVNldCB9IGZyb20gXCIuL3J1bGVzZXRcIjtcbmNvbnN0IGNhY2hlID0gbmV3IEVuZHBvaW50Q2FjaGUoe1xuICAgIHNpemU6IDUwLFxuICAgIHBhcmFtczogW1wiRW5kcG9pbnRcIiwgXCJSZWdpb25cIiwgXCJVc2VEdWFsU3RhY2tcIiwgXCJVc2VGSVBTXCJdLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgPSAoZW5kcG9pbnRQYXJhbXMsIGNvbnRleHQgPSB7fSkgPT4ge1xuICAgIHJldHVybiBjYWNoZS5nZXQoZW5kcG9pbnRQYXJhbXMsICgpID0+IHJlc29sdmVFbmRwb2ludChydWxlU2V0LCB7XG4gICAgICAgIGVuZHBvaW50UGFyYW1zOiBlbmRwb2ludFBhcmFtcyxcbiAgICAgICAgbG9nZ2VyOiBjb250ZXh0LmxvZ2dlcixcbiAgICB9KSk7XG59O1xuY3VzdG9tRW5kcG9pbnRGdW5jdGlvbnMuYXdzID0gYXdzRW5kcG9pbnRGdW5jdGlvbnM7XG4iLCAiaW1wb3J0IHsgU2VydmljZUV4Y2VwdGlvbiBhcyBfX1NlcnZpY2VFeGNlcHRpb24sIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuZXhwb3J0IHsgX19TZXJ2aWNlRXhjZXB0aW9uIH07XG5leHBvcnQgY2xhc3MgU1NPT0lEQ1NlcnZpY2VFeGNlcHRpb24gZXh0ZW5kcyBfX1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTU09PSURDU2VydmljZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBTU09PSURDU2VydmljZUV4Y2VwdGlvbiBhcyBfX0Jhc2VFeGNlcHRpb24gfSBmcm9tIFwiLi9TU09PSURDU2VydmljZUV4Y2VwdGlvblwiO1xuZXhwb3J0IGNsYXNzIEFjY2Vzc0RlbmllZEV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiQWNjZXNzRGVuaWVkRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICByZWFzb247XG4gICAgZXJyb3JfZGVzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkFjY2Vzc0RlbmllZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBY2Nlc3NEZW5pZWRFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG9wdHMuZXJyb3I7XG4gICAgICAgIHRoaXMucmVhc29uID0gb3B0cy5yZWFzb247XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBvcHRzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uUGVuZGluZ0V4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiQXV0aG9yaXphdGlvblBlbmRpbmdFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGVycm9yO1xuICAgIGVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJBdXRob3JpemF0aW9uUGVuZGluZ0V4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRob3JpemF0aW9uUGVuZGluZ0V4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4cGlyZWRUb2tlbkV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiRXhwaXJlZFRva2VuRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiRXhwaXJlZFRva2VuRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEV4cGlyZWRUb2tlbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEludGVybmFsU2VydmVyRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJbnRlcm5hbFNlcnZlckV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwic2VydmVyXCI7XG4gICAgZXJyb3I7XG4gICAgZXJyb3JfZGVzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkludGVybmFsU2VydmVyRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwic2VydmVyXCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludGVybmFsU2VydmVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBvcHRzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gb3B0cy5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW52YWxpZENsaWVudEV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW52YWxpZENsaWVudEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgZXJyb3I7XG4gICAgZXJyb3JfZGVzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkludmFsaWRDbGllbnRFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW52YWxpZENsaWVudEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEludmFsaWRHcmFudEV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW52YWxpZEdyYW50RXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW52YWxpZEdyYW50RXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludmFsaWRHcmFudEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgZXJyb3I7XG4gICAgcmVhc29uO1xuICAgIGVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5yZWFzb24gPSBvcHRzLnJlYXNvbjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEludmFsaWRTY29wZUV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW52YWxpZFNjb3BlRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW52YWxpZFNjb3BlRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludmFsaWRTY29wZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmVycm9yID0gb3B0cy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IG9wdHMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsb3dEb3duRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJTbG93RG93bkV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgZXJyb3I7XG4gICAgZXJyb3JfZGVzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlNsb3dEb3duRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNsb3dEb3duRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBvcHRzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gb3B0cy5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkQ2xpZW50RXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJVbmF1dGhvcml6ZWRDbGllbnRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGVycm9yO1xuICAgIGVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJVbmF1dGhvcml6ZWRDbGllbnRFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVW5hdXRob3JpemVkQ2xpZW50RXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBvcHRzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gb3B0cy5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVW5zdXBwb3J0ZWRHcmFudFR5cGVFeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlVuc3VwcG9ydGVkR3JhbnRUeXBlRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBlcnJvcjtcbiAgICBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiVW5zdXBwb3J0ZWRHcmFudFR5cGVFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVW5zdXBwb3J0ZWRHcmFudFR5cGVFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IG9wdHMuZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBvcHRzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIH1cbn1cbiIsICJjb25zdCBfQURFID0gXCJBY2Nlc3NEZW5pZWRFeGNlcHRpb25cIjtcbmNvbnN0IF9BUEUgPSBcIkF1dGhvcml6YXRpb25QZW5kaW5nRXhjZXB0aW9uXCI7XG5jb25zdCBfQVQgPSBcIkFjY2Vzc1Rva2VuXCI7XG5jb25zdCBfQ1MgPSBcIkNsaWVudFNlY3JldFwiO1xuY29uc3QgX0NUID0gXCJDcmVhdGVUb2tlblwiO1xuY29uc3QgX0NUUiA9IFwiQ3JlYXRlVG9rZW5SZXF1ZXN0XCI7XG5jb25zdCBfQ1RSciA9IFwiQ3JlYXRlVG9rZW5SZXNwb25zZVwiO1xuY29uc3QgX0NWID0gXCJDb2RlVmVyaWZpZXJcIjtcbmNvbnN0IF9FVEUgPSBcIkV4cGlyZWRUb2tlbkV4Y2VwdGlvblwiO1xuY29uc3QgX0lDRSA9IFwiSW52YWxpZENsaWVudEV4Y2VwdGlvblwiO1xuY29uc3QgX0lHRSA9IFwiSW52YWxpZEdyYW50RXhjZXB0aW9uXCI7XG5jb25zdCBfSVJFID0gXCJJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvblwiO1xuY29uc3QgX0lTRSA9IFwiSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb25cIjtcbmNvbnN0IF9JU0VuID0gXCJJbnZhbGlkU2NvcGVFeGNlcHRpb25cIjtcbmNvbnN0IF9JVCA9IFwiSWRUb2tlblwiO1xuY29uc3QgX1JUID0gXCJSZWZyZXNoVG9rZW5cIjtcbmNvbnN0IF9TREUgPSBcIlNsb3dEb3duRXhjZXB0aW9uXCI7XG5jb25zdCBfVUNFID0gXCJVbmF1dGhvcml6ZWRDbGllbnRFeGNlcHRpb25cIjtcbmNvbnN0IF9VR1RFID0gXCJVbnN1cHBvcnRlZEdyYW50VHlwZUV4Y2VwdGlvblwiO1xuY29uc3QgX2FUID0gXCJhY2Nlc3NUb2tlblwiO1xuY29uc3QgX2MgPSBcImNsaWVudFwiO1xuY29uc3QgX2NJID0gXCJjbGllbnRJZFwiO1xuY29uc3QgX2NTID0gXCJjbGllbnRTZWNyZXRcIjtcbmNvbnN0IF9jViA9IFwiY29kZVZlcmlmaWVyXCI7XG5jb25zdCBfY28gPSBcImNvZGVcIjtcbmNvbnN0IF9kQyA9IFwiZGV2aWNlQ29kZVwiO1xuY29uc3QgX2UgPSBcImVycm9yXCI7XG5jb25zdCBfZUkgPSBcImV4cGlyZXNJblwiO1xuY29uc3QgX2VkID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiO1xuY29uc3QgX2dUID0gXCJncmFudFR5cGVcIjtcbmNvbnN0IF9oID0gXCJodHRwXCI7XG5jb25zdCBfaEUgPSBcImh0dHBFcnJvclwiO1xuY29uc3QgX2lUID0gXCJpZFRva2VuXCI7XG5jb25zdCBfciA9IFwicmVhc29uXCI7XG5jb25zdCBfclQgPSBcInJlZnJlc2hUb2tlblwiO1xuY29uc3QgX3JVID0gXCJyZWRpcmVjdFVyaVwiO1xuY29uc3QgX3MgPSBcInNtaXRoeS50cy5zZGsuc3ludGhldGljLmNvbS5hbWF6b25hd3Muc3Nvb2lkY1wiO1xuY29uc3QgX3NjID0gXCJzY29wZVwiO1xuY29uc3QgX3NlID0gXCJzZXJ2ZXJcIjtcbmNvbnN0IF90VCA9IFwidG9rZW5UeXBlXCI7XG5jb25zdCBuMCA9IFwiY29tLmFtYXpvbmF3cy5zc29vaWRjXCI7XG5pbXBvcnQgeyBUeXBlUmVnaXN0cnkgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgQWNjZXNzRGVuaWVkRXhjZXB0aW9uLCBBdXRob3JpemF0aW9uUGVuZGluZ0V4Y2VwdGlvbiwgRXhwaXJlZFRva2VuRXhjZXB0aW9uLCBJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiwgSW52YWxpZENsaWVudEV4Y2VwdGlvbiwgSW52YWxpZEdyYW50RXhjZXB0aW9uLCBJbnZhbGlkUmVxdWVzdEV4Y2VwdGlvbiwgSW52YWxpZFNjb3BlRXhjZXB0aW9uLCBTbG93RG93bkV4Y2VwdGlvbiwgVW5hdXRob3JpemVkQ2xpZW50RXhjZXB0aW9uLCBVbnN1cHBvcnRlZEdyYW50VHlwZUV4Y2VwdGlvbiwgfSBmcm9tIFwiLi4vbW9kZWxzL2Vycm9yc1wiO1xuaW1wb3J0IHsgU1NPT0lEQ1NlcnZpY2VFeGNlcHRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL1NTT09JRENTZXJ2aWNlRXhjZXB0aW9uXCI7XG5jb25zdCBfc19yZWdpc3RyeSA9IFR5cGVSZWdpc3RyeS5mb3IoX3MpO1xuZXhwb3J0IHZhciBTU09PSURDU2VydmljZUV4Y2VwdGlvbiQgPSBbLTMsIF9zLCBcIlNTT09JRENTZXJ2aWNlRXhjZXB0aW9uXCIsIDAsIFtdLCBbXV07XG5fc19yZWdpc3RyeS5yZWdpc3RlckVycm9yKFNTT09JRENTZXJ2aWNlRXhjZXB0aW9uJCwgU1NPT0lEQ1NlcnZpY2VFeGNlcHRpb24pO1xuY29uc3QgbjBfcmVnaXN0cnkgPSBUeXBlUmVnaXN0cnkuZm9yKG4wKTtcbmV4cG9ydCB2YXIgQWNjZXNzRGVuaWVkRXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfQURFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX2UsIF9yLCBfZWRdLFxuICAgIFswLCAwLCAwXSxcbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEFjY2Vzc0RlbmllZEV4Y2VwdGlvbiQsIEFjY2Vzc0RlbmllZEV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIEF1dGhvcml6YXRpb25QZW5kaW5nRXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfQVBFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX2UsIF9lZF0sXG4gICAgWzAsIDBdLFxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoQXV0aG9yaXphdGlvblBlbmRpbmdFeGNlcHRpb24kLCBBdXRob3JpemF0aW9uUGVuZGluZ0V4Y2VwdGlvbik7XG5leHBvcnQgdmFyIEV4cGlyZWRUb2tlbkV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfRVRFLCB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sIFtfZSwgX2VkXSwgWzAsIDBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoRXhwaXJlZFRva2VuRXhjZXB0aW9uJCwgRXhwaXJlZFRva2VuRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24kID0gWy0zLCBuMCwgX0lTRSwgeyBbX2VdOiBfc2UsIFtfaEVdOiA1MDAgfSwgW19lLCBfZWRdLCBbMCwgMF1dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiQsIEludGVybmFsU2VydmVyRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgSW52YWxpZENsaWVudEV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfSUNFLCB7IFtfZV06IF9jLCBbX2hFXTogNDAxIH0sIFtfZSwgX2VkXSwgWzAsIDBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSW52YWxpZENsaWVudEV4Y2VwdGlvbiQsIEludmFsaWRDbGllbnRFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJbnZhbGlkR3JhbnRFeGNlcHRpb24kID0gWy0zLCBuMCwgX0lHRSwgeyBbX2VdOiBfYywgW19oRV06IDQwMCB9LCBbX2UsIF9lZF0sIFswLCAwXV07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEludmFsaWRHcmFudEV4Y2VwdGlvbiQsIEludmFsaWRHcmFudEV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfSVJFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX2UsIF9yLCBfZWRdLFxuICAgIFswLCAwLCAwXSxcbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEludmFsaWRSZXF1ZXN0RXhjZXB0aW9uJCwgSW52YWxpZFJlcXVlc3RFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJbnZhbGlkU2NvcGVFeGNlcHRpb24kID0gWy0zLCBuMCwgX0lTRW4sIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSwgW19lLCBfZWRdLCBbMCwgMF1dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihJbnZhbGlkU2NvcGVFeGNlcHRpb24kLCBJbnZhbGlkU2NvcGVFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBTbG93RG93bkV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfU0RFLCB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sIFtfZSwgX2VkXSwgWzAsIDBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoU2xvd0Rvd25FeGNlcHRpb24kLCBTbG93RG93bkV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIFVuYXV0aG9yaXplZENsaWVudEV4Y2VwdGlvbiQgPSBbXG4gICAgLTMsXG4gICAgbjAsXG4gICAgX1VDRSxcbiAgICB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19lLCBfZWRdLFxuICAgIFswLCAwXSxcbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKFVuYXV0aG9yaXplZENsaWVudEV4Y2VwdGlvbiQsIFVuYXV0aG9yaXplZENsaWVudEV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIFVuc3VwcG9ydGVkR3JhbnRUeXBlRXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfVUdURSxcbiAgICB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19lLCBfZWRdLFxuICAgIFswLCAwXSxcbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKFVuc3VwcG9ydGVkR3JhbnRUeXBlRXhjZXB0aW9uJCwgVW5zdXBwb3J0ZWRHcmFudFR5cGVFeGNlcHRpb24pO1xuZXhwb3J0IGNvbnN0IGVycm9yVHlwZVJlZ2lzdHJpZXMgPSBbX3NfcmVnaXN0cnksIG4wX3JlZ2lzdHJ5XTtcbnZhciBBY2Nlc3NUb2tlbiA9IFswLCBuMCwgX0FULCA4LCAwXTtcbnZhciBDbGllbnRTZWNyZXQgPSBbMCwgbjAsIF9DUywgOCwgMF07XG52YXIgQ29kZVZlcmlmaWVyID0gWzAsIG4wLCBfQ1YsIDgsIDBdO1xudmFyIElkVG9rZW4gPSBbMCwgbjAsIF9JVCwgOCwgMF07XG52YXIgUmVmcmVzaFRva2VuID0gWzAsIG4wLCBfUlQsIDgsIDBdO1xuZXhwb3J0IHZhciBDcmVhdGVUb2tlblJlcXVlc3QkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0NUUixcbiAgICAwLFxuICAgIFtfY0ksIF9jUywgX2dULCBfZEMsIF9jbywgX3JULCBfc2MsIF9yVSwgX2NWXSxcbiAgICBbMCwgWygpID0+IENsaWVudFNlY3JldCwgMF0sIDAsIDAsIDAsIFsoKSA9PiBSZWZyZXNoVG9rZW4sIDBdLCA2NCB8IDAsIDAsIFsoKSA9PiBDb2RlVmVyaWZpZXIsIDBdXSxcbiAgICAzLFxuXTtcbmV4cG9ydCB2YXIgQ3JlYXRlVG9rZW5SZXNwb25zZSQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfQ1RScixcbiAgICAwLFxuICAgIFtfYVQsIF90VCwgX2VJLCBfclQsIF9pVF0sXG4gICAgW1soKSA9PiBBY2Nlc3NUb2tlbiwgMF0sIDAsIDEsIFsoKSA9PiBSZWZyZXNoVG9rZW4sIDBdLCBbKCkgPT4gSWRUb2tlbiwgMF1dLFxuXTtcbnZhciBTY29wZXMgPSA2NCB8IDA7XG5leHBvcnQgdmFyIENyZWF0ZVRva2VuJCA9IFtcbiAgICA5LFxuICAgIG4wLFxuICAgIF9DVCxcbiAgICB7IFtfaF06IFtcIlBPU1RcIiwgXCIvdG9rZW5cIiwgMjAwXSB9LFxuICAgICgpID0+IENyZWF0ZVRva2VuUmVxdWVzdCQsXG4gICAgKCkgPT4gQ3JlYXRlVG9rZW5SZXNwb25zZSQsXG5dO1xuIiwgImltcG9ydCB7IEF3c1Nka1NpZ1Y0U2lnbmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBBd3NSZXN0SnNvblByb3RvY29sIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvcHJvdG9jb2xzXCI7XG5pbXBvcnQgeyBOb0F1dGhTaWduZXIgfSBmcm9tIFwiQHNtaXRoeS9jb3JlXCI7XG5pbXBvcnQgeyBOb09wTG9nZ2VyIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgcGFyc2VVcmwgfSBmcm9tIFwiQHNtaXRoeS91cmwtcGFyc2VyXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0LCB0b0Jhc2U2NCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYmFzZTY0XCI7XG5pbXBvcnQgeyBmcm9tVXRmOCwgdG9VdGY4IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC11dGY4XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1NPT0lEQ0h0dHBBdXRoU2NoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCB7IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyIH0gZnJvbSBcIi4vZW5kcG9pbnQvZW5kcG9pbnRSZXNvbHZlclwiO1xuaW1wb3J0IHsgZXJyb3JUeXBlUmVnaXN0cmllcyB9IGZyb20gXCIuL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcGlWZXJzaW9uOiBcIjIwMTktMDYtMTBcIixcbiAgICAgICAgYmFzZTY0RGVjb2RlcjogY29uZmlnPy5iYXNlNjREZWNvZGVyID8/IGZyb21CYXNlNjQsXG4gICAgICAgIGJhc2U2NEVuY29kZXI6IGNvbmZpZz8uYmFzZTY0RW5jb2RlciA/PyB0b0Jhc2U2NCxcbiAgICAgICAgZGlzYWJsZUhvc3RQcmVmaXg6IGNvbmZpZz8uZGlzYWJsZUhvc3RQcmVmaXggPz8gZmFsc2UsXG4gICAgICAgIGVuZHBvaW50UHJvdmlkZXI6IGNvbmZpZz8uZW5kcG9pbnRQcm92aWRlciA/PyBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlcixcbiAgICAgICAgZXh0ZW5zaW9uczogY29uZmlnPy5leHRlbnNpb25zID8/IFtdLFxuICAgICAgICBodHRwQXV0aFNjaGVtZVByb3ZpZGVyOiBjb25maWc/Lmh0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPz8gZGVmYXVsdFNTT09JRENIdHRwQXV0aFNjaGVtZVByb3ZpZGVyLFxuICAgICAgICBodHRwQXV0aFNjaGVtZXM6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVzID8/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwiYXdzLmF1dGgjc2lndjRcIiksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgQXdzU2RrU2lnVjRTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNub0F1dGhcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcInNtaXRoeS5hcGkjbm9BdXRoXCIpIHx8IChhc3luYyAoKSA9PiAoe30pKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBOb0F1dGhTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGxvZ2dlcjogY29uZmlnPy5sb2dnZXIgPz8gbmV3IE5vT3BMb2dnZXIoKSxcbiAgICAgICAgcHJvdG9jb2w6IGNvbmZpZz8ucHJvdG9jb2wgPz8gQXdzUmVzdEpzb25Qcm90b2NvbCxcbiAgICAgICAgcHJvdG9jb2xTZXR0aW5nczogY29uZmlnPy5wcm90b2NvbFNldHRpbmdzID8/IHtcbiAgICAgICAgICAgIGRlZmF1bHROYW1lc3BhY2U6IFwiY29tLmFtYXpvbmF3cy5zc29vaWRjXCIsXG4gICAgICAgICAgICBlcnJvclR5cGVSZWdpc3RyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbjogXCIyMDE5LTA2LTEwXCIsXG4gICAgICAgICAgICBzZXJ2aWNlVGFyZ2V0OiBcIkFXU1NTT09JRENTZXJ2aWNlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VJZDogY29uZmlnPy5zZXJ2aWNlSWQgPz8gXCJTU08gT0lEQ1wiLFxuICAgICAgICB1cmxQYXJzZXI6IGNvbmZpZz8udXJsUGFyc2VyID8/IHBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyBmcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdG9VdGY4LFxuICAgIH07XG59O1xuIiwgImltcG9ydCBwYWNrYWdlSW5mbyBmcm9tIFwiLi4vLi4vLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uIGFzIGF3c0NoZWNrVmVyc2lvbiB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiO1xuaW1wb3J0IHsgTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIjtcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlciwgTk9ERV9BUFBfSURfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIjtcbmltcG9ydCB7IE5PREVfUkVHSU9OX0NPTkZJR19GSUxFX09QVElPTlMsIE5PREVfUkVHSU9OX0NPTkZJR19PUFRJT05TLCBOT0RFX1VTRV9EVUFMU1RBQ0tfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIE5PREVfVVNFX0ZJUFNfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIH0gZnJvbSBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI7XG5pbXBvcnQgeyBIYXNoIH0gZnJvbSBcIkBzbWl0aHkvaGFzaC1ub2RlXCI7XG5pbXBvcnQgeyBOT0RFX01BWF9BVFRFTVBUX0NPTkZJR19PUFRJT05TLCBOT0RFX1JFVFJZX01PREVfQ09ORklHX09QVElPTlMgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCI7XG5pbXBvcnQgeyBsb2FkQ29uZmlnIGFzIGxvYWROb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXJcIjtcbmltcG9ydCB7IE5vZGVIdHRwSGFuZGxlciBhcyBSZXF1ZXN0SGFuZGxlciwgc3RyZWFtQ29sbGVjdG9yIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIjtcbmltcG9ydCB7IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24sIGxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb2R5TGVuZ3RoIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1ub2RlXCI7XG5pbXBvcnQgeyByZXNvbHZlRGVmYXVsdHNNb2RlQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLW5vZGVcIjtcbmltcG9ydCB7IERFRkFVTFRfUkVUUllfTU9ERSB9IGZyb20gXCJAc21pdGh5L3V0aWwtcmV0cnlcIjtcbmltcG9ydCB7IGdldFJ1bnRpbWVDb25maWcgYXMgZ2V0U2hhcmVkUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWcuc2hhcmVkXCI7XG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uKHByb2Nlc3MudmVyc2lvbik7XG4gICAgY29uc3QgZGVmYXVsdHNNb2RlID0gcmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWdQcm92aWRlciA9ICgpID0+IGRlZmF1bHRzTW9kZSgpLnRoZW4obG9hZENvbmZpZ3NGb3JEZWZhdWx0TW9kZSk7XG4gICAgY29uc3QgY2xpZW50U2hhcmVkVmFsdWVzID0gZ2V0U2hhcmVkUnVudGltZUNvbmZpZyhjb25maWcpO1xuICAgIGF3c0NoZWNrVmVyc2lvbihwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgICAgcHJvZmlsZTogY29uZmlnPy5wcm9maWxlLFxuICAgICAgICBsb2dnZXI6IGNsaWVudFNoYXJlZFZhbHVlcy5sb2dnZXIsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jbGllbnRTaGFyZWRWYWx1ZXMsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgcnVudGltZTogXCJub2RlXCIsXG4gICAgICAgIGRlZmF1bHRzTW9kZSxcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IGNvbmZpZz8uYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyOiBjb25maWc/LmJvZHlMZW5ndGhDaGVja2VyID8/IGNhbGN1bGF0ZUJvZHlMZW5ndGgsXG4gICAgICAgIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogY29uZmlnPy5kZWZhdWx0VXNlckFnZW50UHJvdmlkZXIgPz9cbiAgICAgICAgICAgIGNyZWF0ZURlZmF1bHRVc2VyQWdlbnRQcm92aWRlcih7IHNlcnZpY2VJZDogY2xpZW50U2hhcmVkVmFsdWVzLnNlcnZpY2VJZCwgY2xpZW50VmVyc2lvbjogcGFja2FnZUluZm8udmVyc2lvbiB9KSxcbiAgICAgICAgbWF4QXR0ZW1wdHM6IGNvbmZpZz8ubWF4QXR0ZW1wdHMgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoTk9ERV9SRUdJT05fQ09ORklHX09QVElPTlMsIHsgLi4uTk9ERV9SRUdJT05fQ09ORklHX0ZJTEVfT1BUSU9OUywgLi4ubG9hZGVyQ29uZmlnIH0pLFxuICAgICAgICByZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIuY3JlYXRlKGNvbmZpZz8ucmVxdWVzdEhhbmRsZXIgPz8gZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKSxcbiAgICAgICAgcmV0cnlNb2RlOiBjb25maWc/LnJldHJ5TW9kZSA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCBERUZBVUxUX1JFVFJZX01PREUsXG4gICAgICAgICAgICB9LCBjb25maWcpLFxuICAgICAgICBzaGEyNTY6IGNvbmZpZz8uc2hhMjU2ID8/IEhhc2guYmluZChudWxsLCBcInNoYTI1NlwiKSxcbiAgICAgICAgc3RyZWFtQ29sbGVjdG9yOiBjb25maWc/LnN0cmVhbUNvbGxlY3RvciA/PyBzdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGxvYWROb2RlQ29uZmlnKE5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX0FQUF9JRF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICB9O1xufTtcbiIsICJleHBvcnQgY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWcuaHR0cEF1dGhTY2hlbWVzKCksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMoKSxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgeyBnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgfSBmcm9tIFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgY29uc3QgcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zID0gKHJ1bnRpbWVDb25maWcsIGV4dGVuc2lvbnMpID0+IHtcbiAgICBjb25zdCBleHRlbnNpb25Db25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZykpO1xuICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY29uZmlndXJlKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihydW50aW1lQ29uZmlnLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEhlYWRlclBsdWdpbiwgcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcsIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIjtcbmltcG9ydCB7IGdldExvZ2dlclBsdWdpbiB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLWxvZ2dlclwiO1xuaW1wb3J0IHsgZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50UGx1Z2luLCByZXNvbHZlVXNlckFnZW50Q29uZmlnLCB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjtcbmltcG9ydCB7IHJlc29sdmVSZWdpb25Db25maWcgfSBmcm9tIFwiQHNtaXRoeS9jb25maWctcmVzb2x2ZXJcIjtcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnLCBnZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbiwgZ2V0SHR0cFNpZ25pbmdQbHVnaW4sIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U2NoZW1hU2VyZGVQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudExlbmd0aFBsdWdpbiB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIjtcbmltcG9ydCB7IHJlc29sdmVFbmRwb2ludENvbmZpZywgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBnZXRSZXRyeVBsdWdpbiwgcmVzb2x2ZVJldHJ5Q29uZmlnLCB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIjtcbmltcG9ydCB7IENsaWVudCBhcyBfX0NsaWVudCwgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1NPT0lEQ0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLCByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcsIH0gZnJvbSBcIi4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzLCB9IGZyb20gXCIuL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgZ2V0UnVudGltZUNvbmZpZyBhcyBfX2dldFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9ydW50aW1lQ29uZmlnXCI7XG5pbXBvcnQgeyByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9ydW50aW1lRXh0ZW5zaW9uc1wiO1xuZXhwb3J0IHsgX19DbGllbnQgfTtcbmV4cG9ydCBjbGFzcyBTU09PSURDQ2xpZW50IGV4dGVuZHMgX19DbGllbnQge1xuICAgIGNvbmZpZztcbiAgICBjb25zdHJ1Y3RvciguLi5bY29uZmlndXJhdGlvbl0pIHtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18wID0gX19nZXRSdW50aW1lQ29uZmlnKGNvbmZpZ3VyYXRpb24gfHwge30pO1xuICAgICAgICBzdXBlcihfY29uZmlnXzApO1xuICAgICAgICB0aGlzLmluaXRDb25maWcgPSBfY29uZmlnXzA7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMSA9IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMoX2NvbmZpZ18wKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18yID0gcmVzb2x2ZVVzZXJBZ2VudENvbmZpZyhfY29uZmlnXzEpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzMgPSByZXNvbHZlUmV0cnlDb25maWcoX2NvbmZpZ18yKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ180ID0gcmVzb2x2ZVJlZ2lvbkNvbmZpZyhfY29uZmlnXzMpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzUgPSByZXNvbHZlSG9zdEhlYWRlckNvbmZpZyhfY29uZmlnXzQpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzYgPSByZXNvbHZlRW5kcG9pbnRDb25maWcoX2NvbmZpZ181KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ183ID0gcmVzb2x2ZUh0dHBBdXRoU2NoZW1lQ29uZmlnKF9jb25maWdfNik7XG4gICAgICAgIGNvbnN0IF9jb25maWdfOCA9IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyhfY29uZmlnXzcsIGNvbmZpZ3VyYXRpb24/LmV4dGVuc2lvbnMgfHwgW10pO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9jb25maWdfODtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldFNjaGVtYVNlcmRlUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRVc2VyQWdlbnRQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldFJldHJ5UGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRDb250ZW50TGVuZ3RoUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRIb3N0SGVhZGVyUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRMb2dnZXJQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldFJlY3Vyc2lvbkRldGVjdGlvblBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0SHR0cEF1dGhTY2hlbWVFbmRwb2ludFJ1bGVTZXRQbHVnaW4odGhpcy5jb25maWcsIHtcbiAgICAgICAgICAgIGh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyOiBkZWZhdWx0U1NPT0lEQ0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLFxuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyOiBhc3luYyAoY29uZmlnKSA9PiBuZXcgRGVmYXVsdElkZW50aXR5UHJvdmlkZXJDb25maWcoe1xuICAgICAgICAgICAgICAgIFwiYXdzLmF1dGgjc2lndjRcIjogY29uZmlnLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBTaWduaW5nUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0RW5kcG9pbnRQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY29tbW9uUGFyYW1zIH0gZnJvbSBcIi4uL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQ3JlYXRlVG9rZW4kIH0gZnJvbSBcIi4uL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgeyAkQ29tbWFuZCB9O1xuZXhwb3J0IGNsYXNzIENyZWF0ZVRva2VuQ29tbWFuZCBleHRlbmRzICRDb21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKGNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBV1NTU09PSURDU2VydmljZVwiLCBcIkNyZWF0ZVRva2VuXCIsIHt9KVxuICAgIC5uKFwiU1NPT0lEQ0NsaWVudFwiLCBcIkNyZWF0ZVRva2VuQ29tbWFuZFwiKVxuICAgIC5zYyhDcmVhdGVUb2tlbiQpXG4gICAgLmJ1aWxkKCkge1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUFnZ3JlZ2F0ZWRDbGllbnQgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVUb2tlbkNvbW1hbmQsIH0gZnJvbSBcIi4vY29tbWFuZHMvQ3JlYXRlVG9rZW5Db21tYW5kXCI7XG5pbXBvcnQgeyBTU09PSURDQ2xpZW50IH0gZnJvbSBcIi4vU1NPT0lEQ0NsaWVudFwiO1xuY29uc3QgY29tbWFuZHMgPSB7XG4gICAgQ3JlYXRlVG9rZW5Db21tYW5kLFxufTtcbmV4cG9ydCBjbGFzcyBTU09PSURDIGV4dGVuZHMgU1NPT0lEQ0NsaWVudCB7XG59XG5jcmVhdGVBZ2dyZWdhdGVkQ2xpZW50KGNvbW1hbmRzLCBTU09PSURDKTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9DcmVhdGVUb2tlbkNvbW1hbmRcIjtcbiIsICJleHBvcnQgY29uc3QgQWNjZXNzRGVuaWVkRXhjZXB0aW9uUmVhc29uID0ge1xuICAgIEtNU19BQ0NFU1NfREVOSUVEOiBcIktNU19BY2Nlc3NEZW5pZWRFeGNlcHRpb25cIixcbn07XG5leHBvcnQgY29uc3QgSW52YWxpZFJlcXVlc3RFeGNlcHRpb25SZWFzb24gPSB7XG4gICAgS01TX0RJU0FCTEVEX0tFWTogXCJLTVNfRGlzYWJsZWRFeGNlcHRpb25cIixcbiAgICBLTVNfSU5WQUxJRF9LRVlfVVNBR0U6IFwiS01TX0ludmFsaWRLZXlVc2FnZUV4Y2VwdGlvblwiLFxuICAgIEtNU19JTlZBTElEX1NUQVRFOiBcIktNU19JbnZhbGlkU3RhdGVFeGNlcHRpb25cIixcbiAgICBLTVNfS0VZX05PVF9GT1VORDogXCJLTVNfTm90Rm91bmRFeGNlcHRpb25cIixcbn07XG4iLCAiZXhwb3J0IHt9O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL1NTT09JRENDbGllbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NTT09JRENcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbW1hbmRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zY2hlbWFzL3NjaGVtYXNfMFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzL2VudW1zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvZXJyb3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvbW9kZWxzXzBcIjtcbmV4cG9ydCB7IFNTT09JRENTZXJ2aWNlRXhjZXB0aW9uIH0gZnJvbSBcIi4vbW9kZWxzL1NTT09JRENTZXJ2aWNlRXhjZXB0aW9uXCI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsU0FBUyxpQ0FBaUMsZ0JBQWdCO0FBQ3RELFNBQU87QUFBQSxJQUNILFVBQVU7QUFBQSxJQUNWLG1CQUFtQjtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sUUFBUSxlQUFlO0FBQUEsSUFDM0I7QUFBQSxJQUNBLHFCQUFxQixDQUFDLFFBQVEsYUFBYTtBQUFBLE1BQ3ZDLG1CQUFtQjtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0o7QUFDQSxTQUFTLG9DQUFvQyxnQkFBZ0I7QUFDekQsU0FBTztBQUFBLElBQ0gsVUFBVTtBQUFBLEVBQ2Q7QUFDSjtBQTlCQSxJQUNBLHdCQUNhLGdEQTZCQSxzQ0FhQTtBQTVDYjtBQUFBO0FBQUE7QUFDQSw2QkFBb0Q7QUFDN0MsSUFBTSxpREFBaUQsT0FBTyxRQUFRLFNBQVMsVUFBVTtBQUM1RixhQUFPO0FBQUEsUUFDSCxlQUFXLHlD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Q0FBLElBQWEsNkJBR0E7QUFIYjtBQUFBO0FBQU8sSUFBTSw4QkFBOEI7QUFBQSxNQUN2QyxtQkFBbUI7QUFBQSxJQUN2QjtBQUNPLElBQU0sZ0NBQWdDO0FBQUEsTUFDekMsa0JBQWtCO0FBQUEsTUFDbEIsdUJBQXVCO0FBQUEsTUFDdkIsbUJBQW1CO0FBQUEsTUFDbkIsbUJBQW1CO0FBQUEsSUFDdkI7QUFBQTtBQUFBOzs7QUNSQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdXRpbF9lbmRwb2ludHMiLCAiX19TZXJ2aWNlRXhjZXB0aW9uIiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImdldFJ1bnRpbWVDb25maWciLCAibG9hZE5vZGVDb25maWciLCAiUmVxdWVzdEhhbmRsZXIiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiaW1wb3J0X2NvbmZpZ19yZXNvbHZlciIsICJpbXBvcnRfbWlkZGxld2FyZV9yZXRyeSIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJfX0NsaWVudCIsICJnZXRSdW50aW1lQ29uZmlnIiwgImltcG9ydF9taWRkbGV3YXJlX2VuZHBvaW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgIiRDb21tYW5kIiwgIm8iLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiXQp9Cg==
