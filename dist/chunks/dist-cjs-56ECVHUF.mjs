#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs25
} from "./chunk-ED3IIJAL.mjs";
import {
  httpAuthSchemes_exports,
  init_httpAuthSchemes,
  init_protocols,
  protocols_exports,
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
  require_dist_cjs9 as require_dist_cjs17
} from "./chunk-2IEENXIQ.mjs";
import {
  dist_es_exports,
  init_dist_es
} from "./chunk-NQOD3DYB.mjs";
import "./chunk-XKXNRC7R.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-EZHETOM7.mjs";
import "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs as require_dist_cjs8
} from "./chunk-RR3PN36J.mjs";
import {
  init_schema,
  init_tslib_es6,
  require_dist_cjs as require_dist_cjs6,
  require_dist_cjs5 as require_dist_cjs7,
  schema_exports,
  tslib_es6_exports
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs3 as require_dist_cjs2
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-FONUB5ET.mjs";
import "./chunk-P2R73CAR.mjs";
import "./chunk-NE3ECB5D.mjs";
import {
  require_dist_cjs3 as require_dist_cjs5
} from "./chunk-HJNATCD3.mjs";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthSchemeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveHttpAuthSchemeConfig = exports.resolveStsAuthConfig = exports.defaultSTSHttpAuthSchemeProvider = exports.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var util_middleware_1 = require_dist_cjs7();
    var STSClient_1 = require_STSClient();
    var defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports.defaultSTSHttpAuthSchemeParametersProvider = defaultSTSHttpAuthSchemeParametersProvider;
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
    var defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithSAML":
          {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          ;
        case "AssumeRoleWithWebIdentity":
          {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          ;
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports.defaultSTSHttpAuthSchemeProvider = defaultSTSHttpAuthSchemeProvider;
    var resolveStsAuthConfig = (input) => Object.assign(input, {
      stsClientCtor: STSClient_1.STSClient
    });
    exports.resolveStsAuthConfig = resolveStsAuthConfig;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, exports.resolveStsAuthConfig)(config);
      const config_1 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config_0);
      return Object.assign(config_1, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
    exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js
var require_EndpointParameters = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/EndpointParameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.commonParams = exports.resolveClientEndpointParameters = void 0;
    var resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    };
    exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
    exports.commonParams = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/package.json"(exports, module) {
    module.exports = {
      name: "@aws-sdk/client-sts",
      description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
      version: "3.1021.0",
      scripts: {
        build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline client-sts",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "premove ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn g:vitest run",
        "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development",
        "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
        "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
        "test:integration": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
        "test:integration:watch": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
        "test:watch": "yarn g:vitest watch"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.973.26",
        "@aws-sdk/credential-provider-node": "^3.972.29",
        "@aws-sdk/middleware-host-header": "^3.972.8",
        "@aws-sdk/middleware-logger": "^3.972.8",
        "@aws-sdk/middleware-recursion-detection": "^3.972.9",
        "@aws-sdk/middleware-user-agent": "^3.972.28",
        "@aws-sdk/region-config-resolver": "^3.972.10",
        "@aws-sdk/types": "^3.973.6",
        "@aws-sdk/util-endpoints": "^3.996.5",
        "@aws-sdk/util-user-agent-browser": "^3.972.8",
        "@aws-sdk/util-user-agent-node": "^3.973.14",
        "@smithy/config-resolver": "^4.4.13",
        "@smithy/core": "^3.23.13",
        "@smithy/fetch-http-handler": "^5.3.15",
        "@smithy/hash-node": "^4.2.12",
        "@smithy/invalid-dependency": "^4.2.12",
        "@smithy/middleware-content-length": "^4.2.12",
        "@smithy/middleware-endpoint": "^4.4.28",
        "@smithy/middleware-retry": "^4.4.46",
        "@smithy/middleware-serde": "^4.2.16",
        "@smithy/middleware-stack": "^4.2.12",
        "@smithy/node-config-provider": "^4.3.12",
        "@smithy/node-http-handler": "^4.5.1",
        "@smithy/protocol-http": "^5.3.12",
        "@smithy/smithy-client": "^4.12.8",
        "@smithy/types": "^4.13.1",
        "@smithy/url-parser": "^4.2.12",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.44",
        "@smithy/util-defaults-mode-node": "^4.2.48",
        "@smithy/util-endpoints": "^3.3.3",
        "@smithy/util-middleware": "^4.2.12",
        "@smithy/util-retry": "^4.2.13",
        "@smithy/util-utf8": "^4.2.2",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@smithy/snapshot-testing": "^2.0.4",
        "@tsconfig/node20": "20.1.8",
        "@types/node": "^20.14.8",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        premove: "4.0.0",
        typescript: "~5.8.3",
        vitest: "^4.0.17"
      },
      engines: {
        node: ">=20.0.0"
      },
      typesVersions: {
        "<4.5": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var F = "required";
    var G = "type";
    var H = "fn";
    var I = "argv";
    var J = "ref";
    var a = false;
    var b = true;
    var c = "booleanEquals";
    var d = "stringEquals";
    var e = "sigv4";
    var f = "sts";
    var g = "us-east-1";
    var h = "endpoint";
    var i = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    var j = "tree";
    var k = "error";
    var l = "getAttr";
    var m = { [F]: false, [G]: "string" };
    var n = { [F]: true, "default": false, [G]: "boolean" };
    var o = { [J]: "Endpoint" };
    var p = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    var q = { [J]: "Region" };
    var r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" };
    var s = { [J]: "UseFIPS" };
    var t = { [J]: "UseDualStack" };
    var u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} };
    var v = {};
    var w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h };
    var x = { [H]: c, [I]: [s, true] };
    var y = { [H]: c, [I]: [t, true] };
    var z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    var A = { [J]: "PartitionResult" };
    var B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] };
    var C = [{ [H]: "isSet", [I]: [o] }];
    var D = [x];
    var E = [y];
    var _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
    exports.ruleSet = _data;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs13();
    var util_endpoints_2 = require_dist_cjs12();
    var ruleset_1 = require_ruleset();
    var cache = new util_endpoints_2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    });
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/models/STSServiceException.js
var require_STSServiceException = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/models/STSServiceException.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSServiceException = exports.__ServiceException = void 0;
    var smithy_client_1 = require_dist_cjs8();
    Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
      return smithy_client_1.ServiceException;
    } });
    var STSServiceException = class _STSServiceException extends smithy_client_1.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
    exports.STSServiceException = STSServiceException;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/models/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/models/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SessionDurationEscalationException = exports.OutboundWebIdentityFederationDisabledException = exports.JWTPayloadSizeExceededException = exports.ExpiredTradeInTokenException = exports.InvalidAuthorizationMessageException = exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = void 0;
    var STSServiceException_1 = require_STSServiceException();
    var ExpiredTokenException = class _ExpiredTokenException extends STSServiceException_1.STSServiceException {
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
    exports.ExpiredTokenException = ExpiredTokenException;
    var MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
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
    exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
    var PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
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
    exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;
    var RegionDisabledException = class _RegionDisabledException extends STSServiceException_1.STSServiceException {
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
    exports.RegionDisabledException = RegionDisabledException;
    var IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
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
    exports.IDPRejectedClaimException = IDPRejectedClaimException;
    var InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
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
    exports.InvalidIdentityTokenException = InvalidIdentityTokenException;
    var IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
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
    exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
    var InvalidAuthorizationMessageException = class _InvalidAuthorizationMessageException extends STSServiceException_1.STSServiceException {
      name = "InvalidAuthorizationMessageException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidAuthorizationMessageException.prototype);
      }
    };
    exports.InvalidAuthorizationMessageException = InvalidAuthorizationMessageException;
    var ExpiredTradeInTokenException = class _ExpiredTradeInTokenException extends STSServiceException_1.STSServiceException {
      name = "ExpiredTradeInTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTradeInTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTradeInTokenException.prototype);
      }
    };
    exports.ExpiredTradeInTokenException = ExpiredTradeInTokenException;
    var JWTPayloadSizeExceededException = class _JWTPayloadSizeExceededException extends STSServiceException_1.STSServiceException {
      name = "JWTPayloadSizeExceededException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "JWTPayloadSizeExceededException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _JWTPayloadSizeExceededException.prototype);
      }
    };
    exports.JWTPayloadSizeExceededException = JWTPayloadSizeExceededException;
    var OutboundWebIdentityFederationDisabledException = class _OutboundWebIdentityFederationDisabledException extends STSServiceException_1.STSServiceException {
      name = "OutboundWebIdentityFederationDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "OutboundWebIdentityFederationDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _OutboundWebIdentityFederationDisabledException.prototype);
      }
    };
    exports.OutboundWebIdentityFederationDisabledException = OutboundWebIdentityFederationDisabledException;
    var SessionDurationEscalationException = class _SessionDurationEscalationException extends STSServiceException_1.STSServiceException {
      name = "SessionDurationEscalationException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "SessionDurationEscalationException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SessionDurationEscalationException.prototype);
      }
    };
    exports.SessionDurationEscalationException = SessionDurationEscalationException;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/schemas/schemas_0.js
var require_schemas_0 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/schemas/schemas_0.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetDelegatedAccessToken$ = exports.GetCallerIdentity$ = exports.GetAccessKeyInfo$ = exports.DecodeAuthorizationMessage$ = exports.AssumeRoot$ = exports.AssumeRoleWithWebIdentity$ = exports.AssumeRoleWithSAML$ = exports.AssumeRole$ = exports.Tag$ = exports.ProvidedContext$ = exports.PolicyDescriptorType$ = exports.GetWebIdentityTokenResponse$ = exports.GetWebIdentityTokenRequest$ = exports.GetSessionTokenResponse$ = exports.GetSessionTokenRequest$ = exports.GetFederationTokenResponse$ = exports.GetFederationTokenRequest$ = exports.GetDelegatedAccessTokenResponse$ = exports.GetDelegatedAccessTokenRequest$ = exports.GetCallerIdentityResponse$ = exports.GetCallerIdentityRequest$ = exports.GetAccessKeyInfoResponse$ = exports.GetAccessKeyInfoRequest$ = exports.FederatedUser$ = exports.DecodeAuthorizationMessageResponse$ = exports.DecodeAuthorizationMessageRequest$ = exports.Credentials$ = exports.AssumeRootResponse$ = exports.AssumeRootRequest$ = exports.AssumeRoleWithWebIdentityResponse$ = exports.AssumeRoleWithWebIdentityRequest$ = exports.AssumeRoleWithSAMLResponse$ = exports.AssumeRoleWithSAMLRequest$ = exports.AssumeRoleResponse$ = exports.AssumeRoleRequest$ = exports.AssumedRoleUser$ = exports.errorTypeRegistries = exports.SessionDurationEscalationException$ = exports.RegionDisabledException$ = exports.PackedPolicyTooLargeException$ = exports.OutboundWebIdentityFederationDisabledException$ = exports.MalformedPolicyDocumentException$ = exports.JWTPayloadSizeExceededException$ = exports.InvalidIdentityTokenException$ = exports.InvalidAuthorizationMessageException$ = exports.IDPRejectedClaimException$ = exports.IDPCommunicationErrorException$ = exports.ExpiredTradeInTokenException$ = exports.ExpiredTokenException$ = exports.STSServiceException$ = void 0;
    exports.GetWebIdentityToken$ = exports.GetSessionToken$ = exports.GetFederationToken$ = void 0;
    var _A = "Arn";
    var _AKI = "AccessKeyId";
    var _AP = "AssumedPrincipal";
    var _AR = "AssumeRole";
    var _ARI = "AssumedRoleId";
    var _ARR = "AssumeRoleRequest";
    var _ARRs = "AssumeRoleResponse";
    var _ARRss = "AssumeRootRequest";
    var _ARRssu = "AssumeRootResponse";
    var _ARU = "AssumedRoleUser";
    var _ARWSAML = "AssumeRoleWithSAML";
    var _ARWSAMLR = "AssumeRoleWithSAMLRequest";
    var _ARWSAMLRs = "AssumeRoleWithSAMLResponse";
    var _ARWWI = "AssumeRoleWithWebIdentity";
    var _ARWWIR = "AssumeRoleWithWebIdentityRequest";
    var _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
    var _ARs = "AssumeRoot";
    var _Ac = "Account";
    var _Au = "Audience";
    var _C = "Credentials";
    var _CA = "ContextAssertion";
    var _DAM = "DecodeAuthorizationMessage";
    var _DAMR = "DecodeAuthorizationMessageRequest";
    var _DAMRe = "DecodeAuthorizationMessageResponse";
    var _DM = "DecodedMessage";
    var _DS = "DurationSeconds";
    var _E = "Expiration";
    var _EI = "ExternalId";
    var _EM = "EncodedMessage";
    var _ETE = "ExpiredTokenException";
    var _ETITE = "ExpiredTradeInTokenException";
    var _FU = "FederatedUser";
    var _FUI = "FederatedUserId";
    var _GAKI = "GetAccessKeyInfo";
    var _GAKIR = "GetAccessKeyInfoRequest";
    var _GAKIRe = "GetAccessKeyInfoResponse";
    var _GCI = "GetCallerIdentity";
    var _GCIR = "GetCallerIdentityRequest";
    var _GCIRe = "GetCallerIdentityResponse";
    var _GDAT = "GetDelegatedAccessToken";
    var _GDATR = "GetDelegatedAccessTokenRequest";
    var _GDATRe = "GetDelegatedAccessTokenResponse";
    var _GFT = "GetFederationToken";
    var _GFTR = "GetFederationTokenRequest";
    var _GFTRe = "GetFederationTokenResponse";
    var _GST = "GetSessionToken";
    var _GSTR = "GetSessionTokenRequest";
    var _GSTRe = "GetSessionTokenResponse";
    var _GWIT = "GetWebIdentityToken";
    var _GWITR = "GetWebIdentityTokenRequest";
    var _GWITRe = "GetWebIdentityTokenResponse";
    var _I = "Issuer";
    var _IAME = "InvalidAuthorizationMessageException";
    var _IDPCEE = "IDPCommunicationErrorException";
    var _IDPRCE = "IDPRejectedClaimException";
    var _IITE = "InvalidIdentityTokenException";
    var _JWTPSEE = "JWTPayloadSizeExceededException";
    var _K = "Key";
    var _MPDE = "MalformedPolicyDocumentException";
    var _N = "Name";
    var _NQ = "NameQualifier";
    var _OWIFDE = "OutboundWebIdentityFederationDisabledException";
    var _P = "Policy";
    var _PA = "PolicyArns";
    var _PAr = "PrincipalArn";
    var _PAro = "ProviderArn";
    var _PC = "ProvidedContexts";
    var _PCLT = "ProvidedContextsListType";
    var _PCr = "ProvidedContext";
    var _PDT = "PolicyDescriptorType";
    var _PI = "ProviderId";
    var _PPS = "PackedPolicySize";
    var _PPTLE = "PackedPolicyTooLargeException";
    var _Pr = "Provider";
    var _RA = "RoleArn";
    var _RDE = "RegionDisabledException";
    var _RSN = "RoleSessionName";
    var _S = "Subject";
    var _SA = "SigningAlgorithm";
    var _SAK = "SecretAccessKey";
    var _SAMLA = "SAMLAssertion";
    var _SAMLAT = "SAMLAssertionType";
    var _SDEE = "SessionDurationEscalationException";
    var _SFWIT = "SubjectFromWebIdentityToken";
    var _SI = "SourceIdentity";
    var _SN = "SerialNumber";
    var _ST = "SubjectType";
    var _STe = "SessionToken";
    var _T = "Tags";
    var _TC = "TokenCode";
    var _TIT = "TradeInToken";
    var _TP = "TargetPrincipal";
    var _TPA = "TaskPolicyArn";
    var _TTK = "TransitiveTagKeys";
    var _Ta = "Tag";
    var _UI = "UserId";
    var _V = "Value";
    var _WIT = "WebIdentityToken";
    var _a = "arn";
    var _aKST = "accessKeySecretType";
    var _aQE = "awsQueryError";
    var _c = "client";
    var _cTT = "clientTokenType";
    var _e = "error";
    var _hE = "httpError";
    var _m = "message";
    var _pDLT = "policyDescriptorListType";
    var _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
    var _tITT = "tradeInTokenType";
    var _tLT = "tagListType";
    var _wITT = "webIdentityTokenType";
    var n0 = "com.amazonaws.sts";
    var schema_1 = (init_schema(), __toCommonJS(schema_exports));
    var errors_1 = require_errors();
    var STSServiceException_1 = require_STSServiceException();
    var _s_registry = schema_1.TypeRegistry.for(_s);
    exports.STSServiceException$ = [-3, _s, "STSServiceException", 0, [], []];
    _s_registry.registerError(exports.STSServiceException$, STSServiceException_1.STSServiceException);
    var n0_registry = schema_1.TypeRegistry.for(n0);
    exports.ExpiredTokenException$ = [
      -3,
      n0,
      _ETE,
      { [_aQE]: [`ExpiredTokenException`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ExpiredTokenException$, errors_1.ExpiredTokenException);
    exports.ExpiredTradeInTokenException$ = [
      -3,
      n0,
      _ETITE,
      { [_aQE]: [`ExpiredTradeInTokenException`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.ExpiredTradeInTokenException$, errors_1.ExpiredTradeInTokenException);
    exports.IDPCommunicationErrorException$ = [
      -3,
      n0,
      _IDPCEE,
      { [_aQE]: [`IDPCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.IDPCommunicationErrorException$, errors_1.IDPCommunicationErrorException);
    exports.IDPRejectedClaimException$ = [
      -3,
      n0,
      _IDPRCE,
      { [_aQE]: [`IDPRejectedClaim`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.IDPRejectedClaimException$, errors_1.IDPRejectedClaimException);
    exports.InvalidAuthorizationMessageException$ = [
      -3,
      n0,
      _IAME,
      { [_aQE]: [`InvalidAuthorizationMessageException`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.InvalidAuthorizationMessageException$, errors_1.InvalidAuthorizationMessageException);
    exports.InvalidIdentityTokenException$ = [
      -3,
      n0,
      _IITE,
      { [_aQE]: [`InvalidIdentityToken`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.InvalidIdentityTokenException$, errors_1.InvalidIdentityTokenException);
    exports.JWTPayloadSizeExceededException$ = [
      -3,
      n0,
      _JWTPSEE,
      { [_aQE]: [`JWTPayloadSizeExceededException`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.JWTPayloadSizeExceededException$, errors_1.JWTPayloadSizeExceededException);
    exports.MalformedPolicyDocumentException$ = [
      -3,
      n0,
      _MPDE,
      { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.MalformedPolicyDocumentException$, errors_1.MalformedPolicyDocumentException);
    exports.OutboundWebIdentityFederationDisabledException$ = [
      -3,
      n0,
      _OWIFDE,
      { [_aQE]: [`OutboundWebIdentityFederationDisabledException`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.OutboundWebIdentityFederationDisabledException$, errors_1.OutboundWebIdentityFederationDisabledException);
    exports.PackedPolicyTooLargeException$ = [
      -3,
      n0,
      _PPTLE,
      { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e]: _c, [_hE]: 400 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.PackedPolicyTooLargeException$, errors_1.PackedPolicyTooLargeException);
    exports.RegionDisabledException$ = [
      -3,
      n0,
      _RDE,
      { [_aQE]: [`RegionDisabledException`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.RegionDisabledException$, errors_1.RegionDisabledException);
    exports.SessionDurationEscalationException$ = [
      -3,
      n0,
      _SDEE,
      { [_aQE]: [`SessionDurationEscalationException`, 403], [_e]: _c, [_hE]: 403 },
      [_m],
      [0]
    ];
    n0_registry.registerError(exports.SessionDurationEscalationException$, errors_1.SessionDurationEscalationException);
    exports.errorTypeRegistries = [
      _s_registry,
      n0_registry
    ];
    var accessKeySecretType = [0, n0, _aKST, 8, 0];
    var clientTokenType = [0, n0, _cTT, 8, 0];
    var SAMLAssertionType = [0, n0, _SAMLAT, 8, 0];
    var tradeInTokenType = [0, n0, _tITT, 8, 0];
    var webIdentityTokenType = [0, n0, _wITT, 8, 0];
    exports.AssumedRoleUser$ = [
      3,
      n0,
      _ARU,
      0,
      [_ARI, _A],
      [0, 0],
      2
    ];
    exports.AssumeRoleRequest$ = [
      3,
      n0,
      _ARR,
      0,
      [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
      [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
      2
    ];
    exports.AssumeRoleResponse$ = [
      3,
      n0,
      _ARRs,
      0,
      [_C, _ARU, _PPS, _SI],
      [[() => exports.Credentials$, 0], () => exports.AssumedRoleUser$, 1, 0]
    ];
    exports.AssumeRoleWithSAMLRequest$ = [
      3,
      n0,
      _ARWSAMLR,
      0,
      [_RA, _PAr, _SAMLA, _PA, _P, _DS],
      [0, 0, [() => SAMLAssertionType, 0], () => policyDescriptorListType, 0, 1],
      3
    ];
    exports.AssumeRoleWithSAMLResponse$ = [
      3,
      n0,
      _ARWSAMLRs,
      0,
      [_C, _ARU, _PPS, _S, _ST, _I, _Au, _NQ, _SI],
      [[() => exports.Credentials$, 0], () => exports.AssumedRoleUser$, 1, 0, 0, 0, 0, 0, 0]
    ];
    exports.AssumeRoleWithWebIdentityRequest$ = [
      3,
      n0,
      _ARWWIR,
      0,
      [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
      [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
      3
    ];
    exports.AssumeRoleWithWebIdentityResponse$ = [
      3,
      n0,
      _ARWWIRs,
      0,
      [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
      [[() => exports.Credentials$, 0], 0, () => exports.AssumedRoleUser$, 1, 0, 0, 0]
    ];
    exports.AssumeRootRequest$ = [
      3,
      n0,
      _ARRss,
      0,
      [_TP, _TPA, _DS],
      [0, () => exports.PolicyDescriptorType$, 1],
      2
    ];
    exports.AssumeRootResponse$ = [
      3,
      n0,
      _ARRssu,
      0,
      [_C, _SI],
      [[() => exports.Credentials$, 0], 0]
    ];
    exports.Credentials$ = [
      3,
      n0,
      _C,
      0,
      [_AKI, _SAK, _STe, _E],
      [0, [() => accessKeySecretType, 0], 0, 4],
      4
    ];
    exports.DecodeAuthorizationMessageRequest$ = [
      3,
      n0,
      _DAMR,
      0,
      [_EM],
      [0],
      1
    ];
    exports.DecodeAuthorizationMessageResponse$ = [
      3,
      n0,
      _DAMRe,
      0,
      [_DM],
      [0]
    ];
    exports.FederatedUser$ = [
      3,
      n0,
      _FU,
      0,
      [_FUI, _A],
      [0, 0],
      2
    ];
    exports.GetAccessKeyInfoRequest$ = [
      3,
      n0,
      _GAKIR,
      0,
      [_AKI],
      [0],
      1
    ];
    exports.GetAccessKeyInfoResponse$ = [
      3,
      n0,
      _GAKIRe,
      0,
      [_Ac],
      [0]
    ];
    exports.GetCallerIdentityRequest$ = [
      3,
      n0,
      _GCIR,
      0,
      [],
      []
    ];
    exports.GetCallerIdentityResponse$ = [
      3,
      n0,
      _GCIRe,
      0,
      [_UI, _Ac, _A],
      [0, 0, 0]
    ];
    exports.GetDelegatedAccessTokenRequest$ = [
      3,
      n0,
      _GDATR,
      0,
      [_TIT],
      [[() => tradeInTokenType, 0]],
      1
    ];
    exports.GetDelegatedAccessTokenResponse$ = [
      3,
      n0,
      _GDATRe,
      0,
      [_C, _PPS, _AP],
      [[() => exports.Credentials$, 0], 1, 0]
    ];
    exports.GetFederationTokenRequest$ = [
      3,
      n0,
      _GFTR,
      0,
      [_N, _P, _PA, _DS, _T],
      [0, 0, () => policyDescriptorListType, 1, () => tagListType],
      1
    ];
    exports.GetFederationTokenResponse$ = [
      3,
      n0,
      _GFTRe,
      0,
      [_C, _FU, _PPS],
      [[() => exports.Credentials$, 0], () => exports.FederatedUser$, 1]
    ];
    exports.GetSessionTokenRequest$ = [
      3,
      n0,
      _GSTR,
      0,
      [_DS, _SN, _TC],
      [1, 0, 0]
    ];
    exports.GetSessionTokenResponse$ = [
      3,
      n0,
      _GSTRe,
      0,
      [_C],
      [[() => exports.Credentials$, 0]]
    ];
    exports.GetWebIdentityTokenRequest$ = [
      3,
      n0,
      _GWITR,
      0,
      [_Au, _SA, _DS, _T],
      [64 | 0, 0, 1, () => tagListType],
      2
    ];
    exports.GetWebIdentityTokenResponse$ = [
      3,
      n0,
      _GWITRe,
      0,
      [_WIT, _E],
      [[() => webIdentityTokenType, 0], 4]
    ];
    exports.PolicyDescriptorType$ = [
      3,
      n0,
      _PDT,
      0,
      [_a],
      [0]
    ];
    exports.ProvidedContext$ = [
      3,
      n0,
      _PCr,
      0,
      [_PAro, _CA],
      [0, 0]
    ];
    exports.Tag$ = [
      3,
      n0,
      _Ta,
      0,
      [_K, _V],
      [0, 0],
      2
    ];
    var policyDescriptorListType = [
      1,
      n0,
      _pDLT,
      0,
      () => exports.PolicyDescriptorType$
    ];
    var ProvidedContextsListType = [
      1,
      n0,
      _PCLT,
      0,
      () => exports.ProvidedContext$
    ];
    var tagKeyListType = 64 | 0;
    var tagListType = [
      1,
      n0,
      _tLT,
      0,
      () => exports.Tag$
    ];
    var webIdentityTokenAudienceListType = 64 | 0;
    exports.AssumeRole$ = [
      9,
      n0,
      _AR,
      0,
      () => exports.AssumeRoleRequest$,
      () => exports.AssumeRoleResponse$
    ];
    exports.AssumeRoleWithSAML$ = [
      9,
      n0,
      _ARWSAML,
      0,
      () => exports.AssumeRoleWithSAMLRequest$,
      () => exports.AssumeRoleWithSAMLResponse$
    ];
    exports.AssumeRoleWithWebIdentity$ = [
      9,
      n0,
      _ARWWI,
      0,
      () => exports.AssumeRoleWithWebIdentityRequest$,
      () => exports.AssumeRoleWithWebIdentityResponse$
    ];
    exports.AssumeRoot$ = [
      9,
      n0,
      _ARs,
      0,
      () => exports.AssumeRootRequest$,
      () => exports.AssumeRootResponse$
    ];
    exports.DecodeAuthorizationMessage$ = [
      9,
      n0,
      _DAM,
      0,
      () => exports.DecodeAuthorizationMessageRequest$,
      () => exports.DecodeAuthorizationMessageResponse$
    ];
    exports.GetAccessKeyInfo$ = [
      9,
      n0,
      _GAKI,
      0,
      () => exports.GetAccessKeyInfoRequest$,
      () => exports.GetAccessKeyInfoResponse$
    ];
    exports.GetCallerIdentity$ = [
      9,
      n0,
      _GCI,
      0,
      () => exports.GetCallerIdentityRequest$,
      () => exports.GetCallerIdentityResponse$
    ];
    exports.GetDelegatedAccessToken$ = [
      9,
      n0,
      _GDAT,
      0,
      () => exports.GetDelegatedAccessTokenRequest$,
      () => exports.GetDelegatedAccessTokenResponse$
    ];
    exports.GetFederationToken$ = [
      9,
      n0,
      _GFT,
      0,
      () => exports.GetFederationTokenRequest$,
      () => exports.GetFederationTokenResponse$
    ];
    exports.GetSessionToken$ = [
      9,
      n0,
      _GST,
      0,
      () => exports.GetSessionTokenRequest$,
      () => exports.GetSessionTokenResponse$
    ];
    exports.GetWebIdentityToken$ = [
      9,
      n0,
      _GWIT,
      0,
      () => exports.GetWebIdentityTokenRequest$,
      () => exports.GetWebIdentityTokenResponse$
    ];
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var protocols_1 = (init_protocols(), __toCommonJS(protocols_exports));
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var smithy_client_1 = require_dist_cjs8();
    var url_parser_1 = require_dist_cjs4();
    var util_base64_1 = require_dist_cjs6();
    var util_utf8_1 = require_dist_cjs5();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var endpointResolver_1 = require_endpointResolver();
    var schemas_0_1 = require_schemas_0();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new httpAuthSchemes_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_1.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        protocol: config?.protocol ?? protocols_1.AwsQueryProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sts",
          errorTypeRegistries: schemas_0_1.errorTypeRegistries,
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15",
          serviceTarget: "AWSSecurityTokenServiceV20110615"
        },
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var httpAuthSchemes_1 = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var credential_provider_node_1 = require_dist_cjs25();
    var util_user_agent_node_1 = require_dist_cjs20();
    var config_resolver_1 = require_dist_cjs16();
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var hash_node_1 = require_dist_cjs21();
    var middleware_retry_1 = require_dist_cjs19();
    var node_config_provider_1 = require_dist_cjs3();
    var node_http_handler_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs8();
    var util_body_length_node_1 = require_dist_cjs22();
    var util_defaults_mode_node_1 = require_dist_cjs23();
    var util_retry_1 = require_dist_cjs14();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_1.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, client_1.emitWarningIfUnsupportedVersion)(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(httpAuthSchemes_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await (0, credential_provider_node_1.defaultProvider)(idProps?.__config || {})()),
            signer: new httpAuthSchemes_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_1.NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthExtensionConfiguration.js
var require_httpAuthExtensionConfiguration = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/auth/httpAuthExtensionConfiguration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveHttpAuthRuntimeConfig = exports.getHttpAuthExtensionConfiguration = void 0;
    var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
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
    exports.getHttpAuthExtensionConfiguration = getHttpAuthExtensionConfiguration;
    var resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
    exports.resolveHttpAuthRuntimeConfig = resolveHttpAuthRuntimeConfig;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js
var require_runtimeExtensions = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/runtimeExtensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveRuntimeExtensions = void 0;
    var region_config_resolver_1 = require_dist_cjs24();
    var protocol_http_1 = require_dist_cjs();
    var smithy_client_1 = require_dist_cjs8();
    var httpAuthExtensionConfiguration_1 = require_httpAuthExtensionConfiguration();
    var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig), (0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig), (0, httpAuthExtensionConfiguration_1.getHttpAuthExtensionConfiguration)(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), (0, httpAuthExtensionConfiguration_1.resolveHttpAuthRuntimeConfig)(extensionConfiguration));
    };
    exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js
var require_STSClient = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/STSClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STSClient = exports.__Client = void 0;
    var middleware_host_header_1 = require_dist_cjs9();
    var middleware_logger_1 = require_dist_cjs10();
    var middleware_recursion_detection_1 = require_dist_cjs11();
    var middleware_user_agent_1 = require_dist_cjs15();
    var config_resolver_1 = require_dist_cjs16();
    var core_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var schema_1 = (init_schema(), __toCommonJS(schema_exports));
    var middleware_content_length_1 = require_dist_cjs17();
    var middleware_endpoint_1 = require_dist_cjs18();
    var middleware_retry_1 = require_dist_cjs19();
    var smithy_client_1 = require_dist_cjs8();
    Object.defineProperty(exports, "__Client", { enumerable: true, get: function() {
      return smithy_client_1.Client;
    } });
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var EndpointParameters_1 = require_EndpointParameters();
    var runtimeConfig_1 = require_runtimeConfig();
    var runtimeExtensions_1 = require_runtimeExtensions();
    var STSClient = class extends smithy_client_1.Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, config_resolver_1.resolveRegionConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_5);
        const _config_7 = (0, httpAuthSchemeProvider_1.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, schema_1.getSchemaSerdePlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, core_1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
          httpAuthSchemeParametersProvider: httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new core_1.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use((0, core_1.getHttpSigningPlugin)(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    exports.STSClient = STSClient;
  }
});

// node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+client-sts@3.1021.0/node_modules/@aws-sdk/client-sts/dist-cjs/index.js"(exports) {
    var STSClient = require_STSClient();
    var smithyClient = require_dist_cjs8();
    var middlewareEndpoint = require_dist_cjs18();
    var EndpointParameters = require_EndpointParameters();
    var schemas_0 = require_schemas_0();
    var errors = require_errors();
    var client = (init_client(), __toCommonJS(client_exports));
    var regionConfigResolver = require_dist_cjs24();
    var STSServiceException = require_STSServiceException();
    var AssumeRoleCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(schemas_0.AssumeRole$).build() {
    };
    var AssumeRoleWithSAMLCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").sc(schemas_0.AssumeRoleWithSAML$).build() {
    };
    var AssumeRoleWithWebIdentityCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(schemas_0.AssumeRoleWithWebIdentity$).build() {
    };
    var AssumeRootCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {}).n("STSClient", "AssumeRootCommand").sc(schemas_0.AssumeRoot$).build() {
    };
    var DecodeAuthorizationMessageCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").sc(schemas_0.DecodeAuthorizationMessage$).build() {
    };
    var GetAccessKeyInfoCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").sc(schemas_0.GetAccessKeyInfo$).build() {
    };
    var GetCallerIdentityCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").sc(schemas_0.GetCallerIdentity$).build() {
    };
    var GetDelegatedAccessTokenCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {}).n("STSClient", "GetDelegatedAccessTokenCommand").sc(schemas_0.GetDelegatedAccessToken$).build() {
    };
    var GetFederationTokenCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").sc(schemas_0.GetFederationToken$).build() {
    };
    var GetSessionTokenCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").sc(schemas_0.GetSessionToken$).build() {
    };
    var GetWebIdentityTokenCommand = class extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
      return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "GetWebIdentityToken", {}).n("STSClient", "GetWebIdentityTokenCommand").sc(schemas_0.GetWebIdentityToken$).build() {
    };
    var commands = {
      AssumeRoleCommand,
      AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand,
      AssumeRootCommand,
      DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand,
      GetCallerIdentityCommand,
      GetDelegatedAccessTokenCommand,
      GetFederationTokenCommand,
      GetSessionTokenCommand,
      GetWebIdentityTokenCommand
    };
    var STS = class extends STSClient.STSClient {
    };
    smithyClient.createAggregatedClient(commands, STS);
    var getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    };
    var resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      let stsDefaultRegion = "";
      const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await regionConfigResolver.stsRegionDefaultResolver(loaderConfig)());
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
      return resolvedRegion;
    };
    var getDefaultRoleAssumer$1 = (stsOptions, STSClient2) => {
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
        client.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    };
    var getDefaultRoleAssumerWithWebIdentity$1 = (stsOptions, STSClient2) => {
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
          client.setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        client.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    };
    var isH2 = (requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    };
    var getCustomizableStsClientCtor = (baseCtor, customizations) => {
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
    var getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer$1(stsOptions, getCustomizableStsClientCtor(STSClient.STSClient, stsPlugins));
    var getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity$1(stsOptions, getCustomizableStsClientCtor(STSClient.STSClient, stsPlugins));
    var decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
      ...input
    });
    exports.$Command = smithyClient.Command;
    exports.STSServiceException = STSServiceException.STSServiceException;
    exports.AssumeRoleCommand = AssumeRoleCommand;
    exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;
    exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;
    exports.AssumeRootCommand = AssumeRootCommand;
    exports.DecodeAuthorizationMessageCommand = DecodeAuthorizationMessageCommand;
    exports.GetAccessKeyInfoCommand = GetAccessKeyInfoCommand;
    exports.GetCallerIdentityCommand = GetCallerIdentityCommand;
    exports.GetDelegatedAccessTokenCommand = GetDelegatedAccessTokenCommand;
    exports.GetFederationTokenCommand = GetFederationTokenCommand;
    exports.GetSessionTokenCommand = GetSessionTokenCommand;
    exports.GetWebIdentityTokenCommand = GetWebIdentityTokenCommand;
    exports.STS = STS;
    exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;
    exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
    exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
    Object.prototype.hasOwnProperty.call(STSClient, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: STSClient["__proto__"]
    });
    Object.keys(STSClient).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = STSClient[k];
    });
    Object.prototype.hasOwnProperty.call(schemas_0, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: schemas_0["__proto__"]
    });
    Object.keys(schemas_0).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
    });
    Object.prototype.hasOwnProperty.call(errors, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: errors["__proto__"]
    });
    Object.keys(errors).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
    });
  }
});
export default require_dist_cjs26();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtc3RzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtc3RzL2Rpc3QtY2pzL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LXN0c0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LXN0cy9wYWNrYWdlLmpzb24iLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvZW5kcG9pbnQvcnVsZXNldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LXN0c0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LXN0cy9kaXN0LWNqcy9lbmRwb2ludC9lbmRwb2ludFJlc29sdmVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtc3RzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtc3RzL2Rpc3QtY2pzL21vZGVscy9TVFNTZXJ2aWNlRXhjZXB0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjbGllbnQtc3RzQDMuMTAyMS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jbGllbnQtc3RzL2Rpc3QtY2pzL21vZGVscy9lcnJvcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvc2NoZW1hcy9zY2hlbWFzXzAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvcnVudGltZUNvbmZpZy5zaGFyZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvcnVudGltZUNvbmZpZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LXN0c0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LXN0cy9kaXN0LWNqcy9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LXN0c0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LXN0cy9kaXN0LWNqcy9ydW50aW1lRXh0ZW5zaW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY2xpZW50LXN0c0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY2xpZW50LXN0cy9kaXN0LWNqcy9TVFNDbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NsaWVudC1zdHNAMy4xMDIxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NsaWVudC1zdHMvZGlzdC1janMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSBleHBvcnRzLnJlc29sdmVTdHNBdXRoQ29uZmlnID0gZXhwb3J0cy5kZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGV4cG9ydHMuZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVzXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIik7XG5jb25zdCB1dGlsX21pZGRsZXdhcmVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtbWlkZGxld2FyZVwiKTtcbmNvbnN0IFNUU0NsaWVudF8xID0gcmVxdWlyZShcIi4uL1NUU0NsaWVudFwiKTtcbmNvbnN0IGRlZmF1bHRTVFNIdHRwQXV0aFNjaGVtZVBhcmFtZXRlcnNQcm92aWRlciA9IGFzeW5jIChjb25maWcsIGNvbnRleHQsIGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0aW9uOiAoMCwgdXRpbF9taWRkbGV3YXJlXzEuZ2V0U21pdGh5Q29udGV4dCkoY29udGV4dCkub3BlcmF0aW9uLFxuICAgICAgICByZWdpb246IGF3YWl0ICgwLCB1dGlsX21pZGRsZXdhcmVfMS5ub3JtYWxpemVQcm92aWRlcikoY29uZmlnLnJlZ2lvbikoKSB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgYHJlZ2lvbmAgdG8gYmUgY29uZmlndXJlZCBmb3IgYGF3cy5hdXRoI3NpZ3Y0YFwiKTtcbiAgICAgICAgfSkoKSxcbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyID0gZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyO1xuZnVuY3Rpb24gY3JlYXRlQXdzQXV0aFNpZ3Y0SHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICBzaWduaW5nUHJvcGVydGllczoge1xuICAgICAgICAgICAgbmFtZTogXCJzdHNcIixcbiAgICAgICAgICAgIHJlZ2lvbjogYXV0aFBhcmFtZXRlcnMucmVnaW9uLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wZXJ0aWVzRXh0cmFjdG9yOiAoY29uZmlnLCBjb250ZXh0KSA9PiAoe1xuICAgICAgICAgICAgc2lnbmluZ1Byb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTbWl0aHlBcGlOb0F1dGhIdHRwQXV0aE9wdGlvbihhdXRoUGFyYW1ldGVycykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtZUlkOiBcInNtaXRoeS5hcGkjbm9BdXRoXCIsXG4gICAgfTtcbn1cbmNvbnN0IGRlZmF1bHRTVFNIdHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gKGF1dGhQYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIHN3aXRjaCAoYXV0aFBhcmFtZXRlcnMub3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJBc3N1bWVSb2xlV2l0aFNBTUxcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlU21pdGh5QXBpTm9BdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgY2FzZSBcIkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goY3JlYXRlU21pdGh5QXBpTm9BdXRoSHR0cEF1dGhPcHRpb24oYXV0aFBhcmFtZXRlcnMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGNyZWF0ZUF3c0F1dGhTaWd2NEh0dHBBdXRoT3B0aW9uKGF1dGhQYXJhbWV0ZXJzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuZXhwb3J0cy5kZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGRlZmF1bHRTVFNIdHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuY29uc3QgcmVzb2x2ZVN0c0F1dGhDb25maWcgPSAoaW5wdXQpID0+IE9iamVjdC5hc3NpZ24oaW5wdXQsIHtcbiAgICBzdHNDbGllbnRDdG9yOiBTVFNDbGllbnRfMS5TVFNDbGllbnQsXG59KTtcbmV4cG9ydHMucmVzb2x2ZVN0c0F1dGhDb25maWcgPSByZXNvbHZlU3RzQXV0aENvbmZpZztcbmNvbnN0IHJlc29sdmVIdHRwQXV0aFNjaGVtZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICBjb25zdCBjb25maWdfMCA9ICgwLCBleHBvcnRzLnJlc29sdmVTdHNBdXRoQ29uZmlnKShjb25maWcpO1xuICAgIGNvbnN0IGNvbmZpZ18xID0gKDAsIGh0dHBBdXRoU2NoZW1lc18xLnJlc29sdmVBd3NTZGtTaWdWNENvbmZpZykoY29uZmlnXzApO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZ18xLCB7XG4gICAgICAgIGF1dGhTY2hlbWVQcmVmZXJlbmNlOiAoMCwgdXRpbF9taWRkbGV3YXJlXzEubm9ybWFsaXplUHJvdmlkZXIpKGNvbmZpZy5hdXRoU2NoZW1lUHJlZmVyZW5jZSA/PyBbXSksXG4gICAgfSk7XG59O1xuZXhwb3J0cy5yZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWcgPSByZXNvbHZlSHR0cEF1dGhTY2hlbWVDb25maWc7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbW1vblBhcmFtcyA9IGV4cG9ydHMucmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycyA9IHZvaWQgMDtcbmNvbnN0IHJlc29sdmVDbGllbnRFbmRwb2ludFBhcmFtZXRlcnMgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgdXNlRHVhbHN0YWNrRW5kcG9pbnQ6IG9wdGlvbnMudXNlRHVhbHN0YWNrRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIHVzZUZpcHNFbmRwb2ludDogb3B0aW9ucy51c2VGaXBzRW5kcG9pbnQgPz8gZmFsc2UsXG4gICAgICAgIHVzZUdsb2JhbEVuZHBvaW50OiBvcHRpb25zLnVzZUdsb2JhbEVuZHBvaW50ID8/IGZhbHNlLFxuICAgICAgICBkZWZhdWx0U2lnbmluZ05hbWU6IFwic3RzXCIsXG4gICAgfSk7XG59O1xuZXhwb3J0cy5yZXNvbHZlQ2xpZW50RW5kcG9pbnRQYXJhbWV0ZXJzID0gcmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycztcbmV4cG9ydHMuY29tbW9uUGFyYW1zID0ge1xuICAgIFVzZUdsb2JhbEVuZHBvaW50OiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUdsb2JhbEVuZHBvaW50XCIgfSxcbiAgICBVc2VGSVBTOiB7IHR5cGU6IFwiYnVpbHRJblBhcmFtc1wiLCBuYW1lOiBcInVzZUZpcHNFbmRwb2ludFwiIH0sXG4gICAgRW5kcG9pbnQ6IHsgdHlwZTogXCJidWlsdEluUGFyYW1zXCIsIG5hbWU6IFwiZW5kcG9pbnRcIiB9LFxuICAgIFJlZ2lvbjogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJyZWdpb25cIiB9LFxuICAgIFVzZUR1YWxTdGFjazogeyB0eXBlOiBcImJ1aWx0SW5QYXJhbXNcIiwgbmFtZTogXCJ1c2VEdWFsc3RhY2tFbmRwb2ludFwiIH0sXG59O1xuIiwgIntcbiAgXCJuYW1lXCI6IFwiQGF3cy1zZGsvY2xpZW50LXN0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQVdTIFNESyBmb3IgSmF2YVNjcmlwdCBTdHMgQ2xpZW50IGZvciBOb2RlLmpzLCBCcm93c2VyIGFuZCBSZWFjdCBOYXRpdmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMy4xMDIxLjBcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwiY29uY3VycmVudGx5ICd5YXJuOmJ1aWxkOnR5cGVzJyAneWFybjpidWlsZDplcycgJiYgeWFybiBidWlsZDpjanNcIixcbiAgICBcImJ1aWxkOmNqc1wiOiBcIm5vZGUgLi4vLi4vc2NyaXB0cy9jb21waWxhdGlvbi9pbmxpbmUgY2xpZW50LXN0c1wiLFxuICAgIFwiYnVpbGQ6ZXNcIjogXCJ0c2MgLXAgdHNjb25maWcuZXMuanNvblwiLFxuICAgIFwiYnVpbGQ6aW5jbHVkZTpkZXBzXCI6IFwieWFybiBnOnR1cmJvIHJ1biBidWlsZCAtRj1cXFwiJG5wbV9wYWNrYWdlX25hbWVcXFwiXCIsXG4gICAgXCJidWlsZDp0eXBlc1wiOiBcInByZW1vdmUgLi9kaXN0LXR5cGVzIHRzY29uZmlnLnR5cGVzLnRzYnVpbGRpbmZvICYmIHRzYyAtcCB0c2NvbmZpZy50eXBlcy5qc29uXCIsXG4gICAgXCJidWlsZDp0eXBlczpkb3dubGV2ZWxcIjogXCJkb3dubGV2ZWwtZHRzIGRpc3QtdHlwZXMgZGlzdC10eXBlcy90czMuNFwiLFxuICAgIFwiY2xlYW5cIjogXCJwcmVtb3ZlIGRpc3QtY2pzIGRpc3QtZXMgZGlzdC10eXBlcyB0c2NvbmZpZy5janMudHNidWlsZGluZm8gdHNjb25maWcuZXMudHNidWlsZGluZm8gdHNjb25maWcudHlwZXMudHNidWlsZGluZm9cIixcbiAgICBcImV4dHJhY3Q6ZG9jc1wiOiBcImFwaS1leHRyYWN0b3IgcnVuIC0tbG9jYWxcIixcbiAgICBcImdlbmVyYXRlOmNsaWVudFwiOiBcIm5vZGUgLi4vLi4vc2NyaXB0cy9nZW5lcmF0ZS1jbGllbnRzL3NpbmdsZS1zZXJ2aWNlIC0tc29sbyBzdHNcIixcbiAgICBcInRlc3RcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1blwiLFxuICAgIFwidGVzdDplMmVcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1biAtYyB2aXRlc3QuY29uZmlnLmUyZS5tdHMgLS1tb2RlIGRldmVsb3BtZW50XCIsXG4gICAgXCJ0ZXN0OmUyZTp3YXRjaFwiOiBcInlhcm4gZzp2aXRlc3Qgd2F0Y2ggLWMgdml0ZXN0LmNvbmZpZy5lMmUubXRzXCIsXG4gICAgXCJ0ZXN0OmluZGV4XCI6IFwidHNjIC0tbm9FbWl0IC4vdGVzdC9pbmRleC10eXBlcy50cyAmJiBub2RlIC4vdGVzdC9pbmRleC1vYmplY3RzLnNwZWMubWpzXCIsXG4gICAgXCJ0ZXN0OmludGVncmF0aW9uXCI6IFwieWFybiBnOnZpdGVzdCBydW4gLS1wYXNzV2l0aE5vVGVzdHMgLWMgdml0ZXN0LmNvbmZpZy5pbnRlZy5tdHNcIixcbiAgICBcInRlc3Q6aW50ZWdyYXRpb246d2F0Y2hcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1biAtLXBhc3NXaXRoTm9UZXN0cyAtYyB2aXRlc3QuY29uZmlnLmludGVnLm10c1wiLFxuICAgIFwidGVzdDp3YXRjaFwiOiBcInlhcm4gZzp2aXRlc3Qgd2F0Y2hcIlxuICB9LFxuICBcIm1haW5cIjogXCIuL2Rpc3QtY2pzL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QtdHlwZXMvaW5kZXguZC50c1wiLFxuICBcIm1vZHVsZVwiOiBcIi4vZGlzdC1lcy9pbmRleC5qc1wiLFxuICBcInNpZGVFZmZlY3RzXCI6IGZhbHNlLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYXdzLWNyeXB0by9zaGEyNTYtYnJvd3NlclwiOiBcIjUuMi4wXCIsXG4gICAgXCJAYXdzLWNyeXB0by9zaGEyNTYtanNcIjogXCI1LjIuMFwiLFxuICAgIFwiQGF3cy1zZGsvY29yZVwiOiBcIl4zLjk3My4yNlwiLFxuICAgIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlXCI6IFwiXjMuOTcyLjI5XCIsXG4gICAgXCJAYXdzLXNkay9taWRkbGV3YXJlLWhvc3QtaGVhZGVyXCI6IFwiXjMuOTcyLjhcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtbG9nZ2VyXCI6IFwiXjMuOTcyLjhcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvblwiOiBcIl4zLjk3Mi45XCIsXG4gICAgXCJAYXdzLXNkay9taWRkbGV3YXJlLXVzZXItYWdlbnRcIjogXCJeMy45NzIuMjhcIixcbiAgICBcIkBhd3Mtc2RrL3JlZ2lvbi1jb25maWctcmVzb2x2ZXJcIjogXCJeMy45NzIuMTBcIixcbiAgICBcIkBhd3Mtc2RrL3R5cGVzXCI6IFwiXjMuOTczLjZcIixcbiAgICBcIkBhd3Mtc2RrL3V0aWwtZW5kcG9pbnRzXCI6IFwiXjMuOTk2LjVcIixcbiAgICBcIkBhd3Mtc2RrL3V0aWwtdXNlci1hZ2VudC1icm93c2VyXCI6IFwiXjMuOTcyLjhcIixcbiAgICBcIkBhd3Mtc2RrL3V0aWwtdXNlci1hZ2VudC1ub2RlXCI6IFwiXjMuOTczLjE0XCIsXG4gICAgXCJAc21pdGh5L2NvbmZpZy1yZXNvbHZlclwiOiBcIl40LjQuMTNcIixcbiAgICBcIkBzbWl0aHkvY29yZVwiOiBcIl4zLjIzLjEzXCIsXG4gICAgXCJAc21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlclwiOiBcIl41LjMuMTVcIixcbiAgICBcIkBzbWl0aHkvaGFzaC1ub2RlXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS9pbnZhbGlkLWRlcGVuZGVuY3lcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L21pZGRsZXdhcmUtZW5kcG9pbnRcIjogXCJeNC40LjI4XCIsXG4gICAgXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIjogXCJeNC40LjQ2XCIsXG4gICAgXCJAc21pdGh5L21pZGRsZXdhcmUtc2VyZGVcIjogXCJeNC4yLjE2XCIsXG4gICAgXCJAc21pdGh5L21pZGRsZXdhcmUtc3RhY2tcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyXCI6IFwiXjQuMy4xMlwiLFxuICAgIFwiQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlclwiOiBcIl40LjUuMVwiLFxuICAgIFwiQHNtaXRoeS9wcm90b2NvbC1odHRwXCI6IFwiXjUuMy4xMlwiLFxuICAgIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI6IFwiXjQuMTIuOFwiLFxuICAgIFwiQHNtaXRoeS90eXBlc1wiOiBcIl40LjEzLjFcIixcbiAgICBcIkBzbWl0aHkvdXJsLXBhcnNlclwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1iYXNlNjRcIjogXCJeNC4zLjJcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1icm93c2VyXCI6IFwiXjQuMi4yXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtYm9keS1sZW5ndGgtbm9kZVwiOiBcIl40LjIuM1wiLFxuICAgIFwiQHNtaXRoeS91dGlsLWRlZmF1bHRzLW1vZGUtYnJvd3NlclwiOiBcIl40LjMuNDRcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLW5vZGVcIjogXCJeNC4yLjQ4XCIsXG4gICAgXCJAc21pdGh5L3V0aWwtZW5kcG9pbnRzXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtbWlkZGxld2FyZVwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1yZXRyeVwiOiBcIl40LjIuMTNcIixcbiAgICBcIkBzbWl0aHkvdXRpbC11dGY4XCI6IFwiXjQuMi4yXCIsXG4gICAgXCJ0c2xpYlwiOiBcIl4yLjYuMlwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBzbWl0aHkvc25hcHNob3QtdGVzdGluZ1wiOiBcIl4yLjAuNFwiLFxuICAgIFwiQHRzY29uZmlnL25vZGUyMFwiOiBcIjIwLjEuOFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTQuOFwiLFxuICAgIFwiY29uY3VycmVudGx5XCI6IFwiNy4wLjBcIixcbiAgICBcImRvd25sZXZlbC1kdHNcIjogXCIwLjEwLjFcIixcbiAgICBcInByZW1vdmVcIjogXCI0LjAuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIn41LjguM1wiLFxuICAgIFwidml0ZXN0XCI6IFwiXjQuMC4xN1wiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0yMC4wLjBcIlxuICB9LFxuICBcInR5cGVzVmVyc2lvbnNcIjoge1xuICAgIFwiPDQuNVwiOiB7XG4gICAgICBcImRpc3QtdHlwZXMvKlwiOiBbXG4gICAgICAgIFwiZGlzdC10eXBlcy90czMuNC8qXCJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdC0qLyoqXCJcbiAgXSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkFXUyBTREsgZm9yIEphdmFTY3JpcHQgVGVhbVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9qYXZhc2NyaXB0L1wiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcbiAgXCJicm93c2VyXCI6IHtcbiAgICBcIi4vZGlzdC1lcy9ydW50aW1lQ29uZmlnXCI6IFwiLi9kaXN0LWVzL3J1bnRpbWVDb25maWcuYnJvd3NlclwiXG4gIH0sXG4gIFwicmVhY3QtbmF0aXZlXCI6IHtcbiAgICBcIi4vZGlzdC1lcy9ydW50aW1lQ29uZmlnXCI6IFwiLi9kaXN0LWVzL3J1bnRpbWVDb25maWcubmF0aXZlXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hd3MvYXdzLXNkay1qcy12My90cmVlL21haW4vY2xpZW50cy9jbGllbnQtc3RzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYXdzL2F3cy1zZGstanMtdjMuZ2l0XCIsXG4gICAgXCJkaXJlY3RvcnlcIjogXCJjbGllbnRzL2NsaWVudC1zdHNcIlxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJ1bGVTZXQgPSB2b2lkIDA7XG5jb25zdCBGID0gXCJyZXF1aXJlZFwiLCBHID0gXCJ0eXBlXCIsIEggPSBcImZuXCIsIEkgPSBcImFyZ3ZcIiwgSiA9IFwicmVmXCI7XG5jb25zdCBhID0gZmFsc2UsIGIgPSB0cnVlLCBjID0gXCJib29sZWFuRXF1YWxzXCIsIGQgPSBcInN0cmluZ0VxdWFsc1wiLCBlID0gXCJzaWd2NFwiLCBmID0gXCJzdHNcIiwgZyA9IFwidXMtZWFzdC0xXCIsIGggPSBcImVuZHBvaW50XCIsIGkgPSBcImh0dHBzOi8vc3RzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZG5zU3VmZml4fVwiLCBqID0gXCJ0cmVlXCIsIGsgPSBcImVycm9yXCIsIGwgPSBcImdldEF0dHJcIiwgbSA9IHsgW0ZdOiBmYWxzZSwgW0ddOiBcInN0cmluZ1wiIH0sIG4gPSB7IFtGXTogdHJ1ZSwgXCJkZWZhdWx0XCI6IGZhbHNlLCBbR106IFwiYm9vbGVhblwiIH0sIG8gPSB7IFtKXTogXCJFbmRwb2ludFwiIH0sIHAgPSB7IFtIXTogXCJpc1NldFwiLCBbSV06IFt7IFtKXTogXCJSZWdpb25cIiB9XSB9LCBxID0geyBbSl06IFwiUmVnaW9uXCIgfSwgciA9IHsgW0hdOiBcImF3cy5wYXJ0aXRpb25cIiwgW0ldOiBbcV0sIFwiYXNzaWduXCI6IFwiUGFydGl0aW9uUmVzdWx0XCIgfSwgcyA9IHsgW0pdOiBcIlVzZUZJUFNcIiB9LCB0ID0geyBbSl06IFwiVXNlRHVhbFN0YWNrXCIgfSwgdSA9IHsgXCJ1cmxcIjogXCJodHRwczovL3N0cy5hbWF6b25hd3MuY29tXCIsIFwicHJvcGVydGllc1wiOiB7IFwiYXV0aFNjaGVtZXNcIjogW3sgXCJuYW1lXCI6IGUsIFwic2lnbmluZ05hbWVcIjogZiwgXCJzaWduaW5nUmVnaW9uXCI6IGcgfV0gfSwgXCJoZWFkZXJzXCI6IHt9IH0sIHYgPSB7fSwgdyA9IHsgXCJjb25kaXRpb25zXCI6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJhd3MtZ2xvYmFsXCJdIH1dLCBbaF06IHUsIFtHXTogaCB9LCB4ID0geyBbSF06IGMsIFtJXTogW3MsIHRydWVdIH0sIHkgPSB7IFtIXTogYywgW0ldOiBbdCwgdHJ1ZV0gfSwgeiA9IHsgW0hdOiBsLCBbSV06IFt7IFtKXTogXCJQYXJ0aXRpb25SZXN1bHRcIiB9LCBcInN1cHBvcnRzRklQU1wiXSB9LCBBID0geyBbSl06IFwiUGFydGl0aW9uUmVzdWx0XCIgfSwgQiA9IHsgW0hdOiBjLCBbSV06IFt0cnVlLCB7IFtIXTogbCwgW0ldOiBbQSwgXCJzdXBwb3J0c0R1YWxTdGFja1wiXSB9XSB9LCBDID0gW3sgW0hdOiBcImlzU2V0XCIsIFtJXTogW29dIH1dLCBEID0gW3hdLCBFID0gW3ldO1xuY29uc3QgX2RhdGEgPSB7IHZlcnNpb246IFwiMS4wXCIsIHBhcmFtZXRlcnM6IHsgUmVnaW9uOiBtLCBVc2VEdWFsU3RhY2s6IG4sIFVzZUZJUFM6IG4sIEVuZHBvaW50OiBtLCBVc2VHbG9iYWxFbmRwb2ludDogbiB9LCBydWxlczogW3sgY29uZGl0aW9uczogW3sgW0hdOiBjLCBbSV06IFt7IFtKXTogXCJVc2VHbG9iYWxFbmRwb2ludFwiIH0sIGJdIH0sIHsgW0hdOiBcIm5vdFwiLCBbSV06IEMgfSwgcCwgciwgeyBbSF06IGMsIFtJXTogW3MsIGFdIH0sIHsgW0hdOiBjLCBbSV06IFt0LCBhXSB9XSwgcnVsZXM6IFt7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJhcC1ub3J0aGVhc3QtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LCB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJhcC1zb3V0aC0xXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImFwLXNvdXRoZWFzdC0xXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImFwLXNvdXRoZWFzdC0yXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHcsIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImNhLWNlbnRyYWwtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LCB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJldS1jZW50cmFsLTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSwgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwiZXUtbm9ydGgtMVwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LCB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJldS13ZXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSwgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwiZXUtd2VzdC0yXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcImV1LXdlc3QtM1wiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LCB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJzYS1lYXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSwgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIGddIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHsgY29uZGl0aW9uczogW3sgW0hdOiBkLCBbSV06IFtxLCBcInVzLWVhc3QtMlwiXSB9XSwgZW5kcG9pbnQ6IHUsIFtHXTogaCB9LCB7IGNvbmRpdGlvbnM6IFt7IFtIXTogZCwgW0ldOiBbcSwgXCJ1cy13ZXN0LTFcIl0gfV0sIGVuZHBvaW50OiB1LCBbR106IGggfSwgeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3EsIFwidXMtd2VzdC0yXCJdIH1dLCBlbmRwb2ludDogdSwgW0ddOiBoIH0sIHsgZW5kcG9pbnQ6IHsgdXJsOiBpLCBwcm9wZXJ0aWVzOiB7IGF1dGhTY2hlbWVzOiBbeyBuYW1lOiBlLCBzaWduaW5nTmFtZTogZiwgc2lnbmluZ1JlZ2lvbjogXCJ7UmVnaW9ufVwiIH1dIH0sIGhlYWRlcnM6IHYgfSwgW0ddOiBoIH1dLCBbR106IGogfSwgeyBjb25kaXRpb25zOiBDLCBydWxlczogW3sgY29uZGl0aW9uczogRCwgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBGSVBTIGFuZCBjdXN0b20gZW5kcG9pbnQgYXJlIG5vdCBzdXBwb3J0ZWRcIiwgW0ddOiBrIH0sIHsgY29uZGl0aW9uczogRSwgZXJyb3I6IFwiSW52YWxpZCBDb25maWd1cmF0aW9uOiBEdWFsc3RhY2sgYW5kIGN1c3RvbSBlbmRwb2ludCBhcmUgbm90IHN1cHBvcnRlZFwiLCBbR106IGsgfSwgeyBlbmRwb2ludDogeyB1cmw6IG8sIHByb3BlcnRpZXM6IHYsIGhlYWRlcnM6IHYgfSwgW0ddOiBoIH1dLCBbR106IGogfSwgeyBjb25kaXRpb25zOiBbcF0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbcl0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbeCwgeV0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbeyBbSF06IGMsIFtJXTogW2IsIHpdIH0sIEJdLCBydWxlczogW3sgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8vc3RzLWZpcHMue1JlZ2lvbn0ue1BhcnRpdGlvblJlc3VsdCNkdWFsU3RhY2tEbnNTdWZmaXh9XCIsIHByb3BlcnRpZXM6IHYsIGhlYWRlcnM6IHYgfSwgW0ddOiBoIH1dLCBbR106IGogfSwgeyBlcnJvcjogXCJGSVBTIGFuZCBEdWFsU3RhY2sgYXJlIGVuYWJsZWQsIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IG9uZSBvciBib3RoXCIsIFtHXTogayB9XSwgW0ddOiBqIH0sIHsgY29uZGl0aW9uczogRCwgcnVsZXM6IFt7IGNvbmRpdGlvbnM6IFt7IFtIXTogYywgW0ldOiBbeiwgYl0gfV0sIHJ1bGVzOiBbeyBjb25kaXRpb25zOiBbeyBbSF06IGQsIFtJXTogW3sgW0hdOiBsLCBbSV06IFtBLCBcIm5hbWVcIl0gfSwgXCJhd3MtdXMtZ292XCJdIH1dLCBlbmRwb2ludDogeyB1cmw6IFwiaHR0cHM6Ly9zdHMue1JlZ2lvbn0uYW1hem9uYXdzLmNvbVwiLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sIFtHXTogaCB9LCB7IGVuZHBvaW50OiB7IHVybDogXCJodHRwczovL3N0cy1maXBzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZG5zU3VmZml4fVwiLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sIFtHXTogaCB9XSwgW0ddOiBqIH0sIHsgZXJyb3I6IFwiRklQUyBpcyBlbmFibGVkIGJ1dCB0aGlzIHBhcnRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IEZJUFNcIiwgW0ddOiBrIH1dLCBbR106IGogfSwgeyBjb25kaXRpb25zOiBFLCBydWxlczogW3sgY29uZGl0aW9uczogW0JdLCBydWxlczogW3sgZW5kcG9pbnQ6IHsgdXJsOiBcImh0dHBzOi8vc3RzLntSZWdpb259LntQYXJ0aXRpb25SZXN1bHQjZHVhbFN0YWNrRG5zU3VmZml4fVwiLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sIFtHXTogaCB9XSwgW0ddOiBqIH0sIHsgZXJyb3I6IFwiRHVhbFN0YWNrIGlzIGVuYWJsZWQgYnV0IHRoaXMgcGFydGl0aW9uIGRvZXMgbm90IHN1cHBvcnQgRHVhbFN0YWNrXCIsIFtHXTogayB9XSwgW0ddOiBqIH0sIHcsIHsgZW5kcG9pbnQ6IHsgdXJsOiBpLCBwcm9wZXJ0aWVzOiB2LCBoZWFkZXJzOiB2IH0sIFtHXTogaCB9XSwgW0ddOiBqIH1dLCBbR106IGogfSwgeyBlcnJvcjogXCJJbnZhbGlkIENvbmZpZ3VyYXRpb246IE1pc3NpbmcgUmVnaW9uXCIsIFtHXTogayB9XSB9O1xuZXhwb3J0cy5ydWxlU2V0ID0gX2RhdGE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRFbmRwb2ludFJlc29sdmVyID0gdm9pZCAwO1xuY29uc3QgdXRpbF9lbmRwb2ludHNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay91dGlsLWVuZHBvaW50c1wiKTtcbmNvbnN0IHV0aWxfZW5kcG9pbnRzXzIgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWVuZHBvaW50c1wiKTtcbmNvbnN0IHJ1bGVzZXRfMSA9IHJlcXVpcmUoXCIuL3J1bGVzZXRcIik7XG5jb25zdCBjYWNoZSA9IG5ldyB1dGlsX2VuZHBvaW50c18yLkVuZHBvaW50Q2FjaGUoe1xuICAgIHNpemU6IDUwLFxuICAgIHBhcmFtczogW1wiRW5kcG9pbnRcIiwgXCJSZWdpb25cIiwgXCJVc2VEdWFsU3RhY2tcIiwgXCJVc2VGSVBTXCIsIFwiVXNlR2xvYmFsRW5kcG9pbnRcIl0sXG59KTtcbmNvbnN0IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyID0gKGVuZHBvaW50UGFyYW1zLCBjb250ZXh0ID0ge30pID0+IHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGVuZHBvaW50UGFyYW1zLCAoKSA9PiAoMCwgdXRpbF9lbmRwb2ludHNfMi5yZXNvbHZlRW5kcG9pbnQpKHJ1bGVzZXRfMS5ydWxlU2V0LCB7XG4gICAgICAgIGVuZHBvaW50UGFyYW1zOiBlbmRwb2ludFBhcmFtcyxcbiAgICAgICAgbG9nZ2VyOiBjb250ZXh0LmxvZ2dlcixcbiAgICB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0RW5kcG9pbnRSZXNvbHZlciA9IGRlZmF1bHRFbmRwb2ludFJlc29sdmVyO1xudXRpbF9lbmRwb2ludHNfMi5jdXN0b21FbmRwb2ludEZ1bmN0aW9ucy5hd3MgPSB1dGlsX2VuZHBvaW50c18xLmF3c0VuZHBvaW50RnVuY3Rpb25zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TVFNTZXJ2aWNlRXhjZXB0aW9uID0gZXhwb3J0cy5fX1NlcnZpY2VFeGNlcHRpb24gPSB2b2lkIDA7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19TZXJ2aWNlRXhjZXB0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbWl0aHlfY2xpZW50XzEuU2VydmljZUV4Y2VwdGlvbjsgfSB9KTtcbmNsYXNzIFNUU1NlcnZpY2VFeGNlcHRpb24gZXh0ZW5kcyBzbWl0aHlfY2xpZW50XzEuU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNUU1NlcnZpY2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLlNUU1NlcnZpY2VFeGNlcHRpb24gPSBTVFNTZXJ2aWNlRXhjZXB0aW9uO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXNzaW9uRHVyYXRpb25Fc2NhbGF0aW9uRXhjZXB0aW9uID0gZXhwb3J0cy5PdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uID0gZXhwb3J0cy5KV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uID0gZXhwb3J0cy5FeHBpcmVkVHJhZGVJblRva2VuRXhjZXB0aW9uID0gZXhwb3J0cy5JbnZhbGlkQXV0aG9yaXphdGlvbk1lc3NhZ2VFeGNlcHRpb24gPSBleHBvcnRzLklEUENvbW11bmljYXRpb25FcnJvckV4Y2VwdGlvbiA9IGV4cG9ydHMuSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24gPSBleHBvcnRzLklEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24gPSBleHBvcnRzLlJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uID0gZXhwb3J0cy5QYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvbiA9IGV4cG9ydHMuTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb24gPSBleHBvcnRzLkV4cGlyZWRUb2tlbkV4Y2VwdGlvbiA9IHZvaWQgMDtcbmNvbnN0IFNUU1NlcnZpY2VFeGNlcHRpb25fMSA9IHJlcXVpcmUoXCIuL1NUU1NlcnZpY2VFeGNlcHRpb25cIik7XG5jbGFzcyBFeHBpcmVkVG9rZW5FeGNlcHRpb24gZXh0ZW5kcyBTVFNTZXJ2aWNlRXhjZXB0aW9uXzEuU1RTU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiRXhwaXJlZFRva2VuRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiRXhwaXJlZFRva2VuRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEV4cGlyZWRUb2tlbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwaXJlZFRva2VuRXhjZXB0aW9uID0gRXhwaXJlZFRva2VuRXhjZXB0aW9uO1xuY2xhc3MgTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBTVFNTZXJ2aWNlRXhjZXB0aW9uXzEuU1RTU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJNYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBNYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb24gPSBNYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvbjtcbmNsYXNzIFBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uIGV4dGVuZHMgU1RTU2VydmljZUV4Y2VwdGlvbl8xLlNUU1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIlBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGFja2VkUG9saWN5VG9vTGFyZ2VFeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgUGFja2VkUG9saWN5VG9vTGFyZ2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLlBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uID0gUGFja2VkUG9saWN5VG9vTGFyZ2VFeGNlcHRpb247XG5jbGFzcyBSZWdpb25EaXNhYmxlZEV4Y2VwdGlvbiBleHRlbmRzIFNUU1NlcnZpY2VFeGNlcHRpb25fMS5TVFNTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJSZWdpb25EaXNhYmxlZEV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZWdpb25EaXNhYmxlZEV4Y2VwdGlvbiA9IFJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uO1xuY2xhc3MgSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvbiBleHRlbmRzIFNUU1NlcnZpY2VFeGNlcHRpb25fMS5TVFNTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJJRFBSZWplY3RlZENsYWltRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJRFBSZWplY3RlZENsYWltRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5JRFBSZWplY3RlZENsYWltRXhjZXB0aW9uID0gSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvbjtcbmNsYXNzIEludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uIGV4dGVuZHMgU1RTU2VydmljZUV4Y2VwdGlvbl8xLlNUU1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uID0gSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb247XG5jbGFzcyBJRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb24gZXh0ZW5kcyBTVFNTZXJ2aWNlRXhjZXB0aW9uXzEuU1RTU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIElEUENvbW11bmljYXRpb25FcnJvckV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uID0gSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uO1xuY2xhc3MgSW52YWxpZEF1dGhvcml6YXRpb25NZXNzYWdlRXhjZXB0aW9uIGV4dGVuZHMgU1RTU2VydmljZUV4Y2VwdGlvbl8xLlNUU1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnZhbGlkQXV0aG9yaXphdGlvbk1lc3NhZ2VFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvbiA9IEludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvbjtcbmNsYXNzIEV4cGlyZWRUcmFkZUluVG9rZW5FeGNlcHRpb24gZXh0ZW5kcyBTVFNTZXJ2aWNlRXhjZXB0aW9uXzEuU1RTU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiRXhwaXJlZFRyYWRlSW5Ub2tlbkV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkV4cGlyZWRUcmFkZUluVG9rZW5FeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgRXhwaXJlZFRyYWRlSW5Ub2tlbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXhwaXJlZFRyYWRlSW5Ub2tlbkV4Y2VwdGlvbiA9IEV4cGlyZWRUcmFkZUluVG9rZW5FeGNlcHRpb247XG5jbGFzcyBKV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uIGV4dGVuZHMgU1RTU2VydmljZUV4Y2VwdGlvbl8xLlNUU1NlcnZpY2VFeGNlcHRpb24ge1xuICAgIG5hbWUgPSBcIkpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb25cIjtcbiAgICAkZmF1bHQgPSBcImNsaWVudFwiO1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogXCJKV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uXCIsXG4gICAgICAgICAgICAkZmF1bHQ6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb24ucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb24gPSBKV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uO1xuY2xhc3MgT3V0Ym91bmRXZWJJZGVudGl0eUZlZGVyYXRpb25EaXNhYmxlZEV4Y2VwdGlvbiBleHRlbmRzIFNUU1NlcnZpY2VFeGNlcHRpb25fMS5TVFNTZXJ2aWNlRXhjZXB0aW9uIHtcbiAgICBuYW1lID0gXCJPdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uXCI7XG4gICAgJGZhdWx0ID0gXCJjbGllbnRcIjtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3V0Ym91bmRXZWJJZGVudGl0eUZlZGVyYXRpb25EaXNhYmxlZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgJGZhdWx0OiBcImNsaWVudFwiLFxuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBPdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5PdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uID0gT3V0Ym91bmRXZWJJZGVudGl0eUZlZGVyYXRpb25EaXNhYmxlZEV4Y2VwdGlvbjtcbmNsYXNzIFNlc3Npb25EdXJhdGlvbkVzY2FsYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBTVFNTZXJ2aWNlRXhjZXB0aW9uXzEuU1RTU2VydmljZUV4Y2VwdGlvbiB7XG4gICAgbmFtZSA9IFwiU2Vzc2lvbkR1cmF0aW9uRXNjYWxhdGlvbkV4Y2VwdGlvblwiO1xuICAgICRmYXVsdCA9IFwiY2xpZW50XCI7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBcIlNlc3Npb25EdXJhdGlvbkVzY2FsYXRpb25FeGNlcHRpb25cIixcbiAgICAgICAgICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2Vzc2lvbkR1cmF0aW9uRXNjYWxhdGlvbkV4Y2VwdGlvbi5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2Vzc2lvbkR1cmF0aW9uRXNjYWxhdGlvbkV4Y2VwdGlvbiA9IFNlc3Npb25EdXJhdGlvbkVzY2FsYXRpb25FeGNlcHRpb247XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuJCA9IGV4cG9ydHMuR2V0Q2FsbGVySWRlbnRpdHkkID0gZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvJCA9IGV4cG9ydHMuRGVjb2RlQXV0aG9yaXphdGlvbk1lc3NhZ2UkID0gZXhwb3J0cy5Bc3N1bWVSb290JCA9IGV4cG9ydHMuQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eSQgPSBleHBvcnRzLkFzc3VtZVJvbGVXaXRoU0FNTCQgPSBleHBvcnRzLkFzc3VtZVJvbGUkID0gZXhwb3J0cy5UYWckID0gZXhwb3J0cy5Qcm92aWRlZENvbnRleHQkID0gZXhwb3J0cy5Qb2xpY3lEZXNjcmlwdG9yVHlwZSQgPSBleHBvcnRzLkdldFdlYklkZW50aXR5VG9rZW5SZXNwb25zZSQgPSBleHBvcnRzLkdldFdlYklkZW50aXR5VG9rZW5SZXF1ZXN0JCA9IGV4cG9ydHMuR2V0U2Vzc2lvblRva2VuUmVzcG9uc2UkID0gZXhwb3J0cy5HZXRTZXNzaW9uVG9rZW5SZXF1ZXN0JCA9IGV4cG9ydHMuR2V0RmVkZXJhdGlvblRva2VuUmVzcG9uc2UkID0gZXhwb3J0cy5HZXRGZWRlcmF0aW9uVG9rZW5SZXF1ZXN0JCA9IGV4cG9ydHMuR2V0RGVsZWdhdGVkQWNjZXNzVG9rZW5SZXNwb25zZSQgPSBleHBvcnRzLkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuUmVxdWVzdCQgPSBleHBvcnRzLkdldENhbGxlcklkZW50aXR5UmVzcG9uc2UkID0gZXhwb3J0cy5HZXRDYWxsZXJJZGVudGl0eVJlcXVlc3QkID0gZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvUmVzcG9uc2UkID0gZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvUmVxdWVzdCQgPSBleHBvcnRzLkZlZGVyYXRlZFVzZXIkID0gZXhwb3J0cy5EZWNvZGVBdXRob3JpemF0aW9uTWVzc2FnZVJlc3BvbnNlJCA9IGV4cG9ydHMuRGVjb2RlQXV0aG9yaXphdGlvbk1lc3NhZ2VSZXF1ZXN0JCA9IGV4cG9ydHMuQ3JlZGVudGlhbHMkID0gZXhwb3J0cy5Bc3N1bWVSb290UmVzcG9uc2UkID0gZXhwb3J0cy5Bc3N1bWVSb290UmVxdWVzdCQgPSBleHBvcnRzLkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlSZXNwb25zZSQgPSBleHBvcnRzLkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlSZXF1ZXN0JCA9IGV4cG9ydHMuQXNzdW1lUm9sZVdpdGhTQU1MUmVzcG9uc2UkID0gZXhwb3J0cy5Bc3N1bWVSb2xlV2l0aFNBTUxSZXF1ZXN0JCA9IGV4cG9ydHMuQXNzdW1lUm9sZVJlc3BvbnNlJCA9IGV4cG9ydHMuQXNzdW1lUm9sZVJlcXVlc3QkID0gZXhwb3J0cy5Bc3N1bWVkUm9sZVVzZXIkID0gZXhwb3J0cy5lcnJvclR5cGVSZWdpc3RyaWVzID0gZXhwb3J0cy5TZXNzaW9uRHVyYXRpb25Fc2NhbGF0aW9uRXhjZXB0aW9uJCA9IGV4cG9ydHMuUmVnaW9uRGlzYWJsZWRFeGNlcHRpb24kID0gZXhwb3J0cy5QYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvbiQgPSBleHBvcnRzLk91dGJvdW5kV2ViSWRlbnRpdHlGZWRlcmF0aW9uRGlzYWJsZWRFeGNlcHRpb24kID0gZXhwb3J0cy5NYWxmb3JtZWRQb2xpY3lEb2N1bWVudEV4Y2VwdGlvbiQgPSBleHBvcnRzLkpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb24kID0gZXhwb3J0cy5JbnZhbGlkSWRlbnRpdHlUb2tlbkV4Y2VwdGlvbiQgPSBleHBvcnRzLkludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvbiQgPSBleHBvcnRzLklEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24kID0gZXhwb3J0cy5JRFBDb21tdW5pY2F0aW9uRXJyb3JFeGNlcHRpb24kID0gZXhwb3J0cy5FeHBpcmVkVHJhZGVJblRva2VuRXhjZXB0aW9uJCA9IGV4cG9ydHMuRXhwaXJlZFRva2VuRXhjZXB0aW9uJCA9IGV4cG9ydHMuU1RTU2VydmljZUV4Y2VwdGlvbiQgPSB2b2lkIDA7XG5leHBvcnRzLkdldFdlYklkZW50aXR5VG9rZW4kID0gZXhwb3J0cy5HZXRTZXNzaW9uVG9rZW4kID0gZXhwb3J0cy5HZXRGZWRlcmF0aW9uVG9rZW4kID0gdm9pZCAwO1xuY29uc3QgX0EgPSBcIkFyblwiO1xuY29uc3QgX0FLSSA9IFwiQWNjZXNzS2V5SWRcIjtcbmNvbnN0IF9BUCA9IFwiQXNzdW1lZFByaW5jaXBhbFwiO1xuY29uc3QgX0FSID0gXCJBc3N1bWVSb2xlXCI7XG5jb25zdCBfQVJJID0gXCJBc3N1bWVkUm9sZUlkXCI7XG5jb25zdCBfQVJSID0gXCJBc3N1bWVSb2xlUmVxdWVzdFwiO1xuY29uc3QgX0FSUnMgPSBcIkFzc3VtZVJvbGVSZXNwb25zZVwiO1xuY29uc3QgX0FSUnNzID0gXCJBc3N1bWVSb290UmVxdWVzdFwiO1xuY29uc3QgX0FSUnNzdSA9IFwiQXNzdW1lUm9vdFJlc3BvbnNlXCI7XG5jb25zdCBfQVJVID0gXCJBc3N1bWVkUm9sZVVzZXJcIjtcbmNvbnN0IF9BUldTQU1MID0gXCJBc3N1bWVSb2xlV2l0aFNBTUxcIjtcbmNvbnN0IF9BUldTQU1MUiA9IFwiQXNzdW1lUm9sZVdpdGhTQU1MUmVxdWVzdFwiO1xuY29uc3QgX0FSV1NBTUxScyA9IFwiQXNzdW1lUm9sZVdpdGhTQU1MUmVzcG9uc2VcIjtcbmNvbnN0IF9BUldXSSA9IFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVwiO1xuY29uc3QgX0FSV1dJUiA9IFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eVJlcXVlc3RcIjtcbmNvbnN0IF9BUldXSVJzID0gXCJBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UmVzcG9uc2VcIjtcbmNvbnN0IF9BUnMgPSBcIkFzc3VtZVJvb3RcIjtcbmNvbnN0IF9BYyA9IFwiQWNjb3VudFwiO1xuY29uc3QgX0F1ID0gXCJBdWRpZW5jZVwiO1xuY29uc3QgX0MgPSBcIkNyZWRlbnRpYWxzXCI7XG5jb25zdCBfQ0EgPSBcIkNvbnRleHRBc3NlcnRpb25cIjtcbmNvbnN0IF9EQU0gPSBcIkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlXCI7XG5jb25zdCBfREFNUiA9IFwiRGVjb2RlQXV0aG9yaXphdGlvbk1lc3NhZ2VSZXF1ZXN0XCI7XG5jb25zdCBfREFNUmUgPSBcIkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlUmVzcG9uc2VcIjtcbmNvbnN0IF9ETSA9IFwiRGVjb2RlZE1lc3NhZ2VcIjtcbmNvbnN0IF9EUyA9IFwiRHVyYXRpb25TZWNvbmRzXCI7XG5jb25zdCBfRSA9IFwiRXhwaXJhdGlvblwiO1xuY29uc3QgX0VJID0gXCJFeHRlcm5hbElkXCI7XG5jb25zdCBfRU0gPSBcIkVuY29kZWRNZXNzYWdlXCI7XG5jb25zdCBfRVRFID0gXCJFeHBpcmVkVG9rZW5FeGNlcHRpb25cIjtcbmNvbnN0IF9FVElURSA9IFwiRXhwaXJlZFRyYWRlSW5Ub2tlbkV4Y2VwdGlvblwiO1xuY29uc3QgX0ZVID0gXCJGZWRlcmF0ZWRVc2VyXCI7XG5jb25zdCBfRlVJID0gXCJGZWRlcmF0ZWRVc2VySWRcIjtcbmNvbnN0IF9HQUtJID0gXCJHZXRBY2Nlc3NLZXlJbmZvXCI7XG5jb25zdCBfR0FLSVIgPSBcIkdldEFjY2Vzc0tleUluZm9SZXF1ZXN0XCI7XG5jb25zdCBfR0FLSVJlID0gXCJHZXRBY2Nlc3NLZXlJbmZvUmVzcG9uc2VcIjtcbmNvbnN0IF9HQ0kgPSBcIkdldENhbGxlcklkZW50aXR5XCI7XG5jb25zdCBfR0NJUiA9IFwiR2V0Q2FsbGVySWRlbnRpdHlSZXF1ZXN0XCI7XG5jb25zdCBfR0NJUmUgPSBcIkdldENhbGxlcklkZW50aXR5UmVzcG9uc2VcIjtcbmNvbnN0IF9HREFUID0gXCJHZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlblwiO1xuY29uc3QgX0dEQVRSID0gXCJHZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlblJlcXVlc3RcIjtcbmNvbnN0IF9HREFUUmUgPSBcIkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuUmVzcG9uc2VcIjtcbmNvbnN0IF9HRlQgPSBcIkdldEZlZGVyYXRpb25Ub2tlblwiO1xuY29uc3QgX0dGVFIgPSBcIkdldEZlZGVyYXRpb25Ub2tlblJlcXVlc3RcIjtcbmNvbnN0IF9HRlRSZSA9IFwiR2V0RmVkZXJhdGlvblRva2VuUmVzcG9uc2VcIjtcbmNvbnN0IF9HU1QgPSBcIkdldFNlc3Npb25Ub2tlblwiO1xuY29uc3QgX0dTVFIgPSBcIkdldFNlc3Npb25Ub2tlblJlcXVlc3RcIjtcbmNvbnN0IF9HU1RSZSA9IFwiR2V0U2Vzc2lvblRva2VuUmVzcG9uc2VcIjtcbmNvbnN0IF9HV0lUID0gXCJHZXRXZWJJZGVudGl0eVRva2VuXCI7XG5jb25zdCBfR1dJVFIgPSBcIkdldFdlYklkZW50aXR5VG9rZW5SZXF1ZXN0XCI7XG5jb25zdCBfR1dJVFJlID0gXCJHZXRXZWJJZGVudGl0eVRva2VuUmVzcG9uc2VcIjtcbmNvbnN0IF9JID0gXCJJc3N1ZXJcIjtcbmNvbnN0IF9JQU1FID0gXCJJbnZhbGlkQXV0aG9yaXphdGlvbk1lc3NhZ2VFeGNlcHRpb25cIjtcbmNvbnN0IF9JRFBDRUUgPSBcIklEUENvbW11bmljYXRpb25FcnJvckV4Y2VwdGlvblwiO1xuY29uc3QgX0lEUFJDRSA9IFwiSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvblwiO1xuY29uc3QgX0lJVEUgPSBcIkludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uXCI7XG5jb25zdCBfSldUUFNFRSA9IFwiSldUUGF5bG9hZFNpemVFeGNlZWRlZEV4Y2VwdGlvblwiO1xuY29uc3QgX0sgPSBcIktleVwiO1xuY29uc3QgX01QREUgPSBcIk1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uXCI7XG5jb25zdCBfTiA9IFwiTmFtZVwiO1xuY29uc3QgX05RID0gXCJOYW1lUXVhbGlmaWVyXCI7XG5jb25zdCBfT1dJRkRFID0gXCJPdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uXCI7XG5jb25zdCBfUCA9IFwiUG9saWN5XCI7XG5jb25zdCBfUEEgPSBcIlBvbGljeUFybnNcIjtcbmNvbnN0IF9QQXIgPSBcIlByaW5jaXBhbEFyblwiO1xuY29uc3QgX1BBcm8gPSBcIlByb3ZpZGVyQXJuXCI7XG5jb25zdCBfUEMgPSBcIlByb3ZpZGVkQ29udGV4dHNcIjtcbmNvbnN0IF9QQ0xUID0gXCJQcm92aWRlZENvbnRleHRzTGlzdFR5cGVcIjtcbmNvbnN0IF9QQ3IgPSBcIlByb3ZpZGVkQ29udGV4dFwiO1xuY29uc3QgX1BEVCA9IFwiUG9saWN5RGVzY3JpcHRvclR5cGVcIjtcbmNvbnN0IF9QSSA9IFwiUHJvdmlkZXJJZFwiO1xuY29uc3QgX1BQUyA9IFwiUGFja2VkUG9saWN5U2l6ZVwiO1xuY29uc3QgX1BQVExFID0gXCJQYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvblwiO1xuY29uc3QgX1ByID0gXCJQcm92aWRlclwiO1xuY29uc3QgX1JBID0gXCJSb2xlQXJuXCI7XG5jb25zdCBfUkRFID0gXCJSZWdpb25EaXNhYmxlZEV4Y2VwdGlvblwiO1xuY29uc3QgX1JTTiA9IFwiUm9sZVNlc3Npb25OYW1lXCI7XG5jb25zdCBfUyA9IFwiU3ViamVjdFwiO1xuY29uc3QgX1NBID0gXCJTaWduaW5nQWxnb3JpdGhtXCI7XG5jb25zdCBfU0FLID0gXCJTZWNyZXRBY2Nlc3NLZXlcIjtcbmNvbnN0IF9TQU1MQSA9IFwiU0FNTEFzc2VydGlvblwiO1xuY29uc3QgX1NBTUxBVCA9IFwiU0FNTEFzc2VydGlvblR5cGVcIjtcbmNvbnN0IF9TREVFID0gXCJTZXNzaW9uRHVyYXRpb25Fc2NhbGF0aW9uRXhjZXB0aW9uXCI7XG5jb25zdCBfU0ZXSVQgPSBcIlN1YmplY3RGcm9tV2ViSWRlbnRpdHlUb2tlblwiO1xuY29uc3QgX1NJID0gXCJTb3VyY2VJZGVudGl0eVwiO1xuY29uc3QgX1NOID0gXCJTZXJpYWxOdW1iZXJcIjtcbmNvbnN0IF9TVCA9IFwiU3ViamVjdFR5cGVcIjtcbmNvbnN0IF9TVGUgPSBcIlNlc3Npb25Ub2tlblwiO1xuY29uc3QgX1QgPSBcIlRhZ3NcIjtcbmNvbnN0IF9UQyA9IFwiVG9rZW5Db2RlXCI7XG5jb25zdCBfVElUID0gXCJUcmFkZUluVG9rZW5cIjtcbmNvbnN0IF9UUCA9IFwiVGFyZ2V0UHJpbmNpcGFsXCI7XG5jb25zdCBfVFBBID0gXCJUYXNrUG9saWN5QXJuXCI7XG5jb25zdCBfVFRLID0gXCJUcmFuc2l0aXZlVGFnS2V5c1wiO1xuY29uc3QgX1RhID0gXCJUYWdcIjtcbmNvbnN0IF9VSSA9IFwiVXNlcklkXCI7XG5jb25zdCBfViA9IFwiVmFsdWVcIjtcbmNvbnN0IF9XSVQgPSBcIldlYklkZW50aXR5VG9rZW5cIjtcbmNvbnN0IF9hID0gXCJhcm5cIjtcbmNvbnN0IF9hS1NUID0gXCJhY2Nlc3NLZXlTZWNyZXRUeXBlXCI7XG5jb25zdCBfYVFFID0gXCJhd3NRdWVyeUVycm9yXCI7XG5jb25zdCBfYyA9IFwiY2xpZW50XCI7XG5jb25zdCBfY1RUID0gXCJjbGllbnRUb2tlblR5cGVcIjtcbmNvbnN0IF9lID0gXCJlcnJvclwiO1xuY29uc3QgX2hFID0gXCJodHRwRXJyb3JcIjtcbmNvbnN0IF9tID0gXCJtZXNzYWdlXCI7XG5jb25zdCBfcERMVCA9IFwicG9saWN5RGVzY3JpcHRvckxpc3RUeXBlXCI7XG5jb25zdCBfcyA9IFwic21pdGh5LnRzLnNkay5zeW50aGV0aWMuY29tLmFtYXpvbmF3cy5zdHNcIjtcbmNvbnN0IF90SVRUID0gXCJ0cmFkZUluVG9rZW5UeXBlXCI7XG5jb25zdCBfdExUID0gXCJ0YWdMaXN0VHlwZVwiO1xuY29uc3QgX3dJVFQgPSBcIndlYklkZW50aXR5VG9rZW5UeXBlXCI7XG5jb25zdCBuMCA9IFwiY29tLmFtYXpvbmF3cy5zdHNcIjtcbmNvbnN0IHNjaGVtYV8xID0gcmVxdWlyZShcIkBzbWl0aHkvY29yZS9zY2hlbWFcIik7XG5jb25zdCBlcnJvcnNfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZXJyb3JzXCIpO1xuY29uc3QgU1RTU2VydmljZUV4Y2VwdGlvbl8xID0gcmVxdWlyZShcIi4uL21vZGVscy9TVFNTZXJ2aWNlRXhjZXB0aW9uXCIpO1xuY29uc3QgX3NfcmVnaXN0cnkgPSBzY2hlbWFfMS5UeXBlUmVnaXN0cnkuZm9yKF9zKTtcbmV4cG9ydHMuU1RTU2VydmljZUV4Y2VwdGlvbiQgPSBbLTMsIF9zLCBcIlNUU1NlcnZpY2VFeGNlcHRpb25cIiwgMCwgW10sIFtdXTtcbl9zX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5TVFNTZXJ2aWNlRXhjZXB0aW9uJCwgU1RTU2VydmljZUV4Y2VwdGlvbl8xLlNUU1NlcnZpY2VFeGNlcHRpb24pO1xuY29uc3QgbjBfcmVnaXN0cnkgPSBzY2hlbWFfMS5UeXBlUmVnaXN0cnkuZm9yKG4wKTtcbmV4cG9ydHMuRXhwaXJlZFRva2VuRXhjZXB0aW9uJCA9IFstMywgbjAsIF9FVEUsXG4gICAgeyBbX2FRRV06IFtgRXhwaXJlZFRva2VuRXhjZXB0aW9uYCwgNDAwXSwgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5FeHBpcmVkVG9rZW5FeGNlcHRpb24kLCBlcnJvcnNfMS5FeHBpcmVkVG9rZW5FeGNlcHRpb24pO1xuZXhwb3J0cy5FeHBpcmVkVHJhZGVJblRva2VuRXhjZXB0aW9uJCA9IFstMywgbjAsIF9FVElURSxcbiAgICB7IFtfYVFFXTogW2BFeHBpcmVkVHJhZGVJblRva2VuRXhjZXB0aW9uYCwgNDAwXSwgW19lXTogX2MsIFtfaEVdOiA0MDAgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5FeHBpcmVkVHJhZGVJblRva2VuRXhjZXB0aW9uJCwgZXJyb3JzXzEuRXhwaXJlZFRyYWRlSW5Ub2tlbkV4Y2VwdGlvbik7XG5leHBvcnRzLklEUENvbW11bmljYXRpb25FcnJvckV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfSURQQ0VFLFxuICAgIHsgW19hUUVdOiBbYElEUENvbW11bmljYXRpb25FcnJvcmAsIDQwMF0sIFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF1cbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKGV4cG9ydHMuSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uJCwgZXJyb3JzXzEuSURQQ29tbXVuaWNhdGlvbkVycm9yRXhjZXB0aW9uKTtcbmV4cG9ydHMuSURQUmVqZWN0ZWRDbGFpbUV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfSURQUkNFLFxuICAgIHsgW19hUUVdOiBbYElEUFJlamVjdGVkQ2xhaW1gLCA0MDNdLCBbX2VdOiBfYywgW19oRV06IDQwMyB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLklEUFJlamVjdGVkQ2xhaW1FeGNlcHRpb24kLCBlcnJvcnNfMS5JRFBSZWplY3RlZENsYWltRXhjZXB0aW9uKTtcbmV4cG9ydHMuSW52YWxpZEF1dGhvcml6YXRpb25NZXNzYWdlRXhjZXB0aW9uJCA9IFstMywgbjAsIF9JQU1FLFxuICAgIHsgW19hUUVdOiBbYEludmFsaWRBdXRob3JpemF0aW9uTWVzc2FnZUV4Y2VwdGlvbmAsIDQwMF0sIFtfZV06IF9jLCBbX2hFXTogNDAwIH0sXG4gICAgW19tXSxcbiAgICBbMF1cbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKGV4cG9ydHMuSW52YWxpZEF1dGhvcml6YXRpb25NZXNzYWdlRXhjZXB0aW9uJCwgZXJyb3JzXzEuSW52YWxpZEF1dGhvcml6YXRpb25NZXNzYWdlRXhjZXB0aW9uKTtcbmV4cG9ydHMuSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24kID0gWy0zLCBuMCwgX0lJVEUsXG4gICAgeyBbX2FRRV06IFtgSW52YWxpZElkZW50aXR5VG9rZW5gLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLkludmFsaWRJZGVudGl0eVRva2VuRXhjZXB0aW9uJCwgZXJyb3JzXzEuSW52YWxpZElkZW50aXR5VG9rZW5FeGNlcHRpb24pO1xuZXhwb3J0cy5KV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9KV1RQU0VFLFxuICAgIHsgW19hUUVdOiBbYEpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb25gLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLkpXVFBheWxvYWRTaXplRXhjZWVkZWRFeGNlcHRpb24kLCBlcnJvcnNfMS5KV1RQYXlsb2FkU2l6ZUV4Y2VlZGVkRXhjZXB0aW9uKTtcbmV4cG9ydHMuTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb24kID0gWy0zLCBuMCwgX01QREUsXG4gICAgeyBbX2FRRV06IFtgTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRgLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLk1hbGZvcm1lZFBvbGljeURvY3VtZW50RXhjZXB0aW9uJCwgZXJyb3JzXzEuTWFsZm9ybWVkUG9saWN5RG9jdW1lbnRFeGNlcHRpb24pO1xuZXhwb3J0cy5PdXRib3VuZFdlYklkZW50aXR5RmVkZXJhdGlvbkRpc2FibGVkRXhjZXB0aW9uJCA9IFstMywgbjAsIF9PV0lGREUsXG4gICAgeyBbX2FRRV06IFtgT3V0Ym91bmRXZWJJZGVudGl0eUZlZGVyYXRpb25EaXNhYmxlZEV4Y2VwdGlvbmAsIDQwM10sIFtfZV06IF9jLCBbX2hFXTogNDAzIH0sXG4gICAgW19tXSxcbiAgICBbMF1cbl07XG5uMF9yZWdpc3RyeS5yZWdpc3RlckVycm9yKGV4cG9ydHMuT3V0Ym91bmRXZWJJZGVudGl0eUZlZGVyYXRpb25EaXNhYmxlZEV4Y2VwdGlvbiQsIGVycm9yc18xLk91dGJvdW5kV2ViSWRlbnRpdHlGZWRlcmF0aW9uRGlzYWJsZWRFeGNlcHRpb24pO1xuZXhwb3J0cy5QYWNrZWRQb2xpY3lUb29MYXJnZUV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfUFBUTEUsXG4gICAgeyBbX2FRRV06IFtgUGFja2VkUG9saWN5VG9vTGFyZ2VgLCA0MDBdLCBbX2VdOiBfYywgW19oRV06IDQwMCB9LFxuICAgIFtfbV0sXG4gICAgWzBdXG5dO1xubjBfcmVnaXN0cnkucmVnaXN0ZXJFcnJvcihleHBvcnRzLlBhY2tlZFBvbGljeVRvb0xhcmdlRXhjZXB0aW9uJCwgZXJyb3JzXzEuUGFja2VkUG9saWN5VG9vTGFyZ2VFeGNlcHRpb24pO1xuZXhwb3J0cy5SZWdpb25EaXNhYmxlZEV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfUkRFLFxuICAgIHsgW19hUUVdOiBbYFJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uYCwgNDAzXSwgW19lXTogX2MsIFtfaEVdOiA0MDMgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5SZWdpb25EaXNhYmxlZEV4Y2VwdGlvbiQsIGVycm9yc18xLlJlZ2lvbkRpc2FibGVkRXhjZXB0aW9uKTtcbmV4cG9ydHMuU2Vzc2lvbkR1cmF0aW9uRXNjYWxhdGlvbkV4Y2VwdGlvbiQgPSBbLTMsIG4wLCBfU0RFRSxcbiAgICB7IFtfYVFFXTogW2BTZXNzaW9uRHVyYXRpb25Fc2NhbGF0aW9uRXhjZXB0aW9uYCwgNDAzXSwgW19lXTogX2MsIFtfaEVdOiA0MDMgfSxcbiAgICBbX21dLFxuICAgIFswXVxuXTtcbm4wX3JlZ2lzdHJ5LnJlZ2lzdGVyRXJyb3IoZXhwb3J0cy5TZXNzaW9uRHVyYXRpb25Fc2NhbGF0aW9uRXhjZXB0aW9uJCwgZXJyb3JzXzEuU2Vzc2lvbkR1cmF0aW9uRXNjYWxhdGlvbkV4Y2VwdGlvbik7XG5leHBvcnRzLmVycm9yVHlwZVJlZ2lzdHJpZXMgPSBbXG4gICAgX3NfcmVnaXN0cnksXG4gICAgbjBfcmVnaXN0cnksXG5dO1xudmFyIGFjY2Vzc0tleVNlY3JldFR5cGUgPSBbMCwgbjAsIF9hS1NULCA4LCAwXTtcbnZhciBjbGllbnRUb2tlblR5cGUgPSBbMCwgbjAsIF9jVFQsIDgsIDBdO1xudmFyIFNBTUxBc3NlcnRpb25UeXBlID0gWzAsIG4wLCBfU0FNTEFULCA4LCAwXTtcbnZhciB0cmFkZUluVG9rZW5UeXBlID0gWzAsIG4wLCBfdElUVCwgOCwgMF07XG52YXIgd2ViSWRlbnRpdHlUb2tlblR5cGUgPSBbMCwgbjAsIF93SVRULCA4LCAwXTtcbmV4cG9ydHMuQXNzdW1lZFJvbGVVc2VyJCA9IFszLCBuMCwgX0FSVSxcbiAgICAwLFxuICAgIFtfQVJJLCBfQV0sXG4gICAgWzAsIDBdLCAyXG5dO1xuZXhwb3J0cy5Bc3N1bWVSb2xlUmVxdWVzdCQgPSBbMywgbjAsIF9BUlIsXG4gICAgMCxcbiAgICBbX1JBLCBfUlNOLCBfUEEsIF9QLCBfRFMsIF9ULCBfVFRLLCBfRUksIF9TTiwgX1RDLCBfU0ksIF9QQ10sXG4gICAgWzAsIDAsICgpID0+IHBvbGljeURlc2NyaXB0b3JMaXN0VHlwZSwgMCwgMSwgKCkgPT4gdGFnTGlzdFR5cGUsIDY0IHwgMCwgMCwgMCwgMCwgMCwgKCkgPT4gUHJvdmlkZWRDb250ZXh0c0xpc3RUeXBlXSwgMlxuXTtcbmV4cG9ydHMuQXNzdW1lUm9sZVJlc3BvbnNlJCA9IFszLCBuMCwgX0FSUnMsXG4gICAgMCxcbiAgICBbX0MsIF9BUlUsIF9QUFMsIF9TSV0sXG4gICAgW1soKSA9PiBleHBvcnRzLkNyZWRlbnRpYWxzJCwgMF0sICgpID0+IGV4cG9ydHMuQXNzdW1lZFJvbGVVc2VyJCwgMSwgMF1cbl07XG5leHBvcnRzLkFzc3VtZVJvbGVXaXRoU0FNTFJlcXVlc3QkID0gWzMsIG4wLCBfQVJXU0FNTFIsXG4gICAgMCxcbiAgICBbX1JBLCBfUEFyLCBfU0FNTEEsIF9QQSwgX1AsIF9EU10sXG4gICAgWzAsIDAsIFsoKSA9PiBTQU1MQXNzZXJ0aW9uVHlwZSwgMF0sICgpID0+IHBvbGljeURlc2NyaXB0b3JMaXN0VHlwZSwgMCwgMV0sIDNcbl07XG5leHBvcnRzLkFzc3VtZVJvbGVXaXRoU0FNTFJlc3BvbnNlJCA9IFszLCBuMCwgX0FSV1NBTUxScyxcbiAgICAwLFxuICAgIFtfQywgX0FSVSwgX1BQUywgX1MsIF9TVCwgX0ksIF9BdSwgX05RLCBfU0ldLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5DcmVkZW50aWFscyQsIDBdLCAoKSA9PiBleHBvcnRzLkFzc3VtZWRSb2xlVXNlciQsIDEsIDAsIDAsIDAsIDAsIDAsIDBdXG5dO1xuZXhwb3J0cy5Bc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UmVxdWVzdCQgPSBbMywgbjAsIF9BUldXSVIsXG4gICAgMCxcbiAgICBbX1JBLCBfUlNOLCBfV0lULCBfUEksIF9QQSwgX1AsIF9EU10sXG4gICAgWzAsIDAsIFsoKSA9PiBjbGllbnRUb2tlblR5cGUsIDBdLCAwLCAoKSA9PiBwb2xpY3lEZXNjcmlwdG9yTGlzdFR5cGUsIDAsIDFdLCAzXG5dO1xuZXhwb3J0cy5Bc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UmVzcG9uc2UkID0gWzMsIG4wLCBfQVJXV0lScyxcbiAgICAwLFxuICAgIFtfQywgX1NGV0lULCBfQVJVLCBfUFBTLCBfUHIsIF9BdSwgX1NJXSxcbiAgICBbWygpID0+IGV4cG9ydHMuQ3JlZGVudGlhbHMkLCAwXSwgMCwgKCkgPT4gZXhwb3J0cy5Bc3N1bWVkUm9sZVVzZXIkLCAxLCAwLCAwLCAwXVxuXTtcbmV4cG9ydHMuQXNzdW1lUm9vdFJlcXVlc3QkID0gWzMsIG4wLCBfQVJSc3MsXG4gICAgMCxcbiAgICBbX1RQLCBfVFBBLCBfRFNdLFxuICAgIFswLCAoKSA9PiBleHBvcnRzLlBvbGljeURlc2NyaXB0b3JUeXBlJCwgMV0sIDJcbl07XG5leHBvcnRzLkFzc3VtZVJvb3RSZXNwb25zZSQgPSBbMywgbjAsIF9BUlJzc3UsXG4gICAgMCxcbiAgICBbX0MsIF9TSV0sXG4gICAgW1soKSA9PiBleHBvcnRzLkNyZWRlbnRpYWxzJCwgMF0sIDBdXG5dO1xuZXhwb3J0cy5DcmVkZW50aWFscyQgPSBbMywgbjAsIF9DLFxuICAgIDAsXG4gICAgW19BS0ksIF9TQUssIF9TVGUsIF9FXSxcbiAgICBbMCwgWygpID0+IGFjY2Vzc0tleVNlY3JldFR5cGUsIDBdLCAwLCA0XSwgNFxuXTtcbmV4cG9ydHMuRGVjb2RlQXV0aG9yaXphdGlvbk1lc3NhZ2VSZXF1ZXN0JCA9IFszLCBuMCwgX0RBTVIsXG4gICAgMCxcbiAgICBbX0VNXSxcbiAgICBbMF0sIDFcbl07XG5leHBvcnRzLkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlUmVzcG9uc2UkID0gWzMsIG4wLCBfREFNUmUsXG4gICAgMCxcbiAgICBbX0RNXSxcbiAgICBbMF1cbl07XG5leHBvcnRzLkZlZGVyYXRlZFVzZXIkID0gWzMsIG4wLCBfRlUsXG4gICAgMCxcbiAgICBbX0ZVSSwgX0FdLFxuICAgIFswLCAwXSwgMlxuXTtcbmV4cG9ydHMuR2V0QWNjZXNzS2V5SW5mb1JlcXVlc3QkID0gWzMsIG4wLCBfR0FLSVIsXG4gICAgMCxcbiAgICBbX0FLSV0sXG4gICAgWzBdLCAxXG5dO1xuZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvUmVzcG9uc2UkID0gWzMsIG4wLCBfR0FLSVJlLFxuICAgIDAsXG4gICAgW19BY10sXG4gICAgWzBdXG5dO1xuZXhwb3J0cy5HZXRDYWxsZXJJZGVudGl0eVJlcXVlc3QkID0gWzMsIG4wLCBfR0NJUixcbiAgICAwLFxuICAgIFtdLFxuICAgIFtdXG5dO1xuZXhwb3J0cy5HZXRDYWxsZXJJZGVudGl0eVJlc3BvbnNlJCA9IFszLCBuMCwgX0dDSVJlLFxuICAgIDAsXG4gICAgW19VSSwgX0FjLCBfQV0sXG4gICAgWzAsIDAsIDBdXG5dO1xuZXhwb3J0cy5HZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlblJlcXVlc3QkID0gWzMsIG4wLCBfR0RBVFIsXG4gICAgMCxcbiAgICBbX1RJVF0sXG4gICAgW1soKSA9PiB0cmFkZUluVG9rZW5UeXBlLCAwXV0sIDFcbl07XG5leHBvcnRzLkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuUmVzcG9uc2UkID0gWzMsIG4wLCBfR0RBVFJlLFxuICAgIDAsXG4gICAgW19DLCBfUFBTLCBfQVBdLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5DcmVkZW50aWFscyQsIDBdLCAxLCAwXVxuXTtcbmV4cG9ydHMuR2V0RmVkZXJhdGlvblRva2VuUmVxdWVzdCQgPSBbMywgbjAsIF9HRlRSLFxuICAgIDAsXG4gICAgW19OLCBfUCwgX1BBLCBfRFMsIF9UXSxcbiAgICBbMCwgMCwgKCkgPT4gcG9saWN5RGVzY3JpcHRvckxpc3RUeXBlLCAxLCAoKSA9PiB0YWdMaXN0VHlwZV0sIDFcbl07XG5leHBvcnRzLkdldEZlZGVyYXRpb25Ub2tlblJlc3BvbnNlJCA9IFszLCBuMCwgX0dGVFJlLFxuICAgIDAsXG4gICAgW19DLCBfRlUsIF9QUFNdLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5DcmVkZW50aWFscyQsIDBdLCAoKSA9PiBleHBvcnRzLkZlZGVyYXRlZFVzZXIkLCAxXVxuXTtcbmV4cG9ydHMuR2V0U2Vzc2lvblRva2VuUmVxdWVzdCQgPSBbMywgbjAsIF9HU1RSLFxuICAgIDAsXG4gICAgW19EUywgX1NOLCBfVENdLFxuICAgIFsxLCAwLCAwXVxuXTtcbmV4cG9ydHMuR2V0U2Vzc2lvblRva2VuUmVzcG9uc2UkID0gWzMsIG4wLCBfR1NUUmUsXG4gICAgMCxcbiAgICBbX0NdLFxuICAgIFtbKCkgPT4gZXhwb3J0cy5DcmVkZW50aWFscyQsIDBdXVxuXTtcbmV4cG9ydHMuR2V0V2ViSWRlbnRpdHlUb2tlblJlcXVlc3QkID0gWzMsIG4wLCBfR1dJVFIsXG4gICAgMCxcbiAgICBbX0F1LCBfU0EsIF9EUywgX1RdLFxuICAgIFs2NCB8IDAsIDAsIDEsICgpID0+IHRhZ0xpc3RUeXBlXSwgMlxuXTtcbmV4cG9ydHMuR2V0V2ViSWRlbnRpdHlUb2tlblJlc3BvbnNlJCA9IFszLCBuMCwgX0dXSVRSZSxcbiAgICAwLFxuICAgIFtfV0lULCBfRV0sXG4gICAgW1soKSA9PiB3ZWJJZGVudGl0eVRva2VuVHlwZSwgMF0sIDRdXG5dO1xuZXhwb3J0cy5Qb2xpY3lEZXNjcmlwdG9yVHlwZSQgPSBbMywgbjAsIF9QRFQsXG4gICAgMCxcbiAgICBbX2FdLFxuICAgIFswXVxuXTtcbmV4cG9ydHMuUHJvdmlkZWRDb250ZXh0JCA9IFszLCBuMCwgX1BDcixcbiAgICAwLFxuICAgIFtfUEFybywgX0NBXSxcbiAgICBbMCwgMF1cbl07XG5leHBvcnRzLlRhZyQgPSBbMywgbjAsIF9UYSxcbiAgICAwLFxuICAgIFtfSywgX1ZdLFxuICAgIFswLCAwXSwgMlxuXTtcbnZhciBwb2xpY3lEZXNjcmlwdG9yTGlzdFR5cGUgPSBbMSwgbjAsIF9wRExULFxuICAgIDAsICgpID0+IGV4cG9ydHMuUG9saWN5RGVzY3JpcHRvclR5cGUkXG5dO1xudmFyIFByb3ZpZGVkQ29udGV4dHNMaXN0VHlwZSA9IFsxLCBuMCwgX1BDTFQsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5Qcm92aWRlZENvbnRleHQkXG5dO1xudmFyIHRhZ0tleUxpc3RUeXBlID0gNjQgfCAwO1xudmFyIHRhZ0xpc3RUeXBlID0gWzEsIG4wLCBfdExULFxuICAgIDAsICgpID0+IGV4cG9ydHMuVGFnJFxuXTtcbnZhciB3ZWJJZGVudGl0eVRva2VuQXVkaWVuY2VMaXN0VHlwZSA9IDY0IHwgMDtcbmV4cG9ydHMuQXNzdW1lUm9sZSQgPSBbOSwgbjAsIF9BUixcbiAgICAwLCAoKSA9PiBleHBvcnRzLkFzc3VtZVJvbGVSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5Bc3N1bWVSb2xlUmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5Bc3N1bWVSb2xlV2l0aFNBTUwkID0gWzksIG4wLCBfQVJXU0FNTCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkFzc3VtZVJvbGVXaXRoU0FNTFJlcXVlc3QkLCAoKSA9PiBleHBvcnRzLkFzc3VtZVJvbGVXaXRoU0FNTFJlc3BvbnNlJFxuXTtcbmV4cG9ydHMuQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eSQgPSBbOSwgbjAsIF9BUldXSSxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5Bc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5Bc3N1bWVSb290JCA9IFs5LCBuMCwgX0FScyxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkFzc3VtZVJvb3RSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5Bc3N1bWVSb290UmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5EZWNvZGVBdXRob3JpemF0aW9uTWVzc2FnZSQgPSBbOSwgbjAsIF9EQU0sXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5EZWNvZGVBdXRob3JpemF0aW9uTWVzc2FnZVJlcXVlc3QkLCAoKSA9PiBleHBvcnRzLkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlUmVzcG9uc2UkXG5dO1xuZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvJCA9IFs5LCBuMCwgX0dBS0ksXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HZXRBY2Nlc3NLZXlJbmZvUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuR2V0QWNjZXNzS2V5SW5mb1Jlc3BvbnNlJFxuXTtcbmV4cG9ydHMuR2V0Q2FsbGVySWRlbnRpdHkkID0gWzksIG4wLCBfR0NJLFxuICAgIDAsICgpID0+IGV4cG9ydHMuR2V0Q2FsbGVySWRlbnRpdHlSZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5HZXRDYWxsZXJJZGVudGl0eVJlc3BvbnNlJFxuXTtcbmV4cG9ydHMuR2V0RGVsZWdhdGVkQWNjZXNzVG9rZW4kID0gWzksIG4wLCBfR0RBVCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuUmVxdWVzdCQsICgpID0+IGV4cG9ydHMuR2V0RGVsZWdhdGVkQWNjZXNzVG9rZW5SZXNwb25zZSRcbl07XG5leHBvcnRzLkdldEZlZGVyYXRpb25Ub2tlbiQgPSBbOSwgbjAsIF9HRlQsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HZXRGZWRlcmF0aW9uVG9rZW5SZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5HZXRGZWRlcmF0aW9uVG9rZW5SZXNwb25zZSRcbl07XG5leHBvcnRzLkdldFNlc3Npb25Ub2tlbiQgPSBbOSwgbjAsIF9HU1QsXG4gICAgMCwgKCkgPT4gZXhwb3J0cy5HZXRTZXNzaW9uVG9rZW5SZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5HZXRTZXNzaW9uVG9rZW5SZXNwb25zZSRcbl07XG5leHBvcnRzLkdldFdlYklkZW50aXR5VG9rZW4kID0gWzksIG4wLCBfR1dJVCxcbiAgICAwLCAoKSA9PiBleHBvcnRzLkdldFdlYklkZW50aXR5VG9rZW5SZXF1ZXN0JCwgKCkgPT4gZXhwb3J0cy5HZXRXZWJJZGVudGl0eVRva2VuUmVzcG9uc2UkXG5dO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gdm9pZCAwO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVzXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9odHRwQXV0aFNjaGVtZXNcIik7XG5jb25zdCBwcm90b2NvbHNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL3Byb3RvY29sc1wiKTtcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvcmVcIik7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuY29uc3QgdXJsX3BhcnNlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXJsLXBhcnNlclwiKTtcbmNvbnN0IHV0aWxfYmFzZTY0XzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWJhc2U2NFwiKTtcbmNvbnN0IHV0aWxfdXRmOF8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11dGY4XCIpO1xuY29uc3QgaHR0cEF1dGhTY2hlbWVQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vYXV0aC9odHRwQXV0aFNjaGVtZVByb3ZpZGVyXCIpO1xuY29uc3QgZW5kcG9pbnRSZXNvbHZlcl8xID0gcmVxdWlyZShcIi4vZW5kcG9pbnQvZW5kcG9pbnRSZXNvbHZlclwiKTtcbmNvbnN0IHNjaGVtYXNfMF8xID0gcmVxdWlyZShcIi4vc2NoZW1hcy9zY2hlbWFzXzBcIik7XG5jb25zdCBnZXRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAxMS0wNi0xNVwiLFxuICAgICAgICBiYXNlNjREZWNvZGVyOiBjb25maWc/LmJhc2U2NERlY29kZXIgPz8gdXRpbF9iYXNlNjRfMS5mcm9tQmFzZTY0LFxuICAgICAgICBiYXNlNjRFbmNvZGVyOiBjb25maWc/LmJhc2U2NEVuY29kZXIgPz8gdXRpbF9iYXNlNjRfMS50b0Jhc2U2NCxcbiAgICAgICAgZGlzYWJsZUhvc3RQcmVmaXg6IGNvbmZpZz8uZGlzYWJsZUhvc3RQcmVmaXggPz8gZmFsc2UsXG4gICAgICAgIGVuZHBvaW50UHJvdmlkZXI6IGNvbmZpZz8uZW5kcG9pbnRQcm92aWRlciA/PyBlbmRwb2ludFJlc29sdmVyXzEuZGVmYXVsdEVuZHBvaW50UmVzb2x2ZXIsXG4gICAgICAgIGV4dGVuc2lvbnM6IGNvbmZpZz8uZXh0ZW5zaW9ucyA/PyBbXSxcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVQcm92aWRlcjogY29uZmlnPy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyID8/IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXJfMS5kZWZhdWx0U1RTSHR0cEF1dGhTY2hlbWVQcm92aWRlcixcbiAgICAgICAgaHR0cEF1dGhTY2hlbWVzOiBjb25maWc/Lmh0dHBBdXRoU2NoZW1lcyA/PyBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwiYXdzLmF1dGgjc2lndjRcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcImF3cy5hdXRoI3NpZ3Y0XCIpLFxuICAgICAgICAgICAgICAgIHNpZ25lcjogbmV3IGh0dHBBdXRoU2NoZW1lc18xLkF3c1Nka1NpZ1Y0U2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjaGVtZUlkOiBcInNtaXRoeS5hcGkjbm9BdXRoXCIsXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlcjogKGlwYykgPT4gaXBjLmdldElkZW50aXR5UHJvdmlkZXIoXCJzbWl0aHkuYXBpI25vQXV0aFwiKSB8fCAoYXN5bmMgKCkgPT4gKHt9KSksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgY29yZV8xLk5vQXV0aFNpZ25lcigpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbG9nZ2VyOiBjb25maWc/LmxvZ2dlciA/PyBuZXcgc21pdGh5X2NsaWVudF8xLk5vT3BMb2dnZXIoKSxcbiAgICAgICAgcHJvdG9jb2w6IGNvbmZpZz8ucHJvdG9jb2wgPz8gcHJvdG9jb2xzXzEuQXdzUXVlcnlQcm90b2NvbCxcbiAgICAgICAgcHJvdG9jb2xTZXR0aW5nczogY29uZmlnPy5wcm90b2NvbFNldHRpbmdzID8/IHtcbiAgICAgICAgICAgIGRlZmF1bHROYW1lc3BhY2U6IFwiY29tLmFtYXpvbmF3cy5zdHNcIixcbiAgICAgICAgICAgIGVycm9yVHlwZVJlZ2lzdHJpZXM6IHNjaGVtYXNfMF8xLmVycm9yVHlwZVJlZ2lzdHJpZXMsXG4gICAgICAgICAgICB4bWxOYW1lc3BhY2U6IFwiaHR0cHM6Ly9zdHMuYW1hem9uYXdzLmNvbS9kb2MvMjAxMS0wNi0xNS9cIixcbiAgICAgICAgICAgIHZlcnNpb246IFwiMjAxMS0wNi0xNVwiLFxuICAgICAgICAgICAgc2VydmljZVRhcmdldDogXCJBV1NTZWN1cml0eVRva2VuU2VydmljZVYyMDExMDYxNVwiLFxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlSWQ6IGNvbmZpZz8uc2VydmljZUlkID8/IFwiU1RTXCIsXG4gICAgICAgIHVybFBhcnNlcjogY29uZmlnPy51cmxQYXJzZXIgPz8gdXJsX3BhcnNlcl8xLnBhcnNlVXJsLFxuICAgICAgICB1dGY4RGVjb2RlcjogY29uZmlnPy51dGY4RGVjb2RlciA/PyB1dGlsX3V0ZjhfMS5mcm9tVXRmOCxcbiAgICAgICAgdXRmOEVuY29kZXI6IGNvbmZpZz8udXRmOEVuY29kZXIgPz8gdXRpbF91dGY4XzEudG9VdGY4LFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gZ2V0UnVudGltZUNvbmZpZztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0UnVudGltZUNvbmZpZyA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBwYWNrYWdlX2pzb25fMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIikpO1xuY29uc3QgY2xpZW50XzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvY29yZS9jbGllbnRcIik7XG5jb25zdCBodHRwQXV0aFNjaGVtZXNfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL2h0dHBBdXRoU2NoZW1lc1wiKTtcbmNvbnN0IGNyZWRlbnRpYWxfcHJvdmlkZXJfbm9kZV8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItbm9kZVwiKTtcbmNvbnN0IHV0aWxfdXNlcl9hZ2VudF9ub2RlXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIik7XG5jb25zdCBjb25maWdfcmVzb2x2ZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvbmZpZy1yZXNvbHZlclwiKTtcbmNvbnN0IGNvcmVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2NvcmVcIik7XG5jb25zdCBoYXNoX25vZGVfMSA9IHJlcXVpcmUoXCJAc21pdGh5L2hhc2gtbm9kZVwiKTtcbmNvbnN0IG1pZGRsZXdhcmVfcmV0cnlfMSA9IHJlcXVpcmUoXCJAc21pdGh5L21pZGRsZXdhcmUtcmV0cnlcIik7XG5jb25zdCBub2RlX2NvbmZpZ19wcm92aWRlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXJcIik7XG5jb25zdCBub2RlX2h0dHBfaGFuZGxlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIik7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuY29uc3QgdXRpbF9ib2R5X2xlbmd0aF9ub2RlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWJvZHktbGVuZ3RoLW5vZGVcIik7XG5jb25zdCB1dGlsX2RlZmF1bHRzX21vZGVfbm9kZV8xID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC1kZWZhdWx0cy1tb2RlLW5vZGVcIik7XG5jb25zdCB1dGlsX3JldHJ5XzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLXJldHJ5XCIpO1xuY29uc3QgcnVudGltZUNvbmZpZ19zaGFyZWRfMSA9IHJlcXVpcmUoXCIuL3J1bnRpbWVDb25maWcuc2hhcmVkXCIpO1xuY29uc3QgZ2V0UnVudGltZUNvbmZpZyA9IChjb25maWcpID0+IHtcbiAgICAoMCwgc21pdGh5X2NsaWVudF8xLmVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24pKHByb2Nlc3MudmVyc2lvbik7XG4gICAgY29uc3QgZGVmYXVsdHNNb2RlID0gKDAsIHV0aWxfZGVmYXVsdHNfbW9kZV9ub2RlXzEucmVzb2x2ZURlZmF1bHRzTW9kZUNvbmZpZykoY29uZmlnKTtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnUHJvdmlkZXIgPSAoKSA9PiBkZWZhdWx0c01vZGUoKS50aGVuKHNtaXRoeV9jbGllbnRfMS5sb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlKTtcbiAgICBjb25zdCBjbGllbnRTaGFyZWRWYWx1ZXMgPSAoMCwgcnVudGltZUNvbmZpZ19zaGFyZWRfMS5nZXRSdW50aW1lQ29uZmlnKShjb25maWcpO1xuICAgICgwLCBjbGllbnRfMS5lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uKShwcm9jZXNzLnZlcnNpb24pO1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgICAgcHJvZmlsZTogY29uZmlnPy5wcm9maWxlLFxuICAgICAgICBsb2dnZXI6IGNsaWVudFNoYXJlZFZhbHVlcy5sb2dnZXIsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jbGllbnRTaGFyZWRWYWx1ZXMsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgcnVudGltZTogXCJub2RlXCIsXG4gICAgICAgIGRlZmF1bHRzTW9kZSxcbiAgICAgICAgYXV0aFNjaGVtZVByZWZlcmVuY2U6IGNvbmZpZz8uYXV0aFNjaGVtZVByZWZlcmVuY2UgPz8gKDAsIG5vZGVfY29uZmlnX3Byb3ZpZGVyXzEubG9hZENvbmZpZykoaHR0cEF1dGhTY2hlbWVzXzEuTk9ERV9BVVRIX1NDSEVNRV9QUkVGRVJFTkNFX09QVElPTlMsIGxvYWRlckNvbmZpZyksXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyOiBjb25maWc/LmJvZHlMZW5ndGhDaGVja2VyID8/IHV0aWxfYm9keV9sZW5ndGhfbm9kZV8xLmNhbGN1bGF0ZUJvZHlMZW5ndGgsXG4gICAgICAgIGNyZWRlbnRpYWxEZWZhdWx0UHJvdmlkZXI6IGNvbmZpZz8uY3JlZGVudGlhbERlZmF1bHRQcm92aWRlciA/PyBjcmVkZW50aWFsX3Byb3ZpZGVyX25vZGVfMS5kZWZhdWx0UHJvdmlkZXIsXG4gICAgICAgIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogY29uZmlnPy5kZWZhdWx0VXNlckFnZW50UHJvdmlkZXIgPz8gKDAsIHV0aWxfdXNlcl9hZ2VudF9ub2RlXzEuY3JlYXRlRGVmYXVsdFVzZXJBZ2VudFByb3ZpZGVyKSh7IHNlcnZpY2VJZDogY2xpZW50U2hhcmVkVmFsdWVzLnNlcnZpY2VJZCwgY2xpZW50VmVyc2lvbjogcGFja2FnZV9qc29uXzEuZGVmYXVsdC52ZXJzaW9uIH0pLFxuICAgICAgICBodHRwQXV0aFNjaGVtZXM6IGNvbmZpZz8uaHR0cEF1dGhTY2hlbWVzID8/IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2hlbWVJZDogXCJhd3MuYXV0aCNzaWd2NFwiLFxuICAgICAgICAgICAgICAgIGlkZW50aXR5UHJvdmlkZXI6IChpcGMpID0+IGlwYy5nZXRJZGVudGl0eVByb3ZpZGVyKFwiYXdzLmF1dGgjc2lndjRcIikgfHwgKGFzeW5jIChpZFByb3BzKSA9PiBhd2FpdCAoMCwgY3JlZGVudGlhbF9wcm92aWRlcl9ub2RlXzEuZGVmYXVsdFByb3ZpZGVyKShpZFByb3BzPy5fX2NvbmZpZyB8fCB7fSkoKSksXG4gICAgICAgICAgICAgICAgc2lnbmVyOiBuZXcgaHR0cEF1dGhTY2hlbWVzXzEuQXdzU2RrU2lnVjRTaWduZXIoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NoZW1lSWQ6IFwic21pdGh5LmFwaSNub0F1dGhcIixcbiAgICAgICAgICAgICAgICBpZGVudGl0eVByb3ZpZGVyOiAoaXBjKSA9PiBpcGMuZ2V0SWRlbnRpdHlQcm92aWRlcihcInNtaXRoeS5hcGkjbm9BdXRoXCIpIHx8IChhc3luYyAoKSA9PiAoe30pKSxcbiAgICAgICAgICAgICAgICBzaWduZXI6IG5ldyBjb3JlXzEuTm9BdXRoU2lnbmVyKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtYXhBdHRlbXB0czogY29uZmlnPy5tYXhBdHRlbXB0cyA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShtaWRkbGV3YXJlX3JldHJ5XzEuTk9ERV9NQVhfQVRURU1QVF9DT05GSUdfT1BUSU9OUywgY29uZmlnKSxcbiAgICAgICAgcmVnaW9uOiBjb25maWc/LnJlZ2lvbiA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShjb25maWdfcmVzb2x2ZXJfMS5OT0RFX1JFR0lPTl9DT05GSUdfT1BUSU9OUywgeyAuLi5jb25maWdfcmVzb2x2ZXJfMS5OT0RFX1JFR0lPTl9DT05GSUdfRklMRV9PUFRJT05TLCAuLi5sb2FkZXJDb25maWcgfSksXG4gICAgICAgIHJlcXVlc3RIYW5kbGVyOiBub2RlX2h0dHBfaGFuZGxlcl8xLk5vZGVIdHRwSGFuZGxlci5jcmVhdGUoY29uZmlnPy5yZXF1ZXN0SGFuZGxlciA/PyBkZWZhdWx0Q29uZmlnUHJvdmlkZXIpLFxuICAgICAgICByZXRyeU1vZGU6IGNvbmZpZz8ucmV0cnlNb2RlID8/XG4gICAgICAgICAgICAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKSh7XG4gICAgICAgICAgICAgICAgLi4ubWlkZGxld2FyZV9yZXRyeV8xLk5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBhc3luYyAoKSA9PiAoYXdhaXQgZGVmYXVsdENvbmZpZ1Byb3ZpZGVyKCkpLnJldHJ5TW9kZSB8fCB1dGlsX3JldHJ5XzEuREVGQVVMVF9SRVRSWV9NT0RFLFxuICAgICAgICAgICAgfSwgY29uZmlnKSxcbiAgICAgICAgc2hhMjU2OiBjb25maWc/LnNoYTI1NiA/PyBoYXNoX25vZGVfMS5IYXNoLmJpbmQobnVsbCwgXCJzaGEyNTZcIiksXG4gICAgICAgIHN0cmVhbUNvbGxlY3RvcjogY29uZmlnPy5zdHJlYW1Db2xsZWN0b3IgPz8gbm9kZV9odHRwX2hhbmRsZXJfMS5zdHJlYW1Db2xsZWN0b3IsXG4gICAgICAgIHVzZUR1YWxzdGFja0VuZHBvaW50OiBjb25maWc/LnVzZUR1YWxzdGFja0VuZHBvaW50ID8/ICgwLCBub2RlX2NvbmZpZ19wcm92aWRlcl8xLmxvYWRDb25maWcpKGNvbmZpZ19yZXNvbHZlcl8xLk5PREVfVVNFX0RVQUxTVEFDS19FTkRQT0lOVF9DT05GSUdfT1BUSU9OUywgbG9hZGVyQ29uZmlnKSxcbiAgICAgICAgdXNlRmlwc0VuZHBvaW50OiBjb25maWc/LnVzZUZpcHNFbmRwb2ludCA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKShjb25maWdfcmVzb2x2ZXJfMS5OT0RFX1VTRV9GSVBTX0VORFBPSU5UX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgICAgICB1c2VyQWdlbnRBcHBJZDogY29uZmlnPy51c2VyQWdlbnRBcHBJZCA/PyAoMCwgbm9kZV9jb25maWdfcHJvdmlkZXJfMS5sb2FkQ29uZmlnKSh1dGlsX3VzZXJfYWdlbnRfbm9kZV8xLk5PREVfQVBQX0lEX0NPTkZJR19PUFRJT05TLCBsb2FkZXJDb25maWcpLFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRSdW50aW1lQ29uZmlnID0gZ2V0UnVudGltZUNvbmZpZztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZyA9IGV4cG9ydHMuZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gdm9pZCAwO1xuY29uc3QgZ2V0SHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICBjb25zdCBfaHR0cEF1dGhTY2hlbWVzID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZXM7XG4gICAgbGV0IF9odHRwQXV0aFNjaGVtZVByb3ZpZGVyID0gcnVudGltZUNvbmZpZy5odHRwQXV0aFNjaGVtZVByb3ZpZGVyO1xuICAgIGxldCBfY3JlZGVudGlhbHMgPSBydW50aW1lQ29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEh0dHBBdXRoU2NoZW1lKGh0dHBBdXRoU2NoZW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9odHRwQXV0aFNjaGVtZXMuZmluZEluZGV4KChzY2hlbWUpID0+IHNjaGVtZS5zY2hlbWVJZCA9PT0gaHR0cEF1dGhTY2hlbWUuc2NoZW1lSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF9odHRwQXV0aFNjaGVtZXMucHVzaChodHRwQXV0aFNjaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVzLnNwbGljZShpbmRleCwgMSwgaHR0cEF1dGhTY2hlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBodHRwQXV0aFNjaGVtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SHR0cEF1dGhTY2hlbWVQcm92aWRlcihodHRwQXV0aFNjaGVtZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICBfaHR0cEF1dGhTY2hlbWVQcm92aWRlciA9IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBBdXRoU2NoZW1lUHJvdmlkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2h0dHBBdXRoU2NoZW1lUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBfY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWRlbnRpYWxzO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSBnZXRIdHRwQXV0aEV4dGVuc2lvbkNvbmZpZ3VyYXRpb247XG5jb25zdCByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGh0dHBBdXRoU2NoZW1lczogY29uZmlnLmh0dHBBdXRoU2NoZW1lcygpLFxuICAgICAgICBodHRwQXV0aFNjaGVtZVByb3ZpZGVyOiBjb25maWcuaHR0cEF1dGhTY2hlbWVQcm92aWRlcigpLFxuICAgICAgICBjcmVkZW50aWFsczogY29uZmlnLmNyZWRlbnRpYWxzKCksXG4gICAgfTtcbn07XG5leHBvcnRzLnJlc29sdmVIdHRwQXV0aFJ1bnRpbWVDb25maWcgPSByZXNvbHZlSHR0cEF1dGhSdW50aW1lQ29uZmlnO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXNvbHZlUnVudGltZUV4dGVuc2lvbnMgPSB2b2lkIDA7XG5jb25zdCByZWdpb25fY29uZmlnX3Jlc29sdmVyXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiKTtcbmNvbnN0IHByb3RvY29sX2h0dHBfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIik7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuY29uc3QgaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXzEgPSByZXF1aXJlKFwiLi9hdXRoL2h0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvblwiKTtcbmNvbnN0IHJlc29sdmVSdW50aW1lRXh0ZW5zaW9ucyA9IChydW50aW1lQ29uZmlnLCBleHRlbnNpb25zKSA9PiB7XG4gICAgY29uc3QgZXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oKDAsIHJlZ2lvbl9jb25maWdfcmVzb2x2ZXJfMS5nZXRBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKShydW50aW1lQ29uZmlnKSwgKDAsIHNtaXRoeV9jbGllbnRfMS5nZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbikocnVudGltZUNvbmZpZyksICgwLCBwcm90b2NvbF9odHRwXzEuZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKShydW50aW1lQ29uZmlnKSwgKDAsIGh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbl8xLmdldEh0dHBBdXRoRXh0ZW5zaW9uQ29uZmlndXJhdGlvbikocnVudGltZUNvbmZpZykpO1xuICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY29uZmlndXJlKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihydW50aW1lQ29uZmlnLCAoMCwgcmVnaW9uX2NvbmZpZ19yZXNvbHZlcl8xLnJlc29sdmVBd3NSZWdpb25FeHRlbnNpb25Db25maWd1cmF0aW9uKShleHRlbnNpb25Db25maWd1cmF0aW9uKSwgKDAsIHNtaXRoeV9jbGllbnRfMS5yZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcpKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCAoMCwgcHJvdG9jb2xfaHR0cF8xLnJlc29sdmVIdHRwSGFuZGxlclJ1bnRpbWVDb25maWcpKGV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pLCAoMCwgaHR0cEF1dGhFeHRlbnNpb25Db25maWd1cmF0aW9uXzEucmVzb2x2ZUh0dHBBdXRoUnVudGltZUNvbmZpZykoZXh0ZW5zaW9uQ29uZmlndXJhdGlvbikpO1xufTtcbmV4cG9ydHMucmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zID0gcmVzb2x2ZVJ1bnRpbWVFeHRlbnNpb25zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TVFNDbGllbnQgPSBleHBvcnRzLl9fQ2xpZW50ID0gdm9pZCAwO1xuY29uc3QgbWlkZGxld2FyZV9ob3N0X2hlYWRlcl8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIik7XG5jb25zdCBtaWRkbGV3YXJlX2xvZ2dlcl8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL21pZGRsZXdhcmUtbG9nZ2VyXCIpO1xuY29uc3QgbWlkZGxld2FyZV9yZWN1cnNpb25fZGV0ZWN0aW9uXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvbWlkZGxld2FyZS1yZWN1cnNpb24tZGV0ZWN0aW9uXCIpO1xuY29uc3QgbWlkZGxld2FyZV91c2VyX2FnZW50XzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvbWlkZGxld2FyZS11c2VyLWFnZW50XCIpO1xuY29uc3QgY29uZmlnX3Jlc29sdmVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9jb25maWctcmVzb2x2ZXJcIik7XG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9jb3JlXCIpO1xuY29uc3Qgc2NoZW1hXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiKTtcbmNvbnN0IG1pZGRsZXdhcmVfY29udGVudF9sZW5ndGhfMSA9IHJlcXVpcmUoXCJAc21pdGh5L21pZGRsZXdhcmUtY29udGVudC1sZW5ndGhcIik7XG5jb25zdCBtaWRkbGV3YXJlX2VuZHBvaW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9taWRkbGV3YXJlLWVuZHBvaW50XCIpO1xuY29uc3QgbWlkZGxld2FyZV9yZXRyeV8xID0gcmVxdWlyZShcIkBzbWl0aHkvbWlkZGxld2FyZS1yZXRyeVwiKTtcbmNvbnN0IHNtaXRoeV9jbGllbnRfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX0NsaWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc21pdGh5X2NsaWVudF8xLkNsaWVudDsgfSB9KTtcbmNvbnN0IGh0dHBBdXRoU2NoZW1lUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2F1dGgvaHR0cEF1dGhTY2hlbWVQcm92aWRlclwiKTtcbmNvbnN0IEVuZHBvaW50UGFyYW1ldGVyc18xID0gcmVxdWlyZShcIi4vZW5kcG9pbnQvRW5kcG9pbnRQYXJhbWV0ZXJzXCIpO1xuY29uc3QgcnVudGltZUNvbmZpZ18xID0gcmVxdWlyZShcIi4vcnVudGltZUNvbmZpZ1wiKTtcbmNvbnN0IHJ1bnRpbWVFeHRlbnNpb25zXzEgPSByZXF1aXJlKFwiLi9ydW50aW1lRXh0ZW5zaW9uc1wiKTtcbmNsYXNzIFNUU0NsaWVudCBleHRlbmRzIHNtaXRoeV9jbGllbnRfMS5DbGllbnQge1xuICAgIGNvbmZpZztcbiAgICBjb25zdHJ1Y3RvciguLi5bY29uZmlndXJhdGlvbl0pIHtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18wID0gKDAsIHJ1bnRpbWVDb25maWdfMS5nZXRSdW50aW1lQ29uZmlnKShjb25maWd1cmF0aW9uIHx8IHt9KTtcbiAgICAgICAgc3VwZXIoX2NvbmZpZ18wKTtcbiAgICAgICAgdGhpcy5pbml0Q29uZmlnID0gX2NvbmZpZ18wO1xuICAgICAgICBjb25zdCBfY29uZmlnXzEgPSAoMCwgRW5kcG9pbnRQYXJhbWV0ZXJzXzEucmVzb2x2ZUNsaWVudEVuZHBvaW50UGFyYW1ldGVycykoX2NvbmZpZ18wKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ18yID0gKDAsIG1pZGRsZXdhcmVfdXNlcl9hZ2VudF8xLnJlc29sdmVVc2VyQWdlbnRDb25maWcpKF9jb25maWdfMSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfMyA9ICgwLCBtaWRkbGV3YXJlX3JldHJ5XzEucmVzb2x2ZVJldHJ5Q29uZmlnKShfY29uZmlnXzIpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzQgPSAoMCwgY29uZmlnX3Jlc29sdmVyXzEucmVzb2x2ZVJlZ2lvbkNvbmZpZykoX2NvbmZpZ18zKTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ181ID0gKDAsIG1pZGRsZXdhcmVfaG9zdF9oZWFkZXJfMS5yZXNvbHZlSG9zdEhlYWRlckNvbmZpZykoX2NvbmZpZ180KTtcbiAgICAgICAgY29uc3QgX2NvbmZpZ182ID0gKDAsIG1pZGRsZXdhcmVfZW5kcG9pbnRfMS5yZXNvbHZlRW5kcG9pbnRDb25maWcpKF9jb25maWdfNSk7XG4gICAgICAgIGNvbnN0IF9jb25maWdfNyA9ICgwLCBodHRwQXV0aFNjaGVtZVByb3ZpZGVyXzEucmVzb2x2ZUh0dHBBdXRoU2NoZW1lQ29uZmlnKShfY29uZmlnXzYpO1xuICAgICAgICBjb25zdCBfY29uZmlnXzggPSAoMCwgcnVudGltZUV4dGVuc2lvbnNfMS5yZXNvbHZlUnVudGltZUV4dGVuc2lvbnMpKF9jb25maWdfNywgY29uZmlndXJhdGlvbj8uZXh0ZW5zaW9ucyB8fCBbXSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gX2NvbmZpZ184O1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoKDAsIHNjaGVtYV8xLmdldFNjaGVtYVNlcmRlUGx1Z2luKSh0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoKDAsIG1pZGRsZXdhcmVfdXNlcl9hZ2VudF8xLmdldFVzZXJBZ2VudFBsdWdpbikodGhpcy5jb25maWcpKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlU3RhY2sudXNlKCgwLCBtaWRkbGV3YXJlX3JldHJ5XzEuZ2V0UmV0cnlQbHVnaW4pKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZSgoMCwgbWlkZGxld2FyZV9jb250ZW50X2xlbmd0aF8xLmdldENvbnRlbnRMZW5ndGhQbHVnaW4pKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZSgoMCwgbWlkZGxld2FyZV9ob3N0X2hlYWRlcl8xLmdldEhvc3RIZWFkZXJQbHVnaW4pKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZSgoMCwgbWlkZGxld2FyZV9sb2dnZXJfMS5nZXRMb2dnZXJQbHVnaW4pKHRoaXMuY29uZmlnKSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZSgoMCwgbWlkZGxld2FyZV9yZWN1cnNpb25fZGV0ZWN0aW9uXzEuZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luKSh0aGlzLmNvbmZpZykpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoKDAsIGNvcmVfMS5nZXRIdHRwQXV0aFNjaGVtZUVuZHBvaW50UnVsZVNldFBsdWdpbikodGhpcy5jb25maWcsIHtcbiAgICAgICAgICAgIGh0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyOiBodHRwQXV0aFNjaGVtZVByb3ZpZGVyXzEuZGVmYXVsdFNUU0h0dHBBdXRoU2NoZW1lUGFyYW1ldGVyc1Byb3ZpZGVyLFxuICAgICAgICAgICAgaWRlbnRpdHlQcm92aWRlckNvbmZpZ1Byb3ZpZGVyOiBhc3luYyAoY29uZmlnKSA9PiBuZXcgY29yZV8xLkRlZmF1bHRJZGVudGl0eVByb3ZpZGVyQ29uZmlnKHtcbiAgICAgICAgICAgICAgICBcImF3cy5hdXRoI3NpZ3Y0XCI6IGNvbmZpZy5jcmVkZW50aWFscyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZVN0YWNrLnVzZSgoMCwgY29yZV8xLmdldEh0dHBTaWduaW5nUGx1Z2luKSh0aGlzLmNvbmZpZykpO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuZXhwb3J0cy5TVFNDbGllbnQgPSBTVFNDbGllbnQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU1RTQ2xpZW50ID0gcmVxdWlyZSgnLi9TVFNDbGllbnQnKTtcbnZhciBzbWl0aHlDbGllbnQgPSByZXF1aXJlKCdAc21pdGh5L3NtaXRoeS1jbGllbnQnKTtcbnZhciBtaWRkbGV3YXJlRW5kcG9pbnQgPSByZXF1aXJlKCdAc21pdGh5L21pZGRsZXdhcmUtZW5kcG9pbnQnKTtcbnZhciBFbmRwb2ludFBhcmFtZXRlcnMgPSByZXF1aXJlKCcuL2VuZHBvaW50L0VuZHBvaW50UGFyYW1ldGVycycpO1xudmFyIHNjaGVtYXNfMCA9IHJlcXVpcmUoJy4vc2NoZW1hcy9zY2hlbWFzXzAnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL21vZGVscy9lcnJvcnMnKTtcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXdzLXNkay9jb3JlL2NsaWVudCcpO1xudmFyIHJlZ2lvbkNvbmZpZ1Jlc29sdmVyID0gcmVxdWlyZSgnQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlcicpO1xudmFyIFNUU1NlcnZpY2VFeGNlcHRpb24gPSByZXF1aXJlKCcuL21vZGVscy9TVFNTZXJ2aWNlRXhjZXB0aW9uJyk7XG5cbmNsYXNzIEFzc3VtZVJvbGVDb21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoRW5kcG9pbnRQYXJhbWV0ZXJzLmNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbbWlkZGxld2FyZUVuZHBvaW50LmdldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQVdTU2VjdXJpdHlUb2tlblNlcnZpY2VWMjAxMTA2MTVcIiwgXCJBc3N1bWVSb2xlXCIsIHt9KVxuICAgIC5uKFwiU1RTQ2xpZW50XCIsIFwiQXNzdW1lUm9sZUNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkFzc3VtZVJvbGUkKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgQXNzdW1lUm9sZVdpdGhTQU1MQ29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKEVuZHBvaW50UGFyYW1ldGVycy5jb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU1NlY3VyaXR5VG9rZW5TZXJ2aWNlVjIwMTEwNjE1XCIsIFwiQXNzdW1lUm9sZVdpdGhTQU1MXCIsIHt9KVxuICAgIC5uKFwiU1RTQ2xpZW50XCIsIFwiQXNzdW1lUm9sZVdpdGhTQU1MQ29tbWFuZFwiKVxuICAgIC5zYyhzY2hlbWFzXzAuQXNzdW1lUm9sZVdpdGhTQU1MJClcbiAgICAuYnVpbGQoKSB7XG59XG5cbmNsYXNzIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoRW5kcG9pbnRQYXJhbWV0ZXJzLmNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbbWlkZGxld2FyZUVuZHBvaW50LmdldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQVdTU2VjdXJpdHlUb2tlblNlcnZpY2VWMjAxMTA2MTVcIiwgXCJBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5XCIsIHt9KVxuICAgIC5uKFwiU1RTQ2xpZW50XCIsIFwiQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eUNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkkKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgQXNzdW1lUm9vdENvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChFbmRwb2ludFBhcmFtZXRlcnMuY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBV1NTZWN1cml0eVRva2VuU2VydmljZVYyMDExMDYxNVwiLCBcIkFzc3VtZVJvb3RcIiwge30pXG4gICAgLm4oXCJTVFNDbGllbnRcIiwgXCJBc3N1bWVSb290Q29tbWFuZFwiKVxuICAgIC5zYyhzY2hlbWFzXzAuQXNzdW1lUm9vdCQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBEZWNvZGVBdXRob3JpemF0aW9uTWVzc2FnZUNvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChFbmRwb2ludFBhcmFtZXRlcnMuY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBV1NTZWN1cml0eVRva2VuU2VydmljZVYyMDExMDYxNVwiLCBcIkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlXCIsIHt9KVxuICAgIC5uKFwiU1RTQ2xpZW50XCIsIFwiRGVjb2RlQXV0aG9yaXphdGlvbk1lc3NhZ2VDb21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5EZWNvZGVBdXRob3JpemF0aW9uTWVzc2FnZSQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBHZXRBY2Nlc3NLZXlJbmZvQ29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKEVuZHBvaW50UGFyYW1ldGVycy5jb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU1NlY3VyaXR5VG9rZW5TZXJ2aWNlVjIwMTEwNjE1XCIsIFwiR2V0QWNjZXNzS2V5SW5mb1wiLCB7fSlcbiAgICAubihcIlNUU0NsaWVudFwiLCBcIkdldEFjY2Vzc0tleUluZm9Db21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5HZXRBY2Nlc3NLZXlJbmZvJClcbiAgICAuYnVpbGQoKSB7XG59XG5cbmNsYXNzIEdldENhbGxlcklkZW50aXR5Q29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKEVuZHBvaW50UGFyYW1ldGVycy5jb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU1NlY3VyaXR5VG9rZW5TZXJ2aWNlVjIwMTEwNjE1XCIsIFwiR2V0Q2FsbGVySWRlbnRpdHlcIiwge30pXG4gICAgLm4oXCJTVFNDbGllbnRcIiwgXCJHZXRDYWxsZXJJZGVudGl0eUNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkdldENhbGxlcklkZW50aXR5JClcbiAgICAuYnVpbGQoKSB7XG59XG5cbmNsYXNzIEdldERlbGVnYXRlZEFjY2Vzc1Rva2VuQ29tbWFuZCBleHRlbmRzIHNtaXRoeUNsaWVudC5Db21tYW5kXG4gICAgLmNsYXNzQnVpbGRlcigpXG4gICAgLmVwKEVuZHBvaW50UGFyYW1ldGVycy5jb21tb25QYXJhbXMpXG4gICAgLm0oZnVuY3Rpb24gKENvbW1hbmQsIGNzLCBjb25maWcsIG8pIHtcbiAgICByZXR1cm4gW21pZGRsZXdhcmVFbmRwb2ludC5nZXRFbmRwb2ludFBsdWdpbihjb25maWcsIENvbW1hbmQuZ2V0RW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMoKSldO1xufSlcbiAgICAucyhcIkFXU1NlY3VyaXR5VG9rZW5TZXJ2aWNlVjIwMTEwNjE1XCIsIFwiR2V0RGVsZWdhdGVkQWNjZXNzVG9rZW5cIiwge30pXG4gICAgLm4oXCJTVFNDbGllbnRcIiwgXCJHZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlbkNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkdldERlbGVnYXRlZEFjY2Vzc1Rva2VuJClcbiAgICAuYnVpbGQoKSB7XG59XG5cbmNsYXNzIEdldEZlZGVyYXRpb25Ub2tlbkNvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChFbmRwb2ludFBhcmFtZXRlcnMuY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBV1NTZWN1cml0eVRva2VuU2VydmljZVYyMDExMDYxNVwiLCBcIkdldEZlZGVyYXRpb25Ub2tlblwiLCB7fSlcbiAgICAubihcIlNUU0NsaWVudFwiLCBcIkdldEZlZGVyYXRpb25Ub2tlbkNvbW1hbmRcIilcbiAgICAuc2Moc2NoZW1hc18wLkdldEZlZGVyYXRpb25Ub2tlbiQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jbGFzcyBHZXRTZXNzaW9uVG9rZW5Db21tYW5kIGV4dGVuZHMgc21pdGh5Q2xpZW50LkNvbW1hbmRcbiAgICAuY2xhc3NCdWlsZGVyKClcbiAgICAuZXAoRW5kcG9pbnRQYXJhbWV0ZXJzLmNvbW1vblBhcmFtcylcbiAgICAubShmdW5jdGlvbiAoQ29tbWFuZCwgY3MsIGNvbmZpZywgbykge1xuICAgIHJldHVybiBbbWlkZGxld2FyZUVuZHBvaW50LmdldEVuZHBvaW50UGx1Z2luKGNvbmZpZywgQ29tbWFuZC5nZXRFbmRwb2ludFBhcmFtZXRlckluc3RydWN0aW9ucygpKV07XG59KVxuICAgIC5zKFwiQVdTU2VjdXJpdHlUb2tlblNlcnZpY2VWMjAxMTA2MTVcIiwgXCJHZXRTZXNzaW9uVG9rZW5cIiwge30pXG4gICAgLm4oXCJTVFNDbGllbnRcIiwgXCJHZXRTZXNzaW9uVG9rZW5Db21tYW5kXCIpXG4gICAgLnNjKHNjaGVtYXNfMC5HZXRTZXNzaW9uVG9rZW4kKVxuICAgIC5idWlsZCgpIHtcbn1cblxuY2xhc3MgR2V0V2ViSWRlbnRpdHlUb2tlbkNvbW1hbmQgZXh0ZW5kcyBzbWl0aHlDbGllbnQuQ29tbWFuZFxuICAgIC5jbGFzc0J1aWxkZXIoKVxuICAgIC5lcChFbmRwb2ludFBhcmFtZXRlcnMuY29tbW9uUGFyYW1zKVxuICAgIC5tKGZ1bmN0aW9uIChDb21tYW5kLCBjcywgY29uZmlnLCBvKSB7XG4gICAgcmV0dXJuIFttaWRkbGV3YXJlRW5kcG9pbnQuZ2V0RW5kcG9pbnRQbHVnaW4oY29uZmlnLCBDb21tYW5kLmdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkpXTtcbn0pXG4gICAgLnMoXCJBV1NTZWN1cml0eVRva2VuU2VydmljZVYyMDExMDYxNVwiLCBcIkdldFdlYklkZW50aXR5VG9rZW5cIiwge30pXG4gICAgLm4oXCJTVFNDbGllbnRcIiwgXCJHZXRXZWJJZGVudGl0eVRva2VuQ29tbWFuZFwiKVxuICAgIC5zYyhzY2hlbWFzXzAuR2V0V2ViSWRlbnRpdHlUb2tlbiQpXG4gICAgLmJ1aWxkKCkge1xufVxuXG5jb25zdCBjb21tYW5kcyA9IHtcbiAgICBBc3N1bWVSb2xlQ29tbWFuZCxcbiAgICBBc3N1bWVSb2xlV2l0aFNBTUxDb21tYW5kLFxuICAgIEFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kLFxuICAgIEFzc3VtZVJvb3RDb21tYW5kLFxuICAgIERlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlQ29tbWFuZCxcbiAgICBHZXRBY2Nlc3NLZXlJbmZvQ29tbWFuZCxcbiAgICBHZXRDYWxsZXJJZGVudGl0eUNvbW1hbmQsXG4gICAgR2V0RGVsZWdhdGVkQWNjZXNzVG9rZW5Db21tYW5kLFxuICAgIEdldEZlZGVyYXRpb25Ub2tlbkNvbW1hbmQsXG4gICAgR2V0U2Vzc2lvblRva2VuQ29tbWFuZCxcbiAgICBHZXRXZWJJZGVudGl0eVRva2VuQ29tbWFuZCxcbn07XG5jbGFzcyBTVFMgZXh0ZW5kcyBTVFNDbGllbnQuU1RTQ2xpZW50IHtcbn1cbnNtaXRoeUNsaWVudC5jcmVhdGVBZ2dyZWdhdGVkQ2xpZW50KGNvbW1hbmRzLCBTVFMpO1xuXG5jb25zdCBnZXRBY2NvdW50SWRGcm9tQXNzdW1lZFJvbGVVc2VyID0gKGFzc3VtZWRSb2xlVXNlcikgPT4ge1xuICAgIGlmICh0eXBlb2YgYXNzdW1lZFJvbGVVc2VyPy5Bcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgYXJuQ29tcG9uZW50cyA9IGFzc3VtZWRSb2xlVXNlci5Bcm4uc3BsaXQoXCI6XCIpO1xuICAgICAgICBpZiAoYXJuQ29tcG9uZW50cy5sZW5ndGggPiA0ICYmIGFybkNvbXBvbmVudHNbNF0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcm5Db21wb25lbnRzWzRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgcmVzb2x2ZVJlZ2lvbiA9IGFzeW5jIChfcmVnaW9uLCBfcGFyZW50UmVnaW9uLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIGxvYWRlckNvbmZpZyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVnaW9uID0gdHlwZW9mIF9yZWdpb24gPT09IFwiZnVuY3Rpb25cIiA/IGF3YWl0IF9yZWdpb24oKSA6IF9yZWdpb247XG4gICAgY29uc3QgcGFyZW50UmVnaW9uID0gdHlwZW9mIF9wYXJlbnRSZWdpb24gPT09IFwiZnVuY3Rpb25cIiA/IGF3YWl0IF9wYXJlbnRSZWdpb24oKSA6IF9wYXJlbnRSZWdpb247XG4gICAgbGV0IHN0c0RlZmF1bHRSZWdpb24gPSBcIlwiO1xuICAgIGNvbnN0IHJlc29sdmVkUmVnaW9uID0gcmVnaW9uID8/IHBhcmVudFJlZ2lvbiA/PyAoc3RzRGVmYXVsdFJlZ2lvbiA9IGF3YWl0IHJlZ2lvbkNvbmZpZ1Jlc29sdmVyLnN0c1JlZ2lvbkRlZmF1bHRSZXNvbHZlcihsb2FkZXJDb25maWcpKCkpO1xuICAgIGNyZWRlbnRpYWxQcm92aWRlckxvZ2dlcj8uZGVidWc/LihcIkBhd3Mtc2RrL2NsaWVudC1zdHM6OnJlc29sdmVSZWdpb25cIiwgXCJhY2NlcHRpbmcgZmlyc3Qgb2Y6XCIsIGAke3JlZ2lvbn0gKGNyZWRlbnRpYWwgcHJvdmlkZXIgY2xpZW50Q29uZmlnKWAsIGAke3BhcmVudFJlZ2lvbn0gKGNvbnRleHR1YWwgY2xpZW50KWAsIGAke3N0c0RlZmF1bHRSZWdpb259IChTVFMgZGVmYXVsdDogQVdTX1JFR0lPTiwgcHJvZmlsZSByZWdpb24sIG9yIHVzLWVhc3QtMSlgKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRSZWdpb247XG59O1xuY29uc3QgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyJDEgPSAoc3RzT3B0aW9ucywgU1RTQ2xpZW50KSA9PiB7XG4gICAgbGV0IHN0c0NsaWVudDtcbiAgICBsZXQgY2xvc3VyZVNvdXJjZUNyZWRzO1xuICAgIHJldHVybiBhc3luYyAoc291cmNlQ3JlZHMsIHBhcmFtcykgPT4ge1xuICAgICAgICBjbG9zdXJlU291cmNlQ3JlZHMgPSBzb3VyY2VDcmVkcztcbiAgICAgICAgaWYgKCFzdHNDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nZ2VyID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy5sb2dnZXIsIHByb2ZpbGUgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnByb2ZpbGUsIHJlZ2lvbiwgcmVxdWVzdEhhbmRsZXIgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlcXVlc3RIYW5kbGVyLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIHVzZXJBZ2VudEFwcElkID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy51c2VyQWdlbnRBcHBJZCwgfSA9IHN0c09wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFJlZ2lvbiA9IGF3YWl0IHJlc29sdmVSZWdpb24ocmVnaW9uLCBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlZ2lvbiwgY3JlZGVudGlhbFByb3ZpZGVyTG9nZ2VyLCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID0gIWlzSDIocmVxdWVzdEhhbmRsZXIpO1xuICAgICAgICAgICAgc3RzQ2xpZW50ID0gbmV3IFNUU0NsaWVudCh7XG4gICAgICAgICAgICAgICAgLi4uc3RzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnRBcHBJZCxcbiAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxEZWZhdWx0UHJvdmlkZXI6ICgpID0+IGFzeW5jICgpID0+IGNsb3N1cmVTb3VyY2VDcmVkcyxcbiAgICAgICAgICAgICAgICByZWdpb246IHJlc29sdmVkUmVnaW9uLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RIYW5kbGVyOiBpc0NvbXBhdGlibGVSZXF1ZXN0SGFuZGxlciA/IHJlcXVlc3RIYW5kbGVyIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBDcmVkZW50aWFscywgQXNzdW1lZFJvbGVVc2VyIH0gPSBhd2FpdCBzdHNDbGllbnQuc2VuZChuZXcgQXNzdW1lUm9sZUNvbW1hbmQocGFyYW1zKSk7XG4gICAgICAgIGlmICghQ3JlZGVudGlhbHMgfHwgIUNyZWRlbnRpYWxzLkFjY2Vzc0tleUlkIHx8ICFDcmVkZW50aWFscy5TZWNyZXRBY2Nlc3NLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZXNwb25zZSBmcm9tIFNUUy5hc3N1bWVSb2xlIGNhbGwgd2l0aCByb2xlICR7cGFyYW1zLlJvbGVBcm59YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gZ2V0QWNjb3VudElkRnJvbUFzc3VtZWRSb2xlVXNlcihBc3N1bWVkUm9sZVVzZXIpO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBDcmVkZW50aWFscy5BY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogQ3JlZGVudGlhbHMuU2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICAgICAgc2Vzc2lvblRva2VuOiBDcmVkZW50aWFscy5TZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBDcmVkZW50aWFscy5FeHBpcmF0aW9uLFxuICAgICAgICAgICAgLi4uKENyZWRlbnRpYWxzLkNyZWRlbnRpYWxTY29wZSAmJiB7IGNyZWRlbnRpYWxTY29wZTogQ3JlZGVudGlhbHMuQ3JlZGVudGlhbFNjb3BlIH0pLFxuICAgICAgICAgICAgLi4uKGFjY291bnRJZCAmJiB7IGFjY291bnRJZCB9KSxcbiAgICAgICAgfTtcbiAgICAgICAgY2xpZW50LnNldENyZWRlbnRpYWxGZWF0dXJlKGNyZWRlbnRpYWxzLCBcIkNSRURFTlRJQUxTX1NUU19BU1NVTUVfUk9MRVwiLCBcImlcIik7XG4gICAgICAgIHJldHVybiBjcmVkZW50aWFscztcbiAgICB9O1xufTtcbmNvbnN0IGdldERlZmF1bHRSb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSQxID0gKHN0c09wdGlvbnMsIFNUU0NsaWVudCkgPT4ge1xuICAgIGxldCBzdHNDbGllbnQ7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKCFzdHNDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nZ2VyID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy5sb2dnZXIsIHByb2ZpbGUgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnByb2ZpbGUsIHJlZ2lvbiwgcmVxdWVzdEhhbmRsZXIgPSBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlcXVlc3RIYW5kbGVyLCBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXIsIHVzZXJBZ2VudEFwcElkID0gc3RzT3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy51c2VyQWdlbnRBcHBJZCwgfSA9IHN0c09wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFJlZ2lvbiA9IGF3YWl0IHJlc29sdmVSZWdpb24ocmVnaW9uLCBzdHNPcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWc/LnJlZ2lvbiwgY3JlZGVudGlhbFByb3ZpZGVyTG9nZ2VyLCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID0gIWlzSDIocmVxdWVzdEhhbmRsZXIpO1xuICAgICAgICAgICAgc3RzQ2xpZW50ID0gbmV3IFNUU0NsaWVudCh7XG4gICAgICAgICAgICAgICAgLi4uc3RzT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnRBcHBJZCxcbiAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogcmVzb2x2ZWRSZWdpb24sXG4gICAgICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXI6IGlzQ29tcGF0aWJsZVJlcXVlc3RIYW5kbGVyID8gcmVxdWVzdEhhbmRsZXIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IENyZWRlbnRpYWxzLCBBc3N1bWVkUm9sZVVzZXIgfSA9IGF3YWl0IHN0c0NsaWVudC5zZW5kKG5ldyBBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5Q29tbWFuZChwYXJhbXMpKTtcbiAgICAgICAgaWYgKCFDcmVkZW50aWFscyB8fCAhQ3JlZGVudGlhbHMuQWNjZXNzS2V5SWQgfHwgIUNyZWRlbnRpYWxzLlNlY3JldEFjY2Vzc0tleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGZyb20gU1RTLmFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHkgY2FsbCB3aXRoIHJvbGUgJHtwYXJhbXMuUm9sZUFybn1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBnZXRBY2NvdW50SWRGcm9tQXNzdW1lZFJvbGVVc2VyKEFzc3VtZWRSb2xlVXNlcik7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IENyZWRlbnRpYWxzLkFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBDcmVkZW50aWFscy5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IENyZWRlbnRpYWxzLlNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246IENyZWRlbnRpYWxzLkV4cGlyYXRpb24sXG4gICAgICAgICAgICAuLi4oQ3JlZGVudGlhbHMuQ3JlZGVudGlhbFNjb3BlICYmIHsgY3JlZGVudGlhbFNjb3BlOiBDcmVkZW50aWFscy5DcmVkZW50aWFsU2NvcGUgfSksXG4gICAgICAgICAgICAuLi4oYWNjb3VudElkICYmIHsgYWNjb3VudElkIH0pLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYWNjb3VudElkKSB7XG4gICAgICAgICAgICBjbGllbnQuc2V0Q3JlZGVudGlhbEZlYXR1cmUoY3JlZGVudGlhbHMsIFwiUkVTT0xWRURfQUNDT1VOVF9JRFwiLCBcIlRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50LnNldENyZWRlbnRpYWxGZWF0dXJlKGNyZWRlbnRpYWxzLCBcIkNSRURFTlRJQUxTX1NUU19BU1NVTUVfUk9MRV9XRUJfSURcIiwgXCJrXCIpO1xuICAgICAgICByZXR1cm4gY3JlZGVudGlhbHM7XG4gICAgfTtcbn07XG5jb25zdCBpc0gyID0gKHJlcXVlc3RIYW5kbGVyKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyPy5tZXRhZGF0YT8uaGFuZGxlclByb3RvY29sID09PSBcImgyXCI7XG59O1xuXG5jb25zdCBnZXRDdXN0b21pemFibGVTdHNDbGllbnRDdG9yID0gKGJhc2VDdG9yLCBjdXN0b21pemF0aW9ucykgPT4ge1xuICAgIGlmICghY3VzdG9taXphdGlvbnMpXG4gICAgICAgIHJldHVybiBiYXNlQ3RvcjtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBjbGFzcyBDdXN0b21pemFibGVTVFNDbGllbnQgZXh0ZW5kcyBiYXNlQ3RvciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY3VzdG9taXphdGlvbiBvZiBjdXN0b21pemF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UoY3VzdG9taXphdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xufTtcbmNvbnN0IGdldERlZmF1bHRSb2xlQXNzdW1lciA9IChzdHNPcHRpb25zID0ge30sIHN0c1BsdWdpbnMpID0+IGdldERlZmF1bHRSb2xlQXNzdW1lciQxKHN0c09wdGlvbnMsIGdldEN1c3RvbWl6YWJsZVN0c0NsaWVudEN0b3IoU1RTQ2xpZW50LlNUU0NsaWVudCwgc3RzUGx1Z2lucykpO1xuY29uc3QgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5ID0gKHN0c09wdGlvbnMgPSB7fSwgc3RzUGx1Z2lucykgPT4gZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5JDEoc3RzT3B0aW9ucywgZ2V0Q3VzdG9taXphYmxlU3RzQ2xpZW50Q3RvcihTVFNDbGllbnQuU1RTQ2xpZW50LCBzdHNQbHVnaW5zKSk7XG5jb25zdCBkZWNvcmF0ZURlZmF1bHRDcmVkZW50aWFsUHJvdmlkZXIgPSAocHJvdmlkZXIpID0+IChpbnB1dCkgPT4gcHJvdmlkZXIoe1xuICAgIHJvbGVBc3N1bWVyOiBnZXREZWZhdWx0Um9sZUFzc3VtZXIoaW5wdXQpLFxuICAgIHJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5OiBnZXREZWZhdWx0Um9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkoaW5wdXQpLFxuICAgIC4uLmlucHV0LFxufSk7XG5cbmV4cG9ydHMuJENvbW1hbmQgPSBzbWl0aHlDbGllbnQuQ29tbWFuZDtcbmV4cG9ydHMuU1RTU2VydmljZUV4Y2VwdGlvbiA9IFNUU1NlcnZpY2VFeGNlcHRpb24uU1RTU2VydmljZUV4Y2VwdGlvbjtcbmV4cG9ydHMuQXNzdW1lUm9sZUNvbW1hbmQgPSBBc3N1bWVSb2xlQ29tbWFuZDtcbmV4cG9ydHMuQXNzdW1lUm9sZVdpdGhTQU1MQ29tbWFuZCA9IEFzc3VtZVJvbGVXaXRoU0FNTENvbW1hbmQ7XG5leHBvcnRzLkFzc3VtZVJvbGVXaXRoV2ViSWRlbnRpdHlDb21tYW5kID0gQXNzdW1lUm9sZVdpdGhXZWJJZGVudGl0eUNvbW1hbmQ7XG5leHBvcnRzLkFzc3VtZVJvb3RDb21tYW5kID0gQXNzdW1lUm9vdENvbW1hbmQ7XG5leHBvcnRzLkRlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlQ29tbWFuZCA9IERlY29kZUF1dGhvcml6YXRpb25NZXNzYWdlQ29tbWFuZDtcbmV4cG9ydHMuR2V0QWNjZXNzS2V5SW5mb0NvbW1hbmQgPSBHZXRBY2Nlc3NLZXlJbmZvQ29tbWFuZDtcbmV4cG9ydHMuR2V0Q2FsbGVySWRlbnRpdHlDb21tYW5kID0gR2V0Q2FsbGVySWRlbnRpdHlDb21tYW5kO1xuZXhwb3J0cy5HZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlbkNvbW1hbmQgPSBHZXREZWxlZ2F0ZWRBY2Nlc3NUb2tlbkNvbW1hbmQ7XG5leHBvcnRzLkdldEZlZGVyYXRpb25Ub2tlbkNvbW1hbmQgPSBHZXRGZWRlcmF0aW9uVG9rZW5Db21tYW5kO1xuZXhwb3J0cy5HZXRTZXNzaW9uVG9rZW5Db21tYW5kID0gR2V0U2Vzc2lvblRva2VuQ29tbWFuZDtcbmV4cG9ydHMuR2V0V2ViSWRlbnRpdHlUb2tlbkNvbW1hbmQgPSBHZXRXZWJJZGVudGl0eVRva2VuQ29tbWFuZDtcbmV4cG9ydHMuU1RTID0gU1RTO1xuZXhwb3J0cy5kZWNvcmF0ZURlZmF1bHRDcmVkZW50aWFsUHJvdmlkZXIgPSBkZWNvcmF0ZURlZmF1bHRDcmVkZW50aWFsUHJvdmlkZXI7XG5leHBvcnRzLmdldERlZmF1bHRSb2xlQXNzdW1lciA9IGdldERlZmF1bHRSb2xlQXNzdW1lcjtcbmV4cG9ydHMuZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5ID0gZ2V0RGVmYXVsdFJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5O1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFNUU0NsaWVudCwgJ19fcHJvdG9fXycpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFNUU0NsaWVudFsnX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoU1RTQ2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gU1RTQ2xpZW50W2tdO1xufSk7XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2NoZW1hc18wLCAnX19wcm90b19fJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsICdfX3Byb3RvX18nKSAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19wcm90b19fJywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogc2NoZW1hc18wWydfX3Byb3RvX18nXVxuICAgIH0pO1xuXG5PYmplY3Qua2V5cyhzY2hlbWFzXzApLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBzY2hlbWFzXzBba107XG59KTtcbk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlcnJvcnMsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBlcnJvcnNbJ19fcHJvdG9fXyddXG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGVycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBrKSkgZXhwb3J0c1trXSA9IGVycm9yc1trXTtcbn0pO1xuIl0sCiAgIm1h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QUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEdBQUcsWUFBWSxFQUFFLGFBQWEsQ0FBQyxFQUFFLE1BQU0sR0FBRyxhQUFhLEdBQUcsZUFBZSxXQUFXLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZLEdBQUcsT0FBTyxxRUFBcUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxHQUFHLE9BQU8sMEVBQTBFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEdBQUcsWUFBWSxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLGtFQUFrRSxZQUFZLEdBQUcsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxtRkFBbUYsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsS0FBSyxzQ0FBc0MsWUFBWSxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLHlEQUF5RCxZQUFZLEdBQUcsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyw0REFBNEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUs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LFNBQVM7QUFDZixRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLEtBQUs7QUFDWCxRQUFNLE1BQU07QUFDWixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFNBQVM7QUFDZixRQUFNLE1BQU07QUFDWixRQUFNLE9BQU87QUFDYixRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVU7QUFDaEIsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sT0FBTztBQUNiLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sT0FBTztBQUNiLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sVUFBVTtBQUNoQixRQUFNLEtBQUs7QUFDWCxRQUFNLFFBQVE7QUFDZCxRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sUUFBUTtBQUNkLFFBQU0sV0FBVztBQUNqQixRQUFNLEtBQUs7QUFDWCxRQUFNLFFBQVE7QUFDZCxRQUFNLEtBQUs7QUFDWCxRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxNQUFNO0FBQ1osUUFBTSxRQUFRO0FBQ2QsUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxTQUFTO0FBQ2YsUUFBTSxNQUFNO0FBQ1osUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxLQUFLO0FBQ1gsUUFBTSxNQUFNO0FBQ1osUUFBTSxPQUFPO0FBQ2IsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sUUFBUTtB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
