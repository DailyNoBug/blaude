#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_package,
  package_default
} from "./chunk-OGEI6JO6.mjs";
import {
  AwsQueryProtocol,
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
} from "./chunk-2IEENXIQ.mjs";
import {
  DefaultIdentityProviderConfig,
  NoAuthSigner,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-EZHETOM7.mjs";
import {
  require_dist_cjs as require_dist_cjs8
} from "./chunk-RR3PN36J.mjs";
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
  emitWarningIfUnsupportedVersion,
  init_client,
  setCredentialFeature
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-FONUB5ET.mjs";
import {
  require_dist_cjs3 as require_dist_cjs5
} from "./chunk-HJNATCD3.mjs";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
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
var import_util_middleware, defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes();
    import_util_middleware = __toESM(require_dist_cjs7());
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    resolveStsAuthConfig = (input) => Object.assign(input, {
      stsClientCtor: STSClient
    });
    resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return Object.assign(config_1, {
        authSchemePreference: (0, import_util_middleware.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    };
    commonParams = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js
var F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js"() {
    F = "required";
    G = "type";
    H = "fn";
    I = "argv";
    J = "ref";
    a = false;
    b = true;
    c = "booleanEquals";
    d = "stringEquals";
    e = "sigv4";
    f = "sts";
    g = "us-east-1";
    h = "endpoint";
    i = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    j = "tree";
    k = "error";
    l = "getAttr";
    m = { [F]: false, [G]: "string" };
    n = { [F]: true, default: false, [G]: "boolean" };
    o = { [J]: "Endpoint" };
    p = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    q = { [J]: "Region" };
    r = { [H]: "aws.partition", [I]: [q], assign: "PartitionResult" };
    s = { [J]: "UseFIPS" };
    t = { [J]: "UseDualStack" };
    u = {
      url: "https://sts.amazonaws.com",
      properties: { authSchemes: [{ name: e, signingName: f, signingRegion: g }] },
      headers: {}
    };
    v = {};
    w = { conditions: [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h };
    x = { [H]: c, [I]: [s, true] };
    y = { [H]: c, [I]: [t, true] };
    z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    A = { [J]: "PartitionResult" };
    B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] };
    C = [{ [H]: "isSet", [I]: [o] }];
    D = [x];
    E = [y];
    _data = {
      version: "1.0",
      parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n },
      rules: [
        {
          conditions: [
            { [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] },
            { [H]: "not", [I]: C },
            p,
            r,
            { [H]: c, [I]: [s, a] },
            { [H]: c, [I]: [t, a] }
          ],
          rules: [
            { conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h },
            w,
            { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h },
            { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h },
            {
              endpoint: {
                url: i,
                properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] },
                headers: v
              },
              [G]: h
            }
          ],
          [G]: j
        },
        {
          conditions: C,
          rules: [
            { conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k },
            { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k },
            { endpoint: { url: o, properties: v, headers: v }, [G]: h }
          ],
          [G]: j
        },
        {
          conditions: [p],
          rules: [
            {
              conditions: [r],
              rules: [
                {
                  conditions: [x, y],
                  rules: [
                    {
                      conditions: [{ [H]: c, [I]: [b, z] }, B],
                      rules: [
                        {
                          endpoint: {
                            url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: v,
                            headers: v
                          },
                          [G]: h
                        }
                      ],
                      [G]: j
                    },
                    { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }
                  ],
                  [G]: j
                },
                {
                  conditions: D,
                  rules: [
                    {
                      conditions: [{ [H]: c, [I]: [z, b] }],
                      rules: [
                        {
                          conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }],
                          endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v },
                          [G]: h
                        },
                        {
                          endpoint: {
                            url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                            properties: v,
                            headers: v
                          },
                          [G]: h
                        }
                      ],
                      [G]: j
                    },
                    { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }
                  ],
                  [G]: j
                },
                {
                  conditions: E,
                  rules: [
                    {
                      conditions: [B],
                      rules: [
                        {
                          endpoint: {
                            url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                            properties: v,
                            headers: v
                          },
                          [G]: h
                        }
                      ],
                      [G]: j
                    },
                    { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }
                  ],
                  [G]: j
                },
                w,
                { endpoint: { url: i, properties: v, headers: v }, [G]: h }
              ],
              [G]: j
            }
          ],
          [G]: j
        },
        { error: "Invalid Configuration: Missing Region", [G]: k }
      ]
    };
    ruleSet = _data;
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs13());
    import_util_endpoints2 = __toESM(require_dist_cjs12());
    init_ruleset();
    cache = new import_util_endpoints2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js
var import_smithy_client, STSServiceException;
var init_STSServiceException = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js"() {
    import_smithy_client = __toESM(require_dist_cjs8());
    STSServiceException = class _STSServiceException extends import_smithy_client.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js
var ExpiredTokenException, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, IDPCommunicationErrorException;
var init_errors = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js"() {
    init_STSServiceException();
    ExpiredTokenException = class _ExpiredTokenException extends STSServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js
var _A, _AKI, _AR, _ARI, _ARR, _ARRs, _ARU, _ARWWI, _ARWWIR, _ARWWIRs, _Au, _C, _CA, _DS, _E, _EI, _ETE, _IDPCEE, _IDPRCE, _IITE, _K, _MPDE, _P, _PA, _PAr, _PC, _PCLT, _PCr, _PDT, _PI, _PPS, _PPTLE, _Pr, _RA, _RDE, _RSN, _SAK, _SFWIT, _SI, _SN, _ST, _T, _TC, _TTK, _Ta, _V, _WIT, _a, _aKST, _aQE, _c, _cTT, _e, _hE, _m, _pDLT, _s, _tLT, n0, _s_registry, STSServiceException$, n0_registry, ExpiredTokenException$, IDPCommunicationErrorException$, IDPRejectedClaimException$, InvalidIdentityTokenException$, MalformedPolicyDocumentException$, PackedPolicyTooLargeException$, RegionDisabledException$, errorTypeRegistries, accessKeySecretType, clientTokenType, AssumedRoleUser$, AssumeRoleRequest$, AssumeRoleResponse$, AssumeRoleWithWebIdentityRequest$, AssumeRoleWithWebIdentityResponse$, Credentials$, PolicyDescriptorType$, ProvidedContext$, Tag$, policyDescriptorListType, ProvidedContextsListType, tagKeyListType, tagListType, AssumeRole$, AssumeRoleWithWebIdentity$;
var init_schemas_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js"() {
    init_schema();
    init_errors();
    init_STSServiceException();
    _A = "Arn";
    _AKI = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARR = "AssumeRoleRequest";
    _ARRs = "AssumeRoleResponse";
    _ARU = "AssumedRoleUser";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _ARWWIR = "AssumeRoleWithWebIdentityRequest";
    _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
    _Au = "Audience";
    _C = "Credentials";
    _CA = "ContextAssertion";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _ETE = "ExpiredTokenException";
    _IDPCEE = "IDPCommunicationErrorException";
    _IDPRCE = "IDPRejectedClaimException";
    _IITE = "InvalidIdentityTokenException";
    _K = "Key";
    _MPDE = "MalformedPolicyDocumentException";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "ProviderArn";
    _PC = "ProvidedContexts";
    _PCLT = "ProvidedContextsListType";
    _PCr = "ProvidedContext";
    _PDT = "PolicyDescriptorType";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _PPTLE = "PackedPolicyTooLargeException";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RDE = "RegionDisabledException";
    _RSN = "RoleSessionName";
    _SAK = "SecretAccessKey";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _Ta = "Tag";
    _V = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _aKST = "accessKeySecretType";
    _aQE = "awsQueryError";
    _c = "client";
    _cTT = "clientTokenType";
    _e = "error";
    _hE = "httpError";
    _m = "message";
    _pDLT = "policyDescriptorListType";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
    _tLT = "tagListType";
    n0 = "com.amazonaws.sts";
    _s_registry = TypeRegistry.for(_s);
    STSServiceException$ = [-3, _s, "STSServiceException", 0, [], []];
    _s_registry.registerError(STSServiceException$, STSServiceException);
    n0_registry = TypeRegistry.for(n0);
    ExpiredTokenException$ = [
      -3,
      n0,
      _ETE,
      { [_aQE]: [`ExpiredTokenException`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(ExpiredTokenException$, ExpiredTokenException);
    IDPCommunicationErrorException$ = [
      -3,
      n0,
      _IDPCEE,
      { [_aQE]: [`IDPCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(IDPCommunicationErrorException$, IDPCommunicationErrorException);
    IDPRejectedClaimException$ = [
      -3,
      n0,
      _IDPRCE,
      { [_aQE]: [`IDPRejectedClaim`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(IDPRejectedClaimException$, IDPRejectedClaimException);
    InvalidIdentityTokenException$ = [
      -3,
      n0,
      _IITE,
      { [_aQE]: [`InvalidIdentityToken`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(InvalidIdentityTokenException$, InvalidIdentityTokenException);
    MalformedPolicyDocumentException$ = [
      -3,
      n0,
      _MPDE,
      { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(MalformedPolicyDocumentException$, MalformedPolicyDocumentException);
    PackedPolicyTooLargeException$ = [
      -3,
      n0,
      _PPTLE,
      { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(PackedPolicyTooLargeException$, PackedPolicyTooLargeException);
    RegionDisabledException$ = [
      -3,
      n0,
      _RDE,
      { [_aQE]: [`RegionDisabledException`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(RegionDisabledException$, RegionDisabledException);
    errorTypeRegistries = [_s_registry, n0_registry];
    accessKeySecretType = [0, n0, _aKST, 8, 0];
    clientTokenType = [0, n0, _cTT, 8, 0];
    AssumedRoleUser$ = [3, n0, _ARU, 0, [_ARI, _A], [0, 0], 2];
    AssumeRoleRequest$ = [
      3,
      n0,
      _ARR,
      0,
      [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
      [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
      2
    ];
    AssumeRoleResponse$ = [
      3,
      n0,
      _ARRs,
      0,
      [_C, _ARU, _PPS, _SI],
      [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0]
    ];
    AssumeRoleWithWebIdentityRequest$ = [
      3,
      n0,
      _ARWWIR,
      0,
      [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
      [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
      3
    ];
    AssumeRoleWithWebIdentityResponse$ = [
      3,
      n0,
      _ARWWIRs,
      0,
      [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
      [[() => Credentials$, 0], 0, () => AssumedRoleUser$, 1, 0, 0, 0]
    ];
    Credentials$ = [
      3,
      n0,
      _C,
      0,
      [_AKI, _SAK, _ST, _E],
      [0, [() => accessKeySecretType, 0], 0, 4],
      4
    ];
    PolicyDescriptorType$ = [3, n0, _PDT, 0, [_a], [0]];
    ProvidedContext$ = [3, n0, _PCr, 0, [_PAr, _CA], [0, 0]];
    Tag$ = [3, n0, _Ta, 0, [_K, _V], [0, 0], 2];
    policyDescriptorListType = [1, n0, _pDLT, 0, () => PolicyDescriptorType$];
    ProvidedContextsListType = [1, n0, _PCLT, 0, () => ProvidedContext$];
    tagKeyListType = 64 | 0;
    tagListType = [1, n0, _tLT, 0, () => Tag$];
    AssumeRole$ = [9, n0, _AR, 0, () => AssumeRoleRequest$, () => AssumeRoleResponse$];
    AssumeRoleWithWebIdentity$ = [
      9,
      n0,
      _ARWWI,
      0,
      () => AssumeRoleWithWebIdentityRequest$,
      () => AssumeRoleWithWebIdentityResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js
var import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js"() {
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
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
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
        protocol: config?.protocol ?? AwsQueryProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sts",
          errorTypeRegistries,
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15",
          serviceTarget: "AWSSecurityTokenServiceV20110615"
        },
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js"() {
    init_package();
    init_client();
    init_httpAuthSchemes();
    import_util_user_agent_node = __toESM(require_dist_cjs20());
    import_config_resolver = __toESM(require_dist_cjs16());
    init_dist_es();
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
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js"() {
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, STSClient;
var init_STSClient = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js"() {
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
    STSClient = class extends import_smithy_client5.Client {
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
          httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
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

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js
var import_middleware_endpoint2, import_smithy_client6, AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs18());
    import_smithy_client6 = __toESM(require_dist_cjs8());
    init_EndpointParameters();
    init_schemas_0();
    AssumeRoleCommand = class extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(AssumeRole$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js
var import_middleware_endpoint3, import_smithy_client7, AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js"() {
    import_middleware_endpoint3 = __toESM(require_dist_cjs18());
    import_smithy_client7 = __toESM(require_dist_cjs8());
    init_EndpointParameters();
    init_schemas_0();
    AssumeRoleWithWebIdentityCommand = class extends import_smithy_client7.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [(0, import_middleware_endpoint3.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(AssumeRoleWithWebIdentity$).build() {
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js
var import_smithy_client8, commands, STS;
var init_STS = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js"() {
    import_smithy_client8 = __toESM(require_dist_cjs8());
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_STSClient();
    commands = {
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand
    };
    STS = class extends STSClient {
    };
    (0, import_smithy_client8.createAggregatedClient)(commands, STS);
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js
var init_commands = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js
var init_models_0 = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js
var import_region_config_resolver2, getAccountIdFromAssumedRoleUser, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, isH2;
var init_defaultStsRoleAssumers = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js"() {
    init_client();
    import_region_config_resolver2 = __toESM(require_dist_cjs24());
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    };
    resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      let stsDefaultRegion = "";
      const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await (0, import_region_config_resolver2.stsRegionDefaultResolver)(loaderConfig)());
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
      return resolvedRegion;
    };
    getDefaultRoleAssumer = (stsOptions, STSClient2) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    };
    getDefaultRoleAssumerWithWebIdentity = (stsOptions, STSClient2) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        if (accountId) {
          setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    };
    isH2 = (requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    };
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = (baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    };
    getDefaultRoleAssumer2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    getDefaultRoleAssumerWithWebIdentity2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    });
  }
});

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js
var sts_exports = {};
__export(sts_exports, {
  AssumeRole$: () => AssumeRole$,
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleRequest$: () => AssumeRoleRequest$,
  AssumeRoleResponse$: () => AssumeRoleResponse$,
  AssumeRoleWithWebIdentity$: () => AssumeRoleWithWebIdentity$,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequest$: () => AssumeRoleWithWebIdentityRequest$,
  AssumeRoleWithWebIdentityResponse$: () => AssumeRoleWithWebIdentityResponse$,
  AssumedRoleUser$: () => AssumedRoleUser$,
  Credentials$: () => Credentials$,
  ExpiredTokenException: () => ExpiredTokenException,
  ExpiredTokenException$: () => ExpiredTokenException$,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPCommunicationErrorException$: () => IDPCommunicationErrorException$,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  IDPRejectedClaimException$: () => IDPRejectedClaimException$,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  InvalidIdentityTokenException$: () => InvalidIdentityTokenException$,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$: () => MalformedPolicyDocumentException$,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  PackedPolicyTooLargeException$: () => PackedPolicyTooLargeException$,
  PolicyDescriptorType$: () => PolicyDescriptorType$,
  ProvidedContext$: () => ProvidedContext$,
  RegionDisabledException: () => RegionDisabledException,
  RegionDisabledException$: () => RegionDisabledException$,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  STSServiceException$: () => STSServiceException$,
  Tag$: () => Tag$,
  __Client: () => import_smithy_client5.Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  errorTypeRegistries: () => errorTypeRegistries,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_sts = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js"() {
    init_STSClient();
    init_STS();
    init_commands();
    init_schemas_0();
    init_errors();
    init_models_0();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

export {
  STSServiceException,
  ExpiredTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  IDPRejectedClaimException,
  InvalidIdentityTokenException,
  IDPCommunicationErrorException,
  STSServiceException$,
  ExpiredTokenException$,
  IDPCommunicationErrorException$,
  IDPRejectedClaimException$,
  InvalidIdentityTokenException$,
  MalformedPolicyDocumentException$,
  PackedPolicyTooLargeException$,
  RegionDisabledException$,
  errorTypeRegistries,
  AssumedRoleUser$,
  AssumeRoleRequest$,
  AssumeRoleResponse$,
  AssumeRoleWithWebIdentityRequest$,
  AssumeRoleWithWebIdentityResponse$,
  Credentials$,
  PolicyDescriptorType$,
  ProvidedContext$,
  Tag$,
  AssumeRole$,
  AssumeRoleWithWebIdentity$,
  import_smithy_client5 as import_smithy_client,
  STSClient,
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  STS,
  getDefaultRoleAssumer2 as getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity2 as getDefaultRoleAssumerWithWebIdentity,
  decorateDefaultCredentialProvider,
  sts_exports,
  init_sts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zdHMvZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9lbmRwb2ludC9ydWxlc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9tb2RlbHMvU1RTU2VydmljZUV4Y2VwdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zdHMvbW9kZWxzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zdHMvc2NoZW1hcy9zY2hlbWFzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL3J1bnRpbWVDb25maWcuc2hhcmVkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9ydW50aW1lQ29uZmlnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zdHMvcnVudGltZUV4dGVuc2lvbnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL1NUU0NsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbmVzdGVkLWNsaWVudHNAMy45OTYuMTgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL2Rpc3QtZXMvc3VibW9kdWxlcy9zdHMvY29tbWFuZHMvQXNzdW1lUm9sZUNvbW1hbmQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2NvbW1hbmRzL0Fzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9TVFMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2NvbW1hbmRzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytuZXN0ZWQtY2xpZW50c0AzLjk5Ni4xOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9tb2RlbHMvbW9kZWxzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2RlZmF1bHRTdHNSb2xlQXNzdW1lcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2RlZmF1bHRSb2xlQXNzdW1lcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyByZXNvbHZlQXdzU2RrU2lnVjRDb25maWcgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIjtcbmltcG9ydCB7IGdldFNtaXRoeUNvbnRleHQsIG5vcm1hbGl6ZVByb3ZpZGVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1taWRkbGV3YXJlXCI7XG5pbXBvcnQgeyBTVFNDbGllbnQgfSBmcm9tIFwiLi4vU1RTQ2xpZW50XCI7XG5leHBvcnQgY29uc3QgZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gYXN5bmMgKGNvbmZpZywgY29udGV4dCwgaW5wdXQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVyYXRpb246IGdldFNtaXRoeUNvbnRleHQoY29udGV4dCkub3BlcmF0aW9uLFxuICAgICAgICByZWdpb246IChhd2FpdCBub3JtYWxpemVQcm92aWRlcihjb25maWcucmVnaW9uKSgpKSB8fFxuICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBgcmVnaW9uYCB0byBiZSBjb25maWd1cmVkIGZvciBgYXdzLmF1dGgjc2lndjRgXCIpO1xuICAgICAgICAgICAgfSkoKSxcbiAgICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwic3RzXCIsXG4gICAgICAgICAgICByZWdpb246IGF1dGhQYXJhbWV0ZXJzLnJlZ2lvbixcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcGVydGllc0V4dHJhY3RvcjogKGNvbmZpZywgY29udGV4dCkgPT4gKHtcbiAgICAgICAgICAgIHNpZ25pbmdQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU21pdGh5QXBpTm9BdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZDogXCJzbWl0aHkuYXBpI25vQXV0aFwiLFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUHJvdmlkZXIgPSAoYXV0aFBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgc3dpdGNoIChhdXRoUGFyYW1ldGVycy5vcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSBcIkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlcIjoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZVNtaXRoeUFwaU5vQXV0aEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlQXdzQXV0aFNpZ3Y0SHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZVN0c0F1dGhDb25maWcgPSAoaW5wdXQpID0+IE9iamVjdC5hc3NpZ24oaW5wdXQsIHtcbiAgICBzdHNDbGllbnRDdG9yOiBTVFNDbGllbnQsXG59KTtcbmV4cG9ydCBjb25zdCByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgY29uZmlnXzAgPSByZXNvbHZlU3RzQXV0aENvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGNvbmZpZ18xID0gcmVzb2x2ZUF3c1Nka1NpZ1Y0Q29uZmlnKGNvbmZpZ18wKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWdfMSwge1xuICAgICAgICBhdXRoU2NoZW1lUHJlZmVyZW5jZTogbm9ybWFsaXplUHJvdmlkZXIoY29uZmlnLmF1dGhTY2hlbWVQcmVmZXJlbmNlID8/IFtdKSxcbiAgICB9KTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgdXNlRHVhbHN0YWNrRW5kcG9pbnQ6IG9wdGlvbnMudXNlRHVhbHN0YWNrRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIHVzZUZpcHNFbmRwb2ludDogb3B0aW9ucy51c2VGaXBzRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIHVzZUdsb2JhbEVuZHBvaW50OiBvcHRpb25zLnVzZUdsb2JhbEVuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICBkZWZhdWx0U2lnbmluZ05hbWU6IFwic3RzXCIsXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICBVc2VHbG9iYWxFbmRwb2ludDogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VHbG9iYWxFbmRwb2ludFwiIH0sXG4gICAgVXNlRklQUzogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VGaXBzRW5kcG9pbnRcIiB9LFxuICAgIEVuZHBvaW50OiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcImVuZHBvaW50XCIgfSxcbiAgICBSZWdpb246IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwicmVnaW9uXCIgfSxcbiAgICBVc2VEdWFsU3RhY2s6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwidXNlRHVhbHN0YWNrRW5kcG9pbnRcIiB9LFxufTtcbiIsICJjb25zdCBGID0gXCJyZXF1aXJlZFwiLCBHID0gXCJ0eXBlXCIsIEggPSBcImZuXCIsIEkgPSBcImFyZ3ZcIiwgSiA9IFwicmVmXCI7XG5jb25zdCBhID0gZmFsc2UsIGIgPSB0cnVlLCBjID0gXCJib29sZWFuRXF1YWxzXCIsIGQgPSBcInN0cmluZ0VxdWFsc1wiLCBlID0gXCJzaWd2NFwiLCBmID0gXCJzdHNcIiwgZyA9IFwidXMtZWFzdC0xXCIsIGggPSBcImVuZHBvaW50XCIsIGkgPSBcImh0dHBzOi8vc3RzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZG5zU3VmZml4fVwiLCBqID0gXCJ0cmVlXCIsIGsgPSBcImVycm9yXCIsIGwgPSBcImdldEF0dHJcIiwgbSA9IHsgW0ZdOiBmYWxzZSwgW0ddOiBcInN0cmluZ1wiIH0sIG4gPSB7IFtGXTogdHJ1ZSwgZGVmYXVsdDogZmFsc2UsIFtHXTogXCJib29sZWFuXCIgfSwgbyA9IHsgW0pdOiBcIkVuZHBvaW50XCIgfSwgcCA9IHsgW0hdOiBcImlzU2V0XCIsIFtJXTogW3sgW0pdOiBcIlJlZ2lvblwiIH1dIH0sIHEgPSB7IFtKXTogXCJSZWdpb25cIiB9LCByID0geyBbSF06IFwiYXdzLnBhcnRpdGlvblwiLCBbSV06IFtxXSwgYXNzaWduOiBcIlBhcnRpdGlvblJlc3VsdFwiIH0sIHMgPSB7IFtKXTogXCJVc2VGSVBTXCIgfSwgdCA9IHsgW0pdOiBcIlVzZUR1YWxTdGFja1wiIH0sIHUgPSB7XG4gICAgdXJsOiBcImh0dHBzOi8vc3RzLmFtYXpvbmF3cy5jb21cIixcbiAgICBwcm9wZXJ0aWVzOiB7IGF1dGhTY2hlbWVzOiBbeyBuYW1lOiBlLCBzaWduaW5nTmFtZTogZiwgc2lnbmluZ1JlZ2lvbjogZyB9XSB9LFxuICAgIGhlYWRlcnM6IHt9LFxufSwgdiA9IHt9LCB3ID0geyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwiYXdzLWdsb2JhbFwiXSB9XSwgW2hdOiB1LCBbR106IGggfSwgeCA9IHsgW0hdOiBjLCBbSV06IFtzLCB0cnVlXSB9LCB5ID0geyBbSF06IGMsIFtJXTogW3QsIHRydWVdIH0sIHogPSB7IFtIXTogbCwgW0ldOiBbeyBbSl06IFwiUGFydGl0aW9uUmVzdWx0XCIgfSwgXCJzdXBwb3J0c0ZJUFNcIl0gfSwgQSA9IHsgW0pdOiBcIlBhcnRpdGlvblJlc3VsdFwiIH0sIEIgPSB7IFtIXTogYywgW0ldOiBbdHJ1ZSwgeyBbSF06IGwsIFtJXTogW0EsIFwic3VwcG9ydHNEdWFsU3RhY2tcIl0gfV0gfSwgQyA9IFt7IFtIXTogXCJpc1NldFwiLCBbSV06IFtvXSB9XSwgRCA9IFt4XSwgRSA9IFt5XTtcbmNvbnN0IF9kYXRhID0ge1xuICAgIHZlcnNpb246IFwiMS4wXCIsXG4gICAgcGFyYW1ldGVyczogeyBSZWdpb246IG0sIFVzZUR1YWxTdGFjazogbiwgVXNlRklQUzogbiwgRW5kcG9pbnQ6IG0sIFVzZUdsb2JhbEVuZHBvaW50OiBuIH0sXG4gICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgW0hdOiBjLCBbSV06IFt7IFtKXTogXCJVc2VHbG9iYWxFbmRwb2ludFwiIH0sIGJdIH0sXG4gICAgICAgICAgICAgICAgeyBbSF06IFwibm90XCIsIFtJXTogQyB9LFxuICAgICAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICB7IFtIXTogYywgW0ldOiBbcywgYV0gfSxcbiAgICAgICAgICAgICAgICB7IFtIXTogYywgW0ldOiBbdCwgYV0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImFwLW5vcnRoZWFzdC0xXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sXG4gICAgICAgICAgICAgICAgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwiYXAtc291dGgtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LFxuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImFwLXNvdXRoZWFzdC0xXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sXG4gICAgICAgICAgICAgICAgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwiYXAtc291dGhlYXN0LTJcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB3LFxuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImNhLWNlbnRyYWwtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LFxuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImV1LWNlbnRyYWwtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LFxuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImV1LW5vcnRoLTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJldS13ZXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJldS13ZXN0LTJcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJldS13ZXN0LTNcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJzYS1lYXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgZ10gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJ1cy1lYXN0LTJcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJ1cy13ZXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJ1cy13ZXN0LTJcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IGF1dGhTY2hlbWVzOiBbeyBuYW1lOiBlLCBzaWduaW5nTmFtZTogZiwgc2lnbmluZ1JlZ2lvbjogXCJ7UmVnaW9ufVwiIH1dIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB2LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbR106IGgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbR106IGosXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnM6IEMsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHsgY29uZGl0aW9uczogRCwgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBGSVBTIGFuZCBjdXN0b20gZW5kcG9pbnQgYXJlIG5vdCBzdXBwb3J0ZWRcIiwgW0ddOiBrIH0sXG4gICAgICAgICAgICAgICAgeyBjb25kaXRpb25zOiBFLCBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IER1YWxzdGFjayBhbmQgY3VzdG9tIGVuZHBvaW50IGFyZSBub3Qgc3VwcG9ydGVkXCIsIFtHXTogayB9LFxuICAgICAgICAgICAgICAgIHsgZW5kcG9pbnQ6IHsgdXJsOiBvLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sIFtHXTogaCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtHXTogaixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uczogW3BdLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IFtyXSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeCwgeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW0hdOiBjLCBbSV06IFtiLCB6XSB9LCBCXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RzLWZpcHMue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW0ddOiBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW0ddOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9yOiBcIkZJUFMgYW5kIER1YWxTdGFjayBhcmUgZW5hYmxlZCwgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgb25lIG9yIGJvdGhcIiwgW0ddOiBrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbR106IGosXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IEQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogW3sgW0hdOiBjLCBbSV06IFt6LCBiXSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3sgW0hdOiBsLCBbSV06IFtBLCBcIm5hbWVcIl0gfSwgXCJhd3MtdXMtZ292XCJdIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogeyB1cmw6IFwiaHR0cHM6Ly9zdHMue1JlZ2lvbn0uYW1hem9uYXdzLmNvbVwiLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtHXTogaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0cy1maXBzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZG5zU3VmZml4fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtHXTogaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtHXTogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcjogXCJGSVBTIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRklQU1wiLCBbR106IGsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtHXTogaixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczogRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBbQl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0cy57UmVnaW9ufS57UGFydGl0aW9uUmVzdWx0I2R1YWxTdGFja0Ruc1N1ZmZpeH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbR106IGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbR106IGosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiRHVhbFN0YWNrIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRHVhbFN0YWNrXCIsIFtHXTogayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW0ddOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVuZHBvaW50OiB7IHVybDogaSwgcHJvcGVydGllczogdiwgaGVhZGVyczogdiB9LCBbR106IGggfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW0ddOiBqLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW0ddOiBqLFxuICAgICAgICB9LFxuICAgICAgICB7IGVycm9yOiBcIkludmFsaWQgQ29uZmlndXJhdGlvbjogTWlzc2luZyBSZWdpb25cIiwgW0ddOiBrIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgcnVsZVNldCA9IF9kYXRhO1xuIiwgImltcG9ydCB7IGF3c0VuZHBvaW50RnVuY3Rpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBjdXN0b21FbmRwb2ludEZ1bmN0aW9ucywgRW5kcG9pbnRDYWNoZSwgcmVzb2x2ZUVuZHBvaW50IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1lbmRwb2ludHNcIjtcbmltcG9ydCB7IHJ1bGVTZXQgfSBmcm9tIFwiLi9ydWxlc2V0XCI7XG5jb25zdCBjYWNoZSA9IG5ldyBFbmRwb2ludENhY2hlKHtcbiAgICBzaXplOiA1MCxcbiAgICBwYXJhbXM6IFtcIkVuZHBvaW50XCIsIFwiUmVnaW9uXCIsIFwiVXNlRHVhbFN0YWNrXCIsIFwiVXNlRklQU1wiLCBcIlVzZUdsb2JhbEVuZHBvaW50XCJdLFxufSk7XG5leHBvcnQgY29uc3QgZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgPSAoZW5kcG9pbnRQYXJhbXMsIGNvbnRleHQgPSB7fSkgPT4ge1xuICAgIHJldHVybiBjYWNoZS5nZXQoZW5kcG9pbnRQYXJhbXMsICgpID0+IHJlc29sdmVFbmRwb2ludChydWxlU2V0LCB7XG4gICAgICAgIGVuZHBvaW50UGFyYW1zOiBlbmRwb2ludFBhcmFtcyxcbiAgICAgICAgbG9nZ2VyOiBjb250ZXh0LmxvZ2dlcixcbiAgICB9KSk7XG59O1xuY3VzdG9tRW5kcG9pbnRGdW5jdGlvbnMuYXdzID0gYXdzRW5kcG9pbnRGdW5jdGlvbnM7XG4iLCAiaW1wb3J0IHsgU2VydmljZUV4Y2VwdGlvbiBhcyBfX1NlcnZpY2VFeGNlcHRpb24sIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuZXhwb3J0IHsgX19TZXJ2aWNlRXhjZXB0aW9uIH07XG5leHBvcnQgY2xhc3MgU1RTU2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIF9fU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNUU1NlcnZpY2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgU1RTU2VydmljZUV4Y2VwdGlvbiBhcyBfX0Jhc2VFeGNlcHRpb24gfSBmcm9tIFwiLi9TVFNTZXJ2aWNlRXhjZXB0aW9uXCI7XG5leHBvcnQgY2xhc3MgRXhwaXJlZFRva2VuRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJFeHBpcmVkVG9rZW5FeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJFeHBpcmVkVG9rZW5FeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgRXhwaXJlZFRva2VuRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJNYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIk1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIE1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJQYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJSZWdpb25EaXNhYmxlZEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIElEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIklEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJJRFBSZWplY3RlZENsYWltRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIElEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24gZXh0ZW5kcyBfX0Jhc2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uIGV4dGVuZHMgX19CYXNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuIiwgImNvbnN0IF9BID0gXCJBcm5cIjtcbmNvbnN0IF9BS0kgPSBcIkFjY2Vzc0tleUlkXCI7XG5jb25zdCBfQVIgPSBcIkFzc3VtZVJvbGVcIjtcbmNvbnN0IF9BUkkgPSBcIkFzc3VtZWRSb2xlSWRcIjtcbmNvbnN0IF9BUlIgPSBcIkFzc3VtZVJvbGVSZXF1ZXN0XCI7XG5jb25zdCBfQVJScyA9IFwiQXNzdW1lUm9sZVJlc3BvbnNlXCI7XG5jb25zdCBfQVJVID0gXCJBc3N1bWVkUm9sZVVzZXJcIjtcbmNvbnN0IF9BUldXSSA9IFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVwiO1xuY29uc3QgX0FSV1dJUiA9IFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVJlcXVlc3RcIjtcbmNvbnN0IF9BUldXSVJzID0gXCJBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UmVzcG9uc2VcIjtcbmNvbnN0IF9BdSA9IFwiQXVkaWVuY2VcIjtcbmNvbnN0IF9DID0gXCJDcmVkZW50aWFsc1wiO1xuY29uc3QgX0NBID0gXCJDb250ZXh0QXNzZXJ0aW9uXCI7XG5jb25zdCBfRFMgPSBcIkR1cmF0aW9uU2Vjb25kc1wiO1xuY29uc3QgX0UgPSBcIkV4cGlyYXRpb25cIjtcbmNvbnN0IF9FSSA9IFwiRXh0ZXJuYWxJZFwiO1xuY29uc3QgX0VURSA9IFwiRXhwaXJlZFRva2VuRXhjZXB0aW9uXCI7XG5jb25zdCBfSURQQ0VFID0gXCJJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb25cIjtcbmNvbnN0IF9JRFBSQ0UgPSBcIklEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb25cIjtcbmNvbnN0IF9JSVRFID0gXCJJbnZhbGlkSWRlbnRpdHlUb2tlbkV4Y2VwdGlvblwiO1xuY29uc3QgX0sgPSBcIktleVwiO1xuY29uc3QgX01QREUgPSBcIk1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uXCI7XG5jb25zdCBfUCA9IFwiUG9saWN5XCI7XG5jb25zdCBfUEEgPSBcIlBvbGljeUFybnNcIjtcbmNvbnN0IF9QQXIgPSBcIlByb3ZpZGVyQXJuXCI7XG5jb25zdCBfUEMgPSBcIlByb3ZpZGVkQ29udGV4dHNcIjtcbmNvbnN0IF9QQ0xUID0gXCJQcm92aWRlZENvbnRleHRzTGlzdFR5cGVcIjtcbmNvbnN0IF9QQ3IgPSBcIlByb3ZpZGVkQ29udGV4dFwiO1xuY29uc3QgX1BEVCA9IFwiUG9saWN5RGVzY3JpcHRvclR5cGVcIjtcbmNvbnN0IF9QSSA9IFwiUHJvdmlkZXJJZFwiO1xuY29uc3QgX1BQUyA9IFwiUGFja2VkUG9saWN5U2l6ZVwiO1xuY29uc3QgX1BQVExFID0gXCJQYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvblwiO1xuY29uc3QgX1ByID0gXCJQcm92aWRlclwiO1xuY29uc3QgX1JBID0gXCJSb2xlQXJuXCI7XG5jb25zdCBfUkRFID0gXCJSZWdpb25EaXNhYmxlZEV4Y2VwdGlvblwiO1xuY29uc3QgX1JTTiA9IFwiUm9sZVNlc3Npb25OYW1lXCI7XG5jb25zdCBfU0FLID0gXCJTZWNyZXRBY2Nlc3NLZXlcIjtcbmNvbnN0IF9TRldJVCA9IFwiU3ViamVjdEZyb21XZWJJZGVudGl0eVRva2VuXCI7XG5jb25zdCBfU0kgPSBcIlNvdXJjZUlkZW50aXR5XCI7XG5jb25zdCBfU04gPSBcIlNlcmlhbE51bWJlclwiO1xuY29uc3QgX1NUID0gXCJTZXNzaW9uVG9rZW5cIjtcbmNvbnN0IF9UID0gXCJUYWdzXCI7XG5jb25zdCBfVEMgPSBcIlRva2VuQ29kZVwiO1xuY29uc3QgX1RUSyA9IFwiVHJhbnNpdGl2ZVRhZ0tleXNcIjtcbmNvbnN0IF9UYSA9IFwiVGFnXCI7XG5jb25zdCBfViA9IFwiVmFsdWVcIjtcbmNvbnN0IF9XSVQgPSBcIldlYklkZW50aXR5VG9rZW5cIjtcbmNvbnN0IF9hID0gXCJhcm5cIjtcbmNvbnN0IF9hS1NUID0gXCJhY2Nlc3NLZXlTZWNyZXRUeXBlXCI7XG5jb25zdCBfYVFFID0gXCJhd3NRdWVyeUVycm9yXCI7XG5jb25zdCBfYyA9IFwiY2xpZW50XCI7XG5jb25zdCBfY1RUID0gXCJjbGllbnRUb2tlblR5cGVcIjtcbmNvbnN0IF9lID0gXCJlcnJvclwiO1xuY29uc3QgX2hFID0gXCJodHRwRXJyb3JcIjtcbmNvbnN0IF9tID0gXCJtZXNzYWdlXCI7XG5jb25zdCBfcERMVCA9IFwicG9saWN5RGVzY3JpcHRvckxpc3RUeXBlXCI7XG5jb25zdCBfcyA9IFwic21pdGh5LnRzLnNkay5zeW50aGV0aWMuY29tLmFtYXpvbmF3cy5zdHNcIjtcbmNvbnN0IF90TFQgPSBcInRhZ0xpc3RUeXBlXCI7XG5jb25zdCBuMCA9IFwiY29tLmFtYXpvbmF3cy5zdHNcIjtcbmltcG9ydCB7IFR5cGVSZWdpc3RyeSB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2NoZW1hXCI7XG5pbXBvcnQgeyBFeHBpcmVkVG9rZW5FeGNlcHRpb24sIElEUENvbW11bmljYXRpb25FcnJvckV4Y2VwdGlvbiwgSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvbiwgSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24sIE1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uLCBQYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvbiwgUmVnaW9uRGlzYWJsZWRFeGNlcHRpb24sIH0gZnJvbSBcIi4uL21vZGVscy9lcnJvcnNcIjtcbmltcG9ydCB7IFNUU1NlcnZpY2VFeGNlcHRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL1NUU1NlcnZpY2VFeGNlcHRpb25cIjtcbmNvbnN0IF9zX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihfcyk7XG5leHBvcnQgdmFyIFNUU1NlcnZpY2VFeGNlcHRpb24kID0gWy0zLCBfcywgXCJTVFNTZXJ2aWNlRXhjZXB0aW9uXCIsIDAsIFtdLCBbXV07XG5fc19yZWdpc3RyeS5yZWdpc3RlckVycm9yKFNUU1NlcnZpY2VFeGNlcHRpb24kLCBTVFNTZXJ2aWNlRXhjZXB0aW9uKTtcbmNvbnN0IG4wX3JlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihuMCk7XG5leHBvcnQgdmFyIEV4cGlyZWRUb2tlbkV4Y2VwdGlvbiQgPSBbXG4gICAgLTMsXG4gICAgbjAsXG4gICAgX0VURSxcbiAgICB7IFtfYVFFXTogW2BFeHBpcmVkVG9rZW5FeGNlcHRpb25gLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdLFxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoRXhwaXJlZFRva2VuRXhjZXB0aW9uJCwgRXhwaXJlZFRva2VuRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfSURQQ0VFLFxuICAgIHsgW19hUUVdOiBbYElEUENvbW11bmljYXRpb25FcnJvcmAsIDQwMF0sIFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF0sXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb24kLCBJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJRFBSZWplY3RlZENsYWltRXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfSURQUkNFLFxuICAgIHsgW19hUUVdOiBbYElEUFJlamVjdGVkQ2xhaW1gLCA0MDNdLCBbX2VdOiBfYywgW19oRV06IDQwMyB9LFxuICAgIFtfbV0sXG4gICAgWzBdLFxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvbiQsIElEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24pO1xuZXhwb3J0IHZhciBJbnZhbGlkSWRlbnRpdHlUb2tlbkV4Y2VwdGlvbiQgPSBbXG4gICAgLTMsXG4gICAgbjAsXG4gICAgX0lJVEUsXG4gICAgeyBbX2FRRV06IFtgSW52YWxpZElkZW50aXR5VG9rZW5gLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdLFxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24kLCBJbnZhbGlkSWRlbnRpdHlUb2tlbkV4Y2VwdGlvbik7XG5leHBvcnQgdmFyIE1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uJCA9IFtcbiAgICAtMyxcbiAgICBuMCxcbiAgICBfTVBERSxcbiAgICB7IFtfYVFFXTogW2BNYWxmb3JtZWRQb2xpY3lEb2N1bWVudGAsIDQwMF0sIFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF0sXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihNYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvbiQsIE1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgUGFja2VkUG9saWN5VG9vTGFyZ2VFeGNlcHRpb24kID0gW1xuICAgIC0zLFxuICAgIG4wLFxuICAgIF9QUFRMRSxcbiAgICB7IFtfYVFFXTogW2BQYWNrZWRQb2xpY3lUb29MYXJnZWAsIDQwMF0sIFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF0sXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihQYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvbiQsIFBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uKTtcbmV4cG9ydCB2YXIgUmVnaW9uRGlzYWJsZWRFeGNlcHRpb24kID0gW1xuICAgIC0zLFxuICAgIG4wLFxuICAgIF9SREUsXG4gICAgeyBbX2FRRV06IFtgUmVnaW9uRGlzYWJsZWRFeGNlcHRpb25gLCA0MDNdLCBbX2VdOiBfYywgW19oRV06IDQwMyB9LFxuICAgIFtfbV0sXG4gICAgWzBdLFxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoUmVnaW9uRGlzYWJsZWRFeGNlcHRpb24kLCBSZWdpb25EaXNhYmxlZEV4Y2VwdGlvbik7XG5leHBvcnQgY29uc3QgZXJyb3JUeXBlUmVnaXN0cmllcyA9IFtfc19yZWdpc3RyeSwgbjBfcmVnaXN0cnldO1xudmFyIGFjY2Vzc0tleVNlY3JldFR5cGUgPSBbMCwgbjAsIF9hS1NULCA4LCAwXTtcbnZhciBjbGllbnRUb2tlblR5cGUgPSBbMCwgbjAsIF9jVFQsIDgsIDBdO1xuZXhwb3J0IHZhciBBc3N1bWVkUm9sZVVzZXIkID0gWzMsIG4wLCBfQVJVLCAwLCBbX0FSSSwgX0FdLCBbMCwgMF0sIDJdO1xuZXhwb3J0IHZhciBBc3N1bWVSb2xlUmVxdWVzdCQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfQVJSLFxuICAgIDAsXG4gICAgW19SQSwgX1JTTiwgX1BBLCBfUCwgX0RTLCBfVCwgX1RUSywgX0VJLCBfU04sIF9UQywgX1NJLCBfUENdLFxuICAgIFswLCAwLCAoKSA9PiBwb2xpY3lEZXNjcmlwdG9yTGlzdFR5cGUsIDAsIDEsICgpID0+IHRhZ0xpc3RUeXBlLCA2NCB8IDAsIDAsIDAsIDAsIDAsICgpID0+IFByb3ZpZGVkQ29udGV4dHNMaXN0VHlwZV0sXG4gICAgMixcbl07XG5leHBvcnQgdmFyIEFzc3VtZVJvbGVSZXNwb25zZSQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfQVJScyxcbiAgICAwLFxuICAgIFtfQywgX0FSVSwgX1BQUywgX1NJXSxcbiAgICBbWygpID0+IENyZWRlbnRpYWxzJCwgMF0sICgpID0+IEFzc3VtZWRSb2xlVXNlciQsIDEsIDBdLFxuXTtcbmV4cG9ydCB2YXIgQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVJlcXVlc3QkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0FSV1dJUixcbiAgICAwLFxuICAgIFtfUkEsIF9SU04sIF9XSVQsIF9QSSwgX1BBLCBfUCwgX0RTXSxcbiAgICBbMCwgMCwgWygpID0+IGNsaWVudFRva2VuVHlwZSwgMF0sIDAsICgpID0+IHBvbGljeURlc2NyaXB0b3JMaXN0VHlwZSwgMCwgMV0sXG4gICAgMyxcbl07XG5leHBvcnQgdmFyIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlSZXNwb25zZSQgPSBbXG4gICAgMyxcbiAgICBuMCxcbiAgICBfQVJXV0lScyxcbiAgICAwLFxuICAgIFtfQywgX1NGV0lULCBfQVJVLCBfUFBTLCBfUHIsIF9BdSwgX1NJXSxcbiAgICBbWygpID0+IENyZWRlbnRpYWxzJCwgMF0sIDAsICgpID0+IEFzc3VtZWRSb2xlVXNlciQsIDEsIDAsIDAsIDBdLFxuXTtcbmV4cG9ydCB2YXIgQ3JlZGVudGlhbHMkID0gW1xuICAgIDMsXG4gICAgbjAsXG4gICAgX0MsXG4gICAgMCxcbiAgICBbX0FLSSwgX1NBSywgX1NULCBfRV0sXG4gICAgWzAsIFsoKSA9PiBhY2Nlc3NLZXlTZWNyZXRUeXBlLCAwXSwgMCwgNF0sXG4gICAgNCxcbl07XG5leHBvcnQgdmFyIFBvbGljeURlc2NyaXB0b3JUeXBlJCA9IFszLCBuMCwgX1BEVCwgMCwgW19hXSwgWzBdXTtcbmV4cG9ydCB2YXIgUHJvdmlkZWRDb250ZXh0JCA9IFszLCBuMCwgX1BDciwgMCwgW19QQXIsIF9DQV0sIFswLCAwXV07XG5leHBvcnQgdmFyIFRhZyQgPSBbMywgbjAsIF9UYSwgMCwgW19LLCBfVl0sIFswLCAwXSwgMl07XG52YXIgcG9saWN5RGVzY3JpcHRvckxpc3RUeXBlID0gWzEsIG4wLCBfcERMVCwgMCwgKCkgPT4gUG9saWN5RGVzY3JpcHRvclR5cGUkXTtcbnZhciBQcm92aWRlZENvbnRleHRzTGlzdFR5cGUgPSBbMSwgbjAsIF9QQ0xULCAwLCAoKSA9PiBQcm92aWRlZENvbnRleHQkXTtcbnZhciB0YWdLZXlMaXN0VHlwZSA9IDY0IHwgMDtcbnZhciB0YWdMaXN0VHlwZSA9IFsxLCBuMCwgX3RMVCwgMCwgKCkgPT4gVGFnJF07XG5leHBvcnQgdmFyIEFzc3VtZVJvbGUkID0gWzksIG4wLCBfQVIsIDAsICgpID0+IEFzc3VtZVJvbGVSZXF1ZXN0JCwgKCkgPT4gQXNzdW1lUm9sZVJlc3BvbnNlJF07XG5leHBvcnQgdmFyIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkkID0gW1xuICAgIDksXG4gICAgbjAsXG4gICAgX0FSV1dJLFxuICAgIDAsXG4gICAgKCkgPT4gQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVJlcXVlc3QkLFxuICAgICgpID0+IEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlSZXNwb25zZSQsXG5dO1xuIiwgImltcG9ydCB7IEF3c1Nka1NpZ1Y0U2lnbmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBBd3NRdWVyeVByb3RvY29sIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvcHJvdG9jb2xzXCI7XG5pbXBvcnQgeyBOb0F1dGhTaWduZXIgfSBmcm9tIFwiQHNtaXRoeS9jb3JlXCI7XG5pbXBvcnQgeyBOb09wTG9nZ2VyIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgcGFyc2VVcmwgfSBmcm9tIFwiQHNtaXRoeS91cmwtcGFyc2VyXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0LCB0b0Jhc2U2NCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYmFzZTY0XCI7XG5pbXBvcnQgeyBmcm9tVXRmOCwgdG9VdGY4IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC11dGY4XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQcm92aWRlciB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIgfSBmcm9tIFwiLi9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyXCI7XG5pbXBvcnQgeyBlcnJvclR5cGVSZWdpc3RyaWVzIH0gZnJvbSBcIi4vc2NoZW1hcy9zY2hlbWFzXzBcIjtcbmV4cG9ydCBjb25zdCBnZXRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAxMS0wNi0xNVwiLFxuICAgICAgICBiYXNlNjREZWNvZGVyOiBjb25maWc/LmJhc2U2NERlY29kZXIgPz8gZnJvbUJhc2U2NCxcbiAgICAgICAgYmFzZTY0RW5jb2RlcjogY29uZmlnPy5iYXNlNjRFbmNvZGVyID8/IHRvQmFzZTY0LFxuICAgICAgICBkaXNhYmxlSG9zdFByZWZpeDogY29uZmlnPy5kaXNhYmxlSG9zdFByZWZpeCA/PyBmYWxzZSxcbiAgICAgICAgZW5kcG9pbnRQcm92aWRlcjogY29uZmlnPy5lbmRwb2ludFByb3ZpZGVyID8/IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyLFxuICAgICAgICBleHRlbnNpb25zOiBjb25maWc/LmV4dGVuc2lvbnMgPz8gW10sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVQcm92aWRlciA/PyBkZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQcm92aWRlcixcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWc/Lmh0dHBBdXRoU2NoZW1lcyA/PyBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcImF3cy5hdXRoI3NpZ3Y0XCIpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogbmV3IEF3c1Nka1NpZ1Y0U2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjaGVtZUlkOiBcInNtaXRoeS5hcGkjbm9BdXRoXCIsXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogKGlwYykgPT4gaXBjLmdldElkZW50aXR5UHJvdmlkZXIoXCJzbWl0aHkuYXBpI25vQXV0aFwiKSB8fCAoYXN5bmMgKCkgPT4gKHt9KSksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgTm9BdXRoU2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsb2dnZXI6IGNvbmZpZz8ubG9nZ2VyID8/IG5ldyBOb09wTG9nZ2VyKCksXG4gICAgICAgIHByb3RvY29sOiBjb25maWc/LnByb3RvY29sID8/IEF3c1F1ZXJ5UHJvdG9jb2wsXG4gICAgICAgIHByb3RvY29sU2V0dGluZ3M6IGNvbmZpZz8ucHJvdG9jb2xTZXR0aW5ncyA/PyB7XG4gICAgICAgICAgICBkZWZhdWx0TmFtZXNwYWNlOiBcImNvbS5hbWF6b25hd3Muc3RzXCIsXG4gICAgICAgICAgICBlcnJvclR5cGVSZWdpc3RyaWVzLFxuICAgICAgICAgICAgeG1sTmFtZXNwYWNlOiBcImh0dHBzOi8vc3RzLmFtYXpvbmF3cy5jb20vZG9jLzIwMTEtMDYtMTUvXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjIwMTEtMDYtMTVcIixcbiAgICAgICAgICAgIHNlcnZpY2VUYXJnZXQ6IFwiQVdTU2VjdXJpdHlUb2tlblNlcnZpY2VWMjAxMTA2MTVcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZUlkOiBjb25maWc/LnNlcnZpY2VJZCA/PyBcIlNUU1wiLFxuICAgICAgICB1cmxQYXJzZXI6IGNvbmZpZz8udXJsUGFyc2VyID8/IHBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyBmcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdG9VdGY4LFxuICAgIH07XG59O1xuIiwgImltcG9ydCBwYWNrYWdlSW5mbyBmcm9tIFwiLi4vLi4vLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uIGFzIGF3c0NoZWNrVmVyc2lvbiB9IGZyb20gXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiO1xuaW1wb3J0IHsgQXdzU2RrU2lnVjRTaWduZXIsIE5PREVfQVVUSF9TQ0hFTUVfUFJFRkVSRU5DRV9PUFRJT05TIH0gZnJvbSBcIkBhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0VXNlckFnZW50UHJvdmlkZXIsIE5PREVfQVBQX0lEX0NPTkZJR19PUFRJT05TIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXNlci1hZ2VudC1ub2RlXCI7XG5pbXBvcnQgeyBOT0RFX1JFR0lPTl9DT05GSUdfRklMRV9PUFRJT05TLCBOT0RFX1JFR0lPTl9DT05GSUdfT1BUSU9OUywgTk9ERV9VU0VfRFVBTFNUQUNLX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCB9IGZyb20gXCJAc21pdGh5L2NvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgTm9BdXRoU2lnbmVyIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgSGFzaCB9IGZyb20gXCJAc21pdGh5L2hhc2gtbm9kZVwiO1xuaW1wb3J0IHsgTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgTk9ERV9SRVRSWV9NT0RFX0NPTkZJR19PUFRJT05TIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1yZXRyeVwiO1xuaW1wb3J0IHsgbG9hZENvbmZpZyBhcyBsb2FkTm9kZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBOb2RlSHR0cEhhbmRsZXIgYXMgUmVxdWVzdEhhbmRsZXIsIHN0cmVhbUNvbGxlY3RvciB9IGZyb20gXCJAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyXCI7XG5pbXBvcnQgeyBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLCBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm9keUxlbmd0aCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYm9keS1sZW5ndGgtbm9kZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3V0aWwtZGVmYXVsdHMtbW9kZS1ub2RlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1JFVFJZX01PREUgfSBmcm9tIFwiQHNtaXRoeS91dGlsLXJldHJ5XCI7XG5pbXBvcnQgeyBnZXRSdW50aW1lQ29uZmlnIGFzIGdldFNoYXJlZFJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9ydW50aW1lQ29uZmlnLnNoYXJlZFwiO1xuZXhwb3J0IGNvbnN0IGdldFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbihwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGRlZmF1bHRzTW9kZSA9IHJlc29sdmVEZWZhdWx0c01vZGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnUHJvdmlkZXIgPSAoKSA9PiBkZWZhdWx0c01vZGUoKS50aGVuKGxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGUpO1xuICAgIGNvbnN0IGNsaWVudFNoYXJlZFZhbHVlcyA9IGdldFNoYXJlZFJ1bnRpbWVDb25maWcoY29uZmlnKTtcbiAgICBhd3NDaGVja1ZlcnNpb24ocHJvY2Vzcy52ZXJzaW9uKTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICAgIHByb2ZpbGU6IGNvbmZpZz8ucHJvZmlsZSxcbiAgICAgICAgbG9nZ2VyOiBjbGllbnRTaGFyZWRWYWx1ZXMubG9nZ2VyLFxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2xpZW50U2hhcmVkVmFsdWVzLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHJ1bnRpbWU6IFwibm9kZVwiLFxuICAgICAgICBkZWZhdWx0c01vZGUsXG4gICAgICAgIGF1dGhTY2hlbWVQcmVmZXJlbmNlOiBjb25maWc/LmF1dGhTY2hlbWVQcmVmZXJlbmNlID8/IGxvYWROb2RlQ29uZmlnKE5PREVfQVVUSF9TQ0hFTUVfUFJFRkVSRU5DRV9PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICBib2R5TGVuZ3RoQ2hlY2tlcjogY29uZmlnPy5ib2R5TGVuZ3RoQ2hlY2tlciA/PyBjYWxjdWxhdGVCb2R5TGVuZ3RoLFxuICAgICAgICBkZWZhdWx0VXNlckFnZW50UHJvdmlkZXI6IGNvbmZpZz8uZGVmYXVsdFVzZXJBZ2VudFByb3ZpZGVyID8/XG4gICAgICAgICAgICBjcmVhdGVEZWZhdWx0VXNlckFnZW50UHJvdmlkZXIoeyBzZXJ2aWNlSWQ6IGNsaWVudFNoYXJlZFZhbHVlcy5zZXJ2aWNlSWQsIGNsaWVudFZlcnNpb246IHBhY2thZ2VJbmZvLnZlcnNpb24gfSksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lczogY29uZmlnPy5odHRwQXV0aFNjaGVtZXMgPz8gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjaGVtZUlkOiBcImF3cy5hdXRoI3NpZ3Y0XCIsXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogKGlwYykgPT4gaXBjLmdldElkZW50aXR5UHJvdmlkZXIoXCJhd3MuYXV0aCNzaWd2NFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKGlkUHJvcHMpID0+IGF3YWl0IGNvbmZpZy5jcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyKGlkUHJvcHM/Ll9fY29uZmlnIHx8IHt9KSgpKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBBd3NTZGtTaWdWNFNpZ25lcigpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJzbWl0aHkuYXBpI25vQXV0aFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwic21pdGh5LmFwaSNub0F1dGhcIikgfHwgKGFzeW5jICgpID0+ICh7fSkpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogbmV3IE5vQXV0aFNpZ25lcigpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbWF4QXR0ZW1wdHM6IGNvbmZpZz8ubWF4QXR0ZW1wdHMgPz8gbG9hZE5vZGVDb25maWcoTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoTk9ERV9SRUdJT05fQ09ORklHX09QVElPTlMsIHsgLi4uTk9ERV9SRUdJT05fQ09ORklHX0ZJTEVfT1BUSU9OUywgLi4ubG9hZGVyQ29uZmlnIH0pLFxuICAgICAgICByZXF1ZXN0SGFuZGxlcjogUmVxdWVzdEhhbmRsZXIuY3JlYXRlKGNvbmZpZz8ucmVxdWVzdEhhbmRsZXIgPz8gZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKSxcbiAgICAgICAgcmV0cnlNb2RlOiBjb25maWc/LnJldHJ5TW9kZSA/P1xuICAgICAgICAgICAgbG9hZE5vZGVDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCBERUZBVUxUX1JFVFJZX01PREUsXG4gICAgICAgICAgICB9LCBjb25maWcpLFxuICAgICAgICBzaGEyNTY6IGNvbmZpZz8uc2hhMjU2ID8/IEhhc2guYmluZChudWxsLCBcInNoYTI1NlwiKSxcbiAgICAgICAgc3RyZWFtQ29sbGVjdG9yOiBjb25maWc/LnN0cmVhbUNvbGxlY3RvciA/PyBzdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/IGxvYWROb2RlQ29uZmlnKE5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyBsb2FkTm9kZUNvbmZpZyhOT0RFX0FQUF9JRF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICB9O1xufTtcbiIsICJleHBvcnQgY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWcuaHR0cEF1dGhTY2hlbWVzKCksXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI6IGNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjb25maWcuY3JlZGVudGlhbHMoKSxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgeyBnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgfSBmcm9tIFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiO1xuaW1wb3J0IHsgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnIH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiwgcmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyB9IGZyb20gXCIuL2F1dGgvaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgY29uc3QgcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zID0gKHJ1bnRpbWVDb25maWcsIGV4dGVuc2lvbnMpID0+IHtcbiAgICBjb25zdCBleHRlbnNpb25Db25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihnZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKSwgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpLCBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZykpO1xuICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY29uZmlndXJlKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihydW50aW1lQ29uZmlnLCByZXNvbHZlQXdzUmVnaW9uRXh0ZW5zaW9uQ29uZmlndXJhdGlvbihleHRlbnNpb25Db25maWd1cmF0aW9uKSwgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEhlYWRlclBsdWdpbiwgcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcsIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIjtcbmltcG9ydCB7IGdldExvZ2dlclBsdWdpbiB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLWxvZ2dlclwiO1xuaW1wb3J0IHsgZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luIH0gZnJvbSBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50UGx1Z2luLCByZXNvbHZlVXNlckFnZW50Q29uZmlnLCB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjtcbmltcG9ydCB7IHJlc29sdmVSZWdpb25Db25maWcgfSBmcm9tIFwiQHNtaXRoeS9jb25maWctcmVzb2x2ZXJcIjtcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnLCBnZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbiwgZ2V0SHR0cFNpZ25pbmdQbHVnaW4sIH0gZnJvbSBcIkBzbWl0aHkvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U2NoZW1hU2VyZGVQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudExlbmd0aFBsdWdpbiB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIjtcbmltcG9ydCB7IHJlc29sdmVFbmRwb2ludENvbmZpZywgfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBnZXRSZXRyeVBsdWdpbiwgcmVzb2x2ZVJldHJ5Q29uZmlnLCB9IGZyb20gXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIjtcbmltcG9ydCB7IENsaWVudCBhcyBfX0NsaWVudCwgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQYXJhbWV0ZXJzUHJvdmlkZXIsIHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZywgfSBmcm9tIFwiLi9hdXRoL2h0dHBBdXRoU2NoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCB7IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMsIH0gZnJvbSBcIi4vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBnZXRSdW50aW1lQ29uZmlnIGFzIF9fZ2V0UnVudGltZUNvbmZpZyB9IGZyb20gXCIuL3J1bnRpbWVDb25maWdcIjtcbmltcG9ydCB7IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyB9IGZyb20gXCIuL3J1bnRpbWVFeHRlbnNpb25zXCI7XG5leHBvcnQgeyBfX0NsaWVudCB9O1xuZXhwb3J0IGNsYXNzIFNUU0NsaWVudCBleHRlbmRzIF9fQ2xpZW50IHtcbiAgICBjb25maWc7XG4gICAgY29uc3RydWN0b3IoLi4uW2NvbmZpZ3VyYXRpb25dKSB7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMCA9IF9fZ2V0UnVudGltZUNvbmZpZyhjb25maWd1cmF0aW9uIHx8IHt9KTtcbiAgICAgICAgc3VwZXIoX2NvbmZpZ18wKTtcbiAgICAgICAgdGhpcy5pbml0Q29uZmlnID0gX2NvbmZpZ18wO1xuICAgICAgICBjb25zdCBfY29uZmlnXzEgPSByZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzKF9jb25maWdfMCk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMiA9IHJlc29sdmVVc2VyQWdlbnRDb25maWcoX2NvbmZpZ18xKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18zID0gcmVzb2x2ZVJldHJ5Q29uZmlnKF9jb25maWdfMik7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNCA9IHJlc29sdmVSZWdpb25Db25maWcoX2NvbmZpZ18zKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ181ID0gcmVzb2x2ZUhvc3RIZWFkZXJDb25maWcoX2NvbmZpZ180KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ182ID0gcmVzb2x2ZUVuZHBvaW50Q29uZmlnKF9jb25maWdfNSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNyA9IHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZyhfY29uZmlnXzYpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzggPSByZXNvbHZlUnVudGltZUV4dGVuc2lvbnMoX2NvbmZpZ183LCBjb25maWd1cmF0aW9uPy5leHRlbnNpb25zIHx8IFtdKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfY29uZmlnXzg7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRTY2hlbWFTZXJkZVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0VXNlckFnZW50UGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZXRyeVBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0Q29udGVudExlbmd0aFBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0SG9zdEhlYWRlclBsdWdpbih0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoZ2V0TG9nZ2VyUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShnZXRSZWN1cnNpb25EZXRlY3Rpb25QbHVnaW4odGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBBdXRoU2NoZW1lRW5kcG9pbnRSdWxlU2V0UGx1Z2luKHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgICBodHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlcjogZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLFxuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyOiBhc3luYyAoY29uZmlnKSA9PiBuZXcgRGVmYXVsdElkZW50aXR5UHJvdmlkZXJDb25maWcoe1xuICAgICAgICAgICAgICAgIFwiYXdzLmF1dGgjc2lndjRcIjogY29uZmlnLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKGdldEh0dHBTaWduaW5nUGx1Z2luKHRoaXMuY29uZmlnKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0RW5kcG9pbnRQbHVnaW4gfSBmcm9tIFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgY29tbW9uUGFyYW1zIH0gZnJvbSBcIi4uL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQXNzdW1lUm9sZSQgfSBmcm9tIFwiLi4vc2NoZW1hcy9zY2hlbWFzXzBcIjtcbmV4cG9ydCB7ICRDb21tYW5kIH07XG5leHBvcnQgY2xhc3MgQXNzdW1lUm9sZUNvbW1hbmQgZXh0ZW5kcyAkQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChjb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW2dldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQVdTU2VjdXJpdHlUb2tlblNlcnZpY2VWMjAxMTA2MTVcIiwgXCJBc3N1bWVSb2xlXCIsIHt9KVxuICAgIC5uKFwiU1RTQ2xpZW50XCIsIFwiQXNzdW1lUm9sZUNvbW1hbmRcIilcbiAgICAuc2MoQXNzdW1lUm9sZSQpXG4gICAgLmJ1aWxkKCkge1xufVxuIiwgImltcG9ydCB7IGdldEVuZHBvaW50UGx1Z2luIH0gZnJvbSBcIkBzbWl0aHkvbWlkZGxld2FyZS1lbmRwb2ludFwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IGNvbW1vblBhcmFtcyB9IGZyb20gXCIuLi9lbmRwb2ludC9FbmRwb2ludFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkkIH0gZnJvbSBcIi4uL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgeyAkQ29tbWFuZCB9O1xuZXhwb3J0IGNsYXNzIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kIGV4dGVuZHMgJENvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFtnZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU1NlY3VyaXR5VG9rZW5TZXJ2aWNlVjIwMTEwNjE1XCIsIFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVwiLCB7fSlcbiAgICAubihcIlNUU0NsaWVudFwiLCBcIkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kXCIpXG4gICAgLnNjKEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkkKVxuICAgIC5idWlsZCgpIHtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVBZ2dyZWdhdGVkQ2xpZW50IH0gZnJvbSBcIkBzbWl0aHkvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgQXNzdW1lUm9sZUNvbW1hbmQsIH0gZnJvbSBcIi4vY29tbWFuZHMvQXNzdW1lUm9sZUNvbW1hbmRcIjtcbmltcG9ydCB7IEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kLCB9IGZyb20gXCIuL2NvbW1hbmRzL0Fzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kXCI7XG5pbXBvcnQgeyBTVFNDbGllbnQgfSBmcm9tIFwiLi9TVFNDbGllbnRcIjtcbmNvbnN0IGNvbW1hbmRzID0ge1xuICAgIEFzc3VtZVJvbGVDb21tYW5kLFxuICAgIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kLFxufTtcbmV4cG9ydCBjbGFzcyBTVFMgZXh0ZW5kcyBTVFNDbGllbnQge1xufVxuY3JlYXRlQWdncmVnYXRlZENsaWVudChjb21tYW5kcywgU1RTKTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9Bc3N1bWVSb2xlQ29tbWFuZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eUNvbW1hbmRcIjtcbiIsICJleHBvcnQge307XG4iLCAiaW1wb3J0IHsgc2V0Q3JlZGVudGlhbEZlYXR1cmUgfSBmcm9tIFwiQGF3cy1zZGsvY29yZS9jbGllbnRcIjtcbmltcG9ydCB7IHN0c1JlZ2lvbkRlZmF1bHRSZXNvbHZlciB9IGZyb20gXCJAYXdzLXNkay9yZWdpb24tY29uZmlnLXJlc29sdmVyXCI7XG5pbXBvcnQgeyBBc3N1bWVSb2xlQ29tbWFuZCB9IGZyb20gXCIuL2NvbW1hbmRzL0Fzc3VtZVJvbGVDb21tYW5kXCI7XG5pbXBvcnQgeyBBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5Q29tbWFuZCB9IGZyb20gXCIuL2NvbW1hbmRzL0Fzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kXCI7XG5jb25zdCBnZXRBY2NvdW50SWRGcm9tQXNzdW1lZFJvbGVVc2VyID0gKGFzc3VtZWRSb2xlVXNlcikgPT4ge1xuICAgIGlmICh0eXBlb2YgYXNzdW1lZFJvbGVVc2VyPy5Bcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgYXJuQ29tcG9uZW50cyA9IGFzc3VtZWRSb2xlVXNlci5Bcm4uc3BsaXQoXCI6XCIpO1xuICAgICAgICBpZiAoYXJuQ29tcG9uZW50cy5sZW5ndGggPiA0ICYmIGFybkNvbXBvbmVudHNbNF0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcm5Db21wb25lbnRzWzRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgcmVzb2x2ZVJlZ2lvbiA9IGFzeW5jIChfcmVnaW9uLCBfcGFyZW50UmVnaW9uLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIGxvYWRlckNvbmZpZyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVnaW9uID0gdHlwZW9mIF9yZWdpb24gPT09IFwiZnVuY3Rpb25cIiA/IGF3YWl0IF9yZWdpb24oKSA6IF9yZWdpb247XG4gICAgY29uc3QgcGFyZW50UmVnaW9uID0gdHlwZW9mIF9wYXJlbnRSZWdpb24gPT09IFwiZnVuY3Rpb25cIiA/IGF3YWl0IF9wYXJlbnRSZWdpb24oKSA6IF9wYXJlbnRSZWdpb247XG4gICAgbGV0IHN0c0RlZmF1bHRSZWdpb24gPSBcIlwiO1xuICAgIGNvbnN0IHJlc29sdmVkUmVnaW9uID0gcmVnaW9uID8/IHBhcmVudFJlZ2lvbiA/PyAoc3RzRGVmYXVsdFJlZ2lvbiA9IGF3YWl0IHN0c1JlZ2lvbkRlZmF1bHRSZXNvbHZlcihsb2FkZXJDb25maWcpKCkpO1xuICAgIGNyZWRlbnRpYWxQcm92aWRlckxvZ2dlcj8uZGVidWc/LihcIkBhd3Mtc2RrL2NsaWVudC1zdHM6OnJlc29sdmVSZWdpb25cIiwgXCJhY2NlcHRpbmcgZmlyc3Qgb2Y6XCIsIGAke3JlZ2lvbn0gKGNyZWRlbnRpYWwgcHJvdmlkZXIgY2xpZW50Q29uZmlnKWAsIGAke3BhcmVudFJlZ2lvbn0gKGNvbnRleHR1YWwgY2xpZW50KWAsIGAke3N0c0RlZmF1bHRSZWdpb259IChTVFMgZGVmYXVsdDogQVdTX1JFR0lPTiwgcHJvZmlsZSByZWdpb24sIG9yIHVzLWVhc3QtMSlgKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRSZWdpb247XG59O1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRSb2xlQXNzdW1lciA9IChzdHNPcHRpb25zLCBTVFNDbGllbnQpID0+IHtcbiAgICBsZXQgc3RzQ2xpZW50O1xuICAgIGxldCBjbG9zdXJlU291cmNlQ3JlZHM7XG4gICAgcmV0dXJuIGFzeW5jIChzb3VyY2VDcmVkcywgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNsb3N1cmVTb3VyY2VDcmVkcyA9IHNvdXJjZUNyZWRzO1xuICAgICAgICBpZiAoIXN0c0NsaWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBsb2dnZXIgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LmxvZ2dlciwgcHJvZmlsZSA9IHN0c09wdGlvbnM/LnBhcmVudENsaWVudENvbmZpZz8ucHJvZmlsZSwgcmVnaW9uLCByZXF1ZXN0SGFuZGxlciA9IHN0c09wdGlvbnM/LnBhcmVudENsaWVudENvbmZpZz8ucmVxdWVzdEhhbmRsZXIsIGNyZWRlbnRpYWxQcm92aWRlckxvZ2dlciwgdXNlckFnZW50QXBwSWQgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnVzZXJBZ2VudEFwcElkLCB9ID0gc3RzT3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkUmVnaW9uID0gYXdhaXQgcmVzb2x2ZVJlZ2lvbihyZWdpb24sIHN0c09wdGlvbnM/LnBhcmVudENsaWVudENvbmZpZz8ucmVnaW9uLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaXNDb21wYXRpYmxlUmVxdWVzdEhhbmRsZXIgPSAhaXNIMihyZXF1ZXN0SGFuZGxlcik7XG4gICAgICAgICAgICBzdHNDbGllbnQgPSBuZXcgU1RTQ2xpZW50KHtcbiAgICAgICAgICAgICAgICAuLi5zdHNPcHRpb25zLFxuICAgICAgICAgICAgICAgIHVzZXJBZ2VudEFwcElkLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbERlZmF1bHRQcm92aWRlcjogKCkgPT4gYXN5bmMgKCkgPT4gY2xvc3VyZVNvdXJjZUNyZWRzLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogcmVzb2x2ZWRSZWdpb24sXG4gICAgICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXI6IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID8gcmVxdWVzdEhhbmRsZXIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IENyZWRlbnRpYWxzLCBBc3N1bWVkUm9sZVVzZXIgfSA9IGF3YWl0IHN0c0NsaWVudC5zZW5kKG5ldyBBc3N1bWVSb2xlQ29tbWFuZChwYXJhbXMpKTtcbiAgICAgICAgaWYgKCFDcmVkZW50aWFscyB8fCAhQ3JlZGVudGlhbHMuQWNjZXNzS2V5SWQgfHwgIUNyZWRlbnRpYWxzLlNlY3JldEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGZyb20gU1RTLmFzc3VtZVJvbGUgY2FsbCB3aXRoIHJvbGUgJHtwYXJhbXMuUm9sZUFybn1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBnZXRBY2NvdW50SWRGcm9tQXNzdW1lZFJvbGVVc2VyKEFzc3VtZWRSb2xlVXNlcik7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IENyZWRlbnRpYWxzLkFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBDcmVkZW50aWFscy5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IENyZWRlbnRpYWxzLlNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246IENyZWRlbnRpYWxzLkV4cGlyYXRpb24sXG4gICAgICAgICAgICAuLi4oQ3JlZGVudGlhbHMuQ3JlZGVudGlhbFNjb3BlICYmIHsgY3JlZGVudGlhbFNjb3BlOiBDcmVkZW50aWFscy5DcmVkZW50aWFsU2NvcGUgfSksXG4gICAgICAgICAgICAuLi4oYWNjb3VudElkICYmIHsgYWNjb3VudElkIH0pLFxuICAgICAgICB9O1xuICAgICAgICBzZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgXCJDUkVERU5USUFMU19TVFNfQVNTVU1FX1JPTEVcIiwgXCJpXCIpO1xuICAgICAgICByZXR1cm4gY3JlZGVudGlhbHM7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5ID0gKHN0c09wdGlvbnMsIFNUU0NsaWVudCkgPT4ge1xuICAgIGxldCBzdHNDbGllbnQ7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKCFzdHNDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nZ2VyID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy5sb2dnZXIsIHByb2ZpbGUgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnByb2ZpbGUsIHJlZ2lvbiwgcmVxdWVzdEhhbmRsZXIgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlcXVlc3RIYW5kbGVyLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIHVzZXJBZ2VudEFwcElkID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy51c2VyQWdlbnRBcHBJZCwgfSA9IHN0c09wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFJlZ2lvbiA9IGF3YWl0IHJlc29sdmVSZWdpb24ocmVnaW9uLCBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlZ2lvbiwgY3JlZGVudGlhbFByb3ZpZGVyTG9nZ2VyLCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID0gIWlzSDIocmVxdWVzdEhhbmRsZXIpO1xuICAgICAgICAgICAgc3RzQ2xpZW50ID0gbmV3IFNUU0NsaWVudCh7XG4gICAgICAgICAgICAgICAgLi4uc3RzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnRBcHBJZCxcbiAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogcmVzb2x2ZWRSZWdpb24sXG4gICAgICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXI6IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID8gcmVxdWVzdEhhbmRsZXIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IENyZWRlbnRpYWxzLCBBc3N1bWVkUm9sZVVzZXIgfSA9IGF3YWl0IHN0c0NsaWVudC5zZW5kKG5ldyBBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5Q29tbWFuZChwYXJhbXMpKTtcbiAgICAgICAgaWYgKCFDcmVkZW50aWFscyB8fCAhQ3JlZGVudGlhbHMuQWNjZXNzS2V5SWQgfHwgIUNyZWRlbnRpYWxzLlNlY3JldEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGZyb20gU1RTLmFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkgY2FsbCB3aXRoIHJvbGUgJHtwYXJhbXMuUm9sZUFybn1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBnZXRBY2NvdW50SWRGcm9tQXNzdW1lZFJvbGVVc2VyKEFzc3VtZWRSb2xlVXNlcik7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IENyZWRlbnRpYWxzLkFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBDcmVkZW50aWFscy5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IENyZWRlbnRpYWxzLlNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246IENyZWRlbnRpYWxzLkV4cGlyYXRpb24sXG4gICAgICAgICAgICAuLi4oQ3JlZGVudGlhbHMuQ3JlZGVudGlhbFNjb3BlICYmIHsgY3JlZGVudGlhbFNjb3BlOiBDcmVkZW50aWFscy5DcmVkZW50aWFsU2NvcGUgfSksXG4gICAgICAgICAgICAuLi4oYWNjb3VudElkICYmIHsgYWNjb3VudElkIH0pLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYWNjb3VudElkKSB7XG4gICAgICAgICAgICBzZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgXCJSRVNPTFZFRF9BQ0NPVU5UX0lEXCIsIFwiVFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgXCJDUkVERU5USUFMU19TVFNfQVNTVU1FX1JPTEVfV0VCX0lEXCIsIFwia1wiKTtcbiAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGRlY29yYXRlRGVmYXVsdENyZWRlbnRpYWxQcm92aWRlciA9IChwcm92aWRlcikgPT4gKGlucHV0KSA9PiBwcm92aWRlcih7XG4gICAgcm9sZUFzc3VtZXI6IGdldERlZmF1bHRSb2xlQXNzdW1lcihpbnB1dCwgaW5wdXQuc3RzQ2xpZW50Q3RvciksXG4gICAgcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHk6IGdldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eShpbnB1dCwgaW5wdXQuc3RzQ2xpZW50Q3RvciksXG4gICAgLi4uaW5wdXQsXG59KTtcbmNvbnN0IGlzSDIgPSAocmVxdWVzdEhhbmRsZXIpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXI/Lm1ldGFkYXRhPy5oYW5kbGVyUHJvdG9jb2wgPT09IFwiaDJcIjtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyIGFzIFN0c0dldERlZmF1bHRSb2xlQXNzdW1lciwgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5IGFzIFN0c0dldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSwgfSBmcm9tIFwiLi9kZWZhdWx0U3RzUm9sZUFzc3VtZXJzXCI7XG5pbXBvcnQgeyBTVFNDbGllbnQgfSBmcm9tIFwiLi9TVFNDbGllbnRcIjtcbmNvbnN0IGdldEN1c3RvbWl6YWJsZVN0c0NsaWVudEN0b3IgPSAoYmFzZUN0b3IsIGN1c3RvbWl6YXRpb25zKSA9PiB7XG4gICAgaWYgKCFjdXN0b21pemF0aW9ucylcbiAgICAgICAgcmV0dXJuIGJhc2VDdG9yO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGNsYXNzIEN1c3RvbWl6YWJsZVNUU0NsaWVudCBleHRlbmRzIGJhc2VDdG9yIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAgICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjdXN0b21pemF0aW9uIG9mIGN1c3RvbWl6YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZShjdXN0b21pemF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRSb2xlQXNzdW1lciA9IChzdHNPcHRpb25zID0ge30sIHN0c1BsdWdpbnMpID0+IFN0c0dldERlZmF1bHRSb2xlQXNzdW1lcihzdHNPcHRpb25zLCBnZXRDdXN0b21pemFibGVTdHNDbGllbnRDdG9yKFNUU0NsaWVudCwgc3RzUGx1Z2lucykpO1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSA9IChzdHNPcHRpb25zID0ge30sIHN0c1BsdWdpbnMpID0+IFN0c0dldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eShzdHNPcHRpb25zLCBnZXRDdXN0b21pemFibGVTdHNDbGllbnRDdG9yKFNUU0NsaWVudCwgc3RzUGx1Z2lucykpO1xuZXhwb3J0IGNvbnN0IGRlY29yYXRlRGVmYXVsdENyZWRlbnRpYWxQcm92aWRlciA9IChwcm92aWRlcikgPT4gKGlucHV0KSA9PiBwcm92aWRlcih7XG4gICAgcm9sZUFzc3VtZXI6IGdldERlZmF1bHRSb2xlQXNzdW1lcihpbnB1dCksXG4gICAgcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHk6IGdldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eShpbnB1dCksXG4gICAgLi4uaW5wdXQsXG59KTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi9TVFNDbGllbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NUU1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvc2NoZW1hc18wXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvZXJyb3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvbW9kZWxzXzBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2RlZmF1bHRSb2xlQXNzdW1lcnNcIjtcbmV4cG9ydCB7IFNUU1NlcnZpY2VFeGNlcHRpb24gfSBmcm9tIFwiLi9tb2RlbHMvU1RTU2VydmljZUV4Y2VwdGlvblwiO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBUyxpQ0FBaUMsZ0JBQWdCO0FBQ3RELFNBQU87QUFBQSxJQUNILFVBQVU7QUFBQSxJQUNWLG1CQUFtQjtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sUUFBUSxlQUFlO0FBQUEsSUFDM0I7QUFBQSxJQUNBLHFCQUFxQixDQUFDLFFBQVEsYUFBYTtBQUFBLE1BQ3ZDLG1CQUFtQjtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0o7QUFDQSxTQUFTLG9DQUFvQyxnQkFBZ0I7QUFDekQsU0FBTztBQUFBLElBQ0gsVUFBVTtBQUFBLEVBQ2Q7QUFDSjtBQS9CQSxJQUNBLHdCQUVhLDRDQTZCQSxrQ0FhQSxzQkFHQTtBQWhEYjtBQUFBO0FBQUE7QUFD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R0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQUEsWUFDNUUsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQUEsWUFDeEUsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUM1RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUFBLFlBQzVFO0FBQUEsWUFDQSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUMxRSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUMxRSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN4RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUM3RCxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN2RSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcs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Y2xpZW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgImdldFJ1bnRpbWVDb25maWciLCAibG9hZE5vZGVDb25maWciLCAiUmVxdWVzdEhhbmRsZXIiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiaW1wb3J0X2NvbmZpZ19yZXNvbHZlciIsICJpbXBvcnRfbWlkZGxld2FyZV9yZXRyeSIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJfX0NsaWVudCIsICJnZXRSdW50aW1lQ29uZmlnIiwgImltcG9ydF9taWRkbGV3YXJlX2VuZHBvaW50IiwgImltcG9ydF9zbWl0aHlfY2xpZW50IiwgIiRDb21tYW5kIiwgIm8iLCAiaW1wb3J0X21pZGRsZXdhcmVfZW5kcG9pbnQiLCAiaW1wb3J0X3NtaXRoeV9jbGllbnQiLCAiJENvbW1hbmQiLCAibyIsICJpbXBvcnRfc21pdGh5X2NsaWVudCIsICJpbXBvcnRfcmVnaW9uX2NvbmZpZ19yZXNvbHZlciIsICJTVFNDbGllbnQiLCAiZ2V0RGVmYXVsdFJvbGVBc3N1bWVyIiwgImdldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSIsICJfX0NsaWVudCIsICJnZXREZWZhdWx0Um9sZUFzc3VtZXIiLCAiZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5Il0KfQo=
