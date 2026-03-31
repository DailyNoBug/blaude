#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-EZHETOM7.mjs";
import {
  require_dist_cjs
} from "./chunk-NE3ECB5D.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-FONUB5ET.mjs";
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+credential-provider-imds@4.2.12/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/.pnpm/@smithy+credential-provider-imds@4.2.12/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js"(exports) {
    var propertyProvider = require_dist_cjs();
    var url = __require("url");
    var buffer = __require("buffer");
    var http = __require("http");
    var nodeConfigProvider = require_dist_cjs2();
    var urlParser = require_dist_cjs3();
    function httpRequest(options) {
      return new Promise((resolve, reject) => {
        const req = http.request({
          method: "GET",
          ...options,
          hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
        });
        req.on("error", (err) => {
          reject(Object.assign(new propertyProvider.ProviderError("Unable to connect to instance metadata service"), err));
          req.destroy();
        });
        req.on("timeout", () => {
          reject(new propertyProvider.ProviderError("TimeoutError from instance metadata service"));
          req.destroy();
        });
        req.on("response", (res) => {
          const { statusCode = 400 } = res;
          if (statusCode < 200 || 300 <= statusCode) {
            reject(Object.assign(new propertyProvider.ProviderError("Error response received from instance metadata service"), { statusCode }));
            req.destroy();
          }
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            resolve(buffer.Buffer.concat(chunks));
            req.destroy();
          });
        });
        req.end();
      });
    }
    var isImdsCredentials = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string";
    var fromImdsCredentials = (creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration),
      ...creds.AccountId && { accountId: creds.AccountId }
    });
    var DEFAULT_TIMEOUT = 1e3;
    var DEFAULT_MAX_RETRIES = 0;
    var providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout });
    var retry = (toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    };
    var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromContainerMetadata = (init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new propertyProvider.CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    };
    var requestFromEcsImds = async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer2 = await httpRequest({
        ...options,
        timeout
      });
      return buffer2.toString();
    };
    var CMDS_IP = "169.254.170.2";
    var GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    var GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    var getCmdsUri = async ({ logger }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = url.parse(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new propertyProvider.CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new propertyProvider.CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new propertyProvider.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger
      });
    };
    var InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends propertyProvider.CredentialsProviderError {
      tryNextLink;
      name = "InstanceMetadataV1FallbackError";
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
    };
    exports.Endpoint = void 0;
    (function(Endpoint) {
      Endpoint["IPv4"] = "http://169.254.169.254";
      Endpoint["IPv6"] = "http://[fd00:ec2::254]";
    })(exports.Endpoint || (exports.Endpoint = {}));
    var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    var ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
      default: void 0
    };
    var EndpointMode;
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode || (EndpointMode = {}));
    var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    var ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
      default: EndpointMode.IPv4
    };
    var getInstanceMetadataEndpoint = async () => urlParser.parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig());
    var getFromEndpointConfig = async () => nodeConfigProvider.loadConfig(ENDPOINT_CONFIG_OPTIONS)();
    var getFromEndpointModeConfig = async () => {
      const endpointMode = await nodeConfigProvider.loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode.IPv4:
          return exports.Endpoint.IPv4;
        case EndpointMode.IPv6:
          return exports.Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    };
    var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    var getExtendedInstanceMetadataCredentials = (credentials, logger) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL);
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    };
    var staticStabilityProvider = (provider, options = {}) => {
      const logger = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
          }
        } catch (e) {
          if (pastCredentials) {
            logger.warn("Credential renew failed: ", e);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
          } else {
            throw e;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    };
    var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    var IMDS_TOKEN_PATH = "/latest/api/token";
    var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    var fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger });
    var getInstanceMetadataProvider = (init = {}) => {
      let disableFetchToken = false;
      const { logger, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials = async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await nodeConfigProvider.loadConfig({
            environmentVariableSelector: (env) => {
              const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new propertyProvider.CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`, { logger: init.logger });
              }
              return fallbackBlockedFromProcessEnv;
            },
            configFileSelector: (profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            },
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      };
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    };
    var getMetadataToken = async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    });
    var getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
    var getCredentialsFromProfile = async (profile, options, init) => {
      const credentialsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!isImdsCredentials(credentialsResponse)) {
        throw new propertyProvider.CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    };
    exports.DEFAULT_MAX_RETRIES = DEFAULT_MAX_RETRIES;
    exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
    exports.ENV_CMDS_AUTH_TOKEN = ENV_CMDS_AUTH_TOKEN;
    exports.ENV_CMDS_FULL_URI = ENV_CMDS_FULL_URI;
    exports.ENV_CMDS_RELATIVE_URI = ENV_CMDS_RELATIVE_URI;
    exports.fromContainerMetadata = fromContainerMetadata;
    exports.fromInstanceMetadata = fromInstanceMetadata;
    exports.getInstanceMetadataEndpoint = getInstanceMetadataEndpoint;
    exports.httpRequest = httpRequest;
    exports.providerConfigFromInit = providerConfigFromInit;
  }
});

export {
  require_dist_cjs4 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY3JlZGVudGlhbC1wcm92aWRlci1pbWRzQDQuMi4xMi9ub2RlX21vZHVsZXMvQHNtaXRoeS9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHMvZGlzdC1janMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcblxudmFyIHByb3BlcnR5UHJvdmlkZXIgPSByZXF1aXJlKCdAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyJyk7XG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBub2RlQ29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKCdAc21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyJyk7XG52YXIgdXJsUGFyc2VyID0gcmVxdWlyZSgnQHNtaXRoeS91cmwtcGFyc2VyJyk7XG5cbmZ1bmN0aW9uIGh0dHBSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBvcHRpb25zLmhvc3RuYW1lPy5yZXBsYWNlKC9eXFxbKC4rKVxcXSQvLCBcIiQxXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVxLm9uKFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KE9iamVjdC5hc3NpZ24obmV3IHByb3BlcnR5UHJvdmlkZXIuUHJvdmlkZXJFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIGluc3RhbmNlIG1ldGFkYXRhIHNlcnZpY2VcIiksIGVycikpO1xuICAgICAgICAgICAgcmVxLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5vbihcInRpbWVvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlByb3ZpZGVyRXJyb3IoXCJUaW1lb3V0RXJyb3IgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlXCIpKTtcbiAgICAgICAgICAgIHJlcS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXEub24oXCJyZXNwb25zZVwiLCAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgPSA0MDAgfSA9IHJlcztcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlIDwgMjAwIHx8IDMwMCA8PSBzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KE9iamVjdC5hc3NpZ24obmV3IHByb3BlcnR5UHJvdmlkZXIuUHJvdmlkZXJFcnJvcihcIkVycm9yIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZVwiKSwgeyBzdGF0dXNDb2RlIH0pKTtcbiAgICAgICAgICAgICAgICByZXEuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgICAgICByZXMub24oXCJkYXRhXCIsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJ1ZmZlci5CdWZmZXIuY29uY2F0KGNodW5rcykpO1xuICAgICAgICAgICAgICAgIHJlcS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5lbmQoKTtcbiAgICB9KTtcbn1cblxuY29uc3QgaXNJbWRzQ3JlZGVudGlhbHMgPSAoYXJnKSA9PiBCb29sZWFuKGFyZykgJiZcbiAgICB0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiICYmXG4gICAgdHlwZW9mIGFyZy5BY2Nlc3NLZXlJZCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgIHR5cGVvZiBhcmcuU2VjcmV0QWNjZXNzS2V5ID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIGFyZy5Ub2tlbiA9PT0gXCJzdHJpbmdcIiAmJlxuICAgIHR5cGVvZiBhcmcuRXhwaXJhdGlvbiA9PT0gXCJzdHJpbmdcIjtcbmNvbnN0IGZyb21JbWRzQ3JlZGVudGlhbHMgPSAoY3JlZHMpID0+ICh7XG4gICAgYWNjZXNzS2V5SWQ6IGNyZWRzLkFjY2Vzc0tleUlkLFxuICAgIHNlY3JldEFjY2Vzc0tleTogY3JlZHMuU2VjcmV0QWNjZXNzS2V5LFxuICAgIHNlc3Npb25Ub2tlbjogY3JlZHMuVG9rZW4sXG4gICAgZXhwaXJhdGlvbjogbmV3IERhdGUoY3JlZHMuRXhwaXJhdGlvbiksXG4gICAgLi4uKGNyZWRzLkFjY291bnRJZCAmJiB7IGFjY291bnRJZDogY3JlZHMuQWNjb3VudElkIH0pLFxufSk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX01BWF9SRVRSSUVTID0gMDtcbmNvbnN0IHByb3ZpZGVyQ29uZmlnRnJvbUluaXQgPSAoeyBtYXhSZXRyaWVzID0gREVGQVVMVF9NQVhfUkVUUklFUywgdGltZW91dCA9IERFRkFVTFRfVElNRU9VVCwgfSkgPT4gKHsgbWF4UmV0cmllcywgdGltZW91dCB9KTtcblxuY29uc3QgcmV0cnkgPSAodG9SZXRyeSwgbWF4UmV0cmllcykgPT4ge1xuICAgIGxldCBwcm9taXNlID0gdG9SZXRyeSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4UmV0cmllczsgaSsrKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKHRvUmV0cnkpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbmNvbnN0IEVOVl9DTURTX0ZVTExfVVJJID0gXCJBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX0ZVTExfVVJJXCI7XG5jb25zdCBFTlZfQ01EU19SRUxBVElWRV9VUkkgPSBcIkFXU19DT05UQUlORVJfQ1JFREVOVElBTFNfUkVMQVRJVkVfVVJJXCI7XG5jb25zdCBFTlZfQ01EU19BVVRIX1RPS0VOID0gXCJBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5cIjtcbmNvbnN0IGZyb21Db250YWluZXJNZXRhZGF0YSA9IChpbml0ID0ge30pID0+IHtcbiAgICBjb25zdCB7IHRpbWVvdXQsIG1heFJldHJpZXMgfSA9IHByb3ZpZGVyQ29uZmlnRnJvbUluaXQoaW5pdCk7XG4gICAgcmV0dXJuICgpID0+IHJldHJ5KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBhd2FpdCBnZXRDbWRzVXJpKHsgbG9nZ2VyOiBpbml0LmxvZ2dlciB9KTtcbiAgICAgICAgY29uc3QgY3JlZHNSZXNwb25zZSA9IEpTT04ucGFyc2UoYXdhaXQgcmVxdWVzdEZyb21FY3NJbWRzKHRpbWVvdXQsIHJlcXVlc3RPcHRpb25zKSk7XG4gICAgICAgIGlmICghaXNJbWRzQ3JlZGVudGlhbHMoY3JlZHNSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlLlwiLCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyOiBpbml0LmxvZ2dlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRzUmVzcG9uc2UpO1xuICAgIH0sIG1heFJldHJpZXMpO1xufTtcbmNvbnN0IHJlcXVlc3RGcm9tRWNzSW1kcyA9IGFzeW5jICh0aW1lb3V0LCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52W0VOVl9DTURTX0FVVEhfVE9LRU5dKSB7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHByb2Nlc3MuZW52W0VOVl9DTURTX0FVVEhfVE9LRU5dLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBodHRwUmVxdWVzdCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRpbWVvdXQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xufTtcbmNvbnN0IENNRFNfSVAgPSBcIjE2OS4yNTQuMTcwLjJcIjtcbmNvbnN0IEdSRUVOR1JBU1NfSE9TVFMgPSB7XG4gICAgbG9jYWxob3N0OiB0cnVlLFxuICAgIFwiMTI3LjAuMC4xXCI6IHRydWUsXG59O1xuY29uc3QgR1JFRU5HUkFTU19QUk9UT0NPTFMgPSB7XG4gICAgXCJodHRwOlwiOiB0cnVlLFxuICAgIFwiaHR0cHM6XCI6IHRydWUsXG59O1xuY29uc3QgZ2V0Q21kc1VyaSA9IGFzeW5jICh7IGxvZ2dlciB9KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52W0VOVl9DTURTX1JFTEFUSVZFX1VSSV0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvc3RuYW1lOiBDTURTX0lQLFxuICAgICAgICAgICAgcGF0aDogcHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UocHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldKTtcbiAgICAgICAgaWYgKCFwYXJzZWQuaG9zdG5hbWUgfHwgIShwYXJzZWQuaG9zdG5hbWUgaW4gR1JFRU5HUkFTU19IT1NUUykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgJHtwYXJzZWQuaG9zdG5hbWV9IGlzIG5vdCBhIHZhbGlkIGNvbnRhaW5lciBtZXRhZGF0YSBzZXJ2aWNlIGhvc3RuYW1lYCwge1xuICAgICAgICAgICAgICAgIHRyeU5leHRMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcnNlZC5wcm90b2NvbCB8fCAhKHBhcnNlZC5wcm90b2NvbCBpbiBHUkVFTkdSQVNTX1BST1RPQ09MUykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgJHtwYXJzZWQucHJvdG9jb2x9IGlzIG5vdCBhIHZhbGlkIGNvbnRhaW5lciBtZXRhZGF0YSBzZXJ2aWNlIHByb3RvY29sYCwge1xuICAgICAgICAgICAgICAgIHRyeU5leHRMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucGFyc2VkLFxuICAgICAgICAgICAgcG9ydDogcGFyc2VkLnBvcnQgPyBwYXJzZUludChwYXJzZWQucG9ydCwgMTApIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJUaGUgY29udGFpbmVyIG1ldGFkYXRhIGNyZWRlbnRpYWwgcHJvdmlkZXIgY2Fubm90IGJlIHVzZWQgdW5sZXNzXCIgK1xuICAgICAgICBgIHRoZSAke0VOVl9DTURTX1JFTEFUSVZFX1VSSX0gb3IgJHtFTlZfQ01EU19GVUxMX1VSSX0gZW52aXJvbm1lbnRgICtcbiAgICAgICAgXCIgdmFyaWFibGUgaXMgc2V0XCIsIHtcbiAgICAgICAgdHJ5TmV4dExpbms6IGZhbHNlLFxuICAgICAgICBsb2dnZXIsXG4gICAgfSk7XG59O1xuXG5jbGFzcyBJbnN0YW5jZU1ldGFkYXRhVjFGYWxsYmFja0Vycm9yIGV4dGVuZHMgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3Ige1xuICAgIHRyeU5leHRMaW5rO1xuICAgIG5hbWUgPSBcIkluc3RhbmNlTWV0YWRhdGFWMUZhbGxiYWNrRXJyb3JcIjtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB0cnlOZXh0TGluayA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgdHJ5TmV4dExpbmspO1xuICAgICAgICB0aGlzLnRyeU5leHRMaW5rID0gdHJ5TmV4dExpbms7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnN0YW5jZU1ldGFkYXRhVjFGYWxsYmFja0Vycm9yLnByb3RvdHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnRzLkVuZHBvaW50ID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChFbmRwb2ludCkge1xuICAgIEVuZHBvaW50W1wiSVB2NFwiXSA9IFwiaHR0cDovLzE2OS4yNTQuMTY5LjI1NFwiO1xuICAgIEVuZHBvaW50W1wiSVB2NlwiXSA9IFwiaHR0cDovL1tmZDAwOmVjMjo6MjU0XVwiO1xufSkoZXhwb3J0cy5FbmRwb2ludCB8fCAoZXhwb3J0cy5FbmRwb2ludCA9IHt9KSk7XG5cbmNvbnN0IEVOVl9FTkRQT0lOVF9OQU1FID0gXCJBV1NfRUMyX01FVEFEQVRBX1NFUlZJQ0VfRU5EUE9JTlRcIjtcbmNvbnN0IENPTkZJR19FTkRQT0lOVF9OQU1FID0gXCJlYzJfbWV0YWRhdGFfc2VydmljZV9lbmRwb2ludFwiO1xuY29uc3QgRU5EUE9JTlRfQ09ORklHX09QVElPTlMgPSB7XG4gICAgZW52aXJvbm1lbnRWYXJpYWJsZVNlbGVjdG9yOiAoZW52KSA9PiBlbnZbRU5WX0VORFBPSU5UX05BTUVdLFxuICAgIGNvbmZpZ0ZpbGVTZWxlY3RvcjogKHByb2ZpbGUpID0+IHByb2ZpbGVbQ09ORklHX0VORFBPSU5UX05BTUVdLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbn07XG5cbnZhciBFbmRwb2ludE1vZGU7XG4oZnVuY3Rpb24gKEVuZHBvaW50TW9kZSkge1xuICAgIEVuZHBvaW50TW9kZVtcIklQdjRcIl0gPSBcIklQdjRcIjtcbiAgICBFbmRwb2ludE1vZGVbXCJJUHY2XCJdID0gXCJJUHY2XCI7XG59KShFbmRwb2ludE1vZGUgfHwgKEVuZHBvaW50TW9kZSA9IHt9KSk7XG5cbmNvbnN0IEVOVl9FTkRQT0lOVF9NT0RFX05BTUUgPSBcIkFXU19FQzJfTUVUQURBVEFfU0VSVklDRV9FTkRQT0lOVF9NT0RFXCI7XG5jb25zdCBDT05GSUdfRU5EUE9JTlRfTU9ERV9OQU1FID0gXCJlYzJfbWV0YWRhdGFfc2VydmljZV9lbmRwb2ludF9tb2RlXCI7XG5jb25zdCBFTkRQT0lOVF9NT0RFX0NPTkZJR19PUFRJT05TID0ge1xuICAgIGVudmlyb25tZW50VmFyaWFibGVTZWxlY3RvcjogKGVudikgPT4gZW52W0VOVl9FTkRQT0lOVF9NT0RFX05BTUVdLFxuICAgIGNvbmZpZ0ZpbGVTZWxlY3RvcjogKHByb2ZpbGUpID0+IHByb2ZpbGVbQ09ORklHX0VORFBPSU5UX01PREVfTkFNRV0sXG4gICAgZGVmYXVsdDogRW5kcG9pbnRNb2RlLklQdjQsXG59O1xuXG5jb25zdCBnZXRJbnN0YW5jZU1ldGFkYXRhRW5kcG9pbnQgPSBhc3luYyAoKSA9PiB1cmxQYXJzZXIucGFyc2VVcmwoKGF3YWl0IGdldEZyb21FbmRwb2ludENvbmZpZygpKSB8fCAoYXdhaXQgZ2V0RnJvbUVuZHBvaW50TW9kZUNvbmZpZygpKSk7XG5jb25zdCBnZXRGcm9tRW5kcG9pbnRDb25maWcgPSBhc3luYyAoKSA9PiBub2RlQ29uZmlnUHJvdmlkZXIubG9hZENvbmZpZyhFTkRQT0lOVF9DT05GSUdfT1BUSU9OUykoKTtcbmNvbnN0IGdldEZyb21FbmRwb2ludE1vZGVDb25maWcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnRNb2RlID0gYXdhaXQgbm9kZUNvbmZpZ1Byb3ZpZGVyLmxvYWRDb25maWcoRU5EUE9JTlRfTU9ERV9DT05GSUdfT1BUSU9OUykoKTtcbiAgICBzd2l0Y2ggKGVuZHBvaW50TW9kZSkge1xuICAgICAgICBjYXNlIEVuZHBvaW50TW9kZS5JUHY0OlxuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuRW5kcG9pbnQuSVB2NDtcbiAgICAgICAgY2FzZSBFbmRwb2ludE1vZGUuSVB2NjpcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkVuZHBvaW50LklQdjY7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGVuZHBvaW50IG1vZGU6ICR7ZW5kcG9pbnRNb2RlfS5gICsgYCBTZWxlY3QgZnJvbSAke09iamVjdC52YWx1ZXMoRW5kcG9pbnRNb2RlKX1gKTtcbiAgICB9XG59O1xuXG5jb25zdCBTVEFUSUNfU1RBQklMSVRZX1JFRlJFU0hfSU5URVJWQUxfU0VDT05EUyA9IDUgKiA2MDtcbmNvbnN0IFNUQVRJQ19TVEFCSUxJVFlfUkVGUkVTSF9JTlRFUlZBTF9KSVRURVJfV0lORE9XX1NFQ09ORFMgPSA1ICogNjA7XG5jb25zdCBTVEFUSUNfU1RBQklMSVRZX0RPQ19VUkwgPSBcImh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9zZGtyZWYvbGF0ZXN0L2d1aWRlL2ZlYXR1cmUtc3RhdGljLWNyZWRlbnRpYWxzLmh0bWxcIjtcbmNvbnN0IGdldEV4dGVuZGVkSW5zdGFuY2VNZXRhZGF0YUNyZWRlbnRpYWxzID0gKGNyZWRlbnRpYWxzLCBsb2dnZXIpID0+IHtcbiAgICBjb25zdCByZWZyZXNoSW50ZXJ2YWwgPSBTVEFUSUNfU1RBQklMSVRZX1JFRlJFU0hfSU5URVJWQUxfU0VDT05EUyArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNUQVRJQ19TVEFCSUxJVFlfUkVGUkVTSF9JTlRFUlZBTF9KSVRURVJfV0lORE9XX1NFQ09ORFMpO1xuICAgIGNvbnN0IG5ld0V4cGlyYXRpb24gPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgcmVmcmVzaEludGVydmFsICogMTAwMCk7XG4gICAgbG9nZ2VyLndhcm4oXCJBdHRlbXB0aW5nIGNyZWRlbnRpYWwgZXhwaXJhdGlvbiBleHRlbnNpb24gZHVlIHRvIGEgY3JlZGVudGlhbCBzZXJ2aWNlIGF2YWlsYWJpbGl0eSBpc3N1ZS4gQSByZWZyZXNoIG9mIHRoZXNlIFwiICtcbiAgICAgICAgYGNyZWRlbnRpYWxzIHdpbGwgYmUgYXR0ZW1wdGVkIGFmdGVyICR7bmV3IERhdGUobmV3RXhwaXJhdGlvbil9LlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6IGAgK1xuICAgICAgICBTVEFUSUNfU1RBQklMSVRZX0RPQ19VUkwpO1xuICAgIGNvbnN0IG9yaWdpbmFsRXhwaXJhdGlvbiA9IGNyZWRlbnRpYWxzLm9yaWdpbmFsRXhwaXJhdGlvbiA/PyBjcmVkZW50aWFscy5leHBpcmF0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNyZWRlbnRpYWxzLFxuICAgICAgICAuLi4ob3JpZ2luYWxFeHBpcmF0aW9uID8geyBvcmlnaW5hbEV4cGlyYXRpb24gfSA6IHt9KSxcbiAgICAgICAgZXhwaXJhdGlvbjogbmV3RXhwaXJhdGlvbixcbiAgICB9O1xufTtcblxuY29uc3Qgc3RhdGljU3RhYmlsaXR5UHJvdmlkZXIgPSAocHJvdmlkZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG9wdGlvbnM/LmxvZ2dlciB8fCBjb25zb2xlO1xuICAgIGxldCBwYXN0Q3JlZGVudGlhbHM7XG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNyZWRlbnRpYWxzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3JlZGVudGlhbHMgPSBhd2FpdCBwcm92aWRlcigpO1xuICAgICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLmV4cGlyYXRpb24gJiYgY3JlZGVudGlhbHMuZXhwaXJhdGlvbi5nZXRUaW1lKCkgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHMgPSBnZXRFeHRlbmRlZEluc3RhbmNlTWV0YWRhdGFDcmVkZW50aWFscyhjcmVkZW50aWFscywgbG9nZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKHBhc3RDcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiQ3JlZGVudGlhbCByZW5ldyBmYWlsZWQ6IFwiLCBlKTtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFscyA9IGdldEV4dGVuZGVkSW5zdGFuY2VNZXRhZGF0YUNyZWRlbnRpYWxzKHBhc3RDcmVkZW50aWFscywgbG9nZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFzdENyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG4gICAgICAgIHJldHVybiBjcmVkZW50aWFscztcbiAgICB9O1xufTtcblxuY29uc3QgSU1EU19QQVRIID0gXCIvbGF0ZXN0L21ldGEtZGF0YS9pYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvXCI7XG5jb25zdCBJTURTX1RPS0VOX1BBVEggPSBcIi9sYXRlc3QvYXBpL3Rva2VuXCI7XG5jb25zdCBBV1NfRUMyX01FVEFEQVRBX1YxX0RJU0FCTEVEID0gXCJBV1NfRUMyX01FVEFEQVRBX1YxX0RJU0FCTEVEXCI7XG5jb25zdCBQUk9GSUxFX0FXU19FQzJfTUVUQURBVEFfVjFfRElTQUJMRUQgPSBcImVjMl9tZXRhZGF0YV92MV9kaXNhYmxlZFwiO1xuY29uc3QgWF9BV1NfRUMyX01FVEFEQVRBX1RPS0VOID0gXCJ4LWF3cy1lYzItbWV0YWRhdGEtdG9rZW5cIjtcbmNvbnN0IGZyb21JbnN0YW5jZU1ldGFkYXRhID0gKGluaXQgPSB7fSkgPT4gc3RhdGljU3RhYmlsaXR5UHJvdmlkZXIoZ2V0SW5zdGFuY2VNZXRhZGF0YVByb3ZpZGVyKGluaXQpLCB7IGxvZ2dlcjogaW5pdC5sb2dnZXIgfSk7XG5jb25zdCBnZXRJbnN0YW5jZU1ldGFkYXRhUHJvdmlkZXIgPSAoaW5pdCA9IHt9KSA9PiB7XG4gICAgbGV0IGRpc2FibGVGZXRjaFRva2VuID0gZmFsc2U7XG4gICAgY29uc3QgeyBsb2dnZXIsIHByb2ZpbGUgfSA9IGluaXQ7XG4gICAgY29uc3QgeyB0aW1lb3V0LCBtYXhSZXRyaWVzIH0gPSBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KGluaXQpO1xuICAgIGNvbnN0IGdldENyZWRlbnRpYWxzID0gYXN5bmMgKG1heFJldHJpZXMsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgaXNJbWRzVjFGYWxsYmFjayA9IGRpc2FibGVGZXRjaFRva2VuIHx8IG9wdGlvbnMuaGVhZGVycz8uW1hfQVdTX0VDMl9NRVRBREFUQV9UT0tFTl0gPT0gbnVsbDtcbiAgICAgICAgaWYgKGlzSW1kc1YxRmFsbGJhY2spIHtcbiAgICAgICAgICAgIGxldCBmYWxsYmFja0Jsb2NrZWRGcm9tUHJvZmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGZhbGxiYWNrQmxvY2tlZEZyb21Qcm9jZXNzRW52ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGF3YWl0IG5vZGVDb25maWdQcm92aWRlci5sb2FkQ29uZmlnKHtcbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudFZhcmlhYmxlU2VsZWN0b3I6IChlbnYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW52VmFsdWUgPSBlbnZbQVdTX0VDMl9NRVRBREFUQV9WMV9ESVNBQkxFRF07XG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrQmxvY2tlZEZyb21Qcm9jZXNzRW52ID0gISFlbnZWYWx1ZSAmJiBlbnZWYWx1ZSAhPT0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW52VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGAke0FXU19FQzJfTUVUQURBVEFfVjFfRElTQUJMRUR9IG5vdCBzZXQgaW4gZW52LCBjaGVja2luZyBjb25maWcgZmlsZSBuZXh0LmAsIHsgbG9nZ2VyOiBpbml0LmxvZ2dlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2tCbG9ja2VkRnJvbVByb2Nlc3NFbnY7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb25maWdGaWxlU2VsZWN0b3I6IChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVWYWx1ZSA9IHByb2ZpbGVbUFJPRklMRV9BV1NfRUMyX01FVEFEQVRBX1YxX0RJU0FCTEVEXTtcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tCbG9ja2VkRnJvbVByb2ZpbGUgPSAhIXByb2ZpbGVWYWx1ZSAmJiBwcm9maWxlVmFsdWUgIT09IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbGxiYWNrQmxvY2tlZEZyb21Qcm9maWxlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBpZiAoaW5pdC5lYzJNZXRhZGF0YVYxRGlzYWJsZWQgfHwgY29uZmlnVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXVzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdC5lYzJNZXRhZGF0YVYxRGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhdXNlcy5wdXNoKFwiY3JlZGVudGlhbCBwcm92aWRlciBpbml0aWFsaXphdGlvbiAocnVudGltZSBvcHRpb24gZWMyTWV0YWRhdGFWMURpc2FibGVkKVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2tCbG9ja2VkRnJvbVByb2ZpbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhdXNlcy5wdXNoKGBjb25maWcgZmlsZSBwcm9maWxlICgke1BST0ZJTEVfQVdTX0VDMl9NRVRBREFUQV9WMV9ESVNBQkxFRH0pYCk7XG4gICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrQmxvY2tlZEZyb21Qcm9jZXNzRW52KVxuICAgICAgICAgICAgICAgICAgICBjYXVzZXMucHVzaChgcHJvY2VzcyBlbnZpcm9ubWVudCB2YXJpYWJsZSAoJHtBV1NfRUMyX01FVEFEQVRBX1YxX0RJU0FCTEVEfSlgKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW5zdGFuY2VNZXRhZGF0YVYxRmFsbGJhY2tFcnJvcihgQVdTIEVDMiBNZXRhZGF0YSB2MSBmYWxsYmFjayBoYXMgYmVlbiBibG9ja2VkIGJ5IEFXUyBTREsgY29uZmlndXJhdGlvbiBpbiB0aGUgZm9sbG93aW5nOiBbJHtjYXVzZXMuam9pbihcIiwgXCIpfV0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW1kc1Byb2ZpbGUgPSAoYXdhaXQgcmV0cnkoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2ZpbGU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGZXRjaFRva2VuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9maWxlO1xuICAgICAgICB9LCBtYXhSZXRyaWVzKSkudHJpbSgpO1xuICAgICAgICByZXR1cm4gcmV0cnkoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNyZWRzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjcmVkcyA9IGF3YWl0IGdldENyZWRlbnRpYWxzRnJvbVByb2ZpbGUoaW1kc1Byb2ZpbGUsIG9wdGlvbnMsIGluaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGZXRjaFRva2VuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVkcztcbiAgICAgICAgfSwgbWF4UmV0cmllcyk7XG4gICAgfTtcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGF3YWl0IGdldEluc3RhbmNlTWV0YWRhdGFFbmRwb2ludCgpO1xuICAgICAgICBpZiAoZGlzYWJsZUZldGNoVG9rZW4pIHtcbiAgICAgICAgICAgIGxvZ2dlcj8uZGVidWcoXCJBV1MgU0RLIEluc3RhbmNlIE1ldGFkYXRhXCIsIFwidXNpbmcgdjEgZmFsbGJhY2sgKG5vIHRva2VuIGZldGNoKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDcmVkZW50aWFscyhtYXhSZXRyaWVzLCB7IC4uLmVuZHBvaW50LCB0aW1lb3V0IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRva2VuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IChhd2FpdCBnZXRNZXRhZGF0YVRva2VuKHsgLi4uZW5kcG9pbnQsIHRpbWVvdXQgfSkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3I/LnN0YXR1c0NvZGUgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKGVycm9yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVDMiBNZXRhZGF0YSB0b2tlbiByZXF1ZXN0IHJldHVybmVkIGVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvci5tZXNzYWdlID09PSBcIlRpbWVvdXRFcnJvclwiIHx8IFs0MDMsIDQwNCwgNDA1XS5pbmNsdWRlcyhlcnJvci5zdGF0dXNDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRmV0Y2hUb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvZ2dlcj8uZGVidWcoXCJBV1MgU0RLIEluc3RhbmNlIE1ldGFkYXRhXCIsIFwidXNpbmcgdjEgZmFsbGJhY2sgKGluaXRpYWwpXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDcmVkZW50aWFscyhtYXhSZXRyaWVzLCB7IC4uLmVuZHBvaW50LCB0aW1lb3V0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldENyZWRlbnRpYWxzKG1heFJldHJpZXMsIHtcbiAgICAgICAgICAgICAgICAuLi5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFtYX0FXU19FQzJfTUVUQURBVEFfVE9LRU5dOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuY29uc3QgZ2V0TWV0YWRhdGFUb2tlbiA9IGFzeW5jIChvcHRpb25zKSA9PiBodHRwUmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBwYXRoOiBJTURTX1RPS0VOX1BBVEgsXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJ4LWF3cy1lYzItbWV0YWRhdGEtdG9rZW4tdHRsLXNlY29uZHNcIjogXCIyMTYwMFwiLFxuICAgIH0sXG59KTtcbmNvbnN0IGdldFByb2ZpbGUgPSBhc3luYyAob3B0aW9ucykgPT4gKGF3YWl0IGh0dHBSZXF1ZXN0KHsgLi4ub3B0aW9ucywgcGF0aDogSU1EU19QQVRIIH0pKS50b1N0cmluZygpO1xuY29uc3QgZ2V0Q3JlZGVudGlhbHNGcm9tUHJvZmlsZSA9IGFzeW5jIChwcm9maWxlLCBvcHRpb25zLCBpbml0KSA9PiB7XG4gICAgY29uc3QgY3JlZGVudGlhbHNSZXNwb25zZSA9IEpTT04ucGFyc2UoKGF3YWl0IGh0dHBSZXF1ZXN0KHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgcGF0aDogSU1EU19QQVRIICsgcHJvZmlsZSxcbiAgICB9KSkudG9TdHJpbmcoKSk7XG4gICAgaWYgKCFpc0ltZHNDcmVkZW50aWFscyhjcmVkZW50aWFsc1Jlc3BvbnNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZS5cIiwge1xuICAgICAgICAgICAgbG9nZ2VyOiBpbml0LmxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRlbnRpYWxzUmVzcG9uc2UpO1xufTtcblxuZXhwb3J0cy5ERUZBVUxUX01BWF9SRVRSSUVTID0gREVGQVVMVF9NQVhfUkVUUklFUztcbmV4cG9ydHMuREVGQVVMVF9USU1FT1VUID0gREVGQVVMVF9USU1FT1VUO1xuZXhwb3J0cy5FTlZfQ01EU19BVVRIX1RPS0VOID0gRU5WX0NNRFNfQVVUSF9UT0tFTjtcbmV4cG9ydHMuRU5WX0NNRFNfRlVMTF9VUkkgPSBFTlZfQ01EU19GVUxMX1VSSTtcbmV4cG9ydHMuRU5WX0NNRFNfUkVMQVRJVkVfVVJJID0gRU5WX0NNRFNfUkVMQVRJVkVfVVJJO1xuZXhwb3J0cy5mcm9tQ29udGFpbmVyTWV0YWRhdGEgPSBmcm9tQ29udGFpbmVyTWV0YWRhdGE7XG5leHBvcnRzLmZyb21JbnN0YW5jZU1ldGFkYXRhID0gZnJvbUluc3RhbmNlTWV0YWRhdGE7XG5leHBvcnRzLmdldEluc3RhbmNlTWV0YWRhdGFFbmRwb2ludCA9IGdldEluc3RhbmNlTWV0YWRhdGFFbmRwb2ludDtcbmV4cG9ydHMuaHR0cFJlcXVlc3QgPSBodHRwUmVxdWVzdDtcbmV4cG9ydHMucHJvdmlkZXJDb25maWdGcm9tSW5pdCA9IHByb3ZpZGVyQ29uZmlnRnJvbUluaXQ7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBO0FBRUEsUUFBSSxtQkFBbUI7QUFDdkIsUUFBSSxNQUFNLFVBQVEsS0FBSztBQUN2QixRQUFJLFNBQVMsVUFBUSxRQUFRO0FBQzdCLFFBQUksT0FBTyxVQUFRLE1BQU07QUFDekIsUUFBSSxxQkFBcUI7QUFDekIsUUFBSSxZQUFZO0FBRWhCLGFBQVMsWUFBWSxTQUFTO0FBQzFCLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3BDLGNBQU0sTUFBTSxLQUFLLFFBQVE7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QUFBLE1BQzVDO0FBQUEsSUFDSixDQUFDO0FBQ0QsUUFBTSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksRUFBRSxHQUFHLFNBQVMsTUFBTSxVQUFVLENBQUMsR0FBRyxTQUFTO0FBQ3BHLFFBQU0sNEJBQTRCLE9BQU8sU0FBUyxTQUFTLFNBQVM7QUFDaEUsWUFBTSxzQkFBc0IsS0FBSyxPQUFPLE1BQU0sWUFBWTtBQUFBLFFBQ3RELEdBQUc7QUFBQSxRQUNILE1BQU0sWUFBWTtBQUFBLE1BQ3RCLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDZCxVQUFJLENBQUMsa0JBQWtCLG1CQUFtQixHQUFHO0FBQ3pDLGNBQU0sSUFBSSxpQkFBaUIseUJBQXlCLDZEQUE2RDtBQUFBLFVBQzdHLFFBQVEsS0FBSztBQUFBLFFBQ2pCLENBQUM7QUFBQSxNQUNMO0FBQ0EsYUFBTyxvQkFBb0IsbUJBQW1CO0FBQUEsSUFDbEQ7QUFFQSxZQUFRLHNCQUFzQjtBQUM5QixZQUFRLGtCQUFrQjtBQUMxQixZQUFRLHNCQUFzQjtBQUM5QixZQUFRLG9CQUFvQjtBQUM1QixZQUFRLHdCQUF3QjtBQUNoQyxZQUFRLHdCQUF3QjtBQUNoQyxZQUFRLHVCQUF1QjtBQUMvQixZQUFRLDhCQUE4QjtBQUN0QyxZQUFRLGNBQWM7QUFDdEIsWUFBUSx5QkFBeUI7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2Rpc3RfY2pzIiwgImJ1ZmZlciIsICJFbmRwb2ludE1vZGUiLCAibWF4UmV0cmllcyIsICJwcm9maWxlIl0KfQo=
