#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs29
} from "./chunk-HIIJM7BH.mjs";
import "./chunk-GWXFHECT.mjs";
import {
  require_dist_cjs as require_dist_cjs31
} from "./chunk-MU4JTR3N.mjs";
import {
  require_dist_cjs as require_dist_cjs32
} from "./chunk-6SP42MGC.mjs";
import {
  init_sts,
  sts_exports
} from "./chunk-72IAV36L.mjs";
import {
  init_package,
  package_default
} from "./chunk-OGEI6JO6.mjs";
import {
  AwsJson1_1Protocol,
  AwsSdkSigV4Signer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  init_httpAuthSchemes,
  init_protocols,
  require_dist_cjs as require_dist_cjs13,
  require_dist_cjs10 as require_dist_cjs22,
  require_dist_cjs11 as require_dist_cjs23,
  require_dist_cjs12 as require_dist_cjs24,
  require_dist_cjs13 as require_dist_cjs25,
  require_dist_cjs14 as require_dist_cjs26,
  require_dist_cjs15 as require_dist_cjs27,
  require_dist_cjs16 as require_dist_cjs28,
  require_dist_cjs2 as require_dist_cjs14,
  require_dist_cjs3 as require_dist_cjs15,
  require_dist_cjs4 as require_dist_cjs16,
  require_dist_cjs5 as require_dist_cjs17,
  require_dist_cjs6 as require_dist_cjs18,
  require_dist_cjs7 as require_dist_cjs19,
  require_dist_cjs8 as require_dist_cjs20,
  require_dist_cjs9 as require_dist_cjs21,
  resolveAwsSdkSigV4Config
} from "./chunk-HVPHPOYV.mjs";
import {
  require_dist_cjs as require_dist_cjs30,
  require_dist_cjs2 as require_dist_cjs33
} from "./chunk-ZYGPMMXK.mjs";
import {
  require_dist_cjs as require_dist_cjs34
} from "./chunk-OPTHXAMC.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-XKXNRC7R.mjs";
import {
  require_dist_cjs as require_dist_cjs7
} from "./chunk-SS7GLGMM.mjs";
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-EZHETOM7.mjs";
import "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs as require_dist_cjs12
} from "./chunk-RYF4F6PN.mjs";
import {
  require_dist_cjs as require_dist_cjs11
} from "./chunk-RR3PN36J.mjs";
import {
  client_exports,
  emitWarningIfUnsupportedVersion,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-NE3ECB5D.mjs";
import {
  DefaultIdentityProviderConfig,
  NoAuthSigner,
  dist_es_exports,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import {
  TypeRegistry,
  getSchemaSerdePlugin,
  init_schema,
  init_tslib_es6,
  require_dist_cjs as require_dist_cjs9,
  require_dist_cjs5 as require_dist_cjs10,
  tslib_es6_exports
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs3 as require_dist_cjs2
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  require_dist_cjs as require_dist_cjs6
} from "./chunk-FONUB5ET.mjs";
import "./chunk-P2R73CAR.mjs";
import {
  require_dist_cjs3 as require_dist_cjs8
} from "./chunk-HJNATCD3.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/createCredentialChain.js
var require_createCredentialChain = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/createCredentialChain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.propertyProviderChain = exports.createCredentialChain = void 0;
    var property_provider_1 = require_dist_cjs3();
    var createCredentialChain = (...credentialProviders) => {
      let expireAfter = -1;
      const baseFunction = async (awsIdentityProperties) => {
        const credentials = await (0, exports.propertyProviderChain)(...credentialProviders)(awsIdentityProperties);
        if (!credentials.expiration && expireAfter !== -1) {
          credentials.expiration = new Date(Date.now() + expireAfter);
        }
        return credentials;
      };
      const withOptions = Object.assign(baseFunction, {
        expireAfter(milliseconds) {
          if (milliseconds < 5 * 6e4) {
            throw new Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
          }
          expireAfter = milliseconds;
          return withOptions;
        }
      });
      return withOptions;
    };
    exports.createCredentialChain = createCredentialChain;
    var propertyProviderChain = (...providers) => async (awsIdentityProperties) => {
      if (providers.length === 0) {
        throw new property_provider_1.ProviderError("No providers in chain", { tryNextLink: false });
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          return await provider(awsIdentityProperties);
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    exports.propertyProviderChain = propertyProviderChain;
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "cognito-identity",
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
var import_util_middleware, defaultCognitoIdentityHttpAuthSchemeParametersProvider, defaultCognitoIdentityHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes();
    import_util_middleware = __toESM(require_dist_cjs10());
    defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetCredentialsForIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "GetId": {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "cognito-identity"
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/ruleset.js
var w, x, y, z, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/ruleset.js"() {
    w = "required";
    x = "fn";
    y = "argv";
    z = "ref";
    a = true;
    b = "isSet";
    c = "booleanEquals";
    d = "error";
    e = "endpoint";
    f = "tree";
    g = "PartitionResult";
    h = "getAttr";
    i = "stringEquals";
    j = { [w]: false, type: "string" };
    k = { [w]: true, default: false, type: "boolean" };
    l = { [z]: "Endpoint" };
    m = { [x]: c, [y]: [{ [z]: "UseFIPS" }, true] };
    n = { [x]: c, [y]: [{ [z]: "UseDualStack" }, true] };
    o = {};
    p = { [z]: "Region" };
    q = { [x]: h, [y]: [{ [z]: g }, "supportsFIPS"] };
    r = { [z]: g };
    s = { [x]: c, [y]: [true, { [x]: h, [y]: [r, "supportsDualStack"] }] };
    t = [m];
    u = [n];
    v = [p];
    _data = {
      version: "1.0",
      parameters: { Region: j, UseDualStack: k, UseFIPS: k, Endpoint: j },
      rules: [
        {
          conditions: [{ [x]: b, [y]: [l] }],
          rules: [
            { conditions: t, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d },
            { conditions: u, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d },
            { endpoint: { url: l, properties: o, headers: o }, type: e }
          ],
          type: f
        },
        {
          conditions: [{ [x]: b, [y]: v }],
          rules: [
            {
              conditions: [{ [x]: "aws.partition", [y]: v, assign: g }],
              rules: [
                {
                  conditions: [m, n],
                  rules: [
                    {
                      conditions: [{ [x]: c, [y]: [a, q] }, s],
                      rules: [
                        {
                          conditions: [{ [x]: i, [y]: [p, "us-east-1"] }],
                          endpoint: {
                            url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                            properties: o,
                            headers: o
                          },
                          type: e
                        },
                        {
                          conditions: [{ [x]: i, [y]: [p, "us-east-2"] }],
                          endpoint: {
                            url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                            properties: o,
                            headers: o
                          },
                          type: e
                        },
                        {
                          conditions: [{ [x]: i, [y]: [p, "us-west-1"] }],
                          endpoint: {
                            url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                            properties: o,
                            headers: o
                          },
                          type: e
                        },
                        {
                          conditions: [{ [x]: i, [y]: [p, "us-west-2"] }],
                          endpoint: {
                            url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                            properties: o,
                            headers: o
                          },
                          type: e
                        },
                        {
                          endpoint: {
                            url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: o,
                            headers: o
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
                  conditions: t,
                  rules: [
                    {
                      conditions: [{ [x]: c, [y]: [q, a] }],
                      rules: [
                        {
                          endpoint: {
                            url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                            properties: o,
                            headers: o
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
                  conditions: u,
                  rules: [
                    {
                      conditions: [s],
                      rules: [
                        {
                          conditions: [{ [x]: i, [y]: ["aws", { [x]: h, [y]: [r, "name"] }] }],
                          endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: o, headers: o },
                          type: e
                        },
                        {
                          endpoint: {
                            url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: o,
                            headers: o
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
                  endpoint: {
                    url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                    properties: o,
                    headers: o
                  },
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs17());
    import_util_endpoints2 = __toESM(require_dist_cjs16());
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/CognitoIdentityServiceException.js
var import_smithy_client, CognitoIdentityServiceException;
var init_CognitoIdentityServiceException = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/CognitoIdentityServiceException.js"() {
    import_smithy_client = __toESM(require_dist_cjs11());
    CognitoIdentityServiceException = class _CognitoIdentityServiceException extends import_smithy_client.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _CognitoIdentityServiceException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/errors.js
var ExternalServiceException, InternalErrorException, InvalidIdentityPoolConfigurationException, InvalidParameterException, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, TooManyRequestsException, LimitExceededException;
var init_errors = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/errors.js"() {
    init_CognitoIdentityServiceException();
    ExternalServiceException = class _ExternalServiceException extends CognitoIdentityServiceException {
      name = "ExternalServiceException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExternalServiceException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExternalServiceException.prototype);
      }
    };
    InternalErrorException = class _InternalErrorException extends CognitoIdentityServiceException {
      name = "InternalErrorException";
      $fault = "server";
      constructor(opts) {
        super({
          name: "InternalErrorException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalErrorException.prototype);
      }
    };
    InvalidIdentityPoolConfigurationException = class _InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException {
      name = "InvalidIdentityPoolConfigurationException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityPoolConfigurationException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityPoolConfigurationException.prototype);
      }
    };
    InvalidParameterException = class _InvalidParameterException extends CognitoIdentityServiceException {
      name = "InvalidParameterException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidParameterException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidParameterException.prototype);
      }
    };
    NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityServiceException {
      name = "NotAuthorizedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "NotAuthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
      }
    };
    ResourceConflictException = class _ResourceConflictException extends CognitoIdentityServiceException {
      name = "ResourceConflictException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceConflictException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceConflictException.prototype);
      }
    };
    ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityServiceException {
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
    TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityServiceException {
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
    LimitExceededException = class _LimitExceededException extends CognitoIdentityServiceException {
      name = "LimitExceededException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "LimitExceededException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _LimitExceededException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/schemas/schemas_0.js
var _AI, _AKI, _C, _CRA, _E, _ESE, _GCFI, _GCFII, _GCFIR, _GI, _GII, _GIR, _IEE, _II, _IIPCE, _IPE, _IPI, _IPT, _L, _LEE, _LM, _NAE, _RCE, _RNFE, _SK, _SKS, _ST, _TMRE, _c, _e, _hE, _m, _s, _se, n0, _s_registry, CognitoIdentityServiceException$, n0_registry, ExternalServiceException$, InternalErrorException$, InvalidIdentityPoolConfigurationException$, InvalidParameterException$, LimitExceededException$, NotAuthorizedException$, ResourceConflictException$, ResourceNotFoundException$, TooManyRequestsException$, errorTypeRegistries, IdentityProviderToken, SecretKeyString, Credentials$, GetCredentialsForIdentityInput$, GetCredentialsForIdentityResponse$, GetIdInput$, GetIdResponse$, LoginsMap, GetCredentialsForIdentity$, GetId$;
var init_schemas_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/schemas/schemas_0.js"() {
    init_schema();
    init_CognitoIdentityServiceException();
    init_errors();
    _AI = "AccountId";
    _AKI = "AccessKeyId";
    _C = "Credentials";
    _CRA = "CustomRoleArn";
    _E = "Expiration";
    _ESE = "ExternalServiceException";
    _GCFI = "GetCredentialsForIdentity";
    _GCFII = "GetCredentialsForIdentityInput";
    _GCFIR = "GetCredentialsForIdentityResponse";
    _GI = "GetId";
    _GII = "GetIdInput";
    _GIR = "GetIdResponse";
    _IEE = "InternalErrorException";
    _II = "IdentityId";
    _IIPCE = "InvalidIdentityPoolConfigurationException";
    _IPE = "InvalidParameterException";
    _IPI = "IdentityPoolId";
    _IPT = "IdentityProviderToken";
    _L = "Logins";
    _LEE = "LimitExceededException";
    _LM = "LoginsMap";
    _NAE = "NotAuthorizedException";
    _RCE = "ResourceConflictException";
    _RNFE = "ResourceNotFoundException";
    _SK = "SecretKey";
    _SKS = "SecretKeyString";
    _ST = "SessionToken";
    _TMRE = "TooManyRequestsException";
    _c = "client";
    _e = "error";
    _hE = "httpError";
    _m = "message";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
    _se = "server";
    n0 = "com.amazonaws.cognitoidentity";
    _s_registry = TypeRegistry.for(_s);
    CognitoIdentityServiceException$ = [-3, _s, "CognitoIdentityServiceException", 0, [], []];
    _s_registry.registerError(CognitoIdentityServiceException$, CognitoIdentityServiceException);
    n0_registry = TypeRegistry.for(n0);
    ExternalServiceException$ = [-3, n0, _ESE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
    n0_registry.registerError(ExternalServiceException$, ExternalServiceException);
    InternalErrorException$ = [-3, n0, _IEE, { [_e]: _se }, [_m], [0]];
    n0_registry.registerError(InternalErrorException$, InternalErrorException);
    InvalidIdentityPoolConfigurationException$ = [
      -3,
      n0,
      _IIPCE,
      { [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(InvalidIdentityPoolConfigurationException$, InvalidIdentityPoolConfigurationException);
    InvalidParameterException$ = [-3, n0, _IPE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
    n0_registry.registerError(InvalidParameterException$, InvalidParameterException);
    LimitExceededException$ = [-3, n0, _LEE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
    n0_registry.registerError(LimitExceededException$, LimitExceededException);
    NotAuthorizedException$ = [-3, n0, _NAE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
    n0_registry.registerError(NotAuthorizedException$, NotAuthorizedException);
    ResourceConflictException$ = [-3, n0, _RCE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
    n0_registry.registerError(ResourceConflictException$, ResourceConflictException);
    ResourceNotFoundException$ = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
    n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
    TooManyRequestsException$ = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
    n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
    errorTypeRegistries = [_s_registry, n0_registry];
    IdentityProviderToken = [0, n0, _IPT, 8, 0];
    SecretKeyString = [0, n0, _SKS, 8, 0];
    Credentials$ = [
      3,
      n0,
      _C,
      0,
      [_AKI, _SK, _ST, _E],
      [0, [() => SecretKeyString, 0], 0, 4]
    ];
    GetCredentialsForIdentityInput$ = [
      3,
      n0,
      _GCFII,
      0,
      [_II, _L, _CRA],
      [0, [() => LoginsMap, 0], 0],
      1
    ];
    GetCredentialsForIdentityResponse$ = [
      3,
      n0,
      _GCFIR,
      0,
      [_II, _C],
      [0, [() => Credentials$, 0]]
    ];
    GetIdInput$ = [3, n0, _GII, 0, [_IPI, _AI, _L], [0, 0, [() => LoginsMap, 0]], 1];
    GetIdResponse$ = [3, n0, _GIR, 0, [_II], [0]];
    LoginsMap = [2, n0, _LM, 0, [0, 0], [() => IdentityProviderToken, 0]];
    GetCredentialsForIdentity$ = [
      9,
      n0,
      _GCFI,
      0,
      () => GetCredentialsForIdentityInput$,
      () => GetCredentialsForIdentityResponse$
    ];
    GetId$ = [9, n0, _GI, 0, () => GetIdInput$, () => GetIdResponse$];
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeConfig.shared.js
var import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeConfig.shared.js"() {
    init_httpAuthSchemes();
    init_protocols();
    init_dist_es();
    import_smithy_client2 = __toESM(require_dist_cjs11());
    import_url_parser = __toESM(require_dist_cjs6());
    import_util_base64 = __toESM(require_dist_cjs9());
    import_util_utf8 = __toESM(require_dist_cjs8());
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    init_schemas_0();
    getRuntimeConfig = (config) => {
      return {
        apiVersion: "2014-06-30",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoIdentityHttpAuthSchemeProvider,
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
        protocol: config?.protocol ?? AwsJson1_1Protocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.cognitoidentity",
          errorTypeRegistries,
          xmlNamespace: "http://cognito-identity.amazonaws.com/doc/2014-06-30/",
          version: "2014-06-30",
          serviceTarget: "AWSCognitoIdentityService"
        },
        serviceId: config?.serviceId ?? "Cognito Identity",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeConfig.js"() {
    init_package();
    init_client();
    init_httpAuthSchemes();
    import_util_user_agent_node = __toESM(require_dist_cjs24());
    import_config_resolver = __toESM(require_dist_cjs20());
    import_hash_node = __toESM(require_dist_cjs25());
    import_middleware_retry = __toESM(require_dist_cjs23());
    import_node_config_provider = __toESM(require_dist_cjs5());
    import_node_http_handler = __toESM(require_dist_cjs2());
    import_smithy_client3 = __toESM(require_dist_cjs11());
    import_util_body_length_node = __toESM(require_dist_cjs26());
    import_util_defaults_mode_node = __toESM(require_dist_cjs27());
    import_util_retry = __toESM(require_dist_cjs18());
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/auth/httpAuthExtensionConfiguration.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/runtimeExtensions.js"() {
    import_region_config_resolver = __toESM(require_dist_cjs28());
    import_protocol_http = __toESM(require_dist_cjs());
    import_smithy_client4 = __toESM(require_dist_cjs11());
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client4.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client4.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/CognitoIdentityClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, CognitoIdentityClient;
var init_CognitoIdentityClient = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/CognitoIdentityClient.js"() {
    import_middleware_host_header = __toESM(require_dist_cjs13());
    import_middleware_logger = __toESM(require_dist_cjs14());
    import_middleware_recursion_detection = __toESM(require_dist_cjs15());
    import_middleware_user_agent = __toESM(require_dist_cjs19());
    import_config_resolver2 = __toESM(require_dist_cjs20());
    init_dist_es();
    init_schema();
    import_middleware_content_length = __toESM(require_dist_cjs21());
    import_middleware_endpoint = __toESM(require_dist_cjs22());
    import_middleware_retry2 = __toESM(require_dist_cjs23());
    import_smithy_client5 = __toESM(require_dist_cjs11());
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    CognitoIdentityClient = class extends import_smithy_client5.Client {
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
          httpAuthSchemeParametersProvider: defaultCognitoIdentityHttpAuthSchemeParametersProvider,
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/GetCredentialsForIdentityCommand.js
var import_middleware_endpoint2, import_smithy_client6, GetCredentialsForIdentityCommand;
var init_GetCredentialsForIdentityCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/GetCredentialsForIdentityCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs22());
    import_smithy_client6 = __toESM(require_dist_cjs11());
    init_EndpointParameters();
    init_schemas_0();
    GetCredentialsForIdentityCommand = class extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(GetCredentialsForIdentity$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/GetIdCommand.js
var import_middleware_endpoint3, import_smithy_client7, GetIdCommand;
var init_GetIdCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/GetIdCommand.js"() {
    import_middleware_endpoint3 = __toESM(require_dist_cjs22());
    import_smithy_client7 = __toESM(require_dist_cjs11());
    init_EndpointParameters();
    init_schemas_0();
    GetIdCommand = class extends import_smithy_client7.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint3.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(GetId$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/CognitoIdentity.js
var import_smithy_client8, commands, CognitoIdentity;
var init_CognitoIdentity = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/CognitoIdentity.js"() {
    import_smithy_client8 = __toESM(require_dist_cjs11());
    init_CognitoIdentityClient();
    init_GetCredentialsForIdentityCommand();
    init_GetIdCommand();
    commands = {
      GetCredentialsForIdentityCommand,
      GetIdCommand
    };
    CognitoIdentity = class extends CognitoIdentityClient {
    };
    (0, import_smithy_client8.createAggregatedClient)(commands, CognitoIdentity);
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/index.js
var init_commands = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/commands/index.js"() {
    init_GetCredentialsForIdentityCommand();
    init_GetIdCommand();
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/models_0.js
var init_models_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/models/models_0.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/index.js
var cognito_identity_exports = {};
__export(cognito_identity_exports, {
  CognitoIdentity: () => CognitoIdentity,
  CognitoIdentityClient: () => CognitoIdentityClient,
  CognitoIdentityServiceException: () => CognitoIdentityServiceException,
  CognitoIdentityServiceException$: () => CognitoIdentityServiceException$,
  Credentials$: () => Credentials$,
  ExternalServiceException: () => ExternalServiceException,
  ExternalServiceException$: () => ExternalServiceException$,
  GetCredentialsForIdentity$: () => GetCredentialsForIdentity$,
  GetCredentialsForIdentityCommand: () => GetCredentialsForIdentityCommand,
  GetCredentialsForIdentityInput$: () => GetCredentialsForIdentityInput$,
  GetCredentialsForIdentityResponse$: () => GetCredentialsForIdentityResponse$,
  GetId$: () => GetId$,
  GetIdCommand: () => GetIdCommand,
  GetIdInput$: () => GetIdInput$,
  GetIdResponse$: () => GetIdResponse$,
  InternalErrorException: () => InternalErrorException,
  InternalErrorException$: () => InternalErrorException$,
  InvalidIdentityPoolConfigurationException: () => InvalidIdentityPoolConfigurationException,
  InvalidIdentityPoolConfigurationException$: () => InvalidIdentityPoolConfigurationException$,
  InvalidParameterException: () => InvalidParameterException,
  InvalidParameterException$: () => InvalidParameterException$,
  LimitExceededException: () => LimitExceededException,
  LimitExceededException$: () => LimitExceededException$,
  NotAuthorizedException: () => NotAuthorizedException,
  NotAuthorizedException$: () => NotAuthorizedException$,
  ResourceConflictException: () => ResourceConflictException,
  ResourceConflictException$: () => ResourceConflictException$,
  ResourceNotFoundException: () => ResourceNotFoundException,
  ResourceNotFoundException$: () => ResourceNotFoundException$,
  TooManyRequestsException: () => TooManyRequestsException,
  TooManyRequestsException$: () => TooManyRequestsException$,
  __Client: () => import_smithy_client5.Client,
  errorTypeRegistries: () => errorTypeRegistries
});
var init_cognito_identity = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/cognito-identity/index.js"() {
    init_CognitoIdentityClient();
    init_CognitoIdentity();
    init_commands();
    init_schemas_0();
    init_errors();
    init_models_0();
    init_CognitoIdentityServiceException();
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-cognito-identity@3.972.21/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-cjs/loadCognitoIdentity-C-kPrLZ4.js
var require_loadCognitoIdentity_C_kPrLZ4 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-cognito-identity@3.972.21/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-cjs/loadCognitoIdentity-C-kPrLZ4.js"(exports) {
    "use strict";
    var cognitoIdentity = (init_cognito_identity(), __toCommonJS(cognito_identity_exports));
    exports.CognitoIdentityClient = cognitoIdentity.CognitoIdentityClient;
    exports.GetCredentialsForIdentityCommand = cognitoIdentity.GetCredentialsForIdentityCommand;
    exports.GetIdCommand = cognitoIdentity.GetIdCommand;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-cognito-identity@3.972.21/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-cognito-identity@3.972.21/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-cjs/index.js"(exports) {
    "use strict";
    var propertyProvider = require_dist_cjs3();
    function resolveLogins(logins) {
      return Promise.all(Object.keys(logins).reduce((arr, name) => {
        const tokenOrProvider = logins[name];
        if (typeof tokenOrProvider === "string") {
          arr.push([name, tokenOrProvider]);
        } else {
          arr.push(tokenOrProvider().then((token) => [name, token]));
        }
        return arr;
      }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins2, [key, value]) => {
        logins2[key] = value;
        return logins2;
      }, {}));
    }
    function fromCognitoIdentity(parameters) {
      return async (awsIdentityProperties) => {
        parameters.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
        const { GetCredentialsForIdentityCommand: GetCredentialsForIdentityCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(function() {
          return require_loadCognitoIdentity_C_kPrLZ4();
        });
        const fromConfigs = (property) => parameters.clientConfig?.[property] ?? parameters.parentClientConfig?.[property] ?? awsIdentityProperties?.callerClientConfig?.[property];
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(parameters.logger), Expiration, SecretKey = throwOnMissingSecretKey(parameters.logger), SessionToken } = throwOnMissingCredentials(parameters.logger) } = await (parameters.client ?? new CognitoIdentityClient2(Object.assign({}, parameters.clientConfig ?? {}, {
          region: fromConfigs("region"),
          profile: fromConfigs("profile"),
          userAgentAppId: fromConfigs("userAgentAppId")
        }))).send(new GetCredentialsForIdentityCommand2({
          CustomRoleArn: parameters.customRoleArn,
          IdentityId: parameters.identityId,
          Logins: parameters.logins ? await resolveLogins(parameters.logins) : void 0
        }));
        return {
          identityId: parameters.identityId,
          accessKeyId: AccessKeyId,
          secretAccessKey: SecretKey,
          sessionToken: SessionToken,
          expiration: Expiration
        };
      };
    }
    function throwOnMissingAccessKeyId(logger) {
      throw new propertyProvider.CredentialsProviderError("Response from Amazon Cognito contained no access key ID", { logger });
    }
    function throwOnMissingCredentials(logger) {
      throw new propertyProvider.CredentialsProviderError("Response from Amazon Cognito contained no credentials", { logger });
    }
    function throwOnMissingSecretKey(logger) {
      throw new propertyProvider.CredentialsProviderError("Response from Amazon Cognito contained no secret key", { logger });
    }
    var STORE_NAME = "IdentityIds";
    var IndexedDbStorage = class {
      dbName;
      constructor(dbName = "aws:cognito-identity-ids") {
        this.dbName = dbName;
      }
      getItem(key) {
        return this.withObjectStore("readonly", (store) => {
          const req = store.get(key);
          return new Promise((resolve) => {
            req.onerror = () => resolve(null);
            req.onsuccess = () => resolve(req.result ? req.result.value : null);
          });
        }).catch(() => null);
      }
      removeItem(key) {
        return this.withObjectStore("readwrite", (store) => {
          const req = store.delete(key);
          return new Promise((resolve, reject) => {
            req.onerror = () => reject(req.error);
            req.onsuccess = () => resolve();
          });
        });
      }
      setItem(id, value) {
        return this.withObjectStore("readwrite", (store) => {
          const req = store.put({ id, value });
          return new Promise((resolve, reject) => {
            req.onerror = () => reject(req.error);
            req.onsuccess = () => resolve();
          });
        });
      }
      getDb() {
        const openDbRequest = self.indexedDB.open(this.dbName, 1);
        return new Promise((resolve, reject) => {
          openDbRequest.onsuccess = () => {
            resolve(openDbRequest.result);
          };
          openDbRequest.onerror = () => {
            reject(openDbRequest.error);
          };
          openDbRequest.onblocked = () => {
            reject(new Error("Unable to access DB"));
          };
          openDbRequest.onupgradeneeded = () => {
            const db = openDbRequest.result;
            db.onerror = () => {
              reject(new Error("Failed to create object store"));
            };
            db.createObjectStore(STORE_NAME, { keyPath: "id" });
          };
        });
      }
      withObjectStore(mode, action) {
        return this.getDb().then((db) => {
          const tx = db.transaction(STORE_NAME, mode);
          tx.oncomplete = () => db.close();
          return new Promise((resolve, reject) => {
            tx.onerror = () => reject(tx.error);
            resolve(action(tx.objectStore(STORE_NAME)));
          }).catch((err) => {
            db.close();
            throw err;
          });
        });
      }
    };
    var InMemoryStorage = class {
      store;
      constructor(store = {}) {
        this.store = store;
      }
      getItem(key) {
        if (key in this.store) {
          return this.store[key];
        }
        return null;
      }
      removeItem(key) {
        delete this.store[key];
      }
      setItem(key, value) {
        this.store[key] = value;
      }
    };
    var inMemoryStorage = new InMemoryStorage();
    function localStorage() {
      if (typeof self === "object" && self.indexedDB) {
        return new IndexedDbStorage();
      }
      if (typeof window === "object" && window.localStorage) {
        return window.localStorage;
      }
      return inMemoryStorage;
    }
    function fromCognitoIdentityPool({ accountId, cache: cache2 = localStorage(), client, clientConfig, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : void 0, logger, parentClientConfig }) {
      logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
      const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : void 0;
      let provider = async (awsIdentityProperties) => {
        const { GetIdCommand: GetIdCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(function() {
          return require_loadCognitoIdentity_C_kPrLZ4();
        });
        const fromConfigs = (property) => clientConfig?.[property] ?? parentClientConfig?.[property] ?? awsIdentityProperties?.callerClientConfig?.[property];
        const _client = client ?? new CognitoIdentityClient2(Object.assign({}, clientConfig ?? {}, {
          region: fromConfigs("region"),
          profile: fromConfigs("profile"),
          userAgentAppId: fromConfigs("userAgentAppId")
        }));
        let identityId = cacheKey && await cache2.getItem(cacheKey);
        if (!identityId) {
          const { IdentityId = throwOnMissingId(logger) } = await _client.send(new GetIdCommand2({
            AccountId: accountId,
            IdentityPoolId: identityPoolId,
            Logins: logins ? await resolveLogins(logins) : void 0
          }));
          identityId = IdentityId;
          if (cacheKey) {
            Promise.resolve(cache2.setItem(cacheKey, identityId)).catch(() => {
            });
          }
        }
        provider = fromCognitoIdentity({
          client: _client,
          customRoleArn,
          logins,
          identityId
        });
        return provider(awsIdentityProperties);
      };
      return (awsIdentityProperties) => provider(awsIdentityProperties).catch(async (err) => {
        if (cacheKey) {
          Promise.resolve(cache2.removeItem(cacheKey)).catch(() => {
          });
        }
        throw err;
      });
    }
    function throwOnMissingId(logger) {
      throw new propertyProvider.CredentialsProviderError("Response from Amazon Cognito contained no identity ID", { logger });
    }
    exports.fromCognitoIdentity = fromCognitoIdentity;
    exports.fromCognitoIdentityPool = fromCognitoIdentityPool;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromCognitoIdentity.js
var require_fromCognitoIdentity = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromCognitoIdentity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromCognitoIdentity = void 0;
    var credential_provider_cognito_identity_1 = require_dist_cjs35();
    var fromCognitoIdentity = (options) => (0, credential_provider_cognito_identity_1.fromCognitoIdentity)({
      ...options
    });
    exports.fromCognitoIdentity = fromCognitoIdentity;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromCognitoIdentityPool.js
var require_fromCognitoIdentityPool = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromCognitoIdentityPool.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromCognitoIdentityPool = void 0;
    var credential_provider_cognito_identity_1 = require_dist_cjs35();
    var fromCognitoIdentityPool = (options) => (0, credential_provider_cognito_identity_1.fromCognitoIdentityPool)({
      ...options
    });
    exports.fromCognitoIdentityPool = fromCognitoIdentityPool;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromContainerMetadata.js
var require_fromContainerMetadata = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromContainerMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromContainerMetadata = void 0;
    var credential_provider_imds_1 = require_dist_cjs7();
    var fromContainerMetadata = (init) => {
      init?.logger?.debug("@smithy/credential-provider-imds", "fromContainerMetadata");
      return (0, credential_provider_imds_1.fromContainerMetadata)(init);
    };
    exports.fromContainerMetadata = fromContainerMetadata;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromEnv.js
var require_fromEnv = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromEnv.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEnv = void 0;
    var credential_provider_env_1 = require_dist_cjs4();
    var fromEnv = (init) => (0, credential_provider_env_1.fromEnv)(init);
    exports.fromEnv = fromEnv;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromIni.js
var require_fromIni = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromIni.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromIni = void 0;
    var credential_provider_ini_1 = require_dist_cjs33();
    var fromIni = (init = {}) => (0, credential_provider_ini_1.fromIni)({
      ...init
    });
    exports.fromIni = fromIni;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromInstanceMetadata.js
var require_fromInstanceMetadata = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromInstanceMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromInstanceMetadata = void 0;
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var credential_provider_imds_1 = require_dist_cjs7();
    var fromInstanceMetadata = (init) => {
      init?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata");
      return async () => (0, credential_provider_imds_1.fromInstanceMetadata)(init)().then((creds) => (0, client_1.setCredentialFeature)(creds, "CREDENTIALS_IMDS", "0"));
    };
    exports.fromInstanceMetadata = fromInstanceMetadata;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromLoginCredentials.js
var require_fromLoginCredentials = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromLoginCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromLoginCredentials = void 0;
    var credential_provider_login_1 = require_dist_cjs30();
    var fromLoginCredentials = (init) => (0, credential_provider_login_1.fromLoginCredentials)({
      ...init
    });
    exports.fromLoginCredentials = fromLoginCredentials;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromNodeProviderChain.js
var require_fromNodeProviderChain = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromNodeProviderChain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromNodeProviderChain = void 0;
    var credential_provider_node_1 = require_dist_cjs34();
    var fromNodeProviderChain = (init = {}) => (0, credential_provider_node_1.defaultProvider)({
      ...init
    });
    exports.fromNodeProviderChain = fromNodeProviderChain;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromProcess.js
var require_fromProcess = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromProcess.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromProcess = void 0;
    var credential_provider_process_1 = require_dist_cjs31();
    var fromProcess = (init) => (0, credential_provider_process_1.fromProcess)(init);
    exports.fromProcess = fromProcess;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromSSO.js
var require_fromSSO = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromSSO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSSO = void 0;
    var credential_provider_sso_1 = require_dist_cjs29();
    var fromSSO = (init = {}) => {
      return (0, credential_provider_sso_1.fromSSO)({ ...init });
    };
    exports.fromSSO = fromSSO;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/loadSts.js
var require_loadSts = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/loadSts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSClient = exports.AssumeRoleCommand = void 0;
    var sts_1 = (init_sts(), __toCommonJS(sts_exports));
    Object.defineProperty(exports, "AssumeRoleCommand", { enumerable: true, get: function() {
      return sts_1.AssumeRoleCommand;
    } });
    Object.defineProperty(exports, "STSClient", { enumerable: true, get: function() {
      return sts_1.STSClient;
    } });
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTemporaryCredentials.base.js
var require_fromTemporaryCredentials_base = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTemporaryCredentials.base.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o2, k22, desc);
    }) : (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k2 in o3) if (Object.prototype.hasOwnProperty.call(o3, k2)) ar[ar.length] = k2;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k2 = ownKeys(mod), i2 = 0; i2 < k2.length; i2++) if (k2[i2] !== "default") __createBinding(result, mod, k2[i2]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromTemporaryCredentials = void 0;
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var property_provider_1 = require_dist_cjs3();
    var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    var fromTemporaryCredentials = (options, credentialDefaultProvider, regionProvider) => {
      let stsClient;
      return async (awsIdentityProperties = {}) => {
        const { callerClientConfig } = awsIdentityProperties;
        const profile = options.clientConfig?.profile ?? callerClientConfig?.profile;
        const logger = options.logger ?? callerClientConfig?.logger;
        logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
        const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
        if (params?.SerialNumber) {
          if (!options.mfaCodeProvider) {
            throw new property_provider_1.CredentialsProviderError(`Temporary credential requires multi-factor authentication, but no MFA code callback was provided.`, {
              tryNextLink: false,
              logger
            });
          }
          params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
        }
        const { AssumeRoleCommand, STSClient } = await Promise.resolve().then(() => __importStar(require_loadSts()));
        if (!stsClient) {
          const defaultCredentialsOrError = typeof credentialDefaultProvider === "function" ? credentialDefaultProvider() : void 0;
          const credentialSources = [
            options.masterCredentials,
            options.clientConfig?.credentials,
            void callerClientConfig?.credentials,
            callerClientConfig?.credentialDefaultProvider?.(),
            defaultCredentialsOrError
          ];
          let credentialSource = "STS client default credentials";
          if (credentialSources[0]) {
            credentialSource = "options.masterCredentials";
          } else if (credentialSources[1]) {
            credentialSource = "options.clientConfig.credentials";
          } else if (credentialSources[2]) {
            credentialSource = "caller client's credentials";
            throw new Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
          } else if (credentialSources[3]) {
            credentialSource = "caller client's credentialDefaultProvider";
          } else if (credentialSources[4]) {
            credentialSource = "AWS SDK default credentials";
          }
          const regionSources = [
            options.clientConfig?.region,
            callerClientConfig?.region,
            await regionProvider?.({
              profile
            }),
            ASSUME_ROLE_DEFAULT_REGION
          ];
          let regionSource = "default partition's default region";
          if (regionSources[0]) {
            regionSource = "options.clientConfig.region";
          } else if (regionSources[1]) {
            regionSource = "caller client's region";
          } else if (regionSources[2]) {
            regionSource = "file or env region";
          }
          const requestHandlerSources = [
            filterRequestHandler(options.clientConfig?.requestHandler),
            filterRequestHandler(callerClientConfig?.requestHandler)
          ];
          let requestHandlerSource = "STS default requestHandler";
          if (requestHandlerSources[0]) {
            requestHandlerSource = "options.clientConfig.requestHandler";
          } else if (requestHandlerSources[1]) {
            requestHandlerSource = "caller client's requestHandler";
          }
          logger?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${regionSource}=${await (0, core_1.normalizeProvider)(coalesce(regionSources))()}, ${credentialSource}, ${requestHandlerSource}.`);
          stsClient = new STSClient({
            userAgentAppId: callerClientConfig?.userAgentAppId,
            ...options.clientConfig,
            credentials: coalesce(credentialSources),
            logger,
            profile,
            region: coalesce(regionSources),
            requestHandler: coalesce(requestHandlerSources)
          });
        }
        if (options.clientPlugins) {
          for (const plugin of options.clientPlugins) {
            stsClient.middlewareStack.use(plugin);
          }
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new property_provider_1.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`, {
            logger
          });
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          credentialScope: Credentials.CredentialScope
        };
      };
    };
    exports.fromTemporaryCredentials = fromTemporaryCredentials;
    var filterRequestHandler = (requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2" ? void 0 : requestHandler;
    };
    var coalesce = (args) => {
      for (const item of args) {
        if (item !== void 0) {
          return item;
        }
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTemporaryCredentials.js
var require_fromTemporaryCredentials = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTemporaryCredentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromTemporaryCredentials = void 0;
    var config_resolver_1 = require_dist_cjs20();
    var node_config_provider_1 = require_dist_cjs5();
    var fromNodeProviderChain_1 = require_fromNodeProviderChain();
    var fromTemporaryCredentials_base_1 = require_fromTemporaryCredentials_base();
    var fromTemporaryCredentials = (options) => {
      return (0, fromTemporaryCredentials_base_1.fromTemporaryCredentials)(options, fromNodeProviderChain_1.fromNodeProviderChain, async ({ profile = process.env.AWS_PROFILE }) => (0, node_config_provider_1.loadConfig)({
        environmentVariableSelector: (env) => env.AWS_REGION,
        configFileSelector: (profileData) => {
          return profileData.region;
        },
        default: () => void 0
      }, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, profile })());
    };
    exports.fromTemporaryCredentials = fromTemporaryCredentials;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTokenFile.js
var require_fromTokenFile = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromTokenFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromTokenFile = void 0;
    var credential_provider_web_identity_1 = require_dist_cjs32();
    var fromTokenFile = (init = {}) => (0, credential_provider_web_identity_1.fromTokenFile)({
      ...init
    });
    exports.fromTokenFile = fromTokenFile;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromWebToken.js
var require_fromWebToken = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/fromWebToken.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromWebToken = void 0;
    var credential_provider_web_identity_1 = require_dist_cjs32();
    var fromWebToken = (init) => (0, credential_provider_web_identity_1.fromWebToken)({
      ...init
    });
    exports.fromWebToken = fromWebToken;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-providers@3.1021.0/node_modules/@aws-sdk/credential-providers/dist-cjs/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromHttp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_createCredentialChain(), exports);
    tslib_1.__exportStar(require_fromCognitoIdentity(), exports);
    tslib_1.__exportStar(require_fromCognitoIdentityPool(), exports);
    tslib_1.__exportStar(require_fromContainerMetadata(), exports);
    tslib_1.__exportStar(require_fromEnv(), exports);
    var credential_provider_http_1 = require_dist_cjs12();
    Object.defineProperty(exports, "fromHttp", { enumerable: true, get: function() {
      return credential_provider_http_1.fromHttp;
    } });
    tslib_1.__exportStar(require_fromIni(), exports);
    tslib_1.__exportStar(require_fromInstanceMetadata(), exports);
    tslib_1.__exportStar(require_fromLoginCredentials(), exports);
    tslib_1.__exportStar(require_fromNodeProviderChain(), exports);
    tslib_1.__exportStar(require_fromProcess(), exports);
    tslib_1.__exportStar(require_fromSSO(), exports);
    tslib_1.__exportStar(require_fromTemporaryCredentials(), exports);
    tslib_1.__exportStar(require_fromTokenFile(), exports);
    tslib_1.__exportStar(require_fromWebToken(), exports);
  }
});
export default require_dist_cjs36();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9jcmVhdGVDcmVkZW50aWFsQ2hhaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9lbmRwb2ludC9FbmRwb2ludFBhcmFtZXRlcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9lbmRwb2ludC9ydWxlc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvZW5kcG9pbnQvZW5kcG9pbnRSZXNvbHZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L21vZGVscy9Db2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvbW9kZWxzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L3NjaGVtYXMvc2NoZW1hc18wLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvcnVudGltZUNvbmZpZy5zaGFyZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9ydW50aW1lQ29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvYXV0aC9odHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9ydW50aW1lRXh0ZW5zaW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L0NvZ25pdG9JZGVudGl0eUNsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L2NvbW1hbmRzL0dldENyZWRlbnRpYWxzRm9ySWRlbnRpdHlDb21tYW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvY29tbWFuZHMvR2V0SWRDb21tYW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvQ29nbml0b0lkZW50aXR5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvY29tbWFuZHMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9tb2RlbHMvbW9kZWxzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1jb2duaXRvLWlkZW50aXR5QDMuOTcyLjIxL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWNvZ25pdG8taWRlbnRpdHkvZGlzdC1janMvbG9hZENvZ25pdG9JZGVudGl0eS1DLWtQckxaNC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1jb2duaXRvLWlkZW50aXR5QDMuOTcyLjIxL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWNvZ25pdG8taWRlbnRpdHkvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tQ29nbml0b0lkZW50aXR5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvZnJvbUNvZ25pdG9JZGVudGl0eVBvb2wuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tQ29udGFpbmVyTWV0YWRhdGEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tRW52LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvZnJvbUluaS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlcnNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXJzL2Rpc3QtY2pzL2Zyb21JbnN0YW5jZU1ldGFkYXRhLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvZnJvbUxvZ2luQ3JlZGVudGlhbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tTm9kZVByb3ZpZGVyQ2hhaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tUHJvY2Vzcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlcnNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXJzL2Rpc3QtY2pzL2Zyb21TU08uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9sb2FkU3RzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzLmJhc2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXJzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycy9kaXN0LWNqcy9mcm9tVG9rZW5GaWxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvZnJvbVdlYlRva2VuLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMvZGlzdC1janMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9wZXJ0eVByb3ZpZGVyQ2hhaW4gPSBleHBvcnRzLmNyZWF0ZUNyZWRlbnRpYWxDaGFpbiA9IHZvaWQgMDtcbmNvbnN0IHByb3BlcnR5X3Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiKTtcbmNvbnN0IGNyZWF0ZUNyZWRlbnRpYWxDaGFpbiA9ICguLi5jcmVkZW50aWFsUHJvdmlkZXJzKSA9PiB7XG4gICAgbGV0IGV4cGlyZUFmdGVyID0gLTE7XG4gICAgY29uc3QgYmFzZUZ1bmN0aW9uID0gYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0ICgwLCBleHBvcnRzLnByb3BlcnR5UHJvdmlkZXJDaGFpbikoLi4uY3JlZGVudGlhbFByb3ZpZGVycykoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscy5leHBpcmF0aW9uICYmIGV4cGlyZUFmdGVyICE9PSAtMSkge1xuICAgICAgICAgICAgY3JlZGVudGlhbHMuZXhwaXJhdGlvbiA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBleHBpcmVBZnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzO1xuICAgIH07XG4gICAgY29uc3Qgd2l0aE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGJhc2VGdW5jdGlvbiwge1xuICAgICAgICBleHBpcmVBZnRlcihtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZHMgPCA1ICogNjBfMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMgLSBjcmVhdGVDcmVkZW50aWFsQ2hhaW4oLi4uKS5leHBpcmVBZnRlcihtcykgbWF5IG5vdCBiZSBjYWxsZWQgd2l0aCBhIGR1cmF0aW9uIGxvd2VyIHRoYW4gZml2ZSBtaW51dGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGlyZUFmdGVyID0gbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhPcHRpb25zO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB3aXRoT3B0aW9ucztcbn07XG5leHBvcnRzLmNyZWF0ZUNyZWRlbnRpYWxDaGFpbiA9IGNyZWF0ZUNyZWRlbnRpYWxDaGFpbjtcbmNvbnN0IHByb3BlcnR5UHJvdmlkZXJDaGFpbiA9ICguLi5wcm92aWRlcnMpID0+IGFzeW5jIChhd3NJZGVudGl0eVByb3BlcnRpZXMpID0+IHtcbiAgICBpZiAocHJvdmlkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlfcHJvdmlkZXJfMS5Qcm92aWRlckVycm9yKFwiTm8gcHJvdmlkZXJzIGluIGNoYWluXCIsIHsgdHJ5TmV4dExpbms6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBsZXQgbGFzdFByb3ZpZGVyRXJyb3I7XG4gICAgZm9yIChjb25zdCBwcm92aWRlciBvZiBwcm92aWRlcnMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcm92aWRlcihhd3NJZGVudGl0eVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxhc3RQcm92aWRlckVycm9yID0gZXJyO1xuICAgICAgICAgICAgaWYgKGVycj8udHJ5TmV4dExpbmspIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBsYXN0UHJvdmlkZXJFcnJvcjtcbn07XG5leHBvcnRzLnByb3BlcnR5UHJvdmlkZXJDaGFpbiA9IHByb3BlcnR5UHJvdmlkZXJDaGFpbjtcbiIsICJpbXBvcnQgeyByZXNvbHZlQXdzU2RrU2lnVjRDb25maWcgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIjtcbmltcG9ydCB7IGdldFNtaXRoeUNvbnRleHQsIG5vcm1hbGl6ZVByb3ZpZGVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1taWRkbGV3YXJlXCI7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvZ25pdG9JZGVudGl0eUh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gYXN5bmMgKGNvbmZpZywgY29udGV4dCwgaW5wdXQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVyYXRpb246IGdldFNtaXRoeUNvbnRleHQoY29udGV4dCkub3BlcmF0aW9uLFxuICAgICAgICByZWdpb246IChhd2FpdCBub3JtYWxpemVQcm92aWRlcihjb25maWcucmVnaW9uKSgpKSB8fFxuICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBgcmVnaW9uYCB0byBiZSBjb25maWd1cmVkIGZvciBgYXdzLmF1dGgjc2lndjRgXCIpO1xuICAgICAgICAgICAgfSkoKSxcbiAgICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29nbml0by1pZGVudGl0eVwiLFxuICAgICAgICAgICAgcmVnaW9uOiBhdXRoUGFyYW1ldGVycy5yZWdpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BlcnRpZXNFeHRyYWN0b3I6IChjb25maWcsIGNvbnRleHQpID0+ICh7XG4gICAgICAgICAgICBzaWduaW5nUHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNtaXRoeUFwaU5vQXV0aEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNub0F1dGhcIixcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2duaXRvSWRlbnRpdHlIdHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gKGF1dGhQYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIHN3aXRjaCAoYXV0aFBhcmFtZXRlcnMub3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJHZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5XCI6IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChjcmVhdGVTbWl0aHlBcGlOb0F1dGhIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkdldElkXCI6IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChjcmVhdGVTbWl0aHlBcGlOb0F1dGhIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICBjb25zdCBjb25maWdfMCA9IHJlc29sdmVBd3NTZGtTaWdWNENvbmZpZyhjb25maWcpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZ18wLCB7XG4gICAgICAgIGF1dGhTY2hlbWVQcmVmZXJlbmNlOiBub3JtYWxpemVQcm92aWRlcihjb25maWcuYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gW10pLFxuICAgIH0pO1xufTtcbiIsICJleHBvcnQgY29uc3QgcmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycyA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICB1c2VEdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCA/PyBmYWxzZSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBvcHRpb25zLnVzZUZpcHNFbmRwb2ludCA/PyBmYWxzZSxcbiAgICAgICAgZGVmYXVsdFNpZ25pbmdOYW1lOiBcImNvZ25pdG8taWRlbnRpdHlcIixcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgIFVzZUZJUFM6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwidXNlRmlwc0VuZHBvaW50XCIgfSxcbiAgICBFbmRwb2ludDogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJlbmRwb2ludFwiIH0sXG4gICAgUmVnaW9uOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInJlZ2lvblwiIH0sXG4gICAgVXNlRHVhbFN0YWNrOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUR1YWxzdGFja0VuZHBvaW50XCIgfSxcbn07XG4iLCAiY29uc3QgdyA9IFwicmVxdWlyZWRcIiwgeCA9IFwiZm5cIiwgeSA9IFwiYXJndlwiLCB6ID0gXCJyZWZcIjtcbmNvbnN0IGEgPSB0cnVlLCBiID0gXCJpc1NldFwiLCBjID0gXCJib29sZWFuRXF1YWxzXCIsIGQgPSBcImVycm9yXCIsIGUgPSBcImVuZHBvaW50XCIsIGYgPSBcInRyZWVcIiwgZyA9IFwiUGFydGl0aW9uUmVzdWx0XCIsIGggPSBcImdldEF0dHJcIiwgaSA9IFwic3RyaW5nRXF1YWxzXCIsIGogPSB7IFt3XTogZmFsc2UsIHR5cGU6IFwic3RyaW5nXCIgfSwgayA9IHsgW3ddOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSwgdHlwZTogXCJib29sZWFuXCIgfSwgbCA9IHsgW3pdOiBcIkVuZHBvaW50XCIgfSwgbSA9IHsgW3hdOiBjLCBbeV06IFt7IFt6XTogXCJVc2VGSVBTXCIgfSwgdHJ1ZV0gfSwgbiA9IHsgW3hdOiBjLCBbeV06IFt7IFt6XTogXCJVc2VEdWFsU3RhY2tcIiB9LCB0cnVlXSB9LCBvID0ge30sIHAgPSB7IFt6XTogXCJSZWdpb25cIiB9LCBxID0geyBbeF06IGgsIFt5XTogW3sgW3pdOiBnIH0sIFwic3VwcG9ydHNGSVBTXCJdIH0sIHIgPSB7IFt6XTogZyB9LCBzID0geyBbeF06IGMsIFt5XTogW3RydWUsIHsgW3hdOiBoLCBbeV06IFtyLCBcInN1cHBvcnRzRHVhbFN0YWNrXCJdIH1dIH0sIHQgPSBbbV0sIHUgPSBbbl0sIHYgPSBbcF07XG5jb25zdCBfZGF0YSA9IHtcbiAgICB2ZXJzaW9uOiBcIjEuMFwiLFxuICAgIHBhcmFtZXRlcnM6IHsgUmVnaW9uOiBqLCBVc2VEdWFsU3RhY2s6IGssIFVzZUZJUFM6IGssIEVuZHBvaW50OiBqIH0sXG4gICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3hdOiBiLCBbeV06IFtsXSB9XSxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgeyBjb25kaXRpb25zOiB0LCBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IEZJUFMgYW5kIGN1c3RvbSBlbmRwb2ludCBhcmUgbm90IHN1cHBvcnRlZFwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgeyBjb25kaXRpb25zOiB1LCBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IER1YWxzdGFjayBhbmQgY3VzdG9tIGVuZHBvaW50IGFyZSBub3Qgc3VwcG9ydGVkXCIsIHR5cGU6IGQgfSxcbiAgICAgICAgICAgICAgICB7IGVuZHBvaW50OiB7IHVybDogbCwgcHJvcGVydGllczogbywgaGVhZGVyczogbyB9LCB0eXBlOiBlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3hdOiBiLCBbeV06IHYgfV0sXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3hdOiBcImF3cy5wYXJ0aXRpb25cIiwgW3ldOiB2LCBhc3NpZ246IGcgfV0sXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW20sIG5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt4XTogYywgW3ldOiBbYSwgcV0gfSwgc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3hdOiBpLCBbeV06IFtwLCBcInVzLWVhc3QtMVwiXSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2NvZ25pdG8taWRlbnRpdHktZmlwcy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt4XTogaSwgW3ldOiBbcCwgXCJ1cy1lYXN0LTJcIl0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2duaXRvLWlkZW50aXR5LWZpcHMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbeF06IGksIFt5XTogW3AsIFwidXMtd2VzdC0xXCJdIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vY29nbml0by1pZGVudGl0eS1maXBzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW3hdOiBpLCBbeV06IFtwLCBcInVzLXdlc3QtMlwiXSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2NvZ25pdG8taWRlbnRpdHktZmlwcy51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2duaXRvLWlkZW50aXR5LWZpcHMue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRklQUyBhbmQgRHVhbFN0YWNrIGFyZSBlbmFibGVkLCBidXQgdGhpcyBwYXJ0aXRpb24gZG9lcyBub3Qgc3VwcG9ydCBvbmUgb3IgYm90aFwiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFt7IFt4XTogYywgW3ldOiBbcSwgYV0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2NvZ25pdG8taWRlbnRpdHktZmlwcy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcjogXCJGSVBTIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRklQU1wiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFtzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbeF06IGksIFt5XTogW1wiYXdzXCIsIHsgW3hdOiBoLCBbeV06IFtyLCBcIm5hbWVcIl0gfV0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL2NvZ25pdG8taWRlbnRpdHkue1JlZ2lvbn0uYW1hem9uYXdzLmNvbVwiLCBwcm9wZXJ0aWVzOiBvLCBoZWFkZXJzOiBvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2duaXRvLWlkZW50aXR5LntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZHVhbFN0YWNrRG5zU3VmZml4fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9yOiBcIkR1YWxTdGFjayBpcyBlbmFibGVkIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IER1YWxTdGFja1wiLCB0eXBlOiBkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2duaXRvLWlkZW50aXR5LntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZG5zU3VmZml4fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0eXBlOiBmLFxuICAgICAgICB9LFxuICAgICAgICB7IGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogTWlzc2luZyBSZWdpb25cIiwgdHlwZTogZCB9LFxuICAgIF0sXG59O1xuZXhwb3J0IGNvbnN0IHJ1bGVTZXQgPSBfZGF0YTtcbiIsICJpbXBvcnQgeyBhd3NFbmRwb2ludEZ1bmN0aW9ucyB9IGZyb20gXCJAYXdzLXNkay91dGlsLWVuZHBvaW50c1wiO1xuaW1wb3J0IHsgY3VzdG9tRW5kcG9pbnRGdW5jdGlvbnMsIEVuZHBvaW50Q2FjaGUsIHJlc29sdmVFbmRwb2ludCB9IGZyb20gXCJAc21pdGh5L3V0aWwtZW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBydWxlU2V0IH0gZnJvbSBcIi4vcnVsZXNldFwiO1xuY29uc3QgY2FjaGUgPSBuZXcgRW5kcG9pbnRDYWNoZSh7XG4gICAgc2l6ZTogNTAsXG4gICAgcGFyYW1zOiBbXCJFbmRwb2ludFwiLCBcIlJlZ2lvblwiLCBcIlVzZUR1YWxTdGFja1wiLCBcIlVzZUZJUFNcIl0sXG59KTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlciA9IChlbmRwb2ludFBhcmFtcywgY29udGV4dCA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChlbmRwb2ludFBhcmFtcywgKCkgPT4gcmVzb2x2ZUVuZHBvaW50KHJ1bGVTZXQsIHtcbiAgICAgICAgZW5kcG9pbnRQYXJhbXM6IGVuZHBvaW50UGFyYW1zLFxuICAgICAgICBsb2dnZXI6IGNvbnRleHQubG9nZ2VyLFxuICAgIH0pKTtcbn07XG5jdXN0b21FbmRwb2ludEZ1bmN0aW9ucy5hd3MgPSBhd3NFbmRwb2ludEZ1bmN0aW9ucztcbiIsICJpbXBvcnQgeyBTZXJ2aWNlRXhjZXB0aW9uIGFzIF9fU2VydmljZUV4Y2VwdGlvbiwgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5leHBvcnQgeyBfX1NlcnZpY2VFeGNlcHRpb24gfTtcbmV4cG9ydCBjbGFzcyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uIGV4dGVuZHMgX19TZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ29nbml0b0lkZW50aXR5U2VydmljZUV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uIGFzIF9fQmFzZUV4Y2VwdGlvbiB9IGZyb20gXCIuL0NvZ25pdG9JZGVudGl0eVNlcnZpY2VFeGNlcHRpb25cIjtcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFNlcnZpY2VFeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkV4dGVybmFsU2VydmljZUV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkV4dGVybmFsU2VydmljZUV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBFeHRlcm5hbFNlcnZpY2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW50ZXJuYWxFcnJvckV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW50ZXJuYWxFcnJvckV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwic2VydmVyXCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkludGVybmFsRXJyb3JFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJzZXJ2ZXJcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJuYWxFcnJvckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbnZhbGlkSWRlbnRpdHlQb29sQ29uZmlndXJhdGlvbkV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSW52YWxpZElkZW50aXR5UG9vbENvbmZpZ3VyYXRpb25FeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJJbnZhbGlkSWRlbnRpdHlQb29sQ29uZmlndXJhdGlvbkV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnZhbGlkSWRlbnRpdHlQb29sQ29uZmlndXJhdGlvbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5vdEF1dGhvcml6ZWRFeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIk5vdEF1dGhvcml6ZWRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJOb3RBdXRob3JpemVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE5vdEF1dGhvcml6ZWRFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDb25mbGljdEV4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiUmVzb3VyY2VDb25mbGljdEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlJlc291cmNlQ29uZmxpY3RFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgUmVzb3VyY2VDb25mbGljdEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvb01hbnlSZXF1ZXN0c0V4Y2VwdGlvbiBleHRlbmRzIF9fQmFzZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFRvb01hbnlSZXF1ZXN0c0V4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaW1pdEV4Y2VlZGVkRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJMaW1pdEV4Y2VlZGVkRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiTGltaXRFeGNlZWRlZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBMaW1pdEV4Y2VlZGVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuIiwgImNvbnN0IF9BSSA9IFwiQWNjb3VudElkXCI7XG5jb25zdCBfQUtJID0gXCJBY2Nlc3NLZXlJZFwiO1xuY29uc3QgX0MgPSBcIkNyZWRlbnRpYWxzXCI7XG5jb25zdCBfQ1JBID0gXCJDdXN0b21Sb2xlQXJuXCI7XG5jb25zdCBfRSA9IFwiRXhwaXJhdGlvblwiO1xuY29uc3QgX0VTRSA9IFwiRXh0ZXJuYWxTZXJ2aWNlRXhjZXB0aW9uXCI7XG5jb25zdCBfR0NGSSA9IFwiR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eVwiO1xuY29uc3QgX0dDRklJID0gXCJHZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5SW5wdXRcIjtcbmNvbnN0IF9HQ0ZJUiA9IFwiR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eVJlc3BvbnNlXCI7XG5jb25zdCBfR0kgPSBcIkdldElkXCI7XG5jb25zdCBfR0lJID0gXCJHZXRJZElucHV0XCI7XG5jb25zdCBfR0lSID0gXCJHZXRJZFJlc3BvbnNlXCI7XG5jb25zdCBfSUVFID0gXCJJbnRlcm5hbEVycm9yRXhjZXB0aW9uXCI7XG5jb25zdCBfSUkgPSBcIklkZW50aXR5SWRcIjtcbmNvbnN0IF9JSVBDRSA9IFwiSW52YWxpZElkZW50aXR5UG9vbENvbmZpZ3VyYXRpb25FeGNlcHRpb25cIjtcbmNvbnN0IF9JUEUgPSBcIkludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb25cIjtcbmNvbnN0IF9JUEkgPSBcIklkZW50aXR5UG9vbElkXCI7XG5jb25zdCBfSVBUID0gXCJJZGVudGl0eVByb3ZpZGVyVG9rZW5cIjtcbmNvbnN0IF9MID0gXCJMb2dpbnNcIjtcbmNvbnN0IF9MRUUgPSBcIkxpbWl0RXhjZWVkZWRFeGNlcHRpb25cIjtcbmNvbnN0IF9MTSA9IFwiTG9naW5zTWFwXCI7XG5jb25zdCBfTkFFID0gXCJOb3RBdXRob3JpemVkRXhjZXB0aW9uXCI7XG5jb25zdCBfUkNFID0gXCJSZXNvdXJjZUNvbmZsaWN0RXhjZXB0aW9uXCI7XG5jb25zdCBfUk5GRSA9IFwiUmVzb3VyY2VOb3RGb3VuZEV4Y2VwdGlvblwiO1xuY29uc3QgX1NLID0gXCJTZWNyZXRLZXlcIjtcbmNvbnN0IF9TS1MgPSBcIlNlY3JldEtleVN0cmluZ1wiO1xuY29uc3QgX1NUID0gXCJTZXNzaW9uVG9rZW5cIjtcbmNvbnN0IF9UTVJFID0gXCJUb29NYW55UmVxdWVzdHNFeGNlcHRpb25cIjtcbmNvbnN0IF9jID0gXCJjbGllbnRcIjtcbmNvbnN0IF9lID0gXCJlcnJvclwiO1xuY29uc3QgX2hFID0gXCJodHRwRXJyb3JcIjtcbmNvbnN0IF9tID0gXCJtZXNzYWdlXCI7XG5jb25zdCBfcyA9IFwic21pdGh5LnRzLnNkay5zeW50aGV0aWMuY29tLmFtYXpvbmF3cy5jb2duaXRvaWRlbnRpdHlcIjtcbmNvbnN0IF9zZSA9IFwic2VydmVyXCI7XG5jb25zdCBuMCA9IFwiY29tLmFtYXpvbmF3cy5jb2duaXRvaWRlbnRpdHlcIjtcbmltcG9ydCB7IFR5cGVSZWdpc3RyeSB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2NoZW1hXCI7XG5pbXBvcnQgeyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9Db2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uXCI7XG5pbXBvcnQgeyBFeHRlcm5hbFNlcnZpY2VFeGNlcHRpb24sIEludGVybmFsRXJyb3JFeGNlcHRpb24sIEludmFsaWRJZGVudGl0eVBvb2xDb25maWd1cmF0aW9uRXhjZXB0aW9uLCBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uLCBMaW1pdEV4Y2VlZGVkRXhjZXB0aW9uLCBOb3RBdXRob3JpemVkRXhjZXB0aW9uLCBSZXNvdXJjZUNvbmZsaWN0RXhjZXB0aW9uLCBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uLCBUb29NYW55UmVxdWVzdHNFeGNlcHRpb24sIH0gZnJvbSBcIi4uL21vZGVscy9lcnJvcnNcIjtcbmNvbnN0IF9zX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihfcyk7XG5leHBvcnQgdmFyIENvZ25pdG9JZGVudGl0eVNlcnZpY2VFeGNlcHRpb24kID0gWy0zLCBfcywgXCJDb2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uXCIsIDAsIFtdLCBbXV07XG5fc19yZWdpc3RyeS5yZWdpc3RlckVycm9yKENvZ25pdG9JZGVudGl0eVNlcnZpY2VFeGNlcHRpb24kLCBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uKTtcbmNvbnN0IG4wX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihuMCk7XG5leHBvcnQgdmFyIEV4dGVybmFsU2VydmljZUV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfRVNFLCB7IFtfZV06IF9jLCBbX2hFXTogNDAwIH0sIFtfbV0sIFswXV07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEV4dGVybmFsU2VydmljZUV4Y2VwdGlvbiQsIEV4dGVybmFsU2VydmljZUV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIEludGVybmFsRXJyb3JFeGNlcHRpb24kID0gWy0zLCBuMCwgX0lFRSwgeyBbX2VdOiBfc2UgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSW50ZXJuYWxFcnJvckV4Y2VwdGlvbiQsIEludGVybmFsRXJyb3JFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJbnZhbGlkSWRlbnRpdHlQb29sQ29uZmlndXJhdGlvbkV4Y2VwdGlvbiQgPSBbXG4gICAgLTMsXG4gICAgbjAsXG4gICAgX0lJUENFLFxuICAgIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX21dLFxuICAgIFswXSxcbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKEludmFsaWRJZGVudGl0eVBvb2xDb25maWd1cmF0aW9uRXhjZXB0aW9uJCwgSW52YWxpZElkZW50aXR5UG9vbENvbmZpZ3VyYXRpb25FeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uJCA9IFstMywgbjAsIF9JUEUsIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiQsIEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBMaW1pdEV4Y2VlZGVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9MRUUsIHsgW19lXTogX2MsIFtfaEVdOiA0MDAgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoTGltaXRFeGNlZWRlZEV4Y2VwdGlvbiQsIExpbWl0RXhjZWVkZWRFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBOb3RBdXRob3JpemVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9OQUUsIHsgW19lXTogX2MsIFtfaEVdOiA0MDMgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoTm90QXV0aG9yaXplZEV4Y2VwdGlvbiQsIE5vdEF1dGhvcml6ZWRFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBSZXNvdXJjZUNvbmZsaWN0RXhjZXB0aW9uJCA9IFstMywgbjAsIF9SQ0UsIHsgW19lXTogX2MsIFtfaEVdOiA0MDkgfSwgW19tXSwgWzBdXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoUmVzb3VyY2VDb25mbGljdEV4Y2VwdGlvbiQsIFJlc291cmNlQ29uZmxpY3RFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uJCA9IFstMywgbjAsIF9STkZFLCB7IFtfZV06IF9jLCBbX2hFXTogNDA0IH0sIFtfbV0sIFswXV07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKFJlc291cmNlTm90Rm91bmRFeGNlcHRpb24kLCBSZXNvdXJjZU5vdEZvdW5kRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgVG9vTWFueVJlcXVlc3RzRXhjZXB0aW9uJCA9IFstMywgbjAsIF9UTVJFLCB7IFtfZV06IF9jLCBbX2hFXTogNDI5IH0sIFtfbV0sIFswXV07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKFRvb01hbnlSZXF1ZXN0c0V4Y2VwdGlvbiQsIFRvb01hbnlSZXF1ZXN0c0V4Y2VwdGlvbik7XG5leHBvcnQgY29uc3QgZXJyb3JUeXBlUmVnaXN0cmllcyA9IFtfc19yZWdpc3RyeSwgbjBfcmVnaXN0cnldO1xudmFyIElkZW50aXR5UHJvdmlkZXJUb2tlbiA9IFswLCBuMCwgX0lQVCwgOCwgMF07XG52YXIgU2VjcmV0S2V5U3RyaW5nID0gWzAsIG4wLCBfU0tTLCA4LCAwXTtcbmV4cG9ydCB2YXIgQ3JlZGVudGlhbHMkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0MsXG4gICAgMCxcbiAgICBbX0FLSSwgX1NLLCBfU1QsIF9FXSxcbiAgICBbMCwgWygpID0+IFNlY3JldEtleVN0cmluZywgMF0sIDAsIDRdLFxuXTtcbmV4cG9ydCB2YXIgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUlucHV0JCA9IFtcbiAgICAzLFxuICAgIG4wLFxuICAgIF9HQ0ZJSSxcbiAgICAwLFxuICAgIFtfSUksIF9MLCBfQ1JBXSxcbiAgICBbMCwgWygpID0+IExvZ2luc01hcCwgMF0sIDBdLFxuICAgIDEsXG5dO1xuZXhwb3J0IHZhciBHZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5UmVzcG9uc2UkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0dDRklSLFxuICAgIDAsXG4gICAgW19JSSwgX0NdLFxuICAgIFswLCBbKCkgPT4gQ3JlZGVudGlhbHMkLCAwXV0sXG5dO1xuZXhwb3J0IHZhciBHZXRJZElucHV0JCA9IFszLCBuMCwgX0dJSSwgMCwgW19JUEksIF9BSSwgX0xdLCBbMCwgMCwgWygpID0+IExvZ2luc01hcCwgMF1dLCAxXTtcbmV4cG9ydCB2YXIgR2V0SWRSZXNwb25zZSQgPSBbMywgbjAsIF9HSVIsIDAsIFtfSUldLCBbMF1dO1xudmFyIExvZ2luc01hcCA9IFsyLCBuMCwgX0xNLCAwLCBbMCwgMF0sIFsoKSA9PiBJZGVudGl0eVByb3ZpZGVyVG9rZW4sIDBdXTtcbmV4cG9ydCB2YXIgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eSQgPSBbXG4gICAgOSxcbiAgICBuMCxcbiAgICBfR0NGSSxcbiAgICAwLFxuICAgICgpID0+IEdldENyZWRlbnRpYWxzRm9ySWRlbnRpdHlJbnB1dCQsXG4gICAgKCkgPT4gR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eVJlc3BvbnNlJCxcbl07XG5leHBvcnQgdmFyIEdldElkJCA9IFs5LCBuMCwgX0dJLCAwLCAoKSA9PiBHZXRJZElucHV0JCwgKCkgPT4gR2V0SWRSZXNwb25zZSRdO1xuIiwgImltcG9ydCB7IEF3c1Nka1NpZ1Y0U2lnbmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBBd3NKc29uMV8xUHJvdG9jb2wgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9wcm90b2NvbHNcIjtcbmltcG9ydCB7IE5vQXV0aFNpZ25lciB9IGZyb20gXCJAc21pdGh5L2NvcmVcIjtcbmltcG9ydCB7IE5vT3BMb2dnZXIgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBwYXJzZVVybCB9IGZyb20gXCJAc21pdGh5L3VybC1wYXJzZXJcIjtcbmltcG9ydCB7IGZyb21CYXNlNjQsIHRvQmFzZTY0IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1iYXNlNjRcIjtcbmltcG9ydCB7IGZyb21VdGY4LCB0b1V0ZjggfSBmcm9tIFwiQHNtaXRoeS91dGlsLXV0ZjhcIjtcbmltcG9ydCB7IGRlZmF1bHRDb2duaXRvSWRlbnRpdHlIdHRwQXV0aFNjaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBkZWZhdWx0RW5kcG9pbnRSZXNvbHZlciB9IGZyb20gXCIuL2VuZHBvaW50L2VuZHBvaW50UmVzb2x2ZXJcIjtcbmltcG9ydCB7IGVycm9yVHlwZVJlZ2lzdHJpZXMgfSBmcm9tIFwiLi9zY2hlbWFzL3NjaGVtYXNfMFwiO1xuZXhwb3J0IGNvbnN0IGdldFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpVmVyc2lvbjogXCIyMDE0LTA2LTMwXCIsXG4gICAgICAgIGJhc2U2NERlY29kZXI6IGNvbmZpZz8uYmFzZTY0RGVjb2RlciA/PyBmcm9tQmFzZTY0LFxuICAgICAgICBiYXNlNjRFbmNvZGVyOiBjb25maWc/LmJhc2U2NEVuY29kZXIgPz8gdG9CYXNlNjQsXG4gICAgICAgIGRpc2FibGVIb3N0UHJlZml4OiBjb25maWc/LmRpc2FibGVIb3N0UHJlZml4ID8/IGZhbHNlLFxuICAgICAgICBlbmRwb2ludFByb3ZpZGVyOiBjb25maWc/LmVuZHBvaW50UHJvdmlkZXIgPz8gZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIsXG4gICAgICAgIGV4dGVuc2lvbnM6IGNvbmZpZz8uZXh0ZW5zaW9ucyA/PyBbXSxcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVQcm92aWRlcjogY29uZmlnPy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyID8/IGRlZmF1bHRDb2duaXRvSWRlbnRpdHlIdHRwQXV0aFNjaGVtZVByb3ZpZGVyLFxuICAgICAgICBodHRwQXV0aFNjaGVtZXM6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVzID8/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwiYXdzLmF1dGgjc2lndjRcIiksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgQXdzU2RrU2lnVjRTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNub0F1dGhcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcInNtaXRoeS5hcGkjbm9BdXRoXCIpIHx8IChhc3luYyAoKSA9PiAoe30pKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBOb0F1dGhTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGxvZ2dlcjogY29uZmlnPy5sb2dnZXIgPz8gbmV3IE5vT3BMb2dnZXIoKSxcbiAgICAgICAgcHJvdG9jb2w6IGNvbmZpZz8ucHJvdG9jb2wgPz8gQXdzSnNvbjFfMVByb3RvY29sLFxuICAgICAgICBwcm90b2NvbFNldHRpbmdzOiBjb25maWc/LnByb3RvY29sU2V0dGluZ3MgPz8ge1xuICAgICAgICAgICAgZGVmYXVsdE5hbWVzcGFjZTogXCJjb20uYW1hem9uYXdzLmNvZ25pdG9pZGVudGl0eVwiLFxuICAgICAgICAgICAgZXJyb3JUeXBlUmVnaXN0cmllcyxcbiAgICAgICAgICAgIHhtbE5hbWVzcGFjZTogXCJodHRwOi8vY29nbml0by1pZGVudGl0eS5hbWF6b25hd3MuY29tL2RvYy8yMDE0LTA2LTMwL1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogXCIyMDE0LTA2LTMwXCIsXG4gICAgICAgICAgICBzZXJ2aWNlVGFyZ2V0OiBcIkFXU0NvZ25pdG9JZGVudGl0eVNlcnZpY2VcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZUlkOiBjb25maWc/LnNlcnZpY2VJZCA/PyBcIkNvZ25pdG8gSWRlbnRpdHlcIixcbiAgICAgICAgdXJsUGFyc2VyOiBjb25maWc/LnVybFBhcnNlciA/PyBwYXJzZVVybCxcbiAgICAgICAgdXRmOERlY29kZXI6IGNvbmZpZz8udXRmOERlY29kZXIgPz8gZnJvbVV0ZjgsXG4gICAgICAgIHV0ZjhFbmNvZGVyOiBjb25maWc/LnV0ZjhFbmNvZGVyID8/IHRvVXRmOCxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgcGFja2FnZUluZm8gZnJvbSBcIi4uLy4uLy4uL3BhY2thZ2UuanNvblwiO1xuaW1wb3J0IHsgZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbiBhcyBhd3NDaGVja1ZlcnNpb24gfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9jbGllbnRcIjtcbmltcG9ydCB7IE5PREVfQVVUSF9TQ0hFTUVfUFJFRkVSRU5DRV9PUFRJT05TIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0VXNlckFnZW50UHJvdmlkZXIsIE5PREVfQVBQX0lEX0NPTkZJR19PUFRJT05TIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXNlci1hZ2VudC1ub2RlXCI7XG5pbXBvcnQgeyBOT0RFX1JFR0lPTl9DT05GSUdfRklMRV9PUFRJT05TLCBOT0RFX1JFR0lPTl9DT05GSUdfT1BUSU9OUywgTk9ERV9VU0VfRFVBTFNUQUNLX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCB9IGZyb20gXCJAc21pdGh5L2NvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgSGFzaCB9IGZyb20gXCJAc21pdGh5L2hhc2gtbm9kZVwiO1xuaW1wb3J0IHsgTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgTk9ERV9SRVRSWV9NT0RFX0NPTkZJR19PUFRJT05TIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1yZXRyeVwiO1xuaW1wb3J0IHsgbG9hZENvbmZpZyBhcyBsb2FkTm9kZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBOb2RlSHR0cEhhbmRsZXIgYXMgUmVxdWVzdEhhbmRsZXIsIHN0cmVhbUNvbGxlY3RvciB9IGZyb20gXCJAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLCBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm9keUxlbmd0aCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYm9keS1sZW5ndGgtbm9kZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3V0aWwtZGVmYXVsdHMtbW9kZS1ub2RlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1JFVFJZX01PREUgfSBmcm9tIFwiQHNtaXRoeS91dGlsLXJldHJ5XCI7XG5pbXBvcnQgeyBnZXRSdW50aW1lQ29uZmlnIGFzIGdldFNoYXJlZFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9ydW50aW1lQ29uZmlnLnNoYXJlZFwiO1xuZXhwb3J0IGNvbnN0IGdldFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbihwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGRlZmF1bHRzTW9kZSA9IHJlc29sdmVEZWZhdWx0c01vZGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnUHJvdmlkZXIgPSAoKSA9PiBkZWZhdWx0c01vZGUoKS50aGVuKGxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUpO1xuICAgIGNvbnN0IGNsaWVudFNoYXJlZFZhbHVlcyA9IGdldFNoYXJlZFJ1bnRpbWVDb25maWcoY29uZmlnKTtcbiAgICBhd3NDaGVja1ZlcnNpb24ocHJvY2Vzcy52ZXJzaW9uKTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICAgIHByb2ZpbGU6IGNvbmZpZz8ucHJvZmlsZSxcbiAgICAgICAgbG9nZ2VyOiBjbGllbnRTaGFyZWRWYWx1ZXMubG9nZ2VyLFxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2xpZW50U2hhcmVkVmFsdWVzLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHJ1bnRpbWU6IFwibm9kZVwiLFxuICAgICAgICBkZWZhdWx0c01vZGUsXG4gICAgICAgIGF1dGhTY2hlbWVQcmVmZXJlbmNlOiBjb25maWc/LmF1dGhTY2hlbWVQcmVmZXJlbmNlID8/IGxvYWROb2RlQ29uZmlnKE5PREVfQVVUSF9TQ0hFTUVfUFJFRkVSRU5DRV9PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICBib2R5TGVuZ3RoQ2hlY2tlcjogY29uZmlnPy5ib2R5TGVuZ3RoQ2hlY2tlciA/PyBjYWxjdWxhdGVCb2R5TGVuZ3RoLFxuICAgICAgICBkZWZhdWx0VXNlckFnZW50UHJvdmlkZXI6IGNvbmZpZz8uZGVmYXVsdFVzZXJBZ2VudFByb3ZpZGVyID8/XG4gICAgICAgICAgICBjcmVhdGVEZWZhdWx0VXNlckFnZW50UHJvdmlkZXIoeyBzZXJ2aWNlSWQ6IGNsaWVudFNoYXJlZFZhbHVlcy5zZXJ2aWNlSWQsIGNsaWVudFZlcnNpb246IHBhY2thZ2VJbmZvLnZlcnNpb24gfSksXG4gICAgICAgIG1heEF0dGVtcHRzOiBjb25maWc/Lm1heEF0dGVtcHRzID8/IGxvYWROb2RlQ29uZmlnKE5PREVfTUFYX0FUVEVNUFRfQ09ORklHX09QVElPTlMsIGNvbmZpZyksXG4gICAgICAgIHJlZ2lvbjogY29uZmlnPy5yZWdpb24gPz9cbiAgICAgICAgICAgIGxvYWROb2RlQ29uZmlnKE5PREVfUkVHSU9OX0NPTkZJR19PUFRJT05TLCB7IC4uLk5PREVfUkVHSU9OX0NPTkZJR19GSUxFX09QVElPTlMsIC4uLmxvYWRlckNvbmZpZyB9KSxcbiAgICAgICAgcmVxdWVzdEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyLmNyZWF0ZShjb25maWc/LnJlcXVlc3RIYW5kbGVyID8/IGRlZmF1bHRDb25maWdQcm92aWRlciksXG4gICAgICAgIHJldHJ5TW9kZTogY29uZmlnPy5yZXRyeU1vZGUgPz9cbiAgICAgICAgICAgIGxvYWROb2RlQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAuLi5OT0RFX1JFVFJZX01PREVfQ09ORklHX09QVElPTlMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogYXN5bmMgKCkgPT4gKGF3YWl0IGRlZmF1bHRDb25maWdQcm92aWRlcigpKS5yZXRyeU1vZGUgfHwgREVGQVVMVF9SRVRSWV9NT0RFLFxuICAgICAgICAgICAgfSwgY29uZmlnKSxcbiAgICAgICAgc2hhMjU2OiBjb25maWc/LnNoYTI1NiA/PyBIYXNoLmJpbmQobnVsbCwgXCJzaGEyNTZcIiksXG4gICAgICAgIHN0cmVhbUNvbGxlY3RvcjogY29uZmlnPy5zdHJlYW1Db2xsZWN0b3IgPz8gc3RyZWFtQ29sbGVjdG9yLFxuICAgICAgICB1c2VEdWFsc3RhY2tFbmRwb2ludDogY29uZmlnPy51c2VEdWFsc3RhY2tFbmRwb2ludCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX1VTRV9EVUFMU1RBQ0tfRU5EUE9JTlRfQ09ORklHX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIHVzZUZpcHNFbmRwb2ludDogY29uZmlnPy51c2VGaXBzRW5kcG9pbnQgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9VU0VfRklQU19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlckFnZW50QXBwSWQ6IGNvbmZpZz8udXNlckFnZW50QXBwSWQgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9BUFBfSURfQ09ORklHX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgfTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IChydW50aW1lQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgX2h0dHBBdXRoU2NoZW1lcyA9IHJ1bnRpbWVDb25maWcuaHR0cEF1dGhTY2hlbWVzO1xuICAgIGxldCBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IHJ1bnRpbWVDb25maWcuaHR0cEF1dGhTY2hlbWVQcm92aWRlcjtcbiAgICBsZXQgX2NyZWRlbnRpYWxzID0gcnVudGltZUNvbmZpZy5jcmVkZW50aWFscztcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRIdHRwQXV0aFNjaGVtZShodHRwQXV0aFNjaGVtZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBfaHR0cEF1dGhTY2hlbWVzLmZpbmRJbmRleCgoc2NoZW1lKSA9PiBzY2hlbWUuc2NoZW1lSWQgPT09IGh0dHBBdXRoU2NoZW1lLnNjaGVtZUlkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnB1c2goaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2h0dHBBdXRoU2NoZW1lcy5zcGxpY2UoaW5kZXgsIDEsIGh0dHBBdXRoU2NoZW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9odHRwQXV0aFNjaGVtZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoaHR0cEF1dGhTY2hlbWVQcm92aWRlcikge1xuICAgICAgICAgICAgX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPSBodHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZVByb3ZpZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgICAgICAgX2NyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGh0dHBBdXRoU2NoZW1lczogY29uZmlnLmh0dHBBdXRoU2NoZW1lcygpLFxuICAgICAgICBodHRwQXV0aFNjaGVtZVByb3ZpZGVyOiBjb25maWcuaHR0cEF1dGhTY2hlbWVQcm92aWRlcigpLFxuICAgICAgICBjcmVkZW50aWFsczogY29uZmlnLmNyZWRlbnRpYWxzKCksXG4gICAgfTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0QXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUF3c1JlZ2lvbkV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIH0gZnJvbSBcIkBhd3Mtc2RrL3JlZ2lvbi1jb25maWctcmVzb2x2ZXJcIjtcbmltcG9ydCB7IGdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUh0dHBIYW5kbGVyUnVudGltZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IGdldERlZmF1bHRFeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvblwiO1xuZXhwb3J0IGNvbnN0IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyA9IChydW50aW1lQ29uZmlnLCBleHRlbnNpb25zKSA9PiB7XG4gICAgY29uc3QgZXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZ2V0QXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZyksIGdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpKTtcbiAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmNvbmZpZ3VyZShleHRlbnNpb25Db25maWd1cmF0aW9uKSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocnVudGltZUNvbmZpZywgcmVzb2x2ZUF3c1JlZ2lvbkV4dGVuc2lvbkNvbmZpZ3VyYXRpb24oZXh0ZW5zaW9uQ29uZmlndXJhdGlvbiksIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyhleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZUh0dHBIYW5kbGVyUnVudGltZUNvbmZpZyhleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyhleHRlbnNpb25Db25maWd1cmF0aW9uKSk7XG59O1xuIiwgImltcG9ydCB7IGdldEhvc3RIZWFkZXJQbHVnaW4sIHJlc29sdmVIb3N0SGVhZGVyQ29uZmlnLCB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLWhvc3QtaGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXJQbHVnaW4gfSBmcm9tIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1sb2dnZXJcIjtcbmltcG9ydCB7IGdldFJlY3Vyc2lvbkRldGVjdGlvblBsdWdpbiB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXJlY3Vyc2lvbi1kZXRlY3Rpb25cIjtcbmltcG9ydCB7IGdldFVzZXJBZ2VudFBsdWdpbiwgcmVzb2x2ZVVzZXJBZ2VudENvbmZpZywgfSBmcm9tIFwiQGF3cy1zZGsvbWlkZGxld2FyZS11c2VyLWFnZW50XCI7XG5pbXBvcnQgeyByZXNvbHZlUmVnaW9uQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI7XG5pbXBvcnQgeyBEZWZhdWx0SWRlbnRpdHlQcm92aWRlckNvbmZpZywgZ2V0SHR0cEF1dGhTY2hlbWVFbmRwb2ludFJ1bGVTZXRQbHVnaW4sIGdldEh0dHBTaWduaW5nUGx1Z2luLCB9IGZyb20gXCJAc21pdGh5L2NvcmVcIjtcbmltcG9ydCB7IGdldFNjaGVtYVNlcmRlUGx1Z2luIH0gZnJvbSBcIkBzbWl0aHkvY29yZS9zY2hlbWFcIjtcbmltcG9ydCB7IGdldENvbnRlbnRMZW5ndGhQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWNvbnRlbnQtbGVuZ3RoXCI7XG5pbXBvcnQgeyByZXNvbHZlRW5kcG9pbnRDb25maWcsIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1lbmRwb2ludFwiO1xuaW1wb3J0IHsgZ2V0UmV0cnlQbHVnaW4sIHJlc29sdmVSZXRyeUNvbmZpZywgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLXJldHJ5XCI7XG5pbXBvcnQgeyBDbGllbnQgYXMgX19DbGllbnQsIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgZGVmYXVsdENvZ25pdG9JZGVudGl0eUh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLCByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcsIH0gZnJvbSBcIi4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzLCB9IGZyb20gXCIuL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgZ2V0UnVudGltZUNvbmZpZyBhcyBfX2dldFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9ydW50aW1lQ29uZmlnXCI7XG5pbXBvcnQgeyByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMgfSBmcm9tIFwiLi9ydW50aW1lRXh0ZW5zaW9uc1wiO1xuZXhwb3J0IHsgX19DbGllbnQgfTtcbmV4cG9ydCBjbGFzcyBDb2duaXRvSWRlbnRpdHlDbGllbnQgZXh0ZW5kcyBfX0NsaWVudCB7XG4gICAgY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKC4uLltjb25maWd1cmF0aW9uXSkge1xuICAgICAgICBjb25zdCBfY29uZmlnXzAgPSBfX2dldFJ1bnRpbWVDb25maWcoY29uZmlndXJhdGlvbiB8fCB7fSk7XG4gICAgICAgIHN1cGVyKF9jb25maWdfMCk7XG4gICAgICAgIHRoaXMuaW5pdENvbmZpZyA9IF9jb25maWdfMDtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18xID0gcmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycyhfY29uZmlnXzApO1xuICAgICAgICBjb25zdCBfY29uZmlnXzIgPSByZXNvbHZlVXNlckFnZW50Q29uZmlnKF9jb25maWdfMSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMyA9IHJlc29sdmVSZXRyeUNvbmZpZyhfY29uZmlnXzIpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzQgPSByZXNvbHZlUmVnaW9uQ29uZmlnKF9jb25maWdfMyk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNSA9IHJlc29sdmVIb3N0SGVhZGVyQ29uZmlnKF9jb25maWdfNCk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNiA9IHJlc29sdmVFbmRwb2ludENvbmZpZyhfY29uZmlnXzUpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzcgPSByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcoX2NvbmZpZ182KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ184ID0gcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zKF9jb25maWdfNywgY29uZmlndXJhdGlvbj8uZXh0ZW5zaW9ucyB8fCBbXSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gX2NvbmZpZ184O1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0U2NoZW1hU2VyZGVQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldFVzZXJBZ2VudFBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0UmV0cnlQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldENvbnRlbnRMZW5ndGhQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEhvc3RIZWFkZXJQbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldExvZ2dlclBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbih0aGlzLmNvbmZpZywge1xuICAgICAgICAgICAgaHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXI6IGRlZmF1bHRDb2duaXRvSWRlbnRpdHlIdHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcixcbiAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXJDb25maWdQcm92aWRlcjogYXN5bmMgKGNvbmZpZykgPT4gbmV3IERlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnKHtcbiAgICAgICAgICAgICAgICBcImF3cy5hdXRoI3NpZ3Y0XCI6IGNvbmZpZy5jcmVkZW50aWFscyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRIdHRwU2lnbmluZ1BsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IGdldEVuZHBvaW50UGx1Z2luIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1lbmRwb2ludFwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGNvbW1vblBhcmFtcyB9IGZyb20gXCIuLi9lbmRwb2ludC9FbmRwb2ludFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEdldENyZWRlbnRpYWxzRm9ySWRlbnRpdHkkIH0gZnJvbSBcIi4uL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgeyAkQ29tbWFuZCB9O1xuZXhwb3J0IGNsYXNzIEdldENyZWRlbnRpYWxzRm9ySWRlbnRpdHlDb21tYW5kIGV4dGVuZHMgJENvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFtnZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU0NvZ25pdG9JZGVudGl0eVNlcnZpY2VcIiwgXCJHZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5XCIsIHt9KVxuICAgIC5uKFwiQ29nbml0b0lkZW50aXR5Q2xpZW50XCIsIFwiR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmRcIilcbiAgICAuc2MoR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eSQpXG4gICAgLmJ1aWxkKCkge1xufVxuIiwgImltcG9ydCB7IGdldEVuZHBvaW50UGx1Z2luIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1lbmRwb2ludFwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGNvbW1vblBhcmFtcyB9IGZyb20gXCIuLi9lbmRwb2ludC9FbmRwb2ludFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEdldElkJCB9IGZyb20gXCIuLi9zY2hlbWFzL3NjaGVtYXNfMFwiO1xuZXhwb3J0IHsgJENvbW1hbmQgfTtcbmV4cG9ydCBjbGFzcyBHZXRJZENvbW1hbmQgZXh0ZW5kcyAkQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChjb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW2dldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQVdTQ29nbml0b0lkZW50aXR5U2VydmljZVwiLCBcIkdldElkXCIsIHt9KVxuICAgIC5uKFwiQ29nbml0b0lkZW50aXR5Q2xpZW50XCIsIFwiR2V0SWRDb21tYW5kXCIpXG4gICAgLnNjKEdldElkJClcbiAgICAuYnVpbGQoKSB7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQWdncmVnYXRlZENsaWVudCB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IENvZ25pdG9JZGVudGl0eUNsaWVudCB9IGZyb20gXCIuL0NvZ25pdG9JZGVudGl0eUNsaWVudFwiO1xuaW1wb3J0IHsgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmQsIH0gZnJvbSBcIi4vY29tbWFuZHMvR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmRcIjtcbmltcG9ydCB7IEdldElkQ29tbWFuZCB9IGZyb20gXCIuL2NvbW1hbmRzL0dldElkQ29tbWFuZFwiO1xuY29uc3QgY29tbWFuZHMgPSB7XG4gICAgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmQsXG4gICAgR2V0SWRDb21tYW5kLFxufTtcbmV4cG9ydCBjbGFzcyBDb2duaXRvSWRlbnRpdHkgZXh0ZW5kcyBDb2duaXRvSWRlbnRpdHlDbGllbnQge1xufVxuY3JlYXRlQWdncmVnYXRlZENsaWVudChjb21tYW5kcywgQ29nbml0b0lkZW50aXR5KTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9HZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5Q29tbWFuZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vR2V0SWRDb21tYW5kXCI7XG4iLCAiZXhwb3J0IHt9O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL0NvZ25pdG9JZGVudGl0eUNsaWVudFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQ29nbml0b0lkZW50aXR5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21tYW5kc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy9zY2hlbWFzXzBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVscy9lcnJvcnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVscy9tb2RlbHNfMFwiO1xuZXhwb3J0IHsgQ29nbml0b0lkZW50aXR5U2VydmljZUV4Y2VwdGlvbiB9IGZyb20gXCIuL21vZGVscy9Db2duaXRvSWRlbnRpdHlTZXJ2aWNlRXhjZXB0aW9uXCI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29nbml0b0lkZW50aXR5ID0gcmVxdWlyZSgnQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvY29nbml0by1pZGVudGl0eScpO1xuXG5cblxuZXhwb3J0cy5Db2duaXRvSWRlbnRpdHlDbGllbnQgPSBjb2duaXRvSWRlbnRpdHkuQ29nbml0b0lkZW50aXR5Q2xpZW50O1xuZXhwb3J0cy5HZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5Q29tbWFuZCA9IGNvZ25pdG9JZGVudGl0eS5HZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5Q29tbWFuZDtcbmV4cG9ydHMuR2V0SWRDb21tYW5kID0gY29nbml0b0lkZW50aXR5LkdldElkQ29tbWFuZDtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBwcm9wZXJ0eVByb3ZpZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlcicpO1xuXG5mdW5jdGlvbiByZXNvbHZlTG9naW5zKGxvZ2lucykge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhsb2dpbnMpLnJlZHVjZSgoYXJyLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuT3JQcm92aWRlciA9IGxvZ2luc1tuYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yUHJvdmlkZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKFtuYW1lLCB0b2tlbk9yUHJvdmlkZXJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRva2VuT3JQcm92aWRlcigpLnRoZW4oKHRva2VuKSA9PiBbbmFtZSwgdG9rZW5dKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSkpLnRoZW4oKHJlc29sdmVkUGFpcnMpID0+IHJlc29sdmVkUGFpcnMucmVkdWNlKChsb2dpbnMsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBsb2dpbnNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbG9naW5zO1xuICAgIH0sIHt9KSk7XG59XG5cbmZ1bmN0aW9uIGZyb21Db2duaXRvSWRlbnRpdHkocGFyYW1ldGVycykge1xuICAgIHJldHVybiBhc3luYyAoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHBhcmFtZXRlcnMubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItY29nbml0by1pZGVudGl0eSAtIGZyb21Db2duaXRvSWRlbnRpdHlcIik7XG4gICAgICAgIGNvbnN0IHsgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmQsIENvZ25pdG9JZGVudGl0eUNsaWVudCB9ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlKCcuL2xvYWRDb2duaXRvSWRlbnRpdHktQy1rUHJMWjQuanMnKTsgfSk7XG4gICAgICAgIGNvbnN0IGZyb21Db25maWdzID0gKHByb3BlcnR5KSA9PiBwYXJhbWV0ZXJzLmNsaWVudENvbmZpZz8uW3Byb3BlcnR5XSA/P1xuICAgICAgICAgICAgcGFyYW1ldGVycy5wYXJlbnRDbGllbnRDb25maWc/Lltwcm9wZXJ0eV0gPz9cbiAgICAgICAgICAgIGF3c0lkZW50aXR5UHJvcGVydGllcz8uY2FsbGVyQ2xpZW50Q29uZmlnPy5bcHJvcGVydHldO1xuICAgICAgICBjb25zdCB7IENyZWRlbnRpYWxzOiB7IEFjY2Vzc0tleUlkID0gdGhyb3dPbk1pc3NpbmdBY2Nlc3NLZXlJZChwYXJhbWV0ZXJzLmxvZ2dlciksIEV4cGlyYXRpb24sIFNlY3JldEtleSA9IHRocm93T25NaXNzaW5nU2VjcmV0S2V5KHBhcmFtZXRlcnMubG9nZ2VyKSwgU2Vzc2lvblRva2VuLCB9ID0gdGhyb3dPbk1pc3NpbmdDcmVkZW50aWFscyhwYXJhbWV0ZXJzLmxvZ2dlciksIH0gPSBhd2FpdCAocGFyYW1ldGVycy5jbGllbnQgPz9cbiAgICAgICAgICAgIG5ldyBDb2duaXRvSWRlbnRpdHlDbGllbnQoT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1ldGVycy5jbGllbnRDb25maWcgPz8ge30sIHtcbiAgICAgICAgICAgICAgICByZWdpb246IGZyb21Db25maWdzKFwicmVnaW9uXCIpLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IGZyb21Db25maWdzKFwicHJvZmlsZVwiKSxcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnRBcHBJZDogZnJvbUNvbmZpZ3MoXCJ1c2VyQWdlbnRBcHBJZFwiKSxcbiAgICAgICAgICAgIH0pKSkuc2VuZChuZXcgR2V0Q3JlZGVudGlhbHNGb3JJZGVudGl0eUNvbW1hbmQoe1xuICAgICAgICAgICAgQ3VzdG9tUm9sZUFybjogcGFyYW1ldGVycy5jdXN0b21Sb2xlQXJuLFxuICAgICAgICAgICAgSWRlbnRpdHlJZDogcGFyYW1ldGVycy5pZGVudGl0eUlkLFxuICAgICAgICAgICAgTG9naW5zOiBwYXJhbWV0ZXJzLmxvZ2lucyA/IGF3YWl0IHJlc29sdmVMb2dpbnMocGFyYW1ldGVycy5sb2dpbnMpIDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZGVudGl0eUlkOiBwYXJhbWV0ZXJzLmlkZW50aXR5SWQsXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogQWNjZXNzS2V5SWQsXG4gICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IFNlY3JldEtleSxcbiAgICAgICAgICAgIHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogRXhwaXJhdGlvbixcbiAgICAgICAgfTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdGhyb3dPbk1pc3NpbmdBY2Nlc3NLZXlJZChsb2dnZXIpIHtcbiAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJSZXNwb25zZSBmcm9tIEFtYXpvbiBDb2duaXRvIGNvbnRhaW5lZCBubyBhY2Nlc3Mga2V5IElEXCIsIHsgbG9nZ2VyIH0pO1xufVxuZnVuY3Rpb24gdGhyb3dPbk1pc3NpbmdDcmVkZW50aWFscyhsb2dnZXIpIHtcbiAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJSZXNwb25zZSBmcm9tIEFtYXpvbiBDb2duaXRvIGNvbnRhaW5lZCBubyBjcmVkZW50aWFsc1wiLCB7IGxvZ2dlciB9KTtcbn1cbmZ1bmN0aW9uIHRocm93T25NaXNzaW5nU2VjcmV0S2V5KGxvZ2dlcikge1xuICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihcIlJlc3BvbnNlIGZyb20gQW1hem9uIENvZ25pdG8gY29udGFpbmVkIG5vIHNlY3JldCBrZXlcIiwgeyBsb2dnZXIgfSk7XG59XG5cbmNvbnN0IFNUT1JFX05BTUUgPSBcIklkZW50aXR5SWRzXCI7XG5jbGFzcyBJbmRleGVkRGJTdG9yYWdlIHtcbiAgICBkYk5hbWU7XG4gICAgY29uc3RydWN0b3IoZGJOYW1lID0gXCJhd3M6Y29nbml0by1pZGVudGl0eS1pZHNcIikge1xuICAgICAgICB0aGlzLmRiTmFtZSA9IGRiTmFtZTtcbiAgICB9XG4gICAgZ2V0SXRlbShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aE9iamVjdFN0b3JlKFwicmVhZG9ubHlcIiwgKHN0b3JlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBzdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0ID8gcmVxLnJlc3VsdC52YWx1ZSA6IG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IG51bGwpO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoT2JqZWN0U3RvcmUoXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBzdG9yZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJdGVtKGlkLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoT2JqZWN0U3RvcmUoXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBzdG9yZS5wdXQoeyBpZCwgdmFsdWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0RGIoKSB7XG4gICAgICAgIGNvbnN0IG9wZW5EYlJlcXVlc3QgPSBzZWxmLmluZGV4ZWREQi5vcGVuKHRoaXMuZGJOYW1lLCAxKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG9wZW5EYlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUob3BlbkRiUmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9wZW5EYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3Qob3BlbkRiUmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3BlbkRiUmVxdWVzdC5vbmJsb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVuYWJsZSB0byBhY2Nlc3MgREJcIikpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9wZW5EYlJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gb3BlbkRiUmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgZGIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IHN0b3JlXCIpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX05BTUUsIHsga2V5UGF0aDogXCJpZFwiIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdpdGhPYmplY3RTdG9yZShtb2RlLCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGIoKS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FLCBtb2RlKTtcbiAgICAgICAgICAgIHR4Lm9uY29tcGxldGUgPSAoKSA9PiBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFjdGlvbih0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKSkpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgSW5NZW1vcnlTdG9yYWdlIHtcbiAgICBzdG9yZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB9XG4gICAgZ2V0SXRlbShrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnN0b3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGtleSkge1xuICAgICAgICBkZWxldGUgdGhpcy5zdG9yZVtrZXldO1xuICAgIH1cbiAgICBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdG9yZVtrZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG5jb25zdCBpbk1lbW9yeVN0b3JhZ2UgPSBuZXcgSW5NZW1vcnlTdG9yYWdlKCk7XG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYuaW5kZXhlZERCKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5kZXhlZERiU3RvcmFnZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgICByZXR1cm4gaW5NZW1vcnlTdG9yYWdlO1xufVxuXG5mdW5jdGlvbiBmcm9tQ29nbml0b0lkZW50aXR5UG9vbCh7IGFjY291bnRJZCwgY2FjaGUgPSBsb2NhbFN0b3JhZ2UoKSwgY2xpZW50LCBjbGllbnRDb25maWcsIGN1c3RvbVJvbGVBcm4sIGlkZW50aXR5UG9vbElkLCBsb2dpbnMsIHVzZXJJZGVudGlmaWVyID0gIWxvZ2lucyB8fCBPYmplY3Qua2V5cyhsb2dpbnMpLmxlbmd0aCA9PT0gMCA/IFwiQU5PTllNT1VTXCIgOiB1bmRlZmluZWQsIGxvZ2dlciwgcGFyZW50Q2xpZW50Q29uZmlnLCB9KSB7XG4gICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItY29nbml0by1pZGVudGl0eSAtIGZyb21Db2duaXRvSWRlbnRpdHlcIik7XG4gICAgY29uc3QgY2FjaGVLZXkgPSB1c2VySWRlbnRpZmllclxuICAgICAgICA/IGBhd3M6Y29nbml0by1pZGVudGl0eS1jcmVkZW50aWFsczoke2lkZW50aXR5UG9vbElkfToke3VzZXJJZGVudGlmaWVyfWBcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgbGV0IHByb3ZpZGVyID0gYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgICAgICBjb25zdCB7IEdldElkQ29tbWFuZCwgQ29nbml0b0lkZW50aXR5Q2xpZW50IH0gPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmUoJy4vbG9hZENvZ25pdG9JZGVudGl0eS1DLWtQckxaNC5qcycpOyB9KTtcbiAgICAgICAgY29uc3QgZnJvbUNvbmZpZ3MgPSAocHJvcGVydHkpID0+IGNsaWVudENvbmZpZz8uW3Byb3BlcnR5XSA/P1xuICAgICAgICAgICAgcGFyZW50Q2xpZW50Q29uZmlnPy5bcHJvcGVydHldID8/XG4gICAgICAgICAgICBhd3NJZGVudGl0eVByb3BlcnRpZXM/LmNhbGxlckNsaWVudENvbmZpZz8uW3Byb3BlcnR5XTtcbiAgICAgICAgY29uc3QgX2NsaWVudCA9IGNsaWVudCA/P1xuICAgICAgICAgICAgbmV3IENvZ25pdG9JZGVudGl0eUNsaWVudChPYmplY3QuYXNzaWduKHt9LCBjbGllbnRDb25maWcgPz8ge30sIHtcbiAgICAgICAgICAgICAgICByZWdpb246IGZyb21Db25maWdzKFwicmVnaW9uXCIpLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IGZyb21Db25maWdzKFwicHJvZmlsZVwiKSxcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnRBcHBJZDogZnJvbUNvbmZpZ3MoXCJ1c2VyQWdlbnRBcHBJZFwiKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbGV0IGlkZW50aXR5SWQgPSAoY2FjaGVLZXkgJiYgKGF3YWl0IGNhY2hlLmdldEl0ZW0oY2FjaGVLZXkpKSk7XG4gICAgICAgIGlmICghaWRlbnRpdHlJZCkge1xuICAgICAgICAgICAgY29uc3QgeyBJZGVudGl0eUlkID0gdGhyb3dPbk1pc3NpbmdJZChsb2dnZXIpIH0gPSBhd2FpdCBfY2xpZW50LnNlbmQobmV3IEdldElkQ29tbWFuZCh7XG4gICAgICAgICAgICAgICAgQWNjb3VudElkOiBhY2NvdW50SWQsXG4gICAgICAgICAgICAgICAgSWRlbnRpdHlQb29sSWQ6IGlkZW50aXR5UG9vbElkLFxuICAgICAgICAgICAgICAgIExvZ2luczogbG9naW5zID8gYXdhaXQgcmVzb2x2ZUxvZ2lucyhsb2dpbnMpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgaWRlbnRpdHlJZCA9IElkZW50aXR5SWQ7XG4gICAgICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoY2FjaGUuc2V0SXRlbShjYWNoZUtleSwgaWRlbnRpdHlJZCkpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvdmlkZXIgPSBmcm9tQ29nbml0b0lkZW50aXR5KHtcbiAgICAgICAgICAgIGNsaWVudDogX2NsaWVudCxcbiAgICAgICAgICAgIGN1c3RvbVJvbGVBcm4sXG4gICAgICAgICAgICBsb2dpbnMsXG4gICAgICAgICAgICBpZGVudGl0eUlkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyKGF3c0lkZW50aXR5UHJvcGVydGllcyk7XG4gICAgfTtcbiAgICByZXR1cm4gKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4gcHJvdmlkZXIoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKS5jYXRjaChhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGNhY2hlLnJlbW92ZUl0ZW0oY2FjaGVLZXkpKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHRocm93T25NaXNzaW5nSWQobG9nZ2VyKSB7XG4gICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiUmVzcG9uc2UgZnJvbSBBbWF6b24gQ29nbml0byBjb250YWluZWQgbm8gaWRlbnRpdHkgSURcIiwgeyBsb2dnZXIgfSk7XG59XG5cbmV4cG9ydHMuZnJvbUNvZ25pdG9JZGVudGl0eSA9IGZyb21Db2duaXRvSWRlbnRpdHk7XG5leHBvcnRzLmZyb21Db2duaXRvSWRlbnRpdHlQb29sID0gZnJvbUNvZ25pdG9JZGVudGl0eVBvb2w7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Db2duaXRvSWRlbnRpdHkgPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX2NvZ25pdG9faWRlbnRpdHlfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWNvZ25pdG8taWRlbnRpdHlcIik7XG5jb25zdCBmcm9tQ29nbml0b0lkZW50aXR5ID0gKG9wdGlvbnMpID0+ICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX2NvZ25pdG9faWRlbnRpdHlfMS5mcm9tQ29nbml0b0lkZW50aXR5KSh7XG4gICAgLi4ub3B0aW9ucyxcbn0pO1xuZXhwb3J0cy5mcm9tQ29nbml0b0lkZW50aXR5ID0gZnJvbUNvZ25pdG9JZGVudGl0eTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUNvZ25pdG9JZGVudGl0eVBvb2wgPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX2NvZ25pdG9faWRlbnRpdHlfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWNvZ25pdG8taWRlbnRpdHlcIik7XG5jb25zdCBmcm9tQ29nbml0b0lkZW50aXR5UG9vbCA9IChvcHRpb25zKSA9PiAoMCwgY3JlZGVudGlhbF9wcm92aWRlcl9jb2duaXRvX2lkZW50aXR5XzEuZnJvbUNvZ25pdG9JZGVudGl0eVBvb2wpKHtcbiAgICAuLi5vcHRpb25zLFxufSk7XG5leHBvcnRzLmZyb21Db2duaXRvSWRlbnRpdHlQb29sID0gZnJvbUNvZ25pdG9JZGVudGl0eVBvb2w7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Db250YWluZXJNZXRhZGF0YSA9IHZvaWQgMDtcbmNvbnN0IGNyZWRlbnRpYWxfcHJvdmlkZXJfaW1kc18xID0gcmVxdWlyZShcIkBzbWl0aHkvY3JlZGVudGlhbC1wcm92aWRlci1pbWRzXCIpO1xuY29uc3QgZnJvbUNvbnRhaW5lck1ldGFkYXRhID0gKGluaXQpID0+IHtcbiAgICBpbml0Py5sb2dnZXI/LmRlYnVnKFwiQHNtaXRoeS9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIiwgXCJmcm9tQ29udGFpbmVyTWV0YWRhdGFcIik7XG4gICAgcmV0dXJuICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX2ltZHNfMS5mcm9tQ29udGFpbmVyTWV0YWRhdGEpKGluaXQpO1xufTtcbmV4cG9ydHMuZnJvbUNvbnRhaW5lck1ldGFkYXRhID0gZnJvbUNvbnRhaW5lck1ldGFkYXRhO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tRW52ID0gdm9pZCAwO1xuY29uc3QgY3JlZGVudGlhbF9wcm92aWRlcl9lbnZfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWVudlwiKTtcbmNvbnN0IGZyb21FbnYgPSAoaW5pdCkgPT4gKDAsIGNyZWRlbnRpYWxfcHJvdmlkZXJfZW52XzEuZnJvbUVudikoaW5pdCk7XG5leHBvcnRzLmZyb21FbnYgPSBmcm9tRW52O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tSW5pID0gdm9pZCAwO1xuY29uc3QgY3JlZGVudGlhbF9wcm92aWRlcl9pbmlfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiKTtcbmNvbnN0IGZyb21JbmkgPSAoaW5pdCA9IHt9KSA9PiAoMCwgY3JlZGVudGlhbF9wcm92aWRlcl9pbmlfMS5mcm9tSW5pKSh7XG4gICAgLi4uaW5pdCxcbn0pO1xuZXhwb3J0cy5mcm9tSW5pID0gZnJvbUluaTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUluc3RhbmNlTWV0YWRhdGEgPSB2b2lkIDA7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiKTtcbmNvbnN0IGNyZWRlbnRpYWxfcHJvdmlkZXJfaW1kc18xID0gcmVxdWlyZShcIkBzbWl0aHkvY3JlZGVudGlhbC1wcm92aWRlci1pbWRzXCIpO1xuY29uc3QgZnJvbUluc3RhbmNlTWV0YWRhdGEgPSAoaW5pdCkgPT4ge1xuICAgIGluaXQ/LmxvZ2dlcj8uZGVidWcoXCJAc21pdGh5L2NyZWRlbnRpYWwtcHJvdmlkZXItaW1kc1wiLCBcImZyb21JbnN0YW5jZU1ldGFkYXRhXCIpO1xuICAgIHJldHVybiBhc3luYyAoKSA9PiAoMCwgY3JlZGVudGlhbF9wcm92aWRlcl9pbWRzXzEuZnJvbUluc3RhbmNlTWV0YWRhdGEpKGluaXQpKCkudGhlbigoY3JlZHMpID0+ICgwLCBjbGllbnRfMS5zZXRDcmVkZW50aWFsRmVhdHVyZSkoY3JlZHMsIFwiQ1JFREVOVElBTFNfSU1EU1wiLCBcIjBcIikpO1xufTtcbmV4cG9ydHMuZnJvbUluc3RhbmNlTWV0YWRhdGEgPSBmcm9tSW5zdGFuY2VNZXRhZGF0YTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUxvZ2luQ3JlZGVudGlhbHMgPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX2xvZ2luXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1sb2dpblwiKTtcbmNvbnN0IGZyb21Mb2dpbkNyZWRlbnRpYWxzID0gKGluaXQpID0+ICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX2xvZ2luXzEuZnJvbUxvZ2luQ3JlZGVudGlhbHMpKHtcbiAgICAuLi5pbml0LFxufSk7XG5leHBvcnRzLmZyb21Mb2dpbkNyZWRlbnRpYWxzID0gZnJvbUxvZ2luQ3JlZGVudGlhbHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Ob2RlUHJvdmlkZXJDaGFpbiA9IHZvaWQgMDtcbmNvbnN0IGNyZWRlbnRpYWxfcHJvdmlkZXJfbm9kZV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItbm9kZVwiKTtcbmNvbnN0IGZyb21Ob2RlUHJvdmlkZXJDaGFpbiA9IChpbml0ID0ge30pID0+ICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX25vZGVfMS5kZWZhdWx0UHJvdmlkZXIpKHtcbiAgICAuLi5pbml0LFxufSk7XG5leHBvcnRzLmZyb21Ob2RlUHJvdmlkZXJDaGFpbiA9IGZyb21Ob2RlUHJvdmlkZXJDaGFpbjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbVByb2Nlc3MgPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX3Byb2Nlc3NfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXByb2Nlc3NcIik7XG5jb25zdCBmcm9tUHJvY2VzcyA9IChpbml0KSA9PiAoMCwgY3JlZGVudGlhbF9wcm92aWRlcl9wcm9jZXNzXzEuZnJvbVByb2Nlc3MpKGluaXQpO1xuZXhwb3J0cy5mcm9tUHJvY2VzcyA9IGZyb21Qcm9jZXNzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tU1NPID0gdm9pZCAwO1xuY29uc3QgY3JlZGVudGlhbF9wcm92aWRlcl9zc29fMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXNzb1wiKTtcbmNvbnN0IGZyb21TU08gPSAoaW5pdCA9IHt9KSA9PiB7XG4gICAgcmV0dXJuICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX3Nzb18xLmZyb21TU08pKHsgLi4uaW5pdCB9KTtcbn07XG5leHBvcnRzLmZyb21TU08gPSBmcm9tU1NPO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TVFNDbGllbnQgPSBleHBvcnRzLkFzc3VtZVJvbGVDb21tYW5kID0gdm9pZCAwO1xuY29uc3Qgc3RzXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvc3RzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXNzdW1lUm9sZUNvbW1hbmRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0c18xLkFzc3VtZVJvbGVDb21tYW5kOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU1RTQ2xpZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHNfMS5TVFNDbGllbnQ7IH0gfSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzID0gdm9pZCAwO1xuY29uc3QgY29yZV8xID0gcmVxdWlyZShcIkBzbWl0aHkvY29yZVwiKTtcbmNvbnN0IHByb3BlcnR5X3Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiKTtcbmNvbnN0IEFTU1VNRV9ST0xFX0RFRkFVTFRfUkVHSU9OID0gXCJ1cy1lYXN0LTFcIjtcbmNvbnN0IGZyb21UZW1wb3JhcnlDcmVkZW50aWFscyA9IChvcHRpb25zLCBjcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyLCByZWdpb25Qcm92aWRlcikgPT4ge1xuICAgIGxldCBzdHNDbGllbnQ7XG4gICAgcmV0dXJuIGFzeW5jIChhd3NJZGVudGl0eVByb3BlcnRpZXMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNhbGxlckNsaWVudENvbmZpZyB9ID0gYXdzSWRlbnRpdHlQcm9wZXJ0aWVzO1xuICAgICAgICBjb25zdCBwcm9maWxlID0gb3B0aW9ucy5jbGllbnRDb25maWc/LnByb2ZpbGUgPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5wcm9maWxlO1xuICAgICAgICBjb25zdCBsb2dnZXIgPSBvcHRpb25zLmxvZ2dlciA/PyBjYWxsZXJDbGllbnRDb25maWc/LmxvZ2dlcjtcbiAgICAgICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXJzIC0gZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzIChTVFMpXCIpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IC4uLm9wdGlvbnMucGFyYW1zLCBSb2xlU2Vzc2lvbk5hbWU6IG9wdGlvbnMucGFyYW1zLlJvbGVTZXNzaW9uTmFtZSA/PyBcImF3cy1zZGstanMtXCIgKyBEYXRlLm5vdygpIH07XG4gICAgICAgIGlmIChwYXJhbXM/LlNlcmlhbE51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm1mYUNvZGVQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eV9wcm92aWRlcl8xLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgVGVtcG9yYXJ5IGNyZWRlbnRpYWwgcmVxdWlyZXMgbXVsdGktZmFjdG9yIGF1dGhlbnRpY2F0aW9uLCBidXQgbm8gTUZBIGNvZGUgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLmAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5TmV4dExpbms6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbXMuVG9rZW5Db2RlID0gYXdhaXQgb3B0aW9ucy5tZmFDb2RlUHJvdmlkZXIocGFyYW1zPy5TZXJpYWxOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgQXNzdW1lUm9sZUNvbW1hbmQsIFNUU0NsaWVudCB9ID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbG9hZFN0c1wiKSkpO1xuICAgICAgICBpZiAoIXN0c0NsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENyZWRlbnRpYWxzT3JFcnJvciA9IHR5cGVvZiBjcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyID09PSBcImZ1bmN0aW9uXCIgPyBjcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFsU291cmNlcyA9IFtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hc3RlckNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2xpZW50Q29uZmlnPy5jcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICB2b2lkIGNhbGxlckNsaWVudENvbmZpZz8uY3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgY2FsbGVyQ2xpZW50Q29uZmlnPy5jcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyPy4oKSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q3JlZGVudGlhbHNPckVycm9yLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGxldCBjcmVkZW50aWFsU291cmNlID0gXCJTVFMgY2xpZW50IGRlZmF1bHQgY3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIGlmIChjcmVkZW50aWFsU291cmNlc1swXSkge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxTb3VyY2UgPSBcIm9wdGlvbnMubWFzdGVyQ3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNyZWRlbnRpYWxTb3VyY2VzWzFdKSB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbFNvdXJjZSA9IFwib3B0aW9ucy5jbGllbnRDb25maWcuY3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNyZWRlbnRpYWxTb3VyY2VzWzJdKSB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbFNvdXJjZSA9IFwiY2FsbGVyIGNsaWVudCdzIGNyZWRlbnRpYWxzXCI7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzIHJlY3Vyc2lvbiBpbiBjYWxsZXJDbGllbnRDb25maWcuY3JlZGVudGlhbHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjcmVkZW50aWFsU291cmNlc1szXSkge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxTb3VyY2UgPSBcImNhbGxlciBjbGllbnQncyBjcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjcmVkZW50aWFsU291cmNlc1s0XSkge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxTb3VyY2UgPSBcIkFXUyBTREsgZGVmYXVsdCBjcmVkZW50aWFsc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVnaW9uU291cmNlcyA9IFtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNsaWVudENvbmZpZz8ucmVnaW9uLFxuICAgICAgICAgICAgICAgIGNhbGxlckNsaWVudENvbmZpZz8ucmVnaW9uLFxuICAgICAgICAgICAgICAgIGF3YWl0IHJlZ2lvblByb3ZpZGVyPy4oe1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIEFTU1VNRV9ST0xFX0RFRkFVTFRfUkVHSU9OLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGxldCByZWdpb25Tb3VyY2UgPSBcImRlZmF1bHQgcGFydGl0aW9uJ3MgZGVmYXVsdCByZWdpb25cIjtcbiAgICAgICAgICAgIGlmIChyZWdpb25Tb3VyY2VzWzBdKSB7XG4gICAgICAgICAgICAgICAgcmVnaW9uU291cmNlID0gXCJvcHRpb25zLmNsaWVudENvbmZpZy5yZWdpb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2lvblNvdXJjZXNbMV0pIHtcbiAgICAgICAgICAgICAgICByZWdpb25Tb3VyY2UgPSBcImNhbGxlciBjbGllbnQncyByZWdpb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2lvblNvdXJjZXNbMl0pIHtcbiAgICAgICAgICAgICAgICByZWdpb25Tb3VyY2UgPSBcImZpbGUgb3IgZW52IHJlZ2lvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEhhbmRsZXJTb3VyY2VzID0gW1xuICAgICAgICAgICAgICAgIGZpbHRlclJlcXVlc3RIYW5kbGVyKG9wdGlvbnMuY2xpZW50Q29uZmlnPy5yZXF1ZXN0SGFuZGxlciksXG4gICAgICAgICAgICAgICAgZmlsdGVyUmVxdWVzdEhhbmRsZXIoY2FsbGVyQ2xpZW50Q29uZmlnPy5yZXF1ZXN0SGFuZGxlciksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3RIYW5kbGVyU291cmNlID0gXCJTVFMgZGVmYXVsdCByZXF1ZXN0SGFuZGxlclwiO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RIYW5kbGVyU291cmNlc1swXSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyU291cmNlID0gXCJvcHRpb25zLmNsaWVudENvbmZpZy5yZXF1ZXN0SGFuZGxlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdEhhbmRsZXJTb3VyY2VzWzFdKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXJTb3VyY2UgPSBcImNhbGxlciBjbGllbnQncyByZXF1ZXN0SGFuZGxlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyPy5kZWJ1Zz8uKGBAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycyAtIGZyb21UZW1wb3JhcnlDcmVkZW50aWFscyBTVFMgY2xpZW50IGluaXQgd2l0aCBgICtcbiAgICAgICAgICAgICAgICBgJHtyZWdpb25Tb3VyY2V9PSR7YXdhaXQgKDAsIGNvcmVfMS5ub3JtYWxpemVQcm92aWRlcikoY29hbGVzY2UocmVnaW9uU291cmNlcykpKCl9LCAke2NyZWRlbnRpYWxTb3VyY2V9LCAke3JlcXVlc3RIYW5kbGVyU291cmNlfS5gKTtcbiAgICAgICAgICAgIHN0c0NsaWVudCA9IG5ldyBTVFNDbGllbnQoe1xuICAgICAgICAgICAgICAgIHVzZXJBZ2VudEFwcElkOiBjYWxsZXJDbGllbnRDb25maWc/LnVzZXJBZ2VudEFwcElkLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuY2xpZW50Q29uZmlnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBjb2FsZXNjZShjcmVkZW50aWFsU291cmNlcyksXG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiBjb2FsZXNjZShyZWdpb25Tb3VyY2VzKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGFuZGxlcjogY29hbGVzY2UocmVxdWVzdEhhbmRsZXJTb3VyY2VzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNsaWVudFBsdWdpbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIG9wdGlvbnMuY2xpZW50UGx1Z2lucykge1xuICAgICAgICAgICAgICAgIHN0c0NsaWVudC5taWRkbGV3YXJlU3RhY2sudXNlKHBsdWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBDcmVkZW50aWFscyB9ID0gYXdhaXQgc3RzQ2xpZW50LnNlbmQobmV3IEFzc3VtZVJvbGVDb21tYW5kKHBhcmFtcykpO1xuICAgICAgICBpZiAoIUNyZWRlbnRpYWxzIHx8ICFDcmVkZW50aWFscy5BY2Nlc3NLZXlJZCB8fCAhQ3JlZGVudGlhbHMuU2VjcmV0QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlfcHJvdmlkZXJfMS5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgZnJvbSBTVFMuYXNzdW1lUm9sZSBjYWxsIHdpdGggcm9sZSAke3BhcmFtcy5Sb2xlQXJufWAsIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IENyZWRlbnRpYWxzLkFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBDcmVkZW50aWFscy5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IENyZWRlbnRpYWxzLlNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246IENyZWRlbnRpYWxzLkV4cGlyYXRpb24sXG4gICAgICAgICAgICBjcmVkZW50aWFsU2NvcGU6IENyZWRlbnRpYWxzLkNyZWRlbnRpYWxTY29wZSxcbiAgICAgICAgfTtcbiAgICB9O1xufTtcbmV4cG9ydHMuZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzID0gZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzO1xuY29uc3QgZmlsdGVyUmVxdWVzdEhhbmRsZXIgPSAocmVxdWVzdEhhbmRsZXIpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXI/Lm1ldGFkYXRhPy5oYW5kbGVyUHJvdG9jb2wgPT09IFwiaDJcIiA/IHVuZGVmaW5lZCA6IHJlcXVlc3RIYW5kbGVyO1xufTtcbmNvbnN0IGNvYWxlc2NlID0gKGFyZ3MpID0+IHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuICAgICAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21UZW1wb3JhcnlDcmVkZW50aWFscyA9IHZvaWQgMDtcbmNvbnN0IGNvbmZpZ19yZXNvbHZlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCIpO1xuY29uc3Qgbm9kZV9jb25maWdfcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyXCIpO1xuY29uc3QgZnJvbU5vZGVQcm92aWRlckNoYWluXzEgPSByZXF1aXJlKFwiLi9mcm9tTm9kZVByb3ZpZGVyQ2hhaW5cIik7XG5jb25zdCBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHNfYmFzZV8xID0gcmVxdWlyZShcIi4vZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzLmJhc2VcIik7XG5jb25zdCBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiAoMCwgZnJvbVRlbXBvcmFyeUNyZWRlbnRpYWxzX2Jhc2VfMS5mcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMpKG9wdGlvbnMsIGZyb21Ob2RlUHJvdmlkZXJDaGFpbl8xLmZyb21Ob2RlUHJvdmlkZXJDaGFpbiwgYXN5bmMgKHsgcHJvZmlsZSA9IHByb2Nlc3MuZW52LkFXU19QUk9GSUxFIH0pID0+ICgwLCBub2RlX2NvbmZpZ19wcm92aWRlcl8xLmxvYWRDb25maWcpKHtcbiAgICAgICAgZW52aXJvbm1lbnRWYXJpYWJsZVNlbGVjdG9yOiAoZW52KSA9PiBlbnYuQVdTX1JFR0lPTixcbiAgICAgICAgY29uZmlnRmlsZVNlbGVjdG9yOiAocHJvZmlsZURhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9maWxlRGF0YS5yZWdpb247XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHVuZGVmaW5lZCxcbiAgICB9LCB7IC4uLmNvbmZpZ19yZXNvbHZlcl8xLk5PREVfUkVHSU9OX0NPTkZJR19GSUxFX09QVElPTlMsIHByb2ZpbGUgfSkoKSk7XG59O1xuZXhwb3J0cy5mcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHMgPSBmcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Ub2tlbkZpbGUgPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX3dlYl9pZGVudGl0eV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5XCIpO1xuY29uc3QgZnJvbVRva2VuRmlsZSA9IChpbml0ID0ge30pID0+ICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX3dlYl9pZGVudGl0eV8xLmZyb21Ub2tlbkZpbGUpKHtcbiAgICAuLi5pbml0LFxufSk7XG5leHBvcnRzLmZyb21Ub2tlbkZpbGUgPSBmcm9tVG9rZW5GaWxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tV2ViVG9rZW4gPSB2b2lkIDA7XG5jb25zdCBjcmVkZW50aWFsX3Byb3ZpZGVyX3dlYl9pZGVudGl0eV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5XCIpO1xuY29uc3QgZnJvbVdlYlRva2VuID0gKGluaXQpID0+ICgwLCBjcmVkZW50aWFsX3Byb3ZpZGVyX3dlYl9pZGVudGl0eV8xLmZyb21XZWJUb2tlbikoe1xuICAgIC4uLmluaXQsXG59KTtcbmV4cG9ydHMuZnJvbVdlYlRva2VuID0gZnJvbVdlYlRva2VuO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tSHR0cCA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGVDcmVkZW50aWFsQ2hhaW5cIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbUNvZ25pdG9JZGVudGl0eVwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tQ29nbml0b0lkZW50aXR5UG9vbFwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tQ29udGFpbmVyTWV0YWRhdGFcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbUVudlwiKSwgZXhwb3J0cyk7XG52YXIgY3JlZGVudGlhbF9wcm92aWRlcl9odHRwXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbUh0dHBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWRlbnRpYWxfcHJvdmlkZXJfaHR0cF8xLmZyb21IdHRwOyB9IH0pO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbUluaVwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tSW5zdGFuY2VNZXRhZGF0YVwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tTG9naW5DcmVkZW50aWFsc1wiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tTm9kZVByb3ZpZGVyQ2hhaW5cIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbVByb2Nlc3NcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbVNTT1wiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tVGVtcG9yYXJ5Q3JlZGVudGlhbHNcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZnJvbVRva2VuRmlsZVwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mcm9tV2ViVG9rZW5cIiksIGV4cG9ydHMpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7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QUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGVBQWU7QUFDdkIsUUFBTSxxQ0FBcUM7QUFDM0MsUUFBTSxlQUFlLENBQUMsVUFBVSxHQUFHLG1DQUFtQyxjQUFjO0FBQUEsTUFDaEYsR0FBRztBQUFBLElBQ1AsQ0FBQztBQUNELFlBQVEsZUFBZTtBQUFBO0FBQUE7OztBQ1B2QixJQUFBQyxxQkFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsV0FBVztBQUNuQixRQUFNLFVBQVU7QUFDaEIsWUFBUSxhQUFhLGlDQUFvQyxPQUFPO0FBQ2hFLFlBQVEsYUFBYSwrQkFBa0MsT0FBTztBQUM5RCxZQUFRLGFBQWEsbUNBQXNDLE9BQU87QUFDbEUsWUFBUSxhQUFhLGlDQUFvQyxPQUFPO0FBQ2hFLFlBQVEsYUFBYSxtQkFBc0IsT0FBTztBQUNsRCxRQUFJLDZCQUE2QjtBQUNqQyxXQUFPLGVBQWUsU0FBUyxZQUFZLEVBQUUsWUFBWSxNQUFNLEtBQUssV0FBWTtBQUFFLGFBQU8sMkJBQTJCO0FBQUEsSUFBVSxFQUFFLENBQUM7QUFDakksWUFBUSxhQUFhLG1CQUFzQixPQUFPO0FBQ2xELFlBQVEsYUFBYSxnQ0FBbUMsT0FBTztBQUMvRCxZQUFRLGFBQWEsZ0NBQW1DLE9BQU87QUFDL0QsWUFBUSxhQUFhLGlDQUFvQyxPQUFPO0FBQ2hFLFlBQVEsYUFBYSx1QkFBMEIsT0FBTztBQUN0RCxZQUFRLGFBQWEsbUJBQXNCLE9BQU87QUFDbEQsWUFBUSxhQUFhLG9DQUF1QyxPQUFPO0FBQ25FLFlBQVEsYUFBYSx5QkFBNEIsT0FBTztBQUN4RCxZQUFRLGFBQWEsd0JBQTJCLE9BQU87QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdXRpbF9lbmRwb2ludHMiLCAiX19TZXJ2aWNlRXhjZXB0aW9uIiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImdldFJ1bnRpbWVDb25maWciLCAibG9hZE5vZGVDb25maWciLCAiUmVxdWVzdEhhbmRsZXIiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiaW1wb3J0X2NvbmZpZ19yZXNvbHZlciIsICJpbXBvcnRfbWlkZGxld2FyZV9yZXRyeSIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJfX0NsaWVudCIsICJnZXRSdW50aW1lQ29uZmlnIiwgImltcG9ydF9taWRkbGV3YXJlX2VuZHBvaW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgIiRDb21tYW5kIiwgIm8iLCAiaW1wb3J0X21pZGRsZXdhcmVfZW5kcG9pbnQiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiJENvbW1hbmQiLCAibyIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJfX0NsaWVudCIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgImxvZ2lucyIsICJHZXRDcmVkZW50aWFsc0ZvcklkZW50aXR5Q29tbWFuZCIsICJDb2duaXRvSWRlbnRpdHlDbGllbnQiLCAiY2FjaGUiLCAiR2V0SWRDb21tYW5kIiwgIm8iLCAibSIsICJrIiwgImsyIiwgInYiLCAiaSIsICJyZXF1aXJlX2Rpc3RfY2pzIl0KfQo=
