#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-RR3PN36J.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-NE3ECB5D.mjs";
import {
  init_tslib_es6,
  require_dist_cjs4,
  tslib_es6_exports
} from "./chunk-44NP7LPQ.mjs";
import {
  require_dist_cjs3 as require_dist_cjs2
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js
var require_checkUrl = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkUrl = void 0;
    var property_provider_1 = require_dist_cjs3();
    var ECS_CONTAINER_HOST = "169.254.170.2";
    var EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    var EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    var checkUrl = (url, logger) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new property_provider_1.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger });
    };
    exports.checkUrl = checkUrl;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js
var require_requestHelpers = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createGetRequest = createGetRequest;
    exports.getCredentials = getCredentials;
    var property_provider_1 = require_dist_cjs3();
    var protocol_http_1 = require_dist_cjs();
    var smithy_client_1 = require_dist_cjs5();
    var util_stream_1 = require_dist_cjs4();
    function createGetRequest(url) {
      return new protocol_http_1.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
          acc[k] = v;
          return acc;
        }, {}),
        fragment: url.hash
      });
    }
    async function getCredentials(response, logger) {
      const stream = (0, util_stream_1.sdkStreamMixin)(response.body);
      const str = await stream.transformToString();
      if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
          throw new property_provider_1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger });
        }
        return {
          accessKeyId: parsed.AccessKeyId,
          secretAccessKey: parsed.SecretAccessKey,
          sessionToken: parsed.Token,
          expiration: (0, smithy_client_1.parseRfc3339DateTime)(parsed.Expiration)
        };
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
          parsedBody = JSON.parse(str);
        } catch (e) {
        }
        throw Object.assign(new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger }), {
          Code: parsedBody.Code,
          Message: parsedBody.Message
        });
      }
      throw new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger });
    }
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js
var require_retry_wrapper = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryWrapper = void 0;
    var retryWrapper = (toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i = 0; i < maxRetries; ++i) {
          try {
            return await toRetry();
          } catch (e) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    };
    exports.retryWrapper = retryWrapper;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js
var require_fromHttp = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromHttp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var node_http_handler_1 = require_dist_cjs2();
    var property_provider_1 = require_dist_cjs3();
    var promises_1 = tslib_1.__importDefault(__require("node:fs/promises"));
    var checkUrl_1 = require_checkUrl();
    var requestHelpers_1 = require_requestHelpers();
    var retry_wrapper_1 = require_retry_wrapper();
    var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    var AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromHttp = (options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger?.warn ? console.warn : options.logger.warn.bind(options.logger);
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new property_provider_1.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      (0, checkUrl_1.checkUrl)(url, options.logger);
      const requestHandler = node_http_handler_1.NodeHttpHandler.create({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return (0, retry_wrapper_1.retryWrapper)(async () => {
        const request = (0, requestHelpers_1.createGetRequest)(url);
        if (token) {
          request.headers.Authorization = token;
        } else if (tokenFile) {
          request.headers.Authorization = (await promises_1.default.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request);
          return (0, requestHelpers_1.getCredentials)(result.response).then((creds) => (0, client_1.setCredentialFeature)(creds, "CREDENTIALS_HTTP", "z"));
        } catch (e) {
          throw new property_provider_1.CredentialsProviderError(String(e), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    };
    exports.fromHttp = fromHttp;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-http@3.972.26/node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromHttp = void 0;
    var fromHttp_1 = require_fromHttp();
    Object.defineProperty(exports, "fromHttp", { enumerable: true, get: function() {
      return fromHttp_1.fromHttp;
    } });
  }
});

export {
  require_dist_cjs6 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cEAzLjk3Mi4yNi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwL2Rpc3QtY2pzL2Zyb21IdHRwL2NoZWNrVXJsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyLWh0dHBAMy45NzIuMjYvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWNqcy9mcm9tSHR0cC9yZXF1ZXN0SGVscGVycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuOTcyLjI2L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWh0dHAvZGlzdC1janMvZnJvbUh0dHAvcmV0cnktd3JhcHBlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuOTcyLjI2L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWh0dHAvZGlzdC1janMvZnJvbUh0dHAvZnJvbUh0dHAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cEAzLjk3Mi4yNi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tVcmwgPSB2b2lkIDA7XG5jb25zdCBwcm9wZXJ0eV9wcm92aWRlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvcHJvcGVydHktcHJvdmlkZXJcIik7XG5jb25zdCBMT09QQkFDS19DSURSX0lQdjQgPSBcIjEyNy4wLjAuMC84XCI7XG5jb25zdCBMT09QQkFDS19DSURSX0lQdjYgPSBcIjo6MS8xMjhcIjtcbmNvbnN0IEVDU19DT05UQUlORVJfSE9TVCA9IFwiMTY5LjI1NC4xNzAuMlwiO1xuY29uc3QgRUtTX0NPTlRBSU5FUl9IT1NUX0lQdjQgPSBcIjE2OS4yNTQuMTcwLjIzXCI7XG5jb25zdCBFS1NfQ09OVEFJTkVSX0hPU1RfSVB2NiA9IFwiW2ZkMDA6ZWMyOjoyM11cIjtcbmNvbnN0IGNoZWNrVXJsID0gKHVybCwgbG9nZ2VyKSA9PiB7XG4gICAgaWYgKHVybC5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cmwuaG9zdG5hbWUgPT09IEVDU19DT05UQUlORVJfSE9TVCB8fFxuICAgICAgICB1cmwuaG9zdG5hbWUgPT09IEVLU19DT05UQUlORVJfSE9TVF9JUHY0IHx8XG4gICAgICAgIHVybC5ob3N0bmFtZSA9PT0gRUtTX0NPTlRBSU5FUl9IT1NUX0lQdjYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXJsLmhvc3RuYW1lLmluY2x1ZGVzKFwiW1wiKSkge1xuICAgICAgICBpZiAodXJsLmhvc3RuYW1lID09PSBcIls6OjFdXCIgfHwgdXJsLmhvc3RuYW1lID09PSBcIlswMDAwOjAwMDA6MDAwMDowMDAwOjAwMDA6MDAwMDowMDAwOjAwMDFdXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHVybC5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlwQ29tcG9uZW50cyA9IHVybC5ob3N0bmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgIGNvbnN0IGluUmFuZ2UgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChjb21wb25lbnQsIDEwKTtcbiAgICAgICAgICAgIHJldHVybiAwIDw9IG51bSAmJiBudW0gPD0gMjU1O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXBDb21wb25lbnRzWzBdID09PSBcIjEyN1wiICYmXG4gICAgICAgICAgICBpblJhbmdlKGlwQ29tcG9uZW50c1sxXSkgJiZcbiAgICAgICAgICAgIGluUmFuZ2UoaXBDb21wb25lbnRzWzJdKSAmJlxuICAgICAgICAgICAgaW5SYW5nZShpcENvbXBvbmVudHNbM10pICYmXG4gICAgICAgICAgICBpcENvbXBvbmVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IHByb3BlcnR5X3Byb3ZpZGVyXzEuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBVUkwgbm90IGFjY2VwdGVkLiBJdCBtdXN0IGVpdGhlciBiZSBIVFRQUyBvciBtYXRjaCBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAgLSBsb29wYmFjayBDSURSIDEyNy4wLjAuMC84IG9yIFs6OjEvMTI4XVxuICAtIEVDUyBjb250YWluZXIgaG9zdCAxNjkuMjU0LjE3MC4yXG4gIC0gRUtTIGNvbnRhaW5lciBob3N0IDE2OS4yNTQuMTcwLjIzIG9yIFtmZDAwOmVjMjo6MjNdYCwgeyBsb2dnZXIgfSk7XG59O1xuZXhwb3J0cy5jaGVja1VybCA9IGNoZWNrVXJsO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVHZXRSZXF1ZXN0ID0gY3JlYXRlR2V0UmVxdWVzdDtcbmV4cG9ydHMuZ2V0Q3JlZGVudGlhbHMgPSBnZXRDcmVkZW50aWFscztcbmNvbnN0IHByb3BlcnR5X3Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiKTtcbmNvbnN0IHByb3RvY29sX2h0dHBfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIik7XG5jb25zdCBzbWl0aHlfY2xpZW50XzEgPSByZXF1aXJlKFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCIpO1xuY29uc3QgdXRpbF9zdHJlYW1fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtc3RyZWFtXCIpO1xuZnVuY3Rpb24gY3JlYXRlR2V0UmVxdWVzdCh1cmwpIHtcbiAgICByZXR1cm4gbmV3IHByb3RvY29sX2h0dHBfMS5IdHRwUmVxdWVzdCh7XG4gICAgICAgIHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG4gICAgICAgIGhvc3RuYW1lOiB1cmwuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IE51bWJlcih1cmwucG9ydCksXG4gICAgICAgIHBhdGg6IHVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnk6IEFycmF5LmZyb20odXJsLnNlYXJjaFBhcmFtcy5lbnRyaWVzKCkpLnJlZHVjZSgoYWNjLCBbaywgdl0pID0+IHtcbiAgICAgICAgICAgIGFjY1trXSA9IHY7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSksXG4gICAgICAgIGZyYWdtZW50OiB1cmwuaGFzaCxcbiAgICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldENyZWRlbnRpYWxzKHJlc3BvbnNlLCBsb2dnZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSAoMCwgdXRpbF9zdHJlYW1fMS5zZGtTdHJlYW1NaXhpbikocmVzcG9uc2UuYm9keSk7XG4gICAgY29uc3Qgc3RyID0gYXdhaXQgc3RyZWFtLnRyYW5zZm9ybVRvU3RyaW5nKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLkFjY2Vzc0tleUlkICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgcGFyc2VkLlNlY3JldEFjY2Vzc0tleSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHBhcnNlZC5Ub2tlbiAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHBhcnNlZC5FeHBpcmF0aW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlfcHJvdmlkZXJfMS5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJIVFRQIGNyZWRlbnRpYWwgcHJvdmlkZXIgcmVzcG9uc2Ugbm90IG9mIHRoZSByZXF1aXJlZCBmb3JtYXQsIGFuIG9iamVjdCBtYXRjaGluZzogXCIgK1xuICAgICAgICAgICAgICAgIFwieyBBY2Nlc3NLZXlJZDogc3RyaW5nLCBTZWNyZXRBY2Nlc3NLZXk6IHN0cmluZywgVG9rZW46IHN0cmluZywgRXhwaXJhdGlvbjogc3RyaW5nKHJmYzMzMzkpIH1cIiwgeyBsb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwYXJzZWQuQWNjZXNzS2V5SWQsXG4gICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHBhcnNlZC5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IHBhcnNlZC5Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246ICgwLCBzbWl0aHlfY2xpZW50XzEucGFyc2VSZmMzMzM5RGF0ZVRpbWUpKHBhcnNlZC5FeHBpcmF0aW9uKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCA1MDApIHtcbiAgICAgICAgbGV0IHBhcnNlZEJvZHkgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcnNlZEJvZHkgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBwcm9wZXJ0eV9wcm92aWRlcl8xLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgU2VydmVyIHJlc3BvbmRlZCB3aXRoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXNDb2RlfWAsIHsgbG9nZ2VyIH0pLCB7XG4gICAgICAgICAgICBDb2RlOiBwYXJzZWRCb2R5LkNvZGUsXG4gICAgICAgICAgICBNZXNzYWdlOiBwYXJzZWRCb2R5Lk1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgcHJvcGVydHlfcHJvdmlkZXJfMS5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYFNlcnZlciByZXNwb25kZWQgd2l0aCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gLCB7IGxvZ2dlciB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0cnlXcmFwcGVyID0gdm9pZCAwO1xuY29uc3QgcmV0cnlXcmFwcGVyID0gKHRvUmV0cnksIG1heFJldHJpZXMsIGRlbGF5TXMpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFJldHJpZXM7ICsraSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdG9SZXRyeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheU1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRvUmV0cnkoKTtcbiAgICB9O1xufTtcbmV4cG9ydHMucmV0cnlXcmFwcGVyID0gcmV0cnlXcmFwcGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tSHR0cCA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiKTtcbmNvbnN0IG5vZGVfaHR0cF9oYW5kbGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlclwiKTtcbmNvbnN0IHByb3BlcnR5X3Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiKTtcbmNvbnN0IHByb21pc2VzXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibm9kZTpmcy9wcm9taXNlc1wiKSk7XG5jb25zdCBjaGVja1VybF8xID0gcmVxdWlyZShcIi4vY2hlY2tVcmxcIik7XG5jb25zdCByZXF1ZXN0SGVscGVyc18xID0gcmVxdWlyZShcIi4vcmVxdWVzdEhlbHBlcnNcIik7XG5jb25zdCByZXRyeV93cmFwcGVyXzEgPSByZXF1aXJlKFwiLi9yZXRyeS13cmFwcGVyXCIpO1xuY29uc3QgQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19SRUxBVElWRV9VUkkgPSBcIkFXU19DT05UQUlORVJfQ1JFREVOVElBTFNfUkVMQVRJVkVfVVJJXCI7XG5jb25zdCBERUZBVUxUX0xJTktfTE9DQUxfSE9TVCA9IFwiaHR0cDovLzE2OS4yNTQuMTcwLjJcIjtcbmNvbnN0IEFXU19DT05UQUlORVJfQ1JFREVOVElBTFNfRlVMTF9VUkkgPSBcIkFXU19DT05UQUlORVJfQ1JFREVOVElBTFNfRlVMTF9VUklcIjtcbmNvbnN0IEFXU19DT05UQUlORVJfQVVUSE9SSVpBVElPTl9UT0tFTl9GSUxFID0gXCJBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5fRklMRVwiO1xuY29uc3QgQVdTX0NPTlRBSU5FUl9BVVRIT1JJWkFUSU9OX1RPS0VOID0gXCJBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5cIjtcbmNvbnN0IGZyb21IdHRwID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIG9wdGlvbnMubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cCAtIGZyb21IdHRwXCIpO1xuICAgIGxldCBob3N0O1xuICAgIGNvbnN0IHJlbGF0aXZlID0gb3B0aW9ucy5hd3NDb250YWluZXJDcmVkZW50aWFsc1JlbGF0aXZlVXJpID8/IHByb2Nlc3MuZW52W0FXU19DT05UQUlORVJfQ1JFREVOVElBTFNfUkVMQVRJVkVfVVJJXTtcbiAgICBjb25zdCBmdWxsID0gb3B0aW9ucy5hd3NDb250YWluZXJDcmVkZW50aWFsc0Z1bGxVcmkgPz8gcHJvY2Vzcy5lbnZbQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19GVUxMX1VSSV07XG4gICAgY29uc3QgdG9rZW4gPSBvcHRpb25zLmF3c0NvbnRhaW5lckF1dGhvcml6YXRpb25Ub2tlbiA/PyBwcm9jZXNzLmVudltBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5dO1xuICAgIGNvbnN0IHRva2VuRmlsZSA9IG9wdGlvbnMuYXdzQ29udGFpbmVyQXV0aG9yaXphdGlvblRva2VuRmlsZSA/PyBwcm9jZXNzLmVudltBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5fRklMRV07XG4gICAgY29uc3Qgd2FybiA9IG9wdGlvbnMubG9nZ2VyPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJOb09wTG9nZ2VyXCIgfHwgIW9wdGlvbnMubG9nZ2VyPy53YXJuXG4gICAgICAgID8gY29uc29sZS53YXJuXG4gICAgICAgIDogb3B0aW9ucy5sb2dnZXIud2Fybi5iaW5kKG9wdGlvbnMubG9nZ2VyKTtcbiAgICBpZiAocmVsYXRpdmUgJiYgZnVsbCkge1xuICAgICAgICB3YXJuKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwOiBcIiArXG4gICAgICAgICAgICBcInlvdSBoYXZlIHNldCBib3RoIGF3c0NvbnRhaW5lckNyZWRlbnRpYWxzUmVsYXRpdmVVcmkgYW5kIGF3c0NvbnRhaW5lckNyZWRlbnRpYWxzRnVsbFVyaS5cIik7XG4gICAgICAgIHdhcm4oXCJhd3NDb250YWluZXJDcmVkZW50aWFsc0Z1bGxVcmkgd2lsbCB0YWtlIHByZWNlZGVuY2UuXCIpO1xuICAgIH1cbiAgICBpZiAodG9rZW4gJiYgdG9rZW5GaWxlKSB7XG4gICAgICAgIHdhcm4oXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWh0dHA6IFwiICtcbiAgICAgICAgICAgIFwieW91IGhhdmUgc2V0IGJvdGggYXdzQ29udGFpbmVyQXV0aG9yaXphdGlvblRva2VuIGFuZCBhd3NDb250YWluZXJBdXRob3JpemF0aW9uVG9rZW5GaWxlLlwiKTtcbiAgICAgICAgd2FybihcImF3c0NvbnRhaW5lckF1dGhvcml6YXRpb25Ub2tlbiB3aWxsIHRha2UgcHJlY2VkZW5jZS5cIik7XG4gICAgfVxuICAgIGlmIChmdWxsKSB7XG4gICAgICAgIGhvc3QgPSBmdWxsO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICBob3N0ID0gYCR7REVGQVVMVF9MSU5LX0xPQ0FMX0hPU1R9JHtyZWxhdGl2ZX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5X3Byb3ZpZGVyXzEuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBObyBIVFRQIGNyZWRlbnRpYWwgcHJvdmlkZXIgaG9zdCBwcm92aWRlZC5cblNldCBBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX0ZVTExfVVJJIG9yIEFXU19DT05UQUlORVJfQ1JFREVOVElBTFNfUkVMQVRJVkVfVVJJLmAsIHsgbG9nZ2VyOiBvcHRpb25zLmxvZ2dlciB9KTtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChob3N0KTtcbiAgICAoMCwgY2hlY2tVcmxfMS5jaGVja1VybCkodXJsLCBvcHRpb25zLmxvZ2dlcik7XG4gICAgY29uc3QgcmVxdWVzdEhhbmRsZXIgPSBub2RlX2h0dHBfaGFuZGxlcl8xLk5vZGVIdHRwSGFuZGxlci5jcmVhdGUoe1xuICAgICAgICByZXF1ZXN0VGltZW91dDogb3B0aW9ucy50aW1lb3V0ID8/IDEwMDAsXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lb3V0OiBvcHRpb25zLnRpbWVvdXQgPz8gMTAwMCxcbiAgICB9KTtcbiAgICByZXR1cm4gKDAsIHJldHJ5X3dyYXBwZXJfMS5yZXRyeVdyYXBwZXIpKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICgwLCByZXF1ZXN0SGVscGVyc18xLmNyZWF0ZUdldFJlcXVlc3QpKHVybCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbkZpbGUpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gKGF3YWl0IHByb21pc2VzXzEuZGVmYXVsdC5yZWFkRmlsZSh0b2tlbkZpbGUpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0SGFuZGxlci5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIHJlcXVlc3RIZWxwZXJzXzEuZ2V0Q3JlZGVudGlhbHMpKHJlc3VsdC5yZXNwb25zZSkudGhlbigoY3JlZHMpID0+ICgwLCBjbGllbnRfMS5zZXRDcmVkZW50aWFsRmVhdHVyZSkoY3JlZHMsIFwiQ1JFREVOVElBTFNfSFRUUFwiLCBcInpcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlfcHJvdmlkZXJfMS5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoU3RyaW5nKGUpLCB7IGxvZ2dlcjogb3B0aW9ucy5sb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICB9LCBvcHRpb25zLm1heFJldHJpZXMgPz8gMywgb3B0aW9ucy50aW1lb3V0ID8/IDEwMDApO1xufTtcbmV4cG9ydHMuZnJvbUh0dHAgPSBmcm9tSHR0cDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUh0dHAgPSB2b2lkIDA7XG52YXIgZnJvbUh0dHBfMSA9IHJlcXVpcmUoXCIuL2Zyb21IdHRwL2Zyb21IdHRwXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbUh0dHBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyb21IdHRwXzEuZnJvbUh0dHA7IH0gfSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsV0FBVztBQUNuQixRQUFNLHNCQUFzQjtBQUc1QixRQUFNLHFCQUFxQjtBQUMzQixRQUFNLDBCQUEwQjtBQUNoQyxRQUFNLDBCQUEwQjtBQUNoQyxRQUFNLFdBQVcsQ0FBQyxLQUFLLFdBQVc7QUFDOUIsVUFBSSxJQUFJLGFBQWEsVUFBVTtBQUMzQjtBQUFBLE1BQ0o7QUFDQSxVQUFJLElBQUksYUFBYSxzQkFDakIsSUFBSSxhQUFh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
