#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-5PQQKMHH.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-NE3ECB5D.mjs";
import {
  require_dist_cjs
} from "./chunk-HVZS5VUZ.mjs";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+credential-provider-login@3.972.28/node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-login@3.972.28/node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js"(exports) {
    "use strict";
    var client = (init_client(), __toCommonJS(client_exports));
    var propertyProvider = require_dist_cjs2();
    var sharedIniFileLoader = require_dist_cjs3();
    var protocolHttp = require_dist_cjs();
    var node_crypto = __require("node:crypto");
    var node_fs = __require("node:fs");
    var node_os = __require("node:os");
    var node_path = __require("node:path");
    var LoginCredentialsFetcher = class _LoginCredentialsFetcher {
      profileData;
      init;
      callerClientConfig;
      static REFRESH_THRESHOLD = 5 * 60 * 1e3;
      constructor(profileData, init, callerClientConfig) {
        this.profileData = profileData;
        this.init = init;
        this.callerClientConfig = callerClientConfig;
      }
      async loadCredentials() {
        const token = await this.loadToken();
        if (!token) {
          throw new propertyProvider.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, { tryNextLink: false, logger: this.logger });
        }
        const accessToken = token.accessToken;
        const now = Date.now();
        const expiryTime = new Date(accessToken.expiresAt).getTime();
        const timeUntilExpiry = expiryTime - now;
        if (timeUntilExpiry <= _LoginCredentialsFetcher.REFRESH_THRESHOLD) {
          return this.refresh(token);
        }
        return {
          accessKeyId: accessToken.accessKeyId,
          secretAccessKey: accessToken.secretAccessKey,
          sessionToken: accessToken.sessionToken,
          accountId: accessToken.accountId,
          expiration: new Date(accessToken.expiresAt)
        };
      }
      get logger() {
        return this.init?.logger;
      }
      get loginSession() {
        return this.profileData.login_session;
      }
      async refresh(token) {
        const { SigninClient, CreateOAuth2TokenCommand } = await import("./signin-FXXQ7EZQ.mjs");
        const { logger, userAgentAppId } = this.callerClientConfig ?? {};
        const isH2 = (requestHandler2) => {
          return requestHandler2?.metadata?.handlerProtocol === "h2";
        };
        const requestHandler = isH2(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler;
        const region = this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION;
        const client2 = new SigninClient({
          credentials: {
            accessKeyId: "",
            secretAccessKey: ""
          },
          region,
          requestHandler,
          logger,
          userAgentAppId,
          ...this.init?.clientConfig
        });
        this.createDPoPInterceptor(client2.middlewareStack);
        const commandInput = {
          tokenInput: {
            clientId: token.clientId,
            refreshToken: token.refreshToken,
            grantType: "refresh_token"
          }
        };
        try {
          const response = await client2.send(new CreateOAuth2TokenCommand(commandInput));
          const { accessKeyId, secretAccessKey, sessionToken } = response.tokenOutput?.accessToken ?? {};
          const { refreshToken, expiresIn } = response.tokenOutput ?? {};
          if (!accessKeyId || !secretAccessKey || !sessionToken || !refreshToken) {
            throw new propertyProvider.CredentialsProviderError("Token refresh response missing required fields", {
              logger: this.logger,
              tryNextLink: false
            });
          }
          const expiresInMs = (expiresIn ?? 900) * 1e3;
          const expiration = new Date(Date.now() + expiresInMs);
          const updatedToken = {
            ...token,
            accessToken: {
              ...token.accessToken,
              accessKeyId,
              secretAccessKey,
              sessionToken,
              expiresAt: expiration.toISOString()
            },
            refreshToken
          };
          await this.saveToken(updatedToken);
          const newAccessToken = updatedToken.accessToken;
          return {
            accessKeyId: newAccessToken.accessKeyId,
            secretAccessKey: newAccessToken.secretAccessKey,
            sessionToken: newAccessToken.sessionToken,
            accountId: newAccessToken.accountId,
            expiration
          };
        } catch (error) {
          if (error.name === "AccessDeniedException") {
            const errorType = error.error;
            let message;
            switch (errorType) {
              case "TOKEN_EXPIRED":
                message = "Your session has expired. Please reauthenticate.";
                break;
              case "USER_CREDENTIALS_CHANGED":
                message = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
                break;
              case "INSUFFICIENT_PERMISSIONS":
                message = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
                break;
              default:
                message = `Failed to refresh token: ${String(error)}. Please re-authenticate using \`aws login\``;
            }
            throw new propertyProvider.CredentialsProviderError(message, { logger: this.logger, tryNextLink: false });
          }
          throw new propertyProvider.CredentialsProviderError(`Failed to refresh token: ${String(error)}. Please re-authenticate using aws login`, { logger: this.logger });
        }
      }
      async loadToken() {
        const tokenFilePath = this.getTokenFilePath();
        try {
          let tokenData;
          try {
            tokenData = await sharedIniFileLoader.readFile(tokenFilePath, { ignoreCache: this.init?.ignoreCache });
          } catch {
            tokenData = await node_fs.promises.readFile(tokenFilePath, "utf8");
          }
          const token = JSON.parse(tokenData);
          const missingFields = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter((k) => !token[k]);
          if (!token.accessToken?.accountId) {
            missingFields.push("accountId");
          }
          if (missingFields.length > 0) {
            throw new propertyProvider.CredentialsProviderError(`Token validation failed, missing fields: ${missingFields.join(", ")}`, {
              logger: this.logger,
              tryNextLink: false
            });
          }
          return token;
        } catch (error) {
          throw new propertyProvider.CredentialsProviderError(`Failed to load token from ${tokenFilePath}: ${String(error)}`, {
            logger: this.logger,
            tryNextLink: false
          });
        }
      }
      async saveToken(token) {
        const tokenFilePath = this.getTokenFilePath();
        const directory = node_path.dirname(tokenFilePath);
        try {
          await node_fs.promises.mkdir(directory, { recursive: true });
        } catch (error) {
        }
        await node_fs.promises.writeFile(tokenFilePath, JSON.stringify(token, null, 2), "utf8");
      }
      getTokenFilePath() {
        const directory = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? node_path.join(node_os.homedir(), ".aws", "login", "cache");
        const loginSessionBytes = Buffer.from(this.loginSession, "utf8");
        const loginSessionSha256 = node_crypto.createHash("sha256").update(loginSessionBytes).digest("hex");
        return node_path.join(directory, `${loginSessionSha256}.json`);
      }
      derToRawSignature(derSignature) {
        let offset = 2;
        if (derSignature[offset] !== 2) {
          throw new Error("Invalid DER signature");
        }
        offset++;
        const rLength = derSignature[offset++];
        let r = derSignature.subarray(offset, offset + rLength);
        offset += rLength;
        if (derSignature[offset] !== 2) {
          throw new Error("Invalid DER signature");
        }
        offset++;
        const sLength = derSignature[offset++];
        let s = derSignature.subarray(offset, offset + sLength);
        r = r[0] === 0 ? r.subarray(1) : r;
        s = s[0] === 0 ? s.subarray(1) : s;
        const rPadded = Buffer.concat([Buffer.alloc(32 - r.length), r]);
        const sPadded = Buffer.concat([Buffer.alloc(32 - s.length), s]);
        return Buffer.concat([rPadded, sPadded]);
      }
      createDPoPInterceptor(middlewareStack) {
        middlewareStack.add((next) => async (args) => {
          if (protocolHttp.HttpRequest.isInstance(args.request)) {
            const request = args.request;
            const actualEndpoint = `${request.protocol}//${request.hostname}${request.port ? `:${request.port}` : ""}${request.path}`;
            const dpop = await this.generateDpop(request.method, actualEndpoint);
            request.headers = {
              ...request.headers,
              DPoP: dpop
            };
          }
          return next(args);
        }, {
          step: "finalizeRequest",
          name: "dpopInterceptor",
          override: true
        });
      }
      async generateDpop(method = "POST", endpoint) {
        const token = await this.loadToken();
        try {
          const privateKey = node_crypto.createPrivateKey({
            key: token.dpopKey,
            format: "pem",
            type: "sec1"
          });
          const publicKey = node_crypto.createPublicKey(privateKey);
          const publicDer = publicKey.export({ format: "der", type: "spki" });
          let pointStart = -1;
          for (let i = 0; i < publicDer.length; i++) {
            if (publicDer[i] === 4) {
              pointStart = i;
              break;
            }
          }
          const x = publicDer.slice(pointStart + 1, pointStart + 33);
          const y = publicDer.slice(pointStart + 33, pointStart + 65);
          const header = {
            alg: "ES256",
            typ: "dpop+jwt",
            jwk: {
              kty: "EC",
              crv: "P-256",
              x: x.toString("base64url"),
              y: y.toString("base64url")
            }
          };
          const payload = {
            jti: crypto.randomUUID(),
            htm: method,
            htu: endpoint,
            iat: Math.floor(Date.now() / 1e3)
          };
          const headerB64 = Buffer.from(JSON.stringify(header)).toString("base64url");
          const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
          const message = `${headerB64}.${payloadB64}`;
          const asn1Signature = node_crypto.sign("sha256", Buffer.from(message), privateKey);
          const rawSignature = this.derToRawSignature(asn1Signature);
          const signatureB64 = rawSignature.toString("base64url");
          return `${message}.${signatureB64}`;
        } catch (error) {
          throw new propertyProvider.CredentialsProviderError(`Failed to generate Dpop proof: ${error instanceof Error ? error.message : String(error)}`, { logger: this.logger, tryNextLink: false });
        }
      }
    };
    var fromLoginCredentials = (init) => async ({ callerClientConfig } = {}) => {
      init?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init || {});
      const profileName = sharedIniFileLoader.getProfileName({
        profile: init?.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile?.login_session) {
        throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} does not contain login_session.`, {
          tryNextLink: true,
          logger: init?.logger
        });
      }
      const fetcher = new LoginCredentialsFetcher(profile, init, callerClientConfig);
      const credentials = await fetcher.loadCredentials();
      return client.setCredentialFeature(credentials, "CREDENTIALS_LOGIN", "AD");
    };
    exports.fromLoginCredentials = fromLoginCredentials;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.972.28/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.972.28/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js"(exports) {
    var sharedIniFileLoader = require_dist_cjs3();
    var propertyProvider = require_dist_cjs2();
    var client = (init_client(), __toCommonJS(client_exports));
    var credentialProviderLogin = require_dist_cjs4();
    var resolveCredentialSource = (credentialSource, profileName, logger) => {
      const sourceProvidersMap = {
        EcsContainer: async (options) => {
          const { fromHttp } = await import("./dist-cjs-AHHTGXUA.mjs");
          const { fromContainerMetadata } = await import("./dist-cjs-QOBE74S6.mjs");
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return async () => propertyProvider.chain(fromHttp(options ?? {}), fromContainerMetadata(options))().then(setNamedProvider);
        },
        Ec2InstanceMetadata: async (options) => {
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata } = await import("./dist-cjs-QOBE74S6.mjs");
          return async () => fromInstanceMetadata(options)().then(setNamedProvider);
        },
        Environment: async (options) => {
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv } = await import("./dist-cjs-C5P5LKLW.mjs");
          return async () => fromEnv(options)().then(setNamedProvider);
        }
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new propertyProvider.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger });
      }
    };
    var setNamedProvider = (creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
    var isAssumeRoleProfile = (arg, { profile = "default", logger } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger }) || isCredentialSourceProfile(arg, { profile, logger }));
    };
    var isAssumeRoleWithSourceProfile = (arg, { profile, logger }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    };
    var isCredentialSourceProfile = (arg, { profile, logger }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    };
    var resolveAssumeRoleCredentials = async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, resolveProfileData2) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const profileData = profiles[profileName];
      const { source_profile, region } = profileData;
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await import("./sts-EZKVGWV2.mjs");
        options.roleAssumer = getDefaultRoleAssumer({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: {
            ...callerClientConfig,
            ...options?.parentClientConfig,
            region: region ?? options?.parentClientConfig?.region ?? callerClientConfig?.region
          }
        }, options.clientPlugins);
      }
      if (source_profile && source_profile in visitedProfiles) {
        throw new propertyProvider.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${sharedIniFileLoader.getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData2(source_profile, profiles, options, callerClientConfig, {
        ...visitedProfiles,
        [source_profile]: true
      }, isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
      if (isCredentialSourceWithoutRoleArn(profileData)) {
        return sourceCredsProvider.then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      } else {
        const params = {
          RoleArn: profileData.role_arn,
          RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: profileData.external_id,
          DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
        };
        const { mfa_serial } = profileData;
        if (mfa_serial) {
          if (!options.mfaCodeProvider) {
            throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
          }
          params.SerialNumber = mfa_serial;
          params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }
        const sourceCreds = await sourceCredsProvider;
        return options.roleAssumer(sourceCreds, params).then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    };
    var isCredentialSourceWithoutRoleArn = (section) => {
      return !section.role_arn && !!section.credential_source;
    };
    var isLoginProfile = (data) => {
      return Boolean(data && data.login_session);
    };
    var resolveLoginCredentials = async (profileName, options, callerClientConfig) => {
      const credentials = await credentialProviderLogin.fromLoginCredentials({
        ...options,
        profile: profileName
      })({ callerClientConfig });
      return client.setCredentialFeature(credentials, "CREDENTIALS_PROFILE_LOGIN", "AC");
    };
    var isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
    var resolveProcessCredentials = async (options, profile) => import("./dist-cjs-ISCLZMPL.mjs").then(({ fromProcess }) => fromProcess({
      ...options,
      profile
    })().then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_PROCESS", "v")));
    var resolveSsoCredentials = async (profile, profileData, options = {}, callerClientConfig) => {
      const { fromSSO } = await import("./dist-cjs-KJGQKCKW.mjs");
      return fromSSO({
        profile,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig,
        clientConfig: options.clientConfig
      })({
        callerClientConfig
      }).then((creds) => {
        if (profileData.sso_session) {
          return client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
          return client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
      });
    };
    var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
    var isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1;
    var resolveStaticCredentials = async (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      const credentials = {
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
        ...profile.aws_account_id && { accountId: profile.aws_account_id }
      };
      return client.setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
    };
    var isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
    var resolveWebIdentityCredentials = async (profile, options, callerClientConfig) => import("./dist-cjs-LPHZYAOD.mjs").then(({ fromTokenFile }) => fromTokenFile({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })({
      callerClientConfig
    }).then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
    var resolveProfileData = async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, callerClientConfig, visitedProfiles, resolveProfileData);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options, callerClientConfig);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
      }
      if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, data, options, callerClientConfig);
      }
      if (isLoginProfile(data)) {
        return resolveLoginCredentials(profileName, options, callerClientConfig);
      }
      throw new propertyProvider.CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    };
    var fromIni = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init);
      return resolveProfileData(sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      }), profiles, init, callerClientConfig);
    };
    exports.fromIni = fromIni;
  }
});

export {
  require_dist_cjs4 as require_dist_cjs,
  require_dist_cjs5 as require_dist_cjs2
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItbG9naW5AMy45NzIuMjgvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItbG9naW4vZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pQDMuOTcyLjI4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaS9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGF3cy1zZGsvY29yZS9jbGllbnQnKTtcbnZhciBwcm9wZXJ0eVByb3ZpZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlcicpO1xudmFyIHNoYXJlZEluaUZpbGVMb2FkZXIgPSByZXF1aXJlKCdAc21pdGh5L3NoYXJlZC1pbmktZmlsZS1sb2FkZXInKTtcbnZhciBwcm90b2NvbEh0dHAgPSByZXF1aXJlKCdAc21pdGh5L3Byb3RvY29sLWh0dHAnKTtcbnZhciBub2RlX2NyeXB0byA9IHJlcXVpcmUoJ25vZGU6Y3J5cHRvJyk7XG52YXIgbm9kZV9mcyA9IHJlcXVpcmUoJ25vZGU6ZnMnKTtcbnZhciBub2RlX29zID0gcmVxdWlyZSgnbm9kZTpvcycpO1xudmFyIG5vZGVfcGF0aCA9IHJlcXVpcmUoJ25vZGU6cGF0aCcpO1xuXG5jbGFzcyBMb2dpbkNyZWRlbnRpYWxzRmV0Y2hlciB7XG4gICAgcHJvZmlsZURhdGE7XG4gICAgaW5pdDtcbiAgICBjYWxsZXJDbGllbnRDb25maWc7XG4gICAgc3RhdGljIFJFRlJFU0hfVEhSRVNIT0xEID0gNSAqIDYwICogMTAwMDtcbiAgICBjb25zdHJ1Y3Rvcihwcm9maWxlRGF0YSwgaW5pdCwgY2FsbGVyQ2xpZW50Q29uZmlnKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZURhdGEgPSBwcm9maWxlRGF0YTtcbiAgICAgICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgICAgICAgdGhpcy5jYWxsZXJDbGllbnRDb25maWcgPSBjYWxsZXJDbGllbnRDb25maWc7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRDcmVkZW50aWFscygpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmxvYWRUb2tlbigpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYEZhaWxlZCB0byBsb2FkIGEgdG9rZW4gZm9yIHNlc3Npb24gJHt0aGlzLmxvZ2luU2Vzc2lvbn0sIHBsZWFzZSByZS1hdXRoZW50aWNhdGUgdXNpbmcgYXdzIGxvZ2luYCwgeyB0cnlOZXh0TGluazogZmFsc2UsIGxvZ2dlcjogdGhpcy5sb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZXhwaXJ5VGltZSA9IG5ldyBEYXRlKGFjY2Vzc1Rva2VuLmV4cGlyZXNBdCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB0aW1lVW50aWxFeHBpcnkgPSBleHBpcnlUaW1lIC0gbm93O1xuICAgICAgICBpZiAodGltZVVudGlsRXhwaXJ5IDw9IExvZ2luQ3JlZGVudGlhbHNGZXRjaGVyLlJFRlJFU0hfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IGFjY2Vzc1Rva2VuLmFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBhY2Nlc3NUb2tlbi5zZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IGFjY2Vzc1Rva2VuLnNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGFjY291bnRJZDogYWNjZXNzVG9rZW4uYWNjb3VudElkLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogbmV3IERhdGUoYWNjZXNzVG9rZW4uZXhwaXJlc0F0KSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IGxvZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdD8ubG9nZ2VyO1xuICAgIH1cbiAgICBnZXQgbG9naW5TZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlRGF0YS5sb2dpbl9zZXNzaW9uO1xuICAgIH1cbiAgICBhc3luYyByZWZyZXNoKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IHsgU2lnbmluQ2xpZW50LCBDcmVhdGVPQXV0aDJUb2tlbkNvbW1hbmQgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvc2lnbmluJyk7XG4gICAgICAgIGNvbnN0IHsgbG9nZ2VyLCB1c2VyQWdlbnRBcHBJZCB9ID0gdGhpcy5jYWxsZXJDbGllbnRDb25maWcgPz8ge307XG4gICAgICAgIGNvbnN0IGlzSDIgPSAocmVxdWVzdEhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcj8ubWV0YWRhdGE/LmhhbmRsZXJQcm90b2NvbCA9PT0gXCJoMlwiO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0SGFuZGxlciA9IGlzSDIodGhpcy5jYWxsZXJDbGllbnRDb25maWc/LnJlcXVlc3RIYW5kbGVyKVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdGhpcy5jYWxsZXJDbGllbnRDb25maWc/LnJlcXVlc3RIYW5kbGVyO1xuICAgICAgICBjb25zdCByZWdpb24gPSB0aGlzLnByb2ZpbGVEYXRhLnJlZ2lvbiA/PyAoYXdhaXQgdGhpcy5jYWxsZXJDbGllbnRDb25maWc/LnJlZ2lvbj8uKCkpID8/IHByb2Nlc3MuZW52LkFXU19SRUdJT047XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTaWduaW5DbGllbnQoe1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogXCJcIixcbiAgICAgICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaW9uLFxuICAgICAgICAgICAgcmVxdWVzdEhhbmRsZXIsXG4gICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICB1c2VyQWdlbnRBcHBJZCxcbiAgICAgICAgICAgIC4uLnRoaXMuaW5pdD8uY2xpZW50Q29uZmlnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVEUG9QSW50ZXJjZXB0b3IoY2xpZW50Lm1pZGRsZXdhcmVTdGFjayk7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRJbnB1dCA9IHtcbiAgICAgICAgICAgIHRva2VuSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBjbGllbnRJZDogdG9rZW4uY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiB0b2tlbi5yZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICAgICAgZ3JhbnRUeXBlOiBcInJlZnJlc2hfdG9rZW5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5zZW5kKG5ldyBDcmVhdGVPQXV0aDJUb2tlbkNvbW1hbmQoY29tbWFuZElucHV0KSk7XG4gICAgICAgICAgICBjb25zdCB7IGFjY2Vzc0tleUlkLCBzZWNyZXRBY2Nlc3NLZXksIHNlc3Npb25Ub2tlbiB9ID0gcmVzcG9uc2UudG9rZW5PdXRwdXQ/LmFjY2Vzc1Rva2VuID8/IHt9O1xuICAgICAgICAgICAgY29uc3QgeyByZWZyZXNoVG9rZW4sIGV4cGlyZXNJbiB9ID0gcmVzcG9uc2UudG9rZW5PdXRwdXQgPz8ge307XG4gICAgICAgICAgICBpZiAoIWFjY2Vzc0tleUlkIHx8ICFzZWNyZXRBY2Nlc3NLZXkgfHwgIXNlc3Npb25Ub2tlbiB8fCAhcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiVG9rZW4gcmVmcmVzaCByZXNwb25zZSBtaXNzaW5nIHJlcXVpcmVkIGZpZWxkc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIHRyeU5leHRMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXNJbk1zID0gKGV4cGlyZXNJbiA/PyA5MDApICogMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyYXRpb24gPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgZXhwaXJlc0luTXMpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRva2VuID0ge1xuICAgICAgICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRva2VuLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogYWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uVG9rZW46IHNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0F0OiBleHBpcmF0aW9uLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVUb2tlbih1cGRhdGVkVG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgbmV3QWNjZXNzVG9rZW4gPSB1cGRhdGVkVG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBuZXdBY2Nlc3NUb2tlbi5hY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IG5ld0FjY2Vzc1Rva2VuLnNlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICBzZXNzaW9uVG9rZW46IG5ld0FjY2Vzc1Rva2VuLnNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IG5ld0FjY2Vzc1Rva2VuLmFjY291bnRJZCxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkFjY2Vzc0RlbmllZEV4Y2VwdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUeXBlID0gZXJyb3IuZXJyb3I7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRPS0VOX0VYUElSRURcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlYXV0aGVudGljYXRlLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJVU0VSX0NSRURFTlRJQUxTX0NIQU5HRURcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHJlZnJlc2ggY3JlZGVudGlhbHMgYmVjYXVzZSBvZiBhIGNoYW5nZSBpbiB5b3VyIHBhc3N3b3JkLiBQbGVhc2UgcmVhdXRoZW50aWNhdGUgd2l0aCB5b3VyIG5ldyBwYXNzd29yZC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byByZWZyZXNoIGNyZWRlbnRpYWxzIGR1ZSB0byBpbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMuIFlvdSBtYXkgYmUgbWlzc2luZyBwZXJtaXNzaW9uIGZvciB0aGUgJ0NyZWF0ZU9BdXRoMlRva2VuJyBhY3Rpb24uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRmFpbGVkIHRvIHJlZnJlc2ggdG9rZW46ICR7U3RyaW5nKGVycm9yKX0uIFBsZWFzZSByZS1hdXRoZW50aWNhdGUgdXNpbmcgXFxgYXdzIGxvZ2luXFxgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKG1lc3NhZ2UsIHsgbG9nZ2VyOiB0aGlzLmxvZ2dlciwgdHJ5TmV4dExpbms6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBGYWlsZWQgdG8gcmVmcmVzaCB0b2tlbjogJHtTdHJpbmcoZXJyb3IpfS4gUGxlYXNlIHJlLWF1dGhlbnRpY2F0ZSB1c2luZyBhd3MgbG9naW5gLCB7IGxvZ2dlcjogdGhpcy5sb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgbG9hZFRva2VuKCkge1xuICAgICAgICBjb25zdCB0b2tlbkZpbGVQYXRoID0gdGhpcy5nZXRUb2tlbkZpbGVQYXRoKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdG9rZW5EYXRhO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b2tlbkRhdGEgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLnJlYWRGaWxlKHRva2VuRmlsZVBhdGgsIHsgaWdub3JlQ2FjaGU6IHRoaXMuaW5pdD8uaWdub3JlQ2FjaGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgdG9rZW5EYXRhID0gYXdhaXQgbm9kZV9mcy5wcm9taXNlcy5yZWFkRmlsZSh0b2tlbkZpbGVQYXRoLCBcInV0ZjhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodG9rZW5EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdGaWVsZHMgPSBbXCJhY2Nlc3NUb2tlblwiLCBcImNsaWVudElkXCIsIFwicmVmcmVzaFRva2VuXCIsIFwiZHBvcEtleVwiXS5maWx0ZXIoKGspID0+ICF0b2tlbltrXSk7XG4gICAgICAgICAgICBpZiAoIXRva2VuLmFjY2Vzc1Rva2VuPy5hY2NvdW50SWQpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nRmllbGRzLnB1c2goXCJhY2NvdW50SWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWlzc2luZ0ZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBUb2tlbiB2YWxpZGF0aW9uIGZhaWxlZCwgbWlzc2luZyBmaWVsZHM6ICR7bWlzc2luZ0ZpZWxkcy5qb2luKFwiLCBcIil9YCwge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICB0cnlOZXh0TGluazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYEZhaWxlZCB0byBsb2FkIHRva2VuIGZyb20gJHt0b2tlbkZpbGVQYXRofTogJHtTdHJpbmcoZXJyb3IpfWAsIHtcbiAgICAgICAgICAgICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgICAgICAgICAgIHRyeU5leHRMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHNhdmVUb2tlbih0b2tlbikge1xuICAgICAgICBjb25zdCB0b2tlbkZpbGVQYXRoID0gdGhpcy5nZXRUb2tlbkZpbGVQYXRoKCk7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IG5vZGVfcGF0aC5kaXJuYW1lKHRva2VuRmlsZVBhdGgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbm9kZV9mcy5wcm9taXNlcy5ta2RpcihkaXJlY3RvcnksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5vZGVfZnMucHJvbWlzZXMud3JpdGVGaWxlKHRva2VuRmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHRva2VuLCBudWxsLCAyKSwgXCJ1dGY4XCIpO1xuICAgIH1cbiAgICBnZXRUb2tlbkZpbGVQYXRoKCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBwcm9jZXNzLmVudi5BV1NfTE9HSU5fQ0FDSEVfRElSRUNUT1JZID8/IG5vZGVfcGF0aC5qb2luKG5vZGVfb3MuaG9tZWRpcigpLCBcIi5hd3NcIiwgXCJsb2dpblwiLCBcImNhY2hlXCIpO1xuICAgICAgICBjb25zdCBsb2dpblNlc3Npb25CeXRlcyA9IEJ1ZmZlci5mcm9tKHRoaXMubG9naW5TZXNzaW9uLCBcInV0ZjhcIik7XG4gICAgICAgIGNvbnN0IGxvZ2luU2Vzc2lvblNoYTI1NiA9IG5vZGVfY3J5cHRvLmNyZWF0ZUhhc2goXCJzaGEyNTZcIikudXBkYXRlKGxvZ2luU2Vzc2lvbkJ5dGVzKS5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgIHJldHVybiBub2RlX3BhdGguam9pbihkaXJlY3RvcnksIGAke2xvZ2luU2Vzc2lvblNoYTI1Nn0uanNvbmApO1xuICAgIH1cbiAgICBkZXJUb1Jhd1NpZ25hdHVyZShkZXJTaWduYXR1cmUpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDI7XG4gICAgICAgIGlmIChkZXJTaWduYXR1cmVbb2Zmc2V0XSAhPT0gMHgwMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBERVIgc2lnbmF0dXJlXCIpO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCsrO1xuICAgICAgICBjb25zdCByTGVuZ3RoID0gZGVyU2lnbmF0dXJlW29mZnNldCsrXTtcbiAgICAgICAgbGV0IHIgPSBkZXJTaWduYXR1cmUuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyByTGVuZ3RoKTtcbiAgICAgICAgb2Zmc2V0ICs9IHJMZW5ndGg7XG4gICAgICAgIGlmIChkZXJTaWduYXR1cmVbb2Zmc2V0XSAhPT0gMHgwMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBERVIgc2lnbmF0dXJlXCIpO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCsrO1xuICAgICAgICBjb25zdCBzTGVuZ3RoID0gZGVyU2lnbmF0dXJlW29mZnNldCsrXTtcbiAgICAgICAgbGV0IHMgPSBkZXJTaWduYXR1cmUuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyBzTGVuZ3RoKTtcbiAgICAgICAgciA9IHJbMF0gPT09IDB4MDAgPyByLnN1YmFycmF5KDEpIDogcjtcbiAgICAgICAgcyA9IHNbMF0gPT09IDB4MDAgPyBzLnN1YmFycmF5KDEpIDogcztcbiAgICAgICAgY29uc3QgclBhZGRlZCA9IEJ1ZmZlci5jb25jYXQoW0J1ZmZlci5hbGxvYygzMiAtIHIubGVuZ3RoKSwgcl0pO1xuICAgICAgICBjb25zdCBzUGFkZGVkID0gQnVmZmVyLmNvbmNhdChbQnVmZmVyLmFsbG9jKDMyIC0gcy5sZW5ndGgpLCBzXSk7XG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtyUGFkZGVkLCBzUGFkZGVkXSk7XG4gICAgfVxuICAgIGNyZWF0ZURQb1BJbnRlcmNlcHRvcihtaWRkbGV3YXJlU3RhY2spIHtcbiAgICAgICAgbWlkZGxld2FyZVN0YWNrLmFkZCgobmV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm90b2NvbEh0dHAuSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShhcmdzLnJlcXVlc3QpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGFyZ3MucmVxdWVzdDtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxFbmRwb2ludCA9IGAke3JlcXVlc3QucHJvdG9jb2x9Ly8ke3JlcXVlc3QuaG9zdG5hbWV9JHtyZXF1ZXN0LnBvcnQgPyBgOiR7cmVxdWVzdC5wb3J0fWAgOiBcIlwifSR7cmVxdWVzdC5wYXRofWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZHBvcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVEcG9wKHJlcXVlc3QubWV0aG9kLCBhY3R1YWxFbmRwb2ludCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIERQb1A6IGRwb3AsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGVwOiBcImZpbmFsaXplUmVxdWVzdFwiLFxuICAgICAgICAgICAgbmFtZTogXCJkcG9wSW50ZXJjZXB0b3JcIixcbiAgICAgICAgICAgIG92ZXJyaWRlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZ2VuZXJhdGVEcG9wKG1ldGhvZCA9IFwiUE9TVFwiLCBlbmRwb2ludCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMubG9hZFRva2VuKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcml2YXRlS2V5ID0gbm9kZV9jcnlwdG8uY3JlYXRlUHJpdmF0ZUtleSh7XG4gICAgICAgICAgICAgICAga2V5OiB0b2tlbi5kcG9wS2V5LFxuICAgICAgICAgICAgICAgIGZvcm1hdDogXCJwZW1cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlYzFcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcHVibGljS2V5ID0gbm9kZV9jcnlwdG8uY3JlYXRlUHVibGljS2V5KHByaXZhdGVLZXkpO1xuICAgICAgICAgICAgY29uc3QgcHVibGljRGVyID0gcHVibGljS2V5LmV4cG9ydCh7IGZvcm1hdDogXCJkZXJcIiwgdHlwZTogXCJzcGtpXCIgfSk7XG4gICAgICAgICAgICBsZXQgcG9pbnRTdGFydCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJsaWNEZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHVibGljRGVyW2ldID09PSAweDA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50U3RhcnQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB4ID0gcHVibGljRGVyLnNsaWNlKHBvaW50U3RhcnQgKyAxLCBwb2ludFN0YXJ0ICsgMzMpO1xuICAgICAgICAgICAgY29uc3QgeSA9IHB1YmxpY0Rlci5zbGljZShwb2ludFN0YXJ0ICsgMzMsIHBvaW50U3RhcnQgKyA2NSk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgICAgYWxnOiBcIkVTMjU2XCIsXG4gICAgICAgICAgICAgICAgdHlwOiBcImRwb3Arand0XCIsXG4gICAgICAgICAgICAgICAgandrOiB7XG4gICAgICAgICAgICAgICAgICAgIGt0eTogXCJFQ1wiLFxuICAgICAgICAgICAgICAgICAgICBjcnY6IFwiUC0yNTZcIixcbiAgICAgICAgICAgICAgICAgICAgeDogeC50b1N0cmluZyhcImJhc2U2NHVybFwiKSxcbiAgICAgICAgICAgICAgICAgICAgeTogeS50b1N0cmluZyhcImJhc2U2NHVybFwiKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAganRpOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgICAgICAgICAgICAgIGh0bTogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGh0dTogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgaWF0OiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCNjQgPSBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShoZWFkZXIpKS50b1N0cmluZyhcImJhc2U2NHVybFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWRCNjQgPSBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSkudG9TdHJpbmcoXCJiYXNlNjR1cmxcIik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7aGVhZGVyQjY0fS4ke3BheWxvYWRCNjR9YDtcbiAgICAgICAgICAgIGNvbnN0IGFzbjFTaWduYXR1cmUgPSBub2RlX2NyeXB0by5zaWduKFwic2hhMjU2XCIsIEJ1ZmZlci5mcm9tKG1lc3NhZ2UpLCBwcml2YXRlS2V5KTtcbiAgICAgICAgICAgIGNvbnN0IHJhd1NpZ25hdHVyZSA9IHRoaXMuZGVyVG9SYXdTaWduYXR1cmUoYXNuMVNpZ25hdHVyZSk7XG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmVCNjQgPSByYXdTaWduYXR1cmUudG9TdHJpbmcoXCJiYXNlNjR1cmxcIik7XG4gICAgICAgICAgICByZXR1cm4gYCR7bWVzc2FnZX0uJHtzaWduYXR1cmVCNjR9YDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgRmFpbGVkIHRvIGdlbmVyYXRlIERwb3AgcHJvb2Y6ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpfWAsIHsgbG9nZ2VyOiB0aGlzLmxvZ2dlciwgdHJ5TmV4dExpbms6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBmcm9tTG9naW5DcmVkZW50aWFscyA9IChpbml0KSA9PiBhc3luYyAoeyBjYWxsZXJDbGllbnRDb25maWcgfSA9IHt9KSA9PiB7XG4gICAgaW5pdD8ubG9nZ2VyPy5kZWJ1Zz8uKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMgLSBmcm9tTG9naW5DcmVkZW50aWFsc1wiKTtcbiAgICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IHNoYXJlZEluaUZpbGVMb2FkZXIucGFyc2VLbm93bkZpbGVzKGluaXQgfHwge30pO1xuICAgIGNvbnN0IHByb2ZpbGVOYW1lID0gc2hhcmVkSW5pRmlsZUxvYWRlci5nZXRQcm9maWxlTmFtZSh7XG4gICAgICAgIHByb2ZpbGU6IGluaXQ/LnByb2ZpbGUgPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5wcm9maWxlLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG4gICAgaWYgKCFwcm9maWxlPy5sb2dpbl9zZXNzaW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBkb2VzIG5vdCBjb250YWluIGxvZ2luX3Nlc3Npb24uYCwge1xuICAgICAgICAgICAgdHJ5TmV4dExpbms6IHRydWUsXG4gICAgICAgICAgICBsb2dnZXI6IGluaXQ/LmxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGZldGNoZXIgPSBuZXcgTG9naW5DcmVkZW50aWFsc0ZldGNoZXIocHJvZmlsZSwgaW5pdCwgY2FsbGVyQ2xpZW50Q29uZmlnKTtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0IGZldGNoZXIubG9hZENyZWRlbnRpYWxzKCk7XG4gICAgcmV0dXJuIGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgXCJDUkVERU5USUFMU19MT0dJTlwiLCBcIkFEXCIpO1xufTtcblxuZXhwb3J0cy5mcm9tTG9naW5DcmVkZW50aWFscyA9IGZyb21Mb2dpbkNyZWRlbnRpYWxzO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHNoYXJlZEluaUZpbGVMb2FkZXIgPSByZXF1aXJlKCdAc21pdGh5L3NoYXJlZC1pbmktZmlsZS1sb2FkZXInKTtcbnZhciBwcm9wZXJ0eVByb3ZpZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlcicpO1xudmFyIGNsaWVudCA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL2NvcmUvY2xpZW50Jyk7XG52YXIgY3JlZGVudGlhbFByb3ZpZGVyTG9naW4gPSByZXF1aXJlKCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWxvZ2luJyk7XG5cbmNvbnN0IHJlc29sdmVDcmVkZW50aWFsU291cmNlID0gKGNyZWRlbnRpYWxTb3VyY2UsIHByb2ZpbGVOYW1lLCBsb2dnZXIpID0+IHtcbiAgICBjb25zdCBzb3VyY2VQcm92aWRlcnNNYXAgPSB7XG4gICAgICAgIEVjc0NvbnRhaW5lcjogYXN5bmMgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJvbUh0dHAgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwJyk7XG4gICAgICAgICAgICBjb25zdCB7IGZyb21Db250YWluZXJNZXRhZGF0YSB9ID0gYXdhaXQgaW1wb3J0KCdAc21pdGh5L2NyZWRlbnRpYWwtcHJvdmlkZXItaW1kcycpO1xuICAgICAgICAgICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pIC0gY3JlZGVudGlhbF9zb3VyY2UgaXMgRWNzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IHByb3BlcnR5UHJvdmlkZXIuY2hhaW4oZnJvbUh0dHAob3B0aW9ucyA/PyB7fSksIGZyb21Db250YWluZXJNZXRhZGF0YShvcHRpb25zKSkoKS50aGVuKHNldE5hbWVkUHJvdmlkZXIpO1xuICAgICAgICB9LFxuICAgICAgICBFYzJJbnN0YW5jZU1ldGFkYXRhOiBhc3luYyAob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pIC0gY3JlZGVudGlhbF9zb3VyY2UgaXMgRWMySW5zdGFuY2VNZXRhZGF0YVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJvbUluc3RhbmNlTWV0YWRhdGEgfSA9IGF3YWl0IGltcG9ydCgnQHNtaXRoeS9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHMnKTtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiBmcm9tSW5zdGFuY2VNZXRhZGF0YShvcHRpb25zKSgpLnRoZW4oc2V0TmFtZWRQcm92aWRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIEVudmlyb25tZW50OiBhc3luYyAob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pIC0gY3JlZGVudGlhbF9zb3VyY2UgaXMgRW52aXJvbm1lbnRcIik7XG4gICAgICAgICAgICBjb25zdCB7IGZyb21FbnYgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1lbnYnKTtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiBmcm9tRW52KG9wdGlvbnMpKCkudGhlbihzZXROYW1lZFByb3ZpZGVyKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChjcmVkZW50aWFsU291cmNlIGluIHNvdXJjZVByb3ZpZGVyc01hcCkge1xuICAgICAgICByZXR1cm4gc291cmNlUHJvdmlkZXJzTWFwW2NyZWRlbnRpYWxTb3VyY2VdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGBVbnN1cHBvcnRlZCBjcmVkZW50aWFsIHNvdXJjZSBpbiBwcm9maWxlICR7cHJvZmlsZU5hbWV9LiBHb3QgJHtjcmVkZW50aWFsU291cmNlfSwgYCArXG4gICAgICAgICAgICBgZXhwZWN0ZWQgRWNzQ29udGFpbmVyIG9yIEVjMkluc3RhbmNlTWV0YWRhdGEgb3IgRW52aXJvbm1lbnQuYCwgeyBsb2dnZXIgfSk7XG4gICAgfVxufTtcbmNvbnN0IHNldE5hbWVkUHJvdmlkZXIgPSAoY3JlZHMpID0+IGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkcywgXCJDUkVERU5USUFMU19QUk9GSUxFX05BTUVEX1BST1ZJREVSXCIsIFwicFwiKTtcblxuY29uc3QgaXNBc3N1bWVSb2xlUHJvZmlsZSA9IChhcmcsIHsgcHJvZmlsZSA9IFwiZGVmYXVsdFwiLCBsb2dnZXIgfSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIChCb29sZWFuKGFyZykgJiZcbiAgICAgICAgdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICB0eXBlb2YgYXJnLnJvbGVfYXJuID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIFtcInVuZGVmaW5lZFwiLCBcInN0cmluZ1wiXS5pbmRleE9mKHR5cGVvZiBhcmcucm9sZV9zZXNzaW9uX25hbWUpID4gLTEgJiZcbiAgICAgICAgW1widW5kZWZpbmVkXCIsIFwic3RyaW5nXCJdLmluZGV4T2YodHlwZW9mIGFyZy5leHRlcm5hbF9pZCkgPiAtMSAmJlxuICAgICAgICBbXCJ1bmRlZmluZWRcIiwgXCJzdHJpbmdcIl0uaW5kZXhPZih0eXBlb2YgYXJnLm1mYV9zZXJpYWwpID4gLTEgJiZcbiAgICAgICAgKGlzQXNzdW1lUm9sZVdpdGhTb3VyY2VQcm9maWxlKGFyZywgeyBwcm9maWxlLCBsb2dnZXIgfSkgfHwgaXNDcmVkZW50aWFsU291cmNlUHJvZmlsZShhcmcsIHsgcHJvZmlsZSwgbG9nZ2VyIH0pKSk7XG59O1xuY29uc3QgaXNBc3N1bWVSb2xlV2l0aFNvdXJjZVByb2ZpbGUgPSAoYXJnLCB7IHByb2ZpbGUsIGxvZ2dlciB9KSA9PiB7XG4gICAgY29uc3Qgd2l0aFNvdXJjZVByb2ZpbGUgPSB0eXBlb2YgYXJnLnNvdXJjZV9wcm9maWxlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBhcmcuY3JlZGVudGlhbF9zb3VyY2UgPT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYgKHdpdGhTb3VyY2VQcm9maWxlKSB7XG4gICAgICAgIGxvZ2dlcj8uZGVidWc/LihgICAgICR7cHJvZmlsZX0gaXNBc3N1bWVSb2xlV2l0aFNvdXJjZVByb2ZpbGUgc291cmNlX3Byb2ZpbGU9JHthcmcuc291cmNlX3Byb2ZpbGV9YCk7XG4gICAgfVxuICAgIHJldHVybiB3aXRoU291cmNlUHJvZmlsZTtcbn07XG5jb25zdCBpc0NyZWRlbnRpYWxTb3VyY2VQcm9maWxlID0gKGFyZywgeyBwcm9maWxlLCBsb2dnZXIgfSkgPT4ge1xuICAgIGNvbnN0IHdpdGhQcm92aWRlclByb2ZpbGUgPSB0eXBlb2YgYXJnLmNyZWRlbnRpYWxfc291cmNlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBhcmcuc291cmNlX3Byb2ZpbGUgPT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYgKHdpdGhQcm92aWRlclByb2ZpbGUpIHtcbiAgICAgICAgbG9nZ2VyPy5kZWJ1Zz8uKGAgICAgJHtwcm9maWxlfSBpc0NyZWRlbnRpYWxTb3VyY2VQcm9maWxlIGNyZWRlbnRpYWxfc291cmNlPSR7YXJnLmNyZWRlbnRpYWxfc291cmNlfWApO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFByb3ZpZGVyUHJvZmlsZTtcbn07XG5jb25zdCByZXNvbHZlQXNzdW1lUm9sZUNyZWRlbnRpYWxzID0gYXN5bmMgKHByb2ZpbGVOYW1lLCBwcm9maWxlcywgb3B0aW9ucywgY2FsbGVyQ2xpZW50Q29uZmlnLCB2aXNpdGVkUHJvZmlsZXMgPSB7fSwgcmVzb2x2ZVByb2ZpbGVEYXRhKSA9PiB7XG4gICAgb3B0aW9ucy5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1pbmkgLSByZXNvbHZlQXNzdW1lUm9sZUNyZWRlbnRpYWxzIChTVFMpXCIpO1xuICAgIGNvbnN0IHByb2ZpbGVEYXRhID0gcHJvZmlsZXNbcHJvZmlsZU5hbWVdO1xuICAgIGNvbnN0IHsgc291cmNlX3Byb2ZpbGUsIHJlZ2lvbiB9ID0gcHJvZmlsZURhdGE7XG4gICAgaWYgKCFvcHRpb25zLnJvbGVBc3N1bWVyKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RGVmYXVsdFJvbGVBc3N1bWVyIH0gPSBhd2FpdCBpbXBvcnQoJ0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL3N0cycpO1xuICAgICAgICBvcHRpb25zLnJvbGVBc3N1bWVyID0gZ2V0RGVmYXVsdFJvbGVBc3N1bWVyKHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuY2xpZW50Q29uZmlnLFxuICAgICAgICAgICAgY3JlZGVudGlhbFByb3ZpZGVyTG9nZ2VyOiBvcHRpb25zLmxvZ2dlcixcbiAgICAgICAgICAgIHBhcmVudENsaWVudENvbmZpZzoge1xuICAgICAgICAgICAgICAgIC4uLmNhbGxlckNsaWVudENvbmZpZyxcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zPy5wYXJlbnRDbGllbnRDb25maWcsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiByZWdpb24gPz8gb3B0aW9ucz8ucGFyZW50Q2xpZW50Q29uZmlnPy5yZWdpb24gPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5yZWdpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBvcHRpb25zLmNsaWVudFBsdWdpbnMpO1xuICAgIH1cbiAgICBpZiAoc291cmNlX3Byb2ZpbGUgJiYgc291cmNlX3Byb2ZpbGUgaW4gdmlzaXRlZFByb2ZpbGVzKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgRGV0ZWN0ZWQgYSBjeWNsZSBhdHRlbXB0aW5nIHRvIHJlc29sdmUgY3JlZGVudGlhbHMgZm9yIHByb2ZpbGVgICtcbiAgICAgICAgICAgIGAgJHtzaGFyZWRJbmlGaWxlTG9hZGVyLmdldFByb2ZpbGVOYW1lKG9wdGlvbnMpfS4gUHJvZmlsZXMgdmlzaXRlZDogYCArXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2aXNpdGVkUHJvZmlsZXMpLmpvaW4oXCIsIFwiKSwgeyBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyIH0pO1xuICAgIH1cbiAgICBvcHRpb25zLmxvZ2dlcj8uZGVidWcoYEBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pIC0gZmluZGluZyBjcmVkZW50aWFsIHJlc29sdmVyIHVzaW5nICR7c291cmNlX3Byb2ZpbGUgPyBgc291cmNlX3Byb2ZpbGU9WyR7c291cmNlX3Byb2ZpbGV9XWAgOiBgcHJvZmlsZT1bJHtwcm9maWxlTmFtZX1dYH1gKTtcbiAgICBjb25zdCBzb3VyY2VDcmVkc1Byb3ZpZGVyID0gc291cmNlX3Byb2ZpbGVcbiAgICAgICAgPyByZXNvbHZlUHJvZmlsZURhdGEoc291cmNlX3Byb2ZpbGUsIHByb2ZpbGVzLCBvcHRpb25zLCBjYWxsZXJDbGllbnRDb25maWcsIHtcbiAgICAgICAgICAgIC4uLnZpc2l0ZWRQcm9maWxlcyxcbiAgICAgICAgICAgIFtzb3VyY2VfcHJvZmlsZV06IHRydWUsXG4gICAgICAgIH0sIGlzQ3JlZGVudGlhbFNvdXJjZVdpdGhvdXRSb2xlQXJuKHByb2ZpbGVzW3NvdXJjZV9wcm9maWxlXSA/PyB7fSkpXG4gICAgICAgIDogKGF3YWl0IHJlc29sdmVDcmVkZW50aWFsU291cmNlKHByb2ZpbGVEYXRhLmNyZWRlbnRpYWxfc291cmNlLCBwcm9maWxlTmFtZSwgb3B0aW9ucy5sb2dnZXIpKG9wdGlvbnMpKSgpO1xuICAgIGlmIChpc0NyZWRlbnRpYWxTb3VyY2VXaXRob3V0Um9sZUFybihwcm9maWxlRGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUNyZWRzUHJvdmlkZXIudGhlbigoY3JlZHMpID0+IGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkcywgXCJDUkVERU5USUFMU19QUk9GSUxFX1NPVVJDRV9QUk9GSUxFXCIsIFwib1wiKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBSb2xlQXJuOiBwcm9maWxlRGF0YS5yb2xlX2FybixcbiAgICAgICAgICAgIFJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZURhdGEucm9sZV9zZXNzaW9uX25hbWUgfHwgYGF3cy1zZGstanMtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBFeHRlcm5hbElkOiBwcm9maWxlRGF0YS5leHRlcm5hbF9pZCxcbiAgICAgICAgICAgIER1cmF0aW9uU2Vjb25kczogcGFyc2VJbnQocHJvZmlsZURhdGEuZHVyYXRpb25fc2Vjb25kcyB8fCBcIjM2MDBcIiwgMTApLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IG1mYV9zZXJpYWwgfSA9IHByb2ZpbGVEYXRhO1xuICAgICAgICBpZiAobWZhX3NlcmlhbCkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm1mYUNvZGVQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSByZXF1aXJlcyBtdWx0aS1mYWN0b3IgYXV0aGVudGljYXRpb24sIGJ1dCBubyBNRkEgY29kZSBjYWxsYmFjayB3YXMgcHJvdmlkZWQuYCwgeyBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyLCB0cnlOZXh0TGluazogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbXMuU2VyaWFsTnVtYmVyID0gbWZhX3NlcmlhbDtcbiAgICAgICAgICAgIHBhcmFtcy5Ub2tlbkNvZGUgPSBhd2FpdCBvcHRpb25zLm1mYUNvZGVQcm92aWRlcihtZmFfc2VyaWFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VDcmVkcyA9IGF3YWl0IHNvdXJjZUNyZWRzUHJvdmlkZXI7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnJvbGVBc3N1bWVyKHNvdXJjZUNyZWRzLCBwYXJhbXMpLnRoZW4oKGNyZWRzKSA9PiBjbGllbnQuc2V0Q3JlZGVudGlhbEZlYXR1cmUoY3JlZHMsIFwiQ1JFREVOVElBTFNfUFJPRklMRV9TT1VSQ0VfUFJPRklMRVwiLCBcIm9cIikpO1xuICAgIH1cbn07XG5jb25zdCBpc0NyZWRlbnRpYWxTb3VyY2VXaXRob3V0Um9sZUFybiA9IChzZWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuICFzZWN0aW9uLnJvbGVfYXJuICYmICEhc2VjdGlvbi5jcmVkZW50aWFsX3NvdXJjZTtcbn07XG5cbmNvbnN0IGlzTG9naW5Qcm9maWxlID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gQm9vbGVhbihkYXRhICYmIGRhdGEubG9naW5fc2Vzc2lvbik7XG59O1xuY29uc3QgcmVzb2x2ZUxvZ2luQ3JlZGVudGlhbHMgPSBhc3luYyAocHJvZmlsZU5hbWUsIG9wdGlvbnMsIGNhbGxlckNsaWVudENvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgY3JlZGVudGlhbFByb3ZpZGVyTG9naW4uZnJvbUxvZ2luQ3JlZGVudGlhbHMoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBwcm9maWxlOiBwcm9maWxlTmFtZSxcbiAgICB9KSh7IGNhbGxlckNsaWVudENvbmZpZyB9KTtcbiAgICByZXR1cm4gY2xpZW50LnNldENyZWRlbnRpYWxGZWF0dXJlKGNyZWRlbnRpYWxzLCBcIkNSRURFTlRJQUxTX1BST0ZJTEVfTE9HSU5cIiwgXCJBQ1wiKTtcbn07XG5cbmNvbnN0IGlzUHJvY2Vzc1Byb2ZpbGUgPSAoYXJnKSA9PiBCb29sZWFuKGFyZykgJiYgdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJnLmNyZWRlbnRpYWxfcHJvY2VzcyA9PT0gXCJzdHJpbmdcIjtcbmNvbnN0IHJlc29sdmVQcm9jZXNzQ3JlZGVudGlhbHMgPSBhc3luYyAob3B0aW9ucywgcHJvZmlsZSkgPT4gaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXByb2Nlc3MnKS50aGVuKCh7IGZyb21Qcm9jZXNzIH0pID0+IGZyb21Qcm9jZXNzKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHByb2ZpbGUsXG59KSgpLnRoZW4oKGNyZWRzKSA9PiBjbGllbnQuc2V0Q3JlZGVudGlhbEZlYXR1cmUoY3JlZHMsIFwiQ1JFREVOVElBTFNfUFJPRklMRV9QUk9DRVNTXCIsIFwidlwiKSkpO1xuXG5jb25zdCByZXNvbHZlU3NvQ3JlZGVudGlhbHMgPSBhc3luYyAocHJvZmlsZSwgcHJvZmlsZURhdGEsIG9wdGlvbnMgPSB7fSwgY2FsbGVyQ2xpZW50Q29uZmlnKSA9PiB7XG4gICAgY29uc3QgeyBmcm9tU1NPIH0gPSBhd2FpdCBpbXBvcnQoJ0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItc3NvJyk7XG4gICAgcmV0dXJuIGZyb21TU08oe1xuICAgICAgICBwcm9maWxlLFxuICAgICAgICBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyLFxuICAgICAgICBwYXJlbnRDbGllbnRDb25maWc6IG9wdGlvbnMucGFyZW50Q2xpZW50Q29uZmlnLFxuICAgICAgICBjbGllbnRDb25maWc6IG9wdGlvbnMuY2xpZW50Q29uZmlnLFxuICAgIH0pKHtcbiAgICAgICAgY2FsbGVyQ2xpZW50Q29uZmlnLFxuICAgIH0pLnRoZW4oKGNyZWRzKSA9PiB7XG4gICAgICAgIGlmIChwcm9maWxlRGF0YS5zc29fc2Vzc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkcywgXCJDUkVERU5USUFMU19QUk9GSUxFX1NTT1wiLCBcInJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50LnNldENyZWRlbnRpYWxGZWF0dXJlKGNyZWRzLCBcIkNSRURFTlRJQUxTX1BST0ZJTEVfU1NPX0xFR0FDWVwiLCBcInRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBpc1Nzb1Byb2ZpbGUgPSAoYXJnKSA9PiBhcmcgJiZcbiAgICAodHlwZW9mIGFyZy5zc29fc3RhcnRfdXJsID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGVvZiBhcmcuc3NvX2FjY291bnRfaWQgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIGFyZy5zc29fc2Vzc2lvbiA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlb2YgYXJnLnNzb19yZWdpb24gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgdHlwZW9mIGFyZy5zc29fcm9sZV9uYW1lID09PSBcInN0cmluZ1wiKTtcblxuY29uc3QgaXNTdGF0aWNDcmVkc1Byb2ZpbGUgPSAoYXJnKSA9PiBCb29sZWFuKGFyZykgJiZcbiAgICB0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiICYmXG4gICAgdHlwZW9mIGFyZy5hd3NfYWNjZXNzX2tleV9pZCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgIHR5cGVvZiBhcmcuYXdzX3NlY3JldF9hY2Nlc3Nfa2V5ID09PSBcInN0cmluZ1wiICYmXG4gICAgW1widW5kZWZpbmVkXCIsIFwic3RyaW5nXCJdLmluZGV4T2YodHlwZW9mIGFyZy5hd3Nfc2Vzc2lvbl90b2tlbikgPiAtMSAmJlxuICAgIFtcInVuZGVmaW5lZFwiLCBcInN0cmluZ1wiXS5pbmRleE9mKHR5cGVvZiBhcmcuYXdzX2FjY291bnRfaWQpID4gLTE7XG5jb25zdCByZXNvbHZlU3RhdGljQ3JlZGVudGlhbHMgPSBhc3luYyAocHJvZmlsZSwgb3B0aW9ucykgPT4ge1xuICAgIG9wdGlvbnM/LmxvZ2dlcj8uZGVidWcoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaSAtIHJlc29sdmVTdGF0aWNDcmVkZW50aWFsc1wiKTtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHtcbiAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2ZpbGUuYXdzX2FjY2Vzc19rZXlfaWQsXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvZmlsZS5hd3Nfc2VjcmV0X2FjY2Vzc19rZXksXG4gICAgICAgIHNlc3Npb25Ub2tlbjogcHJvZmlsZS5hd3Nfc2Vzc2lvbl90b2tlbixcbiAgICAgICAgLi4uKHByb2ZpbGUuYXdzX2NyZWRlbnRpYWxfc2NvcGUgJiYgeyBjcmVkZW50aWFsU2NvcGU6IHByb2ZpbGUuYXdzX2NyZWRlbnRpYWxfc2NvcGUgfSksXG4gICAgICAgIC4uLihwcm9maWxlLmF3c19hY2NvdW50X2lkICYmIHsgYWNjb3VudElkOiBwcm9maWxlLmF3c19hY2NvdW50X2lkIH0pLFxuICAgIH07XG4gICAgcmV0dXJuIGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgXCJDUkVERU5USUFMU19QUk9GSUxFXCIsIFwiblwiKTtcbn07XG5cbmNvbnN0IGlzV2ViSWRlbnRpdHlQcm9maWxlID0gKGFyZykgPT4gQm9vbGVhbihhcmcpICYmXG4gICAgdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJlxuICAgIHR5cGVvZiBhcmcud2ViX2lkZW50aXR5X3Rva2VuX2ZpbGUgPT09IFwic3RyaW5nXCIgJiZcbiAgICB0eXBlb2YgYXJnLnJvbGVfYXJuID09PSBcInN0cmluZ1wiICYmXG4gICAgW1widW5kZWZpbmVkXCIsIFwic3RyaW5nXCJdLmluZGV4T2YodHlwZW9mIGFyZy5yb2xlX3Nlc3Npb25fbmFtZSkgPiAtMTtcbmNvbnN0IHJlc29sdmVXZWJJZGVudGl0eUNyZWRlbnRpYWxzID0gYXN5bmMgKHByb2ZpbGUsIG9wdGlvbnMsIGNhbGxlckNsaWVudENvbmZpZykgPT4gaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXdlYi1pZGVudGl0eScpLnRoZW4oKHsgZnJvbVRva2VuRmlsZSB9KSA9PiBmcm9tVG9rZW5GaWxlKHtcbiAgICB3ZWJJZGVudGl0eVRva2VuRmlsZTogcHJvZmlsZS53ZWJfaWRlbnRpdHlfdG9rZW5fZmlsZSxcbiAgICByb2xlQXJuOiBwcm9maWxlLnJvbGVfYXJuLFxuICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZS5yb2xlX3Nlc3Npb25fbmFtZSxcbiAgICByb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eTogb3B0aW9ucy5yb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSxcbiAgICBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyLFxuICAgIHBhcmVudENsaWVudENvbmZpZzogb3B0aW9ucy5wYXJlbnRDbGllbnRDb25maWcsXG59KSh7XG4gICAgY2FsbGVyQ2xpZW50Q29uZmlnLFxufSkudGhlbigoY3JlZHMpID0+IGNsaWVudC5zZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkcywgXCJDUkVERU5USUFMU19QUk9GSUxFX1NUU19XRUJfSURfVE9LRU5cIiwgXCJxXCIpKSk7XG5cbmNvbnN0IHJlc29sdmVQcm9maWxlRGF0YSA9IGFzeW5jIChwcm9maWxlTmFtZSwgcHJvZmlsZXMsIG9wdGlvbnMsIGNhbGxlckNsaWVudENvbmZpZywgdmlzaXRlZFByb2ZpbGVzID0ge30sIGlzQXNzdW1lUm9sZVJlY3Vyc2l2ZUNhbGwgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG4gICAgaWYgKE9iamVjdC5rZXlzKHZpc2l0ZWRQcm9maWxlcykubGVuZ3RoID4gMCAmJiBpc1N0YXRpY0NyZWRzUHJvZmlsZShkYXRhKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVN0YXRpY0NyZWRlbnRpYWxzKGRhdGEsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaXNBc3N1bWVSb2xlUmVjdXJzaXZlQ2FsbCB8fCBpc0Fzc3VtZVJvbGVQcm9maWxlKGRhdGEsIHsgcHJvZmlsZTogcHJvZmlsZU5hbWUsIGxvZ2dlcjogb3B0aW9ucy5sb2dnZXIgfSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBc3N1bWVSb2xlQ3JlZGVudGlhbHMocHJvZmlsZU5hbWUsIHByb2ZpbGVzLCBvcHRpb25zLCBjYWxsZXJDbGllbnRDb25maWcsIHZpc2l0ZWRQcm9maWxlcywgcmVzb2x2ZVByb2ZpbGVEYXRhKTtcbiAgICB9XG4gICAgaWYgKGlzU3RhdGljQ3JlZHNQcm9maWxlKGRhdGEpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlU3RhdGljQ3JlZGVudGlhbHMoZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChpc1dlYklkZW50aXR5UHJvZmlsZShkYXRhKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVdlYklkZW50aXR5Q3JlZGVudGlhbHMoZGF0YSwgb3B0aW9ucywgY2FsbGVyQ2xpZW50Q29uZmlnKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvY2Vzc1Byb2ZpbGUoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9jZXNzQ3JlZGVudGlhbHMob3B0aW9ucywgcHJvZmlsZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoaXNTc29Qcm9maWxlKGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNvbHZlU3NvQ3JlZGVudGlhbHMocHJvZmlsZU5hbWUsIGRhdGEsIG9wdGlvbnMsIGNhbGxlckNsaWVudENvbmZpZyk7XG4gICAgfVxuICAgIGlmIChpc0xvZ2luUHJvZmlsZShkYXRhKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUxvZ2luQ3JlZGVudGlhbHMocHJvZmlsZU5hbWUsIG9wdGlvbnMsIGNhbGxlckNsaWVudENvbmZpZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgQ291bGQgbm90IHJlc29sdmUgY3JlZGVudGlhbHMgdXNpbmcgcHJvZmlsZTogWyR7cHJvZmlsZU5hbWV9XSBpbiBjb25maWd1cmF0aW9uL2NyZWRlbnRpYWxzIGZpbGUocykuYCwgeyBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyIH0pO1xufTtcblxuY29uc3QgZnJvbUluaSA9IChpbml0ID0ge30pID0+IGFzeW5jICh7IGNhbGxlckNsaWVudENvbmZpZyB9ID0ge30pID0+IHtcbiAgICBpbml0LmxvZ2dlcj8uZGVidWcoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaSAtIGZyb21JbmlcIik7XG4gICAgY29uc3QgcHJvZmlsZXMgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLnBhcnNlS25vd25GaWxlcyhpbml0KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb2ZpbGVEYXRhKHNoYXJlZEluaUZpbGVMb2FkZXIuZ2V0UHJvZmlsZU5hbWUoe1xuICAgICAgICBwcm9maWxlOiBpbml0LnByb2ZpbGUgPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5wcm9maWxlLFxuICAgIH0pLCBwcm9maWxlcywgaW5pdCwgY2FsbGVyQ2xpZW50Q29uZmlnKTtcbn07XG5cbmV4cG9ydHMuZnJvbUluaSA9IGZyb21Jbmk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksU0FBUztBQUNiLFFBQUksbUJBQW1CO0FBQ3ZCLFFBQUksc0JBQXNCO0FBQzFCLFFBQUksZUFBZTtBQUNuQixRQUFJLGNBQWMsVUFBUSxhQUFhO0FBQ3ZDLFFBQUksVUFBVSxVQUFRLFNBQVM7QUFDL0IsUUFBSSxVQUFVLFVBQVEsU0FBUztBQUMvQixRQUFJLFlBQVksVUFBUSxXQUFXO0FBRW5DLFFBQU0sMEJBQU4sTUFBTSx5QkFBd0I7QUFBQSxNQUMxQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPLG9CQUFvQixJQUFJLEtBQUs7QUFBQSxNQUNwQyxZQUFZLGFBQWEsTUFBTSxvQkFBb0I7QUFDL0MsYUFBSyxjQUFjO0FBQ25CLGFBQUssT0FBTztBQUNaLGFBQUsscUJBQXFCO0FBQUEsTUFDOUI7QUFBQSxNQUNBLE1BQU0sa0JBQWtCO0FBQ3BCLGNBQU0sUUFBUSxNQUFNLEtBQUssVUFBVTtBQUNuQyxZQUFJLENBQUMsT0FBTztBQUNSLGdCQUFNLElBQUksaUJBQWlCLHlCQUF5QixzQ0FBc0MsS0FBSyxZQUFZLDRDQUE0QyxFQUFFLGFBQWEsT0FBTyxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQUEsUUFDdE07QUFDQSxjQUFNLGNBQWMsTUFBTTtBQUMxQixjQUFNLE1BQU0sS0FBSyxJQUFJO0FBQ3JCLGNBQU0sYUFBYSxJQUFJLEtBQUssWUFBWSxTQUFTLEVBQUUsUUFB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
